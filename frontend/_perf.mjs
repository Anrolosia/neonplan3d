// Temporary, untracked: performance harness for weak wall tablets (Fire HD in Fully / Silk), against preview/index.html.
// Usage (from frontend/): node _perf.mjs <label> [scenario,...] [--profile=fire|fully|portrait|desktop] [--secs=N]
// Writes JSON per scenario into $PERF_OUT/<label>/.
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const label = args[0] ?? "run";
const opt = Object.fromEntries(args.filter((a) => a.startsWith("--")).map((a) => a.slice(2).split("=")));
const wanted = (args[1] && !args[1].startsWith("--") ? args[1] : "all").split(",");
const outDir = resolve(process.env.PERF_OUT ?? "C:/Users/Becke/AppData/Local/Temp/claude/c--dev-floorplan-3d/75e50a00-a2a1-45a8-a8c0-9e1324b28b78/scratchpad/perf", label);
mkdirSync(outDir, { recursive: true });

const UA = {
  fire: "Mozilla/5.0 (Linux; Android 9; KFTRWI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/118.3.1 like Chrome/118.0.5993.111 Safari/537.36",
  fully: "Mozilla/5.0 (Linux; Android 9; KFTRWI Build/PS7327; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/118.0.5993.111 Safari/537.36",
};
const PROFILES = {
  // Fire HD 10 in Silk, landscape, quality left on auto (the app's own detection)
  fire: { width: 1280, height: 800, dpr: 1.5, ua: UA.fire, quality: null, throttle: 6, mobile: true },
  // Fire HD 10 in Fully Kiosk (WebView UA), portrait, auto
  fully: { width: 800, height: 1280, dpr: 1.5, ua: UA.fully, quality: null, throttle: 6, mobile: true },
  // the same tablet with quality forced to "low" (like the settings menu)
  low: { width: 1280, height: 800, dpr: 1.5, ua: UA.fully, quality: "low", throttle: 6, mobile: true },
  // a desktop on high: must look and behave as before
  desktop: { width: 1280, height: 800, dpr: 1, ua: null, quality: "high", throttle: 1, mobile: false },
};
const profile = { ...PROFILES[opt.profile ?? "fire"], ...(opt.throttle ? { throttle: +opt.throttle } : {}) };

// --- demo data changes
const QUIET = `
// quiet house: nothing that animates on its own (robot docked, fan off, music paused, pool pump off, no lamp effect, no pets)
DEMO_STATES["vacuum.saugi"].state = "docked";
DEMO_STATES["fan.kinderzimmer"].state = "off";
for (const id of ["media_player.kueche_lautsprecher", "media_player.bad_lautsprecher"]) DEMO_STATES[id].state = "paused";
DEMO_STATES["switch.pool_filterpumpe"].state = "off";
delete DEMO_STATES["light.led_band"].attributes.effect;
DEMO_BUILDING.settings.pets = { ...DEMO_BUILDING.settings.pets, on: false };
DEMO_BUILDING.settings.halloween = { ghost: false };
DEMO_STATES["media_player.fernseher"].state = "paused";
for (const id of ["sensor.pv_leistung", "sensor.balkon_leistung"]) DEMO_STATES[id].state = "0";
`;
const HEAVY = `
// heavy plan: the ground floor three more times (as further storeys) and 160 plugs with a power sensor each
{
  const eg = DEMO_BUILDING.floors[0];
  for (let k = 1; k <= 3; k++) {
    const f = JSON.parse(JSON.stringify(eg));
    const p = "h" + k + "_";
    f.id = p + eg.id; f.name = "Etage " + k; f.elevation = 2.75 * (k + 1);
    f.outdoor = [];
    for (const r of f.rooms) { r.id = p + r.id; r.area_id = null; }
    for (const o of f.openings) { o.id = p + o.id; o.room_id = p + o.room_id; if (o.wall) o.wall = p + o.wall; }
    for (const w of f.walls ?? []) w.id = p + w.id;
    f.furniture = f.furniture.filter((m) => !m.type.startsWith("pool_") && m.type !== "parking" && !m.type.startsWith("pack:")).map((m) => ({ ...m, id: p + m.id }));
    f.placements = [];
    DEMO_BUILDING.floors.push(f);
  }
  const floors = DEMO_BUILDING.floors.filter((f) => f.id !== "og");
  for (let i = 0; i < 160; i++) {
    const f = floors[i % floors.length];
    const sw = "switch.plug_" + i, pw = "sensor.plug_" + i + "_power";
    DEMO_ENTITIES[sw] = { entity_id: sw, area_id: null, device_id: "dplug" + i };
    DEMO_ENTITIES[pw] = { entity_id: pw, area_id: null, device_id: "dplug" + i };
    DEMO_STATES[sw] = { entity_id: sw, state: "on", attributes: { friendly_name: "Steckdose " + i } };
    DEMO_STATES[pw] = { entity_id: pw, state: String(20 + (i % 50)), attributes: { friendly_name: "Steckdose " + i + " Leistung", device_class: "power", unit_of_measurement: "W" } };
    f.placements.push({ entity_id: sw, x: 0.6 + ((i * 1.37) % 9), z: 0.5 + ((i * 2.11) % 7.5), y: null });
  }
}
`;

// --- scenarios: [extra demo js, query, action]
const S = {
  idle_demo: { extra: "", query: "", secs: 60 },
  idle_quiet: { extra: QUIET, query: "", secs: 60 },
  flows: { extra: QUIET, query: "?flows&pv=5400", secs: 60 },
  effect: { extra: QUIET + 'DEMO_STATES["light.led_band"].attributes.effect = "colorloop";', query: "", secs: 30 },
  tick: { extra: QUIET, query: "", secs: 30, tick: { ids: ["sensor.fernseher_leistung"], every: 1000 } },
  alarm: { extra: QUIET, query: "?alerts", secs: 30 },
  cover: { extra: QUIET, query: "", secs: 30, cover: true },
  tap: { extra: QUIET, query: "", secs: 0, tap: true },
  tap_busy: { extra: QUIET, query: "?flows&pv=5400", secs: 0, tap: true },
  heavy_idle: { extra: QUIET + HEAVY, query: "", secs: 30 },
  heavy_tick: { extra: QUIET + HEAVY, query: "", secs: 30, tick: { ids: Array.from({ length: 160 }, (_, i) => `sensor.plug_${i}_power`), every: 1000 } },
  heap: { extra: QUIET + HEAVY, query: "", secs: 0, heap: true },
};
const names = wanted[0] === "all" ? Object.keys(S) : wanted;

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".css": "text/css", ".woff2": "font/woff2" };
let extraJs = "";
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (path.startsWith("private") || !existsSync(file)) return res.writeHead(404).end();
  let body = readFileSync(file);
  if (path.endsWith("demo-data.js")) body = body.toString() + "\n" + extraJs;
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(body);
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const executablePath = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find((p) => existsSync(p));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// counts frames that draw (gl.clear of a visible canvas), the time of every animation-frame callback that drew
const INSTRUMENT = () => {
  const P = (window.__perf = { raf: 0, renders: 0, draws: 0, frames: [], ticks: 0 });
  const orig = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = (cb) =>
    orig((t) => {
      const r0 = P.renders;
      const s = performance.now();
      try {
        cb(t);
      } finally {
        P.raf++;
        if (P.renders > r0) P.frames.push(performance.now() - s);
      }
    });
  for (const C of [window.WebGL2RenderingContext, window.WebGLRenderingContext]) {
    if (!C) continue;
    const clear = C.prototype.clear;
    C.prototype.clear = function (m) {
      if (this.canvas && this.canvas.isConnected) P.renders++;
      return clear.call(this, m);
    };
    for (const k of ["drawElements", "drawArrays", "drawElementsInstanced", "drawArraysInstanced"]) {
      const f = C.prototype[k];
      C.prototype[k] = function (...a) {
        P.draws++;
        return f.apply(this, a);
      };
    }
  }
};

const results = {};
let bcdp = null;
// CPU time of the GPU process (SwiftShader draws there: the fill cost of every frame)
const gpuCpu = async () => {
  const info = await bcdp.send("SystemInfo.getProcessInfo");
  return info.processInfo.filter((p) => p.type === "GPU" || p.type === "gpu-process").reduce((a, p) => a + p.cpuTime, 0);
};
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
bcdp = await browser.target().createCDPSession();
for (const name of names) {
  const sc = S[name];
  extraJs = sc.extra;
  const page = await browser.newPage();
  page.on("pageerror", (e) => console.log("PAGEERROR", e.message));
  if (profile.ua) await page.setUserAgent(profile.ua);
  await page.setViewport({ width: profile.width, height: profile.height, deviceScaleFactor: profile.dpr, isMobile: profile.mobile, hasTouch: profile.mobile });
  await page.evaluateOnNewDocument(INSTRUMENT);
  await page.evaluateOnNewDocument((q) => {
    try {
      if (q) localStorage.setItem("neonplan3d.quality", q);
      else localStorage.removeItem("neonplan3d.quality");
    } catch {}
  }, profile.quality);
  const cdp = await page.createCDPSession();
  await cdp.send("Performance.enable");
  await page.goto(`http://127.0.0.1:${server.address().port}/preview/index.html${sc.query}`, { waitUntil: "load", timeout: 180000 });
  await sleep(9000);
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: profile.throttle });
  await sleep(3000);
  const info = await page.evaluate(() => {
    const deep = (r, sel) => {
      const hit = r.querySelector(sel);
      if (hit) return hit;
      for (const el of r.querySelectorAll("*")) if (el.shadowRoot) {
        const h = deep(el.shadowRoot, sel);
        if (h) return h;
      }
      return null;
    };
    const view = deep(document, "fp3d-view3d");
    const v = view?.viewer;
    return { low: v?.lowQuality ?? null, pixelRatio: v?.renderer?.getPixelRatio?.() ?? null, ua: navigator.userAgent, hasView: !!view };
  });
  const metrics = async () => Object.fromEntries((await cdp.send("Performance.getMetrics")).metrics.map((m) => [m.name, m.value]));
  const heapNow = async () => {
    await cdp.send("HeapProfiler.collectGarbage");
    return Math.round((await metrics()).JSHeapUsedSize / 1024 / 1024 * 10) / 10;
  };
  const out = { scenario: name, profile: opt.profile ?? "fire", ...info };
  if (sc.secs) {
    const secs = Number(opt.secs ?? sc.secs);
    // the state changes a scenario makes while it is measured
    await page.evaluate(
      (sc) => {
        const panel = window.fp3dPanel;
        if (sc.tick) {
          let n = 0;
          window.__tick = setInterval(() => {
            const h = panel.hass;
            const states = { ...h.states };
            n++;
            for (const id of sc.tick.ids) states[id] = { ...states[id], state: String(Math.round(50 + 40 * Math.sin(n + id.length) + Math.random() * 30)), last_updated: new Date().toISOString() };
            panel.hass = { ...h, states };
            window.__perf.ticks++;
          }, sc.tick.every);
        }
        if (sc.cover) {
          let up = false;
          window.__tick = setInterval(() => {
            up = !up;
            const h = panel.hass;
            const id = "cover.wohnzimmer";
            panel.hass = { ...h, states: { ...h.states, [id]: { ...h.states[id], state: up ? "open" : "closed", attributes: { ...h.states[id].attributes, current_position: up ? 100 : 0 } } } };
          }, 6000);
        }
      },
      { tick: sc.tick, cover: sc.cover },
    );
    const p0 = await page.evaluate(() => ({ ...window.__perf, frames: window.__perf.frames.length }));
    const g0 = await gpuCpu();
    const m0 = await metrics();
    const t0 = Date.now();
    await sleep(secs * 1000);
    const m1 = await metrics();
    const g1 = await gpuCpu();
    const wall = (Date.now() - t0) / 1000;
    const p1 = await page.evaluate((n) => ({ ...window.__perf, frames: window.__perf.frames.slice(n) }), p0.frames);
    await page.evaluate(() => clearInterval(window.__tick));
    const fr = p1.frames.slice().sort((a, b) => a - b);
    out.secs = wall;
    out.rendersPerSec = +((p1.renders - p0.renders) / wall).toFixed(2);
    out.rafPerSec = +((p1.raf - p0.raf) / wall).toFixed(2);
    out.drawsPerSec = Math.round((p1.draws - p0.draws) / wall);
    out.frameAvgMs = fr.length ? +(fr.reduce((a, b) => a + b, 0) / fr.length).toFixed(1) : 0;
    out.frameP95Ms = fr.length ? +fr[Math.min(fr.length - 1, Math.floor(fr.length * 0.95))].toFixed(1) : 0;
    out.busyPct = +((100 * (m1.TaskDuration - m0.TaskDuration)) / wall).toFixed(1);
    out.scriptPct = +((100 * (m1.ScriptDuration - m0.ScriptDuration)) / wall).toFixed(1);
    out.layoutPct = +((100 * (m1.LayoutDuration - m0.LayoutDuration + m1.RecalcStyleDuration - m0.RecalcStyleDuration)) / wall).toFixed(1);
    out.gpuPct = +((100 * (g1 - g0)) / wall).toFixed(1);
    out.heapMB = await heapNow();
  }
  if (sc.tap) {
    // the house view opens a floor first: open the ground floor, then tap its rooms
    await page.evaluate(() => (window.fp3dPanel._floorId = "eg"));
    await sleep(5000);
    // a room under the screen centre region (picked with the viewer's own ray), then a real touch on it
    const target = await page.evaluate(() => {
      const deep = (r, sel) => {
        const hit = r.querySelector(sel);
        if (hit) return hit;
        for (const el of r.querySelectorAll("*")) if (el.shadowRoot) {
          const h = deep(el.shadowRoot, sel);
          if (h) return h;
        }
        return null;
      };
      const view = deep(document, "fp3d-view3d");
      const v = view.viewer;
      const canvas = v.renderer.domElement;
      const rect = canvas.getBoundingClientRect();
      for (let gy = 0.35; gy <= 0.75; gy += 0.05)
        for (let gx = 0.3; gx <= 0.7; gx += 0.05) {
          const x = rect.width * gx, y = rect.height * gy;
          const hit = v.pick(x, y);
          if (hit && !("entity" in hit) && hit.roomId && !/^a\d+$/.test(hit.roomId)) return { x: rect.left + x, y: rect.top + y, room: hit.roomId };
        }
      return null;
    });
    out.tapTarget = target;
    const times = [];
    for (let i = 0; i < 3 && target; i++) {
      await page.evaluate(() => {
        window.__tapT = null;
        const panel = window.fp3dPanel;
        const sr = panel.shadowRoot;
        const watch = () => {
          if (sr.querySelector("fp3d-room-panel")) {
            // the next frame after it is in the DOM: it is painted
            requestAnimationFrame(() => setTimeout(() => (window.__tapT = performance.now() - window.__tap0), 0));
          } else requestAnimationFrame(watch);
        };
        window.__tap0 = performance.now();
        watch();
      });
      await page.touchscreen.tap(target.x, target.y);
      let t = null;
      for (let k = 0; k < 100 && t === null; k++) {
        await sleep(50);
        t = await page.evaluate(() => window.__tapT);
      }
      times.push(t === null ? null : Math.round(t));
      // close it again: back to the house
      await page.evaluate(() => {
        const sr = window.fp3dPanel.shadowRoot;
        const view = sr.querySelector("fp3d-view3d");
        view?.dispatchEvent(new CustomEvent("room-select", { detail: { floorId: null, roomId: null }, bubbles: true, composed: true }));
      });
      await page.keyboard.press("Escape");
      await sleep(4000);
      const still = await page.evaluate(() => !!window.fp3dPanel.shadowRoot.querySelector("fp3d-room-panel"));
      if (still) {
        await page.reload({ waitUntil: "load" });
        await sleep(9000);
      }
    }
    out.tapMs = times;
  }
  if (sc.heap) {
    // many state updates in fast succession stand for minutes of a running wall tablet (160 plugs, one update a second)
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: 1 });
    out.heap = { "0": await heapNow() };
    for (const [mins, upto] of [
      [5, 300],
      [30, 1800],
    ]) {
      await page.evaluate(async (upto) => {
        const panel = window.fp3dPanel;
        window.__n ??= 0;
        while (window.__n < upto) {
          const h = panel.hass;
          const states = { ...h.states };
          window.__n++;
          for (let i = 0; i < 160; i++) states[`sensor.plug_${i}_power`] = { ...states[`sensor.plug_${i}_power`], state: String(Math.round(40 + 30 * Math.sin(window.__n + i))) };
          panel.hass = { ...h, states };
          await new Promise((r) => setTimeout(r, 15));
        }
      }, upto);
      await sleep(1500);
      out.heap[String(mins)] = await heapNow();
    }
  }
  results[name] = out;
  writeFileSync(join(outDir, `${name}-${opt.profile ?? "fire"}${opt.throttle ? "-t" + opt.throttle : ""}.json`), JSON.stringify(out, null, 1));
  console.log(JSON.stringify(out));
  await page.close();
}
await browser.close();
server.close();

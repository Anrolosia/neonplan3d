// Untracked: Wärme Pro in the preview – the module injected through a patched mock hass, a technical room with heat
// pump, buffer and hot water tank behind the demo house, radiators in the rooms, the ground collector under the back
// lawn, NIBE-named heat pump entities simulated (and the module's own demo). Screenshots into OUT.
// Usage (from frontend/): OUT=<dir> node _heatshot.mjs [only-shot-prefix]
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.env.OUT ?? join(process.env.TEMP ?? ".", "heatshot"));
mkdirSync(outDir, { recursive: true });
const ONLY = process.argv[2] ?? "";
const EN = process.env.LANG_EN === "1";
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file)) return void res.writeHead(404).end();
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/preview/index.html${EN ? "?lang=en" : ""}`;
const packSrc = JSON.parse(readFileSync(join(root, "private/modules/heat-pro/dist/pro_heat.json"), "utf8"));
const mod = { pack: { ...packSrc, module: { api: 1, kind: "stage", approved: true } }, code: readFileSync(join(root, "private/modules/heat-pro/dist/pro_heat.js"), "utf8") };

const executablePath = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });

const V = `document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d")`;

/** NIBE-named entities of a brine heat pump (made up), heating or making hot water. */
function nibe(mode) {
  const dhw = mode === "dhw";
  const cold = mode === "cold";
  const rows = [
    ["sensor.s1255_current_outd_temp_bt1", "S1255 Current outd temp (BT1)", "°C", "temperature", cold ? "-14.0" : "-2.0"],
    ["sensor.s1255_supply_line_bt2", "S1255 Supply line (BT2)", "°C", "temperature", dhw ? "49.5" : "37.6"],
    ["sensor.s1255_return_line_bt3", "S1255 Return line (BT3)", "°C", "temperature", dhw ? "44.0" : "31.2"],
    ["sensor.s1255_brine_in_bt10", "S1255 Brine in (BT10)", "°C", "temperature", "2.0"],
    ["sensor.s1255_brine_out_bt11", "S1255 Brine out (BT11)", "°C", "temperature", cold ? "-6.2" : "-1.0"],
    ["sensor.s1255_hot_water_top_bt7", "S1255 Hot water top (BT7)", "°C", "temperature", dhw ? "47.5" : "49.0"],
    ["sensor.s1255_bt63_buffer_top", "S1255 Buffer top (BT63)", "°C", "temperature", "38.0"],
    ["sensor.s1255_bt64_buffer_bottom", "S1255 Buffer bottom (BT64)", "°C", "temperature", "30.0"],
    ["sensor.s1255_current_compressor_frequency", "S1255 Current compressor frequency", "Hz", "frequency", "52"],
    ["sensor.s1255_heating_medium_pump_speed_gp1", "S1255 Heating medium pump speed (GP1)", "%", "", "55"],
    ["sensor.s1255_brine_pump_speed_gp2", "S1255 Brine pump speed (GP2)", "%", "", "60"],
    ["sensor.s1255_priority", "S1255 Priority", "", "enum", dhw ? "Hot water" : "Heating"],
    ["sensor.s1255_current_power_consumption", "S1255 Current power consumption", "W", "power", dhw ? "1300" : "1100"],
    ["sensor.s1255_current_heat_output", "S1255 Current heat output", "kW", "power", dhw ? "3.7" : cold ? "1.9" : "4.2"],
    ["sensor.s1255_heat_produced_today", "S1255 Heat produced today", "kWh", "energy", "31.0"],
    ["sensor.s1255_energy_used_today", "S1255 Energy used today", "kWh", "energy", "8.2"],
    ["sensor.s1255_compressor_starts", "S1255 Compressor starts", "", "", "2340"],
    ["sensor.s1255_compressor_operating_time", "S1255 Compressor operating time", "h", "duration", "8123.4"],
    ["sensor.strompreis", "Strompreis", "€/kWh", "monetary", "0.30"],
  ];
  return rows;
}

async function open(quality = "high", { demo = false, mode = "heat", entities = true, width = 1280, height = 800 } = {}) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  page.on("pageerror", (err) => console.log("PAGEERROR", err.message));
  page.on("console", (m) => (m.type() === "error" || m.type() === "warning") && !/favicon|404/.test(m.text()) && console.log("CONSOLE", m.type(), m.text().slice(0, 300)));
  await page.evaluateOnNewDocument(
    (q, demo) => {
      localStorage.setItem("neonplan3d.quality", q);
      if (demo) localStorage.setItem("neonplan3d.heat_pro.demo", "1");
      else localStorage.removeItem("neonplan3d.heat_pro.demo");
    },
    quality,
    demo,
  );
  await page.goto(base, { waitUntil: "networkidle0", timeout: 120000 });
  await sleep(2000);
  await page.evaluate(
    async (mod, rows) => {
      const panel = window.fp3dPanel;
      const hass = panel.hass;
      const states = { ...hass.states };
      const entities = { ...(hass.entities ?? {}) };
      const devices = { ...(hass.devices ?? {}), nibe: { id: "nibe", name: "S1255", manufacturer: "NIBE", model: "S1255-6 PC" } };
      for (const [id, name, unit, dc, state] of rows) {
        states[id] = { entity_id: id, state, attributes: { friendly_name: name, ...(unit ? { unit_of_measurement: unit } : {}), ...(dc ? { device_class: dc } : {}) }, last_changed: new Date().toISOString(), last_updated: new Date().toISOString() };
        if (id.includes("s1255")) entities[id] = { entity_id: id, device_id: "nibe" };
      }
      const orig = hass.callWS.bind(hass);
      const callWS = async (msg) => {
        if (msg.type === "neonplan3d/packs/list") return { packs: [...(await orig(msg)).packs.filter((p) => p.id !== mod.pack.id), mod.pack] };
        if (msg.type === "neonplan3d/modules/code" && msg.pack_id === mod.pack.id) return { id: mod.pack.id, release: 1, api: 1, kind: "stage", code: mod.code };
        if (msg.type === "history/history_during_period") {
          // six hours of the heat output: cycles of the compressor
          const id = msg.entity_ids[0];
          const now = Date.now() / 1000;
          // the counters' values at midnight
          if (id.includes("compressor_starts")) return { [id]: [{ s: "2329", lu: now - 3600 }] };
          if (id.includes("operating_time")) return { [id]: [{ s: "8117.2", lu: now - 3600 }] };
          const out = [];
          for (let t = now - 6 * 3600; t < now; t += 600) out.push({ s: String(Math.max(0, 3.2 + 1.2 * Math.sin(t / 2400) + (Math.sin(t / 700) > 0.6 ? -3 : 0)).toFixed(2)), lu: t });
          return { [id]: out };
        }
        return orig(msg);
      };
      // the plan: a technical room behind the house, radiators, the bath and the hall with floor heating, the collector under the back lawn
      const b = structuredClone((await orig({ type: "neonplan3d/building/get" })).building);
      const eg = b.floors[0];
      const og = b.floors[1];
      eg.rooms.push({ id: "technik", name: "Technik", area_id: null, points: [[0, 8], [3.4, 8], [3.4, 9.4], [0, 9.4]], floor_material: "concrete" });
      const item = (id, type, x, z, w, d, h, rotation = 0, extra = {}) => ({ id, type, x, z, rotation, w, d, h, variant: null, ...extra });
      eg.furniture.push(
        item("wp", "pack:mastershort.utility:heat_pump_indoor", 0.45, 8.7, 0.6, 0.65, 1.85, 0, { name: null }),
        item("puffer", "pack:mastershort.utility:buffer_tank", 1.5, 8.7, 0.8, 0.8, 1.9),
        item("ww", "pack:mastershort.utility:hot_water_tank_300", 2.7, 8.7, 0.7, 0.7, 1.75),
        item("rad_k", "radiator", 9.9, 2.6, 1.2, 0.1, 0.6, 90),
        item("rad_s", "radiator", 0.08, 6.3, 1.0, 0.1, 0.6, 270),
      );
      og.furniture.push(item("rad_kind", "radiator", 0.1, 2.0, 1.0, 0.1, 0.6, 270), item("rad_arbeit", "radiator", 9.9, 2.0, 1.0, 0.1, 0.6, 90), item("rad_gast", "radiator", 6.5, 7.9, 1.2, 0.1, 0.6, 0));
      const wp = eg.furniture.find((f) => f.id === "wp");
      wp.mods = { "mastershort.pro_heat": { rooms: { bad: "floor", flur: "floor", badog: "floor" } } };
      const lawn = eg.outdoor.find((a) => a.id === "a2");
      lawn.points = [[-3, 10.2], [6.5, 10.2], [6.5, 14], [-3, 14]];
      lawn.mods = { "mastershort.pro_heat": { collector: "loop" } };
      // the bed and the fruit tree on the back lawn stay; the bed moves a little
      await orig({ type: "neonplan3d/building/save", building: b });
      panel.hass = { ...hass, states, entities, devices, callWS };
      await new Promise((r) => setTimeout(r, 100));
      await panel.data.reloadPacks();
    },
    mod,
    entities ? nibe(mode) : [["sensor.strompreis", "Strompreis", "€/kWh", "monetary", "0.30"]],
  );
  await sleep(3500);
  return page;
}

async function shot(page, name, clip) {
  if (ONLY && !name.startsWith(ONLY)) return;
  await page.screenshot({ path: join(outDir, `${name}.png`), ...(clip ? { clip } : {}) });
  console.log("shot", name);
}
/** The heat pump's card close up (with a margin), from where it floats now. */
async function cardShot(page, name) {
  if (ONLY && !name.startsWith(ONLY)) return;
  await sleep(1500);
  const r = await page.evaluate((V) => {
    const el = eval(V).renderRoot.querySelector(".fp3d-holo-mod:not([hidden])");
    if (!el) return null;
    const b = el.getBoundingClientRect();
    return { x: b.x, y: b.y, w: b.width, h: b.height };
  }, V);
  if (!r) return console.log("NO CARD", name);
  console.log("card at", JSON.stringify(r));
  const m = 14;
  const vp = page.viewport();
  if (r.y < 0 || r.y + r.h > vp.height) console.log("CARD CUT", name);
  const x = Math.max(0, r.x - m);
  const y = Math.max(0, r.y - m);
  await page.screenshot({ path: join(outDir, `${name}.png`), clip: { x, y, width: Math.min(vp.width - x, r.w + 2 * m), height: Math.min(vp.height - y, r.h + 2 * m) } });
  console.log("shot", name);
}
/** Tries views until the heat pump's card floats fully on screen. */
async function cardView(page, floorId, x, z) {
  const vp = page.viewport();
  for (const [dz, y, r, phi, th] of [[-2, 1.5, 9, 0.3, 0], [-3, 1, 12, 0.25, 0], [-1.5, 2, 8, 0.45, -0.3], [-4, 0.5, 14, 0.2, 0], [0, 2.5, 10, 0.6, -0.5], [-2.5, 1, 11, 0.5, 0.4]]) {
    await view(page, floorId, x, z + dz, y, r, phi, th);
    await sleep(1200);
    const b = await page.evaluate((V) => {
      const el = eval(V).renderRoot.querySelector(".fp3d-holo-mod:not([hidden])");
      if (!el) return null;
      const q = el.getBoundingClientRect();
      return { y: q.y, h: q.height, x: q.x, w: q.width };
    }, V);
    if (b && b.y > 125 && b.y + b.h < vp.height - 60 && b.x > 0 && b.x + b.w < vp.width) return true;
  }
  console.log("NO FULL CARD VIEW");
  return false;
}
async function view(page, floorId, x, z, y, radius, phi, theta) {
  await page.evaluate((V, a) => eval(V).viewer.focus(a[0], a[1], a[2], a[3], null, { radius: a[4], phi: a[5], theta: a[6] }), V, [floorId, x, z, y, radius, phi, theta]);
  await sleep(1800);
}
async function clickText(page, text) {
  const ok = await page.evaluate((t) => {
    const find = (root) => {
      for (const el of root.querySelectorAll("button")) if (!el.disabled && (el.textContent.trim() === t || el.textContent.trim().startsWith(t))) return el;
      for (const el of root.querySelectorAll("*"))
        if (el.shadowRoot) {
          const hit = find(el.shadowRoot);
          if (hit) return hit;
        }
      return null;
    };
    const el = find(document);
    el?.click();
    return !!el;
  }, text);
  if (!ok) console.log(`BUTTON NOT FOUND: ${text}`);
  await sleep(900);
}
async function info(page) {
  return page.evaluate((V) => {
    const v = eval(V);
    const scene = v.scene ?? [];
    const kinds = {};
    for (const p of scene) kinds[p.kind] = (kinds[p.kind] ?? 0) + 1;
    return JSON.stringify({ kinds, holos: (v._holos ?? []).map((h) => `${h.kind}:${h.name}`), alerts: (v._alerts ?? []).map((a) => a.kind), lines: process_lines(scene) });
    function process_lines(sc) { return sc.filter((p) => p.kind === "line").map((p) => `${p.floorId}:${p.flow | 0}:${p.points.map((q) => q.map((n) => +n.toFixed(2)).join(",")).join(" ")}`); }
  }, V);
}

// 1. heating, the house
if (!ONLY || "01 02 03 07".split(" ").some((p) => p.startsWith(ONLY.slice(0, 2)))) {
  const page = await open("high");
  console.log("heat:", await info(page));
  await shot(page, "01-haus-heizen");
  await view(page, "eg", 1.75, 12, 0, 11, 0.75, -0.35);
  await shot(page, "02-garten-erdkollektor");
  await view(page, "eg", 1.5, 8.7, 1.0, 6.5, 1.0, -0.5);
  await shot(page, "03-technik-karte");
  await cardShot(page, EN ? "03b-karte-nah-EN" : "03b-karte-nah");
  await clickText(page, "Erdgeschoss");
  await sleep(1500);
  await shot(page, "07-erdgeschoss");
  await view(page, "eg", 5, 6, 0, 17, 0.3, -0.3);
  await shot(page, "07b-erdgeschoss-oben");
  await view(page, "eg", 4, 6, 0, 9, 0.12, -0.01);
  await shot(page, "07c-schlafzimmer-nah");
  await view(page, "eg", 1.2, 6.3, 0.3, 4.5, 0.85, 1.2);
  await shot(page, "07d-heizkoerper");
  for (const [i, th] of [0, 1.57, 3.14, -1.57].entries()) {
    await view(page, "eg", 9.0, 2.6, 0.4, 4.5, 0.9, th);
    await shot(page, `07e-kueche-heizkoerper-${i}`);
  }
  await page.setViewport({ width: 1280, height: 1300, deviceScaleFactor: 1 });
  for (const [i, v] of [[1.5, 8.7, 2.4, 9, 0.35, -0.3], [1.5, 8.0, 1.8, 8, 0.5, 0]].entries()) {
    await view(page, "eg", ...v);
    await cardShot(page, EN ? `03b-karte-nah-EN-${i}` : `03b-karte-nah-${i}`);
  }
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
  await page.close();
}
// 2. hot water
if (!ONLY || ONLY.startsWith("04")) {
  const page = await open("high", { mode: "dhw" });
  await view(page, "eg", 2, 7, 0.5, 10, 0.7, -0.4);
  await shot(page, "04-warmwasser");
  await page.close();
}
// 2b. the deep cold
if (!ONLY || ONLY.startsWith("10")) {
  const page = await open("high", { mode: "cold" });
  console.log("cold:", (await info(page)).slice(0, 600));
  await view(page, "eg", 1.5, 9.5, 0.5, 11, 0.8, -0.4);
  await shot(page, "10-warnung-sole");
  await page.close();
}
// 3. the tablet level
if (!ONLY || ONLY.startsWith("05")) {
  const page = await open("low", { width: 1024, height: 600 });
  await shot(page, "05-tablet");
  await clickText(page, "Erdgeschoss");
  await sleep(1500);
  await shot(page, "05c-tablet-erdgeschoss");
  await cardView(page, "eg", 1.5, 8.7);
  await shot(page, "05b-tablet-karte");
  await page.close();
}
// 4. the demo without any heat pump entities
if (!ONLY || ONLY.startsWith("06")) {
  const page = await open("high", { demo: true, entities: false });
  console.log("demo:", await info(page));
  await view(page, "eg", 2.0, 10, 0.5, 12, 0.75, -0.4);
  await shot(page, "06-demo");
  await page.close();
}
// 5. the editor: the heat pump's setup, the module dialog
if (!ONLY || ONLY.startsWith("08") || ONLY.startsWith("09")) {
  const page = await open("high");
  await clickText(page, "Editor");
  await sleep(1500);
  const E = `document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor")`;
  await page.evaluate((E) => {
    const e = eval(E);
    e._floorId = "eg";
    e._furnitureId = "wp";
    e.requestUpdate();
  }, E);
  await sleep(1200);
  // scroll the side panel to the module's heading
  await page.evaluate((E) => {
    const e = eval(E);
    const h = [...e.renderRoot.querySelectorAll("h3")].find((x) => x.textContent.includes("Wärme Pro") || x.textContent.includes("Heat Pro"));
    h?.scrollIntoView({ block: "start" });
  }, E);
  await sleep(600);
  await shot(page, "08-editor-einrichtung");
  await page.evaluate((E) => {
    const e = eval(E);
    const h = [...e.renderRoot.querySelectorAll("h3")].find((x) => /^(Räume|Rooms)$/.test(x.textContent.trim()));
    h?.scrollIntoView({ block: "start" });
  }, E);
  await sleep(500);
  await shot(page, "08b-editor-raeume");
  await page.evaluate((E) => {
    const e = eval(E);
    e._furnitureId = null;
    e._settingsDialog = "modules";
  }, E);
  await sleep(900);
  await page.evaluate((E) => { const d = eval(E).renderRoot.querySelector(".fp3d-dialog"); const all = d ? [...d.querySelectorAll("button, p, label")] : []; all.at(-1)?.scrollIntoView({ block: "end" }); }, E);
  await sleep(400);
  await shot(page, "09-modul-einstellungen");
  await page.close();
}

await browser.close();
server.close();

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// Drives the editor's wall view ("Technik zeichnen") with a real mouse in headless Chrome: a pump and a filter in the
// demo garage, the Pool Pro module registered through a patched mock hass, then strokes, taps and tools – and
// prints what the plan holds after each step. Untracked; usage (from frontend/): node _pooltest.mjs
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.env.OUT ?? join(process.env.TEMP ?? ".", "pooltest"));
mkdirSync(outDir, { recursive: true });
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file)) return void res.writeHead(404).end();
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/preview/index.html`;
const moduleCode = readFileSync(join(root, "private/modules/pool-pro/dist/pro_pool.js"), "utf8");

const executablePath = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 1 });
page.on("pageerror", (err) => console.log("PAGEERROR", err.message));
page.on("console", (m) => (m.type() === "error" || m.type() === "warning") && console.log("CONSOLE", m.type(), m.text().slice(0, 300)));
await page.goto(base, { waitUntil: "networkidle0", timeout: 120000 });
await sleep(1500);

// the module through the mock hass
await page.evaluate(async (code) => {
  const panel = window.fp3dPanel;
  const hass = panel.hass;
  const pack = { id: "mastershort.pro_pool", name: "Pro: Pool Pro", publisher: "Mastershort", items: [], features: ["pool"], release: 2, module: { api: 1, kind: "stage" } };
  const orig = hass.callWS.bind(hass);
  const callWS = async (msg) => {
    if (msg.type === "neonplan3d/packs/list") return { packs: [...(await orig(msg)).packs.filter((p) => p.id !== pack.id), pack] };
    if (msg.type === "neonplan3d/modules/code") return { id: pack.id, release: 2, api: 1, kind: "stage", code };
    return orig(msg);
  };
  panel.hass = { ...hass, callWS };
  await new Promise((r) => setTimeout(r, 100));
  await panel.data.reloadPacks();
}, moduleCode);
await sleep(800);
console.log("packs:", await page.evaluate(() => window.fp3dPanel.data.packs.map((p) => `${p.id}${p.module ? "+module" : ""}`).join(", ")));
await clickText("Editor");
await sleep(1500);

const E = `document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor")`;
// a pump and a filter against the garage's wall at z = 0, the pool with links, the wall view of that wall, the pen
await page.evaluate((E) => {
  const e = eval(E);
  const b = structuredClone(e._doc);
  const eg = b.floors[0];
  const pool = eg.outdoor.find((a) => a.type === "pool");
  pool.pool = pool.pool ?? {};
  eg.furniture = eg.furniture.filter((m) => !m.type.startsWith("pool_"));
  eg.furniture.push({ id: "pump1", type: "pool_pump", x: 11.0, z: 0.25, rotation: 0, w: 0.7, d: 0.32, h: 0.4, variant: null });
  eg.furniture.push({ id: "filt1", type: "pool_filter", x: 12.4, z: 0.4, rotation: 0, w: 0.6, d: 0.6, h: 1.0, variant: null });
  e.setDoc(b);
  const room = eg.rooms.find((r) => r.id === "garage");
  const minZ = Math.min(...room.points.map((p) => p[1]));
  const edge = room.points.findIndex((p, i) => p[1] === minZ && room.points[(i + 1) % room.points.length][1] === minZ);
  e._floorId = eg.id;
  e.openWallView("garage", edge);
}, E);
await sleep(1200);
await page.evaluate((E) => eval(E).enterTech(), E);
await sleep(600);
await page.evaluate((E) => (eval(E)._wallView3d = false), E);
await sleep(1200);
await shot("00-start");
console.log("editor packs:", await page.evaluate((E) => (eval(E).packs ?? []).map((p) => `${p.id}${p.module ? "+module" : ""}`).join(", "), E));
console.log("wv classes:", await page.evaluate((E) => [...eval(E).renderRoot.querySelectorAll("[class*=fp3d-wv]")].slice(0, 6).map((x) => x.className.baseVal ?? x.className).join(" | "), E));
console.log("wallView:", await page.evaluate((E) => JSON.stringify(eval(E)._wallView), E), "svg:", await page.evaluate((E) => !!eval(E).renderRoot.querySelector(".fp3d-wv-svg"), E), "wall rect:", await page.evaluate((E) => !!eval(E).renderRoot.querySelector(".fp3d-wv-wall"), E));
console.log("rules:", await page.evaluate((E) => !!eval(E).pipeRules, E), "mode:", await state());

// the wall drawing and the nodes on it
async function nodes() {
  return page.evaluate((E) => {
    const e = eval(E);
    const out = {};
    for (const g of e.renderRoot.querySelectorAll(".fp3d-wv-node")) {
      const title = g.querySelector("title")?.textContent ?? "";
      const r = g.querySelector("circle").getBoundingClientRect();
      out[title] = [r.left + r.width / 2, r.top + r.height / 2];
    }
    const wall = e.renderRoot.querySelector(".fp3d-wv-wall").getBoundingClientRect();
    out.__wall = { left: wall.left, right: wall.right, top: wall.top, bottom: wall.bottom };
    return out;
  }, E);
}
async function state() {
  return page.evaluate((E) => {
    const e = eval(E);
    const pool = e._doc.floors[0].outdoor.find((a) => a.type === "pool").pool ?? {};
    return JSON.stringify({
      mode: e._runMode,
      draft: e._runDraft ? { from: e._runDraft.from, pts: e._runDraft.pts.length, fromT: !!e._runDraft.fromT } : null,
      ask: e._techAsk ? { pipe: e._techAsk.pipe } : null,
      pipes: (pool.pipes ?? []).map((p) => `${p.from || "∅"} → ${p.to || "∅"} (${p.points.length} pts${p.fittings?.length ? `, ${p.fittings.length} fit` : ""})`),
      joints: (pool.joints ?? []).map((j) => `${j.kind ?? "tee"}:${j.name ?? ""}`),
      ports: (pool.ports ?? []).map((q) => q.kind),
    });
  }, E);
}
async function stroke(from, to, steps = 12) {
  await page.mouse.move(from[0], from[1]);
  await page.mouse.down();
  await sleep(30);
  console.log("  after down:", await page.evaluate((E) => { const e = eval(E); return JSON.stringify({ draft: e._runDraft ? { from: e._runDraft.from, pts: e._runDraft.pts.length } : null, press: e.techPress, stroke: e.techStroke?.length ?? null }); }, E));
  for (let i = 1; i <= steps; i++) {
    await page.mouse.move(from[0] + ((to[0] - from[0]) * i) / steps, from[1] + ((to[1] - from[1]) * i) / steps);
    await sleep(15);
  }
  console.log("  before up:", await page.evaluate((E) => { const e = eval(E); return JSON.stringify({ draft: e._runDraft ? { from: e._runDraft.from, pts: e._runDraft.pts.length } : null, stroke: e.techStroke?.length ?? null }); }, E));
  await page.mouse.up();
  await sleep(500);
}
async function pipePoint(index = -1) {
  // the middle of a rendered pipe's longest line
  return page.evaluate((E, index) => {
    const e = eval(E);
    const runs = [...e.renderRoot.querySelectorAll(".fp3d-wv-run")];
    const run = runs.at(index);
    if (!run) return null;
    const lines = [...run.querySelectorAll("line")].map((l) => l.getBoundingClientRect()).sort((a, b) => Math.hypot(b.width, b.height) - Math.hypot(a.width, a.height));
    const r = lines[0];
    return [r.left + r.width / 2, r.top + r.height / 2];
  }, E, index);
}
async function clickAt(p) {
  await page.mouse.move(p[0], p[1]);
  await page.mouse.down();
  await sleep(40);
  await page.mouse.up();
  await sleep(500);
}

let n = await nodes();
console.log("nodes:", Object.keys(n).filter((k) => k !== "__wall"));
const pick = (part) => {
  const key = Object.keys(n).find((k) => k.includes(part));
  if (!key) throw new Error(`no node ${part}: ${Object.keys(n).join(" | ")}`);
  return n[key];
};
const W = n.__wall;
const mid = [(W.left + W.right) / 2, (W.top + W.bottom) / 2];

console.log("\n== T1: a click on the bare wall (nothing should be laid)");
await clickAt([mid[0] - 150, mid[1]]);
console.log(await state());

console.log("\n== T2: a stroke from the pump's pressure side to the filter's inlet");
await stroke(pick("Druckseite"), pick("Von der Pumpe"));
console.log(await state());
await shot("02-first-pipe");

console.log("\n== T3: a click on the pipe just laid (it must stay)");
n = await nodes();
const a = pick("Druckseite");
const b2 = pick("Von der Pumpe");
const onPipe = await pipePoint(-1);
console.log("pipe point:", onPipe);
await clickAt(onPipe);
console.log(await state());

console.log("\n== T4: the valve tool, then a tap on the pipe");
await clickText("+ Kugelhahn");
console.log("after tool:", await state());
await clickAt(onPipe);
console.log(await state());
await shot("04-valve");

console.log("\n== T5: the T-piece tool, then a tap on the pipe");
await clickText("+ T-Stück");
await clickAt([onPipe[0] + 20, onPipe[1]]);
console.log(await state());

console.log("\n== T6: a stroke from the filter's waste down to the floor, then 'Kanal'");
n = await nodes();
const waste = pick("Abwasser");
await stroke(waste, [waste[0] + 60, W.bottom - 4], 16);
console.log(await state());
await shot("06-waste-stroke");
await clickText("Kanal (Rückspülen)");
console.log(await state());
await shot("06-waste-done");

console.log("\n== T7: a stroke from the pump's suction side down to the floor, then 'Skimmer'");
n = await nodes();
const suction = pick("Saugseite");
await stroke(suction, [suction[0] - 80, W.bottom - 4], 16);
await clickText("Skimmer");
console.log(await state());
await shot("07-skimmer");

await browser.close();
server.close();

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
async function shot(name) {
  await page.screenshot({ path: join(outDir, `${name}.png`) });
}
async function clickText(text) {
  const ok = await page.evaluate((t) => {
    const find = (root) => {
      for (const el of root.querySelectorAll("button")) if (!el.disabled && (el.textContent.trim() === t || el.textContent.trim().startsWith(t) || el.textContent.includes(t))) return el;
      for (const el of root.querySelectorAll("*")) if (el.shadowRoot) {
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
  await sleep(700);
}

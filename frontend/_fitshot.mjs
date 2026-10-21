// Temporary, untracked: a pack sofa at its default size and stretched to 3.2 m, seen in 3D (free sizes with fixed
// parts). Usage (from frontend/): OUT=<dir> node _fitshot.mjs
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.env.OUT ?? join(process.env.TEMP ?? ".", "fitshot"));
mkdirSync(outDir, { recursive: true });
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file) || path.startsWith("private")) return void res.writeHead(404).end();
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/preview/index.html`;
const living = JSON.parse(readFileSync(join(root, "private/packs/src/living.json"), "utf8"));
const pack = { id: living.id, name: living.name, publisher: living.publisher, licensee: null, release: living.release ?? 1, items: living.items, features: [] };

const executablePath = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
page.on("pageerror", (err) => console.log("PAGEERROR", err.message));
await page.goto(base, { waitUntil: "networkidle0", timeout: 120000 });
await sleep(1500);
await page.evaluate(async (living) => {
  // the preview's import mock takes any signed-looking file: the pack then lives in its own pack list
  const panel = window.fp3dPanel;
  await panel.hass.callWS({ type: "neonplan3d/packs/import", pack: JSON.stringify({ payload: living, signature: "preview" }) });
  await panel.data.reloadPacks();
}, living);
await sleep(800);
await page.evaluate(() => {
  const panel = window.fp3dPanel;
  const b = structuredClone(panel.data.building);
  const eg = b.floors[0];
  const room = eg.rooms.find((r) => r.id === "wohnen");
  const xs = room.points.map((p) => p[0]);
  const zs = room.points.map((p) => p[1]);
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
  const cz = (Math.min(...zs) + Math.max(...zs)) / 2;
  eg.furniture = eg.furniture.filter((m) => !(m.x > Math.min(...xs) && m.x < Math.max(...xs) && m.z > Math.min(...zs) && m.z < Math.max(...zs)));
  eg.furniture.push({ id: "s1", type: "pack:mastershort.living:sofa_3", x: cx - 1.6, z: cz - 1.2, rotation: 0, w: 2.1, d: 0.92, h: 0.85, variant: null });
  eg.furniture.push({ id: "s2", type: "pack:mastershort.living:sofa_3", x: cx + 1.4, z: cz - 1.2, rotation: 0, w: 3.4, d: 0.92, h: 0.85, variant: null });
  eg.furniture.push({ id: "s3", type: "pack:mastershort.living:sofa_3", x: cx - 1.6, z: cz + 1.0, rotation: 0, w: 2.1, d: 0.92, h: 1.3, variant: null });
  eg.furniture.push({ id: "t1", type: "pack:mastershort.living:dining_160", x: cx + 1.4, z: cz + 1.0, rotation: 0, w: 2.8, d: 0.9, h: 0.75, variant: null });
  panel.data.edit(b);
  return JSON.stringify({ room: room.id, cx, cz, n: eg.furniture.filter((m) => m.id.startsWith("s") || m.id === "t1").map((m) => [m.id, m.x, m.z]), packs: panel.data.packs.map((p) => p.id) });
}).then((r) => console.log("edit:", r));
console.log("at once:", await page.evaluate(() => { const d = window.fp3dPanel.data; return JSON.stringify({ s: d.building.floors[0].furniture.filter((m) => m.id.startsWith("s")).length, state: d.saveState, err: d.saveError }); }));
await sleep(1500);
console.log("state:", await page.evaluate(() => { const d = window.fp3dPanel.data; return JSON.stringify({ state: d.saveState, err: d.saveError, pending: !!d.pending }); }));
console.log("after:", await page.evaluate(() => { const b = window.fp3dPanel.data.building; return JSON.stringify(b.floors[0].furniture.filter((m) => m.id.startsWith("s")).map((m) => m.type)); }));
await clickText("3D");
await sleep(2500);
await clickText("Wohnzimmer");
await sleep(3500);
await shot("1-wohnzimmer-sofas");
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
      for (const el of root.querySelectorAll("button")) if (!el.disabled && el.textContent.trim() === t) return el;
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
  await sleep(500);
}

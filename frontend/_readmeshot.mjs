// Temporary, untracked: fresh README pictures from the preview (English UI, demo data, the shop packs loaded so the
// library shows its real range). Usage (from frontend/): OUT=<dir> node _readmeshot.mjs
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.env.OUT ?? join(process.env.TEMP ?? ".", "readmeshot"));
mkdirSync(outDir, { recursive: true });
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json", ".woff2": "font/woff2" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file) || path.startsWith("private")) return void res.writeHead(404).end();
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/preview/index.html?lang=en`;
const packDir = join(root, "private/packs/src");
const packs = readdirSync(packDir)
  .filter((f) => f.endsWith(".json") && f !== "index.json" && !f.includes("_sample") && !f.startsWith("pro_") && !f.startsWith("proto"))
  .map((f) => JSON.parse(readFileSync(join(packDir, f), "utf8")))
  .filter((p) => p.items?.length);

const executablePath = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
page.on("pageerror", (err) => console.log("PAGEERROR", err.message));
await page.goto(base, { waitUntil: "networkidle0", timeout: 120000 });
await sleep(1500);
await page.evaluate(async (packs) => {
  const panel = window.fp3dPanel;
  for (const p of packs) await panel.hass.callWS({ type: "neonplan3d/packs/import", pack: JSON.stringify({ payload: p, signature: "preview" }) });
  await panel.data.reloadPacks();
}, packs);
await sleep(800);

const P = `window.fp3dPanel`;
const E = `document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor")`;
const V = `document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d")`;

// --- the three looks of the 3D view, ground floor
for (const theme of ["neon", "blueprint", "day"]) {
  await page.evaluate((P, theme) => { const p = eval(P); p._theme = theme; }, P, theme);
  await clickText("Ground floor") || (await clickText("Erdgeschoss"));
  await sleep(3500);
  await shot(`look-${theme}`);
}
await page.evaluate((P) => (eval(P)._theme = "neon"), P);
await sleep(600);

// --- editor: plan with 3D beside it, the living room selected
await clickText("Editor");
await sleep(2000);
await page.evaluate((E) => {
  const e = eval(E);
  e._floorId = e._doc.floors[0].id;
  e._split = true;
  e._tool = "select";
  e.selectItem("room", "wohnen");
}, E);
await sleep(4000);
await shot("editor-draw");

// --- editor: the furniture library in the living room
await page.evaluate((E) => {
  const e = eval(E);
  e._split = false;
  e._tool = "furniture";
  e._roomId = "wohnen";
}, E);
await sleep(6000);
await shot("editor-library");

// --- editor: the room with its devices (link Home Assistant)
await page.evaluate((E) => {
  const e = eval(E);
  e._tool = "select";
  e.selectItem("room", "wohnen");
}, E);
await sleep(2500);
await page.evaluate((E) => {
  const side = eval(E).renderRoot.querySelector(".fp3d-side, aside, .fp3d-panel-side");
  const head = [...(side ?? eval(E).renderRoot).querySelectorAll("*")].find((x) => /^(Devices|Geräte)$/i.test((x.textContent ?? "").trim()));
  head?.scrollIntoView({ block: "start" });
}, E);
await sleep(1200);
await shot("editor-devices");

await browser.close();
server.close();

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
async function shot(name) {
  await page.screenshot({ path: join(outDir, `${name}.png`) });
  console.log("shot", name);
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
  await sleep(500);
  return ok;
}

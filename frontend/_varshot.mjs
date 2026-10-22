// Temporary, untracked: screenshots of the editor's furniture library with every real pack loaded through the
// mock hass. Usage (from frontend/): OUT=<dir> node _libshot.mjs
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.env.OUT ?? join(process.env.TEMP ?? ".", "libshot"));
mkdirSync(outDir, { recursive: true });
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file) || path.startsWith("private")) return void res.writeHead(404).end();
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/preview/index.html${process.env.LANG_EN === "1" ? "?lang=en" : ""}`;
const packDir = join(root, "private/packs/src");
const packs = readdirSync(packDir)
  .filter((f) => f.endsWith(".json") && f !== "index.json" && !f.includes("_sample") && !f.startsWith("pro_") && !f.startsWith("proto"))
  .map((f) => JSON.parse(readFileSync(join(packDir, f), "utf8")))
  .filter((p) => p.items?.length)
  .map((p) => ({ id: p.id, name: p.name, publisher: p.publisher, licensee: null, release: p.release ?? 1, items: p.items, features: p.features ?? [] }));
console.log("packs:", packs.length, "items:", packs.reduce((n, p) => n + p.items.length, 0));

const executablePath = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 1 });
page.on("pageerror", (err) => console.log("PAGEERROR", err.message));
page.on("console", (m) => m.type() === "error" && !/404/.test(m.text()) && console.log("CONSOLE", m.text().slice(0, 300)));
await page.goto(base, { waitUntil: "networkidle0", timeout: 120000 });
await sleep(1500);
await page.evaluate(async (packs) => {
  const panel = window.fp3dPanel;
  const hass = panel.hass;
  const orig = hass.callWS.bind(hass);
  const callWS = async (msg) => {
    if (msg.type === "neonplan3d/packs/list") return { packs: [...(await orig(msg)).packs, ...packs] };
    return orig(msg);
  };
  panel.hass = { ...hass, callWS };
  await new Promise((r) => setTimeout(r, 100));
  await panel.data.reloadPacks();
}, packs);
await sleep(800);
await clickText("Editor");
await sleep(2000);
const E = `document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor")`;
console.log("editor packs:", await page.evaluate((E) => (eval(E).packs ?? []).length, E));
await page.evaluate((E) => {
  const e = eval(E);
  e._floorId = e._doc.floors[0].id;
  e._tool = "furniture";
  e._roomId = "wohnen";
}, E);
await sleep(2500);
console.log("room:", await page.evaluate((E) => JSON.stringify({ roomId: eval(E)._roomId, room: eval(E).room?.name, tool: eval(E)._tool }), E));
const L = `${E}.shadowRoot.querySelector("fp3d-library")`;
console.log("library:", await page.evaluate((L) => { const l = eval(L); return l ? JSON.stringify({ entries: l.entries.length, room: l._room, cards: l.shadowRoot.querySelectorAll(".fp3d-lc").length, pics: l._thumbs.size }) : "none"; }, L));
await sleep(4000);
console.log("pics after 4 s:", await page.evaluate((L) => eval(L)._thumbs.size, L));
await shot("1-wohnzimmer");
// hover the chips of the first family card with several variants: its picture follows
await page.evaluate((L) => { const l = eval(L); l._query = "sofa"; }, L);
await sleep(3000);
await shot("v0-sofa");
for (const i of [1, 3]) {
  await page.evaluate((L, i) => { const l = eval(L); const card = [...l.shadowRoot.querySelectorAll(".fp3d-lc-family")][0]; const chip = card?.querySelectorAll(".fp3d-lc-chip")[i]; chip?.dispatchEvent(new MouseEvent("mouseenter")); return !!chip; }, L, i);
  await sleep(2500);
  await shot(`v${i}-chip`);
}
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

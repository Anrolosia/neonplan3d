import { readFileSync, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";
const root = resolve(import.meta.dirname, "..");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file)) return void res.writeHead(404).end();
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/preview/index.html`;
const code = readFileSync(join(root, "private/modules/pool-pro/dist/pro_pool.js"), "utf8");
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
page.on("pageerror", (err) => console.log("PAGEERROR", err.message));
page.on("console", (m) => !m.text().includes("Failed to load resource") && console.log("CONSOLE", m.type(), m.text().slice(0, 300)));
await page.setViewport({ width: 1400, height: 900 });
await page.goto(base, { waitUntil: "networkidle0", timeout: 120000 });
await new Promise((r) => setTimeout(r, 1500));
console.log(
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
    await panel.data.reloadPacks();
    await new Promise((r) => setTimeout(r, 500));
    const p = panel.data.packs.find((x) => x.id === pack.id);
    return JSON.stringify({ hassPatched: panel.hass.callWS === callWS, packModule: p?.module, code: (await panel.hass.callWS({ type: "neonplan3d/modules/code", pack_id: pack.id })).code.length });
  }, code),
);
await page.evaluate(() => {
  const find = (root) => {
    for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === "Editor") return el;
    for (const el of root.querySelectorAll("*"))
      if (el.shadowRoot) {
        const h = find(el.shadowRoot);
        if (h) return h;
      }
    return null;
  };
  find(document)?.click();
});
await new Promise((r) => setTimeout(r, 2500));
console.log(
  await page.evaluate(() => {
    const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
    const room = e._doc.floors[0].rooms.find((r) => r.id === "garage");
    const minZ = Math.min(...room.points.map((p) => p[1]));
    const edge = room.points.findIndex((p, i) => p[1] === minZ && room.points[(i + 1) % room.points.length][1] === minZ);
    return JSON.stringify({ editorHassPatched: !!e.hass && e.hass === window.fp3dPanel.hass, packModule: e.packs?.find((x) => x.id === "mastershort.pro_pool")?.module, rules: !!e.pipeRules, floor: e.floor?.id, points: room.points, edge });
  }),
);
await browser.close();
server.close();

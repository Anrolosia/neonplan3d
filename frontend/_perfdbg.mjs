// Temporary: who draws while idle
import { createServer } from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";
const root = resolve(import.meta.dirname, "..");
const extra = process.env.EXTRA ? readFileSync(process.env.EXTRA, "utf8") : "";
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (path.startsWith("private") || !existsSync(file)) return res.writeHead(404).end();
  let body = readFileSync(file);
  if (path.endsWith("demo-data.js")) body = body.toString() + "\n" + extra;
  res.writeHead(200, { "content-type": { ".html": "text/html", ".js": "text/javascript" }[extname(file)] ?? "application/octet-stream" }).end(body);
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
page.on("console", (m) => console.log("PAGE", m.text().slice(0, 2000)));
await page.setUserAgent("Mozilla/5.0 (Linux; Android 9; KFTRWI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/118 Chrome/118.0 Safari/537.36");
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1.5, isMobile: true, hasTouch: true });
await page.evaluateOnNewDocument(() => {
  window.__c = new Map();
  window.__st = new Map();
  const C = WebGL2RenderingContext;
  const clear = C.prototype.clear;
  C.prototype.clear = function (m) {
    const k = (this.canvas.className || "?") + ":" + this.canvas.width + "x" + this.canvas.height + ":" + this.canvas.isConnected;
    window.__c.set(k, (window.__c.get(k) ?? 0) + 1);
    if (window.__stack) { const s = new Error().stack.split("\n").slice(2, 9).join(" | "); window.__st.set(s, (window.__st.get(s) ?? 0) + 1); }
    return clear.call(this, m);
  };
});
await page.goto(`http://127.0.0.1:${server.address().port}/preview/index.html${process.env.Q ?? ""}`, { waitUntil: "load" });
await new Promise((r) => setTimeout(r, 10000));
if (process.env.T) { const c = await page.createCDPSession(); await c.send("Emulation.setCPUThrottlingRate", { rate: +process.env.T }); await new Promise((r) => setTimeout(r, 3000)); }
await page.evaluate(() => { window.__c.clear(); window.__stack = true;
  const deep = (r, sel) => { const hit = r.querySelector(sel); if (hit) return hit; for (const el of r.querySelectorAll("*")) if (el.shadowRoot) { const h = deep(el.shadowRoot, sel); if (h) return h; } return null; };
  const v = deep(document, "fp3d-view3d").viewer; window.__busy = new Map();
  v.reportStats = (now, busy) => { const k = busy.join(",") || "-"; window.__busy.set(k, (window.__busy.get(k) ?? 0) + 1); };
  const inv = v.invalidate.bind(v); window.__inv = new Map();
  v.invalidate = () => { const s = new Error().stack.split(String.fromCharCode(10)).slice(2, 4).join(" | ").replace(/http[^ ]*frontend\//g, ""); window.__inv.set(s, (window.__inv.get(s) ?? 0) + 1); inv(); };
});
await new Promise((r) => setTimeout(r, 5000));
await page.evaluate(() => {
  console.log(JSON.stringify([...window.__c]));
  console.log(JSON.stringify([...window.__busy]));
  console.log(JSON.stringify([...window.__inv].sort((a, b) => b[1] - a[1]).slice(0, 8), null, 1));
  const deep = (r, sel) => { const hit = r.querySelector(sel); if (hit) return hit; for (const el of r.querySelectorAll("*")) if (el.shadowRoot) { const h = deep(el.shadowRoot, sel); if (h) return h; } return null; };
  const v = deep(document, "fp3d-view3d").viewer;
  console.log(JSON.stringify({ flow: v.flowActive, solar: v.solarActive, sound: v.soundActive, pool: v.poolActive, eff: [...v.effectFloors], robots: v.robots.size, fans: v.fans.size, orbit: v.orbitSpeed }));
});
await browser.close();
server.close();

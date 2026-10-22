// Temporary: what a tick does
import { createServer } from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";
const root = resolve(import.meta.dirname, "..");
const extra = process.env.EXTRA ? readFileSync(process.env.EXTRA, "utf8") : "";
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^[\/]+/, "");
  const file = join(root, path);
  if (path.startsWith("private") || !existsSync(file)) return res.writeHead(404).end();
  let body = readFileSync(file);
  if (path.endsWith("demo-data.js")) body = body.toString() + "\n" + extra;
  res.writeHead(200, { "content-type": { ".html": "text/html", ".js": "text/javascript" }[extname(file)] ?? "application/octet-stream" }).end(body);
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
page.on("console", (m) => m.type() !== "error" && console.log("PAGE", m.text().slice(0, 2000)));
page.on("pageerror", (e) => console.log("ERR", e.message));
await page.setUserAgent("Mozilla/5.0 (Linux; Android 9; KFTRWI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/118 Chrome/118.0 Safari/537.36");
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1.5, isMobile: true, hasTouch: true });
await page.goto(`http://127.0.0.1:${server.address().port}/preview/index.html${process.env.Q ?? ""}`, { waitUntil: "load" });
await new Promise((r) => setTimeout(r, 10000));
if (process.env.T) { const c = await page.createCDPSession(); await c.send("Emulation.setCPUThrottlingRate", { rate: +process.env.T }); await new Promise((r) => setTimeout(r, 2000)); }
await page.evaluate(process.env.JS);
await new Promise((r) => setTimeout(r, +(process.env.WAIT ?? 5000)));
await page.evaluate(process.env.JS2 ?? "0");
await browser.close();
server.close();

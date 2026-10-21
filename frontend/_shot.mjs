// Temporary: a preview shot with extra demo data (node _shot.mjs <out.png> <js appended to demo-data.js> [query] [js run in the page after load]).
import { createServer } from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import puppeteer from "puppeteer-core";

const root = "C:/dev/floorplan-3d";
const [out, extra = "", query = "", after = ""] = process.argv.slice(2);
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".css": "text/css" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (path.startsWith("private") || !existsSync(file)) return res.writeHead(404).end();
  let body = readFileSync(file);
  if (path.endsWith("demo-data.js")) body = body.toString() + "\n" + extra;
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(body);
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
page.on("pageerror", (e) => console.log("ERR", e.message));
await page.setViewport({ width: 1100, height: 750 });
await page.goto(`http://127.0.0.1:${server.address().port}/preview/index.html${query}`, { waitUntil: "load", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
if (after) {
  page.on("console", (m) => console.log("PAGE", m.text()));
  await page.evaluate(after);
  await new Promise((r) => setTimeout(r, 3000));
}
await page.screenshot({ path: out });
await browser.close();
server.close();

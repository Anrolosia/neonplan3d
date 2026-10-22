// Temporary, untracked: screenshots of the quiet demo house on low and high (node _perfshot.mjs <outDir> <tag>).
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const [outDir, tag] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });
// quiet house: nothing moves on its own, so two builds give the same picture
const extra = `
DEMO_STATES["vacuum.saugi"].state = "docked";
DEMO_STATES["fan.kinderzimmer"].state = "off";
for (const id of ["media_player.kueche_lautsprecher", "media_player.bad_lautsprecher", "media_player.fernseher"]) DEMO_STATES[id].state = "paused";
DEMO_STATES["switch.pool_filterpumpe"].state = "off";
delete DEMO_STATES["light.led_band"].attributes.effect;
DEMO_BUILDING.settings.pets = { ...DEMO_BUILDING.settings.pets, on: false };
DEMO_BUILDING.settings.halloween = { ghost: false };
for (const id of ["sensor.pv_leistung", "sensor.balkon_leistung"]) DEMO_STATES[id].state = "0";
`;
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^[\\/]+/, "");
  const file = join(root, path);
  if (path.startsWith("private") || !existsSync(file)) return res.writeHead(404).end();
  let body = readFileSync(file);
  if (path.endsWith("demo-data.js")) body = body.toString() + "\n" + extra;
  res.writeHead(200, { "content-type": { ".html": "text/html", ".js": "text/javascript", ".json": "application/json" }[extname(file)] ?? "application/octet-stream" }).end(body);
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
for (const [quality, query] of [
  ["low", ""],
  ["high", ""],
  ["low", "?alerts"],
  ["high", "?alerts"],
]) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: quality === "low" ? 1.5 : 1 });
  await page.evaluateOnNewDocument((q) => localStorage.setItem("neonplan3d.quality", q), quality);
  await page.goto(`http://127.0.0.1:${server.address().port}/preview/index.html${query}`, { waitUntil: "load", timeout: 120000 });
  await new Promise((r) => setTimeout(r, 9000));
  // the alert pulse is timed: hide nothing, just shoot (the pulse phase differs between runs)
  await page.screenshot({ path: join(outDir, `${tag}-${quality}${query ? "-alerts" : ""}.png`) });
  await page.close();
}
await browser.close();
server.close();

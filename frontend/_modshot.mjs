// Temporary, untracked: product shots of the two modules in the preview (mock hass patched to carry the modules).
// Usage (from frontend/): OUT=<dir> node _modshot.mjs
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.env.OUT ?? join(process.env.TEMP ?? ".", "modshot"));
mkdirSync(outDir, { recursive: true });
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file) || path.startsWith("private")) return void res.writeHead(404).end();
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const EN = process.env.LANG_EN === "1";
const base = `http://127.0.0.1:${server.address().port}/preview/index.html${EN ? "?lang=en" : ""}`;
const mods = {
  "mastershort.voice_answers": { pack: JSON.parse(readFileSync(join(root, "private/modules/voice-answers/dist/voice_answers.json"), "utf8")), code: readFileSync(join(root, "private/modules/voice-answers/dist/voice_answers.js"), "utf8") },
  "mastershort.window_watch": { pack: JSON.parse(readFileSync(join(root, "private/modules/window-watch/dist/window_watch.json"), "utf8")), code: readFileSync(join(root, "private/modules/window-watch/dist/window_watch.js"), "utf8") },
};
for (const m of Object.values(mods)) m.pack = { ...m.pack, module: { api: m.pack.module.api, kind: m.pack.module.kind } };

const executablePath = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
page.on("pageerror", (err) => console.log("PAGEERROR", err.message));
page.on("console", (m) => m.type() === "error" && console.log("CONSOLE", m.text().slice(0, 300)));
await page.goto(base, { waitUntil: "networkidle0", timeout: 120000 });
await sleep(2500);

await page.evaluate(async (mods) => {
  const panel = window.fp3dPanel;
  const hass = panel.hass;
  const ago = (min) => new Date(Date.now() - min * 60000).toISOString();
  const states = { ...hass.states };
  const touch = (id, patch) => (states[id] = { ...states[id], ...patch, attributes: { ...states[id].attributes, ...(patch.attributes ?? {}) } });
  touch("binary_sensor.schlafzimmer_fenster", { last_changed: ago(27), last_updated: ago(27) });
  touch("binary_sensor.schlafzimmer_kipp", { state: "off", last_changed: ago(27) });
  touch("weather.zuhause", { attributes: { temperature: 6, temperature_unit: "°C" } });
  touch("climate.schlafzimmer", { attributes: { hvac_action: "heating" } });
  const orig = hass.callWS.bind(hass);
  const callWS = async (msg) => {
    if (msg.type === "neonplan3d/packs/list") {
      const list = (await orig(msg)).packs.filter((p) => !mods[p.id]);
      return { packs: [...list, ...Object.values(mods).map((m) => m.pack)] };
    }
    if (msg.type === "neonplan3d/modules/code") {
      const m = mods[msg.pack_id];
      if (!m) return orig(msg);
      return { id: msg.pack_id, release: m.pack.release, api: m.pack.module.api, kind: m.pack.module.kind, code: m.code };
    }
    return orig(msg);
  };
  panel.hass = { ...hass, states, callWS };
  panel._voiceHere = true;
  await new Promise((r) => setTimeout(r, 100));
  await panel.data.reloadPacks();
}, mods);
await sleep(1500);
console.log("packs:", await page.evaluate(() => window.fp3dPanel.data.packs.map((p) => `${p.id}${p.module ? "+module" : ""}`).join(", ")));
await clickText("Erdgeschoss");
await sleep(2500);
await shot("1-fenster-waechter");

const V = `document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d")`;
for (const [name, text, hold] of (EN ? [["2-haus-antwortet-offen", "What is open?", true], ["3-haus-antwortet-morgen", "Good morning", true], ["4-haus-antwortet-kalt", "Where is it cold?", false], ["5-haus-antwortet-nacht", "Good night", true]] : [["2-haus-antwortet-offen", "Was ist offen?", true], ["3-haus-antwortet-morgen", "Guten Morgen", true], ["4-haus-antwortet-kalt", "Wo ist es kalt?", false], ["5-haus-antwortet-nacht", "Gute Nacht", true]])) {
  await page.evaluate((V, text) => void eval(V).onAsk({ ask_id: "shot", text, speak: false, screen: null }), V, text);
  await sleep(150);
  // the tour would fly off to the first window: the shot keeps the house in view
  if (hold) await page.evaluate((V) => { const v = eval(V); v.tourToken++; v.resetView(); }, V);
  await sleep(1800);
  console.log(name, await page.evaluate((V) => JSON.stringify(eval(V)._voice), V));
  await shot(name);
  await page.evaluate((V) => { const v = eval(V); v._voice = null; v.tourToken++; }, V);
  await clickText("Erdgeschoss");
  await sleep(1500);
}
await clickText(EN ? "✦ Extensions" : "✦ Erweiterungen");
await sleep(1500);
// scroll the Modules section into view
await page.evaluate(() => {
  const find = (root) => {
    for (const el of root.querySelectorAll("h2, h3, .fp3d-ext-head, summary, div")) if (el.children.length < 4 && /^modules?$/i.test(el.textContent.trim())) return el;
    for (const el of root.querySelectorAll("*")) if (el.shadowRoot) {
      const hit = find(el.shadowRoot);
      if (hit) return hit;
    }
    return null;
  };
  const el = find(document);
  el?.scrollIntoView({ block: "start" });
  window.scrollBy(0, -24);
  return !!el;
});
await sleep(800);
// open the module list (the last "Liste zeigen" on the page)
await page.evaluate(() => {
  const all = [];
  const walk = (root) => {
    for (const el of root.querySelectorAll("button, summary")) if (/Liste zeigen|Show the list/.test(el.textContent)) all.push(el);
    for (const el of root.querySelectorAll("*")) if (el.shadowRoot) walk(el.shadowRoot);
  };
  walk(document);
  all.at(-1)?.click();
});
await sleep(800);
await page.evaluate(() => {
  const find = (root) => {
    for (const el of root.querySelectorAll("*")) if (el.children.length < 4 && /^modules?$/i.test(el.textContent.trim())) return el;
    for (const el of root.querySelectorAll("*")) if (el.shadowRoot) {
      const hit = find(el.shadowRoot);
      if (hit) return hit;
    }
    return null;
  };
  find(document)?.scrollIntoView({ block: "start" });
  window.scrollBy(0, -24);
});
await sleep(500);
await shot("6-erweiterungen");
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

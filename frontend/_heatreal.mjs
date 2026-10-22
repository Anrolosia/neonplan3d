// Untracked, PRIVATE: Wärme Pro's demo on a real plan (a Home Assistant .storage building + packs file given by
// path, never copied into the repo). Screenshots into OUT.
// Usage (from frontend/): PLAN=<neonplan3d.building> PACKS=<neonplan3d.packs> OUT=<dir> node _heatreal.mjs
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.env.OUT ?? join(process.env.TEMP ?? ".", "heatreal"));
mkdirSync(outDir, { recursive: true });
const ONLY = process.argv[2] ?? "";
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file)) return void res.writeHead(404).end();
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/preview/index.html${process.env.LANG_EN === "1" ? "?lang=en" : ""}`;
const packSrc = JSON.parse(readFileSync(join(root, "private/modules/heat-pro/dist/pro_heat.json"), "utf8"));
const mod = { pack: { ...packSrc, module: { api: 1, kind: "stage", approved: true } }, code: readFileSync(join(root, "private/modules/heat-pro/dist/pro_heat.js"), "utf8") };
const planFile = JSON.parse(readFileSync(process.env.PLAN, "utf8"));
const plan = planFile.data.building ?? planFile.data;
// his packs: items only (no other module runs here)
const packs = JSON.parse(readFileSync(process.env.PACKS, "utf8")).data.packs.filter((p) => !p.module);

const executablePath = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const V = `document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d")`;

async function open(quality = "high", width = 1280, height = 800) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  page.on("pageerror", (err) => console.log("PAGEERROR", err.message));
  page.on("console", (m) => (m.type() === "error" || m.type() === "warning") && !/favicon|404/.test(m.text()) && console.log("CONSOLE", m.type(), m.text().slice(0, 300)));
  await page.evaluateOnNewDocument((q) => {
    localStorage.setItem("neonplan3d.quality", q);
    localStorage.setItem("neonplan3d.heat_pro.demo", "1");
    // the demo's clock four minutes into its cycle: heating
    const real = Date.now.bind(Date);
    const off = (240000 - (real() % 720000) + 720000) % 720000;
    Date.now = () => real() + off;
  }, quality);
  await page.goto(base, { waitUntil: "networkidle0", timeout: 120000 });
  await sleep(2000);
  await page.evaluate(
    async (mod, plan, packs) => {
      const panel = window.fp3dPanel;
      const hass = panel.hass;
      const orig = hass.callWS.bind(hass);
      let building = structuredClone(plan);
      let revision = 1000;
      const callWS = async (msg) => {
        if (msg.type === "neonplan3d/packs/list") return { packs: [...packs, mod.pack] };
        if (msg.type === "neonplan3d/modules/code" && msg.pack_id === mod.pack.id) return { id: mod.pack.id, release: 1, api: 1, kind: "stage", code: mod.code };
        if (msg.type === "neonplan3d/building/get") return { building: structuredClone(building), revision };
        if (msg.type === "neonplan3d/building/save") {
          building = structuredClone(msg.building);
          await orig({ type: "neonplan3d/building/save", building: msg.building });
          revision += 1;
          return { revision };
        }
        return orig(msg);
      };
      panel.hass = { ...hass, callWS };
      await new Promise((r) => setTimeout(r, 100));
      await panel.data.reloadPacks();
      // the save makes the panel load the plan again (through the patched hass)
      await callWS({ type: "neonplan3d/building/save", building });
    },
    mod,
    plan,
    packs,
  );
  await sleep(5000);
  return page;
}

async function shot(page, name) {
  if (ONLY && !name.startsWith(ONLY)) return;
  await page.screenshot({ path: join(outDir, `${name}.png`) });
  console.log("shot", name);
}
async function cardShot(page, name) {
  if (ONLY && !name.startsWith(ONLY)) return;
  await sleep(1500);
  const r = await page.evaluate((V) => {
    const el = eval(V).renderRoot.querySelector(".fp3d-holo-mod:not([hidden])");
    if (!el) return null;
    const b = el.getBoundingClientRect();
    return { x: b.x, y: b.y, w: b.width, h: b.height };
  }, V);
  if (!r) return console.log("NO CARD", name);
  console.log("card at", JSON.stringify(r));
  const m = 14;
  const vp = page.viewport();
  if (r.y < 0 || r.y + r.h > vp.height) console.log("CARD CUT", name);
  const x = Math.max(0, r.x - m);
  const y = Math.max(0, r.y - m);
  await page.screenshot({ path: join(outDir, `${name}.png`), clip: { x, y, width: Math.min(vp.width - x, r.w + 2 * m), height: Math.min(vp.height - y, r.h + 2 * m) } });
  console.log("shot", name);
}
/** Tries views until the heat pump's card floats fully on screen. */
async function cardView(page, floorId, x, z) {
  const vp = page.viewport();
  const tries = [];
  for (const [dz, r] of [[-5, 14], [-5.5, 14], [-5.5, 13]]) tries.push([0, dz, 1.5, r, 0.3, 0]);
  for (const [dx, dz, y, r, phi, th] of tries) {
    await view(page, floorId, x + dx, z + dz, y, r, phi, th);
    await sleep(1200);
    const b = await page.evaluate((V) => {
      const el = eval(V).renderRoot.querySelector(".fp3d-holo-mod:not([hidden])");
      if (!el) return null;
      const q = el.getBoundingClientRect();
      return { y: q.y, h: q.height, x: q.x, w: q.width };
    }, V);

    if (b && b.y > 110 && b.y + b.h < vp.height - 60 && b.x > 0 && b.x + b.w < vp.width) return true;
  }
  console.log("NO FULL CARD VIEW");
  return false;
}
async function view(page, floorId, x, z, y, radius, phi, theta) {
  await page.evaluate((V, a) => eval(V).viewer.focus(a[0], a[1], a[2], a[3], null, { radius: a[4], phi: a[5], theta: a[6] }), V, [floorId, x, z, y, radius, phi, theta]);
  await sleep(2000);
}
async function clickText(page, text) {
  const ok = await page.evaluate((t) => {
    const find = (root) => {
      for (const el of root.querySelectorAll("button")) if (!el.disabled && el.textContent.trim().toLowerCase().startsWith(t.toLowerCase())) return el;
      for (const el of root.querySelectorAll("*"))
        if (el.shadowRoot) {
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
  await sleep(1200);
}
async function info(page) {
  return page.evaluate((V) => {
    const v = eval(V);
    const scene = v.scene ?? [];
    const kinds = {};
    for (const p of scene) kinds[p.kind] = (kinds[p.kind] ?? 0) + 1;
    return JSON.stringify({ kinds, holos: (v._holos ?? []).map((h) => `${h.kind}`), tags: scene.filter((p) => p.kind === "tag").map((p) => `${p.id}@${p.at.map((n) => +n.toFixed(2))}`), lines: scene.filter((p) => p.kind === "line").map((p) => p.points.map((q) => `${+q[0].toFixed(2)},${+q[2].toFixed(2)}`).join(" ")) });
  }, V);
}

const EG = plan.floors.find((f) => f.elevation === 0)?.id ?? plan.floors[0].id;
const hp = plan.floors.flatMap((f) => f.furniture).find((f) => /heat_pump_indoor/.test(f.type));
const TAG = process.env.LANG_EN === "1" ? "-EN" : "";
if (process.env.TABLET === "1") {
  const tp = await open("low", 1024, 600);
  await shot(tp, "real-07-tablet-haus");
  await clickText(tp, plan.floors.find((f) => f.id === EG).name);
  await sleep(2500);
  await shot(tp, "real-07b-tablet-eg");
  await cardView(tp, EG, hp.x, hp.z);
  await shot(tp, "real-07c-tablet-karte");
  await tp.close();
  await browser.close();
  server.close();
  process.exit(0);
}
if (TAG) {
  const ep = await open("high");
  await clickText(ep, plan.floors.find((f) => f.id === EG).name);
  await sleep(2500);
  await ep.setViewport({ width: 1280, height: 1300, deviceScaleFactor: 1 });
  for (const [i, v] of [[hp.x, hp.z, 1.8, 8, 0.45, -0.3], [hp.x, hp.z - 0.7, 1.8, 7, 0.5, 0]].entries()) {
    await view(ep, EG, ...v);
    await cardShot(ep, `real-04b-karte-nah${TAG}-${i}`);
  }
  await ep.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
  await ep.close();
  await browser.close();
  server.close();
  process.exit(0);
}
const page = await open("high");
console.log("scene:", await info(page));
await shot(page, "real-01-haus");
await clickText(page, plan.floors.find((f) => f.id === EG).name);
await sleep(2500);
await shot(page, "real-02a-eg-start");
await view(page, EG, 7, 0, 0, 26, 0.02, 0);
await shot(page, "real-02-eg-oben");
const egFloor = plan.floors.find((f) => f.id === EG);
const areaOf = (pts) => Math.abs(pts.reduce((s, p, i) => s + p[0] * pts[(i + 1) % pts.length][1] - pts[(i + 1) % pts.length][0] * p[1], 0)) / 2;
const insideP = (p, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, zi] = poly[i]; const [xj, zj] = poly[j]; if (zi > p[1] !== zj > p[1] && p[0] < ((xj - xi) * (p[1] - zi)) / (zj - zi) + xi) c = !c; } return c; };
const lawn = (egFloor.outdoor ?? []).filter((a) => a.type === "lawn" && !(egFloor.outdoor ?? []).some((q) => q.type === "pool" && q.points.some((p) => insideP(p, a.points)))).sort((p, q) => areaOf(q.points) - areaOf(p.points))[0];
const lc = lawn ? [lawn.points.reduce((s, p) => s + p[0], 0) / lawn.points.length, lawn.points.reduce((s, p) => s + p[1], 0) / lawn.points.length] : [4, 0];
await view(page, EG, lc[0], lc[1], 0, 13, 0.75, -0.5);
await shot(page, "real-03-garten-kollektor");
await clickText(page, "Alle Etagen");
await sleep(2000);
await view(page, EG, lc[0], lc[1], 0, 15, 0.8, -0.5);
await shot(page, "real-03b-garten-hausansicht");
await clickText(page, plan.floors.find((f) => f.id === EG).name);
await sleep(2500);
await view(page, EG, hp.x, hp.z, 1.0, 6.5, 0.9, -0.4);
await shot(page, "real-04-technik-karte");
await page.setViewport({ width: 1280, height: 1300, deviceScaleFactor: 1 });
for (const [i, v] of [[hp.x, hp.z, 1.8, 8, 0.45, -0.3], [hp.x, hp.z - 0.7, 1.8, 7, 0.5, 0]].entries()) {
  await view(page, EG, ...v);
  await cardShot(page, `real-04b-karte-nah-${i}`);
}
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
await view(page, EG, 8, 6.5, 0, 12, 0.02, 0);
await shot(page, "real-05-eg-nah");
const OG = plan.floors.find((f) => f.elevation > 0);
if (OG) {
  await clickText(page, OG.name);
  await view(page, OG.id, 8, 6.5, 0, 13, 0.02, 0);
  await shot(page, "real-06-og-oben");
}
await page.close();
await browser.close();
server.close();

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

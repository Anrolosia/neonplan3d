// The supporter city: a small neon town at night beside the online demo. Every supporter is a light in it: a
// lantern by a road, a bigger lantern in their own colour, a house of their own with a name sign, or a lighthouse
// whose beam sweeps over the whole town. The town hall in the middle is NeonPlan itself; the town grows outwards.
// All lanterns are one object (instanced), so a few thousand stay smooth on an old wall tablet.

import {
  AdditiveBlending,
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  CircleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DoubleSide,
  EdgesGeometry,
  Float32BufferAttribute,
  FogExp2,
  Group,
  InstancedMesh,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  RingGeometry,
  Scene,
  SphereGeometry,
  Sprite,
  SpriteMaterial,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "../viewer/controls.ts";
import { demoSupporters } from "./demo.ts";
import { cleanData, housePlace, lanternPlace, lighthousePlace, plots, RING_STEP, ringHalf, ringsFor, type Supporter } from "./layout.ts";

/** The shop's list (a JSON file or endpoint); empty until it exists: then the preview shows invented supporters. */
const DATA_URL = "";
const CACHE_KEY = "neonplan3d.city";
const CYAN = "#22d3ee";

const params = new URLSearchParams(location.search);
const de = (params.get("lang") ?? navigator.language).toLowerCase().startsWith("de");
const T = de
  ? {
      title: "Supporter-Stadt",
      count: (n: number) => `${n.toLocaleString("de-DE")} Menschen tragen NeonPlan 3D`,
      search: "Mein Licht finden: Nummer oder Name",
      none: "Kein Licht gefunden",
      since: "seit",
      demo: "Vorschau mit erfundenen Supportern",
      back: "← Demohaus",
      hint: "Tippe auf ein Licht: Wer leuchtet da?",
      hall: "NeonPlan 3D – getragen von allen hier",
    }
  : {
      title: "Supporter city",
      count: (n: number) => `${n.toLocaleString("en")} people carry NeonPlan 3D`,
      search: "Find my light: number or name",
      none: "No light found",
      since: "since",
      demo: "Preview with invented supporters",
      back: "← Demo house",
      hint: "Tap a light: who shines there?",
      hall: "NeonPlan 3D – carried by everyone here",
    };

async function load(): Promise<{ list: Supporter[]; demo: boolean }> {
  const url = params.get("data") ?? DATA_URL;
  if (url) {
    try {
      const res = await fetch(url, { cache: "no-cache" });
      if (res.ok) {
        const json: unknown = await res.json();
        const list = cleanData(json);
        if (list.length) {
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(json));
          } catch {
            // private window: no cache, fine
          }
          return { list, demo: false };
        }
      }
    } catch {
      // the shop is not reachable: the last list this browser saw
    }
    try {
      const list = cleanData(JSON.parse(localStorage.getItem(CACHE_KEY) ?? "null"));
      if (list.length) return { list, demo: false };
    } catch {
      // nothing saved
    }
  }
  return { list: demoSupporters(Math.min(5000, Number(params.get("n")) || 216)), demo: true };
}

const nrText = (nr: number) => `#${String(nr).padStart(4, "0")}`;
const sinceText = (s: string) => {
  const [y, m] = s.split("-").map(Number);
  if (!y || !m) return "";
  return `${T.since} ${new Intl.DateTimeFormat(de ? "de-DE" : "en", { month: "long", year: "numeric" }).format(new Date(y, m - 1, 1))}`;
};

/** A soft round glow (white in the middle, clear at the edge) for the light on the ground and the halos. */
function glowTexture(): CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.35, "rgba(255,255,255,0.45)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

/** A name sign as a sprite: a dark glass plate with the text in a neon colour. */
function sign(text: string, color: string, height: number): Sprite {
  const c = document.createElement("canvas");
  const g = c.getContext("2d")!;
  const font = "600 44px system-ui, sans-serif";
  g.font = font;
  const w = Math.ceil(g.measureText(text).width) + 48;
  c.width = w;
  c.height = 76;
  g.font = font;
  g.fillStyle = "rgba(8,14,28,0.82)";
  g.strokeStyle = color;
  g.lineWidth = 4;
  g.beginPath();
  g.roundRect(2, 2, w - 4, 72, 18);
  g.fill();
  g.stroke();
  g.fillStyle = color;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(text, w / 2, 40);
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  const s = new Sprite(new SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
  s.scale.set((height * w) / 76, height, 1);
  return s;
}

/** A gable roof over a w × d box of height h (ridge along x), with its edges. */
function roof(w: number, d: number, h: number, rise: number): BufferGeometry {
  const x = w / 2 + 0.15;
  const z = d / 2 + 0.15;
  const p = [
    [-x, h, -z], [x, h, -z], [x, h + rise, 0], [-x, h + rise, 0], // back slope
    [-x, h, z], [x, h, z], [x, h + rise, 0], [-x, h + rise, 0], // front slope
  ];
  const pos: number[] = [];
  const quad = (a: number[], b: number[], c: number[], e: number[]) => pos.push(...a, ...b, ...c, ...a, ...c, ...e);
  quad(p[0], p[1], p[2], p[3]);
  quad(p[4], p[7], p[6], p[5]);
  // the gables
  pos.push(-x, h, -z, -x, h + rise, 0, -x, h, z, x, h, -z, x, h, z, x, h + rise, 0);
  const geo = new BufferGeometry();
  geo.setAttribute("position", new Float32BufferAttribute(pos, 3));
  return geo;
}

interface Pick {
  pos: Vector3;
  nr: number;
  radius: number;
}

async function start(): Promise<void> {
  const host = document.getElementById("city")!;
  const { list, demo } = await load();
  const byNr = new Map(list.map((s) => [s.nr, s]));
  const lastNr = list.length ? list[list.length - 1].nr : 0;
  const housePlots = plots(list, "spotlight");
  const towerPlots = plots(list, "lighthouse");
  const rings = Math.max(
    1,
    ringsFor(lastNr),
    ...[...housePlots.values()].map((j) => housePlace(j).ring + 1),
    ...[...towerPlots.values()].map((j) => lighthousePlace(j).ring),
  );
  const outer = ringHalf(rings) + 8;

  // ---------------------------------------------------------------- scene
  const renderer = new WebGLRenderer({ antialias: devicePixelRatio < 2, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  host.appendChild(renderer.domElement);
  const scene = new Scene();
  scene.background = new Color("#04070e");
  scene.fog = new FogExp2("#04070e", 0.9 / (outer * 2.2));
  const camera = new PerspectiveCamera(45, 1, 0.5, outer * 8);
  const glow = glowTexture();
  const glowMat = new MeshBasicMaterial({ map: glow, transparent: true, blending: AdditiveBlending, depthWrite: false });

  // ground with a faint grid, the ring roads and the four avenues
  const ground = new Mesh(new PlaneGeometry(outer * 2.6, outer * 2.6), new MeshBasicMaterial({ color: "#060b16" }));
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);
  const grid: number[] = [];
  for (let v = -outer * 1.3; v <= outer * 1.3; v += 6) grid.push(v, 0.01, -outer * 1.3, v, 0.01, outer * 1.3, -outer * 1.3, 0.01, v, outer * 1.3, 0.01, v);
  const gridGeo = new BufferGeometry();
  gridGeo.setAttribute("position", new Float32BufferAttribute(grid, 3));
  scene.add(new LineSegments(gridGeo, new LineBasicMaterial({ color: "#12305a", transparent: true, opacity: 0.35 })));
  const roadMat = new MeshBasicMaterial({ color: "#0c1526" });
  const edges: number[] = [];
  const strip = (x0: number, z0: number, x1: number, z1: number) => {
    const m = new Mesh(new PlaneGeometry(Math.abs(x1 - x0), Math.abs(z1 - z0)), roadMat);
    m.rotation.x = -Math.PI / 2;
    m.position.set((x0 + x1) / 2, 0.02, (z0 + z1) / 2);
    scene.add(m);
  };
  for (let k = 1; k <= rings; k++) {
    const r = ringHalf(k);
    strip(-r - 1.5, -r - 1.5, r + 1.5, -r + 1.5);
    strip(-r - 1.5, r - 1.5, r + 1.5, r + 1.5);
    strip(-r - 1.5, -r + 1.5, -r + 1.5, r - 1.5);
    strip(r - 1.5, -r + 1.5, r + 1.5, r - 1.5);
    for (const e of [r - 1.5, r + 1.5]) edges.push(-e, 0.03, -e, e, 0.03, -e, e, 0.03, -e, e, 0.03, e, e, 0.03, e, -e, 0.03, e, -e, 0.03, e, -e, 0.03, -e);
  }
  const far = ringHalf(rings) + 1.5;
  strip(-1.5, -far, 1.5, -6.5);
  strip(-1.5, 6.5, 1.5, far);
  strip(-far, -1.5, -7.5, 1.5);
  strip(7.5, -1.5, far, 1.5);
  const edgeGeo = new BufferGeometry();
  edgeGeo.setAttribute("position", new Float32BufferAttribute(edges, 3));
  scene.add(new LineSegments(edgeGeo, new LineBasicMaterial({ color: CYAN, transparent: true, opacity: 0.22 })));

  // the town hall: NeonPlan itself, warm windows, cyan edges, its sign
  const hall = new Group();
  const hallBody = new BoxGeometry(12, 4.2, 9);
  hallBody.translate(0, 2.1, 0);
  hall.add(new Mesh(hallBody, new MeshBasicMaterial({ color: "#0f1a30" })));
  hall.add(new LineSegments(new EdgesGeometry(hallBody), new LineBasicMaterial({ color: CYAN })));
  const hallRoof = roof(12, 9, 4.2, 2.6);
  hall.add(new Mesh(hallRoof, new MeshBasicMaterial({ color: "#13213b", side: DoubleSide })));
  hall.add(new LineSegments(new EdgesGeometry(hallRoof), new LineBasicMaterial({ color: CYAN })));
  const warm = new MeshBasicMaterial({ color: "#ffcf7a", side: DoubleSide });
  for (const z of [-4.51, 4.51])
    for (const x of [-4, -1.5, 1.5, 4]) {
      const w = new Mesh(new PlaneGeometry(1.2, 1.4), warm);
      w.position.set(x, 2.4, z);
      hall.add(w);
    }
  const hallSign = sign("NeonPlan 3D", CYAN, 1.6);
  hallSign.position.set(0, 8.6, 0);
  hall.add(hallSign);
  const hallGlow = new Mesh(new PlaneGeometry(26, 22), new MeshBasicMaterial({ map: glow, color: "#1f6f8a", transparent: true, blending: AdditiveBlending, depthWrite: false }));
  hallGlow.rotation.x = -Math.PI / 2;
  hallGlow.position.y = 0.04;
  hall.add(hallGlow);
  scene.add(hall);

  // a few dark blocks in between, so it reads as a town (nobody's, no light), where no house or lighthouse stands
  const blockMat = new MeshBasicMaterial({ color: "#0a1120" });
  const blockEdge = new LineBasicMaterial({ color: "#1d3a66", transparent: true, opacity: 0.6 });
  const taken = [...[...housePlots.values()].map((j) => ({ ...housePlace(j), r: 5 })), ...[...towerPlots.values()].map((j) => ({ ...lighthousePlace(j), r: 7.5 }))];
  for (let b = 0; b < rings - 1; b++) {
    const m = ringHalf(b + 1) + RING_STEP / 2;
    for (let side = 0; side < 4; side++)
      for (const t of [-0.75, -0.45, 0.45, 0.75].map((f) => f * m)) {
        const [x, z] = side === 0 ? [t, -m] : side === 1 ? [m, t] : side === 2 ? [-t, m] : [-m, -t];
        if (taken.some((q) => Math.hypot(q.x - x, q.z - z) < q.r)) continue;
        const h = 1.6 + (Math.abs((b * 7 + side * 3 + Math.round(t)) * 37) % 30) / 10;
        const geo = new BoxGeometry(3, h, 3);
        geo.translate(x, h / 2, z);
        scene.add(new Mesh(geo, blockMat), new LineSegments(new EdgesGeometry(geo), blockEdge));
      }
  }

  // ---------------------------------------------------------------- the supporters' lights
  const picks: Pick[] = [];
  const n = list.length;
  const poleGeo = new CylinderGeometry(0.05, 0.07, 2.2, 6);
  poleGeo.translate(0, 1.1, 0);
  const poles = new InstancedMesh(poleGeo, new MeshBasicMaterial({ color: "#2a3a5c" }), n);
  const heads = new InstancedMesh(new SphereGeometry(0.22, 10, 8), new MeshBasicMaterial({ color: "#ffffff" }), n);
  const pools = new InstancedMesh(new PlaneGeometry(1, 1).rotateX(-Math.PI / 2), glowMat, n);
  const o = new Object3D();
  const col = new Color();
  list.forEach((s, i) => {
    const p = lanternPlace(s.nr);
    const big = s.level !== "neon";
    const c = s.color ?? CYAN;
    const k = big ? 1.25 : 1;
    o.position.set(p.x, 0, p.z);
    o.rotation.set(0, 0, 0);
    o.scale.set(1, k, 1);
    o.updateMatrix();
    poles.setMatrixAt(i, o.matrix);
    o.position.set(p.x, 2.25 * k, p.z);
    o.scale.setScalar(k);
    o.updateMatrix();
    heads.setMatrixAt(i, o.matrix);
    heads.setColorAt(i, col.set(c));
    // the light on the road: a wider, stronger cone for the bigger lanterns
    o.position.set(p.x, 0.05, p.z);
    o.scale.setScalar(big ? 6 : 3.4);
    o.updateMatrix();
    pools.setMatrixAt(i, o.matrix);
    pools.setColorAt(i, col.set(c).multiplyScalar(big ? 0.75 : 0.45));
    picks.push({ pos: new Vector3(p.x, 2.25 * k, p.z), nr: s.nr, radius: 26 });
  });
  scene.add(poles, heads, pools);

  // houses: their own plot by an avenue, warm windows, the door in their colour, a name sign
  const houseMat = new MeshBasicMaterial({ color: "#121d33" });
  const roofMat = new MeshBasicMaterial({ color: "#16233f", side: DoubleSide });
  for (const [nr, j] of housePlots) {
    const s = byNr.get(nr)!;
    const c = s.color ?? CYAN;
    const p = housePlace(j);
    const g = new Group();
    const body = new BoxGeometry(3.6, 2.4, 3.6);
    body.translate(0, 1.2, 0);
    const top = roof(3.6, 3.6, 2.4, 1.4);
    const line = new LineBasicMaterial({ color: c });
    g.add(new Mesh(body, houseMat), new LineSegments(new EdgesGeometry(body), line), new Mesh(top, roofMat), new LineSegments(new EdgesGeometry(top), line));
    for (const x of [-1, 1]) {
      const w = new Mesh(new PlaneGeometry(0.7, 0.7), warm);
      w.position.set(x, 1.5, 1.81);
      g.add(w);
    }
    const door = new Mesh(new PlaneGeometry(0.8, 1.5), new MeshBasicMaterial({ color: c }));
    door.position.set(0, 0.75, 1.82);
    g.add(door);
    const plate = sign(s.name ?? nrText(nr), c, 0.75);
    plate.position.set(0, 4.4, 0);
    g.add(plate);
    const pool = new Mesh(new PlaneGeometry(9, 9).rotateX(-Math.PI / 2), new MeshBasicMaterial({ map: glow, color: new Color(c).multiplyScalar(0.55), transparent: true, blending: AdditiveBlending, depthWrite: false }));
    pool.position.y = 0.05;
    g.add(pool);
    g.position.set(p.x, 0, p.z);
    g.rotation.y = p.facing;
    scene.add(g);
    picks.push({ pos: new Vector3(p.x, 2, p.z), nr, radius: 44 });
  }

  // lighthouses: on the outer corners in a little harbour, the beam sweeping over the town, the name on top
  const beams: Group[] = [];
  for (const [nr, j] of towerPlots) {
    const s = byNr.get(nr)!;
    const c = s.color ?? CYAN;
    const p = lighthousePlace(j);
    const g = new Group();
    const water = new Mesh(new CircleGeometry(4.6, 32).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: "#0b3a5a" }));
    water.position.y = 0.03;
    const shore = new Mesh(new RingGeometry(4.5, 4.75, 40).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.45 }));
    shore.position.y = 0.04;
    const rock = new Mesh(new CylinderGeometry(1.9, 2.3, 0.8, 16), new MeshBasicMaterial({ color: "#1a2438" }));
    rock.position.y = 0.4;
    const tower = new Mesh(new CylinderGeometry(0.85, 1.35, 8, 16), new MeshBasicMaterial({ color: "#9fb0cc" }));
    tower.position.y = 4.8;
    g.add(water, shore, rock, tower);
    for (const y of [2.6, 5.4]) {
      const band = new Mesh(new CylinderGeometry(1.19 - (y - 0.8) * 0.06, 1.25 - (y - 0.8) * 0.06, 1.1, 16), new MeshBasicMaterial({ color: "#c2384f" }));
      band.position.y = y;
      g.add(band);
    }
    const lamp = new Mesh(new CylinderGeometry(0.7, 0.7, 1.1, 14), new MeshBasicMaterial({ color: c }));
    lamp.position.y = 9.35;
    const cap = new Mesh(new ConeGeometry(1, 1.1, 14), new MeshBasicMaterial({ color: "#1d2a44" }));
    cap.position.y = 10.45;
    g.add(lamp, cap);
    const halo = new Sprite(new SpriteMaterial({ map: glow, color: c, blending: AdditiveBlending, depthWrite: false, transparent: true }));
    halo.position.y = 9.35;
    halo.scale.setScalar(5);
    g.add(halo);
    // the beam: two long, faint cones turning round the lamp
    const beam = new Group();
    beam.position.y = 9.35;
    const beamMat = new MeshBasicMaterial({ color: c, transparent: true, opacity: 0.13, blending: AdditiveBlending, depthWrite: false, side: DoubleSide });
    for (const sgn of [-1, 1]) {
      const cone = new Mesh(new ConeGeometry(2.4, 30, 18, 1, true), beamMat);
      cone.rotation.z = (sgn * Math.PI) / 2;
      cone.position.x = sgn * -15;
      beam.add(cone);
    }
    beam.rotation.y = j * 1.3;
    beams.push(beam);
    g.add(beam);
    const plate = sign(s.name ?? nrText(nr), c, 1.1);
    plate.position.y = 12.3;
    g.add(plate);
    g.position.set(p.x, 0, p.z);
    scene.add(g);
    picks.push({ pos: new Vector3(p.x, 6, p.z), nr, radius: 50 });
  }

  // the chosen light: a ring on the ground that pulses
  const marker = new Mesh(new RingGeometry(0.9, 1.15, 40).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: "#ffffff", transparent: true, blending: AdditiveBlending, depthWrite: false }));
  marker.visible = false;
  marker.position.y = 0.08;
  scene.add(marker);

  // ---------------------------------------------------------------- overlay
  const ui = document.getElementById("city-ui")!;
  ui.innerHTML = `
    <header class="bar">
      <a class="back" href="../index.html">${T.back}</a>
      <div class="titles"><b>${T.title}</b><span class="count">${T.count(list.length)}</span></div>
      <form class="find"><input type="search" enterkeyhint="search" placeholder="${T.search}" aria-label="${T.search}" /></form>
    </header>
    ${demo ? `<div class="note">${T.demo}</div>` : ""}
    <div class="hint">${T.hint}</div>
    <div class="card" hidden></div>`;
  const card = ui.querySelector<HTMLDivElement>(".card")!;
  const input = ui.querySelector<HTMLInputElement>(".find input")!;
  const hint = ui.querySelector<HTMLDivElement>(".hint")!;
  let chosen: number | null = null;
  let chosenAt = 0;
  let markerSize = 1;
  const show = (nr: number | null, fly: boolean) => {
    chosen = nr;
    chosenAt = performance.now();
    const s = nr !== null ? byNr.get(nr) : undefined;
    if (!s || nr === null) {
      card.hidden = true;
      marker.visible = false;
      return;
    }
    hint.hidden = true;
    const c = s.color ?? CYAN;
    card.style.setProperty("--c", c);
    card.innerHTML = `<i></i><div><b>Supporter ${nrText(s.nr)}</b>${s.name ? `<span></span>` : ""}<small>${sinceText(s.since)}</small></div>`;
    if (s.name) card.querySelector("span")!.textContent = s.name;
    card.hidden = false;
    const at = picks.find((p) => p.nr === nr && p.radius > 26) ?? picks.find((p) => p.nr === nr)!;
    const big = s.level === "lighthouse" ? 3.2 : s.level === "spotlight" ? 2.6 : 1;
    marker.position.set(at.pos.x, 0.08, at.pos.z);
    markerSize = big;
    (marker.material as MeshBasicMaterial).color.set(c);
    marker.visible = true;
    if (fly) controls.flyTo({ target: new Vector3(at.pos.x, 1, at.pos.z), radius: s.level === "lighthouse" ? 34 : s.level === "spotlight" ? 20 : 13, phi: 0.95 }, 1100);
    dirty = true;
  };
  ui.querySelector("form")!.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value.trim().replace(/^#/, "");
    const nr = Number(q);
    const hit = q && Number.isInteger(nr) && byNr.has(nr) ? nr : list.find((s) => s.name && q && s.name.toLowerCase().includes(q.toLowerCase()))?.nr;
    if (hit) {
      input.blur();
      show(hit, true);
    } else {
      input.value = "";
      input.placeholder = T.none;
    }
  });

  // ---------------------------------------------------------------- camera and taps
  let dirty = true;
  const v = new Vector3();
  const controls = new OrbitControls(renderer.domElement, camera, {
    change: () => (dirty = true),
    tap: (x, y) => {
      const w = renderer.domElement.clientWidth;
      const h = renderer.domElement.clientHeight;
      let best: Pick | null = null;
      let bestD = Infinity;
      for (const p of picks) {
        v.copy(p.pos).project(camera);
        if (v.z > 1) continue;
        const d = Math.hypot(((v.x + 1) / 2) * w - x, ((1 - v.y) / 2) * h - y);
        // houses and lighthouses win over a lantern right beside them
        const score = d - (p.radius > 26 ? 12 : 0);
        if (d < p.radius && score < bestD) {
          best = p;
          bestD = score;
        }
      }
      show(best?.nr ?? null, false);
    },
    doubleTap: () => {},
    hold: () => {},
  });
  controls.maxRadius = outer * 3;
  controls.minRadius = 6;
  controls.view = { target: new Vector3(0, 0, 0), radius: Math.max(46, outer * 1.9), theta: -0.55, phi: 0.92 };

  const resize = () => {
    const w = host.clientWidth;
    const h = host.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
    dirty = true;
  };
  new ResizeObserver(resize).observe(host);
  resize();

  const light = Number(params.get("licht") ?? params.get("light"));
  if (Number.isInteger(light) && byNr.has(light)) setTimeout(() => show(light, true), 400);

  // only draw while something moves: the camera, a beam, the chosen light's pulse
  let last = 0;
  const frame = (now: number) => {
    requestAnimationFrame(frame);
    const moving = controls.update(now);
    const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
    last = now;
    for (const b of beams) b.rotation.y += dt * 0.55;
    if (chosen !== null && marker.visible) {
      const t = ((now - chosenAt) / 1000) % 1.6;
      (marker.material as MeshBasicMaterial).opacity = 0.9 - t / 2;
      marker.scale.setScalar(markerSize * (1 + t * 0.5));
    }
    if (moving || beams.length || marker.visible || dirty) {
      renderer.render(scene, camera);
      dirty = false;
    }
  };
  requestAnimationFrame(frame);
}

void start();

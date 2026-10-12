// Fun pack "pets": cats, dogs and rabbits that live in the 3D house. Each walks through the doors from room to room
// (the walk's floor map finds the way), rests at its favourite places – a cat jumps onto the sofa or the bed, a dog
// lies in front of it – and sleeps at night. They are drawn only while they move; resting, they cost nothing.
// three.js comes from the 3D bundle (passed in), so this bundle stays small.

import type * as THREE from "three";
import type { Building, Floor, Furniture, Pet, Vec2 } from "../model.ts";
import type { FloorMap } from "../viewer/walk.ts";

/** The three.js classes the pets need, lent by the 3D bundle (it has no ready-made spheres or boxes: shapes are made here). */
export type FunLib = Pick<typeof THREE, "Group" | "Mesh" | "MeshBasicMaterial" | "CanvasTexture" | "Color" | "PlaneGeometry" | "BufferGeometry" | "Float32BufferAttribute"> & { DoubleSide: typeof THREE.DoubleSide };

/** Simple solids as triangle lists (no normals: the materials are unlit). */
function shapes(lib: FunLib) {
  const geo = (pos: number[]) => {
    const g = new lib.BufferGeometry();
    g.setAttribute("position", new lib.Float32BufferAttribute(pos, 3));
    g.computeBoundingSphere();
    return g;
  };
  /** A ring-based solid round the y axis: radius per height (bottom to top), n sides. */
  const lathe = (rings: [number, number][], n: number) => {
    const pos: number[] = [];
    for (let i = 0; i < rings.length - 1; i++) {
      const [r0, y0] = rings[i];
      const [r1, y1] = rings[i + 1];
      for (let k = 0; k < n; k++) {
        const a0 = (k / n) * Math.PI * 2;
        const a1 = ((k + 1) / n) * Math.PI * 2;
        const p = (r: number, y: number, a: number) => [Math.cos(a) * r, y, Math.sin(a) * r];
        pos.push(...p(r0, y0, a0), ...p(r1, y1, a0), ...p(r1, y1, a1), ...p(r0, y0, a0), ...p(r1, y1, a1), ...p(r0, y0, a1));
      }
    }
    return geo(pos);
  };
  return {
    box: (w: number, h: number, d: number) => {
      const [x, y, z] = [w / 2, h / 2, d / 2];
      const v = [
        [-x, -y, -z], [x, -y, -z], [x, y, -z], [-x, y, -z],
        [-x, -y, z], [x, -y, z], [x, y, z], [-x, y, z],
      ];
      const pos: number[] = [];
      for (const [a, b, c, d2] of [[0, 1, 2, 3], [5, 4, 7, 6], [4, 0, 3, 7], [1, 5, 6, 2], [3, 2, 6, 7], [4, 5, 1, 0]]) pos.push(...v[a], ...v[b], ...v[c], ...v[a], ...v[c], ...v[d2]);
      return geo(pos);
    },
    sphere: (r: number, n = 10) => lathe(Array.from({ length: n / 2 + 1 }, (_, i): [number, number] => [Math.sin((i / (n / 2)) * Math.PI) * r, -Math.cos((i / (n / 2)) * Math.PI) * r]), n),
    cylinder: (rTop: number, rBottom: number, h: number, n = 8) => lathe([[0, -h / 2], [rBottom, -h / 2], [rTop, h / 2], [0, h / 2]], n),
    cone: (r: number, h: number, n = 6) => lathe([[0, -h / 2], [r, -h / 2], [0, h / 2]], n),
  };
}

/** The parts of NeonPlan's viewer the pets live in (reached at run time). */
export interface PetViewer {
  floorMap: Map<string, { group: THREE.Group; floor: Floor }>;
  invalidate(): void;
}

export interface PetsContext {
  lib: FunLib;
  FloorMap: typeof FloorMap;
  viewer: PetViewer;
  building: Building;
  pets: readonly Pet[];
  /** Whether it is night (the sun below the horizon). */
  night: () => boolean;
}

export interface PetsController {
  update(building: Building, pets: readonly Pet[]): void;
  dispose(): void;
}

const FURS: Record<string, [string, string]> = {
  orange: ["#d98a3d", "#f4dcc0"],
  tabby: ["#9c7a52", "#d9c3a3"],
  black: ["#26262c", "#45454f"],
  white: ["#ececf0", "#f6c9cf"],
  grey: ["#8a909c", "#c9ccd3"],
  brown: ["#6e4a2e", "#c79c6e"],
  calico: ["#f2efe8", "#d9873a"],
};

/** Body sizes per kind: body length, width, height, leg length, head radius, speed (m/s). */
const SIZE = {
  cat: { len: 0.4, wid: 0.15, hi: 0.15, leg: 0.17, head: 0.085, speed: 0.55 },
  dog: { len: 0.55, wid: 0.2, hi: 0.2, leg: 0.26, head: 0.115, speed: 0.85 },
  rabbit: { len: 0.28, wid: 0.17, hi: 0.15, leg: 0.06, head: 0.075, speed: 0.6 },
} as const;

interface Model {
  root: THREE.Group;
  body: THREE.Group;
  legs: THREE.Group[];
  tail: THREE.Group;
  head: THREE.Group;
  zzz: THREE.Mesh;
}

/** A small low-poly animal in the colours of its fur, eyes glowing in neon. */
function buildModel(lib: FunLib, pet: Pet): Model {
  const S = shapes(lib);
  const s = SIZE[pet.kind];
  const [main, second] = FURS[pet.fur] ?? FURS.orange;
  const m1 = new lib.MeshBasicMaterial({ color: main });
  const m2 = new lib.MeshBasicMaterial({ color: second });
  const shade = new lib.MeshBasicMaterial({ color: new lib.Color(main).multiplyScalar(0.72) });
  const eye = new lib.MeshBasicMaterial({ color: pet.kind === "cat" ? "#9dffb0" : "#e6f4ff" });
  const root = new lib.Group();
  const body = new lib.Group();
  root.add(body);
  const legY = s.leg;
  // the body: a box (a rounded ball for the rabbit), its belly lighter
  if (pet.kind === "rabbit") {
    const b = new lib.Mesh(S.sphere(0.5, 12), m1);
    b.scale.set(s.wid, s.hi * 1.6, s.len);
    b.position.y = legY + s.hi * 0.7;
    body.add(b);
    const pom = new lib.Mesh(S.sphere(0.045, 8), m2);
    pom.position.set(0, legY + s.hi * 0.8, -s.len / 2);
    body.add(pom);
  } else {
    const b = new lib.Mesh(S.box(s.wid, s.hi, s.len), m1);
    b.position.y = legY + s.hi / 2;
    const belly = new lib.Mesh(S.box(s.wid * 0.9, 0.02, s.len * 0.8), m2);
    belly.position.y = legY + 0.005;
    body.add(b, belly);
  }
  // legs: pivot at the hip, the foot hanging below
  const legs: THREE.Group[] = [];
  for (const [x, z] of [
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, -1],
  ]) {
    const g = new lib.Group();
    g.position.set((x * s.wid) / 3, legY, (z * s.len) / 2.8);
    const leg = new lib.Mesh(S.box(0.045, Math.max(0.04, legY), 0.045), shade);
    leg.position.y = -Math.max(0.04, legY) / 2;
    g.add(leg);
    body.add(g);
    legs.push(g);
  }
  // the head, at the front (+z), with ears and eyes
  const head = new lib.Group();
  head.position.set(0, legY + s.hi * (pet.kind === "rabbit" ? 1.25 : 1.05), s.len / 2 + s.head * 0.6);
  const skull = new lib.Mesh(S.sphere(s.head, 12), m1);
  head.add(skull);
  if (pet.kind === "dog") {
    const snout = new lib.Mesh(S.box(s.head * 0.9, s.head * 0.7, s.head * 1.1), m2);
    snout.position.set(0, -s.head * 0.25, s.head * 0.95);
    head.add(snout);
  }
  for (const side of [-1, 1]) {
    const ear =
      pet.kind === "cat"
        ? new lib.Mesh(S.cone(s.head * 0.42, s.head * 0.8, 4), m1)
        : pet.kind === "rabbit"
          ? new lib.Mesh(S.cylinder(s.head * 0.18, s.head * 0.28, s.head * 2.6, 6), m1)
          : new lib.Mesh(S.box(s.head * 0.35, s.head * 0.9, s.head * 0.6), shade);
    if (pet.kind === "cat") ear.position.set(side * s.head * 0.5, s.head * 0.95, -s.head * 0.1);
    else if (pet.kind === "rabbit") {
      ear.position.set(side * s.head * 0.35, s.head * 1.9, -s.head * 0.2);
      ear.rotation.z = side * -0.15;
    } else ear.position.set(side * s.head * 0.95, -s.head * 0.05, -s.head * 0.1);
    head.add(ear);
    const e = new lib.Mesh(S.sphere(s.head * 0.16, 6), eye);
    e.position.set(side * s.head * 0.42, s.head * 0.18, s.head * 0.86);
    head.add(e);
  }
  body.add(head);
  // the tail at the back, pivot at its root
  const tail = new lib.Group();
  tail.position.set(0, legY + s.hi * 0.8, -s.len / 2);
  if (pet.kind !== "rabbit") {
    const tl = pet.kind === "cat" ? 0.3 : 0.18;
    const t = new lib.Mesh(S.cylinder(0.018, 0.026, tl, 6), pet.kind === "cat" ? m1 : shade);
    t.position.y = tl / 2;
    tail.add(t);
    tail.rotation.x = -0.7;
  }
  body.add(tail);
  // "z Z" over a sleeping pet
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 64;
  const g = c.getContext("2d")!;
  g.font = "bold 40px system-ui, sans-serif";
  g.fillStyle = "#cfe9ff";
  g.fillText("z", 20, 52);
  g.font = "bold 54px system-ui, sans-serif";
  g.fillText("Z", 58, 46);
  // a card tilted towards the usual view from above
  const zzz = new lib.Mesh(new lib.PlaneGeometry(0.34, 0.17), new lib.MeshBasicMaterial({ map: new lib.CanvasTexture(c), transparent: true, depthWrite: false, side: lib.DoubleSide }));
  zzz.rotation.x = -0.7;
  zzz.position.set(0, legY + s.hi + 0.35, 0);
  zzz.visible = false;
  root.add(zzz);
  return { root, body, legs, tail, head, zzz };
}

/** A place a pet likes: where it goes, how high it lies, which way it faces. */
interface Spot {
  p: Vec2;
  y: number;
  sleep: boolean;
}

const SOFT = /sofa|armchair|corner_bench|bench/;
const BED = /bed/;
const PETS_PACK = /cat|dog|pet|litter|basket|kennel|scratch/;

/** Favourite places on a floor: on the sofa or the bed (a cat jumps up), in front of it (a dog), on the rug, the pet pack's items. */
function spotsFor(floor: Floor, kind: Pet["kind"]): Spot[] {
  const out: Spot[] = [];
  const front = (f: Furniture, k: number): Vec2 => {
    const a = (f.rotation * Math.PI) / 180;
    return [f.x - Math.sin(a) * k, f.z + Math.cos(a) * k];
  };
  for (const f of floor.furniture) {
    const t = f.type.toLowerCase();
    const bed = BED.test(t) && !t.includes("bunk");
    if (PETS_PACK.test(t)) out.push({ p: [f.x, f.z], y: kind === "cat" ? Math.min(0.5, f.h * 0.9) : 0.02, sleep: true });
    else if (SOFT.test(t) || bed) {
      if (kind === "cat") out.push({ p: [f.x, f.z], y: Math.min(0.6, f.h * (bed ? 0.62 : 0.55)), sleep: bed });
      else out.push({ p: front(f, f.d / 2 + 0.35), y: 0, sleep: bed });
    } else if (t === "rug") out.push({ p: [f.x, f.z], y: 0.01, sleep: false });
  }
  return out;
}

type Mode = "walk" | "rest" | "sleep";

interface Animal {
  pet: Pet;
  model: Model;
  floorId: string;
  map: FloorMap;
  spots: Spot[];
  rooms: Floor["rooms"];
  pos: Vec2;
  y: number;
  /** Height wanted at the end of the way (a cat jumps up there). */
  goalY: number;
  heading: number;
  path: Vec2[];
  mode: Mode;
  until: number;
  phase: number;
  /** A jump up or down: from y0 to y1 over the next moments. */
  jump: { y0: number; y1: number; t: number } | null;
}

const rnd = (a: number, b: number) => a + Math.random() * (b - a);

export function startPets(ctx: PetsContext): PetsController {
  const { lib, viewer } = ctx;
  let animals: Animal[] = [];
  let raf = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let last = 0;

  const floorFor = (b: Building, pet: Pet): Floor | undefined => {
    const withRooms = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3));
    return withRooms.find((f) => f.id === pet.floor_id) ?? [...withRooms].sort((x, y) => Math.abs(x.elevation) - Math.abs(y.elevation))[0];
  };

  /** A random free place in a room. */
  const somewhere = (a: Animal): Vec2 => {
    const r = a.rooms[Math.floor(Math.random() * a.rooms.length)];
    const xs = r.points.map((p) => p[0]);
    const zs = r.points.map((p) => p[1]);
    for (let i = 0; i < 12; i++) {
      const p: Vec2 = [rnd(Math.min(...xs) + 0.4, Math.max(...xs) - 0.4), rnd(Math.min(...zs) + 0.4, Math.max(...zs) - 0.4)];
      if (a.map.roomAt(p) && !a.map.blocked(p)) return p;
    }
    return a.map.freeNear([(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...zs) + Math.max(...zs)) / 2]);
  };

  /** What next: at night to a sleeping place, by day to a favourite place or anywhere; then rest there a while. */
  const decide = (a: Animal, now: number) => {
    const night = ctx.night();
    const sleepers = a.spots.filter((s) => s.sleep);
    const choices: Spot[] = night && sleepers.length ? sleepers : a.spots;
    for (let tries = 0; tries < 6; tries++) {
      const fav = choices.length && (night || Math.random() < 0.6) ? choices[Math.floor(Math.random() * choices.length)] : null;
      const goal = fav ? fav.p : somewhere(a);
      const target = a.map.blocked(goal) ? a.map.freeNear(goal) : goal;
      const path = Math.hypot(target[0] - a.pos[0], target[1] - a.pos[1]) < 0.05 ? [] : a.map.path(a.pos, target);
      if (!path) continue;
      // off the sofa first: jump down before walking
      if (a.y > 0.05) a.jump = { y0: a.y, y1: 0, t: 0 };
      a.path = path;
      a.goalY = fav?.y ?? 0;
      a.mode = "walk";
      a.model.zzz.visible = false;
      return;
    }
    a.mode = night ? "sleep" : "rest";
    a.until = now + rnd(20, 60) * 1000;
  };

  const pose = (a: Animal) => {
    const lying = a.mode !== "walk";
    const s = SIZE[a.pet.kind];
    a.model.root.position.set(a.pos[0], a.y, a.pos[1]);
    a.model.root.rotation.y = a.heading;
    // lying: legs tucked, body down; walking: legs swing, the body bobs, the tail wags
    const swing = a.mode === "walk" && !a.jump ? Math.sin(a.phase) : 0;
    // lying: the front paws stretched forward, the hind legs folded under the body
    a.model.legs.forEach((l, i) => {
      l.rotation.x = lying ? (i < 2 ? -1.4 : 0) : (i === 0 || i === 3 ? swing : -swing) * 0.7;
      l.scale.y = lying && i >= 2 ? 0.15 : 1;
    });
    const hop = a.pet.kind === "rabbit" && a.mode === "walk" ? Math.abs(Math.sin(a.phase)) * 0.08 : 0;
    a.model.body.position.y = (lying ? -s.leg * 0.85 : Math.abs(swing) * 0.01) + hop;
    a.model.tail.rotation.z = Math.sin(a.phase * 0.6) * (a.mode === "walk" ? 0.5 : 0.15);
    a.model.head.rotation.x = a.mode === "sleep" ? 0.35 : 0;
    a.model.zzz.visible = a.mode === "sleep";
  };

  const step = (a: Animal, dt: number, now: number): boolean => {
    if (a.jump) {
      a.jump.t = Math.min(1, a.jump.t + dt / 0.35);
      const k = a.jump.t;
      a.y = a.jump.y0 + (a.jump.y1 - a.jump.y0) * k + Math.sin(k * Math.PI) * 0.18;
      if (k >= 1) {
        a.y = a.jump.y1;
        a.jump = null;
      }
      pose(a);
      return true;
    }
    if (a.mode !== "walk") {
      if (now < a.until) return false;
      decide(a, now);
      pose(a);
      return (a.mode as Mode) === "walk";
    }
    const next = a.path[0];
    if (!next) {
      // arrived: up onto the sofa (a cat), then rest or sleep
      if (a.goalY > 0.05 && a.y < 0.05) {
        a.jump = { y0: a.y, y1: a.goalY, t: 0 };
        return true;
      }
      a.mode = ctx.night() ? "sleep" : "rest";
      a.until = now + (a.mode === "sleep" ? rnd(120, 400) : a.pet.kind === "cat" ? rnd(30, 120) : rnd(15, 60)) * 1000;
      pose(a);
      return true;
    }
    const dx = next[0] - a.pos[0];
    const dz = next[1] - a.pos[1];
    const dist = Math.hypot(dx, dz);
    const speed = SIZE[a.pet.kind].speed;
    const want = Math.atan2(dx, dz);
    let turn = want - a.heading;
    while (turn > Math.PI) turn -= 2 * Math.PI;
    while (turn < -Math.PI) turn += 2 * Math.PI;
    a.heading += Math.sign(turn) * Math.min(Math.abs(turn), dt * 6);
    const move = Math.min(dist, speed * dt);
    if (dist < 0.02) a.path.shift();
    else {
      a.pos = [a.pos[0] + (dx / dist) * move, a.pos[1] + (dz / dist) * move];
      a.phase += dt * speed * 18;
    }
    pose(a);
    return true;
  };

  const tick = (now: number) => {
    raf = 0;
    const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
    last = now;
    let active = false;
    for (const a of animals) if (step(a, dt, now)) active = true;
    if (active) viewer.invalidate();
    if (active) raf = requestAnimationFrame(tick);
    else {
      // all of them rest: wake up when the first one wants to go on
      const wait = Math.max(500, Math.min(...animals.map((a) => a.until - performance.now()), 60000));
      last = 0;
      timer = setTimeout(() => (raf = requestAnimationFrame(tick)), wait);
    }
  };

  const clear = () => {
    cancelAnimationFrame(raf);
    clearTimeout(timer);
    for (const a of animals) a.model.root.removeFromParent();
    animals = [];
  };

  const update = (b: Building, pets: readonly Pet[]) => {
    const before = new Map(animals.map((a) => [a.pet.id, a]));
    clear();
    for (const pet of pets) {
      const floor = floorFor(b, pet);
      const fv = floor && viewer.floorMap.get(floor.id);
      if (!floor || !fv) continue;
      const map = new ctx.FloorMap(b, floor);
      const rooms = floor.rooms.filter((r) => r.points.length >= 3);
      if (!rooms.length) continue;
      const model = buildModel(lib, pet);
      fv.group.add(model.root);
      const old = before.get(pet.id);
      const a: Animal = {
        pet,
        model,
        floorId: floor.id,
        map,
        spots: spotsFor(floor, pet.kind),
        rooms,
        pos: old && old.floorId === floor.id ? old.pos : [0, 0],
        y: 0,
        goalY: 0,
        heading: old?.heading ?? rnd(0, Math.PI * 2),
        path: [],
        mode: "rest",
        until: 0,
        phase: 0,
        jump: null,
      };
      if (!old || old.floorId !== floor.id) a.pos = somewhere(a);
      pose(a);
      animals.push(a);
    }
    last = 0;
    viewer.invalidate();
    if (animals.length) raf = requestAnimationFrame(tick);
  };

  update(ctx.building, ctx.pets);
  return { update, dispose: clear };
}

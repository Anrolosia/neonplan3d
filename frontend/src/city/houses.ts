// The supporter city's buildings as NeonPlan draws houses: walls with their thickness, doors you can walk
// through, glass windows lit from inside, floors and a little furniture. The town hall is the demo house's
// ground floor. One plan holds all of it, so the walk (FloorMap) stops at walls and finds the doors.

import { AdditiveBlending, BufferGeometry, Color, DoubleSide, Float32BufferAttribute, Group, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, PlaneGeometry, Shape, ShapeGeometry, type Texture } from "three";
import { generateWalls, locateOpening, openingHost, type Wall } from "../geometry/walls.ts";
import { isLamp, type Building, type Floor, type Furniture, type Opening, type Room, type Vec2 } from "../model.ts";
import { mountBase } from "../packs.ts";
import { FloorMap } from "../viewer/walk.ts";

/** Wall height of the city's houses (m). */
export const WALL_H = 2.5;
const EXT = 0.24;
const INT = 0.12;

/** A supporter's house: 4.4 × 4.2 m, the door in the middle of the front (local +z). */
export const HOUSE_W = 4.4;
export const HOUSE_D = 4.2;

export interface HouseSpot {
  id: string;
  x: number;
  z: number;
  facing: number;
  color: string;
}

const rot = (x: number, z: number, f: number, at: Vec2): Vec2 => [
  Math.round((at[0] + x * Math.cos(f) + z * Math.sin(f)) * 1000) / 1000,
  Math.round((at[1] - x * Math.sin(f) + z * Math.cos(f)) * 1000) / 1000,
];

const opening = (id: string, room: string, edge: number, offset: number, width: number, type: "door" | "window", sill: number, height: number): Opening =>
  ({ id, room_id: room, edge, offset, width, type, sill, height, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null }) as unknown as Opening;

const room = (id: string, points: Vec2[], material = "wood"): Room => ({ id, name: id, area_id: null, points, floor_material: material }) as Room;

export interface CityPlan {
  building: Building;
  floor: Floor;
  /** Rooms drawn as houses (not the solid blocks and islands that only stop the walk). */
  shown: Set<string>;
}

/**
 * One plan for the whole town: the demo house's ground floor in the middle (moved so its centre is the origin),
 * every supporter's house, and solid shapes for the lighthouses' rocks and the dark blocks.
 */
export function cityPlan(hall: Floor | null, houses: readonly HouseSpot[], solids: readonly { id: string; points: Vec2[] }[]): CityPlan {
  const rooms: Room[] = [];
  const openings: Opening[] = [];
  const walls: NonNullable<Floor["walls"]> = [];
  const furniture: Furniture[] = [];
  const shown = new Set<string>();
  if (hall) {
    const xs = hall.rooms.flatMap((r) => r.points.map((p) => p[0]));
    const zs = hall.rooms.flatMap((r) => r.points.map((p) => p[1]));
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cz = (Math.min(...zs) + Math.max(...zs)) / 2;
    const mv = (p: Vec2): Vec2 => [Math.round((p[0] - cx) * 1000) / 1000, Math.round((p[1] - cz) * 1000) / 1000];
    for (const r of hall.rooms) {
      rooms.push({ ...r, id: `hall_${r.id}`, points: r.points.map(mv) });
      shown.add(`hall_${r.id}`);
    }
    for (const o of hall.openings) openings.push({ ...o, id: `hall_${o.id}`, room_id: `hall_${o.room_id}`, wall: o.wall ? `hall_${o.wall}` : o.wall });
    for (const w of hall.walls ?? []) walls.push({ ...w, id: `hall_${w.id}`, a: mv(w.a), b: mv(w.b) });
    for (const f of hall.furniture) {
      const [x, z] = mv([f.x, f.z]);
      furniture.push({ ...f, id: `hall_${f.id}`, x, z });
    }
  }
  for (const h of houses) {
    const w = HOUSE_W / 2;
    const d = HOUSE_D / 2;
    const at: Vec2 = [h.x, h.z];
    const id = `house_${h.id}`;
    rooms.push(room(id, [rot(-w, -d, h.facing, at), rot(w, -d, h.facing, at), rot(w, d, h.facing, at), rot(-w, d, h.facing, at)]));
    shown.add(id);
    // the door in the middle of the front (edge 2 runs from the front right to the front left corner), windows
    // beside it, on both sides and at the back
    openings.push(
      opening(`${id}_door`, id, 2, w, 0.9, "door", 0, 2.05),
      opening(`${id}_wf1`, id, 2, 0.95, 0.7, "window", 0.9, 1.2),
      opening(`${id}_wf2`, id, 2, HOUSE_W - 0.95, 0.7, "window", 0.9, 1.2),
      opening(`${id}_wr`, id, 1, d, 1.2, "window", 0.9, 1.2),
      opening(`${id}_wl`, id, 3, d, 1.2, "window", 0.9, 1.2),
      opening(`${id}_wb`, id, 0, w, 1.4, "window", 0.9, 1.2),
    );
  }
  for (const s of solids) rooms.push(room(s.id, s.points));
  const floor = { id: "city", name: "City", elevation: 0, height: WALL_H, rooms, openings, walls, furniture, placements: [], outdoor: [] } as unknown as Floor;
  const building = { floors: [floor], settings: { wall_exterior: EXT, wall_interior: INT } } as unknown as Building;
  return { building, floor, shown };
}

/**
 * The walk's map of the town: the same rules as in a house, with the walls and doors looked up near the walker only
 * (a town has a few thousand walls; the house view's checks would test every one of them at every step).
 */
export class CityMap extends FloorMap {
  private cells = new Map<string, FloorMap["solids"]>();
  private all: FloorMap["solids"];
  private allDoors: FloorMap["doors"];
  private curSolids: FloorMap["solids"];
  private curDoors: FloorMap["doors"];

  constructor(building: Building, floor: Floor) {
    super(building, floor);
    this.all = [...this.solids];
    this.allDoors = [...this.doors];
    this.curSolids = this.all;
    this.curDoors = this.allDoors;
    // the house view's checks read these two lists: here they are the part near the walker
    Object.defineProperty(this, "solids", { get: () => this.curSolids });
    Object.defineProperty(this, "doors", { get: () => this.curDoors });
    for (const s of this.all) {
      const x0 = Math.min(s.a[0], s.a[0] + s.u[0] * s.len) - 1;
      const x1 = Math.max(s.a[0], s.a[0] + s.u[0] * s.len) + 1;
      const z0 = Math.min(s.a[1], s.a[1] + s.u[1] * s.len) - 1;
      const z1 = Math.max(s.a[1], s.a[1] + s.u[1] * s.len) + 1;
      for (let i = Math.floor(x0 / 8); i <= Math.floor(x1 / 8); i++)
        for (let j = Math.floor(z0 / 8); j <= Math.floor(z1 / 8); j++) {
          const k = `${i},${j}`;
          const list = this.cells.get(k) ?? [];
          list.push(s);
          this.cells.set(k, list);
        }
    }
  }

  override blocked(p: Vec2, r?: number): boolean {
    const near = this.cells.get(`${Math.floor(p[0] / 8)},${Math.floor(p[1] / 8)}`);
    if (!near) return false;
    const before = this.curSolids;
    this.curSolids = near;
    try {
      return super.blocked(p, r);
    } finally {
      this.curSolids = before;
    }
  }

  /** Taps walk up to 40 m, through the doors near the way only. */
  override path(a: Vec2, b: Vec2): Vec2[] | null {
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (len > 40) return null;
    this.curDoors = this.allDoors.filter((d) => Math.hypot(d.centre[0] - a[0], d.centre[1] - a[1]) + Math.hypot(d.centre[0] - b[0], d.centre[1] - b[1]) < len + 14);
    try {
      return super.path(a, b);
    } finally {
      this.curDoors = this.allDoors;
    }
  }

  /** Every place outside the houses counts as somewhere to walk to (the town is no room). */
  override roomAt(p: Vec2): Room | null {
    return super.roomAt(p) ?? ({ id: "street", name: "", area_id: null, points: [], floor_material: "" } as unknown as Room);
  }
}

interface Hole {
  s0: number;
  s1: number;
  sill: number;
  top: number;
  window: boolean;
}

/** The walls, floors, glass and furniture of the shown houses, NeonPlan style. */
export function buildHouses(plan: CityPlan, colors: ReadonlyMap<string, string>, glow: Texture): Group {
  const g = new Group();
  const { walls } = generateWalls(plan.floor.rooms, { exterior: EXT, interior: INT }, plan.floor.walls ?? []);
  const holes = new Map<Wall, Hole[]>();
  for (const o of plan.floor.openings) {
    const host = openingHost(o, plan.floor.rooms, plan.floor.walls ?? []);
    const at = host && locateOpening(walls, o, host);
    if (!at) continue;
    const list = holes.get(at.wall) ?? [];
    list.push({ s0: at.s - o.width / 2, s1: at.s + o.width / 2, sill: o.sill, top: Math.min(WALL_H - 0.05, o.sill + o.height), window: o.type === "window" && o.sill > 0.05 });
    holes.set(at.wall, list);
  }
  const fill: number[] = [];
  const fillC: number[] = [];
  const lines: number[] = [];
  const lineC: number[] = [];
  const glass: number[] = [];
  const owner = (w: Wall) => [w.roomLeft, w.roomRight].find((r) => r && plan.shown.has(r)) ?? null;
  for (const w of walls) {
    const mine = owner(w);
    if (!mine) continue;
    const c = new Color(colors.get(mine) ?? "#22d3ee");
    const dx = w.b[0] - w.a[0];
    const dz = w.b[1] - w.a[1];
    const len = Math.hypot(dx, dz);
    if (len < 0.01) continue;
    const u: Vec2 = [dx / len, dz / len];
    const n: Vec2 = [-u[1], u[0]];
    const P = (s: number, k: number, y: number) => [w.a[0] + u[0] * s + n[0] * k, y, w.a[1] + u[1] * s + n[1] * k];
    const box = (s0: number, s1: number, y0: number, y1: number) => {
      const k0 = -w.right;
      const k1 = w.left;
      const v = [P(s0, k0, y0), P(s1, k0, y0), P(s1, k1, y0), P(s0, k1, y0), P(s0, k0, y1), P(s1, k0, y1), P(s1, k1, y1), P(s0, k1, y1)];
      const quad = (a: number, b: number, cc: number, d: number, shade: number) => {
        for (const i of [a, b, cc, a, cc, d]) {
          fill.push(...v[i]);
          fillC.push(0.03 * shade, 0.05 * shade, 0.1 * shade);
        }
      };
      quad(4, 5, 6, 7, 1.5);
      quad(0, 1, 5, 4, 1);
      quad(2, 3, 7, 6, 1);
      quad(1, 2, 6, 5, 0.85);
      quad(3, 0, 4, 7, 0.85);
    };
    const hs = (holes.get(w) ?? []).sort((p, q) => p.s0 - q.s0);
    let s = 0;
    for (const h of hs) {
      if (h.s0 > s) box(s, h.s0, 0, WALL_H);
      if (h.sill > 0.02) box(h.s0, h.s1, 0, h.sill);
      box(h.s0, h.s1, h.top, WALL_H);
      if (h.window) for (const q of [P(h.s0, 0, h.sill), P(h.s1, 0, h.sill), P(h.s1, 0, h.top), P(h.s0, 0, h.sill), P(h.s1, 0, h.top), P(h.s0, 0, h.top)]) glass.push(...q);
      s = h.s1;
    }
    if (s < len) box(s, len, 0, WALL_H);
    // the glowing top edge, both faces, in the owner's colour (the hall in cyan)
    for (const k of [w.left, -w.right]) {
      lines.push(...P(0, k, WALL_H + 0.005), ...P(len, k, WALL_H + 0.005));
      lineC.push(c.r, c.g, c.b, c.r, c.g, c.b);
    }
  }
  const fillGeo = new BufferGeometry();
  fillGeo.setAttribute("position", new Float32BufferAttribute(fill, 3));
  fillGeo.setAttribute("color", new Float32BufferAttribute(fillC, 3));
  g.add(new Mesh(fillGeo, new MeshBasicMaterial({ vertexColors: true, side: DoubleSide })));
  const lineGeo = new BufferGeometry();
  lineGeo.setAttribute("position", new Float32BufferAttribute(lines, 3));
  lineGeo.setAttribute("color", new Float32BufferAttribute(lineC, 3));
  g.add(new LineSegments(lineGeo, new LineBasicMaterial({ vertexColors: true })));
  const glassGeo = new BufferGeometry();
  glassGeo.setAttribute("position", new Float32BufferAttribute(glass, 3));
  g.add(new Mesh(glassGeo, new MeshBasicMaterial({ color: "#ffcf7a", transparent: true, opacity: 0.38, side: DoubleSide, depthWrite: false })));

  // floors: warm and lit, a soft glow in the middle
  const floorMat = new MeshBasicMaterial({ color: "#2b2219", side: DoubleSide });
  for (const r of plan.floor.rooms) {
    if (!plan.shown.has(r.id)) continue;
    const shape = new Shape(r.points.map(([x, z]) => ({ x, y: z }) as never));
    const geo = new ShapeGeometry(shape);
    geo.rotateX(Math.PI / 2);
    const m = new Mesh(geo, floorMat);
    m.position.y = 0.03;
    g.add(m);
    const xs = r.points.map((p) => p[0]);
    const zs = r.points.map((p) => p[1]);
    const lit = new Mesh(new PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new MeshBasicMaterial({ map: glow, color: new Color(colors.get(r.id) ?? "#ffb347").lerp(new Color("#ffb347"), 0.6).multiplyScalar(0.5), transparent: true, blending: AdditiveBlending, depthWrite: false }));
    lit.position.set((Math.min(...xs) + Math.max(...xs)) / 2, 0.05, (Math.min(...zs) + Math.max(...zs)) / 2);
    lit.scale.set((Math.max(...xs) - Math.min(...xs)) * 1.2, 1, (Math.max(...zs) - Math.min(...zs)) * 1.2);
    g.add(lit);
  }

  // the hall's furniture as NeonPlan shows it in outline: dark bodies, lamps glowing
  const body = new MeshBasicMaterial({ color: "#16223a" });
  const warm = new MeshBasicMaterial({ color: "#ffd38a" });
  for (const f of plan.floor.furniture) {
    if (isLamp(f.type)) {
      const y = f.type === "lamp_ceiling" || f.type === "lamp_pendant" || f.type === "spot" ? WALL_H - 0.15 : Math.max(0.4, mountBase(plan.floor, f) + f.h);
      const bulb = new Mesh(new PlaneGeometry(0.5, 0.5), warm);
      bulb.rotation.x = -Math.PI / 2;
      bulb.position.set(f.x, Math.min(WALL_H - 0.1, y), f.z);
      g.add(bulb);
      continue;
    }
    if (f.w * f.d < 0.05 || f.h < 0.05) continue;
    const y0 = mountBase(plan.floor, f);
    if (y0 + f.h > WALL_H + 0.3) continue;
    const geo = new BufferGeometry();
    const a = (-f.rotation * Math.PI) / 180;
    const corner = (x: number, z: number): Vec2 => [f.x + x * Math.cos(a) - z * Math.sin(a), f.z + x * Math.sin(a) + z * Math.cos(a)];
    const c = [corner(-f.w / 2, -f.d / 2), corner(f.w / 2, -f.d / 2), corner(f.w / 2, f.d / 2), corner(-f.w / 2, f.d / 2)];
    const y1 = Math.min(WALL_H, y0 + f.h);
    const pos: number[] = [];
    const q = (p: number[][]) => pos.push(...p[0], ...p[1], ...p[2], ...p[0], ...p[2], ...p[3]);
    q(c.map(([x, z]) => [x, y1, z]));
    for (let i = 0; i < 4; i++) {
      const [x0, z0] = c[i];
      const [x1, z1] = c[(i + 1) % 4];
      q([
        [x0, y0, z0],
        [x1, y0, z1],
        [x1, y1, z1],
        [x0, y1, z0],
      ]);
    }
    geo.setAttribute("position", new Float32BufferAttribute(pos, 3));
    g.add(new Mesh(geo, body));
  }
  return g;
}

/** The furniture of a supporter's house (local coordinates, door at +z): sofa, table, rug and a lamp. */
export function houseInterior(color: string, glow: Texture): Group {
  const g = new Group();
  const c = new Color(color);
  const dark = new MeshBasicMaterial({ color: "#1a2742", side: DoubleSide });
  const edge = new LineBasicMaterial({ color: c });
  const block = (w: number, h: number, d: number, x: number, z: number, y = 0) => {
    const geo = new BufferGeometry();
    const pos: number[] = [];
    const v = (px: number, py: number, pz: number) => [x + px, y + py, z + pz];
    const q = (a: number[], b: number[], cc: number[], e: number[]) => pos.push(...a, ...b, ...cc, ...a, ...cc, ...e);
    const [hw, hd] = [w / 2, d / 2];
    q(v(-hw, h, -hd), v(hw, h, -hd), v(hw, h, hd), v(-hw, h, hd));
    q(v(-hw, 0, hd), v(hw, 0, hd), v(hw, h, hd), v(-hw, h, hd));
    q(v(-hw, 0, -hd), v(hw, 0, -hd), v(hw, h, -hd), v(-hw, h, -hd));
    q(v(hw, 0, -hd), v(hw, 0, hd), v(hw, h, hd), v(hw, h, -hd));
    q(v(-hw, 0, -hd), v(-hw, 0, hd), v(-hw, h, hd), v(-hw, h, -hd));
    geo.setAttribute("position", new Float32BufferAttribute(pos, 3));
    g.add(new Mesh(geo, dark));
    const top: number[] = [];
    const t = [v(-hw, h, -hd), v(hw, h, -hd), v(hw, h, hd), v(-hw, h, hd)];
    for (let i = 0; i < 4; i++) top.push(...t[i], ...t[(i + 1) % 4]);
    const lg = new BufferGeometry();
    lg.setAttribute("position", new Float32BufferAttribute(top, 3));
    g.add(new LineSegments(lg, edge));
  };
  // the sofa against the back wall with its back rest, a low table, a rug in the supporter's colour
  block(2.0, 0.42, 0.85, 0, -HOUSE_D / 2 + 0.6);
  block(2.0, 0.8, 0.2, 0, -HOUSE_D / 2 + 0.28);
  block(1.0, 0.42, 0.55, 0, -0.2);
  const rug = new Mesh(new PlaneGeometry(2.4, 1.6).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: c.clone().multiplyScalar(0.35) }));
  rug.position.set(0, 0.04, -0.4);
  g.add(rug);
  // a standard lamp in the corner, glowing
  const lx = HOUSE_W / 2 - 0.55;
  const lz = -HOUSE_D / 2 + 0.55;
  block(0.06, 1.5, 0.06, lx, lz);
  const shade = new Mesh(new PlaneGeometry(0.4, 0.4).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: "#ffe2a8", side: DoubleSide }));
  shade.position.set(lx, 1.52, lz);
  g.add(shade);
  const pool = new Mesh(new PlaneGeometry(3.4, 3.4).rotateX(-Math.PI / 2), new MeshBasicMaterial({ map: glow, color: new Color("#ffb347").multiplyScalar(0.55), transparent: true, blending: AdditiveBlending, depthWrite: false }));
  pool.position.set(lx - 0.6, 0.06, lz + 0.6);
  g.add(pool);
  return g;
}

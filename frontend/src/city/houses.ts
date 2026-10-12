// The supporter city's buildings, built by NeonPlan's own 3D code: walls with their thickness, doors and windows
// with frames, sashes and glass, the furniture models of the app, floors, a gable roof and a front garden.
// A supporter's house is one model (three rooms, furnished) shared by every house; each house adds its colour (a rug,
// the light at the door, the name sign). Houses far from the camera show as a simple block (level of detail).
// The town hall is the demo house with both floors and its roof. One plan of all ground floors drives the walk.

import { AdditiveBlending, BoxGeometry, BufferGeometry, Color, DoubleSide, EdgesGeometry, Float32BufferAttribute, Group, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, PlaneGeometry, Sprite, SpriteMaterial, type Texture } from "three";
import { FURNITURE_SIZE, isLamp, pointInPolygon, type Building, type Floor, type Furniture, type FurnitureType, type Opening, type OutdoorArea, type Room, type Vec2 } from "../model.ts";
import { mountBase } from "../packs.ts";
import { roofUnderAt, sectionCutsBelow } from "../roof-sections.ts";
import { buildFloorGeometry } from "../viewer/build.ts";
import { buildOpeningParts } from "../viewer/openings.ts";
import { buildRoof } from "../viewer/roof.ts";
import { FloorMap } from "../viewer/walk.ts";

/** Wall height of the supporters' houses (m). */
export const WALL_H = 2.5;
export const EXT = 0.24;
export const INT = 0.12;
/** NeonPlan's ground lies 20 cm under a ground floor; the town's ground is at 0, so buildings stand 20 cm up. */
export const LIFT = 0.2;

/** A supporter's house: 7 × 6.5 m, the front door at the front (local +z), in a garden of 10 × 13 m. */
export const HOUSE_W = 7;
export const HOUSE_D = 6.5;

export interface HouseSpot {
  id: string;
  x: number;
  z: number;
  facing: number;
  color: string;
}

export const opening = (id: string, room: string, edge: number, offset: number, width: number, type: "door" | "window", sill: number, height: number): Opening =>
  ({ id, room_id: room, edge, offset, width, type, sill, height, hinge: "left", leaves: 1, swing: "in", style: null, cover: null, contact: null, contact2: null, tilt: null }) as unknown as Opening;

export const room = (id: string, points: Vec2[], material = "wood"): Room => ({ id, name: id, area_id: null, points, floor_material: material }) as Room;

export const item = (id: string, type: FurnitureType, x: number, z: number, rotation = 0, size?: [number, number, number]): Furniture => {
  const [w, d, h] = size ?? FURNITURE_SIZE[type];
  return { id, type, x, z, rotation, w, d, h, variant: null, entity: null, power: null } as Furniture;
};

export const area = (id: string, type: OutdoorArea["type"], points: Vec2[], extra: Partial<OutdoorArea> = {}): OutdoorArea => ({ id, type, points, ...extra }) as OutdoorArea;
export const box = (x0: number, z0: number, x1: number, z1: number): Vec2[] => [
  [x0, z0],
  [x1, z0],
  [x1, z1],
  [x0, z1],
];

/**
 * The supporter's house in its own coordinates (centre at 0, the front door towards +z): living room with kitchen
 * and dining table, bedroom, bathroom; windows all round; a lawn, the path to the door, hedges and a garden lamp.
 */
function houseFloor(): Floor {
  const L = "living";
  const B = "bed";
  const W = "bath";
  const rooms = [room(L, box(-3.5, -3.25, 1, 3.25), "oak"), room(B, box(1, -3.25, 3.5, 0.5), "carpet"), room(W, box(1, 0.5, 3.5, 3.25), "tiles")];
  // edges of box(): 0 back (-z), 1 right (+x), 2 front (+z, right to left), 3 left
  const openings = [
    opening("front", L, 2, 2.25, 1.0, "door", 0, 2.1),
    opening("lw1", L, 2, 0.9, 1.1, "window", 0.9, 1.25),
    opening("lw2", L, 2, 3.65, 1.1, "window", 0.9, 1.25),
    opening("lw3", L, 3, 3.6, 2.0, "window", 0, 2.1),
    opening("lw4", L, 0, 1.5, 1.4, "window", 1.05, 1.0),
    opening("bdoor", B, 3, 2.0, 0.85, "door", 0, 2.0),
    opening("bw1", B, 1, 1.2, 1.2, "window", 0.9, 1.25),
    opening("bw2", B, 0, 1.25, 1.0, "window", 0.9, 1.25),
    opening("wdoor", W, 3, 0.65, 0.8, "door", 0, 2.0),
    opening("ww1", W, 1, 1.4, 0.7, "window", 1.4, 0.7),
  ];
  const furniture = [
    // kitchen along the back wall, dining table, sofa facing the TV, a floor lamp
    item("fridge", "fridge", -3.05, -2.8, 0, [0.6, 0.66, 1.85]),
    item("kitchen", "kitchen", -2.15, -2.82, 0, [1.2, 0.62, 0.92]),
    item("stove", "stove", -1.25, -2.82, 0, [0.6, 0.62, 0.92]),
    item("sink", "sink", -0.65, -2.82, 0, [0.6, 0.62, 0.92]),
    item("kwall", "kitchen_wall", -2.15, -2.98, 0, [1.8, 0.35, 0.7]),
    item("table", "table", -1.6, -1.4, 0, [1.2, 0.8, 0.75]),
    item("c1", "chair", -2.0, -1.95, 0),
    item("c2", "chair", -1.2, -1.95, 0),
    item("c3", "chair", -2.0, -0.85, 180),
    item("c4", "chair", -1.2, -0.85, 180),
    item("sofa", "sofa", -2.9, 0.6, 270, [2.0, 0.9, 0.82]),
    item("ctable", "coffee_table", -1.75, 0.6, 90, [0.9, 0.5, 0.42]),
    item("tv", "tv_board", 0.72, 0.6, 90, [1.4, 0.42, 0.5]),
    item("lampf", "lamp_floor", -3.1, 2.75),
    item("lampc", "lamp_ceiling", -1.4, 0.2),
    item("plant", "plant", 0.55, 2.85),
    item("coat", "coat_rack", -0.35, 2.95, 180),
    // bedroom
    item("bed", "bed", 2.25, -2.1, 0, [1.4, 2.0, 0.9]),
    item("ns", "nightstand", 3.15, -2.85, 0, [0.4, 0.4, 0.5]),
    item("wardrobe", "wardrobe", 3.07, -0.2, 90, [1.0, 0.6, 2.0]),
    item("lampb", "lamp_ceiling", 2.25, -1.4),
    // bathroom
    item("tub", "bathtub", 2.4, 0.95, 0, [1.7, 0.75, 0.58]),
    item("wc", "wc", 3.12, 2.55, 90, [0.38, 0.6, 0.8]),
    item("basin", "washbasin", 2.3, 2.92, 180, [0.6, 0.45, 0.85]),
    item("lampw", "lamp_ceiling", 2.25, 1.9),
    // the garden: a lamp by the path
    item("glamp", "lamp_garden", -2.4, 5.6),
  ];
  const outdoor = [
    area("lawn", "lawn", box(-4.8, -6.2, 4.8, 6.2)),
    area("path", "path", box(-1.85, 3.3, -0.65, 6.2)),
    area("terrace", "terrace", box(-4.7, -1.6, -3.6, 1.6)),
    area("hedge1", "hedge", box(-4.95, -6.2, -4.7, 6.2), { height: 1.1 }),
    area("hedge2", "hedge", box(4.7, -6.2, 4.95, 6.2), { height: 1.1 }),
  ];
  return { id: "house", name: "House", elevation: 0, height: WALL_H, cut_height: 1.15, rooms, openings, walls: [], furniture, placements: [], outdoor } as unknown as Floor;
}

const solidMat = new MeshBasicMaterial({ vertexColors: true, side: DoubleSide });
const glassMat = new MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.3, depthWrite: false, side: DoubleSide });
const lineMat = new LineBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false });
const roofMat = new MeshBasicMaterial({ vertexColors: true, side: DoubleSide, transparent: true });
const roofLineMat = new LineBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false });

/** The roofs' materials: they fade as the camera comes close, to look into the houses from above. */
export function roofFade(o: number): void {
  roofMat.opacity = o;
  roofMat.depthWrite = o > 0.9;
  roofMat.visible = o > 0.02;
  roofLineMat.opacity = o;
  roofLineMat.visible = o > 0.02;
}

/**
 * One floor as NeonPlan's 3D view builds it (walls, floor, furniture, garden, doors and windows), with the rooms lit
 * warm from inside and the lamps glowing. In floor coordinates; the caller lifts it onto its level.
 */
export function floorModel(floor: Floor, glow: Texture, b?: Building): Group {
  const g = new Group();
  const sloped = b ? (b.settings.roof?.sections ?? []).some((s) => sectionCutsBelow(s, floor.elevation + floor.height)) : false;
  const roofUnder =
    sloped && b
      ? (x: number, z: number) => {
          const y = roofUnderAt(b, x, z);
          return y === null ? null : y - floor.elevation;
        }
      : undefined;
  const geo = buildFloorGeometry(floor, EXT, INT, [], [], roofUnder);
  // doors and windows closed (an open one glows warm in NeonPlan, which reads as a warning here); the walk passes doors
  const parts = buildOpeningParts(geo.openings, new Map(), 99);
  // (empty parts – a floor without glass – are left out)
  const filled = (b: BufferGeometry) => (b.getAttribute("position")?.count ?? 0) > 0;
  for (const [b, mat] of [
    [geo.floor, solidMat],
    [geo.walls, solidMat],
    [parts.frames, solidMat],
    [parts.glass, glassMat],
  ] as const)
    if (filled(b)) g.add(new Mesh(b, mat));
  if (filled(geo.lines)) g.add(new LineSegments(geo.lines, lineMat));
  // the rooms lit from inside: a warm glow on each floor (seen through the windows at night)
  const warm = new MeshBasicMaterial({ map: glow, color: new Color("#ffb347").multiplyScalar(0.42), transparent: true, blending: AdditiveBlending, depthWrite: false });
  for (const r of floor.rooms) {
    const xs = r.points.map((p) => p[0]);
    const zs = r.points.map((p) => p[1]);
    const lit = new Mesh(new PlaneGeometry(1, 1).rotateX(-Math.PI / 2), warm);
    lit.position.set((Math.min(...xs) + Math.max(...xs)) / 2, 0.02, (Math.min(...zs) + Math.max(...zs)) / 2);
    lit.scale.set((Math.max(...xs) - Math.min(...xs)) * 1.15, 1, (Math.max(...zs) - Math.min(...zs)) * 1.15);
    g.add(lit);
  }
  const bulb = new SpriteMaterial({ map: glow, color: "#ffd38a", blending: AdditiveBlending, depthWrite: false, transparent: true });
  for (const f of floor.furniture) {
    if (!isLamp(f.type)) continue;
    const ceiling = /ceiling|pendant|downlight|spot|panel/.test(f.type);
    const y = ceiling ? floor.height - 0.12 : mountBase(floor, f) + f.h;
    const s = new Sprite(bulb);
    s.position.set(f.x, Math.min(floor.height - 0.08, y), f.z);
    s.scale.setScalar(ceiling ? 1.1 : 0.8);
    g.add(s);
  }
  return g;
}

/** The roof of a building (NeonPlan's gable roof with its gables), in building coordinates. */
export function roofModel(b: Building): Group {
  const g = new Group();
  for (const part of buildRoof(b)) {
    const m = new Group();
    if (part.solid.count) m.add(new Mesh(part.solid.geometry(), roofMat));
    if (part.lines.p.length) m.add(new LineSegments(part.lines.geometry(), roofLineMat));
    m.position.y = part.floor.elevation + part.base;
    g.add(m);
  }
  return g;
}

let houseCache: { detail: Group; floor: Floor } | null = null;

/** The supporter's house model, built once and shared by every house. */
export function houseModel(glow: Texture): { detail: Group; floor: Floor } {
  if (houseCache) return houseCache;
  const floor = houseFloor();
  const b = { floors: [floor], settings: { wall_exterior: EXT, wall_interior: INT, roof: { type: "gable", pitch: 38, overhang: 0.45, ridge: "long" } } } as unknown as Building;
  const detail = new Group();
  detail.add(floorModel(floor, glow), roofModel(b));
  houseCache = { detail, floor };
  return houseCache;
}

let farGeo: { body: BufferGeometry; edges: BufferGeometry; roof: BufferGeometry; roofEdges: BufferGeometry; windows: BufferGeometry } | null = null;

/** A far house: the block of its walls and roof, its windows lit, so the town reads the same from afar. */
export function farHouse(color: string): Group {
  if (!farGeo) {
    const body = new BoxGeometry(HOUSE_W, WALL_H, HOUSE_D);
    body.translate(0, WALL_H / 2, 0);
    // a gable roof, ridge along the width, as the near model has
    const roof = new BufferGeometry();
    const x = HOUSE_W / 2 + 0.45;
    const z = HOUSE_D / 2 + 0.45;
    const r = WALL_H + Math.tan((38 * Math.PI) / 180) * z;
    const pts = [
      [-x, WALL_H, -z, x, WALL_H, -z, x, r, 0, -x, WALL_H, -z, x, r, 0, -x, r, 0],
      [-x, WALL_H, z, -x, r, 0, x, r, 0, -x, WALL_H, z, x, r, 0, x, WALL_H, z],
      [-x, WALL_H, -z, -x, r, 0, -x, WALL_H, z, x, WALL_H, -z, x, WALL_H, z, x, r, 0],
    ].flat();
    roof.setAttribute("position", new Float32BufferAttribute(pts, 3));
    const windows = new PlaneGeometry(HOUSE_W * 0.7, 0.9);
    windows.translate(0, 1.5, HOUSE_D / 2 + 0.02);
    farGeo = { body, edges: new EdgesGeometry(body), roof, roofEdges: new EdgesGeometry(roof), windows };
  }
  const g = new Group();
  g.add(
    new Mesh(farGeo.body, new MeshBasicMaterial({ color: "#111a2e" })),
    new LineSegments(farGeo.edges, new LineBasicMaterial({ color })),
    new Mesh(farGeo.roof, new MeshBasicMaterial({ color: "#1a2944", side: DoubleSide })),
    new LineSegments(farGeo.roofEdges, new LineBasicMaterial({ color })),
    new Mesh(farGeo.windows, new MeshBasicMaterial({ color: "#ffcf7a", transparent: true, opacity: 0.55 })),
  );
  return g;
}

/** The town hall: the demo house, both floors and its roof, moved so its middle is the origin (null without it). */
export function hallModel(demo: Building | null, glow: Texture): { group: Group; ground: Floor } | null {
  const ground = demo?.floors.find((f) => f.elevation === 0);
  if (!demo || !ground) return null;
  const xs = ground.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = ground.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
  const cz = (Math.min(...zs) + Math.max(...zs)) / 2;
  const g = new Group();
  // the house without its garden (it would reach across the roads), furniture only inside the rooms
  const floors = demo.floors.map((f) => ({ ...f, outdoor: [], furniture: f.furniture.filter((m) => f.rooms.some((r) => pointInPolygon([m.x, m.z], r.points))) }));
  const b = { ...demo, floors } as Building;
  for (const f of floors) {
    const m = floorModel(f, glow, b);
    m.position.y = f.elevation;
    g.add(m);
  }
  g.add(roofModel(b));
  g.position.set(-cx, LIFT, -cz);
  const mv = (p: Vec2): Vec2 => [p[0] - cx, p[1] - cz];
  return {
    group: g,
    ground: { ...ground, rooms: ground.rooms.map((r) => ({ ...r, points: r.points.map(mv) })), walls: (ground.walls ?? []).map((w) => ({ ...w, a: mv(w.a), b: mv(w.b) })) },
  };
}

export interface CityPlan {
  building: Building;
  floor: Floor;
}

export const rot = (x: number, z: number, f: number, at: Vec2): Vec2 => [
  Math.round((at[0] + x * Math.cos(f) + z * Math.sin(f)) * 1000) / 1000,
  Math.round((at[1] - x * Math.sin(f) + z * Math.cos(f)) * 1000) / 1000,
];

/**
 * The walk's plan of the town: the town hall's ground floor, every house's rooms and doors (turned onto its plot),
 * and solid shapes for the lighthouses' rocks and the dark blocks.
 */
export function cityPlan(hall: Floor | null, houses: readonly HouseSpot[], solids: readonly { id: string; points: Vec2[] }[], extra: { rooms: Room[]; openings: Opening[] } = { rooms: [], openings: [] }): CityPlan {
  const rooms: Room[] = [...extra.rooms];
  const openings: Opening[] = [...extra.openings];
  const walls: NonNullable<Floor["walls"]> = [];
  if (hall) {
    for (const r of hall.rooms) rooms.push({ ...r, id: `hall_${r.id}` });
    for (const o of hall.openings) openings.push({ ...o, id: `hall_${o.id}`, room_id: `hall_${o.room_id}`, wall: o.wall ? `hall_${o.wall}` : o.wall });
    for (const w of hall.walls ?? []) walls.push({ ...w, id: `hall_${w.id}` });
  }
  const tpl = houseFloor();
  for (const h of houses) {
    const at: Vec2 = [h.x, h.z];
    for (const r of tpl.rooms) rooms.push({ ...r, id: `house_${h.id}_${r.id}`, points: r.points.map(([x, z]) => rot(x, z, h.facing, at)) });
    for (const o of tpl.openings) openings.push({ ...o, id: `house_${h.id}_${o.id}`, room_id: `house_${h.id}_${o.room_id}` });
  }
  for (const s of solids) rooms.push(room(s.id, s.points));
  const floor = { id: "city", name: "City", elevation: 0, height: WALL_H, rooms, openings, walls, furniture: [], placements: [], outdoor: [] } as unknown as Floor;
  const building = { floors: [floor], settings: { wall_exterior: EXT, wall_interior: INT } } as unknown as Building;
  return { building, floor };
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

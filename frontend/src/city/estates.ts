// The top level of the supporter city, in two kinds to choose from:
// - "estate": a two-storey villa with a pool, a balcony and a lighthouse in its little harbour; the lighthouse can be
//   climbed (its gallery looks over the whole town while the beam sweeps past);
// - "tower": a high-rise with a lobby, the lift up to a penthouse with a roof terrace and pool, the supporter's name
//   in neon on the roof.
// Both stand on a corner plot (13 × 13 m) and are built by NeonPlan's own 3D code like the houses. Their upper levels
// are walkable: a level is a plan of its own, a portal (stairs, lift) switches the walk between levels.

import {
  AdditiveBlending,
  BoxGeometry,
  CanvasTexture,
  CircleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DoubleSide,
  EdgesGeometry,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  RingGeometry,
  SRGBColorSpace,
  Sprite,
  SpriteMaterial,
  Vector3,
  type Texture,
} from "three";
import type { Building, Floor, Opening, Room, Vec2 } from "../model.ts";
import { area, box, EXT, floorModel, INT, item, LIFT, opening, room, roofModel, rot } from "./houses.ts";

export type TopKind = "estate" | "tower";

/** A walkable level above the ground: its plan in town coordinates and where one arrives. */
export interface Level {
  id: string;
  floor: Floor;
  start: { x: number; z: number; yaw: number; pitch: number };
}

/** A way between levels: standing near `at` on level `from` offers to go to level `to` ("city" is the ground). */
export interface Portal {
  from: string;
  at: Vec2;
  to: string;
  kind: "up" | "down" | "lift_up" | "lift_down" | "tower_up";
}

export interface Top {
  group: Group;
  /** Rooms and doors of its ground floor (town coordinates) for the town's walk plan, and solid shapes. */
  rooms: Room[];
  openings: Opening[];
  levels: Level[];
  portals: Portal[];
  /** The lighthouse's beam (turned by the town's frame). */
  beam: Group | null;
  pick: Vector3;
}

const building = (floors: Floor[], roof: { type: string; pitch?: number; overhang: number }): Building =>
  ({ floors, settings: { wall_exterior: EXT, wall_interior: INT, roof: { pitch: 0, ...roof } } }) as unknown as Building;

const floorOf = (id: string, elevation: number, height: number, rooms: Room[], openings: Opening[], furniture: Floor["furniture"], outdoor: Floor["outdoor"] = []): Floor =>
  ({ id, name: id, elevation, height, cut_height: 1.15, rooms, openings, walls: [], furniture, placements: [], outdoor }) as unknown as Floor;

/** A floor turned onto the plot, for the walk (rooms and doors only). */
function placed(f: Floor, id: string, facing: number, at: Vec2, extra: Room[] = []): Floor {
  const rooms = [...f.rooms, ...extra].map((r) => ({ ...r, id: `${id}_${r.id}`, points: r.points.map(([x, z]) => rot(x, z, facing, at)) }));
  const openings = f.openings.map((o) => ({ ...o, id: `${id}_${o.id}`, room_id: `${id}_${o.room_id}` }));
  return { ...f, id, rooms, openings, furniture: [], outdoor: [] };
}

const octagon = (cx: number, cz: number, r: number): Vec2[] => Array.from({ length: 8 }, (_, i): Vec2 => [cx + Math.cos((i / 8) * Math.PI * 2 + Math.PI / 8) * r, cz + Math.sin((i / 8) * Math.PI * 2 + Math.PI / 8) * r]);

// ---------------------------------------------------------------------------------------------- the estate

/** Local plot coordinates: −6.5 … 6.5 both ways, the town's corner (and the harbour) towards +x +z. */
const TOWER_AT: Vec2 = [4, 4];
const GALLERY_Y = 8.6;

function estateFloors(): { gf: Floor; uf: Floor } {
  const gf = floorOf(
    "gf",
    0,
    2.6,
    [room("living", box(-6, -6, -1, -0.5), "oak"), room("kitchen", box(-1, -6, 1.5, -0.5), "tiles")],
    [
      opening("glass", "living", 2, 2.5, 3.0, "window", 0, 2.2),
      opening("lw", "living", 3, 2.75, 1.4, "window", 0.9, 1.25),
      opening("lb", "living", 0, 3.6, 1.2, "window", 0.9, 1.25),
      opening("pass", "living", 1, 3.5, 1.6, "door", 0, 2.1),
      opening("front", "kitchen", 1, 2.75, 1.0, "door", 0, 2.1),
      opening("kg", "kitchen", 2, 1.25, 1.6, "window", 0, 2.2),
      opening("kb", "kitchen", 0, 1.25, 1.2, "window", 1.05, 1.0),
    ],
    [
      item("stairs", "stairs", -5.45, -3.6, 0, [1.0, 3.2, 2.75]),
      item("tv", "tv_board", -3.0, -5.7, 0, [1.6, 0.42, 0.5]),
      item("sofa", "sofa", -3.0, -3.1, 180, [2.2, 0.9, 0.82]),
      item("ctable", "coffee_table", -3.0, -4.3, 0, [1.0, 0.5, 0.42]),
      item("lampf", "lamp_floor", -1.5, -1.0),
      item("lampp", "lamp_pendant", -3.0, -3.6),
      item("plant", "plant", -5.6, -1.0),
      item("rug", "rug", -3.0, -3.8, 0, [2.4, 1.7, 0.01]),
      item("krow", "kitchen", 0.25, -5.69, 0, [2.2, 0.62, 0.92]),
      item("island", "island", 0.25, -3.4, 90, [1.6, 0.9, 0.92]),
      item("kpend", "lamp_pendant", 0.25, -3.4),
      item("round", "table_round", 0.25, -1.45, 0, [1.0, 1.0, 0.75]),
      item("ch1", "chair", -0.35, -1.45, 90),
      item("ch2", "chair", 0.85, -1.45, 270),
    ],
    [
      area("lawn", "lawn", box(-6.5, -6.5, 6.5, 6.5)),
      area("terrace", "terrace", box(-6, -0.5, 1.5, 1.5)),
      area("pool", "pool", box(-5.5, 1.9, -1.2, 4.7), { depth: 1.4, rim: 0.06 }),
      area("path", "path", box(1.5, -3.3, 6.5, -2.2)),
      area("pier", "path", box(1.2, 2.2, 2.4, 3.2)),
    ],
  );
  const uf = floorOf(
    "uf",
    2.75,
    2.6,
    [room("bedroom", box(-6, -6, -1, -0.5), "carpet"), room("bath", box(-1, -6, 1.5, -3.2), "tiles"), room("hall", box(-1, -3.2, 1.5, -0.5), "oak")],
    [
      opening("bg", "bedroom", 2, 2.5, 3.0, "window", 0, 2.2),
      opening("bw", "bedroom", 3, 2.75, 1.4, "window", 0.9, 1.25),
      opening("bd", "bedroom", 1, 4.4, 0.9, "door", 0, 2.0),
      opening("wd", "bath", 2, 1.25, 0.8, "door", 0, 2.0),
      opening("ww", "bath", 1, 1.4, 0.7, "window", 1.4, 0.7),
      opening("hg", "hall", 2, 1.25, 1.6, "window", 0, 2.2),
    ],
    [
      item("bed", "bed", -3.5, -4.85, 0, [1.8, 2.1, 0.9]),
      item("ns1", "nightstand", -4.75, -5.6, 0, [0.45, 0.4, 0.5]),
      item("ns2", "nightstand", -2.25, -5.6, 0, [0.45, 0.4, 0.5]),
      item("wardrobe", "wardrobe", -1.45, -4.0, 90, [1.8, 0.6, 2.1]),
      item("lampb", "lamp_ceiling", -3.5, -3.2),
      item("chair", "armchair", -2.0, -1.4, 200),
      item("tub", "bathtub", 0.25, -5.55, 0, [1.7, 0.75, 0.58]),
      item("wc", "wc", 1.12, -3.9, 90, [0.38, 0.6, 0.8]),
      item("basin", "washbasin", -0.55, -3.9, 270, [0.6, 0.45, 0.85]),
      item("lampw", "lamp_ceiling", 0.25, -4.6),
      item("plant2", "plant", 1.0, -0.9),
    ],
    [area("balcony", "balcony", box(-6, -0.5, 1.5, 1.4), { height: 1.0 })],
  );
  return { gf, uf };
}

function lighthouse(c: string, glow: Texture): { g: Group; beam: Group } {
  const g = new Group();
  const water = new Mesh(new CircleGeometry(2.9, 32).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: "#0b3a5a" }));
  water.position.y = 0.03;
  const shore = new Mesh(new RingGeometry(2.85, 3.05, 40).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: "#22d3ee", transparent: true, opacity: 0.45 }));
  shore.position.y = 0.04;
  const rock = new Mesh(new CylinderGeometry(1.55, 1.9, 0.7, 16), new MeshBasicMaterial({ color: "#1a2438" }));
  rock.position.y = 0.35;
  const tower = new Mesh(new CylinderGeometry(0.95, 1.25, 8, 16), new MeshBasicMaterial({ color: "#9fb0cc" }));
  tower.position.y = 4.6;
  g.add(water, shore, rock, tower);
  for (const y of [2.4, 5.2]) {
    const band = new Mesh(new CylinderGeometry(1.12 - (y - 0.6) * 0.035, 1.16 - (y - 0.6) * 0.035, 1.0, 16), new MeshBasicMaterial({ color: "#c2384f" }));
    band.position.y = y;
    g.add(band);
  }
  // the door at the foot, towards the villa
  const door = new Mesh(new PlaneGeometry(0.8, 1.8), new MeshBasicMaterial({ color: c }));
  door.position.set(-0.86, 1.6, -0.86);
  door.rotation.y = Math.PI / 4 + Math.PI;
  g.add(door);
  // the gallery round the lantern: a floor ring and a railing
  const deck = new Mesh(new RingGeometry(0.6, 2.05, 32).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: "#1d2a44", side: DoubleSide }));
  deck.position.y = GALLERY_Y;
  const rail = new Mesh(new CylinderGeometry(2.05, 2.05, 1.0, 32, 1, true), new MeshBasicMaterial({ color: c, transparent: true, opacity: 0.25, side: DoubleSide, depthWrite: false }));
  rail.position.y = GALLERY_Y + 0.5;
  const railTop = new Mesh(new RingGeometry(2.0, 2.08, 40).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: c }));
  railTop.position.y = GALLERY_Y + 1.0;
  const lamp = new Mesh(new CylinderGeometry(0.6, 0.6, 1.2, 14), new MeshBasicMaterial({ color: c }));
  lamp.position.y = GALLERY_Y + 0.75;
  const cap = new Mesh(new ConeGeometry(0.85, 1.0, 14), new MeshBasicMaterial({ color: "#1d2a44" }));
  cap.position.y = GALLERY_Y + 1.85;
  const halo = new Sprite(new SpriteMaterial({ map: glow, color: c, blending: AdditiveBlending, depthWrite: false, transparent: true }));
  halo.position.y = GALLERY_Y + 0.75;
  halo.scale.setScalar(4.5);
  g.add(deck, rail, railTop, lamp, cap, halo);
  const beam = new Group();
  beam.position.y = GALLERY_Y + 0.75;
  const beamMat = new MeshBasicMaterial({ color: c, transparent: true, opacity: 0.13, blending: AdditiveBlending, depthWrite: false, side: DoubleSide });
  for (const sgn of [-1, 1]) {
    const cone = new Mesh(new ConeGeometry(2.4, 30, 18, 1, true), beamMat);
    cone.rotation.z = (sgn * Math.PI) / 2;
    cone.position.x = sgn * -15.6;
    beam.add(cone);
  }
  g.add(beam);
  return { g, beam };
}

function estate(id: string, facing: number, at: Vec2, c: string, label: string, glow: Texture, sign: (t: string, c: string, h: number) => Sprite): Top {
  const { gf, uf } = estateFloors();
  const g = new Group();
  const villa = new Group();
  for (const f of [gf, uf]) {
    const m = floorModel(f, glow, undefined);
    m.position.y = f.elevation;
    villa.add(m);
  }
  villa.add(roofModel(building([gf, uf], { type: "flat", overhang: 0.35 })));
  villa.position.y = LIFT;
  g.add(villa);
  // the pool glows in the supporter's colour
  const poolGlow = new Mesh(new PlaneGeometry(4.3, 2.8).rotateX(-Math.PI / 2), new MeshBasicMaterial({ map: glow, color: new Color(c).multiplyScalar(0.7), transparent: true, blending: AdditiveBlending, depthWrite: false }));
  poolGlow.position.set(-3.35, LIFT + 0.02, 3.3);
  g.add(poolGlow);
  const lh = lighthouse(c, glow);
  lh.g.position.set(TOWER_AT[0], 0, TOWER_AT[1]);
  g.add(lh.g);
  const plate = sign(label, c, 0.9);
  plate.position.set(-2.2, LIFT + 6.6, -3.2);
  const top = sign(label, c, 1.1);
  top.position.set(TOWER_AT[0], GALLERY_Y + 3.3, TOWER_AT[1]);
  g.add(plate, top);
  g.position.set(at[0], 0, at[1]);
  g.rotation.y = facing;

  const W = (x: number, z: number) => rot(x, z, facing, at);
  const ground = placed(gf, `${id}_gf`, facing, at, [room("rock", octagon(TOWER_AT[0], TOWER_AT[1], 1.7))]);
  const upFloor = placed({ ...uf, elevation: uf.elevation }, `${id}_uf`, facing, at);
  const galleryFloor = floorOf(`${id}_top`, GALLERY_Y - LIFT, 2.5, [room("gallery", octagon(TOWER_AT[0], TOWER_AT[1], 2.0))], [], []);
  const gallery = placed(galleryFloor, `${id}_top`, facing, at);
  // the town's centre seen from the gallery: look inwards (the plot's −x −z diagonal)
  const inward = Math.atan2(...(() => {
    const a = W(0, 0);
    const b = W(-1, -1);
    return [b[1] - a[1], b[0] - a[0]] as [number, number];
  })());
  const stairsFoot = W(-5.0, -1.4);
  const towerFoot = W(TOWER_AT[0] - 2.25, TOWER_AT[1] - 2.25);
  const onGallery = W(TOWER_AT[0] - 1.3, TOWER_AT[1] - 1.3);
  return {
    group: g,
    rooms: ground.rooms,
    openings: ground.openings,
    levels: [
      { id: upFloor.id, floor: upFloor, start: { x: stairsFoot[0], z: stairsFoot[1], yaw: inward + Math.PI, pitch: -0.05 } },
      { id: gallery.id, floor: gallery, start: { x: onGallery[0], z: onGallery[1], yaw: inward, pitch: -0.12 } },
    ],
    portals: [
      { from: "city", at: stairsFoot, to: upFloor.id, kind: "up" },
      { from: upFloor.id, at: stairsFoot, to: "city", kind: "down" },
      { from: "city", at: towerFoot, to: gallery.id, kind: "tower_up" },
      { from: gallery.id, at: onGallery, to: "city", kind: "down" },
    ],
    beam: lh.beam,
    pick: new Vector3(at[0], 3, at[1]),
  };
}

// ---------------------------------------------------------------------------------------------- the high-rise

const LOBBY_H = 3.5;
const STOREYS = 6;
const STOREY_H = 3;
const PENT_Y = LOBBY_H + STOREYS * STOREY_H;

/** A facade of lit windows (some dark), drawn once into a canvas. */
let facadeTex: CanvasTexture | null = null;
function facade(): CanvasTexture {
  if (facadeTex) return facadeTex;
  const cols = 6;
  const rows = STOREYS;
  const c = document.createElement("canvas");
  c.width = 384;
  c.height = 384;
  const g = c.getContext("2d")!;
  g.fillStyle = "#0d1628";
  g.fillRect(0, 0, 384, 384);
  let seed = 11;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  for (let r = 0; r < rows; r++)
    for (let k = 0; k < cols; k++) {
      const lit = rnd() < 0.62;
      g.fillStyle = lit ? (rnd() < 0.25 ? "#bfe6ff" : "#ffcf7a") : "#18263f";
      g.fillRect(k * 64 + 8, r * 64 + 14, 48, 38);
    }
  g.fillStyle = "#22d3ee33";
  for (let r = 0; r <= rows; r++) g.fillRect(0, r * 64 - 1, 384, 2);
  facadeTex = new CanvasTexture(c);
  facadeTex.colorSpace = SRGBColorSpace;
  return facadeTex;
}

function towerFloors(): { lobby: Floor; pent: Floor } {
  const lobby = floorOf(
    "lobby",
    0,
    LOBBY_H,
    [room("lobby", box(-4.5, -4.5, 4.5, 4.5), "stone")],
    [
      opening("door", "lobby", 2, 4.5, 1.8, "door", 0, 2.4),
      opening("g1", "lobby", 2, 1.7, 2.4, "window", 0, 2.6),
      opening("g2", "lobby", 2, 7.3, 2.4, "window", 0, 2.6),
      opening("s1", "lobby", 1, 4.5, 3.0, "window", 0.6, 2.2),
      opening("s2", "lobby", 3, 4.5, 3.0, "window", 0.6, 2.2),
    ],
    [
      item("sofa", "sofa_l", -2.6, 2.4, 90, [2.4, 1.6, 0.82]),
      item("table", "coffee_table", -1.4, 2.4, 90, [1.0, 0.6, 0.42]),
      item("desk", "sideboard", 2.6, 0.5, 270, [2.2, 0.55, 1.05]),
      item("p1", "plant", 3.9, 3.9),
      item("p2", "plant", -3.9, 3.9),
      item("l1", "lamp_ceiling", 0, 1.5),
      item("l2", "lamp_ceiling", 0, -2),
      item("bench", "bench", 3.9, -2.4, 270, [1.6, 0.45, 0.45]),
    ],
    [area("plaza", "terrace", box(-6.2, -6.2, 6.2, 6.2)), area("path", "path", box(-1.2, 4.5, 1.2, 6.5)), area("lawn", "lawn", box(-6.5, -6.5, 6.5, 6.5))],
  );
  const pent = floorOf(
    "pent",
    PENT_Y,
    2.8,
    [room("pent", box(-4.5, -4.5, 0.5, 4.5), "oak")],
    [
      opening("tg1", "pent", 1, 2.8, 2.6, "window", 0, 2.4),
      opening("tg2", "pent", 1, 6.6, 2.6, "window", 0, 2.4),
      opening("w1", "pent", 3, 2.6, 2.2, "window", 0.5, 1.9),
      opening("w2", "pent", 3, 6.4, 2.2, "window", 0.5, 1.9),
      opening("w3", "pent", 2, 2.5, 3.0, "window", 0.5, 1.9),
    ],
    [
      item("sofa", "sofa_l", -2.0, 1.6, 90, [2.6, 1.8, 0.82]),
      item("ctable", "coffee_table", -0.6, 1.4, 90, [1.0, 0.6, 0.42]),
      item("tv", "tv_board", -4.2, 1.6, 90, [1.8, 0.42, 0.5]),
      item("island", "island", -2.0, -1.4, 0, [2.0, 0.9, 0.92]),
      item("krow", "kitchen", -2.0, -4.19, 0, [3.0, 0.62, 0.92]),
      item("bed", "bed", -3.1, 3.5, 90, [1.8, 2.1, 0.9]),
      item("lamp1", "lamp_pendant", -2.0, -1.4),
      item("lamp2", "lamp_floor", 0.1, 4.1),
      item("plant", "plant", 0.1, -4.1),
    ],
    [
      area("deck", "balcony", box(0.5, -4.5, 4.5, 4.5), { height: 1.1 }),
      area("pool", "pool", box(1.4, -3.9, 3.9, 0.4), { depth: 1.3, rim: 0.06 }),
    ],
  );
  return { lobby, pent };
}

function tower(id: string, facing: number, at: Vec2, c: string, label: string, glow: Texture, sign: (t: string, c: string, h: number) => Sprite): Top {
  const { lobby, pent } = towerFloors();
  const g = new Group();
  const lobbyM = floorModel(lobby, glow);
  lobbyM.position.y = LIFT;
  g.add(lobbyM);
  // the storeys between: a glass block with lit windows, edges and floor lines in the supporter's colour
  const midH = STOREYS * STOREY_H;
  const mid = new BoxGeometry(9.2, midH, 9.2);
  mid.translate(0, LIFT + LOBBY_H + midH / 2, 0);
  const tex = facade();
  const side = new MeshBasicMaterial({ map: tex });
  const capMat = new MeshBasicMaterial({ color: "#0d1628" });
  g.add(new Mesh(mid, [side, side, capMat, capMat, side, side]), new LineSegments(new EdgesGeometry(mid), new LineBasicMaterial({ color: c })));
  // the lift doors in the lobby (and up top), glowing in the supporter's colour
  const lift = (y: number, x: number, z: number, ry: number) => {
    const d = new Mesh(new PlaneGeometry(1.2, 2.2), new MeshBasicMaterial({ color: new Color(c).multiplyScalar(0.8) }));
    d.position.set(x, LIFT + y + 1.1, z);
    d.rotation.y = ry;
    const frame = new LineSegments(new EdgesGeometry(new PlaneGeometry(1.4, 2.4)), new LineBasicMaterial({ color: "#ffffff" }));
    frame.position.copy(d.position);
    frame.rotation.y = ry;
    g.add(d, frame);
  };
  lift(0, 0, -4.37, 0);
  lift(PENT_Y, -4.37, -3.0, Math.PI / 2);
  const pentM = floorModel(pent, glow);
  pentM.position.y = LIFT + PENT_Y;
  g.add(pentM, roofModel(building([pent], { type: "flat", overhang: 0.3 })));
  (g.children[g.children.length - 1] as Group).position.y = LIFT;
  const poolGlow = new Mesh(new PlaneGeometry(3.2, 5.0).rotateX(-Math.PI / 2), new MeshBasicMaterial({ map: glow, color: new Color(c).multiplyScalar(0.7), transparent: true, blending: AdditiveBlending, depthWrite: false }));
  poolGlow.position.set(2.65, LIFT + PENT_Y + 0.03, -1.75);
  g.add(poolGlow);
  // the name in neon on the roof, a red light on top
  const name = sign(label, c, 2.2);
  name.position.set(-2.0, LIFT + PENT_Y + 5.2, 0);
  const red = new Sprite(new SpriteMaterial({ map: glow, color: "#ff3b4f", blending: AdditiveBlending, depthWrite: false, transparent: true }));
  red.position.set(-2.0, LIFT + PENT_Y + 3.4, -3.8);
  red.scale.setScalar(1.6);
  g.add(name, red);
  g.position.set(at[0], 0, at[1]);
  g.rotation.y = facing;

  const W = (x: number, z: number) => rot(x, z, facing, at);
  const ground = placed(lobby, `${id}_gf`, facing, at);
  const up = placed(pent, `${id}_pent`, facing, at, [room("deck", box(0.5, -4.5, 4.5, 4.5))]);
  const liftFoot = W(0, -3.3);
  const liftTop = W(-3.3, -3.0);
  const yawOut = (() => {
    const a = W(0, 0);
    const b = W(1, 0);
    return Math.atan2(b[1] - a[1], b[0] - a[0]);
  })();
  return {
    group: g,
    rooms: ground.rooms,
    openings: ground.openings,
    levels: [{ id: up.id, floor: up, start: { x: liftTop[0], z: liftTop[1], yaw: yawOut, pitch: -0.08 } }],
    portals: [
      { from: "city", at: liftFoot, to: up.id, kind: "lift_up" },
      { from: up.id, at: liftTop, to: "city", kind: "lift_down" },
    ],
    beam: null,
    pick: new Vector3(at[0], 12, at[1]),
  };
}

export function buildTop(kind: TopKind, nr: number, facing: number, at: Vec2, color: string, label: string, glow: Texture, sign: (t: string, c: string, h: number) => Sprite): Top {
  return kind === "tower" ? tower(`tower_${nr}`, facing, at, color, label, glow, sign) : estate(`estate_${nr}`, facing, at, color, label, glow, sign);
}

// The supporter city: where everybody's light, house and lighthouse stands. Pure functions, so the places can be
// tested: a supporter's number decides the lantern's place for good (newcomers are added further out, nobody
// moves), houses and lighthouses get plots of their own in the order they were given.

/** A supporter as the shop lists them (no amounts, no customer data). */
export interface Supporter {
  /** Running number, given once by the order of the pass purchase. */
  nr: number;
  /** Display name only with the supporter's consent, else null. */
  name: string | null;
  level: Level;
  /** Own colour (glow and up), "#rrggbb". */
  color: string | null;
  /** "2026-10": month and year since when. */
  since: string;
  /** Plot number of a house or lighthouse, given by the shop when the level was reached (else by number). */
  plot?: number | null;
}

export type Level = "neon" | "glow" | "spotlight" | "lighthouse";

export interface CityData {
  version: number;
  generated?: string;
  count?: number;
  supporters: Supporter[];
}

/** Ring roads around the town hall: the first at this half size (m), each next one further out. */
export const RING0 = 12;
export const RING_STEP = 12;
/** Lanterns stand this far apart along a road, this far outside its middle line. */
const LANTERN_STEP = 2.2;
const LANTERN_OUT = 1.4;
/** No lantern near a corner (a lighthouse goes there) or an avenue crossing the ring in the middle of a side. */
const CORNER_GAP = 3;
const AVENUE_GAP = 3.5;

export const ringHalf = (k: number) => RING0 + (k - 1) * RING_STEP;

/** The places along one side of ring k, from one corner to the other (distance from the side's middle). */
function sideOffsets(k: number): number[] {
  const r = ringHalf(k);
  const out: number[] = [];
  for (let t = -r + CORNER_GAP; t <= r - CORNER_GAP + 1e-9; t += LANTERN_STEP) if (Math.abs(t) >= AVENUE_GAP) out.push(Math.round(t * 100) / 100);
  return out;
}

/** How many lanterns ring k holds. */
export function ringCapacity(k: number): number {
  return sideOffsets(k).length * 4;
}

export interface Place {
  x: number;
  z: number;
  /** Ring (lanterns, lighthouses) or band between rings (houses). */
  ring: number;
  /** Turned (radians around y) to face the road or the avenue. */
  facing: number;
}

/** The lantern of supporter number nr (1, 2, …): ring by ring, side by side (north, east, south, west). */
export function lanternPlace(nr: number): Place {
  let i = Math.max(0, Math.floor(nr) - 1);
  for (let k = 1; ; k++) {
    const cap = ringCapacity(k);
    if (i >= cap) {
      i -= cap;
      continue;
    }
    const offs = sideOffsets(k);
    const side = Math.floor(i / offs.length);
    const t = offs[i % offs.length];
    const d = ringHalf(k) + LANTERN_OUT;
    // north (z = -d) runs west to east, east (x = d) north to south, south east to west, west south to north
    const [x, z] = side === 0 ? [t, -d] : side === 1 ? [d, t] : side === 2 ? [-t, d] : [-d, -t];
    return { x, z, ring: k, facing: side * (Math.PI / 2) };
  }
}

/** The ring the last of n lanterns stands on. */
export function ringsFor(n: number): number {
  return n > 0 ? lanternPlace(n).ring : 0;
}

/** The house plots along one side of the band after ring b + 1 (distance from the side's middle): from the avenue outwards. */
function bandSlots(b: number): number[] {
  const m = ringHalf(b + 1) + RING_STEP / 2;
  const out: number[] = [];
  for (let t = 5.5; t <= m - 7 + 1e-9; t += 6) out.push(t, -t);
  return out;
}

/**
 * The house plot j (0, 1, …): in rows between two rings, beside the avenues first and then towards the corners, the
 * bands near the town hall first; the four sides take turns, so a band fills evenly. The door looks outwards, at
 * the next ring road.
 */
export function housePlace(j: number): Place {
  let i = Math.max(0, Math.floor(j));
  for (let b = 0; ; b++) {
    const slots = bandSlots(b);
    if (i >= slots.length * 4) {
      i -= slots.length * 4;
      continue;
    }
    const side = i % 4;
    const t = slots[Math.floor(i / 4)];
    const m = ringHalf(b + 1) + RING_STEP / 2;
    const [x, z] = side === 0 ? [t, -m] : side === 1 ? [m, t] : side === 2 ? [-t, m] : [-m, -t];
    // local +z (the door) points away from the town hall
    const facing = [Math.PI, Math.PI / 2, 0, -Math.PI / 2][side];
    return { x, z, ring: b + 1, facing };
  }
}

/** The lighthouse plot j: at the outer corners of the rings, four to a ring, beyond the last lantern. */
export function lighthousePlace(j: number): Place {
  const k = Math.floor(j / 4) + 1;
  const c = j % 4;
  const d = ringHalf(k) + 6;
  const [sx, sz] = [
    [1, -1],
    [1, 1],
    [-1, 1],
    [-1, -1],
  ][c];
  return { x: sx * d, z: sz * d, ring: k, facing: Math.atan2(sx, sz) };
}

/** Plots of houses (spotlight) and lighthouses: the shop's plot numbers, else in the order of the supporters' numbers. */
export function plots(list: readonly Supporter[], level: "spotlight" | "lighthouse"): Map<number, number> {
  const mine = list.filter((s) => s.level === level).sort((a, b) => a.nr - b.nr);
  const out = new Map<number, number>();
  const used = new Set<number>();
  for (const s of mine) if (s.plot != null && s.plot >= 0 && !used.has(s.plot)) {
    out.set(s.nr, s.plot);
    used.add(s.plot);
  }
  let next = 0;
  for (const s of mine) {
    if (out.has(s.nr)) continue;
    while (used.has(next)) next++;
    out.set(s.nr, next);
    used.add(next);
  }
  return out;
}

/** A supporter list from the shop, checked: numbers, levels, colours and names that are safe to show. */
export function cleanData(raw: unknown): Supporter[] {
  const list = (raw as CityData | null)?.supporters;
  if (!Array.isArray(list)) return [];
  const levels = new Set<Level>(["neon", "glow", "spotlight", "lighthouse"]);
  const seen = new Set<number>();
  const out: Supporter[] = [];
  for (const s of list as Partial<Supporter>[]) {
    const nr = Number(s?.nr);
    if (!Number.isInteger(nr) || nr < 1 || nr > 100000 || seen.has(nr)) continue;
    seen.add(nr);
    const name = typeof s.name === "string" ? s.name.replace(/[\u0000-\u001f<>]/g, "").trim().slice(0, 20) : "";
    out.push({
      nr,
      name: name || null,
      level: levels.has(s.level as Level) ? (s.level as Level) : "neon",
      color: typeof s.color === "string" && /^#[0-9a-f]{6}$/i.test(s.color) ? s.color : null,
      since: typeof s.since === "string" && /^\d{4}-\d{2}$/.test(s.since) ? s.since : "",
      plot: Number.isInteger(s.plot) ? (s.plot as number) : null,
    });
  }
  return out.sort((a, b) => a.nr - b.nr);
}

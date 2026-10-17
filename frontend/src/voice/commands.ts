// Spoken commands: which room, floor or the whole house a sentence names ("Zeig das Wohnzimmer", "geh ins
// Obergeschoss", "show the kitchen"). Matched on the plan's own names, so no sentences have to be taught to anyone.

import type { Building } from "../model.ts";

export type Place = { kind: "room"; floorId: string; roomId: string; name: string } | { kind: "floor"; floorId: string; name: string } | { kind: "house"; name: string };

/** Lower case, without accents and punctuation: "Kinderzimmer (Lea)!" → "kinderzimmer lea". */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9一-鿿]+/g, " ")
    .trim();
}

const HOUSE = /\b(ganze[sn]? haus|haus|uebersicht|ubersicht|alles|house|whole house|home|overview|everything)\b/;

/** Whether `name` stands in `text` as whole words. */
function says(text: string, name: string): boolean {
  if (!name) return false;
  return ` ${text} `.includes(` ${name} `);
}

/**
 * The place a sentence names: a room (the longest name that stands in it wins, "Gäste-WC" before "WC"), else a
 * floor, else the whole house; null when it names none.
 */
export function findPlace(sentence: string, building: Building): Place | null {
  const text = normalize(sentence);
  if (!text) return null;
  let best: Place | null = null;
  let len = 0;
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      const n = normalize(room.name);
      if (n.length > len && says(text, n)) {
        best = { kind: "room", floorId: floor.id, roomId: room.id, name: room.name };
        len = n.length;
      }
    }
  }
  if (best) return best;
  for (const floor of building.floors) {
    const n = normalize(floor.name);
    if (n.length > len && says(text, n)) {
      best = { kind: "floor", floorId: floor.id, name: floor.name };
      len = n.length;
    }
  }
  if (best) return best;
  return HOUSE.test(text) ? { kind: "house", name: "" } : null;
}

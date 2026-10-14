// Robot vacuum maps from Valetudo (ValetudoMap JSON, "Download map" or /api/v2/robot/state/map): every segment is a
// room, given as pixels (run-length compressed in newer versions) of `pixelSize` centimetres. The rooms are the
// floor areas the robot reached, so neighbours lie a wall apart.

import type { Vec2 } from "../model.ts";
import type { RawPlan, RawRoom } from "./builder.ts";
import { simplify, traceCells } from "./geom.ts";

interface Layer {
  type?: string;
  pixels?: number[];
  compressedPixels?: number[];
  metaData?: { segmentId?: string | number; name?: string };
}

export function isValetudo(data: unknown): boolean {
  const d = data as { __class?: string; layers?: unknown };
  return d?.__class === "ValetudoMap" || (Array.isArray(d?.layers) && (d.layers as Layer[]).some((l) => l?.type === "segment"));
}

export function readValetudo(data: unknown, lang = "de"): RawPlan {
  const d = data as { pixelSize?: number; layers?: Layer[] };
  const px = (d.pixelSize ?? 5) / 100;
  const rooms: RawRoom[] = [];
  const segments = (d.layers ?? []).filter((l) => l.type === "segment");
  if (!segments.length) throw new Error("nothing_found");
  segments.forEach((l, i) => {
    const cells = new Set<string>();
    if (l.compressedPixels?.length) {
      const c = l.compressedPixels;
      for (let k = 0; k + 2 < c.length; k += 3) for (let n = 0; n < c[k + 2]; n++) cells.add(`${c[k] + n},${c[k + 1]}`);
    } else if (l.pixels?.length) {
      for (let k = 0; k + 1 < l.pixels.length; k += 2) cells.add(`${l.pixels[k]},${l.pixels[k + 1]}`);
    }
    if (cells.size < 20) return;
    const outline = traceCells(cells);
    // the staircase of pixel edges smoothed into straight walls (a pixel and a half of tolerance)
    const pts = simplify(outline, 1.5).map(([x, y]) => [x * px, y * px] as Vec2);
    if (pts.length < 3) return;
    const name = l.metaData?.name?.trim() || (lang.startsWith("de") ? `Raum ${i + 1}` : `Room ${i + 1}`);
    rooms.push({ name, points: pts });
  });
  if (!rooms.length) throw new Error("nothing_found");
  return { source: "Valetudo", floors: [{ name: lang.startsWith("de") ? "Erdgeschoss" : "Ground floor", elevation: 0, rooms, walls: [], openings: [], furniture: [] }], roomsAtInnerFaces: true };
}

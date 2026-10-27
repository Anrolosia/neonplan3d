// Static export (proof of concept): a floor rendered once per light and opening state, so a light card can stack
// the pictures instead of running WebGL. Pixel helpers here, the rendering in view3d.ts, the card in static-card.ts.

/** One picture over the base, shown while its entity is in one of `states`. Box in 0..1 of the base picture. */
export interface StaticLayer {
  entity: string;
  states: string[];
  /** Lights add their glow ("lighten"), opened doors cover what was there ("normal"). */
  blend: "lighten" | "normal";
  x: number;
  y: number;
  w: number;
  h: number;
  src: string;
}

/** A pin as the 3D view shows it: where it sits (0..1 of the picture), its icons (SVG markup) and its name. */
export interface StaticPin {
  id: string;
  x: number;
  y: number;
  name: string;
  icon: string;
  /** The icon while on, when it differs (a lit lamp). */
  iconOn?: string;
  /** A tap asks first (the device's "confirm" setting). */
  confirm?: boolean;
  /** No pin in the 3D view (a lamp is tapped in the scene): an invisible tap target. */
  hidden?: boolean;
}

export interface StaticManifest {
  version: 1;
  floor: string;
  width: number;
  height: number;
  base: string;
  layers: StaticLayer[];
  pins: StaticPin[];
}

export interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** A pixel counts as changed when its colour moved more than this (sum over R, G, B, A). */
const THRESHOLD = 24;

const changed = (a: Uint8Array, b: Uint8Array, i: number) =>
  Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2]) + Math.abs(a[i + 3] - b[i + 3]) > THRESHOLD;

/** The smallest box around every pixel that differs between two pictures of the same size, null when none does. */
export function diffBox(base: Uint8Array, variant: Uint8Array, width: number, height: number): Box | null {
  let x0 = width;
  let y0 = height;
  let x1 = -1;
  let y1 = -1;
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      if (!changed(base, variant, (y * width + x) * 4)) continue;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
  return x1 < 0 ? null : { x: x0, y: y0, w: x1 - x0 + 1, h: y1 - y0 + 1 };
}

/** RGBA pixels as a WebP data URL (keeps transparency). Browser only. */
export function toDataUrl(rgba: Uint8Array | Uint8ClampedArray, width: number, height: number): string {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d")!.putImageData(new ImageData(new Uint8ClampedArray(rgba), width, height), 0, 0);
  return canvas.toDataURL("image/webp", 0.92);
}

/**
 * The variant's pixels inside `box`. With `mask`, pixels that equal the base turn transparent (a cut-out laid over
 * the base); without, the box is copied as is (a light: with "lighten", unchanged pixels change nothing anyway).
 */
export function crop(base: Uint8Array, variant: Uint8Array, width: number, box: Box, mask: boolean): Uint8ClampedArray {
  const out = new Uint8ClampedArray(box.w * box.h * 4);
  for (let y = 0; y < box.h; y++)
    for (let x = 0; x < box.w; x++) {
      const i = ((box.y + y) * width + box.x + x) * 4;
      const o = (y * box.w + x) * 4;
      out.set(variant.subarray(i, i + 4), o);
      if (mask && !changed(base, variant, i)) out[o + 3] = 0;
    }
  return out;
}

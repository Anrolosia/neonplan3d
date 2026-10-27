import assert from "node:assert/strict";
import { test } from "node:test";
import { crop, diffBox } from "./static-export.ts";

const picture = (w: number, h: number, lit: [number, number][] = []) => {
  const p = new Uint8Array(w * h * 4).fill(10);
  for (const [x, y] of lit) p.set([200, 180, 90, 255], (y * w + x) * 4);
  return p;
};

test("diffBox finds the changed pixels, null for the same picture", () => {
  const base = picture(6, 4);
  assert.equal(diffBox(base, picture(6, 4), 6, 4), null);
  assert.deepEqual(diffBox(base, picture(6, 4, [[1, 1], [3, 2]]), 6, 4), { x: 1, y: 1, w: 3, h: 2 });
});

test("crop keeps the box, a mask makes unchanged pixels transparent", () => {
  const base = picture(6, 4);
  const lit = picture(6, 4, [[1, 1], [3, 2]]);
  const box = { x: 1, y: 1, w: 3, h: 2 };
  const plain = crop(base, lit, 6, box, false);
  const cut = crop(base, lit, 6, box, true);
  assert.equal(plain.length, 3 * 2 * 4);
  assert.deepEqual([...plain.subarray(0, 4)], [200, 180, 90, 255]);
  // (2, 1) did not change: copied as is, transparent in the cut-out
  assert.equal(plain[4 + 3], 10);
  assert.equal(cut[4 + 3], 0);
  assert.equal(cut[3], 255);
});

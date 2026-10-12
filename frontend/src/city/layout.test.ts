import assert from "node:assert/strict";
import test from "node:test";
import { cleanData, housePlace, lanternPlace, lighthousePlace, plots, ringCapacity, ringsFor } from "./layout.ts";

test("a supporter's lantern keeps its place however many come after", () => {
  const before = lanternPlace(42);
  // nothing in the place depends on the number of supporters
  assert.deepEqual(lanternPlace(42), before);
  assert.equal(lanternPlace(1).ring, 1);
  assert.equal(lanternPlace(ringCapacity(1)).ring, 1);
  assert.equal(lanternPlace(ringCapacity(1) + 1).ring, 2);
  assert.ok(ringsFor(2000) >= 6);
});

test("lanterns, houses and lighthouses never stand on each other", () => {
  const lanterns = Array.from({ length: 2000 }, (_, i) => lanternPlace(i + 1));
  const houses = Array.from({ length: 200 }, (_, j) => housePlace(j));
  const towers = Array.from({ length: 24 }, (_, j) => lighthousePlace(j));
  const near = (a: { x: number; z: number }, b: { x: number; z: number }) => Math.hypot(a.x - b.x, a.z - b.z);
  // lanterns: a grid of distinct spots, at least 2 m apart
  const keys = new Set(lanterns.map((p) => `${p.x.toFixed(2)},${p.z.toFixed(2)}`));
  assert.equal(keys.size, lanterns.length);
  for (let i = 0; i < 400; i++) for (let j = i + 1; j < 400; j++) assert.ok(near(lanterns[i], lanterns[j]) > 2, `${i} ${j}`);
  // a house (3.6 m wide) keeps clear of every lantern and every other house, a lighthouse of everything
  for (const h of houses) {
    for (const l of lanterns) assert.ok(near(h, l) > 5, "house at a lantern");
    for (const o of houses) if (o !== h) assert.ok(near(h, o) >= 10, "houses overlap");
  }
  for (const t of towers) {
    for (const l of lanterns) assert.ok(near(t, l) > 3, "lighthouse at a lantern");
    for (const h of houses) assert.ok(near(t, h) > 8, "lighthouse at a house");
  }
});

test("plots: the shop's numbers first, the others in the order of the supporters' numbers", () => {
  const list = [
    { nr: 9, name: null, level: "spotlight" as const, color: null, since: "2026-10" },
    { nr: 3, name: null, level: "spotlight" as const, color: null, since: "2026-10", plot: 0 },
    { nr: 5, name: null, level: "spotlight" as const, color: null, since: "2026-10" },
    { nr: 7, name: null, level: "neon" as const, color: null, since: "2026-10" },
  ];
  assert.deepEqual([...plots(list, "spotlight")].sort((a, b) => a[0] - b[0]), [
    [3, 0],
    [5, 1],
    [9, 2],
  ]);
});

test("the shop's list is checked before it is shown", () => {
  const out = cleanData({
    version: 1,
    supporters: [
      { nr: 2, name: "  Lars <b>  ", level: "glow", color: "#22d3ee", since: "2026-10" },
      { nr: 2, name: "twice", level: "neon" },
      { nr: 0, name: "zero" },
      { nr: 1, name: "", level: "king", color: "red", since: "Oktober" },
    ],
  });
  assert.deepEqual(out, [
    { nr: 1, name: null, level: "neon", color: null, since: "", plot: null },
    { nr: 2, name: "Lars b", level: "glow", color: "#22d3ee", since: "2026-10", plot: null },
  ]);
  assert.deepEqual(cleanData(null), []);
});

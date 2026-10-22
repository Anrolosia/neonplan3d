import assert from "node:assert/strict";
import { test } from "node:test";
import { lineFlows, sparkPoints } from "./module-scene.ts";

const red: [number, number, number] = [1, 0, 0];
const blue: [number, number, number] = [0, 0, 1];

test("a line becomes one flow piece per straight piece, the distance running on across the corners", () => {
  const got = lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0.03, 0], [2, 0.03, 0], [2, 0.03, 3]], colors: [red], flow: 800 }]);
  assert.equal(got.length, 2);
  assert.deepEqual(got.map((f) => f.dist), [0, 2]);
  assert.deepEqual(got[1].a, [2, 0.03, 0]);
  assert.deepEqual(got.map((f) => f.power), [800, 800]);
  assert.deepEqual(got[0].color, red);
});

test("colours run along the line: per point, or spread over its length", () => {
  const perPoint = lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [1, 0, 0], [2, 0, 0]], colors: [red, red, blue], flow: 0 }]);
  assert.deepEqual(perPoint.map((f) => f.color), [red, [0.5, 0, 0.5]]);
  const spread = lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [3, 0, 0], [4, 0, 0]], colors: [red, blue], flow: 0 }]);
  // the first piece's middle lies at 1.5 of 4 m, the second's at 3.5
  assert.deepEqual(spread[0].color.map((v) => +v.toFixed(3)), [0.625, 0, 0.375]);
  assert.deepEqual(spread[1].color.map((v) => +v.toFixed(3)), [0.125, 0, 0.875]);
});

test("a line too short or without points is left out; a resting line has no power", () => {
  assert.deepEqual(lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0]], colors: [red], flow: 100 }]), []);
  assert.deepEqual(lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [0.001, 0, 0]], colors: [red], flow: 100 }]), []);
  assert.equal(lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [1, 0, 0]], colors: [red], flow: -5 }])[0].power, 0);
});

test("a small curve: the lowest value at the bottom, the highest at the top, spread over the width", () => {
  assert.equal(sparkPoints([1, 3, 2], 100, 22), "0,21 50,1 100,11");
  assert.equal(sparkPoints([5], 100, 22), "");
  // a flat line sits at the bottom instead of dividing by nothing
  assert.equal(sparkPoints([2, 2], 10, 10), "0,9 10,9");
});

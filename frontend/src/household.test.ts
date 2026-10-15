import assert from "node:assert/strict";
import { test } from "node:test";
import { binColors, binDue, binGlows, mailboxBase, mailboxPost, pickupsOf, sensorDays, wasteCalendars, wasteColors, wasteMatches } from "./household.ts";
import type { Furniture } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}, last_changed?: string): HassEntity => ({ entity_id, state, attributes, last_changed }) as HassEntity;
const hassOf = (...states: HassEntity[]): HomeAssistant => ({ states: Object.fromEntries(states.map((s) => [s.entity_id, s])) }) as unknown as HomeAssistant;

test("calendar entries are found by the words of each kind of waste, in many languages", () => {
  assert.ok(wasteMatches("Papiertonne", "paper"));
  assert.ok(wasteMatches("Altpapier / Pappe", "paper"));
  assert.ok(wasteMatches("Biotonne", "bio"));
  assert.ok(wasteMatches("Restmüll 14-täglich", "rest"));
  assert.ok(wasteMatches("Gelber Sack", "plastic"));
  assert.ok(wasteMatches("GFT-afval", "bio"));
  assert.ok(wasteMatches("PMD", "plastic"));
  assert.ok(wasteMatches("Recycling collection", "recycling"));
  assert.ok(wasteMatches("Garden waste", "garden"));
  assert.ok(wasteMatches("Collecte des emballages", "plastic"));
  // one kind's entry is not another's
  assert.ok(!wasteMatches("Papiertonne", "bio"));
  assert.ok(!wasteMatches("Biotonne", "paper"));
  // an own word wins (a "Grüne Tonne" that takes paper in one town)
  assert.ok(wasteMatches("Grüne Tonne", "paper", "grüne tonne"));
  assert.ok(!wasteMatches("Papier", "paper", "grüne tonne"));
  assert.ok(!wasteMatches("Papier", "other"));
});

test("all-day events are local days; the waste calendars of the bins are collected once", () => {
  const p = pickupsOf([{ summary: "Bio", start: { date: "2026-10-16" } }, { summary: "Papier", start: { dateTime: "2026-10-15T06:00:00+02:00" } }, { summary: "broken" }]);
  assert.equal(p.length, 2);
  assert.equal(p[0].summary, "Papier");
  assert.equal(p[1].day.getDate(), 16);
  assert.equal(p[1].day.getHours(), 0);
  const floors = [{ furniture: [{ type: "waste_bin", bin_source: "calendar.abfall" }, { type: "waste_bin", bin_source: "calendar.abfall" }, { type: "waste_bin", bin_source: "sensor.papier" }] as Furniture[] }];
  assert.deepEqual(wasteCalendars(floors), ["calendar.abfall"]);
});

test("a bin glows from 2 pm the day before until noon on the day", () => {
  const at = (h: number) => new Date(2026, 9, 15, h, 0);
  assert.equal(binGlows(1, at(13)), false);
  assert.equal(binGlows(1, at(14)), true);
  assert.equal(binGlows(0, at(7)), true);
  assert.equal(binGlows(0, at(12)), false);
  assert.equal(binGlows(2, at(20)), false);
});

test("the next pickup of a bin from its calendar; after noon on the day the next one counts", () => {
  const pickups = new Map([["calendar.abfall", pickupsOf([
    { summary: "Papier", start: { date: "2026-10-15" } },
    { summary: "Bio", start: { date: "2026-10-16" } },
    { summary: "Papier", start: { date: "2026-10-29" } },
  ])]]);
  const paper = { bin_kind: "paper", bin_source: "calendar.abfall" } as Furniture;
  const bio = { bin_kind: "bio", bin_source: "calendar.abfall" } as Furniture;
  const hass = hassOf();
  const morning = new Date(2026, 9, 15, 8, 0);
  assert.deepEqual([binDue(paper, hass, pickups, morning)?.days, binDue(paper, hass, pickups, morning)?.glow], [0, true]);
  assert.deepEqual([binDue(bio, hass, pickups, morning)?.days, binDue(bio, hass, pickups, morning)?.glow], [1, false]);
  const evening = new Date(2026, 9, 15, 18, 0);
  assert.equal(binDue(bio, hass, pickups, evening)?.glow, true);
  // the paper bin was emptied this morning: two weeks to go
  assert.equal(binDue(paper, hass, pickups, evening)?.days, 14);
  assert.equal(binDue({ bin_kind: "glass", bin_source: "calendar.abfall" } as Furniture, hass, pickups, morning), null);
  assert.equal(binDue({ bin_kind: "paper" } as Furniture, hass, pickups, morning), null);
});

test("a sensor gives the days left: a number, a date, Waste Collection Schedule's daysTo, a phrase", () => {
  const now = new Date(2026, 9, 15, 10, 0);
  assert.equal(sensorDays(st("sensor.a", "2"), now), 2);
  assert.equal(sensorDays(st("sensor.a", "2026-10-17"), now), 2);
  assert.equal(sensorDays(st("sensor.a", "Papier in 3 Tagen", { daysTo: 3 }), now), 3);
  assert.equal(sensorDays(st("sensor.a", "Morgen"), now), 1);
  assert.equal(sensorDays(st("sensor.a", "Today"), now), 0);
  assert.equal(sensorDays(st("sensor.a", "in 5 days"), now), 5);
  const bin = { bin_kind: "paper", bin_source: "sensor.a" } as Furniture;
  assert.equal(binDue(bin, hassOf(st("sensor.a", "1")), new Map(), new Date(2026, 9, 15, 15, 0))?.glow, true);
});

test("post lies in a mailbox: a flag's state, or a flap after the last emptying (within a week)", () => {
  const now = Date.parse("2026-10-15T12:00:00Z");
  assert.equal(mailboxPost({ entity: "input_boolean.post" } as Furniture, hassOf(st("input_boolean.post", "on")), now), true);
  assert.equal(mailboxPost({ entity: "input_boolean.post" } as Furniture, hassOf(st("input_boolean.post", "off")), now), false);
  assert.equal(mailboxPost({ entity: "counter.letters" } as Furniture, hassOf(st("counter.letters", "2")), now), true);
  const box = { entity: "binary_sensor.flap", mailbox_door: "binary_sensor.door" } as Furniture;
  const flap = (t: string) => st("binary_sensor.flap", "off", {}, t);
  const door = (t: string) => st("binary_sensor.door", "off", {}, t);
  assert.equal(mailboxPost(box, hassOf(flap("2026-10-15T09:00:00Z"), door("2026-10-14T18:00:00Z")), now), true);
  assert.equal(mailboxPost(box, hassOf(flap("2026-10-15T09:00:00Z"), door("2026-10-15T10:00:00Z")), now), false);
  // the same moment for both (a restart of Home Assistant): nothing glows
  assert.equal(mailboxPost(box, hassOf(flap("2026-10-15T09:00:00Z"), door("2026-10-15T09:00:00Z")), now), false);
  // a flap that last moved two weeks ago
  assert.equal(mailboxPost(box, hassOf(flap("2026-10-01T09:00:00Z"), door("2026-09-30T09:00:00Z")), now), false);
  assert.equal(mailboxPost({ entity: "none" } as Furniture, hassOf(), now), false);
});

test("bins start from the colours of their country; own colours win; a wall mailbox hangs at 1 m", () => {
  assert.deepEqual(wasteColors("paper", "DE"), ["#1f4fa8", "#1f4fa8"]);
  // Australia: the lid tells the kind
  assert.notEqual(wasteColors("rest", "AU")[0], wasteColors("rest", "AU")[1]);
  // a country without its own list: the default
  assert.deepEqual(wasteColors("bio", "JP"), wasteColors("bio", "default"));
  assert.deepEqual(binColors({ bin_kind: "paper", bin_color: "#112233" }, "DE"), ["#112233", "#112233"]);
  assert.deepEqual(binColors({ bin_kind: "paper", bin_color: "#112233", bin_lid: "#ff0000" }, "DE"), ["#112233", "#ff0000"]);
  assert.equal(mailboxBase({ variant: null }), 1);
  assert.equal(mailboxBase({ variant: "pole" }), 0);
});

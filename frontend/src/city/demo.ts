// Invented supporters for the preview, until the shop's list is there: about as many as hold a pass today, a few
// with a name, some with their own colour, a handful of houses and three lighthouses. Always the same list.

import type { Level, Supporter } from "./layout.ts";

const NAMES = ["Lars", "Mia", "Jonas", "Sophie", "Ben", "Lena", "Paul", "Emma", "Finn", "Hanna", "Tom", "Clara", "Max", "Ida", "Leon", "Nora", "Elias", "Ella", "Noah", "Lotte", "Sam", "Alex", "Kim", "Jo"];
const COLORS = ["#22d3ee", "#a78bfa", "#f472b6", "#34d399", "#fbbf24", "#60a5fa", "#fb7185"];

export function demoSupporters(n = 216): Supporter[] {
  // a small fixed pseudo-random sequence, so the preview looks the same every time
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  const out: Supporter[] = [];
  for (let nr = 1; nr <= n; nr++) {
    const r = rnd();
    const level: Level = nr === 5 || nr === 77 || nr === 150 ? "lighthouse" : r < 0.06 ? "spotlight" : r < 0.2 ? "glow" : "neon";
    const named = rnd() < 0.4;
    const month = nr < 120 ? "2026-09" : "2026-10";
    out.push({
      nr,
      name: named ? NAMES[Math.floor(rnd() * NAMES.length)] : null,
      level,
      color: level === "neon" ? null : COLORS[Math.floor(rnd() * COLORS.length)],
      since: month,
    });
  }
  return out;
}

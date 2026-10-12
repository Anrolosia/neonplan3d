// Builds the supporter city (a page of its own beside the online demo, not part of the integration).
import { build } from "esbuild";

await build({
  entryPoints: ["src/city/entry.ts"],
  outfile: "../preview/city/neonplan3d-city.js",
  bundle: true,
  format: "esm",
  target: ["safari15", "chrome94", "firefox93", "edge94"],
  minify: true,
  legalComments: "none",
  logLevel: "info",
});

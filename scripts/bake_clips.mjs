/**
 * Bake every compile-ready SignDesc in the non-deferred packs to MarionetClip JSON.
 * No video: the clip is the compiler's output, written once so players need no compiler.
 *
 * Usage: node scripts/bake_clips.mjs           write clips/ + clips/index.json
 *        node scripts/bake_clips.mjs --check   fail if clips/ is stale
 */
import { compileSignDesc } from "../src/compile.js";
import { isCompilable, validateClip } from "../src/ir.js";
import { packSigns } from "../src/lexicon.js";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "clips");
const check = process.argv.includes("--check");
const load = (p) => JSON.parse(readFileSync(join(root, p), "utf8"));

const round = (v) => Math.round(v * 1e4) / 1e4;

function roundClip(clip) {
  const bones = {};
  for (const [bone, keys] of Object.entries(clip.bones)) {
    bones[bone] = keys.map(([t, e]) => [round(t), e.map(round)]);
  }
  const expressions = {};
  for (const [name, keys] of Object.entries(clip.expressions || {})) {
    expressions[name] = keys.map(([t, v]) => [round(t), round(v)]);
  }
  return { ...clip, duration: round(clip.duration), bones, expressions };
}

const index = [];
const stale = [];
for (const pack of load("data/signs/index.json").packs) {
  if (pack.defer) continue;
  for (const desc of packSigns(load(pack.path))) {
    if (!isCompilable(desc)) continue;
    const clip = roundClip(compileSignDesc(desc));
    const errors = validateClip(clip);
    if (errors.length) throw new Error(`${desc.id}: ${errors.join("; ")}`);
    const rel = `${desc.id}.json`;
    const text = JSON.stringify(clip) + "\n";
    const file = join(outDir, rel);
    if (check) {
      let prev = null;
      try {
        prev = readFileSync(file, "utf8");
      } catch {
        /* missing */
      }
      if (prev !== text) stale.push(rel);
    } else {
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, text);
    }
    index.push({ id: desc.id, language: desc.language, gloss: desc.gloss, duration: clip.duration, path: rel });
  }
}

const indexText = JSON.stringify({ schema: "marionet.clipindex/v0", clips: index }, null, 2) + "\n";
if (check) {
  let prev = null;
  try {
    prev = readFileSync(join(outDir, "index.json"), "utf8");
  } catch {
    /* missing */
  }
  if (prev !== indexText) stale.push("index.json");
  if (stale.length) {
    console.error(`clips/ is stale (${stale.join(", ")}); run node scripts/bake_clips.mjs`);
    process.exit(1);
  }
  console.log(`bake_clips ok  ${index.length} clips current`);
} else {
  writeFileSync(join(outDir, "index.json"), indexText);
  console.log(`baked ${index.length} clips → clips/`);
}

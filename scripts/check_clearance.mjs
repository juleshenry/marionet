/**
 * Whether an arm passes through the body: for each clip, on the sample and on the given
 * avatars, how far the forearm and the wrist keep from the skin of the torso and head over the
 * clip, in cm, less the arm's own thickness, once the arm is raised (at rest it hangs against
 * the hips and a woman signer's side). Negative is an arm through the body. The
 * retargeting (src/body.js) turns the elbow out to keep the forearm off the chest, and fits
 * keyframes between those where the arm would pass through it; this measures what is left.
 *
 * Usage: python3 -m http.server 8765 &
 *        node scripts/check_clearance.mjs data/clips/converted/bzs/signpuddle/amor.json [...]
 *          [--avatars m-black-2,w-east-asian]   (default: every avatars/out/*.vrm)
 *          [--json out.json] [--trace]   (--trace: each frame's nearest, retargeted)
 *
 * Each cell is the closest the arm came: "raw" on the avatar as the clip was fitted, then as the
 * player retargets it, with the part (forearm, wrist) and the time.
 */
import { chromium } from "playwright";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = process.env.MARIONET_URL || "http://127.0.0.1:8765";
const argv = process.argv.slice(2);
const opt = (name) => {
  const i = argv.indexOf(name);
  if (i < 0) return null;
  const [value] = argv.splice(i, 2).slice(1);
  return value;
};
const avatarArg = opt("--avatars");
const jsonOut = opt("--json");
const TRACE = argv.includes("--trace") && argv.splice(argv.indexOf("--trace"), 1).length > 0;
const clips = argv.map((f) => path.resolve(f));
const avatars = avatarArg
  ? avatarArg.split(",").map((a) => `avatars/out/${a.replace(/\.vrm$/, "")}.vrm`)
  : readdirSync(path.join(root, "avatars/out")).filter((f) => f.endsWith(".vrm")).map((f) => `avatars/out/${f}`);

/** In the page: the closest each clip's arms come to the body on one avatar, raw and retargeted. */
async function measure({ url, clips, TRACE }) {
  const THREE = await import("three");
  const vrmMod = await import("./src/vrm.js");
  const body = await import("./src/body.js");
  const vrm = await vrmMod.loadVrm(url ?? vrmMod.sampleUrl());
  const bones = body.readSkeleton(vrm);
  const skel = { bones };
  const { skin } = body.measureBody(vrm, skel, { skin: true });
  // The arm's half-thickness, in metres: a VRoid forearm is about 6 cm across, its wrist 5.
  const RADIUS = { forearm: 0.03, wrist: 0.025 };
  const lerp = (keys, t) => {
    if (!keys?.length) return [0, 0, 0];
    if (t <= keys[0][0]) return keys[0][1];
    for (let i = 0; i < keys.length - 1; i++) {
      const [t0, a] = keys[i];
      const [t1, b] = keys[i + 1];
      if (t <= t1) return a.map((x, k) => x + (b[k] - x) * ((t - t0) / Math.max(t1 - t0, 1e-6)));
    }
    return keys.at(-1)[1];
  };
  const closest = (clip, trace) => {
    let worst = null;
    for (let t = 0; t <= clip.duration + 1e-6; t += 1 / 30) {
      const before = worst?.gap;
      const eul = Object.fromEntries(Object.entries(clip.bones).map(([n, k]) => [n, lerp(k, t)]));
      const P = body.posed(skel, eul);
      for (const side of ["right", "left"]) {
        // Not while the arm still hangs by the side: at rest a forearm lies against a woman
        // signer's side, in every sign, before it starts
        const raised = (eul[`${side}UpperArm`] ?? [0, 0, 0]).some((x) => Math.abs(x) > 0.3);
        if (!raised) continue;
        const elbow = P.p[`${side}LowerArm`];
        const wrist = P.p[`${side}Hand`];
        const parts = [0, 0.25, 0.5, 0.75].map((u) => ["forearm", elbow.clone().lerp(wrist, u)]).concat([["wrist", wrist]]);
        for (const [part, p] of parts) {
          const hit = skin.nearest(p, P, 6);
          // An arm at rest hangs against the hips and thighs, as it should; and a point far off
          // the nearest skin that seems inside it is fooled by a collar (src/body.js, DEEPEST)
          if (!hit || hit.g === "hips" || (hit.inside && hit.d > 0.06)) continue;
          const gap = (hit.inside ? -hit.d : hit.d) - RADIUS[part];
          if (!worst || gap < worst.gap) worst = { gap, part: `${side} ${part}`, t, at: hit.g };
          if (trace) (trace[t.toFixed(2)] ??= []).push(+(gap * 100).toFixed(1));
        }
      }
    }
    return worst && { cm: +(worst.gap * 100).toFixed(1), part: worst.part, t: +worst.t.toFixed(2), at: worst.at };
  };
  const out = {};
  for (const [name, clip] of Object.entries(clips)) {
    const trace = TRACE ? {} : null;
    out[name] = { raw: closest(clip), fit: closest(vrmMod.retargetedClip(vrm, clip), trace) };
    // --trace: the nearest the forearm or wrist comes at each frame, retargeted
    if (trace) out[name].trace = Object.fromEntries(Object.entries(trace).map(([t, g]) => [t, Math.min(...g)]));
  }
  return out;
}

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 200, height: 200 } });
try {
  await page.route("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/**", async (route) => {
    const url = route.request().url().replace("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/", "https://raw.githubusercontent.com/pixiv/three-vrm/release/");
    await route.fulfill({ response: await route.fetch({ url }) });
  });
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForFunction(() => window.marionet?.vrm, null, { timeout: 90000 });
  const loaded = Object.fromEntries(clips.map((f) => [path.basename(f, ".json"), JSON.parse(readFileSync(f, "utf8"))]));
  const rows = {};
  for (const av of [null, ...avatars]) {
    rows[av ? path.basename(av, ".vrm") : "sample"] = await page.evaluate(measure, { url: av ? `/${av}` : null, clips: loaded, TRACE });
  }
  if (jsonOut) writeFileSync(jsonOut, JSON.stringify(rows, null, 1));
  console.log("closest the forearm or wrist comes to the body, cm (negative: through it): as fitted → retargeted");
  for (const clip of Object.keys(loaded)) {
    console.log(clip);
    for (const [avatar, r] of Object.entries(rows)) {
      const { raw, fit } = r[clip];
      const cell = (c) => (c ? `${String(c.cm).padStart(5)} (${c.part}, ${c.t}s, ${c.at})` : "    –");
      console.log(`  ${avatar.padEnd(18)}${cell(raw)}  →  ${cell(fit)}`);
      if (r[clip].trace) console.log(`    ${Object.entries(r[clip].trace).map(([t, g]) => `${t}:${g}`).join(" ")}`);
    }
  }
} finally {
  await browser.close();
}

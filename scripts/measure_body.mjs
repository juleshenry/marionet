/**
 * The sample VRM's skeleton and body points, which the player's retargeting maps every other
 * avatar against: arms in src/body.js, thumbs in src/hands.js. Writes src/sample_body.js;
 * run it again when body.js changes where it measures.
 *
 * Also checks that body.js's forward kinematics lands where three-vrm puts the bones, and
 * with --avatars prints what it measures on other avatars.
 *
 * Usage: python3 -m http.server 8765 &
 *        node scripts/measure_body.mjs
 *        node scripts/measure_body.mjs --avatars avatars/out/w-white.vrm,avatars/out/m-black-1.vrm
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = process.env.MARIONET_URL || "http://127.0.0.1:8765";
const argv = process.argv.slice(2);
const ai = argv.indexOf("--avatars");
const avatars = ai >= 0 ? argv[ai + 1].split(",") : [];

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 300, height: 300 } });
try {
  // jsdelivr's /gh/ route for the sample VRM is flaky; the same file is on raw.githubusercontent.
  await page.route("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/**", async (route) => {
    const url = route.request().url().replace("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/", "https://raw.githubusercontent.com/pixiv/three-vrm/release/");
    await route.fulfill({ response: await route.fetch({ url }) });
  });
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForFunction(() => window.marionet?.vrm, null, { timeout: 90000 });

  const clip = JSON.parse(readFileSync(path.join(root, "clips/gsm/gato.json"), "utf8"));
  const measure = (url, clip) =>
    page.evaluate(
      async ({ url, clip }) => {
        const THREE = await import("three");
        const vrmMod = await import("./src/vrm.js");
        const body = await import("./src/body.js");
        const vrm = await vrmMod.loadVrm(url ?? vrmMod.sampleUrl());
        const bones = body.readSkeleton(vrm);
        const t0 = performance.now();
        const measured = body.measureBody(vrm, { bones });
        const ms = performance.now() - t0;

        // Forward kinematics against three-vrm, mid-clip, without any retargeting.
        vrmMod.applyRestPose(vrm);
        const rest = vrmMod.snapshotPose(vrm);
        const t = 0.6;
        const eul = {};
        for (const [name, keys] of Object.entries(clip.bones)) {
          const k = keys.find((x) => x[0] >= t) ?? keys.at(-1);
          eul[name] = k[1];
        }
        const held = { ...clip, bones: Object.fromEntries(Object.entries(eul).map(([n, e]) => [n, [[0, e]]])) };
        vrmMod.applyClip(vrm, held, rest, 0, { raw: true });
        vrm.humanoid.update();
        vrm.scene.updateMatrixWorld(true);
        const P = body.posed({ bones }, eul);
        let fkErr = 0;
        for (const n of ["rightHand", "rightIndexDistal", "rightThumbDistal", "head"]) {
          const node = vrm.humanoid.getNormalizedBoneNode(n);
          if (node) fkErr = Math.max(fkErr, node.getWorldPosition(new THREE.Vector3()).distanceTo(P.p[n]));
        }
        return { bones, body: measured, ms: Math.round(ms), fkErrMm: +(fkErr * 1000).toFixed(2) };
      },
      { url, clip },
    );

  const sample = await measure(null, clip);
  console.log(`sample: face ${sample.body.faceLen} m, torso ${sample.body.torsoLen} m, ${sample.body.anchors.length} points, measured in ${sample.ms} ms, FK off by ${sample.fkErrMm} mm`);
  if (sample.fkErrMm > 1) throw new Error("body.js forward kinematics disagrees with three-vrm");
  const bones = Object.fromEntries(Object.entries(sample.bones).map(([n, b]) => [n, { ...b, offset: b.offset.map((x) => +x.toFixed(6)) }]));
  const lines = (entries) => entries.map((x) => `    ${x},`).join("\n");
  const { anchors, ...sizes } = sample.body; // faceLen, torsoLen
  const text = [
    "// Written by scripts/measure_body.mjs: the sample VRM's skeleton and body points.",
    "export const SAMPLE_BODY = {",
    "  bones: {",
    lines(Object.entries(bones).map(([n, b]) => `${n}: ${JSON.stringify(b)}`)),
    "  },",
    `  body: {`,
    `    faceLen: ${sizes.faceLen},`,
    `    torsoLen: ${sizes.torsoLen},`,
    "    anchors: [",
    lines(anchors.map((a) => `  ${JSON.stringify(a)}`)),
    "    ],",
    "  },",
    "};",
    "",
  ].join("\n");
  writeFileSync(path.join(root, "src/sample_body.js"), text);
  console.log("→ src/sample_body.js");

  const byName = Object.fromEntries(sample.body.anchors.map((a) => [a.name, a]));
  for (const av of avatars) {
    const r = await measure(`/${av}`, clip);
    console.log(`${av}: face ${r.body.faceLen} m, torso ${r.body.torsoLen} m, ${r.body.anchors.length} points, ${r.ms} ms, FK off by ${r.fkErrMm} mm`);
    const fmt = (a) => a.map((x) => (x * 100).toFixed(1).padStart(5)).join(" ");
    for (const a of r.body.anchors) {
      const s = byName[a.name];
      if (!s) continue;
      console.log(`  ${a.name.padEnd(16)} ${a.bone.padEnd(14)} local cm ${fmt(a.local)}   sample ${fmt(s.local)}`);
    }
  }
} finally {
  await browser.close();
}

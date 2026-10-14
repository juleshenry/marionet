/**
 * Finger clearance per baked clip on the sample VRM, at the held handshape.
 * Distances are centre-to-centre between bone segments, in hand lengths (wrist →
 * middle knuckle). About 0.19 is two finger radii: fingers touching. Lower means
 * one passes through the other (V/W with the spread sign flipped, R twisted in
 * place, a thumb sunk into a fist). T and M press the thumb under the fingers on
 * purpose, so they flag.
 *
 * Usage: python3 -m http.server 8765 &
 *        node scripts/hand_gaps.mjs [id ...]
 */
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = process.env.MARIONET_URL || "http://127.0.0.1:8765";
const only = new Set(process.argv.slice(2));
const STATIC = 1.3;
const FINGER_MIN = 0.17;
const THUMB_MIN = 0.15;

const segDist = (p, q, r, s) => {
  let best = Infinity;
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      const a = p.map((x, k) => x + ((q[k] - x) * i) / 10);
      const b = r.map((x, k) => x + ((s[k] - x) * j) / 10);
      best = Math.min(best, Math.hypot(...a.map((x, k) => x - b[k])));
    }
  }
  return best;
};

// Skip each finger's first segment against its neighbour: knuckle spacing is the rig's.
function gap(a, b, skipBase) {
  let best = Infinity;
  for (let i = skipBase ? 1 : 0; i < a.length - 1; i++) {
    for (let j = skipBase ? 1 : 0; j < b.length - 1; j++) best = Math.min(best, segDist(a[i], a[i + 1], b[j], b[j + 1]));
  }
  return best;
}

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 300, height: 300 } });
try {
  // jsdelivr's /gh/ route for the sample VRM is flaky; the same file is on raw.githubusercontent.
  await page.route("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/**", async (route) => {
    const url = route.request().url().replace("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/", "https://raw.githubusercontent.com/pixiv/three-vrm/release/");
    await route.fulfill({ response: await route.fetch({ url }) });
  });
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForFunction(() => window.marionet?.vrm && window.marionet?.rest, null, { timeout: 90000 });
  await page.evaluate(async () => {
    window.marionet._render = await import("./src/vrm.js");
  });

  const { clips } = JSON.parse(readFileSync(path.join(root, "clips/index.json"), "utf8"));
  let flagged = 0;
  for (const c of clips.filter((c) => !only.size || only.has(c.id))) {
    const clip = JSON.parse(readFileSync(path.join(root, "clips", c.path), "utf8"));
    const t = clip.duration > STATIC + 1e-6 ? 0.4 : clip.duration;
    const g = await page.evaluate(({ clip, t }) => {
      const m = window.marionet, h = m.vrm.humanoid;
      m._render.applyClip(m.vrm, clip, m.rest, t);
      m.vrm.update(0);
      m.vrm.scene.updateMatrixWorld(true);
      const P = (n) => h.getRawBoneNode(n).getWorldPosition(m.camera.position.clone());
      const w = P("rightHand"), mm = P("rightMiddleProximal"), im = P("rightIndexProximal"), lm = P("rightLittleProximal");
      const L = mm.distanceTo(w);
      const f = mm.clone().sub(w).normalize();
      const a = im.clone().sub(lm);
      a.sub(f.clone().multiplyScalar(a.dot(f))).normalize();
      const n = a.clone().cross(f).normalize();
      const loc = (p) => { const d = p.clone().sub(w); return [d.dot(f) / L, d.dot(a) / L, d.dot(n) / L]; };
      const out = {};
      for (const fin of ["Thumb", "Index", "Middle", "Ring", "Little"]) {
        const joints = fin === "Thumb" ? ["Proximal", "Distal"] : ["Proximal", "Intermediate", "Distal"];
        const pts = joints.map((j) => P(`right${fin}${j}`));
        const d = h.getRawBoneNode(`right${fin}Distal`);
        pts.push((d.children[0] ?? d).getWorldPosition(m.camera.position.clone()));
        out[fin] = pts.map(loc);
      }
      return out;
    }, { clip, t });
    const fingers = [["Index", "Middle"], ["Middle", "Ring"], ["Ring", "Little"]].map(([a, b]) => gap(g[a], g[b], true));
    const thumb = ["Index", "Middle", "Ring", "Little"].map((b) => gap(g.Thumb, g[b], false));
    const bad = fingers.some((x) => x < FINGER_MIN) || thumb.some((x) => x < THUMB_MIN);
    flagged += bad ? 1 : 0;
    const fmt = (xs) => xs.map((x) => x.toFixed(2)).join(" ");
    console.log(`${c.gloss.padEnd(6)} I|M M|R R|L ${fmt(fingers)}   thumb→I M R L ${fmt(thumb)}${bad ? "   <-- check" : ""}`);
  }
  console.log(`${flagged} flagged`);
} finally {
  await browser.close();
}

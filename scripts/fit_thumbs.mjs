/**
 * Fit per-handshape thumb eulers on the sample VRM so the thumb tip lands where ASL
 * puts it. Prints THUMB_POSES rows for src/library.js. Fingers come from the baked
 * letter clip, so bake first.
 *
 * Targets are in the palm frame [f, a, n], in hand lengths (wrist → middle knuckle):
 * f along the fingers, a toward the index side, n out of the palm. `rel` targets are
 * offsets from a finger joint (0 knuckle … 3 tip), for thumbs that touch a finger.
 *
 * Usage: python3 -m http.server 8765 &
 *        node scripts/fit_thumbs.mjs [shape ...]
 *        node scripts/fit_thumbs.mjs --also avatars/out/w-white.vrm [shape ...]
 *          fit one set of angles that works on the sample VRM and these rigs together
 */
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = process.env.MARIONET_URL || "http://127.0.0.1:8765";

const TARGETS = {
  A: { abs: [0.98, 0.45, 0.32] },             // straight, beside the index
  B: { abs: [0.78, -0.22, 0.24] },            // folded across the palm
  C: { rel: ["Index", 3, [-0.6, 0.05, 0.05]] }, // opposed, gap below the fingertips
  D: { rel: ["Middle", 3, [0, 0.05, 0.08]] },  // meets the middle fingertip
  E: { abs: [0.55, -0.12, 0.3] },             // tucked under the fingertips
  G: { abs: [1.3, 0.52, 0.12] },              // parallel to the index
  H: { abs: [0.8, -0.32, 0.86] },             // over the curled ring and little
  I: { abs: [0.78, 0.0, 0.88] },              // across the curled fingers
  K: { rel: ["Middle", 0, [0.32, 0.12, 0.18]] }, // on the middle finger's first segment
  P: { rel: ["Middle", 0, [0.32, 0.12, 0.18]] },
  M: { abs: [0.88, -0.36, 0.42], r: 0.13 },   // tip between ring and little; fingers press on it
  N: { abs: [0.9, -0.12, 0.42] },             // tip between middle and ring
  O: { rel: ["Index", 3, [0, 0, 0]], solid: true }, // pad to pad with the index tip, not through it
  R: { abs: [0.8, -0.32, 0.86] },
  S: { abs: [0.75, 0.0, 0.92] },              // across the front of the fist
  T: { abs: [1.04, 0.14, 0.52], r: 0.13 },    // tip between index and middle; fingers press on it
  U: { abs: [0.8, -0.32, 0.86] },
  V: { abs: [0.8, -0.32, 0.86] },
  W: { abs: [0.78, -0.46, 0.8] },             // over the curled little finger
  X: { abs: [0.78, -0.08, 0.88] },
  1: { abs: [0.8, -0.18, 0.88] },             // over middle, ring, little
};
const SHAPE_CLIP = { P: "P", 1: "Z" }; // shapes whose clip id differs (Z uses 1)
const argv = process.argv.slice(2);
const ai = argv.indexOf("--also");
const also = ai >= 0 ? argv.splice(ai, 2)[1].split(",") : [];
const only = argv;

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 300, height: 300 } });
await page.route("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/**", async (route) => {
  const url = route.request().url().replace("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/", "https://raw.githubusercontent.com/pixiv/three-vrm/release/");
  await route.fulfill({ response: await route.fetch({ url }) });
});
await page.goto(`${baseUrl}/`, { waitUntil: "networkidle", timeout: 90000 });
await page.waitForFunction(() => window.marionet?.vrm && window.marionet?.rest, null, { timeout: 90000 });
await page.evaluate(async (also) => {
  const m = window.marionet;
  m._render = await import("./src/vrm.js");
  m._THREE = await import("three");
  // Every rig the fit must satisfy: the sample on stage, plus any --also rigs off stage.
  m._rigs = [{ vrm: m.vrm, rest: m.rest }];
  for (const url of also) {
    const vrm = await m._render.loadVrm(url);
    m._render.applyRestPose(vrm);
    m._rigs.push({ vrm, rest: m._render.snapshotPose(vrm) });
  }
}, also.map((a) => `/${a}`));

for (const [shape, target] of Object.entries(TARGETS)) {
  if (only.length && !only.includes(shape)) continue;
  const clipId = SHAPE_CLIP[shape] ?? shape;
  const clip = JSON.parse(readFileSync(path.join(root, `clips/ase/fs/${clipId}.json`), "utf8"));
  const r = await page.evaluate(({ clip, target }) => {
    const m = window.marionet, THREE = m._THREE;
    let rig = m._rigs[0], h = rig.vrm.humanoid;
    const P = (n) => h.getRawBoneNode(n).getWorldPosition(new THREE.Vector3());
    const N = (n) => h.getNormalizedBoneNode(n);
    const t = clip.duration;
    // Hold everything but the thumb at the clip's final pose (finger time is the hold).
    const tb = ["rightThumbMetacarpal", "rightThumbProximal", "rightThumbDistal"];
    let frame = null;
    function setThumb(v) {
      m.clip = null;
      m._render.applyClip(rig.vrm, clip, rig.rest, t);
      const vals = [[v[0], v[1], v[2]], [v[3], 0, v[4]], [v[5], 0, v[6]]];
      tb.forEach((b, i) => { const n = N(b); n.rotation.set(...vals[i]); n.quaternion.setFromEuler(n.rotation); });
      rig.vrm.update(0); rig.vrm.scene.updateMatrixWorld(true);
      const w = P("rightHand"), mm = P("rightMiddleProximal"), im = P("rightIndexProximal"), lm = P("rightLittleProximal");
      const L = mm.distanceTo(w);
      const f = mm.clone().sub(w).normalize();
      const a = im.clone().sub(lm); a.sub(f.clone().multiplyScalar(a.dot(f))).normalize();
      const n = a.clone().cross(f).normalize();
      const loc = (p) => { const d = p.clone().sub(w); return [d.dot(f) / L, d.dot(a) / L, d.dot(n) / L]; };
      const chain = (fin, names) => names.map((j) => P(`right${fin}${j}`));
      const fingers = {};
      for (const fin of ["Index", "Middle", "Ring", "Little"]) {
        const pts = chain(fin, ["Proximal", "Intermediate", "Distal"]);
        pts.push(pts[2].clone().add(pts[2].clone().sub(pts[1]).multiplyScalar(0.8)));
        fingers[fin] = pts.map(loc);
      }
      const th = chain("Thumb", ["Metacarpal", "Proximal", "Distal"]);
      // Real tip: the distal bone's end child if the rig has one, else carry the
      // proximal→distal segment through the distal bone's own rotation.
      const rawD = h.getRawBoneNode("rightThumbDistal");
      const end = rawD.children.find((c) => c.isBone || c.type === "Bone" || c.type === "Object3D");
      if (end) th.push(end.getWorldPosition(new THREE.Vector3()));
      else {
        const seg = th[2].clone().sub(th[1]).multiplyScalar(0.8);
        const qd = rawD.getWorldQuaternion(new THREE.Quaternion());
        const qp = h.getRawBoneNode("rightThumbProximal").getWorldQuaternion(new THREE.Quaternion());
        th.push(th[2].clone().add(seg.applyQuaternion(qp.invert()).applyQuaternion(qd)));
      }
      return { fingers, thumb: th.map(loc) };
    }
    const sub = (p, q) => p.map((x, i) => x - q[i]);
    const add = (p, q) => p.map((x, i) => x + q[i]);
    const len = (p) => Math.hypot(...p);
    const segDist = (p, a, b) => {
      const ab = sub(b, a), ap = sub(p, a);
      const u = Math.max(0, Math.min(1, (ap[0] * ab[0] + ap[1] * ab[1] + ap[2] * ab[2]) / Math.max(1e-9, ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2)));
      return len(sub(p, add(a, ab.map((x) => x * u))));
    };
    function goal(fr) {
      if (target.abs) return target.abs;
      const [fin, j, off] = target.rel;
      return add(fr.fingers[fin][j], off);
    }
    // Sum over rigs; `frame` and the reported tip error come from the worst rig.
    function cost(v) {
      let total = 0, worst = -1;
      for (const r of m._rigs) {
        rig = r;
        h = r.vrm.humanoid;
        const c = rigCost(v);
        total += c;
        if (c > worst) { worst = c; worstRig = r; }
      }
      return total;
    }
    let worstRig = null;
    function rigCost(v) {
      const fr = setThumb(v);
      frame = fr;
      const g = goal(fr);
      const tip = fr.thumb[3];
      let c = len(sub(tip, g)) ** 2 * 10;
      // Keep the thumb out of the fingers and the palm. Tip may touch its target finger.
      // Centre-to-centre clearance between thumb and finger bones: two finger radii.
      const R = target.r ?? 0.19;
      const touch = target.rel && !target.solid ? target.rel[0] : null;
      const samples = [];
      for (let i = 1; i < 4; i++) {
        for (const u of [0, 0.5]) {
          if (i === 3 && u === 0.5) continue;
          samples.push({ p: add(fr.thumb[i], sub(fr.thumb[Math.min(i + 1, 3)], fr.thumb[i]).map((x) => x * u)), tip: i === 3 });
        }
      }
      for (const s of samples) {
        for (const [fin, pts] of Object.entries(fingers(fr))) {
          if (s.tip && fin === touch) continue;
          for (let k = 0; k < 3; k++) {
            const d = segDist(s.p, pts[k], pts[k + 1]);
            if (d < R) c += 4 * (R - d) ** 2 / (R * R);
          }
        }
        const [pf, pa, pn] = s.p;
        if (pf > 0.15 && pf < 1.0 && pa > -0.55 && pa < 0.35 && pn < 0.12) c += 4 * ((0.12 - pn) / 0.12) ** 2;
      }
      const lim = (x, lo, hi) => (x < lo ? (lo - x) ** 2 : x > hi ? (x - hi) ** 2 : 0);
      c += 3 * (lim(v[0], -0.6, 1.4) + lim(v[1], -1.4, 1.0) + lim(v[2], -0.6, 1.4) + lim(v[3], -0.3, 1.3) + lim(v[4], -0.5, 1.0) + lim(v[5], -0.2, 1.4) + lim(v[6], -0.5, 0.8));
      c += 0.01 * v.reduce((s, x) => s + x * x, 0);
      return c;
    }
    function fingers(fr) { return fr.fingers; }
    function nm(x0) {
      const n = x0.length;
      let S = [x0]; for (let i = 0; i < n; i++) { const x = [...x0]; x[i] += 0.4; S.push(x); }
      let V = S.map(cost);
      for (let it = 0; it < 700; it++) {
        const o = V.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]).map((p) => p[1]); S = o.map((i) => S[i]); V = o.map((i) => V[i]);
        const c = Array(n).fill(0); for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) c[j] += S[i][j] / n;
        const xr = c.map((cj, j) => 2 * cj - S[n][j]); const fr = cost(xr);
        if (fr < V[0]) { const xe = c.map((cj, j) => 3 * cj - 2 * S[n][j]); const fe = cost(xe); if (fe < fr) { S[n] = xe; V[n] = fe; } else { S[n] = xr; V[n] = fr; } }
        else if (fr < V[n - 1]) { S[n] = xr; V[n] = fr; }
        else { const xc = c.map((cj, j) => 0.5 * (cj + S[n][j])); const fc = cost(xc);
          if (fc < V[n]) { S[n] = xc; V[n] = fc; } else { for (let i = 1; i <= n; i++) { S[i] = S[i].map((x, j) => 0.5 * (x + S[0][j])); V[i] = cost(S[i]); } } }
      }
      return { x: S[0], v: V[0] };
    }
    const seeds = [[0, 0, 0, 0, 0, 0, 0], [0.3, -0.6, 0.3, 0.4, 0.2, 0.3, 0], [0.5, -1.0, 0.6, 0.6, 0.3, 0.5, 0], [0.1, -0.3, 0.1, 0.1, 0, 0.1, 0], [0.6, 0.2, 0.8, 0.5, 0.4, 0.4, 0]];
    let best = null;
    for (const s of seeds) { let r = nm(s); r = nm(r.x); if (!best || r.v < best.v) best = r; }
    cost(best.x);
    rig = worstRig; h = rig.vrm.humanoid;
    rigCost(best.x);
    const g = goal(frame);
    const r3 = (a) => a.map((x) => +x.toFixed(3));
    return { cost: +best.v.toFixed(4), tipErr: +len(sub(frame.thumb[3], g)).toFixed(3), tip: r3(frame.thumb[3]), goal: r3(g), v: r3(best.x) };
  }, { clip, target });
  const [v0, v1, v2, v3, v4, v5, v6] = r.v;
  const key = /^[A-Za-z_]\w*$/.test(shape) ? shape : JSON.stringify(shape);
  console.log(`  ${key}: [[${v0}, ${v1}, ${v2}], [${v3}, 0, ${v4}], [${v5}, 0, ${v6}]],  // tip off by ${r.tipErr}`);
}
await browser.close();

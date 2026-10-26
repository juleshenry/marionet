/**
 * Fit arm and hand rotations on the sample VRM for the tables in src/library.js that the
 * compiler cannot work out without an avatar: where each location puts the hand, how two
 * hands share a location, which way a named palm orientation faces at each location, and
 * the path a hand travels for a movement.
 *
 * Every job compiles a SignDesc with the live compiler, holds its pose, then searches
 * offsets (upperArm xyz, lowerArm y, hand xyz) that put the hand where the job asks while
 * the palm and fingers face where the job asks. Offsets add to the held pose, the same way
 * the compiler merges poses. Targets on the body come from raycasting the avatar.
 *
 * World axes: +x the signer's left, +y up, +z toward the viewer. Metres. Right hand.
 *
 * Usage: python3 -m http.server 8765 &
 *   node scripts/fit_arm.mjs where                       where each location puts the hand now
 *   node scripts/fit_arm.mjs measure <location> [orientation] [handshape]
 *   node scripts/fit_arm.mjs shot <out.png> '<dominant fields JSON, may include "handed">'
 *   node scripts/fit_arm.mjs locations [loc ...]         → LOCATION_POSES rows (orient and paths take the same filter)
 *   node scripts/fit_arm.mjs two-hand                    → LOCATION_POSES_2H, weak-hand, forearm
 *   node scripts/fit_arm.mjs orient                      → LOCATION_ORIENTATION
 *   node scripts/fit_arm.mjs paths                       → LOCATION_PATHS
 *   node scripts/fit_arm.mjs fs-turn                     → FS_ORIENTATION "palm-in" (C, O)
 * Run them in that order: each later table is fitted on top of the earlier ones.
 *
 *   node scripts/fit_arm.mjs jobs [--ids a,b] [--refit]  → src/fitted.js
 * fits what the signs of the non-deferred packs need that is not fitted yet (compile.js fitJobs:
 * a palm and fingers turned, a part of the hand touching, a directed path, tap, nod or twist),
 * and drops the rows no sign needs any more.
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { fitJobs } from "../src/compile.js";
import { FITTED, FITTED_NOTES } from "../src/fitted.js";
import { awayFrom } from "../src/library.js";
import { packSigns } from "../src/lexicon.js";

const baseUrl = process.env.MARIONET_URL || "http://127.0.0.1:8765";
const [mode = "where", ...rest] = process.argv.slice(2);

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 600, height: 760 } });

// --- runs in the page ---------------------------------------------------------------------

async function installFitter() {
  const m = window.marionet;
  const h = m.vrm.humanoid;
  const THREE = await import("three");
  const vrmMod = await import("./src/vrm.js");
  const compileMod = await import("./src/compile.js");
  const library = await import("./src/library.js");
  const V = THREE.Vector3;
  const P = (n) => h.getRawBoneNode(n).getWorldPosition(new V());
  const N = (n) => h.getNormalizedBoneNode(n);
  const tip = (side, finger) => {
    const d = h.getRawBoneNode(`${side}${finger}Distal`);
    return (d.children[0] ?? d).getWorldPosition(new V());
  };

  const frame = (side) => {
    const w = P(`${side}Hand`), mm = P(`${side}MiddleProximal`), im = P(`${side}IndexProximal`), lm = P(`${side}LittleProximal`);
    const f = mm.clone().sub(w).normalize();
    const a = im.clone().sub(lm);
    a.sub(f.clone().multiplyScalar(a.dot(f))).normalize();
    // Right hand: palm = a × f. The left hand is its mirror image.
    const palm = side === "right" ? a.clone().cross(f) : f.clone().cross(a);
    const center = w.clone().lerp(mm, 0.6);
    palm.normalize();
    // The parts of the hand a sign can touch with (ir.js SITES).
    const tips = ["Index", "Middle", "Ring"].map((d) => tip(side, d));
    const sites = {
      index: tips[0],
      thumb: tip(side, "Thumb"),
      fingertips: tips[0].clone().add(tips[1]).add(tips[2]).multiplyScalar(1 / 3),
      palm: center.clone().addScaledVector(palm, 0.012),
      back: center.clone().addScaledVector(palm, -0.012),
      "pinky-side": lm.clone().lerp(w, 0.4),
    };
    return { f, palm, center, index: tips[0], sites, wrist: w, elbow: P(`${side}LowerArm`) };
  };

  function held(desc, t = 0.4) {
    const clip = compileMod.compileSignDesc(desc);
    const pose = {};
    for (const [bone, keys] of Object.entries(clip.bones)) pose[bone] = (keys.find((k) => k[0] >= t - 1e-6) ?? keys.at(-1))[1];
    return pose;
  }

  function apply(pose, side, d) {
    // Stop the player's own clip, which its render loop would re-apply over this pose.
    m.clip = null;
    m.playing = false;
    vrmMod.restorePose(m.vrm, m.rest);
    // Sum held pose and offsets first, then add once to the rest pose, as applyClip does.
    // Adding in two passes is not the same: setting the quaternion re-derives the euler
    // in canonical form, which flips an elbow bent past 90°.
    const sum = {};
    for (const [bone, e] of Object.entries(pose ?? {})) sum[bone] = [...e];
    if (d) {
      const s = side === "right" ? 1 : -1;
      // Offsets are written for the right side; y and z mirror for the left, as in the library.
      const add = { UpperArm: [d[0], d[1] * s, d[2] * s], LowerArm: [0, d[3] * s, 0], Hand: [d[4], d[5] * s, d[6] * s] };
      for (const [b, e] of Object.entries(add)) {
        const prev = sum[`${side}${b}`] ?? [0, 0, 0];
        sum[`${side}${b}`] = prev.map((x, i) => x + e[i]);
      }
    }
    for (const [bone, e] of Object.entries(sum)) {
      const n = N(bone);
      if (!n) continue;
      n.rotation.x += e[0]; n.rotation.y += e[1]; n.rotation.z += e[2];
      n.quaternion.setFromEuler(n.rotation);
    }
    m.vrm.update(0);
    m.vrm.scene.updateMatrixWorld(true);
  }

  function nelderMead(cost, x0, step = 0.2, iters = 900) {
    const n = x0.length;
    let S = [x0];
    for (let i = 0; i < n; i++) { const x = [...x0]; x[i] += step; S.push(x); }
    let F = S.map(cost);
    for (let it = 0; it < iters; it++) {
      const o = F.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]).map((p) => p[1]);
      S = o.map((i) => S[i]); F = o.map((i) => F[i]);
      const c = Array(n).fill(0);
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) c[j] += S[i][j] / n;
      const xr = c.map((cj, j) => 2 * cj - S[n][j]); const fr = cost(xr);
      if (fr < F[0]) { const xe = c.map((cj, j) => 3 * cj - 2 * S[n][j]); const fe = cost(xe); if (fe < fr) { S[n] = xe; F[n] = fe; } else { S[n] = xr; F[n] = fr; } }
      else if (fr < F[n - 1]) { S[n] = xr; F[n] = fr; }
      else {
        const xc = c.map((cj, j) => 0.5 * (cj + S[n][j])); const fc = cost(xc);
        if (fc < F[n]) { S[n] = xc; F[n] = fc; }
        else for (let i = 1; i <= n; i++) { S[i] = S[i].map((x, j) => 0.5 * (x + S[0][j])); F[i] = cost(S[i]); }
      }
    }
    return { x: S[0], v: F[0] };
  }

  const r3 = (a) => a.map((x) => +x.toFixed(3));
  const ortho = (f, p) => {
    const fh = new V(...f).normalize();
    const ph = new V(...p).normalize();
    return [fh, ph.sub(fh.clone().multiplyScalar(ph.dot(fh))).normalize()];
  };

  window.fitter = {
    /** First point on the avatar (rest pose) along a ray: from the front at (x, y), or from the right side at (y, z). */
    surface(a, b, from = "front") {
      apply(null, "right", null);
      const origin = from === "front" ? new V(a, b, 1) : new V(-1, a, b);
      const dir = from === "front" ? new V(0, 0, -1) : new V(1, 0, 0);
      const hit = new THREE.Raycaster(origin, dir).intersectObject(m.vrm.scene, true).find((x) => x.object.isMesh);
      return hit ? r3(hit.point.toArray()) : null;
    },
    landmarks() {
      apply(null, "right", null);
      const out = {};
      for (const b of ["hips", "spine", "chest", "upperChest", "neck", "head", "leftEye", "rightEye", "rightUpperArm"]) {
        const n = h.getRawBoneNode(b);
        if (n) out[b] = r3(n.getWorldPosition(new V()).toArray());
      }
      return out;
    },
    /** The library's current eulers for a location (right side). */
    current(location, twoHanded = false) {
      const pose = library.solveLocation(location, "right", { twoHanded });
      const g = (b) => { const e = pose[`right${b}`] ?? { x: 0, y: 0, z: 0 }; return [e.x, e.y, e.z]; };
      return { Shoulder: g("Shoulder"), UpperArm: g("UpperArm"), LowerArm: g("LowerArm"), Hand: g("Hand") };
    },
    measure(desc, side = "right") {
      apply(held(desc), side, null);
      const fr = frame(side);
      return { f: r3(fr.f.toArray()), palm: r3(fr.palm.toArray()), center: r3(fr.center.toArray()), index: r3(fr.index.toArray()), wrist: r3(fr.wrist.toArray()), elbow: r3(fr.elbow.toArray()) };
    },
    async shot(desc) {
      const pose = held(desc);
      apply(pose, "right", null);
      if (m.controls) m.controls.enableDamping = false;
      m.frameDemoCamera?.();
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      apply(pose, "right", null);
      await new Promise((r) => requestAnimationFrame(r));
      return document.querySelector("#app canvas").toDataURL("image/png");
    },
    /**
     * job: { desc, goals: [{ target: [x,y,z] } | { offset: [dx,dy,dz] } | {}], point: "center" | "index",
     *        fingers?, palm?  (world directions; default: as held), handOnly?, wOrient?,
     *        elbowDrop? (how far below the shoulder the elbow stays; default 0.1 m) }
     * One 7-vector of offsets per goal, each fitted from the previous one.
     */
    fit(job) {
      const side = "right";
      const pose = held(job.desc);
      apply(pose, side, null);
      const base = frame(side);
      const [fT, pT] = job.fingers ? ortho(job.fingers, job.palm) : [base.f, base.palm];
      const lower0 = pose.rightLowerArm?.[1] ?? 0;
      apply(null, side, null);
      const shoulder = P("rightUpperArm");
      apply(pose, side, null);
      const wO = job.wOrient ?? 4;
      const out = [];
      let x0 = [0, 0, 0, 0, 0, 0, 0];
      for (const g of job.goals) {
        const at = (fr) => (job.point === "center" ? fr.center : fr.sites[job.point]);
        const goal = g.target ? new V(...g.target) : g.offset ? at(base).clone().add(new V(...g.offset)) : null;
        // A goal can turn the hand from how it is held: flex (fingers toward the palm, about the
        // knuckles' axis) or twist (palm and fingers about the forearm).
        let [fG, pG] = [fT, pT];
        if (g.turn) {
          const axis = g.turn.kind === "twist" ? base.wrist.clone().sub(base.elbow).normalize() : fT.clone().cross(pT).normalize();
          const sign = g.turn.kind === "twist" ? 1 : -1;
          fG = fT.clone().applyAxisAngle(axis, sign * g.turn.angle);
          pG = pT.clone().applyAxisAngle(axis, sign * g.turn.angle);
        }
        const cost = (v) => {
          const d = job.handOnly ? [0, 0, 0, 0, v[4], v[5], v[6]] : v;
          apply(pose, side, d);
          const fr = frame(side);
          let c = goal ? (at(fr).distanceTo(goal) / 0.01) ** 2 : 0;
          c += wO * (fr.palm.angleTo(pG) ** 2 + fr.f.angleTo(fG) ** 2);
          const over = (x, lo, hi) => (x < lo ? (lo - x) ** 2 : x > hi ? (x - hi) ** 2 : 0);
          c += 4 * (over(d[4], -1.6, 1.6) + over(d[5], -1.0, 1.0) + over(d[6], -1.2, 1.2));
          c += 10 * over(lower0 + d[3], 0.05, 2.5); // elbow bends one way only
          // A resting elbow: well below the shoulder (less so for a hand above the eyes) and not flared out past it.
          c += (Math.max(0, fr.elbow.y - (shoulder.y - (job.elbowDrop ?? 0.1))) / 0.01) ** 2 + (Math.max(0, shoulder.x - 0.05 - fr.elbow.x) / 0.01) ** 2;
          // ...and outside the torso: in front of the chest wherever it is within the body's width.
          const inside = (q) => (Math.abs(q.x) < 0.13 ? Math.max(0, 0.07 - q.z) / 0.01 : 0) ** 2;
          c += inside(fr.elbow) + inside(fr.elbow.clone().lerp(fr.wrist, 0.5));
          c += 0.2 * (d[4] ** 2 + d[5] ** 2 + d[6] ** 2) * (job.handOnly ? 0.05 : 1) + 0.03 * (d[0] ** 2 + d[1] ** 2 + d[2] ** 2 + d[3] ** 2);
          return c;
        };
        let best = null;
        const seeds = job.handOnly ? [x0, [0, 0, 0, 0, 0, 0, 0]] : [x0, [0, 0, 0, 0, 0, 0, 0], [-0.8, 0, 0, -0.3, 0, 0, 0], [-1.5, 0.3, 0, -0.5, 0, 0, 0], [0.4, 0, 0.3, 0.4, 0, 0, 0]];
        for (const seed of seeds) {
          let r = nelderMead(cost, seed);
          r = nelderMead(cost, r.x, 0.05);
          if (!best || r.v < best.v) best = r;
        }
        const d = job.handOnly ? [0, 0, 0, 0, ...best.x.slice(4)] : best.x;
        apply(pose, side, d);
        const fr = frame(side);
        out.push({
          d: r3(d),
          errCm: goal ? +(at(fr).distanceTo(goal) * 100).toFixed(2) : 0,
          palmDeg: +(fr.palm.angleTo(pG) * 57.3).toFixed(1),
          fingDeg: +(fr.f.angleTo(fG) * 57.3).toFixed(1),
        });
        x0 = best.x;
      }
      return out;
    },
  };
}

// --- jobs ---------------------------------------------------------------------------------

const sd = (location, extra = {}, handed = "1h") => ({
  schema: "marionet.signdesc/v0", id: `fit/${location}`, language: "ase", gloss: "FIT", spoken: [], handed,
  dominant: { handshape: "B", location, movement: [], ...extra }, compileReady: true,
});

// Default hands (right side): fingers, palm. Palm-toward-face for contact at the front of the
// face; palm-toward-the-head for the sides; palms facing each other in neutral space.
const FACE = { fingers: [0.45, 0.85, -0.2], palm: [0.5, -0.05, -0.86] };
// Forehead and eye: fingers come in from the side so the hand does not cover the face.
const BROW = { fingers: [0.8, 0.5, -0.3], palm: [0.35, -0.15, -0.92] };
const SIDE = { fingers: [0.05, 1, -0.15], palm: [0.75, 0, -0.65] };
const CHEST = { fingers: [0.75, 0.6, 0.15], palm: [0.15, -0.05, -0.99] };
const BELLY = { fingers: [0.85, 0.15, 0.4], palm: [0.35, 0, -0.94] };
const NEUTRAL = { fingers: [0.3, 0.25, 0.92], palm: [0.95, 0, -0.3] };
const BASE = { fingers: [0.45, 0, 0.9], palm: [0, 1, 0] };
const ON_BASE = { fingers: [0.5, 0, 0.87], palm: [0, -1, 0] };
const SHOULDER = { fingers: [0.35, 0.45, -0.82], palm: [0.3, -0.9, 0.2], wOrient: 1 };

async function locationJobs() {
  const lm = await page.evaluate(() => window.fitter.landmarks());
  const eye = lm.rightEye[1];
  const front = async (x, y, gap) => {
    const p = await page.evaluate(([x, y]) => window.fitter.surface(x, y, "front"), [x, y]);
    if (!p) throw new Error(`no surface at ${x}, ${y}`);
    return [p[0], p[1], +(p[2] + gap).toFixed(3)];
  };
  const fromRight = async (y, z, gap) => {
    const p = await page.evaluate(([y, z]) => window.fitter.surface(y, z, "right"), [y, z]);
    if (!p) throw new Error(`no surface at y ${y}`);
    return [+(p[0] - gap).toFixed(3), p[1], p[2]];
  };
  // The index fingertip touches a point on the face or body; centred locations hold the
  // hand a set distance in front of the body.
  return [
    { location: "forehead", point: "index", target: await front(-0.012, eye + 0.045, 0.012), ...BROW },
    { location: "eye", point: "index", target: await front(-0.03, eye + 0.004, 0.025), ...BROW },
    { location: "nose", point: "index", target: await front(-0.004, eye - 0.03, 0.012), ...FACE },
    { location: "cheek", point: "index", target: await front(-0.046, eye - 0.035, 0.01), ...SIDE },
    { location: "mouth", point: "index", target: await front(-0.004, eye - 0.058, 0.012), ...FACE },
    { location: "chin", point: "index", target: await front(0, eye - 0.085, 0.012), ...FACE },
    { location: "neck", point: "index", target: await front(0, lm.neck[1] + 0.005, 0.015), ...FACE },
    { location: "head", point: "index", target: await front(-0.06, eye + 0.03, 0.012), ...SIDE },
    { location: "ear", point: "index", target: await fromRight(eye - 0.015, -0.01, 0.012), ...SIDE },
    { location: "shoulder", point: "index", target: await front(-0.085, lm.rightUpperArm[1] - 0.02, 0.015), ...SHOULDER },
    // The chest itself (ME, MY, PLEASE): the fingertip on it, where chest-front holds the hand 7 cm off.
    { location: "chest", point: "index", target: await front(-0.025, 1.17, 0.012), ...CHEST },
    { location: "chest-front", point: "center", target: await front(-0.025, 1.17, 0.07), ...CHEST },
    { location: "belly", point: "center", target: await front(-0.03, 0.99, 0.05), ...BELLY },
    { location: "neutral-space", point: "center", target: await front(-0.06, 1.13, 0.2), ...NEUTRAL },
    { location: "base-hand", point: "center", target: await front(-0.07, 1.1, 0.18), ...BASE },
  ];
}

// --- fitted rows for what the signs use (mode jobs) ------------------------------------------

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
// Where the index fingertip touches (as in locationJobs); elsewhere the hand centre is held.
const AT_INDEX = new Set(["forehead", "eye", "nose", "cheek", "mouth", "chin", "neck", "head", "ear", "shoulder", "chest"]);
// From the signer, right hand: +x is the signer's left (across the body), +z toward the viewer.
const UNIT = { out: [0, 0, 1], in: [0, 0, -1], up: [0, 1, 0], down: [0, -1, 0], contra: [1, 0, 0], ipsi: [-1, 0, 0] };
const PATH_CM = 7;
const TAP_CM = 2.5;
const vec = (dir) => {
  const v = dir.split("+").reduce((a, p) => a.map((x, i) => x + UNIT[p][i]), [0, 0, 0]);
  const n = Math.hypot(...v);
  return v.map((x) => x / n);
};
const add = (...vs) => vs.reduce((a, v) => a.map((x, i) => x + v[i]), [0, 0, 0]);
const mul = (v, k) => v.map((x) => x * k);
const handed = (job) => (job.twoHanded ? "2h-symmetric" : "1h");
const pointOf = (location) => (AT_INDEX.has(location) ? "index" : "center");
// The hold as SignDesc fields: handshape, a named orientation or palm and fingers, a site.
const holdFields = (h, { site = true } = {}) => ({
  handshape: h.handshape ?? "B",
  ...(h.orientation ? { orientation: h.orientation } : {}),
  ...(h.palm ? { palm: h.palm, fingers: h.fingers } : {}),
  ...(h.offset ? { offset: h.offset } : {}),
  ...(site && h.site ? { site: h.site } : {}),
});

// Holding the hand above the eyes (FATHER's thumb on the forehead, TEACH by the temples) lifts the elbow.
const HIGH = new Set(["forehead", "head"]);

/** What fit() is asked for one job of compile.js fitJobs. */
async function fitSpec(job) {
  const spec = await specOf(job);
  return HIGH.has(job.hold.location) ? { ...spec, elbowDrop: 0.02 } : spec;
}

async function specOf(job) {
  const loc = job.hold.location;
  // Held off the location: the contact point moved by the hold's offset (centimetres per direction).
  const off = add(...Object.entries(job.hold.offset ?? {}).map(([d, cm]) => mul(UNIT[d], cm / 100)), [0, 0, 0]);
  if (job.kind === "turn") {
    // The contact point stays where the location holds it, or moves by the offset; the palm and fingers turn.
    return { desc: sd(loc, {}, handed(job)), point: pointOf(loc), goals: [{ offset: off }], fingers: vec(job.hold.fingers), palm: vec(job.hold.palm) };
  }
  if (job.kind === "site") {
    // The named part of this hand goes where the location's contact point is (moved by the offset),
    // the palm and fingers as the form says, where a turn alone (the index on the spot) could not.
    const natural = await page.evaluate((d) => window.fitter.measure(d), sd(loc, {}, handed(job)));
    const target = add(pointOf(loc) === "index" ? natural.index : natural.center, off);
    const facing = job.hold.palm ? { fingers: vec(job.hold.fingers), palm: vec(job.hold.palm) } : {};
    return { desc: sd(loc, holdFields(job.hold, { site: false }), handed(job)), point: job.hold.site, goals: [{ target }], ...facing };
  }
  const desc = sd(loc, holdFields(job.hold), handed(job));
  const point = job.hold.site ?? pointOf(loc);
  const [type, dir] = job.move.split(":");
  // Along the face and chest, a path keeps 1.5 cm off the skin.
  const lift = AT_INDEX.has(loc) && !dir?.includes("out") ? [0, 0, 0.015] : [0, 0, 0];
  if (type === "linear") return { desc, point, goals: [{ offset: add(mul(vec(dir), PATH_CM / 100), lift) }] };
  if (type === "arc") {
    const v = vec(dir);
    // An arc bows up, or out from the body when it goes up or down.
    const bow = Math.abs(v[1]) > 0.7 ? [0, 0, 1] : [0, 1, 0];
    const mid = add(mul(v, PATH_CM / 200), mul(bow, 0.02), lift);
    return { desc, point, goals: [{ offset: mid }, { offset: add(mul(v, PATH_CM / 100), lift) }] };
  }
  if (type === "tap") return { desc, point, goals: [{ offset: mul(vec(awayFrom(loc)), TAP_CM / 100) }] };
  if (type === "nod") return { desc, point, handOnly: true, goals: [{ turn: { kind: "flex", angle: 0.6 } }] };
  if (type === "twist") return { desc, point, handOnly: true, goals: [{ turn: { kind: "twist", angle: 0.8 } }, { turn: { kind: "twist", angle: -0.8 } }] };
  throw new Error(`no fit for ${job.move}`);
}

function writeFitted(rows, notes) {
  const keys = Object.keys(rows).sort();
  const body = keys.map((k) => `  // ${notes[k] ?? ""}\n  ${JSON.stringify(k)}: [\n${rows[k].map((r) => `    ${r},`).join("\n")}\n  ],`).join("\n");
  const noteRows = keys.map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(notes[k] ?? "")},`).join("\n");
  const text = readFileSync(join(root, "src/fitted.js"), "utf8").split("export const FITTED = ")[0]
    + `export const FITTED = {\n${body}\n};\n\n/** How close each fit came. */\nexport const FITTED_NOTES = {\n${noteRows}\n};\n`;
  writeFileSync(join(root, "src/fitted.js"), text);
}

const fmt = (a) => `[${a.map((x) => +x.toFixed(3)).join(", ")}]`;
const row = (d) => `{ UpperArm: ${fmt(d.slice(0, 3))}, LowerArm: [0, ${d[3]}, 0], Hand: ${fmt(d.slice(4, 7))} }`;

async function fitLocation(job, twoHanded = false) {
  const desc = sd(job.location, {}, twoHanded ? "2h-symmetric" : "1h");
  const [r] = await page.evaluate((j) => window.fitter.fit(j), { ...job, desc, goals: [{ target: job.target }] });
  const cur = await page.evaluate(([l, t]) => window.fitter.current(l, t), [job.location, twoHanded]);
  const d = r.d;
  const upper = cur.UpperArm.map((x, i) => x + d[i]);
  const lower = [cur.LowerArm[0], cur.LowerArm[1] + d[3], cur.LowerArm[2]];
  const hand = cur.Hand.map((x, i) => x + d[4 + i]);
  console.log(`  // ${job.point} ${r.errCm} cm off, palm ${r.palmDeg}°, fingers ${r.fingDeg}°`);
  console.log(`  ${JSON.stringify(job.key ?? job.location)}: (side, s) =>\n    arm(side, s, ${fmt(upper)}, ${fmt(lower)}, ${fmt(hand)}, ${fmt(cur.Shoulder)}),`);
}

await page.route("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/**", async (route) => {
  // jsdelivr's /gh/ route for the sample VRM is flaky; the same file is on raw.githubusercontent.
  const url = route.request().url().replace("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/", "https://raw.githubusercontent.com/pixiv/three-vrm/release/");
  await route.fulfill({ response: await route.fetch({ url }) });
});
// No cached modules: mode jobs reloads the player to pick up the rows it has just written.
await (await page.context().newCDPSession(page)).send("Network.setCacheDisabled", { cacheDisabled: true });
async function openPlayer() {
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForFunction(() => window.marionet?.vrm && window.marionet?.rest, null, { timeout: 90000 });
  await page.evaluate(installFitter);
}
await openPlayer();

try {
  if (mode === "where") {
    console.log("landmarks", JSON.stringify(await page.evaluate(() => window.fitter.landmarks())));
    for (const l of ["fs-station", "neutral-space", "chest-front", "belly", "shoulder", "neck", "head", "forehead", "eye", "nose", "cheek", "mouth", "chin", "ear", "forearm", "weak-hand", "base-hand"]) {
      console.log(l.padEnd(14), JSON.stringify(await page.evaluate((d) => window.fitter.measure(d), sd(l))));
    }
  } else if (mode === "measure") {
    const [location = "chest-front", orientation, handshape = "B"] = rest;
    const d = sd(location, { handshape, ...(orientation ? { orientation } : {}) });
    console.log(location, orientation ?? "(natural)", handshape, JSON.stringify(await page.evaluate((d) => window.fitter.measure(d), d)));
  } else if (mode === "shot") {
    const [out, json = "{}"] = rest;
    const extra = JSON.parse(json);
    const { handed = "1h", ...dom } = extra;
    const png = await page.evaluate((d) => window.fitter.shot(d), sd(dom.location ?? "neutral-space", dom, handed));
    writeFileSync(out, Buffer.from(png.split(",")[1], "base64"));
    console.log(out);
  } else if (mode === "two-hand") {
    // Near the midline both hands would land on one spot: each keeps to its own side.
    const jobs = await locationJobs();
    const shift = { "neutral-space": -0.1, "chest-front": -0.075, belly: -0.075, forehead: -0.045, nose: -0.04, mouth: -0.04, chin: -0.04, neck: -0.045 };
    // Flat hands at the chest and belly point up when there are two, or the fingertips meet.
    const upright = { fingers: [0.3, 0.92, 0.1], palm: [0.15, -0.05, -0.99] };
    console.log("const LOCATION_POSES_2H = {");
    for (const job of jobs.filter((j) => j.location in shift)) {
      const turn = job.location === "chest-front" || job.location === "belly" ? upright : {};
      await fitLocation({ ...job, ...turn, target: [shift[job.location], job.target[1], job.target[2]] }, true);
    }
    console.log("};");
    // The dominant hand acting on the waiting non-dominant hand (base-hand, mirrored to the left).
    const base = await page.evaluate((d) => window.fitter.measure(d), sd("base-hand"));
    const mirror = (p) => [-p[0], p[1], p[2]];
    const leftCenter = mirror(base.center);
    const leftForearm = mirror(base.wrist.map((x, i) => (x + base.elbow[i]) / 2));
    await fitLocation({ location: "weak-hand", point: "center", target: [leftCenter[0] - 0.01, leftCenter[1] + 0.055, leftCenter[2]], ...ON_BASE });
    await fitLocation({ location: "forearm", point: "center", target: [leftForearm[0], leftForearm[1] + 0.05, leftForearm[2]], ...ON_BASE, fingers: [0.75, 0, 0.65] });
  } else if (mode === "orient") {
    // Each named orientation at each location: the contact point stays put, the palm turns.
    const ORIENT = {
      "palm-out": { fingers: [0.1, 1, 0], palm: [0.15, 0, 1] },
      "palm-in": { fingers: [0.1, 1, 0], palm: [0.15, 0, -1] },
      "palm-down": { fingers: [0.3, 0, 1], palm: [0, -1, 0] },
      "palm-up": { fingers: [0.3, 0, 1], palm: [0, 1, 0] },
      "palm-side": { fingers: [0.15, 0.2, 1], palm: [1, 0, -0.1] },
    };
    // Where the fingertip touches the body, fingers cannot point forward (into the head):
    // palm-down and palm-up point them across toward the midline, palm-side points them up.
    const AT_CONTACT = {
      ...ORIENT,
      "palm-down": { fingers: [1, 0, -0.2], palm: [0, -1, 0] },
      "palm-up": { fingers: [1, 0, -0.2], palm: [0, 1, 0] },
      "palm-side": { fingers: [0.1, 1, 0], palm: [1, 0, 0] },
    };
    const points = Object.fromEntries((await locationJobs()).map((j) => [j.location, j.point]));
    const locs = [...Object.keys(points), "weak-hand", "forearm"].filter((l) => !rest.length || rest.includes(l));
    console.log("const LOCATION_ORIENTATION = {");
    for (const loc of locs) {
      console.log(`  ${JSON.stringify(loc)}: {`);
      for (const [name, dirs] of Object.entries(points[loc] === "index" ? AT_CONTACT : ORIENT)) {
        const [r] = await page.evaluate((j) => window.fitter.fit(j), { desc: sd(loc), goals: [{ offset: [0, 0, 0] }], point: points[loc] ?? "center", ...dirs });
        console.log(`    // ${r.errCm} cm off, palm ${r.palmDeg}°, fingers ${r.fingDeg}°`);
        console.log(`    ${JSON.stringify(name)}: ${row(r.d)},`);
      }
      console.log("  },");
    }
    console.log("};");
  } else if (mode === "fs-turn") {
    // C and O at the fingerspelling station, turned toward the midline so the shape reads.
    const [r] = await page.evaluate((j) => window.fitter.fit(j), {
      desc: sd("fs-station"), goals: [{}], point: "center", handOnly: true, fingers: [0.1, 1, 0.05], palm: [0.85, 0, 0.5],
    });
    console.log(`  // palm ${r.palmDeg}°, fingers ${r.fingDeg}°\n  "palm-in": { Hand: ${fmt(r.d.slice(4, 7))} },`);
  } else if (mode === "paths") {
    // Hand-centre paths from the held pose. Linear: a stroke forward. Arc: across toward the
    // midline, bowing up. Circle: in the body's plane, starting at its top, the last point
    // before the return. Near the face they lift off the skin a little.
    const points = Object.fromEntries((await locationJobs()).map((j) => [j.location, j.point]));
    const locs = Object.keys(points).filter((l) => l !== "base-hand").concat(["weak-hand", "forearm"]).filter((l) => !rest.length || rest.includes(l));
    console.log("const LOCATION_PATHS = {");
    for (const loc of locs) {
      const face = points[loc] === "index";
      const r = face ? 0.035 : 0.05;
      const lift = face ? 0.015 : 0;
      const circle = Array.from({ length: 7 }, (_, k) => {
        const a = Math.PI / 2 - (Math.PI / 4) * (k + 1);
        return [r * Math.cos(a), r * Math.sin(a) - r, lift];
      });
      const paths = {
        linear: [[0, 0, 0.07]],
        arc: [[0.035, 0.02, 0.01 + lift], [0.07, 0, 0.02 + lift]],
        circle,
      };
      console.log(`  ${JSON.stringify(loc)}: {`);
      for (const [type, offs] of Object.entries(paths)) {
        const rs = await page.evaluate((j) => window.fitter.fit(j), { desc: sd(loc), goals: offs.map((o) => ({ offset: o })), point: "center" });
        const worst = rs.reduce((a, x) => (x.errCm > a.errCm ? x : a));
        console.log(`    // worst point ${worst.errCm} cm off, palm ${worst.palmDeg}°`);
        console.log(`    ${type}: [\n      ${rs.map((x) => row(x.d)).join(",\n      ")},\n    ],`);
      }
      console.log("  },");
    }
    console.log("};");
  } else if (mode === "jobs") {
    const flag = (name) => rest.indexOf(`--${name}`);
    const ids = flag("ids") >= 0 ? new Set(rest[flag("ids") + 1].split(",")) : null;
    const refit = flag("refit") >= 0;
    const jobs = new Map();
    const needed = new Set();
    const packs = JSON.parse(readFileSync(join(root, "data/signs/index.json"), "utf8")).packs.filter((p) => !p.defer);
    for (const pack of packs) {
      for (const desc of packSigns(JSON.parse(readFileSync(join(root, pack.path), "utf8")))) {
        for (const job of fitJobs(desc)) {
          needed.add(job.key);
          if (ids && !ids.has(desc.id)) continue;
          if (refit || !(job.key in FITTED)) jobs.set(job.key, job);
        }
      }
    }
    // Rows no sign needs any more (its form was changed) are dropped.
    const kept = Object.entries(FITTED).filter(([k]) => needed.has(k));
    const rows = Object.fromEntries(kept.map(([k, rs]) => [k, rs.map((r) => `{ UpperArm: ${fmt(r.UpperArm)}, LowerArm: ${fmt(r.LowerArm)}, Hand: ${fmt(r.Hand)} }`)]));
    const notes = Object.fromEntries(kept.map(([k]) => [k, FITTED_NOTES[k]]));
    if (kept.length < Object.keys(FITTED).length) console.log(`${Object.keys(FITTED).length - kept.length} rows no sign needs, dropped`);
    // Turns first, then sites (held turned), then paths (from the turned, touching hand): the
    // page reloads between them so the compiler it runs holds the hands the new rows say.
    let fitted = 0;
    for (const kind of ["turn", "site", "path"]) {
      const todo = [...jobs.values()].filter((j) => j.kind === kind);
      if (!todo.length) continue;
      if (fitted) await openPlayer();
      console.log(`${todo.length} ${kind}s to fit`);
      for (const job of todo) {
        const rs = await page.evaluate((j) => window.fitter.fit(j), await fitSpec(job));
        const worst = rs.reduce((a, x) => (x.errCm > a.errCm ? x : a));
        const palm = Math.max(...rs.map((x) => x.palmDeg));
        const fing = Math.max(...rs.map((x) => x.fingDeg));
        rows[job.key] = rs.map((x) => row(x.d));
        notes[job.key] = `${job.kind === "path" ? "worst point" : "point"} ${worst.errCm} cm off, palm ${palm}°, fingers ${fing}°`;
        console.log(`  ${job.key}: ${notes[job.key]}`);
        writeFitted(rows, notes);
        fitted++;
      }
    }
  } else if (mode === "locations") {
    for (const job of await locationJobs()) if (!rest.length || rest.includes(job.location)) await fitLocation(job);
  } else {
    throw new Error(`unknown mode ${mode}`);
  }
} finally {
  await browser.close();
}

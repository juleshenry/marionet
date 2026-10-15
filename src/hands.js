import * as THREE from "three";

/**
 * Thumb retargeting. Clip thumb eulers are authored on the sample VRM, but VRM rigs build
 * the thumb differently: where the metacarpal starts and how long each segment is (MakeHuman
 * starts it 0.42 hand lengths from the wrist, the sample 0.28). The same eulers then put the
 * tip somewhere else, often inside the fingers.
 *
 * So the player asks where the clip's eulers put the sample's thumb joints, in the palm's
 * own frame and in hand lengths, and solves this avatar's thumb to reach the same places.
 * Fingers need no help: their joints line up across rigs.
 */

// Sample VRM (VRM1_Constraint_Twist_Sample), right hand, normalized T-pose offsets in metres:
// each bone's position in its parent; the knuckles are in the hand bone.
const REFERENCE = {
  meta: [-0.0035, -0.0104, 0.0157],
  prox: [-0.0354, -0.0028, 0.0302],
  dist: [-0.0226, -0.0014, 0.0176],
  index: [-0.0655, 0.0069, 0.0198],
  middle: [-0.0664, 0.0073, 0.0022],
  little: [-0.0611, 0.0081, -0.029],
};

const THUMB = ["ThumbMetacarpal", "ThumbProximal", "ThumbDistal"];

/** The hand's offsets for one side, mirrored to right-hand coordinates. */
function readHand(vrm, side) {
  const s = side === "right" ? 1 : -1;
  const pos = (bone) => {
    const node = vrm.humanoid.getNormalizedBoneNode(`${side}${bone}`);
    if (!node) return null;
    const p = node.position;
    return [p.x * s, p.y, p.z];
  };
  const hand = {
    meta: pos("ThumbMetacarpal"),
    prox: pos("ThumbProximal"),
    dist: pos("ThumbDistal"),
    index: pos("IndexProximal"),
    middle: pos("MiddleProximal"),
    little: pos("LittleProximal"),
  };
  return Object.values(hand).every(Boolean) ? hand : null;
}

/** Palm frame from the knuckles: f along the fingers, a toward the index, n out of the palm. */
function palmFrame(h) {
  const mid = new THREE.Vector3(...h.middle);
  const L = mid.length();
  const f = mid.clone().normalize();
  const a = new THREE.Vector3(...h.index).sub(new THREE.Vector3(...h.little));
  a.sub(f.clone().multiplyScalar(a.dot(f))).normalize();
  const n = a.clone().cross(f).normalize();
  return { f, a, n, L };
}

const _e = new THREE.Euler();
const _q = new THREE.Quaternion();

/** Thumb joints (proximal, distal, tip) in palm coordinates, for right-hand eulers. */
function thumbJoints(h, frame, eulers) {
  const q = new THREE.Quaternion();
  const p = new THREE.Vector3(...h.meta);
  const out = [];
  const offs = [h.prox, h.dist, h.dist.map((x) => x * 0.8)];
  for (let i = 0; i < 3; i++) {
    q.multiply(_q.setFromEuler(_e.set(...eulers[i])));
    p.add(new THREE.Vector3(...offs[i]).applyQuaternion(q));
    out.push([p.dot(frame.f) / frame.L, p.dot(frame.a) / frame.L, p.dot(frame.n) / frame.L]);
  }
  return out;
}

function nelderMead(cost, x0, step = 0.15, iters = 400) {
  const n = x0.length;
  let S = [x0];
  for (let i = 0; i < n; i++) {
    const x = [...x0];
    x[i] += step;
    S.push(x);
  }
  let F = S.map(cost);
  for (let it = 0; it < iters; it++) {
    const o = F.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]).map((p) => p[1]);
    S = o.map((i) => S[i]);
    F = o.map((i) => F[i]);
    const c = Array(n).fill(0);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) c[j] += S[i][j] / n;
    const xr = c.map((cj, j) => 2 * cj - S[n][j]);
    const fr = cost(xr);
    if (fr < F[0]) {
      const xe = c.map((cj, j) => 3 * cj - 2 * S[n][j]);
      const fe = cost(xe);
      if (fe < fr) [S[n], F[n]] = [xe, fe];
      else [S[n], F[n]] = [xr, fr];
    } else if (fr < F[n - 1]) [S[n], F[n]] = [xr, fr];
    else {
      const xc = c.map((cj, j) => 0.5 * (cj + S[n][j]));
      const fc = cost(xc);
      if (fc < F[n]) [S[n], F[n]] = [xc, fc];
      else for (let i = 1; i <= n; i++) {
        S[i] = S[i].map((x, j) => 0.5 * (x + S[0][j]));
        F[i] = cost(S[i]);
      }
    }
  }
  return S[0];
}

const same = (a, b) => Object.keys(REFERENCE).every((k) => a[k].every((x, i) => Math.abs(x - b[k][i]) < 1e-3));

/**
 * Per-avatar thumb retargeter, or null when the avatar's hand matches the sample's (no work).
 * `retarget(side, eulers)` takes the clip's three thumb eulers (as authored for that side)
 * and returns this avatar's.
 */
export function thumbRetargeter(vrm) {
  const refFrame = palmFrame(REFERENCE);
  const sides = {};
  for (const side of ["right", "left"]) {
    const h = readHand(vrm, side);
    if (!h || same(h, REFERENCE)) continue;
    sides[side] = { h, frame: palmFrame(h), cache: new Map() };
  }
  if (!Object.keys(sides).length) return null;

  return function retarget(side, eulers) {
    const t = sides[side];
    if (!t) return eulers;
    const s = side === "right" ? 1 : -1;
    // Left eulers mirror to right-hand ones (x, -y, -z) and back.
    const flip = (e) => e.map(([x, y, z]) => [x, y * s, z * s]);
    const key = eulers.flat().map((x) => x.toFixed(3)).join(",");
    let out = t.cache.get(key);
    if (!out) {
      const right = flip(eulers);
      const goal = thumbJoints(REFERENCE, refFrame, right);
      const weights = [0.3, 0.6, 1];
      const pack = (v) => [[v[0], v[1], v[2]], [v[3], right[1][1], v[4]], [v[5], right[2][1], v[6]]];
      const cost = (v) => {
        const got = thumbJoints(t.h, t.frame, pack(v));
        let c = 0;
        for (let i = 0; i < 3; i++) c += weights[i] * got[i].reduce((sum, x, k) => sum + (x - goal[i][k]) ** 2, 0);
        return c;
      };
      const x0 = [right[0][0], right[0][1], right[0][2], right[1][0], right[1][2], right[2][0], right[2][2]];
      let v = nelderMead(cost, x0);
      v = nelderMead(cost, v, 0.03);
      out = flip(pack(v));
      t.cache.set(key, out);
    }
    return out;
  };
}

export const THUMB_BONES = THUMB;

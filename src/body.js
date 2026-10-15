import * as THREE from "three";
import { SAMPLE_BODY } from "./sample_body.js";

/**
 * Arm retargeting. Locations are fitted on the sample VRM: an index fingertip a centimetre
 * off its chin, a hand a set distance in front of its chest. Other avatars are built
 * differently (the VRoid signers' heads sit about 2 cm further forward on the neck than the
 * sample's; the men stand taller, with wider shoulders), so the same eulers put a fingertip
 * inside the face or short of it.
 *
 * So the player measures points on this avatar's face and body, the same points the fits
 * aimed at, and for each keyframe: finds where the clip puts the sample's hand among the
 * sample's points, carries that place over to this avatar's points, and bends this arm to
 * put the hand there, facing the way it faced on the sample. The hand's point that comes
 * closest to the body (a fingertip on the chin, a knuckle on the chest, the palm in neutral
 * space) is the one placed; then the hand is lifted wherever another of its points would
 * sink into this avatar's skin.
 *
 * Coordinates are the avatar's own: metres, +x its left, +y up, +z its front, with the scene
 * unscaled and unmirrored. Rotations are clip eulers on top of the rest pose, as applyClip
 * adds them.
 */

export const REST_ARM = Math.PI * 0.47;

const SIDES = ["right", "left"];
const TORSO = ["hips", "spine", "chest", "upperChest", "neck", "head"];
const ARM = ["Shoulder", "UpperArm", "LowerArm", "Hand"];
const DIGITS = {
  Thumb: ["ThumbMetacarpal", "ThumbProximal", "ThumbDistal"],
  Index: ["IndexProximal", "IndexIntermediate", "IndexDistal"],
  Middle: ["MiddleProximal", "MiddleIntermediate", "MiddleDistal"],
  Ring: ["RingProximal", "RingIntermediate", "RingDistal"],
  Little: ["LittleProximal", "LittleIntermediate", "LittleDistal"],
};
const BONES = [...TORSO, ...SIDES.flatMap((s) => [...ARM, ...Object.values(DIGITS).flat()].map((b) => s + b))];

// The sample's face (eye line to chin) and torso (hips to neck), in metres: anchor offsets
// below are written for these and scale with the avatar's own.
const FACE = 0.095;
const TORSO_LEN = 0.405;

// Where the fits aimed, right side, from the eye line (x, y) in metres on the sample's face.
const FACE_POINTS = {
  forehead: [-0.012, 0.045],
  eye: [-0.03, 0.004],
  nose: [-0.004, -0.03],
  cheek: [-0.046, -0.035],
  mouth: [-0.004, -0.058],
  chin: [0, -0.085],
  head: [-0.06, 0.03],
};
const NEAR = 0.08; // a hand point within this of the body is the one placed
const SKIN = 0.008; // no hand point nearer the skin than this (a fingertip resting on it)
const TIP_BIAS = 0.01;
const MAX_LIFT = 0.03;
const EPS2 = 0.01 ** 2;

const V = THREE.Vector3;
const Q = THREE.Quaternion;
const _e = new THREE.Euler();
const ZERO = [0, 0, 0];

function restOf(name) {
  if (name === "rightUpperArm") return [0, 0, REST_ARM];
  if (name === "leftUpperArm") return [0, 0, -REST_ARM];
  return ZERO;
}

function localQ(name, e, out = new Q()) {
  const r = restOf(name);
  return out.setFromEuler(_e.set(e[0] + r[0], e[1] + r[1], e[2] + r[2]));
}

/** Each humanoid bone's parent and its offset from it, in the avatar's frame at T-pose. */
export function readSkeleton(vrm) {
  const h = vrm.humanoid;
  const rootQ = h.normalizedHumanBonesRoot.getWorldQuaternion(new Q());
  const nodes = new Map();
  for (const name of BONES) {
    const node = h.getNormalizedBoneNode(name);
    if (node) nodes.set(node, name);
  }
  const bones = {};
  for (const [node, name] of nodes) {
    let p = node.parent;
    while (p && !nodes.has(p)) p = p.parent;
    bones[name] = { parent: p ? nodes.get(p) : null, offset: node.position.clone().applyQuaternion(rootQ).toArray() };
  }
  return bones;
}

function order(bones) {
  const depth = (n) => (bones[n].parent ? 1 + depth(bones[n].parent) : 0);
  return Object.keys(bones).sort((a, b) => depth(a) - depth(b));
}

/** World rotation and position of every bone for clip eulers `eul` (bone → [x, y, z]). */
export function posed(skel, eul) {
  skel.order ??= order(skel.bones);
  const q = {};
  const p = {};
  for (const name of skel.order) {
    const b = skel.bones[name];
    const lq = localQ(name, eul[name] ?? ZERO);
    if (b.parent) {
      q[name] = q[b.parent].clone().multiply(lq);
      p[name] = new V(...b.offset).applyQuaternion(q[b.parent]).add(p[b.parent]);
    } else {
      q[name] = lq;
      p[name] = new V(...b.offset);
    }
  }
  return { q, p };
}

/** Points of one hand that may touch something: fingertips, middle knuckles, the palm. */
export function handPoints(skel, P, side) {
  const wrist = P.p[`${side}Hand`];
  const mid = P.p[`${side}MiddleProximal`];
  const pts = { palm: mid ? wrist.clone().lerp(mid, 0.6) : wrist.clone() };
  for (const [digit, chain] of Object.entries(DIGITS)) {
    const names = chain.map((b) => side + b);
    if (!names.every((n) => P.p[n])) continue;
    const last = names[2];
    // No end bone: the tip is 0.8 of the last segment past the distal joint.
    pts[digit] = new V(...skel.bones[last].offset).multiplyScalar(0.8).applyQuaternion(P.q[last]).add(P.p[last]);
    if (digit !== "Thumb") pts[`${digit}Knuckle`] = P.p[names[1]].clone();
  }
  return pts;
}

/** The anchors where the pose P has moved them, with their surface normals. */
function anchorsAt(body, skel, P) {
  return body.anchors.map((a) => ({
    p: new V(...a.local).applyQuaternion(P.q[a.bone]).add(P.p[a.bone]),
    n: new V(...a.normal).applyQuaternion(P.q[a.bone]),
  }));
}

// --- measuring --------------------------------------------------------------------------

// Hair hangs over the forehead and cheeks: a hand on the face goes under it.
function isHair(obj) {
  const named = (x) => /hair/i.test(x?.name ?? "");
  return named(obj) || [].concat(obj.material).some(named);
}

/**
 * The avatar's face and body at T-pose, without hair or limbs: a mesh to cast rays at, and
 * its triangles, each with the torso bone (hips … head) that moves it.
 */
function bakeSurface(vrm) {
  const h = vrm.humanoid;
  const head = h.getRawBoneNode("head");
  const hairBones = new Set();
  for (const joint of vrm.springBoneManager?.joints ?? []) {
    for (let o = joint.bone?.parent; o; o = o.parent) {
      if (o === head) {
        hairBones.add(joint.bone);
        break;
      }
    }
  }
  // Raw bone → the torso bone it hangs from, or null for limbs (and hair).
  const humanoid = new Map();
  for (const name of BONES.concat(["leftUpperLeg", "rightUpperLeg", "leftLowerLeg", "rightLowerLeg", "leftFoot", "rightFoot"])) {
    const node = h.getRawBoneNode(name);
    if (node) humanoid.set(node, TORSO.includes(name) ? name : null);
  }
  const owner = new Map();
  const torsoOf = (bone) => {
    if (owner.has(bone)) return owner.get(bone);
    let o = bone;
    while (o && !humanoid.has(o)) o = o.parent;
    const name = hairBones.has(bone) || !o ? null : humanoid.get(o);
    owner.set(bone, name);
    return name;
  };
  const tris = [];
  const groups = [];
  const v = new V();
  vrm.scene.traverse((obj) => {
    if (!obj.isMesh || !obj.visible || isHair(obj)) return;
    const g = obj.geometry;
    const pos = g.attributes.position;
    const skin = obj.isSkinnedMesh ? [g.attributes.skinIndex, g.attributes.skinWeight] : null;
    const index = g.index;
    const count = index ? index.count : pos.count;
    const world = new Map();
    const at = (i) => {
      let w = world.get(i);
      if (!w) {
        obj.getVertexPosition(i, v);
        w = v.clone().applyMatrix4(obj.matrixWorld);
        world.set(i, w);
      }
      return w;
    };
    const boneOf = (i) => {
      if (!skin) return torsoOf(obj);
      let best = -1;
      let bone = 0;
      for (let k = 0; k < 4; k++) {
        const w = skin[1].getComponent(i, k);
        if (w > best) [best, bone] = [w, skin[0].getComponent(i, k)];
      }
      return torsoOf(obj.skeleton.bones[bone]);
    };
    for (let t = 0; t < count; t += 3) {
      const ids = index ? [index.getX(t), index.getX(t + 1), index.getX(t + 2)] : [t, t + 1, t + 2];
      const group = boneOf(ids[0]);
      if (!group) continue;
      const [a, b, c] = ids.map(at);
      tris.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
      groups.push(group);
    }
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(tris, 3));
  const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }));
  mesh.updateMatrixWorld(true);
  return { mesh, tris, groups };
}

const CELL = 0.015;

/**
 * The baked body in cells, to find the skin near a point fast. A point is looked up in each
 * torso bone's frame, so a head that turns or a body that leans takes its skin with it.
 * Outward is away from the middle of the head or of the torso there: ears, collars and
 * layered clothes are wound every which way, so a triangle's own facing cannot say.
 */
function skinGrid(baked, rest, centers) {
  const cells = new Map();
  const key = (g, i, j, k) => `${g}|${i}|${j}|${k}`;
  const triangles = [];
  for (let t = 0; t < baked.groups.length; t++) {
    const o = t * 9;
    const pts = [0, 1, 2].map((k) => new V(baked.tris[o + 3 * k], baked.tris[o + 3 * k + 1], baked.tris[o + 3 * k + 2]));
    const tri = new THREE.Triangle(...pts);
    const n = tri.getNormal(new V());
    triangles.push({ tri, n });
    const lo = pts.reduce((m, p) => m.min(p), pts[0].clone()).divideScalar(CELL).floor();
    const hi = pts.reduce((m, p) => m.max(p), pts[0].clone()).divideScalar(CELL).floor();
    for (let i = lo.x; i <= hi.x; i++)
      for (let j = lo.y; j <= hi.y; j++)
        for (let k = lo.z; k <= hi.z; k++) {
          const id = key(baked.groups[t], i, j, k);
          if (!cells.has(id)) cells.set(id, []);
          cells.get(id).push(t);
        }
  }
  const groups = [...new Set(baked.groups)];
  const c = new V();
  const local = new V();
  const inv = new Q();
  return {
    /**
     * The skin nearest p (within `cellsOut` cells) for pose P: its distance, the outward
     * normal there in world terms, and whether p seems to be inside (a guess, for checking);
     * null if there is no skin that near.
     */
    nearest(p, P, cellsOut = 1) {
      let best = null;
      for (const g of groups) {
        inv.copy(P.q[g]).invert();
        local.copy(p).sub(P.p[g]).applyQuaternion(inv).add(rest[g]);
        const i0 = Math.floor(local.x / CELL);
        const j0 = Math.floor(local.y / CELL);
        const k0 = Math.floor(local.z / CELL);
        const seen = new Set();
        const r = cellsOut;
        for (let i = i0 - r; i <= i0 + r; i++)
          for (let j = j0 - r; j <= j0 + r; j++)
            for (let k = k0 - r; k <= k0 + r; k++) {
              for (const t of cells.get(key(g, i, j, k)) ?? []) {
                if (seen.has(t)) continue;
                seen.add(t);
                triangles[t].tri.closestPointToPoint(local, c);
                const d = c.distanceTo(local);
                if (best && d >= best.d) continue;
                const n = triangles[t].n.clone();
                // inside: behind the triangle as wound, and on the middle's side of it too
                // (either alone is fooled by ears, collars and layered clothes)
                const behind = n.dot(local.clone().sub(c)) < 0;
                if (n.dot(c.clone().sub(centers[g])) < 0) n.negate();
                const inside = behind && n.dot(local.clone().sub(c)) < 0;
                best = { d, n: n.applyQuaternion(P.q[g]), g, inside };
              }
            }
      }
      return best;
    },
  };
}

/** Run fn with the avatar at T-pose, unscaled and unmirrored at the origin; then put it back. */
function atTPose(vrm, fn) {
  const h = vrm.humanoid;
  const scene = vrm.scene;
  const saved = { position: scene.position.clone(), scale: scene.scale.clone(), pose: new Map() };
  for (const name of BONES.concat(["leftEye", "rightEye"])) {
    const node = h.getNormalizedBoneNode(name);
    if (node) saved.pose.set(node, node.quaternion.clone());
  }
  scene.position.set(0, 0, 0);
  scene.scale.set(1, 1, 1);
  for (const node of saved.pose.keys()) node.quaternion.identity();
  h.update();
  scene.updateMatrixWorld(true);
  try {
    return fn();
  } finally {
    scene.position.copy(saved.position);
    scene.scale.copy(saved.scale);
    for (const [node, q] of saved.pose) node.quaternion.copy(q);
    h.update();
    scene.updateMatrixWorld(true);
  }
}

/** The avatar's face and body at T-pose as one static mesh, without hair or limbs. */
export function bodySurface(vrm) {
  const skel = { bones: readSkeleton(vrm) };
  return atTPose(vrm, () => bakeSurface(vrm).mesh);
}

/**
 * Points on the avatar's face and body (the ones the location fits aim at, both sides),
 * each held in the frame of the bone it moves with, plus the face and torso sizes.
 */
export function measureBody(vrm, skel = { bones: readSkeleton(vrm) }, { skin = false } = {}) {
  skel.order ??= order(skel.bones);
  const h = vrm.humanoid;
  return atTPose(vrm, () => {
    const P = posed(skel, {}).p;
    // posed() lowers the arms to rest, which leaves the torso and head as they are.
    const baked = bakeSurface(vrm);
    const surface = baked.mesh;
    const rc = new THREE.Raycaster();
    // The point a ray meets the body, the surface's normal there (facing the ray), and the
    // torso bone that moves it.
    const hit = (origin, dir) => {
      rc.set(origin, dir);
      const x = rc.intersectObject(surface, false)[0];
      if (!x) return null;
      const n = x.face.normal.clone();
      if (n.dot(dir) > 0) n.negate();
      return { p: x.point, n, g: baked.groups[x.faceIndex] };
    };
    const front = (x, y) => hit(new V(x, y, 2), new V(0, 0, -1));
    // On the face, for certain: a ray past a narrow head's edge would find the shoulder
    // behind it, so step in toward the middle until it meets the head.
    const onFace = (x, y) => {
      for (let k = 0; k < 8; k++) {
        const h = front(x + (E.x - x) * k * 0.08, y);
        if (h?.g === "head") return h;
      }
      return null;
    };

    const eyes = ["leftEye", "rightEye"].map((n) => h.getNormalizedBoneNode(n)?.getWorldPosition(new V())).filter(Boolean);
    const E = eyes.length === 2 ? eyes[0].clone().lerp(eyes[1], 0.5) : P.head.clone().lerp(P.neck, -0.85);
    // Chin: going down the midline, where the face gives way to the neck.
    let chinY = null;
    let prev = null;
    for (let dy = 0.05; dy <= 0.17; dy += 0.003) {
      const p = front(E.x, E.y - dy)?.p;
      if (p && prev && p.z < prev.z - 0.015) {
        chinY = prev.y;
        break;
      }
      if (p) prev = p;
    }
    const faceLen = chinY == null ? FACE : E.y - chinY;
    const torsoLen = P.neck.y - P.hips.y;
    const kf = faceLen / FACE;
    const kt = torsoLen / TORSO_LEN;
    const torsoBone = (y) => ["upperChest", "chest", "spine", "hips"].find((b) => P[b] && P[b].y <= y) ?? "hips";

    const anchors = [];
    const r4 = (v) => v.toArray().map((x) => +x.toFixed(4));
    const add = (name, bone, h, kind) => {
      if (h && P[bone]) anchors.push({ name, bone, kind, local: r4(h.p.clone().sub(P[bone])), normal: r4(h.n) });
    };
    for (const [s, sign] of [["right", 1], ["left", -1]]) {
      for (const [name, [x, y]] of Object.entries(FACE_POINTS)) {
        if (sign < 0 && Math.abs(x) < 0.02) continue;
        add(`${s}:${name}`, "head", onFace(E.x + sign * x * kf, E.y + y * kf), "face");
      }
      const ear = hit(new V(-2 * sign, E.y - 0.015 * kf, P.head.z + 0.015 * kf), new V(sign, 0, 0));
      add(`${s}:ear`, "head", ear?.g === "head" ? ear : null, "face");
      const arm = P[`${s}UpperArm`];
      if (arm) {
        const shoulder = skel.bones[`${s}Shoulder`] ? `${s}Shoulder` : torsoBone(arm.y);
        add(`${s}:shoulder`, shoulder, front(arm.x * 0.78, arm.y - 0.02 * kt), "torso");
      }
      const chestY = P.hips.y + 0.65 * torsoLen;
      add(`${s}:chest`, torsoBone(chestY), front(-sign * 0.025 * kt, chestY), "torso");
      const bellyY = P.hips.y + 0.2 * torsoLen;
      add(`${s}:belly`, torsoBone(bellyY), front(-sign * 0.03 * kt, bellyY), "torso");
    }
    add("neck", skel.bones.neck ? "neck" : "upperChest", front(E.x, P.neck.y + 0.005 * kt), "torso");
    const sternumY = P.hips.y + 0.82 * torsoLen;
    add("sternum", torsoBone(sternumY), front(0, sternumY), "torso");
    surface.geometry.dispose();
    const out = { faceLen: +faceLen.toFixed(4), torsoLen: +torsoLen.toFixed(4), anchors };
    // skin: the body as a grid, for keeping hands out of it (not serializable)
    if (skin) {
      // The head's middle at eye height, over the neck; the torso's along the spine.
      const centers = Object.fromEntries(TORSO.filter((b) => P[b]).map((b) => [b, P[b].clone()]));
      if (centers.head) centers.head = new V(P.head.x, E.y, P.head.z);
      out.skin = skinGrid(baked, P, centers);
    }
    return out;
  });
}

// --- retargeting -------------------------------------------------------------------------

function track(keys, t) {
  if (!keys?.length) return ZERO;
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 0; i < keys.length - 1; i++) {
    const [t0, a] = keys[i];
    const [t1, b] = keys[i + 1];
    if (t <= t1) {
      const u = (t - t0) / Math.max(t1 - t0, 1e-6);
      return a.map((x, k) => x + (b[k] - x) * u);
    }
  }
  return keys[keys.length - 1][1];
}

const TAU = Math.PI * 2;

/** Euler angles for `q` closest to `ref`, so keyframes still interpolate the short way. */
function nearestEuler(q, ref) {
  _e.setFromQuaternion(q, "XYZ");
  const a = [_e.x, _e.y, _e.z];
  const b = [_e.x + Math.PI, Math.PI - _e.y, _e.z + Math.PI];
  const near = (e) => e.map((x, i) => x + TAU * Math.round((ref[i] - x) / TAU));
  const d = (e) => e.reduce((s, x, i) => s + (x - ref[i]) ** 2, 0);
  const [na, nb] = [near(a), near(b)];
  return d(na) <= d(nb) ? na : nb;
}

function solve3(A, b) {
  const [[a, b1, c], [d, e, f], [g, h, i]] = A;
  const det = a * (e * i - f * h) - b1 * (d * i - f * g) + c * (d * h - e * g);
  const inv = [
    [e * i - f * h, c * h - b1 * i, b1 * f - c * e],
    [f * g - d * i, a * i - c * g, c * d - a * f],
    [d * h - e * g, b1 * g - a * h, a * e - b1 * d],
  ];
  return inv.map((r) => (r[0] * b[0] + r[1] * b[1] + r[2] * b[2]) / det);
}

/**
 * Move the wrist to `goal` by changing the upper arm (x, y, z) and the elbow bend: the
 * smallest change that gets there (damped least squares), so the elbow does not swing.
 */
function reach(skel, P, side, eul, goal) {
  const upper = `${side}UpperArm`;
  const lower = `${side}LowerArm`;
  const q0 = P.q[skel.bones[upper].parent];
  const pU = P.p[upper];
  const offL = new V(...skel.bones[lower].offset);
  const offH = new V(...skel.bones[`${side}Hand`].offset);
  const eU = eul[upper] ?? ZERO;
  const eL = eul[lower] ?? ZERO;
  const qU = new Q();
  const qL = new Q();
  const wrist = (d) => {
    qU.copy(q0).multiply(localQ(upper, [eU[0] + d[0], eU[1] + d[1], eU[2] + d[2]]));
    qL.copy(qU).multiply(localQ(lower, [eL[0], eL[1] + d[3], eL[2]]));
    return offL.clone().applyQuaternion(qU).add(pU).add(offH.clone().applyQuaternion(qL));
  };
  const d = [0, 0, 0, 0];
  const h = 1e-4;
  for (let it = 0; it < 20; it++) {
    const w = wrist(d);
    const err = goal.clone().sub(w);
    if (err.length() < 2e-4) break;
    const J = [0, 1, 2, 3].map((j) => {
      const dd = [...d];
      dd[j] += h;
      return wrist(dd).sub(w).divideScalar(h).toArray();
    });
    const lambda2 = 0.02 ** 2;
    const A = [0, 1, 2].map((r) => [0, 1, 2].map((c) => J.reduce((s, col) => s + col[r] * col[c], 0) + (r === c ? lambda2 : 0)));
    const y = solve3(A, err.toArray());
    const step = J.map((col) => col[0] * y[0] + col[1] * y[1] + col[2] * y[2]);
    const norm = Math.hypot(...step);
    const k = norm > 0.3 ? 0.3 / norm : 1;
    for (let j = 0; j < 4; j++) d[j] += step[j] * k;
  }
  // The elbow bends one way only.
  const s = side === "right" ? 1 : -1;
  const bend = s * (eL[1] + d[3]);
  if (bend < 0.02) d[3] = s * 0.02 - eL[1];
  const miss = wrist(d).distanceTo(goal);
  return { upper: [eU[0] + d[0], eU[1] + d[1], eU[2] + d[2]], lower: [eL[0], eL[1] + d[3], eL[2]], qLower: qL.clone(), miss };
}

const isRest = (eul, side) => ARM.every((b) => (eul[side + b] ?? ZERO).every((x) => Math.abs(x) < 1e-3));

function mapper(ref, mine) {
  const names = new Set(mine.anchors.map((a) => a.name));
  const pairs = ref.anchors.filter((a) => names.has(a.name)).map((a) => [a, mine.anchors.find((b) => b.name === a.name)]);
  const kf = mine.faceLen / ref.faceLen;
  const kt = mine.torsoLen / ref.torsoLen;
  const scales = pairs.map(([a]) => (a.kind === "face" ? kf : kt));
  return {
    scale: (i) => scales[i],
    ref: { anchors: pairs.map(([a]) => a) },
    mine: { anchors: pairs.map(([, b]) => b) },
    /**
     * Where point p near the sample's anchors A falls among this avatar's anchors B: its offset
     * from each anchor, scaled to this face or torso and turned as this surface is turned, in
     * a blend weighted to the nearest anchors.
     */
    map(p, A, B) {
      const acc = new V();
      const turn = new Q();
      let wsum = 0;
      for (let i = 0; i < A.length; i++) {
        const w = 1 / (p.distanceToSquared(A[i].p) + EPS2) ** 3;
        const off = p.clone().sub(A[i].p).applyQuaternion(turn.setFromUnitVectors(A[i].n, B[i].n));
        acc.addScaledVector(off.multiplyScalar(scales[i]).add(B[i].p), w);
        wsum += w;
      }
      return acc.divideScalar(wsum);
    },
  };
}

function retargetClip(clip, ref, mine, body) {
  // retargeted: per side, the hand point placed and the worst miss (cm), for checking.
  const out = { ...clip, bones: { ...clip.bones }, retargeted: {} };
  const all = Object.keys(clip.bones);
  for (const side of SIDES) {
    const arm = ARM.map((b) => side + b).filter((n) => clip.bones[n]);
    if (!arm.length || !mine.bones[`${side}UpperArm`] || !mine.bones[`${side}LowerArm`] || !mine.bones[`${side}Hand`]) continue;
    const times = [...new Set(arm.flatMap((n) => clip.bones[n].map((k) => k[0])))].sort((a, b) => a - b);
    const frames = times.map((t) => Object.fromEntries(all.map((n) => [n, track(clip.bones[n], t)])));
    const other = side === "right" ? "left" : "right";

    // Per frame: the sample's pose and anchors, and this avatar's.
    const live = frames.map((eul) => {
      if (isRest(eul, side)) return null;
      const S = posed(ref, eul);
      const M = posed(mine, eul);
      return { eul, S, M, A: anchorsAt(body.ref, ref, S), B: anchorsAt(body.mine, mine, M), pts: handPoints(ref, S, side) };
    });
    if (!live.some(Boolean)) continue;

    // The hand point that comes closest to the body or the other hand, over the clip.
    let best = { name: "palm", d: Infinity };
    for (const f of live.filter(Boolean)) {
      const targets = [...f.A.map((a) => a.p), ...Object.values(handPoints(ref, f.S, other))];
      for (const [name, p] of Object.entries(f.pts)) {
        // Signs touch with the fingertips more than anything: they win near-ties.
        const d = Math.min(...targets.map((a) => a.distanceTo(p))) - (name in DIGITS ? TIP_BIAS : 0);
        if (d < best.d) best = { name, d };
      }
    }
    const point = best.d <= NEAR ? best.name : "palm";

    const tracks = { UpperArm: [], LowerArm: [], Hand: [] };
    const report = { point, missCm: 0, liftCm: 0 };
    live.forEach((f, i) => {
      const t = times[i];
      const eul = frames[i];
      if (!f) {
        for (const b of Object.keys(tracks)) tracks[b].push([t, [...(eul[side + b] ?? ZERO)]]);
        return;
      }
      const goal = body.map(f.pts[point], f.A, f.B);
      const mp = handPoints(mine, f.M, side);
      const wrist = f.M.p[`${side}Hand`];
      const wristGoal = goal.sub(mp[point].clone().sub(wrist));
      // Placing one point can sink another (a palm on the chest, the fingertips then in a
      // neck that sits further forward): lift the hand off the skin, away from the middle of
      // the head or torso, until no point is nearer it than SKIN. Inside and outside are not
      // told apart (ears, collars and layered clothes fold back on themselves); a point just
      // under the skin comes out over a few rounds all the same.
      if (body.skin) {
        const lift = new V();
        for (let it = 0; it < 4; it++) {
          let worst = null;
          for (const q of Object.values(mp)) {
            const at = q.clone().sub(wrist).add(wristGoal);
            const hit = body.skin.nearest(at, f.M);
            if (hit && hit.d < SKIN && (!worst || hit.d < worst.d)) worst = hit;
          }
          if (!worst || lift.length() >= MAX_LIFT) break;
          const step = worst.n.multiplyScalar(SKIN - worst.d + 1e-4);
          lift.add(step);
          wristGoal.add(step);
        }
        report.liftCm = Math.max(report.liftCm, +(lift.length() * 100).toFixed(1));
      }
      const r = reach(mine, f.M, side, eul, wristGoal);
      report.missCm = Math.max(report.missCm, +(r.miss * 100).toFixed(1));
      // The hand keeps its facing: undo what the new arm turned.
      const qHand = r.qLower.clone().invert().multiply(f.M.q[`${side}Hand`]);
      tracks.UpperArm.push([t, r.upper]);
      tracks.LowerArm.push([t, r.lower]);
      tracks.Hand.push([t, nearestEuler(qHand, eul[`${side}Hand`] ?? ZERO)]);
    });
    for (const [b, keys] of Object.entries(tracks)) out.bones[side + b] = keys;
    out.retargeted[side] = report;
  }
  return out;
}

const sameBones = (a, b) =>
  Object.keys(b).every((n) => a[n] && a[n].parent === b[n].parent && a[n].offset.every((x, i) => Math.abs(x - b[n].offset[i]) < 1e-3));

/**
 * Per-avatar arm retargeter, or null when the avatar is built like the sample (no work).
 * `retarget(clip)` returns the clip with this avatar's arm and hand tracks; results are
 * cached per clip. The body is measured on the first clip.
 */
export function armRetargeter(vrm, reference = SAMPLE_BODY) {
  if (!reference) return null;
  const bones = readSkeleton(vrm);
  if (sameBones(bones, reference.bones)) return null;
  const mine = { bones, order: order(bones) };
  const ref = { bones: reference.bones, order: order(reference.bones) };
  let body = null;
  const cache = new WeakMap();
  return function retarget(clip) {
    let out = cache.get(clip);
    if (out) return out;
    if (!body) {
      const measured = measureBody(vrm, mine, { skin: true });
      body = { ...mapper(reference.body, measured), skin: measured.skin };
    }
    out = retargetClip(clip, ref, mine, body);
    cache.set(clip, out);
    return out;
  };
}

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";

const REST_ARM = Math.PI * 0.47;

const SAMPLE_VRM =
  "https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/packages/three-vrm/examples/models/VRM1_Constraint_Twist_Sample.vrm";

export function createLoader() {
  const loader = new GLTFLoader();
  loader.register((parser) => new VRMLoaderPlugin(parser));
  loader.crossOrigin = "anonymous";
  return loader;
}

export async function loadVrm(source, loader = createLoader()) {
  const gltf = await new Promise((resolve, reject) => {
    if (source instanceof ArrayBuffer) {
      loader.parse(source, "", resolve, reject);
    } else {
      loader.load(source, resolve, undefined, reject);
    }
  });

  const vrm = gltf.userData.vrm;
  if (!vrm) throw new Error("not a VRM");

  VRMUtils.removeUnnecessaryVertices(gltf.scene);
  // Do not combineSkeletons on the twist-constraint sample: sleeve meshes are
  // weighted to Aim/Roll helper bones, and merging skeletons can leave those
  // weights bound to a stale bind pose while the hand bones still move.
  if (typeof VRMUtils.combineMorphs === "function") VRMUtils.combineMorphs(vrm);
  vrm.scene.traverse((obj) => {
    obj.frustumCulled = false;
  });
  // VRM 0.x faces -Z; VRM 1.0 already faces the camera.
  if (typeof VRMUtils.rotateVRM0 === "function") VRMUtils.rotateVRM0(vrm);
  // Aim/Roll helpers carry sleeve weights. Keep constraint updates, but drop the
  // TopsUpperArm Aim constraints — on this sample they swing the sleeve-inside
  // bones into the torso so the mesh looks detached from the hand.
  const nodeConstraintManager = vrm.nodeConstraintManager;
  if (nodeConstraintManager) {
    for (const constraint of [...nodeConstraintManager.constraints]) {
      const dest = constraint.destination?.name ?? "";
      if (/TopsUpperArm/i.test(dest)) nodeConstraintManager.deleteConstraint(constraint);
    }
  }

  // Sec_*UpperArm* joints are spring bones on this sample — soft-body lag makes
  // sleeves float while the hand moves. Remove them so they stay rigidly parented.
  stripArmSleeveSprings(vrm.springBoneManager);

  const humanoid = vrm.humanoid;
  const lookAt = vrm.lookAt;
  const expressionManager = vrm.expressionManager;
  const springBoneManager = vrm.springBoneManager;
  const materials = vrm.materials;
  const sleevePairs = cacheTopsSleevePairs(vrm);
  vrm.update = (delta) => {
    humanoid.update();
    lookAt?.update(delta);
    expressionManager?.update();
    nodeConstraintManager?.update();
    for (const { upper, aim } of sleevePairs) {
      // Same parent (shoulder): copy local rotation so Sec_* sleeve children follow.
      aim.quaternion.copy(upper.quaternion);
      aim.rotation.setFromQuaternion(aim.quaternion);
    }
    springBoneManager?.update(delta);
    if (materials) {
      for (const material of materials) material.update?.(delta);
    }
  };
  return vrm;
}

function stripArmSleeveSprings(springBoneManager) {
  if (!springBoneManager) return;
  const joints = springBoneManager._joints;
  if (!joints || typeof joints.values !== "function") return;
  for (const joint of [...joints]) {
    const name = joint.bone?.name ?? "";
    if (/TopsUpperArm/i.test(name)) {
      if (typeof springBoneManager.deleteJoint === "function") springBoneManager.deleteJoint(joint);
      else joints.delete(joint);
    }
  }
  springBoneManager._isSortedJointsDirty = true;
}

function cacheTopsSleevePairs(vrm) {
  const byName = new Map();
  vrm.scene.traverse((obj) => {
    if (obj.name) byName.set(obj.name, obj);
  });
  const pairs = [];
  for (const side of ["L", "R"]) {
    const upper = byName.get(`J_Bip_${side}_UpperArm`);
    const aim = byName.get(`J_Aim_${side}_TopsUpperArm`);
    if (upper && aim) pairs.push({ upper, aim });
  }
  return pairs;
}

export function applyRestPose(vrm) {
  const left = vrm.humanoid.getNormalizedBoneNode("leftUpperArm");
  const right = vrm.humanoid.getNormalizedBoneNode("rightUpperArm");
  // Normalized VRM 1.0: negative Z on the left, positive Z on the right, drops T-pose arms.
  if (left) left.rotation.z -= REST_ARM;
  if (right) right.rotation.z += REST_ARM;
  // Re-base Aim/Roll sleeve helpers on the arms-down rest, not the T-pose bind.
  vrm.humanoid.update();
  vrm.nodeConstraintManager?.setInitState?.();
  vrm.nodeConstraintManager?.update?.();
}

export function snapshotPose(vrm) {
  const snap = new Map();
  for (const name of vrm.humanoid.humanBones ? Object.keys(vrm.humanoid.humanBones) : []) {
    const node = vrm.humanoid.getNormalizedBoneNode(name);
    if (node) snap.set(name, node.quaternion.clone());
  }
  // three-vrm 3 exposes humanBones on the humanoid; fall back to a known list.
  if (snap.size === 0) {
    for (const name of BONE_NAMES) {
      const node = vrm.humanoid.getNormalizedBoneNode(name);
      if (node) snap.set(name, node.quaternion.clone());
    }
  }
  return snap;
}

export function restorePose(vrm, snap) {
  for (const [name, quat] of snap) {
    const node = vrm.humanoid.getNormalizedBoneNode(name);
    if (!node) continue;
    node.quaternion.copy(quat);
    node.rotation.setFromQuaternion(quat);
  }
}

function lerpEuler(a, b, t) {
  return new THREE.Euler(
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t
  );
}

function sampleTrack(keys, time) {
  if (!keys.length) return [0, 0, 0];
  if (time <= keys[0][0]) return keys[0][1];
  if (time >= keys[keys.length - 1][0]) return keys[keys.length - 1][1];
  for (let i = 0; i < keys.length - 1; i++) {
    const [t0, v0] = keys[i];
    const [t1, v1] = keys[i + 1];
    if (time >= t0 && time <= t1) {
      const u = (time - t0) / Math.max(t1 - t0, 1e-6);
      const e = lerpEuler(v0, v1, u);
      return [e.x, e.y, e.z];
    }
  }
  return keys[keys.length - 1][1];
}

/**
 * Apply a MarionetClip at time `t` as Euler offsets on top of a rest snapshot.
 * Re-sync quaternion after euler writes so humanoid.update() cannot ignore them.
 */
export function applyClip(vrm, clip, rest, t) {
  restorePose(vrm, rest);
  const time = clip.duration > 0 ? Math.min(Math.max(t, 0), clip.duration) : 0;
  for (const [bone, keys] of Object.entries(clip.bones)) {
    const node = vrm.humanoid.getNormalizedBoneNode(bone);
    if (!node) continue;
    const [x, y, z] = sampleTrack(keys, time);
    node.rotation.x += x;
    node.rotation.y += y;
    node.rotation.z += z;
    node.quaternion.setFromEuler(node.rotation);
  }
}

export function sampleUrl() {
  return SAMPLE_VRM;
}

const BONE_NAMES = [
  "hips",
  "spine",
  "chest",
  "upperChest",
  "neck",
  "head",
  "leftShoulder",
  "leftUpperArm",
  "leftLowerArm",
  "leftHand",
  "rightShoulder",
  "rightUpperArm",
  "rightLowerArm",
  "rightHand",
  "leftThumbMetacarpal",
  "leftThumbProximal",
  "leftThumbDistal",
  "leftIndexProximal",
  "leftIndexIntermediate",
  "leftIndexDistal",
  "leftMiddleProximal",
  "leftMiddleIntermediate",
  "leftMiddleDistal",
  "leftRingProximal",
  "leftRingIntermediate",
  "leftRingDistal",
  "leftLittleProximal",
  "leftLittleIntermediate",
  "leftLittleDistal",
  "rightThumbMetacarpal",
  "rightThumbProximal",
  "rightThumbDistal",
  "rightIndexProximal",
  "rightIndexIntermediate",
  "rightIndexDistal",
  "rightMiddleProximal",
  "rightMiddleIntermediate",
  "rightMiddleDistal",
  "rightRingProximal",
  "rightRingIntermediate",
  "rightRingDistal",
  "rightLittleProximal",
  "rightLittleIntermediate",
  "rightLittleDistal",
];

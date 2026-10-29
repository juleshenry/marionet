import * as THREE from "three";
import { VRMUtils } from "@pixiv/three-vrm";
import { createLoader } from "./vrm.js";

/**
 * The avatar maker's parts (avatars/build_kit.py): a body without hair, a hairstyle bound to its
 * bones, and the colours of skin, hair, eyes and top set on the materials.
 *
 * kit.json names the bodies, the hairstyles and the colours offered; the parts sit beside it as
 * {body}.vrm and {body}/{hair}.vrm. A made avatar is a recipe:
 *   { body, hair, skin, hairColor, eyes, top }     ids from kit.json, colours as "#rrggbb"
 */

const HAIR = "maker-hair"; // the group the hairstyle hangs in
const hairCalls = new WeakMap(); // per avatar, the latest wearHair()

export async function loadKit(url) {
  const base = new URL(url, location.href);
  const response = await fetch(base);
  if (!response.ok) throw new Error(`${response.status} ${base}`);
  return { ...(await response.json()), base };
}

/** A recipe with every part the kit has: unknown or missing ones take the kit's default. */
export function recipeOf(kit, recipe = {}) {
  const pick = (key, ids) => (ids.includes(recipe[key]) ? recipe[key] : kit.default[key]);
  const colour = (key) => (/^#[0-9a-f]{6}$/i.test(recipe[key] ?? "") ? recipe[key].toLowerCase() : kit.default[key]);
  return {
    body: pick("body", kit.bodies.map((b) => b.id)),
    hair: pick("hair", kit.hair.map((h) => h.id)),
    skin: colour("skin"),
    hairColor: colour("hairColor"),
    eyes: colour("eyes"),
    top: colour("top"),
  };
}

export const bodyUrl = (kit, recipe) => new URL(`${recipe.body}.vrm`, kit.base).href;

function hairUrl(kit, recipe) {
  const style = kit.hair.find((h) => h.id === recipe.hair);
  return style && !style.none ? new URL(`${recipe.body}/${recipe.hair}.vrm`, kit.base).href : null;
}

// Parts already fetched, by URL: going back to a hairstyle costs no download.
const fetched = new Map();
function fetchPart(url) {
  if (!fetched.has(url)) {
    const request = fetch(url).then((response) => {
      if (!response.ok) throw new Error(`${response.status} ${url}`);
      return response.arrayBuffer();
    });
    request.catch(() => fetched.delete(url));
    fetched.set(url, request);
  }
  return fetched.get(url);
}

function parse(buffer) {
  return new Promise((resolve, reject) => createLoader().parse(buffer, "", resolve, reject));
}

/**
 * Put the recipe's hairstyle on the avatar (a body of the kit), taking off the one it wore.
 * Returns false when a later call won.
 */
export async function wearHair(vrm, kit, recipe) {
  const token = (hairCalls.get(vrm) ?? 0) + 1;
  hairCalls.set(vrm, token);
  const url = hairUrl(kit, recipe);
  const gltf = url ? await parse(await fetchPart(url)) : null;
  if (token !== hairCalls.get(vrm)) {
    if (gltf) VRMUtils.deepDispose(gltf.scene);
    return false;
  }
  const worn = vrm.scene.getObjectByName(HAIR);
  if (worn) {
    worn.removeFromParent();
    VRMUtils.deepDispose(worn);
  }
  if (!gltf) return true;
  // The part holds the same rig as the body: bind its meshes to the body's bones of the same name.
  const bones = new Map();
  vrm.scene.traverse((obj) => {
    if (obj.isBone) bones.set(obj.name, obj);
  });
  const pieces = [];
  gltf.scene.traverse((obj) => {
    if (obj.isSkinnedMesh) pieces.push(obj);
  });
  const group = new THREE.Group();
  group.name = HAIR;
  for (const mesh of pieces) {
    const skeleton = new THREE.Skeleton(
      mesh.skeleton.bones.map((bone) => bones.get(bone.name) ?? bone),
      mesh.skeleton.boneInverses,
    );
    mesh.bind(skeleton, mesh.bindMatrix);
    mesh.frustumCulled = false;
    group.add(mesh);
  }
  VRMUtils.deepDispose(gltf.scene);
  vrm.scene.add(group);
  return true;
}

const KINDS = [
  ["skin", /_SKIN/],
  ["hair", /_HAIR/],
  ["brow", /FaceBrow/],
  ["eyes", /EyeIris/],
  ["top", /Tops|Onepice/],
];

function srgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => v / 255);
}

const linear = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);

/** Set the recipe's colours on the avatar's materials (the kit's parts are neutral; see build_kit.py). */
export function tint(vrm, kit, recipe) {
  const grey = kit.neutral.tint;
  const skin = linear(kit.neutral.skin, kit.neutral.skin, kit.neutral.skin).r;
  const hair = linear(...srgb(recipe.hairColor));
  const factors = {
    skin: linear(...srgb(recipe.skin)).multiplyScalar(1 / skin),
    hair: hair.clone().multiplyScalar(1 / grey),
    brow: linear(...srgb(recipe.hairColor).map((v) => v * 0.9)).multiplyScalar(1 / grey),
    eyes: linear(...srgb(recipe.eyes)).multiplyScalar(1 / grey),
    top: linear(...srgb(recipe.top)),
  };
  // VRoid draws hair's sheen as emission in the hair's own colour
  const sheen = hair.clone().multiplyScalar(0.7).addScalar(0.025);
  vrm.scene.traverse((obj) => {
    if (!obj.isMesh) return;
    for (const material of [].concat(obj.material)) {
      const kind = KINDS.find(([, pattern]) => pattern.test(material?.name ?? ""))?.[0];
      if (!kind || !material.shadeColorFactor) continue;
      material.userData.shade ??= material.shadeColorFactor.clone();
      material.color.copy(factors[kind]);
      material.shadeColorFactor.copy(material.userData.shade).multiply(factors[kind]);
      if (kind === "hair") material.emissive?.copy(sheen);
    }
  });
}

/** Hairstyle and colours, for a body of the kit just loaded. */
export async function dress(vrm, kit, recipe) {
  const worn = await wearHair(vrm, kit, recipe);
  tint(vrm, kit, recipe);
  return worn;
}

/** A recipe with one of each part drawn at random. */
export function randomRecipe(kit) {
  const any = (list) => list[Math.floor(Math.random() * list.length)];
  const hex = (list) => any(list).hex;
  return {
    body: any(kit.bodies).id,
    hair: any(kit.hair).id,
    skin: hex(kit.skin),
    hairColor: hex(kit.hairColor),
    eyes: hex(kit.eyes),
    top: hex(kit.top),
  };
}

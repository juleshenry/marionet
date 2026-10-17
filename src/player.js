import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { VRMUtils } from "@pixiv/three-vrm";
import { LOOP_HOLD, LOOP_RETURN, cycleLength } from "./loop.js";
import { applyClip, applyRestPose, loadVrm, restorePose, snapshotPose } from "./vrm.js";

/**
 * A VRM stage that lives inside one element: renderer, camera, lights, the avatar and the clip
 * it plays. No window or document listeners, so a page can hold it like any other widget.
 *
 *   const player = createPlayer(el);
 *   await player.loadAvatar(url);
 *   player.play(clip, { loop: true });
 */

export { cycleLength };

const smoothstep = (u) => u * u * (3 - 2 * u);

/** Pose the avatar at time `t` of a clip's loop: the clip, its held last frame, then the return to rest. */
export function applyCycle(vrm, clip, rest, t, { hold = LOOP_HOLD, ret = LOOP_RETURN } = {}) {
  applyClip(vrm, clip, rest, Math.min(t, clip.duration));
  const back = t - clip.duration - hold;
  if (back <= 0 || ret <= 0) return;
  const u = smoothstep(Math.min(back / ret, 1));
  for (const [name, quat] of rest) {
    const node = vrm.humanoid.getNormalizedBoneNode(name);
    if (!node) continue;
    node.quaternion.slerp(quat, u);
    node.rotation.setFromQuaternion(node.quaternion);
  }
  const em = vrm.expressionManager;
  if (em?.setValue) {
    for (const name of Object.keys(clip.expressions || {})) {
      try {
        em.setValue(name, (em.getValue(name) || 0) * (1 - u));
      } catch {
        /* preset missing on this avatar */
      }
    }
  }
}

export function createPlayer(container, options = {}) {
  const {
    fov = 35,
    antialias = true,
    background = null, // null keeps the canvas transparent, so the page shows through
    floor = true,
    orbit = true,
    autoResize = true,
    manual = false, // true: no animation loop; the caller draws each frame with renderAt()
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2),
    preserveDrawingBuffer = false,
  } = options;

  const state = { vrm: null, rest: null, clip: null, clipTime: 0, playing: false, loop: false, speed: 1, mirror: false };

  const scene = new THREE.Scene();
  if (background != null) scene.background = new THREE.Color(background);
  const measure = () => [container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight];
  const [width, height] = measure();
  const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 100);
  camera.position.set(0, 1.35, 2.05);

  let renderer = null;
  let controls = null;
  try {
    renderer = new THREE.WebGLRenderer({ antialias, alpha: background == null, preserveDrawingBuffer });
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.append(renderer.domElement);
    if (orbit) {
      controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 1.25, 0);
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.minDistance = 1.1;
      controls.maxDistance = 4.2;
      // The reader turns the signer around, and only that: the camera stays level with the middle
      // of the signing space, never looking up at the signer or down on them, a reader's own
      // avatar included.
      controls.minPolarAngle = Math.PI / 2;
      controls.maxPolarAngle = Math.PI / 2;
    }
  } catch (err) {
    console.error(err);
    renderer = null;
  }

  // Bright, even light from the front, as anime is drawn: the key light sits near the camera, so
  // the face and hands are lit and only the far sides fall into MToon's shade colour, and the
  // light from below is a warm floor bounce, not a blue that greys the hands and chin. As bright as
  // it goes before the palest skin and the light shirts wash out: two thirds of this left the
  // signers looking grey on the paper background.
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a7f72, 2.2));
  const sun = new THREE.DirectionalLight(0xfff8ee, 2.8);
  sun.position.set(0.7, 1.8, 2.6);
  scene.add(sun);
  // A soft light from the viewer's other side, so the features of a dark-skinned face read as
  // well as a light one's.
  const fill = new THREE.DirectionalLight(0xfff8f0, 1.1);
  fill.position.set(-0.6, 1.4, 3);
  scene.add(fill);

  if (floor) {
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(2.6, 64),
      new THREE.MeshStandardMaterial({ color: 0x0b1020, transparent: true, opacity: 0.65 })
    );
    disc.rotation.x = -Math.PI / 2;
    disc.position.y = -0.01;
    scene.add(disc);
  }

  const clock = new THREE.Clock();
  let frameId = 0;
  let loadToken = 0;
  let observer = null;

  function advance(delta) {
    const { clip } = state;
    if (!clip || !state.playing) return;
    state.clipTime += delta * state.speed;
    if (state.loop) {
      state.clipTime %= cycleLength(clip);
    } else if (state.clipTime > clip.duration) {
      state.clipTime = clip.duration;
      state.playing = false;
    }
  }

  function draw(delta) {
    if (!renderer) return;
    if (state.vrm) {
      // Keep applying the held frame after the clip ends (avoids snap-back to rest).
      if (state.clip) (state.loop ? applyCycle : applyClip)(state.vrm, state.clip, state.rest, state.clipTime);
      state.vrm.update(delta);
    }
    controls?.update();
    renderer.render(scene, camera);
  }

  function tick() {
    frameId = requestAnimationFrame(tick);
    const delta = clock.getDelta();
    advance(delta);
    draw(delta);
  }

  /** Swap in an avatar (URL or ArrayBuffer). The old one stays on stage until the new one is ready. */
  async function loadAvatar(source) {
    const token = ++loadToken;
    const vrm = await loadVrm(source);
    if (token !== loadToken) {
      VRMUtils.deepDispose(vrm.scene);
      return null;
    }
    if (state.vrm) {
      state.vrm.scene.removeFromParent();
      VRMUtils.deepDispose(state.vrm.scene);
    }
    applyRestPose(vrm);
    state.rest = snapshotPose(vrm);
    vrm.scene.scale.x = state.mirror ? -1 : 1;
    if (vrm.lookAt) vrm.lookAt.target = camera;
    scene.add(vrm.scene);
    state.vrm = vrm;
    return vrm;
  }

  function play(clip, { loop = false } = {}) {
    state.clip = clip;
    state.clipTime = 0;
    state.playing = true;
    state.loop = loop;
  }

  function stop() {
    state.clip = null;
    state.playing = false;
    if (state.vrm && state.rest) restorePose(state.vrm, state.rest);
  }

  function setSpeed(speed) {
    state.speed = speed;
  }

  function setMirror(on) {
    state.mirror = Boolean(on);
    if (state.vrm) state.vrm.scene.scale.x = state.mirror ? -1 : 1;
  }

  /** Draw the current clip at time `t`; `delta` advances spring bones and look-at. Returns the canvas. */
  function renderAt(t, delta = 0) {
    state.clipTime = t;
    draw(delta);
    return renderer?.domElement ?? null;
  }

  /**
   * Aim the camera straight on at the signing space of the loaded avatar: hips to above the head,
   * and `width` metres across, whichever needs more room at this aspect.
   */
  function frameSigningSpace({ width: across = 1.0, above = 0.3, below = 0.02 } = {}) {
    const vrm = state.vrm;
    if (!vrm) return;
    vrm.scene.updateMatrixWorld(true);
    const at = (bone) => vrm.humanoid.getRawBoneNode(bone)?.getWorldPosition(new THREE.Vector3());
    const head = at("head");
    const hips = at("hips");
    if (!head || !hips) return;
    const top = head.y + above;
    const bottom = hips.y - below;
    const tall = Math.max(top - bottom, across / camera.aspect);
    const centre = (top + bottom) / 2;
    const distance = tall / 2 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    camera.position.set(hips.x, centre, hips.z + distance);
    camera.lookAt(hips.x, centre, hips.z);
    if (controls) {
      controls.target.set(hips.x, centre, hips.z);
      controls.update();
    }
  }

  function resize() {
    const [w, h] = measure();
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer?.setSize(w, h);
  }

  function dispose() {
    cancelAnimationFrame(frameId);
    observer?.disconnect();
    controls?.dispose();
    if (state.vrm) VRMUtils.deepDispose(state.vrm.scene);
    state.vrm = null;
    renderer?.dispose();
    renderer?.domElement.remove();
  }

  if (autoResize && typeof ResizeObserver !== "undefined") {
    observer = new ResizeObserver(resize);
    observer.observe(container);
  }
  if (!manual) tick();

  return {
    state,
    scene,
    camera,
    renderer,
    controls,
    ok: Boolean(renderer),
    loadAvatar,
    play,
    stop,
    setSpeed,
    setMirror,
    renderAt,
    frameSigningSpace,
    resize,
    dispose,
  };
}

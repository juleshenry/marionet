import { createPlayer, cycleLength } from "./player.js";

/**
 * A fixed-size stage that draws one frame when asked, for scripts that turn clips into video
 * (scripts/render_videos.mjs) or review sheets. The page sets `window.marionetRender` once ready:
 *
 *   await marionetRender.loadAvatar(url)
 *   marionetRender.setClip(clip)            → seconds in one loop: clip, hold, return to rest
 *   marionetRender.frame(t, delta)          → PNG data URL of the frame at time t
 *
 *   render.html?w=540&h=540&bg=f3efe6       (size in CSS pixels; drawn at 2× and kept at 2×)
 */

const params = new URLSearchParams(location.search);
const width = Number(params.get("w")) || 540;
const height = Number(params.get("h")) || 540;
const scale = Number(params.get("scale")) || 2;
const background = `#${params.get("bg") || "f3efe6"}`;

const stage = document.getElementById("stage");
stage.style.width = `${width}px`;
stage.style.height = `${height}px`;

const player = createPlayer(stage, {
  background,
  floor: false,
  orbit: false,
  autoResize: false,
  manual: true,
  pixelRatio: scale,
  preserveDrawingBuffer: true,
});

window.marionetRender = {
  ok: player.ok,
  player,
  async loadAvatar(url) {
    await player.loadAvatar(url);
    player.frameSigningSpace();
    return true;
  },
  setClip(clip) {
    player.play(clip, { loop: true });
    player.state.playing = false; // the caller moves time with frame()
    return cycleLength(clip);
  },
  frame(t, delta = 0) {
    player.renderAt(t, delta);
    return player.renderer.domElement.toDataURL("image/png");
  },
};
window.marionetRender.ready = true;

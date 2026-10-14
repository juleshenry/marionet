// A looped sign holds its last frame, then eases back to rest, so each cycle rises from rest.
// No three.js here: scripts that time videos read these too.
export const LOOP_HOLD = 0.6;
export const LOOP_RETURN = 0.4;

export function cycleLength(clip, { hold = LOOP_HOLD, ret = LOOP_RETURN } = {}) {
  return clip.duration + hold + ret;
}

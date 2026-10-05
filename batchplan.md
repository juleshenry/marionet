# Batch conversion plan

Goal: a list of isolated-sign videos goes in, one playable animation per video comes out, on any VRM 1.0 avatar, with no per-sign authoring. The only human work is reviewing clips the pipeline flags.

This is an engineering plan, not the paper regime. `paper/REGIME.md` is about predicting `SignDesc`; this is about getting motion out of video in bulk.

## Why it is one-by-one today

There are two routes from a sign to a clip, and neither scales as written.

| Route | Code | Problem |
|---|---|---|
| **Described** | `SignDesc` → `compileSignDesc` (`src/compile.js`) | Every handshape, location and movement must already exist in `src/library.js`. Some movements were written for one sign (`hook` for J, `present` for ILY, `whisker` for GATO). It is also lossy: the 2,470 compile-ready ASL-LEX entries produce 1,153 distinct clips, so 72% of signs share their clip with another sign. |
| **Recorded** | pose → `retarget_pose` (`scripts/marionet_pose.py`) | Fully automatic, but it does not follow the signer. `classify_station` picks the arm pose from three canned stations by wrist height. `finger_curls` measures one joint angle per finger, and the thumb is mostly constants. |

The plan is to make the recorded route real. Treat every video as motion capture: measure where the signer's joints were, and write those rotations out.

## Pipeline

```
manifest.jsonl
  → extract    video → keypoints per frame                  exists
  → solve      keypoints → bone rotations per frame         build
  → contacts   spans where a hand is at a body landmark     build
  → score      one score plus reasons per clip              build
  → select     best take per sign; the rest to review       build
  → play       JS applies the clip and corrects contacts    extend
```

Extraction is the only GPU stage and runs once per video. Everything after it is CPU work on cached keypoints and can be rerun as the solver improves.

## 1. Extract

Exists. `scripts/video_to_marionet.py` already takes `--manifest` and writes `marionet.pose/v0` per video.

No MANO. HaMeR stays switched off (`--hands none`), which also removes the redistribution question in `dataingestplan.md`.

| Backend | Body | Hands | Notes |
|---|---|---|---|
| `mediapipe` | 3D world landmarks | image-normalised x, y with relative z | Runs on CPU. Start here. |
| `rtmlib --hands none` | 2D | 2D, z set to 0 | GPU, ONNX. Add later as a second tracker. |

Fix before solving:

- **Hands and body are in different coordinate spaces on the MediaPipe path.** Body points are metric and hip-centred. Hand points are normalised by image width and height, so angles measured on them are skewed by the aspect ratio. Switch the hand read to MediaPipe's hand world landmarks. MediaPipe is not installed on this machine, so confirm the installed version exposes them.
- Keep per-frame confidence for every joint group. The solver and the score both need it.

## 2. Solve

Replace `classify_station` and `hand_eulers` with measurement. This is the one substantial piece of engineering in the plan.

- **Torso frame.** Build it from shoulders and hips, and express everything else in it. That removes camera angle and signer lean.
- **Arms.** Upper-arm direction is elbow minus shoulder; forearm direction is wrist minus elbow. Those give the shoulder rotation and elbow bend directly. Forearm twist comes from the palm normal.
- **Wrist.** Palm frame from wrist, index knuckle and little-finger knuckle, relative to the forearm.
- **Fingers.** Three bend angles per finger plus spread at the knuckle, and the thumb from its own three segments. This replaces the single curl value.
- **Head and spine.** `axial_eulers` already measures these. Keep it.
- **Output.** Rest-relative eulers on VRM normalised bones, the format `applyClip` (`src/vrm.js`) already plays. No runtime change is needed to play a solved clip.
- **Cleanup.** Clamp to joint limits. Through low-confidence frames, hold or interpolate instead of emitting the tracker's guess. Smooth with the existing `python/marionet/smooth.py`.

For 2D-only trackers the skeleton is the same, but the rotations are found by minimising the distance between the projected skeleton and the 2D keypoints. Build that after the 3D path works.

**Check.** Run the solved rotations forward on a skeleton with the signer's measured bone lengths and compare joint positions with the keypoints. That error is also the main input to the score in step 4.

## 3. Contacts

Rotations copied onto an avatar with different proportions miss contacts. A hand that touched the signer's chin floats in front of a small-headed avatar or passes through a large one.

- **In the clip.** While solving, find spans where a hand point is close to a body landmark (forehead, nose, chin, cheek, ear, shoulder, chest, the other hand), with distance measured in shoulder widths. Store them as `contacts: [{t0, t1, hand, point, landmark, offset}]`. `schemas/clip.v0.schema.json` allows extra properties, so this is additive.
- **In the JavaScript.** At play time, find that landmark on the loaded VRM, and during each span run two-bone IK on the arm so the hand point reaches it. Blend in and out at the span edges.

This is where the JavaScript does the portability work. The clip says what was touched; the runtime works out where that is on this avatar.

Two unsolved parts:

- VRM gives bones, not face surface points. Chin, nose and cheek need per-avatar offsets from the head bone, estimated from the mesh or the eye bones.
- Single-camera depth is weakest exactly where contact is decided, so some contacts will be missed or invented.

## 4. Score

Every clip gets a score and the reasons behind it:

- fraction of frames where the needed hands were tracked
- mean tracker confidence
- solve error from the check in step 2
- frames clamped at a joint limit
- jitter (frame-to-frame acceleration)
- the existing extract status (`no_hand`, `two_people`, `blur`, `out_of_frame`, `occluded`)

The outcome is pass, review or fail. Set the thresholds after viewing the first 50 clips, not before.

## 5. Select

Group clips by sign using the manifest's gloss. Where a sign has several takes, publish the best-scoring one. Signs with no passing take go to a review list.

Review means watching the avatar next to the source video and accepting or rejecting. It is not authoring. Use FiftyOne or Label Studio as `dataingestplan.md` already says; do not grow `index.html` into a review tool.

## 6. Runner

The manifest loop in `scripts/video_to_marionet.py` is serial and runs extract, retarget and write in one pass per video.

- Split extract from solve and score, and cache the pose dumps. The solver will change often and extraction should not rerun each time.
- Shard by manifest line, and skip videos that are already done.
- Store pose dumps as compact arrays, not JSON, once the corpus is large.
- Write one results table: id, sign, status, score, reasons, paths.

## What happens to SignDesc

It comes off the critical path. No clip waits on it.

- **Label.** It stays the searchable description of a sign in the player.
- **Finger cleaner.** When solved finger angles are close to a library handshape, snap to it. That gives crisp hands where the tracker was merely noisy.

## Face

Lower priority than hands. Today `nmf_from_face` reduces the face to a few labels and `expression_tracks` plays each at a fixed weight for the whole clip. For bulk conversion, map MediaPipe face blendshapes to VRM expression weights per frame instead.

## What to expect

- The output is a recording of one signer's take, with their style, not a cleaned canonical form.
- Fingers will be the weak point. Single-camera hand tracking fails on occluded and fast hands. How often that happens on signing video has not been measured here.
- What can be published depends on each video's licence. Animations derived from tier B sources in `dataingestplan.md` stay local.

## Order of work

1. Arm and wrist solver on MediaPipe 3D body. View 50 clips from a tier A source next to their videos.
2. Finger solver on hand world landmarks.
3. Score and results table; split extract from solve.
4. Contacts in the clip and the IK correction in the JavaScript.
5. Best-take selection and the review list.
6. Sharded runner; second tracker.

## Not yet known

- How often hand tracking fails on signing video, and so how large the review list is.
- Whether MediaPipe's depth is good enough for the arm solve and for contact detection.
- How to place face landmarks on an arbitrary VRM.
- Solver accuracy against ground truth. A small subset of 3D-LEX mocap (CC BY 4.0, deferred in `dataingestplan.md` for size) would answer this: project it to keypoints, solve, and compare with the known rotations.

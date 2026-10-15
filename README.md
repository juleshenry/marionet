# Marionet

Marionet turns sign language signs into small animation files that play on any [VRM](https://vrm.dev/en/) avatar in the browser.

You describe a sign the way a linguist would: handshape, where the hand is, which way the palm faces and how it moves, plus head, body and face if they matter. A compiler turns that description into bone rotations, and a three.js player performs it on whichever VRM is loaded, including one you drop in yourself.

![ASL ILY](docs/demo-ily.gif)

![LENSEGUA GATO](docs/demo-gato.gif)

## What's here

- **28 finished signs**, baked to `clips/` and checked by eye on the sample avatar:
  - ASL fingerspelling A–Z, including the movement of J and Z.
  - ASL **ILY**. It's one sign. "I love you" is its English translation, not three signs and not three letters.
  - LENSEGUA **GATO** ("cat"). This is a sketch (F-hand, whisker stroke at the cheek), not an entry from a licensed LENSEGUA dictionary.
- **2,470 ASL-LEX entries that compile** but haven't been reviewed. They use a small set of generic movements, so many look alike.
- **A browser player** to search signs, play them and swap avatars.

## How it works

```
SignDesc (data/signs/*.json)        what the sign is: handshape, location, palm, movement, head/body/face
   │
   │  src/compile.js + src/library.js
   ▼
MarionetClip (clips/*.json)         keyframed rotations per VRM bone, plus face expression weights
   │
   │  src/vrm.js
   ▼
any VRM avatar in the browser
```

- **SignDesc** describes one sign: one entry per lemma. Schema: `schemas/signdesc.v0.schema.json`.
- **The library** (`src/library.js`) is the vocabulary: each named handshape, location, palm orientation and movement as bone rotations. The numbers are fitted on the sample avatar against targets on the body, then checked by eye:
  - each location puts the index fingertip on its point (forehead, eye, nose, cheek, mouth, chin, neck, temple, ear, shoulder) or holds the hand a set distance in front of the body (chest, belly, neutral space);
  - two-handed signs give each hand its own side, and the non-dominant hand waits in front of the body for the dominant hand to act on it;
  - each named palm orientation is fitted per location;
  - `linear`, `arc` and `circle` move the hand along real paths;
  - fingerspelling has its own station, thumbs and paths for J and Z.

  A sign with no orientation (ASL-LEX gives none) uses the location's natural hand.
- **MarionetClip** is the output: per-bone keyframes as rotations relative to an arms-down rest pose. It doesn't depend on any particular avatar. Schema: `schemas/clip.v0.schema.json`.
- **The player** loads a VRM, puts it in the rest pose and applies the clip on top. Thumbs are retargeted per avatar (`src/hands.js`), because rigs build the thumb differently. The clip's thumb pose is replayed so the joints land in the same place on this avatar's hand.

## Run the player

```sh
npm install
python3 -m http.server 8080
# open http://localhost:8080
```

- Type A–Z to fingerspell, or search the lexicon.
- Drop a `.vrm` file onto the page to change avatar.
- Drop a clip or SignDesc `.json` file to play it.
- Demo loops: `?demo=ily`, `?demo=gato`, or `?demo=1` for both.

## Add or fix a sign

1. Edit the sign in `data/signs/…`, or the vocabulary in `src/library.js`.
2. Bake: `npm run bake` writes `clips/`. `npm run check` fails if `clips/` is out of date.
3. Look at it:
   ```sh
   python3 -m http.server 8765        # in another terminal
   npm run render-clips
   open data/runs/renders/index.html
   ```
   The gallery shows three things:
   - a slow camera orbit around each held handshape, which shows depth such as whether the thumb is over or under the fingers;
   - a front-view video of each moving sign, with the fingertip's path drawn as it goes;
   - still frames.
4. Check for fingers passing through each other: `node scripts/hand_gaps.mjs`, or on other avatars with `--avatars avatars/out/w-white.vrm,…`. To render the gallery on another avatar, set `MARIONET_AVATAR=avatars/out/w-white.vrm`.
5. If a thumb is in the wrong place, set its target in `scripts/fit_thumbs.mjs`, run it, and paste the row it prints into `THUMB_POSES` in `src/library.js`. For locations, palm orientations and movement paths, `scripts/fit_arm.mjs` does the same job: see its header for the order to run its modes.
6. To spot-check lexicon signs, bake chosen ones elsewhere and render them:
   ```sh
   node scripts/bake_clips.mjs --ids ase/asllex/please,ase/asllex/night --out data/runs/preview
   MARIONET_CLIPS=data/runs/preview node scripts/render_clips.mjs http://127.0.0.1:8765 data/runs/preview-renders
   ```

Rendering drives your installed Chrome through Playwright, needs `ffmpeg`, and downloads the sample avatar from GitHub.

## Checks

`npm run check` validates the compiler and schemas, confirms `clips/` matches the current library, and runs the Python self-tests.

## Repository map

| Path | What it is |
|---|---|
| `index.html`, `src/main.js` | Player UI: search, alphabet, drop a VRM or JSON |
| `src/vrm.js` | Loads a VRM, sets the rest pose, applies clips |
| `src/hands.js` | Retargets clip thumbs to each avatar's hand |
| `src/compile.js` | SignDesc → MarionetClip |
| `src/library.js` | Handshapes, locations, orientations and movements as bone rotations |
| `src/ir.js`, `src/lexicon.js` | Validators; loading and searching sign packs |
| `data/signs/` | Sign packs: `ase/fingerspelling.json`, `ase/i-love-you.json`, `gsm/gato.json`, `ase/asllex_signdesc.json` |
| `clips/` | Baked clips for the finished signs, plus `index.json` |
| `schemas/` | JSON Schemas for SignDesc, clips and pose files |
| `scripts/bake_clips.mjs` | Compile and bake the finished signs |
| `scripts/render_clips.mjs` | Review gallery (orbit, fingertip-path videos, stills) |
| `scripts/hand_gaps.mjs`, `scripts/fit_thumbs.mjs` | Finger collision report; thumb pose fitting |
| `scripts/fit_arm.mjs` | Fits locations, two-handed spacing, palm orientations and movement paths |
| `scripts/check_compiler.mjs` | Compiler and schema checks |
| `scripts/capture_demo_gifs.mjs` | Regenerates the two GIFs above |
| `scripts/ingest_asllex.py`, `scripts/ingest_signpuddle.py` | Build the ASL-LEX and SignPuddle sign data |
| `scripts/video_to_marionet.py`, `scripts/marionet_pose.py`, `scripts/phonology.py`, `python/marionet/` | Video → clip experiment (below) |
| `data/sources/` | Licence allowlist and citations |
| `dataingestplan.md` | Which data sources may be used, and how |
| `batchplan.md` | Plan for converting video in bulk |
| `paper/REGIME.md` | Research framing for the video experiment |

## Video → clip (experimental)

Most sign languages have no written dictionary, so the long-term research question is whether signs can be pulled from video of signers. `scripts/video_to_marionet.py` takes a video, tracks the body and hands, and writes a pose file plus a clip.

It isn't needed for anything above, and its output is a rough draft. The arm is placed in one of three preset positions rather than measured, and fingers are measured coarsely. `batchplan.md` covers what it would take to make it real.

```sh
python3 scripts/video_to_marionet.py --self-test
python3 scripts/video_to_marionet.py --backend dummy --lang eso --gloss KASS      # no video needed
python3 scripts/video_to_marionet.py clip.mp4 --backend mediapipe --lang eso --gloss KASS
```

Backends:
- `dummy`: synthetic data, no video needed.
- `mediapipe`: CPU. Needs `pip install mediapipe opencv-python`.
- `rtmlib` and `dwpose_hamer`: GPU.

HaMeR hands need the MANO model, which is licensed for non-commercial research only, so keep any pose data derived from it local.

## Data and licensing

Data comes in only through the licence gate in `dataingestplan.md`: official dumps, no scraping.

- **ASL-LEX 2.0** (OSF files; CC BY 4.0 on OSF but CC BY-NC on asl-lex.org, so non-commercial until the authors confirm, #33) gives 2,723 signs in `data/signs/ase/asllex_signdesc.json`. 2,470 of them compile with today's vocabulary; the rest stay as data with no invented motion.
- **SignPuddle** ASL notation (`sgn4.spml`) is used for gloss coverage.
- Citations are in `data/sources/CITATIONS.md` and the allowlist is in `data/sources/allowlist.jsonl`.

```sh
python3 scripts/ingest_asllex.py
python3 scripts/ingest_signpuddle.py
```

## Known gaps

- **Arm poses are fitted on the sample avatar.** Thumbs retarget per avatar, but locations don't yet. On an avatar with different proportions, such as a bigger head or shorter arms, a fingertip meant to touch the chin may stop short or sink in.
- **ASL-LEX motion is generic.** The data says "straight", "arc" or "circle" but not which way, so every straight movement goes forward, every arc goes toward the midline and every circle runs in the body's plane.
- **Some palm orientations can't be reached at some locations.** For example, palm-up with a fingertip on the face: the fit gets within about 50°.
- **MakeHuman fingers curl less tightly** than the sample's, so fists look looser on those avatars.
- **The face is coarse**: brow raise and furrow map to the "surprised" and "angry" presets.

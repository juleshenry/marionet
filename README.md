# Marionet

Compiling sign phonology onto portable VRM avatars.

## Abstract

Sign language production systems typically either bake a particular signer into pixels or bind motion to a studio-specific character. Neither yields a sign that a user-chosen avatar can perform. **Marionet** is a framework for isolated sign production whose primary artifact is *VRM gesture code*: retargetable bone and expression tracks that play on any VRM 1.0 humanoid, including a custom avatar dropped in at runtime.

Rather than regressing high-dimensional pose from text, Marionet compiles through a phonological intermediate representation (`SignDesc`) whose features — handshape, location, orientation, movement, and non-manuals — follow established sign phonology rather than a private latent. An expertise library of VRM-native primitives realizes those features as executable clips (`MarionetClip`). Learned models, when introduced, predict `SignDesc` and residual timing; they do not emit raw quaternions as a first language.

This repository begins with the runtime and the compiler. The first lexicon is American Sign Language fingerspelling (A–Z) as a proof that parametric handshapes, a citation-form station, and two path movements (J, Z) can drive an arbitrary VRM. Isolated lexical signs, public-corpus retargeting, and multilingual dictionaries follow. Photoreal signer video (as in SignVIP) is a different task; Marionet’s claim is portability, inspectability, and phonology as a first-class object.

## This repository

| Path | Role |
|---|---|
| `index.html` | Player: load a VRM, type a letter, read the `SignDesc` |
| `src/ir.js` | `SignDesc` / `MarionetClip` schemas and validators |
| `src/library.js` | Parametric handshapes + VRM bone solver |
| `src/compile.js` | `SignDesc` → `MarionetClip` |
| `src/vrm.js` | Load, rest pose, apply clips |
| `data/signs/ase/fingerspelling.json` | A–Z as `SignDesc` |

```sh
python3 -m http.server 8080
# open http://localhost:8080
```

Drop a `.vrm` onto the stage, or use the bundled sample. Type A–Z.

## Data and licensing

SpreadTheSign is a multilingual sign dictionary and a genuine research resource. It is **not** a scrape target. The European Sign Language Centre prohibits download and use of the videos without permission, including for research. SignCLIP obtained a license and still cannot redistribute the data. Internet Archive snapshots of the site do not confer a license, and using the Wayback Machine to bypass blocking is still unauthorized copying.

Marionet will request a research license (pose extraction only, no video redistribution, Deaf-led evaluation). Until that exists, training data is public isolated corpora (WLASL, ASL-LEX, and similarly licensed sets). No scraper for SpreadTheSign belongs in this repo.

## Status

- [x] VRM player, custom avatar drop, arms-down rest pose
- [x] `SignDesc` / `MarionetClip` v0
- [x] ASL fingerspelling expertise-library proof
- [ ] Location / orientation / movement catalogs beyond fingerspelling
- [ ] MediaPipe video → clip retargeter
- [ ] Isolated lexical signs from public corpora
- [ ] Gloss → `SignDesc` model
- [ ] Licensed SpreadTheSign pose slice, if granted

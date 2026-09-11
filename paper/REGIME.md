# Paper regime: video corpus → Marionet syntax

Working title: **Marionet: Compiling Isolated Sign Video into Portable VRM Gesture Code**

## Claim

Isolated sign video can be compiled into **avatar-agnostic, inspectable gesture code** (`SignDesc` + `MarionetClip`) by tokenizing motion the way SignVIP tokenizes it — DWPose + HaMeR, then discrete codes — and **decoding those codes into phonology**, not into RGB. The paper is analysis + retarget, not sign-language video generation.

## Task

Given a large corpus of isolated (citation-form) sign videos with whatever metadata exists (gloss, language ID, nothing), emit:

1. `marionet.pose/v0` — per-frame body + hands (not redistributed video)
2. `MarionetClip` — VRM bone/expression tracks (`source: "retargeted"`)
3. `SignDesc` — phonological syntax: named handshapes (`ILY`, `horns`, `F`) plus location, orientation, movement, NMFs, language code. Lists of primitives are only for unnamed simultaneous selections.

A VRM the model has never seen must play the clip. That is the portability test.

Out of the paper: diffusion, SignVIP Stage I/II video models, continuous discourse, unlicensed crawls.

## Why this is a paper

| Prior | They emit | Gap |
|---|---|---|
| SignVIP / SignGAN / SignGen | RGB of a captured signer | Not retargetable; identity baked in |
| Neural Sign Actors / SignAvatars | SMPL-X | Strong motion, weak “bring your own avatar” |
| JASigning / SiGML / HamNoSys | Avatar from **hand-authored** phonology | No video induction |
| SignCLIP | Video–text embedding | Retrieval, not production syntax |
| Kalidokit / MediaPipe-VRM mocap | Live bones | No lexicon, no phonology, no multilingual eval |

Marionet’s contribution is the **syntax**: a discrete, compositional IR that a compiler already executes on VRM, induced from video at corpus scale.

## Corpus

Isolated dictionary-style clips, many languages, uneven labels. Three supervision tiers:

| Tier | Labels | Role |
|---|---|---|
| **L1** | Gloss + phonological features (ASL-LEX 2.0 on OSF) | Supervised decoder: pose tokens → `SignDesc` fields |
| **L2** | Gloss only (dictionaries, Signbank exports, EVK clips with a word) | Pose → clip always; phonology via clustering + nearest L1 primitive |
| **L3** | Video only | Cluster pose clips; human gloss later |

ASL is L1 so the decoder has a name for a handshape. Estonian (`eso` / EVK) and most languages are L2/L3 — **video is the corpus**. The pipeline does not wait for an Estonian-LEX.

License gate: `dataingestplan.md`. Train on poses you are allowed to extract. No SpreadTheSign job script. YouTube-SL-25 is IDs, not a video dump.

## Method

```
                    language ID (if any)
                           │
video ──► [A] pose extract ──► marionet.pose/v0
                           │
                           ├─► [B] geometric retarget ──► MarionetClip     (always)
                           │
                           └─► [C] FSQ / motion tokens
                                      │
                                      ▼
                               [D] translator ──► SignDesc
                                      │
                                      ▼
                               [E] compiler ──► MarionetClip'  (library reconstruction)
                                      │
                                      ▼
                               [F] residual (optional): Clip' + pose → Clip
```

**A — Pose extract** (SignVIP front-end, cloud GPU). DWPose body + HaMeR hands. Isolated clips, 30 fps cap, batch 1 on one 48GB card. Local stand-in: MediaPipe, same pose schema. Do not train SignVIP video diffusion. Output pose JSON; do not commit mp4.

**B — Geometric retarget** (no net). Landmarks / MANO → VRM eulers (arms + 15 finger bones × 2), rest-relative, same convention as `library.js`. Mandatory baseline. Already Marionet syntax.

**C — Pose features (v1) / FSQ later.** v1 is a wrist-relative 21×3 cloud plus arm station and motion energy (`python/marionet/features.py`). FSQ tokens are an ablation if the linear heads saturate. SignVIP needed discrete codes to *decode video*; we classify phonology.

**D — Translator: features → `SignDesc`.** Linear multi-head decoder (`scripts/phonology.py`): handshape is a named catalog id (`ILY`, `F`, `open_b`); multi-label only for unnamed simultaneous selections. Plus location, orientation, movement, handed. Language is a prefix (`ase`, `eso`, `gsm`). L1: supervised on ASL-LEX-aligned (or synthetic-from-lexicon) poses. L2: extract clip always; phonology via nearest L1 primitive. L3: cluster or `unmapped`. A VLM that emits the same JSON is an ablation, not the spine.

**E — Compiler** (already in repo). `compile.js` is the inductive bias. The claimed artifact goes through it. Raw pose clips are a baseline.

**F — Residual.** Optional bone residual if the library is stiff. Ablate it. Must not become “copy HaMeR into VRM.”

## Experiments (rented GPU)

| ID | What | Success |
|---|---|---|
| **E0** | Extract the corpus; fail rates (no hand, two people, blur) | Appendix table |
| **E1** | Geometric retarget on held-out signers | Hand MPJPE; VRM vs source figure |
| **E2** | Pose/tokens → `SignDesc` on ASL-LEX-aligned clips | Per-field F1; named-shape exact-match (`ILY` ≠ I, ≠ L, ≠ Y). Lists only for unnamed combos |
| **E3** | Same clip on ≥3 VRMs (stylized + realistic) | Pose DTW / MOS. Claim is the clip, not the mesh |
| **E4** | One unwritten language (EVK if the lab shares; else INCLUDE / AUTSL / BY-SA Wikisigns) | Train phonology on L1, extract on L2. Gloss retrieval if labels exist; qualitative VRM |
| **E5** | Compiler reconstruction ± residual; native signer MOS | BLEU is a dev metric, not the conclusion |

Not an experiment: training SignVIP’s UNet.

## Metrics

| Layer | Metric |
|---|---|
| Pose extract | detection rate (appendix) |
| Clip | hand MPJPE, wrist error, finger DTW vs E1 |
| `SignDesc` | accuracy / F1 per field; composition exact-match |
| Portability | same-clip DTW across VRMs |
| Human | intelligibility, naturalness; “is this EVK CAT?” |

## Compute

| Job | Box | Order |
|---|---|---|
| A extract | 1× 48GB | days, corpus-size bound |
| C FSQ | same | 1–2 days |
| D translator | same | 1–2 days |
| Diffusion | — | do not rent |

Mac plays clips and compiles `SignDesc`. It never trains.

## Skeleton

1. Intro — portable syntax; video is the corpus for unwritten SLs
2. Related — SLVG vs SLP vs avatar compilers vs mocap
3. IR — `SignDesc` compositions, `MarionetClip`, compiler
4. Method — A–F; SignVIP front-end only
5. Data — L1/L2/L3; license table
6. Experiments — E1–E5
7. Limitations — isolated ≠ conversation; NMFs; occlusion; residual cheating
8. Ethics — no scrape; native evaluation; not an interpreter

## Success

A held-out isolated video, possibly EVK, becomes a JSON clip that a **new** VRM performs, plus a `SignDesc` a linguist can read (`ILY` at `chest-front`, not a latent and not a chord of letter signs). **One lemma is one sign:** English “I love you” is a translation of `ILY`, not three words and not three letters. If the only thing that works is HaMeR projected onto bones with an unreadable codebook, that is the baseline, not the paper.

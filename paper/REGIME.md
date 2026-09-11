# Paper regime: video corpus → Marionet syntax

Working title: **Marionet: Compiling Isolated Sign Video into Portable Full-Body VRM Gesture Code**

## Claim

The video task is **video → full body**, not video → manual phonology. A citation-form sign is a **head + body + hands** event. Isolated sign video is compiled into **VRM-portable, inspectable full-body gesture code** (`SignDesc` + `MarionetClip`) by tokenizing that whole humanoid — torso, head/face, and hands — and decoding those tracks into articulatory IR, not into RGB. The paper is analysis + retarget, not sign-language video generation.

ASL-LEX’s coding manual is **manual-heavy** (selected fingers, flexion, location, path). That is a **supervision gap in L1**, not the definition of the output. Video, especially L2/L3, carries the axial skeleton and the face; we do not let a spreadsheet that mostly coded the hands decide what the system is allowed to see. Named handshapes (`ILY`, `open_b`) are a **per-language overlay on the hand layer**. Head-nod / head-shake / torso-lean are articulators, not “non-manual extras.” Hand-at-the-forehead is a place feature of the hand; it does not nod the neck. Both can be true of one sign.

Portable means: a **VRM 1.0** humanoid the model has never seen must play the **full-body** clip (spine, chest, neck, head, arms, fingers, face weights). That is not “avatar-agnostic.” SMPL-X, FBX, and proprietary studio rigs are out of scope.

B (geometric retarget of head + body + hands) is the safest work and the mandatory baseline. A B clip that only moves fingers has failed the task. Discrete D labels the same three articulator groups. If D fails, the paper reports B + the IR and does not pretend a phonology decoder. Grammatical NMFs in *conversation* (y/n questions, topicalization, role shift as discourse) are out because this paper is isolated citation form — not because the body does not move.

## Task

Given a large corpus of isolated (citation-form) sign videos with whatever metadata exists (gloss, language ID, nothing), emit:

1. `marionet.pose/v0` — per-frame **head/face + body + hands** (not redistributed video)
2. `MarionetClip` — VRM bone tracks for spine / chest / neck / head / arms / fingers **and** expression tracks (`source: "retargeted"` or `"authored"`)
3. `SignDesc` — articulatory syntax over the same three groups. The **hand** layer is two-level (features + names, below). Head and torso are `body.*`. Face is `nmf` (brows, mouth, gaze), compiled to expression weights — not a reserved empty field.

A VRM the model has never seen must play the clip. That is the portability test. Portability is necessary, not sufficient: the clip must also be **correct** against the source sign (E1 + E3), and the discrete IR must **buy something** over the raw B clip (E6).

Out of the paper: diffusion, SignVIP Stage I/II video models, continuous discourse, unlicensed crawls, conversation-level grammar. **Not** out: head, torso, face.

## Why this is a paper

| Prior | They emit | Gap |
|---|---|---|
| SignVIP / SignGAN / SignGen | RGB of a captured signer | Not retargetable; identity baked in |
| Neural Sign Actors / SignAvatars | SMPL-X | Strong motion, weak “bring your own avatar” |
| JASigning / SiGML / HamNoSys | Avatar from **hand-authored** phonology | No video induction |
| SignCLIP | Video–text embedding | Retrieval, not production syntax |
| Kalidokit / MediaPipe-VRM mocap | Live bones | No lexicon, no phonology, no multilingual eval |

Marionet’s contribution is the **syntax**: a discrete, compositional IR that a compiler already executes on VRM, induced from video at corpus scale. Without E6, a reviewer is entitled to say “Kalidokit + a classifier.” E6 is what makes the syntax the contribution rather than an assertion.

## Corpus

Isolated dictionary-style clips, many languages, uneven labels. Three supervision tiers:

| Tier | Labels | Role |
|---|---|---|
| **L1** | Gloss + **ASL-LEX 2.0 onset features** (OSF CSVs) | Supervised decoder: pose → feature fields. Names are a derived L1 lookup |
| **L2** | Gloss only (dictionaries, Signbank exports, EVK clips with a word) | Pose → clip always; cluster in **feature** space; nearest L1 name **or** `unmapped` |
| **L3** | Video only | Same clusters; human gloss + names later |

ASL is L1 so the decoder has a *feature* inventory with published reliability. Estonian (`eso` / EVK) and most languages are L2/L3 — **video is the corpus**. The pipeline does not wait for an Estonian-LEX, and it does not project EVK onto `ILY`.

License gate: `dataingestplan.md`. **Do this before any GPU job:** request ASL-LEX reference-video permission (videos are ©, not the OSF CSVs). Train on poses you are allowed to extract. No SpreadTheSign job script. YouTube-SL-25 is IDs, not a video dump.

### ASL-LEX video is gated; the CSVs are not

- OSF CSVs / key: public (cite Sehyr et al. 2021). Spreadsheet phonology is already in `data/signs/ase/asllex_signdesc.json`.
- Reference videos: © ASL-LEX.org; “may not be saved, displayed, or otherwise used for any other purpose without explicit permission” ([asl-lex.org/download](https://asl-lex.org/download.html)). Caselli et al. 2017 said the same for 1.0.
- If permission stalls, E2’s *video* supervision does not exist. Fallback is synthetic-from-lexicon poses plus any licensed multi-signer L2 corpus (INCLUDE / AUTSL / Wikisigns). That changes D’s design: no onset-windowed real hands, no signer-held-out ASL. Write the fallback into the paper; do not silently train on synthetic and call it E2.

### Single signer, fixed background

ASL-LEX clips are one model against an identical background. A decoder trained only on that will not generalize, and “held-out signers” is not a split you can cut from ASL-LEX. Plan:

- ASL-LEX E2 (if videos arrive): **sign-held-out**, not signer-held-out. Report it as such.
- Generalization: multi-signer L2 dictionaries, decoder **feature** pseudo-labels, signer-held-out eval on that corpus.
- E1 held-out signers come from L2/L3 video, not from ASL-LEX.

### Lemma boundary

**One lemma is one sign.** English “I love you” is a translation of `ILY`, not three words and not three letters.

ASL-LEX itself distinguishes **EntryID** (phonological/inflectional variant; n=2,723) from **LemmaID** (n=2,663). Policy:

- D and E2 evaluate at **EntryID**. Collapsing variants hides the phonology the decoder is for.
- Lexicon coverage, gloss retrieval, and “is this CAT?” evaluate at **LemmaID**.
- L2 corpora that give one gloss per citation clip are treated as EntryID=LemmaID unless the source says otherwise. Do not invent lemmas.

Boundary cases **excluded** from E2 exact-match (they stay in the lexicon as data, not as claimed decoder outputs):

- **Compounds** whose citation form is two sequential signs (`Compound.2.0` / `NumberOfMorphemes.2.0` > 1): report as multi-segment or skip.
- **Fingerspelled loans** (`FingerspelledLoanSign.2.0`): letter sequences, not a lexicalized shape. The A–Z library is a separate authored set, not decoder supervision.
- **Classifier / depicting** signs (not citation-form lexical items).
- **Initialized signs** (`Initialized.2.0`) that share a handshape with a letter but are one lemma: **keep**; they are not fingerspelling.

## Two-level `SignDesc`

v0 in the repo treats named handshape as the primary field and dumps ASL-LEX columns under `source.phonology`. That is the wrong native representation. Freeze this before the D pilot. Promote features; keep names as a language-specific overlay.

ASL-LEX 2.0 coded 23 properties of the **initial morpheme at onset**, plus change flags. They auto-generated a named `Handshape.2.0` from the feature tuple, found it split non-contrastive variants and merged contrastive ones, hand-corrected it, and warn that static handshapes misrepresent dynamic signs (Sehyr et al. 2021). Named-shape exact-match is therefore a **secondary, L1-only** metric, not the headline.

| Level | Fields | Whose inventory | Role |
|---|---|---|---|
| **Body** (video-native) | Head: tilt / turn / nod / shake; torso: lean / forward; face: brows, mouth, gaze | Induced from pose (`body`, `nmf`). Not an ASL-LEX column set | Always extracted. L1 spreadsheet does not supervise these; video does |
| **Hand features** (decoder-native) | Selected fingers, flexion, flexion-change, spread, spread-change, thumb position, thumb contact; major / minor / second-minor location; contact; path movement; repeated movement; ulnar rotation; Battison sign type | ASL-LEX 2.0 coding manual, frozen | Supervised on L1; clustered on L2/L3; the *hand* transfer layer |
| **Names** (per-language) | Solver id (`ILY`, `open_b`, `F`, …) and source code (`Handshape.2.0`, future EVK tags) | Per-language lexicon + `data/sources/v0_library_map.json` | L1: derived from the feature tuple or a lookup. L2/L3: linguist-named cluster, else `unmapped` |

Schema sketch (additive; compiler still consumes solver ids):

```
dominant: {
  features: { selectedFingers, flexion, flexionChange, spread, spreadChange,
              thumbPosition, thumbContact },
  location: { major, minor, secondMinor, contact },
  movement: { path, repeated, ulnarRotation },   // path ∈ ASL-LEX Movement.2.0
  orientation: "palm-out" | ...,                 // not an ASL-LEX column; keep as v0 extra
  handshape: "ILY" | null                        // name level; null if unmapped
}
signType: "OneHanded" | "SymmetricalOrAlternating" | ...   // Battison, incl. violations
body: { head: "nod" | "shake" | "tilt-left" | ... | "neutral",
        torso: "lean-left" | "lean-right" | "forward" | "neutral" }
nmf:  { eyebrows, mouth, eyegaze }                         // face; not a substitute for body
```

L1 cardinalities (n=2,723), so majority baselines are not a mystery:

| Field | n unique | Mode (share) |
|---|---|---|
| SelectedFingers.2.0 | 12 | `imrp` (45%) |
| Flexion.2.0 | 8 | FullyOpen (39%) |
| ThumbPosition.2.0 | 2 | Open (66%) |
| SignType.2.0 | 6 | OneHanded (39%) |
| MajorLocation.2.0 | 6 | Neutral (36%) |
| MinorLocation.2.0 | 37 | Neutral (36%) |
| Movement.2.0 | 8 | Straight (46%) |
| Handshape.2.0 | 58 | `1` (10%) |
| RepeatedMovement.2.0 | 2 | 0 (55%) |

A linear head that always predicts `imrp` / Straight / Neutral will look like a result unless those modes are in the table.

L2/L3 policy:

1. Always emit a **full-body** `MarionetClip` from geometric retarget (B): spine, chest, neck, head, arms, fingers, face weights. Discrete labels are optional.
2. Decode **features**. Cluster in feature space. A name is assigned only if a linguist named the cluster, or (L1 lookup) the feature tuple maps onto a solver id.
3. Nearest named L1 shape is **not** the default. Distance ≤ τ may *propose* a name; the published L2 row stays `unmapped` until accepted.
4. **Unmapped rate is a finding.** Report it per language in E4, with the nearest-L1 distance distribution.
5. Catalog extension is data work: a new EVK shape gets a solver spec and a map row. It is not silently coerced onto `open_b`.

Trade-off we accept: the compiler still needs solver primitives to move bones. Feature-level rows that do not map to a solver id are linguistically valid and `compileReady: false`. That is the honesty rule the lexicon already uses for unmapped ASL-LEX codes.

## Method

```
                    language ID (if any)
                           │
video ──► [A] pose extract ──► marionet.pose/v0
                           │
                           ├─► [B] geometric retarget ──► MarionetClip     (always)
                           │
                           └─► [C] pose + trajectory features
                                      │
                                      ▼
                               [D] translator ──► SignDesc (features; names derived)
                                      │
                                      ▼
                               [E] compiler ──► MarionetClip'  (library reconstruction)
                                      │
                                      ▼
                               [F] residual (optional): Clip' + pose → Clip
```

**A — Pose extract** (full body, cloud GPU). Three streams, same clip, same schema:

| Stream | GPU contract | Local stand-in | Writes |
|---|---|---|---|
| Body / torso | DWPose (or equivalent whole-body) | MediaPipe Pose | `body[].keypoints` — shoulders, hips, spine proxy |
| Head / face | DWPose face + head-pose / AU estimator | MediaPipe Pose face; Face Mesh when present | `face[].keypoints`, `face[].head` {yaw, pitch, roll} |
| Hands | HaMeR (MANO → 21 joints) | MediaPipe Hands | `left` / `right` 21×3 + `conf` + `occluded` |

Isolated clips, 30 fps cap, batch 1 on one 48GB card. Do not train SignVIP video diffusion. Output pose JSON; do not commit mp4. Body is not a wrist-station helper. Head is not an NMF footnote. A clip with no usable torso/head is a **partial extract**, reported in E0, not a successful A.

**Pose uncertainty.** HaMeR hallucinates fingers under self-occlusion (two-handed signs, crossing the body). Every hand frame carries `conf ∈ [0,1]` (HaMeR per-joint confidence or 2D–3D reprojection error, mapped to `[0,1]`; MediaPipe uses handedness score) and an `occluded` flag. Below `τ_pose = 0.35` the frame is `occluded: true` and **does not vote** for a handshape. D must emit `occluded`, not a discrete label. E0 reports occlusion / no-hand / blur; those frames are not silent training data.

**What D is trained on.** Handshape / configuration heads consume the **wrist-relative 21×3 joint cloud plus finger curls** (`python/marionet/features.py`), never raw MANO PCA (`β`, pose coeffs). Train and infer share that vector. MANO stays an extract-time parameterization; the decoder never sees it.

Tokenizer / leakage: v1 does **not** use a pretrained SignVIP FSQ codebook. Features are computed here. If an FSQ ablation runs, train the quantizer **only** on the training split of extracted poses; never on eval signs, never on SignVIP’s video-decoder training set.

**Do not run corpus-scale A until the D pilot (E2a) has frozen the label space and shown that trajectory features move path-movement F1.** A is the expensive, **one-time** corpus-processing stage (days, size-bound) — not a per-inference cost. Discovering that clip-pooled energy cannot tell Circular from Straight after extracting thousands of clips is the failure this document exists to prevent.

HaMeR is MIT code but **MANO is non-commercial scientific-research only** and forbids distributing the model. Verify, in writing, whether publishing derived 21-joint pose JSON (no mesh, no β) is permitted under the MANO license and the HaMeR weight terms before any pose dump is a paper artifact. If not, keep poses local and publish only `SignDesc` + compiled clips.

**B — Geometric retarget** (no net). Landmarks / MANO joints → VRM eulers: arms + 15 finger bones × 2 **and** spine / chest / neck / head from shoulder–hip geometry plus head pose (`axial_eulers` in `scripts/marionet_pose.py`), plus face → expression weights. Rest-relative, same convention as `library.js`. A clip that only moves fingers is a puppet, not a sign. Mandatory baseline. Already Marionet syntax. Safest result in the paper; not the discrete claim.

**C — Features.** Three blocks, clip-level or onset-windowed (see Temporal structure). Freeze this vector before E2a.

1. **Axial / face** (video-native; not in ASL-LEX columns): head yaw/pitch/roll, torso lean/pitch, brow–eye and mouth geometry → `body` + `nmf`.
2. **Hand configuration** (onset / pooled): wrist-relative 21×3 cloud, finger curls, spread, thumb, arm station (`python/marionet/features.py` today). This can in principle support selected fingers, flexion, thumb, location.
3. **Hand trajectory** (missing today; required for the movement field): wrist path as a 3D polyline on the onset–offset window.
   - direction: start-to-end unit vector (signer space)
   - curvature: max deviation from the chord, over path length
   - plane: normal of the best-fit plane
   - repetition: peak of wrist-speed autocorrelation
   - ulnar-rotation proxy: integrated forearm roll / wrist twist energy
   - path length vs displacement (BackAndForth vs Straight)

v1 motion energy (mean |Δwrist|) **cannot** distinguish Circular / Curved / Straight / Z-shaped / X-shaped / BackAndForth — they can share similar energy. A linear head on that vector cannot produce `Movement.2.0`. Do not pretend otherwise.

FSQ tokens remain an ablation if the linear feature heads saturate. SignVIP needed discrete codes to *decode video*; we classify phonology.

**D — Translator: features → `SignDesc`.** Linear multi-head decoder (`scripts/phonology.py`), **re-headed onto the ASL-LEX coding manual** before the pilot:

| Head | Label space | Notes |
|---|---|---|
| selectedFingers | 12 | `imrp`, `i`, `im`, `t`, … |
| flexion | 8 | FullyOpen … Crossed; NA is a class |
| spread | 3 | 0 / 1 / NA |
| thumbPosition | 2 | Open / Closed |
| thumbContact | 2 | |
| flexionChange, spreadChange, repeated, ulnarRotation, contact | binary | change flags; need trajectory or onset-vs-offset curls |
| majorLocation | 6 | Neutral, Head, Hand, Body, Arm, Other |
| minorLocation | 37 | hierarchical: predict given major, or two-stage |
| pathMovement | 8 | Straight, Curved, None, Circular, Z-shaped, BackAndForth, Other, X-shaped |
| signType | 6 | Battison, including DominanceViolation / SymmetryViolation |
| named handshape | 58, **L1-only secondary** | not the transfer head |

Named-over-letters (`ILY` wins over `{I,L,Y}`) stays as a **name-level** decode rule, not as the thing L2 inherits.

**Reject, do not force.** Class max-prob `< τ_cls` (0.45 on L1, **0.55 on L2/L3**) → `unmapped`, not argmax. Pose `conf < τ_pose` or `occluded` → field `occluded`, `compileReady: false`. A wrong discrete handshape is worse than no name. The v0 named-head code already does this (`decode_heads` in `python/marionet/model.py`); feature heads inherit the same reject rule.

L1: supervised on ASL-LEX-aligned video poses if permission arrives; otherwise synthetic-from-lexicon, and E2 is labeled as such. L2: extract clip always; cluster features; names only as above. L3: cluster or `unmapped`. A VLM that emits the same JSON is an ablation, not the spine.

Why linear is the first model, not the claim:

- Configuration features are already phonological (curls, spread, station). A linear head is a named readout, not a bet that pose→phonology is linearly separable in RGB.
- Path movement is **not** in that class until trajectory features exist. Linear-on-energy is expected to fail pathMovement; that is a spec bug, not a model class result.
- Linear heads **can saturate**. That is a go/no-go, not a footnote.

Fallback if E2a saturates (in order, stop at the first that beats linear on held-out **feature** macro-F1, pathMovement included):

1. **Onset window** — pool ASL-LEX `SignOnset(ms)`–`SignOffset(ms)` when aligned; else high-energy middle third. Not the whole citation including preparation/recovery.
2. **Small temporal encoder** over per-frame curl/station + wrist tokens (≤2 layers, no pretrained vision).
3. **Structured prediction** — independent heads replaced by a CRF / exclusive-OR so illegal feature tuples (and `ILY` vs `I`) cannot both fire.

If (1)–(3) all fail on L1 feature macro-F1 vs majority, the paper reports that result and the contribution collapses to B + the IR.

**E — Compiler** (`src/compile.js`). This is the inductive bias. The claimed reconstructed artifact is `compile(SignDesc)`, not the retargeted clip. Semantics below. Compiler input remains solver ids + location + movement type; the feature→solver map is explicit and lossy (`v0_library_map.json`). Feature rows with no solver id do not compile.

**F — Residual.** Optional bone residual if the library is stiff. Ablate it. Must not become “copy HaMeR into VRM.”

Let `θ_phon(t)` be the compiler eulers and `θ_pose(t)` the geometric-retarget eulers. Split bones into **macro** (shoulder, upper arm, lower arm, wrist) and **finger**.

```
θ_macro(t)  :=  θ_phon(t)                                 # locked; residual is identically 0
r_finger(t) :=  clip( θ_pose(t) − θ_phon(t), −ε, ε )      # ε = 0.12 rad
θ_finger(t) :=  θ_phon(t) + r_finger(t)
```

Forbidden: applying `θ_pose` to any macro bone; a residual that would change the `SignDesc` features re-extracted from the result; using residual as a latent pose code. Implementation of the hard cap: `python/marionet/residual.py`. Clip `source` becomes `compiled+residual`.

If a learned residual is used on top of that cap:

- Predicted in the **same euler convention** as the compiler, added to compiled **finger** bones only, not to raw HaMeR, not to macro-pose.
- Bottleneck: residual MLP hidden size ≤ 32; output is per-finger delta, not a full pose.
- L2 penalty on delta magnitude; train with a reconstruction term **and** a term that keeps `SignDesc` **features** recoverable from the residualized clip.
- Cheat metric (must be in the E5 table): mean bone-angle ‖Clip − Clip'‖ / ‖Clip'‖; E1 numbers for Clip' alone, Clip'+residual, and B. If residual ≈ B − Clip', it is copying HaMeR.
- Hard cap: if ablating the residual drops named-shape / feature recoverability by less than the drop in MPJPE, keep the residual out of the claimed system.

### Compiler semantics (E)

`compile.js` is deterministic, side-effect free, and already in the repo. Informal spec:

**Input.** A `marionet.signdesc/v0` object that `validateSignDesc` accepts and `isCompilable` returns true for. Compilable iff `compileReady === true`, or (legacy) both handshape and location are in the solver catalog.

**Defaults (underspecification).** Missing `orientation` → `palm-out`. Missing `location` → `fs-station`. Missing `movement` → hold. Unknown movement `type` → hold. Missing `body.head` / `body.torso` → `neutral` (no extra axial motion). Face `nmf` compiles to VRM expression tracks; `nmf.head` is a fallback for `body.head`. The compiler does not guess a handshape; unknown solver ids throw.

**Pose.** For an articulator `{handshape, location, orientation}` and a side:

```
base = merge(solveLocation(loc, side), solveOrientation(ori, side), solveHandshape(hs, side))
```

`solveHandshape` maps a named id onto 15 finger eulers (curl 0 = extended, 1 = fist). A **list** of ids is composed by min-curl / max-spread / min-thumb (`composeHandshapes`). That composition is only for unnamed simultaneous selections, never for `ILY`.

**Two-handed.** `2h-symmetric` and `2h-alternating` copy the dominant articulator to the other side (alternating does not yet offset phase; v0 limitation, report it). `2h-asymmetric` compiles `nondominant` onto the other side with defaults `location=weak-hand`, `orientation=palm-in`; if that articulator is missing or unmapped, fall back to dominant-only. Battison `DominanceViolation` / `SymmetryViolation` are feature labels; the solver still uses the four `handed` bins until the library grows.

**Time.** Every clip eases in from rest over `RISE = 0.4s` so playback does not snap. Then:

| ASL-LEX `Movement.2.0` | Compiler `movement[0].type` (today) | What the solver does |
|---|---|---|
| None | hold | Hold `base` for 0.9s |
| Straight | linear | Upper-arm forward pulse, `reps` times |
| Curved | arc | Wrist yaw arc |
| Circular | circle | Four-point wrist loop, `reps` times |
| Z-shaped | trace + `path: "z"` | Z-path on the wrist |
| BackAndForth | linear, `reps` ≥ 2 | Pulse, repeated |
| X-shaped / Other | hold (unmapped movement) | Do not fake a path; `compileReady` may still be true on shape+location |

Only the **first** movement segment is compiled. Sequential compounds are out of v0 (see Lemma boundary). Interpolation between keyframes is linear in euler space at playback (`src/vrm.js`).

**Axial overlay.** After the manual solver, `body.head` / `body.torso` write `spine`, `chest`, `neck`, `head`. `nod` and `shake` are cyclic keyframes, not a frozen tilt. `lean-left` / `lean-right` / `forward` are holds. Place `location: head` never substitutes for this overlay — that only raises the arm.

**Output.** `marionet.clip/v0` with `source: "authored"`, `vrmHumanoid: "vrm1"`, bone tracks `[[t, [x,y,z]], ...]` including axial bones when `body` is non-neutral, and `expressions` from `nmf` (VRM preset names: `surprised`, `angry`, `aa`, `ee`, `ou`, `lookLeft`, …).

**Refusal.** Lexicon-only rows (`compileReady: false`) throw. The player must not invent a pose.

This spec is what E5 evaluates. If a reconstructed clip looks wrong, the bug is either D (wrong `SignDesc`) or this mapping (underspecified movement), not “the neural net.”

### Temporal structure

Citation-form clips usually contain **preparation, stroke, hold, recovery** (Kita / sign-phonology stroke-hold). v0 does not run a learned phase segmenter.

ASL-LEX already publishes `SignOnset(ms)` / `SignOffset(ms)` / `SignDuration(ms)` / `ClipDuration(ms)`. When videos are aligned, **that window is the D input**, not the whole clip. That matches the coding manual (onset of the first morpheme).

| Path | What it uses | Risk |
|---|---|---|
| B retarget | The whole clip | Signer-specific prep/recovery ride along; hurts “lexical sign” purity, helps naturalness |
| D translator | Onset–offset if aligned; else velocity–energy nucleus | Prep/recovery can smear flexion (`open_b` vs `B`) if the window is wrong |
| E compiler | Canonical rise + stroke + hold | No signer-specific prep; more portable, less natural |

Default assumption: **dictionary clips are already trimmed to the citation**, not to a conversational utterance. We do not claim stroke-only isolation. E2a reports D on (i) full clip, (ii) ASL-LEX onset–offset, (iii) velocity–energy nucleus (`canonical_span` in `scripts/marionet_pose.py`: rest from edge-frame wrist height, active span, 12% trim of prep/retract). If (ii) or (iii) wins, that window becomes the translator input and we say so. **SignDesc features use only the nucleus.** B keeps the full clip so playback still eases in and out. E already eases from rest.

## Experiments (rented GPU)

**Sequence the risk.** Do not rent the 48GB box for corpus-scale A until E2a is done.

| Order | What | Why |
|---|---|---|
| 0 | ASL-LEX video permission + MANO/HaMeR pose-publish check | Without videos, E2 is synthetic; without a license answer, pose dumps may be unreleasable |
| 1 | **E2a D-pilot** on a few hundred aligned clips (or synthetic, labeled as such). Freeze label space to the coding manual. Confirm trajectory features move pathMovement F1 | Cheap; this is where the onset-vs-pooled mismatch shows up |
| 2 | E0 + A on the licensed subset that survived the pilot | Expensive; now justified |
| 3 | E2 / E2r / E2c, E1, E3, E5, E6 | Claim-making |
| 4 | E4 | Only after L1 features actually decode |

All of E0–E6 are **proposed**. D exists as code on **named** heads over synthetic poses. That is not E2.

| ID | What | Success |
|---|---|---|
| **E0** | Extract the corpus; fail rates (no hand, two people, blur, **occlusion**). **Breakdown by skin tone and lighting** (even a coarse Fitzpatrick bin + indoor/outdoor/uniform-backdrop). Pose estimators fail unevenly | Appendix table; a skin-tone gap is an ethics finding, not a footnote |
| **E1** | Geometric retarget on held-out **signers** (L2/L3; not ASL-LEX) | See Metrics. Not raw HaMeR-vs-VRM MPJPE |
| **E2a** | **Go/no-go, before A.** Linear heads on a labeled subset. Report per-feature F1 vs **chance and majority**, pathMovement F1 with vs without trajectory features, named-shape exact-match as secondary | Linear must beat majority on **feature macro-F1** **or** we switch to fallback (1)–(3) **or** we drop D as a claim. If pathMovement does not beat majority without trajectory features, that is a spec bug — fix C, do not add a net |
| **E2** | Pose → feature `SignDesc` on ASL-LEX-aligned clips, **sign-held-out**. Signer-held-out lives on L2 if ASL-LEX stays one model | Per-field F1 on **accepted** labels; named-shape exact-match secondary (`ILY` ≠ I, ≠ L, ≠ Y). **Report `unmapped` / `occluded` rates** — do not compute F1 on forced argmax. Ceiling = published kappas, not 1.0 |
| **E2r** | Annotation reliability. 3 annotators, 50 signs, **feature** labels (not free text). Report pairwise κ / exact-match per field | F1 is interpreted against this ceiling **and** against ASL-LEX’s own κ |
| **E2c** | Consistency: same EntryID, different signers → same **features** (ignore orientation jitter) | Secondary; only defined on multi-signer data |
| **E3** | Same **compiled** clip on ≥3 VRMs, **including one stylized non-human-proportioned** mesh | Human: “is avatar 2 doing the same sign as avatar 1?” Binary, native raters. Automatic: **rotation-space** DTW / mean euler error, not position DTW. Position DTW is ill-defined across limb lengths |
| **E4** | One unwritten language (EVK if the lab shares; else INCLUDE / AUTSL / BY-SA Wikisigns) | Train **feature** decoder on L1, extract on L2, cluster, report unmapped rate. Gloss retrieval Recall@5 if labels exist. Native 2AFC/3AFC on a 20-sign probe (protocol below). Fallback is **not** EVK: if it fires, the claim shrinks to “cross-lingual feature transfer onto a second isolated-sign corpus” |
| **E5** | Compiler reconstruction ± residual | Discrimination, not MOS-as-conclusion. Residual must lose the F cheat metric |
| **E6** | **IR utility.** What `SignDesc` buys over B | All three must be shown, or the syntax is not the contribution: (1) **edit-and-recompile** — change location, keep features/handshape, new clip without re-extracting; (2) **phonological search** — “all two-handed signs at chin” over the induced corpus, precision vs a gloss grep; (3) **proportion** — `Clip'` plays on a long-armed and a stylized VRM with no per-avatar retuning; the B clip, being source-skeleton positions, does not. (3) also settles E3 |

Not an experiment: training SignVIP’s UNet.

ASL-LEX labels are **sign-level, onset-coded, not frame-aligned**. E2 is “does the (onset-windowed) decoder recover the spreadsheet row?”, not “does frame 17 match.” Do not pretend otherwise.

## Metrics

| Layer | Metric |
|---|---|
| Pose extract | detection rate; occlusion rate; **by skin tone and lighting** (E0) |
| Clip (E1) | After a stated canonical frame: shoulders+hips Procrustes (or bone-length normalize to the VRM rest). **Wrist-trajectory error** (time-aligned) + **finger joint-angle error**. Raw position MPJPE between HaMeR and a differently-proportioned VRM is scale-ambiguous and is not the headline |
| `SignDesc` (E2) | Per-field F1 vs **uniform chance** and vs **majority-class**; feature macro-F1; named-shape exact-match (L1, secondary); unmapped rate (L2) |
| Ceiling | ASL-LEX 1.0 κ (Caselli et al. 2017): movement **0.65**, flexion 0.75, minor location 0.71, major location 0.83, selected fingers **0.90**, sign type 0.82. ASL-LEX 2.0: all κ > .6 on 50 double-coded signs (Sehyr et al. 2021). Cite these as the realistic ceiling. E2r is our own 50-sign check on the solver/feature labels |
| Portability (E3) | Rotation-space DTW / mean euler error across VRMs; native “same sign as avatar 1?” |
| Residual (F, E5) | ‖Clip − Clip'‖ / ‖Clip'‖ in euler; E1 numbers for Clip', Clip'+residual, B |
| IR utility (E6) | Edit success (field changed, others held); search precision@k; cross-VRM euler error of Clip' vs B |
| Human | Protocol below. MOS is diagnostic, not the conclusion |

### Human protocol (define now)

MOS on 2-second citation signs is noisy and expensive. Primary human numbers are **discrimination**.

- **Raters:** Deaf native signers of the language under test. Linguists who are not native signers may sit in for diagnostic notes; they do not contribute the reported mean. Hearing L2 signers are excluded from the reported mean.
- **N:** ≥ 8 native raters per language for the claimed tests; E2r uses 3 annotators on 50 signs (can overlap).
- **E5 reconstruction:** 3AFC — original citation video vs compiler reconstruction vs a phonological distractor (minimal-pair neighbor where possible). Chance = 1/3. Also ABX on minimal pairs (e.g. `I` vs `ILY` vs `Y` at the same location) so named-shape errors are visible to humans, not only to F1.
- **E3 portability:** “Is avatar 2 doing the same sign as avatar 1?” Binary. Source video not on screen. One stylized non-human-proportioned VRM in the set.
- **E4 “is this EVK CAT?”:** 2AFC (this clip vs a same-language distractor) plus an explicit **“not a sign I know”** key. Items with that key are dropped from the rater’s mean and counted in a coverage table. Probe: 20 signs. Native yes-rate / 2AFC accuracy reported separately. No source video on the same screen as the avatar for the identification question.
- **E4 phonological fields (same native raters, same 20-sign probe):** after identification, a second screen with the source citation (not simultaneous with the first question) asks yes / no / unsure per field: “Did the avatar use the correct **handshape** for this lemma?” Same items for location, path movement. Headline is per-field accuracy, not MOS. This is the number that tests whether L1 features transferred, vs whether the avatar merely looks fluent.
- **MOS:** 5-point naturalness only, as a diagnostic appendix, not the success criterion.
- **Items:** randomized, one VRM visible at a time.
- **Compensation:** paid at or above the lab’s standard Deaf-consultant rate; written in the ethics appendix. No unpaid “community review.”

E4 success, restated: retrieval > chance if labels exist, **and** native 2AFC ≥ 0.75 on the 20-sign probe (or yes-rate ≥ 0.6 if 2AFC is impossible). Unmapped rate is reported either way. MOS ≥ 3.0 is not a gate.

## Compute

Extract is a **one-time corpus cost**. Lookup (nucleus window, B, D infer, E, optional F) is **near-real-time on a Mac**. Do not quote GPU-days as if they were per-sign inference. That split is a selling point.

| Job | When | Box | Order |
|---|---|---|---|
| E2a D-pilot | once, first | Mac / small GPU | hundreds of clips |
| A extract | **once per corpus** | 1× 48GB | days, corpus-size bound; **after** E2a |
| C FSQ (ablation only) | optional, once | same GPU | 1–2 days |
| D translator train | once (L1) | Mac or GPU | minutes (linear); 1–2 days if FSQ |
| B + D infer + E compile | **every lookup** | Mac | real-time / near-real-time |
| F residual | optional lookup | Mac | real-time |
| Diffusion | — | — | do not rent |

Mac plays clips and compiles `SignDesc`. It never trains a video model (the numpy linear heads are laptop-scale).

The compiler is JavaScript (`src/compile.js`), runs in the browser and under Node (`scripts/check_compiler.mjs`). It is a closed-form bone solver: no IK loop, no network. Interactive use is a single `compileSignDesc` call per lemma (sub-millisecond on a laptop). The player already does this on search. That is the “JavaScript avatar” claim: playback and compilation are client-side; training is not.

## Skeleton

1. Intro — video → full body (head / body / hands); VRM-portable syntax; video is the corpus for unwritten SLs
2. Related — SLVG vs SLP vs avatar compilers vs mocap
3. IR — full-body `MarionetClip`; `SignDesc` with body + face + two-level hands
4. Method — A–F; axial + hand features; SignVIP front-end architecture only
5. Data — L1/L2/L3; video permission; single-signer limit; license table; unmapped rate
6. Experiments — E2a before A; E1–E6; kappas as ceiling; discrimination not MOS
7. Limitations — isolated ≠ conversation; discourse grammar out; occlusion; residual cheating; sequential compounds; VRM-only
8. Ethics — consent, sovereignty, compensation, not an interpreter, pose-estimator disparity

## Limitations (explicit)

- **Citation form, not grammar.** Head, torso, and face **are the video task** (B retargets them; E compiles `body` + `nmf` → bones and expression tracks). ASL-LEX 2.0 does **not** code those columns — supervision is pose-induced, not spreadsheet-supervised. Report them separately from hand-feature F1. Grammatical NMFs as *utterance type* (y/n questions, topicalization, role shift) and a full mouthing inventory are out of scope. Coarse brows/mouth/gaze in a citation clip are in.
- **Place ≠ articulator.** `location: head` means the hand is at the head. It does not nod the neck. Both can be true of one sign.
- Isolated citation form ≠ conversation.
- Occlusion and two-signer frames fail at A (E0). Frames below `τ_pose` are `occluded`, not a guessed handshape. Detection will vary by skin tone and lighting; that is measured, not assumed away.
- Residual can cheat; F’s bottleneck + recoverability term + cheat metric are the guardrail.
- Compiler v0 compiles one movement segment; compounds and depicting signs are excluded.
- Portability is across **VRM 1.0** humanoids, not arbitrary avatars. glTF / SMPL retarget is future work.
- **Cross-linguistic names.** The solver catalog is ASL-biased. The feature level is the transfer claim; nearest-ASL-name is not. If E4’s unmapped rate is low because everything snapped to `open_b`, that is a failure, not coverage.
- ASL-LEX videos may never arrive. Then E2 is synthetic + L2 pseudo-label, and the paper says so.
- Onset-coded labels vs whole-clip motion: even with trajectory features, change flags (`FlexionChange`, `SpreadChange`) are a different object than path shape. They may stay weak; report them separately rather than averaging them into a vanity macro-F1.

## Ethics

- **No scrape.** Official dumps only (`dataingestplan.md`). No SpreadTheSign, no YouTube footage, no Internet Archive-as-licence.
- **Consent.** L1 spreadsheets are published under stated licenses (ASL-LEX OSF files). L1 **videos** wait for written permission. L2/L3 video is used only with a license that allows pose extraction; pose JSON is derived data, not redistributed video, and is not a substitute for the signer’s consent when the license requires it. Contract corpora (tier C) wait for written permission.
- **MANO / HaMeR.** Do not publish derived poses until the weight and MANO licenses are checked. MANO is non-commercial research; that also caps any commercial demo that ships HaMeR-derived files.
- **Data sovereignty.** For L3 / unwritten languages, the lab that shares the clips retains the right to withdraw them. Derived `SignDesc` and clips for that language are not published without that lab’s (and, where identifiable, the signers’) agreement. EVK is the named example: no EVK dump, no EVK release.
- **Deaf collaborators.** Native signers are evaluators and, where they choose, co-authors of the language-specific sections — not “validators” of a finished system. Compensation as in the human protocol. Authorship is offered, not assumed.
- **Not an interpreter.** Marionet emits isolated citation-form clips for a user-chosen VRM. That is a dictionary / education / UX artifact. It is not a translation service, not a substitute for a qualified interpreter, and not a claim that an avatar can stand in for a signer in medical, legal, emergency, or any high-stakes communication. The system has no discourse model, no turn-taking, no guaranteed lexical coverage, and no accountability path that an interpreter has. If a deployment cannot keep that boundary, it should not ship.
- **Identity.** Geometric retarget strips appearance; do not re-identify signers from pose. Do not train generative video.
- **Estimator disparity.** E0’s skin-tone / lighting breakdown is an ethics result. A pipeline that only works on the ASL-LEX uniform backdrop against a light-skinned model is not a multilingual fieldwork tool.

## Success

A held-out isolated video, possibly EVK, becomes a JSON clip that a **new VRM 1.0** performs **with head, body, and hands**, plus a `SignDesc` a linguist can read — body (`head=nod`, `torso=lean-left`), face, then hand features (`selectedFingers=imrp`, flexion FullyOpen, major Head, path Straight), and a name only where the language has one (`ILY` at `chest-front`, not a latent and not a chord of letter signs). **One lemma is one sign:** English “I love you” is a translation of `ILY`, not three words and not three letters. A clip that only wiggles fingers is the failure mode, not the paper.

Off ASL, that claim is only as strong as the refuse-to-name rule: a forced nearest primitive is not a lemma. The interesting L2 result is a cluster a linguist can name.

E6 must show that this IR does something the B clip cannot (edit, search, proportion-free playback). If it does not, B is the paper.

If the only thing that works is HaMeR projected onto bones with an unreadable codebook, that is the baseline, not the paper. If linear D saturates and the fallbacks do too, the paper reports B + the IR and does not pretend a phonology decoder.

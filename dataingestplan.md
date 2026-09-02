# Data ingest plan

Treat the five catalogs as **indexes and dump endpoints**, not as sites to HTML-mirror. For Marionet (phonology → `SignDesc` → VRM clips), the useful material is structured lexical/phonological records plus, later, a small set of isolated-sign videos. SpreadTheSign stays off the ingest list.

The Hub catalog being CC BY 4.0 does **not** license WLASL, Signbank videos, or Wikisigns clips. Verify the original page every time. The Hub’s own `LICENSE_ATTRIBUTION.md` is wrong in several places (WLASL is C-UDA, not CC BY; ASL Citizen is not CC BY; ASL-LEX website is NC).

Keep disk small: metadata, spreadsheets, and XML dumps only until a later step explicitly asks for motion or video. No 3D-LEX FBX/GLB packs, no WLASL mp4 cache, no Wikisigns crawl, no site mirrors.

## License gate (only ingest through this)

| Tier | You may | Sources |
|---|---|---|
| **A — CC BY / BY-SA dumps** | Download, derive `SignDesc`, retarget, redistribute derived artifacts with attribution (SA if the source is SA) | ASL-LEX 2.0 **OSF files**, 3D-LEX v1.0 (deferred: mocap is large), Global Signbank **NGT public**, Wikisigns (LSM, Malagasy, West Bengal: BY-SA 4.0), Wikisign LSC (BY-SA 2.0 ES), SignPuddle **SPML/FSW notation**, BdSL47 |
| **B — NC / C-UDA / research** | Local research, pose extraction, **no commercial, no video redistrib** | WLASL (C-UDA; annotations only are theirs), How2Sign (BY-NC), OpenASL (BY-NC), ASL Signbank (BY-NC-SA), ASL-LEX **website** (BY-NC — use OSF instead) |
| **C — register / contract** | After they say yes | DGS Corpus, BSL Corpus / SignBank, ASLLVD, BOBSL, most Signbank forks |
| **D — skip** | — | SpreadTheSign, YouTube-SL-25 videos (IDs are BY, footage is YouTube ToS), anything with no stated license, Internet Archive captures used as a licence |

Marionet’s README already says training data is public isolated corpora and pose is not redistributed video. That maps onto **A for the lexicon IR, B only if we stay non-commercial**.

## Disk budget

Target: keep the repo and working tree in the **low tens of megabytes**, not gigabytes.

| Allowed now | Typical size | Notes |
|---|---|---|
| License allowlist + citations | < 50 KB | Metadata only |
| ASL-LEX 2.0 OSF CSV/xlsx | ~1–5 MB | Phonology spreadsheet; no clips |
| SignPuddle ASL SPML (`sgn4.spml`) | ~4 MB | Official XML dump (`Content-Length: 3985275`) |
| Derived `SignDesc` JSON | ~1–3 MB | Compact; this is what the compiler reads |
| **Do not fetch** | | |
| 3D-LEX FBX/GLB animation packs | hundreds of MB–GB | CC BY 4.0, but too heavy; fetch one sign later if needed |
| WLASL videos | ~5 GB+ with dead links | C-UDA; keep out of the tree |
| How2Sign / BOBSL / DGS media | tens–hundreds of GB | Continuous signing; not isolated `SignDesc` |
| Wikisigns / Signbank HTML+mp4 crawls | unbounded | No dump, so no crawl until a language has no spreadsheet |

Hard rules:

- Cap any single download at **20 MB** unless a later task raises it.
- Prefer official dumps (`Content-Length` via `HEAD`) over recursive wget.
- Gitignore raw caches. Commit allowlist, converters, and derived JSON — not mp4/fbx/glb.
- Do not clone the Hub or Compendium as data; copy the few fields we need.

## What each source is for

**Sign Language Dataset Hub** (`rudra496/SignLanguage-Dataset-Hub`)  
Finder, not a corpus. The repo is CC BY 4.0; each listed dataset is not. Parse `DATASETS.md` and `docs/LICENSE_ATTRIBUTION.md` into a local allowlist, then **re-verify every license on the original page** before download. Do not treat Hub labels as ground truth.

**Sign Language Dataset Compendium** (Hamburg; catalog text CC BY 4.0)  
Best structured metadata: language, size, licence, access route. Ingest catalog rows (HTML or the CC BY PDF). Use it to fill gaps the Hub misses (Signbanks, SignWikis, national dictionaries). Following a Compendium URL is not a licence to take that dataset.

**Global Signbank** (`https://signbank.cls.ru.nl/`)  
Lexical database, not a public video dictionary. NGT public subset is **CC BY 4.0** (~6.5k public glosses). Register, request the NGT dataset, use **CSV / ECV export**. Do not scrape the HTML viewer. Other hosted languages are private until a dataset manager grants access.

**Wikisigns** (`http://www.wikisigns.org/`)  
Community video dictionaries, **CC BY-SA 4.0** on the ones Compendium lists (Mexican SL ~2.2k, Malagasy ~1.3k, West Bengal). ShareAlike applies to adapted video; keep source clips under SA and attribute per dictionary. Phonology notes we write are ours; do not re-host their MP4s as CC BY. Deferred until a language has no Signbank/OSF dump.

**SignPuddle Online** (`https://www.signbank.org/signpuddle`)  
Do **not** scrape. Every puddle has an official dump:

```
https://www.signbank.org/signpuddle2.0/data/spml/sgn{ID}.spml
```

ASL dictionary is `sgn4.spml` (~4 MB XML). Steve Slevinski has told researchers to use those files. Notation (FSW/SWU) is the product; SignWriting symbols are CC BY-SA 3.0. Attached videos, if any, are contributor-specific — ingest notation first, media only with a per-entry licence.

## Ingest phases

### Phase 0 — allowlist

Build `data/sources/allowlist.jsonl` with one row per dataset:

```
id, language_iso, modality, license, spdx, commercial_ok, video_redistrib_ok,
access, canonical_url, citation, notes, disk
```

Populate from Hub + Compendium. Drop anything that is not A or B. Drop SpreadTheSign explicitly. Mark 3D-LEX and WLASL as `disk=deferred`.

### Phase 1 — dumps, not crawlers

Do these in order. All are official download paths.

| Priority | Dataset | How | What Marionet gets | Disk |
|---|---|---|---|---|
| 1 | **ASL-LEX 2.0** | OSF: https://osf.io/zpha4/ (CC BY 4.0 on the **files**; website UI is BY-NC) | 2,723 signs: handshape, location, movement, selected fingers, major/minor location, lexical class, Signbank IDs. `SignDesc` seed for ASL. | fetch |
| 2 | **SignPuddle ASL** | `sgn4.spml` | Gloss + FSW as a phonological/notation prior, not as video | fetch |
| 3 | **Global Signbank NGT** | Register → CSV export of public signs | Gloss, translations, phonetic fields; video URLs only if the dataset page still says BY | later (CSV only) |
| 4 | **3D-LEX v1.0** | OSF: https://osf.io/cv276/ (CC BY 4.0). FBX + GLB | 1,000 ASL + 1,000 NGT mocap signs; closest VRM-ready clips | **deferred** |
| 5 | **Wikisigns** | Polite crawl of `/list/{lang}/{dict}` only if no dump exists | Isolated citation-form videos for languages with no Signbank | **deferred** |

**WLASL** (tier B): clone is small; the videos are not. Use `WLASL_v0.3.json` annotations only. Do not run their YouTube downloader. Dead links are normal; do not scrape random ASL sites to fill holes.

Skip How2Sign / OpenASL / BOBSL / DGS until continuous signing is in scope. They do not help isolated `SignDesc`.

### Phase 2 — map into Marionet IR

```
ASL-LEX row          → SignDesc (handshape, location, orientation, movement)
SignPuddle FSW       → optional notation features / coverage check
3D-LEX FBX/GLB       → MarionetClip (gold motion)     [deferred]
Wikisigns / WLASL    → MediaPipe pose → clip residual [deferred; WLASL research-only]
Global Signbank NGT  → same pipeline for NGT once ASL lexicon compiles
```

Join keys: ASL-LEX Entry ID ↔ ASL Signbank ID-gloss ↔ 3D-LEX alignment (they already aligned to existing benchmarks) ↔ WLASL gloss (lossy; many-to-many).

Compiler constraint: the v0 expertise library only solves fingerspelling handshapes and a few locations (`rest`, `fs-station`, `neutral-space`). ASL-LEX rows that map onto those primitives can compile today; the rest stay in the lexicon as `SignDesc` with `source` phonology attached until the location/handshape catalogs grow.

### Phase 3 — HTML only when there is no dump

- **Wikisigns** list pages (BY-SA, small).
- **SignWiki** instances (Iceland, Finland, Namibia, Tanzania, Georgia): MediaWiki API, not wget. Check each wiki’s licence footer first.
- Never: SpreadTheSign, Signbank HTML viewers, search boxes, infinite scroll.

If a crawl is ever justified: 1 req/s, identifiable user-agent, honor robots.txt, stop on 429, store `source_url` + `license` + `retrieved_at` on every object. Cap total media at 20 MB until the budget is raised.

## What not to do

- Do not wget a whole dictionary site because the Hub listed it.
- Do not copy Hub’s CC BY label onto WLASL or ASL Citizen.
- Do not put WLASL / How2Sign mp4s in a public repo or CDN.
- Do not treat Internet Archive captures as a licence.
- Do not mix BY-SA Wikisigns video into a CC BY lexicon dump without keeping SA on those files.
- Do not pull 3D-LEX animation zips “just in case.”
- No SpreadTheSign scraper belongs in this repo.

## First month (disk-safe)

1. Check in `data/sources/allowlist.jsonl` + citations (catalog metadata only).
2. Import ASL-LEX OSF spreadsheet → `data/signs/ase/asllex_signdesc.json` (features only, no video).
3. Pull SignPuddle ASL SPML for gloss coverage, not motion. Keep the XML under `data/raw/` (gitignored) or parse-and-discard if it is only needed once.
4. Map ASL-LEX handshape/location codes onto the v0 library where they already exist; leave unmapped codes as data, not as fake solver IDs.
5. Leave Wikisigns, Signbank NGT video, 3D-LEX mocap, and WLASL clips for a later pass after the ASL compiler is real.

That yields a licensed isolated lexicon with phonology, which is what Marionet needs next. Video and mocap are last resorts, and only from dumps that already fit the license gate and the disk cap.

## Citations to keep with the data

- Sehyr, Caselli, Cohen-Goldberg, Emmorey. ASL-LEX 2.0. OSF `osf.io/zpha4`. Files: CC BY 4.0.
- Slevinski / Sutton. SignPuddle Online SPML dumps. SignWriting: CC BY-SA 3.0. Use official `sgn{ID}.spml` URLs.
- Kopf, Schulder, Hanke. Sign Language Dataset Compendium. Catalog: CC BY 4.0. https://doi.org/10.25592/dgs.sldc
- Rudra Sarker. SignLanguage-Dataset-Hub. Catalog: CC BY 4.0. Underlying datasets: their own licenses.
- Crasborn et al. NGT dataset in Global Signbank. Public subset: CC BY 4.0.
- Ranum, Otterspeer, Andersen, Belleman, Roelofsen. 3D-LEX v1.0. CC BY 4.0. Deferred for size.
- Li et al. WLASL. C-UDA; academic/computational; no commercial; videos are third-party YouTube.

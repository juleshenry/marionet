# Licensed lexical / dictionary sources for the sign languages of Latin America (Mexico, Central America, South America)

Research date: 2026-10-14. Method: original dataset/dictionary pages, repository APIs (Zenodo REST, Mendeley Data public API, PUCP Dataverse API, figshare API, Hugging Face API, GitHub API), HTTP HEAD on SignPuddle SPML dumps, the Hamburg Sign Language Dataset Compendium and sign-lang@LREC data pages. Only small files (< 3 MB, mostly metadata/SPML) were downloaded; nothing > 20 MB. Note: the shared WebSearch budget ran out partway through this task, so several leads (listed under Gaps) could not be searched for; everything below was verified by direct fetch unless marked **UNVERIFIED**.

Tier key (Marionet license gate): **A** = CC BY / BY-SA / CC0 / open dump (derive + redistribute) · **B** = NC / research-only · **C** = register / contract / permission · **D** = skip (no stated license, proprietary, YouTube, SpreadTheSign, scraped mirror).

Record format used in tables: Source (link) · Type · Size · License verbatim · SPDX · Tier · Access · commercial_ok · video_redistrib_ok · Disk · Citation / next action.

---

## Q1. National dictionaries, lexicons and datasets per language (source records)

### Takeaway
Tier-A material exists for most of the region, but it is uneven: **SignPuddle SPML SignWriting dumps** (CC BY-SA 3.0 per signwriting.org) cover 16 Latin American puddles, several with 1,300–3,400 entries (Honduras, Paraguay, Argentina, Mexico, Nicaragua, Colombia, Brazil ~22 MB). The strongest *video* Tier-A sources are Wikisigns LSM (2,178 signs, CC BY-SA 4.0), the new **AI-Ready Ecuadorian SL corpus** (CC BY 4.0, 1,142 isolated-sign videos / 617 labels), **PUCP Dataverse** for Peru (several CC0 datasets) and a handful of CC BY Mexican/Colombian/Brazilian ML datasets. The best national lexical databases (Signbank da Libras, CENAREC LESCO, LSA64) are NC (Tier B), and most government dictionaries (INES, INSOR, DIELSEME, CONADIS, CAS) state no license (Tier C/D). For LENSEGUA the **only** Tier-A source found is Wikisigns LSG (21 entries, CC BY-SA 4.0).

### Cited Findings

#### Region-wide: SignPuddle (SignWriting, notation dumps)
- License basis: signwriting.org front page states "You are WELCOME to publish books, web sites and other publications using Sutton SignWriting, under the Creative Commons Attribution-Share-Alike License … Creative Commons Attribution-ShareAlike 3.0. All images and content on this web site and all images and content in publications on or about or in some way related to Sutton Movement Writing…" — [signwriting.org](https://www.signwriting.org/). The SPML header itself (`<spml root="http://www.signbank.org/signpuddle1.6" type="sgn" puddle="46" …>`) carries **no license element**, and the SignPuddle index page shows no license statement — [SignPuddle index](https://www.signbank.org/signpuddle/). SPDX: CC-BY-SA-3.0 (site-level statement; not restated per file). Tier A. commercial_ok: yes (BY-SA). video_redistrib_ok: n/a (notation only, FSW strings + glosses).
- Dump URL pattern verified by HEAD (HTTP 200): `https://www.signbank.org/signpuddle2.0/data/spml/sgn{ID}.spml` — [example sgn65](https://www.signbank.org/signpuddle2.0/data/spml/sgn65.spml).
- SignPuddle Network API (signpuddle.net, v1.3.0) advertises "list puddles, download databases"; its code is "License MIT" — [signpuddle.net](https://signpuddle.net/). SignPuddle 3 is also MIT — [signpuddle.com](https://signpuddle.com/).
- Puddle IDs from the country index pages — [index3.html](https://www.signbank.org/signpuddle/index3.html), [index5.html](https://www.signbank.org/signpuddle/index5.html), [index](https://www.signbank.org/signpuddle/). Sizes from HEAD `Content-Length`/`Last-Modified` (2026-10-14); entry counts = number of `<entry` elements in the downloaded SPML (all files < 1.3 MB except Brazil):

| Country / language (ISO) | Puddle ID | Bytes | Last-Modified | `<entry>` count |
|---|---|---|---|---|
| Brazil – Libras (bzs) dictionary | sgn46 | 22,203,824 | 2026-10-14 | not counted (> 20 MB cap); last entry id in file tail = 70875 |
| Mexico – LSM (mfs) dictionary | sgn65 | 412,439 | 2026-10-14 | 1,731 |
| Mexico – LSM literature | sgn120 | 186,619 | 2026-10-12 | 666 |
| Nicaragua – ISN (ncs) | sgn67 | 421,131 | 2024-05-22 | 1,725 |
| Argentina – LSA (aed) dictionary | sgn41 | 571,593 | 2026-04-07 | 1,870 |
| Argentina – LSA literature | sgn145 | 17,597 | 2023-07-27 | 4 |
| Uruguay – LSU (ugy) | sgn143 | 94,497 | 2026-10-10 | 388 |
| Chile – LSCh (csg) | sgn135 | 40,420 | 2026-05-28 | 175 |
| Colombia – LSC (csn) | sgn51 | 472,558 | 2026-09-22 | 1,286 |
| Peru – LSP (prl) | sgn71 | 65,762 | 2025-07-30 | 148 |
| Venezuela – LSV (vsl) | sgn76 | 34,589 | 2016-02-24 | 136 |
| Ecuador – LSEC (ecs) | sgn136 | 2,522 | 2016-01-03 | 4 |
| Bolivia – LSB (bvl) | sgn45 | 2,391 | 2026-04-07 | 7 |
| Paraguay – LSPy (pys) | sgn129 | 745,472 | 2026-09-17 | 3,061 |
| Costa Rica – LESCO (csr) dictionary | sgn101 | 1,584 | 2025-07-13 | 2 |
| Costa Rica – LESCO literature | sgn102 | 995 | 2025-06-24 | 0 |
| Guatemala – LENSEGUA (gsm) | sgn112 | 703 | 2016-01-25 | 0 |
| Honduras – LESHO (hds) dictionary | sgn16 | 1,283,470 | 2022-02-07 | 3,401 |
| Honduras – literature | sgn121 | 279 | 2025-06-15 | 0 |
| El Salvador – LESSA (esn) | sgn137 | 2,059 | 2015-09-22 | 1 |
| Panama (lsn) | none listed | — | — | — |

- Brazil sgn46 header term is "Dicionário Brasil", first entry `rato`/`rat` with `<src>UCPel` — first 3 KB of [sgn46.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn46.spml) (range request).
- A LESHO SignWriting dictionary PDF by Jonathan Duncan was announced on the SW-L list in July 2020 — [SW-L 2020-07](https://listserv.linguistlist.org/pipermail/sw-l/2020-July/062605.html) (likely the source of the 3,401-entry sgn16 puddle; **UNVERIFIED** link between the two).
- Nicaraguan Sign Language Manual, 3rd ed. 2018 (Kegl / NSLP), Spanish, in SignWriting, hosted on signwriting.org archive — [sw1269 PDF](https://signwriting.org/archive/docs13/sw1269_NI_Nicaraguan_Sign_Language_Manual_3rd_Edition_2018_Kegl_NSLP_Part1_SPANISH.pdf) (license only via the signwriting.org site statement; **UNVERIFIED** for this PDF specifically).

#### Region-wide: Wikisigns (citation-form videos)
- Footer on every page: "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License" — [Wikisigns statistics](https://www.wikisigns.org/statistics). SPDX CC-BY-SA-4.0. Tier A. commercial_ok yes; video_redistrib_ok yes (SA).
- Statistics page counts: Lengua de Señas Mexicana 2,178; Lengua de Señas Uruguaya 85; LIBRAS 32; Lengua de Señas de Guatemala 21; Guyana Sign Language 13 (total 4,029 across all languages) — [Wikisigns statistics](https://www.wikisigns.org/statistics).
- LSG (Guatemala) list (≈21 entries: abecedario, abuela, abuelo, academia, bisabuela, colegio, escuela, guatemala, hermana, hermano, hija, hijo, liceo, madre, mamá, padre, papá, primo, tía, tío, universidad) — [wikisigns.org/list/es/lsg](https://www.wikisigns.org/list/es/lsg).
- Guyana SL list (13: boy, brother, cousin, deaf, friend, grandmother, HIV, home, man, school, sister, taking the bus, woman) — [wikisigns.org/english/guyana](http://www.wikisigns.org/english/guyana).
- LIBRAS list (32; greetings, family terms) — [wikisigns.org/portugues/libras-brasil](http://www.wikisigns.org/portugues/libras-brasil/).
- Hamburg Compendium entry for Wikisigns LSM: 2,178 signs, "CC BY-SA 4.0", fields = citation form, Spanish keyword, user rating; creator credited as Carlos González — [Compendium wikisignsmsl](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/wikisignsmsl.html).
- No API/bulk export is visible on the LSM list page — [wikisigns.org/list/es/lsm](https://www.wikisigns.org/list/es/lsm). The LSU list URL could not be located (`/list/es/lsu` returns "Page not found") — [404 page](https://www.wikisigns.org/list/es/lsu).

#### Mexico — LSM (mfs)
| Source | Type | Size | License (verbatim) | SPDX | Tier | Access | Comm. | Video redistrib. | Disk | Citation / next action |
|---|---|---|---|---|---|---|---|---|---|---|
| [Wikisigns LSM](https://www.wikisigns.org/list/es/lsm) | isolated-video (citation forms) | 2,178 signs | "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License" | CC-BY-SA-4.0 | A | public web, per-entry pages | yes | yes (SA) | unknown (per-entry video) | Already known. Ask Wikisigns/ULPGC Cátedra Telefónica for a bulk dump rather than crawling. |
| [SignPuddle sgn65](https://www.signbank.org/signpuddle2.0/data/spml/sgn65.spml) (+ [sgn120](https://www.signbank.org/signpuddle2.0/data/spml/sgn120.spml) literature) | notation (SignWriting FSW) | 1,731 entries (+666) | site-level CC BY-SA 3.0 ([signwriting.org](https://www.signwriting.org/)) | CC-BY-SA-3.0 | A | direct SPML download | yes | n/a | 0.41 MB + 0.19 MB | Ingest; join to Wikisigns by Spanish gloss for handshape/location hints. |
| [Mexican Sign Language Glosses (Dynamic Signs)](https://zenodo.org/records/18330565) – Navarrete López, Sainos-Vizuett, Lopez-Nava | isolated-video (MP4, green screen, frontal) | 121 dynamic signs (healthcare lexicon) | Zenodo license `cc-by-4.0` | CC-BY-4.0 | A | open Zenodo | yes | yes | 2.67 GB (.7z) | Good second LSM ingest (clean single-gloss clips). |
| [Mexican sign language dataset](https://data.mendeley.com/datasets/6rj76z6y3n) – Espejel, Dominguez, Cervantes, Cervantes; DOI 10.17632/6rj76z6y3n.1 | isolated-video as JPG frame sequences | 249 words, 11 signers, black background | Mendeley "CC BY 4.0" ("You can share, copy and modify this dataset so long as you give appropriate credit, provide a link to the CC BY license…") | CC-BY-4.0 | A | open | yes | yes (frames) | 2.03 GB | Ingest for multi-signer variation. |
| [ITESO-MX-100](https://data.mendeley.com/datasets/g45jkzys4f) – V. H. Martínez Sánchez; DOI 10.17632/g45jkzys4f.1 | isolated-video (uncontrolled conditions) | 100 signs, 5,000 videos, 3 participants | Mendeley "CC BY 4.0" | CC-BY-4.0 | A | open | yes | yes | 10.7 GB | Secondary; noisy backgrounds. |
| [MSL-150 Dataset v1.0](https://zenodo.org/records/17783312) – armandobecerril | keypoints (MediaPipe Holistic, 226 kp/frame) — mocap-like | 150 isolated signs, 1 native signer (health vocab) | `cc-by-4.0` | CC-BY-4.0 | A | open | yes | n/a (no video) | 13.3 GB CSV + 4.4 GB npy | Useful for retargeting tests (pose already extracted). |
| [Dataset LSM Lenguaje de señas mexicanas](https://zenodo.org/records/6554337) – Chacon Quintero et al. | annotated images (pickles) | ~400 videos: numbers, alphabet, simple words | `cc-by-4.0` | CC-BY-4.0 | A | open | yes | images only | 271 MB | Low priority (mostly fingerspelling/numbers). |
| [MSL Alphabet (dynamic signs only)](https://zenodo.org/records/14689869) / [v2 record](https://zenodo.org/records/19154645) | **fingerspelling** (J, K, Ñ, Q, X, Z) | — | `cc-by-4.0` | CC-BY-4.0 | A | open | yes | yes | 3.6 GB / 0.58 GB | FLAG: alphabet-only. |
| [3D MSL Static Alphabet](https://data.mendeley.com/datasets/sjt79hnb2f) – Rios-Figueroa, Sosa-Jiménez | **fingerspelling** point clouds (Kinect v1) | 21 letters × 15 persons = 315 files | Mendeley "CC BY 4.0" | CC-BY-4.0 | A | open | yes | n/a | 22 MB | FLAG: alphabet-only; handshape reference. |
| [MSL Dactylology & Ten First Numbers (labeled, #1–5)](https://data.mendeley.com/datasets/5s4mt7xrd9), [(#6–11)](https://data.mendeley.com/datasets/67htnzmwbb), [raw #1–3](https://data.mendeley.com/datasets/48xybsmvpv) – Rodriguez, Oubram, Ali, Lakouari | **fingerspelling** + numbers (videos, screenshots) | 29 letters + 1–10, 11 persons | "You are free to adapt, copy or redistribute the material, providing you attribute appropriately and do not use the material for commercial purposes." (CC BY-NC 3.0) | CC-BY-NC-3.0 | B | open | no | NC only | 5.4 + 5.4 + 8.8 GB | FLAG: alphabet/numbers only; skip. |
| DIELSEME (Diccionario Español–LSM, SEP/DEE) — [sign-lang@LREC entry](https://www.sign-lang.uni-hamburg.de/lrec/data/dielseme.html) | lexical-db / isolated-video | unknown | none found; listed URL `campusdee.ddns.net/publicacionesdee.aspx` returns **404** | — | D (dead) | — | — | — | — | Dead end; contact SEP Dirección de Educación Especial if needed (Tier C). |
| SEP-hosted "Diccionario de Lengua de Señas" PDF (Libre Acceso, A.C., 2011, credits CONAPRED) — as reported by search result: [SEP PDF](https://educacionespecial.sep.gob.mx/storage/recursos/2023/05/xzrfl019nV-4Diccionario_lengua_%20Senas.pdf) | print dictionary (images) | — | "© 2011, Libre Acceso, A.C." (**UNVERIFIED**, from search snippet) | — | D | PDF | no | no | — | Skip. "Manos con Voz" is the related Libre Acceso/CONAPRED work critiqued by Cruz-Aldrete ([Redalyc PDF](https://www.redalyc.org/pdf/3761/376140398005.pdf)). |
| [ELAR – Chatino collection (Woodbury, Campbell, E. Cruz, H. Cruz, McIntosh, Villard; ELDP)](https://www.elararchive.org/index.php?name=SO_23173683-3ec2-4b76-8b4b-ec08c61a7e7d) | continuous-video (contains "San Juan Quiahije Chatino Sign Language" items) | 2 items tagged with the SL (136 hits in ELAR facet) | ELAR: "Materials may only be used for non-commercial and/or educational activity. Any other usage needs explicit written agreement from the Collection Steward…" ([ELAR how-to-use](https://www.elararchive.org/how-to-use/)) | LicenseRef-ELAR | B/C | ELAR registration (U) or steward permission (S) | no | no | — | Out of the core list but a Mexican village SL; archive note only. |

#### Maya village sign languages — Yucatec Maya SL (msd), Nohya, Chican
- Olivier Le Guen (CIESAS) coordinates the documentation project of Yucatec Maya Sign Language, funded by Conacyt Fronteras de la Ciencia; a 2023 paper uses data from Chicán and Nohkop — [Endangered Languages Project msd](https://www.endangeredlanguages.com/lang/msd) (as summarized in search results).
- The ELAR language facet list for "sign language" contains no Yucatec Maya SL / Nohya / Chican entry (it lists e.g. Chatino SL, Providencia SL, Bay Islands SL, Ka'apor SL, Panamanian SL) — [ELAR search "sign language"](https://www.elararchive.org/?s=sign+language).
- Result: **no usable licensed source found** (dead end).

#### Guatemala — LENSEGUA (gsm)
| Source | Type | Size | License (verbatim) | SPDX | Tier | Access | Comm. | Video redistrib. | Disk | Next action |
|---|---|---|---|---|---|---|---|---|---|---|
| [Wikisigns LSG](https://www.wikisigns.org/list/es/lsg) | isolated-video | 21 signs (family, school, alphabet, "guatemala") | "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License" | CC-BY-SA-4.0 | A | public web | yes | yes | tiny | **Add to allowlist as the first LENSEGUA source**; contains GUATEMALA, family and school vocab. |
| [SignPuddle sgn112](https://www.signbank.org/signpuddle2.0/data/spml/sgn112.spml) | notation | 0 entries (703 bytes) | CC BY-SA 3.0 (site) | CC-BY-SA-3.0 | A | SPML | yes | n/a | <1 KB | Empty — dead end. |
| ASORGUA LENSEGUA courses / manual | teaching material | — | none found | — | C | contact ASORGUA | — | — | — | A 2020 Universidad Galileo thesis designed a digital manual for ASORGUA instructors (alphabet, numbers, family) — [Galileo thesis](https://biblioteca.galileo.edu/xmlui/bitstream/handle/123456789/1795/TESIS%20FINAL%20Stephany%20Garc%c3%ada.pdf?sequence=1). |
| UN Guatemala 2023 publication with fingerspelling alphabet (ASORGUA models) | **fingerspelling** images | — | not checked | — | D | PDF | — | — | — | [UN Guatemala PDF](https://guatemala.un.org/es/download/164428/273706). FLAG alphabet-only. |

- LENSEGUA was recognized by Decree 3-2020 — [IIPS-USAC](https://iips.usac.edu.gt/wp-content/uploads/2020/02/IIPS-Opina-No.-06-Primer-Semestre-2020.pdf). No standalone online LENSEGUA dictionary could be located.

#### El Salvador — LESSA (esn)
- SignPuddle sgn137: 1 entry — [sgn137.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn137.spml).
- A *Gramática Básica de la Lengua de Señas Salvadoreña* (Griselda Zeledón, CIL Global support) was reported, no online dictionary — [elsalvador.com](https://www.elsalvador.com/noticias/nacional/presentaciones-de-libro-lanzamiento/1254241/2025/); free LESSA courses at ITETPS — [UCA PDF](https://telescopi.uca.edu.sv/wp-content/uploads/2024/05/7-Curso-de-lengua-de-senas-salvadorena-ITETSPS.pdf).
- Result: **nothing usable**.

#### Honduras — LESHO (hds), Bay Islands SL
| Source | Type | Size | License | SPDX | Tier | Access | Comm. | Video | Disk | Next action |
|---|---|---|---|---|---|---|---|---|---|---|
| [SignPuddle sgn16](https://www.signbank.org/signpuddle2.0/data/spml/sgn16.spml) | notation | 3,401 entries | CC BY-SA 3.0 (site) | CC-BY-SA-3.0 | A | SPML | yes | n/a | 1.28 MB | **First ingest for hds** (largest LatAm puddle after Brazil). |
| ASH first LESHO dictionary (print, launched Sept 2021) | print dictionary | — | none found | — | C | contact Asociación de Sordos de Honduras | — | — | — | [El Heraldo](https://www.elheraldo.hn/tegucigalpa/diccionario-lengua-senas-honduras-sordos-BQEH1493552). |
| [ELAR – Bay Islands Sign Language (Ben Braithwaite, UWI; ELDP)](https://www.elararchive.org/index.php?name=SO_c943b490-a48b-407c-a187-ae8dde8680dc) | continuous-video (+1 "Lexical database" item) | 26 BISL items | ELAR non-commercial terms ([ELAR](https://www.elararchive.org/how-to-use/)) | LicenseRef-ELAR | B/C | ELAR login / steward | no | no | — | Archive note only (separate language from LESHO). |

#### Nicaragua — ISN/NSL (ncs)
- SignPuddle sgn67: 1,725 entries, 421 KB — [sgn67.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn67.spml). Tier A. **First ingest for ncs.**
- *Diccionario del Idioma de Señas de Nicaragua* (López Gómez et al., eds., ANSNIC, Managua; 1997 per secondary source) — print only — [IETF sgn-NI registration](https://www.alvestrand.no/pipermail/ietf-languages/2002-August/000402.html). Tier C.
- NSLP manual 3rd ed. 2018 in SignWriting (see region-wide). No licensed video dictionary found.

#### Costa Rica — LESCO (csr)
| Source | Type | Size | License | SPDX | Tier | Access | Comm. | Video | Disk | Next action |
|---|---|---|---|---|---|---|---|---|---|---|
| [Diccionario LESCO (CENAREC)](https://lesco.cenarec.go.cr/index.php/diccionariolesco) | lexical-db + isolated-video + phonology chapters | 1,041 signs (Compendium) | Compendium lists "BY-NC-SA" ([Compendium lescodict](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/lescodict.html)); **the original page shows no license** (only "publicly funded by Costa Rica") | CC-BY-NC-SA-? (**UNVERIFIED**) | B (provisional) | public browse, no export | no | NC only | — | Email CENAREC to confirm license + request export (fields include hand configuration, orientation, location, movement, non-manuals). |
| [LESCO Corpus](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/lescocorpus.html) – Oviedo & Ramírez Valerio, LREC 2018 | continuous-video, ELAN | 34 h recorded; 44 films (~2 h) annotated | Compendium: "CC BY-NC-SA" (**UNVERIFIED** on original) | CC-BY-NC-SA | B | "information not available" | no | no | — | Low priority. |
| [Phonological proximity calculations and validation](https://zenodo.org/records/4723992) – L. Naranjo-Zeledón | phonology spreadsheet | xlsx 43.9 MB; LESCO **alphabet subset only** | `cc-by-4.0` | CC-BY-4.0 | A | open | yes | n/a | 44 MB | FLAG fingerspelling-only phonology; useful as a coding template. |
| [SignPuddle sgn101](https://www.signbank.org/signpuddle2.0/data/spml/sgn101.spml) | notation | 2 entries | CC BY-SA 3.0 | CC-BY-SA-3.0 | A | SPML | yes | n/a | 1.6 KB | Negligible. |
| Hands On LESCO dictionary app (2021) | app | — | not checked | — | D | app | — | — | — | Reported by [Delfino](https://delfino.cr/2021/11/hands-on-lesco-lanza-diccionario-para-acercar-a-poblacion-a-la-lengua-de-senas-costarricense) (search result only). |

#### Panama — LSPM (lsn)
- [A Collection of Basic Greetings in Panamanian Sign Language (PSL)](https://data.mendeley.com/datasets/3d4wggwh5g) – Teran-Quezada, Lopez-Cabrera, Rangel, Sanchez-Galan; DOI 10.17632/3d4wggwh5g.1: 5 greetings (Hola, Buenos días, Estoy bien, Gracias, ¿Cómo estás?), videos + coordinates, 793 MB, Mendeley "CC BY 4.0". Tier A; commercial yes; video redistrib yes. **Only Tier-A Panama source** (tiny).
- Printed dictionary: Garay, S. 1990, *Lengua de señas panameñas*, Asociación Nacional de Sordos de Panamá — [Glottolog ref](https://glottolog.org/resource/reference/id/319453). Tier C.
- ELAR facet lists "Panamanian Sign Language (2)" items; collection not identified — [ELAR search](https://www.elararchive.org/?s=sign+language).
- No SignPuddle puddle for Panama on the index — [SignPuddle index](https://www.signbank.org/signpuddle/).

#### Colombia — LSC (csn), Providencia SL
| Source | Type | Size | License | SPDX | Tier | Access | Comm. | Video | Disk | Next action |
|---|---|---|---|---|---|---|---|---|---|---|
| [SignPuddle sgn51](https://www.signbank.org/signpuddle2.0/data/spml/sgn51.spml) | notation | 1,286 entries | CC BY-SA 3.0 (site) | CC-BY-SA-3.0 | A | SPML | yes | n/a | 0.47 MB | **First ingest.** |
| [LSC50: Colombian SL Video and Inertial Measurement Dataset](https://figshare.com/articles/dataset/LSC50_Colombian_Sign_Language_Video_and_Inertial_Measurement_Dataset/27383016) | isolated-video + IMU + body landmarks + upper-body inverse kinematics (mocap-like) | ~50 signs (name) | figshare "CC BY 4.0" | CC-BY-4.0 | A | open | yes | yes | 10.6 GB | Strong mocap-adjacent candidate; verify sign list. |
| [Speak in Colombian SL: Dynamic LSC70](https://data.mendeley.com/datasets/9ssyn8tff5) – Muñoz Galindez, Villota Coral, Vargas-Canas | image sequences (6 frames) | 47 signs incl. alphabet, numbers, common words; 70 volunteers; 35,208 images | Mendeley "CC BY 4.0" | CC-BY-4.0 | A | open | yes | images | 990 MB | Partly FLAG fingerspelling. |
| INSOR *Diccionario básico de LSC* — [educativo.insor.gov.co/diccionario](https://educativo.insor.gov.co/diccionario/) | lexical-db + video; search by "Configuración manual" (handshape groups) | not stated | Compendium: "Open licence" ([Compendium insor](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/insor.html)); **original page has no license/terms statement** | — (**UNVERIFIED**) | C | public browse; archived printed PDF | unknown | unknown | — | Email INSOR asking for written license (Colombian gov. open-data portal uses CC BY-SA 4.0 for many sets, but none for this dictionary). |
| [LeSiCo (UNAL)](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/lesico.html) | lexical-db, 2 camera planes, 1 native signer | 1,980 signs, 16.5 h | "Open licensed, citation required"; access "For registered users"; webpage "Under construction" (Compendium only) | — (**UNVERIFIED**) | C | registration | unknown | unknown | — | Contact Universidad Nacional de Colombia; potentially best LSC citation-form set. |
| [Diccionario de nuevos términos de salud (CES)](https://diccionariolsc.ces.edu.co/) | specialist lexicon | not stated | Compendium "Open licence" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictionaryofnewmedicalsignlanguageterms.html)); no license on original page | — (**UNVERIFIED**) | C | public browse | — | — | — | Contact CES. |
| [Tree of Life Foundation Glossary](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/treeoflife.html) | YouTube videos | 228 signs | Compendium "Open licence" but hosted on YouTube | — | D | YouTube | — | — | — | Skip (YouTube rule). |
| [Filoseñando](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/filosenando.html) | Android app prototype | 41 terms, 89 videos | "information not available" | — | D | Google Drive prototype | — | — | — | Skip. |
| [LSC-54](https://pure.unisabana.edu.co/en/publications/lsc-54-a-landmark-based-dataset-for-colombian-sign-language/) | 3D landmarks (colors, courtesy phrases, numbers) | 54 classes | not found | — | C | — | — | — | — | Check paper's data statement. |
| [ELAR – Providencia Sign Language (Rehana Omardeen; ELDP)](https://www.elararchive.org/index.php?name=SO_8cbc6933-f6fb-4b1a-b52e-92e1bc24196f) | continuous-video + "Dictionary (5)" + "Lexical database (1)" | 114 items | ELAR non-commercial ([ELAR](https://www.elararchive.org/how-to-use/)) | LicenseRef-ELAR | B/C | ELAR login / steward | no | no | — | Providencia SL (Colombian island village SL); archive note. |

#### Venezuela — LSV (vsl)
- SignPuddle sgn76: 136 entries (last modified 2016) — [sgn76.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn76.spml). Tier A, the only usable source.
- "Deditos Mágicos" (UCV 2012 thesis, audiovisual micro-programs) — [saber.ucv.ve](https://saber.ucv.ve/jspui/handle/10872/1032); not a dictionary. No LSV online dictionary or dataset found.

#### Ecuador — LSEC (ecs)
| Source | Type | Size | License | SPDX | Tier | Access | Comm. | Video | Disk | Next action |
|---|---|---|---|---|---|---|---|---|---|---|
| [AI-Ready Ecuadorian Sign Language Corpus](https://zenodo.org/records/21627229) – Rubio Proaño, Banet-Ponce, Calderón-Hinojosa, Salamea Palacios (PUCE/UTI/UPS/EPN), v1.0.0 2026-06-28 | isolated-video (lexical_level: 1,142 MP4, 617 distinct cleaned labels; label from filename/parent dir) + continuous (128 sentence videos with ELAN EAF) | 1,270 MP4 @1920×1080, ≈14.69 GiB | LICENSE.md: "Except where otherwise noted, the LSEc AI-ready corpus is licensed under the Creative Commons Attribution 4.0 International license"; consent verified "for public Zenodo access, CC BY 4.0 reuse, derivative works, and AI use" (CHANGELOG) | CC-BY-4.0 | **A** | open Zenodo; `lsec_lexical_level_1.0.0.zip` 12.9 GB, `lsec_metadata_1.0.0.zip` 84 KB | yes | yes | ≈15.8 GB all files | **First ingest for ecs.** Read `lexical_level_manifest.csv`; signer_id empty in lexical subset. Note DOI discrepancy: files cite reserved DOI 10.5281/zenodo.21001360, record is 21627229. |
| Diccionario Oficial de LSEC "Gabriel Román" (CONADIS/FENASEC/UTI) | lexical-db + video | ~5,000 words (press) | not found | — | C | web (URL cited in a syllabus as fenasec.ec/diccionario-lsec.html, **UNVERIFIED**) | — | — | — | [El Comercio](https://www.elcomercio.com/tendencias/salud/dia-internacional-lenguas-senas-efemeride/); [UAzuay syllabus](https://silabos.uazuay.edu.ec/silabos/Silabo9095FLC0208.pdf). Contact CONADIS. |
| [SignPuddle sgn136](https://www.signbank.org/signpuddle2.0/data/spml/sgn136.spml) | notation | 4 entries | CC BY-SA 3.0 | CC-BY-SA-3.0 | A | SPML | yes | n/a | 2.5 KB | Negligible. |
| [LSEC translation system code](https://zenodo.org/records/21693902) | software | 2.8 MB | `cc-by-4.0` | CC-BY-4.0 | A | open | yes | n/a | 3 MB | Code only. |
| HF [calvin261/lsec-data](https://huggingface.co/datasets/calvin261/lsec-data) | unknown | — | no license tag | — | D | HF | — | — | — | Skip (no license). |

#### Peru — LSP (prl)
| Source | Type | Size | License (Dataverse field) | SPDX | Tier | Access | Comm. | Video | Disk | Next action |
|---|---|---|---|---|---|---|---|---|---|---|
| [PUCP-DGI156](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/OJYYYS) (hdl:20.500.12534/OJYYYS) – Rodríguez Mondoñedo | continuous narrative video segmented per sign + SRT + pose (27 keypoints, pkl) | 4 files (Videos.tar 1.08 GB, Keypoints.tar 0.72 GB); picture-story retellings by 17 participants | "CC0 1.0" | CC0-1.0 | **A** | open | yes | yes | 1.8 GB | **First ingest for prl** (per-sign segments + SRT glosses). |
| [Sistema antroponímico LSP](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/47OFDW) – Cuti Zanabria (UNMSM thesis) | isolated-video (name signs) | 100 MP4 | "CC0 1.0" | CC0-1.0 | A | open | yes | yes | 1.39 GB | Name signs only (proper nouns). |
| [Aprendo En Casa 2020 (AEC)](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/HDOAGH) | continuous-video (2 TV interpreters), annotated by 3 intermediate-level volunteers | 5 files | "CC0 1.0" | CC0-1.0 | A* | open | yes | yes* | 392 MB | *Provenance flag: footage is from a broadcast educational TV show; depositor CC0 may not cover broadcaster rights. Paper: Bejarano et al. 2022 [ACL](https://aclanthology.org/2022.signlang-1.1). |
| [LSP Sesiones](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/PHTSWP) / [Diálogo Sesión 3](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/NTSLDP) – Rodríguez Mondoñedo, Maruenda Castillo, Arnaiz | continuous-video (interviews, picture elicitation, dialogues) | 6 files / 260 files | "CC0 1.0" | CC0-1.0 | A | open | yes | yes | 287 MB / **52.8 GB** | Elicitation in Sesión 1 ("nombres, estados y acciones") includes single-word answers — possible citation-form mining. |
| [PUCP 305 (glosas)](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/JU4OLG) – Rodríguez-Mondoñedo, Pérez-Silva, Velasquez, Oporto, Cerna | isolated-video + example sentences + ELAN; training set of the DLSP dictionary model | 1 zip | "CC BY-NC 4.0" | CC-BY-NC-4.0 | B | open | no | NC only | 2.88 GB | Best LSP citation-form set but NC; ask authors for a BY grant. |
| [Videos de prueba (Diccionario LSP)](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/FAHXZY) – Oporto | isolated-video (subset of PUCP 305) | 38 MP4 | "CC BY-NC 4.0" | CC-BY-NC-4.0 | B | open | no | NC only | 82 MB | — |
| [Diccionario LSP al Español (DLSP)](https://diccionariolsp.pucp.edu.pe/) | online dictionary (JS app) | — | none visible (JS-only page) | — | C | web | — | — | — | LREC 2024 paper "Lessons from Deploying the First Bilingual Peruvian Sign Language – Spanish Online Dictionary" — [sign-lang@LREC](https://www.sign-lang.uni-hamburg.de/lrec/data/dlsp.html). |
| [SIGNO-PERU-ISO](https://zenodo.org/records/18990737) – Escobedo Cárdenas, Ramírez Cerna | isolated RGB-D video (Azure Kinect: RGB 1080p, depth, 32-joint skeleton) | 18,179 sequences, 17 native signers, 6 semantic categories; minimal pairs | `cc-by-nc-4.0`, access **restricted**; "The dataset is only used for research." | CC-BY-NC-4.0 | B/C | request on Zenodo | no | no | — | Request access for phonology (minimal pairs) research only. |
| [SIGNO-PERU-FER](https://zenodo.org/records/22715615) | RGB-D facial expressions (non-manuals) | — | none listed; restricted | — | C | request | — | — | — | Non-manual reference only. |
| [SeñaTalk dataset](https://zenodo.org/records/17479338) – Espejo, Checa Apolinario (UPC) | unclear ("PSL gestures") | 306 MB | `cc-by-4.0` | CC-BY-4.0 | A | open | yes | yes | 306 MB | Inspect contents before use. |
| [PSL Vowel Dataset](https://zenodo.org/records/21093176) | **fingerspelling** (vowels) | 20.5 MB | `cc-by-4.0` | CC-BY-4.0 | A | open | yes | yes | 21 MB | FLAG alphabet-only. |
| [SignPuddle sgn71](https://www.signbank.org/signpuddle2.0/data/spml/sgn71.spml) | notation | 148 entries | CC BY-SA 3.0 | CC-BY-SA-3.0 | A | SPML | yes | n/a | 66 KB | Ingest alongside DGI156. |
| HF [Fulo1/senas-lsp-dataset](https://huggingface.co/datasets/Fulo1/senas-lsp-dataset) | unknown | n<1K | no license tag | — | D | HF | — | — | — | Skip. |

#### Bolivia — LSB (bvl)
- SignPuddle sgn45: 7 entries — [sgn45.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn45.spml).
- Ministerio de Educación 2010 course modules exist only as a Scribd copy with copyright notice — [Scribd](https://es.scribd.com/document/677900564/Lsb-Modulo-2) (Tier D, mirror). LSB recognized by Ley Nº 1658 (2025) — [Lexivox](https://www.lexivox.org/norms/BO-L-N1658.html).
- Result: **nothing usable** beyond 7 SignWriting entries.

#### Chile — LSCh (csg)
- SignPuddle sgn135: 175 entries — [sgn135.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn135.spml). Tier A, the only usable source.
- *Diccionario Bilingüe LSCh–Español* is a UMCE work (Acuña Robertson, Adamo Quintela, Cabrera Ramírez, 2009), not Universidad de Chile; a PDF copy sits on a municipal school site (mirror, no license) — [PDF A–H](https://bicentenariosantamaria.cl/wp-content/uploads/2023/04/Diccionario_LSCh_A-H.pdf); article on its lexicography — [Revistas Chilenas](https://revistaschilenas.uchile.cl/handle/2250/75326). Tier D (mirror) / C (ask UMCE).
- The Hamburg Compendium lists only SpreadTheSign for LSCh — [Compendium csg](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/csg.html). No Chilean datasets surfaced on Zenodo/HF/Mendeley queries.

#### Argentina — LSA (aed)
| Source | Type | Size | License | SPDX | Tier | Access | Comm. | Video | Disk | Next action |
|---|---|---|---|---|---|---|---|---|---|---|
| [SignPuddle sgn41](https://www.signbank.org/signpuddle2.0/data/spml/sgn41.spml) | notation | 1,870 entries | CC BY-SA 3.0 (site) | CC-BY-SA-3.0 | A | SPML | yes | n/a | 0.57 MB | **First ingest.** |
| [LSA64](https://facundoq.github.io/datasets/lsa64/) – Ronchetti, Quiroga, Estrebou, Lanzarini, Rosete (CACIC 2016) | isolated-video 1920×1080 @60 fps | 64 signs × 10 non-expert signers × 5 reps = 3,200 videos | "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License." | CC-BY-NC-SA-4.0 | B | Mega/Google Drive | no | NC-SA | raw 1.9 GB / cut 1.5 GB / preprocessed 0.8 GB | Research-only reference. |
| [LSA16 handshapes](https://facundoq.github.io/datasets/lsa16/) | handshape images (phonology) | 16 handshapes × 10 subjects × 5 = 800 images | same CC BY-NC-SA 4.0 sentence | CC-BY-NC-SA-4.0 | B | download | no | n/a | 267 MB | Handshape inventory reference only. |
| [LSA-T](https://github.com/midusi/LSA-T) ([arXiv 2211.15481](https://arxiv.org/abs/2211.15481)) | continuous-video, 8,459 clips, ~22 h | code "MIT"; videos "extracted from the CN Sordos YouTube channel"; no data license | MIT (code only) | D | Google Drive | — | no | — | Skip (YouTube footage). |
| [LSA-X](https://zenodo.org/records/19087120) – Verri | COCO keypoints + subtitles from public LSA videos, 1,553 videos / ~508 h | `cc-by-nc-nd-4.0` | CC-BY-NC-ND-4.0 | B→**D** for Marionet (ND forbids derivatives; source is YouTube/platform video) | open | no | n/a | 46 GB | Skip. |
| [CAS Señario de términos y expresiones básicas en LSA](https://cas.org.ar/senario-de-terminos-y-expresiones-en-lengua-de-senas-argentina/) | print/PDF + QR-linked videos | Vol. 1: 230 entries (Compendium: 600 more in vols. 2–3) | "© 2020 Confederación Argentina de Sordos. Todos los derechos reservados." | — | D (C if CAS grants permission) | form-gated download | no | no | — | Contact CAS only if a permission route is wanted. |

#### Uruguay — LSU (ugy)
- SignPuddle sgn143: 388 entries, actively updated (2026-10-10) — [sgn143.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn143.spml). **First ingest.**
- Wikisigns counts 85 LSU signs under CC BY-SA 4.0 — [Wikisigns statistics](https://www.wikisigns.org/statistics) (list URL not found).
- TUILSU/UdelaR: "Léxico trelsu" monolingual LSU dictionary (2019 article) and a planned Spanish→LSU dictionary to be published at tuilsu.edu.uy — [trelsu article](https://ojs.fhce.edu.uy/index.php/insoru/article/download/425/365), [EFI 2024 program](https://fhce.edu.uy/wp-content/uploads/2024/02/Programa_EFI_2024_Diccionario-de-espan%cc%83ol-en-LSU.pdf). The tuilsu.edu.uy home page returned only "Área de Estudios Sordos", no license — [tuilsu.edu.uy](https://www.tuilsu.edu.uy/). Tier C.

#### Paraguay — LSPy (pys)
- SignPuddle sgn129: 3,061 entries, updated 2026-09-17 — [sgn129.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn129.spml). **First ingest** (second-largest LatAm puddle).
- DamPy multilingual audiovisual dictionary (Secretaría de Políticas Lingüísticas, July 2026; Castellano, Guaraní, Mbya, LS; semantic fields fauna/flora/gastronomy) — [Última Hora](https://www.ultimahora.com/el-primer-diccionario-audiovisual-multilingue-ya-esta-disponible); a "Signatario Digital" with >2,500 signs was also announced — [Hoy](https://www.hoy.com.py/nacionales/lengua-de-senas-tendra-diccionario-digital). License not found → Tier C.

#### Brazil — Libras (bzs)
| Source | Type | Size | License (verbatim) | SPDX | Tier | Access | Comm. | Video | Disk | Next action |
|---|---|---|---|---|---|---|---|---|---|---|
| [SignPuddle sgn46 "Dicionário Brasil"](https://www.signbank.org/signpuddle2.0/data/spml/sgn46.spml) | notation | 22.2 MB SPML; entry ids up to 70875 | CC BY-SA 3.0 (site) | CC-BY-SA-3.0 | A | SPML | yes | n/a | 22 MB (**exceeds 20 MB research cap — needs explicit OK to download**) | **First Tier-A ingest for bzs.** |
| [Signbank da Libras (UFSC)](https://signbank.libras.ufsc.br/pt/terms-of-use) | lexical-db with phonology + citation videos | 3,118 signs ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/signbanklibras.html)) | Site bundle string: "Os dados são públicos para uso sob a licença internacional de Creative Commons BY-NC-SA 4.0." | CC-BY-NC-SA-4.0 | B | public browse; JSON backend at `api-signbank.levantelab.com.br` but no documented export | no | NC-SA | — | Ask UFSC (Quadros) for an export and whether a BY grant is possible; fields: ID gloss, PT/EN translations, semantic category, phonology. Cite Pizzio et al. 2020, *Fórum Linguístico* 17(4), DOI 10.5007/1984-8412.2020.e77342. |
| [MINDS-Libras](https://zenodo.org/records/2667329) – Almeida, Rezende, Almeida, Toffolo, Guimarães (IFMG/UFMG/UFOP) | isolated-video (RGB) | 20 signs × 12 signers × 5 reps | "Creative Commons Attribution 4.0 International"; open | CC-BY-4.0 | A | Zenodo, 12 zips | yes | yes | 64.8 GB | Only 20 signs; use for signer-variation tests. |
| [MINDS-Libras RGB-D (Kinect v2)](https://zenodo.org/record/4322983) | RGB + depth + body/face skeleton (mocap-like) | same 20 signs | `cc-by-4.0` | CC-BY-4.0 | A | open | yes | yes | 30.8 GB | Skeleton text files useful for retargeting. |
| [V-LIBRASIL (CIn-UFPE)](https://ieee-dataport.org/documents/v-librasil-new-dataset-signs-brazilian-sign-language-libras) – Rodrigues & Zanchettin, DOI 10.21227/v589-hn68 | isolated-video (citation forms) | 4,089 videos of 1,364 terms (from ASLLVD list), 3 signers | "The data available from these pages can be used for research and education purposes, but cannot be redistributed without permission. Commercial use, without explicit permission, is not allowed, nor are any patents and copyrights based on this material." | LicenseRef-V-LIBRASIL | B/C | IEEE DataPort subscription or [libras.cin.ufpe.br](https://libras.cin.ufpe.br/pages/conditions-of-use,3) (HTTP 502 on 2026-10-14) | no | no | 10.55 GB | Largest Libras citation set; request written permission. Cite Rodrigues 2021 UFPE dissertation. |
| [LIBRAS-EQT-UECE](https://zenodo.org/records/21398895) – Moraes, Moreira, Uchoa, Nascimento | isolated + continuous video + landmarks | — | `cc-by-nc-4.0` | CC-BY-NC-4.0 | B | open | no | NC | 45.4 GB | Research reference only. |
| [Apoema-Libras560 (IFAM)](https://zenodo.org/records/20421823) – Chamy Machado, Santos | isolated RGB-D | 560 signs (84-sign subset: 3,444 samples) | none listed; access restricted | — | C | request | — | — | — | Request terms. |
| [LSWH100 – Libras SignWriting Handshape](https://zenodo.org/records/10635628) – Coelho Lobo-Neto | synthetic handshape images, SignWriting-named, 3D hand keypoints | 144,000 images, 100 handshape classes | `cc-by-4.0` | CC-BY-4.0 | A | open | yes | n/a | 17.7 GB | Phonology aid: maps SignWriting handshape symbols to 3D hand poses (useful for FSW→VRM hand tuning). Not fingerspelling. |
| [pt-br2libras-gloss](https://data.mendeley.com/datasets/ryj88ckjww) / [libras_bilingual_dataset](https://data.mendeley.com/datasets/v7gyc4fvrc) – Lima, França, Silva, Albuquerque / Silva et al. | text gloss corpora (PT ↔ Libras gloss) | 127,349 / 68,029 sentence pairs | Mendeley "CC BY-SA 4.0" | CC-BY-SA-4.0 | A | open | yes | n/a | 31 MB / 9 MB | Gloss vocabulary frequency list; no sign forms. |
| [Wikisigns LIBRAS](http://www.wikisigns.org/portugues/libras-brasil/) | isolated-video | 32 | CC BY-SA 4.0 footer | CC-BY-SA-4.0 | A | web | yes | yes | tiny | Small extra. |
| [Brazilian Sign Language Alphabet](https://data.mendeley.com/datasets/k4gs3bmx5k) – Passos, Fernandes, Comunello | **fingerspelling** images | 3,000 images/sign, 200×200 | Mendeley "CC BY 4.0"; description says it was built from images "previously available in Kaggle" and describes them as ASL alphabet | CC-BY-4.0 (provenance doubtful) | D (provenance) | open | — | — | 121 MB | FLAG alphabet-only + unclear upstream rights. |
| [MALTA_LIBRAS (HF)](https://huggingface.co/datasets/MALTA-Lab/MALTA_LIBRAS) | tensors (incl. 20-sign MINDS subset) | 10K–100K | `license: mit` | MIT | A (derived) | HF | yes | n/a | — | Low value (tensors). |
| VLibras – [spbgovbr-vlibras org](https://github.com/spbgovbr-vlibras) | avatar-lexicon (Unity asset bundles per sign) | dictionary served from gov servers | Code repos LGPL-3.0; [vlibras-dictionary-bundles](https://github.com/spbgovbr-vlibras/vlibras-dictionary-bundles) and -cache/-video repos are **empty (0 KB)**; sign bundles not published; `dicionario2.vlibras.gov.br/signs` returns HTTP 403 | LGPL-3.0 (code only) | C (data) | contact LAVID/UFPB / Ministério | data: unknown | no | — | Ask for bundle license; one bundle (`public/assets/bundles/OBRIGADO`) ships inside the LGPL [vlibras-web-browsers](https://github.com/spbgovbr-vlibras/vlibras-web-browsers) repo. |
| [Dicionário INES (Acessibilidade Brasil; Lira & Felipe)](https://dicionario.ines.gov.br/) | lexical-db + video; fields Palavra, Exemplo, Acepção, Assunto, **Mão** (73 handshape filters), Classe Gramatical, Origem | not stated | none on page; "Para Obter uma cópia do dicionário LIBRAS em cd, entre em contato com o INES." | — | C/D | browse; CD on request | unknown | unknown | — | Ask INES for written license; do not crawl. |
| [Corpus de Libras (UFSC)](https://corpuslibras.ufsc.br/?lang=en) | continuous-video + ELAN (Inventário Nacional de Libras) | — | no license statement on portal; login/sign-up links present | — | C | free login (per IPHAN technical opinion, [gov.br PDF](https://www.gov.br/iphan/pt-br/assuntos/noticias/ParecetTcnicoLibras.pdf), as reported by search) | unknown | unknown | — | Register and read terms. |
| [Libras-UFPel Corpus](https://aclanthology.org/2026.propor-1.112/) | 2,400 isolated signs + 2,400 sentences (controlled), ~10 h interviews | 4,800 records | not stated in abstract | — | C | — | — | — | — | Check paper/data statement; promising isolated-sign set. |
| HF mirrors [ibmectech/v-librasil-raw](https://huggingface.co/datasets/ibmectech/v-librasil-raw), [ibmectech/minds-libras-raw](https://huggingface.co/datasets/ibmectech/minds-libras-raw), [34data/v-librasil](https://huggingface.co/datasets/34data/v-librasil) | mirrors | — | no license tag (V-LIBRASIL forbids redistribution) | — | **D** | — | — | — | — | Skip: scraped mirrors. |

#### Brazil — Indigenous / village sign languages
- **Urubu-Kaapor SL (uks):** ELDP project "Documentation and description of Urubú-Ka'apor Sign Language" (PI Vitória Gonçalves de Aniz, USP partner, from Jan 2015), outputs to ELAR — [Culture in Crisis](https://cultureincrisis.org/projects/documentation-and-description-of-urubú-kaapor-sign-language); ELAR facet "Ka'apor Sign Language (24)" — [ELAR search](https://www.elararchive.org/?s=sign+language); a Ka'apor (spoken-language) ELAR collection by Gustavo Godoy / André Sanches de Abreu holds 3 Ka'apor SL items — [ELAR Ka'apor collection](https://www.elararchive.org/index.php?name=SO_d5523b1e-256f-4aad-a323-bb0958274309). ELAR terms are non-commercial → Tier B/C. Kakumasu 1968 description; SIL Brazil archive — [SIL Brazil](https://www.silbrazil.org/resources/archives/76974).
- **Terena SL, Cena (Jaicós village SL), Sateré-Mawé:** nothing found (searches could not be completed; see Gaps).

#### Guianas
- **Guyana:** Wikisigns Guyana SL, 13 signs, CC BY-SA 4.0 — [wikisigns.org/english/guyana](http://www.wikisigns.org/english/guyana). Tier A, tiny.
- **Suriname (sgn-SR):** the Surinamese Deaf community's sign language "has not been researched" (van den Bogaerde & Woest) — [UvA DARE](https://dare.uva.nl/id/b367dc36-b03d-4389-8044-18970e202641); Kajana village SL has only a few families of users — [Wikipedia](https://en.wikipedia.org/wiki/Kajana_Sign_Language). Nothing usable.
- **French Guiana:** nothing found.

### Inferences
- Because the SPML files themselves carry no license element, Marionet should record the signwriting.org site statement URL + capture date as the license evidence for every SignPuddle puddle, and keep the `<src>` field per entry (e.g. "UCPel") as attribution.
- SignPuddle is the only Tier-A lexical source for ~10 of the in-scope languages (hds, pys, ncs, aed, csn, ugy, csg, vsl, prl partly, bvl); SignWriting gives handshape/movement/contact symbols that can seed SignDesc even without video, which matches the "clips without video" workflow.
- For LENSEGUA, Wikisigns LSG (21 entries) can unblock the allowlist immediately; the existing gsm demo sign should be checked against those 21 glosses.
- Peru's PUCP Dataverse is the most permissively licensed national-scale source in the region (CC0), but its CC0 items are mostly narrative/continuous; isolated citation forms (PUCP 305) are NC.
- The many Compendium "Open licence" labels (INSOR, LeSiCo, CES, Tree of Life) are not backed by text on the original pages, so they should not pass the Tier-A gate without a written grant.

### Gaps
- Exact entry count of SignPuddle sgn46 (Brazil) — file is 22.2 MB, above the 20 MB download cap; only the header and tail were sampled.
- Wikisigns LSU (85 signs) list URL could not be located; no Wikisigns bulk-export mechanism was found.
- CENAREC LESCO and INSOR licenses: Compendium values ("BY-NC-SA", "Open licence") could not be confirmed on the original sites.
- Web search budget was exhausted mid-task, so the following were **not researched**: Capovilla *Dicionário da Língua de Sinais do Brasil* (EDUSP, commercial print — presumed Tier D, unverified), Hand Talk (proprietary — presumed Tier D, unverified), LIBRAS-UFOP dataset license, Kaggle datasets (API requires auth), ASORGUA dictionary, ANSNIC/Senghas/Kegl archives, Le Guen's Yucatec Maya SL data location, Terena/Cena/Sateré-Mawé documentation, French Guiana, Chilean datasets beyond SignPuddle, a Nicaraguan ISN archive (e.g. NSLP holdings).
- ELAR collection holding the "Panamanian Sign Language (2)" items and the main Urubu-Kaapor SL collection (Aniz) were not identified.

---

## Q2. What license governs data vs. videos? Bulk export? Phonological coding fields?

### Takeaway
Licenses mostly apply to the whole package (data + video) — no Latin American source split a permissive metadata license from a restrictive video license — but several datasets carry hidden third-party video risk (AEC broadcast footage, LSA-T/LSA-X YouTube). Bulk exports exist only for SignPuddle (SPML), repository deposits (Zenodo/Mendeley/Dataverse/figshare) and none of the national web dictionaries. Phonological coding is present in Signbank da Libras, CENAREC LESCO, INSOR (handshape search), INES (handshape "Mão" field) and implicitly in SignWriting; none of these is Tier A except SignPuddle.

### Cited Findings
- Signbank da Libras: data "públicos para uso sob a licença internacional de Creative Commons BY-NC-SA 4.0" (one license for the platform's data) — [Signbank terms page bundle](https://signbank.libras.ufsc.br/pt/terms-of-use); Compendium lists citation form, ID gloss, PT/EN translations, semantic category and "phonological information" — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/signbanklibras.html); the Signbank 2.0 platform paper is titled "Signbank 2.0 of Sign Languages: Easy to Administer, Easy to Use, Easy to Share" (Quadros, Rathmann et al. 2024) — [sign-lang@LREC](https://www.sign-lang.uni-hamburg.de/lrec/data/librassignbank.html). No public export button was found on the site.
- CENAREC LESCO dictionary has a phonology section ("Nivel Fonético-fonológico": configuraciones de mano, orientación, locación, superficie y relación, movimiento de contorno y local, rasgos no manuales, tipos estructurales) but no license or download — [CENAREC](https://lesco.cenarec.go.cr/index.php/diccionariolesco).
- INSOR offers four lexicon search modes including "CONFIGURACIÓN MANUAL" with groups/subgroups; no downloads of entries — [INSOR](https://educativo.insor.gov.co/diccionario/).
- INES has a "Mão" (handshape) field with 73 handshape filters; distribution only by CD on request — [INES](https://dicionario.ines.gov.br/).
- LSEc corpus: one CC BY 4.0 license for videos + manifests, with explicit consent for "derivative works, and AI use" — [Zenodo 21627229](https://zenodo.org/records/21627229) (LICENSE.md / CHANGELOG.md inside `lsec_metadata_1.0.0.zip`).
- AEC (Peru) is CC0 at deposit level, but "Videos correspond to two interpreters of Educational Peruvian TV show broadcasted during lockdown of COVID-19" — [PUCP Dataverse AEC](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/HDOAGH).
- LSA-T: repo license MIT for code, videos "extracted from the CN Sordos YouTube channel" — [LSA-T GitHub](https://github.com/midusi/LSA-T). LSA-X: CC BY-NC-ND 4.0 keypoints "extracted from publicly available Argentine Sign Language (LSA) videos", some subtitles "from YouTube's auto-generated captions" — [Zenodo 19087120](https://zenodo.org/records/19087120).
- VLibras: software LGPL-3.0, but the dictionary bundle/cache/video repos are empty and the dictionary API host returns 403 — [GitHub org](https://github.com/spbgovbr-vlibras), [vlibras-dictionary-bundles](https://github.com/spbgovbr-vlibras/vlibras-dictionary-bundles).
- SignPuddle bulk export: per-puddle SPML at `signpuddle2.0/data/spml/sgn{ID}.spml` (verified HEAD 200 for 20 puddles); SignPuddle Network API offers "download databases" — [signpuddle.net](https://signpuddle.net/).
- SIGNO-PERU-ISO has a minimal-pair design (18,179 RGB-D sequences, 17 native signers) but is restricted and research-only — [Zenodo 18990737](https://zenodo.org/records/18990737).
- LSWH100 names 100 Libras handshape classes with SignWriting conventions and provides 3D hand keypoints — [Zenodo 10635628](https://zenodo.org/records/10635628).

### Inferences
- For phonology fields under Tier A, the practical route is SignWriting FSW (symbol IDs encode handshape, orientation, contact, movement) from SignPuddle, optionally cross-referenced with LSWH100 handshape→3D-pose mappings for Libras.
- ASL-LEX-style coded spreadsheets do not exist openly for any Latin American SL; the closest are Signbank da Libras (NC) and CENAREC (license unclear). Requesting exports from UFSC and CENAREC is the highest-value Tier-C action.

### Gaps
- Whether Signbank da Libras' JSON API permits bulk retrieval (not probed beyond a non-authenticated `/api/languages` call that returned an empty list), and whether its videos are covered by the same BY-NC-SA statement.
- Whether Wikisigns videos are contributor-owned and uniformly BY-SA (the site footer is the only statement found).

---

## Q3. Repositories and portals swept (incl. dead ends)

### Takeaway
Zenodo, Mendeley Data, PUCP Dataverse and figshare yielded nearly all Tier-A video data; Hugging Face mostly holds unlicensed mirrors; ELAR holds village-SL documentation under non-commercial terms; government open-data portals yielded nothing.

### Cited Findings
- Zenodo REST queries (`"lengua de señas"`, `"língua de sinais"`, per-country "X sign language") surfaced the CC BY records listed in Q1 (18330565, 17783312, 6554337, 14689869/19154645, 21627229, 17479338, 21093176, 10635628, 2667329, 4322983, 4723992) and NC/restricted ones (21398895, 18990737, 22715615, 19087120, 20421823) — e.g. [Zenodo 21627229](https://zenodo.org/records/21627229), [Zenodo 18330565](https://zenodo.org/records/18330565).
- Mendeley Data public API gave licenses for 6rj76z6y3n, g45jkzys4f, 9ssyn8tff5, 3d4wggwh5g (CC BY 4.0), 5s4mt7xrd9/67htnzmwbb/48xybsmvpv (CC BY-NC 3.0), ryj88ckjww/v7gyc4fvrc (CC BY-SA 4.0), sjt79hnb2f, k4gs3bmx5k (CC BY 4.0) — e.g. [Mendeley 3d4wggwh5g](https://data.mendeley.com/datasets/3d4wggwh5g).
- PUCP Dataverse search "señas" returned 7 LSP datasets (5 CC0, 2 CC BY-NC) — e.g. [PUCP-DGI156](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/OJYYYS).
- figshare: LSC50 is CC BY 4.0, 10.6 GB — [figshare 27383016](https://figshare.com/articles/dataset/LSC50_Colombian_Sign_Language_Video_and_Inertial_Measurement_Dataset/27383016).
- Hugging Face: relevant hits were MALTA_LIBRAS (MIT) and unlicensed mirrors (ibmectech/v-librasil-raw, ibmectech/minds-libras-raw, 34data/v-librasil) — [MALTA_LIBRAS](https://huggingface.co/datasets/MALTA-Lab/MALTA_LIBRAS), [v-librasil-raw](https://huggingface.co/datasets/ibmectech/v-librasil-raw).
- ELAR: access levels O/U/S; "Materials may only be used for non-commercial and/or educational activity" — [ELAR how-to-use](https://www.elararchive.org/how-to-use/); relevant language facets: Chatino SL San Juan Quiahije, Providencia SL (114), Bay Islands SL (27), Ka'apor SL (24), Panamanian SL (2); no Yucatec Maya SL — [ELAR search](https://www.elararchive.org/?s=sign+language).
- Hamburg Compendium has language pages only for aed, bzs, csg, csn, csr, mfs (plus Cuba csf) among Latin American SLs — [Compendium language index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html); sign-lang@LREC data pages exist for bzs (Libras Corpus, Libras Signbank, IPSL, Interpreted Songs Corpus), mfs (DIELSEME), csr (LESCO dict + corpus), prl (AEC, DLSP) — e.g. [LREC prl](https://www.sign-lang.uni-hamburg.de/lrec/language/prl.html).
- SpreadTheSign is listed by the Compendium for Libras, LSM, LSA, LSCh — [Compendium SpreadTheSign](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/spreadthesign.html) (Tier D by Marionet rule).
- datos.gov.co (Socrata catalog API) search "señas" returned only SENA training datasets — no sign-language data — [datos.gov.co](https://www.datos.gov.co/). datos.gob.mx CKAN API returned a non-JSON response and dados.gov.br's API requires a key — not searchable in this session (dead ends / unverified).
- DIELSEME's listed URL `campusdee.ddns.net/publicacionesdee.aspx` is 404 — [sign-lang@LREC DIELSEME](https://www.sign-lang.uni-hamburg.de/lrec/data/dielseme.html).
- libras.cin.ufpe.br (V-LIBRASIL terms) returned HTTP 502 on 2026-10-14; terms were read from IEEE DataPort instead — [IEEE DataPort](https://ieee-dataport.org/documents/v-librasil-new-dataset-signs-brazilian-sign-language-libras).

### Inferences
- Repository deposits (Zenodo/Mendeley/Dataverse) are where Tier-A Latin American data actually lives; national dictionary portals should be treated as Tier C contacts, not ingest targets.

### Gaps
- Kaggle not searched (API auth); national university repositories other than PUCP (e.g. UFSC/USP/UNAM/UChile Dataverses, Repositorio UFSC MP4s of the Inventário) not systematically swept; GitHub code-search not run.

---

## Q4. Recommended first ingest per language; languages with nothing usable

### Takeaway
Each language's first ingest is listed below; for most languages it is a SignPuddle SPML dump, with video from Wikisigns (mfs, gsm), Zenodo (ecs, mfs), PUCP Dataverse (prl) or figshare (csn). Several languages have nothing usable or effectively nothing.

### Cited Findings
| Language (ISO) | Recommended first ingest (Tier A) | Next Tier B/C step |
|---|---|---|
| Mexican SL (mfs) | [Wikisigns LSM](https://www.wikisigns.org/list/es/lsm) (2,178, CC BY-SA 4.0) + [SignPuddle sgn65](https://www.signbank.org/signpuddle2.0/data/spml/sgn65.spml) (1,731); then [Zenodo LSM Glosses](https://zenodo.org/records/18330565) (121, CC BY 4.0) | — |
| Libras (bzs) | [SignPuddle sgn46](https://www.signbank.org/signpuddle2.0/data/spml/sgn46.spml) (22 MB; needs >20 MB approval) + [LSWH100](https://zenodo.org/records/10635628) handshapes; [MINDS-Libras](https://zenodo.org/records/2667329) for variation | Request export/BY grant from [Signbank da Libras](https://signbank.libras.ufsc.br/pt/terms-of-use) (NC-SA); permission for [V-LIBRASIL](https://ieee-dataport.org/documents/v-librasil-new-dataset-signs-brazilian-sign-language-libras) |
| Ecuadorian SL (ecs) | [AI-Ready LSEc corpus](https://zenodo.org/records/21627229) lexical subset (1,142 videos / 617 labels, CC BY 4.0) | Contact CONADIS for "Gabriel Román" dictionary |
| Peruvian SL (prl) | [PUCP-DGI156](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/OJYYYS) (CC0) + [SignPuddle sgn71](https://www.signbank.org/signpuddle2.0/data/spml/sgn71.spml) | Ask PUCP authors to relicense [PUCP 305 (glosas)](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/JU4OLG) (CC BY-NC) |
| Colombian SL (csn) | [SignPuddle sgn51](https://www.signbank.org/signpuddle2.0/data/spml/sgn51.spml) (1,286) + [LSC50](https://figshare.com/articles/dataset/LSC50_Colombian_Sign_Language_Video_and_Inertial_Measurement_Dataset/27383016) (CC BY, video+IMU) | Contact INSOR and UNAL (LeSiCo, 1,980 signs) |
| Argentine SL (aed) | [SignPuddle sgn41](https://www.signbank.org/signpuddle2.0/data/spml/sgn41.spml) (1,870) | [LSA64](https://facundoq.github.io/datasets/lsa64/) research-only (NC-SA) |
| Honduran SL (hds) | [SignPuddle sgn16](https://www.signbank.org/signpuddle2.0/data/spml/sgn16.spml) (3,401) | ASH print dictionary |
| Paraguayan SL (pys) | [SignPuddle sgn129](https://www.signbank.org/signpuddle2.0/data/spml/sgn129.spml) (3,061) | SPL DamPy license inquiry |
| Nicaraguan SL (ncs) | [SignPuddle sgn67](https://www.signbank.org/signpuddle2.0/data/spml/sgn67.spml) (1,725) | ANSNIC dictionary (print) |
| Uruguayan SL (ugy) | [SignPuddle sgn143](https://www.signbank.org/signpuddle2.0/data/spml/sgn143.spml) (388) + Wikisigns LSU (85, URL TBD) | TUILSU/UdelaR "Léxico trelsu" |
| Chilean SL (csg) | [SignPuddle sgn135](https://www.signbank.org/signpuddle2.0/data/spml/sgn135.spml) (175) | UMCE bilingual dictionary (ask UMCE) |
| Venezuelan SL (vsl) | [SignPuddle sgn76](https://www.signbank.org/signpuddle2.0/data/spml/sgn76.spml) (136) | — |
| Guatemalan SL / LENSEGUA (gsm) | [Wikisigns LSG](https://www.wikisigns.org/list/es/lsg) (21, CC BY-SA 4.0) — **add to allowlist** | ASORGUA |
| Costa Rican SL (csr) | none substantial (SignPuddle sgn101 = 2; [Zenodo 4723992](https://zenodo.org/records/4723992) alphabet phonology) | Confirm license + request export from [CENAREC](https://lesco.cenarec.go.cr/index.php/diccionariolesco) (1,041 signs, likely BY-NC-SA) |
| Panamanian SL (lsn) | [Mendeley PSL greetings](https://data.mendeley.com/datasets/3d4wggwh5g) (5 signs, CC BY 4.0) | Garay 1990 dictionary (ANSPA) |
| Bolivian SL (bvl) | [SignPuddle sgn45](https://www.signbank.org/signpuddle2.0/data/spml/sgn45.spml) (7 only) | Ministerio de Educación modules |
| Guyana SL | [Wikisigns Guyana](http://www.wikisigns.org/english/guyana) (13, CC BY-SA 4.0) | — |

**Languages with nothing usable (explicit):**
- Salvadoran SL / LESSA (esn) — only 1 SignPuddle entry ([sgn137](https://www.signbank.org/signpuddle2.0/data/spml/sgn137.spml)); no dictionary online.
- Yucatec Maya SL (msd), Nohya, Chican — no deposit found ([ELAR facets](https://www.elararchive.org/?s=sign+language)).
- Urubu-Kaapor SL (uks) — only ELAR non-commercial items ([ELAR Ka'apor](https://www.elararchive.org/index.php?name=SO_d5523b1e-256f-4aad-a323-bb0958274309)) → Tier B/C at best.
- Terena SL, Cena, Sateré-Mawé — nothing found (not fully searched).
- Suriname SL (sgn-SR), Kajana SL — language described as unresearched ([UvA DARE](https://dare.uva.nl/id/b367dc36-b03d-4389-8044-18970e202641)).
- French Guiana — nothing found.
- Effectively nothing (≤ 7 entries): Bolivian SL (bvl), Costa Rican SL (csr) at Tier A, Panamanian SL (5 signs).
- Village SLs with archive-only (Tier B/C) material: Chatino SL (Mexico), Providencia SL (Colombia), Bay Islands SL (Honduras) — [ELAR how-to-use](https://www.elararchive.org/how-to-use/).

### Inferences
- A single SignPuddle ingest script (parse SPML `<entry>` → FSW + glosses + `<src>`) unlocks Tier-A notation for 13+ languages at once and should be built before any video work.
- Priority Tier-C emails (by expected payoff): UFSC Signbank da Libras (export + license), CENAREC LESCO (license + phonology export), UNAL LeSiCo, INSOR, CIn-UFPE V-LIBRASIL, PUCP (relicense PUCP 305), CONADIS Ecuador.

### Gaps
- Entry *quality* of SignPuddle puddles (how many have glosses vs. bare FSW; duplicate/variant rates) was not assessed.
- Content of SeñaTalk (Zenodo 17479338) and exact sign list of LSC50 not inspected.

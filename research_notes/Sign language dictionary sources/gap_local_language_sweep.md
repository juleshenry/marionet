# Gap sweep: sign-language lexical and isolated-sign sources found through local-language terms in research-data and scholarly APIs

Scope and method (2026-10-14/15, UTC). I ran 129 local-language query strings across 51 languages; the full list is in the table at the end. I sent them to these APIs: DataCite REST (all resource types, ≤500 records per term), Zenodo REST (≤200 records per term), OSF SHARE index-card search, Figshare search, Dataverse search on 10 installations, GitHub repository search (name, description and readme), Crossref (`query.bibliographic`, top 100 per term), OpenAlex (partial; see Gaps) and Semantic Scholar (partial; see Gaps). I also queried Hugging Face (dataset-id search on 125 local and acronym keywords), CiNii Research (data and all endpoints, 9 Japanese queries), and the LINDAT, CLARIN-PL, CLARIN.SI and CLARIN-DK DSpace endpoints. I followed up each candidate on its repository API or landing page: the OSF v2 API, Figshare v2, NAKALA, Zenodo records, the DataCite DOI record, the HF dataset API and the GitHub contents API. I deduplicated results against the 10 existing note files: 117 DOIs, 1,571 URLs, 54 Zenodo IDs, 40 HF IDs, 60 GitHub repos, plus full-text grep for names. **Only items absent from those notes, or carrying a materially new fact, are reported here.** I downloaded no file larger than 20 MB; everything I checked was metadata, JSON, CSV headers or small text files.

## Q1. Using each local-language term for "sign language" with dictionary, lexicon, dataset or corpus terms, which datasets exist that the earlier English-only notes missed?

### Takeaway
The local-language sweep found **six new citation-form lexical or phonology sources worth acting on** (A1–A6 below), plus about seven smaller lexical items (section B). Five of the six are Tier A or B with real size. (1) **DGS psycholinguistic norms** (OSF, CC BY 4.0): 310 isolated DGS sign videos, OpenPose keypoints, one-/two-handed and place-of-articulation codes, and sign onset and offset times. (2) **Iconicity and transparency in NGT stimulus materials** (UvA figshare): about 1,410 isolated NGT sign clips. The item licence is CC BY-NC 4.0, but the collection-level DOI says CC BY 4.0. (3) **LSC phonology datasets** (CORA, CC BY-SA 4.0): 354 Catalan signs coded for handshape, aperture, location, contact, movement, orientation and non-manuals, plus 100 compounds. (4) **FlexSign** LSF lexical database (NAKALA, CC BY-NC-ND 4.0): 546 signs from a native Deaf signer. (5) **Synae** Libras track videos (Zenodo, CC BY 4.0): 256 one-sign mp4s. One large Tier C JSL source turned up through CiNii: the **Osugi Lab sign-language database** at Tsukuba University of Technology. It holds 192 university-life signs, 50 audiology signs, reconstructed signs from 1909–1967 JSL word-lists with written form descriptions, and a dialect map of 30 words × 94 signers. Its terms are "free, but credit and prior contact required". Most other hits are fingerspelling image sets, continuous corpora, theses or apps that scrape copyrighted dictionaries.

### Cited Findings

#### A. New citation-form lexical / phonology sources (highest value)

| # | Language (ISO 639-3) | Source | URL / DOI | Type | Size | License (verbatim, original record) | SPDX | Tier | Access route | commercial_ok | video_redistrib_ok | Approx disk | Citation | Recommended next action |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A1 | German SL (gsg) | Psycholinguistic norms for >300 lexical signs in DGS (Trettenbrein et al.) | [osf.io/mz8j4](https://osf.io/mz8j4/) · paper [10.3758/s13428-020-01524-y](https://doi.org/10.3758/s13428-020-01524-y) | isolated-video + pose (OpenPose body25 JSON/CSV per sign) + lexical/phonology table | 310 mp4 clips (`ABEND.mp4` …), `DGS_norms.csv` (72 KB) | OSF node license: "CC-By Attribution 4.0 International" | CC-BY-4.0 | **A** | Direct OSF download (osfstorage; per-file API) | yes | yes (attribution) | ~0.53 GB video (~1.7 MB/clip) + keypoints | Trettenbrein, Pendzich, Cramer, Steinbach, Zaccarella (2021) *Behavior Research Methods* | Download CSV + stimulus clips; map `gloss_German`/`place_of_articulation`/`one_handed`/`two_handed`; use `video_sign_onset`/`offset` (ms) to trim; retarget body25 keypoints as a pose prior |
| A2 | Sign Language of the Netherlands (dse) | Iconicity and transparency in NGT – Stimulus materials (Schiefner, Roelofsen, Sumer) | [10.21942/uva.c.8301958](https://doi.org/10.21942/uva.c.8301958) · [figshare collection](https://uvaauas.figshare.com/collections/Iconicity_and_transparency_in_NGT_-_Stimulus_materials/8301958) · paper [10.3758/s13428-026-02969-3](https://doi.org/10.3758/s13428-026-02969-3) | isolated-video (citation forms with gloss filenames, e.g. `aap_Tobias_K_iconicity.mp4`) + metadata CSV + codebook | 46 items, 2,824 files: ~1,410 unmasked + ~1,410 masked ("transparency") clips, several signers (Tobias, Theo, Manouk, Eva) | Collection DOI (DataCite): "Creative Commons Attribution 4.0 International". Every item (figshare API): "CC BY-NC 4.0". Description: the high-res originals "are also available under a CC BY-NC 4.0 license" | CC-BY-NC-4.0 (item level governs) | **B** (licence conflict) | Direct figshare download per item | no (NC) | yes, non-commercial | ~6.0 GB total (~3 GB unmasked) | Schiefner, Roelofsen & Sumer (2026) BRM; data DOI above | Treat as NC. Ask authors whether the collection-level CC BY is intended. Pull `StimulusMaterials_Metadata.csv` first |
| A3 | Catalan SL (csc) | Corpus lingüístic de signes construïts i no construïts simultàniament… en LSC (Villaécija) | [10.34810/data1935](https://doi.org/10.34810/data1935) | **phonology spreadsheet** (TSV): 354 signs; for each hand: handshape, aperture, place and point of articulation, contact, movement, orientation, non-manuals (mouthing, eyes/brows, mouth/tongue/teeth, cheeks); gloss, semantics, source reference | TSV 157 KB + PDF + 2 txt | "Creative Commons Attribution Share Alike 4.0 International"; "info:eu-repo/semantics/openAccess" | CC-BY-SA-4.0 | **A** | CORA Dataverse (web download; API blocked by a bot check, see Gaps) | yes | n/a (no video; the signs cite other LSC resources) | <1 MB | Villaécija, A. (2024) CORA.Repositori de Dades de Recerca | Download the TSV and crosswalk its codes to Marionet's handshape, location and movement enums. Join to CORPUS LSC / Wikisign LSC glosses (already in notes) to get video |
| A3b | Catalan SL (csc) | Corpus lingüístic de construccions derivatives seqüencials o compostes en LSC (Villaécija) | [10.34810/data1936](https://doi.org/10.34810/data1936) | lexical/morphology TSV: 100 compound/sequential signs (gloss per component, handshape, one/two-handed, semantics) | TSV 112 KB | "Creative Commons Attribution Share Alike 4.0 International" | CC-BY-SA-4.0 | **A** | as above | yes | n/a | <1 MB | Villaécija (2024) | Secondary to A3 |
| A4 | French SL (fsl) | FlexSign: Base de données lexicale en LSF (Philomène Périn) | [10.34847/nkl.afb675g5](https://doi.org/10.34847/nkl.afb675g5) · [NAKALA API](https://api.nakala.fr/datas/10.34847/nkl.afb675g5) | isolated-video lexical DB: "546 signes … produits par une locutrice sourde native"; mp4 + gif per sign (`SM0001.mp4`) + 6 TSV + notebook | 1,100 files | NAKALA: "CC-BY-NC-ND-4.0"; DataCite: "Creative Commons Attribution Non Commercial No Derivatives 4.0 International" | CC-BY-NC-ND-4.0 | **B** (ND) | Direct NAKALA download | no | verbatim only (ND forbids derivatives, so retargeted clips are doubtful) | 5.4 GB | Périn, P. (2024) NAKALA | Fetch the TSVs only (gloss, psycholinguistic variables). Ask the author for derivative or avatar-use permission before using the video |
| A5 | Brazilian SL (bzs) | Synae – "Sinais da Trilha 01–10" (IFCE Tianguá) | e.g. [zenodo 20724652](https://zenodo.org/records/20724652) (T01), [20724677](https://zenodo.org/records/20724677) (T02 alfabeto), [20724714](https://zenodo.org/records/20724714), [20725204](https://zenodo.org/records/20725204), [20724807](https://zenodo.org/records/20724807), [20725165](https://zenodo.org/records/20725165), [20725227](https://zenodo.org/records/20725227), [20725250](https://zenodo.org/records/20725250), [20725273](https://zenodo.org/records/20725273), [20725298](https://zenodo.org/records/20725298) | isolated-video (one sign per mp4, Portuguese word as filename: `Surdo.mp4`, `Mãe.mp4`, `Ontem.mp4` …) | 7+27+27+18+31+35+35+19+29+28 = **256 clips** (27 are alphabet letters) | Zenodo `license.id`: "cc-by-4.0" | CC-BY-4.0 | **A** | Direct Zenodo download | yes | yes | ~0.56 GB | Pereira Sousa, dos Santos Jácome, de Castro Sperandio, Pinheiro Santiago (2026) Zenodo | Download all 10 tracks, dedupe against the duplicate zip record [20722899](https://zenodo.org/records/20722899) and against V-LIBRASIL/MINDS (already in notes) |
| A6 | Japanese SL (jsl) | Osugi Lab sign-language database (大杉研究室手話言語データベース), Tsukuba Univ. of Technology | [deafstudies.jp/osugi](https://www.deafstudies.jp/osugi/) · [「大学生活に係る手話」](https://www.deafstudies.jp/osugi/edu/) · [「手話辞典（大阪）1963」](https://www.deafstudies.jp/osugi/osaka/) · CiNii data records [2010589441430210177](https://cir.nii.ac.jp/crid/2010589441430210177), [2010307966453517056](https://cir.nii.ac.jp/crid/2010307966453517056) | isolated-video (streamed) + **written sign-form descriptions** (the Osaka page has page no., entry, reading, video and the original description, e.g. 「挨拶 … 両手の人差指を前で対立させてから、両手をおじきするように屈める」) | 192 university-life signs (2010, revised 2024); 50 audiology signs; reconstructions of the 1909 聾啞教授手話法, 1954/1957 Kyoto 手話I/II, 1963 Osaka 手話辞典, 1964 手まね入門, 1967 Kokura 手まねと言葉の栞, and Kyushu signs; JSL dialect map of 30 words from 94 signers in 47 prefectures | CiNii/KAKEN data record dc:rights: "無償、但しクレジット表記と事前連絡を条件とする。" (free; credit and prior contact required); access right `c_abf2` (open). Site footer: "Copyright © Tsukuba University of Technology. All Rights Reserved." | LicenseRef-TsukubaTech-credit-prior-contact | **C** | Web player; email to the address given in the CiNii record (kouhou＊ad.tsukuba-tech.ac.jp) | unknown (not stated) | only with credit and prior contact | unknown | Osugi lab DB, Tsukuba University of Technology; KAKEN 22H05012 / 22H05014 | Email for bulk-video permission and commercial terms. The historical description text is useful as a phonology cross-check even without the video |

#### B. Smaller new Tier A/B lexical items

- **Toponímia em Libras (Pontal do Paraná)**: bzs. 8 neighbourhood-name signs, one mp4 each (`01-Guaraguacu.mp4` …), 27.6 MB. License "cc-by-sa-4.0" (Zenodo), Tier A, commercial yes, redistribution yes (SA). Citation: Adriana de Moraes da Silva (2026), UNESPAR master's thesis support material. Next action: add as a toponym-sign mini-set. — [zenodo 23285949](https://zenodo.org/records/23285949)
- **AGLAIA – ARIADNE Glossary in LIS and IS for Archaeology**: ise + ils. A single compiled glossary video, `00_R001_AGLAIA_LIS_Total.mp4`, 478 MB. License "cc-by-4.0", Tier A. It is one long video, so each term has to be segmented out. Citation: Niccolucci, Amico, Niccolucci, Biagianti, Scornavacche, Speranza (2026), ATRIUM project. — [zenodo 19844076](https://zenodo.org/records/19844076)
- **Libras-10 Dataset**: bzs. "10 signs … recorded 10 times by 1 signer, totaling a database of 100 samples". 10 RAR files, 22.4 GB. License "cc-by-4.0", Tier A, but the vocabulary is tiny and the files are huge. Low priority. — [zenodo 3229958](https://zenodo.org/records/3229958)
- **Matched signs and pseudosigns in STS (Witte et al., 2025)**: swl. **New licence fact.** The existing notes list the OSF video set (osf.io/4rj5f) as "none / D/C". The ASHA figshare supplement is licensed "CC BY-NC 4.0" and contains `S4_…xlsx` (13.6 MB) and `S5_…xlsx`. These hold the real-sign/pseudosign set matched on neighborhood density and phonotactic probability, so they likely include phonological coding (not opened, >10 MB). Tier B for the spreadsheets. — [ASHA figshare 29318822](https://asha.figshare.com/articles/online_resource/Matched_signs_and_pseudosigns_in_STS_Witte_et_al_2025_/29318822)
- **Dicionário ilustrado de Libras: sinais regionais da cidade de Gurupi – Tocantins**: bzs. One 21 MB PDF of illustrated regional signs for places, institutions and services. License "CC-By Attribution 4.0 International" (OSF), Tier A, illustrations only, no video. — [osf.io/kt35f](https://osf.io/kt35f/)
- **Sinais que protegem: guia bilíngue português-Libras**: bzs. 8.4 MB PDF with QR codes linking to Libras videos for policing and violence-support contexts. License "CC-BY Attribution-NonCommercial 4.0 International", Tier B. — [osf.io/48kna](https://osf.io/48kna/)
- **Manual de Libras para Enfermagem**: bzs. 7.8 MB PDF with images. License "cc-by-4.0", Tier A, image glossary only. — [zenodo 21776866](https://zenodo.org/records/21776866)

#### C. New fingerspelling / handshape image and landmark sets (Tier A/B, low priority for lexicon)

- **Spanish Sign Language (LSE) Fingerspelling Dataset**: ssp. "over 160,000 images" at 192 and 512 px, in raw, keypoint and overlay variants; 24.9 GB. License "cc-by-4.0", Tier A. — [zenodo 21351703](https://zenodo.org/records/21351703)
- **Achegety-LSPy, Alfabeto de la Lengua de Señas Paraguaya**: pys. 21 manual-alphabet classes, several participants, 3.0 GB. License "cc-by-4.0", Tier A, fingerspelling. — [zenodo 18057123](https://zenodo.org/records/18057123)
- **Peruvian SL fingerspelling images**: prl. [LSP vowels](https://doi.org/10.5281/zenodo.21091835) (A, E, I, O, U) and [DataBase – Señas Sordo Peruana](https://doi.org/10.5281/zenodo.21090915) (the "Alfabeto Dactilológico" of LSP). Both "Creative Commons Attribution 4.0 International" per DataCite. The Zenodo API returned errors for 21090915, so files are unverified.
- **BISINDO letter sets on Mendeley Data**: inl. All "Creative Commons Attribution 4.0 International", Tier A, fingerspelling A–Z:
  - [Dataset of BISINDO 70_30](https://data.mendeley.com/datasets/4gtxgjy6xv): 260 letter images.
  - [Dataset of BISINDO](https://data.mendeley.com/datasets/m8y229yvrm).
  - [HOG feature of BISINDO letters](https://data.mendeley.com/datasets/58jdd4fmtc): 1,764 features.
  - [BISINDO SIGN LANGUAGE RECOGNITION](https://data.mendeley.com/datasets/xh6bmx73n6): alphabet plus "commonly used gesture classes".
  - [Egocentric BISINDO Sign Language Dataset](https://data.mendeley.com/datasets/f8fcjjj3nw): first-person view; content not described.
- **36k SIBI 3D Hand Landmark Dataset**: SIBI, a signed system for Indonesian (no ISO code). 36,000+ rows of MediaPipe 21-point landmarks for A–Z. The DataCite rights list holds **both** "Creative Commons Attribution 4.0 International" and "…Non Commercial 4.0 International", which conflict; treat as B. — [10.5281/zenodo.21744340](https://doi.org/10.5281/zenodo.21744340)
- **"lenguaje de signos español"**: ssp. "imagenes de lenguaje de signos en español para experimentos de aprendizaje". License "Creative Commons Attribution 4.0 International", contents unspecified. — [10.5281/zenodo.19073528](https://doi.org/10.5281/zenodo.19073528)
- **"Libras" (UCI Libras Movement re-uploads)**: bzs. "15 classes of 24 instances each … hand movement … bi-dimensional curve". These are trajectories only, not signs. License "cc-by-4.0". — [zenodo 10852531](https://zenodo.org/records/10852531), [zenodo 11206239](https://zenodo.org/records/11206239)

#### D. New pose / mocap / sensor sources

- **ProsIn-SL (Prosody in Interpreting from Swiss French Sign Language)**: ssr. About 3 h of LSF-SR dialogue from 15 Deaf participants, filmed with two camcorders, with **Perception Neuron 32 mocap (.raw)** for 13 participants. Continuous video plus mocap. The DataCite rights field is empty and the ORTOLANG API was not reachable, so the licence is unverified: Tier C. Next action: read the licence on the ORTOLANG item page in a browser. — [10.82270/prosin-sl](https://doi.org/10.82270/prosin-sl)
- **mrbandido/LSP**: prl. LSP word recognition from **SenseGlove DK3 haptic-glove inertial data**, part of the Universidad de Lima "SignoPeru" project. The repo holds one dataset zip and has no licence file: Tier C. — [github.com/mrbandido/LSP](https://github.com/mrbandido/LSP)
- **Dataset-Vietnamese-Sign-Language-MPU6050**: Vietnamese SL (hab/haf/hos). A smart-glove VSL dataset from 6 sensors, with no licence: Tier C. — [github.com/QHuy1503/Dataset-Vietnamese-Sign-Language-MPU6050-](https://github.com/QHuy1503/Dataset-Vietnamese-Sign-Language-MPU6050-)
- **BIM-SSD-V1 / V2 (Malaysian SL)**: xml. V1 has 4,858 smartphone video samples from 4 signers: alphabet, numbers, words and sentences. V2 has 3,143 RGB-frame folders with MediaPipe 2D keypoints and "4,900 glosses". License "Creative Commons Attribution Non Commercial No Derivatives 4.0 International". V2 `access_right` is "restricted", with 0 public files: Tier B/C. — [10.5281/zenodo.17573985](https://doi.org/10.5281/zenodo.17573985), [zenodo 17587688](https://zenodo.org/records/17587688)
- **LSE_eSaude_UVIGO_MSSL / _OSLWL**: ssp. HF dataset cards declare "license: mit", tags "sign spotting", "lse", and contain 467 and 2,154 files (mp4 + labels). Provenance and curators are blank on the cards ("More Information Needed"). They are not listed in the notes, which only cover LSE-Health-UVigo. Tier C until provenance is confirmed, because the MIT label was set by the uploader. — [HF MSSL](https://huggingface.co/datasets/mvazquez/LSE_eSaude_UVIGO_MSSL), [HF OSLWL](https://huggingface.co/datasets/mvazquez/LSE_eSaude_UVIGO_OSLWL)
- **LSE-METI-UVigo, Medical Emergency Triage Interactions**: ssp. Triage questions, predefined answers and phrases. "cc-by-nc-4.0", `access_right` "restricted", 0 public files: Tier B/C on request. — [zenodo 20035734](https://zenodo.org/records/20035734)
- **fhswf/rtm133lifting-finetuning-signs-fingerspelling-dgs**: gsg. 2D→3D lifting training JSON for DGS signs and fingerspelling, from the FH SWF group (other fhswf sets are in the notes). The card says only "license: mit"; the source of the keypoints is undocumented: Tier C. — [HF](https://huggingface.co/datasets/fhswf/rtm133lifting-finetuning-signs-fingerspelling-dgs)

#### E. New continuous corpora (not lexical; recorded so they are not rediscovered)

- **Tactile Swedish and Norwegian SL corpora** (swl, nsi): 220 mp4 files. Rights: "info:eu-repo/semantics/restrictedAccess" plus "Creative Commons Attribution 4.0 International", which covers the metadata. The video is released only "på begäran efter prövning enligt OSL" (on request, after review under the Public Access and Secrecy Act): Tier C. — [10.58141/jvas-9681](https://doi.org/10.58141/jvas-9681), [10.58141/t612-6561](https://doi.org/10.58141/t612-6561)
- **Swedish Sign Language as Second Language Corpus** (swl): 7 clips, CC BY-NC-ND 4.0, restricted. Skip. — [10.5878/786j-n432](https://doi.org/10.5878/786j-n432)
- **Russian Sign Language conversations** (rsl), Data Center for the Humanities, Cologne: about 3 h of dialogue from 5 signers; the DataCite rights field is empty: Tier C. — [10.18716/dch/a.00000028](https://doi.org/10.18716/dch/a.00000028)
- **Corpus Langue des signes Tunisienne** (tse), ORTOLANG: 10 narrative discourses from Tunis; rights empty: Tier C. — [10.82270/lst](https://doi.org/10.82270/lst)
- **Cuxac / Fusellier-Souza "Corpus LS émergente"** (Brazilian homesign narratives) and **"Mission LSM Ile Maurice"** (Mauritian SL, lsy) on COCOON: 96 records, each one short mp4. Rights: "Copyright (c) Cuxac, Christian; Freely accessible; Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic": Tier B (ND). — e.g. [10.34847/cocoon.0486638e-0e04-35aa-91f2-84fd16d68294](https://doi.org/10.34847/cocoon.0486638e-0e04-35aa-91f2-84fd16d68294)
- **Norwegian Sign Language Corpus – associated files** (nsi): annotation guidelines PDF (Ferrara 2026), elicitation materials and consent materials in NTS. License "CC-By Attribution 4.0 International"; documentation only. — [osf.io/tydf4](https://osf.io/tydf4/)
- **NavCorpus-LSC** (csc): a browser and extractor for the IEC CORPUS LSC, plus `metadades_videos.csv` cataloguing 328 recordings. License "MIT License". It is a tool for an already-known corpus. — [10.34810/data3243](https://doi.org/10.34810/data3243)
- **MEINE DGS (Public DGS Corpus)**: each transcript video has its own DataCite DOI, e.g. [10.25592/dgs.meinedgs-4.0-video-1250721](https://doi.org/10.25592/dgs.meinedgs-4.0-video-1250721), with an empty rights field. 315 such records matched "Gebärden" or "Gebärdensprache". The corpus is already in the notes.
- **Canal-U / FMSH (10.60527) LSF videos**: lectures, LSF poetry translations and "Projet LGMEF – histoire de l'âne en LSF". Licences vary: "CC BY-NC-SA", "CC BY-NC-ND", "Tous droits réservés". Continuous. — e.g. [10.60527/x534-xz20](https://doi.org/10.60527/x534-xz20)
- **IWF Göttingen ethnographic films**: "Ma'dan Araber (Südiraq) – Gebärdensprache" (1958) and "Sindhi (Westpakistan) – Gebärdensprache" (1964), with empty rights fields. Historical, Tier C/D. — [10.3203/iwf/e-182](https://doi.org/10.3203/iwf/e-182), [10.3203/iwf/e-653](https://doi.org/10.3203/iwf/e-653)
- **HeSLEx** (RSL/DGS heritage signers): "CC-BY Attribution-NonCommercial 4.0 International". The 40 videos are task instructions, not lexical signs. — [osf.io/kawge](https://osf.io/kawge/)
- **Corpus of Finnish Sign Language (version 2015)**: JYX DOIs [10.17011/jyx/dataset/86332](https://jyx.jyu.fi/handle/123456789/86332) and /86333 are a second PID for the CFINSL corpus already in the notes (21 signers, more than 14 h). OpenAlex tags it "public-domain", but the landing page does not say so. Unverified; do not rely on it.

#### F. GitHub / HF lexicon repos with new provenance facts (mostly Tier C/D)

- **tsvm/bg-sign-language** (bqn, Bulgarian SL): an extractor for the **Bulgarian Ministry of Education (МОН) Bulgarian SL dictionary**. README: "Изображенията и текстовото съдържание са извлечени от речника, публикуван от Министерство на образованието и науката (МОН). Всички права принадлежат на МОН и авторите на речника." The scraper is Tier D. The underlying MON dictionary is a new **Tier C** lead for bqn, which the notes list as having "nothing usable". — [github.com/tsvm/bg-sign-language](https://github.com/tsvm/bg-sign-language)
- **parlr/lsf-data** and its HF mirror **Langue-des-signes-francaise/LSF_data** (fsl): "Plus de 1140 vidéos" (`videos/education-nationale/Albi.webm` …), sourced from "LSF @ Éducation Nationale" (lsf.education.fr) and Laura Jauvert. The uploader labelled it MIT, but the content comes from a third party: **Tier D** as a mirror. Ask Éducation nationale (Tier C) about the original. — [HF LSF_data](https://huggingface.co/datasets/Langue-des-signes-francaise/LSF_data), [github parlr/lsf-data](https://github.com/parlr/lsf-data)
- **tuzengji/chinese-sign-language-dictionary** (csl): "Structured dataset derived from the National Common Chinese Sign Language Dictionary (4 volumes). SQLite + 6699 sign images. Non-commercial use only." Derived from a copyrighted book: Tier D. — [github](https://github.com/tuzengji/chinese-sign-language-dictionary)
- **folhascadentes/mamao-libras-dict** (bzs): "extract information of Libras signs from 'Dicionário da Língua de Sinais do Brasil'" (Capovilla). Tier D. — [github](https://github.com/folhascadentes/mamao-libras-dict)
- **AjnoEO/2dd_rsl** (rsl): code licensed MIT, for an online bilateral RSL dictionary at 2dd.artboy.ru that searches signs with the "шрифт РЖЯ" notation. The content licence is unknown: Tier C. This is a notation lead. — [github](https://github.com/AjnoEO/2dd_rsl)
- **xergg/dclgp** (psr, LGP): code licensed MIT, for "an online platform for Lingua Gestual Portuguesa … searchable sign-language dictionary" built from crowdsourced variation videos. The content licence is unknown: Tier C. — [github](https://github.com/xergg/dclgp)
- **Fabrica-REA/repolibras** (bzs): "Plataforma colaborativa para … vídeos de sinais em Libras", UFPR, with no licence: Tier C. — [github](https://github.com/Fabrica-REA/repolibras)
- **marxo126/spj-korpus** (svk): "first machine-learning-ready corpus toolkit for Slovak Sign Language … No annotated corpus exists". A toolkit only, no data. — [github](https://github.com/marxo126/spj-korpus)
- **FatimahEmadEldin/quran-sign-diyanet-tid** (tsm): Diyanet TİD Qur'an video segments with MediaPipe Holistic keypoints, "license: other". Continuous; source videos are third-party: Tier D. — [HF](https://huggingface.co/datasets/FatimahEmadEldin/quran-sign-diyanet-tid)
- **muhammadrefa/kamus-sibi**: the videos belong to a YouTuber, "perizinan sedang diurus" (permission still being arranged): Tier D. — [github](https://github.com/muhammadrefa/kamus-sibi)

#### G. Literature leads (papers describing lexical/pose data; data location not found)

- Turkish SL: **ERUSLR** "Yeni bir Türkçe işaret dili veri seti" (2020). — [10.17341/gazimmfd.746793](https://doi.org/10.17341/gazimmfd.746793)
- Algerian SL: **ALGSL89** dataset, published in a Turkish journal (2023). — [10.33461/uybisbbd.1339892](https://doi.org/10.33461/uybisbbd.1339892)
- RSL:
  - "Russian Sign Language Database for Clinical Use: Data and Annotation Peculiarities" (2022, CC BY per OpenAlex). — [10.25205/1818-7935-2022-20-3-90-108](https://doi.org/10.25205/1818-7935-2022-20-3-90-108)
  - "Мультимедийная база данных жестов русского жестового языка в трехмерном формате" (3D RSL database). — [10.31857/s0373658x0008302-1](https://doi.org/10.31857/s0373658x0008302-1)
  - "Корпус жестов в письменной форме" (a written-notation corpus of RSL signs; CC BY). — [10.25559/sitito.14.201802.426-435](https://doi.org/10.25559/sitito.14.201802.426-435)
- Czech SL: "Designing a Data Model for a Diachronic Sign Language Database: … Nineteenth-Century Bohemian Sources" (LREC 2026 workshop). — [10.63317/5hxyoxmdi8ri](https://doi.org/10.63317/5hxyoxmdi8ri)
- Libras:
  - "Análise da estrutura SematosÊmica de 13.500 sinais do Dicionário da Língua de Sinais do Brasil via BuscaSigno 3" (USP thesis; phonological coding of 13,500 signs from a copyrighted dictionary, Tier C). — [10.11606/t.47.2019.tde-31012019-101702](https://doi.org/10.11606/t.47.2019.tde-31012019-101702)
  - "proposta de análise articulatória com base no banco de dados LSB-DF" (UnB thesis). — [10.26512/2014.12.t.17554](https://doi.org/10.26512/2014.12.t.17554)
- Afghan SL (afg): **فرهنگ زبان اشاره افغانی = Afghan sign language dictionary** (2008). Crossref publisher: "انجمن ملی ناشنوایان افغانستان" (National Association of the Deaf of Afghanistan). The DOI resolves to a Google Drive scan held by ACKU. The notes have only 14 SignPuddle entries for afg, so this is a **new Tier C lexicon lead** (print scan, no licence). — [10.29171/acku_hv2476_5_alif77_fay4_1387](https://doi.org/10.29171/acku_hv2476_5_alif77_fay4_1387), [Crossref record](https://api.crossref.org/works/10.29171/acku_hv2476_5_alif77_fay4_1387)
- Ukrainian SL (ukl): "Конфігурація…" counts 39–40 handshape configurations in Ukrainian SL. The article PDF is CC BY 4.0 and serves as a phonology inventory reference. — [10.6084/m9.figshare.7699628.v2](https://doi.org/10.6084/m9.figshare.7699628.v2)
- Kazakh SL (kk "ым тілі"): a parallel corpus for translating into Kazakh SL with a Transformer (2025). — [10.32014/2025.2518-1726.367](https://doi.org/10.32014/2025.2518-1726.367)
- Chinese SL: 基于高校场景的聋人手语动态语料库 (2025). — [10.63887/jerp.2025.1.7.87](https://doi.org/10.63887/jerp.2025.1.7.87)
- JSL (CiNii):
  - 天草諸島における手話表現のデータベースの作成 (Amakusa village and regional sign database, Kwansei Gakuin, 2026). — [CiNii 1390026104430716800](https://cir.nii.ac.jp/crid/1390026104430716800)
  - KAKEN 25K15366, 3D mocap Japanese–JSL parallel corpus. — [CiNii 1040866882797028608](https://cir.nii.ac.jp/crid/1040866882797028608)
  - DICOMO2026 "グロス単位動作辞書" (a gloss-unit motion dictionary with a signed-Japanese mocap dataset). — [CiNii 1050591155552980096](https://cir.nii.ac.jp/crid/1050591155552980096)
  - 手話の口形動画データ (JSL mouth-shape video plus labels, AGH Kraków). — [CiNii 2010307966454797568](https://cir.nii.ac.jp/crid/2010307966454797568)
  - Signdex V.1 (1997). — [CiNii 1571417127415008384](https://cir.nii.ac.jp/crid/1571417127415008384)
  - 手話単語3次元時空間データベース (2000). — [CiNii 1971712334822193802](https://cir.nii.ac.jp/crid/1971712334822193802)
- South African SL / Afrikaans: "'n Leksikografiese model vir 'n elektroniese tweetalige grondslagfasewoordeboek van Suid-Afrikaanse Gebaretaal en Afrikaans" (Stellenbosch dissertation, 2013; via OpenAlex). No data DOI was found.

### Inferences
- Searching in local languages pays off mainly where researchers deposit in **national or institutional repositories with local-language metadata**: CORA (Catalan), NAKALA, COCOON and ORTOLANG (French), CiNii/KAKEN (Japanese), researchdata.se (Swedish), OSF projects written in Portuguese, and UvA figshare (Dutch). Three of the top finds were absent from all 10 earlier note files: the DGS norms (found via the German "Gebärdensprache" query on OSF SHARE), the LSC phonology TSV (via "llengua de signes" on DataCite) and the Osugi DB (via 手話 データベース on CiNii).
- Psycholinguistic norming datasets (DGS norms, NGT iconicity, STS pseudosigns) are a reliable but under-mined source of **clean, citation-form, single-signer clips with gloss filenames and per-sign phonological flags**. That is the shape Marionet needs. The same search pattern ("norms", "iconicity ratings", "stimulus materials") should be tried for other languages.
- Licence metadata often conflicts between levels. For the UvA NGT set, the collection DOI says CC BY but the items say CC BY-NC. For 36k SIBI, CC BY and CC BY-NC are listed together. For MIT labels on HF re-uploads, the uploader's choice differs from the original rights holder's. Ingestion should use the most restrictive item-level licence.
- For Libras, the new open sets (Synae with 256 clips, the Pontal toponyms, the Gurupi PDF) are small. Libras still has no large CC-BY citation dictionary beyond what the notes already list.
- No new Tier A lexical source appeared for any language in the Middle East, Africa, South Asia, Southeast Asia (beyond fingerspelling) or Central Asia. Local-language queries for these returned theses, education papers and recognition demos.

### Gaps
- I did not open the LSC TSV contents. The CORA (dataverse.csuc.cat) API returned an Anubis "Making sure you're not a bot!" page, so the column names come only from the DataCite description.
- ProsIn-SL, Corpus LST, CLM-MOCAP and the other ORTOLANG items: DataCite rights fields are empty, and the ORTOLANG JSON and OAI endpoints returned the HTML SPA, so their licences are unverified.
- Osugi DB: the size of the video files, the download route and commercial terms are unknown until the lab is contacted. The 1909/1950s word-list reconstructions are new recordings by contemporary signers, so their rights sit with the university.
- Zenodo record 21090915 (DataBase – Señas Sordo Peruana) returned errors on every retry, so its files were not verified.
- The STS sign–pseudosign `S4` xlsx (13.6 MB) was not opened, so whether it contains phonological feature coding is inferred, not verified.
- The DGS norms stimulus videos come from the norming study. The OSF licence is CC BY 4.0, but I did not check whether the signer's consent covers avatar retargeting.

## Q2. For each find: does it contain citation-form isolated signs or a lexicon (versus continuous or fingerspelling only), and what licence does the original record state?

### Takeaway
Of the new items, five contain **citation-form isolated signs with a lexicon key**: DGS norms (CC BY 4.0), NGT iconicity stimuli (CC BY-NC 4.0 at item level), FlexSign (CC BY-NC-ND 4.0), Synae Libras (CC BY 4.0) and the Osugi JSL DB (credit and prior contact). Two are **phonology spreadsheets without video**: LSC Villaécija (CC BY-SA 4.0) and STS pseudosign xlsx (CC BY-NC 4.0). The rest are fingerspelling-only, continuous, mocap of dialogue, or scraped mirrors.

### Cited Findings
| Find | Isolated citation-form? | Lexicon/phonology table? | Continuous / FS-only? | Licence as stated on the original record | Tier |
|---|---|---|---|---|---|
| DGS norms (OSF mz8j4) | **Yes**: 310 mp4, one sign each, with onset/offset ms | **Yes**: `DGS_norms.csv` columns include `gloss_German`, `gloss_English`, `one_handed`, `two_handed`, `place_of_articulation`, `lexical_class`, `agreement_verb`, `iconicity_*`, `AoA`, `frequency`, `video_sign_onset/offset` ([OSF](https://osf.io/mz8j4/)) | no | "CC-By Attribution 4.0 International" ([OSF API](https://api.osf.io/v2/nodes/mz8j4/?embed=license)); paper also CC BY 4.0 per Crossref ([10.3758/s13428-020-01524-y](https://doi.org/10.3758/s13428-020-01524-y)) | A |
| NGT iconicity stimuli (UvA) | **Yes**: about 1,410 clips (gloss_signer_list_condition.mp4) | metadata CSV + codebook | no | items: "CC BY-NC 4.0"; collection: "Creative Commons Attribution 4.0 International" ([DataCite](https://doi.org/10.21942/uva.c.8301958); [figshare API](https://api.figshare.com/v2/collections/8301958/articles)) | B |
| LSC Villaécija data1935/1936 | no video (the signs cite other LSC resources) | **Yes**: handshape, aperture, location, point of articulation, contact, movement, orientation, non-manuals ([DataCite](https://doi.org/10.34810/data1935)) | no | "Creative Commons Attribution Share Alike 4.0 International" | A |
| FlexSign LSF (NAKALA) | **Yes**: 546 signs, mp4 + gif | 6 TSV | no | "CC-BY-NC-ND-4.0" ([NAKALA](https://api.nakala.fr/datas/10.34847/nkl.afb675g5)) | B |
| Synae Libras (Zenodo) | **Yes**: 256 mp4 | filename = Portuguese gloss only | 27 of 256 are alphabet letters | "cc-by-4.0" ([zenodo 20724652](https://zenodo.org/records/20724652)) | A |
| Osugi JSL DB | **Yes** (streamed video) | written form descriptions (Osaka 1963 reconstruction) | dialect map = 30 words × 94 signers | "無償、但しクレジット表記と事前連絡を条件とする。" ([CiNii](https://cir.nii.ac.jp/crid/2010589441430210177)); site "All Rights Reserved" ([site](https://www.deafstudies.jp/osugi/)) | C |
| Toponímia em Libras | Yes: 8 clips | no | no | "cc-by-sa-4.0" ([zenodo 23285949](https://zenodo.org/records/23285949)) | A |
| AGLAIA LIS/IS | Yes, but inside one compiled video | glossary order | no | "cc-by-4.0" ([zenodo 19844076](https://zenodo.org/records/19844076)) | A |
| Libras-10 | Yes: 10 signs × 10 repetitions | no | no | "cc-by-4.0" ([zenodo 3229958](https://zenodo.org/records/3229958)) | A |
| STS sign–pseudosign xlsx | no (videos on OSF, no licence) | likely (ND/PP matching) | no | "CC BY-NC 4.0" ([ASHA figshare](https://asha.figshare.com/articles/online_resource/Matched_signs_and_pseudosigns_in_STS_Witte_et_al_2025_/29318822)) | B |
| LSE fingerspelling; Achegety-LSPy; LSP vowels; BISINDO letters; 36k SIBI | no | no | **fingerspelling only** | CC BY 4.0 (36k SIBI: CC BY + CC BY-NC both listed) | A (SIBI B) |
| BIM-SSD V1/V2 | words + sentences + alphabet | 4,900 glosses (V2) | mixed | "Creative Commons Attribution Non Commercial No Derivatives 4.0 International"; V2 restricted ([DataCite](https://doi.org/10.5281/zenodo.17573985)) | B/C |
| LSE_eSaude MSSL/OSLWL (HF) | sign-spotting clips | labels | continuous with targets | card "license: mit" (uploader); provenance blank ([HF](https://huggingface.co/datasets/mvazquez/LSE_eSaude_UVIGO_MSSL)) | C |
| ProsIn-SL | no | no | continuous + Perception Neuron mocap | rights field empty ([DataCite](https://doi.org/10.82270/prosin-sl)) | C |
| Tactile STS/NTS; RSL conversations; LST Tunisia; Cuxac COCOON | no | no | continuous | restricted / empty / "CC BY-NC-ND 2.5" | C / B |
| Gurupi dictionary PDF; Sinais que protegem; Manual Enfermagem | illustrations only | yes (print glossary) | — | CC BY 4.0 / CC BY-NC 4.0 / CC BY 4.0 | A / B / A |
| bg MON dictionary (via scraper) | yes (images, original) | yes | — | "Всички права принадлежат на МОН" ([README](https://github.com/tsvm/bg-sign-language)) | C (original) / D (scrape) |
| LSF_data (Éducation nationale videos) | yes: 1,140 webm | filename = French word | — | uploader "mit"; third-party source ([HF](https://huggingface.co/datasets/Langue-des-signes-francaise/LSF_data)) | D (mirror) |

### Inferences
- For Marionet's dictionary pipeline, the most actionable order is: (1) DGS norms, CC BY with onset/offset and place-of-articulation, ready for clip and keypoint retargeting; (2) Synae Libras; (3) the LSC phonology TSV as a phonology crosswalk for the LSC video already in the notes; (4) NGT and FlexSign for non-commercial or reference use only; (5) Osugi JSL after permission.
- ND-licensed lexical videos (FlexSign, Cuxac COCOON, BIM-SSD) are of limited use. Retargeting a signer onto a VRM avatar is very likely a derivative, so these should be treated as reference-only unless permission is granted. This is an inference, not legal advice.

### Gaps
- None of the new video sets document whether **signer consent** extends to commercial avatar animation; I found no consent text in the records.
- For Synae, the clips are filenamed by Portuguese word only; it is not verified whether every file is a single sign rather than a phrase. Filenames such as "Qual é o seu nome" and "Meu nome é" are phrases.

## Q3. Which query terms × APIs returned nothing (documented exhausted avenues)?

### Takeaway
**34 of 129 query strings** returned zero sign-relevant records on all six data APIs: DataCite, Zenodo, OSF SHARE, Figshare, Dataverse and GitHub. These are mostly African, South Asian, Southeast Asian, Caucasian and Central Asian terms, plus Basque, Galician, Albanian, Maltese, Serbian Cyrillic, Czech "znakový jazyk", Slovene and Ukrainian "жестова мова". Several APIs were only partly usable: OpenAlex hit its shared daily budget twice, and Semantic Scholar returned HTTP 429 for 103 of 129 terms.

### Cited Findings
- **Zero sign-relevant hits on DataCite + Zenodo + OSF SHARE + Figshare + Dataverse + GitHub.** Sources: sweep runs against [DataCite](https://api.datacite.org/dois), [Zenodo](https://zenodo.org/api/records), [SHARE](https://share.osf.io/api/v3/index-card-search), [Figshare](https://api.figshare.com/v2/articles/search), Dataverse `/api/search` and the GitHub search API. Terms:
  - Basque, Galician, Afrikaans: eu "zeinu hizkuntza"; gl "lingua de signos"; af gebaretaal.
  - Central and eastern Europe: cs "znakový jazyk"; sl "slovenski znakovni jezik"; sr "знаковни језик"; sq "gjuha e shenjave"; mt "lingwa tas-sinjali"; uk "жестова мова"; be "жэставая мова".
  - Caucasus, Baltic, Hebrew: az "işarə dili"; lt "gestų kalba"; ka "ჟესტების ენა"; hy "ժեստերի լեզու"; he "שפת סימנים" (the definite form "שפת הסימנים" did hit ISL-LEX, already known).
  - Africa: sw "lugha ya ishara"; am "የምልክት ቋንቋ" and "ምልክት ቋንቋ"; zu "ulimi lwezandla"; ha "yaren kurame".
  - Southeast Asia: fil "wikang pasenyas"; my "လက်ဟန်" and "ဆိုင်းဘုတ်ဘာသာ"; km "ភាសាសញ្ញា"; lo "ພາສາມື".
  - South Asia: ur "اشاروں کی زبان"; ne "नेपाली सांकेतिक भाषा"; si "සංඥා භාෂාව"; ta "சைகை மொழி"; te "సంకేత భాష"; ml "ആംഗ്യഭാഷ".
  - Central Asia: uz "ym ishorat tili"; kk "ымдау тілі"; ky "жаңсоо тили".
- **Further zero or no-dataset combinations:**
  - DataCite returned **0 records in total** for 53 strings — [DataCite API](https://api.datacite.org/dois?query=%22zn%C3%A1kov%C3%BD%20jazyk%22):
    - Iberian and Germanic: eu "zeinu hizkuntza"; gl "lingua de signos"; pt "lingua gestual"; de Gebärdenlexikon; sv teckenspråket.
    - Nordic: fi viittomakieli; is táknmál.
    - Central and eastern Europe: cs "znakový jazyk" and "znakového jazyka"; sk "posunkový jazyk"; hu jelnyelvi; hr "znakovnog jezika"; sl "slovenski znakovni jezik"; sr "знаковни језик"; mk "знаковен јазик"; sq "gjuha e shenjave"; mt "lingwa tas-sinjali"; ro "limba semnelor" and "limbajul semnelor"; be "жэставая мова".
    - Caucasus and Baltic: az "işarə dili"; lv "zīmju valoda"; lt "gestų kalba" and "gestų kalbos"; ka; hy.
    - Middle East: ar "لغة الاشارة" (alef-without-hamza spelling); he "שפת סימנים".
    - Africa: sw "lugha ya alama" and "lugha ya ishara"; both am terms; zu; ha.
    - East and Southeast Asia: zh "手语词典"; ko 수어 and 수화; vi "ngôn ngữ ký hiệu" and "ngôn ngữ kí hiệu"; fil "wikang pasenyas"; both my terms; km; lo; mn "дохионы хэл".
    - South Asia: both bn terms; ur; ne; si; ta; te; ml.
    - Central Asia: uz "ym ishorat tili"; kk "ымдау тілі"; ky.
  - DataCite non-zero but with no new data: "ภาษามือ" (34) returned only Thai NRCT thesis records typed as Dataset, such as the Chulalongkorn multimedia Thai SL dictionary thesis [10.14457/cu.the.2008.401](https://doi.org/10.14457/cu.the.2008.401) and the CMU 3D Thai SL dictionary tool thesis [10.14457/cmu.the.2010.271](https://doi.org/10.14457/cmu.the.2010.271), with no files. "işaret dili" (24), "νοηματική γλώσσα" (48), "жестовый язык" (33), "لغة الإشارة" (202) and "imo-ishora tili" (30) returned theses, education papers and Uzbek Zenodo article deposits typed as Dataset, but no sign data.
  - Zenodo matches CJK at the character level: 手语 gives 79,319 hits, 手語 27,760 and 手話 25,846, mostly pottery 3D models and shrine photos. The 10–12 records per term that matched the relevance regex contained no new sign dataset. Korean 수어/수화, Vietnamese, Bengali, Mongolian, Thai and Greek all returned 0 relevant Zenodo records. — [Zenodo API](https://zenodo.org/api/records?q=%E6%89%8B%E8%A9%B1&size=25)
  - Hugging Face dataset-id search returned 0 for: señas, lengua-de-senas, lengua-de-signos, lensegua, gebaerden, gebarden, gebaerdensprache, lingua-dei-segni, gebarentaal, teckensprak, tegnsprog, tegnsprak, viittomakieli, migowy, czech-sign, znakovy, zhestov, ukrainian-sign, isaret, turkish-sign, persian-sign, ethiopian-sign, shouyu, filipino-sign, sinhala-sign, myanmar-sign, khmer-sign, mongolian-sign, kazakh-sign, uzbek-sign, georgian-sign, armenian-sign, azerbaijani-sign, israeli-sign, nzsl, irish-sign, asl-lex, isolated-sign. — [HF API](https://huggingface.co/api/datasets?search=gebarentaal)
  - GitHub total 0 (32 terms): Gebärdensprachkorpus, "Deutschschweizerische Gebärdensprache", gebaretaal, "знаковни језик", "lingwa tas-sinjali", "жэставая мова", "işarə dili", viipekeel, "gestų kalba", "ჟესტების ენა", "ժեստերի լեզու", "lugha ya ishara", both Amharic terms, "ulimi lwezandla", "yaren kurame", "wikang pasenyas", "भारतीय सांकेतिक भाषा", "اشاروں کی زبان", "नेपाली सांकेतिक भाषा", "සංඥා භාෂාව", "சைகை மொழி", "సంకేత భాష", "ആംഗ്യഭാഷ", both Burmese terms, "ភាសាសញ្ញា", "ພາສາມື", "ym ishorat tili", both Kazakh terms, "жаңсоо тили".
  - CLARIN DSpace: [LINDAT](https://lindat.mff.cuni.cz/repository/server/api/discover/search/objects?query=znakov%C3%BD%20jazyk) returned 0 for "znakový jazyk", "znakovni jezik", "język migowy", "posunkový", "tegnsprog" and "jelnyelv"; its English "sign language" hits are all known: CNGT, ECHO, VISIBASE, YouTube-ASL keypoints. CLARIN-PL returned 0 for all local terms. CLARIN.SI and CLARIN-DK REST endpoints returned non-JSON. CLARIN.SI xmlui discover pages for "znakovni", "slovenski znakovni" and "znakovnega jezika" gave no parseable item links; this may be a parsing failure, not a true zero, so it is unverified.
  - CiNii Research `data` endpoint: 手話 24, 日本手話 5, 手話 データセット 2, 手話 コーパス 2, 手話 辞書 0, 手話 単語 4, 手話 データベース 5, 手話 動作 1, 指文字 0. The new items from it are listed in Q1 (A6, G). — [CiNii opensearch](https://cir.nii.ac.jp/opensearch/data?q=%E6%89%8B%E8%A9%B1&format=json)
- **API failures and limits (so these avenues are not exhausted):**
  - OpenAlex returned `429 "Insufficient budget … free daily budget shared by everyone on your network's IP address … $0 remaining; resets at midnight UTC"`, first at about term 35 and again at term 71 after the reset. Terms 1–34 (es, ca, eu, gl, pt, fr, de, it "lingua dei segni") ran, but their results were lost when I killed the stalled process, and per the coordinator's instruction they were not re-run. Terms 35–70 were analysed. Terms 71–129 (uk "жестової мови" onward: be, bg, tr, az, et, lv, lt, ka, hy, ar, fa, he, sw, am, zu, ha, zh, ja, ko, th, vi, id, ms, fil, hi, bn, ur, ne, si, ta, te, ml, my, km, lo, mn, uz, kk, ky) were **not run on OpenAlex**. — [OpenAlex](https://api.openalex.org/works?search=gebarentaal)
  - Semantic Scholar unauthenticated search returned HTTP 429 for 103 of 129 terms, even after a retry with 4–10 s back-off. — [S2 API](https://api.semanticscholar.org/graph/v1/paper/search?query=lengua%20de%20se%C3%B1as)
  - Crossref completed all 129 terms (top 100 by relevance, bag-of-words). The select field `language` is invalid there and caused HTTP 400 until I removed it.
  - Zenodo anonymous search rejects `size=100` with HTTP 400; I used 25 × up to 8 pages.
  - Figshare rejected 2-character CJK terms: "Invalid search_for 手语. Expected length to be at least 3 characters."
  - Dataverse: dataverse.no returned HTTP 403 for 28 terms; dataverse.csuc.cat (CORA) returned an Anubis bot-check page; repositoriodedados.unifesp.br returned HTTP 401. Harvard, DataverseNL, Borealis, Recherche Data Gouv, e-cienciaDatos, INRAE and DaRUS worked, but gave no new sign data beyond DANS NGT L2-acquisition sets.
  - The ORTOLANG API and OAI endpoint returned the HTML SPA, not JSON or XML.
  - KCI (Korea), DataON (Korea), CNKI (China) and data.gov.in were not queried: they require keys or are closed.

#### Per-term × API hit counts
Key: "total/rel" = total records returned / records whose title or description matches a multilingual sign-language regex. SHARE = records returned. Figshare and Dataverse = relevant records. Crossref = relevant titles in the top 100. OpenAlex = "count/relevant titles in top 200"; "run (lost)" = executed but results not persisted; "not run" = budget exhausted. S2 = relevant titles, or 429.

| lang | term | DataCite total/rel | Zenodo total/rel | OSF-SHARE | Figshare rel | Dataverse rel | GitHub total/rel | Crossref rel(top100) | OpenAlex | S2 rel |
|---|---|---|---|---|---|---|---|---|---|---|
| es | "lengua de señas" | 308/294 | 54/50 | 8 | 2 | 0 | 1101/57 | 100 | run (lost) | 429 |
| es | "lenguaje de señas" | 223/200 | 18/17 | 0 | 1 | 0 | 1183/56 | 92 | run (lost) | 429 |
| es | "lengua de signos" | 99/93 | 28/26 | 0 | 0 | 0 | 146/74 | 62 | run (lost) | 429 |
| es | "lenguaje de signos" | 15/13 | 5/5 | 0 | 0 | 0 | 95/68 | 37 | run (lost) | 83 |
| es | "lengua de señas mexicana" | 36/35 | 15/12 | 1 | 1 | 0 | 192/61 | 84 | run (lost) | 429 |
| es | "lengua de señas colombiana" | 37/35 | 3/3 | 1 | 0 | 0 | 180/61 | 96 | run (lost) | 429 |
| es | "lengua de señas argentina" | 12/12 | 3/3 | 0 | 0 | 0 | 58/33 | 97 | run (lost) | 90 |
| es | "lengua de señas chilena" | 6/6 | 4/3 | 0 | 0 | 0 | 52/29 | 99 | run (lost) | 429 |
| es | "lengua de señas peruana" | 33/33 | 3/3 | 0 | 2 | 0 | 91/41 | 52 | run (lost) | 429 |
| es | "lengua de signos española" | 24/24 | 9/8 | 0 | 0 | 0 | 66/45 | 62 | run (lost) | 429 |
| es | "señas" diccionario | 7/7 | 1288/50 | 0 | 9 | 13 | 456/54 | 34 | run (lost) | 429 |
| ca | "llengua de signes" | 4/4 | 0/0 | 0 | 0 | 0 | 6/5 | 33 | run (lost) | 429 |
| eu | "zeinu hizkuntza" | 0/0 | 0/0 | 0 | 0 | 0 | 1/0 | 0 | run (lost) | 429 |
| gl | "lingua de signos" | 0/0 | 0/0 | 0 | 0 | 0 | 1/0 | 17 | run (lost) | 429 |
| pt | "língua de sinais" | 539/472 | 61/58 | 8 | 4 | 0 | 139/55 | 88 | run (lost) | 100 |
| pt | "lingua de sinais" | 4/4 | 30/30 | 0 | 4 | 0 | 149/57 | 69 | run (lost) | 100 |
| pt | "língua brasileira de sinais" | 377/362 | 104/95 | 8 | 2 | 0 | 842/61 | 95 | run (lost) | 429 |
| pt | Libras sinais | 488/466 | 2198/189 | 13 | 2 | 11 | 1343/72 | 98 | run (lost) | 429 |
| pt | "língua gestual portuguesa" | 98/56 | 3/1 | 0 | 0 | 0 | 28/6 | 14 | run (lost) | 429 |
| pt | "lingua gestual" | 0/0 | 2/0 | 0 | 0 | 0 | 45/9 | 2 | run (lost) | 429 |
| fr | "langue des signes" | 517/439 | 4/4 | 3 | 1 | 2 | 363/72 | 88 | run (lost) | 100 |
| fr | "langue des signes française" | 153/130 | 2/2 | 0 | 0 | 2 | 95/68 | 80 | run (lost) | 100 |
| fr | "langue des signes de Belgique" | 1/1 | 0/0 | 0 | 0 | 0 | 5/3 | 81 | run (lost) | 97 |
| fr | "langue des signes québécoise" | 6/6 | 0/0 | 0 | 1 | 2 | 9/2 | 92 | run (lost) | 429 |
| fr | LSFB | 22/12 | 5/2 | 3 | 0 | 0 | 109/17 | 17 | run (lost) | 49 |
| fr | "langue des signes" lexique | 8/8 | 229/17 | 2 | 6 | 4 | 2/1 | 81 | run (lost) | 429 |
| de | Gebärdensprache | 20462/480 | 52/44 | 5 | 4 | 0 | 86/38 | 59 | run (lost) | 429 |
| de | Gebärden | 159/137 | 6/6 | 0 | 0 | 0 | 28/17 | 52 | run (lost) | 77 |
| de | Gebärdensprachkorpus | 1/1 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | run (lost) | 429 |
| de | "Österreichische Gebärdensprache" | 10/9 | 0/0 | 0 | 0 | 0 | 1/0 | 59 | run (lost) | 429 |
| de | "Deutschschweizerische Gebärdensprache" | 29/29 | 6/6 | 0 | 1 | 0 | 0/0 | 57 | run (lost) | 97 |
| de | Gebärdenlexikon | 0/0 | 0/0 | 0 | 0 | 0 | 1/1 | 0 | run (lost) | 429 |
| it | "lingua dei segni" | 47/41 | 2/2 | 1 | 0 | 0 | 44/26 | 21 | run (lost) | 98 |
| it | "lingua dei segni italiana" | 16/15 | 1/1 | 1 | 0 | 0 | 26/15 | 22 | run (lost) | 85 |
| it | "lingua italiana dei segni" | 8/6 | 0/0 | 0 | 0 | 0 | 7/7 | 22 | 13019/118 | 429 |
| nl | gebarentaal | 20/20 | 0/0 | 1 | 3 | 7 | 47/34 | 15 | 868/171 | 99 |
| nl | "Vlaamse Gebarentaal" | 1/1 | 0/0 | 0 | 0 | 0 | 5/3 | 14 | 225/151 | 429 |
| nl | "Nederlandse Gebarentaal" | 14/14 | 0/0 | 0 | 3 | 7 | 17/14 | 12 | 582/91 | 429 |
| af | gebaretaal | 2/0 | 1/0 | 0 | 0 | 0 | 0/0 | 5 | 96/20 | 429 |
| sv | teckenspråk | 16/16 | 1/1 | 0 | 2 | 0 | 13/5 | 1 | 773/148 | 429 |
| sv | teckenspråket | 0/0 | 0/0 | 0 | 0 | 0 | 2/1 | 1 | 213/101 | 429 |
| da | tegnsprog | 5/5 | 0/0 | 0 | 0 | 0 | 8/5 | 4 | 225/80 | 14 |
| no | tegnspråk | 2/2 | 0/0 | 3 | 0 | 0 | 14/4 | 6 | 311/63 | 429 |
| fi | viittomakieli | 0/0 | 0/0 | 0 | 0 | 0 | 3/2 | 0 | 312/112 | 429 |
| fi | viittomakielen | 1/1 | 0/0 | 0 | 0 | 0 | 4/1 | 9 | 472/145 | 429 |
| is | táknmál | 0/0 | 0/0 | 0 | 0 | 0 | 3/1 | 2 | 74/19 | 429 |
| pl | "język migowy" | 6/5 | 0/0 | 0 | 0 | 0 | 17/4 | 14 | 518/77 | 429 |
| pl | "języka migowego" | 3/3 | 1/0 | 0 | 0 | 0 | 54/29 | 34 | 739/92 | 429 |
| pl | "polski język migowy" | 4/3 | 0/0 | 0 | 0 | 0 | 7/1 | 5 | 366/66 | 429 |
| cs | "znakový jazyk" | 0/0 | 0/0 | 0 | 0 | 0 | 1/0 | 1 | 311/60 | 429 |
| cs | "znakového jazyka" | 0/0 | 0/0 | 0 | 0 | 0 | 4/3 | 4 | 351/90 | 429 |
| sk | "posunkový jazyk" | 0/0 | 0/0 | 0 | 0 | 0 | 2/1 | 1 | 20/5 | 429 |
| hu | jelnyelv | 3/1 | 1/0 | 0 | 0 | 0 | 4/3 | 7 | 243/23 | 429 |
| hu | jelnyelvi | 0/0 | 0/0 | 0 | 0 | 0 | 1/1 | 7 | 284/22 | 10 |
| hr | "znakovni jezik" | 2/0 | 1/0 | 0 | 0 | 0 | 6/5 | 4 | 825/76 | 429 |
| hr | "znakovnog jezika" | 0/0 | 0/0 | 0 | 0 | 0 | 17/11 | 1 | 321/56 | 25 |
| sl | "slovenski znakovni jezik" | 0/0 | 0/0 | 0 | 0 | 0 | 1/0 | 1 | 284/34 | 13 |
| sr | "знаковни језик" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | 86/13 | 1 |
| mk | "знаковен јазик" | 0/0 | 0/0 | 0 | 0 | 0 | 2/1 | 0 | 27/4 | 429 |
| sq | "gjuha e shenjave" | 0/0 | 0/0 | 0 | 0 | 0 | 1/0 | 0 | 88/3 | 429 |
| mt | "lingwa tas-sinjali" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 1 | 29/4 | 429 |
| ro | "limbaj mimico-gestual" | 1/1 | 0/0 | 0 | 0 | 0 | 2/0 | 12 | 45/5 | 1 |
| ro | "limba semnelor" | 0/0 | 0/0 | 0 | 0 | 0 | 7/5 | 4 | 476/14 | 429 |
| ro | "limbajul semnelor" | 0/0 | 0/0 | 0 | 0 | 0 | 15/10 | 9 | 328/9 | 429 |
| el | "νοηματική γλώσσα" | 48/35 | 0/0 | 0 | 0 | 0 | 15/5 | 3 | 688/48 | 429 |
| el | "Ελληνική Νοηματική" | 24/20 | 0/0 | 0 | 0 | 0 | 5/2 | 3 | 651/43 | 429 |
| ru | "жестовый язык" | 33/28 | 5/4 | 0 | 0 | 0 | 37/17 | 12 | 489/117 | 429 |
| ru | "жестового языка" | 37/34 | 6/4 | 0 | 0 | 0 | 158/51 | 29 | 899/159 | 55 |
| ru | "русский жестовый язык" | 18/18 | 1/1 | 0 | 0 | 0 | 13/6 | 8 | 237/92 | 429 |
| uk | "жестова мова" | 2/0 | 1/0 | 0 | 0 | 0 | 2/0 | 1 | 419/80 | 429 |
| uk | "жестової мови" | 12/10 | 2/1 | 0 | 2 | 0 | 4/1 | 24 | 429 | 429 |
| be | "жэставая мова" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | 429 | 0 |
| bg | "жестов език" | 2/0 | 1/0 | 0 | 0 | 0 | 1/1 | 17 | not run | 429 |
| tr | "işaret dili" | 24/20 | 8/6 | 0 | 1 | 0 | 262/57 | 76 | not run | 429 |
| tr | "Türk İşaret Dili" | 9/9 | 2/2 | 0 | 1 | 0 | 100/52 | 2 | not run | 62 |
| az | "işarə dili" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 3 | not run | 429 |
| et | viipekeel | 6/6 | 2/2 | 0 | 0 | 0 | 0/0 | 1 | not run | 429 |
| et | viipekeele | 17/17 | 6/6 | 0 | 0 | 0 | 1/1 | 2 | not run | 429 |
| lv | "zīmju valoda" | 0/0 | 0/0 | 0 | 0 | 0 | 4/2 | 5 | not run | 8 |
| lt | "gestų kalba" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 1 | not run | 429 |
| lt | "gestų kalbos" | 0/0 | 0/0 | 0 | 0 | 0 | 1/1 | 1 | not run | 429 |
| ka | "ჟესტების ენა" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| hy | "ժեստերի լեզու" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| ar | "لغة الإشارة" | 202/186 | 0/0 | 0 | 1 | 0 | 122/54 | 74 | not run | 429 |
| ar | "لغة الاشارة" | 0/0 | 0/0 | 0 | 0 | 0 | 14/12 | 26 | not run | 82 |
| fa | "زبان اشاره" | 3/0 | 1/0 | 0 | 0 | 0 | 6/1 | 2 | not run | 13 |
| he | "שפת הסימנים" | 1/1 | 0/0 | 1 | 0 | 0 | 7/4 | 0 | not run | 429 |
| he | "שפת סימנים" | 0/0 | 0/0 | 0 | 0 | 0 | 1/0 | 1 | not run | 429 |
| sw | "lugha ya alama" | 0/0 | 0/0 | 0 | 0 | 0 | 1/1 | 2 | not run | 429 |
| sw | "lugha ya ishara" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 4 | not run | 429 |
| am | "የምልክት ቋንቋ" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| am | "ምልክት ቋንቋ" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| zu | "ulimi lwezandla" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| ha | "yaren kurame" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 2 | not run | 429 |
| zh | 手语 | 1476/20 | 79319/10 | 22 | err | 1 | 560715/2 | 13 | not run | 429 |
| zh | 手語 | 2672/59 | 27760/10 | 52 | err | 2 | 123331/3 | 12 | not run | 429 |
| zh | "手语词典" | 0/0 | 0/0 | 0 | 0 | 0 | 18/10 | 0 | not run | 429 |
| ja | 手話 | 1442/52 | 25846/12 | 21 | err | 1 | 66603/4 | 42 | not run | 429 |
| ko | 수어 | 0/0 | 0/0 | 0 | err | 0 | 802/66 | 42 | not run | 29 |
| ko | 수화 | 0/0 | 0/0 | 0 | err | 0 | 316/66 | 16 | not run | 429 |
| th | ภาษามือ | 34/30 | 0/0 | 0 | 0 | 0 | 8/3 | 0 | not run | 429 |
| vi | "ngôn ngữ ký hiệu" | 0/0 | 0/0 | 0 | 0 | 0 | 360/56 | 12 | not run | 429 |
| vi | "ngôn ngữ kí hiệu" | 0/0 | 0/0 | 0 | 0 | 0 | 33/20 | 12 | not run | 429 |
| id | "bahasa isyarat" | 46/44 | 17/16 | 4 | 0 | 0 | 996/71 | 100 | not run | 429 |
| id | BISINDO | 51/50 | 13/11 | 2 | 2 | 0 | 841/87 | 100 | not run | 429 |
| id | "Sistem Isyarat Bahasa Indonesia" | 8/8 | 3/3 | 0 | 0 | 0 | 112/83 | 100 | not run | 429 |
| ms | "bahasa isyarat malaysia" | 13/13 | 6/6 | 0 | 0 | 0 | 44/35 | 93 | not run | 429 |
| fil | "wikang pasenyas" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| fil | "Filipino Sign Language" | 35/33 | 11/9 | 1 | 0 | 0 | 252/77 | 92 | not run | 429 |
| hi | "सांकेतिक भाषा" | 7/5 | 3/2 | 0 | 0 | 0 | 1/0 | 4 | not run | 429 |
| hi | "भारतीय सांकेतिक भाषा" | 2/2 | 1/1 | 0 | 0 | 0 | 0/0 | 3 | not run | 429 |
| bn | "ইশারা ভাষা" | 0/0 | 0/0 | 0 | 0 | 0 | 2/1 | 1 | not run | 429 |
| bn | "বাংলা ইশারা ভাষা" | 0/0 | 0/0 | 0 | 0 | 0 | 2/1 | 1 | not run | 429 |
| ur | "اشاروں کی زبان" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 2 | not run | 429 |
| ne | "नेपाली सांकेतिक भाषा" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 2 | not run | 429 |
| si | "සංඥා භාෂාව" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 1 | not run | 429 |
| ta | "சைகை மொழி" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| te | "సంకేత భాష" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| ml | "ആംഗ്യഭാഷ" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| my | "လက်ဟန်" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| my | "ဆိုင်းဘုတ်ဘာသာ" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| km | "ភាសាសញ្ញា" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| lo | "ພາສາມື" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| mn | "дохионы хэл" | 0/0 | 0/0 | 0 | 0 | 0 | 4/1 | 1 | not run | 429 |
| uz | "imo-ishora tili" | 30/24 | 18/13 | 0 | 0 | 0 | 6/5 | 7 | not run | 429 |
| uz | "ym ishorat tili" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |
| kk | "ым тілі" | 2/2 | 1/1 | 0 | 0 | 0 | 0/0 | 3 | not run | 429 |
| kk | "ымдау тілі" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 2 | not run | 429 |
| ky | "жаңсоо тили" | 0/0 | 0/0 | 0 | 0 | 0 | 0/0 | 0 | not run | 429 |

(Counts come from the sweep's raw API JSON for each endpoint: DataCite `api.datacite.org/dois?query=…`, Zenodo `zenodo.org/api/records?q=…`, SHARE `share.osf.io/api/v3/index-card-search?cardSearchText=…`, Figshare `api.figshare.com/v2/articles/search`, Dataverse `/api/search?q=…&type=dataset`, GitHub `search/repositories?q=<term> in:name,description,readme`, Crossref `api.crossref.org/works?query.bibliographic=…`, OpenAlex `api.openalex.org/works?search=…`, S2 `api.semanticscholar.org/graph/v1/paper/search`. Large "total" values for Gebärdensprache (20,462), 手语 and 手話 are artefacts of each engine's tokenisation; the "rel" column is what matters.)

### Inferences
- For the 34 all-zero strings, the local-language term is not used in research-data metadata. Any dataset for those languages is labelled in English, or in a national language other than the one queried (Swahili and Amharic resources, for example, are described in English). The English-language regional notes already cover those, so these avenues can be treated as exhausted for **research-data repositories**, though not for national dictionary websites.
- The large GitHub counts for Spanish, Portuguese, Indonesian, Korean and Vietnamese terms (hundreds of repos each) are almost entirely student recognition demos with self-collected, unlicensed data. After relevance and data filtering, only a handful are worth a licence check (section F above).
- The OpenAlex and S2 shortfalls matter mostly for article-level leads in zh, ja, ko, ar, tr, hi and id. Crossref, CiNii and DataCite partly cover these, so I expect few dataset-bearing papers were missed. That is an inference.

### Gaps
- OpenAlex terms 71–129 need a run with an API key, or after the shared-IP budget resets, preferably with `filter=type:dataset` plus local-language titles. The results for terms 1–34 should also be regenerated, because they were executed but not persisted.
- Semantic Scholar needs an API key; 103 of 129 terms got only 429s.
- Not reachable or not attempted: CLARIN.SI and CLARIN-DK REST (non-JSON), the CORA API (bot check), ORTOLANG JSON/OAI, dataverse.no (403), UNIFESP Dataverse (401), and KCI, DataON, CNKI and data.gov.in (key required or closed). Korean results therefore rest on Crossref, GitHub and HF only; Chinese results rest on DataCite (ScienceDB) and GitHub.
- The relevance regex is multilingual but not exhaustive; for example, it lacks Georgian or Armenian sign-specific stems beyond the query strings. A record titled only in a script and wording the regex does not cover could have been dropped.

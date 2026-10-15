# Sign-language dictionary sources: Sub-Saharan Africa (Marionet ingest survey, 2026-10-14)

Scope: per-language lexical databases, phonology coding, notation dumps, isolated citation-form videos, pose/mocap, for the ~45 SSA sign languages in the brief. Tier gate: A = CC BY / BY-SA / CC0 / open dump; B = NC / research-only; C = register / contract / permission; D = skip (no stated license, proprietary, YouTube-hosted footage, SpreadTheSign, scraped mirrors).

Method note: licenses were read on the original page, or from the repository's own API metadata (Zenodo, Kaggle, Mendeley Data, figshare, Hugging Face, DataCite, MediaWiki), on 2026-10-14. "[verified]" means read on the source page or API by me today. "[unverified]" means it came from a secondary source or I could not read it. Small files (≤ 1 MB: SPML dumps, a 24 KB PDF, a 536 KB CSV) were downloaded to count entries. Nothing larger than 20 MB was downloaded. The session's WebSearch budget ran out midway (200-call cap). After that, discovery used only repository APIs (Zenodo, DataCite, Kaggle, Mendeley, HF, GitHub) and direct page fetches, so some leads stay open (see Gaps).

ISO 639-3 codes were checked against the official SIL code table ([iso-639-3.tab](https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3.tab)). Codes present: ads, bog (Bamako SL = Malian/LaSiMa), cds (Chadian), eth, gse, gus (ref. name "Guinean Sign Language"), hsl, lgs (Guinea-Bissau), lsb (Burundian), lsw (Seychelles), lsy (Mauritian), lws (Malawian), mzc (Madagascar), mzy (Mozambican), nbs, nsi (Nigerian, confirmed), rsn (Rwandan), sfs, sgx (Sierra Leone), tsy (Tebul), tza, ugn, xki, zib, zsl. **No ISO 639-3 code** for Bura SL, Cameroon SL / Extreme North Cameroon SL, Senegalese, Ivorian (LSCI), Burkinabè, Liberian, Beninese, Togolese, Congolese/DRC, Gabonese, Angolan, Botswana, Lesotho, Eswatini, Cape Verdean, Eritrean, Somali, Sudanese or South Sudanese SL. Several have Hamburg Compendium or Glottolog IDs instead.

---

## Q1. Per language: which dictionaries, lexicons and datasets exist, what is the verified license and tier, and what is the recommended first ingest?

### Takeaway
Only a handful of SSA sign languages have anything Tier A that holds **citation-form sign videos**:
- **Ghanaian SL:** Leiden/Zenodo GSL Lexicon. More than 1,200 signs, one signer, per-sign MP4 plus OpenPose. CC BY 4.0.
- **Kenyan SL:** eKitabu KSL Video Dataset on Kaggle. CC0, but only about 30 glosses, with 15 signers × 5 repetitions.
- **Malagasy SL:** Wikisigns. 1,314 signs, CC BY-SA 4.0, but the videos are YouTube embeds, so the files have to be obtained from the maintainer.
- **Ivorian LSCI:** Wikisign. 439 signs, CC BY-SA, but the media files sampled return 404.

Tier A **notation** exists as small SignPuddle SignWriting dumps for South Africa (sgn77, 157 entries), Kenya (sgn79, 17), Ethiopia (sgn18, 143), Malawi (sgn128, 49) and Nigeria (sgn32, 11). Tier A **pose-only** isolated-sign sets exist for Nigeria (NSL-212, CC0), Rwanda (22 signs, CC BY 4.0) and Ghana (OpenPose inside the GSL lexicon).

The biggest structured lexicons with **phonological fields** (handshape and location per sign) are SignWiki Namibia (~2.0–2.1k signs) and SignWiki Tanzania (~2.2k). They are **Tier B**: the terms of service say the CC license is non-commercial, and the videos are YouTube embeds. For most other countries only print or proprietary dictionaries exist.

### Cited Findings

#### Quick view: Tier A sources (ingestable now)
- GSL Lexicon (gse): Zenodo 10.5281/zenodo.4533753, CC BY 4.0, 1.155 GB. "contains over 1200 signs from Ghanaian Sign Language and their OpenPose data… Each folder contains the equivalent sign as well as the per frame output of OpenPose" — [Zenodo API](https://zenodo.org/api/records/4533753) / [record](https://zenodo.org/records/4533753) [verified]
- eKitabu KSL Video Dataset (xki): Kaggle, "CC0: Public Domain", 14.67 GB — [Kaggle](https://www.kaggle.com/datasets/ekitabu/ksl-video-dataset) [verified via Kaggle API]
- SignPuddle SPML dumps sgn77 / sgn79 / sgn18 / sgn128 / sgn32: CC BY-SA 3.0 (SignWriting site-wide statement) — [signbank.org/signpuddle2.0](https://www.signbank.org/signpuddle2.0/), [signwriting.org](https://www.signwriting.org/) [verified]
- NSL-212 Landmark Benchmark (nsi): Kaggle, CC0, 291 MB, 212 lexical classes, landmarks only — [Kaggle](https://www.kaggle.com/datasets/adelekeadeniyan/nsl-212-benchmark-dataset) [verified]
- Kinyarwanda SL keypoints (rsn): Mendeley Data, CC BY 4.0, 312 MB, 22 signs — [Mendeley](https://data.mendeley.com/datasets/p6zc5g9bdy/1) [verified]
- Wikisigns TT Malagasy (mzc): 1,314 signs, CC BY-SA 4.0, videos on YouTube — [Wikisigns](http://www.wikisigns.org/list/madagascar/malagasy) [verified]
- SignTalk-GSL family (gse): Kaggle, CC BY 4.0. Mostly sentence or phrase videos, 23 to 117 GB — [Kaggle](https://www.kaggle.com/datasets/responsibleailab/signtalk-ghana) [verified]

#### South Africa: South African Sign Language (sfs)
- **SignPuddle "Dictionary South Africa", puddle sgn77**
  - Type: notation (SignWriting, FSW strings in SPML).
  - Size: 157 entries, 156 with FSW, 154 with a text gloss (e.g. Disturb, French, Happen, Arrive, Communicate). 37,039 bytes; Last-Modified 29 Jul 2025.
  - URL: `https://www.signbank.org/signpuddle2.0/data/spml/sgn77.spml`. Puddle ID 77 is listed as "Dictionary South Africa" — [SignPuddle 2.0 index](https://www.signbank.org/signpuddle2.0/) [verified: HEAD + parse of the dump].
  - License (site-wide, verbatim): "All images and content on this web site and all images and content in publications on or about or in some way related to Sutton SignWriting… are free to use because they are licensed under the free internet standard: Creative Commons Attribution-ShareAlike 3.0 Unported License" — [signwriting.org](https://www.signwriting.org/) [verified]. The SPML header carries no per-file license element [verified by reading the header].
  - SPDX CC-BY-SA-3.0; Tier A; access is a direct download; commercial_ok yes (share-alike); video n/a; disk 37 KB.
  - Next action: ingest now as the SASL notation seed.
- **UFS "Variation in South African Sign Language Place Names"** (Loth, Bornman, Sibanda, Siyavoshi et al.)
  - DOI 10.38140/ufs.23741892.v2. Files: a CSV (535,964 B) and a data-dictionary DOCX (17 KB).
  - License in figshare metadata: "CC BY-NC-SA 4.0" — [figshare API](https://api.figshare.com/v2/articles/23741892) / [DOI](https://doi.org/10.38140/ufs.23741892.v2) [verified].
  - Type: phonology plus sociolinguistic metadata. 794 rows covering 67 place-name sign variants (e.g. "Bloemfontein 01", "Cape Town 07"). Each variant has a coded phonological "ANNOTATION" string (e.g. `#1,{0,?1,*1,!11,[L,^3,~15,&1,*2,!0,...`) and a "VIDEO Label" pointing to the Omeka S archive at [pokello.ufs.ac.za](https://pokello.ufs.ac.za/s/sasl/page/welcome), which returns HTTP 200 [verified by downloading the 536 KB CSV].
  - Tier B; commercial_ok no; video_redistrib_ok unverified (the Omeka video terms were not read).
  - Citation: Loth, C.-R. et al. (2023) *Variation in South African Sign Language Place Names*. University of the Free State. Dataset.
  - Next action: use the coding scheme (data dictionary) as a phonology reference; ask UFS whether the place-name videos can be relicensed.
- **Zenodo 4126938, "The newly developed signs in SASL for medical terms regarding diabetes"** (Chininthorn)
  - Type: one JPG (923,705 B) showing 11 signs; CC BY 4.0. The glossary video is on YouTube, which is Tier D — [Zenodo API](https://zenodo.org/api/records/4126938) [verified].
  - Tier A for the image only; very low value.
- **Zenodo 4765911, "Thesis summary in South African Sign Language"**: a single 351 MB MP4, CC BY 4.0. Continuous signing, not lexical — [Zenodo API](https://zenodo.org/api/records/4765911) [verified]. Dead end for lexicon purposes.
- **NID SASL Video Dictionary** (National Institute for the Deaf, Worcester): "Our SASL Video Dictionary contains hundreds of English words… thousands of SASL sign videos. For just R400 per year…" — [nid.org.za/resources](https://nid.org.za/resources/) [verified]. Proprietary subscription: Tier C/D, commercial_ok no.
  - **LearnSASL**, NID's dictionary front end, holds two lists: community signs, and "signs approved by the National Language Board for SASL of the Pan South African Language Board". No license is stated — [learnsasl.com](https://www.learnsasl.com/) [verified]. Tier D, or C by contract with NID.
- **Real SASL**: "© 2013-2025 Real SASL. All Rights Reserved." — [realsasl.com](https://www.realsasl.com/) [verified]. Tier D (C if permission is obtained).
- **mySASL / Fabulous-SASL**: "contains more than 1500 videos of the signs taught in the Rhema Church sign language course"; the GitHub repo has no license — [GitHub](https://github.com/vbookshelf/Fabulous-SASL), [mysasl.com](https://mysasl.com/) [verified]. Tier D (contact the owner for C).
- **Maswao (DSFSI, University of Pretoria)**: a SASL corpus built from YouTube interpreter footage. "the original video clips are **not** redistributed. Instead, we provide the corresponding YouTube video identifiers"; the repo has no license — [GitHub](https://github.com/dsfsi/maswo-south-african-sign-language-dataset) [verified]. Tier D (YouTube, continuous).
- **ELOM (4&5) in SASL dataset** (Manchester/Wits): CC BY-NC 4.0, 273 KB of quantitative child-assessment scores. Not lexical — [DataCite / figshare](https://figshare.manchester.ac.uk/articles/dataset/Early_Learning_Outcome_Measure_ELOM_4_5_in_South_African_Sign_Language_-_Dataset/28622990/1) [verified]. Dead end.
- **Print dictionaries** (Tier D): Penn et al. 1992–94 *Dictionary of Southern African Signs* (HSRC, 5 vols); Nieder-Heitmann 1980 — [africansignlanguages.org list](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified].
  - The "South African SL 2" link (signgenius.com/download.shtml) returns HTTP 521 [verified]: dead.
- Not found: Wits/Stellenbosch/UWC SASL Signbank, an "SASL corpus" release, or an openly licensed UWC SASL dataset. The Hamburg Compendium language index has **no SASL entry** — [Compendium languages](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html) [verified].

#### Kenya: Kenyan Sign Language (xki)
- **eKitabu "Kenyan Sign Language (KSL) Video Dataset"**
  - Kaggle `ekitabu/ksl-video-dataset`. License "CC0: Public Domain"; 14,666,958,180 bytes; description "A comprehensive video dataset of Kenyan Sign Language signs performed by multiple signers" — [Kaggle](https://www.kaggle.com/datasets/ekitabu/ksl-video-dataset) [verified via Kaggle API].
  - File listing: 2,239 files in 30 gloss folders plus README.md and splits_info.csv.
    - 15 lexical folders: Agreement, Apple, Colour, Friend, Gift, Market, Monday, Picture, Proud, Sweater, Teach, Tomatoes, Tortoise, Twin, Ugali.
    - 15 folders named No_9, No_17, No_22, No_35, No_48, No_54, No_66, No_73, No_89, No_91, No_100, No_125, No_268, No_388, No_444. These are probably numerals [inference].
    - Files are `Signer_01…15_1…5.mov`, i.e. 15 signers × 5 repetitions [verified via the Kaggle file-list API].
  - Type: isolated-video. SPDX CC0-1.0; Tier A; commercial_ok yes; video_redistrib_ok yes; disk ≈ 14.7 GB.
  - Identical copies: `ekitabu/kenyan-sign-language-videos` (eKitabu) and `laurettekazenga/ksl-video-dataset` (a third-party mirror, Tier D; use the eKitabu original) [verified].
  - The DataCite DOI 10.34740/kaggle/dsv/14808252 (creator "eKitabu LLC") now resolves to a 404 — [DataCite](https://api.datacite.org/dois/10.34740/kaggle/dsv/14808252) [verified].
  - Next action: **first KSL ingest** (citation-form clips from multiple signers).
- **Maseno University "KSL Word Based Pose Dataset"**
  - Zenodo 10.5281/zenodo.14974973. Metadata license cc-by-4.0, but `access_right: restricted` and no public files — [Zenodo API](https://zenodo.org/api/records/14974973) [verified].
  - Contents per the Data in Brief article (60:111502; article CC BY): stickman MP4 plus MediaPipe x,y,z `.npy`, 685 participants. The video count is stated inconsistently as "20,000" and "around 30000" — [PMC11999445](https://pmc.ncbi.nlm.nih.gov/articles/PMC11999445/) [verified].
  - Type: pose (anonymized). Tier C now (request access), Tier A once granted; commercial_ok yes if granted (CC BY); there are no raw videos.
  - Next action: request access on Zenodo.
- **AI4KSL project corpus** (Wanzare, Okutoyi, Kang'ahi, Ayere): "14,000 English sentences… 20,000 signed KSL videos… 10,000 split and segmented KSL videos… 4,000 words transcribed into five articulatory parameters using the HamNoSys system". No host or data license was found — [arXiv 2410.18295](https://arxiv.org/abs/2410.18295) [verified abstract; license unverified].
  - Type: notation (HamNoSys) plus video. Tier C (contact Maseno). This is potentially the **only SSA HamNoSys lexicon**.
- **KSL Dictionary** (ksldictionary.com / MSTADI, Kenneth Smith Gathuru): "8926 signs and phrases"; citation form plus a description of the sign form; licence "information not available" — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/kenyansldictionary.html) [verified]. The site footer reads "Copyright © 2015 - Built by Kenneth Smith Gathuru at mstadi.com" — [ksldictionary.com](https://www.ksldictionary.com/) [verified].
  - Tier D, or C with permission. It is the largest KSL lexicon, so it is worth contacting the owner.
- **SignPuddle "Dictionary Kenya", sgn79**: 17 entries, all glossed. They form one story sentence ("I, school, go, one, day, see, people, waiting, bus…"). 4,160 B, Last-Modified 2015 — [dump](https://www.signbank.org/signpuddle2.0/data/spml/sgn79.spml) [verified]. CC BY-SA 3.0, Tier A, trivial size.
- **Wikisigns Kenyan Sign Language**: 72 signs per the [Wikisigns statistics](http://www.wikisigns.org/statistics) page, under a CC BY-SA 4.0 footer [verified]. The list URL could not be located (guessed paths returned 404). Videos are presumably YouTube embeds like the rest of Wikisigns [inference]. Tier A license with Tier D delivery.
- **Zindi "Kenyan Sign Language Classification Challenge"** (2021–22)
  - Data: Images.zip (1.1 GB). Classes: 9 or 10 (the page is inconsistent); examples include Church, Enough/Satisfied, Friend. "The data was collected by 800 taskers from Kenya, Mexico and India" — [Zindi data](https://zindi.world/competitions/kenyan-sign-language-classification-challenge/data) [verified].
  - Rules, verbatim: "You are allowed to access, use and share competition data for any commercial,. non-commercial, research or education purposes… under a CC-BY SA 4.0 license." — [Zindi rules](https://zindi.world/competitions/kenyan-sign-language-classification-challenge/rules) [verified].
  - Type: still images of word signs (not fingerspelling, not video). SPDX CC-BY-SA-4.0; Tier A; low value, and the signers are non-native crowd-workers [inference].
  - Re-uploads with "Unknown" or no license, e.g. HF `ArtemGu/0_Kenyan_Sign_Language_Classification`, Kaggle `yonaschanie/kslc-dataset` and `mikemollel/kenyasign…` — [HF](https://huggingface.co/datasets/ArtemGu/0_Kenyan_Sign_Language_Classification) [verified]. Tier D mirrors.
- **Small Kaggle KSL keypoint sets** (Tier A license, negligible value):
  - `joanwachuka/ksl-hand-landmarks`: Apache 2.0, 101 sequences, 5 words ("this, my, is, mother, a"), MediaPipe hands — [Kaggle](https://www.kaggle.com/datasets/joanwachuka/ksl-hand-landmarks).
  - `michaelmwai/ksl-numpy-array-files-dataset`: MIT, 13 MB, landmarks — [Kaggle](https://www.kaggle.com/datasets/michaelmwai/ksl-numpy-array-files-dataset) [verified].
- **Legacy and print** (Tier D):
  - The Peace Corps KSL demo (peacecorps.gov/ksl) returns HTTP 403 [verified]: dead.
  - The KSL/Zambian SL health poster project (ksl-poster.mindfulinteractive.com) is live, poster only, with no license [verified].
  - Print: Akach 1991, Mweri 2001 (KNAD), Rothenborg-Jensen & Yego 1988 (KISE), and the KSL Interactive CD-ROM 2004 — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified].

#### Uganda: Ugandan Sign Language (ugn)
- No digital or licensed lexical source was found.
- Print: Wallin, Lule, Lutalo-Kiingi & Busingye 2006, *Uganda Sign Language Dictionary* (Kyambogo University); UNAD *Manual of Ugandan Signs* 1998/1999; Cassingham, n.d. The resource portal's only online link for Ugandan SL is SpreadTheSign, which is Tier D — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified].
- Hamburg Compendium: no entry [verified]. Zenodo, DataCite, Kaggle and HF: no Ugandan SL datasets [verified by API searches]. GitHub has only unlicensed student apps (e.g. `UmarMubiru/usl-recognition-app`) [verified]. **Nothing usable.**

#### Tanzania: Tanzanian Sign Language (tza)
- **SignWiki Tanzania** (tz.signwiki.org)
  - Size: "There are 2194 signs in SignWiki Tanzania at this moment" — [Main Page](https://tz.signwiki.org/index.php/Main_Page). The MediaWiki API reports 2,217 articles and 2,294 uploaded images — [api.php siteinfo](https://tz.signwiki.org/api.php?action=query&meta=siteinfo&siprop=statistics|rightsinfo&format=json) [verified].
  - Each sign is a Semantic MediaWiki `{{Infoboxsign}}` with fields `translation`, `Image1/Image2`, `location`, `handshape`, `lexicalcategory`, `thematiccategory`, `relation1-3`, and `youtube1` (a YouTube video ID). Example: "Abudu" has location=Chest, handshape=B handshape, youtube1=FbEiecEi_6E — [Abudu](https://tz.signwiki.org/index.php/Abudu) [verified via API wikitext].
  - License (ToS, verbatim): "Sign Language videos posted on SignWiki are posted and licensed under a Creative Commons License… The license allows Sign Language videos to be used freely for non-commercial purposes." and "once you submit the content, you authorize SignWiki to use and distribute it freely under a Creative Commons License." — [SignWiki ToS](https://tz.signwiki.org/index.php/SignWiki_Terms_of_Service) [verified]. The MediaWiki `rightsinfo` field is empty [verified].
  - Institutions: UDSM, University of Oslo, AMUCTA and SHH Iceland; coordinator Prof. HRT Muzale — [About](https://tz.signwiki.org/index.php/SignWiki:About) [verified].
  - Type: lexical-db plus phonology plus stills; video only via YouTube. SPDX: none (an unspecified NC CC variant; closest is CC-BY-NC-*). Tier B; commercial_ok no; video_redistrib_ok no (YouTube).
  - Access: MediaWiki API (bulk-exportable). Disk: a few hundred MB of images [inference].
  - Next action: write to UDSM and SHH for permission and the original video files. Until then, the infobox handshape/location fields are usable for research only.
- **Print**: Chama cha Viziwi Tanzania 1993; Muzale (ed.) 2004 *Kamusi ya Lugha ya Alama Tanzania* — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified]. Tier D.
- Zenodo 21515671, an eye-gaze talk (272 MB MP4, CC BY 4.0), is not lexical [verified]. The GitHub `2022ren/sign-language-word-editor` (TSL with SignWriting) is an empty repo with no license [verified]. Dead ends.

#### Rwanda: Rwandan Sign Language (rsn)
- **Mendeley Data 10.17632/p6zc5g9bdy.1**, "Real-Time Recognition and Translation of Kinyarwanda Sign Language into Kinyarwanda Text (2023) Mediapipe NumPy array Hands and Pose extracted key points for 22 Sign Language" (Erick Semindu; Christine Niyizamwiyitira, CMU)
  - Size: 25,457 `.npy` files plus a metadata PDF; 312,420,890 B.
  - The 22 labels are Yego, Neza, Bibi, Urakoze, Isibo, Umurenge, Igihugu, Umujyi wa Kigali, Kicukiro, Nyarugenge, Akarere, Muraho, Amakuru, Imodoka, Moto, Akazi, Bayi, Mwaramutse, Papa, Mama, Oya and Imyaka, plus "---" (no sign) [verified from the downloaded 24 KB metadata PDF].
  - License, verbatim (Mendeley): "You can share, copy and modify this dataset so long as you give appropriate credit, provide a link to the CC BY license, and indicate if changes were made…" (CC BY 4.0) — [Mendeley](https://data.mendeley.com/datasets/p6zc5g9bdy/1) [verified via public API].
  - Type: pose/keypoints of isolated signs; no video. Tier A; commercial_ok yes; video n/a.
  - Next action: ingest as motion reference for 22 signs.
- **eKitabu, "Roadmap to promoting equity… national recognition and documentation of Rwandan Sign Language"**: Zenodo 17698761, a 6.3 MB PDF report, CC BY 4.0. Not a lexicon — [Zenodo](https://zenodo.org/records/17698761) [verified].
- **Print**: RNAD/VSO 2009 *Inkoranyamagambo Y'Amarenga Yo Mu Rwanda* — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified]. Tier D; a Tier C lead (RNAD).
- **CASL-W60, "Central Africa Sign Language"**
  - Kaggle `mwakalucky/casl-w60`: 60 words, 19 volunteers, 5,889 videos, 14.57 GB.
  - Terms, verbatim: "intended for academic and computational use only. No commercial usage is allowed. Licensed under the Computational Use of Data Agreement (C-UDA)". Contact via IUT Dhaka — [Kaggle](https://www.kaggle.com/datasets/mwakalucky/casl-w60) [verified].
  - Which country or language is meant is **not stated**, so it cannot be mapped to an ISO code. Tier B.

#### Burundi: Burundian Sign Language (lsb)
- Print only: Deafnet/NID/ANSB 2009 *Manuel d'introduction à la Langue des signes du Burundi* (DVD, 500 signs); Ephphatha 1992 (83 signs) — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified]. **Nothing usable.**

#### Ethiopia: Ethiopian Sign Language (eth)
- **SignPuddle "Dictionary Ethiopia", sgn18**: 143 entries, 139 with a text gloss. Many glosses are coded "9th-EMA", "33rd-EMA", "4th-EMS"; these appear to be manual-alphabet entries [inference]. 34,272 B, Last-Modified 2016 — [dump](https://www.signbank.org/signpuddle2.0/data/spml/sgn18.spml) [verified]. Also "Literature Ethiopia" puddle 100 — [SignPuddle index](https://www.signbank.org/signpuddle2.0/) [verified].
  - CC BY-SA 3.0; Tier A. **Flag: partly fingerspelling.**
- **Mendeley "Amharic Sign Language Data Sets"** (Isayas Feyera, 2020), 10.17632/5d3nkyhsrf.1
  - One RAR file, 313,386,413 B: video frames annotated with LabelImg (XML/TFRecord/CSV) "for recognition of Amharic Sign Language to Amharic characters… We used 10 class".
  - License: CC BY 4.0 (same Mendeley verbatim text) — [Mendeley](https://data.mendeley.com/datasets/5d3nkyhsrf/1) [verified].
  - Tier A. **Flag: fingerspelling/alphabet-only images.**
- **Kaggle "CESLR-multisigner"** (`antenemyehalme/continuous-ethiopia-sign-language-dataset`): 898 MB, license "Unknown" — [Kaggle API](https://www.kaggle.com/datasets/antenemyehalme/continuous-ethiopia-sign-language-dataset) [verified]. Tier D.
  - It probably matches the NeurIPS 2026 paper "Continuous Ethiopian Sign Language Recognition…" (2,220 video sequences, 50 sentences, 22 signers) — [NeurIPS](https://neurips.cc/virtual/2026/162644) [verified abstract; the link between the two is inference]. Continuous, not lexical.
- Not data: Zenodo 15858222, an EthSL learning-platform PDF (CC BY 4.0) — [Zenodo](https://zenodo.org/records/15858222). AAU theses on isolated-sign recognition (2013, 2014) have no released data [unverified, from search snippets].
- **Print**: ENAD 2008 *Ethiopian Sign Language Dictionary* — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified]. Tier D; Tier C lead with ENAD.
- Leiden's "Language Socialization in Deaf Families in Ethiopia" dataset is "(in progress)" — [Leiden data sets](https://www.universiteitleiden.nl/sign-languages/datasets/data) [verified].

#### Eritrea, Somalia, Sudan, South Sudan (no ISO codes)
- Eritrea: nothing found.
- Somalia: only unlicensed GitHub prototypes (`u-mar/Somali-Sign-Language-Detection`, `muud/soo-xir-on`) [verified]. Tier D.
- Sudan: one print dictionary (Arabic title, "Qāmūs luġat 'išārat al-ṣumm al-sūdāniyyah").
- South Sudan: Light for the World 2016, *Basic South Sudanese Sign Language Dictionary* (print) — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified].
- **Nothing usable** for any of the four.

#### Ghana: Ghanaian Sign Language (gse)
- **GSL Lexicon v1.0** (Fragkiadakis, Nyst, Nyarko; Leiden HANDS! Lab)
  - Zenodo 10.5281/zenodo.4533753 (concept DOI 10.5281/zenodo.4533752); one file, `GSL_openpose_data.zip`, 1,155,095,684 B; license `cc-by-4.0`; open access — [Zenodo API](https://zenodo.org/api/records/4533753) [verified].
  - Description: "contains over 1200 signs… recorded by Marco Nyarko, Ghanaian Sign Language teacher at the University of Ghana, Legon… Each folder contains the equivalent sign as well as the per frame output of OpenPose" [verified].
  - A partial third-party mirror shows the structure: per-gloss folders such as `ABORTION/ABORTION.mp4` plus `*_keypoints.json` — [HF mirror](https://huggingface.co/datasets/jameszokah/ghanaian-sign-language-lexicon) [verified].
  - Type: isolated-video (single signer) plus pose. SPDX CC-BY-4.0; Tier A; commercial_ok yes; video_redistrib_ok yes (with attribution); disk ≈ 1.2 GB.
  - Citation: Fragkiadakis, M., Nyst, V. A. S. & Nyarko, M. (2021) *Ghanaian Sign Language Lexicon (1.0)* [dataset]. Zenodo. https://doi.org/10.5281/zenodo.4533753 — [Leiden data sets](https://www.universiteitleiden.nl/sign-languages/datasets/data) [verified].
  - Next action: **first GSL ingest, and the best SSA source overall.**
  - Mirrors to avoid (Tier D):
    - HF `jameszokah/ghanaian-sign-language-lexicon` is tagged MIT although its card says CC BY 4.0. It misattributes the work to "A. T. Adomako et al." and is a partial upload: 512 MP4s across 719 folders.
    - Kaggle `jameszokah/ghsl-dataset` (MIT, 1.18 GB) is the same content [verified].
- **SignTalk-GSL: Ghanaian Medical Sign Language Data** (Responsible AI Lab), Kaggle `responsibleailab/signtalk-ghana`
  - License "Attribution 4.0 International (CC BY 4.0)"; 23,151,041,151 B; "10,000 Ghanaian Sign Language (GhSL) videos tailored to healthcare settings… 4,000+ unique sentences… 26 thematic categories" — [Kaggle](https://www.kaggle.com/datasets/responsibleailab/signtalk-ghana) [verified via Kaggle API].
  - Type: continuous video (sentences). Tier A; commercial_ok yes; video_redistrib_ok yes.
  - Next action: later, for sentence-level work. It is not a citation-form source.
- **SignTalk-GSL Multiview GH Healthcare**: CC BY 4.0, 90.9 GB. "500 healthcare-specific signs and phrases… five camera angles… Each sign was repeated six times per signer… 75,000 video clips". The same page also says "500 unique sentences" — [Kaggle](https://www.kaggle.com/datasets/responsibleailab/signtalk-gsl-multiview-gh-healthcare-dataset) [verified].
  - Type: mixed isolated and phrase, multi-view. Tier A. The isolated-sign share is unverified; this could become a multi-view fitting source.
- **SignTalk-Seq**: CC BY 4.0, 117 GB, 36,450 videos of 54 healthcare sentences, 6 interpreters plus 1 deaf signer — [Kaggle](https://www.kaggle.com/datasets/responsibleailab/signtalk-seq-temporal-ghanaian-sign-language-data) [verified]. Continuous; Tier A.
- **Wikisign GSL** (gsl.wikisign.org): "Currently 16 signs online"; footer "Content is available under Creative Commons by-sa free licence" (links by-sa/4.0). The page list contains spam or injection-named pages — [Wikisign GSL](http://gsl.wikisign.org/wiki/Wikisign:Main_Page) [verified]. Tier A; trivial.
- **GSL apps** (Leiden HANDS! Lab): the "GSL app contains over 1300 signs", plus GSL Grammars and GSL Quiz — [Leiden apps](https://www.universiteitleiden.nl/sign-languages/datasets/learning-tools) [verified]. These are Play Store apps with no stated data license; the open subset is the Zenodo lexicon.
- **Survival GSL Dictionary** (Deutsch & McGuire), a PDF on Dropbox that is still reachable, with no license; and the GNAD *Ghanaian Sign Language* dictionary (ca. 2001, print) — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified]. Tier D.

#### Ghana: Adamorobe Sign Language (ads)
- **Adamorobe Sign Language Lexicon**: "250 signs of AdaSL in isolation. For a subset of signs encodings of phonological and iconic features are available"; Licence "information not available"; Access "restricted access"; Leiden — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/adasllexicon.html) [verified]. The TLA CMDI metadata adds that the encodings are "in the excel file in this folder" — [TLA handle](https://hdl.handle.net/1839/00-0000-0000-0016-8A57-F) [verified].
  - Type: isolated-video plus phonology. Tier C (TLA account plus depositor permission); commercial_ok unknown, probably no.
  - Next action: email V. Nyst or Leiden for research access, asking especially for the phonology Excel.
- **Adamorobe Sign Language Corpus**: 36 hours, 39 tapes, 180 clips, 27 ELAN transcripts, about 20 signers; restricted; licence n/a — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/adaslcorpus.html) [verified]. Held in TLA/DoBeS, not ELAR — [Leiden](https://www.universiteitleiden.nl/sign-languages/datasets/data) [verified]. Continuous; Tier C.

#### Nigeria: Nigerian Sign Language (nsi)
- **NSL-212 Landmark Benchmark** (Adeleke Adeniyan), Kaggle
  - "CC0: Public Domain"; 291,029,783 B; "212 lexical sign classes… normalized temporal matrix of shape (48, 225)", i.e. MediaPipe pose plus both hands. The training split is augmented 8× — [Kaggle](https://www.kaggle.com/datasets/adelekeadeniyan/nsl-212-benchmark-dataset) [verified].
  - Type: pose, isolated signs, no video. SPDX CC0-1.0; Tier A.
  - Next action: ingest the gloss list and trajectories as motion priors.
- **NSL Alphanumeric Dataset** (Adeleke, Afolayan, Johnson): Zenodo 10.5281/zenodo.21672976 (and Kaggle). cc-by-4.0, about 17.8 GB split into zip parts. "33 static alphanumeric sign gestures, including numbers (1–9) and alphabet letters (A–Y), excluding motion-based signs J and Z" — [Zenodo API](https://zenodo.org/api/records/21672976) [verified]. Tier A. **Flag: fingerspelling/alphanumeric images only.**
- **Sign-to-Speech NSL dataset** (Kolawole et al., IJCAI 2022), HF `Lanfrica/sign-to-speech-for-sign-language-understanding-a-case-study-of-nigerian-sign-language`
  - Tag `license:cc-by-nc-4.0`; gated, with a use-case form — [HF API](https://huggingface.co/datasets/Lanfrica/sign-to-speech-for-sign-language-understanding-a-case-study-of-nigerian-sign-language) [verified].
  - About 4.8k PASCAL-VOC/YOLO-annotated still images. Label prefixes cover the 26 letters A–Z plus about 110 words (e.g. accept, afternoon, eat, sorry, thank) [verified from the file listing]. Paper: [arXiv 2111.00995](https://arxiv.org/abs/2111.00995).
  - Tier B. **Flag: partly alphabet; stills.**
- **SignPuddle "Dictionary Nigeria", sgn32**: 11 entries (Good, see, Arise, Faith, Obey, Woman, Good morning…), 4,302 B, 2019 — [dump](https://www.signbank.org/signpuddle2.0/data/spml/sgn32.spml) [verified]. CC BY-SA 3.0; Tier A; trivial.
- **Print**: Odusanya 2000; Ajavon 2003 — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified]. Unlicensed GitHub prototypes (e.g. `centbueze/nigeria-signs-language`, MIT code) [verified] are not datasets.

#### Nigeria: Hausa Sign Language (hsl) and Bura Sign Language (no ISO)
- Hausa SL: print only, Schmaling & Bala Hausawa 2011, *Maganar hannu… Littafi na farko: Iyali* (Family book) — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified]. GitHub `maitalata/hausa_sl` is an Android app with no license [verified]. Zenodo 17290530 is a paper on homosigns, not data [verified]. **Nothing usable.**
- Bura SL: no source found in the Compendium, ELAR searches, Zenodo, Kaggle or HF. **Nothing usable.**

#### Cameroon: Cameroon SL and Extreme North Cameroon SL (no ISO)
- **ELAR dk0347**, "Documentation of Extreme North Cameroon Sign Language and Cameroon Sign Language" (Lutalo-Kiingi, 2013–14)
  - 8 hours, about 20 participants; 1.5 hours glossed in English or French.
  - Access: "Restricted access for 35 videos requires registration; Restricted access for 49 videos, ELAN files and further written documentation requires confirmed registration"; licence n/a — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/cameroonsl.html), [ELAR](https://www.elararchive.org/dk0347) [verified].
  - Continuous; Tier C.
- **His Hands Reader "Cameroon Hand Signs"**: a missionary app or site that links a YouTube playlist — [hishandsreader.org](https://www.hishandsreader.org/1cm-cameroon-languages.html) [verified]. Tier D.

#### Francophone Africa: LSAF (gus is SIL's ref. name "Guinean Sign Language"), Guinea, Benin, Togo, Burkina Faso, Senegal, Gabon, Chad (cds), Congo/DRC, Guinea-Bissau (lgs)
- Print and DVD only:
  - Kamei (ed.) 2008, *DVD: Langue des Signes d'Afrique Francophone (LSAF)* (ILCAA, Tokyo University of Foreign Studies).
  - Tamomo 1994; Sanogo 2012/2014, *Ecoute mes mains*.
  - Benin: Sekpon et al., *Mon livret de signes* T1/T2.
  - DRC: Cornett 1990.
  - Guinea-Bissau: Martini & Morgado 2008, 2017.
  - Gambia: GADHOH Books 1–4 (gadhoh.com is unreachable).
  - Sources: [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified list; gadhoh dead, verified].
- Benin dead end: the Deep Learning IndabaX Bénin 2026 workshop states that it used LSA64 and an ASL alphabet because "Ce qui manque n'est pas la méthode, c'est un corpus enregistré au Bénin" — [GitHub](https://github.com/KOBA2008/Reconnaissance-de-la-langue-des-signes-par-vision-par-ordinateur---IndabaxBenin-2026---Workshop) [verified].
- **Nothing usable** for LSAF, Guinea, Benin, Togo, Burkina Faso, Senegal, Gabon, Chad, Congo/DRC or Guinea-Bissau.

#### Côte d'Ivoire: Ivorian Sign Language, LSCI (no ISO)
- **Wikisign LSCI** (lsci.wikisign.org): "Actuellement 439 signes sont présents" [verified]. The Compendium gives 438 signs with "citation form, keyword in French" and licence "CC BY-SA 3.0 FR" — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/wikisignlsci.html) [verified].
  - **License conflict:** the live site footer reads "Le contenu est disponible sous licence… Creative Commons by-sa" and links `by-sa/2.0/fr` — [Wikisign LSCI](http://lsci.wikisign.org/wiki/Wikisign:Accueil) [verified].
  - Videos are hosted locally, not on YouTube: the ACHETER_2 page references `/upload/f/fb/ACHETER_2.flv` and transcoded MP4/WebM. However, HEAD requests on both the original FLV and the transcode return **404** — [ACHETER_2](http://lsci.wikisign.org/wiki/ACHETER_2) [verified].
  - Type: isolated-video plus French keyword. SPDX CC-BY-SA-2.0-FR or 3.0-FR (conflict). Tier A by license, but the media appear broken.
  - Next action: contact Angoua Tano and Leiden for the original clips.
- **ELAR dk0076**, "Documentation and description of a sign language in Côte d'Ivoire" (Tano 2011–14): 191 video files, about 61 participants, "includes a digital corpus… a lexical database"; "Restricted access requires registration"; licence n/a — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/cotedivoire.html), [ELAR](https://www.elararchive.org/dk0076) [verified]. Tier C. It contains a **lexical database**.
- **Ivory Coast Sign Language app** (Leiden): "over 1258 signs… and their French equivalents"; Play Store, no data license — [Leiden apps](https://www.universiteitleiden.nl/sign-languages/datasets/learning-tools) [verified]. Tier C lead.

#### Mali: Malian SL / LaSiMa (bog), Dogon SL, Tebul SL (tsy)
- **ELAR dk0108**, "A reference corpus of the Malian Sign Language / LSM" (Nyst 2007–09)
  - "20 hours or discourse; 133 recording files; 1541 lemmas; 14000 tokens"; 63 participants; French translation; "Restricted access requires confirmed registration"; licence n/a.
  - Cite as: "Nyst, Victoria. 2010. Un Corpus de Reference de la Langues des Signes Malienne. Endangered Languages Archive. Handle: http://hdl.handle.net/2196/00-0000-0000-0001-EBE1-8" — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/maliansl.html) [verified].
  - The ELAR summary adds "the project generated a video vocabulary and a basic grammar CD of LSM" — [ELAR dk0108](https://www.elararchive.org/dk0108) [verified].
  - Continuous plus a lemma list; Tier C.
- **Wikisign LaSiMa**: "Actuellement 32 signes sont présents"; footer CC by-sa (2.0 FR link); the sample page "Aigle" has only a JPG — [Wikisign LaSiMa](http://lasima.wikisign.org/wiki/Wikisign:Accueil) [verified]. Tier A; trivial.
- **Malian Sign Language app** (Leiden): "over 439 signs… and their French equivalents" — [Leiden apps](https://www.universiteitleiden.nl/sign-languages/datasets/learning-tools) [verified]. Tier C lead.
- **Pinsonneault 1999**, *Lexique des signes utilisés par les sourds du Mali* (print or scan on africansignlanguages.org) [verified listing]. Tier D.
- **Dogon SL corpus**: 32 hours, 68 participants; TLA handle 1839/00-0000-0000-0016-2C11-0; restricted — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dogonsl.html) [verified]. "Malian Sign Language Corpus II… [accessible on request]" — [Leiden](https://www.universiteitleiden.nl/sign-languages/datasets/data) [verified]. Tier C.
- **Tebul SL (tsy)**: no source found. **Nothing usable.**

#### Sierra Leone (sgx), Liberia (no ISO)
- No sources found in any repository checked. **Nothing usable.**

#### Zambia: Zambian Sign Language (zsl)
- Only the ZNAD 2001 *Zambian Sign Language Dictionary* and Bwalya 1985 (print), and the KSL/ZSL health poster site — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified].
- GitHub: one student project with no license (`faithkafwimbi/real-time-Zambian-sign-language-recognition-and-translation-system`) [verified]. **Nothing usable.**

#### Zimbabwe: Zimbabwe Sign Language (zib)
- The King George VI Centre ZSL dictionary PDF (osisa.org) did not respond to HEAD: dead link [verified].
- GitHub student projects only. One, `taeshawanChiyaka/ZSLR-emg-…`, is CC0 but 30 KB of EMG code [verified]. **Nothing usable.**

#### Malawi: Malawian Sign Language (lws)
- **SignPuddle "Dictionary Malawi", sgn128**: 49 entries, 48 glossed, many in Chichewa (galimoto, Chiuta, Yesu, njoko…). 11,766 B, Last-Modified 2022 — [dump](https://www.signbank.org/signpuddle2.0/data/spml/sgn128.spml) [verified]. CC BY-SA 3.0; Tier A. **First ingest.**
- **eKitabu "Malawian Sign Language Early Grade Reading Materials Adaptation"**: Zenodo 21229982, a 10 MB PDF report (CC BY 4.0) on 10 storybooks filmed in MSL "with embedded glossaries". The videos themselves are not in the record — [Zenodo](https://zenodo.org/records/21229982) [verified]. A Tier C lead (eKitabu, MANAD).

#### Mozambique: Mozambican Sign Language (mzy)
- **Wikisigns "LS Moçambique" / "Lingua de Sinais de Mocambique"**: 44 signs; footer "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License" — [Wikisigns MZ](http://www.wikisigns.org/portugues/mozambique), [statistics](http://www.wikisigns.org/statistics) [verified]. Videos are presumably YouTube embeds like the Malagasy section [inference]. Tier A license, Tier D delivery.
- **Print**: Ngunga et al. 2013, *Dicionário da Língua de Sinais de Moçambique* (CEA-UEM) [verified listing]. Tier D.

#### Angola (no ISO)
- ANSA/MED *Dicionário da Língua Gestual Angolana* (signs for 800 words, book plus DVD; promo on YouTube) — [africansignlanguages.org](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified]. Tier D. **Nothing usable.**

#### Namibia: Namibian Sign Language (nbs)
- **SignWiki Namibia** (na.signwiki.org)
  - Size: "There are 1979 signs in SignWiki Namibia at this moment" — [Main Page](https://na.signwiki.org/index.php/Main_Page). The API reports 2,138 articles and 4,419 images [verified].
  - Fields: the same `{{Infoboxsign}}` schema. Example "A4 page": location=Hand, handshape=A handshape, lexicalcategory=Noun, twohandforms=Yes, youtube1=nQ7EPBoGfyk — [A4 page](https://na.signwiki.org/index.php/A4_page) [verified].
  - License: the same SHH terms of service: "Creative Commons License… used freely for non-commercial purposes" — [ToS](https://na.signwiki.org/index.php/SignWiki_Terms_of_Service) [verified]. Run by CCDS Namibia and SHH Iceland — [About](https://na.signwiki.org/index.php/SignWiki:About) [verified]. The Compendium lists licence "information not available" — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/signwikinamibia.html) [verified].
  - Type: lexical-db plus phonology plus stills; YouTube video. Tier B; commercial_ok no; video_redistrib_ok no.
  - Next action: request permission and the original clips from CCDS/SHH.
- **Print**: Morgan, Liddell, Haikali et al. 1991 (Gallaudet); Madison 2005; CLaSH 2004 video [verified listing]. GitHub has only unlicensed prototypes (`RighteousW/sign_avatar`, `dukejohannesA/…NSL…fingerspelling trainer`) [verified].

#### Botswana, Lesotho, Eswatini (no ISO)
- Lesotho: print only, Machobane & Matlosa 2010, *Lesotho Sign Language Learners' Dictionary*, and Janes 1991 [verified listing].
- Botswana and Eswatini: nothing found.
- **Nothing usable** for any of the three.

#### Madagascar: Malagasy Sign Language (mzc)
- **Wikisigns "Tenin'ny Tanana Malagasy"**
  - Size: 1,314 signs ("Langue de Signes Malagasy 1,314" on [statistics](http://www.wikisigns.org/statistics)) [verified].
  - License: the site footer reads "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License" — [list page](http://www.wikisigns.org/list/madagascar/malagasy) [verified]. The Compendium also gives CC BY-SA 4.0, with "citation form, keyword in Malagasy, user rating" — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/wikisignsmalagasysl.html) [verified].
  - Video delivery: each sign page embeds a **YouTube iframe**, e.g. "fotsy" uses `youtube.com/embed/_59cgy-ZjKc` — [fotsy](http://www.wikisigns.org/madagascar/malagasy/fotsy) [verified]. The platform is Drupal 7, run by Carlos González and ULPGC Cátedra Telefónica.
  - Type: isolated-video plus keyword. SPDX CC-BY-SA-4.0; Tier A by license, but files are only reachable through YouTube (Tier D delivery).
  - Next action: ask Wikisigns/ULPGC for the source MP4s under CC BY-SA 4.0. Gloss metadata can be listed now.
- **Print**: Federasionan'ny Marenina eto Madagasikara 2009, *Diksioneran'ny Tenin'ny Tanana Malagasy* [verified listing]. Tier D.

#### Mauritius (lsy), Seychelles (lsw), Cape Verde (no ISO)
- Mauritius: print only, Gebert, Adone et al. 2006, *Dictionary and Grammar of Mauritian Sign Language* [verified listing]. Tier D.
- Seychelles and Cape Verde: nothing found. (São Tomé and Príncipe, outside the list, has a 2014 print dictionary.)
- **Nothing usable.**

### Inferences
- **Recommended first ingest by language** (order of preference):
  - gse: Zenodo GSL Lexicon (A).
  - xki: eKitabu KSL CC0 videos (A), plus SignPuddle sgn79. Request the Maseno pose and HamNoSys data.
  - sfs: SignPuddle sgn77 (A). Use the UFS place-names phonology (B) as reference only.
  - eth: SignPuddle sgn18 (A, partly fingerspelling).
  - lws: SignPuddle sgn128 (A).
  - nsi: NSL-212 landmarks (A), plus SignPuddle sgn32.
  - rsn: Mendeley Kinyarwanda keypoints (A).
  - mzc: Wikisigns metadata now; source videos by request (A license).
  - LSCI: Wikisign LSCI metadata, plus a request to Tano/Leiden (A license; media broken).
  - tza / nbs: SignWiki infobox data under permission (B → C).
  - ads, bog, Cameroon, LSCI corpus: ELAR/TLA research access (C).
  - All others: none.
- **Languages with nothing usable** (no Tier A–C digital lexical source found): Ugandan SL, Burundian SL, Eritrean SL, Somali SL, Sudanese SL, South Sudanese SL, Hausa SL, Bura SL, Tebul SL, LSAF/Guinea, Burkina Faso, Senegal, Sierra Leone, Liberia, Benin, Togo, Congo/DRC, Gabon, Chad, Zambian SL, Zimbabwe SL, Angolan SL, Botswana SL, Lesotho SL, Eswatini SL, Mauritian SL, Seychelles SL, Cape Verde.
  - Mozambican SL has only 44 Wikisigns signs on YouTube.
  - Kenyan, South African, Ethiopian, Malawian and Nigerian SL each have only small SignPuddle notation sets plus whatever else is listed above.
- For avatar fitting, the strongest African material is GSL (more than 1,200 single-signer clips, plus SignTalk multi-view healthcare clips) and the eKitabu KSL multi-signer set. That set is tiny in vocabulary but has 15 signers × 5 repetitions, which is useful for estimating variation.
- eKitabu publishes KSL (CC0 Kaggle), RSL and MSL video work. It is the most promising institutional partner for licensed East and Southern African citation videos; this is an inference from its Kaggle and Zenodo outputs.
- Several Leiden/HANDS! Lab apps hold larger lexicons than the open Zenodo release: ICSL 1,258, GSL 1,300+, MSL 439. Asking Leiden to release the LSCI and Malian app lexicons on Zenodo under CC BY, as was done for GSL, is a realistic Tier C → A path.

### Gaps
- The WebSearch budget was exhausted, so no searches were run after that point for:
  - SignTalk-Gh's Scientific Reports data statement;
  - Uganda, Zambia and Zimbabwe dictionary apps;
  - Real SASL's or NID's API or licensing contacts;
  - Somaliland and Eritrean NAD dictionaries;
  - Mauritian and Seychelles digital dictionaries;
  - the "Sign Language Atlas of Africa";
  - newer Data in Brief articles beyond the KSL pose paper.
- The eKitabu KSL numeric folders (No_9…No_444) are unexplained; the README.md was not read because Kaggle downloads need authentication.
- The Wikisigns Kenya (72 signs) list URL was not found. Whether Wikisigns' YouTube uploads themselves carry a YouTube CC license was not checked.
- The NSL-212 gloss list sits in dataset_metadata.json (5 KB) but requires a Kaggle login to download, so it was not read.
- The country behind CASL-W60's "Central Africa Sign Language" was not identified.

---

## Q2. What license governs data vs. videos, is bulk export possible, and is phonological coding available?

### Takeaway
License usually differs between metadata and media:
- **Wikisigns:** the site license is CC BY-SA 4.0, but the media are YouTube embeds.
- **SignWiki:** the terms of service grant an unspecified **non-commercial** CC license, and the videos are YouTube embeds, so text, phonology and stills are Tier B at best and video is not redistributable.
- **Archives (ELAR/TLA):** no licence is stated; access is registration- or permission-gated.
- **Clean Tier A cases**, where one license covers videos and data: Zenodo GSL (CC BY 4.0), Kaggle eKitabu KSL (CC0), the Kaggle SignTalk family (CC BY 4.0), and Mendeley's Kinyarwanda and Amharic sets (CC BY 4.0).

Phonological coding exists in only four places:
- SignWiki handshape/location fields (Tier B);
- the UFS SASL place-name annotation strings (Tier B);
- the AdaSL lexicon phonology Excel (Tier C);
- the AI4KSL HamNoSys transcriptions of 4,000 words (Tier C, unreleased).

No ASL-LEX-style open phonology database exists for any SSA sign language. No mocap was found; pose data substitutes.

### Cited Findings
- SignWiki (Namibia, Tanzania): "SignWiki enables the embedding of videos from third party video services, including YouTube and Vimeo… Sign Language videos posted on SignWiki are posted and licensed under a Creative Commons License… The license allows Sign Language videos to be used freely for non-commercial purposes." — [SignWiki ToS](https://na.signwiki.org/index.php/SignWiki_Terms_of_Service) [verified].
  - The footer of the signwiki.org portal reads "All rights reserved" — [signwiki.org](http://signwiki.org/) [verified]. That conflicts with the CC language in the ToS.
  - Bulk export is technically possible through the MediaWiki API (`api.php`, siteinfo answered for both instances) — [na api](https://na.signwiki.org/api.php?action=query&meta=siteinfo&siprop=statistics|rightsinfo&format=json) [verified].
  - Phonology is per-sign `handshape`, `location`, `twohandforms` and `lexicalcategory` — [A4 page](https://na.signwiki.org/index.php/A4_page), [Abudu](https://tz.signwiki.org/index.php/Abudu) [verified]. The Compendium describes the content as "Citation form, keywords…, pictures, lexical category, phonological information, examples of usage" — [Compendium TZ](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/signwikitanzania.html) [verified].
- Wikisigns: the site-wide CC BY-SA 4.0 footer is on every page, but sign video is delivered through `<iframe class="media-youtube-player" src="https://www.youtube.com/embed/…">` — [fotsy](http://www.wikisigns.org/madagascar/malagasy/fotsy) [verified].
- Wikisign (LSCI, GSL, LaSiMa): MediaWiki "Creative Commons by-sa" footers. The LSCI and LaSiMa footers link to by-sa/2.0/fr and the GSL footer to by-sa/4.0. LSCI media are self-hosted, but the sampled media return 404 — [LSCI](http://lsci.wikisign.org/wiki/ACHETER_2) [verified].
- SignPuddle: the SPML dumps are openly downloadable per puddle at `data/spml/sgn{ID}.spml`, and SignWriting content is CC BY-SA 3.0 — [signwriting.org](https://www.signwriting.org/) [verified]. African puddle IDs are 77 (South Africa), 79 (Kenya), 18 (Ethiopia; Literature Ethiopia is 100), 128 (Malawi) and 32 (Nigeria). There are no puddles for the other SSA countries in scope — [SignPuddle 2.0](https://www.signbank.org/signpuddle2.0/) [verified].
- UFS SASL place names: "CC BY-NC-SA 4.0". The CSV carries a coded phonological "ANNOTATION" field for each of 67 variants, and a data dictionary explains the scheme — [figshare API](https://api.figshare.com/v2/articles/23741892) [verified].
- AdaSL lexicon: "encodings of phonological and iconic features"; Licence "information not available"; "restricted access" — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/adasllexicon.html) [verified].
- AI4KSL: "4,000 words transcribed into five articulatory parameters using the HamNoSys system" — [arXiv 2410.18295](https://arxiv.org/abs/2410.18295) [verified abstract]. No release was found.
- ELAR collections (LaSiMa, Cameroon, LSCI) and TLA collections (AdaSL, Dogon): every Compendium entry has Licence "information not available" and access requiring "registration" or "confirmed registration" — [Malian](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/maliansl.html), [Cameroon](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/cameroonsl.html), [Côte d'Ivoire](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/cotedivoire.html) [verified].
- Pose data (no mocap anywhere):
  - GSL OpenPose JSON (CC BY 4.0);
  - NSL-212 MediaPipe (CC0);
  - Kinyarwanda MediaPipe (CC BY 4.0);
  - Maseno KSL MediaPipe 3D (CC BY 4.0, restricted);
  - small KSL landmark sets (Apache-2.0, MIT).
  - Sources: [Zenodo GSL](https://zenodo.org/records/4533753), [NSL-212](https://www.kaggle.com/datasets/adelekeadeniyan/nsl-212-benchmark-dataset), [Kinyarwanda](https://data.mendeley.com/datasets/p6zc5g9bdy/1), [Maseno](https://zenodo.org/records/14974973) [verified].

### Inferences
- For Marionet, any SignWiki or Wikisigns ingest should separate the **gloss and phonology metadata** (SignWiki: NC; Wikisigns: BY-SA) from the **video**. The video must not be pulled from YouTube; original files should be requested from the maintainers.
- The SignWiki infobox schema (handshape label such as "B handshape", a coarse location, and two-handedness) maps directly onto a SignDesc-style handshape/location seed. It is Tier B, though, so commercial clip derivation needs written permission from SHH and the national partners.
- The UFS place-name coding string looks like a compact parametric notation (symbols such as `#`, `{`, `?`, `*`, `!`, `[`, `^`, `~`, `&` for each hand). It could be parsed with the data dictionary, but only 67 signs are covered and the license is NC.

### Gaps
- The verbatim ELAR end-user licence and access-protocol text was not captured: the ELAR legal page fetch returned no commercial-use clause, and ELAR search returned "The data service… is currently unreachable" on one query.
- TLA's AdaSL access level and licence text are not in the CMDI metadata.
- The video terms on the UFS Omeka archive (pokello.ufs.ac.za) were not read.
- Which exact CC variant SignWiki intends (BY-NC, BY-NC-SA or BY-NC-ND) is unspecified; ask SHH.

---

## Q3. What do the repositories hold (ELAR, TLA, Mendeley/Data in Brief, Zenodo, Kaggle, Zindi, Hugging Face, GitHub, Lacuna Fund, Masakhane, SIL, Global Signbank), including dead ends?

### Takeaway
- **Kaggle** turned out to be the richest open host: eKitabu KSL (CC0), the SignTalk GSL family (CC BY 4.0), NSL-212 (CC0) and CASL-W60 (C-UDA, non-commercial).
- **Zenodo** holds the GSL Lexicon (CC BY 4.0) and NSL Alphanumeric (CC BY 4.0, fingerspelling), and lists the Maseno KSL pose set as restricted.
- **Mendeley** holds the Kinyarwanda keypoints and the Amharic fingerspelling set (both CC BY 4.0).
- **ELAR/TLA** hold the Leiden/Nyst West African corpora (Tier C).
- **Hugging Face** has only a gated NC Nigerian set and unreliable mirrors.
- **Lacuna Fund** has funded **no** sign-language dataset among its 24 released language datasets.
- **Global Signbank** exposes no African datasets publicly.
- **SIL/Webonary** could not be inspected: Cloudflare returned 403 or a JS challenge.

### Cited Findings
- **Zenodo** (API searches for "sign language" plus each country or demonym):
  - Datasets: GSL Lexicon 4533753 (CC BY 4.0), NSL Alphanumeric 21672976 (and earlier versions 21627166/21627167) (CC BY 4.0), KSL Word Based Pose 14974973 (restricted).
  - Non-data records: SASL diabetes signs image, SASL thesis video, Tanzanian SL eye-gaze talk, GSL number-marking talk, eKitabu RSL and MSL reports, EthSL platform documentation.
  - Sources: [Zenodo API](https://zenodo.org/api/records?q=%2Btitle%3A(sign)%20%2B(Ghanaian)), [4533753](https://zenodo.org/records/4533753), [21672976](https://zenodo.org/records/21672976), [14974973](https://zenodo.org/records/14974973) [verified].
- **DataCite** (indexes Mendeley 10.17632, figshare and Kaggle DOIs; query `titles.title:("sign language"…) AND (country)`):
  - Amharic Sign Language Data Sets (10.17632/5d3nkyhsrf, CC BY 4.0).
  - Kinyarwanda SL keypoints (10.17632/p6zc5g9bdy, CC BY 4.0).
  - Kaggle KSL Video Dataset (10.34740/kaggle/dsv/14808252, eKitabu LLC).
  - UFS SASL Place Names (CC BY-NC-SA 4.0).
  - ELOM SASL (CC BY-NC 4.0).
  - There were zero hits for Uganda, Tanzania, Zambia, Zimbabwe, Malawi, Somalia, Sudan, Eritrea, Hausa, Yoruba, Igbo, Mozambique, Angola, Namibia, Botswana, Lesotho, Eswatini, Madagascar, Mauritius, Seychelles, Congo, Burundi, Sierra Leone and Liberia.
  - Source: [DataCite API](https://api.datacite.org/dois?query=titles.title:%22sign%20language%22) [verified].
- **Mendeley Data / Data in Brief**: the only SSA sign-language Data in Brief article found is the Maseno KSL pose dataset (Data in Brief 60:111502, 2025). Its data sits on Zenodo, restricted, not on Mendeley — [PMC11999445](https://pmc.ncbi.nlm.nih.gov/articles/PMC11999445/) [verified]. No GSL, NSL, EthSL or SASL Data in Brief article was found (gap: searches were cut short).
- **Kaggle** (unauthenticated API: `datasets/list?search=`, `datasets/view`):
  - Hits: eKitabu KSL (CC0, 14.7 GB); SignTalk-GSL (23 GB), Multiview (90.9 GB) and Seq (117 GB), all CC BY 4.0; NSL-212 (CC0); NSL Alphanumeric (CC BY 4.0); CASL-W60 (C-UDA); CESLR EthSL (Unknown); `jameszokah/ghsl-dataset` (MIT, a mirror of the GSL lexicon); Zindi KSL re-uploads (Unknown).
  - No hits for Uganda, Rwanda, Tanzania, Zambia, Zimbabwe, South Africa/SASL, Somalia, Sudan, Mozambique, Cameroon, Senegal, Mali, Burkina, Botswana, Lesotho, Madagascar or Hausa.
  - Sources: [eKitabu](https://www.kaggle.com/datasets/ekitabu/ksl-video-dataset), [SignTalk](https://www.kaggle.com/datasets/responsibleailab/signtalk-ghana), [CASL-W60](https://www.kaggle.com/datasets/mwakalucky/casl-w60) [verified].
- **Zindi**: KSL Classification Challenge (images, CC BY-SA 4.0 per its Rules) — [rules](https://zindi.world/competitions/kenyan-sign-language-classification-challenge/rules) [verified]. No other SSA sign competitions were seen.
- **Hugging Face** (dataset search API, about 30 queries):
  - `Lanfrica/sign-to-speech…nigerian-sign-language`: cc-by-nc-4.0, gated.
  - `jameszokah/ghanaian-sign-language-lexicon`: a mislabelled partial MIT mirror.
  - `ArtemGu/0_Kenyan_Sign_Language_Classification`: no license.
  - `la-min/signmed-ghana-medical`: 10 examples, no license.
  - Nothing for SASL, EthSL, RSL, TSL, UgSL or ZSL.
  - Source: [HF API](https://huggingface.co/api/datasets?search=nigerian%20sign) [verified].
- **GitHub** (repository search API): dozens of student recognition projects for KSL, SASL, EthSL, NSL, GSL, ZSL, Zimbabwe, Somali, Namibian, Lesotho and Malawian SL, almost all **without a license** (Tier D). Notable entries:
  - `dsfsi/maswo-south-african-sign-language-dataset`: YouTube IDs only, no license.
  - `vbookshelf/Fabulous-SASL`: 1,500+ videos, no license.
  - `Amasa614/gsl-signtalk-calibration`: points to Kaggle SignTalk-Gh.
  - IndabaX Bénin: states that no Benin corpus exists.
  - Sources: [Maswao](https://github.com/dsfsi/maswo-south-african-sign-language-dataset), [Fabulous-SASL](https://github.com/vbookshelf/Fabulous-SASL) [verified].
- **Lacuna Fund**: the dataset explorer lists "Language datasets 24", all text or speech (e.g. KenSpeech, NaijaVoices, BIG-C, Kallaama, Ethio Speech Corpora), with no sign-language dataset — [lacunafund.org/datasets](https://lacunafund.org/datasets/), [language](https://lacunafund.org/datasets/language/) [verified]. The brief's hope that "Lacuna Fund funded sign language datasets in Africa" is **not supported** by the released-dataset catalogue.
  - Note: the AI4KSL and Maseno team (Wanzare) is the same group behind the Lacuna-funded Kencorpus, but its KSL work was acknowledged to AI4D Africa/EduAI Hub and BMBF/UNESCO-TWAS, not Lacuna — [PMC11999445](https://pmc.ncbi.nlm.nih.gov/articles/PMC11999445/) [verified].
- **Masakhane**: the Masakhane datasets listed via Lacuna (MasakhaNER 2.0, MAFAND-MT, MasakhaPOS, Masakhane-NLU) are all text — [Lacuna language datasets](https://lacunafund.org/datasets/language/) [verified]. No Masakhane sign-language dataset was found; masakhane-io was not crawled directly (gap).
- **ELAR**: dk0108 (Malian LSM), dk0347 (Cameroon), dk0076 (Côte d'Ivoire); all registration-gated, with no licence listed — [dk0108](https://www.elararchive.org/dk0108), [dk0347](https://www.elararchive.org/dk0347), [dk0076](https://www.elararchive.org/dk0076) [verified]. The ELAR site search for "langue des signes" surfaced only items from these collections [verified]. No ELAR collections for Hausa, Bura or Tebul SL were found.
- **TLA (MPI)**: AdaSL Corpus and Lexicon (hdl 1839/00-0000-0000-0016-2C12-A, -8A57-F) and the Dogon SL corpus (-2C11-0), restricted — [TLA handle](https://hdl.handle.net/1839/00-0000-0000-0016-2C12-A) [verified].
- **Global Signbank**: the public "Available Datasets" page lists only EmblemsNL, Kata Kolok and NGT — [signbank.cls.ru.nl](https://signbank.cls.ru.nl/datasets/available) [verified]. No African dataset is publicly exposed.
- **Hamburg SL Dataset Compendium v1.5.0**: indexes 11 SSA languages: Adamorobe, Cameroon, Dogon, Extreme North Cameroon, Ivorian, Kenyan, Malagasy, Malian, Namibian, Tanzanian (plus the shared Cameroon corpus) — [language index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html) [verified].
- **SIL**: SIL's Sign Language Resources page links to research and partners but to no African dictionary downloads — [SIL](https://www.sil.org/sign-languages/sign-language-resources) [verified]. Webonary returned HTTP 403, and the SIL Language & Culture Archives search returned a Cloudflare "Just a moment…" challenge [verified]. SIL dictionary licenses could not be checked.
- **African Sign Languages Resource Center** (africansignlanguages.org, Nyst): maintains the most complete bibliography of African SL dictionaries (based on Schmaling 2012, *Sign Language Studies* 12(2): 236–278), with online links for Cameroon, Gambian, Kenyan, Malagasy, Malian, Mozambican, Namibian, Tanzanian, South African, Ugandan (SpreadTheSign), Zambian and Zimbabwean SL — [dictionaries page](http://www.africansignlanguages.org/dictionariesdictionaires/) [verified]. Several of these links are dead (signgenius 521, gadhoh unreachable, peacecorps 403, osisa unresponsive) [verified].
- **SpreadTheSign and YouTube-SL-25**: Tier D by policy; not evaluated further.

### Inferences
- Kaggle's unauthenticated `datasets/list` and `datasets/view` endpoints give license and size metadata reliably. They are the best automated discovery route for new African sign datasets, which are increasingly published there rather than on Mendeley or Zenodo.
- Archive-held African corpora (ELAR, TLA) are documentation corpora: discourse, with some lemma lists. Apart from the AdaSL lexicon and the LSCI lexical database, they are poor sources of citation forms. Treat them as Tier C research leads, not first ingests.

### Gaps
- SIL/Webonary African sign dictionaries (for example any SIL-produced Burkina, Togo or Cameroon sign lexicons) are unverified because of bot protection.
- The Masakhane GitHub organisation was not inspected directly.
- Kaggle search may miss datasets titled without "sign language" or a country name.
- Zenodo full-text search was noisy and may miss non-English titles (e.g. "langue des signes" plus a country).
- Mendeley Data's own search API returned unrelated records, so coverage relies on DataCite indexing.

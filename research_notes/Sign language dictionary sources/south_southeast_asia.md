# Licensed lexical / dictionary sources for the sign languages of South Asia and Southeast Asia (Marionet ingest survey, 2026-10-14)

Method note (applies to everything below): license text was read on the original page or via the hosting repository's own API (Zenodo `/api/records`, Mendeley Data `public-api/datasets`, Hugging Face `/api/datasets`, Kaggle `/api/v1/datasets/view`, GitHub API). The shared WebSearch budget ran out early in this pass, so most discovery was done through those repository APIs, the Hamburg Compendium language pages, the ELAR catalogue's own search, and direct fetches of known dictionary sites. Several Indian/Indonesian/Nepali government and NGO sites could not be reached from here (connection reset / DNS failure / HTTP 403/503); those are marked UNVERIFIED. Tier key: A = CC BY / BY-SA / CC0 / open, may derive and redistribute; B = NC / research-only; C = register / contract / permission; D = skip (no stated license, proprietary, YouTube footage, scraped mirrors). "Fingerspelling-only" is flagged with **[FS-ONLY]**. Sizes are as reported by the repository APIs (no large downloads were made).

ISO 639-3 codes checked against the SIL code table ([iso-639-3.tab](https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3.tab)): ins Indian SL, pks Pakistan SL, wbs West Bengal SL, nsp Nepalese SL, jus Jumla SL, sqs Sri Lankan SL, dyl Bhutanese SL, tsq Thai SL, bfk Ban Khor SL, csd Chiangmai SL, hab Hanoi SL, haf Haiphong SL, hos Ho Chi Minh City SL, lso Laos SL, csx Cambodian SL, ysm Myanmar SL, xml Malaysian SL, psg Penang SL, kgi Selangor SL, inl Indonesian SL, bqy Bengkala SL (= Kata Kolok), psp Philippine SL, sls Singapore SL. **There is no ISO 639-3 code for Bangla / Bangladesh SL. "bzs" is Brazilian SL, not Bangla SL.** No codes exist for Alipur, Naga, Old Bangkok, Maldivian, Timor-Leste or Brunei SLs either.

---

## Q1. Which sources cover several languages in the region (aggregators, notation dumps, archives)?

### Takeaway
SignPuddle gives the only Tier A *notation* dumps for this region. Four puddles are big enough to matter: Singapore (1,122 entries), Philippines (905), Thailand (684) and Vietnam (647). The India, Pakistan, Nepal, Myanmar and Malaysia puddles are token-sized (5–13 entries). Asian SignBank is the richest *phonology* source: 4,750 signs from Sri Lanka, Jakarta, Yogyakarta, HCMC and Yangon, coded with Brentari-model features that can be exported to Excel. But it is all-rights-reserved and prohibits data mining, so it is Tier C (written permission). Global Signbank (Kata Kolok) and ELAR (Jumla, Alipur, Kata Kolok) are also Tier C.

### Cited Findings
- **SignPuddle puddle IDs and dump stats (HEAD + small SPML downloads, 2026-10-14).** URL pattern `https://www.signbank.org/signpuddle2.0/data/spml/sgn{ID}.spml`. Notation = SignWriting FSW strings (`M5xxx…S…`) with gloss terms. Counts below come from parsing the dumps. — [SignPuddle 2.0 puddle list](https://www.signbank.org/signpuddle2.0/index.php?ui=1)
  - sgn85 "Dictionary India": 5 entries, 2 glossed ("India", "Indian"), 1.5 KB, last-mod 2023-03-28. — [sgn85.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn85.spml)
  - sgn87 "Dictionary Pakistan": 13 entries (Roman-Urdu/English glosses such as "Mera", "school", "chahna"), 4 KB, last-mod 2024-11-15. — [sgn87.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn87.spml)
  - sgn133 "Dictionary Nepal": 5 entries ("white", "mother", "is", "Nepal", "Kathmandu"), 3 KB, 2010–2013. — [sgn133.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn133.spml)
  - sgn34 "Dictionary Thailand": 684 entries, 598 with FSW, 652 unique glosses (Thai + English, e.g. "งู"/"snake" with part-of-speech notes), 328 KB, entries dated 2008-07-25 to 2026-05-29. 577 of them came from one user (`sutthikhun.pha`). — [sgn34.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn34.spml)
  - sgn153 "Dictionary Vietnam": 647 entries, all FSW, 612 unique glosses (532 with Vietnamese diacritics, e.g. "phút", "cảm ơn"). The first two entries are "ASL sign for Vietnam". 200 KB, 2018-08-03 to 2020-07-18; main contributor `dinhcaotue03@…`. — [sgn153.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn153.spml)
  - sgn2 "Myanmar Dictionary": 5 entries (Burmese-script place names plus "Myanmar"), 2024-11. — [sgn2.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn2.spml)
  - sgn66 "Dictionary Malaysia": 6 entries ("Malaysia" ×3, "hello", plus two misfiled Vietnamese glosses "nghề", "học sinh"). — [sgn66.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn66.spml)
  - sgn72 "Dictionary Philippines": 905 entries, 901 FSW, 762 unique glosses (English: "shame", "where", "sky"…; also Bible-name entries such as "1st-Shem"), 213 KB, 2007-03-29 to 2017-11-06. — [sgn72.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn72.spml)
  - sgn11 "Singapore Sign Language (SgSL) Dictionary": 1,122 entries, all FSW, 901 unique English glosses (emotions, colours, etc.), 317 KB, 2019-12-04 to 2020-06-10. A share of the entries were submitted from Vietnamese IP ranges / the same `dinhcaotue03` account that built the Vietnam puddle. This is a provenance caveat to check before trusting them as SgSL. — [sgn11.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn11.spml)
  - sgn14 "SgSL Literature": 14 texts (e.g. "Majulah Singapura", "the Pledge", nursery songs), 71 KB. — [sgn14.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn14.spml)
  - No puddle exists for Bangladesh, Sri Lanka, Laos, Cambodia, Indonesia, Timor-Leste or Brunei. — [SignPuddle 2.0 puddle list](https://www.signbank.org/signpuddle2.0/index.php?ui=1)
- SignPuddle/SignWriting license, verbatim from SignWriting.org: "Sutton SignWriting is FREE to use! … You are WELCOME to publish books, web sites and other publications using Sutton SignWriting, under the Creative Commons Attribution-Share-Alike License. Read about it here: Creative Commons Attribution-ShareAlike 3.0" (links to creativecommons.org/licenses/by-sa/3.0/). SPDX CC-BY-SA-3.0, Tier A, commercial_ok yes (share-alike), no video (notation only). — [SignWriting.org](https://www.signwriting.org/). I found no separate license line on the puddle pages themselves. The Marionet brief's CC BY-SA 3.0 is consistent with this but was not found per-puddle.
- **Asian SignBank** (CSLDS, Chinese University of Hong Kong) covers Hong Kong, Jakarta, Yogyakarta, Japan, Sri Lanka, HCMC and Yangon. Users "can export the linguistics features of the signs, e.g., their phonetic features such as hand movement, palm orientation, and the location of the signs, into an Excel table". — [Asian SignBank welcome page](http://www.cslds.org/asb/welcome.jsp)
  - Size is 4,750 signs. Entries hold citation form, glosses, handshape, sign type (one-handed and two-handed types) and phonetic notation based on Brentari's Prosodic Model. "Advanced functions … require confirmed registration". — [Hamburg Compendium: Asian Signbank](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/asiansignbank.html)
  - Copyright notice, verbatim: "CSLDS, LIN, CUHK grants to you a worldwide non-exclusive royalty-free revocable license to: view this website … and copy and store … in your web browser cache memory … all other rights are reserved … you must not adapt, edit, change, transform, publish, republish, distribute, redistribute … without CSLDS, LIN, CUHK prior written permission. Data Mining: The automated and/or systematic collection of data from this website is prohibited. Permissions: You may request permission … by writing to asiansignbank@cslds.org". — [Asian SignBank copyright](http://www.cslds.org/asb/copyright.jsp?p=copyright&c=ALL&l=en)
  - Record: type phonology + isolated-video; SPDX LicenseRef-proprietary; Tier C; commercial_ok no; video_redistrib_ok no; disk unknown; citation Sze, Woodward, Tang et al. (2012), LREC SL workshop, pp. 155–158; next action: email asiansignbank@cslds.org asking to use the phonetic-feature Excel export for sqs/hos/ysm/Jakarta/Yogyakarta under an explicit license. — [Hamburg Compendium: Asian Signbank](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/asiansignbank.html)
- **Global Signbank, Kata Kolok dataset**: "182 public glosses, 1312 total". Media types include "SignPhon: citation form". "To view this dataset, please create an account or login." The dataset's "Copyright statement" field is empty. — [Global Signbank: Kata Kolok](https://signbank.cls.ru.nl/datasets/Kata%20Kolok)
  - The site Conditions of Use say: "The user agrees to not copy or spread any data or information found on the site, unless given permission or if the license allows it." Tier C. Citation: Lutzenberger, H. (2020), Kata Kolok Dataset in Global Signbank, Radboud University Nijmegen. — [Global Signbank conditions](https://signbank.cls.ru.nl/about/conditions/); [Compendium entry](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/katakoloksignbank.html)
  - Global Signbank holds only three datasets: EmblemsNL, Kata Kolok and NGT. Kata Kolok is the only one in scope. — [Global Signbank available datasets](https://signbank.cls.ru.nl/datasets/available)
- **ELAR** (Endangered Languages Archive) terms, verbatim: "you undertake to use any materials for private study purposes only, and you undertake not to make any further copies, nor to distribute, publish, broadcast or disseminate, any part of any material however modified without explicit written permission." That makes every ELAR deposit Tier C, even "O" (open-access) items. — [ELAR legal](https://www.elararchive.org/legal/)
- **Hamburg Compendium** language pages list only these regional lexical resources: Indian Technical SL Dictionary and SpreadTheSign (ins); SpreadTheSign (pks); Wikisigns (wbs); Asian Signbank (sqs, hos, ysm, Jakarta, Yogyakarta); Krousar Thmey Dictionary (csx); Global Signbank Kata Kolok and the Kata Kolok Corpus (bqy). — [Compendium language index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html)
- SpreadTheSign appears for ins/pks but is Tier D by Marionet policy, so it was not re-examined. — [Compendium: ins](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/ins.html)

### Inferences
- SignPuddle sgn11 / sgn72 / sgn34 / sgn153 are the only zero-negotiation notation inputs for sls, psp, tsq and Vietnamese (the puddle does not separate hab/haf/hos). The FSW strings can be converted to handshape, location and movement features without touching video. Entry quality is crowd-sourced and some entries are misfiled (Vietnamese glosses in the Malaysia puddle, Vietnamese-IP submissions in SgSL), so each puddle needs a validation pass.
- Asian SignBank is the single most valuable *phonology* target in the region: one email could unlock coded features for five languages that otherwise have nothing open.

### Gaps
- No per-puddle license line was found on SignPuddle pages; CC BY-SA 3.0 rests on the SignWriting.org statement and the Marionet brief.
- Asian SignBank per-language sign counts were not obtainable without registering.

---

## Q2. India — Indian SL / Indo-Pakistani SL (ins): ISLRTC, INCLUDE, CISLR, ISL-CSLTR, iSign, OpenHands, RKM, Talking Hands, data.gov.in

### Takeaway
The headline finding is that ISLRTC's own site links a "Dictionary Dataset" on data.gov.in: "Indian Sign Language Dictionary (till January 2024)", about 13.6k isolated citation-form videos (about 200 GB original). The data.gov.in portal licenses its content under GODL-India. GODL is an attribution-style license that explicitly permits commercial use, adaptation and redistribution, which would make this Tier A. Two caveats:
1. The ISLRTC website's own copyright policy says "may not be reproduced … without due permission".
2. GODL exempts "Personal Information", which identifiable signer videos might fall under.

The dataset-level license could not be read on the resource page because data.gov.in was unreachable from here. INCLUDE (Zenodo, CC BY 4.0 verified) is the clean Tier A fallback: 263 signs, 4,292 videos. CISLR and iSign are YouTube-scraped. Ramakrishna Mission and Talking Hands are all-rights-reserved or unlicensed.

### Cited Findings
- **ISLRTC dictionary links (official).** The islrtc.nic.in menu "ISL Dictionary" lists:
  - Dictionary Website → https://divyangjan.depwd.gov.in/islrtc/
  - Dictionary on Youtube → youtube.com/channel/UC3AcGIlqVI4nJWCwHgHFXtg
  - Dictionary on Google Drive → drive.google.com/drive/folders/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco
  - Dictionary Dataset → https://data.gov.in/catalog/indian-sign-language-dictionary
  
  — [ISLRTC homepage](https://islrtc.nic.in/)
- ISLRTC copyright policy, verbatim: "Contents of this website may not be reproduced partially or fully, without due permission from the Department of Empowerment of Persons with Disabilities. If referred to as a part of another website, the source must be appropriately acknowledged." — [ISLRTC copyright policy](https://islrtc.nic.in/copyright-policy)
- The dictionary website (archived 2026-05-21) offers search by alphabet and by category: Everyday, Academic, Agriculture, Countries, Finance and Banking, Idioms, Legal, Medical, Numbers, Regional, States and Cities, Technical. "Website Content Owned by Department of Empowerment of Persons with Disabilities". — [Wayback: divyangjan.depwd.gov.in/islrtc](http://web.archive.org/web/20260521164211/https://divyangjan.depwd.gov.in/islrtc/)
- data.gov.in footer, verbatim (archived 2024-07-14 copy of the catalog page): "The content published on data.gov.in are owned by the respective Ministry/State/Department/Organization licensed under the Government Open Data License - India". The catalog body is JS-rendered and did not show resource rows in the archive. — [Wayback: data.gov.in catalog](http://web.archive.org/web/20240714224049/https://www.data.gov.in/catalog/indian-sign-language-dictionary)
- **GODL-India** (Gazette of India Extraordinary No. 42, 13 Feb 2017, MeitY notification F.No. 8(2)/2013-EG-I) — [Gazette PDF (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Government_Open_Data_License_(India).pdf)
  - §3, verbatim: "all users are provided a worldwide, royalty-free, non-exclusive license to use, adapt, publish (either in original, or in adapted and/or derivative forms), translate, display, add value, and create derivative works (including products and services), for all lawful commercial and non-commercial purposes".
  - §4(a) Attribution: "The user must acknowledge the provider, source, and license of data by explicitly publishing the attribution statement". §4(c) adds non-endorsement.
  - §6 Exemptions: "a. Personal Information; b. Data that the data provider(s) is not authorized to license …; c. Names, crests, logos …; d. Data subject to other intellectual property rights".
  - SPDX: none, so use LicenseRef-GODL-India.
- A Hugging Face re-encode documents the data.gov.in resource: "Indian Sign Language Dictionary (till January 2024) Published by the Indian Sign Language Research and Training Centre (ISLRTC) … Hosted on: https://www.data.gov.in/resource/indian-sign-language-dictionary-till-january-2024". Original size "~200 GB", re-encoded to H.265 at "~75 GB". The mirror holds 13,665 mp4s in A–Z and Numbers folders (largest letters: C = 1,496, S = 1,404, A = 1,158). The mirror relabels the data as MIT, which is not the upstream license, so the mirror is Tier D. — [HF silentone0725/Indian_Sign_Language_Data.gov_Rencoded](https://huggingface.co/datasets/silentone0725/Indian_Sign_Language_Data.gov_Rencoded)
  - **Record, ISLRTC ISL Dictionary on data.gov.in.** ins; isolated-video (citation forms, English/Hindi keywords); about 13.6k videos; license GODL-India per portal footer (resource page UNVERIFIED: 403 from here); Tier A-pending; access: data.gov.in download; commercial_ok yes per GODL §3; video_redistrib_ok yes per GODL, but see the §6(a) personal-information caveat and ISLRTC's site policy; disk about 200 GB; citation per GODL §5 template ("ISLRTC, 2024, Indian Sign Language Dictionary till January 2024, Open Government Data Platform India, URL. Published under GODL-India"); next action: open the resource page from an Indian or unblocked network, record the license field verbatim, download a single-category sample (≤ 20 MB), and email ISLRTC (isldictionary2021[at]gmail[dot]com is listed on the dictionary site) to confirm GODL applies to the videos and signer likeness.
- **INCLUDE** (AI4Bharat). License on Zenodo: "Creative Commons Attribution 4.0 International". 4,292 videos (paper says 4,287; 5 added later), 263 word signs in 15 categories; INCLUDE-50 subset is 50 signs, 766 train / 192 test; total 56.8 GB in per-category zip parts; signers are deaf students of St. Louis School for the Deaf, Adyar, Chennai. — [Zenodo 4010759](https://zenodo.org/records/4010759)
  - Record: isolated-video; SPDX CC-BY-4.0; Tier A; commercial_ok yes; video_redistrib_ok yes (attribution); disk 56.8 GB (zips of about 1–1.8 GB each, so one category can be fetched alone); citation Sridhar, Ganesan, Kumar & Khapra (2020), ACM MM, doi:10.1145/3394171.3413528; next action: ingest one category zip (e.g. Colours or Days_and_Time) as a pilot.
  - Kaggle mirrors carry wrong relabels: `swaptr/isl-video` (56,757 MB, "CC BY-SA 4.0"), `daskoushik/include` ("Other"), `biswa13/isl-include-words-video-dataset` ("Apache 2.0"). Use the Zenodo original, not these mirrors. — [Kaggle search API results, "indian sign language" / "ISL words video"](https://www.kaggle.com/datasets?search=indian+sign+language)
- **OpenHands** (AI4Bharat): "This project is released under the Apache 2.0 license." No pose data is linked. "Please cite the respective datasets if you used them in your research. Also check the licensing terms for the dataset used." Poses are extracted by script. INCLUDE poses therefore inherit CC BY 4.0 and are not separately licensed. — [GitHub AI4Bharat/OpenHands](https://github.com/AI4Bharat/OpenHands)
- **CISLR** (IIT Kanpur, EMNLP 2022): "We create CISLR by scraping and curating data from two publicly available internet resources. The first source is … ISLRTC … Our second source is … IndianSignLanguage (www.indiansignlanguage.org) … We scrape both publicly available videos from YouTube". About 4,700 words. The HF copy is gated and tagged `license:afl-3.0` (CISLR_v1.5-a_videos.zip, 1.59 GB in total). Tier D: scraped YouTube; the AFL tag cannot override the upstream rights. — [CISLR paper (ACL Anthology)](https://aclanthology.org/2022.emnlp-main.707.pdf); [HF Exploration-Lab/CISLR API](https://huggingface.co/api/datasets/Exploration-Lab/CISLR)
- **iSign** (ACL Findings 2024): ">118K video-sentence/phrase pairs". Sources: "three publicly available and authentic resources on YouTube: ISLRTC videos …, ISH News … These YouTube channels provide permissions to scrape videos and use them for research." HF is gated with `license:cc-by-nc-sa-4.0`. Continuous-video; Tier B (research-only) with YouTube provenance; not for redistribution. — [arXiv 2407.05404](https://arxiv.org/html/2407.05404v1); [HF Exploration-Lab/iSign API](https://huggingface.co/api/datasets/Exploration-Lab/iSign)
- **Indian Technical SL Dictionary** (Ramakrishna Mission Vivekananda Educational and Research Institute, indiansignlanguage.org): 3,200 signs plus 30 fables; licence "information not available". The site returned HTTP 403 here. Tier D. — [Compendium entry](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/indiantechnicalsldict.html)
- **Talking Hands**: "© 2014-2026 Talking Hands First Sign Language Portal of India. All rights reserved." No license or terms text. Tier D. — [talkinghands.co.in](https://www.talkinghands.co.in/)
- **ISL-CSLTR** (Navajeevan signers): sentence-level continuous ISL; CC BY 4.0 (Mendeley text: "You can share, copy and modify this dataset so long as you give appropriate credit, provide a link to the CC BY license, and indicate if changes were made…"); 8,906 MB; doi:10.17632/kcmpdxky7p.1. Continuous-video; Tier A; low lexical value. — [Mendeley kcmpdxky7p](https://data.mendeley.com/datasets/kcmpdxky7p/1)
- **Other ins datasets on Mendeley, all CC BY 4.0 (Tier A, small vocabularies)** — [Mendeley Data search API](https://data.mendeley.com/research-data/?search=Indian%20sign%20language)
  - Agricultural words video, 7,879 MB, doi:10.17632/6v53kfxf46.1
  - Emergency words (8 words: accident, call, doctor, help, hot, lose, pain, thief; 26 signers), 3,372 MB, doi:10.17632/2vfdm42337.1
  - Amrita SLR, 50 signs, 7 signers, 1,465 MB, doi:10.17632/dtg9s785v8.1
  - ISLVT sentences + gloss, 2,866 MB, doi:10.17632/98mzk82wbb.1
  - "Indian Sign Language_Dataset" video + landmarks, 281 MB, doi:10.17632/yx7kdssfjp.1
  - Image-only static sets: Real-life Words (20 words, 529 MB); Common phrases (40 signs, 260 MB); Everyday phrases (44 phrases, ISL + ASL, 337 MB); Img-ISL-PICT (106 signs, 4,370 MB)
  - Depth weekdays (RealSense CSV, 6,885 MB)
  - [FS-ONLY]: Static ISL alphabet / Hindi vowels / numerals (102,470 images, 6,635 MB); ISLAN alphanumeric (2,743 MB); ISL Hand Gesture Dataset (26 signs, 612 MB)
- **Kaggle ins items with provenance problems**
  - `prasadshet/indian-sign-language-video-dataset` is MIT-labelled but "signs were sourced from the official Indian Sign Language YouTube channel". Tier D. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/prasadshet/indian-sign-language-video-dataset)
  - `atharvadumbre/indian-sign-language-islrtc-referred` is CC BY-NC-SA 4.0, 36,000 alphabet/digit images "created using the signs demonstrated on [ISLRTC] website". [FS-ONLY], Tier B. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/atharvadumbre/indian-sign-language-islrtc-referred)
- No mocap source for ins was found in any repository searched (Zenodo, Mendeley, HF, Kaggle). — [Zenodo API search](https://zenodo.org/search?q=%22sign%20language%22%20india)

### Inferences
- If GODL is confirmed on the resource page, the ISLRTC data.gov.in dictionary is by far the largest Tier A isolated-sign video lexicon in this whole region (about 13.6k entries vs INCLUDE's 263). It would also be the natural ins citation-form source for Marionet's SignDesc + hand-tuning loop.
- The GODL personal-information exemption is a genuine legal grey zone for face-visible signer video. Marionet's "clips without video" approach (deriving SignDesc, not redistributing video) reduces that exposure.

### Gaps
- Not verified (sites unreachable from this environment): the resource-level license field on data.gov.in, the resource file format and exact count; the contents and licence of the ISLRTC Google Drive folder; the "Sign Learn" app terms.
- Not found: "ISL-LEX" (no evidence it exists), FDMSE-ISL, "Signs of India", and a separate INCLUDE pose dump.

---

## Q3. Pakistan — Pakistan SL (pks): FESF PSL dictionary, PkSLMNM, PSL datasets

### Takeaway
The only large PSL lexicon is FESF's psl.org.pk ("7,500+ words"). It is "All rights reserved", so Tier C (ask FESF). Open items are small: PkSLMNM (CC BY 4.0; expressions, not lexicon), a CC BY-SA 4.0 PSL gloss lexicon on Kaggle (635 rows, no video), and an Apache-2.0 70-word landmark set. SignPuddle sgn87 has 13 entries.

### Cited Findings
- **PSL / FESF**: "Learn PSL with 7,500+ words & resources … © 2026. All rights reserved, Pakistan Sign Language, Family Educational Services Foundation (FESF)". Has a /dictionary page; no license or terms. Tier C; commercial_ok no; video_redistrib_ok no. Next action: request a written license from FESF/Deaf Reach. — [psl.org.pk](https://psl.org.pk/)
- **PkSLMNM**: "dataset that comprises manual (hand signs) and non-manual (facial expressions and body movements) gestures of Pakistan Sign Language … videos of 7 basic affective expressions performed by 100 healthy individuals". CC BY 4.0; 7,470 MB; doi:10.17632/m3m9924p3v.2; citation Javaid & Rizvi (2023), CMC 74(1). Isolated-video; Tier A; low lexical value. — [Mendeley m3m9924p3v](https://data.mendeley.com/datasets/m3m9924p3v/2)
- **Expression through Hands_PSL**: 7 PSL adjectives; CC BY 4.0; 3.5 MB; doi:10.17632/4d6tj5snkd.3. — [Mendeley 4d6tj5snkd](https://data.mendeley.com/datasets/4d6tj5snkd/3)
- **UAlpha40** (Urdu alphabet for PSL): CC BY 4.0; 5,837 MB. [FS-ONLY]. — [Mendeley 3pvnnckxyb](https://data.mendeley.com/datasets/3pvnnckxyb/1)
- **Pakistani Sign Language (PSL) Lexicon Dataset** (Kaggle): CC BY-SA 4.0. Contents: "sign_lexicon.csv | 635 | Full sign lexicon with multi-sense WSD support", plus animation_clips.csv (83 rows), word_variants.csv (1,131 rows) and test_sentences.csv (200 rows), "aligned across English, Roman Urdu, and Urdu script". Lexical-db (glosses only, no phonology); Tier A; tiny. Next action: use as the pks gloss inventory. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/shayannoorullah/pakistani-sign-language-psl-lexicon-dataset)
- **Dynamic Word-Level PSL (70 words)**: Apache 2.0; "we provide only the extracted MediaPipe landmark data"; 411 MB. Pose; Tier A. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/mohib123456/dynamic-word-level-pakistan-sign-language-dataset)
- **WLPSL**: 31 classes, 248 videos; license "Other (specified in description)" (text not found in the excerpt). UNVERIFIED. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/jahanzebnaeem/wlpsl)
- Other Kaggle PSL items, all with unstated provenance — [Kaggle search API "pakistan sign language"](https://www.kaggle.com/datasets?search=pakistan+sign+language)
  - `abdullaharif381/raw-pakistan-sign-language-videos` (CC0, 177 MB, no description)
  - `hasaniqbal777/pakistan-sign-language` (CC BY-SA 4.0, 1,127 MB)
  - `saadbutt321/…openPose` (GPL-2, 4 MB)
  - `cslrpsl2k24dataset/cslrpsl2024-dataset` (Apache 2.0, 3,929 MB, continuous)

### Inferences
- For pks, a realistic first ingest is gloss inventory (Kaggle CC BY-SA lexicon) plus SignPuddle sgn87, plus a permission request to FESF. Video-grounded lexicon at scale requires FESF.

### Gaps
- The FESF dictionary's internal structure and video hosting were not inspected; the CC0 raw PSL videos have no provenance statement.

---

## Q4. Bangladesh (Bangla SL — no ISO code) and West Bengal SL (wbs): BdSL47, BdSLW60/401, SignBD-Word, Ishara-Lipi, HamNoSys corpora, Wikisigns

### Takeaway
Bangla SL has the best open *notation* resource in the region:
- **IsharaKotha** (Mendeley, CC BY 4.0, verified): 3,823 BdSL lexical signs encoded in HamNoSys and shipped as SiGML files, which can be ingested directly. A smaller CC BY 4.0 Zenodo SiGML set adds 94 classes.
- Word-level video: SignBD-Word (CC BY-SA 4.0, 200 words). BdSLW60/BdSLW401 are CC BY-NC-ND (Tier B).
- BdSL47 is CC0 / CC BY but **fingerspelling/digits only**.

For West Bengal, Wikisigns WBSL (170 signs) is confirmed CC BY-SA 4.0 on the page.

### Cited Findings
- **IsharaKotha: Avatar-based Bangla Sign Language Corpus**: "We used the Hamburg Notation System (HamNoSys) to encode 3,823 BDSL lexical signs … collaboration with BDSL experts and the Bangladesh Standards and Testing Institution (BSTI) … converted to SiGML … 31 semantic categories … validated by two certified sign language interpreters and one native deaf signer, achieving an average quality score of 3.14 out of 4.00". 3,990 files, 3.84 MB, v2 published 2026-04-03, doi:10.17632/6ykgx65ks5.2. Licence "Creative Commons Attribution 4.0 International". Contributors: MD. Ashikul Islam, Prato Dewan, Md Fuadul Islam, Md Ataullha Saim, M Shahidur Rahman. — [Mendeley 6ykgx65ks5](https://data.mendeley.com/datasets/6ykgx65ks5/2)
  - A one-file sample check confirmed the format is `<sigml><hns_sign gloss=""><hamnosys_manual><hamflathand/><hamthumboutmod/>…`, i.e. standard HamNoSys SiGML. File names carry the Bangla gloss plus an English gloss, e.g. "অকাল (untimely).sigml". — [Mendeley file](https://data.mendeley.com/public-files/datasets/6ykgx65ks5/files/ffccc6d8-adc6-4852-a8b5-ee2af765e100/file_downloaded)
  - Record: notation (HamNoSys/SiGML); SPDX CC-BY-4.0; Tier A; commercial_ok yes; no video; disk about 4 MB; next action: **ingest first**: SiGML → HamNoSys → Marionet SignDesc. Duplicate glosses (e.g. "অজ্ঞান (Senseless)" appears twice) need de-duplication.
- **BdSL HamNoSys→SiGML 3D animation set** (Karim, 2024): "94 classes … 13 Bangla numerical … 36 Bangla alphabet … 41 Bangla word … We create 80% HamNoSys notation for BdSL and we modify the matching 20% notations". CC BY 4.0; 94 .sigml files, 45 KB total; doi:10.5281/zenodo.12152444. Notation; Tier A (mostly alphabet and numerals). — [Zenodo 12152444](https://zenodo.org/records/12152444)
- **SignBD-Word**: "6000 sign videos representing 200 unique words … full and upper-body views … along with 2D body pose information". CC BY-SA 4.0; SignBD-Word.zip 24,235 MB; doi:10.5281/zenodo.6779843; citation Sams, Akash & Rahman (2023). Isolated-video + pose; Tier A; commercial_ok yes (SA). Next action: second ingest for video-grounded tuning. — [Zenodo 6779843](https://zenodo.org/records/6779843)
- **BdSL-300**: "300 gloss classes, built by combining the existing SignBD-Word corpus … with 2,000 newly collected videos across 100 additional glosses … 8,000 videos … derivative work under the Share Alike terms". CC BY-SA 4.0; 26,249 MB. Tier A. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/hasibturjo/bdsl-300)
- **BdSLW60**: 60 words, 9,307 trials, 18 signers. "The dataset is available at https://www.kaggle.com/datasets/hasaniut/bdslw60". Kaggle license "Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)"; 25,124 MB. Tier B (ND also blocks derived clips). — [arXiv 2402.08635](https://arxiv.org/abs/2402.08635); [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/hasaniut/bdslw60)
- **BdSLW401**: "401 signs and 102,176 video samples from 18 signers in front and lateral views". Kaggle `hasanssl/bdslw401` is CC BY-NC-ND 4.0, 51,907 MB. Tier B. — [arXiv 2503.02360](https://arxiv.org/abs/2503.02360); [Kaggle search API "bangla sign language word"](https://www.kaggle.com/datasets?search=bangla+sign+language+word)
- **BdSLIG** (ICCV-W 2025): MIT-tagged. "Instruction Annotation.csv" holds step-by-step text descriptions of handshape, location, movement and facial cues (e.g. "Step 1: The right hand shapes into a loose fist with the thumb pointed upward, held static right in front of the forehead…"); 186 lines, about 55 sign folders, 30 MB. The video file names (U4W37F_trial_3_R.mp4) match BdSLW401's naming, so the videos are likely BdSLW401's (CC BY-NC-ND) and the MIT tag is credible only for the authored text. Phonology-like text; Tier A for text, Tier B for video. — [HF aplycaebous/BdSLIG](https://huggingface.co/datasets/aplycaebous/BdSLIG)
- **BdSL47** [FS-ONLY]: "10 sign digits … and 37 sign alphabet … 100 RGB images per sign … from each of 10 users … 3D coordinate values of 21 predefined key-points … stored in csv files".
  - Zenodo copy (mirroring Dryad doi:10.5061/dryad.1vhhmgqwk): license `cc-zero`, 2,830 MB .rar.
  - A Mendeley version is CC BY 4.0, 1,197 MB, doi:10.17632/pbb3w3f92y.
  - Tier A, but alphabet/digits only, so low value for a lexicon. This confirms Marionet's tier-A listing but marks it fingerspelling-only. — [Zenodo 7067906](https://zenodo.org/records/7067906); [Mendeley pbb3w3f92y](https://data.mendeley.com/datasets/pbb3w3f92y)
- **Ishara-Lipi** [FS-ONLY]: "Digits- 1000 images, Characters- 1800 images … (CDD Standared)". Kaggle copy CC BY-NC-SA 4.0 (3 MB). A Mendeley "Bangla Sign Language Dataset" (2019) with the identical counts is CC BY 4.0, doi:10.17632/hpfbpd7dvg. The licenses conflict and are probably the same data. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/ksanzid/esharalipi-bangla-sign-language-dataset); [Mendeley hpfbpd7dvg](https://data.mendeley.com/datasets/hpfbpd7dvg)
- Other CC BY 4.0 BdSL image sets (static word images, Tier A, low value) — [Mendeley Data search API](https://data.mendeley.com/research-data/?search=Bangla%20sign%20language); [Kaggle search API "bdsl"](https://www.kaggle.com/datasets?search=bdsl)
  - BdSLW-11 (11 words, 1,105 images, 3,417 MB, doi:10.17632/523d6dxz4n)
  - BdSL Words 10 (270 MB)
  - BdSL Word Image 40 words (14 MB)
  - BdSL-126 (581 MB)
  - BDSL 49 (7,921 MB)
  - RSBdSL38 (121 MB) [FS-ONLY]
  - BSL-Static-48 (9,882 MB) [FS-ONLY]
  - BDSLW131 (Kaggle, CC BY 4.0, 141,463 MB, image-based)
  - Kaggle CC0 alphabet sets BdSL-38 / BdSL-87 [FS-ONLY]
- **Wikisigns West Bengal SL**: 170 signs (citation form, Bengali keyword). The page footer reads "This work is licensed under a" with a link to creativecommons.org/licenses/by-sa/4.0. Isolated-video; SPDX CC-BY-SA-4.0; Tier A; commercial_ok yes; video_redistrib_ok yes (SA). Next action: ingest as the wbs seed. — [Wikisigns WBSL list](http://www.wikisigns.org/list/bn/wbsl); [Compendium entry](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/wikisignswestbengalsl.html)

### Inferences
- IsharaKotha is the best ready-made Marionet input found anywhere in this survey: thousands of signs, already in a phonological notation Marionet can parse, with a clean CC BY license.
- The BSTI/CDD "standard" provenance suggests it tracks the CDD Bangla SL dictionary, which can serve as a cross-check.

### Gaps
- The CDD / government "Bangla Sign Language Dictionary" itself was not located online. SignBD-Word's train/test site (sites.google.com/view/signbd-word) was not checked.

---

## Q5. Nepal (nsp), Jumla (jus), Sri Lanka (sqs), Bhutan (dyl), Maldives, Alipur, Naga

### Takeaway
Nothing open and lexical exists for nsp beyond 5 SignPuddle entries and a CC BY 4.0 **alphabet** video set (NSL23). Jumla SL has open-access wordlist videos with ELAN in ELAR, but ELAR terms make it Tier C. Sri Lanka has Asian SignBank (Tier C), SSL400 (CC BY-NC-SA, Tier B) and a CC0 Sinhala set partly sourced from YouTube. Alipur is ELAR-restricted. Nothing was found for Bhutanese, Maldivian or Naga SL.

### Cited Findings
- **NSL23**: "First publicly available dataset for Nepali Sign Language (NSL) alphabet recognition … 630 videos … 36 consonants, 13 vowels … 14 volunteers". HF license cc-by-4.0; 10.4 GB; citation Sunuwar, Borah & Kharga (2024), Data in Brief, doi:10.1016/j.dib.2024.109986. [FS-ONLY], Tier A. — [HF Titung/nepali-sign-language-video](https://huggingface.co/datasets/Titung/nepali-sign-language-video)
- Other NSL items — [Kaggle search API "nepali sign language"](https://www.kaggle.com/datasets?search=nepali+sign+language)
  - Nepali SL Character Dataset (MIT, 2,842 MB) [FS-ONLY]
  - Devanagari alphabets (MIT, 1,340 MB) [FS-ONLY]
  - "Word Based Nepali Sign Language" (license Unknown, 323 MB): Tier D
- **Jumla SL in ELAR**: project "Documenting Village Sign Languages in Nepal" (ELDP MDG1045, collection 0798-MDP1045), "documenting 3 small village sign languages in Nepal". Example item: "Bhagawati Dangi signing words from Group 2 in wordlist in Jumli Sign language", 2025-03-06, Dangibada Village, Jumla; files jus202.MP4 and jus202_20250917.eaf, both "Access : O" (open). Tier C under ELAR terms (private study only). Next action: write to the depositors/ELAR asking for a CC license on the wordlist subset. — [ELAR item](https://www.elararchive.org/uncategorized/SO_86e2ab3a-1c47-4891-848a-323c10caca33/); [ELAR legal](https://www.elararchive.org/legal/)
- **Alipur Village SL in ELAR** (PPG0039, 2008–2010): e.g. "Young boy signing kinship terms", 2011-07, "Access : S Restricted File". Tier C. — [ELAR item](https://www.elararchive.org/uncategorized/SO_eb625028-274c-41a0-a2b6-48c4a21ec907/)
- **Sri Lanka**
  - Asian SignBank LKA: Tier C (see Q1). — [Asian SignBank](http://www.cslds.org/asb/welcome.jsp)
  - **SSL400**: "384 classes … School of Computing, Informatics Institute of Technology, Colombo". CC BY-NC-SA 4.0; 1,938 MB. Isolated-video; Tier B. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/yohanabhishek/ssl400-dynamic-sri-lankan-sign-language-dataset)
  - **Sinhala Sign Language Video Dataset**: CC0; 338 videos; "Sources: Collected through public YouTube videos and private interviews with certified Sinhala Sign Language instructors". The YouTube-derived part is Tier D, so treat the whole set as D unless it can be split. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/dckahawearachchi/sinhala-sign-language-dataset)
  - Other Sinhala Kaggle sets (TDJ, Sinhala Words, Sinhala Fingerspelling) are license "Unknown": Tier D. — [Kaggle search API "sinhala sign language"](https://www.kaggle.com/datasets?search=sinhala+sign+language)
- Searches on ELAR for "Naga" returned only a spoken-language Tangsa Naga deposit; Zenodo, Mendeley, HF and Kaggle returned nothing for Bhutanese, Maldivian or Naga SL. — [ELAR search](https://www.elararchive.org/?s=Naga)

### Inferences
- Nepal: the realistic route is NDFN (Nepal National Federation of the Deaf) permission for its dictionary, plus the ELDP village-SL deposit. Neither is open today.

### Gaps
- The NDFN NSL dictionary site (ndfn.org.np) did not resolve from here. No Sri Lankan national dictionary (e.g. by the Central Council for the Deaf) was located. Bhutan's Wangsel Institute site did not resolve. The other two Nepali village SLs in MDG1045 were not identified.

---

## Q6. Thailand (tsq) plus Ban Khor (bfk), Chiang Mai (csd), Old Bangkok

### Takeaway
The national Thai SL database (th-sl.com, National Association of the Deaf in Thailand, 8,086 words) explicitly forbids reproduction without written consent: Tier C. The open first ingest is SignPuddle Thailand (684 FSW entries). TSL-51 is CC BY-NC-SA and partly "scraped". ThaiSignVis is parliament YouTube footage (Tier D). Nothing exists for Ban Khor, Chiang Mai or Old Bangkok SL.

### Cited Findings
- **Thai Sign Language Database (th-sl.com)**: "ปรับปรุงเมื่อวันที่ 9 ตุลาคม 2569 จำนวน 8,086 คำ" (updated 9 Oct 2026 [B.E. 2569], 8,086 words); "สร้างสรรค์โดย สมาคมคนหูหนวกแห่งประเทศไทย" (created by NADT); "© 2020-2021 National Assosiation of the Deaf in Thailand". — [th-sl.com](https://www.th-sl.com/)
  - Terms, verbatim Thai: "ห้ามทำซ้ำ, แก้ไข และ/หรือนำข้อมูล เนื้อหา, โปรแกรมทางคอมพิวเตอร์, รูปภาพ, วีดีโอ, เสียง, หรือภาพกราฟฟิกทั้งหลายไปเผยแพร่ อื่น โดยยังไม่ได้รับความยินยอมเป็นลายลักษณ์อักษรจาก สมาคมคนหูหนวกแห่งประเทศไทย (สหท.)". Translation: reproduction, modification or republication of content including videos is prohibited without NADT's written consent. The terms also bar bots and automated collection. — [th-sl.com terms](https://www.th-sl.com/terms-and-conditions/)
  - Record: lexical-db + isolated-video; SPDX LicenseRef-proprietary; Tier C; commercial_ok no; video_redistrib_ok no. Next action: request a license from NADT.
- **SignPuddle Thailand sgn34**: 684 entries, CC BY-SA 3.0, Tier A (see Q1). — [sgn34.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn34.spml)
- **TSL-51**: "51 specific Thai Sign Language gestures plus 1 null_act class … 76 target sentences"; contains `landmarks/expert_scraped.zip` alongside the expert recordings. HF license cc-by-nc-sa-4.0; 2.46 GB. Tier B (research). The "scraped" subset is presumably Tier D (source not stated). — [HF Namonpas/thai-sign-language-tsl51](https://huggingface.co/datasets/Namonpas/thai-sign-language-tsl51)
- **ThaiSignVis**: "A total of 153 live videos were downloaded from the [TPchannel]" (Thai parliamentary broadcasts); Apache-2.0 tag; Kaggle copy 177 GB. Continuous-video. Tier D (broadcast/YouTube footage). — [HF TOMTUN/ThaiSignVis](https://huggingface.co/datasets/TOMTUN/ThaiSignVis)
- Kaggle Thai items — [Kaggle search API "thai sign language"](https://www.kaggle.com/datasets?search=thai+sign+language)
  - "10 Word Thai Sign Language (ThSL)" (ODbL database / "Contents: © Original Authors", 4,994 MB): Tier C/D
  - "Thai Sign Language Multi Signer Dataset" (MIT, 6,585 MB, no description): unverified provenance
  - "Thai letter sign language" (Unknown) [FS-ONLY]

### Inferences
- Thai has a mature 8k-word national lexicon, so a single NADT agreement would transform coverage. Until then, SignPuddle FSW is the only derivable source.

### Gaps
- Ratchasuda College (rs.mahidol.ac.th) did not respond. Nothing was found for Ban Khor (ELAR search returned no hits), Chiang Mai, or Old Bangkok SL.

---

## Q7. Vietnam (hab / haf / hos), Laos (lso), Cambodia (csx), Myanmar (ysm)

### Takeaway
The government QIPEDC portal ("Video 4000 từ", MOET / World Bank-funded) publishes no license, so it is Tier D, or Tier C if MOET is asked. Kaggle VSL datasets "crawled" from QIPEDC inherit that and are Tier D. The open first ingest is SignPuddle Vietnam (647 FSW entries; dialect not distinguished). Asian SignBank (HCMC, Yangon) is Tier C. The Cambodian Krousar Thmey dictionary is 129 signs with no license (D). Nothing was found for Lao SL.

### Cited Findings
- **QIPEDC** (qipedc.moet.gov.vn): menu items include "Danh mục NNKH" and "Video 4000 từ" (4,000-word videos); project of the "Ban Quản lý các dự án, Bộ Giáo dục và Đào tạo" funded via the World Bank (GPRBA) in 20 provinces including Hà Nội, Tp HCM, Hải Phòng. The footer shows "Term of use Privacy & cookies Contact us", but no terms page link exists among the page's links. No license or copyright text on the home, /dictionary, /introduce, /slang1 or /videos pages; videos load dynamically. Tier D (no stated license). — [QIPEDC](https://qipedc.moet.gov.vn/)
- **QIPEDC-derived Kaggle sets**
  - `aresusayhi/vsl-vietnamese-sign-languages` (Apache 2.0 tag, 20,775 MB): "meticulously crawled and compiled from the official portal of the … QIPEDC Project". Tier D (scraped mirror). — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/aresusayhi/vsl-vietnamese-sign-languages)
  - `nguyenanfms/vsl-vietnamese-sign-language` (CC BY 4.0 tag, 22,553 MB, no description), `quangtngnndns/vls-data-collection` (CC0, 2,899 MB, no description), `theait/…full-videos-labels` (Unknown): provenance unverified, so treat as D until shown otherwise. — [Kaggle search API "vietnamese sign language"](https://www.kaggle.com/datasets?search=vietnamese+sign+language)
- **tudienngonngukyhieu.com**: "© 2022 tudienngonngukyhieu™. All Rights Reserved." It has a "Âm vị - Hình dạng bàn tay" (phoneme/handshape) section, and the fetched page also contained gambling-spam text. Tier D. — [tudienngonngukyhieu.com](https://tudienngonngukyhieu.com/)
- **SignPuddle Vietnam sgn153**: 647 entries; Tier A (see Q1). — [sgn153.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn153.spml)
- **Asian SignBank HCMC (hos) and Yangon (ysm)**: Tier C (see Q1). — [Compendium: hos](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/hos.html); [Compendium: ysm](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/ysm.html)
- **SignPuddle Myanmar sgn2**: 5 entries only. — [sgn2.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn2.spml)
- **Krousar Thmey Dictionary** (Cambodian SL): "129 signs … keyword in Khmer, French, or English, and a picture of the sign … Krousar Thmey … 2013"; licence "information not available". The hosting site footer reads "© IJS 92 - 2008. Tous droits réservés." Images; Tier D. — [Compendium entry](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/krousarthmeydictionary.html); [ijs.92.dico.free.fr](http://ijs.92.dico.free.fr/)
- Zenodo, Mendeley, HF and Kaggle queries for Myanmar, Khmer and Lao sign language returned zero relevant datasets. — [Kaggle search API "myanmar sign language"](https://www.kaggle.com/datasets?search=myanmar+sign+language)

### Inferences
- For hab/haf/hos separately, nothing is dialect-tagged; SignPuddle's Vietnam puddle and QIPEDC are both "national" VSL. A MOET request for an explicit open license on QIPEDC (a World Bank-funded public-education output) is plausible and high-value (4,000 words).

### Gaps
- Not reachable or not found: the Cambodian Deaf Development Programme dictionary, the Lao National Association of the Deaf dictionary, the Mary Chapel School (Myanmar) dictionary, and any separate Hanoi or Haiphong lexicon.

---

## Q8. Malaysia (xml) plus Penang (psg), Selangor (kgi), Brunei, and Singapore (sls)

### Takeaway
- Malaysia: the only Tier A lexical video is **MSL-Medical** (CC0, Swinburne Sarawak with Sarawak deaf societies; 9.2 GB). BIM-SIGN (117 glosses, 220 signers) is CC BY-NC (Tier B pose; video restricted). MFD's BIM Sign Bank (2,870 entries) has an open JSON API, but the videos are YouTube links and no license is stated (Tier D/C).
- Singapore: SignPuddle sgn11 (1,122 FSW entries) is the only open source. An "SgSL Signbank" could not be located.
- Nothing was found for Penang, Selangor or Brunei.

### Cited Findings
- **MSL-Medical**: "A project collaboration by Swinburne University of Technology Sarawak and Sarawak Society for the Deaf & Sarawak Deaf Community Services Association to collect an open access dataset for Malaysian Sign Language (MSL) in the Medical context … the license used is Creative Commons Zero v1.0 Universal". Kaggle 9,221 MB; GitHub repo license CC0-1.0; citation Abuan, Rahman, Abuan & Lee (2023), v1.0.0. Isolated-video (+poses per repo title "Medical Glosses and Poses"); Tier A; commercial_ok yes; video_redistrib_ok yes. Next action: first xml ingest; count glosses from the Kaggle file list. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/arkuuu21/msl-medical); [GitHub API Arekku21/MSL-Medical](https://api.github.com/repos/Arekku21/MSL-Medical); [project page](https://arekku21.github.io/MSL-Medical/)
- **BIM-SIGN Pose**: "MediaPipe Holistic skeletal pose sequences for the largest isolated word-level Malaysian Sign Language (Bahasa Isyarat Malaysia, BIM) video corpus … 117 gloss classes … 15,266 of 15,277 recorded clips … approximately 220 signers". Zenodo license cc-by-nc-4.0; 19,247 MB (keypoints_258.zip 750 MB). Pose; Tier B. — [Zenodo 21631884](https://zenodo.org/records/21631884)
- **BIM-SIGN Videos**: restricted access, cc-by-nc-4.0, 15,277 clips. Tier B/C. — [Zenodo 21635765](https://zenodo.org/records/21635765)
- **BIM Sign Bank** (bimsignbank.org, MFD with Guidewire Gives Back): a React app backed by `https://api.bimsignbank.org/api/bims`.
  - The API reports "total: 2870". Each record has Perkataan / Word / Video, e.g. "Pecat, Dibuang kerja" / "Sack, Fired" / `https://youtu.be/qa1M2WQuEtk`.
  - No license or terms text appears in the app bundle; the footer links to mymfdeaf.org.
  - Lexical-db + YouTube video; Tier D for the video, C for permission. Next action: ask MFD whether the gloss list may be reused under an open license. — [BIM Sign Bank](https://bimsignbank.org/); [API](https://api.bimsignbank.org/api/bims?pagination%5BpageSize%5D=1)
- `PishangShedappp/malaysian-sign-language-dataset-v1`: MIT; "170,000+ samples … processed using MediaPipe … (1662 features per frame)"; 367 MB; provenance not stated. Pose; Tier A on its face, but verify origin. — [HF card](https://huggingface.co/datasets/PishangShedappp/malaysian-sign-language-dataset-v1)
- `pradeepisawasan/malaysian-sign-language-msl-image-dataset`: CC BY-SA 4.0, 1,931 MB, images (content not inspected). — [Kaggle search API "malaysian sign language"](https://www.kaggle.com/datasets?search=malaysian+sign+language)
- **SignPuddle Malaysia sgn66** has 6 entries, two of them misfiled Vietnamese. **SignPuddle SgSL sgn11** has 1,122 entries and **sgn14** has 14 literature texts (see Q1). — [SignPuddle](https://www.signbank.org/signpuddle2.0/index.php?ui=1)
- `sritampatnaik/singapore-sign-language-sgsl-6-classes-x-30`: license Unknown, 356 MB. Tier D. — [Kaggle search API "singapore sign language"](https://www.kaggle.com/datasets?search=singapore+sign+language)
- The SADeaf subdomain sgsl.sadeaf.org.sg turned out to be a small React app with /qrcode, /success and /terms routes, not a sign bank. — [sgsl.sadeaf.org.sg](https://sgsl.sadeaf.org.sg/)

### Inferences
- For xml, MSL-Medical (CC0) plus SignPuddle is ingestable now. BIM-SIGN's 117-gloss pose set is excellent for motion tuning but is NC, so it is suitable for internal research tuning only if Marionet's policy allows Tier B.

### Gaps
- The NTU/SADeaf "SgSL Signbank" URL could not be identified (several candidate domains failed to resolve).
- MSL-Medical's gloss count is unknown (data is only on Kaggle).
- Nothing was found for Penang (psg), Selangor (kgi) or Brunei.

---

## Q9. Indonesia (inl: BISINDO and SIBI), Kata Kolok (bqy), Timor-Leste

### Takeaway
No Tier A citation-form *lexicon* exists for BISINDO or SIBI. The open items are:
- a CC BY 4.0 BISINDO landmark set (40 words × 60 samples);
- dozens of CC BY / CC0 **alphabet** image sets;
- WL-BISINDO (CC BY-NC 4.0, 32 Banten-variant signs).

The SIBI dictionary (Kemendikbud) domain no longer resolves. The SIBI Data in Brief set needs a DUA (Tier C). Asian SignBank Jakarta/Yogyakarta is Tier C. Kata Kolok material (Global Signbank, TLA corpus, ELAR) is all Tier C. Nothing was found for Timor-Leste.

### Cited Findings
- **BISINDO NMM landmark dataset**: "npy files which are landmarks extracted from videos captured using standard consumer-grade cameras at 30 FPS … Keypoints are extracted via MediaPipe". 40 word classes × 60 samples (Apa, Apa Kabar, Bagaimana, Baik, Belajar, … Terima Kasih, Tidur, Tinggi), plus an Indonesian-English dictionary xlsx. CC BY 4.0; 258 MB; v3 2026-10-13; doi:10.17632/yzhzkzbnmw.3. Pose (word-level); Tier A. — [Mendeley yzhzkzbnmw](https://data.mendeley.com/datasets/yzhzkzbnmw/3)
- **WL-BISINDO**: "1,600 RGB videos of 32 isolated signs, each performed by five signers from the Banten region". CC BY-NC 4.0; 2,165 MB. Tier B. The HF landmark derivative `sigawari/wl-bisindo-10class` is also cc-by-nc-4.0. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/glennleonali/wl-bisindo); [HF sigawari/wl-bisindo-10class](https://huggingface.co/datasets/sigawari/wl-bisindo-10class)
- **SIBI Dataset** (Data in Brief 2024): "based on the SIBI online dictionary issued by the Ministry of Education and Culture … 820 number videos, 520 alphabet videos, 360 affix videos, and 1400 sentence videos … we cannot share the entire video dataset … happy to share … after you understand and sign the attached Data Use Agreement (DUA)". Samples are CC BY 4.0. Tier C. — [Mendeley 44pbrbsnkh](https://data.mendeley.com/datasets/44pbrbsnkh)
- **SIBI Kemendikbud online dictionary**: `pmpk.kemdikbud.go.id/sibi/` returned "getaddrinfo ENOTFOUND". Candidate successor domains under kemendikdasmen.go.id also failed. UNVERIFIED. — [attempted URL](https://pmpk.kemdikbud.go.id/sibi/)
- **Pusbisindo**: the footer links "Kamus video Bisindo"; "©2026 pusbisindo"; no license. Tier C/D. — [pusbisindo.org](https://www.pusbisindo.org/)
- "BISINDO Video Dataset" (Mendeley f33k9w86wr, CC BY 4.0, 110 MB) actually holds 2,113 jpg files, not video. Low value. — [Mendeley f33k9w86wr](https://data.mendeley.com/datasets/f33k9w86wr/3)
- Alphabet-only BISINDO/SIBI sets [FS-ONLY], mostly CC BY 4.0 on Mendeley or CC0/CC BY/NC on Kaggle — [Mendeley Data search API](https://data.mendeley.com/research-data/?search=BISINDO); [Kaggle search API "bisindo"](https://www.kaggle.com/datasets?search=bisindo)
  - Mendeley: p7j5jrsbbb (838 MB), ywnjpbcz8m (8,553 MB), yhsgmynccf (1,712 MB), xdn2gj38xf, 4xnkvr88tk, 235c78xbmk (1,950 MB)
  - Kaggle: achmadnoer/alfabet-bisindo (CC0)
  - Zenodo 21338857 redistributes two Kaggle letter sets under a cc-by-4.0 tag although the originals are "Unknown". — [Zenodo 21338857](https://zenodo.org/records/21338857)
- Kaggle word-level BISINDO/SIBI, provenance unverified — [Kaggle search API "sibi sign language"](https://www.kaggle.com/datasets?search=sibi+sign+language)
  - `anggiyohanespardede/bisindo-40-kata-mp4` (MIT, 754 MB)
  - `mfadhilahakbarr/bisindo-raw-annotated` (CC BY 4.0, 1,910 MB)
  - `rickyarmnd/sign-language` "Sibi Word" (Unknown, 4,050 MB)
- **Kata Kolok Corpus** (MPI, Connie de Vos): "50.5 hours of signing … 47 deaf signers … ELAN … Licence information not available … Open access to 16 files via The Language Archive, Restricted access to 370 files", hdl:1839/58506aa9-8122-48bf-93b1-f353a2d65ab1. Continuous-video; Tier C. — [Compendium: Kata Kolok Corpus](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/katakolokcorpus.html)
- **Kata Kolok acquisition deposit (ELAR SG0140)**: "Access Restrictions : child and sign language data is restricted due to population sensitivity". Tier C. — [ELAR item](https://www.elararchive.org/uncategorized/SO_90c6592a-3162-483b-bdcb-1c4e37dbc7b6/)
- **Kata Kolok in Global Signbank**: 1,312 glosses, 182 public, login required. Tier C (see Q1). Phonological reference: Lutzenberger, de Vos, Crasborn & Fikkert (2021), "Formal variation in the Kata Kolok lexicon", Glossa 6(1), doi:10.16995/glossa.5880. — [Global Signbank: Kata Kolok](https://signbank.cls.ru.nl/datasets/Kata%20Kolok)

### Inferences
- For BISINDO, Marionet's best near-term move is the CC BY 4.0 40-word landmark set plus an Asian SignBank permission request covering both Jakarta and Yogyakarta. Kata Kolok should not be ingested without community-sensitive permission; the archives explicitly flag population sensitivity.

### Gaps
- Not located: the LSLI / Universitas Indonesia "BISINDO Signbank" (no URL found). The current SIBI dictionary host is unknown. No Timor-Leste SL dictionary or dataset was found in any repository searched.

---

## Q10. Philippines (psp): FSL dictionaries, FSL-105, De La Salle corpus

### Takeaway
FSL-105 is confirmed CC BY 4.0 on Mendeley (105 signs, 2,130 clips, 379 MB) and is the first video ingest. SignPuddle Philippines (905 FSW entries) is the notation ingest. The PFD and FSL-dictionary websites sit behind bot-challenge redirects and could not be read.

### Cited Findings
- **FSL-105**: "FSL-105 is a dataset for 105 different Filipino Sign Language signs. The dataset contains 2130 4-second video clips." Licence "Creative Commons Attribution 4.0 International" (Mendeley text quoted in Q2). Files: clips.zip 379.1 MB plus labels / train / test CSVs; doi:10.17632/48y2y99mb9.2; contributor Isaiah Jassen Tupal. Isolated-video; SPDX CC-BY-4.0; Tier A; commercial_ok yes; video_redistrib_ok yes. Next action: ingest first. — [Mendeley 48y2y99mb9](https://data.mendeley.com/datasets/48y2y99mb9/2)
  - SEACrowd's loader lists it as "Creative Commons Attribution 4.0 (cc-by-4.0)", with signs "performed by adult deaf FSL signers on a blank blue background and reviewed by an FSL expert"; citation Tupal & Cabatuan, "FSL105: The Video Filipino Sign Language Sign Database of Introductory 105 FSL Signs". — [HF SEACrowd/fsl_105](https://huggingface.co/datasets/SEACrowd/fsl_105)
- **Transactional Filipino Sign Language Dataset**: "1,065 .npy coordinates … 26 distinct classes including numbers (1–10) and common transactional phrases: Yes, No, Thank You, … Receipt, Discount, Hello, and Problem". CC BY 4.0; 150 MB; doi:10.17632/jdyrr7cm4z.2. Pose; Tier A. — [Mendeley jdyrr7cm4z](https://data.mendeley.com/datasets/jdyrr7cm4z/2)
- **SignPuddle Philippines sgn72**: 905 entries, CC BY-SA 3.0, Tier A (see Q1). — [sgn72.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn72.spml)
- `Golgrax/bisig-fsl-dataset`: Kaggle "Apache 2.0", 101 KB. The HF copy lists 9,819 mp4 names such as "1 thousand to 1 trillion.mp4" and "1,000.mp4" and notes the videos are hosted elsewhere. The names look like dictionary-entry titles, so provenance is likely scraped. Tier D until shown otherwise. — [Kaggle API view](https://www.kaggle.com/api/v1/datasets/view/golgrax/bisig-fsl-dataset); [HF Golgrax/bisig-fsl-dataset](https://huggingface.co/datasets/Golgrax/bisig-fsl-dataset)
- Kaggle `tartdrop/fsl-words-letters` (CC0, 572 MB) and `japorton/fsl-dataset` (CC0, 141 MB): no descriptions, content unverified. — [Kaggle search API "filipino sign language"](https://www.kaggle.com/datasets?search=filipino+sign+language)
- pfd.org.ph, www.pdrc.org.ph and www.fsldictionary.ph all returned a JavaScript "Redirecting…" bot-challenge page, so no terms could be read. — [pfd.org.ph](https://pfd.org.ph/)

### Inferences
- FSL-105 plus SignPuddle sgn72 give psp both a video-grounded seed (105 signs) and a notation seed (about 760 glosses) under clean licenses.

### Gaps
- Not verified: the PFD FSL dictionary, the PDRC dictionary, and the De La Salle–College of St. Benilde FSL corpus (no URL or terms found).

---

## Q11. Recommended first ingest per language; languages with nothing usable; dead ends

### Takeaway
Ready-now Tier A ingests:
- **Bangla SL**: IsharaKotha, 3,823 HamNoSys/SiGML signs, CC BY 4.0 (best in the region).
- **ins**: INCLUDE, CC BY 4.0. The ISLRTC data.gov.in dictionary under GODL is pending page-level verification.
- **wbs**: Wikisigns, CC BY-SA 4.0.
- **psp**: FSL-105, CC BY 4.0, plus SignPuddle sgn72.
- **sls / tsq / Vietnamese**: SignPuddle sgn11 / sgn34 / sgn153.
- **xml**: MSL-Medical, CC0.
- **inl (BISINDO)**: 40-word landmark set, CC BY 4.0.
- **pks**: CC BY-SA gloss lexicon.

Everything else needs permission (Asian SignBank, NADT, FESF, MFD, MOET, ELAR, Global Signbank) or has nothing at all.

### Cited Findings
- Recommended first ingest per language, with backing evidence in the sections above:
  - ins → INCLUDE one-category pilot (CC BY 4.0). In parallel, verify the data.gov.in resource license and then pull the ISLRTC dictionary. — [Zenodo 4010759](https://zenodo.org/records/4010759); [GODL Gazette](https://commons.wikimedia.org/wiki/File:Government_Open_Data_License_(India).pdf)
  - pks → Kaggle PSL Lexicon (CC BY-SA 4.0) plus SignPuddle sgn87; email FESF. — [Kaggle](https://www.kaggle.com/api/v1/datasets/view/shayannoorullah/pakistani-sign-language-psl-lexicon-dataset)
  - Bangla SL → IsharaKotha SiGML (CC BY 4.0), then SignBD-Word video (CC BY-SA 4.0). — [Mendeley 6ykgx65ks5](https://data.mendeley.com/datasets/6ykgx65ks5/2); [Zenodo 6779843](https://zenodo.org/records/6779843)
  - wbs → Wikisigns WBSL (CC BY-SA 4.0). — [Wikisigns](http://www.wikisigns.org/list/bn/wbsl)
  - nsp → SignPuddle sgn133 (5 entries) only; NSL23 is alphabet-only. Contact NDFN. — [HF NSL23](https://huggingface.co/datasets/Titung/nepali-sign-language-video)
  - jus → none open; request a license on the ELAR MDG1045 wordlist. — [ELAR item](https://www.elararchive.org/uncategorized/SO_86e2ab3a-1c47-4891-848a-323c10caca33/)
  - sqs → none Tier A; Asian SignBank permission; SSL400 is Tier B. — [Kaggle SSL400](https://www.kaggle.com/api/v1/datasets/view/yohanabhishek/ssl400-dynamic-sri-lankan-sign-language-dataset)
  - tsq → SignPuddle sgn34; request from NADT th-sl.com. — [th-sl.com terms](https://www.th-sl.com/terms-and-conditions/)
  - Vietnamese (hab/haf/hos undifferentiated) → SignPuddle sgn153; request an open license from MOET for QIPEDC. — [QIPEDC](https://qipedc.moet.gov.vn/)
  - xml → MSL-Medical (CC0); BIM-SIGN Pose is Tier B. — [Kaggle MSL-Medical](https://www.kaggle.com/api/v1/datasets/view/arkuuu21/msl-medical)
  - sls → SignPuddle sgn11, after validating provenance. — [sgn11.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn11.spml)
  - psp → FSL-105 plus SignPuddle sgn72. — [Mendeley 48y2y99mb9](https://data.mendeley.com/datasets/48y2y99mb9/2)
  - inl (BISINDO) → Mendeley yzhzkzbnmw landmarks; Asian SignBank Jakarta/Yogyakarta permission. — [Mendeley yzhzkzbnmw](https://data.mendeley.com/datasets/yzhzkzbnmw/3)
  - SIBI → none open (DUA dataset; ministry dictionary unreachable). — [Mendeley 44pbrbsnkh](https://data.mendeley.com/datasets/44pbrbsnkh)
  - bqy (Kata Kolok) → none open; Global Signbank / TLA / ELAR all Tier C. — [Global Signbank](https://signbank.cls.ru.nl/datasets/Kata%20Kolok)
  - ysm → none open beyond SignPuddle sgn2 (5 entries); Asian SignBank Yangon permission. — [Asian SignBank](http://www.cslds.org/asb/welcome.jsp)
  - csx → none usable (Krousar Thmey has no license). — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/krousarthmeydictionary.html)
- **Languages with nothing usable (no Tier A or B lexical source found)**: Lao SL (lso), Cambodian SL (csx), Myanmar SL (ysm, except 5 FSW entries), Bhutanese SL (dyl), Maldivian SL, Jumla SL (jus, Tier C only), Alipur SL (Tier C only), Naga SL, Ban Khor SL (bfk), Chiangmai SL (csd), Old Bangkok SL, Hanoi (hab) and Haiphong (haf) as distinct varieties, Penang SL (psg), Selangor SL (kgi), Brunei SL, Timor-Leste SL, Kata Kolok (bqy, Tier C only), SIBI (Tier C only), Sri Lankan SL (sqs; Tier B/C only). — [Zenodo API](https://zenodo.org/search?q=%22sign%20language%22); [Kaggle search API](https://www.kaggle.com/datasets?search=sign+language); [ELAR search](https://www.elararchive.org/?s=sign+language)
- **Dead ends and their reasons**
  - Unreachable from here: data.gov.in (HTTP 503/403), divyangjan.depwd.gov.in (connection failure), pmpk.kemdikbud.go.id (DNS), ndfn.org.np, rs.mahidol.ac.th, wangsel.edu.bt and the SgSL Signbank candidate domains (no response), and pfd.org.ph / fsldictionary.ph (bot-challenge).
  - indiansignlanguage.org: HTTP 403, and its licence is "not available" per the Compendium.
  - All-rights-reserved: Talking Hands, psl.org.pk, th-sl.com, tudienngonngukyhieu.com, Asian SignBank.
  - YouTube- or scrape-derived: CISLR, iSign, ThaiSignVis, QIPEDC mirrors, BIM Sign Bank videos, prasadshet ISL.
  - Mirrors that relabel licenses: Kaggle INCLUDE mirrors; the HF data.gov.in re-encode tagged MIT.
- **Mocap**: no motion-capture dataset for any in-scope language was found on Zenodo, Mendeley, HF or Kaggle. The closest substitutes are MediaPipe pose sets: BIM-SIGN Pose (Tier B), BdSL47 CSV keypoints [FS-ONLY], Transactional FSL npy, BISINDO landmarks, PSL 70-word landmarks and SignBD-Word 2D pose. — [Zenodo 21631884](https://zenodo.org/records/21631884)

### Inferences
- **Priority permission emails (largest unlock per request):**
  1. Asian SignBank: 5 languages with phonology coding.
  2. ISLRTC: confirm GODL for about 13.6k videos.
  3. NADT Thailand: 8,086 words.
  4. MOET Vietnam / QIPEDC: about 4,000 words.
  5. FESF Pakistan: 7,500+ words.
  6. MFD Malaysia: 2,870 entries.
- **Notation-first languages:** for Bangla SL, Marionet can skip video entirely in the first pass (IsharaKotha HamNoSys), which matches its "clips without video" approach. For sls, psp, tsq and Vietnamese, SignPuddle FSW plays the same role, at lower quality.

### Gaps
- The WebSearch budget was exhausted early, so these could not be confirmed:
  - whether FDMSE-ISL, "ISL-LEX", "Signs of India", a De La Salle FSL corpus, an LSLI BISINDO Signbank, or a Timor-Leste SL dictionary exist online, and under what terms;
  - the current hosts of the SIBI and NDFN dictionaries.
- Kaggle file listings need authentication, so several CC0 / CC BY Kaggle datasets with empty descriptions (Vietnamese, Filipino, Thai, PSL) could not be checked for provenance. They should be treated as unverified.

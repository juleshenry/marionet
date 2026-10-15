# Sign language dictionary sources: Middle East and North Africa (MENA)

Scope: Israeli SL (isr), Al-Sayyid Bedouin SL (syy), Kafr Qasem SL (sqx), Palestinian, Jordanian (jos), Lebanese, Syrian, Iraqi, Saudi (sdl), Emirati, Qatari, Kuwaiti, Bahraini, Omani, Yemeni (yms), Unified Arab SL (LAU/CAMSA dictionary), Persian/ZEI (psc), Kurdish, Afghan (afg), Egyptian (esl), Libyan (lbs), Tunisian (tse), Algerian (asp), Moroccan (xms), Ghardaia / Algerian Jewish SL (ajs), Sudanese. Turkish SL is covered elsewhere.

Research date: 2026-10-14. Method notes:
- Licenses were read from the original repository metadata wherever possible: the OSF API, the Mendeley Data public API (`data_licence` field), the Zenodo records API, the Hugging Face dataset API and cards, GitHub repo license and LICENSE files (via `gh`), and the Kaggle public API (`licenseName`).
- The shared WebSearch budget ran out after about 25 queries. After that, coverage came from those repository-native catalog APIs (Mendeley, Zenodo, HF, GitHub, Kaggle searches), the Hamburg Sign Language Dataset Compendium, the sign-lang@LREC Anthology, and fetches of known pages. This limits coverage of print and national dictionaries for several Arab states (see Gaps).
- Only small files (<2 MB) were downloaded to inspect structure: the ISL-LEX CSV, SignPuddle SPML dumps, MoSL/MSL/ESL metadata CSVs, the KuSL lexicon text, and one HF xlsx. Zip contents of large Zenodo archives were listed through HTTP range reads of the zip central directory, without downloading the archives.
- Field legend per record: **lang (ISO)** · **URL** · **type** · **size** · **license (verbatim)** · **SPDX** · **tier** · **access** · **commercial_ok** · **video_redistrib_ok** · **disk** · **citation** · **next action**.

---

## Q1. National dictionaries, lexicons and lexical datasets, per language (licenses verified at source)

### Takeaway
Only a handful of MENA sources pass the Tier A gate with real lexical value:
- **ISL-LEX v1** (Israeli SL): 961 signs × 40 phonological fields, data CC BY 4.0 on OSF.
- **SignPuddle Tunisia sgn104**: 4,519 SignWriting entries.
- **3DZSignDB** (Algerian SL): 419 HamNoSys/SiGML signs. Zenodo says CC BY 4.0, but the zip ships a GPL-3.0 file.
- **SignPuddle Saudi sgn40** (401 entries) and **Egypt sgn84** (111 entries).
- Small CC0 or CC BY isolated-video, image and landmark sets for Egyptian, Persian, Tunisian and Yemeni.

The largest isolated-sign video lexicons (KArSL-502 for Saudi/Unified ArSL, MoSL for Moroccan, ISLR101 for Persian, ESL127 for Emirati, OSLT for Omani) have **no stated license** or are request-only, so they are Tier C/D. Isharah (Saudi, continuous) is Tier B (NC-ND, no redistribution).

### Cited Findings

#### Israeli Sign Language (isr)
- **ISL-LEX v1, data CSVs (OSF)**
  - lang: Israeli SL (isr)
  - URL: https://osf.io/jmwyx/
  - type: phonology spreadsheet + lexical-db, with Vimeo links to isolated citation videos
  - size: 961 signs; CSVs of 961 records × 52 fields, including 40 phonological fields
  - license (verbatim, OSF license object): "CC-By Attribution 4.0 International"
  - SPDX: CC-BY-4.0
  - tier: **A (data)**; videos C
  - access: direct download (English CSV https://osf.io/download/bzk6a/ 353,217 B; Hebrew CSV https://osf.io/download/vbnmh/ 733,705 B)
  - commercial_ok: yes (data)
  - video_redistrib_ok: no (no video license stated)
  - disk: ~1.1 MB
  - citation: Morgan, Sandler, Stamp & Novogrodsky (2022), "ISL-LEX v.1: An Online Lexical Resource of Israeli Sign Language", LREC2022 SignLang workshop
  - next: **ingest first** (map phonology fields to SignDesc)
  - sources: [OSF API node](https://api.osf.io/v2/nodes/jmwyx/); [OSF license object](https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/); [OSF files](https://osf.io/jmwyx/)
- The OSF project describes itself: "Identical datasets in English and Hebrew of 961 signs in Israeli Sign Language, which contain phonological properties, subjective frequency ratings, and iconicity ratings." — [OSF API](https://api.osf.io/v2/nodes/jmwyx/)
- Verified CSV columns (row 2 holds the real field names; row 1 is numeric 1–52):
  - Identification and media: Master Index, English Gloss, Hebrew Gloss, Compound, Vimeo Link, Video Name
  - Ratings: Subjective Frequency, Iconicity Rating Native/NonNative
  - Handshape: Number of hands, Handshape Dominant (+JPG), Ending Dominant Handshape, Handshape Non-Dominant, Initialized Sign, Selected Fingers, Flexion, Spread Stacked, Thumb Position, Thumb Contact
  - Symmetry and orientation: Symmetry of Moving Hands/Handshape, Hands Crossed or Connected, Palm Orientation, Finger Direction
  - Location: Contact, Contact Type, Major Area, Location 1/2, Laterality
  - Movement: Path Movement, Path Shape 1/2, Axis of Path Movement 1/2, Setting Change 1/2, Handshape Change (+Type), Orientation Movement (+Type), Syllables, Repeated Exact, Alternating, Bidirectional/Unidirectional, Displaced Iteration, Switch Dominance, Switch Orientation, Trill
  - Sources: [OSF CSV](https://osf.io/download/bzk6a/); [ISL-LEX paper](https://www.sign-lang.uni-hamburg.de/lrec/pub/22019.pdf)
- **License conflict:**
  - The Hamburg Compendium lists ISL-LEX as "CC BY-NC 4.0" — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/isllex.html).
  - The ISL-LEX paper PDF carries "© European Language Resources Association (ELRA), licensed under CC-BY-NC 4.0", which is the license of the *paper* — [paper PDF](https://www.sign-lang.uni-hamburg.de/lrec/pub/22019.pdf).
  - The OSF data deposit is CC BY 4.0 — [OSF](https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/).
  - The landing site shows no license — [ISL-LEX site](https://sites.google.com/view/isl-lex).
- **Video provenance:** "The videos of signs in the ISL-LEX interface are stored in Vimeo… Most of the videos, 798 out of 961, originate from the IADPI video dictionary of ISL… the other 163 videos were filmed at the University of Haifa for… the 'BIBI' project." — [ISL-LEX paper](https://www.sign-lang.uni-hamburg.de/lrec/pub/22019.pdf)
- The ISL-LEX signs come from 467 ISL-CDI signs and 494 signs drawn randomly from a master list of 4,233 IADPI dictionary signs. — [ISL-LEX paper](https://www.sign-lang.uni-hamburg.de/lrec/pub/22019.pdf)
- **ISL Dictionary (IADPI / Ma'agale Shema)**
  - lang: isr
  - URLs: original isl.org.il (offline); hosted by Ma'agale Shema
  - type: isolated-video dictionary (citation forms; Hebrew and English keywords)
  - size: master list of about 4,233 signs (per ISL-LEX paper)
  - license: "information not available"
  - SPDX: NOASSERTION
  - tier: **C**
  - access: browse only
  - commercial_ok: no
  - video_redistrib_ok: no
  - next: email Ma'agale Shema / Haifa lab for permission covering the 798 ISL-LEX videos and the full list
  - sources: [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/islonlinedict.html); [ISL-LEX paper](https://www.sign-lang.uni-hamburg.de/lrec/pub/22019.pdf)
- **isl.danfishgold.com / github.com/danfishgold/isl**
  - What it is: a third-party mirror built by a scraper that queries `http://isl.org.il/wp-admin/admin-ajax.php` with `action: search_video`. The repo has no license.
  - tier: **D** (scraped mirror)
  - sources: [GitHub dictionary_builder.py](https://github.com/danfishgold/isl); [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/islonlinedict.html)
- **Global Signbank, ISL dataset**
  - "0 public glosses, 2279 total"
  - Owner Rose Stamp
  - Copyright statement: "Not accessible to others at this stage."
  - tier: **C** (watch for release)
  - Global Signbank's general conditions say "The user agrees to not copy or spread any data or information found on the site," and data is "licensed according to the license specified for that dataset."
  - sources: [Signbank ISL](https://signbank.cls.ru.nl/datasets/ISL); [Signbank conditions](https://signbank.cls.ru.nl/about/conditions/)
- **Corpus of Israeli Sign Language**
  - lang: isr
  - URLs: https://osf.io/yma98/ (public) and islcorpus.co.il (DNS lookup failed on 2026-10-14)
  - type: continuous-video corpus plus annotations
  - contents: public OSF components for "Lexical elicitation files" (ELAN .eaf files, e.g. B01_LET.eaf), narratives, depicting constructions and lexical-distance code
  - license: none set on the OSF node
  - tier: **D** as published (no license); C on request
  - next: ask Rose Stamp (Bar-Ilan) for the license of the lexical-elicitation EAFs and videos
  - sources: [Anthology entry](https://www.sign-lang.uni-hamburg.de/lrec/data/israelislcorpus.html); [OSF API](https://api.osf.io/v2/nodes/yma98/)
- **SignPuddle "Dictionary Israel" (sgn=110)**
  - 36 entries, 29 with SignWriting
  - Glosses include "Kaddish" and "Hatikva"; most edits come from user "sutthikhun.pha" (2022)
  - SPML: 11,674 B
  - Quality looks doubtful (prayers and anthem, test-like entries)
  - tier: A per coordinator brief (license not re-verified, see Q2)
  - next: skip
  - sources: [SignPuddle index](https://www.signbank.org/signpuddle2.0/index.php?ui=1); [SPML](https://www.signbank.org/signpuddle2.0/data/spml/sgn110.spml)
- **Kaggle "Israeli sign language" (yardenrozen1)**
  - Letter images (DataSet/A/A1.jpg …), 783 MB
  - Kaggle license "Unknown"
  - fingerspelling-only; tier **D**
  - source: [Kaggle](https://www.kaggle.com/datasets/yardenrozen1/israeli-sign-language)

#### Al-Sayyid Bedouin Sign Language (syy)
- No lexical database, Signbank dataset, Compendium entry or ELAR deposit was found.
- Wikipedia lists only the Haifa lab page (https://signlab.haifa.ac.il/index.php/2013-01-15-07-03-14/56-absl-1) and catalog entries (Ethnologue, ELP, Glottolog). It mentions no ELAR or CRL archive. — [Wikipedia ABSL](https://en.wikipedia.org/wiki/Al-Sayyid_Bedouin_Sign_Language)
- The Endangered Languages Project names the Haifa Sign Language Research Lab (Sandler, Meir, Padden, Aronoff) as the research home base. — [ELP](https://endangeredlanguages.com/lang/6998/samples/8388)
- The Compendium language index has no ABSL entry. — [Compendium languages](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html)
- tier: nothing usable
- next: contact the Sandler lab (Haifa) about any ABSL lexicon or video archive and its terms

#### Kafr Qasem Sign Language (sqx)
- **Kafr Qasem SL Dictionary (Univ. of Haifa)**
  - lang: sqx
  - URL: https://signlab.haifa.ac.il/2024/04/14/kafr-qasem-sign-language-dictionary/
  - type: isolated-video dictionary (citation forms, Hebrew and English keywords)
  - size: 268 signs
  - license: "Not available in the source"; the page has no license, only the theme footer "Copyright - OceanWP Theme by OceanWP"
  - SPDX: NOASSERTION
  - tier: **C**
  - access: browse only
  - commercial_ok: no
  - video_redistrib_ok: no
  - next: request from the Haifa lab
  - sources: [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/kafrqasemsldict.html); [Haifa page](https://signlab.haifa.ac.il/2024/04/14/kafr-qasem-sign-language-dictionary/)
- The Corpus of ISL catalogue entry lists KQSL among its languages, but the corpus targets ISL. — [Anthology sqx](https://www.sign-lang.uni-hamburg.de/lrec/language/sqx.html)

#### Ghardaia / Algerian Jewish Sign Language (ajs)
- **AJSL Dictionary (Univ. of Haifa)**
  - lang: Algerian Jewish SL (ajs; emerged in Ghardaia)
  - URL: https://signlab.haifa.ac.il/2013/10/15/ajsl-1
  - type: isolated-video dictionary
  - size: 470 signs per the Compendium. The lab page says the project prepared about 500 words and that the published list is "only a partial list".
  - license: "information not available"
  - tier: **C**
  - commercial_ok: no
  - video_redistrib_ok: no
  - next: request from the Haifa lab
  - sources: [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/ajsldict.html); [Haifa page](https://signlab.haifa.ac.il/2013/10/15/ajsl-1)
- Lanesman (2016), *Algerian Jewish Sign Language: its emergence and survival* (Ishara Press), is an open-access PDF on OAPEN. It is a reference grammar and sociolinguistic description, not a dataset. Book license not checked. — [OAPEN](https://library.oapen.org/handle/20.500.12657/32925)

#### Palestinian Sign Language
- Wikipedia mentions "the publication of a Palestinian Sign Language (LIF) dictionary by the Ramallah-based Benevolent Society for the Deaf" and an "official educational LIF dictionary" that "only contains signs up through the seventh grade syllabus". No digital or licensed version was found. — [Wikipedia Levantine ArSL](https://en.wikipedia.org/wiki/Levantine_Arabic_Sign_Language)
- No Mendeley, Zenodo, HF or Kaggle datasets. The GitHub hits are app repos without data, e.g. [yarashaheen222-max/signbridge-ai](https://github.com/yarashaheen222-max/signbridge-ai).
- tier: **nothing usable**

#### Jordanian Sign Language (jos)
- **SignPuddle "Dictionary Jordan" (sgn=86)**: 31 entries, 25 with SignWriting, 18 unique Arabic glosses; SPML 7,690 B (Last-Modified 2026-08-15). **"Literature Jordan" (sgn=92)**: 1 entry. tier: A per brief (license unverified). Trivial size. — [SignPuddle index](https://www.signbank.org/signpuddle2.0/index.php?ui=1); [SPML sgn86](https://www.signbank.org/signpuddle2.0/data/spml/sgn86.spml)
- Wikipedia: "A dictionary of 500 LIU signs was published in 2006", citing Hendriks 2007. It is print, with no title, publisher or license. — [Wikipedia Levantine ArSL](https://en.wikipedia.org/wiki/Levantine_Arabic_Sign_Language)
- **Signly (emannjoum/arabic-to-sign-language-system)**: Apache-2.0 code for Arabic→Jordanian SL. "The animated skeletons used in the outputs were generated from human-signer videos using MediaPipe". There are no dataset files in the repo (76 files: code, notebooks, images), and the video source is unstated. tier: D for data (none published). — [GitHub](https://github.com/emannjoum/arabic-to-sign-language-system)
- No Jordanian dataset was found on Mendeley, Zenodo, HF or Kaggle (repository API searches, see Q4).

#### Lebanese Sign Language
- **Labeeb (zeinshehab/Labeeb)**: Apache-2.0 translator app (Arabic alphabet focus). It contains 14 CSVs and keras models. Effectively fingerspelling and landmark training data; provenance undocumented. tier: low value. — [GitHub](https://github.com/zeinshehab/Labeeb)
- Wikipedia names no Lebanese dictionary. — [Wikipedia Levantine ArSL](https://en.wikipedia.org/wiki/Levantine_Arabic_Sign_Language)
- tier: **nothing usable (lexical)**

#### Syrian Sign Language
- Only a code stub exists (yumnaAlshalak/Syrian-sign-language: README plus one .py). — [GitHub](https://github.com/yumnaAlshalak/Syrian-sign-language)
- Wikipedia names no Syrian dictionary. — [Wikipedia Levantine ArSL](https://en.wikipedia.org/wiki/Levantine_Arabic_Sign_Language)
- tier: **nothing usable**

#### Iraqi Sign Language
- **ArSL-Wear20 (Zenodo 22050379)**
  - URL: https://zenodo.org/records/22050379
  - type: glove sensor data (IMU, flex, contact), not video
  - size: 9,400 measurements of 94 *static* ArSL signs from 10 participants
  - creator: University of Tikrit (Iraq)
  - license: Zenodo `cc-by-4.0`
  - SPDX: CC-BY-4.0
  - tier: A
  - disk: 75.6 MB
  - Caveat: labelled "Arabic Sign Language", Iraqi variety not stated; static handshapes only
  - next: optional handshape reference
  - source: [Zenodo API](https://zenodo.org/api/records/22050379)
- Iraqi research datasets mentioned in papers (a 2025 IASJ paper with "the first fully-labeled dataset for the Iraqi sign language"; Univ. of Baghdad CNN work; Brunel/BBK alphabet images with Al-Amal Institute) were not found released. — search results: [IASJ PDF](https://iasj.rdd.edu.iq/journals/uploads/2025/01/24/0def431f296d00410d880c5a93c61b18.pdf); [BBK preprint](https://eprints.bbk.ac.uk/id/eprint/48306/3/48306.pdf) (not fetched)
- tier: **nothing usable (lexical)**

#### Saudi Sign Language (sdl)
- **SignPuddle "Dictionary Saudi Arabia" (sgn=40)**
  - URL: https://www.signbank.org/signpuddle2.0/data/spml/sgn40.spml
  - type: notation (SignWriting FSW)
  - size: 401 entries, 392 with an FSW sign, 366 unique Arabic glosses. The vocabulary is heavily religious (e.g. اعوذ, الله, تفسير); contributors include m_abushaira.
  - SPML: 94,241 B (Last-Modified 2023-11-08)
  - license: per brief CC BY-SA 3.0 (not re-verified, see Q2)
  - tier: **A**
  - access: direct download
  - commercial_ok: yes (SA)
  - video_redistrib_ok: n/a
  - disk: 94 KB
  - next: **ingest** (FSW→SignDesc)
  - "Literature Saudi Arabia" (sgn=91) has only 6 entries.
  - sources: [SignPuddle index](https://www.signbank.org/signpuddle2.0/index.php?ui=1); [sw-l 2012](https://listserv.linguistlist.org/pipermail/sw-l/2012-April/025407.html)
- **KArSL (KFUPM)**
  - lang: Saudi signers performing the Unified ArSL dictionary vocabulary ("eleven ArSL dictionary chapters": Letters, Numbers, Health, Common verbs, Family, …)
  - URL: https://hamzah-luqman.github.io/KArSL/
  - type: isolated-video + depth + Kinect skeleton
  - size: 502 signs (30 digits/numbers, 39 letters, 433 words); 3 professional signers × 50 reps = 75,300 samples
  - license: none stated on the page; the GitHub repo has license `null`
  - SPDX: NOASSERTION
  - tier: **D as published → C** (request permission)
  - access: raw videos and RGB frames in public Google Drive folders; depth and skeleton links are placeholders
  - commercial_ok: no
  - video_redistrib_ok: no
  - disk: not stated (a third-party Kaggle mirror is 25.5 GB)
  - citation: Sidig, Luqman, Mahmoud & Mohandes (2021), ACM TALLIP 20(1)
  - next: email hluqman@kfupm.edu.sa for written permission covering derivation and clip redistribution; this is the biggest isolated lexical set in the region
  - sources: [KArSL page](https://hamzah-luqman.github.io/KArSL/); [KFUPM datasets](https://faculty.kfupm.edu.sa/ICS/hluqman/datasets.html); [GitHub API](https://github.com/Hamzah-Luqman/KArSL)
- **KArSL third-party mirrors and derivatives (tier D, scraped mirrors / relicensing without authority):**
  - HF FatimahEmadEldin/karsl-502-arabic-sign-language-v2 (no license tag) — [HF](https://huggingface.co/datasets/FatimahEmadEldin/karsl-502-arabic-sign-language-v2)
  - Kaggle yousefdotpy/karsl-502 ("Unknown", 25,473 MB) — [Kaggle](https://www.kaggle.com/datasets/yousefdotpy/karsl-502)
  - Kaggle tfmohamedyahia/kars502-pose-75 (claims "CC BY-SA 4.0" on MediaPipe .pose) — [Kaggle](https://www.kaggle.com/datasets/tfmohamedyahia/kars502-pose-75)
  - Kaggle abdalrhmantwfik/karsl-502-landmarks (claims CC0) — [Kaggle](https://www.kaggle.com/datasets/abdalrhmantwfik/karsl-502-landmarks)
  - HF Hamzah/KArSL (empty repo) — [HF](https://huggingface.co/datasets/Hamzah/KArSL)
- **mArSL (KFUPM)**
  - 50 isolated signs that need non-manual features; 6,748 samples; 4 signers; Kinect color, depth and skeleton
  - access: "To download the dataset, please send an email to hluqman@kfupm.edu.sa"
  - no license stated
  - tier **C**
  - citation: Luqman & El-Alfy (2021), *Electronics* 10(14):1739
  - source: [mArSL](https://hamzah-luqman.github.io/marsl/)
- **ArabSign (KFUPM)**
  - continuous: 9,335 samples of 50 sentences; 95 unique signs; 6 signers; Kinect
  - access by email; no license, only a citation request
  - tier **C**; continuous-video
  - source: [ArabSign](https://hamzah-luqman.github.io/ArabSign/)
- **Isharah (IAU/KFUPM)**
  - URL: https://snalyami.github.io/Isharah_CSLR/
  - type: continuous-video plus pose data
  - size: 30,000+ smartphone videos; 18 deaf and professional signers per arXiv; subsets Isharah-500/1000 (2000 "coming soon")
  - license (verbatim fragments from the "Usage License"):
    - "made available for academic research and educational purposes only"
    - may not be "redistributed, republished, sublicensed, or hosted elsewhere without prior written permission"
    - commercial use requires prior written permission (snalyami@iau.edu.sa)
  - HF card: `license: cc-by-nc-nd-4.0` (6.49 GB: 00.zip, 01.zip); arXiv paper: CC BY-NC-ND 4.0
  - SPDX: LicenseRef-Isharah-academic / CC-BY-NC-ND-4.0
  - tier **B**
  - commercial_ok: no
  - video_redistrib_ok: no
  - citation: Alyami et al. (2026), IEEE Trans. Multimedia, DOI 10.1109/TMM.2026.3664959
  - sources: [Isharah page](https://snalyami.github.io/Isharah_CSLR/); [HF](https://huggingface.co/datasets/snalyami/Isharah); [arXiv](https://arxiv.org/abs/2506.03615)
- **Isharah-related third-party uploads:**
  - Kaggle tfmohamedyahia/isharah-1000-pose ("CC BY-NC-SA 4.0" claimed; contradicts Isharah's no-redistribution clause) → **D** — [Kaggle](https://www.kaggle.com/datasets/tfmohamedyahia/isharah-1000-pose)
  - HF GufranSabri/isharah-selfi ("Selfi" frames, 960 glosses, card `cc-by-nc-4.0`, 7.98 GB; authorship unclear) → **D** until the authors confirm — [HF](https://huggingface.co/datasets/GufranSabri/isharah-selfi)
  - HF Hamzah/isharah-selfie (498 mp4, 277 MB, no license) → **C** — [HF](https://huggingface.co/datasets/Hamzah/isharah-selfie)
- **KSU-ArSL (King Saud Univ., IEEE DataPort)**
  - 80 classes (letters, numbers, words); 40 subjects; RGB + 2 Kinects
  - "This dataset requires an IEEE DataPort Subscription to access"
  - "Files have not been uploaded for this dataset"
  - no license; DOI 10.21227/8axv-ma58
  - tier **D (dead end)**
  - source: [IEEE DataPort](https://ieee-dataport.org/documents/ksu-arsl-arabic-sign-language)
- **Saudi SL dataset on Mendeley (kc2kdcfgz2; 145 MTS videos about Salat per a search snippet)**: the page now says "Version 1 of the dataset has been removed… As per author's request." The API returns 404. **Dead end.** — [Mendeley](https://data.mendeley.com/datasets/kc2kdcfgz2)
- **Print and PDF Saudi dictionaries:**
  - Alomary (2013), with the Princess Alanood Foundation: "The dictionary contains the alphabet, pronouns, verbs, nouns, and adjectives", "available for free online"
  - Saudi Association for Hearing Impairment dictionary (2018): "includes thousands of signs from 28 fields"
  - Two Google Drive PDFs ("Saudi Sign Language Dictionary (1) and (2)")
  - No license on any of them; tier **C** (illustrated print, not machine-readable)
  - source: [Wikipedia Saudi SL](https://en.wikipedia.org/wiki/Saudi_Sign_Language)
- "Towards a unified 3D animated dictionary for Saudi sign language" (Elhadj et al., 2012; eSign tools) has no public release. — [Wikipedia Saudi SL](https://en.wikipedia.org/wiki/Saudi_Sign_Language); [SDL repository record](https://sindex.sdl.edu.sa/esploro/outputs/conferenceProceeding/Towards-a-Unified-3D-Animated-Dictionary/9916504108331) (search hit, not fetched)
- "First Saudi Sign Language Dataset" (sokaina-alhasan/SSL-Dataset) is a README-only repo (dead end). — [GitHub](https://github.com/sokaina-alhasan/SSL-Dataset)

#### Unified Arab Sign Language / Arabic Sign Language (LAU / CAMSA dictionary)
- The standardized dictionary "has been produced in 2004 by the Council of Arab Ministers of Social Affairs (CAMSA)", and "consists of a combination of signs from a wide range of mostly unrelated Arab sign languages". Deaf communities objected because "it is not the native sign language of any country in the region." — [Wikipedia Arab SL family](https://en.wikipedia.org/wiki/Arab_sign-language_family)
- Qatar's MSDF says the Sokoon app is built on Arabic Sign Language as unified under the "Unified Arabic Sign Dictionary", "issued in 2007". — [MSDF](https://msdf.gov.qa/en/media-center/news-list/line-digitizing-sign-language-social-development-launches-sokoon-application)
- No downloadable, licensed copy of the unified dictionary was found. tier: **C/D**.
- **KArSL-502** (see Saudi) is the only large video set organized by the unified-dictionary chapters (tier D→C).
- **Annotated Arabic Sign Language News Dataset (Mada, Qatar; Mendeley y2d2kz3btb)**
  - type: continuous annotations
  - size: 14 JSON files of time-aligned sign labels for 14 Al Jazeera news videos "sourced from the Al Jazeera Channel on YouTube"
  - license (Mendeley): "CC BY 4.0"
  - tier: **A for annotations, D for video** (YouTube)
  - disk: 2.8 MB
  - next: optional gloss vocabulary only
  - source: [Mendeley API](https://data.mendeley.com/public-api/datasets/y2d2kz3btb)
- **Text→gloss corpora** (text-only; useful for gloss-ordering, not lexicon):
  - HF Selimx2001x/Arabic-Text-to-Sign-Language-Translation: `license: apache-2.0`; Dataset.xlsx 228,918 B with sentence→gloss pairs, e.g. "مصر و السودان دولتان شقيقتان" → "مصر و سودان دولة اثنان شقيقة اثنان"; tier A — [HF](https://huggingface.co/datasets/Selimx2001x/Arabic-Text-to-Sign-Language-Translation)
  - Kaggle mohamedlotfy50/arabic-sign-language: "GPL 2", 1.16 MB, Arabic/English sentences with gloss; tier A (copyleft) — [Kaggle](https://www.kaggle.com/datasets/mohamedlotfy50/arabic-sign-language)
- **Pan-Arab isolated word video sets with unclear variety:**
  - Kaggle hossammbalaha/asl-20-words-dataset-v1 ("Arabic Sign Language (ASL) 20-Words Dataset v1")
    - license "CC BY-NC-SA 4.0"; 36,132 MB
    - 8,467 smartphone videos of 20 words from 72 volunteers aged 20–24
    - tier **B**
    - citation: Balaha et al. (2023), *Multimedia Tools and Applications* 82:6807–6826
    - An "Unknown"-license mirror is mahmoudmsaafan/arabic-sign-language-dataset.
    - sources: [Kaggle](https://www.kaggle.com/datasets/hossammbalaha/asl-20-words-dataset-v1); [mirror](https://www.kaggle.com/datasets/mahmoudmsaafan/arabic-sign-language-dataset)
  - Kaggle mohamedsaeed823/arslvideodataset
    - license "CC0: Public Domain"; 2,568 MB
    - 12 phrases (Alhamdulillah, Good morning, …) by 10 performers. File names show duplicated copies ("… - Copy (2).mp4").
    - tier A, phrase-level, low lexical value
    - source: [Kaggle](https://www.kaggle.com/datasets/mohamedsaeed823/arslvideodataset)
- **Fingerspelling-only (record only; flag fingerspelling-only):**
  - ArASL / "ArSL2018" — Mendeley y7pckrw6z2, "CC BY 4.0", 54,049 images, 32 classes, >40 signers (Al Khobar), 70.2 MB — [Mendeley API](https://data.mendeley.com/public-api/datasets/y7pckrw6z2)
  - ArSL21L — Mendeley 8hrn3bvdvk and f63xhm286w (duplicate deposits), "CC BY 4.0", 14,202 images, 32 letters, 50 people, 845.9 MB (UAEU, Gochoo) — [Mendeley API](https://data.mendeley.com/public-api/datasets/8hrn3bvdvk)
  - ASLAD-190K — Mendeley 2fgpn5dwgc, "CC BY 4.0", 190,000 images, 32 letters, 2 signers, plus a 157 MB hand-landmark CSV, 2,817.5 MB total (Constantine universities, Algeria). Kaggle mirror boulesnane/… is "CC BY-SA 4.0". — [Mendeley API](https://data.mendeley.com/public-api/datasets/2fgpn5dwgc); [Kaggle](https://www.kaggle.com/datasets/boulesnane/aslad-190k-arabic-sign-language-alphabet-dataset)
  - EMG dataset for ArSL letters and numbers — Mendeley ft9bhdgybs, "CC BY 4.0", 483.8 MB (Ben Haj Amor, El Ghoul, Jemni) — [Mendeley API](https://data.mendeley.com/public-api/datasets/ft9bhdgybs)
  - ArSL-31-Pilot — Zenodo 18363162, cc-by-4.0, 7,010 samples of right-hand MediaPipe landmarks for 28 letters + 3 control signs, 24 MB (Ibn Tofail Univ.) — [Zenodo API](https://zenodo.org/api/records/18363162)
  - ArabicSL-Bench — Zenodo 7757337, restricted, 28,000 images (Zagazig) — [Zenodo API](https://zenodo.org/api/records/7757337)
  - Kaggle RGB ArASL (muhammadalbrham, "CC BY-SA 4.0", 5,078 MB) and many other alphabet sets (CC BY, CC BY-SA, CC0, "Unknown") — [Kaggle](https://www.kaggle.com/datasets/muhammadalbrham/rgb-arabic-alphabets-sign-language-dataset)

#### Emirati Sign Language
- **ESL127 (UAE University)**
  - 127 signs + 50 sentences; 708 Azure Kinect DK recordings by hearing-impaired UAE signers; validated by CDA Dubai
  - availability and license: "Not stated"
  - tier **C**
  - citation: Ahmed, Gochoo et al., IIT 2023, DOI 10.1109/IIT59782.2023.10366479
  - next: email the UAEU authors
  - source: [UAEU portal](https://research.uaeu.ac.ae/en/publications/esl127-emirate-sign-language-datasets-and-e-dictionary-version-20/)
- **ZHO Emirati Sign Language Dictionary**: about 5,000 words planned, compiled in phases. The zho.gov.ae dictionary URL now 301-redirects to https://www.za.gov.ae/. No open data. tier **C/D**. — [Gulf News](https://gulfnews.com/uae/government/uae-sign-language-dictionary-1.2224509); [ZHO URL](https://www.zho.gov.ae/Sign-Language-Dictionary)
- **alanbarret/esl-platform**: "Emirati Sign Language Avatar Generation" with GLB/VRM avatars; no license; 547 MB repo. tier **D**. — [GitHub](https://github.com/alanbarret/esl-platform)
- tier: **nothing usable (Tier A/B)**

#### Qatari Sign Language
- **Sokoon app (MSDF + Mada, Feb 2024)**: "2637 words and 485 sentences" in 20 classifications, using 3D characters; free on Android and iOS. No licensing or open data mentioned. tier **D** (proprietary app). — [MSDF](https://msdf.gov.qa/en/media-center/news-list/line-digitizing-sign-language-social-development-launches-sokoon-application)
- The Mada news annotation dataset (above) is pan-Arab interpreter signing (CC BY annotations, YouTube video).
- The "sawiyya" Qatari SL learning app repo has no license. — [GitHub](https://github.com/theshumba/sawiyya)
- tier: **nothing usable (lexical)**

#### Kuwaiti and Bahraini Sign Language
- Wikipedia (Kuwaiti) names no dictionary, lexicon, app or dataset. — [Wikipedia Kuwaiti SL](https://en.wikipedia.org/wiki/Kuwaiti_Sign_Language)
- No Bahraini or Kuwaiti datasets were found in Mendeley, Zenodo, HF, GitHub or Kaggle searches (Q4).
- tier: **nothing usable**

#### Omani Sign Language
- **JISSR-OM / OSLT (You978suf/OSLT)**: "Custom OSL dataset: 10,356 videos from 18 signers covering 798 word signs and 515 sentence signs". Data is not released ("large model and landmark files are downloaded from Azure Blob at runtime (never committed)"); no license. tier **C**. — [GitHub](https://github.com/You978suf/OSLT)
- **KinectSignLang (Zenodo 18323435 / drmrashid)**: MIT C# Kinect DTW recognizer. The repo contains code, binaries and mp3 audio, but no reusable sign database. — [Zenodo API](https://zenodo.org/api/records/18323435); [GitHub](https://github.com/drmrashid/KinnectSignLang)
- tier: **nothing usable now**; OSLT is the best Tier C target (798 word signs)

#### Yemeni Sign Language (yms)
- **ArYSL (Kaggle rehabalsaby/yemeni-sign-language)**
  - type: static images of word signs (not motion), 640×640, black background
  - size: 32 Arabic words (upgraded from 14). Images "follow the gestures criteria given by the dictionary called 'The Unified Yemeni Dictionary'".
  - license: "CC0: Public Domain"
  - SPDX: CC0-1.0
  - tier **A**
  - disk: ~3.0 GB (totalBytes 3,037,385,615)
  - citation: Mosleh et al. (2024), *Mathematics* 12(8):1155
  - next: handshape and location reference only
  - sources: [Kaggle](https://www.kaggle.com/datasets/rehabalsaby/yemeni-sign-language); [Wikipedia Yemeni SL](https://en.wikipedia.org/wiki/Yemeni_Sign_Language)
- **YSLD (kdhafir/YSLD)**: Apache-2.0 Cordova app with 24 GIFs (family vocabulary). about.html credits "جميع الصور من القاموس الاشاري المصور" ("all images from the illustrated sign dictionary") and arappz.net. The images are third-party, so tier **D** for images. — [GitHub](https://github.com/kdhafir/YSLD)

#### Persian / Iranian Sign Language, ZEI (psc)
- **Global Signbank – ZEI**: "0 public glosses, 221 total"; owner Onno Crasborn; "Accessible by others: False"; license fields blank. tier **C**. — [Signbank ZEI](https://signbank.cls.ru.nl/datasets/ZEI); [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/globalsignbankzei.html)
- **ELAR "Western ZEI: Iranian Sign Language in Kermanshah" (dk0598)**
  - contents: "100 lexical signs, each from 36 signers in 18 sessions", fingerspelling, Pear Story, conversations; 1 h of ELAN glossed in English and Persian; 38.86 h of tasks
  - access: "Request access to restricted files"; the Compendium says restricted, registration required, 0 open recordings, 108 restricted lexical-elicitation recordings
  - terms: "Users of any part of collection should acknowledge Yassaman Choubsaz as the principal investigator and data collector"
  - SPDX: LicenseRef-ELAR
  - tier **C**
  - next: register with ELAR and request the lexical elicitation (100 citation signs × 36 signers)
  - sources: [ELAR](https://www.elararchive.org/dk0598/); [Compendium corpus](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/zei.html)
- **ISLR101 (Ranjbar & Taheri)**
  - 101 signs; 4,614 videos; 10 signers (3 deaf, 2 interpreters, 5 L2 learners); OpenPose pose data via Google Drive links in the README
  - The GitHub repo has license `null`; the arXiv *paper* is CC BY-NC-ND 4.0; no dataset license
  - tier **D as published → C**
  - Institution not verified; only the authors' names (Ranjbar & Taheri) are confirmed.
  - sources: [arXiv](https://arxiv.org/abs/2503.12451); [GitHub](https://github.com/HoseinRanjbar/ISLR101)
- **"Isolated Persian Sign Language Dataset" (Kaggle sohaibmoradi/psl-tabular)**
  - type: landmarks only (MediaPipe Holistic, 543 landmarks/frame, tabular gzip per sign)
  - size: "Videos of 280 signs were recorded from the waist up"
  - license: "CC0: Public Domain"
  - SPDX: CC0-1.0
  - tier **A, with a provenance flag**: filenames like "آبی-converted" suggest converted source videos whose origin is unstated
  - disk: 5.3 GB
  - next: ask the uploader about the video source before relying on it; otherwise the best Tier A Persian lexical signal
  - source: [Kaggle](https://www.kaggle.com/datasets/sohaibmoradi/psl-tabular)
- **PenSLR-dataset (GitHub, MIT)**: glove time series; 16 PSL glosses in 1–8-word sentences; 5 subjects; 2,283 files; sensor, not mocap; tier A, low value. — [GitHub](https://github.com/Persian-Sign-Language/PenSLR-dataset)
- **salar96/Iranian-Sign-Language-ISL-Dataset**: "collected using Perception Neuron sensory glove"; single data.rar; no license; tier **D**. — [GitHub](https://github.com/salar96/Iranian-Sign-Language-ISL-Dataset)
- **mpMalek/PersianSignLanguage**: GitHub license metadata says CC0-1.0, but the README says "licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0". The repo has no data files (README + LICENSE only). Dead end. — [GitHub](https://github.com/mpMalek/PersianSignLanguage)
- Print dictionaries: "Culture: Farsi Sign Language For Deaf, 1st Volume" (1980) and "Dictionary of Farsi Sign Language: Standardized Signs" (1984, "first of four editions"); "Ketab Nashenava" (2020); the first academic ISL book (2021, Sharif / IAU). tier **C** (print). — [Wikipedia Persian SL](https://en.wikipedia.org/wiki/Persian_Sign_Language)
- Other recognition datasets seen only in search results:
  - UoT-PSL: 20 signs, 1,200 videos — [arXiv](https://arxiv.org/pdf/1912.01944)
  - MPSL: 47 classes of alphabet and digit images, fingerspelling-only — [AUT](https://eej.aut.ac.ir/article_6144.html)
  - Rastgoo continuous PSL: 100 sentences — [JAD](https://jad.shahroodut.ac.ir/article_3366.html)
  - Release and licenses not verified.

#### Kurdish Sign Language
- **KuSL Lexicon (KurdishBLARK/KurdishSignLanguage)**
  - type: notation (HamNoSys symbol names in eSign-editor import format) + fingerspelling table
  - size: Import1.txt has 527 lines, e.g. `1 قسە hamfinger23,hamextfingerui,…`; also FingerSpellingGB.txt and a HamNoSys PDF/ODT
  - license (LICENSE file, verbatim header): "Attribution-NonCommercial-ShareAlike 4.0 International / Copyright (c) 2020 Zina Kamal … Hossein Hassani"
  - SPDX: CC-BY-NC-SA-4.0
  - tier **B**
  - access: GitHub
  - commercial_ok: no
  - disk: ~0.2 MB
  - citation: Kamal & Hassani (2020), "Towards Kurdish Text to Sign Translation", LREC2020 SignLang, pp. 117–122
  - next: **ingest for research/NC builds** (HamNoSys→SignDesc)
  - sources: [GitHub](https://github.com/KurdishBLARK/KurdishSignLanguage); [Anthology](https://www.sign-lang.uni-hamburg.de/lrec/data/kusllexicon.html)
- **KuSL2023 (Mendeley 6gfrvzfh69)**: "CC BY 4.0", 472 MB, 71,400 images. It "amalgamates the ASL alphabet dataset and the ArSL2018 dataset". Fingerspelling-only. — [Mendeley API](https://data.mendeley.com/public-api/datasets/6gfrvzfh69)
- HF Hadiana/Sign_Language_for_Kurdish_Letters (KuSL2022): license "other" ("cc", linked to ResearchGate); 945 MB; fingerspelling-only. — [HF](https://huggingface.co/datasets/Hadiana/Sign_Language_for_Kurdish_Letters)

#### Afghan Sign Language (afg)
- **SignPuddle "Dictionary Afghanistan" (sgn=106)**: 14 entries (woman, mother, family, father, God, sister…), 2008, user "Justinina"; SPML 5,152 B. tier A per brief; trivial size. — [SPML](https://www.signbank.org/signpuddle2.0/data/spml/sgn106.spml)
- SERVE Afghanistan "produced a trilingual (Dari, Pashto, and English) dictionary of Afghan Sign Language" (print). Power (2014), "Handshapes in Afghan Sign Language" (UND MA thesis), is a handshape-inventory reference. tier **C**. — [Wikipedia Afghan SL](https://en.wikipedia.org/wiki/Afghan_Sign_Language); [UND thesis](https://commons.und.edu/theses/1695/)
- tier: **nothing substantive**

#### Egyptian Sign Language (esl)
- **SignPuddle "Dictionary Egypt" (sgn=84)**: 111 entries, all with FSW, 107 unique Arabic glosses (days of the week, etc.); mostly by user "ryanfan" in 2012; SPML 38,383 B. tier **A** per brief. — [SPML](https://www.signbank.org/signpuddle2.0/data/spml/sgn84.spml); [sw-l 2012](https://listserv.linguistlist.org/pipermail/sw-l/2012-April/025407.html)
- **Kaggle eslamezzat "Arabic Sign Language (ArSL) for Words (videos)"**
  - subtitle: "This ArSL from Local Egyptians"
  - type: isolated-video (.MOV)
  - size: 15 words (club, father, fine, help, hospital, howareyou, learn, love, mother, need, school, sorry, thanks, whatisyourname, where); 1,559 clips (~100 per word); signer count not stated
  - license: "CC0: Public Domain"
  - SPDX: CC0-1.0
  - tier **A**
  - commercial_ok: yes
  - video_redistrib_ok: yes (CC0; check consent)
  - disk: 2.6 GB
  - next: **first Egyptian video ingest** (pick one clean token per word)
  - source: [Kaggle](https://www.kaggle.com/datasets/eslamezzat/arabic-sign-language-arsl-for-words-videos)
- **Mendeley "Egyptian Sign Language" (39tbt2jd7r, Ahmed Métwalli, AASTMT)**
  - license "CC BY 4.0"
  - The description says 55 words and 400+ videos at 720p/30 fps, but the API shows only `AGGREGATED_DATA.csv` (2.9 MB; MediaPipe landmark columns `CLASS,f1_i1_x,…`; 57 lines) in v3, and no files for v1/v2
  - tier A (landmarks only)
  - Companion toolkit "ESL-55" on Zenodo 16750952 (cc-by-4.0, code)
  - sources: [Mendeley API](https://data.mendeley.com/public-api/datasets/39tbt2jd7r); [Zenodo](https://zenodo.org/records/16750952)
- YouTube animated ESL dictionary (Resalasom playlists): tier **D**. — [Wikipedia Egyptian SL](https://en.wikipedia.org/wiki/Egyptian_Sign_Language)
- Kaggle abdullahsherdy/egyptian-sign-language-recognition ("Unknown", 418 MB): **D**. — [Kaggle](https://www.kaggle.com/datasets/abdullahsherdy/egyptian-sign-language-recognition)

#### Libyan Sign Language (lbs)
- Only a 1984 book is known: Suwed, *Lughat Al-Ishara Al-'Arabiyah: Laughat As-Sum*, Tripoli. "The page mentions no apps or datasets." — [Wikipedia Libyan SL](https://en.wikipedia.org/wiki/Libyan_Sign_Language)
- No datasets in any repository search (Q4).
- tier: **nothing usable**

#### Tunisian Sign Language (tse)
- **SignPuddle "Dictionnaire Tunisien" (sgn=104)**
  - URL: https://www.signbank.org/signpuddle2.0/data/spml/sgn104.spml
  - type: notation (FSW SignWriting) with French glosses (e.g. "vacances", "sourd", "rouge", "maison")
  - size: "4519 Total Entries"; parsed: 4,169 entries with an FSW sign, 4,345 glossed, 3,201 unique glosses, 3,944 entries by user "dali"
  - SPML: 1,757,714 B (Last-Modified 2026-02-15)
  - license: per brief CC BY-SA 3.0 (no license text on the puddle page; see Q2)
  - tier **A**
  - commercial_ok: yes (SA)
  - next: **ingest first**; this is the largest open regional dictionary dump
  - "Littérature Tunisien" (sgn=126) has 469 entries (865,842 B)
  - sources: [puddle page](https://www.signbank.org/signpuddle2.0/index.php?ui=1&sgn=104); [SignPuddle index](https://www.signbank.org/signpuddle2.0/index.php?ui=1)
- **(First ever) Tunisian Sign Language Dataset (Chakroun & Jerbi, Sup'Com; with ATILS)**
  - type: static images of word signs
  - size: "4423 images of TunSL common words performed by 7 people for 57 standard Tunisian" signs
  - licenses: Mendeley "CC BY 4.0" (26.3 MB); GitHub `CC0-1.0`; the author's own Kaggle upload "MIT"; a Kaggle mirror "CC BY 4.0"
  - tier **A**
  - next: reference images for 57 words
  - sources: [Mendeley API](https://data.mendeley.com/public-api/datasets/fbjjgzgv7f); [GitHub](https://github.com/W7CH/First-ever-Tunisian-Sign-Language-Dataset); [Kaggle](https://www.kaggle.com/datasets/wassimchakroun/first-ever-tunisian-sign-language-dataset)
- **WebSign / tuniSigner (LaTICE / UTIC, Univ. of Tunis, Jemni)**
  - Avatar system using SML (Sign Modeling Language), H-Anim and X3D. A 2012 paper reports a collaborative lexicon of "over 1,200 French Sign Language (FSL) words" (not TSL).
  - No public lexicon or license found. tier **C**.
  - sources (search-result level): [UEA SLTAT 2011](https://vhg.cmp.uea.ac.uk/demo/SLTAT2011Dundee/15.html); [SignWriting Tunisia](https://signwriting.org/tunisia/tunisia01.html)
- AVST "Medical Dictionary in Tunisian Sign Languages" booklet (160 words, with the French Institute), cited by a student repo. tier **C**. — [GitHub dhiaabdelli12](https://github.com/dhiaabdelli12/tunisian-sign-language-seq-classification-dataset-building)
- Wikipedia names no TSL dictionary. — [Wikipedia Tunisian SL](https://en.wikipedia.org/wiki/Tunisian_Sign_Language)

#### Algerian Sign Language (asp)
- **3DZSignDB (Zenodo 15020376)**
  - lang: Algerian SL (asp)
  - URL: https://zenodo.org/records/15020376
  - type: **notation (HamNoSys in SiGML) + CWASA avatar web simulator**
  - size: 1,312 zip entries: 419 SiGML in data/sigml (duplicated in web-simulator/sigml); source-data by category (nouns 228, verbs 79, adjectives 45, numbers 22, adverbs 18, misc 16, letters 13, pronouns 4); README: "a dictionary of **417 ALSL words**"
  - license: Zenodo `cc-by-4.0`, **but** the zip's LICENSE file is "GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007"; it also bundles CWASA jars, which have their own terms
  - SPDX: CC-BY-4.0 (record) vs GPL-3.0 (file)
  - tier **A** (both permit derivation and redistribution; GPL adds copyleft)
  - access: direct download
  - commercial_ok: yes (CC BY), with copyleft if GPL governs
  - disk: 23.2 MB
  - credits: sign specialist Dharbou Maroua (>300 gestures); teachers of the School for the Deaf, Beni Slimane, Médéa
  - citation: Mami, Slimani, Zerrouki & Mazari (2024), *Nafath* (Mada Center)
  - caveat: `tools/import_fr_sigml_to_arabic.py` ("importing French Sign Language to Arabic Sign Language") means some entries may derive from DictaSign LSF SiGML, so check provenance
  - next: **ingest first** (HamNoSys→SignDesc is direct); email Taha Zerrouki to settle CC BY vs GPL for the SiGML data
  - Sample SiGML (أب): `<hamfinger2/><hamthumbopenmod/><hamextfingeru/><hampalml/><hameyes/>…<hamrepeatfromstart/>`
  - source: [Zenodo API](https://zenodo.org/api/records/15020376)
- **VDzSL (Zenodo 18209839)**
  - "8,300 video files comprising 415 unique common daily signs … animated by four avatars and captured from five angles"; 1,230 MB; cc-by-4.0; creator "Anonymous"
  - Synthetic avatar renders, apparently of the 3DZSignDB lexicon; tier A, but useful only for visual QA
  - source: [Zenodo API](https://zenodo.org/api/records/18209839)
- Wikipedia lists no Algerian SL dictionary. — [Wikipedia Algerian SL](https://en.wikipedia.org/wiki/Algerian_Sign_Language)
- ASLAD-190K (Algeria; fingerspelling-only) is listed under Unified ArSL above.

#### Moroccan Sign Language (xms)
- **MoSL (Ben Zaid, Benaddy, Boukdir, El Meslouhi; Univ. Ibn Zohr; Data in Brief)**
  - lang: xms
  - URL: https://data.mendeley.com/datasets/23phgyt3mt/1
  - type: isolated-video (videos not on Mendeley) + metadata CSVs
  - size: "2,199 word-level isolated signs" by 9 native signers; 460×460 at 25 fps; categories: alphabet, numbers, pronouns, days/months/seasons, diverse
  - Mendeley holds only 5 CSVs (0.4 MB) with columns `video_name;sign_label;sign_label_en;signer_id;duration_seconds;frame_rate;frame_count;resolution;file_path;file_size_bytes`; file paths point to `/content/drive/MyDrive/vedios-dataset/…`
  - license: Mendeley "CC BY 4.0"; article "This is an open access article under the CC BY license"
  - ethics statement: "we have provided links to the videos in the dataset only, without distributing them to the public repository"; videos were provided by the Shorouk Association for the Deaf and Hard of Hearing (Ouarzazate)
  - tier **A for the gloss metadata (Arabic + English)**; **C for videos**
  - next: ingest the gloss list; email the authors / Shorouk for video access and redistribution terms
  - sources: [Mendeley API](https://data.mendeley.com/public-api/datasets/23phgyt3mt); [Data in Brief (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12828366/)
- **MoSL third-party redistribution**: soufianeboulahcen/Multimodal-Moroccan-SLG commits 2,383 mp4 files under `.devcontainer/Dataset/mosl_videos_dataset_*`. Its README says to download "vedios-dataset.zip" from the Mendeley DOI (no longer listed there). tier **D** (mirror). — [GitHub](https://github.com/soufianeboulahcen/Multimodal-Moroccan-SLG)
- **MSL dataset (Maarouf, Maarouf, El Ayachi, Biniz)**
  - "collected from publicly available online videos… inclusion of Arabic subtitles"; 2,310 clips, 7 h 15 m; "2069 unique words and sentences"
  - Mendeley 85hhbtykrp v2: metadata.csv only (0.3 MB). w4xwcpt45f v1: MSL-DataSet.zip (500.6 MB) with videos, annotations and keypoints. Both labelled "CC BY 4.0".
  - Metadata glosses include news terms ("الأراضي الفلسطينية المحتلة"), consistent with broadcast footage
  - tier **D for video** (third-party online footage despite the CC BY label); gloss list is reference only
  - sources: [Mendeley API v2](https://data.mendeley.com/public-api/datasets/85hhbtykrp); [Mendeley API v1](https://data.mendeley.com/public-api/datasets/w4xwcpt45f)
- **MSL STEM Thesaurus** (Soudi & Vinopol 2016; IDRT; USAID-funded): no license. tier **C**. — [Anthology](https://www.sign-lang.uni-hamburg.de/lrec/data/mslstemthesaurus.html)
- A national dictionary was created after MSL recognition in 1994 but "remained little used" (no digital copy found). Soudi, Vinopol & Van Laerhoven (2025), "Toward the Creation of a Large-Scale Moroccan Sign Language Corpus", *Sign Language Studies* 25(4), is in progress. — [Wikipedia Moroccan SL](https://en.wikipedia.org/wiki/Moroccan_Sign_Language)
- Kaggle walidlasseg LSM alphabet ("Database: Open Database, Contents: © Original Authors"): fingerspelling-only. — [Kaggle](https://www.kaggle.com/datasets/walidlasseg/moroccan-sign-language-lsm-alphabet-dataset)

#### Sudanese Sign Language
- Nothing found. The only hit is a South Sudan SL recognition repo (GPL-3.0 code; a different country and language). — [GitHub Kuol-Duot-Akier/SSSLRT](https://github.com/Kuol-Duot-Akier/SSSLRT)
- tier: **nothing usable**

### Inferences
- **Tier A lexical/notation backbone for MENA:**
  - ISL-LEX (phonology CSV)
  - SignPuddle sgn104 Tunisia (4.5k FSW)
  - 3DZSignDB Algeria (419 HamNoSys)
  - SignPuddle sgn40 Saudi (401 FSW)
  - SignPuddle sgn84 Egypt (111 FSW)
- These are already in symbolic form (phonological codes, FSW or HamNoSys), which matches Marionet's SignDesc + hand-tuning workflow better than raw video.
- Citation-form *video* that is legally redistributable is scarce: only small CC0 sets (Egyptian 15 words, ArSL 12 phrases) and static images (Tunisian 57 words, Yemeni 32 words). Large lexical video sets (KArSL-502, MoSL-2199, ISLR101, ESL127, OSLT-798, ZEI ELAR) would all need permission, so they are worth one email each.
- KArSL's vocabulary follows the Unified ArSL dictionary chapters. If permission is granted, it is the best proxy for "Unified Arab SL", not for Saudi SL as used.
- Several Kaggle and HF uploads relabel unlicensed or restricted datasets (KArSL, Isharah, MoSL) with permissive licenses. Treat these as Tier D regardless of the badge.

### Gaps
- Whether the Unified Arabic SL dictionary (CAMSA 2004 / LAS–ALECSO 1999–2007) exists as a licensed digital file could not be verified. A search snippet (not fetched) claimed the Supreme Council for Family Affairs (Qatar) released about 1,600 unified terms on DVD — [search hit: interpreters friend](https://theinterpretersfriend.com/indj/dcoew/arab-world.html). Another snippet (a 2021 IJEECS paper) said part 1 was published in 1999 by LAS/ALECSO and part 2 in 2007 — [search hit](https://ijeecs.iaescore.com/index.php/IJEECS/article/download/22518/14493). Both are unverified.
- National dictionaries of Lebanon, Syria, Iraq, Kuwait, Bahrain, Oman, Sudan, Libya and Palestine (print or app) could not be researched: the web search budget ran out.
- ABSL and Kafr Qasem archive holdings and terms (Haifa lab, UCSD) are unknown. No ELAR deposit was found, but the ELAR catalogue could not be searched directly.
- The ISL Corpus site (islcorpus.co.il) did not resolve on 2026-10-14, so the corpus video terms are unknown.
- KArSL raw-video folder size was not measured (Google Drive). The 25.5 GB figure is from a third-party Kaggle mirror.

---

## Q2. Notation sources: SignWriting puddles, HamNoSys/SiGML projects, typology data

### Takeaway
SignPuddle has MENA puddles for Israel (110), Jordan (86, 92), Saudi Arabia (40, 91), Egypt (84), Afghanistan (106) and Tunisia (104, 126). Only Tunisia (4,519 entries) and Saudi Arabia (401) are substantial. There are two HamNoSys lexicons: Algerian 3DZSignDB (419 SiGML, CC BY 4.0/GPL-3.0) and Kurdish KuSL (527 HamNoSys rows, CC BY-NC-SA 4.0). No Arabic avatar lexicon from Tunisia's WebSign or a project named "ATLAS" was found publicly.

### Cited Findings
- **SignPuddle 2.0 index**: matching puddles are Israel sgn=110; Jordan sgn=86 (dictionary) and 92 (literature); Saudi Arabia sgn=40 (dictionary) and 91 (literature); Egypt sgn=84; Afghanistan sgn=106; Tunisia sgn=104 ("Dictionnaire Tunisien") and 126 ("Littérature Tunisien"). There are **no puddles** for Lebanon, Syria, Iraq, UAE, Qatar, Kuwait, Bahrain, Oman, Yemen, Arab (general), Iran, Kurdish, Libya, Algeria, Morocco, Sudan or Palestine. — [SignPuddle index](https://www.signbank.org/signpuddle2.0/index.php?ui=1)
- **SPML dump sizes** (HEAD Content-Length and Last-Modified; files fetched and parsed):

  | Puddle | Bytes | Last-Modified | Entries |
  |---|---|---|---|
  | sgn104 Tunisia dictionary | 1,757,714 | 2026-02-15 | 4,519 |
  | sgn126 Tunisia literature | 865,842 | 2021-05-14 | 469 |
  | sgn40 Saudi dictionary | 94,241 | 2023-11-08 | 401 |
  | sgn84 Egypt | 38,383 | 2021-04-23 | 111 |
  | sgn110 Israel | 11,674 | 2024-02-18 | 36 |
  | sgn86 Jordan dictionary | 7,690 | 2026-08-15 | 31 |
  | sgn106 Afghanistan | 5,152 | 2025-07-05 | 14 |
  | sgn91 Saudi literature | 2,393 | 2023-11-06 | 6 |
  | sgn92 Jordan literature | 948 | 2014-10-08 | 1 |

  URL pattern: `https://www.signbank.org/signpuddle2.0/data/spml/sgn{ID}.spml` — [example sgn104](https://www.signbank.org/signpuddle2.0/data/spml/sgn104.spml)
- **SPML entry format** (sgn104): `<entry id="227" … usr="dali"><term>M537x530S10e01470x483…</term><term><![CDATA[vacances]]></term><src><![CDATA[Dali]]></src></entry>`. The first term is the FSW string and the second is the gloss. — [SPML sgn104](https://www.signbank.org/signpuddle2.0/data/spml/sgn104.spml)
- **SignPuddle license not re-verified**: the puddle 104 page, signbank.org/signpuddle and signbank.org/swservices show no license or Creative Commons text, and the SPML files contain none. The coordinator brief's CC BY-SA 3.0 stands unconfirmed in this session. — [puddle 104](https://www.signbank.org/signpuddle2.0/index.php?ui=1&sgn=104); [swservices](https://www.signbank.org/swservices)
- An Arabic translation of the SignPuddle 1.5 manual exists (Dr. Mohamed AbuShaira, Arabic SignWriting project in Jordan and Saudi Arabia). In 2012 the Egyptian puddle was "nearly empty", with Ryan Fan adding signs. — [SignWriting archive](https://www.signwriting.org/archive/docs6/sw0536-Arabic-SignPuddle15Manual.pdf); [sw-l 2012](https://listserv.linguistlist.org/pipermail/sw-l/2012-April/025407.html)
- **HamNoSys/SiGML, Algeria**: 3DZSignDB, with 419 SiGML files (`<hns_sign gloss=""><hamnosys_manual>…`). It relies on "HamNoSys… SiGML… CWASA". — [Zenodo](https://zenodo.org/records/15020376)
- **HamNoSys, Kurdish**: the KuSL Lexicon is a tab-separated eSign import (id, Sorani word, comma-separated HamNoSys symbol names, optional non-manual codes like `[C08]`), 527 rows, CC BY-NC-SA 4.0. — [GitHub](https://github.com/KurdishBLARK/KurdishSignLanguage)
- **Tunisia WebSign/tuniSigner**: "tuniSigner… converts the manual and non-manual features into Sign Modeling Language (SML)"; the WebSign lexicon described in 2012 is FSL. No public dump was found. — [UEA SLTAT 2011 (search hit)](https://vhg.cmp.uea.ac.uk/demo/SLTAT2011Dundee/15.html); [SignWriting symposium (search hit)](https://www.signwriting.org/symposium/presentation0023.html)
- **Typology data**: the Compendium and Anthology list no Sign Language Typology dataset for ABSL or KQSL, only the Haifa dictionaries (KQSL 268, AJSL 470). — [Compendium lex index](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/index.html)

### Inferences
- The Tunisian puddle is the regional anchor for FSW→SignDesc conversion. It is French-glossed and mostly one contributor's work ("dali"), so expect LSF-influenced or school variants; spot-check against TSL video.
- HamNoSys→SignDesc is the most direct route, and 3DZSignDB is the only permissively licensed regional HamNoSys lexicon. KuSL is NC-only.

### Gaps
- The verbatim SignPuddle license text was not located on any signbank.org page fetched.
- No "ATLAS" Arabic avatar lexicon was found (no search budget left to pursue it).
- The Emirati esl-platform GLB/VRM avatars have no license and their sign source is unknown.

---

## Q3. What governs data vs. videos; bulk export; phonological coding fields

### Takeaway
In this region the license almost never covers the videos explicitly:
- ISL-LEX licenses its CSV (CC BY 4.0) while its videos come from the IADPI dictionary with no stated terms.
- MoSL licenses its metadata (CC BY 4.0) but deliberately withholds the videos.
- Mada's news annotations are CC BY 4.0 over YouTube footage.
- Moroccan MSL wraps scraped online videos in CC BY.

Only ISL-LEX has an ASL-LEX-style phonology spreadsheet.

### Cited Findings
- ISL-LEX: the data is CC BY 4.0 on OSF. 798/961 videos are from the IADPI dictionary and 163 from the Haifa BIBI project, all on Vimeo, with no video license. Bulk export is 2 CSVs (961 × 52). — [OSF](https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/); [paper](https://www.sign-lang.uni-hamburg.de/lrec/pub/22019.pdf)
- ISL-LEX phonology covers six domains ("articulator, handshape, orientation, location, core articulatory movement, and manner of movement") in 40 fields. — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/isllex.html); [paper](https://www.sign-lang.uni-hamburg.de/lrec/pub/22019.pdf)
- MoSL: the dataset page is CC BY 4.0 but holds only CSVs. "We have provided links to the videos in the dataset only, without distributing them to the public repository." — [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12828366/); [Mendeley API](https://data.mendeley.com/public-api/datasets/23phgyt3mt)
- Mendeley's standard CC BY text includes: "Note that further permission may be required for any content within the dataset that is identified as belonging to a third party." This is relevant to the MSL (online videos) and Mada (YouTube) deposits. — [Mendeley API (MSL)](https://data.mendeley.com/public-api/datasets/w4xwcpt45f); [Mendeley API (Mada)](https://data.mendeley.com/public-api/datasets/y2d2kz3btb)
- Isharah: the custom license forbids redistribution and commercial use without written permission; the HF card is CC BY-NC-ND 4.0. — [Isharah](https://snalyami.github.io/Isharah_CSLR/); [HF](https://huggingface.co/datasets/snalyami/Isharah)
- 3DZSignDB has a dual signal: the record says CC BY 4.0, the shipped file is GPL-3.0. — [Zenodo API](https://zenodo.org/api/records/15020376)
- Tunisian dataset: one author, three permissive licenses (CC BY 4.0 / CC0-1.0 / MIT), all of which allow derivation. — [Mendeley](https://data.mendeley.com/public-api/datasets/fbjjgzgv7f); [GitHub](https://github.com/W7CH/First-ever-Tunisian-Sign-Language-Dataset); [Kaggle](https://www.kaggle.com/datasets/wassimchakroun/first-ever-tunisian-sign-language-dataset)
- Global Signbank (ISL, ZEI): both datasets are not public. The site conditions say "Any data on the site is confidential unless stated otherwise." — [Signbank conditions](https://signbank.cls.ru.nl/about/conditions/)
- Global Signbank's "available datasets" list contains only EmblemsNL, Kata Kolok and NGT, with no MENA dataset. — [Signbank available](https://signbank.cls.ru.nl/datasets/available)

### Inferences
- For ISL, Marionet can legally derive SignDesc from the CSV codes (attribution required). The Vimeo videos should be used at most for local visual reference until Ma'agale Shema or Haifa grants permission.
- Wherever a "CC BY" badge sits on third-party footage (YouTube or broadcast), treat the video as Tier D. Only the annotations or gloss lists are usable.

### Gaps
- Consent and release terms for signers in the small CC0 Kaggle video sets (Egyptian 15-word, ArSL 12-phrase) are undocumented.

---

## Q4. Repository sweep (Mendeley, Zenodo, Hugging Face, GitHub, Kaggle, OSF, ELAR, Compendium) and dead ends

### Takeaway
The repository APIs turned up the regional Tier A items above plus many fingerspelling sets. No Jordanian, Lebanese, Syrian, Palestinian, Kuwaiti, Bahraini, Libyan or Sudanese lexical dataset exists in any of them.

### Cited Findings
- **Mendeley** (search API `data.mendeley.com/api/research-data/search?query=`, about 50 queries). Relevant hits:
  - 23phgyt3mt (MoSL)
  - 85hhbtykrp and w4xwcpt45f (MSL)
  - 39tbt2jd7r (Egyptian)
  - fbjjgzgv7f (Tunisian)
  - y2d2kz3btb (Mada news)
  - 6gfrvzfh69 (KuSL2023)
  - y7pckrw6z2 (ArASL)
  - 8hrn3bvdvk and f63xhm286w (ArSL21L)
  - 2fgpn5dwgc (ASLAD-190K)
  - ft9bhdgybs (EMG)
  - Removed: kc2kdcfgz2 (Saudi)
  - All live ones carry "CC BY 4.0". — [Mendeley API example](https://data.mendeley.com/public-api/datasets/fbjjgzgv7f)
- **Zenodo** (records API). Relevant hits:
  - 15020376 (3DZSignDB)
  - 18209839 (VDzSL)
  - 18363162 (ArSL-31-Pilot)
  - 22050379 (ArSL-Wear20)
  - 16750952 (ESL-55 code)
  - 18323435 (Omani code, MIT)
  - 7757337 (ArabicSL-Bench, restricted)
  - 835351 is a presentation about ISL subordination, not data. — [Zenodo API](https://zenodo.org/api/records/835351)
  - A record 4318827 "Signy" (Moroccan, "other-open", 208 MB, software) was seen but its contents and license were not inspected. — [Zenodo](https://zenodo.org/records/4318827)
- **Hugging Face** (datasets API): snalyami/Isharah (cc-by-nc-nd-4.0), GufranSabri/isharah-selfi, Hamzah/isharah-selfie, KArSL mirrors, Selimx2001x text→gloss (apache-2.0), Hadiana KuSL2022. — [HF Isharah](https://huggingface.co/datasets/snalyami/Isharah)
- **GitHub** (repo search, about 45 queries): data-bearing repos are KurdishBLARK, W7CH Tunisian (CC0), kdhafir/YSLD, PenSLR-dataset (MIT), HoseinRanjbar/ISLR101 (no license), salar96 (no license), danfishgold/isl (scraper), and soufianeboulahcen (MoSL mirror). The rest are app or code repos without datasets. — [GitHub KurdishBLARK](https://github.com/KurdishBLARK/KurdishSignLanguage)
- **Kaggle** (public API `api/v1/datasets/list?search=`, about 30 queries): relevant items are listed per language above (eslamezzat, mohamedsaeed823, hossammbalaha, psl-tabular, rehabalsaby, the Tunisian mirrors, KArSL and Isharah derivatives, many alphabet sets). — [Kaggle Yemeni](https://www.kaggle.com/datasets/rehabalsaby/yemeni-sign-language)
- **Compendium** language pages for the region:
  - Arabic SLs → SpreadTheSign only (Tier D by policy)
  - Israeli → ISL Dictionary, ISL-LEX
  - Kafr Qasem
  - Algerian Jewish
  - Iranian → ZEI Corpus, Global Signbank ZEI
  - No entries for most Arab national SLs
  - Sources: [Compendium Arabic SLs](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/arabicsls.html); [Compendium language index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html)
- **sign-lang@LREC Anthology** adds:
  - Arabic SL Corpus (Almohimeed et al. 2010, instructional language; no license or access info)
  - MSL STEM Thesaurus
  - KuSL Lexicon
  - Global Signbank ISL
  - ISL Corpus
  - Sources: [Anthology Arabic SLs](https://www.sign-lang.uni-hamburg.de/lrec/language/arabicsls.html); [Arabic SL Corpus](https://www.sign-lang.uni-hamburg.de/lrec/data/arabicsignlanguagecorpus.html)
- **Mocap**: none in the region. The closest are glove sensors (PenSLR, ArSL-Wear20, Perception Neuron glove in salar96), EMG (ft9bhdgybs), and Kinect V2/Azure Kinect skeletons (KArSL, mArSL, ArabSign, ESL127). — [Zenodo ArSL-Wear20](https://zenodo.org/records/22050379); [KArSL](https://hamzah-luqman.github.io/KArSL/)
- **Dead ends** (with reason):
  - KSU-ArSL: subscription, no files — [IEEE DataPort](https://ieee-dataport.org/documents/ksu-arsl-arabic-sign-language)
  - Saudi Mendeley kc2kdcfgz2: removed — [Mendeley](https://data.mendeley.com/datasets/kc2kdcfgz2)
  - sokaina-alhasan/SSL-Dataset: README only — [GitHub](https://github.com/sokaina-alhasan/SSL-Dataset)
  - mpMalek/PersianSignLanguage: no data, license conflict — [GitHub](https://github.com/mpMalek/PersianSignLanguage)
  - Hamzah/KArSL on HF: empty — [HF](https://huggingface.co/datasets/Hamzah/KArSL)
  - Global Signbank ISL and ZEI: not public — [ISL](https://signbank.cls.ru.nl/datasets/ISL), [ZEI](https://signbank.cls.ru.nl/datasets/ZEI)
  - islcorpus.co.il: DNS failure
  - ZHO dictionary URL: redirects to za.gov.ae — [ZHO](https://www.zho.gov.ae/Sign-Language-Dictionary)
  - Sokoon app: proprietary — [MSDF](https://msdf.gov.qa/en/media-center/news-list/line-digitizing-sign-language-social-development-launches-sokoon-application)
  - YouTube ESL dictionary: Tier D — [Wikipedia](https://en.wikipedia.org/wiki/Egyptian_Sign_Language)
  - SpreadTheSign: Tier D by policy — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/arabicsls.html)

### Inferences
- Repository-native search is reliable for Mendeley, Zenodo, HF, GitHub and Kaggle. Absence there, plus absence from the Compendium and Anthology, strongly suggests no open lexical dataset exists for the Levantine, Gulf (except Saudi), Libyan and Sudanese languages as of 2026-10-14.

### Gaps
- Figshare and IEEE DataPort were not searched systematically (one DataPort page only).
- ELAR's catalogue was not searched beyond dk0598.
- Kaggle file listings were sampled, not fully enumerated, except the Egyptian word set.

---

## Q5. Recommended first ingest per language, and languages with nothing usable

### Takeaway
- **Ingest now (Tier A):**
  1. ISL-LEX CSV (isr)
  2. SignPuddle sgn104 (tse)
  3. 3DZSignDB SiGML (asp)
  4. SignPuddle sgn40 (sdl) and sgn84 (esl)
  5. Kaggle Egyptian 15-word CC0 videos (esl)
  6. MoSL gloss CSVs (xms)
  7. Tunisian 57-word images (tse)
  8. ArYSL 32-word images (yms)
  9. psl-tabular landmarks (psc, after a provenance check)
- **Research/NC only (Tier B):** KuSL HamNoSys (Kurdish), Isharah (sdl, continuous).
- **Highest-value permission requests (Tier C):** KArSL-502, MoSL videos, ELAR Western ZEI lexical elicitation, ISLR101, ESL127, OSLT, Haifa dictionaries (ISL/IADPI videos, KQSL, AJSL).

### Cited Findings (per language; recommended first ingest → backing source)
- **Israeli SL (isr)**: ingest the ISL-LEX English CSV (CC BY 4.0) → SignDesc. Request IADPI/Ma'agale Shema video rights. — [OSF](https://osf.io/jmwyx/)
- **ABSL (syy)**: nothing usable; contact the Haifa Sign Language Research Lab. — [ELP](https://endangeredlanguages.com/lang/6998/samples/8388)
- **Kafr Qasem (sqx)**: nothing Tier A/B; request the 268-sign dictionary. — [Haifa](https://signlab.haifa.ac.il/2024/04/14/kafr-qasem-sign-language-dictionary/)
- **Ghardaia / AJSL (ajs)**: nothing Tier A/B; request the ~470-sign dictionary. — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/ajsldict.html)
- **Palestinian**: nothing usable. — [Wikipedia](https://en.wikipedia.org/wiki/Levantine_Arabic_Sign_Language)
- **Jordanian (jos)**: only SignPuddle sgn86 (31 entries). Effectively nothing. — [SPML](https://www.signbank.org/signpuddle2.0/data/spml/sgn86.spml)
- **Lebanese, Syrian, Iraqi (lexical), Kuwaiti, Bahraini, Qatari, Emirati, Omani, Libyan, Sudanese**: nothing usable at Tier A/B. Tier C targets: ESL127 (Emirati) and OSLT (Omani, 798 words). — [UAEU](https://research.uaeu.ac.ae/en/publications/esl127-emirate-sign-language-datasets-and-e-dictionary-version-20/); [OSLT](https://github.com/You978suf/OSLT)
- **Saudi (sdl)**: ingest SignPuddle sgn40 (401 FSW). Request KArSL-502 permission; Isharah for research only. — [SPML](https://www.signbank.org/signpuddle2.0/data/spml/sgn40.spml); [KArSL](https://hamzah-luqman.github.io/KArSL/)
- **Unified Arab SL**: no licensed dictionary. Use KArSL (Tier C) as the proxy; text→gloss sets (Apache-2.0, GPL-2) for ordering; ArASL (CC BY 4.0) for manual alphabet handshapes. — [HF](https://huggingface.co/datasets/Selimx2001x/Arabic-Text-to-Sign-Language-Translation); [Mendeley ArASL](https://data.mendeley.com/public-api/datasets/y7pckrw6z2)
- **Yemeni (yms)**: ArYSL CC0 static images (32 words) as handshape and location reference. — [Kaggle](https://www.kaggle.com/datasets/rehabalsaby/yemeni-sign-language)
- **Persian (psc)**: psl-tabular CC0 landmarks (~280 signs) after a provenance check. Request ELAR dk0598 and ISLR101. — [Kaggle](https://www.kaggle.com/datasets/sohaibmoradi/psl-tabular); [ELAR](https://www.elararchive.org/dk0598/)
- **Kurdish**: KuSL HamNoSys lexicon (527 rows, CC BY-NC-SA 4.0), for NC builds only. — [GitHub](https://github.com/KurdishBLARK/KurdishSignLanguage)
- **Afghan (afg)**: only SignPuddle sgn106 (14 entries). Effectively nothing. — [SPML](https://www.signbank.org/signpuddle2.0/data/spml/sgn106.spml)
- **Egyptian (esl)**: Kaggle eslamezzat (CC0, 15 words, 1,559 clips) + SignPuddle sgn84 (111 FSW). — [Kaggle](https://www.kaggle.com/datasets/eslamezzat/arabic-sign-language-arsl-for-words-videos); [SPML](https://www.signbank.org/signpuddle2.0/data/spml/sgn84.spml)
- **Tunisian (tse)**: SignPuddle sgn104 (4,519 entries), then the 57-word image set (CC BY/CC0). — [SPML](https://www.signbank.org/signpuddle2.0/data/spml/sgn104.spml); [Mendeley](https://data.mendeley.com/public-api/datasets/fbjjgzgv7f)
- **Algerian (asp)**: 3DZSignDB SiGML (419 signs). Resolve CC BY vs GPL-3.0 with the authors. — [Zenodo](https://zenodo.org/records/15020376)
- **Moroccan (xms)**: MoSL gloss CSVs (CC BY 4.0, Arabic + English, 2,199 items). Request videos from the authors / Shorouk. Avoid the MSL online-video set (Tier D). — [Mendeley](https://data.mendeley.com/public-api/datasets/23phgyt3mt); [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12828366/)

### Inferences
- **Languages with no usable source (explicit list):** Al-Sayyid Bedouin, Kafr Qasem*, Ghardaia/AJSL*, Palestinian, Lebanese, Syrian, Iraqi (lexical), Emirati*, Qatari, Kuwaiti, Bahraini, Omani*, Libyan, Sudanese. Jordanian and Afghan have only token SignPuddle puddles (31 and 14 entries).
  (*Tier C dictionary or dataset exists and is worth a permission request.)
- **Three permission emails would cover the largest gains:**
  1. Hamzah Luqman (KFUPM): KArSL-502, mArSL
  2. Ben Zaid et al. / Shorouk Association: MoSL 2,199 videos
  3. The Haifa lab / Ma'agale Shema: ISL dictionary videos, KQSL, AJSL

### Gaps
- Exact sign counts for the Saudi 2013 and 2018 print dictionaries, the Palestinian LIF dictionary, the 2006 Jordanian 500-sign dictionary and the SERVE Afghan dictionary, and whether any of them is available digitally under a license, remain unverified (no search budget).

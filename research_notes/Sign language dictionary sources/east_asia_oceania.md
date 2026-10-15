# Licensed lexical / dictionary sources for the sign languages of East Asia and Oceania

Research date: 2026-10-14. Licenses were checked on the original page wherever one could be fetched; quotes are verbatim, or marked as a summary when the fetch tool would only paraphrase. "UNVERIFIED" means the claim comes only from a search snippet or a secondary catalogue. Tier gate: A = CC BY / BY-SA / CC0 / open dump; B = NC / research-only; C = register / contract / permission; D = skip.
Method note: the session-wide WebSearch budget (200 calls shared by all agents) ran out partway through. After that, only known primary URLs were fetched directly: GitHub API, Figshare API, ISO 639-3 tables, ELAR, the sign-lang@LREC and Compendium catalogues, and data.gov.tw's own dataset API. This mostly affects the Pacific, Mongolian, Tibetan and Aboriginal sections, which have more gaps.

Record format used below: `lang (ISO) | source | URL | type | size | license (verbatim) | SPDX | tier | access | commercial_ok | video_redistrib_ok | disk | citation | next action`

---

## Q1. Auslan (asf): Auslan Signbank, Auslan Corpus, ML datasets, Signbank code

### Takeaway
No Tier A Auslan lexicon exists. Auslan Signbank (5,172 signs) is CC BY-NC-ND 4.0, and the ND clause blocks avatar derivatives without permission. The corpora are contract-gated, and the ML datasets have no stated license. The only Tier A input is the small SignPuddle "Dictionary Australia" puddle (sgn42, 154 entries). The recommended first ingest is sgn42, plus a permission request to the Auslan Signbank editors.

### Cited Findings
- **Auslan Signbank.** asf | Auslan Signbank | https://auslan.org.au/ | lexical-db + isolated-video | "Sign 2447 of 5172 in the Auslan Dictionary" ([entry page](https://auslan.org.au/dictionary/words/hello-1.html)) | "This Signbank is licensed under Creative Commons BY-NC-ND 4.0" ([auslan.org.au](https://auslan.org.au/)) | CC-BY-NC-ND-4.0 | **B (ND, so effectively C for avatar derivation)** | browse only; no data download or API is linked on the home page ([auslan.org.au](https://auslan.org.au/)) | commercial_ok: no | video_redistrib_ok: verbatim, non-commercial only; no adaptations | disk: n/a | next: email the Signbank editors via the feedback form for permission to derive. — [auslan.org.au](https://auslan.org.au/)
- The public entry page shows keywords, definitions and region maps, but no phonology fields (handshape, location, movement) and no video file URLs in the fetched content. — [hello-1 entry](https://auslan.org.au/dictionary/words/hello-1.html)
- The sign-lang@LREC catalogue also records the Auslan Signbank licence as "CC BY-NC-ND 4.0". — [sign-lang@LREC data page](https://www.sign-lang.uni-hamburg.de/lrec/data/auslansignbank.html)
- **Signbank software.** Signbank/Auslan-signbank is BSD-3-Clause ("The original Signbank code supporting the Auslan Signbank…", last push 2016). Signbank/Global-signbank is BSD-3-Clause and active (pushed 2026-10-14). This is code, not data, and is useful if Marionet wants a Signbank-compatible export schema. — [GitHub API Auslan-signbank](https://api.github.com/repos/Signbank/Auslan-signbank); [GitHub API Global-signbank](https://api.github.com/repos/Signbank/Global-signbank)
- **Auslan Corpus (Johnston, ELAR, 2008).** asf | continuous-video | 300 hours, 3 TB, 1,700 clips, 100 signers, 357 annotated movies | Licence: "information not available" | 463 files need registration and 385 need confirmed registration | handle http://hdl.handle.net/2196/d8a991a5-d8cc-4f85-a5ff-c37279ebb625 | **C**. — [Sign Language Dataset Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/auslancorpus.html)
- On ELAR, Auslan items such as "AAM1A1c2a – The Boy Who Cried Wolf" are marked S_SubscriberAccess or U_UserAccess. The search facet counted 565 S and 283 U items. — [ELAR search "Auslan"](https://www.elararchive.org/?s=Auslan)
- **Expanded Auslan Corpus (Monash, 2022–24).** Auslan.org.au says the expanded corpus was deposited at Monash during 2022–24 and adds annotation files for 357 clips. — [auslan.org.au/about/corpus](https://auslan.org.au/about/corpus/)
- The Lite version is priced "$0.00", "provided under license from Monash University with the contribution of Macquarie University", and "Access may be requested via Language Data Commons of Australia (LDaCA)". Licensing questions go to innovation@monash.edu. No CC licence is stated. **C.** — [shop.monash.edu Lite](https://shop.monash.edu/expanded-auslan-corpus-lite.html)
- A "Full" version for tertiary researchers exists. UNVERIFIED: this comes from a search snippet only. — [shop.monash.edu Full](https://shop.monash.edu/expanded-auslan-corpus-full.html)
- **MM-WLAuslan (NeurIPS 2024 D&B).** isolated-video | 282K+ videos, 3,215 glosses, 73 signers, three Kinect-V2 cameras plus one RealSense | the project page shows only "© MM-WLAuslan Dataset 2021", with no licence or access terms | **D/C (no stated license)**. — [project intro](https://uq-cvlab.github.io/MM-WLAuslan-Dataset/docs/en/introduction)
- **Auslan-Daily (NeurIPS 2023 D&B).** continuous-video | "more than 45 hours", "collected from the Auslan educational TV series and Auslan TV programs" | no licence stated | **D (broadcast-derived, no license)**. — [Auslan-Daily intro](https://uq-cvlab.github.io/Auslan-Daily-Dataset/docs/en/introduction)
- **SVIAP Corpus** (Sociolinguistic Variation in Auslan Project): catalogued with no licence listed. — [sign-lang@LREC](https://www.sign-lang.uni-hamburg.de/lrec/data/sviapcorpus.html)
- **SignPuddle "Dictionary Australia" (sgn42).** notation (SignWriting FSW) | 154 entries | 31,678 bytes | Last-Modified 2025-12-11 | dump https://www.signbank.org/signpuddle2.0/data/spml/sgn42.spml (verified by HEAD and download; entries counted locally) | **A**, subject to the SignWriting licence note in Q11. — [SignPuddle 2.0 index](https://www.signbank.org/signpuddle2.0/)

### Inferences
- Auslan is CC BY-NC-ND, and NZSL (Q2) is BY-NC-SA. For Marionet, the ND clause matters more than NC: retargeting a sign onto a VRM avatar is an adaptation, so Auslan needs written permission even for non-commercial demos.
- The Auslan Signbank database records phonology internally (Signbank software has handshape and location fields), but that data is not exposed publicly. Getting it means asking the editors for a CSV export.

### Gaps
- No licence page on auslan.org.au states video-specific terms; the /about/conditions/ URL returned "page not found".
- MM-WLAuslan's download agreement (if any) could not be read, and the project page shows no terms.
- The terms of the LDaCA collection page itself were not fetched.

---

## Q2. NZSL (nzs): NZSL Online Dictionary, public data dump, NZSL Share, Signbank

### Takeaway
NZSL has the region's best-structured lexical dump: a monthly SQLite snapshot on GitHub Releases with 5,344 entries, handshape and location codes, and about 10.7k citation-video URLs. The release notes license it CC BY-NC-SA 4.0. The current nzsl.nz terms, however, prohibit AI/ML use and require permission for remixing, so treat it as **Tier B with a terms conflict** and get written permission from DSRU before ingesting. It is the recommended first NZSL ingest once permission is secured, metadata first.

### Cited Findings
- **Release-note licence.** The NZSL dictionary snapshot release notes say: "NZSL Dictionary data by Deaf Studies Research Unit, Victoria University of Wellington is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License." The latest release is `signbank-2026-10-07`, and there are 93 releases, the earliest dated 2020-08-15. — [GitHub Releases API, ODNZSL/nzsl-dictionary-scripts](https://api.github.com/repos/ODNZSL/nzsl-dictionary-scripts/releases)
- **Release assets.** `nzsl.db` (SQLite) is 8,138,752 bytes, `nzsl.dat` is 1,081,903 bytes, and `assets.tar.gz` (images) is 96,122,880 bytes. Example URL: https://github.com/ODNZSL/nzsl-dictionary-scripts/releases/download/signbank-2026-10-07/nzsl.db — [GitHub Releases API](https://api.github.com/repos/ODNZSL/nzsl-dictionary-scripts/releases)
- **Contents of nzsl.db** (the 8 MB file was downloaded and inspected locally):
  - Tables: `words` (5,344 rows), `videos` (16,215 rows: 10,717 "main", 4,906 "finalexample1", 546 "finalexample2" and so on), `examples` (5,475), `topics` (45) and `word_topics` (7,073).
  - `words` has phonology columns: `handshape` (63 distinct NZSL codes, e.g. 1.1.1, 5.1.1), `location` and `location_identifier` (24 distinct), `one_or_two_handed`, `is_directional`, `is_locatable`, `is_fingerspelling`, `inflection_*`, `word_classes`, `maori` and `usage`.
  - Video URLs point to `https://nzsl-signbank-media-production.s3.amazonaws.com/glossvideo/…r480x360.mp4`.
  - Source: [nzsl.db release asset](https://github.com/ODNZSL/nzsl-dictionary-scripts/releases/download/signbank-2026-10-07/nzsl.db)
- **How the snapshot is built.** The scripts repo README says `build-assets-from-signbank.py` pulls from Signbank (it needs a Signbank account), produces `nzsl.db` and `nzsl.dat`, and puts "monthly builds" on the Releases tab. The repo code is MIT. — [nzsl-dictionary-scripts](https://github.com/ODNZSL/nzsl-dictionary-scripts)
- **Website terms conflict with the release licence.** The terms page (summary) says: "You must not copy or reuse this content unless it is allowed under these terms, or you have our permission."
  - Commercial use and "Remixing, changing or adapting" need permission. "We will usually give permission for small adaptations (up to 50 signs)", with credit and share-alike.
  - "You must not use any of our content to train, test, or build AI systems", including scraping or adding it to datasets.
  - No CC licence is mentioned on that page.
  - Credit line: "The Online Dictionary of New Zealand Sign Language - NZSL Online". Contact: https://www.nzsl.nz/contact-us
  - Source: [nzsl.nz/copyright](https://www.nzsl.nz/copyright/)
- **About page.** "Material from this dictionary, including the drawings and videos, is licensed to the Deaf Studies Research Unit"; "Generally, personal use and use in teaching NZSL is permitted"; "Database version 20261007". Citation: McKee, D., McKee, R., Pivac Alexander, S., Pivac, L., & Vale, M. (2011). *Online dictionary of New Zealand Sign Language*. DSRU, Victoria University of Wellington. — [nzsl.nz/about](https://www.nzsl.nz/about/)
- The site footer reads "NZSL Dictionary by Deaf Studies Research Unit, Victoria University of Wellington © Victoria University of Wellington 2011- 2026". — [nzsl.nz](https://www.nzsl.nz/)
- The Sign Language Dataset Compendium lists the NZSL Online Dictionary as "CC BY-NC-SA 4.0", about 4,500 signs. That entry is older; the current count is 5,344 (above). — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/nzsldictionary.html)
- **NZSL Share.** https://www.nzslshare.nz is covered by the same DSRU terms. People who upload to NZSL Share keep ownership of their own content, so third-party permission is needed per item. **D/C.** — [nzsl.nz/copyright](https://www.nzsl.nz/copyright/)
- **Code repositories.** ODNZSL/NZSL-signbank (BSD-3-Clause, a fork of Global/NGT-signbank), nzsl-online (GPL-3.0), and the iOS and Android apps (MIT). These are code only. — [github.com/ODNZSL](https://github.com/ODNZSL)
- **SignPuddle "Dictionary New Zealand" (sgn70).** 37 entries | 7,490 bytes | Last-Modified 2016-02-26 | https://www.signbank.org/signpuddle2.0/data/spml/sgn70.spml | **A** (SignWriting licence, Q11). — [SignPuddle 2.0](https://www.signbank.org/signpuddle2.0/)

Record: `nzs | NZSL Dictionary snapshot (nzsl.db) | github.com/ODNZSL/nzsl-dictionary-scripts/releases | lexical-db + phonology + isolated-video URLs | 5,344 words / 10,717 main videos | "licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License" (release notes), but the site terms forbid AI use | CC-BY-NC-SA-4.0 | B (terms conflict, so C in practice) | GitHub release download | commercial_ok: no | video_redistrib_ok: NC-SA only if the release licence governs; site terms say permission needed | disk: 8 MB db + 96 MB images + videos (size not measured) | McKee et al. 2011 | next: email DSRU (nzsl.nz/contact-us) describing the avatar/compiler use and asking whether the CC BY-NC-SA release terms or the site's no-AI clause applies; until then use only the db's field schema and handshape inventory for design.`

### Inferences
- The brief's "CC BY-NC-SA 3.0 NZ" is out of date. The data dump now says BY-NC-SA **4.0**, and the website's custom terms (with the AI ban) were added later and are stricter. A rule-based avatar compiler is arguably not an "AI system", but that is for DSRU to rule on, not something to assume.
- The NZSL handshape code system (e.g. 1.1.1, 5.1.1) maps naturally onto the per-sign handshape and location codes Marionet wants. It is the only in-scope source with phonology fields in an open dump.
- The 480x360 citation videos average roughly 1 MB each (my estimate, not measured), so 10.7k main videos would be about 5–15 GB.

### Gaps
- Whether DSRU regards the GitHub snapshot's CC licence as still current, given the AI clause on nzsl.nz, is unresolved and needs DSRU to confirm by email.
- No NZSL corpus with public licence terms was found. NZSL Signbank (signbank.nzsl.nz) needs a login.

---

## Q3. Australian Aboriginal sign languages (asw, ygs; Arandic, Warlpiri; Torres Strait)

### Takeaway
The only verified public lexical resource is Iltyem-iltyem: over 1,000 sign films from Central and Northern Australian communities, CC BY-NC-ND 3.0 Unported, from Batchelor Institute. That is Tier B with ND, plus Indigenous cultural-protocol obligations, so it is **C in practice**. Nothing usable was verified for Yolŋu SL (ygs), Warlpiri SL as an ELAR/AIATSIS dump, or Torres Strait. **Recommended first ingest: none.** Approach Batchelor Institute / the Iltyem-iltyem sign team only with community consent.

### Cited Findings
- **Iltyem-iltyem.** asw (Arandic/Anmatyerr, Warlpiri, Gurindji, Kaytetye and more) | Iltyem-iltyem | https://www.iltyemiltyem.com/ | isolated-video | "over one thousand short films of signs from eight different communities and nine language groups" | **B (ND), C in practice** | browse only. — [iltyemiltyem.com](https://iltyemiltyem.com/)
- The licensing page says "Iltyem-iltyem: NT Language Support Program – Central Australia" by Batchelor Institute of Indigenous Tertiary Education is licensed under the "Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License". It adds: "You may not alter, transform, or build upon this work", and "Any of the above conditions can be waived if you get permission from the copyright holder." SPDX: CC-BY-NC-ND-3.0. — [iltyemiltyem.com/licensing](https://www.iltyemiltyem.com/licensing/)
- ISO 639-3 codes are confirmed: `asw` = Australian Aborigines Sign Language and `ygs` = Yolŋu Sign Language. Warlpiri, Arandic and Torres Strait sign have no separate codes. — [ISO 639-3 code table](https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3.tab); [ISO ygs](https://iso639-3.sil.org/code/ygs)
- ELAR keyword search for "Yolngu" returned 190 results. None visible on page 1 was a sign-language deposit, and the language facet showed no sign language. — [ELAR search "Yolngu"](https://www.elararchive.org/?s=Yolngu)
- ELAR's "sign language" search facets list no Australian Aboriginal sign language. The Auslan, Australian Irish SL and other facets appear, but not Yolŋu or Warlpiri. — [ELAR search "sign language"](https://www.elararchive.org/?s=sign+language)
- The sign-lang@LREC language pages for `asw` and `ygs` returned empty stub pages with no resources listed. — [sign-lang@LREC ygs](https://www.sign-lang.uni-hamburg.de/lrec/language/ygs.html)

### Inferences
- Even with permission, Aboriginal sign material carries cultural restrictions (e.g. signs tied to deceased people or ceremony). A Marionet ingest should be community-led and is not a "dump-style" opportunity.

### Gaps
- Bauer's Yolŋu SL deposit, Kendon's Warlpiri and North Central Desert sign films (AIATSIS), and Ellis's Ngaanyatjarra sign materials were not verified, because WebSearch was exhausted and AIATSIS was not searched. Archive IDs and access conditions are unknown.
- Torres Strait sign: no resource found.

---

## Q4. Japanese SL (jsl) and Japanese village SLs (Amami Koniya jks, Miyakubo ehs)

### Takeaway
The best JSL data is contract-gated:
- **KoSign** (Kogakuin University via NII IDR) has about 4,873 words with optical motion capture in BVH/C3D/FBX. It is research-only, and data may not be included in products: Tier C/B.
- The **JSL Colloquial Corpus** (NII IDR, 122 signers, 100-word lexical task) is academic-only and excludes companies: Tier C.
- NHK's 8,000-word motion database is view-only, © NHK: Tier D.

The only Tier A JSL source today is SignPuddle "Dictionary Japan" (sgn64, 328 entries). The new **JSL-DC** (270 words × 19 signers) says it "will be released under a CC-BY 4.0 license", so watch it. Nothing exists for Amami Koniya or Miyakubo. **Recommended first ingest:** sgn64 now. Apply for KoSign if an academic partner can sign the contract. Watch JSL-DC.

### Cited Findings
- **KoSign** (工学院大学多用途型日本手話言語データベース). jsl | https://www.nii.ac.jp/dsc/idr/rdata/KoSign/ | **mocap** + multi-view video + Kinect depth | the IDR page summary says 3,701 words (Period 1) + 1,172 words (Period 2, 2,655 motion patterns), and 3 + 7 dialogues; 2 native signers (full data for the male signer, mocap and depth only for the female); recorded 2017–2019 at Toei Tokyo studio; mocap in BVH, C3D and FBX; video MXF/mp4 in 4K/FHD; words about 2.5 TB compressed, dialogues about 0.4 TB | "データセットの利用目的は研究（基礎技術開発を含む）に限ります。" | **C (contract) / B (research-only)** | apply by Word form to the IDR office, followed by a sealed paper agreement; companies may ask case by case. — [NII IDR KoSign](https://www.nii.ac.jp/dsc/idr/rdata/KoSign/)
- **KoSign policy** (summarised by the fetch tool):
  - Research use only: "利用者は、本件データを、学術研究（基礎技術開発を含む）にのみ利用することができる".
  - No products: "利用者が開発する製品、システム、サービス等に本件データ及び本件データを加工したデータが含まれてはならない".
  - No third-party disclosure or public transmission without Kogakuin's written consent.
  - Published face images must be masked.
  - All data and derived data must be deleted at termination ("本件データ及びこれを加工して得られたデータの全てを削除・消去する").
  - commercial_ok: no; video_redistrib_ok: no.
  - Source: [KoSign-policy.html](https://www.nii.ac.jp/dsc/idr/rdata/KoSign/documents/KoSign-policy.html)
- An IDR poster says KoSign Ver.5 has "約6,300の手話単語" and 10 dialogue themes, which conflicts with the IDR page's roughly 4,873 words. This is UNVERIFIED (search snippet). — [IDR UF2024 KoSign poster](https://www.nii.ac.jp/dsc/idr/userforum/poster/IDR-UF2024_KoSign.pdf)
- **JSL Colloquial Corpus** (日本手話話し言葉コーパス, Bono Lab NII and Osugi, Tsukuba Univ. of Technology). jsl | https://www.nii.ac.jp/dsc/idr/rdata/JSL/ | continuous-video, plus a **lexical task with 100 picture-prompted words** | 122 Deaf signers from 7 prefectures, 2012–2016, about 70 GB MP4, ELAN for more than half the dialogues | "コーパスの利用目的は学術研究に限ります。"; "民間企業等の方は申し訳ありませんがご利用いただけません" | **C/B** | lab-level application with a sealed agreement | commercial_ok: no. — [NII IDR JSL](https://www.nii.ac.jp/dsc/idr/rdata/JSL/)
- The project site says "本コーパスの配布および利用上の契約はNII情報学データリポジトリ(IDR)が行います。" and "© Bono Lab. All Rights Reserved." — [research.nii.ac.jp/jsl-corpus/public/use.html](https://research.nii.ac.jp/jsl-corpus/public/use.html)
- The Compendium lists 40 hours, 140 clips and 27,371 tokens, with "Public access to recordings of dialogue and elicitation of Nara and Gumma via browsable homepage". That public access is for viewing only. — [Compendium jslcolloquial](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/jslcolloquial.html)
- **NHK 手話モーションデータベース** (STRL). jsl | https://www.nhk.or.jp/strl/signlanguagecg/searchJSL/ | avatar-lexicon / mocap (view-only) | "約8,000語の手話表現のモーションをご覧いただけます" | captured with 26 IR cameras and 73 reflective markers, plus face capture | sign forms are based on JFD's 「わたしたちの手話」 | no download found. — [NHK STRL searchJSL](https://www.nhk.or.jp/strl/signlanguagecg/searchJSL/)
- The old NHK 手話CG word-search site "9月30日で終了しました" and says its 「手話のモーションデータ」 can now be viewed on the STRL site. — [www2.nhk.or.jp/signlanguage](https://www2.nhk.or.jp/signlanguage/)
- NHK pages carry "Copyright NHK (Japan Broadcasting Corporation). All rights reserved. 許可なく転載することを禁じます。" **D**; the next step would be a formal licensing inquiry to NHK STRL. — [NHK weather sign CG](https://news.web.nhk/kishou-shuwacg/)
- **JSL-DC** (arXiv 2608.18412). jsl | isolated-video | 36.7K videos, 19 Deaf signers, 270-word lexicon chosen by Deaf/CODA linguists, with linguist descriptions for confusable signs | "will be released under a CC-BY 4.0 license" | **A-pending (not yet released)** | next: monitor for a release URL. — [arXiv 2608.18412](https://arxiv.org/abs/2608.18412)
- **J-Shuwa.** A sentence-level JSL–Japanese corpus of 197K pairs built from YouTube subtitles (UNVERIFIED snippet). **D (YouTube footage).** — [ACL Anthology 2026.findings-acl.1821](https://aclanthology.org/2026.findings-acl.1821/)
- **SignPuddle "Dictionary Japan" (sgn64).** notation | 328 entries | 79,703 bytes | Last-Modified 2025-04-28 | https://www.signbank.org/signpuddle2.0/data/spml/sgn64.spml | contributors include "江戸川ろう講師団" (17 entries) and "sutthikhun.pha" (91) | glosses are romanised, e.g. "Yuumei", "amai", "Inaka" | **A** (Q11). — [SignPuddle 2.0](https://www.signbank.org/signpuddle2.0/); dump inspected locally.
- **Asian SignBank** (CUHK CSLDS) includes JSL, HKSL, Sri Lankan, Jakarta, Yogyakarta, Ho Chi Minh City and Yangon SLs; 4,750 signs; Licence: "Asian Signbank licence" (text not located); public browsing, with registration for advanced functions. — [Compendium asiansignbank](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/asiansignbank.html)
- Asian SignBank stores "Detailed phonetic information which includes inherent features (i.e. … handshape, place of articulation, body part, palm orientation, handparts, etc.) and prosodic features (… path and shape, setting, orientation, aperture and handshape changes, trilled movements, etc.)". **C.** — [Asian SignBank home](http://cslds.org/asiansignbank/frame_elements/home.jsp)
- **Other catalogued JSL resources** with no licence listed: Annotated JSL Corpus, Deep JSLC, JSL News Corpus, JSL & ASL Dictionary, and the JSL/ASL/KSL trilingual dictionary. — [sign-lang@LREC jsl](https://www.sign-lang.uni-hamburg.de/lrec/language/jsl.html)
- **JSL syllable/phonology database (Hara & Miwa, Toyota Tech. Inst.).** A syllable database built from 『日本語-手話辞典』 is reported in IEICE WIT2023-3. It is not public (UNVERIFIED snippet). — [IEICE abstract](https://ken.ieice.org/ken/paper/20230616GCuP/)
- **Village SLs.** ISO 639-3 has `jks` = Amami Koniya Sign Language and `ehs` = Miyakubo Sign Language. The sign-lang@LREC language pages for both are empty stubs. — [ISO 639-3 table](https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3.tab); [sign-lang@LREC jks](https://www.sign-lang.uni-hamburg.de/lrec/language/jks.html)

### Inferences
- KoSign is the only in-scope **mocap lexicon** with BVH/FBX, and its "no data in products" and "delete on termination" clauses make it unusable for shipped Marionet clips. At most it could be used for internal research comparisons under an academic partner's contract.
- The JFD (全日本ろうあ連盟 / 日本手話研究所) dictionaries, such as 「わたしたちの手話」 and 『新日本語-手話辞典』, are commercial publications and Tier D. NHK's motion lexicon reproduces JFD forms, so both rights holders would matter.

### Gaps
- The JFD/日本手話研究所 site could not be checked (https://www.jfd.or.jp/sgi/ returned 404), so its copyright statement was not quoted.
- No HamNoSys JSL dataset was found.
- JSL-DC's release URL is not known.
- The full text of the JSL Colloquial Corpus 利用規約 was not read (only the IDR page was).

---

## Q5. Korean SL (kvk): NIKL dictionary, data.go.kr, AI-Hub, KSL-Guide, KETI, SignPuddle

### Takeaway
The standout is **SignPuddle "Dictionary Korea" (sgn78): 64,105 entries (58,132 unique signs)**, Tier A under the SignWriting CC BY-SA 3.0 policy, and the largest open notation dump in scope. The government dictionary is CC BY-NC-ND 2.0 KR, with videos set per clip. AI-Hub's 536K-clip dataset (the same data as KSL-Guide) is restricted to Korean nationals, and GKSL13k (gloss text) is CC BY-NC-SA 4.0. **Recommended first ingest: sgn78**, using a full download in the ingest pipeline (26.6 MB). This research stayed under its 20 MB cap and only sampled the first 300 KB.

### Cited Findings
- **SignPuddle Korea (sgn78).** kvk | notation (FSW) | the puddle page shows "64105 Total Entries 58132 Unique Signs 64181 Sign Occurrences" | dump https://www.signbank.org/signpuddle2.0/data/spml/sgn78.spml, Content-Length 26,555,465, Last-Modified 2026-10-14 (still being edited) | **A** (Q11). — [SignPuddle sgn78](https://www.signbank.org/signpuddle2.0/index.php?ui=1&sgn=78)
- A 300 KB range sample (785 entries) showed contributors "kjw" (449), "jican89" (127) and IP-only users, with source field `<src>kangsuk,byun</src>`. Some early entries carry only numeric glosses ("9", "16"), so a gloss-quality filter is needed. — sample of [sgn78.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn78.spml)
- **NIKL 한국수어사전.** kvk | https://sldict.korean.go.kr/ | lexical-db + isolated-video | "본 누리집에서 별도로 명시되지 않은 모든 자료는 '크리에이티브 커먼즈 저작자표시-저작자 표시-비영리-변경금지2.0 대한민국 라이선스'에 따라 배포되며 이용될 수 있습니다." | CC-BY-NC-ND-2.0-KR | **B (ND, so C for derivation)**. — [sldict copyright policy](https://sldict.korean.go.kr/front/main/copyRightPolicy.do)
- The same policy says videos follow separate per-clip settings ("동영상 파일 자료는 이용 허용 여부가 다르게 설정되어 있으므로"). It also says "일부 수어 동영상의 저작권은 국립국어원이 소유하고 있지 않습니다", specifically for the 일상생활 수어 and 전문용어 수어 sections. Contact: 02-2669-9775. — [sldict copyright policy](https://sldict.korean.go.kr/front/main/copyRightPolicy.do)
- The Compendium lists this dictionary as "CC BY-SA 2.0 KR" with 3,500 signs, which **contradicts** the live policy page (BY-NC-ND 2.0 KR). The live page governs. — [Compendium koreansldictionary](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/koreansldictionary.html)
- **data.go.kr 국립국어원_오늘의 수어 정보 (15152310).** A CSV of KSL entry numbers with Korean equivalents | 공공누리 Type 4 (attribution, no commercial use, no modification) | no download URL is populated in the metadata record | **B**. — [data.go.kr metadata 15152310](https://www.data.go.kr/biz/dcat/metadata/15152310.do)
- **AI-Hub 수어 영상 (dataSetSn=103).** kvk | isolated- and continuous-video plus keypoints | 536,000 mp4 clips covering 3,000 words, 2,000 sentences and 1,000 fingerspelling/number items; 20 studio signers × 5 angles, plus 21 crowd signers and 15K avatar clips; JSON keypoints (pose 25, hands 21+21, face 70) | built by 테스트웍스 with KAIST RCV, 한국농아인협회 and others | "※ 내국인만 데이터 신청이 가능합니다." | download by approval-gated API, or offline at the K-ICT 빅데이터센터 | **C (closed to non-Koreans)**. — [AI-Hub dataSetSn=103](https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&dataSetSn=103)
- AI-Hub's general terms, as quoted on data.go.kr, allow models trained on AI-Hub data to be sold with attribution. However, "데이터를 재가공하여 배포하는 행위는 원칙적으로 불가" without prior agreement with NIA and the builder (UNVERIFIED snippet). — [data.go.kr 15146382](https://www.data.go.kr/data/15146382/fileData.do)
- **KSL-Guide** (KAIST, FG 2021) is the same data: its GitHub README links its "Download" to AI-Hub dataSetSn=103 (121K samples, 2D/3D keypoints). The repo has no licence file. — [ChelseaGH/KSL-Guide](https://github.com/ChelseaGH/KSL-Guide)
- **GKSL13k** (KETI AIRC). kvk | gloss-level text (Korean ↔ KSL gloss) | repo 592 KB | LICENSE.md: "Attribution-NonCommercial-ShareAlike 4.0 International" | CC-BY-NC-SA-4.0 | **B** | no video. — [AIRC-KETI/GKSL-dataset](https://github.com/AIRC-KETI/GKSL-dataset); [sign-lang@LREC gksl13k](https://www.sign-lang.uni-hamburg.de/lrec/data/gksl13k.html)
- **NIASL2021 (EQ4ALL, the Korean "KoSign" project).** The site says "This sit is still under construction"; no terms are given. **D/C.** — [eq4all-data.github.io](https://eq4all-data.github.io/)
- **NIKL KSL Corpus.** 90 hours, about 17 hours annotated; licence "information not available". **C.** — [Compendium kslcorpus](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/kslcorpus.html)
- **NIKL 모두의 말뭉치.** It released a 한국어-한국수어 병렬 말뭉치 among 112 corpora, available after an online agreement and approval (UNVERIFIED news snippet). **C.** — [sidae.com 2025-07](https://www.sidae.com/article/2025070206228049664)

### Inferences
- The brief listed "KoSign" under Japanese; that is correct (Kogakuin). Korea's EQ4ALL project is *also* called "KoSign" (NIASL2021), so keep the two apart in ingest manifests.
- Under ShareAlike, sgn78-derived artefacts such as SignDesc files must be released CC BY-SA. That fits a dictionary layer but needs a licence boundary in Marionet's outputs.

### Gaps
- sgn78 was not fully downloaded (26.6 MB, over the 20 MB research cap), so the share of entries with Korean glosses was not measured.
- The KETI isolated KSL video dataset (as opposed to GKSL13k text) was not found as a separate open release.
- Whether foreigners can use the AI-Hub 안심구역 (Safe Zone) was not confirmed.

---

## Q6. Chinese SL (csl): NationalCSL-DP, USTC datasets, DEVISIGN, National Common SL Dictionary

### Takeaway
**NationalCSL-DP** (Scientific Data 2025) is a verified **Tier A** isolated-sign video set: 6,707 signs covering the full 国家通用手语 vocabulary, 134,140 videos, 10 signers, front and left views, CC BY 4.0 on Figshare, 18.64 GB. It is the recommended first CSL ingest. The USTC sets (CSL/SLR500, CSL-Daily, NMFs-CSL) and DEVISIGN are research-only agreements (B/C). The official 国家通用手语词典 has no open licence (D).

### Cited Findings
- **NationalCSL-DP record.** csl | https://figshare.com/articles/media/NationalCSL-DP/27261843 | isolated-video | 23 files, 18.64 GB in total (per-participant zips of 0.24–1.9 GB, plus gloss.csv at 0.2 MB) | Figshare licence field: "CC BY 4.0", https://creativecommons.org/licenses/by/4.0/ | CC-BY-4.0 | **A** | direct HTTP download | commercial_ok: yes (attribution) | video_redistrib_ok: yes (attribution) | DOI 10.6084/m9.figshare.27261843.v3. — [Figshare API](https://api.figshare.com/v2/articles/27261843)
- **Article.** The article "consists of 6,707 distinct sign motions as well as 134,140 sign videos"; "ten signers"; "two perspectives … the front side and the left side"; "1920 × 1280". Citation: Jin, P., Li, H., Yang, J. et al. Sci Data 12, 660 (2025), https://doi.org/10.1038/s41597-025-04986-x. The article itself is CC BY 4.0. — [Scientific Data article](https://www.nature.com/articles/s41597-025-04986-x)
- **gloss.csv** was downloaded (6,708 lines including the header `#ID,Chinese Sign Language Word,Translation`). Example rows: `0000,利用1-2,Use (sign 1-2)` and `0001,孔雀,Peacock`. — [Figshare NationalCSL-DP](https://figshare.com/articles/media/NationalCSL-DP/27261843)
- **CSL / SLR500 (USTC).** 500 words × 50 signers × 5 repetitions; Kinect 2.0 RGB at 1280×720, depth, and 25-joint skeleton | "released to universities and research institutes for research purpose only" | the agreement must be signed by a full-time staff member | **B/C**. — [USTC CSL page](https://ustc-slr.github.io/datasets/2015_csl/)
- **CSL-Daily (USTC).** Continuous SLT data | "released to universities and research institutes for research purpose only" | Release Agreement emailed to ustc_vslrg@126.com | **B/C**. — [USTC CSL-Daily](https://ustc-slr.github.io/datasets/2021_csl_daily/)
- **NMFs-CSL.** Licence: "NMFs-CSL Dataset Release Agreement". **B/C.** — [sign-lang@LREC nmfscsl](https://www.sign-lang.uni-hamburg.de/lrec/data/nmfscsl.html)
- **DEVISIGN (ICT-CAS VIPL).** VIPL "reserves the copyright of all the videos and binary files"; the full set has 4,414 vocabulary items, with three subsets (36 letters/numbers, 500, and 2,000 words) released for research (UNVERIFIED snippet). **B/C.** — [VIPL DEVISIGN page](https://vipl.ict.ac.cn/en/resources/databases/201801/t20180126_34795.html)
- **Global Signbank CSL_Shanghai.** 2,241 glosses, 0 public; "The data are presently not accessible to users outside Radboud University and Fudan University"; "All rights reserved; (c) Radboud University & Fudan University." **D.** — [signbank.cls.ru.nl CSL_Shanghai](https://signbank.cls.ru.nl/datasets/CSL_Shanghai)
- **国家通用手语词典.** Published by 中国残联 / 华夏出版社; the app covers all 8,000+ words with videos. No licence statement was found (UNVERIFIED snippet). **D.** — [App Store listing](https://apps.apple.com/us/app/%E5%9B%BD%E5%AE%B6%E9%80%9A%E7%94%A8%E6%89%8B%E8%AF%AD%E7%B3%BB%E5%88%97/id1465697243)
- **SignPuddle "Dictionary China" (sgn83).** 97 entries | 24,750 bytes | Last-Modified 2022-03-02 | https://www.signbank.org/signpuddle2.0/data/spml/sgn83.spml | **A**. — [SignPuddle 2.0](https://www.signbank.org/signpuddle2.0/)
- **Hugging Face "Nebularer/CSL_Daily".** A third-party re-upload of CSL-Daily appeared in search. It is not authorised by USTC's agreement, so treat it as a **D (scraped mirror)**; its content was not inspected. — [HF README](https://huggingface.co/datasets/Nebularer/CSL_Daily/blob/main/README.md)

### Inferences
- NationalCSL-DP's gloss IDs and variant numbering ("利用1-2") appear to follow the 国家通用手语词典 entries. The 2018 dictionary itself is not openly licensed, but the CC BY 4.0 video recreation by Leshan Normal University / UESTC is.
- Before shipping, check that signer consent covers avatar retargeting. CC BY lets you derive, but personality and portrait rights are separate; Marionet outputs motion, not faces, which reduces the risk.

### Gaps
- No Chinese phonology spreadsheet (ASL-LEX-style) was found.
- The Fudan CSL corpus is only accessible via Global Signbank to Radboud and Fudan.

---

## Q7. Hong Kong SL (hks) and Macau

### Takeaway
All HKSL resources are © CUHK CSLDS or gated: HKSL Browser (about 7,346 entries, All Rights Reserved), HKSL Corpus (registration), Asian SignBank (custom licence), and TVB-HKSL-News (request form, broadcast source). The HK SignPuddle (sgn12, 14 entries) contains spam. **No Tier A HKSL lexicon exists.** The next step is a permission request to CSLDS. For **Macau**, the only resource is the ELAR deposit "Preliminary Documentation of Macau Sign Language" (Sze et al.), which includes a 500-item lexical elicitation per signer. It is U_UserAccess, so Tier C.

### Cited Findings
- **HKSL Browser.** hks | http://www.cslds.org/hkslbrowser/ | lexical-db + isolated-video | footer: "Copyright © 2018 by Centre for Sign Linguistics and Deaf Studies . All Rights Reserved" | the copyright statement opens "本網頁的內容，包括但不限於所有文本、平面圖像、圖畫、圖片、照片、視頻以及數據或其他資料的匯編，均受版權保障。" and prohibits copying, adapting or distributing without prior written permission | **D/C**. — [HKSL Browser](http://www.cslds.org/hkslbrowser/); [copyright.jsp](http://www.cslds.org/hkslbrowser/copyright.jsp)
- The Compendium gives about 7,346 entries; the fields include initial-handshape image, variants and origin. — [Compendium hkslbrowser](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/hkslbrowser.html)
- **HKSL Corpus.** Licence: "HKSL Corpus licence"; "Restricted access requires confirmed registration for download of video and transcripts". **C.** — [Compendium hkslcorpus](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/hkslcorpus.html)
- **Child HKSL Corpus** (聾童香港手語語料庫), http://www.cslds.org/acquisition/en-us/Corpora: no licence listed. **C.** — [sign-lang@LREC](https://www.sign-lang.uni-hamburg.de/lrec/data/childhkslcorpus.html)
- **Asian SignBank** (includes HKSL and JSL; 4,750 signs; "Asian Signbank licence"). **C.** — [Compendium asiansignbank](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/asiansignbank.html)
- **TVB-HKSL-News** (HKUST). 16.07 hours, 2 signers, about 6,515–7,160 glosses (the page is inconsistent); "collected from TVB News Report with Sign Language TV program"; "please fill in the request form and send to us via email"; no licence | **D (broadcast footage)**. — [tvb-hksl-news.github.io](https://tvb-hksl-news.github.io/)
- **LSD Visual Sign Language Dictionary** (启聋手语视像字典). "Copyright © 2013 - 2015 Sign Assisted Instruction Programme. All rights reserved." **D.** — [sign-aip.net](https://www.sign-aip.net/sign-aip/en/home/)
- **SignPuddle "Hong Kong Dictionary" (sgn12).** 14 entries | 5,105 bytes | it includes a non-HKSL personal-name entry ("Salomão Rocha", user "Salomao Souza") | essentially empty. — [sgn12.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn12.spml)
- **Macau.**
  - The ELAR collection "Preliminary Documentation of Macau Sign Language" lists depositors Dr. Felix Yim Binh Sze, Ms Monica Xiao Wei and Aaron Yiu Leung Wong (CUHK). It was ELDP-funded (SG0252), ran 2013-10-01 to 2014-09-30, and has handle http://hdl.handle.net/2196/00-0000-0000-000F-B674-6. Its 79 items are 42 stimuli, 28 monologues and 9 discourses. Items are "U_UserAccess". — [ELAR collection](https://www.elararchive.org/index.php?name=SO_9fcf69c8-054a-43fd-b0f6-e195aefeeb42)
  - A session "Chan's 500 lexical items elicitation" contains macau_lex004.mp4, 56 .mts files and an ELAN .eaf; no licence text is shown. **C (ELAR registration and access request).** — [ELAR session](https://www.elararchive.org/uncategorized/SO_5fd66206-d5c1-471f-b167-19ca07793ba3/)
- Macau SL has no ISO 639-3 code; the table lists only hks and csl for this area. — [ISO 639-3 table](https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3.tab)

### Inferences
- The Macau ELAR lexical elicitations (several signers × 500 items) would be the cleanest citation-form source for Macau. ELAR "U" access normally means a registered user must accept ELAR's terms, which usually forbid redistribution. So this is research or reference only unless the depositors (CUHK) grant more.

### Gaps
- The text of the "Asian Signbank licence" and the "HKSL Corpus licence" was not found.
- ELAR's U/S access semantics were not quoted from ELAR's own access-protocol page.

---

## Q8. Taiwan SL (tss)

### Takeaway
Both main TSL dictionaries are All Rights Reserved: the CCU TSL Online Dictionary and the MOE 常用手語辭典. data.gov.tw (OGDL v1, which is CC BY-compatible) has **no** TSL lexical dataset; all 12 "手語" hits are service statistics. The only Tier A input is SignPuddle "Dictionary Taiwan" (sgn75, 214 entries), the recommended first ingest. For anything richer, request permission from the Taiwan Center for Sign Linguistics (CCU).

### Cited Findings
- **TSL Online Dictionary** (台灣手語線上辭典, CCU). tss | https://twtsl.ccu.edu.tw/TSL/ | lexical-db + isolated-video, with handshape search endpoints in the site JS (`/api/handSearch`, `/api/manualSearch`) | the JS bundle footer reads "©" + year + " The Taiwan Center for Sign Linguistics, National Chung Cheng University. All Rights Reserved." | **D/C**. — [twtsl.ccu.edu.tw](https://twtsl.ccu.edu.tw/TSL/en.php) (bundle `/assets/index-C6A9--kL.js`)
- A 2024 report gives about 4,100 words and 560 example sentences (UNVERIFIED news). — [1111.com.tw](https://www.1111.com.tw/news/jobns/154967)
- **MOE 教育部常用手語辭典.** https://special.moe.gov.tw/signlanguage/ | "Copyright © 2025 教育部常用手語辭典 All Right Reserved." | no licence or download | **D**. — [special.moe.gov.tw/signlanguage](https://special.moe.gov.tw/signlanguage/)
- **data.gov.tw.** The dataset-list API full-text search for "手語" returns 12 datasets, all on interpreter services and statistics (e.g. 135456 臺北市身心障礙者手語翻譯服務成果). None is a lexicon. The license on those is "政府資料開放授權條款-第1版". — [data.gov.tw API](https://data.gov.tw/api/front/dataset/list); [data.gov.tw/dataset/135456](https://data.gov.tw/dataset/135456)
- **TSL corpus** (文化部 commission to CCU). Reportedly online since 2026-04 with 16 topics and 132 videos; licence unknown (UNVERIFIED snippet). — [news.pts.org.tw](https://news.pts.org.tw/article/804643)
- **SignPuddle "Dictionary Taiwan" (sgn75).** 214 entries | 56,870 bytes | Last-Modified 2022-02-02 | English glosses, e.g. "WRITE", "NO", "first-born-male-'s-wife" | https://www.signbank.org/signpuddle2.0/data/spml/sgn75.spml | **A**. — [SignPuddle 2.0](https://www.signbank.org/signpuddle2.0/)

### Inferences
- The brief's idea of a data.gov.tw route (OGDL is CC BY-compatible) is a dead end for TSL lexical data as of 2026-10-14.

### Gaps
- The CCU dictionary's About and terms pages could not be rendered (React SPA), so a fuller terms text may exist there.
- The licence of the 2026 TSL corpus is unknown.

---

## Q9. Mongolian SL (msr) and Tibetan SL (lsn)

### Takeaway
Both ISO codes are confirmed active (msr = Mongolian Sign Language, lsn = Tibetan Sign Language). No licensed, downloadable lexical source was found for either. Neither has a SignPuddle puddle, an LREC/Compendium entry, or an ELAR sign-language facet. **Nothing usable; no ingest.**

### Cited Findings
- `msr` = "Mongolian Sign Language" and `lsn` = "Tibetan Sign Language", both active. — [ISO msr](https://iso639-3.sil.org/code/msr); [ISO lsn](https://iso639-3.sil.org/code/lsn)
- The sign-lang@LREC language pages for msr and lsn are empty stubs. — [sign-lang@LREC msr](https://www.sign-lang.uni-hamburg.de/lrec/language/msr.html)
- The SignPuddle 2.0 index has no Mongolia or Tibet puddle. — [SignPuddle 2.0](https://www.signbank.org/signpuddle2.0/)
- ELAR "sign language" facets list neither language. — [ELAR search](https://www.elararchive.org/?s=sign+language)

### Inferences
- Printed dictionaries are known to exist (a Mongolian SL dictionary from the national Deaf association, and a Tibetan SL dictionary from the Tibet Deaf Association / Handicap International era). These are from memory, UNVERIFIED, and would be Tier C or D at best.

### Gaps
- SIL archive pages (sil.org/resources/search/language/msr and /lsn) returned HTTP 403 to automated fetch.
- WebSearch was exhausted before Mongolian- or Tibetan-language searches could be run.

---

## Q10. Pacific: PNG SL (pgz), Fiji, Samoa, Tonga, Solomon Islands (szs), Kiribati, Vanuatu, Torres Strait

### Takeaway
Only PNG (pgz) and Solomon Islands (szs) have ISO 639-3 codes. Fiji, Samoa, Tonga, Kiribati and Vanuatu have none. No licensed downloadable lexical source was verified for any Pacific sign language, and SIL, Webonary and PARADISEC all blocked automated fetches with HTTP 403. **Nothing usable verified; no ingest.**

### Cited Findings
- ISO 639-3 has `pgz` = "Papua New Guinean Sign Language" and `szs` = "Solomon Islands Sign Language". The full table has no Fijian, Samoan, Tongan, Kiribati or Vanuatu sign language entries. — [ISO 639-3 table](https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3.tab); [ISO pgz](https://iso639-3.sil.org/code/pgz)
- The sign-lang@LREC pages for pgz and szs are empty stubs. — [sign-lang@LREC pgz](https://www.sign-lang.uni-hamburg.de/lrec/language/pgz.html)
- ELAR "sign language" facets list "Tok Pisin" and "Papua New Guinea" only as spoken-language or country facets, not as sign languages. — [ELAR search](https://www.elararchive.org/?s=sign+language)
- The SignPuddle 2.0 index has no PNG, Fiji, Samoa, Tonga or other Pacific puddle. — [SignPuddle 2.0](https://www.signbank.org/signpuddle2.0/)
- The SIL resource-search page for pgz/szs (https://www.sil.org/resources/search/language/pgz), PNG SIL (pnglanguages.sil.org), Webonary (https://www.webonary.org/) and the PARADISEC catalogue search all returned HTTP 403. — [webonary.org](https://www.webonary.org/)

### Inferences
- The PNG SL dictionary (Callan Services / PNG National Board for Special Education) and SIL-supported Fiji, Samoa, Tonga and Solomon Islands dictionaries are believed to exist as print or app products (from memory, UNVERIFIED). If they are SIL Dictionary App Builder or Webonary products, the licence is set per publication, often CC BY-NC-ND. Expect C/D.

### Gaps
- This whole region needs a follow-up pass with working web search or a manual browser: SIL Language & Culture Archives for pgz/szs, Webonary sign dictionaries, PARADISEC (Pacific), and Pacific Disability Forum / national Deaf association dictionary projects.

---

## Q11. Cross-cutting: SignPuddle IDs, repositories checked, dead ends, recommended first ingests

### Takeaway
Tier A inputs in scope:
- SignPuddle puddles: Korea sgn78 is large (64k); Japan sgn64, Taiwan sgn75, Australia sgn42, China sgn83 and NZ sgn70 are small; Hong Kong sgn12 is junk.
- **NationalCSL-DP** (CC BY 4.0 CSL isolated video).
- JSL-DC (CC BY 4.0 announced, not yet released).

NZSL's nzsl.db is the best phonology dump but is Tier B with a conflict. Everything else is B, C or D.

### Cited Findings
- **SignPuddle puddle IDs and dumps** (each verified by HEAD on `https://www.signbank.org/signpuddle2.0/data/spml/sgn{ID}.spml`):

  | Puddle | Language | Entries | Size | Last-Modified |
  |---|---|---|---|---|
  | sgn64 | Japan | 328 | 79,703 B | 2025-04-28 |
  | sgn78 | Korea | 64,105 (58,132 unique) | 26,555,465 B | 2026-10-14 |
  | sgn83 | China | 97 | 24,750 B | 2022-03-02 |
  | sgn75 | Taiwan | 214 | 56,870 B | 2022-02-02 |
  | sgn12 | Hong Kong | 14 | 5,105 B | 2026-01-18 |
  | sgn42 | Australia | 154 | 31,678 B | 2025-12-11 |
  | sgn70 | New Zealand | 37 | 7,490 B | 2016-02-26 |

  There is no puddle for Mongolia, Tibet, PNG, Fiji, Samoa, Tonga or other Pacific languages. Other Asian puddles seen (out of scope): Philippines 72, Singapore 11, Malaysia 66, Thailand 34, Vietnam 153, Nepal 133, Myanmar 2. — [SignPuddle 2.0 index](https://www.signbank.org/signpuddle2.0/)
- **SignWriting licence.** "All images and content on this web site and all images and content in publications on or about or in some way related to Sutton Movement Writing, including SignWriting … are free to use because they are licensed under the free internet standard: Creative Commons Attribution-ShareAlike 3.0 Unported License." Also: "SignWriting symbols are free to use under the SIL Open Font License (OFL)". — [signwriting.org](https://www.signwriting.org/)
- The SPML headers carry no per-puddle licence field; the header attributes are only root, type, puddle, cdt, mdt and nextid (inspected locally). — [sgn64.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn64.spml)
- **Repositories and portals checked:**
  - Figshare: NationalCSL-DP, CC BY 4.0 ([Figshare](https://figshare.com/articles/media/NationalCSL-DP/27261843)).
  - GitHub: the NZSL snapshot ([releases](https://github.com/ODNZSL/nzsl-dictionary-scripts/releases)); GKSL13k ([repo](https://github.com/AIRC-KETI/GKSL-dataset)); KSL-Guide (pointer to AI-Hub only) ([repo](https://github.com/ChelseaGH/KSL-Guide)).
  - NII IDR: KoSign and the JSL corpus, both contract-gated ([IDR KoSign](https://www.nii.ac.jp/dsc/idr/rdata/KoSign/)).
  - AI-Hub: Korean nationals only ([AI-Hub 103](https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&dataSetSn=103)).
  - data.go.kr: one KOGL Type 4 CSV ([data.go.kr](https://www.data.go.kr/biz/dcat/metadata/15152310.do)).
  - data.gov.tw: no lexicon ([API](https://data.gov.tw/api/front/dataset/list)).
  - ELAR: Auslan (S/U) and Macau (U) ([ELAR](https://www.elararchive.org/?s=sign+language)).
  - PARADISEC, Webonary and SIL: 403 / not verified.
  - Hugging Face and Kaggle: not systematically searched because the search budget was exhausted; only an unauthorised CSL-Daily mirror was seen ([HF](https://huggingface.co/datasets/Nebularer/CSL_Daily/blob/main/README.md)).

### Inferences
- **Recommended first ingests, in priority order:**
  1. **csl:** NationalCSL-DP. Start with gloss.csv plus one participant zip (about 0.3 GB) for both views. Tier A, CC BY 4.0, attribute Jin et al. 2025.
  2. **kvk:** SignPuddle sgn78 (26.6 MB). Tier A, CC BY-SA 3.0. Filter entries with numeric-only glosses; mark derived SignDesc as BY-SA.
  3. **jsl / tss / asf / nzs / csl:** SignPuddle sgn64, sgn75, sgn42, sgn70 and sgn83. Tier A but small (37–328 entries); good for notation-parser tests.
  4. **nzs:** nzsl.db metadata, after email confirmation from DSRU. Tier B, BY-NC-SA 4.0, conflicting with the site's no-AI terms.
  5. **asf:** an Auslan Signbank permission request (BY-NC-ND 4.0).
  6. **jsl:** watch JSL-DC for its CC BY 4.0 release. KoSign is mocap but research-only with no product use (C), so use it only with an academic partner and not for shipped clips.
- **Languages with nothing usable (no Tier A/B source verified):** Hong Kong SL (hks; sgn12 is junk), Macau (ELAR U-access only), Mongolian SL (msr), Tibetan SL (lsn), Amami Koniya SL (jks), Miyakubo SL (ehs), PNG SL (pgz), Solomon Islands SL (szs), Fiji, Samoa, Tonga, Kiribati, Vanuatu, Yolŋu SL (ygs), Warlpiri, Arandic and other Australian Aboriginal SLs (asw; Iltyem-iltyem is BY-NC-ND plus cultural protocols), and Torres Strait. Hawai'i SL (hps) was skipped per scope.
- **Dead ends recorded:**
  - nzsl.nz website terms (no AI).
  - The data.gov.tw TSL route.
  - MOE and CCU TSL dictionaries (All Rights Reserved).
  - The NHK motion DB (view-only, © NHK; the word-search site has closed).
  - Global Signbank CSL_Shanghai (closed).
  - TVB-HKSL-News and Auslan-Daily (broadcast-sourced).
  - MM-WLAuslan (no licence).
  - J-Shuwa (YouTube).
  - The HF CSL-Daily mirror (unauthorised).
  - SignPuddle HK (spam).
  - NIASL2021 (site under construction).
  - Korea sldict (ND, with per-video rights).
  - AI-Hub (Korean nationals only).

### Gaps
- Hugging Face, Kaggle and Zenodo were not swept for East Asian or Oceanian sign data with permissive licences; this needs a follow-up once search is available.
- The full SignPuddle sgn78 content quality (gloss language, share of sentence vs. lexical entries) was not measured.
- Signer-consent scope for NationalCSL-DP (portrait and personality rights for derived avatars) is not stated beyond CC BY.

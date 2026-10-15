# Cross-linguistic (multi-sign-language) phonology databases, notation lexicons, mocap/avatar lexicons, isolated-sign ML datasets, and hosting-platform sweep — inventory for Marionet

Research date: 2026-10-14. Scope: resources that cover more than one sign language, plus a sweep of dataset hosting platforms. National dictionaries for single languages are covered by the regional researchers. Single-language items appear here only where the brief named them (ASL-LEX-style lexicons, PopSign, ASL Citizen, Kaggle ISLR, mocap) or where the platform sweep turned them up.

Method notes:
- I verified licences on primary pages and APIs: Dryad, the UHH FDR, Zenodo, OSF, HF, ELG, Kaggle metadata and Global Signbank. Where a summarising fetch tool was involved, I quote the text it returned.
- The platform sweeps used each platform's own catalogue API (HF `api/datasets`, Zenodo `api/records`, Kaggle `api/v1/datasets/list`, Mendeley `api/research-data/search`, Harvard Dataverse `api/search`, ELG `catalogue_backend/api/registry/search`).
- **The shared WebSearch budget ran out partway through.** As a result, Hand Talk, Simax details, SignCollect, LexiConn, Signbank2020, CMU Panoptic sign data, LSF-ANIMAL/STK access terms and any LREC-2026 3D-LEX v2 announcement could not be searched. They are listed as gaps.
- **Constraint deviation:** one download went over 20 MB. The GitHub zip of `GClarte/SignLanguagesPhylogeny` was 23.2 MB, because it contains two supplementary MP4s. All other downloads were under 3 MB, and large files were only sized with HEAD requests.

Field legend for each record: **Lang (ISO 639-3)** | **Type** | **Size** | **Licence (verbatim)** | **SPDX** | **Tier** | **Access** | **commercial_ok** | **video_redistrib_ok** | **Disk** | **Citation**. Tiers follow the Marionet gate: A = CC BY / BY-SA / CC0 / open; B = NC / C-UDA / research-only; C = register / contract / permission; D = skip.

---

## Q1. Phonology / typology databases and ASL-LEX-style lexicons spanning several sign languages (SignTyp, Asian Signbank, Abner et al. phylogenetics, Power et al. manual alphabets, EASIER wordnet, Sign-Hub, Global Signbank)

### Takeaway
The best cross-linguistic phonology dump is the Abner et al. (2024) phylogenetics CSV. It is licensed CC0 on Dryad and gives 100 Woodward-list concepts × 24 language labels, coded for handshape, location, movement, orientation and two-handedness. Its provenance is a problem, though: the sister paper says the source videos came "mainly" from Spread The Sign.
- Power et al.'s manual-alphabet CLDF (GPL-3.0, 76 varieties) is a clean Tier-A handshape resource for fingerspelling.
- SignTyp is now a YouTube-hosted "Sign Catalog". Its ~4,350 transcriptions are "available on request" only.
- Asian Signbank (7 Asian SLs, Brentari prosodic-model coding) requires registration or personal contact.
- The EASIER Multilingual Sign Language Wordnet (8 SLs, 14,028 signs) is a direct download, but its licence statements conflict (CC BY 4.0 on the record vs CC BY-NC-SA 4.0 in the README).

### Cited Findings

**R1. Abner, Clarté, Geraci, Ryder, Mertz, Salgat & Yu (2024) "Computational phylogenetics reveal the history of sign languages" — dataset**
- What it is: Science 383(6682):519–523. The study used "computational phylogenetic methods to study family structure among 19 sign languages" with "phonologically coded lexical data". — [Dryad API record](https://datadryad.org/api/v2/datasets/doi%3A10.5061%2Fdryad.bnzs7h4h1); [Dryad landing](https://datadryad.org/dataset/doi:10.5061/dryad.bnzs7h4h1)
- Licence: Dryad API `license` = `https://spdx.org/licenses/CC0-1.0.html` (SPDX **CC0-1.0**). The landing page says "Content on this site is licensed for reuse". A Zenodo copy of the code+data ("Sign Languages Phylogeny", 10.5061/dryad.bnzs7h4h1 replicate) is labelled `cc-by-4.0`. — [Dryad API](https://datadryad.org/api/v2/datasets/doi%3A10.5061%2Fdryad.bnzs7h4h1); [Zenodo API sweep result](https://zenodo.org/api/records?q=%22sign%20languages%22)
- Data provenance (Dryad methods text, verbatim): "Vocabulary items were sourced from freely available online sign language dictionaries and were annotated using a web-based interface developed for the project." — [Dryad API](https://datadryad.org/api/v2/datasets/doi%3A10.5061%2Fdryad.bnzs7h4h1)
- Contents (inspected by me): `datasets/dataset.csv` has 2,350 rows, 100 concepts (Woodward list) and 29 columns: `swadesh.english, swadesh.language, swadesh.handshape, swadesh.twohands, swadesh.handpart, swadesh.poa, swadesh.bodypart, swadesh.pmv, swadesh.mmv, swadesh.mmvrepeated, swadesh.dmvhandshape, swadesh.dmvorientation, swadesh.compound, swadesh.shape, swadesh.domhand, swadesh.ndhandshape, swadesh.chandshape, …, HScollapsed, poabodypartmerge`.
- The language labels and their row counts are:

  | Label | Rows | Label | Rows | Label | Rows |
  |---|---|---|---|---|---|
  | English (=BSL, bfi) | 100 | Swedish (swl) | 94 | Lithuanian (lls) | 100 |
  | Czech (cse) | 99 | Spanish (ssp) | 95 | Portuguese (psr) | 95 |
  | Japanese (jsl) | 83 | German (gsg) | 99 | French (fsl) | 95 |
  | Turkish (tsm) | 94 | Russian (rsl) | 98 | AmericanEnglish (ase) | 97 |
  | Brazilian (bzs) | 59 | Italian (ise) | 94 | Polish (pso) | 96 |
  | Icelandic (icl) | 93 | Austrian (asq) | 93 | Estonian (eso) | 100 |
  | Latvian (lsl) | 99 | Ukrainian (ukl) | 99 | Chinese (csl) | 97 |
  | Hongkong (hks) | 84 | Taiwan (tss) | 86 | NewZealand (nzs) | 100 |

  There is also an "AllMissing" placeholder (100 rows). The README says "Cell values of 'UNDEF' or 'NA' indicate that the coding field was not applicable". The ISO mapping is my inference from the label names. — [GitHub GClarte/SignLanguagesPhylogeny](https://github.com/GClarte/SignLanguagesPhylogeny)
- Disk: Dryad zip 891.58 KB; full GitHub repo zip 23.2 MB. — [Dryad landing](https://datadryad.org/dataset/doi:10.5061/dryad.bnzs7h4h1)
- Provenance risk: the sister paper by the same team (Yu, Geraci & Abner, LREC 2018) says: "The video data used for the present analyses come mainly from the online dictionary of the Spread The Sign Project … and also from LSD Visual Sign Language Dictionary (Hong Kong…), Taiwan Sign Language Online Dictionary … and NHK Sign Language CG". It also says: "a script is used to fetch the corresponding words and videos in other languages on the Spread The Sign online dictionary". The same 2018 paper describes "55 handshapes", place of articulation "based on Brentari (1998)", and the coding of 23 SLs with the Woodward list. — [Yu, Geraci & Abner 2018, LREC, ACL Anthology L18-1668](https://aclanthology.org/L18-1668.pdf)
- SpreadTheSign licence, as recorded by the Hamburg compendium: "Download or use of videos and data without explicit permission, including for research, is prohibited." — [Compendium: SpreadTheSign](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/spreadthesign.html)
- Record:
  - Type: phonology. Tier: **A by licence (CC0), with a D-provenance flag**. Access: direct dump.
  - commercial_ok: yes for the coded features (CC0). video_redistrib_ok: n/a (no videos besides two BSL samples).
  - Citation: Abner, N., Clarté, G., Geraci, C. et al. (2024) [Dataset] Dryad, doi:10.5061/dryad.bnzs7h4h1.

**R2. Yu, Geraci & Abner (2018) "Sign Languages and the Online World: Online Dictionaries & Lexicostatistics" (LREC 2018)**
- The paper "applied lexicostatistic and phylogenetic methods to a sample of 23 SLs coded using the web-based tool". It covers 4 Asian SLs (CSL, HKSL, TSL, JSL) and handshape clustering across all 23. — [ACL Anthology L18-1668](https://aclanthology.org/L18-1668.pdf)
- I found no separate data release. The R1 CSV appears to be the successor. Tier: n/a (no dump); the data source is Spread The Sign, so D.

**R3. Power, Grimm & List (2020) "Evolutionary dynamics in the dispersal of sign languages" — `lexibank/powerma` (manual alphabets, CLDF)**
- Statistics: 76 varieties, 107 concepts (letters), 2,124 lexemes, 64 sources, 2,124 cognates in 394 cognate sets.
- Licence: "This dataset is licensed under a GPL-3.0 license" (the LICENSE file is GPL v3). The Zenodo deposit is labelled `other-open` ([10.5281/zenodo.3564465](https://doi.org/10.5281/zenodo.3564465)). — [GitHub lexibank/powerma](https://github.com/lexibank/powerma)
- Contents (inspected): `cldf/languages.csv` (76 rows, Glottocodes but no ISO codes), `forms.csv`/`cognates.csv` (2,124), `parameters.csv` (letters a, ae, b, c…). Forms are feature strings, e.g. `¹/Hp_op ¹/Hf_str ¹/Lmid…` and `¹/Hfist ¹/Hth_acr` (handshape and thumb features).
- Varieties include contemporary and historical alphabets, e.g. Bonet 1620 and Yebra 1593. Contemporary languages include: Afghan, Albanian, American (×4 dates), Australian, Austrian (×4), Brazilian (×2), British, Bulgarian, Catalan, Croatian, Czech, Danish (×6), NGT (×3), Estonian (×2), Finnish, Flemish, French (×5), French-Belgian, German (×4), Greek, Hungarian, Icelandic (×2), Indian, International Sign, Irish, Italian (×2), Jordanian, Latvian, Lithuanian, Mexican, NZSL, Norwegian (×4), Pakistan, Polish (×2), Portuguese, Quebec, Russian (×2), Spanish (×4), Swedish (×2), Turkish and Ukrainian.
- Record:
  - Type: phonology (fingerspelling handshapes). Tier: **A** (GPL-3.0 copyleft; derivatives must stay GPL). Access: direct dump (~0.1 MB).
  - commercial_ok: yes (GPL terms). video_redistrib_ok: n/a.
  - Citation: Power, J. M., Grimm, G. & List, J.-M. (2020) R. Soc. Open Sci. doi:10.1098/rsos.191100.

**R4. SignTyp (UConn; van der Hulst & Channon)**
- The current site is a video "Sign Catalog". It "feature[s] signers from over 20 countries responding to a shared set of images" (~1,000 concepts), and the videos play through YouTube controls. — [signtyp.uconn.edu](https://signtyp.uconn.edu/)
- "approximately 4,350 videos have been provided with a detailed phonological transcriptions"; "A file with these transcriptions is available on request." — [SignTyp Research](https://signtyp.uconn.edu/research)
- The About and Credits pages state no licence, no language list and no contact. They do say most prompt images are Channon's photos and others came from Flickr Creative Commons. — [About](https://signtyp.uconn.edu/about); [Credits](https://signtyp.uconn.edu/credits)
- A 2009 announcement said a SignTyp database version was available from the LDC, "free to all researchers for non-commercial purposes". — [LINGUIST List 20.1472](https://linguistlist.org/issues/20/1472/). I searched the LDC catalogue for "sign" today and found no SignTyp entry. — [LDC catalog search](https://catalog.ldc.upenn.edu/search?q%5Bname_cont%5D=sign)
- A grant summary describes extending SignTyp with "fifteen globally dispersed sign languages". — [Grantome BCS-1049510](https://grantome.com/grant/NSF/BCS-1049510)
- SignPuddle puddle 25 is titled "LLCN & SignTyp". It holds 5,530 SignWriting entries (2.0 MB SPML). In my parse the most common sources were "typed with SignWriter Java, taken from the SignBank Database" (1,589) and "Valerie Sutton" (1,348), and the glosses are English/ASL. In other words, this puddle is ASL-dominant, not cross-linguistic SignTyp data. — [sgn25.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn25.spml)
- Record:
  - Type: phonology + elicited video. Tier: **C** for transcriptions (on request); **D** for videos (YouTube-hosted, no licence).
  - commercial_ok: unknown. video_redistrib_ok: no.

**R5. Asian Signbank (CUHK Centre for Sign Linguistics and Deaf Studies, APSL programme)**
- Languages: Sri Lankan SL (sqs), Jakarta SL and Yogyakarta SL (Indonesian varieties; inl), JSL (jsl), HKSL (hks), Ho Chi Minh City SL (hos), Yangon SL (Myanmar; ISO code not verified).
- Size: 4,750 signs. Notation: "a phonetic notational system based on Brentari's Prosodic Model". Fields include handshape, sign type (1-handed, 2-handed types) and sign category.
- Licence: "Asian Signbank licence". Access: "Public access via browsable homepage for 4750 signs. Confirmed registration needed for advanced functions … Via personal contact further transcribed data can be asked for." — [Compendium: Asian Signbank](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/asiansignbank.html)
- The site's home frame lists "Detailed phonetic information which includes inherent features (… handshape, place of articulation, body part, palm orientation, handparts…) and prosodic features (… path and shape, setting, orientation, aperture…)". — [Asian Signbank home frame](http://cslds.org/asiansignbank/frame_elements/home.jsp)
- Record: Type: phonology lexical DB. Tier: **C**. Access: register / email authors. commercial_ok: unknown. Citation: Sze et al. (2012), LREC 5th Sign-Lang Workshop, pp. 155–158.

**R6. EASIER / Multilingual Sign Language Wordnet v4.0 (UHH, ILSP, DCAL, Radboud, UZH, SU, Cologne/Warsaw)**
- Coverage: "eight languages: German Sign Language, Greek Sign Language, British Sign Language, Sign Language of the Netherlands, French Sign Language, Swiss German Sign Language, Polish Sign Language and Swedish Sign Language. It contains 24,367 links between 14,028 signs and 16,534 synsets." — [_README.md in FDR record 14190](https://www.fdr.uni-hamburg.de/record/14190)
- Licence conflict:
  - The repository record states `CC-BY-4.0`. — [FDR API record 14190](https://www.fdr.uni-hamburg.de/api/records/14190)
  - The README says: "This licence concerns only the links made between synsets ID and signs ID. Those links are distributed under a Creative Commons BY-NC-SA 4.0 licence"; "Please consult the licences of the external resources … if you wish to use data regarding the signs"; "The video files … are hosted by the respective lexical resources and are embedded with the kind permission of the resource creators." — [_README.md](https://www.fdr.uni-hamburg.de/record/14190/files/_README.md)
- Per-language sign counts that I computed from `sign_data.csv`, as (language, origin): signs (with a video URL):
  - BSL (bfi), bsl-signbank: 157 (157)
  - DGS (gsg), dgs-korpus: 1,604 (1,102)
  - DSGS (sgg), "private database": 1,684 (1,680)
  - GSL (gss), noema: 2,949 (2,949)
  - LSF (fsl), dictasign: 1,013 (1,013)
  - NGT (dse), global-signbank: 1,500 (1,463)
  - PJM (pso), kspjm: 2,415 (2,415)
  - STS (swl), teckenspråkslexikon: 2,706 (2,706)
- Files: `sign_data.csv` (2.2 MB), `synset_links_accepted.csv` (0.9 MB), and NLTK `.tab` files per ISO code. Versions 1.0 (2022-04-28) to 4.0 (2024-05-01); concept DOI 10.25592/uhhfdm.10168.
- Record:
  - Type: lexical-db (cross-lingual concept alignment). Tier: **B** (conservative reading of the README NC-SA; sign data and videos stay under each source's terms). Access: direct download (~5 MB).
  - commercial_ok: no (per README). video_redistrib_ok: no (videos are hot-linked to the source resources).
  - Citation: Schulder et al. (2024) LREC 11th Sign-Lang Workshop, pp. 281–291; Bigeard et al. (2022) LREC 10th Sign-Lang Workshop, pp. 9–15.

**R7. SIGN-HUB (EU H2020 693349) — Atlas of sign language structures, grammars, archive**
- The atlas "contains more than 100 linguistic features of the world's sign languages", led by Göttingen. The platform is open to the public at www.sign-hub.eu, with an official launch planned for October 2020. — [Göttingen flyer page](https://uni-goettingen.de/en/flyer+%28english%29/560715.html); [UPF Sign-Hub](https://www.upf.edu/en/web/sign-hub/que-fem-)
- Dead end: sign-hub.eu and the UPF resources page both returned HTTP 403 (Cloudflare block) to curl and WebFetch, so no licence could be read. — [sign-hub.eu](https://sign-hub.eu/)
- Record: Type: typology (grammatical features, not lexical). Tier: **unverified, assume C**. Relevance to clip generation: low.

**R8. Global Signbank (Radboud) as a multi-dataset platform**
- The public "Available Datasets" page lists only three datasets: EmblemsNL (124/124 public), Kata Kolok (1,312 total / 182 public) and NGT (7,469 / 6,862 public). — [Global Signbank datasets/available](https://signbank.cls.ru.nl/datasets/available)
- Licence text per dataset:
  - NGT: "A Creative Commons BY 4.0 International license applies to all accessible lexical items … Example sentences from the Corpus NGT … have a stricter license: CC BY-NC-SA-4.0". Already allowlisted. — [NGT dataset page](https://signbank.cls.ru.nl/datasets/NGT)
  - EmblemsNL: "Description of the signs: Creative Commons BY-NC-SA 4.0. Videos and images: only to be used after consultation with Onno Crasborn." These are Dutch co-speech emblems, not a sign language. — [EmblemsNL](https://signbank.cls.ru.nl/datasets/EmblemsNL)
  - Kata Kolok (bqy): the copyright statement field is empty; the page gives only a reference. → Tier C. — [Kata Kolok](https://signbank.cls.ru.nl/datasets/Kata%20Kolok)
  - VGT (vgt): "Not available to users outside Radboud University or Vlaams Gebarentaal Centrum." 16,928 glosses, 0 public. → D/C. — [VGT](https://signbank.cls.ru.nl/datasets/VGT)
  - LSFB (sfb): 3,512 glosses, 0 public, no conditions stated → C/D. — [LSFB](https://signbank.cls.ru.nl/datasets/LSFB)
  - The compendium also lists NTS (nsl; 1,946 signs; restricted) and ZEI (Iranian SL; 221 entries; restricted). — [Compendium: Global Signbank NTS](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/globalsignbanknts.html); [ZEI](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/globalsignbankzei.html)

**R9. ASL-LEX-style single-language lexicons named in the brief (cross-reference only; regional researchers own these)**
- ISL-LEX (Israeli SL; isr): 961 signs with ratings and "phonological properties in six domains". Licence CC BY-NC 4.0; raw data at OSF JMWYX → Tier B. — [Compendium: ISL-LEX](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/isllex.html)
- LSE-Sign (ssp): 2,400 signs + 2,700 non-signs, coded for handshape, location, movement and non-manuals. "LSE-Sign license"; "Restricted access requires confirmed registration" → Tier C. — [Compendium: LSE-Sign](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/lsesign.html)
- BSL SignBank (bfi): about 2,500 signs, with phonology after login. Licence "information not available" → C/D. — [Compendium: BSL SignBank](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/bslsignbank.html)
- I found no resource named "BSL-LEX", "LexiConn" or "Signbank2020" in the compendium's 87-entry lexicon index. — [Compendium lexical index](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/index.html)
- ASL-Phono (ase): "a novel linguistics-based representation, which describes the signs in the ASLLVD dataset in terms of a set of attributes of the American Sign Language phonology". CC BY 4.0 on Zenodo, 6.1 MB. It is derived from ASLLVD. — [Zenodo 10.5281/zenodo.5484145](https://doi.org/10.5281/zenodo.5484145)

**R10. Other multi-language non-manual/phonetic data**
- "Data and analysis scripts for the paper on kinematic analysis of headshake in seven sign languages" (Kimmelman, Bauer, Börstell et al.): CC BY 4.0, 18.7 MB; 3DDFA/OpenFace-derived CSVs plus ELAN. Non-lexical. — [Zenodo 10.5281/zenodo.21979464](https://doi.org/10.5281/zenodo.21979464)

### Inferences
- For a phonology feature seed across many SLs, R1 is uniquely useful because its column schema maps directly to Marionet's SignDesc fields (handshape, two-handedness, hand part, place of articulation, path/manner movement, orientation and handshape change). However, the coded values describe SpreadTheSign videos. CC0 covers the coding, not the videos, and SpreadTheSign's terms forbid "use of … data without explicit permission, including for research". I recommend treating R1 as **A-licensed but provenance-flagged**: usable only as non-authoritative hints, never paired with STS media, and pending a legal call.
- R3 (manual alphabets, GPL-3.0) is the cleanest cross-language Tier-A phonology item. Fingerspelling handshapes for ~40 contemporary SLs could seed per-language fingerspelling tables. Its copyleft terms may matter if derived handshape tables are redistributed.
- R6 is the best cross-language concept index: it says which gloss in BSL/DGS/DSGS/GSL/LSF/NGT/PJM/STS means the same thing. Each language's media and forms still need to be licensed from that language's own source.

### Gaps
- SignTyp's current language list, the transcription file's format and its licence: not published; needs an email to UConn (Channon / van der Hulst).
- The Asian Signbank licence text: the compendium names an "Asian Signbank licence", but the site (a frameset) did not expose it.
- The Sign-Hub atlas licence and export options: the site blocked automated access.
- The Abner et al. supplementary §2 (exact dictionary sources per language) was not read, so the share of SpreadTheSign-derived rows per language is unconfirmed.

---

## Q2. Notation lexicons (HamNoSys / SiGML / SignWriting) covering multiple sign languages

### Takeaway
- **Dicta-Sign is a ready-made 4-language SiGML lexicon.** UEA serves a parallel lexicon of 1,046 concepts × BSL/DGS/GSL/LSF as SiGML files plus MP4 citation videos at plain URLs. Its licence is contradictory (an "individual license agreement for researchers" in the compendium vs CC BY-NC-ND 4.0 in ELG/CLARIN:EL). ND rules out derivation, so this is Tier C (permission needed).
- **SignPuddle is the largest multi-language notation dump.** It has 144 puddles, ~143 MB of SPML in total, all direct-downloadable, but no licence statement was found on signbank.org.
- SignBank+ (HF) repackages SignWriting for 64 sign languages under CC BY-NC 4.0.
- Ham2Pose's combined HamNoSys set (5,752 entries; DGS/PJM/GSL/LSF) has no repository licence and inherits research-only upstream terms.

### Cited Findings

**N1. Dicta-Sign Lexicon (EU FP7 Dicta-Sign; Hamburg portal) and the UEA "DictaSign Parallel Lexicon with Signing Avatar (JAS vhg.2017)"**
- Compendium: languages BSL (bfi), GSL (gss), DGS (gsg), LSF (fsl); "1000 signs per language"; "Citation form, HamNoSys, translation to English, Greek, German and French"; Licence "Individual license agreement for researchers"; "Public access via browsable homepage; some videos temporarily unavailable". — [Compendium: Dicta-Sign Lexicon](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictasignlex.html)
- ELG record 14761 "DICTA-SIGN lexicon": licence "Creative Commons Attribution Non Commercial No Derivatives 4.0 International"; distribution landing [inventory.clarin.gr/lcr/805](https://inventory.clarin.gr/lcr/805). The ELG corpus record 11795 has the same licence. — [ELG API record 14761](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/14761/)
- UEA hosting (inspected):
  - Index pages exist per language (`BSL|DGS|GSL|LSF/DictIndex.html`). My crawl counted **1,046 signs per language** (identical concept list).
  - Each sign page calls `startPlayer("BSL/SignFiles/Abroad1n.BSL.sigml")` and `startMovie("BSL/MovieFiles/Abroad.mp4")`.
  - The SiGML is gestural HamNoSys-XML, e.g. `<handconfig handshape="flat" mainbend="round" …/><location_bodyarm location="head" side="right_at"/><rpt_motion …><directedmotion direction="o" size="small"/>`.
  - The sample MP4 was 88,532 bytes.
  - No licence text appears on these pages. — [UEA Dicta-Sign lexicon](http://vhg.cmp.uea.ac.uk/demo/DictaSignLexicon/); [sample SiGML](http://vhg.cmp.uea.ac.uk/demo/DictaSignLexicon/BSL/SignFiles/Abroad1n.BSL.sigml)
- Also listed by UEA: "Dicta-Sign Lexicon … About 1,000 signs in four national sign languages … animations and movies for the Basic Lexicon"; "BSL Examples"; "LinguaSign Dictionary". — [JASigning Demos](https://vh.cmp.uea.ac.uk/index.php/JASigning_Demos)
- Record:
  - Type: notation (SiGML/HamNoSys) + isolated video. Tier: **C** (permission needed; ND under ELG; individual agreement under the compendium). Access: HTML pages with predictable file URLs.
  - commercial_ok: no. video_redistrib_ok: no.
  - Disk: SiGML a few KB per sign; MP4 ~90 KB per sign → roughly 4 × 1,046 × 90 KB ≈ 0.38 GB (my extrapolation from one sample).
  - Citation: Matthes et al. (2012) "Dicta-Sign – Building a Multilingual Sign Language Corpus", LREC 5th Sign-Lang Workshop.

**N2. Dicta-Sign Corpus (same project; continuous)**
- BSL/DGS/GSL/LSF, 25 h recorded, 1,000 types per language elicited. Licence "Individual license agreement for researchers"; "Open access to subset of videos and elicitation material". — [Compendium: Dicta-Sign Corpus](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dictasign.html)
- Dicta-Sign-LSF-v2: CC BY-NC-SA 4.0, via Ortolang with registration. — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dictasignlsfv2.html)
- Tier: B/C. Type: continuous-video.

**N3. Ham2Pose combined HamNoSys→video dataset (Shalev-Arkushin, Moryossef & Fried, CVPR 2023)**
- The loader describes it as: "Combined corpus of videos with their openPose keypoints and HamNoSys. Includes dicta_sign, KSPJM (The Corpus Dictionary of Polish Sign Language)." — [GitHub rotem-shalev/Ham2Pose hamnosys.py](https://github.com/rotem-shalev/Ham2Pose)
- I inspected `data/hamnosys/data.json` (2.8 MB): 5,752 entries, each with HamNoSys text plus video URLs. By source:
  - PJM (pso): 2,568, from slownikpjm.uw.edu.pl
  - DGS (gsg): 1,387 from `korpusdict/clips` plus 301 `glex` and 226 `galex` specialist dictionaries
  - GSL (gss): 889 (Dicta-Sign)
  - LSF (fsl): 381 (Dicta-Sign)
- The GitHub API returns "Not Found" for the repository licence. — [GitHub API license endpoint](https://api.github.com/repos/rotem-shalev/Ham2Pose/license)
- Record:
  - Type: notation + isolated-video links. Tier: **D as a package** (no licence; scraped links). Individual upstream sources are B/C.
  - commercial_ok: no. video_redistrib_ok: no. Disk: 2.8 MB JSON.
  - Note: SignAvatars' "HamNoSys2Motion" subset fetches its videos through a `data.json`, which appears to be this one (inference; same author group, Moryossef).

**N4. DGS Corpus type list and DGS dictionaries (HamNoSys; single-language but the largest HamNoSys source)**
- 14,064 types with HamNoSys transcriptions; "DGS Corpus license". — [Compendium: DGS Corpus types list](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dgscorpustypelist.html)
- Licence text: "Parts of this corpus are made available on this site for linguistic research. You may download and use the material for this sole purpose." Also: "For any kind of research, other applications, or the need of higher-resolution videos … please contact us under info (at) dgs-korpus.de." — [MEINE DGS licence](https://www.sign-lang.uni-hamburg.de/meinedgs/ling/license_en.html)
- Tier: **B** for linguistic research; **C** for Marionet clip derivation.

**N5. SignPuddle Online / SignBank (signbank.org; Sutton SignWriting, FSW/SWU)**
- Every puddle exposes `https://www.signbank.org/signpuddle2.0/data/spml/sgn{N}.spml` (HEAD returns Content-Length). I enumerated **144 puddles totalling 142.8 MB**. Dictionary puddles with sizes:

  | Region | Puddles (ID, name, size) |
  |---|---|
  | US / ASL | sgn4 Dictionary US 3.9 MB (already allowlisted); sgn28 ASL Bible Dictionary 2.3 MB |
  | Latin America | sgn41 Argentina 558 KB; sgn135 Chile 39 KB; sgn45 Bolivia 2 KB; **sgn46 Brasil 21.7 MB**; sgn143 Uruguay 92 KB; sgn51 Colombia 461 KB; sgn112 Guatemala 1 KB; sgn113 Haiti 1 KB; sgn16 Honduras 1.25 MB; sgn65 Mexico 403 KB; sgn137 El Salvador 2 KB; sgn67 Nicaragua 411 KB; sgn71 Peru 64 KB; sgn136 Ecuador 2 KB; sgn129 Paraguay 728 KB; sgn76 Venezuela 34 KB; sgn101 Costa Rica 2 KB |
  | Canada | sgn47 Quebec 3.3 MB |
  | Europe | sgn29 AT 2 KB; sgn43 BE-fr 711 KB; sgn44 Flanders 1.86 MB; sgn48 CH-de 1.0 MB; **sgn49 CH-fr 5.3 MB**; sgn50 CH-it 1 KB; sgn52 CZ 1.46 MB; **sgn53 DE 8.2 MB**; sgn30 Danmark 14 KB; sgn109 Estonia 1 KB; sgn107 Lithuania 1 KB; sgn108 Latvia 1 KB; sgn55 España 1.95 MB; sgn56 Catalán 936 KB; sgn57 Finland 41 KB; sgn58 FR 325 KB; sgn59 Great Britain 235 KB; sgn60 Northern Ireland 12 KB; sgn61 Greece 6 KB; sgn122 Hungary 20 KB; sgn62 Ireland 17 KB; sgn131 IS 8 KB; sgn89 Slovakia 6 KB; sgn63 IT 272 KB; sgn31 Malta 864 KB; sgn68 NL 21 KB; sgn69 NO 1.7 MB; sgn19 PL 599 KB; sgn33 Portugal 126 KB; sgn73 Sverige 19 KB; sgn74 Slovenia 1.0 MB; sgn134 Bulgaria 3 KB; sgn130 Ukraine 8 KB; sgn132 Romania 13 KB; sgn88 Russia 312 KB |
  | Middle East / N. Africa | sgn84 Egypt 37 KB; sgn110 Israel 11 KB; sgn86 Jordan 8 KB; sgn40 Saudi Arabia 92 KB; sgn90 Turkey 1 KB; sgn104 Tunisia 1.7 MB |
  | Asia | sgn153 Vietnam 195 KB; sgn11 Singapore 309 KB; sgn34 Thailand 321 KB; sgn12 Hong Kong 5 KB; sgn106 Afghanistan 5 KB; sgn82 Albania 38 KB; sgn85 India 1 KB; sgn87 Pakistan 4 KB; sgn2 Myanmar 4 KB; sgn83 China 24 KB; sgn64 Japan 78 KB; **sgn78 Korea 25.9 MB**; sgn75 Taiwan 56 KB; sgn133 Nepal 3 KB; sgn72 Philippines 208 KB; sgn66 Malaysia 2 KB |
  | Africa | sgn18 Ethiopia 33 KB; sgn79 Kenya 4 KB; sgn128 Malawi 11 KB; sgn32 Nigeria 4 KB; sgn77 South Africa 36 KB |
  | Oceania | sgn42 Australia 31 KB; sgn70 New Zealand 7 KB |
  | Other | sgn35 Dictionary International 124 KB; sgn54 Vortaro 562 KB |

  There are also Literature and Encyclopedia puddles per country. — [SignPuddle 2.0 index](https://www.signbank.org/signpuddle2.0/) (puddle titles from `title=` attributes); sizes from HEAD requests on `data/spml/sgnN.spml`
- SPML entries hold FSW strings plus glosses, optional `<text>` and `<src>`, and sometimes YouTube `<video>` iframes. For example, sgn4 entry 1 embeds `youtube.com/embed/RTniYA1lTDM`. — [sgn4.spml header](https://www.signbank.org/signpuddle2.0/data/spml/sgn4.spml)
- Licence: signbank.org shows only trademark notices ("SignPuddle and SignText are trademarks belonging to Stephen Slevinski"). It has no Creative Commons or other data licence statement. — [signbank.org](https://www.signbank.org/)
- The maintainer's informal 2019 permission: "You can use the SignPuddle data for your project." — [sw-l list, 2019-03](https://listserv.linguistlist.org/pipermail/sw-l/2019-March/030365.html)
- The Sutton SignWriting GitHub org publishes software under MIT and documentation under CC BY-4.0. It has no dictionary-data repository; `signpuddle-local` is a viewer with no licence. — [GitHub org sutton-signwriting](https://github.com/sutton-signwriting)
- Record:
  - Type: notation (SignWriting FSW). Tier: **unverified**. The parent project already allowlisted sgn4, so the same decision should apply to the other puddles; I found no explicit licence. Embedded YouTube videos are D. Access: direct dump.
  - commercial_ok: unknown. video_redistrib_ok: no (YouTube embeds). Disk: 143 MB for all puddles.

**N6. SignBank+ (HF `sign/signbank-plus`)**
- Licence tag `cc-by-nc-4.0`; 2,033,686 rows over configs (cleaned 357k, expanded 1.03M, more 129k, original 520k, test 861); 323 MB; columns `spoken_language, sign_language, spoken_text, sign_text` (SignWriting in private-use characters). The card names no source. — [HF sign/signbank-plus](https://huggingface.co/datasets/sign/signbank-plus)
- The `original/train` split covers **64 sign languages** (HF datasets-server statistics). Rows per language code:

  | Code | Rows | Code | Rows | Code | Rows | Code | Rows |
  |---|---|---|---|---|---|---|---|
  | kvk | 106,456 | bzs | 92,010 | ase | 59,973 | ssr | 49,348 |
  | gsg | 46,853 | fcs | 25,935 | vgt | 11,829 | nsl | 10,656 |
  | ssp | 8,771 | mdl | 8,653 | tse | 8,542 | sgg | 8,365 |
  | svk | 8,038 | csc | 7,437 | ysl | 7,392 | hds | 7,250 |
  | psr | 6,367 | sfb | 5,402 | aed | 4,803 | pso | 4,688 |
  | ncs | 2,588 | csn | 2,343 | sls | 1,978 | haf | 1,661 |
  | bfi | 1,607 | fsl | 1,586 | tsq | 1,574 | psp | 1,082 |
  | ise | 999 | mfs | 961 | pys | 812 | jsl | 635 |
  | sdl | 602 | esl | 451 | tss | 311 | rsl | 302 |
  | prl | 298 | sqk | 265 | csg | 247 | eth | 212 |
  | csl | 199 | fse | 182 | dse | 155 | hsh | 151 |
  | vsl | 140 | cse | 137 | ugy | 110 | psc | 102 |
  | swl | 105 | rms | 97 | dsl | 89 | ukl | 70 |
  | lws | 66 | isg | 64 | sfs | 58 | gss | 39 |
  | nzs | 35 | icl | 33 | asf | 33 | isr | 33 |
  | jos | 25 | pks | 11 | xki | 7 | afg | 6 |

  — [datasets-server statistics](https://datasets-server.huggingface.co/statistics?dataset=sign/signbank-plus&config=original&split=train)
- The sign-language-processing "SignBank" dataset entry lists features `video, writing:SignWriting, text:Multilingual`. The puddle-to-code correspondences (e.g. `mdl` 8,653 ↔ Malta, `tse` ↔ Tunisia) strongly suggest SignBank+ is a cleaned SignPuddle export (inference). — [sign-language-processing datasets SignBank.json](https://github.com/sign-language-processing/sign-language-processing.github.io/tree/master/src/datasets)
- Record: Type: notation (+ some sentences). Tier: **B** (NC). Access: direct dump (HF). commercial_ok: no. Disk: 323 MB.

**N7. JASigning / SiGML tooling (UEA Virtual Humans Group)**
- "The distribution of the software enables JASigning Java applications to be downloaded". The only usage statement is that the avatars Anna and Marc were "developed for free use with JASigning". No software licence is stated. — [JASigning Demos](https://vh.cmp.uea.ac.uk/index.php/JASigning_Demos)
- The SiGML tools listed are the eSIGN Editor (a HamNoSys sign database tool) and Ham2HPSG. — [SiGML Tools](https://vh.cmp.uea.ac.uk/index.php/SiGML_Tools)
- The UEA lexicons are Dicta-Sign (N1), "BSL Examples (JAS vhg.2022)" and "LinguaSign Catalogue (JAS vhg.2017)". — [UEA BSL Examples](http://vhg.cmp.uea.ac.uk/demo/BSLExamples/); [LinguaSign](http://vhg.cmp.uea.ac.uk/demo/LinguaSign/)
- Tier: **C**.

**N8. Smaller HamNoSys/SiGML/SignWriting dumps found in the platform sweep (single-language; for completeness)**
- 3DZSignDB: "3D avatar SigML Data for Algerian Sign Language", CC BY 4.0, 23.2 MB → Tier A (asp? ISO to verify). — [Zenodo 10.5281/zenodo.15020376](https://doi.org/10.5281/zenodo.15020376)
- Bangla HamNoSys→SiGML animation dataset, CC BY 4.0 (metadata record only, ~0 MB of files). — [Zenodo 10.5281/zenodo.12152444](https://doi.org/10.5281/zenodo.12152444)
- VisSE corpus of Spanish SignWriting: handwritten SignWriting with graphical/semantic annotation, CC BY 4.0, 228 MB (ssp). — [Zenodo 10.5281/zenodo.6337885](https://doi.org/10.5281/zenodo.6337885)
- "SignWriting Database" (Libras handwritten SW symbols, 7,997 images): labelled CC BY 4.0, but the description says it "may be used for non-commercial research" (conflict). — [Zenodo 10.5281/zenodo.10804006](https://doi.org/10.5281/zenodo.10804006)
- hearai/parse-hamnosys (HamNoSys → numeric multilabels tool; `other-open`). — [Zenodo 10.5281/zenodo.6585227](https://doi.org/10.5281/zenodo.6585227)

### Inferences
- Dicta-Sign/UEA is the closest existing analogue to what Marionet compiles: SiGML gestural descriptions with a matching citation video for the same concept in four languages. It is worth one permission email to Hamburg (IDGS) and UEA covering both the SiGML files and the MP4s. It would also give a 1,046-concept parallel test set.
- For SignWriting-based per-language seeds, SignPuddle covers more languages than any other resource. However, its licence status is the same open question the parent already faced for sgn4. SignBank+ is a cleaner, deduplicated NC copy (Tier B).

### Gaps
- The CLARIN:EL inventory page ([lcr/805](https://inventory.clarin.gr/lcr/805)) was not fetched to read the exact Dicta-Sign licence text.
- I found no publicly licensed eSIGN/ViSiCAST SiGML lexicons beyond the UEA demos (search budget exhausted before a GitHub-wide "sigml" search).

---

## Q3. Mocap / 3D lexicons and avatar lexicons (3D-LEX, SignAvatars, MOCAP1, SMPL-X datasets, Paula, JASigning, SignON, EASIER, AVASAG, Simax, Hand Talk)

### Takeaway
- **3D-LEX v1.0 is still the only openly licensed multi-language isolated-sign mocap set.** It covers ASL + NGT, is CC BY 4.0, and is already allowlisted; OSF shows no v2 (last modified 2025-03-06).
- **Every multi-language SMPL-X set is non-commercial and request-only.** This covers SignAvatars (ASL/DGS + HamNoSys subset), SignSparK, SignNet-1M and SOKE; none distribute RGB video.
- **Real optical-mocap sets are single-language NC.** MOCAP1 (LSF), STS-Mocap-v1 (STS) and ZČU (Czech SL) are all CC BY-NC(-SA).
- No avatar lexicon (Paula, AVASAG, EASIER, SignON, Simax) was found under a public data licence.

### Cited Findings

**M1. 3D-LEX v1.0 (ASL ase + NGT dse) — already allowlisted**
- "1,000 signs from American Sign Language and an additional 1,000 signs from the Sign Language of the Netherlands", captured with three motion-capture methods. — [arXiv 2409.01901](https://arxiv.org/pdf/2409.01901)
- OSF node cv276 "Data and Codebase for the 3D-LEX project": licence "CC-By Attribution 4.0 International"; date_modified 2025-03-06. The children are "3D-LEX v1.0 code" (zq2xd) and "3D-LEX v1.0 data" (2r8k5). I found no v2 node. — [OSF API node cv276](https://api.osf.io/v2/nodes/cv276/?embed=license)
- Tier **A** (as allowlisted).

**M2. SignAvatars (Yu, Huang, Cheng, Birdal; ECCV 2024) — multi-language SMPL-X**
- "8.34M 3D whole-body SMPL-X annotations across 70K motion sequences, plus a MANO hand version". Subsets: HamNoSys2Motion, Language2Motion, Word2Motion.
  - Language2Motion: ASL from How2Sign and GSL from RWTH-PHOENIX-2014-T. The repository's "GSL" label for PHOENIX should be read as DGS (gsg).
  - Word2Motion: WLASL.
  - HamNoSys2Motion: videos fetched via `data.json`.
- Access: "Fill out the access request form (a Google Form) to use SignAvatars for non-commercial research"; agree to the data licence; "Original RGB videos are not distributed". Licence questions go to shaolihuang@tencent.com. — [GitHub ZhengdiYu/SignAvatars](https://github.com/ZhengdiYu/SignAvatars)
- The paper says it "will first be released under the CC BY-NC-SA … license for research purposes". — [arXiv 2310.20436](https://arxiv.org/pdf/2310.20436)
- About 70,000 videos from 153 signers. — [ECCV 2024 paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/00653.pdf)
- Record: Lang: ase, gsg, plus HamNoSys subset (gsg/pso/gss/fsl, per N3 inference). Type: mocap (pseudo-3D SMPL-X fits). Tier: **B/C** (NC + request form). commercial_ok: no. video_redistrib_ok: no.

**M3. SignSparK data (HF `LionelLow/SignSparK_data`; ECCV 2026)**
- "SMPL-X 6D pose features, spoken-language translations, glosses, and per-frame segment annotations" from CSL-Daily (csl), How2Sign (ase) and PHOENIX-2014T (gsg); 14.2 GB LMDB.
- Licence "other": "released for non-commercial research use under the terms of the original datasets". — [HF LionelLow/SignSparK_data](https://huggingface.co/datasets/LionelLow/SignSparK_data)
- Tier **B**. Mostly continuous; carries gloss/segment labels.

**M4. SignNet-1M (He et al.; arXiv 2606.24361, June 2026)**
- ASL, CSL and DGS; "About 1M augmented clips, with about 2,058 hours"; built from Phoenix14T, How2Sign, OpenASL, ASL50K, YouTube-ASL, CSL-Daily and CSL-News.
- "distributed under a non-commercial license". Project site: signnet.chatsign.ai. — [arXiv 2606.24361](https://arxiv.org/html/2606.24361v1)
- Tier **B**, with **D** components (YouTube-ASL). Continuous. Synthetic reenactment identities.

**M5. SOKE "Signs as Tokens" (Zuo et al., ICCV 2025) — multilingual text-to-3D-sign**
- SMPL-X fitting on CSL-Daily and Phoenix-2014T; evaluation on How2Sign/CSL-Daily/Phoenix. Project page 2000zrl.github.io/soke. I found no confirmed release or licence for the 3D annotations. — [arXiv 2411.17799](https://arxiv.org/html/2411.17799v3); [ICCV supplement](https://openaccess.thecvf.com/content/ICCV2025/supplemental/Zuo_Signs_as_Tokens_ICCV_2025_supplemental.pdf)
- Tier: gap.

**M6. Neural Sign Actors (CVPR 2024)**
- Trained on "a curated large-scale dataset of 4D signing avatars"; no public data release or licence found. — [arXiv 2312.02702](https://arxiv.org/pdf/2312.02702)
- Tier: gap / D.

**M7. BOBSL3DT (arXiv 2508.15902) — BSL pseudo-3D**
- About 1.3M motion-text pairs estimated from BOBSL with HAMER and SMPLer-X. The authors note "the 3D reconstructions may be imprecise". — [arXiv 2508.15902](https://arxiv.org/html/2508.15902v1)
- The BOBSL licence is "non-commercial authorized academics". — [sign-language-processing BOBSL.json](https://github.com/sign-language-processing/sign-language-processing.github.io/tree/master/src/datasets)
- Tier **C**.

**M8. How2Sign 3D (CMU Panoptic subset; ASL)**
- "a three-hour subset was further recorded in the Panoptic studio enabling detailed 3D pose estimation". How2Sign licence: CC BY-NC 4.0. — [How2Sign arXiv 2008.08143](https://arxiv.org/pdf/2008.08143); [sign-language-processing How2Sign.json](https://github.com/sign-language-processing/sign-language-processing.github.io/tree/master/src/datasets)
- Tier **B**. Continuous. (How2Sign itself is already allowlisted.)

**M9. SignAvatar 3D continuous ASL (HF `dongludeeplearning/3D_Continuous_ASL`)**
- Licence `cc-by-nc-4.0`, 10K–100K items. — [HF dataset](https://huggingface.co/datasets/dongludeeplearning/3D_Continuous_ASL)
- Tier **B**.

**M10. Optical/glove mocap sets (single-language; brief cross-reference)**
- **MOCAP1 (LSF, fsl):**
  - Ortolang; licence "Licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International". "Il peut être utilisé par les membres des structures d'enseignement universitaire et de recherche publiques." (It may be used by members of public higher-education and research institutions.)
  - v1 has 87 BVH files (signers l1–l4, 25 picture descriptions) and 187 MP4s; v2 has 144 normalised CSVs (6 signers).
  - Tier **B/C**. — [HF mirror card Langue-des-signes-francaise/MOCAP1](https://huggingface.co/datasets/Langue-des-signes-francaise/MOCAP1); [Ortolang handle 11403/mocap1/v2](https://hdl.handle.net/11403/mocap1/v2)
- **STS-Mocap-v1 (Swedish SL, swl):** 4.1 h of sentence translations; OptiTrack + Manus gloves + LiveLink face; single actor; BVH. "licensed under CC BY-NC-SA 4.0 with additional restrictions" (data addendum). Tier **B**. — [HF AnnaKlez/STS-Mocap-v1](https://huggingface.co/datasets/AnnaKlez/STS-Mocap-v1); [LREC 2026 paper](https://aclanthology.org/2026.lrec-1.750/)
- **Motion Capture 3D Sign Language Data-set (ZČU Plzeň; Czech SL, cse):** ELG licence "Creative Commons Attribution Non Commercial 4.0 International"; downloadable. Tier **B**. — [ELG API record 18324](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/18324/)
- **Greek Text to 3D Trajectories Sign Language Dataset (GSL, gss):** CC BY 4.0, 2.4 GB; the companion "Text to Trajectories" set is 16.2 GB. Tier **A** by licence; the capture method (likely pose-lifted) is unverified. — [Zenodo 10.5281/zenodo.6645581](https://doi.org/10.5281/zenodo.6645581); [Zenodo 10.5281/zenodo.5903287](https://doi.org/10.5281/zenodo.5903287)
- **"International Sign Language Skeleton Animation"** (MediaPipe; ils?): CC BY 4.0, 277.6 MB zip. The source of the underlying video is not stated, so check provenance before use. — [Zenodo 10.5281/zenodo.18694177](https://doi.org/10.5281/zenodo.18694177)
- **DGS-Fabeln-1-SE (DGS, gsg; 7-view fairy tales, DFKI):** CC BY 4.0, 983 MB. Continuous. — [Zenodo 10.5281/zenodo.18879038](https://doi.org/10.5281/zenodo.18879038)
- **fhswf/sign-language-avatar-gloss-dgs (DGS):** CC BY-NC-SA 4.0. Tier B. — [HF](https://huggingface.co/datasets/fhswf/sign-language-avatar-gloss-dgs)
- **LSF IRISA corpora (LSF-ANIMAL, LSF-SHELVES, STK LSF):** LSF-ANIMAL is "a motion capture corpus of isolated signs and full sentences for animating signing avatars" (LREC 2020). STK LSF is listed under CC BY-NC 4.0 (paper licence). Data access terms were not confirmed. — [LREC 2020.lrec-1.736](https://aclanthology.org/2020.lrec-1.736); [STK LSF bibliography](https://colaf.huma-num.fr/bibliography/DP2GZ5WT)
- **MySign (Malaysian, xml; NeurIPS 2026):** "A High-Fidelity Motion-Capture Dataset for 3D Sign Generation in Bahasa Isyarat Malaysia". Licence not checked. — [NeurIPS 2026 poster](https://neurips.cc/virtual/2026/poster/139615)

**M11. Avatar lexicons and EU projects**
- **Paula (DePaul):** "after typing a sentence in English, she pulls from a database of signs". No public release of the sign database was found. → Tier D/C. — [WTTW 2017](https://news.wttw.com/2017/06/19/paula-avatar-ease-communication-between-hearing-and-deaf); [DePaul ASL Avatar project](https://asl.cs.depaul.edu)
- **AVASAG (DFKI):** avatar-based sign translation; the project page mentions no data release. — [DFKI SCAAI](https://scaai.dfki.de/?p=665)
- **EASIER (H2020 101016982):**
  - The deliverable "Report on avatar representation" covers "the Signing Avatar Challenge Dataset". "Overview of datasets for the SLs of Europe" (D6.1) gives "size and access information". Interlingual index deliverables cover DGS/BSL and then the core SLs. — [CORDIS EASIER results](https://cordis.europa.eu/project/id/101016982/results)
  - ELG lists "EASIER avatar" as a Tool/Service under "EASIER avatar terms of use". — [ELG search](https://live.european-language-grid.eu/catalogue_backend/api/registry/search/?search=sign)
  - No public avatar dataset download was found. → Tier C.
- **SignON (H2020 101017255):** deliverables "First/Second/Final Sign language-specific lexicon and structure" and "Linguistic description for ISL, BSL, VGT, NGT and LSE", plus a "Data Transfer Agreement". CORDIS lists no dataset licences. — [CORDIS SignON results](https://cordis.europa.eu/project/id/101017255/results). → Tier C.
- **Simax / Sign Time GmbH:** appears in ELG only as an organisation entry ("Sign Time GmbH"). It is commercial, and no data licence was found. → Tier D. — [ELG search](https://live.european-language-grid.eu/catalogue_backend/api/registry/search/?search=sign)

### Inferences
- In practice, every multi-language 3D option apart from 3D-LEX is a non-commercial derivative of video corpora (How2Sign, PHOENIX, WLASL, CSL-Daily). Marionet's existing Tier-B rows (WLASL, How2Sign) already cover the upstream licence picture, and SMPL-X versions do not improve it.
- For citation-form mocap in new languages, the realistic routes are:
  - (a) ask the 3D-LEX team (Radboud/UvA) about NGT/ASL expansions;
  - (b) MOCAP1 / STS-Mocap / ZČU, all NC and single-language;
  - (c) Greek "3D trajectories" (CC BY 4.0), after verifying how they were produced.

### Gaps
- A 3D-LEX v2 or new languages: I checked only OSF (none found). Search was exhausted before LREC 2026 / sign-lang workshop listings could be checked.
- Hand Talk (Hugo avatar; Libras/ASL) and Simax lexicon availability, SignCollect, "DGS mocap" beyond DFKI items, GSL optical mocap, CMU Panoptic sign subsets beyond How2Sign, Kinect multi-language datasets: not verifiable within the search budget.
- The EASIER "Signing Avatar Challenge Dataset" contents and access: the deliverable PDF is behind a JS download page and was not read.

---

## Q4. Multi-language isolated-sign ML datasets (plus the ASL ML datasets named in the brief)

### Takeaway
- **Multi-language ISLR pose sets have mixed or derived licences.** OpenHands and MultiSign-ISLR (7 SLs, label-aligned) carry a blanket CC BY 4.0 on Zenodo, but each subset inherits its upstream licence. GSL and INCLUDE are CC BY 4.0; LSA64 is NC-SA; WLASL is C-UDA; AUTSL is academic-only.
- **The large-scale multilingual sets are YouTube- or JW-derived** (SignCorpus, SignVerse-2M with 55 SLs, JWSign with 98 SLs), so they are Tier D.
- **On the ASL side, PopSign v1.0 is CC BY 4.0 (Tier A)**: 250 signs, 200,686 videos, 47 signers. The Kaggle ISLR rerun landmarks are CC0. ASL Citizen is Microsoft research-only and non-redistributable (Tier B).

### Cited Findings

**L1. OpenHands (AI4Bharat) labelled ISLR poses — Zenodo 6674324 ("OpenHands v1 : Labelled ISLR datasets - Poses")**
- Licence `cc-by-4.0`. Files: WLASL.zip 1,036 MB; ASLLVD-Skeleton 264 MB; LSA64_Full 227 MB; AUTSL 1,480 MB; GSL 726 MB; RWTH-PHOENIX-Weather-Signer03-cutout 32.5 MB; INCLUDE 663 MB; MS-ASL 1,344 MB; LSA64_Cut 215 MB. — [Zenodo API 6674324](https://zenodo.org/api/records/6674324); [OpenHands ISLR datasets page](https://openhands.ai4bharat.org/en/latest/instructions/datasets.html)
- Upstream licences per subset:
  - GSL (gss): CC BY 4.0 ([Zenodo 4756317](https://zenodo.org/api/records/4756317)) → A
  - INCLUDE (ins): CC BY 4.0 ([Zenodo 4010759](https://zenodo.org/api/records/4010759)) → A
  - LSA64 (aed): "Creative Commons Attribution-NonCommercial-ShareAlike 4.0" ([LSA64 page](https://facundoq.github.io/datasets/lsa64/)) → B
  - WLASL (ase): C-UDA 1.0 → B
  - AUTSL (tsm): "Codalab" / academic only → B
  - MS-ASL (ase): research → B
  - PHOENIX (gsg): CC BY-NC-SA 3.0 → B
  - Sources for the last four: [sign-language-processing dataset JSONs](https://github.com/sign-language-processing/sign-language-processing.github.io/tree/master/src/datasets)
- Fingerspelling poses (Zenodo 6731224, `cc-by-4.0`): German 46 MB, Chinese 771 MB, Turkish 41 MB, Indian 28 MB, Greek 19 MB, Argentine 25 MB, American 63 MB. — [Zenodo API 6731224](https://zenodo.org/api/records/6731224)
- Record: Type: isolated (pose keypoints only). Tier: **per subset** (A for GSL/INCLUDE poses; B for the rest). Access: direct dump. commercial_ok: only the GSL/INCLUDE-derived subsets. video_redistrib_ok: n/a (poses). Disk: ~6 GB for all ISLR poses.

**L2. MultiSign-ISLR, MultiSign-FS, SignCorpus and Sign2Vec (Gokul NC et al., NeurIPS 2022 D&B)**
- "MultiSign-ISLR – a multilingual and label-aligned dataset of sequences of pose keypoints from 11 labelled datasets across 7 sign languages" (American, Argentinian, Chinese, German, Greek, Indian, Turkish). It has "more than 300K videos across 5,144 aligned labels".
- MultiSign-FS covers fingerspelling in 7 languages (American, Argentine, Chinese, Greek, German, Indian, Turkish; 69 characters).
- SignCorpus is "about 4.6K hours … across 10 sign languages" (American, Australian, British, Chinese, Greek, Indian, Korean, Russian, Spanish, Turkish), "curated from sign language videos on the internet". The text says "Based on analysis of the amount of content available in YouTube" and "a majority of the sources were from news and media outlets … second major source was religious content".
- "All datasets, models, and code has been made open-source via the OpenHands toolkit". — [NeurIPS 2022 paper PDF](https://proceedings.neurips.cc/paper_files/paper/2022/file/eb011fd258c763c44d8c6a0e9ce04f17-Paper-Datasets_and_Benchmarks.pdf)
- The SignCorpus poses appear on Zenodo as "Multilingual SLR Pose Datasets", `cc-by-4.0`, "Unlabelled Sign Language Pose datasets for self-supervised pretraining":
  - Part 1: Greek 43.4 GB, Korean 49.9 GB, Turkish 4.2 GB, Russian 37.9 GB, Chinese 16.6 GB. — [Zenodo 10.5281/zenodo.6673685](https://doi.org/10.5281/zenodo.6673685)
  - Part 2: Spanish 12.9 GB, American 81.3 GB, British 61.2 GB, Australian 6.9 GB. — [Zenodo 10.5281/zenodo.6990583](https://doi.org/10.5281/zenodo.6990583)
  - The Indian raw poses (NewzHook, NIOS, Sign_Library, MBM_Vadodara, ISH_News) are in [Zenodo 5558897](https://doi.org/10.5281/zenodo.5558897).
- Tier: MultiSign-ISLR → per-upstream (see L1); SignCorpus poses → **D** (YouTube footage despite the CC BY label; also unlabelled, so no lexical value).

**L3. Multilingual ISLR MediaPipe Landmarks (HF `danielelvs/multilingual-islr-mediapipe`)**
- Licence tag MIT. It "combines frame-level MediaPipe Holistic landmarks derived from four ISLR resources: INCLUDE-50, KSL, MINDS-Libras, and LIBRAS-UFOP". Languages: Libras (bzs), ISL (ins), Korean SL (kvk). Expected samples: INCLUDE-50 958, KSL 1,229, MINDS-Libras 1,158, LIBRAS-UFOP 3,040 segments.
- The card itself says "It does not assert that the source corpora share … licenses". — [HF card](https://huggingface.co/datasets/danielelvs/multilingual-islr-mediapipe)
- Tier: **B pending upstream checks**. The MIT label on derived landmarks does not override the source licences; INCLUDE is CC BY 4.0, the others were not verified here.

**L4. SignVerse-2M (Fang, Zhong, Zhang & Metaxas 2026; HF `SignerX/SignVerse-2M`)**
- "about 2 million clips from 39,196 videos, 55+ languages". Built from "YouTube-SL-25 … and related open web sources". Pose only ("Raw RGB frames released: No"). Annotations/keypoints are CC BY-NC 4.0; "source videos are not redistributed and remain subject to their platform terms".
- 55 language codes: aed ase asf asq bfi bzs csc cse csg csn csq dse dsl eso fcs fse fsl fss gsg gss hks hsh hos icl ils inl ins ise isg isr jos jsl kvk lls mfs nsl nzs pks prl pso psp rsl sfb sgg slf sls ssp ssr svk swl tsm tsq tss vgt ysl. — [HF SignerX/SignVerse-2M](https://huggingface.co/datasets/SignerX/SignVerse-2M)
- Tier **D** (derived from YouTube-SL-25, which the parent project forbids). Continuous subtitle segments, not isolated signs.

**L5. JWSign (Gueuwou, Siake, Leong & Müller; Findings of EMNLP 2023)**
- "2,530 hours of Bible translations in 98 sign languages, featuring more than 1,500 individual signers". The authors supply links and a loader, not videos. They asked JW legal departments for permission and had "not yet received a reply". — [arXiv 2311.10174](https://arxiv.org/abs/2311.10174); [PDF](https://arxiv.org/pdf/2311.10174)
- Tier **D**. Continuous-video.

**L6. Spreadthesign-derived resources**
- SpreadTheSign itself is forbidden (licence quoted in R1). Derived codings (R1/R2) are flagged above.
- I found no HF or Kaggle dataset matching "spreadthesign" (targeted HF and Kaggle queries both returned none). — [HF API search](https://huggingface.co/api/datasets?search=spreadthesign); [Kaggle API search](https://www.kaggle.com/api/v1/datasets/list?search=spreadthesign)

**L7. PopSign ASL v1.0 (Georgia Tech / NTID; ase)**
- "Popsign v1.0 is licensed under CC BY 4.0"; 250 signs; 200,686 videos; 47 signers; 1.1 TB; "External - Open Access". — [signdata.cc.gatech.edu PopSign v1.0](https://signdata.cc.gatech.edu/view/datasets/popsign_v1_0/)
- The NeurIPS 2023 supplement says it "will be offered under the Creative Commons CC-BY 4.0 license" and that it is not intended for continuous recognition. — [NeurIPS 2023 supplement](https://papers.neurips.cc/paper_files/paper/2023/file/00dada608b8db212ea7d9d92b24c68de-Supplemental-Datasets_and_Benchmarks.pdf)
- HF `sign/popsign-images` (frame sequences): `cc-by-4.0`. — [HF API author=sign](https://huggingface.co/api/datasets?author=sign)
- Record: Type: isolated-video (selfie phone, game vocabulary). Tier **A**. commercial_ok: yes. video_redistrib_ok: yes (with attribution). Disk: 1.1 TB.

**L8. Google "Isolated Sign Language Recognition" Kaggle competition (asl-signs) and related Google ASL sets**
- The competition data page is JS-rendered, and the Kaggle competitions API returns 401 without authentication, so the main data licence is **unverified**. — [Kaggle asl-signs](https://www.kaggle.com/competitions/asl-signs/data)
- "ASL Isolated Sign Recognition Rerun Set" ("Rerun test data for https://www.kaggle.com/competitions/asl-signs/"): Kaggle API metadata `licenses: [{"name":"CC0-1.0"}]`, 14.15 GB; collaborators include thadstarner. — [Kaggle API metadata sohier/461054610546105](https://www.kaggle.com/api/v1/datasets/metadata/sohier/461054610546105)
- FSboard (googleai; ASL fingerspelling; "Over 3 million characters"): "Attribution 4.0 International (CC BY 4.0)", 1.42 TB. — [Kaggle googleai/fsboard](https://www.kaggle.com/datasets/googleai/fsboard)
- FLEURS-ASL (googleai; continuous ASL): CC BY-SA 4.0, 26.6 GB. — [Kaggle googleai/fleurs-asl](https://www.kaggle.com/datasets/googleai/fleurs-asl)
- Tiers: rerun landmarks **A** (CC0); FSboard **A**; FLEURS-ASL **A** but continuous.

**L9. ASL Citizen (Microsoft Research; ase)**
- "83,399 videos of 2,731 signs filmed by 52 signers". — [arXiv 2304.05934](https://arxiv.org/pdf/2304.05934)
- Licence "MICROSOFT RESEARCH LICENSE TERMS": "solely for non-commercial, non-revenue generating, research purposes"; "you may not distribute the data or your modifications to the data". — [MSR ASL Citizen dataset license](https://www.microsoft.com/en-us/research/project/asl-citizen/dataset-license/)
- Tier **B**. The Kaggle mirror `abd0kamel/asl-citizen` (45.97 GB, "Other") is a mirror → D. — [Kaggle API sweep](https://www.kaggle.com/api/v1/datasets/list?search=asl%20citizen)

**L10. Other multi-language sets surfaced**
- Content4All (Swiss-German SL sgg + Flemish vgt; broadcast, continuous): CC BY-NC-SA 4.0 → B. — [sign-language-processing Content4All.json](https://github.com/sign-language-processing/sign-language-processing.github.io/tree/master/src/datasets)
- Signsuisse DSGS/LSF-CH/LIS-CH lexicon:
  - 18,221 lexical items: DSGS 9,044, LSF-CH 6,423, LIS-CH 2,754. Each is a video plus gloss plus one signed example sentence.
  - "The datasets can be used for non-commercial research"; "distributing the datasets or making them accessible to third parties is not permitted"; registration with SwissUbase review. — [WMT-SLT data page](https://www.wmt-slt.com/data)
  - SWISSUbase (LaRS) v1.0: 41.33 GB, download by contacting the provider. — [SWISSUbase/LaRS entry](https://www.swissubase.ch/de/catalogue/studies/20452/19280/datasets/2327/2705/overview); DOI [10.48656/hbry-1x38](https://doi.org/10.48656/hbry-1x38)
  - Lang: sgg, ssr, slf. Tier **B/C**. Isolated citation videos.
- sematos (LSC, LSE, LSF, IS, DGS): 297 LSC, 6,076 LSE, 3,605 LSF and 440 IS signs; licence "information not available". — [Compendium: sematos](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/sematos.html). The site shows "©2026 Sématos.eu" with a pricing page. — [sematos.eu](http://www.sematos.eu). → Tier **C/D**.
- SGB-FSS (Signsuisse) lexicon (DSGS/LIS/LSF): "Restricted access requires individual license agreement". — [Compendium: SGB-FSS](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/sgbfss.html). → Tier **C**.
- Wikisigns.org (multi-language user-contributed video dictionaries):
  - Site footer: "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License". — [wikisigns.org](https://www.wikisigns.org/)
  - Statistics page, signs per language:

    | Language (ISO) | Signs | Language (ISO) | Signs |
    |---|---|---|---|
    | LSM (mfs) | 2,178 | Kenyan SL (xki) | 72 |
    | Malagasy SL (mzc) | 1,314 | Mozambique SL (mzy) | 44 |
    | West Bengal SL (ins variety) | 170 | Libras (bzs) | 32 |
    | Greek SL (gss) | 100 | LS Guatemala (gsm) | 21 |
    | Uruguayan SL (ugy) | 85 | Guyana SL (no ISO verified) | 13 |
    | **Total** | **4,029** | | |

    — [wikisigns.org/statistics](https://www.wikisigns.org/statistics)
  - Videos are YouTube embeds (e.g. `youtube.com/embed/j7bjQ1qYPpc` on a GSL entry). — [wikisigns GSL entry](https://www.wikisigns.org/gr/gsl/%CE%B5%CF%80%CE%AF%CE%B4%CE%BF%CE%BC%CE%B1)
  - Tier: licence **A** (CC BY-SA 4.0), but YouTube hosting means video acquisition hits the YouTube rule. The parent already allowlists LSM, and the same decision applies to the other 9 languages.
- Older Wikisign network (wikisign.org): LSC (csc) 1,200 signs, "CC BY-SA 2.0 ES"; LSCI (Ivorian SL) 438 signs, "CC BY-SA 3.0 FR". — [Compendium: Wikisign LSC](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/wikisignlsc.html); [Wikisign LSCI](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/wikisignlsci.html)
- SignWiki network (signwiki.org):
  - Iceland (11,463 signs) has "SignWiki license (Höfundaréttur)" (Höfundaréttur = copyright).
  - Finland-Swedish (3,035), Georgia (8,296 entries), Namibia (1,979), Suomi (6,191), Tanzania (2,194), Faroe (1,350) and TegnWiki Norge (1,237) are all "information not available". — [Compendium lexical index](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/index.html)
  - Tier **C/D**.

### Inferences
- I found no multi-language isolated-sign video dataset that is both open-licensed and free of YouTube or SpreadTheSign provenance. The nearest are:
  - Dicta-Sign (4 SLs; permission needed);
  - Signsuisse (3 Swiss SLs; NC, no redistribution);
  - Wikisigns (10 SLs; CC BY-SA but YouTube-hosted);
  - per-subset GSL and INCLUDE poses within OpenHands (Tier A, poses only).
- PopSign (CC BY 4.0) is the strongest Tier-A ASL isolated video source after ASL-LEX. Its 250-sign vocabulary is small and child-game oriented, and it is 1.1 TB.

### Gaps
- The licence of the main Kaggle `asl-signs` competition data (only the rerun set was verifiable, as CC0).
- Upstream licences for KSL, MINDS-Libras and LIBRAS-UFOP inside L3.
- "Sign Language Multilingual (Prajwal)": I could not identify a resource by that name before the search budget ran out.

---

## Q5. Hosting-platform sweep (Hugging Face, Zenodo, OSF, Figshare, Mendeley Data, Kaggle, Harvard/DANS Dataverse, CLARIN VLO, ELRA/LDC, European Language Grid, Hamburg compendium)

### Takeaway
- **Only a handful of multi-language lexical resources exist across all the platforms.** They are EASIER Wordnet (UHH FDR), SignBank+, SignVerse-2M, sign-bibles, multilingual-ISLR (HF), OpenHands/MultiSign poses (Zenodo), Dicta-Sign (ELG/CLARIN:EL) and Signsuisse (SWISSUbase/ELG).
- **Everything else the sweeps found is single-language.** It is hundreds of mostly alphabet or ISLR datasets, a large share of them CC BY 4.0 on Zenodo and Mendeley.
- **CLARIN VLO was a dead end** (Anubis JS proof-of-work wall). OSF search and LDC search were dead ends too.

### Cited Findings
- **Hamburg "Sign Language Dataset Compendium" v1.5.0** (the key aggregator): 87 lexical resources and 43 corpora, each with "Licence" and "Access" fields; entries last modified 11 April 2025. — [Compendium lexical index](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/index.html); [corpus index](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/index.html)
- **ECHO Corpus** (multi-language, continuous): BSL, NGT, SSL (swl), DGS; 1.5 h; "CC BY-NC-ND 3.0"; "Open access to videos and transcripts via Language Archive" ([hdl 1839/00-0000-0000-0001-4892-C](https://hdl.handle.net/1839/00-0000-0000-0001-4892-C)) → Tier C (ND). — [Compendium: ECHO](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/echo.html)
- **sign-language-processing dataset registry:** 49 JSON entries, each with `license`/`licenseUrl` fields. Examples: Dicta-Sign "Multilingual … writing:HamNoSys" (licence None); SignBank "Multilingual … writing:SignWriting" (licence None); SSL Lexicon (swl) "CC BY-NC-SA 2.5 SE", 20,000 items; Sign2MINT (gsg) "CC BY-NC-SA 3.0 DE". — [GitHub sign-language-processing.github.io/src/datasets](https://github.com/sign-language-processing/sign-language-processing.github.io/tree/master/src/datasets)
- **Hugging Face:**
  - 36 general queries returned 1,430 unique dataset IDs. Filtering left **461 sign-language-related** ones. — [HF datasets API](https://huggingface.co/api/datasets?search=sign%20language)
  - Multi-language items: SignVerse-2M; `sign/signbank-plus`; `danielelvs/multilingual-islr-mediapipe`; `bible-nlp/sign-bibles`; `LionelLow/SignSparK_data`; and the "GloSL" continuous collection by `pedroodb`, which re-hosts PHOENIX14T, CSL-News, GSL (CC BY 4.0), LSE-Health (CC BY-NC 4.0), LSFB-CONT (CC BY-NC-SA 4.0), How2Sign (CC BY-NC 4.0) and 2M-Flores-ASL (other). — [HF pedroodb/glosl-gsl](https://huggingface.co/datasets/pedroodb/glosl-gsl)
  - Many WLASL, AUTSL and How2Sign mirrors carry no licence tag (e.g. `aipieces/AUTSL`, `aipieces/WLASL`, `34data/wlasl`) → scraped mirrors → **D**. — [HF aipieces/AUTSL](https://huggingface.co/datasets/aipieces/AUTSL)
  - Notable single-language lexical/isolated items:
    - `gaurannggg7/asl-dictionary` (cc0-1.0; ase; 1K–10K)
    - `jameszokah/ghanaian-sign-language-lexicon` (MIT)
    - `ppoitier/lsfb-isol` (CC BY-NC-SA 4.0; sfb)
    - `Namonpas/thai-sign-language-tsl51` (CC BY-NC-SA 4.0)
    - `Langue-des-signes-francaise/*` mirrors of Ortolang LSF corpora (NC licences)
    - `AnnaKlez/STS-Mocap-v1`
    - Source: [HF API](https://huggingface.co/api/datasets?search=sign-language)
- **Zenodo:**
  - 23 slow-paced queries returned 884 unique records, of which **122 are sign-related** dataset/software/video records. — [Zenodo API](https://zenodo.org/api/records?q=%22sign%20language%22%20lexicon)
  - The multi-language ones are OpenHands (6674324, 6731224, 5558897), Multilingual SLR Pose (6673685, 6990583), Sign Languages Phylogeny (Dryad replicate), powerma CLDF (3564465), the headshake 7-SL study (21979464) and the IS skeleton animation (18694177).
  - Single-language lexical/isolated items with licences:
    - Ghanaian SL Lexicon: "over 1200 signs … and their OpenPose data", CC BY 4.0, 1.16 GB. — [10.5281/zenodo.4533753](https://doi.org/10.5281/zenodo.4533753)
    - SWL-LSE (SignaMed word-level LSE health signs), CC BY 4.0, 3.5 GB. — [10.5281/zenodo.13691887](https://doi.org/10.5281/zenodo.13691887)
    - Mexican SL Glosses (Dynamic Signs), CC BY 4.0, 2.7 GB. — [10.5281/zenodo.18330565](https://doi.org/10.5281/zenodo.18330565)
    - VDzSL (Algerian SL video), CC BY 4.0, 1.2 GB. — [10.5281/zenodo.18209839](https://doi.org/10.5281/zenodo.18209839)
    - TurkSign446, CC BY 4.0. — [10.5281/zenodo.17267294](https://doi.org/10.5281/zenodo.17267294)
    - Vietnamese multi-view word-level, CC BY 4.0. — [10.5281/zenodo.17943574](https://doi.org/10.5281/zenodo.17943574)
    - LESCO emergency signs, CC BY 4.0. — [10.5281/zenodo.6345338](https://doi.org/10.5281/zenodo.6345338)
    - SignBD-Word (Bangla), CC BY-SA 4.0, 24 GB. — [10.5281/zenodo.6779843](https://doi.org/10.5281/zenodo.6779843)
    - GSLW (Greek in the wild), CC BY 4.0, 23 GB. — [10.5281/zenodo.8047231](https://doi.org/10.5281/zenodo.8047231)
    - SIGNO-PERU-ISO, CC BY-NC 4.0. — [10.5281/zenodo.18990737](https://doi.org/10.5281/zenodo.18990737)
    - LIBRAS-EQT-UECE, CC BY-NC 4.0, 45 GB. — [10.5281/zenodo.21398895](https://doi.org/10.5281/zenodo.21398895)
    - PSL-128 (Pakistan), CC BY-NC 4.0. — [10.5281/zenodo.21946282](https://doi.org/10.5281/zenodo.21946282)
    - BIM-SIGN (Malaysian), CC BY-NC 4.0. — [10.5281/zenodo.21631884](https://doi.org/10.5281/zenodo.21631884)
    - LSA-X (Argentine keypoints), CC BY-NC-ND 4.0. — [10.5281/zenodo.19087120](https://doi.org/10.5281/zenodo.19087120)
    - FluentSigners-50, licence none stated. — [10.5281/zenodo.6043739](https://doi.org/10.5281/zenodo.6043739)
    - SMILE DSGS, restricted. — [Zenodo API 7701457](https://zenodo.org/api/records/7701457)
  - These single-language items belong to the regional researchers' per-language issues.
- **OSF:** `api.osf.io/v2/search/` returned `{"errors":[{"detail":"Not found."}]}`, and SHARE `index-card-search` returned an `IriInvalid` error, so OSF could not be swept by keyword (**dead end**). Known OSF sign lexicons: ASL-LEX ([OSF zpha4](https://doi.org/10.17605/OSF.IO/ZPHA4)), ISL-LEX ([OSF jmwyx](https://doi.org/10.17605/OSF.IO/JMWYX)) and 3D-LEX ([OSF cv276](https://api.osf.io/v2/nodes/cv276/)). — [OSF API](https://api.osf.io/v2/search/?q=%22sign%20language%22)
- **Figshare:** the dataset-type search (`item_type=3`) returned only 4 sign-related items, none lexical: "TASK-BASED SIGNWRITING TEACHING", "Literacy for the deaf", and two PLOS table extracts. — [Figshare API](https://api.figshare.com/v2/articles/search)
- **Harvard Dataverse** (federated search, which includes DANS/SSH and other Dataverse instances): about 60 sign-related datasets, all single-language. Examples:
  - "NGT video stimuli, with and without mouth actions": "908 high-quality videos in .mov format of single signs in Nederlandse Gebarentaal". — [doi:10.17026/SS/CNQGSY](https://doi.org/10.17026/SS/CNQGSY)
  - "NGT Signs Iconicity Ratings" (415 signs). — [doi:10.17026/SS/QHQKHZ](https://doi.org/10.17026/SS/QHQKHZ)
  - Pseudosigns (205 NGT pseudosign videos). — [doi:10.17026/SS/4UJXIF](https://doi.org/10.17026/SS/4UJXIF)
  - HealthSign GSL. — [doi:10.7910/DVN/FC734E](https://doi.org/10.7910/DVN/FC734E)
  - "Historical evidence of ASL signs" (Power & Meier). — [doi:10.18738/T8/7TWC7V](https://doi.org/10.18738/T8/7TWC7V)
  - BdSLW102. — [doi:10.7910/DVN/ZXIF3D](https://doi.org/10.7910/DVN/ZXIF3D)
  - Licences were not checked per record.
  - Source for the whole sweep: [Harvard Dataverse search API](https://dataverse.harvard.edu/api/search?q=%22sign%20language%22&type=dataset)
- **Mendeley Data** (`query=` parameter): 15 queries gave 252 records, of which **91 are sign-related, all single-language**. They are mostly alphabet or ISLR sets for BISINDO/SIBI, Bangla, Indian, Arabic, Moroccan, Mexican, Filipino, Norwegian, Kurdish, Panamanian, Amharic, Kinyarwanda, Thai and Italian. Licences were not verified per record. — [Mendeley Data search API](https://data.mendeley.com/api/research-data/search?query=sign%20language%20lexicon)
- **Kaggle** (public `api/v1/datasets/list`):
  - 30 queries returned 750 records; **660 are sign-ish**.
  - Licence tags: Unknown 231, MIT 87, CC0 86, Apache 71, CC BY-SA 4.0 39, Other 34, CC BY 4.0 31, CC BY-NC-SA 4.0 16.
  - There is no multi-language lexical dataset. Notable items:
    - SignTalk-GSL (Ghanaian; 75k videos; CC BY 4.0; 90.8 GB). — [Kaggle](https://www.kaggle.com/datasets/responsibleailab/signtalk-gsl-multiview-gh-healthcare-dataset)
    - Slovo (Russian SL; CC BY-SA 4.0; 15.9 GB). — [Kaggle](https://www.kaggle.com/datasets/kapitanov/slovo)
    - VSL (Vietnamese; CC BY 4.0, 80 GB, cropped). — [Kaggle](https://www.kaggle.com/datasets/nguyenanfms/vsl-vietnamese-sign-language-v2)
    - Kenyan SL video (CC0, 14.6 GB). — [Kaggle](https://www.kaggle.com/datasets/ekitabu/kenyan-sign-language-videos)
    - V-LIBRASIL (CC BY-NC-ND 4.0). — [Kaggle](https://www.kaggle.com/datasets/davimedio01/v-librasil)
    - "SignBank Brazilian Sign Language (Libras)" (labelled CC BY 4.0, 5.1 GB; probably a mirror of Signbank da Libras, so verify). — [Kaggle](https://www.kaggle.com/datasets/bernardinello/signbank)
    - Isharah-1000-pose (Saudi; CC BY-NC-SA 4.0). — [Kaggle](https://www.kaggle.com/datasets/tfmohamedyahia/isharah-1000-pose)
  - Source for the whole sweep: [Kaggle API](https://www.kaggle.com/api/v1/datasets/list?search=sign%20language)
- **European Language Grid:** 102 hits for "sign". Key records: DICTA-SIGN lexicon (CC BY-NC-ND 4.0), DICTA-SIGN corpus (CC BY-NC-ND 4.0), WMT-SLT 2023 ("non-commercial"; Signsuisse + SRF), Motion Capture 3D SL Data-set (CC BY-NC 4.0), Ghanaian SL Lexicon (CC BY 4.0), GSL Dataset (CC BY 4.0), FluentSigners-50 (CC BY 4.0), "Image and sign bank of Spanish Sign Language" (CC BY-NC-SA 3.0), EASIER services (Nuromedia ELG ToS) and Sematos. — [ELG search API](https://live.european-language-grid.eu/catalogue_backend/api/registry/search/?search=sign)
- **ELRA catalogue:** Czech SL Corpus for Recognition – Amateur Signer (ELRA-S0285; 25 signs; "Non Commercial Use - ELRA END USER"; €125); Professional Signer (ELRA-S0286; 378 signs; €225); How2Sign (ELRA-S0416). No multi-language lexicon. — [ELRA catalogue search](https://catalogue.elra.info/en-us/repository/search/?q=sign+language)
- **LDC:** a name search for "sign" returned only "LDC2015T10 RST Signalling Corpus". The free-text search returned HTTP 500. SignTyp was not found (**dead end**). — [LDC catalog](https://catalog.ldc.upenn.edu/search?q%5Bname_cont%5D=sign)
- **CLARIN VLO:** "Making sure you're not a bot! … Anubis requires the use of modern JavaScript" (**dead end** for scripted access). — [vlo.clarin.eu](https://vlo.clarin.eu/search?q=sign+language)
- **Survey aggregator (2026):** "a comprehensive index of sign-language datasets, covering 120 resources across 35 sign languages" with a 24-field datasheet. No licence table was visible on the abstract page. — [arXiv 2606.19352](https://arxiv.org/abs/2606.19352)

### Inferences — per-language crosswalk of the multi-language resources (for per-language GitHub issues)
Tier shown in brackets; "PF" = provenance flag (SpreadTheSign-derived). Single-language resources are excluded.

| ISO 639-3 | Language | Multi-language resources covering it |
|---|---|---|
| ase | ASL | 3D-LEX [A, allowlisted]; Abner CSV [A-PF]; powerma [A]; SignPuddle sgn4/28 [unverified]; SignBank+ 59,973 rows [B]; OpenHands WLASL/MS-ASL/ASLLVD poses [B]; SignAvatars [B/C]; SignSparK [B]; SignNet-1M [B/D]; sign-bibles [A, continuous]; SignVerse [D]; JWSign [D] |
| bfi | BSL | Dicta-Sign SiGML+video [C]; EASIER wordnet 157 [B]; ECHO [C]; Abner (label "English") [A-PF]; powerma [A]; SignPuddle sgn59 [?]; SignBank+ 1,607 [B]; SignCorpus [D] |
| gsg | DGS | Dicta-Sign [C]; Ham2Pose 1,914 HamNoSys [D pkg / B upstream]; EASIER 1,604 [B]; ECHO [C]; Abner [A-PF]; powerma [A]; SignPuddle sgn53 8.2 MB [?]; SignBank+ 46,853 [B]; OpenHands Phoenix-S03 [B]; SignAvatars/SignSparK/SignNet (PHOENIX) [B] |
| gss | Greek SL | Dicta-Sign [C]; Ham2Pose 889 [D/B]; EASIER 2,949 [B]; OpenHands GSL poses [A]; Wikisigns 100 [A-licence, YouTube]; powerma [A]; SignPuddle sgn61 [?] |
| fsl | LSF | Dicta-Sign [C]; Ham2Pose 381 [D/B]; EASIER 1,013 [B]; Abner [A-PF]; powerma [A]; sematos 3,605 [C/D]; SignPuddle sgn58 [?] |
| dse | NGT | 3D-LEX [A]; Global Signbank NGT [A, allowlisted]; EASIER 1,500 [B]; ECHO [C]; powerma [A]; SignPuddle sgn68 [?] |
| swl | STS | EASIER 2,706 [B]; ECHO [C]; Abner [A-PF]; powerma [A]; SignPuddle sgn73 [?] |
| pso | PJM | EASIER 2,415 [B]; Ham2Pose 2,568 [D/B]; Abner [A-PF]; powerma [A]; SignPuddle sgn19 [?] |
| sgg / ssr / slf | DSGS / LSF-CH / LIS-CH | Signsuisse 9,044 / 6,423 / 2,754 [B/C]; EASIER DSGS 1,684 [B]; SGB-FSS [C]; Content4All DSGS [B]; SignPuddle sgn48/49/50 [?] |
| jsl, hks, sqs, inl, hos, (Yangon) | Asian SLs | Asian Signbank 4,750 total [C]; Abner (jsl, hks) [A-PF]; SignPuddle sgn64/12 [?] |
| tss, csl | Taiwan SL, Chinese SL | Abner [A-PF]; SignPuddle sgn75/83 [?]; SignNet/SignSparK (CSL-Daily) [B] |
| kvk | Korean SL | SignBank+ 106,456 [B]; SignPuddle sgn78 25.9 MB [?]; multilingual-islr-mediapipe [B] |
| bzs | Libras | SignBank+ 92,010 [B]; SignPuddle sgn46 21.7 MB [?]; Wikisigns 32 [A-licence/YouTube]; Abner [A-PF]; multilingual-islr-mediapipe [B] |
| ins | Indian SL | OpenHands INCLUDE poses [A]; multilingual-islr-mediapipe [B]; sign-bibles [A, continuous]; Wikisigns WBSL 170 [A/YouTube] |
| aed | Argentine SL | OpenHands LSA64 poses [B]; SignBank+ 4,803 [B]; SignPuddle sgn41 [?] |
| tsm | Turkish SL | OpenHands AUTSL poses [B]; Abner [A-PF]; powerma [A] |
| mfs | LSM | Wikisigns 2,178 [A, allowlisted]; powerma [A]; SignPuddle sgn65 [?] |
| mzc, xki, ugy, mzy, gsm, Guyana | Malagasy, Kenyan, Uruguayan, Mozambican, Guatemalan, Guyana SLs | Wikisigns 1,314 / 72 / 85 / 44 / 21 / 13 [A-licence, YouTube]; sign-bibles (xki, mzy) [A, continuous] |
| lls, cse, icl, asq, eso, lsl, ukl, nzs, rsl, ssp, psr, ise | Lithuanian, Czech, Icelandic, Austrian, Estonian, Latvian, Ukrainian, NZ, Russian, Spanish, Portuguese, Italian SLs | Abner [A-PF]; powerma (most) [A]; SignPuddle puddles [?]; SignBank+ [B] |
| bqy | Kata Kolok | Global Signbank (182 public of 1,312) [C] |
| ils | International Sign | powerma [A]; sematos 440 [C/D]; IS skeleton animation (Zenodo) [A-licence, provenance unverified] |

### Gaps
- Per-record licence verification for the ~90 Mendeley and ~60 Dataverse single-language items was not done; they are out of scope and belong to the regional researchers.
- A full OSF keyword sweep was not possible because the search endpoints failed.
- CLARIN VLO and the CLARIN:EL inventory (Dicta-Sign/NOEMA records) need a browser session.

---

## Q6. Bible / religious translation corpora (Deaf Bible Society, Digital Bible Library, Wycliffe, JW)

### Takeaway
- **Bible material is almost entirely continuous signing**, so it is out of scope for citation-form clips.
- **One genuinely open multi-language set exists.** `bible-nlp/sign-bibles` packages Digital Bible Library sign videos for 17 SLs under CC BY-SA 4.0, with MP4 plus MediaPipe/DWPose.
- **JW material (JWSign, 98 SLs) is Tier D.**
- No reuse licence was found for the Deaf Bible Society app (82 SLs).

### Cited Findings
- **`bible-nlp/sign-bibles` (HF):**
  - "sign language videos from the Digital Bible Library (DBL) … licensed under the Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)". Size: "1653 shards, approximately 8105 samples". "This dataset is still being generated and currently includes only test files".
  - Languages: ase, bqn, esl, eso, eth, gse, ins, lsb, mis, mzy, nsi, nsp, rsl, sqs, tza, ugn, xki.
  - Projects are mostly "Chronological Bible Translation in … Sign Language", plus "The Bible in Estonian Sign Language".
  - Each sample has an mp4, metadata "including … copyright information", eBible verse transcripts with vref indices (some with start/end frames), `pose-mediapipe.pose` and `pose-dwpose.npz`. Last modified 2025-11-20.
  - Source: [HF bible-nlp/sign-bibles](https://huggingface.co/datasets/bible-nlp/sign-bibles)
  - Tier **A** (continuous). commercial_ok: yes (BY-SA). video_redistrib_ok: yes (BY-SA).
- **`bridgeconn/sign-bibles-isl` (HF):** `cc-by-sa-4.0`, language `ins`. — [HF API search "bible"](https://huggingface.co/api/datasets?search=bible)
- **Deaf Bible Society:** "Bible translation is currently available in 82 sign languages" (figures vary across sources). It originated in 2012 as an arm of Faith Comes by Hearing and was incorporated separately in 2015. No API or reuse licence was found. — [religionunplugged 2025](https://religionunplugged.com/news/2025/11/10/breaking-the-spiritual-silence-sign-language-bible-opens-gods-word-to-the-deaf-worldwide); [scripture-engagement.org](https://scripture-engagement.org/content/deaf-bible/)
- **JWSign:** see L5 (98 SLs; links only; JW permission not granted) → **D**. — [arXiv 2311.10174](https://arxiv.org/abs/2311.10174)
- **SignCorpus (OpenHands):** "second major source was religious content which also came with sign language interpretation" (YouTube) → D. — [NeurIPS 2022 paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/eb011fd258c763c44d8c6a0e9ce04f17-Paper-Datasets_and_Benchmarks.pdf)
- **SignPuddle religious puddles** (SignWriting text, not video): sgn28 "ASL Bible Dictionary" (2.3 MB), sgn151 "ASL Bible Books NLT" (17.7 MB), sgn152 "ASL Bible Books Shores Deaf Church" (10.2 MB). — [SignPuddle 2.0 index](https://www.signbank.org/signpuddle2.0/)

### Inferences
- The sign-bibles set's per-sample "copyright information" field suggests rights vary by DBL project. A Marionet ingest should check each sample's own metadata rather than relying on the card-level CC BY-SA 4.0. Its realistic use is as a continuous-signing reference or for spotting, not for citation forms.

### Gaps
- Wycliffe / SIL sign-language Bible licensing: not researched (search budget exhausted).
- Deaf Bible Society developer/API terms: not found.
- Whether the DBL "Chronological Bible Translation" projects are uniformly CC BY-SA (vs per-project terms): not verified beyond the HF card.

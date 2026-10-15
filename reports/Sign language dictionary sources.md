# Open notation leads; permission emails unlock video

Of the **163 ISO 639-3 sign-language codes**, **62 already have substantive Tier A material** Marionet can ingest under its gate (CC BY / BY-SA / CC0 / open dump). Another **33 have only thin Tier A** (token SignPuddle puddles, fingerspelling, or gloss lists without forms), **36 have only Tier B or C**, and **32 have nothing usable at A–C**. A further 29 varieties without their own ISO code (Georgian, Tajik, Azerbaijani, Bangla SL and others) also have A–C material. Most of that Tier A reach comes from one source: **SignPuddle's official SPML dumps** (144 puddles, about 338k SignWriting entries, CC BY-SA 3.0 at project level). Citation-form *video, mocap or phonology* under Tier A exists for only about two dozen languages. The standouts are ASL (3D-LEX, a CC0 StudioGalt mocap archive of about 2,587 signs, PopSign), NGT (Global Signbank, 3D-LEX), DGS and BSL (Ortega 2025, DGS norms), LSF (Elix and Lingua Libre on Commons), LSE (SWL-LSE), Chinese SL (NationalCSL-DP, 6,707 signs), Hong Kong SL (972 clips), Armenian SL (1,211 Commons clips) and Ghanaian SL (more than 1,200 signs). Four of Marionet's own allowlist assumptions are now wrong:
- ASL-LEX's commercial status is contested.
- ASL Signbank has moved to aslsignbank.com.
- Wikisigns' "CC BY-SA video" is in fact YouTube embeds.
- The BSL Corpus open-access data, which the ingest plan lists as Tier C, is in fact Tier A.

The largest national lexicons are all Tier C: Thailand 8,086 words, Pakistan 7,500+, Jordan 7,103, India about 13,600 videos, Signsuisse 18,221 items. Permission emails, not further searching, are the next lever. The right sequence is: build one SignPuddle parser, ingest about fifteen small CC BY phonology and notation files that fit the 20 MB cap, raise the cap for a dozen citation-video and mocap sets, and send roughly twenty permission requests. Community consent must be tracked separately from copyright for Indigenous and village sign languages.

## Sixty-two coded languages already clear the Tier A gate

The denominator comes from the Glottolog 5.3 sign family plus the SIL code table: **234 languoids and 163 distinct ISO 639-3 codes** ([Glottolog CLDF](https://github.com/glottolog/glottolog-cldf); [SIL iso-639-3.tab](https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3.tab)). Ethnologue's sign-language subgroup now verifies at **160** ([Ethnologue via Wayback](http://web.archive.org/web/20251001002247/https://www.ethnologue.com/subgroup/2/)). Two pairs in the 234 may be double counts: Kurdish SL (`zhk` plus Glottolog `kurd1260`) and Bhutanese SL (`dyl` plus `bhut1234`). Scoring every code against the corrected source register gives this split:

| Coverage class (163 ISO codes) | Count | What it means for Marionet |
|---|---|---|
| Tier A, substantive | **62** | At least about 100 citation-form signs under CC BY / BY-SA / CC0 / PD, as notation, phonology, isolated video, pose or mocap |
| Tier A, thin only | **33** | Token puddles (under about 100 entries), fingerspelling-only sets, or gloss lists whose video is YouTube |
| Tier B or C only | **36** | Non-commercial, research-only, archive (ELAR/TLA/PARADISEC) or permission-gated material |
| Nothing at A–C | **32** | No lexical source found; only Tier D, or nothing at all |

Coverage is skewed by region. **Europe has 22 of 42 codes at substantive Tier A**, Latin America and the Caribbean 12 of 30, and Southeast Asia 7 of 16. **Sub-Saharan Africa has 5 of 25**, South Asia 1 of 10 (Indian SL) and Oceania 1 of 8 (Auslan). Appendix D gives the per-region table and names the 32 languages with nothing.

Most substantive Tier A coverage is notation. SignPuddle publishes one unauthenticated SPML dump per puddle at `https://www.signbank.org/signpuddle2.0/data/spml/sgn{ID}.spml`: **144 public puddles covering 80 ISO codes, about 338.5k entries and 143 MB of XML** ([SignPuddle sgn4 dump](https://www.signbank.org/signpuddle2.0/data/spml/sgn4.spml)). The licence is now verified at project level. signwriting.org states that all content "in some way related to Sutton Movement Writing, including SignWriting" is "licensed under … Creative Commons Attribution-ShareAlike 3.0 Unported" ([signwriting.org](https://www.signwriting.org/)). The IETF draft says "The reference material is licensed under Creative Commons attribution, share alike (by-sa)" ([draft-slevinski-signwriting-text](https://datatracker.ietf.org/doc/html/draft-slevinski-signwriting-text)). No per-puddle licence or contributor-consent record exists, and the `<video>` fields are YouTube iframes, which are Tier D.

Puddle sizes vary widely. The biggest are Brazil (≈70,875 entries, 22.2 MB) and Korea (≈67,741, 26.6 MB), both over Marionet's 20 MB cap, followed by ASL (about 30.6k across five dictionary puddles), DGS (24,778), LSQ (12,086), Swiss-French (9,938), VGT (8,969) and LSE (8,526). By contrast, **65 puddles have fewer than 50 entries**. Korea's count is distinct FSW strings, often 5 to 10 per word, not distinct signs ([sgn78](https://www.signbank.org/signpuddle2.0/data/spml/sgn78.spml)).

Beyond notation, a short list of Tier A sources carries real citation-form signal:
- **ASL:** the **StudioGalt Sign-Language-Mocap-Archive** is CC0, "we don't reserve any rights", with about 2,587 sign folders of FBX and a Mixamo rig. Its hearing author warns "my knowledge of ASL is not complete" ([GitHub](https://github.com/StudioGalt/Sign-Language-Mocap-Archive)). Alongside it are **3D-LEX**, CC BY 4.0, with 1,000 ASL and 1,000 NGT signs, verified on the OSF nodes themselves ([OSF cv276](https://api.osf.io/v2/nodes/cv276/?embed=license)), and **PopSign v1.0**, CC BY 4.0, 250 signs, 47 signers ([Georgia Tech](https://signdata.cc.gatech.edu/view/datasets/popsign_v1_0/index.html)).
- **BSL and DGS:** **Ortega et al. 2025** has 234 matched concepts with handshape, location and movement codes and videos, under CC BY 4.0 ([OSF jkw8p](https://api.osf.io/v2/nodes/jkw8p/?embed=license)).
- **DGS:** the **psycholinguistic norms** give 310 clips with OpenPose and place-of-articulation codes ([OSF mz8j4](https://osf.io/mz8j4/)).
- **Israeli SL:** **ISL-LEX 1.0** has 961 signs × 52 phonology columns, CC BY 4.0 on OSF ([OSF jmwyx](https://api.osf.io/v2/nodes/jmwyx/)).
- **Russian, Georgian and Tajik SL:** CC BY 4.0 **HamNoSys transcriptions** ([OSF agnwj](https://api.osf.io/v2/nodes/agnwj/?embed=license); [figshare 15170700](https://api.figshare.com/v2/articles/15170700)). These overturn the earlier "nothing usable" verdict for Georgian and Tajik.
- **Chinese SL:** **NationalCSL-DP** has 6,707 signs and 134,140 videos, with documented signer consent ([Sci Data](https://doi.org/10.1038/s41597-025-04986-x)).
- **Hong Kong SL:** 972 sign videos under CC BY-SA 4.0 ([OSF 5vxzf](https://osf.io/5vxzf/)). This reverses "no Tier A HKSL lexicon".
- **Armenian SL:** **1,211 isolated clips** under CC BY-SA 4.0 on Commons ([Commons category](https://commons.wikimedia.org/wiki/Category:Videos_of_Armenian_Sign_Language)).
- **Ghanaian SL:** the **GSL Lexicon** has more than 1,200 signs with OpenPose, CC BY 4.0 ([Zenodo 4533753](https://zenodo.org/records/4533753)).
- **Bangla SL:** **IsharaKotha** has 3,823 HamNoSys/SiGML signs, CC BY 4.0 ([Mendeley](https://data.mendeley.com/datasets/6ykgx65ks5/2)).

## Four allowlist facts change, and the plan's tier lists need edits

Every row in `data/sources/allowlist.jsonl` was checked against the research. Most survive, but four change materially. **ASL-LEX** is the most urgent. The OSF node Marionet ingests still says "CC-By Attribution 4.0 International" ([OSF zpha4](https://api.osf.io/v2/nodes/zpha4/)). asl-lex.org now says the database is CC BY-NC 4.0 and "Use of any part of ASL-LEX for commercial purposes is expressly prohibited" ([ASL-LEX download](https://asl-lex.org/download.html)). The later gap pass treats the site's explicit statement as governing, so this is **Tier B until the maintainers confirm in writing**. **Wikisigns**' CC BY-SA 4.0 footer is real, but entry pages embed YouTube iframes ([Wikisigns Kenya entry](http://www.wikisigns.org/en/kenya/Baboon)). Only the gloss lists are Tier A; the video is Tier D.

| Allowlist row | Current claim | What the research found | Change |
|---|---|---|---|
| `asl-lex-2.0` | A, CC BY 4.0 (OSF), commercial_ok true | OSF says CC BY 4.0; asl-lex.org says CC BY-NC 4.0 and bans commercial use; reference videos are © ASL-LEX.org | Mark **contested → B**, commercial_ok false; email asllexproject@gmail.com |
| `signpuddle-asl-sgn4` | A, BY-SA 3.0 | Verified on signwriting.org and the IETF draft (project level, not per puddle). sgn4 now has 12,277 entries; its `nextid` header is stale. Other ASL puddles: sgn28 9,974, sgn25 5,530, sgn105 2,409, sgn111 434 | Keep A. Cite signwriting.org + IETF, flag "project-level", add sgn25/28/105/111 deduplicated, drop `<video>` |
| `signbank-ngt-public` | A, ~6.5k public glosses | 7,469 glosses, 6,862 public; example sentences are BY-NC-SA. Only 3 public datasets exist (NGT, Kata Kolok, EmblemsNL) ([Global Signbank](https://signbank.cls.ru.nl/datasets/available)) | Keep A; update count; exclude example-sentence media |
| `3d-lex-v1` | A (licence from paper) | CC BY 4.0 verified on OSF. NGT_LLF.zip (10.3 MB) and ASL_LLF.zip (14.5 MB) fit the cap; GLB packs are 393–644 MB; no v2 exists | Keep A; fetch the LLF zips now |
| `wikisigns-lsm` | A, video_redistrib_ok true | Video is YouTube embeds; no bulk export | video_redistrib_ok **false**; gloss lists only; ask ULPGC for source MP4s |
| `wlasl` | B, C-UDA | Confirmed C-UDA; Hub's "CC BY" is wrong; OpenHands' CC BY pose bundle does not override it | Keep B |
| `how2sign` | B, BY-NC | Confirmed CC BY-NC 4.0; continuous; a 3-hour Panoptic 3D subset exists | Keep B |
| `openasl` | B, BY-NC | No new licence evidence (seen only as a SignNet-1M input) | Keep; unverified this session |
| `asl-signbank` | B, aslsignbank.haskins.yale.edu | Host moved to aslsignbank.com; BY-NC-SA 4.0 plus "not … more than 5 to 10 percent of the work" ([conditions](https://aslsignbank.com/about/conditions/)) | Update `canonical_url`; record the 5–10% limit |
| `spreadthesign` | D | Confirmed. Derived data is also D: the Abner et al. CSV (15 of 19 languages from SpreadTheSign) and Commons "Media contributed by Spread the sign" | Add derived sources as D |
| `youtube-sl-25` | D | Confirmed. SignVerse-2M (55 codes) is built from it; YouTube-ASL and J-Shuwa are ID-only | Add derivatives as D |
| `sign-language-dataset-hub` | A (catalogue) | Mislabels ASL Citizen (actually MSR non-commercial, no redistribution) and WLASL. PHOENIX-Libras, CCTV-CSL and J-ASL are untraceable ([MSR licence](http://web.archive.org/web/20240920204904/https://www.microsoft.com/en-us/research/project/asl-citizen/dataset-license/)) | Keep as finder only; mark "unreliable" |
| `sldc-compendium` | A (catalogue) | Its licence column is wrong for the Korean NIKL dictionary, ISL-LEX and LSCI, and stale for Ocelles and Dicta-Sign ([Compendium Korean entry](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/koreansldictionary.html)) | Treat Compendium-only licences as unverified |

`dataingestplan.md` needs matching edits:
- **Tier A list:**
  - Wikisigns (LSM, Malagasy, West Bengal) is A for glosses only.
  - "Wikisign LSC (BY-SA 2.0 ES)" is a dead site.
  - BdSL47 is fingerspelling only.
- **Tier C list:**
  - The BSL Corpus open-access data is now **Tier A**. Its "no duplication" clause continues "…outside of the conditions set out below", and the CC BY-SA 4.0 grant is one of those conditions ([CAVA](https://bslcorpusproject.org/cava/open-access-data/)).
  - "ASL-LEX website BY-NC — use OSF instead" no longer resolves the problem.

The later gap passes reclassified several other sources:
- **Korean NIKL 한국수어사전** is CC BY-NC-ND 2.0 KR in its policy text and has never been BY-SA, so it is B (C to derive) ([NIKL policy](https://sldict.korean.go.kr/front/main/copyRightPolicy.do)).
- **3DZSignDB** carries three licence signals (CC BY / GPL-3.0 / CC BY-NC), and about 300 of its 417 signs are Dicta-Sign-derived, so it is B with a provenance hold ([GitHub](https://github.com/linuxscout/algerianSignLanguage-avatar)).
- **dico.lsfb.be** is B: the footer's BY-SA sentence links to a BY-NC-ND page ([LSFB licence](https://dico.lsfb.be/licence-creative-commons/)).
- **EASIER wordnet** is B: the README says "BY-NC-SA" ([README](https://www.fdr.uni-hamburg.de/record/14190/files/_README.md?download=1)).
- **Dicta-Sign** is B, C to derive (CLARIN:EL lists BY-NC-ND 4.0).

Eight ISO corrections must be applied before any `data/signs/{iso}/` directory is created:
- Jamaican SL is `jls` and Konchri Sain is `jcs`.
- Providencia SL is `prz`.
- Bangla SL has no code; `bzs` is Brazilian SL.
- Valencian SL is `vsv`, not `csn`, which is Colombian SL.
- Panamanian SL is `lsp`, not `lsn`, which is Tibetan SL.
- Yemeni SL has no ISO code (Glottolog `yeme1237`), so the notes' `yms` is invalid.
- The tactile Norwegian corpus belongs to `nsl`, not `nsi`, which is Nigerian SL.

Appendix J lists all of them.

## Ingest notation first, then a dozen CC BY citation sets

The cheapest win is a single SPML parser, an extension of the existing `sgn4` path. Applied to every non-private puddle, it gives Tier A FSW notation for the 84 language keys that have a puddle (53 of them with at least 50 dictionary entries). Keep each entry's `<src>` for attribution and drop `<video>`. Known quality filters:
- the 75 Libras entries in Portugal's sgn33;
- the 29 third-party `diccisenas` entries in Uruguay's sgn143 ([sgn143](https://www.signbank.org/signpuddle2.0/data/spml/sgn143.spml));
- the provenance of Singapore's sgn11, whose submissions came partly from the account that built the Vietnam puddle;
- the duplicate sgn80 = sgn46;
- the "junk" Hong Kong puddle sgn12.

Two dumps exceed the cap: Brazil sgn46 and Korea sgn78. SignPuddle 3 exposes smaller ISO-tagged JSON collections, including `kvk-KR-dictionary-public` at 401 KB ([SP3 collections](https://signpuddle.com/server/collection)). The Brazilian one, at 20.5 MB, is still over the cap.

Second, ingest the small phonology and notation files that already fit under 20 MB:
- ISL-LEX CSV (353 KB);
- Ortega `data_signs.csv` (24 KB) with `hs/loc/mov` QA labels;
- `DGS_norms.csv` (72 KB);
- the LSC phonology TSV (157 KB, CC BY-SA 4.0) ([CORA](https://doi.org/10.34810/data1935));
- the OSF `agnwj` HamNoSys workbook (272 KB) and Power 2021 (56 KB);
- the GPL-3.0 Vietnamese HamNoSys dictionary (3,873 rows) ([GitHub](https://github.com/raianrido/VSL));
- IsharaKotha;
- the 271 Wiktionary ASL lemma transcriptions;
- 3D-LEX `NGT_LLF.zip`;
- the UCI Auslan glove set (`Auslan.npz`, 12 MB, CC BY 4.0) ([UCI](https://archive.ics.uci.edu/dataset/115));
- NationalCSL-DP's `gloss.csv`.

These seed SignDesc features with no video at all, which fits Marionet's "clips without video" approach.

Third, a raised cap would admit the CC BY citation-video and mocap sets that make the best fitting targets:
- StudioGalt (about 13 MB per sign; sparse checkout, never the 40 GB clone);
- 3D-LEX GLB;
- Ortega's BSL/DGS zips (2.2 GB);
- the DGS norms clips (0.53 GB);
- HKSL `Signs/small` (122 MB);
- the Elix Commons clips (58 MB) and Lingua Libre LSF (about 175 MB);
- the Armenian Commons clips;
- SWL-LSE (24 MB) ([Zenodo 13691887](https://zenodo.org/records/13691887));
- the GSL Lexicon (1.16 GB);
- INCLUDE poses (663 MB) ([Zenodo 6674324](https://zenodo.org/records/6674324));
- the LSEc lexical subset, whose consent covers AI use ([Zenodo versions](https://zenodo.org/api/records/21627229/versions));
- Synae Libras (256 clips) ([Zenodo 20724652](https://zenodo.org/records/20724652));
- the 121-sign LSM Glosses set ([Zenodo 18330565](https://zenodo.org/records/18330565)).

Three caveats apply:
- **ShareAlike:** SignPuddle, Wiktionary, HKSL, Armenian, Elix and the BSL Corpus are ShareAlike, so SignDesc rows and clips derived from them must carry BY-SA. Marionet needs a per-row licence field.
- **Signer rights:** CC licences do not clear signers' publicity or portrait rights. Retargeting motion rather than faces reduces, but does not remove, that issue.
- **Redistribution:** Kaggle's ISLR landmarks are CC BY 4.0 for use, but the rules forbid redistribution. The CC0 rerun set is the copy to redistribute ([Kaggle rules](https://www.kaggle.com/competitions/asl-signs/rules); [rerun set](https://www.kaggle.com/datasets/sohier/461054610546105)).

## Twenty permission emails would unlock most remaining lexicons

For Africa, the Middle East, South and Southeast Asia and the Pacific, the binding constraint is licensing, not discovery. Every archive route that works returns non-commercial, no-derivative or restricted terms:
- **SIL's SooSL Web** dictionaries carry CC BY-NC-ND 4.0 plus a no-copy clause ([SooSL terms](https://soosl.net/help/en/Termsofuse.html)).
- **ELAR** allows private study and non-commercial use only ([ELAR legal](https://www.elararchive.org/legal/)).
- **PARADISEC** defaults to BY-NC-SA and its data "cannot be included in models" ([PDSC conditions](https://www.paradisec.org.au/deposit/access-conditions/)).

The largest national lexicons are all Tier C. Ranked by signs unlocked per email:
- the SooSL **Jordanian dictionary**, 7,103 signs with dialect tags, plus Hanoi (1,206), LESSA (1,065), Tunisia (279) and Vanuatu (148), all through one SIL channel ([SooSL API](https://api-web.soosl.net/projects/list));
- **NADT's Thai SL Database**, 8,086 words, whose terms bar bots ([th-sl.com](https://th-sl.com/));
- **FESF's** Pakistan SL dictionary, 7,500+ words ([psl.org.pk](https://psl.org.pk/));
- **ISLRTC's** roughly 13,600 Indian SL citation videos, under a GODL portal footer only ([ISLRTC](https://islrtc.nic.in/));
- **Asian SignBank**, 4,750 signs with Brentari-model phonology across Sri Lanka, Jakarta, Yogyakarta, HCMC and Yangon ([copyright page](http://www.cslds.org/asb/copyright.jsp?p=copyright&c=ALL&l=en));
- **MOET's QIPEDC**, about 4,000 Vietnamese words tagged North/Central/South, the only route to separating hab, haf and hos ([QIPEDC](https://qipedc.moet.gov.vn/)).

In Europe the asks are about phonology exports rather than discovery:
- SGB-FSS for Signsuisse (18,221 items across DSGS, LSF-CH and LIS-CH) ([WMT-SLT data](https://www.wmt-slt.com/data));
- Stockholm University for the official STS lexicon export (about 21.6k signs, BY-NC-SA) ([STS lexicon](https://teckensprakslexikon.su.se/information/om-lexikonet));
- the UW PJM Lab for CDPSL HamNoSys;
- IDGS Hamburg for the DGS-Korpus type list with HamNoSys;
- UCL for BSL SignBank;
- LSFB asbl and VGTC for their dictionaries.

NZSL is a special case. Its GitHub release says CC BY-NC-SA 4.0, but the site licence in force since June 2026 says "You must not use any of our content to train, test, or build AI systems". Only DSRU can say which applies to a rule-based avatar compiler ([NZSL copyright](https://www.nzsl.nz/copyright/); [releases](https://github.com/ODNZSL/nzsl-dictionary-scripts/releases)).

Appendix E ranks all of these requests with contacts.

## Consent, mirrors and an unfinished search set the limits

Community authorisation is a separate gate from copyright and should be its own allowlist field. A public-domain licence does not settle consent:
- **Plains Indian SL** material is PD (Mallery 1881, Tomkins 1929 is "pd, full view" on HathiTrust). It should still be tagged "historical, outsider-recorded", avoid ceremonial vocabulary, and go through living Hand Talk teachers and tribal language programmes first.
- **Navajo Family Sign and Keresan Pueblo SL** should not be pursued without family, Nation or pueblo authorisation ([NAU chapter](https://jan.ucc.nau.edu/~jar/NNL/NNL_11.pdf)).
- **Australian Aboriginal sign material**, such as Iltyem-iltyem, carries BY-NC-ND plus cultural protocols. Any ingest must be community-led ([Iltyem-iltyem licensing](https://www.iltyemiltyem.com/licensing/)).
- **Inuit SL** falls under Inuit data sovereignty.
- **Village and shared sign languages**: Kata Kolok, Adamorobe, Providencia, Bay Islands, Chatino, Ka'apor, Jumla and Jhankot, Alipur, Kafr Qasem, Al-Sayyid Bedouin and Yucatec Maya. These are reachable only through archive stewards or research labs, and their small communities make re-identification and representation real risks.

Appendix I lists each one.

Tier D traps cluster into five patterns, with 311 rows in Appendix F:
- **Relabelled mirrors**: a Kaggle "CC BY 4.0" scrape of Libras Signbank ([Kaggle](https://www.kaggle.com/api/v1/datasets/view/bernardinello/signbank)), a CC0 Kaggle copy of QIPEDC, HF copies of Slovo, V-LIBRASIL and KArSL.
- **YouTube-hosted dictionaries**: Wikisigns, SignWiki, J-Shuwa, Tree of Life.
- **SpreadTheSign-derived data**: the Abner et al. phylogenetics CSV ([Dryad](https://doi.org/10.5061/dryad.bnzs7h4h1)) and a Commons category.
- **Scrapes of national dictionaries that forbid it**: RoCoISLR ([arXiv](https://arxiv.org/abs/2511.12767)), the UAE esl-platform ([GitHub](https://github.com/alanbarret/esl-platform)), a Bulgarian МОН extractor.
- **Permissive badges over restricted upstreams**: ASL-Skeleton3D/Phono from ASLLVD, the OpenHands pose bundle, SignBank+'s NC relicence of BY-SA SignPuddle ([SignBank+](https://github.com/sign-language-processing/signbank-plus)).

The search itself is incomplete in two documented ways. First, the session's shared web-search budget of 200 calls ran out partway through. After that, discovery relied on repository APIs and direct fetches: DataCite, Zenodo, OSF, Kaggle, Hugging Face, PARADISEC OAI, SooSL, CLARIN VLO and Wayback. Local-language national dictionaries for the Balkans, Caucasus, Central Asia and the Caribbean were therefore never web-searched, so "nothing found" there is not proof of absence. Second, the local-language sweep ran 129 query strings across 51 languages. **OpenAlex** returned results for only 36: terms 1–34 ran but their results were lost, and terms 71–129 were never run after the free shared-IP budget ran out ([OpenAlex](https://api.openalex.org/works?search=gebarentaal)). **Semantic Scholar** returned HTTP 429 for 103 of 129 terms ([S2 API](https://api.semanticscholar.org/graph/v1/paper/search?query=lengua%20de%20se%C3%B1as)). A free OpenAlex API key, ideally with `filter=type:dataset`, would close the first gap. Appendices G and H record these avenues and the three oversized downloads, none of which reached the repository.

## Conclusion

The licence evidence answers the "which sources" question better than the discovery does. Marionet can reach 62 sign languages with open data tomorrow, but for most of them that means crowd-sourced SignWriting, with variable contributor provenance and no per-puddle consent record. Citation-form motion under open terms remains rare, and it clusters in Europe, North America and East Asia. The structural implication is that a SignPuddle-to-SignDesc compiler path, plus a curated set of phonology spreadsheets, is the scalable spine. Video and mocap become QA and fitting layers that grow one permission at a time.

Two catalogue lessons follow. The Hamburg Compendium and the aggregators (Dataset Hub, L3, HF and Kaggle mirrors) were the main sources of wrong licence labels. So every Tier A allowlist row should carry a primary-page quote, plus a provenance check for derivatives. And the next fifty languages will come from organisations, not datasets. The per-language GitHub issues should therefore lead with the named permission ask from Appendix E, not with a search task.

---

## How to read the appendices

The appendices below were generated from the thirteen notes files after the three gap files' corrections were applied, then checked by hand. When the gap files disagree with earlier notes, the gap files win.

- **Tiers** follow Marionet's gate:
  - **A**: CC BY / BY-SA / CC0 / PD / open licence (MIT/GPL/LGPL).
  - **B**: non-commercial or research-only.
  - **C**: register, contract, permission, or no stated licence but obtainable.
  - **D**: skip.
- **†** marks a tier inferred from the stated licence where the notes assigned none.
- A licence cell that starts with a verdict (e.g. "CONTESTED…", "Footer CC BY-SA 4.0 covers glosses…") is the gap-file ruling.
- **"Class" in Appendix A:**
  - **A**: at least about 100 citation-form signs under Tier A.
  - **A (thin)**: Tier A exists, but only as tokens, fingerspelling, or glosses without forms.
  - **B/C only**: no Tier A source.

  Continuous-only corpora are kept in the register but do not by themselves put a language in the matrix.
- **SignPuddle cells** read `sgnID type entries` (dict, lit, enc, bible, signs); "≈" means a maximum entry id from a dump over 20 MB.
- **Grouping by ISO code:** Vietnamese national sources are grouped under `hab/haf/hos` because no source except QIPEDC and SooSL Hanoi separates the three. Slovene SL sits under `ysl`, following SignPuddle and Glottolog.

## Appendix A — Per-language coverage matrix (languages with any source at Tier A–C)

One row per sign language that has at least one Tier A–C source of dictionary-relevant data, sorted by region and then language. Each row is ready to become one GitHub issue. "Best Tier A" lists the strongest open inputs; "Tier C permission asks" names whom to write to. The full source detail is in Appendix B.

| Language | ISO 639-3 | Region | Best Tier A source(s) | Tier B | Tier C permission asks | SignPuddle puddles (ID type entries) | Recommended first ingest | Class |
|---|---|---|---|---|---|---|---|---|
| American SL (ASL) | ase | North America | 3D-LEX ASL (1,000 signs, mocap, CC BY 4.0); StudioGalt Mocap Archive (~2,587 signs, FBX + Mixamo rig, CC0; hearing-author QA flag); PopSign v1.0 (250 signs, video, CC BY 4.0); ISLR rerun landmarks (250 signs, CC0); Wiktionary (271 lemma transcriptions, BY-SA); Long 1918 / Michaels 1923 (PD print) | ASL-LEX 2.0 (contested: OSF CC BY 4.0 vs site CC BY-NC 4.0); ASL Signbank (BY-NC-SA, now aslsignbank.com); ASL Citizen (MSR, NC); WLASL (C-UDA); Sem-Lex (BY-NC-SA); How2Sign / OpenASL (BY-NC, continuous) | ASL-LEX commercial confirmation + reference videos (asllexproject@gmail.com); ASLLVD / ASLLRP (Neidle, BU); ASL-Skeleton3D / ASL-Phono (ASLLVD-derived); ASL-100-RGBD (Databrary); Black ASL Project corpus | sgn4 dict 12,277; sgn151 bible 11,783; sgn28 dict 9,974; sgn152 bible 6,544; sgn25 dict 5,530; sgn105 dict 2,409; sgn21 enc 899; sgn5 lit 755; sgn111 dict 434; sgn17 signs 19 | StudioGalt sparse checkout of glosses that overlap ASL-LEX, plus 3D-LEX ASL GLB (both need the 20 MB cap raised); Wiktionary lemmas; resolve the ASL-LEX licence before any commercial build | A |
| Hawaiʻi SL | hps | North America | – | ELAR Woodward HSL collection (non-commercial) | Kaipuleohone 2023 lexicon (embargoed to 2028-06-06; depositor Lisa Petersen) | – | None before depositor permission | B/C only |
| Inuit SL | iks | North America | – | ELAR dk0135 (16.5 h, Schuit; non-commercial) | Community agreement (Inuit organisations) before ELAR access; Joke Schuit for any lexical list | – | None until community consultation | B/C only |
| Maritime SL | nsr | North America | – | – | Doull 1978 print (260 photos); Yoel 2009 appendices (private gloss list only) | – | None: moribund, new documentation only with the community | B/C only |
| Plains Indian SL | psd | North America | Mallery 1881, Clark 1885, Tomkins 1926/1929 (public-domain print with written sign descriptions); Scott 1930 film (PD claim) | Dakota Media Access IA item (CC BY-NC 4.0) | NARA naId 12684 film (mopix@nara.gov); tribal language programmes | – | Mallery 1881 text → SignDesc only after consulting Hand Talk teachers; tag "historical, outsider-recorded" | A |
| Quebec SL (LSQ) | fcs | North America | SignPuddle sgn47 (12,086 entries) | Lexique LSQ (4,611 clips, BY-NC-ND) | UQAM LSQ lexicons (Vimeo, ©); RÉCIT for Lexique LSQ derivatives | sgn47 dict 12,086; sgn81 lit 404; sgn140 enc 5 | sgn47 SPML (3.4 MB); reuse the sgn4 parser | A |
| Bay Islands SL | none | Caribbean | – | ELAR BISL lexical database (500+ glosses + xlsx; registration) | Ben Braithwaite (UWI) | – | ELAR registration; clips are corpus tokens, not citation forms | B/C only |
| Cuban SL | csf | Caribbean | Commons LSC manual-alphabet video + stills (BY-SA 4.0, fingerspelling); Wiktionary (3 lemmas) | – | ANSOC print dictionary (c. 2009) | – | Fingerspelling handshapes only | A (thin) |
| Guyana SL | none | Caribbean | Wikisigns Guyana (13 glosses; video is YouTube = D) | – | – | – | Gloss list only | A (thin) |
| Haitian SL (LSH) | none | Caribbean | LSHDoP grammar sketch (CC BY 4.0, reference only); SignPuddle sgn113 (1 entry) | – | LSHDoP lexical list (Julie Hochgesang, Gallaudet) | sgn113 dict 1 | Ask Hochgesang for the lexical list | A (thin) |
| Jamaican SL | jls | Caribbean | – | – | JAD glossary (~1,490 entries, all rights reserved: partnership, not ingest) | – | Partnership request to Jamaica Association for the Deaf | B/C only |
| Providencia SL | prz | Caribbean | – | ELAR PISL Lexical Database (~527 open citation clips + 6 CSVs; non-commercial) | Steward Rehana Omardeen for commercial use | – | ELAR lexical database for research fitting; send the steward request early | B/C only |
| Trinidad & Tobago SL | lst | Caribbean | – | ELAR "Comparing signs from USA, TTSL and the Bay Islands" (1 video) | Government TTSL dictionary (locate via Ben Braithwaite, UWI); arXiv 2412.18187 TTSL dataset (no data link) | – | Ask Braithwaite to locate the government dictionary | B/C only |
| Argentine SL | aed | Latin America | SignPuddle sgn41 (1,870) | LSA64 (64 signs, BY-NC-SA); LSA16 handshapes | CAS Señario (all rights reserved) | sgn41 dict 1,870; sgn145 lit 4; sgn146 enc 0 | sgn41 | A |
| Bolivian SL | bvl | Latin America | SignPuddle sgn45 (7) | – | Ministerio de Educación LSB modules | sgn45 dict 7 | None substantial | A (thin) |
| Brazilian SL (Libras) | bzs | Latin America | SignPuddle sgn46 (≈70,875; 22.2 MB, over cap; sgn80 duplicates it); Synae (256 clips, CC BY 4.0); MINDS-Libras (20 signs, CC BY); VLibras gloss list (18,783 names, LGPL, no forms); LSWH100 handshapes; Toponímia em Libras (8 clips, BY-SA) | Signbank da Libras (3,118 signs, BY-NC-SA); V-LIBRASIL (1,364 terms; no redistribution); Corpus de Libras; Zenodo 10804006 SignWriting images | INES dictionary; Libras-UFPel (unreleased); Apoema-Libras560; VLibras animation bundles | sgn46 dict ≈70,875; sgn116 enc 5,449; sgn114 lit 4,971; sgn80 dict 3,501 | Raise the cap for sgn46 (or the 20.5 MB SP3 JSON), then Synae clips | A |
| Chilean SL | csg | Latin America | SignPuddle sgn135 (175) | – | UMCE bilingual LSCh dictionary | sgn135 dict 175 | sgn135 | A |
| Colombian SL | csn | Latin America | SignPuddle sgn51 (1,286); LSC50 (50 signs, RGB-D + IMU, figshare CC BY 4.0); Kaggle LSC 11 signs (BY-SA); LSC70 (47 signs) | – | LeSiCo (UNAL, 1,980 signs); INSOR dictionary; CES medical dictionary; SooSL Filadelfia (56) | sgn51 dict 1,286 | sgn51 + LSC50 sign list | A |
| Costa Rican SL (LESCO) | csr | Latin America | Zenodo 4723992 alphabet phonology (43.9 MB xlsx); SignPuddle sgn101 (2) | CENAREC LESCO dictionary (1,041 signs; licence unconfirmed); LESCO corpus | CENAREC licence + phonology export | sgn101 dict 2; sgn102 lit 0 | CENAREC email | A (thin) |
| Ecuadorian SL | ecs | Latin America | LSEc corpus (1,142 lexical clips / 617 labels, CC BY 4.0, consent covers AI use); SignPuddle sgn136 (4) | – | CONADIS "Gabriel Román" dictionary (~5,000; not online) | sgn136 dict 4 | LSEc v1.0.1 lexical subset | A |
| Guatemalan SL (LENSEGUA) | gsm | Latin America | Wikisigns LSG (21 glosses; video is YouTube = D) | – | ASORGUA dictionary (host dead) | sgn112 dict 0 | Gloss list only | A (thin) |
| Honduran SL (LESHO) | hds | Latin America | SignPuddle sgn16 (3,401; SignTyp-sourced) | – | ASH print LESHO dictionary | sgn16 dict 3,401; sgn121 lit 0 | sgn16 SPML | A |
| Mexican SL (LSM) | mfs | Latin America | SignPuddle sgn65 (1,741) + sgn120 lit; Zenodo LSM Glosses (121 signs, CC BY 4.0); Mendeley LSM (249 words, 11 signers, CC BY); ITESO-MX-100 (CC BY); MSL-150 keypoints (CC BY); Wikisigns LSM (2,178 glosses; video is YouTube = D) | – | DIELSEME (SEP; URL dead) | sgn65 dict 1,731; sgn120 lit 666 | sgn65 + Zenodo 18330565 (121 clips, 2.67 GB) | A |
| Nicaraguan SL | ncs | Latin America | SignPuddle sgn67 (1,725) + sgn119 lit (501); NSLP manual PDF (signwriting.org BY-SA) | – | ANSNIC print dictionary | sgn67 dict 1,725; sgn119 lit 501 | sgn67 SPML | A |
| Panamanian SL | lsp | Latin America | Mendeley PSL greetings (5 signs, CC BY) | ELAR Panamanian items; ELAR naso-bermudez homesign (U access) | Garay 1990 print dictionary (ANSPA) | – | None substantial | A (thin) |
| Paraguayan SL | pys | Latin America | SignPuddle sgn129 (3,061); Achegety-LSPy alphabet (CC BY) | – | DamPy / Signatario Digital (>2,500 signs, SPL) | sgn129 dict 3,061 | sgn129 | A |
| Peruvian SL | prl | Latin America | SignPuddle sgn71 (148); PUCP-DGI156 (CC0); SeñaTalk 14-class keypoints (CC BY); antroponímico 100 clips; LSP fingerspelling sets | PUCP 305 glosas (BY-NC); SIGNO-PERU-ISO (research) | DLSP (PUCP dictionary); SIGNO-PERU-FER (restricted) | sgn71 dict 148 | PUCP-DGI156 + sgn71; ask PUCP to relicense PUCP 305 | A |
| Salvadoran SL (LESSA) | esn | Latin America | SignPuddle sgn137 (1 entry) | – | SooSL LESSA dictionary (1,065 signs, BY-NC-ND + no-copy) | sgn137 dict 1 | SooSL owner via websoosl@sil.org | B/C only |
| San Juan Quiahije Chatino SL | none | Latin America | – | ELAR Chatino collection (non-commercial) | Stewards Woodbury et al. | – | None | B/C only |
| Urubu-Ka'apor SL | uks | Latin America | – | ELAR kaaporsignlanguage-aniz-0634 (25 open items incl. sign elicitation; non-commercial) | Stewards Vitória Aniz / Gustavo Godoy | – | None before community and steward consent | B/C only |
| Uruguayan SL | ugy | Latin America | SignPuddle sgn143 (388; drop 29 third-party diccisenas entries); Wikisigns LSU (85 glosses) | – | TUILSU "Léxico trelsu" | sgn143 dict 388; sgn144 lit 5 | sgn143 filtered on src | A |
| Venezuelan SL | vsl | Latin America | SignPuddle sgn76 (136) | – | – | sgn76 dict 136 | sgn76 | A |
| Yucatec Maya SL | msd | Latin America | – | ELAR thesis item only | Olivier Le Guen (CIESAS) documentation | – | None | B/C only |
| Austrian SL (ÖGS) | asq | Western Europe & Nordic | SignPuddle sgn29 (5) | – | LedaSila (17,400 signs; unnamed CC; ZGH Klagenfurt) | sgn29 dict 5 | LedaSila licence email | A (thin) |
| British SL (BSL) | bfi | Western Europe & Nordic | Ortega et al. 2025 (234 concepts, video + hs/loc/mov codes, CC BY 4.0); BSL Corpus open-access lexical elicitation (CC BY-SA 4.0); SignPuddle sgn59 (853); CWASA example SiGML (BY-SA) | Dicta-Sign (BY-NC-ND); EASIER wordnet; BSL Corpus restricted; ECHO | BSL SignBank (~2,500 signs; UCL permission); BOBSL (BBC contract); BSL-1K; Vinson norms | sgn59 dict 853; sgn125 lit 39 | Ortega data_signs.csv + BSL signs.zip (755 MB; cap raise); BSL Corpus OA | A |
| Catalan SL (LSC) | csc | Western Europe & Nordic | CORPUS LSC gloss list (5,064 rows) + EAF/MP4 (CC BY 4.0); Villaécija phonology TSV (354 signs + 100 compounds, CC BY-SA 4.0); SignPuddle sgn56 (3,422) | SIGN-HUB grammar | Wikisign LSC (dead); IEC restricted metadata | sgn56 dict 3,422; sgn94 lit 45 | Villaécija TSV + CORPUS LSC gloss list + sgn56 | A |
| Danish SL (DTS) | dsl | Western Europe & Nordic | SignPuddle sgn30 (53) | – | tegnsprog.dk (2,324 articles with Hånd/Sted codes, ©); DTS corpus | sgn30 dict 53; sgn118 lit 0 | Danske Døves Landsforbund email | A (thin) |
| Faroese SL | none | Western Europe & Nordic | – | SignWiki Føroyar (3,738 articles; NC) | SHH / Føroyar maintainers | – | SignWiki metadata (NC) | B/C only |
| Finland-Swedish SL (FinSSL) | fss | Western Europe & Nordic | – | FinSL Signbank ECV 4 (733 glosses); Suvi FinSSL; CFSTS; SignWiki Finland | Kuurojen Liitto | – | Signbank ECV 4 (research only) | B/C only |
| Finnish SL (FinSL) | fse | Western Europe & Nordic | SignPuddle sgn57 (165) | FinSL Signbank ECV 1+2 (3,232 glosses; videos BY-NC-SA); Suvi (videos BY-NC-SA); CFINSL; SignWiki Suomi | Suvi structural codes (Kuurojen Liitto) | sgn57 dict 165 | Signbank ECV (research) + sgn57 | A |
| Flemish SL (VGT) | vgt | Western Europe & Nordic | SignPuddle sgn44 (8,969) | Corpus VGT (BY-NC-SA) | VGT Woordenboek (no licence; handshape/location fields); Global Signbank VGT (16,928 glosses, closed; VGTC) | sgn44 dict 8,969; sgn98 lit 52 | sgn44 + VGTC email (info@vgtc.be) | A |
| French Belgian SL (LSFB) | sfb | Western Europe & Nordic | SignPuddle sgn43 (3,465) | dico.lsfb.be (BY-NC-ND); Corpus LSFB / LSFB-ISOL (BY-NC-SA) | LSFB asbl (licence + export); Global Signbank LSFB (closed) | sgn43 dict 3,465; sgn95 lit 1 | sgn43 + LSFB asbl email | A |
| French SL (LSF) | fsl | Western Europe & Nordic | Elix subset on Commons (100 clips, BY-SA 4.0); Lingua Libre LSF (~190 clips, mostly CC0); SignPuddle sgn58 (1,481); Commons "LSF Vocab" (30 clips, BY-SA 2.0); CWASA SiGML; Ortolang illustrations-these (CC BY, not inspected) | FlexSign (546 signs, BY-NC-ND); MOCAP1 (BY-NC-SA); Dicta-Sign; CLM-MOCAP; LS-Colin; Mediapi | Elix full (15,300 signs, Signes de Sens); Ocelles (per-file licences, site down); Rosetta 1,200-sign mocap | sgn58 dict 1,481; sgn124 lit 16 | Lingua Libre + Elix Commons clips (~230 MB; cap raise) + sgn58 | A |
| German SL (DGS) | gsg | Western Europe & Nordic | DGS psycholinguistic norms (310 clips + OpenPose + place/handedness, CC BY 4.0); Ortega et al. 2025 DGS (234 concepts, CC BY 4.0); SignDict (752 clips: 709 BY-SA 3.0 DE + 43 CC BY); SignPuddle sgn53 (24,778) | DGS Corpus type list with HamNoSys (research only); Sign2MINT / gebaerdenlernen (BY-NC-SA); Dicta-Sign; PHOENIX | DGS-Korpus HamNoSys licence (info@dgs-korpus.de); DW-DGS; Hamburg specialist lexica; SIGNUM | sgn53 dict 24,778; sgn26 lit 420; sgn27 enc 12 | DGS norms CSV + clips (0.53 GB; cap raise) + sgn53 | A |
| Icelandic SL (ÍTM) | icl | Western Europe & Nordic | SignPuddle sgn131 (40) | SignWiki Ísland (12,317 articles with handform/location fields; NC; YouTube video) | SHH (licence version + original video files) | sgn131 dict 40 | SignWiki infobox export via API (NC) + SHH request | A (thin) |
| Irish SL | isg | Western Europe & Nordic | Smith ISL non-manual / frequency appendices (Zenodo CC BY 4.0, 68.4 MB, no video); SignPuddle sgn62 (66) | – | Signs of Ireland corpus (no public access); DCU ISL STEM glossary | sgn62 dict 66 | Smith frequency list as gloss priority + sgn62 | A (thin) |
| Italian SL (LIS) | ise | Western Europe & Nordic | SignPuddle sgn63 (1,222); AGLAIA archaeology glossary (CC BY; one 478 MB compiled video) | e-LIS (~300 citation signs, BY-NC-SA; DIZLIS-origin videos); MultiMedaLIS (BY-NC-SA); SignIT | LIS Corpus (Geraci); ATLAS / LIS4ALL; hidden sgn8 "lis" (password) | sgn63 dict 1,222 | sgn63 | A |
| Luxembourgish SL (DGS variety) | none | Western Europe & Nordic | – | – | HB SmH Gebärdensprach-Lexikon (all rights reserved) | – | Map to DGS | B/C only |
| Maltese SL | mdl | Western Europe & Nordic | SignPuddle sgn31 (2,833) + lit sgn127/147; sgn103 (234; owner-labelled private) | – | MLRS dictionary (offline); FDMSL print | sgn31 dict 2,833; sgn127 lit 753; sgn147 lit 582; sgn103 signs 234 | sgn31 (ask before sgn103) | A |
| Northern Ireland SL (no own ISO; SignPuddle bfi-IE) | none | Western Europe & Nordic | SignPuddle sgn60 (56; code bfi-IE); BSL Corpus Belfast-region signers (BY-SA) | – | – | sgn60 dict 56 | Tag Belfast signers in the BSL Corpus OA ingest | A (thin) |
| Norwegian SL (NTS) | nsl | Western Europe & Nordic | SignPuddle sgn69 (6,494) | NTS corpus on CLARINO (BY-NC-SA); TegnWiki Norge (NC; YouTube) | Norsk tegnordbok (Statped, 9,135 lexemes); Global Signbank NTS (1,946, restricted) | sgn69 dict 6,494; sgn23 lit 344; sgn24 enc 13 | sgn69 + Statped / NTNU emails | A |
| Portuguese SL (LGP) | psr | Western Europe & Nordic | SignPuddle sgn33 (496; drop 75 Libras-sourced entries); PE2LGP (110 glosses, MIT, no forms) | – | LGP Reference Corpus (UCP); dclgp | sgn33 dict 496; sgn115 lit 55; sgn117 enc 40 | sgn33 filtered on src | A |
| Sign Language of the Netherlands (NGT) | dse | Western Europe & Nordic | Global Signbank NGT public (6,862 glosses, CC BY 4.0); 3D-LEX NGT (1,000 signs, mocap, CC BY 4.0); SignPuddle sgn68 (84) | NGT iconicity stimuli (~1,410 clips; items BY-NC); Corpus NGT (BY-NC-SA); EASIER | – | sgn68 dict 84 | Signbank NGT CSV/ECV export + 3D-LEX NGT_LLF.zip (10 MB) | A |
| Spanish SL (LSE) | ssp | Western Europe & Nordic | SWL-LSE (300 citation videos + gloss CSV, CC BY 4.0); SignPuddle sgn55 (8,526); LSE-FS-UVigo + LSE fingerspelling (CC BY) | LSE-Health-UVigo (BY-NC); CNSE image bank (BY-NC-SA) | LSE-Sign (2,400 phonology-coded signs; register); Signario LSE (UCM); DILSE (9,000; licence conflict); CORLSE | sgn55 dict 8,526; sgn93 lit 505 | SWL-LSE VIDEOS_REF (24 MB) + sgn55 | A |
| Swedish SL (STS) | swl | Western Europe & Nordic | SignPuddle sgn73 (81) | Svenskt teckenspråkslexikon (~21.6k signs with transcription, BY-NC-SA) + unofficial CSV mirror; SSLC; STS pseudosign xlsx (BY-NC); STS-Mocap-v1 | Official SU export (teckenlexikon@ling.su.se) | sgn73 dict 81 | Prototype on the NC CSV; request the official export and terms | A (thin) |
| Swiss German SL (DSGS) | sgg | Western Europe & Nordic | SignPuddle sgn48 (4,745) | WMT-SLT Signsuisse release (9,044 items; NC, no redistribution); SMILE Continuous (BY-NC-SA); EASIER DSGS (1,708) | Signsuisse (SGB-FSS); Boyes Braem lexicon (3,000 signs with HamNoSys); SMILE isolated (restricted) | sgn48 dict 4,745; sgn96 lit 26 | sgn48 + one SGB-FSS request for DSGS / LSF-CH / LIS-CH | A |
| Swiss-French SL (LSF-CH) | ssr | Western Europe & Nordic | SignPuddle sgn49 (9,938) | Signsuisse WMT release (6,423 LSF-CH items) | SGB-FSS; ProsIn-SL mocap (licence unverified) | sgn49 dict 9,938; sgn20 lit 47; sgn22 enc 10 | sgn49 | A |
| Swiss-Italian SL (LIS-SI) | slf | Western Europe & Nordic | SignPuddle sgn50 (3) | Signsuisse WMT release (2,754 LIS-CH items) | SGB-FSS | sgn50 dict 3 | SGB-FSS request | A (thin) |
| Albanian SL | sqk | Central & Eastern Europe | SignPuddle sgn82 (130) | – | ANAD dictionary (1,040 signs; download prohibited; FAD holds symbol rights) | sgn82 dict 130 | sgn82 | A |
| Bulgarian SL | bqn | Central & Eastern Europe | SignPuddle sgn134 (3) | – | МОН Bulgarian SL dictionary (the GitHub scraper is D); 2017 print dictionary (5,840 units) | sgn134 dict 3 | МОН permission | A (thin) |
| Croatian SL | csq | Central & Eastern Europe | – | – | "Moja prva znakovnica" video dictionary (not in any catalogue) | – | None | B/C only |
| Czech SL (ČZJ) | cse | Central & Eastern Europe | SignPuddle sgn52 (5,863) | MC-TRISLAN mocap (BY-NC; download 404) | Dictio ČZJ (12,514 entries); UWB-07-SLR-P (ELRA); KKY mocap sets | sgn52 dict 5,863; sgn36 lit 176; sgn37 enc 73 | sgn52 | A |
| Estonian SL | eso | Central & Eastern Europe | – | EKI EVK dictionary (~5,000 articles; CLARIN ACA, non-commercial) | EKI (Tiina Laansalu) | sgn109 dict 0 | EKI CLARIN ACA download (research only) | B/C only |
| Greek SL | gss | Central & Eastern Europe | GSL Dataset (CC BY 4.0, gloss-aligned) + its OpenHands poses; GSLW; Greek elementary 3D pose trajectories (CC BY); CWASA SiGML; SignPuddle sgn61 (26); Wikisigns GSL (100 glosses) | Dicta-Sign GSL (BY-NC-ND); EASIER (2,949); POLYTROPON parallel corpus | POLYTROPON Lexicon (8,616 signs, ILSP); NOEMA (3,000 HamNoSys); SL-ReDu (369 isolated signs) | sgn61 dict 26 | GSL Dataset isolated split + poses; ILSP POLYTROPON request | A |
| Hungarian SL | hsh | Central & Eastern Europe | SignPuddle sgn122 (67) | – | Hallatlan dictionary (~1,500; written permission); HSL Corpus | sgn122 dict 67; sgn123 lit 1 | Hallatlan request | A (thin) |
| Lithuanian SL | lls | Central & Eastern Europe | – | – | 5-volume print dictionary (Vilnius) | sgn107 dict 0 | None | B/C only |
| Macedonian SL | none | Central & Eastern Europe | Commons "Videos of Macedonian Sign Language" (19 files, per-file licences) | – | – | – | Check per-file licences | A (thin) |
| Polish SL (PJM) | pso | Central & Eastern Europe | SignPuddle sgn19 (2,144); PSL alphabet landmarks (fingerspelling) | EASIER PJM links (BY-NC-SA) | CDPSL (HamNoSys + handshape/location; UW PJM Lab); Korpus PJM (licence conflict) | sgn19 dict 2,144; sgn38 lit 5; sgn39 enc 1 | sgn19 + CDPSL request | A |
| Romanian SL | rms | Central & Eastern Europe | SignPuddle sgn132 (38) | – | SooSL Romanian (42 signs); pesemne.ro (all rights reserved) | sgn132 dict 38; sgn138 lit 0; sgn139 enc 0 | None substantial | A (thin) |
| Russian SL | rsl | Central & Eastern Europe | Power & Kimmelman HamNoSys (714 rows) + Power 2021 (158 rows), CC BY 4.0; Slovo (1,000 classes, ~20k videos; BY-SA variant licence); SignPuddle sgn88 (1,435); Bukva fingerspelling; RSL kinematics (Kimmelman 2026) | Logos (SberAI, academic) | Garage RSL variation DB (>19k videos; no named licence); RSL Corpus (NSTU); RuSLED | sgn88 dict 1,435; sgn141 lit 0; sgn142 enc 0 | OSF agnwj HamNoSys + sgn88; Slovo landmarks (1.2 GB) | A |
| Slovak SL (SPJ) | svk | Central & Eastern Europe | SignPuddle sgn89 (25) | – | posunky.sk (©); Dictio SPJ (4,809) | sgn89 dict 25 | None substantial | A (thin) |
| Turkish SL (TİD) | tsm | Central & Eastern Europe | SignPuddle sgn90 (4) | AUTSL (226 signs, research only); BosphorusSign22k (EULA) | TİD Güncel Sözlük (2,000 concepts; host down); Boğaziçi TİD dictionary; TurkSign446 (restricted) | sgn90 dict 4 | AUTSL research-only fit; request TurkSign446 | A (thin) |
| Ukrainian SL | ukl | Central & Eastern Europe | Ukrainian dactyls (fingerspelling, CC BY); SignPuddle sgn130 (37 letters); handshape-inventory article (CC BY) | – | Dictio UkSL (71); "Our stories" corpus (Cologne, closed) | sgn130 dict 37 | Fingerspelling only | A (thin) |
| Yugoslavian SL: Serbian and Slovene varieties | ysl | Central & Eastern Europe | SignPuddle sgn74 (3,799; Slovene variety) | – | Slovar SZJ (ZDGNS); SIGNOR corpus | sgn74 dict 3,799; sgn148 lit 16; sgn149 enc 0 | sgn74 (Slovene); Serbian variety has nothing | A |
| Armenian SL | aen | Caucasus & Central Asia | Commons "Videos of Armenian Sign Language" (1,211 isolated word clips, CC BY-SA 4.0, Lingua Libre) | – | – | – | Commons API per-file ingest with attribution (Lusine Bekaryan et al.) | A |
| Azerbaijani SL | none | Caucasus & Central Asia | AzSLD (CC BY 4.0; words + fingerspelling; informed consent stated) | – | – | – | AzSLD_Words_200 (1.4 GB) | A |
| Georgian SL | none | Caucasus & Central Asia | Power & Kimmelman HamNoSys (523 rows, 229 concepts, CC BY 4.0) | SignWiki Georgia (8,296 entries; video is YouTube) | Georgian deaf union / FAD | – | OSF agnwj → SignDesc | A |
| Kazakh-Russian SL (K-RSL) | none | Caucasus & Central Asia | QazSL fingerspelling (CC BY 4.0) | – | KRSL20 (no licence); FluentSigners-50 (ELG CC BY vs Zenodo closed) | – | NU / K-SLARS licence request | A (thin) |
| Tajik SL | none | Caucasus & Central Asia | Power & Kimmelman HamNoSys (571 rows) + Power 2021 (254 rows), CC BY 4.0 | – | – | – | OSF agnwj + figshare 15170700 → SignDesc | A |
| Afghan SL | afg | Middle East & North Africa | Power 2021 aggregated Afghan SL (62 rows, CC BY 4.0); SignPuddle sgn106 (14) | – | ANAD 2008 dictionary scan (ACKU) | sgn106 dict 14 | ANAD permission | A (thin) |
| Algerian Jewish SL (Ghardaia) | ajs | Middle East & North Africa | – | – | Haifa AJSL dictionary (~470); Lanesman 2016 book (rights unclear) | – | Haifa lab | B/C only |
| Algerian SL | asp | Middle East & North Africa | – | 3DZSignDB SiGML (417 signs; three licence signals; ~300 Dicta-Sign-derived); VDzSL (synthetic) | Ministry of Solidarity 2017 official dictionary (~1,560 signs, lead); Zerrouki on 3DZSignDB | – | Email Zerrouki; exclude Dicta-Sign-derived entries | B/C only |
| Egyptian SL | esl | Middle East & North Africa | SignPuddle sgn84 (111); Mendeley ESL landmarks (55 words) | – | OSF ESL handshape phonology (no licence) | sgn84 dict 111 | sgn84 | A |
| Emirati SL | none | Middle East & North Africa | – | – | ZHO dictionary (1,244 entries; systematic retrieval forbidden); ESL127 (UAEU) | – | ZHO request | B/C only |
| Iraqi SL | none | Middle East & North Africa | ArSL-Wear20 glove data (CC BY; handshapes) | – | – | – | Handshape reference only | A (thin) |
| Israeli SL | isr | Middle East & North Africa | ISL-LEX 1.0 CSV (961 signs × 52 phonology columns, CC BY 4.0); SignPuddle sgn110 (36) | – | IADPI / Ma'agale Shema dictionary videos (~4,233); Global Signbank ISL (Rose Stamp); ISL Corpus | sgn110 dict 36 | ISL-LEX English CSV | A |
| Jordanian SL | jos | Middle East & North Africa | SignPuddle sgn86 (31) | – | SooSL Jordanian dictionary (7,103 signs / 7,347 senses; BY-NC-ND + no-copy) | sgn86 dict 31; sgn92 lit 1 | SooSL owner via websoosl@sil.org | A (thin) |
| Kafr Qasem SL | sqx | Middle East & North Africa | – | – | Haifa KQSL dictionary page (~265 entries) | – | Haifa Sign Language Research Lab | B/C only |
| Kurdish SL | zhk | Middle East & North Africa | KuSL2023 fingerspelling images | KuSL HamNoSys lexicon (527 rows, BY-NC-SA) | – | – | KuSL lexicon for NC builds only | A (thin) |
| Kuwaiti SL | none | Middle East & North Africa | – | – | KCST KSL preprint (20 signs; release unknown) | – | None | B/C only |
| Libyan SL | lbs | Middle East & North Africa | – | – | Suwed 1984 print dictionary | – | None | B/C only |
| Moroccan SL | xms | Middle East & North Africa | MoSL gloss CSVs (2,199 items, CC BY 4.0; videos withheld) | – | MoSL videos (Ben Zaid et al. / Shorouk Association) | – | MoSL gloss CSV + video request | A (thin) |
| Omani SL | none | Middle East & North Africa | – | – | OSLT / JISSR-OM (798 word signs; release pending) | – | Ask the OSLT authors | B/C only |
| Palestinian SL | none | Middle East & North Africa | – | – | LIF dictionary (print) | – | None | B/C only |
| Persian SL (ZEI) | psc | Middle East & North Africa | psl-tabular landmarks (~280 signs, CC0; provenance check); PenSLR | ELAR Persian SL / dk0598 (100 lexical signs × 36 signers; non-commercial) | Global Signbank ZEI (221); ISLR101; print dictionaries | – | psl-tabular after provenance check; ELAR dk0598 request | A |
| Saudi SL | sdl | Middle East & North Africa | SignPuddle sgn40 (401) | Isharah (continuous, research) | KArSL-502 (Hamzah Luqman, KFUPM); mArSL; Saudi print dictionaries | sgn40 dict 401; sgn91 lit 6 | sgn40 + KArSL request | A |
| Tunisian SL | tse | Middle East & North Africa | SignPuddle sgn104 (4,519) + sgn126 lit (469); Tunisian 57-word images (CC BY / CC0) | – | SooSL LST (279 signs); Corpus LST (ORTOLANG, rights empty); WebSign | sgn104 dict 4,519; sgn126 lit 469 | sgn104 | A |
| Unified Arabic SL (proxy) | none | Middle East & North Africa | ArASL / ArSL21L / ASLAD fingerspelling (CC BY); text→gloss sets | – | Unified Arabic dictionary (DVD, ~1,600 signs, SCFA); KArSL-502 (proxy) | – | Treat KArSL as the proxy after permission | A (thin) |
| Yemeni SL (notes' "yms" is not a valid code) | none | Middle East & North Africa | ArYSL (32 words, static images, CC BY / CC0) | – | – | – | Handshape/location reference | A (thin) |
| Adamorobe SL | ads | Sub-Saharan Africa | – | – | AdaSL lexicon (276 items + phonology Excel; restricted; Victoria Nyst) | – | Nyst request | B/C only |
| Bouakako SL (Côte d'Ivoire) | none | Sub-Saharan Africa | – | ELAR deposits | – | – | None | B/C only |
| Cameroon SL (incl. CASL-W60) | none | Sub-Saharan Africa | – | CASL-W60 (C-UDA; non-native signers copied online videos); ELAR dk0347 | Wierzbicki 2020 lexicon (63 signs) | – | None | B/C only |
| Chadian SL | cds | Sub-Saharan Africa | – | ELAR deposits (4 items) | – | – | None | B/C only |
| Dogon SL | none | Sub-Saharan Africa | – | – | TLA Dogon corpus (restricted) | – | None | B/C only |
| Ethiopian SL | eth | Sub-Saharan Africa | SignPuddle sgn18 (143; partly fingerspelling); Amharic SL fingerspelling set | – | ENAD print dictionary | sgn18 dict 143; sgn100 lit 1 | sgn18 | A |
| Extreme North Cameroon SL | none | Sub-Saharan Africa | – | ELAR dk0347 (8 h; non-commercial) | – | – | None | B/C only |
| Ghanaian SL | gse | Sub-Saharan Africa | GSL Lexicon (>1,200 signs, one signer + OpenPose, CC BY 4.0); SignTalk-GSL (CC BY, mostly phrases) | – | Leiden GSL app (1,300+) | – | GSL Lexicon (1.16 GB; cap raise) | A |
| Ivorian SL (LSCI) | none | Sub-Saharan Africa | Wikisign LSCI (439 signs, CC BY-SA 2.0 FR; media unverified) | ELAR dk0076 | Leiden ICSL app (1,258); Angoua Tano | – | Check media; ask Tano / Leiden | A (thin) |
| Kenyan SL | xki | Sub-Saharan Africa | eKitabu KSL (15 words + 15 numbers, 15 signers, CC0); Peace Corps KSL glossary (487 STEM clips, MIT template; provenance hold); SignPuddle sgn79 (17); Wikisigns (72 glosses) | – | Maseno KSL pose set (restricted); AI4KSL (4,000 HamNoSys words); KSL Dictionary (8,926, MSTADI) | sgn79 dict 17 | Peace Corps glossary after consent check + eKitabu lexical classes | A |
| Malagasy SL | mzc | Sub-Saharan Africa | Wikisigns Malagasy (1,314 glosses; video is YouTube = D) | – | ULPGC / Wikisigns for source MP4s | – | Gloss list + request for source files | A (thin) |
| Malawian SL | lws | Sub-Saharan Africa | SignPuddle sgn128 (49; code ase-MW) | – | eKitabu / MANAD storybook glossaries | sgn128 dict 49 | None substantial | A (thin) |
| Malian SL (LaSiMa / Bamako) | bog | Sub-Saharan Africa | Wikisign LaSiMa (32 signs) | ELAR dk0108 (1,541 lemmas, 20 h) | Leiden Malian app (439) | – | Leiden Zenodo release request | A (thin) |
| Mauritian SL | lsy | Sub-Saharan Africa | – | COCOON "Mission LSM Ile Maurice" (ND, continuous) | 2006 print dictionary and grammar | – | None | B/C only |
| Mozambican SL | mzy | Sub-Saharan Africa | Wikisigns Mozambique (44 glosses; video is YouTube = D) | – | – | – | Gloss list only | A (thin) |
| Namibian SL | nbs | Sub-Saharan Africa | – | SignWiki Namibia (1,979 signs with handshape/location; NC; YouTube) | CCDS / SHH permission | – | SignWiki infobox data after permission | B/C only |
| Nigerian SL | nsi | Sub-Saharan Africa | NSL-212 landmarks (212 classes, CC0); NSL alphanumeric (CC BY, fingerspelling); SignPuddle sgn32 (11) | Sign-to-Speech (NC) | – | sgn32 dict 11 | NSL-212 val/test pickles + gloss map | A |
| Rwandan SL | rsn | Sub-Saharan Africa | Kinyarwanda keypoints (22 signs, CC BY 4.0) | – | RNAD print dictionary | – | None substantial | A (thin) |
| Seychelles SL | lsw | Sub-Saharan Africa | – | – | LSS Dictionary (850 words; HAL, no CC) | – | APHI / Univ. Lille request | B/C only |
| South African SL | sfs | Sub-Saharan Africa | SignPuddle sgn77 (157) | UFS place-names phonology (794 rows) | UFS Omeka videos (no terms); Real SASL (permission); NID dictionary | sgn77 dict 157 | sgn77 | A |
| Tanzanian SL | tza | Sub-Saharan Africa | Commons Tanzanian SL videos (20 files, per-file licences) | SignWiki Tanzania (2,194 signs with handshape/location; NC; YouTube) | UDSM / SHH permission | – | SignWiki infobox data after permission | A (thin) |
| Ugandan SL | ugn | Sub-Saharan Africa | – | ELAR deposits | UNAD 1998 manual (print); Kyambogo dictionary | – | None | B/C only |
| Zambian SL | zsl | Sub-Saharan Africa | – | – | ZNAD 2001 print dictionary | – | None | B/C only |
| Zimbabwe SL | zib | Sub-Saharan Africa | – | – | King George VI / OSISA dictionary (Wayback only, all rights reserved) | – | None | B/C only |
| Alipur SL | none | South Asia | – | ELAR Alipur deposit (restricted) | – | – | None | B/C only |
| Bangla SL (Bangladesh; no ISO code) | none | South Asia | IsharaKotha (3,823 HamNoSys / SiGML signs, CC BY 4.0); SignBD-Word (200 words, video + pose, CC BY-SA); BdSL-300; Ishara-Lipi / BdSL47 fingerspelling | BdSLW60 / BdSLW401 | – | – | IsharaKotha SiGML (notation first; no video needed) | A |
| Ghandruk SL | gds | South Asia | – | ELAR deposits | – | – | None | B/C only |
| Indian SL | ins | South Asia | INCLUDE (263 signs, 4,292 videos, CC BY 4.0) + INCLUDE poses (Zenodo 6674324, 663 MB); Mendeley ISL sets (CC BY); Commons Tamil SL (16 files); SignPuddle sgn85 (5) | iSign (continuous) | ISLRTC dictionary (~13.6k videos; GODL footer only, Drive unlicensed); FDMSE-ISL | sgn85 dict 5 | INCLUDE.zip poses + one INCLUDE category; ISLRTC written confirmation | A |
| Jhankot SL | jhs | South Asia | – | ELAR MDG1045 Jhankot SL (43 items) | Collection steward | – | None | B/C only |
| Jumla SL | jus | South Asia | – | ELAR MDG1045 Jumli SL (173 items incl. wordlist videos) | Collection steward | – | None before community consent | B/C only |
| Nepalese SL | nsp | South Asia | NSL23 fingerspelling; SignPuddle sgn133 (5) | – | NDFN dictionary (unreachable) | sgn133 dict 5 | None substantial | A (thin) |
| Pakistan SL | pks | South Asia | PSL Lexicon text (635 rows; tags conflict); PSL dynamic word landmarks (70 words); SignPuddle sgn87 (13) | WLPSL (C-UDA); PSL-128 | FESF dictionary (7,500+ words, 78 categories) | sgn87 dict 13 | FESF permission | A (thin) |
| Sri Lankan SL | sqs | South Asia | – | SSL400 (384 classes, BY-NC-SA) | Asian SignBank Sri Lanka (asiansignbank@cslds.org) | – | Asian SignBank request | B/C only |
| West Bengal SL | wbs | South Asia | Wikisigns WBSL (170 glosses; video is YouTube = D) | – | – | – | Gloss list only | A (thin) |
| Cambodian SL | csx | Southeast Asia | – | – | Krousar Thmey dictionary (129 signs, no licence); Zenodo 21108448 20-word benchmark | – | None | B/C only |
| Indonesian SL (BISINDO) | inl | Southeast Asia | BISINDO NMM landmarks (40 words, CC BY); BISINDO letter sets | WL-BISINDO | Asian SignBank Jakarta / Yogyakarta; PUSBISINDO Kamus | – | Landmarks + Asian SignBank request | A (thin) |
| Kata Kolok (Bengkala SL) | bqy | Southeast Asia | – | ELAR Kata Kolok deposit | Global Signbank Kata Kolok (1,312 glosses, 182 public; no licence field); TLA Kata Kolok Corpus | – | Global Signbank dataset manager + community | B/C only |
| Malaysian SL | xml | Southeast Asia | MSL-Medical (50 glosses × 7 signers, CC0; gloss key unpublished); MSL landmark set (HF); Commons Malaysian SL videos (65 files, per-file); SignPuddle sgn66 (6) | MySign (1,000 glosses × 5 signers, mocap FBX, BY-NC-SA, 137 GB); BIM-SIGN pose / videos | MFD dictionary (2,870 entries) | sgn66 dict 6 | MSL-Medical after the gloss key arrives | A |
| Myanmar SL | ysm | Southeast Asia | SignPuddle sgn2 (5); IEEE DataPort alphabet (CC BY) | – | Asian SignBank Yangon | sgn2 dict 5 | Asian SignBank request | A (thin) |
| Philippine SL (FSL) | psp | Southeast Asia | FSL-105 (105 signs, CC BY 4.0); SignPuddle sgn72 (905); Transactional FSL landmarks; japorton letters (CC0) | – | PFD / fsldictionary.ph (bot-blocked) | sgn72 dict 905 | FSL-105 + sgn72 | A |
| SIBI (signed Indonesian) | none | Southeast Asia | – | 36k SIBI landmarks (dual licence) | SIBI Data in Brief set (DUA); Kemendikbud dictionary (all rights reserved; host dead) | – | None | B/C only |
| Singapore SL | sls | Southeast Asia | SignPuddle sgn11 (1,122; provenance caveat) | – | SgSL Signbank (unreachable) | sgn11 dict 1,122; sgn14 lit 14 | sgn11 after provenance validation | A |
| Thai SL | tsq | Southeast Asia | SignPuddle sgn34 (684); KM multi-signer set (10 words, MIT) | TSL-51 | NADT Thai SL Database (8,086 words) | sgn34 dict 684 | sgn34 + NADT request | A |
| Vietnamese SLs (national, undifferentiated) | hab/haf/hos | Southeast Asia | raianrido/VSL HamNoSys dictionary (3,873 rows, GPL-3.0); SignPuddle sgn153 (647; SP3 tags it hos-VN) | – | QIPEDC (~4,000 words with North/Central/South tags; MOET); SooSL Hanoi (1,206 signs, hab); Asian SignBank HCMC (hos) | sgn153 dict 647 | VSL HamNoSys + sgn153; MOET request for dialect-tagged video | A |
| Chinese SL | csl | East Asia | NationalCSL-DP (6,707 signs, 134,140 videos, 10 signers, CC BY 4.0, consent documented); SignData knowledge graph (CC BY; provenance check); SignPuddle sgn83 (97) | DEVISIGN; SLR500; CSL-Daily | CSL-LEX (700 signs × 9 parameters; no licence) | sgn83 dict 97 | NationalCSL-DP gloss.csv + one participant zip; CSL-LEX licence email | A |
| Hong Kong SL | hks | East Asia | HKSL iconicity study (972 sign videos, CC BY-SA 4.0; consent / provenance check); SignPuddle sgn12 (14, junk) | ELAR HKSL holdings | Asian SignBank; HKSL Browser (7,346); HKU-HKSLLEX; HKSL Corpus | sgn12 dict 14; sgn13 lit 2 | Signs/small (122 MB) after a consent email | A |
| Japanese SL | jsl | East Asia | SignPuddle sgn64 (328) + lit sgn99; JSL-DC (CC BY 4.0 announced, not released) | – | Osugi Lab DB (credit + prior contact); KoSign Ver.5 mocap (no product use); JSL Colloquial Corpus (academic only); NHK motion DB; Asian SignBank | sgn64 dict 328; sgn99 lit 24 | sgn64; Osugi Lab email; watch JSL-DC | A |
| Korean SL | kvk | East Asia | SignPuddle sgn78 (≈67,741 FSW strings, 26.6 MB over cap) / SP3 kvk-KR-dictionary-public JSON (401 KB) | NIKL 한국수어사전 (~3,500; text NC-ND, link NC) | KSL-LEX (GPL label over ND source); AI-Hub (Korean nationals only); NIKL KSL corpora | sgn78 dict ≈67,741 | SP3 kvk JSON first, then sgn78 after a cap raise | A |
| Macau SL | none | East Asia | – | – | ELAR Macau collection (U access) | – | None | B/C only |
| Mongolian SL | msr | East Asia | – | – | National print dictionary (unlocated) | – | None | B/C only |
| Taiwan SL | tss | East Asia | SignPuddle sgn75 (214) | – | CCU TSL dictionary (all rights reserved) | sgn75 dict 214 | sgn75 | A |
| Tibetan SL | lsn | East Asia | – | – | Tibetan SL print dictionary (unlocated) | – | None | B/C only |
| Auslan | asf | Oceania | UCI Auslan glove/tracker set (95 signs × 27, CC BY 4.0); SignPuddle sgn42 (154) | Auslan Signbank (5,172; BY-NC-ND); MM-WLAuslan (3,215 glosses; NC-SA vs NC-ND) | Auslan Corpus (Monash / LDaCA) | sgn42 dict 154 | sgn42 + UCI Auslan.npz (12 MB); Auslan Signbank permission | A |
| Australian Aboriginal sign languages (Warlpiri, Arandic, etc.) | asw | Oceania | – | Iltyem-iltyem (BY-NC-ND + cultural protocols); PARADISEC Bininj Gunwok demo | AIATSIS holdings (Kendon, Ellis) | – | Community-led only | B/C only |
| New Zealand SL | nzs | Oceania | SignPuddle sgn70 (37) | – | NZSL dictionary data (5,344 words, 63 handshape codes; BY-NC-SA release vs no-AI site licence) | sgn70 dict 37 | DSRU email before any use | A (thin) |
| Papua New Guinea SL | pgz | Oceania | – | PARADISEC LWR2 PNGSL wordlists (Reed; BY-NC-SA, not in models) | Lauren Reed (lauren.reed@anu.edu.au); Callan PNGSL dictionary (print) | – | Reed permission | B/C only |
| Vanuatu SL | none | Oceania | – | – | SooSL Vanuatu dictionary (148 signs) | – | SooSL owner via SIL | B/C only |
| Yolŋu SL | ygs | Oceania | – | – | Bauer Yolŋu corpus (DCH Köln, Closed) | – | None | B/C only |
| International Sign | ils | Multi | SignPuddle sgn35 (244) + sgn54 "Vortaro" (2,316); AGLAIA IS glossary (CC BY); IS skeleton animation (provenance unverified) | – | Dictio IS (369) | sgn54 dict 2,316; sgn35 dict 244; sgn150 signs 2 | sgn35 | A |

## Appendix B — Per-source register, grouped by language

Every Tier A, B and C source found in the thirteen notes files, deduplicated per language, after the gap-file corrections. Each language section opens with one consolidated SignPuddle row. Tier D items are in Appendix F; papers, talks, tools and catalogue pointers are omitted. Sizes and disk figures are as stated in the notes ("–" means not stated). Before any download, check a row against the 20 MB per-file cap in `dataingestplan.md`.


#### American SL (ASL) — ISO ase — North America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn4 dict 12,277; sgn151 bible 11,783; sgn28 dict 9,974; sgn152 bible 6,544; sgn25 dict 5,530; sgn105 dict 2,409; sgn21 enc 899; sgn5 lit 755; sgn111 dict 434; sgn17 signs 19 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn4.spml) | signwriting | 50,624 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 40.6 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| SLP-AA (PhonologicalCorpusTools/SLPAA) sample corpus | [github.com/PhonologicalCorpusTools/SLPAA](https://github.com/PhonologicalCorpusTools/SLPAA) | phonology | SLPAA_sample_corpus.slpaa | GPL-3.0 tool + sample corpus. | A | dump | 1,269,495 B | – |
| Wiktionary ASL lemmas (Category:American Sign Language lemmas) | [en.wiktionary.org/wiki/Category:American_…](https://en.wiktionary.org/wiki/Category:American_Sign_Language_lemmas) | phonology | 271 pages (283 members incl. 12 part-of-speech su… | CC BY-SA (Wikimedia); title transcriptions are notation. | A | api | <1 MB (all 439 lemmas) | parse the 271 titles straight into SignDesc (handshape, location, facing, movement tokens) |
| Commons "ASL (videos)" (+ Category:American Sign Language 280 files) | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 15 video files (280 files in Category:American Si… | per file | A | api | – | check per-file licence then ingest |
| HF sign/popsign-images (PopSign frame sequences) | [huggingface.co/api/datasets?author=sign](https://huggingface.co/api/datasets?author=sign) | isolated-video | – | cc-by-4.0 | A | dump | – | – |
| Kaggle asl-signs (competition) | [kaggle.com/competitions/asl-signs](https://www.kaggle.com/competitions/asl-signs) | ml-isolated | ? (data-size endpoint returned 401) | CC BY 4.0 for use; competition rules §B forbid redistribution of raw data (CC0 rerun set is the redistributable copy). | A | register | ? (main download size… | first new ASL ingest: fit 3D hand landmarks to SignDesc hand tuning for the 250 signs; join glosses to ASL-LEX |
| PopSign ASL v1.0 (Georgia Tech / NTID / Google) | [signdata.cc.gatech.edu/view/datasets/pops…](https://signdata.cc.gatech.edu/view/datasets/popsign_v1_0/index.html) | ml-isolated | 250 signs; 47 signers; 200,686 videos (165,198 ga… | "Popsign v1.0 is licensed under CC BY 4.0." | A | dump | 1.1 TB | pull only a few per-sign clips as citation-form references for the 250 ISLR signs; do not mirror 1.1 TB |
| Google Isolated Sign Language Recognition Kaggle competition (asl-signs) | [kaggle.com/competitions/asl-signs/data](https://www.kaggle.com/competitions/asl-signs/data) | ml-isolated | – | CC BY 4.0 for use; competition rules §B forbid redistribution of raw data (CC0 rerun set is the redistributable copy). | A | register | – | verify competition data licence (needs Kaggle auth) |
| ASL Isolated Sign Recognition Rerun Set (Kaggle sohier/461054610546105) | [kaggle.com/api/v1/datasets/metadata/sohie…](https://www.kaggle.com/api/v1/datasets/metadata/sohier/461054610546105) | ml-isolated | landmarks | CC0-1.0 | A | dump | 14.15 GB | – |
| 3D-LEX v1.0 (ASL) | [osf.io/cv276/](https://osf.io/cv276/) | mocap | "1000 signs from each language" | "CC-By Attribution 4.0 International" on cv276 and on every data component | A | dump | ASL_ANIM_GLB.zip 392,… | retarget the GLB/FBX animations directly |
| gaurannggg7/asl-dictionary (HF) | [huggingface.co/datasets/gaurannggg7/asl-d…](https://huggingface.co/datasets/gaurannggg7/asl-dictionary) | mocap | – | cc0-1.0 | A | dump | – | use original StudioGalt repo instead |
| StudioGalt Sign-Language-Mocap-Archive (GitHub) | [github.com/StudioGalt/Sign-Language-Mocap…](https://github.com/StudioGalt/Sign-Language-Mocap-Archive) | mocap | 2,587 sign folders (FBX incl. Mixamo rig) + SG AS… | CC0-1.0 ("CC0, we don't reserve any rights, use this as you feel.") | A | dump | repo ≈ 40 GB (~13 MB… | sparse-checkout per sign folder (do not clone 40 GB); add quality flag |
| Kaggle asl-signs (Google ISLR competition) | [kaggle.com/competitions/asl-signs/rules](https://www.kaggle.com/competitions/asl-signs/rules) | pose | 250 signs, ~100k sequences | CC BY 4.0 for use; competition rules §B forbid redistribution of raw data (CC0 rerun set is the redistributable copy). | A | register | not checked | redistribute only the CC0 rerun set |
| asl-signs CC0 rerun set | – | pose | – | CC BY 4.0 for use; competition rules §B forbid redistribution of raw data (CC0 rerun set is the redistributable copy). | A | – | – | use as the redistributable copy |
| ISLR "Rerun Set" (Kaggle dataset sohier/461054610546105, "ASL Isolated Sign Rec… | [kaggle.com/datasets/sohier/461054610546105](https://www.kaggle.com/datasets/sohier/461054610546105) | pose | ISLR-style landmarks (250-sign vocabulary) | "CC0: Public Domain" | A | – | 19,844,428,879 bytes… | use as the cleanest ISLR landmark source (no §7.B tension); exceeds 20 MB cap |
| Kaggle "Google - American Sign Language Fingerspelling Recognition" (asl-finger… | [kaggle.com/competitions/asl-fingerspelling](https://www.kaggle.com/competitions/asl-fingerspelling) | pose | MediaPipe Holistic landmarks for the FSboard data | {'name': 'Attribution 4.0 International (CC BY 4.0)'} (Kaggle license object) | A | – | – | use for fingerspelling (with FSboard) |
| HF gaurannggg7/asl-dictionary | [huggingface.co/api/datasets?search=sign-l…](https://huggingface.co/api/datasets?search=sign-language) | dictionary-site | 1K-10K | cc0-1.0 | A | dump | – | – |
| Long 1918 (IA gu_signlanguagem00long) | [archive.org/metadata/gu_signlanguagem00lo…](https://archive.org/metadata/gu_signlanguagem00long) | print | "~1,400 signs" (not re-counted) | licenseurl http://creativecommons.org/publicdomain/mark/1.0/ (CC PDM 1.0) | A | – | about 52 MB (scan) | historical ASL first ingest with the Wikisource text |
| J. Schuyler Long, The Sign Language: A Manual of Signs (2nd ed. 1918), Wikisour… | [en.wikisource.org/wiki/The_Sign_Language](https://en.wikisource.org/wiki/The_Sign_Language) | print | ? ("~1,400 signs" UNVERIFIED; ~1,060 headword-lik… | US public domain (published before 1929) | A | – | – | use the Wikisource text (English descriptions of how each sign is made) as an LLM-to-SignDesc seed |
| Commons "Category:The Sign Language A Manual of Signs" (Long 1918 plates) | [commons.wikimedia.org/wiki/Category:The_S…](https://commons.wikimedia.org/wiki/Category:The_Sign_Language_A_Manual_of_Signs) | print | 47 files (plates) | "Public domain" | A | – | – | use plates as images with the Wikisource text |
| Long 1910 ed. IA signlanguagemanu00longuoft | [archive.org/details/signlanguagemanu00lon…](https://archive.org/details/signlanguagemanu00longuoft) | print | ~470 headword-like OCR lines | "NOT_IN_COPYRIGHT" | A | – | – | none stated |
| J. W. Michaels 1923, A Handbook of the Sign Language of the Deaf (IA gu_handboo… | [archive.org/metadata/gu_handbooksignl00mi…](https://archive.org/metadata/gu_handbooksignl00mich) | print | – | licenseurl CC PDM 1.0 | A | – | about 45 MB (scan) | historical ASL ingest with Long 1918 |
| FSboard (Google, fingerspelling) | [kaggle.com/datasets/googleai/fsboard](https://www.kaggle.com/datasets/googleai/fsboard) | fingerspelling-ha… | more than 3 million characters; more than 250 hou… | "Attribution 4.0 International (CC BY 4.0)" (Kaggle license field); paper: "We publicly release FSboard ... under a CC BY 4.0 license." | A | dump | totalBytes 1,451,641,… | use for fingerspelling handshape transitions, not lexical signs |
| Commons "Videos in American Sign Language" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_in_American_Sign_Language) | continuous-corpus | 161 files | mostly "Public domain"; some "CC BY 3.0" | A | – | – | skip for SignDesc |
| NAD / Veditz, "Preservation of the Sign Language" (1913), LoC item 2023600536 | [loc.gov/item/2023600536/](https://www.loc.gov/item/2023600536/) | continuous-corpus | 11 minutes | "The Library of Congress is not aware of any U.S. copyright or other restrictions in the vast majority of motion pictures in these collections. Absent any such restricti… | A | – | about 169 MB (mp4) | none stated (continuous signed speech, not citation forms) |
| Borealis "Insights on narrative enactments ... LSQ, ASL and Quebec French" (Par… | [borealisdata.ca/dataset.xhtml?persistentI…](https://borealisdata.ca/dataset.xhtml?persistentId=doi:10.5683/SP2/DSZXKL) | continuous-corpus | 9 MP4s | "Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)" | A | – | about 16.3 MB total | small reference for non-manual features; low lexical value |
| facebook/2M-Flores-ASL (HF) | – | continuous-corpus | – | cc-by-sa-4.0 | A | dump | – | check for isolated content |
| FLEURS-ASL (Kaggle googleai/fleurs-asl) | [kaggle.com/datasets/googleai/fleurs-asl](https://www.kaggle.com/datasets/googleai/fleurs-asl) | continuous-corpus | – | CC BY-SA 4.0 | A | dump | 26.6 GB | – |
| Wikimedia Commons ASL posture photos (User:Rodasmith, 2009), Category:American… | [commons.wikimedia.org/wiki/Category:Ameri…](https://commons.wikimedia.org/wiki/Category:American_Sign_Language) | other | 280 files, 15 subcategories ("ASL handshapes (ora… | "CC BY-SA 3.0" | A | api | – | use as handshape and posture reference images alongside the Wiktionary notation |
| ASL Signbank (already in Marionet; canonical host moved to aslsignbank.com) | [aslsignbank.com/about/conditions/](https://aslsignbank.com/about/conditions/) | signbank | – | Moved to aslsignbank.com; CC BY-NC-SA 4.0 with a "5 to 10 percent of the work" limit. | B | – | – | update canonical_url in the allowlist |
| ASL Signbank | [aslsignbank.com/](http://aslsignbank.com/) | signbank | 3702 signs (2848 public) | Moved to aslsignbank.com; CC BY-NC-SA 4.0 with a "5 to 10 percent of the work" limit. | B | register | – | local research only (Tier B); read site Copyright page |
| Global Signbank - ASL (shadow copy of ASL Signbank) | [signbank.cls.ru.nl/datasets/ASL](https://signbank.cls.ru.nl/datasets/ASL) | signbank | 3,105 glosses; 0 public | Moved to aslsignbank.com; CC BY-NC-SA 4.0 with a "5 to 10 percent of the work" limit. | B | none | – | skip (closed) |
| ASL-LEX database (asl-lex.org) | [asl-lex.org/download.html](https://asl-lex.org/download.html) | lexical-db | – | CONTESTED: OSF node says CC BY 4.0; asl-lex.org says CC BY-NC 4.0 and "commercial purposes … expressly prohibited"; videos © ASL-LEX.org. Treat as B until maintainers co… | B | dump | – | treat as NC; raise OSF-vs-site licence conflict with maintainers |
| ASL-LEX OSF node zpha4 | [api.osf.io/v2/nodes/zpha4/](https://api.osf.io/v2/nodes/zpha4/) | lexical-db | ? (asl-lex.org: 2.0 is "The current and most deta… | CONTESTED: OSF node says CC BY 4.0; asl-lex.org says CC BY-NC 4.0 and "commercial purposes … expressly prohibited"; videos © ASL-LEX.org. Treat as B until maintainers co… | B | dump | – | do not treat as a CC BY grant; raise with maintainers |
| ASL Citizen (Microsoft Research) | [web.archive.org/web/20240920204904/https:…](http://web.archive.org/web/20240920204904/https://www.microsoft.com/en-us/research/project/asl-citizen/dataset-license/) | isolated-video | 83,399 videos, 2,731 signs | Microsoft Research Licence: non-commercial research, no redistribution (Hub CC BY label wrong). | B | dump | 45.9 GB | commercial use only by agreement |
| Sem-Lex Benchmark (Kezar et al. 2023) | [github.com/leekezar/SemLex](https://github.com/leekezar/SemLex) | ml-isolated | 91,148 isolated sign videos; 3,149 signs; 41 deaf… | "Sem-Lex Benchmark © 2023 is licensed under CC BY-NC-SA 4.0" | B | register | – | research-only evaluation of phoneme recognition against ASL-LEX labels |
| MS-ASL (Vaezi Joze & Koller 2019) | [microsoft.com/en-us/download/details.aspx…](https://www.microsoft.com/en-us/download/details.aspx?id=100121) | ml-isolated | 1,000 classes; 16,054 train / 4,172 test / 5,287… | "Computational Use of Data Agreement (C-UDA)" v0.1 | B | dump | 1.9 MB (MS-ASL.zip) | use only MSASL_classes.json and MSASL_synonym.json as a vocabulary map; do not fetch YouTube |
| WLASL | – | ml-isolated | 2000 glosses; 100 signers | C-UDA (per notes; the Dataset Hub's "CC BY 4.0" label is wrong) | B† | – | – | research-only use; avoid Kaggle re-uploads |
| RVL-SLLL ASL (sign.mt row) | – | ml-isolated | – | "Research Attribution" | B | – | – | research-only use |
| ASL Citizen | [download.microsoft.com/download/b/8/8/b88…](https://download.microsoft.com/download/b/8/8/b88c0bae-…/ASL_Citizen.zip) | ml-isolated | – | Microsoft Research Licence: non-commercial research, no redistribution (Hub CC BY label wrong). | B | dump | – | verify licence at primary source |
| Kaggle mirror abd0kamel/asl-citizen | [kaggle.com/api/v1/datasets/list?search=as…](https://www.kaggle.com/api/v1/datasets/list?search=asl%20citizen) | ml-isolated | – | Microsoft Research Licence: non-commercial research, no redistribution (Hub CC BY label wrong). | B | dump | 45.97 GB | skip (mirror) |
| WLASL (OpenHands upstream) | – | ml-isolated | – | Pose subset inside OpenHands Zenodo 6674324: record CC BY 4.0, but upstream terms (C-UDA, Codalab, BU, NC) are not overridden. | B | – | – | already a Tier-B row in parent |
| MS-ASL (OpenHands upstream) | – | ml-isolated | – | Pose subset inside OpenHands Zenodo 6674324: record CC BY 4.0, but upstream terms (C-UDA, Codalab, BU, NC) are not overridden. | B | – | – | – |
| SignAvatar 3D continuous ASL (HF dongludeeplearning/3D_Continuous_ASL) | [huggingface.co/datasets/dongludeeplearnin…](https://huggingface.co/datasets/dongludeeplearning/3D_Continuous_ASL) | mocap | 10K-100K items | cc-by-nc-4.0 | B | dump | – | skip (continuous NC) |
| WLASL poses (inside OpenHands Zenodo 6674324) | [zenodo.org/records/6674324](https://zenodo.org/records/6674324) | pose | – | Pose subset inside OpenHands Zenodo 6674324: record CC BY 4.0, but upstream terms (C-UDA, Codalab, BU, NC) are not overridden. | B | dump | – | do not treat the record licence as covering it |
| ASL STEM Wiki (Microsoft) | [microsoft.com/en-us/research/project/asl-…](https://www.microsoft.com/en-us/research/project/asl-stem-wiki/) | continuous-corpus | 254 Wikipedia articles, about 300 hours | "MICROSOFT RESEARCH LICENSE TERMS": "solely for non-commercial, non-revenue generating, research purposes"; "you may not distribute the data or your modifications to the… | B | – | 201,193,250,549 bytes… | skip (continuous) |
| How2Sign | – | continuous-corpus | – | CC BY-NC 4.0 | B | – | – | local research only |
| How2Sign (incl. 3-hour CMU Panoptic 3D subset) | [arxiv.org/pdf/2008.08143](https://arxiv.org/pdf/2008.08143) | continuous-corpus | 3-hour Panoptic subset (3D pose) | CC BY-NC 4.0 | B | – | – | already allowlisted (How2Sign) |
| ELAR "Comparing signs from USA, Trinidad & Tobago and the Bay Islands" (Bay Isl… | [elararchive.org/uncategorized/SO_16bd8fec…](https://www.elararchive.org/uncategorized/SO_16bd8fec-7b59-4890-87ff-1db1c6be7444/) | archive | 1 video | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | email/permission | – | none stated |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 119 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register if needed |
| Deaf Studies Digital Journal (DSDJ) | [doi.org/10.3998/15499139.0004.183](https://doi.org/10.3998/15499139.0004.183) | other | – | per-article (BY / BY-NC-ND / none) | B† | – | – | – |
| ASLG-PC12 (gloss text) | – | other | – | HF achrafothman/aslg_pc12: cc-by-nc-4.0 | B | – | – | local research only |
| ASLLRP Sign Bank (BU / Rutgers DAI) | [dai.cs.rutgers.edu/dai/s/signbank](https://dai.cs.rutgers.edu/dai/s/signbank) | signbank | page shows "Current Signs in Sign Bank 2004" | BU ASLLRP terms: research/education only; "cannot be redistributed without permission". | C | – | – | none stated |
| ASL-Phono (Zenodo 5484145) | [zenodo.org/records/5484145](https://zenodo.org/records/5484145) | phonology | ASLLVD signs (count not stated) | Zenodo CC BY 4.0 label but derived from ASLLVD ("cannot be redistributed without permission"). | C | dump | 6,053,555 B | email BU ASLLRP (may ASL-Phono/Skeleton3D be redistributed?) |
| ASLLVD (BU ASLLRP) | [bu.edu/asllrp/av/dai-asllvd.html](https://www.bu.edu/asllrp/av/dai-asllvd.html) | isolated-video | "Over 3,300 signs in citation form, for almost 9,… | BU ASLLRP terms: research/education only; "cannot be redistributed without permission". | C | – | raw VID files about 1… | ask Carol Neidle for permission to ship derived SignDesc from the handshape spreadsheet; otherwise internal Q… |
| ASLLVD (sign.mt row) | – | isolated-video | 3000 items; 12,000 samples; 4 signers | BU ASLLRP terms: research/education only; "cannot be redistributed without permission". | C | – | – | verify licence at source |
| ASL-100-RGBD (Databrary volume 1062) | [api.datacite.org/dois/10.17910/b7.1062](https://api.datacite.org/dois/10.17910/b7.1062) | ml-isolated | – | Databrary Access Agreement. | C | register | – | sign the Databrary Access Agreement |
| RWTH-BOSTON-50/104/400 | [www-i6.informatik.rwth-aachen.de/aslr/](https://www-i6.informatik.rwth-aachen.de/aslr/) | ml-isolated | BOSTON-50: "483 utterances, 50 isolated signs" | none stated ("please contact" Philippe Dreuw) | C | email/permission | – | skip |
| MS-ASL (sign.mt row) | – | ml-isolated | 1000 | "Public" (no licence URL) | C† | – | – | verify licence at source |
| ASL-Skeleton3D (Zenodo 5484110) | [zenodo.org/records/5484110](https://zenodo.org/records/5484110) | pose | – | Zenodo CC BY 4.0 label but derived from ASLLVD ("cannot be redistributed without permission"). | C | dump | 117,196,613 B | email BU ASLLRP (may ASL-Phono/Skeleton3D be redistributed?) |
| ASL-Skeleton3D / ASL-Phono (Amorim & Zanchettin 2022) | [arxiv.org/abs/2201.02065](https://arxiv.org/abs/2201.02065) | pose | – | Zenodo CC BY 4.0 label but derived from ASLLVD ("cannot be redistributed without permission"). | C | none | – | find a release and license |
| SooSL Web ASL demo | [api-web.soosl.net/projects/list](https://api-web.soosl.net/projects/list) | dictionary-site | 101 signs | SooSL ToU: CC BY-NC-ND 4.0 + no-copy clause; ask dictionary owner via websoosl@sil.org. | C | html-only | – | – |
| Dictio (Masaryk Univ.) | [dictio.info/](https://www.dictio.info/) | dictionary-site | ASL 127 entries | footer: "© 2007-2026 Masaryk University / All rights reserved"; Compendium: "information not available" | C | html-only | – | out of scope for this file |
| Higgins 1923 scan | [archive.org/advancedsearch.php?q=title%3A…](https://archive.org/advancedsearch.php?q=title%3A%28how+to+talk+to+the+deaf%29&fl%5B%5D=identifier&output=json) | print | – | – | C† | none | – | – |
| Higgins 1923, How to Talk to the Deaf | – | print | – | – | C† | none | – | find a scan |
| Gallaudet Dictionary of ASL | – | print | – | assumed proprietary | C† | print-only | – | – |
| NCSLGR corpus (BU ASLLRP) | [bu.edu/asllrp/ncslgr-for-download/downloa…](https://www.bu.edu/asllrp/ncslgr-for-download/download-info.html) | continuous-corpus | "1,866 distinct canonical signs ... total number… | BU ASLLRP terms: research/education only; "cannot be redistributed without permission". | C | – | – | skip (continuous) |
| Black ASL Project (Gallaudet: McCaskill, Lucas, Bayley, Hill) | [blackaslproject.gallaudet.edu/BlackASLPro…](https://blackaslproject.gallaudet.edu/BlackASLProject/Welcome.html) | continuous-corpus | "at least 36 hours of recording", 96 signers | "Licence information not available" (Compendium); no license on project site | C | email/permission | – | contact the project |
| Erin Wilkinson corpora on Borealis (University of Manitoba): Monologues, doi:10… | [borealisdata.ca/dataset.xhtml?persistentI…](https://borealisdata.ca/dataset.xhtml?persistentId=doi:10.5203/FK2/9JPZBS) | continuous-corpus | 11 files (10 restricted) | "CC0 1.0" (rightsIdentifier CC0-1.0) | C | email/permission | about 8 GB (all Wilki… | request access |
| Gallaudet holdings of 1910-1920 NAD films | [archive.org/advancedsearch.php?q=collecti…](https://archive.org/advancedsearch.php?q=collection%3Agallaudetuniversity+AND+mediatype%3Amovies&fl%5B%5D=identifier&output=json) | archive | – | – | C† | – | – | – |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 14 objects | per collection (not opened) | C | register | – | open per-collection licences |
| Purdue RVL-SLLL ASL database | [engineering.purdue.edu/RVL/Database/ASL/a…](https://engineering.purdue.edu/RVL/Database/ASL/asl-database-front.htm) | other | – | signed agreement: "This database will NOT be used to create any commercial product ... They do NOT have permission to copy or distribute this database to third parties .… | C | email/permission | – | skip |
| NVIDIA Signs (with the American Society for Deaf Children) | [signs-ai.com/](https://www.signs-ai.com/) | other | ? (size and sign count not stated) | NVIDIA Data License Agreement (4 Feb 2025): "license to use, reproduce, modify and create derivative works of the Data to advance access to technology for the Deaf commu… | C | register | – | defer |
| ASL-100-RGBD (Hassan et al., LREC 2020) | – | other | – | Databrary Access Agreement. | C | – | – | verify access terms |

#### Hawaiʻi SL — ISO hps — North America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 2 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| Rarrick & Wilson 2016 (LD&C 10) | [hdl.handle.net/10125/24697](https://hdl.handle.net/10125/24697) | print | – | dc.rights "Creative Commons Attribution-NonCommercial 4.0 International" | B† | – | – | none (paper, not data) |
| ELAR "Documentation of Hawaii Sign Language" (James Woodward Jr.; ELDP 2013-201… | [elararchive.org/uncategorized/SO_14be5e56…](https://www.elararchive.org/uncategorized/SO_14be5e56-b629-4d89-9a4e-7a296ce0150e/) | archive | Video 38, ELAN 23, Image 16, Document 14 | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | none stated (alternative first ingest; non-commercial) |
| Hawaiʻi SL dictionary publication (ScholarSpace / Kaipuleohone) | [scholarspace.manoa.hawaii.edu/server/api/…](https://scholarspace.manoa.hawaii.edu/server/api/discover/search/objects?query=%22Hawai%27i%20Sign%20Language%22) | print | – | ? (only embargoed Kaipuleohone word lists) | C | none | – | – |
| Kaipuleohone "Documentation of Hawai'i Sign Language 2023" (depositor Lisa Pete… | [hdl.handle.net/10125/737797](https://hdl.handle.net/10125/737797) | archive | 22 items (12 "lexicon"); about 4.75 h total, abou… | no dc.rights field; accessStatus: embargo; dc.embargo.liftdate: 2028-06-06 | C | none | – | contact the depositor and Kaipuleohone (lpappas@hawaii.edu) |
| Kaipuleohone "Signers of Hawai'i Collection" | [hdl.handle.net/10125/24084](https://hdl.handle.net/10125/24084) | archive | 49 items | open access; no dc.rights field; access conditions "specified by the depositor on the deposit form" (Conditions of Access PDF returns 404) | C | – | – | none (low value) |
| Kaipuleohone (ScholarSpace) HSL word lists, e.g. LCP-017 "Vocabulary Word List… | [hdl.handle.net/10125/737857](https://hdl.handle.net/10125/737857) | archive | word lists hdl 10125/737843–737861 (.mp4 video) | no dc.rights; dc.embargo.liftdate 2028-06-06 | C | none | – | wait for embargo lift (2028-06-06) and ask depositor |

#### Inuit SL — ISO iks — North America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Commons "Inuit Sign Language" (Umnawahal) | [commons.wikimedia.org/wiki/Category:Inuit…](https://commons.wikimedia.org/wiki/Category:Inuit_Sign_Language) | other | 6 handshape photos | "CC BY-SA 4.0" | A | – | – | none (negligible value) |
| ELAR dk0135 (Inuit SL collection) | [elararchive.org/dk0135](https://www.elararchive.org/dk0135) | archive | "16.5 hours", of which "2 hours" annotated | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | ? (login needed to see Open vs User bundles) |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 37 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |
| Schuit 2014 dissertation ("Signs of the Arctic") / ITK / Nunavut resources | [api.crossref.org/works?query.bibliographi…](https://api.crossref.org/works?query.bibliographic=Signs+of+the+Arctic+Typological+aspects+of+Inuit+Sign+Language+Schuit&rows=3) | print | – | – | C | – | – | – |

#### Maritime SL — ISO nsr — North America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Doull 1978 MSL dictionary | – | print | "260 still black and white still photographs of a… | – | C | none | – | locate holding (unknown) |

#### Martha's Vineyard SL — ISO mre — North America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Commons "Martha's Vineyard Sign Language (MSVL) of the past.ogv" (Bristol Commu… | [commons.wikimedia.org/wiki/File:Martha%27…](https://commons.wikimedia.org/wiki/File:Martha%27s_Vineyard_Sign_Language_(MSVL)_of_the_past.ogv) | other | 56-minute history lecture | CC BY 3.0 | A† | – | 539 MB | skip (not lexical) |

#### Navajo Family Sign — ISO none — North America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Supalla, Davis & Supalla 1995 (in Lucas ed., Gallaudet UP) and Davis 2010 | – | print | – | copyrighted | C† | print-only | – | do not pursue without family and Nation consent |

#### Plains Indian SL — ISO psd — North America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Wiktionary "Category:Plains Indian Sign Language lemmas" | [en.wiktionary.org/wiki/Category:Plains_In…](https://en.wiktionary.org/wiki/Category:Plains_Indian_Sign_Language_lemmas) | signwriting | 2 pages | CC BY-SA (Wikimedia); title transcriptions are notation. | A | api | – | skip (negligible) |
| Tomkins 1929 (HathiTrust mdp.39015001688293) | [catalog.hathitrust.org/api/volumes/brief/…](https://catalog.hathitrust.org/api/volumes/brief/htid/mdp.39015001688293.json) | print | – | HathiTrust rights "pd", full view. | A | – | – | check copyright renewals |
| HathiTrust: Seton, Michaels, Mallery 1881 | [catalog.hathitrust.org/api/volumes/brief/…](https://catalog.hathitrust.org/api/volumes/brief/json/title:Sign+talk) | print | – | PD by date | A | – | – | – |
| Mallery 1881, Sign Language among North American Indians compared with that amo… | [gutenberg.org/ebooks/17451](https://www.gutenberg.org/ebooks/17451) | print | – | US government work, PD (LicenseRef-PD-US); Gutenberg header: "for the use of anyone anywhere in the United States and most other parts of the world at no cost and with a… | A | dump | HTML zip about 4.9 MB… | first PISL ingest: parse the sign entries and figure captions |
| Mallery 1880, Introduction to the Study of Sign Language among the North Americ… | [archive.org/metadata/introstudysignlang00…](https://archive.org/metadata/introstudysignlang00mallrich) | print | – | possible-copyright-status: NOT_IN_COPYRIGHT; Commons charts "Public domain" | A | – | – | seed the PISL handshape inventory from the charts |
| W. P. Clark 1885, The Indian Sign Language (L.R. Hamersly), IA cu31924028770570 | [archive.org/metadata/cu31924028770570](https://archive.org/metadata/cu31924028770570) | print | IA: 462 images | HathiTrust record 000559884 items coo1/mdp/hvd all "pd", "Full view"; Commons PDF "Public domain" | A | – | IA item about 711 MB… | main PISL headword dictionary: parse its alphabetical sign descriptions |
| Hadley 1893, Indian Sign Talk (Baker & Co.), IA indiansigntalkbe00hadl | [archive.org/metadata/indiansigntalkbe00ha…](https://archive.org/metadata/indiansigntalkbe00hadl) | print | 562 images | "The Library of Congress is unaware of any copyright restrictions for this item." | A | – | item about 724 MB | none stated |
| E. T. Seton 1918, Sign Talk (Doubleday), IA signtalkuniversa00setouoft | [archive.org/details/signtalkuniversa00set…](https://archive.org/details/signtalkuniversa00setouoft) | print | – | PD by date (OCR "Copyright, 1918, by Ernest Thompson Seton"; sibling copies NOT_IN_COPYRIGHT) | A | – | – | none stated |
| Tomkins, Universal Indian Sign Language of the Plains Indians, 1926 ed. (HathiT… | [catalog.hathitrust.org/api/volumes/brief/…](https://catalog.hathitrust.org/api/volumes/brief/htid/uc1.b4500459.json) | print | – | "pd" "Full view" (record 010089405, publish date 1926) | A | – | – | ingest after Mallery 1881 and Clark 1885 |
| Tomkins 1929 ed. (HathiTrust mdp.39015001688293) | – | print | – | HathiTrust rights "pd", full view. | A | – | – | none stated |
| Scott 1930 film "Indian Sign Language Council (1930)" (Wikimedia Commons) | [commons.wikimedia.org/wiki/File:Indian_Si…](https://commons.wikimedia.org/wiki/File:Indian_Sign_Language_Council_(1930).webm) | archive | 503 s of fragments | PD claim; Commons credits "YouTube" and "Unknown author" | A | api | about 50 MB | motion reference only |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 2 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| Dakota Media Access 2026 PISL item (IA) | [archive.org/details/PerformancesAndEvents…](https://archive.org/details/PerformancesAndEvents2026-05-28-PlainsIndianSignLanguage) | continuous-corpus | – | IA licenseurl CC BY-NC 4.0. | B | – | – | none stated |
| Dakota Media Access PISL (Internet Archive item PerformancesAndEvents2026-05-28… | [archive.org/metadata/PerformancesAndEvent…](https://archive.org/metadata/PerformancesAndEvents2026-05-28-PlainsIndianSignLanguage/metadata) | archive | – | IA licenseurl CC BY-NC 4.0. | B | dump | – | – |
| Tomkins 1969 Dover reprint | – | print | – | – | C† | none | – | skip (not usable) |
| NARA naId 12684, "INDIANS OF NORTH AMERICA" (BIA, RG 75) | [catalog.archives.gov/id/12684](https://catalog.archives.gov/id/12684) | archive | – | useRestriction: Undetermined | C | email/permission | – | ask mopix@nara.gov |
| Penn Museum 1940 film (IA upenn-f16-0447) | [archive.org/details/upenn-f16-0447_1940_N…](https://archive.org/details/upenn-f16-0447_1940_Native_American_Sign_Language) | archive | – | "All rights are reserved by the University of Pennsylvania Museum" | C | – | – | none stated |

#### Quebec SL (LSQ) — ISO fcs — North America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn47 dict 12,086; sgn81 lit 404; sgn140 enc 5 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn47.spml) | signwriting | 12,495 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 3.8 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Wiktionary "Category:Quebec Sign Language lemmas" | [en.wiktionary.org/wiki/Category:Quebec_Si…](https://en.wiktionary.org/wiki/Category:Quebec_Sign_Language_lemmas) | signwriting | 2 pages | CC BY-SA (Wikimedia); title transcriptions are notation. | A | api | – | skip (negligible) |
| Commons "Quebec manual alphabet" | [commons.wikimedia.org/wiki/Category:Quebe…](https://commons.wikimedia.org/wiki/Category:Quebec_manual_alphabet) | fingerspelling-ha… | 28 files | "LSQ a.jpg"-"LSQ z.jpg" "Public domain" (uploader claim); two diagrams CC BY-SA 4.0 | A | – | – | use for fingerspelling handshapes |
| Borealis "Insights on narrative enactments ... LSQ, ASL and Quebec French" (Par… | [borealisdata.ca/dataset.xhtml?persistentI…](https://borealisdata.ca/dataset.xhtml?persistentId=doi:10.5683/SP2/DSZXKL) | continuous-corpus | 9 MP4s | "Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)" | A | – | about 16.3 MB total | small reference for non-manual features; low lexical value |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 2 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| Lexique LSQ (lexiquelsq.ca) | [lexiquelsq.ca/credits/](https://lexiquelsq.ca/credits/) | dictionary-site | "Lexique LSQ / 4611 clips video" | BY-NC-ND (badge). | B | html-only | about 3 GB (estimate) | private QA reference only; ask RÉCIT for permission covering derivatives |
| UQAM LSQ lexicons (aînés sourds, grammaire, astronomie, Gadbois, Marqspat) | [lsq.uqam.ca/?q=content/lexique-du-projet-…](https://lsq.uqam.ca/?q=content/lexique-du-projet-marqspat) | dictionary-site | – | Vimeo-hosted; © 2026; no licence. | C | html-only | – | ask rights holder |
| Institut Raymond-Dewar LSQ dictionary | [web.archive.org/web/20230209001431/http:/…](https://web.archive.org/web/20230209001431/http://www.raymond-dewar.qc.ca/) | dictionary-site | – | – | C | none | – | ask rights holder |
| grlsq.uqam.ca | [archive.org/wayback/available?url=grlsq.u…](https://archive.org/wayback/available?url=grlsq.uqam.ca) | dictionary-site | – | Vimeo-hosted; © 2026; no licence. | C | none | – | – |

#### Bay Islands SL — ISO none — Caribbean

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR BISL "Lexical database of 500+ signs", collection "Documenting language ac… | [elararchive.org/uncategorized/SO_6807d0e4…](https://www.elararchive.org/uncategorized/SO_6807d0e4-fadb-468c-9a7f-b1a11b8b8500/) | lexical-db | 500+ glosses; BISL_ELAR_Lexical_database.xlsx, a… | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register with ELAR and pull the xlsx |
| ELAR "Comparing signs from USA, Trinidad & Tobago and the Bay Islands" (Bay Isl… | [elararchive.org/uncategorized/SO_16bd8fec…](https://www.elararchive.org/uncategorized/SO_16bd8fec-7b59-4890-87ff-1db1c6be7444/) | archive | 1 video | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | email/permission | – | none stated |
| ELAR – Bay Islands Sign Language (Ben Braithwaite, UWI; ELDP) | [elararchive.org/index.php?name=SO_c943b49…](https://www.elararchive.org/index.php?name=SO_c943b490-a48b-407c-a187-ae8dde8680dc) | archive | 26 BISL items (+1 "Lexical database" item) | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | archive note only |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 27 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |

#### Cuban SL — ISO csf — Caribbean

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Wiktionary Cuban SL lemmas | [en.wiktionary.org/wiki/Category:Cuban_Sig…](https://en.wiktionary.org/wiki/Category:Cuban_Sign_Language_lemmas) | signwriting | 3 pages in Unicode SignWriting | CC BY-SA (Wikimedia); title transcriptions are notation. | A | api | – | – |
| Commons "Videos of Cuban Sign Language" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 1 file | per file | A | api | – | check per-file licence |
| Commons "Category:Cuban Sign Language" (Mercyvalladares, 2019): File:LSC Dactil… | [commons.wikimedia.org/wiki/File:LSC_Dacti…](https://commons.wikimedia.org/wiki/File:LSC_Dactilema.ogv) | fingerspelling-ha… | manual alphabet video plus 5 single-sign PNGs ("C… | "CC BY-SA 4.0" | A | api | 26,104,411 bytes (alp… | use the alphabet for LSC fingerspelling handshapes |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 3 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| ANSOC "Diccionario Básico Bilingüe LSC–Español" (c. 2009) | – | print | – | – | C† | – | – | verify (not confirmed online) |

#### Guyana SL — ISO none — Caribbean

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Wikisigns Guyana SL | [wikisigns.org/english/guyana](http://www.wikisigns.org/english/guyana) | isolated-video | 13 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | <5 MB text (all Wikis… | ingest (tiny) |

#### Haitian SL (LSH) — ISO none — Caribbean

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn113 dict 1 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn113.spml) | signwriting | 1 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| LSHDoP "Grammatical Sketch of Haitian Sign Language (LSH)" (figshare 13724614) | [doi.org/10.6084/m9.figshare.13724614](https://doi.org/10.6084/m9.figshare.13724614) | other | grammar sketch (text and figures), not a lexicon;… | Grammar sketch CC BY 4.0 (reference only); signed version on YouTube (D). | A | dump | HochgesangEtAl.2015.L… | reference only; ask the authors (Hochgesang, McAuliff, Becker, Cadet) for the underlying lexical list |
| LSHDoP (Hochgesang & McAuliff 2016, Sign Language Studies 16(2):227-294) | – | other | – | Grammar sketch CC BY 4.0 (reference only); signed version on YouTube (D). | A | none | – | contact Julie Hochgesang (Gallaudet) |

#### Kajana SL (Suriname) — ISO none — Caribbean

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Braithwaite 2017, SCL Occasional Paper 38 | [scl-online.net/publications/SCL_OP_38_Bra…](https://scl-online.net/publications/SCL_OP_38_Braithwaite_2017.pdf) | print | – | – | C† | – | – | none (only a paper) |

#### Providencia SL — ISO prz — Caribbean

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR PISL Lexical Database, collection "Revisiting the shared sign language of… | [elararchive.org/uncategorized/SO_8cbc6933…](https://www.elararchive.org/uncategorized/SO_8cbc6933-f6fb-4b1a-b52e-92e1bc24196f/) | lexical-db | about 527 clips across 6 bundles (A-C, D-G, H-N,… | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | dump | roughly 0.3-1.5 GB (e… | fetch the 6 CSVs, then the clips, for SignDesc fitting and research; write to the steward for commercial perm… |
| ELAR – Providencia Sign Language (Rehana Omardeen; ELDP) | [elararchive.org/index.php?name=SO_8cbc693…](https://www.elararchive.org/index.php?name=SO_8cbc6933-f6fb-4b1a-b52e-92e1bc24196f) | archive | 114 items | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | archive note only |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 114 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |

#### Trinidad & Tobago SL — ISO lst — Caribbean

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR "Comparing signs from USA, Trinidad & Tobago and the Bay Islands" (Bay Isl… | [elararchive.org/uncategorized/SO_16bd8fec…](https://www.elararchive.org/uncategorized/SO_16bd8fec-7b59-4890-87ff-1db1c6be7444/) | archive | 1 video | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | email/permission | – | none stated |
| UWISpace "Trinidad and Tobago Sign Language (TTSL)" community | [hdl.handle.net/2139/45460](https://hdl.handle.net/2139/45460) | archive | no public collections | – | C† | none | – | skip (dead end for now) |
| TTSL dataset (arXiv 2412.18187; new lead) | [arxiv.org/abs/2412.18187](https://arxiv.org/abs/2412.18187) | other | – | TTSL dataset mentioned; no data link. | C | none | – | ask the authors |
| TTSL government dictionary | – | other | – | – | C | none | – | – |

#### Argentine SL — ISO aed — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn41 dict 1,870; sgn145 lit 4; sgn146 enc 0 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn41.spml) | signwriting | 1,874 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.6 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| LSA64 – Ronchetti, Quiroga, Estrebou, Lanzarini, Rosete (CACIC 2016) | [facundoq.github.io/datasets/lsa64/](https://facundoq.github.io/datasets/lsa64/) | ml-isolated | 64 signs × 10 non-expert signers × 5 reps = 3,200… | "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License." | B | dump | raw 1.9 GB / cut 1.5… | research-only reference |
| LSA-X – Verri | [zenodo.org/records/19087120](https://zenodo.org/records/19087120) | pose | 1,553 videos / ~508 h | "cc-by-nc-nd-4.0" | B | dump | 46 GB | skip |
| LSA16 handshapes | [facundoq.github.io/datasets/lsa16/](https://facundoq.github.io/datasets/lsa16/) | fingerspelling-ha… | 16 handshapes × 10 subjects × 5 = 800 images | same CC BY-NC-SA 4.0 sentence as LSA64 | B | dump | 267 MB | handshape inventory reference only |
| LSA-T (sign.mt row) | – | continuous-corpus | – | MIT | B | – | – | check whether isolated clips are extractable |

#### Bolivian SL — ISO bvl — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn45 dict 7 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn45.spml) | signwriting | 7 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |

#### Brazilian homesign (COCOON) — ISO none — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Cuxac / Fusellier-Souza "Corpus LS émergente" (Brazilian homesign narratives),… | e.g. https://doi.org/10.34847/cocoon.04… | continuous-corpus | 96 records (together with Mission LSM Ile Maurice… | "Copyright (c) Cuxac, Christian; Freely accessible; Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic" | B | – | – | Reference-only unless permission (ND) |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 2 objects | per collection (not opened) | C | register | – | documentation only |

#### Brazilian SL (Libras) — ISO bzs — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn46 dict ≈70,875; sgn116 enc 5,449; sgn114 lit 4,971; sgn80 dict 3,501 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn46.spml) | signwriting | 84,796 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 29.5 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube); sgn46 exceed 20 MB: raise cap or use SP3 JSON |
| VLibras gloss list (spbgovbr-vlibras/vlibras-dictionary-repository) | [github.com/spbgovbr-vlibras/vlibras-dicti…](https://github.com/spbgovbr-vlibras/vlibras-dictionary-repository) | lexical-db | 18,783 gloss names (signspatch201831.json 17,733… | LGPL-3.0 gloss list (18,783 names); animation bundles unpublished (C). | A | dump | – | – |
| LSWH100 – Libras SignWriting Handshape – Coelho Lobo-Neto | [zenodo.org/records/10635628](https://zenodo.org/records/10635628) | phonology | 144,000 images, 100 handshape classes | "cc-by-4.0" | A | dump | 17.7 GB | use as phonology aid for FSW→VRM hand tuning |
| SignPuddle 3 bzs-BR-dictionary-public | – | signwriting | – | no licence field (project-level BY-SA) | A | dump | 20,475,380 B | fetch only if the 20 MB cap is raised |
| MINDS-Libras (Zenodo 2667329) | [zenodo.org/records/2667329](https://zenodo.org/records/2667329) | isolated-video | 20 signs (RGB-D) | Zenodo CC BY 4.0. | A | dump | ≥60 GB | optional pilot (out of region) |
| Synae – "Sinais da Trilha 01–10" (IFCE Tianguá), Zenodo | [zenodo.org/records/20724652](https://zenodo.org/records/20724652) | isolated-video | 7+27+27+18+31+35+35+19+29+28 = 256 clips (27 are… | Zenodo license.id: "cc-by-4.0" | A | dump | ~0.56 GB | Download all 10 tracks; dedupe against the duplicate zip record https://zenodo.org/records/20722899 and again… |
| Toponímia em Libras (Pontal do Paraná) | [zenodo.org/records/23285949](https://zenodo.org/records/23285949) | isolated-video | 8 neighbourhood-name signs, one mp4 each (01-Guar… | "cc-by-sa-4.0" (Zenodo) | A | dump | 27.6 MB | Add as a toponym-sign mini-set |
| Wikisigns LIBRAS | [wikisigns.org/portugues/libras-brasil/](http://www.wikisigns.org/portugues/libras-brasil/) | isolated-video | 32 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | tiny | small extra ingest |
| Commons "Videos of Brazilian Sign Language" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 17 files | per file | A | api | – | check per-file licence then ingest |
| Libras-10 Dataset | [zenodo.org/records/3229958](https://zenodo.org/records/3229958) | ml-isolated | "10 signs … recorded 10 times by 1 signer, totali… | "cc-by-4.0" | A | dump | 22.4 GB | Low priority (vocabulary tiny, files huge) |
| MALTA_LIBRAS (HF) | [huggingface.co/datasets/MALTA-Lab/MALTA_L…](https://huggingface.co/datasets/MALTA-Lab/MALTA_LIBRAS) | ml-isolated | 10K–100K | "license: mit" | A | dump | – | low priority (tensors) |
| MINDS-Libras RGB-D (Kinect v2) | [zenodo.org/record/4322983](https://zenodo.org/record/4322983) | pose | same 20 signs | Zenodo CC BY 4.0. | A | dump | 30.8 GB | use skeleton text files for retargeting |
| Dicionário ilustrado de Libras: sinais regionais da cidade de Gurupi – Tocantins | [osf.io/kt35f/](https://osf.io/kt35f/) | print | one 21 MB PDF of illustrated regional signs for p… | "CC-By Attribution 4.0 International" (OSF) | A | dump | 21 MB | ? (none stated) |
| Manual de Libras para Enfermagem | [zenodo.org/records/21776866](https://zenodo.org/records/21776866) | print | 7.8 MB PDF with images (image glossary only) | "cc-by-4.0" | A | dump | 7.8 MB | ? (none stated) |
| "Libras" (UCI Libras Movement re-uploads) | [zenodo.org/records/10852531](https://zenodo.org/records/10852531) | other | "15 classes of 24 instances each … hand movement… | "cc-by-4.0" | A | – | – | ? (none stated) |
| pt-br2libras-gloss / libras_bilingual_dataset – Lima, França, Silva, Albuquerqu… | [data.mendeley.com/datasets/ryj88ckjww](https://data.mendeley.com/datasets/ryj88ckjww) | other | 127,349 / 68,029 sentence pairs | Mendeley "CC BY-SA 4.0" | A | dump | 31 MB / 9 MB | use as gloss vocabulary frequency list |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 1 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| Libras Signbank (UFSC) | – | signbank | – | CC BY-NC-SA 4.0 (UFSC's own terms, as cited in this file) | B† | – | – | – |
| Signbank da Libras API (api-signbank.levantelab.com.br) | [api-signbank.levantelab.com.br/api/langua…](https://api-signbank.levantelab.com.br/api/languages) | signbank | – | ? (video licence unresolved) | B | api | – | – |
| Signbank da Libras (UFSC) | [signbank.libras.ufsc.br/pt/terms-of-use](https://signbank.libras.ufsc.br/pt/terms-of-use) | signbank | 3,118 signs (Compendium) | Site bundle string: "Os dados são públicos para uso sob a licença internacional de Creative Commons BY-NC-SA 4.0." | B | html-only | – | ask UFSC (Quadros) for an export and whether a BY grant is possible |
| Zenodo 10804006 (Libras SignWriting images) | [doi.org/10.5281/zenodo.10804006](https://doi.org/10.5281/zenodo.10804006) | signwriting | 7,997 images, 103 classes | CC BY badge vs "non-commercial research" description. | B | dump | 90 MB | treat as B |
| V-LIBRASIL (original conditions-of-use page, archived) | [web.archive.org/web/20260118094406/https:…](http://web.archive.org/web/20260118094406/https://libras.cin.ufpe.br/pages/conditions-of-use,3) | isolated-video | – | Original terms: research/education, no redistribution, no commercial use (B/C). Kaggle/HF mirrors are D. | B | – | – | – |
| V-LIBRASIL (CIn-UFPE) – Rodrigues & Zanchettin (DOI 10.21227/v589-hn68) | [ieee-dataport.org/documents/v-librasil-ne…](https://ieee-dataport.org/documents/v-librasil-new-dataset-signs-brazilian-sign-language-libras) | isolated-video | 4,089 videos of 1,364 terms (from ASLLVD list), 3… | Original terms: research/education, no redistribution, no commercial use (B/C). Kaggle/HF mirrors are D. | B | register | 10.55 GB | request written permission |
| LIBRAS-EQT-UECE – Moraes, Moreira, Uchoa, Nascimento | [zenodo.org/records/21398895](https://zenodo.org/records/21398895) | ml-isolated | ? (isolated + continuous) | "cc-by-nc-4.0" | B | dump | 45.4 GB | research reference only |
| Sinais que protegem: guia bilíngue português-Libras | [osf.io/48kna/](https://osf.io/48kna/) | print | 8.4 MB PDF with QR codes linking to Libras videos… | "CC-BY Attribution-NonCommercial 4.0 International" | B | dump | 8.4 MB | ? (none stated) |
| Corpus de Libras (Inventário Nacional) | [corpuslibras.ufsc.br/registrar](https://corpuslibras.ufsc.br/registrar) | continuous-corpus | – | Research/teaching cession term (B/C). | B | register | – | – |
| Corpus de Libras (UFSC) | [corpuslibras.ufsc.br/?lang=en](https://corpuslibras.ufsc.br/?lang=en) | continuous-corpus | – | Research/teaching cession term (B/C). | B | register | – | register and read terms |
| Dicionário INES (Acessibilidade Brasil; Lira & Felipe) | [dicionario.ines.gov.br/](https://dicionario.ines.gov.br/) | lexical-db | not stated | none on page; "Para Obter uma cópia do dicionário LIBRAS em cd, entre em contato com o INES." | C | html-only | – | ask INES for written licence; do not crawl |
| "Análise da estrutura SematosÊmica de 13.500 sinais do Dicionário da Língua de… | [doi.org/10.11606/t.47.2019.tde-31012019-1…](https://doi.org/10.11606/t.47.2019.tde-31012019-101702) | phonology | phonological coding of 13,500 signs | ? (coding of a copyrighted dictionary) | C | – | – | ? (data location not found) |
| LIBRAS-UFOP (L3 upstream) | – | ml-isolated | – | no licence found | C | – | – | none (exhausted) |
| Apoema-Libras560 (Zenodo 20421823) | [zenodo.org/api/records/20421823](https://zenodo.org/api/records/20421823) | ml-isolated | 560 signs (84-sign subset: 3,444 samples) | restricted, license: None | C | none | – | request terms |
| INES | – | dictionary-site | – | none on site | C | – | – | – |
| Libras-UFPel Corpus | [aclanthology.org/2026.propor-1.112.pdf](https://aclanthology.org/2026.propor-1.112.pdf) | continuous-corpus | initial subset of 1,200 lemmatized sentences (pla… | Unreleased; tiered access planned. | C | none | – | ? (not yet released) |
| Fabrica-REA/repolibras (UFPR) | [github.com/Fabrica-REA/repolibras](https://github.com/Fabrica-REA/repolibras) | other | – | none stated (no licence) | C | – | – | Ask first (Tier C; no action stated in notes) |
| VLibras (spbgovbr-vlibras GitHub org) | [github.com/spbgovbr-vlibras](https://github.com/spbgovbr-vlibras) | other | dictionary served from gov servers | code repos LGPL-3.0; sign bundles not published | C | email/permission | – | ask LAVID/UFPB / Ministério for bundle licence |

#### Chilean SL — ISO csg — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn135 dict 175 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn135.spml) | signwriting | 175 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 3 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| UMCE Chile bilingual dictionary (Diccionario LSCh) | [bicentenariosantamaria.cl/wp-content/uplo…](https://bicentenariosantamaria.cl/wp-content/uploads/2023/04/Diccionario_LSCh_A-H.pdf) | print | – | no license (mirror) | C | print-only | – | ask UMCE |

#### Colombian SL — ISO csn — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn51 dict 1,286 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn51.spml) | signwriting | 1,286 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.5 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Kaggle juanrrai/colombian-sign-language-slc-signs-dataset | [kaggle.com/api/v1/datasets/view/juanrrai/…](https://www.kaggle.com/api/v1/datasets/view/juanrrai/colombian-sign-language-slc-signs-dataset) | isolated-video | "41 raw RGB videos featuring 11 signs from Colomb… | Kaggle CC BY-SA 4.0; 11 signs, 41 videos. | A | dump | 534,493,915 B | – |
| LSC50 (figshare 27383016) | [api.figshare.com/v2/articles/27383016](https://api.figshare.com/v2/articles/27383016) | ml-isolated | 50 signs, 4,000 RGB/RGB-D videos | figshare CC BY 4.0 (6.2 GB videos); article itself NC-ND. | A | dump | VIDEOS.zip 6,247,307,… | – |
| Speak in Colombian SL: Dynamic LSC70 – Muñoz Galindez, Villota Coral, Vargas-Ca… | [data.mendeley.com/datasets/9ssyn8tff5](https://data.mendeley.com/datasets/9ssyn8tff5) | ml-isolated | 47 signs incl. alphabet, numbers, common words; 7… | Mendeley "CC BY 4.0" | A | dump | 990 MB | – |
| LSC50: Colombian Sign Language Video and Inertial Measurement Dataset | [figshare.com/articles/dataset/LSC50_Colom…](https://figshare.com/articles/dataset/LSC50_Colombian_Sign_Language_Video_and_Inertial_Measurement_Dataset/27383016) | mocap | ~50 signs (per name) | figshare CC BY 4.0 (6.2 GB videos); article itself NC-ND. | A | dump | 10.6 GB | verify sign list, then ingest |
| LeSiCo (UNAL) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/lesico.html) | lexical-db | 1,980 signs, 16.5 h | "Open licensed, citation required" (Compendium only, UNVERIFIED) | C | register | – | contact Universidad Nacional de Colombia |
| LeSiCo (SLDC) | – | lexical-db | 1980 signs annotated, 16.5 hours recorded | Open licensed, citation required | C | register | – | identify host and licence |
| Tree of Life Foundation Glossary | [youtube.com/channel/UCCvTtbSfbWAc8gVfg-Zc…](https://www.youtube.com/channel/UCCvTtbSfbWAc8gVfg-ZcAYg/videos) | isolated-video | 228 signs | Open licence | C | html-only | – | verify licence; YouTube-hosted |
| LSC-54 (landmark-based dataset) | [pure.unisabana.edu.co/en/publications/lsc…](https://pure.unisabana.edu.co/en/publications/lsc-54-a-landmark-based-dataset-for-colombian-sign-language/) | pose | 54 classes | not found | C | – | – | check paper's data statement |
| SooSL Web "Proyecto Decision Filadelfia School for the Deaf [LSC]" | [api-web.soosl.net/projects/list](https://api-web.soosl.net/projects/list) | dictionary-site | 56 signs | SooSL ToU: CC BY-NC-ND 4.0 + no-copy clause; ask dictionary owner via websoosl@sil.org. | C | html-only | – | – |
| INSOR dictionary | [educativo.insor.gov.co/diccionario/](https://educativo.insor.gov.co/diccionario/) | dictionary-site | not stated | none on site | C | html-only | – | ask rights holder |
| Diccionario de nuevos términos de salud (CES) | [diccionariolsc.ces.edu.co/](https://diccionariolsc.ces.edu.co/) | dictionary-site | not stated | Compendium "Open licence"; no license on original page (UNVERIFIED) | C | html-only | – | contact CES |
| LeSiCo | – | other | – | none on site | C | – | – | ask rights holder |
| CES | – | other | – | none on site | C | – | – | ask rights holder |
| LSC-54 | [zenodo.org/api/records?q=%22LSC-54%22](https://zenodo.org/api/records?q=%22LSC-54%22) | other | – | ? (no data statement found) | C | none | – | – |

#### Costa Rican SL (LESCO) — ISO csr — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn101 dict 2; sgn102 lit 0 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn101.spml) | signwriting | 2 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Phonological proximity calculations and validation – L. Naranjo-Zeledón | [zenodo.org/records/4723992](https://zenodo.org/records/4723992) | phonology | xlsx 43.9 MB; LESCO alphabet subset only | "cc-by-4.0" | A | dump | 44 MB | use as a phonology coding template |
| LESCO emergency-based signs (Zenodo) | [zenodo.org/records/6345338](https://zenodo.org/records/6345338) | isolated-video | 39 signs × 3 videos | cc-by-4.0 | A | dump | 431 MB (.rar) | ingest; exceeds 20 MB cap |
| CENAREC LESCO dictionary | [lesco.cenarec.go.cr/index.php/diccionario…](https://lesco.cenarec.go.cr/index.php/diccionariolesco) | dictionary-site | 1,041 signs (Compendium) | none on site | B | html-only | – | email CENAREC to confirm licence + request export |
| LESCO Corpus | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/lescocorpus.html) | continuous-corpus | 34 h recorded; 44 films (~2 h) annotated | Compendium only | B | – | – | low priority |

#### Ecuadorian SL — ISO ecs — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn136 dict 4 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn136.spml) | signwriting | 4 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| LSEc corpus (Zenodo concept DOI 10.5281/zenodo.21001359) | [zenodo.org/api/records/21627229/versions](https://zenodo.org/api/records/21627229/versions) | other | 1,142 lexical MP4 / 617 distinct labels + 128 sen… | Zenodo CC BY 4.0 (v1.0.0 21001360; v1.0.1 21627229); consent covers AI use. | A | dump | ≈15.8 GB all files (l… | ingest lexical subset (first ingest for ecs); read lexical_level_manifest.csv |
| Diccionario Oficial de LSEC "Gabriel Román" (CONADIS/FENASEC/UTI) | [elcomercio.com/tendencias/salud/dia-inter…](https://www.elcomercio.com/tendencias/salud/dia-internacional-lenguas-senas-efemeride/) | lexical-db | ~5,000 words (press) | Not online (FENASEC placeholder page); ask CONADIS. | C | html-only | – | contact CONADIS |
| LSEC "Gabriel Román" dictionary (FENASEC) | [fenasec.ec/diccionario-lsec.html](https://www.fenasec.ec/diccionario-lsec.html) | dictionary-site | – | Not online (FENASEC placeholder page); ask CONADIS. | C | none | – | – |

#### Guatemalan SL (LENSEGUA) — ISO gsm — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn112 dict 0 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn112.spml) | signwriting | 0 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Wikisigns LSG | [wikisigns.org/list/es/lsg](https://www.wikisigns.org/list/es/lsg) | isolated-video | 21 signs (family, school, alphabet, "guatemala") | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | tiny | add to allowlist as the first LENSEGUA source; check existing gsm demo sign against the 21 glosses |
| ASORGUA dictionary | [asorgua.org/](https://asorgua.org/) | dictionary-site | – | – | C | none | – | – |
| ASORGUA LENSEGUA courses / manual | [biblioteca.galileo.edu/xmlui/bitstream/ha…](https://biblioteca.galileo.edu/xmlui/bitstream/handle/123456789/1795/TESIS%20FINAL%20Stephany%20Garc%c3%ada.pdf?sequence=1) | other | – | none found | C | email/permission | – | contact ASORGUA |

#### Honduran SL (LESHO) — ISO hds — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn16 dict 3,401; sgn121 lit 0 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn16.spml) | signwriting | 3,401 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 1.3 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| LESHO SignWriting dictionary PDF by Jonathan Duncan (announced on SW-L, July 20… | [listserv.linguistlist.org/pipermail/sw-l/…](https://listserv.linguistlist.org/pipermail/sw-l/2020-July/062605.html) | signwriting | – | none stated | C† | – | – | – |
| ASH LESHO print dictionary | [elheraldo.hn/tegucigalpa/diccionario-leng…](https://www.elheraldo.hn/tegucigalpa/diccionario-lengua-senas-honduras-sordos-BQEH1493552) | print | – | none found | C | print-only | – | contact Asociación de Sordos de Honduras |

#### Marajó SL (Brazil) — ISO none — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Corpus-PhD-Martinod-2019 (via CLARIN) | – | continuous-corpus | – | CC BY-NC-ND 4.0 (CLARIN) | B | – | – | local research only |

#### Mexican SL (LSM) — ISO mfs — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn65 dict 1,731; sgn120 lit 666 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn65.spml) | signwriting | 2,397 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.6 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Wikisigns LSM | [wikisigns.org/list/es/lsm](https://www.wikisigns.org/list/es/lsm) | isolated-video | 2,178 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | ? (per-entry video) | ask Wikisigns/ULPGC Cátedra Telefónica for a bulk dump rather than crawling |
| Mexican Sign Language Glosses (Dynamic Signs) – Navarrete López, Sainos-Vizuett… | [zenodo.org/records/18330565](https://zenodo.org/records/18330565) | ml-isolated | 121 dynamic signs (healthcare lexicon) | Zenodo "cc-by-4.0" | A | dump | 2.67 GB (.7z) | ingest as second LSM source (clean single-gloss clips) |
| Mexican sign language dataset – Espejel, Dominguez, Cervantes, Cervantes (DOI 1… | [data.mendeley.com/datasets/6rj76z6y3n](https://data.mendeley.com/datasets/6rj76z6y3n) | ml-isolated | 249 words, 11 signers | Mendeley "CC BY 4.0" | A | dump | 2.03 GB | ingest for multi-signer variation |
| ITESO-MX-100 – V. H. Martínez Sánchez (DOI 10.17632/g45jkzys4f.1) | [data.mendeley.com/datasets/g45jkzys4f](https://data.mendeley.com/datasets/g45jkzys4f) | ml-isolated | 100 signs, 5,000 videos, 3 participants | Mendeley "CC BY 4.0" | A | dump | 10.7 GB | secondary ingest (noisy backgrounds) |
| Dataset LSM Lenguaje de señas mexicanas – Chacon Quintero et al. | [zenodo.org/records/6554337](https://zenodo.org/records/6554337) | ml-isolated | ~400 videos: numbers, alphabet, simple words | "cc-by-4.0" | A | dump | 271 MB | low priority (mostly fingerspelling/numbers) |
| MSL-150 Dataset v1.0 – armandobecerril | [zenodo.org/records/17783312](https://zenodo.org/records/17783312) | pose | 150 isolated signs, 1 native signer (health vocab) | "cc-by-4.0" | A | dump | 13.3 GB CSV + 4.4 GB… | use for retargeting tests (pose already extracted) |
| MSL Alphabet (dynamic signs only), v1 + v2 record | [zenodo.org/records/14689869](https://zenodo.org/records/14689869) | fingerspelling-ha… | dynamic letters J, K, Ñ, Q, X, Z | "cc-by-4.0" | A | dump | 3.6 GB / 0.58 GB | – |
| 3D MSL Static Alphabet – Rios-Figueroa, Sosa-Jiménez | [data.mendeley.com/datasets/sjt79hnb2f](https://data.mendeley.com/datasets/sjt79hnb2f) | fingerspelling-ha… | 21 letters × 15 persons = 315 files | Mendeley "CC BY 4.0" | A | dump | 22 MB | use as handshape reference only |
| warcoder/mexican-sign-language-dataset (Kaggle) | – | other | – | Kaggle label "CC BY 4.0" | A† | dump | – | verify original licence at source |
| MSL Dactylology & Ten First Numbers (labeled #1–5, #6–11, raw #1–3) – Rodriguez… | [data.mendeley.com/datasets/5s4mt7xrd9](https://data.mendeley.com/datasets/5s4mt7xrd9) | fingerspelling-ha… | 29 letters + 1–10, 11 persons | "You are free to adapt, copy or redistribute the material, providing you attribute appropriately and do not use the material for commercial purposes." (CC BY-NC 3.0) | B | dump | 5.4 + 5.4 + 8.8 GB | skip |

#### Nicaraguan SL — ISO ncs — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn67 dict 1,725; sgn119 lit 501 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn67.spml) | signwriting | 2,226 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 1.4 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| NSLP manual PDF | [signwriting.org/](https://www.signwriting.org/) | print | – | covered by signwriting.org "publications ... related to Sutton Movement Writing" (CC BY-SA 3.0) | A | – | – | – |
| Nicaraguan Sign Language Manual, 3rd ed. 2018 (Kegl / NSLP), Spanish, in SignWr… | [signwriting.org/archive/docs13/sw1269_NI_…](https://signwriting.org/archive/docs13/sw1269_NI_Nicaraguan_Sign_Language_Manual_3rd_Edition_2018_Kegl_NSLP_Part1_SPANISH.pdf) | signwriting | – | license only via the signwriting.org site statement (UNVERIFIED for this PDF specifically) | C† | print-only | – | – |
| Diccionario del Idioma de Señas de Nicaragua (López Gómez et al., eds., ANSNIC,… | [alvestrand.no/pipermail/ietf-languages/20…](https://www.alvestrand.no/pipermail/ietf-languages/2002-August/000402.html) | print | – | none stated | C | print-only | – | contact ANSNIC |
| ANSNIC / Senghas / Kegl / NSLP archives | [api.datacite.org/dois?query=%22nicaraguan…](https://api.datacite.org/dois?query=%22nicaraguan%20sign%20language%22) | archive | – | – | C | – | – | – |

#### Panamanian SL — ISO lsp — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| A Collection of Basic Greetings in Panamanian Sign Language (PSL) – Teran-Queza… | [data.mendeley.com/datasets/3d4wggwh5g](https://data.mendeley.com/datasets/3d4wggwh5g) | ml-isolated | 5 greetings | Mendeley "CC BY 4.0" | A | dump | 793 MB | ingest (only Tier-A Panama source, tiny) |
| ELAR naso-bermudez-0396 (IGS0274, Natalia Bermúdez) | [elararchive.org/uncategorized/SO_66e580d4…](https://www.elararchive.org/uncategorized/SO_66e580d4-12b6-4e8e-8ee6-08348b4be0f5/) | archive | homesign sessions (e.g. "Muda homesign conversati… | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | – |
| ELAR "Panamanian Sign Language (2)" items | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 2 items | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | identify the ELAR collection |
| Garay 1990 Panama dictionary | [glottolog.org/resource/reference/id/319453](https://glottolog.org/resource/reference/id/319453) | print | – | none stated | C | print-only | – | contact ANSPA |

#### Paraguayan SL — ISO pys — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn129 dict 3,061 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn129.spml) | signwriting | 3,061 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.7 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Achegety-LSPy, Alfabeto de la Lengua de Señas Paraguaya | [zenodo.org/records/18057123](https://zenodo.org/records/18057123) | fingerspelling-ha… | 21 manual-alphabet classes, several participants | "cc-by-4.0" | A | dump | 3.0 GB | Low priority for lexicon (fingerspelling only) |
| DamPy / Signatario Digital (spl.gov.py) | [spl.gov.py/dampy/index.html](https://spl.gov.py/dampy/index.html) | dictionary-site | – | none (JS-only, no licence text) | C | html-only | – | – |
| DamPy multilingual audiovisual dictionary (Secretaría de Políticas Lingüísticas… | [ultimahora.com/el-primer-diccionario-audi…](https://www.ultimahora.com/el-primer-diccionario-audiovisual-multilingue-ya-esta-disponible) | dictionary-site | – | License not found | C | – | – | SPL DamPy licence inquiry |
| "Signatario Digital" (announced) | [hoy.com.py/nacionales/lengua-de-senas-ten…](https://www.hoy.com.py/nacionales/lengua-de-senas-tendra-diccionario-digital) | dictionary-site | >2,500 signs | License not found | C | – | – | – |

#### Peruvian SL — ISO prl — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn71 dict 148 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn71.spml) | signwriting | 148 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.1 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Sistema antroponímico LSP – Cuti Zanabria (UNMSM thesis) | [datos.pucp.edu.pe/api/datasets/:persisten…](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/47OFDW) | isolated-video | 100 MP4 | "CC0 1.0" | A | dump | 1.39 GB | – |
| SeñaTalk (Zenodo 17479338 "SenaTalk-UPC/dataset") | [zenodo.org/api/records/17479338](https://zenodo.org/api/records/17479338) | pose | keypoint .npy sequences, 14 classes (abrazar, adi… | Zenodo CC BY 4.0; 14-class keypoints. | A | dump | dataset-v1.2.zip 305,… | inspect contents before use |
| LSP vowels (A, E, I, O, U) | [doi.org/10.5281/zenodo.21091835](https://doi.org/10.5281/zenodo.21091835) | fingerspelling-ha… | 5 vowel letters (A, E, I, O, U) | "Creative Commons Attribution 4.0 International" (per DataCite) | A | – | – | Low priority for lexicon (fingerspelling only) |
| DataBase – Señas Sordo Peruana (the "Alfabeto Dactilológico" of LSP) | [doi.org/10.5281/zenodo.21090915](https://doi.org/10.5281/zenodo.21090915) | fingerspelling-ha… | – | "Creative Commons Attribution 4.0 International" (per DataCite) | A | – | – | ? (files unverified; Zenodo API errored) |
| PSL Vowel Dataset | [zenodo.org/records/21093176](https://zenodo.org/records/21093176) | fingerspelling-ha… | 20.5 MB | "cc-by-4.0" | A | dump | 21 MB | – |
| PUCP-DGI156 – Rodríguez Mondoñedo (hdl:20.500.12534/OJYYYS) | [datos.pucp.edu.pe/api/datasets/:persisten…](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/OJYYYS) | continuous-corpus | 4 files (Videos.tar 1.08 GB, Keypoints.tar 0.72 G… | "CC0 1.0" | A | dump | 1.8 GB | ingest (first ingest for prl: per-sign segments + SRT glosses) |
| Aprendo En Casa 2020 (AEC) | [datos.pucp.edu.pe/api/datasets/:persisten…](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/HDOAGH) | continuous-corpus | 5 files | "CC0 1.0" | A | dump | 392 MB | – |
| LSP Sesiones / Diálogo Sesión 3 – Rodríguez Mondoñedo, Maruenda Castillo, Arnaiz | [datos.pucp.edu.pe/api/datasets/:persisten…](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/PHTSWP) | continuous-corpus | 6 files / 260 files | "CC0 1.0" | A | dump | 287 MB / 52.8 GB | consider citation-form mining from Sesión 1 single-word answers |
| PUCP 305 (glosas) – Rodríguez-Mondoñedo, Pérez-Silva, Velasquez, Oporto, Cerna | [datos.pucp.edu.pe/api/datasets/:persisten…](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/JU4OLG) | isolated-video | 1 zip | "CC BY-NC 4.0" | B | dump | 2.88 GB | ask authors for a BY grant |
| Videos de prueba (Diccionario LSP) – Oporto | [datos.pucp.edu.pe/api/datasets/:persisten…](https://datos.pucp.edu.pe/api/datasets/:persistentId/?persistentId=hdl:20.500.12534/FAHXZY) | isolated-video | 38 MP4 | "CC BY-NC 4.0" | B | dump | 82 MB | – |
| SIGNO-PERU-ISO – Escobedo Cárdenas, Ramírez Cerna | [zenodo.org/records/18990737](https://zenodo.org/records/18990737) | ml-isolated | 18,179 sequences, 17 native signers, 6 semantic c… | "cc-by-nc-4.0", access restricted; "The dataset is only used for research." | B | email/permission | – | request access for phonology (minimal pairs) research only |
| DLSP (diccionariolsp.pucp.edu.pe) | [diccionariolsp.pucp.edu.pe/](https://diccionariolsp.pucp.edu.pe/) | dictionary-site | – | none (JS-only) | C | html-only | – | – |
| SIGNO-PERU-FER (Zenodo 22715615) | [zenodo.org/api/records/22715615](https://zenodo.org/api/records/22715615) | other | – | restricted, license: None | C | none | – | request access (non-manual reference only) |
| mrbandido/LSP (Universidad de Lima "SignoPeru" project) | [github.com/mrbandido/LSP](https://github.com/mrbandido/LSP) | other | one dataset zip; LSP word recognition from SenseG… | none stated (no licence file) | C | dump | – | Ask first (Tier C; no action stated in notes) |

#### Salvadoran SL (LESSA) — ISO esn — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn137 dict 1 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn137.spml) | signwriting | 1 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| SooSL Web LESSA dictionary | [api-web.soosl.net/projects/list](https://api-web.soosl.net/projects/list) | dictionary-site | 1,065 signs | SooSL ToU: CC BY-NC-ND 4.0 + no-copy clause; ask dictionary owner via websoosl@sil.org. | C | html-only | – | – |
| Gramática Básica de la Lengua de Señas Salvadoreña (Griselda Zeledón, CIL Globa… | [elsalvador.com/noticias/nacional/presenta…](https://www.elsalvador.com/noticias/nacional/presentaciones-de-libro-lanzamiento/1254241/2025/) | print | – | none stated | C† | print-only | – | – |

#### San Juan Quiahije Chatino SL — ISO none — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR – Chatino collection (Woodbury, Campbell, E. Cruz, H. Cruz, McIntosh, Vill… | [elararchive.org/index.php?name=SO_2317368…](https://www.elararchive.org/index.php?name=SO_23173683-3ec2-4b76-8b4b-ec08c61a7e7d) | archive | 2 items tagged with the SL (136 hits in ELAR face… | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | archive note only |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 136+2 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |

#### Urubu-Ka'apor SL — ISO uks — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR kaaporsignlanguage-aniz-0634 (SG0584; depositors Gustavo Godoy, Vitória An… | [elararchive.org/uncategorized/SO_393aae95…](https://www.elararchive.org/uncategorized/SO_393aae95-eb4c-473d-92a4-0f5775c8b4d6/) | archive | 25 items, all O_OpenAccess, incl. sign elicitatio… | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | dump | – | – |
| ELAR – Ka'apor (spoken-language) collection (Gustavo Godoy / André Sanches de A… | [elararchive.org/index.php?name=SO_d5523b1…](https://www.elararchive.org/index.php?name=SO_d5523b1e-256f-4aad-a323-bb0958274309) | archive | 3 Ka'apor SL items | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | – |
| ELDP project "Documentation and description of Urubú-Ka'apor Sign Language" (PI… | [cultureincrisis.org/projects/documentatio…](https://cultureincrisis.org/projects/documentation-and-description-of-urubú-kaapor-sign-language) | archive | ELAR facet: 24 Ka'apor SL items | ELAR non-commercial terms | B | register | – | identify the main ELAR collection (Aniz) |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 24 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |
| Kakumasu 1968 description; SIL Brazil archive | [silbrazil.org/resources/archives/76974](https://www.silbrazil.org/resources/archives/76974) | archive | – | none stated | C† | – | – | – |

#### Uruguayan SL — ISO ugy — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn143 dict 388; sgn144 lit 5 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn143.spml) | signwriting | 393 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.1 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Wikisigns Lengua de Señas Uruguaya | [wikisigns.org/list/uruguay](https://www.wikisigns.org/list/uruguay) | isolated-video | 85 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | <5 MB text (all Wikis… | take gloss lists/metadata only; no video |
| Wikisigns (LSU list) | [wikisigns.org/statistics](https://www.wikisigns.org/statistics) | dictionary-site | 85 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | – | locate LSU list URL (Q4: URL TBD) |
| TUILSU "Léxico trelsu" | [tuilsu.edu.uy/](https://www.tuilsu.edu.uy/) | lexical-db | – | – | C | – | – | – |
| TUILSU/UdelaR "Léxico trelsu" monolingual LSU dictionary (+ planned Spanish→LSU… | [ojs.fhce.edu.uy/index.php/insoru/article/…](https://ojs.fhce.edu.uy/index.php/insoru/article/download/425/365) | lexical-db | – | none (tuilsu.edu.uy home page returned only "Área de Estudios Sordos", no license) | C | – | – | contact TUILSU/UdelaR |

#### Venezuelan SL — ISO vsl — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn76 dict 136 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn76.spml) | signwriting | 136 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |

#### Yucatec Maya SL — ISO msd — Latin America

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Le Guen Yucatec Maya SL data (ELAR "Chambers_thesis_0002" only) | [elararchive.org/?s=yucatec+maya+sign](https://www.elararchive.org/?s=yucatec+maya+sign) | archive | – | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | – | – | – |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 1 object | per collection (not opened) | C | register | – | documentation only |

#### Austrian SL (ÖGS) — ISO asq — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn29 dict 5 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn29.spml) | signwriting | 5 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| LedaSila | [ledasila.aau.at/](https://ledasila.aau.at/) | lexical-db | "17400 signs" (Compendium); includes third-party… | Unnamed "Creative Commons Bedingungen" (generic chooser link). | C | register | ? (UNVERIFIED) | ask rights holder |
| "SignLex" / ÖGS-Lexikon | [api.datacite.org/dois?query=%22SignLex%22…](https://api.datacite.org/dois?query=%22SignLex%22%20sign) | lexical-db | – | – | C† | – | – | – |
| Dictio (Masaryk University, multilingual) | [dictio.info/](https://www.dictio.info/) | lexical-db | whole site "Entries: 160 180 Translations: 61 682… | "© 2007-2026 Masaryk University / All rights reserved" (Compendium: "information not available") | C | register | – | low priority: possibly ask Masaryk for ÖGS research use |

#### British SL (BSL) — ISO bfi — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn59 dict 853; sgn125 lit 39 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn59.spml) | signwriting | 892 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.3 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| BSL + DGS iconicity / concreteness database (Ortega, Schiefner, Lazarus, Pernis… | [pmc.ncbi.nlm.nih.gov/articles/PMC11982127/](https://pmc.ncbi.nlm.nih.gov/articles/PMC11982127/) | lexical-db | – | OSF CC BY 4.0 incl. videos (~2.2 GB). | A | – | – | open the article's Data Availability statement (likely OSF) by hand |
| UEA CWASA / JASigning example pages (SiGML) | [vh.cmp.uea.ac.uk/index.php/JASigning_Cond…](https://vh.cmp.uea.ac.uk/index.php/JASigning_Conditions) | hamnosys-sigml | – | Example pages CC BY-SA; bundled notation files BY-ND-like (C). | A | – | – | use example-page SiGML; do not adapt bundled notation files |
| Ortega, Schiefner, Lazarus, Perniss 2025 iconicity/concreteness database (BSL p… | [osf.io/jkw8p/](https://osf.io/jkw8p/) | isolated-video | 234 concepts matched across BSL and DGS ("a total… | OSF CC BY 4.0 incl. videos (~2.2 GB). | A | dump | "BSL signs.zip" 754,7… | first CC BY citation-video ingest for BSL; use hs/loc/mov as QA labels |
| Commons "Videos of British Sign Language" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 39 files | per file | A | api | – | check per-file licence then ingest |
| BSL Corpus open-access data (CAVA) | [bslcorpusproject.org/cava/open-access-dat…](https://bslcorpusproject.org/cava/open-access-data/) | continuous-corpus | narrative and lexical elicitation data | CC BY-SA 4.0 governs; "no duplication" clause is qualified by "outside of the conditions set out below". Click-through: cite, share annotations with the Registrar. | A | register | ? (likely tens of GB,… | upgrade allowlist to A; email UCL Registrar to confirm BY-SA for avatar derivatives |
| BSL Corpus | – | continuous-corpus | – | "CC BY-SA 4.0 (for narrative and lexical elicitation data) User license (for conversation and interview data)"; sign.mt: "Partially Restricted" | A | – | – | verify lexical-elicitation subset licence and download route |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 1 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| Dicta-Sign lexicon (CLARIN:EL lcr/805) | [inventory.clarin.gr/catalogue_backend/api…](https://inventory.clarin.gr/catalogue_backend/api/registry/metadatarecord/805/) | lexical-db | 1,000 entries (multilingual) | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | html-only | – | skip |
| BSL norms: AoA / familiarity / iconicity (Vinson et al. 2008) | [research.birmingham.ac.uk/en/publications…](https://research.birmingham.ac.uk/en/publications/the-british-sign-language-bsl-norms-for-age-of-acquisition-famili) | lexical-db | 300 BSL signs | UNVERIFIED | B | – | – | email DCAL / check BRM supplementary materials; use as 300-sign priority gloss list |
| Dicta-Sign Lexicon / Corpus (BSL) | [sign-lang.uni-hamburg.de/dicta-sign/porta…](https://www.sign-lang.uni-hamburg.de/dicta-sign/portal/) | hamnosys-sigml | "1000 signs per language" (citation form + HamNoS… | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | email/permission | – | email IDGS Hamburg: can HamNoSys for the ~1000-concept lexicon be licensed for avatar synthesis? |
| UEA JASigning / CWASA SiGML demos (Dicta-Sign lexicon, BSL Examples) | [vh.cmp.uea.ac.uk/index.php/JASigning_Demos](https://vh.cmp.uea.ac.uk/index.php/JASigning_Demos) | hamnosys-sigml | "Approximately 1000 signs are available in four n… | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | – | – | ask UEA Virtual Humans group whether the Dicta-Sign SiGML files are licensable |
| EASIER Multilingual Sign Language Wordnet v4.0 | [fdr.uni-hamburg.de/record/14190](https://www.fdr.uni-hamburg.de/record/14190) | wordnet | 496 BSL SignBank video lemmas (whole wordnet: 24,… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | 6.9 MB (28 files) | download; use only as internal cross-language concept index (NC); never redistribute videos |
| Multilingual Sign Languages Wordnet (EASIER) | [sign-lang.uni-hamburg.de/easier/sign-word…](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/) | wordnet | 24,367 links, 14,028 signs, 16,534 synsets overal… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | small (CSV) | out of scope for this file |
| ECHO corpus (BSL part) | [hdl.handle.net/1839/00-0000-0000-0001-489…](https://hdl.handle.net/1839/00-0000-0000-0001-4892-C) | continuous-corpus | "1.5 hours recorded" (Compendium) | "CC BY-NC-ND 3.0" (Compendium only; TLA CMDI shows no licence) | B | – | – | skip (not citation form) |
| BSL Corpus Restricted Access (conversation / interviews) | [bslcorpusproject.org/cava/restricted-acce…](https://bslcorpusproject.org/cava/restricted-access-data/) | continuous-corpus | 452 free-conversation + 367 language-awareness re… | "To use any part of the materials only for the purposes of not-for-profit research." (End User Licence; no teaching, no copies or distribution) | B | register | – | skip |
| BSL SignBank (registered phonology fields) | [bslsignbank.ucl.ac.uk/about/acknowledgeme…](https://bslsignbank.ucl.ac.uk/about/acknowledgements/) | signbank | – | – | C | register | – | register for an account |
| BSL SignBank (UCL DCAL) | [bslsignbank.ucl.ac.uk/](https://bslsignbank.ucl.ac.uk/) | signbank | "over 2500 signs" (last updated mid-2014) | "No copying or linking (except to the BSL SignBank website) without the prior written permission of UCL." | C | html-only | ? (est. a few GB, UNV… | email bslsignbank@ucl.ac.uk: researcher account, CSV export of ID gloss + phonology, written permission to de… |
| BSL SignBank | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/bslsignbank.html) | signbank | ~2,500 signs | "information not available" | C | register | – | regional researchers own this (cross-ref) |
| BSL norms (Vinson et al. 2008) | [ebi.ac.uk/europepmc/webservices/rest/sear…](https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.3758/BRM.40.4.1079&resultType=core&format=json) | lexical-db | – | ? ("These norms may be downloaded from www.psychonomic.org/archive") | C | none | – | ask rights holder |
| BSL Lexicon CN (TLA; via CLARIN) | – | lexical-db | – | "Public" (CLARIN) | C† | – | – | check TLA licence |
| UEA BSL Examples (JAS vhg.2022) | [vhg.cmp.uea.ac.uk/demo/BSLExamples/](http://vhg.cmp.uea.ac.uk/demo/BSLExamples/) | hamnosys-sigml | – | none stated | C | html-only | – | include in UEA permission email |
| BSL-1K | [robots.ox.ac.uk/~vgg/research/bsl1k/](https://www.robots.ox.ac.uk/~vgg/research/bsl1k/) | ml-isolated | 1,000-sign vocabulary, ~1,000 h | none on page ("Please see the BOBSL dataset release here.") | C | register | – | skip |
| BOBSL3DT (arXiv 2508.15902) | [arxiv.org/html/2508.15902v1](https://arxiv.org/html/2508.15902v1) | mocap | ~1.3M motion-text pairs | BBC R&D non-commercial academic research only; permission form. | C | – | – | skip |
| BOBSL (BBC R&D) | [bbc.co.uk/rd/projects/extol-dataset](https://www.bbc.co.uk/rd/projects/extol-dataset) | continuous-corpus | – | BBC R&D non-commercial academic research only; permission form. | C | email/permission | – | send permission form to bobsl.dataset@bbc.co.uk |
| BOBSL (BBC-Oxford British Sign Language) | [robots.ox.ac.uk/~vgg/data/bobsl/](https://www.robots.ox.ac.uk/~vgg/data/bobsl/) | continuous-corpus | 1,940 episodes, 1,447 h (summary ~1,400 h), ~1.2M… | BBC R&D non-commercial academic research only; permission form. | C | register | ? (multi-TB, UNVERIFI… | skip |
| BOBSL (sign.mt row) | – | continuous-corpus | – | BBC R&D non-commercial academic research only; permission form. | C | register | – | skip (academics only) |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 23 objects | per collection (not opened) | C | register | – | open per-collection licences |

#### Catalan SL (LSC) — ISO csc — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn56 dict 3,422; sgn94 lit 45 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn56.spml) | signwriting | 3,467 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 1.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Corpus lingüístic de construccions derivatives seqüencials o compostes en LSC (… | [doi.org/10.34810/data1936](https://doi.org/10.34810/data1936) | lexical-db | 100 compound/sequential signs; TSV 112 KB | CORA CC BY-SA 4.0 phonology TSV. | A | dump | <1 MB | Secondary to A3 |
| CORPUS LSC gloss list (IEC) | [docs.google.com/spreadsheets/d/1sFiSZ6cjm…](https://docs.google.com/spreadsheets/d/1sFiSZ6cjmEwNWXCOgrsh0cRmS15v8m7i/) | lexical-db | 5,064 gloss rows (3,024 marked "NOMÉS APAREIX ALS… | "Tot el material de descàrrega del corpus està subjecte a la llicència CC BY 4.0" | A | dump | 310 KB (CSV export) | ingest now as the LSC lemma inventory; parse handshape suffixes into SignDesc handshape hints |
| Corpus lingüístic de signes construïts i no construïts simultàniament… en LSC (… | [doi.org/10.34810/data1935](https://doi.org/10.34810/data1935) | phonology | 354 signs; TSV 157 KB + PDF + 2 txt | CORA CC BY-SA 4.0 phonology TSV. | A | dump | <1 MB | Download the TSV and crosswalk its codes to Marionet's handshape, location and movement enums; join to CORPUS… |
| Commons "Videos of Catalan Sign Language" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 95 files | per file | A | api | – | check per-file licence then ingest |
| CORPUS LSC (Corpus de referència de la LSC, IEC) EAF/MP4 | [corpuslsc.iec.cat/area-de-descarrega/](https://corpuslsc.iec.cat/area-de-descarrega/) | continuous-corpus | 560 h recorded; 150,870 tokens annotated; 56 part… | "Tot el material de descàrrega del corpus està subjecte a la llicència CC BY 4.0" | A | dump | ? (video total unknow… | later cut citation-like tokens from the CC BY EAF+MP4 |
| Catalan Sign Language Corpus | – | continuous-corpus | ? (public videos + ELAN + gloss list) | "CC BY 4.0 … Direct download available for videos in public access and their ELAN annotation files, as well as a gloss list" | A | dump | – | verify licence notice; download gloss list + public videos |
| Wikisign LSC | [lsc.wikisign.org](http://lsc.wikisign.org) | signwriting | 1,200 signs (Compendium) | CC BY-SA 2.0 ES per Compendium, but the site is dead ("not configured"); ask maintainers for files. | C | none | – | use SignPuddle sgn56 instead; do not scrape the Wayback copy |
| Wikisign LSC (older wikisign.org network) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/wikisignlsc.html) | dictionary-site | 1,200 signs | CC BY-SA 2.0 ES per Compendium, but the site is dead ("not configured"); ask maintainers for files. | C | – | – | – |
| CORPUS LSC extra (restricted) metadata (IEC) | – | other | – | ? (available on request) | C | email/permission | – | email informacio@iec.cat if the extra metadata is needed |

#### Danish SL (DTS) — ISO dsl — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn30 dict 53; sgn118 lit 0 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn30.spml) | signwriting | 53 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Ordbog over Dansk Tegnsprog (tegnsprog.dk) | [tegnsprog.dk/](https://tegnsprog.dk/) | phonology | 2,324 articles (8th ed.); 3,291 meanings; 7,241 c… | none; only "© Ordbog over Dansk Tegnsprog" (Compendium: "information not available") | C | html-only | 7,241 clips (size unk… | email Danske Døves Landsforbund (https://tegnsprog.dk/kontakt) for a licensed export (gloss, handshape, locat… |
| Danish Sign Language Corpus (DTS-korpus) | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dtscorpus.html) | continuous-corpus | "14.5 hours recorded, 20000 tokens and 1750 types… | "Individual license agreement for researchers"; "No public access" (Compendium only) | C | email/permission | – | skip |

#### EmblemsNL (Dutch emblems, not a sign language) — ISO none — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Global Signbank - EmblemsNL | [signbank.cls.ru.nl/datasets/EmblemsNL](https://signbank.cls.ru.nl/datasets/EmblemsNL) | other | 124 glosses (124 public) | "Description of the signs: Creative Commons BY-NC-SA 4.0. Videos and images: only to be used after consultation with Onno Crasborn." | B | html-only | – | skip (gestures, not a sign language) |
| Global Signbank dataset EmblemsNL | [signbank.cls.ru.nl/datasets/available](https://signbank.cls.ru.nl/datasets/available) | signbank | 124 (124 public) | ? (not stated in notes) | C† | html-only | – | assess (licence not stated in notes) |

#### Faroese SL — ISO none — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignWiki Føroyar | [fo.signwiki.org](https://fo.signwiki.org) | lexical-db | 3,738 articles, 4,767 files (Compendium 1,350 sig… | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | api | small | same as SignWiki Ísland: contact SHH; infobox export (NC) |
| SignWiki Faroe | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/index.html) | dictionary-site | 1,350 | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | – | – | – |

#### Finland-Swedish SL (FinSSL) — ISO fss — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| FinSL Signbank public ECV dataset 4 "FinSSL-VKK" | [signbank.csc.fi/dictionary/public-ecv/4](https://signbank.csc.fi/dictionary/public-ecv/4) | signbank | 733 entries (swe+eng) | Videos CC BY-NC-SA 4.0; per-lexicon licence fields blank. | B | dump | 227,469 bytes (ECV) | ingest ECV 4 plus its mp4s (NC) |
| Finnish Signbank (Suomen Signbank) | [signbank.csc.fi/](https://signbank.csc.fi/) | signbank | 3000 signs (fse+fss) | Videos CC BY-NC-SA 4.0; per-lexicon licence fields blank. | B | html-only | – | local research only (Tier B) |
| SignWiki Finland (FinSSL) | [finssl.signwiki.org](https://finssl.signwiki.org) | lexical-db | 4,221 articles, 6,153 files | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | api | – | not stated; see SignWiki Ísland (infobox export via MediaWiki API, NC) |
| Suvi FinSSL (Kuurojen Liitto) | [suvi.teckensprak.net/](http://suvi.teckensprak.net/) | dictionary-site | ? (FinSSL part launched 2015) | same Suvi grant: videos and stills CC BY-NC-SA 4.0; text/codes not stated | B | html-only | – | use as second FinSSL source after Signbank ECV 4 |
| SignWiki Finland-Swedish | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/index.html) | dictionary-site | 3,035 | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | – | – | – |
| Corpus of Finland-Swedish Sign Language (CFSTS), Kielipankki | [kielipankki.fi/download/cfinsl/cfsts/](https://www.kielipankki.fi/download/cfinsl/cfsts/) | continuous-corpus | – | elicit LICENSE.txt identical to CFINSL: "Public end-user license (CC-BY-NC-SA) and the additional conditions +PRIV +OTHER (CLARIN EULA 2.1)"; conversations restricted, i… | B | dump | – | skip for citation forms |

#### Finnish SL (FinSL) — ISO fse — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn57 dict 165 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn57.spml) | signwriting | 165 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| FinSL Signbank (signbank.csc.fi) | [signbank.csc.fi/dictionary/](https://signbank.csc.fi/dictionary/) | signbank | – | Videos CC BY-NC-SA 4.0; per-lexicon licence fields blank. | B | – | – | – |
| FinSL Signbank public ECV dataset 1 "VKK-korpus" (CFINSL lexicon, Univ. Jyväsky… | [signbank.csc.fi/dictionary/public-ecv/1](https://signbank.csc.fi/dictionary/public-ecv/1) | signbank | 2,354 entries (fin+eng) | Videos CC BY-NC-SA 4.0; per-lexicon licence fields blank. | B | dump | 678,701 bytes (ECV);… | ingest the ECV now; fetch citation mp4s per gloss to fit hand poses (NC); email JYU Sign Language Centre whet… |
| Finnish Signbank (Suomen Signbank) | [signbank.csc.fi/](https://signbank.csc.fi/) | signbank | 3000 signs (fse+fss) | Videos CC BY-NC-SA 4.0; per-lexicon licence fields blank. | B | html-only | – | local research only (Tier B) |
| SignWiki Suomi | [finsl.signwiki.org](https://finsl.signwiki.org) | lexical-db | 7,855 articles, 10,584 files | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | api | – | not stated; see SignWiki Ísland (infobox export via MediaWiki API, NC) |
| Suvi (suvi.viittomat.net) text/code | [suvi.viittomat.net/](https://suvi.viittomat.net/) | dictionary-site | whole Suvi: ~5,100 sign/headword articles, ~9,700… | ? (text/code licence not found) | B | html-only | ~9,700 videos (size u… | email Kuurojen Liitto for a structured export of the sign-structure codes (handshape, hands, location, moveme… |
| CFinSL (corpus) | – | continuous-corpus | – | NC (SLDC; exact text not quoted) | B | – | – | local research only |
| S-pot (sign.mt row) | – | isolated-video | 1211 | "Permission" (sign.mt) | C | email/permission | – | request permission |
| Suvi 1998 archive (arkisto-suvi) | [aineisto.viittomakielinenkirjasto.fi/arki…](https://aineisto.viittomakielinenkirjasto.fi/arkisto-suvi/) | dictionary-site | 1998 Basic Dictionary articles (as of 2018-05-25) | © 2018 Kuurojen Liitto & Kotus. | C | html-only | – | ask rights holder (Kuurojen Liitto / Kotus) |
| Kotus 1998 PDF (Suomalaisen viittomakielen perussanakirja 1998) | [kaino.kotus.fi/www/verkkojulkaisut/julk60…](https://kaino.kotus.fi/www/verkkojulkaisut/julk60/Suomalaisen_viittomakielen_perussanakirja_1998.pdf) | print | – | ? (HTTP 403) | C | none | – | check licence |
| Corpus of Finnish Sign Language (version 2015) - second PID (JYX) for CFINSL | [jyx.jyu.fi/handle/123456789/86332](https://jyx.jyu.fi/handle/123456789/86332) | continuous-corpus | 21 signers, more than 14 h | OpenAlex tags it "public-domain", but the landing page does not say so; unverified | C† | – | – | Do not rely on the public-domain tag |

#### Flemish SL (VGT) — ISO vgt — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn44 dict 8,969; sgn98 lit 52 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn44.spml) | signwriting | 9,021 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 1.9 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| BeCoS (via CLARIN) | – | other | – | CC BY (CLARIN) | A | – | – | verify licence and contents at source |
| Corpus VGT | [corpusvgt.be/](https://www.corpusvgt.be/) | continuous-corpus | 140 h, 120 signers (SLDC) | Videos CC BY-NC-SA 3.0. | B | register | 5 TB (SLDC) | Tier B only (frequency, variant evidence) |
| Content4All news corpus (VRT-NEWS) | [cvssp.org/data/c4a-news-corpus/](https://www.cvssp.org/data/c4a-news-corpus/) | continuous-corpus | – | "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License" | B | email/permission | – | low priority; not a lexicon (skip) |
| Corpus VGT v1.0 selection (IVDNT) | [taalmaterialen.ivdnt.org/download/corpusv…](https://taalmaterialen.ivdnt.org/download/corpusvgt1-0/) | continuous-corpus | ~11 h (mp4 + eaf) | Videos CC BY-NC-SA 3.0. | B | register | 146.62 MB (CorpusVlaa… | skip for the lexicon |
| GoSt-ParC-Sign (SignON, IVDNT) | [taalmaterialen.ivdnt.org/download/gost-pa…](https://taalmaterialen.ivdnt.org/download/gost-parc-sign/) | continuous-corpus | 10 h, 43 signers + Dutch parallel text | "Creative Commons Attribution-NonCommercial 4.0 Unported License" (v1.0) | B | – | – | skip (continuous) |
| Global Signbank - VGT dataset | [signbank.cls.ru.nl/datasets/VGT/](https://signbank.cls.ru.nl/datasets/VGT/) | signbank | "0 public glosses, 16928 total" | "Not available to users outside Radboud University or Vlaams Gebarentaal Centrum." / "Data owned by VGTC" | C | email/permission | – | same request to VGTC (ideal VGT phonology dump) |
| Woordenboek Vlaamse Gebarentaal (VGTC) | [woordenboek.vlaamsegebarentaal.be/](https://woordenboek.vlaamsegebarentaal.be/) | dictionary-site | "10000 entries" (SLDC; about half of the Signbank… | none found (SLDC "Licence information not available") | C | html-only | – | email VGTC (info@vgtc.be) for a licence and an export of the dictionary or Global Signbank VGT |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 2 objects | per collection (not opened) | C | register | – | open per-collection licences |

#### French Belgian SL (LSFB) — ISO sfb — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn43 dict 3,465; sgn95 lit 1 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn43.spml) | signwriting | 3,466 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.7 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Commons "Videos of LSFB" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 6 files | per file | A | api | – | check per-file licence then ingest |
| BeCoS (via CLARIN) | – | other | – | CC BY (CLARIN) | A | – | – | verify licence and contents at source |
| LSFB-ISOL (and LSFB-CONT) | [pypi.org/project/lsfb-dataset/](https://pypi.org/project/lsfb-dataset/) | ml-isolated | ISOL poses 10 GB + videos 25 GB; CONT poses 31 GB… | "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license" | B | dump | 10 GB (ISOL poses); H… | Tier B pose-based fitting reference; selective landmark download by signer/split |
| HF ppoitier/lsfb-isol | [huggingface.co/api/datasets?search=sign-l…](https://huggingface.co/api/datasets?search=sign-language) | ml-isolated | – | CC BY-NC-SA 4.0 | B | dump | – | – |
| dico.lsfb.be (LSFB dictionary) | [dico.lsfb.be/](https://dico.lsfb.be/) | dictionary-site | 4,000 signs (SLDC) | Licence page CC BY-NC-ND 4.0; footer BY-SA sentence links to the same NC-ND page. | B | html-only | – | email LSFB asbl (BY-NC-ND vs BY-SA) |
| Lex-LSFB (Corpus LSFB lexicon) | [corpus-lsfb.be/lexique.php](https://www.corpus-lsfb.be/lexique.php) | dictionary-site | information not available | CC BY-NC-SA 4.0 | B | html-only | – | local research only (Tier B) |
| LSFB en ligne (dicto.lsfb.be) | [dicto.lsfb.be/](http://dicto.lsfb.be/) | dictionary-site | 4000 signs | Licence page CC BY-NC-ND 4.0; footer BY-SA sentence links to the same NC-ND page. | B | html-only | – | ask authors for licence |
| Corpus LSFB + Lex-LSFB (UNamur LSFB-Lab) | [corpus-lsfb.be/](https://www.corpus-lsfb.be/) | continuous-corpus | 150 h, 100 signers, 104,000 tokens (SLDC) | "Licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International" | B | register | – | use as Tier B gloss list and frequency source |
| LSFB corpus | – | continuous-corpus | – | NC (SLDC; exact text not quoted) | B | – | – | local research only |
| Global Signbank - LSFB dataset | [signbank.cls.ru.nl/datasets/LSFB/](https://signbank.cls.ru.nl/datasets/LSFB/) | signbank | "0 public glosses, 3512 total" | none (conditions and copyright fields empty) | C | email/permission | – | ask Radboud/Namur whether this dataset (Global Signbank phonology fields) can be released |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 5 objects (LSFB) | per collection (not opened) | C | register | – | open per-collection licences |

#### French SL (LSF) — ISO fsl — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn58 dict 1,481; sgn124 lit 16 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn58.spml) | signwriting | 1,497 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.3 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| UEA CWASA / JASigning example pages (SiGML) | [vh.cmp.uea.ac.uk/index.php/JASigning_Cond…](https://vh.cmp.uea.ac.uk/index.php/JASigning_Conditions) | hamnosys-sigml | – | Example pages CC BY-SA; bundled notation files BY-ND-like (C). | A | – | – | use example-page SiGML; do not adapt bundled notation files |
| Elix subset on Wikimedia Commons (Category: Files supported by Wikimedia France… | [commons.wikimedia.org/wiki/Category:Files…](https://commons.wikimedia.org/wiki/Category:Files_supported_by_Wikimedia_France_-_Elix) | isolated-video | 100 files (webm), 57.8 MB | 100 Elix clips CC BY-SA 4.0 on Commons (VRT ticket #2020010710006923). | A | api | 58 MB | ingest as a third LSF citation-video set alongside Lingua Libre and SignPuddle 58 |
| Lingua Libre LSF videos (Commons Category:Lingua Libre pronunciation-fsl) | [commons.wikimedia.org/wiki/Category:Lingu…](https://commons.wikimedia.org/wiki/Category:Lingua_Libre_pronunciation-fsl) | isolated-video | 190 webm files (~190 signs, 2+ signers) | 50-file sample: "CC0" x49, "CC BY-SA 4.0" x1 (per-file) | A | api | ~175 MB (estimate; 50… | pull per-file licence via Commons API; keep CC0/CC BY-SA only; use as citation-form reference videos |
| Wikimedia Commons Category:French Sign Language (incl. 30 "LSF Vocab *.ogv") | [commons.wikimedia.org/wiki/Category:Frenc…](https://commons.wikimedia.org/wiki/Category:French_Sign_Language) | isolated-video | 98 files (30 LSF Vocab ogv videos) | 50-file sample: CC BY-SA 2.0 x30, CC BY-SA 3.0 x13, CC BY-SA 4.0 x5, PD x2 | A | – | ? (e.g. File:LSF Voca… | none stated (Tier A, tiny) |
| Commons "Videos of French Sign Language" (+ Lingua Libre fsl 190) | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_French_Sign_Language) | isolated-video | 634 files (incl. 190 Lingua Libre) | per file (CC0 / CC BY-SA) | A | api | – | ingest per-file-licence-checked files via API |
| Ortolang illustrations-these ("Illustrations vidéo - Thèse de Léa Chevrefils") | [repository.ortolang.fr/api/search/items?t…](https://repository.ortolang.fr/api/search/items?type=Corpus&corporaLanguages.id%5B%5D=fsl&size=200) | other | 8 items: chapter-point_to_din_part, locaentreform… | Ortolang CC BY 4.0; contents not inspected. | A | – | – | inspect contents |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 15 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| Dicta-Sign lexicon (CLARIN:EL lcr/805) | [inventory.clarin.gr/catalogue_backend/api…](https://inventory.clarin.gr/catalogue_backend/api/registry/metadatarecord/805/) | lexical-db | 1,000 entries (multilingual) | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | html-only | – | skip; also taints 3DZSignDB-derived entries |
| SGB-FSS Lexicon (SignSuisse) | [sgb-fss.ch/signsuisse/](https://www.sgb-fss.ch/signsuisse/) | lexical-db | information not available | Restricted access requires individual license agreement | B | email/permission | – | request individual licence agreement |
| Dicta-Sign Lexicon / Corpus (LSF) | [sign-lang.uni-hamburg.de/dicta-sign/porta…](https://www.sign-lang.uni-hamburg.de/dicta-sign/portal/) | hamnosys-sigml | "1000 signs per language" (citation form + HamNoS… | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | email/permission | – | email IDGS Hamburg: can HamNoSys for the ~1000-concept lexicon be licensed for avatar synthesis? |
| UEA JASigning / CWASA SiGML demos (Dicta-Sign lexicon) | [vh.cmp.uea.ac.uk/index.php/JASigning_Demos](https://vh.cmp.uea.ac.uk/index.php/JASigning_Demos) | hamnosys-sigml | "Approximately 1000 signs are available in four n… | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | – | – | ask UEA Virtual Humans group whether the Dicta-Sign SiGML files are licensable |
| FlexSign: Base de données lexicale en LSF (Philomène Périn), NAKALA | [doi.org/10.34847/nkl.afb675g5](https://doi.org/10.34847/nkl.afb675g5) | isolated-video | "546 signes … produits par une locutrice sourde n… | CC BY-NC-ND 4.0; TSVs usable for reference, video needs permission. | B | dump | 5.4 GB | Fetch the TSVs only (gloss, psycholinguistic variables); ask the author for derivative or avatar-use permissi… |
| MOCAP1 (Ortolang 11403/mocap1/v2) | [repository.ortolang.fr/api/content/mocap1…](https://repository.ortolang.fr/api/content/mocap1/v2/) | mocap | not counted | CC BY-NC-SA 4.0 (Ortolang citation text) | B | dump | not checked | research tuning only |
| Ortolang MOCAP1 | [ortolang.fr/market/item/mocap1](https://www.ortolang.fr/market/item/mocap1) | mocap | v1: 87 BVH + 187 MP4 (8 signers); v2 adds 144 nor… | "CC BY-NC-SA 4.0" + ESR-only download + "only distribute it through the Ortolang platform" | B | register | 2.7 GB (2,662,627,537… | internal retarget R&D only (BVH to VRM) if Marionet qualifies as ESR research; not shippable |
| Ortolang CLM-MOCAP | [ortolang.fr/market/item/clm-mocap](https://www.ortolang.fr/market/item/clm-mocap) | mocap | 10 signers, 2,977 signs produced, 46 min 20 s | "CC BY-NC-SA 4.0" + research/teaching-only clause | B | dump | 9.9 GB (9,905,738,331… | secondary mocap R&D source; not shippable |
| MOCAP1 (LSF mocap, Ortolang; via CLARIN) | – | mocap | – | CC BY-NC-ND 4.0 (CLARIN) | B | – | – | local research only |
| MOCAP1 (Ortolang; HF mirror Langue-des-signes-francaise/MOCAP1) | [hdl.handle.net/11403/mocap1/v2](https://hdl.handle.net/11403/mocap1/v2) | mocap | v1: 87 BVH (signers l1-l4, 25 picture description… | "Licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Memes Conditions 4.0 International"; for members of public higher-education/rese… | B | – | – | NC research route only |
| LSF IRISA corpora (LSF-ANIMAL, LSF-SHELVES, STK LSF) | [aclanthology.org/2020.lrec-1.736](https://aclanthology.org/2020.lrec-1.736) | mocap | isolated signs and full sentences (LSF-ANIMAL) | STK LSF listed under CC BY-NC 4.0 (paper licence); data access terms not confirmed | B† | – | – | check LSF-ANIMAL/STK access terms (not searched) |
| Ortolang MEDIAPI-SKEL | [ortolang.fr/market/item/mediapi-skel](https://www.ortolang.fr/market/item/mediapi-skel) | pose | 368 videos, 27 h | "CC BY-NC 4.0" + ESR-only, Ortolang-only | B | register | 25 GB | skip |
| EASIER Multilingual Sign Language Wordnet v4.0 | [fdr.uni-hamburg.de/record/14190](https://www.fdr.uni-hamburg.de/record/14190) | wordnet | 1,003 Dicta-Sign video lemmas (whole wordnet: 24,… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | 6.9 MB (28 files) | download; use only as internal cross-language concept index (NC); never redistribute videos |
| Multilingual Sign Languages Wordnet (EASIER) | [sign-lang.uni-hamburg.de/easier/sign-word…](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/) | wordnet | 24,367 links, 14,028 signs, 16,534 synsets overal… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | small (CSV) | out of scope for this file |
| Corpus LS-Colin (COCOON) | [doi.org/10.34847/cocoon.30180d73-59a4-316…](https://doi.org/10.34847/cocoon.30180d73-59a4-316f-aff8-a9a0399e666a) | continuous-corpus | – | CC BY-NC-ND 2.5. | B | – | – | – |
| Ortolang Rosetta-LSF (Ortolang release) | [ortolang.fr/market/item/rosetta-lsf](https://www.ortolang.fr/market/item/rosetta-lsf) | continuous-corpus | ~3 h (tasks 1-3) | "CC BY-NC 4.0" + ESR-only, Ortolang-only | B | register | 0.6 GB (625,329,262 b… | see Rosetta isolated-sign mocap ask (LISN/MocapLab) |
| Ortolang "40 brèves" | [ortolang.fr/market/item/40-breves](https://www.ortolang.fr/market/item/40-breves) | continuous-corpus | 120 videos (~30 s each), 120 AZee expressions | "CC BY-NC-SA 4.0" + non-commercial research/teaching, Ortolang-only redistribution | B | dump | 1.8 GB | low priority; only if Marionet adds AZee input |
| Ortolang Mediapi-RGB | [ortolang.fr/market/item/mediapi-rgb](https://www.ortolang.fr/market/item/mediapi-rgb) | continuous-corpus | 1,230 videos, 86 h, 50,084 segments | "CC BY-NC-SA 4.0" + ESR/eduGAIN-only access | B | register | 125 GB | skip |
| Ortolang Dicta-Sign-LSF-v2 | [ortolang.fr/market/item/dicta-sign-lsf-v2](https://www.ortolang.fr/market/item/dicta-sign-lsf-v2) | continuous-corpus | ~8 h (SLDC: 11 h, 35,000 tokens, 16-18 signers) | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | register | 44 GB | skip (HamNoSys lexicon is the cross-language Dicta-Sign record) |
| Ortolang DEGELS1 | [ortolang.fr/market/item/degels1](https://www.ortolang.fr/market/item/degels1) | continuous-corpus | 3 LSF + 3 French route-description dialogues | "CC BY-NC-SA 4.0" + ESR/Ortolang-only | B | register | 3.3 GB | skip |
| Ortolang CREAGEST dialogue (ortolang-000926) | [ortolang.fr/market/corpora/ortolang-000926](https://www.ortolang.fr/market/corpora/ortolang-000926) | continuous-corpus | 106 h, 51 interviews | "CC BY-NC-ND 3.0" | B | – | 140.9 GB | skip |
| Ortolang CREAGEST acquisition (ortolang-000916) | [ortolang.fr/market/corpora/ortolang-000916](https://www.ortolang.fr/market/corpora/ortolang-000916) | continuous-corpus | 20 files (child acquisition) | "CC BY-NC-ND 3.0" | B | – | 0.27 GB | skip |
| Ortolang signes-en-famille | [repository.ortolang.fr/api/search/items/s…](https://repository.ortolang.fr/api/search/items/signes-en-famille?type=corpora) | continuous-corpus | family dinner interactions | "CC BY-NC-ND 3.0" ("ne pas diffuser le corpus") | B† | – | 209.9 GB | skip (dead end) |
| Dicta-Sign-LSF-v2 (corpus) | – | continuous-corpus | – | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | – | – | local research only |
| CREAGEST (corpus) | – | continuous-corpus | – | ND (SLDC; exact text not quoted) | B† | – | – | identify language and licence |
| Dicta-Sign-LSF-v2 | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dictasignlsfv2.html) | continuous-corpus | – | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | register | – | low priority (continuous) |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 32 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register if needed |
| Ortolang corpus-catteau-2020 | [repository.ortolang.fr/api/search/items/c…](https://repository.ortolang.fr/api/search/items/corpus-catteau-2020?type=corpora) | other | – | "CC BY-NC-ND 3.0" | B† | – | 54.9 GB | skip (dead end) |
| HF Langue-des-signes-francaise/* (mirrors of Ortolang LSF corpora) | [huggingface.co/api/datasets?search=sign-l…](https://huggingface.co/api/datasets?search=sign-language) | other | – | NC licences | B | dump | – | – |
| Ocelles | [ocelles.fr](http://www.ocelles.fr) | lexical-db | information not available | Per-file licence picker (Art Libre … CC BY-NC-ND); site down; Compendium single BY-SA 2.0 FR is stale. | C | none | – | retry later; check a Wayback snapshot of the licence footer (manual, no scraping) |
| LSF-ANIMAL / LSF-SHELVES / STK mocap | – | mocap | – | – | C | none | – | none (exhausted) |
| Rosetta 1,200 isolated-sign mocap (task 4; MocapLab / Systran; not in Ortolang… | – | mocap | 1,200 isolated signs (most frequent notions) | contract with MocapLab and Systran needed | C | email/permission | – | email LISN (A. Braffort) and MocapLab to license the 1,200 isolated citation-form signs as mocap |
| Elix (Signes de Sens) | [dico.elix-lsf.fr/](https://dico.elix-lsf.fr/) | dictionary-site | 15,300 signs (SLDC) | "Aucune reproduction, même partielle, autres que celles prévues à l'article L 122-5 du code de la propriété intellectuelle, ne peut être faite de ce site sans son autori… | C | html-only | – | email Signes de Sens (contact@elix-lsf.fr): is any subset CC BY-SA (e.g. via Wikimedia/Lingua Libre)? |
| Canal-U / FMSH (10.60527) LSF videos | e.g. https://doi.org/10.60527/x534-xz20 | continuous-corpus | lectures, LSF poetry translations, "Projet LGMEF… | varies: "CC BY-NC-SA", "CC BY-NC-ND", "Tous droits réservés" | C† | – | – | ? (none stated) |
| MEDIAPI-SKEL (corpus) | – | continuous-corpus | – | custom licence (SLDC) | C | – | – | identify language and licence |
| Sign3D | [sign-lang.uni-hamburg.de/lrec/data/sign3d…](https://www.sign-lang.uni-hamburg.de/lrec/data/sign3d.html) | other | – | none (LREC data page has no licence fields) | C | none | – | – |
| LSF-SHELVES | – | other | – | none (LREC data page has no licence fields) | C | none | – | – |
| Sign'Maths | – | other | – | none (LREC data page has no licence fields) | C | none | – | – |
| LSF-ANSHE | – | other | – | none (LREC data page has no licence fields) | C | none | – | – |

#### German SL (DGS) — ISO gsg — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn53 dict 24,778; sgn26 lit 420; sgn27 enc 12 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn26.spml) | signwriting | 25,210 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 9.1 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| BSL + DGS iconicity / concreteness database (Ortega, Schiefner, Lazarus, Pernis… | [pmc.ncbi.nlm.nih.gov/articles/PMC11982127/](https://pmc.ncbi.nlm.nih.gov/articles/PMC11982127/) | lexical-db | – | OSF CC BY 4.0 incl. videos (~2.2 GB). | A | – | – | open the article's Data Availability statement (likely OSF) by hand |
| DGS lexical signs + corresponding gestures (transparency, iconicity) (OSF) | [osf.io/a4c7u](https://osf.io/a4c7u) | lexical-db | – | CC-By Attribution 4.0 International | A | dump | – | verify files then ingest |
| UEA CWASA / JASigning example pages (SiGML) | [vh.cmp.uea.ac.uk/index.php/JASigning_Cond…](https://vh.cmp.uea.ac.uk/index.php/JASigning_Conditions) | hamnosys-sigml | – | Example pages CC BY-SA; bundled notation files BY-ND-like (C). | A | – | – | use example-page SiGML; do not adapt bundled notation files |
| Ortega, Schiefner, Lazarus, Perniss 2025 iconicity/concreteness database (DGS p… | [osf.io/jkw8p/](https://osf.io/jkw8p/) | isolated-video | 234 concepts matched across BSL and DGS ("a total… | OSF CC BY 4.0 incl. videos (~2.2 GB). | A | dump | "DGS signs.zip" 1,435… | first CC BY citation-video ingest for DGS; use hs/loc/mov as QA labels |
| Psycholinguistic norms for >300 lexical signs in DGS (Trettenbrein et al.) | [osf.io/mz8j4/](https://osf.io/mz8j4/) | isolated-video | 310 mp4 clips (ABEND.mp4 …) + DGS_norms.csv (72 K… | OSF CC BY 4.0: 310 clips + OpenPose + norms CSV. | A | dump | ~0.53 GB video (~1.7… | Download CSV + stimulus clips; map gloss_German/place_of_articulation/one_handed/two_handed; use video_sign_o… |
| SignDict (crowdsourced DGS dictionary) | [signdict.org](https://signdict.org) | isolated-video | 5,291 API entries (homepage says 5510); 1,047 wit… | per-video CC: by-sa/3.0/de 709; by/4.0 43; by-nc-sa/3.0/de 2,939; by-nc-sa/4.0 518+35 | A | api | ? (Tier-A clips est.… | pull full index with videos{videoUrl license copyright originalHref}; filter by-sa/3.0/de and by/4.0; mirror… |
| Commons "Videos of DGS" (+ Category:German Sign Language 93 files) | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 5 video files (93 files in Category:German Sign L… | per file | A | api | – | check per-file licence then ingest |
| DGS Wikisign (dgs.wikisign.org) | [dgs.wikisign.org](https://dgs.wikisign.org) | dictionary-site | – | "CC BY-SA 3.0 DE" (videos, as mirrored in SignDict) | A | none | – | skip; use the SignDict BY-SA subset |
| SignDict.org (crowdsourced DGS dictionary) | [signdict.org/about](https://signdict.org/about) | dictionary-site | – | per video: CC BY-SA 3.0 or CC BY-NC-SA 3.0 DE; source code MPL | A | html-only | – | filter per-video licence badge; seek official export (no scraping) |
| Wikimedia Commons Category:German Sign Language | [commons.wikimedia.org/wiki/Category:Germa…](https://commons.wikimedia.org/wiki/Category:German_Sign_Language) | fingerspelling-ha… | 93 files, mostly images/SVG fingerspelling | 50-file sample: CC BY-SA 4.0 x26, PD x16 | A† | – | – | none (not a lexicon) |
| DGS-Fabeln-1-SE (DFKI; 7-view fairy tales) | [doi.org/10.5281/zenodo.18879038](https://doi.org/10.5281/zenodo.18879038) | continuous-corpus | – | CC BY 4.0 | A | dump | 983 MB | – |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 19 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| Dicta-Sign lexicon (CLARIN:EL lcr/805) | [inventory.clarin.gr/catalogue_backend/api…](https://inventory.clarin.gr/catalogue_backend/api/registry/metadatarecord/805/) | lexical-db | 1,000 entries (multilingual) | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | html-only | – | skip |
| Sign2MINT | – | lexical-db | – | "CC BY-NC-SA 3.0 DE" | B | – | – | – |
| Dicta-Sign Lexicon / Corpus (DGS) | [sign-lang.uni-hamburg.de/dicta-sign/porta…](https://www.sign-lang.uni-hamburg.de/dicta-sign/portal/) | hamnosys-sigml | "1000 signs per language" (citation form + HamNoS… | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | email/permission | – | include Dicta-Sign DGS in the info@dgs-korpus.de / IDGS Hamburg request |
| UEA JASigning / CWASA SiGML demos (Dicta-Sign lexicon) | [vh.cmp.uea.ac.uk/index.php/JASigning_Demos](https://vh.cmp.uea.ac.uk/index.php/JASigning_Demos) | hamnosys-sigml | "Approximately 1000 signs are available in four n… | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | – | – | ask UEA Virtual Humans group whether the Dicta-Sign SiGML files are licensable |
| DGS Corpus type list / MEINE DGS (HamNoSys) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dgscorpustypelist.html) | hamnosys-sigml | 14,064 types with HamNoSys | "DGS Corpus license": "Parts of this corpus are made available on this site for linguistic research. You may download and use the material for this sole purpose." | B | – | – | email info (at) dgs-korpus.de for clip-derivation permission |
| Gebärden lernen (gebaerdenlernen.de) | [gebaerdenlernen.de/](https://www.gebaerdenlernen.de/) | isolated-video | ~2,939 videos mirrored in SignDict (native count… | "Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 3.0 Deutschland Lizenz" | B | html-only | – | use only if Marionet output stays non-commercial NC-SA; otherwise skip |
| SOKE 3D poses | [2000zrl.github.io/soke](https://2000zrl.github.io/soke) | pose | – | no licence (Dropbox/Drive) | B | – | – | – |
| Sign2MINT (STEM specialist lexicon) | [sign2mint.de/](https://sign2mint.de/) | dictionary-site | 5,264 signs (signCount.json; Compendium 5263) | "CC BY-NC-SA 3.0 DE" (licence badge in app bundle; Compendium) | B | html-only | – | contact project for API/export and confirm licence; low priority (specialist vocabulary) |
| EASIER Multilingual Sign Language Wordnet v4.0 | [fdr.uni-hamburg.de/record/14190](https://www.fdr.uni-hamburg.de/record/14190) | wordnet | ? (whole wordnet: 24,367 links, 14,028 signs, 16,… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | 6.9 MB (28 files) | download; use only as internal cross-language concept index (NC); never redistribute videos |
| Multilingual Sign Languages Wordnet (EASIER) | [sign-lang.uni-hamburg.de/easier/sign-word…](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/) | wordnet | 24,367 links, 14,028 signs, 16,534 synsets overal… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | small (CSV) | out of scope for this file |
| WMT-SLT SRF (Zenodo 6631275) | [wmt-slt.com/data](https://www.wmt-slt.com/data) | continuous-corpus | – | No CC licence: "non-commercial research … distributing the datasets … is not permitted" (B/C). | B | – | – | – |
| Public DGS Corpus "MEINE DGS - annotiert" Release 4 (corpus) | [sign-lang.uni-hamburg.de/meinedgs_r4/ling…](https://www.sign-lang.uni-hamburg.de/meinedgs_r4/ling/start_en.html) | continuous-corpus | 50 h public (full corpus 560 h, 657,000 tokens, 3… | "You may download and use the material for this sole purpose." (linguistic research only) | B | dump | ? (50 h at 360p, seve… | email info@dgs-korpus.de for a licence covering derived avatar clips and redistribution of derived motion |
| RWTH-PHOENIX-Weather 2014 / 2014T | [www-i6.informatik.rwth-aachen.de/~koller/…](https://www-i6.informatik.rwth-aachen.de/~koller/RWTH-PHOENIX-2014-T/) | continuous-corpus | 2014T: 39 GB | Creative Commons badge linking by-nc-sa/3.0 (no further text) | B | dump | 39 GB | skip for the dictionary |
| Phoenix-2014T | – | continuous-corpus | – | CC BY-NC-SA 3.0 | B | – | – | local research only |
| HeSLEx (RSL/DGS heritage signers), OSF | [osf.io/kawge/](https://osf.io/kawge/) | other | 40 videos (task instructions, not lexical signs) | "CC-BY Attribution-NonCommercial 4.0 International" | B† | – | – | ? (none stated) |
| fhswf/sign-language-avatar-gloss-dgs (HF) | [huggingface.co/datasets/fhswf/sign-langua…](https://huggingface.co/datasets/fhswf/sign-language-avatar-gloss-dgs) | other | – | cc-by-nc-sa-4.0; card: "Please take care of the original licence of each video" | B | dump | – | use SignDict originals with per-video licence instead |
| DGS Corpus types list (meine-dgs.de) | [meine-dgs.de/ling/types_en.html](https://meine-dgs.de/ling/types_en.html) | lexical-db | 14064 types | DGS Corpus license <https://meine-dgs.de/ling/license_en.html> | C | html-only | – | read DGS Corpus licence |
| ViSiCAST/eSIGN DGS HamNoSys lexicons | [vh.cmp.uea.ac.uk/index.php/SiGML_Tools](https://vh.cmp.uea.ac.uk/index.php/SiGML_Tools) | hamnosys-sigml | – | ? (UEA offers only the eSIGN Editor) | C | none | – | ask rights holder (UEA) |
| Hamburg DGS specialist lexica (GLex, HLex, GaLex, TLex, PLex, SLex) | [sign-lang.uni-hamburg.de/glex/](https://www.sign-lang.uni-hamburg.de/glex/) | hamnosys-sigml | GLex 2330 signs | "© 2007-2020, Universität Hamburg & Signum GmbH. Alle Rechte vorbehalten." | C | html-only | n/a | skip unless the DGS-Korpus request is extended to these |
| SIGNUM Database (RWTH Aachen; BAS Munich) | [bas.uni-muenchen.de/Bas/BasSIGNUMeng.html](https://www.bas.uni-muenchen.de/Bas/BasSIGNUMeng.html) | ml-isolated | 450 basic signs, 780 sentences, 25 signers, 33,21… | "Free usage for scientific and commercial purposes." (EUR 1,000; ELRA members EUR 600) | C | email/permission | 920 GB | low priority; consider later for pose-fitting training |
| fhswf/rtm133lifting-finetuning-signs-fingerspelling-dgs (Hugging Face) | [huggingface.co/datasets/fhswf/rtm133lifti…](https://huggingface.co/datasets/fhswf/rtm133lifting-finetuning-signs-fingerspelling-dgs) | pose | 2D→3D lifting training JSON for DGS signs and fin… | card says only "license: mit"; source of keypoints undocumented | C | dump | – | Ask first (Tier C; no action stated in notes) |
| DW-DGS: Digitales Wörterbuch der Deutschen Gebärdensprache | [dw-dgs.de](https://dw-dgs.de) | dictionary-site | "1113 entries comprising 1524 sign variants" | "Das Herunterladen von Inhalten, insbesondere Videos, ist lediglich für private sowie Unterrichtszwecke erlaubt." | C | html-only | n/a | bundle into the info@dgs-korpus.de request |
| MEINE DGS (Public DGS Corpus) per-transcript video DOIs | e.g. https://doi.org/10.25592/dgs.meine… | continuous-corpus | 315 DataCite records matched "Gebärden" or "Gebär… | empty rights field (per-video DataCite records) | C† | – | – | None (corpus already in notes) |
| ATIS Sign Language Corpus (DGS / ISL / SASL) | [aclanthology.org/L08-1470](https://aclanthology.org/L08-1470) | continuous-corpus | – | not stated | C | – | – | skip (continuous, small air-travel domain) |
| Public DGS Corpus | – | continuous-corpus | – | DGS Corpus licence (custom) (SLDC); sign.mt: "Custom" | C | – | – | read DGS Corpus licence |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 545 objects | per collection (not opened) | C | register | – | open per-collection licences |
| EASIER Signing Avatar Challenge Dataset | [project-easier.eu/](https://www.project-easier.eu/) | other | – | Google Drive, no licence | C | – | – | skip (not a lexicon) |

#### Icelandic SL (ÍTM) — ISO icl — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn131 dict 40 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn131.spml) | signwriting | 40 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 36 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| SignWiki Ísland (SHH, Samskiptamiðstöð heyrnarlausra og heyrnarskertra) | [is.signwiki.org](https://is.signwiki.org) | lexical-db | 12,317 articles, 16,982 files (Compendium 11,463… | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | api | wikitext export likel… | email SHH (arny.gudmundsdottir@shh.is) for the CC licence/version and original citation-video files; meanwhil… |
| SHH (island.is/s/shh) -> SignWiki | [island.is/s/shh](https://island.is/s/shh) | dictionary-site | – | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | – | – | – |
| SignWiki Iceland | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/index.html) | dictionary-site | 11,463 signs | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | – | – | – |

#### Irish SL — ISO isg — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn62 dict 66 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn62.spml) | signwriting | 66 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Smith ISL PhD appendices ("SOI") | [zenodo.org/records/10639554](https://zenodo.org/records/10639554) | other | one ZIP, 68.4 MB: lexical frequency list ("SOI co… | Zenodo CC BY 4.0; GitHub TUD-RSmith/PhD-Appendices GPL-3.0 | A | dump | 68.4 MB | download (over 20 MB cap: raise cap); use frequency list as ISL priority gloss list and NMF rules for non-man… |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 1 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| Signs of Ireland Corpus (TCD Centre for Deaf Studies) | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/signsofirelandcorpus.html) | continuous-corpus | "10 hours recorded (estimate)", 40 signers | "information not available"; "No public access" | C | email/permission | – | email TCD CDS (Leeson): can a gloss lexicon or ID-gloss list be shared? (low priority for video) |
| ATIS Sign Language Corpus (DGS / ISL / SASL) | [aclanthology.org/L08-1470](https://aclanthology.org/L08-1470) | continuous-corpus | – | not stated | C | – | – | skip (continuous, small air-travel domain) |
| Australian Irish Sign Language corpus | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/australianirishsl.html) | continuous-corpus | – | "information not available" (restricted) | C† | – | – | skip (different variety) |

#### Italian SL (LIS) — ISO ise — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn63 dict 1,222 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn63.spml) | signwriting | 1,222 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.3 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| AGLAIA – ARIADNE Glossary in LIS and IS for Archaeology | [zenodo.org/records/19844076](https://zenodo.org/records/19844076) | isolated-video | single compiled glossary video 00_R001_AGLAIA_LIS… | "cc-by-4.0" | A | dump | 478 MB | Segment each term out of the one long video |
| e-LIS (CLARIN Eurac 20.500.12124/75) | [clarin.eurac.edu/repository/oai/request?v…](https://clarin.eurac.edu/repository/oai/request?verb=GetRecord&metadataPrefix=oai_dc&identifier=oai:clarin.eurac.edu:20.500.12124/75) | lexical-db | "2677 videos ... for 294 Italian lemmas" | – | B | – | – | – |
| e-LIS (EURAC) | [hdl.handle.net/20.500.12124/75](http://hdl.handle.net/20.500.12124/75) | lexical-db | 304 Italian-keyword entries; 301 LIS parameter en… | CC BY-NC-SA 4.0 | B | dump | – | download data for local research only (Tier B) |
| SGB-FSS Lexicon (SignSuisse) | [sgb-fss.ch/signsuisse/](https://www.sgb-fss.ch/signsuisse/) | lexical-db | information not available | Restricted access requires individual license agreement | B | email/permission | – | request individual licence agreement |
| e-LIS v1.0 (Electronic Bilingual Dictionary LIS-Italian, Eurac Research CLARIN) | [clarin.eurac.edu/repository/xmlui/handle/…](https://clarin.eurac.edu/repository/xmlui/handle/20.500.12124/75) | isolated-video | "2677 videos with definitions and examples for 29… | "Creative Commons - Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)" | B | dump | data-v1.0.zip 436.34… | download (436 MB) for NC/internal tuning; derive SignDesc by hand if clips must be commercial-safe; check the… |
| MultiMeDaLIS (ICCV-MSLR 2025 track 2) | [kaggle.com/competitions/iccv-mslr-2025-tr…](https://www.kaggle.com/competitions/iccv-mslr-2025-track-2) | ml-isolated | "126 Italian Sign Language gestures (100 medical… | Kaggle competition CC BY-NC-SA 4.0. | B | register | – | – |
| SignIT (Univ. Catania IPLab) | [fpv-iplab.github.io/SignIT/](https://fpv-iplab.github.io/SignIT/) | ml-isolated | 94 sign classes; 644 source videos, 3.33 h; Media… | "The SignIT dataset is distributed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)." | B | dump | Videos.zip 661 MB; 2D… | skip for clips; class list could cross-check vocabulary |
| MultiMedaLIS (Univ. Catania / Modena) | [aclanthology.org/2024.clicit-1.17](https://aclanthology.org/2024.clicit-1.17) | ml-isolated | multimodal isolated (RGB, depth, radar), medical… | Kaggle competition CC BY-NC-SA 4.0. | B | none | – | skip (no licence found) |
| LIS corpus | – | continuous-corpus | – | NC (SLDC; exact text not quoted) | B | – | – | local research only |
| Signsuisse poses (Zenodo) | – | pose | – | – | C† | – | – | – |
| DIZLIS (SLDC) | – | dictionary-site | 1000 signs | Dizlis license <http://www.dizlis.it/web/termini-e-condizioni.html> | C | html-only | – | read Dizlis terms |
| Italian Sign Language (LIS) Corpus (Geraci et al.) | [hdl.handle.net/1839/00-57EA1164-AC96-4541…](https://hdl.handle.net/1839/00-57EA1164-AC96-4541-8B1D-252673D6152A) | continuous-corpus | ~100 h; 180 signers; 16,500 tokens; ELAN | Compendium "CC BY-NC-SA (version unspecified)", "Restricted access for researchers, requires individual license agreement"; TLA CMDI `<DistributionType>unspecified</Dist… | C | email/permission | – | skip for now |
| ATLAS / LIS4ALL | [smilies.polito.it/atlas/](https://www.smilies.polito.it/atlas/) | other | – | © 2017, no licence (C/D). | C | none | – | ask rights holder |

#### Luxembourgish SL (DGS variety) — ISO none — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Gebärdensprach-Lexikon, Hörgeschädigten Beratung SmH | [gebaerdensprache.hoergeschaedigt.lu/](https://gebaerdensprache.hoergeschaedigt.lu/) | dictionary-site | – | "Eine Vervielfältigung oder Verwendung solcher Objekte in anderer elektronischer oder gedruckter Form ist ohne ausdrückliche Zustimmung der Autoren nicht gestattet." | C | html-only | – | low priority: map to DGS; optionally ask HB SmH (info@hoergeschaedigt.lu) for a local-variant list |

#### Maltese SL — ISO mdl — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn31 dict 2,833; sgn127 lit 753; sgn147 lit 582; sgn103 signs 234 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn31.spml) | signwriting | 4,402 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 2.4 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| MLRS LSM dictionary (Univ. of Malta) / ELG 13129 "Dictionary of Maltese Sign La… | [web.archive.org/web/20240720111432/https:…](https://web.archive.org/web/20240720111432/https://mlrs.research.um.edu.mt/resources/lsm-OLD/) | dictionary-site | – | none (ELG record 13129 has no licence) | C | none | – | ask rights holder |
| MLRS Dictionary of Maltese Sign Language (University of Malta) | [mlrs.research.um.edu.mt/lsm/](https://mlrs.research.um.edu.mt/lsm/) | dictionary-site | ? (launched December 2018) | UNVERIFIED (site offline; no terms seen) | C | none | – | email UM Institute of Linguistics and Language Technology (MLRS) for status, export and licence; retry Waybac… |
| Malta FDMSL print/CD; CRPD sale | [crpd.org.mt/](https://www.crpd.org.mt/) | print | – | ? (no sale or licence found) | C | print-only | – | – |
| Maltese Sign Language Dictionary (Foundation for the Development of Maltese SL… | [signwriting.org/malta/malta.html](https://signwriting.org/malta/malta.html) | print | – | no explicit licence ("Published by the Foundation for the Development of Maltese Sign Language") | C | print-only | – | skip (SignWriting overlaps the open SignPuddle Malta puddles) |

#### Northern Ireland SL (no own ISO; SignPuddle bfi-IE) — ISO none — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn60 dict 56 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn60.spml) | signwriting | 56 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| BSL Corpus: Belfast signers' NISL forms | [bslcorpusproject.org/cava/](https://bslcorpusproject.org/cava/) | continuous-corpus | Belfast is 1 of 8 BSL Corpus regions; ELAN for so… | BSL Corpus OA (CC BY-SA 4.0) | A | register | – | tag Belfast-region signers when ingesting BSL Corpus lexical elicitation |

#### Norwegian SL (NTS) — ISO nsl — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn69 dict 6,494; sgn23 lit 344; sgn24 enc 13 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn23.spml) | signwriting | 6,851 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 1.9 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Exhibition Corpus – Text, Sound, Sign (via CLARIN) | – | continuous-corpus | – | CC ZERO (CLARIN) | A | – | – | verify contents (citation-form clips?) |
| Norwegian Sign Language Corpus – associated files (OSF) | [osf.io/tydf4/](https://osf.io/tydf4/) | other | annotation guidelines PDF (Ferrara 2026), elicita… | "CC-By Attribution 4.0 International" | A† | – | – | ? (none stated) |
| TegnWiki Norge / no.signwiki.org | [no.signwiki.org](https://no.signwiki.org) | lexical-db | 1,435 articles, 28 files (Compendium 1,237 signs) | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | api | small | skip |
| TegnWiki Norge (SLDC) / no.signwiki.org (Q5) | [tegnwiki.no](https://www.tegnwiki.no) | dictionary-site | 1237 signs (SLDC); 1,435 articles, 28 files (Medi… | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | html-only | – | skip (no licence; YouTube video) |
| NTS Corpus (NTNU) on CLARINO: Halvorsen (2012) 11509/141; Language Ecology - Re… | [repo.clarino.uib.no/xmlui/handle/11509/14…](https://repo.clarino.uib.no/xmlui/handle/11509/141?show=full) | continuous-corpus | – | CC BY-NC-SA 4.0 (141/155); RES datasets 144/147/156 are C. | B | dump | – | – |
| NTS Corpus RES datasets 11509/144, /147, /156 (CLARINO) | [repo.clarino.uib.no/xmlui/handle/11509/14…](https://repo.clarino.uib.no/xmlui/handle/11509/147?show=full) | continuous-corpus | – | CC BY-NC-SA 4.0 (141/155); RES datasets 144/147/156 are C. | B | register | – | ? (research plan required) |
| Norwegian SL Corpus (via CLARIN) | – | continuous-corpus | – | CC BY-NC-SA 4.0 (CLARIN) | B | – | – | local research only |
| Global Signbank NTS dataset (NTNU) | [signbank.cls.ru.nl/datasets/NTS](https://signbank.cls.ru.nl/datasets/NTS) | signbank | 1,946 glosses, 0 public | no licence shown; "(c) 2020, NTNU"; usage-conditions field blank; "Accessible by others: False" | C | email/permission | – | email Lindsay Ferrara (NTNU) to ask for a CC-licensed public subset on the NGT model |
| Global Signbank NTS (via Hamburg compendium) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/globalsignbanknts.html) | signbank | 1,946 signs | restricted | C† | none | – | – |
| Statped / minetegn.no | [statped.no/tegnsprak/](https://www.statped.no/tegnsprak/) | dictionary-site | – | ? (Statped HTTP 403; minetegn.no empty body) | C† | none | – | – |
| Norsk tegnordbok (Statped) | [minetegn.no/Tegnordbok-2016/](https://www.minetegn.no/Tegnordbok-2016/) | dictionary-site | 9,135 <leksem> entries in the public XML index (C… | none stated (attribution line "Tegnene er hentet fra Norsk tegnordbok som du finner på www.tegnordbok.no.") | C | html-only | index 1,103,894 bytes… | email tegnordbok@statped.no for a licence for the index plus citation videos; ask whether NLOD or CC BY can a… |
| TegnWiki Norge | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/index.html) | dictionary-site | 1,237 | information not available | C | – | – | – |
| Tactile Swedish and Norwegian SL corpora | [doi.org/10.58141/jvas-9681](https://doi.org/10.58141/jvas-9681) | continuous-corpus | 220 mp4 files (both corpora) | "info:eu-repo/semantics/restrictedAccess" plus "Creative Commons Attribution 4.0 International" (covers the metadata); video released only "på begäran efter prövning enl… | C | email/permission | – | ? (video on request after review under OSL; none stated) |

#### Portuguese SL (LGP) — ISO psr — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn33 dict 496; sgn115 lit 55; sgn117 enc 40 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn33.spml) | signwriting | 591 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.3 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| PE2LGP (ineslacerda/PE2LGP-Translator) dicionario.csv | [github.com/ineslacerda/PE2LGP-Translator](https://github.com/ineslacerda/PE2LGP-Translator) | lexical-db | 110 rows (PT word -> lemma -> LGP gloss) | MIT; 110 glosses, no sign forms. | A | dump | – | ? (negligible: no sign forms) |
| xergg/dclgp | [github.com/xergg/dclgp](https://github.com/xergg/dclgp) | dictionary-site | – | code licensed MIT; content licence unknown | C | – | – | Ask first (Tier C; no action stated in notes) |
| LGP Reference Corpus (JPL article 10.16995/jpl.23006) | [api.crossref.org/works/10.16995/jpl.23006](https://api.crossref.org/works/10.16995/jpl.23006) | continuous-corpus | – | none found (Crossref has no licence) | C | none | – | ask rights holder |
| LGP Reference Corpus (Universidade Católica Portuguesa) | [ciencia.ucp.pt/en/publications/portuguese…](https://ciencia.ucp.pt/en/publications/portuguese-sign-language-reference-corpus-an-annotated-signed-cor/) | continuous-corpus | 112 h 51 min (recordings 1992-2019) + ELAN | article "Licence: CC BY"; no data licence or access route found | C | email/permission | – | email UCP (CIIS; Mara Moita / Ana Mineiro) to ask about a lexicon or gloss list and its licence |

#### Sign Language of the Netherlands (NGT) — ISO dse — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn68 dict 84 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn68.spml) | signwriting | 84 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Global Signbank - NGT dataset | [signbank.cls.ru.nl/datasets/NGT](https://signbank.cls.ru.nl/datasets/NGT) | signbank | 6,862 public glosses, 7,469 total | "A Creative Commons BY 4.0 International license applies to all accessible lexical items." (example sentences: "CC BY-NC-SA-4.0") | A | register | – | FIRST NGT INGEST: CSV export with phonology columns; filter out example-sentence media; keep release labels;… |
| Commons "Videos of Dutch Sign Language" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 6 files | per file | A | api | – | check per-file licence then ingest |
| 3D-LEX v1.0 (NGT) | [osf.io/cv276/](https://osf.io/cv276/) | mocap | "1000 signs from each language" | "CC-By Attribution 4.0 International" on cv276 and on every data component | A | dump | NGT_ANIM_GLB.zip 644,… | retarget the GLB/FBX animations directly |
| 3D-LEX v1.0 | [osf.io/g7u9c;](https://osf.io/g7u9c;) | mocap | 1,000 NGT signs (+1,000 ASL) | "The data is available under a CC BY 4.0 license" (paper) | A | dump | – | join to Global Signbank NGT by gloss; use as ground-truth motion for VRM retarget tests |
| Iconicity and transparency in NGT – Stimulus materials (Schiefner, Roelofsen, S… | [doi.org/10.21942/uva.c.8301958](https://doi.org/10.21942/uva.c.8301958) | isolated-video | 46 items, 2,824 files: ~1,410 unmasked + ~1,410 m… | Items CC BY-NC 4.0 (collection DOI says CC BY 4.0); item level governs. | B | dump | ~6.0 GB total (~3 GB… | Treat as NC; ask authors whether the collection-level CC BY is intended; pull StimulusMaterials_Metadata.csv… |
| EASIER Multilingual Sign Language Wordnet v4.0 | [fdr.uni-hamburg.de/record/14190](https://www.fdr.uni-hamburg.de/record/14190) | wordnet | ? (whole wordnet: 24,367 links, 14,028 signs, 16,… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | 6.9 MB (28 files) | download; use only as internal cross-language concept index (NC); never redistribute videos |
| Multilingual Sign Languages Wordnet (EASIER) | [sign-lang.uni-hamburg.de/easier/sign-word…](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/) | wordnet | 24,367 links, 14,028 signs, 16,534 synsets overal… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | small (CSV) | out of scope for this file |
| ECHO corpus (NGT part) | [hdl.handle.net/1839/00-0000-0000-0001-489…](https://hdl.handle.net/1839/00-0000-0000-0001-4892-C) | continuous-corpus | "1.5 hours recorded" (Compendium) | "CC BY-NC-ND 3.0" (Compendium only; TLA CMDI shows no licence) | B | – | – | skip (not citation form) |
| Corpus NGT (Radboud) | [corpusngt.nl/info](https://www.corpusngt.nl/info) | continuous-corpus | 72 h, 150,000 tokens, 3,300 types, 100 signers (S… | "Creative Commons Naamsvermelding-NietCommercieel-GelijkDelen 4.0 Internationaal" (website) vs SLDC "CC BY-NC-SA 3.0 NL" (TLA videos) | B | register | – | Tier B only (token frequencies to prioritise glosses) |
| Corpus NGT | – | continuous-corpus | – | videos CC BY-NC-SA 3.0 NL (SLDC); sign.mt: CC BY-NC-SA 4.0 | B | – | – | local research only |
| Global Signbank dataset NGT | [signbank.cls.ru.nl/datasets/available](https://signbank.cls.ru.nl/datasets/available) | signbank | 7,469 (6,862 public) | – | C† | html-only | – | – |
| ECHO NGT lexicon (TLA; via CLARIN) | – | lexical-db | – | "Public" (CLARIN) | C† | – | – | check TLA licence |
| NGT Signs Iconicity Ratings (Dataverse) | [doi.org/10.17026/SS/QHQKHZ](https://doi.org/10.17026/SS/QHQKHZ) | lexical-db | 415 signs | not checked | C† | – | – | check licence |
| SignBeach | [aclanthology.org/volumes/2026.signlang-1/](https://aclanthology.org/volumes/2026.signlang-1/) | isolated-video | 1,401 signs, 4 deaf signers, 5 cameras | – | C† | – | – | none (out of scope) |
| NGT video stimuli, with and without mouth actions (Dataverse) | [doi.org/10.17026/SS/CNQGSY](https://doi.org/10.17026/SS/CNQGSY) | isolated-video | 908 .mov single-sign videos | not checked | C† | – | – | check licence |
| Pseudosigns (NGT pseudosign videos; Dataverse) | [doi.org/10.17026/SS/4UJXIF](https://doi.org/10.17026/SS/4UJXIF) | isolated-video | 205 pseudosign videos | not checked | C† | – | – | – |
| IPROSLA (TLA) | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/iprosla.html) | continuous-corpus | – | "Individual license agreement available; Restricted access for researchers" | C | email/permission | – | skip (dead end for lexicon) |
| Visibase (TLA) | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/visibase.html) | continuous-corpus | 300 h (1990-2011) | "Licence information not available; Restricted access ... individual license agreement" | C | email/permission | – | skip (dead end for lexicon) |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 808 objects (+12 "Nederlandse Gebarentaal") | per collection (not opened) | C | register | – | open per-collection licences |

#### Spanish SL (LSE) — ISO ssp — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn55 dict 8,526; sgn93 lit 505 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn55.spml) | signwriting | 9,031 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 3.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| VisSE corpus of Spanish SignWriting (Zenodo) | [zenodo.org/records/6337885](https://zenodo.org/records/6337885) | signwriting | handwritten SignWriting with graphical/semantic a… | cc-by-4.0 | A | dump | 228 MB | ingest if SignWriting images useful |
| SWL-LSE (SignaMed Word-Level LSE) | [zenodo.org/records/13691887](https://zenodo.org/records/13691887) | isolated-video | 300 reference "dictionary sign" RGB videos (healt… | Zenodo `license: {'id': 'cc-by-4.0'}`, `access_right: open` | A | dump | VIDEOS_REF.zip 24.1 M… | download VIDEOS_REF.zip + CSV at ingest time (over the 20 MB cap); run pose-to-SignDesc fit on the 300 citati… |
| Commons "Videos of LSE" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 3 files | per file | A | api | – | check per-file licence then ingest |
| Kaggle LSE sets (alphabet-only) | [kaggle.com/api/v1/datasets/list?search=sp…](https://www.kaggle.com/api/v1/datasets/list?search=spanish%20sign%20language) | fingerspelling-ha… | – | CC0 / Unknown / NC-ND | A | dump | – | – |
| Spanish Sign Language (LSE) Fingerspelling Dataset | [zenodo.org/records/21351703](https://zenodo.org/records/21351703) | fingerspelling-ha… | "over 160,000 images" at 192 and 512 px, in raw,… | "cc-by-4.0" | A | dump | 24.9 GB | Low priority for lexicon (fingerspelling only) |
| "lenguaje de signos español" | [doi.org/10.5281/zenodo.19073528](https://doi.org/10.5281/zenodo.19073528) | fingerspelling-ha… | "imagenes de lenguaje de signos en español para e… | "Creative Commons Attribution 4.0 International" | A | – | – | ? (none stated) |
| LSE-FS-UVigo (fingerspelling) | [zenodo.org/records/15797079](https://zenodo.org/records/15797079) | fingerspelling-ha… | 3,010 sequences, 42 signers (MediaPipe 3D hand ke… | Zenodo `license: {'id': 'cc-by-4.0'}`, open | A | dump | RAW_KPS 7.3 GB, PROC_… | optional source for the LSE manual-alphabet handshapes |
| 'Image and sign bank of Spanish Sign Language' (ELG) | [live.european-language-grid.eu/catalogue_…](https://live.european-language-grid.eu/catalogue_backend/api/registry/search/?search=sign) | lexical-db | – | CC BY-NC-SA 3.0 | B | – | – | – |
| LSE-Health-UVigo | [zenodo.org/records/10234465](https://zenodo.org/records/10234465) | continuous-corpus | 273 videos, ~11 h, 10 signers; 105 distinct signs… | Zenodo `license: {'id': 'cc-by-nc-4.0'}`, `access_right: open` | B | dump | Videos zip 5.08 GB; E… | low priority; gloss tokens only as NC sign-spotting examples |
| Fundación CNSE "Banco de imágenes y signos LSE" (new) | [fundacioncnse.org/educa/bancolse/sobre-es…](https://www.fundacioncnse.org/educa/bancolse/sobre-esta-web.php) | other | still images | CC BY-NC-SA 3.0 still images. | B | – | – | – |
| LSE-METI-UVigo, Medical Emergency Triage Interactions | [zenodo.org/records/20035734](https://zenodo.org/records/20035734) | other | triage questions, predefined answers and phrases | "cc-by-nc-4.0"; access_right "restricted"; 0 public files | B | email/permission | – | Request access (Tier B/C on request) |
| Dictio (Masaryk University) | [dictio.info/](https://www.dictio.info/) | lexical-db | ? (LSE count not stated) | "© 2007-2026 Masaryk University / All rights reserved" | C | register | – | low priority |
| Signario LSE (UCM) | [griffos.filol.ucm.es/signario/](https://griffos.filol.ucm.es/signario/) | phonology | – | © authors; data in private DVC. | C | none | – | ask rights holder (authors) |
| LSE-Sign lexical database (BCBL) | [lse-sign.bcbl.eu/web-busqueda/](http://lse-sign.bcbl.eu/web-busqueda/) | phonology | 2,400 signs + 2,700 non-signs | no licence text; "Está disponible a todos los investigadores interesados" (Compendium: "LSE-Sign license", "Restricted access requires confirmed registration") | C | register | CSV only, a few MB at… | register; use the CSV export internally only as a handshape/location/movement tuning reference; email BCBL an… |
| LSE-Sign | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/lsesign.html) | phonology | 2,400 signs + 2,700 non-signs | "LSE-Sign license"; "Restricted access requires confirmed registration" | C | register | – | regional researchers own this (cross-ref) |
| LSE_UVIGO / LSE_Lex40_UVIGO | [aclanthology.org/2020.signlang-1.8.pdf](https://aclanthology.org/2020.signlang-1.8.pdf) | ml-isolated | 40 isolated signs + fingerspelling + sentences +… | no dataset licence found; paper says release "may be made available to the research community in the coming months" (paper itself CC-BY-NC) | C | email/permission | – | skip (SWL-LSE is the released successor) |
| Sign4all | [doi.org/10.57760/SCIENCEDB.28304](https://doi.org/10.57760/SCIENCEDB.28304) | ml-isolated | 24 dining/catering signs; 7,756 samples; 8 signer… | Empty licence metadata (C/D). | C | – | 18,496,841,136 bytes… | check the scidb page in a browser for its licence; low value (24 signs) |
| SignaMed (signamed.uvigo.es) | [signamed.uvigo.es/](https://signamed.uvigo.es/) | dictionary-site | 373 reference signs for 312 health terms; 273 def… | © SignaMed; use SWL-LSE instead. | C | html-only | – | use SWL-LSE (CC BY) instead |
| DILSE (Fundación CNSE) | [fundacioncnse-dilse.org/aviso-legal.php](https://fundacioncnse-dilse.org/aviso-legal.php) | dictionary-site | – | Footer CC BY-NC-SA 3.0 vs aviso legal "uso personal y privado". | C | html-only | – | ask rights holder |
| DILSE (Diccionario de la LSE, Fundación CNSE) | [fundacioncnse-dilse.org/](https://fundacioncnse-dilse.org/) | dictionary-site | 9,000 signs (Compendium); 2008 DILSE III print/DV… | Footer CC BY-NC-SA 3.0 vs aviso legal "uso personal y privado". | C | html-only | n/a | email Fundación CNSE to resolve the licence conflict and ask about a bulk/video licence |
| CORILSE | [sign-lang.uni-hamburg.de/lrec/data/corils…](https://www.sign-lang.uni-hamburg.de/lrec/data/corilse.html) | continuous-corpus | – | none (LREC data page has no licence) | C | – | – | ask rights holder |
| LSE_eSaude_UVIGO_MSSL (Hugging Face) | [huggingface.co/datasets/mvazquez/LSE_eSau…](https://huggingface.co/datasets/mvazquez/LSE_eSaude_UVIGO_MSSL) | continuous-corpus | 467 files (mp4 + labels) | HF card "license: mit" (set by uploader); provenance and curators blank ("More Information Needed") | C | dump | – | Confirm provenance (Tier C until confirmed) |
| LSE_eSaude_UVIGO_OSLWL (Hugging Face) | [huggingface.co/datasets/mvazquez/LSE_eSau…](https://huggingface.co/datasets/mvazquez/LSE_eSaude_UVIGO_OSLWL) | continuous-corpus | 2,154 files (mp4 + labels) | HF card "license: mit" (set by uploader); provenance and curators blank ("More Information Needed") | C | dump | – | Confirm provenance (Tier C until confirmed) |
| CORLSE (Corpus de la LSE, CNLSE) | [corpuslse.es/](https://corpuslse.es/) | continuous-corpus | 420 h; 246 signers | none stated (Compendium also: not available) | C | email/permission | – | optional: after accreditation, use the ELAN gloss inventory as a frequency list |
| Sign4all (ScienceDB, DOI 10.57760/SCIENCEDB.28304) | [scidb.cn/en/detail?dataSetId=12775cc00268…](https://www.scidb.cn/en/detail?dataSetId=12775cc0026841979bdaba60484ad067) | other | v3.0.0 | Empty licence metadata (C/D). | C | – | 18,496,841,136 B | ask rights holder |
| SWL-LSE | – | other | – | CC BY (as stated in passing) | C | – | – | use instead of SignaMed |

#### Swedish SL (STS) — ISO swl — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn73 dict 81 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn73.spml) | signwriting | 81 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 6 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| teckentranskription lexicon-data.csv (unofficial weekly mirror of the official… | [github.com/zrajm/teckentranskription](https://github.com/zrajm/teckentranskription) | lexical-db | 21,728 rows x 19 columns; 21,310 rows with a tran… | Unofficial mirror of the CC BY-NC-SA STS lexicon export. | B | dump | 6,238,024 bytes | build the STS parser on it now (PUA transcription -> handshape/location/movement); not the ingest of record;… |
| SSL Lexicon (sign.mt row) | – | lexical-db | items 20000 | CC BY-NC-SA 2.5 SE (sign.mt) | B | – | – | local research only |
| SSL Lexicon | – | lexical-db | 20,000 items | "CC BY-NC-SA 2.5 SE" | B | – | – | – |
| Matched signs and pseudosigns in STS (Witte et al., 2025) – ASHA figshare suppl… | [asha.figshare.com/articles/online_resourc…](https://asha.figshare.com/articles/online_resource/Matched_signs_and_pseudosigns_in_STS_Witte_et_al_2025_/29318822) | phonology | S4_…xlsx (13.6 MB) + S5_…xlsx: real-sign/pseudosi… | "CC BY-NC 4.0" | B | dump | 13.6 MB (S4) + ? (S5) | ? (none stated; S4 not yet opened) |
| Svenskt teckenspråkslexikon (Stockholm University) | [teckensprakslexikon.su.se/](https://teckensprakslexikon.su.se/) | phonology | home: "about 24,500 signs registered, 21,693 publ… | CC BY-NC-SA 4.0. | B | html-only | metadata ~6 MB as CSV… | email teckenlexikon@ling.su.se for the official CSV/database export + bulk citation-video access; ask whether… |
| STS-Mocap-v1 (HF AnnaKlez/STS-Mocap-v1) | [huggingface.co/datasets/AnnaKlez/STS-Moca…](https://huggingface.co/datasets/AnnaKlez/STS-Mocap-v1) | mocap | 4.1 h sentence translations; single actor; BVH | "licensed under CC BY-NC-SA 4.0 with additional restrictions" (data addendum) | B | – | – | NC research route only |
| EASIER Multilingual Sign Language Wordnet v4.0 (STS links) | [fdr.uni-hamburg.de/record/14190](https://www.fdr.uni-hamburg.de/record/14190) | wordnet | ? (STS count not stated; IDs sts.NNNNN) | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | 6.9 MB (whole record) | internal cross-language concept index only (NC); never redistribute videos |
| Multilingual Sign Languages Wordnet (EASIER) | [sign-lang.uni-hamburg.de/easier/sign-word…](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/) | wordnet | 24,367 links, 14,028 signs, 16,534 synsets overal… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | small (CSV) | out of scope for this file |
| SSLC v1 (Swedish Sign Language Corpus) | [researchdata.se/en/catalogue/dataset/ext0…](https://researchdata.se/en/catalogue/dataset/ext0409-1) | continuous-corpus | – | CC BY-NC (SND) / BY-NC-SA (SU): NC either way. | B | – | – | – |
| Swedish Sign Language as Second Language Corpus | [doi.org/10.5878/786j-n432](https://doi.org/10.5878/786j-n432) | continuous-corpus | 7 clips | CC BY-NC-ND 4.0, restricted | B† | – | – | Skip |
| STS-korpus / Svensk teckenspråkskorpus (SSLC), plus TSTS and SSLC-L2 | [teckensprakskorpus.su.se/](https://teckensprakskorpus.su.se/) | continuous-corpus | SSLC 24 h recorded, 190,000 tokens, 18,800 types,… | CC BY-NC (SND) / BY-NC-SA (SU): NC either way. | B | register | not stated (likely hu… | low priority; request EAF files only if frequency ranking or variant evidence is needed |
| ECHO corpus, Swedish part | [hdl.handle.net/1839/00-0000-0000-0001-489…](https://hdl.handle.net/1839/00-0000-0000-0001-4892-C) | continuous-corpus | 1.5 h per language, 8 signers; 15 STS items incl.… | "CC BY-NC-ND 3.0" (Compendium; UNVERIFIED on TLA, which shows access "Open" but no licence) | B | dump | – | skip (superseded by the SU lexicon) |
| SSL corpus / Swedish SL Corpus | – | continuous-corpus | – | NC (SLDC); CLARIN: CC BY-NC-SA 2.5 | B | – | – | local research only |
| ECHO SSL lexicon (TLA; via CLARIN) | – | lexical-db | – | "Public" (CLARIN) | C† | – | – | check TLA licence |
| Tactile Swedish and Norwegian SL corpora | [doi.org/10.58141/jvas-9681](https://doi.org/10.58141/jvas-9681) | continuous-corpus | 220 mp4 files (both corpora) | "info:eu-repo/semantics/restrictedAccess" plus "Creative Commons Attribution 4.0 International" (covers the metadata); video released only "på begäran efter prövning enl… | C | email/permission | – | ? (video on request after review under OSL; none stated) |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 313 objects | per collection (not opened) | C | register | – | open per-collection licences |

#### Swiss German SL (DSGS) — ISO sgg — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn48 dict 4,745; sgn96 lit 26 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn48.spml) | signwriting | 4,771 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 1.1 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| WMT-SLT 2023 Signsuisse research release (via SWISSUbase) | [wmt-slt.com/data](https://www.wmt-slt.com/data) | isolated-video | 9,044 DSGS items (18,221 total); each with video… | No CC licence: "non-commercial research … distributing the datasets … is not permitted" (B/C). | B | register | – | internal research use only (no redistribution in any form) |
| EASIER Multilingual Sign Language Wordnet v4.0 (DSGS links) | [fdr.uni-hamburg.de/record/14190](https://www.fdr.uni-hamburg.de/record/14190) | wordnet | 1,708 DSGS video lemmas (whole record: 24,367 lin… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | 6.9 MB (whole record,… | use only as an internal cross-language concept index (NC); never redistribute videos |
| Multilingual Sign Languages Wordnet (EASIER) | [sign-lang.uni-hamburg.de/easier/sign-word…](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/) | wordnet | 24,367 links, 14,028 signs, 16,534 synsets overal… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | small (CSV) | out of scope for this file |
| SMILE Continuous DSGS Corpus (LaRS / SWISSUbase) = "DSGS Corpus" | [swissubase.ch/en/catalogue/studies/21056/…](https://www.swissubase.ch/en/catalogue/studies/21056/latest/datasets/3289/4422/contract/usage-license) | continuous-corpus | L1 + L2 phases 1-4, plus restricted subsets; vide… | SWISSUbase: CC BY-NC-SA 4.0. | B | register | – | – |
| WMT-SLT SRF / FocusNews (continuous) | [wmt-slt.com/data;](https://www.wmt-slt.com/data;) | continuous-corpus | SRF 779 episodes of about 30 min; 100.7 GB | No CC licence: "non-commercial research … distributing the datasets … is not permitted" (B/C). | B | register | 100.7 GB | skip (continuous) |
| Content4All news corpus SWISSTXT (SWISSTXT-NEWS, SWISSTXT-WEATHER) | [cvssp.org/data/c4a-news-corpus/](https://www.cvssp.org/data/c4a-news-corpus/) | continuous-corpus | – | "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License." | B | email/permission | – | low priority (continuous interpreter signing; not a lexicon) |
| Swiss German Sign Language Lexicon (Boyes Braem, UZH/HfH) | [linguistik-signlang.uzh.ch](https://linguistik-signlang.uzh.ch) | lexical-db | "9000 signs"; "For 3000 signs: citation form, mea… | "Individual license agreement may be possible" (Compendium; no original page, site offline) | C | email/permission | – | contact UZH (Ebling group) about the HamNoSys/SignWriting fields for 3,000 signs |
| SMILE isolated (Zenodo 7701457; Idiap smile_dsgs) | [zenodo.org/api/records/7701457](https://zenodo.org/api/records/7701457) | ml-isolated | 100 isolated signs; 16 L1 + 22 L2 signers; Kinect… | Restricted, licence None. | C | none | ? (file list hidden) | ask rights holder (Idiap) |
| Signsuisse DSGS/LSF/LIS lexicon: Poses (Zenodo) | [zenodo.org/records/10122622](https://zenodo.org/records/10122622) | pose | – | (none; restricted) | C | email/permission | – | request access |
| Signsuisse (SGB-FSS online lexicon, website) | [sgb-fss.ch/signsuisse/](https://www.sgb-fss.ch/signsuisse/) | dictionary-site | 9,044 DSGS items (of 18,221 trilingual lexical it… | "Ohne entsprechenden Hinweis auf der jeweiligen Seite bedarf die Weiterverwendung von Bild und Text jeglicher Art des schriftlichen Einverständnisses vom Schweizerischen… | C | html-only | ? (UNVERIFIED) | write to SGB-FSS (info-d@sgb-fss.ch) for permission to derive avatar clips (one request covering DSGS, LSF-CH… |

#### Swiss-French SL (LSF-CH) — ISO ssr — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn49 dict 9,938; sgn20 lit 47; sgn22 enc 10 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn20.spml) | signwriting | 9,995 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 5.5 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| WMT-SLT 2023 Signsuisse research release (SWISSUbase) | [wmt-slt.com/data](https://www.wmt-slt.com/data) | isolated-video | 6,423 LSF-CH lexical items (18,221 total) | No CC licence: "non-commercial research … distributing the datasets … is not permitted" (B/C). | B | register | – | internal fitting reference only; shipping derived output still needs SGB-FSS consent |
| ProsIn-SL (Prosody in Interpreting from Swiss French Sign Language), ORTOLANG | [doi.org/10.82270/prosin-sl](https://doi.org/10.82270/prosin-sl) | mocap | about 3 h of LSF-SR dialogue from 15 Deaf partici… | DataCite rights field empty; licence unverified | C | – | – | Read the licence on the ORTOLANG item page in a browser |
| Signsuisse DSGS/LSF/LIS lexicon: Poses (Zenodo) | [zenodo.org/records/10122622](https://zenodo.org/records/10122622) | pose | – | (none; restricted) | C | email/permission | – | request access |
| Signsuisse / SGB-FSS Gebärdensprache-Lexikon | [sgb-fss.ch/signsuisse/](https://www.sgb-fss.ch/signsuisse/) | dictionary-site | ? (no count) | "Ohne entsprechenden Hinweis auf der jeweiligen Seite bedarf die Weiterverwendung von Bild und Text jeglicher Art des schriftlichen Einverständnisses vom Schweizerischen… | C | html-only | – | one request to SGB-FSS (info-d@sgb-fss.ch) covering DSGS, LSF-CH and LIS-SI |

#### Swiss-Italian SL (LIS-SI) — ISO slf — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn50 dict 3 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn50.spml) | signwriting | 3 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| WMT-SLT 2023 Signsuisse research release (SWISSUbase) | [wmt-slt.com/data](https://www.wmt-slt.com/data) | isolated-video | 2,754 LIS-CH lexical items (18,221 total) | No CC licence: "non-commercial research … distributing the datasets … is not permitted" (B/C). | B | register | – | internal fitting reference only; shipping derived output still needs SGB-FSS consent |
| Signsuisse DSGS/LSF/LIS lexicon: Poses (Zenodo) | [zenodo.org/records/10122622](https://zenodo.org/records/10122622) | pose | – | (none; restricted) | C | email/permission | – | request access |
| Signsuisse / SGB-FSS Gebärdensprache-Lexikon | [sgb-fss.ch/signsuisse/](https://www.sgb-fss.ch/signsuisse/) | dictionary-site | ? (no count) | "Ohne entsprechenden Hinweis auf der jeweiligen Seite bedarf die Weiterverwendung von Bild und Text jeglicher Art des schriftlichen Einverständnisses vom Schweizerischen… | C | html-only | – | one request to SGB-FSS (info-d@sgb-fss.ch) covering DSGS, LSF-CH and LIS-SI |

#### Valencian SL (LSCV) — ISO vsv — Western Europe & Nordic

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| FESORD signario; UV LSCV materials | [fesord.org/](https://www.fesord.org/) | dictionary-site | – | © authors; data in private DVC. | C | none | – | – |

#### Albanian SL — ISO sqk — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn82 dict 130 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn82.spml) | signwriting | 130 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Albanian Sign Language Dictionary (ANAD) | [gjshsh.al](https://gjshsh.al) | isolated-video | "1040 signs" | "Download and copying prohibited; individual licence agreement may be possible" | C | html-only | – | request ANAD licence |

#### Bulgarian SL — ISO bqn — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn134 dict 3 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn134.spml) | signwriting | 3 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| "Речник на българския жестов език" (2017 print) | [abcdar.com/magazine/XXXIIA/Dzl_2025_br32A…](https://www.abcdar.com/magazine/XXXIIA/Dzl_2025_br32A_05_Maya_Josifova_Model_web_basiran_rechnik_na_bg_jestov_ezik.pdf) | print | 5,840 sign units | none stated | C† | print-only | – | skip (print only) |

#### Croatian SL — ISO csq — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Moja prva znakovnica (crowdfunded first video dictionary) | [dnevnik.hr/vijesti/hrvatska/pokrenuta-akc…](https://dnevnik.hr/vijesti/hrvatska/pokrenuta-akcija-za-skupljanje-sredstava-za-izradu-moje-prve-znakovnice---870275.html) | isolated-video | – | unknown | C† | – | – | check availability and licence |
| "Moja prva znakovnica" | [api.datacite.org/dois?query=%22croatian%2…](https://api.datacite.org/dois?query=%22croatian%20sign%20language%22) | print | – | – | C† | none | – | – |

#### Czech SL (ČZJ) — ISO cse — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn52 dict 5,863; sgn36 lit 176; sgn37 enc 73 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn36.spml) | signwriting | 6,112 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 2.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| MC-TRISLAN (KKY, Plzeň) | [live.european-language-grid.eu/catalogue_…](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/18324/) | mocap | 18.0 h motion and video, 6 participants, numerica… | CC BY-NC 4.0 (ELG) | B | none | – | email KKY Plzeň (Krňoul or Železný) for the current download location |
| CZJ domain-specific lexicon (train-travel domain) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/czechsldomainspecificlexicon.html) | hamnosys-sigml | 330 signs | n/a | C | none | – | ask holders for HamNoSys transcripts |
| UWB-07-SLR-P (ELRA-S0286) | [catalog.elra.info/en-us/repository/browse…](https://catalog.elra.info/en-us/repository/browse/ELRA-S0286/) | ml-isolated | "378 signs", "5 repetitions … from 3 different vi… | "Non Commercial Use - ELRA END USER" / "Commercial Use - ELRA VAR" | C | email/permission | 20 GB | purchase from ELRA only if needed |
| Czech SL Corpus for Recognition - Amateur Signer (ELRA-S0285) | [catalogue.elra.info/en-us/repository/sear…](https://catalogue.elra.info/en-us/repository/search/?q=sign+language) | ml-isolated | 25 signs | "Non Commercial Use - ELRA END USER"; EUR 125 | C† | email/permission | – | – |
| CSE MoCap 2016 / 2020 datasets (KKY) | [sign-lang.uni-hamburg.de/lrec/data/mocapd…](https://www.sign-lang.uni-hamburg.de/lrec/data/mocapdatasetofcse.html) | mocap | – | none stated | C | none | – | email KKY Plzeň |
| CSE MoCap Dictionary Corpus (2016) | [sign-lang.uni-hamburg.de/lrec/data/csemoc…](https://www.sign-lang.uni-hamburg.de/lrec/data/csemocapdictionarycorpus.html) | mocap | – | none stated | C | – | – | ask holders for licence and access |
| Dictio (Masaryk Univ.) | [dictio.info/](https://www.dictio.info/) | dictionary-site | ČZJ 12,514 entries | footer: "© 2007-2026 Masaryk University / All rights reserved"; Compendium: "information not available" | C | html-only | – | ask Dictio (Masaryk Univ.) for permission |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 62 objects | per collection (not opened) | C | register | – | open per-collection licences |

#### Estonian SL — ISO eso — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn109 dict 0 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn109.spml) | signwriting | 0 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Digital Bible Library Estonian SL entry | [thedigitalbiblelibrary.org/](https://thedigitalbiblelibrary.org/) | continuous-corpus | – | "Creative Commons - Attribution-ShareAlike [CC BY-SA]", © Deaf Bible Society | A | – | – | – |
| EKI EVK dictionary (META-SHARE record, Univ. Tartu) | [metashare.ut.ee/repository/browse/the-onl…](https://metashare.ut.ee/repository/browse/the-online-dictionary-of-the-estonian-sign-language-estonian/1520ec3fa0d411eebb4773db10791bcfacf23d7c5141477199369c4a4e5ab13e/) | lexical-db | "over 4000 entry words" | "CLARIN ACA"; "Available - Restricted Use"; "Academic - Non Commercial Use" | B | register | – | request the CLARIN ACA download for research and fitting; do not redistribute clips |
| EKI "Eesti viipekeele sõnastik" (website) | [arhiiv.eki.ee/dict/viipekeel/](https://arhiiv.eki.ee/dict/viipekeel/) | dictionary-site | "umbes 5000 artiklit ja 6700 tähendustega seotud… | site: only "© Eesti Keele Instituut" | B | html-only | – | use the META-SHARE CLARIN ACA route (research/fit only) |

#### Greek SL — ISO gss — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn61 dict 26 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn61.spml) | signwriting | 26 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| UEA CWASA / JASigning example pages (SiGML) | [vh.cmp.uea.ac.uk/index.php/JASigning_Cond…](https://vh.cmp.uea.ac.uk/index.php/JASigning_Conditions) | hamnosys-sigml | – | Example pages CC BY-SA; bundled notation files BY-ND-like (C). | A | – | – | use example-page SiGML; do not adapt bundled notation files |
| Wikisigns Ελληνική νοηματική γλώσσα | [wikisigns.org/list/gr/gsl](https://www.wikisigns.org/list/gr/gsl) | isolated-video | 100 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | <5 MB text (all Wikis… | take gloss lists/metadata only; no video |
| Greek Elementary SL 3D pose trajectories (Zenodo 6645581) | [doi.org/10.5281/zenodo.6645581](https://doi.org/10.5281/zenodo.6645581) | pose | 2.4 GB; companion 16.2 GB | CC BY 4.0 | A | dump | 2.4 GB; 16.2 GB | verify how trajectories were produced before use |
| GSL Dataset (Adaloglou et al.) | [zenodo.org/record/3941811](https://zenodo.org/record/3941811) | continuous-corpus | "10,290 sentence instances, 40,785 gloss instance… | "Creative Commons Attribution 4.0 International" (cc-by-4.0 on both versions) | A | dump | 134.8 GB total (RGB z… | pull supplementary.zip and GSL_split.zip first, then RGB-only zips for gloss-segment fitting |
| GSLW - Greek SL in the Wild | [zenodo.org/records/8047231](https://zenodo.org/records/8047231) | continuous-corpus | 1,736 smartphone test videos, gloss- and sentence… | "Creative Commons Attribution 4.0 International", Open | A | dump | 23.0 GB | – |
| The Greek Sign Language (GSL) Dataset (Zenodo) | [zenodo.org/records/4756317](https://zenodo.org/records/4756317) | continuous-corpus | ? (continuous + isolated video) | cc-by-4.0 | A | dump | 134.8 GB | sample selectively (too large) |
| Sign Language Narrations by Virtual Humans in GSL (Zenodo 8073770) | [zenodo.org/api/records/8073770](https://zenodo.org/api/records/8073770) | other | – | CC BY 4.0 | A | dump | 618 MB | skip (low value) |
| Dicta-Sign lexicon (CLARIN:EL lcr/805) | [inventory.clarin.gr/catalogue_backend/api…](https://inventory.clarin.gr/catalogue_backend/api/registry/metadatarecord/805/) | lexical-db | 1,000 entries (multilingual) | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | html-only | – | skip; also taints 3DZSignDB-derived entries |
| Dicta-Sign Lexicon | [sign-lang.uni-hamburg.de/dicta-sign/porta…](https://www.sign-lang.uni-hamburg.de/dicta-sign/portal/) | lexical-db | 1000 signs per language | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | email/permission | – | request researcher licence agreement |
| Dicta-Sign Lexicon (GSL part) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictasignlex.html) | hamnosys-sigml | about 1,000 signs per language with HamNoSys | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | email/permission | – | request a researcher licence |
| Multilingual Sign Languages Wordnet (EASIER) | [sign-lang.uni-hamburg.de/easier/sign-word…](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/) | wordnet | 24,367 links, 14,028 signs, 16,534 synsets overal… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | small (CSV) | use gss TAB link data (videos keep source terms) |
| POLYTROPON Parallel Corpus (ILSP) | [sign.ilsp.gr/signilsp-site/index.php/en/p…](https://sign.ilsp.gr/signilsp-site/index.php/en/ppc/) | continuous-corpus | 3,600 utterances × 3 repetitions, 1 signer; 3,500… | site: "publicly available under CC-BY-NC-SA" (no version); Compendium: "CC BY-NC-SA 4.0" | B | register | – | register with ILSP for video and ELAN files |
| Dicta-Sign Corpus (GSL part) | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dictasign.html) | continuous-corpus | 25 h across 4 languages | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | email/permission | – | request a researcher licence |
| Dicta-Sign-GSL-v2 | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dictasigngslv2.html) | continuous-corpus | 5.5 h, 16 participants | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | – | – | – |
| Polytropon (corpus) | – | continuous-corpus | – | NC (SLDC; exact text not quoted) | B | – | – | local research only |
| Dicta-Sign-GSL-v2 (corpus) | – | continuous-corpus | – | CLARIN:EL/ELG: CC BY-NC-ND 4.0 (conflicts with Compendium "individual licence"); browse-only; C to derive. | B | – | – | ask authors |
| POLYTROPON Lexicon (SLDC) | – | lexical-db | 8616 signs | Individual license agreement may be possible | C | email/permission | – | request individual licence agreement |
| NOEMA+ (via CLARIN) | – | lexical-db | – | "Freely accessible" (CLARIN) | C† | – | – | check licence; compare with SLDC NOEMA (restricted) |
| POLYTROPON Lexicon (ILSP) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/polytroponlex.html) | phonology | "8616 signs" | "Individual license agreement may be possible" | C | email/permission | – | request an individual licence from ILSP |
| NOEMA (ILSP) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/noema.html) | hamnosys-sigml | "3000 signs" | "Restricted access requires individual license agreement" | C | email/permission | – | request an individual licence from ILSP |
| SL-ReDu corpus | [sl-redu.e-ce.uth.gr/corpus/](https://sl-redu.e-ce.uth.gr/corpus/) | continuous-corpus | 369 signs, 22,632 videos, 21 signers, 25 h 15 min… | none (citation request only) | C | dump | isolated_GSL_corpus.z… | ask rights holder |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 43 objects | per collection (not opened) | C | register | – | identify language |
| OSF v4sbn "GSL Multimodal Annotation" | [api.osf.io/v2/nodes/?filter%5Btitle%5D%5B…](https://api.osf.io/v2/nodes/?filter%5Btitle%5D%5Bicontains%5D=sign%20language) | other | 9,922-B CSV | no licence | C | – | 9,922 B | – |

#### Hungarian SL — ISO hsh — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn122 dict 67; sgn123 lit 1 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn122.spml) | signwriting | 68 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 4 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| Hallatlan Dictionary | [hallatlan.hu/c/jelek/](https://www.hallatlan.hu/c/jelek/) | isolated-video | "approximately 1500 signs"; two angles + handshap… | "© 2026 Hallatlan Alapítvány. Minden jog fenntartva." copying/republishing sign videos without prior written permission prohibited | C | html-only | – | request written permission from Hallatlan Alapítvány |
| JEL-SZÓ-TÁR (multilinguanet.hu) | [multilinguanet.hu/](http://www.multilinguanet.hu/) | dictionary-site | – | unverified | C† | none | – | verify (host did not respond to HEAD) |
| HSL Corpus / Hungarian dictionaries | [api.datacite.org/dois?query=%22hungarian%…](https://api.datacite.org/dois?query=%22hungarian%20sign%20language%22) | continuous-corpus | – | – | C | – | – | – |
| HSL Corpus (SIGNificant Chance) | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/hslcorpus.html) | continuous-corpus | "1750 hours recorded, 209 types annotated" | n/a | C | none | – | skip unless access is offered |

#### Latvian SL — ISO lsl — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn108 dict 1 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn108.spml) | signwriting | 1 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |

#### Lithuanian SL — ISO lls — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn107 dict 0 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn107.spml) | signwriting | 0 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| 5-volume print dictionary (linked to Vilnius College Gestotyros centras) | [vle.lt/straipsnis/lietuviu-gestu-kalba/](https://www.vle.lt/straipsnis/lietuviu-gestu-kalba/) | print | about 3,000 lexical items; 5 volumes, 1998–2003 | none stated | C† | print-only | – | skip (print only; no online version) |

#### Macedonian SL — ISO none — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Commons "Videos of Macedonian Sign Language" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 19 files | per file | A | api | – | check per-file licence then ingest |

#### Polish SL (PJM) — ISO pso — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn19 dict 2,144; sgn38 lit 5; sgn39 enc 1 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn19.spml) | signwriting | 2,150 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.6 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| PSL Alphabet Landmark Dataset | [zenodo.org/api/records/19538109](https://zenodo.org/api/records/19538109) | fingerspelling-ha… | MediaPipe hand landmarks for fingerspelling (21 l… | "cc-by-4.0", open | A | dump | dataset.csv 135.8 MB | optional: fingerspelling handshape priors |
| PJM Corpus | – | continuous-corpus | ? (part of recordings open) | "CC BY-SA 4.0 … Open access to a part of the recordings" | A | – | – | verify open part and licence |
| Multilingual Sign Languages Wordnet (EASIER) | [sign-lang.uni-hamburg.de/easier/sign-word…](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/) | wordnet | 24,367 links, 14,028 signs, 16,534 synsets overal… | Record CC BY 4.0 vs README "links … CC BY-NC-SA 4.0": take the stricter. | B | dump | small (CSV) | ingest pso TAB files (with sgn19) |
| CDPSL - Corpus-based Dictionary of PJM (Słownik PJM) | [slownikpjm.uw.edu.pl/en](https://www.slownikpjm.uw.edu.pl/en) | phonology | "3476 signs with definitions for 6464 meanings" | Compendium: "information not available"; site: no licence or terms text | C | html-only | – | ask UW PJM Lab (Rutkowski) for a licence to the HamNoSys and parameter fields |
| Korpus PJM | [korpuspjm.uw.edu.pl/en/pages/how-to-use.h…](https://www.korpuspjm.uw.edu.pl/en/pages/how-to-use.html) | continuous-corpus | – | Site ©; only Compendium says CC BY-SA 4.0. | C | – | – | email UW PJM Lab (CC BY-SA claim plus the HamNoSys tier) |
| Korpus PJM (Univ. Warsaw) | [korpuspjm.uw.edu.pl/en](https://www.korpuspjm.uw.edu.pl/en) | continuous-corpus | "565 hours recorded, 687971 tokens and 15384 type… | Site ©; only Compendium says CC BY-SA 4.0. | C | register | – | email editorial team (j.filipczak@uw.edu.pl) to confirm Open Repository is CC BY-SA 4.0 and request .eaf acce… |

#### Romanian SL — ISO rms — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn132 dict 38; sgn138 lit 0; sgn139 enc 0 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn132.spml) | signwriting | 38 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| SooSL Web Romanian SL dictionary | [api-web.soosl.net/projects/list](https://api-web.soosl.net/projects/list) | dictionary-site | 42 signs | SooSL ToU: CC BY-NC-ND 4.0 + no-copy clause; ask dictionary owner via websoosl@sil.org. | C | html-only | – | – |

#### Russian SL — ISO rsl — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn88 dict 1,435; sgn141 lit 0; sgn142 enc 0 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn88.spml) | signwriting | 1,435 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.3 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Power (2021) "Data.txt" (figshare 15170700) | [doi.org/10.6084/m9.figshare.15170700](https://doi.org/10.6084/m9.figshare.15170700) | phonology | 158 rows (doculect RUS, two Russian signers) of 4… | CC BY 4.0 HamNoSys/phonology transcriptions. | A | dump | 55,874 B (whole file) | – |
| "Sign languages of the Soviet Union" (Justin Power, Vadim Kimmelman), OSF agnwj… | [osf.io/agnwj/](https://osf.io/agnwj/) | hamnosys-sigml | 714 rows (2 signers), within 229 concepts | CC BY 4.0 HamNoSys/phonology transcriptions. | A | dump | xlsx 272,324 B (under… | ? (seed recommendation is stated for Georgian/Tajik only) |
| Slovo on Kaggle (kapitanov/slovo, the author's own upload) | [kaggle.com/api/v1/datasets/view/kapitanov…](https://www.kaggle.com/api/v1/datasets/view/kapitanov/slovo) | ml-isolated | – | Author upload "CC BY-SA 4.0", but upstream PDF calls it a BY-SA variant, "not a Creative Commons license"; no publicity/portrayal rights. | A | dump | 15,871,980,731 B | – |
| Slovo (SberDevices / SaluteDevices) | [github.com/hukenovs/slovo](https://github.com/hukenovs/slovo) | ml-isolated | 1,000 classes × 20 = 20,400 videos, 194 signers,… | Author upload "CC BY-SA 4.0", but upstream PDF calls it a BY-SA variant, "not a Creative Commons license"; no publicity/portrayal rights. | A | dump | trimmed ~16 GB; 360p… | first RSL ingest: start with the 1.2 GB MediaPipe JSON (no faces), then 360p video |
| Slovo (Kaggle) | [kaggle.com/datasets/kapitanov/slovo](https://www.kaggle.com/datasets/kapitanov/slovo) | ml-isolated | – | Author upload "CC BY-SA 4.0", but upstream PDF calls it a BY-SA variant, "not a Creative Commons license"; no publicity/portrayal rights. | A | dump | 15.9 GB | – |
| RSL kinematics, Moscow subcorpus (Kimmelman 2026) | [zenodo.org/api/records/22347680](https://zenodo.org/api/records/22347680) | pose | manual and non-manual kinematics data plus R code… | "cc-by-4.0", open | A | dump | RSL_kinematics.zip 10… | – |
| Bukva (RSL fingerspelling alphabet) | [github.com/ai-forever/bukva](https://github.com/ai-forever/bukva) | fingerspelling-ha… | 3,757 videos (3,097 train / 660 test), about 4 h | same "variant of Creative Commons Attribution-ShareAlike 4.0" licence (license/en_us.pdf) | A | dump | about 27 GB | – |
| "Russian Sign Language Database for Clinical Use: Data and Annotation Peculiari… | [doi.org/10.25205/1818-7935-2022-20-3-90-1…](https://doi.org/10.25205/1818-7935-2022-20-3-90-108) | other | – | CC BY per OpenAlex (paper) | A† | – | – | ? (data location not found) |
| "Корпус жестов в письменной форме" (written-notation corpus of RSL signs) | [doi.org/10.25559/sitito.14.201802.426-435](https://doi.org/10.25559/sitito.14.201802.426-435) | other | – | CC BY (paper) | A† | – | – | ? (data location not found) |
| HF Arseniy-Polyakov/parallel_corpus_russian_rsl_glosses | [huggingface.co/api/datasets/Arseniy-Polya…](https://huggingface.co/api/datasets/Arseniy-Polyakov/parallel_corpus_russian_rsl_glosses) | other | text Russian↔RSL-gloss corpus | tagged "MIT" | A† | – | – | – |
| Slovo (Kaggle kapitanov/slovo) | – | other | – | Author upload "CC BY-SA 4.0", but upstream PDF calls it a BY-SA variant, "not a Creative Commons license"; no publicity/portrayal rights. | A | dump | 15.9 GB | verify original licence at source |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 16 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| Logos (SberAI, EMNLP 2025) | [github.com/ai-forever/logos](https://github.com/ai-forever/logos) | ml-isolated | 199,668 videos, 2,863 glosses in 2,004 VSSign cla… | "The dataset is released to universities and research institutes for academic research purposes only." (repo Apache-2.0 covers code only) | B | email/permission | – | request by email (vision_rnd_ml@sberbank.ru) |
| HeSLEx (RSL/DGS heritage signers), OSF | [osf.io/kawge/](https://osf.io/kawge/) | other | 40 videos (task instructions, not lexical signs) | "CC-BY Attribution-NonCommercial 4.0 International" | B† | – | – | ? (none stated) |
| Garage RSL variation DB | [rsl-research-explore.garagemca.org/](https://rsl-research-explore.garagemca.org/) | lexical-db | >19,000 videos | "open to all" + citation request; no named licence. | C | html-only | – | ask rights holder (Garage Museum) |
| RuSLED dictionary (2010) | [sign-lang.uni-hamburg.de/lrec/data/rusled…](https://www.sign-lang.uni-hamburg.de/lrec/data/rusleddictionary.html) | lexical-db | – | none stated | C | – | – | – |
| RuSLED motion capture data (2010) | [sign-lang.uni-hamburg.de/lrec/data/rusled…](https://www.sign-lang.uni-hamburg.de/lrec/data/rusledmotioncapturedata.html) | mocap | – | none stated | C | – | – | – |
| AjnoEO/2dd_rsl (online bilateral RSL dictionary at 2dd.artboy.ru) | [github.com/AjnoEO/2dd_rsl](https://github.com/AjnoEO/2dd_rsl) | dictionary-site | – | code licensed MIT; content licence unknown | C | – | – | Ask first (Tier C); notation lead |
| RSL Corpus (rsl.nstu.ru) | [rsl.nstu.ru/](https://rsl.nstu.ru/) | continuous-corpus | 240 videotexts, 5 h 28 min | ? (licence text unknown; registration still closed) | C | register | – | skip for now (registration suspended) |
| Russian Sign Language conversations, Data Center for the Humanities, Cologne | [doi.org/10.18716/dch/a.00000028](https://doi.org/10.18716/dch/a.00000028) | continuous-corpus | about 3 h of dialogue from 5 signers | DataCite rights field empty | C | – | – | Ask first (Tier C; no action stated in notes) |
| RSL corpus | – | continuous-corpus | – | RSL corpus licence (custom) | C | – | – | read licence |
| TheRuSLan (SPIIRAS, LREC 2020) | [sign-lang.uni-hamburg.de/lrec/data/therus…](https://www.sign-lang.uni-hamburg.de/lrec/data/theruslan.html) | other | Kinect 2.0 FullHD plus depth; supermarket domain | none stated | C | – | – | ask SPIIRAS for licence and access |

#### Slovak SL (SPJ) — ISO svk — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn89 dict 25 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn89.spml) | signwriting | 25 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| posunky.sk (Slovak SL dictionary) | [posunky.sk/](https://posunky.sk/) | dictionary-site | – | © Snepeda. | C | html-only | – | ask rights holder (Snepeda) |
| Dictio (Masaryk Univ.) | [dictio.info/](https://www.dictio.info/) | dictionary-site | SPJ 4,809 entries | footer: "© 2007-2026 Masaryk University / All rights reserved"; Compendium: "information not available" | C | html-only | – | ask Dictio (Masaryk Univ.) for permission |

#### Turkish SL (TİD) — ISO tsm — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn90 dict 4 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn90.spml) | signwriting | 4 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| BosphorusSign22k | [arxiv.org/pdf/2004.01283v2](https://arxiv.org/pdf/2004.01283v2) | ml-isolated | – | EULA, research only (B/C). | B | email/permission | – | submit an EULA to the authors |
| AUTSL (ChaLearn / Codalab) | [chalearnlap.cvc.uab.cat/dataset/40/descri…](https://chalearnlap.cvc.uab.cat/dataset/40/description/) | ml-isolated | – | ? (T&C behind Codalab: "All files are encrypted!") | B | register | – | – |
| AUTSL (Ankara Univ.) | [cvml.ankara.edu.tr/datasets/](https://cvml.ankara.edu.tr/datasets/) | ml-isolated | 226 signs, 38,336 isolated samples, 43 signers; R… | "AUTSL dataset is created and released for academic and research purposes only." "Commercial use of the dataset is not allowed." | B | register | – | register on ChaLearn/Codalab for decryption keys (research only) |
| BosphorusSign22k (Boğaziçi PILAB) | [arxiv.org/abs/2004.01283v2](https://arxiv.org/abs/2004.01283v2) | ml-isolated | – | EULA, research only (B/C). | B | – | – | verify licence with Boğaziçi PILAB |
| BosphorusSign22k (sign.mt row) | – | ml-isolated | – | EULA, research only (B/C). | B | email/permission | – | request research access |
| AUTSL (OpenHands upstream) | – | ml-isolated | – | Pose subset inside OpenHands Zenodo 6674324: record CC BY 4.0, but upstream terms (C-UDA, Codalab, BU, NC) are not overridden. | B | – | – | – |
| AUTSL poses (inside OpenHands Zenodo 6674324) | [zenodo.org/records/6674324](https://zenodo.org/records/6674324) | pose | – | Pose subset inside OpenHands Zenodo 6674324: record CC BY 4.0, but upstream terms (C-UDA, Codalab, BU, NC) are not overridden. | B | dump | – | do not treat the record licence as covering it |
| TurkSign446 (Zenodo 17267294) | [zenodo.org/api/records/17267294](https://zenodo.org/api/records/17267294) | ml-isolated | 0 visible files | Restricted; nominal CC BY 4.0, 0 visible files. | C | none | – | request access on Zenodo |
| AUTSL | – | ml-isolated | 226 | "Codalab" (competition terms, sign.mt) | C† | – | – | verify competition terms |
| TİD Güncel Sözlük (tidsozluk.aile.gov.tr) | [web.archive.org/web/20250516040232/https:…](https://web.archive.org/web/20250516040232/https://tidsozluk.aile.gov.tr/) | dictionary-site | "Güncel Türk İşaret Dili Sözlüğü en fazla sıklığa… | none on the archived homepage (no telif, lisans or © strings) | C | none | – | ask rights holder |
| Boğaziçi TİD dictionary | [cmpe.boun.edu.tr/tid/](https://www.cmpe.boun.edu.tr/tid/) | dictionary-site | "1355 signs and phrases" | n/a | C | none | – | verify licence (site unreachable) |
| Contemporary TİD Dictionary (Güncel Türk İşaret Dili Sözlüğü, Ministry of Famil… | [tidsozluk.aile.gov.tr/](https://tidsozluk.aile.gov.tr/) | dictionary-site | "2000 concepts, 11428 videos of signs" | Compendium: "information not available" | C | html-only | – | verify licence (site unreachable) |
| Corpus Kubus | [sign-lang.uni-hamburg.de/lrec/data/corpus…](https://www.sign-lang.uni-hamburg.de/lrec/data/corpuskubus.html) | continuous-corpus | – | none stated | C | – | – | ask holders for licence and access |
| VIDI Sign Space Corpus | [sign-lang.uni-hamburg.de/lrec/language/ts…](https://www.sign-lang.uni-hamburg.de/lrec/language/tsm.html) | continuous-corpus | – | none stated | C | – | – | ask holders for licence and access |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 1,851 objects | per collection (not opened) | C | register | – | open per-collection licences |

#### Ukrainian SL — ISO ukl — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn130 dict 37 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn130.spml) | signwriting | 37 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| "Конфігурація…" (handshape configurations in Ukrainian SL) | [doi.org/10.6084/m9.figshare.7699628.v2](https://doi.org/10.6084/m9.figshare.7699628.v2) | phonology | counts 39–40 handshape configurations | article PDF CC BY 4.0 | A† | – | – | Use as a phonology (handshape) inventory reference |
| Ukrainian Dactyls corpus | [zenodo.org/api/records/17618406](https://zenodo.org/api/records/17618406) | fingerspelling-ha… | 33 letter classes; train 1,951 / val 528 / test 5… | "cc-by-4.0", open | A | dump | 9.67 GB | ingest as fingerspelling source (first ingest for UKL) |
| Dictio (Masaryk Univ.) | [dictio.info/](https://www.dictio.info/) | dictionary-site | UkSL / УЖМ 71 entries | footer: "© 2007-2026 Masaryk University / All rights reserved"; Compendium: "information not available" | C | html-only | – | ask Dictio (Masaryk Univ.) for permission |
| "Our stories" UkSL conversations (Univ. Cologne DCH) | [dch.phil-fak.uni-koeln.de/bestaende/daten…](https://dch.phil-fak.uni-koeln.de/bestaende/datenarchivierung/ukrainian-sign-language) | continuous-corpus | 6 dialogues, about 3 h, 7 signers, .mts video, EL… | Closed Access, 18 GB. | C | email/permission | 18 GB (archival packa… | ask Cologne DCH for access |
| "Our stories" UkSL (Cologne DCH) | [api.datacite.org/dois/10.18716/dch/a.0000…](https://api.datacite.org/dois/10.18716/dch/a.00000015) | other | – | Closed Access, 18 GB. | C | none | 18 GB | ask rights holder |

#### Yugoslavian SL: Serbian and Slovene varieties — ISO ysl — Central & Eastern Europe

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn74 dict 3,799; sgn148 lit 16; sgn149 enc 0 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn74.spml) | signwriting | 3,815 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 1.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Slovar SZJ (ZDGNS) | [szj.si/](https://www.szj.si/) | isolated-video | information not available | "2026 © ZDGNS. Vse pravice pridržane." (all rights reserved) | C | html-only | – | ask ZDGNS for szj.si videos |
| SIGNOR corpus | [lojze.lugos.si/signor/en.html](http://lojze.lugos.si/signor/en.html) | continuous-corpus | "40 hours recorded, 30335 tokens and 1976 types a… | n/a | C | none | – | ask holders (access temporarily unavailable) |

#### Armenian SL — ISO aen — Caucasus & Central Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Commons "Videos of Armenian Sign Language" (Lingua Libre) | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_Armenian_Sign_Language) | isolated-video | 1,211 files (webm) | "CC BY-SA 4.0" | A | api | not measured | ingest via MediaWiki API with per-file attribution |

#### Azerbaijani SL — ISO none — Caucasus & Central Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| AzSLD (ADA University) | [zenodo.org/doi/10.5281/zenodo.13627300](https://zenodo.org/doi/10.5281/zenodo.13627300) | ml-isolated | fingerspelling (10,864 static images + 3,587 dyna… | "Creative Commons Attribution 4.0 International", Open | A | dump | v4: Words_100 1.1 GB,… | first ingest = AzSLD_Words_200.zip (1.4 GB); then Words_100, Fingerspelling |
| AzSLD (Zenodo) | [zenodo.org/records/14222948](https://zenodo.org/records/14222948) | other | – | cc-by-4.0 | A | dump | 46.9 GB | verify contents |

#### Georgian SL — ISO none — Caucasus & Central Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| "Sign languages of the Soviet Union" (Justin Power, Vadim Kimmelman), OSF agnwj… | [osf.io/agnwj/](https://osf.io/agnwj/) | hamnosys-sigml | 523 rows (2 signers), within 229 concepts | CC BY 4.0 HamNoSys/phonology transcriptions. | A | dump | xlsx 272,324 B (under… | HamNoSys -> SignDesc seed for Georgian SL (first open source) |
| SignWiki Georgia | [ge.signwiki.org](https://ge.signwiki.org) | dictionary-site | Compendium: "8296 entries"; MediaWiki API: 8,463… | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | api | – | skip; ask Georgian deaf union and FAD for permission if wanted |

#### Kazakh-Russian SL (K-RSL) — ISO none — Caucasus & Central Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| K-RSL (sign.mt row) | – | ml-isolated | 600 | "Attribution" (sign.mt) | A† | – | – | verify licence at source |
| QazSL fingerspelling | [zenodo.org/api/records/22830162](https://zenodo.org/api/records/22830162) | fingerspelling-ha… | – | "cc-by-4.0", open | A | dump | ksl_dataset_png.zip 1… | first ingest for Kazakh (fingerspelling only) |
| KRSL20 | [krslproject.github.io/krsl20/](https://krslproject.github.io/krsl20/) | ml-isolated | 20 signs, 5,200 isolated videos (cut from sentenc… | No licence on any repo (C/D). | C | email/permission | – | ask NU/K-SLARS for a licence |
| KRSL-OnlineSchool | [krslproject.github.io/online-school/](https://krslproject.github.io/online-school/) | continuous-corpus | 890 h of interpreted school broadcasts, about 300… | No licence on any repo (C/D). | C | – | >250 GB | skip |
| FluentSigners-50 | [live.european-language-grid.eu/catalogue_…](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/22594/) | other | – | ELG still says CC BY 4.0 but Zenodo is restricted / Closed Access: conflict. | C | none | – | email NU Kazakhstan (FluentSigners-50 licence state) |
| KRSL20 / krslproject GitHub repos | [github.com/krslproject](https://github.com/krslproject) | other | – | No licence on any repo (C/D). | C | – | – | ask rights holder |

#### Tajik SL — ISO none — Caucasus & Central Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Power (2021) "Data.txt" (figshare 15170700) | [doi.org/10.6084/m9.figshare.15170700](https://doi.org/10.6084/m9.figshare.15170700) | phonology | 254 rows (doculect DUS) of 474 rows; 50 concepts | CC BY 4.0 HamNoSys/phonology transcriptions. | A | dump | 55,874 B (whole file) | ? (not stated; CEE-10 resolved as Tier A) |
| "Sign languages of the Soviet Union" (Justin Power, Vadim Kimmelman), OSF agnwj… | [osf.io/agnwj/](https://osf.io/agnwj/) | hamnosys-sigml | 571 rows (2 signers), within 229 concepts | CC BY 4.0 HamNoSys/phonology transcriptions. | A | dump | xlsx 272,324 B (under… | HamNoSys -> SignDesc seed for Tajik SL (first open source) |

#### Afghan SL — ISO afg — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn106 dict 14 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn106.spml) | signwriting | 14 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Power (2021) "Data.txt" (figshare 15170700) | [doi.org/10.6084/m9.figshare.15170700](https://doi.org/10.6084/m9.figshare.15170700) | phonology | 62 rows (AfghanSL, aggregated dataset) of 474 row… | CC BY 4.0 HamNoSys/phonology transcriptions. | A | dump | 55,874 B (whole file) | – |
| ANAD dictionary 2008 (ACKU scan) | [doi.org/10.29171/acku_hv2476_5_alif77_fay…](https://doi.org/10.29171/acku_hv2476_5_alif77_fay4_1387) | print | unknown | none stated | C | print-only | unknown (Google Drive… | use as a gloss reference only after permission |
| فرهنگ زبان اشاره افغانی = Afghan sign language dictionary (2008) | [doi.org/10.29171/acku_hv2476_5_alif77_fay…](https://doi.org/10.29171/acku_hv2476_5_alif77_fay4_1387) | print | – | none stated (print scan, no licence) | C | – | – | ? (new Tier C lexicon lead; no action stated) |
| SERVE Afghanistan trilingual (Dari, Pashto, English) dictionary of Afghan SL | – | print | – | – | C | print-only | – | – |

#### Algerian Jewish SL (Ghardaia) — ISO ajs — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Lanesman (2016) AJSL book (OAPEN) | [api.crossref.org/works/10.26530/oapen_588…](https://api.crossref.org/works/10.26530/oapen_588714) | print | – | only a generic OAPEN rights link; OAPEN footer CC BY covers the website, not the book | A† | none | – | none (exhausted) |
| AJSL Dictionary (Univ. of Haifa) | [signlab.haifa.ac.il/2013/10/15/ajsl-1](https://signlab.haifa.ac.il/2013/10/15/ajsl-1) | dictionary-site | 470 signs per Compendium; lab page says about 500… | "information not available" | C | html-only | – | request from the Haifa lab |
| Lanesman (2016) "Algerian Jewish Sign Language: its emergence and survival" (Is… | [library.oapen.org/handle/20.500.12657/329…](https://library.oapen.org/handle/20.500.12657/32925) | print | reference grammar + sociolinguistic description (… | book license not checked (open-access PDF on OAPEN) | C† | dump | – | reference only (not a dataset) |

#### Algerian SL — ISO asp — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| 3DZSignDB SiGML (Zenodo 15020376, v0.1, 2025-03-13) | [zenodo.org/records/15020376](https://zenodo.org/records/15020376) | hamnosys-sigml | 417–419 signs | Three licence signals (Zenodo CC BY / repo GPL-3.0 / README CC BY-NC); ~300 of 417 signs adapted from Dicta-Sign. Provenance hold. | B | dump | 23,161,444 B (one fil… | email Zerrouki (t.zerrouki@univ-bouira.dz) on which licence applies and Dicta-Sign clearance; exclude Dicta-S… |
| linuxscout/algerianSignLanguage-avatar (GitHub source repo of 3DZSignDB) | [github.com/linuxscout/algerianSignLanguag…](https://github.com/linuxscout/algerianSignLanguage-avatar) | hamnosys-sigml | – | Three licence signals (Zenodo CC BY / repo GPL-3.0 / README CC BY-NC); ~300 of 417 signs adapted from Dicta-Sign. Provenance hold. | B | dump | – | hold pending authors (as 3DZSignDB) |
| VDzSL (Zenodo 18209839; Data in Brief 112551) | [europepmc.org/article/PMC/PMC12925472](https://europepmc.org/article/PMC/PMC12925472) | isolated-video | 8,300 synthetic videos, 415 signs | Synthetic avatar renders of 3DZSignDB; inherits its provenance hold. | B | – | – | hold with 3DZSignDB (inherits its B/provenance hold) |
| VDzSL (Zenodo 18209839) | [zenodo.org/api/records/18209839](https://zenodo.org/api/records/18209839) | isolated-video | "8,300 video files comprising 415 unique common d… | Synthetic avatar renders of 3DZSignDB; inherits its provenance hold. | B | dump | 1,230 MB | use only for visual QA |

#### Egyptian SL — ISO esl — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn84 dict 111 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn84.spml) | signwriting | 111 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Mendeley "Egyptian Sign Language" (39tbt2jd7r, Ahmed Métwalli, AASTMT) | [data.mendeley.com/public-api/datasets/39t…](https://data.mendeley.com/public-api/datasets/39tbt2jd7r) | pose | description says 55 words, 400+ videos (720p/30 f… | "CC BY 4.0" | A | dump | 2.9 MB | – |
| OSF eypg9 "Egyptian Sign Language Handshape Phonology" | [api.osf.io/v2/nodes/?filter%5Btitle%5D%5B…](https://api.osf.io/v2/nodes/?filter%5Btitle%5D%5Bicontains%5D=sign%20language) | phonology | ? (poster/PDF) | no licence | C | – | – | – |

#### Emirati SL — ISO none — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ESL127 (UAE University) | [research.uaeu.ac.ae/en/publications/esl12…](https://research.uaeu.ac.ae/en/publications/esl127-emirate-sign-language-datasets-and-e-dictionary-version-20/) | isolated-video | 127 signs + 50 sentences; 708 Azure Kinect DK rec… | "Not stated" | C | – | – | email the UAEU authors |
| ZHO UAE Sign Language Dictionary (za.gov.ae) | [za.gov.ae/](https://www.za.gov.ae/) | dictionary-site | 1,244 entries (per scraper / sub-researcher) | ZHO terms forbid systematic retrieval without written permission. | C | html-only | unknown | permission request to Zayed Higher Organization; do not use esl-platform (D) |
| ZHO Emirati Sign Language Dictionary | [zho.gov.ae/Sign-Language-Dictionary](https://www.zho.gov.ae/Sign-Language-Dictionary) | dictionary-site | about 5,000 words planned, compiled in phases | ZHO terms forbid systematic retrieval without written permission. | C | none | – | – |

#### Iraqi SL — ISO none — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ArSL-Wear20 (Zenodo 22050379) | [zenodo.org/records/22050379](https://zenodo.org/records/22050379) | other | 9,400 measurements of 94 static ArSL signs from 1… | Zenodo `cc-by-4.0` | A | dump | 75.6 MB | optional handshape reference |
| Iraqi research datasets in papers (IASJ 2025 "first fully-labeled dataset for t… | [iasj.rdd.edu.iq/journals/uploads/2025/01/…](https://iasj.rdd.edu.iq/journals/uploads/2025/01/24/0def431f296d00410d880c5a93c61b18.pdf) | ml-isolated | – | – | C† | none | – | – |
| IWF Göttingen ethnographic film "Ma'dan Araber (Südiraq) – Gebärdensprache" (19… | [doi.org/10.3203/iwf/e-182](https://doi.org/10.3203/iwf/e-182) | archive | 1 film | empty rights field | C | – | – | ? (none stated) |

#### Israeli SL — ISO isr — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn110 dict 36 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn110.spml) | signwriting | 36 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| ISL-LEX 1.0 CSV (OSF node jmwyx) | [osf.io/jmwyx/](https://osf.io/jmwyx/) | phonology | 961 signs × 52 cols | CSV CC BY 4.0 on OSF (only primary statement); Compendium NC claim unsupported. Videos (IADPI/Vimeo) unlicensed = C. | A | dump | 353,217 B (ENGLISH.cs… | ingest ISL_961_Signs_20210416_ENGLISH.csv |
| ISL-LEX | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/isllex.html) | phonology | 961 signs | CSV CC BY 4.0 on OSF (only primary statement); Compendium NC claim unsupported. Videos (IADPI/Vimeo) unlicensed = C. | A | dump | – | regional researchers own this (cross-ref) |
| Global Signbank, ISL dataset | [signbank.cls.ru.nl/datasets/ISL](https://signbank.cls.ru.nl/datasets/ISL) | signbank | 0 public glosses, 2279 total | "Not accessible to others at this stage." | C | none | – | watch for release |
| ISL-LEX sign videos (IADPI / Haifa, on Vimeo) | – | isolated-video | – | IADPI/Haifa dictionary videos on Vimeo: no licence; permission needed. | C | – | – | ask rights holders before use |
| ISL Dictionary (IADPI / Ma'agale Shema) | [isl.org.il](https://isl.org.il) | dictionary-site | master list of about 4,233 signs (per ISL-LEX pap… | IADPI/Haifa dictionary videos on Vimeo: no licence; permission needed. | C | html-only | – | email Ma'agale Shema / Haifa lab for permission covering the 798 ISL-LEX videos and the full list |
| ISL Corpus (islcorpus.co.il) | [islcorpus.co.il/](https://islcorpus.co.il/) | continuous-corpus | – | – | C† | none | – | none (exhausted) |

#### Jordanian SL — ISO jos — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn86 dict 31; sgn92 lit 1 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn86.spml) | signwriting | 32 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| SooSL Web "قاموس لغة الإشارة الأردنية" | [web.soosl.net/projects/dictionary-of-jord…](https://web.soosl.net/projects/dictionary-of-jordanian-sign-language) | dictionary-site | 7,103 signs / 7,347 senses (Arabic + English) | SooSL ToU: CC BY-NC-ND 4.0 + no-copy clause; ask dictionary owner via websoosl@sil.org. | C | html-only | unknown | ask the owner via SIL (websoosl@sil.org); highest-value MENA permission request |
| Print dictionary of 500 LIU signs (2006) | – | print | 500 signs | none stated (no title, publisher or license) | C† | print-only | – | – |

#### Kafr Qasem SL — ISO sqx — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Haifa sign-lab KQSL dictionary page | [signlab.haifa.ac.il/2024/04/14/kafr-qasem…](https://signlab.haifa.ac.il/2024/04/14/kafr-qasem-sign-language-dictionary/) | dictionary-site | ~265 Hebrew/English entries (regex count) | none stated | C | html-only | unknown | low priority |

#### Kurdish SL — ISO zhk — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| KuSL2023 (Mendeley 6gfrvzfh69) | [data.mendeley.com/public-api/datasets/6gf…](https://data.mendeley.com/public-api/datasets/6gfrvzfh69) | fingerspelling-ha… | 71,400 images | "CC BY 4.0" | A† | dump | 472 MB | – |
| KuSL Lexicon (KurdishBLARK/KurdishSignLanguage) | [github.com/KurdishBLARK/KurdishSignLangua…](https://github.com/KurdishBLARK/KurdishSignLanguage) | hamnosys-sigml | Import1.txt 527 lines (HamNoSys symbol names, eSi… | "Attribution-NonCommercial-ShareAlike 4.0 International / Copyright (c) 2020 Zina Kamal … Hossein Hassani" | B | dump | ~0.2 MB | ingest for research/NC builds (HamNoSys->SignDesc) |
| HF Hadiana/Sign_Language_for_Kurdish_Letters (KuSL2022) | [huggingface.co/datasets/Hadiana/Sign_Lang…](https://huggingface.co/datasets/Hadiana/Sign_Language_for_Kurdish_Letters) | fingerspelling-ha… | – | license "other" ("cc", linked to ResearchGate) | C† | dump | 945 MB | – |

#### Kuwaiti SL — ISO none — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| KCST KSL preprint (Research Square 10.21203/rs.3.rs-9437705/v1) | [doi.org/10.21203/rs.3.rs-9437705/v1](https://doi.org/10.21203/rs.3.rs-9437705/v1) | ml-isolated | 6,514 images of 20 signs | ? (release unknown) | C† | none | – | – |

#### Lebanese SL — ISO none — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Labeeb (zeinshehab/Labeeb) | [github.com/zeinshehab/Labeeb](https://github.com/zeinshehab/Labeeb) | fingerspelling-ha… | 14 CSVs + keras models | Apache-2.0 | A† | dump | – | – |

#### Libyan SL — ISO lbs — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Suwed (1984) "Lughat Al-Ishara Al-'Arabiyah: Laughat As-Sum", Tripoli | – | print | – | – | C† | print-only | – | – |

#### Moroccan SL — ISO xms — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| MoSL (Ben Zaid, Benaddy, Boukdir, El Meslouhi; Univ. Ibn Zohr; Data in Brief) | [data.mendeley.com/datasets/23phgyt3mt/1](https://data.mendeley.com/datasets/23phgyt3mt/1) | isolated-video | "2,199 word-level isolated signs" by 9 native sig… | Mendeley "CC BY 4.0"; article "This is an open access article under the CC BY license" | A | dump | 0.4 MB (CSVs) | ingest the gloss list; email the authors / Shorouk for video access and redistribution terms |
| Moroccan national dictionary (created after MSL recognition in 1994) | – | print | – | – | C† | none | – | – |
| Kaggle walidlasseg Moroccan SL (LSM) alphabet | [kaggle.com/datasets/walidlasseg/moroccan-…](https://www.kaggle.com/datasets/walidlasseg/moroccan-sign-language-lsm-alphabet-dataset) | fingerspelling-ha… | – | "Database: Open Database, Contents: © Original Authors" | C† | dump | – | – |
| Soudi, Vinopol & Van Laerhoven (2025) large-scale Moroccan Sign Language corpus… | – | continuous-corpus | – | – | C† | none | – | – |
| MSL STEM Thesaurus (Soudi & Vinopol 2016; IDRT; USAID-funded) | [sign-lang.uni-hamburg.de/lrec/data/mslste…](https://www.sign-lang.uni-hamburg.de/lrec/data/mslstemthesaurus.html) | other | – | no license | C | – | – | – |

#### Omani SL — ISO none — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| KinectSignLang (Zenodo 18323435 / drmrashid) | [zenodo.org/api/records/18323435](https://zenodo.org/api/records/18323435) | other | code, binaries and mp3 audio; no reusable sign da… | MIT | A† | dump | – | skip |
| JISSR-OM / OSLT (You978suf/OSLT) | [github.com/You978suf/OSLT](https://github.com/You978suf/OSLT) | ml-isolated | "10,356 videos from 18 signers covering 798 word… | no license | C | none | – | request data (best Tier C target, 798 word signs) |

#### Palestinian SL — ISO none — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Palestinian Sign Language (LIF) dictionary (Benevolent Society for the Deaf, Ra… | – | print | – | – | C† | print-only | – | – |
| Official educational LIF dictionary | – | print | "only contains signs up through the seventh grade… | – | C† | print-only | – | – |

#### Persian SL (ZEI) — ISO psc — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| "Isolated Persian Sign Language Dataset" (Kaggle sohaibmoradi/psl-tabular) | [kaggle.com/datasets/sohaibmoradi/psl-tabu…](https://www.kaggle.com/datasets/sohaibmoradi/psl-tabular) | pose | "Videos of 280 signs were recorded from the waist… | "CC0: Public Domain" | A | dump | 5.3 GB | ask the uploader about the video source before relying on it |
| PenSLR-dataset | [github.com/Persian-Sign-Language/PenSLR-d…](https://github.com/Persian-Sign-Language/PenSLR-dataset) | other | 16 PSL glosses in 1-8-word sentences; 5 subjects;… | MIT | A | dump | – | – |
| ELAR "Western ZEI: Iranian Sign Language in Kermanshah" (dk0598) | [elararchive.org/dk0598/](https://www.elararchive.org/dk0598/) | continuous-corpus | "100 lexical signs, each from 36 signers in 18 se… | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register with ELAR and request the lexical elicitation (100 citation signs x 36 signers) |
| ELAR Persian SL collection | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 173 items | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |
| mpMalek/PersianSignLanguage (GitHub) | [github.com/mpMalek/PersianSignLanguage](https://github.com/mpMalek/PersianSignLanguage) | other | 12 KB repo, no data | LICENSE = CC0 template (initial commit) vs later license file + README CC BY-NC-ND 4.0 (commercial use by contact); BY-NC-ND governs | B | none | 12 KB | skip (no data) |
| Global Signbank - ZEI | [signbank.cls.ru.nl/datasets/ZEI](https://signbank.cls.ru.nl/datasets/ZEI) | signbank | 0 public glosses, 221 total | license fields blank | C | none | – | skip (closed dataset) |
| Global Signbank ZEI (via Hamburg compendium) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/globalsignbankzei.html) | signbank | 221 entries | restricted | C† | none | – | – |
| UoT-PSL | [arxiv.org/pdf/1912.01944](https://arxiv.org/pdf/1912.01944) | ml-isolated | 20 signs, 1,200 videos | – | C† | – | – | – |
| "Culture: Farsi Sign Language For Deaf, 1st Volume" (1980) | – | print | – | – | C | print-only | – | – |
| "Dictionary of Farsi Sign Language: Standardized Signs" (1984, "first of four e… | – | print | – | – | C | print-only | – | – |
| "Ketab Nashenava" (2020) | – | print | – | – | C | print-only | – | – |
| First academic ISL book (2021, Sharif / IAU) | – | print | – | – | C | print-only | – | – |
| MPSL | [eej.aut.ac.ir/article_6144.html](https://eej.aut.ac.ir/article_6144.html) | fingerspelling-ha… | 47 classes of alphabet and digit images | – | C† | – | – | – |
| Rastgoo continuous PSL | [jad.shahroodut.ac.ir/article_3366.html](https://jad.shahroodut.ac.ir/article_3366.html) | continuous-corpus | 100 sentences | – | C† | – | – | – |

#### Qatari SL — ISO none — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| theshumba/sawiyya (Qatari SL learning app) | [github.com/theshumba/sawiyya](https://github.com/theshumba/sawiyya) | app | – | no license | C† | – | – | – |

#### Saudi SL — ISO sdl — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn40 dict 401; sgn91 lit 6 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn40.spml) | signwriting | 407 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.1 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Isharah (IAU/KFUPM) | [snalyami.github.io/Isharah_CSLR/](https://snalyami.github.io/Isharah_CSLR/) | continuous-corpus | 30,000+ smartphone videos; 18 deaf and profession… | "made available for academic research and educational purposes only"; not to be "redistributed, republished, sublicensed, or hosted elsewhere without prior written permi… | B | dump | 6.49 GB (HF 00.zip, 0… | research/NC only |
| mArSL (KFUPM) | [hamzah-luqman.github.io/marsl/](https://hamzah-luqman.github.io/marsl/) | isolated-video | 50 isolated signs needing non-manual features; 6,… | no license stated | C | email/permission | – | email hluqman@kfupm.edu.sa |
| HF Hamzah/isharah-selfie | [huggingface.co/datasets/Hamzah/isharah-se…](https://huggingface.co/datasets/Hamzah/isharah-selfie) | isolated-video | 498 mp4 | no license | C | dump | 277 MB | – |
| Saudi SL dataset on Mendeley (kc2kdcfgz2) | [data.mendeley.com/datasets/kc2kdcfgz2](https://data.mendeley.com/datasets/kc2kdcfgz2) | isolated-video | 145 MTS videos about Salat (per search snippet) | – | C† | none | – | skip |
| Alomary (2013) Saudi SL dictionary, with the Princess Alanood Foundation | – | print | "The dictionary contains the alphabet, pronouns,… | none stated | C | – | – | – |
| Saudi Association for Hearing Impairment dictionary (2018) | – | print | "includes thousands of signs from 28 fields" | none stated | C | print-only | – | – |
| "Saudi Sign Language Dictionary (1) and (2)" (Google Drive PDFs) | – | print | – | none stated | C | – | – | – |
| ArabSign (KFUPM) | [hamzah-luqman.github.io/ArabSign/](https://hamzah-luqman.github.io/ArabSign/) | continuous-corpus | 9,335 samples of 50 sentences; 95 unique signs; 6… | no license, only a citation request | C | email/permission | – | – |

#### Tunisian SL — ISO tse — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn104 dict 4,519; sgn126 lit 469 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn104.spml) | signwriting | 4,988 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 2.6 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| (First ever) Tunisian Sign Language Dataset (Chakroun & Jerbi, Sup'Com; with AT… | [data.mendeley.com/public-api/datasets/fbj…](https://data.mendeley.com/public-api/datasets/fbjjgzgv7f) | ml-isolated | "4423 images of TunSL common words performed by 7… | Mendeley "CC BY 4.0"; GitHub `CC0-1.0`; author's Kaggle "MIT"; a Kaggle mirror "CC BY 4.0" | A | dump | 26.3 MB | reference images for 57 words |
| warcoder/tunisian-sign-language-dataset (Kaggle) | – | other | – | Kaggle label "CC BY 4.0" | A† | dump | – | verify original licence at source |
| Corpus LS Tunisienne (via CLARIN) | – | continuous-corpus | – | CC BY-NC-ND 3.0 (CLARIN) | B | – | – | local research only |
| SooSL Web "Langue des Signes Tunisienne/Tunisian Sign Language (LST)" | [web.soosl.net/projects/langue-des-signes-…](https://web.soosl.net/projects/langue-des-signes-tunisienne-tunisian-sign-language-lst) | dictionary-site | 279 signs ("LST-Tunis" 278) | SooSL ToU: CC BY-NC-ND 4.0 + no-copy clause; ask dictionary owner via websoosl@sil.org. | C | html-only | unknown | bundle with the Jordanian request |
| AVST "Medical Dictionary in Tunisian Sign Languages" booklet | [github.com/dhiaabdelli12/tunisian-sign-la…](https://github.com/dhiaabdelli12/tunisian-sign-language-seq-classification-dataset-building) | print | 160 words | – | C | print-only | – | – |
| Corpus Langue des signes Tunisienne (ORTOLANG) | [doi.org/10.82270/lst](https://doi.org/10.82270/lst) | continuous-corpus | 10 narrative discourses from Tunis | rights empty | C | – | – | Ask first (Tier C; no action stated in notes) |
| WebSign / tuniSigner (LaTICE / UTIC, Univ. of Tunis, Jemni) | [vhg.cmp.uea.ac.uk/demo/SLTAT2011Dundee/15…](https://vhg.cmp.uea.ac.uk/demo/SLTAT2011Dundee/15.html) | other | 2012 paper reports collaborative lexicon of "over… | none found | C | none | – | – |

#### Unified Arabic SL (proxy) — ISO none — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Arabic words sign language video dataset (Zenodo) | [zenodo.org/records/8035320](https://zenodo.org/records/8035320) | isolated-video | – | cc-by-4.0 | A | dump | 23 MB | identify which Arabic SL, then ingest |
| figshare 31082545 Arabic letter handshape JSON | – | fingerspelling-ha… | – | CC BY 4.0 | A | – | – | – |
| ArASL / "ArSL2018" (Mendeley y7pckrw6z2) | [data.mendeley.com/public-api/datasets/y7p…](https://data.mendeley.com/public-api/datasets/y7pckrw6z2) | fingerspelling-ha… | 54,049 images, 32 classes, >40 signers (Al Khobar) | "CC BY 4.0" | A† | dump | 70.2 MB | use for manual alphabet handshapes |
| ArSL21L (Mendeley 8hrn3bvdvk and f63xhm286w) | [data.mendeley.com/public-api/datasets/8hr…](https://data.mendeley.com/public-api/datasets/8hrn3bvdvk) | fingerspelling-ha… | 14,202 images, 32 letters, 50 people | "CC BY 4.0" | A† | dump | 845.9 MB | – |
| ASLAD-190K (Mendeley 2fgpn5dwgc) | [data.mendeley.com/public-api/datasets/2fg…](https://data.mendeley.com/public-api/datasets/2fgpn5dwgc) | fingerspelling-ha… | 190,000 images, 32 letters, 2 signers, plus 157 M… | "CC BY 4.0" | A† | dump | 2,817.5 MB | – |
| ASLAD-190K Kaggle mirror (boulesnane) | [kaggle.com/datasets/boulesnane/aslad-190k…](https://www.kaggle.com/datasets/boulesnane/aslad-190k-arabic-sign-language-alphabet-dataset) | fingerspelling-ha… | 190,000 images | "CC BY-SA 4.0" | A† | dump | – | – |
| EMG dataset for ArSL letters and numbers (Mendeley ft9bhdgybs) | [data.mendeley.com/public-api/datasets/ft9…](https://data.mendeley.com/public-api/datasets/ft9bhdgybs) | fingerspelling-ha… | ArSL letters and numbers (EMG signals) | "CC BY 4.0" | A† | dump | 483.8 MB | – |
| ArSL-31-Pilot (Zenodo 18363162) | [zenodo.org/api/records/18363162](https://zenodo.org/api/records/18363162) | fingerspelling-ha… | 7,010 samples of right-hand MediaPipe landmarks,… | cc-by-4.0 | A† | dump | 24 MB | – |
| Kaggle RGB ArASL (muhammadalbrham) | [kaggle.com/datasets/muhammadalbrham/rgb-a…](https://www.kaggle.com/datasets/muhammadalbrham/rgb-arabic-alphabets-sign-language-dataset) | fingerspelling-ha… | – | "CC BY-SA 4.0" | A† | dump | 5,078 MB | – |
| Annotated Arabic Sign Language News Dataset (Mada, Qatar; Mendeley y2d2kz3btb) | [data.mendeley.com/public-api/datasets/y2d…](https://data.mendeley.com/public-api/datasets/y2d2kz3btb) | continuous-corpus | 14 JSON files of time-aligned sign labels for 14… | Mendeley "CC BY 4.0" | A | dump | 2.8 MB | optional gloss vocabulary only |
| HF Selimx2001x/Arabic-Text-to-Sign-Language-Translation (text->gloss) | [huggingface.co/datasets/Selimx2001x/Arabi…](https://huggingface.co/datasets/Selimx2001x/Arabic-Text-to-Sign-Language-Translation) | other | Dataset.xlsx, sentence->gloss pairs | `license: apache-2.0` | A | dump | 228,918 B | use for gloss ordering only |
| Kaggle mohamedlotfy50/arabic-sign-language (text->gloss) | [kaggle.com/datasets/mohamedlotfy50/arabic…](https://www.kaggle.com/datasets/mohamedlotfy50/arabic-sign-language) | other | Arabic/English sentences with gloss | "GPL 2" | A | dump | 1.16 MB | use for gloss ordering only |
| Kaggle hossammbalaha/asl-20-words-dataset-v1 ("Arabic Sign Language (ASL) 20-Wo… | [kaggle.com/datasets/hossammbalaha/asl-20-…](https://www.kaggle.com/datasets/hossammbalaha/asl-20-words-dataset-v1) | ml-isolated | 8,467 smartphone videos of 20 words from 72 volun… | "CC BY-NC-SA 4.0" | B | dump | 36,132 MB | – |
| OSF n5p7r "Morphophonology of Kinship Terms in Arab Sign Languages" | [api.osf.io/v2/nodes/?filter%5Btitle%5D%5B…](https://api.osf.io/v2/nodes/?filter%5Btitle%5D%5Bicontains%5D=sign%20language) | phonology | – | no licence | C | – | – | – |
| KArSL (KFUPM) | [hamzah-luqman.github.io/KArSL/](https://hamzah-luqman.github.io/KArSL/) | ml-isolated | 502 sign words (eleven chapters of the ArSL dicti… | no licence stated | C | dump | unmeasured | email hluqman@kfupm.edu.sa for written permission covering derivation and clip redistribution |
| Kaggle mahmoudmsaafan/arabic-sign-language-dataset (mirror of 20-Words set) | [kaggle.com/datasets/mahmoudmsaafan/arabic…](https://www.kaggle.com/datasets/mahmoudmsaafan/arabic-sign-language-dataset) | ml-isolated | – | "Unknown" | C† | dump | – | – |
| Unified Arabic Sign Dictionary (CAMSA 2004 / LAS-ALECSO) | – | print | – | none found (no downloadable, licensed copy) | C | none | – | – |
| ArabicSL-Bench (Zenodo 7757337) | [zenodo.org/api/records/7757337](https://zenodo.org/api/records/7757337) | fingerspelling-ha… | 28,000 images | restricted | C† | email/permission | – | – |
| Arabic SL Corpus (Almohimeed et al. 2010) | [sign-lang.uni-hamburg.de/lrec/data/arabic…](https://www.sign-lang.uni-hamburg.de/lrec/data/arabicsignlanguagecorpus.html) | continuous-corpus | – | no license or access info | C† | – | – | – |
| Unified Arabic Sign Language Dictionary (Qatar SCFA, DVD) | [theinterpretersfriend.com/indj/dcoew/arab…](https://theinterpretersfriend.com/indj/dcoew/arab-world.html) | other | ~1,600 sign terms | no licensed digital file found | C | none | – | – |

#### Yemeni SL (notes' "yms" is not a valid code) — ISO none — Middle East & North Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ArYSL (figshare 26114395) | [api.figshare.com/v2/articles/26114395](https://api.figshare.com/v2/articles/26114395) | ml-isolated | 32 words (static images) | CC BY 4.0 (Kaggle copy says CC0) | A | dump | – | – |
| ArYSL (Kaggle rehabalsaby/yemeni-sign-language) | [kaggle.com/datasets/rehabalsaby/yemeni-si…](https://www.kaggle.com/datasets/rehabalsaby/yemeni-sign-language) | ml-isolated | 32 Arabic words (upgraded from 14); static 640x64… | "CC0: Public Domain" | A | dump | ~3.0 GB (totalBytes 3… | handshape and location reference only |
| rehabalsaby/yemeni-sign-language (Kaggle) | – | other | – | Kaggle label "CC0" | A† | dump | 2.4 GB | verify original licence at source |

#### Adamorobe SL — ISO ads — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| AdaSL Lexicon (TLA) | [archive.mpi.nl/tla/islandora/object/tla%3…](https://archive.mpi.nl/tla/islandora/object/tla%3A1839_00_0000_0000_0016_8A57_F) | isolated-video | 276 isolated-sign items (+ lexical-database PDF;… | All files Restricted; contact Victoria Nyst. | C | email/permission | not checked | ask Victoria Nyst for the phonology Excel for tuning |
| Adamorobe Sign Language Lexicon (Leiden; TLA) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/adasllexicon.html) | isolated-video | "250 signs of AdaSL in isolation. For a subset of… | All files Restricted; contact Victoria Nyst. | C | email/permission | – | email V. Nyst or Leiden for research access, especially the phonology Excel |
| Adamorobe Sign Language Corpus (TLA/DoBeS) | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/adaslcorpus.html) | continuous-corpus | 36 hours; 39 tapes; 180 clips; 27 ELAN transcript… | All files Restricted; contact Victoria Nyst. | C | email/permission | – | request research access via TLA (low priority: continuous) |

#### Bouakako SL (Côte d'Ivoire) — ISO none — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 58 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |

#### Cameroon SL (incl. CASL-W60) — ISO none — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| CASL-W60 (Kaggle) | [kaggle.com/datasets/mwakalucky/casl-w60](https://www.kaggle.com/datasets/mwakalucky/casl-w60) | isolated-video | 60 words, 19 signers, 5,889 clips | C-UDA; Cameroon-centred, non-native signers copied online reference videos. | B | dump | 14.6 GB | skip for clip generation (signers copied online videos) |
| ELAR dk0347 "Documentation of Extreme North Cameroon Sign Language and Cameroon… | [elararchive.org/dk0347](https://www.elararchive.org/dk0347) | continuous-corpus | 8 hours; about 20 participants; 1.5 hours glossed… | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register with ELAR for research access |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 1 bundle (+8 "Langue Signe Cameroun") | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |
| Wierzbicki (2020) "Corpus du lexique de la langue des signes camerounaise" (Aix… | [aixls.hypotheses.org/files/2020/04/Corpus…](https://aixls.hypotheses.org/files/2020/04/Corpus-du-lexique-de-la-langue-des-signes-camerounaise.-Pauline-Wierzbicki.-2020.pdf) | print | 63 signs (photos), 55 pages | no licence statement | C | print-only | – | – |

#### Chadian SL — ISO cds — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 4 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |

#### Dogon SL — ISO none — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Dogon SL corpus (TLA) | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dogonsl.html) | continuous-corpus | 32 hours; 68 participants | Licence "information not available" (Compendium, per L353) | C | email/permission | – | request access (accessible on request) |
| TLA Dogon SL collection | – | archive | – | restricted | C | email/permission | – | – |

#### Ethiopian SL — ISO eth — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn18 dict 143; sgn100 lit 1 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn18.spml) | signwriting | 144 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Mendeley "Amharic Sign Language Data Sets" (Isayas Feyera, 2020) | [doi.org/10.17632/5d3nkyhsrf.1](https://doi.org/10.17632/5d3nkyhsrf.1) | fingerspelling-ha… | 1 RAR; video frames annotated with LabelImg (XML/… | CC BY 4.0 | A | dump | 313,386,413 B | low priority (fingerspelling/alphabet-only images) |
| Zenodo 15858222 (EthSL learning-platform PDF) | [zenodo.org/records/15858222](https://zenodo.org/records/15858222) | other | 1 PDF | CC BY 4.0 | A | dump | – | skip (not data) |
| AAU theses on isolated-sign recognition (2013, 2014) | – | ml-isolated | – | – | C† | none | – | skip (no released data) |

#### Extreme North Cameroon SL — ISO none — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR dk0347 "Documentation of Extreme North Cameroon Sign Language and Cameroon… | [elararchive.org/dk0347](https://www.elararchive.org/dk0347) | continuous-corpus | 8 hours; about 20 participants; 1.5 hours glossed… | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register with ELAR for research access |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 89 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |

#### Ghanaian SL — ISO gse — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| GSL Lexicon v1.0 (Fragkiadakis, Nyst, Nyarko; Leiden HANDS! Lab) | [doi.org/10.5281/zenodo.4533753](https://doi.org/10.5281/zenodo.4533753) | isolated-video | "over 1200 signs"; single signer (Marco Nyarko);… | cc-by-4.0 (SPDX CC-BY-4.0) | A | dump | 1,155,095,684 B (≈1.2… | first GSL ingest (best SSA source overall) |
| Commons "Videos of Ghanaian Sign Language" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 1 file | per file | A | api | – | check per-file licence |
| SignTalk-GSL Multiview GH healthcare dataset (Kaggle) | [kaggle.com/datasets/responsibleailab/sign…](https://www.kaggle.com/datasets/responsibleailab/signtalk-gsl-multiview-gh-healthcare-dataset) | ml-isolated | 500 rows / 496 unique English items (4 single-wor… | Kaggle card CC BY 4.0 (stands as governing licence) | A | dump | ? (Metadata.csv 33,62… | low value for citation forms (phrase-level) |
| Wikisign GSL (gsl.wikisign.org) | [gsl.wikisign.org/wiki/Wikisign:Main_Page](http://gsl.wikisign.org/wiki/Wikisign:Main_Page) | dictionary-site | "Currently 16 signs online" | "Content is available under Creative Commons by-sa free licence" (links by-sa/4.0) | A | html-only | – | low priority (trivial) |
| SignTalk-GSL: Ghanaian Medical Sign Language Data (Responsible AI Lab; Kaggle r… | [kaggle.com/datasets/responsibleailab/sign…](https://www.kaggle.com/datasets/responsibleailab/signtalk-ghana) | continuous-corpus | "10,000 Ghanaian Sign Language (GhSL) videos tail… | "Attribution 4.0 International (CC BY 4.0)" | A | dump | 23,151,041,151 B | defer; use later for sentence-level work |
| SignTalk-Seq (temporal Ghanaian SL data, Responsible AI Lab) | [kaggle.com/datasets/responsibleailab/sign…](https://www.kaggle.com/datasets/responsibleailab/signtalk-seq-temporal-ghanaian-sign-language-data) | continuous-corpus | 36,450 videos of 54 healthcare sentences; 6 inter… | CC BY 4.0 | A | dump | 117 GB | defer (continuous) |
| GSL app, GSL Grammars, GSL Quiz (Leiden HANDS! Lab) | [universiteitleiden.nl/sign-languages/data…](https://www.universiteitleiden.nl/sign-languages/datasets/learning-tools) | app | "GSL app contains over 1300 signs" | no stated data license | C† | app-only | – | none needed now (open subset is the Zenodo lexicon); possible release ask to Leiden |

#### Ivorian SL (LSCI) — ISO none — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR dk0076 "Documentation and description of a sign language in Côte d'Ivoire"… | [elararchive.org/dk0076](https://www.elararchive.org/dk0076) | continuous-corpus | 191 video files; about 61 participants; "includes… | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register with ELAR; ask for the lexical database |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 1 bundle "Côte d'Ivoire SL" (+85 LSCI) | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |
| Wikisign LSCI (lsci.wikisign.org) | [lsci.wikisign.org/wiki/Wikisign:Accueil](http://lsci.wikisign.org/wiki/Wikisign:Accueil) | isolated-video | "Actuellement 439 signes sont présents" (Compendi… | CC BY-SA 2.0 ES per Compendium, but the site is dead ("not configured"); ask maintainers for files. | C | html-only | – | contact Angoua Tano and Leiden for the original clips |
| Wikisign LSCI | [lsci.wikisign.org/wiki/Wikisign:Accueil](http://lsci.wikisign.org/wiki/Wikisign:Accueil) | dictionary-site | 439 signs | CC BY-SA 2.0 ES per Compendium, but the site is dead ("not configured"); ask maintainers for files. | C | html-only | – | check whether media files resolve before planning ingest |
| Wikisign LSCI (older wikisign.org network) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/wikisignlsci.html) | dictionary-site | 438 signs | CC BY-SA 2.0 ES per Compendium, but the site is dead ("not configured"); ask maintainers for files. | C | – | – | – |
| Ivory Coast Sign Language app (Leiden) | [universiteitleiden.nl/sign-languages/data…](https://www.universiteitleiden.nl/sign-languages/datasets/learning-tools) | app | "over 1258 signs… and their French equivalents" | no data license | C | app-only | – | ask Leiden to release the lexicon on Zenodo under CC BY (as done for GSL) |

#### Kenyan SL — ISO xki — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn79 dict 17 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn79.spml) | signwriting | 17 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| eKitabu KSL Video Dataset (Kaggle ekitabu/ksl-video-dataset) | [kaggle.com/datasets/ekitabu/ksl-video-dat…](https://www.kaggle.com/datasets/ekitabu/ksl-video-dataset) | isolated-video | 2,237 .mov, 30 classes (15 words + 15 number sign… | CC0-1.0; 30 classes (15 words + 15 numbers). | A | dump | 14.7 GB (14,666,958,1… | ingest the 15 lexical classes; number signs separately |
| laurettekazenga/ksl-video-dataset (Kaggle) | [kaggle.com/datasets/laurettekazenga/ksl-v…](https://www.kaggle.com/datasets/laurettekazenga/ksl-video-dataset) | isolated-video | same data as eKitabu | Same Kaggle creator as eKitabu (Laurette Kazenga), same CC0 data: duplicate, not a third-party mirror. | A | dump | 14,666,958,180 B | treat as the same dataset as ekitabu/ksl-video-dataset |
| Peace Corps KSL Glossary (GitHub peterkhess/KSL-Glossary) | [github.com/peterkhess/KSL-Glossary](https://github.com/peterkhess/KSL-Glossary) | isolated-video | 487 .webm + 206 HTML pages (>500 technical signs… | MIT template (copyright line unfilled); A-licence / C-provenance (signer consent undocumented). | A | dump | 727,592,694 B (728 MB) | contact Peter Hess or Peace Corps Kenya to confirm signer consent and licence intent; then pilot |
| eKitabu copy: Kaggle ekitabu/kenyan-sign-language-videos | – | isolated-video | identical copy of ekitabu/ksl-video-dataset | CC0-1.0; 30 classes (15 words + 15 numbers). | A | – | – | use the ekitabu/ksl-video-dataset original |
| Third-party mirror: Kaggle laurettekazenga/ksl-video-dataset | – | isolated-video | identical copy of eKitabu KSL dataset | Same Kaggle creator as eKitabu (Laurette Kazenga), same CC0 data: duplicate, not a third-party mirror. | A | – | – | skip (use the eKitabu original) |
| Wikisigns Kenyan Sign Language | [wikisigns.org/statistics](http://www.wikisigns.org/statistics) | isolated-video | 72 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | – | locate the list URL; ask Wikisigns/ULPGC for source videos |
| Kenyan SL videos (Kaggle ekitabu) | [kaggle.com/datasets/ekitabu/kenyan-sign-l…](https://www.kaggle.com/datasets/ekitabu/kenyan-sign-language-videos) | isolated-video | – | CC0-1.0; 30 classes (15 words + 15 numbers). | A | dump | 14.6 GB | – |
| Zindi "Kenyan Sign Language Classification Challenge" (2021–22) | [zindi.world/competitions/kenyan-sign-lang…](https://zindi.world/competitions/kenyan-sign-language-classification-challenge/data) | ml-isolated | Images.zip; 9 or 10 classes (page inconsistent),… | "…under a CC-BY SA 4.0 license." (competition rules; SPDX CC-BY-SA-4.0) | A | – | 1.1 GB | low priority (low value) |
| Kaggle joanwachuka/ksl-hand-landmarks | [kaggle.com/datasets/joanwachuka/ksl-hand-…](https://www.kaggle.com/datasets/joanwachuka/ksl-hand-landmarks) | pose | 101 sequences; 5 words ("this, my, is, mother, a") | Apache 2.0 | A | dump | – | skip (negligible value) |
| Kaggle michaelmwai/ksl-numpy-array-files-dataset | [kaggle.com/datasets/michaelmwai/ksl-numpy…](https://www.kaggle.com/datasets/michaelmwai/ksl-numpy-array-files-dataset) | pose | – | MIT | A | dump | 13 MB | skip (negligible value) |
| Wikisigns Kenya | [wikisigns.org/kenya](http://www.wikisigns.org/kenya) | dictionary-site | 72 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | KB | harvest gloss lists only |
| Peace Corps KSL demo | [peacecorps.gov/ksl](https://peacecorps.gov/ksl) | dictionary-site | – | MIT template (copyright line unfilled); A-licence / C-provenance (signer consent undocumented). | A | none | – | skip (dead: HTTP 403) |
| AI4KSL project corpus (Wanzare, Okutoyi, Kang'ahi, Ayere) | [arxiv.org/abs/2410.18295](https://arxiv.org/abs/2410.18295) | hamnosys-sigml | "14,000 English sentences… 20,000 signed KSL vide… | none found (license unverified) | C | email/permission | – | contact Maseno for the HamNoSys transcriptions and videos |
| Kaggle awsaf49/kslc-dataset | [kaggle.com/api/v1/datasets/list?search=ksl](https://www.kaggle.com/api/v1/datasets/list?search=ksl) | ml-isolated | – | Unknown | C† | dump | 1.18 GB | – |
| Maseno "KSL WORD BASED POSE DATASET" (Zenodo 14974973; Data in Brief 10.1016/j.… | [zenodo.org/records/14974973](https://zenodo.org/records/14974973) | pose | 685 participants; video count stated inconsistent… | nominal CC BY 4.0; access_right restricted, files hidden | C | email/permission | – | none stated (restricted) |
| AI4KSL corpus (Wanzare et al., arXiv 2410.18295) | [api.datacite.org/dois/10.48550/arxiv.2410…](https://api.datacite.org/dois/10.48550/arxiv.2410.18295) | continuous-corpus | – | paper CC BY 4.0 (DataCite); no data deposit found | C | none | – | none (exhausted) |

#### Malagasy SL — ISO mzc — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Wikisigns "Tenin'ny Tanana Malagasy" | [wikisigns.org/list/madagascar/malagasy](http://www.wikisigns.org/list/madagascar/malagasy) | isolated-video | 1,314 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | – | ask Wikisigns/ULPGC for the source MP4s under CC BY-SA 4.0; list gloss metadata now |
| Wikisigns Malagasy ("Langue de Signes Malagasy") | [wikisigns.org/list/madagascar/malagasy](http://www.wikisigns.org/list/madagascar/malagasy) | dictionary-site | 1,314 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | KB | harvest gloss list only |

#### Malawian SL — ISO lws — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn128 dict 49 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn128.spml) | signwriting | 49 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| eKitabu "Malawian Sign Language Early Grade Reading Materials Adaptation" (Zeno… | [zenodo.org/records/21229982](https://zenodo.org/records/21229982) | other | PDF report on 10 storybooks filmed in MSL "with e… | CC0-1.0; 30 classes (15 words + 15 numbers). | A | email/permission | 10 MB | contact eKitabu and MANAD for the storybook videos and glossaries |

#### Malian SL (LaSiMa / Bamako) — ISO bog — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Wikisign LaSiMa (lasima.wikisign.org) | [lasima.wikisign.org/wiki/Wikisign:Accueil](http://lasima.wikisign.org/wiki/Wikisign:Accueil) | dictionary-site | "Actuellement 32 signes sont présents" | CC by-sa footer (2.0 FR link) | A | html-only | – | low priority (trivial) |
| ELAR dk0108 "A reference corpus of the Malian Sign Language / LSM" (Nyst 2007–0… | [elararchive.org/dk0108](https://www.elararchive.org/dk0108) | continuous-corpus | "20 hours or discourse; 133 recording files; 1541… | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | request confirmed ELAR registration; ask for the lemma list and video vocabulary |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 111 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |
| Malian Sign Language app (Leiden) | [universiteitleiden.nl/sign-languages/data…](https://www.universiteitleiden.nl/sign-languages/datasets/learning-tools) | app | "over 439 signs… and their French equivalents" | – | C | app-only | – | ask Leiden to release the lexicon on Zenodo under CC BY |

#### Mauritian SL — ISO lsy — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| "Mission LSM Ile Maurice" (Cuxac), COCOON | e.g. https://doi.org/10.34847/cocoon.04… | continuous-corpus | 96 records (together with Corpus LS émergente), e… | "Copyright (c) Cuxac, Christian; Freely accessible; Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic" | B | – | – | Reference-only unless permission (ND) |
| Corpus Maurician SL (via CLARIN) | – | continuous-corpus | – | CC BY-NC-ND 4.0 (CLARIN) | B | – | – | local research only |
| Dictionary and Grammar of Mauritian Sign Language (Gébert, Adone et al. 2006) | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | print | – | – | C | print-only | – | none (no digital copy found) |

#### Mozambican SL — ISO mzy — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Wikisigns "LS Moçambique" / "Lingua de Sinais de Mocambique" | [wikisigns.org/portugues/mozambique](http://www.wikisigns.org/portugues/mozambique) | isolated-video | 44 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | – | ask Wikisigns/ULPGC for source videos |
| Wikisigns Mozambique ("Lingua de Sinais de Mocambique") | [wikisigns.org/portugues/mozambique](http://www.wikisigns.org/portugues/mozambique) | dictionary-site | 44 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | KB | harvest gloss list only |

#### Namibian SL — ISO nbs — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignWiki Namibia (na.signwiki.org) | [na.signwiki.org/index.php/SignWiki_Terms_…](https://na.signwiki.org/index.php/SignWiki_Terms_of_Service) | dictionary-site | – | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | email/permission | – | ask SHH (shh@shh.is) |
| SignWiki Namibia (SHH) | [na.signwiki.org](https://na.signwiki.org) | dictionary-site | 1979 signs (SLDC); 2,138 articles (MediaWiki API) | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | html-only | – | skip (no licence; YouTube video) |
| SignWiki Namibia | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/index.html) | dictionary-site | 1,979 | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | – | – | – |

#### Nigerian SL — ISO nsi — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn32 dict 11 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn32.spml) | signwriting | 11 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| NSL-212 Landmark Benchmark (Kaggle) | [kaggle.com/datasets/adelekeadeniyan/nsl-2…](https://www.kaggle.com/datasets/adelekeadeniyan/nsl-212-benchmark-dataset) | pose | 212 classes; train 1,908 / val 212 / test 212; 48… | CC0; 212-class gloss map in dataset_metadata.json. | A | dump | 291 MB | use val.pkl/test.pkl (unaugmented) as tuning references; gloss list in dataset_metadata.json |
| adelekeadeniyan/nsl-212-benchmark-dataset (Kaggle) | – | pose | – | CC0; 212-class gloss map in dataset_metadata.json. | A | dump | – | verify original licence at source |
| Nigerian SL Alphanumeric Dataset (Zenodo 21672976) | – | fingerspelling-ha… | – | CC BY 4.0 | A† | – | – | – |
| NSL Alphanumeric Dataset (Adeleke, Afolayan, Johnson) | [doi.org/10.5281/zenodo.21672976](https://doi.org/10.5281/zenodo.21672976) | fingerspelling-ha… | "33 static alphanumeric sign gestures, including… | cc-by-4.0 | A | dump | about 17.8 GB (zip pa… | low priority (fingerspelling/alphanumeric images only) |
| GitHub centbueze/nigeria-signs-language | – | other | – | MIT (code) | A† | – | – | skip (not a dataset) |
| Sign-to-Speech NSL dataset (Kolawole et al., IJCAI 2022) | [huggingface.co/datasets/Lanfrica/sign-to-…](https://huggingface.co/datasets/Lanfrica/sign-to-speech-for-sign-language-understanding-a-case-study-of-nigerian-sign-language) | ml-isolated | about 4.8k PASCAL-VOC/YOLO-annotated still images… | license:cc-by-nc-4.0 (gated, use-case form) | B | register | – | research use only; submit the HF use-case form if needed |
| Lanfrica/…nigerian-sign-language (HF) | – | other | – | cc-by-nc-4.0 (gated) | B | register | – | local research only |

#### Rwandan SL — ISO rsn — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Mendeley Data "Real-Time Recognition and Translation of Kinyarwanda Sign Langua… | [doi.org/10.17632/p6zc5g9bdy.1](https://doi.org/10.17632/p6zc5g9bdy.1) | pose | 22 signs (+ "---" no-sign); 25,457 .npy files + m… | CC BY 4.0 ("You can share, copy and modify this dataset so long as you give appropriate credit, provide a link to the CC BY license, and indicate if changes were made…") | A | dump | 312,420,890 B | ingest as motion reference for 22 signs |

#### Seychelles SL — ISO lsw — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| LSS Dictionary: Dictionary and grammar of Seychellois Sign Language (Gébert & R… | [hal.science/hal-02986623](https://hal.science/hal-02986623) | print | 850 entries (trilingual; directory, basic grammar… | HAL deposit authorisation only (no CC). | C | print-only | – | permission request (APHI / Univ. Lille) |

#### South African SL — ISO sfs — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn77 dict 157 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn77.spml) | signwriting | 157 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Zenodo 4765911 "Thesis summary in South African Sign Language" | [zenodo.org/api/records/4765911](https://zenodo.org/api/records/4765911) | continuous-corpus | 1 MP4 (continuous signing) | CC BY 4.0 | A | dump | 351 MB | skip (dead end for lexicon purposes) |
| Zenodo 4126938 "The newly developed signs in SASL for medical terms regarding d… | [zenodo.org/api/records/4126938](https://zenodo.org/api/records/4126938) | other | 1 JPG showing 11 signs | CC BY 4.0 | A | dump | 923,705 B | deprioritise (very low value) |
| UFS "Variation in South African Sign Language Place Names" (Loth, Bornman, Siba… | [doi.org/10.38140/ufs.23741892.v2](https://doi.org/10.38140/ufs.23741892.v2) | phonology | 794 rows; 67 place-name sign variants | "CC BY-NC-SA 4.0" | B | dump | CSV 535,964 B + data-… | use the data-dictionary coding scheme as a phonology reference; ask UFS whether the place-name videos can be… |
| ELOM (4&5) in SASL dataset (Manchester/Wits) | [figshare.manchester.ac.uk/articles/datase…](https://figshare.manchester.ac.uk/articles/dataset/Early_Learning_Outcome_Measure_ELOM_4_5_in_South_African_Sign_Language_-_Dataset/28622990/1) | other | quantitative child-assessment scores | CC BY-NC 4.0 | B | dump | 273 KB | skip (not lexical; dead end) |
| UFS Omeka S "Variation in SASL Place Names" (pokello.ufs.ac.za site 8) | [pokello.ufs.ac.za/api/items?site_id=8](https://pokello.ufs.ac.za/api/items?site_id=8) | isolated-video | 327 items | 327 items with no rights fields. | C | api | – | ask UFS for video terms |
| Real SASL | [realsasl.com/terms-conditions](https://www.realsasl.com/terms-conditions) | dictionary-site | – | Forbids reproduction and derivatives without written consent (C/D). | C | html-only | – | written consent only |
| NID SASL Video Dictionary (National Institute for the Deaf, Worcester) | [nid.org.za/resources/](https://nid.org.za/resources/) | dictionary-site | "hundreds of English words… thousands of SASL sig… | proprietary subscription ("For just R400 per year") | C | register | – | contract with NID or skip |

#### Tanzanian SL — ISO tza — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Commons "Videos of Tanzanian Sign Language" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 20 files | per file | A | api | – | check per-file licence then ingest |
| SignWiki Tanzania (tz.signwiki.org) | [tz.signwiki.org/index.php/Main_Page](https://tz.signwiki.org/index.php/Main_Page) | lexical-db | "There are 2194 signs in SignWiki Tanzania at thi… | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | api | a few hundred MB of i… | write to UDSM and SHH for permission and the original video files; until then use infobox handshape/location… |
| SignWiki Tanzania | [signwiki.org/](http://signwiki.org/) | dictionary-site | – | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | email/permission | – | ask SHH (shh@shh.is) |
| SignWiki Tanzania (SHH) | [tz.signwiki.org](https://tz.signwiki.org) | dictionary-site | 2194 signs (SLDC); 2,217 articles (MediaWiki API) | ToS: unnamed non-commercial CC; rightsinfo empty; portal "All rights reserved". B in principle, C in practice; videos are YouTube (D). | B | html-only | – | skip (no licence; YouTube video) |

#### Ugandan SL — ISO ugn — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 8 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |
| UNAD (1998) Manual of Ugandan Signs | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | print | – | – | C | print-only | – | skip (SpreadTheSign) |

#### Zambian SL — ISO zsl — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ZNAD (2001) Zambian Sign Language Dictionary | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | print | – | – | C | print-only | – | skip (mislabelled) |

#### Zimbabwe SL — ISO zib — Sub-Saharan Africa

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| GitHub taeshawanChiyaka/ZSLR-emg-… | – | other | 30 KB of EMG code | CC0 | A† | – | 30 KB | skip (code, not lexical) |
| King George VI School and Centre "Zimbabwe Sign Language Dictionary" (OSISA HTM… | [web.archive.org/web/20130531050053/http:/…](http://web.archive.org/web/20130531050053/http://www.osisa.org/books/language-rights/zimbabwe/zimbabwean-sign-language-dictionary) | dictionary-site | ? (chapters "Alphabet, numbers and guide to hand… | Wayback only; © OSISA All Rights Reserved (C/D). | C | html-only | – | – |
| King George VI Centre ZSL dictionary PDF | [osisa.org](https://osisa.org) | print | – | Wayback only; © OSISA All Rights Reserved (C/D). | C | none | – | skip (dead link) |

#### Alipur SL — ISO none — South Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR: Alipur Village SL deposit (PPG0039, 2008-2010) | [elararchive.org/uncategorized/SO_eb625028…](https://www.elararchive.org/uncategorized/SO_eb625028-274c-41a0-a2b6-48c4a21ec907/) | archive | – | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | email/permission | – | request written permission from ELAR/depositor |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 1 bundle | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |

#### Bangla SL (Bangladesh; no ISO code) — ISO none — South Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| BdSLIG (HF aplycaebous/BdSLIG) | [huggingface.co/datasets/aplycaebous/BdSLIG](https://huggingface.co/datasets/aplycaebous/BdSLIG) | phonology | 186 instruction lines, ~55 sign folders | "MIT" tag (credible for authored text only) | A | dump | 30 MB | use authored text only |
| IsharaKotha: Avatar-based Bangla Sign Language Corpus, Mendeley 6ykgx65ks5 | [data.mendeley.com/datasets/6ykgx65ks5/2](https://data.mendeley.com/datasets/6ykgx65ks5/2) | hamnosys-sigml | 3,823 signs (3,990 files; 31 semantic categories) | "Creative Commons Attribution 4.0 International" | A | dump | 3.84 MB | ingest first: SiGML -> HamNoSys -> SignDesc; de-duplicate glosses |
| BdSL HamNoSys->SiGML 3D animation set (Karim 2024), Zenodo 12152444 | [zenodo.org/records/12152444](https://zenodo.org/records/12152444) | hamnosys-sigml | 94 classes (13 numerals, 36 alphabet, 41 words) | CC BY 4.0 | A | dump | 45 KB | ingest (mostly alphabet/numerals) |
| SignBD-Word | [sites.google.com/view/signbd-word](https://sites.google.com/view/signbd-word) | ml-isolated | – | site states no licence; Zenodo CC BY-SA 4.0 governs | A | – | – | – |
| SignBD-Word, Zenodo 6779843 | [zenodo.org/records/6779843](https://zenodo.org/records/6779843) | ml-isolated | 200 words, 6,000 videos (+ 2D body pose) | CC BY-SA 4.0 | A | dump | 24,235 MB | second ingest for video-grounded tuning |
| Kaggle BdSL-300 (hasibturjo) | [kaggle.com/api/v1/datasets/view/hasibturj…](https://www.kaggle.com/api/v1/datasets/view/hasibturjo/bdsl-300) | ml-isolated | 300 glosses, 8,000 videos | CC BY-SA 4.0 | A | dump | 26,249 MB | optional (extends SignBD-Word) |
| Mendeley BdSLW-11 | doi:10.17632/523d6dxz4n | ml-isolated | 11 words, 1,105 images | CC BY 4.0 | A | dump | 3,417 MB | low priority (static images) |
| BdSL Words 10 | [data.mendeley.com/research-data/?search=B…](https://data.mendeley.com/research-data/?search=Bangla%20sign%20language) | ml-isolated | 40 words | CC BY 4.0 | A | dump | 270 MB | low priority (static images) |
| Kaggle BDSLW131 | [kaggle.com/datasets?search=bdsl](https://www.kaggle.com/datasets?search=bdsl) | ml-isolated | – | CC BY 4.0 | A | dump | 141,463 MB | low priority (static images) |
| raseluddin/bdslw11-bangladeshi-sign-word-dataset (Kaggle) | – | ml-isolated | – | Kaggle label "CC BY 4.0" | A† | dump | 3.4 GB | verify original licence at source |
| Ishara-Lipi (Mendeley v1, hpfbpd7dvg) | [data.mendeley.com/datasets/hpfbpd7dvg/1](https://data.mendeley.com/datasets/hpfbpd7dvg/1) | fingerspelling-ha… | 1,000 digits + 1,800 characters (images) | Mendeley v1 CC BY 4.0 (fingerspelling only); Kaggle re-upload NC-SA is later. | A | dump | ~1.5 MB | use the Mendeley copy, not Kaggle's NC-SA re-upload |
| Ishara-Lipi Kaggle re-upload (ksanzid/esharalipi-bangla-sign-language-dataset) | [kaggle.com/datasets/ksanzid/esharalipi-ba…](https://www.kaggle.com/datasets/ksanzid/esharalipi-bangla-sign-language-dataset) | fingerspelling-ha… | same as Mendeley | Mendeley v1 CC BY 4.0 (fingerspelling only); Kaggle re-upload NC-SA is later. | A | dump | – | do not use; use the Mendeley copy |
| BdSL47 (Zenodo 7067906) | – | fingerspelling-ha… | – | CC0 | A | – | – | – |
| BdSL47 (Zenodo copy of Dryad doi:10.5061/dryad.1vhhmgqwk) | [zenodo.org/records/7067906](https://zenodo.org/records/7067906) | fingerspelling-ha… | 10 digits + 37 letters; 100 RGB images per sign p… | cc-zero | A | dump | 2,830 MB (.rar) | fingerspelling reference only |
| BdSL47 (Mendeley pbb3w3f92y) | [data.mendeley.com/datasets/pbb3w3f92y](https://data.mendeley.com/datasets/pbb3w3f92y) | fingerspelling-ha… | 10 digits + 37 letters | CC BY 4.0 | A | dump | 1,197 MB | fingerspelling reference only |
| Ishara-Lipi (Kaggle ksanzid/esharalipi-bangla-sign-language-dataset) | [kaggle.com/api/v1/datasets/view/ksanzid/e…](https://www.kaggle.com/api/v1/datasets/view/ksanzid/esharalipi-bangla-sign-language-dataset) | fingerspelling-ha… | 1,000 digit + 1,800 character images | Mendeley v1 CC BY 4.0 (fingerspelling only); Kaggle re-upload NC-SA is later. | A | dump | 3 MB | fingerspelling reference only |
| Bangla Sign Language Dataset 2019 (Mendeley hpfbpd7dvg) | [data.mendeley.com/datasets/hpfbpd7dvg](https://data.mendeley.com/datasets/hpfbpd7dvg) | fingerspelling-ha… | 1,000 digit + 1,800 character images | Mendeley v1 CC BY 4.0 (fingerspelling only); Kaggle re-upload NC-SA is later. | A | dump | – | fingerspelling reference only |
| KU-BdSL | – | other | – | CC BY 4.0 (verified "real") | A† | – | – | – |
| BdSLW60 (Kaggle hasaniut/bdslw60) | [kaggle.com/api/v1/datasets/view/hasaniut/…](https://www.kaggle.com/api/v1/datasets/view/hasaniut/bdslw60) | ml-isolated | 60 words, 9,307 trials, 18 signers | CC BY-NC-ND 4.0 | B | dump | 25,124 MB | local research only; ND blocks derived clips |
| BdSLW401 (Kaggle hasanssl/bdslw401) | [arxiv.org/abs/2503.02360](https://arxiv.org/abs/2503.02360) | ml-isolated | 401 signs, 102,176 samples, 18 signers | CC BY-NC-ND 4.0 | B | dump | 51,907 MB | local research only; ND blocks derived clips |
| BdSLW102 (Dataverse) | [doi.org/10.7910/DVN/ZXIF3D](https://doi.org/10.7910/DVN/ZXIF3D) | ml-isolated | – | not checked | C† | – | – | check licence |

#### Bhutanese SL — ISO dyl — South Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Wangsel (wangsel.edu.bt) | [wangsel.edu.bt/](http://wangsel.edu.bt/) | dictionary-site | – | – | C† | none | – | none (exhausted) |

#### Ghandruk SL — ISO gds — South Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 100 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |

#### Indian SL — ISO ins — South Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn85 dict 5 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn85.spml) | signwriting | 5 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| INCLUDE videos | – | isolated-video | – | CC BY 4.0 | A† | – | – | ingest with INCLUDE poses |
| Commons "Videos of Tamil Sign Language" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 16 files | per file | A | api | – | check per-file licence then ingest |
| INCLUDE (AI4Bharat), Zenodo 4010759 | [zenodo.org/records/4010759](https://zenodo.org/records/4010759) | ml-isolated | 263 word signs, 4,292 videos, 15 categories (INCL… | "Creative Commons Attribution 4.0 International" | A | dump | 56.8 GB (per-category… | ingest one category zip (e.g. Colours or Days_and_Time) as pilot |
| Mendeley ISL Agricultural words video | doi:10.17632/6v53kfxf46.1 | ml-isolated | – | CC BY 4.0 | A | dump | 7,879 MB | low priority (small vocabulary) |
| Mendeley ISL Emergency words | doi:10.17632/2vfdm42337.1 | ml-isolated | 8 words, 26 signers | CC BY 4.0 | A | dump | 3,372 MB | low priority (small vocabulary) |
| Mendeley Amrita SLR | doi:10.17632/dtg9s785v8.1 | ml-isolated | 50 signs, 7 signers | CC BY 4.0 | A | dump | 1,465 MB | low priority (small vocabulary) |
| Mendeley "Indian Sign Language_Dataset" (video + landmarks) | doi:10.17632/yx7kdssfjp.1 | ml-isolated | video + landmarks | CC BY 4.0 | A | dump | 281 MB | low priority (small vocabulary) |
| Mendeley ISL Real-life Words | [data.mendeley.com/research-data/?search=I…](https://data.mendeley.com/research-data/?search=Indian%20sign%20language) | ml-isolated | 20 words (images) | CC BY 4.0 | A | dump | 529 MB | low priority (static images) |
| OpenHands v1 INCLUDE poses (Zenodo 6674324 "OpenHands v1 : Labelled ISLR datase… | [zenodo.org/records/6674324](https://zenodo.org/records/6674324) | pose | 263 signs (INCLUDE) | Zenodo 6674324 CC BY 4.0; INCLUDE.zip (and GSL poses, CC BY upstream) usable. | A | dump | 662,887,244 B (663 MB) | ingest INCLUDE.zip with the INCLUDE videos for fitting/tuning |
| ISL-CSLTR (Navajeevan signers), Mendeley kcmpdxky7p | [data.mendeley.com/datasets/kcmpdxky7p/1](https://data.mendeley.com/datasets/kcmpdxky7p/1) | continuous-corpus | sentence-level continuous ISL | CC BY 4.0 | A | dump | 8,906 MB | low priority (low lexical value) |
| Mendeley ISLVT sentences + gloss | doi:10.17632/98mzk82wbb.1 | continuous-corpus | sentences + gloss | CC BY 4.0 | A | dump | 2,866 MB | low priority (small vocabulary) |
| bridgeconn/sign-bibles-isl (HF) | [huggingface.co/api/datasets?search=bible](https://huggingface.co/api/datasets?search=bible) | continuous-corpus | – | cc-by-sa-4.0 | A | dump | – | – |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 1 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| OpenHands Indian raw poses (NewzHook, NIOS, Sign_Library, MBM_Vadodara, ISH_New… | [doi.org/10.5281/zenodo.5558897](https://doi.org/10.5281/zenodo.5558897) | pose | – | Pose subset inside OpenHands Zenodo 6674324: record CC BY 4.0, but upstream terms (C-UDA, Codalab, BU, NC) are not overridden. | B | dump | – | skip |
| iSign (ACL Findings 2024) | [arxiv.org/html/2407.05404v1](https://arxiv.org/html/2407.05404v1) | continuous-corpus | >118K video-sentence/phrase pairs | HF tag "cc-by-nc-sa-4.0" | B | register | – | research-only; do not redistribute |
| ISLTranslate (sign.mt row) | – | continuous-corpus | – | CC BY-NC 4.0 | B | – | – | local research only |
| OpenHands (AI4Bharat) | [github.com/AI4Bharat/OpenHands](https://github.com/AI4Bharat/OpenHands) | other | code only; no pose data linked | Pose subset inside OpenHands Zenodo 6674324: record CC BY 4.0, but upstream terms (C-UDA, Codalab, BU, NC) are not overridden. | B | – | – | – |
| ISLRTC Google Drive "ISL Dictionary" (via islrtc.nic.in) | [islrtc.nic.in/](https://islrtc.nic.in/) | isolated-video | folders A–Z and Numbers (2023); "NCERT 156 new" (… | GODL-India only via portal footer; resource-level licence unreadable (503); Drive folders unlicensed. Needs ISLRTC written confirmation. | C | email/permission | – | ask ISLRTC for written confirmation that GODL covers the dictionary videos |
| ISLRTC Indian Sign Language Dictionary (till January 2024) on data.gov.in | [data.gov.in/catalog/indian-sign-language-…](https://data.gov.in/catalog/indian-sign-language-dictionary) | isolated-video | ~13.6k citation-form videos (English/Hindi keywor… | GODL-India only via portal footer; resource-level licence unreadable (503); Drive folders unlicensed. Needs ISLRTC written confirmation. | C | dump | ~200 GB | read resource licence from unblocked network; fetch <=20 MB single-category sample; email ISLRTC to confirm G… |
| ISLRTC Dictionary on YouTube | [youtube.com/channel/UC3AcGIlqVI4nJWCwHgHF…](https://youtube.com/channel/UC3AcGIlqVI4nJWCwHgHFXtg) | isolated-video | – | GODL-India only via portal footer; resource-level licence unreadable (503); Drive folders unlicensed. Needs ISLRTC written confirmation. | C | – | – | skip |
| HF silentone0725/Indian_Sign_Language_Data.gov_Rencoded (mirror of ISLRTC data.… | [huggingface.co/datasets/silentone0725/Ind…](https://huggingface.co/datasets/silentone0725/Indian_Sign_Language_Data.gov_Rencoded) | isolated-video | 13,665 mp4s (A-Z + Numbers folders) | GODL-India only via portal footer; resource-level licence unreadable (503); Drive folders unlicensed. Needs ISLRTC written confirmation. | C | dump | ~75 GB (H.265 re-enco… | skip |
| FDMSE-ISL (GitHub billuvamsi/fdmse-isl) | [github.com/billuvamsi/fdmse-isl](https://github.com/billuvamsi/fdmse-isl) | ml-isolated | metadata for 40,033 video records, 2,002 unique s… | Metadata-only repo; no public data host. | C | none | – | – |
| ISLRTC ISL Dictionary website (DEPwD) | [divyangjan.depwd.gov.in/islrtc/](https://divyangjan.depwd.gov.in/islrtc/) | dictionary-site | ? (search by alphabet and 12 categories) | GODL-India only via portal footer; resource-level licence unreadable (503); Drive folders unlicensed. Needs ISLRTC written confirmation. | C | html-only | – | – |
| Kaggle atharvadumbre/indian-sign-language-islrtc-referred | [kaggle.com/api/v1/datasets/view/atharvadu…](https://www.kaggle.com/api/v1/datasets/view/atharvadumbre/indian-sign-language-islrtc-referred) | fingerspelling-ha… | 36,000 alphabet/digit images | GODL-India only via portal footer; resource-level licence unreadable (503); Drive folders unlicensed. Needs ISLRTC written confirmation. | C | dump | – | fingerspelling reference only (local research) |
| data.gov.in "Indian Sign Language Dictionary" catalog | [data.gov.in/catalog/indian-sign-language-…](https://www.data.gov.in/catalog/indian-sign-language-dictionary) | other | – | GODL-India only via portal footer; resource-level licence unreadable (503); Drive folders unlicensed. Needs ISLRTC written confirmation. | C | none | – | get ISLRTC written confirmation that GODL covers the dictionary videos |
| ISLRTC Dictionary on Google Drive | [drive.google.com/drive/folders/1U-Pr4r1-c…](https://drive.google.com/drive/folders/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco) | other | – | GODL-India only via portal footer; resource-level licence unreadable (503); Drive folders unlicensed. Needs ISLRTC written confirmation. | C | – | – | verify contents and licence |

#### Jhankot SL — ISO jhs — South Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR MDG1045 (Jhyankot SL facet) | [elararchive.org/?s=MDG1045](https://www.elararchive.org/?s=MDG1045) | archive | 43 items | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | – |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 43 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |

#### Jumla SL — ISO jus — South Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR MDG1045 (Jumli SL facet) | [elararchive.org/?s=MDG1045](https://www.elararchive.org/?s=MDG1045) | archive | 173 items | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | – |
| ELAR: Documenting Village Sign Languages in Nepal (ELDP MDG1045, collection 079… | [elararchive.org/uncategorized/SO_86e2ab3a…](https://www.elararchive.org/uncategorized/SO_86e2ab3a-1c47-4891-848a-323c10caca33/) | archive | wordlist videos + ELAN (e.g. jus202.MP4, jus202_2… | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | email/permission | – | write to depositors/ELAR asking for a CC licence on the wordlist subset |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 175 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |

#### Nepalese SL — ISO nsp — South Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn133 dict 5 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn133.spml) | signwriting | 5 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Titung/nepali-sign-language-video (HF) | – | isolated-video | n<1K | cc-by-4.0 | A | dump | – | verify contents and provenance |
| NSL23 (HF Titung/nepali-sign-language-video) | [huggingface.co/datasets/Titung/nepali-sig…](https://huggingface.co/datasets/Titung/nepali-sign-language-video) | fingerspelling-ha… | 630 videos; 36 consonants + 13 vowels; 14 volunte… | cc-by-4.0 | A | dump | 10.4 GB | fingerspelling reference only |
| Kaggle Nepali SL Character Dataset | [kaggle.com/datasets?search=nepali+sign+la…](https://www.kaggle.com/datasets?search=nepali+sign+language) | fingerspelling-ha… | – | MIT | A | dump | 2,842 MB | fingerspelling reference only |
| NDFN (ndfn.org.np) | – | dictionary-site | – | – | C† | none | – | none (exhausted) |
| NDFN (Nepal National Federation of the Deaf) NSL dictionary | [ndfn.org.np](https://ndfn.org.np) | dictionary-site | – | – | C† | – | – | contact NDFN for dictionary permission |

#### Pakistan SL — ISO pks — South Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn87 dict 13 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn87.spml) | signwriting | 13 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Kaggle "PSL Lexicon" text set | [kaggle.com/datasets?search=psl+lexicon](https://www.kaggle.com/datasets?search=psl+lexicon) | lexical-db | 635 rows (referenced BVH files not included) | Kaggle tag CC BY-SA 4.0 vs internal CC BY 4.0 | A† | dump | – | – |
| Kaggle Pakistani Sign Language (PSL) Lexicon Dataset (shayannoorullah) | [kaggle.com/api/v1/datasets/view/shayannoo…](https://www.kaggle.com/api/v1/datasets/view/shayannoorullah/pakistani-sign-language-psl-lexicon-dataset) | lexical-db | 635 lexicon rows (+ 83 animation_clips, 1,131 wor… | CC BY-SA 4.0 | A | dump | – | use as the pks gloss inventory |
| PkSLMNM, Mendeley m3m9924p3v | [data.mendeley.com/datasets/m3m9924p3v/2](https://data.mendeley.com/datasets/m3m9924p3v/2) | ml-isolated | 7 affective expressions x 100 individuals | CC BY 4.0 | A | dump | 7,470 MB | low priority (expressions, not lexicon) |
| Expression through Hands_PSL, Mendeley 4d6tj5snkd | [data.mendeley.com/datasets/4d6tj5snkd/3](https://data.mendeley.com/datasets/4d6tj5snkd/3) | ml-isolated | 7 PSL adjectives | CC BY 4.0 | A | dump | 3.5 MB | low priority (7 adjectives) |
| mohib123456/dynamic-word-level-pakistan-sign-language-dataset (Kaggle) | – | ml-isolated | 70 words | Kaggle label "Apache 2.0" | A† | dump | – | verify original licence at source |
| Kaggle Dynamic Word-Level PSL (mohib123456) | [kaggle.com/api/v1/datasets/view/mohib1234…](https://www.kaggle.com/api/v1/datasets/view/mohib123456/dynamic-word-level-pakistan-sign-language-dataset) | pose | 70 words (MediaPipe landmarks only) | Apache 2.0 | A | dump | 411 MB | optional motion-tuning reference |
| UAlpha40 (Urdu alphabet for PSL), Mendeley 3pvnnckxyb | [data.mendeley.com/datasets/3pvnnckxyb/1](https://data.mendeley.com/datasets/3pvnnckxyb/1) | fingerspelling-ha… | Urdu alphabet | CC BY 4.0 | A | dump | 5,837 MB | fingerspelling reference only |
| WLPSL (Kaggle) | [kaggle.com/datasets/jahanzebnaeem/wlpsl](https://www.kaggle.com/datasets/jahanzebnaeem/wlpsl) | isolated-video | 31 classes, 248 videos | C-UDA, no commercial use. | B | dump | 370 MB | research tuning only |
| Kaggle WLPSL (jahanzebnaeem) | [kaggle.com/api/v1/datasets/view/jahanzebn…](https://www.kaggle.com/api/v1/datasets/view/jahanzebnaeem/wlpsl) | ml-isolated | 31 classes, 248 videos | C-UDA, no commercial use. | B | dump | – | read licence text in description |
| jahanzebnaeem/wlpsl (Kaggle) | – | ml-isolated | – | C-UDA, no commercial use. | B | dump | – | verify original licence at source |
| PSL-128 (Pakistan) | [doi.org/10.5281/zenodo.21946282](https://doi.org/10.5281/zenodo.21946282) | ml-isolated | – | CC BY-NC 4.0 | B | dump | – | – |
| FESF PSL dictionary (psl.org.pk) | [psl.org.pk/](https://psl.org.pk/) | dictionary-site | 7,500+ words, 78 categories | © FESF, all rights reserved. | C | html-only | unknown | permission request to FESF |
| IWF Göttingen ethnographic film "Sindhi (Westpakistan) – Gebärdensprache" (1964) | [doi.org/10.3203/iwf/e-653](https://doi.org/10.3203/iwf/e-653) | archive | 1 film | empty rights field | C | – | – | ? (none stated) |

#### Sri Lankan SL — ISO sqs — South Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Kaggle "SSL400" | [kaggle.com/datasets?search=SSL400](https://www.kaggle.com/datasets?search=SSL400) | ml-isolated | – | CC BY-NC-SA 4.0 | B | dump | – | – |
| SSL400 (Kaggle yohanabhishek) | [kaggle.com/api/v1/datasets/view/yohanabhi…](https://www.kaggle.com/api/v1/datasets/view/yohanabhishek/ssl400-dynamic-sri-lankan-sign-language-dataset) | ml-isolated | 384 classes | CC BY-NC-SA 4.0 | B | dump | 1,938 MB | local research only (Tier B) |
| sign-lang@LREC "Sri Lanka SL Dictionary" = CUHK APSL project (Asian SignBank fa… | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/asiansignbank.html) | signbank | – | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | – |
| Asian SignBank (CUHK CSLDS) | [cslds.org/asiansignbank/frame_elements/ho…](http://cslds.org/asiansignbank/frame_elements/home.jsp) | signbank | 4,750 signs (all languages combined) | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | request permission / licence text from CUHK CSLDS |
| Asian Signbank (CUHK/CSLDS) (SLDC) | [cslds.org/asb/welcome.jsp](http://www.cslds.org/asb/welcome.jsp) | signbank | 4750 signs (whole site) | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | read Asian Signbank licence; register |
| Asian SignBank (CSLDS, LIN, CUHK): Sri Lanka | [cslds.org/asb/welcome.jsp](http://www.cslds.org/asb/welcome.jsp) | phonology | part of 4,750 signs total (per-language count not… | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | email/permission | – | email asiansignbank@cslds.org for phonetic-feature Excel export under explicit licence |

#### West Bengal SL — ISO wbs — South Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Wikisigns West Bengal SL | [wikisigns.org/list/bn/wbsl](http://www.wikisigns.org/list/bn/wbsl) | isolated-video | 170 signs (citation form, Bengali keyword) | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | – | – | ingest as the wbs seed |
| Wikisigns West Bengal Sign Language | [wikisigns.org/list/bn/wbsl](http://www.wikisigns.org/list/bn/wbsl) | isolated-video | 170 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | <5 MB text (all Wikis… | take gloss lists/metadata only; no video |
| Wikisigns West Bengal | [wikisigns.org/statistics](http://www.wikisigns.org/statistics) | dictionary-site | 170 signs | Footer CC BY-SA 4.0 covers glosses/metadata; sign video is delivered as YouTube embeds, so video is Tier D. Harvest gloss lists only. | A | html-only | – | – |

#### Cambodian SL — ISO csx — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Zenodo 21108448 (2026) 20-word benchmark with NISE | [zenodo.org/records/21108448](https://zenodo.org/records/21108448) | ml-isolated | 20 words | – | C† | – | – | none |

#### Hanoi SL — ISO hab — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SooSL Web "Từ Điển Ngôn Ngữ Ký Hiệu Hà Nội - Việt Nam" | [web.soosl.net/projects/tu-dien-ngon-ngu-k…](https://web.soosl.net/projects/tu-dien-ngon-ngu-ky-hieu) | dictionary-site | 1,206 signs (Hà Nội 1,185; Miền Bắc 334) | SooSL ToU: CC BY-NC-ND 4.0 + no-copy clause; ask dictionary owner via websoosl@sil.org. | C | html-only | unknown | ask the owner via SIL (websoosl@sil.org) |

#### Ho Chi Minh City SL — ISO hos — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Asian SignBank (CUHK CSLDS) | [cslds.org/asiansignbank/frame_elements/ho…](http://cslds.org/asiansignbank/frame_elements/home.jsp) | signbank | 4,750 signs (all languages combined) | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | request permission / licence text from CUHK CSLDS |
| Asian Signbank (CUHK/CSLDS) (SLDC) | [cslds.org/asb/welcome.jsp](http://www.cslds.org/asb/welcome.jsp) | signbank | 4750 signs (whole site) | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | read Asian Signbank licence; register |
| Asian SignBank (CSLDS, LIN, CUHK): HCMC | [cslds.org/asb/welcome.jsp](http://www.cslds.org/asb/welcome.jsp) | phonology | part of 4,750 signs total (per-language count not… | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | email/permission | – | email asiansignbank@cslds.org for phonetic-feature Excel export under explicit licence |

#### Indonesian SL (BISINDO) — ISO inl — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Lingua Libre pronunciation-inl (Commons) | [commons.wikimedia.org/wiki/Category:Lingu…](https://commons.wikimedia.org/wiki/Category:Lingua_Libre_pronunciation-inl) | isolated-video | 32 files | "CC0" (sample) | A | api | – | ingest via API |
| Mendeley "BISINDO Video Dataset" f33k9w86wr | [data.mendeley.com/datasets/f33k9w86wr/3](https://data.mendeley.com/datasets/f33k9w86wr/3) | ml-isolated | 2,113 jpg files (not video) | CC BY 4.0 | A | dump | 110 MB | low priority |
| Kaggle anggiyohanespardede/bisindo-40-kata-mp4 | [kaggle.com/datasets?search=sibi+sign+lang…](https://www.kaggle.com/datasets?search=sibi+sign+language) | ml-isolated | – | MIT | A† | dump | 754 MB | verify provenance |
| BISINDO NMM landmark dataset, Mendeley yzhzkzbnmw | [data.mendeley.com/datasets/yzhzkzbnmw/3](https://data.mendeley.com/datasets/yzhzkzbnmw/3) | pose | 40 word classes x 60 samples (+ Indonesian-Englis… | CC BY 4.0 | A | dump | 258 MB | first inl (BISINDO) ingest |
| Dataset of BISINDO 70_30 (Mendeley Data) | [data.mendeley.com/datasets/4gtxgjy6xv](https://data.mendeley.com/datasets/4gtxgjy6xv) | fingerspelling-ha… | 260 letter images | "Creative Commons Attribution 4.0 International" | A | – | – | Low priority for lexicon (fingerspelling A–Z) |
| Dataset of BISINDO (Mendeley Data) | [data.mendeley.com/datasets/m8y229yvrm](https://data.mendeley.com/datasets/m8y229yvrm) | fingerspelling-ha… | – | "Creative Commons Attribution 4.0 International" | A | – | – | Low priority for lexicon (fingerspelling A–Z) |
| HOG feature of BISINDO letters (Mendeley Data) | [data.mendeley.com/datasets/58jdd4fmtc](https://data.mendeley.com/datasets/58jdd4fmtc) | fingerspelling-ha… | 1,764 features | "Creative Commons Attribution 4.0 International" | A | – | – | Low priority for lexicon (fingerspelling A–Z) |
| BISINDO SIGN LANGUAGE RECOGNITION (Mendeley Data) | [data.mendeley.com/datasets/xh6bmx73n6](https://data.mendeley.com/datasets/xh6bmx73n6) | fingerspelling-ha… | alphabet plus "commonly used gesture classes" | "Creative Commons Attribution 4.0 International" | A | – | – | Low priority for lexicon |
| Egocentric BISINDO Sign Language Dataset (Mendeley Data) | [data.mendeley.com/datasets/f8fcjjj3nw](https://data.mendeley.com/datasets/f8fcjjj3nw) | fingerspelling-ha… | ? (first-person view; content not described) | "Creative Commons Attribution 4.0 International" | A | – | – | Low priority for lexicon |
| Mendeley alphabet set p7j5jrsbbb | [data.mendeley.com/research-data/?search=B…](https://data.mendeley.com/research-data/?search=BISINDO) | fingerspelling-ha… | – | mostly CC BY 4.0 (not itemised) | A† | dump | 838 MB | fingerspelling reference only |
| Kaggle achmadnoer/alfabet-bisindo | [kaggle.com/datasets?search=bisindo](https://www.kaggle.com/datasets?search=bisindo) | fingerspelling-ha… | – | CC0 | A | dump | – | fingerspelling reference only |
| WL-BISINDO (Kaggle glennleonali/wl-bisindo) | [kaggle.com/api/v1/datasets/view/glennleon…](https://www.kaggle.com/api/v1/datasets/view/glennleonali/wl-bisindo) | ml-isolated | 32 signs, 1,600 videos, 5 Banten signers | CC BY-NC 4.0 | B | dump | 2,165 MB | local research only (Tier B) |
| HF sigawari/wl-bisindo-10class (WL-BISINDO landmark derivative) | [huggingface.co/datasets/sigawari/wl-bisin…](https://huggingface.co/datasets/sigawari/wl-bisindo-10class) | pose | – | cc-by-nc-4.0 | B | dump | – | local research only (Tier B) |
| LSLI BISINDO Signbank | – | signbank | – | – | C† | none | – | none (exhausted) |
| Asian SignBank (CUHK CSLDS) | [cslds.org/asiansignbank/frame_elements/ho…](http://cslds.org/asiansignbank/frame_elements/home.jsp) | signbank | 4,750 signs (all languages combined) | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | request permission / licence text from CUHK CSLDS |
| Asian Signbank (CUHK/CSLDS) (SLDC) | [cslds.org/asb/welcome.jsp](http://www.cslds.org/asb/welcome.jsp) | signbank | 4750 signs (whole site) | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | read Asian Signbank licence; register |
| Asian SignBank (CSLDS, LIN, CUHK): Jakarta | [cslds.org/asb/welcome.jsp](http://www.cslds.org/asb/welcome.jsp) | phonology | part of 4,750 signs total (per-language count not… | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | email/permission | – | email asiansignbank@cslds.org for phonetic-feature Excel export under explicit licence |
| PUSBISINDO "Kamus video Bisindo" | – | dictionary-site | – | no licence | C† | none | – | none (link unrecoverable) |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 8 objects | per collection (not opened) | C | register | – | open per-collection licences |

#### Kata Kolok (Bengkala SL) — ISO bqy — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR: Kata Kolok acquisition deposit (SG0140) | [elararchive.org/uncategorized/SO_90c6592a…](https://www.elararchive.org/uncategorized/SO_90c6592a-3162-483b-bdcb-1c4e37dbc7b6/) | archive | – | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | email/permission | – | do not ingest without community-sensitive permission |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 97 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register if needed |
| Global Signbank dataset Kata Kolok | [signbank.cls.ru.nl/datasets/available](https://signbank.cls.ru.nl/datasets/available) | signbank | 1,312 (182 public) | ? (not stated in notes) | C† | html-only | – | assess licence and community consent before any use |
| Global Signbank: Kata Kolok dataset (Radboud) | [signbank.cls.ru.nl/datasets/Kata%20Kolok](https://signbank.cls.ru.nl/datasets/Kata%20Kolok) | signbank | 1,312 glosses (182 public) | dataset "Copyright statement" field empty; site conditions: "not copy or spread any data ... unless given permission or if the license allows it" | C | register | – | request community-sensitive permission; do not ingest without it |
| Kata Kolok Corpus (MPI, Connie de Vos; The Language Archive) | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/katakolokcorpus.html) | continuous-corpus | 50.5 hours; 47 deaf signers; ELAN | "Licence information not available" | C | email/permission | – | do not ingest without community-sensitive permission |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 298 objects | per collection (not opened) | C | register | – | open per-collection licences |

#### Malaysian SL — ISO xml — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn66 dict 6 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn66.spml) | signwriting | 6 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| MSL-Medical (Kaggle arkuuu21/msl-medical) | [kaggle.com/datasets/arkuuu21/msl-medical](https://www.kaggle.com/datasets/arkuuu21/msl-medical) | isolated-video | 1,040 clips, 50 gloss IDs, 7 signers, 3 takes | CC0 stated in description; gloss names unpublished (ask authors). | A | dump | 9,061,332,581 B (9.1… | ask the authors for the gloss key, then ingest |
| Commons "Videos of Malaysian Sign Language" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 65 files | per file | A | api | – | check per-file licence then ingest |
| MSL-Medical (Swinburne Sarawak + Sarawak deaf societies) | [kaggle.com/api/v1/datasets/view/arkuuu21/…](https://www.kaggle.com/api/v1/datasets/view/arkuuu21/msl-medical) | ml-isolated | medical-context glosses + poses (gloss count unkn… | CC0 stated in description; gloss names unpublished (ask authors). | A | dump | 9,221 MB | first xml ingest; count glosses from Kaggle file list |
| Kaggle pradeepisawasan/malaysian-sign-language-msl-image-dataset | [kaggle.com/datasets?search=malaysian+sign…](https://www.kaggle.com/datasets?search=malaysian+sign+language) | ml-isolated | images (content not inspected) | CC BY-SA 4.0 | A† | dump | 1,931 MB | inspect content |
| HF PishangShedappp/malaysian-sign-language-dataset-v1 | [huggingface.co/datasets/PishangShedappp/m…](https://huggingface.co/datasets/PishangShedappp/malaysian-sign-language-dataset-v1) | pose | 170,000+ samples (1662 MediaPipe features per fra… | MIT | A | dump | 367 MB | verify origin |
| BIM-SSD-V1 / V2 | [doi.org/10.5281/zenodo.17573985](https://doi.org/10.5281/zenodo.17573985) | ml-isolated | V1: 4,858 smartphone video samples from 4 signers… | "Creative Commons Attribution Non Commercial No Derivatives 4.0 International"; V2 access_right "restricted" | B | email/permission | – | ? (V2 restricted, 0 public files; none stated) |
| BIM-SIGN Videos, Zenodo 21635765 | [zenodo.org/records/21635765](https://zenodo.org/records/21635765) | ml-isolated | 15,277 clips | cc-by-nc-4.0 (restricted access) | B | email/permission | – | – |
| MySign mocap (HF mysigner/MySign) | [huggingface.co/datasets/mysigner/MySign](https://huggingface.co/datasets/mysigner/MySign) | mocap | 1,000 glosses × 5 signers (5,006 files; "5,000 3D… | HF cc-by-nc-sa-4.0; 1,000 glosses × 5 signers, 137 GB FBX. | B | dump | 136,928,623,695 B (13… | research tuning only unless relicensed |
| MySign (NeurIPS 2026) | [neurips.cc/virtual/2026/poster/139615](https://neurips.cc/virtual/2026/poster/139615) | mocap | – | HF cc-by-nc-sa-4.0; 1,000 glosses × 5 signers, 137 GB FBX. | B | – | – | check licence |
| BIM-SIGN Pose, Zenodo 21631884 | [zenodo.org/records/21631884](https://zenodo.org/records/21631884) | pose | 117 gloss classes; 15,266 of 15,277 clips; ~220 s… | cc-by-nc-4.0 | B | dump | 19,247 MB (keypoints_… | internal research tuning only if policy allows Tier B |

#### Myanmar SL — ISO ysm — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn2 dict 5 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn2.spml) | signwriting | 5 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| SignPuddle 3 Myanmar collection (mis-MM) | [signpuddle.com/server/collection](https://signpuddle.com/server/collection) | signwriting | – | project-level BY-SA | A | api | – | – |
| IEEE DataPort "Myanmar Sign Language" | – | fingerspelling-ha… | alphabet and number images only | CC BY | A† | – | – | – |
| Asian SignBank (CUHK CSLDS) | [cslds.org/asiansignbank/frame_elements/ho…](http://cslds.org/asiansignbank/frame_elements/home.jsp) | signbank | 4,750 signs (all languages combined) | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | request permission / licence text from CUHK CSLDS |
| Asian SignBank (CSLDS, LIN, CUHK): Yangon | [cslds.org/asb/welcome.jsp](http://www.cslds.org/asb/welcome.jsp) | phonology | part of 4,750 signs total (per-language count not… | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | email/permission | – | email asiansignbank@cslds.org for phonetic-feature Excel export under explicit licence |

#### Philippine SL (FSL) — ISO psp — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn72 dict 905 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn72.spml) | signwriting | 905 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.2 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| FSL-105, Mendeley 48y2y99mb9 | [data.mendeley.com/datasets/48y2y99mb9/2](https://data.mendeley.com/datasets/48y2y99mb9/2) | ml-isolated | 105 signs, 2,130 4-second clips | "Creative Commons Attribution 4.0 International" | A | dump | 379.1 MB (clips.zip) | ingest first (video seed) |
| Transactional Filipino Sign Language Dataset, Mendeley jdyrr7cm4z | [data.mendeley.com/datasets/jdyrr7cm4z/2](https://data.mendeley.com/datasets/jdyrr7cm4z/2) | pose | 1,065 .npy; 26 classes (numbers 1-10 + transactio… | CC BY 4.0 | A | dump | 150 MB | optional motion-tuning reference |
| FSL Dataset (Kaggle japorton/fsl-dataset) | [kaggle.com/datasets/japorton/fsl-dataset](https://www.kaggle.com/datasets/japorton/fsl-dataset) | fingerspelling-ha… | 26 letters × 450 (11,700 letter images) | "CC0: Public Domain" | A | dump | 140 MB | use instead of tartdrop's re-upload |
| HF SEACrowd/fsl_105 (loader for FSL-105) | [huggingface.co/datasets/SEACrowd/fsl_105](https://huggingface.co/datasets/SEACrowd/fsl_105) | other | loader for FSL-105 | "Creative Commons Attribution 4.0 (cc-by-4.0)" | A | – | – | use Mendeley original |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 2 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| PFD (pfd.org.ph) | – | dictionary-site | – | – | C† | none | – | none (bot challenge not bypassed) |
| fsldictionary.ph | – | dictionary-site | – | – | C† | none | – | none (bot challenge not bypassed) |
| PFD (Philippine Federation of the Deaf) FSL dictionary | [pfd.org.ph/](https://pfd.org.ph/) | dictionary-site | – | – | C† | – | – | – |
| FSL dictionary website (www.fsldictionary.ph) | [fsldictionary.ph](https://www.fsldictionary.ph) | dictionary-site | – | – | C† | – | – | – |
| PDRC dictionary (www.pdrc.org.ph) | [pdrc.org.ph](https://www.pdrc.org.ph) | dictionary-site | – | – | C† | – | – | – |

#### SIBI (signed Indonesian) — ISO none — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| 36k SIBI 3D Hand Landmark Dataset | [doi.org/10.5281/zenodo.21744340](https://doi.org/10.5281/zenodo.21744340) | fingerspelling-ha… | 36,000+ rows of MediaPipe 21-point landmarks for… | DataCite rights list holds both "Creative Commons Attribution 4.0 International" and "…Non Commercial 4.0 International" | B | – | – | Treat as B (use most restrictive licence) |
| SIBI Dataset (Data in Brief 2024), Mendeley 44pbrbsnkh | [data.mendeley.com/datasets/44pbrbsnkh](https://data.mendeley.com/datasets/44pbrbsnkh) | ml-isolated | 820 number, 520 alphabet, 360 affix, 1,400 senten… | Data Use Agreement required (samples CC BY 4.0) | C | email/permission | – | sign DUA if needed |
| Kaggle rickyarmnd/sign-language "Sibi Word" | [kaggle.com/datasets?search=sibi+sign+lang…](https://www.kaggle.com/datasets?search=sibi+sign+language) | ml-isolated | – | Unknown | C† | dump | 4,050 MB | verify provenance |
| SIBI Kemendikbud online dictionary | [pmpk.kemdikbud.go.id/sibi/](https://pmpk.kemdikbud.go.id/sibi/) | dictionary-site | – | – | C† | none | – | locate current host |

#### Singapore SL — ISO sls — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn11 dict 1,122; sgn14 lit 14 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn11.spml) | signwriting | 1,136 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.4 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| SgSL Signbank | – | signbank | – | – | C† | none | – | none (exhausted) |
| NTU SgSL e-book (linked by SADeaf) | – | app | – | no terms visible (JS app) | C† | – | – | – |

#### Thai SL — ISO tsq — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn34 dict 684 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn34.spml) | signwriting | 684 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.3 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| KM research multi-signer dataset (Kaggle kornkachornkhumyato) | [kaggle.com/datasets/kornkachornkhumyato/k…](https://www.kaggle.com/datasets/kornkachornkhumyato/km-research-multi-signer-dataset) | isolated-video | 10 TSL words + finish/none classes | Kaggle "MIT" | A | dump | 6.5 GB | low priority |
| TSL-51 (HF Namonpas/thai-sign-language-tsl51) | [huggingface.co/datasets/Namonpas/thai-sig…](https://huggingface.co/datasets/Namonpas/thai-sign-language-tsl51) | ml-isolated | 51 gestures + null class; 76 target sentences | cc-by-nc-sa-4.0 | B | dump | 2.46 GB | research only; exclude landmarks/expert_scraped.zip |
| HF Namonpas/thai-sign-language-tsl51 | [huggingface.co/api/datasets?search=sign-l…](https://huggingface.co/api/datasets?search=sign-language) | ml-isolated | – | CC BY-NC-SA 4.0 | B | dump | – | – |
| Thai Sign Language Database (th-sl.com), National Association of the Deaf in Th… | [th-sl.com/](https://www.th-sl.com/) | lexical-db | 8,086 words (updated 9 Oct 2026 / B.E. 2569) | © NADT; terms bar bots and data collection. | C | email/permission | – | request licence from NADT |
| Kaggle "10 Word Thai Sign Language (ThSL)" | [kaggle.com/datasets?search=thai+sign+lang…](https://www.kaggle.com/datasets?search=thai+sign+language) | ml-isolated | 10 words | ODbL database / "Contents: © Original Authors" | C | dump | 4,994 MB | ask authors or skip |
| NADT "Thai Sign Language Database" (th-sl.com) | [th-sl.com/](https://th-sl.com/) | dictionary-site | 8,086 words (updated 2026-10-09) | © NADT; terms bar bots and data collection. | C | html-only | unknown | formal permission request to NADT |
| Ratchasuda College (rs.mahidol.ac.th) | [rs.mahidol.ac.th/](https://rs.mahidol.ac.th/) | dictionary-site | – | – | C† | none | – | none (exhausted) |

#### Vietnamese SLs (national, undifferentiated) — ISO hab/haf/hos — Southeast Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn153 dict 647 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn153.spml) | signwriting | 647 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.2 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| raianrido/VSL HamNoSys dictionary | [github.com/raianrido/VSL](https://github.com/raianrido/VSL) | hamnosys-sigml | 3,873 rows / 3,564 words | GPL-3.0 (copyleft); confirm GPL covers data rows. | A | dump | 1.2 MB | HamNoSys -> SignDesc seed; ask the author whether GPL covers the data rows |
| SignPuddle 3 hos-VN collection | [signpuddle.com/server/collection](https://signpuddle.com/server/collection) | signwriting | 58 entries | project-level BY-SA | A | api | – | – |
| Kaggle nguyenanfms/vsl-vietnamese-sign-language | – | isolated-video | numeric clip IDs | CC BY 4.0 tag | A† | dump | 22.5 GB | none (provenance exhausted) |
| Vietnamese multi-view word-level dataset | [doi.org/10.5281/zenodo.17943574](https://doi.org/10.5281/zenodo.17943574) | ml-isolated | – | CC BY 4.0 | A | dump | – | – |
| VSL Vietnamese Sign Language v2 (Kaggle) | [kaggle.com/datasets/nguyenanfms/vsl-vietn…](https://www.kaggle.com/datasets/nguyenanfms/vsl-vietnamese-sign-language-v2) | ml-isolated | – | CC BY 4.0 | A | dump | 80 GB (cropped) | – |
| Dataset-Vietnamese-Sign-Language-MPU6050 | [github.com/QHuy1503/Dataset-Vietnamese-Si…](https://github.com/QHuy1503/Dataset-Vietnamese-Sign-Language-MPU6050-) | other | smart-glove VSL dataset from 6 sensors | none stated (no licence) | C | – | – | Ask first (Tier C; no action stated in notes) |

#### Chinese SL — ISO csl — East Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn83 dict 97 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn83.spml) | signwriting | 97 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| SignData 中国手语知识图谱数据集 v1.0 (Zenodo 17539603) | [zenodo.org/records/17539603](https://zenodo.org/records/17539603) | phonology | not counted | Zenodo CC BY 4.0; check provenance of action descriptions vs national dictionary. | A | dump | 219,016,656 B (Signda… | download in the pipeline; compare descriptions with the national CSL dictionary text before use |
| NationalCSL-DP (Scientific Data 2025) | [figshare.com/articles/media/NationalCSL-D…](https://figshare.com/articles/media/NationalCSL-DP/27261843) | isolated-video | 6,707 signs, 134,140 videos, 10 signers, 2 views… | CC BY 4.0; signer identity-sharing consent and portraiture agreements documented. | A | dump | 18.64 GB total (23 fi… | ingest gloss.csv plus one participant zip (about 0.3 GB) for both views; attribute Jin et al. 2025 |
| NationalCSL-DP (Sci Data 2025) | [doi.org/10.1038/s41597-025-04986-x](https://doi.org/10.1038/s41597-025-04986-x) | other | – | CC BY 4.0; signer identity-sharing consent and portraiture agreements documented. | A | – | – | – |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 43 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| DEVISIGN (VIPL) | [vipl.ict.ac.cn/en/resources/databases/201…](https://vipl.ict.ac.cn/en/resources/databases/201801/t20180126_34795.html) | ml-isolated | 4,414 CSL vocabularies; 331,050 vocabulary data o… | Research subsets; VIPL reserves copyright (B/C). | B | register | – | – |
| CSL / SLR500 (USTC) | [ustc-slr.github.io/datasets/2015_csl/](https://ustc-slr.github.io/datasets/2015_csl/) | ml-isolated | 500 words × 50 signers × 5 repetitions | "released to universities and research institutes for research purpose only" | B | email/permission | – | – |
| DEVISIGN (sign.mt row) | – | ml-isolated | – | Research subsets; VIPL reserves copyright (B/C). | B | email/permission | – | request research access |
| Video-Based CSL (sign.mt row) | – | ml-isolated | – | "Research Attribution" | B | – | – | research-only use |
| CSL-Daily (USTC) | [ustc-slr.github.io/datasets/2021_csl_dail…](https://ustc-slr.github.io/datasets/2021_csl_daily/) | continuous-corpus | – | "released to universities and research institutes for research purpose only" | B | email/permission | – | – |
| NMFs-CSL (USTC) | [sign-lang.uni-hamburg.de/lrec/data/nmfscs…](https://www.sign-lang.uni-hamburg.de/lrec/data/nmfscsl.html) | other | – | "NMFs-CSL Dataset Release Agreement" | B | – | – | – |
| CSL-LEX (OSF 6ewty) | [osf.io/6ewty/](https://osf.io/6ewty/) | phonology | 700 signs, 9 phonological parameters | No licence on OSF node. | C | dump | CSL-LEX data.xlsx 153… | email the authors for a CC BY licence on CSL-LEX data.xlsx |
| NMFs-CSL (sign.mt row) | – | ml-isolated | – | "Research purpose on request" | C | email/permission | – | request research access |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 5 objects | per collection (not opened) | C | register | – | open per-collection licences |

#### Hong Kong SL — ISO hks — East Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn12 dict 14; sgn13 lit 2 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn12.spml) | signwriting | 16 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| HKSL iconicity & transparency study (OSF 5vxzf) | [osf.io/5vxzf/](https://osf.io/5vxzf/) | isolated-video | 972 signs (Signs/small/ 972 MP4; Signs/blurred_mo… | CC BY-SA 4.0 (LICENSE.md); verify signer consent and ID provenance. | A | api | 121,730,506 B (small)… | pull Signs/small/ (122 MB); email the authors about signer consent and whether the 4-char IDs come from anoth… |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 1 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| ELAR HKSL holdings (OLAC count) | – | archive | 79 OLAC records (ELAR) + Compendium entries | ELAR terms | B | register | – | – |
| Asian SignBank (CUHK CSLDS) | [cslds.org/asiansignbank/frame_elements/ho…](http://cslds.org/asiansignbank/frame_elements/home.jsp) | signbank | 4,750 signs (all languages combined) | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | request permission / licence text from CUHK CSLDS |
| Asian Signbank (CUHK/CSLDS) (SLDC) | [cslds.org/asb/welcome.jsp](http://www.cslds.org/asb/welcome.jsp) | signbank | 4750 signs (whole site) | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | read Asian Signbank licence; register |
| HKU-HKSLLEX (OSF t4x56) | [osf.io/t4x56/](https://osf.io/t4x56/) | lexical-db | – | no licence | C | none | – | ask the authors |
| HKSL Corpus (CSLDS, CUHK) | [cslds.org/hkslcorpus/copyright.jsp](http://www.cslds.org/hkslcorpus/copyright.jsp) | continuous-corpus | – | Reproduction/adaptation prohibited without CSLDS written authorisation (C/D). | C | – | – | – |
| HKSL Corpus | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/hkslcorpus.html) | continuous-corpus | – | Reproduction/adaptation prohibited without CSLDS written authorisation (C/D). | C | register | – | – |
| Child HKSL Corpus (聾童香港手語語料庫) | [cslds.org/acquisition/en-us/Corpora](http://www.cslds.org/acquisition/en-us/Corpora) | continuous-corpus | – | none listed | C | – | – | – |

#### Japanese SL — ISO jsl — East Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn64 dict 328; sgn99 lit 24 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn64.spml) | signwriting | 352 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.1 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| JSL-DC (arXiv 2608.18412) | [arxiv.org/abs/2608.18412](https://arxiv.org/abs/2608.18412) | other | 36.7K videos, 19 Deaf signers, 270-word lexicon | A-pending: CC BY 4.0 announced in arXiv v1, not yet released. | A | none | – | none until released |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 4 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| Asian SignBank (CUHK CSLDS) | [cslds.org/asiansignbank/frame_elements/ho…](http://cslds.org/asiansignbank/frame_elements/home.jsp) | signbank | 4,750 signs (all languages combined) | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | request permission / licence text from CUHK CSLDS |
| Asian Signbank (CUHK/CSLDS) (SLDC) | [cslds.org/asb/welcome.jsp](http://www.cslds.org/asb/welcome.jsp) | signbank | 4750 signs (whole site) | All rights reserved; data mining prohibited; permission asiansignbank@cslds.org. | C | register | – | read Asian Signbank licence; register |
| Hara & Miwa JSL syllable DB | [ken.ieice.org/ken/paper/20230616GCuP/](https://ken.ieice.org/ken/paper/20230616GCuP/) | phonology | – | not public | C† | none | – | none (exhausted) |
| Osugi Lab sign-language database (大杉研究室手話言語データベース), Tsukuba University of Techn… | [deafstudies.jp/osugi/](https://www.deafstudies.jp/osugi/) | isolated-video | 192 university-life signs (2010, revised 2024); 5… | "無償、但しクレジット表記と事前連絡を条件とする" (free; credit and prior contact). | C | email/permission | – | Email (address given in the CiNii record: kouhou＊ad.tsukuba-tech.ac.jp) for bulk-video permission and commerc… |
| KoSign Ver.5 (NII IDR) | [nii.ac.jp/dsc/idr/rdata/KoSign/](https://www.nii.ac.jp/dsc/idr/rdata/KoSign/) | mocap | 4,873 words (3,701 + 1,172) / 6,356 motion patter… | Products may not contain the data or processed data. | C | register | ~2.5 TB | academic partner only |
| KAKEN 25K15366, 3D mocap Japanese–JSL parallel corpus | [cir.nii.ac.jp/crid/1040866882797028608](https://cir.nii.ac.jp/crid/1040866882797028608) | mocap | – | – | C† | – | – | ? (data location not found) |
| DICOMO2026 "グロス単位動作辞書" (gloss-unit motion dictionary with a signed-Japanese moc… | [cir.nii.ac.jp/crid/1050591155552980096](https://cir.nii.ac.jp/crid/1050591155552980096) | mocap | – | – | C† | – | – | ? (data location not found) |
| JSL Colloquial Corpus (NII IDR) | [nii.ac.jp/dsc/idr/rdata/JSL/](https://www.nii.ac.jp/dsc/idr/rdata/JSL/) | continuous-corpus | 122 Deaf signers, 7 prefectures, 2012-2016; inclu… | 「コーパスの利用目的は学術研究に限ります。…民間企業等の方は申し訳ありませんがご利用いただけません」 | C | register | about 70 GB MP4 | apply only via an academic lab (lab-level application with sealed agreement; companies excluded) |
| JSL Colloquial (corpus) | – | continuous-corpus | – | custom licence (SLDC) | C | – | – | read licence |

#### Korean SL — ISO kvk — East Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn78 dict ≈67,741 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn78.spml) | signwriting | 67,741 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 26.6 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube); sgn78 exceed 20 MB: raise cap or use SP3 JSON |
| SignPuddle 3 kvk-KR-dictionary-public | [signpuddle.com/server/dictionary/kvk-KR-d…](https://signpuddle.com/server/dictionary/kvk-KR-dictionary-public) | signwriting | – | no licence field (project-level BY-SA) | A | dump | 401,582 B | – |
| English Wiktionary sign lemmas | [en.wiktionary.org/wiki/Category:Sign_lang…](https://en.wiktionary.org/wiki/Category:Sign_languages) | other | 6 lemmas | CC BY-SA (Wikimedia); title transcriptions are notation. | A | dump | <1 MB (all 439 lemmas) | optional: pull lemmas from dumps; check transcription fields |
| NIKL 한국수어사전 (sldict) | [sldict.korean.go.kr/](https://sldict.korean.go.kr/) | lexical-db | ~3,500+ | Live policy text CC BY-NC-ND 2.0 KR (link points to BY-NC 2.0 KR); never BY-SA. C to derive. | B | html-only | – | ask NIKL (02-2669-9775) which licence applies; no derivative clips meanwhile |
| data.go.kr 국립국어원_오늘의 수어 정보 (15152310) | [data.go.kr/biz/dcat/metadata/15152310.do](https://www.data.go.kr/biz/dcat/metadata/15152310.do) | lexical-db | – | 공공누리 Type 4 (attribution, no commercial use, no modification) | B | none | – | – |
| GKSL13k (KETI AIRC) | [github.com/AIRC-KETI/GKSL-dataset](https://github.com/AIRC-KETI/GKSL-dataset) | other | repo 592 KB | LICENSE.md: "Attribution-NonCommercial-ShareAlike 4.0 International" (CC-BY-NC-SA-4.0) | B | dump | 592 KB | – |
| KSL-LEX (KAIST; HF AAILab/KSL-LEX) | [huggingface.co/datasets/AAILab/KSL-LEX](https://huggingface.co/datasets/AAILab/KSL-LEX) | lexical-db | 6,463 entries (6,289 headwords) | GPL-3.0 label but derived from NC-ND NIKL dictionary; schema reference only. | C | dump | small | schema reference only |
| AI-Hub 수어 영상 (dataSetSn=103) | [aihub.or.kr/aihubdata/data/view.do?currMe…](https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&dataSetSn=103) | ml-isolated | 536,000 mp4 clips: 3,000 words, 2,000 sentences,… | Foreign users need a separate agreement; KSL video set Korean nationals only. | C | register | – | skip (Korean nationals only); unconfirmed whether foreigners can use the AI-Hub 안심구역 (Safe Zone) |
| KSL-Guide (KAIST, FG 2021) | [github.com/ChelseaGH/KSL-Guide](https://github.com/ChelseaGH/KSL-Guide) | ml-isolated | 121K samples, 2D/3D keypoints | no licence file in repo | C† | register | – | – |
| KETI (sign.mt row) | – | ml-isolated | 524 | "TODO (emailed Sang-Ki Ko)" (sign.mt) | C† | email/permission | – | ask Sang-Ki Ko for licence |
| NIKL 모두의 말뭉치 KSL corpora 2025 (병렬/주석/원시) | [kli.korean.go.kr/corpus/main/requestMain.…](https://kli.korean.go.kr/corpus/main/requestMain.do) | continuous-corpus | 3 corpora (v1.0) | NIKL corpus terms Art. 12-13: no redistribution/commercial use. | C | register | unknown | low priority |
| NIKL KSL Corpus | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/kslcorpus.html) | continuous-corpus | 90 hours, about 17 hours annotated | "information not available" | C | – | – | – |
| NIKL 모두의 말뭉치: 한국어-한국수어 병렬 말뭉치 | [sidae.com/article/2025070206228049664](https://www.sidae.com/article/2025070206228049664) | continuous-corpus | ? (one of 112 corpora released) | available after an online agreement and approval | C | register | – | – |
| AI-Hub KSL video set (dataSetSn=103) | [aihub.or.kr/intrcn/guid/usagepolicy.do](https://www.aihub.or.kr/intrcn/guid/usagepolicy.do) | other | – | Foreign users need a separate agreement; KSL video set Korean nationals only. | C | register | – | none (no separate open release) |
| NIASL2021 (EQ4ALL, the Korean "KoSign" project) | [eq4all-data.github.io/](https://eq4all-data.github.io/) | other | – | Products may not contain the data or processed data. | C | none | – | skip (site under construction) |

#### Macau SL — ISO none — East Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 80 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |
| ELAR "Preliminary Documentation of Macau Sign Language" (Sze et al., CUHK) | [hdl.handle.net/2196/00-0000-0000-000F-B67…](http://hdl.handle.net/2196/00-0000-0000-000F-B674-6) | archive | 79 items (42 stimuli, 28 monologues, 9 discourses… | no licence text shown; items "U_UserAccess" | C | register | – | register on ELAR and request access; ask the CUHK depositors if more than research/reference use is needed |

#### Mongolian SL — ISO msr — East Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Mongolian SL dictionary (national Deaf association), print | – | print | – | – | C | – | – | verify in a follow-up pass |

#### Taiwan SL — ISO tss — East Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn75 dict 214 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn75.spml) | signwriting | 214 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.1 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Lingua Libre pronunciation-tss (Commons) | – | isolated-video | 2 files | "CC0" (sample, from inl) | A | api | – | ingest via API (tiny) |
| 2026 TSL corpus (PTS, 2026-04-21) | [news.pts.org.tw/article/804643](https://news.pts.org.tw/article/804643) | continuous-corpus | 16 topics, 132 videos | no licence stated | C† | none | – | none (exhausted) |

#### Tibetan SL — ISO lsn — East Asia

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Tibetan SL dictionary (Tibet Deaf Association / Handicap International era), pr… | – | print | – | – | C | – | – | verify in a follow-up pass |

#### Auslan — ISO asf — Oceania

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn42 dict 154 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn42.spml) | signwriting | 154 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| UCI "Australian Sign Language Signs (High Quality)" (dataset 115) | [archive.ics.uci.edu/dataset/115](https://archive.ics.uci.edu/dataset/115) | mocap | 95 signs × 27 = 2,565 | CC BY 4.0, 95 signs × 27, glove/tracker data. | A | dump | ~12 MB (Zenodo 108399… | ingest as a motion-dynamics reference (one native signer) |
| Auslan Signbank (auslan.org.au) | [auslan.org.au/](https://auslan.org.au/) | signbank | 5,172 signs | Footer CC BY-NC-ND 4.0; ND blocks derivation (C to derive). | B | html-only | n/a | email the Signbank editors via the feedback form for permission to derive (and ask for a CSV export of phonol… |
| MM-WLAuslan (UQ-CVLab) | [uq-cvlab.github.io/MM-WLAuslan-Dataset/](https://uq-cvlab.github.io/MM-WLAuslan-Dataset/) | isolated-video | 282K+ videos, 3,215 glosses, 73 signers | Paper CC BY-NC-SA 4.0 vs datasheet CC BY-NC-ND 4.0; no download route. C if ND. | B | none | unknown | email UQ-CVLab |
| MM-WLAuslan (NeurIPS 2024 D&B) | [uq-cvlab.github.io/MM-WLAuslan-Dataset/do…](https://uq-cvlab.github.io/MM-WLAuslan-Dataset/docs/en/introduction) | ml-isolated | 282K+ videos, 3,215 glosses, 73 signers | Paper CC BY-NC-SA 4.0 vs datasheet CC BY-NC-ND 4.0; no download route. C if ND. | B | – | – | skip |
| PARADISEC "SocCog-asf" items (OLAC count) | – | archive | 78 items (asf total 79 OLAC records) | PDSC default CC BY-NC-SA 4.0; data may not be included in models. | B | register | – | – |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 37+1 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register; documentation only |
| Expanded Auslan Corpus (Full) (Monash product #115875, via LDaCA) | [shop.monash.edu/expanded-auslan-corpus-fu…](https://shop.monash.edu/expanded-auslan-corpus-full.html) | continuous-corpus | ~300 h | Monash licence via LDaCA; contact Trevor Johnston. | C | register | ~3 TB | low priority |
| Auslan Corpus (Johnston, ELAR, 2008) | [hdl.handle.net/2196/d8a991a5-d8cc-4f85-a5…](http://hdl.handle.net/2196/d8a991a5-d8cc-4f85-a5ff-c37279ebb625) | continuous-corpus | 300 hours, 1,700 clips, 100 signers, 357 annotate… | "information not available" | C | register | 3 TB | register on ELAR (registration / confirmed registration) to access |
| Expanded Auslan Corpus Lite (Monash, 2022-24) | [shop.monash.edu/expanded-auslan-corpus-li…](https://shop.monash.edu/expanded-auslan-corpus-lite.html) | continuous-corpus | annotation files for 357 clips | Monash licence via LDaCA; contact Trevor Johnston. | C | register | – | request access via LDaCA; licensing questions to innovation@monash.edu |
| SVIAP Corpus (Sociolinguistic Variation in Auslan Project) | [sign-lang.uni-hamburg.de/lrec/data/sviapc…](https://www.sign-lang.uni-hamburg.de/lrec/data/sviapcorpus.html) | continuous-corpus | – | none listed | C† | – | – | – |

#### Australian Aboriginal sign languages (Warlpiri, Arandic, etc.) — ISO asw — Oceania

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| "Mara yurriku: Western Desert sign languages" (Ellis, Green, Kral, Reed 2019),… | [figshare.com/articles/journal_contributio…](https://figshare.com/articles/journal_contribution/Mara_yurriku_Western_Desert_sign_languages/11356574) | other | – | figshare record CC BY 4.0 (holds only a pointer "Please email me for a copy") | A† | email/permission | – | – |
| Iltyem-iltyem (Batchelor Institute of Indigenous Tertiary Education, NT Languag… | [iltyemiltyem.com/](https://www.iltyemiltyem.com/) | isolated-video | over one thousand short films of signs | "Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License" (CC-BY-NC-ND-3.0) | B | html-only | – | approach Batchelor Institute / the Iltyem-iltyem sign team only with community consent |
| PARADISEC RB2-20120905 "Bininj Gunwok sign demonstration" (Gunbalanya, 2012-09-… | [catalog.paradisec.org.au/oai/item?verb=Ge…](https://catalog.paradisec.org.au/oai/item?verb=GetRecord&metadataPrefix=olac&identifier=oai:paradisec.org.au:RB2-20120905) | archive | – | PDSC default CC BY-NC-SA 4.0; data may not be included in models. | B | register | – | – |
| AIATSIS holdings (Kendon's Warlpiri films; Ellis's Ngaanyatjarra) | – | archive | – | – | C† | none | – | none (exhausted; may close on retry) |
| Kendon's Warlpiri and North Central Desert sign films (AIATSIS) | – | archive | – | – | C† | – | – | verify archive ID and access conditions in a follow-up pass |
| Ellis's Ngaanyatjarra sign materials | – | archive | – | – | C† | – | – | verify archive ID and access conditions in a follow-up pass |

#### Fiji SL — ISO none — Oceania

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SIL-supported Fiji sign language dictionary | – | print | – | ? (if an SIL Dictionary App Builder or Webonary product, set per publication, often CC BY-NC-ND) | C | – | – | follow-up pass: SIL Language & Culture Archives, Webonary, PARADISEC, national Deaf association |

#### New Zealand SL — ISO nzs — Oceania

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn70 dict 37 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn70.spml) | signwriting | 37 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.0 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| Commons "Videos of NZSL" | [commons.wikimedia.org/wiki/Category:Video…](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) | isolated-video | 10 files | per file | A | api | – | check per-file licence then ingest |
| NZSL Signbank | – | signbank | – | – | C | register | – | – |
| NZSL Dictionary snapshot (nzsl.db + nzsl.dat, ODNZSL/nzsl-dictionary-scripts Gi… | [github.com/ODNZSL/nzsl-dictionary-scripts…](https://github.com/ODNZSL/nzsl-dictionary-scripts/releases/download/signbank-2026-10-07/nzsl.db) | signbank | 5,344 words; 16,215 video rows (10,717 main) | GitHub release CC BY-NC-SA 4.0 vs nzsl.nz licence (from 2026-06-01) banning AI training/building; C in practice until DSRU replies. | C | dump | nzsl.db 8,138,752 B;… | email DSRU (nzsl.nz/contact-us) asking whether the CC BY-NC-SA release terms or the site's no-AI clause appli… |
| New Zealand Sign Language Online Dictionary (NZSL Signbank backend) | [nzsl.nz/](https://www.nzsl.nz/) | signbank | approximately 4500 signs | GitHub release CC BY-NC-SA 4.0 vs nzsl.nz licence (from 2026-06-01) banning AI training/building; C in practice until DSRU replies. | C | html-only | – | local research only (Tier B) |
| ODNZSL nzsl-dictionary-scripts GitHub release signbank-2026-10-07 | [github.com/ODNZSL/nzsl-dictionary-scripts…](https://github.com/ODNZSL/nzsl-dictionary-scripts/releases) | lexical-db | – | GitHub release CC BY-NC-SA 4.0 vs nzsl.nz licence (from 2026-06-01) banning AI training/building; C in practice until DSRU replies. | C | dump | – | email DSRU before use |
| nzsl.nz NZSL Dictionary ("VUW NZSL Resources License", effective 2026-06-01) | [nzsl.nz/copyright/](https://www.nzsl.nz/copyright/) | dictionary-site | – | GitHub release CC BY-NC-SA 4.0 vs nzsl.nz licence (from 2026-06-01) banning AI training/building; C in practice until DSRU replies. | C | html-only | – | email DSRU (Deaf Studies Research Unit, VUW) |
| NZSL Online Dictionary website (nzsl.nz) | [nzsl.nz/](https://www.nzsl.nz/) | dictionary-site | 5,344 entries (Database version 20261007); Compen… | GitHub release CC BY-NC-SA 4.0 vs nzsl.nz licence (from 2026-06-01) banning AI training/building; C in practice until DSRU replies. | C | html-only | – | email DSRU via https://www.nzsl.nz/contact-us for written permission |

#### Papua New Guinea SL — ISO pgz — Oceania

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| PARADISEC LWR2 "Papua New Guinea Sign Language" (Lauren Reed) | [catalog.paradisec.org.au/repository/LWR2](https://catalog.paradisec.org.au/repository/LWR2) | archive | 9+ signer sessions (Woodward wordlist + Reed cult… | PDSC default CC BY-NC-SA 4.0; data may not be included in models. | B | register | unknown | email Lauren Reed (lauren.reed@anu.edu.au) for a research-tuning permission |
| PARADISEC LWR1 "Western Highlands Sign Languages" (Reed) | – | archive | – | PDSC default CC BY-NC-SA 4.0; data may not be included in models. | B | register | – | – |
| PNGSL dictionary / sign-language books (Callan Inclusive Education and Support… | [figshare.swinburne.edu.au/articles/report…](https://figshare.swinburne.edu.au/articles/report/Deaf_people_in_Pacific_Island_Countries_A_design_for_the_Pacific_deaf_strengthening_program/34054899) | print | "Over 200 new signs were selected" (workshops) | no licence | C | none | – | – |
| PNG SL dictionary (Callan Services / PNG National Board for Special Education) | – | print | – | ? (if an SIL Dictionary App Builder or Webonary product, set per publication, often CC BY-NC-ND) | C | – | – | follow-up pass: SIL Language & Culture Archives, Webonary, PARADISEC |

#### Samoa SL — ISO none — Oceania

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SIL-supported Samoa sign language dictionary | – | print | – | ? (if an SIL Dictionary App Builder or Webonary product, set per publication, often CC BY-NC-ND) | C | – | – | follow-up pass: SIL Language & Culture Archives, Webonary, PARADISEC, national Deaf association |

#### Solomon Islands SL — ISO szs — Oceania

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SIL-supported Solomon Islands sign language dictionary | – | print | – | ? (if an SIL Dictionary App Builder or Webonary product, set per publication, often CC BY-NC-ND) | C | – | – | follow-up pass: SIL Language & Culture Archives, Webonary, PARADISEC, national Deaf association |

#### Tonga SL — ISO none — Oceania

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SIL-supported Tonga sign language dictionary | – | print | – | ? (if an SIL Dictionary App Builder or Webonary product, set per publication, often CC BY-NC-ND) | C | – | – | follow-up pass: SIL Language & Culture Archives, Webonary, PARADISEC, national Deaf association |

#### Vanuatu SL — ISO none — Oceania

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SooSL Web "Nasonel Saen Lanwis Diksonari Blong Vanuatu - Final" | [web.soosl.net/projects/finalized-saen-lan…](https://web.soosl.net/projects/finalized-saen-lanwes-sign-language-for-vanuatu) | dictionary-site | 148 signs | SooSL ToU: CC BY-NC-ND 4.0 + no-copy clause; ask dictionary owner via websoosl@sil.org. | C | html-only | unknown | request permission |

#### Yolŋu SL — ISO ygs — Oceania

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| Yolngu sign language corpus (Bauer), DCH Köln | [dch.phil-fak.uni-koeln.de/bestaende/daten…](https://dch.phil-fak.uni-koeln.de/bestaende/datenarchivierung/yolngu-sign-language-corpus) | continuous-corpus | 27 videos (elicited monologues + spontaneous dial… | Closed Access, 7.9 GB continuous. | C | email/permission | 7.9 GB | low priority (continuous, closed) |
| Bauer's Yolŋu SL deposit | – | archive | – | – | C† | – | – | verify archive ID and access conditions in a follow-up pass |

#### International Sign — ISO ils — Multi

| Source | URL / DOI | Type | Size | Licence (short) / verdict | Tier | Access | Disk | Next action |
|---|---|---|---|---|---|---|---|---|
| SignPuddle 2.0 SPML: sgn54 dict 2,316; sgn35 dict 244; sgn150 signs 2 | [signbank.org/…/sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn35.spml) | signwriting | 2,562 entries | CC BY-SA 3.0, project-level (signwriting.org); no per-puddle licence | A | dump | 0.7 MB | Ingest official SPML dumps; keep `<src>` for attribution; drop `<video>` (YouTube) |
| AGLAIA – ARIADNE Glossary in LIS and IS for Archaeology | [zenodo.org/records/19844076](https://zenodo.org/records/19844076) | isolated-video | single compiled glossary video 00_R001_AGLAIA_LIS… | "cc-by-4.0" | A | dump | 478 MB | Segment each term out of the one long video |
| IS skeleton animation (Zenodo 18694177) | [zenodo.org/records/18694177](https://zenodo.org/records/18694177) | pose | – | CC BY 4.0 | A | dump | 277.6 MB zip | check source of underlying video before use |
| ELAR deposits (language facet) | [elararchive.org/?s=sign+language](https://www.elararchive.org/?s=sign+language) | archive | 4 bundles | ELAR: private study / non-commercial-educational only; no redistribution without written permission (B/C). | B | register | – | register if needed |
| Dictio (Masaryk Univ.) | [dictio.info/](https://www.dictio.info/) | dictionary-site | IS 369 entries | footer: "© 2007-2026 Masaryk University / All rights reserved"; Compendium: "information not available" | C | html-only | – | out of scope for this file |
| TLA objects (language facet) | [archive.mpi.nl/tla/islandora/search/%22si…](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax) | archive | 4+5 objects | per collection (not opened) | C | register | – | open per-collection licences |

## Appendix C — Multi-language sources and the languages each covers

| Source | Type | Tier | Languages covered (ISO 639-3 unless noted) | Key facts and link |
|---|---|---|---|---|
| SignPuddle Online 2.0 (SPML dumps) | SignWriting notation + glosses | A (project-level CC BY-SA 3.0); `<video>` = D | 84 language keys. By dictionary entries: bzs 74,376 (incl. duplicate sgn80); kvk 67,741; ase 30,624; gsg 24,778; fcs 12,086; ssr 9,938; vgt 8,969; ssp 8,526; nsl 6,494; cse 5,863; sgg 4,745; tse 4,519; ysl (Slovene) 3,799; sfb 3,465; csc 3,422; hds 3,401; pys 3,061; mdl 2,833; ils 2,560; pso 2,144; aed 1,870; mfs 1,731; ncs 1,725; fsl 1,481; rsl 1,435; csn 1,286; ise 1,222; sls 1,122; psp 905; bfi 853; tsq 684; hab/haf/hos 647; psr 496; sdl 401; ugy 388; jsl 328; tss 214; csg 175; fse 165; sfs 157; asf 154; prl 148; eth 143; vsl 136; sqk 130; esl 111; csl 97; dse 84; swl 81; hsh 67; isg 66; NISL (bfi-IE) 56; dsl 53; lws (ase-MW) 49; icl 40; rms 38; nzs 37; ukl 37; isr 36; jos 31; gss 26; svk 25; xki 17; hks 14; afg 14; pks 13; nsi 11; bvl 7; xml 6; ysm 5; asq 5; ins 5; nsp 5; tsm 4; ecs 4; slf 3; bqn 3; csr 2; lsl 1; Haitian (ase-HT) 1; esn 1; lls 0; eso 0; gsm 0 | 144 public puddles, ≈338.5k entries, 143 MB. Hidden sgn6–sgn10 (LIS/LSF, password-gated) are C; sgn9 is D. [signwriting.org](https://www.signwriting.org/) |
| SignPuddle 3 (signpuddle.com JSON) | SignWriting JSON | A (project-level; no licence field) | 98 ISO-tagged collections, e.g. kvk-KR (401 KB), bzs-BR (20.5 MB), hos-VN (58 entries), mis-MM (Myanmar) | Smaller alternative to the over-cap SPML dumps. [SP3 collections](https://signpuddle.com/server/collection) |
| Wikisigns.org (ULPGC) | Gloss lists + YouTube video | A for glosses; D for video | mfs 2,178; mzc 1,314; wbs 170; gss 100; ugy 85; xki 72; mzy 44; bzs 32; gsm 21; Guyana SL 13 (total 4,029) | CC BY-SA 4.0 footer; no bulk export. [statistics](http://www.wikisigns.org/statistics) |
| Wikisign.org (older network) | Wiki dictionary | A (licence); media unverified | LSCI 439 (BY-SA 2.0 FR); Malian LaSiMa (bog) 32; Ghanaian GSL 16; DGS wikisign; LSC (dead) | [LSCI](http://lsci.wikisign.org/wiki/Wikisign:Accueil) |
| SignWiki (SHH, MediaWiki) | Wiki dictionary with handshape/location infobox fields | B in principle, C in practice; video = YouTube (D) | icl 12,317 articles; Georgian 8,296; fse (Suomi) 7,855; fss 4,221; Faroese 3,738; tza 2,194; nbs 1,979; nsl (TegnWiki) 1,435 | ToS "non-commercial" with an unnamed CC variant; portal "All rights reserved". [ToS revisions](https://na.signwiki.org/api.php?action=query&prop=revisions&titles=SignWiki_Terms_of_Service&rvlimit=50&format=json) |
| Global Signbank (Radboud) | Lexical database | NGT public = A; others closed (C/D) | Public: dse 6,862 of 7,469; bqy 182 of 1,312; EmblemsNL 124. Closed: vgt 16,928; sfb 3,512; isr 2,279; CSL_Shanghai 2,241; nsl 1,946; psc (ZEI) 221; csc 124; tss/kvk/jsl (Minpaku) | [available datasets](https://signbank.cls.ru.nl/datasets/available) |
| Dicta-Sign lexicon + UEA SiGML | HamNoSys/SiGML + video, ~1,000 concepts | B (CC BY-NC-ND 4.0 per CLARIN:EL); C to derive | bfi, gsg, fsl, gss | Also contaminates 3DZSignDB (asp). [CLARIN:EL 805](https://inventory.clarin.gr/catalogue_backend/api/registry/metadatarecord/805/) |
| UEA CWASA / JASigning examples | SiGML example pages | A (BY-SA); bundled notation BY-ND-like (C) | bfi, gsg, fsl, gss | [CWASA conditions](https://vh.cmp.uea.ac.uk/index.php/JASigning_Conditions) |
| EASIER Multilingual Sign Language Wordnet v4.0 | Cross-lingual sign↔synset links | B (README CC BY-NC-SA 4.0 beats record CC BY) | bfi, dse, fsl, gsg, sgg, swl, gss, pso (14,028 signs) | [FDR 14190](https://www.fdr.uni-hamburg.de/record/14190) |
| Abner et al. 2024 phylogenetics CSV | Phonology-coded Woodward-list items | D (CC0 label, but 15 of 19 languages from SpreadTheSign) | 24 labels incl. bfi, swl, lls, cse, ssp, psr, jsl, gsg, fsl, tsm, rsl, ase, nzs, hks, tss | [Dryad](https://doi.org/10.5061/dryad.bnzs7h4h1) |
| Power, Grimm & List 2020 manual alphabets (powerma CLDF) | Fingerspelling handshape notation | A (GPL-3.0) | 76 alphabet varieties (Glottocodes only), incl. Afghan, Albanian, American, Australian, Austrian, Brazilian, British, Bulgarian, Catalan, Croatian, Czech, Danish, NGT, Estonian, Finnish, Flemish, French, French-Belgian and others | [GitHub](https://github.com/lexibank/powerma) |
| Power & Kimmelman "Sign languages of the Soviet Union"; Power 2021 | HamNoSys + phonology spreadsheets | A (CC BY 4.0) | rsl 714 + 158 rows; Georgian 523; Tajik 571 + 254; afg 62 | [OSF agnwj](https://api.osf.io/v2/nodes/agnwj/?embed=license); [figshare](https://api.figshare.com/v2/articles/15170700) |
| Asian SignBank (CUHK CSLDS) | Phonology-coded lexicon (Brentari model), Excel export | C (all rights reserved; data mining prohibited) | sqs, inl (Jakarta, Yogyakarta), hos, ysm (Yangon), hks, jsl (4,750 signs total) | asiansignbank@cslds.org. [copyright](http://www.cslds.org/asb/copyright.jsp?p=copyright&c=ALL&l=en) |
| SIL SooSL Web | Video dictionaries with dialect tags and component codes | C (CC BY-NC-ND 4.0 + no-copy) | jos 7,103; hab 1,206; esn 1,065; tse 279; Vanuatu 148; ase demo 101; csn (Filadelfia) 56; rms 42 | websoosl@sil.org. [API](https://api-web.soosl.net/projects/list) |
| ELAR (SOAS) | Archive deposits | B/C (non-commercial; no redistribution without written permission) | prz, Bay Islands, Chatino, uks, iks, hps, jus/jhs/gds (MDG1045), Alipur, bqy, psc (dk0598), Extreme North Cameroon (dk0347), LSCI (dk0076), bog (dk0108), Macau, asf, cds, ugn, Bouakako, Panamanian items | [ELAR how-to-use](https://www.elararchive.org/how-to-use/) |
| TLA (MPI Nijmegen) | Archive deposits | C (mostly restricted) | ads (AdaSL lexicon 276 items + phonology Excel), Dogon, bqy corpus, dse (Corpus NGT, Visibase), ECHO (bfi/dse/swl) | [TLA AdaSL](https://archive.mpi.nl/tla/islandora/object/tla%3A1839_00_0000_0000_0016_8A57_F) |
| PARADISEC | Archive deposits | B (BY-NC-SA; not in models) | pgz (LWR2, LWR1), asf (SocCog), Bininj Gunwok sign (asw) | [conditions](https://www.paradisec.org.au/deposit/access-conditions/) |
| 3D-LEX v1.0 | Mocap (gloves + Vicon + ARKit) | A (CC BY 4.0) | ase 1,000; dse 1,000 | [OSF](https://api.osf.io/v2/nodes/cv276/?embed=license) |
| OpenHands v1 ISLR poses | MediaPipe pose bundles | A for INCLUDE (ins) and GSL (gss); B for WLASL/MS-ASL (ase), AUTSL (tsm), LSA64 (aed), PHOENIX (gsg) | ins, gss, ase, tsm, aed, gsg | [Zenodo 6674324](https://zenodo.org/records/6674324) |
| SignBank+ | Cleaned SignPuddle text↔SignWriting | B (NC relicence of BY-SA upstream; use SPML instead) | ~64 codes, e.g. kvk 106,456; bzs 92,010; ase 59,973; gsg 46,853 rows | [GitHub](https://github.com/sign-language-processing/signbank-plus) |
| Wikimedia Commons / Lingua Libre | Isolated and mixed videos | A per file | aen 1,211; fsl 634 (Lingua Libre ~190, Elix 100); csc 95; xml 65; bfi 39; tza 20; Macedonian 19; bzs 17; Tamil (ins) 16; ase 15 videos + 280 files; nzs 10; dse 6; sfb 6; gsg 5; ssp 3; csf 1; gse 1 | Per-file licence check needed; "Media contributed by Spread the sign" (119 files) is D by policy. [Commons](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language) |
| Wiktionary sign lemmas | Handshape@location title transcriptions | A (BY-SA) | ~450 lemmas in 21 categories: ase 271, csl 43, kvk 6, jsl 4, csf 3, fsl 2, fcs 2, psd 2, others | [category](https://en.wiktionary.org/wiki/Category:American_Sign_Language_lemmas) |
| Signsuisse / WMT-SLT 2023 release | Isolated video + gloss + example sentence | B (non-commercial; no redistribution) | sgg 9,044; ssr 6,423; slf 2,754 | [WMT-SLT data](https://www.wmt-slt.com/data) |
| Digital Bible Library / bible-nlp sign-bibles | Continuous Bible translations | A per entry (e.g. CC BY-SA 4.0), continuous only | ase, bqn, esl, eso, eth, gse, ins, lsb, mzy, nsi, nsp, rsl, sqs, tza, ugn, xki (+ mis) | Out of scope for citation forms. [HF](https://huggingface.co/datasets/bible-nlp/sign-bibles) |
| Dictio (Masaryk Univ.) | Video dictionary | C (no licence) | cse 12,514; svk 4,809; ils 369; ase 127; ukl 71; asq | [dictio.info](https://www.dictio.info/) |
| sematos | Video dictionary | C/D | csc 297; ssp 6,076; fsl; ils 440; gsg | [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/sematos.html) |
| SignTyp (UConn) | Phonology transcriptions (~4,350) | C ("available on request") | 20+ countries, not listed | [SignTyp](https://signtyp.uconn.edu/) |
| Sign-Hub atlas | Grammatical features | B (CC BY-NC-SA 4.0; browse-only) | Many, not lexical | [thesignhub.eu](https://thesignhub.eu/atlas) |
| Ham2Pose package | HamNoSys → pose | D as a package (B upstream) | pso 2,568; gsg 1,914; gss 889; fsl 381 | [GitHub](https://github.com/rotem-shalev/Ham2Pose) |
| SignAvatars / SignSparK / SignNet-1M | SMPL-X motion | B (NC; YouTube components D) | ase, gsg, csl (+ HamNoSys subset pso/gss/fsl) | [SignAvatars](https://github.com/ZhengdiYu/SignAvatars) |
| SignVerse-2M / YouTube-SL-25 | Pose from YouTube | D | 55 codes | [HF](https://huggingface.co/datasets/SignerX/SignVerse-2M) |
| Multilingual ISLR MediaPipe (danielelvs) | Landmarks | B | bzs, ins, kvk | MIT tag does not override sources |
| Hamburg Sign Language Dataset Compendium | Catalogue | Catalogue text CC BY; licence column unreliable | 87 lexical resources, 43 corpora | [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/) |
| SignLanguage-Dataset-Hub | Catalogue | Finder only; wrong labels | ~120 rows | [GitHub](https://github.com/rudra496/SignLanguage-Dataset-Hub) |

## Appendix D — Denominator and languages with no usable source

Baseline: Glottolog 5.3 family `sign1238` plus the SIL ISO 639-3 table gives **234 languoids and 163 distinct ISO codes** (227 Glottolog languages, 156 of them coded, plus lso, sls, lsb and wbs, plus dyl, yhs and zhk). Ethnologue now verifies at 160. Each ISO code was classed by its best source after corrections; Vietnamese national sources count toward hab, haf and hos alike.

| Region (Glottolog primary country) | ISO codes | Tier A (substantive) | Tier A (thin only) | B/C only | Nothing at A–C |
|---|---|---|---|---|---|
| North America | 7 | 3 | 0 | 3 | 1 |
| Latin America & Caribbean | 30 | 12 | 5 | 6 | 7 |
| Europe | 42 | 22 | 11 | 4 | 5 |
| Caucasus & Central Asia | 1 | 1 | 0 | 0 | 0 |
| Middle East & North Africa | 15 | 5 | 4 | 4 | 2 |
| Sub-Saharan Africa | 25 | 5 | 6 | 8 | 6 |
| South Asia | 10 | 1 | 4 | 4 | 1 |
| East Asia | 9 | 5 | 0 | 2 | 2 |
| Southeast Asia | 16 | 7 | 2 | 2 | 5 |
| Oceania | 8 | 1 | 1 | 3 | 3 |
| **Total** | **163** | **62** | **33** | **36** | **32** |

**ISO-coded languages with nothing at Tier A–C (32), by region.** Some of these have Tier D material only, such as SpreadTheSign listings, YouTube, or all-rights-reserved apps, or are historical or monastic sign systems:

- **North America (1):** Martha's Vineyard Sign Language (mre)
- **Latin America & Caribbean (7):** Albarradas Sign Language (lsc); Bribri Sign Language (rib); Brunca Sign Language (rnb); Dominican Sign Language (doq); Jamaican Country Sign Language (jcs); Puerto Rican Sign Language (psl); Sivia Sign Language (lsv)
- **Europe (5):** Latvian Sign Language (lsl); Moldova Sign Language (vsi); Monastic Sign Language (mzg); Old Kentish Sign Language (okl); Valencian Sign Language (vsv)
- **Middle East & North Africa (2):** Al-Sayyid Bedouin Sign Language (syy); Mardin Sign Language (dsz)
- **Sub-Saharan Africa (6):** Burundian Sign Language (lsb); Guinea-Bissau Sign Language (lgs); Guinean Sign Language (gus); Hausa Sign Language (hsl); Sierra Leone Sign Language (sgx); Tebul Sign Language (tsy)
- **South Asia (1):** Bhutanese Sign Language (dyl)
- **East Asia (2):** Amami Koniya Sign Language (jks); Miyakubo Sign Language (ehs)
- **Southeast Asia (5):** Ban Khor Sign Language (bfk); Chiangmai Sign Language (csd); Laos Sign Language (lso); Penang Sign Language (psg); Selangor Sign Language (kgi)
- **Oceania (3):** Miriwoong Sign Language (rsm); Solomon Islands Sign Language (szs); Yan-nhaŋu Sign Language (yhs)

**Varieties without their own ISO code that do have A–C material (29):** Georgian SL, Tajik SL, Azerbaijani SL and Bangla SL at substantive Tier A. Haitian SL, Guyana SL, Northern Ireland SL, Macedonian SL, Kazakh-Russian SL, the Unified Arabic proxy, Iraqi SL, Yemeni SL and Ivorian LSCI at thin Tier A. At B/C only: Bay Islands SL, San Juan Quiahije Chatino SL, Luxembourgish SL, Faroese SL, Emirati, Omani, Kuwaiti and Palestinian SL, Cameroon SL, Extreme North Cameroon SL, Bouakako SL, Dogon SL, Alipur SL, SIBI, Macau SL and Vanuatu SL. The remaining non-ISO Glottolog languoids are mostly village and rural sign languages with no source at all. Earlier catalogue-only counts (101 of 163 with any catalogue hit, 51 with nothing) are superseded by these figures. The gap passes and the local-language sweep added sources for Georgian, Tajik, Armenian, Hong Kong, PNG, Vanuatu and others.

## Appendix E — Prioritised permission-email list

Priority weighs citation forms or phonology unlocked per email, Marionet's immediate needs (ASL E2 video, the SignDesc phonology seeds), and how many languages one channel reaches. Contacts are as recorded in the notes; where none was recorded, the route is the named site.

| # | Write to | What it unlocks | Languages | Current tier → hoped |
|---|---|---|---|---|
| 1 | ASL-LEX maintainers, asllexproject@gmail.com | Written confirmation that the OSF files (2,723 entries) may be used commercially, plus the reference videos for E2 | ase | B (contested) / C → A |
| 2 | SIL SooSL Web, websoosl@sil.org (to forward to dictionary owners) | Jordanian 7,103 signs; Hanoi 1,206; LESSA 1,065; Tunisian 279; Vanuatu 148, all with component codes and dialect tags | jos, hab, esn, tse, Vanuatu | C → A/B |
| 3 | Asian SignBank, asiansignbank@cslds.org | 4,750 signs with Brentari-model phonology, as an Excel export | sqs, inl, hos, ysm, hks, jsl | C → A/B |
| 4 | ISLRTC (islrtc.nic.in) | Written confirmation that GODL covers ~13.6k citation videos and the Drive folders | ins | C → A |
| 5 | NADT Thailand (th-sl.com) | 8,086-word Thai SL database | tsq | C → A/B |
| 6 | FESF (psl.org.pk) | 7,500+ word PSL dictionary, 78 categories | pks | C → A/B |
| 7 | SGB-FSS (Signsuisse), plus UZH for the Boyes Braem lexicon | 18,221 lexicon items, plus 3,000 DSGS signs with HamNoSys | sgg, ssr, slf | B/C → A |
| 8 | Stockholm Univ., teckenlexikon@ling.su.se | Official STS lexicon export (~21.6k signs with transcriptions) and terms beyond BY-NC-SA | swl | B → A |
| 9 | MOET Vietnam (QIPEDC) | ~4,000 words with North/Central/South variants | hab, haf, hos | D/C → A |
| 10 | Hamzah Luqman (KFUPM), hluqman@kfupm.edu.sa | KArSL-502 (Unified Arabic dictionary chapters), mArSL, ArabSign | sdl, Arabic proxy | C → A/B |
| 11 | UW PJM Lab (Rutkowski); Korpus PJM, j.filipczak@uw.edu.pl | CDPSL HamNoSys + handshape/location (3,476 signs); confirm the Korpus PJM licence | pso | C → A |
| 12 | IDGS Hamburg, info@dgs-korpus.de | DGS-Korpus type list with HamNoSys (14,064 types) for avatar synthesis | gsg | B → A |
| 13 | UCL DCAL / CAVA Registrar | BSL SignBank (~2,500) phonology export; confirmation that BY-SA covers avatar derivatives of the BSL Corpus OA data | bfi | C → A |
| 14 | DSRU, Victoria Univ. of Wellington (nzsl.nz/contact-us) | nzsl.db (5,344 words, 63 handshape codes): CC BY-NC-SA release vs no-AI site licence | nzs | C → B/A |
| 15 | LSFB asbl | Resolve BY-NC-ND vs BY-SA; export of ~4,000 signs | sfb | B → A |
| 16 | VGTC, info@vgtc.be | Woordenboek / Global Signbank VGT (16,928 glosses; start/end handshape, location) | vgt | C → A |
| 17 | Auslan Signbank editors (auslan.org.au feedback form) | Derivation permission (ND) and phonology CSV for 5,172 signs | asf | B → A |
| 18 | UFSC, Ronice Müller de Quadros | Signbank da Libras export (3,118 signs) and a BY grant | bzs | B → A |
| 19 | ILSP Athens | POLYTROPON Lexicon (8,616 signs with manual/non-manual coding); NOEMA (3,000 HamNoSys) | gss | C → A/B |
| 20 | Haifa Sign Language Research Lab / Ma'agale Shema; Rose Stamp (Bar-Ilan) | ISL dictionary videos (~4,233 list), KQSL (~265), AJSL (~470); ISL corpus elicitation | isr, sqx, ajs | C → A/B |
| 21 | Danske Døves Landsforbund | tegnsprog.dk export (2,324 articles with Hånd/Sted codes) | dsl | C → A |
| 22 | Statped; NTNU | Norsk tegnordbok (9,135 lexemes); Global Signbank NTS (1,946) | nsl | C → A |
| 23 | ZGH Klagenfurt | LedaSila licence (17,400 signs) and export | asq | C → A |
| 24 | Ben Zaid et al. / Shorouk Association (Ouarzazate) | MoSL 2,199 isolated videos | xms | C → A |
| 25 | Osugi Lab, Tsukuba Univ. of Technology (contact in the CiNii record) | Bulk video and commercial terms; historical written sign descriptions | jsl | C → A |
| 26 | CSL-LEX authors (OSF 6ewty) | CC BY licence for 700 signs × 9 phonological parameters | csl | C → A |
| 27 | HKSL iconicity authors (OSF 5vxzf) | Signer-consent scope; whether the 4-character IDs come from another lexicon | hks | A (confirm) |
| 28 | Peter Hess / Peace Corps Kenya | Consent and licence intent for 487 KSL STEM clips | xki | A-licence / C-provenance → A |
| 29 | Leiden HANDS! Lab (Victoria Nyst); Angoua Tano | AdaSL phonology Excel; release the LSCI (1,258) and Malian (439) app lexicons on Zenodo like GSL | ads, LSCI, bog | C → A |
| 30 | Wikisigns / ULPGC Cátedra Telefónica (Carlos González) | Source MP4s instead of YouTube embeds | mfs, mzc, wbs, gss, ugy, xki, mzy, bzs, gsm, Guyana | D (video) → A |
| 31 | SHH Iceland, shh@shh.is | Exact SignWiki CC variant; original video files | icl, Faroese, nbs, tza, Georgian, fse, fss, nsl | B/C → A/B |
| 32 | Lauren Reed (ANU), lauren.reed@anu.edu.au | PNGSL wordlists and culture-sign lexicon for research tuning | pgz | B → B+ |
| 33 | Taha Zerrouki, t.zerrouki@univ-bouira.dz | Which licence governs 3DZSignDB; clearance of Dicta-Sign-derived entries | asp | B → A |
| 34 | NIKL (02-2669-9775) | Whether 한국수어사전 is NC-ND (text) or NC (link); derivation permission | kvk | B → B/A |
| 35 | CENAREC; UNAL (LeSiCo); INSOR; CONADIS Ecuador | LESCO 1,041 signs; LeSiCo 1,980; INSOR dictionary; "Gabriel Román" ~5,000 | csr, csn, ecs | C → A |
| 36 | ELAR stewards: Rehana Omardeen (Providencia), Ben Braithwaite (Bay Islands, TTSL), Aniz/Godoy (Ka'apor), MDG1045 (Jumla, Jhankot) | Written agreement beyond ELAR's non-commercial terms, after community consultation | prz, Bay Islands, lst, uks, jus, jhs | B → A |
| 37 | Carol Neidle (BU ASLLRP) | ASLLVD-derived SignDesc; ASL-Phono / Skeleton3D redistribution | ase | C → A |
| 38 | NU / K-SLARS; KKY Plzeň (zdkrnoul@kky.zcu.cz) | FluentSigners-50 / KRSL20 licence; MC-TRISLAN mocap location | K-RSL, cse | C → A/B |
| 39 | EKI (Tiina Laansalu) | CLARIN ACA download of the EVK dictionary | eso | B (research) |
| 40 | Jamaica Association for the Deaf | Partnership for the ~1,490-entry JSL glossary | jls | C → B/A |

## Appendix F — Tier D traps (do not ingest)

These sources are mislabelled mirrors, YouTube-hosted footage, SpreadTheSign-derived data, scrapes of dictionaries whose terms forbid it, all-rights-reserved apps and publishers, or permissive badges over restricted upstreams. Several carry a CC label on Kaggle, Hugging Face or Zenodo that the original rights holder never granted. Where the original is usable, the matching Tier B or C row appears in Appendix B.

| Language | Source | URL | Why it is Tier D |
|---|---|---|---|
| American SL (ASL) | MS-ASL | – | ?; YouTube-sourced |
| American SL (ASL) | DeafTEC STEM dictionary | [deaftec.org/stem-dictionary/](https://deaftec.org/stem-dictionary/) | © RIT, all rights reserved; YouTube embeds. |
| American SL (ASL) | YouTube-ASL | [github.com/google-research/google-researc…](https://github.com/google-research/google-research/tree/master/youtube_asl) | Video IDs only; footage on YouTube. |
| American SL (ASL) | Gallaudet Dictionary of ASL | [api.crossref.org/works?query.bibliographi…](https://api.crossref.org/works?query.bibliographic=Gallaudet+Dictionary+of+American+Sign+Language) | – |
| American SL (ASL) | PopSign Kaggle re-upload (mrgeislinger/popsign-asl-v1-0-game-test) | [kaggle.com/datasets/mrgeislinger/popsign-…](https://www.kaggle.com/datasets/mrgeislinger/popsign-asl-v1-0-game-test) | Kaggle re-upload relabelled CC BY-SA; use the original PopSign (CC BY 4.0). |
| American SL (ASL) | Handspeak | [handspeak.com/info/index.php?info=terms](https://www.handspeak.com/info/index.php?info=terms) | "Users may not reproduce, republish, distribute, or otherwise use any content from the Site without prior written permission"; no consent to use "for… |
| American SL (ASL) | Lifeprint / ASLU | [lifeprint.com/asl101/pages-layout/permiss…](https://www.lifeprint.com/asl101/pages-layout/permission.htm) | "Unless you have a pre-established contract -- you do not have permission to use ..."; "You do not have permission to use ASLU materials to make, app… |
| American SL (ASL) | Signing Savvy | [signingsavvy.com/termsofservice](https://www.signingsavvy.com/termsofservice) | "By using this site, you are agreeing not to copy our content ... You may not reproduce, publish, transmit, distribute, display, modify, create deriv… |
| American SL (ASL) | SignASL.org (aggregator) | [signasl.org/about](https://www.signasl.org/about) | "© 2013 - 2026. Website by Daniel Mitchell." (only notice); treat as scraped mirror: videos from "a number of sources" incl. StartASL, SMARTSign, Dea… |
| American SL (ASL) | ASL Clear (ASL Ed Center, LLC) | [aslclear.org/](https://aslclear.org/) | "© 2016- 2026 . All Rights Reserved. Managed by ASL Ed Center, LLC" |
| American SL (ASL) | ChicagoFSWild / ChicagoFSWild+ (TTIC) | [home.ttic.edu/~klivescu/ChicagoFSWild.htm](https://home.ttic.edu/~klivescu/ChicagoFSWild.htm) | none stated; clipped from YouTube and deafvideo.tv; FSboard authors could not evaluate on ChicagoFSWild+ "due to licensing" |
| American SL (ASL) | Dictio (Masaryk University), Compendium ASL lexical entry | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictio.html) | "Licence information not available"; Compendium ASL page https://www.sign-lang.uni-hamburg.de/lr/compendium/language/ase.html |
| American SL (ASL) | Hallatlan Dictionary, Compendium ASL lexical entry | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/hallatlandictionary.html) | "Licence information not available" |
| American SL (ASL) | SignStudy, Compendium ASL lexical entry | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/signstudy.html) | "Licence information not available" |
| American SL (ASL) | DePaul ASL Avatar (Paula) | [asl.cs.depaul.edu/](https://asl.cs.depaul.edu/) | none stated (no data release); Avatar lexicon; iso = notes' ASL code. |
| American SL (ASL) | Bailey & Dolby (2002), The Canadian Dictionary of ASL | – | proprietary print; quoted in Yoel thesis |
| American SL (ASL) | Hallatlan Dictionary | [hallatlan.hu/c/jelek/](https://www.hallatlan.hu/c/jelek/) | information not available; multilingual (hsh, ase) |
| American SL (ASL) | SignStudy | [signstudy.org/](http://www.signstudy.org/) | information not available; temporarily unavailable at SLDC writing |
| American SL (ASL) | PopSign ASL v1.0 | – | "license None" (sign.mt); tfds pop_sign and asl_signs (PopSign/Kaggle) loaders |
| American SL (ASL) | Sem-Lex (tfds sem_lex) | – | No licence on the code; do not vendor. |
| American SL (ASL) | HF aipieces/WLASL (unlicensed mirror) | – | no licence tag |
| American SL (ASL) | HF 34data/wlasl (unlicensed mirror) | – | no licence tag |
| Inuit SL | Schuit 2012, "Sociolinguistic profile of Inuit Sign Language" | [dare.uva.nl/id/1d07ce25-1b1d-429a-b0f8-08…](https://dare.uva.nl/id/1d07ce25-1b1d-429a-b0f8-08db37869af0) | no license (no PDF) |
| Inuit SL | Inuit corpus (SLDC) | – | information not available or restricted |
| Keresan Pueblo SL | Kelley & McGregor 2003, "Keresan Pueblo Indian Sign Language", in Nur… | [jan.ucc.nau.edu/~jar/NNL/NNL_11.pdf](https://jan.ucc.nau.edu/~jar/NNL/NNL_11.pdf) | no license stated (copyrighted); Glottolog kere1299 ("NOCODE_Keresan-Pueblo-Sign"); chapter deliberately leaves the community unnamed; ELAR "keresan"… |
| Maritime SL | Buchanan 2021 PhD thesis (Lamar University), "Preservation of Maritim… | [glottolog.org/resource/reference/id/658878](https://glottolog.org/resource/reference/id/658878) | ?; No data. ELAR exact-phrase search 0; DataCite 0. |
| Maritime SL | Yoel (2009) PhD thesis "Canada's Maritime Sign Language" (University… | [hdl.handle.net/1993/21581](http://hdl.handle.net/1993/21581) | "Copyright © 2009 by Judith Yoel"; "made available by authority of the copyright owner solely for the purpose of private study and research"; no hand… |
| Maritime SL | Warner et al. 1998 (PAMAPLA 21) | [conferences.lib.unb.ca/index.php/pamapla/…](https://conferences.lib.unb.ca/index.php/pamapla/article/view/295) | no license |
| Martha's Vineyard SL | Groce 1985 (Harvard UP) | – | copyrighted; extinct language |
| Plains Indian SL | Davis "Hand Talk" project | [api.si.edu/openaccess/api/v1.0/search?q=%…](https://api.si.edu/openaccess/api/v1.0/search?q=%22Indian+Sign+Language+Council%22&api_key=DEMO_KEY) | All rights reserved. |
| Plains Indian SL | tulplok-* IA items (Tulsa library collection) | [archive.org/advancedsearch.php?q=identifi…](https://archive.org/advancedsearch.php?q=identifier%3Atulplok*&fl%5B%5D=identifier&output=json) | no licence; Language not named in this file. |
| Plains Indian SL | Tomkins, IA universalindians006602mbp (catalogued as 1926) | – | OCR copyright page reads "COPYRIGHT 1926 / 1927 / 1929 / 1931 / 1936"; trap: catalogued as 1926 but contains later copyrights; renewal status of 1931… |
| Plains Indian SL | IA tulplok-* items | – | no license; sub-researcher finding, not re-checked |
| Plains Indian SL | Davis's "Hand Talk" project / book (Cambridge UP 2010) | – | All rights reserved. |
| Quebec SL (LSQ) | "Signes de Québec" app | [api.datacite.org/dois?query=%22langue%20d…](https://api.datacite.org/dois?query=%22langue%20des%20signes%20qu%C3%A9b%C3%A9coise%22) | – |
| Quebec SL (LSQ) | Fondation des Sourds dictionary | [web.archive.org/web/20260813105733/https:…](http://web.archive.org/web/20260813105733/https://www.fondationdessourds.net/) | ?; Only "Vidéos" sections; no dictionary found. |
| Quebec SL (LSQ) | DICO LSQ app (RESO) | [apps.apple.com/us/app/dico-lsq/id14657097…](https://apps.apple.com/us/app/dico-lsq/id1465709763) | "© RESO - Le regroupement des parents et amis des sourds et malentendants franco-ontariens"; no license text; paid app |
| Quebec SL (LSQ) | Fondation des Sourds du Québec | [fondationdessourds.net/](https://www.fondationdessourds.net/) | "Copyright © Fondation des Sourds – Tous droits réservés"; whether a dictionary exists there is UNVERIFIED |
| Cuban SL | SpreadTheSign (only Cuban entry in the Hamburg Compendium) | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/csf.html) | ?; Cuba is the only Caribbean language in the Compendium's language index |
| Jamaican SL | JAD LMS "JSL Glossary Based on Bedrock Vocabulary Words" | [lms.jamdeaf.org.jm/mod/glossary/view.php?…](https://lms.jamdeaf.org.jm/mod/glossary/view.php?id=135) | "Jamaica Association for the Deaf © 2026. All rights reserved."; still images, not video; largest JSL lexicon found |
| Jamaican SL | UConn "Terminology in Jamaican Sign Language" | [reading.education.uconn.edu/resources/jam…](https://reading.education.uconn.edu/resources/jamaican-sign-language-terms/) | "© University of Connecticut" (only notice); YouTube-linked |
| Jamaican SL | JAD main site | [jamdeaf.org.jm/](https://jamdeaf.org.jm/) | "© 2015 Jamaica Association for the Deaf" |
| Konchri Sain (Jamaican Countr… | UWISpace thesis "Selected features of Konchri Sain morphology and syn… | [hdl.handle.net/2139/49159](https://hdl.handle.net/2139/49159) | restricted; no ELAR deposit; JAD library link cited on Wikipedia (library.jamdeaf.org.jm/.../country-sign) does not resolve in DNS |
| Providencia SL | Washabaugh 1986, Five Fingers for Survival | – | copyrighted book |
| Trinidad & Tobago SL | Government-funded TTSL dictionary (mentioned on UWI project page) | [sta.uwi.edu/rdifund/projects/ttel/sign_de…](https://sta.uwi.edu/rdifund/projects/ttel/sign_description.asp) | UWI page footer "© 2004 - 2013 http://sta.uwi.edu. All Rights Reserved."; page "mentions a Government-funded project to produce a TTSL dictionary" bu… |
| Trinidad & Tobago SL | TTSL thesis (UWISpace 2139/44392) | [hdl.handle.net/2139/44392](https://hdl.handle.net/2139/44392) | restricted ("Please contact the West Indiana Division...") |
| Argentine SL | LSA-T | [github.com/midusi/LSA-T](https://github.com/midusi/LSA-T) | code "MIT"; videos "extracted from the CN Sordos YouTube channel"; no data license; Google Drive |
| Argentine SL | CAS Señario de términos y expresiones básicas en LSA | [cas.org.ar/senario-de-terminos-y-expresio…](https://cas.org.ar/senario-de-terminos-y-expresiones-en-lengua-de-senas-argentina/) | "© 2020 Confederación Argentina de Sordos. Todos los derechos reservados."; print/PDF + QR-linked videos; form-gated download |
| Argentine SL | SpreadTheSign (listed by Hamburg Compendium) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/spreadthesign.html) | ?; Compendium lists SpreadTheSign for Libras, LSM, LSA, LSCh; Tier D by Marionet rule |
| Bolivian SL | Ministerio de Educación 2010 LSB course modules (Scribd copy) | [es.scribd.com/document/677900564/Lsb-Modu…](https://es.scribd.com/document/677900564/Lsb-Modulo-2) | copyright notice; exists only as a Scribd copy with copyright notice; Q4 lists "Ministerio de Educación modules" as next Tier B/C step; LSB recognize… |
| Brazilian SL (Libras) | Kaggle bernardinello/signbank | [kaggle.com/api/v1/datasets/view/bernardin…](https://www.kaggle.com/api/v1/datasets/view/bernardinello/signbank) | Mislabelled scrape of Libras Signbank (UFSC terms are CC BY-NC-SA 4.0). |
| Brazilian SL (Libras) | Hand Talk | [handtalk.me/en/terms-of-use](https://www.handtalk.me/en/terms-of-use) | All rights reserved. |
| Brazilian SL (Libras) | Kaggle davimedio01/v-librasil | [kaggle.com/datasets/davimedio01/v-librasil](https://www.kaggle.com/datasets/davimedio01/v-librasil) | Mirror of V-LIBRASIL / MINDS-Libras with no licence tag; V-LIBRASIL forbids redistribution. |
| Brazilian SL (Libras) | Capovilla dictionary (Dicionário enciclopédico ilustrado trilíngue) | [api.crossref.org/works?query.bibliographi…](https://api.crossref.org/works?query.bibliographic=Capovilla+Dicion%C3%A1rio+enciclop%C3%A9dico+ilustrado+tril%C3%ADngue) | ?; Only articles about it. Language inferred by extractor. |
| Brazilian SL (Libras) | folhascadentes/mamao-libras-dict | [github.com/folhascadentes/mamao-libras-di…](https://github.com/folhascadentes/mamao-libras-dict) | Extracted from Capovilla dictionary. |
| Brazilian SL (Libras) | Brazilian Sign Language Alphabet – Passos, Fernandes, Comunello | [data.mendeley.com/datasets/k4gs3bmx5k](https://data.mendeley.com/datasets/k4gs3bmx5k) | Mendeley "CC BY 4.0" (provenance doubtful); FLAG alphabet-only; description says built from images "previously available in Kaggle" and describes the… |
| Brazilian SL (Libras) | HF mirrors ibmectech/v-librasil-raw, ibmectech/minds-libras-raw, 34da… | [huggingface.co/datasets/ibmectech/v-libra…](https://huggingface.co/datasets/ibmectech/v-librasil-raw) | Mirror of V-LIBRASIL / MINDS-Libras with no licence tag; V-LIBRASIL forbids redistribution. |
| Brazilian SL (Libras) | SpreadTheSign (listed by Hamburg Compendium) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/spreadthesign.html) | ?; Compendium lists SpreadTheSign for Libras, LSM, LSA, LSCh; Tier D by Marionet rule |
| Brazilian SL (Libras) | Capovilla, Dicionário da Língua de Sinais do Brasil (EDUSP) | – | ? (commercial print); not researched (search budget exhausted) |
| Brazilian SL (Libras) | IBICT SWOJS glossário (tfds swojs_glossario) | [swojs.ibict.br/portal/api/items](http://swojs.ibict.br/portal/api/items) | No licence on the code; do not vendor. |
| Brazilian SL (Libras) | 'SignBank Brazilian Sign Language (Libras)' (Kaggle bernardinello/sig… | [kaggle.com/datasets/bernardinello/signbank](https://www.kaggle.com/datasets/bernardinello/signbank) | Mislabelled scrape of Libras Signbank (UFSC terms are CC BY-NC-SA 4.0). |
| Chilean SL | Kaggle Chilean datasets (alphabet-only) | [kaggle.com/api/v1/datasets/list?search=ch…](https://www.kaggle.com/api/v1/datasets/list?search=chilean%20sign%20language) | ?; DataCite none. |
| Chilean SL | SpreadTheSign (listed by Hamburg Compendium) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/spreadthesign.html) | ?; the only source the Compendium lists for LSCh (https://www.sign-lang.uni-hamburg.de/lr/compendium/language/csg.html); no Chilean datasets on Zenod… |
| Colombian SL | Tree of Life Foundation Glossary | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/treeoflife.html) | Compendium "Open licence" but hosted on YouTube; YouTube videos |
| Colombian SL | Filoseñando | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/filosenando.html) | "information not available"; Android app prototype on Google Drive |
| Colombian SL | Filoseñando (SLDC) | – | information not available; "Public access to prototype"; no URL in SLDC row |
| Costa Rican SL (LESCO) | Hands On LESCO app | [delfino.cr/2021/11/hands-on-lesco-lanza-d…](https://delfino.cr/2021/11/hands-on-lesco-lanza-diccionario-para-acercar-a-poblacion-a-la-lengua-de-senas-costarricense) | not checked; reported by Delfino (search result only) |
| Ecuadorian SL | HF calvin261/lsec-data | [huggingface.co/datasets/calvin261/lsec-da…](https://huggingface.co/datasets/calvin261/lsec-data) | HF upload with no licence tag. |
| Guatemalan SL (LENSEGUA) | UN Guatemala PDF (alphabet) | [guatemala.un.org/es/download/164428/273706](https://guatemala.un.org/es/download/164428/273706) | not checked; GET returned a 622-byte HTML page. Language inferred by extractor. |
| Mexican SL (LSM) | SEP / Libre Acceso dictionary PDF | [educacionespecial.sep.gob.mx/storage/recu…](https://educacionespecial.sep.gob.mx/storage/recursos/2023/05/xzrfl019nV-4Diccionario_lengua_%20Senas.pdf) | ? (HTTP 403); Language inferred by extractor from sep.gob.mx. |
| Mexican SL (LSM) | DIELSEME (Diccionario Español–LSM, SEP/DEE) | [sign-lang.uni-hamburg.de/lrec/data/dielse…](https://www.sign-lang.uni-hamburg.de/lrec/data/dielseme.html) | none found; lexical-db / isolated-video; listed URL campusdee.ddns.net/publicacionesdee.aspx returns 404; URL given is the sign-lang@LREC entry |
| Mexican SL (LSM) | SpreadTheSign (listed by Hamburg Compendium) | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/spreadthesign.html) | ?; Compendium lists SpreadTheSign for Libras, LSM, LSA, LSCh; Tier D by Marionet rule |
| Peruvian SL | HF Fulo1/senas-lsp-dataset | [huggingface.co/datasets/Fulo1/senas-lsp-d…](https://huggingface.co/datasets/Fulo1/senas-lsp-dataset) | HF upload with no licence tag. |
| Salvadoran SL (LESSA) | kevarce/lenguaje-de-seas-de-el-salvador-lessa (Kaggle) | – | "Contents: © Original Authors"; ISO from Q9 (esn) |
| Austrian SL (ÖGS) | Gebärdenwelt.tv | [gebaerdenwelt.tv/](https://www.gebaerdenwelt.tv/) | none stated (no licence statement on imprint https://www.gebaerdenwelt.tv/impressum/); news-video platform run by the association behind oegsbarriere… |
| British SL (BSL) | BSL Zone (BSLBT) -> LumoTV | [bslzone.co.uk/](https://www.bslzone.co.uk/) | All rights reserved broadcast/commercial. |
| British SL (BSL) | SignStation | [signstation.org/](https://signstation.org/) | All rights reserved broadcast/commercial. |
| British SL (BSL) | Signature BSL dictionary | [signature.org.uk/](https://www.signature.org.uk/) | no licence text retrievable |
| British SL (BSL) | BSLDict (Oxford VGG) | [robots.ox.ac.uk/~vgg/research/bsldict/](https://www.robots.ox.ac.uk/~vgg/research/bsldict/) | "Creative Commons Attribution 4.0 International License" but "The copyright remains with the original owners of the videos."; videos collected from s… |
| British SL (BSL) | SignBSL.com (aggregator) | [signbsl.com/](https://www.signbsl.com/) | none stated ("© 2013 - 2026. Website by Daniel Mitchell."); some signs credited to third parties (Scottish Sensory Centre, QIA Dictionary of ICT) |
| British SL (BSL) | British Sign Language Glossaries of Curriculum Terms (SLDC) | [ssc.education.ed.ac.uk/BSL/](https://www.ssc.education.ed.ac.uk/BSL/) | information not available |
| Catalan SL (LSC) | Portal de la LSC (IEC) vocabulary | [lsc.iec.cat/vocabulari2/](https://lsc.iec.cat/vocabulari2/) | "La reproducció, distribució, comercialització, transformació o comunicació pública no autoritzades d'aquestes obres constitueix una infracció dels d… |
| Catalan SL (LSC) | sematos (LSC) | [sematos.eu](http://www.sematos.eu) | "information not available" (Compendium); no licence |
| Catalan SL (LSC) | Global Signbank - LSC (temporary) | [signbank.cls.ru.nl/datasets/LSC](https://signbank.cls.ru.nl/datasets/LSC) | "Temporary dataset … until the Catalan Signbank has been set up later in 2022 … no external use possible" |
| Catalan SL (LSC) | Catalan portal lsc.iec.cat | [lsc.iec.cat/](https://lsc.iec.cat/) | no licence on home page; non-Signbank national portal listed in SLDC; live |
| French Belgian SL (LSFB) | GeoQuery-LSFB (Zenodo) | [zenodo.org/records/19220833](https://zenodo.org/records/19220833) | (licence field empty) |
| French SL (LSF) | IVT (Commercial publisher of "cinq dictionnaires bilingues") | [ivt.fr/](https://www.ivt.fr/) | Commercial publisher. |
| French SL (LSF) | Monica Companys LSF dictionaries | [api.datacite.org/dois?query=%22langue%20d…](https://api.datacite.org/dois?query=%22langue%20des%20signes%20fran%C3%A7aise%22) | ? (commercial publisher; site not fetched); No repository hits. |
| French SL (LSF) | parlr/lsf-data + HF mirror Langue-des-signes-francaise/LSF_data | [huggingface.co/datasets/Langue-des-signes…](https://huggingface.co/datasets/Langue-des-signes-francaise/LSF_data) | Uploader MIT label over Éducation nationale videos (third-party mirror). |
| French SL (LSF) | LSF @ Éducation Nationale (original source of LSF_data videos) | [lsf.education.fr](https://lsf.education.fr) | Uploader MIT label over Éducation nationale videos (third-party mirror). |
| French SL (LSF) | sematos | [sematos.eu](http://www.sematos.eu) | proprietary: "Tout le contenu du Service, y compris les vidéos, textes, graphiques et logiciels, est la propriété de Sématos.eu ou de ses fournisseur… |
| German SL (DGS) | Kestner | [kestner.de/](https://www.kestner.de/) | Commercial shop. |
| German SL (DGS) | ECHO corpus (small DGS part) | [hdl.handle.net/1839/00-0000-0000-0001-489…](https://hdl.handle.net/1839/00-0000-0000-0001-4892-C) | "CC BY-NC-ND 3.0" (Compendium); DGS section: "ND forbids derivatives, so it is Tier D for Marionet" |
| German SL (DGS) | sematos (DGS) | [sematos.eu](http://www.sematos.eu) | Compendium "Licence information not available"; Compendium: "DGS dataset temporarily unavailable" |
| German SL (DGS) | HLex (Hamburg) | [sign-lang.uni-hamburg.de/hlex/](https://www.sign-lang.uni-hamburg.de/hlex/) | information not available; temporarily unavailable at SLDC writing; DGS specialist dictionary with HamNoSys (L307) |
| German SL (DGS) | GaLex (Hamburg) | [sign-lang.uni-hamburg.de/galex/](https://www.sign-lang.uni-hamburg.de/galex/) | information not available; DGS specialist dictionary with HamNoSys (L307) |
| German SL (DGS) | TLex (Hamburg) | – | information not available; temporarily unavailable; no URL in SLDC row; DGS specialist dictionary with HamNoSys (L307) |
| German SL (DGS) | PLex (Hamburg) | [sign-lang.uni-hamburg.de/projekte/plex/st…](https://www.sign-lang.uni-hamburg.de/projekte/plex/start.htm) | information not available; temporarily unavailable at SLDC writing; DGS specialist dictionary with HamNoSys (L307) |
| German SL (DGS) | SLex (Hamburg) | [sign-lang.uni-hamburg.de/slex/](https://www.sign-lang.uni-hamburg.de/slex/) | information not available; temporarily unavailable at SLDC writing; DGS specialist dictionary with HamNoSys (L307) |
| German SL (DGS) | Psycholinguistic ratings of sign frequency and iconicity in DGS (OSF) | [osf.io/r67nx](https://osf.io/r67nx) | none on node; ratings |
| Irish SL | ISL Covid-19 glossary (Irish Deaf Society) | [irishdeafsociety.ie/irish-sign-language-f…](https://www.irishdeafsociety.ie/irish-sign-language-for-covid19-related-vocabulary/) | YouTube-hosted; © IDS. |
| Irish SL | Justisigns 2 glossary | [justisigns2.com/](https://justisigns2.com/) | no licence text; Language(s) not named in this file. |
| Irish SL | ISL-HS (Irish Sign Language Hand-Shape dataset, DCU) | [github.com/marlondcu/ISL](https://github.com/marlondcu/ISL) | no data licence (repo has no LICENSE); paper record "Creative Commons Attribution-NonCommercial-Share Alike 3.0 License" (paper only); paper https://… |
| Irish SL | ISL STEM Glossary (DCU) | [dcu.ie/islstem](https://www.dcu.ie/islstem) | none stated; videos embedded from a third-party provider (cookie-gated) |
| Irish SL | Irish Deaf Society English-ISL Dictionary | [irishdeafsociety.ie/irish-sign-language/d…](https://www.irishdeafsociety.ie/irish-sign-language/dictionary/) | "© 2026 Irish Deaf Society" (no licence statement; T&C not read); ISL explanations of English words, not sign-for-word entries; launched March 2025 |
| Irish SL | Concise ISL (app) | [apps.apple.com/app/id1046591871](https://apps.apple.com/app/id1046591871) | proprietary; commercial app |
| Irish SL | Signs of Ireland (corpus) | – | information not available or restricted |
| Italian SL (LIS) | A3LIS-147 | [web.archive.org/web/20151224161517/http:/…](https://web.archive.org/web/20151224161517/http://a3lab.dii.univpm.it:80/projects/a3lis) | Public tar.gz with no licence; host dead. |
| Italian SL (LIS) | DIZLIS (Cooperativa sociale ALBA Onlus) | [dizlis.it/](http://www.dizlis.it/) | "Tutti i contenuti di questo sito sono liberamente consultabili ma non copiabili ... non possono essere replicati su altri siti Web ... senza la prev… |
| Italian SL (LIS) | A3LIS-147 (UNIVPM, Fagiani et al. 2012) | [iris.univpm.it/handle/11566/74228](https://iris.univpm.it/handle/11566/74228) | Public tar.gz with no licence; host dead. |
| Norwegian SL (NTS) | Norsk Tegnordbok | [tegnordbok.no](https://www.tegnordbok.no) | information not available; prominent outreach target (L307) |
| Portuguese SL (LGP) | Porto Editora / Infopédia LGP | [infopedia.pt/](https://www.infopedia.pt/) | ? (HTTP 403) |
| Portuguese SL (LGP) | Infopédia / Porto Editora LGP | – | proprietary publisher (not verified); HTTP 403 to fetch; Porto Editora print "Dicionário da LGP" not checked |
| Sign Language of the Netherla… | Van Dale Basiswoordenboek NGT | [vandale.nl/](https://www.vandale.nl/) | subscription-only; NGT URL is 404. |
| Sign Language of the Netherla… | Giving Cognition a Hand (TLA) | [sign-lang.uni-hamburg.de/lr/compendium/co…](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/givingcognitionahandcorpus.html) | "Licence information not available; No public access" |
| Spanish SL (LSE) | SignaMed dictionary | [signamed.web.app/](https://signamed.web.app/) | UNVERIFIED (Compendium: "information not available"); project https://signamed.uvigo.es/; JS web app, fetch returned no terms |
| Spanish SL (LSE) | sematos | [sematos.eu](http://www.sematos.eu) | "information not available" (Compendium); searchable by handshape; also covers LSC (297), LSF, IS |
| Spanish SL (LSE) | CORLSE (corpus) | – | information not available or restricted; language inferred from name (LSE) |
| Swedish SL (STS) | Swedish SL database of video-recorded sign-pseudosign pairs (OSF) | [osf.io/4rj5f](https://osf.io/4rj5f) | none |
| Swedish SL (STS) | Commons "Media contributed by Spread the sign" | [commons.wikimedia.org/wiki/Category:Media…](https://commons.wikimedia.org/wiki/Category:Media_contributed_by_Spread_the_sign) | 118 CC BY-SA 3.0 + 1 CC BY 3.0 files, 116 credited to Spread the Sign: SpreadTheSign-derived, so D under Marionet policy. |
| Belarusian SL | SpreadTheSign (as listed by catalogue) | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/belarusiansignlanguage.html) | ?; URL is the catalogue page that lists it; SpreadTheSign is Tier D by policy; Compendium lists only SpreadTheSign |
| Bulgarian SL | tsvm/bg-sign-language (extractor/scraper of the МОН Bulgarian SL dict… | [github.com/tsvm/bg-sign-language](https://github.com/tsvm/bg-sign-language) | Scraper of the МОН dictionary ("Всички права принадлежат на МОН"). |
| Bulgarian SL | Bulgarian Ministry of Education (МОН) Bulgarian SL dictionary (origin… | – | Scraper of the МОН dictionary ("Всички права принадлежат на МОН"). |
| Bulgarian SL | SpreadTheSign (as listed by catalogue) | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/bqn.html) | ?; URL is the catalogue page that lists it; SpreadTheSign is Tier D by policy; Compendium lists only SpreadTheSign |
| Croatian SL | SpreadTheSign (as listed by catalogue) | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/csq.html) | ?; URL is the catalogue page that lists it; SpreadTheSign is Tier D by policy; Compendium lists only SpreadTheSign |
| Cypriot SL | SpreadTheSign (as listed by catalogue) | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/cypriotsignlanguage.html) | ?; URL is the catalogue page that lists it; SpreadTheSign is Tier D by policy; Compendium lists only SpreadTheSign |
| Czech SL (ČZJ) | CZJ domain specific Lexicon (SLDC) | – | information not available; "Not online available at the time of writing" |
| Estonian SL | SpreadTheSign (as listed by catalogue) | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/eso.html) | ?; URL is the catalogue page that lists it; SpreadTheSign is Tier D by policy; Compendium lists only SpreadTheSign for EVK |
| Greek SL | HF dkourem/Multimodal_Greek_Sign_Language_and_Lip_Reading | [huggingface.co/api/datasets/dkourem/Multi…](https://huggingface.co/api/datasets/dkourem/Multimodal_Greek_Sign_Language_and_Lip_Reading) | license tag "other" |
| Greek SL | HF luciayen/GSL-Health-Sentences-64 | – | no licence |
| Greek SL | NOEMA (ILSP) | [sign.ilsp.gr/signilsp-site/index.php/el/n…](https://sign.ilsp.gr/signilsp-site/index.php/el/noima/) | information not available; access "Restricted access requires individual license agreement"; CLARIN lists "NOEMA+" (GSL) as "Freely accessible" (sepa… |
| Latvian SL | SpreadTheSign (as listed by catalogue) | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/lsl.html) | ?; URL is the catalogue page that lists it; SpreadTheSign is Tier D by policy; Compendium lists only SpreadTheSign |
| Lithuanian SL | SpreadTheSign (as listed by catalogue) | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/lls.html) | ?; URL is the catalogue page that lists it; SpreadTheSign is Tier D by policy; Compendium lists only SpreadTheSign |
| Mardin SL | Mardin corpus (SLDC) | – | information not available or restricted; ISO from Q9 table |
| Polish SL (PJM) | SpreadTheSign (as listed by catalogue) | [sign-lang.uni-hamburg.de/lrec/language/ps…](https://www.sign-lang.uni-hamburg.de/lrec/language/pso.html) | ?; URL is the catalogue page that lists it; SpreadTheSign is Tier D by policy; listed on the LREC Anthology pso page |
| Romanian SL | RoCoISLR | [arxiv.org/abs/2511.12767](https://arxiv.org/abs/2511.12767) | Scraped from PeSemne/DLMG ("Toate drepturile rezervate"). |
| Romanian SL | pesemne.ro | [pesemne.ro/](https://pesemne.ro/) | "Copyright 2026 © pesemne.ro. Toate drepturile rezervate."; Scraped by RoCoISLR. The DLMG website (also scraped) has no URL in this file. |
| Romanian SL | dlmg.ro / ailg.ro (dlmgLsr app by ANIALMG + Fundația Orange) | [playtech.ro/2018/aplicatie-limbaj-mimico-…](https://playtech.ro/2018/aplicatie-limbaj-mimico-gestual-dlmgslr/) | none found (dlmg.ro homepage HTML has no licence or copyright string); URL is the 2018 playtech.ro article |
| Romanian SL | SpreadTheSign (as listed by catalogue) | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/rms.html) | ?; URL is the catalogue page that lists it; SpreadTheSign is Tier D by policy; Compendium lists only SpreadTheSign |
| Russian SL | HF 34data/slovo | – | Unlicensed HF mirror of Slovo; use upstream. |
| Russian SL | HF karinversan/slovo-full-landmarks | [huggingface.co/api/datasets/karinversan/s…](https://huggingface.co/api/datasets/karinversan/slovo-full-landmarks) | Unlicensed HF mirror of Slovo; use upstream. |
| Russian SL | HF zavman/rsl-top100-slovo | – | Unlicensed HF mirror of Slovo; use upstream. |
| Russian SL | Surdoserver | – | ?; unreachable and not in any catalogue |
| Turkish SL (TİD) | FatimahEmadEldin/quran-sign-diyanet-tid (Hugging Face) | [huggingface.co/datasets/FatimahEmadEldin/…](https://huggingface.co/datasets/FatimahEmadEldin/quran-sign-diyanet-tid) | Third-party Diyanet broadcast video. |
| Turkish SL (TİD) | HF aipieces/AUTSL | [huggingface.co/api/datasets/aipieces/AUTSL](https://huggingface.co/api/datasets/aipieces/AUTSL) | no licence tag; scraped mirror |
| Turkish SL (TİD) | Boğaziçi University Dictionary (SLDC) | – | information not available; no URL in SLDC row |
| Turkish SL (TİD) | HF aipieces/AUTSL (unlicensed mirror) | [huggingface.co/datasets/aipieces/AUTSL](https://huggingface.co/datasets/aipieces/AUTSL) | no licence tag |
| Ukrainian SL | UkrSL (UNLP 2026) | [aclanthology.org/2026.unlp-1.6/](https://aclanthology.org/2026.unlp-1.6/) | no dataset licence; ACL Anthology CC BY 4.0 covers the paper only; broadcast footage; no dataset URL |
| Egyptian SL | Kaggle CC0 Egyptian 15-word set | [kaggle.com/datasets?search=egyptian+sign+…](https://www.kaggle.com/datasets?search=egyptian+sign+language) | CC0 Kaggle set with empty description: no consent/provenance; treat as D. |
| Egyptian SL | Kaggle eslamezzat "Arabic Sign Language (ArSL) for Words (videos)" | [kaggle.com/datasets/eslamezzat/arabic-sig…](https://www.kaggle.com/datasets/eslamezzat/arabic-sign-language-arsl-for-words-videos) | CC0 Kaggle set with empty description: no consent/provenance; treat as D. |
| Egyptian SL | YouTube animated ESL dictionary (Resalasom playlists) | – | ?; YouTube; via Wikipedia https://en.wikipedia.org/wiki/Egyptian_Sign_Language |
| Egyptian SL | Kaggle abdullahsherdy/egyptian-sign-language-recognition | [kaggle.com/datasets/abdullahsherdy/egypti…](https://www.kaggle.com/datasets/abdullahsherdy/egyptian-sign-language-recognition) | "Unknown" |
| Egyptian SL | Egyptian SL handshape phonology; Egyptian SL toponyms (OSF) | [osf.io/eypg9](https://osf.io/eypg9) | none; poster / analysis |
| Emirati SL | esl-platform avatars (GitHub alanbarret/esl-platform) | [github.com/alanbarret/esl-platform](https://github.com/alanbarret/esl-platform) | Scrapes the ZHO UAE dictionary against its terms. |
| Israeli SL | isl.danfishgold.com / danfishgold/isl (scraped mirror) | [github.com/danfishgold/isl](https://github.com/danfishgold/isl) | none (repo has no license); scraper queries http://isl.org.il/wp-admin/admin-ajax.php with action search_video |
| Israeli SL | Corpus of Israeli Sign Language | [osf.io/yma98/](https://osf.io/yma98/) | none set on the OSF node; islcorpus.co.il DNS lookup failed 2026-10-14; catalogue entry also lists KQSL but corpus targets ISL; Anthology https://www… |
| Israeli SL | Kaggle "Israeli sign language" (yardenrozen1) | [kaggle.com/datasets/yardenrozen1/israeli-…](https://www.kaggle.com/datasets/yardenrozen1/israeli-sign-language) | "Unknown"; fingerspelling-only |
| Israeli SL | ISL Dictionary (danfishgold) | [isl.danfishgold.com](https://isl.danfishgold.com) | information not available |
| Jordanian SL | Signly (emannjoum/arabic-to-sign-language-system) | [github.com/emannjoum/arabic-to-sign-langu…](https://github.com/emannjoum/arabic-to-sign-language-system) | Apache-2.0 (code); "The animated skeletons used in the outputs were generated from human-signer videos using MediaPipe"; video source unstated |
| Kafr Qasem SL | Kafr Qasem Sign Language Dictionary (SignLab Haifa) | [signlab.haifa.ac.il/index.php/component/k…](https://signlab.haifa.ac.il/index.php/component/k2/itemlist/) | information not available |
| Moroccan SL | soufianeboulahcen/Multimodal-Moroccan-SLG (MoSL redistribution) | [github.com/soufianeboulahcen/Multimodal-M…](https://github.com/soufianeboulahcen/Multimodal-Moroccan-SLG) | ?; README says to download "vedios-dataset.zip" from the Mendeley DOI (no longer listed there) |
| Moroccan SL | MSL dataset metadata v2 (Maarouf, Maarouf, El Ayachi, Biniz; Mendeley… | [data.mendeley.com/public-api/datasets/85h…](https://data.mendeley.com/public-api/datasets/85hhbtykrp) | "CC BY 4.0"; "collected from publicly available online videos… inclusion of Arabic subtitles"; glosses include news terms (e.g. "الأراضي الفلسطينية ا… |
| Moroccan SL | MSL dataset v1 (Mendeley w4xwcpt45f, MSL-DataSet.zip) | [data.mendeley.com/public-api/datasets/w4x…](https://data.mendeley.com/public-api/datasets/w4xwcpt45f) | "CC BY 4.0"; third-party online/broadcast footage wrapped in CC BY; Mendeley CC BY text notes third-party content may need further permission |
| Persian SL (ZEI) | ISLR101 (Ranjbar & Taheri) | [github.com/HoseinRanjbar/ISLR101](https://github.com/HoseinRanjbar/ISLR101) | no dataset license (GitHub license null; arXiv paper CC BY-NC-ND 4.0); pose data via Google Drive links in the README; institution not verified; arXi… |
| Persian SL (ZEI) | salar96/Iranian-Sign-Language-ISL-Dataset | [github.com/salar96/Iranian-Sign-Language-…](https://github.com/salar96/Iranian-Sign-Language-ISL-Dataset) | no license; "collected using Perception Neuron sensory glove" |
| Persian SL (ZEI) | ZEI corpus (SLDC) | – | information not available or restricted |
| Qatari SL | Sokoon app (MSDF + Mada, Feb 2024) | [msdf.gov.qa/en/media-center/news-list/lin…](https://msdf.gov.qa/en/media-center/news-list/line-digitizing-sign-language-social-development-launches-sokoon-application) | no licensing or open data mentioned; free on Android and iOS; built on the "Unified Arabic Sign Dictionary" ("issued in 2007") |
| Saudi SL | KArSL (KFUPM) | [hamzah-luqman.github.io/KArSL/](https://hamzah-luqman.github.io/KArSL/) | none stated on the page; GitHub repo license null; raw videos and RGB frames in public Google Drive folders; depth and skeleton links are placeholder… |
| Saudi SL | HF FatimahEmadEldin/karsl-502-arabic-sign-language-v2 (KArSL mirror) | [huggingface.co/datasets/FatimahEmadEldin/…](https://huggingface.co/datasets/FatimahEmadEldin/karsl-502-arabic-sign-language-v2) | no license tag; third-party KArSL mirror/derivative |
| Saudi SL | Kaggle yousefdotpy/karsl-502 (KArSL mirror) | [kaggle.com/datasets/yousefdotpy/karsl-502](https://www.kaggle.com/datasets/yousefdotpy/karsl-502) | "Unknown"; third-party KArSL mirror; source of the 25.5 GB KArSL size figure |
| Saudi SL | Kaggle tfmohamedyahia/kars502-pose-75 (KArSL derivative) | [kaggle.com/datasets/tfmohamedyahia/kars50…](https://www.kaggle.com/datasets/tfmohamedyahia/kars502-pose-75) | claims "CC BY-SA 4.0" on MediaPipe .pose; permissive relabel of unlicensed KArSL |
| Saudi SL | Kaggle abdalrhmantwfik/karsl-502-landmarks (KArSL derivative) | [kaggle.com/datasets/abdalrhmantwfik/karsl…](https://www.kaggle.com/datasets/abdalrhmantwfik/karsl-502-landmarks) | claims CC0; permissive relabel of unlicensed KArSL |
| Saudi SL | HF Hamzah/KArSL | [huggingface.co/datasets/Hamzah/KArSL](https://huggingface.co/datasets/Hamzah/KArSL) | ?; empty repo; also a Q4 dead end |
| Saudi SL | Kaggle tfmohamedyahia/isharah-1000-pose | [kaggle.com/datasets/tfmohamedyahia/ishara…](https://www.kaggle.com/datasets/tfmohamedyahia/isharah-1000-pose) | "CC BY-NC-SA 4.0" claimed; claim contradicts Isharah's no-redistribution clause |
| Saudi SL | HF GufranSabri/isharah-selfi | [huggingface.co/datasets/GufranSabri/ishar…](https://huggingface.co/datasets/GufranSabri/isharah-selfi) | card `cc-by-nc-4.0`; authorship unclear |
| Saudi SL | KSU-ArSL (King Saud Univ., IEEE DataPort) | [ieee-dataport.org/documents/ksu-arsl-arab…](https://ieee-dataport.org/documents/ksu-arsl-arabic-sign-language) | no license; "This dataset requires an IEEE DataPort Subscription to access"; "Files have not been uploaded for this dataset"; DOI 10.21227/8axv-ma58 |
| Sudanese SL | Print: "Qāmūs luġat 'išārat al-ṣumm al-sūdāniyyah" | – | ?; Arabic title; tier implied (notes treat print dictionaries as Tier D, L60/L94) |
| Unified Arabic SL (proxy) | Kaggle CC0 ArSL 12-phrase set | [kaggle.com/datasets?search=egyptian+sign+…](https://www.kaggle.com/datasets?search=egyptian+sign+language) | CC0 Kaggle set with empty description: no consent/provenance; treat as D. |
| Unified Arabic SL (proxy) | Kaggle mohamedsaeed823/arslvideodataset | [kaggle.com/datasets/mohamedsaeed823/arslv…](https://www.kaggle.com/datasets/mohamedsaeed823/arslvideodataset) | CC0 Kaggle set with empty description and byte-identical duplicates: no provenance or consent. |
| Yemeni SL (notes' "yms" is no… | YSLD (kdhafir/YSLD) | [github.com/kdhafir/YSLD](https://github.com/kdhafir/YSLD) | Apache-2.0 (Cordova app); images third-party: about.html credits "جميع الصور من القاموس الاشاري المصور" ("all images from the illustrated sign dictio… |
| Adamorobe SL | Adamorobe Sign Language Lexicon (SLDC) | [hdl.handle.net/1839/00-0000-0000-0016-8A5…](https://hdl.handle.net/1839/00-0000-0000-0016-8A57-F) | information not available (SLDC); CLARIN: "Restricted"; SLDC access "restricted access" |
| Adamorobe SL | Adamorobe corpus (SLDC) | – | information not available or restricted |
| Angolan SL | Print/DVD: ANSA/MED "Dicionário da Língua Gestual Angolana" | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; promo on YouTube; nothing usable |
| Beninese SL | Print: Sekpon et al. "Mon livret de signes" T1/T2 | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; tier implied (notes treat print dictionaries as Tier D, L60/L94) |
| Burundian SL | Print/DVD: Deafnet/NID/ANSB 2009 "Manuel d'introduction à la Langue d… | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; tier implied (notes treat print dictionaries as Tier D, L60/L94); nothing usable |
| Cameroon SL (incl. CASL-W60) | His Hands Reader "Cameroon Hand Signs" | [hishandsreader.org/1cm-cameroon-languages…](https://www.hishandsreader.org/1cm-cameroon-languages.html) | ?; missionary app or site that links a YouTube playlist |
| Cameroon SL (incl. CASL-W60) | Cameroon corpus (SLDC) | – | information not available or restricted; SLDC pseudo-code cameroonsignlanguage (L209) |
| Congolese / DRC SL | Print: Cornett 1990 | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; tier implied (notes treat print dictionaries as Tier D, L60/L94) |
| Dogon SL | Dogon corpus (SLDC) | – | information not available or restricted; SLDC pseudo-code dogonsignlanguage (L209) |
| Ethiopian SL | CESLR continuous EthSL dataset (NeurIPS 2026) | [kaggle.com/datasets/antenemyehalme/contin…](https://www.kaggle.com/datasets/antenemyehalme/continuous-ethiopia-sign-language-dataset) | none stated (NeurIPS page); Kaggle "licenses: unknown"; GitHub ethio-artifical/CESLR Apache-2.0 for code only; NeurIPS https://neurips.cc/virtual/202… |
| Ethiopian SL | Print: ENAD 2008 "Ethiopian Sign Language Dictionary" | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | – |
| Gambian SL | Print: GADHOH Books 1–4 | [gadhoh.com](https://gadhoh.com) | ?; gadhoh.com is unreachable; tier implied (notes treat print dictionaries as Tier D, L60/L94) |
| Ghanaian SL | HF mirror jameszokah/ghanaian-sign-language-lexicon | [huggingface.co/datasets/jameszokah/ghanai…](https://huggingface.co/datasets/jameszokah/ghanaian-sign-language-lexicon) | Partial mirror of the Zenodo GSL Lexicon with wrong licence/author. |
| Ghanaian SL | Kaggle mirror jameszokah/ghsl-dataset | – | Partial mirror of the Zenodo GSL Lexicon with wrong licence/author. |
| Ghanaian SL | Survival GSL Dictionary (Deutsch & McGuire), PDF on Dropbox | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | none (no license); PDF still reachable on Dropbox |
| Ghanaian SL | HF la-min/signmed-ghana-medical | – | none (no license); tier implied (no license) |
| Ghanaian SL | GSL Multimodal Annotation — Ghanaian SL (OSF) | [osf.io/v4sbn](https://osf.io/v4sbn) | none; annotation |
| Ghanaian SL | HF jameszokah/ghanaian-sign-language-lexicon | [huggingface.co/api/datasets?search=sign-l…](https://huggingface.co/api/datasets?search=sign-language) | Partial mirror of the Zenodo GSL Lexicon with wrong licence/author. |
| Guinea-Bissau SL | Print: Martini & Morgado 2008, 2017 | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; tier implied (notes treat print dictionaries as Tier D, L60/L94) |
| Guinean SL (LSAF) | Print/DVD: Kamei (ed.) 2008 "DVD: Langue des Signes d'Afrique Francop… | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; gus is SIL's ref. name "Guinean Sign Language" (notes head the section "LSAF (gus…), Guinea"); tier implied (notes treat print dictionaries as Tie… |
| Hausa SL | Print: Schmaling & Bala Hausawa 2011 "Maganar hannu… Littafi na farko… | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; tier implied (notes treat print dictionaries as Tier D, L60/L94); nothing usable |
| Hausa SL | GitHub maitalata/hausa_sl | – | none (no license); Android app; tier implied (notes: unlicensed GitHub projects are Tier D, L413) |
| Ivorian SL (LSCI) | Côte d'Ivoire corpus (SLDC) | – | information not available or restricted; SLDC pseudo-code ivoriansignlanguage (L209) |
| Kenyan SL | KSL Dictionary (ksldictionary.com / MSTADI, Kenneth Smith Gathuru) | [ksldictionary.com/](https://www.ksldictionary.com/) | licence "information not available" (Compendium); footer "Copyright © 2015 - Built by Kenneth Smith Gathuru at mstadi.com"; largest KSL lexicon; cita… |
| Kenyan SL | Zindi re-upload: HF ArtemGu/0_Kenyan_Sign_Language_Classification | [huggingface.co/datasets/ArtemGu/0_Kenyan_…](https://huggingface.co/datasets/ArtemGu/0_Kenyan_Sign_Language_Classification) | "Unknown" / none; re-upload of Zindi data |
| Kenyan SL | Zindi re-upload: Kaggle yonaschanie/kslc-dataset | – | "Unknown" / none; re-upload of Zindi data |
| Kenyan SL | Zindi re-upload: Kaggle mikemollel/kenyasign… | – | "Unknown" / none; re-upload of Zindi data; slug truncated in notes |
| Kenyan SL | KSL/Zambian SL health poster project | [ksl-poster.mindfulinteractive.com](https://ksl-poster.mindfulinteractive.com) | none (no license); live; also covers Zambian SL |
| Kenyan SL | Print: Akach 1991; Mweri 2001 (KNAD); Rothenborg-Jensen & Yego 1988 (… | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | – |
| Kenyan SL | KSL Dictionary | [ksldictionary.com/](https://www.ksldictionary.com/) | information not available; also mobile app; prominent outreach target (L307) |
| Lesotho SL | Print: Machobane & Matlosa 2010 "Lesotho Sign Language Learners' Dict… | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; tier implied (notes treat print dictionaries as Tier D, L60/L94); nothing usable |
| Malagasy SL | Print: Federasionan'ny Marenina eto Madagasikara 2009 "Diksioneran'ny… | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | – |
| Malian SL (LaSiMa / Bamako) | Pinsonneault 1999 "Lexique des signes utilisés par les sourds du Mali" | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; print or scan on africansignlanguages.org |
| Malian SL (LaSiMa / Bamako) | Malian LaSiMa corpus (SLDC) | – | information not available or restricted; ISO from Q9 (bog Bamako SL = Glottolog Langue de Signes Malienne) |
| Mozambican SL | Print: Ngunga et al. 2013 "Dicionário da Língua de Sinais de Moçambiq… | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | – |
| Namibian SL | Print: Morgan, Liddell, Haikali et al. 1991 (Gallaudet); Madison 2005… | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; tier implied (notes treat print dictionaries as Tier D, L60/L94) |
| Namibian SL | GitHub RighteousW/sign_avatar | – | none (unlicensed); unlicensed prototype; tier implied (notes: unlicensed GitHub projects are Tier D, L413) |
| Namibian SL | GitHub dukejohannesA/…NSL…fingerspelling trainer | – | none (unlicensed); unlicensed prototype; slug truncated in notes; tier implied (notes: unlicensed GitHub projects are Tier D, L413) |
| Nigerian SL | Print: Odusanya 2000; Ajavon 2003 | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; tier implied (notes treat print dictionaries as Tier D, L60/L94) |
| Rwandan SL | Print: RNAD/VSO 2009 "Inkoranyamagambo Y'Amarenga Yo Mu Rwanda" | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | – |
| Somali SL | GitHub u-mar/Somali-Sign-Language-Detection | – | none (unlicensed); unlicensed prototype |
| Somali SL | GitHub muud/soo-xir-on | – | none (unlicensed); unlicensed prototype |
| South African SL | NID (National Institute for the Deaf) | [nid.org.za/](https://www.nid.org.za/) | "All content owned by The National Institute for the Deaf / All Rights Reserved"; no API or licence |
| South African SL | LearnSASL (NID's dictionary front end) | [learnsasl.com/](https://www.learnsasl.com/) | none stated |
| South African SL | mySASL / Fabulous-SASL (GitHub vbookshelf) | [github.com/vbookshelf/Fabulous-SASL](https://github.com/vbookshelf/Fabulous-SASL) | none (GitHub repo has no license) |
| South African SL | Maswao SASL corpus (DSFSI, University of Pretoria) | [github.com/dsfsi/maswo-south-african-sign…](https://github.com/dsfsi/maswo-south-african-sign-language-dataset) | none (repo has no license); built from YouTube interpreter footage; "the original video clips are not redistributed. Instead, we provide the correspo… |
| South African SL | Print: Penn et al. 1992–94 "Dictionary of Southern African Signs" (HS… | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; listed on africansignlanguages.org |
| South African SL | "South African SL 2" link (signgenius) | [signgenius.com/download.shtml](https://signgenius.com/download.shtml) | ?; dead link from africansignlanguages.org list; tier implied (dead link) |
| South Sudanese SL | Print: Light for the World 2016 "Basic South Sudanese Sign Language D… | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | ?; tier implied (notes treat print dictionaries as Tier D, L60/L94) |
| São Tomé and Príncipe SL | Print dictionary (2014) | – | ?; outside the brief's language list; tier implied (notes treat print dictionaries as Tier D, L60/L94) |
| Tanzanian SL | Print: Chama cha Viziwi Tanzania 1993; Muzale (ed.) 2004 "Kamusi ya L… | [africansignlanguages.org/dictionariesdict…](http://www.africansignlanguages.org/dictionariesdictionaires/) | – |
| Tanzanian SL | GitHub 2022ren/sign-language-word-editor (TSL with SignWriting) | – | none (no license); empty repo; dead end; tier implied (notes: unlicensed GitHub projects are Tier D, L413) |
| Ugandan SL | SpreadTheSign (the resource portal's only online link for Ugandan SL) | – | ?; linked from africansignlanguages.org |
| Ugandan SL | GitHub UmarMubiru/usl-recognition-app | – | none (unlicensed); unlicensed student app; tier implied (notes: unlicensed GitHub projects are Tier D, L413) |
| Zambian SL | KSL/Zambian SL health poster project | [ksl-poster.mindfulinteractive.com](https://ksl-poster.mindfulinteractive.com) | none (no license); same item as the Kenyan SL row |
| Zambian SL | GitHub faithkafwimbi/real-time-Zambian-sign-language-recognition-and-… | – | none (no license); student project; tier implied (notes: unlicensed GitHub projects are Tier D, L413) |
| Bangla SL (Bangladesh; no ISO… | SignLanguage-Dataset-Hub BdSL-Sensor-Glove (BDSL-SEN-001) | [github.com/rudra496/SignLanguage-Dataset-…](https://github.com/rudra496/SignLanguage-Dataset-Hub/tree/HEAD/data/bdsl/BdSL-Sensor-Glove) | catalog label "CC BY 4.0"; README: "This is DEMO/SAMPLE data … Not collected from real participants"; generated by tools/generate_realistic_data.py (… |
| Indian SL | indiansignlanguage.org | [web.archive.org/web/20240721/https://indi…](http://web.archive.org/web/20240721/https://indiansignlanguage.org/) | All rights reserved; sells dictionary. |
| Indian SL | shoebham/text_to_isl SiGML | – | GPL-2.0 SiGML whose README doubts accuracy. |
| Indian SL | SpreadTheSign | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/ins.html) | ?; Tier D by Marionet policy; not re-examined; listed by Hamburg Compendium |
| Indian SL | Kaggle swaptr/isl-video (INCLUDE mirror) | [kaggle.com/datasets?search=indian+sign+la…](https://www.kaggle.com/datasets?search=indian+sign+language) | "CC BY-SA 4.0" (wrong relabel); mirror with wrong licence relabel; tier per notes' tier key (L3) |
| Indian SL | CISLR (IIT Kanpur, EMNLP 2022) | [aclanthology.org/2022.emnlp-main.707.pdf](https://aclanthology.org/2022.emnlp-main.707.pdf) | HF tag "license:afl-3.0" (cannot override upstream rights); scraped from ISLRTC and indiansignlanguage.org YouTube videos; HF copy gated |
| Indian SL | Indian Technical SL Dictionary (Ramakrishna Mission Vivekananda Educa… | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/indiantechnicalsldict.html) | All rights reserved; sells dictionary. |
| Indian SL | Talking Hands | [talkinghands.co.in/](https://www.talkinghands.co.in/) | "All rights reserved"; no licence or terms text |
| Indian SL | Kaggle prasadshet/indian-sign-language-video-dataset | [kaggle.com/api/v1/datasets/view/prasadshe…](https://www.kaggle.com/api/v1/datasets/view/prasadshet/indian-sign-language-video-dataset) | "MIT" label; "signs were sourced from the official Indian Sign Language YouTube channel" |
| Indian SL | Indian Technical Sign Language Dictionary | [indiansignlanguage.org](https://indiansignlanguage.org) | All rights reserved; sells dictionary. |
| Indian SL | INCLUDE re-uploads (Kaggle daskoushik/include; swaptr/isl-video) | – | Kaggle labels "Other" / "CC BY-SA 4.0" (re-upload); swaptr/isl-video is an INCLUDE re-upload |
| Pakistan SL | Kaggle CC0 raw PSL videos | [kaggle.com/datasets?search=pakistan+sign+…](https://www.kaggle.com/datasets?search=pakistan+sign+language) | CC0; sense-style filenames (e.g. so-in-order-to); likely FESF-derived (inference); per sub-researcher |
| Pakistan SL | SpreadTheSign | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html) | ?; Tier D by Marionet policy; not re-examined; listed by Hamburg Compendium |
| Sri Lankan SL | Sinhala Sign Language Video Dataset (Kaggle dckahawearachchi) | [kaggle.com/api/v1/datasets/view/dckahawea…](https://www.kaggle.com/api/v1/datasets/view/dckahawearachchi/sinhala-sign-language-dataset) | CC0; "Collected through public YouTube videos and private interviews with certified Sinhala Sign Language instructors" |
| Sri Lankan SL | Kaggle TDJ (Sinhala) | [kaggle.com/datasets?search=sinhala+sign+l…](https://www.kaggle.com/datasets?search=sinhala+sign+language) | Unknown; [FS-ONLY] |
| Cambodian SL | Krousar Thmey Dictionary | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/krousarthmeydictionary.html) | "information not available"; host footer "© IJS 92 - 2008. Tous droits réservés."; images; Krousar Thmey 2013 |
| Indonesian SL (BISINDO) | Zenodo 21338857 (redistributes two Kaggle letter sets) | [zenodo.org/records/21338857](https://zenodo.org/records/21338857) | "cc-by-4.0" tag (originals "Unknown"); [FS-ONLY]; relabelled mirror; tier not stated; derived from notes' tier key (L3) |
| Kata Kolok (Bengkala SL) | Kata Kolok corpus (SLDC) | – | information not available or restricted |
| Malaysian SL | BIM Sign Bank (MFD with Guidewire Gives Back) | [bimsignbank.org/](https://bimsignbank.org/) | none stated; React app over api.bimsignbank.org/api/bims; videos are YouTube links; footer links mymfdeaf.org |
| Philippine SL (FSL) | Kaggle tartdrop/fsl-words-letters | [kaggle.com/api/v1/datasets/list/tartdrop/…](https://www.kaggle.com/api/v1/datasets/list/tartdrop/fsl-words-letters) | Byte-identical re-upload of japorton FSL letters. |
| Philippine SL (FSL) | Golgrax/bisig-fsl-dataset (Kaggle + HF) | [kaggle.com/api/v1/datasets/view/golgrax/b…](https://www.kaggle.com/api/v1/datasets/view/golgrax/bisig-fsl-dataset) | Kaggle "Apache 2.0"; names look like dictionary-entry titles, likely scraped; D until shown otherwise |
| SIBI (signed Indonesian) | Kamus SIBI (pmpk.kemdikbud.go.id) | [web.archive.org/web/2021/https://pmpk.kem…](http://web.archive.org/web/2021/https://pmpk.kemdikbud.go.id/sibi/) | "Kamus SIBI … Copyright © 2021 / All rights reserved"; last good capture 2024-11-12; all kemdikbud.go.id hosts now fail DNS |
| SIBI (signed Indonesian) | muhammadrefa/kamus-sibi | [github.com/muhammadrefa/kamus-sibi](https://github.com/muhammadrefa/kamus-sibi) | Videos belong to a YouTuber; permission "being arranged". |
| Singapore SL | Kaggle sritampatnaik/singapore-sign-language-sgsl-6-classes-x-30 | [kaggle.com/datasets?search=singapore+sign…](https://www.kaggle.com/datasets?search=singapore+sign+language) | Unknown |
| Thai SL | ThaiSignVis (HF TOMTUN/ThaiSignVis) | [huggingface.co/datasets/TOMTUN/ThaiSignVis](https://huggingface.co/datasets/TOMTUN/ThaiSignVis) | "Apache-2.0" tag; downloaded from TPchannel (Thai parliamentary broadcasts) |
| Vietnamese SLs (national, und… | QIPEDC "Video 4000 từ" (MOET) | [qipedc.moet.gov.vn/](https://qipedc.moet.gov.vn/) | QIPEDC portal states no licence; Kaggle CC0 copy is a relabelled mirror (C if MOET grants). |
| Vietnamese SLs (national, und… | Kaggle quangtngnndns/vls-data-collection (QIPEDC mirror) | – | QIPEDC portal states no licence; Kaggle CC0 copy is a relabelled mirror (C if MOET grants). |
| Vietnamese SLs (national, und… | Kaggle aresusayhi/vsl-vietnamese-sign-languages (QIPEDC crawl) | [kaggle.com/api/v1/datasets/view/aresusayh…](https://www.kaggle.com/api/v1/datasets/view/aresusayhi/vsl-vietnamese-sign-languages) | QIPEDC portal states no licence; Kaggle CC0 copy is a relabelled mirror (C if MOET grants). |
| Vietnamese SLs (national, und… | Kaggle nguyenanfms/vsl-vietnamese-sign-language | [kaggle.com/datasets?search=vietnamese+sig…](https://www.kaggle.com/datasets?search=vietnamese+sign+language) | "CC BY 4.0" tag; no description; provenance unverified, treat as D until shown otherwise |
| Vietnamese SLs (national, und… | tudienngonngukyhieu.com | [tudienngonngukyhieu.com/](https://tudienngonngukyhieu.com/) | "All Rights Reserved"; has "Âm vị - Hình dạng bàn tay" (phoneme/handshape) section; fetched page contained gambling-spam text |
| Chinese SL | 国家通用手语系列 app (Beijing TouchRead) | [apps.apple.com/us/app/%E5%9B%BD%E5%AE%B6%…](https://apps.apple.com/us/app/%E5%9B%BD%E5%AE%B6%E9%80%9A%E7%94%A8%E6%89%8B%E8%AF%AD%E7%B3%BB%E5%88%97/id1465697243) | paid in-app purchases; "Copyright © Beijing TouchRead Information & Technology Co.,Ltd."; the 2018 dictionary is not openly licensed; NationalCSL-DP… |
| Chinese SL | tuzengji/chinese-sign-language-dictionary | [github.com/tuzengji/chinese-sign-language…](https://github.com/tuzengji/chinese-sign-language-dictionary) | Derived from copyrighted 4-volume national CSL dictionary. |
| Chinese SL | Global Signbank CSL_Shanghai | [signbank.cls.ru.nl/datasets/CSL_Shanghai](https://signbank.cls.ru.nl/datasets/CSL_Shanghai) | "All rights reserved; (c) Radboud University & Fudan University."; "The data are presently not accessible to users outside Radboud University and Fud… |
| Chinese SL | Hugging Face "Nebularer/CSL_Daily" | [huggingface.co/datasets/Nebularer/CSL_Dai…](https://huggingface.co/datasets/Nebularer/CSL_Daily/blob/main/README.md) | not authorised by USTC's agreement; third-party re-upload of CSL-Daily; content not inspected |
| Chinese SL | CSL lexicon (TLA; via CLARIN) | – | "Restricted" (CLARIN) |
| Hong Kong SL | HKSL Browser (CUHK CSLDS) | [cslds.org/hkslbrowser/](http://www.cslds.org/hkslbrowser/) | "Copyright © 2018 by Centre for Sign Linguistics and Deaf Studies . All Rights Reserved"; lexical-db + isolated-video; copyright statement opens "本網頁… |
| Hong Kong SL | TVB-HKSL-News (HKUST) | [tvb-hksl-news.github.io/](https://tvb-hksl-news.github.io/) | none stated; "collected from TVB News Report with Sign Language TV program"; "please fill in the request form and send to us via email"; gloss count… |
| Hong Kong SL | LSD Visual Sign Language Dictionary (启聋手语视像字典) | [sign-aip.net/sign-aip/en/home/](https://www.sign-aip.net/sign-aip/en/home/) | "Copyright © 2013 - 2015 Sign Assisted Instruction Programme. All rights reserved." |
| Japanese SL | JFD (全日本ろうあ連盟) website | [jfd.or.jp/contact](https://www.jfd.or.jp/contact) | Unauthorised reproduction prohibited (D/C). |
| Japanese SL | J-Shuwa | [github.com/SpaJune/J-Shuwa](https://github.com/SpaJune/J-Shuwa) | YouTube IDs + timestamps only. |
| Japanese SL | NHK 手話モーションデータベース (NHK STRL) | [nhk.or.jp/strl/signlanguagecg/searchJSL/](https://www.nhk.or.jp/strl/signlanguagecg/searchJSL/) | "Copyright NHK (Japan Broadcasting Corporation). All rights reserved. 許可なく転載することを禁じます。"; avatar-lexicon / mocap, view-only, no download found; 26 IR… |
| Japanese SL | JFD dictionaries (全日本ろうあ連盟 / 日本手話研究所: 「わたしたちの手話」, 『新日本語-手話辞典』) | [jfd.or.jp/sgi/](https://www.jfd.or.jp/sgi/) | Unauthorised reproduction prohibited (D/C). |
| Japanese SL | Global Signbank - JSL (Keiko Sagara/Minpaku historical) | [signbank.cls.ru.nl/datasets/JSL](https://signbank.cls.ru.nl/datasets/JSL) | "No access for other researchers at this time" |
| Korean SL | HF Trotquonalize/ksl-pose-dictionary-poc | [huggingface.co/datasets/Trotquonalize/ksl…](https://huggingface.co/datasets/Trotquonalize/ksl-pose-dictionary-poc) | Keypoints laundered from ND / restricted sources. |
| Korean SL | github.com/Yangseung/KSL (L3 upstream) | [github.com/Yangseung/KSL](https://github.com/Yangseung/KSL) | No licence; Dropbox/Drive links (D/C). |
| Korean SL | Global Signbank - KSL (Keiko Sagara/Minpaku historical) | [signbank.cls.ru.nl/datasets/KSL](https://signbank.cls.ru.nl/datasets/KSL) | "No access for other researchers at this time" |
| Taiwan SL | CCU TSL dictionary (Taiwan Center for Sign Linguistics) | [twtsl.ccu.edu.tw/TSL/](https://twtsl.ccu.edu.tw/TSL/) | © Taiwan Center for Sign Linguistics, All Rights Reserved (D/C). |
| Taiwan SL | MOE 教育部常用手語辭典 | [special.moe.gov.tw/signlanguage/](https://special.moe.gov.tw/signlanguage/) | "Copyright © 2025 教育部常用手語辭典 All Right Reserved."; no licence or download |
| Taiwan SL | Global Signbank - TSL (Keiko Sagara/Minpaku historical) | [signbank.cls.ru.nl/datasets/TSL](https://signbank.cls.ru.nl/datasets/TSL) | "No access for other researchers at this time" |
| Auslan | Auslan-Daily (NeurIPS 2023 D&B) | [uq-cvlab.github.io/Auslan-Daily-Dataset/d…](https://uq-cvlab.github.io/Auslan-Daily-Dataset/docs/en/introduction) | none stated; "collected from the Auslan educational TV series and Auslan TV programs" |
| Auslan | Auslan Corpus | – | information not available or restricted |
| New Zealand SL | NZSL Share | [nzslshare.nz](https://www.nzslshare.nz) | covered by the same DSRU terms; people who upload to NZSL Share keep ownership of their own content |
| International Sign | sematos | [sematos.eu](http://www.sematos.eu) | information not available; ISO from Q9 table |
| multi | tfds sign-language-datasets (sign-language-processing/datasets) | [github.com/sign-language-processing/datas…](https://github.com/sign-language-processing/datasets) | No licence on the code; do not vendor. |
| multi | Wikimedia Commons "Media contributed by Spread the sign" | [commons.wikimedia.org/wiki/Category:Media…](https://commons.wikimedia.org/wiki/Category:Media_contributed_by_Spread_the_sign) | 118 CC BY-SA 3.0 + 1 CC BY 3.0 files, 116 credited to Spread the Sign: SpreadTheSign-derived, so D under Marionet policy. |
| multi | Abner et al. phylogenetics lexical data (Dryad) | [doi.org/10.5061/dryad.bnzs7h4h1](https://doi.org/10.5061/dryad.bnzs7h4h1) | CC0 label, but 15 of 19 languages sourced from SpreadTheSign: no clean Tier A rows. |
| multi | zhan-a/Kozha SiGML bundle | [github.com/zhan-a/Kozha](https://github.com/zhan-a/Kozha) | MIT-labelled bundle of others' SiGML with unrecorded upstream licences. |
| multi | Hand Talk | – | All rights reserved. |
| multi | Simax | – | no data |
| multi | Neural Sign Actors | – | no data release |
| multi | SpreadTheSign | [sign-lang.uni-hamburg.de/lr/compendium/le…](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/spreadthesign.html) | "Download or use of videos and data without explicit permission, including for research, is prohibited." (Compendium quote); Tier D for every languag… |
| multi | IPSL (iconicity-patterns database) | [sign-lang.uni-hamburg.de/lrec/data/ipsl.h…](https://www.sign-lang.uni-hamburg.de/lrec/data/ipsl.html) | none stated; covers Estonian, Latvian, Lithuanian, Czech, Polish, Russian, Romanian, Greek and Turkish, among others; no licence or video source stat… |
| multi | SignLanguage-Dataset-Hub datasets_catalog.csv (rudra496) | [github.com/rudra496/SignLanguage-Dataset-…](https://github.com/rudra496/SignLanguage-Dataset-Hub/blob/main/datasets_catalog.csv) | ?; row ASL-VID-008 lists ASL Citizen as "CC BY 4.0" with URL aslcitizen.org and citation demeulder2022aslcitizen (wrong on all three counts); lists W… |
| multi | SpreadTheSign (Compendium "Arabic SLs" entry) | [sign-lang.uni-hamburg.de/lr/compendium/la…](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/arabicsls.html) | ?; Compendium lists only SpreadTheSign for Arabic SLs; URL is the Compendium page, no SpreadTheSign URL given |
| multi | YouTube-SL-25 | – | ?; not evaluated further |
| multi | SLDC corpora with language not identifiable from notes: AISL, BASL, D… | – | information not available or restricted; abbreviations ambiguous in notes (e.g. AISL/BASL may match SLDC pseudo-codes australianirishsignlanguage/bla… |
| multi | Abner et al. 2024 Sign Languages Phylogeny dataset (Dryad) | [datadryad.org/dataset/doi:10.5061/dryad.b…](https://datadryad.org/dataset/doi:10.5061/dryad.bnzs7h4h1) | CC0 label, but 15 of 19 languages sourced from SpreadTheSign: no clean Tier A rows. |
| multi | Yu, Geraci & Abner 2018 'Sign Languages and the Online World' (LREC;… | [aclanthology.org/L18-1668.pdf](https://aclanthology.org/L18-1668.pdf) | CC0 label, but 15 of 19 languages sourced from SpreadTheSign: no clean Tier A rows. |
| multi | Ham2Pose combined HamNoSys->video dataset (Shalev-Arkushin, Moryossef… | [github.com/rotem-shalev/Ham2Pose](https://github.com/rotem-shalev/Ham2Pose) | none (GitHub API licence 'Not Found'); Languages: PJM (pso) 2,568 from slownikpjm.uw.edu.pl; DGS (gsg) 1,387 korpusdict/clips + 301 glex + 226 galex;… |
| multi | Neural Sign Actors (CVPR 2024) | [arxiv.org/pdf/2312.02702](https://arxiv.org/pdf/2312.02702) | no public data release or licence found; Languages not stated in notes. |
| multi | Simax / Sign Time GmbH | [live.european-language-grid.eu/catalogue_…](https://live.european-language-grid.eu/catalogue_backend/api/registry/search/?search=sign) | no data licence found (commercial); ELG organisation entry only; language not stated in notes. |
| multi | SignCorpus poses 'Multilingual SLR Pose Datasets' Part 1 (Zenodo) | [doi.org/10.5281/zenodo.6673685](https://doi.org/10.5281/zenodo.6673685) | cc-by-4.0 (label); Unlabelled poses from internet (YouTube) video: news/media, religious content; D despite CC BY label; no lexical value. SignCorpus… |
| multi | SignVerse-2M (HF SignerX/SignVerse-2M) | [huggingface.co/datasets/SignerX/SignVerse…](https://huggingface.co/datasets/SignerX/SignVerse-2M) | CC BY-NC 4.0 (annotations/keypoints); "source videos are not redistributed and remain subject to their platform terms"; 55 codes: aed ase asf asq bfi… |
| multi | YouTube-SL-25 (upstream of SignVerse-2M) | – | ?; Mentioned only as SignVerse-2M source; languages not listed. |
| multi | JWSign (Gueuwou et al., Findings of EMNLP 2023) | [arxiv.org/abs/2311.10174](https://arxiv.org/abs/2311.10174) | none (links + loader only; JW legal asked, 'not yet received a reply'); JW Bible translations; 98 SLs not listed in notes. |

## Appendix G — Exhausted avenues and the remaining open avenue

**Exhausted (do not re-run without a new route).** The two gap passes closed 348 tracked gaps. Of these, 193 were in Western Europe, Central/Eastern Europe, North America and Latin America (80 resolved, 113 exhausted), and 155 were in Africa, Asia, catalogues and cross-linguistic sources (102 resolved, 44 exhausted, 9 partial). The exhausted items cluster as follows:

- **Dead or unreachable hosts:** Ocelles (moved; per-file licences), MLRS LSM, a3lis.it, tidsozluk.aile.gov.tr, Boğaziçi TİD, the KKY MC-TRISLAN download pages, virtualsign.pt, asorgua.org, data.gov.in (resource page never captured), ndfn.org.np, wangsel.edu.bt, the SgSL Signbank candidates, islcorpus.co.il, kemdikbud SIBI hosts, Callan PNG domains.
- **JS-only or anti-bot pages:** Springer, MDPI, the JPL and DSDJ Anubis walls, DLSP, DamPy, SignaMed, pfd.org.ph and fsldictionary.ph (bot challenge), OpenReview, SIL and Webonary (Cloudflare 403), the AILLA Next.js app, the CORA Dataverse API.
- **Licences that the original site never states:** CENAREC, INSOR, CES, INES, LedaSila (generic CC chooser), DILSE (footer vs aviso legal), FinSL Signbank (blank licence fields), SignWiki (empty rightsinfo), Korpus PJM (© only), TİD Güncel Sözlük. Further web reading will not upgrade these; only emails will.
- **Names with no primary trace:** LexiConn, Signbank2020, "Signs of India", "Sign Language Atlas of Africa", "Sign Language Multilingual (Prajwal)", and the Hub rows PHOENIX-Libras, CCTV-CSL and J-ASL (likely fabricated).
- **Country-level repository sweeps that returned 0:** DataCite, Hugging Face and Kaggle for Serbian, Macedonian, Bosnian, Kosovar, Belarusian, Armenian, Kyrgyz, Turkmen, Mongolian, Moldovan, Latvian, Bulgarian, Dominican, Puerto Rican, Belize, Guyana, Jamaican, Grenada, French Antilles, Somaliland, Eritrean, Lebanese, Syrian, Iraqi, Kuwaiti, Bahraini, Omani, Sudanese, Libyan and Palestinian SL. Also the CLARIN-DK, CLARIN-IS, CLARIN-PL and CLARIN.SI repositories (0 of 1,308 OAI records), and Mendeley's search API, which ignores the query.
- **The local-language sweep:** 34 of 129 local-language query strings returned zero sign-relevant records on all six data APIs (DataCite, Zenodo, OSF SHARE, Figshare, Dataverse, GitHub). These are mostly African, South and Southeast Asian, Caucasian and Central Asian terms, plus Basque, Galician, Albanian, Maltese, Serbian, Czech, Slovene and Ukrainian.
- **Exhausted by the 20 MB constraint:** Glottolog `values.csv` (21.4 MB) was not needed, because the Newick tree sufficed.

**The remaining open avenue.**
- **OpenAlex** produced results for only 36 of 129 local-language terms. Terms 1–34 ran but their output was lost when a stalled process was killed. Terms 71–129 (uk "жестової мови" onward, covering be, bg, tr, az, et, lv, lt, ka, hy, ar, fa, he, sw, am, zu, ha, zh, ja, ko, th, vi, id, ms, fil, hi, bn, ur, ne, si, ta, te, ml, my, km, lo, mn, uz, kk, ky) were never run, because the free daily budget shared on the network's IP returned 429 "Insufficient budget". **About 93–95 of 129 terms therefore have no OpenAlex result.** A free OpenAlex API key, or a run after the midnight-UTC reset, would finish the job, preferably with `filter=type:dataset` and local-language titles.
- **Semantic Scholar** returned HTTP 429 for **103 of 129** terms, even with 4–10 s back-off. It needs an API key.

Both gaps matter most for article-level leads in zh, ja, ko, ar, tr, hi and id.

Other unreached routes:
- **Key-gated or closed:** CLARIN.SI and CLARIN-DK REST (non-JSON), ORTOLANG JSON/OAI (SPA HTML), dataverse.no (403), UNIFESP Dataverse (401), KCI, DataON, CNKI, data.gov.in, Trove (key) and AIATSIS (403/500).
- **Quota-limited:** the OLAC Elasticsearch proxy returned 403 after about 6 queries.
- **Intermittent:** the Internet Archive went "Temporarily Offline" at times; several Wayback-dependent "exhausted" items (AIATSIS, Callan, Ratchasuda) may close on a retry.

**The web-search cap.** The research session's shared WebSearch budget (200 calls across all agents) ran out partway through the regional passes. All later discovery, including both gap passes, relied on repository APIs and direct fetches of known URLs. Local-language national-dictionary searches for the Balkans, Caucasus, Central Asia, Arab states and the Caribbean were therefore never run as web searches. Their "nothing usable" verdicts rest on catalogue and repository absence, which is not proof of absence.

## Appendix H — Process incidents

- **A 34 MB paper PDF** was downloaded during the research session, above the 20 MB per-file cap. This is per the session record; the notes files do not log it. It sits in the session scratchpad only.
- **A 23.2 MB GitHub zip** of `GClarte/SignLanguagesPhylogeny` was downloaded because it bundles two supplementary MP4s. It is recorded as a "constraint deviation" in the cross-linguistic notes and sits in the scratchpad only.
- **A 20,475,380-byte SignPuddle 3 JSON** (`bzs-BR-dictionary-public`) was received by accident during a probe. It was deleted unread, and every later request was capped with `--max-filesize`.
- **Sized but never downloaded** (over the cap): SignPuddle sgn46 (22,203,824 B) and sgn78 (26,555,465 B), read only by HTTP Range; Glottolog `values.csv` (21,447,242 B); and every video or mocap pack cited in the register.
- **None of these files is in the Marionet repository.** A check of the working tree on 2026-10-15 found no file over 20 MB. The oversized files existed only in the session scratchpad.

## Appendix I — Consent and community-authorisation flags (separate from copyright tier)

These flags apply on top of the licence tier. Marionet should store them in an allowlist field (e.g. `community_consent: required | steward | none`). A Tier A or public-domain licence does not clear them. Village and shared sign languages have small, identifiable signer pools. Indigenous materials can carry cultural restrictions (for Aboriginal material, signs tied to deceased people or ceremony). Archive deposits often carry depositor-set conditions, sensitive-material flags or embargoes; an example is the Kaipuleohone HSL lexicon, embargoed to 2028-06-06. Three further cases sit outside the matrix: **Navajo Family Sign**, **Keresan Pueblo SL** and **Al-Sayyid Bedouin SL**. Do not pursue the first two without family/Nation or pueblo authorisation; the third is reachable only through the Haifa lab.

| Language | ISO 639-3 | Issue |
|---|---|---|
| Hawaiʻi SL | hps | Endangered community language; depositor-set access conditions |
| Inuit SL | iks | Indigenous: Inuit data sovereignty; no avatar dictionary without community agreement |
| Maritime SL | nsr | Moribund community language |
| Plains Indian SL | psd | Indigenous: PD does not settle community consent (CARE); avoid ceremonial vocabulary |
| Bay Islands SL | none | Village / island SL |
| Providencia SL | prz | Island village SL: ask the community through the steward |
| San Juan Quiahije Chatino SL | none | Village SL |
| Urubu-Ka'apor SL | uks | Indigenous SL (Ka'apor) |
| Yucatec Maya SL | msd | Village SL: community authorisation needed |
| Algerian Jewish SL (Ghardaia) | ajs | Moribund community SL |
| Kafr Qasem SL | sqx | Village SL |
| Adamorobe SL | ads | Village SL: community consent |
| Bouakako SL (Côte d'Ivoire) | none | Village SL |
| Dogon SL | none | Village / rural SL |
| Extreme North Cameroon SL | none | Village / rural SL |
| Alipur SL | none | Village SL |
| Ghandruk SL | gds | Village SL |
| Jhankot SL | jhs | Village SL |
| Jumla SL | jus | Village SL |
| Kata Kolok (Bengkala SL) | bqy | Village SL: community consent |
| Australian Aboriginal sign languages (Warlpiri, Arandic, etc.) | asw | Indigenous: cultural restrictions (deceased persons, ceremony); community-led only |
| Yolŋu SL | ygs | Indigenous: community consent |

## Appendix J — ISO 639-3 corrections to apply before creating per-language issues or directories

| Language | Wrong code seen in notes or brief | Correct key | Evidence |
|---|---|---|---|
| Jamaican SL | jcs (brief) | **jls** | Glottolog `jama1263` ↔ jls ([SIL table](https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3.tab)) |
| Konchri Sain / Jamaican Country Sign | jls (brief) | **jcs** | Glottolog `jama1256` ↔ jcs |
| Providencia SL | prq | **prz** | Glottolog `prov1243` ↔ prz |
| Bangla SL (Bangladesh) | bzs | **none** (no ISO code; Glottolog folds it under Indian SL `ins`) | bzs is Brazilian SL |
| Valencian SL (LSCV) | csn (Western Europe notes) | **vsv** | csn is Colombian SL |
| Panamanian SL | lsn (Latin America notes) | **lsp** | lsn is Tibetan SL |
| Yemeni SL | yms (MENA notes) | **none** (Glottolog `yeme1237`) | Not in the SIL sign-language code set |
| Norwegian SL (tactile corpus) | nsi (local-language sweep) | **nsl** | nsi is Nigerian SL |
| Northern Ireland SL | nsi / bfi | **none** (SignPuddle uses the non-ISO tag `bfi-IE`) | No separate ISO code |
| Slovene SL | "no code" | **ysl** (Yugoslavian SL, countries RS + SI) | SignPuddle and Glottolog place Slovenia under ysl |
| Malawian SL puddle sgn128 | ase-MW | **lws** | Non-ISO SignPuddle tag |
| Haitian SL puddle sgn113 | ase-HT | **none** (Glottolog `hait1245`) | Non-ISO SignPuddle tag |
| Vietnam puddle sgn153 | unspecified | **hab/haf/hos** (SP3 tags it `hos-VN`) | Source does not separate the three |
| Myanmar SP3 collection | mis-MM | **ysm** | SP3 uses `mis` |
| Kurdish SL | — | **zhk** (also Glottolog `kurd1260`, possibly the same language) | Denominator double-count risk |
| Bhutanese SL | — | **dyl** (also Glottolog `bhut1234`) | Denominator double-count risk |
| Algerian SL (3DZSignDB) | "asp?" | **asp** | Confirmed in the SIL table |
| Seychelles / Chadian SL | — | **lsw** / **cds** | Confirmed in the SIL table |
| Moldovan SL | none | **vsi** | Denominator table |
| Armenian SL | aen | aen (Glottolog labels `arme1259` "Baraninsky Armenian SL", subgroup AUX) | Check the label when filing the issue |

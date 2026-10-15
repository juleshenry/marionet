# Gap closure: Western Europe & Nordic, Central/Eastern Europe & Central Asia, North America & Caribbean, Latin America

Research date: 2026-10-14. This closes the open gaps (UNVERIFIED licences, unchecked leads, conflicts) in four notes files: `western_europe_nordic.md` (WE), `central_eastern_europe_central_asia.md` (CEE), `north_america_caribbean.md` (NA) and `latin_america.md` (LA). Those files were not edited.

**Method.**
- No web search was used. Every check went through a known URL or an API: DataCite, Zenodo, OSF, figshare, Crossref, Europe PMC, the Kaggle public API (v1 dataset search and view work without login, as does the competition endpoint `api/i/competitions.CompetitionService/GetCompetition`), the Hugging Face API, GitHub (`gh`), ELG, CLARIN:EL, DSpace/OAI-PMH endpoints, ELAR pages, the Wikimedia APIs, and Wayback (CDX, the availability API, and `id_` captures).
- An archived page records what a site said at capture time; it is not itself a licence.
- No file over 20 MB was downloaded. All downloads were capped with `--max-filesize`. They were a few paper PDFs (arXiv/ACL, each a few MB), SPML dumps up to 1.3 MB, a 272 KB xlsx, a 56 KB TSV, a 24 KB CSV, and a 145 KB readme PDF.
- Tier key, as the caller defined it:
  - **A**: CC BY / BY-SA / CC0 / open dump.
  - **B**: NC or research-only.
  - **C**: register, contract or permission; or no stated licence for an accessible resource.
  - **D**: skip (YouTube, scraped mirror, all rights reserved).
- Record field order: language (ISO 639-3) | source | URL | type | size | licence (verbatim) | SPDX | tier | access | commercial_ok | video_redistrib_ok | approx disk | citation | next action.
- Operational constraints:
  - The Internet Archive CDX endpoint was intermittently "Temporarily Offline"; the availability API and `id_` fetches were used as fallbacks.
  - OpenAlex hit its daily budget (HTTP 429), as did Semantic Scholar.
  - CLARIN.SI search, and later the ELRA catalogue, returned HTTP 429; the CLARIN.SI OAI-PMH endpoint still worked.

---

## 1. Which open gaps resolved to a verified licence, and what are the source records?

### Takeaway
80 of the 193 ledger gaps resolved to a quoted licence or a definitive classification. Several resolutions change Marionet's options:
- **New or newly verified Tier A**:
  - the **Ortega et al. 2025 BSL/DGS database**: 234 matched concepts with sign videos and handshape/location/movement codes, CC BY 4.0, on OSF;
  - **3D-LEX** NGT and ASL mocap, CC BY 4.0, verified on the OSF nodes themselves;
  - a **100-clip Elix LSF subset** on Wikimedia Commons, CC BY-SA 4.0, with rights-holder permission archived by VRT;
  - the **SignPuddle licence chain**, verified on signwriting.org;
  - **HamNoSys basic-vocabulary transcriptions for Georgian SL, Tajik SL and RSL**, CC BY 4.0 (Power & Kimmelman, OSF; Power 2021, figshare). This overturns CEE's "nothing usable" verdict for Georgian and Tajik.
- **BSL Corpus open-access data is Tier A.** The "no duplication" clause actually reads "…not permitted *outside of the conditions set out below*", and the CC BY-SA 4.0 grant is one of those conditions.
- **Tightened to Tier B**: LSFB dico (the footer's own link points to the BY-NC-ND page), EASIER links (README BY-NC-SA), Dicta-Sign lexicon/corpus (CLARIN:EL lists CC BY-NC-ND 4.0), and SMILE Continuous (CC BY-NC-SA 4.0 on SWISSUbase).
- **Traps**:
  - Kaggle `bernardinello/signbank` is a scrape of Libras Signbank relabelled "CC BY 4.0".
  - ASL-Skeleton3D and ASL-Phono carry CC BY 4.0 on Zenodo but are derivatives of ASLLVD, which forbids redistribution.
  - FluentSigners-50 is listed as CC BY 4.0 on ELG but is now Closed Access on Zenodo.
  - RoCoISLR (Romanian) is scraped from dictionary websites.

### Cited Findings

#### Tier A: new or newly verified sources (full records)

- **BSL (bfi) + DGS (gsg): Ortega, Schiefner, Lazarus, Perniss 2025 iconicity/concreteness database**
  - **URL / type / size:** https://osf.io/jkw8p/ | lexical norms + phonology overlap codes + isolated sign videos | 234 concepts matched across BSL and DGS ("a total stimulus set of 234 signs matched across the two languages").
  - **Licence:** OSF `jkw8p` "CC-By Attribution 4.0 International", node_license year 2024. Components `w4fuz` (data), `vqdwu` (Seed Concepts videos) and `fyhm3` (instructions) are also CC BY 4.0. Component `g82bx` (Coding Manual) has no licence set.
  - **SPDX / tier:** CC-BY-4.0 | **Tier A**.
  - **Access:** open OSF download. `data/data_signs.csv` (24,237 B) has columns `concept, german_translation, bsl_file, dgs_file, hs, loc, mov, form_overlap, dgs_strategy, bsl_strategy, …`. `data_ratings.csv` is 179,409 B.
  - **commercial_ok:** yes. **video_redistrib_ok:** yes with attribution; signer portrait rights are not covered by CC.
  - **Approx disk:** "BSL signs.zip" 754,701,846 B + "DGS signs.zip" 1,435,776,324 B (about 2.2 GB).
  - **Citation:** Ortega, G., Schiefner, A., Lazarus, N., Perniss, P. (2025), *Behavior Research Methods* 57:139, doi:10.3758/s13428-025-02660-z; data doi:10.17605/OSF.IO/JKW8P.
  - **Next action:** first CC BY citation-video ingest for BSL and DGS. Use `hs/loc/mov` as QA labels.
  - **Sources:**
    - Data-availability statement: "Data, coding schemes, ratings, code, statistical analyses, signed instructions (and their translations), and videos of the signed concepts in BSL and DGS can be found in our open access repository: 10.17605/OSF.IO/JKW8P." — [Europe PMC full text PMC11982127](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11982127/fullTextXML)
    - Licence and files — [OSF API jkw8p](https://api.osf.io/v2/nodes/jkw8p/?embed=license); [OSF vqdwu files](https://api.osf.io/v2/nodes/vqdwu/files/osfstorage/); [OSF w4fuz data](https://api.osf.io/v2/nodes/w4fuz/files/osfstorage/)

- **NGT (dse) + ASL (ase): 3D-LEX v1.0** (licence previously quoted from the arXiv paper only)
  - **URL / type / size:** https://osf.io/cv276/ | mocap (handshape gloves, Vicon body markers, ARKit face) + animation exports | "1000 signs from each language".
  - **Licence:** "CC-By Attribution 4.0 International" on `cv276` and on every data component.
  - **SPDX / tier:** CC-BY-4.0 | **Tier A**.
  - **Access:** open OSF.
  - **commercial_ok / video_redistrib_ok:** yes / not applicable (no video).
  - **Approx disk:**
    - NGT: `NGT_ANIM_GLB.zip` 644,188,344 B; `NGT_ANIM_FBX.zip` 662,282,705 B; `NGT_Vicon_MarkerData.zip` 354,077,722 B; `NGT_LLF.zip` 10,334,136 B; "Handshape Data NGT.zip" 4,471,947,083 B.
    - ASL: `ASL_ANIM_GLB.zip` 392,740,736 B; `ASL_ANIM_FBX.zip` 438,863,837 B; `ASL_Vicon_MarkerData.zip` 370,611,225 B; `ASL_LLF.zip` 14,547,676 B; Handshape Parts 1–3 about 10.6 GB.
  - **Citation:** Ranum et al., 3D-LEX v1.0 (contact oline.ranum@student.uva.nl per the OSF wiki).
  - **Next action:** retarget the GLB/FBX animations directly. This is also a new ASL Tier A mocap source for the NA file.
  - **Sources:** [OSF API cv276](https://api.osf.io/v2/nodes/cv276/?embed=license); NGT components [79zxe children](https://api.osf.io/v2/nodes/79zxe/children/); ASL components [3wsed children](https://api.osf.io/v2/nodes/3wsed/children/); [OSF wiki](https://api.osf.io/v2/nodes/cv276/wikis/)

- **LSF (fsl): Elix subset on Wikimedia Commons**
  - **URL / type / size:** https://commons.wikimedia.org/wiki/Category:Files_supported_by_Wikimedia_France_-_Elix | isolated citation-form video (webm) | 100 files, 57.8 MB. Files are named by lemma and POS, e.g. "Achat Nm 1 1 1 - Elix.webm".
  - **Licence:** "CC BY-SA 4.0" on all 100 files. Artist: "Elix, le dictionnaire vivant en langue des signes".
  - **Permission:** "The Wikimedia Foundation has received an e-mail confirming that the copyright holder has approved publication under the terms mentioned on this page … ticket #2020010710006923".
  - **SPDX / tier:** CC-BY-SA-4.0 | **Tier A**.
  - **Access:** Commons API.
  - **commercial_ok / video_redistrib_ok:** yes / yes (SA).
  - **Approx disk:** 58 MB.
  - **Citation:** Elix / Signes de Sens, via Wikimedia France.
  - **Next action:** ingest as a third LSF citation-video set alongside Lingua Libre and SignPuddle 58.
  - **Sources:** [Commons category API](https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:Files_supported_by_Wikimedia_France_-_Elix&gcmlimit=500&prop=imageinfo&iiprop=extmetadata&format=json); [file page](https://commons.wikimedia.org/wiki/File:Achat_Nm_1_1_1_-_Elix.webm)

- **All SignPuddle puddles (cross-language): licence chain**
  - **URL:** https://www.signwriting.org/ (Last-Modified 2026-07-04).
  - **Licence:** "You are WELCOME to publish books, web sites and other publications using Sutton SignWriting, under the Creative Commons Attribution-Share-Alike License … All images and content on this web site and all images and content in publications on or about or in some way related to Sutton Movement Writing, including SignWriting … are free to use because they are licensed under the free internet standard: Creative Commons Attribution-ShareAlike 3.0 Unported License."
  - **SPDX / tier:** CC-BY-SA-3.0 | **Tier A** (site-level grant). Per-contributor grants are not documented.
  - **Puddle counts (from the puddle pages):**
    - sgn46 Brazil: "64156 Total Entries 72162 Unique Signs 113815 Sign Occurrences".
    - sgn103 "Malta LSM Private Puddle": "234 Total Entries", publicly viewable.
  - **Sources:** [signwriting.org](https://www.signwriting.org/); [sgn46 page](https://www.signbank.org/signpuddle2.0/index.php?ui=1&sgn=46); [sgn103 page](https://www.signbank.org/signpuddle2.0/index.php?ui=1&sgn=103)

- **Georgian SL, Tajik SL, RSL (rsl): "Sign languages of the Soviet Union"** (Justin Power, Vadim Kimmelman). No ISO 639-3 code was located in this pass for Georgian SL or Tajik SL.
  - **URL / type / size:** https://osf.io/agnwj/ | notation + phonology spreadsheet (basic vocabulary) + 8 example videos.
    - "lexical comparison_transcriptions and cognate sets.xlsx" is 272,324 B. Sheet "final transcriptions" has columns `language, signer, concepticon_id, concept, handshape, location, movement, symmetry, dominant_hand, hands, response, compound, FORM, TOKENS, …`, with HamNoSys code points (U+E0xx).
    - Rows: Russian SL 714, Tajik SL 571, Georgian SL 523 (2 signers each), covering 229 concepts.
  - **Licence:** OSF "CC-By Attribution 4.0 International" (modified 2026-01-05).
  - **SPDX / tier:** CC-BY-4.0 | **Tier A**.
  - **Access:** open (`https://osf.io/download/z3afr/`).
  - **commercial_ok:** yes. **video_redistrib_ok:** yes (8 clips, 128.6 MB).
  - **Approx disk:** under 1 MB of data, plus 128.6 MB of video and a 39.7 MB elicitation PDF.
  - **Next action:** HamNoSys → SignDesc seed for Georgian SL and Tajik SL, the first open source for either.
  - **Sources:** [OSF API agnwj](https://api.osf.io/v2/nodes/agnwj/?embed=license); [contributors](https://api.osf.io/v2/nodes/agnwj/contributors/?embed=users); [file listing](https://api.osf.io/v2/nodes/agnwj/files/osfstorage/)

- **Tajik SL + RSL (+ Afghan SL): Power (2021) "Data.txt"**
  - **URL / type / size:** https://doi.org/10.6084/m9.figshare.15170700 | phonology transcription TSV (UTF-16) | 474 rows (DUS 254, RUS 158, AfghanSL 62), 50 concepts. Columns: `ID, CONCEPTICON, DOCULECT, CONCEPT, handshape, orientation, location, movement, symmetry, dominant_hand, hands, …`.
  - **Description:** "transcriptions of basic vocabulary signs produced by four Tajik signers, two Russian signers, and an aggregated dataset for Afghan Sign Language".
  - **Licence:** "CC BY 4.0" (published 2021-08-15).
  - **SPDX / tier:** CC-BY-4.0 | **Tier A**.
  - **Approx disk:** 55,874 B.
  - **Sources:** [figshare API](https://api.figshare.com/v2/articles/15170700); [DataCite](https://api.datacite.org/dois?query=%22tajik%20sign%20language%22)

- **Haitian SL (no ISO 639-3 code, per NA notes): LSHDoP "Grammatical Sketch of Haitian Sign Language (LSH)"**
  - **URL / type / size:** https://doi.org/10.6084/m9.figshare.13724614 | grammar sketch (text and figures), not a lexicon | `HochgesangEtAl.2015.LSHDoPGrammaticalSketchv1.pdf` 213,876,982 B; French 5,892,599 B; Kreyòl 106,895,559 B.
  - **Licence:** "CC BY 4.0" (2021-03-10).
  - **Tier:** A for the sketch. The signed (LSH) version is on YouTube, so Tier D.
  - **Citation:** Hochgesang, McAuliff, Becker, Cadet.
  - **Next action:** reference only. Ask the authors for the underlying lexical list.
  - **Source:** [figshare API](https://api.figshare.com/v2/articles/13724614)

- **BSL (bfi): BSL Corpus open-access data**, conflict resolved
  - **Licence (verbatim):**
    - "The narrative and lexical elicitation data are open access. They can be used for teaching or research , or any other purpose."
    - "duplication or sale of all or part of any of the data collection is not permitted outside of the conditions set out below."
    - Obligation: "any annotations, transcriptions and/or translations of the data that I undertake will be shared with the Registrar".
    - "The BSL Corpus open access data is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License."
  - **SPDX / tier:** CC-BY-SA-4.0 | **Tier A**, with click-through obligations (cite; send annotations to the Registrar).
  - **Source:** [CAVA open-access-data](https://bslcorpusproject.org/cava/open-access-data/)

- **Small Tier A items**
  - **SeñaTalk (prl):** Zenodo 17479338 "SenaTalk-UPC/dataset", `cc-by-4.0`, `dataset-v1.2.zip` 305,690,582 B. Keypoint `.npy` sequences for 14 classes: abrazar, adios, amigo, donde, enfermo, gracias, hola, jugar, neutral, nombre, ordenar, tu, universidad, yo. The GitHub repo itself has no licence file. Sources: [Zenodo](https://zenodo.org/api/records/17479338); [GitHub](https://github.com/SenaTalk-UPC/dataset)
  - **LSC (csn), Kaggle `juanrrai/colombian-sign-language-slc-signs-dataset`:** "CC BY-SA 4.0", 534,493,915 B; "41 raw RGB videos featuring 11 signs from Colombian Sign Language … performed by 3 native signers". Source: [Kaggle API](https://www.kaggle.com/api/v1/datasets/view/juanrrai/colombian-sign-language-slc-signs-dataset)
  - **LGP (psr), PE2LGP:** MIT-licensed GitHub repos with `dicionario.csv`, 110 rows (PT word → lemma → LGP gloss). No sign forms. Source: [GitHub ineslacerda/PE2LGP-Translator](https://github.com/ineslacerda/PE2LGP-Translator)
  - **Libras (bzs), VLibras gloss list:**
    - `vlibras-dictionary-repository` is LGPL-3.0 (pushed 2024-03-11). `signspatch201831.json` has 17,733 and `signspatch201830.json` has 1,050 `{name, patch}` entries (18,783 gloss names).
    - The animation bundle repos are still 0 KB.
    - Source: [GitHub](https://github.com/spbgovbr-vlibras/vlibras-dictionary-repository)
  - **ASL (ase), SLP-AA:** the GPL-3.0 tool [PhonologicalCorpusTools/SLPAA](https://github.com/PhonologicalCorpusTools/SLPAA) (pushed 2026-09-08) ships `SLPAA_sample_corpus.slpaa` (1,269,495 B).
  - **LSF (fsl), new lead:** Ortolang `illustrations-these` ("Illustrations vidéo - Thèse de Léa Chevrefils") is "Licence Creative Commons - Attribution 4.0 International"; its contents were not inspected. Source: [Ortolang API](https://repository.ortolang.fr/api/search/items?type=Corpus&corporaLanguages.id%5B%5D=fsl&size=200)
  - **Ecuadorian SL (ecs), LSEc corpus versions:** concept DOI 10.5281/zenodo.21001359 has 21001360 = v1.0.0 (2026-06-28) and 21627229 = v1.0.1 (2026-07-27), both open and `cc-by-4.0`. Source: [Zenodo versions](https://zenodo.org/api/records/21627229/versions)
  - **LSC50 (csn) sign list:** 50 signs and 4,000 RGB/RGB-D videos. Table 1 lists GRACIAS, TÍO, BIENVENIDO, BUENOS DÍAS, … ABUELO, CON GUSTO. Data on figshare are CC BY 4.0 (`VIDEOS.zip` 6,247,307,413 B). The Sci Data article itself is CC BY-NC-ND 4.0. Sources: [Europe PMC PMC11655960](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11655960/fullTextXML); [figshare API](https://api.figshare.com/v2/articles/27383016)
  - **UEA CWASA SiGML (bfi, gsg, fsl, gss):** "The CWASA example web pages are covered by the Creative Commons BY-SA licence … The underlying CWASA software must be used without modification, on terms equivalent to Creative Commons BY-ND". The software bundle "includes … signing notation files". So the example-page SiGML is Tier A, while bundled notation files are BY-ND-like (no adaptation). Source: [CWASA Conditions](https://vh.cmp.uea.ac.uk/index.php/JASigning_Conditions)
  - **Slovo (rsl) on Kaggle:** `kapitanov/slovo` (the author's own upload) is labelled "CC BY-SA 4.0", 15,871,980,731 B. The upstream PDF says it is a BY-SA *variant*, "not a Creative Commons license". Source: [Kaggle API](https://www.kaggle.com/api/v1/datasets/view/kapitanov/slovo)

#### Tier B: verified non-commercial or research-only

| Language | Source | Licence (verbatim) | Size / access | Evidence |
|---|---|---|---|---|
| sfb | dico.lsfb.be | Licence page: "Attribution – Pas d'Utilisation Commerciale – Pas de Modification 4.0 International (CC BY-NC-ND 4.0)". The footer's BY-SA sentence ends with "Lire ici", which links to that same BY-NC-ND page. | HTML only | [licence page](https://dico.lsfb.be/licence-creative-commons/); [home](https://dico.lsfb.be/) |
| 8 SLs | EASIER wordnet v1.0–v4.0 | All FDR versions carry metadata CC-BY-4.0, but the README says "Those links are distributed under a Creative Commons BY-NC-SA 4.0 licence". Take the stricter. | 6.9 MB | [FDR versions](https://www.fdr.uni-hamburg.de/api/records/?q=conceptrecid:10168&all_versions=true); [README](https://www.fdr.uni-hamburg.de/record/14190/files/_README.md?download=1) |
| sgg | SMILE Continuous DSGS Corpus (LaRS/SWISSUbase) | "License Creative Commons BY-NC-SA Attribution - NonCommercial - ShareAlike … https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.en" | L1 + L2 phases 1–4, plus restricted subsets; videos, MediaPipe and annotations; DOI 10.48656/s1hz-kx35 | [usage licence](https://www.swissubase.ch/en/catalogue/studies/21056/latest/datasets/3289/4422/contract/usage-license); [DataCite list](https://api.datacite.org/dois?query=%22SMILE%20Continuous%22) |
| nsl | NTS Corpus (NTNU) on CLARINO: Halvorsen (2012) 11509/141; Language Ecology – Retellings 11509/155 | dc.rights "Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)" | continuous; open download | [141](https://repo.clarino.uib.no/xmlui/handle/11509/141?show=full); [155](https://repo.clarino.uib.no/xmlui/handle/11509/155?show=full) |
| ise | MultiMeDaLIS (ICCV-MSLR 2025 track 2) | Kaggle competition licence "CC BY-NC-SA 4.0"; "126 Italian Sign Language gestures (100 medical terms + 26 letters) across 205 expert sessions", RGB + 60 GHz radar | Kaggle rules acceptance | [Kaggle competition](https://www.kaggle.com/competitions/iccv-mslr-2025-track-2); [GitHub README](https://github.com/rezwanh001/Multimodal-Isolated-Italian-Sign-Language-Recognition) |
| fsl | Corpus LS-Colin (COCOON) | Audiovisual records: rights "cc-by-nc-nd-2.5", "Copyright (c) Cuxac, Christian". ND blocks derivatives. | continuous | [DataCite](https://api.datacite.org/dois?query=%22LS-COLIN%22); [record](https://doi.org/10.34847/cocoon.30180d73-59a4-316f-aff8-a9a0399e666a) |
| bfi, gsg, fsl, gss | Dicta-Sign lexicon and corpus | CLARIN:EL: "Creative Commons Attribution Non Commercial No Derivatives 4.0 International", accessible through the Hamburg portal (which states no licence). This conflicts with the Compendium's "Individual license agreement". | portal only | [CLARIN:EL 805](https://inventory.clarin.gr/catalogue_backend/api/registry/metadatarecord/805/); [ELG 14761](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/14761/) |
| uks | Ka'apor SL (ELAR `kaaporsignlanguage-aniz-0634`, SG0584; depositors Gustavo Godoy, Vitória Aniz) | ELAR terms ("non-commercial and/or educational activity"). 25 items, all O_OpenAccess, including sign elicitation bundles (Birds, Fish, Mammals, "Elicitation of signs with Irarirupe (2)"). | open download | [collection](https://www.elararchive.org/uncategorized/SO_393aae95-eb4c-473d-92a4-0f5775c8b4d6/); [ELAR terms](https://www.elararchive.org/how-to-use/) |
| swl | SSLC v1 | SND: "Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)"; SU site: BY-NC-SA 4.0. NC either way. | — | [SND](https://researchdata.se/en/catalogue/dataset/ext0409-1) |
| vgt | Corpus VGT | "Alle video's zijn beschikbaar onder een Creative Commons BY-NC-SA licentie. Aan het begin van elke video wordt hiernaar verwezen." (by-nc-sa/3.0). IVDNT's selection says BY-NC 3.0. | — | [corpusvgt.be](https://www.corpusvgt.be/); [IVDNT](https://taalmaterialen.ivdnt.org/download/corpusvgt1-0/) |
| ssp | Fundación CNSE "Banco de imágenes y signos LSE" (new) | "todas las imágenes están bajo licencia Creative Commons y su uso se restringe al educativo, siempre que no tenga una finalidad comercial" + "Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported" | still images | [CNSE](https://www.fundacioncnse.org/educa/bancolse/sobre-esta-web.php) |
| bzs | Corpus de Libras (Inventário Nacional) | "Declaro que utilizarei, para fins de pesquisa e/ou ensino, os dados … comprometendo-me a … disponibilizar os dados transcritos e os resultados de minha pesquisa" | login | [registrar](https://corpuslibras.ufsc.br/registrar) |
| bzs | V-LIBRASIL (original terms page, archived) | "podem ser usados para fins de pesquisa e educação, mas não podem ser redistribuídos sem permissão. O uso comercial, sem permissão explícita, não é permitido" | live site HTTP 502 | [Wayback 20260118094406](http://web.archive.org/web/20260118094406/https://libras.cin.ufpe.br/pages/conditions-of-use,3) |
| psd | Dakota Media Access PISL (IA) | licenseurl https://creativecommons.org/licenses/by-nc/4.0/ | — | [IA metadata](https://archive.org/metadata/PerformancesAndEvents2026-05-28-PlainsIndianSignLanguage/metadata) |
| psd | Tomkins 1929 (re-checked) | HathiTrust `mdp.39015001688293` rightsCode "pd", "Full view". This is PD, so Tier A, not B. | — | [HathiTrust API](https://catalog.hathitrust.org/api/volumes/brief/htid/mdp.39015001688293.json) |

#### Tier C: permission, contract, or no licence on an accessible resource

| Language | Source | Finding (verbatim where available) | Evidence |
|---|---|---|---|
| ssp | Signario LSE (UCM) | Parametric dictionary. Footer "© José María Lahoz-Bengoechea & Antonio F. G. Sevilla". GitHub `griffos-ucm/signario-data` has license null and "Los datos reales están en cachés de DVC". The code is OSL-3.0. | [Signario](https://griffos.filol.ucm.es/signario/); [GitHub](https://github.com/griffos-ucm/signario-data) |
| ssp | Sign4all | Page JSON-LD `"license":""`; DataCite rightsList []; 18,496,841,136 B; v3.0.0. | [scidb](https://www.scidb.cn/en/detail?dataSetId=12775cc0026841979bdaba60484ad067); [DataCite](https://api.datacite.org/dois/10.57760/SCIENCEDB.28304) |
| ssp | SignaMed | "© 2026 SignaMed." Use SWL-LSE (CC BY) instead. | [signamed.uvigo.es](https://signamed.uvigo.es/) |
| tsm | BosphorusSign22k | "The dataset will be publicly available for research purposes upon submitting an EULA to the authors." The archived PILAB page says only "Details of the database will be published soon!". So B/C. | [arXiv PDF](https://arxiv.org/pdf/2004.01283v2); [Wayback](https://web.archive.org/web/20230323095524/https://www.cmpe.boun.edu.tr/pilab/BosphorusSign/bosphorusSign_en.html) |
| svk | posunky.sk (Slovak SL dictionary) | Live on 2026-10-14. "Copyright © 2018 – 2026 Snepeda." | [posunky.sk](https://posunky.sk/) |
| fcs | UQAM LSQ lexicons (aînés sourds, grammaire, astronomie, Gadbois, Marqspat) | Vimeo-hosted; footer "Copyright © 2026"; no licence. | [lsq.uqam.ca](https://lsq.uqam.ca/?q=content/lexique-du-projet-marqspat) |
| ase | ASL-100-RGBD | DataCite rights "Databrary Access Agreement" (volume 1062). | [DataCite](https://api.datacite.org/dois/10.17910/b7.1062) |
| ase | ASL-Skeleton3D / ASL-Phono | Zenodo: open, `cc-by-4.0` (117,196,613 B and 6,053,555 B). Both are derived from ASLLVD, whose terms say "cannot be redistributed without permission". This is a conflict, so treat as C. | [Zenodo 5484110](https://zenodo.org/records/5484110); [Zenodo 5484145](https://zenodo.org/records/5484145); [ASLLVD terms](https://www.bu.edu/asllrp/av/dai-asllvd.html) |
| nsl | NTS Corpus RES datasets 11509/144, /147, /156 | dc.rights "CLARIN RES+PLAN+BY+NC+INF+PRIV+NORED+ND" (research plan required). | [CLARINO 147](https://repo.clarino.uib.no/xmlui/handle/11509/147?show=full) |
| rsl | Garage RSL variation DB | "База данных открыта для использования всем желающим" + citation request + annotation-sharing request; "© Музей современного искусства «Гараж» 2026"; no named licence. | [site](https://rsl-research-explore.garagemca.org/) |
| ukl | "Our stories" UkSL (Cologne DCH) | DataCite rights "Closed Access"; 18 GB. | [DataCite](https://api.datacite.org/dois/10.18716/dch/a.00000015) |
| K-RSL | FluentSigners-50 | **Conflict.** ELG says "Creative Commons Attribution 4.0 International" with a direct zip link. Zenodo 6043739 is now `restricted`, `license: None`, and DataCite says "Closed Access" (updated 2023-10-03). | [ELG 22594](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/22594/); [Zenodo](https://zenodo.org/api/records/6043739); [DataCite](https://api.datacite.org/dois/10.5281/zenodo.6043739) |
| K-RSL | KRSL20 / KRSL GitHub repos | All `krslproject` repos have license "none"; pages say only "Please cite …". | [GitHub](https://github.com/krslproject) |
| bfi | BOBSL (BBC) | "released by BBC R&D for non-commercial research work to the academic community"; "Use is not permitted by independent researchers, students in secondary education … or commercial organisations"; permission form sent to bobsl.dataset@bbc.co.uk. | [BBC R&D](https://www.bbc.co.uk/rd/projects/extol-dataset) |
| fse | Suvi 1998 archive | "© 2018 Kuurojen Liitto ja Kotimaisten kielten keskus". | [archive](https://aineisto.viittomakielinenkirjasto.fi/arkisto-suvi/) |
| Panamanian SL (lsn per LA notes) | ELAR `naso-bermudez-0396` (IGS0274, Natalia Bermúdez) | Homesign sessions (e.g. "Muda homesign conversation #1"); media "Access : U". | [bundle](https://www.elararchive.org/uncategorized/SO_66e580d4-12b6-4e8e-8ee6-08348b4be0f5/) |
| bzs | Libras-UFPel Corpus | Not released: "the initial subset of 1,200 lemmatized sentences will be released through a tiered-access repository". | [PROPOR 2026 PDF](https://aclanthology.org/2026.propor-1.112.pdf) |
| lst | TTSL dataset (new lead) | "compared on a dataset not yet explored, Trinidad and Tobago Sign Language"; no data link. | [arXiv 2412.18187](https://arxiv.org/abs/2412.18187) |
| ise | ATLAS/LIS4ALL | "Tools and downloads"; "Copyright© 2017 - Academix Research Group"; no licence. | [smilies.polito.it/atlas](https://www.smilies.polito.it/atlas/) |

#### Tier D: verified skip

| Language | Source | Finding | Evidence |
|---|---|---|---|
| ise | A3LIS-147 | 2015 page: 10 per-signer `tar.gz` at a3lis.it with only "Please cite this paper"; no licence. Hosts are now HTTP 000 and the files were never archived. | [Wayback project page](https://web.archive.org/web/20151224161517/http://a3lab.dii.univpm.it:80/projects/a3lis) |
| bzs | Kaggle `bernardinello/signbank` | Labelled "CC BY 4.0" (5.27 GB), but its description reads "Dataset: Libras Signbank (UFSC) … License: Creative Commons (CC BY 4.0)". UFSC's own terms say CC BY-NC-SA 4.0. **Mislabelled scrape.** | [Kaggle API](https://www.kaggle.com/api/v1/datasets/view/bernardinello/signbank) |
| rms | RoCoISLR (9,141 videos / 5,892 classes) | "obtained from publicly available sources, including: the PeSemne website … the DLMG website" (scraped). pesemne.ro: "Copyright 2026 © pesemne.ro. Toate drepturile rezervate." | [arXiv 2511.12767](https://arxiv.org/abs/2511.12767); [pesemne.ro](https://pesemne.ro/) |
| ase | DeafTEC STEM dictionary | "All content © Rochester Institute of Technology. All rights reserved."; YouTube embeds. | [deaftec.org](https://deaftec.org/stem-dictionary/) |
| ase | YouTube-ASL | "we are releasing the video IDs"; the footage stays on YouTube. | [README](https://github.com/google-research/google-research/tree/master/youtube_asl) |
| bzs | Hand Talk | "Copyright © 2026 Hand Talk. All rights reserved." | [handtalk.me](https://www.handtalk.me/en/terms-of-use) |
| bfi | BSL Zone → LumoTV; SignStation | "Copyright © 2026 - All rights reserved." / "Copyright © 2026 Sign Station". | [bslzone.co.uk](https://www.bslzone.co.uk/); [signstation.org](https://signstation.org/) |
| gsg | Kestner | Shop site (AGB, Widerrufsrecht). | [kestner.de](https://www.kestner.de/) |
| fsl | IVT | Commercial publisher of "cinq dictionnaires bilingues". | [ivt.fr](https://www.ivt.fr/) |
| isg | ISL Covid-19 glossary | YouTube-hosted; "© 2026 Irish Deaf Society". | [IDS](https://www.irishdeafsociety.ie/irish-sign-language-for-covid19-related-vocabulary/) |
| bzs / Libras | Kaggle `davimedio01/v-librasil` (CC BY-NC-ND label) | Mirror of V-LIBRASIL, which forbids redistribution. | [Kaggle](https://www.kaggle.com/datasets/davimedio01/v-librasil) |

### Inferences
- The fastest new citation-video wins are:
  - **BSL and DGS:** Ortega 2025, about 2.2 GB, CC BY 4.0, with BSL/DGS form-overlap codes;
  - **LSF:** the Elix Commons subset (58 MB);
  - **Georgian and Tajik:** HamNoSys from OSF `agnwj`.
- 3D-LEX GLB/FBX animations are the only CC BY mocap that can be retargeted directly, for both NGT and ASL.
- **BSL Corpus OA.** Read in full, the "outside of the conditions set out below" wording makes CC BY-SA 4.0 the governing condition. The Registrar obligations bind the CAVA downloader, not downstream recipients of BY-SA clips (inference from the CC licence's terms, not legal advice).
- Several Tier B/C items differ from the notes because a second authoritative record exists. Dicta-Sign has CLARIN:EL, FluentSigners-50 has ELG, and SMILE Continuous has SWISSUbase. Repository records beat Compendium values where both exist.

### Gaps
- The contents of Ortolang `illustrations-these` (CC BY 4.0) were not inspected.
- The Ortega 2025 `BSL signs.zip` and `DGS signs.zip` were not downloaded (over 20 MB), so per-clip quality and the signer count per clip are unverified.

---

## 2. Which gaps are exhausted, and what was tried?

### Takeaway
113 gaps are exhausted. Each was checked against the original site and/or Wayback and against at least one repository API, with nothing further found. The recurring blockers were:
- dead hosts (Ocelles' new host, MLRS, a3lis.it, tidsozluk, bosphorussign.com, kky.zcu.cz download pages, virtualsign.pt, asorgua.org);
- JS-only or anti-bot pages (Springer, MDPI, the JPL Anubis wall, the DSDJ Anubis wall);
- licences that the original site simply never states.

### Cited Findings

**Western Europe & Nordic**
- **Ocelles** (resolved as "per-file licence", but the dump is exhausted):
  - ocelles.fr has 302-redirected to ocelles.inshea.fr since at least 2018-08-08 ([CDX](https://web.archive.org/cdx/search/cdx?url=ocelles.fr&limit=5&output=json)). The live host returns HTTP 000.
  - The archived app bundle has a per-file licence picker: "Licence Art Libre", "Copyright", "Domaine public", "Licences Creative Commons / CC-BY", "/ CC-BY-SA", "/ CC-BY-ND", "/ CC-BY-NC", "/ CC-BY-NC-SA", "/ CC-BY-NC-ND" ([bundle capture 20250327102526](https://web.archive.org/web/20250327102526/https://ocelles.inshea.fr/dist/main.daf6df033103d98cb176.js)).
  - So the Compendium's single "CC BY-SA 2.0 FR" is stale. Tier: per-file, so C until a file list is available.
- **MLRS LSM:**
  - There is no HTML capture of `/lsm/`, only static fonts.
  - The `/resources/` listing shows `lsm-OLD/` dated 2019-01-29 ([capture](https://web.archive.org/web/20240422022702/https://mlrs.research.um.edu.mt/resources/)), and that directory contains only `wsgi.py` ([capture](https://web.archive.org/web/20240720111432/https://mlrs.research.um.edu.mt/resources/lsm-OLD/)).
  - ELG record 13129 "Dictionary of Maltese Sign Language" has no licence ([ELG](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/13129/)).
- **SMILE isolated:**
  - Zenodo 7701457 is restricted with `license: None` ([API](https://zenodo.org/api/records/7701457)).
  - The Idiap page shows only "Get Data" ([capture](https://web.archive.org/web/20240722081045/https://www.idiap.ch/en/scientific-research/data/smile_dsgs)).
  - **Trap:** Zenodo 7035025, titled "SMILE Swiss German Sign Language Dataset" and labelled `cc-by-4.0`, contains only the paper PDF ([API](https://zenodo.org/api/records/7035025)).
- **BSL norms (Vinson 2008):**
  - The abstract says "These norms may be downloaded from www.psychonomic.org/archive" ([Europe PMC](https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.3758/BRM.40.4.1079&resultType=core&format=json)).
  - That archive is defunct and has no Wayback capture of the file. Springer returns a JS "Client Challenge".
- **LGP Reference Corpus:**
  - Crossref has no licence and a galley link ([Crossref](https://api.crossref.org/works/10.16995/jpl.23006)). The galley returns the Anubis "Making sure you're not a bot!" page, which was not bypassed.
  - DataCite and Zenodo have no LGP corpus deposit ([DataCite](https://api.datacite.org/dois?query=%22Portuguese%20Sign%20Language%22)).
- **ECHO:**
  - TLA shows "Access Level … Open (77)", with the sub-collection "ECHO - Sign Language" Open (76), contributors including the BBC, and no licence at any level ([TLA](https://archive.mpi.nl/tla/islandora/object/tla%3A1839_00_0000_0000_0001_494E_3)).
  - The original ECHO site has no Wayback capture. The Compendium's "CC BY-NC-ND 3.0" remains the only source.
- **Licence conflicts that persist on 2026-10-14:**
  - LedaSila still links its "Creative Commons Bedingungen" to the generic https://creativecommons.org/licenses/?lang=de ([LedaSila](https://ledasila.aau.at/)).
  - DILSE still pairs a CC BY-NC-SA 3.0 footer with an aviso legal limited to "uso personal y privado" ([aviso legal](https://fundacioncnse-dilse.org/aviso-legal.php)).
  - ASL-LEX: OSF still says "CC-By Attribution 4.0 International" ([OSF](https://api.osf.io/v2/nodes/zpha4/?embed=license)), while asl-lex.org still says CC BY-NC 4.0 and "Use of any part of ASL-LEX for commercial purposes is expressly prohibited" ([asl-lex.org](https://asl-lex.org/download.html)).
- **Korpus PJM:**
  - The EN pages show only "Copyright © 2020 …" ([how-to-use](https://www.korpuspjm.uw.edu.pl/en/pages/how-to-use.html)).
  - The 2022 repository paper gives only its own CC BY-NC 4.0 paper licence. It also confirms that the `.eaf` files hold "gloss for dominant hand, gloss for non-dominant hand, HamNoSys transcription, free translation into written Polish" ([LREC 22010](https://www.sign-lang.uni-hamburg.de/lrec/pub/22010.html)).
  - The Compendium alone says "CC BY-SA 4.0" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/pjmcorpus.html)).
- **Nordic:**
  - FinSL Signbank shows "Tekijänoikeudet ja lisenssi: -" (blank) for every lexicon ([dictionary](https://signbank.csc.fi/dictionary/)).
  - All five SignWiki instances return `rightsinfo {'url': '', 'text': ''}` ([is siteinfo](https://is.signwiki.org/api.php?action=query&meta=siteinfo&siprop=rightsinfo%7Cstatistics&format=json)). The ToS says only "a Creative Commons License … non-commercial purposes".
  - Kotus 1998 PDF: HTTP 403. Statped: 403. minetegn.no: empty body. Iceland: SHH points to SignWiki ([SHH](https://island.is/s/shh)).
  - Greenland: no hits in DataCite, Zenodo or Kaggle.
- **CLARIN repositories:**
  - CLARIN-DK: total 0 ([API](https://repository.clarin.dk/server/api/discover/search/objects?query=tegnsprog)).
  - CLARIN-IS: "No items found".
  - CLARIN-PL: 0 relevant ([API](https://clarin-pl.eu/dspace/server/api/discover/search/objects?query=migowy)).
  - CLARIN.SI: an OAI-PMH full harvest of 1,308 records had 0 sign-language matches ([OAI](https://www.clarin.si/repository/oai/request?verb=ListRecords&metadataPrefix=oai_dc)).
- **Never-searched leads, now checked with nothing usable found:**
  - LSF: Sign3D, LSF-SHELVES, Sign'Maths and LSF-ANSHE have no DataCite hits, are not among Ortolang's 18 LSF corpora, and their LREC data pages carry no licence fields ([LREC sign3d](https://www.sign-lang.uni-hamburg.de/lrec/data/sign3d.html)).
  - DGS / ÖGS: Deaf-ADAPT, SL-Fluent, SignLex and Kestner have no DataCite hits. ViSiCAST/eSIGN lexicons: UEA offers only the eSIGN Editor ([SiGML Tools](https://vh.cmp.uea.ac.uk/index.php/SiGML_Tools)).
  - NGT: Van Dale is subscription-only, and its NGT URL is 404. SignON: "ALL RIGHT RESERVED", and Zenodo has only a gloss-embedding model ([Zenodo query](https://zenodo.org/api/records?q=SignON%20AND%20(NGT%20OR%20VGT%20OR%20ISL)&size=10)).
  - LGP: the VirtualSign hosts and portallgp are HTTP 000; Infopédia is 403.
  - LIS: no Zenodo LIS dataset other than Signsuisse poses, and GitHub hits are fingerspelling or student projects ([Zenodo](https://zenodo.org/api/records?q=%22italian%20sign%20language%22&type=dataset)).
  - Valencian: no signario on FESORD; CORILSE has 0 DataCite hits.
- **Minor details:**
  - SignDict code is MPL-2.0 ([GitHub](https://github.com/signdict/website)).
  - The Smith ISL "SOI" appendix is GitHub `TUD-RSmith/PhD-Appendices` (GPL-3.0), whereas Zenodo is CC BY 4.0. "Signs of Ireland" is not spelled out ([Zenodo](https://zenodo.org/records/10639554)).
  - The e-LIS OAI description ("2677 videos … for 294 Italian lemmas") does not mention ASCII parameter strings ([OAI](https://clarin.eurac.edu/repository/oai/request?verb=GetRecord&metadataPrefix=oai_dc&identifier=oai:clarin.eurac.edu:20.500.12124/75)).

**Central/Eastern Europe & Central Asia**
- **TİD Güncel Sözlük:**
  - Live host HTTP 000. The archived homepage (2025-05-16) says "Güncel Türk İşaret Dili Sözlüğü en fazla sıklığa sahip 2.000 sözcük/kavramdan oluşmaktadır." and has no telif, lisans or © strings.
  - Its About and Usage pages were never archived ([capture](https://web.archive.org/web/20250516040232/https://tidsozluk.aile.gov.tr/)).
  - The Boğaziçi TİD dictionary returns HTTP 000.
- **MC-TRISLAN:**
  - The ELG record (updated 2022-03-31) still points to `…/motion-capture-sign-language/download/`, which is 404 and never archived ([ELG](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/18324/)).
  - The archived project page links "download" to `/en/download`, which is 404 and unarchived ([capture](http://web.archive.org/web/20231205094649/https://www.kky.zcu.cz/en/research-fields/motion-capture-sign-language)).
  - DataCite and Zenodo have 0 hits. Contact Krňoul or Železný.
- **Other CEE leads:**
  - RSL Corpus licence text: registration is still closed ([rsl.nstu.ru](https://rsl.nstu.ru/)).
  - AUTSL T&C: still behind Codalab ("All files are encrypted!") ([ChaLearn](https://chalearnlap.cvc.uab.cat/dataset/40/description/)).
  - SL-ReDu: still only a citation request ([corpus](https://sl-redu.e-ce.uth.gr/corpus/)).
  - JEL-SZÓ-TÁR: host HTTP 000.
  - TurkSign446: unchanged (restricted, `cc-by-4.0`, 0 visible files) ([Zenodo](https://zenodo.org/api/records/17267294)).
  - Personality-rights clearance: the GSL, GSLW and AzSLD Zenodo descriptions contain no consent statement.
- **Balkan, Caucasus and Central Asian dictionaries:**
  - DataCite and HF: Serbian, Macedonian, Bosnian, Kosovo, Belarusian, Armenian, Kyrgyz, Turkmen, Mongolian, Moldovan, Latvian and Bulgarian all return 0. Croatian returns 1 paper ([DataCite example](https://api.datacite.org/dois?query=%22croatian%20sign%20language%22)).
  - The exceptions are Georgian and Tajik (Section 1, Tier A).
- **ELRA catalogue search:** HTTP 429.

**North America & Caribbean**
- **Kaggle asl-signs:** the API licence object is `{'id': 42, 'name': 'Subject to Competition Rules'}`. The data-size endpoint returned `{"code":401,"message":"Unauthenticated"}`.
- **LSQ:**
  - Institut Raymond-Dewar: the 2023 capture renders no text, and `/dictionnaire` was never archived.
  - Fondation des Sourds: only "Vidéos" sections.
  - Global Signbank public datasets are EmblemsNL, Kata Kolok and NGT only, so there is no LSQ Signbank ([available](https://signbank.cls.ru.nl/datasets/available)).
- **Inuit SL:**
  - ELAR dk0135 is "Collection online", but per-bundle access levels are not exposed on the landing page ([ELAR](https://www.elararchive.org/dk0135)).
  - Schuit's thesis is a publication, not data ([Crossref](https://api.crossref.org/works?query.bibliographic=Signs+of+the+Arctic+Typological+aspects+of+Inuit+Sign+Language+Schuit&rows=3)).
- **Maritime SL:**
  - ELAR exact-phrase search: 0. DataCite: 0.
  - Buchanan 2021 is identified as a Lamar University PhD thesis, "Preservation of Maritime Sign Language: An Endangered Language of Canada" ([Glottolog](https://glottolog.org/resource/reference/id/658878)).
- **Scott 1930 film:** Commons credits "YouTube" and "Unknown author". LoC and Smithsonian searches found no holding ([Commons](https://commons.wikimedia.org/wiki/File:Indian_Sign_Language_Council_(1930).webm); [SI Open Access](https://api.si.edu/openaccess/api/v1.0/search?q=%22Indian+Sign+Language+Council%22&api_key=DEMO_KEY)).
- **Other NA leads:**
  - Gallaudet NAD films: IA `collection:gallaudetuniversity mediatype:movies` returns 0.
  - Higgins 1923: IA returns 0.
  - HathiTrust title lookups: the API rejects title queries.
  - Hawaiʻi SL dictionary: ScholarSpace hits are only the embargoed Kaipuleohone word lists.
  - Wiktionary Cuban SL lemmas: 3 pages in Unicode SignWriting. The Dominican, Puerto Rican, Jamaican and Haitian categories each have 0 ([API](https://en.wiktionary.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Cuban_Sign_Language_lemmas&format=json)).
- **Caribbean sweep:**
  - DataCite and Zenodo have 0 hits for Dominican, Puerto Rican, Belize, Guyana, Jamaican, Grenada and French Antilles SL ([DataCite](https://api.datacite.org/dois?query=%22dominican%20sign%20language%22)).
  - The Cuban hits are teaching articles. The TTSL government dictionary was not found.

**Latin America**
- **Licence text still absent on original sites (2026-10-14 re-fetch):** CENAREC LESCO, INSOR, CES, DLSP (JS-only) and INES ([CENAREC](https://lesco.cenarec.go.cr/index.php/diccionariolesco)).
- **Ecuador "Gabriel Román" dictionary:** the FENASEC page exists but shows only a "trabajando" image and "Copyright © www.Fenasec.ec", so it is not online ([FENASEC](https://www.fenasec.ec/diccionario-lsec.html)).
- **DamPy / Paraguay:** `spl.gov.py/dampy/` is JS-only with no licence text ([DamPy](https://spl.gov.py/dampy/index.html)).
- **Other LA leads:**
  - ASORGUA hosts: HTTP 000.
  - UN Guatemala PDF: HEAD reports an 8.5 MB PDF, but GET returned a 622-byte HTML page.
  - SEP PDF: 403.
  - datos.gob.mx: "Access Denied".
  - dados.gov.br: empty body.
- **Repository gaps:**
  - Yucatec Maya SL: ELAR has only "Chambers_thesis_0002"; DataCite, Zenodo and OSF return 0. MDPI papers are 403.
  - Terena and Sateré: ELAR hits are unrelated.
  - LIBRAS-UFOP: 0 GitHub or DataCite hits.
  - LSC-54: 0.
  - Apoema and SIGNO-PERU-FER: still restricted with `license: None` ([Zenodo 20421823](https://zenodo.org/api/records/20421823)).
  - Wikisigns statistics links no LSU list ([statistics](https://www.wikisigns.org/statistics)).
  - The Signbank da Libras API returns `/api/languages` → `{"data":[]}`, and there is no documented bulk route.
- **Kaggle sweep** ([example query](https://www.kaggle.com/api/v1/datasets/list?search=lengua%20de%20se%C3%B1as)):
  - Chile, Peru, Spain/LSE, Germany and BSL: alphabet or number sets only.
  - Argentina, Czech, Kazakh and French: no relevant hits.

### Inferences
- Many "UNVERIFIED" items in the source notes turn out to have no licence at all, not merely an unseen one. Per the caller's tiering these are Tier C/D. Further web reading will not upgrade them; only emails to the rights holders will.
- An archived app bundle can reveal licence logic that the rendered HTML hides, as with Ocelles. The same technique may work for other SPA dictionaries (DLSP, SignaMed, DamPy) if needed.

### Gaps
- Without login, it remains unknown:
  - which ELAR bundles are Open versus User in Inuit SL dk0135;
  - Kaggle asl-signs main data size;
  - the AUTSL Codalab T&C text;
  - the RSL Corpus licence.
- Web search was not available, so local-language national dictionaries (Balkans, Caucasus, Central Asia, Dominican Republic, Cuba, Puerto Rico) were checked only via repositories and APIs. Absence there is not proof of absence.

---

## 3. What errors, stale values and new conflicts exist in the four notes files?

### Takeaway
There are 15 corrections. Five matter for licensing decisions:
1. BSL Corpus: a truncated quote overstates the conflict.
2. The CEE notes treat EASIER link data as Tier A, but the README says BY-NC-SA.
3. CEE "nothing usable" for Georgian and Tajik is wrong, because CC BY HamNoSys data exists.
4. WE's claim that no Elix CC BY-SA release happened is wrong.
5. NA's ASL-Skeleton3D "no release" is wrong: there is a release whose label conflicts with ASLLVD.

### Cited Findings

| # | File | Claim in notes | Correction | Evidence |
|---|---|---|---|---|
| 1 | WE (BSL Corpus OA) | Quotes "duplication or sale of all or part of any of the data collection is not permitted" as a conflict with BY-SA | The full sentence ends "…not permitted outside of the conditions set out below", and the CC BY-SA 4.0 grant is among those conditions → Tier A | [CAVA](https://bslcorpusproject.org/cava/open-access-data/) |
| 2 | WE (Q3 table, Q4 Zenodo list) | WMT-SLT SRF Zenodo 6631275 is "available for research purposes only under a" CC BY-NC-SA 4.0 | The Zenodo record has `license: None`. The site says "can be used for non-commercial research … distributing the datasets … is not permitted" (no CC) | [Zenodo API](https://zenodo.org/api/records/6631275); [wmt-slt.com/data](https://www.wmt-slt.com/data) |
| 3 | WE (Elix) | "No evidence was found that the 2017 plan to put Elix videos under CC BY-SA was carried out" | 100 Elix clips are CC BY-SA 4.0 on Commons (VRT ticket #2020010710006923) | [Commons](https://commons.wikimedia.org/wiki/Category:Files_supported_by_Wikimedia_France_-_Elix) |
| 4 | WE (Ocelles) | "Wayback returned no snapshot" and licence CC BY-SA 2.0 FR | The site moved to ocelles.inshea.fr (captures through 2025-10-12). The app uses per-file licences, so the Compendium value is stale | [CDX](https://web.archive.org/cdx/search/cdx?url=ocelles.inshea.fr/&limit=-5) |
| 5 | WE (Ortega 2025) | "CNLSE catalogue reportedly marks it 'copyrighted'" | The data are CC BY 4.0 on OSF | [OSF](https://api.osf.io/v2/nodes/jkw8p/?embed=license) |
| 6 | CEE (EASIER) | "SPDX CC-BY-4.0 \| Tier A for the link data only" | The README says the links are "distributed under a Creative Commons BY-NC-SA 4.0 licence" → Tier B | [README](https://www.fdr.uni-hamburg.de/record/14190/files/_README.md?download=1) |
| 7 | CEE (SignPuddle) | Licence "caller-asserted / unverified" (contradicts NA and LA, which cite signwriting.org) | Verified on signwriting.org (CC BY-SA 3.0 Unported) | [signwriting.org](https://www.signwriting.org/) |
| 8 | CEE (Georgian, Tajik) | "nothing usable" | CC BY 4.0 HamNoSys transcriptions exist (OSF `agnwj`; figshare 15170700) | [OSF](https://api.osf.io/v2/nodes/agnwj/?embed=license); [figshare](https://api.figshare.com/v2/articles/15170700) |
| 9 | CEE + LA (method) | "Kaggle could not be searched (the API needs auth)" | `/api/v1/datasets/list?search=` and `/datasets/view/` work without auth | [Kaggle API](https://www.kaggle.com/api/v1/datasets/view/kapitanov/slovo) |
| 10 | NA (ASL-Skeleton3D) | "Tier D until a release and license are found" | Released on Zenodo with a CC BY 4.0 label but derived from ASLLVD → Tier C (conflict) | [Zenodo 5484110](https://zenodo.org/records/5484110) |
| 11 | LA (LSEc) | Record 21627229 labelled "v1.0.0 2026-06-28"; "DOI discrepancy" | 21627229 is v1.0.1 (2026-07-27). 21001360 is v1.0.0 (2026-06-28). Both are valid | [versions](https://zenodo.org/api/records/21627229/versions) |
| 12 | LA (LESHO) | sgn16 "likely" comes from the Duncan LESHO PDF | No `<src>` mentions Duncan or LESHO. The 1,017 attributed entries are from SignTyp (UConn, 2016–17) | [sgn16.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn16.spml) |
| 13 | LA (counts, stale) | sgn65 has 1,731 entries; sgn120 has 666 | Now 1,741 and 685 (puddles updated since) | [sgn65.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn65.spml) |
| 14 | WE / CEE (Dicta-Sign) | "Individual license agreement for researchers" (Compendium) | CLARIN:EL and ELG state CC BY-NC-ND 4.0, so this is a new conflict, not a pure error | [CLARIN:EL 805](https://inventory.clarin.gr/catalogue_backend/api/registry/metadatarecord/805/) |
| 15 | CEE (FluentSigners-50) | Zenodo "Restricted" with no licence (correct today) | ELG still advertises CC BY 4.0 with a zip link. Record both; ELG is stale | [ELG 22594](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/22594/) |

Further quality notes from parsing the LatAm SPML dumps ([sgn143.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn143.spml)):
- sgn143 (Uruguay) has 29 entries whose `<src>` is "http://diccisenas.cedeti.cl/UY/", a third-party dictionary. Filter them out.
- Contributor "Rundesth Saboia Nobre" supplies 143 entries in sgn65 (Mexico), 539 in sgn120 and 250 in sgn143 (Uruguay), and appears in sgn135 (Chile). Weight native-signer attribution accordingly.

### Inferences
- Allowlist actions: upgrade BSL Corpus OA to A, downgrade EASIER to B, add Elix/Commons and Ortega 2025 as A, and record FluentSigners-50 and ASL-Skeleton3D/Phono as conflicts.

### Gaps
- Whether UCL's Registrar would object to BY-SA redistribution of avatar derivatives was not tested by email; that would be a rights-holder question.

---

## 4. Gap ledger: outcome of every gap in the four files

### Takeaway
There are 193 rows: 80 resolved (including "resolved-with-conflict" and "partial" items that now have a definitive classification) and 113 exhausted. Status counts by file:
- **WE:** 33 resolved, 42 exhausted.
- **CEE:** 14 resolved, 16 exhausted.
- **NA:** 17 resolved, 27 exhausted.
- **LA:** 16 resolved, 28 exhausted.

### Cited Findings

| ID | Gap | File | Outcome | Tier | Evidence URL |
|---|---|---|---|---|---|
| WE-01 | Ocelles licence (CC BY-SA 2.0 FR unverified) | WE | resolved: per-file licence picker; site down | C | https://web.archive.org/web/20250327102526/https://ocelles.inshea.fr/dist/main.daf6df033103d98cb176.js |
| WE-02 | ECHO licence (Compendium only; TLA blank) | WE | exhausted: TLA collection/sub-collection/bundles show no licence; no capture of the original ECHO site | B/C (per Compendium BY-NC-ND) | https://archive.mpi.nl/tla/islandora/object/tla%3A1839_00_0000_0000_0001_494E_3 |
| WE-03 | 3D-LEX licence only from paper; OSF/DARE not opened | WE | resolved: CC BY 4.0 on OSF nodes | A | https://api.osf.io/v2/nodes/cv276/?embed=license |
| WE-04 | BSL norms (Vinson 2008) licence | WE | exhausted: psychonomic.org/archive defunct, not archived; Springer JS challenge | C | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.3758/BRM.40.4.1079&resultType=core&format=json |
| WE-05 | Ortega 2025 BSL/DGS DB data licence | WE | resolved: OSF CC BY 4.0, videos included | A | https://api.osf.io/v2/nodes/jkw8p/?embed=license |
| WE-06 | SMILE isolated (Zenodo licence None) | WE | exhausted: restricted, no licence; 7035025 CC BY is the paper only | C | https://zenodo.org/api/records/7701457 |
| WE-07 | Sign4all licence | WE | resolved: `"license":""` in page metadata | C/D | https://www.scidb.cn/en/detail?dataSetId=12775cc0026841979bdaba60484ad067 |
| WE-08 | A3LIS-147 licence | WE | resolved: public tar.gz with no licence; host dead | D | https://web.archive.org/web/20151224161517/http://a3lab.dii.univpm.it:80/projects/a3lis |
| WE-09 | LGP Reference Corpus data licence | WE | exhausted: Anubis wall; no deposit | C | https://api.crossref.org/works/10.16995/jpl.23006 |
| WE-10 | MLRS LSM dictionary (offline) | WE | exhausted: only an empty `lsm-OLD/` archived | C | https://web.archive.org/web/20240720111432/https://mlrs.research.um.edu.mt/resources/lsm-OLD/ |
| WE-11 | BOBSL BBC terms text | WE | resolved: BBC R&D terms quoted | C | https://www.bbc.co.uk/rd/projects/extol-dataset |
| WE-12 | SignPuddle licence chain | WE | resolved: signwriting.org CC BY-SA 3.0 | A | https://www.signwriting.org/ |
| WE-13 | SignPuddle per-contributor coverage | WE | exhausted: no per-contributor grant anywhere | A* | https://www.signbank.org/signpuddle2.0/index.php?ui=1&sgn=46 |
| WE-14 | sgn103 "private" puddle licence | WE | resolved: public page, 234 entries, same site grant | A* | https://www.signbank.org/signpuddle2.0/index.php?ui=1&sgn=103 |
| WE-15 | BSL Corpus BY-SA vs "no duplication" | WE | resolved: clause qualified by "outside of the conditions set out below" | A | https://bslcorpusproject.org/cava/open-access-data/ |
| WE-16 | LSFB dico BY-SA footer vs BY-NC-ND page | WE | resolved: footer's "Lire ici" links to the BY-NC-ND page | B | https://dico.lsfb.be/licence-creative-commons/ |
| WE-17 | EASIER CC BY vs README BY-NC-SA | WE | exhausted: conflict persists in v1–v4; take stricter | B | https://www.fdr.uni-hamburg.de/api/records/?q=conceptrecid:10168&all_versions=true |
| WE-18 | LedaSila unnamed CC | WE | exhausted: generic CC chooser link only | C | https://ledasila.aau.at/ |
| WE-19 | SSLC SND BY-NC vs site BY-NC-SA | WE | resolved: NC either way | B | https://researchdata.se/en/catalogue/dataset/ext0409-1 |
| WE-20 | Corpus VGT IVDNT BY-NC vs corpusvgt.be BY-NC-SA | WE | resolved: BY-NC-SA embedded in each video | B | https://www.corpusvgt.be/ |
| WE-21 | DILSE footer vs aviso legal | WE | exhausted: persists | C | https://fundacioncnse-dilse.org/aviso-legal.php |
| WE-22 | SMILE Continuous SWISSUbase licence | WE | resolved: CC BY-NC-SA 4.0 | B | https://www.swissubase.ch/en/catalogue/studies/21056/latest/datasets/3289/4422/contract/usage-license |
| WE-23 | WMT-SLT SRF licence | WE | resolved: no CC; NC research and no redistribution (error flagged) | B/C | https://www.wmt-slt.com/data |
| WE-24 | UEA JASigning/SiGML licence | WE | resolved: example pages BY-SA; software and notation files BY-ND-equivalent | A (examples) / C | https://vh.cmp.uea.ac.uk/index.php/JASigning_Conditions |
| WE-25 | ViSiCAST/eSIGN DGS HamNoSys lexicons | WE | exhausted: only the eSIGN Editor offered | C | https://vh.cmp.uea.ac.uk/index.php/SiGML_Tools |
| WE-26 | Dicta-Sign lexicon licence (new conflict) | WE/CEE | resolved-with-conflict: CLARIN:EL CC BY-NC-ND 4.0 | B (ND→C) | https://inventory.clarin.gr/catalogue_backend/api/registry/metadatarecord/805/ |
| WE-27 | BSL SignBank registered phonology fields | WE | exhausted: needs an account | C | https://bslsignbank.ucl.ac.uk/about/acknowledgements/ |
| WE-28 | Signature BSL dictionary | WE | exhausted: no licence text retrievable | D (presumed) | https://www.signature.org.uk/ |
| WE-29 | BSL Zone (BSLBT) | WE | resolved: redirects to LumoTV, all rights reserved | D | https://www.bslzone.co.uk/ |
| WE-30 | SignStation | WE | resolved: © Sign Station | D | https://signstation.org/ |
| WE-31 | Welsh BSL resources | WE | exhausted: no repository hits | — | https://api.datacite.org/dois?query=%22british%20sign%20language%22%20welsh |
| WE-32 | Ulster Univ / RNID NI (NISL) | WE | exhausted: contacts only | — | https://api.datacite.org/dois?query=%22northern%20ireland%20sign%20language%22 |
| WE-33 | Belfast signers' NISL forms in BSL Corpus | WE | exhausted | A (BSLCP) | https://bslcorpusproject.org/cava/ |
| WE-34 | Smith ISL "SOI" expansion | WE | exhausted: not spelled out; files listed | A | https://zenodo.org/records/10639554 |
| WE-35 | ISL Covid-19 glossary terms | WE | resolved: YouTube, © IDS | D | https://www.irishdeafsociety.ie/irish-sign-language-for-covid19-related-vocabulary/ |
| WE-36 | Justisigns 2 glossary terms | WE | exhausted: no licence text | D | https://justisigns2.com/ |
| WE-37 | ATIS corpus licence | WE | exhausted: LREC data page and paper only | C | https://www.sign-lang.uni-hamburg.de/lrec/data/atiscorpus.html |
| WE-38 | Malta FDMSL print/CD; CRPD sale | WE | exhausted: CRPD site mentions LSM, no sale/licence found | C/D | https://www.crpd.org.mt/ |
| WE-39 | Elix videos on Commons | WE | resolved: 100 CC BY-SA 4.0 clips (VRT) | A | https://commons.wikimedia.org/wiki/Category:Files_supported_by_Wikimedia_France_-_Elix |
| WE-40 | IVT LSF dictionaries | WE | resolved: commercial print publisher | D | https://www.ivt.fr/ |
| WE-41 | Monica Companys LSF dictionaries | WE | exhausted: no repository hits; site not fetched (commercial publisher) | D (presumed) | https://api.datacite.org/dois?query=%22langue%20des%20signes%20fran%C3%A7aise%22 |
| WE-42 | Sign3D, LSF-SHELVES, Sign'Maths, LSF-ANSHE | WE | exhausted: DataCite 0; not on Ortolang; LREC pages lack licence | C | https://www.sign-lang.uni-hamburg.de/lrec/data/sign3d.html |
| WE-43 | LS-COLIN | WE | resolved: COCOON CC BY-NC-ND 2.5 | B | https://doi.org/10.34847/cocoon.30180d73-59a4-316f-aff8-a9a0399e666a |
| WE-44 | Van Dale Basiswoordenboek NGT | WE | exhausted: subscription; URL 404 | D | https://www.vandale.nl/ |
| WE-45 | SignON NGT data | WE | exhausted: no NGT lexical deposit | — | https://signon-project.eu/ |
| WE-46 | Kestner | WE | resolved: commercial shop | D | https://www.kestner.de/ |
| WE-47 | DGS GebärdenWiki, Deaf-ADAPT, SL-Fluent | WE | exhausted: DataCite 0 relevant | — | https://api.datacite.org/dois?query=%22SL-Fluent%22 |
| WE-48 | "SignLex"/ÖGS-Lexikon | WE | exhausted: DataCite 0 | — | https://api.datacite.org/dois?query=%22SignLex%22%20sign |
| WE-49 | Paula avatar; Signsuisse 3D avatar | WE | exhausted | — | https://api.datacite.org/dois?query=%22DSGS%20Corpus%22 |
| WE-50 | "DSGS Corpus" | WE | resolved: = SMILE Continuous (LaRS) | B | https://api.datacite.org/dois?query=%22SMILE%20Continuous%22 |
| WE-51 | SignaMed licence | WE | resolved: © 2026 SignaMed | C | https://signamed.uvigo.es/ |
| WE-52 | CORILSE | WE | exhausted: DataCite 0; LREC data page has no licence | C | https://www.sign-lang.uni-hamburg.de/lrec/data/corilse.html |
| WE-53 | Signario LSE | WE | resolved: © authors; data in private DVC | C | https://github.com/griffos-ucm/signario-data |
| WE-54 | Kaggle LSE sets | WE | resolved: alphabet-only (CC0 / Unknown / NC-ND) | A (alphabet) / D | https://www.kaggle.com/api/v1/datasets/list?search=spanish%20sign%20language |
| WE-55 | PE2LGP lexicon | WE | resolved: MIT, 110 glosses, no forms | A (negligible) | https://github.com/ineslacerda/PE2LGP-Translator |
| WE-56 | VirtualSign dataset | WE | exhausted: hosts HTTP 000 | — | https://virtualsign.pt/ |
| WE-57 | Porto Editora / Infopédia LGP | WE | exhausted: 403 | D (presumed) | https://www.infopedia.pt/ |
| WE-58 | Univ. Coimbra / ESEC LGP | WE | exhausted: no repository hits | — | https://api.datacite.org/dois?query=%22L%C3%ADngua%20Gestual%20Portuguesa%22 |
| WE-59 | ENS/ISSR LIS apps, Smart LIS, LIS Tactile, ISTC-CNR, Radutzky | WE | exhausted: no Zenodo/GitHub/Kaggle hits | — | https://zenodo.org/api/records?q=%22italian%20sign%20language%22&type=dataset |
| WE-60 | MultiMedaLIS licence | WE | resolved: Kaggle CC BY-NC-SA 4.0 | B | https://www.kaggle.com/competitions/iccv-mslr-2025-track-2 |
| WE-61 | ATLAS / LIS4ALL | WE | resolved: © 2017, no licence | C/D | https://www.smilies.polito.it/atlas/ |
| WE-62 | FESORD signario; UV LSCV materials | WE | exhausted | — | https://www.fesord.org/ |
| WE-63 | NTNU NTS corpus | WE | resolved: CLARINO 2× BY-NC-SA, 3× CLARIN RES | B / C | https://repo.clarino.uib.no/xmlui/handle/11509/141?show=full |
| WE-64 | Statped reuse policy | WE | exhausted: 403; minetegn empty | — | https://www.statped.no/tegnsprak/ |
| WE-65 | Greenlandic resources | WE | exhausted: none in DataCite/Zenodo/Kaggle | — | https://api.datacite.org/dois?query=greenlandic%20sign%20language |
| WE-66 | Icelandic beyond SignWiki | WE | exhausted: SHH points to SignWiki; CLARIN-IS none | B (SignWiki) | https://island.is/s/shh |
| WE-67 | Suvi 1998 archive snapshot licence | WE | resolved: © 2018 Kuurojen Liitto & Kotus | C | https://aineisto.viittomakielinenkirjasto.fi/arkisto-suvi/ |
| WE-68 | Kotus 1998 PDF licence | WE | exhausted: 403 | C | https://kaino.kotus.fi/www/verkkojulkaisut/julk60/Suomalaisen_viittomakielen_perussanakirja_1998.pdf |
| WE-69 | FinSL Signbank per-lexicon licences | WE | exhausted: fields blank | B (videos) | https://signbank.csc.fi/dictionary/ |
| WE-70 | Suvi text/code licence | WE | exhausted | B (videos) | https://suvi.viittomat.net/ |
| WE-71 | SignWiki CC version | WE | exhausted: rightsinfo empty on 5 instances | B/D | https://is.signwiki.org/api.php?action=query&meta=siteinfo&siprop=rightsinfo&format=json |
| WE-72 | CLARIN VLO / COMEDI (JS) | WE | exhausted: VLO JS-only; LICENSE.txt route stands | — | https://vlo.clarin.eu/search?q=%22Danish+Sign+Language%22 |
| WE-73 | CLARIN-DK, CLARINO, Icelandic CLARIN records | WE | resolved: DK 0; CLARINO 5 NTS; IS 0 | B/C | https://repo.clarino.uib.no/xmlui/discover?query=tegnspr%C3%A5k |
| WE-74 | e-LIS Stokoe ASCII strings | WE | exhausted: not in OAI description | B | https://clarin.eurac.edu/repository/oai/request?verb=GetRecord&metadataPrefix=oai_dc&identifier=oai:clarin.eurac.edu:20.500.12124/75 |
| WE-75 | DGS "rwth" SignPuddle provenance; CH-de suffix mapping; NGT CSV columns; disk sizes; DW-DGS/delegs fields; SIGNUM citation; ÖGS count | WE | exhausted: need accounts, crawling or downloads (SignDict code licence = MPL-2.0 resolved) | — | https://github.com/signdict/website |
| CEE-01 | SignPuddle licence unverifiable | CEE | resolved: signwriting.org | A | https://www.signwriting.org/ |
| CEE-02 | Korpus PJM real licence | CEE | exhausted: site ©; paper CC BY-NC (paper only); Compendium BY-SA | C | https://www.sign-lang.uni-hamburg.de/lrec/pub/22010.html |
| CEE-03 | BosphorusSign22k terms | CEE | resolved: EULA, research only | B/C | https://arxiv.org/pdf/2004.01283v2 |
| CEE-04 | TİD Güncel Sözlük licence | CEE | exhausted: down; archived page without terms | C | https://web.archive.org/web/20250516040232/https://tidsozluk.aile.gov.tr/ |
| CEE-05 | Boğaziçi TİD dictionary | CEE | exhausted: HTTP 000 | C/D | https://www.cmpe.boun.edu.tr/tid/ |
| CEE-06 | MC-TRISLAN current download location | CEE | exhausted: 404s, not archived; licence CC BY-NC 4.0 (ELG) | B | https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/18324/ |
| CEE-07 | CLARIN.SI SZJ record | CEE | resolved: none (OAI harvest of 1,308 records) | — | https://www.clarin.si/repository/oai/request?verb=Identify |
| CEE-08 | CLARIN-PL | CEE | resolved: none | — | https://clarin-pl.eu/dspace/server/api/discover/search/objects?query=migowy |
| CEE-09 | National dictionaries: HR, RS, BA, MK, Kosovo, BY, AM, KG, TM, MN, MD | CEE | exhausted: DataCite/HF 0 | — | https://api.datacite.org/dois?query=%22serbian%20sign%20language%22 |
| CEE-10 | Tajik SL ("nothing usable") | CEE | resolved: CC BY 4.0 HamNoSys/phonology transcriptions | A | https://api.figshare.com/v2/articles/15170700 |
| CEE-11 | Georgian SL (SignWiki only, D) | CEE | resolved: CC BY 4.0 HamNoSys transcriptions (523 rows) | A | https://api.osf.io/v2/nodes/agnwj/?embed=license |
| CEE-12 | Kaggle unsearchable; Slovo Kaggle mirror licence | CEE | resolved: public API works; Slovo "CC BY-SA 4.0" label (author upload) | A (variant) | https://www.kaggle.com/api/v1/datasets/view/kapitanov/slovo |
| CEE-13 | RSL Corpus Licence text | CEE | exhausted: registration closed | C | https://rsl.nstu.ru/ |
| CEE-14 | Garage DB licence text | CEE | resolved: no named licence; "open to all" + citation | C | https://rsl-research-explore.garagemca.org/ |
| CEE-15 | Personality-rights clearance (GSL, Slovo) | CEE | exhausted: no consent text in Zenodo records | — | https://zenodo.org/api/records/3941811 |
| CEE-16 | AUTSL ChaLearn/Codalab T&C | CEE | exhausted: behind Codalab | B | https://chalearnlap.cvc.uab.cat/dataset/40/description/ |
| CEE-17 | ELG catalogue not exhaustively searched | CEE | resolved: ELG `search=` sweep done | — | https://live.european-language-grid.eu/catalogue_backend/api/registry/search/?search=sign%20language |
| CEE-18 | ELRA catalogue not exhaustively searched | CEE | exhausted: HTTP 429 | — | https://catalog.elra.info/en-us/repository/search/?q=sign+language |
| CEE-19 | posunky.sk licence (HTTP 466) | CEE | resolved: live, © Snepeda | C | https://posunky.sk/ |
| CEE-20 | JEL-SZÓ-TÁR | CEE | exhausted: HTTP 000 | — | http://www.multilinguanet.hu/ |
| CEE-21 | "Moja prva znakovnica" availability | CEE | exhausted: not in any catalogue | — | https://api.datacite.org/dois?query=%22croatian%20sign%20language%22 |
| CEE-22 | SL-ReDu (no licence) | CEE | exhausted: unchanged | C | https://sl-redu.e-ce.uth.gr/corpus/ |
| CEE-23 | Cologne UkSL licence | CEE | resolved: Closed Access | C | https://api.datacite.org/dois/10.18716/dch/a.00000015 |
| CEE-24 | KRSL20 licence | CEE | resolved: no licence on any repo | C/D | https://github.com/krslproject |
| CEE-25 | FluentSigners-50 licence | CEE | resolved-with-conflict: ELG CC BY vs Zenodo Closed | C | https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/22594/ |
| CEE-26 | CSE MoCap 2016 / 2020 datasets | CEE | exhausted: same KKY family; downloads 404 | C | https://www.sign-lang.uni-hamburg.de/lrec/data/mocapdatasetofcse.html |
| CEE-27 | TurkSign446 (restricted) | CEE | exhausted: unchanged | A licence / C access | https://zenodo.org/api/records/17267294 |
| CEE-28 | Kosovo separately | CEE | exhausted: DataCite/HF 0 | — | https://api.datacite.org/dois?query=%22kosovo%20sign%20language%22 |
| CEE-29 | Romanian beyond SignPuddle (new) | CEE | resolved: RoCoISLR scraped; pesemne.ro all rights reserved | D | https://arxiv.org/abs/2511.12767 |
| CEE-30 | Hungarian HSL Corpus / dictionaries | CEE | exhausted: DataCite papers only | C | https://api.datacite.org/dois?query=%22hungarian%20sign%20language%22 |
| NA-01 | Kaggle asl-signs main data licence | NA | resolved: API licence "Subject to Competition Rules" (rules = CC BY 4.0) | A | https://www.kaggle.com/competitions/asl-signs |
| NA-02 | Kaggle asl-signs main data size | NA | exhausted: data-list API returns 401 | — | https://www.kaggle.com/api/v1/competitions/data/list/asl-signs |
| NA-03 | ASL-LEX OSF vs asl-lex.org conflict | NA | exhausted: persists | contested (A/B) | https://asl-lex.org/download.html |
| NA-04 | ASL-Skeleton3D / ASL-Phono | NA | resolved-with-conflict: Zenodo CC BY vs ASLLVD terms | C | https://zenodo.org/records/5484145 |
| NA-05 | SLP-AA repository and licence | NA | resolved: GPL-3.0 + sample corpus | A (GPL) | https://github.com/PhonologicalCorpusTools/SLPAA |
| NA-06 | "ASLing" | NA | exhausted: not identifiable | — | https://api.datacite.org/dois?query=ASLing |
| NA-07 | DeafTEC STEM dictionary terms | NA | resolved: © RIT, all rights reserved | D | https://deaftec.org/stem-dictionary/ |
| NA-08 | Deaf Studies Digital Journal licence | NA | resolved: per-article (BY / BY-NC-ND / none) | mixed | https://doi.org/10.3998/15499139.0004.183 |
| NA-09 | Gallaudet Dictionary of ASL | NA | exhausted: print | D (presumed) | https://api.crossref.org/works?query.bibliographic=Gallaudet+Dictionary+of+American+Sign+Language |
| NA-10 | NAD lexical resources | NA | exhausted | — | https://archive.org/advancedsearch.php?q=collection%3Agallaudetuniversity |
| NA-11 | YouTube-ASL licence | NA | resolved: video IDs only | D | https://github.com/google-research/google-research/tree/master/youtube_asl |
| NA-12 | ASL-100-RGBD access terms | NA | resolved: Databrary Access Agreement | C | https://api.datacite.org/dois/10.17910/b7.1062 |
| NA-13 | Institut Raymond-Dewar LSQ dictionary | NA | exhausted: capture empty; dictionary URLs unarchived | C | https://web.archive.org/web/20230209001431/http://www.raymond-dewar.qc.ca/ |
| NA-14 | "Signes de Québec" app | NA | exhausted | D (presumed) | https://api.datacite.org/dois?query=%22langue%20des%20signes%20qu%C3%A9b%C3%A9coise%22 |
| NA-15 | Cégep du Vieux Montréal LSQ | NA | exhausted | — | https://api.datacite.org/dois?query=%22langue%20des%20signes%20qu%C3%A9b%C3%A9coise%22 |
| NA-16 | Marqspat / lsq.uqam.ca | NA | resolved: Vimeo lexicons, © 2026 | C | https://lsq.uqam.ca/?q=content/lexique-du-projet-marqspat |
| NA-17 | grlsq.uqam.ca | NA | exhausted: no capture | — | https://archive.org/wayback/available?url=grlsq.uqam.ca |
| NA-18 | LSQ Signbank | NA | resolved: none (Global Signbank has only 3 public datasets) | — | https://signbank.cls.ru.nl/datasets/available |
| NA-19 | Fondation des Sourds dictionary | NA | exhausted: none found | D | http://web.archive.org/web/20260813105733/https://www.fondationdessourds.net/ |
| NA-20 | Inuit SL per-bundle ELAR access | NA | exhausted: not exposed on landing page | C | https://www.elararchive.org/dk0135 |
| NA-21 | Schuit 2014 dissertation / ITK / Nunavut resources | NA | exhausted: publications only | C | https://api.crossref.org/works?query.bibliographic=Signs+of+the+Arctic+Typological+aspects+of+Inuit+Sign+Language+Schuit&rows=3 |
| NA-22 | Maritime SL ELAR search | NA | resolved: no ELAR deposit (exact phrase 0) | — | https://www.elararchive.org/?s=%22maritime+sign+language%22 |
| NA-23 | Buchanan 2021 access | NA | resolved: Lamar University PhD thesis; no data | D | https://glottolog.org/resource/reference/id/658878 |
| NA-24 | Scott 1930 film original archive | NA | exhausted: Commons credits YouTube; LoC/SI/NARA no hit | A-provisional (PD claim) | https://commons.wikimedia.org/wiki/File:Indian_Sign_Language_Council_(1930).webm |
| NA-25 | Gallaudet holdings of 1910–1920 NAD films | NA | exhausted: IA Gallaudet movies 0 | — | https://archive.org/advancedsearch.php?q=collection%3Agallaudetuniversity+AND+mediatype%3Amovies&fl%5B%5D=identifier&output=json |
| NA-26 | HathiTrust check: Seton, Michaels, Mallery 1881 | NA | exhausted: API needs OCLC/htid; PD by date anyway | A | https://catalog.hathitrust.org/api/volumes/brief/json/title:Sign+talk |
| NA-27 | Tomkins 1931/1936 renewals | NA | exhausted | D until checked | https://catalog.hathitrust.org/api/volumes/brief/htid/mdp.39015001688293.json |
| NA-28 | Tomkins 1929 (not re-checked) | NA | resolved: pd, Full view | A | https://catalog.hathitrust.org/api/volumes/brief/htid/mdp.39015001688293.json |
| NA-29 | Hawaiʻi SL dictionary publication | NA | exhausted | C | https://scholarspace.manoa.hawaii.edu/server/api/discover/search/objects?query=%22Hawai%27i%20Sign%20Language%22 |
| NA-30 | Higgins 1923 scan | NA | exhausted: IA 0 | — | https://archive.org/advancedsearch.php?q=title%3A%28how+to+talk+to+the+deaf%29&fl%5B%5D=identifier&output=json |
| NA-31 | Long 1918 "~1,400 signs" count | NA | exhausted: not re-counted | A | https://archive.org/metadata/gu_signlanguagem00long |
| NA-32 | Davis "Hand Talk" project URL | NA | exhausted: book record only | D | https://api.si.edu/openaccess/api/v1.0/search?q=%22Indian+Sign+Language+Council%22&api_key=DEMO_KEY |
| NA-33 | Dakota Media Access IA item | NA | resolved: CC BY-NC 4.0 | B | https://archive.org/metadata/PerformancesAndEvents2026-05-28-PlainsIndianSignLanguage/metadata |
| NA-34 | tulplok-* IA items | NA | resolved: Tulsa library collection, no licence | D | https://archive.org/advancedsearch.php?q=identifier%3Atulplok*&fl%5B%5D=identifier&output=json |
| NA-35 | Cuban ANSOC dictionary | NA | exhausted: DataCite/Zenodo teaching articles only | — | https://api.datacite.org/dois?query=%22lengua%20de%20se%C3%B1as%20cubana%22 |
| NA-36 | Dominican CONADIS/ANSORDO dictionary | NA | exhausted: 0 | — | https://api.datacite.org/dois?query=%22dominican%20sign%20language%22 |
| NA-37 | Puerto Rican SL (UPR) | NA | exhausted: 0 | — | https://api.datacite.org/dois?query=%22puerto%20rican%20sign%20language%22 |
| NA-38 | SIL Haiti; LSHDoP data location | NA | resolved: LSHDoP sketch CC BY 4.0 (lexicon not found) | A (sketch) | https://api.figshare.com/v2/articles/13724614 |
| NA-39 | Belize, Grenada, Guyana, French Antilles | NA | exhausted: 0 | — | https://api.datacite.org/dois?query=%22belize%20sign%20language%22 |
| NA-40 | TTSL government dictionary | NA | exhausted (new arXiv TTSL dataset lead, C) | C | https://arxiv.org/abs/2412.18187 |
| NA-41 | Cuban SL Wiktionary contents | NA | resolved: 3 SignWriting-titled pages | A (negligible) | https://en.wiktionary.org/wiki/Category:Cuban_Sign_Language_lemmas |
| NA-42 | ELAR file sizes / citation format | NA | exhausted: not exposed without login | B/C | https://www.elararchive.org/how-to-use/ |
| NA-43 | SignBank+ NC relicense of BY-SA | NA | resolved: LICENSE BY-NC 4.0 confirmed; use upstream | B | https://github.com/sign-language-processing/signbank-plus |
| NA-44 | Lexique LSQ badge version | NA | exhausted: badge image only | B | https://lexiquelsq.ca/credits/ |
| LA-01 | sgn46 entry count (>20 MB) | LA | resolved: 64,156 entries (puddle page) | A | https://www.signbank.org/signpuddle2.0/index.php?ui=1&sgn=46 |
| LA-02 | LESHO PDF ↔ sgn16 link | LA | resolved: not supported (SignTyp-sourced) | A | https://www.signbank.org/signpuddle2.0/data/spml/sgn16.spml |
| LA-03 | NSLP manual PDF licence | LA | resolved: covered by signwriting.org "publications … related to Sutton Movement Writing" | A* | https://www.signwriting.org/ |
| LA-04 | Wikisigns LSU list URL; bulk export | LA | exhausted | A (licence) | https://www.wikisigns.org/statistics |
| LA-05 | SEP/Libre Acceso PDF © | LA | exhausted: 403 | D | https://educacionespecial.sep.gob.mx/storage/recursos/2023/05/xzrfl019nV-4Diccionario_lengua_%20Senas.pdf |
| LA-06 | UN Guatemala PDF (alphabet) | LA | exhausted: GET returns HTML | D | https://guatemala.un.org/es/download/164428/273706 |
| LA-07 | CENAREC LESCO licence | LA | exhausted: no licence on site | B (prov.) / C | https://lesco.cenarec.go.cr/index.php/diccionariolesco |
| LA-08 | LESCO Corpus licence | LA | exhausted: Compendium only | B (prov.) | https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/lescocorpus.html |
| LA-09 | Hands On LESCO app | LA | exhausted | D | https://delfino.cr/2021/11/hands-on-lesco-lanza-diccionario-para-acercar-a-poblacion-a-la-lengua-de-senas-costarricense |
| LA-10 | INSOR, LeSiCo, CES licences | LA | exhausted: no text on original sites | C | https://educativo.insor.gov.co/diccionario/ |
| LA-11 | LSC-54 data statement | LA | exhausted: Zenodo/DataCite 0 | C | https://zenodo.org/api/records?q=%22LSC-54%22 |
| LA-12 | LSEC "Gabriel Román" URL | LA | resolved: placeholder page, not online | C | https://www.fenasec.ec/diccionario-lsec.html |
| LA-13 | Capovilla dictionary | LA | exhausted: only articles about it | D | https://api.crossref.org/works?query.bibliographic=Capovilla+Dicion%C3%A1rio+enciclop%C3%A9dico+ilustrado+tril%C3%ADngue |
| LA-14 | Hand Talk | LA | resolved: all rights reserved | D | https://www.handtalk.me/en/terms-of-use |
| LA-15 | LIBRAS-UFOP licence | LA | exhausted: 0 hits | — | https://api.datacite.org/dois?query=LIBRAS-UFOP |
| LA-16 | Kaggle datasets (LatAm) | LA | resolved: sweep done; one mislabelled Libras Signbank scrape flagged | mixed | https://www.kaggle.com/api/v1/datasets/list?search=libras |
| LA-17 | ASORGUA dictionary | LA | exhausted: HTTP 000 | C | https://asorgua.org/ |
| LA-18 | ANSNIC / Senghas / Kegl / NSLP archives | LA | exhausted: DataCite 25 hits, no data | C | https://api.datacite.org/dois?query=%22nicaraguan%20sign%20language%22 |
| LA-19 | Le Guen Yucatec Maya SL data | LA | exhausted | — | https://www.elararchive.org/?s=yucatec+maya+sign |
| LA-20 | Terena / Cena / Sateré-Mawé | LA | exhausted: ELAR hits unrelated | — | https://www.elararchive.org/?s=terena |
| LA-21 | French Guiana | LA | exhausted | — | https://api.datacite.org/dois?query=%22langue%20des%20signes%20guyane%22 |
| LA-22 | Chilean datasets beyond SignPuddle | LA | exhausted: alphabet-only Kaggle; DataCite none | D | https://www.kaggle.com/api/v1/datasets/list?search=chilean%20sign%20language |
| LA-23 | ELAR "Panamanian SL (2)" collection | LA | resolved: `naso-bermudez-0396` (U access) | C | https://www.elararchive.org/uncategorized/SO_66e580d4-12b6-4e8e-8ee6-08348b4be0f5/ |
| LA-24 | ELAR Urubu-Kaapor main collection (Aniz) | LA | resolved: `kaaporsignlanguage-aniz-0634`, 25 Open items | B | https://www.elararchive.org/uncategorized/SO_393aae95-eb4c-473d-92a4-0f5775c8b4d6/ |
| LA-25 | Signbank da Libras API bulk; video licence | LA | exhausted | B | https://api-signbank.levantelab.com.br/api/languages |
| LA-26 | Wikisigns contributor ownership | LA | exhausted | A (footer) | https://www.wikisigns.org/statistics |
| LA-27 | National university repos; GitHub code search | LA | exhausted: GitHub repo searches + DataCite sweeps | — | https://api.datacite.org/dois?query=%22l%C3%ADngua%20de%20sinais%22 |
| LA-28 | SignPuddle entry quality | LA | resolved: parse table (Section 3) | A | https://www.signbank.org/signpuddle2.0/data/spml/sgn129.spml |
| LA-29 | SeñaTalk content | LA | resolved: 14-class keypoints | A | https://zenodo.org/api/records/17479338 |
| LA-30 | LSC50 sign list | LA | resolved: 50 signs (Table 1) | A | https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11655960/fullTextXML |
| LA-31 | Corpus de Libras terms | LA | resolved: research/teaching cession term | B/C | https://corpuslibras.ufsc.br/registrar |
| LA-32 | Libras-UFPel data statement | LA | resolved: unreleased, tiered access | C | https://aclanthology.org/2026.propor-1.112.pdf |
| LA-33 | DamPy / Signatario Digital licence | LA | exhausted: JS-only | C | https://spl.gov.py/dampy/index.html |
| LA-34 | VLibras bundle licence | LA | resolved (partial): gloss list LGPL; bundles unpublished | C (bundles) | https://github.com/spbgovbr-vlibras/vlibras-dictionary-repository |
| LA-35 | Apoema-Libras560 terms | LA | exhausted: restricted, no licence | C | https://zenodo.org/api/records/20421823 |
| LA-36 | V-LIBRASIL conditions page (502) | LA | resolved: archived original terms | B/C | http://web.archive.org/web/20260118094406/https://libras.cin.ufpe.br/pages/conditions-of-use,3 |
| LA-37 | SIGNO-PERU-FER | LA | exhausted: restricted, no licence | C | https://zenodo.org/api/records/22715615 |
| LA-38 | DLSP licence (JS-only) | LA | exhausted | C | https://diccionariolsp.pucp.edu.pe/ |
| LA-39 | Ecuador DOI discrepancy | LA | resolved: v1.0.0 vs v1.0.1 | A | https://zenodo.org/api/records/21627229/versions |
| LA-40 | datos.gob.mx / dados.gov.br | LA | exhausted: Access Denied / key required | — | https://datos.gob.mx/busca/api/3/action/package_search?q=se%C3%B1as |
| LA-41 | TUILSU "Léxico trelsu" | LA | exhausted | C | https://www.tuilsu.edu.uy/ |
| LA-42 | UMCE Chile bilingual dictionary | LA | exhausted: only the mirror PDF is known | C/D | https://bicentenariosantamaria.cl/wp-content/uploads/2023/04/Diccionario_LSCh_A-H.pdf |
| LA-43 | ASH LESHO print dictionary | LA | exhausted | C | https://www.elheraldo.hn/tegucigalpa/diccionario-lengua-senas-honduras-sordos-BQEH1493552 |
| LA-44 | Garay 1990 Panama dictionary | LA | exhausted: print | C | https://glottolog.org/resource/reference/id/319453 |

### Inferences
- The highest-value Tier-C emails after this pass:
  1. UCL Registrar (confirm BY-SA for avatar derivatives).
  2. LSFB asbl (BY-NC-ND vs BY-SA).
  3. Hamburg FDR / EASIER (CC BY metadata vs BY-NC-SA README).
  4. UW PJM Lab (CC BY-SA claim plus the HamNoSys tier).
  5. KKY Plzeň (MC-TRISLAN location).
  6. NU Kazakhstan (FluentSigners-50 licence state).
  7. BU ASLLRP (whether ASL-Phono/Skeleton3D may be redistributed).

### Gaps
- Rows marked "exhausted" mean the API/archive avenue is used up. They are not proof that no resource exists.

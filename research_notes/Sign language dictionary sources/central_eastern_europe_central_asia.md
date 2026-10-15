# Licensed lexical / dictionary sources: Central & Eastern Europe, Balkans, Russia, Caucasus, Central Asia (+ TİD)

Research date: 2026-10-14. Tiers as defined by the caller: **A** = CC BY / BY-SA / CC0 / open dump (derive + redistribute); **B** = NC / research-only; **C** = register / contract / permission; **D** = skip (no stated licence, proprietary, YouTube footage, SpreadTheSign, scraped mirrors).

Method note: licences were checked on the original page where it was reachable (WebFetch, or curl + text grep of the page HTML). Catalogue claims from the Hamburg *Sign Language Dataset Compendium* and the *sign-lang@LREC* data pages are marked as such. The shared web-search budget ran out partway through. After that I used only primary catalogues and repository APIs: Compendium language pages, LREC Anthology language pages, the SignPuddle index plus HEAD/GET of the published SPML dumps (each under 2 MB), the Zenodo records API, the Hugging Face datasets API, and the LINDAT DSpace API. So national-dictionary discovery for some Balkan, Caucasus and Central Asian languages is less thorough than for the rest (see Gaps).

Record field order used below: **language (ISO 639-3) | source | URL | type | size | licence (verbatim) | SPDX | tier | access route | commercial_ok | video_redistrib_ok | approx disk | citation | next action**.

---

## Q1. Per-language candidate sources (national dictionaries, Signbanks, datasets) with verified licences

### Takeaway
Few Tier-A sources exist in this region. They fall into three groups. (1) SignPuddle SignWriting (FSW) dumps with real size: Czech sgn52 at 5,863 entries, Slovene sgn74 at 3,799, Polish sgn19 at 2,144, Russian sgn88 at 1,435 and Albanian sgn82 at 130. (2) CC BY 4.0 / BY-SA-style video datasets: Greek GSL and GSLW, Azerbaijani AzSLD, Russian Slovo and Bukva. (3) Small CC BY 4.0 fingerspelling or landmark sets: Polish, Ukrainian, Kazakh. Most national video dictionaries are explicitly "all rights reserved" (Tier C). These include Dictio CZ/SK/UA, Hallatlan HU, SZJ SI, ANAD AL and EKI EE. The best phonology-coded lexicons need a negotiated licence (Tier C): Polish CDPSL (HamNoSys + handshape + location), Greek POLYTROPON and NOEMA, and Dicta-Sign GSL.

### Cited Findings

#### SignPuddle (SignWriting) puddle IDs and dump sizes (all in-scope countries)
- The SignPuddle 2.0 index lists these puddle IDs. Estonia 109; Latvia 108; Lithuania 107; Poland 19 (Słownik), 38 (Literatura), 39 (Encyklopedie); Czech 52 (Slovník), 36 (Literatura), 37 (Encyklopedie); Slovakia 89; Hungary 122 (Dictionary), 123 (Literature); Slovenia 74 (Slovar), 148 (Besedila), 149 (Enciklopedija); Albania 82; Bulgaria 134; Romania 132, 138, 139; Greece 61; Ukraine 130; Russia 88, 141, 142; Turkey 90. **No puddle exists** for Croatia, Serbia, Bosnia, North Macedonia, Kosovo, Moldova, Cyprus, Belarus, Georgia, Armenia, Azerbaijan, Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan or Mongolia — [SignPuddle 2.0 index](https://www.signbank.org/signpuddle2.0/index.php?ui=1)
- The dumps are published at `https://www.signbank.org/signpuddle2.0/data/spml/sgn{ID}.spml`. All in-scope files returned HTTP 200 on HEAD. Sizes: sgn52 1,499,149 B (Last-Modified 2024-01-13); sgn74 1,028,093 B (2016-03-30); sgn19 613,850 B (2025-10-24); sgn88 319,632 B (2026-07-18); sgn82 38,759 B; sgn122 20,121 B; sgn132 13,580 B; sgn130 8,624 B; sgn89 6,173 B; sgn61 6,003 B; sgn134 2,872 B; sgn90 1,527 B; sgn108 829 B; sgn107 666 B; sgn109 629 B — [sgn52.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn52.spml), [sgn74.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn74.spml), [sgn19.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn19.spml), [sgn88.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn88.spml)
- Entry counts come from my parse of the downloaded SPML, 2026-10-14. "FSW" means the entry holds a Formal SignWriting sign string. Counts by puddle:

  | Puddle | Entries | With FSW | Contributors | Years active |
  |---|---|---|---|---|
  | sgn52 CZ | 5,863 | 5,768 | 121 | 2007–2024 |
  | sgn74 SI | 3,799 | 3,786 | 126 | 2010–2016 |
  | sgn19 PL | 2,144 | 2,134 | 28 | 2007–2025 |
  | sgn88 RU | 1,435 | 1,432 | 47 | 2009–2026 |
  | sgn36 CZ-lit | 176 | 27 | | |
  | sgn82 AL | 130 | 128 | | 2015–2017 |
  | sgn37 CZ-enc | 73 | 10 | | |
  | sgn122 HU | 67 | 67 | | 2009 |
  | sgn132 RO | 38 | 36 | | |
  | sgn130 UA | 37 | 37 | | |
  | sgn61 GR | 26 | 26 | | |
  | sgn89 SK | 25 | 9 | | |
  | sgn148 SI-texts | 16 | 1 | | |
  | sgn90 TR | 4 | 3 | | |
  | sgn134 BG | 3 | 3 | | |

  sgn107 LT, sgn108 LV, sgn109 EE and sgn138/139/141/142/149 have 0–1 empty entries. The sgn130 UA entries are fingerspelling letters (А, Б, В…) and sgn61 GR entries are Greek letter names. The sgn37 CZ entries include IMoTeSP terminology. Many entries carry a `<src>` attribution field (e.g. "E.S. - PGNS" in sgn74) — [SignPuddle SPML dumps](https://www.signbank.org/signpuddle2.0/data/spml/sgn130.spml)
- **SignPuddle licence could not be verified on any page I fetched.** signbank.org has only the notice "SignPuddle and SignText are trademarks belonging to Stephen Slevinski." The SignPuddle landing page and the puddle-88 page have no licence statement. None of the in-scope SPML files contains an embedded licence string; I scanned the full text, and the only hits were glosses such as "licencjat" and "licenca". The caller's "CC BY-SA 3.0" is therefore **caller-asserted / unverified** here — [signbank.org](https://www.signbank.org/), [SignPuddle Online](https://www.signbank.org/signpuddle/)
- The sutton-signwriting GitHub org licenses its spec/doc repositories CC-BY-4.0 and its code MIT. No repository there is described as holding SignPuddle dictionary exports — [sutton-signwriting GitHub](https://github.com/sutton-signwriting)

#### Estonian SL (eso)
- **EKI "Eesti viipekeele sõnastik"** | https://arhiiv.eki.ee/dict/viipekeel/ (eki.ee/dict/viipekeel/ 302-redirects there) | lexical-db + isolated video | "umbes 5000 artiklit ja 6700 tähendustega seotud videofaili"; search by handshape, location and movement ("vali viipe käekuju, viipe moodustamise koht ja liigutus") | licence on site: only "© Eesti Keele Instituut" | completed 2014; ESL part led by Liivi Hollmann — [EKI dictionary](https://arhiiv.eki.ee/dict/viipekeel/)
- **META-SHARE record for the same dictionary** gives these terms: licence "CLARIN ACA"; availability "Available - Restricted Use"; restrictions "Academic - Non Commercial Use"; distribution "Accessible Through Interface"; DOI https://doi.org/10.15155/3-00-0000-0000-0000-0633AL; "over 4000 entry words"; contact Tiina Laansalu (EKI). The record has a download endpoint → **SPDX LicenseRef-CLARIN-ACA-NC; Tier B; commercial_ok no; video_redistrib_ok no**. Next action: request the CLARIN ACA download for research and fitting. Use it alongside the project's existing EVK "video is the corpus" demo, and do not redistribute the clips — [META-SHARE record](https://metashare.ut.ee/repository/browse/the-online-dictionary-of-the-estonian-sign-language-estonian/1520ec3fa0d411eebb4773db10791bcfacf23d7c5141477199369c4a4e5ab13e/)
- The Hamburg Compendium lists only SpreadTheSign (Tier D) for EVK — [Compendium eso](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/eso.html)
- SignPuddle sgn109 is empty (0 entries). **Dead end** — [sgn109.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn109.spml)
- IPSL (iconicity-patterns database) covers Estonian, Latvian, Lithuanian, Czech, Polish, Russian, Romanian, Greek and Turkish, among others. No licence or video source is stated → Tier D — [LREC data: IPSL](https://www.sign-lang.uni-hamburg.de/lrec/data/ipsl.html)

#### Latvian SL (lsl)
- The Compendium lists only SpreadTheSign (D) — [Compendium lsl](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/lsl.html)
- SignPuddle sgn108 has 1 empty entry. **Dead end** — [sgn108.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn108.spml)
- No online LZV dictionary turned up in a Latvian-language search — [search result context: vestnesis.lv etc.](https://www.vestnesis.lv/ta/id/14297)

#### Lithuanian SL (lls)
- The Compendium lists only SpreadTheSign (D) — [Compendium lls](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/lls.html)
- A 5-volume print dictionary (1998–2003, about 3,000 lexical items) exists, linked to the Vilnius College Gestotyros centras. No online version was found — [VLE: lietuvių gestų kalba](https://www.vle.lt/straipsnis/lietuviu-gestu-kalba/)
- SignPuddle sgn107 has 0 entries. **Dead end** — [sgn107.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn107.spml)

#### Polish SL / PJM (pso)
- **Korpus PJM (Univ. Warsaw)** | https://www.korpuspjm.uw.edu.pl/en | continuous-video + ELAN | "565 hours recorded, 687971 tokens and 15384 types annotated" | the Compendium gives licence "CC BY-SA 4.0" with "Open access to a part of the recordings with video, annotation and translation in ELAN format" and "Restricted access for researchers to further data requires individual license agreement" — [Compendium: PJM Corpus](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/pjmcorpus.html)
  - **This conflicts with the original site.** The site shows only "Copyright © 2020 Joanna Wójcicka, Anna Kuder, Piotr Mostowski, Paweł Rutkowski" and "We encourage you to use the recordings collected by our team for scientific and educational purposes." It states no CC licence. ".eaf" downloads require a registration form that the editorial team approves (j.filipczak@uw.edu.pl) — [Korpus PJM home](https://www.korpuspjm.uw.edu.pl/en); [Korpus PJM how-to-use](https://www.korpuspjm.uw.edu.pl/en/pages/how-to-use.html)
  - → **SPDX: CC-BY-SA-4.0 per Compendium, unverified on site; treat as Tier C** until UW confirms. Next action: email the editorial team asking whether the Open Repository is CC BY-SA 4.0, and request .eaf access.
- **CDPSL — Corpus-based Dictionary of PJM (Słownik PJM)** | https://www.slownikpjm.uw.edu.pl/en | lexical-db + phonology + notation + isolated video | "3476 signs with definitions for 6464 meanings" | linguistic info: HamNoSys, "handshape, localization, number of hands" | licence: "information not available" | access: "Public access via browsable homepage" — [Compendium: CDPSL](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/cdpsl.html)
  - On the site itself there is no licence or terms text. The page has a HamNoSys help link, 50 handshape options (based on PJM fingerspelling, with numeric thumb/finger suffixes) and 30 localization options. There is no download or API. ISBN 978-83-64111-49-5 — [Słownik PJM](https://www.slownikpjm.uw.edu.pl/en)
  - → **SPDX NOASSERTION; Tier C (permission).** It is the single most valuable phonology-coded lexicon in the region for SignDesc (HamNoSys plus handshape and location codes per entry). Next action: ask the UW PJM Lab (Rutkowski) for a licence to the HamNoSys and parameter fields.
- **SignPuddle sgn19 "Słownik PL"** | 2,144 entries (2,134 FSW), 614 KB | notation | licence unverified (see above) | Tier A if CC BY-SA holds | next: ingest as FSW → SignDesc seed — [sgn19.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn19.spml)
- **Multilingual Sign Languages Wordnet (EASIER)** | https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/ | lexical-db (sign↔synset links) for BSL, DGS, DSGS, **GSL (gss)**, LSF, NGT, **PJM (pso)** and STS | 24,367 links, 14,028 signs, 16,534 synsets overall | licence on the LREC data page: "CC BY 4.0" (the wordnet pages themselves show no licence statement) | files: sign_data.csv, custom_synsets.csv, synset_links_accepted.csv, and per-language `sign_wordnet_{id|gloss|video}_{pso|gss}.tab`, where the video file holds only URLs into the source resources | SPDX CC-BY-4.0 | Tier A for the link data only; the linked videos keep their own (mostly non-open) terms | disk: small (CSV) | DOI 10.25592/dgs.wn — [LREC data page](https://www.sign-lang.uni-hamburg.de/lrec/data/multilingualsignlanguageswordnet.html); [Wordnet download page](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/download.html)
- **PSL Alphabet Landmark Dataset** | Zenodo 10.5281/zenodo.19538109 | MediaPipe hand landmarks for fingerspelling (21 landmarks × xyz, 30-frame sequences, multiple signers; no raw video) | dataset.csv 135.8 MB | licence "cc-by-4.0", open | SPDX CC-BY-4.0 | Tier A | commercial yes | no video | Machacka & Zatwarnicka (2026) | next: optional fingerspelling handshape priors — [Zenodo API record](https://zenodo.org/api/records/19538109)
- The LREC Anthology lists for PJM: Korpus PJM, CDPSL, IPSL, Spreadthesign, and the Multilingual SL Wordnet — [LREC language: pso](https://www.sign-lang.uni-hamburg.de/lrec/language/pso.html)
- Hugging Face: "polish sign" returned 0 datasets (API query, 2026-10-14) — [HF datasets API](https://huggingface.co/api/datasets?search=polish%20sign)

#### Czech SL / ČZJ (cse)
- **SignPuddle sgn52 "Slovník CZ"** | 5,863 entries (5,768 FSW), 121 contributors, 1.5 MB; plus sgn36 (176 literature) and sgn37 (73 encyclopedia/terminology) | notation | Tier A (licence caller-asserted) | next: **first ingest for CSE** — [sgn52.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn52.spml)
- **Dictio (Masaryk Univ.)** | https://www.dictio.info/ | lexical-db + isolated video | the Compendium gives entries ČZJ 12,514; SPJ 4,809; ÖGS 3,436; ASL 127; IS 369; **UkSL 71** | licence: "information not available"; access "Public access via browsable homepage, more content requires confirmed registration" — [Compendium: Dictio](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictio.html)
  - The site footer reads "DICTIO v 7.2 (63c8715c) © 2007-2026 Masaryk University / All rights reserved". Entries total "160 180 Translations: 61 682". Search filters cover handshape, location and movement; there is no export or API → **SPDX LicenseRef-AllRightsReserved; Tier C** — [dictio.info](https://www.dictio.info/)
- **MC-TRISLAN (Univ. West Bohemia, Plzeň)** | mocap + video | 18.0 h motion and video, 6 participants, numerical data in **TRC** format | licence "Creative Commons Attribution Non Commercial 4.0 International (CC-BY-NC-4.0)"; access rights "Licensed without a fee for specific uses" | download URL http://www.kky.zcu.cz/en/research-fields/motion-capture-sign-language/download/ (**404 when fetched 2026-10-14**) | contact zelezny@kky.zcu.cz; curator zdkrnoul@kky.zcu.cz — [ELG metadata record 18324](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/18324/); [LREC data: MC-TRISLAN](https://www.sign-lang.uni-hamburg.de/lrec/data/mctrislan.html)
  - → **SPDX CC-BY-NC-4.0; Tier B; commercial no; derived clips may be redistributed only non-commercially with attribution.** This is the only real sign-language mocap found in the region. Next action: email Krňoul/Železný for the current download location.
- **MoCap dataset of CSE (2020, weather forecast)** — the LREC data page states no licence, size or access → Tier C — [LREC data](https://www.sign-lang.uni-hamburg.de/lrec/data/mocapdatasetofcse.html)
- **CSE MoCap Dictionary Corpus (2016)** — no licence or access stated → Tier C — [LREC data](https://www.sign-lang.uni-hamburg.de/lrec/data/csemocapdictionarycorpus.html)
- **UWB-07-SLR-P (ELRA-S0286)** | isolated video, "378 signs", "5 repetitions … from 3 different views", "21000 avi files", "20 GB" | licence "Non Commercial Use - ELRA END USER" / "Commercial Use - ELRA VAR"; prices €225/€325 (NC, member/non-member) and €525/€825 (commercial) | Tier C (paid contract) — [ELRA catalogue S0286](https://catalog.elra.info/en-us/repository/browse/ELRA-S0286/)
- **CZJ domain-specific lexicon** | 330 signs, HamNoSys, train-travel domain | "Not online available"; licence n/a → Tier C — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/czechsldomainspecificlexicon.html)
- **LINDAT/CLARIAH-CZ: no Czech SL dataset.** The DSpace API query "sign language" returned 26 hits: YouTube-ASL keypoints, ECHO, CNGT, VISIBASE and UD releases, none of them ČZJ. "znakový jazyk" and "posunkový" each returned 0 — [LINDAT API query](https://lindat.mff.cuni.cz/repository/server/api/discover/search/objects?query=%22sign%20language%22)

#### Slovak SL / SPJ (svk)
- Dictio SPJ has 4,809 entries (Tier C, all rights reserved, as above) — [Compendium: Dictio](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictio.html)
- SignPuddle sgn89 has 25 entries, only 9 with FSW (2021–2026) → negligible — [sgn89.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn89.spml)
- posunky.sk (a Trnava Univ. dictionary, 2021 volume 1, per a publication list) returned HTTP 466 on HEAD. **Licence unverified** — [Trnava publication list](https://pdf.truni.sk/sites/default/files/katedry/ksj/pracovnici/vvuc/publikacna-cinnost-vojtechovska_0.pdf)

#### Hungarian SL (hsh)
- **Hallatlan Dictionary** | https://www.hallatlan.hu/c/jelek/ | isolated video (two angles) + handshape picture | "approximately 1500 signs" — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/hallatlandictionary.html)
  - The site footer reads: "© 2026 Hallatlan Alapítvány. Minden jog fenntartva. A Hallatlan jelnyelvi videóinak másolása és újraközlése előzetes írásbeli engedély nélkül tilos." (Copying or republishing the sign videos without prior written permission is prohibited.) The copyright page also forbids taking content "into other services or databases". → **SPDX LicenseRef-AllRightsReserved; Tier C** — [hallatlan.hu](https://www.hallatlan.hu/c/jelek/); [Szerzői jogok](https://www.hallatlan.hu/szerzoi-jogok/)
- **HSL Corpus (SIGNificant Chance)** | "1750 hours recorded, 209 types annotated" | "No public access"; licence n/a → Tier C/D — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/hslcorpus.html)
- SignPuddle sgn122 has 67 FSW entries (2009) → tiny Tier A — [sgn122.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn122.spml)
- JEL-SZÓ-TÁR, a children's/learners' bilingual dictionary at multilinguanet.hu, is mentioned in an MTA report. The host did not respond to HEAD; **unverified** — [MTA report (PDF)](https://mta.hu/data/dokumentumok/Tantargy-pedagogiai%20program/Z%C3%A1r%C3%B3besz%C3%A1mol%C3%B3k/Bartha_Csilla_zarobeszamolo.pdf)

#### Slovene SL / SZJ (no ISO 639-3 code of its own)
- **SignPuddle sgn74 "Slovar Slovenia"** | 3,799 entries (3,786 FSW), 126 contributors, 2010–2016, 1.0 MB | sources like "E.S. - PGNS" in `<src>` | Tier A (licence caller-asserted) | next: **first ingest for SZJ** — [sgn74.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn74.spml)
- **Slovar SZJ (ZDGNS)** | https://www.szj.si/ | isolated video + definitions | the site footer reads "2026 © ZDGNS. Vse pravice pridržane." (all rights reserved) → **Tier C** — [szj.si](https://www.szj.si/); [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/slovarszj.html)
- **SIGNOR corpus** | "40 hours recorded, 30335 tokens and 1976 types annotated" | licence n/a; access "temporarily unavailable" | http://lojze.lugos.si/signor/en.html → Tier C — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/signorcorpus.html)
- **CLARIN.SI: no SZJ record found.** A web search surfaced none, and the repository's discover endpoint returned HTTP 429 / a 307-byte stub to my queries → **unverified gap** — [CLARIN.SI repository](https://www.clarin.si/repository/xmlui/handle/11356/1024/recent-submissions?offset=525)

#### Croatian SL / HZJ (csq)
- The Compendium lists only SpreadTheSign (D). No Signbank instance was found. There is no SignPuddle puddle. The LREC Anthology language page `csq.html` returns 404 — [Compendium csq](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/csq.html)
- Zagreb research exists: phonological parameters in HZJ (CROSBI 466968), and an evaluation model for online SL dictionaries that "calls for a corpus as a basis for a dictionary". No dataset is released — [CROSBI 466968](https://www.bib.irb.hr/466968); [CROSBI 910276](https://www.bib.irb.hr/910276)
- "Moja prva znakovnica" is a crowdfunded first video dictionary for families of deaf children; its availability and licence are unknown — [dnevnik.hr](https://dnevnik.hr/vijesti/hrvatska/pokrenuta-akcija-za-skupljanje-sredstava-za-izradu-moje-prve-znakovnice---870275.html)
- → **Nothing usable.**

#### Serbian (ysl), Bosnian, Macedonian, Kosovar SL
- None of these appear in the Compendium language index, the LREC Anthology language index or the SignPuddle index. Zenodo returned 0 hits for "serbian/macedonian/bosnian sign language" — [LREC language index](https://www.sign-lang.uni-hamburg.de/lrec/language/index.html); [Compendium language index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html); [Zenodo API](https://zenodo.org/api/records?q=%22serbian%20sign%20language%22)
- The Serbian-language search found papers (lexical-semantic relations in SZJ; Dimić & Polovina 2010) but no online dictionary — [eNauka](https://enauka.gov.rs/handle/123456789/257867?locale=en)
- → **Nothing usable** for ysl, Bosnian, Macedonian or Kosovar. Kosovo was not separately searchable after the search budget ran out.

#### Albanian SL (sqk)
- **Albanian Sign Language Dictionary (ANAD)** | https://gjshsh.al | isolated video + parameter pictures, glosses and example sentences | "1040 signs" | licence: "Download and copying prohibited; individual licence agreement may be possible" — [Compendium: AlbSL dict](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/albsldict.html)
  - The site footer reads "© 2026 Shoqata Kombëtare Shqiptare e Njerëzve Që Nuk Dëgjojnë (ANAD) © Për simbolet e lëvizjeve dhe format e duarve: Shoqata Finlandeze e Njerëzve që nuk Dëgjojnë (FAD)", so the handshape and movement symbols are © the Finnish Association of the Deaf → **Tier C** — [gjshsh.al](https://gjshsh.al/)
- **SignPuddle sgn82** | 130 entries (128 FSW), 2015–2017 | Tier A (caller-asserted) | the only open option — [sgn82.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn82.spml)

#### Bulgarian SL (bqn)
- The Compendium lists only SpreadTheSign (D) — [Compendium bqn](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/bqn.html)
- A 2017 print "Речник на българския жестов език" has 5,840 sign units. A web dictionary is only a conceptual model / demo (Yosifova 2025) — [Yosifova 2025 (PDF)](https://www.abcdar.com/magazine/XXXIIA/Dzl_2025_br32A_05_Maya_Josifova_Model_web_basiran_rechnik_na_bg_jestov_ezik.pdf)
- SignPuddle sgn134 has 3 entries → **nothing usable** — [sgn134.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn134.spml)

#### Romanian SL / LSR (rms); Moldovan
- dlmg.ro and ailg.ro (2018 article: about 6,000 signs and expressions on video; the dlmgLsr app is by ANIALMG + Fundația Orange). The dlmg.ro homepage HTML contained no licence or copyright string → **Tier D/C** — [playtech.ro](https://playtech.ro/2018/aplicatie-limbaj-mimico-gestual-dlmgslr/)
- SignPuddle sgn132 has 38 entries (36 FSW); sgn138/139 are empty — [sgn132.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn132.spml)
- The Compendium lists only SpreadTheSign — [Compendium rms](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/rms.html)
- Moldova: no entry in any index → **nothing usable** for either rms (beyond 36 FSW signs) or Moldovan.

#### Greek SL (gss)
- **GSL Dataset (Adaloglou et al.)** | Zenodo 10.5281/zenodo.3941811 → latest version 4756317 (adds GSL_split.zip) | continuous RGB+D with gloss annotation; "10,290 sentence instances, 40,785 gloss instances, 310 unique glosses", 7 signers, RealSense D435, 30 fps | licence "Creative Commons Attribution 4.0 International" (license id cc-by-4.0 on both versions), Open | 134.8 GB total, of which RGB zips are about 40 GB and depth zips about 95 GB; supplementary.zip is 301.5 kB | SPDX CC-BY-4.0 | **Tier A; commercial yes; video redistrib yes (attribution; personality rights not covered by CC)** | cite "A Comprehensive Study on Deep Learning-based Methods for Sign Language Recognition" (IEEE TMM; arXiv:2007.12530) | next: pull supplementary.zip and GSL_split.zip first, then RGB-only zips for gloss-segment fitting — [Zenodo 3941811](https://zenodo.org/record/3941811); [Zenodo versions API](https://zenodo.org/api/records/3941811/versions?size=10)
- **GSLW — Greek SL in the Wild** | Zenodo 10.5281/zenodo.8047231 | 1,736 smartphone test videos, gloss- and sentence-level annotation | "Creative Commons Attribution 4.0 International", Open | 23.0 GB | Tier A — [Zenodo 8047231](https://zenodo.org/records/8047231)
- **SL-ReDu GSL corpus (Univ. Thessaly)** | isolated subset: 369 signs, 22,632 videos, 21 signers, 25 h 15 min (RGB+D); plus continuous (799 sentences) and fingerspelling | direct HTTP directory: isolated_GSL_corpus.zip **8.4 GB**, isolated_GSL_corpus.csv 1.1 MB, splits.zip 1.0 MB | **no licence stated**, only "Video data files and their annotations are available for download" plus a citation request: Papadimitriou et al., ICASSPW-SLTAT 2023, doi:10.1109/ICASSPW59220.2023.10193306 | SPDX NOASSERTION → **Tier C** (email aipapadimitriou@uth.gr / gpotam@ieee.org for a licence). It is the best isolated-citation-form GSL set if they license it — [SL-ReDu corpus page](https://sl-redu.e-ce.uth.gr/corpus); [isolated dir listing](https://sl-redu.e-ce.uth.gr/sl-redu_datasets/isolated_GSL_corpus/)
- **POLYTROPON Parallel Corpus (ILSP)** | 3,600 utterances × 3 repetitions, 1 signer; 3,500 ELAN files | site: "publicly available under CC-BY-NC-SA" (no version given); the Compendium says "CC BY-NC-SA 4.0"; "Access to video and ELAN files requires registration" | SPDX CC-BY-NC-SA-4.0 (version per Compendium) | **Tier B** — [ILSP PPC page](https://sign.ilsp.gr/signilsp-site/index.php/en/ppc/); [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/polytroponcor.html)
- **POLYTROPON Lexicon** | "8616 signs"; "exhaustive coding of lemmas for manual and non-manual features, ontology scheme" | "Individual license agreement may be possible"; "Not available online" → **Tier C**. It is phonology gold — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/polytroponlex.html)
- **NOEMA (ILSP)** | "3000 signs", HamNoSys | "Restricted access requires individual license agreement" → Tier C — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/noema.html)
- **Dicta-Sign Lexicon / Corpus (GSL part)** | about 1,000 signs per language with HamNoSys; corpus 25 h across 4 languages | "Individual license agreement for researchers" → Tier C. Dicta-Sign-GSL-v2 (5.5 h, 16 participants) has licence n/a — [Compendium: Dicta-Sign Lexicon](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictasignlex.html); [Compendium: Dicta-Sign Corpus](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dictasign.html); [Compendium: GSL-v2](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dictasigngslv2.html)
- Multilingual SL Wordnet includes gss TAB files (CC BY 4.0, as above) — [Wordnet download](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/download.html)
- Zenodo 8073770, "Sign Language Narrations by Virtual Humans in GSL", is CC BY 4.0 and 618 MB, but it is avatar output, not citation forms → low value — [Zenodo API 8073770](https://zenodo.org/api/records/8073770)
- SignPuddle sgn61 has 26 entries (letter names) — [sgn61.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn61.spml)
- Hugging Face: `dkourem/Multimodal_Greek_Sign_Language_and_Lip_Reading` (license tag "other") and `luciayen/GSL-Health-Sentences-64` (no licence) → Tier D — [HF API dkourem](https://huggingface.co/api/datasets/dkourem/Multimodal_Greek_Sign_Language_and_Lip_Reading)

#### Cypriot SL (cys)
- The Compendium lists only SpreadTheSign → **nothing usable** — [Compendium cypriot](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/cypriotsignlanguage.html)

#### Ukrainian SL (ukl)
- **Ukrainian Dactyls corpus** | Zenodo 10.5281/zenodo.17618406 | fingerspelling, 33 letter classes; train 1,951 / val 528 / test 528 videos (val/test include mirrored augmentation) plus frame data | "cc-by-4.0", open | 9.67 GB | Tier A (fingerspelling only) | Krak, Kondratiuk, Kuznetsov, Yefremov, Zadorozhnyi (2025) — [Zenodo API 17618406](https://zenodo.org/api/records/17618406)
- **UkrSL (UNLP 2026)** | 1,456 annotated clips (about 2 h) from six Suspilne broadcast videos | no dataset URL or licence; the ACL Anthology CC BY 4.0 covers the paper only → broadcast footage, **Tier D** — [ACL Anthology 2026.unlp-1.6](https://aclanthology.org/2026.unlp-1.6/)
- **"Our stories" UkSL conversations (Univ. Cologne DCH)** | 6 dialogues, about 3 h, 7 signers, .mts video, ELAN planned | archival package 18 GB | no licence stated → Tier C — [DCH record](https://dch.phil-fak.uni-koeln.de/bestaende/datenarchivierung/ukrainian-sign-language); [Cologne project](https://ifl.phil-fak.uni-koeln.de/allgemeine-sprachwissenschaft/personen/dr-anastasia-bauer/projekte/ukrainian-sign-language-corpus)
- Dictio УЖМ has 71 entries (Tier C). SignPuddle sgn130 has 37 FSW entries, all alphabet letters — [Compendium: Dictio](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictio.html); [sgn130.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn130.spml)
- A 2026 KPI paper notes "a lack of publicly available datasets" for USL — [KPI Science News](https://scinews.kpi.ua/article/view/352330)
- → No Tier-A lexical source beyond fingerspelling.

#### Russian SL (rsl)
- **Slovo (SberDevices / SaluteDevices)** | https://github.com/hukenovs/slovo (Kaggle: kapitanov/slovo) | isolated video | 1,000 classes × 20 = 20,400 videos, 194 signers, about 9.2 h | trimmed about 16 GB; 360p about 13 GB; untrimmed about 105 GB; MediaPipe hand landmarks JSON about 1.2 GB | README: "This work is licensed under a variant of Creative Commons Attribution-ShareAlike 4.0 International License." — [Slovo GitHub](https://github.com/hukenovs/slovo)
  - Licence PDF (`license/en_us.pdf`, read in full). Title: "Public license with attribution and conditions reserved". Footnote: "This license is not a Creative Commons license. The text of this license is a reworking of a Creative Commons Corporation (Attribution-ShareAlike 4.0) license." Grants: "reproducing and making available the Licensed Material in whole or in part; and … creation, reproduction and provision of the Adapted Material". ShareAlike: "The Adapted Material License that you apply must be a license with the same License Elements, this version or a later version, or a BY-SA-compatible license." It has **no non-commercial clause**. Database rights are defined under the Civil Code of the Russian Federation. Caveat: "Personal non-property rights, such as … rights of publicity and portrayal, privacy … are not granted under this Public License" — [Slovo licence PDF](https://raw.githubusercontent.com/hukenovs/slovo/main/license/en_us.pdf)
  - → **SPDX LicenseRef-SaluteDevices-BY-SA-4.0-variant (≈CC-BY-SA-4.0); Tier A (with caveat); commercial_ok yes; video_redistrib_ok yes under SA, but signer portrayal rights are not licensed.** Cite Kapitanov, Kvanchiani, Nagaev, Petrova, "Slovo: Russian Sign Language Dataset", ICVS 2023, pp. 63–73. Next: **first RSL ingest**. Use the 1.2 GB MediaPipe JSON to start (no faces), then the 360p video.
- **Bukva (RSL fingerspelling alphabet)** | https://github.com/ai-forever/bukva | 3,757 videos (3,097 train / 660 test), about 4 h, about 27 GB | the same "variant of Creative Commons Attribution-ShareAlike 4.0" licence, with license/en_us.pdf | Tier A (fingerspelling) — [Bukva GitHub](https://github.com/ai-forever/bukva)
- **Logos (SberAI, EMNLP 2025)** | 199,668 videos, 2,863 glosses in 2,004 VSSign classes, 381 signers, 221.4 h; includes and re-annotates Slovo | README: "The dataset is released to universities and research institutes for academic research purposes only." Obtained by emailing vision_rnd_ml@sberbank.ru. The repo's Apache-2.0 licence covers the code → **Tier B/C** — [Logos GitHub](https://github.com/ai-forever/logos); [arXiv 2505.10481](https://arxiv.org/html/2505.10481v2)
- **RSL Corpus (NSTU, Burkova)** | 240 videotexts, 5 h 28 min | Compendium: licence "RSL Corpus Licence", "Restricted access requires confirmed registration" | the site currently says access for registered users is closed indefinitely and new registration is suspended ("на неопределенное время закрыт доступ … приостановлена регистрация") → **Tier C, currently unavailable** — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/rslcorpus.html); [rsl.nstu.ru](http://rsl.nstu.ru/); [rslcorpus.nstu.ru](http://rslcorpus.nstu.ru/)
- **RSL kinematics, Moscow subcorpus (Kimmelman 2026)** | Zenodo 10.5281/zenodo.22347680 | manual and non-manual kinematics data plus R code for narratives | RSL_kinematics.zip 107 MB | "cc-by-4.0", open | Tier A (derived continuous, not lexical) — [Zenodo API 22347680](https://zenodo.org/api/records/22347680)
- **Database of Lexical Variation in RSL (Garage Museum)** | >19,000 videos | "База данных открыта для использования всем желающим" (open to all) plus a required citation; footer "© Музей современного искусства «Гараж» 2026"; no download or export; annotations by email (openmuseum@garagemca.org). The Compendium names a "Database of Lexical Variation in Russian Sign Language Licence" → **Tier C** — [rsl-research-explore](https://rsl-research-explore.garagemca.org/); [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/rsllexvar.html)
- **TheRuSLan (SPIIRAS, LREC 2020)** | Kinect 2.0 FullHD plus depth; supermarket domain | no licence or access route on the LREC data page → Tier C — [LREC data](https://www.sign-lang.uni-hamburg.de/lrec/data/theruslan.html)
- **RuSLED dictionary and mocap (2010)** | no licence or access stated → Tier C/D — [LREC data: RuSLED mocap](https://www.sign-lang.uni-hamburg.de/lrec/data/rusledmotioncapturedata.html); [RuSLED dictionary](https://www.sign-lang.uni-hamburg.de/lrec/data/rusleddictionary.html)
- **SignPuddle sgn88 "Dictionary Russia"** | 1,435 entries (1,432 FSW), 47 contributors, 2009–2026, 320 KB | Tier A (caller-asserted) — [sgn88.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn88.spml)
- Hugging Face mirrors and derivatives of Slovo carry no licence tag: `34data/slovo`, `karinversan/slovo-full-landmarks`, `zavman/rsl-top100-slovo` → Tier D (use upstream). `Arseniy-Polyakov/parallel_corpus_russian_rsl_glosses` is tagged **MIT**, but it is a text Russian↔RSL-gloss corpus, not lexical video — [HF API slovo-full-landmarks](https://huggingface.co/api/datasets/karinversan/slovo-full-landmarks); [HF API rsl glosses](https://huggingface.co/api/datasets/Arseniy-Polyakov/parallel_corpus_russian_rsl_glosses)
- Surdoserver was unreachable and is not in any catalogue → D.

#### Belarusian SL
- The Compendium lists only SpreadTheSign → **nothing usable** — [Compendium belarusian](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/belarusiansignlanguage.html)

#### Georgian SL
- **SignWiki Georgia** | https://ge.signwiki.org | lexical (Georgian keyword, category) with videos embedded from **YouTube** (Main Page items are `watch?v=…` links) | Compendium: "8296 entries", licence "information not available". The MediaWiki API reports `rightsinfo: {'url': '', 'text': ''}` (no licence configured) and 8,463 articles. The About and General_disclaimer pages are empty → **SPDX NOASSERTION; Tier D** (YouTube, no licence); C only if the Georgian deaf union and FAD grant permission — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/signwikigeorgia.html); [SignWiki Georgia API siteinfo](https://ge.signwiki.org/api.php?action=query&meta=siteinfo&siprop=general%7Cstatistics%7Crightsinfo&format=json); [Main Page](https://ge.signwiki.org/index.php/Main_Page)

#### Armenian SL (aen)
- No entry in the Compendium, LREC Anthology or SignPuddle indices. Zenodo "armenian sign language" returned 0; HF "armenian sign" returned 0 → **nothing usable** — [Zenodo API](https://zenodo.org/api/records?q=%22armenian%20sign%20language%22)

#### Azerbaijani SL
- **AzSLD (ADA University)** | Zenodo concept 10.5281/zenodo.13627300; record 13627301 | fingerspelling (10,864 static images + 3,587 dynamic videos), word-level (100 and 200 classes) and sentences (500), about 30,000 videos, 65 h | licence field: "Creative Commons Attribution 4.0 International", Open. Paper: "AzSLD is made available under the Creative Commons Attribution 4.0 International License on Zenodo repository." It also says all participants "provided informed consent for collecting, publishing, and using the data." | v4 files: AzSLD_Words_100.zip 1.1 GB, **AzSLD_Words_200.zip 1.4 GB**, AzSLD_Fingerspelling.zip 552.8 MB, AzSLD_Sentences.zip 43.8 GB (46.9 GB total; record 13627301 shows a single AzSLD.zip of 45.5 GB) | SPDX CC-BY-4.0 | **Tier A; commercial yes; video redistrib yes** | Alishzade & Hasanov, arXiv:2411.12865 | next: **first ingest = Words_200 (1.4 GB)** — [Zenodo concept record](https://zenodo.org/doi/10.5281/zenodo.13627300); [Zenodo API 13627301](https://zenodo.org/api/records/13627301); [arXiv 2411.12865](https://arxiv.org/html/2411.12865v2)

#### Kazakh-Russian SL (K-RSL) / Kazakh SL
- **FluentSigners-50** | 173 sentences × 50 signers = 43,250 videos (continuous) on Google Drive, plus CSV gloss and Russian annotations | the project page states no licence, only "Please cite …". The Zenodo record 6043739 is "Restricted" with no licence field → **SPDX NOASSERTION; Tier D as-is / C on request** — [FluentSigners-50 page](https://krslproject.github.io/FluentSigners-50/); [Zenodo 6043739](https://zenodo.org/record/6043739)
- **KRSL20** | 20 signs, 5,200 isolated videos (cut from sentences), with OpenPose hand and face keypoints on Google Drive | no licence → Tier C/D — [KRSL20 page](https://krslproject.github.io/krsl20/)
- **KRSL-OnlineSchool** | 890 h of interpreted school broadcasts, >250 GB, about 300 h glossed | no licence; broadcast-derived → Tier D — [KRSL-OnlineSchool](https://krslproject.github.io/online-school/)
- **QazSL fingerspelling** | Zenodo 10.5281/zenodo.22830162 | ksl_dataset_png.zip 110 MB | "cc-by-4.0", open | Tier A (fingerspelling) | Beisov, Jotsov, Kerimbayev (2026) — [Zenodo API 22830162](https://zenodo.org/api/records/22830162)
- The LREC Anthology K-RSL page lists FluentSigners-50, KRSL20, KRSL-OnlineSchool and non-manuals-2020 — [LREC language: K-RSL](https://www.sign-lang.uni-hamburg.de/lrec/language/kazakhrussiansignlanguage.html)

#### Uzbek, Kyrgyz, Tajik, Turkmen SL
- No index entries anywhere. Zenodo "uzbek sign language" returned 6 hits, but they are papers deposited as "dataset" (e.g. "Research on terminology issues in Uzbek Sign Language"), not sign data. Kyrgyz, Tajik and Turkmen had no sign-specific hits → **nothing usable** — [Zenodo API 19691687](https://zenodo.org/api/records/19691687)

#### Mongolian SL (msr) (brief; covered elsewhere)
- Not in the Compendium, LREC or SignPuddle indices. Zenodo "mongolian sign language" returned 0 → nothing found in this pass — [Zenodo API](https://zenodo.org/api/records?q=%22mongolian%20sign%20language%22)

#### Turkish SL / TİD (tsm)
- **AUTSL (Ankara Univ.)** | 226 signs, 38,336 isolated samples, 43 signers; RGB, depth and 25-joint skeleton (Kinect v2), 512×512 | "AUTSL dataset is created and released for academic and research purposes only." "Commercial use of the dataset is not allowed." Access via ChaLearn: "All files are encrypted!" with keys "provided on Codalab after registration"; "By downloading the data, you agree with the Terms and Conditions of the Challenge" → **SPDX LicenseRef-AUTSL-research-only; Tier B** | arXiv:2008.00932 — [AU CVML datasets](https://cvml.ankara.edu.tr/datasets/); [ChaLearn AUTSL](https://chalearnlap.cvc.uab.cat/dataset/40/description/); [LREC data: AUTSL](https://www.sign-lang.uni-hamburg.de/lrec/data/autsl.html)
  - The HF mirror `aipieces/AUTSL` has no licence tag → Tier D (scraped mirror) — [HF API](https://huggingface.co/api/datasets/aipieces/AUTSL)
- **BosphorusSign22k (Boğaziçi PILAB)** | arXiv abstract: "a publicly available large scale sign language dataset … We also provide state-of-the-art human pose estimates" | the PILAB page was unreachable (ECONNRESET twice) and the LREC data page states no licence → **licence UNVERIFIED; Tier C** | Özdemir, Kındıroğlu, Camgöz, Akarun, LREC 2020 sign-lang workshop — [arXiv 2004.01283](https://arxiv.org/abs/2004.01283v2); [LREC data](https://www.sign-lang.uni-hamburg.de/lrec/data/bosphorussign22k.html)
- **TurkSign446** | Zenodo 10.5281/zenodo.17267294 | 446 words (133 static, 313 dynamic), 10 participants × 10 reps = 44,600 samples; MediaPipe Holistic features (1,662/frame, NumPy); no video | licence "cc-by-4.0" but access "restricted" (no files visible) → Tier A licence behind an access request | Torun & Karacı (2025) — [Zenodo API 17267294](https://zenodo.org/api/records/17267294)
- **Contemporary TİD Dictionary (Güncel Türk İşaret Dili Sözlüğü, Ministry of Family)** | https://tidsozluk.aile.gov.tr/ | "2000 concepts, 11428 videos of signs", with handshape and location information | Compendium licence: "information not available". The site was unreachable from here (ECONNRESET) → **Tier C/D, unverified** — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/contemporarytiddict.html)
- **Boğaziçi University TİD Dictionary** | https://www.cmpe.boun.edu.tr/tid/ | "1355 signs and phrases" | licence n/a; unreachable → Tier C/D — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/bogaziciuniversitydictionary.html)
- Corpus Kubus, VIDI Sign Space Corpus, Giving Cognition a Hand and BosphorusSign General/Health/Finance are listed without licence or access → Tier C — [LREC language: tsm](https://www.sign-lang.uni-hamburg.de/lrec/language/tsm.html); [LREC data: Corpus Kubus](https://www.sign-lang.uni-hamburg.de/lrec/data/corpuskubus.html)
- SignPuddle sgn90 has 4 entries → negligible — [sgn90.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn90.spml)

### Inferences
- In this region the **notation backbone for SignDesc is SignPuddle FSW**: CZ 5.8k, SI 3.8k, PL 2.1k, RU 1.4k, AL 128, HU 67. This fits the project's "clips without video" approach, since FSW gives handshape, orientation, location and movement symbols without any video licensing problem. Its Tier-A status depends on the caller's CC BY-SA 3.0 assertion, which I could not reconfirm on any fetched page. Get a written confirmation from the SignPuddle/SignWriting maintainers (Slevinski/Sutton), or find the licence statement, before redistributing derived clips.
- **Isolated-video Tier A exists only for Russian (Slovo) and Azerbaijani (AzSLD words)**. Greek GSL and GSLW are Tier A but continuous with gloss alignment, so citation forms must be cut from sentences. SL-ReDu would be the best Greek isolated set but has no licence.
- **Phonology-coded lexicons (CDPSL, POLYTROPON Lexicon, NOEMA, Dicta-Sign) are all Tier C.** They are worth formal requests because they carry HamNoSys or exhaustive manual coding that maps directly onto SignDesc.
- The only real **mocap** in scope is Czech MC-TRISLAN (CC BY-NC 4.0, TRC). It is suitable for internal retarget/tuning research but not for commercial redistribution.
- Slovo's licence is CC-BY-SA-like with no NC clause, but it is "not a Creative Commons license" and excludes portrayal rights. Clips derived from landmarks or avatars (no faces) are the safest redistribution path.
- The national video dictionaries (EKI, Dictio, Hallatlan, SZJ, ANAD, TİD Ministry) are effectively Tier C. The Estonian EKI dictionary is the exception at Tier B via CLARIN ACA NC.

### Gaps
- The SignPuddle licence was not verifiable on signbank.org, the SignPuddle landing page, the puddle pages or in the SPML files (none embed licences). It needs confirmation from the maintainers or a page I could not reach (signpuddle2.0 pages timed out on a second attempt).
- Korpus PJM: the Compendium says CC BY-SA 4.0 but the site shows only copyright. Unresolved without contacting UW.
- BosphorusSign22k and the TİD Ministry dictionary: original pages were unreachable (connection resets), so their licences are unverified.
- MC-TRISLAN's download page now returns 404, so its current distribution point is unknown.
- CLARIN.SI rate-limited my repository queries, so I could not exclude an SZJ record there. CLARIN-PL was not queried.
- After the web-search budget ran out I could not search for national dictionaries in Croatian, Serbian, Bosnian, Macedonian, Kosovar, Belarusian, Armenian, Kyrgyz, Tajik, Turkmen, Mongolian or Moldovan (local-language queries). Their "nothing usable" verdicts rest on catalogue absence (Compendium, LREC Anthology, SignPuddle, Zenodo, HF) and should be read as "nothing found in catalogues".
- Kaggle could not be searched (the API needs auth). The Slovo Kaggle mirror's licence field was not checked.
- The licence text of the RSL Corpus Licence and of the Database of Lexical Variation licence was not found.

---

## Q2. What licence governs data vs. videos? Bulk export / API / dump? Phonological coding fields?

### Takeaway
Where a licence exists it usually covers the whole package (CC BY 4.0 for GSL, GSLW and AzSLD; the BY-SA variant for Slovo and Bukva). National dictionaries reserve all rights over the videos and offer no export. Bulk dumps exist only for SignPuddle (SPML), the Zenodo/GitHub ML datasets, SL-ReDu (open directory, unlicensed) and the EASIER wordnet (CSV/TAB, links only). Phonological fields come with CDPSL, Dictio, EKI and Hallatlan (search parameters, all closed) and with POLYTROPON, NOEMA and Dicta-Sign (HamNoSys or manual coding, Tier C).

### Cited Findings
- **Data vs video split, explicit:** the EASIER wordnet ships sign IDs, glosses and *video URLs* into the original resources, so the links are CC BY 4.0 and the videos stay under the source terms — [Wordnet download](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/download.html); [LREC data](https://www.sign-lang.uni-hamburg.de/lrec/data/multilingualsignlanguageswordnet.html)
- **Videos explicitly reserved:**
  - Hallatlan forbids copying, re-uploading or taking content "into other services or databases" without written permission — [Hallatlan Szerzői jogok](https://www.hallatlan.hu/szerzoi-jogok/)
  - ANAD: "Download and copying prohibited" — [Compendium AlbSL](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/albsldict.html)
  - Dictio: "All rights reserved" — [dictio.info](https://www.dictio.info/)
  - ZDGNS: "Vse pravice pridržane" — [szj.si](https://www.szj.si/)
- **Personality rights:** the Slovo/Bukva licence states "rights of publicity and portrayal, privacy … are not granted", so video redistribution needs care even under a BY-SA-style licence — [Slovo licence PDF](https://raw.githubusercontent.com/hukenovs/slovo/main/license/en_us.pdf)
- **Bulk dumps available:**
  - SignPuddle SPML per puddle, 0.6 KB–1.5 MB — [sgn52.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn52.spml)
  - Slovo direct OBS links (16 GB trimmed, 1.2 GB MediaPipe JSON) — [Slovo GitHub](https://github.com/hukenovs/slovo)
  - Zenodo GSL (per-scenario zips) — [Zenodo 3941811](https://zenodo.org/record/3941811)
  - AzSLD per-component zips — [Zenodo concept](https://zenodo.org/doi/10.5281/zenodo.13627300)
  - SL-ReDu Apache directory — [SL-ReDu isolated](https://sl-redu.e-ce.uth.gr/sl-redu_datasets/isolated_GSL_corpus/)
  - SignWiki Georgia exposes a MediaWiki/Semantic MediaWiki API, but has no licence and YouTube video — [SignWiki API](https://ge.signwiki.org/api.php?action=query&meta=siteinfo&siprop=general%7Cstatistics%7Crightsinfo&format=json)
- **No export/API:** CDPSL (no download/API) — [Słownik PJM](https://www.slownikpjm.uw.edu.pl/en); Garage RSL variation DB (no export; annotations by email) — [rsl-research-explore](https://rsl-research-explore.garagemca.org/)
- **Phonological coding fields:**
  - CDPSL: HamNoSys + 50 handshapes + 30 localizations + number of hands — [Compendium CDPSL](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/cdpsl.html)
  - EKI EVK: handshape, location and movement search — [EKI](https://arhiiv.eki.ee/dict/viipekeel/)
  - Dictio: handshape, place and movement filters — [dictio.info](https://www.dictio.info/)
  - Hallatlan: handshape picture and iconicity info — [Compendium Hallatlan](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/hallatlandictionary.html)
  - POLYTROPON: "exhaustive coding of lemmas for manual and non-manual features" — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/polytroponlex.html)
  - NOEMA and Dicta-Sign: HamNoSys — [NOEMA](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/noema.html); [Dicta-Sign Lexicon](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictasignlex.html)
  - TİD Ministry dictionary: handshape and location info — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/contemporarytiddict.html)
  - CZJ domain lexicon: HamNoSys transcripts — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/czechsldomainspecificlexicon.html)
- **Keypoint/landmark derivatives that avoid faces:**
  - Slovo MediaPipe JSON (BY-SA variant) — [Slovo GitHub](https://github.com/hukenovs/slovo)
  - PSL alphabet landmarks (CC BY 4.0) — [Zenodo 19538109](https://zenodo.org/api/records/19538109)
  - TurkSign446 Holistic features (CC BY 4.0, restricted access) — [Zenodo 17267294](https://zenodo.org/api/records/17267294)
  - KRSL20 OpenPose keypoints (no licence) — [KRSL20](https://krslproject.github.io/krsl20/)
  - AUTSL skeleton (research-only) — [AU CVML](https://cvml.ankara.edu.tr/datasets/)

### Inferences
- For Marionet, the redistributable output should be **derived SignDesc / avatar clips, not source video**. That keeps BY-SA obligations manageable (share-alike on derived clips, for SignPuddle- and Slovo-derived material) and sidesteps portrayal rights.
- The SignPuddle FSW → SignDesc path is the only route in this region that yields per-sign phonological parameters under an (asserted) open licence. Every HamNoSys or coded lexicon requires negotiation.

### Gaps
- Whether ML-dataset licences (GSL CC BY, Slovo variant) were cleared for signer likeness/portrayal is undocumented, except for AzSLD's informed-consent statement.
- The exact ChaLearn/Codalab T&C text for AUTSL was not retrieved (it sits behind Codalab).

---

## Q3. Repository records (CLARIN.SI, LINDAT, CLARIN-PL, META-SHARE, Zenodo, Kaggle, Hugging Face, GitHub, ELRA, ELG)

### Takeaway
Zenodo is the most productive repository for this region. It holds CC BY 4.0 records for GSL, GSLW, AzSLD, Ukrainian dactyls, QazSL, PSL landmarks and RSL kinematics, plus TurkSign446 (CC BY 4.0 but restricted). LINDAT has no Czech SL. META-SHARE (UT) holds the Estonian EKI dictionary under CLARIN ACA NC. ELRA sells UWB-07-SLR-P, and ELG catalogues MC-TRISLAN (CC BY-NC 4.0). Hugging Face holds only unlicensed mirrors. GitHub holds Slovo and Bukva (BY-SA variant) and Logos (research-only data).

### Cited Findings
- Zenodo API results, 2026-10-14. Hits are listed below by query; empty queries are listed at the end.
  - "turkish sign language": TurkSign446 (cc-by-4.0, restricted) — [Zenodo API search](https://zenodo.org/api/records?q=%22turkish%20sign%20language%22)
  - "russian sign language": RSL kinematics (cc-by-4.0, open); FluentSigners-50 (restricted, no licence); 23164719, a CC BY 4.0 text on RSL/ASL writing systems (not data) — [Zenodo API search](https://zenodo.org/api/records?q=%22russian%20sign%20language%22)
  - "polish sign language": PSL alphabet landmarks — [Zenodo API search](https://zenodo.org/api/records?q=%22polish%20sign%20language%22)
  - "greek sign language": GSL 4756317, GSLW 8047231, virtual humans 8073770 (all cc-by-4.0) — [Zenodo API search](https://zenodo.org/api/records?q=%22greek%20sign%20language%22)
  - "ukrainian sign language": dactyls 17618406 — [Zenodo API search](https://zenodo.org/api/records?q=%22ukrainian%20sign%20language%22)
  - "kazakh sign language": QazSL 22830162; 14086698 (CC BY, but a paper PDF only) — [Zenodo API search](https://zenodo.org/api/records?q=%22kazakh%20sign%20language%22)
  - Hungarian, Slovenian and Estonian queries returned no dataset-type hits. Czech, Croatian, Serbian, Lithuanian, Latvian, Armenian, Georgian, Bulgarian, Romanian, Albanian, Slovak, Mongolian, Macedonian, Bosnian, Cypriot and Belarusian returned 0 hits.
- LINDAT DSpace API: 26 "sign language" hits, none Czech SL; "znakový jazyk" returned 0 — [LINDAT API](https://lindat.mff.cuni.cz/repository/server/api/discover/search/objects?query=%22sign%20language%22)
- META-SHARE (Univ. Tartu): EKI EVK dictionary, "CLARIN ACA", "Academic - Non Commercial Use" — [META-SHARE](https://metashare.ut.ee/repository/browse/the-online-dictionary-of-the-estonian-sign-language-estonian/1520ec3fa0d411eebb4773db10791bcfacf23d7c5141477199369c4a4e5ab13e/)
- ELRA: S0286 UWB-07-SLR-P, END USER / VAR, priced — [ELRA](https://catalog.elra.info/en-us/repository/browse/ELRA-S0286/)
- ELG: MC-TRISLAN, CC-BY-NC-4.0 — [ELG record](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/18324/)
- Hugging Face API: in-scope hits were AUTSL and Slovo mirrors and derivatives (no licence tags), two Greek sets (other / none) and one MIT RSL gloss text corpus. Polish, Ukrainian, Kazakh, Uzbek, Armenian, Czech, Hungarian, Georgian, Azerbaijani, Mongolian, Bulgarian, Romanian, Serbian, Croatian, Latvian, Estonian, Slovak, Slovenian, Kyrgyz and Belarusian "… sign" queries returned 0 — [HF API AUTSL mirror](https://huggingface.co/api/datasets/aipieces/AUTSL)
- GitHub: Slovo, Bukva and Logos (ai-forever / hukenovs) — [Slovo](https://github.com/hukenovs/slovo); [Bukva](https://github.com/ai-forever/bukva); [Logos](https://github.com/ai-forever/logos)
- CLARIN.SI: no sign-language record surfaced. Repository queries were rate-limited (HTTP 429) — [CLARIN.SI](https://www.clarin.si/info/?p=2847)

### Inferences
- Zenodo CC BY 4.0 records are the safest Tier-A inputs. GSL, GSLW and AzSLD state the licence in the record metadata itself, not only in a paper.
- The HF mirrors should be ignored in favour of the upstream licences (Tier D by policy).

### Gaps
- CLARIN-PL and the CLARIN.SI full-text search were not completed. Kaggle was not searchable.
- The ELG/ELRA catalogues were not exhaustively searched for other in-scope SL resources (only known IDs were checked).

---

## Q4. Recommended first ingest per language, and languages with nothing usable

### Takeaway
Seven languages have a Tier-A first ingest: Czech, Slovene, Polish, Russian, Greek, Azerbaijani and Albanian. Several more have only Tier B/C or fingerspelling-only Tier A. Roughly 17 language varieties have nothing usable.

### Cited Findings (recommended first ingest; tier; rationale source)

| Language (ISO) | Recommended first ingest | Tier | Then | Source |
|---|---|---|---|---|
| Czech (cse) | SignPuddle sgn52 SPML (5,768 FSW signs) | A* | Request MC-TRISLAN (B mocap); ask Dictio (C) | [sgn52](https://www.signbank.org/signpuddle2.0/data/spml/sgn52.spml), [ELG](https://live.european-language-grid.eu/catalogue_backend/api/registry/metadatarecord/18324/) |
| Slovene (SZJ) | SignPuddle sgn74 SPML (3,786 FSW) | A* | Ask ZDGNS for szj.si videos (C) | [sgn74](https://www.signbank.org/signpuddle2.0/data/spml/sgn74.spml), [szj.si](https://www.szj.si/) |
| Polish (pso) | SignPuddle sgn19 SPML (2,134 FSW) + EASIER wordnet pso TAB (CC BY 4.0) | A* / A | Request CDPSL HamNoSys + parameters (C); confirm Korpus PJM licence | [sgn19](https://www.signbank.org/signpuddle2.0/data/spml/sgn19.spml), [CDPSL](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/cdpsl.html) |
| Russian (rsl) | Slovo MediaPipe JSON (1.2 GB) → Slovo 360p (13 GB) + SignPuddle sgn88 (1,432 FSW) | A (variant) / A* | Logos (B, by request) | [Slovo](https://github.com/hukenovs/slovo), [sgn88](https://www.signbank.org/signpuddle2.0/data/spml/sgn88.spml) |
| Greek (gss) | GSL Dataset supplementary.zip + GSL_split.zip, then RGB zips (about 40 GB) | A | Ask SL-ReDu for licence (C); POLYTROPON Lexicon (C) | [Zenodo GSL](https://zenodo.org/record/3941811), [SL-ReDu](https://sl-redu.e-ce.uth.gr/corpus) |
| Azerbaijani | AzSLD_Words_200.zip (1.4 GB) | A | Words_100, Fingerspelling | [Zenodo AzSLD](https://zenodo.org/doi/10.5281/zenodo.13627300) |
| Albanian (sqk) | SignPuddle sgn82 (128 FSW) | A* | ANAD licence (C) | [sgn82](https://www.signbank.org/signpuddle2.0/data/spml/sgn82.spml), [gjshsh.al](https://gjshsh.al/) |
| Estonian (eso) | EKI dictionary via CLARIN ACA (research/fit only) | B | Keep existing EVK "video is the corpus" demo | [META-SHARE](https://metashare.ut.ee/repository/browse/the-online-dictionary-of-the-estonian-sign-language-estonian/1520ec3fa0d411eebb4773db10791bcfacf23d7c5141477199369c4a4e5ab13e/) |
| Turkish (tsm) | AUTSL (research-only, via ChaLearn) | B | Request TurkSign446 (A licence, restricted); BosphorusSign22k (C, unverified) | [AU CVML](https://cvml.ankara.edu.tr/datasets/), [Zenodo 17267294](https://zenodo.org/api/records/17267294) |
| Hungarian (hsh) | SignPuddle sgn122 (67 FSW) — token | A* | Hallatlan written permission (C) | [sgn122](https://www.signbank.org/signpuddle2.0/data/spml/sgn122.spml), [Hallatlan](https://www.hallatlan.hu/szerzoi-jogok/) |
| Ukrainian (ukl) | Ukrainian dactyls (fingerspelling, CC BY 4.0) | A (fingerspelling only) | Cologne DCH corpus (C) | [Zenodo 17618406](https://zenodo.org/api/records/17618406) |
| Kazakh-Russian | QazSL fingerspelling (CC BY 4.0) | A (fingerspelling only) | Ask NU/K-SLARS for licence on KRSL20 / FluentSigners-50 | [Zenodo 22830162](https://zenodo.org/api/records/22830162), [KRSL20](https://krslproject.github.io/krsl20/) |
| Romanian (rms) | SignPuddle sgn132 (36 FSW) — token | A* | — | [sgn132](https://www.signbank.org/signpuddle2.0/data/spml/sgn132.spml) |
| Slovak (svk) | SignPuddle sgn89 (9 FSW) — token | A* | Dictio SPJ (C) | [sgn89](https://www.signbank.org/signpuddle2.0/data/spml/sgn89.spml) |

A* = Tier A conditional on the caller-asserted SignPuddle CC BY-SA 3.0, which I could not re-verify.

- **Languages with nothing usable (no Tier A/B/C lexical source found):** Latvian (lsl), Lithuanian (lls), Croatian (csq), Serbian (ysl), Bosnian, Macedonian, Kosovar, Bulgarian (bqn; 3 FSW entries only), Moldovan, Cypriot (cys), Belarusian, Georgian (SignWiki exists but YouTube and unlicensed, so Tier D), Armenian (aen), Uzbek, Kyrgyz, Tajik, Turkmen, and Mongolian (msr; covered elsewhere). Evidence: [Compendium language index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html); [LREC language index](https://www.sign-lang.uni-hamburg.de/lrec/language/index.html); [SignPuddle index](https://www.signbank.org/signpuddle2.0/index.php?ui=1)

### Inferences
- **Priority order for Marionet:**
  1. SignPuddle FSW for CZ, SI, PL and RU, after confirming the licence.
  2. Slovo landmarks and video (RU) and AzSLD words: fitting and tuning sources with redistributable derivatives.
  3. GSL CC BY (continuous, gloss-aligned).
  4. Tier-C requests with the highest phonology payoff: CDPSL (PJM), POLYTROPON Lexicon (GSL), SL-ReDu licence (GSL isolated), MC-TRISLAN access (mocap).
- If Marionet wants a Tier-A demo for a second "video is the corpus" language after Estonian, **Azerbaijani (AzSLD, CC BY 4.0, informed consent stated)** and **Russian (Slovo)** are the cleanest choices in this region.

### Gaps
- "Nothing usable" verdicts for the Balkan, Caucasus and Central Asian languages rest on catalogue and repository absence after the search budget ran out, not on exhaustive local-language web searching.

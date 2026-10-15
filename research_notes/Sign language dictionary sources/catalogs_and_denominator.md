# Cross-language catalogs, multi-language hosting platforms, and the sign-language denominator (snapshot 2026-10-14)

Method note: the session's shared WebSearch budget was exhausted before this task, so every finding below comes from fetching primary pages directly or calling the platforms' own public APIs (SignPuddle/signpuddle.net, GitHub API, Glottolog/SIL downloads, Zenodo/OSF/Hugging Face/Kaggle/MediaWiki APIs). Counts were taken from live data on 2026-10-14. Nothing over 20 MB was downloaded. The two SignPuddle dumps over 20 MB were sized with HTTP Range requests only. "Tier" is a provisional Marionet gate value, using A = CC BY/BY-SA/CC0/open dump, B = NC/research-only, C = register/contract/permission, D = skip. Where a licence was not read on the original page, it is marked as from a catalogue or "unverified".

## Q1. SignPuddle Online: the full puddle list, ID→language map, entry counts, and dumps

### Takeaway
SignPuddle 2.0 lists 144 public puddles covering 80 ISO 639-3 sign languages. Each puddle is a direct, unauthenticated SPML dump at `https://www.signbank.org/signpuddle2.0/data/spml/sgn{ID}.spml`. Together they hold about 338k entries (~302k in dictionary-type puddles) and 143 MB of SPML. A daily-refreshed SQLite mirror (`http://signbank.org/swserver_data/puddle/sgn{ID}.db`) also exposes 5 hidden Italian puddles (sgn6–sgn10). The only licence statement is project-level and not per puddle: the SignPuddle Standard says "reference material is licensed under Creative Commons attribution, share alike (by-sa)". Treat SignPuddle as Tier A in principle, but record that no per-puddle licence exists. The `<video>` fields are YouTube iframes (Tier D).

### Cited Findings
- **Puddle index.** The SignPuddle 2.0 front page (`https://www.signbank.org/signpuddle2.0/`, "SignPuddle Online v2.1") lists 144 puddle buttons, each a form posting `sgn={ID}`. The directory listing `/signpuddle2.0/data/spml/` returns HTTP 403, so the index page is the only enumeration in 2.0 — [SignPuddle 2.0](https://www.signbank.org/signpuddle2.0/)
- **Machine-readable ID→ISO map.** The SignWriting Server API at `https://signpuddle.net/puddle` returns JSON with `"totalResults": 139` puddle/UI records, each carrying `code` (sgnN), `language` (ISO 639-3), `namespace` (dictionary/literature/encyclopedia/bible/signs) and `name`. Example: `sgn4 | ase | dictionary | Dictionary US`. The API dates from v1.3.0 (May 2016), so puddles created later (2, 11–14, 101/102, 107, 109, 112, 116, 118, 121, 129, 138/139, 141/142, 146, 149, 153) have no ISO there. In the table below those were mapped from their names and marked as inferred — [signpuddle.net/puddle](https://signpuddle.net/puddle); [SignWriting Server](https://www.signpuddle.net/)
- **Non-ISO codes in the API.** Four puddles use codes that are not ISO 639-3: `bfi-IE` (sgn60, Northern Ireland), `ase-HT` (sgn113, Haiti), `ase-MW` (sgn128, Malawi), `sgn-eo` (alt code for sgn54 "Vortaro", Esperanto; language field `ils`) — [signpuddle.net/puddle](https://signpuddle.net/puddle)
- **Entry counts.** All 143 dumps under 20 MB were counted by `<entry ` occurrence, which gives 199,910 entries. sgn46 (Brazil, 22.2 MB) and sgn78 (Korea, 26.6 MB) were sized only by Range-reading the file tail. The highest entry ids are 70,875 and 67,741 respectively, both with Oct-2026 timestamps and many `ksldic*` users on Korea, so they are actively growing. Total ≈ 338.5k entries, 143.0 MB SPML. Measured from [sgn{ID}.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn4.spml)
- **SPML header and entry format.** Example: `<spml root="http://www.signbank.org/signpuddle1.6" type="sgn" puddle="4" … nextid="11237">`. Each `<entry>` holds an FSW `<term>` (e.g. `AS17620S15a18…M523x514…`), gloss `<term>`s, and optional `<text>`, `<video>` and `<src>`. `<video>` content is an embedded YouTube `<iframe>`. The `nextid` header attribute is stale and should not be used as a count (sgn4 says 11237 but holds 12,277 entries) — [sgn4.spml](https://www.signbank.org/signpuddle2.0/data/spml/sgn4.spml)
- **Puddle page counts.** The puddle page for sgn4 reports "Dictionary US 12277 Total Entries 12845 Unique Signs 14443 Sign Occurrences", which matches the dump count — [SignPuddle sgn4](https://www.signbank.org/signpuddle2.0/index.php?ui=1&sgn=4)
- **SQLite mirror.** The SignWriting Server says "All of the SignPuddle Online data is available as SQLite 3 databases … The individual databases are available in the puddle subdirectory". Its `refresh_dbs.sh` runs `wget -N -nH --cut-dirs=1 -r --no-parent http://signbank.org/swserver_data/puddle/`. The directory currently lists 151 `.db` files, all dated 14-Oct-2026 03:34 (daily refresh). It includes **sgn6 "eufemismi", sgn7 "gab", sgn8 "lis", sgn9 "lsf", sgn10 "toponimi"**: Italian/LIS puddles that are absent from the 2.0 index (sgn7 564K, sgn8 351K, sgn9 228K) — [signpuddle.net](https://www.signpuddle.net/); [slevinski/swserver refresh_dbs.sh](https://github.com/slevinski/swserver); [swserver_data/puddle](http://signbank.org/swserver_data/puddle/)
- **Licence, project-level.** IETF draft-slevinski-signwriting-text, Appendix C.1 "Licenses": "The font software is available under SIL's Open Font License. The reference material is licensed under Creative Commons attribution, share alike (by-sa). … The current generation of open source projects on GitHub are licensed under the MIT License." Appendix C.2.1 adds: "Each collection is freely available as a small XML file [SPML]." No per-puddle licence was found on puddle pages or in SPML headers — [IETF draft-slevinski-signwriting-text](https://datatracker.ietf.org/doc/html/draft-slevinski-signwriting-text)
- **Licence, per-dataset precedent.** In 2011 Valerie Sutton agreed CC BY-SA 3.0 terms specifically for the Polish puddle content and asked for credit to SignPuddle.org, SignWriting.org and the Polish writers. This was a one-dataset permission, not a site policy — [sw-l list, May 2011](https://listserv.linguistlist.org/pipermail/sw-l/2011-May/024071.html)
- **Software licences.** SignPuddle 2 software: "## License MIT" — [slevinski/SignPuddle2](https://github.com/slevinski/SignPuddle2). SignPuddle 3 beta (signpuddle.com, ApiTxt) is also "License MIT"; its server routes are `/tools /fsw /swu /user /collection /apitxt`, with no puddle listing route — [signpuddle.com](https://signpuddle.com/)
- **GitHub.** The `sutton-signwriting` org has 27 repos covering code, fonts and CC BY-4.0 white papers, but **no dictionary data dumps**. `signpuddle-local` is a read-only offline viewer for SignPuddle data, not a dump — [github.com/sutton-signwriting](https://github.com/sutton-signwriting); [signpuddle-local](https://github.com/sutton-signwriting/signpuddle-local). Slevinski's personal repos include `swserver_data` (symbol DB, 2015) and `SignPuddle2`, also without puddle dumps — [github.com/slevinski](https://github.com/slevinski)
- **Derivatives elsewhere.** The `sign-language-datasets` tfds `signbank` loader scrapes `http://signbank.org/signpuddle2.0/data/spml/` with cache-busting. Its README lists "SignBank | N/A" — [sign-language-processing/datasets signbank.py](https://github.com/sign-language-processing/datasets). HF `sign/signbank-plus` (a cleaned SignPuddle-derived SignWriting↔text corpus) is labelled `license: cc-by-nc-4.0` — [HF sign/signbank-plus](https://huggingface.co/datasets/sign/signbank-plus). sign.mt's dataset table lists "SignBank | Multilingual | video, writing:SignWriting … | 222148 samples | license None" — [sign.mt datasets JSON](https://github.com/sign-language-processing/sign-language-processing.github.io/tree/master/src/datasets)

#### SignPuddle record (aggregate)
| field | value |
|---|---|
| language(s) | 80 ISO 639-3 codes (see Q9 table column "SignPuddle"), plus `bfi-IE`, `ase-HT`, `ase-MW`, and Vietnam (sgn153, code not given) |
| source / URL | SignPuddle Online 2.0, `https://www.signbank.org/signpuddle2.0/data/spml/sgn{ID}.spml`; SQLite `http://signbank.org/swserver_data/puddle/sgn{ID}.db` |
| type | notation (SignWriting FSW in SPML XML), lexical-db (glosses), some literature/encyclopedia/Bible text |
| size | 144 public puddles + 5 hidden; ≈338.5k entries; 143 MB SPML |
| licence (verbatim) | "The reference material is licensed under Creative Commons attribution, share alike (by-sa)." (project-level, IETF draft App. C.1); no per-puddle statement |
| SPDX | none declared (closest: CC-BY-SA, version unspecified) |
| tier | A in principle for FSW and gloss text (project-level BY-SA). Record as "A, project-level licence only". `<video>` iframes are D (YouTube) |
| access route | direct dump URL (no auth) |
| commercial_ok | yes if the BY-SA statement is accepted as covering puddle data (unverified per puddle) |
| video_redistrib_ok | no (videos are YouTube embeds) |
| approx disk | 143 MB SPML (largest: sgn78 26.6 MB, sgn46 22.2 MB, sgn151 17.7 MB, sgn152 10.2 MB, sgn53 8.4 MB) |
| citation | Slevinski, S. *Formal SignWriting* (IETF Internet-Draft draft-slevinski-signwriting-text); Sutton, V. SignPuddle Online, signbank.org |

#### SignPuddle 2.0 puddle table (all 144 indexed puddles)
ISO codes come from the signpuddle.net API. Rows with an inferred ISO code (puddle missing from the 2016 API) are: 2, 11–14, 101/102, 107, 109, 112, 116, 118, 121, 129, 138/139, 141/142, 146, 149, 153. Not shown in the table: sgn0 (141 entries, index header without title; symbol/legacy puddle), sgn1 "Lessons" (API only; SQLite 46K), and the hidden sgn6–sgn10 (SQLite only).

| sgn ID | Puddle name (SignPuddle 2.0 index) | ISO 639-3 (signpuddle.net API) | type | entries (`<entry>` count) | entries with `<video>` | SPML bytes | Last-Modified |
|---|---|---|---|---|---|---|---|
| 2 | Myanmar Dictionary | ysm | dictionary | 5 | 5 | 3946 | 19 Oct 2025 |
| 4 | Dictionary US | ase | dictionary | 12277 | 149 | 3985744 | 04 Oct 2026 |
| 5 | Literature US | ase | literature | 755 | 187 | 1209857 | 26 Jan 2026 |
| 11 | Singapore Sign Language (SgSL) Dictionary | sls | dictionary | 1122 | 507 | 316914 | 11 Jun 2020 |
| 12 | Hong Kong Dictionary | hks | dictionary | 14 | 3 | 5105 | 18 Jan 2026 |
| 13 | Hong Kong Literature | hks | literature | 2 | 0 | 6384 | 15 Sep 2021 |
| 14 | Singapore Sign Language (SgSL) Literature | sls | literature | 14 | 14 | 70648 | 31 May 2020 |
| 16 | Diccionario Honduras | hds | dictionary | 3401 | 1048 | 1283470 | 07 Feb 2022 |
| 17 | Deaf Harbor | ase | signs | 19 | 0 | 34697 | 18 Nov 2021 |
| 18 | Dictionary Ethiopia | eth | dictionary | 143 | 0 | 34272 | 11 Mar 2016 |
| 19 | Słownik PL | pso | dictionary | 2144 | 6 | 613850 | 24 Oct 2025 |
| 20 | Littérature CH-fr | ssr | literature | 47 | 2 | 32568 | 11 Apr 2016 |
| 21 | Encyclopedia US | ase | encyclopedia | 899 | 11 | 1072537 | 28 Jul 2026 |
| 22 | Encyclopédie CH-fr | ssr | encyclopedia | 10 | 0 | 11213 | 01 Oct 2018 |
| 23 | Litteratur NO | nsl | literature | 344 | 0 | 190954 | 08 Jul 2023 |
| 24 | Leksikon NO | nsl | encyclopedia | 13 | 0 | 4459 | 17 Dec 2021 |
| 25 | LLCN & SignTyp | ase | dictionary | 5530 | 3 | 1981492 | 19 Aug 2016 |
| 26 | Literatur DE | gsg | literature | 420 | 0 | 702398 | 16 Feb 2022 |
| 27 | Enzyklopädie DE | gsg | encyclopedia | 12 | 0 | 14535 | 29 Feb 2016 |
| 28 | ASL Bible Dictionary | ase | dictionary | 9974 | 1 | 2373340 | 13 Oct 2026 |
| 29 | Wörterbuch AT | asq | dictionary | 5 | 0 | 1976 | 08 Feb 2016 |
| 30 | Ordbog Danmark | dsl | dictionary | 53 | 0 | 14497 | 13 Jul 2025 |
| 31 | Dictionary Malta | mdl | dictionary | 2833 | 4 | 885036 | 05 Jun 2025 |
| 32 | Dictionary Nigeria | nsi | dictionary | 11 | 0 | 4302 | 27 Jan 2019 |
| 33 | Dicionário Portugal | psr | dictionary | 496 | 0 | 128564 | 15 Feb 2026 |
| 34 | Dictionary Thailand | tsq | dictionary | 684 | 521 | 328255 | 30 May 2026 |
| 35 | Dictionary International | ils | dictionary | 244 | 61 | 126973 | 10 May 2026 |
| 36 | Literatura CZ | cse | literature | 176 | 1 | 449817 | 23 Nov 2023 |
| 37 | Encyklopedie CZ | cse | encyclopedia | 73 | 0 | 80631 | 28 Dec 2022 |
| 38 | Literatura PL | pso | literature | 5 | 0 | 3533 | 15 Oct 2019 |
| 39 | Encyklopedie PL | pso | encyclopedia | 1 | 0 | 824 | 05 Nov 2025 |
| 40 | Dictionary Saudi Arabia | sdl | dictionary | 401 | 0 | 94241 | 08 Nov 2023 |
| 41 | Diccionario Argentina | aed | dictionary | 1870 | 0 | 571593 | 07 Apr 2026 |
| 42 | Dictionary Australia | asf | dictionary | 154 | 0 | 31678 | 11 Dec 2025 |
| 43 | Dictionnaire BE-fr | sfb | dictionary | 3465 | 0 | 727959 | 14 Nov 2025 |
| 44 | Woordenboek Flanders | vgt | dictionary | 8969 | 0 | 1907861 | 07 Oct 2026 |
| 45 | Diccionario Bolivia | bvl | dictionary | 7 | 0 | 2391 | 07 Apr 2026 |
| 46 | Dicionário Brasil | bzs | dictionary | ≈70,875 (max id; file 22 MB, not downloaded) | <spml root="http://www.signbank.org/signpuddle1.6" type="sgn" puddle="46" cdt="1301449349" mdt="1310505370" nextid="2308"> | 22203824 | 14 Oct 2026 |
| 47 | Dictionnaire Quebec | fcs | dictionary | 12086 | 26 | 3360741 | 24 Mar 2026 |
| 48 | Wörterbuch CH-de | sgg | dictionary | 4745 | 0 | 1047100 | 03 Mar 2022 |
| 49 | Dictionnaire CH-fr | ssr | dictionary | 9938 | 25 | 5417682 | 11 Oct 2026 |
| 50 | Dizionario CH-it | slf | dictionary | 3 | 0 | 1359 | 08 Jan 2015 |
| 51 | Diccionario Colombia | csn | dictionary | 1286 | 96 | 472558 | 22 Sep 2026 |
| 52 | Slovník CZ | cse | dictionary | 5863 | 0 | 1499149 | 13 Jan 2024 |
| 53 | Wörterbuch DE | gsg | dictionary | 24778 | 1 | 8406262 | 13 Oct 2025 |
| 54 | Vortaro | ils | dictionary | 2316 | 0 | 575024 | 29 Aug 2018 |
| 55 | Diccionario España | ssp | dictionary | 8526 | 0 | 1999199 | 23 Jul 2026 |
| 56 | Diccionario Catalán | csc | dictionary | 3422 | 0 | 958646 | 03 Oct 2025 |
| 57 | Dictionary Finland | fse | dictionary | 165 | 0 | 42232 | 11 Apr 2016 |
| 58 | Dictionnaire FR | fsl | dictionary | 1481 | 5 | 332344 | 28 Jun 2025 |
| 59 | Dictionary Great Britain | bfi | dictionary | 853 | 1 | 241042 | 07 Jun 2024 |
| 60 | Dictionary Northern Ireland | bfi-IE | dictionary | 56 | 0 | 12080 | 11 Feb 2016 |
| 61 | Dictionary Greece | gss | dictionary | 26 | 0 | 6003 | 16 Nov 2016 |
| 62 | Dictionary Ireland | isg | dictionary | 66 | 0 | 17327 | 02 Mar 2022 |
| 63 | Dizionario IT | ise | dictionary | 1222 | 1 | 278110 | 11 Dec 2025 |
| 64 | Dictionary Japan | jsl | dictionary | 328 | 10 | 79703 | 28 Apr 2025 |
| 65 | Diccionario Mexico | mfs | dictionary | 1731 | 5 | 412439 | 14 Oct 2026 |
| 66 | Dictionary Malaysia | xml | dictionary | 6 | 0 | 2176 | 30 Nov 2019 |
| 67 | Diccionario Nicaragua | ncs | dictionary | 1725 | 2 | 421131 | 22 May 2024 |
| 68 | Woordenboek NL | dse | dictionary | 84 | 1 | 21892 | 23 Mar 2025 |
| 69 | Ordbok NO | nsl | dictionary | 6494 | 2 | 1748078 | 15 Aug 2025 |
| 70 | Dictionary New Zealand | nzs | dictionary | 37 | 0 | 7490 | 26 Feb 2016 |
| 71 | Diccionario Peru | prl | dictionary | 148 | 0 | 65762 | 30 Jul 2025 |
| 72 | Dictionary Philippines | psp | dictionary | 905 | 0 | 212769 | 25 Sep 2023 |
| 73 | Ordbok Sverige | swl | dictionary | 81 | 0 | 19171 | 03 Mar 2022 |
| 74 | Slovar Slovenia | ysl | dictionary | 3799 | 0 | 1028093 | 30 Mar 2016 |
| 75 | Dictionary Taiwan | tss | dictionary | 214 | 7 | 56870 | 02 Feb 2022 |
| 76 | Diccionario Venezuela | vsl | dictionary | 136 | 0 | 34589 | 24 Feb 2016 |
| 77 | Dictionary South Africa | sfs | dictionary | 157 | 0 | 37039 | 29 Jul 2025 |
| 78 | Dictionary Korea | kvk | dictionary | ≈67,741 (max id; file 26.6 MB, not downloaded) | <spml root="http://www.signbank.org/signpuddle1.6" type="sgn" puddle="78" cdt="1222933540" mdt="1288230373" nextid="22"> | 26555465 | 14 Oct 2026 |
| 79 | Dictionary Kenya | xki | dictionary | 17 | 0 | 4160 | 10 Jul 2015 |
| 80 | Project 2 Dictionary Sorting | bzs | dictionary | 3501 | 7 | 1085871 | 12 Mar 2016 |
| 81 | Littérature Quebec | fcs | literature | 404 | 4 | 402857 | 07 Nov 2025 |
| 82 | Dictionary Albania | sqk | dictionary | 130 | 0 | 38759 | 04 Sep 2017 |
| 83 | Dictionary China | csl | dictionary | 97 | 0 | 24750 | 02 Mar 2022 |
| 84 | Dictionary Egypt | esl | dictionary | 111 | 0 | 38383 | 23 Apr 2021 |
| 85 | Dictionary India | ins | dictionary | 5 | 0 | 1524 | 28 Mar 2023 |
| 86 | Dictionary Jordan | jos | dictionary | 31 | 0 | 7690 | 15 Aug 2026 |
| 87 | Dictionary Pakistan | pks | dictionary | 13 | 0 | 3982 | 15 Nov 2024 |
| 88 | Dictionary Russia | rsl | dictionary | 1435 | 1 | 319632 | 18 Jul 2026 |
| 89 | Dictionary Slovakia | svk | dictionary | 25 | 0 | 6173 | 12 May 2026 |
| 90 | Dictionary Turkey | tsm | dictionary | 4 | 0 | 1527 | 06 Mar 2016 |
| 91 | Literature Saudi Arabia | sdl | literature | 6 | 0 | 2393 | 06 Nov 2023 |
| 92 | Literature Jordan | jos | literature | 1 | 0 | 948 | 08 Oct 2014 |
| 93 | Literatura España | ssp | literature | 505 | 0 | 1031676 | 09 Mar 2025 |
| 94 | Literatura Catalán | csc | literature | 45 | 0 | 12863 | 30 Apr 2025 |
| 95 | Littérature BE-fr | sfb | literature | 1 | 0 | 1039 | 09 May 2022 |
| 96 | Literatur CH-de | sgg | literature | 26 | 0 | 21459 | 11 Jul 2015 |
| 98 | Literatuur Flanders | vgt | literature | 52 | 1 | 35372 | 04 Mar 2021 |
| 99 | Literature Japan | jsl | literature | 24 | 0 | 29878 | 29 Jun 2022 |
| 100 | Literature Ethiopia | eth | literature | 1 | 0 | 2396 | 05 Oct 2015 |
| 101 | Diccionario Costa Rica | csr | dictionary | 2 | 2 | 1584 | 13 Jul 2025 |
| 102 | Literatura Costa Rica | csr | literature | 0 | 0 | 995 | 24 Jun 2025 |
| 103 | Malta LSM Private Puddle | mdl | signs | 234 | 0 | 219973 | 04 Feb 2016 |
| 104 | Dictionnaire Tunisien | tse | dictionary | 4519 | 7 | 1757714 | 15 Feb 2026 |
| 105 | DAC Private Puddle | ase | dictionary | 2409 | 2409 | 1980676 | 14 Oct 2026 |
| 106 | Dictionary Afghanistan | afg | dictionary | 14 | 1 | 5152 | 05 Jul 2025 |
| 107 | Dictionary Lithuania | lls | dictionary | 0 | 0 | 666 | 17 Mar 2015 |
| 108 | Dictionary Latvia | lsl | dictionary | 1 | 0 | 829 | 17 Dec 2015 |
| 109 | Dictionary Estonia | eso | dictionary | 0 | 0 | 629 | 18 Jan 2014 |
| 110 | Dictionary Israel | isr | dictionary | 36 | 1 | 11674 | 18 Feb 2024 |
| 111 | Project 1 Translate Wiki | ase | dictionary | 434 | 0 | 116668 | 04 Feb 2016 |
| 112 | Dictionary Guatemala | gsm | dictionary | 0 | 0 | 703 | 25 Jan 2016 |
| 113 | Dictionary Haiti | ase-HT | dictionary | 1 | 0 | 942 | 02 Dec 2015 |
| 114 | Literatura Brasil | bzs | literature | 4971 | 34 | 4563000 | 14 Oct 2026 |
| 115 | Literatura Portugal | psr | literature | 55 | 1 | 140002 | 03 Dec 2024 |
| 116 | Enciclopédia Brasil | bzs | encyclopedia | 5449 | 7 | 1642496 | 13 Feb 2026 |
| 117 | Enciclopédia Portugal | psr | encyclopedia | 40 | 0 | 11730 | 24 Oct 2024 |
| 118 | Litteratur Danmark | dsl | literature | 0 | 0 | 653 | 28 Mar 2015 |
| 119 | Literatura Nicaragua | ncs | literature | 501 | 0 | 975355 | 08 Feb 2024 |
| 120 | Literatura Mexico | mfs | literature | 666 | 0 | 186619 | 12 Oct 2026 |
| 121 | Literatura Honduras | hds | literature | 0 | 0 | 279 | 15 Jun 2025 |
| 122 | Dictionary Hungary | hsh | dictionary | 67 | 0 | 20121 | 26 Nov 2015 |
| 123 | Literature Hungary | hsh | literature | 1 | 0 | 1003 | 26 Nov 2015 |
| 124 | Literature France | fsl | literature | 16 | 1 | 3771 | 03 Jul 2018 |
| 125 | Literature Great Britain | bfi | literature | 39 | 0 | 36865 | 13 Sep 2022 |
| 126 | Littérature Tunisien | tse | literature | 469 | 6 | 865842 | 14 May 2021 |
| 127 | Literature Malta | mdl | literature | 753 | 0 | 679426 | 18 Jul 2022 |
| 128 | Dictionary Malawi | ase-MW | dictionary | 49 | 0 | 11766 | 05 Dec 2022 |
| 129 | Diccionario Paraguay | pys | dictionary | 3061 | 0 | 745472 | 17 Sep 2026 |
| 130 | Dictionary Ukraine | ukl | dictionary | 37 | 2 | 8624 | 04 May 2022 |
| 131 | Ordabók IS | icl | dictionary | 40 | 0 | 8312 | 05 Sep 2017 |
| 132 | Dictionary Romania | rms | dictionary | 38 | 0 | 13580 | 29 May 2015 |
| 133 | Dictionary Nepal | nsp | dictionary | 5 | 0 | 3308 | 31 Mar 2016 |
| 134 | Dictionary Bulgaria | bqn | dictionary | 3 | 1 | 2872 | 12 Jul 2025 |
| 135 | Diccionario Chile | csg | dictionary | 175 | 1 | 40420 | 28 May 2026 |
| 136 | Diccionario Ecuador | ecs | dictionary | 4 | 0 | 2522 | 03 Jan 2016 |
| 137 | Diccionario El Salvador | esn | dictionary | 1 | 0 | 2059 | 22 Sep 2015 |
| 138 | Literature Romania | rms | literature | 0 | 0 | 1704 | 17 Apr 2012 |
| 139 | Encyclopedia Romania | rms | encyclopedia | 0 | 0 | 1747 | 15 Oct 2013 |
| 140 | Encyclopédie Quebec | fcs | encyclopedia | 5 | 0 | 5502 | 06 Nov 2024 |
| 141 | Literature Russia | rsl | literature | 0 | 0 | 1780 | 01 Feb 2016 |
| 142 | Encyclopedia Russia | rsl | encyclopedia | 0 | 0 | 1818 | 10 Sep 2015 |
| 143 | Diccionario Uruguay | ugy | dictionary | 388 | 1 | 94497 | 10 Oct 2026 |
| 144 | Literatura Uruguay | ugy | literature | 5 | 0 | 4862 | 10 Oct 2026 |
| 145 | Literatura Argentina | aed | literature | 4 | 4 | 17597 | 27 Jul 2023 |
| 146 | Enciclopedia Argentina | aed | encyclopedia | 0 | 0 | 1872 | 27 Jun 2013 |
| 147 | Literature Malta Archive | mdl | literature | 582 | 0 | 586271 | 05 Feb 2015 |
| 148 | Besedila Slovenia | ysl | literature | 16 | 0 | 18032 | 23 Jan 2015 |
| 149 | Enciklopedija Slovenia | ysl | encyclopedia | 0 | 0 | 760 | 25 Jul 2014 |
| 150 | Anthropology Book Project | ils | signs | 2 | 0 | 7616 | 01 Oct 2019 |
| 151 | ASL Bible Books NLT | ase | bible | 11783 | 0 | 17652581 | 10 Oct 2026 |
| 152 | ASL Bible Books Shores Deaf Church | ase | bible | 6544 | 2 | 10227624 | 13 Oct 2026 |
| 153 | Dictionary Vietnam | hab/haf/hos? | dictionary | 647 | 259 | 199630 | 18 Jul 2020 |

### Inferences
- The largest freely dumpable SignWriting dictionaries by entry count are Brazil (Libras, ~70.9k, max id), Korea (KSL, ~67.7k, active `ksldic` editors in Oct 2026), DGS (24.8k), ASL (sgn4 12.3k plus sgn28 Bible dictionary 10.0k and sgn25 LLCN/SignTyp 5.5k), Quebec LSQ (12.1k), Swiss-French LSF-CH (9.9k), VGT (9.0k), LSE (8.5k), Norway NTS (6.5k), Czech (5.9k), DSGS (4.7k), Tunisia (4.5k), Slovenia (3.8k), LSFB (3.5k), Catalan (3.4k), Honduras (3.4k), Paraguay (3.1k) and Malta (2.8k). Counts include duplicates and multiple variants per gloss.
- sgn80 "Project 2 Dictionary Sorting" has the same SPML header as sgn46 (cdt 1301449349, nextid 2308). It is an older copy or subset of the Brazil dictionary and should be deduplicated, not ingested twice.
- 65 puddles hold fewer than 50 entries. For "SignPuddle coverage" purposes, a language present only through a near-empty puddle (e.g. sgn45 Bolivia 7, sgn66 Malaysia 6, sgn85 India 5, sgn90 Turkey 4) should be treated as uncovered.
- Because no per-puddle licence exists, a per-language allowlist row should cite the IETF App. C.1 statement and flag "project-level". For the strongest footing, the Polish 2011 email shows the maintainers grant BY-SA on request (email Slevinski/Sutton, contacts on the portal page).

### Gaps
- No per-puddle licence or contributor-consent statement was found. Whether the "reference material" BY-SA clause covers user-contributed puddle content is **unverified**.
- ISO codes for 21 post-2016 puddles are inferred from puddle names, not from an authoritative API. sgn153 Vietnam is ambiguous (hab/haf/hos).
- The hidden SQLite-only puddles sgn6–sgn10 were not opened (language/licence unverified; names suggest Italian LIS projects).
- **Dead ends (do not re-check):** `/signpuddle2.0/data/spml/` directory listing → 403; `/signpuddle2.0/countries.php` and `searchcountry.php` → stub responses; `signpuddle.com/server/puddle` → "Not Found" (SignPuddle 3 has no puddle index route); `signpuddle.net/country` → 404 JSON; `www.signbank.org/swserver/data/puddle/` and `/signpuddle2.0/data/puddle/` → 404. `signtyp.uconn.edu/signpuddle/` (the old SignTyp puddle) → 404 (the tfds `signtyp` loader needs a PHPSESSID and that endpoint is gone). The current SignTyp site serves YouTube videos for 1,000+ concepts from 20+ countries with no licence statement, so Tier D — [SignTyp](https://signtyp.uconn.edu/)

## Q2. Sign Language Dataset Compendium (Kopf, Schulder, Hanke): every lexical resource row

### Takeaway
The current release is SLDC v1.5.0 (PDF last-modified 2026-01-09). It lists **87 lexical resources** and **43 corpora**, and its language index covers 85 sign languages. By the Compendium's own licence field, only **1 lexical resource is CC BY** (Global Signbank NGT). **7 are BY-SA**: Korean SL Dictionary CC BY-SA 2.0 KR, Ocelles CC BY-SA 2.0 FR, three Wikisigns dictionaries CC BY-SA 4.0, and two dead Wikisign.org sites. **13 are NC or NC-ND**. **48 say "information not available"** (Tier D until verified). SpreadTheSign explicitly forbids reuse.

### Cited Findings
- **Version and citation.** Footer "The Sign Language Dataset Compendium v1.5.0". DOI 10.25592/dgs.sldc; archived PDFs at doi 10.25592/uhhfdm.12016. Cite as: Kopf, M., Schulder, M., & Hanke, T. (2022). The Sign Language Dataset Compendium: Creating an Overview of Digital Linguistic Resources. LREC2022 10th Workshop on the Representation and Processing of Sign Languages, pp. 102–109 — [SLDC start page](https://www.sign-lang.uni-hamburg.de/lr/compendium/). The PDF `signlang_dataset_compendium.pdf` is 1,683,593 bytes, Last-Modified Fri, 09 Jan 2026 — [SLDC PDF](https://www.sign-lang.uni-hamburg.de/lr/compendium/signlang_dataset_compendium.pdf)
- **Index sizes.** The lexical-resources index links 87 entry pages (DOI 10.25592/dgs.sldc-l), the corpora index 43, and the language index 127 entries (85 sign languages + 42 spoken). Several sign languages have Compendium pseudo-codes instead of ISO codes (e.g. `arabicsls`, `belarusiansignlanguage`, `cypriotsignlanguage`, `faroesesignlanguage`, `georgiansignlanguage`, `ivoriansignlanguage`, `slovenesignlanguage`, `jakartasl`, `yogyakartasl`, `australianirishsignlanguage`, `blackamericansignlanguage`, `cameroonsignlanguage`, `extremenorthcameroonsignlanguage`, `dogonsignlanguage`) — [SLDC lexical index](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/index.html); [SLDC language index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html)
- The full table of lexical rows follows. Licence and access are quoted from each SLDC entry's info table, with entry pages at `https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/{slug}.html`. Tier, route and flags are provisional derivations. Overrides verified on the original site in this survey are noted in-cell: Wikisigns video is YouTube, Wikisign.org sites are dead, the ASL-LEX/ISL-LEX OSF conflict, and the SignWiki terms. The SPDX column is best-effort, and jurisdiction ports are flagged.

| SLDC entry | Language(s) [codes as SLDC gives them] | Size (SLDC) | Licence (SLDC, verbatim) | SPDX | Access (SLDC) | Access route | Main URL | Tier (provisional) | commercial_ok | video_redistrib_ok |
|---|---|---|---|---|---|---|---|---|---|---|
| Adamorobe Sign Language Lexicon | Adamorobe Sign Language [ads] | 250 signs | information not available |  | restricted access | none public / email authors | https://hdl.handle.net/1839/00-0000-0000-0016-8A57-F | D (no licence stated) | no | no |
| Algerian Jewish Sign Language Dictionary | Algerian Jewish Sign Language , Hebrew , English [ajs,heb,eng] | 470 signs | information not available |  | Public access via browsable homepage | HTML only | https://signlab.haifa.ac.il/2013/10/15/ajsl-1 | D (no licence stated) | no | no |
| Albanian Sign Language Dictionary | Albanian Sign Language , Albanian [sqk,sqi] | 1040 signs | Download and copying prohibited; individual licence agreement may be possible |  | Public access via browsable homepage | email authors / licence agreement | https://gjshsh.al | C | no | no |
| Asian Signbank | Sri Lankan Sign Language , Jakarta Sign Language , Yogyakarta Sign Language , Japanese Sign Language , Hong Kong Sign Language , Ho Chi Minh City Sign Langua…] | 4750 signs | Asian Signbank licence <http://cslds.org/asiansignbank/> |  | Public access via browsable homepage for 4750 signs Confirmed registration needed for advanced functions and further information Via persona | register (then HTML/export) | http://www.cslds.org/asb/welcome.jsp | C/unverified (custom licence) | no | no |
| ASL-LEX | American Sign Language , English [ase,eng] | 2723 signs | CC BY-NC 4.0 <https://creativecommons.org/licenses/by-nc/4.0/> | CC-BY-NC-4.0 | Public access via browsable homepage, open access to download raw data | direct dump | https://asl-lex.org/ | B (asl-lex.org: CC BY-NC 4.0; sign videos © all rights reserved; NB OSF node zpha4 metadata says CC BY 4.0 — conflict) | no | no |
| ASL Signbank | American Sign Language , English [ase,eng] | 3702 signs | CC BY-NC-SA 4.0 <https://creativecommons.org/licenses/by-nc-sa/4.0/> | CC-BY-NC-SA-4.0 | Public access to 2848 signs via browsable homepage More detailed information and all signs require confirmed registration | register (then HTML/export) | http://aslsignbank.com/ | B | no | no |
| Auslan Signbank | Auslan , English [asf,eng] | 4912 signs | CC BY-NC-ND 4.0 <https://creativecommons.org/licenses/by-nc-nd/4.0/> | CC-BY-NC-ND-4.0 | Public access via browsable homepage, for more detailed information confirmed registration needed | register (then HTML/export) | https://auslan.org.au/ | B (NC-ND: no derivatives) | no | no |
| Boğaziçi University Dictionary | Turkish Sign Language , Turkish [tsm,tur] | 1355 signs and phrases | information not available |  | Public access via browsable homepage | HTML only |  | D (no licence stated) | no | no |
| British Sign Language Glossaries of Curriculum Terms | British Sign Language , English [bfi,eng] | approximately 2000 signs and definitions | information not available |  | Public access via browsable homepage | HTML only | https://www.ssc.education.ed.ac.uk/BSL/ | D (no licence stated) | no | no |
| BSL SignBank | British Sign Language , English [bfi,eng] | 2500 signs | information not available |  | Public access via browsable homepage, for more detailed information confirmed registration needed | register (then HTML/export) | https://bslsignbank.ucl.ac.uk/ | D (no licence stated) | no | no |
| CDPSL: Corpus-based Dictionary of Polish Sign Language | Polish Sign Language , Polish [pso,pol] | 3476 signs with definitions for 6464 meanings. | information not available |  | Public access via browsable homepage | HTML only | https://www.slownikpjm.uw.edu.pl/en | D (no licence stated) | no | no |
| Contemporary Turkish Sign Language Dictionary | Turkish Sign Language , Turkish , English [tsm,tur,eng] | 2000 concepts, 11428 videos of signs, meaning descriptions and usage examples. | information not available |  | Public access via browsable homepage | HTML only | https://tidsozluk.aile.gov.tr/ | D (no licence stated) | no | no |
| CZJ domain specific Lexicon | Czech Sign Language [cse] | 330 signs | information not available |  | Not online available at the time of writing | HTML only |  | D (no licence stated) | no | no |
| DGS Corpus types list | German Sign Language , German , English [gsg,deu,eng] | 14064 types | DGS Corpus license <https://meine-dgs.de/ling/license_en.html> |  | Public access via browsable homepage | HTML only | https://meine-dgs.de/ling/types_en.html | C/unverified (custom licence) | no | no |
| Dicta-Sign Lexicon | British Sign Language , Greek Sign Language , German Sign Language , French Sign Language , English , Greek , German , French [bfi,gss,gsg,fsl,eng,ell,deu,fra] | 1000 signs per language | Individual license agreement for researchers |  | Public access via browsable homepage; some videos temporarily unavailable at the time of writing | email authors / licence agreement | https://www.sign-lang.uni-hamburg.de/dicta-sign/portal/ | C | no | no |
| Dictio | Czech Sign Language , Slovak Sign Language , Austrian Sign Language , American Sign Language , International Sign , Ukrainian Sign Language , Czech , Slovak …] | CZJ Czech Sign Language : 12514 entries SPJ Slovak Sign Language : 4809 entries ÖGS Austrian Sign Language : 3436 entries ASL American Sign Language : 127 en… | information not available |  | Public access via browsable homepage, more content requires confirmed registration; keyword search temporarily unavailable at the time of wr | register (then HTML/export) | https://www.dictio.info/ | D (no licence stated) | no | no |
| Dictionary of new medical sign language terms | Colombian Sign Language , Spanish [csn,spa] | information not available | Open licence |  | Public access via browsable homepage | HTML only | https://diccionariolsc.ces.edu.co/ | unverified (CC variant not named) | no | no |
| DILSE | Spanish Sign Language , Spanish [ssp,spa] | 9000 signs | CC BY-NC-SA 3.0 <https://creativecommons.org/licenses/by-nc-sa/3.0/> | CC-BY-NC-SA-3.0 | Public access via browsable homepage, content can be shared and downloaded | HTML only | https://fundacioncnse-dilse.org/ | B | no | no |
| DIZLIS | Italian Sign Language , Italian [ise,ita] | 1000 signs | Dizlis license <http://www.dizlis.it/web/termini-e-condizioni.html> |  | Public access via browsable homepage | HTML only |  | C/unverified (custom licence) | no | no |
| Swiss German Sign Language Lexicon | Swiss-German Sign Language , German [sgg,deu] | 9000 signs | Individual license agreement may be possible |  | Temporarily unavailable at the time of writing | email authors / licence agreement | https://linguistik-signlang.uzh.ch | C | no | no |
| Danish Sign Language Dictionary | Danish Sign Language , Danish [dsl,dan] | 2000 signs | information not available |  | Public access via browsable homepage | HTML only | https://www.tegnsprog.dk/ | D (no licence stated) | no | no |
| DW-DGS | German Sign Language , German [gsg,deu] | 1113 entries comprising 1524 sign variants | DW-DGS Licence <https://dw-dgs.de/overview/intro.html#lizenz> |  | Public access via browsable homepage | HTML only | https://dw-dgs.de | C/unverified (custom licence) | no | no |
| e-LIS | Italian Sign Language , Italian [ise,ita] | 304 entries for Italian keyword lookup, 301 entries for LIS Italian Sign Language sign parameter lookup. Entries provide lexical form, definition and example… | CC BY-NC-SA 4.0 <https://creativecommons.org/licenses/by-nc-sa/4.0/> | CC-BY-NC-SA-4.0 | The underlying data of the dictionary is available for download. | direct dump | http://hdl.handle.net/20.500.12124/75 | B | no | no |
| Elix | French Sign Language , French [fsl,fra] | 15300 signs | information not available |  | Public access via browsable homepage | HTML only | https://dico.elix-lsf.fr/ | D (no licence stated) | no | no |
| Filoseñando | Colombian Sign Language , Spanish [csn,spa] | 41 terms with 89 videos | information not available |  | Public access to prototype | HTML only |  | D (no licence stated) | no | no |
| Finnish Signbank | Finnish Sign Language , Finland-Swedish Sign Language , Finnish [fse,fss,fin] | 3000 signs | CC BY-NC-SA 4.0 <https://creativecommons.org/licenses/by-nc-sa/4.0/> | CC-BY-NC-SA-4.0 | Public access via browsable homepage | HTML only | https://signbank.csc.fi/ | B | no | no |
| SignWiki Føroyar | Faroese Sign Language , Icelandic [faroesesignlanguage,isl] | 1350 signs | information not available |  | Public access via browsable homepage | HTML only | https://fo.signwiki.org | D (no licence stated; videos are YouTube embeds, verified on na.signwiki.org) | no | no |
| Global Signbank - LSFB | French Belgian Sign Language , French , English [sfb,fra,eng] | 3512 signs | information not available |  | Restricted access | none public / email authors | https://signbank.cls.ru.nl/datasets/LSFB | D (no licence stated) | no | no |
| Global Signbank - NGT | Sign Language of the Netherlands , Dutch , English [dse,nld,eng] | 7348 sign glosses, of which 6478 are public. | CC BY 4.0 <https://creativecommons.org/licenses/by/4.0/> | CC-BY-4.0 | Most signs are public accessible via homepage. Confirmed registered user can access additional data, mainly consisting of name signs and tes | register (then HTML/export) | https://signbank.cls.ru.nl/datasets/NGT | A | yes | yes |
| Global Signbank - NTS | Norwegian Sign Language , Norwegian , English [nsl,nor,eng] | 1946 signs | information not available |  | Restricted access | none public / email authors | https://signbank.cls.ru.nl/datasets/NTS | D (no licence stated) | no | no |
| Global Signbank - VGT | Flemish Sign Language , Dutch , English [vgt,nld,eng] | 16928 signs | information not available |  | Restricted access | none public / email authors | https://signbank.cls.ru.nl/datasets/VGT | D (no licence stated) | no | no |
| Global Signbank - ZEI | Iranian Sign Language , English , Persian [psc,eng,pes] | 221 entries | information not available |  | Restricted access | none public / email authors | https://signbank.cls.ru.nl/datasets/ZEI | D (no licence stated) | no | no |
| Hallatlan Dictionary | Hungarian Sign Language , American Sign Language , Hungarian , English , German , Spanish [hsh,ase,hun,eng,deu,spa] | approximately 1500 signs | information not available |  | Public access via browsable homepage | HTML only | https://www.hallatlan.hu/c/jelek/ | D (no licence stated) | no | no |
| Hong Kong Sign Language Browser | Hong Kong Sign Language , Chinese , English [hks,cmn,eng] | 7346 entries of signs and variants | information not available |  | Public access via browsable homepage to 2022 signs | HTML only | http://www.cslds.org/hkslbrowser/ | D (no licence stated) | no | no |
| Indian Technical Sign Language Dictionary | Indian Sign Language [ins] | 3200 signs | information not available |  | Open access via browsable homepage | HTML only | https://indiansignlanguage.org | D (no licence stated) | no | no |
| INSOR Dictionary | Colombian Sign Language , Spanish [csn,spa] | information not available | Open licence |  | Public access via browsable homepage | HTML only | https://educativo.insor.gov.co/diccionario/ | unverified (CC variant not named) | no | no |
| SignWiki Ísland | Icelandic Sign Language [icl] | 11463 signs | SignWiki license ( Höfundaréttur ) , <https://is.signwiki.org/index.php/SignWiki:Um> |  | Public access via browsable homepage | HTML only | https://is.signwiki.org | D for Marionet (site text: "Efni á SignWiki má nota til kennslu og einkanota" = teaching & private use only; videos YouTube-embedded) | no | no |
| ISL-LEX | Israeli Sign Language , English , Hebrew [isr,eng,heb] | 961 signs | CC BY-NC 4.0 <https://creativecommons.org/licenses/by-nc/4.0/> | CC-BY-NC-4.0 | Public access via browsable homepage | HTML only | https://sites.google.com/view/isl-lex | B (SLDC: CC BY-NC 4.0; NB OSF node jmwyx metadata says CC BY 4.0 — conflict, verify) | no | no |
| ISL Dictionary | Israeli Sign Language , Hebrew , English [isr,heb,eng] | information not available | information not available |  | Public access via browsable homepage | HTML only | https://isl.danfishgold.com | D (no licence stated) | no | no |
| Irish Sign Language STEM Glossary | Irish Sign Language , English [isg,eng] | 710 entries | information not available |  | Public access via browsable homepage | HTML only | https://www.dcu.ie/islstem | D (no licence stated) | no | no |
| Kafr Qasem Sign Language Dictionary | Kafr Qasem Sign Language , Hebrew , English [sqx,heb,eng] | 268 signs | information not available |  | Public access via browsable homepage | HTML only | https://signlab.haifa.ac.il/index.php/component/k2/itemlist/ | D (no licence stated) | no | no |
| Global Signbank - Kata Kolok | Kata Kolok , English , Bali , Indonesian [bqy,eng,ban,ind] | 1312 glosses | information not available |  | access to 103 glosses with confirmed registration | register (then HTML/export) | https://signbank.cls.ru.nl/datasets/Kata | D (no licence stated) | no | no |
| KSL Dictionary | Kenyan Sign Language , English [xki,eng] | 8926 signs and phrases | information not available |  | Public access via browsable homepage and mobile application | HTML only | https://www.ksldictionary.com/ | D (no licence stated) | no | no |
| Korean Sign Language Dictionary | Korean Sign Language , Korean [kvk,kor] | 3500 signs | CC BY-SA 2.0 KR <https://creativecommons.org/licenses/by-sa/2.0/kr/deed.en> | CC-BY-SA-2.0-KR (jurisdiction port; check SPDX list) | Public access via browsable homepage | HTML only | https://sldict.korean.go.kr/ | A (verify media hosting) | yes | check per-item hosting |
| Krousar Thmey Dictionary | Cambodian Sign Language , English , French , Khmer [csx,eng,fra,khm] | 129 signs | information not available |  | Public access via browsable homepage | HTML only | http://ijs.92.dico.free.fr/dictionnaire_langue_signes_sign_language_khmer_cambodge/english/index.html | D (no licence stated) | no | no |
| LedaSila | Austrian Sign Language , German [asq,deu] | 17400 signs | Creative Commons (unspecified) |  | Public access via browsable homepage | HTML only | https://ledasila.aau.at | unverified (CC variant not named) | no | no |
| Dictionary of LESCO | Costa Rican Sign Language , Spanish [csr,spa] | 1041 signs | BY-NC-SA |  | Public access via browsable homepage | HTML only | https://lesco.cenarec.go.cr/index.php/diccionariolesco | B | no | no |
| LeSiCo | Colombian Sign Language [csn] | 1980 signs annotated, 16.5 hours recorded | Open licensed, citation required |  | For registered users | register (then HTML/export) |  | unverified (CC variant not named) | no | no |
| Lex-LSFB | French Belgian Sign Language , French [sfb,fra] | information not available | CC BY-NC-SA 4.0 <https://creativecommons.org/licenses/by-nc-sa/4.0/> | CC-BY-NC-SA-4.0 | Public access via browsable homepage | HTML only | https://www.corpus-lsfb.be/lexique.php | B | no | no |
| LSE-Sign | Spanish Sign Language , Spanish [ssp,spa] | 2400 signs and 2700 non-signs | LSE-Sign license <http://lse-sign.bcbl.eu/web-busqueda/?page_id=8> |  | Restricted access requires confirmed registration | register (then HTML/export) | http://lse-sign.bcbl.eu/web-busqueda/ | C/unverified (custom licence) | no | no |
| LSFB en ligne | French Belgian Sign Language , French [sfb,fra] | 4000 signs | information not available |  | Public access via browsable homepage | HTML only | http://dicto.lsfb.be/ | D (no licence stated) | no | no |
| NOEMA | Greek Sign Language , Greek [gss,ell] | 3000 signs | information not available |  | Restricted access requires individual license agreement | none public / email authors | https://sign.ilsp.gr/signilsp-site/index.php/el/noima/ | D (no licence stated) | no | no |
| Norsk Tegnordbok | Norwegian Sign Language , Norwegian [nsl,nor] | 6500 signs | information not available |  | Public access via browsable homepage | HTML only | https://www.tegnordbok.no | D (no licence stated) | no | no |
| New Zealand Sign Language Online Dictionary | New Zealand Sign Language [nzs] | approximately 4500 signs | CC BY-NC-SA 4.0 <https://creativecommons.org/licenses/by-nc-sa/4.0/> | CC-BY-NC-SA-4.0 | Public access via browsable homepage and free apps | HTML only | https://www.nzsl.nz/ | B | no | no |
| Ocelles | French Sign Language , French [fsl,fra] | information not available | CC BY-SA 2.0 FR <https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en> | CC-BY-SA-2.0-FR (jurisdiction port; check SPDX list) | Public access via browsable homepage | HTML only | http://www.ocelles.fr | A (verify media hosting) | yes | check per-item hosting |
| POLYTROPON Lexicon | Greek Sign Language , Greek [gss,ell] | 8616 signs | Individual license agreement may be possible |  | Not available online at the time of writing | email authors / licence agreement |  | C | no | no |
| The Database of Lexical Variation in Russian Sign Language | Russian Sign Language , Russian [rsl,rus] | more than 19000 signs | The Database of Lexical Variation in Russian Sign Language Licence <https://rsl-research-explore.garagemca.org> |  | Public access via browsable homepage | HTML only | https://rsl-research-explore.garagemca.org/ | C/unverified (custom licence) | no | no |
| sematos | Catalan Sign Language , Spanish Sign Language , French Sign Language , International Sign , German Sign Language , Spanish , French , English , German [csc,s…] | 297 LSC Catalan Sign Language signs, 6076 LSE Spanish Sign Language signs, 3605 LSF French Sign Language signs, 440 IS International Sign signs, unknown numb… | information not available |  | Public access via browsable homepage; DGS dataset temporarily unavailable at the time of writing | none public / email authors | http://www.sematos.eu | D (no licence stated) | no | no |
| Señario de términos y expresiones básicas en la Lengua de Señas Argentina | Argentine Sign Language , Spanish [aed,spa] | 230 signs in Volume 1 600 signs in Volume 2 and 3 | information not available |  | Open access after filling a form | HTML only | https://cas.org.ar/senario-de-terminos-y-expresiones-en-lengua-de-senas-argentina/ | D (no licence stated) | no | no |
| SGB-FSS Lexicon | Swiss-German Sign Language , Italian Sign Language , French Sign Language , German , Italian , French [sgg,ise,fsl,deu,ita,fra] | information not available | Restricted access requires individual license agreement |  | Public access via browsable homepage | email authors / licence agreement | https://www.sgb-fss.ch/signsuisse/ | B (NC-ND: no derivatives) | no | no |
| Sign2MINT | German Sign Language , German [gsg,deu] | 5263 signs | CC BY-NC-SA 3.0 DE <https://creativecommons.org/licenses/by-nc-sa/3.0/de/deed.en> | CC-BY-NC-SA-3.0-DE (jurisdiction port; check SPDX list) | Public access via browsable homepage | HTML only | https://sign2mint.de/ | B | no | no |
| SignaMed | Spanish Sign Language , Spanish [ssp,spa] | 373 reference signs corresponding to 312 health terms, plus 273 definitions and 120 usage examples in LSE Spanish Sign Language . | information not available |  | The dictionary and its search feature are publicly accessible. A free user account must be created to access some features, such as bookmark | HTML only | https://signamed.uvigo.es/ | D (no licence stated) | no | no |
| Signbank da Libras | Libras , Portuguese [bzs,por] | 3118 signs | Creative Commons |  | Public access via browsable homepage | HTML only | https://signbank.libras.ufsc.br | unverified (CC variant not named) | no | no |
| SignStudy | American Sign Language , English [ase,eng] | 4500 signs | information not available |  | Temporarily unavailable at the time of writing | none public / email authors | http://www.signstudy.org/ | D (no licence stated) | no | no |
| SignWiki Finland | Finland-Swedish Sign Language , Swedish [fss,swe] | 3035 signs | information not available |  | Public access via browsable homepage | HTML only | https://finssl.signwiki.org | D (no licence stated; videos are YouTube embeds, verified on na.signwiki.org) | no | no |
| SignWiki Georgia | Georgian Sign Language , Georgian [georgiansignlanguage,kat] | 8296 entries | information not available |  | Public access browsable homepage | HTML only | https://ge.signwiki.org | D (no licence stated; videos are YouTube embeds, verified on na.signwiki.org) | no | no |
| SignWiki Namibia | Namibian Sign Languag , English [nbs,eng] | 1979 signs | information not available |  | Public access via browsable homepage | HTML only | https://na.signwiki.org | D (no licence stated; videos are YouTube embeds, verified on na.signwiki.org) | no | no |
| SignWiki Suomi | Finnish Sign Language , Finnish [fse,fin] | 6191 signs | information not available |  | Public access via browsable homepage | HTML only | https://finsl.signwiki.org | D (no licence stated; videos are YouTube embeds, verified on na.signwiki.org) | no | no |
| SignWiki Tanzania | Tanzanian Sign Language , Kisuaheli [tza,swh] | 2194 signs | information not available |  | Public access via browsable homepage | HTML only | https://tz.signwiki.org | D (no licence stated; videos are YouTube embeds, verified on na.signwiki.org) | no | no |
| Slovar SZJ | Slovene Sign Language , Slovene [slovenesignlanguage,slv] | information not available | information not available |  | Public access via browsable homepage | HTML only | https://www.szj.si/ | D (no licence stated) | no | no |
| GLex | German Sign Language , German , English [gsg,deu,eng] | 2330 signs | information not available |  | Public access via browsable homepage | HTML only | https://www.sign-lang.uni-hamburg.de/glex/ | D (no licence stated) | no | no |
| HLex | German Sign Language , German [gsg,deu] | 1560 signs | information not available |  | Temporarily unavailable at the time of writing | none public / email authors | https://www.sign-lang.uni-hamburg.de/hlex/ | D (no licence stated) | no | no |
| GaLex | German Sign Language , German , English [gsg,deu,eng] | 710 signs | information not available |  | Public access via browsable homepage | HTML only | https://www.sign-lang.uni-hamburg.de/galex/ | D (no licence stated) | no | no |
| TLex | German Sign Language , German [gsg,deu] | 2800 signs | information not available |  | Temporarily unavailable at the time of writing | none public / email authors |  | D (no licence stated) | no | no |
| PLex | German Sign Language , German [gsg,deu] | 1270 signs | information not available |  | Temporarily unavailable at the time of writing | none public / email authors | https://www.sign-lang.uni-hamburg.de/projekte/plex/start.htm | D (no licence stated) | no | no |
| SLex | German Sign Language , German , English [gsg,deu,eng] | 940 signs | information not available |  | Temporarily unavailable at the time of writing | none public / email authors | https://www.sign-lang.uni-hamburg.de/slex/ | D (no licence stated) | no | no |
| SpreadTheSign | Arabic Sign Languages , Belarusian Sign Language , Bulgarian Sign Language , Chinese Sign Language , Croatian Sign Language , Czech Sign Language , Danish Si…] | 8804 word/sign pairs for Arabic Sign Languages (ArSLs) 14307 word/sign pairs for Belarusian Sign Language 13948 word/sign pairs for Bulgarian Sign Language 1… | SpreadTheSign licence Download or use of videos and data without explicit permission, including for research, is prohibited. <https://www.spreadthesign.com/en.gb/about/> |  | Public access via browsable homepage | HTML only | https://www.spreadthesign.com | D (forbidden) | no | no |
| Swedish Sign Language Dictionary | Swedish Sign Language , Swedish [swl,swe] | 19149 signs | CC BY-NC-SA 4.0 <https://creativecommons.org/licenses/by-nc-sa/4.0/> | CC-BY-NC-SA-4.0 | Public access via browsable homepage | HTML only | https://teckensprakslexikon.su.se/ | B | no | no |
| SUVI or Basic Dictionary of FinSL | Finnish Sign Language , Finnish [fse,fin] | 1211 signs | information not available |  | Public access via browsable homepage | HTML only | https://suvi.viittomat.net/ | D (no licence stated) | no | no |
| TegnWiki Norge | Norwegian Sign Language , Norwegian [nsl,nor] | 1237 signs | information not available |  | Public access via browsable homepage | HTML only | https://www.tegnwiki.no | D (no licence stated; videos are YouTube embeds, verified on na.signwiki.org) | no | no |
| Tree of Life Foundation Glossary | Colombian Sign Language [csn] | 228 signs | Open licence |  | Public access via browsable homepage (youtube) | HTML only | https://www.youtube.com/channel/UCCvTtbSfbWAc8gVfg-ZcAYg/videos | unverified (CC variant not named) | no | no |
| Woordenboek Vlaamse Gebarentaal | Flemish Sign Language , Dutch [vgt,nld] | 10000 entries | information not available |  | Public access via browsable homepage | HTML only | https://woordenboek.vlaamsegebarentaal.be | D (no licence stated) | no | no |
| Wikisign LSC | Catalan Sign Language [csc] | 1200 signs | CC BY-SA 2.0 ES <https://creativecommons.org/licenses/by-sa/2.0/es/deed.en> | CC-BY-SA-2.0-ES (jurisdiction port; check SPDX list) | Public access via browsable homepage | HTML only | http://lsc.wikisign.org | D (site dead: lsc.wikisign.org returns "not configured"; lsci 404) | — | — |
| Wikisign LSCI | Ivorian Sign Language , French [ivoriansignlanguage,fra] | 438 signs | CC BY-SA 3.0 FR <https://creativecommons.org/licenses/by-sa/3.0/fr/deed.en> | CC-BY-SA-3.0-FR (jurisdiction port; check SPDX list) | Public access via browsable homepage | HTML only | http://lsci.wikisign.org/wiki/Wikisign:Accueil | D (site dead: lsc.wikisign.org returns "not configured"; lsci 404) | — | — |
| Wikisigns Langue de Signes Malagasy | Malagasy Sign Language , Malagasy [mzc,mlg] | 1314 signs | CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0/> | CC-BY-SA-4.0 | Public access via browsable homepage | HTML only | http://www.wikisigns.org/list/madagascar/malagasy | A for text/metadata; D for video (sign videos are YouTube embeds, verified on wikisigns.org/es/lsm) | text yes / video no | no |
| Wikisigns Lengua de Señas Mexicana | Mexican Sign Language , Spanish [mfs,spa] | 2178 signs | CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0/> | CC-BY-SA-4.0 | Public access via browsable homepage | HTML only | http://www.wikisigns.org/list/es/lsm | A for text/metadata; D for video (sign videos are YouTube embeds, verified on wikisigns.org/es/lsm) | text yes / video no | no |
| Wikisigns West Bengal Sign Language | West Bengal Sign Language , Bengali [wbs,ben] | 170 signs | CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0/> | CC-BY-SA-4.0 | Public access via browsable homepage | HTML only | http://www.wikisigns.org/list/bn/wbsl | A for text/metadata; D for video (sign videos are YouTube embeds, verified on wikisigns.org/es/lsm) | text yes / video no | no |

- **Corpora rows (continuous video; mostly not lexical dumps).** 43 entries. Licences per SLDC. Openly licensed ones relevant as sources of citation-form clips: **BSL Corpus**, "CC BY-SA 4.0 (for narrative and lexical elicitation data) User license (for conversation and interview data)", which makes the lexical-elicitation subset a Tier A candidate. **Catalan Sign Language Corpus**, "CC BY 4.0 … Direct download available for videos in public access and their ELAN annotation files, as well as a gloss list" (Tier A candidate, csc). **PJM Corpus**, "CC BY-SA 4.0 … Open access to a part of the recordings". Then NC: Corpus NGT (videos CC BY-NC-SA 3.0 NL), Corpus VGT (CC BY-NC-SA 3.0), LSFB corpus, CFinSL, SSL corpus, Dicta-Sign-LSF-v2, Polytropon, LESCO corpus, LIS corpus. ND: CREAGEST, ECHO. Custom: DGS Corpus licence, HKSL corpus licence, JSL Colloquial, RSL corpus licence, MEDIAPI-SKEL. The rest are "information not available" or restricted (Adamorobe, Auslan Corpus, AISL, BASL, Cameroon, Côte d'Ivoire, Dogon, DTS, Giving Cognition a Hand, HSL, Inuit, IPROSLA, Kata Kolok, KSL corpus, Malian LaSiMa, Mardin, SIGNOR, Signs of Ireland, VIDI, Visibase, ZEI, CORLSE, Dicta-Sign-GSL-v2) — [SLDC corpora index](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/index.html)
- **Pointers to other catalogues** in SLDC "More": sign-lang@LREC Anthology; CLARIN Sign Language Resources; Sign Language Processing (Moryossef & Goldberg), described as "a table of 47 datasets (as of March 2025)"; African Sign Language Resource Center (profiles for 54 countries); Hartzell (2022) Egyptian minority-language resources (doi 10.5281/zenodo.6385150); Sign Language Corpora Survey (doi 10.25592/uhhfdm.9893); TLA; ELAR; OLAC; CLARIN VLO; Meta-Share; ELG; LRE Map — [SLDC More](https://www.sign-lang.uni-hamburg.de/lr/compendium/more.html)

### Inferences
- For Marionet's Tier-A pool, the Compendium adds three Tier-A lexical candidates beyond what is already allowlisted: **Korean SL Dictionary (sldict.korean.go.kr, CC BY-SA 2.0 KR, 3,500 signs)**, **Ocelles (LSF, CC BY-SA 2.0 FR)**, and the **Catalan SL Corpus gloss list + public videos (CC BY 4.0)**. Each needs per-site verification of media hosting and of the licence notice on the original page.
- 48 of 87 lexical rows lack any licence in the Compendium. These are the biggest pool of "ask the authors" (Tier C) outreach targets. Prominent examples: BSL SignBank, Elix (15.3k), DTS dictionary, VGT dictionary (10k), Norsk Tegnordbok (6.5k), KSL Dictionary Kenya (8.9k), HKSL browser (7.3k), Contemporary TİD dictionary (11.4k videos), CDPSL (PJM, HamNoSys), the DGS specialist dictionaries (HamNoSys), and the SignWikis.
- Several SLDC licence cells are vague ("Creative Commons (unspecified)" for LedaSila 17.4k; "Creative Commons" for Signbank da Libras; "Open licence" for the Colombian resources; "BY-NC-SA" without version for LESCO). Their tier depends on reading the original page.

### Gaps
- Licences in the table are as recorded by SLDC, often with SLDC's own access dates of 2022–2025. Only the rows flagged in-cell were re-verified on the original site in this survey. All others are **unverified at source** and are left for the per-language researchers.
- The SLDC PDF (1.7 MB) was not parsed. The HTML entries were used, and they correspond to the same v1.5.0 data.

## Q3. SignLanguage-Dataset-Hub (github rudra496/SignLanguage-Dataset-Hub)

### Takeaway
The Hub is a small, unreliable aggregator: 66 catalog rows, ~29 language labels, ASL-heavy. Its licence labels are frequently wrong (e.g. WLASL "CC BY 4.0", ASL-LEX "CC BY 4.0", AUTSL "CC BY 4.0"). At least 16 of its source URLs are dead, and three of its Hugging Face links point to non-existent repos. Its only bundled data ("BdSL-Sensor-Glove") is **synthetic**, generated by a script that claims output "indistinguishable from real sensor recordings". It should be used only as a pointer list, never as a licence source. Tier D as a source.

### Cited Findings
- Repo metadata: description "Curated collection of sign language datasets for ML research", repo licence CC-BY-4.0, updated 2026-10-12, 7 stars. Catalog file `datasets_catalog.csv` has 66 rows with fields dataset_id, name, language, language_code, modality, samples, signers, license, source_url, citation_key, notes — [rudra496/SignLanguage-Dataset-Hub](https://github.com/rudra496/SignLanguage-Dataset-Hub)
- **Languages in the catalog**, by row count: ASL 13, Multilingual 6, Bangla 4, BSL 4, DGS 4, Indian SL 4, Chinese SL 3, then 2 each for Turkish, Arabic, Libras, LSF, JSL and RSL, and 1 each for Auslan, NGT, GSL (Greek), Irish, LIS, KSL (Korean), Malaysian, LSM, Swedish, Thai, Nigerian, Pakistani, Ghanaian, "Marathi" (sic), Argentine and VGT — [datasets_catalog.csv](https://github.com/rudra496/SignLanguage-Dataset-Hub/blob/HEAD/datasets_catalog.csv)
- **Wrong licence labels, checked against primaries.** WLASL is labelled "CC BY 4.0", but sign.mt and the WLASL repo give C-UDA 1.0 ([sign.mt WLASL JSON](https://github.com/sign-language-processing/sign-language-processing.github.io/tree/master/src/datasets)). ASL-LEX is labelled "CC BY 4.0", but asl-lex.org says "licensed under a Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)" ([ASL-LEX download](https://asl-lex.org/download.html)). AUTSL is labelled "CC BY 4.0", but sign.mt says "Codalab" competition terms. ASL Citizen is labelled "CC BY 4.0" (unverified at primary; the Hub URL aslcitizen.org did not resolve). KArSL-502 is described as "Kuwaiti Arabic Sign Language" at `huggingface.co/datasets/karlsruhe-nerdstation/karSL-502`, which returns HTTP 401 (non-existent repo) — [Hub catalog](https://github.com/rudra496/SignLanguage-Dataset-Hub/blob/HEAD/datasets_catalog.csv)
- **Synthetic data.** `data/bdsl/BdSL-Sensor-Glove/README.md`: "This is DEMO/SAMPLE data … Not collected from real participants". `tools/generate_realistic_data.py`: "Generate realistic sensor data … The generated data is indistinguishable from real sensor recordings." The catalog nonetheless lists it as "BDSL-SEN-001 … 4824 … 18 [signers] … CC BY 4.0" — [Hub BdSL README](https://github.com/rudra496/SignLanguage-Dataset-Hub/tree/HEAD/data/bdsl/BdSL-Sensor-Glove); [generate_realistic_data.py](https://github.com/rudra496/SignLanguage-Dataset-Hub/blob/HEAD/tools/generate_realistic_data.py)
- **URL resolution test** (curl -L, 2026-10-14). Dead or non-resolving:
  - DNS/connection failure: islc.ie, aslcitizen.org, lsf-dict.fr, sign-language-processing.com.
  - 404: kaggle ahmedkhan123/arabic-sign-language, kaggle kurohana/lsa64, kaggle debashishsau/asl-fingerspelling, russian-sign-language.github.io, github AZaslavsky/signbd, github turkuth/bosphorussign, uantwerpen.be …/vgt-corpus/, nii.ac.jp/digital-typography/shinra/ ("Shinra ASL"), bristol.ac.uk/sign-language/research/data/ ("Bristol ASL"), ling.su.se/ssl/, inf.ufpr.br/lesoliveira/libras/, ru.nl/cngt/.
  - HTTP 401 (non-existent HF repos): karlsruhe-nerdstation/karSL-502, nodtcotai/tsl-51, sayedeh/Malaysian-Sign-Language-Dataset.
  - 403: microsoft.com ms-asl, sign-hub.eu, zenodo 7067906 (rate-limit), so not judged.
  - Measured in this survey.

### Inferences
- Rows such as "Shinra ASL" (JSL at nii.ac.jp), "Bristol ASL" (BSL), "SignBD" (AZaslavsky), "LSF-Dict" and "J-ASL" look fabricated or hallucinated. Combined with the synthetic sensor data, the whole Hub should be treated as unverified. It adds no languages beyond what SLDC and sign.mt cover, apart from image or fingerspelling sets (Thai TSL-51, Marathi, Pakistani PSL landmarks) that are not lexical.

### Gaps
- The Hub's DATASETS.md (27 KB) and REFERENCES.md were not row-checked; only the CSV catalog was. Licences of the surviving HF/Kaggle links in the Hub are covered under Q7.

## Q4. Global Signbank and other Signbank installations

### Takeaway
Global Signbank (signbank.cls.ru.nl) hosts at least 13 datasets. Only **3 are public**: **NGT** (6,862 public of 7,469 glosses, **CC BY 4.0**, Tier A, already allowlisted), **Kata Kolok** (182 public of 1,312, no licence text, so Tier C/D), and **EmblemsNL** (gestures, not a sign language: descriptions CC BY-NC-SA 4.0, video by consultation). The other 10 (LSFB, NTS, VGT, ZEI, ASL shadow copy, Israeli SL, TSL, KSL, JSL, LSC) are explicitly closed. Separately, 8 other live Signbank-software installs were confirmed by URL. Their licences are listed where seen and are left for others to verify.

### Cited Findings
- **Available datasets** (anonymous view): "EmblemsNL | Dutch, English | 124 | 124"; "Kata Kolok | Balinese, Indonesian, English | 1312 | 182"; "NGT | Nederlandse Gebarentaal | Dutch, English | 7469 | 6862" — [Global Signbank available datasets](https://signbank.cls.ru.nl/datasets/available/)
- **NGT conditions**: "A Creative Commons BY 4.0 International license applies to all accessible lexical items. Only name signs and test items have not been made accessible to unregistered users. Example sentences from the Corpus NGT … have a stricter license: CC BY-NC-SA-4.0". Copyright "(c) Radboud University & University of Amsterdam, 2025". Release 1 (2020) ISLRN 976-021-358-388-6, DOI 10.13140/RG.2.1.2839.1446. Release 2 (2025) is from the University of Amsterdam — [GSB NGT](https://signbank.cls.ru.nl/datasets/NGT)
- **Kata Kolok (bqy)**: "Conditions for data citation and usage" field is empty; reference "Lutzenberger, H. (2020). Kata Kolok Dataset in Global Signbank" — [GSB Kata Kolok](https://signbank.cls.ru.nl/datasets/Kata%20Kolok)
- **EmblemsNL**: "Description of the signs: Creative Commons BY-NC-SA 4.0. Videos and images: only to be used after consultation with Onno Crasborn." — [GSB EmblemsNL](https://signbank.cls.ru.nl/datasets/EmblemsNL)
- **Closed datasets**, all "0 public glosses":
  - **LSFB** (3,512 total; "LSFB data from Namur enriched by VICI project"; no conditions) — [GSB LSFB](https://signbank.cls.ru.nl/datasets/LSFB)
  - **NTS** (1,946; "(c) 2020, NTNU") — [GSB NTS](https://signbank.cls.ru.nl/datasets/NTS)
  - **VGT** (16,928; "Not available to users outside Radboud University or Vlaams Gebarentaal Centrum. … Data owned by VGTC") — [GSB VGT](https://signbank.cls.ru.nl/datasets/VGT)
  - **ZEI** (221; Iranian SL from the ELDP project "Western ZEI: Iranian Sign Language in Kermanshah") — [GSB ZEI](https://signbank.cls.ru.nl/datasets/ZEI)
  - **ASL** (3,105; "A shadow copy of the ASL Signbank as it was on 3 March 2019 … Not available for sharing") — [GSB ASL](https://signbank.cls.ru.nl/datasets/ASL)
  - **ISL** Israeli (2,279; "Not accessible to others at this stage") — [GSB ISL](https://signbank.cls.ru.nl/datasets/ISL)
  - **TSL** Taiwan (180), **KSL** Korean (119) and **JSL** (203), all Keiko Sagara/Minpaku historical datasets: "No access for other researchers at this time" — [GSB TSL](https://signbank.cls.ru.nl/datasets/TSL), [GSB KSL](https://signbank.cls.ru.nl/datasets/KSL), [GSB JSL](https://signbank.cls.ru.nl/datasets/JSL)
  - **LSC** Catalan (124; "Temporary dataset … until the Catalan Signbank has been set up later in 2022 … no external use possible") — [GSB LSC](https://signbank.cls.ru.nl/datasets/LSC)
- **Site terms**: "Different licenses apply to access to each dataset in Global Signbank … The Global Signbank source code is licensed under a BSD 3-clause". Conditions of Use: "Any data on the site is confidential unless stated otherwise … The user agrees to not copy or spread any data or information found on the site, unless given permission or if the license allows it." — [GSB Copyright](https://signbank.cls.ru.nl/about/copyright/); [GSB Conditions](https://signbank.cls.ru.nl/about/conditions/)
- **Other Signbank installs confirmed live** (HTTP 200 on 2026-10-14):
  - **Auslan Signbank** `https://auslan.org.au/`: footer "This Signbank is licensed under Creative Commons BY-NC-ND 4.0" — [Auslan Signbank](https://auslan.org.au/about/license/)
  - **BSL SignBank** `https://bslsignbank.ucl.ac.uk/`: no licence text on the home page — [BSL SignBank](https://bslsignbank.ucl.ac.uk/)
  - **ASL Signbank** `https://aslsignbank.com/`: has a Copyright page; SLDC records CC BY-NC-SA 4.0. The old `aslsignbank.haskins.yale.edu` does not resolve — [ASL Signbank](https://aslsignbank.com/)
  - **Suomen (Finnish) Signbank** `https://signbank.csc.fi/`: "Suomen Signbank -tietokantaan tallennetut videot ovat käytettävissä Creative Commons BY-NC-SA-lisenssin mukaisesti" (CC BY-NC-SA 4.0); it currently holds three corpus lexicons — [Suomen Signbank](https://signbank.csc.fi/)
  - **NZSL Signbank** `https://signbank.nzsl.nz/` (backend of nzsl.nz) — [NZSL Signbank](https://signbank.nzsl.nz/)
  - **Signbank da Libras** `https://signbank.libras.ufsc.br/pt` — [Signbank Libras](https://signbank.libras.ufsc.br/pt)
  - **Asian SignBank** `http://cslds.org/asiansignbank/` (CUHK) — [Asian SignBank](http://cslds.org/asiansignbank/)
  - **Lex-LSFB** `https://www.corpus-lsfb.be/lexique.php` (not Signbank code; SLDC: CC BY-NC-SA 4.0) — [Lex-LSFB](https://www.corpus-lsfb.be/lexique.php)
  - Non-Signbank national portals listed in SLDC: Svenskt teckenspråkslexikon (CC BY-NC-SA 4.0 per SLDC), VGT woordenboek, Catalan portal lsc.iec.cat (live; no licence on home page) — [lsc.iec.cat](https://lsc.iec.cat/)

### Inferences
- The only Tier-A Signbank content anywhere in this survey is Global Signbank NGT. Every other Signbank with a stated licence is NC: Auslan NC-ND, Finnish/ASL/NZSL NC-SA. Those rows belong in Tier B, and Auslan's ND additionally blocks derived clips.
- Global Signbank's Kata Kolok public subset (182 glosses) carries no licence text. Marionet needs a permission email (Connie de Vos / Hannah Lutzenberger) before any use, which makes it Tier C.

### Gaps
- No public Global Signbank listing of *all* dataset acronyms exists. 13 were found by probing likely acronyms (others may exist, e.g. under different acronyms).
- **Dead ends (do not re-check):** `signbank.science.ru.nl` (old host; no response); `aslsignbank.haskins.yale.edu` (no response); guessed hosts `signbank.iec.cat`, `signbank.ie`, `islsignbank.ie`, `signbank.ilsp.gr`, `isl-signbank.biu.ac.il`, `signbank.lsfb.be`, `ngt.signbank.nl` (no DNS or response). Global Signbank acronyms returning 404: BSL, LSE, LIS, DGS, Libras, TID, SgSL, GSL, HKSL, AISL, Strokes, LSA, CSL, SSL, GSE, IPSL, Auslan, NZSL.

## Q5. Wikisigns and SignWiki instances (and the older Wikisign.org)

### Takeaway
**Wikisigns** hosts 10 dictionaries with 4,029 signs in total, under a site-wide "Creative Commons Attribution-ShareAlike 4.0 International License" footer. The sign videos are **YouTube embeds**, so text and metadata are Tier A but the video is Tier D. **SignWiki** (SHH Iceland, MediaWiki 1.43.8) has 8 live instances: Iceland, Faroe, Finland-Swedish, Finnish, Georgia, Namibia, Tanzania and Norway. None declares a licence in MediaWiki rightsinfo, the Icelandic terms say "teaching and private use", and videos are YouTube embeds, so Tier D. **Wikisign.org** (LSC, LSCI) is dead.

### Cited Findings
- **Wikisigns statistics page**: "Lengua de Señas Mexicana 2,178; Langue de Signes Malagasy 1,314; West Bengal Sign Language 170; Ελληνική νοηματική γλώσσα 100; Lengua de Señas Uruguaya 85; Kenyan Sign Language 72; Lingua de Sinais de Mocambique 44; LIBRAS - Língua Brasileira de Sinais 32; Lengua de Señas de Guatemala 21; Guyana Sign Language 13; Total: 4029". Footer: "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License" — [Wikisigns statistics](https://www.wikisigns.org/statistics)
- **Dictionary list URLs**: /list/es/lsm, /list/madagascar/malagasy, /list/gr/gsl, /portugues/libras-brasil/, /portugues/mozambique, /list/bn/wbsl, /list/es/lsg, /english/guyana, /kenya, /list/uruguay. Launched 2014 by Cátedra Telefónica ULPGC ("Wikisigns was launched in 2014 …") — [Wikisigns](https://www.wikisigns.org/); [What is wikisigns](https://www.wikisigns.org/content/wikisigns-sign-language-dictionaries-world)
- **Video hosting**: the sign page `/es/lsm/águila` embeds `youtube.com/embed/fXTnCrb5_JM`, and the LSM list page embeds YouTube players — [Wikisigns LSM águila](https://www.wikisigns.org/es/lsm/%C3%A1guila)
- **SignWiki instances** found via MediaWiki API `siteinfo`. All have `"rightsinfo":{"url":"","text":""}`:
  - `is.signwiki.org`: 12,317 articles, 16,982 files
  - `fo.signwiki.org`: 3,738 articles
  - `finssl.signwiki.org`: 4,221
  - `finsl.signwiki.org`: 7,855
  - `ge.signwiki.org`: 8,463 articles, 11 files
  - `na.signwiki.org`: 2,138
  - `tz.signwiki.org`: 2,217
  - `no.signwiki.org`: 1,435 articles, 28 files
  - Probed and not found: ke, ug, mw, zm, gh, et, rw, ls, bw, mz, sz, zw, ss, so, sd, er, ma, np, lk, bd, in, pk, vn, kh, la, mm, th, id, ph, mn, al, xk, mk, ba, me, rs, ee, lv, lt, ua, by, md, am, az, kz, uz, kg, tj, tm, sw, sv, dk, de, en, www
  - Source: [is.signwiki.org API](https://is.signwiki.org/api.php?action=query&meta=siteinfo&siprop=general|rightsinfo|statistics&format=json)
- **Icelandic terms** ("Höfundaréttur"): "Efni á SignWiki má nota til kennslu og einkanota. SignWiki notar myndir sem aðrir hafa gert aðgengilegt undir 'Creative Commons' leyfi. Efni sem hlaðið er inn á SignWiki er öllum leyfilegt að nýta, en vitna skal í uppruna þess." In English: content may be used for teaching and private use; uploaded content may be used by all with attribution. Ambiguous and not a CC licence — [SignWiki:Um](https://is.signwiki.org/index.php/SignWiki:Um)
- **Namibia and Tanzania**: the About pages describe CCDS/SHH and UDSM/UiO/AMUCTA/SHH collaborations, with no licence. `SignWiki:Terms_of_Service` on na has "no text in this page" — [na SignWiki About](https://na.signwiki.org/index.php/SignWiki:About); [tz SignWiki About](https://tz.signwiki.org/index.php/SignWiki:About)
- **SignWiki video hosting**: a Namibia page embeds `youtube-nocookie.com/embed/uGNY37vsecw` — [na.signwiki.org/index.php/Hello](https://na.signwiki.org/index.php/Hello)
- **Wikisign.org**: `lsc.wikisign.org` and `lsf.wikisign.org` return `<html><body>not configured</body></html>`. lsci, lse, lsm, lsa, lsb, asl, lgp, libras, lis, dgs, ssr and lsfb subdomains return 404. The Compendium still lists LSC (1,200 signs, CC BY-SA 2.0 ES) and LSCI (438, CC BY-SA 3.0 FR) — [lsc.wikisign.org](http://lsc.wikisign.org/); [SLDC Wikisign LSC](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/wikisignlsc.html)

#### Records
| language(s) + ISO | source | URL | type | size | licence (verbatim) | SPDX | tier | access route | commercial_ok | video_redistrib_ok | approx disk | citation |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| mfs, mzc, wbs, gss, ugy, xki, mzy, bzs, gsm, Guyana SL (no ISO) | Wikisigns | https://www.wikisigns.org/ | isolated-video (YouTube) + gloss list | 4,029 signs | "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License" | CC-BY-SA-4.0 | A (text/gloss lists) / D (video: YouTube) | HTML only | text yes | no | <5 MB text | Wikisigns, Cátedra Telefónica ULPGC (2014–) |
| icl, Faroese (no ISO), fss, fse, Georgian (no ISO), nbs, tza, nsl | SignWiki (SHH) | https://{is,fo,finssl,finsl,ge,na,tz,no}.signwiki.org | isolated-video (YouTube) + MediaWiki pages | 1.4k–12.3k articles per wiki | none declared; Iceland: "Efni á SignWiki má nota til kennslu og einkanota" | — | D | HTML / MediaWiki API (text only) | no | no | n/a | SignWiki, Samskiptamiðstöð heyrnarlausra og heyrnarskertra |
| csc, LSCI (no ISO) | Wikisign.org | http://lsc.wikisign.org | — | — | (SLDC) CC BY-SA 2.0 ES / 3.0 FR | — | D (dead) | none | — | — | — | — |

### Inferences
- The Wikisigns allowlist row (LSM) should be split. Gloss lists, categories and ratings are CC BY-SA 4.0 Tier A. Video can only be obtained through YouTube, which Marionet's gate classes as Tier D unless the uploader's CC licence on YouTube itself is verified per video.
- SignWiki's large Georgian (8.5k articles) and Icelandic (12.3k) lexicons are the most significant uncovered-by-licence resources for those languages. Georgian has no ISO 639-3 code.

### Gaps
- Whether each Wikisigns YouTube video is itself marked "Creative Commons – Attribution" on YouTube was not checked.
- SignWiki's MediaWiki text could be exported through the API, but there is no licence to export under.

## Q6. sign.mt / research.sign.mt datasets table and the `sign-language-datasets` (tfds) library

### Takeaway
The research.sign.mt "datasets" table currently has **49 JSON entries** in `src/datasets`. Most are ASL, DGS, CSL or TİD recognition and translation corpora with research-only licences. Its lexical-relevant rows are ASL-LEX (CC BY-NC 4.0), ASLLVD ("Attribution"), SSL Lexicon (CC BY-NC-SA 2.5 SE), Sign2MINT (CC BY-NC-SA 3.0 DE), LSE-SIGN (custom), CDPSL (none), S-pot (permission), SignBank/SignPuddle (none) and WLASL (C-UDA). The tfds `sign-language-datasets` package has **26 loader directories**. Of those, the lexical or isolated ones are asl_citizen, asl_lex, asl_signs (PopSign/Kaggle), dgs_types, sem_lex, sign2mint, sign_wordnet, signbank (SignPuddle), signsuisse, signtyp, spread_the_sign, swojs_glossario and wlasl.

### Cited Findings
- **sign.mt datasets table**: 49 JSON files in `src/datasets` (repo updated 2026-08-11). Fields: name, year, language, features, #items, #samples, #signers, license, licenseUrl. Selected rows, verbatim licence field:
  - **Lexical:** "ASL-LEX | 2021 | gloss:ASL | 2723 | … video downloads not allowed | CC BY-NC 4.0"; "ASLLVD | 2008 | gloss, video | 3000 items | 12,000 samples | 4 signers | Attribution"; "SSL Lexicon | 2012 | Swedish | items 20000 | CC BY-NC-SA 2.5 SE"; "Sign2MINT | 2021 | German | video, writing:SignWriting | 740 items | 1135 | CC BY-NC-SA 3.0 DE"; "LSE-SIGN | 2015 | 2400 | Custom"; "CDPSL | 2016 | Polish | video, HamNoSys | license None"; "S-pot | 2014 | Finnish | 1211 | Permission"; "SignBank | Multilingual | 222148 samples | license None"
  - **Isolated, word-level:** "WLASL | 2020 | 2000 | 100 signers | C-UDA 1.0"; "MS-ASL | 1000 | Public" (no licence URL); "AUTSL | Turkish | 226 | Codalab"; "BosphorusSign22k | Research purpose on request"; "DEVISIGN | Research purpose on request"; "NMFs-CSL | Research purpose on request"; "Video-Based CSL | Research Attribution"; "SMILE | Swiss-German | 100 | Custom (zenodo 7701457)"; "PopSign ASL v1.0 | 250 | license None"; "K-RSL | Kazakh-Russian | 600 | Attribution"; "KETI | Korean | 524 | TODO (emailed Sang-Ki Ko)"; "RVL-SLLL ASL | Research Attribution"
  - **Continuous** (Tier B at best): How2Sign CC BY-NC 4.0; Phoenix-2014T CC BY-NC-SA 3.0; Content4All CC BY-NC-SA 4.0; Corpus NGT CC BY-NC-SA 4.0; VGT Corpus CC BY-NC-SA; BOBSL "non-commercial authorized academics"; Public DGS Corpus "Custom"; ISLTranslate CC BY-NC 4.0; LSA-T MIT; BSL Corpus "Partially Restricted"
  - Source: [sign-language-processing.github.io src/datasets](https://github.com/sign-language-processing/sign-language-processing.github.io/tree/master/src/datasets)
- SLDC describes the same site as "a table of 47 datasets (as of March 2025)", and the repository holds 49 JSON entries in Oct 2026 — [SLDC More](https://www.sign-lang.uni-hamburg.de/lr/compendium/more.html)
- **tfds loaders** (`sign_language_datasets/datasets/`): asl_citizen, asl_lex, asl_signs, aslg_pc12, autsl, bsl_corpus, chicago_fs_wild, dgs_corpus, dgs_types, dicta_sign, how2sign, jw_sign, mediapi_skel, ngt_corpus, pop_sign, rwth_phoenix2014_t, sem_lex, sign2mint, sign_wordnet, signbank, signsuisse, signtyp, spread_the_sign, swojs_glossario, wlasl, wmt_slt. The README version table includes "asl-lex | No [videos] | 2.0.0", "dgs_types | Yes | 3.0.0", "sign2mint | Yes | 1.0.0", "signtyp | Links | 1.0.0", "swojs_glossario | Yes | 1.0.0", "SignBank | N/A | 1.0.0", "signsuisse | Yes | 1.0.0", "wlasl | Failed" — [sign-language-processing/datasets](https://github.com/sign-language-processing/datasets)
- **Loader specifics** (from source):
  - `signbank` downloads the index at `http://signbank.org/signpuddle2.0/data/spml/` and then each SPML
  - `sign_wordnet` pulls `https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/static/csv/sign_data.csv` (+ synset CSVs)
  - `swojs_glossario` pulls from the IBICT Omeka API `http://swojs.ibict.br/portal/api/items` (Libras glossary; homepage `swojs.ibict.br/portal/s/swojs/page/glossario`)
  - `signtyp` POSTs to `https://signtyp.uconn.edu/signpuddle/export.php`, which is now 404
  - `asl_citizen` downloads `https://download.microsoft.com/download/b/8/8/b88c0bae-…/ASL_Citizen.zip`
  - `sem_lex` downloads from Google Drive
  - `jw_sign` contains only a README
  - Source: [loaders](https://github.com/sign-language-processing/datasets/tree/master/sign_language_datasets/datasets)
- **Multilingual Sign Language Wordnet v0.6** (EASIER; loaded by `sign_wordnet`): "It contains 24,367 links between 14,028 signs and 16,534 synsets" for BSL, DGS, DSGS, GSL, LSF, NGT, PJM and STS. `sign_data.csv` (2.2 MB) per-language rows: gsl 2,949 (NOEMA), sts 2,706 (teckenspråkslexikon), pjm 2,415 (kspjm), dsgs 1,684 ("private database"), dgs 1,604 (dgs-korpus), ngt 1,500 (Global Signbank), lsf 1,013 (Dicta-Sign), bsl 157 (BSL SignBank, with direct `bslsignbank.ucl.ac.uk/media/bsl-video/…mp4` links). Licence: "This licence concerns only the links made between synsets ID and signs ID. Those links are distributed under Creative Commons BY-NC-SA 4.0 … Please consult the licences of the external resources" — [Sign WordNet](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/index.html); [credit/licence](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/credit.html); [download](https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/download.html). **Conflict**: the Zenodo record "Easier multilingual sign language Wordnet." (doi 10.25592/UHHFDM.10169) shows licence `cc-by-4.0` — [Zenodo 10099802](https://zenodo.org/records/10099802)

#### Records (catalog-level)
| language(s) + ISO | source | URL | type | size | licence (verbatim) | SPDX | tier | access route | commercial_ok | video_redistrib_ok | approx disk | citation |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| bfi, gsg, sgg, gss, fsl, dse, pso, swl | Multilingual Sign Language Wordnet v0.6 | https://www.sign-lang.uni-hamburg.de/easier/sign-wordnet/ | lexical-db (sign↔synset links; links to source videos) | 14,028 signs; 24,367 links | "Those links are distributed under Creative Commons BY-NC-SA 4.0" (site); Zenodo record says cc-by-4.0 (conflict) | CC-BY-NC-SA-4.0 | B (follow site; flag conflict) | direct dump (CSV/TAB) | no | no (videos belong to sources) | ~3.2 MB | Schulder et al. 2024, LREC-COLING SL workshop pp. 281–291 |
| ase, gsg, … (49 rows) | research.sign.mt dataset table | https://research.sign.mt/ | catalog | 49 datasets | per row | — | catalog | JSON in GitHub | — | — | — | Moryossef & Goldberg (2021–) |
| multi | sign-language-datasets (tfds) | https://github.com/sign-language-processing/datasets | catalog / loaders | 26 loaders | repo licence not declared via GitHub API | — | catalog | pip | — | — | — | Moryossef & Müller (2021) |

### Inferences
- Beyond what Marionet already has, the tfds catalogue adds lexical sources worth per-language follow-up: **SignSuisse** (SGB-FSS DSGS/LSF-CH/LIS-CH; SLDC says restricted, individual licence; the Zenodo poses record 10122622 is restricted), **IBICT SWOJS glossário** (Libras; licence not checked), and **DGS-Korpus types** (DGS Corpus licence, custom).
- The `sign_wordnet` CSV is a ready cross-language concept map (OMW synsets) that Marionet could use to align glosses across its per-language dictionaries. Under the site's BY-NC-SA terms, that use is local-research only (Tier B).

### Gaps
- No licence was found for the tfds code repository itself (the GitHub API returned no licence).

## Q7. Language archives and general repositories (TLA, ELAR, PARADISEC, AILLA, Kaipuleohone, CLARIN, Zenodo, OSF, Hugging Face, Kaggle, GitHub)

### Takeaway
The archives (ELAR, TLA, Kaipuleohone, PARADISEC) hold sign-language documentation for many village and minority sign languages, but almost all of it is registration-gated and non-commercial, so Tier C/B at best and not dump-style. The open repositories are where the real Tier-A finds are:
- **StudioGalt Sign-Language-Mocap-Archive** (GitHub, **CC0**, about 2,587 ASL sign mocap folders as FBX incl. Mixamo rig, 40 GB repo)
- **Zenodo**: Ghanaian SL Lexicon (CC BY 4.0, ~1,200 signs + OpenPose); SWL-LSE (CC BY 4.0); LESCO emergency signs (CC BY 4.0); LSM datasets (CC BY 4.0); Algerian 3DZSignDB SigML (CC BY 4.0); VisSE Spanish SignWriting (CC BY 4.0)
- **OSF**: 3D-LEX (CC BY 4.0); the DGS lexical-signs/gesture database and NGT iconicity norms (CC BY 4.0)
- **SignDict** (DGS; per-video CC BY-SA 3.0 or CC BY-NC-SA 3.0 DE)

### Cited Findings
- **ELAR** search ("sign language", 4,072 results). The language facet lists bundles for: Alipur Village SL (1), ASL (119), Australian Irish SL (37+1), Bay Islands SL (27), Cameroon SL (1, +8 Langue Signe Cameroun), Chadian SL (4), Chatino SL San Juan Quiahije (136+2), Côte d'Ivoire SL (1, +85 LSCI), Extreme North Cameroon SL (89), LSF (32), Ghandruk SL (100), International Sign (4), Inuit SL (37), Jhyankot SL (43), Jumli SL (175), Ka'apor SL (24), Kata Kolok (97), Langue des Signes de Bouakako (58), Langue des Signes Malienne (111), Macau SL (80), Panamanian SL (2), Persian SL (173), Providencia SL (114) and Ugandan SL (8) — [ELAR search](https://www.elararchive.org/?s=sign+language)
- **ELAR terms**: "All catalogue entries contained in this site are licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Data files are covered by the ELAR Access Conditions." Also: "most materials require users to register … Materials may only be used for non-commercial and/or educational activity. Any other usage needs explicit written agreement from the Collection Steward" — [ELAR home](https://www.elararchive.org/); [ELAR how-to-use](https://www.elararchive.org/how-to-use/)
- **TLA** (MPI Nijmegen) search `"sign language"` returns 7,274 objects. Language facet: Turkish Sign Language 1,851; Dutch Sign Language 808 (+12 "Nederlandse Gebarentaal"); German Sign Language 545; Swedish Sign Language 313; Kata Kolok 298; Czech Sign Language 62; "GSL" 43; British Sign Language 23; American Sign Language 14; Indonesian Sign Language 8; Chinese Sign Language 5; LSFB 5; International Sign 4+5; VGT 2; Turkish Homesign 2; Yucatec Maya Sign Language 1. Top-level node: "Sign Language" collection `lat:1839_00_0000_0000_0000_C71C_C` — [TLA search](https://archive.mpi.nl/tla/islandora/search/%22sign%20language%22?type=dismax); [TLA Sign Language node](https://archive.mpi.nl/tla/islandora/object/lat%3A1839_00_0000_0000_0000_C71C_C)
- **CLARIN** "Sign Language Resources" family page (fetched via WebFetch; ~59 entries). Among the openly licensed or lexical entries:
  - Adamorobe SL Lexicon (250 signs, "Restricted")
  - DICTA-SIGN lexicon (CC BY-NC-ND 4.0)
  - BSL Lexicon CN (Public, TLA)
  - CSL lexicon (Restricted, TLA)
  - ECHO NGT/SSL lexicons ("Public", TLA)
  - e-LIS (CC BY-NC-SA 4.0, EURAC)
  - NOEMA+ (GSL, "Freely accessible")
  - BeCoS (VGT/LSFB, CC BY)
  - "Exhibition Corpus – Text, Sound, Sign" (NSL, CC ZERO)
  - Norwegian SL Corpus (CC BY-NC-SA 4.0)
  - SMILE (CC BY-NC-SA 4.0)
  - Swedish SL Corpus (CC BY-NC-SA 2.5)
  - MOCAP1 (LSF mocap, CC BY-NC-ND 4.0, Ortolang)
  - Corpus Maurician SL (CC BY-NC-ND 4.0)
  - Corpus-PhD-Martinod-2019 (Marajó SL, CC BY-NC-ND 4.0)
  - Corpus LS Tunisienne (CC BY-NC-ND 3.0)
  - Source: [CLARIN sign language resources](https://www.clarin.eu/resource-families/sign-language-resources)
- **Kaipuleohone** (ScholarSpace DSpace API, query "sign language": 1,568 hits, mostly papers). It holds Hawaiʻi Sign Language lexical elicitation items, e.g. "Vocabulary Word List - Variation signs" (LCP-017; `dc.language.iso hps`; "Digital .mp4 video file"; `dc.embargo.liftdate 2028-06-06`; no `dc.rights`). Related HSL word lists are 10125/737843–737861 — [ScholarSpace API search](https://scholarspace.manoa.hawaii.edu/server/api/discover/search/objects?query=%22sign%20language%22); [hdl 10125/737857](https://hdl.handle.net/10125/737857)
- **Zenodo** (REST API, 13 queries × 2 pages; dataset type). Sign-language lexical, isolated, notation or mocap records with licence field and size:

| language(s) + ISO | source | URL | type | size | licence (Zenodo field; quotes where description differs) | SPDX | tier | access route | commercial_ok | video_redistrib_ok | approx disk | citation |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| gse (Ghanaian SL) | Ghanaian Sign Language Lexicon | https://zenodo.org/records/4533753 | isolated-video + OpenPose | "over 1200 signs" | cc-by-4.0 | CC-BY-4.0 | A | direct dump | yes | yes | 1.16 GB | Fragkiadakis, Nyst, Nyarko (2021) doi 10.5281/zenodo.4533753 |
| ssp (LSE) | SWL-LSE (SignaMed) | https://zenodo.org/records/13691887 | isolated (300 reference videos 24 MB + MediaPipe for 8,000 reproductions) | 300 classes | cc-by-4.0 | CC-BY-4.0 | A | direct dump | yes | yes (VIDEOS_REF) | 3.5 GB | Vázquez-Enríquez, Alba-Castro et al. (2024) doi 10.5281/zenodo.13691887 |
| csr (LESCO) | LESCO emergency-based signs | https://zenodo.org/records/6345338 | isolated-video | 39 signs × 3 videos | cc-by-4.0 | CC-BY-4.0 | A | direct dump (.rar) | yes | yes | 431 MB | Zamora-Mora & Chacon-Rivas (2021) |
| mfs (LSM) | Dataset LSM Lenguaje de señas mexicanas; Mexican SL Glosses (Dynamic Signs) | https://zenodo.org/records/6554337 ; https://zenodo.org/records/18330565 | isolated-video | not opened | cc-by-4.0 | CC-BY-4.0 | A (verify contents) | direct dump | yes | yes | 271 MB; 2.7 GB | per record |
| asp (Algerian SL) | 3DZSignDB: 3D avatar SigML Data for Algerian Sign Language | https://zenodo.org/records/15020376 | notation (SigML/HamNoSys for avatar) | not opened | cc-by-4.0 | CC-BY-4.0 | A | direct dump | yes | n/a | 23 MB | Zerrouki, Mami, Slimani, Mazari (2025) |
| asp | VDzSL: Video Dataset for Algerian Sign Language | https://zenodo.org/records/18209839 | isolated-video (unverified) | — | cc-by-4.0 | CC-BY-4.0 | A (verify) | direct dump | yes | yes | 1.2 GB | per record |
| ssp | VisSE corpus of Spanish SignWriting | https://zenodo.org/records/6337885 | notation (handwritten SignWriting images, annotated) | — | cc-by-4.0 | CC-BY-4.0 | A | direct dump | yes | n/a | 228 MB | Sevilla, Lahoz-Bengoechea, Díaz Esteban (2022) |
| bzs (Libras SignWriting) | SignWriting Database | https://zenodo.org/records/10804006 | notation images (7,997 images, 103 classes) | 7,997 | field cc-by-4.0, BUT description: "The SW Database may be used for non-commercial research provided you acknowledge the source" | — | B (description restricts) | direct dump | no | n/a | 90 MB | Stiehl, Oliveira et al. ICDAR 2015 |
| gss (Greek SL) | The Greek Sign Language (GSL) Dataset | https://zenodo.org/records/4756317 | continuous+isolated video | — | cc-by-4.0 | CC-BY-4.0 | A | direct dump | yes | yes | 134.8 GB (too large to sample) | per record |
| ecs (Ecuador) | AI-Ready Ecuadorian Sign Language Corpus | https://zenodo.org/records/21627229 | video corpus (unverified) | — | cc-by-4.0 | CC-BY-4.0 | A (verify) | direct dump | yes | yes | 17.8 GB | per record |
| Bangla SL (no ISO; Glottolog: Indo-Pakistani) | SignBD-Word | https://zenodo.org/records/6779843 | isolated-video, 200 words, 6,000 videos, 16 signers (per sign.mt) | 6,000 | cc-by-sa-4.0 | CC-BY-SA-4.0 | A | direct dump | yes | yes | 24.2 GB | per record |
| Azerbaijani SL (no ISO) | AzSLD | https://zenodo.org/records/14222948 | video | — | cc-by-4.0 | CC-BY-4.0 | A (verify) | direct dump | yes | yes | 46.9 GB | per record |
| Malaysian SL (xml) | BIM-SIGN Pose | https://zenodo.org/records/21631884 | pose | — | cc-by-nc-4.0 | CC-BY-NC-4.0 | B | direct dump | no | no | 19.2 GB | per record |
| bzs | LIBRAS-EQT-UECE | https://zenodo.org/records/21398895 | isolated+continuous | — | cc-by-nc-4.0 | CC-BY-NC-4.0 | B | direct dump | no | no | 45.4 GB | per record |
| sgg/ssr/slf | Signsuisse DSGS/LSF/LIS lexicon: Poses | https://zenodo.org/records/10122622 | pose | — | (none; restricted) | — | C | request | no | no | — | — |
| sgg | SMILE Swiss German SL Dataset | https://zenodo.org/records/7701457 | isolated (100 signs) | — | (none; restricted) — CLARIN says CC BY-NC-SA 4.0 | — | C/B | request | no | no | — | Ebling et al. 2018 |
| sfb | GeoQuery-LSFB | https://zenodo.org/records/19220833 | continuous | — | (licence field empty) | — | D (no licence) | direct | no | no | 1.6 GB | — |
| Arabic SLs (unspecified) | Arabic words sign language video dataset | https://zenodo.org/records/8035320 | isolated-video | — | cc-by-4.0 | CC-BY-4.0 | A (verify which Arabic SL) | direct | yes | yes | 23 MB | — |

  Source: [Zenodo REST API](https://zenodo.org/api/records)
- **OSF** (API; 228 projects titled "sign language"). Lexical-relevant, with licence from the node `license` relation:

| language(s) + ISO | source | URL | type | licence (OSF node) | tier | notes |
|---|---|---|---|---|---|---|
| ase, dse | 3D-LEX v1.0 | https://osf.io/cv276 | mocap/3D lexicon | CC-By Attribution 4.0 International | A (already allowlisted) | — |
| ase | ASL-LEX 2.0 | https://osf.io/zpha4 | lexical/phonology DB | node: CC-By Attribution 4.0 International | **B** (project site says CC BY-NC 4.0; videos ©) | **conflict**, see Q2 |
| isr | ISL-LEX 1.0 | https://osf.io/jmwyx | lexical/phonology DB | node: CC-By Attribution 4.0 International | B until resolved (SLDC: CC BY-NC 4.0) | conflict |
| gsg | DGS lexical signs + corresponding gestures (transparency, iconicity) | https://osf.io/a4c7u | lexical ratings | CC-By Attribution 4.0 International | A (verify files) | PLOS One submission |
| gsg | Psycholinguistic ratings of sign frequency and iconicity in DGS | https://osf.io/r67nx | ratings | none on node | D until licensed | — |
| dse | Iconicity and transparency in NGT | https://osf.io/u7rkf | ratings | CC-By Attribution 4.0 International | A | — |
| csl | CSL-LEX (Chinese SL psycholinguistic DB) | https://osf.io/6ewty | lexical DB | none on node | D/C | — |
| hks | HKU-HKSLLEX | https://osf.io/t4x56 | lexical DB | none on node | D/C | — |
| hks | HKSL iconicity & transparency | https://osf.io/5vxzf | ratings | "Other" | C (read terms) | — |
| esl | Egyptian SL handshape phonology; Egyptian SL toponyms | https://osf.io/eypg9 ; https://osf.io/uh4sb | phonology / lexical | none | D | poster / analysis |
| swl | Swedish SL database of video-recorded sign-pseudosign pairs | https://osf.io/4rj5f | isolated-video | none | D/C | — |
| post-Soviet SLs | Sign languages of the Soviet Union | https://osf.io/agnwj | comparative lexicon | CC-By Attribution 4.0 International | A (verify contents) | — |
| gse | GSL Multimodal Annotation — Ghanaian SL | https://osf.io/v4sbn | annotation | none | D | — |

  Licence IDs were mapped with OSF's licence endpoint (e.g. `563c1cf88c5e4a3877f9e96a = CC-By Attribution 4.0 International`, `563c1cf88c5e4a3877f9e965 = No license`) — [OSF API nodes](https://api.osf.io/v2/nodes/?filter[title][icontains]=sign%20language); [OSF licenses](https://api.osf.io/v2/licenses/)
- **Hugging Face** (Hub API, 8 searches, 319 datasets returned; most are ASL fingerspelling/MNIST or unrelated "asl" names). Lexical-relevant:
  - `sign/signbank-plus` (cc-by-nc-4.0; SignPuddle-derived SignWriting↔text)
  - `fhswf/sign-language-avatar-gloss-dgs` (cc-by-nc-sa-4.0; "The data is at this moment just sourced from SignDict.org … Please take care of the original licence of each video")
  - `gaurannggg7/asl-dictionary` (cc0-1.0; "sourced directly from the Sign-Language-Mocap-Archive created by StudioGalt")
  - `jameszokah/ghanaian-sign-language-lexicon` (card header `license: mit` while body says "Creative Commons Attribution 4.0 International (CC BY 4.0)"; re-upload of Zenodo 4533753)
  - `facebook/2M-Flores-ASL` (cc-by-sa-4.0; continuous)
  - `achrafothman/aslg_pc12` (cc-by-nc-4.0; gloss text)
  - `martinctl/how2sign-*` (cc-by-nc-4.0)
  - `SorensenAI/asl-citizen-poses` (no licence)
  - `Lanfrica/…nigerian-sign-language` (cc-by-nc-4.0, gated)
  - `Titung/nepali-sign-language-video` (cc-by-4.0, n<1K)
  - Source: [HF API search](https://huggingface.co/api/datasets?search=sign+language&limit=500&full=true); [sign/signbank-plus](https://huggingface.co/datasets/sign/signbank-plus); [fhswf DGS](https://huggingface.co/datasets/fhswf/sign-language-avatar-gloss-dgs); [gaurannggg7/asl-dictionary](https://huggingface.co/datasets/gaurannggg7/asl-dictionary); [jameszokah GhSL](https://huggingface.co/datasets/jameszokah/ghanaian-sign-language-lexicon)
- **Kaggle** (public `api/v1/datasets/list`, 11 queries × 2 pages, 228 hits). Dominated by fingerspelling/alphabet images and re-uploads of research datasets under different licence labels:
  - WLASL re-uploads: risangbaskoro/wlasl-processed "Other", utsavk02 "Unknown", sttaseen "Other"
  - `abd0kamel/asl-citizen` "Other"; `nguyenchitinh/asl-citizen` "MIT"
  - `daskoushik/include` "Other"; `swaptr/isl-video` "CC BY-SA 4.0" (INCLUDE re-upload)
  - `thedevastator/…aslg-pc12` "CC0" (original is CC BY-NC)
  - Possibly useful originals to verify at source: `kapitanov/slovo` (Russian SL, "CC BY-SA 4.0", 15.9 GB); `rehabalsaby/yemeni-sign-language` ("CC0", 2.4 GB); `adelekeadeniyan/nsl-212-benchmark-dataset` (Nigerian SL landmarks, "CC0"); `raseluddin/bdslw11-bangladeshi-sign-word-dataset` ("CC BY 4.0", 3.4 GB); `warcoder/mexican-sign-language-dataset` ("CC BY 4.0"); `warcoder/tunisian-sign-language-dataset` ("CC BY 4.0"); `kevarce/lenguaje-de-seas-de-el-salvador-lessa` ("Contents: © Original Authors"); `mohib123456/dynamic-word-level-pakistan-sign-language-dataset` ("Apache 2.0", 70 words); `jahanzebnaeem/wlpsl` ("Other")
  - Source: [Kaggle datasets list API](https://www.kaggle.com/api/v1/datasets/list?search=sign%20language&sortBy=votes)
- **GitHub mocap: StudioGalt/Sign-Language-Mocap-Archive.** Repo licence `CC0-1.0`; README FAQ: "What's the License? CC0, we don't reserve any rights, use this as you feel." Also: "Since 2020 we have been recording Motion Capture, primarily of American Sign Language" and "I am hearing person, my knowledge of ASL is not complete". Repo size ≈ 40 GB (GitHub `size` 40,067,856 KB). `SG ASL Dictionary/` has letter folders A, B, C, D (419, 852, 895, 390 sign folders) plus a few in E, F, H, M, N, O, P, T, V, W, Y, for **2,587 sign folders**. Each folder holds e.g. `… Mesh.fbx`, `… No Mesh Full.fbx`, `… No Mesh Mini.fbx`, `… No Mesh Mixamo.fbx`, `ShapeKeys.txt`, a reference `.mkv` and a `CC.gif` (~13 MB per sign). There are also `SG ASL Fingerspelling/` (Letters, Numbers) and `Rigs/` — [StudioGalt/Sign-Language-Mocap-Archive](https://github.com/StudioGalt/Sign-Language-Mocap-Archive)
- **SignDict.org** (DGS crowdsourced dictionary). The About page says "Die Videos werden unter einer Creative Commons Lizenz und der Quelltext unter die MPL gestellt". The entry `/entry/1913-haus` shows per-video badges for both `creativecommons.org/licenses/by-sa/3.0/` and `creativecommons.org/licenses/by-nc-sa/3.0/de`. Videos are hosted as MP4 on `assets.wishlephant.com/signdict/videos/…` — [SignDict About](https://signdict.org/about); [SignDict Haus](https://signdict.org/entry/1913-haus)

### Inferences
- **The StudioGalt archive is the single most Marionet-relevant find in this survey.** It is CC0 avatar-ready ASL mocap with a Mixamo-rig FBX per sign, which sits directly next to the 3D-LEX allowlist row. Marionet still needs to (a) tier it A, (b) record the hearing-author and "knowledge of ASL is not complete" caveat as a quality flag, and (c) avoid cloning 40 GB, using a sparse checkout per sign folder instead.
- The Ghanaian SL Lexicon (Zenodo, CC BY 4.0, ~1,200 citation-form signs + OpenPose) is a Tier-A lexical source for gse, and the HF re-upload's "MIT" label is wrong. SWL-LSE adds 300 CC BY 4.0 LSE health-domain reference videos.
- SignDict is a per-video-filterable DGS source. The CC BY-SA 3.0 videos are Tier A and the BY-NC-SA 3.0 DE videos are Tier B. A scraper would need to read the per-entry licence badge.
- The archives (ELAR/TLA/Kaipuleohone) are the only places holding many village sign languages (Jumli, Ghandruk, Jhyankot, Bay Islands, Providencia, Chatino, Ka'apor, Bouakako, Extreme North Cameroon, Inuit). They are all Tier C (register plus non-commercial terms), so for the denominator these languages stay at "documentation exists, no usable lexicon".

### Gaps
- **PARADISEC**: `catalog.paradisec.org.au` search pages returned HTTP 403 to both curl and WebFetch (bot protection), so holdings are not enumerated (**unverified**).
- **AILLA**: the `ailla.utexas.org` search is a JavaScript app, so the static fetch returned no results (**not enumerated**).
- **OLAC**: language-archives.org is now a JavaScript app backed by an Elasticsearch proxy. It was not queried (no per-language counts).
- **TLA** per-collection licences were not opened (mixed CC BY-NC-SA and restricted per the CLARIN and SLDC rows).
- **Zenodo**: the anonymous API caps page size at 25 and briefly returned 403 "unusual traffic". About 314 records were reviewed, and large records (>20 MB) were not opened, so contents labelled "(verify)" are unverified.
- **Dead ends (do not re-check):** ELAR `/terms-of-use/` and `/using-elar/…` paths (404; use `/how-to-use/` and `/legal/`); ethnologue.com subgroup pages (403); clarin.eu blocks curl with an Anubis challenge (WebFetch worked).

## Q8. Wiktionary and Wikimedia Commons (incl. Lingua Libre)

### Takeaway
Wiktionary is negligible as a lexical source: **439 sign lemmas across 21 sign languages** (ASL 271), text under CC BY-SA 4.0. Wikimedia Commons is a small but genuinely **Tier-A video source**:
- **Videos of Armenian Sign Language**: 1,211 files, CC BY-SA 4.0, isolated word signs
- **Videos of French Sign Language**: 634, including 190 Lingua Libre recordings
- **Videos of Catalan Sign Language**: 95
- **Videos of Malaysian Sign Language**: 65
- **Videos of British Sign Language**: 39
- **Videos of Tanzanian Sign Language**: 20
- **Videos of Macedonian Sign Language**: 19
- **Videos of Tamil Sign Language**: 16
- **Media contributed by Spread the sign**: 119 files licensed CC BY-SA 3.0, mostly Swedish SL. This is the only SpreadTheSign content with an explicit free licence.

### Cited Findings
- Wiktionary site licence: `rightsinfo` = "Creative Commons Attribution-Share Alike 4.0" (https://creativecommons.org/licenses/by-sa/4.0/). Commons site default is also CC BY-SA 4.0, with per-file licences governing — [en.wiktionary siteinfo](https://en.wiktionary.org/w/api.php?action=query&meta=siteinfo&siprop=rightsinfo&format=json); [Commons siteinfo](https://commons.wikimedia.org/w/api.php?action=query&meta=siteinfo&siprop=rightsinfo&format=json)
- **Wiktionary**: `Category:Sign languages` has 147 subcategories (language categories). Counting `Category:<Lang> lemmas`: ASL 271, Chinese SL 43, Icelandic SL 36, DGS 19, RSL 16, LSF 15, Korean SL 6, Swedish SL 6, Hungarian SL 4, JSL 4, Chilean SL 3, Cuban SL 3, Hawai'i Pidgin SL 2, Philippine SL 2, Plains Indian SL 2, Quebec SL 2, Libras 1, BSL 1, HKSL 1, Indian SL 1, Irish SL 1. Total 439 — [Wiktionary Category:Sign languages](https://en.wiktionary.org/wiki/Category:Sign_languages)
- **Commons** `Category:Videos of sign language` subcategories and file counts: Armenian 1,211; French 634; Catalan 95; Malaysian 65; British 39; Tanzanian 20; Macedonian 19; Brazilian 17; Tamil 16; ASL (videos) 15; NZSL 10; Dutch 6; LSFB 6; Wikitongues (sign) 6; DGS 5; LSE 3; Cuban 1; Ghanaian 1; Indonesian 0; Swedish 0. `Category:American Sign Language` has 280 files overall, `Category:German Sign Language` 93, `Category:SignWriting` 14 — [Commons Videos of sign language](https://commons.wikimedia.org/wiki/Category:Videos_of_sign_language)
- **Sample licences** (Commons `extmetadata`):
  - "File:Armenian Sign Language (ArSL) - 1.webm | CC BY-SA 4.0 | Operator: Lusine Bekaryan …"
  - "File:Apelsin spreadthesign.ogv | CC BY-SA 3.0 | Spread the Sign | Orange (noun) in Swedish sign language"
  - "File:Bho-kakel-595.ogv | CC BY-SA 3.0 | Spread the Sign"
  - "File:67329.webm | CC BY 3.0 | User:MSLink | Tecknet för 'hej' på svenskt teckenspråk"
  - "File:LL-Q3915477 (inl)-Pitchrigi-A.webm | CC0 | Lingua Libre"
  - Source: [Commons API imageinfo](https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=extmetadata&titles=File:Armenian_Sign_Language_(ArSL)_-_1.webm&format=json)
- **Lingua Libre** sign categories on Commons: `Lingua Libre pronunciation-aen` 1,211 (Armenian SL; same files as above), `-fsl` 190, `-inl` 32 (Indonesian SL), `-tss` 2 (Taiwan SL) — [Commons Lingua Libre pronunciation-fsl](https://commons.wikimedia.org/wiki/Category:Lingua_Libre_pronunciation-fsl)

#### Records
| language(s) + ISO | source | URL | type | size | licence (verbatim per file) | SPDX | tier | access route | commercial_ok | video_redistrib_ok | approx disk | citation |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| aen | Commons "Videos of Armenian Sign Language" (Lingua Libre) | https://commons.wikimedia.org/wiki/Category:Videos_of_Armenian_Sign_Language | isolated-video (webm) | 1,211 | "CC BY-SA 4.0" | CC-BY-SA-4.0 | A | MediaWiki API (direct file URLs) | yes | yes (share-alike) | not measured | per-file attribution (Lusine Bekaryan et al.) |
| fsl | Commons "Videos of French Sign Language" (+ Lingua Libre fsl 190) | https://commons.wikimedia.org/wiki/Category:Videos_of_French_Sign_Language | isolated-video | 634 | per file (CC0 / CC BY-SA) | per file | A (per-file check) | API | yes | yes | — | per file |
| inl, tss | Lingua Libre | https://commons.wikimedia.org/wiki/Category:Lingua_Libre_pronunciation-inl | isolated-video | 32 / 2 | "CC0" (sample) | CC0-1.0 | A | API | yes | yes | — | Lingua Libre |
| swl (mostly), others | Commons "Media contributed by Spread the sign" | https://commons.wikimedia.org/wiki/Category:Media_contributed_by_Spread_the_sign | isolated-video (ogv) | 119 | "CC BY-SA 3.0" | CC-BY-SA-3.0 | A (exception to the SpreadTheSign ban: these files only) | API | yes | yes | — | Spread the Sign / European Sign Language Centre |
| csc, xml, bfi, tza, Macedonian SL, Tamil SL | Commons language video categories | see category names above | isolated/continuous video (mixed) | 95/65/39/20/19/16 | per file | per file | A per file | API | per file | per file | — | per file |
| 21 SLs | English Wiktionary sign lemmas | https://en.wiktionary.org/wiki/Category:American_Sign_Language_lemmas | lexical text (Wiktionary sign transcription) | 439 lemmas | "Creative Commons Attribution-Share Alike 4.0" | CC-BY-SA-4.0 | A (tiny) | MediaWiki API / dumps | yes | n/a | <1 MB | Wiktionary contributors |

### Inferences
- **Armenian SL (aen)** goes from "no source" in every other catalogue to a 1,211-sign CC BY-SA 4.0 citation-form video set on Commons. It is a clean Tier-A per-language source that no specialist catalogue (SLDC, sign.mt, Hub) lists.
- The SpreadTheSign→Commons donation (119 files) is the only legally clean SpreadTheSign content. Marionet's "SpreadTheSign forbidden" rule should carve out Commons-hosted files that carry an explicit CC BY-SA 3.0 tag.

### Gaps
- Per-file licences were sampled (5 files), not exhaustively checked. Category counts include some continuous (non-citation) videos. Commons rate-limited the API (HTTP 429) once during the survey.
- Wiktionary dumps were not checked for sign-transcription fields (e.g. how many lemmas carry a handshape/location/movement transcription usable as notation).

## Q9. Denominator: the world's sign languages with ISO 639-3 codes (Glottolog family sign1238, ISO 639-3, Ethnologue)

### Takeaway
Use **Glottolog 5.3 family `sign1238`** as the denominator. It has **227 language-level sign languages, 156 of them with ISO 639-3 codes**. Adding 4 Glottolog languoids with ISO codes outside that set (lso and sls in Glottolog "Bookkeeping"; lsb and wbs at dialect level) and 3 current ISO codes not yet in Glottolog 5.3 (dyl Bhutanese, yhs Yan-nhaŋu, zhk Kurdish) gives **234 languoids and 163 distinct ISO 639-3 sign-language codes**. Of the 163, 101 appear in at least one catalogue surveyed here. The best-covered sources are SignPuddle (80 ISO languages, many near-empty), SLDC (66, 36 of them only via SpreadTheSign) and SpreadTheSign (36). Ethnologue's count could not be fetched (403). Wikipedia states "an estimated three hundred sign languages".

### Cited Findings
- **Glottolog CLDF v5.3** (released 2026-03-02) `cldf/languages.csv`: 344 languoids with `Family_ID = sign1238` (227 language, 71 dialect, 46 family). Of the 227 languages, 156 carry `ISO639P3code`. Macroareas: Eurasia 94, Africa 49, North America 32, South America 27, Papunesia 19, Australia 5, plus 1 "Africa;North America" (ASL) — [glottolog-cldf languages.csv](https://github.com/glottolog/glottolog-cldf/blob/master/cldf/languages.csv); [glottolog-cldf releases](https://github.com/glottolog/glottolog-cldf/releases)
- **Glottolog sign family tree** (`sign1238.newick.txt`): top-level groups "L1 Sign Language" (309 nodes), "Auxiliary Sign Systems" (30 nodes, e.g. Aboriginal Australian alternate sign languages, Plains Indian SL) and "Pidgin Sign Language" (1) — [Glottolog sign1238 newick](https://glottolog.org/resource/languoid/id/sign1238.newick.txt)
- **ISO 639-3 code table** (SIL, current download): 160 entries whose Ref_Name contains "Sign" (incl. ils International Sign; bqy Kata Kolok added), plus asf (Auslan), sfb (Langue des signes de Belgique Francophone) and vgt (Vlaamse Gebarentaal), for **163**. Retired sign codes: bvs Belgian SL (split into sfb + vgt, 2007-07-18), yds Yiddish SL (2015-01-12), rsi Rennellese SL (2017-01-31), lsg Lyons SL (2018-01-23) — [SIL iso-639-3.tab](https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3.tab); [SIL retirements](https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3_Retirements.tab)
- **ISO/Glottolog mismatches**: dyl Bhutanese SL, yhs Yan-nhaŋu SL and zhk Kurdish SL are absent from Glottolog 5.3. lso Laos SL and sls Singapore SL are in Glottolog family `book1242` (Bookkeeping). lsb Burundian SL (buru1325) and wbs West Bengal SL (kolk1234 "Kolkata Indian Sign Language") are Glottolog dialects, not languages — [glottolog-cldf languages.csv](https://github.com/glottolog/glottolog-cldf/blob/master/cldf/languages.csv)
- **Ethnologue**: `ethnologue.com/subgroup/2/` and related pages returned HTTP 403, so no count was obtained — [Ethnologue](https://www.ethnologue.com/subgroup/2/)
- **Wikipedia cross-check**: "There are an estimated three hundred sign languages in use around the world today. The number is not known with any confidence" — [Wikipedia: List of sign languages](https://en.wikipedia.org/wiki/List_of_sign_languages)
- **Coverage counts** (computed in this survey from the tables above): ISO-coded languages with at least one catalogue hit, 101/163. In SignPuddle, 80 (but 29 of these have fewer than 50 dictionary-type entries in total). In SLDC lexical resources, 66 (36 of them only via SpreadTheSign). In SpreadTheSign, 36. In Sign WordNet, 8. In Wikisigns, 9 (+ Guyana SL, no ISO). In SignWiki, 6 (+ Faroese, Georgian, no ISO). Public in Global Signbank, 2 (dse, bqy).

#### Master denominator table (grouped by region; region = primary country of the Glottolog record)
Columns:
- **SignPuddle**: `sgnID:type:entries`.
- **SLDC**: names of Compendium lexical resources.
- **STS**: listed by SpreadTheSign. It is a coverage flag only, since STS is Tier D.
- **SWN**: Multilingual Sign Language Wordnet.
- **Wikisigns**: sign count.
- **SignWiki**: instance and article count.
- **GSB public**: Global Signbank public dataset.
- **Other open sources**: Commons/Zenodo/OSF/GitHub/Kaggle finds from Q7–Q8.
- **Archive items**: ELAR/TLA facet counts and Kaipuleohone holdings (Q7), all registration-gated (Tier C).

Notes:
- "—" ISO means Glottolog has no ISO code.
- Glottolog subgroup "AUX" marks auxiliary (hearing-community) sign systems, which may be excluded from a deaf-SL denominator.
- Region overrides for multi-country languages: ase→US, psd→US, fsl→FR, sgg→CH, csl→CN, ins→IN, fse→FI, ysl→RS, dsl→DK, rsl→RU.

#### North America (8 languoids; 7 with ISO 639-3)

| ISO 639-3 | ISO name | Glottocode | Glottolog name | Countries | Glottolog subgroup | SignPuddle (puddle:type:entries) | SLDC lexical resources | STS | SWN | Wikisigns | SignWiki | GSB public | Other open sources found in this survey | Archive items (ELAR/TLA/Kaipuleohone; Tier C) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ase | American Sign Language | amer1248 | American Sign Language | BB BF BJ BO CA CD CF CI CN GA GH JM KE MG MR NG PH SG TD TG US ZW | LSFic > ASLic > American Sign | sgn4:dict:12277; sgn5:lite:755; sgn17:sign:19; sgn21:ency:899; sgn25:dict:5530; sgn28:dict:9974; sgn105:dict:2409; sgn111:dict:434; sgn151:bibl:11783; sgn152:bibl:6544 | ASL-LEX; ASL Signbank; Dictio; Hallatlan Dictionary; SignStudy; SpreadTheSign | Y |  |  |  |  | GitHub StudioGalt mocap CC0 (~2,587 sign folders, FBX); Commons 280 files | ELAR 119; TLA 14 |
| fcs | Quebec Sign Language | queb1245 | Quebec Sign Language | CA | LSFic > ASLic | sgn47:dict:12086; sgn81:lite:404; sgn140:ency:5 |  |  |  |  |  |  |  |  |
| hps | Hawai'i Sign Language (HSL) | hawa1235 | Hawai'i Sign Language | US | L1 Sign Language |  |  |  |  |  |  |  | Kaipuleohone LCP word lists (embargo to 2028-06-06, no licence) | Kaipuleohone (embargoed) |
| iks | Inuit Sign Language | inui1247 | Inuit Sign Language | CA | L1 Sign Language |  |  |  |  |  |  |  |  | ELAR 37 |
| mre | Martha's Vineyard Sign Language | mart1251 | Martha's Vineyard Sign Language | US | OKSLic |  |  |  |  |  |  |  |  |  |
| nsr | Maritime Sign Language | mari1381 | Maritime Sign Language | CA | BSLic |  |  |  |  |  |  |  |  |  |
| psd | Plains Indian Sign Language | plai1235 | Plains Indian Sign Language | CA US | AUX: Auxiliary Sign Systems |  |  |  |  |  |  |  |  |  |
| — | — | kere1299 | Keresan Pueblo Indian Sign Language | US | L1 Sign Language |  |  |  |  |  |  |  |  |  |

#### Latin America & Caribbean (53 languoids; 30 with ISO 639-3)

| ISO 639-3 | ISO name | Glottocode | Glottolog name | Countries | Glottolog subgroup | SignPuddle (puddle:type:entries) | SLDC lexical resources | STS | SWN | Wikisigns | SignWiki | GSB public | Other open sources found in this survey | Archive items (ELAR/TLA/Kaipuleohone; Tier C) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| aed | Argentine Sign Language | arge1236 | Argentine Sign Language | AR | L1 Sign Language | sgn41:dict:1870; sgn145:lite:4; sgn146:ency:0 | Señario de términos y expresiones básicas en la Lengua de Señas Argentina; SpreadTheSign | Y |  |  |  |  |  |  |
| bvl | Bolivian Sign Language | boli1236 | Bolivian Sign Language | BO | LSFic > ASLic > West-Central South American Sign | sgn45:dict:7 |  |  |  |  |  |  |  |  |
| bzs | Brazilian Sign Language | braz1236 | Brazilian Sign Language | BR | LSFic | sgn46:dict:~70875; sgn80:dict:3501; sgn114:lite:4971; sgn116:ency:5449 | Signbank da Libras; SpreadTheSign | Y |  | 32 |  |  |  |  |
| csf | Cuba Sign Language | cuba1235 | Cuba Sign Language | CU | L1 Sign Language |  | SpreadTheSign | Y |  |  |  |  |  |  |
| csg | Chilean Sign Language | chil1264 | Chilean Sign Language | CL | L1 Sign Language | sgn135:dict:175 | SpreadTheSign | Y |  |  |  |  |  |  |
| csn | Colombian Sign Language | colo1249 | Colombian Sign Language | CO | LSFic > ASLic > West-Central South American Sign | sgn51:dict:1286 | Dictionary of new medical sign language terms; Filoseñando; INSOR Dictionary; LeSiCo; Tree of Life Foundation Glossary |  |  |  |  |  |  |  |
| csr | Costa Rican Sign Language | cost1249 | Costa Rican Sign Language | CR | LSFic > ASLic | sgn101:dict:2; sgn102:lite:0 | Dictionary of LESCO |  |  |  |  |  | Zenodo 6345338 LESCO 39 signs CC BY 4.0 |  |
| doq | Dominican Sign Language | domi1236 | Dominican Sign Language | DO | LSFic > ASLic > American Sign |  |  |  |  |  |  |  |  |  |
| ecs | Ecuadorian Sign Language | ecua1243 | Ecuadorian Sign Language | EC | LSFic > ASLic > West-Central South American Sign | sgn136:dict:4 |  |  |  |  |  |  | Zenodo 21627229 corpus CC BY 4.0 (17.8 GB) |  |
| esn | Salvadoran Sign Language | salv1237 | Salvadoran Sign Language | SV | L1 Sign Language | sgn137:dict:1 |  |  |  |  |  |  |  |  |
| gsm | Guatemalan Sign Language | guat1249 | Guatemalan Sign Language | GT | L1 Sign Language | sgn112:dict:0 |  |  |  | 21 |  |  |  |  |
| hds | Honduras Sign Language | hond1239 | Honduras Sign Language | HN | LSFic > ASLic > Honduras-Panama Sign | sgn16:dict:3401; sgn121:lite:0 |  |  |  |  |  |  |  |  |
| jcs | Jamaican Country Sign Language | jama1256 | Jamaican Country Sign Language | JM | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| jls | Jamaican Sign Language | jama1263 | Jamaican Sign Language | JM | LSFic > ASLic > American Sign |  |  |  |  |  |  |  |  |  |
| lsc | Albarradas Sign Language | alba1273 | Albarradas Sign Language | MX | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| lsp | Panamanian Sign Language | pana1308 | Panamanian Sign Language | PA | LSFic > ASLic > Honduras-Panama Sign |  |  |  |  |  |  |  |  | ELAR 2 |
| lst | Trinidad and Tobago Sign Language | trin1277 | Modern Trinidad and Tobago Sign Language | TT | LSFic > ASLic > American Sign |  |  |  |  |  |  |  |  |  |
| lsv | Sivia Sign Language | sivi1235 | Sivia Sign Language | PE | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| mfs | Mexican Sign Language | mexi1237 | Mexican Sign Language | MX | LSFic | sgn65:dict:1731; sgn120:lite:666 | SpreadTheSign; Wikisigns Lengua de Señas Mexicana | Y |  | 2178 |  |  | Zenodo 6554337 / 18330565 LSM CC BY 4.0 |  |
| msd | Yucatec Maya Sign Language | yuca1236 | Yucatec Maya Sign Language | MX | Meemul-Tziij |  |  |  |  |  |  |  |  | TLA 1 |
| ncs | Nicaraguan Sign Language | nica1238 | Nicaraguan Sign Language | NI | L1 Sign Language | sgn67:dict:1725; sgn119:lite:501 |  |  |  |  |  |  |  |  |
| prl | Peruvian Sign Language | peru1235 | Peruvian Sign Language | PE | LSFic > ASLic > West-Central South American Sign > Peruvian-Inmaculada Sign | sgn71:dict:148 |  |  |  |  |  |  |  |  |
| prz | Providencia Sign Language | prov1243 | Providencia Sign Language | CO | Providencia-Cayman Sign |  |  |  |  |  |  |  |  | ELAR 114 |
| psl | Puerto Rican Sign Language | puer1237 | Puerto Rican Sign Language | PR | LSFic > ASLic |  |  |  |  |  |  |  |  |  |
| pys | Paraguayan Sign Language | para1318 | Paraguayan Sign Language | PY | L1 Sign Language | sgn129:dict:3061 |  |  |  |  |  |  |  |  |
| rib | Bribri Sign Language | brib1244 | Bribri Sign Language | CR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| rnb | Brunca Sign Language | brun1247 | Brunca Sign Language | CR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| ugy | Uruguayan Sign Language | urug1238 | Uruguayan Sign Language | UY | L1 Sign Language | sgn143:dict:388; sgn144:lite:5 |  |  |  | 85 |  |  |  |  |
| uks | Urubú-Kaapor Sign Language | urub1243 | Urubú-Kaapor Sign Language | BR | L1 Sign Language |  |  |  |  |  |  |  |  | ELAR 24 |
| vsl | Venezuelan Sign Language | vene1237 | Venezuelan Sign Language | VE | Spanish Sign | sgn76:dict:136 |  |  |  |  |  |  |  |  |
| — | — | fren1280 | Bay Islands Sign Language | HN | L1 Sign Language |  |  |  |  |  |  |  |  | ELAR 27 (Bay Islands) |
| — | — | cena1234 | Cena | BR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | chir1296 | Chiriqui Sign Languages | PA | LSFic > ASLic > Honduras-Panama Sign |  |  |  |  |  |  |  |  |  |
| — | — | guya1253 | Guyana Sign Language | GY | LSFic > ASLic > American Sign |  |  |  |  |  |  |  |  |  |
| — | — | hait1245 | Haitian Sign Language | HT | LSFic > ASLic > American Sign |  |  |  |  |  |  |  |  |  |
| — | — | inma1234 | Inmaculada Sign Language | PE | LSFic > ASLic > West-Central South American Sign > Peruvian-Inmaculada Sign |  |  |  |  |  |  |  |  |  |
| — | — | kaja1257 | Kajana Sign Language | SR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | ling1271 | Língua de sinais Fortalezinha | BR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | ling1272 | Língua de sinais de Caiçara | BR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | ling1273 | Língua de sinais do Uiramutã | BR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | macu1262 | Macushi Sign Language | BR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | mara1418 | Marajo Sign Language | BR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | maxa1248 | Maxakali Sign Language | BR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | meem1235 | Meemul Ch'aab'al | GT | Meemul-Tziij |  |  |  |  |  |  |  |  |  |
| — | — | neba1243 | Nebaj Shared Homesign Systems | GT | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | nuev1238 | Nueva Vida Maijuna Sign Language | PE | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | oldc1248 | Old Cayman Sign Language | KY | Providencia-Cayman Sign |  |  |  |  |  |  |  |  |  |
| — | — | orig1234 | Original Costa Rican Sign Language | CR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | papi1256 | Papiu Yanomama Sign Language | BR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | chat1269 | San Juan Quiahije Chatino Sign Language | MX | L1 Sign Language |  |  |  |  |  |  |  |  | ELAR 136+2 |
| — | — | sout3305 | South Rupununi Sign | GY | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | tere1282 | Terena Sign Language | BR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | zina1239 | Zinacantec family homesign | MX | L1 Sign Language |  |  |  |  |  |  |  |  |  |

#### Europe (42 languoids; 42 with ISO 639-3)

| ISO 639-3 | ISO name | Glottocode | Glottolog name | Countries | Glottolog subgroup | SignPuddle (puddle:type:entries) | SLDC lexical resources | STS | SWN | Wikisigns | SignWiki | GSB public | Other open sources found in this survey | Archive items (ELAR/TLA/Kaipuleohone; Tier C) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| asq | Austrian Sign Language | aust1252 | Austrian Sign Language | AT | LSFic > Central European Sign > Nuclear Central European Sign | sgn29:dict:5 | Dictio; LedaSila; SpreadTheSign | Y |  |  |  |  |  |  |
| bfi | British Sign Language | brit1235 | British Sign Language | GB | BSLic > BANZSL | sgn59:dict:853; sgn125:lite:39 | British Sign Language Glossaries of Curriculum Terms; BSL SignBank; Dicta-Sign Lexicon; SpreadTheSign | Y | Y |  |  |  | Commons: 39 videos; SWN | TLA 23 |
| bqn | Bulgarian Sign Language | bulg1240 | Bulgarian Sign Language | BG | LSFic > Central European Sign | sgn134:dict:3 | SpreadTheSign | Y |  |  |  |  |  |  |
| csc | Catalan Sign Language | cata1241 | Catalan Sign Language | ES | Spanish Sign > Nuclear Spanish Sign | sgn56:dict:3422; sgn94:lite:45 | sematos; Wikisign LSC |  |  |  |  |  | Commons: 95 videos |  |
| cse | Czech Sign Language | czec1253 | Czech Sign Language | CZ | LSFic > Central European Sign > Nuclear Central European Sign | sgn36:lite:176; sgn37:ency:73; sgn52:dict:5863 | CZJ domain specific Lexicon; Dictio; SpreadTheSign | Y |  |  |  |  |  | TLA 62 |
| csq | Croatia Sign Language | croa1242 | Croatian Sign Language | HR | LSFic > Yugoslav Sign |  | SpreadTheSign | Y |  |  |  |  |  |  |
| dse | Dutch Sign Language | dutc1253 | Dutch Sign Language | NL | LSFic > Dutch-Belgian Sign | sgn68:dict:84 | Global Signbank - NGT |  | Y |  |  | NGT 6862 public/7469 (CC BY 4.0) | OSF cv276 3D-LEX CC BY 4.0; OSF u7rkf NGT iconicity CC BY 4.0 | TLA 820 |
| dsl | Danish Sign Language | dani1246 | Danish Sign Language | DK FO GL | LSFic > West Scandinavian Sign > Danish Sign | sgn30:dict:53; sgn118:lite:0 | Danish Sign Language Dictionary; SpreadTheSign | Y |  |  |  |  |  |  |
| eso | Estonian Sign Language | esto1238 | Estonian Sign Language | EE | RSLic | sgn109:dict:0 | SpreadTheSign | Y |  |  |  |  |  |  |
| fse | Finnish Sign Language | finn1310 | Finnish Sign Language | AX FI | Swedish Sign > Finnish Sign | sgn57:dict:165 | Finnish Signbank; SignWiki Suomi; SpreadTheSign; SUVI or Basic Dictionary of FinSL | Y |  |  | finsl (7855) |  |  |  |
| fsl | French Sign Language | fren1243 | French Sign Language | FR TG | LSFic | sgn58:dict:1481; sgn124:lite:16 | Dicta-Sign Lexicon; Elix; Ocelles; sematos; SGB-FSS Lexicon; SpreadTheSign | Y | Y |  |  |  | Commons: 634 LSF videos (incl. 190 Lingua Libre) | ELAR 32 |
| fss | Finland-Swedish Sign Language | finl1235 | Finland-Swedish Sign Language | FI | Swedish Sign > Finnish Sign |  | Finnish Signbank; SignWiki Finland |  |  |  | finssl (4221) |  |  |  |
| gsg | German Sign Language | germ1281 | German Sign Language | DE | DGSic | sgn26:lite:420; sgn27:ency:12; sgn53:dict:24778 | DGS Corpus types list; Dicta-Sign Lexicon; DW-DGS; sematos; Sign2MINT; GLex; HLex; GaLex; TLex; PLex; SLex; SpreadTheSign | Y | Y |  |  |  | SignDict per-video CC BY-SA 3.0 / CC BY-NC-SA 3.0 DE; OSF a4c7u DGS-gesture DB CC BY 4.0 | TLA 545 |
| gss | Greek Sign Language | gree1271 | Greek Sign Language | GR | LSFic | sgn61:dict:26 | Dicta-Sign Lexicon; NOEMA; POLYTROPON Lexicon; SpreadTheSign | Y | Y | 100 |  |  | Zenodo 4756317 GSL dataset CC BY 4.0 (135 GB) |  |
| hsh | Hungarian Sign Language | hung1263 | Hungarian Sign Language | HU | LSFic > Central European Sign > Nuclear Central European Sign | sgn122:dict:67; sgn123:lite:1 | Hallatlan Dictionary |  |  |  |  |  |  |  |
| icl | Icelandic Sign Language | icel1236 | Icelandic Sign Language | IS | LSFic > West Scandinavian Sign > Danish Sign | sgn131:dict:40 | SignWiki Ísland; SpreadTheSign | Y |  |  | is (12317 pages) |  |  |  |
| ils | International Sign | inte1259 | International Sign | IT | Pidgin Sign Language | sgn35:dict:244; sgn54:dict:2316; sgn150:sign:2 | Dictio; sematos; SpreadTheSign | Y |  |  |  |  |  | ELAR 4; TLA 9 |
| ise | Italian Sign Language | ital1275 | Italian Sign Language | IT | LSFic > Italian Sign | sgn63:dict:1222 | DIZLIS; e-LIS; SGB-FSS Lexicon; SpreadTheSign | Y |  |  |  |  |  |  |
| isg | Irish Sign Language | iris1235 | Irish Sign Language | IE | LSFic | sgn62:dict:66 | Irish Sign Language STEM Glossary |  |  |  |  |  |  |  |
| lls | Lithuanian Sign Language | lith1236 | Lithuanian Sign Language | LT | RSLic > Nuclear RSLic | sgn107:dict:0 | SpreadTheSign | Y |  |  |  |  |  |  |
| lsl | Latvian Sign Language | latv1245 | Latvian Sign Language | LV | L1 Sign Language | sgn108:dict:1 | SpreadTheSign | Y |  |  |  |  |  |  |
| mdl | Maltese Sign Language | malt1238 | Maltese Sign Language | MT | L1 Sign Language | sgn31:dict:2833; sgn103:sign:234; sgn127:lite:753; sgn147:lite:582 |  |  |  |  |  |  |  |  |
| mzg | Monastic Sign Language | mona1241 | Monastic Sign Language | VA | AUX: Auxiliary Sign Systems |  |  |  |  |  |  |  |  |  |
| nsl | Norwegian Sign Language | norw1255 | Norwegian Sign Language | NO | LSFic > West Scandinavian Sign > Norwegian Sign | sgn23:lite:344; sgn24:ency:13; sgn69:dict:6494 | Global Signbank - NTS; Norsk Tegnordbok; TegnWiki Norge |  |  |  | no (1435) |  |  |  |
| okl | Old Kentish Sign Language | oldk1238 | Old Kentish Sign Language | GB | OKSLic |  |  |  |  |  |  |  |  |  |
| pso | Polish Sign Language | poli1259 | Polish Sign Language | PL | LSFic > Central European Sign | sgn19:dict:2144; sgn38:lite:5; sgn39:ency:1 | CDPSL: Corpus-based Dictionary of Polish Sign Language; SpreadTheSign | Y | Y |  |  |  |  |  |
| psr | Portuguese Sign Language | port1277 | Portuguese Sign Language | PT | L1 Sign Language | sgn33:dict:496; sgn115:lite:55; sgn117:ency:40 | SpreadTheSign | Y |  |  |  |  |  |  |
| rms | Romanian Sign Language | roma1324 | Romanian Sign Language | RO | LSFic > Central European Sign | sgn132:dict:38; sgn138:lite:0; sgn139:ency:0 | SpreadTheSign | Y |  |  |  |  |  |  |
| rsl | Russian Sign Language | russ1255 | Russian-Tajik Sign Language | BG RU | RSLic > Nuclear RSLic > Central RSLic | sgn88:dict:1435; sgn141:lite:0; sgn142:ency:0 | The Database of Lexical Variation in Russian Sign Language; SpreadTheSign | Y |  |  |  |  | Kaggle kapitanov/slovo labelled CC BY-SA 4.0 (verify) |  |
| sfb | Langue des signes de Belgique Francophone | lang1248 | Langue des signes de Belgique Francophone | BE | LSFic > Dutch-Belgian Sign > Belgian Sign | sgn43:dict:3465; sgn95:lite:1 | Global Signbank - LSFB; Lex-LSFB; LSFB en ligne |  |  |  |  |  |  | TLA 5 |
| sgg | Swiss-German Sign Language | swis1240 | Swiss-German Sign Language | CH LI | DGSic | sgn48:dict:4745; sgn96:lite:26 | Swiss German Sign Language Lexicon; SGB-FSS Lexicon |  | Y |  |  |  |  |  |
| slf | Swiss-Italian Sign Language | swis1235 | Swiss-Italian Sign Language | CH | LSFic > Italian Sign | sgn50:dict:3 |  |  |  |  |  |  |  |  |
| sqk | Albanian Sign Language | alba1271 | Albanian Sign Language | AL | L1 Sign Language | sgn82:dict:130 | Albanian Sign Language Dictionary |  |  |  |  |  |  |  |
| ssp | Spanish Sign Language | span1263 | Spanish Sign Language | ES | Spanish Sign > Nuclear Spanish Sign | sgn55:dict:8526; sgn93:lite:505 | DILSE; LSE-Sign; sematos; SignaMed; SpreadTheSign | Y |  |  |  |  | Zenodo 13691887 SWL-LSE CC BY 4.0 (300 ref videos+poses); Zenodo 6337885 VisSE SignWriting CC BY 4.0 |  |
| ssr | Swiss-French Sign Language | swis1241 | Swiss-French Sign Language | CH | LSFic | sgn20:lite:47; sgn22:ency:10; sgn49:dict:9938 |  |  |  |  |  |  |  |  |
| svk | Slovakian Sign Language | slov1263 | Slovakian Sign Language | SK | LSFic > Central European Sign > Nuclear Central European Sign | sgn89:dict:25 | Dictio |  |  |  |  |  |  |  |
| swl | Swedish Sign Language | swed1236 | Swedish Sign Language | SE | Swedish Sign | sgn73:dict:81 | SpreadTheSign; Swedish Sign Language Dictionary | Y | Y |  |  |  | Commons: 119 SpreadTheSign-donated CC BY-SA 3.0 files (mostly STS) | TLA 313 |
| ukl | Ukrainian Sign Language | ukra1235 | Ukrainian Sign Language | UA | RSLic > Nuclear RSLic > Central RSLic | sgn130:dict:37 | Dictio; SpreadTheSign | Y |  |  |  |  |  |  |
| vgt | Vlaamse Gebarentaal | vlaa1235 | Vlaamse Gebarentaal | BE | LSFic > Dutch-Belgian Sign > Belgian Sign | sgn44:dict:8969; sgn98:lite:52 | Global Signbank - VGT; Woordenboek Vlaamse Gebarentaal |  |  |  |  |  |  | TLA 2 |
| vsi | Moldova Sign Language | mold1243 | Moldova Sign Language | MD | RSLic > Nuclear RSLic > Central RSLic |  |  |  |  |  |  |  |  |  |
| vsv | Valencian Sign Language | vale1251 | Valencian Sign Language | ES | Spanish Sign > Nuclear Spanish Sign |  |  |  |  |  |  |  |  |  |
| ysl | Yugoslavian Sign Language | yugo1238 | Yugoslavian Sign Language | RS SI | LSFic > Yugoslav Sign | sgn74:dict:3799; sgn148:lite:16; sgn149:ency:0 |  |  |  |  |  |  |  |  |

#### Caucasus & Central Asia (2 languoids; 1 with ISO 639-3)

| ISO 639-3 | ISO name | Glottocode | Glottolog name | Countries | Glottolog subgroup | SignPuddle (puddle:type:entries) | SLDC lexical resources | STS | SWN | Wikisigns | SignWiki | GSB public | Other open sources found in this survey | Archive items (ELAR/TLA/Kaipuleohone; Tier C) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| aen | Armenian Sign Language | arme1259 | Baraninsky Armenian Sign Language | AM | AUX: Auxiliary Sign Systems |  |  |  |  |  |  |  | Commons: 1211 CC BY-SA 4.0 sign videos |  |
| — | — | geor1254 | Georgian Sign Language | GE | RSLic > Nuclear RSLic |  |  |  |  |  |  |  |  |  |

#### Middle East & North Africa (24 languoids; 15 with ISO 639-3)

| ISO 639-3 | ISO name | Glottocode | Glottolog name | Countries | Glottolog subgroup | SignPuddle (puddle:type:entries) | SLDC lexical resources | STS | SWN | Wikisigns | SignWiki | GSB public | Other open sources found in this survey | Archive items (ELAR/TLA/Kaipuleohone; Tier C) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ajs | Algerian Jewish Sign Language | ghar1240 | Ghardaia Sign Language | DZ | L1 Sign Language |  | Algerian Jewish Sign Language Dictionary |  |  |  |  |  |  |  |
| asp | Algerian Sign Language | alge1235 | Algerian Sign Language | DZ | LSFic |  |  |  |  |  |  |  | Zenodo 15020376 3DZSignDB SigML CC BY 4.0; 18209839 VDzSL CC BY 4.0 |  |
| dsz | Mardin Sign Language | mard1245 | Mardin Sign Language | TR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| esl | Egypt Sign Language | egyp1238 | Egypt Sign Language | EG | Arab Sign | sgn84:dict:111 |  |  |  |  |  |  | OSF eypg9/uh4sb (no licence) |  |
| isr | Israeli Sign Language | isra1236 | Israeli Sign Language | IL | DGSic | sgn110:dict:36 | ISL-LEX; ISL Dictionary |  |  |  |  |  |  |  |
| jos | Jordanian Sign Language | jord1238 | Levantine Arabic Sign Language | JO | Arab Sign > Levantine-Iraqi Sign | sgn86:dict:31; sgn92:lite:1 |  |  |  |  |  |  |  |  |
| lbs | Libyan Sign Language | liby1235 | Libyan Sign Language | LY | Arab Sign |  |  |  |  |  |  |  |  |  |
| psc | Iranian Sign Language | pers1244 | Zaban Eshareh Irani | IR | L1 Sign Language |  | Global Signbank - ZEI |  |  |  |  |  |  | ELAR 173 |
| sdl | Saudi Arabian Sign Language | saud1238 | Saudi Arabian Sign Language | SA | Arab Sign | sgn40:dict:401; sgn91:lite:6 |  |  |  |  |  |  |  |  |
| sqx | Kufr Qassem Sign Language (KQSL) | kafr1234 | Kafr Qasem Sign Language | IL | L1 Sign Language |  | Kafr Qasem Sign Language Dictionary |  |  |  |  |  |  |  |
| syy | Al-Sayyid Bedouin Sign Language | alsa1242 | Al-Sayyid Bedouin Sign Language | IL | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| tse | Tunisian Sign Language | tuni1249 | Tunisian Sign Language | TN | LSFic > Italian Sign | sgn104:dict:4519; sgn126:lite:469 |  |  |  |  |  |  |  |  |
| tsm | Turkish Sign Language | turk1288 | Turkish Sign Language | TR | L1 Sign Language | sgn90:dict:4 | Boğaziçi University Dictionary; Contemporary Turkish Sign Language Dictionary; SpreadTheSign | Y |  |  |  |  |  | TLA 1851 |
| xms | Moroccan Sign Language | moro1242 | Moroccan Sign Language | MA | LSFic > ASLic |  |  |  |  |  |  |  |  |  |
| zhk | Kurdish Sign Language | — | (not in Glottolog 5.3) | IQ |  |  |  |  |  |  |  |  |  |  |
| — | — | arab1399 | Arab El-Naim Sign Language | IL | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | cent2319 | Central Taurus Sign Language | TR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | douz1234 | Douz Sign Language | TN | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | einm1234 | Ein Mahal Sign Language | IL | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | iraq1246 | Iraqi Sign Language | IQ | Arab Sign > Levantine-Iraqi Sign |  |  |  |  |  |  |  |  |  |
| — | — | kurd1260 | Kurdish Sign Language | IQ | Arab Sign > Levantine-Iraqi Sign |  |  |  |  |  |  |  |  |  |
| — | — | kuwa1252 | Kuwaiti Sign Language | KW | Arab Sign |  |  |  |  |  |  |  |  |  |
| — | — | qahv1234 | Qahvehkhaneh Sign Language | IR | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | yeme1237 | Yemeni Sign Language | YE | Arab Sign |  |  |  |  |  |  |  |  |  |

#### Sub-Saharan Africa (43 languoids; 25 with ISO 639-3)

| ISO 639-3 | ISO name | Glottocode | Glottolog name | Countries | Glottolog subgroup | SignPuddle (puddle:type:entries) | SLDC lexical resources | STS | SWN | Wikisigns | SignWiki | GSB public | Other open sources found in this survey | Archive items (ELAR/TLA/Kaipuleohone; Tier C) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ads | Adamorobe Sign Language | adam1238 | Adamorobe Sign Language | GH | L1 Sign Language |  | Adamorobe Sign Language Lexicon |  |  |  |  |  |  |  |
| bog | Bamako Sign Language | bama1249 | Langue de Signes Malienne | ML | L1 Sign Language |  |  |  |  |  |  |  |  | ELAR 111 |
| cds | Chadian Sign Language | chad1238 | Chadian Sign Language | TD | LSFic > ASLic > American Sign |  |  |  |  |  |  |  |  | ELAR 4 |
| eth | Ethiopian Sign Language | ethi1238 | Ethiopian Sign Language | ET | LSFic > ASLic | sgn18:dict:143; sgn100:lite:1 |  |  |  |  |  |  |  |  |
| gse | Ghanaian Sign Language | ghan1235 | Ghanaian Sign Language | GH | LSFic > ASLic > American Sign |  |  |  |  |  |  |  | Zenodo 4533753 GhSL lexicon CC BY 4.0 (~1200 signs+OpenPose) |  |
| gus | Guinean Sign Language | guin1250 | Guinean Sign Language | GN | LSFic > ASLic |  |  |  |  |  |  |  |  |  |
| hsl | Hausa Sign Language | haus1246 | Hausa Sign Language | NG | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| lgs | Guinea-Bissau Sign Language | guin1260 | Guinea-Bissau Sign Language | GW | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| lsb | Burundian Sign Language | buru1325 | Burundi Sign Language | BI | LSFic > ASLic > American Sign > American Sign Language |  |  |  |  |  |  |  |  |  |
| lsw | Seychelles Sign Language | seyc1234 | Seychelles Sign Language | SC | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| lsy | Mauritian Sign Language | maur1240 | Mauritian Sign Language | MU | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| lws | Malawian Sign Language | mala1549 | Malawian Sign Language | MW | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| mzc | Madagascar Sign Language | mada1271 | Madagascar Sign Language | MG | LSFic > West Scandinavian Sign > Norwegian Sign |  | Wikisigns Langue de Signes Malagasy |  |  | 1314 |  |  |  |  |
| mzy | Mozambican Sign Language | moza1235 | Mozambican Sign Language | MZ | L1 Sign Language |  |  |  |  | 44 |  |  |  |  |
| nbs | Namibian Sign Language | nami1249 | Namibian Sign Language | NA | BSLic > South African Sign |  | SignWiki Namibia |  |  |  | na (2138) |  |  |  |
| nsi | Nigerian Sign Language | nige1240 | Nigerian Sign Language | NG | LSFic > ASLic > American Sign | sgn32:dict:11 |  |  |  |  |  |  |  |  |
| rsn | Rwandan Sign Language | rwan1246 | Rwandan Sign Language | RW | Unclassified L1 Sign Language |  |  |  |  |  |  |  |  |  |
| sfs | South African Sign Language | sout1404 | South African Sign Language | ZA | BSLic > South African Sign | sgn77:dict:157 |  |  |  |  |  |  |  |  |
| sgx | Sierra Leone Sign Language | sier1246 | Sierra Leone Sign Language | SL | LSFic > ASLic |  |  |  |  |  |  |  |  |  |
| tsy | Tebul Sign Language | tebu1240 | Tebul Sign Language | ML | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| tza | Tanzanian Sign Language | tanz1238 | Tanzanian Sign Language | TZ | L1 Sign Language |  | SignWiki Tanzania |  |  |  | tz (2217) |  | Commons: 20 videos |  |
| ugn | Ugandan Sign Language | ugan1238 | Ugandan Sign Language | UG | LSFic > ASLic |  |  |  |  |  |  |  |  | ELAR 8 |
| xki | Kenyan Sign Language | keny1241 | Kenya-Somali Sign Language | KE | L1 Sign Language | sgn79:dict:17 | KSL Dictionary |  |  | 72 |  |  |  |  |
| zib | Zimbabwe Sign Language | zimb1247 | Zimbabwe Sign Language | ZW | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| zsl | Zambian Sign Language | zamb1239 | Zambian Sign Language | ZM | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | berb1261 | Berbey Sign Language | ML | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | bura1295 | Bura Sign Language | NG | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | burk1234 | Burkina Faso Sign Language | BF | LSFic > ASLic |  |  |  |  |  |  |  |  |  |
| — | — | doue1234 | Douentza Sign Language | ML | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | extr1248 | Extreme North Cameroon Sign Language | CM | L1 Sign Language |  |  |  |  |  |  |  |  | ELAR 89 |
| — | — | gamb1259 | Gambian Sign Language | GM | LSFic > ASLic |  |  |  |  |  |  |  |  |  |
| — | — | ibok1234 | Ibokun Sign Language | NG | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | lang1335 | Langue des Signes Zairoise | CD | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | lang1336 | Langue des Signes de Bouakako | CI | L1 Sign Language |  |  |  |  |  |  |  |  | ELAR 58 (Bouakako) |
| — | — | leso1234 | Lesotho Sign Language | LS | BSLic > South African Sign |  |  |  |  |  |  |  |  |  |
| — | — | maga1273 | Magajingari Sign Language | NG | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | mbou1245 | Mbour Sign Language | SN | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | mofu1251 | Mofu-Gudur Sign Language | CM | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | nana1261 | Nanabin Sign Language | GH | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | saot1241 | Sao Tome and Principe Sign Language | ST | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | sout3410 | South Sudanese Sign Language | SS | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | wimb1234 | Wimbum Sign Language | CM | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | yoru1246 | Yoruba Sign Language | NG | L1 Sign Language |  |  |  |  |  |  |  |  |  |

#### South Asia (15 languoids; 10 with ISO 639-3)

| ISO 639-3 | ISO name | Glottocode | Glottolog name | Countries | Glottolog subgroup | SignPuddle (puddle:type:entries) | SLDC lexical resources | STS | SWN | Wikisigns | SignWiki | GSB public | Other open sources found in this survey | Archive items (ELAR/TLA/Kaipuleohone; Tier C) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| afg | Afghan Sign Language | afgh1239 | Afghan Sign Language | AF | L1 Sign Language | sgn106:dict:14 |  |  |  |  |  |  |  |  |
| dyl | Bhutanese Sign Language | — | (not in Glottolog 5.3) | BT |  |  |  |  |  |  |  |  |  |  |
| gds | Ghandruk Sign Language | ghan1245 | Ghandruk Sign Language | NP | L1 Sign Language |  |  |  |  |  |  |  |  | ELAR 100 |
| ins | Indian Sign Language | indi1237 | Indian Sign Language | BD IN PK | Indo-Pakistani-Nepalese Sign > Indo-Pakistani Sign | sgn85:dict:5 | Indian Technical Sign Language Dictionary; SpreadTheSign | Y |  |  |  |  |  |  |
| jhs | Jhankot Sign Language | jhan1234 | Jhyankot Sign Language | NP | L1 Sign Language |  |  |  |  |  |  |  |  | ELAR 43 |
| jus | Jumla Sign Language | juml1239 | Jumla Sign Language | NP | L1 Sign Language |  |  |  |  |  |  |  |  | ELAR 175 |
| nsp | Nepalese Sign Language | nepa1250 | Nepalese Sign Language | NP | Indo-Pakistani-Nepalese Sign | sgn133:dict:5 |  |  |  |  |  |  |  |  |
| pks | Pakistan Sign Language | paki1242 | Pakistan Sign Language | PK | Indo-Pakistani-Nepalese Sign > Indo-Pakistani Sign | sgn87:dict:13 | SpreadTheSign | Y |  |  |  |  |  |  |
| sqs | Sri Lankan Sign Language | sril1237 | Sri Lankan Sign Language | LK | BSLic |  | Asian Signbank |  |  |  |  |  |  |  |
| wbs | West Bengal Sign Language | kolk1234 | Kolkata Indian Sign Language | IN | Indo-Pakistani-Nepalese Sign > Indo-Pakistani Sign > Indian Sign Language |  | Wikisigns West Bengal Sign Language |  |  | 170 |  |  |  |  |
| — | — | alip1234 | Alipur Sign Language | IN | L1 Sign Language |  |  |  |  |  |  |  |  | ELAR 1 |
| — | — | anga1315 | Angami Naga Sign Language | IN | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | bhut1234 | Bhutanese Sign Language | BT | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | dadh1234 | Dadhkai Village Sign Language | IN | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | maun1242 | Maunabudhuk and Bodhe Local Sign | NP | L1 Sign Language |  |  |  |  |  |  |  |  |  |

#### East Asia (9 languoids; 9 with ISO 639-3)

| ISO 639-3 | ISO name | Glottocode | Glottolog name | Countries | Glottolog subgroup | SignPuddle (puddle:type:entries) | SLDC lexical resources | STS | SWN | Wikisigns | SignWiki | GSB public | Other open sources found in this survey | Archive items (ELAR/TLA/Kaipuleohone; Tier C) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| csl | Chinese Sign Language | chin1283 | Chinese Sign Language | CN MY TW | CSLic | sgn83:dict:97 | SpreadTheSign | Y |  |  |  |  | OSF 6ewty CSL-LEX (no licence on node) | TLA 5 |
| ehs | Miyakubo Sign Language | miya1268 | Miyakubo Sign Language | JP | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| hks | Hong Kong Sign Language | hong1241 | Hong Kong-Macau Sign Language | CN | CSLic | sgn12:dict:14; sgn13:lite:2 | Asian Signbank; Hong Kong Sign Language Browser |  |  |  |  |  | OSF t4x56 HKU-HKSLLEX (no licence on node) | ELAR 80 (Macau SL) |
| jks | Amami Koniya Sign Language | amam1247 | Amami O Shima Sign Language | JP | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| jsl | Japanese Sign Language | japa1238 | Japanese Sign Language | JP | JSLic | sgn64:dict:328; sgn99:lite:24 | Asian Signbank; SpreadTheSign | Y |  |  |  |  |  |  |
| kvk | Korean Sign Language | kore1273 | Korean Sign Language | KR | JSLic | sgn78:dict:~67741 | Korean Sign Language Dictionary |  |  |  |  |  |  |  |
| lsn | Tibetan Sign Language | tibe1277 | Tibetan Sign Language | CN | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| msr | Mongolian Sign Language | mong1264 | Mongolian Sign Language | MN | RSLic > Nuclear RSLic |  |  |  |  |  |  |  |  |  |
| tss | Taiwan Sign Language | taiw1241 | Taiwan Sign Language | CN | JSLic | sgn75:dict:214 |  |  |  |  |  |  | Lingua Libre: 2 |  |

#### Southeast Asia (21 languoids; 16 with ISO 639-3)

| ISO 639-3 | ISO name | Glottocode | Glottolog name | Countries | Glottolog subgroup | SignPuddle (puddle:type:entries) | SLDC lexical resources | STS | SWN | Wikisigns | SignWiki | GSB public | Other open sources found in this survey | Archive items (ELAR/TLA/Kaipuleohone; Tier C) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| bfk | Ban Khor Sign Language | bank1251 | Ban Khor Sign Language | TH | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| bqy | Bengkala Sign Language | beng1239 | Kata Kolok | ID | L1 Sign Language |  | Global Signbank - Kata Kolok |  |  |  |  | Kata Kolok 182 public/1312 (no licence stated) |  | ELAR 97; TLA 298 |
| csd | Chiangmai Sign Language | chia1237 | Chiangmai Sign Language | TH | Old Chiangmai-Bangkok Sign |  |  |  |  |  |  |  |  |  |
| csx | Cambodian Sign Language | camb1244 | Cambodian Sign Language | KH | L1 Sign Language |  | Krousar Thmey Dictionary |  |  |  |  |  |  |  |
| hab | Hanoi Sign Language | hano1243 | Hanoi Sign Language | VN | Vietnamese Sign |  |  |  |  |  |  |  |  |  |
| haf | Haiphong Sign Language | haip1238 | Haiphong Sign Language | VN | Vietnamese Sign |  |  |  |  |  |  |  |  |  |
| hos | Ho Chi Minh City Sign Language | hoch1237 | Ho Chi Minh City Sign Language | VN | Vietnamese Sign |  | Asian Signbank |  |  |  |  |  |  |  |
| inl | Indonesian Sign Language | indo1291 | Jakartan Sign Language | ID | LSFic > ASLic > Malaysian Sign > Indonesian Sign |  |  |  |  |  |  |  | Lingua Libre: 32 (CC0) | TLA 8 |
| kgi | Selangor Sign Language | sela1253 | Selangor Sign Language | MY | LSFic > ASLic > Malaysian Sign |  |  |  |  |  |  |  |  |  |
| lso | Laos Sign Language | laos1235 | Laos Sign Language | LA | (Glottolog: bookkeeping) |  |  |  |  |  |  |  |  |  |
| psg | Penang Sign Language | pena1248 | Penang Sign Language | MY | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| psp | Philippine Sign Language | phil1239 | Philippine Sign Language | PH | LSFic > ASLic | sgn72:dict:905 |  |  |  |  |  |  |  |  |
| sls | Singapore Sign Language | sing1237 | Singapore Sign Language | SG | (Glottolog: bookkeeping) | sgn11:dict:1122; sgn14:lite:14 |  |  |  |  |  |  |  |  |
| tsq | Thai Sign Language | thai1240 | Thai Sign Language | TH | LSFic > ASLic | sgn34:dict:684 |  |  |  |  |  |  |  |  |
| xml | Malaysian Sign Language | mala1412 | Malaysian Sign Language | MY | LSFic > ASLic > Malaysian Sign | sgn66:dict:6 |  |  |  |  |  |  | Commons: 65 videos |  |
| ysm | Myanmar Sign Language | yang1309 | Yangon Myanmar Sign Language | MM | Myanmar Sign | sgn2:dict:5 | Asian Signbank |  |  |  |  |  |  |  |
| — | — | isya1234 | Isyarat Lama Asli Bali | ID | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | isya1235 | Isyarat Lama Cicendo | ID | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | mand1477 | Mandalay Myanmar Sign Language | MM | Myanmar Sign |  |  |  |  |  |  |  |  |  |
| — | — | oldb1247 | Old Bangkok Sign Language | TH | Old Chiangmai-Bangkok Sign |  |  |  |  |  |  |  |  |  |
| — | — | yogy1234 | Yogyakarta Sign Language | ID | LSFic > ASLic > Malaysian Sign > Indonesian Sign |  |  |  |  |  |  |  |  |  |

#### Oceania (17 languoids; 8 with ISO 639-3)

| ISO 639-3 | ISO name | Glottocode | Glottolog name | Countries | Glottolog subgroup | SignPuddle (puddle:type:entries) | SLDC lexical resources | STS | SWN | Wikisigns | SignWiki | GSB public | Other open sources found in this survey | Archive items (ELAR/TLA/Kaipuleohone; Tier C) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| asf | Auslan | aust1271 | Auslan | AU | BSLic > BANZSL > Auslanic | sgn42:dict:154 | Auslan Signbank; SpreadTheSign | Y |  |  |  |  |  |  |
| asw | Australian Aborigines Sign Language | aust1253 | Australian Aborigines Sign Language | AU | AUX: Auxiliary Sign Systems |  |  |  |  |  |  |  |  |  |
| nzs | New Zealand Sign Language | newz1236 | New Zealand Sign Language | NZ | BSLic > BANZSL | sgn70:dict:37 | New Zealand Sign Language Online Dictionary; SpreadTheSign | Y |  |  |  |  |  |  |
| pgz | Papua New Guinean Sign Language | papu1255 | Papua New Guinean Sign Language | PG | BSLic > BANZSL > Auslanic |  |  |  |  |  |  |  |  |  |
| rsm | Miriwoong Sign Language | miri1273 | Miriwoong Sign Language | AU | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| szs | Solomon Islands Sign Language | solo1262 | Solomon Islands Sign Language | SB | BSLic > BANZSL > Auslanic |  |  |  |  |  |  |  |  |  |
| ygs | Yolŋu Sign Language | yoln1234 | Yolngu Sign Language | AU | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| yhs | Yan-nhaŋu Sign Language | — | (not in Glottolog 5.3) | AU |  |  |  |  |  |  |  |  |  |  |
| — | — | enga1253 | Enga Sign Language | PG | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | fnqi1234 | Far North Queensland Indigenous Sign Language | AU | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | fiji1246 | Fiji Sign Language | FJ | BSLic > BANZSL > Auslanic |  |  |  |  |  |  |  |  |  |
| — | — | kail1256 | Kailge Sign Language | PG | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | mave1234 | Mavea Sign Language | VU | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | mehe1245 | Mehek Sign Language | PG | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | moun1255 | Mount Avejaha Sign Language | PG | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | sina1273 | Sinasina Sign Language | PG | L1 Sign Language |  |  |  |  |  |  |  |  |  |
| — | — | wani1243 | Wanib Sign Language | PG | L1 Sign Language |  |  |  |  |  |  |  |  |  |

### Inferences
- **Recommended denominator**: report coverage against **163 ISO 639-3 codes** (primary) and **227 Glottolog languages** (secondary), and state that ~300 is the commonly cited estimate. Use ISO codes as keys for Marionet's per-language dictionaries, falling back to Glottocodes for the 71 Glottolog languages without ISO codes (mostly village sign languages, e.g. Keresan Pueblo, Bay Islands, Alipur, Jumli, Ghandruk, Jhyankot, Ka'apor, Bouakako, Extreme North Cameroon). Optionally exclude the 30 "Auxiliary Sign Systems" nodes if the target is deaf sign languages only.
- 62 of 163 ISO-coded sign languages have **no hit in any multi-language catalogue or open platform** checked here. 11 of these have only archive holdings (ELAR/TLA/Kaipuleohone, Tier C): cds, gds, jhs, jus, uks, bog, lsp, prz, ugn, iks, msd. The remaining **51 have nothing at all**. By region: Sub-Saharan Africa 12, Latin America & Caribbean 9, Southeast Asia 7, Oceania 6, MENA 5, Europe 4, East Asia 4, North America 3, South Asia 1 (rows with every coverage column blank). For those, the only routes are national deaf-association dictionaries or apps, or new recording.
- Region totals (languoids / with ISO): North America 8/7; Latin America & Caribbean 53/30; Europe 42/42; Caucasus & Central Asia 2/1; Middle East & North Africa 24/15; Sub-Saharan Africa 43/25; South Asia 15/10; East Asia 9/9; Southeast Asia 21/16; Oceania 17/8.

### Gaps
- The Ethnologue count is **unverified** (site 403). From memory, recent editions list roughly 150–160 "Deaf sign language" entries, but that is not sourced here and should not be cited.
- Region assignment is mechanical (first or primary country). Some languages span regions (e.g. ASL's Glottolog country list includes 22 countries; Russian SL includes BG via Glottolog's "Russian-Tajik Sign Language" naming).
- The Glottolog CLDF classification column (`values.csv`, 21.4 MB) was not downloaded because of the 20 MB rule, so the subgroup path comes from the newick tree instead.
- SignPuddle puddles without a usable ISO code (Northern Ireland `bfi-IE`, Haiti `ase-HT`, Malawi `ase-MW`, Vietnam sgn153) are not in the master table's SignPuddle column.

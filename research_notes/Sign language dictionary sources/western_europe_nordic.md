# Licensed lexical / dictionary sources for the sign languages of Western Europe and the Nordic countries (Marionet ingest survey, checked 2026-10-14)

Scope: 27 languages (bfi, isg, nsi, fsl, sfb, vgt, dse, gsg, asq, sgg, ssr, slf, Luxembourgish, ssp, csc, csn, psr, ise, mdl, swl, nsl, dsl, fse, fss, icl, Faroese, Greenlandic).
- Tier key: A = CC BY / BY-SA / CC0 / open dump (may derive and redistribute); B = NC or research-only; C = needs registration, contract or permission; D = skip (no stated licence, proprietary, YouTube footage, SpreadTheSign, scraped mirrors).
- Method: licences were read on the original page (HTML, repository API record, OAI record or LICENSE.txt) and are quoted verbatim with their URL. Anything not seen on the original page is marked UNVERIFIED.
- Downloads were limited to files under 20 MB: SignPuddle SPML dumps, ECV XML, the EASIER wordnet tables and gloss CSVs. Video sizes come from HEAD requests only.
- The session's shared WebSearch budget (200 queries) ran out partway through. Leads that were never searched are listed under Gaps; they are not ruled out.

## 1. Which candidate sources exist for each language, under what verified licence, and what is the recommended first ingest?

### Takeaway
Redistributable (Tier A) data is thin and uneven.
- **Rich Tier A dictionaries:** only NGT has a Tier A dictionary with phonology and citation videos: Global Signbank NGT (CC BY 4.0, 6,862 public glosses) plus 3D-LEX mocap (CC BY 4.0, 1,000 signs).
- **Small Tier A citation-video sets:** LSE (SWL-LSE, 300 reference videos, CC BY 4.0), DGS (SignDict, ~752 CC BY-SA / CC BY clips) and LSF (Lingua Libre, ~190 clips, mostly CC0).
- **Tier A corpus data:** LSC (IEC CORPUS LSC: gloss list plus EAF/MP4, CC BY 4.0), and BSL (BSL Corpus open-access lexical elicitation, CC BY-SA 4.0, but with a conflicting click-through clause).
- **Everything else:** the only Tier A layer is SignPuddle SignWriting (CC BY-SA 3.0 site-wide). It is large for DGS (24,778 entries), Swiss-French (9,938), VGT (8,969), LSE (8,526), NTS (6,494), DSGS (4,745), LSFB (3,465), LSC (3,422) and Maltese (2,833), and tiny or absent elsewhere.
- **Phonology:** most phonology-coded lexicons are Tier B or C (STS lexicon, FinSL Signbank and Suvi, DGS-Korpus HamNoSys, LSE-Sign, tegnsprog.dk, VGT woordenboek, BSL SignBank, Dicta-Sign HamNoSys). Unlocking them takes targeted permission emails.

### Cited Findings

#### Summary matrix (all 27 languages)

| Language (ISO) | Tier A available now | Best Tier B | Key Tier C ask | Recommended first ingest |
|---|---|---|---|---|
| British SL (bfi) | [SignPuddle 59](https://www.signbank.org/signpuddle2.0/data/spml/sgn59.spml) (853 FSW); [BSL Corpus open-access lexical elicitation](https://bslcorpusproject.org/cava/open-access-data/) CC BY-SA 4.0 (A-pending: the same page says "duplication or sale ... not permitted") | [EASIER wordnet](https://www.fdr.uni-hamburg.de/record/14190) links (496 BSL SignBank video URLs; NC); BSL Corpus restricted | [BSL SignBank](https://bslsignbank.ucl.ac.uk/about/acknowledgements/) (~2,500 signs; "No copying or linking ... without the prior written permission of UCL"); Dicta-Sign BSL HamNoSys; BOBSL (BBC contract) | BSL Corpus OA lexical-elicitation clips (102 concepts × 249 signers) after the CAVA Registrar confirms BY-SA; SignPuddle 59; email UCL for SignBank phonology export |
| Irish SL (isg) | [Smith ISL NMF](https://zenodo.org/records/10639554) CC BY 4.0 (frequency list + non-manual rules, no video); [SignPuddle 62](https://www.signbank.org/signpuddle2.0/data/spml/sgn62.spml) (66) | — | [Signs of Ireland](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/signsofirelandcorpus.html) ("No public access") | Smith frequency list as the gloss priority list + SignPuddle 62; no open ISL citation video exists |
| Northern Ireland SL (nsi) | [SignPuddle 60](https://www.signbank.org/signpuddle2.0/data/spml/sgn60.spml) (56; language not named); BSL Corpus Belfast-region recordings (A-pending) | — | — | Tag Belfast signers in the BSL Corpus OA ingest; otherwise no dedicated source |
| French SL (fsl) | [Lingua Libre LSF](https://commons.wikimedia.org/wiki/Category:Lingua_Libre_pronunciation-fsl) (~190 webm, sample 49/50 CC0); [SignPuddle 58](https://www.signbank.org/signpuddle2.0/data/spml/sgn58.spml) (1,481); 30 Commons "LSF Vocab" ogv (CC BY-SA 2.0); Ocelles (CC BY-SA 2.0 FR per Compendium, site offline, UNVERIFIED) | [Ortolang MOCAP1](https://repository.ortolang.fr/api/search/items/mocap1?type=corpora) BVH mocap (CC BY-NC-SA 4.0 + ESR-only), CLM-MOCAP, Rosetta-LSF, Dicta-Sign-LSF-v2 | [Elix](https://dico.elix-lsf.fr/mentions-legales) (15,300 signs, all rights reserved); Rosetta 1,200 isolated-sign mocap (MocapLab); Dicta-Sign LSF HamNoSys | Lingua Libre LSF + SignPuddle 58; Ortolang MOCAP1 for internal retarget R&D only |
| Belgian-French SL / LSFB (sfb) | [SignPuddle 43](https://www.signbank.org/signpuddle2.0/data/spml/sgn43.spml) (3,465); [dico.lsfb.be](https://dico.lsfb.be/licence-creative-commons/) would be A if the footer's CC BY-SA 4.0 wins over the page's CC BY-NC-ND 4.0 | [Corpus LSFB / Lex-LSFB](https://www.corpus-lsfb.be/conditions.php) CC BY-NC-SA 4.0; [LSFB-ISOL](https://pypi.org/project/lsfb-dataset/) CC BY-NC-SA 4.0 | Global Signbank LSFB (3,512 glosses, closed) | SignPuddle 43 now; HIGH-PRIORITY email to LSFB asbl to resolve the licence conflict and ask for an export |
| Flemish SL / VGT (vgt) | [SignPuddle 44](https://www.signbank.org/signpuddle2.0/data/spml/sgn44.spml) (8,969, updated 2026-10-07) | [Corpus VGT](https://www.corpusvgt.be/) CC BY-NC-SA 3.0; IVDNT selections (BY-NC); Content4All VRT-NEWS (NC-SA) | [VGT Woordenboek](https://woordenboek.vlaamsegebarentaal.be/) (no licence; start/end handshape + location fields); [Global Signbank VGT](https://signbank.cls.ru.nl/datasets/VGT/) (16,928 glosses, closed) | SignPuddle 44; email VGTC (info@vgtc.be) for a Woordenboek or Signbank export |
| NGT (dse) | [Global Signbank NGT](https://signbank.cls.ru.nl/datasets/NGT) CC BY 4.0 (6,862 public glosses, phonology fields); 3D-LEX (CC BY 4.0, 1,000 NGT mocap signs, [OSF g7u9c](https://arxiv.org/html/2409.01901v1)); [SignPuddle 68](https://www.signbank.org/signpuddle2.0/data/spml/sgn68.spml) (84) | [Corpus NGT](https://www.corpusngt.nl/info) CC BY-NC-SA 4.0; example sentences inside Signbank (BY-NC-SA) | — | Global Signbank NGT CSV export, minus example-sentence media, joined to 3D-LEX |
| Luxembourgish SL (no ISO) | none (no SignPuddle) | — | [HB SmH Gebärdensprach-Lexikon](https://gebaerdensprache.hoergeschaedigt.lu/?com=0I9I0I0I) (all rights reserved) | Map to DGS (Luxembourg recognised DGS); optional local-variant request |
| DGS (gsg) | [SignDict](https://signdict.org/about?locale=en) subset: 709 CC BY-SA 3.0 DE + 43 CC BY 4.0 videos via GraphQL API; [SignPuddle 53](https://www.signbank.org/signpuddle2.0/data/spml/sgn53.spml) (24,778) | [Public DGS Corpus R4](https://www.sign-lang.uni-hamburg.de/meinedgs_r4/ling/license_en.html) type list with HamNoSys (research-only); gebaerdenlernen.de and Sign2MINT (CC BY-NC-SA 3.0 DE); PHOENIX (NC-SA) | DGS-Korpus licence for HamNoSys; [DW-DGS](https://www.sign-lang.uni-hamburg.de/korpusdict/overview/intro.html) (private/teaching only); SIGNUM (EUR 1,000); Dicta-Sign DGS | SignDict Tier-A subset + SignPuddle 53; email info@dgs-korpus.de |
| ÖGS (asq) | [SignPuddle 29](https://www.signbank.org/signpuddle2.0/data/spml/sgn29.spml) (5 entries, negligible) | — | [LedaSila](https://ledasila.aau.at/) (17,400 signs; "Creative Commons Bedingungen", version unspecified; NC per 2008 paper) | Email ZGH Klagenfurt to pin down the LedaSila licence and request an export |
| DSGS (sgg) | [SignPuddle 48](https://www.signbank.org/signpuddle2.0/data/spml/sgn48.spml) (4,745) | [WMT-SLT Signsuisse release](https://www.wmt-slt.com/data) (9,044 DSGS items; non-commercial, no redistribution "in their original or edited form"); SMILE Continuous (NC-SA); EASIER sgg links (1,708) | [Signsuisse](https://www.sgb-fss.ch/signsuisse/impressum-und-datenschutz) (written consent); Boyes Braem DSGS lexicon (3,000 signs with HamNoSys + SignWriting); SMILE isolated (restricted) | SignPuddle 48; one SGB-FSS request covering DSGS, LSF-CH and LIS-CH; ask UZH about the Boyes Braem HamNoSys |
| Swiss-French SL / LSF-CH (ssr) | [SignPuddle 49](https://www.signbank.org/signpuddle2.0/data/spml/sgn49.spml) (9,938; updated 2026-10-11; 7,566 entries from source "ACPG") | WMT-SLT Signsuisse release (6,423 LSF-CH items; same NC / no-redistribution terms) | Signsuisse | SignPuddle 49 (third-largest puddle in scope) + SGB-FSS request |
| Swiss-Italian SL / LIS-SI (slf) | [SignPuddle 50](https://www.signbank.org/signpuddle2.0/data/spml/sgn50.spml) (3 entries, negligible) | WMT-SLT Signsuisse release (2,754 LIS-CH items) | Signsuisse | Nothing open; SGB-FSS request |
| Spanish SL / LSE (ssp) | [SWL-LSE](https://zenodo.org/records/13691887) (300 citation reference videos + gloss CSV, CC BY 4.0); [SignPuddle 55](https://www.signbank.org/signpuddle2.0/data/spml/sgn55.spml) (8,526); LSE-FS-UVigo (fingerspelling keypoints, CC BY 4.0) | [DILSE](https://fundacioncnse-dilse.org/aviso-legal.php) (footer CC BY-NC-SA 3.0 vs restrictive aviso legal); LSE-Health-UVigo (CC BY-NC 4.0) | [LSE-Sign](http://lse-sign.bcbl.eu/web-busqueda/?page_id=8) (2,400 signs coded for location/handshape/movement/NMF; register, CSV export); CORLSE | SWL-LSE VIDEOS_REF + SignPuddle 55; LSE-Sign CSV for internal use only |
| Catalan SL / LSC (csc) | [CORPUS LSC (IEC)](https://corpuslsc.iec.cat/area-de-descarrega/) CC BY 4.0 (gloss list of 5,064 rows with handshape-style suffixes + EAF/MP4); [SignPuddle 56](https://www.signbank.org/signpuddle2.0/data/spml/sgn56.spml) (3,422) | SIGN-HUB LSC grammar (NC-SA) | IEC restricted metadata | CORPUS LSC gloss list + SignPuddle 56; later cut citation-like tokens from the CC BY EAF/MP4 |
| Valencian SL (csn) | none | — | — | Nothing found; [FESORD](https://www.fesord.org/) frames the community language under LSE. Treat as an LSE variety |
| Portuguese SL / LGP (psr) | [SignPuddle 33](https://www.signbank.org/signpuddle2.0/data/spml/sgn33.spml) (496, but 75 entries sourced "YOUTUBE: Sinais Diários de Libras", i.e. Brazilian contamination) | — | [LGP Reference Corpus (UCP)](https://ciencia.ucp.pt/en/publications/portuguese-sign-language-reference-corpus-an-annotated-signed-cor/) (no data licence found) | SignPuddle 33 filtered on `<src>`; email UCP |
| Italian SL / LIS (ise) | [SignPuddle 63](https://www.signbank.org/signpuddle2.0/data/spml/sgn63.spml) (1,222) | [e-LIS v1.0](https://clarin.eurac.edu/repository/xmlui/handle/20.500.12124/75) (CC BY-NC-SA 4.0; ~300 citation signs, 2,677 mp4, 436 MB; videos originate from DIZLIS, so check the rights chain) | LIS Corpus (Geraci; individual agreement) | SignPuddle 63 + e-LIS as an NC reference |
| Maltese SL (mdl) | [SignPuddle 31](https://www.signbank.org/signpuddle2.0/data/spml/sgn31.spml) (2,833; bilingual MT/EN glosses; updated 2025-06-05); literature puddles 127/147 | — | MLRS LSM dictionary (UM; offline) | SignPuddle 31 (skip private puddle 103) |
| Swedish SL / STS (swl) | [SignPuddle 73](https://www.signbank.org/signpuddle2.0/data/spml/sgn73.spml) (81, negligible) | [Svenskt teckenspråkslexikon](https://teckensprakslexikon.su.se/information/om-lexikonet) CC BY-NC-SA 4.0 (~21.6k published signs, transcription + prose form description); STS-korpus (NC-SA, SND says NC) | Official SU export; "Tillstånd utöver denna licens" (permissions beyond the licence) | Prototype the parser on the [unofficial weekly CSV mirror](https://github.com/zrajm/teckentranskription) (21,728 rows); request the official export from SU |
| Norwegian SL / NTS (nsl) | [SignPuddle 69](https://www.signbank.org/signpuddle2.0/data/spml/sgn69.spml) (6,494) | — | [Norsk tegnordbok (Statped)](https://www.minetegn.no/Tegnordbok-2016/) (9,135-lexeme XML index, no licence); [Global Signbank NTS](https://signbank.cls.ru.nl/datasets/NTS) (1,946 glosses, restricted) | SignPuddle 69 (Tier A, mostly by SignWriting contributors) + emails to Statped and NTNU |
| Danish SL / DTS (dsl) | [SignPuddle 30](https://www.signbank.org/signpuddle2.0/data/spml/sgn30.spml) (53, negligible) | — | [tegnsprog.dk](https://tegnsprog.dk/om-ordbogen) (2,324 articles, 7,241 clips, Hånd 1/Hånd 2/Sted codes; "© Ordbog over Dansk Tegnsprog") | Email Danske Døves Landsforbund for a licensed export |
| Finnish SL / FinSL (fse) | [SignPuddle 57](https://www.signbank.org/signpuddle2.0/data/spml/sgn57.spml) (165) | [FinSL Signbank](https://signbank.csc.fi/) public ECV exports (2,354 + 878 glosses) + citation mp4s (videos CC BY-NC-SA 4.0); [Suvi](https://suvi.viittomat.net/) (videos CC BY-NC-SA 4.0; structural codes HTML only); CFINSL elicit (NC-SA + personal-data terms) | Suvi structural-code export (Kuurojen Liitto) | Signbank ECV 1+2 + mp4s (Tier B) |
| Finland-Swedish SL / FinSSL (fss) | none (no SignPuddle) | FinSL Signbank ECV 4 "FinSSL-VKK" (733 glosses) + mp4s; Suvi FinSSL; CFSTS elicit | — | Signbank ECV 4 + mp4s (Tier B) |
| Icelandic SL / ÍTM (icl) | [SignPuddle 131](https://www.signbank.org/signpuddle2.0/data/spml/sgn131.spml) (40, negligible) | [SignWiki Ísland](https://is.signwiki.org/index.php/SignWiki_Terms_of_Service) metadata (12,317 articles; handform/location infobox fields; "Creative Commons" NC, version unspecified); videos are YouTube (D) | SHH: licence version + original video files | SignWiki Ísland infobox export via the MediaWiki API (NC) + SHH request |
| Faroese SL (no ISO) | none (no SignPuddle) | [SignWiki Føroyar](https://fo.signwiki.org/index.php/SignWiki_Terms_of_Service) metadata (3,738 articles; handshape/location fields) | SHH / Føroyar maintainers | SignWiki Føroyar metadata (NC) |
| Greenlandic SL (no ISO) | none | — | — | Nothing found (no Compendium entry, no SignWiki, no puddle); search budget ran out, so this is not a confirmed "none" |

Note: SpreadTheSign is Tier D for every language. The Compendium quotes it as: "Download or use of videos and data without explicit permission, including for research, is prohibited." — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/spreadthesign.html)


#### Cross-language sources (apply to several languages)

##### SignPuddle 2.0 per-country SignWriting dumps (SPML) — all in-scope languages that have a puddle
- URL pattern (verified 200 OK by HEAD/GET on 2026-10-14): `https://www.signbank.org/signpuddle2.0/data/spml/sgn{ID}.spml` (index: [SignPuddle 2.0](https://www.signbank.org/signpuddle2.0/index.php?ui=1))
- Type: notation (Sutton SignWriting, FSW strings) + spoken-language gloss terms + optional `<text>` definitions + `<src>` contributor field; a handful of entries carry `<video>` tags (embedded/YouTube links).
- License (verbatim, from Valerie Sutton's statement): "All images, textbooks, instruction materials, written literature, and documentation posted on the SignWriting.org, SignWriting.net, SignBank.org, DanceWriting.org, MovementWriting.org and ValerieSutton.org web sites, which clearly relate to Sutton Movement Writing, including SignWriting ... are free to use, and are licensed under the Creative Commons Attribution-ShareAlike 3.0 Unported License." — [SW-L post, Oct 2013](https://listserv.linguistlist.org/pipermail/sw-l/2013-October/027651.html); same notice archived at [signwriting.org sw0927 PDF](https://www.signwriting.org/archive/docs10/sw0927_Permission_To_Use_SignWriting.pdf). Attribution asks: credit creators, credit Valerie Sutton as inventor, credit the website. Sutton also asked that the `source` field author be credited ([SW-L 2011](https://listserv.linguistlist.org/pipermail/sw-l/2011-May/055938.html)).
- Caveat: the [signbank.org homepage](https://www.signbank.org/) itself shows no license text (only "SignPuddle and SignText are trademarks belonging to Stephen Slevinski."); the per-puddle SPML files carry no license element. License therefore rests on the owner's published statement → treat as Tier A with attribution + share-alike obligations, flag "license asserted site-wide, not per-file".
- SPDX: CC-BY-SA-3.0 · Tier A · commercial_ok: yes (SA) · video_redistrib_ok: n/a (no videos; the few `<video>` tags point at third-party/YouTube = Tier D)
- Access route: direct dump URL (no registration)
- Measured on 2026-10-14 (entry count = `<entry` elements; Last-Modified = HTTP header):

| Lang (ISO) | Puddle ID | Title | Entries | Bytes | HTTP Last-Modified | Top `<src>` values |
|---|---|---|---|---|---|---|
| BSL (bfi) | 59 | Dictionary Great Britain | 853 | 241,042 | 2024-06-07 | SP 244; Sandy Fleming 142; SW 63 |
| BSL literature | 125 | Literature Great Britain | not counted | — | — | — |
| NISL (nsi) | 60 | Dictionary Northern Ireland | 56 | 12,080 | 2016-02-11 | — |
| ISL (isg) | 62 | Dictionary Ireland | 66 | 17,327 | 2022-03-02 | — |
| LSM (mdl) | 31 | Dictionary Malta | 2,833 | 885,036 | 2025-06-05 | MG 1021; LX 582; Maria Galea 317 |
| LSM (mdl) | 103 | Malta LSM Private Puddle | not counted | 219,973 | — | private — do not ingest without owner permission |
| LSM literature | 127 / 147 | Literature Malta / Archive | not counted | 679,426 / 586,271 | — | — |
| LSF (fsl) | 58 | Dictionnaire FR | 1,481 | 332,344 | 2025-06-28 | J 812; juliette 209; july 68 |
| LSFB (sfb) | 43 | Dictionnaire BE-fr | 3,465 | 727,959 | 2025-11-14 | — |
| VGT (vgt) | 44 | Woordenboek Flanders | 8,969 | 1,907,861 | 2026-10-07 | — (src mostly empty) |
| NGT (dse) | 68 | Woordenboek NL | 84 | 21,892 | 2025-03-23 | — |
| DGS (gsg) | 53 | Wörterbuch DE | 24,778 | 8,406,262 | 2025-10-13 | SW 12,908; rwth 2,427; JR 1,757 |
| DGS lit/enc | 26 / 27 | Literatur DE / Enzyklopädie DE | not counted | — | — | — |
| ÖGS (asq) | 29 | Wörterbuch AT | 5 | 1,976 | 2016-02-08 | effectively empty |
| DSGS (sgg) | 48 | Wörterbuch CH-de | 4,745 | 1,047,100 | 2022-03-03 | JE 18 |
| LSF-CH (ssr) | 49 | Dictionnaire CH-fr | 9,938 | 5,417,682 | 2026-10-11 | ACPG 7,566; AnHL 622 |
| LIS-SI (slf) | 50 | Dizionario CH-it | 3 | 1,359 | 2015-01-08 | effectively empty |
| LSE (ssp) | 55 | Diccionario España | 8,526 | 1,999,199 | 2026-07-23 | David Correia 4,105; msutton 2,302 |
| LSC (csc) | 56 | Diccionario Catalán | 3,422 | 958,646 | 2025-10-03 | RF 2,832 |
| LGP (psr) | 33 | Dicionário Portugal | 496 | 128,564 | 2026-02-15 | Jorge Rodrigues 108; Adam Frost 100; "YOUTUBE: Sinais Diários de Libras" 75 ← Brazilian Libras contamination |
| LIS (ise) | 63 | Dizionario IT | 1,222 | 278,110 | 2025-12-11 | B.Pennacchi 7 |
| STS (swl) | 73 | Ordbok Sverige | 81 | 19,171 | 2022-03-03 | — |
| NTS (nsl) | 69 | Ordbok NO | 6,494 | 1,748,078 | 2025-08-15 | msutton 2,462; Andrew Sutton 1,506 |
| DTS (dsl) | 30 | Ordbog Danmark | 53 | 14,497 | 2025-07-13 | — |
| FinSL (fse) | 57 | Dictionary Finland | 165 | 42,232 | 2016-04-11 | — |
| ÍTM (icl) | 131 | Ordabók IS | 40 | 8,312 | 2017-09-05 | — |
| No puddle | — | Luxembourg, Valencia (LSCV), Faroe, Greenland, FinSSL — absent from the 146-puddle index | — | — | — | — |

- Note: "Dictionary International" (sgn35) exists but is International Sign, out of scope. The index lists 146 puddles in total.
- Quality caveats: crowd-sourced; many entries by SignWriting teachers/hearing contributors (e.g. "msutton", "SW"); DGS puddle includes 2,427 entries sourced "rwth" (likely RWTH Aachen; provenance unverified); Portugal puddle contains Libras (Brazilian) entries → filter on `<src>`. SPML 1.6 header `mdt` timestamps are from 2011 while the HTTP files are regenerated recently.
- Next action: ingest all non-private puddles as a Tier A SignWriting notation layer (FSW → handshape/location/movement symbol IDs via ISWA 2010); keep `<src>` for attribution; drop entries with YouTube/Libras provenance; skip puddle 103.

##### Lingua Libre LSF videos on Wikimedia Commons — LSF (fsl)
- URL: [Category:Lingua Libre pronunciation-fsl](https://commons.wikimedia.org/wiki/Category:Lingua_Libre_pronunciation-fsl) (subcat: Category:Wikimedia France LSF project)
- Type: isolated-video (one sign per file, citation form, webm), keyed to Wikidata lexical items; files named `LL-Q33302 (fsl)-{Speaker}-{word}.webm`
- Size: 190 files (Commons categoryinfo, 2026-10-14); a 50-file sample = 46.4 MB → ≈175 MB total; uploads 2023-04-20…2024-02-01 in sample
- License (verbatim from Commons API LicenseShortName): sample of 50 = "CC0" ×49, "CC BY-SA 4.0" ×1 — [Commons API](https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:Lingua_Libre_pronunciation-fsl&prop=imageinfo&iiprop=extmetadata)
- SPDX: CC0-1.0 (mostly) / CC-BY-SA-4.0 · Tier A · commercial_ok: yes · video_redistrib_ok: yes (per-file license must be checked)
- Access route: MediaWiki API (per-file metadata) — no scraping needed
- Other ISO 639-3 Lingua Libre sign categories checked and absent: bfi, gsg, ssp, csc, ise, psr, swl, nsl, dsl, fse, vgt, sfb, dse, sgg, asq, isg, icl.
- Context: Wikimedia France LSF project born 2017 from Signes de Sens; Signes de Sens "expressed its intention" to put Elix videos under CC BY-SA ([Meta-Wiki WMFR LSF page](https://meta.wikimedia.org/wiki/Wikimedia_France/Groupes_de_travail/Groupes_th%C3%A9matiques/Langues/LSF)); Commons Category:Elix holds only 3 files → relicensing does not appear to have happened at scale (inference).
- Next action: pull per-file license via API, keep CC0/CC BY-SA only, use as Tier A LSF citation-form reference videos (~190 signs, 2+ signers).

##### Other Wikimedia Commons sign-language categories (small, mixed)
- [Category:French Sign Language](https://commons.wikimedia.org/wiki/Category:French_Sign_Language): 98 files; 50-file sample: CC BY-SA 2.0 ×30, CC BY-SA 3.0 ×13, CC BY-SA 4.0 ×5, PD ×2; includes 30 "LSF Vocab *.ogv" videos (CC BY-SA 2.0, e.g. File:LSF Vocab affreux.ogv, 114 KB). Tier A, tiny.
- [Category:German Sign Language](https://commons.wikimedia.org/wiki/Category:German_Sign_Language): 93 files, mostly images/SVG fingerspelling (CC BY-SA 4.0 26, PD 16 in sample) — not a lexicon.
- Italian (28 files, mostly PD historical images), British (8 files), Catalan (8 photos), Spanish (5), Swedish (4) — not useful as lexicons.

##### EASIER Multilingual Sign Language Wordnet (v4.0) — bfi, dse, fsl, gsg, sgg, swl (+gss, pso)
- URL: [FDR record 14190](https://www.fdr.uni-hamburg.de/record/14190) (DOI 10.25592/uhhfdm.14190; concept DOI 10.25592/uhhfdm.10168; online at sign-net.meine-dgs.de)
- Type: lexical-db (cross-lingual concept/synset links; sign IDs, glosses, video URLs pointing back to source lexicons)
- Size: 24,367 links between 14,028 signs and 16,534 synsets, 8 languages (README); 28 files, 6.9 MB
- License — CONFLICT: landing page: "Creative Commons Attribution 4.0 International" ([FDR 14190](https://www.fdr.uni-hamburg.de/record/14190)); README inside the record: "This licence concerns only the links made between synsets ID and signs ID. Those links are distributed under a Creative Commons BY-NC-SA 4.0 licence." and "Please consult the licences of the external resources listed below if you wish to use data regarding the signs and/or synsets themselves." and "The video files integrated into the wordnet are hosted by the respective lexical resources and are embedded with the kind permission of the resource creators." ([_README.md](https://www.fdr.uni-hamburg.de/record/14190/files/_README.md?download=1))
- SPDX: CC-BY-4.0 vs CC-BY-NC-SA-4.0 (take stricter) · Tier B · commercial_ok: no (README) · video_redistrib_ok: no (videos remain under source licenses)
- Sources per language (README): BSL → BSL SignBank (video URLs `bslsignbank.ucl.ac.uk/media/bsl-video/...`, 496 video lemmas); NGT → Global Signbank (`signbank.cls.ru.nl/dictionary/protected_media/glossvideo/NGT/...`); LSF → Dicta-Sign portal (`sign-lang.uni-hamburg.de/dicta-sign/portal/concepts/lsf/{n}.mp4`, 1,003 video lemmas); DSGS → Boyes Braem "Multimedia bilingual database for the lexicon of DSGS", videos courtesy UZH (`sign-lang.uni-hamburg.de/easier/sgb2024/*.sgb.mov`, 1,708 video lemmas); STS → Svenskt teckenspråkslexikon (IDs `sts.NNNNN`); DGS → Public DGS Corpus r3 + DW-DGS.
- Access route: direct dump URL (FDR files)
- Citation: Schulder, Bigeard, Kopf, Hanke et al. 2024, "Signs and Synonymity: Continuing Development of the Multilingual Sign Language Wordnet", sign-lang@LREC 2024, pp. 281–291.
- Next action: download (6.9 MB) and use only as an internal cross-language concept index (NC); never redistribute videos.

##### Dicta-Sign Lexicon / Corpus — BSL (bfi), DGS (gsg), LSF (fsl) (+GSL)
- URL: [Dicta-Sign portal](https://www.sign-lang.uni-hamburg.de/dicta-sign/portal/); [Compendium lexicon entry](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictasignlex.html); [Compendium corpus entry](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dictasign.html)
- Type: isolated-video + notation (HamNoSys) + glosses; corpus = continuous-video
- Size: "1000 signs per language"; "Citation form, HamNoSys, translation to English, Greek, German and French" (Compendium)
- License (verbatim, Compendium): "Individual license agreement for researchers"; portal: "Higher-resolution video as well as Bumblebee stereo data are available in a restricted-access area." / "Please contact us to get a password to access to these materials." No license statement on the portal itself.
- SPDX: LicenseRef-individual-agreement · Tier C · commercial_ok: unknown/no · video_redistrib_ok: no
- Access route: HTML browsing (public) / email for password
- Next action: email IDGS Hamburg asking whether HamNoSys strings for the ~1000-concept lexicon (BSL/DGS/LSF) can be licensed for avatar synthesis; HamNoSys is directly compilable via SiGML.

##### ECHO corpus — BSL (bfi), NGT (dse), STS (swl) (+small DGS)
- URL: [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/echo.html); TLA handle https://hdl.handle.net/1839/00-0000-0000-0001-4892-C
- Type: continuous-video (fables, poetry, interviews) + ELAN transcripts
- Size: "1.5 hours recorded" (Compendium)
- License (verbatim, Compendium): "CC BY-NC-ND 3.0"; "Open access to videos and transcripts via Language Archive". The TLA CMDI record ([archive.mpi.nl](https://archive.mpi.nl/objects/tla:1839_00_0000_0000_0001_4892_C/datastreams/CMD/content?asOfDateTime=2018-03-02T11:00:00.000Z)) shows no license text → UNVERIFIED on original. A LINDAT metadata record marks it "Readily Available: No" ([LINDAT](https://lindat.mff.cuni.cz/repository/xmlui/handle/11372/LRT-570?show=full)) — conflict.
- SPDX: CC-BY-NC-ND-3.0 · Tier B (ND forbids derived clips → effectively unusable) · commercial_ok: no · video_redistrib_ok: no (ND)
- Next action: skip for lexicon; not citation-form.

##### Content4All news corpus — DSGS (sgg) via SWISSTXT, VGT (vgt) via VRT
- URL: [CVSSP Content4All page](https://www.cvssp.org/data/c4a-news-corpus/)
- Type: continuous-video (broadcast interpretation) + OpenPose 2D and 2D→3D keypoints + subtitles + annotation JSON (SWISSTXT-NEWS, SWISSTXT-WEATHER, VRT-NEWS, plus RAW variants)
- License (verbatim): "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License." Access: "hosted by University of Surrey behind password protection ... contact us via e-mail" (r.bowden@surrey.ac.uk)
- SPDX: CC-BY-NC-SA-4.0 · Tier B (+C for access) · commercial_ok: no · video_redistrib_ok: NC-SA only
- Next action: low priority (continuous, interpreter signing); not a lexicon.

##### WMT-SLT SRF (DSGS) — see DACH section; Zenodo [6631275](https://zenodo.org/record/6631275): "available for research purposes only under a" CC BY-NC-SA 4.0; files restricted; 100.7 GB → Tier B/C.

##### UEA JASigning / CWASA SiGML demos — BSL, DGS, LSF (+GSL)
- URL: [JASigning Demos](https://vh.cmp.uea.ac.uk/index.php/JASigning_Demos); [SiGML Tools](https://vh.cmp.uea.ac.uk/index.php/SiGML_Tools)
- Type: notation (SiGML/HamNoSys) driving avatar; Dicta-Sign lexicon "Approximately 1000 signs are available in four national sign languages"; "BSL Examples"; "LinguaSign Dictionary" (DVDs sold via LinguaSign)
- License: none stated on the demo page → UNVERIFIED · Tier D until permission
- Next action: ask UEA Virtual Humans group whether the Dicta-Sign SiGML files are licensable (same ask as Dicta-Sign above).

##### Sign Language Dataset Compendium (Hamburg) — index
- [Language index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html) has pages for bfi, isg, sfb, vgt, fsl, dse, gsg, asq, sgg, ssp, csc, psr, ise, swl, nsl, dsl, fse, fss, icl; **no page for Maltese SL, Swiss-French, Swiss-Italian, Valencian, Luxembourgish, NISL, Faroese, Greenlandic**. Archival PDF: https://doi.org/10.25592/uhhfdm.12016.

##### SpreadTheSign — all languages: Tier D by policy (proprietary; skip).



#### British Sign Language (bfi)

##### BSL SignBank (UCL DCAL) — BSL (bfi)
- URL: https://bslsignbank.ucl.ac.uk/ (about pages: /about/dictionary, /about/acknowledgements/, /about/faq/)
- Type: lexical-db + isolated citation-form video
- Size: "over 2500 signs" (version last updated mid-2014). Signs come from about 12 h of BSL Corpus conversation data, the "What's your sign" task (249 signers) and Brien (1992). — [about/dictionary](https://bslsignbank.ucl.ac.uk/about/dictionary)
- License (verbatim): "No copying or linking (except to the BSL SignBank website) without the prior written permission of UCL." and "For permissions or other queries about BSL SignBank, contact bslsignbank@ucl.ac.uk." — [acknowledgements](https://bslsignbank.ucl.ac.uk/about/acknowledgements/), same text at [about/dictionary](https://bslsignbank.ucl.ac.uk/about/dictionary). No CC licence is stated anywhere. The FAQ and the dictionary search page carry only the footer "BSL SignBank 2026 - UCL DCAL Research Centre". `/about/conditions/` returns 404. The Hamburg Compendium lists the licence as "information not available". — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/bslsignbank.html)
- SPDX: LicenseRef-UCL-all-rights-reserved (no SPDX id)
- Tier: C (written permission from UCL required)
- Access route: HTML only. No export, CSV or download is mentioned on the about/dictionary/search pages. Per the compendium, the "Annotation ID Gloss, Phonology, Definitions and Notes" are visible only after confirmed registration.
- commercial_ok: no (not without written permission)
- video_redistrib_ok: no
- Approx disk: unknown (2,500 short MP4s; estimate a few GB, UNVERIFIED)
- Phonological/notation fields: public search has a handshape grid (~40 named shapes, e.g. Fist, Point, Letter-m) and a location diagram (~24 locations). There is no movement field, and the start value is used for signs that change handshape or location. — [dictionary search](https://bslsignbank.ucl.ac.uk/dictionary/), [about/dictionary](https://bslsignbank.ucl.ac.uk/about/dictionary). Registered users also see phonology coding (field list UNVERIFIED).
- Citation: Fenlon, J., Cormier, K., Rentelis, R., Schembri, A., Rowley, K., Adam, R., & Woll, B. (2014). BSL SignBank: A lexical database of British Sign Language (First Edition). London: DCAL, UCL. — [acknowledgements](https://bslsignbank.ucl.ac.uk/about/acknowledgements/)
- Next action: email bslsignbank@ucl.ac.uk. Ask for (a) a researcher account, (b) a CSV export of ID gloss + phonology fields, and (c) written permission to derive avatar clips and redistribute them. Until then, use it only as a human reference while hand-tuning.

##### BSL Corpus — Open Access subset (CAVA, UCL) — BSL (bfi)
- URL: https://bslcorpusproject.org/cava/ ; terms: https://bslcorpusproject.org/cava/open-access-data/ ; browse: digital-collections.ucl.ac.uk/R/?local_base=BSLCP
- Type: isolated-video (lexical elicitation, "What's your sign": 102 concepts per signer) + continuous-video (narratives) + ELAN annotations
- Size: whole corpus "125 hours recorded, 70000 tokens annotated". The open-access part is 386 lexical-elicitation recordings; free conversation (452) and language awareness (367) are restricted. — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/bslcorpus.html). 249 signers from 8 UK regions. ELAN lexical annotations exist for some conversation data (Bristol, Birmingham, London, Manchester) and some narrative data (Belfast, Glasgow). — [CAVA](https://bslcorpusproject.org/cava/)
- License (verbatim): "The BSL Corpus open access data is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License." (links creativecommons.org/licenses/by-sa/4.0/). The page adds that the data "can be used for teaching or research, or any other purpose". — [open-access-data](https://bslcorpusproject.org/cava/open-access-data/)
  - CONFLICT on the same page: the download terms say "duplication or sale of all or part of any of the data collection is not permitted" and that "any annotations, transcriptions and/or translations of the data that I undertake will be shared with the Registrar at the earliest possible opportunity." — [open-access-data](https://bslcorpusproject.org/cava/open-access-data/)
  - The citation page says "The data are copyright." and "© 2022 BSL Corpus Project | All Rights Reserved". — [acknowledgements-and-citation](https://bslcorpusproject.org/cava/acknowledgements-and-citation/)
  - The compendium independently lists "CC BY-SA 4.0" for narrative + lexical elicitation data. — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/bslcorpus.html)
- SPDX: CC-BY-SA-4.0 (with conflicting extra click-through terms)
- Tier: A on the licence text. Treat as A-pending: the click-through "no duplication or sale" clause conflicts with BY-SA, so get confirmation before redistributing.
- Access route: browse and download per clip in the CAVA web UI "without logging in" after agreeing to terms. No bulk dump URL found. Annotations (.eaf) are found by searching "eaf" in UCL Primo. — [CAVA](https://bslcorpusproject.org/cava/)
- commercial_ok: yes per CC BY-SA 4.0 ("any other purpose"), but the "sale ... not permitted" clause contradicts it, so UNRESOLVED
- video_redistrib_ok: yes under BY-SA (derivatives must be BY-SA), subject to the same conflict
- Approx disk: unknown. Not stated on the pages. 386 short elicitation sessions, so likely tens of GB (UNVERIFIED).
- Phonological/notation fields: none in the video. The ELAN tiers are ID-glosses that link to BSL SignBank, so the phonology itself sits in SignBank.
- Citation: Schembri, A., Fenlon, J., Rentelis, R., & Cormier, K. (2017). British Sign Language Corpus Project: A corpus of digital video data and annotations of British Sign Language 2008-2017 (Third Edition). London: UCL. Acknowledgement: "The data in this article were collected for the British Sign Language Corpus Project (BSLCP) at University College London, funded by the Economic and Social Research Council UK (RES-620-28-6001), and supplied by the CAVA repository." — [citation page](https://bslcorpusproject.org/cava/acknowledgements-and-citation/)
- Next action: email the CAVA Registrar / bslsignbank@ucl.ac.uk. Confirm that CC BY-SA 4.0 governs redistribution of derived avatar animations made from the lexical-elicitation clips, and that the "duplication or sale" clause does not apply to BY-SA derivatives. In parallel, pull a sample of lexical-elicitation clips (102 concepts × multiple regions) for fitting.

##### BSL Corpus — Restricted Access (conversation / interviews) — BSL (bfi)
- URL: https://bslcorpusproject.org/cava/restricted-access-data/
- Type: continuous-video + ELAN
- Size: 452 free-conversation + 367 language-awareness recordings (per [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/bslcorpus.html))
- License (verbatim): "To use any part of the materials only for the purposes of not-for-profit research." / "The materials may NOT be used for teaching." / "you undertake not to make any further copies, nor to distribute, publish, broadcast or disseminate" / "Access lasts until the end of each calendar year." Eligibility: "academic or research staff at a university or research institution" or "an undergraduate or postgraduate research student." — [restricted-access-data](https://bslcorpusproject.org/cava/restricted-access-data/). Obtaining an End User License "may take several weeks." — [CAVA](https://bslcorpusproject.org/cava/)
- SPDX: LicenseRef-BSLCP-EUL
- Tier: B/C (research-only End User Licence, no redistribution)
- Access route: register + licence request
- commercial_ok: no. video_redistrib_ok: no
- Approx disk: unknown
- Next action: skip for Marionet. It is not citation-form data and cannot be redistributed.

##### BOBSL (BBC-Oxford British Sign Language) — BSL (bfi)
- URL: https://www.robots.ox.ac.uk/~vgg/data/bobsl/
- Type: continuous-video (interpreted broadcast) + automatic sign spottings, I3D features, keypoints
- Size: 1,940 episodes, ~1.2M sentences, 77K text vocabulary, 37 signers. The page gives 1,447 h total (summary says ~1,400 h). Train 1,220 h / val 27 h / test 200 h / challenge 213 h. — [BOBSL page](https://www.robots.ox.ac.uk/~vgg/data/bobsl/)
- License (verbatim, VGG page): "Before getting access, you will need to complete a BBC BOBSL - Terms of Use agreement with the BBC." and "Use is not permitted by independent researchers, students in secondary education" (commercial organisations are also excluded). — [BOBSL page](https://www.robots.ox.ac.uk/~vgg/data/bobsl/). The BBC terms page (bbc.co.uk/rd/projects/extol-dataset) could not be fetched (tool blocked), so the full terms text is UNVERIFIED.
- SPDX: LicenseRef-BBC-BOBSL-ToU
- Tier: C (contract with the BBC; academic only)
- Access route: BBC form → personal password → download links. "certain annotations provided do not require the password for download." — [BOBSL page](https://www.robots.ox.ac.uk/~vgg/data/bobsl/)
- commercial_ok: no. video_redistrib_ok: no
- Approx disk: very large (1,400+ h of video; multi-TB, UNVERIFIED)
- Phonological fields: none (glosses come from automatic spotting)
- Citation: Albanie et al. (2021), "BBC-Oxford British Sign Language Dataset" (per VGG page)
- Next action: skip. It is continuous interpreted TV under a BBC contract, not usable for redistributable citation clips.

##### BSL-1K — BSL (bfi)
- URL: https://www.robots.ox.ac.uk/~vgg/research/bsl1k/
- Type: isolated sign spottings in continuous broadcast video
- Size: 1,000-sign vocabulary, ~1,000 h — [BSL-1K page](https://www.robots.ox.ac.uk/~vgg/research/bsl1k/)
- License: no licence on the page. It says only "Please see the BOBSL dataset release here." — [BSL-1K page](https://www.robots.ox.ac.uk/~vgg/research/bsl1k/). In effect it is distributed via BOBSL under the BBC terms.
- SPDX: n/a. Tier: C (via BOBSL). Access: via BOBSL. commercial_ok: no. video_redistrib_ok: no
- Next action: skip (same as BOBSL).

##### BSLDict (Oxford VGG) — BSL (bfi)
- URL: https://www.robots.ox.ac.uk/~vgg/research/bsldict/ ; code: https://github.com/gulvarol/bsldict
- Type: isolated-video (dictionary clips)
- Size: "a total of 14K video clips for a vocabulary of 9K words and phrases". Metadata `bsldict_v1.pkl` is 148 MB (not downloaded; over the 20 MB limit). — [GitHub](https://github.com/gulvarol/bsldict)
- License (verbatim): "The BSLDict dataset is available to download for commercial/research purposes" "under a Creative Commons Attribution 4.0 International License" BUT "The copyright remains with the original owners of the videos." and "If you see any of your own videos here and have any concerns with them being included in the dataset, please contact us". — [BSLDict page](https://www.robots.ox.ac.uk/~vgg/research/bsldict/)
- Provenance: "BSLDict dictionary videos are collected from a BSL sign aggregation platform" (signbsl.com). `download_videos.py` uses "a combination of `wget` and `youtube-dl` to download `.mp4` videos". — [GitHub README](https://github.com/gulvarol/bsldict)
- SPDX: CC-BY-4.0 (annotations/metadata only). The videos have no licence (third-party copyright).
- Tier: D for video (aggregated third-party and YouTube footage; scraped-mirror pattern). The gloss/metadata layer is nominally CC BY 4.0 but tied to unlicensed video.
- Access route: GitHub scripts that re-download from upstream URLs
- commercial_ok: metadata yes, videos no. video_redistrib_ok: no
- Approx disk: 148 MB metadata + videos (size not stated)
- Phonological fields: none (pre-computed I3D/MLP features; pose not released)
- Citation: Momeni, Varol, Albanie, Afouras, Zisserman (2020), "Watch, read and lookup: learning to spot signs from multiple supervisors", ACCV 2020
- Next action: do not ingest the videos. At most, use the 9K English gloss list as a vocabulary checklist.

##### SignBSL.com (aggregator) — BSL (bfi)
- URL: https://www.signbsl.com/
- Type: isolated-video aggregator
- Size: "21,000+" video signs, "150+ Contributing signers" — [signbsl.com](https://www.signbsl.com/)
- License: none stated. The only copyright line is "© 2013 - 2026. Website by Daniel Mitchell." Some featured signs are credited to third parties (Scottish Sensory Centre, QIA Dictionary of ICT). — [signbsl.com](https://www.signbsl.com/)
- SPDX: none. Tier: D. Access: HTML only. commercial_ok: no. video_redistrib_ok: no
- Next action: skip.

##### BSL norms: AoA / familiarity / iconicity (Vinson et al. 2008) — BSL (bfi)
- URL: https://research.birmingham.ac.uk/en/publications/the-british-sign-language-bsl-norms-for-age-of-acquisition-famili ; UCL DCAL Research Data Archive: https://www.ucl.ac.uk/library/dcal-research-data-archive (returned HTTP 403)
- Type: lexical norms (no phonology confirmed)
- Size: 300 BSL signs. Vinson, Cormier, Denmark, Schembri & Vigliocco (2008), Behavior Research Methods 40(4), 1079–1087 (per the [Birmingham record](https://research.birmingham.ac.uk/en/publications/the-british-sign-language-bsl-norms-for-age-of-acquisition-famili), via search snippet)
- License: UNVERIFIED (the DCAL archive page is 403; the BRM supplementary licence was not checked)
- Tier: unknown (likely B or C). commercial_ok / video_redistrib_ok: unknown
- Next action: email DCAL / check BRM supplementary materials. Useful as a priority gloss list (300 core signs).

##### BSL + DGS iconicity / concreteness database (Ortega, Schiefner, Lazarus, Perniss 2025) — BSL (bfi) [also DGS]
- URL: PMC11982127 (https://pmc.ncbi.nlm.nih.gov/articles/PMC11982127/); DOI 10.3758/s13428-025-02660-z
- Type: lexical norms (iconicity ratings, iconic strategies, concreteness)
- Size / fields / data licence: UNVERIFIED (PMC returned a reCAPTCHA; Springer redirected to login). The CNLSE catalogue reportedly marks it "copyrighted" (search snippet, not verified).
- Tier: unknown
- Next action: open the article's Data Availability statement (likely OSF) by hand. Also relevant to DGS.

##### SignPuddle (pointer; counts in the cross-language SignPuddle table)
- Dump URL pattern verified by GET: `https://www.signbank.org/signpuddle2.0/data/spml/sgn{ID}.spml`.
  - GB dictionary sgn59: 241,042 B, Last-Modified 2024-06-07
  - GB literature sgn125: 36,865 B
  - Ireland sgn62: 17,327 B, 2022-03-02
  - Northern Ireland sgn60: 12,080 B, 2016-02-11
  - Malta dictionary sgn31: 885,036 B, 2025-06-05
  - Malta literature sgn127: 679,426 B
  - Malta literature archive sgn147: 586,271 B
  - Malta LSM private puddle sgn103: 219,973 B
  - Puddle index: [signpuddle2.0](https://www.signbank.org/signpuddle2.0/)
- The SPML files carry no licence string inside (grep checked). The licence must come from the SignWriting/SignPuddle site terms (CC BY-SA 3.0; see the cross-language SignPuddle record).

##### BSL — Recommended first ingest
1. **BSL Corpus Open Access lexical-elicitation clips (CAVA), CC BY-SA 4.0 (Tier A-pending).** This is the only BSL video source with an explicit open licence. It holds 102 concepts across 249 signers and 8 regions, so it doubles as a regional-variant source. Send the clarification email about the "duplication or sale" clause first; meanwhile use it for fitting and tuning without redistributing.
2. **BSL SignBank (Tier C).** Request a researcher account, a phonology export and written permission. It is the canonical citation-form and ID-gloss source that the corpus annotations point to.
3. SignPuddle sgn59 (853 entries) as an open notation seed (see SignPuddle table).

##### BSL — Dead ends
- BOBSL / BSL-1K: BBC contract, academic only, continuous broadcast video (Tier C, skip). — [BOBSL](https://www.robots.ox.ac.uk/~vgg/data/bobsl/)
- BSLDict / signbsl.com: aggregated third-party and YouTube video, "copyright remains with the original owners" (Tier D). — [BSLDict](https://www.robots.ox.ac.uk/~vgg/research/bsldict/)
- BSL Corpus restricted data: not-for-profit research only, no redistribution. — [restricted](https://bslcorpusproject.org/cava/restricted-access-data/)
- `bslsignbank.ucl.ac.uk/about/conditions/`: 404. No public terms page or export.
- UCL DCAL Research Data Archive page: HTTP 403 (could not verify BSL norms licence).
- Not checked (search budget exhausted): Signature BSL dictionary, BSL Zone (BSLBT), SignStation, any Welsh BSL sign bank. All are presumptively Tier D (proprietary broadcast or commercial), UNVERIFIED.

---

#### Irish Sign Language (isg)

No "ISL Signbank" was found. The lrec language index for ISL lists no Signbank. — [sign-lang ISL index](https://www.sign-lang.uni-hamburg.de/lrec/language/isg.html)

##### Signs of Ireland Corpus (TCD Centre for Deaf Studies) — ISL (isg)
- URL: no public URL. CDS page: https://www.tcd.ie/slscs/centre-for-deaf-studies/research-and-resources/ ; compendium: https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/signsofirelandcorpus.html
- Type: continuous-video (self-selected stories, Frog stories) + ELAN
- Size: "10 hours recorded (estimate)", 40 signers (2004, led by Lorraine Leeson). Annotation covers "all self selected stories and a quarter of the Frog stories", following the ECHO conventions (Nonhebel et al. 2004). — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/signsofirelandcorpus.html)
- License: "information not available"; Access: "No public access" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/signsofirelandcorpus.html). The CDS page describes it only as "a collection of visual data of various Deaf signers from around Ireland" with no terms. — [CDS](https://www.tcd.ie/slscs/centre-for-deaf-studies/research-and-resources/)
- SPDX: none. Tier: C (permission). Access route: email TCD CDS. commercial_ok: unknown/no. video_redistrib_ok: no
- Phonological fields: early phonetic/phonological coding was reported (LREC 2010 workshop paper "You Get Out What You Put In: The Beginnings of Phonetic and Phonological Coding in the Signs of Ireland Digital Corpus"). — [ISL index](https://www.sign-lang.uni-hamburg.de/lrec/language/isg.html)
- Citation: Matthews, P. & Sheridan, S. (2015), "Digging into Signs Workshop" ([PDF](https://bslcorpusproject.org/wp-content/uploads/ISL-Matthews-Sheridan-Digging-into-Signs-Workshop.pdf)), as listed in the compendium
- Next action: email CDS TCD (Leeson) to ask whether a gloss lexicon or ID-gloss list can be shared. Low priority for video.

##### Smith ISL Non-Manual Feature dataset (Zenodo) — ISL (isg)
- URL: https://zenodo.org/records/10639554 (DOI 10.5281/zenodo.10639554; the badge shows 10.5281/zenodo.10639533)
- Type: lexical-db (frequency list) + NMF annotations / association rules (no video)
- Size: one ZIP, 68.4 MB. Contents: Appendix C, a lexical frequency list of the most frequent lexical items in the "SOI corpus" (expansion not given on the page; probably Signs of Ireland, UNVERIFIED); D, association rules; E, datasets used; F/G, R code. — [Zenodo](https://zenodo.org/records/10639554)
- License (verbatim): "Creative Commons Attribution 4.0 International" — [Zenodo](https://zenodo.org/records/10639554)
- SPDX: CC-BY-4.0
- Tier: A
- Access route: direct dump (Zenodo file download, 68.4 MB, over the 20 MB limit, so not downloaded here)
- commercial_ok: yes. video_redistrib_ok: n/a (no video)
- Approx disk: 68.4 MB
- Phonological fields: non-manual features (mouth, brows, etc. per the dissertation topic; exact fields UNVERIFIED)
- Citation: Smith, R. G. (2024). Smith_ISL_NMF_V1.0.0 [Data set]. Zenodo. Appendix to the PhD thesis "Exploiting Association Rules Mining to Inform the Use of Non-Manual Features in Sign Language Processing" (TU Dublin, 2023).
- Next action: download and use the lexical frequency list as an ISL priority gloss list, and the NMF rules for non-manual tuning. It is the only Tier A ISL item found.

##### ISL-HS (Irish Sign Language Hand-Shape dataset, DCU) — ISL (isg)
- URL: https://github.com/marlondcu/ISL ; paper: https://doras.dcu.ie/21882/
- Type: isolated-video / frames (fingerspelling handshapes only)
- Size: 26 one-handed fingerspelling shapes (23 static + 3 dynamic: J, X, Z), 468 .mov videos (30 fps, 640×480, iPhone 7), 58,114 frames (52,688 static + 5,426 dynamic), 6 signers (3M/3F). — [GitHub](https://github.com/marlondcu/ISL)
- License: the GitHub repo has no LICENSE file or licence section. — [GitHub](https://github.com/marlondcu/ISL). The DORAS record of the paper "A Dataset for Irish sign language recognition" states: "This item is licensed under a Creative Commons Attribution-NonCommercial-Share Alike 3.0 License." — [DORAS 21882](https://doras.dcu.ie/21882/). That licence covers the paper PDF, not explicitly the dataset. The thesis record (DORAS 22191) is CC BY-NC-ND 3.0. — [DORAS 22191](https://doras.dcu.ie/22191/). The sign-lang@LREC data page lists no licence. — [islhs](https://www.sign-lang.uni-hamburg.de/lrec/data/islhs.html)
- SPDX: none for the data (CC-BY-NC-SA-3.0 applies to the paper)
- Tier: D as published (no data licence). At best B if the authors confirm CC BY-NC-SA.
- Access route: GitHub (repo); direct download size not stated
- commercial_ok: no. video_redistrib_ok: no
- Next action: optional. It is only useful as a visual reference for the ISL manual alphabet handshapes when hand-tuning; do not redistribute.

##### ISL STEM Glossary (DCU) — ISL (isg)
- URL: https://www.dcu.ie/islstem
- Type: isolated-video (terminology)
- Size: count not stated on the page. A DCU news item says the first phase "contains over 200 videos" (search snippet: https://www.dcu.ie/news/news/2026/apr/first-ever-irish-sign-language-stem-glossary-launched-dcu)
- License: none stated. Videos are embedded from a third-party provider ("The video provider requires that you accept marketing and statistics cookies in order to view this video"). — [ISL STEM](https://www.dcu.ie/islstem)
- SPDX: none. Tier: D (or C if DCU grants permission). Access: HTML only. commercial_ok: no. video_redistrib_ok: no
- Next action: skip, or email DCU if STEM vocabulary is needed.

##### Irish Deaf Society English-ISL Dictionary — ISL (isg)
- URL: https://www.irishdeafsociety.ie/irish-sign-language/dictionary/
- Type: isolated-video, but explanatory (ISL explanations of English employment words, not sign-for-word entries)
- Size: first phase only (employment glossary, funded by Rethink Ireland, launched March 2025); no count given
- License: "© 2026 Irish Deaf Society"; no licence statement (the T&C page was not read). — [IDS dictionary](https://www.irishdeafsociety.ie/irish-sign-language/dictionary/)
- SPDX: none. Tier: D. Access: HTML only. commercial_ok: no. video_redistrib_ok: no
- Next action: skip. It does not fit the citation-form lexicon model.

##### ISL Covid-19 Glossary (IDS) and Justisigns 2 Glossary — ISL (isg)
- URLs: https://www.irishdeafsociety.ie/irish-sign-language-for-covid19-related-vocabulary/ ; https://justisigns2.com/
- Type: isolated-video (terminology glossaries)
- License: none listed on the catalogue pages ([covid](https://www.sign-lang.uni-hamburg.de/lrec/data/islcovid19glossary.html), [justisigns2](https://www.sign-lang.uni-hamburg.de/lrec/data/justisigns2glossary.html)). The source sites' terms were not read (UNVERIFIED).
- Tier: D (no stated licence). Next action: skip.

##### ATIS Sign Language Corpus (DGS / ISL / SASL) — ISL (isg)
- URL: https://aclanthology.org/L08-1470 ; catalogue: https://www.sign-lang.uni-hamburg.de/lrec/data/atiscorpus.html
- Type: continuous-video (air-travel domain, for machine translation)
- License: not stated on the catalogue page. — [atiscorpus](https://www.sign-lang.uni-hamburg.de/lrec/data/atiscorpus.html)
- Tier: C (UNVERIFIED; contact RWTH/DCU). Next action: skip (continuous, small domain).

##### Concise ISL (app) — ISL (isg)
- URL: https://apps.apple.com/app/id1046591871
- Type: isolated-video (commercial app, ~1000 signs per the store listing via search snippet)
- Tier: D (proprietary). Next action: skip.

##### ISL — Recommended first ingest
1. **Smith ISL NMF dataset (Zenodo, CC BY 4.0, Tier A, 68.4 MB).** Use its lexical frequency list as the ISL priority gloss list and its NMF rules for non-manual tuning. It contains no video.
2. **SignPuddle Ireland sgn62 (66 entries)** as a tiny open notation seed (see SignPuddle table).
3. For citation-form video there is no openly licensed ISL source. Email TCD CDS (Signs of Ireland) and DCU (ISL STEM) for permission (Tier C).

##### ISL — Dead ends
- No ISL Signbank exists, per the lrec ISL index and a direct search. — [ISL index](https://www.sign-lang.uni-hamburg.de/lrec/language/isg.html)
- Signs of Ireland: "No public access", licence "information not available".
- ISL-HS: fingerspelling only, no data licence.
- IDS dictionary, ISL STEM, Covid-19 and Justisigns 2 glossaries: no licence, embedded video (Tier D).
- Concise ISL: commercial app.
- Australian Irish Sign Language corpus: a different variety, restricted; licence "information not available" (search snippet: https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/australianirishsl.html, not opened).

---

#### Northern Ireland Sign Language (nsi)

No dedicated NISL dictionary, Signbank, corpus or dataset was found. The one search for NISL resources returned only ISL/BSL material.

##### BSL Corpus — Belfast region (CAVA) — NISL / BSL as used in NI (nsi)
- URL: https://bslcorpusproject.org/cava/
- Type: isolated-video (lexical elicitation) + narratives with ELAN
- Notes: Belfast is one of the BSL Corpus's 8 UK regions. CAVA lists ELAN annotations for "some narrative data (Belfast, Glasgow)". — [CAVA](https://bslcorpusproject.org/cava/). Licence and tier are the same as the BSL Corpus Open Access record above: CC BY-SA 4.0, Tier A-pending, with the click-through conflict.
- Caveat: these recordings are catalogued as BSL. Whether any Belfast signers use ISL-influenced "NISL" forms is not stated (UNVERIFIED).
- Next action: when ingesting BSL Corpus lexical elicitation, tag Belfast-region signers so NI variants can be split out later.

##### SignPuddle "Dictionary Northern Ireland" sgn60 — (nsi)
- 56 entries; SPML 12,080 B; Last-Modified 2016-02-11. The puddle does not name the sign language (BSL vs ISL vs NISL). — [signpuddle2.0 index](https://www.signbank.org/signpuddle2.0/), dump https://www.signbank.org/signpuddle2.0/data/spml/sgn60.spml
- Tier: A (SignPuddle site licence; see cross-language record). Next action: ingest with the other puddles; flag the language as ambiguous.

##### NISL — Recommended first ingest
- BSL Corpus Belfast-region lexical elicitation (Tier A-pending), plus SignPuddle sgn60 (tiny). Otherwise treat nsi as "no dedicated source".

##### NISL — Dead ends
- Search "Northern Ireland Sign Language NISL dictionary corpus resource" found no NISL-specific resource (results were ISL/BSL only).
- Not checked (search budget): Ulster University, RNID / Action on Hearing Loss NI, BDA NI. These are possible contacts only.

---

#### Maltese Sign Language (mdl)

##### MLRS Dictionary of Maltese Sign Language (University of Malta) — LSM (mdl)
- URL: formerly https://mlrs.research.um.edu.mt/lsm/ (Django app). The Wayback CDX lists `/lsm/static/...` assets captured 2020–2023 and `/media/signwrite/s_*.bmp` SignWriting images (e.g. s_Abbati_1.bmp, s_Bibbja_1.bmp) captured 2024–2025.
- Status: as of 2026-10-14, every mlrs.research.um.edu.mt URL (root, /resources/, /resources/minsel, /resources/lsm) returns 302 to http://www.um.edu.mt → https://www.um.edu.mt/, so the dictionary appears OFFLINE (checked with curl -I). The Wayback page fetch could not be completed because the Internet Archive answered "Temporarily Offline".
- Type: lexical-db + SignWriting images + (likely) video (UNVERIFIED)
- Size: unknown. Per search snippets of the MLRS homepage, the "online Dictionary of Maltese Sign Language" was "launched in December 2018".
- License: UNVERIFIED (site offline; no terms seen)
- SPDX: none. Tier: C (contact UM Institute of Linguistics and Language Technology)
- Access route: none currently (HTML only when it was live)
- commercial_ok / video_redistrib_ok: unknown
- Phonological/notation fields: SignWriting images (BMP) per the archived media paths
- Next action: email the UM Institute of Linguistics and Language Technology (MLRS maintainers) about the status of /lsm/ and ask for a data export and licence. Retry the Wayback snapshot of /lsm/ later.

##### Maltese Sign Language Dictionary (Foundation for the Development of Maltese Sign Language + UM Institute of Linguistics; print/CD-ROM) — LSM (mdl)
- URL: https://signwriting.org/malta/malta.html ; samples https://www.signwriting.org/malta/malta01.html ; sample PDF https://www.signwriting.org/archive/docs1/sw0062-MA-Maltese-Sign-Dict.pdf ; CD-ROM FAQ https://www.itsmalta.net/msl_faq.html (HTTP 403)
- Type: notation (SignWriting) + illustrations + video + text (print/CD-ROM)
- Size: not stated
- License: "Published by the Foundation for the Development of Maltese Sign Language" with no explicit licence or copyright statement on the page. — [signwriting.org/malta](https://signwriting.org/malta/malta.html). Booklets are sold through CRPD (helpdesk@crpd.org.mt), per a search snippet (UNVERIFIED).
- SPDX: none. Tier: C/D (proprietary publication). commercial_ok: no. video_redistrib_ok: no
- Next action: skip for ingest. The SignWriting content overlaps with the SignPuddle Malta puddles, which carry an open licence.

##### SignPuddle Malta puddles — LSM (mdl) (pointer; counts in the cross-language SignPuddle table)
- sgn31 Dictionary Malta: 885,036 B, Last-Modified 2025-06-05, actively maintained. Glosses are bilingual Maltese/English (e.g. "TARBIJA" / "BABY", "TELEFON" / "TELEPHONE").
- sgn127 Literature Malta: 679,426 B. sgn147 Literature Malta Archive: 586,271 B. sgn103 "Malta LSM Private Puddle": 219,973 B (publicly downloadable despite the name; whether the open licence applies to a "private" puddle is UNVERIFIED).
- Dumps: https://www.signbank.org/signpuddle2.0/data/spml/sgn{31,127,147,103}.spml
- Tier: A (SignPuddle site licence; see cross-language record)

##### LSM — Recommended first ingest
1. **SignPuddle sgn31 (Dictionary Malta)**: the largest and most recently updated open source among BSL, ISL, NISL and LSM. It has bilingual glosses and SignWriting FSW, which is enough to drive SignDesc. See SignPuddle table.
2. Contact UM (MLRS /lsm/) for video and licence (Tier C).

##### LSM — Dead ends
- MLRS LSM dictionary: host redirects to the UM homepage (offline); no licence seen.
- itsmalta.net MSL CD-ROM FAQ: HTTP 403.
- 2013 "SignBook" app: mentioned on the SW-L list; current status unknown (search snippet only).
- Search found no CRPD app or CRPD online sign list.


#### French Sign Language / LSF (fsl)

##### Ortolang MOCAP1 — LSF (fsl)
- URL: https://www.ortolang.fr/market/item/mocap1 (handle https://hdl.handle.net/11403/mocap1, v2, published 2022-06-23)
- Type: mocap + continuous-video (elicited picture descriptions, not citation forms)
- Size: v1 has 87 BVH mocap files (signers l1–l4) and 187 MP4 videos (8 signers, 25 photo descriptions). v2 adds 144 normalised CSV mocap files (6 signers × 24 images). Total datasize is 2,662,627,537 bytes.
- License (verbatim): license id `license-cc-by-nc-sa-4_0`, "Licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International". The conditionsOfUse field adds: "This corpus can only be downloaded by members of public university and research structures. By downloading this corpus, the user agrees to the following: 1) to use this corpus only for non-commercial scientific research or university teaching purposes; 2) to clearly indicate the origin of the corpus … 3) only distribute it through the Ortolang platform." — [Ortolang record via API](https://repository.ortolang.fr/api/search/items/mocap1?type=corpora)
- SPDX: CC-BY-NC-SA-4.0, plus extra restrictions: only public higher-education and research (ESR) staff may download, and redistribution is allowed only via Ortolang. Those extras are stricter than plain CC.
- Tier: B (NC, research-only; the redistribution clause blocks shipping derivatives)
- Access route: Ortolang login (institutional) then download
- commercial_ok: no
- video_redistrib_ok: no (Ortolang-only)
- Approx disk: 2.7 GB
- Phonological/notation fields: none. Annotations are gloss level.
- Citation: M.-E. Benchiheub, B. Berret, A. Braffort, "Collecting and Analysing a Motion-Capture Corpus of French Sign Language", LREC 2016 WRPSL, 7-12. Copyright: LIMSI-CNRS, CIAMS-Université Paris-Sud & LISN, Université Paris-Saclay.
- Next action: Only BVH-format LSF mocap with a clear licence. Useful for internal retarget R&D (BVH to VRM) if Marionet qualifies as ESR research. Not shippable.

##### Ortolang CLM-MOCAP — LSF (fsl)
- URL: https://www.ortolang.fr/market/item/clm-mocap (v2, 2023-01-26)
- Type: mocap (Perception Neuron v2, 32 IMUs, 60/120 Hz) + HD video; elicited monologues and dialogues
- Size: 10 signers, 2,977 signs produced, 46 min 20 s in total. Datasize is 9,905,738,331 bytes.
- License (verbatim): `license-cc-by-nc-sa-4_0`, "Licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International". The conditions add: "L'utilisateur s'engage à n'utiliser tout ou partie ce corpus qu'à des fins de recherches scientifiques ou d'enseignement universitaire. Aucune utilisation à des fins commerciales n'est autorisée." — [Ortolang API](https://repository.ortolang.fr/api/search/items/clm-mocap?type=corpora)
- SPDX: CC-BY-NC-SA-4.0 (+ research/teaching-only clause)
- Tier: B
- Access route: Ortolang download (statusOfUse `free_for_non_commercial_use`)
- commercial_ok: no
- video_redistrib_ok: SA under NC only, and the extra clause restricts use to research
- Approx disk: 9.9 GB
- Phonological/notation fields: kinesiological movement/location focus (Boutet's approach). The thesis is about "Localisation initiale et Mouvement".
- Citation: Léa Chevrefils' thesis (defended 2022-11-24). Copyright: Laboratoire Dynamique du Langage In Situ.
- Next action: Secondary mocap R&D source. Not shippable.

##### Ortolang Rosetta-LSF — LSF (fsl)
- URL: https://www.ortolang.fr/market/item/rosetta-lsf (v3, 2022-06-23)
- Type: continuous-video (avatar-rendered from mocap) + AZee descriptions. The project also recorded 1,200 isolated signs (task 4), which are NOT in the Ortolang release.
- Size: about 3 h. The record says: "The realization of 1200 isolated signs corresponding to the most frequent notions…", and "This version of the repository contains the elicitation material and the videos of the first 3 tasks, the annotations of the videos of task 1 … as well as their description in AZee". 100 fps files "can nevertheless be obtained by contacting Mocaplab". Datasize is 625,329,262 bytes.
- License (verbatim): `license-cc-by-nc-4_0`, "Licence Creative Commons Attribution - Pas d'Utilisation Commerciale 4.0 International". The conditions add ESR-only download, non-commercial research/teaching use, and "ne le diffuser qu'à travers la plateforme Ortolang". — [Ortolang API](https://repository.ortolang.fr/api/search/items/rosetta-lsf?type=corpora)
- SPDX: CC-BY-NC-4.0 (+ ESR-only, Ortolang-only)
- Tier: B for the Ortolang release. Tier C for the 1,200 isolated-sign mocap, which needs a contract with MocapLab and Systran.
- Access route: Ortolang (ESR login). Isolated-sign mocap only by email to MocapLab.
- commercial_ok: no
- video_redistrib_ok: no
- Approx disk: 0.6 GB
- Phonological/notation fields: AZee expressions (a formal LSF representation from LISN)
- Citation: Rosetta project (Systran, MocapLab, LISN).
- Next action: Email LISN (A. Braffort) and MocapLab to ask about licensing the 1,200 isolated citation-form signs as mocap. This is the closest thing to an "LSF 3D-LEX".

##### Ortolang "40 brèves" — LSF (fsl)
- URL: https://www.ortolang.fr/market/item/40-breves (v3, 2024-05-28)
- Type: continuous-video + notation (AZee)
- Size: "40 brèves journalistiques … traduites chacune en LSF par trois traducteurs. 120 vidéos au total (~30 s par vidéo) … 120 expressions AZee". Datasize is 1,751,104,119 bytes.
- License (verbatim): `license-cc-by-nc-sa-4_0`. The conditions read: "(1) n'utiliser ce corpus qu'à des fins de recherche scientifique ou d'enseignement universitaire non commerciales ; (2) référencer l'origine … (3) ne le diffuser qu'à travers la plateforme Ortolang." — [Ortolang API](https://repository.ortolang.fr/api/search/items/40-breves?type=corpora)
- SPDX: CC-BY-NC-SA-4.0 (+ Ortolang-only)
- Tier: B
- Access route: Ortolang download
- commercial_ok: no; video_redistrib_ok: no
- Approx disk: 1.8 GB
- Phonological/notation fields: AZee (utterance level, not lexical phonology)
- Next action: Low priority. Of interest only if Marionet adds AZee input.

##### Ortolang Mediapi-RGB — LSF (fsl)
- URL: https://www.ortolang.fr/market/item/mediapi-rgb (v1.1, 2026-07-20)
- Type: continuous-video (Média'Pi! news) + OpenPose/MediaPipe/I3D/Swin features + a lemmatised noun vocabulary
- Size: 1,230 videos, 86 h, 50,084 segments (444×444, 25 fps). Datasize is 125,001,031,901 bytes.
- License (verbatim): `license-cc-by-nc-sa-4_0`. The conditions read: "access to this resource is restricted to public higher education and research staff (ESR). Only those who can log in via their institution's portal may download the resources … If this does not apply to you, there is no need to submit a request by email; no exceptions can be made." — [Ortolang API](https://repository.ortolang.fr/api/search/items/mediapi-rgb?type=corpora)
- SPDX: CC-BY-NC-SA-4.0 (+ eduGAIN-only access)
- Tier: B, effectively C/D for a non-ESR user
- Access route: eduGAIN institutional login only
- commercial_ok: no; video_redistrib_ok: no
- Approx disk: 125 GB (over the download cap; HEAD only)
- Phonological/notation fields: none
- Next action: Skip. It is continuous, huge, and has no citation forms.

##### Ortolang MEDIAPI-SKEL — LSF (fsl)
- URL: https://www.ortolang.fr/market/item/mediapi-skel (v2, 2023-06-05)
- Type: continuous pose (OpenPose 135 keypoints; v2 adds MediaPipe Holistic) + WebVTT subtitles. No RGB video.
- Size: 368 videos, 27 h. Datasize is 25,155,095,220 bytes.
- License (verbatim): `license-cc-by-nc-4_0`, "Licence Creative Commons Attribution - Pas d'Utilisation Commerciale 4.0 International". The conditions read: "This corpus can only be downloaded by members of public university and research structures … 1) to only use this corpus for non-commercial scientific research and teaching … 3) to only redistribute the corpus via the Ortolang platform". — [Ortolang API](https://repository.ortolang.fr/api/search/items/mediapi-skel?type=corpora)
- SPDX: CC-BY-NC-4.0 (+ ESR-only, Ortolang-only)
- Tier: B
- Access route: Ortolang ESR login
- commercial_ok: no; video_redistrib_ok: n/a (the original videos need a Média'Pi! agreement)
- Approx disk: 25 GB
- Next action: Skip for dictionary building.

##### Ortolang Dicta-Sign-LSF-v2 — LSF (fsl)
- URL: https://www.ortolang.fr/market/item/dicta-sign-lsf-v2 (v1, 2022-06-22; handle https://hdl.handle.net/11403/dicta-sign-lsf-v2)
- Type: continuous-video (dialogues) + OpenPose and handshape estimates + annotation
- Size: about 8 h by the Ortolang description (SLDC says 11 h, 35,000 tokens, 16–18 signers). Datasize is 43,574,895,168 bytes.
- License (verbatim): `license-cc-by-nc-sa-4_0` + "This corpus can only be downloaded by members of public university and research structures … only distribute it through the Ortolang platform." — [Ortolang API](https://repository.ortolang.fr/api/search/items/dicta-sign-lsf-v2?type=corpora)
- SPDX: CC-BY-NC-SA-4.0 (+ ESR/Ortolang-only)
- Tier: B
- Access route: Ortolang ESR login
- commercial_ok: no; video_redistrib_ok: no
- Approx disk: 44 GB
- Next action: Skip. The HamNoSys-coded 1,000-concept Dicta-Sign lexicon is covered in the cross-language section.

##### Ortolang DEGELS1 — LSF (fsl)
- URL: https://www.ortolang.fr/market/item/degels1 (v1, 2022-06-22)
- Type: continuous-video (3 LSF + 3 French route-description dialogues)
- License (verbatim): `license-cc-by-nc-sa-4_0` + ESR-only / Ortolang-only clause (same wording as MOCAP1) — [Ortolang API](https://repository.ortolang.fr/api/search/items/degels1?type=corpora)
- SPDX: CC-BY-NC-SA-4.0; Tier: B; Access: Ortolang; commercial_ok: no; video_redistrib_ok: no
- Approx disk: 3.3 GB
- Next action: Skip.

##### Ortolang CREAGEST (dialogue ortolang-000926; acquisition ortolang-000916) — LSF (fsl)
- URL: https://www.ortolang.fr/market/corpora/ortolang-000926 and https://www.ortolang.fr/market/corpora/ortolang-000916
- Type: continuous-video (adult dialogues, 106 h, 51 interviews; child acquisition subset of 20 files)
- License (verbatim): `license-cc-by-nc-nd-3_0`, "licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Pas de Modification 3.0 non transposé" — [Ortolang API 000926](https://repository.ortolang.fr/api/search/items/ortolang-000926?type=corpora), [000916](https://repository.ortolang.fr/api/search/items/ortolang-000916?type=corpora). SLDC agrees (CC BY-NC-ND 3.0) — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/creagest.html)
- SPDX: CC-BY-NC-ND-3.0
- Tier: B. ND forbids derivatives, so it is effectively unusable for re-targeted clips.
- Approx disk: 140.9 GB (dialogue) / 0.27 GB (acquisition)
- commercial_ok: no; video_redistrib_ok: verbatim only, non-commercial
- Next action: Skip.

##### Other Ortolang LSF items (dead ends for lexicon purposes)
- `signes-en-famille`: CC BY-NC-ND 3.0. The conditions say "L'exploitation des données est limitée à des fins scientifiques … ne pas diffuser le corpus". 209.9 GB of family dinner interactions. — [API](https://repository.ortolang.fr/api/search/items/signes-en-famille?type=corpora)
- `corpus-catteau-2020`: CC BY-NC-ND 3.0, 54.9 GB. — [API](https://repository.ortolang.fr/api/search/items/corpus-catteau-2020?type=corpora)
- Also listed under fsl but not inspected: `chapter-point_to_din_part`, `locaentreformulation`, `dinlang_doing_attending`, `locaent`, `petit-sandrine`, `illustrations-these`, `extraits-videos-these`, `lgidf` (mis-tagged; languages sqi/ara/bam/swb). All appear to be thesis or interaction clips, not lexical. — [Ortolang fsl query](https://repository.ortolang.fr/api/search/items?type=Corpus&corporaLanguages.id%5B%5D=fsl&size=200)
- No Ortolang record is typed Lexicon for fsl: queries with `type=Lexicon&lexiconInputLanguages.id[]=fsl` returned 0 hits.
- "LSF-ANSHE", "Sign'Maths", "LS-COLIN" and "LSF-SHELVES" do not appear among the 18 fsl corpora returned by the Ortolang language query. They may exist under other language tags; not verified.

##### Elix (Signes de Sens) — LSF (fsl)
- URL: https://dico.elix-lsf.fr/ (terms: https://dico.elix-lsf.fr/mentions-legales)
- Type: lexical-db + isolated-video (citation forms + LSF definitions)
- Size: SLDC says 15,300 signs — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/elix.html)
- License (verbatim): CGU Article 5: "Tous les éléments du site Internet www.dico.elix-lsf.fr (notamment les textes, graphismes, photos) sont la propriété exclusive de l'association, sauf indication différente. Aucune reproduction, même partielle, autres que celles prévues à l'article L 122-5 du code de la propriété intellectuelle, ne peut être faite de ce site sans son autorisation expresse." — [Elix mentions légales (CGU "Au 1er septembre 2018")](https://dico.elix-lsf.fr/mentions-legales)
- SPDX: LicenseRef-proprietary (all rights reserved)
- Tier: C (written permission from Signes de Sens). Tier D if no answer.
- Access route: HTML only
- commercial_ok: no; video_redistrib_ok: no
- Phonological fields: none exposed (citation form + definitions per SLDC)
- Relicensing check: the current CGU (dated 1 Sept 2018) has no Creative Commons grant. Neither the home page nor the legal page contains "Creative Commons" or "CC BY". No evidence was found that the 2017 plan to put Elix videos under CC BY-SA was carried out on Elix itself. A search for Elix videos on Wikimedia Commons could not be run (search budget gone).
- Contact: contact@elix-lsf.fr (from the CGU)
- Next action: Email Signes de Sens and ask whether any subset is CC BY-SA (e.g., via Wikimedia/Lingua Libre). Otherwise treat as Tier C.

##### Ocelles — LSF (fsl)
- URL: http://www.ocelles.fr
- Type: lexical-db (bilingual concept/definition wiki, user contributions)
- License (verbatim): UNVERIFIED. SLDC lists "Licence CC BY-SA 2.0 FR" — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/ocelles.html). On 2026-10-14 the original site could not be reached: curl gave HTTP 000 on both http and https, and WebFetch gave ECONNRESET.
- SPDX (if confirmed): CC-BY-SA-2.0-FR
- Tier: A if confirmed and the site or a dump is retrievable. Unverified for now.
- Access route: HTML only (when online)
- commercial_ok: yes if CC BY-SA; video_redistrib_ok: yes under SA if confirmed
- Next action: Retry later, then check a Wayback snapshot of the licence footer (manual check, no scraping). The site appears to be offline, so the data may be lost unless a dump exists.

##### sematos — LSF (fsl) [also LSE/LSC/IS]
- URL: http://www.sematos.eu (terms https://www.sematos.eu/fr/terms)
- Type: lexical-db + isolated-video. SLDC counts 3,605 LSF signs with handshape/topic/POS — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/sematos.html)
- License (verbatim): The terms forbid users to "Télécharger ou extraire systématiquement du contenu du Service" and to "Redistribuer du contenu vidéo sans consentement écrit préalable". Section "4. Propriété intellectuelle: Tout le contenu du Service, y compris les vidéos, textes, graphiques et logiciels, est la propriété de Sématos.eu ou de ses fournisseurs de contenu". There is also a paid tier, Sématos+. — [sematos terms](https://www.sematos.eu/fr/terms)
- SPDX: LicenseRef-proprietary; Tier: D (C only via a commercial deal)
- commercial_ok: no; video_redistrib_ok: no
- Next action: Skip.

##### Dicta-Sign Lexicon / Corpus — LSF (fsl)
- See the cross-language Dicta-Sign record. For reference, SLDC gives the licence as "Individual license agreement for researchers" and the lexicon has HamNoSys for about 1,000 concepts per language — [SLDC lexicon](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictasignlex.html). Tier C.

##### SpreadTheSign (LSF and others)
- SLDC quotes: "Download or use of videos and data without explicit permission, including for research, is prohibited." — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/spreadthesign.html). Tier D per the brief.

##### Recommended first ingest — LSF
- No Tier A LSF lexical dump was verified. Candidates in order:
  1. Lingua Libre LSF on Commons (cross-language section; ~190 webm, mostly CC0). This is the only Tier A LSF video source.
  2. SignPuddle FR puddle 58 (cross-language section; CC BY-SA, SignWriting).
  3. Ocelles, if its CC BY-SA 2.0 FR licence and content can be recovered.
- For mocap R&D only (Tier B, ESR-only): Ortolang MOCAP1 BVH (2.7 GB).
- Strategic contact: LISN/MocapLab for the 1,200 isolated-sign Rosetta mocap (Tier C).

##### Dead ends — LSF
- Elix: all rights reserved (above). Sematos: proprietary (above). Creagest, Signes en famille, Catteau: ND. Mediapi-RGB: eduGAIN-only, 125 GB. Ortolang has no Lexicon-type LSF record.
- Not reached because the search budget ran out: IVT dictionary terms, the "Dictionnaire bilingue LSF" (Monica Companys), Sign3D mocap, LSF-ANSHE, and the Wikimedia France LSF project status.

---

#### Belgian French SL / LSFB (sfb)

##### Dictionnaire de LSFB / "LSFB en ligne" (LSFB asbl, PERLe) — LSFB (sfb)
- URL: https://dico.lsfb.be/ (dicto.lsfb.be redirects here); licence page https://dico.lsfb.be/licence-creative-commons/
- Type: lexical-db + isolated-video (citation forms). It can be browsed "Par configuration de la main" and "Par localisation", i.e., by handshape and location. Adult and Junior sections. Sub-collections are labelled "Dico", "STIM+ LSFB" and "Larousse".
- Size: SLDC says 4,000 signs, with citation form, homonyms, synonyms, variants, SignWriting, etymology, definition and signed example — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/lsfbenligne.html)
- License (verbatim), which CONFLICTS within the site:
  - The licence page body says: "Ce contenu est mis à disposition selon les termes de la licence Creative Commons. Attribution – Pas d'Utilisation Commerciale – Pas de Modification 4.0 International (CC BY-NC-ND 4.0) Vous êtes libre de partager et de redistribuer ces contenus, à condition de créditer LSFB asbl, de ne pas les utiliser à des fins commerciales et de ne pas les modifier." It links to creativecommons.org/licenses/by-nc-nd/4.0/ — [dico.lsfb.be licence page](https://dico.lsfb.be/licence-creative-commons/)
  - The site-wide footer says: "Droit d'auteur : les vidéos sont disponibles sous licence Creative Commons attribution, partage dans les mêmes conditions." It links to creativecommons.org/licenses/by-sa/4.0/deed.fr — [dico.lsfb.be home](https://dico.lsfb.be/)
- SPDX: CC-BY-NC-ND-4.0 (licence page) vs CC-BY-SA-4.0 (footer)
- Tier: B as stated on the licence page (NC + ND blocks derived avatar clips). It would be Tier A if LSFB asbl confirms the footer's CC BY-SA 4.0.
- Access route: HTML only. A mobile app exists (App Store id6747142463). No dump found.
- commercial_ok: no (licence page) / yes (footer)
- video_redistrib_ok: verbatim only, NC (licence page) / yes, SA (footer)
- Phonological fields: handshape ("configuration de la main") and location browse indexes; SignWriting per SLDC
- Citation: credit "LSFB asbl" (licence page). © PERLe (LSFB asbl).
- Next action: HIGH PRIORITY email to LSFB asbl to settle BY-SA vs BY-NC-ND, and to ask for a bulk export (glosses + handshape/location codes + SignWriting). If BY-SA is confirmed, this becomes one of the best Tier A dictionaries in scope.

##### Corpus LSFB + Lex-LSFB (UNamur LSFB-Lab) — LSFB (sfb)
- URL: https://www.corpus-lsfb.be/ ; lexicon https://www.corpus-lsfb.be/lexique.php ; conditions https://www.corpus-lsfb.be/conditions.php
- Type: continuous-video + lexical-db (Lex-LSFB: ID-glosses linked to corpus tokens; also an IS lexicon toggle `langSign=IS`)
- Size: SLDC says 150 h recorded, 100 signers, 104,000 tokens annotated — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/lsfbcorpus.html)
- License (verbatim): "Le Corpus LSFB est mis à disposition selon les termes de la Licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International … Toute utilisation doit faire référence au site www.corpus-lsfb.be et contenir la citation complète … Les utilisations ne peuvent être commerciales." The conditions page also says MP4 videos and ELAN EAF files can be downloaded. — [Corpus LSFB conditions](https://www.corpus-lsfb.be/conditions.php)
- SPDX: CC-BY-NC-SA-4.0
- Tier: B
- Access route: register on the site, then MP4/EAF download. The lexique is browsable HTML.
- commercial_ok: no; video_redistrib_ok: NC-SA
- Phonological fields: Lex-LSFB per SLDC has "ID-gloss, french translation(s), citation form, link to LSFB en ligne if available" — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/lexlsfb.html). No phonological coding seen.
- Citation: "Meurant, Laurence (2015), Corpus LSFB. Un corpus informatisé en libre accès de vidéos et d'annotations de la langue des signes de Belgique francophone (LSFB). Laboratoire de Langue des signes de Belgique francophone (LSFB-Lab). FRS-F.N.R.S et Université de Namur."
- Next action: Use as a Tier B gloss list and frequency source.

##### LSFB-ISOL (and LSFB-CONT) — LSFB (sfb)
- URL: https://lsfb.info.unamur.be/ (a JavaScript app); docs https://lsfb-team.github.io/lsfb-dataset/ ; HF mirror https://huggingface.co/datasets/ppoitier/lsfb-isol
- Type: isolated-video (cut from corpus tokens, so NOT studio citation forms) + MediaPipe landmarks
- Size: per the docs download page, ISOL poses are 10 GB and videos 25 GB; CONT poses 31 GB and videos about 400 GB. The HF card offers vocabulary variants of 500 / 750 / 2,000 / all, and the HF repo is 34.5 GB. — [docs download page](https://lsfb-team.github.io/lsfb-dataset/download/), [HF card](https://huggingface.co/datasets/ppoitier/lsfb-isol)
- License (verbatim): "This dataset is available under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license]" — [PyPI lsfb-dataset 2.0.1](https://pypi.org/project/lsfb-dataset/). HF card: "This dataset is distributed under CC BY-NC-SA 4.0" (license field `cc-by-nc-sa-4.0`) — [HF](https://huggingface.co/datasets/ppoitier/lsfb-isol). The companion code is MIT.
- SPDX: CC-BY-NC-SA-4.0
- Tier: B
- Access route: direct HTTP download via `lsfb_dataset.Downloader` (no registration mentioned in the docs), or HF
- commercial_ok: no; video_redistrib_ok: NC-SA
- Phonological fields: none (gloss labels, signer IDs, boundaries)
- Citation: J. Fink, B. Frénay, L. Meurant, A. Cleve, "LSFB-CONT and LSFB-ISOL: Two New Datasets for Vision-Based Sign Language Recognition", IJCNN 2021.
- Next action: Tier B pose-based fitting reference. Landmarks only, 10 GB; selective download by signer and split is supported.

##### Global Signbank – LSFB dataset — LSFB (sfb)
- URL: https://signbank.cls.ru.nl/datasets/LSFB/
- Size: "0 public glosses, 3512 total"; "Accessible by others False"; description "LSFB data from Namur enriched by VICI project Onno Crasborn". The conditions and copyright fields are empty. — [Global Signbank LSFB](https://signbank.cls.ru.nl/datasets/LSFB/)
- Tier: C (closed; request access from Radboud)
- Next action: Ask Radboud/Namur whether this dataset, which carries Global Signbank phonology fields, can be released.

##### Recommended first ingest — LSFB
- Settle the dico.lsfb.be licence first (BY-SA footer vs BY-NC-ND page). If BY-SA holds, ingest dico.lsfb.be with handshape/location indexes as Tier A, after permission for bulk transfer. Until then, use SignPuddle BE-fr puddle 43 (see SignPuddle table) as Tier A, with Corpus LSFB / Lex-LSFB and LSFB-ISOL landmarks as Tier B references.

##### Dead ends — LSFB
- lsfb.info.unamur.be shows nothing without JavaScript (licence confirmed via PyPI/HF instead). Global Signbank LSFB is closed.

---

#### Flemish SL / VGT (vgt)

##### Woordenboek Vlaamse Gebarentaal (VGTC) — VGT (vgt)
- URL: https://woordenboek.vlaamsegebarentaal.be/
- Type: lexical-db + isolated-video (citation forms)
- Size: SLDC says "10000 entries … Citation form, phonological information, semantic category, lexical variants, related signs, similar signs, Dutch translations", and about half of the Signbank signs are published — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/vgtdictionary.html)
- License (verbatim): NONE FOUND. The site is a JavaScript single-page app. Its bundle (`js/app.8dc66aae.js`) and `config.json` contain no licence or copyright text. The FAQ (https://www.vlaamsegebarentaal.be/faq) has no licence statement (WebFetch). SLDC: "Licence information not available".
- SPDX: NOASSERTION
- Tier: C (ask VGTC). D for automated use, since there is no stated licence.
- Access route: HTML only. The app talks to an undocumented JSON API at `https://woordenboek.vlaamsegebarentaal.be/api` (baseUrl in the public `/config.json`). Do NOT scrape it without permission.
- Phonological fields: the app code references `startHandshape`, `endHandshape` and location fields, plus handshape and location search ("search_on_handshape", "search_on_location"), with VGT handshape codes such as `bY;Y1` and `W;W"` (from the app bundle)
- commercial_ok: unknown; video_redistrib_ok: unknown
- Contact: info@vgtc.be (from `/config.json` contactAddress)
- Next action: Email VGTC asking for a licence and an export of the dictionary or the Global Signbank VGT dataset with phonology fields.

##### Global Signbank – VGT dataset — VGT (vgt)
- URL: https://signbank.cls.ru.nl/datasets/VGT/
- Size: "0 public glosses, 16928 total"
- License (verbatim): "Conditions for data citation and usage: Not available to users outside Radboud University or Vlaams Gebarentaal Centrum. Copyright statement: Data owned by VGTC, Vlaams Gebarentaal Centrum, Antwerp, Belgium." — [Global Signbank VGT](https://signbank.cls.ru.nl/datasets/VGT/)
- Phonological fields: Global Signbank schema (Handedness, Handshape strong/weak, Handshape change, etc.) and, per SLDC, SignWriting — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/globalsignbankvgt.html)
- Tier: C (closed)
- Next action: Same request to VGTC. This is the ideal VGT phonology dump if it can be licensed.
- Note: signbank.vlaamsegebarentaal.be did not resolve or connect on 2026-10-14 (curl HTTP 000).

##### Corpus VGT (UGent) — VGT (vgt)
- URL: https://www.corpusvgt.be/
- Type: continuous-video + ELAN annotations
- Size: SLDC says 140 h recorded, 5 TB, 120 signers — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/corpusvgt.html)
- License (verbatim): "Copyright Alle video's zijn beschikbaar onder een Creative Commons BY-NC-SA licentie. Aan het begin van elke video wordt hiernaar verwezen. Dit betekent dat de video's alleen voor niet-commercieel gebruik gedownload mogen worden, en dat bij hergebruik … naar het Corpus VGT verwezen moet worden. De filmpjes mogen bewerkt worden op de voorwaarde dat ze zelf onder dezelfde licentie verspreid worden." It links to creativecommons.org/licenses/by-nc-sa/3.0/ — [corpusvgt.be](https://www.corpusvgt.be/)
- SPDX: CC-BY-NC-SA-3.0
- Tier: B
- Access route: public browsing. A research login gives all videos, annotations and metadata.
- commercial_ok: no; video_redistrib_ok: NC-SA
- Citation: Van Herreweghe, M., Vermeerbergen, M., Demey, E., De Durpel, H., Nyffels, H., Verstraete, S. (2015). Het Corpus VGT. Een digitaal open access corpus van video's and annotaties van Vlaamse Gebarentaal, ontwikkeld aan de Universiteit Gent ism KU Leuven. www.corpusvgt.be
- Next action: Tier B only (frequency, variant evidence).

##### Corpus VGT v1.0 selection (IVDNT) — VGT (vgt)
- URL: https://taalmaterialen.ivdnt.org/download/corpusvgt1-0/ (handle http://hdl.handle.net/10032/tm-a2-v6)
- Type: continuous-video (mp4 + eaf), about 11 h
- License (verbatim): "Licentie Creative Commons Attribution-NonCommercial 3.0 Unported License". File CorpusVlaamseGebarentaal_1.0.zip, 146.62 MB. — [IVDNT](https://taalmaterialen.ivdnt.org/download/corpusvgt1-0/)
- SPDX: CC-BY-NC-3.0. Note the conflict: this selection is BY-NC, while corpusvgt.be says BY-NC-SA.
- Tier: B; Access: IVDNT download (account); commercial_ok: no
- Next action: Skip for the lexicon.

##### GoSt-ParC-Sign (SignON, IVDNT) — VGT (vgt) + Dutch
- URL: https://taalmaterialen.ivdnt.org/download/gost-parc-sign/ (handle http://hdl.handle.net/10032/tm-a2-x9)
- Type: continuous-video (existing VGT broadcast-type videos, 10 h, 43 signers) + Dutch parallel text
- License (verbatim): "Licentie Creative Commons Attribution-NonCommercial 4.0 Unported License" (v1.0, superseded by v1.1) — [IVDNT](https://taalmaterialen.ivdnt.org/download/gost-parc-sign/)
- SPDX: CC-BY-NC-4.0; Tier: B; commercial_ok: no
- Next action: Skip (continuous).

##### Recommended first ingest — VGT
- Tier A: only SignPuddle Flanders puddle 44 (see SignPuddle table).
- Real target: email VGTC (info@vgtc.be) for the Woordenboek / Global Signbank VGT export, which has start/end handshape and location codes. Corpus VGT is the Tier B fallback.

##### Dead ends — VGT
- signbank.vlaamsegebarentaal.be unreachable. The woordenboek has no licence statement. Content4All VRT-NEWS: see the cross-language section.

---

#### Sign Language of the Netherlands / NGT (dse)

##### Global Signbank – NGT dataset — NGT (dse) [CONFIRMED]
- URL: https://signbank.cls.ru.nl/datasets/NGT
- Type: lexical-db + phonology + isolated-video (citation forms; prominent media types include "SignPhon: citation form")
- Size: "Number of glosses 6862 public glosses, 7469 total" — [dataset page](https://signbank.cls.ru.nl/datasets/NGT). The available-datasets page shows the same counts — [list](https://signbank.cls.ru.nl/datasets/available).
- License (verbatim): "A Creative Commons BY 4.0 International license applies to all accessible lexical items. Only name signs and test items have not been made accessible to unregistered users. Example sentences from the Corpus NGT (in the panel 'example sentences' of some glosses) have a stricter license: CC BY-NC-SA-4.0". Copyright statement: "(c) Radboud University & University of Amsterdam, 2025" — [Global Signbank NGT](https://signbank.cls.ru.nl/datasets/NGT)
- Site-wide terms (potential friction): "The user agrees to not copy or spread any data or information found on the site, unless given permission." and "When submitting data to a dataset, it will be licensed according to the license specified for that dataset." — [Conditions of Use](https://signbank.cls.ru.nl/about/conditions/). The copyright page says "Different licenses apply to access to each dataset in Global Signbank". Source code is BSD-3-Clause. — [Copyright](https://signbank.cls.ru.nl/about/copyright/)
- SPDX: CC-BY-4.0 (lexical items); example sentences CC-BY-NC-SA-4.0 (exclude them)
- Tier: A (the dataset-level licence is more specific than the generic site conditions)
- Access route: register, then CSV export (route per assignment brief, not re-tested); the dataset page also has "Request Access"
- commercial_ok: yes (lexical items); video_redistrib_ok: yes for citation-form videos under BY. NOT for Corpus NGT example sentences.
- Phonological fields: the manual documents Handedness (1 / 2a / 2s / X), Handshape strong, Handshape weak, Handshape change (opening, closing, curving, bending, extending, spreading, wiggling …), plus further phonological fields — [Manual v3](https://signbank.cls.ru.nl/about/manual/)
- Citation: Release 1: Crasborn, O., Bank, R., Zwitserlood, I., van der Kooij, E., Ormel, E., Ros, J., Schüller, A., de Meijer, A., van Zuilen, M., Nauta, Y. E., van Winsum, F., & Vonk, M. (2020) NGT dataset in Global Signbank [release 1]. Nijmegen: Radboud University, CLS. ISLRN 976-021-358-388-6, DOI 10.13140/RG.2.1.2839.1446. Release 2: Klomp, U., et al. & Roelofsen, F. (2025) NGT dataset in Global Signbank [release 2]. Amsterdam: University of Amsterdam.
- Next action: FIRST INGEST for NGT. Export CSV with phonology columns, filter out example-sentence media, and keep release labels. Pair with 3D-LEX mocap.

##### 3D-LEX v1.0 — NGT (dse)
- URL: data on OSF (osf.io/g7u9c); paper [arXiv 2409.01901](https://arxiv.org/html/2409.01901v1); [sign-lang@LREC 2024 24030](https://www.sign-lang.uni-hamburg.de/lrec/pub/24030.html)
- Type: mocap (StretchSense gloves for handshape, Vicon optical body markers, Live Link Face ARKit blendshapes; raw marker data + FBX, plus retargeted FBX)
- Size: 1,000 NGT signs (+1,000 ASL); file sizes not stated in the paper
- License (verbatim, paper): "The data is available under a CC BY 4.0 license" — [arXiv HTML](https://arxiv.org/html/2409.01901v1). The OSF page itself was not opened, so the licence is verified on the paper, not the repository page.
- SPDX: CC-BY-4.0 · Tier: A · commercial_ok: yes · video_redistrib_ok: n/a (mocap; derived animation redistributable with attribution)
- Access route: OSF download (the paper gives a view-only link)
- Phonological fields: none for NGT. The paper says "we only generate and assess labels derived from the 3D-LEX ASL vocabulary". The NGT vocabulary is aligned with the Signbank NGT lexicon (Crasborn et al. 2020), whose expert handshape annotations cover 888 NGT glosses (per the paper) — [arXiv](https://arxiv.org/html/2409.01901v1)
- Citation: Ranum, Otterspeer, Andersen, Belleman, Roelofsen (2024), "3D-LEX v1.0: 3D Lexicons for American Sign Language and Sign Language of the Netherlands", sign-lang@LREC 2024
- Next action: Tier A. Join to Global Signbank NGT by gloss and use as ground-truth motion for VRM retarget tests.

##### Corpus NGT (Radboud) — NGT (dse)
- URL: https://www.corpusngt.nl/ (info: https://www.corpusngt.nl/info); TLA copy via The Language Archive
- Type: continuous-video + ELAN
- Size: SLDC says 72 h recorded, 150,000 tokens, 3,300 types, 100 signers — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/corpusngt.html)
- License (verbatim): "Op alle filmpjes die via deze site te zien zijn is een Creative Commons Naamsvermelding-NietCommercieel-GelijkDelen 4.0 Internationaal-licentie van toepassing … BY: Er moet verwezen word naar de bron: O. Crasborn, I. Zwitserlood, J. Ros & M. van Zuilen (2020) Corpus NGT, 4e editie. Nijmegen: Radboud Universiteit. NC: Het mag alleen als het geen commercieel doel heeft. SA: Het moet onder deze zelfde drie voorwaarden gebeuren." ELAN files for research: www.ru.nl/corpusngtuk — [corpusngt.nl/info](https://www.corpusngt.nl/info). SLDC instead lists "Openly accessible videos under CC BY-NC-SA 3.0 NL; Annotations under CC BY-NC-SA 4.0; Restricted access to some video and metadata requires individual license agreement" — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/corpusngt.html). The version differs (website 4.0 vs TLA 3.0 NL).
- SPDX: CC-BY-NC-SA-4.0 (website videos) / CC-BY-NC-SA-3.0-NL (TLA videos per SLDC)
- Tier: B
- Access route: browse/register on corpusngt.nl; TLA for ELAN/video
- commercial_ok: no; video_redistrib_ok: NC-SA
- Next action: Tier B only (token frequencies to prioritise glosses).

##### Other NGT corpora (TLA) — dead ends for the lexicon
- IPROSLA: "Individual license agreement available; Restricted access for researchers" — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/iprosla.html). Tier C.
- Visibase (300 h, 1990–2011): "Licence information not available; Restricted access … individual license agreement" — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/visibase.html). Tier C/D.
- Giving Cognition a Hand: "Licence information not available; No public access" — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/givingcognitionahandcorpus.html). Tier D.
- ECHO NGT: see the cross-language ECHO record (CC BY-NC-ND 3.0 per Compendium).

##### Recommended first ingest — NGT
- Global Signbank NGT (CC BY 4.0, 6,862 public glosses, with phonology) + 3D-LEX (CC BY 4.0 mocap). Exclude Corpus NGT example-sentence clips, which are BY-NC-SA.

##### Dead ends — NGT
- Van Dale Basiswoordenboek NGT, NGTS/SignON NGT data: not checked (search budget exhausted).

---

#### Luxembourgish SL (no ISO 639-3 code; Luxembourg recognised DGS)

##### Gebärdensprach-Lexikon, Hörgeschädigten Beratung SmH — Luxembourg (DGS variety; no separate ISO code)
- URL: https://gebaerdensprache.hoergeschaedigt.lu/ (linked from https://www.hoergeschaedigt.lu/ as "Gebärdensprach-Lexikon … online Lexikon in den Sprachen: Deutsche Gebärdensprache, Deutsch, Französisch, Englisch, Luxemburgisch und Portugiesisch"). The main site www.hoergeschaedigt.lu also has a page "Anerkennung der DGS".
- Type: lexical-db / isolated-video (also storyboards and children's stories)
- Size: unknown
- License (verbatim): "Copyright: Das Copyright für die veröffentlichten von uns selbst erstellten Grafiken, Tondokumente, Videos und Texte bleibt allein bei uns, bzw. bei den jeweiligen Autoren. Eine Vervielfältigung oder Verwendung solcher Objekte in anderer elektronischer oder gedruckter Form ist ohne ausdrückliche Zustimmung der Autoren nicht gestattet." — [Impressum/Datenschutz](https://gebaerdensprache.hoergeschaedigt.lu/?com=0I9I0I0I)
- SPDX: LicenseRef-proprietary; Tier: C (permission); Access: HTML only
- commercial_ok: no; video_redistrib_ok: no
- Contact: info@hoergeschaedigt.lu (Hörgeschädigten Beratung, from www.hoergeschaedigt.lu)
- Next action: Low priority. Luxembourg signing is treated as DGS, so ingest via DGS sources and optionally ask HB SmH for a local-variant list.

##### Recommended first ingest — Luxembourg
- None of its own. Map to DGS (gsg; see the DGS section). SLDC has no Luxembourg entry, and the SignPuddle index has no Luxembourg puddle.

##### Dead ends — Luxembourg
- smartcenter.lu is unrelated (no sign-language content on its home page). daaflux.lu did not connect (HTTP 000). SLDC has no Luxembourgish entry ([SLDC languages](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html)).

---

#### Swiss-French SL (ssr) and Swiss-Italian SL (slf)

##### Signsuisse / SGB-FSS Gebärdensprache-Lexikon — DSGS, LSF-CH (ssr), LIS-SI (slf)
- URL: https://www.sgb-fss.ch/signsuisse/ (signsuisse.sgb-fss.ch redirects here); Impressum https://www.sgb-fss.ch/signsuisse/impressum-und-datenschutz
- Type: lexical-db + isolated-video in DE/FR/IT. It has a "Handform-Assistent" (handshape finder) and categories.
- Size: unknown. SLDC has no count and tags it as DSGS + LSF + LIS — [SLDC](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/sgbfss.html)
- License (verbatim): "Copyright Bild und Text: Ohne entsprechenden Hinweis auf der jeweiligen Seite bedarf die Weiterverwendung von Bild und Text jeglicher Art des schriftlichen Einverständnisses vom Schweizerischen Gehörlosenbund und ist nur unter Erwähnung der Copyrightangaben zulässig." — [Signsuisse Impressum](https://www.sgb-fss.ch/signsuisse/impressum-und-datenschutz). SLDC: "Restricted access requires individual license agreement".
- SPDX: LicenseRef-proprietary; Tier: C (written consent from SGB-FSS)
- Access route: HTML only
- commercial_ok: no (without agreement); video_redistrib_ok: no
- Phonological fields: handshape (via the Handform-Assistent); not exposed as data
- Contact: info-d@sgb-fss.ch (Impressum); SGB-FSS, Räffelstrasse 24, 8045 Zürich
- Next action: Send one request to SGB-FSS covering DSGS, LSF-CH and LIS-SI. It is the only lexical source found for ssr and slf.

##### WMT-SLT 2023 Signsuisse research release (SWISSUbase) — LSF-CH (ssr), LIS-SI (slf) [also DSGS]
- URL: https://www.wmt-slt.com/data (SWISSUbase request)
- Type: isolated-video (lexicon item video + gloss + one example-sentence video per item)
- Size: "18,221 lexical items" in total: DSGS 9,044, LSF-CH 6,423, LIS-CH 2,754 — [WMT-SLT data](https://www.wmt-slt.com/data)
- License (verbatim): "The datasets can be used for non-commercial research. Please note that distributing the datasets or making them accessible to third parties is not permitted, either in their original or edited form." — [WMT-SLT data](https://www.wmt-slt.com/data)
- SPDX: LicenseRef-WMT-SLT-NC-research · Tier: B (NC, no redistribution even when edited) · commercial_ok: no · video_redistrib_ok: no
- Access route: register-and-request on SWISSUbase
- Next action: internal fitting reference only. It is the only sizeable LSF-CH / LIS-SI citation video set found; shipping derived output still needs SGB-FSS consent.

##### Recommended first ingest — Swiss-French / Swiss-Italian
- Tier A: SignPuddle CH-fr puddle 49 (9,938 FSW entries, actively edited) and CH-it puddle 50 (3 entries, effectively empty) only. Otherwise Signsuisse under a Tier C agreement, with the WMT-SLT release (Tier B) as an internal reference.

##### Dead ends — Swiss-French / Swiss-Italian
- SLDC has no ssr or slf language page; the language URLs return no resources ([index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html)). Ortolang has no records tagged ssr. Apart from the WMT-SLT Signsuisse release, no Swiss-French or Swiss-Italian corpus, ML dataset or mocap was found. Note that SMILE is DSGS, which is out of scope here.

---


#### German Sign Language / DGS (gsg)

##### SignDict (crowdsourced DGS dictionary): DGS (gsg)
- URL: https://signdict.org. API: https://github.com/signdict/website/wiki/API, GraphQL endpoint `POST https://signdict.org/graphql-api`.
- Type: isolated-video plus a thin lexical-db (gloss text, entry type, per-video licence and copyright, original source URL).
- Size: the homepage says "5510 signs have been added by awesome users." The API `index(page, perPage≤100)` returned 5,291 entries (pages 1–53) on 2026-10-14. Of these, 1,047 have no `currentVideo`.
- License (verbatim): the about page says "Every video will be licensed under a Creative Commons license and the code running the website will be licensed under the MPL." ([about](https://signdict.org/about?locale=en)). The licence is set per video and exposed in the API field `license`. API wiki: "If you use the API please make sure to respect the license of the videos and display it next to the video." and "Pease do not hotlink the content on the CDN, copy it and serve it with your own CDN." ([API wiki](https://raw.githubusercontent.com/wiki/signdict/website/API.md)).
  - Licence tally of `currentVideo` over all 5,291 entries (my API pull):
    - by-nc-sa/3.0/de: 2,939 (copyright "Henrike Maria Bartsch - Gebärden lernen")
    - by-sa/3.0/de: 709 (copyright "… - dgs.wikisign.org")
    - by-nc-sa/4.0 (+ "by-nc-sa/4.0/"): 518 + 35 (copyright "GebLex")
    - by/4.0: 43 (copyright field empty, apparently direct user uploads)
    - no video: 1,047
  - Entry pages show the same per-video badges, e.g. entry 991 "License: by-nc-sa/3.0/de by Henrike Maria Bartsch - Gebärden lernen" and entry 323 "License: by-sa/3.0/de by Philipps - dgs.wikisign.org - Wikisign DGS" ([entry 991](https://signdict.org/entry/991?locale=en), [entry 323](https://signdict.org/entry/323?locale=en)).
- SPDX: mixed. Per-video ids are CC-BY-SA-3.0-DE, CC-BY-NC-SA-3.0-DE, CC-BY-NC-SA-4.0, CC-BY-4.0. Code is MPL-2.0 (version UNVERIFIED).
- Tier: **A for the subset**: 709 CC BY-SA 3.0 DE videos (from the defunct DGS Wikisign) plus 43 CC BY 4.0 videos, about 752 entries. The 3,492 NC-SA videos are Tier B.
- Access route: official GraphQL API (`index`, `search`, `entry` queries; fields `videoUrl`, `license`, `copyright`, `originalHref`). The API gives video URLs, so it works as a register-free export. There is no static dump.
- commercial_ok: yes for the BY-SA and BY subset. No for the NC subsets.
- video_redistrib_ok: yes for the BY-SA (share-alike) and BY subset, with attribution to the named copyright holder. NC-SA videos only non-commercially.
- Approx disk: UNVERIFIED (MP4s not downloaded). With about 752 Tier-A clips of short single signs, I estimate under 1 GB.
- Phonological/notation fields: none. Gloss text and type ("word") only.
- Citation: SignDict.org, https://signdict.org (cite each video's copyright holder and `originalHref`).
- Next action: pull the full `index` with `videos { videoUrl license copyright originalHref }`, not only `currentVideo`, because entries can hold several videos. Filter to `by-sa/3.0/de` and `by/4.0`. Mirror those MP4s to our own storage (the API wiki asks not to hotlink). Keep attribution strings. This is the **recommended first DGS ingest** for redistributable citation videos.

##### Gebärden lernen (gebaerdenlernen.de): DGS (gsg)
- URL: https://www.gebaerdenlernen.de/
- Type: isolated-video (learner dictionary).
- Size: about 2,939 of its videos are mirrored in SignDict (my tally above). Native site count UNVERIFIED.
- License (verbatim): "Alle Inhalte dieser Website stehen unter einer Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 3.0 Deutschland Lizenz." The page links to creativecommons.org/licenses/by-nc-sa/3.0/de/ ([homepage footer](https://www.gebaerdenlernen.de/)).
- SPDX: CC-BY-NC-SA-3.0-DE
- Tier: B
- Access route: HTML only on the original site. Easier through the SignDict API, which carries the same licence and attribution.
- commercial_ok: no
- video_redistrib_ok: non-commercial with share-alike only.
- Approx disk: UNVERIFIED
- Phonological/notation fields: none
- Citation: Henrike Maria Bartsch, Gebärden lernen, gebaerdenlernen.de
- Next action: use only if Marionet output stays non-commercial and NC-SA. Otherwise skip.

##### Public DGS Corpus, "MEINE DGS – annotiert", Release 4 (incl. type list with HamNoSys): DGS (gsg)
- URL: https://www.sign-lang.uni-hamburg.de/meinedgs_r4/ling/start_en.html (also https://ling.meine-dgs.de). DOI 10.25592/dgs.corpus-4.0.
- Type: continuous-video plus lexical-db/notation (type list).
- Size:
  - Corpus: "50 hours of video materials … made available with annotations for research purposes" ([R4 start](https://www.sign-lang.uni-hamburg.de/meinedgs_r4/ling/start_en.html)). The full corpus is 560 h recorded, 657,000 tokens annotated, 330 participants ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dgscorpus.html)).
  - Type list: the Compendium gives "14064 types" with "Citation (filmed from four angles), ID-gloss, HamNoSys transcriptions, context" ([Compendium type list](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dgscorpustypelist.html)).
  - My parse of the R4 types page (5,059,279 bytes) found 5,318 distinct type pages and 14,426 index rows. 14,223 of those rows carry a non-empty `data-hamnosys` attribute (HamNoSys PUA string plus `data-tokens` with symbol names such as "hamflathand,hamextfingeruo,…") and `data-meanings` (English equivalents).
- License (verbatim): "Parts of this corpus are made available on this site for linguistic research. You may download and use the material for this sole purpose. We ask you to cite corresponding DGS-Korpus publications if you publish your research based on this material. … For any kind of research, other applications, or the need of higher-resolution videos or birds-eye camera views, please contact us under info (at) dgs-korpus.de." ([R4 license](https://www.sign-lang.uni-hamburg.de/meinedgs_r4/ling/license_en.html); the same wording is in the release-1 [license page](https://www.sign-lang.uni-hamburg.de/meinedgs/release1/ling/license_en.html)). The DataCite record for 10.25592/dgs.corpus-4.0 has an empty `rightsList` (api.datacite.org). Note: CC BY-NC 4.0 on the sign-lang@LREC pages applies to the papers ([24050](https://www.sign-lang.uni-hamburg.de/lrec/pub/24050.html)), not to the data.
- SPDX: LicenseRef-DGS-Korpus-research-only
- Tier: **B** (research-only) for the downloadable portion. Any product or derivative use needs a contract, which is **Tier C**.
- Access route: direct per-transcript downloads (iLex, ELAN .eaf, SRT, mp4 360p50, CMDI, and pose data in "OpenPose, MediaPipe, AppleVision and Surrey 3D liftings") ([R4 start, "File Formats available for Download"](https://www.sign-lang.uni-hamburg.de/meinedgs_r4/ling/start_en.html)). The type list is HTML (one page per type, each with its own DOI, e.g. 10.25592/dgs.corpus-type-69988). There is also an ANNIS portal and an iLex portal.
- commercial_ok: no ("sole purpose" linguistic research)
- video_redistrib_ok: no
- Approx disk: type list HTML is about 5 MB. Video totals UNVERIFIED (50 h at 360p, several cameras).
- Phonological/notation fields: HamNoSys per type and subtype (citation form), ID-gloss, English meanings, token counts, KWIC. This is the richest DGS notation source found.
- Citation: per-type DOIs. Dataset: Konrad, R. et al., MEINE DGS – annotiert. Öffentliches Korpus der Deutschen Gebärdensprache, 4. Release, Universität Hamburg, 2024, doi:10.25592/dgs.corpus-4.0 (publisher and year from DataCite).
- Next action: email info@dgs-korpus.de asking for a licence covering derived avatar clips (HamNoSys → SignDesc) and redistribution of derived motion, not of the video. Until a licence is granted, use the HamNoSys only for internal research and evaluation.

##### DW-DGS: Digitales Wörterbuch der Deutschen Gebärdensprache: DGS (gsg)
- URL: https://dw-dgs.de (redirects to https://www.sign-lang.uni-hamburg.de/korpusdict/). DOI 10.25592/dgs.dwdgs.
- Type: lexical-db plus isolated-video (corpus-based dictionary).
- Size: "1113 entries comprising 1524 sign variants" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dwdgs.html))
- License (verbatim): "Das Herunterladen von Inhalten, insbesondere Videos, ist lediglich für private sowie Unterrichtszwecke erlaubt. Für weitergehende Nutzungen kontaktieren Sie uns bitte." (section "Lizenzen: Zitieren, Verlinken oder Herunterladen?" on [DW-DGS intro](https://www.sign-lang.uni-hamburg.de/korpusdict/overview/intro.html))
- SPDX: LicenseRef-DW-DGS (private/teaching use only)
- Tier: C (permission needed for anything beyond private or teaching use)
- Access route: HTML only. The licence text says "es gibt z. Z. keine DOIs für einzelne Seiten".
- commercial_ok: no
- video_redistrib_ok: no
- Approx disk: n/a
- Phonological/notation fields: form description and sign variants. HamNoSys visibility on DW-DGS pages is UNVERIFIED; the Compendium says signs are represented "by an animated image and an ID".
- Citation: Langer, G., Müller, A., Wähl, S., Otte, F., Sepke, L., Hanke, T., Digitales Wörterbuch der Deutschen Gebärdensprache [Dataset: Living document], Universität Hamburg, doi:10.25592/dgs.dwdgs
- Next action: bundle into the same request to dgs-korpus.de as the corpus.

##### Sign2MINT (STEM specialist lexicon): DGS (gsg)
- URL: https://sign2mint.de/ (Angular app; backend `https://api.sign2mint.de` found in the app bundle)
- Type: isolated-video plus lexical-db (terms, definitions, subject areas) plus notation (SignWriting/SWU fields in the app).
- Size: `{"_all":5264,"Astronomie":187,"Biologie":1773,"Chemie":710,"Geowissenschaft":713,"Informatik":639,"Mathematik":541,"Medizin":329,"Physik":1364}` ([signCount.json](https://sign2mint-searchcache.s3.eu-central-1.amazonaws.com/signCount.json), the URL the app uses). The Compendium says "5263 signs".
- License (verbatim): there is no textual licence page. Each entry-detail view renders `["alt","Creative Commons License","src","https://i.creativecommons.org/l/by-nc-sa/3.0/de/88x31.png"]` (from the site's own main.a6c7b2cce1e05ecc444f.js). The Compendium also lists "CC BY-NC-SA 3.0 DE" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/sign2mint.html)).
- SPDX: CC-BY-NC-SA-3.0-DE
- Tier: B
- Access route: HTML/app only. The backend API is undocumented, so ask before bulk use.
- commercial_ok: no
- video_redistrib_ok: non-commercial with share-alike only.
- Approx disk: UNVERIFIED
- Phonological/notation fields: SignWriting via delegs (bundle references "SignWriting" ×36 and "swu" ×14). Field content UNVERIFIED.
- Citation: Sign2MINT, Max-Planck-Förderstiftung project ([MPG](https://www.mpg.de/projekt-sign2mint))
- Next action: contact the project for an API or export and confirm the licence. Specialist vocabulary is low priority for a general dictionary.

##### SIGNUM Database (RWTH Aachen; distributed by BAS Munich): DGS (gsg)
- URL: https://www.bas.uni-muenchen.de/Bas/BasSIGNUMeng.html. ISLRN record: https://www.islrn.org/resources/083-847-814-698-3/
- Type: isolated-video plus continuous-video (recognition benchmark).
- Size: "450 basic signs", "780" sentences, 25 native signers, 33,210 sequences, "Data volume: 920GB (approx.)", JPEG frames 776x578 at 30 fps ([BAS](https://www.bas.uni-muenchen.de/Bas/BasSIGNUMeng.html))
- License (verbatim): "Free usage for scientific and commercial purposes." Price: "EUR 1.000,- (ELRA Members EUR 600,-)" for both scientific and commercial use, shipped on "1 external harddisk NTFS 1000GB" ([BAS](https://www.bas.uni-muenchen.de/Bas/BasSIGNUMeng.html)). A web summary attributed "CC BY-NC" to SIGNUM, but that is the LREC paper licence, not the data.
- SPDX: LicenseRef-BAS-SIGNUM (paid; commercial use allowed per BAS)
- Tier: C (purchase/contract)
- Access route: order from BAS (contact Florian Schiel, per BAS page)
- commercial_ok: yes per BAS wording (verify in the actual BAS licence document at purchase)
- video_redistrib_ok: UNVERIFIED (assume no)
- Approx disk: 920 GB
- Phonological/notation fields: none (gloss labels)
- Citation: von Agris, U., Knorr, M., Kraiss, K.-F. (2008), The significance of facial features for automatic sign language recognition, FG 2008 / SIGNUM database, RWTH Aachen. UNVERIFIED citation form; take the one from the BAS docs.
- Next action: low priority. Only 450 signs, and it costs EUR 1,000. Consider later for pose-fitting training if commercial pose models are needed.

##### RWTH-PHOENIX-Weather 2014 / 2014T: DGS (gsg)
- URL: https://www-i6.informatik.rwth-aachen.de/~koller/RWTH-PHOENIX-2014-T/ and https://www-i6.informatik.rwth-aachen.de/~koller/RWTH-PHOENIX/
- Type: continuous-video (interpreted TV weather) with gloss annotation.
- Size: "RWTH-PHOENIX Weather 2014 T (39GB)" ([2014T page](https://www-i6.informatik.rwth-aachen.de/~koller/RWTH-PHOENIX-2014-T/))
- License (verbatim): both pages carry a "Creative Commons License" badge linking to `creativecommons.org/licenses/by-nc-sa/3.0/` (from the page HTML). No further text.
- SPDX: CC-BY-NC-SA-3.0
- Tier: B
- Access route: direct download (39 GB tarball, not fetched)
- commercial_ok: no
- video_redistrib_ok: NC-SA only
- Approx disk: 39 GB (2014T)
- Phonological/notation fields: none. Gloss sequences only. No separate lexicon file is listed (WebFetch summary of the page contents).
- Citation: Camgöz, N.C., Hadfield, S., Koller, O., Ney, H., Bowden, R., Neural Sign Language Translation, CVPR 2018
- Next action: skip for the dictionary. It is continuous interpreter signing in a narrow domain.

##### Hamburg DGS specialist lexica (GLex, HLex, GaLex, TLex, PLex, SLex): DGS (gsg)
- URL: e.g. https://www.sign-lang.uni-hamburg.de/glex/ (health and nursing). Siblings are listed on the [Compendium gsg page](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/gsg.html).
- Type: isolated-video plus notation.
- Size: GLex "2330 signs"; fields "Citation form, German and English translations, definition, semantic grouping, HamNoSys transcription" ([Compendium GLex](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/specialistdictionarydgsgermanhealthandnursing.html))
- License (verbatim): "© 2007-2020, Universität Hamburg & Signum GmbH. Alle Rechte vorbehalten." ([GLex Impressum](https://www.sign-lang.uni-hamburg.de/glex/intro/impressum.html)). The Compendium says "information not available".
- SPDX: LicenseRef-AllRightsReserved
- Tier: C/D (all rights reserved; co-owned by the publisher Signum GmbH)
- Access route: HTML only
- commercial_ok: no
- video_redistrib_ok: no
- Approx disk: n/a
- Phonological/notation fields: HamNoSys
- Citation: Universität Hamburg / Signum Verlag, Fachgebärdenlexikon Gesundheit und Pflege
- Next action: skip unless the DGS-Korpus request is extended to these (they are Hamburg IDGS products too).

##### SignPuddle "Wörterbuch DE" (puddle 53): DGS (gsg)
Also listed in the cross-language SignPuddle table.
- URL: https://www.signbank.org/signpuddle2.0/data/spml/sgn53.spml
- Type: notation (SignWriting FSW)
- Size: 24,778 entries, 24,412 with an FSW term, latest entry mdt 2025-03-10. The file is 8,406,262 bytes, Last-Modified 2025-10-13 (HEAD, then a local count).
- License: CC BY-SA 3.0 (SignPuddle site-wide statement; see cross-language record).
- Tier: A. Access: direct dump URL.
- Next action: ingest with the other puddles (see cross-language record).

##### DGS: Recommended first ingest
1. **SignDict API, Tier-A subset**: about 709 CC BY-SA 3.0 DE plus 43 CC BY 4.0 citation videos, via the official GraphQL API. Store the attribution and `originalHref` per clip.
2. **SignPuddle sgn53** (24.8k FSW entries, CC BY-SA). Use it to seed handshape and location features for those SignDict glosses.
3. **Public DGS Corpus type list (HamNoSys for about 5.3k types)**: the best phonology source, but Tier B. Use it internally now and request a licence from info@dgs-korpus.de for derived and redistributed avatar output.

##### DGS: Dead ends
- **DGS Wikisign** (dgs.wikisign.org): every path returns 404 (`/Rathaus`, `/wiki/Wiksign:Hauptseite`, `/wiki/Spezial:Statistik`). Its CC BY-SA 3.0 DE videos survive only through SignDict. The wikisign.org hub still links LSF, LSC, LSCI, LaSiMa and GSL wikis, which is relevant to LSF and LSC (the LSC wiki is dead; see the LSC section) ([wikisign.org](https://wikisign.org/)).
- **AVASAG** (https://avasag.de/): the homepage shows no dataset, download or licence. No public data found.
- **DataCite rights for the DGS corpus**: `rightsList` is empty for 10.25592/dgs.corpus-4.0 and for type DOIs. No CC licence exists in the metadata.
- **No DGS-Korpus Zenodo or FDR data dump** was found; the search only surfaced papers. Data is served from the portal only.
- Covered in the cross-language section: Dicta-Sign DGS lexicon ("Individual license agreement for researchers", [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictasignlex.html)), EASIER wordnet, Content4All.
- **ECHO corpus**: the Compendium gsg page lists it, with "CC BY-NC-ND 3.0" ([Compendium ECHO](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/echo.html)). ND forbids derivatives, so it is Tier D for Marionet.
- **sematos**: Compendium "Licence information not available"; "DGS dataset temporarily unavailable" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/sematos.html)). Tier D.
- **SpreadTheSign**: Tier D by policy.
- **Kestner, ViSiCAST/eSIGN DGS HamNoSys lexicons, DGS GebärdenWiki, Deaf-ADAPT, SL-Fluent**: not checked, because search ran out. I found no public URL with licence terms. GAP.

---------------------------------------------------------------------

#### Austrian Sign Language / ÖGS (asq)

##### LedaSila (Klagenfurt lexical database): ÖGS (asq)
- URL: https://ledasila.aau.at
- Type: lexical-db plus isolated-video
- Size: "17400 signs"; fields "Category, region, translations, citation forms, number of hands, mouthing" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/ledasila.html)). It includes third-party sets ("Equalizent" medical, "OÖ-UK" HandMade, "Leonardo" IT, "Stmk_Get it", "Stmk-UK"), per the homepage.
- License (verbatim): "LedaSila ist eine kostenlose Lexikondatenbank für Gebärdensprachen. Diese Online-Datenbank können Sie unter den Creative Commons Bedingungen wie folgt verwenden: 1. Suche nach Gebärden oder deren Übersetzung (ohne Benutzerkonto / anonym) … 2. Wissenschaftliche Dokumentation einer Gebärdensprache (nur mit Benutzerkonto)". The "Creative Commons Bedingungen" link goes to the generic https://creativecommons.org/licenses/?lang=de and names no specific licence ([LedaSila home](https://ledasila.aau.at/)). The LREC 2008 abstract says: "the database can be used for free for non-commercial deaf and scientific issues" and "For downloading videos, the users have to disclose their identity." ([LREC 08029](https://www.sign-lang.uni-hamburg.de/lrec/pub/08029.html)). The Compendium says "Creative Commons (unspecified)".
- SPDX: NOASSERTION (unspecified CC; the original design was non-commercial)
- Tier: C (the licence is ambiguous, so written clarification is needed. Treat as non-commercial until clarified.)
- Access route: HTML search is public. Account and registration are needed for documentation work and video download (email ZGH Klagenfurt).
- commercial_ok: unclear. The 2008 design says no.
- video_redistrib_ok: unclear
- Approx disk: UNVERIFIED
- Phonological/notation fields: open category system. The 2008 paper says users can search "for a certain sign or parameter value(s)". Number of hands and mouthing are confirmed by the Compendium. Handshape and location fields are UNVERIFIED.
- Citation: Krammer, K. et al. (2008), The Klagenfurt lexicon database for sign languages as a web application: LedaSila, LREC 2008 workshop
- Next action: email ZGH (Zentrum für Gebärdensprache und Hörbehindertenkommunikation, Univ. Klagenfurt). Ask which CC licence applies (BY-NC-SA?), whether a bulk export of ÖGS entries, parameter fields and videos is possible, and how the third-party subsets are licensed.

##### Dictio (Masaryk University, multilingual incl. ÖGS): ÖGS (asq)
- URL: https://www.dictio.info/
- Type: lexical-db plus isolated-video plus notation
- Size: whole site "Entries: 160 180 Translations: 61 682" (homepage). Covers ČZJ, ASL, IS, SPJ, ÖGS, УЖМ and LSE. ÖGS count UNVERIFIED.
- License (verbatim): "© 2007-2026 Masaryk University / All rights reserved" ([homepage footer](https://www.dictio.info/)). The Compendium says "information not available" and lists fields incl. "HamNoSys or SignWriting transcription" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictio.html)).
- SPDX: LicenseRef-AllRightsReserved
- Tier: C/D
- Access route: HTML; more content after registration
- commercial_ok: no. video_redistrib_ok: no.
- Phonological/notation fields: HamNoSys/SignWriting (per Compendium; per-language coverage UNVERIFIED)
- Next action: low priority. Possibly ask Masaryk for ÖGS research use. Dictio also covers LSE.

##### SignPuddle "Wörterbuch AT" (puddle 29): ÖGS (asq)
- URL: https://www.signbank.org/signpuddle2.0/data/spml/sgn29.spml
- Type: notation (SignWriting)
- Size: **5 entries** (1,976 bytes; latest mdt 2015-09-09). The puddle exists but is effectively empty.
- License: CC BY-SA 3.0 (SignPuddle site-wide statement; see cross-language record)
- Tier: A, but useless at 5 signs.
- Next action: ignore.

##### ÖGS: Recommended first ingest
No Tier-A ÖGS lexicon with substantial content exists. The recommended first action is **contacting LedaSila / ZGH Klagenfurt** to pin down the unspecified CC licence and request an export. Meanwhile, ÖGS can only be bootstrapped from DGS cognates. That is a linguistic risk, because ÖGS is not DGS.

##### ÖGS: Dead ends
- **Gebärdenwelt.tv** (https://www.gebaerdenwelt.tv/): a news-video platform run by the association behind oegsbarrierefrei.at. It has no lexicon and no licence statement on its imprint (https://www.gebaerdenwelt.tv/impressum/). Tier D.
- **equalizent** (https://www.equalizent.com → equalizent.wien): its medical signs are only reachable inside LedaSila. No separate licence found.
- **ÖGS corpus (Klagenfurt)**: the Compendium asq page lists no ÖGS corpus at all; only Dictio, LedaSila and SpreadTheSign ([Compendium asq](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/asq.html)).
- **SpreadTheSign**: Tier D by policy.
- **"SignLex"/"ÖGS-Lexikon"**: not verifiable, because search ran out and I had no known URL. GAP.

---------------------------------------------------------------------

#### Swiss German Sign Language / DSGS (sgg)

##### Signsuisse (SGB-FSS online lexicon): DSGS (sgg) (also LSF-CH and LIS-CH)
- URL: https://www.sgb-fss.ch/signsuisse/ (signsuisse.sgb-fss.ch redirects there)
- Type: isolated-video plus lexical-db (gloss, description, definition, category, example sentence)
- Size: from the WMT-SLT release: "18,221 lexical items", of which DSGS has 9,044, LSF-CH 6,423 and LIS-CH 2,754. Each has a video and gloss plus one example-sentence video ([WMT-SLT data](https://www.wmt-slt.com/data)).
- License (verbatim), website: "Copyright Bild und Text: Ohne entsprechenden Hinweis auf der jeweiligen Seite bedarf die Weiterverwendung von Bild und Text jeglicher Art des schriftlichen Einverständnisses vom Schweizerischen Gehörlosenbund und ist nur unter Erwähnung der Copyrightangaben zulässig." ([Impressum und Datenschutz](https://www.sgb-fss.ch/signsuisse/impressum-und-datenschutz)). The Compendium says "Restricted access requires individual license agreement" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/sgbfss.html)).
- License (verbatim), WMT-SLT 2023 research release (via SWISSUbase): "The datasets can be used for non-commercial research. Please note that distributing the datasets or making them accessible to third parties is not permitted, either in their original or edited form." ([WMT-SLT data](https://www.wmt-slt.com/data))
- SPDX: LicenseRef-SGB-FSS-permission (website); LicenseRef-WMT-SLT-NC-research (release)
- Tier: website **C** (written permission). WMT-SLT/SWISSUbase release **B** (non-commercial, no redistribution, even "edited form").
- Access route: website is HTML only. The research release is a register-and-request on SWISSUbase (requests "may be reviewed by the SwissUbase team").
- commercial_ok: no (unless SGB-FSS grants it)
- video_redistrib_ok: no
- Approx disk: UNVERIFIED
- Phonological/notation fields: none listed (gloss and definition)
- Citation: WMT-SLT 2023 overview paper (as requested on the data page); SGB-FSS Signsuisse.
- Next action: **write to SGB-FSS (info-d@sgb-fss.ch)** for permission to derive avatar clips. It is the only large trilingual Swiss lexicon, covering DSGS, LSF-CH and LIS-CH. The same release covers LSF-CH (6,423 items) and LIS-CH (2,754 items); see the Swiss-French/Swiss-Italian section.

##### SMILE Swiss German Sign Language Dataset (isolated): DSGS (sgg)
- URL: https://zenodo.org/record/7701457; https://www.idiap.ch/fr/recherche/donnees/smile_dsgs
- Type: isolated-video plus pose (Kinect 3D joints, OpenPose) plus annotation (iLex XML)
- Size: "100 isolated signs" produced multiple times by "16 adult L1 signers and 22 adult L2 learners"; "Kinect color video (.mp4); 1920x1080 Pixels @ 30 FPS; Kinect Pose Information (.csv); 25 Joints; 3D Joint Coordinates and Angles; OpenPose output (.json); iLex annotation files (.xml)" ([Zenodo API record 7701457](https://zenodo.org/api/records/7701457))
- License (verbatim): the Zenodo record has `access_right: restricted` and `license: None`. No licence text is public. The CC BY-NC 4.0 on [LREC L18-1666](https://www.sign-lang.uni-hamburg.de/lrec/pub/L18-1666.html) covers the paper only. UNVERIFIED.
- SPDX: NOASSERTION
- Tier: C (restricted, request)
- Access route: Zenodo access request
- commercial_ok: UNVERIFIED (assume no). video_redistrib_ok: UNVERIFIED (assume no).
- Approx disk: UNVERIFIED (file list hidden)
- Phonological/notation fields: iLex linguistic annotations (likely HamNoSys and form errors; UNVERIFIED)
- Citation: Ebling, S., Camgöz, N.C., Boyes Braem, P., Tissi, K., Sidler-Miserez, S., Stoll, S., Hadfield, S., Haug, T., Bowden, R., Tornay, S., Razavi, M., Magimai-Doss, M. (2018), SMILE Swiss German Sign Language Dataset, LREC 2018, pp. 4221–4229
- Next action: request via Zenodo if pose-fitting test data is wanted. With only 100 signs it has low lexical value.

##### SMILE Continuous DSGS Corpus (2026): DSGS (sgg)
- URL: https://www.swissubase.ch/en/catalogue/studies/21056/21315/overview; paper https://www.sign-lang.uni-hamburg.de/lrec/pub/26034.html
- Type: continuous-video (L2 learners and native controls, longitudinal, annotated manual and non-manual)
- Size: UNVERIFIED (four time points over 18 months)
- License (verbatim): "The corpus and accompanying annotations are available for research purposes under a Creative Commons license (CC BY-NC-SA 4.0)." (paper abstract, [LREC 26034](https://www.sign-lang.uni-hamburg.de/lrec/pub/26034.html)). The same anthology page lists "Licence: CC BY-NC 4.0" for the paper itself. The SWISSUbase page is JavaScript-rendered, so the record's licence is UNVERIFIED.
- SPDX: CC-BY-NC-SA-4.0 (per abstract)
- Tier: B
- Access route: SWISSUbase download (registration likely)
- commercial_ok: no. video_redistrib_ok: NC-SA.
- Phonological/notation fields: annotation tiers (details UNVERIFIED)
- Citation: Battisti, A., Tissi, K., Sidler-Miserez, S., Ebling, S. (2026), SMILE Continuous DSGS Corpus, sign-lang@LREC 2026, pp. 17–30
- Next action: skip for the dictionary (continuous learner data).

##### WMT-SLT SRF / FocusNews (continuous): DSGS (sgg)
- URL: https://www.wmt-slt.com/data; Zenodo https://zenodo.org/record/6631275 (SRF poses, restricted)
- Type: continuous-video (interpreted news). SRF has 779 episodes of about 30 min.
- License (verbatim): same terms as above: "The datasets can be used for non-commercial research. … distributing the datasets or making them accessible to third parties is not permitted…" ([WMT-SLT data](https://www.wmt-slt.com/data)). Zenodo has `access_right: restricted`, `license: None`.
- SPDX: LicenseRef-WMT-SLT-NC-research. Tier: B/C. commercial_ok: no. video_redistrib_ok: no.
- Next action: skip (continuous).

##### Swiss German Sign Language Lexicon (Boyes Braem, UZH/HfH): DSGS (sgg)
- URL: https://linguistik-signlang.uzh.ch. The Compendium says "(offline)".
- Type: lexical-db plus notation
- Size: "9000 signs"; "For 3000 signs: citation form, meaning, morphological and syntactic characteristics, usage, drawings, HamNoSys and SignWriting transcription" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dsgslexikon.html))
- License (verbatim): "Individual license agreement may be possible" (Compendium; there is no original page because the site is offline)
- Tier: C
- Next action: EASIER (FDR 10.25592/uhhfdm.14190) carries DSGS video links "courtesy of UZH". Contact UZH (Ebling group) about the HamNoSys/SignWriting fields for 3,000 signs. This is the best phonology source for DSGS if it can be obtained.

##### SignPuddle "Wörterbuch CH-de" (puddle 48): DSGS (sgg)
- URL: https://www.signbank.org/signpuddle2.0/data/spml/sgn48.spml (also Literatur CH-de = puddle 96)
- Type: notation (SignWriting FSW)
- Size: 4,745 entries, 4,743 with FSW, latest mdt 2022-03-03. File is 1,047,100 bytes. Glosses look like "anders-5240-V2", which suggests numbering keyed to a lexicon (provenance UNVERIFIED).
- License: CC BY-SA 3.0 (SignPuddle site-wide statement; see cross-language record). Tier A. Access: direct dump.
- Next action: ingest with the other puddles. Check whether the numeric gloss suffixes map to Boyes Braem or SGB-FSS lexicon IDs.

##### DSGS: Recommended first ingest
1. **SignPuddle sgn48** (4,745 FSW signs, Tier A). It is the only open DSGS lexical data.
2. In parallel, **request a licence from SGB-FSS for Signsuisse** (9,044 DSGS videos; Tier C) and **ask UZH about the Boyes Braem lexicon's HamNoSys** (3,000 signs; Tier C).
3. The WMT-SLT Signsuisse release (Tier B, no redistribution in any form) is usable only for internal research.

##### DSGS: Dead ends
- **linguistik-signlang.uzh.ch** (Boyes Braem lexicon) is offline per the Compendium.
- **The Zenodo SMILE and WMT-SLT records** state no licence (`license: None`, restricted).
- **The Compendium sgg page** lists no DSGS corpus entries; only the DSGS Lexicon and the SGB-FSS Lexicon ([Compendium sgg](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/sgg.html)).
- **Paula avatar, the Signsuisse 3D avatar, and the "DSGS Corpus"**: not checked, because search ran out. GAP.
- Content4All SWISSTXT: see the cross-language section (CC BY-NC-SA 4.0, password from Surrey).

---------------------------------------------------------------------


#### Spanish Sign Language / LSE (ssp)

##### SWL-LSE (SignaMed Word-Level LSE): reference dictionary videos + skeletons (LSE, ssp)
- URL: https://zenodo.org/records/13691887 (DOI 10.5281/zenodo.13691887); code at https://github.com/mvazquezgts/SWL-LSE
- Type: isolated-video (300 reference "dictionary sign" RGB videos recorded in lab conditions) + 8,000 MediaPipe skeleton sequences from 124 signers
- Size: 300 sign classes (health domain); 8,000 instances
- License (verbatim): Zenodo record metadata `license: {'id': 'cc-by-4.0'}`, `access_right: open`. Description: "Each class is represented by an RGB video that serves as the dictionary sign ... For privacy reasons, only the skeleton data is shared." The file list includes "VIDEOS_REF.zip Description : RGB videos recorded in lab conditions that represent each sign-class Total files : 300". Source: [Zenodo API record](https://zenodo.org/api/records/13691887)
- SPDX: CC-BY-4.0
- Tier: A
- Access route: direct dump URL (Zenodo files)
- commercial_ok: yes (CC BY)
- video_redistrib_ok: yes for VIDEOS_REF (CC BY 4.0 record-wide). The crowd-signer videos are not released.
- Approx disk: VIDEOS_REF.zip 24.1 MB (HEAD content-length 24,107,646); videos_ref_annotations.csv 9.8 KB; ANNOTATIONS.zip 62 KB; MEDIAPIPE.zip 3.5 GB
- Phonological/notation fields: none. The CSV has `FILENAME,CLASS_ID,LABEL` with Spanish glosses, e.g. ABORTO, ACCIDENTE, ACCIDENTE(A), ACCIDENTE2 (300 rows checked locally).
- Citation: Vázquez-Enríquez, Alba-Castro, Docío-Fernández, Rodríguez-Banga (2024), "SWL-LSE: A Dataset of Spanish Sign Language Health Signs with an ISLR Baseline Method", Technologies 12(10):205, doi:10.3390/technologies12100205. Zenodo creators include Universidade de Vigo, Confederación Estatal de Personas Sordas (CNSE) and FAXPG; acknowledgements name "Fundación CNSE-DILSE".
- Next action: download VIDEOS_REF.zip (24 MB, slightly over the 20 MB research cap, so do it at ingest time) and the CSV. Run the pose-to-SignDesc fit on the 300 citation-form videos. Credit UVigo/CNSE/FAXPG.

##### LSE-Sign lexical database (LSE, ssp)
- URL: http://lse-sign.bcbl.eu/web-busqueda/ (bcbl.eu/databases/lse/ redirects there)
- Type: phonology + lexical-db (the ASL-LEX analogue for LSE), with sign videos
- Size: 2,400 signs + 2,700 non-signs. Source: [LSE-Sign Instrucciones de uso](http://lse-sign.bcbl.eu/web-busqueda/?page_id=8)
- License (verbatim): there is no licence text. The usage page says: "La base de datos se ha diseñado para facilitar la selección de materiales de estímulo en estudios psicolingüísticos de LSE. Está disponible a todos los investigadores interesados. Si utilizas la base de datos LSE-Sign para una investigación ... deberías mencionar de forma explícita el uso de la base de datos e incluir la siguiente referencia" and "El punto de partida del contenido de la base de datos fue el Diccionario Normativo de la Lengua de Signos Española, publicado por la Fundación CNSE, cuyos contenidos la Fundación nos permitió utilizar para desarrollar esta herramienta." Source: [page_id=8](http://lse-sign.bcbl.eu/web-busqueda/?page_id=8). The Compendium lists "LSE-Sign license" and "Restricted access requires confirmed registration". Source: [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/lsesign.html)
- SPDX: NONE (LicenseRef-LSE-Sign-research)
- Tier: C (registration; research purpose; content licensed to BCBL from Fundación CNSE, with no redistribution grant)
- Access route: register-export. Search results "se pueden exportar en formato .csv utilizando la opción Exportar. El separador utilizado es el símbolo | (barra vertical)" ([page_id=8](http://lse-sign.bcbl.eu/web-busqueda/?page_id=8))
- commercial_ok: no (not granted)
- video_redistrib_ok: no
- Approx disk: CSV only, a few MB at most (estimate)
- Phonological/notation fields: search categories are "Información general, Tipo de signo e iconicidad, Localización, Configuración, Movimiento, Elementos no manuales". Extra fields include Etimología, Variaciones dialectales, Zonas de uso, Notas genéricas, Videos, Índices léxicos ([page_id=8](http://lse-sign.bcbl.eu/web-busqueda/?page_id=8)). The Compendium describes handshape, location, movement and non-manual coding.
- Citation: Gutierrez-Sigut, Costello, Baus & Carreiras (2016), Behavior Research Methods 48(1):123–137, doi:10.3758/s13428-014-0560-1
- Next action: register and use the CSV export internally only, as a tuning reference for handshape, location and movement. Email BCBL (and Fundación CNSE) to ask for derivative or redistribution permission. Do not ship it.

##### DILSE (Diccionario de la LSE, Fundación CNSE) (LSE, ssp)
- URL: https://fundacioncnse-dilse.org/
- Type: lexical-db + isolated-video (citation forms), HTML only, plus apps
- Size: 9,000 signs per the [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dilse.html). The 2008 DILSE III print/DVD edition had 4,100 signs per [consumer.es](https://www.consumer.es/educacion/se-edita-el-primer-diccionario-normativo-de-la-lengua-de-signos-espanola.html).
- License (verbatim), CONFLICTING:
  - Footer: "Esta obra está bajo una licencia de Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported." Source: [DILSE home](https://fundacioncnse-dilse.org/)
  - Aviso legal: "Queda autorizada la mera visualización, impresión, descarga o almacenamiento temporal ... exclusivamente para su uso personal, privado y no lucrativo por el usuario"; "Se prohíbe, por tanto, expresamente su utilización con fines comerciales o para su distribución"; "Que ninguno de los contenidos relacionados en esta Web sea modificado en modo alguno"; "será necesario obtener el consentimiento previo por escrito del titular de los derechos". Source: [aviso legal](https://fundacioncnse-dilse.org/aviso-legal.php)
- SPDX: CC-BY-NC-SA-3.0 (footer), contradicted by the aviso legal
- Tier: B at best (NC-SA per footer). Treat as C because the aviso legal forbids modification and distribution.
- Access route: HTML only (no dump found)
- commercial_ok: no
- video_redistrib_ok: no (at most NC-SA; the aviso legal says no)
- Approx disk: n/a
- Phonological/notation fields: the Compendium lists "Translation to Spanish, definition, picture, citation form". Press coverage mentions SEA (Sistema de Escritura Alfabética, Univ. Alicante) transcription in DILSE III ([consumer.es](https://www.consumer.es/educacion/se-edita-el-primer-diccionario-normativo-de-la-lengua-de-signos-espanola.html)).
- Citation: Fundación CNSE, DILSE
- Next action: email Fundación CNSE to resolve the licence conflict and ask about a bulk/video licence. CNSE already co-released SWL-LSE under CC BY, which suggests a CC BY deal is possible.

##### LSE-Health-UVigo (LSE, ssp)
- URL: https://zenodo.org/records/10234465 (DOI 10.5281/zenodo.10234465)
- Type: continuous-video (health discourse) with sign and fingerspelling annotations
- Size: 273 videos, about 11 h, 10 signers; "105 distinct signs annotated across all 273 videos. Total Instances : 15,098"
- License (verbatim): Zenodo metadata `license: {'id': 'cc-by-nc-4.0'}`, `access_right: open`. Source: [Zenodo API](https://zenodo.org/api/records/10234465). An earlier search snippet called this record "Dataset Restricted"; the API now reports open, and HEAD on the xlsx returns 200.
- SPDX: CC-BY-NC-4.0
- Tier: B
- Access route: direct dump URL
- commercial_ok: no
- video_redistrib_ok: NC only. The xlsx "Includes the links to download the videos from youtube"; the zip also holds the videos.
- Approx disk: Videos zip 5.08 GB; ELAN zip 2.1 MB; xlsx 2.1 MB
- Phonological/notation fields: none (glosses, Spanish segments, fingerspelling)
- Citation: Universidade de Vigo GTM, LSE-Health-UVigo (2023), Zenodo
- Next action: low priority. Gloss tokens could serve as sign-spotting examples (NC only).

##### LSE-FS-UVigo (fingerspelling) (LSE, ssp)
- URL: https://zenodo.org/records/15797079
- Type: mocap-like (MediaPipe 3D hand keypoints), continuous fingerspelling
- Size: 3,010 sequences, 42 signers
- License (verbatim): `license: {'id': 'cc-by-4.0'}`, open. Source: [Zenodo API](https://zenodo.org/api/records/15797079)
- SPDX: CC-BY-4.0
- Tier: A
- Access route: direct dump URL
- commercial_ok: yes
- video_redistrib_ok: no video (keypoints only; RGB only via YouTube timestamps)
- Approx disk: RAW_KPS 7.3 GB, PROC_KPS 7.4 GB
- Phonological/notation fields: none
- Citation: UVigo GTM, LSE-FS-UVigo v1.0 (2025)
- Next action: optional source for the LSE manual-alphabet handshapes.

##### LSE_UVIGO / LSE_Lex40_UVIGO (LSE, ssp)
- URL: paper https://aclanthology.org/2020.signlang-1.8.pdf
- Type: isolated-video (40 isolated signs plus fingerspelling and sentences) + continuous (TVG weather)
- Size: 35 signers at the time of the paper
- License (verbatim): no dataset licence found. The paper says: "We are managing the transfer of the rights of the images by the signers ... so a first release of the LSE_UVIGO database may be made available to the research community in the coming months." The paper itself is "licensed under CC-BY-NC" (ELRA). Source: [LREC 2020 paper](https://aclanthology.org/2020.signlang-1.8.pdf)
- SPDX: NOASSERTION
- Tier: C (UNVERIFIED release)
- Access route: email (UVigo GTM)
- commercial_ok: unknown; video_redistrib_ok: unknown; Approx disk: unknown
- Citation: Docío-Fernández et al. (2020), sign-lang@LREC 2020, pp. 45–52
- Next action: skip; SWL-LSE is the released successor.

##### SignaMed dictionary (LSE, ssp)
- URL: https://signamed.web.app/ ; project https://signamed.uvigo.es/
- Type: lexical-db + isolated-video (373 reference signs for 312 health terms)
- License: UNVERIFIED. The Compendium says "information not available" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/signamed.html)). The web app renders with JS, and the fetch returned no terms.
- Tier: D as a web app. Use SWL-LSE (Tier A), which releases the same reference videos.

##### CORLSE (Corpus de la LSE, CNLSE) (LSE, ssp)
- URL: https://corpuslse.es/ ; https://corpuslse.es/corlse/consulta-y-acceso
- Type: continuous-video (420 h; 246 signers), ELAN annotations for researchers
- License (verbatim): none stated. Access page: "Acceso del público general, que consiste en la visualización de los vídeos ... Acceso restringido a investigadoras/es y expertas/os, que permite la visualización de la anotación y el acceso a los datos sociolingüísticos." Annotation downloads require "Alta de investigadora/or: descargue el documento de acreditación y envíelo cumplimentado y firmado a corpus@cnlse.es". Source: [corpuslse.es/corpus](https://corpuslse.es/corpus). The Compendium also lists the licence as not available ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/corlse.html)).
- SPDX: NOASSERTION
- Tier: C
- Access route: email (signed accreditation)
- commercial_ok: no (not granted); video_redistrib_ok: no
- Citation: Esteban Saiz & Villameriel García (2023), Informe CORLSE; CNLSE (2023) Guía de anotación básica CORLSE
- Next action: optional. The ELAN gloss inventory could become a frequency list after accreditation. The site also has a "Videoglosario" of linguistic terminology, which is not core vocabulary.

##### Sign4all (LSE, ssp)
- URL: https://doi.org/10.57760/SCIENCEDB.28304 (Science Data Bank)
- Type: isolated-video (24 dining/catering signs; 7,756 samples; 8 signers; Azure Kinect)
- License: UNVERIFIED. The DataCite `rightsList` is empty and the scidb page is JS-only. Size per DataCite: "18496841136 bytes", 4 files. Source: [DataCite API](https://api.datacite.org/dois/10.57760/SCIENCEDB.28304); description at [UA observatorio](https://observatorio-cientifico.ua.es/documentos/688b607e17bb6239d2d4f62f)
- Tier: D until a licence is found
- Next action: check the scidb page in a browser for its licence. Low value (24 signs).

##### sematos (LSE/LSC/LSF/IS) (LSE, ssp)
- URL: http://www.sematos.eu. The Compendium lists 6,076 LSE signs and 297 LSC signs, searchable by handshape.
- License: "information not available" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/sematos.html))
- Tier: D (no stated licence)

##### SIGN-HUB LSE grammar (also LSC, LIS)
- URL: https://thesignhub.eu/
- Type: grammar with video examples, including a phonology chapter (handshape inventories). Not a lexicon.
- License (verbatim): footer links to https://creativecommons.org/licenses/by-nc-sa/4.0/ with the text "This work is licensed under a Creative Co[mmons ...]". Source: [thesignhub.eu](https://thesignhub.eu/)
- SPDX: CC-BY-NC-SA-4.0 · Tier: B · Access: HTML (grammars "available for consultation and download")
- Next action: use the phonology chapters as references for the handshape inventory (not data).

**LSE: recommended first ingest.** SWL-LSE VIDEOS_REF (300 citation-form reference videos plus gloss CSV, CC BY 4.0, Zenodo) for clips. Add SignPuddle sgn55 (CC BY-SA, see SignPuddle table) for vocabulary breadth. Register for the LSE-Sign CSV as an internal-only phonology reference (Tier C) and email CNSE about DILSE.

**LSE dead ends / no-go:** DILSE bulk (no dump; licence conflict); SignaMed web app (no licence); LSE_UVIGO / Lex40 (never confirmed released); sematos (no licence); SpreadTheSign (skip by policy; listed in the [Compendium ssp](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html)); Sign4all (licence unverified). Not checked because the search budget ran out: CORILSE (Cabeza-Pereiro et al. 2016), "Signario LSE", Kaggle LSE alphabet sets.

---

#### Catalan Sign Language / LSC (csc)

##### Corpus de referència de la LSC (CORPUS LSC, IEC) (LSC, csc)
- URL: https://corpuslsc.iec.cat/ ; download area https://corpuslsc.iec.cat/area-de-descarrega/ ; DOI 10.2436/10.2500.22.1
- Type: continuous-video + ELAN + gloss list (lexical-db)
- Size: 560 h recorded; 150,870 tokens annotated; 56 participants ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/lsccorpus.html)). The gloss list has 5,064 gloss rows (counted locally); 3,024 rows carry the note "NOMÉS APAREIX ALS MATERIALS" (only in the LSC materials, not in the corpus).
- License (verbatim): "Tot el material de descàrrega del corpus està subjecte a la llicència CC BY 4.0, els termes de la qual s'especifiquen a l'enllaç següent:" → https://creativecommons.org/licenses/by/4.0/legalcode.es. Source: [àrea de descàrrega](https://corpuslsc.iec.cat/area-de-descarrega/), also on the [home page](https://corpuslsc.iec.cat/)
- SPDX: CC-BY-4.0
- Tier: A
- Access route: direct download. EAF and MP4 files sit in Google Drive folders by activity and age group. The gloss list is a Google Sheet: https://docs.google.com/spreadsheets/d/1sFiSZ6cjmEwNWXCOgrsh0cRmS15v8m7i/ (CSV export worked: 310 KB). Extra metadata is available on request to informacio@iec.cat.
- commercial_ok: yes (CC BY)
- video_redistrib_ok: yes (CC BY 4.0 covers "tot el material de descàrrega"). Signer-consent nuances are not stated.
- Approx disk: gloss CSV 0.3 MB; video total unknown (560 h recorded; the open subset is smaller)
- Phonological/notation fields: CSV columns `GLOSSES, ALTRES GLOSSES, FORMES QUE APAREIXEN EN EL CORPUS, OBSERVACIONS`. Gloss IDs carry handshape-style disambiguator suffixes (counts: -B 276, -1 231, -5 169, -A 137, -2 115, -Q 113, -5d 93, -Bd 83, -6, -7, -C, -8, -0e ...), e.g. A-BAIX-B, A-BAIX-Bd, A-BANDA-5. This gives partial handshape coding, but there is no location or movement coding.
- Citation: "Institut d'Estudis Catalans. 2025. Corpus de referència de la llengua de signes catalana (LSC) (CORPUS LSC)" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/lsccorpus.html))
- Next action: ingest the gloss list now as the LSC lemma inventory and parse handshape suffixes into SignDesc handshape hints. Later, cut citation-like tokens from the EAF+MP4 (CC BY), consistent with Marionet's principle that video is only a means to an end.

##### Wikisign LSC (LSC, csc)
- URL: http://lsc.wikisign.org. The live host now returns `<html><body>not configured</body></html>` (checked 2026-10-14). The archive is at https://web.archive.org/web/20220331051745/http://lsc.wikisign.org/
- Type: notation (SignWriting MediaWiki) + lexical
- Size: 1,200 signs ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/wikisignlsc.html))
- License (verbatim): the archived page has `rel="license" href="http://creativecommons.org/licenses/by-sa/2.0/es/deed.ca"` (checked via curl on the archive snapshot); the Compendium says "CC BY-SA 2.0 ES"
- SPDX: CC-BY-SA-2.0-ES (closest SPDX id: CC-BY-SA-2.0)
- Tier: A by licence, but D by access (dead site; only reachable as an archive mirror)
- Access route: none live. Its SignWriting content overlaps SignPuddle sgn56 (CC BY-SA), which is the live dump.
- Next action: use SignPuddle sgn56 instead; do not scrape the Wayback copy.

##### Portal de la LSC (IEC) vocabulary (LSC, csc)
- URL: https://lsc.iec.cat/vocabulari2/
- Type: terminology video list (linguistic terms such as "Abstracte, Adjectiu, Adverbi") linked to YouTube
- License (verbatim): IEC avís legal: "La reproducció, distribució, comercialització, transformació o comunicació pública no autoritzades d'aquestes obres constitueix una infracció dels drets de propietat intel·lectual." Source: [iec.cat/legal](https://www.iec.cat/legal/)
- Tier: D (all rights reserved; YouTube)

**LSC: recommended first ingest.** The CORPUS LSC gloss list (CC BY 4.0, direct CSV), plus SignPuddle sgn56 for SignWriting forms. Then corpus EAF/MP4 token extraction for clips.

**LSC dead ends:** Wikisign LSC live (dead); IEC portal vocabulary (all rights reserved, YouTube); sematos LSC (297 signs, no licence); FESOCA site (HTTP 403 to fetch, no dictionary found); the DGPL "vocabulari bàsic" (1,000–1,200 words, announced in a 2017 IEC note) was not located. The "Diccionari de la LSC" IEC dictionary does not appear to exist yet: IEC is the normative authority ([lsc.iec.cat](https://lsc.iec.cat/)), but no dictionary was found.

---

#### Valencian Sign Language / LSCV (csn)

- **Nothing found.** The Sign Language Dataset Compendium language index has no Valencian entry (the [index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html) lists ssp and csc but not csn). SignPuddle has no Valencia puddle. The FESORD CV home page ([fesord.org](https://www.fesord.org/)) has no dictionary link. It frames the language as "la lengua de signos propia de las personas sordas" and cites "La Cultura Sorda y la LSE como Patrimonio Cultural Inmaterial (Real Decreto 155/2024)", i.e. the federation itself presents the Valencian community's language under the LSE umbrella.
- **Recommended first ingest:** none. Treat csn as an LSE variety: reuse LSE sources and flag regional variants via LSE-Sign "Zonas de uso" (Tier C) where available.
- **Gaps:** Not checked (search budget): any FESORD signario PDF, Universitat de València LSCV materials.

---

#### Portuguese Sign Language / LGP (psr)

##### LGP Reference Corpus (Universidade Católica Portuguesa) (LGP, psr)
- URL: article https://doi.org/10.16995/jpl.23006 ; record https://ciencia.ucp.pt/en/publications/portuguese-sign-language-reference-corpus-an-annotated-signed-cor/
- Type: continuous-video (112 h 51 min, recordings from 1992–2019) + ELAN
- License: the article is "Licence: CC BY" ([Ciência-UCP record](https://ciencia.ucp.pt/en/publications/portuguese-sign-language-reference-corpus-an-annotated-signed-cor/)). No data licence or access route found. The project portal (portallgp.ics.lisboa.ucp.pt) now redirects to a Plesk login page, and the JPL article page is behind an Anubis bot wall, so the data-availability statement could not be read.
- SPDX: NOASSERTION (data) · Tier: C (UNVERIFIED) · Access: email (CIIS/UCP, Mara Moita / Ana Mineiro)
- Citation: Moita, Vaz de Carvalho, Carmo, Mineiro (2026), J. Portuguese Linguistics 25(1), doi:10.16995/jpl.23006. Project: "Corpus Linguístico & Avatar da LGP" (PTDC/LLT-LIN/29887/2017)
- Next action: email UCP to ask about a lexicon or gloss list and its licence. The project had an avatar strand, so a sign lexicon may exist.

##### SignPuddle Dicionário Portugal sgn33 (LGP, psr)
- 496 entries (see SignPuddle table; 75 entries are sourced from a Brazilian Libras YouTube channel, so filter on `<src>`). This is the only Tier-A LGP lexical item found.

**LGP: recommended first ingest.** SignPuddle sgn33 (small, CC BY-SA). No licensed LGP citation-form video was found.

**LGP dead ends:** The Compendium [psr page](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/psr.html) lists only SpreadTheSign (skip by policy). Infopédia/Porto Editora LGP returns HTTP 403 to fetch (proprietary publisher; Tier D, not verified). The VirtualSign hosts tried (virtualsign.pt, virtualsign.ipp.pt) do not resolve. The UCP LGP portal is offline (Plesk login). Not checked (search budget): "Dicionário da LGP" (Porto Editora print), PE2LGP lexicon (INESC-ID/UCP; PDF at portallgp, now offline), Univ. Coimbra/ESEC resources.

---

#### Italian Sign Language / LIS (ise)

##### e-LIS: Electronic Bilingual Dictionary LIS–Italian v1.0 (Eurac Research CLARIN) (LIS, ise)
- URL: http://hdl.handle.net/20.500.12124/75 → https://clarin.eurac.edu/repository/xmlui/handle/20.500.12124/75 ; GitLab https://gitlab.inf.unibz.it/commul/elis/data/-/tags/v1.0
- Type: isolated-video (citation signs plus definition and example videos) + lexical-db
- Size: "2677 videos with definitions and examples for 294 Italian lemmas" (OAI). The README gives ITA 304 word forms (80 adj/adv, 152 noun, 72 verb), LIS/onehand 131, LIS/twohand 170, 2,677 mp4 in total, plus still JPGs for the LIS section.
- License (verbatim): OAI `<dc:rights>Creative Commons - Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)</dc:rights>`, `<dc:rights>PUB</dc:rights>`. Item page: "This item is Publicly Available and licensed under: Creative Commons - Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)". README: "Electronic Bilingual Dictionary Italian Sign Language (LIS) – Italian is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)." Sources: [OAI GetRecord](https://clarin.eurac.edu/repository/oai/request?verb=GetRecord&metadataPrefix=oai_dc&identifier=oai:clarin.eurac.edu:20.500.12124/75), [item page](https://clarin.eurac.edu/repository/xmlui/handle/20.500.12124/75), [README](https://clarin.eurac.edu/repository/xmlui/bitstream/handle/20.500.12124/75/README.html?sequence=2&isAllowed=y)
- SPDX: CC-BY-NC-SA-4.0
- Tier: B
- Access route: direct dump URL (data-v1.0.zip), or git-lfs from GitLab
- commercial_ok: no
- video_redistrib_ok: NC-SA only. Upstream note: the Compendium says "The video material comes from the DIZLIS dictionary" ([Compendium e-LIS](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/elis.html)), and DIZLIS (Coop. ALBA) is all-rights-reserved. Eurac deposited it as CC BY-NC-SA, but the chain of rights is worth confirming.
- Approx disk: data-v1.0.zip 436.34 MB; README 45.7 KB
- Phonological/notation fields: the LIS section is foldered by one-hand/two-hand × dominant handshape class (0–5 and similar). The original engine used "four out of its five constituent parameters (i.e., hand shape, palm orientation, movement, location) following the Stokoe-based notation system ... transformed ... into the ASCII format" (README). The deposited files are mp4/txt/jpg; whether the ASCII parameter strings are included is UNVERIFIED (the folder listing shows only .segno/.definizione/.esempio mp4/txt).
- Citation: Vettori, Zanoni, Felice, Stanizzi, Baj, Battagin, Consolati, Valente (2006), e-LIS v1.0, Eurac Research CLARIN Centre, hdl:20.500.12124/75
- Next action: best LIS citation-form video set (about 300 signs). Download (436 MB) for NC/internal tuning. If shipped clips must be commercial-safe, use them only as reference and derive SignDesc by hand. Check the GitLab repo for any parameter/ASCII file.

##### DIZLIS (Cooperativa sociale ALBA Onlus) (LIS, ise)
- URL: http://www.dizlis.it/ (does not resolve as of 2026-10-14; curl returned no response). Terms archived at https://web.archive.org/web/20210617060732/http://www.dizlis.it/web/termini-e-condizioni.html
- Type: lexical-db + isolated-video (1,000 signs; "parameters, pictures" per the [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dizlis.html))
- License (verbatim, from the archived terms): "Tutti i contenuti di questo sito sono liberamente consultabili ma non copiabili ... I filmati sono liberamente riproducibili soltanto se in numero non consistente e al solo scopo di citazione ... non possono essere replicati su altri siti Web ... senza la preventiva autorizzazione della Cooperativa sociale ALBA Onlus, qualsiasi sia la finalitá di utilizzo"
- SPDX: LicenseRef-proprietary · Tier: D (C if ALBA grants written permission via coop.alba@mclink.it)
- Next action: skip (site offline; all rights reserved).

##### SignIT (Univ. Catania IPLab) (LIS, ise)
- URL: https://fpv-iplab.github.io/SignIT/ ; data https://iplab.dmi.unict.it/sharing/SignIT/data/
- Type: isolated-video clips segmented from third-party videos + MediaPipe 2D keypoints
- Size: 94 sign classes (Animals, Food, Colors, Emotions, Family); 644 source videos, 3.33 h
- License (verbatim): "The SignIT dataset is distributed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)." Source: [SignIT page](https://fpv-iplab.github.io/SignIT/). Provenance: "The dataset was collected from 644 publicly available videos, each featuring a single signer" (same page), i.e. likely web or YouTube footage.
- SPDX: CC-BY-NC-4.0 · Tier: B on paper, but D in practice under the user's rule against YouTube or third-party footage
- Access route: direct (Videos.zip 661 MB; 2D_Keypoints_Hand.zip 43.9 MB; CSV Micro 209 KB; README 5.8 KB, per HEAD)
- commercial_ok: no · video_redistrib_ok: no (third-party footage)
- Citation: Micieli, Farinella, Ragusa (2026), VISAPP 2026 vol. 2 pp. 461–468, doi:10.5220/0014480100004084; arXiv:2512.14489
- Next action: skip for clips. The class list could cross-check vocabulary.

##### Italian Sign Language (LIS) Corpus (Geraci et al.) (LIS, ise)
- URL: TLA collection https://hdl.handle.net/1839/00-57EA1164-AC96-4541-8B1D-252673D6152A (elicitation materials)
- Type: continuous-video (about 100 h; 180 signers; 16,500 tokens; ELAN)
- License (verbatim): Compendium "CC BY-NC-SA (version unspecified)", "Restricted access for researchers, requires individual license agreement" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/liscorpus.html)). The TLA CMDI for "LIS Corpus Project" has `<DistributionType>unspecified</DistributionType>` with an empty LicenseName ([TLA CMD](https://archive.mpi.nl/objects/tla:1839_00_57EA1164_AC96_4541_8B1D_252673D6152A/datastreams/CMD/content?asOfDateTime=2018-03-02T11:00:00.000Z)). The LREC 2010 paper carries "Licence: CC BY-NC 4.0", which is the paper's licence, not the data's ([sign-lang 10023](https://www.sign-lang.uni-hamburg.de/lrec/pub/10023.html)).
- SPDX: NOASSERTION · Tier: C · Access: email + individual agreement
- Next action: skip for now.

##### A Grammar of Italian Sign Language (LIS) (SIGN-HUB; Edizioni Ca' Foscari) (LIS, ise)
- URL: http://doi.org/10.30687/978-88-6969-474-5
- Type: grammar with videos; Part 2 Phonology ("Sublexical structure"); Part 3 Lexicon
- License (verbatim): "This is an open-access work distributed under the terms of the Creative Commons Attribution License (CC BY-NC-SA) ... You may not use the material for commercial purposes." Source: [Edizioni Ca' Foscari](https://edizionicafoscari.unive.it/it/edizioni4/libri/978-88-6969-474-5/). This corrects an earlier search-engine summary that claimed CC BY 4.0.
- SPDX: CC-BY-NC-SA-4.0 (version per the SIGN-HUB footer; the book page gives no version) · Tier: B · Access: HTML/PDF
- Next action: reference for the LIS handshape inventory only.

##### A3LIS-147 (UNIVPM, Fagiani et al. 2012) (LIS, ise)
- Type: isolated-video (147 signs × 10 signers)
- License: UNVERIFIED. A search-engine summary of the UNIVPM IRIS record says it is "free and available for download", but iris.univpm.it returns HTTP 403 to fetch and no download page or licence was found. Source (unverified): [IRIS UNIVPM 11566/74228](https://iris.univpm.it/handle/11566/74228)
- Tier: D until verified · Next action: email UNIVPM (Fagiani/Piazza) for terms.

##### MultiMedaLIS (Univ. Catania / Modena) (LIS, ise)
- Type: multimodal isolated (RGB, depth, radar), medical domain; ELAN
- License: none found (paper only: [CLiC-it 2024](https://aclanthology.org/2024.clicit-1.17)) · Tier: D/C (UNVERIFIED)

##### ATLAS / LIS4ALL (Politecnico/Univ. Torino) (LIS, ise)
- Avatar projects with AEWLIS notation and a trilingual corpus "said would be freely available" (search summary). No download or licence was found; project page at [smilies.polito.it/atlas](https://www.smilies.polito.it/atlas/) not fetched. · Tier: D (UNVERIFIED)

**LIS: recommended first ingest.** SignPuddle sgn63 (1,222 entries, CC BY-SA) for Tier-A notation. Add e-LIS v1.0 (CC BY-NC-SA 4.0, 436 MB zip, about 300 citation-form signs foldered by handshape) as the citation-video reference, Tier B, NC only.

**LIS dead ends:** DIZLIS (offline; all rights reserved); SignIT (third-party footage); LIS Corpus (restricted, licence unspecified at TLA); A3LIS-147 and MultiMedaLIS (no licence found); SpreadTheSign (skip by policy). Not checked (search budget): ENS/ISSR "Dizionario LIS" apps, Radutzky "Dizionario bilingue elementare della LIS" (print, proprietary), "Smart LIS", LIS Tactile, ISTC-CNR LIS resources.

---


#### Swedish Sign Language — STS (swl)

##### Svenskt teckenspråkslexikon (Swedish Sign Language Dictionary, Stockholm University) — STS (swl)
- URL: https://teckensprakslexikon.su.se/
- Type: lexical-db + phonology (form description) + notation (Swedish SL transcription, "teckentranskription") + isolated-video (citation and example-sentence mp4s) + photos
- Size:
  - Homepage: "about 24,500 signs registered, 21,693 published" — [home](https://teckensprakslexikon.su.se/)
  - About page: "Cirka 26 900 tecken är dokumenterade, varav 21 574 är publicerade (2025-01-07)" — [om-lexikonet](https://teckensprakslexikon.su.se/information/om-lexikonet)
  - The compendium lists 19,149 signs, which is out of date — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/ssld.html)
- License (verbatim): "Svenskt teckenspråkslexikon by Avdelningen för teckenspråk, Institutionen för lingvistik, Stockholms universitet is licensed under a Creative Commons Erkännande-IckeKommersiell-DelaLika 4.0 Internationell (CC BY-NC-SA 4.0)." The page adds: "Tillstånd utöver denna licens kan vara tillgängligt på https://www.su.se/forskning/forskningsämnen/teckenspråk" — [om-lexikonet](https://teckensprakslexikon.su.se/information/om-lexikonet). Individual sign pages carry the same footer — [ord/00001](https://teckensprakslexikon.su.se/ord/00001). The SND/researchdata.se catalogue record (ext0408-1) also lists https://creativecommons.org/licenses/by-nc-sa/4.0/ and describes access as public — [researchdata.se](https://researchdata.se/sv/catalogue/dataset/ext0408-1)
- SPDX: CC-BY-NC-SA-4.0
- Tier: B
- Access route: HTML only on the official site, with no official export, API or dump advertised ([om-lexikonet](https://teckensprakslexikon.su.se/information/om-lexikonet), [SND record](https://researchdata.se/sv/catalogue/dataset/ext0408-1) gives no distribution URL). Per-sign media sit at predictable relative paths: photos at `/photos/00/taxi-00001-photo-1-medium.jpg`, and a sentence video at `/movies/00/taxi-00001-fras-1.mp4` (HEAD: 1,009,151 bytes) — [ord/00001](https://teckensprakslexikon.su.se/ord/00001). An unofficial full CSV mirror exists (next record).
- commercial_ok: no
- video_redistrib_ok: yes, non-commercially, with attribution and share-alike
- Approx disk:
  - Metadata: about 6 MB as CSV
  - Videos: about 21.6k signs, each with a citation video plus sentence videos. One sentence clip is about 1 MB, so plausibly 20–40 GB in total (inference; not measured).
- Phonological/notation fields:
  - Each entry has a transcription string in the SU transcription system, encoded as private-use Unicode characters. The FreeSans-SWL font uses U+10C900–U+10C9FF — [teckentranskription README](https://github.com/zrajm/teckentranskription/blob/master/README.md)
  - Each entry also has a prose "Formbeskrivning" covering handshape, attitude, location and movement, e.g. "D-handen, vänsterriktad och framåtvänd, upprepade kontakter ovanpå hjässan" — [ord/00001](https://teckensprakslexikon.su.se/ord/00001)
  - The site can be searched by handshape, position, translation and subject — [SND record](https://researchdata.se/sv/catalogue/dataset/ext0408-1)
  - The compendium lists "phonological description and transcription, glosses" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/ssld.html)
- Citation: "Svenskt teckenspråkslexikon. (2018). Swedish Sign Language Dictionary online. Department of Linguistics, Stockholm University. https://teckensprakslexikon.su.se" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/ssld.html). Creators: Thomas Björkstrand and Johanna Mesch — [SND](https://researchdata.se/sv/catalogue/dataset/ext0408-1)
- Next action:
  - Email teckenlexikon@ling.su.se to ask for the official CSV/database export (one evidently exists; see next record) plus bulk citation-video access under CC BY-NC-SA 4.0.
  - Ask in the same email whether "permissions beyond this license" (e.g. commercial use) are available.

##### teckentranskription `lexicon-data.csv` (unofficial weekly mirror of the official STS lexicon export) — STS (swl)
- URL:
  - https://github.com/zrajm/teckentranskription (file: `lexicon-data.csv`)
  - Front end: https://zrajm.github.io/teckentranskription/
- Type: lexical-db + notation (STS transcription) + form descriptions. No media; the videos still load from SU.
- Size: 6,238,024 bytes. 21,728 rows × 19 columns; 21,310 rows have a transcription string. Counted locally on a copy fetched 2026-10-14.
- License (verbatim):
  - The repository license is "GNU General Public License v3.0" (GitHub API `license.spdx_id: GPL-3.0`), and it is a code license. No separate data license is stated in the README — [repo](https://github.com/zrajm/teckentranskription)
  - The README says: "Fresh data is (automatically) imported every week from the official Swedish Sign Language Lexicon" — [README](https://github.com/zrajm/teckentranskription/blob/master/README.md)
  - The import script fetches the CSV as an email attachment from Gmail (`bin/update-sign-language-lexicon`, `bin/gmail-fetch`), so it is not scraped. The latest data commit was "Imported data from official lexicon 2025-09-01" — [repo bin/](https://github.com/zrajm/teckentranskription/tree/master/bin)
  - The owner's GitHub bio says: "I study sign language linguistics at Stockholm University."
  - Inference: the data inherits the SU lexicon's CC BY-NC-SA 4.0, not GPL.
- SPDX: data = CC-BY-NC-SA-4.0 (inferred from upstream); code = GPL-3.0
- Tier: B if SU confirms; until then treat it as an unofficial mirror. Use it for schema and prototyping only, not as the ingest of record.
- Access route: direct dump URL (raw.githubusercontent.com/zrajm/teckentranskription/master/lexicon-data.csv)
- commercial_ok: no
- video_redistrib_ok: n/a (no media)
- Approx disk: 6.2 MB
- Phonological/notation fields: column mapping, from `bin/csvdump2json`:
  - f0 = ID
  - f1 = transcription
  - f2–5 = Swedish words
  - f13 = subject
  - f14 = form description (handshape/attitude/location/movement, as prose)
  - f15 = "genuine" flag
  - f16 = corpus gloss (empty in the current dump)
  - f17 = comment
  - f18 = dialect
  - `intro.html` in the same repo documents every transcription symbol and its history, which can serve as a symbol-to-feature mapping table.
- Citation: cite the SU lexicon (above), plus "zrajm, teckentranskription (GitHub)".
- Next action: use it to build the STS parser now (PUA transcription → handshape/location/movement features), and ask SU for the canonical export and permission in parallel.

##### STS-korpus / Svensk teckenspråkskorpus (SSLC), plus TSTS, SSLC-L2 and the ECHO STS subset — STS (swl)
- URL:
  - https://teckensprakskorpus.su.se/
  - Corpus list: https://teckensprakskorpus.su.se/information/vara-korpusar
- Type: continuous-video plus ELAN annotations (ID-glosses, handshape annotation fields, POS). It is a source of corpus evidence and token frequencies, not citation forms.
- Size: SSLC has 24 h recorded, 190,000 tokens, 18,800 types annotated, 42 signers — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/sslcorpus.html). The corpus list also names TSTS (tactile STS) and SSLC-L2 (28 L2 learners; doi:10.58141/pfmm-1323) — [vara-korpusar](https://teckensprakskorpus.su.se/information/vara-korpusar)
- License (verbatim):
  - Site footer: "STS-korpus by Avdelningen för teckenspråk, Institutionen för lingvistik, Stockholms universitet is licensed under a Creative Commons Erkännande-IckeKommersiell-DelaLika 4.0 Internationell (CC BY-NC-SA 4.0)." — [vara-korpusar](https://teckensprakskorpus.su.se/information/vara-korpusar)
  - Conflict: the SND record for SSLC v1 (ext0409-1) lists https://creativecommons.org/licenses/by-nc/4.0/ — [researchdata.se](https://researchdata.se/en/catalogue/dataset/ext0409-1)
  - The compendium has "CC BY-NC-SA (version unspecified)" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/sslcorpus.html)
- SPDX: CC-BY-NC-SA-4.0 (site), with a conflicting CC-BY-NC-4.0 in SND
- Tier: B
- Access route:
  - Browsing through the web tool.
  - "Det finns också möjlighet att ladda ner filer i forskningsssyfte. För att kunna använda och titta på annoteringarna på din egen dator behöver du registrera dig ..." — [information](https://teckensprakskorpus.su.se/information)
  - In practice this means register-export.
- commercial_ok: no
- video_redistrib_ok: non-commercial only
- Approx disk: not stated (24 h of multi-camera video, so likely hundreds of GB; inference)
- Phonological/notation fields: ELAN gloss tiers, plus handform/articulator/modification search fields — [teckensprakskorpus.su.se](https://teckensprakskorpus.su.se/)
- Citation: "Mesch, J., Wallin, L., Nilsson, A.-L., & Bergman, B. (2012). Svensk teckenspråkskorpus: Datamängd. Projektet Korpus för det svenska teckenspråket 2009-2011 (Version 1)..." — [källhänvisning](https://teckensprakskorpus.su.se/information/kallhanvisning). For the tool: Öqvist, Riemer Kankkonen & Mesch (2020), LREC SL workshop, pp. 177-180 (same page).
- Next action: low priority for citation forms. Request the EAF files only if Marionet needs frequency ranking or variant evidence.

##### ECHO corpus, Swedish part — STS (swl)
- URL: https://hdl.handle.net/1839/00-0000-0000-0001-4892-C (The Language Archive)
- Type: continuous-video plus a small lexicon. The ECHO description covers "narratives, dialogues, small lexicons, and poetry", and STS has 15 items under the language filter — [TLA](https://archive.mpi.nl/tla/islandora/object/tla%3A1839_00_0000_0000_0001_4892_C). The STS part includes an Extended Swadesh list (Woll et al. 2010) — [vara-korpusar](https://teckensprakskorpus.su.se/information/vara-korpusar)
- Size: 1.5 h per language, 8 signers — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/echo.html)
- License (verbatim): the compendium gives "CC BY-NC-ND 3.0" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/echo.html). The TLA page shows access level "Open" but no license text — [TLA](https://archive.mpi.nl/tla/islandora/object/tla%3A1839_00_0000_0000_0001_4892_C). UNVERIFIED on the original archive page.
- SPDX: CC-BY-NC-ND-3.0 (unverified)
- Tier: B on paper, but ND forbids derivatives such as avatar clips, so it is effectively C (needs permission).
- Access route: direct download from TLA (open bundles)
- commercial_ok: no
- video_redistrib_ok: verbatim only, non-commercially (ND)
- Approx disk: unknown
- Phonological/notation fields: ELAN annotation; no phonology coding stated
- Citation: "Collection "ECHO". The Language Archive. https://hdl.handle.net/1839/00-0000-0000-0001-4892-C" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/echo.html)
- Next action: skip. It is superseded by the SU lexicon.

**Recommended first ingest (swl):**
1. Build the parser against the 6.2 MB `lexicon-data.csv` mirror: 21.7k entries with SU transcription and prose form descriptions.
2. Request the canonical export and bulk video access from SU (teckenlexikon@ling.su.se) under CC BY-NC-SA 4.0. STS is the best-documented Nordic phonology source, but it is Tier B (NC), so it cannot be used commercially.

**Dead ends (swl):**
- `ling33.ling.su.se/sslc/video/`, the old SSLC video directory named in the compendium, does not resolve in DNS (curl error 6).
- The SND link to the SSLC annotation-files page (`ling.su.se/.../annoteringsfiler`) returns HTTP 404.
- SpreadTheSign is listed in the compendium ([swl](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/swl.html)) but is Tier D per the gate.

---

#### Finnish Sign Language — FinSL (fse) and Finland-Swedish Sign Language — FinSSL (fss)

##### Suomen Signbank / Finnish Signbank (University of Jyväskylä + Finnish Association of the Deaf) — FinSL (fse) and FinSSL (fss)
- URL: https://signbank.csc.fi/
- Type: lexical-db (ID-glosses + translations + relations) + isolated-video (one citation mp4 per gloss)
- Size: there are three public lexicons, and the public ECV exports (fetched 2026-10-14) contain:
  - dataset 1 "VKK-korpus" (CFINSL, FinSL; fin+eng): 2,354 entries — https://signbank.csc.fi/dictionary/public-ecv/1 (678,701 bytes)
  - dataset 2 "Kipo-korpus" (Finnish Association of the Deaf, FinSL; fin+eng): 878 entries — https://signbank.csc.fi/dictionary/public-ecv/2 (266,531 bytes)
  - dataset 4 "FinSSL-VKK" (FinSSL; swe+eng): 733 entries — https://signbank.csc.fi/dictionary/public-ecv/4 (227,469 bytes)
  - Dataset names were read from gloss page titles, e.g. "AALTO [VKK-korpus]", "AAMU [Kipo-korpus]", "AKTIE [FinSSL-VKK]".
  - The homepage says the Kipo lexicon opened in June 2017, CFINSL in April 2018, and the FinSSL lexicon in 2024 — [home](https://signbank.csc.fi/)
- License (verbatim):
  - Homepage: "Suomen Signbank -tietokantaan tallennetut videot ovat käytettävissä Creative Commons BY-NC-SA-lisenssin mukaisesti", linking https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fi — [home](https://signbank.csc.fi/)
  - Terms of service: "Leksikkoon lisätty data lisensoidaan kunkin leksikon lisenssin mukaisesti." Also: "Käyttäjä lupaa olla kopioimatta ja levittämättä sivustolla olevaa tietoa ellei hän ole saanut siihen lupaa, tai ellei lisenssi mahdollista sitä." — [käyttöehdot](https://signbank.csc.fi/about/terms-of-service/)
  - The copyright page carries only the BSD-3-Clause software license (Macquarie, Radboud, Jyväskylä) — [tekijänoikeudet](https://signbank.csc.fi/about/copyright/)
  - The compendium gives CC BY-NC-SA 4.0 for the whole resource — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/finnishsignbank.html)
- SPDX: CC-BY-NC-SA-4.0 (videos explicitly; data via each lexicon's license); software BSD-3-Clause
- Tier: B
- Access route:
  - Direct dump URLs for the gloss lists: `/dictionary/public-ecv/{1,2,4}` (ELAN ECV XML). Each entry has a `CVE_ID="glossidNNNN"`, the gloss, and a translation description. The endpoint is defined in [FinSL-signbank urls.py](https://github.com/Signbank/FinSL-signbank/blob/master/signbank/dictionary/urls.py).
  - Videos are served as static mp4 on CSC Allas, e.g. `https://a3s.fi/signbank_data/media/glossvideo/AA/AALTO-3833_vid7536.mp4` (HEAD: 2,893,940 bytes, video/mp4).
  - Public gloss pages are at `/dictionary/gloss/<id>`. Richer fields require login or lexicon permission (`/dictionary/lexicons/apply/`).
- commercial_ok: no
- video_redistrib_ok: yes, non-commercially (BY-NC-SA)
- Approx disk: ECV about 1.2 MB in total. Video: about 3,965 public glosses × about 2–3 MB is roughly 8–12 GB (inference from one HEAD).
- Phonological/notation fields: none on the public gloss pages, which show only translations, notes and relations (checked on gloss 3833). The compendium lists "Citation form, gloss, information about source, Finnish translations, relations between glosses" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/finnishsignbank.html)
- Citation: "The University of Jyväskylä, Sign Language Centre (2018). Finnish Signbank. Available in the Language Bank of Finland (Kielipankki) https://signbank.csc.fi". For the Kipo lexicon: "The Finnish Association of the Deaf (2017). The lexicon of Kipo [online database]..." — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/finnishsignbank.html)
- Next action:
  - Ingest the three ECVs now; they are small and official.
  - Fetch citation mp4s per gloss ID to fit hand poses (non-commercial).
  - Email the Sign Language Centre (JYU) asking whether the gloss data (not just videos) is CC BY-NC-SA, and whether a CSV with phonology fields can be exported.

##### Suvi — Suomen viittomakielten verkkosanakirja (Finnish Association of the Deaf) — FinSL (fse) and FinSSL (fss)
- URL:
  - FinSL: https://suvi.viittomat.net/
  - FinSSL: http://suvi.teckensprak.net/
  - Both are behind a cookie/JS gate: set the cookies `scr` and `suvimode`.
- Type: lexical-db + phonology (sign-structure search) + isolated-video (citation and example sentences; Vimeo-hosted since 2020)
- Size: "Kaiken kaikkiaan Suvissa on noin 5100 viittoma- tai hakusana-artikkelia ja niissä noin 9700 viittoma- tai esimerkkilausevideota (tilanne 31.12.2025)" — [suvi.viittomat.net](https://suvi.viittomat.net/). The FinSSL part was launched in 2015 — [suvi.teckensprak.net](http://suvi.teckensprak.net/)
- License (verbatim): "AINEISTOJEN KÄYTTÖOIKEUDET Suvissa julkaistuja videoita ja stillkuvia saa käyttää Creative Commons -lisenssin BY-NC-SA mukaisesti (Nimeä-EiKaupallinen-JaaSamoin 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fi )." — [suvi.viittomat.net](https://suvi.viittomat.net/)
- SPDX: CC-BY-NC-SA-4.0 (videos and stills). The license on the text and structural coding is not stated.
- Tier: B
- Access route:
  - HTML only, with videos on Vimeo. No dump or API was found.
  - An archive snapshot of the 1998 Basic Dictionary articles (as of 2018-05-25) exists at https://aineisto.viittomakielinenkirjasto.fi/arkisto-suvi, linked from [Suvi](https://suvi.viittomat.net/); its license was not checked.
  - The 1998 print basic dictionary is a PDF at Kotus: https://kaino.kotus.fi/www/verkkojulkaisut/julk60/Suomalaisen_viittomakielen_perussanakirja_1998.pdf (license not checked).
- commercial_ok: no
- video_redistrib_ok: yes, non-commercially
- Approx disk: about 9,700 videos (size unknown)
- Phonological/notation fields: "Citation form, handshape, number of hands, position, movement, variants, plural, example sentences" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/suvi.html). The site offers a "Viittomakielinen haku: Etsi viittomia niiden rakennepiirteiden perusteella" (search by structural features) — [Suvi](https://suvi.viittomat.net/)
- Citation: none given. Use "Suvi – Suomen viittomakielten verkkosanakirja. Kuurojen Liitto ry. https://suvi.viittomat.net/".
- Next action: email Kuurojen Liitto to ask for a structured export of the sign-structure codes (handshape, hands, location, movement) per article. That export is the FinSL phonology source Signbank does not expose publicly.

##### Corpus of Finnish Sign Language (CFINSL) and Corpus of Finland-Swedish Sign Language (CFSTS), Kielipankki — FinSL (fse) and FinSSL (fss)
- URL:
  - https://www.kielipankki.fi/corpora/cfinsl/ (group PID urn:nbn:fi:lb-2024060525)
  - CFSTS: urn:nbn:fi:lb-2024090327
  - Download tree: https://www.kielipankki.fi/download/cfinsl/
- Type: continuous-video (6 camera angles) plus ELAN annotations (glosses + translations)
- Size:
  - CFINSL: "91 hours recorded (estimate), 107000 tokens annotated"; "Open access to 15.25 hours of video with annotation and translation" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/cfinsl.html)
  - Elicited narratives: 21 signers, 15.25 h × 6 angles — [README](https://www.kielipankki.fi/download/cfinsl/cfinsl/elicit/README.txt)
  - Parts: elicit (lb-2019092710), elicit-p2 (lb-2024060521), elicit-p3 (lb-2025013021), conv (lb-201910041), conv-p2 (lb-2024060522), conv-p3 (lb-2025013023)
  - CFSTS: elicit (lb-2024090322), conv (lb-2024090321), conv-p2 (lb-2025013027) — [download listing](https://www.kielipankki.fi/download/cfinsl/cfinsl/), [cfsts listing](https://www.kielipankki.fi/download/cfinsl/cfsts/)
- License (verbatim): elicited subcorpora are public. LICENSE.txt reads: "Public end-user license (CC-BY-NC-SA) and the additional conditions +PRIV +OTHER (CLARIN EULA 2.1) ... Rightholder: University of Jyväskylä. Public License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC-BY-NC-SA) ... PRIV: The Resource contains personal data. The End-User must comply with the data protection terms and conditions of this Resource..." — [CFINSL elicit LICENSE.txt](https://www.kielipankki.fi/download/cfinsl/cfinsl/elicit/LICENSE.txt). The wording is identical for CFSTS elicit — [CFSTS elicit LICENSE.txt](https://www.kielipankki.fi/download/cfinsl/cfsts/elicit/LICENSE.txt)
  - Conversations: "available under a restricted license upon individual application". The ND condition was removed in December 2024 — [Kielipankki news](https://www.kielipankki.fi/news/new-resource-cfinsl-p2-and-license-updates)
- SPDX: CC-BY-NC-SA-4.0 plus a LicenseRef for the CLARIN +PRIV terms (elicit); LicenseRef-CLARIN-RES (conversations)
- Tier: B for elicit (with GDPR obligations); C for conversations (individual application)
- Access route: direct dump URL for elicit (open Apache listing); application for conversations. Also available on CSC Puhti under /appl/data/kielipankki/ — [listing](https://www.kielipankki.fi/download/cfinsl/)
- commercial_ok: no
- video_redistrib_ok: non-commercially, but +PRIV means the data is personal (signers' faces), so redistribution is risky. Use it only for internal pose fitting.
- Approx disk: not stated. Each elicit folder holds multi-angle video, so tens of GB at minimum (inference).
- Phonological/notation fields: none (ID-gloss annotation linked to Signbank glosses)
- Citation: per README/PID, e.g. "Corpus of Finnish Sign Language: elicited narratives, Download version. http://urn.fi/urn:nbn:fi:lb-2019092710"
- Next action: skip for citation forms; use it only to find corpus tokens of Signbank glosses if needed.

##### SignWiki Suomi and SignWiki Finland (FinSSL) — FinSL (fse) and FinSSL (fss)
- See the SignWiki family record under Icelandic below; the license and platform are the same.
- Sites: https://finsl.signwiki.org (MediaWiki 1.43.8; 7,855 articles, 10,584 files) and https://finssl.signwiki.org (4,221 articles, 6,153 files), per the MediaWiki API `siteinfo` statistics on 2026-10-14.
- Infobox fields: `handshape`, `location`, `thematiccategory`, `relation*`, `youtube1..n`. Videos are YouTube IDs.
- Maintained by Kuurojen Liitto — [SignWiki:About](https://finsl.signwiki.org/index.php/SignWiki:About)

**Recommended first ingest (fse):** FinSL Signbank public ECV datasets 1 and 2 (3,232 glosses) plus the per-gloss citation mp4s on a3s.fi, under CC BY-NC-SA 4.0 (Tier B). Add Suvi structural codes once Kuurojen Liitto grants an export.

**Recommended first ingest (fss):** FinSL Signbank public ECV dataset 4 "FinSSL-VKK" (733 glosses, swe+eng) plus its mp4s, under CC BY-NC-SA 4.0 (Tier B). Suvi FinSSL (suvi.teckensprak.net) is the second source.

**Dead ends (fse/fss):**
- `suvi.kuurojenliitto.fi` does not resolve in DNS; the live host is suvi.viittomat.net.
- `www.viittomat.net` returns a server misconfiguration message.
- signbank.csc.fi `/dictionary/public-ecv/3` and `/5` return 404 (no public datasets with those IDs).
- The Signbank wiki documents no data export or license — [wiki](https://github.com/Signbank/FinSL-signbank/wiki)
- The CLARIN COMEDI metadata pages (clarino.uib.no/comedi/editor/lb-...) need JavaScript and could not be read. The LICENSE.txt files above were used instead.

---

#### Danish Sign Language — DTS (dsl)

##### Ordbog over Dansk Tegnsprog (tegnsprog.dk) — DTS (dsl)
- URL: https://tegnsprog.dk/
- Type: lexical-db + phonology (handshape + location codes per sign) + isolated-video (citation forms, variants, example sentences)
- Size: "Ordbogen indeholder i den nuværende 8. udgave 2.324 ordbogsartikler. Artiklerne rummer: 3.291 betydninger ... 7.241 videoklip, fordelt på: 2.323 tegn 606 tegnvarianter 210 flertegnsforbindelser 4.102 sætningseksempler" — [om-ordbogen](https://tegnsprog.dk/om-ordbogen). The sitemap lists 2,350 `/tegn/` URLs — [sitemap](https://tegnsprog.dk/sitemap.xml)
- License (verbatim): none. The only rights line is "© Ordbog over Dansk Tegnsprog" — [om-ordbogen](https://tegnsprog.dk/om-ordbogen). Responsibility moved over time: "Fra januar 2024 bliver ordbogen vedligeholdt og videreudviklet af Danske Døves Landsforbund"; the dictionary was earlier at Københavns Professionshøjskole (same page). The compendium gives "Licence: information not available" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dtsdictionary.html)
- SPDX: NOASSERTION (all rights reserved)
- Tier: C
- Access route:
  - HTML only.
  - The API path is disallowed: robots.txt has `Disallow: /api/` — [robots.txt](https://tegnsprog.dk/robots.txt)
  - Videos sit on Azure Blob, e.g. `https://ddlsearchapitest.blob.core.windows.net/.../videos/t/t_2540.mp4` (from [tegn/6](https://tegnsprog.dk/tegn/6)).
- commercial_ok: no (no grant)
- video_redistrib_ok: no (no grant)
- Approx disk: 7,241 clips (size unknown)
- Phonological/notation fields:
  - Each sign page shows "Hånd 1" and "Hånd 2" handshape codes and a "Sted" location code, as images named e.g. `2-haand`, `neutralt_rum` — [tegn/6](https://tegnsprog.dk/tegn/6)
  - The dictionary can be searched by "artikulationssted og håndform" — [om-ordbogen](https://tegnsprog.dk/om-ordbogen)
  - The compendium lists "citation form, translation to Danish, collocations, meaning, definitions, homophony, phonological variation" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dtsdictionary.html)
- Citation: Ordbog over Dansk Tegnsprog, 8. udg., Danske Døves Landsforbund, https://tegnsprog.dk/
- Next action: email Danske Døves Landsforbund (contact page: [kontakt](https://tegnsprog.dk/kontakt); Bleklinge Boulevard 2, 2630 Taastrup) to request a licensed export with gloss, handshape and location codes plus citation-video use. The 9th edition is planned for May 2026 per the about page, so ask about its terms too.

##### Danish Sign Language Corpus (DTS-korpus) — DTS (dsl)
- URL: no public page. It is described in the [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dtscorpus.html).
- Type: continuous-video plus iLex annotation
- Size: "14.5 hours recorded, 20000 tokens and 1750 types annotated", 31 signers — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dtscorpus.html)
- License (verbatim): "Individual license agreement for researchers"; "No public access" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dtscorpus.html). Not verifiable on an original page, since no public page exists.
- SPDX: LicenseRef-individual-research
- Tier: C
- Access route: email (project leads Mads Jonathan Pedersen / Thomas Troelsgård; now DDL)
- commercial_ok: no
- video_redistrib_ok: no
- Approx disk: unknown
- Phonological/notation fields: ID-glosses, mouthing (iLex)
- Citation: Kristoffersen & Troelsgård (2015) poster — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dtscorpus.html)
- Next action: skip

**Recommended first ingest (dsl):** apart from SignPuddle 30, which has only 53 FSW entries (Tier A; see SignPuddle table), nothing is Tier A or B. Tier C: request permission from DDL for tegnsprog.dk (2,324 articles, with handshape and location codes per sign).

**Dead ends (dsl):**
- No license, export or dump was found. `/om`, `/ophavsret` and `/api` return 404 or are disallowed.
- SpreadTheSign is listed in the compendium ([dsl](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/dsl.html)) but is Tier D.

---

#### Norwegian Sign Language — NTS (nsl)

##### Norsk tegnordbok (Statped) — NTS (nsl)
- URL:
  - https://www.tegnordbok.no, which redirects to https://www.minetegn.no/Tegnordbok-2016/
- Type: lexical-db (headwords + topic groups) + isolated-video
- Size:
  - 9,135 `<leksem>` entries in the public XML index `https://www.minetegn.no/tegnordbok/xml/tegnordbok.php` (1,103,894 bytes, text/xml; counted 2026-10-14)
  - The compendium lists about 6,500 signs — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/norsktegnordbok.html)
  - The MINI app holds 1,000 signs — [minetegn](https://www.minetegn.no/Tegnordbok-2016/)
- License (verbatim): none stated. The page says "Statped læringsressurser og teknologiutvikling har ansvar for Norsk tegnordbok på oppdrag fra Utdanningsdirektoratet." and gives the attribution line "Tegnene er hentet fra Norsk tegnordbok som du finner på www.tegnordbok.no." — [minetegn](https://www.minetegn.no/Tegnordbok-2016/). The background page has no copyright or license text — [bakgrunn](https://www.minetegn.no/Tegnordbok-2016/dokumentasjoner/doc/bakgrunn.htm)
- SPDX: NOASSERTION
- Tier: C (ask Statped)
- Access route: HTML; the public XML index fields are `visningsord`, `filnavn`, `kommetarviss` and `grupper` (topic). Contact: tegnordbok@statped.no — [minetegn](https://www.minetegn.no/Tegnordbok-2016/)
- commercial_ok: unknown, so treat as no
- video_redistrib_ok: unknown, so treat as no
- Approx disk: index 1.1 MB; video unknown
- Phonological/notation fields: none in the index. The compendium lists "Citation form, pictures, drawings and photos" — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/norsktegnordbok.html)
- Citation: "Norsk tegnordbok, Statped, www.tegnordbok.no"
- Next action: email tegnordbok@statped.no to request a license for the index plus citation videos. Statped is a public agency (on commission from Utdanningsdirektoratet), so ask whether NLOD or CC BY can apply.

##### Global Signbank — NTS dataset (NTNU) — NTS (nsl)
- URL: https://signbank.cls.ru.nl/datasets/NTS
- Type: lexical-db (Global Signbank schema, which includes phonology fields)
- Size: 1,946 glosses, 0 public — [dataset page](https://signbank.cls.ru.nl/datasets/NTS)
- License (verbatim): no license shown; "(c) 2020, NTNU"; "Conditions for data citation and usage" field blank; owner Lindsay Ferrara; restricted ("Accessible by others: False") — [dataset page](https://signbank.cls.ru.nl/datasets/NTS)
- SPDX: NOASSERTION
- Tier: C
- Access route: email the owner (NTNU) for dataset access or export
- commercial_ok: no
- video_redistrib_ok: no
- Approx disk: unknown
- Phonological/notation fields: probably the Global Signbank handshape/location/movement fields, but this is UNVERIFIED because the dataset is not public.
- Citation: n/a
- Next action: email Lindsay Ferrara (NTNU) to ask whether a CC-licensed public subset is planned, following the NGT model. This is the only NTS source likely to have structured phonology.

##### TegnWiki Norge / no.signwiki.org — NTS (nsl)
- URL:
  - https://no.signwiki.org (old version)
  - https://www.tegnwiki.no, which redirects to minetegn.no/tegnordbok/tegnwiki/ and returns HTTP 404
- Type: lexical-db (crowdsourced; YouTube videos)
- Size: 1,435 articles, 28 files (MediaWiki API siteinfo); the compendium lists 1,237 signs — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/tegnwikinorge.html)
- License (verbatim): none found. The page "SignWiki Terms of Service" is missing on no.signwiki.org (API `missing`), and `rightsinfo` is empty.
- SPDX: NOASSERTION
- Tier: D
- Access route: MediaWiki API
- commercial_ok: no
- video_redistrib_ok: no (YouTube)
- Approx disk: small
- Phonological/notation fields: a sampled page ("Preteritum") had only `thematiccategory` and `youtube1`
- Next action: skip

**Recommended first ingest (nsl):** SignPuddle "Ordbok NO" sgn69 is Tier A notation: 6,494 FSW entries, 1.7 MB, updated 2025-08-15. Most entries come from SignWriting contributors (`<src>` msutton 2,462; Andrew Sutton 1,506), so treat them as non-native-validated (see SignPuddle table). Beyond that, nothing is Tier A or B. Ask Statped for the Norsk tegnordbok index and videos (9,135 entries), and ask NTNU for the Global Signbank NTS dataset (1,946 glosses, likely with phonology).

**Dead ends (nsl):**
- tegnwiki.no returns 404.
- The compendium lists no NTS corpus ([nsl](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/nsl.html)).
- Språkbanken (nb.no) WP-JSON records did not return JSON to curl.
- Web search ran out before I could look for an NTNU NTS corpus.

---

#### Icelandic Sign Language — ÍTM (icl); Faroese SL (no ISO 639-3); SignWiki family

##### SignWiki Ísland (SHH, Samskiptamiðstöð heyrnarlausra og heyrnarskertra) — ÍTM (icl)
- URL: https://is.signwiki.org (also signwiki.is)
- Type: lexical-db + phonology-lite (handshape + location fields) + isolated-video (YouTube-embedded) + photos
- Size: 12,317 articles, 16,982 files, MediaWiki 1.43.8 (API siteinfo, 2026-10-14). The compendium lists 11,463 signs — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/islandsignwiki.html)
- License (verbatim):
  - The SignWiki:Um page, under "Höfundaréttur", says: "Efni á SignWiki má nota til kennslu og einkanota. SignWiki notar myndir sem aðrir hafa gert aðgengilegt undir "Creative Commons" leyfi. Efni sem hlaðið er inn á SignWiki er öllum leyfilegt að nýta, en vitna skal í uppruna þess." — [SignWiki:Um](https://is.signwiki.org/index.php/SignWiki:Um)
  - The Terms of Service say: "Sign Language videos posted on SignWiki are posted and licensed under a Creative Commons License and you can only embed videos for which you have full copyright over. The license allows Sign Language videos to be used freely for non-commercial purposes." They also say: "once you submit the content, you authorize SignWiki to use and distribute it freely under a Creative Commons License." — [SignWiki Terms of Service](https://is.signwiki.org/index.php/SignWiki_Terms_of_Service)
  - The MediaWiki `rightsinfo` field is empty, so no specific CC license or version is named.
- SPDX: LicenseRef-SignWiki-CC-NC-unspecified
- Tier:
  - Metadata (wikitext infobox fields): B (non-commercial, version unspecified, "kennslu og einkanota").
  - Videos: D per the gate (YouTube-hosted), even though the Terms of Service claim a CC NC license.
- Access route: MediaWiki API (`api.php`) and Special:Export ("Kerfissíða:Flytja_út") give wikitext of infoboxes. Videos are YouTube IDs (`youtube1=...`).
- commercial_ok: no
- video_redistrib_ok: no (YouTube; ask SHH for the original files)
- Approx disk: wikitext export is likely tens of MB (inference)
- Phonological/notation fields: `Infoboxsign` fields `handform` (e.g. "H handform", "A handform lokað"), `myndunarstadur` (location, e.g. "Hlutlaust rými"), `ordflokkur` (POS), `efnisflokkur` (topic), `tengsl1..n` (relations), `Image1` (still photo), `youtube1` — sampled via API (pages "Dómsúrskurður", "Starfsorka")
- Citation: "SignWiki Ísland, Samskiptamiðstöð heyrnarlausra og heyrnarskertra (SHH), https://is.signwiki.org"
- Next action:
  - Email SHH (arny.gudmundsdottir@shh.is, listed on [SignWiki:Um](https://is.signwiki.org/index.php/SignWiki:Um)) to ask which CC license and version applies, and for the original citation-video files.
  - Meanwhile, a one-off Special:Export of the handform/location infoboxes is acceptable for non-commercial research. It is a documented export route, not scraping.

##### SignWiki Føroyar — Faroese Sign Language (no ISO 639-3 code; compendium local name "Føroyska teknmál")
- URL: https://fo.signwiki.org
- Type: lexical-db + phonology-lite + YouTube video
- Size: 3,738 articles, 4,767 files (API siteinfo). The compendium lists 1,350 signs — [compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/foroyarsignwiki.html)
- License (verbatim): the same SHH Terms of Service text as above ("...licensed under a Creative Commons License ... used freely for non-commercial purposes") — [fo ToS](https://fo.signwiki.org/index.php/SignWiki_Terms_of_Service)
- SPDX: LicenseRef-SignWiki-CC-NC-unspecified
- Tier: metadata B; videos D (YouTube)
- Access route: MediaWiki API / Special:Export
- commercial_ok: no
- video_redistrib_ok: no
- Approx disk: small
- Phonological/notation fields: `handshape` (e.g. "5 hondstøða"), `location` ("Kroppur"), `lexicalcategory`, `thematiccategory`, `relation*`, `youtube1` (sampled: "Tjúkkur", "Kandidat (útbúgving)")
- Citation: "SignWiki Føroyar, https://fo.signwiki.org"
- Next action: same as SignWiki Ísland (contact SHH; no institution is named on the compendium entry)

**Recommended first ingest (icl):** SignWiki Ísland infobox export through the MediaWiki API: about 12.3k articles with handform and location (Tier B, NC, version unspecified). Get citation videos from SHH; the YouTube copies cannot be used.

**Recommended first ingest (Faroese):** SignWiki Føroyar infobox export (Tier B metadata only). There is no other Faroese source.

**Dead ends (icl/Faroese):**
- No separate Icelandic Signbank or corpus is listed. The compendium's ÍTM page links only lexical resources ([icl](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/icl.html)).
- `www.signwiki.org` (https) did not respond; http://signwiki.org returns 200 but is only a portal.

---

#### Greenlandic Sign Language (no ISO 639-3 code)

- Nothing found:
  - The Sign Language Dataset Compendium language index has no Greenlandic entry. Its Nordic entries are DTS, Faroese, FinSSL, FinSL, ÍTM, NTS and STS, plus "Inuit Sign Language (IUR)", which is the Canadian Inuit SL corpus, not Greenland — [language index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html)
  - There is no SignWiki instance for Greenland among the ones linked from the SignWiki About pages: is, fo, finsl, finssl, no, na, tz, ge — [finsl SignWiki:About](https://finsl.signwiki.org/index.php/SignWiki:About)
- **Recommended first ingest:** none.
- Gap: the web search budget ran out before I could look for a Greenlandic dictionary (e.g. via the Greenlandic deaf association or Danish resources). Treat this as "nothing found", not "confirmed none".

---


### Inferences

**Where Tier A citation-form signing actually exists**
- Tier A redistributable citation-form signing (video or mocap) exists for only six languages:
  - NGT: Global Signbank + 3D-LEX
  - LSE: SWL-LSE, 300 clips
  - DGS: SignDict, ~752 clips
  - LSF: Lingua Libre, ~190 clips
  - LSC: corpus tokens only, no studio citation forms
  - BSL: corpus lexical elicitation, pending confirmation
- For the other 21 languages, Marionet's Tier A layer is SignPuddle FSW. That fits the "clips from SignDesc + hand tuning; video only a means to an end" approach in the project memory: FSW symbols encode handshape, contact, movement arrows and orientation, so they could seed SignDesc. Whether FSW-to-SignDesc conversion is accurate enough is untested.

**SignPuddle size versus usefulness**
- Puddle size ranking (entries): DGS 24,778 > LSF-CH 9,938 > VGT 8,969 > LSE 8,526 > NTS 6,494 > DSGS 4,745 > LSFB 3,465 > LSC 3,422 > LSM 2,833 > LSF 1,481 > LIS 1,222 > BSL 853 > LGP 496 > FinSL 165 > NGT 84 > STS 81 > ISL 66 > NISL 56 > DTS 53 > ÍTM 40 > ÖGS 5 > LIS-SI 3. FinSSL, LSCV, Luxembourgish, Faroese and Greenlandic have no puddle (counts from my GET of each SPML file).
- Several large puddles are dominated by a few contributors, some of them SignWriting teachers rather than native signers: "msutton" in the Spanish and Norwegian puddles, "SW" in German, "ACPG" in Swiss-French. That suggests quality and nativeness should be spot-checked before trusting these as citation forms. This is an inference from the `<src>` counts, not a verified quality judgement.

**Phonology coverage**
- NGT's Global Signbank is the only Tier A source with structured phonology (handedness, strong/weak handshape, handshape change).
- Every other structured phonology source sits at Tier B or C:
  - Tier B: STS transcription; DGS-Korpus HamNoSys (research-only); Suvi structural codes (videos CC BY-NC-SA; codes HTML-only, licence unstated)
  - Tier C: LSE-Sign; tegnsprog.dk; VGT Woordenboek; BSL SignBank; Dicta-Sign HamNoSys; Boyes Braem DSGS HamNoSys
- Those sources are the best targets for permission requests.

**Licensing pattern**
- Several resources state different terms in different places:
  - dico.lsfb.be: BY-SA footer vs BY-NC-ND licence page
  - DILSE: BY-NC-SA footer vs aviso legal
  - BSL Corpus OA: BY-SA vs "no duplication or sale"
  - EASIER: BY on the landing page vs BY-NC-SA in the README
  - SSLC: BY-NC-SA on the site vs BY-NC in SND
  - Corpus VGT: BY-NC-SA vs BY-NC in the IVDNT selection
  - Corpus NGT: 4.0 on the site vs 3.0 NL at TLA
- Practical rule: ingest under the strictest stated licence until the owner confirms in writing.
- Not a legal conclusion: whether a SignDesc parameter set derived by watching an NC or ND video counts as a "derivative" is a legal question for counsel; these notes do not decide it.

**Permission-request batch.** One email each, highest expected yield first:
1. LSFB asbl: resolve the licence conflict and ask for an export.
2. SGB-FSS: one request covering DSGS, LSF-CH and LIS-SI.
3. info@dgs-korpus.de: HamNoSys type list, DW-DGS and Dicta-Sign DGS.
4. UCL CAVA Registrar + bslsignbank@ucl.ac.uk.
5. VGTC.
6. Stockholm University (teckenlexikon@ling.su.se): official export and "permissions beyond this licence".
7. Kuurojen Liitto: Suvi codes.
8. Danske Døves Landsforbund: tegnsprog.dk.
9. Statped + NTNU (Lindsay Ferrara).
10. SHH: SignWiki IS/FO.
11. ZGH Klagenfurt: LedaSila.
12. Fundación CNSE + BCBL: DILSE / LSE-Sign.
13. LISN/MocapLab: Rosetta 1,200-sign mocap.
14. UZH: Boyes Braem lexicon.
15. Signes de Sens: Elix.
16. TCD CDS, Univ. of Malta and UCP: lower yield.

### Gaps
- **Search budget.** The shared WebSearch budget (200 per session) ran out partway through research. These leads were never searched and are NOT ruled out:
  - BSL: Signature, BSL Zone, SignStation, Welsh BSL resources; Ulster University / RNID NI (NISL)
  - LSF: IVT and Monica Companys LSF dictionaries; Sign3D, LSF-ANSHE, LS-COLIN, Sign'Maths, LSF-SHELVES
  - NGT: Van Dale NGT; SignON NGT data
  - DGS / ÖGS / DSGS: Kestner, ViSiCAST/eSIGN DGS HamNoSys lexicons, DGS GebärdenWiki, Deaf-ADAPT, SL-Fluent; "SignLex" (ÖGS); Paula avatar and "DSGS Corpus"
  - LSE / LGP / LIS: CORILSE, Signario LSE, Kaggle LSE sets; PE2LGP, VirtualSign dataset, Porto Editora terms; ENS/ISSR LIS dictionary, Smart LIS, ISTC-CNR LIS
  - Others: Valencian FESORD materials; NTNU NTS corpus; Statped's reuse policy; Greenlandic resources; Icelandic sources beyond SignWiki
- **Licences seen only on secondary or partial pages (UNVERIFIED on the original):**
  - ECHO: CC BY-NC-ND 3.0 per the Compendium only; the TLA CMDI shows no licence, and a LINDAT record says "Readily Available: No".
  - Ocelles: CC BY-SA 2.0 FR per the Compendium; site unreachable (HTTP 000) and Wayback returned no snapshot on 2026-10-14.
  - 3D-LEX: licence quoted from the paper; the OSF page itself was not opened.
  - Not found at all: BSL norms (Vinson 2008; DCAL archive 403); Ortega et al. 2025 BSL/DGS iconicity database; SMILE isolated (Zenodo `license: None`); Sign4all; A3LIS-147; LGP Reference Corpus data; MLRS LSM dictionary (offline); BOBSL BBC terms text (not fetched).
- **SignPuddle licence chain.** The CC BY-SA 3.0 statement is Valerie Sutton's site-wide declaration ([SW-L 2013](https://listserv.linguistlist.org/pipermail/sw-l/2013-October/027651.html)). Neither the SPML files nor the signbank.org homepage carry licence text. Whether every contributor's entries fall under it was not confirmed, and the "Malta LSM Private Puddle" (sgn103) is publicly downloadable despite its name.
- **Unmeasured disk sizes.** Total disk for most video sources is unknown: BSL SignBank, the BSL Corpus OA clips, SignDict, the STS lexicon, FinSL Signbank and tegnsprog.dk.
- **Not confirmed:**
  - whether e-LIS includes its Stokoe-style ASCII parameter strings
  - whether the SignPuddle DGS entries sourced "rwth" (2,427) come from RWTH Aachen
  - whether the CH-de gloss suffixes ("anders-5240-V2") map to Boyes Braem or SGB-FSS IDs

## 2. What licence governs the data versus the videos, is there a bulk export / API / dump, and which phonological coding fields exist?

### Takeaway
- **Licence splits.** Data and video licences often differ:
  - NGT Signbank: lexical items CC BY 4.0, embedded corpus example sentences BY-NC-SA.
  - FinSL Signbank and Suvi: only the videos carry an explicit CC BY-NC-SA grant.
  - EASIER wordnet: covers only the links; videos stay with their sources.
  - BSLDict: CC BY metadata over third-party videos.
- **Bulk exports.** True dumps without registration exist only for: SignPuddle SPML; FinSL Signbank ECV XML; Zenodo/FDR/IEC deposits (SWL-LSE, CORPUS LSC gloss sheet, EASIER, Smith ISL NMF); SignDict's GraphQL API; Lingua Libre via the Commons API; and the MediaWiki API on SignWiki.
- **Phonology.** Phonological coding is mostly HTML-only or behind registration.

### Cited Findings

| Source (lang) | Data / lexical licence | Video licence | Bulk route | Phonological / notation fields |
|---|---|---|---|---|
| Global Signbank NGT (dse) | "A Creative Commons BY 4.0 International license applies to all accessible lexical items" — [dataset](https://signbank.cls.ru.nl/datasets/NGT) | Same BY 4.0, except "Example sentences from the Corpus NGT ... have a stricter license: CC BY-NC-SA-4.0" ([dataset](https://signbank.cls.ru.nl/datasets/NGT)); the site-wide Conditions say "not copy or spread any data ... unless given permission" ([conditions](https://signbank.cls.ru.nl/about/conditions/)) | Register → CSV export | Handedness, Handshape strong/weak, Handshape change, etc. ([manual](https://signbank.cls.ru.nl/about/manual/)) |
| FinSL Signbank (fse/fss) | "Leksikkoon lisätty data lisensoidaan kunkin leksikon lisenssin mukaisesti" (data licensed per lexicon; per-lexicon licence not stated) — [ToS](https://signbank.csc.fi/about/terms-of-service/) | "videot ovat käytettävissä Creative Commons BY-NC-SA-lisenssin mukaisesti" — [home](https://signbank.csc.fi/) | Public ECV XML `/dictionary/public-ecv/{1,2,4}`; mp4 on a3s.fi | None public |
| Suvi (fse/fss) | Not stated for text or codes | "videoita ja stillkuvia saa käyttää Creative Commons -lisenssin BY-NC-SA mukaisesti" — [Suvi](https://suvi.viittomat.net/) | HTML only; videos on Vimeo | Handshape, number of hands, position, movement ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/suvi.html)) |
| Svenskt teckenspråkslexikon (swl) | CC BY-NC-SA 4.0 (whole resource) — [om-lexikonet](https://teckensprakslexikon.su.se/information/om-lexikonet) | Same | HTML only (official); unofficial CSV mirror ([GitHub](https://github.com/zrajm/teckentranskription)) | SU transcription (PUA code points) + prose form description |
| SignDict (gsg) | Site: "Every video will be licensed under a Creative Commons license" — [about](https://signdict.org/about?locale=en) | Per video: by-sa/3.0/de, by/4.0, by-nc-sa/3.0/de, by-nc-sa/4.0 (API `license` field) | GraphQL API `POST https://signdict.org/graphql-api`; no hotlinking ([API wiki](https://raw.githubusercontent.com/wiki/signdict/website/API.md)) | None |
| Public DGS Corpus R4 (gsg) | "made available on this site for linguistic research. You may download and use the material for this sole purpose" — [licence](https://www.sign-lang.uni-hamburg.de/meinedgs_r4/ling/license_en.html) | Same | Per-transcript downloads; type list as HTML pages (per-type DOI) | HamNoSys per type/subtype (14,223 of 14,426 index rows) |
| BSL SignBank (bfi) | "No copying or linking ... without the prior written permission of UCL" — [ack](https://bslsignbank.ucl.ac.uk/about/acknowledgements/) | Same | HTML only | Handshape (~40) + location (~24) search; full phonology for registered users |
| BSL Corpus OA (bfi) | "licensed under a Creative Commons Attribution-ShareAlike 4.0 International License" — [OA page](https://bslcorpusproject.org/cava/open-access-data/) | Same, but the click-through says "duplication or sale of all or part of any of the data collection is not permitted" (same page) | Per-clip CAVA download; no bulk dump | ID-glosses linking to SignBank |
| dico.lsfb.be (sfb) | Licence page: CC BY-NC-ND 4.0 — [licence](https://dico.lsfb.be/licence-creative-commons/) | Footer: "les vidéos sont disponibles sous licence Creative Commons attribution, partage dans les mêmes conditions" (BY-SA 4.0) — [home](https://dico.lsfb.be/) | HTML only | Handshape and location browse indexes; SignWriting |
| VGT Woordenboek (vgt) | None found — [site](https://woordenboek.vlaamsegebarentaal.be/) | None found | Undocumented JSON API (not used) | startHandshape / endHandshape / location (app code) |
| tegnsprog.dk (dsl) | "© Ordbog over Dansk Tegnsprog" only — [om](https://tegnsprog.dk/om-ordbogen) | Same | HTML; `/api/` disallowed in [robots.txt](https://tegnsprog.dk/robots.txt) | Hånd 1, Hånd 2, Sted codes |
| LSE-Sign (ssp) | No licence text; "disponible a todos los investigadores interesados" — [usage](http://lse-sign.bcbl.eu/web-busqueda/?page_id=8) | Content from CNSE dictionary by permission | Register → CSV export (pipe-separated) | Localización, Configuración, Movimiento, Elementos no manuales |
| DILSE (ssp) | Footer CC BY-NC-SA 3.0 vs aviso legal "uso personal, privado y no lucrativo" — [aviso legal](https://fundacioncnse-dilse.org/aviso-legal.php) | Same conflict | HTML only | — |
| CORPUS LSC (csc) | "Tot el material de descàrrega del corpus està subjecte a la llicència CC BY 4.0" — [descàrrega](https://corpuslsc.iec.cat/area-de-descarrega/) | Same | Google Sheet CSV + Drive EAF/MP4 | Handshape-like gloss suffixes only |
| e-LIS (ise) | CC BY-NC-SA 4.0 — [CLARIN item](https://clarin.eurac.edu/repository/xmlui/handle/20.500.12124/75) | Same as deposited, but "The video material comes from the DIZLIS dictionary" ([Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/elis.html)), and DIZLIS is all rights reserved | Direct zip (436 MB) | Handshape-class folders; ASCII parameters UNVERIFIED |
| SignWiki IS / FO (icl, Faroese) | "Efni á SignWiki má nota til kennslu og einkanota" (may be used for teaching and private use) — [Um](https://is.signwiki.org/index.php/SignWiki:Um) | "licensed under a Creative Commons License ... used freely for non-commercial purposes" — [ToS](https://is.signwiki.org/index.php/SignWiki_Terms_of_Service); hosted on YouTube | MediaWiki API / Special:Export | handform, myndunarstadur (location), ordflokkur |
| SignPuddle (all) | CC BY-SA 3.0 (site-wide statement) — [SW-L](https://listserv.linguistlist.org/pipermail/sw-l/2013-October/027651.html) | n/a | Direct SPML per puddle | FSW SignWriting strings (symbol-level handshape, movement, contact) |
| EASIER wordnet (8 SLs) | Landing page CC BY 4.0 vs README "Those links are distributed under a Creative Commons BY-NC-SA 4.0 licence" — [FDR](https://www.fdr.uni-hamburg.de/record/14190) | "hosted by the respective lexical resources and are embedded with the kind permission of the resource creators" (README) | Direct (6.9 MB) | None (synset links, IDs, glosses, video URLs) |
| BSLDict (bfi) | Annotations CC BY 4.0 — [BSLDict](https://www.robots.ox.ac.uk/~vgg/research/bsldict/) | "The copyright remains with the original owners of the videos" (same page) | GitHub scripts re-downloading from upstream | None |

### Inferences
- Signbank-family sites (Global Signbank, FinSL Signbank, BSL SignBank) share a software lineage: FinSL-signbank's copyright page credits Macquarie, Radboud and Jyväskylä. Global Signbank exposes CSV export to registered users, and FinSL exposes public ECV. Asking BSL SignBank and VGT for "the standard Signbank CSV export" is therefore a concrete, low-effort request.
- Where video and data licences diverge, Marionet can take the gloss and phonology layer as data and treat video as fitting-only input. This is consistent with the project's "video only as a means to an end" principle.

### Gaps
- The exact column list of the Global Signbank NGT CSV export was not re-tested in this pass; the route comes from the assignment brief.
- Per-lexicon data licences for FinSL Signbank are not published.
- The Suvi text/code licence is not stated.
- Whether the SignWiki "Creative Commons" grant is BY-NC, BY-NC-SA, or something else, and which version, is not stated anywhere.

## 3. Which isolated-sign ML datasets and mocap resources exist for these languages, and under what terms?

### Takeaway
Openly licensed isolated-sign datasets are rare:
- **Tier A:**
  - SWL-LSE (LSE): 300 reference videos + 8,000 skeleton sequences
  - 3D-LEX (NGT): 1,000 mocap signs
  - LSE-FS-UVigo: fingerspelling keypoints
  - Lingua Libre LSF and SignDict DGS: dictionary-style clips
- **Tier B:** LSFB-ISOL, the Ortolang LSF mocap corpora and e-LIS. All are non-commercial.
- **Tier C:** SIGNUM and SMILE (purchase or request) and BSL-1K/BOBSL (BBC contract).
- **Tier D (third-party footage or no data licence):** BSLDict, SignIT and ISL-HS.

### Cited Findings

| Dataset | Lang | Type / size | Licence (verbatim or field) | Tier |
|---|---|---|---|---|
| 3D-LEX v1.0 | dse | Mocap, 1,000 NGT signs (gloves + Vicon + ARKit face) | "The data is available under a CC BY 4.0 license" — [arXiv](https://arxiv.org/html/2409.01901v1) | A |
| SWL-LSE | ssp | 300 citation reference RGB videos (VIDEOS_REF.zip 24.1 MB) + 8,000 MediaPipe sequences (3.5 GB) | Zenodo `cc-by-4.0` — [Zenodo API](https://zenodo.org/api/records/13691887) | A |
| LSE-FS-UVigo | ssp | Fingerspelling MediaPipe keypoints, 3,010 sequences | Zenodo `cc-by-4.0` — [Zenodo API](https://zenodo.org/api/records/15797079) | A |
| Lingua Libre LSF | fsl | ~190 isolated webm (≈175 MB est.) | Per file; sample 49 CC0 + 1 CC BY-SA 4.0 — [Commons category](https://commons.wikimedia.org/wiki/Category:Lingua_Libre_pronunciation-fsl) | A |
| SignDict | gsg | ~752 Tier-A clips (of 5,291 entries) | Per-video `license` field — [SignDict](https://signdict.org/about?locale=en) | A (subset) |
| LSFB-ISOL | sfb | Isolated tokens cut from corpus; poses 10 GB, videos 25 GB | "available under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license" — [PyPI](https://pypi.org/project/lsfb-dataset/) | B |
| Ortolang MOCAP1 | fsl | BVH + CSV mocap, 2.7 GB | CC BY-NC-SA 4.0 + "can only be downloaded by members of public university and research structures" — [Ortolang API](https://repository.ortolang.fr/api/search/items/mocap1?type=corpora) | B |
| Ortolang CLM-MOCAP | fsl | IMU mocap, 2,977 signs in discourse, 9.9 GB | CC BY-NC-SA 4.0 + research/teaching only — [Ortolang API](https://repository.ortolang.fr/api/search/items/clm-mocap?type=corpora) | B |
| Rosetta-LSF isolated signs | fsl | 1,200 isolated signs in mocap, not in the Ortolang release | Ortolang release CC BY-NC-4.0; isolated signs need a MocapLab contact — [Ortolang API](https://repository.ortolang.fr/api/search/items/rosetta-lsf?type=corpora) | C |
| e-LIS v1.0 | ise | ~300 citation signs, 2,677 mp4, 436 MB | CC BY-NC-SA 4.0 — [CLARIN](https://clarin.eurac.edu/repository/xmlui/handle/20.500.12124/75) | B |
| SIGNUM | gsg | 450 isolated signs + 780 sentences, 920 GB | "Free usage for scientific and commercial purposes"; EUR 1,000 — [BAS](https://www.bas.uni-muenchen.de/Bas/BasSIGNUMeng.html) | C |
| SMILE (isolated) | sgg | 100 signs, Kinect + OpenPose + iLex | Zenodo restricted, `license: None` — [Zenodo API](https://zenodo.org/api/records/7701457) | C |
| Dicta-Sign lexicon | bfi, gsg, fsl | ~1,000 concepts per language, HamNoSys | "Individual license agreement for researchers" — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/lex/dictasignlex.html) | C |
| BSL-1K / BOBSL | bfi | Spotted signs in 1,400+ h of broadcast | BBC Terms of Use; "Use is not permitted by independent researchers" — [BOBSL](https://www.robots.ox.ac.uk/~vgg/data/bobsl/) | C |
| BSLDict | bfi | 14K clips / 9K vocabulary from signbsl.com | Annotations CC BY 4.0; "copyright remains with the original owners of the videos" — [BSLDict](https://www.robots.ox.ac.uk/~vgg/research/bsldict/) | D |
| SignIT | ise | 94 classes from 644 "publicly available videos" | CC BY-NC 4.0 — [SignIT](https://fpv-iplab.github.io/SignIT/) | D (third-party footage) |
| ISL-HS | isg | 26 fingerspelling handshapes, 468 videos | No data licence in repo — [GitHub](https://github.com/marlondcu/ISL) | D |
| A3LIS-147 | ise | 147 signs × 10 signers | Not found — [IRIS (403)](https://iris.univpm.it/handle/11566/74228) | D (unverified) |
| Sign4all | ssp | 24 signs, 18.5 GB | DataCite `rightsList` empty — [DataCite](https://api.datacite.org/dois/10.57760/SCIENCEDB.28304) | D (unverified) |
| Continuous, for reference only: RWTH-PHOENIX-2014T (gsg, CC BY-NC-SA 3.0, 39 GB); Content4All SWISSTXT/VRT (CC BY-NC-SA 4.0, password); WMT-SLT SRF (CC BY-NC-SA 4.0, restricted, 100.7 GB; [Zenodo](https://zenodo.org/record/6631275)); Mediapi-RGB (fsl, NC-SA, ESR-only, 125 GB); LSE-Health-UVigo (CC BY-NC 4.0, 5.08 GB) | — | — | (see records above) | B/C |

### Inferences
- **LSE:** SWL-LSE is the cleanest "citation video → SignDesc fit" benchmark outside NGT. It is small (24 MB), CC BY and lab-recorded, and its creators include CNSE.
- **Mocap:** 3D-LEX (NGT) is the only Tier A mocap. The LSF mocap corpora (MOCAP1, CLM-MOCAP) carry ESR-only and Ortolang-only redistribution clauses, which rule out shipping derivatives even under NC.

### Gaps
- No isolated-sign ML dataset was found for ÖGS, LSF-CH, LIS-SI, LSCV, LGP, Luxembourgish, NTS, DTS, ÍTM, Faroese or Greenlandic.
- The FinSL/FinSSL Signbank citation videos and the STS lexicon videos are dictionary assets, not ML datasets.

## 4. What do repository records (Ortolang, CLARIN, TLA, Kielipankki, SND/Språkbanken, Zenodo, FDR, SWISSUbase, IVDNT) say?

### Takeaway
Repository records are where licences are most precise. They also show that most deposited sign-language data in this region is non-commercial and continuous rather than lexical:
- Ortolang has 18 LSF corpora, all NC, and no LSF lexicon record.
- Kielipankki holds the CFINSL/CFSTS elicited parts: CC BY-NC-SA plus personal-data (PRIV) terms.
- TLA holds Corpus NGT and ECHO, but often shows no licence in its CMDI.
- The clean CC BY deposits are on Zenodo, Hamburg FDR and the IEC portal.

### Cited Findings
- **Ortolang (France):** a language query returned 18 LSF corpora, and "No Ortolang record is typed Lexicon for fsl" — [Ortolang API query](https://repository.ortolang.fr/api/search/items?type=Corpus&corporaLanguages.id%5B%5D=fsl&size=200).
  - MOCAP1, Dicta-Sign-LSF-v2, DEGELS1 and 40 brèves: CC BY-NC-SA 4.0 with ESR-only or Ortolang-only clauses.
  - MEDIAPI-SKEL and Rosetta-LSF: CC BY-NC 4.0 with ESR-only clauses.
  - CREAGEST, Signes en famille and Catteau: CC BY-NC-ND 3.0 (per-record API URLs are in the LSF section).
- **Eurac Research CLARIN (Italy):** e-LIS v1.0, `<dc:rights>Creative Commons - Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)</dc:rights>` — [OAI](https://clarin.eurac.edu/repository/oai/request?verb=GetRecord&metadataPrefix=oai_dc&identifier=oai:clarin.eurac.edu:20.500.12124/75).
- **The Language Archive (MPI, NL):**
  - ECHO collection CMDI shows no licence text — [CMD](https://archive.mpi.nl/objects/tla:1839_00_0000_0000_0001_4892_C/datastreams/CMD/content?asOfDateTime=2018-03-02T11:00:00.000Z). The Compendium says CC BY-NC-ND 3.0 — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/echo.html).
  - LIS Corpus: `<DistributionType>unspecified</DistributionType>` — [CMD](https://archive.mpi.nl/objects/tla:1839_00_57EA1164_AC96_4541_8B1D_252673D6152A/datastreams/CMD/content?asOfDateTime=2018-03-02T11:00:00.000Z).
  - Corpus NGT videos at TLA: CC BY-NC-SA 3.0 NL per the Compendium — [Compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/corpusngt.html).
- **Kielipankki (Finland):** "Public end-user license (CC-BY-NC-SA) and the additional conditions +PRIV +OTHER (CLARIN EULA 2.1)" — [CFINSL elicit LICENSE.txt](https://www.kielipankki.fi/download/cfinsl/cfinsl/elicit/LICENSE.txt). The CFSTS elicit LICENSE.txt is identical — [CFSTS](https://www.kielipankki.fi/download/cfinsl/cfsts/elicit/LICENSE.txt). Conversations are "available under a restricted license upon individual application" — [Kielipankki news](https://www.kielipankki.fi/news/new-resource-cfinsl-p2-and-license-updates).
- **SND / researchdata.se (Sweden):**
  - STS lexicon record ext0408-1 lists CC BY-NC-SA 4.0 — [SND](https://researchdata.se/sv/catalogue/dataset/ext0408-1).
  - SSLC v1 record ext0409-1 lists CC BY-NC 4.0, which conflicts with the site's BY-NC-SA — [SND](https://researchdata.se/en/catalogue/dataset/ext0409-1).
  - A dedicated Språkbanken (nb.no) check for Norwegian returned no usable JSON (noted in the NTS section).
- **Zenodo:**
  - SWL-LSE, `cc-by-4.0`, open — [API](https://zenodo.org/api/records/13691887)
  - LSE-Health-UVigo, `cc-by-nc-4.0` — [API](https://zenodo.org/api/records/10234465)
  - LSE-FS-UVigo, `cc-by-4.0` — [API](https://zenodo.org/api/records/15797079)
  - Smith ISL NMF, "Creative Commons Attribution 4.0 International" — [record](https://zenodo.org/records/10639554)
  - SMILE, restricted, `license: None` — [API](https://zenodo.org/api/records/7701457)
  - WMT-SLT SRF, "available for research purposes only under a" CC BY-NC-SA 4.0, files restricted — [record](https://zenodo.org/record/6631275)
- **Hamburg FDR:** EASIER Multilingual Sign Language Wordnet v4.0 (2024-05-01, 6.9 MB). Landing page: "Creative Commons Attribution 4.0 International" — [FDR 14190](https://www.fdr.uni-hamburg.de/record/14190). README: links under CC BY-NC-SA 4.0 — [README](https://www.fdr.uni-hamburg.de/record/14190/files/_README.md?download=1).
- **DataCite:** the Public DGS Corpus R4 DOI 10.25592/dgs.corpus-4.0 has an empty `rightsList` (noted in the DGS section).
- **SWISSUbase:** WMT-SLT Signsuisse release: "can be used for non-commercial research ... distributing the datasets or making them accessible to third parties is not permitted, either in their original or edited form" — [WMT-SLT](https://www.wmt-slt.com/data). The SMILE Continuous record page is JS-rendered; its licence comes from the paper abstract only.
- **IVDNT (Dutch Language Institute):**
  - Corpus VGT v1.0 selection: "Creative Commons Attribution-NonCommercial 3.0 Unported License", 146.62 MB — [IVDNT](https://taalmaterialen.ivdnt.org/download/corpusvgt1-0/)
  - GoSt-ParC-Sign: "Creative Commons Attribution-NonCommercial 4.0" — [IVDNT](https://taalmaterialen.ivdnt.org/download/gost-parc-sign/)
- **IEC (Catalonia):** CORPUS LSC download area, CC BY 4.0 — [IEC](https://corpuslsc.iec.cat/area-de-descarrega/).
- **Global Signbank (Radboud):**
  - Public datasets list: EmblemsNL (124/124 public), Kata Kolok (182/1,312), NGT (6,862/7,469) — [available datasets](https://signbank.cls.ru.nl/datasets/available)
  - Closed datasets: VGT (16,928), LSFB (3,512) and NTS (1,946), all 0 public — [VGT](https://signbank.cls.ru.nl/datasets/VGT/), [LSFB](https://signbank.cls.ru.nl/datasets/LSFB/), [NTS](https://signbank.cls.ru.nl/datasets/NTS)
- **Wikimedia Commons:** Lingua Libre LSF has 190 files, with per-file licence metadata available via the API — [Commons](https://commons.wikimedia.org/wiki/Category:Lingua_Libre_pronunciation-fsl).
- **Sign Language Dataset Compendium (Hamburg):**
  - Has language pages for bfi, isg, sfb, vgt, fsl, dse, gsg, asq, sgg, ssp, csc, psr, ise, swl, nsl, dsl, fse, fss, icl (and a Faroese SignWiki entry). There is no page for Maltese, Swiss-French, Swiss-Italian, Valencian, Luxembourgish, NISL or Greenlandic — [language index](https://www.sign-lang.uni-hamburg.de/lr/compendium/language/index.html).
  - Archival PDF: https://doi.org/10.25592/uhhfdm.12016.

### Inferences
- **Global Signbank closed datasets:** VGT, LSFB and NTS are already in the same schema as the CC BY NGT dataset. A request to Radboud plus each data owner (VGTC; UNamur/Crasborn VICI; NTNU) to open a public subset "on the NGT model" may be the shortest path to Tier A phonology for three more languages.
- **Ortolang:** its ESR-only and Ortolang-only clauses make it unsuitable for a non-academic or redistributing pipeline, regardless of the CC tag.

### Gaps
- The CLARIN VLO and COMEDI metadata pages need JavaScript and were not read. Kielipankki LICENSE.txt files were used instead.
- No CLARIN-DK, CLARINO (Norway) or Icelandic CLARIN record for a sign-language lexicon was found. The search budget ran out before these repositories could be searched directly.
- The DARE (UvA) and OSF records for 3D-LEX were not opened.

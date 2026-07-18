# EVSRC-2026-000280 — Multi-channel care→commerce case — peptide/GLP-1 patient (Mike) across patient ↔ provider + provider ↔ Knox + provider ↔ Olivia (co-owner) + provider ↔ Cache Valley pharmacy (Caleb) — CAPTURED

Document type: `evidence_or_ingestion` (Evidence Plane · `user_operator_research` lane) · Authority: `analysis_nonbinding` (`GRD-036` capture-broad-promote-gated). **Binds nothing. Not OMNI truth until promoted through a destination home's review gate.**
Lane rationale (`GRD-037` lane = provenance, NEVER topic/format): provenance = **observed real-world care-seeking + operator business behavior** — a live operator↔patient peptide/GLP-1 care episode that spilled into a co-owner (Olivia) pricing/consent thread, a Cache Valley compounding-pharmacy sourcing thread (Caleb), and the operator's own parallel Knox/ChatGPT reasoning loop. Filed by source family (field observation), not by modality (SMS/AI) and not by topic (peptides/GLP-1); concepts topic-tagged at the row level.
Trust posture (`GRD-039`): **field observation — a single real multi-channel case. High-signal ILLUSTRATION of the care↔commerce↔sourcing↔co-owner convergence physics OMNI must absorb, NOT statistical evidence and NOT clinical/commercial truth.** Learn freely; process-as-data; never execute/adopt without the destination gate.
Captured: 2026-07-16 (scaffold opened + **raw filed + de-identified §2 transcription completed** same day by Opus at operator instruction). Analyst: grounded agent (Opus), in-session. **Status: `substantially_captured` — (A) patient↔provider = 3 shots (complete-as-provided) · (C) provider↔Olivia = 2 shots · (D) provider↔Caleb pharmacy = 7 shots · (B) provider↔Knox/ChatGPT = 15 shots (ONE tirzepatide/GLP-1 pricing thread). OWED: phone_call/ (empty) · reference_artifacts/ standalone (the price list/formulary/AutoPilot appear INSIDE channels B/D, not yet dropped standalone). §3 physics decomposition = deferred to `EVRUN-2026-000009` (fresh agent).**

> ## ★ WHAT THIS CASE ACTUALLY IS (post-capture summary; supersedes the pre-capture provisional framing)
> A real **peptide + GLP-1 (tirzepatide) care→commerce episode** at the operator's practice (**Dr. Nick Crawford / Bloom Health**, brands **BLOOM / NAKED**):
> - **Patient "Mike"** (referred by Trent) wants a peptide stack (BPC-157, TB-500, GHK-CU, MOTs-C, retatrutide, HCG, CJC→Sermorelin swap, TRIZEP/tirzepatide) → provider collects identity/consent, submits Rx, pharmacy ships direct.
> - **Olivia (co-owner / front desk)** handles the consent form, CC-on-file, and the charge ("Once I get green light I'll call Dan" / "call Dan and get the charge") — shared operator authority.
> - **Cache Valley Pharmacy (Caleb, rep)** = the 503A compounding pharmacy: enclomiphene pricing ($1.56/pill → $349/90-day), GHK-CU-injectable + retatrutide FDA-503A-bulk-list status (July 23–24 2026 FDA Pharmacy Compounding Advisory Committee), clinic-vs-patient billing, all managed through the **AutoPilot** prescription portal.
> - **Knox/ChatGPT** = the ungoverned parallel loop where the operator worked out **formulary interpretation (503A vs 503B, sublingual vs injectable), pricing/markup/margin structure, who-bills-the-patient, and "what I'd do if I were BLOOM"** — the AI doing clinical + regulatory + pricing + business-model reasoning with no firewall.

> **★ THE PHYSICS QUESTION (for `EVRUN-2026-000009`):** for EVERY move across ALL channels — what is happening · which un-governed workaround is used · which OMNI domain(s)/primitive(s) own it · where the authority gate is (AI proposes → provider commits; vendor quote → operator commits a price) · how OMNI absorbs it without the screenshot loop — PLUS: how one care episode stays coherent as it crosses into commerce (pricing/formulary/catalog), sourcing (pharmacy consult), and co-owner operations; **who is authorized to set/mutate a price or formulary item**; and how the AI-does-margin+regulatory+clinical-reasoning-with-no-firewall pattern is governed.

> **★ PRIVACY FLAG (read first — PHI/PII HIGH-ESCALATED + COMMERCIALLY SENSITIVE):** raw images contain **identifiable third-party PHI/PII**: patient **Michael DeAngelis** (email `Mdeangelis313@gmail.com`, DOB `04/24/1996`, home address `822 Dahlia Ln, Rochester Hills MI 48307`, phone `+1 (947) 224-9667`), peptide/GLP-1 medication list; a second patient **Trent Wismer** with a compounded **enclomiphene Rx** (RX #, Patient/Prescriber/Pioneer UUIDs, "no charge to clinic"); the provider's real identity (**Dr. Nick Crawford**, `nick.crawford@bloom.health`); and **commercially-sensitive vendor pricing/formulary + margin strategy** (Cache Valley price list, AutoPilot portal). **De-identify aggressively before ANY promotion.** Raw images stay immutable behind this flag (`GRD-040`/`GRD-042`); §2 text below is de-identified-in-place. De-id tokens: `N` = provider/operator (Dr. Nick Crawford) · `[PT-MIKE]` = patient Michael DeAngelis · `[PT-TRENT]` = Trent Wismer (also the referrer) · `[CO]` = co-owner (Olivia) · `[RXREP]` = Caleb (pharmacy rep) · `[RX-MARK]` = Mark (Caleb's colleague) · pharmacy/vendor names masked on promotion. ⚑ As in 251/279, the exchange itself demonstrates the risk (real PHI + vendor pricing screenshotted into ungoverned ChatGPT) — that boundary crossing is a substrate finding this source exposes.

---

## §0 — Shared minimum metadata spine (router §3)

| field | value |
|---|---|
| `source_type` | screenshot collection (multi-channel: iMessage/SMS + ChatGPT thread + in-image vendor pricing/formulary/portal artifacts) |
| `source_platform` | iMessage/SMS (patient Mike · co-owner Olivia · pharmacy rep Caleb) + ChatGPT iOS (Knox loop) + Cache Valley "AutoPilot" Rx portal + Cache Valley formulary/price-list PDF — personal/operator capture |
| `file_path` | `provider_to_patient_screenshots/` (3) · `provider_to_knox_screenshots/` (15) · `provider_to_olivia_screenshots/` (2) · `provider_to_pharmacy_caleb_screenshots/` (7) · `phone_call/` (empty) · `reference_artifacts/` (empty) |
| `source_title` | Multi-channel care→commerce — peptide/GLP-1 patient (Mike) + Knox + co-owner (Olivia) + Cache Valley pharmacy (Caleb) |
| `source_author_or_org` | private individuals + vendor (operator-provided) |
| `speakers[]` | **(A)** `[PT-MIKE]` — care-seeker (peptide/GLP-1 stack); patient; identity_confidence high (real contact) — **DE-IDENTIFY**. **(B)** `N` (Dr. Nick Crawford) — provider/operator/business-owner; the clinician + committer + price-setter. **(C)** `chat` — ChatGPT/"Knox"; ungoverned generalist LLM; authority NONE → `captured_interpretation_nonbinding`. **(D)** `[CO]` (Olivia) — co-owner/front-desk; operator principal (consent/charge/ops). **(E)** `[RXREP]` (Caleb) — Cache Valley compounding-pharmacy rep/liaison; external vendor principal. **(F)** `[PT-TRENT]` — referrer + second patient (enclomiphene Rx). *Authority is descriptive, not worship (`GRD-039`).* |
| `published_at` | ~2026-07 (threads span Mon Jul 6 → mid-Jul 2026; exact per screenshot timestamps) |
| `uploaded_to_omni_at` | 2026-07-16 |
| `ingested_by` | grounded agent (Opus), in-session, at Nick's instruction |
| `capture_method` | manual screenshot (operator-provided) + agent de-identified transcription |
| `evidence_kind` | field observation (peptide/GLP-1 care episode + operator commerce/sourcing/co-owner behavior + AI-workaround) |
| `status` | `substantially_captured` (27 shots across 4 channels transcribed de-identified; phone + standalone reference artifacts owed; §3 pending `EVRUN-2026-000009`) |
| `reliability_context` | anecdotal (single real multi-channel case) — a **lens, not a ranking**: high illustrative value for care↔commerce convergence; zero authority for clinical/commercial/statistical claims. ⚑ ChatGPT content = `captured_interpretation_nonbinding`, NEVER an OMNI finding. |
| `routing_target` | proposed: `thesis` (§1 core / §B AI-substrate / §8 loops+gates / §C GCE), `domain_map` (Identity/Intake/Messaging/Clinical-Memory/Consent/CNS/**Commerce-D6**/**OFC**/RBAC/**Federation-vendor**), `feature/product_backlog`, `Build OS`, `business_strategy` — **proposed only** |
| `promotion_status` | `not_promoted` |

**Lane-specific fields (`user_operator_research/_lane.md`):**
`respondent_role`: patient + operator/provider + co-owner + pharmacy-vendor (+ off-platform generalist AI) · `method`: observation (captured threads + reference artifacts) · `pain_theme`: **ungoverned, multi-channel care→commerce** — provider shuttling PHI + vendor pricing/formulary across iMessage, ungoverned ChatGPT, a co-owner, and a pharmacy rep, with no single coherent thread, no governed price/formulary/catalog home, no shared-authority model, no lineage/consent · `frequency_or_severity`: illustrative single case (pattern believed pervasive for small-practice operators) · `surface_or_feature_impact`: Identity, Intake, Messaging, Clinical-Memory, Consent/Documents, CNS (governed AI-propose), authority gate, **Commerce (price list / catalog / formulary / margin)**, **OFC**, **Federation/vendor sourcing**, RBAC (co-owner shared authority) · `quote_anchor`: see §2.

---

## §1 — Collection manifest (raw artifacts, immutable) — CHANNELS

One coherent captured event = one `EVSRC` (router §4 "collection sources"). Four channels captured (+ two owed). Raw files keep their capture-time names (`Screen Shot 2026-07-16 at H.MM.SS PM.png`); optional sequential rename is a later source-governance action (not done — files immutable). Inventory maps each by channel + capture-clock time.

> **⚠️ PROVENANCE (mirror 251/279):** the **Cache Valley formulary/price-list PDF** and the **AutoPilot portal** appear as content **fed INTO channels B (ChatGPT) and D (pharmacy text)** — they are payload of the channel they were captured in (`DTP-12`), not (yet) standalone `reference_artifacts/`. Note it; do not silently re-file by content.

### Artifact inventory

#### Channel A — `provider_to_patient_screenshots/` — patient "Mike" (peptide/GLP-1)
| file (clock) | kind | what it shows (de-identified) |
|---|---|---|
| `12.52.35 PM` | iMessage | Intro + first orders. `N`: "Hey Mike, can you chat now?" → `[PT-MIKE]`: "Yes sir" → order request for **TRIZEP + MOT-C + 10mL bacteriostatic water**; `N`: "we'll be in touch w next steps"; `[PT-MIKE]`: "when can we move forward"; `N`: FDA advisory committee **July 23rd/24th** wait; current stack **BPC157, TB500, GHK-CU, MOTC, Reta** to be discussed |
| `12.52.40 PM` | iMessage | `[PT-MIKE]` current stack detail: "Reta 8 units/week, BPC157, GHK-CU 20 units 5×/week, would like to add **hcg** and **swap CJ for Semoralin**"; `N` asks for **Full name · Email · DOB · Home address** to "get you in our system to complete visit and consents. Olivia w[/ Front Desk]…" |
| `12.52.45 PM` | iMessage ⚑PII | `[PT-MIKE]` sends **full PII** (name/email/DOB/address — REDACTED); `N`: "What doses are you on for the hcg and CJC? Send screenshots/pics of everything in your current stack"; `[PT-MIKE]`: "I'm pouring concrete I'll txt u after 4" |

#### Channel C — `provider_to_olivia_screenshots/` — co-owner (Olivia)
| file (clock) | kind | what it shows (de-identified) |
|---|---|---|
| `12.46.52 PM` | iMessage | `N` forwards Mike's stack context to `[CO]`; banter: "The country club and gym bros… male equivalent to the medspa"; `[CO]`: "That's a lot of meds ‼️"; `N`: "We (me) need to get organized on it. What a cluster"; `[CO]`: "do not try to get me to understand this I will accidentally kill someone"; `N`: "All these guys just want the edge! Go max" |
| `12.47.02 PM` | iMessage | `[CO]`: "There's a ton of guys in mortgages that want it"; `N`: "No no. We'll be safe w all this stuff"; `[CO]`: "**I'm sending you a consent form for your review on your apt lmk if it's good… Once I get green light I'll call Dan**"; `N`: "The consent looks terrific… **Yes, call Dan and get the charge please**"; `[CO]`: "Perfect"; `N`: "**His Rx is now submitted to pharmacy, they'll prepare it and ship directly to him with instructions**" |

#### Channel D — `provider_to_pharmacy_caleb_screenshots/` — Cache Valley pharmacy (Caleb)
| file (clock) | kind | what it shows (de-identified) |
|---|---|---|
| `1.01.49 PM` | iMessage + AutoPilot portal ⚑PHI | `[RXREP]`: "Hi, this is Caleb from Cache Valley Pharmacy… for Dr. Crawford"; `N` troubleshooting a 1st order that "never went thru"; **AutoPilot "Cache Valley – BLOOM HEALTH Prescription Portal"** screenshot — patient **[PT-TRENT]**, provider NICHOLAS CRAWFORD, **enclomiphene citrate 12.5 mg cap**, RX # + Patient/Prescriber/Pioneer UUIDs, "Bill to: Clinic Ship to: Patient" (all REDACTED) |
| `1.01.55 PM` | iMessage | `[RXREP]`: "found it. They were looking for a GLP instead of this. I got it fixed. Went out today"; `N`: "Are you sales rep or liaison?"; `[RXREP]`: "just a step between them and the Pharmacy… problem-solving" |
| `1.02.01 PM` | iMessage ⚑pricing | `N` pricing question: "we purchase **enclomiphene 12.5mg for $1.56/pill**… my cost for 90 days is **$140.40**. Recs on retail markup (direct to patient)? Labs external, consult fee separate… planning **$349/90-day, $399 for 25mg**. Can you plug that into your AI assist… looking to be competitive and protect margin" |
| `1.02.06 PM` | iMessage + FDA link | `N`: "number of people asking about **GHK-CU injectable**… do you anticipate injectable option soon? **retatrutide** option soon?"; `[RXREP]`: "still a category two drug per FDA… hopefully release next week on the 23rd as category one on both"; FDA link preview begins |
| `1.02.11 PM` | iMessage + FDA/503A screenshots | FDA "July 23–24, 2026: Meeting of the Pharmacy Compounding Advisory Committee"; `N`: "I'm seeing these" + **503A Bulks List** screenshots (BPC-157/KPV/TB-500/MOTs-C; Emidetlide/Semax/Epitalon uses evaluated) |
| `1.02.16 PM` | iMessage + AutoPilot photo ⚑PHI | `N`: clinic-vs-patient payment; "looking at **[PT-TRENT]** order for enclo. It just says **no charge to clinic**… way to verify payment details on the portal?"; `[RXREP]`: "What's your email?"; `N`: `nick.crawford@bloom.health` + photo of AutoPilot Rx detail (RX UUIDs, "No charge to clinic" circled) |
| `1.02.21 PM` | iMessage | `[RXREP]`: "I will work getting pricing on the portal with **autopilot** today"; `[RXREP]`: "I haven't forgotten about you **Mark** is out of town and he hasn't gotten back to me yet"; `N`: "All good, sir Thank you" |

#### Channel B — `provider_to_knox_screenshots/` — ChatGPT/"Knox" (ONE tirzepatide/GLP-1 pricing + formulary thread; 15 shots)
*(`captured_interpretation_nonbinding`. The 12.31.33 shot shows an iMessage — Trent introduces "Mike <> Dr. Crawford" — captured beside/inside the ChatGPT context = channel-B payload per `DTP-12`.)*
| file (clock) | kind | what it shows (de-identified) |
|---|---|---|
| `12.31.33 PM` | iMessage-in-Knox context | `[PT-TRENT]`: "Mike <> Dr. Crawford — He'll get you hooked up with tirzep and whatever else you need"; `[PT-MIKE]`: "Good morning Doc… save your number… Thanks for the introduction trent!"; `N`: "Hey Mike, let me get at you shortly. Thanks Trent" |
| `12.31.47 PM` | Cache Valley formulary/price-list PDF (in ChatGPT) | "Cache Valley Formulary and Price List" — Semaglutide/Tirzepatide 30-day ODT + SL pricing; **Injectables** (BPC-157 $123.50, BPC-157/KPV/TB500 $162.50, DSIP, Glutathione, Gonadorelin, HCG $247) — many "PENDING" per FDA classification |
| `12.31.56 PM` | ChatGPT | tirzepatide titration (2.5→5→…15mg); "Your cost" from Cache Valley formulary ($162.50 lowest); "Suggested retail… ~$299–349/month… $349/month for tirzepatide initiation" |
| `12.32.04 PM` | ChatGPT | `N`: "This is a **403B** pharmacy… will they ship supplies for the appetite too? at 10mg/week will I have profit? … given what you know about our med spa, the formula list, etc."; `chat`: "**This is 503B, not 403B**… sublingual tirzepatide ampules/ODTs, not injectable… cannot assume dosing from injectable label" |
| `12.32.12 PM` | ChatGPT | "Would you have profit at 10mg weekly?" — no 10mg/week injectable shown; prices look like **retail charged by the pharmacy**, not wholesale; your revenue must come separately from eval/mgmt fee |
| `12.32.21 PM` | ChatGPT | fee-splitting/anti-kickback caution; suggested structure for **BLOOM/NAKED**: initial eval $149–199, monthly clinical management $79–129, medication paid directly to pharmacy, labs separate; margin table (pharmacy price / patient total w/ $99 mgmt / gross revenue $99) |
| `12.32.27 PM` | ChatGPT | "Will you send a new prescription every month?" cadence; **"The bigger problem"**: "I would not tell Mike 'I'll get you hooked up with Zep.' What you can prescribe is compounded sublingual tirzepatide, not Zepbound… FDA scrutinizing… tirzepatide off 503B bulks list" |
| `12.32.34 PM` | ChatGPT | `N`: "Is sublingual or something? **Am I fucking crazy?** It's oral now?"; `chat`: "You're not crazy… SL = Sublingual… not injectable… not Zepbound… compounded product" |
| `12.32.40 PM` | ChatGPT + formulary PDF | "One thing I'd verify… make sure this is actually tirzepatide"; recommends getting the **entire Cache Valley formulary PDF** → "and how to integrate it into **BLOOM/NAKED** without surprises"; PDF attached; "Dude… this is actually a pretty nice formulary" |
| `12.32.47 PM` | ChatGPT | "1. This is **NOT 503B. It's a 503A**… every prescription is patient-specific. 2. The prices you saw are **SUGGESTED RETAIL**… not your wholesale costs" |
| `12.32.53 PM` | ChatGPT | "3. They offer THREE GLP-1 programs — Oral ODT (3–12mg), Sublingual liquid (30 ampules, 4–15mg/mL)" |
| `12.32.59 PM` | ChatGPT | "Injectable — tirzepatide/B12, /Glycine, /L-Carnitine, call for pricing… they still make injectable tirzepatide. 4. They sell administration supplies (needles, TB syringes, luer locks, IM starter packs). 5. This is physician friendly (TRT, Oxandrolone…)" |
| `12.33.10 PM` | ChatGPT | "**What I would do if I were BLOOM**: skip sublingual, prescribe **injectable Tirzepatide/B12** or **/L-Carnitine** (patients understand weekly injections)… 503A pharmacies almost always have physician onboarding, prescription templates, dosing guide, refill forms" |
| `12.33.18 PM` | ChatGPT | "My next phone call: 'email me your GLP-1 provider packet, dosing algorithms, templates, shipping workflow, pricing sheet, onboarding'"; **"who bills the patient"**: pharmacy-direct vs clinic-purchase; `N`: "appetite once weekly injection with quarantine — suggested retail? pricing on that list?" |
| `12.33.23 PM` | ChatGPT | "Not in this document… injectable tirzepatide = **Call for pricing**… ask: current provider pricing sheet for injectable Tirzepatide/B12, suggested retail per titration step, and do you bill the patient or invoice the clinic" |

---

## §2 — Reconstructed threads (de-identified; verbatim where legible)

### (A) provider ↔ patient (Mike) — peptide/GLP-1 care thread  *(layer: `raw_source`, de-identified)*
> `[PT-MIKE]` = patient (Michael DeAngelis, masked); `N` = provider. See §1 Channel A rows for the move-by-move. Keeper beats: peptide/GLP-1 **stack request** (BPC157/TB500/GHK-CU/MOTs-C/Reta 8u/wk/HCG/CJC→Sermorelin swap/TRIZEP) → **provider gates on FDA advisory (Jul 23–24) + identity/consent** → **PII collected in-thread** → dose/photo request. Provider defers new items pending FDA compounding-committee outcome. *(Full de-id verbatim can be expanded from the raw images if the analysis needs it.)*

### (B) provider ↔ Knox/ChatGPT — parallel AI loop (tirzepatide/GLP-1 pricing + formulary)  *(layer: `captured_interpretation_nonbinding` — NOT evidence, NOT OMNI analysis)*
> The ungoverned loop where the operator worked out **formulary interpretation, pricing/markup/margin, regulatory (503A/503B, sublingual vs injectable, FDA scrutiny), and business structure** — the AI doing clinical + regulatory + pricing + business-model reasoning with **no firewall** (cf. Dan-run `DTP-17`). Keeper specimens: the operator's terse/profane deliberation ("Am I fucking crazy? It's oral now?") in a space he believes is unwatched (cf. `DTP-02` surveillance-asymmetry); the AI **correcting the operator's 403B→503B error** and the sublingual-vs-injectable misread (uplift + error-correction, cf. `DTP-21`/error-lineage); the AI authoring **pricing/margin structure + "what I'd do if I were BLOOM"** (incentive-lineage/firewall, `DTP-17`); PHI (Mike) + brand (BLOOM/NAKED) + vendor formulary all pasted into the ungoverned tool (`DTP-13`/`DTP-14`). See §1 Channel B rows for the ordered flow. **Do NOT treat any ChatGPT statement as an OMNI finding.**

### (C) provider ↔ Olivia (co-owner) — consent / charge / operations  *(layer: `raw_source`, de-identified `[CO]`)*
> `[CO]` = Olivia (co-owner/front desk). Keeper beats: co-owner **authors + sends the consent form for provider review**, gets "green light," then **"calls Dan and gets the charge,"** after which the provider states **"His Rx is now submitted to pharmacy… ship directly to him."** Shared operator authority across a care→commerce→fulfillment handoff; note the "call **Dan**" reference (⚠️ ambiguous — could be a different patient than Mike; flag for analysis, do NOT assume). See §1 Channel C rows.

### (D) provider ↔ Caleb (Cache Valley pharmacy) — sourcing / formulary / pricing / billing  *(text = `raw_source`, de-identified `[RXREP]`)*
> `[RXREP]` = Caleb (Cache Valley rep/liaison). Keeper beats: **first order failed** ("they were looking for a GLP instead of this") → fixed; **enclomiphene economics** ($1.56/pill, $140.40/90-day cost, $349/$399 retail plan) with operator asking to "**plug that into your AI assist**"; **GHK-CU-injectable + retatrutide** gated on the **FDA Jul 23–24 compounding-committee** (category 2→1); **clinic-vs-patient billing** confusion ("no charge to clinic" on [PT-TRENT]'s enclo Rx); pricing to be loaded via **AutoPilot** portal ("Mark is out of town"). See §1 Channel D rows.

### (D-call) provider ↔ Caleb — PHONE CALL  *(layer: `operator_reconstructed_nonbinding`)*
> ⛔ OWED — the thread shows "Can I call you later?" / "had a question… Yep"; if a call occurred, reconstruct here (lower fidelity; do not fabricate).

### (REF) reference artifacts — price list / formulary / AutoPilot  *(seen inside channels B/D)*
> The **Cache Valley Formulary & Price List** (semaglutide/tirzepatide ODT+SL pricing; injectables incl. BPC-157/TB-500/HCG; "PENDING" per FDA) and the **AutoPilot Rx portal** were captured **inside** channels B/D (see inventory). Standalone drops into `reference_artifacts/` still OWED if cleaner copies exist.

---

## §3 — PHYSICS DECOMPOSITION frame (deferred → `EVRUN-2026-000009`)
Candidate physics to hunt (propose-only; reuse the Dan-run `DTP-*` registry before minting): care→commerce continuity · in-thread price/formulary mutation authority · co-owner shared authority · vendor/pharmacy as governed actor · price-list/formulary/AutoPilot as governed catalog truth · AI-does-margin+regulatory+clinical-with-no-firewall (`DTP-17`) · surveillance-asymmetry of the ungoverned deliberation (`DTP-02`) · PHI+pricing boundary crossing (`DTP-13`/`14`) · error-correction lineage (403B→503B; sublingual vs injectable) · multi-channel identity binding. See `EVRUN-2026-000009_00_run.md`.

---

## §4 — Cross-links + owed artifacts
- **Family:** same field-specimen family as `EVSRC-000251`/`000279` (Dan/TRT), `EVSRC-000252` (Bactrim Dan), `FIELD-001` (Alec), `FIELD-003`/`000200` (Kyle). **Shares cast (Trent, Cache Valley, enclomiphene) with the Dan/TRT series** — cross-link, do NOT merge (different patient = Mike; different scenario = peptide/GLP-1 care→commerce).
- **Overlap w/ `EVSRC-000281`:** this case already contains much of the "peptide pricing + Olivia + Cache Valley + AutoPilot" material earmarked for `000281` (peptide service-line planning). **000281 is still empty — operator to decide if it is now redundant, or awaits the distinct clomiphene ChatGPT threads + pure supply-side planning.** (See sign-off.)
- **Analysis:** `EVRUN-2026-000009` (skeleton ready; boot the fresh agent).
- **Owed:** phone-call reconstruction (§2 D-call); standalone `reference_artifacts/` drops; evidence-ingestion-ledger row `D0UOR-EVD-004` (add now that content exists — see below); catalog/read-graph if promoted-significant. **PII/PHI quarantine** recommendation (Mike's PII, Trent's Rx UUIDs) — open governance action like the 279 hotel-folio, awaiting operator confirm.
- **Posture:** Evidence-Plane capture only. Care-forensic freeze respected (propose-only; promotes nothing — `GRD-036`). Pre-spine / pre-v4 hard stop honored.

# EVSRC-2026-000281 — Peptide/hormone/GLP-1 service-line pricing + catalog build (NO PATIENT participant) — 4 channels: (1) Knox · (2) Olivia (co-owner) · (3) Cache Valley pharmacy (Caleb) · (4) Mills Pharmacy (René) — SUBSTANTIALLY CAPTURED

Document type: `evidence_or_ingestion` (Evidence Plane · `user_operator_research` lane) · Authority: `analysis_nonbinding` (`GRD-036` capture-broad-promote-gated). **Binds nothing. Not OMNI truth until promoted through a destination home's review gate.**
Lane rationale (`GRD-037` lane = provenance, NEVER topic/format): provenance = **observed real-world operator/co-owner business behavior** — the operator + co-owner + TWO compounding-pharmacy vendors (+ an AI) constructing + pricing a **peptide/hormone/GLP-1 service line + its catalog + consents** off-platform. A **commerce/operations "supply-side"** field specimen (the service + its price + its catalog are being built), companion to the demand-side care cases.
Trust posture (`GRD-039`): **field observation — a single real business-planning episode. High-signal ILLUSTRATION of how a small practice stands up + prices + catalogs a service line off-platform, NOT statistical evidence and NOT commercial/clinical truth.** Learn freely; process-as-data; never execute/adopt without the destination gate.
Captured: 2026-07-16 (scaffold) · 2026-07-17 (raw dropped + **de-identified §2 transcription completed** by Opus at operator instruction). Analyst: grounded agent (Opus), in-session. **Status: `substantially_captured` — Ch2 Olivia (9 shots) + Ch3 Cache Valley/Caleb (7 shots) + Ch4 Mills/René (3 shots) = 19 shots transcribed de-identified. OWED: Ch1 Knox (2 threads: clomiphene + TK) still EMPTY; `reference_artifacts/` standalone (price list/formulary/AutoPilot appear IN-channel). §3 physics decomposition = deferred to `EVRUN-2026-000010` (fresh agent).**

> ## ★★ NO PATIENT PARTICIPANT — but incidental PATIENT PHI is present (read this).
> This is a **pure supply-side / business-planning** case: the conversants are the operator + co-owner + two vendors + (pending) an AI. **No patient is a participant / channel.** BUT — ⚑ the co-owner (Ch2) thread references **Dan Harris by full name** and pastes **his lab panel** (a screenshot-within-the-screenshot) as the *triggering example* for building the service line, and the Cache Valley (Ch3) thread shows **Trent Wismer's** enclomiphene Rx in the AutoPilot portal. **So third-party PHI IS present by reference** even though no patient is a conversant. De-identify aggressively; sensitivity here = **commercial (vendor pricing/margin) + incidental clinical PHI**. `[PT-DAN]` = Dan Harris (= the `EVSRC-000279` TRT patient — this case is the **commerce/operational tail of the Dan/TRT case**); `[PT-TRENT]` = Trent Wismer.

> ## ★ WHAT THIS CASE IS (post-capture)
> The operator (**Dr. Nick Crawford DO / Bloom Health**, brands **NAKED / BODY BURN**) builds the **Boulevard (BLVD) catalog** for a hormone/weight-loss/peptide service line and prices its Rx menu, coordinating:
> - **Ch2 — Olivia (co-owner)**: build BLVD service categories (Men's/Women's Hormone Optimization, Medical Weight Loss, Peptide Performance & Recovery, Comprehensive Medical Wellness — each New-Patient/Follow-Up) + standard pricing ($149 new / $99 follow-up; $199/$149 comprehensive) + a Prescription-Medications price list (enclomiphene/testosterone/hCG/semaglutide/tirzepatide) + consent docs; all triggered by "getting **Dan** into the system + charged so I can send his Rx."
> - **Ch3 — Caleb / Cache Valley Pharmacy (503A)**: enclomiphene sourcing/pricing ($1.56/pill → $349/90-day) + GHK-CU/retatrutide FDA-503A status + clinic-vs-patient billing + AutoPilot portal. **(⚠️ This Ch3 thread is the SAME conversation captured in `EVSRC-000280` Channel D — duplicate capture; see §4.)**
> - **Ch4 — René Caruso / Mills Pharmacy (second vendor)**: topical/skincare compounding (CoQ10 1% / DMAE / Estriol / Lipoic Acid / Vit C Ester creams), samples, custom blends; operator loops co-owner Olivia into a group chat. **Multi-vendor sourcing** (Cache Valley = GLP-1/hormones/peptides; Mills = topical/skincare).
> - **Ch1 — Knox/ChatGPT**: (owed) the clomiphene + TK reasoning threads.

> **★ THE PHYSICS QUESTION (for `EVRUN-2026-000010`):** for EVERY move — what's happening · un-governed workaround used · owning OMNI domain/primitive (Commerce-D6 / product-catalog / **formulary** / pricing-margin / OFC / **Federation-MULTI-vendor** / RBAC co-owner authority / CNS in-thread mutation / §C GCE) · where the authority gate is (vendor quote → co-owner build → committed catalog/price) · how OMNI absorbs it so a **catalog/price/consent/formulary** decision becomes governed truth without the screenshot loop; PLUS: who is authorized to build/mutate the catalog; **multi-vendor comparison + per-vendor incentive lineage** (`DTP-17`); and how the supply-side build connects to the demand-side Dan/TRT case (`279`).

> **★ PRIVACY / SENSITIVITY FLAG:** COMMERCIALLY SENSITIVE (vendor pricing/formulary/margin strategy; two vendors) **+ incidental third-party PHI** (`[PT-DAN]` Dan Harris name + lab panel; `[PT-TRENT]` Trent Wismer enclomiphene Rx UUIDs). Provider real identity (Dr. Nick Crawford, `nick.crawford@bloom.health`). Marked **`internal / not_promoted`**. De-identify + mask vendor identities before ANY promotion. Raw images immutable behind this flag (`GRD-040`/`GRD-042`); §2 is de-identified-in-place. De-id tokens: `N` = provider/operator (Nick) · `[CO]` = co-owner (Olivia) · `[RXREP]` = Caleb (Cache Valley) · `[RX-MARK]` = Mark (Cache Valley) · `[VENDOR2-REP]` = René Caruso (Mills Pharmacy) · `[PT-DAN]` / `[PT-TRENT]` = patients (masked) · `[STAFF-DONNA]` = staff · pharmacy/vendor names masked on promotion.

---

## §0 — Shared minimum metadata spine (router §3)

| field | value |
|---|---|
| `source_type` | screenshot collection (iMessage/SMS: co-owner + 2 pharmacy vendors) + in-image reference artifacts (labs, signage, consent doc, BLVD catalog, AutoPilot portal, PubMed link) + (owed) ChatGPT threads + phone-call reconstruction |
| `source_platform` | iMessage/SMS (co-owner Olivia · Cache Valley Caleb · Mills René) + ChatGPT iOS (Knox loop, owed) + Cache Valley "AutoPilot" Rx portal + Boulevard (BLVD) booking platform — operator capture |
| `file_path` | **Ch1** `provider_to_knox_screenshots/` (+ `thread_1_clomiphene/`, `thread_2/`) · **Ch2** `provider_to_olivia_screenshots/` (9) · **Ch3** `provider_to_pharmacy_caleb_screenshots/` (7, + `phone_call/`) · **Ch4** `provider_to_vendor2_mills_screenshots/` (3) · `reference_artifacts/` |
| `source_title` | Peptide/hormone/GLP-1 service-line pricing + catalog build (no patient) — Knox + Olivia (co-owner) + Cache Valley (Caleb) + Mills (René) |
| `source_author_or_org` | private individuals + TWO compounding pharmacies (operator-provided) |
| `speakers[]` | **(N)** Nick — Dr. Nick Crawford DO / Bloom Health; operator principal (clinical + business); authority = co-owner + price/catalog-setter + committer. **(Ch1)** ChatGPT/"Knox" — ungoverned generalist LLM (owed); authority NONE → `captured_interpretation_nonbinding`. **(Ch2)** `[CO]` Olivia — co-owner / NAKED founder (Esti-skin background); operator principal (business/pricing/catalog). **(Ch3)** `[RXREP]` Caleb — Cache Valley 503A compounding-pharmacy rep/liaison; external vendor principal (+ `[RX-MARK]` Mark). **(Ch4)** `[VENDOR2-REP]` René Caruso — Mills Pharmacy rep; second external vendor principal. Referenced-not-participant: `[PT-DAN]` Dan Harris (= `EVSRC-000279` patient), `[PT-TRENT]` Trent Wismer, `[STAFF-DONNA]`. *Authority is descriptive, not worship (`GRD-039`).* |
| `published_at` | ~2026-07 (Fri Jul 10 → Wed mid-Jul 2026 per screenshot timestamps) |
| `uploaded_to_omni_at` | 2026-07-17 |
| `ingested_by` | grounded agent (Opus), in-session, at Nick's instruction |
| `capture_method` | manual screenshot (operator-provided) + agent de-identified transcription |
| `evidence_kind` | field observation (operator/co-owner service-line + catalog + pricing + multi-vendor-sourcing behavior) |
| `status` | `substantially_captured` (Ch2/Ch3/Ch4 = 19 shots transcribed; Ch1 Knox + standalone reference_artifacts owed; §3 pending `EVRUN-2026-000010`) |
| `reliability_context` | anecdotal (single real business-planning case) — a **lens, not a ranking**: high illustrative value for commerce/catalog/pricing/multi-vendor physics; zero authority for commercial/clinical/statistical claims. ⚑ Any ChatGPT content (owed) = `captured_interpretation_nonbinding`. |
| `routing_target` | proposed: `thesis` (§C GCE / §8 loops+gates / commerce physics), `domain_map` (**Commerce-D6** / product-catalog / pricing / **formulary** / **OFC** / **Federation-multi-vendor** / RBAC co-owner authority / CNS / Identity), `feature/product_backlog`, `Build OS`, `business_strategy` — **proposed only** |
| `promotion_status` | `not_promoted` |

**Lane-specific fields (`user_operator_research/_lane.md`):**
`respondent_role`: operator/provider + co-owner + TWO pharmacy-vendors (+ owed AI) · `method`: observation (captured threads + reference artifacts) · `pain_theme`: **the ungoverned, off-platform service-line + catalog + pricing construction across MULTIPLE vendors** — building BLVD categories/prices/consents + an Rx price menu + comparing two compounding pharmacies, all over iMessage + screenshots + a 3rd-party pricing portal, with no governed catalog/pricing/formulary home, no shared-authority model, no lineage · `frequency_or_severity`: illustrative single case (pattern pervasive for small-practice operators standing up service lines) · `surface_or_feature_impact`: **Commerce (catalog / price list / formulary / margin)**, **OFC**, **Federation/multi-vendor sourcing**, RBAC (co-owner shared authority), CNS (in-thread mutation), Identity · `quote_anchor`: see §2.

---

## §1 — Collection manifest (raw artifacts, immutable) — 4 channels, NO patient participant

> **⚠️ SCREENSHOT-WITHIN-SCREENSHOT (operator-flagged) + PROVENANCE (`DTP-12`):** several shots contain a *nested* capture — e.g. Dan's **lab panel** pasted into the Olivia thread (Ch2), the **AutoPilot portal / a photo-of-screen** inside the Caleb thread (Ch3), a **PubMed article** preview + the **NAKED consent doc** + **signage** + the **BLVD catalog** rendered in iMessage. Each nested artifact is **payload of the channel it was captured in** — noted, not re-filed by content.

### Channel 2 — `provider_to_olivia_screenshots/` — co-owner (Olivia); BLVD catalog + pricing + consent build
| file | kind | what it shows (de-identified) |
|---|---|---|
| `IMG_0793` | iMessage + nested labs | office logistics ("2 more black shelves… 2 Google cams"); a **lab-panel screenshot pasted in** (SHBG/Free Androgen Index/Calc Free T — `[PT-DAN]`'s labs); the requested workup list ("Repeat 8AM testosterone, SHBG/albumin, LH, FSH, Prolactin, Estradiol, PSA, Free T4, Ferritin, Vit B12, Vit D"); `[PT-DAN]`: "I'll see what my PCP says… then Quest. Thanks Dr. C!"; N: "Doing a TRT consult for **Dan Harris**…" |
| `IMG_0794` | iMessage | N→`[CO]`: "Doing a TRT consult for `[PT-DAN]`… likely prescribe **enclomiphene 12.5mg daily 90-day. Thru Cache Valley. We purchase 90-day for $140. Mark up to $349, ship to him.** May need help getting a **BLVD pricing and consent** in"; also "your elderly gentleman in for a consult… GLP1 weight loss"; `[CO]`: "Yes when are you free"; N: "Wed @ 4pm works" |
| `IMG_0795` | iMessage + nested signage | **NAKED / BODY BURN signage plan** image; N: "revised signage plan. Can I approve w `[STAFF-DONNA]`?"; `[CO]`: "Yes!"; N: build BLVD services — "**Boulevard Category: Hormone Optimization, Weight Loss & Wellness**: 1a Men's Hormone Optimization & Sexual Health — New Patient Consultation / 1b Follow-Up; 2a Women's…" |
| `IMG_0796` | iMessage | full category list (2a/2b Women's Hormone, 3a/3b Medical Weight Loss, 4a/4b **Peptide, Performance & Recovery**, 5a/5b Comprehensive Medical Wellness — New/Follow-Up); "Just copy those titles exactly"; N: "general consent + focused consent? I'll send the male hormone consent. I need to get this **Dan** guy into system and charged so I can send his Rx"; `[CO]`: "Pricing?" |
| `IMG_0797` | iMessage | standard pricing: "**New Patient Consultation $149 / Follow-Up $99**"; applied across 1a/1b Men's ($149/$99), 2a/2b Women's… |
| `IMG_0798` | iMessage | pricing continued (all categories $149/$99); "**Comprehensive Medical Wellness — New Patient $199 / Follow-Up $149**"; "Labs and medications priced separately" |
| `IMG_0799` | iMessage + nested consent | "Labs and medications priced separately. **We will not create a separate public 'prescription fee.' Any waived consult still entered at full price with a documented courtesy discount so Boulevard reflects the actual service value.**"; **NAKED Men's Hormone Optimization & Sexual Health — Informed Consent** doc; "usable consent… email to front desk" |
| `IMG_0800` | iMessage (BLVD Rx price list) | **Boulevard Category: Prescription Medications** — Enclomiphene 12.5mg Oral 90 caps **$349**; Enclomiphene 25mg 90 caps **$399**; Testosterone Cypionate 200mg/mL Inj 10mL **$199**; hCG 10,000 IU Inj 1 vial **$399**; Semaglutide 2mg Oral 30 tabs **$199**; Tirzepatide 3mg Oral 30 tabs **$299**; Semaglutide/B12 0.44/0.1mg/mL Inj 2mL **$299**; Tirzepatide/B12 4.4/0.1mg/mL Inj 2mL **$399**; Tirzepatide/Glycine 4.4/5mg/mL Inj 2mL **$399** |
| `IMG_0801` | iMessage | price list continued — Zepbound / Wegovy / Other Medication **Retail Pharmacy Rx — $0**, "**noncommissionable, hidden from online purchase**"; "put those into BLVD… starting point for RX and charges"; **"For Dan, I mainly need: 1) service type = men's health consult $149; 2) consent = men's wellness consent; 3) enclo 12.5mg ($349)"** → get into system, scheduled visit, consent sent+returned, charge completed, then send Rx in Cache Valley portal, ships direct |

### Channel 3 — `provider_to_pharmacy_caleb_screenshots/` — Cache Valley (Caleb) — ⚠️ SAME conversation as `EVSRC-000280` Channel D (duplicate)
| file | kind | what it shows (de-identified) |
|---|---|---|
| `IMG_0802` | iMessage + AutoPilot portal ⚑PHI | 1st-order troubleshoot; **AutoPilot "Cache Valley – BLOOM HEALTH Prescription Portal"** — `[PT-TRENT]` enclomiphene citrate 12.5mg cap, RX # + Patient/Prescriber/Pioneer UUIDs, "Bill to: Clinic Ship to: Patient", "No charge to clinic" (REDACTED) |
| `IMG_0803` | iMessage | `[RXREP]`: "found it. They were looking for a GLP instead of this… went out today"; "just a step between them and the Pharmacy… problem-solving" |
| `IMG_0804` | iMessage ⚑pricing | N: "enclomiphene 12.5mg **$1.56/pill**… 90-day cost **$140.40**… planning **$349/90-day, $399 for 25mg**… plug that into your AI assist… protect margin" |
| `IMG_0805` | iMessage + FDA link | N: "GHK-CU injectable… retatrutide option soon?"; `[RXREP]`: "still a category two drug per FDA… hopefully release next week on the 23rd as category one" |
| `IMG_0806` | iMessage + 503A screenshots | FDA "July 23–24 2026 Pharmacy Compounding Advisory Committee"; 503A Bulks List (BPC-157/KPV/TB-500/MOTs-C; Emidetlide/Semax/Epitalon) |
| `IMG_0807` | iMessage + photo-of-screen ⚑PHI | N: clinic-vs-patient payment; "looking at `[PT-TRENT]` order for enclo… 'no charge to clinic'… verify payment on the portal?"; `[RXREP]`: "What's your email?"; N: `nick.crawford@bloom.health` + photo of AutoPilot Rx detail |
| `IMG_0808` | iMessage | `[RXREP]`: "I will work getting pricing on the portal with **autopilot** today"; "`[RX-MARK]` is out of town… I'll get back to you"; N: "All good, sir" |

### Channel 4 — `provider_to_vendor2_mills_screenshots/` — Mills Pharmacy (René Caruso) — second vendor, topical/skincare
| file | kind | what it shows (de-identified) |
|---|---|---|
| `IMG_0809` | iMessage + PubMed link | `[VENDOR2-REP]` (René Caruso): "Great to meet you, Dr. Crawford. Send your email — I'll send our online catalog + pricing… get samples of our creams sent over"; N: "Nick Crawford DO Internal Medicine `nick.crawford@bloom.health`"; N: "Can you guys do **CoQ10 topical**? Why is that not more popular…" + nested PubMed article ("Role of Coenzyme Q10 in Skin Aging…") |
| `IMG_0810` | iMessage | `[VENDOR2-REP]`: "Currently making one: **CoQ10 1%, DMAE 3%, Estriol 0.3%, Lipoic Acid 5%, Vit C Ester 5%** in a cream. Male version no estriol. Custom blends by volume. Want a sample?"; "Info sent — samples by end of next week"; N: "Have you met **Olivia**? Co-owner for NAKED"; "Gonna put you in a group chat w her — Esti-skin background" |
| `IMG_0811` | iMessage (group chat: René + Olivia) | N: "Rene, great meeting you today, learning more about **Mills Pharmacy**. Included Olivia, founder of NAKED. Exploring pharmacy support for **GLP-1s, peptides, HRT, and topical medications**…"; "we'd love to try the CoQ10 1% skincare formulation"; `[VENDOR2-REP]`: "Hi Olivia!… sent info to Dr Crawford… submitted sample requests, deliver to Bloom by end of next week" |

### Channel 1 — `provider_to_knox_screenshots/` — ⛔ OWED (2 threads: `thread_1_clomiphene/`, `thread_2/`)
### (REF) `reference_artifacts/` — ⚠️ appear in-channel (BLVD catalog, AutoPilot, labs, consent, signage); standalone drops owed.

---

## §2 — Reconstructed threads (de-identified; verbatim where legible)

### (Ch1) provider ↔ Knox/ChatGPT — parallel AI loop (TWO threads)  *(layer: `captured_interpretation_nonbinding`)*
> ⛔ OWED. `thread_1_clomiphene/` + `thread_2/` (topic TK) not yet dropped.

### (Ch2) provider ↔ Olivia (co-owner) — BLVD catalog + pricing + consent build  *(layer: `raw_source`, de-identified `[CO]`)*
> `[CO]` = Olivia (co-owner). See §1 Ch2 rows for the move-by-move. **Keeper physics:** the operator **builds a governed catalog off-platform by texting a co-owner** — service categories (Men's/Women's Hormone, Medical Weight Loss, Peptide Performance & Recovery, Comprehensive Wellness), standard pricing ($149/$99; $199/$149), an Rx price menu (enclomiphene/testosterone/hCG/semaglutide/tirzepatide with explicit $ + "noncommissionable / hidden from online purchase" flags), and consent artifacts (NAKED male-hormone consent) — all triggered by **"get `[PT-DAN]` into the system + charged so I can send his Rx."** ⚑ `[PT-DAN]` = Dan Harris (`EVSRC-000279` TRT patient); his labs are pasted in (nested screenshot) → PHI. **Pricing doctrine specimen:** "we will not create a separate public 'prescription fee'; any waived consult still entered at full price with a documented courtesy discount so Boulevard reflects the actual service value" (catalog-integrity / discount-lineage — cf. Dan-run `DTP-15`/`DTP-17`).

### (Ch3) provider ↔ Caleb (Cache Valley pharmacy) — sourcing / formulary / pricing / billing  *(layer: `raw_source` `[RXREP]`)*
> ⚠️ **Same conversation as `EVSRC-000280` Channel D** (see that packet §2D for the full de-identified reconstruction). Keeper beats: 1st-order failure ("looking for a GLP instead") → fixed; enclomiphene economics ($1.56/pill → $140.40/90-day → $349/$399 retail; "plug into your AI assist"); GHK-CU/retatrutide gated on FDA Jul 23–24 committee; clinic-vs-patient billing ("no charge to clinic" on `[PT-TRENT]`'s Rx); pricing to be loaded via **AutoPilot**.

> **(Ch3-call) phone call** — ⛔ OWED (thread shows "Can I call you later?"). Reconstruct if it occurred (`operator_reconstructed_nonbinding`).

### (Ch4) provider ↔ René Caruso / Mills Pharmacy — second vendor, topical/skincare  *(layer: `raw_source` `[VENDOR2-REP]`)*
> `[VENDOR2-REP]` = René Caruso (Mills Pharmacy). See §1 Ch4 rows. **Keeper physics = MULTI-VENDOR sourcing:** a *second* compounding vendor (Mills) for **topical/skincare** (CoQ10 1% / DMAE / Estriol / Lipoic Acid / Vit C Ester creams; custom blends by volume), alongside Cache Valley (GLP-1/hormones/peptides). Operator **onboards a vendor + brings the co-owner into a group chat** ("exploring pharmacy support for GLP-1s, peptides, HRT, and topical medications"). Sharpens vendor-comparison + per-vendor incentive-lineage (`DTP-17`) + Federation/multi-vendor sourcing physics. Non-PHI (commercial), but vendor identities mask on promotion.

### (REF) reference artifacts — BLVD catalog / AutoPilot / labs / consent / signage
> Captured **inside** Ch2/Ch3 (see inventory). Standalone `reference_artifacts/` drops still OWED if cleaner copies exist.

---

## §3 — PHYSICS DECOMPOSITION frame (deferred → `EVRUN-2026-000010`)
Candidate physics (propose-only; reuse Dan-run `DTP-*`): governed home for **product-catalog / service / price-menu** truth (D6) · **formulary as first-class object** (per-vendor) · **catalog-build authority** (operator texts co-owner to build BLVD — who commits?) · **co-owner shared authority** (RBAC / tenant-ownership) · **MULTI-vendor sourcing + comparison + per-vendor incentive lineage** (Cache Valley vs Mills; `DTP-17`) · **vendor onboarding + group-chat coordination** (§C GCE) · **discount/waiver lineage** ("full price + documented courtesy discount", "noncommissionable / hidden") · **in-thread catalog/price mutation** (`DTP-03`) · **AutoPilot / BLVD as displaced governed surfaces** · **supply-side → demand-side continuity** (this build is the commerce tail of the Dan/TRT `279` case). See `EVRUN-2026-000010_00_run.md`.

---

## §4 — Cross-links + owed artifacts
- **★ Tight link to `EVSRC-2026-000279` (Dan/TRT):** this case is the **commerce/operational tail of the Dan/TRT episode** — `[PT-DAN]` = Dan Harris; the enclomiphene 12.5mg $349/90-day enrollment + "get Dan into system + charged + send Rx" is the fulfillment of 279's care decision. Cross-link (do NOT merge; 281 = supply-side build, 279 = the care episode).
- **⚠️ Cache Valley (Ch3) duplication:** the same Caleb conversation is captured in BOTH `EVSRC-000280` (Channel D) and here (Ch3). Both legitimately reference Cache Valley sourcing; treat as the same underlying thread (do not double-count in analysis). The analyst may pick one as canonical + cross-reference.
- **Family:** companion "supply-side" specimen to `EVSRC-000280` (demand-side multi-channel care→commerce, patient Mike) + the Dan/TRT series (`251`/`279`). Shares cast (Olivia, Caleb/Cache Valley, Trent, Dan).
- **Vendor 2 identified:** Mills Pharmacy (René Caruso); folder renamed `provider_to_vendor2_mills_screenshots/` 2026-07-17.
- **Analysis:** `EVRUN-2026-000010` (skeleton ready; boot fresh agent).
- **Owed:** Ch1 Knox (2 threads); Ch3 phone-call reconstruction; standalone `reference_artifacts/`; evidence-ledger row `D0UOR-EVD-005` (ADDED 2026-07-17); catalog/read-graph if promoted-significant. **PII/PHI quarantine** (`[PT-DAN]` labs + name; `[PT-TRENT]` Rx UUIDs) — open governance action.
- **Re-lane watch (`GRD-037`):** if this becomes a *vendor/integration* teardown (AutoPilot / Mills / Cache Valley ordering APIs), part may re-lane to `vendor_integration_evidence/` — decide at analysis; keep the operator/co-owner behavior here.
- **Posture:** Evidence-Plane capture only. Care-forensic freeze respected (propose-only; promotes nothing — `GRD-036`). Pre-spine / pre-v4 hard stop honored.

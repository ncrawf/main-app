# OMNI Foundational Architecture — substrate that admits all dimensions

**Status:** working-draft long-form rationale source. The binding architectural commitments have been **reconciled into the canonical MAIN system map** at [`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md) as **Doctrine locks DL-1 through DL-9** + **Section 1W: Tracked clinical objects + procedure / intervention lifecycle**. This document remains the long-form rationale, pressure-test, and primitive / sibling enumeration source; it does not bind by itself.

**Reading order:** for binding architectural decisions, read MAIN's Doctrine locks + Section 1W first; consult this document for rationale, the 12-procedure pressure-test grid (§6.5), the 21-substrate-primitive enumeration (§4), the 18-sibling enumeration (§5), the 20 ontology traps (§9), the dimensional matrix (§3), the four-layer epistemic model (§7), and the §13 execution plan. The §11.0 crosswalk table maps every element here to its binding home in MAIN.

**Provenance:** consolidates the c1–c9 4H-templates-discipline arc + the 2026-05-10 mega-pressure-test session + the 2026-05-11 reconciliation pass. Supersedes the v1 pressure-test plan at `omni_continuity_platform_pressure_test_74081494.plan.md`.

---

## 1. Premise (binding)

OMNI is **continuity-native operational substrate for healthcare** — infrastructure that admits **elite-class depth in every operational domain it activates**, unified through one continuity graph + one AI orchestration runtime, instead of leaving clinics to stitch together five-to-ten disconnected best-in-class tools (Mindbody + Shopify + Hims-style intake + ActiveCampaign + Klara + RingCentral + Athena lab module + Aesthetic Record + Quest + Stripe + ...).

**The substrate does not ship shallow versions of activated domains.** When a domain is activated for the wedge workflow, the depth bar is best-in-class for the workflow served. **For the wedge clinic, activation is Day 0. Not incremental. Not "we'll get there."** A wedge clinic running today on Mindbody (scheduling) + Shopify (POS / packages / memberships) + Hims-style intake + ActiveCampaign (lifecycle marketing) + Klara/RingCentral (communications) + Athena lab module (labs) + outpatient EMR (charting / problem list / clinical decisions) should be able to switch to OMNI on Day 0 and not lose any operational depth. They gain integration. They do not lose features. **That is the bar.**

The moat is not less depth — it is **domain-grade depth integrated through the continuity graph + orchestration runtime that no single best-in-class tool offers**.

Depending on activation depth, OMNI may **replace, integrate with, or orchestrate around** best-in-class external tools. The invariant: **continuity, provenance, and operational state resolve inside one graph**.

**Epic is not the bar.** The wedge clinic does not need hospital-grade EMR (inpatient orders, hospital-floor coordination, ICU monitoring, ED triage). The wedge clinic needs **outpatient EMR depth** — clinical visits, notes, problem list, labs review, clinical decisions, signoffs — at the depth a real medspa / peptide / HRT / longevity / derm-cosmetic / hormone clinic actually practices. That's what the substrate must support on Day 0.

Wedge clinic profile: high-margin specialty / outpatient clinic ($600k+/month revenue) running longitudinal care of meaningful complexity — peptide / HRT / longevity / hormone optimization / derm-cosmetic / medspa / procedural specialty. They pay $5–10k/month for OMNI because today they spend $30k+/month on a fragmented stack PLUS coordinator headcount duplicating manual reconciliation work that exists ONLY because the tools don't talk. **OMNI replaces the integration tax, not the depth.**

The substrate operates on five binding doctrines:

1. **Small primitive set.** 21 substrate primitives + 18 sibling domains + 3 architectural tiers. Substrate stays small.
2. **Large workflow universe.** Every workflow a real specialty / outpatient clinic runs decomposes through the universal flow grammar (§1.7) into the small primitive set.
3. **Activated domains ship deep, not toy — on Day 0.** When a domain is activated for the wedge workflow, the depth bar is best-in-class for that workflow on Day 0. Mindbody-class scheduling, Shopify-class commerce, Hims-class intake, ActiveCampaign-class lifecycle marketing, Klara/RingCentral-class communications, Athena-lab-module-class labs, outpatient-EMR-depth charting. Not incremental. No shallow versions.
4. **Integration is the moat.** Continuity graph + AI orchestration runtime + universal flow grammar across every activated domain — no single best-in-class tool offers this.
5. **Future-market admissibility is not a roadmap commitment; it is an architectural non-foreclosure commitment.** If we choose to extend toward inpatient / hospital-floor / ICU / ED workflows later — or to deepen any current domain further in any direction — the substrate's primitives admit that extension via §1.8 admission criteria. **No future market is forbidden by doctrine.** Wedge focus is current discipline, not depth restriction.

The substrate must equally admit every operational dimension below — DTC telehealth, in-clinic, hybrid, procedural specialty, surveillance specialty, aesthetic / cosmetic medicine, multi-specialty group, concierge, fertility, longevity, hormone optimization, medspa-evolving-into-procedural-medicine. The wedge customer is a separate go-to-market track that does NOT gate substrate work and does NOT influence substrate ontology.

This is not a roadmap commitment for un-activated domains. **For the wedge clinic's activated domains, Day 0 is the depth commitment.** Every architectural decision evaluates against "does this admit every cell of the dimensional matrix at full operational depth without inventing a specialty-specific primitive?" — not "does this serve the current wedge?"

The clinic-facing app is the deliverable; OMNI is the asset. The asset is the **continuity graph + governance substrate + AI-orchestration runtime + cross-channel communications lineage + structured intervention layer + tracked clinical objects + charge / revenue lineage + universal flow grammar — at domain-grade depth where activated, integrated across the whole stack**.

---

## 1.5 Wedge scope boundary (binding — discipline, not market prohibition)

The substrate's current operational shape is **outpatient / specialty / longitudinal continuity care**. That is wedge focus — discipline, not market prohibition.

**Out of current scope (substrate not currently optimized for):**

- Inpatient bed management, hospital-floor coordination, ICU monitoring, ED triage. Different operational shapes, different state machines, different actors, different timing. Activating these would require substrate extension via §1.8 admission criteria.
- **Hospital-grade EMR (Epic / Cerner enterprise depth).** The wedge clinic does not need this. The wedge clinic needs outpatient charting / problem list / clinical decisions / labs review at the depth a real specialty-outpatient clinic practices — NOT hospital-grade orders, inpatient flowsheets, ICU monitoring, ED triage. **Epic is explicitly NOT the bar.**

**In current scope, ship at Day 0 elite-class for the wedge workflow:**

- **Scheduling / resource coordination** — **Mindbody-class on Day 0** for the medspa / outpatient / procedural workflow it serves. Provider calendars + room/suite/equipment + multi-resource bookings + prep dependencies.
- **Commerce / retail / memberships / packages** — **Shopify-class on Day 0** for catalog, packages, memberships, point-of-sale, multi-rail settlement.
- **Intake / eligibility / structured history** — **Hims-class on Day 0** for high-grade structured clinical intake (atomization per §7 four-layer model).
- **Lifecycle marketing / engagement** — **ActiveCampaign-class on Day 0** for journeys, attribution, consent-bound sends.
- **Communications / escalation / cross-channel continuity** — **Klara / RingCentral-class on Day 0** (multi-channel, multi-endpoint, AI-assisted).
- **EMR / charting / clinical decisions** — **outpatient-EMR depth on Day 0** for visits, notes, problem list, labs review, clinical decisions, signoffs as practiced by a medspa / peptide / HRT / longevity / derm-cosmetic / hormone clinic. **NOT hospital-grade. NOT Epic. Outpatient depth.**
- **Diagnostic lifecycle (broad)** — **Athena-lab-module-class on Day 0** for labs, pathology, imaging, sleep studies, PFT, ECG, stress testing, urodynamics, colposcopy, EEG, OCT, audiogram, joint aspiration, and the broader specialty-test universe enumerated in §6.6. **Athena-lab-module-class means OMNI is the authoring system for in-office diagnostic acquisition** — native structured templates for c-scope / sleep / PFT / ECG / stress / urodynamics / colposcopy / EEG / OCT / audiogram interpretation; in-office device artifact import for PFT / ECG / ultrasound / endoscopy capture; AND reconcile-and-attach for outside results via substrate primitive #16. **Three lanes (plus hybrid), one continuity graph.** Owned tests are authored, not merely ingested. Per binding sub-doctrine §5.2 + DL-9 in MAIN. Order → acquisition → interpretation → communication → tracked-object update → recall.
- **Billing / charge lineage** — cash-pay + subscription + package + intervention-derived charge lineage at full operational depth on Day 0. (Future RCM / claims / payer / ERA / EOB / AR reserved per `revenue_cycle/` sibling — not Day 0.)
- **Inventory / lot / expiry / point-of-care consumption** — full lot tracking + expiry + vendor sourcing + point-of-sale dispense on Day 0.
- **Procedures / structured interventions** — procedure episodes + intervention capture + downstream inventory / charge / note derivation per §7.6, on Day 0 for procedural-specialty wedge workflows.
- **Tracked clinical objects / surveillance / recall** — longitudinal findings, recall, object identity, evidence + assertion lineage per §7 + §7.5, on Day 0 for surveillance-specialty wedge workflows.
- **External-system ingest / document routing** — inbound artifacts from labs, imaging, ASC EMRs, pathology, fax, referrals, vendor systems, scanned consents — substrate primitive #16, Day 0.
- **Referrals / cross-org loop closure** — outbound referrals, inbound result return, packet handoff, status tracking — Day 0.
- **Vendor / partner coordination** — first-class vendor / partner interaction primitives — Day 0.
- **Clinical coding / documentation rendering** — codes and notes as derived / rendered artifacts from structured state per §7.7 — Day 0.
- **AI orchestration over the continuity graph** — bounded-but-real AI runtime; provider authority gating; AI-as-actor with audit + capability + disclosure-policy + consent — Day 0.

**Forward optionality preserved.** If we choose to extend toward inpatient / hospital-floor / ICU / ED workflows later, or to deepen any currently-activated domain further (e.g., toward enterprise scheduling, full RCM payer integration, or hospital-grade EMR), the substrate's primitives admit that extension via §1.8 admission criteria. **Future-market admissibility is not a roadmap commitment; it is an architectural non-foreclosure commitment.** No future market is forbidden by this doc. The substrate stays small; any depth extension goes through admission criteria.

**Examples are representative, not exhaustive.** Specialty test / procedure / workflow examples named here and throughout this document (Botox, c-scope, sleep study, PFT, ECG, stress test, urodynamics, colposcopy, EEG, OCT, audiogram, joint aspiration, RFA, etc.) are **representative across the wedge specialty universe — not a comprehensive enumeration**. The substrate must admit the full ~50-shape register in §6.6 (covering urology, cardiology, pulmonology, gynecology, endocrine, neurology, ophthalmology, ENT, allergy/immunology, rheumatology, wound care, pain management) **without new primitives**, demonstrating non-foreclosure across 12+ specialty categories per DL-6 + DL-8. If a future use case is named that does not appear in §6.6, the test is the same: does it compose from existing primitives + the existing sibling reservations + DL-9 producer lanes? If yes, admit. If no, run §1.8 admission criteria — do not invent specialty-specific primitives by default.

---

## 1.6 Primitive extraction doctrine (binding)

OMNI is intentionally designed against hundreds of possible outpatient, specialty, procedural, diagnostic, and surveillance workflows. The design method is NOT to bolt on specialty-specific objects whenever a use case is named. The design method is to **extract universal primitives from named use cases and force every workflow to compose from those primitives**.

A named specialty or procedure can appear in this document only as:

1. a **pressure-test vector** — proves the substrate primitive set is complete;
2. a **specialty overlay** — composes substrate + siblings into a specialty-shaped UI / workflow / configuration;
3. an **example of primitive composition** — shows how the universal grammar absorbs the workflow;
4. or a **rejected anti-pattern** — explicitly named as forbidden.

It cannot become a substrate primitive merely because it exists in the real world.

**The universe of supported workflows is broad. The universe of substrate primitives stays small.** Named specialties and procedures are pressure-test vectors, not primitive names.

---

## 1.7 Universal flow grammar (binding)

Every operational workflow in OMNI decomposes into the same grammar:

```
intent
  → eligibility / context
  → scheduling or async review
  → encounter / procedure / acquisition
  → intervention(s)
  → tracked object update(s)
  → evidence / artifact generation
  → interpretation / assertion
  → documentation rendering
  → billing / charge lineage
  → communication
  → task / recall / continuation
  → repeat
```

This grammar represents GLP-1 follow-up, Botox session, Mohs, colonoscopy, HRT lab review, cortisone injection, IV infusion, sleep study, PFT, skin lesion surveillance, cardiac cath follow-up, pulmonary nodule monitoring, fertility cycle monitoring, peptide clinic continuation, longevity panel review, allergy shot series, and any future workflow without specialty-specific extension.

If a workflow cannot decompose into this grammar, either (a) a primitive is missing and must pass §1.8 admission criteria, or (b) the workflow belongs in an overlay, not the substrate. **The grammar is the test.**

---

## 1.8 Primitive admission criteria (binding rule)

**Rationale (descriptive criteria).** A candidate substrate primitive is worth examining only when the following descriptive properties hold: the state **recurs** across multiple specialties or care models; it carries **longitudinal identity, operational state, provenance, or future obligation**; it is **expensive to retrofit later** (changing it post-scale would touch many siblings or operational surfaces); and it cannot be **represented cleanly by existing primitives** without loss of continuity, provenance, or operational control. These properties describe the *shape* of legitimate primitive candidates.

**Canonical 4-condition admission test (operational; binds MAIN's DL-8 and §2.1 definition table; the §6.6 specialty register's closing paragraph applies the same test).** A substrate primitive is admitted only when ALL four conditions hold:

1. The primitive is **referenced by ≥3 sibling domains**.
2. **No existing primitive can model it** without violating discriminant or sibling locality.
3. The primitive has a **stable identity contract independent of any single workflow**.
4. The primitive has a **defensible read-authority and write-authority boundary**.

The two formulations describe the same gate from two angles — the rationale identifies *which candidates deserve the test*; the four-condition test is the *operational pass/fail evaluation* that MAIN's DL-8 binds. When in doubt, the canonical 4-condition test above is the binding version.

A use case may force a **sibling** only when the required state recurs across multiple care models AND has its own state machine.

A use case may force an **overlay** when specialty-shaped composition is needed without new ontology.

Otherwise, the use case is a **pressure-test vector** — not a substrate change.

This is the anti-randomness rule. It is what keeps OMNI broad-in-scope without becoming infinite-in-substrate.

---

## 2. Three architectural tiers (binding)

- **Substrate primitives** — cross-cutting infrastructure every sibling depends on. Substrate is NOT a sibling; modeling one as a sibling is a category error.
- **Operational sibling domains** — first-class operational domains under Patient. Each owns its own payload discriminant per ADR §7.7. Discriminants do not leak across siblings per ADR §7.8.
- **Specialty overlays** — compositions of substrate primitives + operational siblings, packaged for specialty-shaped workflows. Overlays are NOT siblings. Substrate must admit them; substrate does not encode them. Without the overlay tier, future contributors will either (a) make every specialty workflow a new sibling (collapse) or (b) make universal siblings carry specialty knowledge (poison). Both forbidden.

### 2.1 Definition table (terminology normalization across foundational doc + MAIN)

*This table is the canonical glossary for terms used in this document and in the MAIN system map's Doctrine locks + Section 1W. When a term is referenced from MAIN, the binding definition lives here; long-form rationale lives in the named section below.*

| Term | Binding definition | Where defined long-form | Where bound in MAIN |
|---|---|---|---|
| **Substrate primitive** | Cross-cutting infrastructure every sibling depends on. Not a sibling; not a workflow; admitted only via §1.8 admission criteria. | §1.6 + §4 | DL-1 (substrate-vs-operational distinction) |
| **Operational sibling domain** | First-class operational domain under Patient. Owns its own payload discriminant; does not nest under another sibling. | §5 | DL-2 (patient-rooted siblings) + DL-3 (sibling-local discriminants) |
| **Specialty overlay** | Composition of substrate primitives + operational siblings, packaged for specialty-shaped workflows. Not a sibling; not infrastructure. | §2 + §6.5 (worked examples) | DL-8 (universal flow grammar — overlays compose from grammar, never new primitives) |
| **Tracked clinical object** | Durable clinical object (rhytid, hypothyroid management problem, lipid problem, screening cadence) tracked longitudinally. Layer 1 of the four-layer epistemic model. Foundation primitive — not a sibling. | §1.6 + §7 + §8 | DL-7 + Section 1W (canonical home in MAIN) |
| **Clinical assertion atom** | Typed epistemic claim about a tracked object at a point in time. Layer 2 of the four-layer model. Append-only; supersession via pointer. | §7 + §8 | DL-7 + Section 1W.2 |
| **Diagnosis entity** | Codable interpretation (E03.9 hypothyroidism, L98.8 skin disorder) of a tracked object + its assertions. Layer 3 of the four-layer model. | §7 | DL-7 + Section 1W.2 |
| **Billing artifact** | Financial representation derived from interventions on tracked objects. Layer 4 of the four-layer model. | §7 + §8 step 6 | DL-7 + Section 1W.2 + Section 1W.9 (`revenue_cycle/` consumption) |
| **Universal flow grammar** | The 13-step decomposition (intent → eligibility → scheduling → encounter / procedure → intervention → tracked-object update → evidence → interpretation → documentation → billing → communication → task / recall → repeat) every operational workflow on the platform follows. | §1.7 + §6.5 worked grid | DL-8 + Section 1W.6 (8-layer continuity chain — the operational projection of the grammar) |
| **Primitive admission criteria** | Four binding conditions for admitting new substrate primitives: (1) referenced by ≥3 siblings; (2) no existing primitive can model it without violating discriminant or sibling locality; (3) stable identity contract independent of any single workflow; (4) defensible read-authority + write-authority boundary. | §1.8 | DL-8 |
| **Producer-site transitional locality** | Approved pattern where the type system encodes the correct sibling-domain architecture even though runtime wiring temporarily lives on a legacy producer surface. Tagged with explicit "PRODUCER-SITE TRANSITIONAL LOCALITY" comments + radar tracking. | ADR §7.5 + radar zones 27–28 | DL-4 |
| **Anti-overload binding pattern** | Codified four-place pinning (rule header / template header / producer comment / preflight) for ontologically-overloaded English words (e.g., "denied", "approved", "cancelled") that otherwise leak meaning across siblings. | ADR §7.8 | DL-3 (sibling-local discriminants — the anti-overload pattern is the operational expression) |
| **Structured-first authoring + note-as-rendered-output** | Binding authoring discipline: providers author structured interventions; notes are rendered from that structured state, not vice versa. | §1.6 + §8 step 7 | DL-7 + Section 1W.7 |
| **Day 0 elite-class depth** | When a sibling domain is activated for a workflow, the substrate must admit it at Mindbody-class scheduling, Shopify-class commerce, Hims-class intake, ActiveCampaign-class marketing, Klara/RingCentral-class communications, Athena-lab-module-class lab handling, outpatient-EMR-class charting depth. Epic-grade hospital EMR is explicitly not the bar. | §1 + §1.5 | DL-5 |
| **Substrate non-foreclosure** | Architectural commitment that the substrate must remain admissible across every dimension of the dimensional matrix (§3) without rewrites. Distinct from a roadmap commitment. | §1 + §3 | DL-6 |
| **Activated sibling** | A sibling domain that has its first concrete migration landed. **For the wedge clinic, activated domains carry Day 0 elite-class depth per DL-5** (Mindbody-class scheduling, Shopify-class commerce, Hims-class intake, ActiveCampaign-class lifecycle marketing, Klara/RingCentral-class communications, Athena-lab-module-class diagnostics, outpatient-EMR-depth charting). Activation order across domains is sequenced operationally; once a domain activates for the wedge, depth is not incremental. | §1 + §5 + §13 execution plan | DL-5 (activation gate) |
| **Reserved sibling** | A sibling domain enumerated in §5 with a folder reservation but no concrete migration yet. Reserved siblings stay at substrate-primitive / sibling-folder reservation level until activated. | §5 + §12 | DL-5 (reserved status) + Section 12.A reservation |

---

## 3. Dimensional matrix (the cells substrate must accommodate)

| Axis | Equally-admitted values |
|---|---|
| Care delivery model | DTC telehealth · in-clinic · hybrid · procedural-day · concierge · multi-specialty group · medspa · surgery-center coordination |
| Clinical shape | episodic visit · longitudinal surveillance · procedural episode · subscription pharmacy · acute / urgent · screening / preventive · aesthetic recurring |
| Provider topology | single-provider · multi-provider collaborative · care team (proceduralist + consultant + primary + covering + MA + coordinator + injector + aesthetician) · cross-org referral |
| Revenue model | cash-pay · insurance-billed · subscription · hybrid · DTC retail · concierge membership · per-procedure · package |
| Communication ingress | outbound-only · inbound SMS · inbound voice · inbound fax · inbound email reply · portal message · scanned upload |
| Communication endpoints | single brand inbox · per-department · per-specialty · per-provider · per-location · AI-operated endpoint |
| Scheduling depth | provider-only · provider + room · provider + room + equipment · multi-suite · cross-facility · surgery-center · device + technician |
| Identity scope | single org · multi-brand within org · multi-org with shared patient · cross-org referral with packet handoff |
| Patient role | episodic patient · longitudinal patient · subscription member · returning post-procedure patient · surveillance cohort · recurring aesthetic patient |
| Operational data ingress | structured intake · OCR fax · uploaded PDF · imaging DICOM · pathology report · lab result · device telemetry · vendor webhook · point-of-sale |
| Procedural category | operative · therapeutic · diagnostic acquisition · surveillance · interpretive · device · multi-category (e.g., colonoscopy = operative + diagnostic + surveillance) |

The c1–c9 build delivers **one cell**: DTC telehealth + episodic + single-provider + subscription + outbound-only + provider-only + single-org + episodic-patient. That is one cell, not the substrate's intended shape.

---

## 4. Substrate primitives (21)

Substrate primitives are cross-cutting infrastructure every sibling depends on. They are NOT siblings; modeling one as a sibling is a category error. Each primitive admits per §1.8 admission criteria. Primitives 1–15 carry forward from prior doctrine; primitives 16–21 are added by this document based on the primitive-extraction audit.

| # | Primitive | What it owns | Status |
|---|---|---|---|
| 1 | Audit + lineage | append-only audit_events; typed catalog; cross-system provenance | Built |
| 2 | Authority + capability | requireCapability discipline; staff_profiles + role bundles + capability grants; SensitiveAccessReason | Built |
| 3 | Disclosure-policy | tier_1/2/3/4 privacy; channel-specific clamps; pathway sensitivity. **Distinct from consent (#21).** Disclosure-policy gates outbound communication; consent gates clinical operation performance. | Built (engine + clamps) |
| 4 | Multi-tenant primitives | orgs + brands + locations; current_org_id() RLS; data_environment dispatch gate | Built (orgs/brands/data_env); locations partial; cross-org reserved |
| 5 | Patient identity (cross-channel, cross-org) | patient_id as universal handle; phone/email/portal-login as identity claims; future cross-org matching | Built (patient_id); cross-channel + cross-org partial / reserved |
| 6 | Longitudinal operational memory | patient_timeline_events; reconciled views (Section 1K.5.A); longitudinal evidence linking | Built (timeline + reconciled view); evidence linking reserved |
| 7 | Idempotent orchestration | SECURITY DEFINER orchestrators; idempotency_key discipline | Built |
| 8 | Pathway sensitivity | pathway_code + pathway_sensitivity primitive; clamps; future cross-pathway resolution | Built |
| 9 | Typed event catalog | audit_events.action + patient_timeline_events.event_type + RuleTrigger.event_type, separated by concern; CI lint | Built |
| 10 | Communication rails | email · SMS · in-app · voice · fax · push · portal — channels feeding outbound_jobs / patient_inbox_messages | Built (email, SMS, in_app); voice + fax + inbound rails reserved |
| 11 | AI orchestration runtime | bounded LLM/embedding execution; provider authority gating; AI-as-actor with audit + capability + disclosure-policy + consent | Reserved |
| 12 | Recall / surveillance primitive | scheduled future obligations attached to patient + finding/case/program; materialization-into-task-when-due; missed-recall escalation; provenance | Reserved (substrate, NOT a sibling) |
| 13 | Typed Rule + Template registry + DELETE-AFTER-PARITY discipline | repo/rules/, repo/templates/, anti-overload binding (ADR §7.8), scaffold lint check 5 | Built |
| 14 | Specimen / artifact chain-of-custody | longitudinal lifecycle for physical specimens (biopsy, lab samples, pathology slides) + digital artifacts (DICOM, OCR'd PDFs, photos); collected → labeled → sent → resulted → reviewed → communicated → closed | Reserved |
| 15 | Body-map / anatomical anchor | coordinates + laterality + region; used by tracked findings, interventions, photo media, clinical documentation; cross-cutting | Reserved |
| 16 (NEW) | **External-system ingest** | reconcile-and-attach pipeline for inbound artifacts from external systems: ASC EMR result PDFs, outside imaging reports, outside lab results, fax inbound, OCR'd consent forms, pathology PDFs, vendor-system webhooks, prior-record packets from referrals. Cross-cutting; substrate-shaped. **Not a sibling.** Used by labs_lifecycle, referral_lifecycle, procedure_lifecycle, clinical_finding, revenue_cycle, communications_lifecycle, and charting/documentation surfaces. Future contributors must NOT carve it into `external_documents_lifecycle/`, `fax_lifecycle/`, `asc_results_lifecycle/`, or `integration_lifecycle/`. Every inbound external source goes through this one substrate primitive. | Reserved |
| 17 (NEW) | **Encounter** | clinical contact event: in-clinic visit, telehealth call, async chart review, message-triggered review, post-op follow-up call, vendor-handoff review. Container for procedures + interventions + observations + decisions + communications. Distinct from appointment (intent), distinct from procedure_episode (procedural arc). The encounter is the operational session in which the procedural arc occurs. Cross-cutting; recurs across every sibling. | Reserved |
| 18 (NEW) | **Plan / protocol** | future-directed structured intent: cadence, criteria, escalation rules. Owns: GLP-1 titration plan, post-Mohs surveillance schedule, infusion protocol, refill cadence, post-op care plan, hormone dose-adjustment protocol, peptide-cycle protocol. Distinct from recall (#12) — recall is one obligation; plan is the rule-set that *generates* recalls. Distinct from typed Rules (#13) — Rules are governance / orchestration policy; Plans are clinical / operational protocols attached to patients + tracked objects. | Reserved |
| 19 (NEW) | **Continuity relationship** | ongoing patient-system-clinician relationship over time. Owns: relationship status (active / disengaged / lost-to-followup / churned), provider continuity (this patient sees Dr. X for hormone, Dr. Y for derm), patient role (subscription member / longitudinal / episodic / surveillance cohort), care-arc start/end. Distinct from patient identity (#5) which is the row; continuity relationship is the longitudinal arc on top of identity. The Hims-ethos primitive — without this, the system can't represent the difference between "this patient" and "this patient's ongoing relationship with our clinic over 5 years." | Reserved |
| 20 (NEW) | **Vendor / partner interaction** | transactional state with external parties. Owns: pharmacy vendor account state, lab vendor account, ASC partnership credentialing, imaging-center contract, payment processor account, telephony vendor account, referral-partner relationship. Distinct from external-system ingest (#16) — ingest is artifact-flow (we receive a thing); vendor interaction is account / contract / credentialing / on-time-rate / rate-card / integration state. | Reserved |
| 21 (NEW) | **Consent / authorization** | legal permission boundary for clinical operations: procedure consent, photo consent, records release, financial responsibility, anesthesia consent, pathology consent, photo-use-for-marketing, telehealth consent, AI-rendering consent. Split from disclosure-policy (#3) because the two govern different domains: disclosure-policy clamps outbound communication, consent gates clinical operation performance. A photo-use-for-marketing consent does not gate communication; a disclosure-policy clamp does not gate procedure performance. | Reserved |

**External-system ingest binding (specific):** when an outpatient proceduralist does a procedure at a surgery center, OMNI does NOT replace the ASC EMR. OMNI ingests the report/result/note via primitive #16 and maintains longitudinal continuity over it. Same pattern for outside cardiology imaging, outside pulm sleep studies, outside derm pathology, outside referrals returning records, outside primary-care notes from a Hims-style continuity care patient who later sees a specialist. The ingest pipeline is governance-bound: artifacts have provenance + identity-matched-to-patient + linked-to-operational-object + audit.

**Substrate primitive count: 21.**

---

## 5. Operational sibling domains (18)

### Active (5)

| Sibling | Discriminant | Owns |
|---|---|---|
| `account_lifecycle/` | `account_event_kind` (when extended) | identity verification, patient onboarding, account state |
| `billing_subscription/` | `billing_event_kind` (when extended) | synchronous PSP transactions, subscriptions, refunds, dunning |
| `clinical_decision/` | `case_kind` | provider clinical decisions on treatment requests / care programs |
| `fulfillment_lifecycle/` | `order_kind` | orders that ship from vendor/pharmacy to patient (treatment_order, supplement_order, lab_kit_order) |
| `pharmacy_lifecycle/` | `pharmacy_event_kind` | prescription dispatch, refill initiation, future fill/dispense events |

### Reserved by prior doctrine (7)

| Sibling | Discriminant | Owns |
|---|---|---|
| `scheduling_lifecycle/` | `scheduling_event_kind` | provider calendars · room/suite/equipment scheduling · surgery-center coordination · multi-resource bookings · prep dependencies |
| `labs_lifecycle/` | `lab_event_kind` | **Despite the historical name `labs_lifecycle/`, this sibling covers diagnostic acquisition + interpretation artifacts broadly: labs, pathology, imaging (X-ray, MRI, CT, ultrasound), sleep studies, PFTs, ECGs, stress tests, biopsy-derived results.** Sibling rename is deferred indefinitely; the doctrine name does the binding work. **Two sub-shapes within the sibling:** (a) **acquisition lifecycle** — order placed → specimen collected / study performed / image captured → result returned → reviewed → communicated → linked to tracked object / plan; (b) **interpretive workflow** — provider work on the acquisition artifact: radiology read, pathology read, sleep-study interpretation, PFT interpretation, ECG interpretation. Both sub-shapes share the same sibling because their lifecycles intersect (interpretation feeds the same result-review-communication pipeline). |
| `provider_tasking/` | `task_kind` | provider/staff operational tasks; queues; SLAs; escalation; ownership |
| `communications_lifecycle/` | `comm_event_kind` | multi-channel inbound + outbound; cross-channel thread continuity; per-endpoint routing; AI-endpoint operation |
| `retail_lifecycle/` | `commerce_event_kind` | non-Rx retail (supplements, OTC, devices, in-clinic point-of-sale) distinct from clinical orders |
| `marketing_lifecycle/` | `marketing_event_kind` | re-engagement journeys, lifecycle campaigns, attribution, consent-bound sends |
| `clinical_record/` | n/a (rendered surface) | charting + notes + problem list + addendums; rendered FROM substrate primitives + sibling state, not authored independently |

### Reserved by this amendment (6 new)

| Sibling | Discriminant | Owns | Why distinct |
|---|---|---|---|
| `clinical_finding/` | `finding_kind` (`dermatology_lesion`, `pulmonary_nodule`, `gi_polyp`, `orthopedic_joint`, `aesthetic_dynamic_rhytid_track`, `aesthetic_volume_loss_zone`, `surveillance_marker`, ...) | longitudinal entity identity for tracked clinical objects (mole, nodule, polyp, joint, lesion, photo set, rhytid track, filler zone) | Without this, surveillance / aesthetic / procedural specialties have no architectural home |
| `procedure_lifecycle/` | `procedure_episode_kind` (with named variants — see §5.1 below) | procedure-as-episode: pre-op clearance + consent packet + supplies + room/equipment + provider/team + intra-procedure interventions + post-op + pathology/lab follow-up + complications + surveillance + chargeable artifacts. **Multi-category episodes admitted** — one episode can span multiple categories (colonoscopy = operative + diagnostic + surveillance) | NOT scheduling (scheduling is one input); NOT orders (orders is an output); NOT lab acquisition (which lives in labs_lifecycle) |
| `revenue_cycle/` | `claim_event_kind` | **Day 0 activation scope (per DL-5 + §1.5):** charge capture from clinical events / interventions + intervention-derived charge lineage + cash-pay receipts + subscription billing + package billing + checkout payload assembly. **Reserved-but-deferred future RCM scope (per §12.A):** ICD/CPT coding entities + claim transmission + payer adjudication + denial + appeal + ERA/EOB ingestion + AR/balances + full RCM team workflows + patient responsibility. The full sibling scope includes future RCM; the wedge clinic only activates the Day 0 charge-lineage subset. | MUST be separate from `billing_subscription/`. Async multi-party state machines vs synchronous PSP. Conflation is an ontology trap. |
| `authorization_lifecycle/` | `auth_event_kind` | eligibility verification + prior-auth requests + payer-rule lookups + auth status + expiration + appeal | Distinct from claims (gates clinical operations) |
| `referral_lifecycle/` | `referral_event_kind` | referral as object: reason + urgency + records packet + external recipient + consent + status + appointment confirmation + result returned + loop closure | Loop closure is the multi-week / often-manual operational pain that destroys continuity in real clinics |
| `inventory_lifecycle/` (NEW) | `inventory_event_kind` | lot tracking, expiry, vendor sourcing, point-of-sale dispense, in-clinic injectable / implant / device / supplement tracking, consumption from interventions | Distinct from retail commerce (which is the customer-facing transaction) and pharmacy fulfillment (which is the prescription pipeline). Cosmetic/procedural inventory has its own semantics. |

**Total siblings: 18** (5 active, 13 reserved).

### Sibling boundary discipline (binding)

Every sibling's documentation MUST name what it does NOT own with cross-references. Examples:

- `procedure_lifecycle/` does NOT own scheduling (→ `scheduling_lifecycle/`); does NOT own claim transmission (→ `revenue_cycle/`); does NOT own pathology routing (→ `labs_lifecycle/`); does NOT own consent capture (→ substrate); does NOT own inventory consumption (→ `inventory_lifecycle/`, derived).
- `referral_lifecycle/` does NOT own communications (→ `communications_lifecycle/`); does NOT own appointment booking at receiving clinic (→ that org's `scheduling_lifecycle/`); does NOT own result interpretation (→ `clinical_decision/` or `labs_lifecycle/`).
- `revenue_cycle/` does NOT own subscription billing (→ `billing_subscription/`); does NOT own retail commerce (→ `retail_lifecycle/`); does NOT own prior auth (→ `authorization_lifecycle/`).
- `inventory_lifecycle/` does NOT own customer-facing retail transactions (→ `retail_lifecycle/`); does NOT own pharmacy fill pipeline (→ `pharmacy_lifecycle/`); does NOT own procedure documentation (→ `procedure_lifecycle/`, attached as derived).

This boundary discipline is binding doctrine. Every sibling activation MUST include its boundary statement in rule + template file headers.

### 5.1 procedure_episode_kind discriminant variants (binding)

`procedure_lifecycle/` is one sibling. Internally it admits multiple operational shapes via the `procedure_episode_kind` discriminant. Each variant captures a distinct **operational episode shape**, NOT a billing category and NOT a specialty label. The discriminant axis is what the operational arc looks like, not what the clinic calls it or how the payer codes it.

| Variant | Definition | Examples |
|---|---|---|
| `operative_episode` | Physical procedural work on or inside the patient, including surgical, endoscopic, excisional, ablative, staged, and procedure-suite work. | vasectomy, rhinoplasty, Mohs, skin excision, joint surgery, hernia repair, septoplasty, colonoscopy as endoscopic operative platform, EGD, cardiac cath as interventional operative, hair transplant, capsule endoscopy, ultrasound-guided biopsy |
| `therapeutic_intervention_episode` | Non-operative therapeutic acts on the patient. | cortisone injection, Botox, filler, laser treatment, IV infusion, peripheral nerve block, chemotherapy administration, biologic infusion, allergy shot, PRP injection |
| `diagnostic_acquisition_episode` | Episodes whose primary purpose is acquiring diagnostic data. | sleep study, PFT, X-ray, MRI, CT, ultrasound, ECG, stress test, Holter monitor, pure-diagnostic biopsy. (Diagnostic-platform procedures like colonoscopy / EGD / cardiac cath are primary `operative_episode` with secondary `diagnostic_acquisition`.) |
| `surveillance_episode` | Recall-driven encounter that may not include intervention. | annual skin exam, surveillance colonoscopy when scheduled by recall and not by symptom, post-cancer follow-up, lesion-check visit, post-procedure surveillance check |
| `interpretive_workflow_episode` | Provider work on a non-acquisition artifact. | radiology read, pathology read, sleep-study interpretation, PFT interpretation, ECG interpretation, outside-records review |
| `device_equipment_episode` | Device-fitting / device-management work. | BiPAP fitting, pacemaker placement, infusion-pump titration, CGM application, hearing aid fitting, prosthesis fitting, remote BP monitor placement |

**Multi-category reality (binding):** a single procedure episode CAN span multiple categories. The discriminant carries the **primary** category; secondary categories live in `episode.secondary_categories[]`. Examples:

- Colonoscopy (screening) = primary `operative_episode` + secondary `diagnostic_acquisition_episode` + secondary `surveillance_episode`
- EGD with biopsy = primary `operative_episode` + secondary `diagnostic_acquisition_episode`
- Cardiac cath with stenting = primary `operative_episode` + secondary `diagnostic_acquisition_episode` + secondary `device_equipment_episode`
- Cortisone injection = primary `therapeutic_intervention_episode` (single category)
- Sleep study (in-lab, with read) = primary `diagnostic_acquisition_episode` + secondary `interpretive_workflow_episode`
- Skin excision (Mohs) = primary `operative_episode` + secondary `diagnostic_acquisition_episode` (pathology) + secondary `surveillance_episode`
- BiPAP fitting after sleep study = primary `device_equipment_episode` + secondary `therapeutic_intervention_episode`
- IV biologic infusion (recurring) = primary `therapeutic_intervention_episode` (single, but inventory-heavy + recurring)

The anti-overload binding pattern (ADR §7.8) applies to procedure_episode_kind. Each category-specific concern that needs its own discriminant goes in `procedure_lifecycle/`'s metadata or attached siblings; never bypass via overlay-local primitive. **Procedure_lifecycle stays one sibling.**

---

## 5.2 Owned diagnostic acquisition + structured result authoring (binding sub-doctrine)

*Bound by **DL-9** in MAIN. Long-form rationale + the ~50-shape specialty register live in §6.6 below.*

### 5.2.0 Binding doctrine

**Owned tests are authored. External tests are ingested, reconciled, and interpreted. Both resolve into the same continuity graph.**

OMNI is the **authoring system** for in-office diagnostic acquisition and procedural result documentation — not merely an importer of external PDFs. The current foundational doc reservation language for `labs_lifecycle/` (§5) and `procedure_lifecycle/` §5.1 names diagnostic acquisition + interpretive workflow as sub-shapes; this §5.2 binds the underlying doctrine that prevents "diagnostic lifecycle = PDF storage + interpretation overlay" as a regression mode. Without §5.2 + DL-9, a future contributor reading the doc could conclude that owned in-office tests are a sub-case of substrate primitive #16 external-system ingest. They are not.

A real outpatient EMR for the wedge clinic must handle: structured visit notes + structured procedure reports + structured diagnostic reports + discrete observations + raw artifacts + interpretations + signoffs + problem / finding updates + recall plans + billing / charge lineage + patient communication. For a c-scope clinic running OMNI, OMNI must be able to **create** the colonoscopy report, not just attach a PDF. For a cardiology office, OMNI must support the sleep-study acquisition / interpretation workflow or at least native structured interpretation over an acquired artifact. For an in-office PFT, OMNI must store the raw artifact + discrete values + interpretation + comparison to prior + tracked-pulmonary-object update + recall + communication. For a urology clinic doing void-flow studies, OMNI must own the uroflowmetry session + tracked LUTS object + interpretation. **That is what `labs_lifecycle/` + `procedure_lifecycle/` + `clinical_record/` mean when activated at Athena-lab-module-class on Day 0 (§1.5) — not a fancy wrapper around external PDFs.**

### 5.2.1 Three producer lanes (plus hybrid)

| Producer | Entry mode | Example |
|---|---|---|
| **Clinic performs test; OMNI authors result** | Native structured template (`omni_native_authoring`) | Colonoscopy findings template, sleep-study interpretation, PFT interpretation, ECG interpretation, urodynamics report, colposcopy findings, EEG read, OCT interpretation, audiogram, joint-aspiration findings, RFA procedure note, c-scope, EGD with biopsy capture, in-office Botox / filler procedure note |
| **Clinic performs test; device exports artifact / data** | Device / file / API feed (`in_office_device_file` / `in_office_device_feed`) | PFT machine PDF / CSV / discrete measurements; ECG waveform / report; ultrasound DICOM; endoscopy tower image / video; in-office POC analyzer values; spirometry feed; CGM device upload; Holter device download |
| **External partner performs test** | Substrate primitive #16 external-system ingest (`external_partner_result`) | Quest / Labcorp result; outside imaging report; outside pathology PDF; ASC procedure note; outside Holter; outside sleep study; faxed consult note; vendor webhook; prior-record packet |
| **External partner performs test; clinic interprets** (hybrid) | `external_partner_result` + `omni_native_authoring` interpretive workflow | Outside MRI with clinic radiology read; outside Holter with clinic cardiology interpretation; outside sleep study with clinic sleep-medicine interpretation; outside path slides with clinic pathologist read |

The current foundational doc + MAIN over-reference lane 3 (substrate primitive #16). §5.2 binds lanes 1 + 2 explicitly + names lane 4 as the hybrid case.

### 5.2.2 Common diagnostic / procedural test outputs (taxonomy of what gets produced)

Most outpatient diagnostic and procedural tests produce some combination of these output types. Each maps to specific substrate primitives and sibling consumers:

| Output type | Substrate primitive | Where it lands |
|---|---|---|
| **Raw artifact** (PDF, DICOM, waveform file, video, image, CSV) | #16 external ingest if outside; document routing (Section 1O in MAIN) for inbound; `clinical_object_evidence` pointer for owned in-office capture | Pointer-only on `clinical_object_evidence`; blob storage outside row |
| **Derived measurements** (FEV1, AHI, ECG intervals, OCT thicknesses, audiogram thresholds, urodynamic flow rates, ABI values) | Section 1M `patient_state_observations` + `patient_lab_observations` | `labs_lifecycle/` consumes; `clinical_finding/` references |
| **Rendered report / template output** (c-scope report, sleep interpretation, PFT report, ECG read, urodynamics report) | DL-7 structured-first authoring + DL-9 native authoring; renders from structured-state | `clinical_record/` (final output) + `labs_lifecycle/` or `procedure_lifecycle/` (authoring origin) |
| **Discrete observations** (LOINC-coded results) | Section 1K.5.A clinical assertion ledger | `patient_clinical_assertions` (Layer 2 of four-layer model) |
| **Provider interpretation** (radiology read, pathology impression, sleep interpretation, ECG interpretation) | DL-7 + DL-9 + Section 1G.2 clinical signoff | `clinical_visits` row referencing `diagnostic_acquisition_session` |
| **Billing / code artifacts** (CPT codes, ICD-10 codes, panel codes) | Layer 4 of four-layer model + `revenue_cycle/` Day 0 charge lineage | `intervention_to_billing_link` rows |

No specialty-specific table needed. Every output type composes from the existing primitive set.

### 5.2.3 The `diagnostic_acquisition_session` operational object

A new operational object (substrate-shaped; **not** a sibling; **not** a new substrate primitive). Lives across `labs_lifecycle/` + `procedure_lifecycle/` + `clinical_record/` consumption surfaces. It is the unit-of-work that ties order → device → operator → artifacts → measurements → interpretation → communication → tracked object → billing → recall.

**Lifecycle:**

```
order / indication
  → accession / study identifier
  → scheduled / performed timestamp
  → acquisition device / source (output_source taxonomy below)
  → operator / technician
  → raw artifact(s) (pointer to clinical_object_evidence)
  → discrete measurements (1M / lab observations)
  → structured result template (DL-7 / DL-9 authoring)
  → interpretation / signoff (clinical_visits row referencing this session)
  → patient communication (communications_lifecycle)
  → tracked-object update (Section 1W tracked_clinical_objects)
  → billing / charge lineage (intervention_to_billing_link)
  → recall / task (provider_tasking + scheduling_lifecycle)
```

**Placement:**

- **`labs_lifecycle/`** owns the canonical `diagnostic_acquisition_session` rows for labs / pathology / imaging / sleep / PFT / ECG / stress / urodynamics / EEG / OCT / audiogram / and the broader specialty universe in §6.6.
- **`procedure_lifecycle/`** owns sessions when the acquisition is part of a procedural episode (colonoscopy + biopsy, EGD + biopsy, cardiac cath + diagnostic angiography, Mohs + frozen path, joint aspiration with culture). The session is attached to the `procedure_episode` row; `procedure_episode_kind` carries the discriminant variant from §5.1.
- **`clinical_record/`** consumes the rendered report output for chart inclusion. Authoring stays in the producing sibling; chart rendering is the receiver.
- **`clinical_finding/`** receives the longitudinal tracked-object updates (Section 1W layer 1).

**Object identity rules:**

- Stable `acquisition_session_id` across the full lifecycle (provisional through signoff through subsequent corrections).
- Append-only events; corrections / addenda emit new rows with pointer to original (per `patient_clinical_assertions` discipline).
- One acquisition_session may produce many tracked-object updates (one PFT updates pulmonary-function tracked object; one cardiac stress updates ischemia tracked object + arrhythmia tracked object).
- Multiple acquisition_sessions may attach to one procedural episode (Mohs has multiple stages, each producing its own pathology session).

### 5.2.4 Output-source taxonomy (binding enum)

Every diagnostic / procedural result row carries one value from this enum on a `output_source` field (or equivalent metadata key). The taxonomy is the operational projection of the four lanes in §5.2.1. Future contributors must **not** lump these into "ingest" or "external."

| Value | Meaning | Example |
|---|---|---|
| `omni_native_authoring` | Result authored directly in OMNI structured template | Provider authors c-scope findings in OMNI; PFT interpretation typed in OMNI; sleep-study read entered in OMNI |
| `in_office_device_file` | Clinic-owned device exports PDF / CSV / XML / DICOM file that is attached + parsed | PFT machine exports PDF + discrete CSV; ECG machine exports waveform + measurements; ultrasound exports DICOM |
| `in_office_device_feed` | Clinic-owned device sends HL7 / FHIR / DICOM / API feed in real-time | In-office analyzer HL7 result feed; ECG modality LIS feed; spirometry FHIR observation feed |
| `vendor_cloud_import` | Vendor portal / cloud produces result artifact or API feed (clinic doesn't own device, but uses vendor service) | CGM vendor cloud (Dexcom Clarity / Libre) syncs values; sleep-study vendor cloud delivers scored study; remote-monitoring vendor pushes data |
| `external_partner_result` | Outside lab / imaging / pathology / ASC sends result via substrate primitive #16 | Quest / Labcorp HL7 result; outside imaging center report; outside path PDF; ASC procedure note via fax / portal |
| `manual_transcription` | Staff enters values from paper / PDF when no integration exists | Patient brings paper outside ECG; staff manually enters values into structured template |

**Provenance binding:** `output_source` is one of the seven system primitives (#2 source / provenance) — every row carries it; orchestrator refuses rows missing it.

### 5.2.5 Standards alignment (admit, not require)

The substrate must **admit** these standards when activated; implementation timing follows DL-5 activation gate + §1.8 admission criteria. Non-foreclosure per DL-6.

- **DICOM** — imaging modalities (X-ray, CT, MRI, US, mammography); endoscopy visible-light image / video capture; whole-slide pathology imaging; ophthalmology imaging (OCT, fundus, FA). The substrate must accommodate DICOM tags + study UIDs + series structure when image-acquisition workflows activate.
- **HL7 v2** — discrete result messages from labs (ORU^R01), ECG, spirometry, in-office analyzers. The substrate must accommodate HL7 v2 OBR / OBX message structure when feed-based lab / device acquisition activates.
- **FHIR** — Observation + DiagnosticReport resources for discrete results + rendered reports; Procedure resource for procedural episodes; ServiceRequest for orders. The substrate must accommodate FHIR resource identity + reference graph when interoperability activation arrives.
- **LOINC** — measurement terminology for discrete observations across labs / vital signs / functional measurements / questionnaires. The substrate must accommodate LOINC codes on `patient_lab_observations` + `patient_state_observations` rows.

These standards are **already implicit** in Section 1L labs reservation in MAIN; §5.2.5 names them explicitly so future contributors know the substrate is non-foreclosed against full standards alignment.

### 5.2.6 Anti-patterns (forbidden by DL-9)

- **"Diagnostic lifecycle = PDF storage + interpretation overlay"** — DL-9 forbids this framing. Owned tests are authored, not ingested.
- **"Owned in-office tests are a sub-case of substrate primitive #16"** — #16 is for **outside** systems only. Owned acquisition lives in `labs_lifecycle/` + `procedure_lifecycle/` via `diagnostic_acquisition_session` + DL-7 structured-first authoring.
- **Specialty-specific acquisition tables** (`urology_void_flow_table`, `cardiac_holter_table`, `pulm_dlco_table`, `gyn_colposcopy_table`, `ophtho_oct_table`) — DL-8 admission criteria reject these by default. Every shape in §6.6 composes from the existing primitive set + `diagnostic_acquisition_session`.
- **Routing all diagnostic authoring through `clinical_record/`** — `labs_lifecycle/` + `procedure_lifecycle/` own their own structured-result templates within their sibling boundaries. `clinical_record/` is a **consumer** of rendered output, not the canonical authoring sibling for diagnostic / procedural results.
- **Reducing diagnostic depth to "PDF upload + narrative interpretation"** — DL-7 structured-first authoring forbids it. The structured template is canonical; the rendered note is the projection.
- **Bypassing substrate primitive #16 for inbound external artifacts** — every outside artifact enters via #16. Side-channels (direct blob upload, ad-hoc fax handler, vendor-specific shortcut) are forbidden.

### 5.2.7 Cross-references

- **DL-9 in MAIN** binds this sub-doctrine globally.
- **§6.6 below** demonstrates substrate non-foreclosure across ~50 specialty test/procedure shapes spanning 12 specialty categories.
- **§1W.6 step 7 in MAIN** ties structured-first authoring + diagnostic acquisition to the encounter → intervention → checkout continuity chain.
- **§1W.9 in MAIN** ties `labs_lifecycle/` + `procedure_lifecycle/` consumption to DL-9.
- **Substrate primitive #16** owns outside-artifact ingest only.
- **Section 1L in MAIN** is the existing labs foundation; §5.2 elevates the doctrine layer.
- **DL-7** governs structured-first authoring globally; DL-9 is the diagnostic-specific projection.

---

## 6. Specialty overlays (third tier)

A specialty overlay composes substrate + siblings into a specialty-shaped workflow. Overlays do NOT have their own ontology layer; they are configurations + producer-site filters + UI surfaces over the universal sibling set.

**Overlays named below are representative wedge shapes, not exhaustive.** The full specialty admissibility register (~50 shapes across 12 specialties demonstrating substrate non-foreclosure) lives in §6.6. Future overlays for any specialty / clinic configuration compose from the same substrate + sibling set; do not invent new ontology layers per DL-8.

### Examples

- **Aesthetic medicine overlay (medspa, plastics-cosmetic, dermatology-cosmetic)**: clinical_finding (rhytid tracks, volume-loss zones, pigmentation patterns) + procedure_lifecycle (multi-intervention sessions: Botox + filler + laser in one visit) + inventory_lifecycle (Botox/Dysport/Restylane/Juvederm lot tracking) + scheduling_lifecycle (provider + room) + recall (4-month touch-up cadence) + photo media + revenue_cycle (cash-pay, package, membership, hybrid)
- **Derm-Mohs overlay**: clinical_finding (lesion) + procedure_lifecycle (Mohs stages) + labs_lifecycle (pathology) + photo media + recall (surveillance) + revenue_cycle (insurance + cash-pay)
- **Plastics-rhino overlay**: clinical_decision (consultation) + imaging via labs_lifecycle + procedure_lifecycle + revenue_cycle + billing_subscription (financing) + post-op continuity via clinical_decision + recall + photo set
- **GI surveillance overlay**: clinical_finding (polyp) + recall (surveillance interval) + procedure_lifecycle (colonoscopy) + labs_lifecycle (pathology) + revenue_cycle (insurance)
- **Uro-vasectomy-day overlay**: procedure_lifecycle (×N episodes) + scheduling_lifecycle (rooms) + consent + clearance + post-op verification + revenue_cycle (cash + insurance)
- **Pulm-BiPAP overlay**: external study via labs_lifecycle + device adherence via clinical_decision + recurring monitoring via recall + insurance
- **Fertility-cycle overlay**: labs_lifecycle (hormone panels) + procedure_lifecycle (retrievals) + pharmacy_lifecycle (stim meds) + multi-resource scheduling + revenue_cycle + billing_subscription
- **Concierge multispecialty overlay**: care_team across multiple providers + multi-tracked-finding continuity + recall + billing_subscription (membership) + revenue_cycle (insurance overlay)

Each overlay is a recipe: which substrate primitives + which siblings + which producer-site filters + which UI surfaces. **No new ontology.** No new audit namespace. No new discriminant. No new state machine.

### Overlay rules (binding)

1. Overlays compose substrate + siblings; they do not extend the substrate or the sibling set.
2. An overlay-specific concern that does not fit any sibling is the signal that a sibling is missing — either reserve a new sibling, or extend an existing sibling's discriminant via ADR §7.8 binding pattern. NEVER bypass the sibling set with an overlay-local primitive.
3. Overlay-specific UI components, producer-site filters, recall configurations, and rule registrations are allowed. Overlay-specific ontology is forbidden.
4. Overlays do not own audit namespaces. Audit namespaces live with siblings.
5. Multi-overlay clinics (e.g., a derm group practice with Mohs + plastics + general derm + medspa) are equally first-class. The substrate must admit overlay composition.

---

## 6.5 Primitive extraction test (not specialty accretion)

The grid below is **not a roadmap list, not a specialty-commitment list, and not a specialty audit**. It is a **primitive-extraction validation grid**. The 12 rows below were chosen to stress-test primitive sufficiency across the dimensional matrix (§3). Each row asks whether a real outpatient / procedural / longitudinal-care workflow can be represented by the same substrate primitives (§4) + sibling domains (§5) + overlay tier (§6) + four-layer epistemic model (§7) + universal flow grammar (§1.7), **without inventing a specialty-specific sibling or substrate primitive**. **If a row cannot be decomposed cleanly, the primitive set is incomplete.** The grid is the substrate's pressure test, not its scope. **The broader specialty-shape register — 50+ shapes across 12 specialties demonstrating substrate non-foreclosure — lives in §6.6.**

### Columns

- **Use case** — the named workflow / procedure / care episode.
- **Persistent objects** — what tracked clinical objects (§7 layer 1) are involved.
- **Episode / intervention type** — primary + secondary `procedure_episode_kind` (§5.1).
- **Evidence / artifacts** — what acquisitions / interpretations / media / external artifacts are produced.
- **External systems** — where ingest (#16) / vendor interaction (#20) is involved.
- **Future obligations** — what recall / plan / task / continuity-relationship state is created.
- **Inventory / resources** — what `inventory_lifecycle/` consumption + `scheduling_lifecycle/` resources are involved.
- **Billing implications** — `revenue_cycle/` + `billing_subscription/` implications.
- **Communication moments** — what `communications_lifecycle/` engagement happens.
- **Primitives used** — the set of substrate primitives + siblings the workflow composes.
- **New primitive needed?** — yes / no. **If yes, the substrate set is incomplete.**

### Pressure-test grid (~50 use cases)

| Use case | Persistent objects | Episode type (primary / secondary) | Evidence / artifacts | External systems | Future obligations | Inventory / resources | Billing implications | Communication moments | Primitives used | New primitive needed? |
|---|---|---|---|---|---|---|---|---|---|---|
| **DTC obesity / GLP-1 program** | obesity trajectory, GLP-1 titration plan | therapeutic_intervention | rx, weight log, side-effect log | pharmacy vendor (compounding), lab vendor (initial labs) | recall (refill cadence), plan (titration), continuity relationship | medication (vendor-fulfilled), no in-clinic | subscription | intake, dose-change, refill, side-effect | substrate 1–18 + clinical_finding + pharmacy + billing_subscription + communications | no |
| **HRT (testosterone / estrogen) follow-up** | hormone trajectory, dose plan | therapeutic_intervention (rx) + diagnostic_acquisition (labs) | lab panels, dose history | lab vendor | recall (q3mo lab + dose review), plan (titration) | medication, lab kit | subscription + lab cash-pay | lab review, dose adjustment | substrate 1–21 + clinical_finding + labs + pharmacy + billing_subscription | no |
| **Peptide / longevity clinic continuation** | longevity panel trajectory | therapeutic_intervention + diagnostic_acquisition | comprehensive panels, peptide rx | compounding pharmacy, lab vendor | recall (panel cadence), plan (peptide protocol) | peptide vials, lab kits | cash subscription | panel review, plan adjustment | substrate 1–21 + clinical_finding + pharmacy + labs + billing_subscription | no |
| **Acne isotretinoin monitoring** | acne trajectory, hepatotoxicity surveillance | therapeutic_intervention + diagnostic_acquisition | iPLEDGE compliance, lab panels | iPLEDGE registry, lab vendor | recall (monthly lab + visit), plan (iso protocol), consent (iPLEDGE) | medication | insurance + cash | monthly compliance + lab | substrate 1–21 + clinical_finding + labs + pharmacy + revenue_cycle + consent #21 | no |
| **Botox session (medspa)** | rhytid tracks (glabella, frontalis, crow's feet, masseter) | therapeutic_intervention | photos, injection map | none required | recall (4mo touch-up), continuity relationship | Botox vials (lot, expiry) | cash + package | pre/post care, scheduling | substrate 1–21 + clinical_finding + procedure + inventory + revenue_cycle | no |
| **Filler session (medspa)** | volume-loss zones (NL folds, lips, cheeks, tear trough) | therapeutic_intervention | photos, injection map | none | recall (varies by product, 9–18mo), continuity relationship | Restylane / Juvederm syringes (lot) | cash + package | pre/post care | substrate 1–21 + clinical_finding + procedure + inventory + revenue_cycle | no |
| **Laser resurfacing / IPL** | pigmentation pattern, sun damage | therapeutic_intervention | before/after photos | none | recall (series cadence), plan (treatment series) | laser tip (consumable) + room | cash + package | pre/post care, healing check | substrate 1–21 + clinical_finding + procedure + inventory + revenue_cycle + communications | no |
| **Mohs (multi-stage)** | lesion + surgical margin | operative + diagnostic_acquisition + surveillance | frozen + permanent path, photos | pathology lab (sometimes external via #16) | recall (surveillance), plan (skin-cancer screening cadence), consent | scopes / supplies / closure materials | insurance + cash | pre-op consent, post-op care, path result | substrate 1–21 + clinical_finding + procedure + labs + recall + revenue_cycle | no |
| **Skin excision with pathology** | lesion | operative + diagnostic_acquisition + surveillance | path PDF | pathology lab | recall (path-driven follow-up) | excision supplies | insurance + cash | path result + plan | substrate 1–21 + clinical_finding + procedure + labs + revenue_cycle | no |
| **Lesion surveillance visit** | tracked lesions | surveillance | photos | none | recall (next interval) | none | insurance | scheduling, photo capture | substrate 1–21 + clinical_finding + procedure + recall | no |
| **Colonoscopy (screening)** | colon polyps | operative + diagnostic_acquisition + surveillance | path, photos, scope report | ASC EMR (via #16 if external), path lab | recall (3/5/10yr per finding), plan (screening cadence), consent | scope, biopsy supplies, anesthesia time, suite | insurance | prep instructions, post-op summary, path result | substrate 1–21 + clinical_finding + procedure + labs + recall + scheduling + revenue_cycle + ingest #16 | no |
| **EGD with biopsy** | upper-GI findings | operative + diagnostic_acquisition | path, scope report | path lab, ASC EMR if external | recall (per finding), plan | scope, biopsy supplies, anesthesia, suite | insurance | prep, post-op, path result | same as colonoscopy minus surveillance-by-default | no |
| **Capsule endoscopy** | small-bowel findings | diagnostic_acquisition + interpretive_workflow | capsule images, read | imaging vendor (via #16) | recall driven by findings | capsule device | insurance | result + plan | substrate 1–21 + clinical_finding + labs + revenue_cycle + ingest #16 | no |
| **Cardiac cath (diagnostic + stent)** | coronary lesion / stent | operative + diagnostic_acquisition + device_equipment | imaging, stent record | ASC EMR (cath lab), device manufacturer | recall (post-PCI follow-up), plan (DAPT, surveillance) | catheters, contrast, stents (lot tracking critical), suite | insurance (high complexity) | pre/post care, follow-up | substrate 1–21 + clinical_finding + procedure + inventory + recall + revenue_cycle + ingest #16 | no |
| **Stress test** | cardiac status trajectory | diagnostic_acquisition + interpretive_workflow | ECG strips, image stress, read | imaging vendor sometimes | recall (post-cardiac follow-up) | echo equipment + tech, room | insurance | result + plan | substrate 1–21 + clinical_finding + labs + revenue_cycle + scheduling | no |
| **Holter monitor** | arrhythmia trajectory | diagnostic_acquisition + interpretive_workflow + device_equipment | recording, read | monitor vendor | recall, plan | Holter device (lot, return logistics) | insurance | device pickup, result | substrate 1–21 + clinical_finding + labs + procedure + inventory + ingest #16 + vendor interaction #20 | no |
| **Pulmonary nodule follow-up** | pulm nodule trajectory | diagnostic_acquisition + surveillance | CT reads | imaging vendor (via #16) | recall (Fleischner-driven cadence), plan | none | insurance | result + surveillance plan | substrate 1–21 + clinical_finding + labs + recall + ingest #16 | no |
| **PFT** | pulm function trajectory | diagnostic_acquisition + interpretive_workflow | flow-volume loops, read | none if in-clinic | recall (annual, per condition) | PFT machine + tech, room | insurance | result + plan | substrate 1–21 + clinical_finding + labs + scheduling | no |
| **Sleep study (in-lab)** | sleep disorder trajectory | diagnostic_acquisition + interpretive_workflow | polysomnography record, read | sleep lab if external | recall (annual), plan (BiPAP/CPAP), downstream device episode | sleep-lab room + tech | insurance | result + device-fitting referral | substrate 1–21 + clinical_finding + labs + revenue_cycle + ingest #16 if external | no |
| **BiPAP / CPAP fitting** | sleep disorder trajectory + device | device_equipment + therapeutic_intervention | device record, mask fitting | DME vendor | recall (compliance check, mask replace), plan (compliance protocol) | BiPAP device, mask (DME via vendor #20) | insurance + DME | fitting, compliance check | substrate 1–21 + clinical_finding + procedure + inventory + vendor #20 + recall | no |
| **X-ray (in-clinic)** | joint / fracture / nodule | diagnostic_acquisition + interpretive_workflow | image, read | radiology read group sometimes (via #16) | recall driven by findings | X-ray equipment + tech, contrast if used | insurance | result | substrate 1–21 + clinical_finding + labs + ingest #16 if external read | no |
| **MRI report follow-up** | imaged region | interpretive_workflow + surveillance | outside MRI report | imaging center (via #16) | recall driven by findings | none in-clinic | insurance for follow-up | result review with patient | substrate 1–21 + clinical_finding + labs + ingest #16 | no |
| **Pathology-only result** | pre-existing tracked finding | interpretive_workflow | path PDF | path lab (via #16) | recall driven by findings, plan | none | insurance | result | substrate 1–21 + clinical_finding + labs + ingest #16 | no |
| **Cortisone injection (joint)** | joint trajectory | therapeutic_intervention | injection record, photo if guided | imaging vendor sometimes | recall (4–12wk), plan (max-injections protocol) | cortisone vial + needle (lot) | insurance | post-care, follow-up | substrate 1–21 + clinical_finding + procedure + inventory + recall + revenue_cycle | no |
| **PRP injection** | joint / soft-tissue trajectory | therapeutic_intervention | injection record, photo | none | recall (series cadence) | PRP processing kit, centrifuge | cash | post-care | substrate 1–21 + clinical_finding + procedure + inventory + revenue_cycle | no |
| **Ultrasound-guided biopsy** | tracked lesion | operative + diagnostic_acquisition | image, path | path lab | recall (path-driven) | needle, ultrasound | insurance | path result | substrate 1–21 + clinical_finding + procedure + labs + revenue_cycle + ingest #16 | no |
| **IV biologic infusion (e.g., Remicade)** | autoimmune condition trajectory + infusion plan | therapeutic_intervention | infusion record, vitals, lot | specialty pharmacy (buy-and-bill or DME) | recall (cycle cadence), plan (titration), continuity relationship | biologic vial (lot, expiry, expensive), infusion chair + nurse + line | insurance + buy-and-bill (revenue_cycle critical) | pre/post infusion, side-effect | substrate 1–21 + clinical_finding + procedure + inventory + scheduling + revenue_cycle + vendor #20 | no |
| **Chemotherapy infusion** | malignancy trajectory + chemo plan | therapeutic_intervention | infusion record, vitals, lot, complications | oncology lab + path lab | recall (cycle cadence), plan (regimen), surveillance, consent | chemo agents (lot, expiry, hazardous), chair + nurse + room + PPE | insurance | pre/post, side-effect, dose-modify | substrate 1–21 + clinical_finding + procedure + inventory + scheduling + revenue_cycle + ingest #16 + consent #21 | no |
| **Allergy shot clinic** | allergen trajectory + immunotherapy plan | therapeutic_intervention | injection record | none | recall (build-up + maintenance schedule), plan (immunotherapy protocol) | extract vial (lot, expiry) | insurance + cash | reaction monitoring | substrate 1–21 + clinical_finding + procedure + inventory + recall + plan | no |
| **CGM placement** | glucose trajectory + device | device_equipment + diagnostic_acquisition | sensor data stream, placement record | CGM vendor (data ingest via #16) | recall (replacement, follow-up), plan (data review cadence) | sensor (DME via vendor #20) | insurance + DME | placement instruction, data review | substrate 1–21 + clinical_finding + procedure + inventory + vendor #20 + ingest #16 | no |
| **Remote BP monitoring** | hypertension trajectory + device | device_equipment + diagnostic_acquisition | BP readings stream | RPM vendor (via #16) | recall (review cadence), plan | BP cuff (DME via vendor #20) | insurance (RPM codes) | abnormal-reading alerts | substrate 1–21 + clinical_finding + procedure + vendor #20 + ingest #16 + revenue_cycle | no |
| **Vasectomy** | reproductive plan | operative | procedure record, photos rarely | none | recall (post-op semen analysis at 8–12wk), consent | suture kit, room | insurance + cash | pre/post care | substrate 1–21 + clinical_finding + procedure + inventory + recall + revenue_cycle + consent #21 | no |
| **Hair transplant** | scalp recipient + donor zones | operative | photos, graft record | none | recall (growth checks, touch-up), plan | grafts, supplies, room + tech | cash | pre/post care, growth visits | substrate 1–21 + clinical_finding + procedure + inventory + recall + revenue_cycle | no |
| **Fertility lab monitoring (cycle)** | follicular trajectory + cycle plan | diagnostic_acquisition + therapeutic_intervention | hormone panels, ultrasound | lab vendor, imaging | recall (daily cycle monitoring), plan (stim protocol), continuity relationship | stim meds (compounding pharmacy), ultrasound time | insurance + cash | daily updates, dose adjust | substrate 1–21 + clinical_finding + labs + procedure + pharmacy + recall + plan | no |
| **Menopause care** | hormone trajectory + symptom plan | therapeutic_intervention + diagnostic_acquisition | symptom log, lab panels | lab vendor | recall (q3–6mo), plan (HRT titration), continuity relationship | HRT medications | insurance + cash | symptom check, dose adjust | substrate 1–21 + clinical_finding + labs + pharmacy + recall + plan + continuity #19 | no |
| **Pelvic floor PT referral** | pelvic floor condition | referral + interpretive_workflow | PT progress notes | PT clinic (via #16 + #20) | recall (PT completion check), plan | none in-clinic | insurance | progress check | substrate 1–21 + clinical_finding + referral_lifecycle + ingest #16 + vendor #20 | no |
| **Wound check (post-op)** | surgical site | surveillance | photos, complication log | none | recall (next visit), plan (wound care protocol) | dressings | insurance | wound photo intake, complication escalation | substrate 1–21 + clinical_finding + procedure + recall + communications | no |
| **Post-op suture removal** | surgical site | therapeutic_intervention + surveillance | removal record | none | recall (final check) | suture removal kit | insurance | scheduling | substrate 1–21 + clinical_finding + procedure + inventory + recall | no |
| **Implant / device follow-up** | implanted device | device_equipment + surveillance | device report | device manufacturer (via #20) | recall (mfg-driven cadence), plan | none | insurance | check-in, recall actions | substrate 1–21 + clinical_finding + procedure + vendor #20 + recall | no |
| **ASC outpatient surgery follow-up** | surgical site / condition | operative (at ASC) + surveillance | ASC op note (ingest), path | ASC EMR (via #16), path lab | recall (post-op cadence), plan, consent | none in OMNI | insurance | result + recovery | substrate 1–21 + clinical_finding + procedure + labs + ingest #16 + revenue_cycle + consent #21 | no |
| **Outside records packet (referral inbound)** | new patient context | (none — ingest event) | scanned PDF packet | referral source (via #16) | task (provider review), continuity relationship initiation | none | none | confirm receipt | substrate 1–21 + ingest #16 + continuity #19 + provider_tasking | no |
| **Faxed referral return** | tracked finding | (none — ingest event) | fax PDF result | referral target (via #16) | task (review + close referral loop) | none | none | result review, patient comm | substrate 1–21 + ingest #16 + referral_lifecycle | no |
| **Abnormal lab escalation** | tracked condition | (none — operational event) | abnormal lab value | lab vendor (via #16) | task (provider review), recall (urgent follow-up) | none | none | abnormal-result comm to patient | substrate 1–21 + clinical_finding + labs + provider_tasking + recall | no |
| **Patient adverse event message (inbound)** | tracked condition / treatment | (none — communications event) | inbound message | none | task (provider review), continuity relationship state shift | none | none | adverse-event triage | substrate 1–21 + communications + provider_tasking + continuity #19 | no |
| **Refill continuation** | medication plan | (none — pharmacy event) | rx renewal | pharmacy vendor | recall (next refill), plan adjustment | medication | subscription / insurance | refill confirmation | substrate 1–21 + pharmacy + plan #18 + recall | no |
| **Failed payment** | subscription / encounter | (none — billing event) | payment failure | payment processor (via #20) | task (RCM follow-up), recall (retry cadence) | none | revenue_cycle escalation | payment-fail notification | substrate 1–21 + billing_subscription + revenue_cycle + vendor #20 | no |
| **Missed appointment** | scheduling intent | (none — scheduling event) | no-show event | scheduling system | task (re-engagement), recall (rebook) | none | revenue_cycle (no-show fee?) | rebook outreach | substrate 1–21 + scheduling + provider_tasking + recall | no |
| **Inventory stockout** | inventory item | (none — inventory event) | stockout alert | vendor (via #20) | task (reorder), recall (PO follow-up) | inventory item | revenue_cycle (cost) | staff alert | substrate 1–21 + inventory_lifecycle + vendor #20 + provider_tasking | no |
| **Provider handoff (vacation, leave, role change)** | continuity relationship + active care arcs | (none — operational event) | handoff packet | none | task (incoming provider review), continuity relationship update | none | none | patient notification | substrate 1–21 + continuity #19 + provider_tasking + communications | no |

### Closing binding

The substrate admits the full procedural taxonomy by composition. **No new sibling is required. No new substrate primitive is required.** `procedure_lifecycle/`'s primary `episode_kind`, `secondary_categories`, and attachments to `labs_lifecycle/`, `clinical_finding/`, `inventory_lifecycle/`, recall (#12), `scheduling_lifecycle/`, external-system ingest (#16), encounter (#17), plan / protocol (#18), continuity relationship (#19), vendor / partner interaction (#20), consent (#21), and `revenue_cycle/` are sufficient. Specialty overlays may add ordering, terminology, body maps, protocols, procedural macros, and billing rules; **the universal primitives do not change**.

If a future use case forces a "yes" in the rightmost column of this grid, the substrate is incomplete — apply §1.8 admission criteria and either add a primitive, reserve a sibling, or define an overlay. **Default answer is no.**

---

## 6.6 Specialty-coverage non-foreclosure register

**This register is a non-foreclosure demonstration, NOT a roadmap commitment.** Each row asserts that the substrate **admits** the named test / procedure shape using existing primitives + existing sibling reservations + DL-9 producer lanes — **without inventing a specialty-specific primitive**. Activation depth lives in DL-5; this register only proves admissibility per DL-6 + DL-8.

The register answers the "what about urology void flow / cardiology Holter / pulm DLCO / GYN colposcopy / endocrine OGTT / neuro EEG / ophtho OCT / ENT audiogram / allergy patch testing / rheum joint aspiration / wound debridement / pain RFA" question once and binds the answer: every one of these shapes composes from the existing primitive set + DL-9 acquisition session, no new primitive needed.

**Column meanings:**

- **Producer lane** — `omni_native` (clinic performs + OMNI authors) | `device_file` (clinic device exports artifact) | `device_feed` (clinic device sends real-time feed) | `vendor_cloud` (vendor portal / cloud) | `external` (outside partner via #16) | `mixed` (multiple lanes). Per §5.2.4 output-source taxonomy + DL-9.
- **Sub-shape** — `diagnostic_acq` (primary acquisition) | `interpretive` (interpretation of artifact) | `op+diag` (operative episode with diagnostic acquisition) | `therap+diag` (therapeutic intervention with diagnostic acquisition) | `surveillance` (surveillance / recall workflow) | `device_check` (device-management / titration). Per §5.1 procedure_episode_kind.
- **Sibling** — `labs` = `labs_lifecycle/` | `proc` = `procedure_lifecycle/` | `record` = `clinical_record/` | `finding` = `clinical_finding/` | `mixed` = multiple sibling consumers.
- **Primitives** — numbered references to §4 substrate primitives (every row implicitly uses 1 org, 2 audit, 3 authority, 4 multi-tenant, 5 patient identity, 7 disclosure-policy, 8 idempotency; column lists the additional primitives the shape stresses).
- **New?** — does this shape require a new substrate primitive or new sibling? Always NO. That is the demonstration.

| Specialty | Test / procedure | Producer lane | Sub-shape | Sibling | Primitives | New? |
|---|---|---|---|---|---|---|
| **Urology** | Uroflowmetry (void flow study) | `device_file` or `omni_native` | `diagnostic_acq` | labs | 9, 10, 11, 15, 17, 18, 21 | NO |
| **Urology** | Urodynamics (multi-channel pressure-flow) | `device_feed` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 15, 17, 18, 21 | NO |
| **Urology** | Post-void residual (bladder scan) | `device_file` | `diagnostic_acq` | labs | 9, 11, 15, 17 | NO |
| **Urology** | Cystoscopy (in-office) | `omni_native` | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Urology** | Prostate biopsy (TRUS-guided, 12-core) | `omni_native` | `op+diag` + `surveillance` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Cardiology** | 12-lead ECG (in-office) | `device_file` or `device_feed` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17 | NO |
| **Cardiology** | Stress echo (treadmill / pharmacologic) | `device_file` + `omni_native` interpretation | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 21 | NO |
| **Cardiology** | Holter monitor (24h / 48h) | `vendor_cloud` or `device_file` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 20, 21 | NO |
| **Cardiology** | Event monitor (30-day external loop) | `vendor_cloud` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 20, 21 | NO |
| **Cardiology** | CGM tracking (continuous glucose monitoring, cardiology-pre-diabetic context) | `vendor_cloud` | `surveillance` + `device_check` | labs | 9, 10, 11, 17, 20, 21 | NO |
| **Cardiology** | Tilt-table study | `omni_native` + `device_feed` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 18, 21 | NO |
| **Cardiology** | Cardiac MRI (outside) | `external` | `interpretive` | labs | 9, 11, 16, 17, 21 | NO |
| **Pulmonology** | Spirometry (pre/post bronchodilator) | `device_file` or `device_feed` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 21 | NO |
| **Pulmonology** | DLCO (diffusing capacity) | `device_file` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 21 | NO |
| **Pulmonology** | Methacholine challenge | `device_file` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 14, 17, 18, 21 | NO |
| **Pulmonology** | 6-minute walk test | `omni_native` | `diagnostic_acq` | labs | 9, 11, 17, 21 | NO |
| **Pulmonology** | CPAP titration / compliance | `vendor_cloud` | `device_check` + `surveillance` | mixed | 9, 11, 17, 18, 20, 21 | NO |
| **Pulmonology** | Bronchoscopy with biopsy | `omni_native` | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **GYN** | Colposcopy (with or without biopsy) | `omni_native` | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **GYN** | LEEP (loop electrosurgical excision) | `omni_native` | `op+diag` + `surveillance` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **GYN** | Endometrial biopsy (in-office) | `omni_native` | `op+diag` | proc | 9, 11, 14, 15, 17, 21 | NO |
| **GYN** | IUD insertion / removal | `omni_native` | `therap+diag` | proc | 9, 11, 15, 17, 18, 21 | NO |
| **GYN** | Saline-infusion sonography (SIS) | `device_file` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 15, 17, 21 | NO |
| **Endocrine** | Oral glucose tolerance test (OGTT) | `omni_native` (timed series) | `diagnostic_acq` | labs | 9, 11, 17, 21 | NO |
| **Endocrine** | DEXA scan (bone density) | `device_file` or `external` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 16, 17, 21 | NO |
| **Endocrine** | Fine-needle aspiration of thyroid (FNA) | `omni_native` (procedure) + `external` (cytopath) | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Endocrine** | Dynamic suppression / stim test (cortisol, GH, ACTH) | `omni_native` (timed series) | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 18, 21 | NO |
| **Neurology** | EEG (routine / ambulatory) | `device_file` + `omni_native` interpretation | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 21 | NO |
| **Neurology** | EMG (electromyography) | `device_feed` + `omni_native` interpretation | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 21 | NO |
| **Neurology** | Nerve conduction study | `device_feed` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 21 | NO |
| **Neurology** | Visual / somatosensory evoked potentials | `device_feed` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 21 | NO |
| **Ophthalmology** | OCT (optical coherence tomography) | `device_file` + `omni_native` interpretation | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 15, 17, 21 | NO |
| **Ophthalmology** | Fundus photography | `device_file` | `diagnostic_acq` | labs | 9, 11, 15, 17, 21 | NO |
| **Ophthalmology** | Visual fields (perimetry) | `device_file` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 21 | NO |
| **Ophthalmology** | Corneal topography | `device_file` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 15, 17, 21 | NO |
| **ENT** | Audiogram (pure-tone + speech) | `device_file` or `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 21 | NO |
| **ENT** | Tympanogram | `device_file` | `diagnostic_acq` | labs | 9, 11, 17, 21 | NO |
| **ENT** | Flexible laryngoscopy | `omni_native` | `op+diag` | proc | 9, 11, 15, 17, 18, 21 | NO |
| **ENT** | Vestibular testing (VNG / VEMP) | `device_feed` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 15, 17, 21 | NO |
| **Allergy** | Skin prick testing (panel of 30+) | `omni_native` | `diagnostic_acq` | labs | 9, 11, 15, 17, 18, 21 | NO |
| **Allergy** | Patch testing (multi-day, sequential reads) | `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 15, 17, 18, 21 | NO |
| **Allergy** | Drug / food challenge (graded) | `omni_native` (timed protocol) | `therap+diag` | proc | 9, 11, 14, 17, 18, 21 | NO |
| **Rheumatology** | Joint aspiration with synovial fluid analysis | `omni_native` (procedure) + `external` (lab) | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Rheumatology** | Joint injection (corticosteroid / hyaluronic acid) | `omni_native` | `therap+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Rheumatology** | Biologics infusion (in-office, recurring) | `omni_native` | `therap+diag` + `device_check` | proc | 9, 11, 14, 17, 18, 21 | NO |
| **Wound care** | Wound debridement with culture | `omni_native` (procedure) + `external` (culture) | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Wound care** | ABI / TBI assessment (peripheral artery) | `device_file` + `omni_native` | `diagnostic_acq` | labs | 9, 11, 15, 17, 21 | NO |
| **Pain management** | Trigger-point injection | `omni_native` | `therap+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Pain management** | Nerve block (image-guided) | `omni_native` + `device_file` (US image) | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Pain management** | RFA (radiofrequency ablation) / PRP injection | `omni_native` + `device_file` | `op+diag` + `therap+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |

**Closing binding:** every row above admits via the existing primitive set + sibling reservations + DL-9 producer lanes. **If a future use case requires a primitive not in §4 to model it, that primitive must satisfy §1.8 admission criteria (referenced by ≥3 siblings; no existing primitive can model it without violating discriminant or sibling locality; stable identity contract independent of any single workflow; defensible read-authority + write-authority boundary).** Adding a specialty-specific primitive (e.g., `urology_void_flow_table`, `cardiac_holter_table`, `pulm_dlco_table`, `gyn_colposcopy_table`, `ophtho_oct_table`, `ent_audiogram_table`, `pain_rfa_table`) is **rejected by default** per DL-8; the existing primitive set + DL-9 acquisition session must compose every row above.

This register is **not exhaustive** — additional specialties (oncology, sports medicine, dermatopathology, fertility, sleep medicine, hospital-medicine outpatient extensions, addiction medicine, occupational medicine, integrative medicine) compose the same way. Future contributors who feel the urge to add specialty-specific tables: read DL-8, run §1.8, and check this register for analog shapes first.

---

## 7. Four-layer epistemic model (binding once `clinical_finding/` activates)

| Layer | Purpose | Status |
|---|---|---|
| **1. Tracked clinical finding** | Longitudinal entity identity. The hub. "This specific lung nodule" / "lesion #3 at left upper back" / "L4-L5 disc" / "glabellar dynamic rhytid track" | Reserved (`clinical_finding/` sibling) |
| **2. Clinical assertion atom** | Typed epistemic claims (`condition.X_history`, `condition.X_suspected`, `condition.X_observed`, `condition.X_confirmed`, `condition.X_resolved`) with `authored_by`, `evidence_refs`, `assertion_type`, temporal validity. Attaches to finding via FK when `clinical_finding/` activates; collapses cleanly to concept-keyed when finding identity equals concept identity (current DTC build) | Built (`patient_clinical_assertions` ledger + reconciled view per Section 1K.5.A) |
| **3. Diagnosis entity** | Codable interpretation (ICD-10 / CPT / SNOMED) attached to finding at points in time. Generated from atoms when clinician judges evidence sufficient. Codable taxonomy is exogenous and may change without changing clinical reality. | Reserved (no first-class diagnosis_entity table yet) |
| **4. Billing artifact** | Financial / legal representation of work performed. Derived from accepted assertions + procedures + diagnosis entities; never authored independently. | Reserved (`revenue_cycle/` sibling) |

### Why the existing atomization work is NOT wasted

The atomization layer (`patient_clinical_assertions` + reconciled view) is the substrate the tracked finding hub references. The two layers are complements, not alternatives.

For DTC (current build), finding identity collapses to concept identity. One patient's "obesity" or "T2DM" is one finding identity ≡ one concept atom. Atom layer alone is sufficient. **Everything built so far stands.**

For surveillance / aesthetic / procedural specialties, concept identity is too coarse. Three moles ≠ one finding. Two polyps ≠ one finding. A glabellar rhytid track ≠ a frontalis rhytid track. Tracked finding adds the longitudinal hub above the concept atoms.

**Epic's failure mode** (a lung nodule lives across radiology + problem list + pulm note + CT orders + pathology + tumor board + future encounters without unification) is exactly what the tracked finding sibling protects against. **First-class tracked finding is the moat against Epic, not a duplication of Epic.**

### CHF walkthrough (the example that surfaced the model)

The atom layer already handles CHF epistemic state cleanly:

- "history of CHF" → `condition.chf_history`, `authored_by: patient_self_report`, `assertion_type: history_of`
- "provider suspects CHF" → `condition.chf_suspected`, `authored_by: provider:dr_smith`, `evidence: clinical_judgment + bnp_lab`, `assertion_type: suspected`
- "echo shows CHF" → `condition.chf_observed`, `authored_by: cardiology:echo_2026-04`, `evidence: echo_report`, `assertion_type: observation_supports`
- "CHF formally diagnosed" → `condition.chf_diagnosed`, `authored_by: cardiology:dr_jones`, `evidence: echo + symptoms + bnp`, `assertion_type: confirmed`
- "CHF exacerbation" → `event.chf_exacerbation`, scoped to a date range
- "CHF resolved?" → `condition.chf_resolved`, `assertion_type: resolved`

The reconciled view (`patient_clinical_assertion_current`) handles "what does the system currently believe?" That's solved.

What the tracked-finding layer adds: **the identity of THIS patient's CHF trajectory** as one followable longitudinal object. All those atoms attach to it as evidence. The patient may have one CHF trajectory or none; for cardiology, it's typically one. The collapse-to-concept is fine.

### Aesthetic medicine walkthrough (the example that proved the model)

Glabellar frown lines over 3 years, 10 injection sessions:

- Tracked finding: `aesthetic_dynamic_rhytid_track`, `anatomical_region: glabella`, `object_id: GLABELLAR_RHYTID_TRACK_<patient>_001`
- Linked history attached to that one object across years: baseline photos, injection map, dosing history (24u → 22u → 28u as response evolves), product used (Botox vs Dysport vs Daxxify), response quality, duration of effect, adverse reactions (one episode of brow heaviness), provider preferences, patient preferences (softer correction), progression over time, touch-up cadence (every 4 months), consent history, pricing/package history.
- Each Botox visit becomes a `procedure_lifecycle/` episode containing 1–N interventions; each intervention attaches to the relevant tracked finding (glabellar rhytid track, frontalis rhytid track, NL fold volume-loss zone).
- The continuity intelligence: "this patient typically responds best to 24u, prefers softer correction, metabolizes quickly, returns every 4 months, had brow heaviness once with Daxxify, prefers Dr. X injection pattern, frontal compensation increasing over time" — emerges from queries against the finding's accumulated history. Not from a hand-curated narrative note.

Aesthetic medicine is an ideal proving ground for the tracked-finding model: high continuity, high repeat cadence, visual longitudinality, procedural repetition, provider preference memory, patient preference memory, high LTV, strong operational pain, cash-pay, low payer complexity initially.

---

## 7.5 Clinical identity reconciliation (the hard problem made architectural)

The tracked-finding model surfaces an immediate operational problem: **providers speak differently about the same object**.

- "11s" / "glabellar rhytids" / "glabellar dynamic lines" / "frown lines" / "corrugator activity" / "glabellar complex" — all may refer to the same `aesthetic_dynamic_rhytid_track` object.
- "left upper abdominal nevus" / "pigmented lesion LUQ" / "mole on abdomen" / "abd lesion #3" — may be the same `dermatology_lesion` object, or may be different objects.

Without identity reconciliation, tracked findings degrade into free-text noise within a few visits. With identity reconciliation, providers retain narrative flexibility while the substrate maintains structured continuity. The balance:

> **Provider language must remain flexible. Object identity must remain structured.**

Forcing rigid terminology = providers reject the software. Allowing zero structure = continuity collapses. The middle path is **assisted continuity**, not autonomous resolution.

### The tracked-finding object identity primitives

| Field | Purpose |
|---|---|
| `object_id` | Stable identifier, never changes |
| `patient_id` | Owner |
| `object_kind` | `finding_kind` enum (e.g., `aesthetic_dynamic_rhytid_track`, `dermatology_lesion`, `pulmonary_nodule`, `gi_polyp`, `orthopedic_joint`) |
| `anatomical_region` | Body-map region (face/glabella, chest/L upper lobe, GI/hepatic-flexure, etc.) |
| `laterality` | L / R / midline / bilateral / N/A |
| `body_map_coordinates` | Optional spatial coordinates within region (for derm lesions, ortho joints, plastics surgical sites) |
| `creation_encounter_id` | Where the finding was first identified |
| `status` | active / dormant / resolved / removed / recurred / under-surveillance |
| `specialty_tags` | Multi-specialty findings can be tagged (e.g., a derm lesion under surveillance by both derm and onc) |
| `linked_media` | Image set, photo set, DICOM, pathology slide IDs |
| `aliases` | Provider-language synonyms ("11s", "frown lines", ...) |
| `provider_labels` | Per-provider preferred labels |
| `canonical_label` | System-canonical name for cross-provider readability |

### Assisted reconciliation pattern (when AI runtime activates)

When a provider opens an encounter and starts documenting, the substrate offers candidate matches:

> "This appears related to previously tracked object: `LEFT_GLABELLAR_DYNAMIC_RHYTID_TRACK`. Confidence: 82%. Confirm?"

Or for surveillance:

> "Possible match: `hepatic-flexure-polyp-2026-03` based on anatomy + prior pathology + provider note + surveillance interval. Confirm?"

The system DOES NOT autonomously resolve identity. It surfaces high-confidence candidates with the evidence chain, and a human (provider, MA, coordinator) confirms.

### The substrate primitives reconciliation depends on

- Body-map / anatomical anchor (substrate primitive #15)
- AI orchestration runtime (substrate primitive #11) — for soft NLP normalization, synonym expansion, image similarity matching
- Audit lineage (substrate primitive #1) — every identity confirmation / merge / split is audited with actor + reasoning
- Authority + capability (substrate primitive #2) — provider authority required to confirm finding identity; coordinator may suggest but not confirm

### What this is not

- NOT an attempt to solve generalized clinical ontology. Just object identity within a patient.
- NOT autonomous AI lesion classification. Identity matching, not diagnosis.
- NOT a replacement for free-text. Provider narrative remains free-text; identity sits beneath.
- NOT a near-term build. Reserved as a substrate primitive; activates with `clinical_finding/` sibling when the wedge specialty demands it.

This is the deepest moat against EMR fragmentation. Epic loses here because Epic models clinical objects implicitly across notes + problem list + diagrams + procedure history + provider memory. OMNI proposes structured object identity beneath flexible provider language — the only stable answer.

---

## 7.6 The encounter → intervention → checkout continuity chain (the operational moat)

Current EMRs fragment this chain horribly: scheduling lives one place, charting somewhere else, injections in narrative notes, inventory separate, checkout separate, charges manual, front desk re-enters everything, no longitudinal object linkage. **That fragmentation IS the operational pain.** OMNI's moat is doing this end-to-end.

The chain has eight layers, each a distinct architectural concern:

```
1. Appointment / visit intent      (scheduling_lifecycle)
       ↓
2. Encounter opens                  (substrate: encounter primitive)
       ↓
3. Provider performs interventions  (procedure_lifecycle: structured intervention objects)
       ↓
4. Tracked findings update          (clinical_finding sibling)
       ↓
5. Inventory consumed               (inventory_lifecycle, derived from interventions)
       ↓
6. Charges derived                  (revenue_cycle, derived from interventions)
       ↓
7. Note rendered from structure     (clinical_record sibling, render layer)
       ↓
8. Checkout payload assembled       (revenue_cycle + billing_subscription)
```

### Layer-by-layer

**1. Appointment / visit intent.** The patient was scheduled for "Botox follow-up." This is *scheduling intent*. It is NOT the truth of what happened. The appointment lives in `scheduling_lifecycle/`.

**2. Encounter opens.** When the patient arrives and the provider opens the chart for this visit, an encounter record is created. The encounter is the operational session containing one or more interventions. The encounter is NOT the procedure; the encounter contains the procedure(s). Encounter is a substrate-level operational primitive.

**3. Provider performs interventions.** The most important architectural shift. Provider does NOT type narrative prose first. Provider authors **structured procedural interventions** with first-class fields:

```
Intervention 1
  type:       Botox injection
  area:       glabella
  dose:       10u
  product:    Botox Cosmetic
  lot:        XYZ123
  technique:  standard 5-point pattern
  notes:      slight asymmetry on left
  → attaches to tracked finding: glabellar_dynamic_rhytid_track

Intervention 2
  type:       Botox injection
  area:       frontalis
  dose:       6u
  product:    Botox Cosmetic
  lot:        XYZ123
  technique:  central horizontal band
  notes:      —
  → attaches to tracked finding: frontalis_dynamic_rhytid_track

Intervention 3
  type:       Filler injection
  area:       NL folds (bilateral)
  product:    Restylane Kysse
  volume:     1.0cc
  lot:        ABC456
  technique:  fanning
  notes:      preferred patient outcome
  → attaches to tracked finding: nl_fold_volume_loss_zone
```

Each intervention is a structured procedural artifact. The intervention object lives in `procedure_lifecycle/` as a sub-shape of the procedure episode.

**4. Tracked findings update.** Each intervention's `→ attaches to` link updates the corresponding tracked finding's intervention history. This is automatic: the act of recording the intervention is the act of updating the finding. No separate step.

**5. Inventory consumed.** Each intervention's product + dose + lot generates an inventory consumption event in `inventory_lifecycle/`. Lot tracking, expiry verification, point-of-sale dispense, par-level reordering all derive from this. Provider does not manually decrement inventory.

**6. Charges derived.** Each intervention generates a chargeable service unit in `revenue_cycle/`. Bundling rules (Botox 16u total vs glabella 10u + frontalis 6u separately) live as configurable revenue-cycle policy, not as provider input. Pricing rules, package application, membership pricing all derive automatically.

**7. Note rendered from structure.** This is the **structured-first authoring + note-as-rendered-output** doctrine. The note is NOT authored independently. The note is RENDERED from the structured intervention state + tracked finding context + provider notes (the optional free-text per intervention). The provider edits final prose if needed; the structure is the source of truth.

**8. Checkout payload assembled.** Front desk receives a structured payload: today's services, suggested total, packages/membership applied, balance due. NO re-entering chart data. NO interpreting narrative notes. NO manually recounting units. The checkout is a downstream consumer of `revenue_cycle/` state.

### Why this chain is the moat

No existing EMR does this end-to-end. They fragment it:

- Epic / Athena: scheduling + charting + billing all separate; charge capture is manual reconciliation; tracked findings nonexistent; inventory external; checkout staff memory + spreadsheets.
- Boulevard / Mindbody: scheduling + checkout strong; clinical depth weak; no tracked findings; inventory partial; no clinical assertion ledger.
- Klara / OhMD: messaging only; no clinical depth; no charge capture.
- Cosmetic-clinic SaaS (Aesthetic Record, etc.): some structured intervention support; weak continuity; weak tracked findings; weak revenue cycle.

OMNI's proposition: the entire chain runs through one substrate, audited end-to-end, with no human reconciliation between layers. **Operational compression = fewer coordinators × more provider time × cleaner billing × better continuity × stronger retention.**

### Provider input UX is existential

If the structured-input surface is slow, ugly, or rigid, providers revolt. The substrate must support fast, fluid, clinically-natural input via:

- **Smart defaults** from prior pattern (this patient's typical Botox dose at this site)
- **Body-map UI** for anatomical anchoring
- **Favorite injection maps** per provider
- **Procedural macros** (e.g., "standard glabella pattern")
- **Inferred templates** from appointment type + provider history + prior objects
- **AI-assisted suggestions** ("based on prior visits, suggest 24u glabella + 6u frontalis; confirm?")

These are application-layer concerns built on top of the substrate. The substrate's job is to make them queryable; the overlay's job is to render them.

---

## 7.7 Structured-first authoring + note-as-rendered-output (binding doctrine)

The c1–c9 typed Rule + Template registry pattern (where rules + templates are structured first and rendered output is generated downstream) generalizes to clinical documentation. Notes are NOT authored independently; notes are RENDERED from structured state.

### Binding rules

1. Provider input authors structured artifacts (interventions, observations, decisions, orders, recall plans, intervention attachments to tracked findings).
2. Notes (consult, procedure, op, post-op, surveillance, addendum) RENDER from those structured artifacts via a typed clinical-render module, analogous to `lib/templates/render/`.
3. Free-text fields exist within structured artifacts (e.g., `intervention.provider_notes`, `observation.narrative`) but the document-level note is composed downstream.
4. Provider may edit the rendered narrative; edits are stored as overrides on the structured state, not as authoritative replacements.
5. Re-rendering must be deterministic: the same structured state always produces the same rendered note (modulo provider overrides).
6. The render module is a substrate primitive concern (clinical-record-renderer); specialty overlays provide specialty-specific render modules (e.g., Mohs procedure note format vs vasectomy procedure note format vs cosmetic procedure note format).

This pattern is anti-narrative-first-authoring (radar trap 17 below). It is the only stable answer to the operational chain in §7.6: if notes are authored independently, charge capture / inventory consumption / tracked finding updates all break loose from the documentation, and human coordinators re-stitch them — which is the operational pain we exist to compress.

---

## 8. Cross-cutting concerns (axes that span siblings)

Not siblings. Not substrate primitives. Cross-cutting concerns every sibling must accommodate.

| Concern | Where it lives | Discipline |
|---|---|---|
| Care team / multi-provider ownership | Substrate primitive (extends authority) | `responsible_party` per scope; `care_team` membership for collaborative ownership; explicit role taxonomy (proceduralist, consultant, primary, covering, MA, coordinator, injector, aesthetician) |
| Cross-org patient identity | Substrate primitive (extends multi-tenant) | Patient identity may span orgs via referral packet; explicit patient-identity-claim model; cross-org access requires consent + `SensitiveAccessReason` |
| Multi-channel communication endpoints | `communications_lifecycle/` sibling | Endpoint table: per-org × per-brand × per-location × per-department × per-channel; programmable AI-as-endpoint with permissions/escalation/audit |
| Resource scheduling depth | `scheduling_lifecycle/` sibling | Resources: provider · room · suite · equipment · device · external facility · staff role; multi-resource bookings; prep dependencies |
| Interaction context | Substrate primitive | `interaction_context.mode` (`'in_person'` / `'telehealth'` / `'hybrid'`) on every operationally-meaningful row; binding per Section 1Q.23 + Hybrid Scenario 5 |
| Synthetic / production data environment | Substrate primitive | `data_environment` column on every patient-bound row; structural lock at dispatch gate |
| Pathway-aware policy | Substrate primitive | `pathway_code` + `pathway_sensitivity` propagation; clamps; rule-side filters |
| Jurisdictional gating | Substrate primitive | "jurisdiction of care" field on patients; runtime guards at intake / provider assignment / treatment decision / order creation / fulfillment routing |
| Recall / surveillance | Substrate primitive (NOT a sibling) | Patient-rooted scheduled future obligations attached to finding/case/program; materialization-into-task-when-due; missed-recall escalation |
| Patient-reported outcomes (PROs) | Substrate primitive (extends intake + atom layer) | Recurring patient questionnaires that feed into clinical findings; specialty-scoped (post-rhino satisfaction, BiPAP adherence, pain scores, Mohs scar PROs) |

---

## 9. Ontology traps (named explicitly — complete list of 20)

| # | Trap | Mechanism | Resolution |
|---|---|---|---|
| 1 | Case as parent ontology | Reusing `case_kind` across siblings | ADR §7.7 + scaffold lint check 5 |
| 2 | Encounter-centric assumption | Making `encounter` / `visit` parent of clinical activity | Tracked finding is the longitudinal hub for surveillance / aesthetic specialties; encounter is a touchpoint |
| 3 | Notification-as-recall conflation | "Follow up in 6 months" shoved into outbound_jobs / `patient_inbox_messages.metadata` instead of recall primitive | Radar zone 28 + recall primitive reservation |
| 4 | Communication-as-conversation conflation | All communication = `message_thread`-shaped | Communications_lifecycle reservation depth |
| 5 | Billing-as-subscription conflation | Compressing `revenue_cycle/` into `billing_subscription/` | Two distinct siblings (binding) |
| 6 | Telehealth-as-canonical assumption | DTC conventions leaking into in-clinic primitives | `interaction_context.mode` discipline |
| 7 | Order-as-shipment conflation | `order_kind` extended to lab/imaging/procedure/referral orders that don't ship-from-vendor-to-patient | ADR §7.8 anti-overload binding pattern |
| 8a | Diagnosis-as-parent assumption | Codable diagnosis as the parent ontology of clinical activity | Four-layer epistemic model; finding is the hub |
| 8b | Concept-atom-as-parent assumption | Making `condition.X_history` (concept atom) the longitudinal entity identity | Tracked finding sibling above the atom layer |
| 9 | Substrate-modeled-as-sibling | "Domain folder for audit lineage" / "domain folder for disclosure-policy" | ADR §7.7 substrate vs operational distinction |
| 10 | Sibling-as-overlay assumption | Making a specialty workflow into a sibling-domain folder (collapse) | Overlay tier discipline (binding rule 1) |
| 11 | Overlay-poisoning-sibling assumption | Specialty knowledge leaking into universal siblings | Overlay tier discipline (binding rule 3) |
| 12 | Single-tenant assumption | Hardcoded "MAIN" / brand / org / jurisdiction / location | ADR §7.5 multi-tenant rule |
| 13 | Single-provider assumption | `responsible_party` as one-and-only-one per patient | Per-scope responsibility + care_team primitive |
| 14 | Outbound-only communications | `outbound_jobs` extended to model inbound | Communications_lifecycle inbound rails |
| 15 | Encounter-as-billing-trigger | Charge capture as a side effect of encounter creation | Charge capture lives in `revenue_cycle/`, derived from accepted clinical artifacts |
| 16 (NEW) | Rigid-terminology assumption | Forcing providers to use a controlled vocabulary instead of allowing flexible labels with structured identity underneath | §7.5 reconciliation pattern: flexible language + structured identity |
| 17 (NEW) | Narrative-first authoring | Provider writes prose; humans (or AI) reconstruct structure later | §7.7 structured-first authoring doctrine; note-as-rendered-output |
| 18 (NEW) | Appointment-as-source-of-truth-for-services | What was scheduled = what was billed | Appointment is intent; interventions are truth; charge derives from intervention |
| 19 (NEW) | Single-charge-per-encounter | One encounter = one chargeable line | Encounter contains N interventions = N chargeable units (with bundling) |

20 traps total (counting 8a + 8b separately). Half are protected by existing doctrine + lint; half need this amendment.

---

## 10. What's already built (validation)

| Layer | Status | Examples |
|---|---|---|
| Substrate | Built | audit · authority · disclosure-policy · multi-tenant primitives · longitudinal memory · idempotent orchestration · pathway sensitivity · typed event catalog · communication rails (email/SMS/in-app) · Rule + Template registry · DELETE-AFTER-PARITY discipline · anti-overload binding pattern · scaffold lint suite |
| Substrate | Reserved | consent capture (partial) · locations table (partial) · cross-org patient identity · voice + fax rails · AI runtime · recall primitive · specimen chain-of-custody · body-map / anatomical anchor |
| Siblings | Active (5) | account_lifecycle · billing_subscription · clinical_decision · fulfillment_lifecycle · pharmacy_lifecycle |
| Siblings | Reserved by prior doctrine (7) | scheduling_lifecycle · labs_lifecycle · provider_tasking · communications_lifecycle · retail_lifecycle · marketing_lifecycle · clinical_record |
| Siblings | Reserved by this amendment (6) | clinical_finding · procedure_lifecycle · revenue_cycle · authorization_lifecycle · referral_lifecycle · inventory_lifecycle |
| Overlays | None | The tier itself is reserved by this amendment |
| Cross-cutting | Built | interaction_context.mode · data_environment · pathway_code/sensitivity · jurisdictional gating |
| Cross-cutting | Reserved / partial | care_team / responsible_party (Section 1G) · PROs |

**The c1–c9 build is wedge-agnostic substrate + one cell of the dimensional matrix populated.** Nothing built so far blocks any other cell. The producer-site filters (`treatment_key === 'glp1_primary'`, `program_type === 'weight_loss'`) are population gates, not substrate.

---

## 11. What this amendment reserves (concrete scope)

Pure documentation. No code. No migrations. No schema. No new rules.

### 11.0 Foundational doc → MAIN crosswalk (where each binding lives in MAIN today)

*This table is the canonical map from this document's primitives / siblings / doctrines to their binding home in the MAIN system map. The foundational doc is the long-form rationale source; MAIN is the operational source of truth.*

| Foundational element | Where bound in MAIN | Status |
|---|---|---|
| 5 binding doctrines (§1) | Doctrine locks DL-5 + DL-6 + DL-7 + DL-8 + DL-9 | LANDED post-reconciliation |
| Three architectural tiers (§2) | Doctrine locks DL-1 (substrate-vs-operational) + DL-2 (sibling tier) + Section 1W (foundation primitive layer) | LANDED |
| **Owned diagnostic acquisition + structured result authoring (§5.2)** | **Doctrine lock DL-9** + sharpened §1.5 Athena-lab-module-class line + Section 1W §1W.6 step 7 cross-ref + Section 1W.9 cross-sibling consumption table updates | **LANDED** post-reconciliation — binding sub-doctrine for owned-vs-external diagnostic lifecycle; the principle "owned tests are authored, not merely ingested" is now bound globally |
| **Three producer × entry-mode lanes + hybrid lane (§5.2.1)** | DL-9 binding lanes table (4 rows) | LANDED via DL-9 |
| **`diagnostic_acquisition_session` operational object spec (§5.2.3)** | DL-9 substrate-shaped object spec; lives across `labs_lifecycle/` + `procedure_lifecycle/` + `clinical_record/`; not a sibling, not a new primitive | LANDED via DL-9 |
| **Output-source taxonomy enum (§5.2.4)** | DL-9 enum: `omni_native_authoring` / `in_office_device_file` / `in_office_device_feed` / `vendor_cloud_import` / `external_partner_result` / `manual_transcription` | LANDED via DL-9 |
| **Standards alignment (DICOM / HL7 v2 / FHIR / LOINC) — admit, not require (§5.2.5)** | DL-9 + Section 1L labs reservation in MAIN | LANDED — non-foreclosure commitment per DL-6; activation timing per DL-5 |
| **Diagnostic / procedural anti-patterns (§5.2.6)** | DL-9 explicit forbids list | LANDED via DL-9 |
| **Specialty-coverage non-foreclosure register — ~50 shapes across 12 specialties (§6.6)** | Long-form rationale only; **MAIN does not paste-import the 50-row table** per reconciliation constraint. MAIN cross-links via DL-9 + Repo anchors row pointing at this section. | LANDED IN-DOC — non-foreclosure demonstration, not a roadmap commitment per DL-6 + DL-8 |
| Substrate primitive #1 (Audit + lineage) | `audit_events` table + system primitives addendum + Section 1D + Section 1V (deletion audit invariant) | LANDED |
| Substrate primitive #2 (Authority + capability) | `lib/auth/capabilities.ts` + Section 1D / 1D.1 / 1D.2 + system primitives addendum + `SensitiveAccessReason` discipline | LANDED |
| Substrate primitive #3 (Disclosure-policy) | `lib/disclosure-policy/` + Section 1Q (rules engine consumer) + tier_1/2/3/4 clamps + pathway-sensitivity propagation | LANDED |
| Substrate primitive #4 (Multi-tenant primitives) | Section 1U + `org_id` on every patient-scoped row + RLS + system primitives addendum | LANDED — orgs / brands / data_environment shipped; locations partial; cross-org reserved |
| Substrate primitive #5 (Patient identity) | Section 1J / 1J.1–1J.9 + `patient_id` as universal handle + future cross-org matching reservation | LANDED — `patient_id` shipped; cross-channel + cross-org partial / reserved |
| Substrate primitive #6 (Longitudinal operational memory) | `patient_timeline_events` + Section 1K.5.A reconciled views + system primitives addendum + Section 1V Clinical retention class | LANDED — timeline + reconciled view shipped; evidence linking reserved |
| Substrate primitive #7 (Idempotent orchestration) | SECURITY DEFINER orchestrators + `idempotency_key` discipline + system primitives addendum + Section 1H.3 reconciliation | LANDED |
| Substrate primitive #8 (Pathway sensitivity) | `lib/pathways/sensitivity-registry.ts` + `pathway_code` propagation + clamps + Section 1Q rules engine consumer | LANDED |
| Substrate primitive #9 (Typed event catalog) | `lib/events/audit-actions.ts` + `lib/events/rule-trigger-event-types.ts` + `audit_events.action` + `patient_timeline_events.event_type` registry + `scripts/lint-event-types.ts` | LANDED |
| Substrate primitive #10 (Communication rails) | `outbound_jobs` + `lib/outbound/dispatch.ts` + `patient_inbox_messages` + Section 1G messaging substrate + Phase 4H-in-app-inbox c1 | LANDED — email + SMS + in_app shipped; voice + fax + inbound rails reserved |
| Substrate primitive #11 (AI orchestration runtime) | Section 1N (AI engine doctrine) + Section 1T (vector / embedding readiness) + provider-authority gating + AI-as-actor with audit + capability + disclosure-policy + consent | LANDED (directional posture); runtime reserved |
| Substrate primitive #12 (Recall / surveillance primitive) | Section 1W.8 (recall + surveillance + procedural-cadence hooks) + reserved future materialization-into-task pipeline | LANDED via Section 1W |
| Substrate primitive #13 (Typed Rule + Template registry + DELETE-AFTER-PARITY) | `repo/rules/` + `repo/templates/` + ADR §7.7–§7.8 (sibling discriminant + anti-overload pattern) + `scripts/lint-rules-templates-scaffold.ts` check 5 | LANDED |
| Substrate primitive #14 (Specimen / artifact chain-of-custody) | Reserved — `inventory_lifecycle/` sibling reservation + Section 1L hooks + Section 1W.3 `clinical_object_evidence` pointer pattern | RESERVED — not yet a Section in MAIN |
| Substrate primitive #15 (Body-map / anatomical anchor) | Section 1W.4 + reserved `anatomical_anchors` table | LANDED via Section 1W |
| Substrate primitive #16 (External-system ingest) | Section 1O (document routing) + Section 1L partner-adapter pattern + DL-9 lane 3 (`external_partner_result`) | PARTIAL — pattern exists for documents + labs; not yet generalized as a single named primitive in MAIN |
| Substrate primitive #17 (Encounter) | Reserved — `clinical_record/` sibling activation pending; container for procedures + interventions + observations + decisions + communications | RESERVED |
| Substrate primitive #18 (Plan / protocol) | Section 1Q (rules engine produces plans) + `care_program` table + reserved protocol versioning + distinct from recall (#12) and Rules (#13) | PARTIAL |
| Substrate primitive #19 (Continuity relationship) | Section 1G.9 (clinician of record) + Section 1W.9 (cross-sibling consumption contract) + reserved relationship-status lifecycle | LANDED via 1G.9 + Section 1W |
| Substrate primitive #20 (Vendor / partner interaction) | Section 1L partner-adapter contract + reserved generalization for pharmacy / lab / ASC / imaging-center / payment / telephony / referral-partner accounts | PARTIAL |
| Substrate primitive #21 (Consent / authorization) | Section 1J.10 + reserved consent-split from disclosure-policy (#3); gates clinical operation performance (distinct from #3 which gates outbound communication) | PARTIAL — consent-split per foundational doc §4 not yet split out from disclosure-policy in MAIN |
| **Tracked clinical objects + procedure / intervention lifecycle (foundation primitive)** | **Section 1W (canonical home)** + Doctrine locks DL-7 + DL-8 + Repo anchors row + Platform operational model foundation-modules paragraph + Layer 1 overview | **LANDED** post-reconciliation — first-class foundation module, not a buried section |
| Sibling: `clinical_decision/` | Active in `repo/rules/` + `repo/templates/` per Phase 4H-templates-discipline | ACTIVATED |
| Sibling: `account_lifecycle/` | Active in `repo/rules/` + `repo/templates/` | ACTIVATED |
| Sibling: `billing_subscription/` | Active in `repo/rules/` + `repo/templates/` | ACTIVATED |
| Sibling: `fulfillment_lifecycle/` | Active per Phase 4H-templates-discipline c4 | ACTIVATED |
| Sibling: `pharmacy_lifecycle/` | Active per Phase 4H-templates-discipline c8 | ACTIVATED |
| Sibling: `scheduling_lifecycle/` | Reserved — Section 1F hybrid-care primitives + reserved folder | RESERVED |
| Sibling: `labs_lifecycle/` | Section 1L canonical foundation | LANDED in MAIN as Section 1L; sibling folder activates with first concrete `repo/rules/labs_lifecycle/` migration |
| Sibling: `provider_tasking/` | Reserved — Section 1G.11.2 action-item primitives + reserved folder | RESERVED |
| Sibling: `communications_lifecycle/` | Reserved — Section 1G messaging substrate + Phase 4H-in-app-inbox c1 substrate landing | PARTIAL — substrate exists; sibling folder not yet activated |
| Sibling: `clinical_record/` | Reserved — chart fields in Section 1J + Section 1G.8 provider workspace | PARTIAL — surfaces exist; sibling folder not yet activated |
| Sibling: `retail_lifecycle/` | Reserved — Section 1E retail catalog + reserved folder | RESERVED |
| Sibling: `marketing_lifecycle/` | Reserved — Section 1H.4 + Section 1H.4.1 marketing surface + reserved folder | PARTIAL |
| Sibling: `revenue_cycle/` | Reserved — Section 1I financial state + Day 0 charge lineage scoped per foundational doc §12.B | RESERVED (Day 0 charge-lineage scope only; full RCM deferred per §12.A) |
| Sibling: `clinical_finding/` | Reserved — distinct from tracked-clinical-object primitive (Section 1W); will activate when finding-shaped workflows beyond what 1W covers emerge | RESERVED |
| Sibling: `procedure_lifecycle/` | Reserved — distinct from individual sibling activations (per foundational doc §6.5 grid covers procedural decomposition into intervention atoms — Section 1W) | RESERVED |
| Sibling: `authorization_lifecycle/` | Reserved — prior-auth + payer-auth substrate; activates when `revenue_cycle/` future RCM activates | RESERVED |
| Sibling: `referral_lifecycle/` | Reserved — referral-shape workflows; activates when first cross-org referral surface emerges | RESERVED |
| Sibling: `inventory_lifecycle/` | Reserved — inventory + supplies + specimen logistics substrate; activates when first procedural sibling requires inventory consumption beyond what `treatment_orders` carries | RESERVED |
| Universal flow grammar (§1.7) | DL-8 + Section 1W.6 (operational projection — 8-layer continuity chain) | LANDED |
| Primitive admission criteria (§1.8) | DL-8 | LANDED |
| Four-layer epistemic model (§7) | Section 1W.2 (canonical table) | LANDED |
| Clinical identity reconciliation (§7.5) | Section 1W.5 | LANDED |
| Encounter → intervention → checkout continuity chain (§8) | Section 1W.6 (8-layer compressed projection) | LANDED |
| Structured-first authoring + note-as-rendered-output (§1.6) | DL-7 + Section 1W.7 | LANDED |
| Anti-overload binding pattern (ADR §7.8) | DL-3 (sibling-local discriminants) — anti-overload is the operational expression | LANDED via ADR |
| Producer-site transitional locality (ADR §7.5) | DL-4 + Platform operational model paragraph | LANDED |
| 20 ontology traps (§9) | Distributed across DL-1 through DL-9 + radar zones 27–28 | LANDED via doctrine locks (binding); long-form trap enumeration remains here as rationale |
| Dimensional matrix (§3) | DL-6 (substrate non-foreclosure across all matrix cells) | LANDED |
| Day 0 elite-class depth + activation incrementality (§1) | DL-5 | LANDED |
| §6.5 12-procedure pressure-test grid | Reserved — long-form remains in this document; not paste-imported into MAIN per reconciliation constraint | RESERVED IN-DOC |
| §12 reservation status (Reserved-deferred vs Truly-deferred) | Cross-link from MAIN's relevant Section reservations (Section 1F scheduling, Section 1L labs, Section 1I revenue, Section 1U multi-org) | LANDED — MAIN sections cross-link this section as the long-form reservation register |

### A. System map `## Platform operational model` doctrine

- Insert three-architectural-tier paragraph (substrate / sibling / overlay).
- Add 6 new reserved siblings (clinical_finding, procedure_lifecycle, revenue_cycle, authorization_lifecycle, referral_lifecycle, inventory_lifecycle).
- Sharpen `communications_lifecycle/` reservation (inbound rails + endpoint topology + AI-as-programmable-endpoint).
- Sharpen `scheduling_lifecycle/` reservation (multi-resource depth).
- Add dimensional matrix table.
- Add sibling boundary discipline binding.
- Add overlay tier rules (5 binding rules).
- Add new substrate primitives (recall, AI runtime, specimen chain-of-custody, body-map / anatomical anchor) to substrate-primitives line.
- Add structured-first authoring + note-as-rendered-output doctrine.

### B. ADR

- §7.9 (new) — four-layer epistemic model + clinical identity reconciliation pattern.
- §7.10 (new) — encounter → intervention → checkout continuity chain.
- §7.11 (new) — overlay tier discipline.
- §7.12 (new) — structured-first authoring + note-as-rendered-output.
- §7.13 (new) — foundational substrate posture (wedge-vs-foundation separation; "every decision admits every cell of the dimensional matrix" test).
- §7.7 cross-references update — name new sibling discriminants.
- §7.8 cross-references update — extend the overloaded-word table.

### C. Section 1K.5.A (clinical assertion ledger)

- Add the four-layer relationship paragraph (clarifying atom layer is substrate the tracked finding hub references).

### D. Radar

- Extend zone 27 (sibling-discriminant leak) — add new discriminants.
- Extend zone 28 (care-task substrate fragmentation) — add recall primitive.
- New zones (provisional 29–37) for the new traps.

### E. Evolution narrative

- Closing entry (Act X or epilogue) capturing the moment substrate-design-for-all-dimensions became binding.

### F. Total scope

**~400–500 lines of doctrine added across 5 docs.** Zero code. Zero migrations. Zero schema. Zero new patterns. The c1–c9 build is unchanged.

---

## 12. Reservation status

### A. Reserved at primitive / sibling level — implementation deferred

These have substrate primitives or sibling reservations in place; specific implementation details are deferred until operational pressure surfaces. The substrate doctrine HAS reserved these; the runtime work has not happened.

- **Inventory / supplies / specimen logistics detail** — `inventory_lifecycle/` sibling reserved (§5); specimen chain-of-custody substrate primitive #14 reserved. Detailed workflows (vendor-specific PO integration, specimen-routing automation, lot-recall protocols) deferred.
- **External diagnostic ingest beyond webhooks** — substrate primitive #16 (external-system ingest) reserved as the canonical pattern. Specific lab-vendor / imaging-center / pathology-lab / sleep-lab direct API integrations deferred.
- **Specialty-EMR-replacement features** — `clinical_record/` sibling reserved (§5). Specific specialty-EMR-grade UI surfaces, signature workflows, and chart-completion automations deferred.
- **AI clinical decision support** — AI orchestration runtime substrate primitive #11 reserved. Clinical-grade AI (autonomous clinical decisions) deferred indefinitely per Section 1Q.0 invariant 4 (AI is assistive, never authoritative).
- **Future RCM beyond Day 0 charge lineage** — `revenue_cycle/` sibling reserved. Day 0 scope: charge lineage + intervention-derived checkout payload + cash-pay + subscription + package billing. Future RCM (claims transmission, payer adjudication, denials, appeals, ERA / EOB ingestion, AR / patient responsibility, full RCM team workflows) reserved-but-deferred.
- **Multi-org federated authentication** — multi-tenant primitive #4 reserved (orgs + brands + locations). Cross-org SSO / federation specifics deferred.
- **Cross-org patient identity matching** — patient identity primitive #5 reserved. Specific algorithms (probabilistic matching, MPI integration) deferred.

### B. Truly deferred — not even reserved

These are not in the substrate doctrine and would require §1.8 admission criteria + new sibling activation if pursued.

- Payer integrations / claim transmission / clearinghouse / EDI / X12 (specific runtime implementations beyond `revenue_cycle/` reservation).
- Prior-auth automation runtime (substrate primitive concept reserved as authorization-gating; full payer-rule engine deferred).
- Enterprise referral integrations (Epic / Athena / Cerner inbound — substrate-level ingest reserved via #16; enterprise-EMR-specific direct-integration deferred).
- Surgery-center interoperability runtime (substrate ingest reserved; ASC-specific direct integration deferred).
- CPT / ICD coding engine runtime (codable-diagnosis-entity layer reserved via four-layer model §7; code-suggestion engine deferred).
- DICOM imaging integration runtime (labs_lifecycle reservation covers acquisition; DICOM-specific viewer / PACS integration deferred).
- Patient-facing clinic-app experiences for any specialty (clinic-app is the deliverable; specialty-specific app surfaces deferred).
- Inpatient / hospital-floor / ICU / ED workflows (out-of-scope per §1.5; would require substrate extension via §1.8).

---

## 13. Execution plan (when greenlit)

> **Status: HISTORICAL / SUPERSEDED.** This phased execution plan was the original 6-phase doctrine-amendment proposal. The reconciliation has since landed via a different path: Doctrine locks DL-1 through DL-9 + Section 1W in MAIN, plus §5.2 / §6.6 / §11.0 crosswalk in this document, plus updates to ADR + radar + evolution narrative companion docs. The phase list below is preserved as historical record of the original plan; the gating conditions no longer apply. For current status, see §11.0 crosswalk (foundational-doc-element → MAIN-binding-location → status table).

Six phased commits. Each ships independently; subsequent phases gate on previous landing cleanly. Phase D is split into D1 (procedural decomposition + interventions) and D2 (primitive extraction grid + flow grammar + new primitives) because the original Phase D was carrying too much.

| Phase | Scope | Files | Lines |
|---|---|---|---|
| **A** | Tracked clinical finding sibling reservation + four-layer epistemic model + atomization-relationship clarification + ADR §7.9 + Section 1K.5.A relationship paragraph + radar trap 8b/zone 29 + identity reconciliation primitives | system map + ADR + Section 1K.5.A + radar | ~100–140 |
| **B** | Procedure_lifecycle + revenue_cycle + authorization_lifecycle + referral_lifecycle + inventory_lifecycle reservations + sibling boundary discipline + ADR §7.7 cross-refs update + radar zones 30–34 | system map + ADR + radar | ~120–160 |
| **C** | Specialty-overlay tier (substrate / sibling / overlay) + ADR §7.11 + communications_lifecycle topology depth + scheduling_lifecycle depth + radar zones 35–36 | system map + ADR + radar | ~80–120 |
| **D1** | Encounter → intervention → checkout chain (ADR §7.10) + structured-first authoring (ADR §7.12) + body-map primitive (#15) + procedure_episode_kind variants (§5.1) + labs_lifecycle acquisition + interpretation sub-shapes + traps 17–19 + radar zone 37 | ADR + system map + radar | ~120–160 |
| **D2** | **Primitive extraction doctrine (§1.6) + universal flow grammar (§1.7) + primitive admission criteria (§1.8) + 6 new substrate primitives (#16 external-system ingest, #17 encounter, #18 plan/protocol, #19 continuity relationship, #20 vendor/partner, #21 consent split from disclosure-policy) + §6.5 primitive extraction test grid + procedural-category axis on dimensional matrix** | system map + ADR + radar | ~150–200 |
| **E** | Anti-pattern §1.5 + foundational substrate posture (ADR §7.13) + cross-cutting concerns table + evolution narrative epilogue | system map + ADR + evolution narrative | ~80–110 |

Total: **~650–890 lines** across the doctrine doc set (was 440–630; expanded with Phase D2's primitive-extraction work).

**Gating conditions:**
1. Workspace re-linked.
2. Explicit green light to start with Phase A.
3. Each phase ships independently.
4. Optional: ChatGPT review pass on Phase A draft before it lands (Phase A is the deepest commitment).
5. Phase D2 should land before Phase E because the foundational-substrate-posture section (§7.13) references the primitive-extraction doctrine that D2 codifies.

---

## What this is and isn't

**Is:** the foundational architectural commitment to admit every operational dimension of healthcare equally — DTC, in-clinic, procedural, surveillance, aesthetic, multi-specialty group practice — with all 18 siblings + 3 tiers + **21 substrate primitives** + 20 ontology traps + dimensional matrix + universal flow grammar + primitive extraction doctrine + intervention-to-checkout chain + clinical identity reconciliation + structured-first authoring named, scoped, and bound.

**Is not:** a roadmap commitment. A wedge selection. An execution sprint. A schema migration. A code change. A scope expansion of any current commit.

**The substrate is now structurally sufficient to admit any future clinic profile.** Wedge selection runs as a separate go-to-market track when ready.

# v4 — C3.7A: Existing-Asset Inventory (oncology trial ACCESS / registry / accrual)

Document type: `analysis` (C3.7 arc — G1 reality-field, artifact A) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `populated_G1_pending_review` 2026-06-14 (C3.7 oncology-trial-access addendum agent). Siblings: B (cited market reality), C (access funnel + ownership ladder). **C3.6 stays closed; C3.7 is the upstream ACCESS layer.**
Purpose: inventory what OMNI + C3.5 + C3.6 already provide for the **access/matching/accrual funnel** so C3.7 reuses canon and only researches/invents the genuine access-layer deltas.

## §0 What C3.7 owns vs what C3.6 already owns (the seam)
- **C3.6 owns (downstream of consent):** `source_authority_map`, `trial_protocol` (incl. I/E criteria, arms, visit windows), `knowledge_partition`, IP `custody_chain`, EDC reconciliation, RWE/outcome plane, P35 ladder. **C3.7 must NOT re-mint these — it consumes them.**
- **C3.7 owns (upstream of consent — the access funnel):** public listing/transparency, patient/family interest capture, outside-record ingestion, **source-backed pre-screen → match candidate**, research-team triage, oncologist referral, sponsor/site accrual + slot state, navigation obligations, screen-fail/waitlist, and the **sponsor/site payment + reporting hooks** (firewalled per plan §3).

## §1 Per-asset reuse map (the access funnel is mostly composition)
| Asset (contract / C3.5 / C3.6) | Reusable for ACCESS/accrual | Delta to research/extend (C3.7) |
|---|---|---|
| **Intake** (patient-source capture; clinical-safety pre-screen 1K.7; `treatment_plan_candidate`; deterministic scoring; eligibility gates) | the **research_intake_session** = an Intake extension; trial pre-screen = eligibility-gate extension over C3.6 `trial_protocol` I/E criteria | net: a **research/trial intake mode** distinct from care intake (consent-before-screening; equipoise; no inducement) |
| **C3.6 `source_authority_map` + `trial_protocol`** | the I/E criteria + field-level source authority ARE the pre-screen engine; `screening_packet` = D7 docs bound to source_authority_map | **`trial_match_candidate`** = patient_facts × trial_protocol.I/E, with `eligibility_gap` (what's missing/unverified) — net-new candidate kind |
| **D7 (docs/consent/media/evidence)** | outside-record upload (U-M records, radiology, path); `media_artifact`/`patient_document`; consent artifacts; one-canonical-many-grants; retention/legal-hold | **`record_ingestion_packet`** (request + receive + verify outside records into source_authority_map); IRB-approved-material handling |
| **CNS** (`candidate`≠commit; AI-proposes-humans-commit; layered-context; `cns_decision`+`trace_lineage`; Network-Governance) | **AI pre-screen = a candidate**, never an enrollment commit; research-coordinator review = the human commit gate; `ai_decision_log` for audit | match-explainability (criterion-level rationale) as a `cns_decision`; the firewall (plan §3) is a CNS policy gate |
| **D6 (commerce)** + **`payment_care_firewall` (§8.1)** | the **`accrual_incentive ≠ care_recommendation` firewall** rides here; SOC-vs-research billing grid; investigational drug not billed to patient; insurance deferred (`REV-159`) | **`sponsor_site_contract` / `payment_schedule`** (per-patient/invoiceable/pass-through); coverage-analysis billing grid; **double-billing prohibition** as an invariant |
| **Federation** (operator-graph 6-tier; grants; jurisdiction) | sponsor / CRO / site / IRB / academic-center / community-practice = **operator nodes**; cross-operator referral = federation grant | **oncologist_referral_candidate** across operators (community↔academic↔site); accrual visibility scoped per operator |
| **D5 (service occurrence) + D3 scheduling** | screening **visit** = `service_occurrence`; trial appointment = scheduling; `care_episode` | research-visit scheduling with travel/financial-support obligations |
| **OFC** (`care_obligation`; `fulfillment_order`) | **`research_navigation_obligation`** = a `care_obligation` subtype ("upload records", "research team will reach out", "screening visit due") | accrual/slot obligations + screen-fail follow-up obligations |
| **RWE / `REV-174` Operating-Intelligence** (C3.6) | **`accrual_state` / `site_trial_capacity`** = Operating-Intelligence projection (enrollment velocity, cohort open/close, pipeline) | sponsor/site accrual dashboards as projections (read-models), not new truth |
| **Surfaces / Projections planes** | patient/family trial surface · oncologist panel-match surface · site pipeline surface · sponsor accrual surface = **projections**, own no truth (`D0THES-DEC-033`) | the **public `trial_listing` / `trial_catalog`** = a governed projection of `trial_protocol` (open status, plain-language eligibility, locations, contact) |
| **RBAC** | research-coordinator / sub-investigator / sponsor-CRA roles; consent-gate; `ai_consent_scope` (per-AI-function consent) | who may see candidate lists, panel matches, accrual data — per-actor partition |
| **Messaging** | patient/family conversation; "give us info and a research team will reach out"; sponsor query loop | **`patient_family_trial_conversation`** = scoped conversation + navigation obligations + IRB-material constraints |

## §2 C3.5 / C3.6 carry-ins directly reusable
- **Anti-diminishment + ownership ladder** (C3.5/C3.6): incumbents = rungs (registries, CTMS, matching vendors, sponsor portals, academic gatekeeping).
- **`payment_care_firewall`** (C3.5/D6) — the spine of the §3 accrual-incentive firewall.
- **`candidate`≠commit + AI-proposes-humans-commit** (CNS) — AI pre-screen proposes; humans (coordinator/PI) commit; never auto-enroll.
- **`source_authority_map` + `trial_protocol`** (C3.6) — the pre-screen + screening-packet engine.
- **Operator-graph = Federation** (no parallel vocabulary); **stress-case-of-one-substrate** (access = another stress-case, not a bolt-on).

## §3 Genuinely NET-TO-RESEARCH / candidate-net-new (C3.7 deltas — earned at G3, not pre-minted)
1. **`trial_match_candidate`** + **`eligibility_gap`** — patient_facts × I/E, with missing/unverified deltas; the matching engine.
2. **`accrual_state` / `site_trial_capacity`** — slot scarcity, cohort open/close, enrollment velocity (Operating-Intelligence projection vs net object — G3).
3. **`sponsor_site_contract` / `payment_schedule`** — the accrual economy, firewalled (D6/BIZOPS/P35 — G3).
4. **`research_intake_session`** + **`record_ingestion_packet`** — research-mode intake + outside-record ingestion into source_authority_map.
5. **`public_trial_listing` / `trial_catalog`** — governed projection of `trial_protocol` for the transparency surface.
6. **`research_navigation_obligation`** — the navigation/transparency obligations ("what's missing, who reviews, who calls next, what if screen-fail").
7. **The multi-sided matching + accrual marketplace physics itself** — and the **`accrual_incentive ≠ care_recommendation` firewall** as a first-class invariant.

## §4 Anti-diminishment anchor (carried into B/C and beyond)
OMNI is the oncology-research **access environment**, not a registry search skin. The matching engine, the source-backed pre-screen, the human-research-team triage, the cross-operator referral, and the firewalled accrual economy are the **environment-of-work**; ClinicalTrials.gov/NCI/CTMS/matching-vendors/sponsor-portals are **rungs**. The wedge is "find + enter the right oncology research pathway, source-backed and authority-gated" — Hims-class ease, research-grade proof, **without overpromising or bending the recommendation for accrual**.

## §5 G1 disposition (for A)
- **Reuse (most of the funnel composes):** Intake, D7, CNS, D6-firewall, Federation, D5/D3, OFC, RWE/REV-174, Surfaces/Projections, RBAC, Messaging, + C3.6 source_authority_map/trial_protocol.
- **Research next (B):** the trial-access/accrual market reality (START/OneOncology, ClinicalTrials.gov/NCI, site economics, accrual pain, matching vendors) — typed + cited, ontology-from-constraints.
- **Synthesize (C):** the access funnel + per-actor/system ownership-ladder map + where the §3 firewall sits. **C must be strong before G2/D (no recruitment fan fiction).**

## Stop / authority
- `analysis_nonbinding` (`GRD-036`); no contract edits. Next in G1: **B → C**, then STOP for G1 trifecta review. Standing flag: git identity unset.

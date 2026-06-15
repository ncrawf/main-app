# v4 — C3.6A: Existing-Asset Inventory (oncology / trials / chemo)

Document type: `analysis` (C3.6 arc — G1 reality-field, artifact A) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `populated_G1_pending_review` 2026-06-14 (C3.6 oncology-trials addendum agent). Sibling: B (cited systems reality map), C (source-authority/truth-plane map + ownership ladder). **C3.5 hospital closure stays closed; this is an addendum hitting G4.1's homeless areas.**
Purpose: before researching the oncology/trial world, inventory **what OMNI already has** (the 15 contracts + the C3.5 arc) so C3.6 reuses canon and only researches/invents the genuine deltas. Establishes **reuse vs net-to-research**.

## §0 The three homeless areas this arc targets (from `v4_C3_5G4_1_contract_deskcheck_addendum.md`)
- **P29 `trial_protocol`** — research/trials substrate. **No contract owns it** (G4.1 §B.3). The big delta.
- **P28 `outcome_intelligence` / RWE plane** — cohort/real-world-evidence. Net-new; routes to the existing `REV-174` Operating-Intelligence/Analytics-Projection sweep (G4.1 §B.6). NOT owned today.
- **P35 `external_capability` / `command_authority_boundary`** — the governed link/data/command boundary for external systems. Net-new control plane; **owner decision = open-review** (G4.1 §B.1). This is where ARIA/OncoEMR/OnCore/EDC/IRT/ePRO/sponsor systems attach — **as ladder rungs, not as a permanent coordination layer** (anti-diminishment doctrine).

## §1 Per-contract reuse map (what already exists; verified — all 15 read 2026-06-14)
| Contract | Reusable for oncology/trials | Delta to research/extend |
|---|---|---|
| **Ordered Fulfillment (OFC)** | `fulfillment_order` (kinds incl. `rx`/`procedure`/`imaging`/`kit`/`device`; lifecycle requested->authorized->ordered->in_fulfillment->output_received->reviewed->released->completed); `care_obligation` (obligation_strength, due/window/recurrence, conversion to appt/occurrence/orchestration) | chemo **regimen = `protocol_order`** (C3.5 net-new, multi-step + lab-gates + double-verify); **`administration_event`** (C3.5 net-new, order≠admin); **IP custody chain** (net-new breaker, §0 P35-adjacent) |
| **Observation** | **the 3-gate model** (artifact-integrity / **data-fidelity** / clinical-adoption) + `verification_state`; structured-first; labs/vitals/RECIST-values/wearable as observations; `source_feed_verified` ≠ `clinically_adopted` | **field-level source authority** generalizes the verification-state idea; RECIST *measurement* source = imaging/read workflow (Observation value + D7 report) |
| **Clinical Memory (CM)** | `clinical_assertion` (append-only, `source_authority`, `clinical_adoption_state`, `evidence_refs`, `supersedes`); adoption gate; reconciliation; "patient improved" = **composite** assertions (multi-signal, no overclaim) | trial AE-grade / endpoint adjudication as **adopted** assertions; research-adoption distinct from care-adoption |
| **D7 (Docs/Consent/Media/Evidence)** | `media_artifact`/`patient_document` (open `document_kind`); `consent_artifact`+`consent_template`+`signature_envelope`+typed `patient_consents`; `evidence_record`/materialized records; **retention_class + legal-hold + GDPR**; one-canonical-many-grants; artifact-integrity gate; amend-not-overwrite | **source documents** (the "source" in source-data-verification); **`disclosure_package`/`legal_hold`** (C3.5 net-new) for sponsor/regulatory export; publication-grade provenance chain |
| **D6 (Commerce)** | **`payment_care_firewall`** (§8.1 — payment state ≠ care state); `treatment_orders` vs `commerce_orders` rails; "no charge for Rx until eligibility"; insurance/HSA-FSA **deferred (`REV-159`)** | **billing-coverage firewall** (SOC vs research-billed; investigational drug NOT billed to patient); `claim_lifecycle` (C3.5 extend); trial-reimbursement-not-influencing-care = firewall instance |
| **CNS** | **Network Governance Plane** (policy/safety/audit/model-registry/`model_version_of_record`); `candidate`≠commit; **layered-context-packet authority-by-action-class** (§9.1); `cns_decision`+`trace_lineage` (= AI-decision log seed); AI-proposes-humans-commit; Patient-CNS coherence + LI signal-ladder; universal flow `source_event->observation->extracted_assertion->adopted->candidate->authorized_action` | **RWE/outcome-intelligence** plane (P28) sits near CNS-LI + `REV-174` Operating-Intelligence; protocol-window obligations = CNS orchestration + OFC obligations |
| **Federation** | **operator-graph** (6-tier); `shared_context_grant`/`visibility_grant`/`care_relationship`; jurisdiction/license; operator-neutrality; cross-operator grants | **sponsor / CRO / site / IRB / central-lab = operator nodes**; multi-operator trial = federation grants; the per-system **ownership-ladder posture** rides here + P35 |
| **RBAC** | permission atoms; **4-tier attestation**; **`break_glass_session`** (= emergency-unblinding mechanism); consent-gate; `capability_envelope` (AI/non-human actors) | **emergency unblind = break-glass + T4 attestation**; blinding visibility = `visibility_grant` + RBAC; **knowledge-partition is a distinct axis** (composes with these) |
| **Identity** | `patient` + `patient_relationship`; `actor` (incl. `device`/`robot`/`external_system`); `source_authority=patient`; `provisional_identity`; `jurisdiction_of_care` | **trial subject** = a `patient_relationship` scope (or net object?); sponsor/monitor/CRA = `actor` subtypes; subject-id vs MRN linkage |
| **Settings/Catalog** | universal `catalog_item`; `service_policy` + 5 gate-timings; pathway; `ai_autonomy_mode`; config-as-code | **`trial_protocol` vs `service_policy`** boundary (is a protocol a heavy service_policy, or its own object?) — a core P29 question |
| **D5 (Service Occurrence)** | `service_occurrence` (**outpatient-scoped by its own §2**); `care_episode`; `encounter_view`; `modality`; `care_state_view` | trial **visit** = `service_occurrence`; **protocol calendar** = `care_episode` + obligations; protocol-window = gate-timing |
| **BIZOPS** | `workforce_member`; provider operational-state; competency/`workforce_intelligence_state` | research-coordinator / CRA / sub-investigator roles + site-ops; trial-staff competency (GCP cert) |
| **Intake** | patient-source capture; **clinical-safety pre-screen (1K.7)**; `treatment_plan_candidate`; deterministic scoring; eligibility gates | **trial eligibility screening** = intake pre-screen extension (biomarker/ECOG/prior-lines/washout/organ-function); screening ≠ enrollment |
| **Messaging** | `conversation_scope`; rail-agnostic 8-gate outbound; send-policy; internal_collaboration | **sponsor/eCRF query loop** = scoped conversation + obligation; SDV correspondence |

## §2 C3.5 net-new objects/chains directly reusable here
- **Objects:** `administration_event` (chemo admin), `external_capability`+`command_authority_boundary` (every incumbent system attaches here, on a ladder rung), `ai_decision_log` (AI-influence/explainability for sponsor/regulatory audit), `ai_consent_scope` (per-AI-function consent — relevant to trial AI), `simulation_harness` (protocol/eligibility regression), `protocol_order` (chemo regimen), `care_blocker_state` (protocol-window/stuckness).
- **Chains:** A universal act-loop (`signal->candidate->authority-gate->act/event->proof->obligation->learn`); Y/GG external-capability chain (`external-system->integration-contract->capability-mode->authority-gate->action->proof`); L disclosure/explainability (sponsor/litigation export); N policy-governance (protocol = governed versioned policy, no silent mutation); K firewalled claim-lifecycle (research vs SOC billing).
- **Decisions carried:** hospital = stress-case of one substrate (so oncology/trials = another stress-case of the SAME substrate, not a bolt-on); operator-graph = Federation canon; P35 capability-mode-today ≠ posture-forever.

## §3 What is genuinely NET-TO-RESEARCH / NET-NEW (the C3.6 deltas)
1. **`trial_protocol` (P29)** — arm/I-E/visit-windows/blinding/dose-schema/AE-rules/sponsor-IRB-obligations. No owner. Is it a full domain or a cross-domain contract over OFC+CNS+Settings+D7+RBAC+Federation? (G4 question)
2. **Field-level `source_authority_map`** — per-fact (source · adoption · extraction · correction · audit · publication lineage). Generalizes Observation's verification-state + CM adoption + CNS layered-context to a **per-element map across the 6 truth planes**. Likely the single most important C3.6 object.
3. **Knowledge-partition / blinding axis** — `blind_state`/`knowledge_partition`/`unblinding_event`/`masked_dataset`/`emergency_unblind_authority`. Distinct from visibility_grant/RBAC (which it composes with): *who may know what truth, when, under what safety exception.*
4. **Investigational-product (IP) custody chain** — shipped->...->administered->returned/wasted/destroyed + temp-excursion + lot/batch + chain-of-custody + sponsor reconciliation. Breaker spanning OFC/D7/P35/trial_protocol/billing-firewall/publication.
5. **EDC/eCRF reconciliation loop** — EHR-source vs eCRF-dataset mismatch, SDV, sponsor query, correction-without-overwrite. The cross-plane reconciliation mechanism (CNS + amend-not-overwrite + source_authority_map).
6. **RWE / outcome-intelligence plane (P28)** — cohort/real-world-evidence as a separate plane (not care-truth/billing-truth/marketing-truth). Routes to `REV-174`.
7. **The 6-truth-plane source-authority mapping itself** — care / protocol / source-data(field) / EDC-eCRF / CTMS-operations / sponsor-publication — and the **per-system ownership-ladder posture** (anti-diminishment).

## §4 Anti-diminishment anchor (carried into B/C/F/G)
Per the plan's binding top constraint: OMNI is **not** a coordination layer between OncoEMR/ARIA/OnCore/EDC. Coordination is the wedge **motion**; environment ownership is the **end-state**. Every incumbent named in B gets a current->target rung on the ownership ladder in C. "External capability" is a rung, not a destiny. The `source_authority_map` is the *mechanism* for safe plane-by-plane takeover, not a confession of middleware.

## §5 G1 disposition (for the A artifact)
- **Reuse (most of the substrate holds):** OFC, Observation, CM, D7, D6-firewall, CNS, Federation, RBAC, Identity, D5, BIZOPS, Intake, Messaging all carry directly (see §1).
- **Research next (B):** the real-world oncology/trial systems + regulatory/operational reality (typed evidence) — to ground C's source-authority map and the per-system ladder posture without letting vendor marketing define ontology.
- **Synthesize (C):** the field-level `source_authority_map` + 6-plane map + knowledge-partition axis + per-system ownership ladder. **C must be strong before D (no oncology fan fiction).**

## Stop / authority
- `analysis_nonbinding` (`GRD-036`); reconciles to existing draft contracts; no contract edits.
- Next in G1: **B** (typed cited research) -> **C** (source-authority map). Then STOP for G1 trifecta review before G2/D.
- Standing flag: git identity unset.

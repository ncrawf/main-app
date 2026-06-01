# Observation / Measurement / Signal — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the structured-measurement substrate + its ingestion-verification (data-fidelity) gate
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext; domain pass #7a; Nick + Knox review gate)
Domain(s): `observation`, `measurement`, `signal`
Lifecycle role: the MEASUREMENT layer — structured, coded, temporal measured values and signals (lab results, vitals, trackables, wearable/CGM/device telemetry, normalized diagnostic values). The middle stage of the universal flow (§8): `media_artifact → observation → extracted_assertion`. It records *what was measured and how faithfully we captured it* — NOT the durable artifact (D7), NOT the clinical claim/adoption (Clinical Memory).
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §1.5. **Controlling lens: thesis §8 universal flow + §12.1 `observation` (first-class primitive)**; **substrate evidence: `patient_state_observations` (1M trackables) + `patient_lab_observations` (1L labs)** + the assertion-layer design's evidence layer. **New domain per Nick + Knox 2026-05-31** (the `+` in "D7 + observation" was hiding a real domain). Method per `00_architecture_artifact_index.md`.
Supersedes: none (clean distillation; 1L/1M + §12.1 = evidence/spine)
Superseded by: none
Manifest action: `add_tier1` · Review gate: `user_knox_required`
**Consolidation statement (binding):** this contract is the single build-facing home for the measured-value/signal layer. Thesis §8/§12.1 + legacy `1L.*` (the 20-subsection Diagnostics + Lab Testing layer) + `1M` are **evidence/provenance, not required runtime reading.** Build from THIS contract. (Legacy-scatter backfill 2026-05-31: Observation owns the **result VALUE + normalization** layer; the **lab-ORDER lifecycle** — state machine / ownership / expiration / retest / review-release — is a separate diagnostic-order workflow, NOT measurement; its home is an open scope decision, `REV-163`. The diagnostic REPORT/PDF → D7.)

---

## §1.5 Freshest-Authority Check (embedded)

| Layer | Source | Disposition |
|---|---|---|
| **Thesis (lens, first-class)** | §12.1 `observation` (structured, coded, temporal, provenance) + §8 flow (`media_artifact → observation → extracted_assertion`) + §1Z (wearable/device signal) | clean-into-contract |
| **Substrate evidence** | `patient_state_observations` (1M trackables — weight/BP/symptom scores) + `patient_lab_observations` (1L lab values) | preserve (existing homes; this domain names + unifies them) |
| **Adjacent** | D7 (artifact), Clinical Memory (assertion/adoption), AI (extraction lineage), Labs/Diagnostics Core Capability (order/fulfillment — Federation/§6.7) | seam |

**Reconciliation:** the thesis makes `observation` a *distinct first-class primitive* from `media_artifact` and `extracted_assertion`. This domain gives it the home it lacked — distinct in shape (structured time-series value: units, reference range, method, collection/result time, abnormal flag) from a blob (D7) and from a clinical claim (CM). **Not a "labs" bucket** — labs/wearables/CGM/diagnostics/vitals/device telemetry are all *producers* of observations.

## §1 Purpose

Observation owns the **structured measured value / signal substrate** and the **ingestion-verification (data-fidelity) gate**: it records measured values with full provenance, and tracks *whether OMNI faithfully captured / parsed / normalized / displayed the source* — explicitly **not** whether a clinician adopted the clinical meaning (that is Clinical Memory's gate).

## §2 Governing thesis concepts

§8 universal flow: `observation` sits between `media_artifact` (D7) and `extracted_assertion` (CM); it is **pre-accountable substrate** (§1548 — left of the authorized_action threshold). §12.1: observation is structured/coded/temporal with provenance. §7.5.3: a measured value is patient/device-source data — `source_authority` preserved; not clinical truth until adopted.

**Build depth bar (Lens A/B; registry + thesis §3.5):** the *actual build* must be **Athena-lab-module-class labs depth on Day 0** (panels, normalization, reference ranges, abnormal flags, trends) on **FHIR/HL7/DICOM/LOINC structured-ingestion standards**, ingesting **Quest/LabCorp** result feeds + wearable/CGM streams. This is the build-facing comparator for Observation.

## §3 Ownership boundary

**Owns:** `observation` (structured measured value/signal); lab results (1L), vitals/trackables (1M), wearable/CGM/device telemetry streams, normalized diagnostic values; units / reference range / method / collection-time / result-time / received-time / abnormal-flag; **the ingestion-verification / data-QC state** (§5); measurement provenance (source device/lab/partner, performing facility).
**Does NOT own:** the durable artifact/blob — diagnostic **report PDF / `report_payload` semi-structured / narrative impression / imaging output** (D7 `media_artifact`/`patient_document`; 1L.3/1L.5); the clinical claim/meaning + adoption (Clinical Memory `extracted_assertion`/assertion); **the lab-ORDER lifecycle** (`lab_orders` state machine 1L.4, ownership 1L.7, expiration 1L.8, retest cadence 1L.9, standalone-vs-program 1L.10, triage/review/release 1L.20) — a **diagnostic-order workflow**, NOT measurement → home open (`REV-163`: own Diagnostics/Lab-Order domain vs decompose across D5 collection-occurrence / CNS workflow+queue+retest / CM review→release / D7 report+release-gate / D6 kit-fee / Federation vendor-adapter / Messaging patient-comms); commerce/insurance (D6); device/patient identity (Identity — device is an `actor`).

## §4 Three distinct gates — "verification" is NOT one word (Nick + Knox locked — DO NOT collapse)

There are **two non-clinical verification levels** plus a **separate clinical-adoption gate**; none implies the next. The word "verification" must never be used ambiguously:

1. **Artifact-integrity verification (D7):** *"Did we store/render the durable artifact faithfully?"* (checksum, signed-URL integrity, lifecycle — D7 §4). About the blob.
2. **Data/extraction-fidelity verification (THIS domain):** *"Did we extract / normalize / display the measured VALUE faithfully against its source?"* (§5 state). About the structured value.
3. **Clinical-adoption gate (Clinical Memory + §7.5):** *"Has an authorized clinician adopted this as care-relevant truth or acted on it?"* About clinical meaning.

**`source_feed_verified` / `human_qc_verified` ≠ `clinically_adopted`**, and neither equals "artifact stored intact." A Quest feed may be data-fidelity-verified yet un-adopted; an AI-parsed Mayo PDF may be a faithfully-stored artifact (D7-integrity OK) whose *extraction* still needs human-QC before display, and still un-adopted. The provider/patient UI MUST show all three distinctly: **source artifact · extracted/verified value · clinically-adopted truth.**

## §5 Ingestion-verification state (data-fidelity lifecycle)

A measured/extracted value carries a **verification state** meaning *"we believe this is an accurate representation of the source."* Illustrative states (contract finalizes exact set — freedom to interpret, NOT a locked enum): `raw_received` · `ai_extracted` · `machine_validated` · `source_feed_verified` · `human_qc_verified` · `needs_review` · `rejected_parse` · `corrected`. Electronic feeds may reach source-feed-verified automatically; AI-parsed documents may require human-QC before structured display; low-quality patient uploads stay unverified-extraction until reviewed. (Open: `REV-153`.)

## §6 Canonical objects

`observation` (structured measured value: concept/analyte, value, unit, reference_range, abnormal_flag, method, collection_time, result_time, received_time, provenance) · time-series/signal grouping (wearable/CGM streams) · `verification_state` (§5) · `extraction_run` reference (model_version/lineage when AI-parsed; owned with AI/Model-Lineage) · provenance block (source device/lab/partner, performing facility, operator/practice context — §8 federation readiness). Exact shapes per contract; reuse 1L/1M substrate where present.

## §7 Invariants / rejection rules

1. **Observation ≠ artifact ≠ assertion** — measured value is its own object; never collapse into the blob (D7) or the clinical claim (CM).
2. **Two-gate** (§4) — data-verification never implies clinical adoption; surfaced as distinct badges.
3. **Pre-accountable** (§7.5.3 / §1548) — an observation is context until a clinical operator adopts/acts; never auto-clinical-truth.
4. **Provenance preserved** — source/device/lab/method/times retained; never flattened away.
5. **Not a labs bucket** — labs/wearables/CGM/diagnostics/vitals are producers; no narrow `lab_intake` collapse.
6. **Federation readiness** (§8) — every observation preserves origin/source-authority/performing-facility/operator-practice context + verification state so cross-practice use is possible.
7. **Reference, don't duplicate** — observation references its source artifact (D7) and feeds assertions (CM) by id; does not copy the blob or own the clinical claim.
8. **Structured-first carve-out** (1L.16a / §1P): structured-schema diagnostics (HL7/FHIR lab feeds) ride the **deterministic** normalization pipeline (1L.6); AI extraction NEVER runs over typed-schema payload fields where deterministic mapping exists.
9. **Dual-model — don't require full normalization** (1L.3): structured analyte values are a **derived layer**, not the only layer; when a result doesn't fully decompose (narrative impression, unmapped marker, imaging), the semi-structured `report_payload` lives on the **D7 diagnostic report** — Observation persists the structured analytes it can normalize, never blocks on full normalization, never stores the report blob.

## §8 Federation / inter-practice readiness

Every observation preserves enough accountability for cross-operator use later: source device/lab/partner, performing facility/practice, operator context, collection/result/received times, units/method/reference, verification state. Cross-practice use occurs via scoped grants + care relationships + projections (Federation), **not** by flattening into one shared chart.

## §9 Disposition table

| Prior primitive | Disposition | Note |
|---|---|---|
| `patient_lab_observations` (1L) | **preserve → name under this domain** | lab result values |
| `patient_state_observations` (1M) | **preserve → name under this domain** | vitals/trackables |
| §12.1 `observation` (thesis) | **adopt as canonical primitive** | §6 |
| wearable/CGM/device telemetry | **belongs here as signal/observation** | not D7, not a new bucket |
| external lab/imaging *report* (the PDF / `report_payload` / narrative) | **artifact → D7**; structured values → here | DL-22 inv 10 / 1L.3 / 1L.5 |
| clinical meaning/diagnosis from a value | **→ Clinical Memory** | §7.1 |
| **1L.6 lab observation normalization** | **place → here (Observation)** | the result-value layer is squarely Observation |
| **1L.4 `lab_orders` state machine + 1L.2 object model + 1L.7 ownership + 1L.8 expiration + 1L.9 retest loop + 1L.10 standalone-vs-program + 1L.20 triage/review/release** | **NOT Observation — diagnostic-order workflow; home open** (`REV-163`) | own Diagnostics/Lab-Order domain vs decompose D5/CNS/CM/D7/D6/Federation/Messaging |
| **1L.14 vendor partner adapter** | **→ Federation/partner-adapter** | rail-agnostic (like payment rails / messaging rails); vendor in `metadata.vendor_partner_id`, not enums |
| **1L.15 patient-facing lab comms** | **→ Messaging** | transport of lab results to patient |
| **1L.16 continuation gating + retest cadence** | **→ CNS / D5 `care_episode` continuation** | care-coordination, not measurement |
| **1L.0 future modalities (imaging/stool/device/external-upload)** | **same pipeline shape** | `diagnostic_source_type`; reuse the value/report/observation split |

## §10 Seams

- **D7 → Observation** (artifact extraction → structured values; AI parse carries `extraction_run`/model_version + verification state).
- **Observation → Clinical Memory** (observation supports an assertion; CM holds `source_observation_ids`; lab_derived assertion stays `unconfirmed`).
- **Observation → CNS** (context-packet input; authority-labeled; CNS may use for routing/screening, see CNS contract layered-context-packet rule).
- **Device → Identity** (wearable/CGM device = `actor`; source identity preserved).
- **Labs/Diagnostics order workflow → Observation** (a fulfilled order produces result VALUES, which land here; the order lifecycle itself is `REV-163`'s home, not Observation).
- **Observation ↔ D7** (the diagnostic report PDF / `report_payload` is the D7 artifact; Observation holds the normalized analytes + references the report by id; 1L.5 report→order binding).
- **Diagnostic vendor (Quest/Labcorp) → Federation partner-adapter** (rail-agnostic; result feed lands as observations + report).
- **Observation → Messaging** (patient-facing lab-result comms = Messaging transport; 1L.15).
- **lab kit fee → D6** (1L.2 commerce-created order path; the fee is commerce, the values are here).

## §11 Open items (→ `08`)

- **Ingestion-verification state machine** (`REV-153`): finalize the verification-state set + which sources reach which state automatically (electronic feed vs AI-parsed PDF vs patient screenshot) + the human-QC workflow + who performs QC. Build-shaped.
- Relationship of 1L/1M existing tables to the unified observation model (build-state, shares `REV-152`).
- CNS layered-context-packet evidence-authority policy (`REV-154`, cross-domain — see CNS contract).
- **Lab-ORDER lifecycle home** (`REV-163`): the §1L `lab_orders` workflow (state machine / ownership / expiration / retest / standalone-vs-program / triage-review-release) is NOT measurement and needs a home decision — its OWN Diagnostics/Lab-Order domain (like Observation was split out), OR decomposition across D5 (collection occurrence) / CNS (workflow orchestration + queue + retest cadence) / CM (review→release adoption) / D7 (report + release gate) / D6 (kit fee) / Federation (vendor adapter) / Messaging (patient comms). Surfaced by the 2026-05-31 Observation backfill; trifecta scope decision.

## §12 Evidence sources

thesis §8 + §12.1 + §1Z + §7.5.3 · legacy **§1L Diagnostics + Lab Testing layer (1L.0–1L.20)**: 1L.2 object model / 1L.3 structured+semi-structured / 1L.4 state machine / 1L.6 normalization / 1L.7 ownership / 1L.9 retest / 1L.14 vendor adapter / 1L.16/16a continuation+structured-first / 1L.20 triage-review-release · `patient_lab_observations` (1L) + `patient_state_observations` (1M) · clinical_assertion_layer_design (evidence layer §B/§G) · intake README (observation routing) · DL-22 inv 10.

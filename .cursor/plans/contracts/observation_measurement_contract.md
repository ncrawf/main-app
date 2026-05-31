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

## §3 Ownership boundary

**Owns:** `observation` (structured measured value/signal); lab results (1L), vitals/trackables (1M), wearable/CGM/device telemetry streams, normalized diagnostic values; units / reference range / method / collection-time / result-time / received-time / abnormal-flag; **the ingestion-verification / data-QC state** (§5); measurement provenance (source device/lab/partner, performing facility).
**Does NOT own:** the durable artifact/blob (D7 `media_artifact`/`patient_document`); the clinical claim/meaning + adoption (Clinical Memory `extracted_assertion`/assertion); the order/fulfillment of a lab/diagnostic (Labs/Diagnostics Core Capability → Federation/§6.7); commerce/insurance (D6); device/patient identity (Identity — device is an `actor`).

## §4 The two-gate model (the nuance Nick + Knox locked — DO NOT collapse)

OMNI distinguishes **two independent gates**; neither implies the other:

1. **Ingestion / data-verification gate (this domain + D7 extraction):** *"Did OMNI faithfully capture, parse, normalize, and display the source value?"* — a **data-fidelity** question, NOT clinical decision-making.
2. **Clinical-adoption gate (Clinical Memory + §7.5):** *"Has an authorized clinician adopted this as care-relevant truth or acted on it?"*

**`source_feed_verified` / `human_qc_verified` ≠ `clinically_adopted`.** A Quest electronic feed may be source-feed-verified yet un-adopted; an AI-parsed Mayo PDF may need AI-extract → human-QC before display, yet still un-adopted. The provider/patient UI MUST show both badges distinctly (source · extraction/verification · clinical adoption).

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

## §8 Federation / inter-practice readiness

Every observation preserves enough accountability for cross-operator use later: source device/lab/partner, performing facility/practice, operator context, collection/result/received times, units/method/reference, verification state. Cross-practice use occurs via scoped grants + care relationships + projections (Federation), **not** by flattening into one shared chart.

## §9 Disposition table

| Prior primitive | Disposition | Note |
|---|---|---|
| `patient_lab_observations` (1L) | **preserve → name under this domain** | lab result values |
| `patient_state_observations` (1M) | **preserve → name under this domain** | vitals/trackables |
| §12.1 `observation` (thesis) | **adopt as canonical primitive** | §6 |
| wearable/CGM/device telemetry | **belongs here as signal/observation** | not D7, not a new bucket |
| external lab/imaging *report* (the PDF) | **artifact → D7**; structured values → here | DL-22 inv 10 / Q-DL22-5 |
| clinical meaning/diagnosis from a value | **→ Clinical Memory** | §7.1 |
| lab order/fulfillment | **→ Labs/Diagnostics Core Capability (Federation)** | not substrate-measurement |

## §10 Seams

- **D7 → Observation** (artifact extraction → structured values; AI parse carries `extraction_run`/model_version + verification state).
- **Observation → Clinical Memory** (observation supports an assertion; CM holds `source_observation_ids`; lab_derived assertion stays `unconfirmed`).
- **Observation → CNS** (context-packet input; authority-labeled; CNS may use for routing/screening, see CNS contract layered-context-packet rule).
- **Device → Identity** (wearable/CGM device = `actor`; source identity preserved).
- **Labs/Diagnostics Core Capability → Observation** (fulfilled order produces result values; order/fulfillment owned by the operator/Federation).

## §11 Open items (→ `08`)

- **Ingestion-verification state machine** (`REV-153`): finalize the verification-state set + which sources reach which state automatically (electronic feed vs AI-parsed PDF vs patient screenshot) + the human-QC workflow + who performs QC. Build-shaped.
- Relationship of 1L/1M existing tables to the unified observation model (build-state, shares `REV-152`).
- CNS layered-context-packet evidence-authority policy (`REV-154`, cross-domain — see CNS contract).

## §12 Evidence sources

thesis §8 + §12.1 + §1Z + §7.5.3 · `patient_lab_observations` (1L) + `patient_state_observations` (1M) · clinical_assertion_layer_design (evidence layer §B/§G) · intake README (observation routing) · DL-22 inv 10 (external report → opaque PDF; structured ingestion = separate pipeline).

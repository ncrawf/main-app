# Lab-derived Assertion Emitter `authored_by` Mapping (in-place clarification)

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** lab data edge-case pressure test (10 cases); minimal in-place clarification of how lab data source maps to assertion `authored_by`
**Verdict:** Option B — single in-place clarification patch; ~12 lines net; no new sections, fields, tables, or APIs

---

# Part 1 — The pressure test (10 cases)

The 10 cases test whether the model handles all combinations of: ordering source (us / outside / patient), performing source (our partner / external partner / extraction / memory), result status (pending / preliminary / final / extracted), and provider review status. Summary:

| # | Case | Existing model handles? |
|---|---|---|
| 1 | Internal order through our partner, resulted normally | YES — `lab_derived` authority; satisfies gates |
| 2 | Outside lab uploaded as PDF by patient | Implicit; needs explicit mapping → `document_extracted` |
| 3 | Patient self-reports lab value from memory | Implicit; needs explicit rule → assertion-only, no `patient_lab_observations` row |
| 4 | PDF uploaded + AI/OCR extracted, provider not reviewed | Implicit; needs explicit mapping → `document_extracted`, blocks gates |
| 5 | Outside structured feed from a partner source | Implicit; needs explicit mapping → `lab_derived` w/ `confidence = moderate` |
| 6 | Old but clinically relevant lab | YES — `1K.5` freshness profiles handle |
| 7 | Safety-critical abnormal lab | YES — `1L.20` triage + lab-derived emitter |
| 8 | Internal order placed, result pending | YES — `1L.4` state machine |
| 9 | Conflicting labs (patient 5.8 / PDF 6.8 / internal 7.1) | YES — authority precedence + reconciliation policy + pattern rollup |
| 10 | Outside recent labs satisfy our prescribing? | Implicit; needs explicit policy → provider supersession is the elevation path |

Cases 1, 6, 7, 8, 9 work cleanly via existing rules. Cases 2, 3, 4, 5, 10 share one structural gap: the **explicit mapping from lab source → assertion `authored_by` value is currently undocumented**. Engineers building the lab-derived emitter would have to guess; missing this would silently over-promote AI-extracted labs to gate-satisfying authority.

---

# Part 2 — The gap

The current model has all the underlying fields:

| Question | Captured by |
|---|---|
| Internal vs outside lab | `patient_diagnostic_reports.vendor` + `lab_order_id` presence |
| Ordered by us vs outside provider vs patient self-report | `lab_order_id` (us) + `patient_reported` authored_by (no row) + outside if neither |
| Performing lab/vendor identity | `vendor` + `vendor_id` |
| Result status (pending/preliminary/final) | `1L.4` `lab_orders.status` state machine |
| Extraction status | `raw_*` metadata on `patient_lab_observations` |
| Provider review status | `reviewed_at` on `patient_diagnostic_reports` |
| Freshness/recency | `1K.5` `freshness_profile` per field_name |
| Gate eligibility | derived from `authored_by` + `concept.default_authority_floor` |

What's missing: **the explicit mapping rule** from those fields to the assertion's `authored_by` value. Without explicit guidance, an engineer building the emitter might assign `lab_derived` to AI-extracted labs (silently elevating them to gate-satisfying authority) or to patient memory reports (silently creating bogus lab observations).

---

# Part 3 — Decision: Option B (single in-place clarification patch)

Add explicit `authored_by` mapping rules to the existing `1L.17` cross-link entry that mentions the lab-derived emitter. Single inline addition; no new section.

## The mapping (binding)

| `patient_diagnostic_reports.vendor` | `lab_order_id` | Other markers | `authored_by` | `confidence` | Notes |
|---|---|---|---|---|---|
| `lab_partner` / `at_home_kit` / `device` | NOT NULL (we ordered) | structured | `lab_derived` | `high` | Highest lab-tier authority; satisfies `default_authority_floor = lab_derived` |
| `lab_partner` | NULL (cross-vendor feed for outside-ordered lab) | structured | `lab_derived` | `moderate` | Vendor-issued + structured but outside-ordered; concept policy may require provider review |
| `external_upload` | NULL | `raw_*` metadata indicates AI/OCR extraction | `document_extracted` | `moderate` | Cannot satisfy `lab_derived` floor until provider supersedes |
| `external_upload` | NULL | values manually entered by ops/provider from paper record | `provider_assessed` | `high`, `status = provider_confirmed` | Provider validated by entering |
| (no diagnostic_report; no observation row) | N/A | patient self-report from memory ("my A1c was 7.0 last year") | `patient_reported` | low/moderate | Assertion-only with `metadata.value`, `metadata.units`, `metadata.observation_date_estimated`, `metadata.value_source = 'patient_self_report'`. Never satisfies lab-tier floor. |

## Provider supersession path (already in model)

For any outside lab assertion (lab_derived w/ moderate confidence, document_extracted, etc.), provider can write a new assertion via `recordClinicalAssertion` with `authored_by = provider_assessed` or `provider_confirmed` to elevate the lab to gate-satisfying authority. This supersession path is already documented; the clarification just makes it explicit that this is the standard elevation mechanism for outside labs.

---

# Part 4 — What this preserves

- No new tables, fields, APIs, sections.
- `patient_lab_observations` semantics intact — vendor-issued (structured or extracted) lands here; patient memory does NOT.
- `patient_diagnostic_reports.vendor` enum unchanged.
- Authority floor enforcement at `1J.10` unchanged.
- Supersession discipline intact.
- Reconciliation policy for conflicting labs unchanged.
- Pattern rollup unchanged.

# Part 5 — What this gains

- Explicit emitter contract — engineer building the emitter has unambiguous rules.
- Clear external-lab acceptance path — outside labs satisfy gates ONLY via explicit provider supersession.
- Patient-reported values stay informational — no silent creation of lab observations from memory.
- Conflict semantics aligned — labs render with full provenance; never silently overwrite.

# Part 6 — What NOT to build (overbuild risk)

- New `lab_provenance` enum on `patient_diagnostic_reports` — `vendor` + `lab_order_id` + `reviewed_at` already captures this.
- New `result_authority` enum on `patient_lab_observations` — assertion's `authored_by` already captures.
- New `clinical_gate_eligible` boolean — computed at preflight time from `authored_by` + concept policy.
- Concept-registry `external_lab_acceptance_policy` field — provider supersession path handles all current pathways.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30. Single in-place clarification applied to `1L.17` cross-link entry alongside this audit. After landing: lab semantics fully locked for `repo/clinical-concepts/` file authoring — concept registry can declare `default_authority_floor` for lab concepts (e.g., `lab.beta_hcg`, `lab.testosterone_total`, `lab.amylase`) knowing the emitter will assign correct `authored_by` per source quality.

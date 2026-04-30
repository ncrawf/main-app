# Retrievability + Analytics + Future Metrics Pressure Test

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** verify all recently added structured clinical context fields remain queryable for safety preflight, packet rendering, queue priority, cohort analytics, AI training features, quality review, and compliance/audit reporting; lock a defensive discipline rule
**Verdict:** Option B — single in-place discipline rule (~8 lines net); current model is structurally retrievable; rule prevents future drift

---

# Part 1 — Field-by-field discipline check

For each recently added dimension across all design rounds:

| Field | Storage | Structured? | Enum-stable? | In provenance? | Cohort-queryable? | Safe for AI features? | Preserves source? | Avoids dup truth? |
|---|---|---|---|---|---|---|---|---|
| `metadata.disease_state` | jsonb | yes | yes (~13 values) | yes | yes | yes | yes | yes |
| `assertion_type` | typed column | yes | yes (11 values) | yes | yes | yes | yes | yes |
| `context.episode_id` | jsonb | yes (UUID string) | n/a | yes | yes | yes | yes | yes |
| `context.episode_kind` | jsonb | yes | yes (~6 values) | yes | yes | yes | yes | yes |
| `context.care_management_source` | jsonb | yes | yes (5 values) | yes | yes | yes | yes | yes |
| `authored_by` / `authority_rank` | typed column / generated | yes | yes (8 values) | yes | yes | yes (with hard rule: never authority promotion signal) | yes | yes |
| `confidence` / `confidence_score` | typed column | yes | yes (4) / numeric for AI | yes | yes | yes | yes | yes |
| `evidence_refs` | jsonb array | yes (typed pointers) | yes (kind enum) | yes (this IS the provenance) | yes | yes | yes (immutable refs) | yes |
| `onset_at` / `resolved_at` | timestamptz | yes | n/a | yes | yes | yes | yes | yes |
| `severity` | typed column | yes | yes (6 values) | yes | yes | yes | yes | yes |
| `patient_diagnostic_reports.vendor` | typed column | yes | yes (per 1L.13) | yes | yes | yes | yes | yes |
| `lab_order_id` presence | nullable FK | yes | n/a (presence semantic) | yes | yes | yes | yes | yes |
| `patient_lab_observations` per-value | structured row | yes (per 1L.6) | yes (LOINC codes) | yes | yes | yes | yes | yes |
| `supersedes_assertion_id` | nullable FK | yes | n/a | yes | yes | yes | yes | yes |
| `freshness_profile` | code-as-config (per field_name) | yes | yes (4 values) | yes | yes (shadow if heavy analytics use) | yes | yes | yes |
| `longitudinal_pattern` (rollup view) | computed view | yes | yes (6 values) | derived; chain is source | yes | yes (with hard rule: never satisfies authority floor) | yes (pure projection) | yes (no source mutation) |
| `metadata.completion_status` | jsonb | yes | yes (4 values) | yes | yes | yes | yes | yes |

**Every dimension passes.** No buried-in-prose data. No unstable enums. No silent duplication.

---

# Part 2 — Future query traces

10 representative future queries. All retrievable against current schema.

| # | Query | Fields used | Retrievable? |
|---|---|---|---|
| 1 | Externally managed GLP-1 + nausea | `concept_id`, `assertion_type`, `context->>'care_management_source'` | YES |
| 2 | Acute COPD exacerbation during intake | `concept_id`, `metadata->>'disease_state'` | YES |
| 3 | Patient-reported pancreatitis hx + abdominal pain | `concept_id`, `assertion_type`, `authored_by` | YES |
| 4 | Stale A1c + active GLP-1 request | `concept_id`, `asserted_at`, treatment_items state | YES |
| 5 | Outside labs accepted by provider | `authored_by`, `supersedes_assertion_id`, `confidence` | YES |
| 6 | Conflicting lab values by source | `concept_type`, `longitudinal_pattern` | YES |
| 7 | side_effect_course_active grouped by medication/pathway | `metadata->>'disease_state'`, `context->>'pathway_code'`, `context->>'treatment_item_id'` | YES |
| 8 | Internal_program vs outside_provider medications | `concept_type`, `context->>'care_management_source'` | YES |
| 9 | Avg time from outside lab upload to provider acceptance | `authored_by`, `confidence`, `supersedes_assertion_id`, `asserted_at` | YES |
| 10 | % safety blocks by source authority | `pending_patient_input_tasks.required_concept_id` (added prior round), `authored_by` | YES |

All 10 work. JSONB path lookup is the slowest; GIN index on `context` jsonb can be added later when measurable slow queries surface.

---

# Part 3 — The defensive gap

What's NOT in the system map: an explicit binding rule that says **this discipline must hold for all FUTURE structured clinical context fields too**. Without it, when someone in 6 months adds a new dimension (e.g., "side effect type", "treatment response", "encounter scope"), they have no guardrail telling them not to put it in free-text metadata.

Cross-industry framing for the rule:
- **Amazon:** every event payload field is typed with an enum or strict shape; rejects free-text where structure is possible.
- **Apple:** trust-preserving analytics requires clear provenance and authority semantics on every dimension that affects user-facing decisions.
- **Tesla:** every telemetry signal has fixed enum semantics; free-text would break sensor fusion.

---

# Part 4 — In-place discipline rule (binding)

Single paragraph (~8 lines net) inserted before the existing **Analytics SQL discipline rules for partial assertions** paragraph in 1K.5.A. Locks the structured-field discipline as a foundational rule that all future field additions must respect.

## What this preserves

- No new tables, fields, APIs, sections.
- All existing queries unchanged.
- No performance commitment.
- No CI infrastructure built today (rule names CI lint as the enforcement mechanism; tooling can be implemented incrementally).

## What this gains

- Defensive against future drift.
- Explicit consumer contract (every consumer knows the dimensions it can rely on having stable shape).
- Compliance + audit readiness (FDA / HIPAA "show me how clinical data is queryable for safety reporting" → this rule is the answer).
- Shadow-table discipline extends to future analytics-relevant dimensions.

## What NOT to build

- GIN index on `context` jsonb — defer until measurable slow query.
- Materialized rollup view — defer per existing rule (live-computed in v1).
- Generated columns extracting jsonb to typed columns — defer; jsonb path access is fine at v1 scale.
- Shadow tables for every code-as-config registry — only `clinical_concepts_registry_snapshot` exists; shadow `freshness_profile` registry only when analytics demand emerges.
- Schema-driven CI lint tooling — discipline rule names the discipline; building the lint tooling itself is a separate engineering task.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30. Single in-place patch applied to 1K.5.A immediately before the existing Analytics SQL discipline rules paragraph alongside this audit.

After landing: `repo/clinical-concepts/` file authoring proceeds with retrievability discipline locked as foundational.

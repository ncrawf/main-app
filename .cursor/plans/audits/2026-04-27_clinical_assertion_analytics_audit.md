# Clinical Assertion Layer Analytics + Context-Generalization Audit

**Date:** 2026-04-27
**Audited:** `1K.5.A` clinical concept + assertion layer (post follow-up audit `2dfed9f`)
**Scope:** downstream analytics + data utility audit; check-in context refinement; generalized AssertionContext principle (identity namespace vs supplemental envelopes)
**Verdict:** MINOR GAPS — all closeable with one combined patch round (no schema redesign, no new core abstractions)

---

# Part 1 — Downstream analytics audit

The model was tested against 7 categories of realistic queries. Most pass cleanly; 4 small gaps surfaced that block real-world analytics usability without changing the core model.

## Category-by-category verdict

| # | Category | Verdict | Gap |
|---|---|---|---|
| 1 | Intake analytics ("how many patients answered yes to MTC in last 60 days?") | PASS | none |
| 2 | Clinical state analytics ("how many provider-confirmed diabetes?") | MINOR GAP | concept registry needs DB shadow for analytics joins |
| 3 | Contextual analytics ("how many GLP-1 patients reported nausea at week 4?") | MINOR GAP | per-check-in episode/cadence context needed; check_in_episode_id collapses currently |
| 4 | Longitudinal / transition analytics ("how many patient-reported conditions later confirmed?") | MINOR GAP | missing index on `supersedes_assertion_id` |
| 5 | Source-based analytics ("% of AI-suggested assertions later confirmed") | MINOR GAP | missing index on `(authored_by, asserted_at)` |
| 6 | Safety / operational analytics ("most common blocking concepts") | MINOR GAP | `pending_patient_input_tasks` needs `required_concept_id` parallel to `required_field_name` |
| 7 | System-input interface (Rx, charges, orders) | PASS | one reinforcement: medication assertions MUST populate `metadata.treatment_item_id` when present-and-current (tighten existing "when relevant" language) |

## Original 5 fixes proposed

1. DB-shadow of `clinical_concepts` registry (versioned snapshot table mirroring code-as-config registry for SQL joins)
2. Per-check-in context mechanism (originally `inherits_check_in_episode_id`; refined in Part 2 below)
3. `required_concept_id text` field on `pending_patient_input_tasks` parallel to `required_field_name`
4. Two indexes on `patient_clinical_assertions`: partial index on `supersedes_assertion_id WHERE NOT NULL`; index on `(authored_by, asserted_at)`
5. Reinforcement: medication assertions with `concept_type = 'medication' AND assertion_type IN ('present', 'use')` MUST populate `metadata.treatment_item_id` when current

---

# Part 2 — Check-in context refinement

The original Fix 2 (`inherits_check_in_episode_id` boolean) was too thin. Real check-ins are messy:

- **Scheduled but late** — week-4 check-in answered on day 35
- **Missed** — system re-prompts at week 6 for the missed week-4 slot
- **Patient-initiated** — Mode J or `1G.11.2` `report_concern` action item, no schedule
- **Provider-requested** — Mode E `clinical_required` follow-up
- **System-triggered safety** — post-lab-abnormal recheck, post-dose-change check
- **Dose-change-triggered** — auto-scheduled or scheduled on the cadence

A robust check-in context separates schedule-vs-actual cadence and origin-vs-trigger.

## Refined `check_in` sub-shape

```ts
check_in?: {
  check_in_episode_id: string;                                   // UUID per check-in invocation; same UUID on all assertions emitted from the same check-in
  check_in_origin: 'scheduled_cadence' | 'unscheduled_followup' | 'patient_initiated_concern' | 'provider_requested' | 'system_triggered_safety';
  scheduled_cadence_marker?: string;                             // 'week_4', 'week_8', 'refill_1', 'month_3' — populated ONLY when check_in_origin = 'scheduled_cadence'; preserves the slot even if patient is late
  occurred_at: string;                                           // timestamptz when patient answered (≠ asserted_at if ingest delay)
  trigger_reason?: 'routine_followup' | 'side_effect' | 'missed_checkin' | 'safety_recheck' | 'dose_change' | 'patient_concern' | 'provider_recheck';
  days_since_program_start?: number;
  days_since_treatment_start?: number;                           // typically same as program_start; differs in re-treatment / restart
  days_since_last_dose?: number;
  days_since_dose_change?: number;
};
```

## Cohort query examples

```sql
-- SCHEDULED week-4 cohort
WHERE context->'check_in'->>'check_in_origin' = 'scheduled_cadence'
  AND context->'check_in'->>'scheduled_cadence_marker' = 'week_4';

-- ACTUAL elapsed-days cohort (25-35 days after start)
WHERE (context->'check_in'->>'days_since_treatment_start')::int BETWEEN 25 AND 35;

-- EVENT-TRIGGERED cohort (within 14 days of dose escalation)
WHERE context->>'dose_context' = 'dose_escalation'
  AND (context->'check_in'->>'days_since_dose_change')::int <= 14;

-- ON-TIME vs LATE check-in distribution for week_4
SELECT scheduled_cadence_marker,
  CASE WHEN ABS(days_since_treatment_start - 28) <= 3 THEN 'on_time' ELSE 'late' END AS timeliness
FROM ...
```

---

# Part 3 — Generalized AssertionContext principle

The check-in refinement uncovered a generalizable pattern: AssertionContext has TWO categories with different rules.

## The principle (binding)

1. **Identity namespace** — fields that define the assertion's clinical identity. Fixed allowlist. Hashed into `context_key`. New entries here require explicit governance because adding a field reshapes how supersession works for ALL existing assertions.

2. **Supplemental envelopes** — per-source descriptive metadata. Optional jsonb sub-shapes (`context.check_in`, `context.lab`, `context.provider_assessment`, etc.). Each source emitter populates its own envelope. NOT in `context_key` hash. New envelopes are additive — old readers degrade gracefully on absent data.

Three rules:
1. **Identity ≠ provenance.** "What clinical state is being claimed" (identity) is separate from "how was it captured" (provenance).
2. **Each source owns its envelope.** Lab emitter populates `context.lab`; provider write populates `context.provider_assessment`; AI emitter populates `context.ai`. No envelope is required-on-write; missing envelopes are NULL.
3. **Envelopes are extensible per-source over time.** Adding new optional fields to a sub-shape doesn't break readers.

## Identity namespace (8 fields, fixed allowlist; in `context_key` hash)

```ts
care_program_id, pathway_code, treatment_item_id, dose_context,
episode_id, episode_kind, treatment_phase, semantic_context
```

Adding a 9th field to the identity namespace requires CODEOWNERS review (it reshapes supersession).

## `canonicalContextKey()` function (the SINGLE source of truth)

```ts
function canonicalContextKey(context: AssertionContext): string {
  const keyFields = {
    care_program_id: context.care_program_id ?? null,
    pathway_code: context.pathway_code ?? null,
    treatment_item_id: context.treatment_item_id ?? null,
    dose_context: context.dose_context ?? null,
    episode_id: context.episode_id ?? null,
    episode_kind: context.episode_kind ?? null,
    treatment_phase: context.treatment_phase ?? null,
    semantic_context: context.semantic_context ?? null,
  };
  return sha256(canonicalJSON(keyFields));   // hex; deterministic field order
}
```

## v1 supplemental envelopes (3 sub-shapes, all optional)

### `check_in` (Mode E/F/J/1G.11.2; refined per Part 2)

See refined shape above.

### `lab` (lab-derived emitter per `1L.20`)

```ts
lab?: {
  lab_kind: 'home_kit' | 'venipuncture' | 'finger_stick' | 'partner_lab' | 'walk_in_lab' | 'external_reported';
  abnormal_flag?: 'low' | 'normal' | 'high' | 'critical';
  result_age_days?: number;          // days between specimen collection and assertion emission
  order_reason?: 'baseline' | 'monitoring' | 'safety_recheck' | 'rule_out';
  diagnostic_report_id?: string;     // pointer; redundant with evidence_refs but typed for fast cohort queries (Q1 decision: denormalize)
};
```

### `provider_assessment` (provider-authored via `recordClinicalAssertion`)

```ts
provider_assessment?: {
  visit_kind: 'synchronous_video' | 'synchronous_phone' | 'asynchronous_message' | 'provider_review_only';
  assertion_action: 'new_diagnosis' | 'confirmation_of_prior' | 'rejection_of_prior' | 'refinement_of_prior' | 'resolution_of_prior';
  superseded_assertion_authored_by?: 'patient_reported' | 'patient_self_correction' | 'lab_derived' | 'document_extracted' | 'ai_suggested';   // Q2 decision: denormalize from supersession chain for fast "what type of assertion did the provider act on" queries
};
```

## Deferred sub-shapes (typed slots; shape TBD when emitter ships)

```ts
document?:             // ships with document extraction emitter (1K.5.A build-order item 10)
medication_exposure?:  // ships with external medication reconciliation
ai?:                   // ships with AI emitter (1K.5.A build-order item 11)
adverse_event?:        // ships when MedWatch / FDA pharmacovigilance becomes a requirement
```

These are declared as `?: { /* TBD when emitter ships */ }` so the principle is documented and extension contract is clear without committing to a shape.

## Five risks of NOT generalizing

1. Lab analytics drift to ad-hoc multi-table joins
2. Provider-action analytics become unauditable (must walk supersession chain)
3. Source-specific data leaks into unstructured `metadata` jsonb without consistency
4. Identity namespace contamination risk (next engineer adds source-specific field at top level → fragments `context_key`)
5. Future emitters re-derive the same patterns inconsistently (each picks its own approach)

All five collapse to: declare the principle + v1 sub-shapes + deferred slots + locked `context_key` allowlist.

---

# Part 4 — Q1 + Q2 decisions (adopted)

Two binary decisions called out in the prior round:

- **Q1.** `lab.diagnostic_report_id` denormalized vs evidence_refs only? **Q1 = denormalize.** Storage cost trivial; jsonb extraction at query time is slower; cohort queries by report id are common. Stored as a typed field on `context.lab.diagnostic_report_id`; redundant with `evidence_refs` `kind: 'patient_diagnostic_report'` pointer but typed.
- **Q2.** `provider_assessment.superseded_assertion_authored_by` denormalized vs computed via supersession chain? **Q2 = denormalize.** Computing requires cross-table self-join on the same row; expensive at scale. Stored as a short string; populated by `recordClinicalAssertion` when `assertion_action != 'new_diagnosis'`.

Both decisions are reflected in the v1 sub-shapes above.

---

# Part 5 — Patch round (one checkpoint)

All edits are in-place to existing sections. No new subsections. No schema migration in the system map (the migrations themselves land in the eventual SQL migration files; the map updates the canonical schema declaration).

| # | Patch target | What changes |
|---|---|---|
| 1 | `1K.5.A` AssertionContext shape (lines 3163-3177) | Replace single-shape definition with two-namespace structure: identity namespace (8 fields, including `treatment_phase`) + 3 v1 supplemental sub-shapes (check_in, lab, provider_assessment) + 4 deferred slots (document, medication_exposure, ai, adverse_event) |
| 2 | `1K.5.A` after AssertionContext (line 3180) | Add Generalized context principle paragraph + explicit `canonicalContextKey()` function definition |
| 3 | `1K.5.A` patient_clinical_assertions schema (line 3154) | Add 2 indexes: `CREATE INDEX ... (supersedes_assertion_id) WHERE supersedes_assertion_id IS NOT NULL` and `CREATE INDEX ... (authored_by, asserted_at)` |
| 4 | `1K.5.A` clinical_concepts registry section (line 3102) | Add DB-shadow note: a versioned `clinical_concepts_registry_snapshot` view-or-table mirrors the code-as-config registry on PR merge for SQL analytics joins |
| 5 | `1K.5.A` medication assertion clause (line 3262) | Tighten "when relevant" → "MUST when present-and-current" for `metadata.treatment_item_id` linkage |
| 6 | `1K.4` question-bank concept_mapping context_template (line 3001) | Extend with `inherits_check_in: boolean`, `lab_emitter_populates: boolean`, `treatment_phase?` |
| 7 | `1G.11.3` pending_patient_input_tasks (line 1689) | Add `required_concept_id text` field parallel to `required_field_name` |

Estimated +60-80 lines net to system map. No tables added. No APIs added. No semantics changed for any existing reader.

---

## Disposition

User approved on 2026-04-27 with Q1 = denormalize and Q2 = denormalize adopted. Both reflected in v1 sub-shapes. Patch round applied in single checkpoint alongside this audit file.

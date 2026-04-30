# Acute States — Promotion-Threshold Model (instead of separate `clinical_episodes` table)

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** decide how to model acute states (exacerbations, flares, decompensations, side-effect courses, acute events) — assertion + structured metadata vs separate `clinical_episodes` entity
**Verdict:** assertion + structured metadata for v1; documented promotion threshold for future first-class entity

---

# Part 1 — The pushback that was correct

The initial proposal was a separate `clinical_episodes` table sibling to `patient_clinical_assertions` with its own write API, view, authority discipline, supersession chain, and ~110 lines of new subsection (1K.5.B). Clinical CODEOWNER pushed back: this risks creating a second clinical fact system parallel to assertions, which is the danger.

The pushback was right. Tracing through every claimed capability:

| Capability claimed for separate table | Actually requires separate table? | What handles it in the existing assertion model |
|---|---|---|
| Time-bound start/end | No | `onset_at`, `resolved_at` already on every assertion |
| Severity tracking | No | `severity` field; sequential supersession captures progression |
| Append-only history | No | `patient_clinical_assertions` is already append-only with supersession |
| Authority discipline | No | Same `authored_by` + `authority_rank` enum applies |
| Status transitions | No | New assertion with new `metadata.disease_state`; existing pattern |
| Active state query | No | `patient_clinical_assertion_current` filtered by `metadata.disease_state` |
| Pathway blocking on active state | No | Concept registry declares `active_disease_state_blocks_pathways[]`; preflight reads `current.metadata.disease_state` |
| Recurrence count | No | `COUNT(DISTINCT context.episode_id) FROM assertions WHERE concept_id = X AND disease_state acute` |
| Multi-row episode lifecycle (severe → moderate → mild → resolved) | No | Sequential supersession on same `(concept_id, context_key)`; each row = one progression point |
| Provider workspace "active episodes" panel | No | Filter current view on disease_state = acute_*; renders inline |
| Bidirectional concept ↔ episode link | No | Episode is just an assertion ABOUT a concept with disease_state = acute_*; intrinsic |
| **Independent state machine** (e.g., hospitalization: pending_admit → admitted → in_progress → discharge_planning → discharged) | **YES — but we don't have this yet** | Not needed in v1 |
| **Provider follow-up cadence distinct from chronic disease management** (e.g., post-MI 30-day follow-up cadence ≠ chronic CAD management) | **YES — but we don't have this yet** | Not needed in v1 |

The separate-table answer is correct **eventually** for hospitalization workflows or post-event follow-up cadence systems. It is **not correct now** for the GLP-1 / TRT / ED / female-hormones / anxiety pathways.

# Part 2 — How Epic / Tesla / Amazon handle this

**Epic:** problem list = chronic concept assertions; encounter diagnosis = assertions written within `clinical_visits`; episode-of-care = our context.episode_id grouping. Epic doesn't make every exacerbation a separate canonical entity either — they overload encounter / problem list / episode_of_care to handle the spectrum. Our model with disease_state + episode_id is a cleaner expression of the same idea without 30 years of accretion.

**Tesla:** they don't make every transient state a first-class entity. Tire pressure low = an alert / event with start, severity, resolution attached to the vehicle (the persistent thing). Battery degradation = a state trend on the vehicle's telemetry. Service appointment = a first-class entity with its own workflow.

**Amazon:** order = entity, shipment = entity, delivery_attempt = entity, "package delayed" = a status/event on the shipment, NOT its own table.

All three: **promote to first-class entity when the workflow demands it; otherwise represent as structured state on the parent.**

# Part 3 — The promotion-threshold model (binding for v1)

**Acute states are represented as structured assertion context + metadata on the same longitudinal `concept_id`** — NOT as separate concept_ids and NOT as a parallel entity.

The same `concept_id = condition.copd` represents both the chronic baseline AND an acute exacerbation. Differentiation via:

| Field | What it carries |
|---|---|
| `assertion_type` | `present` (chronic stable, baseline, no specific acute characterization) vs `active_problem` (acute attention required NOW) |
| `metadata.disease_state` | Specific acute state value (`acute_exacerbation \| flare \| acute_decompensation \| acute_event \| side_effect_course_active \| controlled_baseline \| ...`) |
| `onset_at` / `resolved_at` | Acute window bounds |
| `severity` | Severity at write time; sequential supersession captures progression |
| `context.episode_id` | Groups multi-assertion claims about same acute event (already in identity namespace per 1K.5.A) |
| `context.episode_kind` | Episode classification (already in identity namespace) |

# Part 4 — Promotion threshold (binding)

Promote acute states to a dedicated `clinical_episodes` table ONLY when ALL THREE of the following are true:

1. The workflow has a **state machine more complex than current/resolved** (e.g., hospitalization: `pending_admit → admitted → in_progress → discharge_planning → discharged → post_discharge_followup`)
2. Provider workflow has **follow-up cadence requirements distinct from the underlying concept's chronic management** (e.g., post-MI 30-day cadence ≠ chronic CAD chronic-disease management)
3. Safety or queue-priority logic requires **episode-count cohorts not computable from assertion timestamps alone** (rare)

**None of these are present in v1.** When a future product feature trips ALL THREE thresholds (most likely: a hospitalization integration or post-event follow-up workflow), promote acute states to a dedicated `clinical_episodes` table via the standard `1K.14` promotion-trigger discipline; existing assertions become the audit trail of the episode's claims; migration is straightforward (SELECT assertions WHERE disease_state in acute set, INSERT into new table; existing assertions remain valid).

# Part 5 — Worked use cases (assertion + metadata handles all v1 needs)

## Use case 1: COPD exacerbation lifecycle

```
[Assertion 1; written when exacerbation begins]
concept_id: condition.copd
assertion_type: active_problem
authored_by: provider_confirmed
status: provider_confirmed
severity: severe
onset_at: 2026-04-15
metadata: {
  disease_state: 'acute_exacerbation',
  treatment_context: 'hospitalization, IV corticosteroid + bronchodilators',
  expected_resolution_days: 7,
}
context: {
  episode_id: 'copd_exacerbation_2026_04_15',
  episode_kind: 'acute_exacerbation',
  ...
}

[Assertion 2; written when severity peaks]
concept_id: condition.copd
assertion_type: active_problem
severity: very_severe
metadata.disease_state: 'acute_exacerbation'
metadata.peak_severity_at: 2026-04-17
supersedes_assertion_id: <Assertion 1>

[Assertion 3; written when resolving]
concept_id: condition.copd
assertion_type: active_problem
severity: moderate
metadata.disease_state: 'acute_exacerbation'
supersedes_assertion_id: <Assertion 2>

[Assertion 4; written when resolved]
concept_id: condition.copd
assertion_type: present
severity: mild
resolved_at: 2026-04-22
metadata: {
  disease_state: 'controlled_baseline',
  prior_episode_id: 'copd_exacerbation_2026_04_15',
  prior_episode_resolution: 'treatment_completed',
}
supersedes_assertion_id: <Assertion 3>
```

Active state query: `WHERE metadata->>'disease_state' = 'acute_exacerbation'` (returns Assertion 3 while exacerbation is active; returns nothing after resolution).

Recurrence count: `COUNT(DISTINCT context.episode_id) FROM patient_clinical_assertions WHERE concept_id = 'condition.copd' AND metadata->>'disease_state' IN ('acute_exacerbation') AND patient_id = X`.

Provider packet renders the latest assertion (current state) and walks supersession chain for severity progression history.

## Use case 2: Acute pancreatitis (single event, not chronic recurring)

```
concept_id: condition.pancreatitis
assertion_type: active_problem
authored_by: provider_confirmed
severity: severe
onset_at: 2026-03-15
resolved_at: 2026-03-25
metadata.disease_state: 'acute_event'
context: {
  episode_id: 'pancreatitis_2026_03_15',
  episode_kind: 'acute_event',
}
```

Concept registry: `condition.pancreatitis.active_disease_state_blocks_pathways = {pathways: ['glp1', 'tirzepatide', 'semaglutide'], blocks_when_disease_state_in: ['acute_event', 'acute_exacerbation']}`.

Safety preflight: when GLP-1 mutation attempted AND current pancreatitis assertion has `disease_state IN (acute_event, acute_exacerbation)`, block with `paused_active_disease_state_pancreatitis`.

## Use case 3: GLP-1 dose escalation nausea (side-effect course)

```
concept_id: symptom.nausea
assertion_type: present
authored_by: patient_reported
severity: moderate
onset_at: 2026-04-15
metadata.disease_state: 'side_effect_course_active'
context: {
  episode_id: 'glp1_titration_week_4_2026_04',
  episode_kind: 'side_effect_course',
  dose_context: 'dose_escalation',
  pathway_code: 'glp1',
  treatment_item_id: <tirzepatide-7.5mg>,
  ...
}
```

Multiple assertions per side-effect course share `context.episode_id`. Resolved when patient reports symptom resolved or treatment discontinued.

## Use case 4: Acute decompensated heart failure

```
concept_id: condition.congestive_heart_failure
assertion_type: active_problem
authored_by: provider_confirmed
severity: severe
onset_at: 2026-04-15
metadata: {
  disease_state: 'acute_decompensation',
  treatment_context: 'IV diuresis',
  nyha_class: 'III',
}
context.episode_id: 'chf_decompensation_2026_04'
context.episode_kind: 'acute_decompensation'
```

# Part 6 — Patches applied (P1-P6)

All in-place edits to existing 1K.5.A and 1J.10 paragraphs. ~30 lines net to system map.

## P1. Extend `metadata.disease_state` enum

Existing enum: `active | remission_recent | remission_sustained | resolved | controlled_with_treatment | uncontrolled | unknown`

New enum: `active | acute_exacerbation | flare | acute_decompensation | acute_event | side_effect_course_active | side_effect_course_resolved | controlled_baseline | controlled_with_treatment | uncontrolled | remission_recent | remission_sustained | resolved | unknown`

## P2. Clarify `assertion_type` semantics

`present`: patient currently has this concept (chronic stable, baseline, or no specific acute characterization)
`active_problem`: clinically-acute attention is required NOW (paired with `metadata.disease_state` value among acute states)

The split lets analytics distinguish "chronic patients" from "patients in acute episode" without separate concept_ids.

## P3. New "Acute / exacerbation / flare states (binding; v1; promotion-threshold model)" paragraph in 1K.5.A

Captures the model: structured assertion context + metadata; not separate concept_ids; not parallel entity. Uses existing assertion_type, metadata.disease_state, onset_at/resolved_at, severity, context.episode_id, context.episode_kind. Sequential supersession captures severity progression. Recurrence count via `COUNT(DISTINCT context.episode_id)`.

## P4. Concept registry: add `active_disease_state_blocks_pathways[]?` field

Optional field on each concept entry. Declares which pathways are blocked when the current disease_state is in the listed acute values. Enforced at 1J.10 preflight.

Example for `condition.pancreatitis`: `{pathways: ['glp1', 'tirzepatide', 'semaglutide'], blocks_when_disease_state_in: ['acute_event', 'acute_exacerbation']}`.

## P5. 1J.10 safety preflight cross-link extension

Preflight reads `current.metadata->>'disease_state'`. If concept declares `active_disease_state_blocks_pathways` AND current pathway in list AND current disease_state in `blocks_when_disease_state_in`, block with reason `paused_active_disease_state_<concept_id>`.

## P6. Promotion-threshold criteria (binding) in 1K.5.A

Three-criterion test (state machine complexity + distinct follow-up cadence + episode-count cohorts not computable from timestamps). All three must be true to promote to dedicated `clinical_episodes` table. None are true in v1.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30 with explicit pushback against premature commitment to a separate `clinical_episodes` table. The promotion-threshold model is the right v1 answer: structured context + metadata in assertions; promote to dedicated entity only when independent lifecycle requirements are clearly present.

Patches P1-P6 applied to system map in single checkpoint alongside this audit. After landing: proceed to H1-H6 authority vs longitudinal-pattern patch round (the rollup view) — independent and unaffected by this decision.

# Authority vs Longitudinal Confidence — Pattern Rollup View Design

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** distinguish source authority (drives safety floors) from longitudinal pattern signal (drives observability + queue priority); add a derived rollup view alongside the existing `patient_clinical_assertion_current`
**Verdict:** safe to apply; binding hard rule keeps pattern signal from satisfying authority floors

---

# Part 1 — The framing

Authority is a **safety contract**. Longitudinal pattern is **observability**. Conflating them would let repeated patient reports silently satisfy floors that should require provider judgment — which is exactly the failure mode FDA, malpractice, and good clinical sense all reject.

**Cross-industry alignment (Amazon / Apple / Tesla):**

- **Amazon** wouldn't mutate the event stream; they'd add a derived rollup that consumers query for pattern detection. Append-only events stay sacred.
- **Apple** wouldn't auto-promote a signal because it appeared multiple times; they'd surface the pattern to the human ("you've used Touch ID 3 times today; passcode required") and let the human act.
- **Tesla** wouldn't act on a single sensor reading; they'd weight a control decision by pattern consistency over a window — but always with hard safety boundaries that can't be crossed by pattern weight alone.

All three: **the source events stay raw; a computed pattern layer informs but doesn't decide.**

---

# Part 2 — The hard rule (binding)

**`current_authority` from the Current view drives floor decisions; `longitudinal_pattern` from the Rollup view drives queue priority and provider attention. Never the reverse.**

Specifically:
1. Pattern-based confidence NEVER promotes `status` from `unconfirmed` to `provider_confirmed`. Status transitions are by explicit provider write only.
2. Pattern-based confidence NEVER raises an assertion's `authored_by` or `authority_rank`. The source's authority is locked at write time.
3. Pattern signal CAN boost queue priority for provider review (`priority_hint = urgent_clinical`) and CAN influence packet rendering emphasis. It cannot bypass authority floor enforcement or `requires_provider_review_on_conflict` reconciliation.
4. Repeated patient reports → higher `consistency_pattern` value AND (optionally) higher numeric `confidence_weight`, but assertion `authored_by` remains `patient_reported`. Provider must explicitly act for status to change.
5. The 1J.10 safety preflight reads `current_authority` for floor satisfaction — never `confidence_weight`. Confidence_weight is read only for queue priority boost via `1G.7.6 queue.item.created` priority field.

---

# Part 3 — The rollup view

`patient_clinical_assertion_history_rollup` — sibling to `patient_clinical_assertion_current`. Live-computed in v1 (defer materialization until measurable read latency).

Keyed on `(patient_id, concept_id, context_key)`. Aggregates across the entire supersession + history chain.

**Pattern enum (binding; 6 values):**

| Pattern value | Definition |
|---|---|
| `consistent_present` | ≥2 positive (`present` / `active_problem`) reports, zero negatives in same context |
| `consistent_absent` | ≥2 negative (`absent` / `ruled_out`) reports, zero positives in same context |
| `consistent_resolved` | ≥1 resolution (`resolved_at` populated OR `assertion_type=history_of`) AND at least one provider authority in chain |
| `conflicting` | ≥1 positive AND ≥1 negative in same context |
| `uncertain` | Majority of reports are `suspected` or `metadata.completion_status=gating_uncertain` |
| `insufficient_history` | <2 reports total |

**Rollup fields (per row):**

- Temporal: `first_reported_at`, `last_reported_at`, `days_since_first`, `days_since_last`
- Counts: `report_count`, `positive_count`, `negative_count`, `uncertain_count`, `resolved_count`
- Source mix: `source_mix` jsonb `{authored_by_value: count}`
- Authority: `strongest_authority_seen`, `strongest_authority_rank_seen`, `current_authority`
- Pattern: `longitudinal_pattern` (one of the 6 enum values)

**Numeric `confidence_weight` deferred to v1.1.** Pattern label is enough for v1 packet rendering, queue priority, and analytics. Numeric weight requires clinical-policy decisions (how to weight 3 patient reports vs 1 lab_derived vs 1 provider_assessed) that will need iteration; defer until AI training pipeline or risk dashboards explicitly need it.

---

# Part 4 — Worked examples

## Example 1: CHF — 3 patient reports, 6 months, no provider confirmation

3 patient_reported assertions (2026-04-15, 2026-08-22, 2026-10-01) all asserting `present` for `condition.congestive_heart_failure` in same context.

**Rollup output:** `report_count = 3`, `positive_count = 3`, `negative_count = 0`, `source_mix = {patient_reported: 3}`, `current_authority = patient_reported`, `longitudinal_pattern = consistent_present`.

**Provider packet renders:**
> ⚠️ **Pattern: consistent_present** — Patient has reported CHF consistently across 3 encounters since 2026-04-15. Current authority: patient_reported (no provider confirmation on file).

**Safety preflight on GLP-1 `refill_approve`:**
- Floor check: `patient_reported < provider_confirmed` → BLOCK with `paused_needs_provider_confirmation_congestive_heart_failure`
- Queue priority: pattern = `consistent_present` on a CT-tier concept → `priority_hint = urgent_clinical`
- Provider workspace surfaces the case at top of queue with the rollup banner

The block decision and the priority boost are independent. The block holds; the pattern just makes the case more urgent.

## Example 2: CHF flip — yes → no → yes

Pattern = `conflicting`. `report_count = 3`, `positive_count = 2`, `negative_count = 1`. Provider packet renders red banner: "Patient has reported CHF inconsistently: 2 positive, 1 negative across [date range]. Recommend clarification."

Safety preflight: under `requires_provider_review_on_conflict` policy (CHF concept has this), preflight blocks with `paused_needs_provider_reconciliation_congestive_heart_failure` regardless of which row currently wins by authority.

## Example 3: CHF resolved by provider

Pattern = `consistent_resolved`. `resolved_count = 1`, `current_authority = provider_confirmed`, `strongest_authority_seen = provider_confirmed`. Provider packet renders green banner: "CHF confirmed resolved by provider on 2026-10-01."

Safety preflight: floor satisfied (`provider_confirmed` ≥ floor). Mutation proceeds.

## Example 4: Nausea across multiple GLP-1 dose contexts

Per the existing `context_distinct` reconciliation policy, each context_key has its own rollup row. Patient reporting nausea at week 4 maintenance (5mg), week 8 maintenance (5mg), and post-escalation (7.5mg) produces 3 separate rollup rows — each with its own pattern. Provider packet renders 3 grouped sub-rows under `symptom.nausea`, each with its own banner.

---

# Part 5 — Patches applied (H1-H6; ~70 lines net to system map)

## H1 + H2 + H3 (1K.5.A; combined paragraph after Authority precedence)

New paragraph titled "**Longitudinal pattern + consistency rollup view (binding; sibling to patient_clinical_assertion_current)**" inserted after the Authority precedence section and before the Two-stage trigger pipeline section. Includes:
- View definition rationale (sibling to current view; live-computed in v1)
- Pattern enum (6 values per Part 3 above) with definitions
- Authority vs pattern hard rules (5 binding rules per Part 2)
- Worked example reference

## H4 (1J.10 cross-link; queue priority hint mechanism)

Extends the existing "Active-acute-state floor enforcement" sentence with explicit queue priority hint mechanism: when block fires (authority floor unmet, conflict unresolved, or active acute state), the resulting `pending_patient_input_task` per `1G.11.3` carries `priority_hint` populated from rollup pattern (`consistent_present` on contraindication concept OR `conflicting` pattern → `priority_hint = urgent_clinical`; same enum value as pregnancy reconciliation). Pattern signal affects queue ordering, never block/allow decision.

## H5 (1K.12 provider packet renderer)

New bullet in packet contents: pattern banner rendering rule. Renderer reads both `patient_clinical_assertion_current` and `patient_clinical_assertion_history_rollup`. Banner copy is factual ("Patient has reported X N times across [dates]"), never editorializing ("we believe", "high confidence"). Pattern banners color-coded:
- `consistent_present` on concept with `default_authority_floor = provider_confirmed` → yellow/orange
- `conflicting` → red
- `consistent_resolved` → green
- Other patterns → light-gray informational

## H6 (1G.8.5 provider workspace assertion-list panel)

Extends existing "Clinical assertion panel per 1K.5.A" bullet with pattern banner reference: panel reads both views and renders pattern banners alongside the current claim per the H5 rule.

---

# Part 6 — Analytics + AI training

Pattern enum is a first-class analytics dimension. SQL discipline rules from the partial-data round still apply (NULL handling, explicit pattern filtering).

Common cohort queries unblocked:
- Patients with `consistent_present` on contraindication concepts
- Concepts with high conflicting-pattern rate (data quality / clinical workflow signal)
- Average time from first patient report to provider confirmation (workflow KPI)
- AI training feature: `longitudinal_pattern + report_count + source_mix` per patient/concept

**SQL discipline (binding):** when filtering by `current_authority` for safety-relevant analytics, READ FROM `patient_clinical_assertion_current` directly — never from rollup's `current_authority` column. The rollup is a reporting layer; the current view is the source of truth.

---

# Part 7 — What NOT to build yet

1. **Numeric `confidence_weight` formula.** Pattern label is enough for v1.
2. **Time-decay weighting** (older reports weigh less). Implicit via 1K.5 freshness profiles for time-sensitive concepts.
3. **Auto-escalation triggered by pattern alone** (system decides to elevate to provider without any new clinical event). Apple lens: don't auto-escalate without provider judgment in the loop.
4. **Cross-concept pattern detection** (analytics layer pattern across multiple concepts). Defer.
5. **Materialized view of the rollup.** Live computation works at v1 scale.
6. **Pattern detection across pathways** ("patient frequently reports concept X across all 4 pathways"). Defer; per-context rollup handles 90% of clinical use cases.
7. **Pattern-based risk stratification** (population-health territory; defer to 1H.7 analytics extension).

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30. Patches H1-H6 applied to system map in single checkpoint. The rollup view is observability layer added; no source-of-truth changes; no safety-discipline weakening. Pattern never satisfies authority floor — hard rule preserves the safety contract built across all prior rounds.

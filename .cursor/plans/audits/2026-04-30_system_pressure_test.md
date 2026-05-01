# System-level pressure test — verdict + foundational patches

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** comprehensive system-level pressure test of the entire information intake architecture (sections 1G/1H/1I/1J/1K/1K.5.A/1L/1M/1N/1O/1P + 20 invariants + Patches 14-16) against real-world messy multi-domain input at 10 / 100 / 10K users-per-day scale; cross-industry parity check (Amazon, Apple, Tesla, Epic/Cerner, Salesforce, FDA AI/ML SaMD); future-evolution flexibility test
**Verdict:** B — coherent architecture with four targeted foundational patches required before declaring v1 frozen. No structural flaws.

---

# Part 1 — Mode of analysis

The system spine (locked through commits `7fbdebb` → `75740f9` → `acdf7d9` → `6cf874f`):

```
raw source input (per channel-native SoT row)
  → immutable evidence (append-only; version-pinned where applicable)
  → classification + extraction (deterministic handlers for structured fields; AI atomization for narrative ONLY)
  → structured candidate atoms (in native workflow tables; OR direct writes for vendor-authoritative operational facts)
  → authority-aware review (parallel role-scoped reviewers for clinical/narrative; deterministic reconciliation for structured operational)
  → committed domain records (with proper authority semantics per domain)
  → derived current state (patient_clinical_assertion_current; commerce_orders state; subscription state; etc.)
  → safety preflight + provider packet + workflows + analytics + AI training
```

For each of 10 stress scenarios, traced atom-by-atom through the pipeline against 8 system properties: **(1)** evidence preservation, **(2)** classification correctness, **(3)** atomization appropriateness, **(4)** batch grouping coherence, **(5)** routing accuracy, **(6)** authority enforcement, **(7)** false-truth prevention, **(8)** cross-domain interaction handling.

---

# Part 2 — Ten stress scenarios + pass/fail matrix

| # | Scenario | Pass | Failures observed |
|---|---|---|---|
| 1 | "I feel off, nauseous sometimes, been on meds, worried about pancreas" (minimum-viable narrative) | PARTIAL | No automatic Mode F structured follow-up trigger from `patient_concern` atom (Gap B) |
| 2 | Same stomach pain reported across 4 channels over 4 weeks (intake + 2 portal messages + pharmacy vendor) | PARTIAL | 4 separate batch reviews; no concept-aware cross-batch consolidation (Gap A) |
| 3 | Patient says "I have CHF" then later writes "actually I don't have CHF" | PASS | Authority precedence + reconciliation policies + 1J.10 floor enforcement work as designed |
| 4 | Pharmacy email mentions "chest pain when she takes morning dose" | PASS | Cross-channel safety scan + `third_party_reported` + 1G.7.6 urgent priority + 1G.9 routing all fire |
| 5 | Patient pastes 3000-word medical history → 50+ candidate atoms | FAIL | No batch-sizing discipline; provider faces 50-atom UX overload (Gap C) |
| 6 | Patient deliberates same med-change decision across 3 narratives over 60 days | PASS | message_thread continuity + `patient_clinical_assertion_history_rollup` consistency banner handle this |
| 7 | Vendor lab HL7 (A1c=8.5) conflicts with patient self-reported A1c=7.0 from intake narrative | PASS | Structured-first routes HL7 to Section 1L → `lab_derived` → reconciliation policy works |
| 8 | AI emitter v2 systematically misclassifies symptom.fatigue as condition.depression (15% rate) | FAIL | No mass-supersession / model-recall pattern; per-correction provenance captured but no retroactive correction (Gap D) |
| 9 | Provider freehand: "Plan: start tirzepatide 2.5mg, recheck A1c in 8 weeks, monitor for nausea" | PASS | Provider IS authority; AI inline drafting; atoms write `provider_confirmed` directly; bypasses candidate stage |
| 10 | 3 different sources report headaches with different urgency (patient narrative + vendor relay + provider casual mention) | PASS | Each gets its own assertion at correct authority rank; rollup detects pattern; provider's casual note doesn't bury vendor's signal |

**7 of 10 PASS. 3 expose foundational gaps. No structural flaws.**

---

# Part 3 — Atom-by-atom traces (selected scenarios)

## Scenario 1 trace: "I feel off, nauseous sometimes, been on meds, worried about pancreas"

| Step | Action | Outcome |
|---|---|---|
| 1 | Patient writes free-text intake answer (`narrative_intent = patient_concern`, `safety_scan = true`) | `intake_response` row, immutable evidence preserved |
| 2 | Section 1P.2 Step 2 deterministic safety scan | No match (none of the keyword patterns trigger; "pancreas" worry alone isn't a safety match) |
| 3 | Section 1P.2 Step 3 AI classifier | `actionable` (clinical content present) |
| 4 | Section 1P.2 Step 4 AI atomization fan-out | 4 candidate atoms produced |
| 4a | Atom: `symptom.nausea` candidate | `ai_suggested`, `confidence = low`, `status = unconfirmed` (intermittency mentioned; vague characterization) |
| 4b | Atom: `patient_concern_topic = pancreatitis` | written to `patient_chart_ai_reviews` |
| 4c | Atom: `medication_use_unspecified` (vague "been on meds") | `ai_suggested`, `confidence = low` |
| 4d | Atom: `provider_question_pending` ("am I OK?" implicit) | `patient_action_items` |
| 5 | All atoms carry `metadata.inbound_narrative_review_id` | grouped under one batch |
| 6 | Provider opens batch review | sees raw narrative + 4 candidates |
| **7** | **GAP B**: Provider must MANUALLY decide to schedule a follow-up Mode F check-in to characterize the pancreas concern + medications | **No automatic bridge from `patient_concern_topic` atom to a structured Mode F system check-in via `1K.6`** |

**Working architecture:** evidence preservation ✓ classification ✓ atomization ✓ batch grouping ✓ authority ✓ false-truth prevention ✓.
**Gap:** the bridge from flexible narrative input to rigid structured decision (the "moat thesis" itself) is not yet automated for vague concerns.

## Scenario 2 trace: same stomach pain × 4 channels × 4 weeks

| Day | Source | Atom produced | Authority |
|---|---|---|---|
| 0 | intake free-text | `symptom.abdominal_pain` candidate | `ai_suggested`, rank 20 |
| 7 | portal message | `symptom.abdominal_pain` candidate | `ai_suggested`, rank 20 |
| 11 | pharmacy email (vendor) | `symptom.abdominal_pain` candidate | `third_party_reported`, rank 30 |
| 28 | portal message | `symptom.abdominal_pain` candidate | `ai_suggested`, rank 20 |

**1K.5.A reconciliation:** depending on `context_key` resolution, may dedupe via `auto_dedupe` OR keep as `context_distinct`. Assertion-history rollup detects `consistent_present` pattern; chart panel renders pattern banner per `1G.8.5` rule.

**Provider experience without Patch A:** 4 separate `inbound_narrative_reviews` batches; 4 separate review sessions. Each batch contains a candidate for the same concept. Reviewer cognitive load multiplies by source-channel count. Chart panel banner helps AFTER the assertions land but doesn't reduce batch review burden.

**Provider experience with Patch A:** at batch open, prior-assertion banner displays "[3] prior assertion(s) on `symptom.abdominal_pain` from [intake, portal_message, vendor_message] within 30 days — see chart panel". Reviewer can quickly accept-as-additional-evidence (merges via supersession with same `assertion_type`/`severity`), reject-as-redundant (`correction_reason = redundant_with_prior`), or commit-as-distinct-context. Review burden becomes O(unique concepts) not O(channels × concepts).

## Scenario 5 trace: 3000-word pasted history → 50+ atoms

Long-form pasted medical history. AI atomization produces (illustrative count):
- 12 condition assertion candidates (cardiac, metabolic, GI, mental health, allergic, dermatological)
- 8 medication assertion candidates (current + prior)
- 6 surgical history candidates
- 5 family history candidates
- 4 social history candidates
- 7 symptom candidates (current + recent)
- 3 lab value mentions (no structured payload — narrative only)
- 5 patient_concern_topic candidates
- 2 patient_question candidates
- 4 informational pointers (medications already in chart, prior addresses)

**51 atoms, one batch, one source narrative.**

**Provider experience without Patch C:** flat list of 51 candidates. Cognitive overload. Likely to skim or defer; clinical signal lost in noise.

**Provider experience with Patch C:** AI emitter computes `surfacing_tier` per atom:
- 8 `primary_candidate` atoms: high-confidence clinically-actionable items (e.g., active conditions, current medications, symptoms with severity)
- 35 `supplementary_signal` atoms: lower-confidence or contextual items (e.g., historical conditions, prior surgeries, family history, low-confidence symptom mentions)
- 8 `informational_pointer` atoms: already-known context (e.g., medications already in chart)

Default UI: 8 primaries visible; "Show 35 supplementary" expandable; informationals as compact summary. `batch_complexity_high = true` flag on the batch row. Provider can drill down or accept the 8 primaries quickly. Surfacing tier is independent of authority + status — accepted supplementaries still write at full authority.

## Scenario 8 trace: AI emitter v2 systematic misclassification

Discovery path:
1. AI engineer notices, via `correction_reason` rollup, that `wrong_concept_mapping` events for `symptom.fatigue` → `condition.depression` are at 15% with model `glp1_intake_v2.4` vs 2% with `v2.3`.
2. Without Patch D, no architectural pattern for retroactive correction. AI engineering can fix the model going forward, but ~10K assertions emitted by `v2.4` over the past 3 weeks are STILL in patient charts with bad provenance, potentially affecting clinical decisions.
3. Provider chart panels show `condition.depression` assertions at `ai_suggested` for patients who genuinely had `symptom.fatigue` — a meaningful clinical mismapping.

With Patch D:
1. Clinical CODEOWNER + AI engineering issue a `model_recall` event on `audit_events`:
   ```jsonc
   {
     recall_id: "...",
     affected_model_version: "glp1_intake_v2.4",
     affected_extraction_window_start: "2026-04-09T00:00:00Z",
     affected_extraction_window_end: "2026-04-30T00:00:00Z",
     affected_correction_reasons: ["wrong_concept_mapping"],
     affected_atom_concept_ids: ["condition.depression"],
     recall_severity: "clinical",
     recall_action: "flag_for_re_review",
     issued_by_role: "clinical_codeowner",
     rationale_note: "Model v2.4 misclassifies symptom.fatigue → condition.depression at 15% rate; v2.3 baseline is 2%; flagging all condition.depression assertions emitted by v2.4 for provider re-review."
   }
   ```
2. All affected atoms get `metadata.recall_flag_<recall_id>` annotation.
3. `patient_action_items` of type `ai_quality_review_pending` created for affected providers.
4. Providers re-review affected atoms; can accept (writes `provider_confirmed`), reject (writes `provider_rejected`), or refine (writes `provider_refined` with corrected concept mapping).
5. FDA AI/ML SaMD: every step is reconstructable from `audit_events`; recall is the post-market monitoring evidence trail.

For safety-critical recalls, `recall_action = mass_supersede` retracts affected atoms automatically and reopens any `clinical_required` turns that referenced them.

---

# Part 4 — Cross-industry parity analysis

| Pattern | Industry exemplar | Our architecture | Gap |
|---|---|---|---|
| Cross-contact consolidation at agent surface | Amazon CS "interaction history" | Chart panel rollup (`1G.8.5`); NO batch-review surface consolidation | **Patch A closes this** |
| Explicit candidate review queue | Apple HealthKit "Review proposed contributions" | `inbound_narrative_reviews` + role-scoped reviewers | NO gap |
| Model recall / OTA rollback | Tesla over-the-air recall | Per-event provenance pinned, but no model-recall pattern | **Patch D closes this** |
| Clinical decision-support change-control | Epic / Cerner with joint commission audit | Supersession chain + audit_events | Loosely covered; recall pattern needed for SaMD compliance |
| Parallel role-scoped routing | Salesforce case → tasks | Section 1P.5 parallel reviewer model | NO gap |
| Predetermined Change Control Plan + post-market monitoring | FDA AI/ML SaMD framework | `correction_reason` enum + per-correction provenance | Recall pattern is the missing piece for total-product-lifecycle compliance |
| Automated bridge from flexible input to rigid decision | (No clear industry analog at $1B-class scale; this is genuine moat territory) | `patient_concern` atoms exist but no automatic Mode F follow-up bridge | **Patch B closes this** |
| Adaptive UX for high-cardinality information | Apple Mail's ML-driven inbox sorting; Gmail's smart compose; Salesforce surfacing rules | Atomization works but flat list at high-cardinality | **Patch C closes this** |
| Patient access to AI-derived data | 21st Century Cures Act emerging | Architecture is silent | Gap F (deferrable) |
| Pre-existing clinical record privacy | HIPAA + state laws | RLS + capability discipline + Section 1J | NO gap |

---

# Part 5 — Systemic weaknesses (10 identified; foundational vs deferrable)

## Foundational (must address before v1 frozen)

**Gap A — Cross-batch concept-aware review surfacing.** When an `inbound_narrative_reviews` batch contains an atom on a concept where the patient already has a recent assertion, batch review surface does NOT show prior context. Provider sees N independent batches for the same clinical signal. At 100/day annoying; at 10K/day workflow failure. Foundational.

**Gap B — Vague-concern → structured-follow-up bridge.** When AI extracts `patient_concern_topic` for a concept with `default_authority_floor` requiring provider attention, no rule fires automatic Mode F system check-in. Vague concerns rot. Closes the loop on the "flexible input → rigid decision" moat thesis. Foundational.

**Gap C — High-cardinality batch surfacing tiers.** No discipline for batches with > N atoms. Long pasted narratives produce 50+ candidates → UX overload. The `free_text_long` answer_type explicitly enables this case. Foundational.

**Gap D — Model recall / mass-correction pattern.** No mass-supersede / mass-flag pattern when AI model version is found systematically wrong. FDA AI/ML SaMD post-market monitoring lever. Retrofitting at scale (when 100K+ assertions exist) is painful. Foundational.

## Deferrable (refinements; not v1 blockers)

**Gap E — AI cost / rate-limiting discipline.** Engineering / ops concern. At 10K/day AI emitter call cost is real but doesn't shape architecture.

**Gap F — Patient-facing AI extraction transparency.** 21st Century Cures Act + future patient-rights frameworks may require visibility. Defer until regulatory clarity.

**Gap G — Audit retention + compaction.** HIPAA needs 7+ year retention. Engineering / ops concern.

**Gap H — State-machine illegal-transition prevention.** Each section has its own discipline; CI lint can grow over time. Not foundational.

**Gap I — Provider safety-scan false-positive close path.** Existing `1G` close discipline supports this; just needs explicit naming. Minor.

**Gap J — Concept registry retirement migration.** Mostly addressed in `1K.5.A`. Defer until first concept retirement actually happens.

---

# Part 6 — Four foundational patches (proposed)

## Patch A — Cross-batch concept-aware review surfacing

**Anchor:** Section 1P.5 parallel role-scoped reviewer model + 1G.8.5 batch review UI bullet.

**Foundational because:** transforms per-source review burden from O(channels × concepts) to O(unique concepts) at provider workspace. Prevents UX failure at scale.

**Mechanism:** at batch-review-render time, query existing `patient_clinical_assertions` + `patient_clinical_assertion_history_rollup` for prior non-superseded assertions on the same `(patient_id, concept_id, context_key)` within a configurable concept-specific freshness window (default 30 days; per-concept overridable in `clinical_concepts.cross_batch_consolidation_window?`). Display "prior assertion banner" with click-through to chart panel. Reviewer options: (a) accept-as-additional-evidence (merges via supersession with same `assertion_type`/`severity` per `auto_dedupe`); (b) reject-as-redundant (`correction_reason = redundant_with_prior`); (c) commit-as-distinct-context (atom proceeds with explicit `context_key` distinction). No new table.

## Patch B — Vague-concern → structured-follow-up bridge

**Anchor:** Section 1P.4 atom routing matrix (extension of `patient_concern` row) + 1K.6 Mode F triggers + 1K.5.A `clinical_concepts` registry shape.

**Foundational because:** closes the loop on flexible-input → rigid-decision; without this, vague concerns rot in queue.

**Mechanism:** `clinical_concepts` registry gains optional fields: `concern_to_follow_up_policy: 'auto_schedule_mode_f' | 'provider_review_required' | 'informational_only'` (default: `provider_review_required`) + `follow_up_module_ids[]: string[]` (e.g., `condition.pancreatitis` concern triggers ABDOMINAL_PAIN_CHARACTERIZATION module). When AI emitter produces a `patient_concern_topic` atom, the routing rule consults the policy: `auto_schedule_mode_f` enqueues a Mode F system check-in via `1K.6` using the declared modules; `provider_review_required` (default) routes to existing `provider_question_pending` action item; `informational_only` records concern only. Mode F resulting `intake_response` rows back-link to originating concern atom + original `inbound_narrative_review_id`. CI lint enforces: any concept with `default_authority_floor = provider_confirmed` and known `follow_up_module_ids[]` MUST declare a `concern_to_follow_up_policy`.

## Patch C — Batch sizing tiers + atom surfacing discipline

**Anchor:** Section 1P.4 atom routing rules + 1K.14 `inbound_narrative_reviews` schema row.

**Foundational because:** keeps long-form intake usable at scale; without this, the `free_text_long` answer_type becomes a UX trap at provider workspace.

**Mechanism:** every atom emitted by the inbound narrative atomization emitter carries a `surfacing_tier: 'primary_candidate' | 'supplementary_signal' | 'informational_pointer'` field on its `metadata`. Tier computed by AI emitter using configurable thresholds (code-as-config; CODEOWNER-gated for safety/clinical). Default UI surface caps at 8 primaries per batch (configurable per role); supplementary behind expand affordance; informational as compact summary. Long pasted narratives producing > 30 atoms trigger a `batch_complexity_high` flag on `inbound_narrative_reviews` row → top-of-batch summary + structured drill-in. Surfacing tier is independent of authority + status. CI lint enforces: every atom emitter MUST set `surfacing_tier`; default to `primary_candidate` is forbidden — explicit classification required.

## Patch D — Model recall / mass-correction pattern

**Anchor:** Section 1P.11 AI output correction / feedback discipline subsection + cross-link bullets in 1H.6.1E / Section 1N / 1J.10 / 1G.8.5.

**Foundational because:** FDA AI/ML SaMD post-market monitoring lever; retrofitting at scale is painful; ensures longitudinal memory + safe decision gating guarantees survive bad AI updates without architectural rework.

**Mechanism:** `model_recall` event as append-only `audit_events` row with `event_type = ai.model_recall_issued`. Payload carries `recall_id`, affected model + prompt + classifier versions, extraction window, affected `correction_reason` patterns, optional concept scope, severity tier (`safety_critical | clinical | operational | cosmetic`), recall action (`mass_supersede | flag_for_re_review | flag_informational`), issuer + role, rationale note, related corrections count. **Recall actions:** `mass_supersede` (safety-critical only; system-authored superseding rows with `status = retracted`; clinical_required turns reopen; clinical CODEOWNER + compliance approval required); `flag_for_re_review` (default for clinical recalls; atom metadata gets `recall_flag_<recall_id>` annotation; `patient_action_items` of type `ai_quality_review_pending` routes to provider workspace); `flag_informational` (cosmetic/operational; atom metadata only + ops dashboard signal). FDA AI/ML SaMD: PCCP post-market monitoring evidence trail; reconstructable from `audit_events`.

---

# Part 7 — What this preserves / gains / explicitly NOT building

## Preserves

- All 20 hard invariants in Section 1P.
- Authority precedence (9-value enum), domain-scoped vendor authority, structured-first principle.
- Section 1P consolidation discipline (forward rule).
- AI output correction / feedback discipline (Patch 16 from prior commit).
- All existing native workflow primitives.

## Gains

- **Cross-batch consolidation** at provider workspace — review burden scales O(unique concepts) not O(channels × concepts).
- **Vague-concern → structured-follow-up automation** — flexible-input bridge to rigid-decision is closed; vague concerns no longer rot.
- **Batch sizing tiers** — long-form intake usable at scale; provider sees 8 primaries by default with drill-in for supplementaries.
- **Model recall / mass-correction pattern** — FDA AI/ML SaMD post-market monitoring lever; retroactive correction at clinical or operational severity tiers; preserves original AI output per invariant 19.

## Explicitly NOT building

- New tables (Patches A, B, C use existing fields + computed banners; Patch D uses `audit_events`).
- New review queues (use existing `patient_action_items` + role-scoped reviewer model).
- AI cost / rate-limiting (Gap E; engineering concern; non-foundational).
- Patient-facing AI transparency surface (Gap F; defer until regulatory clarity).
- Audit retention / compaction policy (Gap G; ops concern).
- Master state-machine enumeration (Gap H; CI lint can grow over time).
- Provider safety-scan false-positive close path (Gap I; existing 1G close discipline suffices).
- Concept registry retirement migration (Gap J; mostly addressed; defer).

---

# Part 8 — Confirmation against the moat thesis

User's moat thesis: *"In 5 years, everyone will have great AI input, good extraction, decent UX. But very few will have clean authority model, safe decision gating, longitudinal memory, cross-domain coherence."*

The architecture as currently locked (Sections 1G/1H/1I/1J/1K/1K.5.A/1L/1M/1N/1O/1P + 20 invariants) **directly delivers the four moat dimensions:**

- **Clean authority model:** 9-value `authored_by` enum + domain-scoped vendor authority + ranking-vs-reliability separation + provider/staff freehand carve-out.
- **Safe decision gating:** `default_authority_floor` enforcement at `1J.10` + `requires_provider_review_on_conflict` + safety-miss separate channel (`safety_classification_miss` via 1H.6.1E) + deterministic safety scan as the gate (AI never gates).
- **Longitudinal memory:** `patient_clinical_assertion_current` (canonical present state) + `patient_clinical_assertion_history_rollup` (longitudinal pattern) + immutable evidence in channel-native SoTs + supersession chains preserve the full timeline.
- **Cross-domain coherence:** Section 1P unifies clinical / ops / billing / subscription / support / safety / vendor accountability under one batch entity + parallel role-scoped reviewers + shared `inbound_narrative_review_id` for cross-domain context.

The 4 foundational patches close the remaining moat gaps:

- **Patch A** strengthens longitudinal memory at the workspace surface.
- **Patch B** strengthens the input flexibility → decision rigidity bridge.
- **Patch C** keeps long-form intake usable so flexible input doesn't degrade UX.
- **Patch D** strengthens regulatory defensibility (FDA AI/ML SaMD) — the longitudinal memory + safe decision gating guarantees survive bad AI updates without architectural retrofit.

After these patches, the architecture is ready for v1 implementation start.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30 with:
1. Comprehensive system-level pressure test against 10 real-world stress scenarios at 10/100/10K users-per-day scale.
2. Cross-industry parity analysis (Amazon, Apple, Tesla, Epic/Cerner, Salesforce, FDA AI/ML SaMD, HIPAA + Cures Act).
3. Future-evolution flexibility check ("flexible input layer + rigid decision layer" moat thesis).
4. Verdict B: coherent architecture with four targeted foundational patches before v1 freeze.

Four foundational patches applied as a single multi-file checkpoint alongside this audit.

After landing: question-bank seeding for `repo/clinical-concepts/` continues with Patch B's `concern_to_follow_up_policy` + `follow_up_module_ids[]` fields available; Section 1P emitter implementation lands later (binding rules unblock deterministic engineering when wiring arrives); FDA AI/ML SaMD readiness improved by Patch D's model recall pattern.

# HANDOFF — Phase 4H-templates-discipline c6 (`followup_due` migration) checkpoint

**Date:** 2026-05-10
**Status:** SHIPPED. All verification green. Pushed to origin/main as commit `7aaa2a5`.
**Phase position:** 7th typed Rule + Template migration overall; 6th in 4H-templates-discipline series.

---

## What this commit shipped

**The followup_due notification migrated** from the legacy v0 implicit engine to the typed Rule + Template registry. Fourth Rule in the `clinical_decision` domain (siblings: `case_approved_v1`, `awaiting_clinical_review_v1`, `active_care_v1`); same architectural shape as `awaiting_clinical_review_v1` + `active_care_v1` (system-authority status ack, tier_1 existence_only, operational intent).

**FIRST single-producer-surface clinical_decision rule.** Prior 3 clinical_decision rules fire from BOTH `updateTreatmentItemStatus` and `updateCareProgramStatus`. `refill_due` is not a valid `care_programs.status`, so the producer-side gate adds a dispatch block ONLY to `updateTreatmentItemStatus`. Validates that the established pattern handles single-producer-surface variation cleanly.

**No new architecture introduced.** Mechanical pattern-replay per ADR §7.7 Decision C.

---

## Files changed (16 total)

### NEW (4)

- [`repo/rules/clinical_decision/followup_due_v1.ts`](../../repo/rules/clinical_decision/followup_due_v1.ts) — typed Rule
- [`repo/templates/clinical_decision/followup_due_v1.ts`](../../repo/templates/clinical_decision/followup_due_v1.ts) — typed Template
- [`lib/templates/render/followup-due.ts`](../../lib/templates/render/followup-due.ts) — render module (no inline brand interpolation in body, unlike c5 active_care)
- [`scripts/test-followup-due-parity.ts`](../../scripts/test-followup-due-parity.ts) — live-DB parity test (5 scenarios, 36 assertions)

### MODIFIED (11)

- [`lib/events/rule-trigger-event-types.ts`](../../lib/events/rule-trigger-event-types.ts) — added `'patient.case_followup_due'`
- [`lib/events/audit-actions.ts`](../../lib/events/audit-actions.ts) — added `'rule.fired.clinical_decision.followup_due_v1'`
- [`repo/rules/index.ts`](../../repo/rules/index.ts) + [`repo/templates/index.ts`](../../repo/templates/index.ts) — registered 7th rule + template
- [`lib/rules/runtime/dispatcher.ts`](../../lib/rules/runtime/dispatcher.ts) — added union variant + PatientCaseFollowupDuePayload + executeFollowupDueRule executor branch
- [`lib/internal/patient-case/impl.ts`](../../lib/internal/patient-case/impl.ts) — 5th dispatch block in `updateTreatmentItemStatus` for `'refill_due'` transition (no corresponding block in `updateCareProgramStatus`)
- [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) — removed case 'followup_due' arms
- [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) — removed `'followup_due'` from union + `refill_due: 'followup_due'` map entry
- [`app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx`](../../app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx) — removed `'followup_due'` from TEMPLATE_OPTIONS
- [`scripts/lint-event-types.ts`](../../scripts/lint-event-types.ts) — added test-followup-due-parity.ts to EXEMPT_PATHS
- [`scripts/test-rules-templates-scaffold.ts`](../../scripts/test-rules-templates-scaffold.ts) — count `>= 7`; added followup_due_v1 anchor assertions

(Plus the preflight as a new file; total 16 files in commit.)

---

## Verification (all green)

| Check | Status | Notes |
|---|---|---|
| `npm run typecheck` | GREEN | clean |
| `npm run lint` | GREEN | clean |
| `lint-rules-templates-scaffold.ts` | PASS | 5 checks; 7 rules + 7 templates scanned |
| `lint-event-types.ts` | OK | 69 audit actions (up from 68); 0 unknown literals |
| `test-rules-templates-scaffold.ts` | GREEN | 87/87 passed |
| `test-followup-due-parity.ts` | GREEN | 36/36 across 5 live-DB scenarios |

---

## Legacy v0 cutover progress

**7 of 11 baseline cases migrated + deleted:**
- payment_received (4H-pre c5)
- intake_submitted (c1)
- case_approved (c2)
- awaiting_clinical_review (c3)
- shipped (c4)
- active_care (c5)
- **followup_due (c6)** ← this commit

**4 remaining:**
- `case_denied` (hard — PHI risk in denial reasons; bridges into 4H-send-policy)
- `followup_needed` (medium — 4-status OR gate: paused/completed/cancelled/stopped)
- `rx_sent` (medium — likely activates pharmacy_lifecycle/ sibling-domain folder)
- `refill_pending` (medium — possibly pharmacy_lifecycle, possibly clinical_decision)

When the last one migrates, four legacy files get deleted entirely: `onPatientWorkflowEvent.ts`, `notificationRules.ts`, `workflows/types.ts`, `patientMessages.ts`.

---

## Future watch-zone (flagged during c6 approval by ChatGPT)

**Producer-site dispatch accumulation pressure.** `updateTreatmentItemStatus` now has 5 dispatch blocks. Around 10-15 rules the pattern will likely feel visually noisy and harder to reason about ("okay this producer-site pattern now needs extraction"). Aligns with:
- v1 pressure-test radar zone 7 (Runtime complexity / orchestration sprawl)
- ADR §7.7 deferred-until-rule-count-grows guidance

NOT a c6 blocker. Recorded in commit message body for future-us. Likely surfaces concretely around Phase 4H-rules-runtime work or when migration count crosses ~10.

---

## What's next

4 legacy cases remain. Recommended ordering:

1. **`followup_needed`** (next) — mechanical pattern with 4-status OR gate. Producer-side dispatch counter goes from 5 → 6 in `updateTreatmentItemStatus` + 3 → 4 in `updateCareProgramStatus`. Same domain folder (clinical_decision); no doctrinal questions.

2. **`refill_pending`** — small doctrinal question (clinical_decision vs pharmacy_lifecycle). Producer-site is `treatment_items.status='refill_pending'`. The wording is generic ("Refill update / There is an update on your refill") — leans clinical_decision.

3. **`rx_sent`** — bigger doctrinal question. Likely activates `pharmacy_lifecycle/` sibling-domain folder (rx-to-pharmacy is pharmacy-shaped). First migration after `order_shipped` to potentially activate a NEW sibling-domain folder. Will need a real preflight (not just the 5-attribute short form) because it's the first sibling-domain expansion since c4.

4. **`case_denied`** (last/hardest) — PHI risk in denial reasons. Bridges to 4H-send-policy phase. Would warrant a real preflight + ChatGPT review.

Or non-legacy-cleanup options remain (per c1 mode-shift note + future-blocks audit):
- First rule in_app opt-in
- Patient portal UI
- Net-new tier_3 rule

---

## Anchor strings

- `rule.clinical_decision.followup_due_v1` (rule_id)
- `tmpl.clinical_decision.followup_due_v1` (template_key)
- `'patient.case_followup_due'` (RuleTrigger event_type)
- `'rule.fired.clinical_decision.followup_due_v1'` (audit action)
- `case_kind: 'treatment_item' | 'care_program'` (single-value-used discriminant)
- `transition_audit_event_id` (idempotency anchor)

---

## Convergence-via-wiring trial status

Still COMPLETE per ADR §7.7 Decision C. This commit is mechanical pattern-replay. No new ADR amendment. No new system-map amendment.

The trial-completion property continues to hold: 7 typed rules now ship without surfacing architectural questions during routine migrations. The first concrete pressure point will likely be when rx_sent's pharmacy_lifecycle activation lands (small architectural commit, but doctrinally already anticipated).

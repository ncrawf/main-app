# HANDOFF — Phase 4H-templates-discipline c5 (`active_care` migration) checkpoint

**Date:** 2026-05-10
**Status:** SHIPPED. All verification green. Pushed to origin/main as commit `551dc13`.
**Phase position:** 6th typed Rule + Template migration overall; 5th in 4H-templates-discipline series. Mechanical pattern-replay per ADR §7.7 Decision C.

---

## What this commit shipped

**The active_care notification migrated** from the legacy v0 implicit engine to the typed Rule + Template registry. Third Rule in the `clinical_decision` domain (siblings: `case_approved_v1`, `awaiting_clinical_review_v1`); same shape as `awaiting_clinical_review_v1` (system-authority status ack, tier_1 existence_only, operational intent).

**No new architecture introduced.** Per ADR §7.7 Decision C, the convergence-via-wiring trial is COMPLETE. This commit is mechanical pattern-replay: short preflight, established discipline, no new ADR amendment, no new sibling-domain folder.

**ONE notable wording detail:** active_care is the FIRST migration where the brand label is embedded INSIDE the email body copy (not just at prefix/footer). Legacy intro `"You are now in active care with MAIN."` renders via the typed slot as `"You are now in active care with ${brand_short_label}."` For brands.slug='main' the rendered output is byte-identical.

---

## Files changed (16 total)

### NEW (4)

- [`repo/rules/clinical_decision/active_care_v1.ts`](../../repo/rules/clinical_decision/active_care_v1.ts) — typed Rule
- [`repo/templates/clinical_decision/active_care_v1.ts`](../../repo/templates/clinical_decision/active_care_v1.ts) — typed Template
- [`lib/templates/render/active-care.ts`](../../lib/templates/render/active-care.ts) — render module (first to embed brand label inline mid-body)
- [`scripts/test-active-care-parity.ts`](../../scripts/test-active-care-parity.ts) — live-DB parity smoke test (5 scenarios, 36 assertions)

### MODIFIED (11)

- [`lib/events/rule-trigger-event-types.ts`](../../lib/events/rule-trigger-event-types.ts) — added `'patient.case_active'`
- [`lib/events/audit-actions.ts`](../../lib/events/audit-actions.ts) — added `'rule.fired.clinical_decision.active_care_v1'`
- [`repo/rules/index.ts`](../../repo/rules/index.ts) + [`repo/templates/index.ts`](../../repo/templates/index.ts) — registered 6th rule + template
- [`lib/rules/runtime/dispatcher.ts`](../../lib/rules/runtime/dispatcher.ts) — added `'patient.case_active'` to RuleTriggerEvent union, PatientCaseActivePayload interface, executeActiveCareRule executor branch
- [`lib/internal/patient-case/impl.ts`](../../lib/internal/patient-case/impl.ts) — added 4th dispatch block in `updateTreatmentItemStatus` and 3rd in `updateCareProgramStatus` for status='active' transition
- [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) — removed case 'active_care' arms; transitional removal comments
- [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) — removed `'active_care'` from union and `active: 'active_care'` from PATIENT_NOTIFY_BY_STATUS
- [`app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx`](../../app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx) — removed `'active_care'` from TEMPLATE_OPTIONS
- [`scripts/lint-event-types.ts`](../../scripts/lint-event-types.ts) — added test-active-care-parity.ts to EXEMPT_PATHS
- [`scripts/test-rules-templates-scaffold.ts`](../../scripts/test-rules-templates-scaffold.ts) — count `>= 6`; added active_care_v1 anchor assertions

(Plus the preflight as a new file; total 16 files in commit.)

---

## Verification (all green)

| Check | Status | Notes |
|---|---|---|
| `npm run typecheck` | GREEN | clean |
| `npm run lint` | GREEN | clean |
| `lint-rules-templates-scaffold.ts` | GREEN | 5 checks; 6 rules + 6 templates scanned |
| `lint-event-types.ts` | OK | 68 audit actions (up from 67); 0 unknown literals |
| `test-rules-templates-scaffold.ts` | GREEN | 74/74 passed |
| `test-active-care-parity.ts` | GREEN | 36/36 across 5 live-DB scenarios |

---

## Legacy v0 cutover progress

**6 of 11 baseline NotificationTemplateKey cases migrated + deleted:**
- payment_received (4H-pre c5)
- intake_submitted (c1)
- case_approved (c2)
- awaiting_clinical_review (c3)
- shipped (c4)
- **active_care (c5)** ← this commit

**5 remaining:** `case_denied`, `followup_needed`, `rx_sent`, `followup_due`, `refill_pending`.

When the last one migrates, four legacy files get deleted: `onPatientWorkflowEvent.ts`, `notificationRules.ts`, `workflows/types.ts`, `patientMessages.ts`.

---

## Future watch-zone (flagged during c5 approval)

ChatGPT noted during c5 approval that the "legacy did it too" justification for near-simultaneous notifications (e.g., two active_care fires when a `treatment_item` AND its parent `care_program` both transition to 'active' in the same staff operation) is preserving v0 behavior for parity, but may feel noisy or broken once inbox continuity surfaces become real and visible. Adjacent to existing radar zone 3 (Communication saturation). Not a c5 blocker; recorded in commit message body for future-us.

---

## Anchor strings (for future grep)

- `rule.clinical_decision.active_care_v1` (rule_id)
- `tmpl.clinical_decision.active_care_v1` (template_key)
- `'patient.case_active'` (RuleTrigger event_type)
- `'rule.fired.clinical_decision.active_care_v1'` (audit action)
- `case_kind: 'treatment_item' | 'care_program'` (sibling discriminant)
- `activation_audit_event_id` (idempotency anchor)

---

## Convergence-via-wiring trial status

Still COMPLETE per ADR §7.7 Decision C. This commit is mechanical pattern-replay. No new ADR amendment. No new system-map amendment.

The trial-completion property continues to hold: the substrate is stable enough that mechanical migrations like c5 don't surface architectural questions. Future easy migrations (followup_needed, followup_due, refill_pending, rx_sent) follow the same pattern.

---

## What's next

5 legacy cases remain. Recommended order if continuing the legacy cleanup:
1. `followup_due` / `followup_needed` (medium; touches ongoing care state)
2. `refill_pending` (medium; touches medication state)
3. `rx_sent` (medium; mentions prescription)
4. `case_denied` (hard; PHI risk in denial reasons; bridges into 4H-send-policy phase)

Or non-legacy-cleanup options (per the c1 mode-shift note + the future-blocks audit):
- First rule in_app opt-in (pick an existing rule, add `'in_app'` channel + render-in-app function) — proves c1 substrate works with a real rule
- Patient portal UI for displaying inbox messages — visible continuity
- Net-new tier_3 rule (e.g., `provider_message_sent`)

The mode-shift framing remains: prefer commits that unlock visible continuity over commits that extend substrate further.

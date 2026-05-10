# HANDOFF — Phase 4H-templates-discipline c7 (`followup_needed` migration) checkpoint

**Date:** 2026-05-10
**Status:** SHIPPED. All verification green. Pushed to origin/main as commit `704f290`.
**Phase position:** 8th typed Rule + Template migration overall; 7th in 4H-templates-discipline series.

---

## What this commit shipped

**The followup_needed notification migrated.** Fifth Rule in the `clinical_decision` domain. **FIRST migration with asymmetric producer-side status gates:**

- `updateTreatmentItemStatus` fires on `(paused | stopped)` — treatment_items has no `completed`/`cancelled` status
- `updateCareProgramStatus` fires on `(paused | completed | cancelled)` — care_programs has no `stopped` status

The Rule layer is producer-agnostic; each producer's gate fires independently, and the same Rule executes for both. The payload's `next_status` field carries which status fired for audit lineage.

**Collapses 4 legacy `PATIENT_NOTIFY_BY_STATUS` map entries** (paused / completed / cancelled / stopped → followup_needed) into one typed Rule.

---

## Files changed (16 total)

### NEW (4)

- [`repo/rules/clinical_decision/followup_needed_v1.ts`](../../repo/rules/clinical_decision/followup_needed_v1.ts)
- [`repo/templates/clinical_decision/followup_needed_v1.ts`](../../repo/templates/clinical_decision/followup_needed_v1.ts)
- [`lib/templates/render/followup-needed.ts`](../../lib/templates/render/followup-needed.ts)
- [`scripts/test-followup-needed-parity.ts`](../../scripts/test-followup-needed-parity.ts) (5 scenarios; 39 assertions including 4-status legacy non-firing check)

### MODIFIED (11)

- [`lib/events/rule-trigger-event-types.ts`](../../lib/events/rule-trigger-event-types.ts) — added `'patient.case_followup_needed'`
- [`lib/events/audit-actions.ts`](../../lib/events/audit-actions.ts) — added `'rule.fired.clinical_decision.followup_needed_v1'`
- [`repo/rules/index.ts`](../../repo/rules/index.ts) + [`repo/templates/index.ts`](../../repo/templates/index.ts) — registered 8th
- [`lib/rules/runtime/dispatcher.ts`](../../lib/rules/runtime/dispatcher.ts) — added union variant + PatientCaseFollowupNeededPayload + executeFollowupNeededRule executor
- [`lib/internal/patient-case/impl.ts`](../../lib/internal/patient-case/impl.ts) — 6th dispatch block in `updateTreatmentItemStatus` + 4th in `updateCareProgramStatus` with **asymmetric status gates per producer**
- [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) — removed case 'followup_needed' arms
- [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) — removed `'followup_needed'` from union + **4 PATIENT_NOTIFY_BY_STATUS map entries** (paused/completed/cancelled/stopped)
- [`app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx`](../../app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx) — removed `'followup_needed'`
- [`scripts/lint-event-types.ts`](../../scripts/lint-event-types.ts) — added test-followup-needed-parity.ts to EXEMPT_PATHS
- [`scripts/test-rules-templates-scaffold.ts`](../../scripts/test-rules-templates-scaffold.ts) — count `>= 8` + anchor assertions

(Plus the preflight; total 16 files.)

---

## Verification (all green)

| Check | Status |
|---|---|
| `npm run typecheck` | GREEN |
| `npm run lint` | GREEN |
| `lint-rules-templates-scaffold.ts` | PASS (5 checks; 8 rules + 8 templates) |
| `lint-event-types.ts` | OK (70 audit actions; 0 unknown) |
| `test-rules-templates-scaffold.ts` | 100/100 passed |
| `test-followup-needed-parity.ts` | 39/39 across 5 live-DB scenarios |

---

## Legacy v0 cutover progress

**8 of 11 baseline cases migrated + deleted:**
payment_received, intake_submitted, case_approved, awaiting_clinical_review, shipped, active_care, followup_due, **followup_needed**.

**3 remaining:**
- `case_denied` (hard — PHI risk; bridges into 4H-send-policy)
- `rx_sent` (likely activates `pharmacy_lifecycle/` sibling-domain)
- `refill_pending` (possibly `pharmacy_lifecycle/`, possibly `clinical_decision`)

After c7, only 3 mappings remain in `PATIENT_NOTIFY_BY_STATUS`: `denied`, `rx_sent`, `refill_pending`. Closer to the eventual deletion of 4 legacy files.

---

## Producer-site dispatch counter (extraction-pressure tracking)

Per c6 + ChatGPT note + radar zone 7:
- `updateTreatmentItemStatus`: **6 dispatch blocks**
- `updateCareProgramStatus`: **4 dispatch blocks**

Approaching the 10-15 rules threshold where extraction starts to be valuable. NOT a blocker; flagged for future-us.

---

## What c7 demonstrated architecturally

c7 is the **third mechanical pattern-replay** since the trial completed. Validated:

- **Asymmetric per-producer status gates work cleanly.** Same Rule fires from both producers but with different status-set filters per producer surface. The Rule layer remains producer-agnostic; the dispatcher handles it identically. The payload's `next_status` field is a wide union (4 values) that captures all producers' allowed statuses; the producer-side filter is what enforces the specific subset per surface.

- **Multi-mapping collapse works.** 4 legacy `PATIENT_NOTIFY_BY_STATUS` map entries (paused/completed/cancelled/stopped) all routed to the same `'followup_needed'` template. c7 collapses all 4 into 1 typed Rule. Largest single-commit collapse in the cutover so far.

---

## Anchor strings

- `rule.clinical_decision.followup_needed_v1` (rule_id)
- `tmpl.clinical_decision.followup_needed_v1` (template_key)
- `'patient.case_followup_needed'` (RuleTrigger event_type)
- `'rule.fired.clinical_decision.followup_needed_v1'` (audit action)
- `next_status: 'paused' | 'stopped' | 'completed' | 'cancelled'` (asymmetric-gate union)
- `transition_audit_event_id` (idempotency anchor)

---

## What's next

3 legacy cases remain. Recommended ordering:

1. **`refill_pending`** OR **`rx_sent`** — both potentially activate `pharmacy_lifecycle/` sibling-domain folder. First activation since `fulfillment_lifecycle/` (c4). Will need a real preflight (not just 5-attribute short form) because it's a sibling-domain expansion. May ship as one combined commit or two depending on doctrinal nuance.

2. **`case_denied`** (last) — PHI risk in denial reasons. Bridges into 4H-send-policy phase. Will need a careful preflight + ChatGPT review.

After c8 (or c8+c9 if pharmacy_lifecycle splits) and c10, four legacy files get deleted entirely:
- `lib/workflows/onPatientWorkflowEvent.ts`
- `lib/workflows/notificationRules.ts`
- `lib/workflows/types.ts`
- `lib/notifications/patientMessages.ts`

---

## Convergence-via-wiring trial status

Still COMPLETE per ADR §7.7 Decision C. C7's asymmetric-gate variation didn't surface architectural questions — the Rule layer handled it without changes. Continues to validate that the substrate is stable for routine migrations.

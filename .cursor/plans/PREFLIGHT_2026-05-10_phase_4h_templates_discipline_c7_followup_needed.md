# Preflight — Phase 4H-templates-discipline c7 (`followup_needed` migration)

**Status:** PROPOSED-as-implemented (per "keep knocking down at the same pace" cadence). Captured for git history alongside the c7 commit.

**Phase position:** 7th typed Rule + Template migration in 4H-templates-discipline. 8th typed rule overall.

---

## The 5 attributes

| Attribute | Value |
|---|---|
| Sibling domain | `clinical_decision` |
| Payload discriminant | `case_kind: 'treatment_item' \| 'care_program'` |
| Producer site | BOTH `updateTreatmentItemStatus` (6th block) + `updateCareProgramStatus` (4th block); ASYMMETRIC status sets per producer |
| Authority / severity / tier | `authority_floor: 'system'`, `recall_severity: 'operational'`, `intended_privacy_exposure_level: 1` (existence_only), `message_intent: 'operational'` |
| Wording diff | Legacy email + SMS preserved verbatim. SMS prefix sourced from typed `brand_short_label` slot. No inline brand interpolation in body. |

---

## What's architecturally different from c6

**FIRST migration with asymmetric producer-side status gates.** Prior multi-status OR rule (`awaiting_clinical_review`) had identical 2-status OR (`under_review | pending_approval`) on both producer surfaces. c7 has DIFFERENT status sets per producer:

- `updateTreatmentItemStatus`: `nextStatus === 'paused' || nextStatus === 'stopped'` (treatment_items doesn't have `completed`/`cancelled`)
- `updateCareProgramStatus`: `nextStatus === 'paused' || nextStatus === 'completed' || nextStatus === 'cancelled'` (care_programs doesn't have `stopped`)

The Rule layer doesn't care — it's producer-agnostic. Each producer-side filter independently determines whether to fire. The payload's `next_status` field carries which status fired for audit lineage.

**Collapses 4 legacy mappings in one commit:** `paused`, `completed`, `cancelled`, `stopped` → all routed to followup_needed in the legacy `PATIENT_NOTIFY_BY_STATUS` map. After this commit lands, all 4 mappings delete.

---

## Producer-site gates

```ts
// updateTreatmentItemStatus — 6th dispatch block
if (
  item.treatment_key === 'glp1_primary' &&
  prevStatus !== nextStatus &&
  (nextStatus === 'paused' || nextStatus === 'stopped') &&
  treatmentAudit.ok &&
  treatmentAudit.audit_event_id
) { /* dispatch with next_status carried in payload */ }

// updateCareProgramStatus — 4th dispatch block
if (
  program.program_type === 'weight_loss' &&
  prevStatus !== nextStatus &&
  (nextStatus === 'paused' || nextStatus === 'completed' || nextStatus === 'cancelled') &&
  programAudit.ok &&
  programAudit.audit_event_id
) { /* dispatch with next_status carried in payload */ }
```

Idempotency anchor: `transition_audit_event_id` (per-transition).

---

## File-by-file change set

### NEW (4)

- `repo/rules/clinical_decision/followup_needed_v1.ts`
- `repo/templates/clinical_decision/followup_needed_v1.ts`
- `lib/templates/render/followup-needed.ts`
- `scripts/test-followup-needed-parity.ts`

### MODIFIED (10)

- `lib/events/rule-trigger-event-types.ts` — add `'patient.case_followup_needed'`
- `lib/events/audit-actions.ts` — add `'rule.fired.clinical_decision.followup_needed_v1'`
- `repo/rules/index.ts` + `repo/templates/index.ts` — register 8th
- `lib/rules/runtime/dispatcher.ts` — union variant + PatientCaseFollowupNeededPayload + executeFollowupNeededRule
- `lib/internal/patient-case/impl.ts` — 6th dispatch block in updateTreatmentItemStatus + 4th in updateCareProgramStatus (asymmetric status gates)
- `lib/notifications/patientMessages.ts` — remove case 'followup_needed' arms
- `lib/workflows/notificationRules.ts` — remove `'followup_needed'` from union + 4 PATIENT_NOTIFY_BY_STATUS map entries (paused/completed/cancelled/stopped)
- `app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx` — remove `'followup_needed'`
- `scripts/lint-event-types.ts` — add test file to EXEMPT_PATHS
- `scripts/test-rules-templates-scaffold.ts` — count `>= 8` + anchors

---

## After c7

3 legacy cases remain: `case_denied`, `rx_sent`, `refill_pending`. Of those, rx_sent and refill_pending will likely activate `pharmacy_lifecycle/` sibling-domain folder (real preflight needed); case_denied bridges into 4H-send-policy (real preflight + ChatGPT review).

Producer-site dispatch counter after c7: `updateTreatmentItemStatus` = 6 blocks, `updateCareProgramStatus` = 4 blocks. Continues approaching the 10-15 rules extraction-pressure threshold flagged in c6 commit + radar zone 7.

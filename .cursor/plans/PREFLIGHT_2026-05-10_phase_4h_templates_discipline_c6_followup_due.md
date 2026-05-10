# Preflight — Phase 4H-templates-discipline c6 (`followup_due` migration)

**Status:** PROPOSED. Awaiting approval.

**Phase position:** 6th typed Rule + Template migration in 4H-templates-discipline. 7th typed rule overall.

**Why short preflight:** per ADR §7.7 Decision C, trial is COMPLETE. Mechanical pattern-replay; no new architecture.

---

## 1. The 5 attributes

| Attribute | Value | Reasoning |
|---|---|---|
| Sibling domain | `clinical_decision` | Producer-site is `treatment_items.status='refill_due'` transition; native clinical_decision locality. Wording is a check-in reminder ("Time for your check-in") — clinical_decision-shaped status ack |
| Payload discriminant | `case_kind: 'treatment_item'` | Single producer surface (care_programs don't have `'refill_due'` status). Mirrors prior clinical_decision migrations. |
| Producer site | `lib/internal/patient-case/impl.ts` `updateTreatmentItemStatus` ONLY | First clinical_decision migration with single-producer-site (vs case_approved/case_under_review/active_care which all fire from BOTH treatment_item and care_program). |
| Authority / severity / tier | `authority_floor: 'system'`, `recall_severity: 'operational'`, `intended_privacy_exposure_level: 1`, `message_intent: 'operational'` | Mirrors awaiting_clinical_review_v1 + active_care_v1 exactly. Wording references "check-in", "follow-up", "due tasks", "dashboard" — no protocol/dose/condition/pathway. tier_1 existence_only honest. |
| Wording diff | Legacy email subject/preview/eyebrow/heading/intro/detail preserved verbatim. SMS prefix `"MAIN: Check-in due."` rewritten via typed `brand_short_label` slot. NO inline brand interpolation in the body text (unlike active_care). For brands.slug='main' rendered output is byte-identical. | Same multi-tenant rewrite as prior 4 migrations; simpler wording surface than c5. |

---

## 2. Producer-site gate

```ts
if (
  item.treatment_key === 'glp1_primary' &&
  prevStatus !== nextStatus &&
  nextStatus === 'refill_due' &&
  treatmentAudit.ok &&
  treatmentAudit.audit_event_id
) {
  await dispatchRuleTriggerEvent({
    event_type: 'patient.case_followup_due',
    payload: {
      patient_id: patientId,
      case_kind: 'treatment_item',
      case_id: treatmentItemId,
      transition_audit_event_id: treatmentAudit.audit_event_id,
    },
  })
}
```

5th dispatch block in `updateTreatmentItemStatus`. NO corresponding block in `updateCareProgramStatus` (refill_due not a care_program status).

Idempotency anchor: `transition_audit_event_id` (per-transition; treatment_item bouncing active → refill_due → active → refill_due fires one notification per genuine transition into refill_due).

---

## 3. File-by-file change set

### NEW (4)

- `repo/rules/clinical_decision/followup_due_v1.ts`
- `repo/templates/clinical_decision/followup_due_v1.ts`
- `lib/templates/render/followup-due.ts`
- `scripts/test-followup-due-parity.ts` (5 scenarios)

### MODIFIED (~10)

- `lib/events/rule-trigger-event-types.ts` — add `'patient.case_followup_due'`
- `lib/events/audit-actions.ts` — add `'rule.fired.clinical_decision.followup_due_v1'`
- `repo/rules/index.ts` + `repo/templates/index.ts` — register 7th
- `lib/rules/runtime/dispatcher.ts` — RuleTriggerEvent union + PatientCaseFollowupDuePayload + executeFollowupDueRule
- `lib/internal/patient-case/impl.ts` — 5th dispatch block in `updateTreatmentItemStatus`
- `lib/notifications/patientMessages.ts` — remove case 'followup_due' arms
- `lib/workflows/notificationRules.ts` — remove `'followup_due'` from union + `refill_due: 'followup_due'` map entry
- `app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx` — remove `'followup_due'`
- `scripts/lint-event-types.ts` — add test file to EXEMPT_PATHS
- `scripts/test-rules-templates-scaffold.ts` — count `>= 7` + anchors

---

## 4. Risks + mitigations

| Risk | Mitigation |
|---|---|
| First single-producer clinical_decision migration; might surface a hidden assumption that all clinical_decision rules fire from both treatment_item and care_program | Producer-site filter explicitly only adds the dispatch block to `updateTreatmentItemStatus`; the Rule is producer-agnostic at the Rule layer; the dispatcher handles it identically |
| ChatGPT's near-simultaneous-notification UX concern from c5 carries forward | Same situation as c5: legacy parity preservation; flagged in the radar (zone 3 — Communication saturation) and future-blocks audit; not a c6 blocker |

---

## 5. Verification plan

Standard 6-step:
1. `npm run typecheck`
2. `npm run lint`
3. `npx tsx scripts/lint-rules-templates-scaffold.ts`
4. `npx tsx scripts/lint-event-types.ts`
5. `npx tsx scripts/test-rules-templates-scaffold.ts` (count assertions update to `>= 7`)
6. `npx tsx scripts/test-followup-due-parity.ts` (5 scenarios; mirrors test-active-care-parity.ts)

All 6 prior parity tests must remain passing.

---

## 6. Approval gate

- **"approve and execute"** — full execution end-to-end through commit + push + handoff
- **"approve, no commit yet"** — write + verify, stop before commit
- **"edit first: <changes>"** — preflight tweaks
- **"discuss first"** — pause

After execution, 4 of 11 baseline legacy cases remain (case_denied, followup_needed, refill_pending, rx_sent).

---

## 7. Refs

- Pattern reference: `repo/rules/clinical_decision/active_care_v1.ts` (closest analog: same domain, system-authority, tier_1, operational; shipped in c5)
- ADR §7.7 Decision C (mechanical pattern-replay discipline)
- System-map `## Platform operational model` doctrine

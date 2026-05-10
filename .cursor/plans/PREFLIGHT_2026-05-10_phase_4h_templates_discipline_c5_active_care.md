# Preflight — Phase 4H-templates-discipline c5 (`active_care` migration)

**Status:** PROPOSED. Not yet implemented. Awaiting approval.

**Phase position:** 5th typed Rule + Template migration in 4H-templates-discipline. Sixth typed rule overall (after `payment_received`, `intake_submitted`, `case_approved`, `awaiting_clinical_review`, `order_shipped`).

**Why short preflight:** per ADR §7.7 Decision C, the convergence-via-wiring trial is COMPLETE. New migrations follow the established pattern without re-deriving architectural choices. This preflight names the 5 attributes (sibling domain, discriminant, producer site, authority/severity/tier, wording diff log) + verification plan. No new architecture introduced.

---

## 1. The 5 attributes

| Attribute | Value | Reasoning |
|---|---|---|
| Sibling domain | `clinical_decision` | Status transition to `'active'` happens downstream of provider approval; status ack pattern matches existing `awaiting_clinical_review` (also clinical_decision, also system-authority) |
| Payload discriminant | `case_kind: 'treatment_item' \| 'care_program'` | Mirrors `case_approved` + `awaiting_clinical_review`; producer fires from both surfaces (`updateTreatmentItemStatus` + `updateCareProgramStatus`) |
| Producer site | `lib/internal/patient-case/impl.ts` `updateTreatmentItemStatus` + `updateCareProgramStatus` | Same case-shaped surface as the prior 3 clinical_decision migrations; native locality (NOT transitional) |
| Authority / severity / tier | `authority_floor: 'system'`, `recall_severity: 'operational'`, `intended_privacy_exposure_level: 1` (existence_only), `message_intent: 'operational'` | Status ack pattern matches `awaiting_clinical_review` exactly. Wording references "active care", "current plan", "check-ins", "next steps" — no protocol, dose, condition, or pathway named. Tier_1 existence_only honest. |
| Wording diff | Legacy email subject/preview/eyebrow/heading/intro/detail preserved verbatim except: hardcoded `"MAIN"` prefix in intro `"You are now in active care with MAIN."` rewritten to source from `brands.slug.toUpperCase()` via typed `brand_short_label` slot (matches ADR §7.5 multi-tenant rule). For brands.slug='main' the rendered output is byte-identical. SMS prefix `"MAIN: Active care."` rewritten via the same slot. | Same multi-tenant rewrite as the prior 4 migrations. Governed equivalence not byte-level per ADR §7.5; in this case both align. |

---

## 2. Producer-site gate

```ts
if (
  item.treatment_key === 'glp1_primary' &&
  prevStatus !== nextStatus &&
  nextStatus === 'active' &&
  treatmentAudit.ok &&
  treatmentAudit.audit_event_id
) {
  await dispatchRuleTriggerEvent({
    event_type: 'patient.case_active',
    payload: {
      patient_id: patientId,
      case_kind: 'treatment_item',
      case_id: treatmentItemId,
      activation_audit_event_id: treatmentAudit.audit_event_id,
    },
  })
}
```

Same gate at `updateCareProgramStatus` for `program_type === 'weight_loss'` + transition to `'active'`. Mirrors the existing `case_approved` + `case_under_review` dispatch blocks; just a 4th branch added per producer.

Idempotency anchor: `activation_audit_event_id` (per-transition audit lineage; a treatment_item bouncing approved → denied → approved → active fires one notification per genuine transition into 'active').

---

## 3. File-by-file change set

### NEW (3)

- `repo/rules/clinical_decision/active_care_v1.ts` — typed Rule. Same shape as `awaiting_clinical_review_v1` (system-authority, tier_1, operational) with active_care-specific values.
- `repo/templates/clinical_decision/active_care_v1.ts` — typed Template. Same shape as `awaiting_clinical_review_v1` Template with active_care-specific wording slots.
- `lib/templates/render/active-care.ts` — render module. Mirrors `awaiting-clinical-review.ts` structure with active_care literals.
- `scripts/test-active-care-parity.ts` — live-DB parity smoke test. 5 scenarios (production patient + idempotent replay + synthetic env + legacy non-firing + wording byte-identity). Mirrors `test-awaiting-clinical-review-parity.ts`.

(Actually 4 NEW files — corrected.)

### MODIFIED (8)

- `lib/events/rule-trigger-event-types.ts` — add `'patient.case_active'` to `RULE_TRIGGER_EVENT_TYPES`
- `lib/events/audit-actions.ts` — add `'rule.fired.clinical_decision.active_care_v1'` to the audit action enum
- `repo/rules/index.ts` — register `activeCareV1` (6th rule)
- `repo/templates/index.ts` — register `activeCareTemplateV1` (6th template)
- `lib/rules/runtime/dispatcher.ts` — add `'patient.case_active'` to `RuleTriggerEvent` union, `PatientCaseActivePayload` interface, `executeActiveCareRule` executor branch (mirrors `executeAwaitingClinicalReviewRule`)
- `lib/internal/patient-case/impl.ts` — add 4th dispatch block in `updateTreatmentItemStatus` and corresponding block in `updateCareProgramStatus` (status='active' transition)
- `lib/notifications/patientMessages.ts` — remove `case 'active_care'` email + SMS arms; transitional removal comments
- `lib/workflows/notificationRules.ts` — remove `'active_care'` from `NotificationTemplateKey` union; remove `active: 'active_care'` from `PATIENT_NOTIFY_BY_STATUS`
- `app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx` — remove `'active_care'` from `TEMPLATE_OPTIONS`
- `scripts/lint-event-types.ts` — add `scripts/test-active-care-parity.ts` to `EXEMPT_PATHS`
- `scripts/test-rules-templates-scaffold.ts` — count assertions updated to `>= 6`; add `active_care_v1` anchor assertions

(Actually 11 modifications. Realistic count.)

---

## 4. Behavioral parity discipline

- **Population:** `glp1_primary` treatment_items + `weight_loss` care_programs transitioning to `'active'` status
- **Channels:** email + SMS (matches legacy `PATIENT_NOTIFY_BY_STATUS` route)
- **Wording:** legacy preserved verbatim with brand prefix sourced from `brands.slug.toUpperCase()`
- **Idempotency anchor:** `activation_audit_event_id` (mirrors approval/transition pattern from prior c2/c3 migrations)
- **Cadence:** `transactional_critical: false` — active_care is informational status ack; cadence-bypass not defensible
- **Disclosure-policy:** tier_1 + glp1_primary `pathway_sensitivity` resolves to `'high'` (clamp doesn't fire on tier_1)

---

## 5. Risk + mitigations

| Risk | Mitigation |
|---|---|
| Legacy SMS prefix `"MAIN: Active care."` is byte-identical to typed render only when `brand_short_label = 'MAIN'` | For multi-tenant brands the prefix changes — that's the intended ADR §7.5 multi-tenant rule, not a regression |
| Producer site fires from BOTH `treatment_items.status='active'` AND `care_programs.status='active'`; same Rule fires twice if both transition together | Per-transition idempotency_key uses `activation_audit_event_id` from the specific transition; if both fire genuinely there are two distinct audit_event_ids and two distinct notifications. Matches legacy behavior (legacy also fired twice). |
| Existing `case_approved` + `case_under_review` dispatch blocks already exist on this producer site; adding active_care makes 3 dispatch blocks per status transition | Each block is gated on its own `nextStatus === '<value>'` check; only one fires per transition. Pattern matches existing structure. |

---

## 6. Verification plan

1. `npm run typecheck` — clean
2. `npm run lint` — clean
3. `npx tsx scripts/lint-rules-templates-scaffold.ts` — green (sibling-discriminant guard verified; no new domain folder)
4. `npx tsx scripts/lint-event-types.ts` — green
5. `npx tsx scripts/test-rules-templates-scaffold.ts` — green (count `>= 6`; new anchor assertions)
6. `npx tsx scripts/test-active-care-parity.ts` — NEW; 5 scenarios

Existing 5 parity tests (`test-payment-received-parity.ts` etc.) must still pass unchanged.

---

## 7. What's deferred

- **In_app channel opt-in for active_care** — NOT in this commit. The c1 inbox substrate exists; this commit ships the typed Rule with `channels: ['email', 'sms']` (parity preservation). Adding `'in_app'` is a separate per-rule decision in a future commit.
- **All other infrastructure** named in radar zones / future-blocks audit — unchanged.

---

## 8. Convergence-via-wiring trial status

Still COMPLETE per ADR §7.7. This commit is mechanical pattern-replay. No new ADR amendment.

---

## 9. Approval gate

Reply with one of:

- **"approve and execute"** — write all 4 NEW + 11 MODIFIED files + run verification + commit + push + write c5 checkpoint handoff
- **"approve, no commit yet"** — write + verify, stop before commit
- **"edit first: <changes>"** — preflight tweaks
- **"discuss first"** — pause

---

## 10. Refs

- Pattern reference: [`repo/rules/clinical_decision/awaiting_clinical_review_v1.ts`](../../repo/rules/clinical_decision/awaiting_clinical_review_v1.ts) (closest analog: system-authority, tier_1, operational)
- ADR §7.7 (this commit operates within Decision C anti-drift discipline)
- System-map `## Platform operational model` doctrine
- Mode-shift note in c1 handoff: this commit IS visible continuity (closes out one more legacy v0 case)

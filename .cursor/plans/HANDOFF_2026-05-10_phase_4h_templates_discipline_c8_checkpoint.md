# HANDOFF — Phase 4H-templates-discipline c8 (`pharmacy_lifecycle/` activation) checkpoint

**Date:** 2026-05-10
**Status:** SHIPPED. All verification green. Pushed to origin/main as commit `7376d89`.
**Phase position:** 8th typed migration in 4H-templates-discipline. **Third sibling-domain folder activation** (after the original `clinical_decision/` and the c4 `fulfillment_lifecycle/` activation). **First two-member sibling-domain activation in a single commit.**

---

## What this commit shipped

**`pharmacy_lifecycle/` sibling-domain folder activated with two members in one commit.** Per system-map `## Platform operational model` doctrine: prescriptions / pharmacy lifecycle is a first-class sibling under Patient with its own `pharmacy_event_kind` discriminant + `rule.fired.pharmacy_lifecycle.*` audit namespace.

Both members:
- `rx_sent_v1` (pharmacy_event_kind: `'rx_sent_to_pharmacy'`) — fires from `updateTreatmentItemStatus` on transition to `'rx_sent'`
- `refill_initiated_v1` (pharmacy_event_kind: `'refill_initiated'`) — fires from `updateTreatmentItemStatus` on transition to `'refill_pending'`

Discriminant value choice: legacy STATUS names (`rx_sent`, `refill_pending`) are internal `treatment_items.status` values; the cross-sibling pharmacy event vocabulary uses explicit semantics. Future-reserved unwired: `'rx_filled'`, `'rx_dispensed'`, `'refill_approved_by_provider'`, `'refill_denied_by_provider'`.

---

## Files changed (21 total)

### NEW (8)

- [`repo/rules/pharmacy_lifecycle/rx_sent_v1.ts`](../../repo/rules/pharmacy_lifecycle/rx_sent_v1.ts)
- [`repo/rules/pharmacy_lifecycle/refill_initiated_v1.ts`](../../repo/rules/pharmacy_lifecycle/refill_initiated_v1.ts)
- [`repo/templates/pharmacy_lifecycle/rx_sent_v1.ts`](../../repo/templates/pharmacy_lifecycle/rx_sent_v1.ts)
- [`repo/templates/pharmacy_lifecycle/refill_initiated_v1.ts`](../../repo/templates/pharmacy_lifecycle/refill_initiated_v1.ts)
- [`lib/templates/render/rx-sent.ts`](../../lib/templates/render/rx-sent.ts)
- [`lib/templates/render/refill-initiated.ts`](../../lib/templates/render/refill-initiated.ts)
- [`scripts/test-rx-sent-parity.ts`](../../scripts/test-rx-sent-parity.ts) (5 scenarios; 36 assertions)
- [`scripts/test-refill-initiated-parity.ts`](../../scripts/test-refill-initiated-parity.ts) (5 scenarios; 36 assertions)

### MODIFIED (12)

- [`lib/events/rule-trigger-event-types.ts`](../../lib/events/rule-trigger-event-types.ts) — added 2 trigger events
- [`lib/events/audit-actions.ts`](../../lib/events/audit-actions.ts) — added 2 audit actions
- [`repo/rules/index.ts`](../../repo/rules/index.ts) + [`repo/templates/index.ts`](../../repo/templates/index.ts) — registered 9th + 10th
- [`lib/rules/runtime/dispatcher.ts`](../../lib/rules/runtime/dispatcher.ts) — 2 union variants + 2 payload interfaces + 2 executor functions
- [`lib/internal/patient-case/impl.ts`](../../lib/internal/patient-case/impl.ts) `updateTreatmentItemStatus` — 7th + 8th dispatch blocks with extensive transitional-locality comments
- [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) — removed `case 'rx_sent'` + `case 'refill_pending'` arms
- [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) — removed both from union + map. **Only `case_denied` remains.**
- [`app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx`](../../app/internal/\(protected\)/patients/[patientId]/SendTemplateTestForm.tsx) — removed both. **Only `case_denied` remains.**
- [`scripts/lint-event-types.ts`](../../scripts/lint-event-types.ts) — added both new parity test files to `EXEMPT_PATHS`
- [`scripts/lint-rules-templates-scaffold.ts`](../../scripts/lint-rules-templates-scaffold.ts) — extended **check 5** with `pharmacy_event_kind → pharmacy_lifecycle/` guard (now 3 discriminant/folder pairs verified: case_kind, order_kind, pharmacy_event_kind)
- [`scripts/test-rules-templates-scaffold.ts`](../../scripts/test-rules-templates-scaffold.ts) — count assertions `>= 10`; anchor blocks for both new rules + both new templates with shape assertions

(Plus the preflight; total 21.)

---

## Verification (all green)

| Check | Status |
|---|---|
| `npm run typecheck` | GREEN |
| `npm run lint` | GREEN |
| `lint-rules-templates-scaffold.ts` | PASS (5 checks; 10 rules + 10 templates; pharmacy_event_kind discriminant guard active) |
| `lint-event-types.ts` | OK (72 audit actions, 0 unknown) |
| `test-rules-templates-scaffold.ts` | 126/126 passed |
| `test-rx-sent-parity.ts` | 36/36 across 5 live-DB scenarios |
| `test-refill-initiated-parity.ts` | 36/36 across 5 live-DB scenarios |

---

## Sibling-domain activation counter

After c8: **5 active sibling-domain folders** populating typed rules + templates:
- `account_lifecycle/` (1 rule)
- `billing_subscription/` (1 rule)
- `clinical_decision/` (5 rules)
- `fulfillment_lifecycle/` (1 rule)
- **`pharmacy_lifecycle/` (2 rules) — NEW THIS COMMIT**

10 rules + 10 templates total. Convergence-via-wiring trial remains COMPLETE per ADR §7.7.

---

## Legacy v0 cutover progress

**10 of 11 baseline cases migrated + deleted:**
payment_received, intake_submitted, case_approved, awaiting_clinical_review, shipped, active_care, followup_due, followup_needed, **rx_sent, refill_pending**.

**1 remaining:** `case_denied` (bridges into 4H-send-policy phase due to PHI risk in denial reasons; needs careful preflight + ChatGPT review).

After `case_denied` migrates, four legacy notification files become deletable:
- `lib/workflows/onPatientWorkflowEvent.ts`
- `lib/workflows/notificationRules.ts`
- `lib/workflows/types.ts`
- `lib/notifications/patientMessages.ts`

---

## Producer-site dispatch counter (extraction-pressure tracking)

Per c6 + c7 + ChatGPT note + radar zone 7:
- `updateTreatmentItemStatus`: **8 dispatch blocks** (was 6 after c7; +2 this commit)
- `updateCareProgramStatus`: **4 dispatch blocks** (unchanged this commit)

`updateTreatmentItemStatus` is now at 8 of the 10-15 extraction-pressure threshold. **Approaching but not blocking.** Recommendation: consider helper extraction (a small `dispatchTreatmentItemStatusTransition` map/function) BEFORE c9 (case_denied) lands, OR after legacy file deletion when the function shape stabilizes. Not a c8 blocker.

---

## Architectural validation: third sibling-domain activation worked clean

c8 is the THIRD sibling-domain expansion since the registry was scaffolded. Substrate accommodated it without changes — no new dispatcher generalization, no new orchestrator boundary, no new substrate primitive. The pattern reinforces:

1. **Folder layer:** `repo/rules/pharmacy_lifecycle/` + `repo/templates/pharmacy_lifecycle/` created from scratch following the c4 precedent.
2. **Discriminant layer:** `pharmacy_event_kind` lands in payload schemas with the same single-literal narrow union pattern as `case_kind` and `order_kind`. Scaffold lint check 5 extended; folder-placement guard active for all three discriminants.
3. **Audit layer:** `rule.fired.pharmacy_lifecycle.*` namespace lands without conflict.
4. **Runtime layer:** two new executor branches (`executeRxSentRule`, `executeRefillInitiatedRule`) sit alongside the existing eight; ChatGPT pre-execution constraint #1 (no dispatcher generalization) honored.
5. **Producer layer:** transitional locality on `updateTreatmentItemStatus` with extensive comments naming the architecturally-correct future producer (`lib/pharmacy/...`).

This is itself a substrate-validation signal: "the substrate must continue to admit each future sibling without rewrites" (system-map doctrine clause) is empirically true.

---

## Anchor strings

- `rule.pharmacy_lifecycle.rx_sent_v1` (rule_id)
- `rule.pharmacy_lifecycle.refill_initiated_v1` (rule_id)
- `tmpl.pharmacy_lifecycle.rx_sent_v1` (template_key)
- `tmpl.pharmacy_lifecycle.refill_initiated_v1` (template_key)
- `'patient.rx_sent_to_pharmacy'` (RuleTrigger event_type)
- `'patient.refill_initiated'` (RuleTrigger event_type)
- `'rule.fired.pharmacy_lifecycle.rx_sent_v1'` (audit action)
- `'rule.fired.pharmacy_lifecycle.refill_initiated_v1'` (audit action)
- `pharmacy_event_kind: 'rx_sent_to_pharmacy' | 'refill_initiated'` (discriminant values wired this commit)
- Idempotency anchors: `sent_audit_event_id` (rx_sent), `initiation_audit_event_id` (refill_initiated)

---

## What's next

**1 legacy case remains:** `case_denied`. This is the doctrinally-charged finale of the 4H-templates-discipline series:

- **PHI risk:** denial reasons may contain clinical context that's tier-elevated relative to other operational notifications. The Rule's `intended_privacy_exposure_level` may need to be `1` (existence_only) rather than `2` (low_context_phi), with the actual denial reason gated to in-app inbox or secure dashboard view.
- **4H-send-policy bridge:** this is the natural inflection point for the broader send-policy work (ChatGPT-flagged earlier).
- **Approach:** real preflight (not the 5-attribute short form), with explicit privacy/disclosure-policy analysis. Probably ChatGPT review.

**Pre-c9 housekeeping options to consider:**
- Helper extraction for `updateTreatmentItemStatus` dispatch fan-out (8 blocks; approaching threshold)
- Snapshot of `## Platform operational model` doctrine after 3 sibling activations to confirm clauses still hold
- Update v1 pressure-test radar with c8 closure on zones 7 + 27 (zone 27 status: c8 added 2 more transitional-locality producers, all explicitly comment-tagged; future producer migration remains deferred)

---

## Convergence-via-wiring trial status

Still COMPLETE per ADR §7.7 Decision C. C8's third sibling-domain expansion didn't surface architectural questions — the substrate handled it without changes. Continues to validate that the registry pattern is stable for future sibling activations (`scheduling_lifecycle/`, `labs_lifecycle/`, `provider_tasking/`, `communications_lifecycle/`, `retail_lifecycle/`, `marketing_lifecycle/`).

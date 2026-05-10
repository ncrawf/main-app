# HANDOFF — Phase 4H-templates-discipline c9 (`case_denied` FINAL migration) checkpoint

**Date:** 2026-05-10
**Status:** SHIPPED. All verification green. Pushed to origin/main as commit `aa8fa4f`.
**Phase position:** 9th and FINAL typed migration in 4H-templates-discipline. **Closes the entire 4H-templates-discipline series.**

---

## What this commit shipped

**FINAL legacy v0 notification migration.** All 11 baseline cases now flow through the typed Rule + Template registry. The legacy notification module deletes; legacy file closure achieved per system-map §1Q.12 DELETE-AFTER-PARITY.

**`case_denied_v1` is bound to provider clinical-decision denials only** (anti-overload binding pinned in 4 places). Future "denied" events in other operational siblings — payer adjudication / claim denial (revenue_cycle/), prior authorization denial (authorization_lifecycle/), refill denial (pharmacy_lifecycle/, slot reserved as `'refill_denied_by_provider'`), identity-verification denial (account_lifecycle/), capability/permission audit denial — get their own discriminants in their own sibling-domain folders. Reusing `case_kind` across that ontology seam is the canonization-of-wrong-ontology error v1 pressure-test radar zone 27 prevents. Binding lives in:
- [`repo/rules/clinical_decision/case_denied_v1.ts`](../../repo/rules/clinical_decision/case_denied_v1.ts) file header DENIED SEMANTIC SCOPE block
- [`repo/templates/clinical_decision/case_denied_v1.ts`](../../repo/templates/clinical_decision/case_denied_v1.ts) file header
- [`lib/internal/patient-case/impl.ts`](../../lib/internal/patient-case/impl.ts) producer-site dispatch block comment
- [PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c9_case_denied.md §1A](PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c9_case_denied.md)

---

## Files changed (29 total)

### NEW (4)

- [`repo/rules/clinical_decision/case_denied_v1.ts`](../../repo/rules/clinical_decision/case_denied_v1.ts)
- [`repo/templates/clinical_decision/case_denied_v1.ts`](../../repo/templates/clinical_decision/case_denied_v1.ts)
- [`lib/templates/render/case-denied.ts`](../../lib/templates/render/case-denied.ts)
- [`scripts/test-case-denied-parity.ts`](../../scripts/test-case-denied-parity.ts) (5 scenarios; 36 assertions)

### MODIFIED — c9 wiring (7)

- [`lib/events/rule-trigger-event-types.ts`](../../lib/events/rule-trigger-event-types.ts) — added `'patient.case_denied'` + payload schema with anti-overload binding comment
- [`lib/events/audit-actions.ts`](../../lib/events/audit-actions.ts) — added `'rule.fired.clinical_decision.case_denied_v1'`
- [`repo/rules/index.ts`](../../repo/rules/index.ts) + [`repo/templates/index.ts`](../../repo/templates/index.ts) — registered 11th
- [`lib/rules/runtime/dispatcher.ts`](../../lib/rules/runtime/dispatcher.ts) — union variant + payload interface + executor
- [`lib/internal/patient-case/impl.ts`](../../lib/internal/patient-case/impl.ts) — 9th dispatch block in `updateTreatmentItemStatus` + 5th in `updateCareProgramStatus` with anti-overload comments
- [`scripts/lint-event-types.ts`](../../scripts/lint-event-types.ts) — added test path to `EXEMPT_PATHS`
- [`scripts/test-rules-templates-scaffold.ts`](../../scripts/test-rules-templates-scaffold.ts) — count `>= 11` + anchor block

### DELETED — DELETE-AFTER-PARITY closure (2)

- [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) — DELETED entirely. Empty union after `case_denied` removed; map empty; file purpose gone.
- [`app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx`](../../app/internal/\(protected\)/patients/[patientId]/SendTemplateTestForm.tsx) — DELETED. Empty `TEMPLATE_OPTIONS` after c9; staff form had nothing left to render.

### REFACTORED — legacy shrink (5)

- [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) — removed `buildPatientEmail` + `buildPatientSmsPreview` switch dispatchers. KEPT 4 non-legacy build functions (visit-note, lab-req, callback, supplement) + `PatientMessageContext` + helpers.
- [`lib/workflows/onPatientWorkflowEvent.ts`](../../lib/workflows/onPatientWorkflowEvent.ts) — SHRUNK to chart.ai_review-only. Function signature unchanged; the 4 callers (Stripe webhook, staff status updates, intake derive, refill submit) work without further edits.
- [`lib/internal/patient-case/impl.ts`](../../lib/internal/patient-case/impl.ts) — removed `sendTemplateTestEmail` + `SendTemplateTestResult` + legacy imports
- [`app/internal/(protected)/patients/[patientId]/actions.ts`](../../app/internal/\(protected\)/patients/[patientId]/actions.ts) — removed `sendTemplateTestEmail` server action + legacy imports
- [`app/internal/(protected)/patients/[patientId]/page.tsx`](../../app/internal/\(protected\)/patients/[patientId]/page.tsx) — removed `SendTemplateTestForm` import + mount

### PARITY TEST CLEANUP (10)

All 10 prior parity tests had a "scenario 4 — legacy non-firing" assertion that called `resolvePatientNotifications`. The legacy module now deleted; stub injected at the top of each test (returns `[]`, matching the post-c9 reality). Files: `test-payment-received-parity`, `test-intake-submitted-parity`, `test-case-approved-parity`, `test-awaiting-clinical-review-parity`, `test-shipped-parity`, `test-active-care-parity`, `test-followup-due-parity`, `test-followup-needed-parity`, `test-rx-sent-parity`, `test-refill-initiated-parity`.

(Plus the preflight; 29 files total.)

---

## Verification (all green)

| Check | Status |
|---|---|
| `npm run typecheck` | GREEN |
| `npm run lint` | GREEN |
| `lint-rules-templates-scaffold.ts` | PASS (5 checks; 11 rules + 11 templates; legacy notificationRules.ts confirmed deleted) |
| `lint-event-types.ts` | OK (73 audit actions; 0 unknown) |
| `test-rules-templates-scaffold.ts` | 139/139 passed |
| `test-case-denied-parity.ts` | 36/36 across 5 live-DB scenarios |
| Sanity grep for legacy imports | zero remaining importers of `notificationRules` |
| Sanity grep for `enqueueChartAiReview` | still fires from 9 sites including the shrunk hook |

---

## Privacy posture (no PHI risk)

Legacy `case_denied` body was already tier_1 existence_only — "Update on your visit" / "There is an update on your visit request" / "Please review details and next steps in your dashboard." NO denial reason text. NO `denial_reason` field on `treatment_items` / `care_programs` (the only such field in the codebase is in `lib/auth/capabilities.ts` for capability-denial audit metadata, unrelated). c9 is a pure typing migration, NOT a privacy correction. The 4H-send-policy phase becomes its own explicit phase later, NOT initiated by c9.

---

## Architectural shape (mirrors awaiting_clinical_review_v1)

- `domain: 'clinical_decision'`
- `authority_floor: 'system'`
- `recall_severity: 'operational'`
- `intended_privacy_exposure_level: 1` (existence_only)
- `message_intent: 'operational'`
- `transactional_critical: false`
- `pathway_scope: undefined`
- Idempotency anchor: per-transition `transition_audit_event_id`
- Producer locality: BOTH `updateTreatmentItemStatus` + `updateCareProgramStatus`

---

## Sibling-domain activation counter (FINAL)

After c9: **5 active sibling-domain folders, 11 rules + 11 templates total.**
- `account_lifecycle/` — 1 rule (intake_submitted_v1)
- `billing_subscription/` — 1 rule (payment_received_v1)
- `clinical_decision/` — **6 rules** (case_approved, awaiting_clinical_review, active_care, followup_due, followup_needed, **case_denied** NEW)
- `fulfillment_lifecycle/` — 1 rule (order_shipped_v1)
- `pharmacy_lifecycle/` — 2 rules (rx_sent_v1, refill_initiated_v1)

---

## Producer-site dispatch counter (extraction-pressure tracking)

- `updateTreatmentItemStatus`: **9 dispatch blocks** (was 8 after c8; +1 this commit)
- `updateCareProgramStatus`: **5 dispatch blocks** (was 4 after c8; +1 this commit)

`updateTreatmentItemStatus` is now at the lower edge of the 10–15 extraction-pressure threshold flagged in radar zone 7. **Helper extraction is a candidate for the next commit (post-series stabilization)**, NOT this commit. Per user pre-execution guidance + ChatGPT framing: do not pre-emptively refactor; let real operational pressure surface.

---

## Radar zone status

- **Zone 7 (Legacy v0 notification survival, tier_1):** **CLOSED with c9.** The survival risk is structurally resolved — the legacy module is deleted, not deferred-but-dormant.
- **Zone 27 (Sibling-discriminant leak / case-as-parent-ontology drift):** STAYS OPEN as forward-looking watch zone. The DENIED SEMANTIC SCOPE binding in c9 is a fresh empirical reinforcement of the doctrine — exactly the anti-drift the zone exists to enforce.

(Future radar refresh should reflect zone 7 closure; not a c9 blocker.)

---

## Anchor strings

- `rule.clinical_decision.case_denied_v1` (rule_id)
- `tmpl.clinical_decision.case_denied_v1` (template_key)
- `'patient.case_denied'` (RuleTrigger event_type)
- `'rule.fired.clinical_decision.case_denied_v1'` (audit action)
- `case_kind: 'treatment_item' | 'care_program'` (discriminant — bound to clinical_decision/ via scaffold lint check 5)
- Idempotency anchor: `transition_audit_event_id`

---

## What 4H-templates-discipline accomplished (series retrospective)

The series shipped 11 typed Rules + 11 typed Templates across 5 sibling-domain folders, deleted 2 legacy notification files entirely, and shrunk one legacy hook to its non-notification core. The convergence-via-wiring trial completed early (declared in c4 ADR §7.7); subsequent commits (c5–c9) reinforced the pattern across:

- 1 sibling-domain expansion (c4: `fulfillment_lifecycle/`)
- 1 sibling-domain expansion (c8: `pharmacy_lifecycle/` with 2 simultaneous members)
- 1 first multi-status OR producer gate (c3: awaiting_clinical_review's `under_review | pending_approval`)
- 1 first asymmetric per-producer status gates (c7: followup_needed)
- 1 doctrinal anti-overload binding (c9: case_denied semantic scope)

Substrate primitives validated through repetition: typed event catalog, audit lineage, idempotency, disclosure-policy gate, sibling-discriminant lint, dual-producer dispatch, producer-site transitional locality, DELETE-AFTER-PARITY closure.

---

## What's next

The 4H-templates-discipline series is complete. The natural sequence:

1. **Helper extraction reassessment** (small commit, NOT urgent). Now that `updateTreatmentItemStatus` is at 9 dispatch blocks, evaluate whether a small `dispatchTreatmentItemStatusTransition` map/function is worth extracting. Benefits: cleaner producer site, easier to add future blocks, easier to read the dispatch fan-out at a glance. Costs: indirection layer; debugging is one frame deeper. Defer until a real edit-pain signal arrives, OR until pre-emptive extraction would save ~3+ future blocks. **Per user guidance: do NOT pre-emptively extract.**

2. **First per-rule `in_app` activation.** The `send_in_app` substrate has been wired since in_app_inbox c1 but no rules have opted in. The first rule that needs reason-bearing detail (e.g., a future provider-message rule, or a denial-reason-detail rule once provider workspace UI exists) will drive this.

3. **4H-send-policy phase.** Explicit phase pivot when channel-specific privacy clamp doctrine becomes operationally necessary (probably with the first multi-channel rule that has tier-divergence-by-channel).

4. **Future sibling activations** when their first concrete migration arrives:
   - `scheduling_lifecycle/` (appointment_kind discriminant)
   - `labs_lifecycle/` (lab_event_kind discriminant)
   - `provider_tasking/` (task_kind discriminant)
   - `communications_lifecycle/` (message-domain semantics, distinct from in_app substrate)
   - `retail_lifecycle/` (commerce orders distinct from clinical orders)
   - `marketing_lifecycle/` (lifecycle journeys)
   - `revenue_cycle/` (claim_event_kind — when payer integrations land; this is where future "denied" events branch)
   - `authorization_lifecycle/` (auth_event_kind — prior auth)
   - `account_lifecycle/` extension (identity-verification events)

5. **Cosmetic cleanup deferred:**
   - Rename `onPatientWorkflowEvent` → `enqueueChartReviewOnWorkflowEvent` (or similar)
   - Drop dead fields from `PatientWorkflowEvent` (`paymentSummary`, `trackingNumber`, `trackingUrl`, `stripeCheckoutSessionId`)

---

## Convergence-via-wiring trial status

Still COMPLETE per ADR §7.7 Decision C. C9 was the third sibling-domain reinforcement (third member in clinical_decision after c5/c6/c7) plus an anti-overload binding — the substrate handled it without architectural changes. The 4H-templates-discipline series concluding on time and on architecture is itself the validation signal.

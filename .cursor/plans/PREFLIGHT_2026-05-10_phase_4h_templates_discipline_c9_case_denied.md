# Preflight — Phase 4H-templates-discipline c9 (`case_denied` final migration + legacy file closure)

**Status:** APPROVED. Captured for git history alongside c9 commit.

**Phase position:** 9th and FINAL typed migration in 4H-templates-discipline. Eleventh typed Rule + Template overall. Sixth in `clinical_decision/` domain. **Closes the legacy v0 notification series.**

**Scope discipline:** narrow tier_1 migration. NOT a 4H-send-policy bridge. NOT in_app activation. NOT helper extraction. Helper extraction reassessed AFTER c9 lands — not before.

---

## 1. ChatGPT 7-point pressure-test answers

| # | Question | Answer (grounded in research) |
|---|---|---|
| 1 | Domain framing? | **`clinical_decision/`**. Provider-driven case decision (yes/no on a clinical request); same domain as `case_approved_v1` and `awaiting_clinical_review_v1`. Not pharmacy, not fulfillment, not a new sibling. See §1A "Denied semantic scope" below for anti-overload binding. |
| 2 | Channels tier_1 only? | **Yes — both email + SMS clamp to tier_1 existence_only** (matches legacy + `awaiting_clinical_review_v1` precedent). |
| 3 | Reason/detail excluded from email/SMS? | **Yes — but no enforcement work needed.** Legacy email body says "Update on your visit" / "There is an update on your visit request" / "Please review details and next steps in your dashboard." NO reason text exists today. NO `denial_reason` field on `treatment_items` / `care_programs` (the only `denial_reason` in the codebase is in `lib/auth/capabilities.ts` for capability-denial audit metadata, unrelated). |
| 4 | Use in_app substrate now? | **No, defer.** in_app substrate is wired but no rules have opted in yet. First per-rule in_app activation is its own architectural moment that should be a separate commit when there's reason-bearing detail to deliver. c9 stays narrow. |
| 5 | 4H-send-policy bridge? | **No.** Legacy is already privacy-correct (no PHI in body). c9 is a clean templates-discipline migration. The 4H-send-policy phase becomes its own explicit phase later, NOT initiated accidentally by c9. |
| 6 | Wording parity vs privacy correction? | **Verbatim parity.** Legacy email subject `'Update on your MAIN visit'` rewires to typed `${brand_short_label}` slot per ADR §7.5. All other strings preserved verbatim. |
| 7 | Idempotency / producer locality / disclosure-policy / audit lineage | Idempotency anchor: per-transition `transition_audit_event_id`. Producer locality: BOTH `updateTreatmentItemStatus` + `updateCareProgramStatus` (legacy `resolvePatientNotifications` is producer-agnostic; both producers route to the same Rule). Disclosure-policy: tier_1 channel-default email + SMS allowed; pathway_sensitivity unconsumed for tier_1. Audit lineage: `'rule.fired.clinical_decision.case_denied_v1'` per `clinical_decision` namespace pattern. |

---

## 1A. Denied semantic scope (anti-overload binding) — ChatGPT pre-execution addendum

**This is the binding clarification incorporated post-pressure-test review.** The English word "denied" is structurally overloaded across healthcare operations. As future siblings activate (billing, revenue_cycle, prior_auth, payer integrations), the same English word will surface in operationally distinct contexts. To prevent future contributors from extending `case_denied_v1` across that ontology seam, this commit **binds `case_denied_v1` to provider clinical-decision-only meaning** in three places: this preflight, the rule's rationale_note, the template's rationale_note, and the producer-site dispatch block comment.

**`case_denied_v1` IS:** a provider-issued denial of a clinical case request (treatment_item or care_program), where a licensed clinician reviewed the request and decided no.

**`case_denied_v1` is NOT (and MUST NOT be extended to cover):**

| Future event | Likely sibling-domain home | Discriminant |
|---|---|---|
| Payer adjudication / claim denial | `revenue_cycle/` (when activated) | `claim_event_kind` or similar |
| Prior authorization denial | `authorization_lifecycle/` (when activated) | `auth_event_kind` |
| Refill denial by provider | `pharmacy_lifecycle/` | `pharmacy_event_kind` (e.g., `'refill_denied_by_provider'` already reserved) |
| Refill denial by pharmacy / insurance | `pharmacy_lifecycle/` or `revenue_cycle/` | resolved when that producer activates |
| Identity-verification denial | `account_lifecycle/` | `account_event_kind` (when needed) |
| Capability/permission denial (audit) | already on `lib/auth/capabilities.ts`, NOT a notification | n/a |

**Architectural implication:** the `case_denied_v1` Rule's payload uses `case_kind` discriminant (`'treatment_item' | 'care_program'`), bound to `clinical_decision/` per scaffold lint check 5. Future "denied" events MUST get their own discriminant + sibling folder. Reusing `case_kind` for a payer-denial event would be the canonization-of-wrong-ontology error that radar zone 27 exists to prevent.

This binding lives in:
- this preflight (this section)
- `repo/rules/clinical_decision/case_denied_v1.ts` rationale_note (pinned reference)
- `repo/templates/clinical_decision/case_denied_v1.ts` rationale_note (pinned reference)
- `lib/internal/patient-case/impl.ts` producer-site dispatch block comment (pull-request-review-time anchor)

---

## 2. Radar zone status (small note, doesn't block c9)

- **Zone 7 (Legacy v0 notification survival, tier_1):** **CLOSES with c9.** The survival risk is exactly the migration discipline — the last legacy case migrates and the legacy files delete in the same PR. Update radar to reference c9 as the closing event in a future radar refresh; not a c9 blocker.
- **Zone 27 (Sibling-discriminant leak):** STAYS OPEN as forward-looking watch zone. c8's pharmacy_lifecycle activation reinforced the pattern; the zone stays as the canonical anti-drift signal for siblings 6+ (scheduling, labs, provider tasking, communications, retail, marketing, billing, revenue_cycle, authorization_lifecycle). The §1A anti-overload binding above explicitly references zone 27.

---

## 3. Architectural commitment

Same architectural shape as `awaiting_clinical_review_v1` (tier_1 / system / operational / dual-producer / pathway-agnostic). Differences are wording + the trigger event name + the audit action name.

```
Producer surfaces                                Rule executor                 Outputs
-----------------                                --------------                -------
updateTreatmentItemStatus(denied) ─┐
                                   ├─dispatchRuleTriggerEvent(patient.case_denied)
updateCareProgramStatus(denied) ───┘
                                                 │
                                                 ▼
                                        rule.clinical_decision.case_denied_v1
                                                 │
                                                 ├─enqueueOutboundJob(email)
                                                 ├─enqueueOutboundJob(sms)
                                                 └─insertAuditEvent(rule.fired.clinical_decision.case_denied_v1)
```

Per ADR §7.6 binding: `action.kind: 'notify'`. Falls within the commit-5 approved set.

---

## 4. File-by-file change set

### NEW (4)

- `repo/rules/clinical_decision/case_denied_v1.ts` — typed Rule. tier_1 / system / operational / dual-producer.
- `repo/templates/clinical_decision/case_denied_v1.ts` — typed Template. tier_1 / `transactional_critical: false`.
- `lib/templates/render/case-denied.ts` — render module byte-equivalent to legacy.
- `scripts/test-case-denied-parity.ts` — live-DB parity test. 5 scenarios.

### MODIFIED (7)

- `lib/events/rule-trigger-event-types.ts` — add `'patient.case_denied'` with `PatientCaseDeniedPayload`.
- `lib/events/audit-actions.ts` — add `'rule.fired.clinical_decision.case_denied_v1'`.
- `repo/rules/index.ts` + `repo/templates/index.ts` — register 11th.
- `lib/rules/runtime/dispatcher.ts` — union variant + payload interface + executor function.
- `lib/internal/patient-case/impl.ts` — 9th dispatch block in `updateTreatmentItemStatus` + 5th in `updateCareProgramStatus`. Both gated to glp1_primary / weight_loss + `nextStatus === 'denied'`.
- `scripts/lint-event-types.ts` — add parity test to `EXEMPT_PATHS`.
- `scripts/test-rules-templates-scaffold.ts` — count `>= 11`; anchor block.

### LEGACY DELETIONS (DELETE-AFTER-PARITY closure — same PR)

- `lib/workflows/notificationRules.ts` — **DELETE entirely.**
- `lib/notifications/patientMessages.ts` — **DELETE entirely.**

### LEGACY SHRINKS (NOT deletions)

- `lib/workflows/onPatientWorkflowEvent.ts` — **SHRINK to chart.ai_review-only.** Remove notification imports + fan-out blocks; keep only the `enqueueChartAiReview` call.
- `lib/workflows/types.ts` — **STAYS.** Optional dead-field shed deferred.

### TEST FORM CLEANUP

- `app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx` — verify no remaining server-action callers; if standalone, **DELETE**. If wired into a parent route's UI, leave for a focused cleanup PR.

---

## 5. Wording capture (anchored)

**Email** (verbatim from legacy `case 'case_denied'`):
- Subject: `'Update on your ${brand_short_label} visit'` (typed slot, NOT hardcoded "MAIN")
- Preview: `'There is an update on your visit request.'`
- Eyebrow: `'Clinical decision'`
- Heading: `'Your visit has an update'`
- Intro: `'There is an update on your visit request.'`
- Detail: `'Please review details and next steps in your dashboard.'`

**SMS:** `${brand_short_label}: Update on your visit. ${dashboard_url}`

For brands.slug='main' rendered output is byte-identical to legacy.

---

## 6. Risk + mitigations

| Risk | Mitigation |
|---|---|
| `onPatientWorkflowEvent.ts` shrink breaks `enqueueChartAiReview` callers | External function signature stays the same; internal logic shrinks. Verification §7 sanity-greps callers. |
| Form deletion breaks staff workflow | Confirm form has no remaining server-action callers before deletion. If wired, leave for focused cleanup PR. |
| Future contributor extends `case_denied_v1` to cover payer/prior-auth/etc denials | §1A anti-overload binding lives in 4 places (preflight, rule rationale, template rationale, producer comment). Scaffold lint check 5 enforces `case_kind` → `clinical_decision/` placement. |
| Wording drift if email/SMS bodies edited without snapshot tests | Parity test captures legacy bodies; deviations fail. |

---

## 7. Verification plan (in order)

1. `npm run typecheck`
2. `npm run lint`
3. `npx tsx scripts/lint-rules-templates-scaffold.ts` — registry lint clean (count = 11; check 5 still passes)
4. `npx tsx scripts/lint-event-types.ts`
5. `npx tsx scripts/test-rules-templates-scaffold.ts`
6. `npx tsx scripts/test-case-denied-parity.ts` — live-DB parity passes
7. Sanity grep: zero remaining imports of `lib/workflows/notificationRules` or `lib/notifications/patientMessages`
8. Sanity diff: confirm `enqueueChartAiReview` still fires from one of the four caller sites

---

## 8. What is explicitly NOT in scope (deferred)

- `onPatientWorkflowEvent.ts` rename (cosmetic; future PR)
- `PatientWorkflowEvent` field cleanup (optional shed; defer)
- Helper extraction for `updateTreatmentItemStatus` dispatch fan-out (per user: assess AFTER c9, not before)
- First per-rule in_app activation (separate commit)
- 4H-send-policy phase pivot (own phase; not c9)
- Provider workspace UI to display denial reason (no data exists today)

---

## 9. Sibling-domain activation counter (final state after c9)

- `account_lifecycle/` (1 rule)
- `billing_subscription/` (1 rule)
- `clinical_decision/` (**6 rules** — case_approved, awaiting_clinical_review, active_care, followup_due, followup_needed, **case_denied** NEW)
- `fulfillment_lifecycle/` (1 rule)
- `pharmacy_lifecycle/` (2 rules)

**11 rules + 11 templates total.** Five sibling-domain folders active. The 4H-templates-discipline series concludes; legacy v0 notifications fully retired.

---

## 10. Post-c9 state

- 11 of 11 baseline cases migrated.
- 2 legacy notification files deleted.
- 1 legacy file shrunk to chart.ai_review-only.
- DELETE-AFTER-PARITY discipline (system-map §1Q.12) achieves closure.
- Convergence-via-wiring trial remains COMPLETE per ADR §7.7.

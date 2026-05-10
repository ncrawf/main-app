# HANDOFF — 2026-05-09 (Phase 4H-templates-discipline commit 2 checkpoint)

**Read this when picking up work after Phase 4H-templates-discipline commit 2.** Single-commit architectural checkpoint, not a phase-completion handoff. The case_approved cutover is the third typed Rule + Template parity migration overall and the FIRST clinical + provider-authority migration.

This document preserves the architectural assessment that immediately followed the commit so future contributors do not re-derive it from the diff. No new implementation is proposed here.

---

## 1. Status

Phase 4H-templates-discipline commit 2 (case_approved migration) shipped at `82d8e5e` and is on `origin/main`. Built directly on the Phase 4H-disclosure-policy commit-2 runtime (`ec0f265`) and the intake_submitted commit-1 producer pattern. All three pre-execution refinements baked in:

1. Producer-site pause threshold tightened from 5+ to ">2" (we have exactly 2 sites; proceeded).
2. Parity reframed as governed behavioral equivalence per ADR §7.5 (not byte-level dogma).
3. `transactional_critical: false` with explicit justification (cadence-bypass NOT defensible for case approval; see §3 below).

This is **propagation commit #1** of the "2-3 reinforcements before convergence-via-wiring becomes doctrine" trial named in the c2 disclosure-policy checkpoint §3.

---

## 2. What materially changed

| Surface | Change |
|---|---|
| New typed Rule [`repo/rules/clinical_decision/case_approved_v1.ts`](../../repo/rules/clinical_decision/case_approved_v1.ts) | First `domain: 'clinical_decision'` Rule. `authority_floor: 'provider'`. `recall_severity: 'clinical_significant'`. `pathway_scope` undefined (rule fires regardless of pathway; producer-site filters gate to glp1_primary / weight_loss). `intended_privacy_exposure_level: 2` (low_context_phi). |
| New typed Template [`repo/templates/clinical_decision/case_approved_v1.ts`](../../repo/templates/clinical_decision/case_approved_v1.ts) | First `message_intent: 'clinical'` Template. `privacy_exposure_level: 2`. `transactional_critical: false` (binding per §3 below). `outside_secure_render_strategy: 'mention_brand_only'`. |
| New render module [`lib/templates/render/case-approved.ts`](../../lib/templates/render/case-approved.ts) | Third render module mirroring payment-received + intake-submitted shape. Wording verbatim from legacy (already tier_2 compliant). |
| New typed trigger event in [`lib/events/rule-trigger-event-types.ts`](../../lib/events/rule-trigger-event-types.ts) | `'patient.case_approved'` added to `RULE_TRIGGER_EVENT_TYPES`. |
| New typed audit action in [`lib/events/audit-actions.ts`](../../lib/events/audit-actions.ts) | `'rule.fired.clinical_decision.case_approved_v1'` added to `RULE_AND_NOTIFICATION_AUDIT_ACTIONS` (alphabetical position; sort lint passes). |
| Hardcoded executor in [`lib/rules/runtime/dispatcher.ts`](../../lib/rules/runtime/dispatcher.ts) | Third hardcoded `executeCaseApprovedRule` branch. NO generalization (per ChatGPT pre-execution constraint #1). `RuleTriggerEvent` discriminated union extended with `'patient.case_approved'` variant + `PatientCaseApprovedPayload` interface (carries `patient_id` + `case_kind` + `case_id` + `approval_audit_event_id`). |
| Producer wiring in [`lib/internal/patient-case/impl.ts`](../../lib/internal/patient-case/impl.ts) | TWO sites wired: `updateTreatmentItemStatus` (gated to `treatment_key === 'glp1_primary'`) + `updateCareProgramStatus` (gated to `program_type === 'weight_loss'`). Both reorder so the canonical `*.status_changed` `insertAuditEvent` happens BEFORE the `dispatchRuleTriggerEvent` call, capturing the audit_event_id as the per-transition idempotency anchor. |
| DELETE-AFTER-PARITY at [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) + [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) + [`app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx`](../../app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx) | `'case_approved'` removed from `NotificationTemplateKey` union + `PATIENT_NOTIFY_BY_STATUS` map + email body switch + SMS preview switch + admin `TEMPLATE_OPTIONS`. The legacy `onPatientWorkflowEvent` hook stays for the 7 unmigrated cases + chart.ai_review side effect. |
| Lint exempt path | `lib/internal/patient-case/impl.ts` + `scripts/test-case-approved-parity.ts` added to `EXEMPT_PATHS` in `[scripts/lint-event-types.ts](../../scripts/lint-event-types.ts)` for the same RuleTriggerEventType vs patient_timeline_events.event_type false-positive class as commits 5 + intake-submitted commit 1. |
| Scaffold test bumped at `[scripts/test-rules-templates-scaffold.ts](../../scripts/test-rules-templates-scaffold.ts)` | Count assertions ≥3 rules + ≥3 templates; new anchor + structural assertions for `case_approved_v1` (`authority_floor=provider`, `recall_severity=clinical_significant`, `message_intent=clinical`, `intended_privacy_exposure_level=2`, `pathway_scope` undefined, `transactional_critical=false`). |
| New parity test [`scripts/test-case-approved-parity.ts`](../../scripts/test-case-approved-parity.ts) | 53 assertions across 5 scenarios (production fires, synthetic suppressed by env gate, idempotent replay, legacy non-firing, governed wording equivalence). Passes on first run. |

NO migrations. NO new SECURITY DEFINER. NO schema changes. NO ADR. NO system map amendment.

---

## 3. Architectural pattern reinforced

Three structural firsts shipping live, plus a separated axis:

**First clinical authority Rule.** `domain: 'clinical_decision'` + `authority_floor: 'provider'` + `recall_severity: 'clinical_significant'` ship as live values for the first time. The existing two rules (`payment_received`, `intake_submitted`) are system-authority. case_approved is the first rule that carries real provider authority in metadata — even though the dispatcher does not enforce `authority_floor` structurally yet (deferred to 4H-rules-runtime).

**First clinical message_intent Template.** `message_intent: 'clinical'` ships for the first time. Drives consent path lookup at the disclosure-policy gate per Section 1Q.17. Tier_2 outside-secure does not exercise pathway_sensitivity clamps, but the clinical intent is now part of the action-template alignment check.

**The cadence-bypass-vs-clinical-authority axis separation.** Pre-execution refinement #3 surfaced a real architectural conflation: `transactional_critical: true` was almost set automatically because the comm "feels important," but the flag is specifically a CADENCE-BYPASS flag (bypasses safety-window + marketing-exclusion suppression). Clinical authority is a separate axis, carried by `authority_floor` + `recall_severity` + `message_intent`. Setting `transactional_critical: true` would have forced case_approved through future safety-window suppression even when the safety window is the right thing to honor (e.g., post-approval adverse event flagged before the patient sees the notification). The decision: **clinical authority does NOT automatically imply cadence-bypass.** This distinction will recur on every future clinical comm migration.

This is propagation commit #1 of the "2-3 reinforcements before convergence-via-wiring becomes doctrine" trial. The wiring framing holds for this commit too — no new architectural decisions invented; existing primitives composed. The Rule + Template + render + executor + producer-wiring shape is identical to the prior two migrations; only the semantic values changed.

---

## 4. What became unblocked

Three things, all incremental:

- **The cutover pattern is now demonstrably repeatable across authority types.** Two system-authority migrations (`payment_received` billing, `intake_submitted` account) plus one provider-authority migration (`case_approved` clinical) in identical structural shape. The pattern works regardless of authority floor.
- **Future clinical comm migrations inherit the cadence-bypass-vs-authority distinction.** Each next clinical migration (`case_denied`, dose adjusted, lab results ready, provider replied) can read this checkpoint to know that `transactional_critical` is decided on cadence-bypass grounds, not authority grounds. Saves re-derivation on every future clinical comm.
- **Producer-site discipline survives in practice.** 2 producer sites at the guardrail threshold; the dispatcher was NOT generalized to compensate. Future migrations can lean on the same threshold without ambiguity. The lint catches new producer sites at PR time via the `onPatientWorkflowEvent` baseline check.

---

## 5. Invariants preserved

| Invariant | Confirmation |
|---|---|
| Side-effect-bounded rule runtime (ADR §7.6) | Third hardcoded executor branch; import allowlist unchanged; no new orchestrator boundary |
| Producer-site discipline | 2 sites at threshold (≤2 = OK per refinement #1); no dispatcher generalization |
| DELETE-AFTER-PARITY discipline | Anti-extension lint reports `8 cases (baseline 11; 3 migrated + deleted: payment_received, intake_submitted, case_approved)` |
| Cross-org safety + idempotency + atomic state-transition + audit | Unchanged; `enqueue_outbound_job` SECURITY DEFINER still owns these |
| Typed audit-action vocabulary | Unchanged shape; one new entry registered in alphabetical position |
| Existing migrated rules unchanged | `test-payment-received-parity` 53/53 + `test-intake-submitted-parity` 48/48 byte-level wording assertions stayed green |
| Disclosure-policy gate untouched | `test-disclosure-policy-live` 26/26 |
| Pathway sensitivity wiring untouched | `test-pathway-sensitivity-propagation-live` 6/6 |
| Env gate untouched | `test-data-environment-gate-live` 28/28 |

**Verification scoreboard at HEAD:**
- Pure tests: 527/527 (8 suites — `test-rules-templates-scaffold` 37, `test-pathway-sensitivity-registry` 18, `test-disclosure-policy` 89, `test-events-registry` 29, `test-outbound-jobs-types` 116, `test-data-environment-gate` 126, `test-document-routing-matrix` 91, `test-resolve-emissions` 21).
- Live tests: 219/219 (7 suites — `test-record-intake-response` 5, `test-data-environment-gate-live` 28, `test-disclosure-policy-live` 26, `test-pathway-sensitivity-propagation-live` 6, `test-payment-received-parity` 53, `test-intake-submitted-parity` 48, **`test-case-approved-parity` 53**).
- Lints: `tsc --noEmit` + `eslint` + `lint-event-types` + `lint-rules-templates-scaffold` (4 checks) + `lint-direct-like-queries` — all green.

---

## 6. Accidental coupling / watch zones

Three named items, none dangerous, all worth preserving so future-us doesn't trip on them:

- **`domain: 'clinical_decision'` is a string today.** `RuleDomain` at [`repo/rules/types.ts`](../../repo/rules/types.ts) line 47 is the `@stub-for-4H-runtime` `string` type (Section 1Q.1's 13-value enum is not yet enforced). If Section 1Q.1 names the canonical clinical-decision bucket differently (e.g., `'care_decision'` or `'clinical_lifecycle'`), one-line edit at PR review when the enum tightens. Low-risk.

- **`authority_floor: 'provider'` is metadata-only today.** The dispatcher does NOT read `authority_floor` for any structural enforcement — no provider-actor verification, no override-capability check. Setting it correctly costs nothing and pre-positions the rule for future enforcement (e.g., when 4H-rules-runtime starts asserting that provider-authority rules require a verified provider as the actor, or when override capabilities are checked). **Naming the watch zone is the only action needed.**

- **Two producer-site wiring instead of one centralization.** `updateTreatmentItemStatus` + `updateCareProgramStatus` both call `dispatchRuleTriggerEvent` directly. This is intentional per ChatGPT constraint #1 (don't generalize the consumer to compensate for an undisciplined producer), but it does mean future case-approval mutation paths (e.g., admin override, background job, bulk import) need to wire the dispatch themselves. The lint at [`scripts/lint-rules-templates-scaffold.ts`](../../scripts/lint-rules-templates-scaffold.ts) Check 2c catches new `onPatientWorkflowEvent` callers at PR time as a proxy signal; if a new approval path is added without the typed dispatch, it surfaces at PR time.

No hidden writes. No new orchestrators bypassed. No legacy code extended.

---

## 7. Explicitly deferred seams

Mostly unchanged from the [c2 disclosure-policy checkpoint §7](HANDOFF_2026-05-08_phase_4h_disclosure_policy_c2_checkpoint.md). New deferrals introduced by this commit:

- **Structural enforcement of `authority_floor`.** The dispatcher reads but doesn't enforce. Rules with `authority_floor: 'provider'` should eventually require a verified provider as the actor (or an explicit override capability per `RuleAction.override_capability_required`). Deferred to 4H-rules-runtime.
- **Remaining 7 legacy notification cases.** `awaiting_clinical_review` (genuinely tier_1; safe wiring rehearsal candidate), `case_denied` (denial reasons brush tier_3), `rx_sent` / `shipped` / `active_care` / `followup_due` / `followup_needed` / `refill_pending` (each needs explicit send-policy pressure per the c2 disclosure-policy checkpoint §10 honest tier survey). The choice of which to migrate next is deferred to its own preflight.

Carried forward unchanged from the c2 disclosure-policy checkpoint:

- Multi-pathway max-sensitivity reducer (lint blocks dangerous combinations until it ships).
- Patient-side current-pathway resolver (for unscoped rules wanting runtime pathway resolution).
- Consent vocabulary extension (`pathway_named_outside_secure_comm` etc.) + `patient_action_items` table + consent-uplift orchestrator.
- Step 4 safety orchestration; Step 5b in-person redundancy; marketing exclusion windows; contact-info freshness.
- The in_app surface (`send_in_app` adapter; patient inbox UI).
- The first tier_3+ rule migration (now still structurally unblocked since c2 disclosure-policy commit; awaiting deliberate authoring).

---

## 8. Convergence verdict + single most important new capability

**Verdict: clean.** No new architectural decisions surfaced during execution. No ADR amendment required. No system map amendment. Both ChatGPT pre-execution refinements were correct (producer-site threshold + `transactional_critical: false`); both shipped without re-litigation.

**Single most important new capability:** the system can now ship clinical + provider-authority communications in production. The three semantic axes (`message_intent: 'clinical'`, `authority_floor: 'provider'`, `recall_severity: 'clinical_significant'`) are now live values that future clinical comm migrations inherit. Plus the explicit decision that **cadence-bypass and clinical authority are separate axes** — a distinction that will save re-derivation on every future clinical comm.

Pre-this-commit: the rules engine could ship system-authority transactional comms (billing receipts, account acks). Post: it can also ship provider-authority clinical comms, with a documented separation between the cadence-bypass axis and the clinical-authority axis.

The convergence-via-wiring observation from the c2 disclosure-policy checkpoint §3 holds for this commit as well — propagation commit #1 of the trial. Two more reinforcements before the framing crosses from observation into doctrine.

---

## Cross-references

| Document | Purpose |
|---|---|
| [`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md) | Phase 4H ADR; cutover discipline (§7.5: parity = behavioral, not byte-for-byte) + side-effect-bounded constraint (§7.6) |
| [`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md) | Binding source of truth (Section 1Q.4 Rule shape + 1Q.5 Template shape + 1Q.13 module taxonomy + 1Q.17 privacy taxonomy + 1Q.21 transactional_critical semantics) |
| [`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md) | Future drift zones |
| [`.cursor/plans/HANDOFF_2026-05-08_phase_4h_disclosure_policy_c2_checkpoint.md`](HANDOFF_2026-05-08_phase_4h_disclosure_policy_c2_checkpoint.md) | Convergence-via-wiring observation; the trial this commit is propagation #1 of |
| [`.cursor/plans/HANDOFF_2026-05-08_phase_4h_disclosure_policy_c1_checkpoint.md`](HANDOFF_2026-05-08_phase_4h_disclosure_policy_c1_checkpoint.md) | Disclosure-policy gate runtime + graduated fail-safety posture (the gate this commit's Template will eventually exercise at tier_3+) |
| [`.cursor/plans/HANDOFF_2026-05-08_phase_4h_pre_complete.md`](HANDOFF_2026-05-08_phase_4h_pre_complete.md) | Phase 4H-pre completion handoff (the foundation this commit builds on) |

---

*End of CHECKPOINT — 2026-05-09 commit `82d8e5e`. Third typed Rule + Template parity migration. First clinical + provider-authority comm in production. Cadence-bypass and clinical authority confirmed separate axes.*

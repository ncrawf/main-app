# Rules registry

> Source of truth for all governed Rule definitions per system map [Section 1Q](../../.cursor/plans/system_map_three_layers_60706286.plan.md).
>
> **Status**: scaffold only (Phase 4H-pre commit 3). The directory ships empty in this commit. The first Rule (`rule.billing.payment_received_v1`) lands in Phase 4H-pre commit 5 as the parity proof for the v0 → 1Q cutover.

## Why this directory exists

This is the home for typed Rule definitions per Section 1Q.4. Rules govern automated decision-making + communication across the platform — every patient-facing notification, every clinical decision, every operational escalation, every marketing send eventually flows through a Rule.

A Rule is **not** a feature. It is the binding contract that says: *given this triggering event, with this evidence, this is the typed action the system takes, with this audit lineage, citing this Template, against this privacy cap.*

For the architectural reasoning behind why this directory is target-first (not migrated from the legacy `lib/workflows/` code), see [`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md).

## Discipline (binding)

Per system map Section 1Q.0 invariants:

- **Inv 1 (single engine)** — there is one rules engine. Adding a second is forbidden by Inv 12. The legacy [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) is classified DELETE-AFTER-PARITY per Section 1Q.12; do not extend it.
- **Inv 2 (typed-object shape)** — every Rule is the full object shape per [`types.ts`](./types.ts) Section 1Q.4. No partial Rules. No "looks like a rule but skips evidence_refs." CI lint rejects.
- **Inv 3 (version pinning)** — every Rule firing pins `rule_id` + `rule_version`. The audit row + the `outbound_jobs` row both carry the lineage so a future replay reconstructs the firing exactly. See system map line 7300.
- **Inv 4 (action-template alignment)** — when a Rule's action is `notify` / `escalate` / `clarify`, the Template's `privacy_exposure_level` MUST NOT exceed the Rule action's `intended_privacy_exposure_level`, AND the Template's `message_intent` MUST equal the Rule action's `message_intent`. CI lint enforces at PR time AND runtime (failsafe = `notification.action_template_intent_mismatch` audit + reject).
- **Inv 5 (no inline strings at write sites)** — Rule action types like `notify`, `escalate`, `route` are typed enums per the discriminated union in [`types.ts`](./types.ts), not free-form strings. The audit `event_type` emitted by a Rule firing must come from the typed catalog at [`lib/events/audit-actions.ts`](../../lib/events/audit-actions.ts).
- **Inv 6 (CODEOWNER governance)** — every change to this directory requires the approver registered in [`.github/CODEOWNERS`](../../.github/CODEOWNERS).
- **Inv 7 (decision_outcome_reason required)** — every Rule action that produces a terminal decision (block, denial, escalation, suppression) carries a stable `decision_outcome_reason` code per Section 1K.12. The code drives downstream patient-facing copy (same code → same copy family) and `1H.7` reporting aggregations.
- **Inv 8 (recall propagation)** — every Rule declares `recall_severity` per Section 1Q.10. When a Rule version is recalled, in-flight `outbound_jobs` rows produced by that `(rule_id, rule_version)` pair are marked superseded or flagged for re-review per the recall mechanics.

## How to add a Rule (when the runtime ships in 4H-rules-runtime)

1. Pick a `rule_id` per the namespace convention: `rule.<domain>.<verb>.<concept>_v<N>` — e.g., `rule.glp1.refill_approve.pregnancy_status_freshness_v3`.
2. Author the Rule object literal in a file at `repo/rules/<domain>/<rule_id>.ts`. The object MUST satisfy the `Rule` interface at [`types.ts`](./types.ts).
3. Register the Rule in the index at [`index.ts`](./index.ts) (when the registry shape lands in 4H-rules-runtime).
4. Add a paired Template at `repo/templates/<domain>/<template_key>.ts` if the Rule action emits a patient-facing message. Templates are governed by the same discipline; see [`../templates/README.md`](../templates/README.md).
5. Add `test_fixtures` at `repo/rules/<domain>/__tests__/<rule_id>.test.ts` — Section 1Q.4 requires 5+ for `clinical_safety` domain rules and 2+ for ops/billing/operational.
6. Open a PR. CODEOWNERS will require the listed approver. CI lint will validate the Rule object shape, the action-template alignment with any referenced Template, and the audit_event_type registration in [`lib/events/audit-actions.ts`](../../lib/events/audit-actions.ts).

## Forbidden during the v0 → 1Q cutover (binding)

Per system map Section 1Q.12:

- Adding new cases to [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) `NotificationTemplateKey` is forbidden. The set is frozen at the 11 baseline cases. Each case migrates per-PR to a typed Rule + Template here, and the legacy case deletes in the same PR.
- Adding new prose templates to [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) is forbidden. Same rule.
- Calling [`lib/workflows/onPatientWorkflowEvent.ts`](../../lib/workflows/onPatientWorkflowEvent.ts) from new sites is forbidden.
- Wrapping v0 cases in adapters that look like 1Q.4 Rules but skip `evidence_refs` / `decision_outcome_reason` / `rule_version` is forbidden.

CI lint at [`scripts/lint-rules-templates-scaffold.ts`](../../scripts/lint-rules-templates-scaffold.ts) catches these violations at PR time.

## Anchor: payment_received parity (Phase 4H-pre commit 5)

The first Rule that ships here will be `rule.billing.payment_received_v1`:

- `domain: 'billing_subscription'`
- `trigger: { kind: 'event', event_type: 'commerce.checkout.session_completed' }`
- `action: { kind: 'notify', channels: ['email', 'sms'], intended_privacy_exposure_level: 1, message_intent: 'billing' }`
- `template_key: 'tmpl.billing.payment_received_v1'`
- `audit_event_type: 'rule.fired.billing.payment_received'`

The corresponding Template will be tier_1 `existence_only`, intent `billing`, `transactional_critical: true` (so cadence rules don't suppress billing-critical sends per Section 1Q.21). The legacy `payment_received` case in `lib/workflows/notificationRules.ts` + `lib/notifications/patientMessages.ts` deletes in the same PR per the cutover discipline (see ADR Section 7.5).

## Open implementation choices intentionally deferred

Per the ADR, several implementation details are NOT specified by the scaffold and will be discovered when the first Rule ships:

- `rule_version` format (semver vs date-stamped vs hash-stamped).
- The `RuleTrigger` event-bus shape (inline subscribe vs module-level registry vs file-system glob).
- The `Template` rendering DSL (Handlebars vs typed slots vs JSX-style).
- The dispatcher data structure (Map vs trie vs subscription registry).
- The `RuleAction.recall_severity` enum granularity (already drafted in 1Q.10 but final values are TBD).

These will be resolved during 4H-rules-runtime by the engineer wiring the engine, not pre-committed in scaffolding.

# Phase 4H target-first design decision record

> **Status (locked 2026-05-07)**: captures the reasoning behind the three minimal system-map amendments at [system_map](../../.cursor/plans/system_map_three_layers_60706286.plan.md) lines 123, 7298, 7300, and the new 1Q.12 block at 7817-7839 — plus the locked Phase 4H-pre scope. This is a preservation / handoff record, not a system-map rewrite. To be revisited only if a future change to Section 1Q invalidates the reasoning chain.

> **Audience**: future agents, future contributors, future-us. Read this before reopening any 4H-pre decision listed below.

---

## Provenance

**Binding artifacts (source of truth):**

- System map: [`.cursor/plans/system_map_three_layers_60706286.plan.md`](../../.cursor/plans/system_map_three_layers_60706286.plan.md) — Section 1Q (rules + templates engine; 24 sub-sections), 1H.5 / 1H.6 (audit + dashboards), 1V (governance / RTBF), system primitives addendum at top.
- Companion doc: [`.cursor/plans/data_layers_reconciliation_v1.md`](../../.cursor/plans/data_layers_reconciliation_v1.md) — Section 4 disposition table.
- Prior session handoff: [`.cursor/plans/HANDOFF_2026-05-06.md`](../../.cursor/plans/HANDOFF_2026-05-06.md) — pre-apply state.

**Code state at decision time:**

- Last commit on `main`: `9b61490` (Phase 4G — Section 1R search adapter).
- Phase 4A → 4G all shipped + applied to Supabase project `sxblfnokjtxltbhbthep`.
- Verification suite green: `scripts/test-record-intake-response.ts` (5/5), `test-resolve-emissions.ts` (21/21), `test-document-routing-matrix.ts` (91/91), `test-outbound-jobs-types.ts` (78/78), `test-events-registry.ts`, `test-search-entities.ts`, `test-intake-route.ts`.
- 4F follow-up (`d8620b1`) deleted [`lib/audit/logAuditEvent.ts`](../../lib/audit/) and migrated all ~58 audit/timeline write sites to typed helpers at [`lib/events/index.ts`](../../lib/events/index.ts).

**Pressure-test brief**: drafted in-session via `CreatePlan`. Not promoted to disk under `.cursor/plans/`. Most of its content was either re-statement of Section 1Q (no new architecture) or implementation strategy (correctly belongs in plan files, not the binding map). Selected pieces survived as: this decision record (reasoning) + the three system-map amendments (binding additions) + the locked 4H-pre commit list (this file, Section 6).

---

## 1. Context

Phase 4A through 4G shipped without architectural compromise:

| Phase | What it built | Last commit |
|---|---|---|
| 4A | `record_intake_emissions_batch` SECURITY DEFINER orchestrator + 21-target write fan-out + smoke test | `5423f56` |
| 4B-arch | 5 new system-map sections (1R/1S/1T/1U/1V) + primitives addendum + companion doc | `7047eb9` |
| 4C-pre | `orgs` + `brands` + primitives + tenancy on 19 canonical tables; cross-org rejection | `61d7c09` |
| 4C-runtime | `resolveEmissions()` write-path resolver (21/21 tests) | `3888496` |
| 4D | Section 1O artifact pipeline (canonical document routing) | `6d88b91` |
| 4E | Section 1G.3 outbound jobs reconciliation (dispatch column + 8-value status enum) | `90513e1` |
| 4F | Typed event catalog (62 audit actions + 40 timeline event types) + CI lint | `7c47e23` |
| 4F follow-up | Strict-lint helper-only migration; deleted `lib/audit/logAuditEvent.ts` | `d8620b1` |
| 4G-pre | Wired 4C-runtime resolver into `POST /api/intake/sessions/[id]/responses` | `54c97fd` |
| 4G | Section 1R search adapter (`searchEntities`, pg_trgm + GIN) | `9b61490` |

Phase 4H was framed in [HANDOFF_2026-05-06](../../.cursor/plans/HANDOFF_2026-05-06.md) as "rules + templates engine + 1V governance/RTBF runtime" — a single phase. The pressure-test pass (this session) found this was wrong on two axes:

1. **The phase is too big as one unit.** Section 1Q has 24 sub-sections; 1V adds retention + RTBF runtime. As a single phase this would be weeks of work with no natural commit boundaries, no parity proof points, and high blast radius if any one piece misbehaves.
2. **A working-but-undisciplined notification + workflow code path already exists today.** Pre-dating Section 1Q. Named here as "implicit rules engine v0":
   - [`lib/workflows/onPatientWorkflowEvent.ts`](../../lib/workflows/onPatientWorkflowEvent.ts) — in-process post-mutation hook firing patient notifications on every workflow status change.
   - [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) — static `status → template_key` map with hardcoded inline dedupe-key strings. Named "rules" but is a lookup; carries no `rule_id` / `rule_version` / `evidence_refs` / `decision_outcome_reason`.
   - [`lib/workflows/types.ts`](../../lib/workflows/types.ts) — supporting types for the v0 hook.
   - [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) — 11 inline patient-facing prose templates keyed by `NotificationTemplateKey`. Carries no `privacy_exposure_level`, no `message_intent`, no `prohibited_claims`, no `outside_secure_render_strategy`, no `required_variables` discipline. Full PHI ships via SMS by default.

The discovery shifted the pressure-test from "design 4H" to "design 4H without pretending v0 doesn't exist, without letting v0 define the target, and without freezing v0 in place."

---

## 2. Key decision

**The target architecture comes from Section 1Q (`1Q.0` invariants + `1Q.4` Rule shape + `1Q.5` Template shape + `1Q.6` 7-stage execution order + `1Q.7` rule lineage primitives + `1Q.10` recall propagation + `1Q.11` CI-lint catalog), Section 1H.5 + 1H.6, and Section 1V — NOT from `lib/workflows/`.**

Phase 4H-pre is **target-first**:

1. Lock the IDEAL Rule + Template object shape per `1Q.4` + `1Q.5`.
2. Treat the existing `lib/workflows/` + `lib/notifications/patientMessages.ts` code as parity test data (behavior to match, not architecture to extend).
3. Migrate one low-risk flow as a parity proof.
4. Delete the legacy case in the same PR once parity is green.
5. Never extend the legacy code during the cutover.

User locked this framing explicitly: *"We are building a $1B platform. Treat lib/workflows and patientMessages as legacy behavior inventory. The goal is NOT to save the old notification system. The goal is to use it as test data while building the new governed system."*

---

## 3. Legacy stance

`lib/workflows/onPatientWorkflowEvent.ts`, `lib/workflows/notificationRules.ts`, `lib/workflows/types.ts`, and `lib/notifications/patientMessages.ts` are classified **DELETE-AFTER-PARITY** per-flow.

- The 11 `NotificationTemplateKey` cases (`payment_received`, `intake_submitted`, `awaiting_clinical_review`, `case_approved`, `case_denied`, `followup_needed`, `rx_sent`, `shipped`, `active_care`, `followup_due`, `refill_pending`) migrate one-per-PR to a typed Rule + typed Template per `1Q.4` + `1Q.5`.
- Once a case migrates and parity is behaviorally green, the legacy entry deletes from `notificationRules.ts` + `patientMessages.ts` in the same PR.
- When the last case is removed, all four files delete entirely.

The binding inventory + directive lives at [system_map §1Q.12](../../.cursor/plans/system_map_three_layers_60706286.plan.md) (lines 7817-7839). This decision record is the reasoning behind that section.

**No long-tail of "we'll fix it later"**: the directive is enforceable because (a) `1Q.0` invariant 12 forbids extending v0 with new cases, and (b) the eleven-case list is small + bounded.

---

## 4. Why only three system-map amendments landed now

The pressure-test produced a long brief (target architecture restatement, primitives table, legacy disposition matrix, forbidden patterns, 4H-pre scope, 4H+ phase decomposition, appendix). Promoting all of it to the binding map would have:

- Duplicated content already in `1Q.0` through `1Q.11`.
- Locked implementation details (rule_version format, dispatcher mechanics, event-bus shape) that should be discovered during 4H-pre, not pre-committed in the binding map.
- Made an already-9657-line map even harder to maintain.

What was actually missing from the binding map — the parts that constrain code, not just describe strategy:

1. **Amendment 1 — [1Q.7 audit shape extension](../../.cursor/plans/system_map_three_layers_60706286.plan.md) (line 7300)**: the rule lineage primitives (`rule_id`, `rule_version`, `template_key`, `template_version`, `intended_privacy_exposure_level`, `message_intent`, `decision_outcome_reason`, `pathway_code`) ALSO persist on the `outbound_jobs` row when a rule firing produces a queued side effect. This is a pure consequence of `1Q.7` + `1Q.10` recall propagation, made explicit so contributors don't have to re-derive it. ~10 lines.
2. **Amendment 2 — [new Section 1Q.12](../../.cursor/plans/system_map_three_layers_60706286.plan.md) (lines 7817-7839)**: explicit inventory of the implicit engine v0 + DELETE-AFTER-PARITY directive + forbidden cutover patterns. Without this, `1Q.0` invariant 12 (consolidation discipline) is unenforceable — contributors can't tell which "rules" code is the legacy and which is the target. ~25 lines.
3. **Amendment 3 — [primitives addendum #4 clarification](../../.cursor/plans/system_map_three_layers_60706286.plan.md) (line 123)**: `outbound_jobs.status = 'suppressed_data_environment'` terminal state + `notification.dispatch_blocked_by_privacy_check` audit event with `metadata.suppression_reason = 'data_environment'`. Locks the contract before the gate ships in 4H-pre commit 2. ~6 lines.

Total addition to the binding map: ~40 lines. Each amendment makes explicit something the rest of the map already implies but does not name. They are the smallest possible change that prevents a contributor from getting it wrong.

---

## 5. Why the full brief was not promoted to the system map

~85% of the pressure-test brief was implementation strategy that should never be promoted to the binding map:

- Brief Section 1 (Target architecture restatement): re-statement of existing `1Q.0` through `1Q.11`. No new architecture.
- Brief Section 2.4 (TypeScript registry shapes): verbatim copy of `1Q.4` + `1Q.5`. Already there.
- Brief Section 3 (Legacy disposition): operational migration plan. Belongs in this decision record + the 1Q.12 inventory amendment, not the map prose.
- Brief Section 4 (Must NOT carry forward): mostly duplicates `1Q.11` CI-lint catalog. Selected items survived as the "Forbidden during the cutover" block in 1Q.12.
- Brief Section 5 (Phase 4H-pre scope): pure implementation strategy. Belongs in this decision record (Section 6 below), not the map.
- Brief Section 6 (4H+ decomposition): operational planning. Will become individual phase plans as 4H-rules-runtime / 4H-templates-discipline / 4H-send-policy / 4I-governance / 4J-multi-tenant readiness reach implementation.

This is the same principle the rest of the project follows: the binding map carries invariants; plan files carry strategy; commit messages carry execution detail. Decision records like this one carry the reasoning chain that produced the invariants.

---

## 6. The accepted 4H-pre scope (locked)

Five PR-sized commits totaling ~4-5 days of focused work. Each commit is independently shippable + verifiable.

**Commit 1 — schema migration (foundational columns)**

- Add to `outbound_jobs`: `rule_id`, `rule_version`, `template_key`, `template_version`, `intended_privacy_exposure_level`, `message_intent`, `decision_outcome_reason`, `pathway_code`.
- Extend the `outbound_jobs` status enum with `'suppressed_data_environment'` (8 → 9 values).
- Apply via the established Phase 4G migration pattern (Supabase Management API + `schema_migrations` row + verification).
- Tests + typecheck remain green. No rules or templates ship.

**Commit 2 — `data_environment` dispatch gate (highest-severity HIPAA seam)**

- `gateOutboundDispatch(row)` called before each external rail dispatch in [`lib/jobs/dispatchOutboundJob.ts`](../../lib/jobs/dispatchOutboundJob.ts).
- Non-`production` rows transition to `'suppressed_data_environment'` terminal status; emit one `notification.dispatch_blocked_by_privacy_check` audit event.
- Live-DB smoke: synthetic patient produces zero real sends.

**Commit 3 — scaffold (no logic)**

- Empty `repo/rules/` + `repo/templates/` directory trees.
- READMEs that lock 1Q discipline (no inline strings; typed object shape mandatory; CODEOWNERS gate).
- Rule + Template TS interface stubs (verbatim from `1Q.4` + `1Q.5`).
- CI lint that fails any PR adding files to those directories without a CODEOWNERS approver.
- **No rules or templates ship in this commit.**

**Commit 4 — system-map amendments (LANDED in this session before commit 1)**

- The three amendments described in Section 4 above. Already in `main` as part of the run that produced this decision record.

**Commit 5 — `payment_received` parity migration (proof)**

- **Cutover discipline applies — see [Section 7.5](#75-cutover-discipline-parity-rule--wording-diff-log) below.** Parity is behavioral equivalence at the dispatch boundary, not byte-for-byte template preservation. The migrated Template MUST satisfy the full `1Q.5` shape; legacy wording is preserved only where it already complies.
- Lowest-clinical-surface flow chosen deliberately: tier_1 `existence_only` per `1Q.17`; intent `billing`; `transactional_critical: true` so `1Q.21` cadence suppression doesn't block billing-critical sends.
- Typed Rule (`rule.billing.payment_received_v1`) + typed Template per `1Q.4` + `1Q.5`.
- Thin one-rule dispatcher stub (~50 lines; full event bus is 4H-rules-runtime).
- Stripe webhook emits typed `commerce.checkout.session_completed` event.
- Live-DB parity smoke: same Stripe trigger produces same observable outbound side effect (same `outbound_jobs` row count + same channel selection + same patient-facing arrival under the same consent state).
- PR description includes the wording diff log per Section 7.5.
- Delete legacy `payment_received` case from `lib/workflows/notificationRules.ts` + `lib/notifications/patientMessages.ts` in the same PR.

---

## 7. Explicitly forbidden drift

CI + reviewer discipline must reject any of the following during 4H-pre:

- Building the broad rules engine (`evaluateRules` walking the 7-stage pipeline). That is **4H-rules-runtime**, not 4H-pre.
- Migrating more than one notification flow in 4H-pre. **`payment_received` only.** The other ten cases migrate in subsequent phases.
- Implementing RTBF runtime. That is **Phase 4I**.
- Touching UI in 4H-pre.
- Extending [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) (any new case is a violation per `1Q.0` invariant 12).
- Adding new prose templates to [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) (violates `1Q.5` template object shape).
- New calls to `onPatientWorkflowEvent` from any site (violates the typed-event-bus pattern that replaces it in 4H-rules-runtime).
- Auto-send of AI-drafted text under any human's capability.
- Patient-facing automated send paths that bypass the template registry.
- Wrapping v0 cases in adapters that pretend to be `1Q.4` Rules without the full object shape, version pinning, evidence refs, or CI-lint discipline.
- **Rule execution that performs domain state mutations via raw writes, OR that orchestrates workflows outside an approved orchestrator-mediated path.** The approved action set extends per-phase by explicit ADR amendment; the rules engine MUST NOT become a second orchestrator. See Section 7.6 for the binding contract + the current approved set + the extension procedure.

---

## 7.5 Cutover discipline (parity rule + wording diff log)

This section is binding for every per-flow migration in the v0 → 1Q cutover: commit 5 of 4H-pre (`payment_received`) plus the subsequent migrations of the remaining ten `NotificationTemplateKey` cases in 4H-templates-discipline.

It exists because "parity proof" naively read could mean "byte-for-byte template wording match." That reading would force the new typed Template to import legacy PHI leakage, hardcoded multi-tenant strings, and untyped free-form interpolation slots from any v0 template that has them — defeating the entire reason for rebuilding. **Governed behavior wins. Parity is the boundary, not the prose.**

### Parity rule (binding)

Parity = **behavioral equivalence at the dispatch boundary**.

Parity proof for a migrated flow means: the same triggering domain event (e.g., Stripe `commerce.checkout.session_completed` for `payment_received`) produces:

- the same `outbound_jobs` row count
- the same channel selection (email vs. SMS vs. in_app, given the same patient consent + preference state)
- the same observable patient-facing arrival (the email lands; the SMS lands; the in_app push lands)

…under the same patient consent + preference state.

Parity proof does **NOT** mean preserving legacy template wording verbatim.

### Template-shape rule (binding)

Every migrated Template MUST satisfy the full [`1Q.5`](../../.cursor/plans/system_map_three_layers_60706286.plan.md) object shape, regardless of whether wording is preserved or rewritten. Required declarations on every migrated Template:

- `privacy_exposure_level` (declared, audited; `1Q.17` 6-tier taxonomy)
- `message_intent` (declared, audited; must equal `RuleAction.message_intent` at runtime per `1Q.4` action-template intent match)
- `transactional_critical` where applicable per `1Q.21` cadence rules (`payment_received` is `true`)
- `required_variables` as typed structured slots — no free-form interpolation strings (the v0 free-form `paymentSummary?: string | null` pattern is forbidden)
- `prohibited_claims` (declared floor)
- `tone_class` (declared)
- `outside_secure_render_strategy` (declared)
- `secure_view_render_strategy` (declared)
- `channels` (declared array of allowed channels)
- `ai_refinement_constraints` (declared if AI refinement is permitted)

**There is no grandfathering of v0 templates into `1Q.5` shape.** Every required field is declared explicitly or the template fails CI lint at PR time.

### Multi-tenant rule (binding)

Every migrated Template MUST source brand labels and tenant-scoped strings from typed multi-tenant primitives (`brands.label_short`, `brands.label_full`, `current_org_id()` context per Phase 4C-pre). **No hardcoded brand strings.** The legacy `MAIN:` SMS prefix in [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) is the canonical example of what must NOT be carried forward.

### Wording-preservation rule (binding)

- Where legacy wording **already satisfies** (a) the migrated rule's declared `privacy_exposure_level`, AND (b) the full `1Q.5` shape, AND (c) multi-tenant brand sourcing, AND (d) the new typed `required_variables` discipline → wording MAY be carried forward verbatim.
- Where legacy wording does any of the following → wording IS rewritten to comply:
  - exceeds the declared `privacy_exposure_level`
  - violates a declared `prohibited_claim`
  - encodes hardcoded multi-tenant assumptions (e.g., the `MAIN:` prefix)
  - relies on free-form interpolation that the new typed `required_variables` would reject

Governed behavior wins.

### Wording diff log (binding)

Each migration PR (commit 5 of 4H-pre, and each per-flow migration in 4H-templates-discipline) MUST include in its PR description a side-by-side **wording diff log** with one line of justification per change. This keeps "governed behavior wins" honest and reviewable; prevents the cutover from drifting into arbitrary rewrites under cover of the parity rule.

Format (per channel, per field):

```
Channel: email | sms | in_app | push
Field:   subject | previewText | intro | detail | sms_body | etc.
Legacy:  <verbatim from v0>
New:     <verbatim from migrated 1Q.5 Template>
Status:  unchanged | rewritten
Reason (if rewritten): <one line — privacy | structural | multi-tenant | required-variables-typing>
```

Worked example for commit 5 `payment_received` (illustrative; final wording determined at commit 5):

```
Channel: email
Field:   subject
Legacy:  "We received your payment"
New:     "We received your payment"
Status:  unchanged
Reason:  tier_1 compliant; no PHI; no brand-coupled strings

Channel: email
Field:   intro
Legacy:  "Thanks — we received your payment (199.00 USD)."
New:     "Thanks — we received your payment ({payment_amount_formatted})."
Status:  rewritten
Reason:  required-variables-typing — typed { payment_amount: number; payment_currency: ISO4217 } slot replaces v0 free-form `paymentSummary` string

Channel: sms
Field:   sms_body
Legacy:  "MAIN: Payment received. {short}"
New:     "{brand_short_label}: Payment received. {next_step_short}"
Status:  rewritten
Reason:  multi-tenant — brand_short_label sourced from brands.label_short per 4C-pre; no hardcoded "MAIN:"
```

**No exceptions.** The wording diff log requirement applies even when a migration rewrites zero strings. In that case the log lists every channel + field with `Status: unchanged` and the matching `Reason`. This proves the reviewer audited each field rather than skipping the audit on a "looks fine" intuition.

### Anti-drift purpose

Together, the parity rule + the wording diff log create a forcing function: the migrating engineer cannot ship the PR without listing every legacy wording fragment and stating, on the record, why it is preserved or rewritten. Future contributors reading the PR know exactly what survived from v0 and what was governed away. Future auditors reviewing the platform's PHI handling have the diff log as evidence of per-flow privacy-tier review.

---

## 7.6 Rule execution scope (binding — added 2026-05-08 pre-commit-5)

> **Rules may not mutate domain state directly. Rules may only produce governed actions through approved orchestrator / writer boundaries. The approved action set extends per-phase by explicit ADR amendment.**

This section was added to the ADR before Phase 4H-pre commit 5 landed in response to an architectural review. The permanent invariant prevents the rules engine from becoming a parallel write path that bypasses orchestrators and becomes a hidden second source of truth. The extensible framing acknowledges that future Rules will legitimately need to request care tasks, suppression, recall, escalation, etc. — but each new action type goes through its proper orchestrator boundary and carries rule lineage / audit, not via raw writes from rule runtime.

### Permanent invariants (binding for every Rule, every phase)

A Rule firing MUST NOT:

- **Mutate patient state via raw writes.** No UPDATE / INSERT / DELETE against `patients`, `patient_clinical_assertions`, `patient_state_observations`, `patient_consents`, `patient_addresses`, `patient_contacts`, `patient_diagnostic_reports`, `patient_lab_observations`, `patient_identity_verifications`, `patient_action_items`, or any other patient-scoped domain table from the rule runtime layer.
- **Mutate domain state via raw writes.** No UPDATE / INSERT / DELETE against `care_programs`, `treatment_items`, `treatment_orders`, `clinical_visits`, `lab_orders`, `refill_requests`, `commerce_orders`, `commerce_order_lines`, `subscription_*` tables, or any other domain table from the rule runtime layer.
- **Reconcile longitudinal state directly.** No claim-ledger writes per Section 1K.5.A. No derived-entity rewrites per Section 1J.10. Reconciliation flows through its own orchestrators when triggered by rule actions; never inline in rule execution.
- **Orchestrate workflows outside approved orchestrator boundaries.** No direct calls to `onPatientWorkflowEvent`. No manipulation of `intake_sessions` or `intake_responses` from rule runtime. No direct INSERT to `patient_timeline_events` from rule runtime (the existing dispatch-time `email_sent` / `sms_sent` writes from `lib/jobs/dispatchOutboundJob.ts` are not rule-runtime writes — they fire from the dispatcher worker after successful provider send and stay the only legitimate timeline path produced by rule-driven flows).
- **Become a second orchestrator.** Domain mutations have orchestrators (`record_intake_emissions_batch`, `route_patient_document`, `enqueue_outbound_job`, future `mark_outbound_job_suppressed_by_env`, future task / recall / escalation orchestrators). Rule runtime *requests* governed actions from those orchestrators; rule runtime does not *re-implement* them.
- **Bypass the audit trail.** Every rule firing emits a typed `rule.fired.*` audit event with `rule_id` + `rule_version` + `template_key?` + `template_version?` + `decision_outcome_reason` + `evidence_refs` per Section 1Q.7.

A Rule firing MAY:

- Evaluate the trigger event match.
- READ patient / brand / domain state, scoped to the inputs declared in `Rule.required_inputs`.
- Render typed Template output via the typed `required_variables` slots per Section 1Q.5.
- Produce **governed actions** through approved orchestrator / writer boundaries (extensible — see below).

### Currently-approved action set (Phase 4H-pre commit 5)

For commit 5, the approved orchestrator-mediated actions a Rule firing may produce are exactly two:

1. **Enqueue `outbound_jobs` rows** via the `enqueue_outbound_job` SECURITY DEFINER orchestrator (Phase 4E), wrapped by [`lib/outbound/enqueue.ts`](../../lib/outbound/enqueue.ts) `enqueueOutboundJob`. Carries full rule lineage on the row (`rule_id`, `rule_version`, `template_key`, `template_version`, `intended_privacy_exposure_level`, `message_intent`, `decision_outcome_reason`, `pathway_code`) per Phase 4H-pre commit 1 schema.
2. **Emit typed `audit_events` rows** via [`lib/events/index.ts`](../../lib/events/index.ts) `insertAuditEvent`, specifically `rule.fired.*` actions drawn from `RULE_AND_NOTIFICATION_AUDIT_ACTIONS` (Phase 4F + commit 5 catalog extension).

These two are the approved set today because they are the only orchestrator-mediated actions that Phase 4H-pre commit 5's `payment_received` parity migration requires. The dispatcher at [`lib/rules/runtime/dispatcher.ts`](../../lib/rules/runtime/dispatcher.ts) is structurally limited to these two writers via its import allowlist.

### Extension procedure (binding for future phases)

When a future Rule legitimately needs a new action type (e.g. `kind: 'route'` requires creating a `patient_action_items` row, or `kind: 'gate'` requires opening a `clinical_required` turn, or recall propagation per Section 1Q.10 requires marking in-flight `outbound_jobs` superseded), the path is:

1. **Identify or build the responsible orchestrator.** The action's domain mutation belongs in a SECURITY DEFINER function or a typed TS wrapper that ALREADY has its own audit discipline + capability gating + cross-org rejection per the orchestrator pattern. If no such orchestrator exists, build it first as a separate phase commit; do not write it as part of the rule runtime.
2. **Amend this ADR (or write a follow-up ADR)** explicitly approving the new action type for rule runtime use. The amendment names: the orchestrator's TS wrapper module path, the new RuleAction kind it serves, the audit lineage the orchestrator emits, and the failure modes.
3. **Extend the dispatcher's import allowlist** to include the new orchestrator's TS wrapper. The CI lint that statically verifies the allowlist accepts the new entry.
4. **Update the system map** invariant 13 with the extended approved-action set so future contributors find the current state in the binding document.

Examples of future-approved actions (NOT approved yet; listed to make the extension framing concrete):

- `enqueueOutboundJobSuppression` via `mark_outbound_job_suppressed_by_env` (already exists per Phase 4H-pre commit 2; adds to allowlist when first Rule needs to suppress directly rather than via the env gate).
- `createPatientActionItem` via a future task orchestrator (when `kind: 'route'` actions create patient_action_items rows).
- `markOutboundJobsRecalled` via a future recall orchestrator (when `kind: 'recall'` actions per Section 1Q.10 land).
- `openClinicalRequiredTurn` via a future clinical-routing orchestrator (when `kind: 'gate'` actions need to halt the patient case).

Each of those would arrive with its own ADR amendment, its own orchestrator implementation with its own audit discipline, and its own dispatcher allowlist extension. **What is forbidden is doing any of those via raw writes from the rule runtime layer.**

### Structural enforcement (commit 5)

The dispatcher implementation at [`lib/rules/runtime/dispatcher.ts`](../../lib/rules/runtime/dispatcher.ts) enforces the commit-5 approved set at the import level:

- The dispatcher's signature accepts a typed trigger event payload and returns `{ enqueued_outbound_job_ids: string[]; audit_event_id: string }` — no domain return values, no mutation handles.
- The dispatcher's import allowlist (commit 5 set): `lib/outbound/enqueue.ts` (the typed `enqueueOutboundJob` wrapper), `lib/events/index.ts` (typed audit insert helper), `lib/supabase/admin.ts` (read-only SELECTs against `patients` + `brands`), `lib/templates/render/`, `repo/rules/`, `repo/templates/`, `lib/events/rule-trigger-event-types.ts`. The allowlist comment in the dispatcher source enumerates this set + names what's forbidden.
- The dispatcher does NOT import from any domain-mutation directory (`lib/care/`, `lib/internal/patient-case/`, `lib/refill/`, `lib/payments/`, `lib/intake/runtime/`, `lib/workflows/`). Each owns a mutation surface that rule runtime cannot reach.
- All writes from the dispatcher flow through `enqueueOutboundJob` and `insertAuditEvent`. No raw INSERT / UPDATE / DELETE statements.

### Future enforcement (Phase 4H-rules-runtime onward)

- A CI lint at `scripts/lint-rule-runtime-imports.ts` (or equivalent) statically verifies `lib/rules/runtime/` files import only from the allowlist. The allowlist is a typed constant updated alongside ADR amendments.
- Code review discipline flags any new import in rule runtime against the denylist.
- Each new approved orchestrator-mediated action ships with a dispatcher signature extension that preserves the principle: rule runtime returns identifiers + audit event ids, never mutation handles.

The system map at Section 1Q.0 carries an aligned invariant 13 ("Rules may not mutate domain state directly; rules may only produce governed actions through approved orchestrator/writer boundaries; the approved action set extends per-phase by explicit ADR amendment") so future contributors find the binding rule both in the ADR (with reasoning + the extension procedure) and in the binding architectural document (with the invariant text).

---

## 7.7 Sibling-domain operational object layering (binding — added 2026-05-10 post-c4)

This amendment captures three architectural decisions that emerged during the Phase 4H-templates-discipline c4 (`order_shipped`) migration and the focused system-map alignment audit that preceded it. All three are now binding for every Phase 4H migration that follows.

### Context

The first three Phase 4H-templates-discipline migrations (`intake_submitted` c1, `case_approved` c2, `awaiting_clinical_review` c3) all landed in domain folders that already existed at scaffold time (`account_lifecycle/`, `clinical_decision/`). Each had a single producer surface — `lib/internal/patient-case/impl.ts` — and the wiring was mechanical.

The c4 (`shipped`) migration was the first to expose an architectural seam: the legacy notification fires from a case-shaped state machine (`treatment_items.status`) but the conceptually-correct surface is a fulfillment-shaped state machine (`treatment_orders.status`). The codebase has both, with overlapping `'shipped'` values. The c4 migration was the first to force a conscious choice: which subsystem represents "shipped" canonically, and what does that choice mean for the typed Rule registry?

The 2026-05-10 system-map alignment audit (preserved at [`.cursor/plans/audits/2026-05-10_system_map_alignment_pressure_test.md`](../../.cursor/plans/audits/2026-05-10_system_map_alignment_pressure_test.md)) and the supporting ontology analysis (preserved at [`.cursor/plans/shipped_ontology_analysis_2026-05-10.md`](../../.cursor/plans/shipped_ontology_analysis_2026-05-10.md)) examined this seam. The result: a binding doctrine inserted at the top of the system map (`## Platform operational model`) that names the platform as a patient-rooted operational healthcare system with first-class sibling operational domains (clinical record, care programs, scheduling, prescriptions, fulfillment, labs, provider tasks, communications, billing, retail, marketing) over a shared substrate. Three architectural decisions flow from that doctrine and are recorded here.

### Decision A — Operational object layering as binding doctrine (binding)

The system map's `## Platform operational model` section binds the platform's operational object layer. Concretely:

- Major operational domains are **first-class siblings under Patient and shared organizational context**. Siblings are peers; siblings are never nested under each other; siblings are never modeled as sub-shapes of any single sibling (including "case").
- **Each operational sibling owns its own payload discriminant.** `case_kind` is the clinical-decision sibling's discriminant. `order_kind` is the fulfillment sibling's discriminant. `appointment_kind` will be the scheduling sibling's discriminant when that sibling activates. Discriminants do **not** leak across sibling seams.
- **A case is one operational object among many**, not the parent ontology of the system. Reusing `case_kind` to cover orders, appointments, prescriptions, lab kits, retail purchases, or marketing journeys is the canonization-of-wrong-ontology error this doctrine binds against.
- **Substrate primitives are infrastructure that every sibling depends on.** They are NOT siblings. Adding a "domain folder for audit lineage" or "domain folder for disclosure-policy" is a category error.

The doctrine binds every section of the system map below it. Companion doc with the visualization, per-sibling conventions, and platform-grade-foundations bar table: [`docs/architecture/operational_objects_under_patient.md`](operational_objects_under_patient.md).

**Structural enforcement:** the new `[check 5] Sibling-discriminant / sibling-folder alignment` in `scripts/lint-rules-templates-scaffold.ts` (added in c4) statically verifies that any Rule referencing `case_kind` lives in `repo/rules/clinical_decision/` and any Rule referencing `order_kind` lives in `repo/rules/fulfillment_lifecycle/`. The check fails at PR time on misalignment.

**Future work:** as new operational siblings activate (scheduling, pharmacy, labs, retail, marketing), the lint adds new discriminant/folder pairs. The doctrine itself does not need amendment; only the lint table extends.

### Decision B — Producer-site transitional locality as an approved pattern (binding)

The c4 migration shipped a Rule whose runtime dispatch lives at a **legacy case-shaped producer surface** (`lib/internal/patient-case/impl.ts` `updateTreatmentItemStatus`) even though the architecturally-correct producer is the fulfillment subsystem (`lib/orders/updateFulfillment.ts`). This pattern is now an **approved transitional pattern**, not a one-off hack.

The pattern is approved when:

1. **The TYPE SYSTEM encodes the architecturally-correct sibling-domain home.** The Rule lives in the correct sibling-domain folder. The payload uses the correct discriminant. The audit_event_type uses the correct namespace. Future authors reading the registry inherit the correct pattern, not the legacy locality.
2. **The producer-site dispatch site carries an explicit transitional comment** naming (a) the legacy locality, (b) the architecturally-correct future producer, (c) the doctrine, (d) the relevant audit section, and (e) the radar zone tracking the canonization risk.
3. **The producer-site comment is duplicated in two adjacent locations:** the rule file's header comment AND the payload type's interface JSDoc. Three places total. Loss of any one is a regression.
4. **A radar zone tracks the canonization risk.** The c4 commit landed v1 pressure-test radar zone 27 (Sibling-discriminant leak / case-as-parent-ontology drift) as the parent invariant this transitional pattern is allowed to sit underneath.
5. **The deferral has a named release condition.** The c4 deferral named "broader treatment_items-vs-treatment_orders consolidation appetite" as the trigger for migrating the producer to the correct surface. Without a named condition, the transitional becomes permanent invisibly.

The pattern is **NOT approved** when any of the five disciplines is missing. Specifically: silently shipping a Rule in the wrong sibling-domain folder is forbidden (the lint catches this). Silently using `case_kind` for non-clinical-decision events is forbidden. Skipping the producer-site comment is forbidden. Skipping the radar entry is forbidden.

**Why approve transitional locality at all?** Because the alternative — refactoring producer-side wiring concurrent with each Rule cutover — would force premature treatment_items / treatment_orders consolidation, which is its own multi-week migration. The Option D synthesis (analyzed in detail in [`shipped_ontology_analysis_2026-05-10.md`](../../.cursor/plans/shipped_ontology_analysis_2026-05-10.md) §7) lets the Phase 4H cutover proceed at notification-cutover cadence while the producer-side cleanup happens at producer-cleanup cadence. The TYPE SYSTEM tells the truth about the architecture; the runtime locality is a temporary detail.

**Escape conditions (when to actually migrate the producer site):**

- The treatment_items-vs-treatment_orders consolidation lands. Producer migration is part of that work.
- A new fulfillment-shaped event needs a producer site that doesn't fit the case-shaped surface (e.g., a vendor-webhook-driven `delivered` event that has no `treatment_items` row to anchor on).
- The radar zone 27 review (triggered before the next migration that touches the orders subsystem) determines the deferral has lasted too long given accumulated migrations.
- An audit identifies a defensibility risk from the dual surface.

Until any of those triggers, the transitional locality is approved.

### Decision C — Convergence-via-wiring trial COMPLETE (binding milestone)

The Phase 4H-pre target-first decision record (this file, §1–§5) anticipated that the typed Rule + Template + render-module + producer-wiring + lint-anchors + parity-test + DELETE-AFTER-PARITY pattern would need 2–3 reinforcements before stabilizing. Each reinforcement either confirmed or contradicted the framework; contradiction would have triggered re-architecture.

After c4, **three reinforcements have shipped across three different sibling domains:**

- `case_approved` (c2) — `clinical_decision`, provider-authority, tier_2 clinical
- `awaiting_clinical_review` (c3) — `clinical_decision`, system-authority, tier_1 operational, 2-status OR producer gate (first non-trivial gate variation)
- `order_shipped` (c4) — `fulfillment_lifecycle`, system-authority, tier_2 operational (first sibling-domain expansion)

Each reinforcement confirmed the pattern. The c2 + c3 reinforcements proved the framework holds across authority floors and across producer-gate shapes. The c4 reinforcement proved the framework holds across sibling-domain expansion (the framework didn't need re-architecture to admit a new domain folder; it just needed the doctrine to make the layering explicit).

**The trial is concluded.** Future Phase 4H-templates-discipline migrations (`delivered`, `pharmacy_filled`, `retail_order_placed`, scheduling-event migrations, lab-event migrations, etc.) follow the established pattern WITHOUT further architectural reflection at the substrate layer. The ADR + system-map doctrine + companion doc + lint suite collectively encode what new authors need.

**Concretely, this means:**

- New migrations do not need a separate preflight that re-derives the architectural choices. A short preflight naming the migration's specific (a) sibling domain, (b) discriminant, (c) producer site, (d) authority-floor + recall-severity + tier survey, (e) wording diff log is sufficient.
- New migrations do not need a separate ADR amendment unless they introduce a NEW architectural pattern beyond what's documented here.
- New migrations DO still need their own per-migration handoff for state continuity (per the convention note in §10 of this ADR).

If a future migration encounters a NEW architectural seam not anticipated by this ADR + the doctrine, that migration's handoff names it explicitly, and a §7.8+ amendment to this ADR records the new pattern.

### Cross-references

| Concern | Canonical home |
|---|---|
| Binding doctrine (the platform IS) | System map `## Platform operational model` section (lines 7-25) |
| Doctrine elaboration / visualization / per-sibling conventions | [`docs/architecture/operational_objects_under_patient.md`](operational_objects_under_patient.md) |
| Why the doctrine landed when it did | [`.cursor/plans/audits/2026-05-10_system_map_alignment_pressure_test.md`](../../.cursor/plans/audits/2026-05-10_system_map_alignment_pressure_test.md) |
| Ontology seam analysis (9 questions; Option D synthesis) | [`.cursor/plans/shipped_ontology_analysis_2026-05-10.md`](../../.cursor/plans/shipped_ontology_analysis_2026-05-10.md) |
| Watch-zone for canonization-of-wrong-ontology drift | [`docs/architecture/v1_pressure_test_radar.md`](v1_pressure_test_radar.md) zone 27 |
| Structural enforcement of per-sibling discriminant rule | `scripts/lint-rules-templates-scaffold.ts` check 5 |
| C4 implementation (parity proof of decisions A + B + C) | [`.cursor/plans/HANDOFF_2026-05-10_phase_4h_templates_discipline_c4_checkpoint.md`](../../.cursor/plans/HANDOFF_2026-05-10_phase_4h_templates_discipline_c4_checkpoint.md) |

### Anti-drift purpose

Without §7.7, three risks accumulate:

1. **Decision A drift:** future authors read the system-map doctrine but lack the rationale chain (audit + ontology analysis + companion doc). They might re-litigate the case-as-parent-ontology framing without seeing why it was rejected. §7.7 consolidates the rationale into the ADR home where future-quarter readers expect to find it.
2. **Decision B drift:** transitional producer-site locality is a SUBTLE pattern that's easy to misuse. Without §7.7 codifying the five disciplines, a future author could ship a Rule in the wrong sibling-domain folder citing "the c4 commit did it too" without preserving the type-system-tells-truth invariant. §7.7 names the disciplines as binding so the pattern can't degrade silently.
3. **Decision C drift:** the trial-completion milestone is invisible to people who weren't in the c2-c3-c4 sessions. Without §7.7 marking it explicitly, future authors might believe each new migration still needs full architectural reflection (slow) OR might believe the framework is open-ended (under-disciplined). §7.7 names the trial as concluded and names the conditions under which a future migration reopens the question.

§7.7 sits in the ADR (rationale home) alongside §7.5 (cutover discipline) and §7.6 (rule execution scope) so the three Phase 4H binding patterns share one canonical reference.

---

## 7.8 Anti-overload binding pattern for ontologically overloaded English words (binding — added 2026-05-10 post-c9)

This amendment captures the architectural pattern that emerged during Phase 4H-templates-discipline c9 (`case_denied`), the FINAL legacy notification migration. Where §7.7 binds the *folder + discriminant* layer of sibling-domain separation, §7.8 binds the *English-word* layer.

### Context

The c9 migration shipped `rule.clinical_decision.case_denied_v1`. During pressure-test review, ChatGPT flagged that the English word "denied" is structurally overloaded across healthcare operations:

- **Provider clinical-decision denial** (the c9 case) — a licensed clinician denied a treatment request.
- **Payer adjudication / claim denial** — an insurance company denied a claim.
- **Prior authorization denial** — a payer refused to pre-authorize a procedure.
- **Refill denial by provider** — provider declined a refill request (slot reserved in c8 as `pharmacy_event_kind: 'refill_denied_by_provider'`).
- **Refill denial by pharmacy / insurance** — different actor, different operational seam.
- **Identity-verification denial** — IDV provider rejected a verification.
- **Capability/permission denial** — audit-only metadata for `requireCapability` failures, NOT a notification.

Each of these will eventually live in a different sibling-domain folder (`revenue_cycle/`, `authorization_lifecycle/`, `pharmacy_lifecycle/`, `account_lifecycle/`, etc.) with its own discriminant and its own audit namespace. The same word, six (or more) operational seams.

The c9 migration was at risk of accidentally claiming the word "denied" for `clinical_decision/` permanently, which would force every future denial-shaped event into a `case_kind` discriminant against the §7.7 doctrine.

`case_denied` is not a special case. The same overload pressure applies to:

- **`approved`** — clinical-decision approval, payer claim approval, prior-auth approval, refill approval by provider, refill approval by pharmacy, identity-verification approval.
- **`shipped`** — already navigated in c4 (treatment_order vs supplement_order vs lab_kit_order; resolved via the `order_kind` discriminant within `fulfillment_lifecycle/`). External overloads still possible (e.g., "shipped" used by a future logistics integration).
- **`completed`** — case completed, care program completed, treatment item completed, appointment completed, lab order completed, support ticket completed, claim completed, subscription billing cycle completed.
- **`active`** — treatment active (clinical), care program active, subscription active (billing), patient account active, provider license active, brand active.
- **`cancelled`** — case cancelled, care program cancelled, subscription cancelled, appointment cancelled, claim cancelled, refill request cancelled.
- **`paused`** — treatment paused, care program paused, subscription paused, lifecycle journey paused.
- **`pending`** — countless siblings.

Without a canonical resolution pattern, each of these will be re-litigated commit-by-commit, and at least one will leak across a sibling seam silently.

### Decision — Anti-overload binding pattern (binding for every Rule whose name uses an overloaded English word)

When a Rule's English-language identifier (rule_id slug, audit-action slug, trigger-event slug, template_key slug, or render-module name) uses a word that plausibly overloads across siblings, the migration's preflight + the migration's artifacts MUST pin the binding in **four locations**:

1. **Rule file header** — a `DENIED SEMANTIC SCOPE` (or equivalent, per the relevant word) block enumerating: (a) what THIS Rule IS bound to, and (b) what it is NOT bound to with the future sibling-domain home + future discriminant for each excluded variant.
2. **Template file header** — a parallel block referencing the Rule's binding. The Template renders the bound semantic; future overloaded variants get their own Templates.
3. **Producer-site dispatch block comment** — at the call site in the producer subsystem (e.g., `lib/internal/patient-case/impl.ts`), a brief anti-overload comment naming the bound semantic + a pointer to the Rule's header block. This is the pull-request-review-time anchor.
4. **Preflight artifact** — a "[Word] semantic scope" subsection (or §1A-style anchor) enumerating the same future-home table. The preflight is the durable git-history record.

Each location is independently durable: a future contributor reading any one of them sees the binding. The four places are a defense-in-depth layer that survives partial copy-paste, partial code review, and partial documentation drift.

**Structural enforcement:**

- The §7.7 scaffold lint check 5 (sibling-discriminant alignment) statically prevents the discriminant variant of the leak: a Rule referencing `case_kind` cannot live outside `repo/rules/clinical_decision/`. As future siblings activate (`revenue_cycle/`, `authorization_lifecycle/`, etc.), the lint table extends to bind their discriminants.
- The English-word layer of the leak is NOT structurally lintable today — there is no automated way to verify "the word 'denied' in this Rule means provider clinical-decision denial and not payer denial." The four-place pinning is the human-discipline equivalent.
- A future iteration could add a CI check that scans rule rationale_notes for the phrase `SEMANTIC SCOPE` (or equivalent marker) on rules whose names include overloaded words. NOT in scope today.

**Trigger conditions** (when a migration MUST apply this pattern):

- The Rule's name is an English word with at least one plausible future sibling-domain variant.
- The migration is the FIRST occupant of that English word in a sibling-domain folder. Subsequent occupants in OTHER sibling folders inherit the pattern reflexively (each sibling's binding lives in its own folder; collision is visible at scaffold time).
- Edge case: if a migration is shipping a Rule whose name happens NOT to overload (e.g., `intake_submitted` is unlikely to mean anything but account intake), the pattern is OPTIONAL. Apply when in doubt; the cost is a few comment blocks.

**Anti-pattern:**

- Pinning the binding in only one place (e.g., the preflight only). Single-place bindings are invisible to future authors who land in the codebase via a search for the English word.
- Pinning the binding without enumerating the future sibling-domain homes. "This is provider denial only" is necessary but not sufficient; future authors need to know where the OTHER variants will live so they don't extend this Rule.
- Pinning the binding without referencing radar zone 27 (sibling-discriminant leak). The ADR pattern + the radar zone are complementary; the ADR codifies the resolution, the radar tracks the watch.

### Cross-references

| Concern | Canonical home |
|---|---|
| Sibling-domain layering doctrine (folder + discriminant) | ADR §7.7 + system map `## Platform operational model` section |
| English-word overload resolution (this section) | ADR §7.8 |
| Watch zone for canonization-of-wrong-ontology drift | [`docs/architecture/v1_pressure_test_radar.md`](v1_pressure_test_radar.md) zone 27 |
| Structural enforcement of per-sibling discriminant rule | `scripts/lint-rules-templates-scaffold.ts` check 5 |
| First application of the pattern (parity proof) | [`.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c9_case_denied.md`](../../.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c9_case_denied.md) §1A + [`HANDOFF_2026-05-10_phase_4h_templates_discipline_c9_checkpoint.md`](../../.cursor/plans/HANDOFF_2026-05-10_phase_4h_templates_discipline_c9_checkpoint.md) |
| Earlier instance navigated implicitly (treatment_order vs supplement_order vs lab_kit_order) | [`HANDOFF_2026-05-10_phase_4h_templates_discipline_c4_checkpoint.md`](../../.cursor/plans/HANDOFF_2026-05-10_phase_4h_templates_discipline_c4_checkpoint.md) |

### Anti-drift purpose

Without §7.8, three risks accumulate as the platform expands:

1. **Word-leak drift:** future authors search for "denied" and find `case_denied_v1`, then (a) extend it to cover payer denials by adding a `denial_kind` discriminant, OR (b) copy-paste it into a `revenue_cycle/` rule that retains `case_kind`. Either erodes §7.7. §7.8 names the four-place binding so the resolution is visible from any of the four entry points.
2. **Reusable-pattern drift:** without codification, every future overloaded-word case (`approved`, `cancelled`, `completed`, `active`, `paused`) re-derives the resolution from scratch. The cost is per-commit overhead AND the risk that one of the migrations gets it wrong silently. §7.8 names the resolution as a reusable pattern so subsequent migrations apply it reflexively.
3. **Audit-defensibility drift:** post-incident review of a misrouted denial event needs to be able to ask "which Rule's binding said this was the wrong place?" The four-place pinning gives reviewers four independent attestations. Single-place bindings give reviewers nothing.

§7.8 sits in the ADR alongside §7.5 (cutover discipline), §7.6 (rule execution scope), and §7.7 (sibling-domain layering). The four sections collectively encode the binding patterns of Phase 4H. After the 4H-templates-discipline series concluded with c9, no further §7.x amendments are anticipated until 4H-send-policy or a new sibling activation surfaces a NEW pattern.

---

## 7.9 Doctrine locks DL-1 through DL-9 binding model + Section 1W as foundation primitive (binding — added 2026-05-11 post-doctrine-reconciliation)

This amendment captures the architectural decision to compile the Phase 4H doctrine that emerged across the c1-c9 series into the canonical MAIN system map as binding **Doctrine locks DL-1 through DL-9** + a new **Section 1W: Tracked clinical objects + procedure / intervention lifecycle** (foundation primitive). The doctrine had previously been drafted in `.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md` (the Foundational Architecture v2 doc) and was floating outside the canonical map.

### Context

- The 9k-line MAIN system map ([`/.cursor/plans/system_map_three_layers_60706286.plan.md`](../../.cursor/plans/system_map_three_layers_60706286.plan.md)) had no top-of-map binding doctrine before the post-c9 reconciliation. The Platform operational model paragraph (added during the shipped-seam pressure test) named the patient-rooted-siblings premise but the foundational architectural commitments (substrate-vs-operational, sibling tier, discriminant locality, producer-site transitional locality, Day 0 elite-class depth, substrate non-foreclosure, tracked-clinical-objects-as-foundation-primitive, universal flow grammar, primitive admission criteria, owned diagnostic acquisition) lived in a long-form rationale doc that did not bind.
- User reaction to that arrangement was decisive: "we're creating doctrine. then leaving it hanging outside the system map?" — captured in the agent transcript.
- ChatGPT pro confirmed the structural concern: doctrine should compile INTO the canonical map, with the long-form doc as rationale source.

### Decision

Binding architectural commitments live in MAIN as **Doctrine locks DL-1 through DL-9**. Long-form rationale lives in the foundational doc. MAIN is the operating source of truth; the foundational doc does not bind by itself.

The nine binding doctrine locks:

| Lock | Subject | Origin |
|---|---|---|
| **DL-1** | Substrate-vs-operational distinction | Re-lock from Platform operational model |
| **DL-2** | Patient-rooted siblings, no nesting under any single sibling | Re-lock from Platform operational model |
| **DL-3** | Sibling-local discriminants; no cross-sibling discriminant leakage | Re-lock + ADR §7.7 (sibling layering) + §7.8 (anti-overload) |
| **DL-4** | Producer-site transitional locality + radar tracking | Re-lock from Platform operational model + ADR §7.5 cutover discipline |
| **DL-5** | Day 0 elite-class depth for activated domains; non-foreclosure for reserved domains | NEW (foundational doc §1 v3 reframe; codified separately in §7.10) |
| **DL-6** | Substrate non-foreclosure across all dimensions | NEW (foundational doc §3 dimensional matrix; codified separately in §7.10) |
| **DL-7** | Tracked clinical objects + procedure / intervention lifecycle is a foundation primitive (with structured-first authoring discipline) | NEW (foundational doc §1.6 + §7 + §8) |
| **DL-8** | Universal flow grammar + primitive admission criteria | NEW (foundational doc §1.7 + §1.8 + §6.5 primitive-extraction grid) |
| **DL-9** | Owned diagnostic acquisition + structured result authoring | NEW (foundational doc §1.5 + §5.2 + §6.6; codified separately in §7.11) |

**Section 1W: Tracked clinical objects + procedure / intervention lifecycle** is the canonical home in MAIN for the foundation-primitive concept. It is **not** a sibling — it is foundation infrastructure referenced by every operational sibling (scheduling, charting, fulfillment, billing, communications, AI). The four-layer epistemic model (tracked clinical finding → clinical assertion atom → diagnosis entity → billing artifact), clinical identity reconciliation, anatomical anchoring, the encounter → intervention → checkout 8-layer continuity chain, structured-first authoring discipline, and recall / surveillance hooks all live here. Bound by DL-7 + DL-8 + DL-9.

### Rationale

A normal company architecture process keeps doctrine in the canonical map, not floating in a side plan. The reconciliation imported the binding locks; the foundational doc became the rationale source. The architecture relationship now reads:

```
Foundational Architecture v2 doc:
  "Why this ontology exists, what primitives are admitted, what pressure tests proved it."

MAIN system map:
  "Here is the canonical system architecture, module placement, locked doctrine, schema direction, and build order."
```

Section 1W is foundation tier (alongside system-primitives addendum + Section 1L labs + Section 1M observations + Section 1U multi-org + Section 1V retention + etc.) rather than a sibling because:

- Tracked clinical objects are referenced by every operational sibling (scheduling preloads against tracked-object state; charting renders tracked-object evidence; fulfillment derives from interventions on tracked objects; billing derives from intervention layer; communications surface tracked-object status updates; AI consumes the four-layer epistemic model).
- Modeling tracked objects inside any single sibling would force every other sibling to reach across the seam — the canonization-of-wrong-ontology error DL-3 prevents.
- The four epistemic layers (Layer 1 tracked finding ≠ Layer 2 assertion ≠ Layer 3 diagnosis code ≠ Layer 4 billing artifact) are substrate conditions for outpatient-EMR-class + Athena-lab-module-class + Shopify-class commerce simultaneously. Collapsing the layers eliminates the moat.

### Consequences

- The §11.0 crosswalk in the foundational doc maps every doctrine concept to its MAIN binding location with status (LANDED / PARTIAL / RESERVED / RESERVED IN-DOC).
- Future architectural commitments add to MAIN doctrine locks first; foundational doc updates with rationale second. This is the inverse of the original drafting order (foundational doc first, then reconciliation) and matches the way the platform now governs.
- Section 1W is the canonical home for any future `tracked_clinical_objects` / `clinical_object_aliases` / `clinical_object_interventions` / `clinical_object_evidence` / `intervention_to_billing_link` / reserved `clinical_diagnosis_entities` schema. The 11 sub-sections (1W.0 - 1W.11) are the binding spine.
- The foundational doc is no longer a sidecar. It is the rationale source for the binding locks in MAIN; future contributors read MAIN's Doctrine locks first, then consult the foundational doc when they need rationale.

### Anti-drift purpose

Without §7.9, three risks accumulate:

1. **Doctrine drift between MAIN and the foundational doc.** A future amendment to the foundational doc that does not import into MAIN binding text would re-create the sidecar problem. §7.9 names MAIN as the operating source of truth; foundational doc updates without corresponding MAIN updates are rejected by default.
2. **Section 1W being treated as just-another-section.** The Repo anchors table + Platform operational model "Foundation modules underneath the siblings" paragraph + Doctrine locks DL-7 + DL-8 collectively bind Section 1W as foundation infrastructure. Future contributors who try to nest tracked clinical objects under a sibling violate DL-2 + DL-3.
3. **Re-litigating the substrate-vs-operational distinction.** DL-1 + DL-2 + DL-3 collectively encode the distinction; ADR §7.7 + §7.8 enforce the operational rules; §7.9 binds the structural placement.

### Cross-references

| Concern | Canonical home |
|---|---|
| Binding doctrine locks DL-1 through DL-9 | [`/.cursor/plans/system_map_three_layers_60706286.plan.md`](../../.cursor/plans/system_map_three_layers_60706286.plan.md) `## Doctrine locks` section |
| Foundation primitive Section 1W | MAIN `## Section 1W` |
| Long-form rationale | [`/.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`](../../.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md) |
| Crosswalk (every doctrine concept → MAIN location → status) | Foundational doc §11.0 |
| Definition table (terminology normalization) | Foundational doc §2.1 |
| Sibling-domain layering operational rules | ADR §7.7 |
| Anti-overload binding pattern | ADR §7.8 |
| Day 0 elite-class depth (DL-5 + DL-6) | ADR §7.10 |
| Owned diagnostic acquisition (DL-9) | ADR §7.11 |
| Specialty-coverage non-foreclosure register pattern (§6.6) | ADR §7.12 |

---

## 7.10 Day 0 elite-class depth for activated domains (DL-5) + substrate non-foreclosure across all dimensions (DL-6) (binding — added 2026-05-11 post-doctrine-reconciliation)

This amendment captures the Day 0 elite-class depth commitment for activated domains and the architectural non-foreclosure commitment for reserved domains. The two commitments together replace the earlier "consumer-grade" / "lighter-than-each-best-of-breed-tool" framing that was rejected in Phase 1.5 v3 of the foundational doc.

### Context

- Earlier drafts of the foundational doc framed OMNI as "lighter than Mindbody / Shopify / Hims / ActiveCampaign / Klara / RingCentral / Athena / outpatient EMR — we'll get to those depths later." The framing was a wedge-discipline framing intended to keep scope tight, but it implicitly conceded depth at activation time.
- User pushback was decisive: "WE WANT TO BE ABLE TO SHCEULDE A PATIENT LIKE MONDBODY ON DAY 0 ... WE WANT TO BE ABLE TO HIMS INTAKE adn SHOPOIFY POS on DAY 0. THOSE ARE THE TOLLS THAT CURRENTLY EXIST IN THE MARKETPLACE> RHOAE ARE THE OTOOLS WE MUST MATCH." The "consumer-grade" / "lighter" framing eroded the moat and was rejected.
- The integration of activated domains over a single substrate IS the moat. A clinic running today on {Mindbody + Shopify + Hims-style intake + ActiveCampaign + Klara/RingCentral + Athena lab module + outpatient EMR + Stripe} should switch to OMNI on Day 0 and not lose any operational depth. They gain integration. They do not lose features.
- Reserved domains stay reserved at substrate-primitive / sibling-folder level; activation is the depth gate.

### Decision

**DL-5 (Day 0 elite-class depth for activated domains).** When a sibling domain is activated for a wedge workflow, the substrate must admit it at elite-class depth on Day 0. The named depth bars are:

| Activated domain | Day 0 depth bar (binding) |
|---|---|
| Scheduling / resource coordination | Mindbody-class (provider calendars + room/suite/equipment + multi-resource bookings + prep dependencies) |
| Commerce / retail / memberships / packages | Shopify-class (catalog, packages, memberships, point-of-sale, multi-rail settlement) |
| Intake / eligibility / structured history | Hims-class (high-grade structured clinical intake; atomization per §7 four-layer model) |
| Lifecycle marketing / engagement | ActiveCampaign-class (journeys, attribution, consent-bound sends) |
| Communications / escalation / cross-channel continuity | Klara / RingCentral-class (multi-channel, multi-endpoint, AI-assisted) |
| EMR / charting / clinical decisions | Outpatient-EMR depth (visits, notes, problem list, labs review, clinical decisions, signoffs as practiced by a medspa / peptide / HRT / longevity / derm-cosmetic / hormone clinic) |
| Diagnostic lifecycle (broad) | Athena-lab-module-class (labs, pathology, imaging, sleep studies, PFT, ECG, stress testing, urodynamics, colposcopy, EEG, OCT, audiogram, joint aspiration, and the broader specialty-test universe) |
| Billing / charge lineage | Cash-pay + subscription + package + intervention-derived charge lineage at full operational depth on Day 0 (future RCM / claims / payer / ERA / EOB / AR reserved per `revenue_cycle/` sibling — not Day 0; see §7.10 sub-section below) |
| Inventory / lot / expiry / point-of-care consumption | Full lot tracking + expiry + vendor sourcing + point-of-sale dispense on Day 0 |
| Procedures / structured interventions | Procedure episodes + intervention capture + downstream inventory / charge / note derivation per §7.6, on Day 0 for procedural-specialty wedge workflows |
| Tracked clinical objects / surveillance / recall | Longitudinal findings, recall, object identity, evidence + assertion lineage per §7 + §7.5, on Day 0 for surveillance-specialty wedge workflows |
| External-system ingest / document routing | Inbound artifacts from labs, imaging, ASC EMRs, pathology, fax, referrals, vendor systems, scanned consents — substrate primitive #16, Day 0 |
| Referrals / cross-org loop closure | Outbound referrals, inbound result return, packet handoff, status tracking — Day 0 |
| Vendor / partner coordination | First-class vendor / partner interaction primitives — Day 0 |
| Clinical coding / documentation rendering | Codes and notes as derived / rendered artifacts from structured state per §7.7 — Day 0 |
| AI orchestration over the continuity graph | Bounded-but-real AI runtime; provider authority gating; AI-as-actor with audit + capability + disclosure-policy + consent — Day 0 |

**Epic-grade hospital EMR is explicitly NOT the bar.** Out of current scope per §1.5: inpatient bed management, hospital-floor coordination, ICU monitoring, ED triage. Those would require substrate extension via §1.8 admission criteria. Outpatient and specialty depth is the Day 0 commitment; hospital depth is not.

**Activation incrementality.** Activation order across domains is sequenced operationally — not every domain activates simultaneously. But once a domain activates for the wedge, depth is not incremental. Reserved-but-not-activated domains stay at substrate-primitive / sibling-folder reservation level until their first concrete migration arrives. The §11.0 crosswalk in the foundational doc tracks LANDED / PARTIAL / RESERVED status per primitive and per sibling.

**DL-6 (substrate non-foreclosure across all dimensions).** The substrate must remain admissible across every cell of the dimensional matrix (foundational doc §3) without rewrites:

- Care-delivery model (DTC / hybrid / brick-and-mortar / multi-site / multi-state)
- Clinical shape (longitudinal pharmacotherapy / episodic procedural / surveillance / aesthetic / specialty)
- Provider topology (single / group / cross-state / multi-specialty)
- Revenue model (cash-pay / subscription / package / future claims)
- Communication ingress (chat / SMS / fax / phone / portal / external-system ingest)
- Scheduling depth (single-resource / multi-resource / equipment-gated / waitlist)
- Patient role (DTC consumer / clinic patient / member / hybrid)
- Data ingress (intake / device / lab vendor / ASC EMR / outside imaging / fax / OCR)

Future-market admissibility is **not a roadmap commitment**; it is an **architectural non-foreclosure commitment** — the substrate must not require a rewrite to admit a new dimension once operational pressure forces activation. No future market is forbidden by the doctrine; wedge focus is current discipline, not depth restriction.

### Rationale (the moat is integration, not lighter-than)

The reasoning chain for rejecting "consumer-grade" framing:

1. **Best-of-breed tools already exist** at every depth bar (Mindbody, Shopify, Hims, ActiveCampaign, Klara, RingCentral, Athena, etc.). Building a "lighter version" of each one is competing against the wrong axis.
2. **Clinics today integrate 5-10 disconnected best-of-breed tools** plus coordinator headcount duplicating manual reconciliation work that exists ONLY because the tools don't talk. The wedge clinic profile (high-margin specialty / outpatient clinic, ~$600k+/month revenue, peptide / HRT / longevity / derm-cosmetic / medspa / procedural specialty) pays $30k+/month on this fragmented stack.
3. **The substrate replaces the integration tax, not the depth.** OMNI's wedge value is "switch your 5-10 tools to OMNI on Day 0 and gain continuity, do not lose features." The continuity graph + AI orchestration runtime + universal flow grammar across every activated domain — no single best-in-class tool offers this.
4. **Reserved-but-not-activated domains are not a depth-compromise**; they are an operational-sequencing decision. Substrate non-foreclosure (DL-6) ensures the depth bar applies whenever activation arrives, not "we'll get there."

### Consequences

- Foundational doc §1 v3 + §1.5 + §3 dimensional matrix + §6.6 specialty-coverage non-foreclosure register collectively encode this commitment.
- §2.1 definition table "Activated sibling" row (post-consistency-cleanup) explicitly binds Day 0 depth: "For the wedge clinic, activated domains carry Day 0 elite-class depth per DL-5 ... Activation order across domains is sequenced operationally; once a domain activates for the wedge, depth is not incremental."
- Sibling-activation PRs must declare what depth bar they ship at; "Day 0 not yet" is not a valid answer for activated domains. The radar gains zone 31 (Day 0 depth-bar drift) to track this.
- The §6.6 specialty register (51 rows, 12 specialties) is the non-foreclosure proof for DL-6: every named specialty test/procedure shape composes from existing primitives + DL-9 acquisition session lanes without new specialty primitives.

### Anti-drift purpose

Without §7.10, three risks accumulate:

1. **Depth-bar drift.** Future contributors who didn't read §1.5 named depth bars ship shallow versions of activated domains ("we'll do real Mindbody-class scheduling later"). This is the explicit anti-pattern DL-5 forbids. Radar zone 31 watches for it.
2. **"Lighter-than" framing recurrence.** A future audit / pressure-test / pitch-deck draft that revives "lighter than each best-of-breed tool" framing erodes the moat. §7.10 records the rejection.
3. **Future-market foreclosure.** A future architectural decision that closes off a dimensional-matrix cell (e.g., embeds DTC-only assumptions in scheduling) violates DL-6. The fix is to consult §3 dimensional matrix BEFORE every architectural commitment; substrate must admit every cell.

### Cross-references

| Concern | Canonical home |
|---|---|
| Day 0 elite-class depth (DL-5) | MAIN Doctrine locks DL-5; foundational doc §1, §1.5 |
| Substrate non-foreclosure (DL-6) | MAIN Doctrine locks DL-6; foundational doc §1, §3 dimensional matrix |
| Wedge clinic profile + integration-as-moat | Foundational doc §1 |
| Activation incrementality + LANDED/PARTIAL/RESERVED status | Foundational doc §11.0 crosswalk; §2.1 definition table |
| Out-of-scope (Epic-grade hospital EMR) | Foundational doc §1.5; §12 reservation status section B |
| Day 0 depth-bar drift watch zone | [`docs/architecture/v1_pressure_test_radar.md`](v1_pressure_test_radar.md) zone 31 |
| Specialty non-foreclosure proof (§6.6 method) | ADR §7.12 |
| Owned diagnostic acquisition Day 0 implications | ADR §7.11 |

---

## 7.11 Owned diagnostic acquisition + structured result authoring (DL-9) (binding — added 2026-05-11 post-doctrine-reconciliation)

This amendment captures the architectural decision that OMNI is the **authoring system** for in-office diagnostic acquisition and procedural result documentation, not merely an importer of external PDFs. It closes a doctrine gap that surfaced after the c1-c9 series: substrate primitive #16 (external-system ingest) was being implicitly treated as the primary diagnostic-input mode, but it covers only outside-system artifacts. Owned in-office tests need a different model.

### Context

- During the c4-c9 4H-templates-discipline arc, the foundational doc reservation language for `labs_lifecycle/` (§5) named "diagnostic acquisition + interpretation" as two sub-shapes, and §5.1 procedure_episode_kind included a `diagnostic_acquisition_episode` variant — but the principle "owned tests are authored, not merely ingested" was never bound as doctrine.
- ChatGPT pressure-test surfaced the gap with concrete examples: a urology clinic doing void flow / uroflowmetry / urodynamics; a cardiology office running in-office Holter / event monitor / stress echo; a pulm clinic running PFT / DLCO / methacholine challenge; a GYN office doing colposcopy / LEEP / endometrial biopsy. None of these are substrate primitive #16 cases. They are owned in-office acquisition + interpretation workflows.
- User reaction: "we have so many docs going I cant tell whats what" + the panic that the §6.5 12-row grid was being misread as comprehensive specialty coverage when it is actually a primitive-extraction validation grid.
- Without DL-9, a future contributor reading the foundational doc could conclude "diagnostic lifecycle = ingest PDFs + interpret them," which would erode the EMR-grade depth bar (DL-5 + §7.10).

### Decision

OMNI is the **authoring system** for in-office diagnostic acquisition and procedural result documentation. **Owned tests are authored. External tests are ingested, reconciled, and interpreted. Both resolve into the same continuity graph.**

**Three producer × entry-mode lanes (plus a hybrid lane):**

| Producer | Entry mode | Example |
|---|---|---|
| Clinic performs test; OMNI authors result | Native structured template (`omni_native_authoring`) | Colonoscopy findings, sleep-study interpretation, PFT interpretation, ECG interpretation, urodynamics report, colposcopy findings, EEG read, OCT interpretation, audiogram, joint-aspiration findings, RFA procedure note, in-office Botox / filler procedure note |
| Clinic performs test; device exports artifact / data | Device / file / API feed (`in_office_device_file` / `in_office_device_feed`) | PFT machine PDF / CSV / discrete measurements; ECG waveform / report; ultrasound DICOM; endoscopy tower image / video; in-office POC analyzer values; spirometry feed; CGM device upload; Holter device download |
| External partner performs test | Substrate primitive #16 external-system ingest (`external_partner_result`) | Quest / Labcorp result; outside imaging report; outside pathology PDF; ASC procedure note; outside Holter; outside sleep study; faxed consult note; vendor webhook |
| External partner performs test; clinic interprets (hybrid) | `external_partner_result` + `omni_native_authoring` interpretive workflow | Outside MRI with clinic radiology read; outside Holter with clinic cardiology interpretation; outside sleep study with clinic sleep-medicine interpretation |

**The `diagnostic_acquisition_session` operational object** (substrate-shaped; not a sibling; not a new substrate primitive). Lifecycle: order / indication → accession / study identifier → scheduled / performed timestamp → acquisition device / source → operator / technician → raw artifact(s) → discrete measurements → structured result template → interpretation / signoff → patient communication → tracked-object update → billing / charge lineage → recall / task. Lives across `labs_lifecycle/` + `procedure_lifecycle/` + `clinical_record/`. Composes from existing primitives + DL-7 structured-first authoring.

**Output-source taxonomy (binding enum on every diagnostic / procedural result row):**

| Value | Meaning |
|---|---|
| `omni_native_authoring` | Result authored directly in OMNI structured template |
| `in_office_device_file` | Clinic-owned device exports PDF / CSV / XML / DICOM file; attached + parsed |
| `in_office_device_feed` | Clinic-owned device sends HL7 / FHIR / DICOM / API feed in real-time |
| `vendor_cloud_import` | Vendor portal / cloud produces result artifact or API feed (clinic doesn't own device, uses vendor service) |
| `external_partner_result` | Outside lab / imaging / pathology / ASC sends result via substrate primitive #16 |
| `manual_transcription` | Staff enters values from paper / PDF when no integration exists |

The taxonomy is the operational projection of the four lanes; future contributors must NOT lump these into "ingest" or "external."

**Standards admissibility (admit, not require):** the substrate must admit DICOM (imaging, endoscopy visible-light, whole-slide pathology), HL7 v2 / FHIR Observation + DiagnosticReport (discrete results from labs / ECG / spirometry feeds), and LOINC (measurement terminology) when activated. Implementation timing per DL-5 activation gate; non-foreclosure per DL-6. These are already implicit in Section 1L labs reservation in MAIN; §5.2.5 in the foundational doc names them explicitly so future contributors know the substrate is non-foreclosed against full standards alignment.

### Rationale

- **Real outpatient EMR for the wedge clinic must handle:** structured visit notes + structured procedure reports + structured diagnostic reports + discrete observations + raw artifacts + interpretations + signoffs + finding updates + recall + billing lineage + patient communication. For a c-scope clinic running OMNI, OMNI must be able to **create** the colonoscopy report, not just attach a PDF. For a cardiology office, OMNI must support the sleep-study acquisition / interpretation workflow or at least native structured interpretation over an acquired artifact. For an in-office PFT, OMNI must store the raw artifact + discrete values + interpretation + comparison to prior + tracked-pulmonary-object update + recall + communication.
- **Owned tests are authored, not merely ingested.** This single line is the binding doctrine that prevents regression to "diagnostic lifecycle = PDF storage + interpretation overlay."
- **The four-lane model + output-source taxonomy + diagnostic_acquisition_session object together compose** without inventing specialty-specific primitives. The §6.6 specialty register (51 rows, 12 specialties) demonstrates non-foreclosure across the wedge specialty universe.

### Anti-patterns explicitly rejected

DL-9 explicitly forbids the following framings; each is a regression mode:

- **"Diagnostic lifecycle = PDF storage + interpretation overlay."** Owned tests are authored, not ingested.
- **"Owned in-office tests are a sub-case of substrate primitive #16."** #16 is for **outside** systems only. Owned acquisition lives in `labs_lifecycle/` + `procedure_lifecycle/` via `diagnostic_acquisition_session` + DL-7 structured-first authoring.
- **Specialty-specific acquisition tables** (`urology_void_flow_table`, `cardiac_holter_table`, `pulm_dlco_table`, `gyn_colposcopy_table`, `ophtho_oct_table`, `ent_audiogram_table`, `pain_rfa_table`). DL-8 admission criteria reject these by default. Every shape in §6.6 composes from the existing primitive set + `diagnostic_acquisition_session`.
- **Routing all diagnostic authoring through `clinical_record/`.** `labs_lifecycle/` + `procedure_lifecycle/` own their own structured-result templates within their sibling boundaries. `clinical_record/` is a **consumer** of rendered output, not the canonical authoring sibling for diagnostic / procedural results.
- **Reducing diagnostic depth to "PDF upload + narrative interpretation."** DL-7 structured-first authoring forbids it. The structured template is canonical; the rendered note is the projection.
- **Bypassing substrate primitive #16 for inbound external artifacts.** Every outside artifact enters via #16. Side-channels (direct blob upload, ad-hoc fax handler, vendor-specific shortcut) are forbidden.

### Consequences

- Foundational doc gains §5.2 binding sub-doctrine (~110 lines: §5.2.0 binding statement + §5.2.1 three-lane table + §5.2.2 common-output taxonomy + §5.2.3 acquisition-session object spec + §5.2.4 output-source enum + §5.2.5 standards admissibility + §5.2.6 anti-patterns + §5.2.7 cross-refs).
- Foundational doc §6.6 specialty register demonstrates substrate non-foreclosure across 51 specialty test/procedure shapes spanning 12 specialty categories.
- Foundational doc §1.5 sharpened: the Athena-lab-module-class line names the three lanes explicitly + adds urology / colposcopy / EEG / OCT / audiogram / joint aspiration to the representative test universe.
- MAIN gains DL-9 binding lock + Section 1W §1W.6 step 7 cross-reference + Section 1W.9 cross-sibling consumption table updates (bind `labs_lifecycle/` + `procedure_lifecycle/` to DL-9).
- Radar zone 32 (owned-vs-external diagnostic conflation) tracks DL-9 anti-pattern violations.

### Cross-references

| Concern | Canonical home |
|---|---|
| Binding doctrine lock | MAIN Doctrine locks DL-9 |
| Long-form sub-doctrine | Foundational doc §5.2 |
| Specialty non-foreclosure register | Foundational doc §6.6 |
| Sharpened Day 0 framing | Foundational doc §1.5 |
| Section 1W cross-references | MAIN Section 1W §1W.6 step 7 + §1W.9 cross-sibling consumption table |
| Anti-overload prerequisite (the word "ingest" not allowed to overload) | ADR §7.8 |
| Watch zone (owned-vs-external conflation) | Radar zone 32 |
| Watch zone (specialty-acquisition-table proliferation) | Radar zone 29 |
| Substrate primitive #16 (external-system ingest scope) | Foundational doc §4 primitive #16 |
| Day 0 depth bar (Athena-lab-module-class) | ADR §7.10 + foundational doc §1.5 |

---

## 7.12 Specialty-coverage non-foreclosure register pattern (§6.6 method) (binding — added 2026-05-11 post-doctrine-reconciliation)

This amendment captures the architectural pattern for proving substrate non-foreclosure across the specialty universe without committing to specialty-specific implementation. The §6.6 specialty register in the foundational doc (51 rows, 12 specialties) is the canonical instance; §7.12 binds the method.

### Context

- The foundational doc §6.5 12-row primitive-extraction grid (GLP-1, HRT, peptide/longevity, isotretinoin, Botox, filler, Mohs, skin excision, colonoscopy, EGD, cardiac cath, sleep study) was being read as specialty-coverage. It is not — it stress-tests primitive sufficiency against the dimensional matrix.
- User pushback during the DL-9 / owned-diagnostic-acquisition pressure test: "i fucking rattled those off. like cardio, GI, PULM, shit. like there's 100 use cases." The honest answer was that §6.5 is a primitive-extraction validation grid, not a specialty audit. The §6.0 7-overlay list (aesthetic, derm-Mohs, plastics-rhino, GI surveillance, uro-vasectomy, pulm-BiPAP, fertility, concierge) is also representative wedge shapes, not exhaustive.
- Without an explicit specialty-coverage register, urology void flow / cardiology Holter / pulm DLCO / GYN colposcopy / endo OGTT / neuro EEG / ophtho OCT / ENT audiogram / allergy patch testing / rheum joint aspiration / wound debridement / pain RFA all read as "implicitly admitted" rather than verified.

### Decision

For every architectural claim that the substrate "admits" a class of workflows, the demonstration is a row-by-row register that maps each named workflow to its **producer lane + sub-shape + sibling + primitives consumed + "no new primitive needed" verdict**. The register is **non-foreclosure proof, NOT a roadmap commitment.**

The §6.6 instance:

- 51 rows organized by 12 specialty clusters: Urology, Cardiology, Pulmonology, GYN, Endocrine, Neurology, Ophthalmology, ENT, Allergy/Immunology, Rheumatology, Wound care, Pain management.
- Each row: specialty | test/procedure | producer lane (per DL-9 taxonomy) | sub-shape (per §5.1 procedure_episode_kind variants) | sibling (`labs_lifecycle/` / `procedure_lifecycle/` / `clinical_record/` / `clinical_finding/` / mixed) | primitives consumed (numbered references to §4) | new primitive needed? (**always NO** — that is the demonstration).
- Closing binding rejects specialty-specific primitive tables explicitly.

The register answers "what about urology void flow / cardiology Holter / pulm DLCO / GYN colposcopy / endo OGTT / neuro EEG / ophtho OCT / ENT audiogram / allergy patch testing / rheum joint aspiration / wound debridement / pain RFA" once and binds the answer: every shape composes from the existing primitive set + DL-9 acquisition session, no new primitive needed.

### Rationale

- **The test for any new specialty workflow** is "does it compose from existing primitives + DL-9 acquisition session lanes?" If yes, admit. If no, run §1.8 admission criteria — do not invent specialty-specific primitives by default.
- **Pre-emptive enumeration prevents specialty-table proliferation.** When a future contributor encounters a specialty workflow not in §6.6, they look up an analog row first, then run admission criteria, then either admit via composition or escalate to a primitive admission via the four-condition test.
- **The register is not a roadmap.** Activation depth lives in DL-5; non-foreclosure lives in DL-6. §6.6 only proves admissibility per DL-6 + DL-8.

### When to extend the register (binding method)

- **At activation time.** When a new specialty domain activates for a wedge workflow, extend §6.6 with that specialty's representative shapes BEFORE building. The register is the "what about THIS" answer; pre-emptive enumeration is cheaper than retroactive enumeration.
- **At pressure-test time.** When a contributor surfaces a specialty workflow not in §6.6, the response is to add it to §6.6 with the row template, not to debate primitive sufficiency abstractly. The row is the artifact.
- **NOT at every PR.** §6.6 is doctrine-tier; routine work does not extend it. The threshold is "is this a new specialty class with shape we have not yet shown the register admits?"

### Anti-patterns explicitly rejected

- **Letting §6.5 stand as a specialty audit.** §6.5 is a 12-row primitive-extraction validation grid, not specialty coverage. The cleanup pass (post-DL-9) added explicit "representative not exhaustive" disclaimers to both §6.0 (overlays) and §6.5 (extraction grid).
- **Treating §6.6 as a roadmap commitment.** §6.6 is non-foreclosure proof. Activation timing is unrelated; activation depth is governed by DL-5.
- **Adding specialty-specific tables when a row would suffice.** `urology_void_flow_table`, `cardiac_holter_table`, `pulm_dlco_table`, etc., are rejected by default per DL-8. The §6.6 row + DL-9 acquisition session is the model.
- **Letting the register go stale as new specialties activate.** Radar zone 30 watches for §6.6 staleness.

### Consequences

- Foundational doc gains §6.6 specialty register (51 rows).
- §6.0 + §6.5 gain "representative not exhaustive" disclaimers cross-linking §6.6.
- §11.0 crosswalk has a row mapping §6.6 to "LANDED IN-DOC — non-foreclosure demonstration, not a roadmap commitment per DL-6 + DL-8."
- Radar gains zone 29 (specialty-acquisition-table proliferation drift) + zone 30 (§6.6 staleness).

### Cross-references

| Concern | Canonical home |
|---|---|
| Specialty register | Foundational doc §6.6 |
| "Representative not exhaustive" disclaimers | Foundational doc §6.0 + §6.5 |
| Crosswalk status | Foundational doc §11.0 |
| Substrate non-foreclosure binding | MAIN Doctrine locks DL-6 |
| Universal flow grammar + admission criteria | MAIN Doctrine locks DL-8 + foundational doc §1.7 + §1.8 |
| DL-9 producer lanes (referenced by every §6.6 row) | ADR §7.11 + MAIN Doctrine locks DL-9 |
| Watch zone (specialty-table proliferation) | Radar zone 29 |
| Watch zone (§6.6 staleness) | Radar zone 30 |

---

## 8. Open implementation choices INTENTIONALLY DEFERRED

The pressure-test deliberately did NOT specify these. Each will be discovered during 4H-pre or 4H-rules-runtime implementation; once discovered, the appropriate map section gets amended (binding map follows code, not the other way around).

- **`rule_version` format.** Semver vs date-stamped vs hash-stamped. Trade-offs: comparability vs git-ops vs determinism. TBD when commit 5 (`payment_received`) runs.
- **Event-bus shape.** Inline subscribe vs module-level registry vs file-system-globbing. Commit 5 ships a 50-line one-rule dispatcher stub; the full event bus is 4H-rules-runtime.
- **Template DSL choice.** Handlebars vs string template literals vs JSX-style vs typed object with structured slots. The `1Q.5` contract says "typed `required_variables`"; the rendering mechanism is implementation-defined.
- **Dispatcher data structure.** `Map<RuleId, Rule[]>` vs trie vs topologically sorted vs subscription registry. Implementation detail, not architecture.
- **Recall propagation algorithm.** `1Q.10` defines the model (when a rule supersedes, in-flight jobs are flagged or mass-superseded); the specifics — which `audit_events` query fires, how `mass_supersede` walks queued rows — are TBD until a real recall scenario surfaces.
- **The exact mapping of "domain event" to `RuleTrigger`.** Domain events emitted by mutation orchestrators are typed (Phase 4F catalog); how they tie into `RuleTrigger` is an implementation question that surfaces during commit 5.
- **Subscription mechanism for rules.** Map vs registry vs file-glob auto-discovery. Discovered during 4H-rules-runtime.

---

## 9. What we considered and rejected

(Highest-value section for a future reader. These are the alternative paths we did NOT take, with the reason. Prevents re-litigation.)

- **"Update docs first across the board."** Rejected: most of the brief is implementation strategy that should not be promoted to the binding map. Only ~40 lines of binding additions earned promotion (Section 4 above).
- **"Implement first, reconcile after."** Rejected: schema additions to `outbound_jobs` are persistent foundational changes; the binding map should reflect them before code lands. Splitting "binding amendments" from "implementation strategy" lets us land both correctly.
- **"Migrate the existing implicit engine into 1Q discipline."** Rejected: bottom-up framing. Old code does not define the target; old code is parity test data. User locked this explicitly.
- **"Save the old notification system."** Rejected: the goal is the new governed system, not preserving v0. Migration is per-flow with mandatory deletion of the legacy case in the same PR.
- **"Build the full rules engine in 4H-pre as one phase."** Rejected: Section 1Q has 24 sub-sections, Section 1V adds RTBF; not a single phase. Decomposed into 4H-pre / 4H-rules-runtime / 4H-templates-discipline / 4H-send-policy.
- **"Promote the full pressure-test brief to the system map."** Rejected: locks implementation details prematurely; duplicates existing 1Q content; makes the map harder to maintain. Brief content is preserved as: this decision record (reasoning) + three minimal map amendments (binding additions) + 4H-pre commit list (this file Section 6).
- **"Build the rules engine before the privacy-tier system."** Rejected: templates would leak PHI to SMS by default if privacy tiers came second. Privacy-tier discipline (`intended_privacy_exposure_level`, `message_intent`, `prohibited_claims`) is part of every Template from day one (`1Q.5`).
- **"Skip the `data_environment` dispatch gate; we'll add it later."** Rejected: highest-severity HIPAA seam currently in the system. One-commit fix today; multi-week incident response if missed. Commit 2 of 4H-pre is dedicated to this.
- **"Add a second rules engine alongside v0; let v0 die naturally."** Rejected: explicitly forbidden by `1Q.0` invariant 12 (consolidation discipline). One engine. v0 is parity test data; deletes per-flow.
- **"Migrate all 11 `NotificationTemplateKey` cases in 4H-pre."** Rejected: 4H-pre is a foundation phase. Migrating all 11 cases is 4H-templates-discipline. 4H-pre proves the pattern with one case (`payment_received`).
- **"Choose a clinical-touching flow as the parity proof."** Rejected: `payment_received` chosen because it is tier_1 `existence_only`, intent `billing`, lowest clinical surface area. A clinical case could fail parity for clinical reasons unrelated to the architecture; we want the proof to test the architecture, not clinical edge cases.

---

## 10. Next action

**Phase 4H-pre commit 1 only.**

Schema migration adding the rule lineage + privacy primitive columns to `outbound_jobs` + adding `'suppressed_data_environment'` to the status enum. Apply via the established Phase 4G migration pattern. Tests + typecheck remain green. No rules or templates ship in this commit.

After commit 1 ships: commit 2 (`data_environment` dispatch gate). After commit 2: commit 3 (scaffold). After commit 3: commit 5 (parity proof — commit 4 is the system-map amendments which already landed).

---

## Convention note (for future preservation work)

This is the second preservation document in the project, after [`HANDOFF_2026-05-06.md`](../../.cursor/plans/HANDOFF_2026-05-06.md). The two formats serve different audiences:

- **HANDOFF docs** at `.cursor/plans/HANDOFF_<date>.md` — session-end / mid-flight continuity. Focus: live state, pending work, what NOT to re-litigate. Audience: the next agent picking up the same in-flight work.
- **Decision records** at `docs/architecture/<phase>_<topic>_decision_record.md` — end-of-phase or major-decision preservation. Focus: reasoning chain, considered alternatives, deferred questions, why the binding map says what it says. Audience: future-quarter readers including potential auditors and any contributor reviewing why a decision went the way it did.

Both are valid; both are cheap to write; both pay off the first time someone considers reopening a settled question. Going forward, expect a HANDOFF doc whenever a session ends mid-flight, and a decision record whenever a phase boundary is crossed with a non-obvious architectural choice.

---

*End of record. Do not edit this file when re-opening 4H-pre commit 1; this is a snapshot of the reasoning at the moment of decision. If the reasoning chain changes, write a follow-up record dated when the change happens, and link forward from this file.*

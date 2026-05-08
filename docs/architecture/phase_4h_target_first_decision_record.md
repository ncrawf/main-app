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

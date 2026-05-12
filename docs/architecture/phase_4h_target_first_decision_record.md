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

## 7.13 Consumer identity vs operational patient-relationship scoping (DL-10) (binding — added 2026-05-11 evening, post-c2 shipping)

**Decision.** Adopt **Doctrine lock DL-10**: distinguish reusable patient identity from operational patient relationships. Keep `patients` canonical as the consumer identity row within an OMNI identity namespace (deployment / org PHI boundary today). Formalize the previously-reserved Continuity Relationship primitive (foundational doc §4 primitive #19) as **`patient_relationship`** — generalized to admit 11 possible scoping dimensions (brand, clinic, practice_entity, location, specialty line, legal entity, parent org, separate deployment post-federation, referral partner, care team, endpoint / business phone line). Operational state (consents, care programs, messaging, memberships, clinical chart context, appointments, care team) attaches to the relationship layer, not blindly to the global `patient_id`. Cross-relationship and cross-namespace linking is explicit, permissioned, consent-aware, and audited.

**Context.** The decision was forced by a series of c2-adjacent design questions: (a) how messaging routes when one human engages with multiple OMNI-powered brands / clinics / specialties; (b) how OMNI's wedge clinic strategy admits future brand expansion (e.g., Cultured for women's HRT + Make for men's HRT/GLP-1 + dermatology medspa) without doctrine drift; (c) how Twilio main-line / external-line ingress identifies and links to existing identities without auto-sharing operational state; (d) how separate OMNI deployments handle future mergers; (e) the Mindbody analogy where one consumer identity spans many businesses but each business owns its own operational world. The existing substrate already named the dimensional axis (foundational doc §3 "Identity scope: single org · multi-brand within org · multi-org with shared patient · cross-org referral with packet handoff") and reserved primitive #19 (Continuity Relationship) but had not bound the **operational response** to those dimensions. c2's chat substrate shipped on 2026-05-11 PM using `(patient_id, care_program_id)` scoping; the question "what about Brand B?" couldn't be answered without a binding doctrine layer.

**Rationale.** The four-layer object model (external contact identity → `patients` consumer identity → `patient_relationship` → care context) preserves existing `patient_id` semantics across every operational table in the substrate (zero migration cost today) while admitting the Mindbody-style multi-brand / multi-clinic / consumer-marketplace shapes the wedge clinic strategy needs. Brand is one of N scoping dimensions, not the only one — the relationship-boundary admission guardrail (§7.13.4 in foundational doc) ensures the boundary list doesn't over-generate relationship rows (endpoint, care team, location are *possible* boundaries, not automatic). Section 1U.3's brand_id pivot graduates `brand_id` from marketing-only to operational boundary when (and only when) the brand owns distinct consents / care programs / messaging / memberships / clinical context / staff access. Section 1J's "single canonical `patients` row per person" scope is clarified as per-namespace (cross-namespace matching creates explicit federation / linking records). The $500M-state non-foreclosure clause (mirrors DL-6 pattern) commits the substrate to admit 8 deployment shapes without replatforming. The two extremes DL-10 rejects — global-auto-share-everywhere (Epic-enterprise interpretation) and hard-silos-no-shared-identity (per-brand `patients` rows) — are both anti-patterns; the winning middle is *shared identity substrate, separate operational relationships*.

**Alternatives considered.**

| Alternative | Why it was rejected |
|---|---|
| **Mapping A: redefine `patients` as the per-brand relationship row + add new `person_identity` layer above it.** Closer to a literal Mindbody implementation. | Rejected. Every existing `patient_id` reference (in `patient_timeline_events`, `audit_events`, `messages`, `outbound_jobs`, `care_programs`, `treatment_items`, `clinical_visits`, `lab_orders`, `refill_requests`, `commerce_orders`, `patient_inbox_messages`, identity verification, duplicate detection, documents, audit/read logs, portal access, commerce surfaces) would become ambiguous: does this mean the human or the brand relationship? Weeks of doctrine drift for marginal conceptual purity. The current spine treats `patients.id` as the universal handle (per primitive #5 + Section 1J + Section 1U); redefining it now is unjustified churn. |
| **Mapping C: completely new top-level layer (`person` table) + new `patient_relationship` + deprecate `patients`.** Most ambitious. | Rejected for the same reasons as Mapping A, amplified: triple substrate churn (new top layer + new relationship layer + deprecation of existing). No commensurate benefit over Mapping B. |
| **Naming the primitive `patient_brand_relationship` instead of `patient_relationship`.** Closer to the immediate Mindbody analogy. | Rejected. Brand is one of 11 possible scoping dimensions. Hardcoding "brand" in the primitive name forecloses clinic / practice_entity / location / specialty / external-partner / endpoint scoping. The future-pain of renaming this primitive once a non-brand boundary surfaces (which will happen — see the 8-shape matrix) is much larger than the cost of naming it correctly now. Radar zone 36 watches for this anti-pattern. |
| **Hard silos per brand (Extreme 2): mint a separate `patients` row for each brand the human engages with.** Avoids the auto-share risk. | Rejected. Loses duplicate detection, merger support, consumer-marketplace strategy, cross-brand risk / gaming detection, and the Mindbody-style convenience of identity reuse. The dimensional matrix (§3) explicitly admits "multi-brand within org" and "multi-org with shared patient"; minting separate `patients` rows per brand forecloses both. Radar zone 37 watches for this anti-pattern. |
| **Global-auto-share-everywhere (Extreme 1): one global patient account where clinical / operational state propagates across all relationships on identity-claim match.** Closer to Epic-enterprise interpretation. | Rejected. The Epic enterprise interpretation works for hospital systems where one legal entity governs all care; it is the wrong shape when an OMNI deployment hosts multiple distinct legal / brand / clinic / specialty contexts. Auto-share of consents, clinical chart, messaging, or memberships across brand relationships is clinically dangerous, legally untenable, and violates the consent / privacy posture. Radar zone 35 watches for this anti-pattern. |
| **Build cross-deployment federation now.** Tempting given future multi-OMNI-deployment shapes. | Rejected as out-of-scope for the doctrine landing. DL-10 commits the substrate to **admit** cross-deployment federation via the identity-namespace abstraction; the actual federation mechanism (matching algorithm, consent capture, merger workflow, audit shape) is future work. Premature design without a real consumer would canonize wrong shapes. |

**Consequences.**

- **c2 chat substrate** stays as shipped. Today each brand is 1:1 with one care program; the `(patient_id, care_program_id)` scoping on `messages` happens to be relationship-equivalent. Future migrations may add `patient_relationship_id` to operational tables when the substrate landing happens.
- **c3 inbox UI** is unaffected. `patient_inbox_messages` is c1 substrate; the UI lands on identity-scoped data which is fine for now.
- **c4 (`patient_action_items` substrate build)** inherits relationship-aware obligations. The c4 preflight must decide whether action items are identity-scoped or relationship-scoped (and may answer "both" depending on action item type — provider_message is relationship-scoped, identity_verification_required is identity-scoped).
- **External-line preflight (forthcoming)** must start from the external contact identity layer (§7.13.2 layer 1) and link up through the namespace + relationship layers. Topology doc §11 is updated to reflect DL-10's vocabulary.
- **Provider mirror parallel track** consuming the per-staff `last_read_message_id` pointer must be relationship-aware when building queue surfaces.
- **Future federation work** is enabled by the namespace abstraction. Substrate migration for `patient_relationship` table happens when the first sibling activation drives it (likely external-line preflight or first explicit multi-brand activation).
- **All seven 4H-templates-discipline rules** that ship today continue to work unchanged. They write to `outbound_jobs` with `patient_id` lineage; they will be retrofit to relationship-scoping when the substrate migration lands.

**What DL-10 explicitly does NOT decide.**

- Exact `patient_relationship` schema (column list + indexes + RLS policies). Future migration.
- Identity-confidence scoring algorithm for cross-namespace matching. Future federation architecture.
- Merger UI shapes. Future product work.
- Consumer-marketplace portal surface design. Future product work.
- Specific FK retrofit plan for existing operational tables (`messages.patient_relationship_id`, `care_programs.patient_relationship_id`, etc.). Future migration when first sibling activation drives it.
- Cross-deployment federation mechanism. Reserved as non-foreclosure.

**Cross-links.**

| Concern | Reference |
|---|---|
| Binding doctrine lock | MAIN DL-10 |
| Identity-namespace amendment | MAIN §1J intro (amended per DL-10) |
| Brand_id graduation amendment | MAIN §1U.3 (amended per DL-10) |
| Long-form rationale | Foundational doc §7.13 |
| `patient_relationship` primitive | Foundational doc §4 primitive #19 (formalized per DL-10) |
| Dimensional matrix response | Foundational doc §3 identity-scope row |
| Crosswalk status | Foundational doc §11.0 |
| Watch zones | Radar zones 34 (identity-collapse), 35 (auto-share / Extreme 1), 36 (brand-hardcoded), 37 (hard-silo / Extreme 2) |
| Topology spine | [`docs/architecture/communications_topology.md`](communications_topology.md) §11 (external-line architecture references DL-10) |
| Closing handoff | [`.cursor/plans/HANDOFF_2026-05-11_phase_4h_identity_relationship_doctrine.md`](../../.cursor/plans/HANDOFF_2026-05-11_phase_4h_identity_relationship_doctrine.md) |

---

## 7.14 Internal team collaboration messaging (DL-11) (binding — added 2026-05-11 late evening, post-DL-10 shipping)

**Decision.** Adopt **Doctrine lock DL-11**: bind three architecturally distinct messaging surfaces — (1) patient-facing chat (`messages` substrate; c2 shipped commit `8f02bc0`); (2) external-line / pre-account communications (future preflight); (3) internal team collaboration (new sibling #19 `internal_collaboration/`). Formalize internal team collaboration as the third surface with its own substrate parallel to c2 (NOT a reuse of `messages` with a `staff_internal` thread type). Supersede the prior §1G.8.8 "reuse messages — no new product" framing. Admit three thread shapes (`ad_hoc`, `persistent_group`, `direct_message`) including patient-less threads as first-class. Make object attachment first-class and multi-object via typed `internal_thread_object_links` child table. Bind mention notification semantics: mentions emit `outbound_jobs.send_in_app` + `audit_events` only, NEVER `patient_timeline_events` unless an explicit patient-record state change occurs. Bind relationship-scoping per DL-10. Name staff directory + presence + on-call coverage as a separate future doctrine arc (DL-12 candidate, NOT in DL-11 scope) via non-foreclosure clause.

**Context.** The decision was forced by a series of c2-adjacent + DL-10-adjacent design questions: (a) the user described a Teams-quality / Epic-Secure-Chat-quality internal staff collaboration surface (mentions, group chats, 1:1 DMs, rich media, patient attachment) that the existing doctrine had not bound — §1G.8.8 had named the surface but mis-bound it to "reuse `messages` table with a thread-type flag, no new product"; (b) c2 chat rendering shipped on a substrate ill-suited to staff-to-staff collaboration (different access model, different audit, different lifecycle, no multi-object attachment); (c) c4 (`patient_action_items` substrate build) is queued next and would risk conflating "patient action items" with "internal team threads about a patient" if DL-11 didn't bind first; (d) external-line preflight is the other queued preflight and would risk collapsing "ops triage queue" into "internal collaboration substrate" without DL-11 + DL-10's layer boundaries. The user also raised the question of patient-less group chats ("billing team chat" / "front desk chat" / "1:1 DM about a non-clinical topic") which the existing §1G.8.8 framing did not admit cleanly.

**Rationale.** Parallel substrate is cheaper than reuse-with-flags long-term: storage tables, access models, audit shape, lifecycle semantics, multi-object attachment, mention semantics, and patient-less threads all differ between patient-facing chat and internal team collaboration. Forcing both into one substrate compromises every axis. The Mindbody-style consumer-identity-with-business-relationship answer DL-10 bound is fundamentally about identity scope and operational-state ownership; DL-11 binds the parallel question about messaging surface ownership. Internal collaboration as a sibling (sibling #19) keeps the doctrine clean: the boundary discipline in foundational doc §5 forces every sibling to declare what it does NOT own, which surfaces compositions cleanly. Object attachment as a first-class multi-object child table rejects the per-object-type-table proliferation pattern (same shape DL-8 + radar zone 29 rejected for specialty acquisition tables) and rejects the metadata-jsonb-bag pattern (same shape radar zone 28 rejected for care-task state fragmentation). Mention semantics matter because the patient timeline is patient-facing memory, not an internal-team activity log — radar zone 41 watches.

**Alternatives considered.**

| Alternative | Why it was rejected |
|---|---|
| **Reuse `messages` with `staff_internal` thread type (the prior §1G.8.8 framing).** Simplest substrate change; one new enum value. | Rejected. Internal collaboration has different access model (staff-only; no patient portal session), different audit shape (mentions don't emit timeline events), different lifecycle (persistent groups don't close; direct messages don't have status), different participant semantics (derived from role + capability for groups), different object attachment (multi-object first-class), different sensitivity model (per-thread `sensitive` / `safety` tagging). Forcing these into the c2 `messages` substrate either pollutes c2 with staff-only fields and dual-purpose audit, OR strips internal collaboration of features it needs. The two surfaces are structurally distinct. |
| **Build internal collaboration as a feature of `provider_tasking/`.** Threads as a UI feature on top of tasks. | Rejected. Conflates queue/task semantics (ownership, SLA, escalation, completion) with thread/conversation semantics (multi-party discussion, mentions, sensitivity, lifecycle). Both lose. They compose well — a thread can produce or resolve a task via `internal_thread_object_links.link_role='produced_task'` — but neither replaces the other. `provider_tasking/` stays focused on tasks; internal_collaboration is its own sibling. |
| **Per-object-type internal-thread tables** (one for labs, one for orders, one for billing exceptions). | Rejected. Same shape as the specialty-acquisition-table proliferation pattern rejected by DL-8 + radar zone 29. Object types proliferate; new types require schema changes; cross-type discussions (a thread linking patient + lab + order) become impossible. Typed `internal_thread_object_links` with polymorphic `(object_type, object_id, link_role)` admits all current + future object types cleanly. |
| **Defer the doctrine entirely; build c4 and external-line first, then bind internal collaboration later.** Lighter doctrine commitment. | Rejected. c4 (`patient_action_items` substrate build) would canonize on the wrong assumption — that action items hold staff-to-staff conversation context — and require retrofit. External-line preflight would collapse Layer 3 (ops triage queue) into internal collaboration substrate without DL-10/DL-11's layer boundaries. The doctrine arc is doc-only and small enough to land first. |
| **Force patient binding on every internal thread.** Cleaner data model (every row has a patient_id). | Rejected. Patient-less threads (billing team chat, 1:1 DM, "starting Monday we charge full refund per the new policy") are first-class operational surfaces. Forcing patient binding either (a) refuses to admit them, breaking real workflows, or (b) admits them via fake / synthetic / system patient_id, polluting `patients` table. Patient-less threads stay first-class. |
| **Include staff directory + presence + on-call coverage in DL-11.** One bigger doctrine arc. | Rejected. The user explicitly noted "back-burner for later" possibility. Staff directory / presence / on-call has its own substrate concerns (visibility policy, rotation primitives, schedule integration) that overlap with `scheduling_lifecycle/` and Section 1D. DL-11 names the dependency via non-foreclosure clause (§7.14.17) and reserves the future arc for DL-12 candidate or sibling activation. |

**Consequences.**

- **c2 chat substrate (already shipped, commit `8f02bc0`):** unchanged. Continues serving patient-facing chat. No retrofit.
- **§1G.8.8 in MAIN:** SUPERSEDED-AND-REPLACED-BY-DL-11 banner inserted at top; historical text preserved for archaeology. New doctrine lives in DL-11 + foundational doc §7.14.
- **c3 (`/inbox` UI for `patient_inbox_messages`):** unaffected. c3 is patient-facing one-way notifications; doesn't touch internal team substrate.
- **c4 (`patient_action_items` substrate build, re-scoped per DL-10):** must respect DL-11's distinction between "patient action item" (substrate for tasks-the-patient-must-complete) and "internal team thread about a patient" (substrate for staff-to-staff discussion). c4 does NOT build internal_collaboration; it builds patient_action_items. The two compose: a `patient_action_items` row may have an associated internal_collaboration thread linked via `internal_thread_object_links.object_type='patient_action_item'`.
- **External-line preflight (future):** must respect DL-10/DL-11's layer boundaries. External-line ops triage stays in external-line substrate (Layer 3 in topology §11); internal_collaboration threads can be spawned from / linked to external-line events but the external conversation itself is not an internal thread.
- **Provider mirror parallel track:** must consume both substrates correctly. Patient chat via c2 substrate; internal team threads via the future `internal_collaboration/` substrate. Compose surfaces appropriately in the provider workspace.
- **Future `internal_collaboration/` migration:** lands when first sibling activation drives it. Migration includes the four tables (`internal_threads`, `internal_thread_messages`, `internal_thread_participants`, `internal_thread_object_links`), persistent-group derivation primitive (`lib/groups/` or `lib/auth/` extension), RLS predicates, audit instrumentation, and rich-media handling architecture.
- **Future DL-12 candidate (staff directory / presence / on-call):** lands as a separate doctrine arc when first concrete pressure surfaces. Likely candidates: `scheduling_lifecycle/` activation (on-call rotation overlaps); first multi-clinic / multi-deployment activation (cross-clinic on-call coverage); first capability-gated personal-cell-visibility incident.

**What DL-11 explicitly does NOT decide.**

- Exact schema for the four substrate tables (sketched in foundational doc §7.14.4; migration future).
- Rich-media handling architecture (attachments, screenshots, markups, voice/video messages).
- Presence / typing indicators / read receipts beyond `last_read_message_id`.
- Mention notification fan-out details (batching / digests / @here vs @channel semantics).
- Mobile-app surface design.
- Group-membership derivation implementation (`lib/auth/` or `lib/groups/` module).
- Reactions / emoji semantics.
- Staff directory UI design + on-call rotation primitive + personal-cell visibility policy (separate future doctrine arc per §7.14.17).
- "Click into staff view → see schedule" UI (depends on `scheduling_lifecycle/` activation; no new doctrine needed beyond what scheduling sibling admits).

**Cross-links.**

| Concern | Reference |
|---|---|
| Binding doctrine lock | MAIN DL-11 |
| §1G.8.8 supersession | MAIN §1G.8.8 (SUPERSEDED-AND-REPLACED-BY-DL-11 banner) |
| Long-form rationale | Foundational doc §7.14 |
| New sibling | Foundational doc §5 "Reserved by DL-11" — sibling #19 `internal_collaboration/` |
| Sibling-boundary discipline | Foundational doc §5 boundary statement for `internal_collaboration/` |
| Crosswalk status | Foundational doc §11.0 (LANDED doctrine via DL-11; substrate migration future) |
| Watch zones | Radar zones 38 (cram-internal-into-patient-chat), 39 (object-attachment-via-jsonb / single-context), 40 (cross-relationship leakage), 41 (patient-timeline pollution), 42 (staff-directory / on-call / personal-contact drift) |
| Topology spine | [`docs/architecture/communications_topology.md`](communications_topology.md) §12 (third messaging surface) + §11 (external-line / DL-10/DL-11 boundary clarification) |
| Closing handoff | [`.cursor/plans/HANDOFF_2026-05-11_phase_4h_internal_collaboration_doctrine.md`](../../.cursor/plans/HANDOFF_2026-05-11_phase_4h_internal_collaboration_doctrine.md) |

---

## 7.15 Thread + participant lifecycle as cross-substrate discipline + fax canonical placement + template/AI interaction guardrails + search/visibility/notification governance + edit/attachment/preview/legal/safety/task/merge/queue-routed-work guardrails + three-state attachment lifecycle + iOS-vs-OMNI-native markup + culture clause + patient-facing rich-media parity + thread-kind parameterization + internal-membership-vs-patient-visible-roster + care-team/coverage-layer-drives-derived-membership + Teams/M365-coexistence + AI-Response-Assist (DL-12) (binding — added 2026-05-12 early morning, post-DL-11)

**Decision.** Land DL-12 as a single foundational doctrine arc binding **28 operational clarifications across 7 pressure-test rounds**: (a-e) template/AI interaction; (f-j) search/visibility/notification governance; (k-r) edit/attachment/preview/legal/safety/task/merge/queue-work; (s-v) three-state attachment + iOS-vs-OMNI-native markup + not-a-consequence-free-backchannel culture; (w-x) patient-facing rich-media parity + thread-kind parameterization; (y-z) internal-membership-vs-patient-visible-roster + care-team/coverage-layer-drives-derived-membership; (aa-bb) Teams/M365-coexistence-not-replacement (genericized to "general enterprise collaboration platforms") + AI-Response-Assist-replaces-screenshot-into-external-AI. **25 radar zones (43-67). DL-12 lock ~40 binding clauses.** Doc-only — no migration, no schema, no code. The lock points at canonical homes; content distributed there, never to orphan subsections.

**Context.** c2 (in-app inbox c2 rich chat rendering) shipped 2026-05-11 PM commit `8f02bc0`. DL-10 (identity / relationship) + DL-11 (three messaging surfaces) landed 2026-05-11 evening / late evening. Surfaced operational seams: thread + participant lifecycle (state machine, ownership, retention, deactivation, intervention, urgent/safety, task transitions, queue-routed work); template/AI interaction boundaries (human-vs-automated send distinction, internal snippets distinction, AI participation bounds, anti-noise, authorship attribution); search/visibility/notification governance (five visibility classes, anti-panopticon, three-level control hierarchy, patient/staff preferences with criticality/capability overrides, preview privacy, legal hold); operational guardrails (edit-history, attachments, urgent/safety escalation, thread-to-task, merge/split, queue-routed work state machine); attachment/media/markup discipline (three-state lifecycle, iOS-flattened vs OMNI-native, PDF stricter, patient-facing parity); thread-substrate parameterization (thread_kind not specialty-group-hardcoded, "1:1" UX with backend coverage, derived membership from care-team/coverage layer); patient-visible roster vs internal membership distinction; OMNI scope positioning (NOT a Teams/Slack clone, NOT a screenshot-into-ChatGPT replacement). Fax surfaced as a cross-substrate channel needing canonical placement. All of these are foundational; deferring them creates implementation drift and ad-hoc improvisation at scale.

**Rationale.** Per user pressure-test directive "treat these as foundational. NOW is the time to get this right. not later. no orphan subsections; insert at canonical homes." DL-12 lock pattern matches DL-7 / DL-10 / DL-11: the lock names the principle and points at canonical homes; the binding content lives in those canonical sections, NOT as orphan subsections under §7.14. Fax canonical placement uses distributed protective guardrails (primitives #10 + #16 + §5 sibling-boundary + §1P inbound channels + new topology §13 + radar zone 46) — composed-from-primitives, NOT a new sibling. **Specific vendor names in invariant 38 ("e.g., Microsoft Teams, Slack, Microsoft 365, Google Workspace, future enterprise chat / Copilot-class tools") are illustrative only; doctrine binds the pattern, not the brand** — when the chosen platform changes, the doctrine still holds.

**Alternatives considered (all explicitly REJECTED — recorded so future contributors find the trail when tempted to re-litigate):**

1. **DL-12 as a single lock vs distributed-only (no lock)** — REJECTED. Lifecycle needs top-level discoverability so future contributors find the cross-substrate discipline; distributed-only fragments the principle across §1D/§1G/§1J/§1V/§1P/§1Q/§1N without a coordinating anchor.
2. **Fax as a new sibling (`fax_lifecycle/`, `inbound_fax/`, or `outbound_fax/`)** — REJECTED. Fax composes from primitive #10 + primitive #16 + §1P + future provider_tasking + §1G.6.2 queue routing per §5.3(a). Same DL-8 admission discipline that already forbids `external_documents_lifecycle/` proliferation. Fax-as-sibling is the exact "specialty-table proliferation" anti-pattern radar zone 29 rejects.
3. **Fax inside internal_collaboration sibling** — REJECTED. Fax also generates patient-facing artifacts (records-request response), tasks, and direct order entries. Conflates channel substrate with collaboration substrate.
4. **Lifecycle as new sub-doctrine #19 confined to internal_collaboration** — REJECTED. Lifecycle is cross-substrate (applies to c1, c2, future internal_collaboration, future external-line, future patient_action_items, fax); confining it to one sibling loses the cross-substrate discipline.
5. **Defer template/AI guardrails to later phase** — REJECTED per user "treat these as foundational. NOW is the time to get this right." Without canonical placement now, every future build improvises AI participation rules + patient-facing-send boundary → substrate fragmentation + disclosure-policy bypass risk.
6. **New DL-13 for AI participation** — REJECTED. AI participation bounds are a primitive #11 description update + §1N.8 extension, not new substrate.
7. **Internal staff snippets in `repo/templates/` alongside patient-facing templates** — REJECTED. Conflates patient-facing-send governance (disclosure-policy + privacy-tier + prohibited-claims + outbound_jobs lifecycle) with internal collaboration tooling.
8. **Force ALL patient-facing chat through template engine including human-authored portal replies** — REJECTED. Would over-rigidify ordinary clinical messaging; only automated/system/rule-fired/campaign/notification/AI-generated patient-facing sends are template-governed per §1Q.14.1(b).
9. **Internal snippets as permanent free-text** — REJECTED. When DL-11 sibling activates, internal snippets land in a typed, versioned registry inside `internal_collaboration/`. Without that discipline, internal snippets become an unaudited authoring loophole.
10. **Single actor type `ai_assisted` covering both AI-as-actor AND human-accepted-AI-draft** — REJECTED. Conflates legal/clinical authorship; `staff_with_ai_assist` distinct from `ai_assisted` per primitive #1 taxonomy + DL-12 invariant 14.
11. **AI auto-creation of high-sensitivity clinical/Rx/safety threads without anti-noise controls** — REJECTED. Dedupe + cooldown + severity threshold + ownership required; high-sensitivity threads auto-create only under approved deterministic trigger policy OR enter human triage/proposal state.
12. **Mega-table for all threads (cross-surface storage merge)** — REJECTED. Storage stays per-substrate per DL-8 sibling admission; search/discovery is a future projection over substrates, not a new source of truth.
13. **Single global "everyone-can-search-everything" toggle** — REJECTED. Anti-panopticon discipline; search visibility is capability-gated + scope-aware + thread-class-aware with five visibility classes + three-level control hierarchy.
14. **1:1 DMs and private group threads globally searchable by ordinary staff** — REJECTED. Cultural failure mode (conversations flee to text/iMessage/Slack); admin/compliance discovery is audited break-glass, never ordinary search.
15. **Search as a new source of truth replacing per-substrate storage** — REJECTED. Search aggregates across substrates as a discovery projection; underlying source substrates remain canonical.
16. **Patient notification preferences allow silent-suppress of clinical/safety/critical messages** — REJECTED. Preferences subordinate to message intent + clinical/safety criticality per §1Q.14.1(d); critical transactional/clinical/safety/Rx/billing/appointment/legal cannot be silently suppressed as marketing.
17. **Staff DND/mute bypassing on-call/safety/CMO/assigned-owner escalations** — REJECTED. Preferences subordinate to capability + role + on-call + thread class + assignment + escalation per §1D.3(c).
18. **Message edit silently rewrites history without preserving original/editor/timestamp/reason/audit** — REJECTED. Legal/clinical defensibility requires immutable history per primitive #1 + §1V.10(c).
19. **Attachments stored as raw bytes in `messages.body` blob or opaque attachments array** — REJECTED. Attachments are first-class artifacts with scan + type + uploader + sensitivity + retention + audit per §5.3(b).
20. **Full PHI in notification preview / lock-screen / SMS companion / search snippet** — REJECTED. Preview is a separate disclosure surface from message body per §1Q.14.1(e) + §1J.12.
21. **Legal hold / eDiscovery / compliance export treated as ordinary search** — REJECTED. Administrative surface distinct from ordinary search per §1J.9 break-glass + §1V.10(d).
22. **Async chat surface marketed as emergency channel** — REJECTED. Messaging surfaces honestly frame routine vs urgent vs safety vs emergency; AI/term detection may trigger escalation but system does not imply async chat is emergency care unless operational pathway supports it.
23. **Thread "done" message treated as task completion** — REJECTED. Completion lives in task substrate per DL-7; threads coordinate around state, never own state.
24. **Future thread merge/split that collapses access scope** — REJECTED. Merge/split/link preserves authorship + timestamps + participants + visibility class + audit + access scope.
25. **Queue-routed message treated as "handled" by read receipt** — REJECTED. Read receipts are messaging state; claimed/completed/escalated are task/work state per §1G.6.2 + DL-7.
26. **Attachment auto-files to chart on upload without explicit disposition** — REJECTED. Three-state lifecycle (chat-attachment → reviewed/classified → filed-to-chart) requires explicit capability-gated audited disposition per §5.3(b.i) + DL-7.
27. **OMNI-native markup overwrites original source artifact** — REJECTED. Annotation never overwrites original; OMNI-native markup creates derived annotation artifact per §5.3(b.ii).
28. **PDFs treated identical to flattened image uploads without original preservation** — REJECTED. PDFs and chart/document artifacts stricter — original always preserved per §5.3(b.iii).
29. **Internal collaboration as consequence-free backchannel** — REJECTED. Inappropriate staff remarks are NOT silently deletable; correction/restriction/entered-in-error workflows preserve original + editor + timestamp + reason code + audit; content may be discovered through compliance/legal-hold/eDiscovery/admin audit per §1V.10(e).
30. **Markup stored as raw bytes in message metadata blob** — REJECTED. Annotation is first-class derived artifact per §5.3(b.ii); threads reference, never embed raw bytes.
31. **Patient-facing media treated as casual iMessage attachment without scan / audit / PHI-classification / capability-gate** — REJECTED. Patient-facing media has STRICTER discipline than internal media per §5.3(b.v); scan + audit + PHI/privacy + sender attribution + relationship scope + retention + capability gate required.
32. **Patient-facing thread substrate hardcoded to specialty/care-team** — REJECTED. Substrate parameterized by `thread_kind` per §1G.3(c) — admissible kinds include care_team / provider_1:1 / front_desk / esthetician / injector / billing / support / post_procedure / location_team / role_queue / on_call; specialty-group is ONE routing shape, NOT the substrate (medspa-blind failure mode).
33. **1:1 patient thread without backend coverage / escalation / role-queue fallback** — REJECTED. "1:1" UX may preserve backend coverage + escalation + role-queue + audit per §1G.6.2 + §1G.1; prevents 1:1-orphans-when-staff-off-duty failure mode (distinct from staff deactivation per zone 43).
34. **Internal access membership identical to patient-visible roster (every backend observer exposed to patient)** — REJECTED. Patient-visible roster governed by display policy (named staff / role-title / team alias / "Care Team" label); silent internal participants NOT auto-exposed per §1J.12(e).
35. **Staff self-join into patient thread allowed without authorization (curious browse)** — REJECTED. Staff entry requires explicit capability + queue/team membership + coverage role + assignment + escalation + admin/CMO authority + break-glass per §1J.12(f).
36. **Thread membership hardcoded in thread instead of derived from care-team/coverage assignment layer** — REJECTED. Patient-facing thread membership DERIVED from `patient_relationship` + `care_program` + `specialty` + `geography/licensure` + `location` + `on-call/coverage` + active status + capability per §1G.3(d); thread is CONSUMER of care-team/coverage layer.
37. **Patient-visible disclosure required for every backend coverage change** — REJECTED. Three modes admitted (silent backend / message-authored / explicit transition notice); only primary-provider/high-touch relationships require explicit transition notice per §1G.3(f).
38. **Care-team/coverage rules hardcoded in chat substrate** — REJECTED. Full staffing algorithm lives in future care-team/coverage substrate, not in chat; chat consumes the assignment layer.
39. **Build OMNI internal_collaboration as a generic enterprise-chat clone** (Microsoft Teams / Slack / Microsoft 365 / Google Workspace / future-tool clone) — REJECTED. OMNI internal_collaboration owns relationship-scoped clinical/ops collaboration with canonical-state boundaries + care-team/coverage-derived membership; general enterprise platforms already do general enterprise chat well and OMNI should not replicate it; integration via notifications + deep links + governed connectors, not replacement.
40. **Use the external enterprise platform as the source of truth for OMNI patient-context** (threads / tasks / orders / labs / Rx / patient-facing communications / chart documents) — REJECTED. The external enterprise platform cannot enforce relationship/PHI scope + care-team/coverage layer + chart-filing disposition + template/disclosure governance + clinical-state-in-substrate; OMNI remains source of truth for patient-context work.
41. **Accept screenshot-into-external-ChatGPT as the patient-context AI drafting workflow** — REJECTED. PHI exfiltration at scale; OMNI must provide in-app PHI-safe context-aware response-assist surface per §1N.8(e) + primitive #11; design rule "compliant workflow must be easier than the workaround" — if in-app AI is worse, staff route around platform and compliance posture is performative (radar zone 67).
42. **Defer in-app AI response-assist as nice-to-have** — REJECTED. Foundational because absent it staff WILL use external AI for patient-context drafting; the doctrine guardrail must be named now even though full build is future capability.

**Consequences.**

- c2 substrate unchanged (DL-12 is doctrine, not migration). c2 stays as shipped commit `8f02bc0`.
- c3 / c4 / external-line preflight + future internal_collaboration sibling activation + future care-team/coverage substrate + future patient_action_items integration inherit cross-substrate lifecycle obligations from DL-12 + foundational §8.1.
- Future internal_collaboration sibling migration uses §8.1 lifecycle binding + primitive #1 actor type taxonomy + primitive #11 AI participation bounds + internal-snippet-typed-versioned-registry deliverable + §7.14.4 substrate sketch (extended with DL-12 fields).
- Future fax preflight composes from primitives (primitive #10 + primitive #16 + §1P + §1G.6.2 + future provider_tasking + future c4 patient_action_items); never a new sibling.
- Patient-facing send path stays owned by §1Q + primitive #3 + primitive #13 governance for automated/AI-generated sends regardless of who proposed the message; human-authored patient chat is free-text under capability/audit per §1Q.14.1(b).
- Internal snippet substrate is a future internal_collaboration deliverable with its own typed/versioned registry, never patient-facing template registry.
- Every AI-assisted or system-created thread carries full provenance + anti-noise controls per primitive #1 + primitive #11 + DL-12; human-accepted AI drafts authored by humans with `staff_with_ai_assist` actor type, AI is provenance attachment.
- Patient-visible roster governed by display policy; backend internal participants distinct; staff self-join requires explicit authorization.
- Patient-facing thread membership DERIVED from care-team/coverage assignment layer; provider quits → coverage rule selects replacement; patient-visible disclosure policy-driven across three modes.
- General enterprise platforms (Teams / Slack / M365 / Workspace / future) may remain general enterprise collaboration; OMNI owns patient-context; integration via notifications + deep links + governed connectors, never source-of-truth swap.
- In-app AI Response Assist (future capability) replaces screenshot-into-external-AI workflow; final send remains human-approved or §1Q-template-governed; accepted drafts authored as `staff_with_ai_assist` with AI provenance.
- **Future preflights named (NOT blocking DL-12 execution):** patient-proxy / caregiver / parent-on-behalf-of-minor actor type extension (primitive #1 taxonomy admits extension); patient-to-patient peer support (new surface); scheduled-send (UI/scheduling feature); voice notes (future media pipeline); AI translation (future capability under primitive #11); external-line first-touch (named in c2 + DL-11 + DL-12); records export (HIPAA Right of Access — separate substrate); video sessions (telehealth video — separate substrate); emergency provider-to-provider direct bypass (voice infra — out of scope).

**Cross-links:** MAIN DL-12 lock + §1D.3 + §1G.1 DL-12 binding + §1G.3 DL-12 binding + §1G.6.2 DL-12 binding + §1J.12 + §1V.10 + §1P.14 + §1Q.14.1 + §1N.8 + foundational doc §4.A primitive description updates + §5.3 sibling-boundary extensions + §7.13.12 DL-12 cross-references + §7.14.9 extension + §7.14.10 extension + §7.14.18 extension + §8.1 participant + thread lifecycle cross-cutting row + §11.0 crosswalk DL-12 row + Topology §12 update + §13 (fax) + Radar zones 43-67 + Evolution narrative Act XIII + closing handoff `.cursor/plans/HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md`.

| | |
|---|---|
| Status | LANDED (2026-05-12 early morning) |
| Substrate impact | Doctrine-only — no migration, no schema, no rules, no code; substrate migration future (when first internal_collaboration sibling activation OR first care-team/coverage substrate OR first fax activation OR first concrete attachment-lifecycle migration drives) |
| Doctrine impact | DL-12 lock added to MAIN doctrine-locks block (after DL-11); 9 MAIN section amendments (§1D / §1G.1 / §1G.3 / §1G.6.2 / §1J / §1V / §1P / §1Q / §1N); 6 foundational primitive description updates (#1 / #2 / #10 / #11 / #13 / #16); §5 sibling-boundary discipline extended (TWO guards + FIVE sub-guards); §8 cross-cutting row added (28 sub-clauses + additional cross-cutting sub-disciplines); §7.13.12 + §7.14.9 + §7.14.10 + §7.14.18 cross-references added; §11.0 crosswalk DL-12 row added |
| Crosswalk status | Foundational doc §11.0 (LANDED doctrine via DL-12; substrate migration future) |
| Watch zones | Radar zones 43-67 (25 zones) — staff deactivation orphans + owner cardinality drift / true-delete forbidden + recovery no-impersonation / thread title source ambiguity / fax-as-new-sibling or stuffed-into-internal_collaboration / thread proliferation + wrong-granularity drift / internal-thread-as-canonical-state drift / AI silent patient-send / system-AI-thread without provenance / AI thread spam / AI authorship rewriting / everyone-can-search-everything anti-panopticon / notification silently suppresses safety/clinical/critical / message edit silently rewrites / attachment as thread metadata blob / PHI in notification preview / queue-routed handled by read receipt / attachment auto-files to chart / OMNI-native markup overwrites original / patient-facing media without scan/audit/PHI / specialty-group hardcoded as substrate / 1:1 orphans when staff off-duty / staff self-joins without authorization / internal-participants silently exposed to patient / thread membership hardcoded not derived / screenshot-into-external-AI anti-pattern |
| Topology spine | [`docs/architecture/communications_topology.md`](communications_topology.md) §12 (internal team collaboration cross-references) + §13 (fax as cross-cutting rail + ingress; NEW) |
| Closing handoff | [`.cursor/plans/HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md`](../../.cursor/plans/HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md) |

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

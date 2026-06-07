# OMNI Build Entry Gate v0

Document type: `handoff_or_readiness_gate`
Authority: Lane-admission gate for D1 readiness
Status: Active (v0)
Domain(s): architecture_governance, build_operations
Lifecycle role: Readiness decision point before any implementation authorization
Source-of-truth relationship: Executes Rollout Step 2 in `10_omni_build_os_rollout_sequence.md`
Supersedes: ad-hoc lane-start decisions
Superseded by: none
Manifest action: add_tier1
Review gate: User/Knox approval required before any change to gate verdict semantics

---

## ⚠️ FREEZE — pre-vNext read path (2026-05-31, `REV-158`)

This gate predates the **Foundation vNext pivot**. Its Governing Read Path + Slice-binding anchors below still cite the **demoted legacy `system_map_three_layers_60706286.plan.md`** (now evidence) instead of `OMNI_System_Map_vNext.md` + the domain/seam contracts. `WP-EXEC-001`/`WP-EXEC-002` shipped against that stale target. **Do NOT resume any build lane against the legacy map.** At the Foundation vNext **ratification gate**, re-point this gate to the vNext foundation and re-check shipped WP-EXEC code (per `foundation_vnext_reconciliation.plan.md` §7, `REV-158`).

## Scope

This gate issues **Build Entry readiness for narrow-slice planning only**.

It does **not** authorize:
- full D1 execution,
- uncontrolled doctrine promotion,
- D6 canonization/promotion,
- provider/EMR or Shopify lane expansion.

---

## Candidate Lane

- Candidate first steel slice:
  - intake `source_event` -> CNS candidate/resolver -> scheduling intent update -> messaging projection

---

## Governing Read Path

Tier-0/boot mandatory:
- `AGENTS.md`
- `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`
- `.cursor/plans/doctrine/01_master_corpus_catalog.md`
- `.cursor/plans/doctrine/02_authority_routing_map.md`
- `.cursor/plans/doctrine/04_manifest_read_graph.md`
- `.cursor/plans/doctrine/05_supersession_conflict_ledger.md`
- `.cursor/plans/doctrine/08_open_review_queue.md`

Slice-binding anchors:
- `.cursor/plans/system_map_three_layers_60706286.plan.md`
- `docs/architecture/cns_action_orchestration_adr_2026-05-17.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md`
- `docs/architecture/communications_topology.md`
- `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md`

---

## Linked Decisions, Guardrails, Conflicts

Readiness-linked decisions:
- `.cursor/plans/doctrine/03_decision_extraction_ledger.md` (`D0W12-DEC-009`, `D0W12-DEC-010`, `D0W8-DEC-005`, `D0W8-DEC-007`, `D0CLOSE-DEC-001`)

Guardrails:
- `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md`

Conflict and review state:
- `.cursor/plans/doctrine/05_supersession_conflict_ledger.md` (open rows = 0)
- `.cursor/plans/doctrine/08_open_review_queue.md` (open rows = 0)

Explicit gated residual:
- `.cursor/plans/doctrine/DL-17_commerce_DRAFT_2026-05-17.md` remains review-gated and out-of-scope for this slice.

---

## Explicit Out-of-Scope

- D6 doctrine promotion, entitlement/payment expansion, or execution lane start
- D7 materialization expansion beyond current bounded routing
- provider/EMR operational lanes
- Shopify/commerce integration lanes
- Any canonization action not explicitly routed through this gate and subsequent slice contracts

---

## Boundary Invariants and Tests (must hold)

1. **Source-event integrity**
   - Every candidate record is traceable to a single immutable `source_event`.

2. **CNS ownership integrity**
   - Candidate/resolver flow remains CNS-owned; downstream domains do not bypass resolver authority.

3. **Scheduling boundary integrity**
   - Scheduling produces intent/state transitions only; no D5 actualization or D6 side effects in this slice.

4. **Messaging projection integrity**
   - Messaging output is projection-only from committed CNS/scheduling outcomes; no messaging-as-decision authority.

5. **No cross-domain promotion leak**
   - Slice execution cannot trigger D6/D7 doctrine promotion implicitly.

6. **Audit traceability**
   - For every transition: source, resolver path, decision basis, and emitted projection are reconstructable.

---

## Foundational Composition Admission Checklist (Binding)

This checklist is mandatory before implementation authorization for any lane.

### Consequential-composition threshold (must classify first)
A lane must classify consequential paths vs lightweight paths before admission.

Consequential paths are those that can influence:
- patient-facing action,
- provider/staff task routing,
- suppression/no-op/defer/escalation outcomes,
- owning-domain commit/materialization,
- entitlement/payment behavior,
- scheduling readiness/mutation,
- audit/compliance-relevant state.

If this classification is missing, lane admission is blocked.

### Required proof questions (all must be answered)
1. Which source events/signals/atomic inputs enter this slice?
2. Which domain owns each consequential commit?
3. What context is temporary arrangement vs durable committed truth?
4. What lineage is preserved at each boundary hop?
5. What temporal/freshness states apply (fresh/stale/expired/re-anchor)?
6. What policy/template/model/config versions are pinned for consequential resolver outcomes?
7. What suppression/no-op/defer lifecycle and re-entry conditions are defined?
8. What is strict replay vs reconstructability-only?
9. What can be excluded from active composition and how is retention governed?
10. What is explicitly forbidden from silent cross-domain mutation?

### Non-admission conditions
Implementation authorization is blocked if any of the following is unresolved:
- consequential-vs-lightweight classification,
- freshness/re-anchor/invalidation declarations,
- policy/version pinning for consequential outcomes,
- suppression/no-op/defer lifecycle semantics,
- ownership-preserving commit boundaries.

---

## Agent Work Protocol Admission (Binding)

Before implementation-lane admission, an agent MUST satisfy:
- protocol §1 boot,
- protocol §2 gate/work-package declaration,
- protocol §3 work classification (with destinations and update/create decisions),
- protocol §4 context loading via read-graph,
- protocol §6 build-entry retrieval (future work + open reviews + guardrails + relevant ADR/doctrine/domain anchors),
- protocol §9 stop-rule proof requirements.

Lane admission is blocked if any of these are omitted or fail to produce required outputs.

Reference: `.cursor/plans/doctrine/agent_work_protocol.md`.

---

## Stop / Reroute Conditions

Stop immediately and reroute to governance if any occurs:
- Any authority conflict reopens in ledger state.
- D6 or D7 promotion pressure appears as a required dependency for slice correctness.
- Candidate->resolver->commit boundary is bypassed by implementation proposal.
- Required audit trace fields are missing from proposed slice contract.
- Slice requires provider/EMR or Shopify scope to proceed.

---

## Slice-Specific Domain Contract (Pre-Build)

### Domains involved
- Intake (source event origination and normalization)
- CNS orchestration (candidate/resolver/commit governance)
- D3 scheduling (intent and scheduling-state update)
- Messaging/communications (projection only)

### Owns / does not own
- **Intake owns**
  - Source-event capture, immutable source payload, and intake-origin metadata.
- **Intake does not own**
  - Candidate resolution decisions, scheduling commits, or outbound messaging authority.
- **CNS owns**
  - Candidate lifecycle, resolver decisioning, commit authorization path, and cross-domain routing envelope.
- **CNS does not own**
  - Scheduling domain-specific intent semantics or message channel delivery execution.
- **Scheduling owns**
  - Scheduling intent/state mutation after CNS-authorized handoff.
- **Scheduling does not own**
  - D5 actualization, D6 commerce state, D7 doctrine/evidence promotion, or messaging decision authority.
- **Messaging owns**
  - Projection/rendering and delivery orchestration from committed outcomes.
- **Messaging does not own**
  - Clinical/scheduling decision authority; cannot commit canonical domain truth.

### Allowed state changes
- Intake: `source_event` creation only.
- CNS: candidate creation/update, resolver disposition, commit envelope emission.
- Scheduling: intent/state update strictly from committed CNS outcome.
- Messaging: projection record creation/update from committed state; delivery status tracking as projection metadata.

### Forbidden state changes
- Any direct draft/candidate -> committed truth jump outside resolver path.
- Any messaging-side mutation of canonical scheduling or CNS truth.
- Any D5 actualized-work mutation in this slice.
- Any D6/D7 promotion or canonization side effect in this slice.
- Any provider/EMR or Shopify lane touch.

### Boundaries
- **Source_event boundary**
  - Exactly one immutable `source_event` root per candidate path.
- **Candidate/resolver/commit boundary**
  - Commit only through CNS resolver-authorized path; no side-channel commit.
- **Scheduling intent/state boundary**
  - Scheduling accepts committed CNS envelope input only; no direct intake/messaging writes.
- **Messaging projection boundary**
  - Messaging consumes committed state only and emits projection artifacts only.

### Audit trace requirements
- Required trace keys per transition:
  - `source_event_id`
  - `candidate_id`
  - `resolver_decision_id` (or equivalent resolver trace key)
  - `commit_envelope_id`
  - `scheduling_state_change_id`
  - `messaging_projection_id`
  - actor/role + timestamp for each boundary hop

### Explicit D6/D7 exclusions
- D6 is excluded from mutation/promotion in this slice; `DL-17` remains review-gated.
- D7 is excluded from materialization expansion and doctrine/evidence promotion in this slice.

---

## Invariant Test Matrix (Pre-Build)

| invariant | why it matters | source decision/guardrail reference | expected pass condition | failure condition | blocked domain if violated |
|---|---|---|---|---|---|
| One immutable source event root | Prevents hidden multi-root drift and replay ambiguity | `D0W12-DEC-009`, `D0-GRD-006` | Every candidate chain maps to one immutable `source_event_id` | Candidate chain has missing/multiple source roots | Intake + CNS |
| CNS-only commit authority | Preserves orchestration center-of-gravity and prevents rail/domain bypass | `D0W12-DEC-009`, `D0-GRD-005`, `D0-GRD-006` | All commits include resolver/commit trace from CNS path | Commit appears without resolver authorization | CNS + all downstream domains |
| Scheduling mutates intent/state only | Protects D3 boundary and prevents D5/D6 leakage | `D0W12-DEC-010`, `D0-GRD-007` | Scheduling writes are limited to intent/state contract fields | Scheduling writes touch D5/D6/D7-owned truth | Scheduling |
| Messaging remains projection-only | Prevents messaging-as-decision anti-pattern | `D0W8-DEC-007`, `D0-GRD-009` | Messaging records derive from committed outcomes only | Messaging can alter canonical domain state | Messaging |
| No implicit D6/D7 promotion | Enforces gate blocker posture and avoids unauthorized canonization | `D0CLOSE-DEC-001`, `D0-GRD-007`, `D0-GRD-008` | No D6/D7 mutation/promotion events emitted in slice flow | Slice depends on or triggers D6/D7 promotion | D6 + D7 |
| Full boundary traceability | Ensures forensic replay and governance proofability | `D0W8-DEC-005`, `D0W12-DEC-009`, `D0-GRD-002` | Required trace keys exist for each boundary transition | Missing/opaque transition records | All involved domains |

---

## Stop / Reroute Triggers (Gate-Run Specific)

### Forces return to review/conflict
- Any new authority contradiction detected between read-graph, catalog, and gate contract.
- Any proposal that requires reclassifying D6 from review-gated to promotable.
- Any proposal that reintroduces D5/D6/D7 ownership collapse.

### Forces narrowing the slice
- Candidate scope requires D5 actualization behavior to satisfy acceptance criteria.
- Candidate scope requires channel/rail-specific policy that implies messaging decision authority.
- Candidate scope cannot satisfy source-event traceability without adding out-of-scope subsystems.

### Blocks implementation authorization
- Invariant matrix not reviewed/accepted.
- Domain contract not reviewed/accepted.
- Required trace keys not concretely defined in the pre-build contract.
- Any unresolved trigger above remains active.

---

## Care Readiness / Temporal Obligation Compatibility Check (Narrow)

Question:
- Does the current candidate slice accidentally harden an appointment-centric model that would block future readiness/post-treatment workflows?

Compatibility checks:
1. Durable logical parent above appointment remains possible (`planned_service_intent` / `care_intent` / equivalent).
2. Logical anchor vs temporal anchor distinction remains possible.
3. Pre-treatment obligations may survive reschedule/delete/recreate when still valid.
4. Post-treatment obligations do not fire until D5 `service_occurrence` exists.
5. Duplicate messaging/task seeding is suppressible across reschedules.
6. Patient/staff/provider task owner/status/due-date model remains possible.
7. Readiness gates and blocking levels remain possible without full build.
8. D3/D5 separation remains preserved.
9. CNS remains obligation/action orchestrator.
10. Messaging remains projection-only.

Compatibility verdict:
- `safe_with_required_gate_addendum`

Expected default verdict:
- `safe_with_required_gate_addendum`

Minimal gate addendum (binding for this slice):
- This slice may update scheduling intent/state, but must not assume `appointment_id` is the durable parent for all future care obligations.
- Care readiness / temporal obligation primitives are reserved and must not be precluded.
- Post-treatment obligations must anchor to actualized `service_occurrence`, not merely scheduled appointment.
- Reschedule/delete/recreate flows must preserve valid completed checkpoints through satisfaction/proof records and suppression keys.

Scheduling artifact changes required now:
- No, unless this compatibility check finds an explicit contradiction in current scheduling assumptions.

Draft/pre-build work package progression after addendum:
- May proceed (still pre-build, non-executable, and review-gated).

Explicit limit:
- This compatibility check does not authorize implementation and does not broaden the slice.

---

## Minimum Output Bundle (for Step 3 admission)

Before implementation authorization, produce:
1. slice-specific domain contract,
2. explicit invariant test matrix,
3. rollback/reroute triggers,
4. proof checklist tied to decision and guardrail references.

Note:
- Executable implementation work packages are **not authorized** in this pass.
- Draft pre-build work packages are allowed only if explicitly marked `draft/pre-build/non-executable`.

---

## Proof Checklist (Gate Bundle Completion)

| proof item | acceptance evidence required | source decision/guardrail reference | pass condition | fail condition |
|---|---|---|---|---|
| source_event trace proof | Trace sample shows immutable `source_event_id` -> `candidate_id` lineage for candidate slice paths | `D0W12-DEC-009`, `D0-GRD-006` | Every sampled path has one immutable root and no branch re-rooting | Missing root, multiple roots, or mutable root rewrite |
| CNS candidate/resolver/commit proof | Trace sample includes resolver decision and commit envelope IDs for all committed paths | `D0W12-DEC-009`, `D0-GRD-005`, `D0-GRD-006` | All commits are resolver-authorized and CNS-mediated | Commit appears without resolver authorization or outside CNS path |
| scheduling intent/state boundary proof | State-change map shows scheduling-only intent/state writes from committed CNS envelopes | `D0W12-DEC-010`, `D0-GRD-007` | Scheduling writes limited to allowed intent/state contract fields | Scheduling writes touch D5/D6/D7-owned truth |
| messaging projection-only proof | Projection map shows messaging artifacts derived from committed outcomes only | `D0W8-DEC-007`, `D0-GRD-009` | Messaging emits projection records with no decision-authority writes | Messaging path mutates canonical decision/state truth |
| no D5/D6/D7 side-effect proof | Negative-impact check confirms no D5 actualization mutation and no D6/D7 promotion side effects | `D0CLOSE-DEC-001`, `D0-GRD-007`, `D0-GRD-008` | Zero out-of-scope domain side effects in slice traces | Any D5 actualization write or D6/D7 promotion dependency/event |
| audit trace completeness proof | Required trace keys present for each boundary hop in sampled transitions | `D0W8-DEC-005`, `D0W12-DEC-009`, `D0-GRD-002` | All required IDs + actor/timestamp present per transition | Missing IDs, missing actor/timestamp, or opaque transition hop |
| reroute trigger proof | Trigger simulation/checklist confirms immediate stop/reroute behavior for each defined trigger class | `D0-GRD-007`, `D0-GRD-008`, gate reroute rules | Every trigger maps to deterministic reroute action | Trigger detected without deterministic reroute contract |

---

## Build Entry Gate Verdict

Verdict: `allowed_with_blockers`

Blockers (explicit and bounded):
- D6 remains review-gated (`DL-17`) and cannot be promoted in this phase.
- Deferred inventory rows remain intentionally deferred:
  - `.cursor/plans/FUTURE_ARC_2026-05-12_federation_permeability_topology.md`
  - `.cursor/plans/FUTURE_ARC_2026-05-12_phi_surface_governance.md`
  - `.cursor/plans/FUTURE_ARC_2026-05-12_prioritization_attention_economics.md`
  - `.cursor/plans/ingestion/competitor_product_evidence/mindbody/screenshots/README.md`
  - `README.md`

Interpretation:
- Rollout Step 3 narrow-slice planning is allowed with explicit blockers.
- No implementation is authorized.
- No full D1 execution/canonization is authorized.
- D6/DL-17 remains review-gated and out-of-scope.

---

## Updated Gate Status (Post Pre-Build Bundle)

- Current status: `ready_for_implementation_review`
- Readiness class: narrow-slice planning only
- Contract + invariant matrix: present (this artifact)
- Care readiness/temporal-obligation compatibility check: completed (`safe_with_required_gate_addendum`)
- Proof checklist: present (this artifact)
- Stop/reroute triggers: present (this artifact)
- Implementation authorization: **not granted**
- Work-package authorization: **draft/pre-build only** (non-executable; review required before any implementation authorization)

---

## Draft Pre-Build Work Packages (Non-Executable)

These packages are authorized for planning refinement only. They are not implementation authorization.

### WP-PRE-001: Source/CNS Boundary Trace Spec
- **Goal**
  - Lock trace contract requirements across `source_event` -> candidate -> resolver -> commit boundaries.
- **Scope**
  - Define required trace fields, lineage semantics, and acceptance checks tied to proof checklist rows.
- **Inputs**
  - Domain contract; invariant matrix; proof checklist rows 1, 2, 6.
- **Outputs**
  - Draft trace specification with pass/fail verification guidance.
- **Non-goals**
  - No schema changes, no runtime instrumentation, no code.

### WP-PRE-002: Scheduling Intent/State Boundary Harness (Design-Only)
- **Goal**
  - Define pre-build validation procedures proving scheduling stays intent/state-only.
- **Scope**
  - Enumerate allowed scheduling transitions and forbidden D5/D6/D7 side effects.
- **Inputs**
  - Domain contract boundaries; invariant matrix rows 3 and 5.
- **Outputs**
  - Draft validation harness plan (design-only) with deterministic failure criteria.
- **Non-goals**
  - No executable tests, no CI wiring, no scheduling artifact rewrite.

### WP-PRE-003: Messaging Projection Constraint Spec
- **Goal**
  - Prove messaging remains projection-only and cannot mutate canonical decision/state truth.
- **Scope**
  - Define projection contract, allowed message emission triggers, and forbidden authority behavior.
- **Inputs**
  - Invariant row 4; guardrails `D0-GRD-009` and related CNS ownership constraints.
- **Outputs**
  - Draft projection constraint spec with pass/fail criteria and escalation path.
- **Non-goals**
  - No channel implementation work, no template coding, no delivery-rail changes.

### WP-PRE-004: Temporal Obligation Addendum Mapping Pack
- **Goal**
  - Preserve compatibility addendum constraints without broad scheduling redesign.
- **Scope**
  - Map logical parent vs temporal anchor assumptions, D5 post-treatment anchor requirements, and suppression/reseed expectations.
- **Inputs**
  - Compatibility check section; invariant matrix; blocker posture.
- **Outputs**
  - Draft addendum mapping checklist for future scheduling-safe refinement.
- **Non-goals**
  - No new framework docs, no NovaNav module design, no implementation.

### WP-PRE-005: Gate Evidence Bundle Template (Review Packet)
- **Goal**
  - Standardize review evidence needed before requesting implementation authorization.
- **Scope**
  - One packet format covering each proof checklist item + blocker posture + reroute trigger results.
- **Inputs**
  - Proof checklist; gate verdict; stop/reroute triggers.
- **Outputs**
  - Draft evidence packet template and reviewer signoff rubric.
- **Non-goals**
  - No executable rollout, no lane expansion, no build kickoff.

---

## Authorization Lock (Unchanged)

- Gate verdict remains `allowed_with_blockers`.
- Authorized now: review-packet assessment and draft/pre-build refinement only.
- Not authorized: implementation, code, migrations/schemas, D6 promotion, provider/EMR, Shopify, full D1 execution/canonization.

---

## Gate Evidence Bundle / Implementation Review Packet

### 1) Package Completeness Table

| package_id | objective | owning domain | required read path present? | allowed outputs present? | forbidden actions present? | proof checklist mapped? | stop/reroute triggers present? | status |
|---|---|---|---|---|---|---|---|---|
| WP-PRE-001 | Source/CNS boundary trace spec | CNS + governance | yes | yes | yes | yes (rows 1, 2, 6) | yes | complete |
| WP-PRE-002 | Scheduling intent/state boundary harness (design-only) | D3 scheduling + governance | yes | yes | yes | yes (rows 3, 5) | yes | complete |
| WP-PRE-003 | Messaging projection constraint spec | messaging + CNS governance | yes | yes | yes | yes (row 4) | yes | complete |
| WP-PRE-004 | Temporal obligation addendum mapping pack | cross-domain governance (D3/D5/CNS) | yes | yes | yes | yes (rows 3, 5, 7) | yes | complete |
| WP-PRE-005 | Gate evidence bundle template | governance/control-plane | yes | yes | yes | yes (rows 1-7) | yes | complete |

### 2) Cross-Package Consistency Check

- Duplicate ownership conflicts: none detected; ownership boundaries remain partitioned by package intent.
- Intake/CNS/D3/messaging boundaries: covered end-to-end across WP-PRE-001/002/003 with no missing handoff seam.
- D5/D6/D7 leakage: none introduced; exclusions and side-effect prohibitions remain explicit.
- Temporal obligation addendum scope: constrained to compatibility preservation; no slice expansion introduced.

### 3) Required Implementation Prerequisites

Must be decided before any code:
- Trace field contract acceptance (`source_event_id`, candidate/resolver/commit IDs, scheduling/message projection IDs, actor/timestamp).
- Boundary acceptance for allowed vs forbidden state changes (especially D3 intent/state-only and projection-only messaging).
- Evidence packet format and reviewer signoff protocol acceptance.
- Confirmation that temporal-obligation addendum does not require immediate scheduling artifact redesign.

Intentionally deferred:
- D6 promotion/canonization (`DL-17` remains review-gated).
- Provider/EMR, Shopify, and broad D1 expansion.
- Full temporal-obligation primitive implementation and any schema design.

Out-of-scope (unchanged):
- Implementation code, migrations, production schemas, and lane expansion.

### 4) Authorization Recommendation

- implementation_authorization_requested: **yes** (review request only; not execution authorization)
- recommended first executable package if approved: **WP-EXEC-001 (Trace Boundary Foundation: source_event -> CNS candidate/resolver/commit trace instrumentation + verification scaffolding)**
- blockers if no:
  - unresolved acceptance on boundary trace contract,
  - unresolved acceptance on D3 intent/state-only boundary,
  - unresolved acceptance on temporal-obligation compatibility addendum constraints.

### 5) Gate Status Update

- Gate status: `ready_for_implementation_review`
- Interpretation: pre-build package bundle is complete enough to request implementation authorization review.
- Authorization lock: implementation still **not authorized** pending explicit approval.

---

## Implementation Authorization Review (No-Build)

Review scope:
- Evaluate authorization readiness only.
- No implementation/code/migrations/schemas.
- No D6/provider-EMR/Shopify/broad D1 expansion.

### Review findings

| review question | finding |
|---|---|
| 1) Is the Gate Evidence Bundle complete? | Yes; required sections and proof mapping are present. |
| 2) Are all WP-PRE packages complete enough? | Yes for authorization review; each package has objective/scope/inputs/outputs/non-goals. |
| 3) Are boundary invariants testable? | Yes; each invariant has pass/fail framing and blocked-domain impact. |
| 4) Are required trace keys defined clearly enough for implementation? | Mostly yes; sufficient for a first executable trace/proof slice under strict scope lock. |
| 5) Are stop/reroute triggers clear? | Yes; explicit triggers and implementation-block conditions are present. |
| 6) Does the temporal obligation addendum prevent appointment-parent hardening? | Yes; addendum explicitly forbids appointment-only durable-parent assumptions and requires D5 anchor for post-treatment obligations. |
| 7) Are D6/D7/provider/Shopify exclusions enforceable? | Yes; exclusions are explicit in scope, out-of-scope, blockers, and lock sections. |
| 8) Is there any unresolved blocker that should prevent implementation? | No hard blocker for a minimal trace/proof executable package, provided conditions below are accepted. |

### Verdict

- `authorize_with_conditions`

### Conditions

1. Authorize exactly one first executable package only:
   - `WP-EXEC-001` Trace Boundary Foundation
   - Scope: `source_event -> candidate -> resolver -> commit envelope -> scheduling intent/state -> messaging projection` trace/proof skeleton only.
2. No business-behavior expansion in first executable package:
   - no scheduling model redesign,
   - no temporal-obligation implementation,
   - no D5/D6/D7 behavior changes.
3. Temporal-obligation compatibility addendum remains hard non-goal constraint for the executable package.
4. Stop/reroute triggers remain active and binding during execution review.

### Post-verdict status

- Gate status remains: `ready_for_implementation_review` until explicit human approval of conditions.
- Implementation remains **not authorized** in this document by default; this section provides review recommendation only.

---

## Human Authorization Required

Current state:
- Implementation Authorization Review verdict: `authorize_with_conditions`
- Human authorization for code execution: pending final approval question
- Package state: `implementation_package_spec_complete`
- Code execution authorization: `implementation_code_authorization_pending`

Approval target:
- `WP-EXEC-001` only
- Trace Boundary Foundation only
- No business behavior
- No scheduling redesign
- No temporal-obligation implementation
- No D5/D6/D7 behavior
- No provider/EMR
- No Shopify
- No broad D1

If approved:
- Status moves to `implementation_code_authorized_for_wp_exec_001_only`
- Next artifact/action is executable implementation package for `WP-EXEC-001` only

If not approved:
- Remain `ready_for_implementation_review`

---

## WP-EXEC-001 Executable Implementation Package (Only)

Package ID:
- `WP-EXEC-001`

Package name:
- Trace Boundary Foundation

Authorization:
- `implementation_package_spec_complete`
- `implementation_code_authorization_pending`

Strict scope:
- Prepare only the minimal executable-unit specification for:
  - `source_event -> candidate -> resolver -> commit envelope -> scheduling intent/state -> messaging projection`
- No business behavior expansion.

Allowed deliverables in this package:
1. Executable package spec details (module/file touch map + exact test/proof set).
2. Minimal trace field plumbing required to satisfy boundary proof checks.
3. Verification scaffolding for proof checklist items mapped to trace boundaries.
4. Rollback/reroute trigger hooks for this package scope.

Not allowed in this package:
- Scheduling redesign or temporal-obligation implementation.
- D5/D6/D7 behavior changes.
- Provider/EMR, Shopify, or broad D1 expansion.
- Migrations and production schema changes.

Likely files/modules to touch (targeted map):
- `lib/` CNS orchestration and envelope trace utilities (candidate/resolver/commit trace propagation)
- `lib/` scheduling intent/state transition trace helpers (trace capture only)
- `lib/` messaging projection trace helpers (projection trace capture only)
- `docs/` or gate-adjacent proof mapping references only if required for test/proof traceability
- Existing test directories for boundary trace verification harness (no business behavior tests beyond trace constraints)

Required tests/proofs to implement:
1. Source-event trace proof
   - Assert immutable `source_event_id` lineage to candidate path.
2. CNS candidate/resolver/commit proof
   - Assert resolver and commit IDs exist for committed paths.
3. Scheduling intent/state boundary proof
   - Assert only allowed scheduling trace transitions are emitted in this scope.
4. Messaging projection-only proof
   - Assert messaging trace emits projection outcomes only; no decision-authority mutation path.
5. Audit trace completeness proof
   - Assert required IDs + actor/timestamp coverage across boundary hops.

Rollback/reroute triggers for WP-EXEC-001:
- Missing or ambiguous trace keys in any boundary hop.
- Evidence of business behavior changes beyond trace/proof plumbing.
- Any D5/D6/D7 side-effect path introduced.
- Any need for migration/schema changes detected.
- Any conflict with temporal-obligation compatibility addendum constraints.

Stop condition:
- Stop after WP-EXEC-001 package execution spec is complete and bounded to this scope.

---

## WP-EXEC-001 Code-Readiness Delta (No-Code)

This section is inspect-first and does not authorize code execution.

### 1) Exact inspect-first file list

1. `lib/intake/events.ts`
2. `lib/intake/runtime/resolve-emissions.ts`
3. `lib/rules/runtime/dispatcher.ts`
4. `lib/outbound/dispatch.ts`
5. `lib/outbound/enqueue.ts`
6. `lib/outbound/types.ts`
7. `lib/messages/postPatientMessage.ts`
8. `lib/messages/computeMessageRequestFingerprint.ts`
9. `lib/events/index.ts`
10. `lib/events/audit-actions.ts`
11. `lib/events/rule-trigger-event-types.ts`
12. `lib/protocol/derive.ts`
13. `lib/intake/types.ts`
14. `lib/intake/targets.ts`

### 2) Exact candidate edit file list

1. `lib/intake/runtime/resolve-emissions.ts`
2. `lib/rules/runtime/dispatcher.ts`
3. `lib/outbound/dispatch.ts`
4. `lib/outbound/enqueue.ts`
5. `lib/messages/postPatientMessage.ts`
6. `lib/events/audit-actions.ts`
7. `lib/protocol/derive.ts`

### 3) Exact test file list

1. `scripts/test-resolve-emissions.ts`
2. `scripts/test-events-registry.ts`
3. `scripts/test-outbound-jobs-types.ts`
4. `scripts/test-intake-route.ts`
5. `scripts/test-in-app-inbox-c1.ts`

### 4) No-migration / no-production-schema assertion

- `WP-EXEC-001` includes **no** database migrations.
- `WP-EXEC-001` includes **no** production schema changes.
- Any discovered requirement for migration/schema change is an immediate reroute trigger and invalidates this package scope.

### 5) Fallback if expected module paths do not exist

- If any listed inspect-first or candidate-edit module is missing, stop executable authorization flow.
- Produce a path-reconciliation note in this gate section with:
  - missing path(s),
  - nearest existing module(s),
  - proposed replacement path map,
  - unchanged boundary constraints.
- Re-run human review on the reconciled map before any code execution state change.

### 6) Final approval question

Approve code execution for `WP-EXEC-001` only?

---

## WP-EXEC-001 Closure Status (Status-Only Update)

Accepted closure posture:
- `WP-EXEC-001` trace-plumbing scope: `complete`
- `WP-EXEC-001` runtime env validation: `complete`
- Overall status: `fully_closed`

Execution scope lock confirmed:
- Phase 1 + Phase 2 completed within approved file boundaries.
- No migrations.
- No production schema changes.
- No unapproved file expansion.
- No business/scheduling/temporal-obligation/D5-D7/provider-EMR/Shopify expansion.

Env-dependent validation completed:
- `scripts/test-in-app-inbox-c1.ts` (pass)
- `scripts/test-intake-route.ts` (pass)

Next allowed action (only):
- Hold at closure; no new implementation scope unless explicitly authorized.

Blocked actions until validation or explicit waiver:
- No Phase 3 start.
- No new implementation scope.
- No scheduling/business behavior work.

---

## Step-3 Candidate Slice Checkpoint — WP-EXEC-002 (Inspect-First Only)

Execution intent:
- Proceed to the next part of the locked rollout plan (Step 3 candidate slice gate run) after `WP-EXEC-001` closure.
- This section is **inspect-first only** and does **not** authorize implementation edits.

Package:
- `WP-EXEC-002`
- Focus: scheduling intent/state boundary proof scaffolding for the candidate first steel slice.

Status:
- `inspect_first_checkpoint_prepared`
- `implementation_not_authorized`

### Scope lock (unchanged)

- Trace/proof boundary work only.
- No business behavior redesign.
- No temporal-obligation implementation.
- No D5/D6/D7/provider-EMR/Shopify/broad-D1 expansion.
- No migrations or production schema changes.

### 1) Exact inspect-first file list

1. `lib/dashboard/buildPatientUpcomingEvents.ts`
2. `lib/dashboard/computeTreatmentReorderReadiness.ts`
3. `lib/intake/views/care-plan.ts`
4. `lib/intake/views/types.ts`
5. `lib/outbound/enqueue.ts`
6. `lib/outbound/dispatch.ts`
7. `lib/outbound/types.ts`
8. `lib/rules/runtime/dispatcher.ts`
9. `scripts/test-outbound-jobs-types.ts`
10. `scripts/test-disclosure-policy-live.ts`

### 2) Candidate edit-file set (not yet authorized)

1. `lib/outbound/enqueue.ts`
2. `lib/outbound/dispatch.ts`
3. `lib/outbound/types.ts`
4. `lib/rules/runtime/dispatcher.ts`
5. `lib/dashboard/buildPatientUpcomingEvents.ts`

### 3) Candidate test-file set (baseline/pre-edit)

1. `scripts/test-outbound-jobs-types.ts`
2. `scripts/test-disclosure-policy-live.ts` (env-dependent)
3. `scripts/test-in-app-inbox-c1.ts` (env-dependent)
4. `scripts/test-intake-route.ts` (env-dependent)

### 4) Pre-edit reconciliation note

- No dedicated scheduling intent/state module path is currently present under `lib/**/scheduling*.ts`.
- Step-3 execution therefore requires path reconciliation at checkpoint review:
  - confirm whether intent/state boundary proof should live in existing outbound/rules/dashboard surfaces, or
  - authorize creation of a new narrowly-scoped scheduling boundary module.

### 5) Reroute triggers (binding)

- Any required edit outside the candidate set.
- Any migration/schema requirement.
- Any behavior redesign requirement.
- Any D5/D6/D7/provider-EMR/Shopify side effect.
- Any temporal-obligation compatibility conflict.
- Any unresolved scheduling-module path ambiguity at pre-edit review.

### 6) Next action

- Stop after this inspect-first checkpoint.
- Await explicit User/Knox approval before any `WP-EXEC-002` edits.

---

## WP-EXEC-002 Status Decision (No-Code)

Status:
- `blocked_by_missing_scheduling_authority_surface`

Reason:
- No dedicated scheduling intent/state authority module exists.
- Nearest currently-existing surfaces are projection/read-side/dispatcher modules and are not canonical D3 scheduling authority.
- `WP-EXEC-002` cannot prove scheduling intent/state boundary authority by editing outbound/dispatcher/dashboard/read-side files.

### Scheduling Authority Surface Decision (Narrow)

Question:
- Where should canonical D3 scheduling intent/state authority live?

Decision options:
1. **Option A**: Future dedicated `lib/scheduling/*` authority boundary.
2. **Option B**: Temporarily designate an existing module as authority.
3. **Option C**: Keep `WP-EXEC-002` blocked until scheduling authority boundary design is explicitly approved.

Recommendation:
- **A/C hybrid**:
  - Canonical D3 scheduling authority should live in a future dedicated `lib/scheduling/*` boundary (A).
  - `WP-EXEC-002` remains blocked until that authority surface is explicitly designed and approved (C).
  - Do not use outbound/dashboard/intake-view/dispatcher surfaces as scheduling authority.

### Non-goals (binding)

- No code edits.
- No module creation yet.
- No scheduling redesign.
- No temporal-obligation implementation.
- No D5/D6/D7 work.
- No provider/EMR work.
- No Shopify work.
- No broad D1 expansion.

Stop condition:
- Stop after recording this status decision; await explicit User/Knox direction.

---

## D3 Scheduling Authority Surface Decision (Decision-Only)

Decision scope:
- Define the canonical authority surface for D3 scheduling intent/state so `WP-EXEC-002` can be planned without authority drift.
- This is a boundary decision only. It is not code authorization.

Canonical authority location:
- Canonical D3 scheduling intent/state authority shall live in a dedicated future boundary: `lib/scheduling/*`.
- Existing runtime surfaces (`lib/outbound/*`, `lib/rules/runtime/*`, `lib/dashboard/*`, intake/read-side helpers) are integration/projection surfaces and are not D3 authority.

Authority owns:
- Canonical scheduling intent declarations (request, propose, confirm, cancel, reschedule intent forms).
- Canonical scheduling state transitions and transition invariants.
- Canonical scheduling state-change identifiers and lineage hooks for proof.
- Canonical write-side decision boundary for scheduling state (not transport/projection wrappers).

Authority does not own:
- Message channel dispatch behavior (email/SMS/in-app transport mechanics).
- Dashboard projection shaping and read models.
- Rule trigger ingress semantics outside scheduling transition authority.
- Temporal obligation full policy redesign (kept out of this decision).
- Provider/EMR integrations, D5/D6/D7 logic, Shopify or unrelated expansion.

Minimum interface contract required before unblocking `WP-EXEC-002`:
- A named scheduling authority module path under `lib/scheduling/*` (exact file names can be decided in the next checkpoint).
- A narrow typed transition API for:
  - intent submission/normalization input;
  - transition execution result with canonical state-change id;
  - trace lineage pass-through fields required by proof plumbing.
- A clear separation between:
  - authority transition functions (write-side), and
  - projection/transport adapters (read-side/outbound/dispatcher).

Non-goals (binding for this decision):
- No implementation edits in runtime TS files.
- No module creation in this step.
- No migration/schema changes.
- No behavior redesign outside naming the authority boundary.
- No attempt to complete scheduling artifact redesign in this step.

Unblock criteria for future `WP-EXEC-002` file plan:
- User/Knox approves this authority-location decision.
- A narrow file-plan maps `WP-EXEC-002` edits to the approved `lib/scheduling/*` authority surface (or explicitly re-approves an alternative with rationale).
- `WP-EXEC-002` remains blocked until the above is approved.

Scheduling artifact impact statement:
- Current scheduling artifacts are not being rewritten here.
- If any artifact currently implies authority in non-`lib/scheduling/*` surfaces, that implication must be treated as non-authoritative until explicit superseding update.

Verdict:
- `needs_user_knox_review`

---

## WP-EXEC-002 Scheduling Authority Boundary File/Interface Plan (No-Code)

Precondition acknowledgment:
- This plan is valid only under approved D3 authority posture:
  - canonical scheduling intent/state authority belongs in future `lib/scheduling/*`;
  - outbound/dispatcher/dashboard/read-side/intake-view surfaces are non-authority consumers/projections.
- `WP-EXEC-002` remains blocked for implementation until this plan is explicitly approved.

### 1) Proposed minimal `lib/scheduling/*` file list

1. `lib/scheduling/types.ts`
   - Canonical scheduling boundary types only (intent/state/transition/trace payload contracts).
2. `lib/scheduling/authority.ts`
   - Canonical authority interface definitions and exported boundary entry points (signatures only at this stage).
3. `lib/scheduling/trace.ts`
   - Scheduling trace lineage contract helpers (shape-level helpers only; no behavior redesign).
4. `scripts/test-scheduling-authority-types.ts`
   - Type-contract and boundary-shape proof script for `WP-EXEC-002`.

Notes:
- The above is the narrowest viable boundary seed. No additional files are in scope for this plan.
- No edits to existing runtime modules are authorized by this plan.

### 2) Proposed interfaces/types only (no implementation)

`lib/scheduling/types.ts` (proposed contracts):
- `SchedulingIntentKind`
  - narrow union for authority-facing intent verbs (request/propose/confirm/cancel/reschedule).
- `SchedulingIntentInput`
  - normalized authority input payload; no transport/provider fields.
- `SchedulingState`
  - canonical authority state union (names only, no policy expansion in this step).
- `SchedulingStateChange`
  - state transition record with `scheduling_state_change_id` and timestamps.
- `SchedulingTraceLineage`
  - proof lineage fields (at minimum `source_event_id`, plus optional upstream ids already used in trace plumbing).
- `SchedulingAuthorityResult`
  - `{ state_change, trace_lineage, notes? }` style output contract.

`lib/scheduling/authority.ts` (proposed signatures):
- `assertSchedulingAuthorityBoundary(input: SchedulingIntentInput): void`
  - boundary guard for authority-surface validation.
- `deriveSchedulingStateChange(input: SchedulingIntentInput): SchedulingAuthorityResult`
  - canonical state-change derivation contract (signature-level only in this plan).
- `normalizeSchedulingIntent(input: SchedulingIntentInput): SchedulingIntentInput`
  - contract for canonical normalization before derivation.

`lib/scheduling/trace.ts` (proposed signatures):
- `buildSchedulingTraceLineage(input: SchedulingTraceLineage): SchedulingTraceLineage`
- `attachSchedulingTraceLineage<T extends Record<string, unknown>>(payload: T, trace: SchedulingTraceLineage): T & { trace_lineage: SchedulingTraceLineage }`

Binding constraint:
- These are interface/type proposals only for approval; implementation behavior is out of scope.

### 3) Exact ownership boundaries

Authority (`lib/scheduling/*`) owns:
- canonical scheduling intent normalization contract;
- canonical scheduling state transition contract;
- canonical `scheduling_state_change_id`-bearing result contract;
- canonical scheduling trace-lineage contract for proof boundary.

Non-authority modules own only integration/projection concerns:
- `lib/outbound/*`: transport dispatch and delivery metadata;
- `lib/rules/runtime/*`: trigger ingress and orchestration only;
- `lib/dashboard/*`: read-side shaping/projection only;
- intake/read-side surfaces: request capture/view concerns only.

Hard rule:
- No module outside `lib/scheduling/*` may define canonical scheduling intent/state authority semantics.

### 4) Exact non-goals (binding)

- No runtime scheduling behavior implementation.
- No migration/schema creation or edits.
- No provider/EMR integration work.
- No temporal-obligation policy implementation.
- No D5/D6/D7 scope entry.
- No outbound/dispatcher/dashboard/intake behavioral redesign.
- No new meta-plan document creation.

### 5) Proposed tests (for later execution after approval)

1. `scripts/test-scheduling-authority-types.ts`
   - verifies authority contracts compile and enforce narrow boundary shapes.
2. Existing trace proof scripts as regression guard (read-only at this plan stage):
   - `scripts/test-resolve-emissions.ts`
   - `scripts/test-events-registry.ts`
   - `scripts/test-outbound-jobs-types.ts`

Test intent:
- prove the scheduling authority boundary can exist as a canonical type/interface surface without leaking ownership to non-authority modules.

### 6) Reroute triggers (binding)

- Any required edit outside proposed `lib/scheduling/*` files and listed test script.
- Any request for behavior implementation before interface-plan approval.
- Any migration/schema requirement appears.
- Any requirement to encode temporal-obligation policies now.
- Any expansion into D5/D6/D7/provider-EMR/Shopify.
- Any proposal that reassigns canonical scheduling authority to outbound/dispatcher/dashboard/read-side/intake surfaces.

### 7) Approval question

Approve creation of `WP-EXEC-002` scheduling authority boundary files?

---

## WP-EXEC-002 Checkpoint Status Update (Phases 1-2)

Status snapshot:
- `WP-EXEC-002_phase_1`: `accepted`
- `WP-EXEC-002_phase_2`: `accepted`
- `WP-EXEC-002_behavioral_implementation`: `blocked_pending_explicit_approval`

Accepted artifacts now present:
- `lib/scheduling/types.ts`
- `lib/scheduling/trace.ts`
- `lib/scheduling/authority.ts` (signature-only contract)
- `scripts/test-scheduling-authority-types.ts`

Confirmed constraints held:
- No scheduling behavior implementation.
- No transition table/state-machine policy implementation.
- No migration/schema changes.
- No edits to outbound/dispatcher/dashboard/intake as part of WP-EXEC-002 Phases 1-2.
- No temporal-obligation implementation.
- No D5/D6/D7/provider-EMR/Shopify expansion.

Gate posture (unchanged):
- D3 scheduling authority surface exists as a safe skeleton only.
- Scheduling authority truth remains anchored to `lib/scheduling/*`.
- Any move into behavioral scheduling logic requires explicit User/Knox authorization in a future checkpoint.

Stop condition:
- Stop after this status update.

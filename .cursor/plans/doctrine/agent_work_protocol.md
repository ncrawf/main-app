# Agent Work Protocol

Document type: `doctrine`
Authority: governance_binding runtime protocol for agent work packages (non-schema authority)
Status: active
Domain(s): architecture_governance, build_os, agent_execution
Lifecycle role: mandatory agent operating loop inside OMNI Build OS
Source-of-truth relationship: operational child protocol of `00_omni_coordination_charter.md`; does not supersede control-plane schema homes or Build OS gate authorities; must be cataloged/routed as runtime protocol child of Charter
Supersedes: scattered runtime-loop guidance across patch-spec drafts
Superseded by: none
Manifest action: add_tier0
Review gate: user_knox_required

---

## Applicability

This protocol is mandatory for architecture/doctrine/build/work-package execution.

An agent must run this loop:
`boot -> identify current gate/work package -> classify -> load context -> intake/route -> build-entry checks -> execute within scope -> lifecycle maintenance -> proof/stop`.

## Authority Boundary

This protocol defines required agent runtime behavior only.

It does not own:
- canonical ledger/catalog/read-graph schema contracts,
- control-plane authority routing semantics,
- Build OS gate authority.

It must always route schema-governed operations to canonical control-plane artifacts.

---

## 1) Boot

Required boot artifacts:
- `AGENTS.md`
- `00_omni_coordination_charter.md`
- `00_architecture_memory_control_plane.md`
- `04_manifest_read_graph.md`
- `09_omni_build_os_layer_model.md` (when implementation-lane work is in scope)
- `10_omni_build_os_rollout_sequence.md` (when implementation-lane work is in scope)
- `11_build_entry_gate_v0.md` (when implementation-lane work is in scope)

The implementation-lane triad (09/10/11) is also routed in `04_manifest_read_graph.md` `## Implementation-Lane Anchors`. Boot-path synchronization across these artifacts is required by `00_architecture_memory_control_plane.md` `## Boot-Path Synchronization Requirement`.

**Boot Freshness Check (do this before any architecture / doctrine / thesis / Tier-2+ work).** Compare the **Current Checkpoint Handoff** named in (a) `AGENTS.md` `## OMNI Operating References`, (b) `04_manifest_read_graph.md` Tier-0 Universal Path #15, and (c) the current-state banner of any named controlling plan. They MUST agree on: the current checkpoint, the active controlling plan, the current gate/state, and the next allowed action. **If they disagree, STOP and report the mismatch before substantive work** — a stale or duplicate pointer is the known 2026-06-13 failure (an agent booted from a stale checkpoint because two pointers had drifted). The closeout side of this rule is §8 **Checkpoint Closeout Rule**; timeless guardrail `06` `D0CKPT-GRD-001`.

If boot artifacts conflict, follow precedence defined in `00_omni_coordination_charter.md`.

---

## 2) Identify Current Gate / Work Package

Before any substantive work:
- declare current lane/domain/surface,
- declare gate status (pre-entry, entry, execution, closure),
- declare whether runtime/code edits are in scope.

No gate declaration means no execution.

---

## 2.1) Parallel Work-Package Launch and Re-Entry Contract

Applies when a parent work package authorizes **two or more concurrent lanes** that may later reconcile, depend on one another, or touch shared governance surfaces. Ordinary single-lane work does not require parallelism and does not invoke this section.

**Parentage + authority (this is not a new subsystem).** This contract is the first binding operationalization of **Build OS Layer 2 — Execution Layer** (`09_omni_build_os_layer_model.md`: lane model · work-package contract · handoff contract · lane registry + ownership map · allowed/forbidden actions) and of the `10_omni_build_os_rollout_sequence.md` Step-5 "durable multi-agent operating system" trajectory. It is the **repository / build-agent context** of the Agent Runtime & Harness (`v4_C4_agent_runtime_and_harness_capture.md`, `FWREG-010`). It is **not** the whole Build OS, **not** the whole Agent Runtime, and **not** a product/care-agent authority contract. No new "agent execution governance" system, agent-identity ontology, branch registry, or sovereign control plane is created.

**Build-vs-product firewall.** Build agents operate under the Build OS, the work-package envelope, branch scope, and repository governance. Internal-operations and user/care-facing agents may reuse generic harness mechanisms but operate under different principals, grants, capabilities, consent, policy, owning-domain commit boundaries, and liability. **Same harness law does not confer equivalent authority.** Build skills do not become product capabilities; repository branch ownership does not model patient/provider/operator authority. This section does not redefine the product Agent Runtime object model or the principal/actor/agent taxonomy.

**Parallel Launch Envelope (pre-launch requirement).** Before launch, the current checkpoint/handoff — or one bounded accepted work-package map referenced by it — MUST carry an envelope containing:
- parent work-package / gate / checkpoint;
- immutable **lane content base** commit (full SHA) — bound per the **Base-binding law** below (a governed artifact never self-stamps its own commit);
- named control-plane integrator **role key + current holder** — a transferable role, per the **Integrator-transfer law** below;
- one row per lane: human-visible title · relay key · branch · owner/seat · **environment-local** worktree path (operational only, when actually assigned — see the **Environment-local worktree law**) · exact input packet + immutable source refs (**no globs, brace expansions, ellipses, or "any accepted carrier" placeholders** — an unresolved input floor is a defective envelope) · writable scope + exact intended output object · prohibited shared surfaces · dependencies/collision surfaces · required proof · reviewer/acceptance/landing gate · stop condition;
- no-auto-launch and parent-close conditions.

**Execution law.**
1. All lanes begin from the same approved base SHA unless the envelope records a justified exception.
2. One active writer owns each branch. Agent-thread replacement does not create a new lane: a replacement agent may assume the same active clean branch, relay key, and packet after an explicit ownership transfer and freshness check.
3. A stale, closed, invalidated, or materially diverged historical branch is never resumed in place — start a fresh branch from the current approved base and cite the old branch/commit as an immutable source packet.
4. Lane agents treat envelope-named shared control-plane surfaces as read-only; they return proposed rows, lifecycle changes, and routing.
5. Only the named control-plane integrator reconciles cross-lane outputs and mutates shared control-plane surfaces.
6. A lane artifact may be committed/pushed as `review_ready_pending_integrator` with its passport + proposed routing bundle, but it is **not complete** under §5 (New Artifact Completion Rule) until the integrator lands the required catalog/read-graph/ledger/lifecycle side effects. This is not an exception to §5; completion occurs at the parent integration transaction.
7. Every review-ready lane publishes the receipt level required by collaboration-model §§2.6–2.7: Relay Endpoint Posture (when relayed) · Review Object Posture · Bounded Diff Receipt · Source Posture.
8. No lane may merge/fast-forward `main`, repoint the checkpoint, mutate a sibling lane, launch a successor phase, or declare the parent work package closed without explicit authorization.
9. The envelope tracks each lane as `not_started | active | blocked | review_ready | accepted | landed | closed` and records its current branch/head or immutable accepted pin at work-package boundaries — not every chat message.
10. Parent integration begins only after the required lane gates: source reconciliation · collision scan · shared-surface routing · lifecycle normalization · the parent closeout transaction (§8 Checkpoint Closeout Rule).
11. Tooling may create branches/worktrees or render status, but tooling is ergonomic only (Build OS Layer 3) and cannot alter the contract or authority boundaries.

**Base-binding law (no self-referential SHA stamping).** Two distinct commits govern a parallel phase and MUST NOT be conflated:
- **`lane_content_base_sha`** — the accepted **content** commit from which every child lane branch starts;
- **`current_main_state_sha`** — the later **state-only** checkpoint/receipt commit that pins that base, records branch creation and lane states, and may be the current `main` tip.

A repository artifact cannot contain its own commit SHA, so the exact lane base is **bound after acceptance**, in a state-only checkpoint/launch-receipt commit — never asserted inside the content commit it describes. Consequently a lane base is **normally one state-only commit behind current `main`**: where `main` differs from the lane base only by state-only closeout/receipt commits, the immediate accepted ancestor IS the correct lane base. This is normal and must be stated explicitly rather than mistaken for drift. Branch refs plus the post-acceptance launch receipt control; a prose phrase such as "the final post-landing `main` SHA" is **not** a binding pin, and no agent may be required to recover a base SHA from a chat transcript.

**Environment-local worktree law.** Durable, canonical lane identity = relay key · remote branch · `lane_content_base_sha` · input packet · expected output object · current branch head · ownership state. An **absolute filesystem worktree path is environment-local and NON-canonical**: record it in the launch receipt when actually assigned, never in the durable contract as identity. A replacement environment (new machine, cloud VM, fresh clone) may **recreate** the worktree from the same branch + base. Loss of a local worktree is not loss of a lane.

**Integrator-transfer law.** The named control-plane integrator is a **transferable ROLE, not a permanent chat thread** — the same "chat/model session is replaceable compute" law that governs lane writers governs the integrator. The envelope MUST carry: integrator **role key**; **current holder**; **explicit transfer** record; **freshness/collision check** on assumption; **shared-surface ownership receipt** (which surfaces this role exclusively mutates); and **parent blockers** (what cannot proceed while the role is vacant). A retired, exhausted, or replaced integrator context MUST NOT strand its lanes; the role is reassigned by explicit transfer under the same discipline as clause 2.

**Roles inside a work package (no sovereign meta-agent).** Planner, implementer, reviewer, adversary, evaluator, proof agent, and integrator are **bounded roles inside an authorized work package**. Reviewer/evaluator output is evidence or a gate input, never self-originating authority; no role manufactures authority, promotes doctrine, merges work, or commits truth merely by being "above" other agents. See `D0THES-GRD-028` (AI-as-target inversion) and `D0THES-GRD-029` (CNS-as-sovereign-brain).

**Multi-principal continuity (pointer, not restated).** Agents may act for patients, providers, caregivers, operator roles, owners, administrators, counterparties, and build functions; their authority remains principal-typed and commit-gated. Use the `subject · principal · actor · agent · role · capability · committer` taxonomy — not "everyone is a principal." Substantive lineage: `EVRUN-2026-000007_02_multi_principal_reframe_and_active_debate.md`.

**100-agent scale-out — split, not one bucket.** Automated large-scale concurrency is **not built**; the five-lane contract is human-supervised execution discipline now. The remaining debt is split:
- **Build OS / Agent Work Protocol / Command-Tool debt (Layer 2/3 + Step 5):** lane registry · branch/worktree automation · ownership leases + transfer · common-base management · merge queue · shared-surface locking · semantic collision detection · parent/child work-package scheduling · status projection · CI/policy gates · automated integration + de-scaffolding. May mature incrementally before product C5. Re-point/AI-native revamp tracked at `D0THES-REV-158`.
- **Agent Runtime / `FWREG-010` debt:** agent/session/run/subagent lifecycle · scheduler/workers/queues/leases/retries · NHI/credentials/sandbox · tool transaction boundaries · model routing + reproducibility · context routing · eval/release/monitoring/rollback. Broader spine/C5/runtime-formulation debt.

Decision ledger: `D0CKPT-DEC-005`. Guardrail: `06` `D0CKPT-GRD-002`.

---

## 3) Work Classification

Classify payload into one or more classes:
- doctrine/binding rule,
- ADR/decision,
- future work item,
- evidence/rationale,
- narrative/arc,
- handoff/continuity,
- guardrail/failure mode,
- supersession/conflict,
- open review,
- catalog/read-graph impact,
- test/invariant requirement,
- glossary/canonical terminology,
- runbook/operational procedure.

Classification output is required before write operations.

### Classification Decision Contract
For each class selected, produce:
- destination artifact home,
- update-existing vs create-new decision,
- required side-effect updates (ledger/catalog/read-graph/open-review),
- required reviewer gate (if applicable).

---

## 4) Context Loading

Load context by lane/domain/surface tags through read-graph routes:
- relevant doctrine/system map/authority routing,
- relevant ADRs,
- guardrails,
- open review queue rows,
- future work rows,
- handoff continuity artifacts (consult/routed only),
- required proof obligations.

Do not use narrative/handoff/evidence as binding authority unless explicitly promoted/routed.

---

## 5) Artifact Intake and Routing

### Row-First, Document-Second
- Update existing registry row/section by default.
- Create new standalone doc only when row/section is insufficient, prior artifact is locked, or protocol explicitly requires a new artifact.

### New Artifact Completion Rule
For every newly created architecture/process/governance markdown artifact, completion requires all of:
- document passport present (per `00_document_governance_and_taxonomy_2026-05-19.md` §3),
- artifact class/category declared,
- authority level declared,
- lifecycle role declared,
- catalog row added or updated in `01_master_corpus_catalog.md`,
- read-graph impact evaluated with either route update in `04_manifest_read_graph.md` or explicit `no-route-needed` reason,
- if classification/routing is uncertain, open-review row created in `08_open_review_queue.md` with owner and review gate.

A new artifact is not complete merely because the file exists. If passport/catalog/read-graph disposition is missing, the artifact remains provisional and the work package may not stop as complete.

This rule applies uniformly across all artifact classes (ADR, doctrine, narrative, handoff, registry, patch-spec, future doc, etc.) — no per-class exception.

### Governed Stream Artifact Operating Contract Pointer

If a newly created artifact is a **governed-stream artifact** (ledger, registry, archive, queue, append-only index, volumed artifact, or recurring governance artifact), the New Artifact Completion Rule above is necessary but not sufficient. The artifact MUST also include an Operating/Maintenance Contract in the same pass per `.cursor/plans/doctrine/00_architecture_memory_control_plane.md` Enforcement Rule 7 and the dedicated `## Governed Stream Artifact Operating Contract Rule` section. See that section for the 9 Minimum Contract Elements (purpose/scope, what belongs, what does not belong, entry/update format, lifecycle states, append/update/close rules, authority boundary, catalog/read-graph impact, stop-report proof requirement).

Existing governed-stream artifacts that lack a clear Operating Contract must be retrofitted on next substantive touch. The protocol does not redefine Rule 7 here; it routes through the canonical destination above and reports completion via the §9 stop report.

### Routing Requirements
When meaningful work occurs, route to appropriate artifacts:
- ADR,
- doctrine/system map/rule slice,
- decision/evidence ledgers,
- guardrail digest,
- supersession/conflict ledger,
- open review queue,
- catalog row updates,
- read-graph updates,
- handoff artifacts,
- future work registry updates.

Use canonical schemas in existing control-plane artifacts; no parallel schema formats.

### Routing Decision Rules (Minimum)
- **ADR vs Doctrine**
  - Use ADR for a specific architecture decision selecting one approach over alternatives.
  - Use doctrine/system-map/rule-slice when defining/updating persistent binding rules or boundaries.
- **Narrative vs Binding**
  - Narrative is rationale/history only unless promoted.
  - Binding authority must land in ADR/doctrine/gate destinations.
- **Guardrail vs Open Review vs Supersession**
  - Guardrail: repeatable failure mode/anti-pattern.
  - Open review: unresolved question/approval dependency.
  - Supersession/conflict: prior interpretation/doc replaced, narrowed, or contradicted.
- **Evidence**
  - Evidence informs routing/decision; does not auto-bind.
- **Handoff**
  - Continuity artifact only until routed/processed.

### Narrative Handling Rule
- Decide arc action explicitly: `same_arc_addendum` or `new_volume`.
- Maintain narrative lifecycle: `active_open` / `snapshot_locked` / `closed_superseded_by:*`.

### Handoff Minimum Contract
Handoff artifacts must include:
- state snapshot and scope complete,
- changed artifacts/files/commits,
- verification/proof outputs (or deferred reason),
- settled decisions not to re-litigate,
- unresolved assumptions/questions,
- next gate and stop condition.

### Template / Schema Sources (Canonical)
- ADR pattern: `docs/architecture/*adr*.md`
- Handoff pattern: `.cursor/plans/HANDOFF_*.md`
- Decision ledger schema: `.cursor/plans/doctrine/03_decision_extraction_ledger.md`
- Evidence ledger schema: `.cursor/plans/doctrine/07_evidence_ingestion_ledger.md`
- Guardrail schema: `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md`
- Supersession/conflict schema: `.cursor/plans/doctrine/05_supersession_conflict_ledger.md`
- Open review schema: `.cursor/plans/doctrine/08_open_review_queue.md`
- Catalog schema: `.cursor/plans/doctrine/01_master_corpus_catalog.md`
- Read graph schema: `.cursor/plans/doctrine/04_manifest_read_graph.md`
- Future work schema: `.cursor/plans/doctrine/future_work_registry.md` (target canonical home)

---

## 6) Build-Entry Checks (Pre-Edit)

Before implementation-lane edits:
- declare lane/domain/surface tags,
- retrieve matching future work rows by tags/trigger,
- retrieve matching open review and guardrail rows,
- retrieve relevant ADR/doctrine/domain-contract anchors,
- declare dispositions for matched future work (`preserve_invariant_only|keep_parked|promote|open_review|reject_stale`),
- declare proof obligations to run.

If no matching future work rows exist, explicitly report:
`Future Work Registry checked; no matching rows found.`

### Composition Discipline (Governed Temporary Coherence) Pointer
Build-entry admission for consequential lanes must satisfy the Foundational Composition Admission Checklist in `11_build_entry_gate_v0.md`. This checklist is the runtime enforcement of Governed Temporary Coherence doctrine ratified in `system_map_three_layers_60706286.plan.md`, `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` §10.1, guardrail digest `D0-GRD-013..017`, and decision/evidence ledger rows `D0GCI-DEC-001`/`D0GCI-EVD-001`.

The protocol does not redefine this doctrine; it routes through the binding destinations above and reports composition-proof completion in stop reports per §9.

### Future Work Registry Contract
Future work includes both seams and features/capabilities.

Required row fields:
- `work_id`
- `item_type` (`architecture_seam` | `product_capability` | `surface_feature` | `integration_future` | `business_ops_future` | `clinical_ops_future` | `infrastructure_future`)
- `title`
- `domain_tags`
- `lane_tags`
- `affected_surfaces`
- `status` (`parked` | `watch` | `candidate` | `promoted` | `rejected`)
- `why_not_now`
- `what_to_preserve_now`
- `promotion_trigger`
- `build_entry_trigger`
- `risk_if_forgotten`
- `risk_if_built_too_early`
- `related_docs`
- `owner_or_review_gate`
- `last_reviewed_at`
- `next_review_condition`

No-empty-registry rule:
- Registry must be seeded with known high-value rows or explicit open-review debt must be created for deferred seeding backlog.

---

## 7) Execution Constraints

During execution:
- stay within declared scope,
- do not bypass routing requirements,
- do not introduce unratified primitives,
- do not perform unauthorized runtime/governance changes outside approved gate,
- for parallel work packages, additionally comply with §2.1 (Parallel Work-Package Launch and Re-Entry Contract).

---

## 8) Lifecycle Maintenance (Post-Work)

For touched artifacts, apply explicit lifecycle disposition:
- future work: promoted/parked/rejected/stale with reason,
- open review: closed/split/open with reviewer/gate state,
- supersession/conflict: updated when interpretation changed,
- narrative: lifecycle status updated,
- handoff: processed/routed/demoted semantics,
- catalog/read-graph: current/stale routing updates.

No stale artifact should remain without explicit reason.

### Future Work Lifecycle Rule
If future work is now implemented/accepted into current scope:
- mark `promoted`,
- link to destination ADR/doctrine/build artifact/work package.

If no longer valid:
- mark `rejected` with reason.

If still deferred:
- keep `parked/watch` and update review condition.

Future work must not remain perpetually deferred after implementation.

### Open Review Gap Routing Rule
When unresolved mechanics/canonical-home gaps remain, create or update explicit open-review rows with owner, closure criteria, and recovery trigger.

### Checkpoint Preservation Rule

**Preservation is the default, not the exception.** At every stop, classify the checkpoint tier by objective markers (table below). Required preservation artifacts scale with the tier. Stop reports alone (which live in conversation) only satisfy Tier 1.

**Default-up rule: if classification is uncertain, choose the higher tier.** Over-preservation is recoverable; under-preservation is not.

#### Tier classification

| tier | objective markers (ANY trigger except Tier 1 which requires ALL) | required output |
|---|---|---|
| **1 — micro** | NO commit AND NO Tier 0/0.5/1 governance file touched AND NO new artifact created AND NO doctrine/schema/rule change AND change is truly trivial (typo, comment, single-line note) | stop report only (in conversation) |
| **2 — work-package** | a **work-package close** is reached: session ends; OR user/agent explicitly declares a sub-work-package boundary mid-session; OR a coherent scope completes with one or more commits (e.g., "add feature X", "fix bug Y", "land doctrine update Z"); OR phase boundary is crossed. Intermediate commits inside an open work package roll into the package's final checkpoint; not every micro-commit produces a separate handoff. Default: one work-package per session unless explicitly sub-divided. | stop report + durable **handoff artifact** (`.cursor/plans/HANDOFF_YYYY-MM-DD_<slug>.md` per §5 Handoff Minimum Contract) |
| **3 — major arc** | spans 3+ Tier-0 governance artifacts; OR changes boot path / gates / routing semantics / lifecycle / authority boundaries; OR creates or activates an operating layer; OR resolves a repeated agent/process failure mode; OR crosses a phase boundary; OR spans multiple sessions or multiple commits | Tier 2 + **narrative volume** (`docs/architecture/evolution_narrative_volume_N_YYYY-MM-DD.md` per `narrative_or_postmortem` pattern) |
| **4 — canonization** | binding doctrine added or rule changed (Schema Lock, Enforcement Rules, Operating Contracts, Read-Graph Operating Contract, Archive Operating Contract, etc.) | Tier 3 + **decision ledger row** in `03_decision_extraction_ledger.md` + **supersession/conflict ledger update** if prior interpretation was replaced |

#### Handoff minimum (Tier 2+)

Use the §5 Handoff Minimum Contract: state snapshot + scope complete, changed artifacts/files/commits, verification/proof outputs (or deferred reason), settled decisions not to re-litigate, unresolved assumptions/questions, next gate + stop condition, source-of-truth load order. Add explicit `Stop condition for this handoff` so the next checkpoint can mark it superseded.

#### Narrative minimum (Tier 3+)

Use the existing `narrative_or_postmortem` pattern (see `docs/architecture/evolution_narrative*.md` for shape): where the arc started, why the jump/pivot happened, what was discovered, what got built, what mistakes were corrected, canonical binding pointers (non-binding narrative routes to them, does not become them), what remains unresolved. Non-binding; cite canonical destinations, not the narrative.

**Prior-narrative consultation obligation (Tier 3+):** A Tier 3+ narrative does NOT replace prior narrative arcs. Each new major narrative volume MUST include a "Prior arcs consulted" section listing relevant prior narrative volumes (or explicitly stating "no prior arcs relevant" with reason). New volumes point backward to relevant prior arcs and forward to current canonical/binding homes. Older narratives remain valid historical rationale; do not assume the latest volume supersedes them unless explicitly so stated.

**Guardrail extraction obligation (Tier 3+):** When a Tier 3+ narrative surfaces timeless lessons, recurring failure modes, or anti-patterns, those lessons MUST be extracted into `06_guardrail_antipattern_digest.md` as new guardrail rows in the same checkpoint. Each new guardrail row must include `source_evidence` pointing back to the narrative volume and `notes` pointing to the canonical binding destination if one exists. Extract only reusable, future-agent-relevant lessons — not vague slogans, not session-specific observations. The narrative is the chronicle (consulted by agents working in the affected domain); the guardrail is the rule (always loaded at boot via Tier 0.5 boot-visible surface). This is the structural answer to recency bias: timeless lessons survive in the always-visible surface, while narrative remains discoverable for context.

#### Canonization minimum (Tier 4)

Per existing §5 Routing Requirements: doctrine/system map/rule slice update in canonical home + decision ledger row (`03_decision_extraction_ledger.md`) + supersession/conflict ledger row (`05_supersession_conflict_ledger.md`) if prior interpretation replaced + catalog row update + read-graph route impact evaluation.

#### Checkpoint Closeout Rule (the boot path must move with the work)

**A Tier 2+ gate / handoff / phase / control-plane update / major planning arc is NOT "closed" until the boot path points the next agent to the new state — even if the work product already exists.** On every Tier 2+ checkpoint, in the **SAME closeout commit**:
1. write or update the **current checkpoint handoff** (§5 Handoff Minimum Contract);
2. repoint **`AGENTS.md` `## OMNI Operating References` Current Checkpoint Handoff** to it;
3. repoint **`04_manifest_read_graph.md` Tier-0 Universal Path #15 Current Checkpoint Handoff** to it — **(2) and (3) MUST name the same file; duplicate-pointer drift between them is the known failure (2026-06-13: AGENTS on 06-10, read-graph on 06-06, both stale)**;
4. update the **named controlling plan's current-state banner** (gate/state + next allowed action), if one exists;
5. add owed **catalog (`01`) / read-graph (`04`)** rows for new artifacts, or explicitly mark them owed;
6. mark prior checkpoints **historical-only**.

**"Closeout commit" = the commit that CLAIMS the gate/phase/arc closed — NOT every intermediate commit.** Intermediate commits inside an open work package roll up into the package's final checkpoint (per the §8 Tier classification + `D0CKPT-DEC-002`); the repoint obligation fires only at the closure that declares the work done.

**Law (burned in): work is not complete until the next agent boots to the right state.** This hardens the Control Plane `## Boot-Path Synchronization Requirement` for the current-checkpoint pointer specifically; the boot-side detector is §1 **Boot Freshness Check**, and the timeless guardrail is `06` `D0CKPT-GRD-001`. The prior handoff stays in the catalog as historical reference.

#### Why this rule exists

The first major arc closure (Tier-0 governance activation, 2026-05-22 → 2026-05-23) revealed the failure mode: the OS treated preservation as a §5 routing audit ("do we owe an ADR / ledger / handoff?") rather than as routine state preservation. Commit messages, catalog notes, and queue closure notes were treated as sufficient continuity. They are not. Future agents picking up a major arc need narrative-level context AND operational handoff, not just an audit log. This rule prevents the same miss from recurring.

---

## 9) Proof and Stop Report

Stop report must include:
- gate/work package declaration,
- files changed,
- proof/tests run (or deferred reason),
- artifact routing checklist results,
- lifecycle updates applied,
- unresolved assumptions/risks,
- `template_schema_references_used`,
- `schema_deviation:none|yes_with_reason`,
- `legacy_row_compatibility_notes` (if applicable),
- `new_artifacts_created` (list of paths, or `none`),
- `new_artifact_completion_proof` per §5 New Artifact Completion Rule for each path (passport, catalog, read-graph evaluation, authority level, lifecycle role, open-review row if uncertain). If the new artifact is a **governed-stream artifact** (per the definition in `00_architecture_memory_control_plane.md` `## Governed Stream Artifact Operating Contract Rule`), `new_artifact_completion_proof` must additionally include Operating/Maintenance Contract proof covering all Minimum Contract Elements per Enforcement Rule 7,
- `new_artifact_provisional_items` (`none` or listed with owner and review gate),
- `checkpoint_tier`: `1` | `2` | `3` | `4` (per §8 Checkpoint Preservation Rule; default UP if uncertain),
- `checkpoint_artifact_path`: path to durable handoff artifact, or `tier_1_in_conversation_only` if Tier 1,
- `narrative_artifact_path`: path to narrative volume, or `not_required_for_this_tier` if Tier 1 or 2,
- `prior_narratives_consulted`: for Tier 3+, list of prior narrative volume paths consulted (or `no_prior_arcs_relevant` with reason); for Tier 1 or 2, `not_required_for_this_tier`,
- `guardrail_rows_extracted`: for Tier 3+, list of guardrail row IDs added/updated in `06_guardrail_antipattern_digest.md` (or `no_timeless_lessons_surfaced` with reason); for Tier 1 or 2, `not_required_for_this_tier`,
- `canonical_updates`: list of doctrine/ledger/registry/read-graph paths updated, or `not_required_for_this_tier` if Tier 1, 2, or 3,
- **parallel work-package fields (§2.1)** — each `not_applicable` outside parallel work: `parallel_parent_key`, `parallel_lane_key`, `parallel_branch`, `parallel_owner_or_transfer`, `lane_content_base_sha`, `current_main_state_sha`, `integrator_role_key`, `integrator_holder_or_transfer`, `worktree_path_posture`, `sibling_lane_states`, `shared_surface_changes_proposed`, `collision_check`, `reentry_source_ref`, `parent_close_blockers`. The earlier single-value `parallel_base_sha` and `control_plane_integrator` names are **superseded** — by the two-level base pair and the integrator role pair respectively (§2.1 Base-binding law + Integrator-transfer law); do not emit the ambiguous single-value forms,
- next gate.

Stop is blocked if `new_artifacts_created` is non-empty and any path lacks completion proof.

**Stop is also blocked if `checkpoint_tier >= 2` and `checkpoint_artifact_path` is missing/blank; or if `checkpoint_tier >= 3` and `narrative_artifact_path` OR `prior_narratives_consulted` OR `guardrail_rows_extracted` is missing/blank; or if `checkpoint_tier == 4` and `canonical_updates` is missing/blank.** Preservation existence is mandatory at the declared tier; under-declaring the tier to avoid producing artifacts violates the default-up rule.

---

## 10) Non-Loss Requirement

Accepted mechanics from source material must be preserved or explicitly demoted/deferred with reason and recovery trigger.

No silent drops.

## 11) Coverage and Gap Tracking Requirement

Before wiring/execution approval:
- produce and review `agent_work_protocol_coverage_audit_2026-05-22.md`,
- ensure every mechanic is mapped, mapped_partial with explicit closure path, or unresolved_gap with explicit open-review tracking,
- block wiring if unresolved gaps lack destination and tracking.

This prevents protocol flattening during wiring.

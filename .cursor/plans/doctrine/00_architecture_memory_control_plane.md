# OMNI Architecture Memory Control Plane

Document type: `doctrine`
Authority: Binding governance mechanism for architecture memory handling
Status: Active
Domain(s): architecture_governance, doctrine_memory, agent_boot
Lifecycle role: Control-plane specification and enforcement source
Source-of-truth relationship: Canonical boot-rule source for AGENTS/system-map/read-graph cross-references
Supersedes: ad-hoc memory/extraction-only workflows
Superseded by: none
Manifest action: Tier 0 governance entrypoint
Review gate: User/Knox approval required for boot-rule semantic changes

---

## Purpose + Boundaries

Prevent architecture drift by enforcing a control-plane mechanism where every source file and durable decision is:
- classified
- routed to a canonical home
- supersession-tracked
- read through a governed graph

This file is the **single canonical boot-rule source for architecture memory governance and control-plane artifact handling**.

### Owns

- file classification and authority routing
- catalog registration contract
- decision/evidence preservation routing
- supersession/conflict tracking
- open review and unresolved-question routing
- lifecycle/disposition routing and schema discipline
- guardrail memory and anti-shrouding guardrail family
- read-graph integration semantics
- schema lock for all governance enums
- drift audit obligation

### Does Not Own

- layer-coordination doctrine — lives in Coordination Charter
- lifecycle freshness at coordination level — lives in Coordination Charter
- agent runtime sequencing — lives in Agent Work Protocol
- lifecycle maintenance enforcement and stop proof — lives in Agent Work Protocol
- staged execution / gate / proof obligations — lives in Build OS
- implementation-lane admission rules — lives in Build Entry Gate v0
- runtime code/scope behavior — lives in Agent Work Protocol §7

---

## Mandatory Boot Sequence

Before architecture/process work:
1. Read system-map binding anchor.
2. Read `01_master_corpus_catalog.md`.
3. Read `02_authority_routing_map.md`.
4. Read `04_manifest_read_graph.md` for active domain/workstream.
5. Check `05_supersession_conflict_ledger.md` and `08_open_review_queue.md`.

This sequence covers memory-governance boot. Agent runtime sequencing still follows `AGENTS.md` and `agent_work_protocol.md`; implementation-lane admission still follows Build OS + Build Entry Gate.

---

## Coordination Charter Pointer (Non-Superseding)

- Coordination Charter: `.cursor/plans/doctrine/00_omni_coordination_charter.md`.
- Agent Work Protocol: `.cursor/plans/doctrine/agent_work_protocol.md`.
- This Control Plane remains the canonical authority/schema spine.
- Charter coordinates layers; Protocol governs runtime behavior. Neither owns control-plane schemas.
- Stop-rule reference: Agent Work Protocol §9 stop-rule fields apply to architecture/build work packages.

---

## Enforcement Rules

1. If a file is not cataloged, it is provisional.
2. If a decision is not routed, it is not preserved.
3. Ingestion artifacts are evidence unless canonized through routing.
4. Handoffs are continuity artifacts until processed/routed.
5. Historical/rationale/evidence docs are non-binding unless explicitly promoted.
6. No new architecture/process markdown is valid without passport + immediate catalog registration + read-graph impact evaluation.
7. **Governed-stream artifacts** (ledger, registry, archive, queue, append-only index, volume, or recurring governance artifact) require an Operating/Maintenance Contract in the same pass as creation. See `## Governed Stream Artifact Operating Contract Rule` below.

## New-Document Intake Protocol (Always-On)

To prevent future full-corpus rescan recovery work:

1. Any new in-scope architecture/process markdown must, in the same change set:
   - include the required document passport,
   - receive a `01_master_corpus_catalog.md` row,
   - receive initial routing metadata (`category`, `authority_level`, `agent_read_rule`, `semantic_read_required`, `handling_state`, `extraction_wave`, `work_package`),
   - receive read-graph impact evaluation: route update or explicit `no-route-needed` reason.
2. If classification is uncertain, row must be created as `needs_classification` plus an explicit review-queue item.
3. Uncataloged in-scope docs are provisional/non-authoritative and must not be treated as binding.
4. Do not defer catalog registration to a later tranche; registration is part of document creation completion.

---

## Governed Stream Artifact Operating Contract Rule

A **governed-stream artifact** is any artifact intended to receive append/update/closure activity over time, including but not limited to:
- ledgers (decision, evidence, supersession/conflict),
- registries (future work, capability, invariant),
- archives (read-graph history, lifecycle archive, addendum archive),
- queues (open review, work-package),
- append-only indices,
- volumed artifacts (any artifact that may spawn additional dated volumes),
- recurring governance artifacts (audits, drift sweeps, hygiene checkpoints).

### Rule

Any governed-stream artifact created after this rule is locked must include an **Operating/Maintenance Contract** in the same pass as the artifact's creation. Existing governed-stream artifacts that lack a clearly identified Operating Contract must be retrofitted on next substantive touch.

### Minimum Contract Elements

The Operating Contract must cover, at minimum:

1. **Purpose / Scope.** What the artifact is for.
2. **What belongs.** Positive list of content classes that may be added.
3. **What does NOT belong.** Negative list with explicit routing to canonical alternatives (narrative arc, decision ledger, evidence ledger, handoff, future work registry, main routing surface, etc.).
4. **Entry / Update Format.** Required fields or mini-header for new entries; field schema if tabular.
5. **Lifecycle States.** Allowed status values and transitions for entries (and the artifact itself if it is volumed).
6. **Append / Update / Close Rules.** Append-only vs editable; how supersession is recorded; whether modification of historical bodies is allowed.
7. **Authority Boundary.** What the artifact may and may not authorize. Non-authority assertions repeated for emphasis.
8. **Catalog / Read-Graph Impact.** How the artifact and its updates show up in `01_master_corpus_catalog.md` and `04_manifest_read_graph.md`.
9. **Stop-Report Proof Requirement.** What disposition/registration must appear in the Protocol §9 stop report when this artifact is touched (per Agent Work Protocol §9 + the artifact's own local proof requirements).

### Rationale (Loop Closure)

This rule exists because three consecutive governed-stream artifacts (Future Work Registry, Architecture Artifact Routing Protocol, Read-Graph History Archive) each required a retroactive maintenance hardening pass that should have happened at creation. Without this rule, every new stream artifact risks repeating the same loop.

### Retrofit Posture

This rule does not force a sweep of existing artifacts. The obligation is:
- Forward-looking for new governed-stream artifacts.
- Triggered for existing governed-stream artifacts only on next substantive touch (next edit beyond minor metadata changes).
- Recorded as `needs_operating_contract` in the catalog `notes_or_extracted_decisions` field when an existing artifact is identified as lacking a contract during routine governance work.

---

## Classification + Routing

Every in-scope file is classified by category, authority, and routing semantics. Canonical schemas live in their own files; this section is the control-plane overview only.

- Category enum, authority enum, status enum, manifest_action enum, review_gate enum, agent_read_rule enum, lifecycle_role enum: see Schema Lock v0 below.
- File inventory + per-file classification: `01_master_corpus_catalog.md`.
- Category → canonical_home + read/update/retirement rules: `02_authority_routing_map.md`.
- Domain/workstream read routing: `04_manifest_read_graph.md`.

Routing principle: a file's category and authority determine where it lives, how it is read, and whether it can be cited as binding. Classification is mandatory before authority use.

---

## Decision / Evidence Preservation

Durable decisions and the evidence that informed them are preserved through dedicated ledgers; this section is the control-plane overview only.

- Decision routing record: `03_decision_extraction_ledger.md` (decision_id, source_file, decision_summary, domain, canonical_destination, status, notes).
- Evidence basis: `07_evidence_ingestion_ledger.md` (evidence_id, source_file, observed_feature, domain_implicated, decision_target, anti_copy_warning, status, notes).

Preservation principle: a decision that is not routed to a canonical destination is not preserved. Evidence informs routing; it does not auto-bind. Promotion of evidence to doctrine requires explicit decision/review closure.

---

## Supersession / Conflict + Open Review

Replaced, narrowed, contradicted, or unresolved material is tracked through dedicated ledgers; this section is the control-plane overview only.

- Supersession / conflict ledger: `05_supersession_conflict_ledger.md` (item_id, conflicting_with, conflict_type, winning_authority, resolution_status, superseded_by, review_gate, notes).
- Open review queue: `08_open_review_queue.md` (review_id, source_file, issue_summary, domain, risk_if_unresolved, proposed_destination, required_reviewer, status, notes).

Resolution principle: a conflict is resolved only when winning authority is explicit; an open review is closed only when verdict + canonical destination + closure criteria are recorded per the queue-governance contract in `08_open_review_queue.md`.

---

## Lifecycle Closure

At work-package / phase / lane closure, touched artifacts require explicit disposition. Stale artifacts must not remain in an outdated state without explicit reason.

Required dispositions:
- Future work: `promoted` / `parked` / `watch` / `rejected` / `candidate` with reason.
- Open review: `closed` / `closed_split_to_children` / `open` with reviewer/gate state and closure criteria.
- Supersession / conflict: updated when interpretation is replaced, narrowed, or contradicted.
- Narrative: lifecycle status (`active_open` / `snapshot_locked` / `closed_superseded_by:*`) updated as arc progresses.
- Handoff: processed / routed / demoted as continuity artifact, not binding authority.
- Catalog / read graph: current vs stale routing/authority updates.

This contract is enforced operationally through:
- `00_omni_coordination_charter.md` Lifecycle Freshness Contract (coordination-level freshness),
- `agent_work_protocol.md` §8 Lifecycle Maintenance and §9 Stop Report (runtime enforcement),
- this Control Plane (lifecycle/disposition routing and schema discipline).

No touched artifact may remain stale, deferred, or ambiguously current without explicit disposition. No artifact remains perpetually deferred after implementation.

---

## Guardrail Memory

Guardrail memory records cross-cutting anti-patterns and non-repeatable failure modes for routing/extraction discipline. It supports read-graph and routing decisions; it does not override doctrine locks.

- Canonical home: `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md`.
- Row schema and severity/enforcement ratification semantics live in that file.
- Anti-shrouding is one guardrail family within this broader memory; its specific contracts follow below.

---

## Anti-Shrouding Guardrail Family

Anti-shrouding is one guardrail family within control-plane memory governance. It prevents durable intelligence from being hidden inside files whose category or authority labels would otherwise allow handling-state transitions without payload accounting.

### Anti-Shrouding Rule (Binding)

Category and authority labels control whether a file can be cited as binding authority.
They do not control whether a file can contain durable intelligence.

For any file with `semantic_read_required=yes`, extraction must check for:
- hidden decisions
- rationale and rejected alternatives
- pivots and guardrails
- stale/superseded language
- evidence relationships
- open questions

Non-binding means "cannot be cited as direct authority."
It does not mean "contains no valuable payload."

### Anti-Shrouding Validation Gate (Blocking)

A file may not be marked `routed`, `processed`, `demoted`, `archived`, or `deferred` unless `notes_or_extracted_decisions` states one of:
1. durable payload extracted and where it was routed, or
2. no durable payload found, with reason, or
3. deferred with explicit reason and review gate.

If the gate is not satisfied, handling-state transitions are invalid.

### Anti-Shrouding Stage-Entry Gate (Always-On)

Before any new extraction tranche/wave starts, the operator must record a stage-entry check that states:
1. active workstream and source set,
2. anti-shrouding disposition method to be used (`durable_payload_extracted` / `no_payload_with_reason` / `deferred_with_reason_and_gate`),
3. destination ledger(s) for routed payloads,
4. closure row contract fields that will be required at tranche close.

If this stage-entry check is missing, the tranche is considered non-compliant and should not proceed.

### Prospective + Retrospective Application Policy

- Prospective enforcement starts at Wave 3D and is mandatory for all subsequent extraction waves.
- Waves 1-3C are not reopened by default during gate installation.
- Retrospective anti-shrouding audit is tracked as a bounded backlog item and runs at a scheduled control-plane checkpoint unless a concrete missed critical payload is detected earlier.

#### Retro Re-Scan Trigger Policy (Always-On)

Do not re-run all prior waves by default. Trigger a targeted retrospective re-scan only when one of these occurs:
- contradiction between catalog/read-graph/review/conflict ledgers,
- newly introduced doctrine changes interpretation of previously routed evidence,
- closure row fails anti-shrouding contract fields,
- a concrete hidden critical payload is identified.

When triggered, run a bounded scope re-scan and record decision/evidence rows for the trigger and outcome.

---

## Scope Discovery Rule

Control-plane discovery scope is collapsed and non-excluding:
- `.cursor/plans/**/*.md`
- `docs/**/*.md`
- `AGENTS.md`
- `CLAUDE.md` (if present)
- `README.md` (if present)

Relevance is determined by catalog classification and routing, not path omission.

---

## Control Plane Artifacts

1. `01_master_corpus_catalog.md`
2. `02_authority_routing_map.md`
3. `03_decision_extraction_ledger.md`
4. `04_manifest_read_graph.md`
5. `05_supersession_conflict_ledger.md`
6. `06_guardrail_antipattern_digest.md`
7. `07_evidence_ingestion_ledger.md`
8. `08_open_review_queue.md`

Adjacent lifecycle artifact: `future_work_registry.md` indexes parked/deferred work and is consulted through Build Entry retrieval; it is not a core control-plane schema ledger unless promoted by routing.

---

## Schema Lock v0 (Required Before Classification)

Use only these enums during Phase B corpus classification.

### `category_enum`
- `manifest_or_catalog`
- `canon_digest`
- `doctrine`
- `adr`
- `domain_rule_slice`
- `audit_or_pressure_test`
- `evidence_or_ingestion`
- `narrative_or_postmortem`
- `handoff_or_readiness_gate`
- `future_or_parked_watch`
- `needs_classification`

### `authority_level_enum`
- `binding_core`
- `binding_domain`
- `governance_binding`
- `derived_nonbinding`
- `rationale_nonbinding`
- `evidence_nonbinding`
- `historical_nonbinding`
- `provisional`

### `current_status_enum`
- `active`
- `draft`
- `review_required`
- `parked`
- `superseded`
- `deprecated`
- `archived`
- `provisional`

### `manifest_action_enum`
- `none`
- `add_tier0`
- `add_tier1`
- `add_tier2`
- `demote`
- `supersede_link`
- `review_queue`
- `retire`

### `review_gate_enum`
- `none`
- `user_knox_required`
- `domain_owner_required`
- `architecture_steward_required`

### `agent_read_rule_enum`
- `tier0_mandatory`
- `tier05_visible`
- `domain_mandatory`
- `consult_if_routed`
- `historical_only`
- `do_not_treat_as_binding`

### `lifecycle_role_enum`
- `canonical_authority`
- `routing_index`
- `decision_record`
- `guardrail_digest`
- `evidence_registry`
- `review_queue`
- `workbench_scaffold`
- `historical_record`

### Supplemental Passport Fields for Governed-Stream Artifacts

Governed-stream artifacts (per the Governed Stream Artifact Operating Contract Rule above) MAY use these supplemental passport fields in addition to the standard passport schema. These fields do **not** replace `Status` (which describes document lifecycle); they describe volume/append lifecycle for streamed artifacts.

- `Volume: <integer>` — sequential volume number (1, 2, 3, ...). Required if any companion volume field is used.
- `Volume state: open_for_append | closed` — write semantics for this volume file. `open_for_append` = file is actively maintained; new entries may be added per the artifact's Operating Contract. `closed` = file no longer receives append; spawn-successor required if more append is needed.
- `Spawned: <YYYY-MM-DD> (<reason>)` — date this volume was created and the reason (e.g., "first extraction from <source>", "Volume Spawn Rule threshold reached", "phase close (<phase-id>)").
- `Next volume: <path> | TBD` — pointer to the next volume's path once a spawn occurs; `TBD` until the spawn condition is met.

Semantic clarifications:
- `Status` describes the document's lifecycle (active / archived / superseded / etc.).
- `Volume state` describes the volume's append lifecycle.
- A volume can be `Status: active` (file maintained) and `Volume state: open_for_append` simultaneously, OR `Status: archived` (file frozen) and `Volume state: closed` simultaneously.
- An archive volume's CONTENT may be permanently historical-only regardless of `Status` or `Volume state`; content semantics are governed by the artifact's Operating Contract, not by these fields.
- These fields are **supplemental**: artifacts that are not governed-stream artifacts should not use them.

---

## Boot-Path Synchronization Requirement

`AGENTS.md`, system-map entrypoint, `.cursor/plans/doctrine/00_omni_coordination_charter.md`, `.cursor/plans/doctrine/agent_work_protocol.md`, this file, and `04_manifest_read_graph.md` must either:
- share equivalent boot-rule semantics, or
- cross-reference this file as canonical source for memory-governance boot.

For implementation-lane work, `.cursor/plans/doctrine/09_omni_build_os_layer_model.md`, `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md`, and `.cursor/plans/doctrine/11_build_entry_gate_v0.md` must also remain synchronized with this control-plane boot contract.

If synchronization is broken, architecture/governance/build-entry work that depends on the broken path is blocked until reconciled.

---

## Drift Audit Requirement

Recurring governance audits must include:
- boot-path drift audit
- stale document audit
- orphan decision audit
- supersession conflict audit
- unprocessed handoff audit
- evidence-not-routed audit


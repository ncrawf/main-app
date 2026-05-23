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

If boot artifacts conflict, follow precedence defined in `00_omni_coordination_charter.md`.

---

## 2) Identify Current Gate / Work Package

Before any substantive work:
- declare current lane/domain/surface,
- declare gate status (pre-entry, entry, execution, closure),
- declare whether runtime/code edits are in scope.

No gate declaration means no execution.

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
- do not perform unauthorized runtime/governance changes outside approved gate.

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
- next gate.

Stop is blocked if `new_artifacts_created` is non-empty and any path lacks completion proof.

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

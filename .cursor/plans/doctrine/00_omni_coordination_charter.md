# OMNI Coordination Charter

> The meta-layer that coordinates the Architecture Memory Control Plane, the OMNI Build OS, and the Agent Work Protocol. Coordination only — does not own schemas or execution gates.

Document type: `doctrine`
Authority: governance_binding coordination doctrine for work-system layering
Status: active
Domain(s): architecture_governance, build_os, agent_execution
Lifecycle role: tier0 coordination map and interface contract
Source-of-truth relationship: defines how Control Plane, Build OS, Agent Work Protocol, AGENTS boot, read-graph routing, build-entry checks, and lifecycle maintenance connect; does not supersede control-plane schema authorities; catalog/read-graph must route this artifact as coordination doctrine and `00_architecture_memory_control_plane.md` as authority/schema spine
Supersedes: scattered coordination assumptions across patch-spec discussions
Superseded by: none
Manifest action: add_tier0
Review gate: user_knox_required

---

## Purpose

This charter is the top coordination doctrine for OMNI work execution.

It prevents conceptual collapse by separating:
- what is authoritative memory and routing truth,
- what governs staged/gated execution,
- what an individual agent must do while executing a work package.

This charter is non-optional for architecture/doctrine/build/work-package work.

---

## Layer Model (Locked)

1) **Architecture Memory Control Plane**
- Owns authority/routing truth and memory governance.
- Canonical homes: catalog, authority routing map, decision/evidence ledgers, guardrails, supersession/conflict ledger, open review queue, read-graph semantics.

2) **OMNI Build OS**
- Owns staged/gated execution model.
- Canonical homes: rollout sequence, build-entry admission criteria, phase/lane progression, proof obligations, lifecycle closure/de-scaffolding.
- Binding composition discipline (Governed Temporary Coherence) enforced via `11_build_entry_gate_v0.md` Foundational Composition Admission Checklist; ratified in `system_map_three_layers_60706286.plan.md`, `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` §10.1, guardrail digest `D0-GRD-013..017`, and decision/evidence ledger rows `D0GCI-DEC-001`/`D0GCI-EVD-001`.

3) **Agent Work Protocol**
- Owns mandatory runtime behavior for an agent executing a work package inside Build OS.
- Canonical home: `agent_work_protocol.md`.

4) **AGENTS.md**
- Owns concise boot pointer/enforcement requirements.
- Must not duplicate full protocol/schema content.

5) **Commands/tooling**
- Own ergonomics/automation only.
- Never authoritative without routing to canonical artifacts.

---

## Precedence Contract

If conflicts occur:
1. Control Plane authority contracts and canonical schema homes win.
2. Build OS gate/proof rules win for execution admission/closure behavior.
3. Agent Work Protocol governs runtime sequencing inside those boundaries.
4. AGENTS enforces boot path/pointer obligations.
5. Commands/tooling provide convenience only.

---

## Catalog and Read-Graph Clarity Rule

To prevent dual-`00` ambiguity:
- `00_omni_coordination_charter.md` must be cataloged/read-routed as **coordination layer doctrine**.
- `00_architecture_memory_control_plane.md` must remain cataloged/read-routed as **authority/schema governance spine**.
- No routing or notes text may imply that Charter owns ledger/catalog/read-graph schema contracts.

---

## Interface Contracts

### Control Plane <-> Build OS
- Build OS may require proofs and lifecycle actions.
- Control Plane defines where those proofs/actions are recorded and how they are routed.

### Build OS <-> Agent Work Protocol
- Build OS defines admissibility and closure conditions.
- Agent Work Protocol defines required agent loop behavior to satisfy those conditions.

### Agent Work Protocol <-> AGENTS
- AGENTS must point to this charter and the protocol.
- AGENTS should enforce use; protocol remains canonical runtime manual.

### Agent Work Protocol <-> Read Graph
- Protocol requires lane/domain/surface context retrieval through read-graph routes.
- Read graph remains canonical context loading map.

### Agent Work Protocol <-> Build Entry Gate
- Protocol runtime loop must satisfy build-entry retrieval and proof checks before edits.
- Build Entry Gate blocks work when checks are omitted.

---

## Lifecycle Freshness Contract

At work-package/phase closure, touched artifacts require disposition:
- Future work: promote/park/reject/stale with reason.
- Open reviews: close/split/keep-open with gate and next condition.
- Supersession/conflict: update when interpretations are replaced/narrowed.
- Narrative: active_open/snapshot_locked/closed_superseded_by.
- Handoffs: processed/routed/demoted as continuity artifacts.
- Catalog/read graph: current vs stale routing/authority updates.

No artifact may remain indefinitely in an outdated state without explicit reason.

---

## Protocol Freshness Triggers

Charter and Agent Work Protocol review/update is required when any of the following change:
- AGENTS boot behavior,
- Build Entry Gate admission requirements,
- read-graph routing semantics,
- control-plane schema/routing contracts,
- future work registry behavior (schema/retrieval/lifecycle),
- repeated agent process failures indicating protocol mismatch,
- layer ownership or precedence assumptions.

If trigger occurs, open/update review item and run bounded protocol refresh before declaring loop stable.

---

## Non-Loss Rule

Charter/protocol drafting must preserve accepted mechanics from source material or explicitly mark demotion/defer with reason and recovery trigger.

Source material includes:
- artifact-routing patch-spec work,
- governed composition ratification and patch-spec,
- future work registry mechanics,
- accepted narrative/ADR/handoff/ledger routing decisions.

---

## Relationship to Existing `00_architecture_memory_control_plane.md`

This charter does **not** supersede or replace `00_architecture_memory_control_plane.md`.

`00_architecture_memory_control_plane.md` remains the authority/memory governance spine and canonical schema home for control-plane artifacts.

This charter only coordinates layer boundaries and runtime interaction contracts across the system.

---

## Current Open Debt (Post-Activation Snapshot)

This Charter is activation-ready. Remaining open governance debt is tracked in `.cursor/plans/doctrine/08_open_review_queue.md` with explicit lifecycle triggers (no perpetually-open rows).

**This section is a post-activation snapshot for orientation; `.cursor/plans/doctrine/08_open_review_queue.md` remains the source of truth if queue state diverges from this snapshot.**

Deferred canonical-home decisions (4 keep-open AWP rows):
- `AWP-REV-CMDS-001` — commands/tooling artifact (architectural status decided in Layer 5; implementation deferred until manual execution becomes a bottleneck).
- `AWP-REV-TESTINV-001` — Test/Invariants Registry (Build Entry Gate v0 covers D1 readiness; broader registry triggers before first runtime implementation lane enters Build Entry Gate v0).
- `AWP-REV-GLOSSARY-001` — canonical glossary (deferred until repeated terminology drift OR broad implementation wave).
- `AWP-REV-RUNBOOK-001` — runbook home (deferred until deployment/operations workflow begins).

Overlay-vs-workstream decisions (5 rows, `AWP-REV-WORKSTREAM-OVERLAY-001..005`):
- RBAC, Settings, Care Coordination, Federation/Topology, AI Governance are currently routed as cross-cutting overlays in `.cursor/plans/doctrine/04_manifest_read_graph.md` `## Workstream Coverage Overlays`. Promotion to full DRT workstream is triggered when matching domain becomes a primary build lane.

Coverage source: `.cursor/plans/doctrine/agent_work_protocol_coverage_audit_2026-05-22.md`.

Near-term trigger: `AWP-REV-TESTINV-001` fires "before first runtime implementation lane enters Build Entry Gate v0." If implementation work begins, this row requires re-examination within the same wave.

Closed during P1/P2/follow-through/hygiene work (no longer open debt; referenced here only for traceability): `AWP-REV-NACR-EXTENSION-001` (resolved via Control Plane Enforcement Rule 7 + Governed Stream Artifact Operating Contract Rule), `AWP-REV-SCHEMA-LOCK-VOLUME-STATE-001` (Schema Lock v0 supplemental passport fields), `AWP-REV-CLAUDE-MD-CLASSIFICATION-001` / `AWP-REV-SCHEDULING-MATRIX-CLASSIFICATION-001` / `AWP-REV-CNS-ADR-CLASSIFICATION-001` (catalog corrections), `AWP-REV-BUILDOS-OVERVIEW-001` (resolved via Layer 2 + Read Graph Implementation-Lane Anchors + Boot-Path Sync), `AWP-REV-GAPS-001` (resolved via Protocol §8 Open Review Gap Routing Rule), `AWP-REV-CAT-RG-001`, `AWP-REV-GTC-001`, `AWP-REV-TAGS-001`, `FWREG-REV-001`.

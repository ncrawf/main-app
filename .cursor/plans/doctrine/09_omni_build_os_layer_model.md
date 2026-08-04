# OMNI Build OS Layer Model

Document type: `doctrine`
Authority: Operating model for OMNI build system behavior
Status: Active (v1)
Domain(s): architecture_governance, build_operations
Lifecycle role: Permanent Build OS conceptual model
Source-of-truth relationship: Defines stable operating layers; rollout sequencing lives separately
Supersedes: implicit/blurred layer references in transition-only plans
Superseded by: none
Manifest action: add_tier1
Review gate: User/Knox approval required for layer-model semantic changes

---

## Purpose

Define the **permanent five-layer OMNI Build OS model** so future agents and engineers understand:
- what each layer does,
- which artifacts belong to each layer,
- which question each layer answers.

This file is the conceptual operating architecture.
It is intentionally separate from rollout sequencing.

---

## Layer 1: Truth Layer

**Purpose**
- Establish what is authoritative, historical, evidentiary, unresolved, or superseded.

**Current artifacts**
- `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`
- `.cursor/plans/doctrine/01_master_corpus_catalog.md`
- `.cursor/plans/doctrine/02_authority_routing_map.md`
- `.cursor/plans/doctrine/03_decision_extraction_ledger.md`
- `.cursor/plans/doctrine/04_manifest_read_graph.md`
- `.cursor/plans/doctrine/05_supersession_conflict_ledger.md`
- `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md`
- `.cursor/plans/doctrine/07_evidence_ingestion_ledger.md`
- `.cursor/plans/doctrine/08_open_review_queue.md`

**Primary question answered**
- "What is true, trusted, unresolved, or superseded?"

---

## Layer 2: Execution Layer

**Purpose**
- Define how agents and engineers perform work safely against the Truth Layer.

**Current/future artifacts**
- Build Entry Gate v0 (short-term admission control)
- Agent Work Blueprint (lane model, work package contract, handoff contract)
- Lane registry and ownership map
- Allowed outputs / forbidden actions

**Primary question answered**
- "How do we safely do work?"

**Current-state note (2026-08-04)**
- `Agent Work Protocol §2.1` is the first **human-supervised partial operationalization** of the lane / work-package / handoff contract (concurrent lanes · one writer per branch · two-level base binding · stale-branch fresh re-entry · shared-surface isolation · transferable control-plane integrator role · provisional-until-integrated artifacts). Decision `D0CKPT-DEC-005`; guardrail `D0CKPT-GRD-002`.
- **Automated lane registry, ownership services/leases, shared-surface locks, merge queue, semantic collision detection, and lane tooling remain FUTURE** (`D0THES-REV-158`). This note records partial progress only; it does not duplicate §2.1 and does not make this layer complete.

---

## Layer 3: Command/Tool Layer

**Purpose**
- Make execution repeatable and non-bespoke through stable commands/tooling boundaries.

**Current/future artifacts**
- `AGENTS.md`
- `CLAUDE.md`
- `/project:*` workflow commands (planned)
- MCP/tool boundary policies
- permissions/sandbox rules
- context-loading workflows (read-graph driven)

**Primary question answered**
- "How does the agent execute the workflow repeatedly without custom prompting each time?"

---

## Layer 4: Runtime Proof Layer

**Purpose**
- Convert architecture into enforceable runtime truth.

**Current/future artifacts**
- schemas
- types
- migrations
- invariant tests
- boundary tests
- CI checks
- audit trace fields

**Primary question answered**
- "What proves the architecture is enforced in running code and merge gates?"

---

## Layer 5: Governance Cadence Layer

**Purpose**
- Keep the Build OS current over time and prevent drift/rot.

**Current/future artifacts**
- document intake protocol
- closure policy
- anti-shrouding gate
- de-scaffolding policy
- recurring drift audits
- review/conflict governance with explicit owner + gate

**Primary question answered**
- "How does the system stay current and not rot?"

---

## Layer Interaction Rules (Binding)

1. Truth Layer precedes all other layers for authority resolution.
2. Execution Layer may not bypass Truth Layer routing/closure semantics.
3. Command/Tool Layer may optimize workflow but cannot redefine doctrine authority.
4. Runtime Proof Layer is required before asserting architecture is "implemented."
5. Governance Cadence Layer may simplify operations but cannot weaken safety gates.

---

## Non-Goals

- This file does not authorize implementation lanes.
- This file does not define rollout order.
- This file does not replace domain contracts or build-entry admission checks.


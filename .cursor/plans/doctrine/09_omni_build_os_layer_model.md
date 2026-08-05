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

### Agent Work Blueprint — provisional partitioning, mandatory reintegration

**Hierarchy (three distinct levels — do not collapse them):**

| Level | What it is |
|---|---|
| **Layer 2 — Execution Layer** | the broad home for safe work against the Truth Layer. It also covers Build-Entry admission, allowed/forbidden actions, and ordinary single-lane execution. **This principle does not redefine all of Layer 2.** |
| **Agent Work Blueprint** | the reusable **lane / work-package / handoff capability** inside Layer 2 (named in the artifact list above). This is the searchable identity for what follows. **Still a planned artifact** — no such document exists yet; the protocol sections below are its first partial realization, not a replacement for it. |
| **work package** | a concrete **instance** (e.g. `PRESPINE-PHASEA`). Many will exist. |
| **lane** | a provisional partition inside one package. |

**Operating principle: partitions are provisional; reintegration is mandatory.**

> Begin from the broad governing estate and the real architectural question. **Partition work only where it helps.** Activate one, some, all, or no lanes. **A lane boundary is a work partition, never an architecture boundary** — the operator or integrator may add, split, merge, pause, retire or reclassify lanes as evidence changes. Every lane returns a **provisional carrier** to the **parent integration transaction**, which reconciles it against sibling outputs *and the wider estate* before any architecture, acceptance, or successor work is claimed. **No result becomes architecture merely by having been produced.**

**Why both halves matter.** Partitioning alone buys throughput and produces silos and bolt-ons. Reintegration alone forfeits the throughput. The layer exists to get the first without paying for it with the second.

**A work package is an INSTANCE, not a fixed structure.** There will be many, each with its own lanes, inputs, outputs and integration transaction — `PRESPINE-PHASEA` (pre-spine input readiness) is simply the first. A future package (e.g. connector permeability) declares its own envelope. **Nothing here is a five-lane model, and nothing obliges concurrency** — a single-lane package is a legitimate and common shape.

**Which protocol governs — single-lane vs parallel (do not conflate these):**
- **Ordinary single-lane work** follows the **general Agent Work Protocol**. `agent_work_protocol.md` §2.1 states twice that single-lane work does **not** invoke it, so a one-lane package should not pretend to be parallel.
- **`agent_work_protocol.md` §2.1** is the **parallel / multi-lane specialization**, triggered only by its own classification markers: two or more concurrent agents/lanes · branches whose outputs later reconcile · a parent/integrator relationship · sibling shared-surface collision risk · agent replacement or lane takeover.
- A single-lane package may later **amend its envelope and invoke §2.1** when genuinely independent lanes emerge. That amendment is the trigger — not the package's existence.

**Vocabulary** — use the estate's established terms: **work package** · **lane** · **launch envelope** (the accepted executable description of lanes, branches, bases, inputs, permissions, outputs and stops) · **lane agent** / **lane owner** (the agent doing one partition) · **integrator** (the transferable role restoring whole-estate coherence; sole writer of shared control surfaces) · **handoff contract** (continuity across agent/session replacement) · **parent integration transaction** (where lane results are reconciled and where completion actually occurs) · **review/landing gate** (acceptance).

> **Vocabulary discipline.** Reuse established canonical terms in governing and routing surfaces. Introduce new vocabulary only when existing terms cannot discriminate a materially distinct capability, and then through explicit semantic review. The aim is to prevent casual aliasing, not to freeze the language.

**Current vs future form.** Current = a **human-supervised protocol** — the general Agent Work Protocol for ordinary work, plus §2.1 for parallel packages (`D0CKPT-DEC-005`, guardrail `D0CKPT-GRD-002`). Future = **machine-enforced** work-package tooling at Layer 3 / rollout Step 5 (`D0THES-REV-158`): manifest validation, claims/leases, protected surfaces, policy checks, status projection, merge path.

**This is NOT:** a product- or care-agent runtime (that is `FWREG-010`, and build-agent authority never becomes product authority) · a general agent framework · compulsory parallelism · a fixed lane ontology · a complete Build OS.

Mechanistically this composes established **integration-manager**, **orchestrator/worker**, **protected-branch/proposal**, and **contextual-practice** patterns; the external evidence and attributions live in `comparator_analogy_registry.md` and rollout Step 5 — **not** in instance maps, checkpoints or lane prompts.

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


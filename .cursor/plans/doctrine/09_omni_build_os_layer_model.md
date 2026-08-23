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

### Agent Work Blueprint — provisional partitioning, reconciliation where it is owed

**Hierarchy (three distinct levels — do not collapse them):**

| Level | What it is |
|---|---|
| **Layer 2 — Execution Layer** | the broad home for safe work against the Truth Layer. It also covers Build-Entry admission, allowed/forbidden actions, and ordinary bounded execution. **This principle does not redefine all of Layer 2.** |
| **Agent Work Blueprint** | the reusable **lane / work-package / handoff capability** inside Layer 2 — the searchable identity for what follows. It is **realized, not owed**: the concepts live here, the binding runtime mechanics live in `agent_work_protocol.md` §2.1, and concrete instances live in the current checkpoint or an accepted work-package map. **No standalone blueprint document is required or planned.** The only future artifact is an optional machine-readable package **manifest** at Layer 3 / `10` Step 5 (`D0THES-REV-158`), and only on execution evidence. |
| **work package** | a concrete **instance** (e.g. `PRESPINE-PHASEA`). Many will exist. |
| **lane** | a durable partition inside a package. A package may consist of exactly one lane. |

**Operating principle: partitions are provisional; reconciliation is mandatory where reconciliation is actually owed.**

> Begin from the broad governing estate and the real architectural question. **Partition work only where it helps**, and only where continuity or coordination is materially needed. Activate one, some, all, or no lanes. **A lane boundary is a work partition, never an architecture boundary** — the operator or integrator may add, split, merge, pause, retire or reclassify lanes as evidence changes. Where outputs overlap, contend for a shared surface, or must combine into a parent outcome, each returns a **provisional carrier** to the **parent integration transaction**, which reconciles it against sibling outputs *and the wider estate* before any architecture, acceptance, or successor work is claimed. **Where a lane is the whole work package, its own review/landing gate completes it — no integrator and no parent transaction are manufactured to satisfy a rule.** In every case: **no result becomes architecture merely by having been produced.**

**Why both halves matter.** Partitioning alone buys throughput and produces silos and bolt-ons. Reconciliation alone forfeits the throughput. The layer exists to get the first without paying for it with the second — **and to charge for reconciliation only where it is genuinely owed.**

**A work package is an INSTANCE, not a fixed structure.** Each has a bounded outcome, scope, ownership, outputs and closure path; `PRESPINE-PHASEA` (pre-spine input readiness) is simply the first. **A coordinated package adds an envelope and an integration transaction only where its own facts require them** — a future package (e.g. connector permeability) may begin as a single durable lane and declare an envelope later, or never. **Nothing here is a five-lane model, and nothing obliges concurrency** — a single-lane package is a legitimate and common shape.

**Structure — two independent needs, NOT a solo/parallel binary and NOT a universal core:**

```
Agent Work Blueprint
├── lane continuity contract     → when work must survive replacement / pause / delayed re-entry
└── coordination overlay         → when writers, dependencies or shared surfaces must be ordered
```

Neither implies the other. Work may need **neither** (ordinary bounded work — no blueprint mechanics at all), **either**, or **both**.

- **Continuity** (earned by a real re-entry need, *not* by the presence of a branch, output file or named owner): purpose · lane scope and why durability is needed · owner and state · branch + head · source floor and inquiry aperture · writable scope and expected output · authority limits · stop/review/landing/re-entry condition. These are **facts, not a document** — they may live in an existing checkpoint, map, handoff or the output's own header.
- **Coordination** (earned by a real collision, dependency or reconciliation requirement): membership · dependency and activation order · collision and protected-surface map · base policy · authorized shared-surface writer · parent close criteria.

**A lane is a durable partition of work with an owner and a boundary.** "Solo", "parallel", "coupled", "dependent" and "sequenced" are **orthogonal properties of its situation, not types of lane.** Consequences worth stating because we got this wrong once:
- one active lane may sit inside a prepared multi-lane package;
- lanes may be dependent and run **sequentially** — `lane` never implies independence or simultaneity;
- **independence is not required for a lane to exist**; it only informs whether concurrent execution is wise (tightly coupled siblings are usually sequenced);
- unrelated work may run at the same time in **separate packages** without being collapsed into one.

Binding mechanics for both: `agent_work_protocol.md` **§2.1**, which carries the two-question applicability test and marks explicitly which laws are continuity (`L*`), which are coordination (`C*`), and which are conditional.

**Vocabulary** — use the estate's established terms: **work package** · **lane** · **launch envelope** (the accepted executable description of lanes, branches, bases, inputs, permissions, outputs and stops) · **lane agent** / **lane owner** (the agent doing one partition) · **integrator** (**where such a role exists** — the transferable role restoring whole-estate coherence; sole writer of shared control surfaces) · **handoff contract** (continuity across agent/session replacement) · **parent integration transaction** (**where reconciliation is owed** — where partition results are reconciled and where completion then occurs; a standalone lane completes at its own gate instead) · **review/landing gate** (acceptance).

> **Vocabulary discipline.** Reuse established canonical terms in governing and routing surfaces. Introduce new vocabulary only when existing terms cannot discriminate a materially distinct capability, and then through explicit semantic review. The aim is to prevent casual aliasing, not to freeze the language.

**Current vs future form.** Current = a **human-supervised protocol** — the general Agent Work Protocol for ordinary work, plus §2.1 **proportionally** where continuity or coordination is material (`D0CKPT-DEC-005` as narrowed by `D0CKPT-DEC-007`; guardrails `D0CKPT-GRD-002`/`-003`). Future = **machine-enforced** work-package tooling at Layer 3 / rollout Step 5 (`D0THES-REV-158`): manifest validation, claims/leases, protected surfaces, policy checks, status projection, merge path.

**This is NOT:** a product- or care-agent runtime (that is `FWREG-010`, and build-agent authority never becomes product authority) · a general agent framework · compulsory parallelism · a fixed lane ontology · a complete Build OS.

Mechanistically this composes established **integration-manager**, **orchestrator/worker**, **protected-branch/proposal**, and **contextual-practice** patterns; the external evidence and attributions live in `comparator_analogy_registry.md` and rollout Step 5 — **not** in instance maps, checkpoints or lane prompts.

**Current-state note (2026-08-05, adjudicated)**
- `Agent Work Protocol §2.1` is the **human-supervised, proportional** operationalization of the lane / work-package / handoff capability: a two-question applicability test (continuity · coordination), a lane continuity contract (one writer per branch · stale-branch fresh re-entry · environment-local worktrees · provisional-until-its-own-gate · tracked state · proportional receipts), and a coordination overlay applied only where collision, dependency or reconciliation is real (protected shared surfaces · single authorized writer · integrator role where one exists · parent integration transaction). Base pinning, two-reference boot and state-only base binding are **conditional mechanics**, not universal core. Decisions `D0CKPT-DEC-005` (narrowed by `D0CKPT-DEC-007`); supersession `D0CKPT-SUP-001`; guardrails `D0CKPT-GRD-002`, `D0CKPT-GRD-003`.
- **Automated lane registry, ownership services/leases, shared-surface locks, merge queue, semantic collision detection, and lane tooling remain FUTURE** (`D0THES-REV-158`). This note records partial progress only; it does not duplicate §2.1 and does not make this layer complete.

### Bounded interrupt — the interchange rule, not another road

**The Blueprint above governs work you have already decided to partition. This governs the discovery that arrives *inside* active work** — the moment an object author finds something that may not belong to the object they were sent to do. **It is not a new lane type and not a parallel programme.** It is the **interchange**: it decides when work temporarily leaves one road, and how it gets back on. The road it may create is an ordinary bounded side lane under the machinery already described.

**Three dispositions, and only one of them partitions:** *local defect* → repair in place · *valuable but non-blocking* → route to the rightful owner and return immediately · *gate-blocking and cross-cutting* → park the object, open a bounded side lane. **The trigger is consequence to the active object, never interest.** A discovery that merely enriches the object is non-blocking by definition.

**The load-bearing law is the review boundary, not the classification:** *a side discovery does not edit the parent carrier until it has survived an independent semantic review.* Authoring, normalizing, integrating and reviewing in one motion produces a candidate that reads finished and collapses under the first cold read — then the correction lands hot too, and the loop repeats (`D0CKPT-GRD-006`).

**Where each part lives — no part of this is a new artifact.** Concepts and vocabulary here · binding runtime mechanics at `agent_work_protocol.md` **§2.1 (Bounded interrupt)** · the classification judgment is a **method** call, not an execution one · a particular interruption's live state in the **active work package or checkpoint**, like any other lane state · resulting decisions, conflicts, supersession and open questions route to the **Architecture Memory Control Plane**, which does not own the protocol · architecture-specific admission and consumption compile into `/architecture/operations/` at **G2** · and **Build Entry** (`11`) invokes the build-time form, where a build-discovered issue that changes authority, ownership, commitment, custody or proof cannot be absorbed by a local adapter. **No interrupt registry, no permanent interrupt lane, no standalone protocol document, no second control plane, no new gate.**

### Six motions — independently varying, routinely collapsed

Work on OMNI moves along **six axes at once**, and treating them as one progress axis is why an arc can feel simultaneously productive and lost.

| motion | the question it answers | where it is owned |
|---|---|---|
| **object** | what should this architecture, domain, seam or build object actually say? | the object's rightful owner + architecture steward |
| **method** | how are sources recovered, claims derived, reviews conducted and conclusions accepted? | the architecture-method surface (arc-local while an arc runs; `operations/` permanently) |
| **work topology** | who is working, in which partition, on which writable surface, with what park and re-entry path? | **this layer** + `agent_work_protocol.md` §2.1 |
| **estate truth** | what is current, authoritative, unresolved, conflicted, superseded or accepted? | Architecture Memory Control Plane |
| **architecture operations** | how does an accepted change get admitted, versioned, propagated, installed, corrected, retired? | future `/architecture/operations/` (G2) |
| **realization + proof** | what code, contract, migration, test, conformance and observation prove it exists? | owning build/runtime surfaces + Layer 4 |

**The independence laws — each pair has been collapsed at real cost:** a method correction does not accept the object · a side-lane result does not change estate truth · a repository commit does not promote architecture · an accepted architecture decision does not prove implementation · a successful build does not prove the governing model was rightful.

**These are motions, not lanes** `[KND]`. ***Object*, *method* and *estate repair* are work OBJECTS, never lane types** — a lane is the provisional execution boundary around whichever object is currently being worked, exactly as the solo/parallel/coupled rule above already establishes for a lane's other properties. A bounded interrupt is triggered by a **method** judgment, executes in **work topology**, routes its consequences into **estate truth**, and — only if accepted — feeds **architecture operations** or **realization**. It crosses the motions; it owns none of them. *That is why it appeared to belong everywhere at once.*

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


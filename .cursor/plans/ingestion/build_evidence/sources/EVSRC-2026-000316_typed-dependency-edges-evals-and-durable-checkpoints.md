# EVSRC-2026-000316 — Typed dependency edges, task-specific evals, and durable checkpoint state (Palantir · Anthropic · LangGraph)

Document type: `evidence_source_packet` (Evidence Plane · lane `build_evidence`)
Authority: `evidence_nonbinding` (`D0THES-GRD-036` — **capture broad, promotion gated**). Binds nothing. Promotes nothing. Mints nothing.
Status: `captured · primary_sources_read_directly · consumed_by_D0CKPT-DEC-009 · not_promoted`
Domain(s): `architecture_governance` · `build_operations` · `agent_execution`
Lifecycle role: durable record of **three external mechanisms** that informed the 2026-08-08 work-horizon reconciliation, with each mechanism's **transfer** and **explicit non-transfer** stated so a future agent does not inherit the vendor's hidden assumptions.
Source-of-truth relationship: consumes official vendor documentation, read directly at the access date below. **OMNI doctrine is the consumer; these sources inform and do not bind.** Where this packet and a consuming decision/guardrail differ, the decision/guardrail controls.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` (catalog row added in the same pass; no read-graph route — reached through the Evidence Router and the consuming guardrails)
Review gate: `user_knox_required`

> **★ Why this packet exists.** On 2026-08-08 the estate repeatedly reasoned about "what Palantir / Anthropic / LangChain do better than us" across many relays, and that reasoning was about to survive only as our own paraphrase inside a decision row. Per `D0THES-GRD-036` and the Evidence Router, **external mechanism lineage belongs in the Evidence Plane with its primary source, access date, extracted mechanism, transfer and non-transfer** — not as an unsourced adjective in doctrine. This is the first packet in the `build_evidence` lane.

**Lane extraction fields** (per `build_evidence/_lane.md`): `technique` · `source_system` · `applicability_to_omni` · `build_os_target` · `caveat`.

---

## §1 — Palantir Foundry: typed link types and governed action types

- **Source (official):** Palantir Foundry documentation, *Ontology → Core concepts* — <https://www.palantir.com/docs/foundry/ontology/core-concepts/>
- **Accessed:** 2026-08-08, read directly (not summarized from memory or a third party).
- **Mechanism, as the source states it.** The Ontology maps assets into **object types** (schema definition of a real-world entity or event), **properties** (characteristics), **link types** (*"the schema definition of a relationship between two object types"*), and **action types** (*"the schema definition of a set of changes or edits to objects, property values, and links that a user can take at once,"* including the side-effect behaviours on submission). **Roles** are *"the central permissioning model in the Ontology,"* grantable at ontology or individual-resource level, and are used for object types, link types and action types.
- **`technique`:** relationships and state-changing operations are **declared schema objects with their own identity and permissioning**, not incidental byproducts of data layout. The source's own analogy is explicit: a link type is to the Ontology what a **join** is to datasets — a defined construct, not a coincidence of adjacency.
- **`applicability_to_omni`:** OMNI's load-bearing **dependency** and **ownership** relationships should likewise be *typed and scoped objects* rather than prose adjacency. This is the direct antecedent of the **edge-typing law** (`D0CKPT-DEC-009` item 2, guardrail `D0CKPT-GRD-004`): a material dependency must carry consumer, provider, `edge_kind`, scope/purpose, basis/authority and current-or-superseded state before it may be composed. Foundry's action-type-plus-roles pairing also echoes OMNI's existing owning-domain commit path and `requireCapability` posture.
- **`build_os_target`:** `06` guardrail `D0CKPT-GRD-004`; the work-horizon representation in the active pre-spine map.
- **`caveat` / EXPLICIT NON-TRANSFER:** Foundry **link types are traversable from both sides**, and the docs describe them symmetrically. That says **nothing** about whether an OMNI routing dependency is bidirectional — and OMNI's 2026-08-08 failure was precisely a *reversed* arrow (reading "X routes a finding to Y" as "X depends on Y"). **OMNI must define its own directional semantics and must not inherit Foundry's symmetry.** Equally, Foundry is a data/analytics platform with a single organizational tenant assumption; OMNI must not import "one organization's digital twin" into a substrate whose whole point is non-fungible authorities across separate principals. Take the *typing and permissioning*; reject the symmetry and the single-owner frame.

---

## §2 — Anthropic: define measurable success criteria, then build task-specific evals

- **Source (official):** Anthropic documentation, *Define success criteria and build evaluations* — <https://docs.anthropic.com/en/docs/test-and-evaluate/define-success>
- **Accessed:** 2026-08-08, read directly.
- **Mechanism, as the source states it.** *"Building a successful LLM-based application starts with clearly defining your success criteria and then designing evaluations to measure performance against them."* Good criteria are **specific** (*"Instead of 'good performance,' specify 'accurate sentiment classification'"*) and **measurable**. Eval design principles include **"Be task-specific: design evals that mirror your real-world task distribution. Don't forget to factor in edge cases,"** and prioritising **volume of automated cases over a few hand-graded ones**. Most use cases need **multidimensional** evaluation across several criteria.
- **`technique`:** a behavioural claim is not a claim until it is an **executable, pre-declared test**. Criteria are written *before* the run; the grader does not see the expected answer.
- **`applicability_to_omni`:** *"a fresh agent will understand this"* is **not** an assertion an author may make about their own control-plane edit — it is an **eval that must be executed at the exact proposed head, with the expected facts predeclared and withheld from the evaluator.** This is why `D0CKPT-DEC-009` carries a named acceptance test and why the reconciliation ran a cold-boot evaluation rather than reporting `grep` results as proof. Directly relevant to the Build OS proof-obligation layer and `REV-158`.
- **`build_os_target`:** Build OS proof obligations; `D0CKPT-DEC-009` acceptance test; `06` guardrail `D0CKPT-GRD-007` (whose repair is only verifiable by a cold boot).
- **`caveat` / EXPLICIT NON-TRANSFER:** the source's metrics are **model-output metrics** (F1, exact match, LLM-graded rubrics) for a task distribution with many samples. OMNI's control-plane boot test is **n=1 per corrected head, qualitative, and pass/fail on named facts** — it is not a statistical eval and must not be reported as one. "Prioritise volume over quality" **does not transfer** to governance changes, where a single cold boot against the real repository is the meaningful trial. Do **not** build an eval harness subsystem off the back of this row.

---

## §3 — LangGraph: durable checkpoints, and an entry point that points at state rather than copying it

- **Source (official):** LangChain / LangGraph documentation, *Persistence* — <https://langchain-ai.github.io/langgraph/concepts/persistence/>
- **Accessed:** 2026-08-08, read directly.
- **Mechanism, as the source states it.** *"Persistence lets LangGraph applications keep useful information beyond a single graph run. It matters when an agent needs to continue a conversation, resume after an interruption, recover from a failure, or remember information across interactions."* **Checkpointers** persist a thread's graph state as checkpoints (thread-scoped: conversation continuity, human-in-the-loop, time travel, fault tolerance); **stores** persist application-defined data across threads. State is addressed by passing a **`thread_id` in the graph config** — the caller carries an *identifier*, and the durable state lives in the checkpointer. The docs also warn that in-memory savers **lose all checkpoints on restart**, and that each subgraph manages **its own checkpoint namespace**, so a parent may not immediately see a subgraph's state.
- **`technique`:** the run's entry configuration holds a **pointer** (`thread_id`); the authoritative state lives in the durable checkpoint. Resumption reads the checkpoint — it does not reconstruct state from conversation memory or from values copied into the invocation.
- **`applicability_to_omni`:** this is the antecedent of making `AGENTS.md` and read-graph Tier-0 #15 **pointer-only** (`D0CKPT-GRD-007`). The boot surface should carry the identifier of the current checkpoint and nothing else; current focus, gate state, lane state and every SHA resolve *at* the owning surface. It also reinforces the existing OMNI law that **conversation is execution context, not canonical memory**, and the AWP §2.1 Single-source law. The subgraph-namespace warning is a genuine analogue of OMNI's lane-versus-parent shared-surface boundary: a lane's state is not automatically visible as parent truth.
- **`build_os_target`:** `06` guardrail `D0CKPT-GRD-007`; the `AGENTS.md` Boot-Surface Rule; AWP §2.1 Single-source law.
- **`caveat` / EXPLICIT NON-TRANSFER:** LangGraph is an **execution runtime**. It owns no authority, consent, care, clinical or truth model, and its graph is a *control-flow* graph, not an ontology of who may commit what. **Do not turn the OMNI work horizon into a generic workflow graph**, and do not let a checkpoint mechanism acquire architectural authority — OMNI's canonical truth stays with owning domains, and `FWREG-010` (Agent Runtime & Harness) remains **OPEN with its build deferred**. Nothing here authorises runtime construction.

---

## §4 — Consuming decisions and guardrails (where this actually landed)

| Mechanism | Consumed by | What it produced |
|---|---|---|
| Palantir typed link/action types + roles | `D0CKPT-DEC-009` item 2 · `D0CKPT-GRD-004` | the **edge-typing law**: six required facts per material edge; composition only when both edges are current and scope-compatible |
| Anthropic success criteria + task-specific evals | `D0CKPT-DEC-009` acceptance test · `D0CKPT-GRD-007` verification | the **cold-boot eval**: predeclared facts, withheld from the evaluator, executed at the corrected head |
| LangGraph checkpoints + `thread_id` pointer | `D0CKPT-GRD-007` · `AGENTS.md` Boot-Surface Rule | **pointer-only boot surfaces**; current state resolves at the owning surface |

**Promotion status: NONE.** These rows are `evidence_nonbinding`. They explain *why* the guardrails read as they do; the guardrails themselves are the operative law. Any further use of these vendors as comparators appends to `doctrine/comparator_analogy_registry.md` — **do not re-derive or re-scatter** (`D0THES-GRD-026`).

## §5 — Not captured

No claim is made about: Foundry pricing, deployment, or its ontology-editing UX; Anthropic's model-specific benchmarks; LangGraph's store/subgraph APIs beyond the persistence concepts above; any comparison of these vendors to each other; or any assertion that OMNI should adopt any of their products. **Three sources, three mechanisms, three explicit transfer limits** — and no vendor evaluation.

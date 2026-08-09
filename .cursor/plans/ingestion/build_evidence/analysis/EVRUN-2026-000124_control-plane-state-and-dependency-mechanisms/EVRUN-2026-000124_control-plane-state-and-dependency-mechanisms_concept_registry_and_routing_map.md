# EVRUN-2026-000124 — Concept registry + routing map (PRIMARY WORKBENCH)

Document type: `evidence_concept_registry` (Evidence Plane · lane `build_evidence`)
Authority: `evidence_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). Binds nothing. Promotes nothing. Mints nothing.
Status: `active · 3 sources · all concepts routed`
Domain(s): `architecture_governance` · `build_operations` · `agent_execution`
Lifecycle role: **the primary workbench** — cross-source convergence, OMNI meaning, transfer/non-transfer, and downstream routing for run `EVRUN-2026-000124`. **Cross-source synthesis lives HERE and nowhere else** (`GRD-037`/`GRD-040`; router §Cardinality).
Source-of-truth relationship: authoring starts here, then reopens the named **Source Packet** for authority and verbatim. Never author from the anchor ledger. External sources **inform; they do not bind.**
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` · Review gate: `user_knox_required`

Sources: `EVSRC-2026-000316` (Palantir Foundry Ontology) · `EVSRC-2026-000317` (Anthropic success criteria + evals) · `EVSRC-2026-000318` (LangGraph persistence). All accessed 2026-08-08, read directly.

---

## §1 — Concepts

| # | Concept | Source | OMNI meaning | Transfer | EXPLICIT NON-TRANSFER | Routed to |
|---|---|---|---|---|---|---|
| C1 | **A relationship is a declared, named, permissioned schema object** — `link type`; state change is an `action type`; `roles` permission both | `EVSRC-…316` §1 | a material dependency must be a **typed** thing with its own facts, not an inference from prose adjacency | **edge-typing law:** every material edge carries `consumer` · `provider` · `edge_kind` · `scope/purpose` · `basis/authority` · `current \| superseded` | link types are **bidirectional with two independently traversable, separately named sides** — *not* semantically symmetric, and this supplies **no** dependency-direction semantics for OMNI. Also: the mechanism is defined **within one Ontology** (cross-Ontology links unsupported) and therefore says nothing about OMNI's multi-principal, cross-sovereign authorities | `D0CKPT-DEC-009` item 2 · `D0CKPT-GRD-004` |
| C2 | **A single declared relationship does not imply its reverse** — "creating a single link type does not implicitly create a second, reverse link type"; multiple link types between the same pair are **separate real-world relationships**, not reverse directions | `EVSRC-…316` §1 | "X routes a finding to Y" makes Y a consumer of X and creates **no** reverse edge | **routing is directional:** `X → Y` never implies `Y → X` | Foundry's two-sided traversal is a *query* affordance; OMNI must not read it as bidirectional dependency | `D0CKPT-GRD-004` form (c) |
| C3 | **Predeclared, specific, measurable success criteria precede evaluation**; evals are **task-specific** and must include **edge cases** | `EVSRC-…317` §1 | "a fresh agent will understand this" is not a claim an author may make about their own control-plane edit — it is a test | the **cold-boot eval**: name the exact facts to be recovered, then execute at the corrected head | **blinding the evaluator is OMNI's own adaptation, not on the cited page.** "Prioritize volume over quality" does **not** transfer: an OMNI boot test is n=1, qualitative, pass/fail — never a statistical eval, and no harness or platform is authorised | `D0CKPT-DEC-009` acceptance test · verification of `D0CKPT-GRD-007` |
| C4 | **Durable checkpointed state addressed by a pointer** — caller passes `thread_id`; authoritative state lives in the checkpointer; resumption reads the checkpoint | `EVSRC-…318` §1 | a boot surface should carry the **identifier** of the current checkpoint and nothing else | **pointer-only boot surfaces**; reinforces AWP §2.1 Single-source law and "conversation is execution context, not canonical memory" | a workflow runtime owns **no** authority, consent, care or truth model; its graph is control flow, not an ontology of commit rights. Do not make a planning surface a workflow graph. Authorises **no** runtime build — `FWREG-010` stays OPEN, deferred | `D0CKPT-GRD-007` · `AGENTS.md` Boot-Surface Rule |
| C5 | **In-memory state is lost on restart; checkpoints grow unboundedly and need a retention policy** | `EVSRC-…318` §1 | two failure modes OMNI already has analogues for: context loss at agent replacement, and status blobs that accrete until they drift | anti-regrowth **length cap** in `scripts/check-boot-surfaces.mjs`; preservation law already exists at AWP §8 | operational tuning advice, not architecture; do not import retention semantics into OMNI truth | `scripts/check-boot-surfaces.mjs` · `D0CKPT-GRD-007` |
| C6 | **Each subgraph manages its own checkpoint namespace** — a parent may not immediately see a subgraph's state | `EVSRC-…318` §1 | a lane's state is not automatically parent truth | descriptive support only for the existing lane-vs-parent shared-surface boundary | **no new mechanism minted.** AWP §2.1's protected-surface law already owns this; this is corroboration, not a source of authority | AWP §2.1 (no change proposed) |

## §2 — Convergence and divergence

**Convergence (C1 + C4).** Both vendors put the authoritative thing in a **declared, addressable place** and let everything else *reference* it — a relationship is a link type, run state is a checkpoint. Both failures on 2026-08-08 were the inverse: a dependency that existed only as composable prose, and current state copied onto a discovery surface. This convergence is real, and it is why the two guardrails are siblings rather than one rule.

**Divergence worth preserving.** Palantir's mechanism is **declarative and schema-level**; LangGraph's is **operational and runtime-level**; Anthropic's is **procedural and verification-level**. They are not three versions of one idea, and collapsing them into "be more like Palantir/Anthropic" would lose exactly the distinctions that made them useful.

**One correction produced by reading primaries.** An earlier draft claimed Palantir link types are "symmetric" and asserted a "single organizational tenant assumption." Neither is supported: the source says *bidirectional, two independently traversable sides, each separately named*, and the tenancy claim overreached "digital twin of an organization." Recorded because the estate's rule is that a mis-stated non-transfer is worse than no comparator at all.

## §3 — Net-new primitives

**None.** No new domain, gate, ontology, enum, registry or runtime is proposed. Two guardrails, one decision clause, one 130-line validator.

## §4 — Stale-vs-current

All three sources current as of access date 2026-08-08. **Re-verify before any future promotion** — vendor docs change, and none of these claims is promotion-grade (`GRD-036`).

# Evolution Narrative — Volume 9 (2026-08-05)

## The instance that tried to become the model

Document type: `narrative_or_postmortem`
Authority: `rationale_nonbinding` — chronicle only. Binding destinations are cited, never replaced.
Domain(s): `architecture_governance`, `build_operations`
Lifecycle: `active_open`
Manifest action: `add_tier2 · no_new_route_needed`
Review gate: `user_knox_required`

---

## Prior arcs consulted

- **Volume 8 (2026-08-03)** — post-C4.4 pre-spine portfolio reconciliation; the arc that produced the checkpoint this one amends. Directly relevant: it established landing ≠ promotion and the single control-plane integrator idea that this volume narrows.
- **Volume 7 (2026-07-18)** — agent boot profiles activated; established the model-agnostic role slots (Opus / Knox / Gemini) that made this volume's *two independent reviewers* possible at all.
- **Volume 6 (2026-06-14)** — C3.x pressure-test arc; source of `D0PRESS-GRD-001` (arcs titled by proof mechanism rather than real question). Consulted because this arc had the same temptation: to name a system rather than fix a boundary.
- **Volume 4 (2026-05-23)** — the preservation failure-mode arc; source of `D0TIER0-GRD-005`. Consulted because this volume's core lesson is its mirror image: Volume 4 was about doing *too little* preservation; this one is about demanding *too much* ceremony.

Older volumes remain valid historical rationale. Nothing here supersedes them.

---

## Where the arc started

The pre-spine sequence needed five inputs — Care, GRR/Accountability, Insurance/Payer/OOP, non-labor operator economics, and a temporal anchor micro-pass. Rather than serialize them through one exhausted context, the estate prepared **five lanes**: five branches, five output objects, one common content base, one integrator role, one accepted launch envelope. That package is `PRESPINE-PHASEA`, and as a package it is sound. Every one of its controls was earned by a real problem: a chat thread had been named as permanent integrator, a base SHA had drifted twice by prose duplication, worktree paths had been treated as lane identity.

Then something quiet happened. The mechanics written **for that package** were promoted into `agent_work_protocol.md` §2.1 as the **general contract for all agent work**.

## Why the pivot happened

Because the generalization was written from a sample size of one — and the one was the richest case the estate had ever built.

The first version drew a **solo-vs-parallel binary**, which was plainly false: coupled work often deserves separate ownership while being sequenced rather than run at once. On 2026-08-05 that binary was withdrawn and replaced with "a lane is a durable partition of work with an owner and a boundary. That is all." The withdrawal was correct and it fixed a real defect.

It also introduced three new ones. The trigger became *any* branch, output file, or named owner — and tripping it required an **accepted launch envelope**. The universal "core" was declared to include the integrator role, the parent integration transaction, and provisional-until-integrated status — none of which a standalone lane needs. And `parallel_work_package` was retained as a "compatibility label" that explicitly disclaimed meaning parallel, while `AGENTS.md`, the read graph, `D0CKPT-DEC-005` and `D0CKPT-GRD-002` all still routed it as *parallel* work. **The binding protocol and its own discovery surfaces stopped agreeing.**

The correct instinct at that moment was the one taken: **stop writing.** A fourth same-agent rewrite would have produced a fourth same-agent blind spot. The bytes were frozen, a review packet stated the open questions without answering them, and the object was handed to two independent reviewers who were forbidden from coordinating.

## What was discovered

Both reviewers — working read-only, separately, from the frozen bytes — returned **`MATERIAL_REWRITE`**, and converged on the same four defects: trigger overreach, core/overlay misclassification, label inversion, and envelope-shape overreach. They independently reached the same answers on the residual questions: no standalone blueprint document is owed; `parallel_work_package` should be retired rather than reinterpreted; base-binding and two-reference boot are conditional mechanics.

Three findings mattered more than the agreement.

**One.** The reviews disagreed usefully on the *shape* of the model. Opus proposed a linear ladder (ordinary → lane → package); Knox proposed a **2×2 of continuity × coordination**. The 2×2 won because it holds a cell the ladder collapsed — *coordination without durability*, where two bounded efforts must be serialized against a shared surface but neither needs to survive replacement. Two independent formulations produced a better object than either alone, which is the entire argument for the trifecta.

**Two.** Knox found a live defect Opus missed: `AGENTS.md` and the read graph still carried `51ead01…` as the lane base after it had rotated to the value pinned in checkpoint §4.2. That is the **same SHA drifting for the third time by prose duplication** — the exact failure the base-binding law had been written to prevent, reappearing on the boot surfaces that law never thought to cover. The fix was not to update the value. It was to **delete the duplicate** and add a **Single-source law**: one owning row per live value, pointers everywhere else.

**Three.** The deepest correction was to the framing itself. Calling this "trigger overreach" suggests the fix is a *narrower* trigger — but narrowing it back toward "two or more concurrent lanes" would re-orphan the single durable lane, which genuinely does need continuity mechanics. The real defect was **obligation** overreach. Keep the broad trigger; shrink what tripping it costs.

## What got built

`agent_work_protocol.md` §2.1 is now a **proportional durable-work contract**. Two questions, asked independently: must this survive replacement, and must this be coordinated? Four postures follow, one of which — *ordinary bounded work* — owes the section nothing at all. Continuity law is `L1`–`L8`; coordination law is `C1`–`C6`; base pinning, two-reference boot and state-only base binding became **conditional mechanics with stated use-when conditions**. A standalone lane completes at its own §5 gate: no integrator, no parent transaction, no envelope.

Nothing was invented. Every mechanic survives — relocated to where it is actually load-bearing. No new subsystem, no new ontology, no new boot file, no new artifact, and specifically **no Agent Work Blueprint document**: `09` was corrected to say the capability is *realized, not owed*.

`09` also lost its most over-broad sentence. "Partitions are provisional; reintegration is mandatory" became "reconciliation is mandatory **where reconciliation is actually owed**." Reintegration is a debt incurred by overlap, not a tax on having partitioned.

## Mistakes corrected

- Generalizing a contract from its single richest instance.
- Treating artifacts (a branch, a file, a named owner) as if they *created* the thing they merely evidence.
- Keeping a classification label after stripping its literal meaning, then making every routing surface explain the discrepancy.
- Duplicating live state across boot surfaces — and the reflex to *update* a drifted duplicate rather than delete it.
- Adding schema fields and then requiring agents to enumerate them as `not_applicable`, which converts a control into ceremony.
- Reading six-plus base rotations as an indictment of base-binding, when they only ever demonstrated that rotating an **empty** branch is cheap and that prose copies go stale.

## Canonical binding destinations

The rules live here, not in this narrative:

- Mechanics: `.cursor/plans/doctrine/agent_work_protocol.md` §2.1 (plus §7, §9).
- Concepts and vocabulary: `.cursor/plans/doctrine/09_omni_build_os_layer_model.md` Layer 2.
- Future tooling trajectory: `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md` Step 5; `D0THES-REV-158`.
- Decision: `D0CKPT-DEC-007` (narrowing `D0CKPT-DEC-005`). Supersession: `D0CKPT-SUP-001`.
- Guardrails: `D0CKPT-GRD-003` (ceremony overreach + duplicated state); `D0CKPT-GRD-002` (rescoped).
- Continuity: `.cursor/plans/HANDOFF_2026-08-05_awp_lane_contract_adjudicated_rewrite.md`.

## What remains unresolved

The rewrite is **unproven in execution** — not one lane has run under it. `D0THES-REV-212` stays open pending Knox's review of the landed object. `coordinated_bounded` was derived analytically and has never been instantiated. Layer-3 tooling is still future and evidence-gated, and `D0CKPT-GRD-003` now points at this very change: keep only what demonstrably prevents an observed failure, and de-scaffold the rest once Phase A actually runs.

## The lesson worth carrying

A control earns its place by preventing an observed failure **in the situation where it is imposed**. Phase A proved that a common base, protected shared surfaces and a transferable integrator role work — *there*. That was never evidence they belong everywhere, and the distance between "this worked once" and "this is the law" is exactly where governed systems accumulate ceremony that no one can later justify or remove.

The structural safeguard is not a better author. It is **two independent readers who cannot see each other's work**, adjudicating against frozen bytes.

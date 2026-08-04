# OMNI Architecture Evolution — Narrative Volume 8 — 2026-08-03
## Multi-agent relay integrity at operator scale: distinguishing the review object, the relay endpoint, and the human-facing thread label

Document type: `narrative_or_postmortem`
Authority: `analysis_nonbinding`
Status: `active_landed_on_main · analysis_nonbinding · not_promoted`
Domain(s): `architecture_governance, operator_governance, agent_execution`
Lifecycle role: `short Tier-3 rationale chronicle for D0OPER-DEC-005 and D0OPER-DEC-006 (relay/thread/object identity) AND — via the 2026-08-04 addendum — for D0CKPT-DEC-005 (the parallel-execution follow-through: Agent Work Protocol §2.1 as the first partial Build-OS Layer-2 operationalization, plus its 2026-08-04 base-binding / worktree / integrator-transfer hardening)`
Source-of-truth relationship: `nonbinding rationale only; canonical rules live in operator_context_and_collaboration_model.md §§2.6–2.7 (relay integrity) and agent_work_protocol.md §2.1 (parallel work-package contract); decisions D0OPER-DEC-005/006 + D0CKPT-DEC-005 and guardrails D0OPER-GRD-002/003 + D0CKPT-GRD-002 carry the durable routing. This narrative originates nothing.`
Supersedes: `none`
Superseded by: `none`
Manifest action: `add_tier3 · no_new_route_needed`
Review gate: `user_knox_required`

> Continuity note (retained): non-binding chronicle (`GRD-036`) — cites canonical destinations, does not become them; deliberately short (Tier-3 minimum). Checkpoint context: the current program checkpoint (`HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md`) is **unchanged** by this arc — this is a parallel collaboration-governance transaction (`D0OPER-DEC-005/006`), not a gate change.

## Prior arcs consulted
- **`docs/architecture/evolution_narrative_volume_4_2026-05-23.md` — the principal directly-relevant prior narrative.** It is the Tier-0 operator/collaboration-governance activation arc (post-Tier-0 activation / operator-model consolidation); Volume 8 is a bounded continuation of that same collaboration-governance line and inherits its framing.
- `D0OPER-DEC-001..004` lineage — the operator/collaboration model, its dedicated Tier-0 home, the fidelity course-correction, and the 2026-07-18 boot-freshening that added §2.5 "working state vs committed estate" and the Gemini leg. Volume 8 extends §2.5, it does not replace it.
- `evolution_narrative_volume_7_2026-07-18.md` (Reactor evidence arc) and the C4.4 closeout — consulted only as the *incident context* in which the relay-scaling failure became acute (heavy byte-level review across many threads), not as architecture input.

## What failed
For roughly four months the trifecta (and occasionally quadfecta) ran by relaying document contents through Nick between Cursor/Opus, ChatGPT/Knox, and Antigravity/Gemini. Two failure classes accumulated:

1. **Object ambiguity.** A reviewer was repeatedly asked to "verify the file" without it being unmistakable *which bytes* — the newest local edit, a stale earlier upload, or the pushed repository object. This forced large manual copy-pastes and risked a reviewer silently validating `main` or older bytes.
2. **Endpoint ambiguity.** As concurrent workstreams grew to 5–10 across three platforms with truncated sidebars, a relay could be pasted into the wrong thread, and there was no consistent human-visible naming to match corresponding threads across platforms.

## Why object identity and endpoint identity are distinct
They answer different questions — *which exact bytes?* versus *am I in the right thread, from the expected donor, for the intended recipient?* — and fail independently. Collapsing them into one overloaded string (or one screenshot) is what produced four months of avoidable friction. The resolution keeps them as separate, composable receipts: **Relay Endpoint Posture**, **Review Object Posture**, **Bounded Diff Receipt**, and the pre-existing **Source Posture**.

## Why the visible title differs from the formal lock
Knox's first proposal front-loaded the seat (`KEY | SEAT | PURPOSE`), which — on a single-platform sidebar where the seat is already implied — produced exactly the failure the operator rejected: `KNOX`/`OPUS` repeated down a truncated list while the actual *work* was cut off. The operator directive was decisive and overrode it: the **human-visible title is work-first and seat-free** (`<Friendly Arc> · <Specific Work>`), and the seat + semantic relay key live in the **formal in-conversation lock** used by the agents and the audit trail. Seat visibility becomes conditional — it returns to the visible title only if one workspace ever hosts multiple seats (e.g. Knox pulled into Cursor as read-only). One string was serving the operator, the router, and the audit trail; the fix gives each its own identity.

## Why the rule remains graduated
A control that fires on every message becomes ceremony and gets ignored. So casual discussion, brainstorming, and narrow wording need no receipt; a supplied local packet needs only a one-line `local_uncommitted` marker; only a coherent repo-backed document offered for exact/byte/acceptance/landing review triggers the committed-and-pushed snapshot plus the full receipts. The §2.5 working-packet law is explicitly preserved: local/uncommitted work is never rejected merely because GitHub is behind.

## Where canonical authority lives
Once, in the operator/collaboration model **§2.6 (Reviewable Repository Snapshots)** and **§2.7 (Relay Endpoint Integrity + Human-Facing Thread Labels)**, reached at boot through Tier-0 route #16. The Opus and Gemini profiles carry **pointer-only** clauses (§5/§12) — no duplicated schema — because this estate has repeatedly paid for drifted multi-home echoes, and pointer-only echoes are the anti-drift discipline. Timeless guardrails: `D0OPER-GRD-002` (object ambiguity) and `D0OPER-GRD-003` (endpoint confusion). Decisions of record: `D0OPER-DEC-005/006`.

## What was deliberately not built
No Agent Runtime identity ontology and no global agent-numbering registry — "the agent is your folder" is a useful operator metaphor, but durable memory stays in the repository and checkpoints, and the broader agent-definition/runtime-profile system stays deferred (`D0OPER-DEC-004`). No universal boot file. No Agent Work Protocol amendment this pass — the rule operates as collaboration/relay discipline first; promotion into the universal protocol waits until several arcs prove it applies beyond trifecta review.

## Corrections made during formulation
- Rejected the seat-forward visible title in favor of the work-first title + formal lock split (operator directive).
- Rejected duplicating the normative rule into four boot files; echoes are pointer-only.
- Right-sized preservation: Tier-4 inheritance is honored (bounded handoff + this short Volume 8 + decision + guardrail rows), but Volume 8 is deliberately a small chronicle, not a maximal treatise — the process fix must not become another architecture arc.

## Why the arc stops here
The rules are accepted (Nick operator approval + Knox final byte PASS) and **landed on `main`** via a state-only normalization plus ordinary fast-forward. The accepted candidate snapshot is `e1a485620600fcaca514bf0d389e027c21c6c42a`; the accepted canonical collaboration-model blob is `d500e0b3f3fdacfa534f8536fbbdb7bf382c156b` (unchanged by the landing normalization). The landing repoints **no checkpoint** and carries **no architecture, product, or runtime implication** — §§2.6–2.7 are now active operator-governance rules; this narrative remains rationale, not command authority. Its own first real test — this very transaction relayed with a Review Object Posture and Bounded Diff Receipt — was the demonstration. The **external Knox Project-source replacement** remains the final operational follow-through outside the repository, after which sequencing returns, unchanged, to the next operator-selected OMNI arc.

---

## Addendum (2026-08-04) — Parallel execution follow-through

The relay/thread/object-integrity work above solved the **endpoint** problem (right bytes · right thread · right donor→recipient). Immediately after it landed, the first five-lane pre-spine launch (`v4_pre_spine_sufficiency_and_task_d_reentry_map_2026-08-04.md` §7) surfaced the **other half**: how several agents safely execute *concurrently* on the repository without branch mess, base drift, shared-surface collision, or premature "done." Line "No Agent Work Protocol amendment this pass" above anticipated that promotion would wait until an arc proved the need — this arc did.

That runtime contract now lives in **Agent Work Protocol §2.1 (Parallel Work-Package Launch and Re-Entry Contract)** — decision `D0CKPT-DEC-005`, guardrail `D0CKPT-GRD-002`. It is the first binding operationalization of **Build OS Layer 2 — Execution Layer** (`09`) + rollout Step 5 (`10`), and the repository/build-agent context of the Agent Runtime & Harness — **not** a new subsystem. The sufficiency map §7 is its first concrete envelope. Durable lane state = branch + worktree + relay key + pinned packet + handoff; **the chat/model session is replaceable compute.**

**Prior arcs consulted (this addendum):** `evolution_narrative_volume_4_2026-05-23.md` (the OMNI Work Operating System / Tier-0 governance arc — the Build OS Execution Layer this §2.1 operationalizes) and `evolution_narrative_volume_5_2026-06-03.md` (the AI-Substrate Pivot — source of the build-vs-product firewall and `D0THES-GRD-028` AI-as-target guardrail). **Substantive lineage (pointed to, not restated):** `EVRUN-2026-000007_02_multi_principal_reframe_and_active_debate.md` (the multi-principal constellation + `subject/principal/actor/agent/role/capability/committer` taxonomy) and `v4_C4_agent_runtime_and_harness_capture.md` / `FWREG-010` (three runtime contexts + the split 100-agent debt).

**Still not built:** no new agent ontology, framework, branch registry, or sovereign control plane; automated large-scale (20/100-lane) orchestration remains **split debt** — build-time to Build OS Layer 2/3 + Step 5 + `D0THES-REV-158`, generic-runtime to `FWREG-010` spine/C5. This is the follow-through to this same volume — **no Volume 9.**

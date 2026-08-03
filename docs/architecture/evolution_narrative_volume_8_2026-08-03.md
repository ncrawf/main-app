# OMNI Architecture Evolution — Narrative Volume 8 — 2026-08-03
## Multi-agent relay integrity at operator scale: distinguishing the review object, the relay endpoint, and the human-facing thread label

Document type: `narrative_or_postmortem` (non-binding chronicle; cites canonical destinations, does not become them). Per Agent Work Protocol §8 (Tier-3 narrative minimum; deliberately short). Authority: `analysis_nonbinding` (`GRD-036`).
Checkpoint context: the current program checkpoint (`HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md`) is **unchanged** by this arc — this is a parallel collaboration-governance transaction (`D0OPER-DEC-005/006`), not a gate change.

## Prior arcs consulted
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
The candidate is authored and pushed on `governance/relay-integrity-rules` for Nick + Knox byte review; it is not landed on `main` and repoints no checkpoint. Its own first real test — this very transaction relayed with a Review Object Posture and Bounded Diff Receipt — is the demonstration. After acceptance the external Knox Project source gets the mirrored pointer clause, and sequencing returns, unchanged, to the next operator-selected OMNI arc.

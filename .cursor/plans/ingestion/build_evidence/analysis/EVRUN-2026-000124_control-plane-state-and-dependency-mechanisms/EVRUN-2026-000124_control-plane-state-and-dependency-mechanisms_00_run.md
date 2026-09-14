# EVRUN-2026-000124 — Control-plane state and dependency mechanisms (run record)

Document type: `evidence_analysis_run` (Evidence Plane · lane `build_evidence`)
Authority: `evidence_nonbinding` (`D0THES-GRD-036`). Binds nothing. Promotes nothing.
Status: `closed · 3 sources processed · outputs routed to D0CKPT-DEC-009 + GRD-004/GRD-007`
Domain(s): `architecture_governance` · `build_operations` · `agent_execution`
Lifecycle role: run record — *on this date, this analyst processed these EVSRC ids and produced these outputs.*
Manifest action: `add_tier2` · Review gate: `user_knox_required`

| Field | Value |
|---|---|
| Run id | `EVRUN-2026-000124` |
| Date | 2026-08-08 |
| Analyst | Opus (Cursor), during the `OMNI-WORK-HORIZON-RECONCILIATION` transaction |
| Sources processed | `EVSRC-2026-000316` (Palantir Foundry) · `EVSRC-2026-000317` (Anthropic) · `EVSRC-2026-000318` (LangGraph) |
| Trigger | the 2026-08-08 control-plane failure: a cold agent inherited an unadjudicated `Gate 2 → C3.9 → OPECON` chain, and a boot surface carried a negative next-action directive |
| Run artifacts | this run record · concept registry + routing map (**primary workbench**) · source anchor ledger (receipts only) · coverage matrix |
| Outputs routed to | `D0CKPT-DEC-009` (items 2 / 2a, acceptance test) · `D0CKPT-GRD-004` · `D0CKPT-GRD-007` · `AGENTS.md` Boot-Surface Rule · `scripts/check-boot-surfaces.mjs` |

## Why this run exists

Three external mechanisms were being reasoned about across many relays and were about to survive only as our own paraphrase inside a decision row. Per `D0THES-GRD-036` and the Evidence Router, external mechanism lineage belongs in the Evidence Plane with primary source, access date, mechanism, transfer and **explicit non-transfer** — not as an unsourced adjective in doctrine.

**Authoring rule observed** (router §Authoring rule): the **concept registry is the workbench**; reopen the source packets for verbatim/authority. This run record is not an authoring source, and the anchor ledger is receipts only.

## Method

Each source's official documentation was **fetched and read directly** on 2026-08-08 — not summarized from memory, a third party, or a search snippet. One correction resulted from that discipline: an earlier draft asserted Palantir link types are "symmetric"; the link-types page states they are **bidirectional with two independently traversable, separately named sides**, which is a materially different claim. That correction is recorded in the concept registry and in `EVSRC-2026-000316` §3.

## Bounds

Three sources, three mechanisms, three explicit non-transfers. **No vendor evaluation, no product recommendation, no comparison of these vendors to each other, and no promotion.** The consuming guardrails are the operative law; these artifacts explain why they read as they do.

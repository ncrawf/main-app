# EVRUN-2026-000001 — June AI-corpus synthesis + routing (run manifest)

> A **run** = "on this date, this analyst processed these source IDs and produced these outputs." Analysis is multi-author (`D0THES-GRD-040`); a run can **PROPOSE** but cannot promote — promotion passes the destination home's gate (`GRD-036`); watched/external evidence cannot build/execute (`GRD-038`/`GRD-039`).

- evrun_id: `EVRUN-2026-000001`  ·  slug: `ai-corpus`
- run_date: `2026-06-07` (opened)
- analyst: `Knox (ChatGPT)` [strategic read — input] + `Opus` [synthesis/routing] — multi-author; never baked into source files
- source_set: `EVSRC-2026-000048 … 000089` (the June 2026 batch — 42 sources, captured + content-verified + audit-clean 2026-06-07). Prior context: spring collection `EVSRC-2026-000001…000047` already routed via `REV-176`.
- purpose: `AI corpus → OMNI ARCHITECTURE routing (multi-home, NOT thesis-only)` — every concept cluster routes to all homes it pressures: v4 thesis (first assembly target) · CNS contract · Build-OS · §C/security · Federation/capability-topology · domain contracts (D3/D5/D6/D7/Obs/CM/Identity/RBAC/Messaging/Settings) · Knowledge Reservoirs · UX/surfaces · product/feature · future-watch.

## Artifact roles + authority order (Reservoir Ingestion Contract — `D0THES-GRD-044`)

This run obeys the four-layer **Reservoir Ingestion Contract** (canonical in `../../00_evidence_router.md` Operating Principles + `GRD-044`). Authority order for authoring:

1. **Source Packet** (`sources/<YYYY-MM>/EVSRC-…md`) = **local source meaning/context** — metadata, speaker/author authority + bias, date/freshness, verbatim transcript, source context, captured interpretations (§3), operator notes, source-local warnings.
2. **Concept Registry + Routing Map** (`EVRUN-2026-000001_ai-corpus_concept_registry_and_routing_map.md`) = **the PRIMARY workbench** — cross-source concept meaning + convergence, OMNI implications, downstream homes, stale-vs-v3 verdicts, net-new primitives, promotion posture, source anchors. *This is where the intelligence lives.*
3. **Anchor Ledger** (`EVRUN-2026-000001_ai-corpus_source_anchor_ledger_receipts_only.md`) = **RECEIPTS ONLY** — coverage proof + anchors back to source. Never the workbench; never an authoring source.
4. **Coverage Matrix** (`EVRUN-2026-000001_ai-corpus_coverage_matrix.md`) = which sources are covered/weak/missing in the registry.

**Authoring gate (binding):** authoring (thesis/CNS/§C/Build-OS/Federation/domain-contracts) starts from the **Concept Registry** → reopens the relevant **Source Packet(s)** for authority/verbatim/interpretation → verifies anchors → reconciles vs v3/contracts/system-map → then writes. **No quote-driven authoring** — a quote supports a promoted concept; it is never the concept. **Meaning = source packet + cross-source convergence, NOT a single §3 read.** Never author from the anchor ledger.

**Cardinality:** one source packet **per source**; one concept registry + routing map + anchor ledger + coverage matrix **per run** (cross-source — NOT per video, NOT one global file); one `00_index.md` catalog **per lane** (a catalog, not the registry). This AI corpus = exactly one run.

**Filename convention (durable):** run artifacts carry the `{EVRUN-id}_{slug}_…` prefix. Generic bare names (`inventory.md`, `routing_addendum.md`, `concept_registry.md`) are forbidden for runs (template excepted).

## Status
`registry-first reframe (per concept_registry_reframe_and_coverage plan). Routing of B1-B6 (19/42 sources, ~1055 concepts) complete and folded into the concept registry. Remaining sources are gap-filled per the coverage matrix at the SAME deep read standard (no light reads), registry-first. Anchor ledger frozen as receipts.`

## Reads (inputs) — `read_NNN_<analyst>_<purpose>`, numbered + attributed + append-only
- `read_001_knox_strategic.md` — captured Knox/ChatGPT strategic plan for the corpus (`captured_interpretation_nonbinding`).
- `read_NNN+` — future angle passes (security / CNS / thesis / etc.) over the same source_set.
- also draws on: the 42 source files' §3 Review-001 (per-source Knox reads) + §0.1 authority context.

## Outputs
- `EVRUN-2026-000001_ai-corpus_concept_registry_and_routing_map.md` — PRIMARY workbench (concept clusters → OMNI meaning + cross-source convergence + downstream homes + stale-vs-v3 + net-new primitives).
- `EVRUN-2026-000001_ai-corpus_source_anchor_ledger_receipts_only.md` — receipts/anchor ledger (coverage proof; per-source extraction trail). NOT an authoring source.
- `EVRUN-2026-000001_ai-corpus_coverage_matrix.md` — 42-source coverage status (covered/weak/missing).

## Scope fence (what this run does NOT do)
- Does **not** edit any source file (immutable, `GRD-042`).
- Does **not** edit Thesis / Build OS / contracts directly — it produces **routing proposals**; the actual doctrine edits happen in those planes after their gate (`GRD-036`/`GRD-038`). This run is the **bridge**, the gate is the **control**.

## Change log
- `2026-06-07` — run opened; B1-B6 routed (19/42).
- `2026-06-08` — registry-first reframe: run artifacts renamed to the `{EVRUN}_{slug}_…` convention; concept registry declared the primary workbench; anchor ledger demoted to receipts-only; authority order + authoring gate + cardinality recorded here per `GRD-044`.

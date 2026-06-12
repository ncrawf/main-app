# EVRUN-2026-000002 — ai-corpus wave-2 (108 high-yield videos)

> Run shell created 2026-06-11 (scaffolds stage). Processing begins after Nick pastes transcript (§1) + Knox read (§3 Review 001) into the wave-2 source files. Method = the settled registry-first, two-tier read (see plan `wave-2_source_scaffolding_654989a0` §C1). Cumulative with `EVRUN-2026-000001`.

- evrun_id: `EVRUN-2026-000002`
- run_date: `2026-06-11` (shell) → processing TBD
- analyst: `Opus` (setup) · Knox/ChatGPT (per-source Review 001, pending) · Opus (per-source Review 003, pending)
- source_set: `EVSRC-2026-000090 … EVSRC-2026-000199` (110; in `sources/2026-06_wave-2/`)
- purpose: `extraction → cross-source synthesis → routing` (feeds v4 per the ingest-first sequence)
- status: `processing` (all 110 sources populated with §1 transcript + §3 Review 001; Review 003 extraction underway, batch 1 = 090–094)
- reads (inputs, append-only):
  - **run-level orienting read** = `../../orientation/ORIENTATION-2026-06-10_knox_strategic_read_pre-100video-wave_v4-refocus.md` (Knox↔Nick strategic read; orients the wave processing — does NOT replace per-source reads; ★ high-yield, treated as **pressure, not canon**). *(There is no separate corpus read; the earlier `read_001` shell was redundant and was removed.)*
  - **per-source** — Knox = §3 Review 001 (paste), Opus = §3 Review 003 (formal extraction).

## Cumulative-with-EVRUN-000001 (the key rule)
This run does **not** restart synthesis. Its concept registry is built **on top of** `EVRUN-2026-000001`'s `§2A` full-corpus net-new primitive set as the **dedup + cumulative baseline**. New concepts check EXISTS-AS against 000001 before minting. All prior ingestion work (42 sources + spring corpus) remains in scope; nothing is orphaned.
- Baseline: `../EVRUN-2026-000001_ai-corpus-synthesis-and-routing/EVRUN-2026-000001_ai-corpus_concept_registry_and_routing_map.md` (§2A).
- Registry topology (extend-001 in place vs new-002 cross-ref) — locked at processing-design; recommend new-002 cross-referencing 001 given ~150-source scale.

## Outputs (Reservoir Ingestion Contract `GRD-044`)
- `EVRUN-2026-000002_ai-corpus-wave-2_concept_registry_and_routing_map.md` — PRIMARY workbench (cross-source intelligence; built on 000001 §2A).
- `EVRUN-2026-000002_ai-corpus-wave-2_source_anchor_ledger_receipts_only.md` — receipts/anchors only.
- `EVRUN-2026-000002_ai-corpus-wave-2_coverage_matrix.md` — coverage status (090–199).
- Per-source subagent contract: `../../sources/_OPUS_REVIEW_003_PROMPT.md` (hardened "print full literal, no placeholders" Review 003 brief).

## Processing method (the settled standard — do not regress; see plan §C1)
Per source: read §3 Review 001 (Knox) IN FULL → then §1 verbatim IN FULL → write §3 Review 003 = structured concept clusters (concept · OMNI meaning · why · downstream homes · anchors ≤12 words+timestamp · stale-vs-v3 · **conflict_status** · weight_tier · status) + net-new primitives (dedup vs registry) + reread flags, folded into the source's own §3 (NEVER a sidecar). ~5 sources/wave, subagents with a hard "print full literal Review 003, no placeholders" contract. Fold cross-source synthesis up into this registry; maintain a Tension/Conflict Register; update coverage matrix + anchor ledger; fill each source's §4 pointers at closeout. No quote-driven authoring.

> This run can PROPOSE; it cannot promote (`GRD-036`). Watched/external evidence cannot build or execute (`GRD-038`/`GRD-039`).

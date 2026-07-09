# EVRUN-2026-000003 — ai-corpus wave-3 (~45 new-drop videos)

> Run shell created 2026-07-07 (scaffolds stage). Processing begins after Nick pastes transcript (§1) + Knox read (§3 Review 001) + URL/screenshot into the wave-3 source files. Method = the settled registry-first, two-tier read (see wave-2 run + `00_pipeline_doctrine.md`), **extended for wave-3 with a two-axis reality-check (see Processing method below)**. Cumulative with `EVRUN-2026-000001` §2A + the `EVRUN-2026-000002` registry.

> **CONTROLLING PLAN (boot pointer):** `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` (HOME dir, NOT the workspace tree). The 2026-07-06 BUILD PLAN names **this run (`EVRUN-2026-000003`) as step 1** — ONE small ingestion wave (new concepts land ~q2wk) → then FREEZE → **v4 SPINE DRAFT 0**. Current checkpoint: `HANDOFF_2026-07-04_c3_8_complete_pre_spine.md` §3. **HARD STOPS: this run PROPOSES only — no promotion, no C5 contract/schema edits, no thesis authoring, no more scenario batches.**

- evrun_id: `EVRUN-2026-000003`
- run_date: `2026-07-07` (shell) → processing TBD
- analyst: `Opus` (setup + per-source Review 003 + registry fold) · Knox/ChatGPT (per-source Review 001) · (subagents optional per-source Review 003 extraction, Opus-main folds)
- source_set: `EVSRC-2026-000201 … EVSRC-2026-000246` (46 scaffolds; in `sources/2026-07_wave-3/`; provisional `_TK` slugs firm up at processing). **218/226 = void_duplicate** (content deleted 2026-07-08). **246** = Anthropic "Claude Code best-practices" article promoted from 236's [7:44] reference (scaffold, awaiting body paste).
- purpose: `extraction → cross-source synthesis → routing` (the ONE pre-Draft-0 wave)
- status: `open` (scaffolded 45/45; awaiting Nick transcript + Knox-read paste, video-by-video) → routed → gated
- reads (inputs, append-only):
  - **per-source** — Knox = §3 Review 001 (paste as-is), Opus = §3 Review 003 (formal extraction).
  - a run-level orienting read (if Knox provides one for the wave) lands as `read_001_knox_<purpose>.md`.

## Cumulative-with-prior-runs (the key rule)
This run does **not** restart synthesis. Its concept registry builds **on top of** `EVRUN-2026-000001` §2A (full-corpus net-new primitive set) **+** the `EVRUN-2026-000002` wave-2 registry, as the **dedup + cumulative baseline**. New concepts check `EXISTS-AS` against BOTH before minting — nothing re-minted, nothing orphaned. Combined corpus target ≈ 195 sources (150 prior + 45).

## Outputs (Reservoir Ingestion Contract `GRD-044`)
- `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` — PRIMARY workbench (cross-source intelligence; built on 000001 §2A + 000002 registry).
- `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` — receipts/anchors only.
- `EVRUN-2026-000003_ai-corpus-wave-3_coverage_matrix.md` — coverage status (201–245).
- Per-source extraction contract: `../../sources/_OPUS_REVIEW_003_PROMPT.md` + the wave-3 two-axis reality-check below.

## Processing method (the settled standard + the wave-3 two-axis reality-check delta)
Per source: read §3 Review 001 (Knox) IN FULL → then §1 verbatim IN FULL → write §3 Review 003 = structured concept clusters (concept · OMNI meaning · why · downstream homes · anchors ≤12 words+timestamp · **reality-check (two axes, below)** · conflict_status · weight_tier · status) + net-new primitives (dedup vs 000001 §2A + 000002 registry) + reread flags, folded into the source's own §3 (NEVER a sidecar). Fold cross-source synthesis up into this registry; maintain the Tension/Conflict Register; update coverage matrix + anchor ledger; fill each source's §4 pointers at closeout. No quote-driven authoring.

**★ Wave-3 two-axis reality-check (Nick decision 2026-07-07 — the anti-redundancy mechanism; option C).** The v3 thesis + domain contracts are ~1.5 months old and the estate is scattered, so every load-bearing concept is checked on TWO orthogonal axes (do not collapse them):
- **`doctrine_status`** — does OMNI *doctrine* already have this? `AFFIRM` / `PARTIAL` / `ABSENT` vs thesis v3 (§0→§B) + the current domain contracts + post-v3 layer (C3.8 · bet-check · Polaris/C4.1). (This is the classic `stale-vs-v3`, widened to contracts + post-v3.)
- **`build_status`** — is this actually *built* in the repo? `present` / `partial` / `absent` (grep/inspect `app/`, `lib/`, `components/`, `middleware.ts`, `supabase/`, `repo/`, `scripts/`). NOT "does the plan say so" — "does the code do it."

The interesting rows are the **mismatches**, flagged for the trifecta:
- `doctrine=AFFIRM · build=absent` → **redundant to re-plan** (already decided; don't re-derive) OR a doctrine-vs-build gap.
- `doctrine=ABSENT · build=present` → **undocumented reality** (the code already does something doctrine hasn't named).
- `doctrine=AFFIRM · build=present` → settled; likely no-op/AFFIRM.
- `doctrine=ABSENT · build=absent` → genuine net-new candidate (the real yield).

Peer-reconciliation (read-graph #9a): v3 §A/§B is a **peer** to reconcile against the post-v3 layer — not stale-to-discard, not the benchmark. Flag genuinely-stale v3 spots rather than re-deriving them.

> This run can PROPOSE; it cannot promote (`GRD-036`). Watched/external evidence cannot build or execute (`GRD-038`/`GRD-039`). Authoring gate (`GRD-044`): downstream work authors from the concept registry → reopens source packets → verifies anchors → reconciles vs canon → writes. Never author from the anchor ledger.

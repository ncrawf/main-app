# EVRUN-YYYY-NNNNNN — <run name>

> Copy the `_RUN_TEMPLATE/` folder to `analysis/EVRUN-YYYY-NNNNNN_<slug>/` to start a run, then add a row to `../../00_index.md`.
> **RENAME every file in the copy to the `{EVRUN}_{slug}_…` prefix** (e.g. `EVRUN-2026-000123_glp1-pilot_concept_registry_and_routing_map.md`). Generic bare names are forbidden in real runs (`GRD-044`) — only this template uses them.
> A **run** = "on this date, this analyst processed these source IDs and produced these outputs." A run may cover **1 source or many**, from any month. Multiple runs may analyze the **same** source (different analysts / passes) — analysis is **multi-author** (`D0THES-GRD-040`). Never edit the source files from a run.

- evrun_id: `EVRUN-YYYY-NNNNNN`
- run_date: ``
- analyst: ``                   # WHO did this pass: Opus | Knox (ChatGPT) | <agent-name> | <human>. Attribute every analysis; never bake the analyst into source files.
- source_set: []                # the EVSRC ids analyzed, e.g. [EVSRC-2026-000048, EVSRC-2026-000049]
- purpose: ``                   # extraction | distillation | scoring | routing | §C-impact triage | re-review
- status: `open`                # open -> routed -> gated
- reads (inputs): `read_NNN_<analyst>_<purpose>.md`   # numbered + attributed + append-only; one run has MANY reads (Knox=001, Opus=002, future angle passes=003+). Never a singular "the_read"; mirrors source-file Review-00N.
- outputs (Reservoir Ingestion Contract `GRD-044` — rename each with the `{EVRUN}_{slug}_` prefix):
  - `{EVRUN}_{slug}_concept_registry_and_routing_map.md` — **PRIMARY workbench** (concept meaning + cross-source convergence + downstream homes + verdicts + primitives). *Intelligence lives here.*
  - `{EVRUN}_{slug}_source_anchor_ledger_receipts_only.md` — **receipts/anchors ONLY** (never an authoring source).
  - `{EVRUN}_{slug}_coverage_matrix.md` — coverage status (covered/weak/missing).

> **Authoring gate (`GRD-044`):** evidence-consuming work (thesis/CNS/§C/Build-OS/Federation/domain-contracts) authors from the **concept registry** → reopens the **source packet(s)** → verifies anchors → reconciles vs canon → writes. No quote-driven authoring; meaning = source packet + cross-source convergence, not one §3. Never author from the anchor ledger.
> Reminder: this run can PROPOSE; it cannot promote. Promotion passes the destination home's gate (`GRD-036`). Watched/external evidence cannot build or execute (`GRD-038`/`GRD-039`).

# EVRUN-YYYY-NNNNNN — <run name>

> Copy the `_RUN_TEMPLATE/` folder to `analysis/EVRUN-YYYY-NNNNNN_<slug>/` to start a run, then add a row to `../../00_index.md`.
> A **run** = "on this date, this analyst processed these source IDs and produced these outputs." A run may cover **1 source or many**, from any month. Multiple runs may analyze the **same** source (different analysts / passes) — analysis is **multi-author** (`D0THES-GRD-040`). Never edit the source files from a run.

- evrun_id: `EVRUN-YYYY-NNNNNN`
- run_date: ``
- analyst: ``                   # WHO did this pass: Opus | Knox (ChatGPT) | <agent-name> | <human>. Attribute every analysis; never bake the analyst into source files.
- source_set: []                # the EVSRC ids analyzed, e.g. [EVSRC-2026-000048, EVSRC-2026-000049]
- purpose: ``                   # extraction | distillation | scoring | routing | §C-impact triage | re-review
- status: `open`                # open -> routed -> gated
- reads (inputs): `read_NNN_<analyst>_<purpose>.md`   # numbered + attributed + append-only; one run has MANY reads (Knox=001, Opus=002, future angle passes=003+). Never a singular "the_read"; mirrors source-file Review-00N.
- outputs (derived): `inventory.md`, `routing_addendum.md` (+ `thesis_impact.md` if thesis-touching)

> Reminder: this run can PROPOSE; it cannot promote. Promotion passes the destination home's gate (`GRD-036`). Watched/external evidence cannot build or execute (`GRD-038`/`GRD-039`).

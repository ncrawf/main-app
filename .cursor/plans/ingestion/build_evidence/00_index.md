# Build Evidence (External) — Lane Index (registry)

Parent router: `../00_evidence_router.md` · Lane doctrine: `_lane.md` · Provenance audit: `../../doctrine/07_evidence_ingestion_ledger.md`

This is the lane **catalog** (sources + runs by global id) — **NOT** the concept registry (`GRD-037`/`GRD-040`). Topics are tags/columns here, never folders.

Lane status: **live** (first sources captured 2026-08-08). Was `latent` placeholder.

## Sources

| EVSRC id | captured | source | type | status | topic_tags | routing_target | promotion |
|---|---|---|---|---|---|---|---|
| `EVSRC-2026-000316` | 2026-08-08 | **Palantir Foundry — Ontology core concepts + link types overview.** Object/property/link/action types; roles as the permissioning model; link-type directionality (bidirectional, two independently traversable and separately named sides) | official vendor documentation | captured · read directly | `typed_relationships`, `governed_write_path`, `dependency_direction` | `D0CKPT-DEC-009` item 2 · `D0CKPT-GRD-004` | **not promoted** |
| `EVSRC-2026-000317` | 2026-08-08 | **Anthropic — define success criteria and build evaluations.** Predeclared specific/measurable criteria; task-specific evals; edge cases; volume-over-quality principle | official vendor documentation | captured · read directly | `verification`, `evals`, `proof_obligation` | `D0CKPT-DEC-009` acceptance test · `D0CKPT-GRD-007` verification | **not promoted** |
| `EVSRC-2026-000318` | 2026-08-08 | **LangGraph — persistence.** Checkpointers vs stores; `thread_id` as the pointer; restart loss, unbounded growth, subgraph checkpoint namespaces | official vendor documentation | captured · read directly | `durable_state`, `pointer_not_copy`, `context_loss` | `D0CKPT-GRD-007` · `AGENTS.md` Boot-Surface Rule | **not promoted** |

## Analysis runs

| EVRUN id | date | sources | outputs | status |
|---|---|---|---|---|
| `EVRUN-2026-000124` | 2026-08-08 | `EVSRC-2026-000316` · `000317` · `000318` | run record · **concept registry + routing map (primary workbench)** · anchor ledger (receipts only) · coverage matrix | `closed` — concepts `C1`–`C6` routed to `D0CKPT-DEC-009`, `D0CKPT-GRD-004`, `D0CKPT-GRD-007`, the `AGENTS.md` Boot-Surface Rule and `scripts/check-boot-surfaces.mjs` |

## Reading order (router §Authoring rule)

**Concept registry first** → reopen the relevant **source packet** for authority/verbatim. The anchor ledger is receipts only and is **never** an authoring source. Nothing in this lane is promotion-grade (`D0THES-GRD-036`).

## Id allocation note

Global `EVSRC-`/`EVRUN-` ids are sequential across the **whole** Evidence Plane. These four were allocated by scanning all refs for the high-water mark on 2026-08-08 (`EVSRC` high `000315`, `EVRUN` high `000123`). The absence of an allocation ledger is the tracked gap `FWREG-012`.

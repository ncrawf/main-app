# Migration status — `2026-spring_ai_substrate/` (closed legacy collection, now under `sources/`)

**status: `structurally_migrated` (2026-06-06)** — no longer an orphan; only optional cleanup remains.

This is the closed Spring-2026 IBM/Stanford AI corpus (47 videos + the Knox strategy thread), already digested + routed via `ai_substrate_routing_spine_REV-176.md` (`D0AI-EVD-001/002`). It predates the Source/Index/Analysis + global-`EVSRC` standard.

## Done (2026-06-06)
- **Moved under `sources/`**: was a *sibling* of `sources/`; now at `outside_learning/sources/2026-spring_ai_substrate/` (a peer of `sources/2026-06/`). The sibling-orphan is gone.
- **EVSRC-mapped in the registry**: occupies `EVSRC-2026-000001 … 000047` in `../../00_index.md` (`v01`=`000001` … `v47`=`000047`). New sources start at `000048`.
- All path references swept across the repo.

## Why `vNN` filenames are KEPT (deliberate, not laziness)
`v06`, `v43`, etc. are load-bearing **citation keys** used across `REV-176`, the guardrails, the `inventory/` clusters, and the evidence ledger. Renaming the 47 files to `EVSRC-…` would break those citations. Per Evidence-Plane doctrine the **index is identity / the brain; filenames are just shelving** — so the files keep `vNN`, and their EVSRC identity lives in the registry.

## Remaining — OPTIONAL, low-priority (`FWREG-005`)
- Physically rename `vNN` → `EVSRC-…` filenames (only if the citation-rewrite cost ever becomes worth it).
- Split each legacy file's co-mingled raw transcript + distillation + extraction into a pure Source + an `analysis/EVRUN-…` run.

Neither is needed for coherence — the collection is now correctly **positioned (under `sources/`), sequenced (`000001–000047`), and mapped.**

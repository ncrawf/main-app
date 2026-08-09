# EVRUN-2026-000124 — Coverage matrix

Document type: `evidence_coverage_matrix` (Evidence Plane · lane `build_evidence`)
Authority: `evidence_nonbinding`. Status: `active`.
Lifecycle role: which sources are covered / weak / missing in the concept registry for run `EVRUN-2026-000124`.
Manifest action: `add_tier2` · Review gate: `user_knox_required`

| Source | Pages read | Concepts extracted | Coverage | Weak / not covered |
|---|---|---|---|---|
| `EVSRC-2026-000316` Palantir Foundry | 2 (core concepts · link types overview) | `C1`, `C2` | **covered** for the typed-relationship mechanism | action-type *validation* semantics, functions, interfaces, object views, AIP — read only as far as the two cited pages; **not** extracted |
| `EVSRC-2026-000317` Anthropic | 1 (define success criteria and build evaluations) | `C3` | **covered** for the criteria-then-eval discipline | grading implementations, LLM-as-judge rubric design, multidimensional weighting — **not** extracted |
| `EVSRC-2026-000318` LangGraph | 1 (persistence) | `C4`, `C5`, `C6` | **covered** for pointer + durable-state and its operational caveats | checkpointer backends, store APIs, interrupt/resume API surface, time-travel mechanics — **not** extracted |

## Known gaps in this run

- **Single page per vendor for Anthropic and LangGraph.** Sufficient for the mechanism claimed; **insufficient for any promotion**, which would require deeper reads and re-verification (`GRD-036`).
- **No comparator was pressured against an OMNI counter-example.** The concepts informed two guardrails; they were **not** adversarially tested, and no comparator *result* is asserted (the discipline Gate-1b §13.3 item 14 demands of Gate 2 is not claimed here).
- **Router-tracked gap acknowledged:** id allocation still relies on scanning (`FWREG-012`). `EVSRC-2026-000316/317/318` and `EVRUN-2026-000124` were allocated by scanning all refs for the high-water mark on 2026-08-08.

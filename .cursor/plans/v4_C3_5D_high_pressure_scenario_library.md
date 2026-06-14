# v4 — C3.5D: High-Pressure Scenario Library (Coverage Manifest + `HCASE-NNN`)  (SHELL)

Document type: `evidence` / scenario corpus (C3.5 arc artifact D; durable + re-runnable) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `shell_pending_population` 2026-06-13 — **populated by the SEPARATE C3.5 pressure-test agent**.
Gate: **G2 (Scenario-Library) — BLOCKED until the Coverage Manifest below passes.** Reuse the `FIELD-NNN`/100-case-bank format so this is a durable, re-runnable simulation corpus ("how did OMNI do against the N cases?").

> SHELL — Part 1 is the Coverage Manifest (must pass G2); Part 2 is the `HCASE-NNN` corpus.

## Part 1 — Coverage Manifest (gates G2)
Two-axis strata table with per-stratum status (`covered` / `thin` / `missing` / `deferred`). Acceptance minimums (plan §Coverage Contract): every facility + every major workflow stratum ≥1 case; high-risk strata multiple; ≥25 deep-trace selections; ≥10 red-team/breaker; uncovered = explicitly deferred / out-of-scope / open-review.

| stratum (axis: facility | workflow) | status | # cases | HCASE ids | note |
|---|---|---|---|---|---|
| _(populate)_ |  |  |  |  |

## Part 2 — Scenario corpus (`HCASE-NNN`, ~100+, tiered)
Tiers: **broad library** → **≥25 deep-trace selections** (flag `[deep-trace]`) → **≥10 red-team/breaker** (flag `[red-team]`). Each case maps to its strata + names the OMNI domains/control-planes plausibly touched.

### HCASE schema (per case)
`HCASE-NNN` · title · care-setting stratum · workflow stratum(s) · actors/authority · the situation · clinical/operational/compliance/billing risk · cross-system/vendor dependencies · expected hard parts · tier {broad / deep-trace / red-team} · OMNI domains/control-planes touched.

### Cases
_(populate — HCASE-001 …)_

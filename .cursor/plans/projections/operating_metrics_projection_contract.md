# `operating_metrics` — Projection Contract (Operating Intelligence layer)

Plane: **P4 Projection** (read-model) · **owns NO canonical truth** · Status: `stub`
Source-of-truth relationship: the Operating-Intelligence projection layer (`REV-174`). It MAY own *derived views / metric definitions / lineage / freshness / explainability* — but NEVER source facts. The broadest projection; feeds most dashboards. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose
Define and compose the business/operating metrics (revenue, labor cost, productivity, utilization, conversion, retention, no-shows, follow-up backlog) once, with definitions + lineage, so every dashboard reads the same numbers.

## §2 Composes (references only)
D3 (schedule/utilization) · D5 (occurrences/throughput) · D6 (revenue/refund/commission-amount) · BIZOPS (labor cost/comp/productivity-inputs) · RBAC · Settings · CM/Observation (clinical metrics, scope-gated).

## §3 Owns nothing of the SOURCE — the binding rule (`T0-15`)
Source facts stay in their domains. This layer owns ONLY the *derived* artifacts: metric definitions, saved views, lineage, freshness, explainability. A "metric stored as primary truth that domains then read back" is the bug.

## §4 Derived metrics / fields
| metric | definition | source | derivation |
|---|---|---|---|
| revenue / margin | sum sales − cost | D6 + BIZOPS | derived |
| revenue-per-provider | revenue ÷ provider | D6/Identity | derived |
| utilization | booked ÷ available | D3/BIZOPS | derived |
| productivity | occurrences/period | D5 | derived |
| retention / churn | repeat behavior | D5/D6 | derived |
| no-show / follow-up backlog | counts | D3/CNS/OFC | derived |

## §5 Freshness + lineage + explainability
Each metric declares freshness (real-time/daily/period), full lineage to source rows, and an explanation; replay-able (no ephemeral UI-only metrics).

## §6 Who may view
admin / owner / analyst (+ scoped provider/manager subsets). Aggregate-by-default; patient-identifiable only by named purpose.

## §7 Consumed by
Owner Dashboard, Analytics surface, Admin Console, Ops Command Center, Provider Operating Profile (scoped), Marketing (growth subset).

## §8 Recovered design / prior gems
`REV-174` (Operating-Intelligence layer — the sweep-item that this formalizes); clinical-assertion-analytics audit; authority-vs-longitudinal-confidence (metrics ≠ authority).

## §9 Source docs
`REV-174` · `audits/2026-04-27_clinical_assertion_analytics_audit.md` · `audits/2026-04-30_authority_vs_longitudinal_confidence.md`.

## §10 Open questions (→ `08`)
- `REV-174`: full scope of the layer (which metrics, definition governance, lineage substrate) = the negative-space sweep. This contract is the stub home.

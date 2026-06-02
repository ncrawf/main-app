# Analytics / Operating Intelligence — Surface Contract

Plane: **P5 Surface** · Type: `dashboard` · Status: `stub` · Persona(s): admin/owner/analyst · Build priority: `later`
Source-of-truth relationship: the render surface for the `operating_metrics` projection (P4 / `REV-174`). Pure read; owns nothing. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
*Ask and answer operating questions* — explore metrics across care/commerce/scheduling/workforce with defined definitions, lineage, freshness, and explainability. The exploration surface over the Operating-Intelligence projection layer.

## §2 Persona(s) + access
admin / owner / analyst. RBAC analytics atoms; aggregate-by-default; patient-identifiable only by named purpose.

## §3 Reads from (references, owns none)
`operating_metrics` projection over D3/D5/D6/BIZOPS/RBAC/Settings/CM/Observation. (All source truth stays in its domain.)

## §4 Projections used (P4)
`operating_metrics` (primary) · `marketing_attribution` · `workforce_operating_context` (rollups).

## §5 Writes / actions allowed
Read-only (define saved views/metric definitions → the projection layer, not source). No truth writes.

## §6 Forbidden
**Never owns source truth** (`T0-15`); never a parallel metric store that drifts from domains; never expose patient-identifiable data without named purpose; metric = derived-with-lineage, never authority.

## §7 Metrics shown
Whatever `operating_metrics` defines (revenue, utilization, productivity, conversion, retention, labor, no-shows…) — each with definition + source + freshness + lineage + explainability.

## §8 Workflow states
n/a (exploration).

## §9 Recovered design / prior gems
*Deposit box: the analytics/metrics discussions; `REV-174` Operating-Intelligence projection layer (owns derived views/metric-defs/lineage/freshness/explainability, never source); clinical-assertion-analytics audit framing.*

## §10 Source docs feeding this surface
`REV-174` · `audits/2026-04-27_clinical_assertion_analytics_audit.md` · `audits/2026-04-30_authority_vs_longitudinal_confidence.md` · `projections/operating_metrics_projection_contract.md`.

## §11 Day-1 vs later
Later — gated on `REV-174` (Operating-Intelligence projection layer) definition (sweep item).

## §12 Open questions (→ `08`)
- `REV-174`: scope the projection layer (derived views / metric-defs / lineage / freshness / explainability) before this surface builds.

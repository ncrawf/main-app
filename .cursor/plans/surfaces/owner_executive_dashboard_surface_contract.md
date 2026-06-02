# Owner / Executive Dashboard — Surface Contract

Plane: **P5 Surface** · Type: `dashboard` · Status: `stub` · Persona(s): owner / executive · Build priority: `next`
Source-of-truth relationship: references P1 truth via projections; read-mostly. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
The owner's whole-business surface: *is the business healthy* — revenue, labor cost, provider productivity, utilization, growth, retention, P&L-grade operating intelligence across brands/sites.

## §2 Persona(s) + access
owner / executive / legal-entity-owner. RBAC owner atoms; cross-brand/site scope per Federation; operator-neutrality respected (`T0-14`).

## §3 Reads from (references, owns none)
Operating-Intelligence projection over D6 (revenue) · BIZOPS (labor cost, comp) · D5 (throughput) · D3 (utilization) · CNS (growth/funnel) · Federation (per-operator rollups).

## §4 Projections used (P4)
`operating_metrics` (primary) · `marketing_attribution` · `workforce_operating_context` (team rollup).

## §5 Writes / actions allowed
Read-mostly. Possible: set targets/tiers → Settings/BIZOPS; approve high-value exceptions → owning domain (Tier-4). No truth recompute.

## §6 Forbidden
Never a truth store (pure projection); never expose patient-identifiable clinical data without named purpose (aggregate-by-default, like the Network Governance Plane); never reweight a clinical decision by cost pressure (BIZOPS care-truth-isolation).

## §7 Metrics shown
Revenue, labor cost, margin, revenue-per-provider, utilization, retention/churn, growth — all `operating_metrics` (derived, lineage-traceable, never source).

## §8 Workflow states
n/a (dashboard); drill-through to other surfaces.

## §9 Recovered design / prior gems
*Deposit box: "your payroll hit 3k in bonus, here's next-tier" framing (WI, `REV-173`); P&L/business-snapshot (Mindbody business-snapshot raw 21, evidence); operating-intelligence rollups (`REV-174`).*

## §10 Source docs feeding this surface
`REV-174` (operating intelligence) · BIZOPS · D6 · Mindbody sales-report/business-snapshot (21, evidence).

## §11 Day-1 vs later
Later (needs `operating_metrics` projection layer, `REV-174`). Minimal revenue/labor snapshot possible earlier.

## §12 Open questions (→ `08`)
- Depends on `REV-174` Operating-Intelligence layer definition.

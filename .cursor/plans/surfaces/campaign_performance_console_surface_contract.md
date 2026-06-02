# Campaign Performance Console — Surface Contract

Plane: **P5 Surface** · Type: `console` · Status: `stub` · Persona(s): marketer · Build priority: `next`
Source-of-truth relationship: per-campaign operational view (sibling to Marketing/Growth Dashboard's strategic overview). References P1; commits via CNS/Messaging/D6. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
*Operate individual campaigns* — see each `campaign_definition`'s flow, branch performance, collision/priority outcomes, cadence/burnout status, per-step engagement, and drill into conversions.

## §2 Persona(s) + access
marketer / campaign-manager. RBAC marketing atoms; PHI-safe by construction.

## §3 Reads from (references, owns none)
CNS (campaign orchestration §9.3: definition/step/branch, 11-tier priority, collision-exits, cadence caps) · Messaging (per-step sends/engagement) · D6 (conversion/attribution/promo) · Settings (campaign catalog).

## §4 Projections used (P4)
`marketing_attribution` · `operating_metrics` (campaign subset).

## §5 Writes / actions allowed (verbs → owning domain)
pause/exit/adjust campaign → CNS campaign engine · adjust template/copy → Messaging template governance. **Never sends directly; never recomputes attribution.**

## §6 Forbidden
Never store campaign metrics as truth; never bypass cadence/burnout caps or collision-exit; never PHI in tracking; external platforms = observers only.

## §7 Metrics shown
Per-campaign: enrollment, step progression, branch outcomes, send/open/click, conversion, collision-exits, cadence status — `marketing_attribution`.

## §8 Workflow states
`campaign_definition` → `campaign_step` → `CampaignBranch` (18 typed conditions); 11-tier priority + collision resolution (incompatible MUST EXIT); cadence cooldown matrix.

## §9 Recovered design / prior gems
*Deposit box (from marketing lifecycle audit Parts 6-8): the drip state-machine schema, 18 branch conditions, branch-evaluation rules, conversion-driven transitions, the soft-GLP-1-lead worked example, 11-tier priority hierarchy + collision actions, cadence hard-caps + cooldown matrix + resend logic + burnout signals. Engine owned by CNS §9.3 / `REV-170`; this console renders it.*

## §10 Source docs feeding this surface
`audits/2026-05-01_marketing_lifecycle_growth_orchestration.md` Parts 6-8 + worked example · CNS §9.3 · `REV-170`.

## §11 Day-1 vs later
Later (builds with the campaign engine, `REV-170`).

## §12 Open questions (→ `08`)
- Merge with Marketing/Growth Dashboard vs keep as drill-through console — confirm at build.

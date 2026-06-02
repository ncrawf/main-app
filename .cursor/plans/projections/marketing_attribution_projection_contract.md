# `marketing_attribution` — Projection Contract

Plane: **P4 Projection** (read-model) · **owns NO canonical truth** · Status: `stub`
Source-of-truth relationship: the composed growth/attribution read-model for marketing surfaces. Marketing is NOT a domain (`GRD-026`); this projection composes its decomposed concerns. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose
Compose lead flow → funnel conversion → campaign performance → attribution → offer/promo ROI into one read-model for the Marketing/Growth + Campaign-Performance surfaces, without a marketing data store.

## §2 Composes (references only)
D6 (`attribution_line`/promo/discount/revenue) · CNS (campaign orchestration §9.3: definition/step/branch outcomes) · Messaging (sends/engagement) · Identity (lead/contact state) · Intake (funnel conversion) · Settings (offer/campaign catalog).

## §3 Owns nothing — the binding rule
**Segmentation/cohorts/lead-state = derived, NOT stored** (marketing audit Part 9, binding). Attribution truth = D6; campaign state = CNS; sends = Messaging. External platforms (Klaviyo/Meta/Google) are observers, never source.

## §4 Derived metrics / fields
| field | definition | source | derivation |
|---|---|---|---|
| funnel_conversion | stage→stage rate | Intake/Identity/CNS | derived |
| campaign_performance | enroll/step/convert | CNS/Messaging | derived |
| attribution | gclid/fbclid/ttclid→conversion | D6 attribution_line | join |
| offer_roi | redemption vs cost | D6 promo | derived |

## §5 Freshness + lineage + explainability
Daily/per-conversion; traceable to attribution_line + campaign + send events; PHI-safe (no PHI in tracking/UTM).

## §6 Who may view
marketer / owner. RBAC marketing atoms; aggregate; never patient-identifiable to external platforms.

## §7 Consumed by
Marketing/Growth Dashboard, Campaign Performance Console, Owner Dashboard.

## §8 Recovered design / prior gems
Marketing lifecycle audit Parts 3/4/5/9/12 (lead state, profile, 18 campaign types, segmentation-derived, promo engine); `REV-170` campaign engine home; privacy/UTM discipline (Part 14).

## §9 Source docs
`audits/2026-05-01_marketing_lifecycle_growth_orchestration.md` · CNS §9.3 · D6 §4/§10 · `REV-170`.

## §10 Open questions (→ `08`)
- Overlap with `operating_metrics` (growth subset) — keep marketing-specific composition distinct vs fold; confirm.

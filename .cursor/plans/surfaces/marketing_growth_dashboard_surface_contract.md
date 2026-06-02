# Marketing / Growth Dashboard — Surface Contract

Plane: **P5 Surface** · Type: `dashboard` · Status: `stub` · Persona(s): marketer / owner · Build priority: `next`
Source-of-truth relationship: references P1 truth via projections; commits via owning domains. Indexed in `OMNI_Surface_Map_vNext.md`. **Marketing is NOT a domain (`GRD-026`)** — this surface composes the decomposed marketing concerns.

---

## §1 Purpose / job-to-be-done
The growth surface: *see and steer acquisition + lifecycle + retention* — lead flow, funnel conversion, campaign performance, attribution, offers/promos, cross-sell, reactivation.

## §2 Persona(s) + access
marketer / growth / owner. RBAC marketing atoms; PHI-safe by construction (marketing copy/UTM discipline; no PHI to external platforms).

## §3 Reads from (references, owns none)
D6 (attribution/promo/discount/revenue) · CNS (campaign orchestration §9.3, lead-state) · Messaging (sends/engagement) · Settings (offer/campaign catalog) · Identity (lead/contact state) · D7/RBAC (marketing consent) · Operating-Intelligence (metrics).

## §4 Projections used (P4)
`marketing_attribution` (primary) · `operating_metrics` (growth subset).

## §5 Writes / actions allowed (verbs → owning domain)
define/launch campaign → CNS campaign engine (`repo/campaigns/`, `REV-170`) · define offer/promo → Settings/D6 (`repo/offers/`) · approve template/copy → Messaging template governance (CODEOWNER PR-time). **Never sends directly (Messaging); never recomputes revenue (D6).**

## §6 Forbidden
Never store segments/metrics as truth (segmentation = derived projection; `marketing_attribution`/`operating_metrics`); never put PHI in UTM/external platforms (forbidden UTM patterns); never bypass marketing consent gate; external platforms (Klaviyo/Meta/Google) are OBSERVERS, never source-of-truth.

## §7 Metrics shown
| metric | source | projection | freshness | lineage |
|---|---|---|---|---|
| lead flow / funnel conversion | Identity/CNS/Intake | marketing_attribution | daily | lead-state trace |
| campaign performance | CNS/Messaging | marketing_attribution | daily | campaign trace |
| attribution (gclid/fbclid/ttclid) | D6 attribution | marketing_attribution | per-conversion | attribution_line |
| offer/promo redemption + ROI | D6 | marketing_attribution | daily | promo wallet |

## §8 Workflow states
Campaign lifecycle (CNS `campaign_definition`/`campaign_step`/`CampaignBranch` 18-condition state machine); offer lifecycle (D6).

## §9 Recovered design / prior gems
*Deposit box (rich — from `audits/2026-05-01_marketing_lifecycle_growth_orchestration.md`, 16 parts):*
- **Lead state model** (Part 3) + **marketing profile schema** (Part 4) — lead/contact state is Identity + derived projection, NOT a marketing store.
- **Campaign taxonomy: 18 types** (Part 5) + **drip state-machine** (`campaign_definition`/`campaign_step`/`CampaignBranch` 18 typed conditions, Part 6) — owned by CNS §9.3 campaign engine (`repo/campaigns/`); this dashboard VISUALIZES it.
- **11-tier campaign priority + collision rules** (Part 7; incompatible campaigns MUST EXIT) + **cadence/burnout caps + cooldowns** (Part 8) — CNS; surfaced here as guardrails/health.
- **Segmentation model** (Part 9) — **derived, NOT stored** (binding).
- **Cross-sell + adjacent-pathway** (Part 10), **supplement model** standalone-vs-adjunct (Part 11), **promo/offer engine** (`repo/offers/`, Part 12), **lifecycle moments** (Part 13).
- **Privacy/UTM discipline** (Part 14): allowed vs FORBIDDEN UTM patterns, tracking-ID discipline, CI-lint, consent enforcement — privacy floors for this surface.
- **~80-template library** (Part 15) — Messaging template registry; visualized as send/engagement here.
- *Pending-deeper-deposit: the per-template + per-campaign visualization detail (the dashboard widgets themselves) when this surface goes build-near.*

## §10 Source docs feeding this surface
`audits/2026-05-01_marketing_lifecycle_growth_orchestration.md` (primary) · `audits/2026-05-01_marketing_system_pressure_test.md` · `audits/2026-05-01_dynamic_behavior_pressure_test_post_marketing.md` · CNS §9.3 · D6 §4/§10 · `REV-170`.

## §11 Day-1 vs later
Day-1: minimal (lead flow + basic attribution). Next: full campaign/attribution dashboard once campaign engine (`REV-170`) builds.

## §12 Open questions (→ `08`)
- Marketing dashboard vs Campaign-performance console boundary (this = strategic/overview; that = per-campaign operational) — confirm or merge.

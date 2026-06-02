# Conversion Funnel (patient/prospect) — Surface Contract

Plane: **P5 Surface** · Type: `app_surface` + `workflow` · Status: `stub` · Persona(s): patient/prospect · Build priority: `day_1`
Source-of-truth relationship: the prospect→patient conversion experience (post-clinical-decision). References Intake/D6/Identity/CNS; commits via those. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
*Convert a candidate into a committed, paying patient* — candidacy result → treatment preview → profile hard-commit → membership/checkout, in MAIN voice, online + in-office variants.

## §2 Persona(s) + access
prospect / new patient. Identity self-service; consent + eligibility gates upstream.

## §3 Reads from (references, owns none)
Intake (modules/atoms) · Identity (lead→patient) · D6 (membership pricing/checkout) · CNS (candidacy/funnel orchestration) · Settings (pricing profile/catalog).

## §4 Projections used (P4)
candidacy/eligibility projection · entitlement/pricing projection (D6).

## §5 Writes / actions allowed (verbs → owning domain)
submit profile hard-commit → Intake atoms (`universal.profile_hard_commit_composite`) · purchase membership → D6 · accept treatment → OFC/D6. **No clinical truth; eligibility/candidacy computed by clinical/Intake, not the funnel.**

## §6 Forbidden
Never present unverified candidacy as clinical truth; never bypass eligibility/consent; never store pricing as funnel truth (D6 owns); never name sensitive pathway outside consented comms.

## §7 Metrics shown
Patient-facing progress only (steps remaining); funnel analytics live in marketing/operating-intelligence, not here.

## §8 Workflow states
Modules 22-26: smart_loading → candidacy_result → treatment_preview → profile_hard_commit (+ address validator) → membership_checkout. Online (2-3 screens) + in-office variants; interstitial session state binding.

## §9 Recovered design / prior gems
*Deposit box (from `specs/conversion_funnel_modules_v1.md`): Module 22 smart_loading_v1; Module 23 candidacy_result_v1; Module 24 glp1 treatment_preview_v1 (online 2-screen / in-office 3-screen); Module 25 profile_hard_commit_v1 (fields + address validator + composite atom group); Module 26 membership_checkout_v1 (online 2-screen / in-office 2 post-encounter paths); `membership_pricing_profile_v1` schema + GLP-1 default instance; interstitial session-state discipline; atomization boundary (1K.0.5); cross-pathway reuse projection; MAIN voice principles. Pricing → D6; modules → Intake; the funnel SURFACE = here.*

## §10 Source docs feeding this surface
`specs/conversion_funnel_modules_v1.md` (primary, deposited) · `specs/glp1_pathway_modules_v1.md` · intake contract · D6 (membership/pricing).

## §11 Day-1 vs later
Day-1 (GLP-1 first slice). Later: per-pathway funnel variants (cross-pathway reuse projection).

## §12 Open questions (→ `08`)
- Legal content dependencies (legalops handoff, per spec §594).
- Funnel modules ownership: Intake (module logic) vs this surface (composition) — confirm at build.

# Workforce Intelligence Surface — Surface Contract

Plane: **P5 Surface** · Type: `profile` + `dashboard` · Status: `stub` · Persona(s): provider / admin / owner · Build priority: `next`
Source-of-truth relationship: the persona-facing surface for the Workforce Intelligence capability (`REV-173`); renders the `workforce_operating_context` projection. References P1; commits nothing. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
*See and operate the workforce as a subject of the organism* — onboarding/training/competency status, comp-tier + commission progress, performance context, coaching. The human-facing render of `workforce_operating_context`.

## §2 Persona(s) + access
provider (self) · manager/admin (team) · owner (rollup). RBAC scope atoms; staff-context ≠ patient-context constraints.

## §3 Reads from (references, owns none)
BIZOPS (`workforce_intelligence_state`: competency/training/attestation/comp-tier) · RBAC (capability/competency-gate) · Federation (license) · Settings (requirements/modules) · D7 (signed artifacts/certs) · D3/D5/D6 (performance evidence).

## §4 Projections used (P4)
`workforce_operating_context` (primary) · `provider_profile` · `operating_metrics` (scoped).

## §5 Writes / actions allowed (verbs → owning domain)
record training completion/score → BIZOPS · sign policy/attestation → D7 + RBAC T4 · initiate coaching action (manager) → CNS/BIZOPS · adjust comp-tier (owner) → BIZOPS. **AI coaching = proposes-never-commits (§12.8, deferred AI #12).**

## §6 Forbidden
Never grant authority from the UI (RBAC); never self-clear a competency-gate; never recompute commission (D6/BIZOPS split); never store metrics as truth; never conflate staff context with patient context.

## §7 Metrics shown
Training completion %, competency status/level, comp-tier progress, productivity/conversion (scoped) — `workforce_operating_context` + `operating_metrics`.

## §8 Workflow states
Onboarding → training → competency-active → solo-cleared; comp-tier progression; attestation lifecycle.

## §9 Recovered design / prior gems
*Deposit box: the laser-competency gating example (Hannah 82%→91%); "you prescribe 25% more than peers" / "sales down, here's what to do" / "next tier requires X" coaching (AI #12); training modules + quizzes + policy attestation + comp-tier criteria (definitions → Settings; state → BIZOPS).*

## §10 Source docs feeding this surface
`REV-173` (WI) · BIZOPS §4 (`workforce_intelligence_state`) · `projections/workforce_operating_context_projection_contract.md` · thesis §8 (workforce-as-subject).

## §11 Day-1 vs later
Day-1-adjacent: competency/training status + gating visibility (compliance). Later: AI coaching/intervention (AI #12), rich performance analytics (REV-174).

## §12 Open questions (→ `08`)
- `REV-173` ratification; AI coaching substrate at AI #12.

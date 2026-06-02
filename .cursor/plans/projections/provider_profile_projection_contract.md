# `provider_profile` — Projection Contract

Plane: **P4 Projection** (read-model) · **owns NO canonical truth** · Status: `stub`
Source-of-truth relationship: the per-provider composed profile (a specialization of the actor-scoped projection family; admin profile is the same shape minus clinical license). Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose
Compose a single coherent provider profile — identity, credentials, capability, employment, competency, schedule, performance — for provider/admin/owner surfaces, without re-deriving per surface.

## §2 Composes (references only)
Identity (person) · Federation (`provider_license`/`provider_credentialing`/jurisdiction) · RBAC (capability/atoms) · BIZOPS (employment/comp-tier/WI-state/operational-state) · D3/D5/D6 (schedule/work/sales evidence) · D7 (certs/contracts) · Settings (requirements) · CM/Observation (clinical metrics, scope-gated).

## §3 Owns nothing — the binding rule
Pure projection. Identity owns the person; Federation the license; RBAC the capability; BIZOPS the employment/competency. No field is authoritative here.

## §4 Derived metrics / fields
Composed view (credentials valid?, cleared-for?, comp-tier, productivity) — derived; `operating_metrics` supplies the metric values.

## §5 Freshness + lineage + explainability
Mixed (license/competency event-fresh; performance period). Traceable to each owning domain.

## §6 Who may view
provider (self) / manager (team) / owner. RBAC scope; admin profile variant excludes clinical license.

## §7 Consumed by
Provider Operating Profile, Admin Console, Owner Dashboard, Workforce Intelligence surface.

## §8 Recovered design / prior gems
Provider/admin/profiles-as-projections (the sweep finding — NOT domains); Mindbody profile/cockpit raws (evidence, not parity); `provider_profile` vs `provider workspace` vs `provider dashboard` = aliases over this projection + the workspace surface.

## §9 Source docs
Identity / Federation / RBAC / BIZOPS contracts · Mindbody 10/11 (evidence).

## §10 Open questions (→ `08`)
- Admin/ops profile = same projection minus clinical license — confirm one parametrized projection vs siblings.

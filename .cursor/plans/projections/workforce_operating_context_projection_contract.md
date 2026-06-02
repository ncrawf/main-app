# `workforce_operating_context` — Projection Contract

Plane: **P4 Projection** (read-model) · **owns NO canonical truth** · Status: `stub`
Source-of-truth relationship: the unified workforce read-model for the Workforce Intelligence capability (`REV-173`). Same machinery as the patient `context_packet`, NOT equivalent — different authority/privacy/purpose-of-use constraints (staff context ≠ patient context). Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose
Compose a coherent, per-actor (or team) operating view of a workforce member: who they are, what they may do, how trained/competent, how compensated, how performing, what's next — so surfaces (Provider/Admin/Owner/WI) don't each re-derive it.

## §2 Composes (references only)
Identity (person) · Federation (`provider_license`/credential) · RBAC (capability + competency-gate result) · BIZOPS (`workforce_intelligence_state`: competency/training/attestation/comp-tier; employment; operational-state) · D7 (signed artifacts/certs) · Settings (requirements/modules) · D3/D5/D6 (schedule/work/sales evidence).

## §3 Owns nothing — the binding rule
Stores no canonical fact. Competency/training state lives in BIZOPS; license in Federation; capability in RBAC; artifacts in D7. If a value here becomes the source, that is the bug.

## §4 Derived metrics / fields
| field | definition | source | derivation |
|---|---|---|---|
| competency_status | cleared/pending per service | BIZOPS+Settings | gate eval |
| training_progress | module score/completion | BIZOPS | rollup |
| comp_tier_progress | toward next tier | BIZOPS | period calc |
| productivity_context | occurrences/sales (scoped) | D5/D6 | projection (operating_metrics) |

## §5 Freshness + lineage + explainability
Event-fresh for competency/attestation; period for comp/productivity. Every field traces to its owning-domain record. Explainable ("blocked from laser solo because competency X not active").

## §6 Who may view
provider (self) / manager (team) / owner (rollup), per RBAC scope. **Staff-context constraints**: not patient-context rules; workforce performance data is access-controlled separately; care-truth-isolation (a labor metric never gates a clinical decision).

## §7 Consumed by
Workforce Intelligence surface, Provider Operating Profile, Admin Console, Owner Dashboard.

## §8 Recovered design / prior gems
`REV-173` (WI); BIZOPS §4 (`workforce_intelligence_state`); thesis §8 (workforce-as-subject); the laser-competency example.

## §9 Source docs
`REV-173` · BIZOPS contract · thesis §8.

## §10 Open questions (→ `08`)
- AI-derived coaching fields deferred to AI #12 (proposes-never-commits).

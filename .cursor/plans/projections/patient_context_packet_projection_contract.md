# patient `context_packet` — Projection Contract

Plane: **P4 Projection** (read-model) · **owns NO canonical truth** · Status: `stub`
Source-of-truth relationship: the canonical patient read-model already named in thesis §8 (Sense-loop terminus) + CNS §9.1 (layered, authority-labeled). This contract formalizes it as a P4 artifact. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose
Compose *what is true about this patient now, by whom, at what authority* into a temporary, authority-labeled, provenance-preserving packet for CNS coordination + surface rendering — without copying or flattening underlying truth.

## §2 Composes (references only)
D7 (raw `media_artifact` refs) · Observation (structured values + ingestion-verification state) · Clinical Memory (`extracted_assertion`/assertion ids + `source_authority` + `clinical_adoption_state`) · Intake (responses) · D3/D5 (appointments/occurrences/care_episode) · source metadata (dates/specimen/facility/operator) · model_version/extraction lineage where AI-parsed · context snapshot/hash.

## §3 Owns nothing — the binding rule
Non-canonical (CNS §9.1). References + snapshots; never copies raw artifacts into CNS records; never a second truth store.

## §4 Derived metrics / fields
Authority-labeled context bundle (not metrics). Each item carries its authority tier.

## §5 Freshness + lineage + explainability
Temporary with decay/durability rules (CNS §10.1); full `trace_lineage` (source_event→candidate→resolver→commit); authority-by-action-class.

## §6 Who may view
Care team per consent / `care_relationship` / `shared_context_grant` (Federation) + RBAC. **Patient-context constraints** (distinct from staff-context): cross-operator visibility only via grant.

## §7 Consumed by
Patient App, Provider Operating Profile, Intake Review Workspace, Provider Task Workspace; CNS coordination.

## §8 Recovered design / prior gems
LI patient operating context (signal-authority-ladder, contact discipline, signal-to-action pipeline, coherence/decay — `doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`); CNS §8/§9.1 layered-context-packet evidence-authority rule; layered accountability chain (D7→Obs→CM→action).

## §9 Source docs
thesis §8 · CNS §8/§9.1/§10.1 · LI patient operating context doctrine.

## §10 Open questions (→ `08`)
- `REV-154` (CNS layered-context-packet policy) — confirm at CNS/AI pass.

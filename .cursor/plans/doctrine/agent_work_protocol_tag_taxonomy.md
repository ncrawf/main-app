# Agent Work Protocol Tag Taxonomy

Document type: `doctrine`
Authority: governance_binding canonical vocabulary for lane/domain/surface/build-entry-trigger tags
Status: active
Domain(s): architecture_governance, build_os, agent_execution
Lifecycle role: canonical terminology / routing index for tag-based retrieval
Source-of-truth relationship: canonical vocabulary referenced by Agent Work Protocol §4/§6, Future Work Registry, and Build Entry Gate retrieval routing; does not own ledger/catalog/read-graph schema contracts
Supersedes: implicit/scattered tag usage across protocol/registry/read-graph references
Superseded by: none
Manifest action: add_tier1
Review gate: user_knox_required

---

## Purpose

Canonical tag vocabulary used wherever the framework relies on tag-based retrieval:
- `agent_work_protocol.md` §4 Context Loading,
- `agent_work_protocol.md` §6 Build-Entry Checks,
- `future_work_registry.md` row schema (`domain_tags`, `lane_tags`, `affected_surfaces`, `build_entry_trigger`),
- `04_manifest_read_graph.md` workstream routing,
- `11_build_entry_gate_v0.md` lane admission.

Tag-based retrieval cannot be deterministic without canonical vocabulary. This artifact closes that gap.

---

## Scope and Non-Authority

- Defines canonical tag values and rules.
- Does NOT define ledger/catalog/read-graph schemas (those remain in their canonical homes).
- Does NOT replace workstream definitions in read graph (this is the vocabulary; read graph is the route map).
- Does NOT promote any future-work item; promotion still requires the protocol lifecycle rule.

---

## 1) `domain_tags` (closed set; extend via Open Review)

Anchored to the workstreams already ratified in `04_manifest_read_graph.md` Domain Routing Table:

- `cns_orchestration`
- `d3_scheduling`
- `d5_actualized_work`
- `d6_commerce`
- `d7_documentation_evidence`
- `messaging_communications`
- `longitudinal_intelligence`
- `architecture_governance`
- `build_os`
- `intake`
- `identity_resolution`
- `evidence_processing`
- `integration_portability`

Rules:
- Use exactly one or more values from this set on any row that has `domain_tags`.
- New domain tag proposals require an open-review row (review gate `architecture_steward_required`) before use in build-entry retrieval.
- Composite tags (e.g., `d5_d7_seams`) allowed when an artifact materially spans both domains; do not invent free-form domain labels.

---

## 2) `lane_tags` (closed set; extend via Open Review)

Lanes describe the type of work package, not the domain. Anchored to Build OS execution patterns:

- `governance_lane` — control-plane/charter/protocol/governance edits.
- `doctrine_lane` — domain-specific doctrine authoring/amendment.
- `extraction_lane` — corpus extraction/anti-shrouding waves.
- `narrow_slice_lane` — single-slice implementation (per Build Entry Gate v0 first candidate slice).
- `integration_lane` — vendor/external integration work.
- `evidence_lane` — evidence-only ingestion/review (no canonization).
- `protocol_dogfood_lane` — Agent Work Protocol dry-run/validation passes.
- `audit_lane` — pressure tests, retrospective audits.
- `handoff_lane` — operational continuity packages only.

Rules:
- Exactly one primary `lane_tag` per work package; secondary lane tags allowed when explicitly justified.
- Lane tags are NOT a substitute for domain tags.
- New lane tags require open-review row (`architecture_steward_required`).

---

## 3) `affected_surfaces` (closed set; extend via Open Review)

Surfaces describe what user/system surface the work touches. Used in Future Work Registry and build-entry retrieval:

- `patient_surface`
- `provider_surface`
- `staff_surface`
- `admin_surface`
- `emr_surface`
- `billing_surface`
- `commerce_surface`
- `scheduling_surface`
- `messaging_surface`
- `inbox_surface`
- `clinical_documentation_surface`
- `external_line_surface`
- `governance_surface`
- `agent_runtime_surface`
- `none` — explicitly no end-user/system surface impact (governance-internal only).

Rules:
- One or more values per row that has `affected_surfaces`.
- Use `none` rather than omitting the field when the work has no surface impact.
- New surface tags require open-review row (`domain_owner_required` for surface-bearing domains; `architecture_steward_required` for governance-internal).

---

## 4) `build_entry_trigger` (open-vocabulary, structured pattern)

Build entry triggers describe **when** a future-work row should be retrieved at lane admission. They are open-vocabulary because they describe specific work-package contexts, but they must follow a structured pattern:

Required pattern:
`read_before_<scope>_work`

Examples (existing/seeded):
- `read_before_emr_work`
- `read_before_provider_surface_work`
- `read_before_scheduling_readiness_work`
- `read_before_care_journey_work`
- `read_before_external_line_work`
- `read_before_messaging_work`
- `read_before_commerce_work`
- `read_before_documentation_evidence_work`
- `read_before_d3_scheduling_work`
- `read_before_d5_actualized_work`
- `read_before_d6_commerce_work`
- `read_before_d7_documentation_evidence_work`
- `read_before_cns_orchestration_work`
- `read_before_longitudinal_intelligence_work`
- `read_before_messaging_communications_work`
- `read_before_integration_portability_work`
- `read_before_intake_work`
- `read_before_identity_resolution_work`

Rules:
- Use the `read_before_<scope>_work` pattern; do not invent free-form trigger strings.
- `<scope>` should resolve to a recognized domain, surface, or workstream.
- Multi-trigger rows allowed (a future-work row may carry multiple triggers if applicable).

---

## 5) `item_type` (for Future Work Registry rows)

Anchored in `agent_work_protocol.md` §6 Future Work Registry Contract; re-stated here for vocabulary completeness:

- `architecture_seam`
- `product_capability`
- `surface_feature`
- `integration_future`
- `business_ops_future`
- `clinical_ops_future`
- `infrastructure_future`

Rules:
- Exactly one `item_type` per registry row.
- New `item_type` values require Charter/Protocol revision, not open-review (this is the protocol's own enum).

---

## 6) Application Rules

### Retrieval-Side (Build Entry / Context Loading)

- Agents at build-entry MUST declare current `lane_tag`, `domain_tags`, and `affected_surfaces` for the work package.
- Future-work retrieval matches by intersection of declared tags AND `build_entry_trigger` strings.
- If no rows match, the explicit `Future Work Registry checked; no matching rows found.` line must appear in the pre-edit checkpoint.

### Authoring-Side (Future Work Registry / New Artifacts)

- All new Future Work Registry rows MUST populate `domain_tags`, `lane_tags`, `affected_surfaces`, `item_type`, and at least one `build_entry_trigger`.
- Rows missing any of those fields are non-compliant and must be parked under explicit open-review until tags are assigned.

### Extension Rules

- `domain_tags`, `lane_tags`, `affected_surfaces` are CLOSED sets. Extension requires an open-review row with `architecture_steward_required` (or `domain_owner_required` for surface-bearing domains).
- `build_entry_trigger` is open-vocabulary but pattern-locked (`read_before_<scope>_work`). New triggers do not require open-review unless they introduce a new domain/surface concept simultaneously.
- `item_type` is locked at the protocol level.

---

## 7) Maintenance

Per Coordination Charter Protocol Freshness Triggers, this taxonomy is reviewed when:
- new workstream is ratified in read graph,
- a new surface is introduced into the system map,
- a new lane type emerges from Build OS rollout,
- recurring tag drift is observed in build-entry retrieval reports.

Updates require:
- explicit rationale in stop report,
- catalog row updated,
- pointer references in Protocol §4/§6, Future Work Registry, Read Graph, and Build Entry Gate verified.

---

## 8) Non-Loss Note

This taxonomy formalizes vocabulary that was already implicit in the read graph and build entry gate. Nothing is being demoted; this is a closure of `AWP-REV-TAGS-001` with no demotion in the preservation matrix.

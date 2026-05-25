# OMNI Manifest Read Graph

Document type: `manifest_or_catalog`
Authority: Boot-sequence routing index for domain/workstream read requirements
Status: active
Domain(s): architecture_governance, read_routing
Lifecycle role: Mandatory routing engine for agent/builder entry
Source-of-truth relationship: Derived from corpus catalog + authority routing + supersession state; boot-rule semantics sourced from `00_architecture_memory_control_plane.md`
Supersedes: ad-hoc reading lists and "read everything" workflows
Superseded by: none
Manifest action: Tier 0 governance entrypoint
Review gate: User/Knox approval required before Tier assignments are finalized

---

## Boot Rule Link

Canonical boot-rule source: `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`.

This read graph is part of the mandatory boot sequence and must remain synchronized with:
- `AGENTS.md`
- `.cursor/plans/system_map_three_layers_60706286.plan.md`
- `.cursor/plans/doctrine/00_omni_coordination_charter.md`
- `.cursor/plans/doctrine/agent_work_protocol.md`
- `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`

For implementation-lane work, it must also remain synchronized with:
- `.cursor/plans/doctrine/09_omni_build_os_layer_model.md`
- `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md`
- `.cursor/plans/doctrine/11_build_entry_gate_v0.md`

---

## Current-State Truth Pointer (Binding)

Use this pointer to avoid ambiguity between active state and historical checkpoint addenda.

- Permanent Build OS model (conceptual): `.cursor/plans/doctrine/09_omni_build_os_layer_model.md`
- Build OS rollout sequence (execution order): `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md`
- Active Step-2 gate artifact (D1 readiness only): `.cursor/plans/doctrine/11_build_entry_gate_v0.md`
- Canonical boot + intake enforcement: `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`
- Active file inventory + disposition status: `.cursor/plans/doctrine/01_master_corpus_catalog.md`
- Conflict/open-review state truth: `.cursor/plans/doctrine/05_supersession_conflict_ledger.md` + `.cursor/plans/doctrine/08_open_review_queue.md`

Interpretation rule:
- historical wave/addendum content has been extracted to the History Archive (see `## Current Routing Boundary` below); current-state routing lives in this file only;
- current-state decisions must be read from the sources above when conflict or ambiguity exists.

---

## Current Routing Boundary

- This file contains current routing only.
- Historical wave records, gate verdicts, consolidation stages, and post-wave closure addenda live in `.cursor/plans/doctrine/04_manifest_read_graph_history_archive_2026-05-22.md`.
- The archive is consult-only and `historical_nonbinding`.
- If archive content conflicts with this main file, this main file wins.
- Promotion of any historical content back to current routing requires explicit doctrine update here, not in the archive.

---

## Tier Semantics Reconciliation Rule

The read graph and the master corpus catalog use related but distinct tier concepts:

- **Catalog `manifest_action`** (e.g., `add_tier0`, `add_tier1`, `add_tier2`) records governance intent for an artifact's place in the manifest hierarchy.
- **Catalog `agent_read_rule`** (e.g., `tier0_mandatory`, `tier05_visible`, `domain_mandatory`, `consult_if_routed`, `historical_only`, `do_not_treat_as_binding`) records runtime load semantics for agents.
- **DRT Tier path** (Tier 0 Universal Path, Tier 0.5 boot-visible surface, per-workstream Tier 1 binding sets, Tier 2 consult sets) records the actual load order for workstream entry.

Precedence at runtime:
1. **DRT Tier 0 Universal Path is the authoritative universal load list.** Every workstream loads it.
2. **Catalog `agent_read_rule: tier0_mandatory`** must appear in DRT Tier 0 Universal Path, or have an explicit documented exception (see `## Tier 0 Universal Path` below).
3. **Catalog `agent_read_rule: tier05_visible`** must appear in the Tier 0.5 Boot-Visible Surface below.
4. **Catalog `agent_read_rule: domain_mandatory`** must appear in at least one workstream's Tier 1 binding set.
5. **Catalog `manifest_action` alone does not determine runtime load.** If `manifest_action: add_tier0` is set on a doc that is domain-specific (e.g., an ADR or a domain rule slice), the read rule wins; the catalog `manifest_action` may need correction (see `## Catalog Review Items` below).

When catalog and DRT conflict, do not silently honor only one. Open a review row to resolve in either direction.

---

## Read-Graph Operating Contract

### Update Rule (When to Update)

Update this file only when current read-routing changes. Add, modify, or retire a route when:

- a document becomes mandatory or consult-required for a domain, lane, surface, build-entry gate, workstream, or agent boot path;
- Tier 0 / Tier 0.5 / Tier 1 / Tier 2 read rules change;
- a new artifact changes boot, build-entry, domain routing, or required context loading;
- an existing route becomes stale, superseded, historical-only, archive-only, or replaced by another canonical artifact.

Do not store directly in this file:
- narrative or rationale bodies (use narrative arc docs),
- evidence detail (use `07_evidence_ingestion_ledger.md`),
- handoff detail (use `HANDOFF_*.md` artifacts),
- future-work payloads (use `future_work_registry.md`),
- wave-history / route-change-provenance / superseded-routing rationale / closure-addenda about read-graph state (route to the Historical Read-Graph History Archive per the Archive Operating Contract in that file),
- closure narratives or summary reports about non-routing topics.

Route those to their canonical homes, and add only a routing pointer here if future agents must load them.

### Route Entry Contract (Shape of an Entry)

Every current route entry must preserve:
- route trigger (when to read: domain / lane / surface / workstream / build-entry gate / boot path),
- required artifact path,
- authority or read rule (per `agent_read_rule_enum` in Control Plane Schema Lock v0),
- domain / lane / surface / workstream tags when applicable (per `agent_work_protocol_tag_taxonomy.md`),
- lifecycle state (per `current_status_enum` in Control Plane Schema Lock v0),
- supersession or historical pointer if replacing older routing.

Entries that cannot satisfy this contract belong in `08_open_review_queue.md` until classification is resolved, not in this file.

### Read-Graph Update Disposition (When Superseding Current Routing)

When a read-graph update **supersedes, removes, or replaces** prior current routing (not pure additions), the update's stop report must declare disposition for the displaced content. Disposition options:
- discarded (low-value, not retained anywhere),
- archived to Historical Read-Graph History Archive (read-graph-shape provenance),
- routed to narrative arc (meaning / evolution / lesson),
- routed to decision ledger / open review queue / supersession ledger (durable decision),
- routed to evidence ledger (evidence detail),
- routed to handoff doc (operational continuity),
- promoted to a different current routing surface.

Pure additions (new workstream, new Tier 1 binding, new overlay) do not require disposition declaration. This is a read-graph-local rule that piggybacks on Protocol §9; it does not amend Protocol §9 universally.

---

## Tier Model

- **Tier 0 (universal mandatory)**  
  Binding map + control-plane governance artifacts. See `## Tier 0 Universal Path` below.

- **Tier 0.5 (boot-visible, conditional full read)**  
  Cross-cutting governance/guardrail docs. See `## Tier 0.5 Boot-Visible Surface` below.

- **Tier 1 (domain-routed mandatory)**  
  Domain binding docs required for the active workstream. See per-workstream Tier 1 binding sets in `## Domain Routing Table (Provisional v1)` and cross-cutting overlays in `## Workstream Coverage Overlays`.

- **Tier 2 (cataloged, consult-through-routing)**  
  Evidence/rationale/history/workbench artifacts (ingestion, handoffs, thought experiments, narratives, postmortems) unless promoted.

---

## Tier 0 Universal Path

Every workstream MUST load these artifacts at boot. The Domain Routing Table references this list rather than duplicating it per workstream.

1. `AGENTS.md`
2. `.cursor/plans/doctrine/00_omni_coordination_charter.md`
3. `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`
4. `.cursor/plans/doctrine/agent_work_protocol.md`
5. `.cursor/plans/doctrine/00_doctrine_manifest.md`
6. `.cursor/plans/doctrine/00_document_governance_and_taxonomy_2026-05-19.md`
7. `.cursor/plans/doctrine/01_master_corpus_catalog.md`
8. `.cursor/plans/doctrine/02_authority_routing_map.md`
9. `.cursor/plans/doctrine/03_decision_extraction_ledger.md`
10. `.cursor/plans/doctrine/04_manifest_read_graph.md` (self)
11. `.cursor/plans/doctrine/05_supersession_conflict_ledger.md`
12. `.cursor/plans/doctrine/08_open_review_queue.md`
13. `.cursor/plans/system_map_three_layers_60706286.plan.md`
14. `.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md`
15. **Current Checkpoint Handoff:** `.cursor/plans/HANDOFF_2026-05-23_post_tier0_activation_pre_omni_thesis_refinement.md` (operational state transfer; updated each Tier 2+ checkpoint per `agent_work_protocol.md` §8 Checkpoint Preservation Rule; prior handoffs become historical-only)
16. **Operator Profile + Collaboration Model:** `.cursor/plans/doctrine/operator_context_and_collaboration_model.md` (binding — identifies Nick as non-coder operator, Knox as ChatGPT review instance, trifecta workflow as default; calibration of agent communication style; must be loaded before responding to any message that contains `knox =` / `at knox` / `me =` discourse markers or that addresses the user directly). Historical/scheduling-arc preferences live in `.cursor/plans/doctrine/scheduling_foundation_preference_record_2026-05-17.md` (consult-routed, not universal). New-pillar onboarding checklist lives in `.cursor/plans/doctrine/new_pillar_substrate_onboarding_checklist.md` (consult-routed for pillar-start work).

Documented exceptions (catalog `add_tier0` but NOT in Universal Path):
- `CLAUDE.md` — 1-line `@AGENTS.md` redirect; flagged for catalog correction (see `## Catalog Review Items`).
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` — domain-specific rule slice (D3/D5/D7); kept in those workstreams' Tier 1 binding sets; flagged for catalog correction.
- `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` — single ADR; per Authority Routing Map ADRs are `domain_mandatory when routed`; kept in CNS/Messaging Tier 1 binding sets; flagged for catalog correction.

---

## Tier 0.5 Boot-Visible Surface

Boot-visible consult artifacts. Agents do not full-load these by default, but they are visible at boot for anti-pattern recognition and guardrail awareness.

1. `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md` — cross-cutting anti-pattern and non-repeatable failure mode memory; consult before routing decisions; does not override doctrine locks.

Tier 0.5 is consult-by-default-visible. Full-read is required only when the active workstream or guardrail trigger surfaces a row from this digest.

---

## Tier 2 Cross-Cutting Consult Artifacts

Artifacts relevant across multiple workstreams that do not belong to a single Tier 1 domain set. Consult when active work touches the artifact's stated scope. These are non-binding by content; cite canonical destinations for binding claims.

1. `.cursor/plans/omni_thesis_v0_2026-05-24.md` — OMNI Thesis v0 crystallization (canonical). Consult during any substrate / architecture / thesis-refinement work. `consult_if_routed`, `evidence_nonbinding`. **Directionally adopted in Phase F.1 2026-05-25 per `D0THES-DEC-001`** (status: `active_adopted_directional`); binding per-primitive canonical authority remains pending Phase G refresh landing into canonical doctrine homes. Source-of-truth relationship: companion evidence to the 2026-05-23 → 2026-05-24 Knox-Nick pressure-test arc. v0 completion pass added 2026-05-24 ~01:50 ET (§1.5 consumer promise, §6.1 dragon egg, §6.5 brand architecture, §7 ownership extension, §9.5 learning loop, §10 8th coherence property, §13.5 business engine, §14.5 substrate hooks, §15.k/l/m, §17 amendment, §22 Amendment Log) per Operating Contract §17 active-status completion-pass rule. When this artifact is consulted, cite canonical destinations (T0-* guardrails, Coherent OMNI Architecture Pattern, DL-1..DL-22, CNS ADR, system map, Build OS) for binding claims — not this file. Versioned stream: v1 supersedes v0 if produced; vN status updates appended per Operating Contract §17 of v0.

2. `.cursor/plans/omni_thesis_v0_founder_version_2026-05-24.md` — OMNI Thesis v0 founder-readable derived compression. Companion to artifact #1 above; NOT canonical. For at-a-glance reference at decision moments + external sharing (investor / hire / partner). Same content; different voice (prose, no governance scaffolding, ~190 lines). If founder version disagrees with v0 on substance, v0 wins; founder version updates to match. `consult_if_routed`, `evidence_nonbinding`. Tier 2.

---

## Workstream Coverage Overlays

Some Tier 1 doctrine exists for domains that are cross-cutting rather than workstream-scoped. Agents working in these domains MUST load the listed Tier 1 anchor in addition to whichever workstream(s) the work touches.

| overlay | trigger (when active) | Tier 1 anchor | notes |
|---|---|---|---|
| RBAC | any auth / capability / permission / role / access work | `.cursor/plans/doctrine/DL-18_rbac_DRAFT_2026-05-17.md` | extends `lib/auth/capabilities.ts` per DL-18 |
| Settings | any config / settings / governed-policy work | `.cursor/plans/doctrine/DL-19_settings_infrastructure_DRAFT_2026-05-17.md` | settings-as-OS substrate |
| Care Coordination | any care_episode / task / pending-input / patient-journey work | `.cursor/plans/doctrine/DL-20_care_coordination_DRAFT_2026-05-17.md` | three-layer appointment/encounter/evidence model |
| Federation / Topology | any multi-tenant / multi-site / cross-entity / network-topology work | `.cursor/plans/doctrine/DL-21_federation_topology_DRAFT_2026-05-17.md` | Day-0 activated per DL-21 |
| AI Governance | any AI/LLM-touching work involving clinical/patient surfaces, drafts, response-assist, or autonomous actions | `docs/ai-governance-policy.md` | clinician-assist-only boundary; reviewed_accepted gating |
| Clinical Media | any clinical photo/media/imaging work | `.cursor/plans/doctrine/DL-22_clinical_media_DRAFT_2026-05-17.md` | (already in D7 Tier 1; included here for cross-cutting visibility) |

Each overlay is per-trigger. Loading is required only when the trigger condition applies. If you cannot determine whether an overlay applies, default to loading it.

Deferred-to-workstream decisions (each requires explicit user/architecture_steward decision):
- Whether RBAC, Settings, Care Coordination, Federation/Topology, or AI Governance should be promoted from cross-cutting overlay to a full DRT workstream row. Tracked as open-review rows (see `## Catalog Review Items` below).
- **Clinical Media is excluded from this deferred list**: it is already routed in the D7 workstream Tier 1 binding set, and the overlay row above exists only for cross-cutting visibility when non-D7 work touches clinical photo/media/imaging surfaces. No open-review row created for Clinical Media in this pass.

---

## Catalog Review Items

These items have catalog classifications that conflict with current DRT routing. The DRT routes them correctly per current usage; the catalog needs separate correction. Catalog corrections are out of scope for this P2-v4.4 execution; the open-review rows below track them as separate governance decisions.

| catalog row | catalog `manifest_action` | catalog `agent_read_rule` | DRT placement | proposed catalog correction | open review id |
|---|---|---|---|---|---|
| `CLAUDE.md` | `add_tier0` | `tier0_mandatory` | not routed (1-line redirect to AGENTS) | `manifest_action: none`, `agent_read_rule: do_not_treat_as_binding` (redirect-only) | `AWP-REV-CLAUDE-MD-CLASSIFICATION-001` |
| `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` | `add_tier0` | `tier0_mandatory` | D3/D5/D7 Tier 1 binding (correct) | `manifest_action: add_tier1`, `agent_read_rule: domain_mandatory` | `AWP-REV-SCHEDULING-MATRIX-CLASSIFICATION-001` |
| `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` | `add_tier0` | `tier0_mandatory` | CNS/Messaging Tier 1 binding (correct per Authority Routing Map) | `manifest_action: add_tier1`, `agent_read_rule: domain_mandatory` | `AWP-REV-CNS-ADR-CLASSIFICATION-001` |
| Each overlay-vs-workstream decision (RBAC, Settings, Care Coord, Federation, AI Governance) | varies | varies | overlay only in v4 | decision: keep overlay or promote to workstream | `AWP-REV-WORKSTREAM-OVERLAY-001..005` |

Broader observation tracked separately:
- `AWP-REV-NACR-EXTENSION-001` — extend the New Artifact Completion Rule: for governed-stream artifacts (ledgers, registries, archives), an Operating/Maintenance Contract is required in the same pass as the artifact's creation.
- `AWP-REV-SCHEMA-LOCK-VOLUME-STATE-001` — codify `Volume state` as a recognized passport field in Schema Lock v0 for governed-stream artifacts that may spawn dated volumes.

---

## Domain Routing Table (Provisional v1)

Tier 0 path for every workstream is the **Tier 0 Universal Path** above; the column below records this reference rather than duplicating the 14-doc list per row. Tier 1 binding sets and Tier 2 consult sets are workstream-specific and preserved verbatim from prior ratification.

| Workstream | Tier 0 path | Tier 1 binding set | Tier 2 consult set | Forbidden authority assumptions |
|---|---|---|---|---|
| CNS/orchestration | Tier 0 Universal Path | provisional_v1: `docs/architecture/cns_action_orchestration_adr_2026-05-17.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md`; `.cursor/plans/doctrine/00_doctrine_manifest.md` | `.cursor/plans/doctrine/00_core_operating_physics_extraction_v0_2_2026-05-19.md`; `docs/architecture/evolution_narrative*.md` | Do not treat canon_digest or evolution narratives as binding without routed promotion. Governed temporary coherence caveat: temporary composed context is non-canonical by default; canonical truth requires owning-domain commit path; cross-domain composition may inform routing/suppression/escalation but may not silently mutate sibling truth; causal authority claims default to influence/rationale/policy basis unless explicitly evidenced. |
| D3 scheduling | Tier 0 Universal Path | provisional_v1: `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md`; `.cursor/plans/doctrine/00_doctrine_manifest.md` | `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md`; `docs/architecture/evolution_narrative*.md`; scheduling pressure-test docs; `.cursor/plans/doctrine/scheduling_foundation_preference_record_2026-05-17.md` (historical primary source); `.cursor/plans/doctrine/new_pillar_substrate_onboarding_checklist.md` (when starting new substrate work) | Do not revive superseded encounter_line semantics or bypass Amendment K closure gates. |
| D5 actualized work | Tier 0 Universal Path | provisional_v1: `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md`; `.cursor/plans/doctrine/00_doctrine_manifest.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md` | `.cursor/plans/doctrine/00_deep_memory_extraction_v0_2_2026-05-19.md`; historical scheduling/design narratives; `.cursor/plans/doctrine/scheduling_foundation_preference_record_2026-05-17.md` (historical primary source); `.cursor/plans/doctrine/new_pillar_substrate_onboarding_checklist.md` (when starting new substrate work) | Do not collapse D5 truth into D6/D7 or promote rationale docs to binding authority. |
| D6 commerce | Tier 0 Universal Path | provisional_v1: `.cursor/plans/doctrine/00_doctrine_manifest.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md`; (review-gated) D6 canonical docs per catalog routing | `.cursor/plans/THOUGHT_EXPERIMENT_2026-05-12_dl13_second_rail_stripe_adapter_sketch.md`; `.cursor/plans/shipped_ontology_analysis_2026-05-10.md`; commerce pressure tests; `docs/architecture/evolution_narrative*.md` (historical rationale, consult-only); `.cursor/plans/doctrine/scheduling_foundation_preference_record_2026-05-17.md` (historical primary source — D6 commerce sub-sections); `.cursor/plans/doctrine/new_pillar_substrate_onboarding_checklist.md` (when starting new substrate work) | Do not author new D6 doctrine while freeze/review gates are unresolved; do not treat thought experiments as canon. |
| D7 documentation/evidence | Tier 0 Universal Path | provisional_v1: `.cursor/plans/system_map_three_layers_60706286.plan.md`; `.cursor/plans/doctrine/00_doctrine_manifest.md`; `docs/architecture/cns_action_orchestration_adr_2026-05-17.md`; `.cursor/plans/doctrine/DL-22_clinical_media_DRAFT_2026-05-17.md`; `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` (§6 D7 references) | `.cursor/plans/doctrine/07_evidence_ingestion_ledger.md`; ingestion docs; postmortems and handoffs; `docs/architecture/evolution_narrative*.md` (historical rationale, consult-only); `.cursor/plans/doctrine/scheduling_foundation_preference_record_2026-05-17.md` (historical primary source — D7 sub-sections); `.cursor/plans/doctrine/new_pillar_substrate_onboarding_checklist.md` (when starting new substrate work) | Do not treat evidence ledgers or ingestion artifacts as doctrine; route through decision/conflict/review ledgers. |
| Messaging/communications | Tier 0 Universal Path | provisional_v1: `docs/architecture/cns_action_orchestration_adr_2026-05-17.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md`; `.cursor/plans/doctrine/00_doctrine_manifest.md` | external-line handoffs/preflights; messaging pressure tests; evolution narratives | Do not reduce CNS to messaging rails or cadence-first outreach without action usefulness gates. |
| Longitudinal intelligence | Tier 0 Universal Path | provisional_v1: `.cursor/plans/doctrine/00_doctrine_manifest.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md`; longitudinal-intelligence doctrine files (review-gated for authority) | `.cursor/plans/doctrine/longitudinal_intelligence_*.md`; pressure-test corpus/results docs; `docs/architecture/evolution_narrative*.md` (historical rationale, consult-only) | Do not auto-promote longitudinal pressure tests to binding operations without explicit routing + review gate closure. Governed temporary coherence caveat: temporary composed context is non-canonical by default; canonical truth requires owning-domain commit path; cross-domain composition may inform routing/suppression/escalation but may not silently mutate sibling truth; causal authority claims default to influence/rationale/policy basis unless explicitly evidenced. |

---

## Synchronization Check

Phase B classification is blocked unless this file, AGENTS, system-map pointer, and control-plane spec agree on boot semantics or cross-reference the same canonical source.

---

## Charter + Protocol + Future Work Retrieval (Build-Entry Routing)

- Coordination Charter: `.cursor/plans/doctrine/00_omni_coordination_charter.md`.
- Agent Work Protocol: `.cursor/plans/doctrine/agent_work_protocol.md`.
- Canonical tag vocabulary: `.cursor/plans/doctrine/agent_work_protocol_tag_taxonomy.md`. **Mandatory load** for any work involving `domain_tags`, `lane_tags`, `affected_surfaces`, `build_entry_trigger`, `item_type` classification, Future Work Registry retrieval, read-graph updates, or build-entry classification.
- For implementation-lane prep, agents MUST consult `.cursor/plans/doctrine/future_work_registry.md` using lane/domain/surface tags drawn from the canonical taxonomy.
- Routing behavior, retrieval set, and stop conditions defined in `agent_work_protocol.md` §6.
- If no matching rows: explicit `Future Work Registry checked; no matching rows found.` line is required in pre-edit checkpoint output.

---

## Implementation-Lane Anchors

Any work classified as "implementation lane" per Agent Work Protocol §6 MUST also load:

- `.cursor/plans/doctrine/09_omni_build_os_layer_model.md` — permanent five-layer Build OS model.
- `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md` — execution-order rollout sequence.
- `.cursor/plans/doctrine/11_build_entry_gate_v0.md` — D1 readiness gate; lane admission contract.

These three artifacts are also referenced in Current-State Truth Pointer (Binding) above and in AGENTS Operating References. This section makes them explicit per-workstream Tier 1 anchors whenever an implementation lane is entered.

For governance-lane or doctrine-lane work that does not enter implementation, these three remain consult-routed (Tier 2 consult set), not Tier 1 mandatory.

---

## D0-REV-004 Ratification Matrix (Wave 3 Gate)

> The Domain Routing Table above is the active routing surface. The D0-REV-004 Ratification Matrix below preserves the ratification status and caveats that justified these routes. If route placement conflicts, update the Domain Routing Table through the Read-Graph Operating Contract and preserve ratification/caveat history through the appropriate ledger or archive route.

| Workstream | Tier 0 path | Tier 1 binding/provisional set | Tier 2 consult set | Forbidden authority assumptions | Ratification status | Remaining caveats | Wave 3 extraction can use route |
|---|---|---|---|---|---|---|---|
| CNS/orchestration | Tier 0 Universal Path | `docs/architecture/cns_action_orchestration_adr_2026-05-17.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md`; `.cursor/plans/doctrine/00_doctrine_manifest.md` | `.cursor/plans/doctrine/00_core_operating_physics_extraction_v0_2_2026-05-19.md`; `docs/architecture/evolution_narrative*.md` | Do not treat canon_digest or evolution narratives as binding without routed promotion. Governed temporary coherence caveat: temporary composed context is non-canonical by default; canonical truth requires owning-domain commit path; cross-domain composition may inform routing/suppression/escalation but may not silently mutate sibling truth; causal authority claims default to influence/rationale/policy basis unless explicitly evidenced. | ratified_with_caveat | Keep ADR precedence explicit when narrative language differs. | yes |
| D3 scheduling | Tier 0 Universal Path | `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md`; `.cursor/plans/doctrine/00_doctrine_manifest.md` | `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md`; `docs/architecture/evolution_narrative*.md`; scheduling pressure tests | Do not revive superseded encounter_line semantics or bypass Amendment K closure gates. | ratified_with_caveat | Amendment K closure checks remain mandatory for round-sensitive extractions. | yes |
| D5 actualized work | Tier 0 Universal Path | `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md`; `.cursor/plans/doctrine/00_doctrine_manifest.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md` | `.cursor/plans/doctrine/00_deep_memory_extraction_v0_2_2026-05-19.md`; historical scheduling/design narratives | Do not collapse D5 truth into D6/D7 or promote rationale docs to binding authority. | ratified_with_caveat | Preserve D5/D6/D7 sibling separation on every extracted rule. | yes |
| D6 commerce | Tier 0 Universal Path | `.cursor/plans/doctrine/00_doctrine_manifest.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md`; review-gated D6 canonical docs per catalog routing | `.cursor/plans/THOUGHT_EXPERIMENT_2026-05-12_dl13_second_rail_stripe_adapter_sketch.md`; `.cursor/plans/shipped_ontology_analysis_2026-05-10.md`; commerce pressure tests | Do not author new D6 doctrine from thought experiments directly; maintain explicit review gate before any doctrine/implementation promotion. | ratified_with_caveat | Child portability/ontology blockers closed; D6 route is review-ready but remains promotion-gated. | yes (review-gated; no auto-promotion) |
| D7 documentation/evidence | Tier 0 Universal Path | `.cursor/plans/system_map_three_layers_60706286.plan.md`; `.cursor/plans/doctrine/00_doctrine_manifest.md`; `docs/architecture/cns_action_orchestration_adr_2026-05-17.md`; `.cursor/plans/doctrine/DL-22_clinical_media_DRAFT_2026-05-17.md`; `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` (§6 D7 refs) | `.cursor/plans/doctrine/07_evidence_ingestion_ledger.md`; ingestion docs; postmortems; handoffs | Do not treat evidence ledgers or ingestion artifacts as doctrine; route through decision/conflict/review ledgers. | split_review_required | Child review required for deferred Domain-07 file explicit alignment before broad D7 continuation. | yes (bounded to ratified D7 Tier1 set above) |
| Messaging/communications | Tier 0 Universal Path | `docs/architecture/cns_action_orchestration_adr_2026-05-17.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md`; `.cursor/plans/doctrine/00_doctrine_manifest.md` | external-line handoffs/preflights; messaging pressure tests; evolution narratives | Do not reduce CNS to messaging rails or cadence-first outreach without action usefulness gates. | ratified_with_caveat | External-line e1 preflights are consult-authoritative for extraction phases but non-canon until implementation closure artifacts land; c2 handoff remains substrate evidence/history only (topology/ADR/system-map win authority). | yes |
| Longitudinal intelligence | Tier 0 Universal Path | `.cursor/plans/doctrine/00_doctrine_manifest.md`; `.cursor/plans/system_map_three_layers_60706286.plan.md`; longitudinal-intelligence doctrine files (review-gated for authority) | `.cursor/plans/doctrine/longitudinal_intelligence_*.md`; pressure-test corpus/results docs | Do not auto-promote longitudinal pressure tests to binding operations without explicit routing + review closure. Governed temporary coherence caveat: temporary composed context is non-canonical by default; canonical truth requires owning-domain commit path; cross-domain composition may inform routing/suppression/escalation but may not silently mutate sibling truth; causal authority claims default to influence/rationale/policy basis unless explicitly evidenced. | ratified_with_caveat | Keep pressure-test outputs non-binding pending routing/closure review. | yes |

---

## Stage-Entry Checklist (Always-On)

Canonical rule source: `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`.

Run this checklist before every new tranche/wave, regardless of domain:

1. Declare active workstream and exact source file set for this tranche.
2. Confirm anti-shrouding disposition mode that will be used per file:
   - durable payload extracted and routed, or
   - no durable payload with reason, or
   - deferred with reason + review gate.
3. Declare destination ledger targets (`03`, `05`, `06`, `07`, `08`) for any routed outcomes.
4. Confirm closure-row contract fields that must be present at close.
5. If checklist is not recorded, tranche start is invalid.

---

## Retro Trigger Checklist (Always-On)

Canonical trigger policy source: `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`.

Do not blanket re-scan old waves. Trigger bounded retrospective re-scan only when:

1. catalog/read-graph/review/conflict ledgers contradict each other,
2. a new doctrine decision changes interpretation of previously routed evidence,
3. a closure row is missing anti-shrouding contract fields,
4. a concrete hidden critical payload is detected.

When triggered, produce explicit decision/evidence linkage for the trigger and outcome.

---

## Stage-Entry Record Template (Required)

Use this block at tranche/wave start:

```markdown
### Stage-Entry Record: <tranche_or_wave_name>

- date: <YYYY-MM-DD>
- reviewer_owner: <role_or_name>
- route_source_checked: <yes/no + source paths>
- anti_shroud_gate_checked: <yes/no>
- retro_trigger_check_result: <none_triggered | triggered:<which_trigger>>
- files_workstream_allowed: <workstream + explicit file set>
- blockers: <none | list>
- notes: <optional execution caveats>
```

---

## Historical Read-Graph History Archive

Wave-by-wave routing proposals, gate verdicts, consolidation stages, and post-wave closure addenda are preserved verbatim in `.cursor/plans/doctrine/04_manifest_read_graph_history_archive_2026-05-22.md` (consult-only, `historical_nonbinding`). The main file holds current-state routing only. See `## Current Routing Boundary` above for the main-vs-archive authority rule.

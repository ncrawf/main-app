# Future Work Registry

Document type: `future_or_parked_watch`
Authority: non-binding parked/watch index unless promoted
Status: active
Domain(s): architecture_governance
Lifecycle role: parked scope index + build-entry retrieval source
Source-of-truth relationship: indexes deferred seams/capabilities and links deep-dive artifacts
Supersedes: scattered implicit future-work memory
Superseded by: none
Manifest action: add_tier2
Review gate: domain_owner_required

---

## Purpose

Canonical index for deferred future work across OMNI:
- architecture seams,
- product capabilities,
- surface features,
- integration futures,
- business/clinical/infrastructure ops futures.

Authority remains non-binding parked/watch unless explicitly promoted through ADR/doctrine/build-gate/work-package approval.

---

## Retrieval Contract

- Build entry and work-package admission MUST load matching rows by `domain_tags` / `lane_tags` / `build_entry_trigger`.
- Agents MUST NOT manually browse all rows by default.
- If no matching rows: explicit `Future Work Registry checked; no matching rows found.` must be reported.

Reference: `.cursor/plans/doctrine/agent_work_protocol.md` §6.

---

## Row Schema

| work_id | item_type | title | domain_tags | lane_tags | affected_surfaces | status | why_not_now | what_to_preserve_now | promotion_trigger | build_entry_trigger | risk_if_forgotten | risk_if_built_too_early | related_docs | owner_or_review_gate | last_reviewed_at | next_review_condition |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| FWREG-001 | architecture_seam | Federation / network topology beyond Day 0 (Mode 3 Hims-mode, Mode 4 Franchise, Mode 5 hybrid permeability, Mode 6+ separate-subscription, mode-transition tooling, cross-tenant break-glass, partner facility ingestion) | architecture_governance, identity_resolution, integration_portability | doctrine_lane | provider_surface, staff_surface, admin_surface, governance_surface | watch | Day 0 substrate already carries 11-axis venue + 6-tier topology + single-deployment patient identity per DL-21; remaining modes require multi-state/franchise/network-native activation pressure not yet present. | Topology mode enumeration, federation_permeability_policy primitive, patient_continuity_policy, jurisdiction substrate, cross-tenant decision record pattern, retention semantics. | First multi-state customer or first franchise activation or first network-native deployment. | read_before_integration_portability_work, read_before_identity_resolution_work | Architecture re-litigates federation modes from scratch; risk of incompatible per-customer hacks. | Premature mode generalization complicates Day 0 deployment substrate. | `.cursor/plans/FUTURE_ARC_2026-05-12_federation_permeability_topology.md`; `.cursor/plans/doctrine/DL-21_federation_topology_DRAFT_2026-05-17.md` | architecture_steward_required | 2026-05-22 | first multi-state / franchise / network-native customer admission |
| FWREG-002 | architecture_seam | PHI surface governance at the operational/human layer (notification preview policy, mobile posture, screenshot discouragement, attachment access expiration, AI visibility scopes) | architecture_governance, messaging_communications | doctrine_lane | messaging_surface, inbox_surface, patient_surface, staff_surface, provider_surface | parked | Substrate-layer disciplines (DL-13 / 8-gate / RLS / audit_events) handle system-layer leakage; operational/human leakage requires its own doctrine arc not yet activated. | Enumerated operational leakage failure modes, target primitives to extend (disclosure policy, consent, DL-12 invariant 25, DL-13 invariant 3), AI Response Assist visibility constraints. | First compliance-driven scale signal or HIPAA audit pressure. | read_before_messaging_work, read_before_external_line_work | Human-layer PHI leakage incident with no doctrine to point at. | Over-restricting operational surfaces before compliance signal arrives. | `.cursor/plans/FUTURE_ARC_2026-05-12_phi_surface_governance.md` | architecture_steward_required | 2026-05-22 | first compliance/HIPAA scale signal or audit pressure |
| FWREG-003 | architecture_seam | Prioritization / attention economics runtime (escalation fatigue, queue poisoning, reminder ranking, SLA decay, AI prioritization) | cns_orchestration, messaging_communications | doctrine_lane | inbox_surface, messaging_surface, staff_surface, provider_surface | parked | OMNI is not yet at scale where urgency-indicator collapse is observed; substrate not yet built across messaging/queue/reminder/escalation/AI Response Assist. | Failure mode enumeration (urgent-badge inflation, callback pileup, claim/unclaim drift, AI alert blindness), seam linkage to action_items + queue substrate. | First customer hitting persistent inbox noise or urgency-indicator distrust. | read_before_messaging_work, read_before_cns_orchestration_work | Operators stop trusting urgency; prioritization layer collapses silently. | Over-engineering attention runtime before real signal load exists. | `.cursor/plans/FUTURE_ARC_2026-05-12_prioritization_attention_economics.md` | architecture_steward_required | 2026-05-22 | persistent inbox noise / urgency-indicator distrust at customer |
| FWREG-004 | product_capability | Care episode task substrate + lifecycle conversions (task -> appointment -> encounter -> orchestration_action; 55+ Day 0 task_kinds; entitlement redemption visibility; promo wallet four-layer model) | d3_scheduling, d5_actualized_work, longitudinal_intelligence, cns_orchestration | doctrine_lane | scheduling_surface, clinical_documentation_surface, provider_surface, patient_surface | parked | Care-Coordination-CNS workstream not yet re-opened; substrate would require joint Knox + user + Opus signoff to promote. | Three-layer foundation, care_episode_task fields and task_kinds, lifecycle conversion rules, refinement gaps for substrate slice work, rejected patterns, neuromodulator/injectable handling, entitlement visibility, promo wallet model, confirmation-as-CNS-round-trip rationale. | Care-Coordination-CNS workstream re-opens or D5 actualized-work substrate needs care-episode parent. | read_before_care_journey_work, read_before_scheduling_readiness_work, read_before_d5_actualized_work, read_before_d3_scheduling_work | Reopening workstream re-litigates entire pressure-test arc. | Premature lock-in of care-obligation substrate before Care-Coordination workstream activation. | `.cursor/plans/doctrine/future_care_obligations_design_2026-05-17.md`; DL-20 invariants; `.cursor/plans/designs/2026-05-17_omni_scheduling_operating_model_and_architecture.md` | domain_owner_required | 2026-05-22 | Care-Coordination-CNS workstream re-opening |
| FWREG-005 | infrastructure_future | Migrate the legacy `2026-spring_ai_substrate/` corpus into the Source/Index/Analysis + global-ID standard (assign each `vNN` an `EVSRC-2026-NNNNNN`; move transcripts to `outside_learning/sources/2026-spring/`; convert `inventory/` clusters + `knox_strategy/thread_01.md` into `analysis/EVRUN-…` runs; register all in `outside_learning/00_index.md`) | architecture_governance, evidence_processing | doctrine_lane | governance_surface | candidate | 47 files already digested + routed (`REV-176`); re-laying them out tonight is churn with no new signal. Closed corpus. **Structural migration DONE 2026-06-06** — moved under `sources/` (no longer a sibling), EVSRC `000001–000047` mapped in the lane index; only OPTIONAL cleanup remains (physical `vNN`→`EVSRC` filename rename + raw/analysis split), low priority because `vNN` are load-bearing citation keys. | The disposition + remaining-optional steps in `sources/2026-spring_ai_substrate/_MIGRATION_STATUS.md`; legacy `vNN` ids remain valid locally; routing already captured in `REV-176` (`D0AI-EVD-001/002`). | A reuse pass on the spring corpus, OR a cleanup/consolidation sprint, OR the first time global-ID cross-referencing of those sources is needed. | read_before_outside_learning_migration_work, read_before_evidence_plane_cleanup | The labeled-legacy folder silently drifts back into the ambiguous co-mingled pattern `GRD-040` fixes. | Spending effort re-laying-out a closed, already-routed corpus before any reuse need exists. | `.cursor/plans/ingestion/outside_learning/sources/2026-spring_ai_substrate/_MIGRATION_STATUS.md`; `.cursor/plans/ingestion/outside_learning/00_pipeline_doctrine.md`; `.cursor/plans/ingestion/00_evidence_router.md` §4; `D0THES-GRD-040` | user_knox_required | 2026-06-06 | Reuse of spring corpus OR evidence-plane cleanup sprint |
| FWREG-006 | architecture_seam | Clinical Knowledge / Scientific Literature substrate (large-scale medical/scientific literature ingestion + retrieval/RAG, evidence-graded, clinically governed) — the home for 1,000+ papers across 50+ specialties that may inform product, protocols, safety, or clinical decisioning. Explicitly NOT the Evidence Plane (`GRD-041`); likely a future domain/contract, possibly thesis-acknowledged. To be DEFINED later (concept, placement, plane/domain, contracts) — reserved, not solved. | clinical_knowledge, longitudinal_intelligence, ai_substrate, architecture_governance | doctrine_lane | clinical_documentation_surface, provider_surface, governance_surface | watch | No corpus exists yet; the Evidence Plane handles one-off clinical references today; defining the substrate prematurely (before real literature-at-scale pressure + a care-authority model) risks wrong architecture. The neural-network/agentic outside-learning batch + AI-substrate work may inform the retrieval/RAG design first. | The boundary itself (Evidence Plane = one-off reference only; literature-at-scale routes OUT — `GRD-041` + router §1 clinical boundary); the higher-bar requirement list (authors + affiliations + journal/publication + DOI/PMID + COI + retraction-status — extending the Evidence Plane §0.1 authorship block; plus evidence grading, publication type, population/intervention/outcomes, evidence level guideline-vs-RCT-vs-review-vs-opinion, citation graph, staleness, contradictions, clinical review, retrieval evals, scope-of-use, patient-care authority boundary); that it is a separate system, not a swipe lane. | First time clinical/scientific literature starts recurring at scale OR a product/protocol/safety feature needs a searchable medical-knowledge corpus OR care-facing retrieval is contemplated. | read_before_clinical_knowledge_work, read_before_medical_literature_ingestion, read_before_clinical_rag_work | The 1,000-paper elephant gets dumped into the Evidence Plane (or worse, wired to care with no evidence grading / authority boundary), repeating the universal-data-swamp mistake `GRD-041` fences off. | Defining a heavy clinical-knowledge architecture before real corpus pressure + a settled patient-care authority model exists. | `.cursor/plans/ingestion/00_evidence_router.md` §1 (clinical boundary); `D0THES-GRD-041`; future thesis (acknowledge boundary) + future clinical contracts | user_knox_required | 2026-06-06 | Clinical/scientific literature recurring at scale OR a care-facing knowledge-corpus need |
| FWREG-007 | architecture_seam | OMNI CNS framework + Knowledge Reservoirs family — the top-tier orchestration/knowledge taxonomy surfaced while naming the Evidence Plane. The CNS (orchestrating "brain") is as central as the substrate but has no framework comparable to surfaces/substrate; and there is a cross-plane FAMILY of governed knowledge/context bodies ("Knowledge Reservoirs", provisional) the CNS draws on — each with an authority class, owner, review gate, retrieval/use boundary. Members (provisional): Evidence Plane (non-binding outside ref, exists), Clinical Memory (patient truth, exists), Medical Literature (`FWREG-006`, future), Care Outcomes Learning (system-level learning from OMNI's own care/marketing/ops actions — UNDEFINED, needs real definition), Build Knowledge, Threat Intel, Brand/Marketing Memory, Operator Knowledge. Law: CNS orchestrates · reservoirs supply · domains commit. | architecture_governance, cns_orchestration, ai_substrate | doctrine_lane | governance_surface, provider_surface | watch | The CNS framework + reservoir family need real definition (not just names); the neural-network/agentic outside-learning batch is expected to sharpen the dynamics. Defining prematurely risks wrong taxonomy + a "brain owns everything" overreach. Names provisional. | The full frontier capture in `.cursor/plans/doctrine/cns_and_knowledge_reservoirs_frontier_2026-06-06.md` (family, reservoir contract, member roster + authority classes, open questions, thesis/contract fill-in targets); the law CNS orchestrates / reservoirs supply / domains commit; the noun-discipline (NOT a plane, NOT "substrate"). | After the neural-network/agentic outside-learning batch is ingested + analyzed, OR when CNS-framework / context-architecture / clinical-or-outcomes-knowledge work begins. | read_before_cns_framework_work, read_before_knowledge_reservoir_work, read_before_context_architecture_work | The CNS stays hand-waved ("the CNS does it") while it is actually co-primary with the substrate; the reservoir family gets flattened or each body re-invented ad hoc; Care Outcomes Learning never gets a home. | Defining a heavy CNS/knowledge-reservoir architecture before the neural-network material + real pressure exist. | `.cursor/plans/doctrine/cns_and_knowledge_reservoirs_frontier_2026-06-06.md`; `contracts/CNS_orchestration_contract.md`; `FWREG-006`; `omni_thesis_v3_integrated_spine.md`; `D0THES-GRD-035` | user_knox_required | 2026-06-06 | Neural-network batch ingested OR CNS-framework/context-architecture work begins |

| FWREG-008 | infrastructure_future | Architecture taxonomy + file-types + repo/artifact organization capture (a Knox chat that drifted usefully into Build-OS taxonomy / file-type / architecture-organization ideas) — preserved as future-gate input for the C5 repo-taxonomy plan + spine/thesis authoring; NOT yet a decision | architecture_governance, build_os | doctrine_lane | governance_surface | watch | Chat is captured ideation (Knox = review instance, non-binding); the C5 repo/file-type taxonomy gate is a named-but-unauthored future gate; minting a file-type/taxonomy scheme now (before the spine settles + the gate opens) risks forking `00_architecture_artifact_index` + `00_document_governance_and_taxonomy`. | The raw chat (once pasted) + operator framing + the consumed-by routing (C5 repo-taxonomy, spine/thesis authoring, Build OS, artifact index) in the capture doc; the naming-discipline guardrail (dedup vs existing artifact-role + document-taxonomy homes before minting). | C5 repo-taxonomy plan opens, OR spine/thesis authoring needs a settled file-type/artifact organization, OR an architecture-organization sprint begins. | read_before_repo_taxonomy_work, read_before_build_os_work, read_before_spine_authoring, read_before_thesis_synthesis | Useful Build-OS/taxonomy ideas evaporate (leak-at-pivot); architecture organization re-derived from scratch or forked ad hoc. | Locking a file-type/taxonomy scheme before the spine settles + before deduping against existing artifact-role/document-governance homes. | `.cursor/plans/build_os_taxonomy_and_filetypes_capture_2026-07-10.md`; `.cursor/plans/doctrine/00_architecture_artifact_index.md`; `.cursor/plans/doctrine/00_document_governance_and_taxonomy_2026-05-19.md`; C5 `repo_taxonomy_derivation_plan.md` (named future gate) | user_knox_required | 2026-07-10 | C5 repo-taxonomy plan opens OR architecture-organization work begins |

Allowed `item_type` values:
- `architecture_seam`
- `product_capability`
- `surface_feature`
- `integration_future`
- `business_ops_future`
- `clinical_ops_future`
- `infrastructure_future`

Allowed `status` values:
- `parked`
- `watch`
- `candidate`
- `promoted`
- `rejected`

---

## Seeding

Initial seeding is partial. Full backlog seeding is tracked as explicit open-review debt: `FWREG-REV-001`.

Known high-value parked artifacts (already cataloged as `future_or_parked_watch`) are tracked in the catalog and may be promoted into rows incrementally as they are touched at build-entry retrieval.

Examples to seed when relevant work packages are admitted:
- `.cursor/plans/FUTURE_ARC_2026-05-12_federation_permeability_topology.md`
- `.cursor/plans/FUTURE_ARC_2026-05-12_phi_surface_governance.md`
- `.cursor/plans/FUTURE_ARC_2026-05-12_prioritization_attention_economics.md`
- `.cursor/plans/doctrine/future_care_obligations_design_2026-05-17.md`

---

## Lifecycle Rule

- If a row's work becomes implemented or accepted into current scope, mark `promoted` and link to destination ADR/doctrine/build artifact/work package.
- If a row becomes stale/invalid, mark `rejected` with reason.
- If still deferred, keep `parked`/`watch` and update `next_review_condition`.

No row may remain perpetually deferred after implementation.

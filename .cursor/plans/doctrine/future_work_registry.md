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

# OMNI Corpus Catalog (Architectural Memory Index)

**Date:** 2026-05-19  
**Purpose:** Durable corpus inventory for manifest construction (not domain authoring).  
**Scope roots:** `.cursor/plans/doctrine/`, `.cursor/plans/designs/day_0_scheduling_rule_matrix/`, `.cursor/plans/`, `docs/architecture/`, ingestion roots (`mindbody`, `hims`), transcript artifacts.  
**Boundaries:** No D6 rule authoring, no broad doctrine rewrite, no Tier 0 inflation.
**Current status:** `v0.1` inventory/materialization pass — broad awareness index, not full semantic mastery.

---

## Catalog Schema (Binding For This Audit)

Each entry uses:
- `path`
- `file_type_tags`
- `status`
- `authority`
- `domain_tags`
- `lifecycle_role`
- `inspection_depth` (`filename_only` | `skimmed` | `read_relevant_sections` | `full_read`)
- `distilled_binding_lessons` (if any)
- `lesson_confidence` (`high` | `medium` | `low`)
- `manifest_representation`
- `supersedes_or_superseded_by` (if known)
- `action`

### Execution safeguards
- No binding lesson extracted from `filename_only`.
- `filename_only` allowed for inventory/tagging only.
- `low` confidence lessons route to `needs human review`.
- `low` confidence lessons cannot be promoted into Tier 0/1/2 routing.

---

## A) High-Authority Inspected Entries

These entries were inspected at `read_relevant_sections` or `full_read`.

### Constitutional / governance

- `path`: `.cursor/plans/doctrine/00_doctrine_manifest.md`
  - `file_type_tags`: manifest, routing-layer, governance-contract
  - `status`: binding
  - `authority`: constitutional
  - `domain_tags`: cross-domain
  - `lifecycle_role`: synthesis, decision
  - `inspection_depth`: full_read
  - `distilled_binding_lessons`: Tiered routing model, guardrail digest schema, guardrail->gate mapping, contradiction/staleness rule, D6 dry-run requirement.
  - `lesson_confidence`: high
  - `manifest_representation`: self
  - `action`: keep

- `path`: `.cursor/plans/system_map_three_layers_60706286.plan.md`
  - `file_type_tags`: system-map, constitutional-doctrine, index
  - `status`: binding
  - `authority`: constitutional
  - `domain_tags`: cross-domain
  - `lifecycle_role`: source, decision
  - `inspection_depth`: read_relevant_sections
  - `distilled_binding_lessons`: CNS center-of-gravity and carry-forward architecture constraints are parent authority.
  - `lesson_confidence`: high
  - `manifest_representation`: Tier 0 read target
  - `action`: keep

- `path`: `docs/architecture/cns_action_orchestration_adr_2026-05-17.md`
  - `file_type_tags`: ADR, decision-log, cross-domain-seam-contract
  - `status`: binding
  - `authority`: constitutional
  - `domain_tags`: CNS, D4, D5, D6, D7
  - `lifecycle_role`: decision
  - `inspection_depth`: read_relevant_sections
  - `distilled_binding_lessons`: Candidate->resolver->commit boundary and cross-domain envelope discipline are binding.
  - `lesson_confidence`: high
  - `manifest_representation`: Tier 0 read target
  - `action`: keep

### Longitudinal doctrine set

- `path`: `.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`
  - `file_type_tags`: doctrine, risk-guardrail, AI-safety-guardrail
  - `status`: draft (pressure-tested and revised)
  - `authority`: constitutional/domain-boundary
  - `domain_tags`: CNS, D5, D6, D7, messaging, identity
  - `lifecycle_role`: decision, validation-target
  - `inspection_depth`: read_relevant_sections
  - `distilled_binding_lessons`: D5/D6/D7 ownership separation, permission/identity/visibility gating, anti-cadence spam, traceability, candidate != commit.
  - `lesson_confidence`: high
  - `manifest_representation`: Tier 0 + Tier 1 boundary emphasis
  - `action`: keep

- `path`: `.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_result_2026-05-19.md`
  - `file_type_tags`: pressure-test-result, validation-report
  - `status`: binding reference for revision baseline
  - `authority`: trigger-binding
  - `domain_tags`: CNS, D5, D6, D7
  - `lifecycle_role`: validation
  - `inspection_depth`: full_read
  - `distilled_binding_lessons`: Conditional pressure areas (identity, degraded mode, explainability, scale) must remain guarded.
  - `lesson_confidence`: high
  - `manifest_representation`: Tier 0 read target
  - `action`: keep

- `path`: `.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_execution_protocol_2026-05-19.md`
  - `file_type_tags`: pressure-test-protocol
  - `status`: binding process artifact
  - `authority`: trigger-binding
  - `domain_tags`: CNS
  - `lifecycle_role`: validation
  - `inspection_depth`: skimmed
  - `distilled_binding_lessons`: Dimension scoring must remain concise and non-expansive during doctrine validation.
  - `lesson_confidence`: medium
  - `manifest_representation`: Tier 2 telemetry/LI trigger context
  - `action`: keep

- `path`: `.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_bank_2026-05-19.md`
  - `file_type_tags`: pressure-test-corpus, scenario-corpus
  - `status`: reference corpus
  - `authority`: evidence/rationale
  - `domain_tags`: cross-domain
  - `lifecycle_role`: source, validation
  - `inspection_depth`: skimmed
  - `distilled_binding_lessons`: Full risk surface exists; future checks should sample by dimension not rewrite doctrine.
  - `lesson_confidence`: medium
  - `manifest_representation`: Tier 2 telemetry/LI trigger context
  - `action`: keep

### D5/D6 seam authorities

- `path`: `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md`
  - `file_type_tags`: rule-matrix-index, decision-log, amendment-log, preflight-gate
  - `status`: binding
  - `authority`: domain-binding + trigger-binding
  - `domain_tags`: D1-D7, CNS, D6
  - `lifecycle_role`: synthesis, decision, validation-gate
  - `inspection_depth`: read_relevant_sections
  - `distilled_binding_lessons`: D6 pre-brief (`§2.9–§2.13`) and K(C) implications (`§2.22`) are mandatory pre-authoring constraints; round opening/closing gates are binding.
  - `lesson_confidence`: high
  - `manifest_representation`: Tier 1 D6 + Tier 2 triggers
  - `action`: keep

- `path`: `.cursor/plans/doctrine/DL-17_commerce_DRAFT_2026-05-17.md`
  - `file_type_tags`: doctrine-draft, schema/substrate-proposal, domain-contract
  - `status`: draft
  - `authority`: domain-binding (D6)
  - `domain_tags`: D6, commerce, entitlement
  - `lifecycle_role`: source, decision-proposal
  - `inspection_depth`: read_relevant_sections
  - `distilled_binding_lessons`: same-service doctrine, refund/void/credit distinctions, entitlement lifecycle, and D6 ownership of commerce truth.
  - `lesson_confidence`: high
  - `manifest_representation`: Tier 1 D6
  - `action`: keep

- `path`: `.cursor/plans/doctrine/DL-20_care_coordination_DRAFT_2026-05-17.md`
  - `file_type_tags`: doctrine-draft, ontology/object-contract
  - `status`: draft
  - `authority`: domain-binding (D5) + trigger-binding
  - `domain_tags`: D5, D6 seam, D7 seam
  - `lifecycle_role`: source
  - `inspection_depth`: read_relevant_sections
  - `distilled_binding_lessons`: D5 actualized-work truth cannot be rewritten by D6 commerce events.
  - `lesson_confidence`: high
  - `manifest_representation`: Tier 1 D5 + Tier 2 service/work-item trigger
  - `action`: keep

- `path`: `.cursor/plans/designs/day_0_scheduling_rule_matrix/05_3_round5_closure_verdict.md`
  - `file_type_tags`: closure-artifact, acceptance-verdict
  - `status`: closed
  - `authority`: domain-binding carry-forward
  - `domain_tags`: D5, D6, D7
  - `lifecycle_role`: closure, handoff
  - `inspection_depth`: full_read
  - `distilled_binding_lessons`: D5 closed with explicit D6/D7 carry-forward; D6 must honor D5 boundaries.
  - `lesson_confidence`: high
  - `manifest_representation`: Tier 2 service/work-item trigger
  - `action`: keep

- `path`: `.cursor/plans/designs/day_0_scheduling_rule_matrix/05_2_kc_minimal_implementation_lock.md`
  - `file_type_tags`: amendment-log, closure-prep
  - `status`: closure-prep artifact
  - `authority`: domain-binding seam
  - `domain_tags`: D5, D6
  - `lifecycle_role`: closure, validation
  - `inspection_depth`: skimmed
  - `distilled_binding_lessons`: K(C) minimal path affects D6 per-seat entitlement reasoning.
  - `lesson_confidence`: medium
  - `manifest_representation`: Tier 2 group/seat trigger
  - `action`: keep

### Historical rationale set

- `path`: `docs/architecture/evolution_narrative.md`
  - `file_type_tags`: narrative-arc, chronology-record
  - `status`: historical
  - `authority`: rationale
  - `domain_tags`: cross-domain
  - `lifecycle_role`: handoff, chronology
  - `inspection_depth`: skimmed
  - `distilled_binding_lessons`: chronology context only; not direct authority.
  - `lesson_confidence`: medium
  - `manifest_representation`: Tier 3
  - `action`: keep

- `path`: `docs/architecture/evolution_narrative_volume_2_2026-05-17.md`
  - `file_type_tags`: narrative-arc, chronology-record, supersession-context
  - `status`: historical snapshot
  - `authority`: rationale
  - `domain_tags`: D4-D7, CNS, D6
  - `lifecycle_role`: chronology, handoff
  - `inspection_depth`: read_relevant_sections
  - `distilled_binding_lessons`: identifies when D6 pre-brief and same-service/stacking doctrine became binding in index.
  - `lesson_confidence`: high
  - `manifest_representation`: Tier 3
  - `action`: keep

- `path`: `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md`
  - `file_type_tags`: postmortem, drift-risk, anti-pattern-log
  - `status`: historical-forensic
  - `authority`: rationale
  - `domain_tags`: cross-domain
  - `lifecycle_role`: validation, handoff
  - `inspection_depth`: read_relevant_sections
  - `distilled_binding_lessons`: avoid rediscovery/narrow framing drift; read-receipt discipline is anti-drift mechanism.
  - `lesson_confidence`: high
  - `manifest_representation`: Tier 3
  - `action`: keep

- `path`: `docs/architecture/v1_pressure_test_radar.md`
  - `file_type_tags`: risk-register, radar-watch
  - `status`: historical watchlist
  - `authority`: rationale/evidence
  - `domain_tags`: cross-domain
  - `lifecycle_role`: validation, watch
  - `inspection_depth`: read_relevant_sections
  - `distilled_binding_lessons`: risk surfacing aid, not direct routing authority.
  - `lesson_confidence`: medium
  - `manifest_representation`: Tier 3
  - `action`: keep

### Preference lock

- `path`: `.cursor/plans/doctrine/user_knox_preferences_locked_2026-05-17.md`
  - `file_type_tags`: preference-lock, constraint-lock, governance-memory
  - `status`: locked reference
  - `authority`: rationale/constraint-lock (governance-critical)
  - `domain_tags`: cross-domain, D6
  - `lifecycle_role`: source, handoff
  - `inspection_depth`: read_relevant_sections
  - `distilled_binding_lessons`: no re-litigation on key structural choices (promo wallet layering, same-service doctrine, account/appointment/commerce separation).
  - `lesson_confidence`: high
  - `manifest_representation`: **gap detected (not explicitly represented in current manifest tiers)**
  - `action`: promote lesson to manifest representation (Tier 3 minimum)

---

## B) Evidence Archives And Ingestion Sets

### Mindbody raw evidence archive
- `path`: `.cursor/plans/ingestion/mindbody/screenshots/` (+ `_duplicates/`)
  - `file_type_tags`: raw-evidence-archive, source-capture
  - `status`: evidence
  - `authority`: evidence
  - `domain_tags`: D5, D6, settings, workflows
  - `lifecycle_role`: source
  - `inspection_depth`: skimmed (README + directory presence); screenshot files individually `filename_only`
  - `distilled_binding_lessons`: none extracted from filenames
  - `lesson_confidence`: low
  - `manifest_representation`: Tier 3 rationale/evidence context
  - `action`: keep archive; use via ingestion summaries

### Mindbody ingestion summaries/raw captures
- `path`: `.cursor/plans/ingestion/mindbody/mindbody_ingestion_manifest.md`
- `path`: `.cursor/plans/ingestion/mindbody/mindbody_chat_navigation_map.md`
- `path`: `.cursor/plans/ingestion/mindbody/mindbody_open_questions_raw.md`
- `path`: `.cursor/plans/ingestion/mindbody/mindbody_to_omni_direction_raw.md`
- `path`: `.cursor/plans/ingestion/mindbody/mindbody_user_feedback_raw.md`
- `path`: `.cursor/plans/ingestion/mindbody/mindbody_knox_chat_raw.md`
- `path`: `.cursor/plans/ingestion/mindbody/mindbody_knox_chat_raw_v1_with_duplicates_preserved.md`
- `path`: `.cursor/plans/ingestion/mindbody/mindbody_04_dashboard_and_appointments_grid_raw.md` ... `mindbody_21_mobile_final_payment_card_network_detail_sales_report_business_snapshot_more_settings_raw.md`
  - `file_type_tags`: ingestion-summary, vendor-behavior-notes, raw-evidence-derivative
  - `status`: evidence
  - `authority`: evidence
  - `domain_tags`: D6, D5, settings, workflows
  - `lifecycle_role`: source, synthesis
  - `inspection_depth`: skimmed (subset read_relevant_sections, remainder filename_only)
  - `distilled_binding_lessons`: extracted lessons only from inspected entries; no filename-only lessons.
  - `lesson_confidence`: medium/low mixed
  - `manifest_representation`: Tier 3 evidence context; selected lessons already compiled into index/doctrine artifacts
  - `action`: keep; unresolved low-confidence interpretations -> human review

### Hims raw ingest set
- `path`: `.cursor/plans/ingestion/hims/hims_weight_loss.md`
- `path`: `.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md`
- `path`: `.cursor/plans/ingestion/hims/hims_labs.md`
- `path`: `.cursor/plans/ingestion/hims/hims_trt.md`
- `path`: `.cursor/plans/ingestion/hims/hims_anxiety.md`
- `path`: `.cursor/plans/ingestion/hims/hers_menopause.md`
- `path`: `.cursor/plans/ingestion/hims/_pressure_test_main_vs_hims.md`
  - `file_type_tags`: raw-evidence-archive, vendor-behavior-notes
  - `status`: evidence
  - `authority`: evidence/analogy
  - `domain_tags`: intake, pathways, D6 context
  - `lifecycle_role`: source
  - `inspection_depth`: skimmed (status + structure), content mostly not fully analyzed in this pass
  - `distilled_binding_lessons`: none promoted from raw steps in this pass
  - `lesson_confidence`: low
  - `manifest_representation`: Tier 3 evidence context
  - `action`: keep; human review before promoting lessons

### Transcript artifacts
- `path`: `~/.cursor/projects/Users-bloomfrontdesk1-Desktop-main-app/agent-transcripts/*/*.jsonl`
  - `file_type_tags`: transcript-archive, handoff-memory
  - `status`: evidence
  - `authority`: evidence
  - `domain_tags`: cross-domain
  - `lifecycle_role`: source, handoff
  - `inspection_depth`: filename_only (inventory only in this pass)
  - `distilled_binding_lessons`: none
  - `lesson_confidence`: low
  - `manifest_representation`: none
  - `action`: keep as evidence archive; include parent transcript references when needed for chronology validation

---

## C) Full Inventory (Filename-Level Classification)

`inspection_depth = filename_only` unless already listed in section A/B.
No binding lessons extracted from this section.

### Doctrine and governance (`.cursor/plans/doctrine/`)
- `.cursor/plans/doctrine/00_doctrine_manifest.md`
- `.cursor/plans/doctrine/DL-17_commerce_DRAFT_2026-05-17.md`
- `.cursor/plans/doctrine/DL-18_rbac_DRAFT_2026-05-17.md`
- `.cursor/plans/doctrine/DL-19_settings_infrastructure_DRAFT_2026-05-17.md`
- `.cursor/plans/doctrine/DL-20_care_coordination_DRAFT_2026-05-17.md`
- `.cursor/plans/doctrine/DL-21_federation_topology_DRAFT_2026-05-17.md`
- `.cursor/plans/doctrine/DL-22_clinical_media_DRAFT_2026-05-17.md`
- `.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md`
- `.cursor/plans/doctrine/future_care_obligations_design_2026-05-17.md`
- `.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`
- `.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_bank_2026-05-19.md`
- `.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_corpus_2026-05-19.md`
- `.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_execution_protocol_2026-05-19.md`
- `.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_result_2026-05-19.md`
- `.cursor/plans/doctrine/user_knox_preferences_locked_2026-05-17.md`

### Rule matrix and domain/closure artifacts (`.cursor/plans/designs/day_0_scheduling_rule_matrix/`)
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/01_domain_treatment_menu.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/02_domain_booking_composer.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/03_domain_appointment_lifecycle.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/03_6_checkpoint_parent_contract_alignment.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/03_6_cns_orchestration_core.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/04_domain_confirmation_outbound.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/04_2c_domain4_closure_report.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/05_domain_service_occurrence.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/05_preopen_service_occurrence_checkpoint.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/05_round5_opening_read_receipt_gate_check.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/05_closure_prep_consistency_report.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/05_2_kc_minimal_implementation_lock.md`
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/05_3_round5_closure_verdict.md`

### Architecture docs (`docs/architecture/`)
- `docs/architecture/cns_action_orchestration_adr_2026-05-17.md`
- `docs/architecture/cns_taxonomy_reconciliation.md`
- `docs/architecture/communications_topology.md`
- `docs/architecture/evolution_narrative.md`
- `docs/architecture/evolution_narrative_volume_2_2026-05-17.md`
- `docs/architecture/operational_objects_under_patient.md`
- `docs/architecture/phase_4h_target_first_decision_record.md`
- `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md`
- `docs/architecture/v1_pressure_test_radar.md`

### Plans, audits, preflights, handoffs, futures, specs (`.cursor/plans/`)
- `.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`
- `.cursor/plans/FUTURE_ARC_2026-05-12_federation_permeability_topology.md`
- `.cursor/plans/FUTURE_ARC_2026-05-12_phi_surface_governance.md`
- `.cursor/plans/FUTURE_ARC_2026-05-12_prioritization_attention_economics.md`
- `.cursor/plans/HANDOFF_2026-05-06.md`
- `.cursor/plans/HANDOFF_2026-05-08_phase_4h_disclosure_policy_c1_checkpoint.md`
- `.cursor/plans/HANDOFF_2026-05-08_phase_4h_disclosure_policy_c2_checkpoint.md`
- `.cursor/plans/HANDOFF_2026-05-08_phase_4h_pre_complete.md`
- `.cursor/plans/HANDOFF_2026-05-09_phase_4h_templates_discipline_c2_checkpoint.md`
- `.cursor/plans/HANDOFF_2026-05-10_phase_4h_in_app_inbox_c1_checkpoint.md`
- `.cursor/plans/HANDOFF_2026-05-10_phase_4h_templates_discipline_c3_checkpoint.md`
- `.cursor/plans/HANDOFF_2026-05-10_phase_4h_templates_discipline_c4_checkpoint.md`
- `.cursor/plans/HANDOFF_2026-05-10_phase_4h_templates_discipline_c5_checkpoint.md`
- `.cursor/plans/HANDOFF_2026-05-10_phase_4h_templates_discipline_c6_checkpoint.md`
- `.cursor/plans/HANDOFF_2026-05-10_phase_4h_templates_discipline_c7_checkpoint.md`
- `.cursor/plans/HANDOFF_2026-05-10_phase_4h_templates_discipline_c8_checkpoint.md`
- `.cursor/plans/HANDOFF_2026-05-10_phase_4h_templates_discipline_c9_checkpoint.md`
- `.cursor/plans/HANDOFF_2026-05-11_phase_4h_communications_c2_chat_rendering.md`
- `.cursor/plans/HANDOFF_2026-05-11_phase_4h_doctrine_reconciliation_complete.md`
- `.cursor/plans/HANDOFF_2026-05-11_phase_4h_identity_relationship_doctrine.md`
- `.cursor/plans/HANDOFF_2026-05-11_phase_4h_internal_collaboration_doctrine.md`
- `.cursor/plans/HANDOFF_2026-05-12_phase_4h_external_line_e0_doctrine_complete.md`
- `.cursor/plans/HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md`
- `.cursor/plans/HANDOFF_2026-05-15_phase_b5_mindbody_ingestion_thread2.md`
- `.cursor/plans/HANDOFF_2026-05-16_phase_b5_DONE.md`
- `.cursor/plans/HANDOFF_2026-05-16_phase_b5_mindbody_ingestion_thread3.md`
- `.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_in_app_inbox_c1.md`
- `.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c4_shipped.md`
- `.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c5_active_care.md`
- `.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c6_followup_due.md`
- `.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c7_followup_needed.md`
- `.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c8_pharmacy_lifecycle.md`
- `.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c9_case_denied.md`
- `.cursor/plans/PREFLIGHT_2026-05-12_phase_4h_external_line_e0_substrate_routing_design.md`
- `.cursor/plans/PREFLIGHT_2026-05-12_phase_4h_external_line_e1_execution_substrate_adapter_inbox.md`
- `.cursor/plans/PREFLIGHT_2026-05-17_omni_scheduling_brain_audit.md`
- `.cursor/plans/THOUGHT_EXPERIMENT_2026-05-12_dl13_second_rail_stripe_adapter_sketch.md`
- `.cursor/plans/data_layers_reconciliation_v1.md`
- `.cursor/plans/designs/2026-04-27_clinical_assertion_layer_design.md`
- `.cursor/plans/designs/2026-04-27_intake_construction_design.md`
- `.cursor/plans/designs/2026-05-16_mindbody_architecture_understanding.md`
- `.cursor/plans/designs/2026-05-17_omni_scheduling_architecture_pressure_test.md`
- `.cursor/plans/designs/2026-05-17_omni_scheduling_day_0_build_contract.md`
- `.cursor/plans/designs/2026-05-17_omni_scheduling_operating_model_and_architecture.md`
- `.cursor/plans/omni_brain_hardening_d1ef429b.plan.md`
- `.cursor/plans/phase_a2_ai_hybrid_and_jurisdiction_canonization.plan.md`
- `.cursor/plans/phase_b5_mindbody_ingestion_4db27449.plan.md`
- `.cursor/plans/phase_b_scheduling_e2c30269.plan.md`
- `.cursor/plans/phase_4b_arch_plan_and_critique_log.md`
- `.cursor/plans/proposed_system_map_doctrine_2026-05-10.md`
- `.cursor/plans/shipped_ontology_analysis_2026-05-10.md`
- `.cursor/plans/specs/clinical_core_modules_v1.md`
- `.cursor/plans/specs/conversion_funnel_modules_v1.md`
- `.cursor/plans/specs/domain_modules_v1.md`
- `.cursor/plans/specs/glp1_pathway_modules_v1.md`
- `.cursor/plans/specs/universal_modules_v1.md`

### Audits (`.cursor/plans/audits/`)
- `.cursor/plans/audits/2026-04-27_clinical_assertion_analytics_audit.md`
- `.cursor/plans/audits/2026-04-27_clinical_assertion_layer_audit.md`
- `.cursor/plans/audits/2026-04-27_clinical_assertion_layer_followup_audit.md`
- `.cursor/plans/audits/2026-04-27_concept_naming_and_assertion_builder.md`
- `.cursor/plans/audits/2026-04-27_glp1_concept_registry_analysis.md`
- `.cursor/plans/audits/2026-04-27_intake_coherence_pressure_test.md`
- `.cursor/plans/audits/2026-04-27_intake_construction_audit.md`
- `.cursor/plans/audits/2026-04-27_mode_j_spot_audit.md`
- `.cursor/plans/audits/2026-04-27_static_clinical_facts_audit.md`
- `.cursor/plans/audits/2026-04-30_acute_states_promotion_threshold.md`
- `.cursor/plans/audits/2026-04-30_adversarial_slice_pre_runtime.md`
- `.cursor/plans/audits/2026-04-30_authority_vs_longitudinal_confidence.md`
- `.cursor/plans/audits/2026-04-30_care_management_source_field.md`
- `.cursor/plans/audits/2026-04-30_dynamic_behavior_pre_runtime.md`
- `.cursor/plans/audits/2026-04-30_free_text_intake_pressure_test.md`
- `.cursor/plans/audits/2026-04-30_glp1_first_slice.md`
- `.cursor/plans/audits/2026-04-30_inbound_narrative_atomization_pressure_test.md`
- `.cursor/plans/audits/2026-04-30_lab_authored_by_mapping.md`
- `.cursor/plans/audits/2026-04-30_module_taxonomy.md`
- `.cursor/plans/audits/2026-04-30_privacy_communication_governance.md`
- `.cursor/plans/audits/2026-04-30_retrievability_pressure_test.md`
- `.cursor/plans/audits/2026-04-30_rules_templates_framework.md`
- `.cursor/plans/audits/2026-04-30_system_pressure_test.md`
- `.cursor/plans/audits/2026-05-01_dynamic_behavior_pressure_test_post_marketing.md`
- `.cursor/plans/audits/2026-05-01_dynamic_behavior_verification_pass.md`
- `.cursor/plans/audits/2026-05-01_female_hrt_first_slice.md`
- `.cursor/plans/audits/2026-05-01_marketing_lifecycle_growth_orchestration.md`
- `.cursor/plans/audits/2026-05-01_marketing_system_pressure_test.md`
- `.cursor/plans/audits/2026-05-02_hybrid_care_delivery_stress_test.md`
- `.cursor/plans/audits/2026-05-07_build_pattern_assessment.md`
- `.cursor/plans/audits/2026-05-10_future_blocks_long_term_pressure_test.md`
- `.cursor/plans/audits/2026-05-10_system_map_alignment_pressure_test.md`

---

## D) Catalog Outcome Summary

- Core governance set is present and inspectable.
- Critical D6 seam sources are represented.
- Evidence archives are present and tagged, but mostly non-promoted (correct for this pass).
- Confirmed gap: `user_knox_preferences_locked_2026-05-17.md` not explicitly represented in manifest routing.

This gap is patched minimally in the manifest update step.

---

## E) Confidence + Debt Declaration

### Memory confidence
- **High confidence:** D6 seam-critical doctrine/index/closure sources explicitly inspected.
- **Medium confidence:** selected historical rationale and supporting trigger docs.
- **Low confidence:** transcript archives, raw image evidence sets, and many inventoried handoff/preflight/audit artifacts.

### Known memory debt
- Transcript corpus semantic extraction pending.
- Mindbody screenshot-level extraction pending.
- Hims raw ingest semantic synthesis pending.
- Many historical handoffs/preflights/audits still inventory-level.
- April clinical/intake audit family not yet distilled into extracted lessons.

### Routing safeguard
Any future task touching low-confidence zones must run a targeted synthesis pass before authoring.

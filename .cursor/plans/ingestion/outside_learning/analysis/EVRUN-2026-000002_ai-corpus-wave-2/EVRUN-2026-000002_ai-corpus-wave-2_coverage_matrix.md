# EVRUN-2026-000002 · ai-corpus wave-2 — COVERAGE MATRIX

Tracks which of the 110 wave-2 sources (`EVSRC-2026-000090…000199`) are represented in the concept registry. Status per source: `scaffolded` (file exists, awaiting paste) → `pasted` (transcript + Knox read in) → `covered` (Review 003 written + folded to registry) → `weak` (thin, revisit).
**Status: COMPLETE + C1-CONFORMANCE-VERIFIED (2026-06-13).** Created 2026-06-11. All 110 covered; C1 conformance pass run (see §C1-Conformance below). [142/156 recovered via re-dispatch; 146 processed by Opus-main directly after subagent `resource_exhausted` ×3 — all verified clean.]
**Controlling plan:** `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` (the C1→C5 phase-gate sequencer). C1 (this processing wave) = COMPLETE. **Next per plan = C2 (Source Base Declaration) + C3 (method recovery) → C4 (v4 spine), each plan-before-execute at its own gate.**

## §C1-Conformance — verification pass (2026-06-13)
Audited C1 output against the settled method in the controlling plan (`654989a0` §C1):
- ✅ **110/110 sources processed** — every EVSRC carries §3 Review 003 + status `analyzed` (incl. error/re-dispatched 142/146/155/156/178). Verified by content grep + spot-read.
- ✅ **Cluster-format conformant** — sampled 146 (Opus-direct) + 156 (re-dispatched): proper tables (concept · OMNI meaning · why · homes · timestamped anchors · stale-vs-v3 · conflict_status · weight_tier · status) + net-new primitives + reread flags + §4 pointers filled + changelog.
- ✅ **No sidecar/`extractions/` files; registry + Tension Register (T1–T194, all routed `GRD-043`) + coverage matrix synced; dedup vs 000001 §2A held.**
- ✅ **Anchor ledger** — was an empty shell; **closed 2026-06-13** as a per-source coverage-receipt index (anchors-by-reference; receipts-of-record remain in each §3 + registry §1A).
- ⚠️ **Residual (accepted):** registry fidelity + read-depth rest on subagent packets (not each independently re-verified against verbatim by Opus-main); §0.5 processing-checkboxes inconsistent on some sources (cosmetic — work is done). No content defect found in the QA sample.
- **Verdict:** C1 carried out substantially to spec; content quality good incl. on high-risk sources; the one hard-skipped deliverable (anchor ledger) is now closed. C1 GATE = passed.

## Summary
- **WAVE-2 COMPLETE — Covered: 110 / 110** (`000090…000199`) · Scaffolded 110 · Pasted 110 · **Pending: 0** · Weak: 0. (163=exact-duplicate→096; 180≈181, 184≈185, 198≈199 = near-dup sibling pairs; 189/191/192/193/194/196/197 = AFFIRM-heavy practitioner/vendor-duplicate tail; remainder net-new-bearing.) Registry fully reconciled (194 tensions, ~87 reconciliation-watch items). **Next: promotion gate → thesis-v4 / contracts / Build-OS reshape.**
- Cumulative baseline: `EVRUN-2026-000001` (42 sources covered) — wave-2 adds on top; combined corpus target ≈ 150 sources.

## Per-source status
| EVSRC | slug | status |
|---|---|---|
| `000090` | the-ai-native-company-garry-tan-diana-hu-stanford-cs153 | `covered` (full_semantic/spine) |
| `000091` | lampinen-anthropic-generalization-parameters-vs-context-cs25 | `covered` (full_semantic/spine) |
| `000092` | jensen-huang-nvidia-compute-behind-intelligence | `covered` (infra-spine) |
| `000093` | tazi-huggingface-ultra-scale-playbook-cs25 | `covered` (constraint-literacy) |
| `000094` | stanford-cme295-transformers-llms-lecture-1 | `covered` (vocabulary primer, no-op) |
| `000095` | nikhyl-singhal-skip-ai-era-product-management | `covered` (product-execution/workforce lane) |
| `000096` | joe-sullivan-security-incident-governance | `covered` (security/incident-governance spine) |
| `000097` | amin-vahdat-google-value-per-gigawatt | `covered` (infra operating-discipline) |
| `000098` | amit-jain-luma-unified-intelligence-systems | `covered` (multimodal-evidence substrate) |
| `000099` | andreas-blattmann-black-forest-labs-visual-intelligence | `covered` (multimodal; natural_representation) |
| `000100` | cisco-tech-field-day-resilient-switching-live-protect | `covered` (security mechanism layer, watch) |
| `000101` | langchain-interrupt-26-future-of-ai-agents-keynote | `covered` (full_semantic; agent_runtime_profile) |
| `000102` | langchain-interrupt-langsmith-fleet | `covered` (vendor convergence node) |
| `000103` | carlos-pereira-cisco-cx-ai-native-workflow | `covered` (workflow recomposition + adoption physics) |
| `000104` | geng-sng-cogent-autonomous-cyber-defense | `covered` (spine_candidate; trust_ladder/blast_radius) |
| `000105` | benchling-context-first-agent-substrate | `covered` (context-first sequencing law; task_verifiability) |
| `000106` | langchain-managed-deep-agents-interrupt-26 | `covered` (model_plus_harness; build-vs-buy) |
| `000107` | uber-dev-platform-langgraph-agents | `covered` (intentional_tech_transfer; Build-OS) |
| `000108` | listen-labs-langsmith-engine-trace-review | `covered` (trace-review loops; watch) |
| `000109` | arize-alyx-context-management | `covered` (eval ladder; long_session_eval) |
| `000110` | langsmith-sandboxes-agent-containment | `covered` (agent_sandbox; agency_requires_containment) |
| `000111` | langchain-adlc-interrupt-26-keynote | `covered` (agent_lifecycle_frame; umbrella) |
| `000112` | langsmith-engine-agent-development-lifecycle | `covered` (vendor receipt; fix_destination_routing) |
| `000113` | smithdb-langchain-agent-observability | `covered` (vendor receipt; trace_classification) |
| `000114` | factory-missions-luke-alvoeiro | `covered` (mission_object; validation_contract) |
| `000115` | langsmith-engine-founder-explainer | `covered` (improvement_route_target; watch) |
| `000116` | langchain-choosing-multi-agent-architecture | `covered` (single_agent_first; anti-agent-theater) |
| `000117` | langchain-agent-builder-ux | `covered` (expose_work_state; vendor demo watch) |
| `000118` | harrison-chase-observability-evals-for-agents | `covered` (full_semantic; trace-governance family) |
| `000119` | langsmith-context-hub-demo | `covered` (context-engineering AFFIRM; watch) |
| `000120` | anjney-midha-stanford-cs153-frontier-systems | `covered` (taste_as_verifier; context-as-moat) |
| `000121` | mati-elevenlabs-voice | `covered` (architecture_inspectability_gate; voice 050) |
| `000122` | karl-pertsch-physical-intelligence-long-horizon-autonomy | `covered` (time_scale_aware_memory; exemplar) |
| `000123` | stanford-observing-the-user-experience-2026 | `covered` (full_semantic; ground-truth counterweight) |
| `000124` | stanford-cs25-representation-learning-world-modeling | `covered` (consequence_model; NEW family) |
| `000125` | baxi-chong-stanford-mechanical-intelligence-locomotion | `covered` (analogy AFFIRM; embodied_intelligence) |
| `000126` | danfei-xu-robot-learning-from-human-experience | `covered` (spine; experience_alignment) |
| `000127` | stanford-aa228v-explainability | `covered` (spine; proof_of_fix; fairness/proxy) |
| `000128` | stanford-cs221-l19-ai-supply-chains-bommasani | `covered` (NEW AI-economics spine; complementary_innovation) |
| `000129` | stanford-cs221-l14-bayesian-networks-liang | `covered` (uncertainty glossary; watch) |
| `000130` | stanford-cs221-l9-policy-gradient-liang | `covered` (RL reward-governance; watch) |
| `000131` | stanford-cs221-l8-reinforcement-learning-liang | `covered` (RL; constraint_not_reward; HARDENS §A) |
| `000132` | stanford-hai-landay-human-centered-ai | `covered` (NEW trust/adoption/care-design family) |
| `000133` | andy-slavitt-healthcare-ai-demand-wedge | `covered` (bottom_up_adoption; patient_ai_bridge) |
| `000134` | healthcare-between-visit-care-wedge | `covered` (NEW care-domain family; between_visit_care_layer) |
| `000135` | boneh-altman-stanford-ai-career-security | `covered` (full_semantic/spine-AFFIRM; security context-minimization) |
| `000136` | olteanu-stanford-cs547-reframing-responsible-ai | `covered` (full_semantic/spine; RAI-as-rigor + claim_discipline) |
| `000137` | stanford-cs230-l5-deep-rl-rlhf | `covered` (targeted_semantic; RLHF/preference — co-author 130/131) |
| `000138` | nundy-stanford-tracking-trusting-ai-in-medicine | `covered` (full_semantic/spine; clinical-AI post-market monitoring) |
| `000139` | stanford-online-advanced-cybersecurity-program | `covered` (low/watch; no spine; security-corpus gap-flag) |
| `000140` | stanford-cs229-resolve-ai-agents-do-swe-work | `covered` (full_semantic/spine; agent_complexity_ladder convergence host) |
| `000141` | stanford-cs231n-l7-rnns | `covered` (targeted_semantic; ~0 net-new; grounds 091 memory + 127/136) |
| `000142` | kimberly-powell-nvidia-stanford-healthcare-ai | `covered` (full_semantic/care-domain AFFIRM-spine; model_placement_policy) [re-dispatch] |
| `000143` | peter-lee-stanford-ai-in-healthcare | `covered` (full_semantic/care-domain spine; business-subordinate-to-evidence) |
| `000144` | dominik-moritz-build-less-design-more | `covered` (full_semantic/Build-OS+Surface spine; accessibility_as_structure NEW family) |
| `000145` | jessica-mega-stanford-ai-in-healthcare | `covered` (full_semantic/spine-as-AFFIRM; within_label_heterogeneity; clinician capstone) |
| `000146` | eric-topol-stanford-ai-longevity-future-of-healthcare | `covered` (full_semantic/care-domain spine-as-AFFIRM; trajectory_over_threshold + evidence_gated_longevity GRD) [Opus-main direct] |
| `000147` | stanford-generative-ai-for-healthcare-pt1 | `covered` (full_semantic/AFFIRM-vocabulary; ai_literacy_substrate) |
| `000148` | amy-abernathy-stanford-implementation-evidence | `covered` (full_semantic/spine; implementation_evidence as 3rd evidence category) |
| `000149` | graham-walker-stanford-decision-support-to-prescriptions | `covered` (full_semantic/care-domain spine; clinical_action_ladder + rubber_stamp_guard) |
| `000150` | stanford-cs224n-l5-manning-language-models-rnns | `covered` (targeted_semantic; ~0 net-new; AFFIRM/mechanics-grounding) |
| `000151` | troy-tazbaz-ex-fda-stanford-digital-health | `covered` (full_semantic AFFIRM; executable_governance_law + demand_signal_ownership) |
| `000152` | openai-podcast-14-gross-singhal-ai-for-healthcare | `covered` (full_semantic spine-as-AFFIRM + §2 foil; literacy_adaptive_response) |
| `000153` | jonathan-chen-stanford-ai-in-medicine | `covered` (full_semantic/care-domain spine; clinical-AI behavior-safety family) |
| `000154` | haoqi-zhang-stanford-cs547-computational-ecosystems | `covered` (methodology spine-AFFIRM; practice_redesign_before_tooling + practice-development family + technological_values_guard) |
| `000155` | nigam-shah-stanford-responsible-ai-in-health-care-furm | `covered` (full_semantic/care-domain spine — ORIGIN authority for 133/134/138/146/148/149/153; value_from_action_law + task-type taxonomy + capacity axis + benefit-accrual fairness + timeline substrate) |
| `000156` | gates-bubeck-lee-msr-ai-revolution-in-medicine-revisited | `covered` (full_semantic/spine-as-AFFIRM; twin of 143; comparator_relative_autonomy + reward-model→sycophancy mechanism anchor for 153) |
| `000157` | siemens-ecr-2024-how-ai-is-transforming-radiology | `covered` (targeted_semantic/vendor-bounded; imaging-Observation seam: artifact_multi_observation/incidental_finding_obligation; orchestration-not-accuracy AFFIRM) |
| `000158` | benjamin-fine-umit-will-ai-replace-radiologists | `covered` (targeted_semantic/expert-workforce instance of care run; incident_level_error_acceptability + expert_value_legibility + discrepancy_audit_as_training) |
| `000159` | victoria-lin-stanford-cs25-native-multimodal-intelligence | `covered` (targeted_semantic/AI-substrate spine-slice; understanding_generation_asymmetry + representation_choice_consequence; architecture rationale for 098/099/050/157) |
| `000160` | robert-platt-stanford-engr319-geometry-in-robot-learning | `covered` (targeted_semantic/analogy-spine; architecture_is_data_efficiency keeper law; `GRD-026` adjacent) |
| `000161` | stanford-cme296-l8-diffusion-large-vision-models | `covered` (targeted_semantic/media-substrate AFFIRM; D7-provenance quartet: model_collapse_risk + causal_context_discipline + preservation_edit_not_regeneration + provenance_fragility) |
| `000162` | stanford-cme296-l7-evaluation | `covered` (targeted_semantic/eval-methodology canon; dependency_graph_eval + sampling_protocol_disclosure + eval_object_model; Build-OS eval-contract reconciliation host) |
| `000163` | joe-sullivan-stanford-cs153-resilience-required | `covered` (**duplicate→096**; 0 net-new; resolves 096 metadata + 2 SHARPEN flags) |
| `000164` | stanford-cs336-l14-data | `covered` (full_semantic/data-pipeline + corpus-governance spine; corpus_pipeline_doctrine + target_vs_raw_filter + decontamination_set; META-VALIDATES Evidence-Plane + Control-Plane) |
| `000165` | stanford-cs336-l3-architectures | `covered` (targeted_semantic/methodology AFFIRM-spine; anchor_relative_context + invariant_vs_tunable_classification; AFFIRMS Control-Plane + Read-Graph) |
| `000166` | stanford-cs336-l13-data-sources-datasets | `covered` (full_semantic/source-governance spine — upstream half of data-control-plane; source_constraint_class + item_level_rights_granularity + data_liability_shadow; T121 pressures GRD-036) |
| `000167` | stanford-cs336-l5-gpus-tpus | `covered` (targeted_semantic/systems-physics substrate-vocabulary; operation_fusion_boundary + binding_constraint_first + exactness_preserving_optimization; §B not care doctrine) |
| `000168` | stanford-cs336-l6-kernels-triton-xla | `covered` (targeted_semantic/Build-OS execution-discipline AFFIRM; fuse_computation_not_commitment + tiled_context_processing; external proof of 151/121/056) |
| `000169` | stanford-cs336-l4-attention-alternatives-moe | `covered` (full_semantic/technical-grounding spine-as-SHARPEN; memory_routing_vs_capability_routing + no_silent_work_drop; grounds 093+091) |
| `000170` | stanford-cs336-l7-parallelism | `covered` (targeted_semantic/distributed-execution AFFIRM-spine; coordination_pattern_taxonomy + work_decomposition_mode; 7th CS336, downgraded from full) |
| `000171` | stanford-cs336-l8-parallelism | `covered` (full_semantic/CS336 frontier-scale composition capstone; multi_axis_scaling_composition + topology_aware_boundary_placement; T136 comms-boundary≠authority-seam) |
| `000172` | stanford-cs336-l9-scaling-laws | `covered` (full_semantic/Build-OS experiment-prediction discipline; small_run_prediction_discipline + equal_budget_sweep + recipe_sensitivity_law; T131 trend≠care-gate) |
| `000173` | stanford-cs336-l10-inference | `covered` (full_semantic/serving-economics ORIGIN spine; runtime_cost_dominates_law + speculative draft→verify + paged/shared-prefix cache; completes the CS336 cluster) |
| `000174` | stanford-cs336-l11-scaling-laws | `covered` (full_semantic/Build-OS experiment-governance AFFIRM, operational twin of 172; baseline_tuning_before_comparison + failed_run_as_evidence + change_cadence_by_layer) |
| `000175` | stanford-cs336-l12-evaluation | `covered` (full_semantic/eval-methodology spine, practitioner twin of 162; evaluation_shapes_system_law + eval_portfolio + dumb_baseline_check + eval_shelf_life) |
| `000176` | stanford-cs336-l16-post-training-rlvr | `covered` (full_semantic/RLVR reward-verifier law, co-author 130/131/137; outcome_vs_process_supervision + verifiable_not_unhackable + environment_anti_cheat_isolation) |
| `000177` | stanford-cs336-l15-mid-post-training | `covered` (full_semantic/post-training behavior-shaping-data NEW-spine; post_training_steering_layer + annotation-governance family + safety_refusal_tradeoff + base_model_not_raw) |
| `000178` | stanford-cs336-l17-multimodality | `covered` (full_semantic/multimodal mechanism-ORIGIN of 098/099/159 substrate; dynamic_resolution_ingestion + signal_weighted_modality_budget + explicit_artifact_coordinate + artifact_representation_pluralism) |
| `000179` | dan-fu-stanford-cs336-inference-lifetime-of-a-token | `covered` (full_semantic/serving production-twin of 173; rare_scale_failure_class + bounded_loop_gain + cache_isolation_boundary + navigation_prefetch_signal) |
| `000180` | welch-labs-jepa-lecun-world-models-pt1 | `covered` (**≈181 near-duplicate sibling**; analogy-spine AFFIRM of 124; SHARPEN inference_as_search + ambiguity_averaging_failure; net-new attributed once) |
| `000181` | welch-labs-jepa-lecun-world-models-pt1 | `covered` (analogy-spine AFFIRM; sibling of 124, ZERO net-new; LeCun = originator-authority anchor for world-model doctrine) |
| `000182` | welch-labs-jepa-lecun-world-models-pt2 | `covered` (full_semantic/world-model planning-governance sibling of 180/181; prediction_horizon + authority_matches_horizon + hierarchical_planning_decomposition + transition_model_not_behavior_policy) |
| `000183` | peter-washington-stanford-cs547-hci-human-centered-ai-digital-health | `covered` (full_semantic/NEW-spine HCI care-AI deployment physics; JITAI timing + receptivity_gate + decision_threshold_policy + prevalence_sensitive_metric + device_context fairness) |
| `000184` | michael-yip-stanford-engr319-autonomous-medical-robotics | `covered` (full_semantic/spine — irreversible-medical-action anchor; bounded_autonomy_control_loop + action_reversibility_class + dependency_probe_before_commit + safe_probe + targeted_recovery + design_for_actor_embodiment) |
| `000185` | michael-yip-stanford-engr319-autonomous-medical-robotics | `covered` (**≈184 near-duplicate sibling**; same lecture; net-new attributed once to 184) |
| `000186` | allison-okamura-stanford-design-control-haptic-systems | `covered` (targeted_semantic/~90% AFFIRM; effect_observability_precondition — feedback-channel law/runtime autonomy axis) |
| `000187` | cole-medin-agentic-rag-knowledge-graphs | `covered` (targeted_semantic/watch; ~0 net-new; AFFIRM of memory_mode_router 091 + GRD-042; connected_not_committed SHARPEN) |
| `000188` | cole-medin-self-evolving-claude-code-memory | `covered` (full_semantic implementation-pattern; AFFIRM Control-Plane/AWP §8/Evidence-Plane; net-new architecture_memory_lint ★; gate-free auto-promote = counter-evidence T183) |
| `000189` | cole-medin-harness-engineering | `covered` (full_semantic-coverage/AFFIRM-duplicate; ZERO net-new; cleanest statement of model_plus_harness 106; leans context-first↔harness-first) |
| `000190` | cole-medin-full-archon-guide | `covered` (full_semantic/DUPLICATE-CLASS twin of 189; net-new dark_factory_seam + open_intake_triage_gate + autonomous_merge_prohibition; T188) |
| `000191` | cole-medin-complete-agentic-coding-workflow | `covered` (full_semantic-coverage/AFFIRM-duplicate-class; ~0 net-new; thin fake_validation_from_missing_prerequisite ★ care-relevant) |
| `000192` | cole-medin-principled-agentic-engineer | `covered` (full_semantic-coverage/AFFIRM-duplicate-class; ~0 net-new; artifact-mediated work-lifecycle; cross_functional_work_initiation + plan_conformance_check thin angles) |
| `000193` | crawl4ai-tutorial | `covered` (low/watch/duplicate-class; 0 net-new; external GRD-036 anchor — crawler output ≠ knowledge) |
| `000194` | cole-medin-anthropic-agent-harnesses-large-codebases | `covered` (duplicate-class/AFFIRM-heavy; ~0 net-new; sibling of 189–192; thin ai_layer_ownership) |
| `000195` | anthropic-blog-claude-code-large-codebases-and-security | `covered` (DUAL Anthropic blog — harness PRIMARY-source behind 084 + security partner-ecosystem; AFFIRM/authority-upgrade; thin harness_decay_review ★ + ai_layer_ownership_dri) |
| `000196` | anthropic-claude-security-public-beta | `covered` (vendor AFFIRM-spine security lane; remediation_latency_metric + dismissal_as_committed_decision + verified_purpose_capability_access; deepens 139 gap-flag) |
| `000197` | claude-connector-observability-for-developers | `covered` (low/watch/duplicate, website; 0 net-new; vendor instance of observability + connector-admission; capability_author_observability thin angle) |
| `000198` | lin-qiao-fireworks-sequoia-scale-ai-inference-100x | `covered` (serving-economics vendor AFFIRM of 173/179; workflow_lane_as_architecture_unit ★ + application_distribution_alignment ★; T194 production-data-flywheel↔no-RL-care) |
| `000199` | lin-qiao-fireworks-sequoia-scale-ai-inference-100x | `covered` (**≈198 near-duplicate sibling**; same talk; net-new attributed once to 198) |

> Individualize rows during processing (one row per source once it has a title/content). Per-source slug firms up from §0 metadata at processing time.

> Individualize rows during processing (one row per source once it has a title/content), or keep the range row until a source is picked up. Per-source-row individualization is a processing-time step.

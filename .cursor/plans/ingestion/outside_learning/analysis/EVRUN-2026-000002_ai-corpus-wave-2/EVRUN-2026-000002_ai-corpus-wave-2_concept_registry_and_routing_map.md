# EVRUN-2026-000002 · ai-corpus wave-2 — CONCEPT REGISTRY + Multi-Home Routing Map (PRIMARY workbench)

Layer: `omni_analysis_nonbinding`. Proposes routes; promotion passes each home's gate (`GRD-036`/`GRD-044`).
**Status: PROCESSING.** Created 2026-06-11. Populated as the 110 wave-2 sources (`EVSRC-2026-000090…000199`) are processed (per-source §3 Review 003 → folded up here). **Batch 1 (090–094) folded 2026-06-12.**

## Cumulative baseline (do not restart synthesis)
This registry is built **on top of** `EVRUN-2026-000001`'s `§2A` full-corpus net-new primitive set (families A–J) as the **dedup + cumulative baseline**. Before minting any concept, check EXISTS-AS against 000001's registry.
- Baseline: `../EVRUN-2026-000001_ai-corpus-synthesis-and-routing/EVRUN-2026-000001_ai-corpus_concept_registry_and_routing_map.md`.

## Sections (to fill during processing — mirrors 000001)
- §1 Multi-home cluster routing table (cluster · core idea · action_type · downstream homes · stale-vs-v3 · promotion).
- §1A Per-source anchors (reopen before promotion).
- §2A Net-new primitive promotion set (NEW/SHARPEN/EXISTS-AS/REJECT vs 000001 §2A baseline).
- §3 Stale-vs-v3 verdict lane.
- **§3T Tension/Conflict Register** — cross-source tensions, each `conflict_status` (none/tension/direct_conflict/unresolved) + resolution-pointer-or-open-review (no unrouted tensions, `GRD-043`).
- §6 Status + coverage pointer.

---

## §1 — Multi-home cluster routing (cross-source synthesis)
Each row = a cross-source cluster. `action_type` ∈ {NEW-spine, sharpen, affirm, watch, no-op}. Full per-source detail lives in each source's §3 Review 003; this is the synthesis layer.

| cluster | core idea | action_type | downstream homes | stale-vs-v3 | conflict | promotion |
|---|---|---|---|---|---|---|
| closed-loop company / AI-native company | firm run as a closed-loop control system (artifacts→read→observe→suggest→gated-commit→self-heal); be AI-native internally before claiming AI-native care | **NEW-spine** | v4 company-building/§2 · Build-OS · CNS | ABSENT | tension (vs focus/anti-diffusion) | promote-candidate |
| memory-mode router | choose + gate the *memory mode* per task (parametric · episodic-retrieval · long-context · train-time-aug · test-time-reasoning · human-commit); weights are not OMNI's memory | **NEW-spine** | §B AI-substrate · CNS context-assembly · Knowledge-Reservoirs | ABSENT | tension→resolved (RAG-vs-long-context) | promote-candidate |
| systems co-design | win by co-designing workflow+truth+context+loops together, not optimizing each layer in isolation | **NEW-spine** | §B · Build-OS · CNS-contract | PARTIAL | none | promote-candidate |
| minimum-sufficient mechanism | choose least-complex mechanism meeting correctness+authority+cost+latency+scale (generalizes IBM smallest-sufficient-model 076 to ALL mechanisms) | **NEW** (Build-OS law) | Build-OS admission · §C/capability-topology | PARTIAL | none | promote-candidate |
| skillify lifecycle + resolver | promote-to-skill ladder (do-once→skill+code→unit-test→LLM-eval→integration→resolver-trigger→smoke→memory); resolver = lazy on-demand context loader | sharpen (056 automation-lifecycle · 059 context-eng · manifest read-graph) | Build-OS · CNS context-assembly | PARTIAL | none | watch→promote at Build-OS gate |
| cross-model eval / jury | multi-model jury evaluates I/O → feeds back to subagent | sharpen (054 eval-harness · 069/070 model-plurality) | Build-OS evals · §B | PARTIAL | none | watch |
| governed broad artifact read | breadth creates intelligence, authority boundaries create safety; agent read governed by PHI/consent/purpose | sharpen (081 zero-click · 059) | §A authority · §B · security-lane | PARTIAL | **direct_conflict** (read-everything vs PHI default-deny) | watch (gate breadth) |
| continuous generative computing | compute shifts prerecorded/on-demand → generated/contextual/continuous | sharpen (087 CNS-dynamic) | CNS · §B | AFFIRM | tension (vendor optimism) | affirm |
| capability runtime profile | per-capability runtime metadata {context,model,latency,cost,tools,trace,eval,retry,fallback,HITL,safety} | sharpen (capability_envelope · 064 heterogeneous-path-cost) | §C/capability-topology | PARTIAL | none | promote-candidate |
| capacity-aware routing | routing = capacity/load/latency/authority mgmt, not just semantic classification (MoE load-balance analogy) | sharpen (086 attention-routing) | CNS routing · §C | PARTIAL | none | watch |
| transformer/ML mechanics (CME295) | tokenize→embed→attend→encode/decode→generate; reference-free metrics | no-op (vocabulary floor) | Knowledge-Reservoirs glossary (future onboarding pack) | n/a | none | no-op |
| product-builder workforce (095) | AI collapses the info-mover; product-builder (judgment/taste/systems/hands-on) rises; flatter org | **NEW-lane** | Build-OS workforce · operator-topology · §2 | ABSENT | tension (flat-org vs accountability) | promote-candidate |
| incident governance — human layer (096) | incident as composed cross-domain object + crisis-authority matrix + pre-authored transparency posture | **NEW-spine** | security-lane · CNS-escalation · RBAC/§A · D7 · Messaging | ABSENT | tension (transparency vs PHI) · direct_conflict (vibe-coding vs gates) | promote-candidate |
| infra operating discipline / goodput (097) | capacity≠capability, activity≠goodput; reliability sized to risk; route scarce attention/compute to useful committed outcomes | sharpen (087 CNS · 064 inference-budget · 086 attention-routing) | §B · CNS · Build-OS | PARTIAL | tension (reliability-tradeoff vs clinical fail-closed) | watch→promote |
| multimodal evidence substrate (098+099) | media as first-class evidence (natural representations); media→observation candidates; learn-from-usage, not artifact-absorption | **NEW-spine** | D7 · Observation · Clinical-Memory · Knowledge-Reservoirs · §B (pair voice 050) | ABSENT | tension (unified-model vs distributed-truth) | promote-candidate |
| guardrail non-negotiability (099) | guardrails not purchasable/bypassable by size/revenue/privilege | **NEW** (candidate GRD) | §A · Federation · security-lane | PARTIAL | none | promote-candidate |
| agent runtime profile (101/102; =093/097) | per-agent governable spec/passport {horizon·model·harness·context·tools·creds·cost·latency·sandbox·HITL·trace·eval·rollback} | **NEW** (CONVERGES 093 capability_runtime_profile + 097 runtime_profile — unify) | Build-OS · Agent Work Protocol · §C | PARTIAL | tension (self-provisioned creds) | promote-candidate |
| harness layer (101) | name model/harness/context triad; harness = a named improvable layer | sharpen (059 context · 084 harness-first) | §B · Build-OS | PARTIAL | none | watch |
| autonomy / trust ladder (104; reconcile 049/057/070/086) | one OMNI autonomy ladder keyed to blast-radius ("what if the agent is wrong"), not capability | **NEW-spine** (RECONCILE 5-way collision) | §A authority · CNS · Build-OS gates | PARTIAL | tension (autonomous remediation vs clinical action) | promote-candidate |
| security mechanism layer (100/104) | runtime_shield / patch_bridge / exposure_window / blast_radius_class / proof_before_action — mitigate-now, fix-later, close-loop | **NEW** (mechanism face of 096 governance) | §C/security control-plane · Build-OS security gates | ABSENT | tension (monitor→enforce soft-launch vs clinical default-deny) | watch (family = spine-slice) |
| AI-native workflow recomposition + adoption physics (103) | recompose from outcome before adding AI (AI compounds workflow debt); accuracy=table-stakes, optionality kills adoption, embed-as-teammate | **NEW** | v4 wedge/§2 · use-case-first (073) · surfaces §7.7 | PARTIAL | direct_conflict (ai-commits-to-results vs core law) | promote-candidate |
| context-as-moat + context temperature (104) | hot/cold context by active use × org/task scope; defensive-complexity moat = context layer survives model commoditization | sharpen (091 memory-mode-router · 059 context-eng · FWREG-007 reservoirs) | §B · Knowledge-Reservoirs · CNS | PARTIAL | none | promote-candidate |

## §1A — Per-source anchors (reopen before promotion)
- **090** Garry Tan/Diana Hu · Stanford CS153 "The AI-Native Company" — full_semantic/spine; sibling-spine to 084/085/089. Net ADD = closed-loop-company operating layer.
- **091** Andrew Lampinen · Anthropic/Stanford CS25 "Distinct Modes of Generalization from Parameters and Context" — full_semantic/spine; cleanest technical grounding for memory-mode router + RAG-vs-long-context.
- **092** Jensen Huang · NVIDIA "Compute Behind Intelligence" — infrastructure spine (not product); net-new `systems_codesign`; rest AFFIRMS 087/064-065/054/069-079/074.
- **093** Nouamane Tazi · HuggingFace Ultra-Scale Playbook · Stanford CS25 — constraint-literacy; Build-OS disciplines `minimum_sufficient_mechanism` + `capability_runtime_profile`; no thesis-spine.
- **094** Stanford CME295 Transformers & LLMs L1 — vocabulary-tier primer; 0 net-new; promotion no-op.
- **095** Nikhyl Singhal · Skip — AI-era product management — product-execution/workforce lane (NOT AI-substrate); keeper "AI kills the info-mover, raises the product-builder." `GRD-039` ceiling: product operator, not substrate authority.
- **096** Joe Sullivan — security/incident governance — the human/operational face of family H (sibling-spine to 079/080/081/050). `GRD-039` caveat: US v. Sullivan defendant + AppSec/BreachRX stake → weigh descriptively.
- **097** Amin Vahdat · Google — value-per-gigawatt — infra operating-discipline hardening for §B/CNS/Build-OS; sibling/disciplined-correction to Jensen 092 + compute-wall 066.
- **098** Amit Jain · Luma — Unified Intelligence Systems — net-new multimodal axis (media-as-evidence); direct sibling to 099; pair with voice 050.
- **099** Andreas Blattmann · Black Forest Labs — visual intelligence — `natural_representation` + `guardrail_nonnegotiability`; direct sibling to 098 (the multimodal-substrate pair).
- **100** Cisco / Tech Field Day — resilient-switching / Live Protect — security *mechanism* layer (`runtime_shield`/`patch_bridge`/`exposure_window`); the mechanism face of 096 Sullivan governance. Vendor → watch.
- **101** LangChain · Interrupt 26 keynote — the productized agent-OS; `agent_runtime_profile` (promote-candidate; converges 093/097). Vendor-bias caution; "governance is the scaling bottleneck" = external corroboration of OMNI's center of gravity.
- **102** LangChain · Interrupt + LangSmith Fleet — vendor convergence node, ~0 net-new; `agent_auth_mode_taxonomy` + model/harness/context frame. Near-sibling of 101.
- **103** Carlos Pereira · Cisco CX — AI-native workflow recomposition + adoption physics; lean-supervisor/domain-planner/routing-first; direct_conflict on "AI commits to results."
- **104** Geng Sng · Cogent (LangChain "Max Agency") — **spine_candidate**; autonomous cyber defense → `blast_radius_class`, `trust_ladder` (reconcile 049/057/070/086), `proof_before_action`, context-temperature, `defensive_complexity_moat` (context = the durable moat). Anchor node binding security + autonomy + context families.

## §2A — Net-new primitive promotion set (vs `EVRUN-2026-000001 §2A` baseline)
**NEW (mint at destination gate):**
- `closed_loop_company`, `ai_native_company_doctrine` (090) — v4 company-building / "OMNI operates itself."
- `governed_artifact_read_access` (090) — broad read gated by PHI/consent/purpose.
- `memory_mode` (enum), `memory_mode_router`/`memory_mode_selection` (091) — selects *memory mode* (sibling of, not dup of, §2A-F compute routers).
- `in_context_generalization`/`latent_generalization_gap`, `latent_implication_extraction`, `train_time_augmentation`/`augmentation_to_materialization` (091) — **clinical guardrail: candidates only; correlated clinical errors do not "average out" (`GRD-029`/`GRD-036`)**.
- `retrieval_failure_eval`/`retrieval_quality_state` (091) — pairs eval-harness 054.
- `systems_codesign` (092) — **spine** design law.
- `minimum_sufficient_mechanism` (093) — Build-OS admission law (generalizes 076).
- `capacity_aware_routing` (093) — routing as load/authority mgmt.

**SHARPEN (existing host — do not re-mint):** `skillify_lifecycle`→056; `resolver`/`context_resolver`→059+manifest-read-graph; `cross_model_eval/jury`→054+069/070; `continuous_generative_computing`/`agent_compute_pattern`→087+059/089; `outcome_per_attention`→054+086; `capability_runtime_profile`→capability_envelope+064; `wedge_specific_substrate_general`→foundation-vNext; `typed_knowledge_graph`/`dynamic_ontology`→Knowledge-Reservoirs (build technique, retrieval≠authority `GRD-042`).

**EXISTS-AS (confirmed dup, no mint):** 090 check_resolvable→`workflow_dedupe_gate`(056); latent_vs_deterministic_boundary→`deterministic_commit_boundary`(061); skill/markdown_is_code→agent-operable-docs(084); FDE-wedge→BPO/AOP-wedge(057/056); 091 context_packet→`clinical_context_packet`(G11); retrieval_trace→`trace_as_evidence`; 092 model_runtime_router→`AI_model_registry`(§2A-H); agent_swarm→loops/fleets(089); energy/loop_budget→`compute_allocation_policy`(§2A-F); defensive_agent_fleet→§2A-H(080); 093 loop/context/eval budgets→`compute_allocation_policy`+`context_compaction_policy`; 094 all→context-eng/inference-budget/eval families (no sharpening).

**REJECT (as doctrine; watch as evidence only):** `one_person_company`/`boil_the_ocean` (090), `tokens_per_watt` (092 → folds into `outcome_per_attention` as analogy), `first_principles_forecasting`/NVIDIA optimism (092 low-authority-watch).

### Batch 2 (095–099) — vs baseline
**NEW (mint at destination gate):**
- `product_builder_role`, `information_mover_collapse`, `pm_theater_antipattern` (095) — product-execution/workforce lane (open a new doctrine lane; §2A was AI-substrate-heavy). `pm_theater_antipattern` SHARPENS the existing anti-dashboard-theater guardrail (§2A-H) — bind as ONE.
- `incident_response_record`, `crisis_authority_matrix`, `transparency_posture`, `disclosure_decision`, `responsible_disclosure_intake`, `operational_resilience_event`, `capability_rollout_governance`, `production_merge_authority`, `regulatory_legibility`, `authorization_timing_boundary` (096) — human/operational governance layer over family-H technique sources.
- `goodput`/`useful_committed_work`, `system_balance`, `reliability_class`+`degradation_policy`, `workflow_coupling_class`, `bottleneck_detection`, `dynamic_replanning`, `capacity_envelope` (097) — infra operating discipline (§B/CNS/Build-OS).
- `media_artifact_intelligence`, `media_to_observation_pipeline`, `visual_assertion_candidate`/`audio_assertion_candidate`, `multimodal_context_packet`, `no_train_artifact_zone`, `interaction_trace_learning` (098) — the multimodal axis the text-centric corpus lacked.
- `natural_representation` (099, targeted spine), `guardrail_nonnegotiability` (099, candidate GRD).

**SHARPEN (existing host):** 095 `product_signal_loop`→build-discovery/human-context(053/067)+attention-routing(086); `system_fit_judgment`→intent-bottleneck(058)+abundant-cognition-keystone(048/061)+authority-family(082). 096 `purpose_bound_agent_access`/`short_lived_credential`→least-privilege-agent(081); `agent_runtime_anomaly`→AI_threat_monitor(079)+autonomy-attack-surface(081); `external_server_detection`→shadow_AI_discovery(079); `vibe_coding_risk`→family-H gates+089 counter-doctrine. 097 `value_per_capacity`→`value_per_attention` (generalizes attention-routing 086); `runtime_profile`→`capability_runtime_profile`(093)/capability_envelope; `capacity_aware_routing`→087 CNS-activation+064. 098 skills→`skillify_lifecycle`(090/056); trace-learning→054/059; context-outside-model→`memory_mode_router`(091)/059. 099 `media_context_packet`→059/087+D7; `open_model_customization_policy`→model-plurality(069/064); `model_packaging_tier`→capability_envelope+inference-budget(§2A-F).
**EXISTS-AS:** 095 builder/manager-split→operator-topology(086); 096 incident-comm/bug-bounty→`incident_response_record`/`responsible_disclosure_intake`; "docs as protective infra"→D7 `trace_as_evidence` (AFFIRM); 097 serving/training-runtime + smallest-sufficient→inference-budget(§2A-F)+076; 099 action-prediction/physical-loop→physical-agents(074).
**REJECT (as doctrine):** 095 `career_chapter_strategy`/`environment_growth_rate` (operator-context, speaker COI). 096 offensive/"hack-back" (care-grade defensive-only) + retroactive-authorization legal verdict (import the *question* `authorization_timing_boundary`, reject the verdict). 098 copyright/platform-liability stance (direct_conflict → reject as legal doctrine).

### Batch 3 (100–104) — vs baseline
**NEW (mint at destination gate):**
- `runtime_shield`/`agent_runtime_shield`, `patch_bridge`, `exposure_window`, `temporary_control_lifecycle`, `vulnerability_response_lifecycle`/`_record`, `crypto_agility`/`pqc_readiness` (future-watch), `safe_live_change`/`zero_downtime_update` (100) — security mechanism layer.
- `agent_runtime_profile`, `harness_layer`, `agent_definition_portability`/`agent_export_to_repo` (101) — **`agent_runtime_profile` CONVERGES with 093 `capability_runtime_profile` + 097 `runtime_profile`; treat as ONE primitive at contract authoring.**
- `ai_native_workflow_recomposition`, `workflow_adoption_state`/`adoption_plateau`, `workflow_embedding_requirement`, `forced_curiosity` (watch), `domain_specific_planner`, `routing_first_design`, `land_adopt_expand_renew_loop` (103).
- `blast_radius_class` ★, `hot_context`/`cold_context`/`context_temperature` ★, `agent_environmental_parity`/`agent_as_judge` ★, `fail_safe_recover`, `defensive_complexity_moat` ★, `context_entry_point`, `agent_runtime_taxonomy` (104).

**RECONCILE (net-new but adjacent — resolve collisions at contract authoring, do NOT mint duplicates):**
- `trust_ladder` (104) → **5-way collision**: 049 `autonomy_graduation` + 057 `accuracy_ladder` + 070 HITL-permanence + 086 `interrupt_threshold` + REV-176 `autonomy_level` → ONE OMNI autonomy ladder keyed to `blast_radius_class`. **Mandatory reconciliation pass.**
- `proof_before_action`/`formal_verification_gate` (104) → 049 `responsible_scaling_gate`/`safety_case` (the gate above the ladder).
- `context_artifact` (104) → §2A-B `context_packet_trace`/`trace_as_evidence` (informs-but-never-commits intermediate).
- `control_enforcement_gradient` (100) → reconcile vs `hitl_interaction_mode_taxonomy` (062) — control-enforcement axis ≠ HITL-interaction axis.
- `supply_side_agent`/`background_context_agent` (104) → §2A-E loop-archetypes + 081 `ingest_agent_not_commit_agent` + `anti_bot_sprawl`.

**SHARPEN / EXISTS-AS:** 100 `runtime_behavior_enforcement`→081 `instruction_vs_policy_gate`+`AI_firewall`(079); `edge_local_enforcement`→capability-topology (sharpen "enforce close to risk"). 101/102 `agent_class_taxonomy`→`autonomy_level`(REV-176); `agent_auth_mode`/`agent_self_provisioned_credential_gate`→`non_human_identity`+`least_privilege_agent`(081)+`shadow_AI_discovery`(079); model/harness/context triad→`program_md`(084)+`context_assembly`(059)+`AI_model_registry`(069); `evals_as_training_gradient`→eval-harness(054). 103 `lean_supervisor`→CNS-not-megabrain+`orchestration_state_vs_domain_truth`(077); deterministic procedures→`instruction_vs_policy_gate`(081)+`deterministic_commit_boundary`(061)+`recurring_agent_job`(089); `confidence_threshold_handoff`→`interrupt_threshold`(086)+`model_escalation_candidate`(070); `business_outcome_agent`→outcomes-pricing(063/057). 104 `read_only_by_default`/`agent_permission_elevation`→081+079; `context_not_model_moat`/`post_train_on_context`→§B+060 foil (**PHI guardrail: `agent_learning_boundary`**); `novel_context_detection`→`AI_threat_monitor`(079)+online-eval-drift(054).
**REJECT (as doctrine):** 102 `governance_as_bottleneck` (ANTI-PATTERN — counter-pole to "the governed boundary IS the product" 056); 103 `ai_commits_to_results`/"humans help software" commit-language (reject for clinical/payment; keep outcome-orientation only).

## §3 — Stale-vs-v3 verdict lane
- **ABSENT in v3 (genuine gaps):** closed-loop-company operating layer (090); memory-mode router / memory-mode-as-a-choice (091); product-execution/workforce doctrine lane (095); incident-governance human/operational layer (096); multimodal-evidence-as-substrate (098/099, pair voice 050); guardrail-non-negotiability as a named principle (099).
- **PARTIAL:** systems-codesign (foundation-vNext implies it, not named); minimum-sufficient-mechanism (076 has the model-tier slice only); skillify/resolver (056/059 partial); capability-runtime-profile (envelope exists, runtime metadata not).
- **AFFIRM:** continuous-generative-computing (087); inference-budget realism (064/065); model-plurality + open/closed control-plane (069/079); physical-agents (074); eval-harness (054).

## §3T — Tension / Conflict Register (no unrouted tensions — `GRD-043`)
| # | tension | poles | conflict_status | resolution / route |
|---|---|---|---|---|
| T1 | agent reads *every* artifact (090 closed-loop co.) vs PHI default-deny + zero-click untrusted-ingest (081) | breadth-for-intelligence ↔ authority-boundary-for-safety | **direct_conflict** | RESOLVE at §A/security gate: broad read MUST be PHI/consent/purpose-gated; closed-loop company = the attack surface. Route → security-lane + §A. |
| T2 | "boil the ocean" / one-person-company velocity (090) vs OMNI focus/anti-diffusion (052) + core-before-Act-Two (073) | velocity ↔ focus/clinical-safety | **direct_conflict** | REJECT as doctrine; reinforces 089 builder-optimism counter-doctrine. Keep velocity as evidence only. |
| T3 | RAG-only vs long-context-only (091) | always-retrieve ↔ always-long-context | tension → **resolved** | memory_mode_router ("no single religion"). Route → §B/CNS context-assembly. |
| T4 | synthetic data can't add knowledge (data-processing-inequality) vs augmentation extracts latent (091) | closed-info ↔ latent-extraction | tension → **resolved** | extraction makes latent explicit; promotion decides binding. Clinical guardrail attached. |
| T5 | context-reliability vs parametric-reliability for behavioral constitution (091) | "a constitution guarantees behavior" ↔ neither mode guarantees it | tension | AFFIRMS injection/security spine (strong in-context learners obey adversarial context too). Route → security-lane. |
| T6 | open vs closed models (092 Jensen holds both) | closed-frontier-leads ↔ open-is-inspectable/securable | tension | route-by-usefulness AND inspectability; capture both (model control-plane 069/079). |
| T7 | check-resolvable = audit/compliance (090) vs §A real authority/commit (the IBM-omitted 6th family, 082) | dedup-gate ↔ clinical/legal authority gate | tension | dedup gate ≠ authority gate; keep distinct. Route → §A authority family. |
| T8 | GBrain typed-KG as truth (090) vs retrieval≠authority (`GRD-042`) | retrieval-surface ↔ committed-truth | tension | Lens-B build technique only; never authority. Route → Knowledge-Reservoirs. |
| T9 | flat-org / "no more management" (095) vs accountability + accountable-commit + ownership spine | role-compression ↔ ownership | tension | import role compression; KEEP accountability/review. |
| T10 | pre-authored transparency posture (096) vs PHI + legal duty + patient-safety | disclose-fast ↔ privacy/accuracy-bounded | tension | transparency must be PHI/legal-bounded. Route → Messaging/§A. |
| T11 | responsible-disclosure intake (096): contributor ≠ trusted | open good-faith intake ↔ untrusted external actor | tension | governed intake + verification. Route → §C/security. |
| T12 | authorization timing (096): retroactive "come-on-in" verdict vs deterministic point-in-time grant/consent | retroactive ↔ point-in-time | tension | reject the verdict; reread at RBAC authoring (also clinical break-glass). |
| T13 | vibe-coding / non-eng prod-merge (096) vs Build-OS gates + care-grade discipline | velocity ↔ gates | **direct_conflict** | keep gates regardless of model generation; reinforces 089 counter-doctrine. |
| T14 | offensive "hack-back" (096) vs care-grade defensive-only sovereignty | active-response ↔ defensive-only | tension → **reject** | do not import active-response. |
| T15 | reliability/capacity tradeoff "take the downtime" (097) vs §A clinical fail-closed + HITL-permanence (070) | access-over-reliability ↔ fail-closed | **tension (load-bearing)** | allowed for train/build/ingest; FORBIDDEN on clinical/payment/consent gates. Resolve at §A. |
| T16 | unified multimodal backbone (098/099) vs distributed domain-truth ownership | one-model-system-of-record ↔ domain-owned truth | **tension (load-bearing)** | bind across 098+099: no single model owns the system; media = evidence, domains commit. |
| T17 | end-to-end automated work (098) vs clinical authority | automation-speed ↔ commit-authority | tension | every action commit gated; AI proposes. |
| T18 | open-weights ideology vs closed-frontier sovereignty (098/099) | open ↔ closed | tension | treat both as governed tactics; route by task-shape + preference-heterogeneity. |
| T19 | agents self-provisioning their own accounts (101) vs least-privilege NHI + shadow-AI discovery (081/079) | easy-agent-onboarding ↔ no invisible-superuser sprawl | **direct_conflict** | OMNI gates agent identity/credentials; no self-provisioned creds. Route → §A/security. |
| T20 | no-code domain-expert agent builder (101/102) vs domain-commit authority + RBAC | citizen-built agents ↔ domain sovereignty | tension | builder surface OK; agent must not shadow domain authority (candidate GRD `agent_builder_no_shadow_domain`). |
| T21 | "governance is the bottleneck to minimize" (102) vs the governed boundary IS the product (056) | friction-to-remove ↔ moat | tension → **reject as doctrine** | record as anti-pattern; care-grade governance is the product, not friction. |
| T22 | "AI commits to results / humans help software" (103) vs core law (AI proposes; domains+humans commit) | agent-commits ↔ human/domain-commits | **direct_conflict** | import outcome-orientation; reject commit-language for clinical/payment. Route → §A core law. |
| T23 | autonomy/trust ladder remediation (104) vs autonomous *clinical* action | security auto-remediation ↔ clinical commit-gating | tension | translation guard: autonomous cyber-remediation ≠ permission for autonomous clinical action; key ladder to `blast_radius_class`. |
| T24 | post-train-on-context / context-as-moat (104) vs PHI/consent (`agent_learning_boundary`) | learn-from-context ↔ no-casual-PHI-training | tension | bound by `agent_learning_boundary`; context artifacts inform, never silently commit (`GRD-029`). |

## §6 — Status + coverage pointer
- **Batch 1 (090–094) folded 2026-06-12.** 2 spine elevations (closed-loop-company, memory-mode-router), 1 spine design-law (systems-codesign), 1 Build-OS law (minimum-sufficient-mechanism). 094 = no-op primer.
- **Batch 2 (095–099) folded 2026-06-12.** New doctrine lanes opened: product-execution/workforce (095), incident-governance human layer (096), multimodal-evidence substrate (098+099). Infra operating-discipline hardening (097). Tensions T9–T18 added (2 direct_conflict: vibe-coding, + 2 load-bearing: reliability-tradeoff, unified-multimodal-vs-distributed-truth).
- **Batch 3 (100–104) folded 2026-06-12.** Security mechanism layer (100/104: runtime_shield, blast_radius_class, proof_before_action); productized agent-OS (101/102); AI-native workflow recomposition + adoption physics (103); context-as-moat + context-temperature (104). Tensions T19–T24 (2 direct_conflict: self-provisioned creds, AI-commits-to-results).
- **Cross-batch reconciliation watch (resolve at contract authoring):** (1) `agent_runtime_profile` = 093 `capability_runtime_profile` = 097 `runtime_profile` → ONE primitive. (2) `trust_ladder`(104)+`autonomy_graduation`(049)+`accuracy_ladder`(057)+HITL(070)+`interrupt_threshold`(086)+`autonomy_level`(REV-176) → ONE autonomy ladder keyed to `blast_radius_class`.
- Running totals: **15/110 covered**; 24 tensions registered; cumulative baseline intact (all NEW checked EXISTS-AS vs `EVRUN-2026-000001 §2A`; nothing re-minted).
- Coverage: `EVRUN-2026-000002_ai-corpus-wave-2_coverage_matrix.md`. Remaining: 105–199 (95 sources).

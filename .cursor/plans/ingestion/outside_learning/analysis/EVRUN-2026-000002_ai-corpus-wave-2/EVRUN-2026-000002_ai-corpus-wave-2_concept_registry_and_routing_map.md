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

## §1A — Per-source anchors (reopen before promotion)
- **090** Garry Tan/Diana Hu · Stanford CS153 "The AI-Native Company" — full_semantic/spine; sibling-spine to 084/085/089. Net ADD = closed-loop-company operating layer.
- **091** Andrew Lampinen · Anthropic/Stanford CS25 "Distinct Modes of Generalization from Parameters and Context" — full_semantic/spine; cleanest technical grounding for memory-mode router + RAG-vs-long-context.
- **092** Jensen Huang · NVIDIA "Compute Behind Intelligence" — infrastructure spine (not product); net-new `systems_codesign`; rest AFFIRMS 087/064-065/054/069-079/074.
- **093** Nouamane Tazi · HuggingFace Ultra-Scale Playbook · Stanford CS25 — constraint-literacy; Build-OS disciplines `minimum_sufficient_mechanism` + `capability_runtime_profile`; no thesis-spine.
- **094** Stanford CME295 Transformers & LLMs L1 — vocabulary-tier primer; 0 net-new; promotion no-op.

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

## §3 — Stale-vs-v3 verdict lane
- **ABSENT in v3 (genuine gaps):** closed-loop-company operating layer (090); memory-mode router / memory-mode-as-a-choice (091). These are the two batch-1 items v3 has no home for.
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

## §6 — Status + coverage pointer
- **Batch 1 (090–094) folded 2026-06-12.** 2 spine elevations (closed-loop-company, memory-mode-router), 1 spine design-law (systems-codesign), 1 Build-OS law (minimum-sufficient-mechanism), 8 tensions registered (2 direct_conflict). 094 = no-op primer.
- Cumulative baseline intact: all NEW checked EXISTS-AS vs `EVRUN-2026-000001 §2A`; nothing re-minted.
- Coverage: `EVRUN-2026-000002_ai-corpus-wave-2_coverage_matrix.md`. Remaining: 095–199 (105 sources).

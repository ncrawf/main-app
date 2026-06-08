# EVRUN-2026-000001 · routing_addendum.md — consolidation + stale-vs-v3 verdict (PROOF-OF-SHAPE: cluster 084/085/086)

Layer: `omni_analysis_nonbinding`. Proposes routes; promotion passes each home's gate (`GRD-036`/`GRD-038`). Source rows: `inventory.md` (247 concepts).
**Judged by (locked criterion):** whether these ARTIFACTS (routing rows, net-new primitives, stale-vs-v3 verdict, weight-tiers, reread set) are reusable for the remaining 39 — not prose.

---

## 0. THE POINT OF THIS PASS: AI corpus → OMNI **architecture** routing (NOT thesis-only)
v4 thesis is the FIRST assembly target, not the only destination. Every cluster routes to all the OMNI homes it pressures — thesis · CNS contract · Build-OS · §C/security · Federation/capability-topology · domain contracts (D3/D5/D6/D7/Obs/CM/Identity/RBAC/Messaging/Settings) · Knowledge Reservoirs · UX/surfaces · product/feature · future-watch. **This map is the durable bridge: the contract/Build-OS/UX passes read THIS, not the 42 transcripts again.** (Same multi-home discipline REV-176 §2 used for v1-47: Thesis/Contracts/Build-OS/Surfaces.)

## 1. Multi-home architecture routing (CLUSTER-level — the compression layer)
~13 clusters (not 247 rows). Each lists only the lanes it actually pressures. `action_type`: declare · sharpen · rewrite · create-primitive · create-review-gate · update-contract · create-build-os-artifact · UX-implication · watch · reject.

| cluster | core idea | action_type | downstream homes (lane → concrete action) | stale-vs-v3 | promotion |
|---|---|---|---|---|---|
| **Attention routing** | CNS routes scarce human attention, not just tasks | create-primitive · declare | **thesis §A/§7.6**: attention economics is CNS's core job · **CNS-contract**: `attention_routing_state`, interrupt tiers {auto-no-op/draft/must-decide/urgent}, `human_attention_budget` · **§A**: approval-fatigue + escalation/`proactive_agent_policy`/`agent_social_boundary` · **UX/surfaces**: provider/staff attention cockpit, interrupt-vs-digest · **product**: triage/review queues · **Build-OS**: agent review queues w/ attention budgets | **ABSENT** | high (spine) |
| **Autonomy & agent loops** | persistent sandboxed loops; autonomy ramps w/ verification | create-primitive · create-review-gate | **thesis §B/§8**: autonomy-scales-where-verification-scales · **CNS-contract**: `loop_agent`/`autonomy_level`/checkpoints/sandboxes · **Build-OS**: overnight governed loops, kill-switch, budget caps · **§A**: `objective_metric_boundary` gate before any loop · **security**: early-abort, denial-of-wallet | **ABSENT/posture-only** | high (spine) |
| **Build-OS builds/proves CNS** | harness-first; org/process as agent-operable spec | create-build-os-artifact · declare | **thesis §26+§8**: Build-OS = proving ground for CNS (posture) · **Build-OS(REV-158)**: `program_md`/agents.md harness, build-break-eval, feature-branch promotion gate, token-throughput meter, agent registry · **Knowledge-Reservoirs**: markdown-for-agents/agent-first docs | **ABSENT (posture-only §26)** | high (spine) |
| **Software 3.0 / context-as-program** | LLM = computer/interpreter; context window = the program | declare · sharpen | **thesis §B**: AI from sidecar→architecture; context-as-routed-strategy · **CNS-contract**: context activation/assembly as runtime control · **Knowledge-Reservoirs**: read-graph/context-packets as program surface | **ABSENT framing** | high (spine) |
| **Jagged intelligence / no-eval-no-autonomy** | spiky competence; verifiability gates autonomy | declare · create-review-gate | **thesis §A/§B**: SAFETY DOCTRINE — route by demonstrated competence; off-rails→human gate · **Build-OS**: eval suites + trivial-failure probes + multi-metric anti-overfit · **security**: never infer clinical safety from codegen prestige · **CNS-contract**: clarifying-question policy on ambiguous gaps | **PARTIAL** | high (spine) |
| **Model plurality / speciation / open-vs-closed** | many specialized models; route by task/risk/cost | sharpen · update-contract | **thesis §B**: moat ≠ model · **AI#12/CNS-contract**: routing-by-competence, `ai_model_registry`+`capability_envelope` · **§C**: small/local models under envelopes; closed for high-risk · **security**: inspectable harness even w/ closed models | **PARTIAL (model-pluggable exists)** | med-high |
| **Capability-addressable / capability topology** | OMNI exposes governed capabilities agents invoke; customer-is-agent | create-primitive · update-contract | **thesis §C/§2**: capability-addressable care infra · **§C**: capability envelopes, external-agent access · **Federation/capability-topology**: Node/Route/Grant vs operator boundary (→ **Capability Topology Gate**) · **Settings/Catalog**: capability definitions · **D3**: scheduleable capacity · **D5**: actualized work · **D6**: entitlement · **RBAC**: grants · **UX**: routing/availability surfaces · **product**: local-visit/lab/pharmacy/virtual routing | **PARTIAL (§C paused; envelopes in REV-176)** | high (gate first) |
| **Agent-to-agent / agent representation** | people/orgs delegate via agent proxies; A2A negotiation | declare · update-contract | **thesis §7.8/§C**: governed A2A · **Federation**: cross-operator agent identity/scope/audit · **Identity/RBAC**: non-human actor + delegation chain · **security**: external-agent quarantine | **PARTIAL** | med |
| **Knowledge Reservoirs as understanding-infra** | source→interpretation→gated promotion; outsource thinking not understanding | declare · update-contract | **thesis §A/§8(Sense)/§16**: reservoir doctrine + "outsource thinking, not understanding" keystone · **Knowledge-Reservoirs**: lineage, authority labels, re-review, `derived_permission_invalidation` cascade · **D7/Observation/Clinical-Memory**: source→observation→adoption hardening · **§A**: retrieval≠authority | **frontier→PROMOTE** | high (spine) |
| **Trust posture (ghosts/accountable-commit)** | LLMs = ghosts not animals; humans own accountable commit + irreducible bits | declare | **thesis §A/§B**: anti-anthropomorphic trust; AI proposes/domain commits · **§A**: `human_accountable_commit`, `irreducible_human_bit` registry · **CNS-contract**: governed (not negotiated) coordination | **ABSENT framing (commit-boundary exists)** | high (spine) |
| **Security / AI gateway / governance** | agents amplify risk; PHI/untrusted-input/prompt-injection | create-review-gate · update-contract | **thesis §A**: governed-AI posture · **security/AI-gateway**: prompt-injection defense, output scanning, red-team harness, trusted-access tiers, responsible-release-hold · **Messaging/D7**: untrusted-input + ambient-capture PHI default-deny · **§C**: capability gating by trust tier | **ABSENT (IBM security cluster feeds this hard)** | high (spine) |
| **Operator topology** | operator-as-orchestrator of agent fleets; flat teams | sharpen · declare | **thesis §6**: operator postures gain agent-orchestrator face; org-of-N-agents · **CNS-contract**: agent-fleet registry (identity/owner/kill-switch/cost/risk) · **Federation**: operator boundary vs fleet · **UX**: orchestration consoles | **ADD** | med-high |
| **Strategy / destination / mega-AI foil** | digital-first wedge; doing-cheap/judging-scarce; mega-AI owns question, OMNI owns accountable answer | sharpen · watch | **thesis §2/§5/§10**: foil + wedge + destination · **future-watch**: robotics/physical/info-markets/science (horizon, not commit) | **PARTIAL/foil** | med (some watch) |
| **CNS as live dynamic system (NOT event-router)** [Batch 2: 087] | signal-kick → bounded convergence; live activation/context field; state-compute overlap; time-aware recurrence; graded suppression | create-primitive · rewrite | **thesis §7.6/§12/§B**: CNS = dynamic coordination, not workflow router · **CNS-contract**: `CNS_activation_state`/`context_field`/`convergence_candidate`/`recurrent_orchestration_loop`/`context_resonance`/suppression-pathway · **§8**: activation layer between event and commit · **Knowledge-Reservoirs**: context-as-trainable-coupling. **GUARDRAIL: bounded/non-sovereign (`GRD-029`); domains still commit truth; this is a software dynamics METAPHOR, NOT a chip mandate (hardware = no-op).** | **ABSENT (v3 CNS = event-router/safety-net)** | high (spine · verbatim-reread) |
| **Learned simulators / proving grounds / information-as-fundamental** [Batch 2: 088, 087] | sim where math fails; explore→validate (silico→commit); information as primary substance; weak-signal emergent field; sim≠truth | create-primitive · declare | **thesis §B/§10**: information-coherence moat + 50yr-aware/5yr-buildable · **CNS-contract**: `learned_simulator`/care-path & patient-journey replay (decision-support; **`simulation_not_truth`**) · **Build-OS**: proving-ground environments + readiness-gate-before-domain · **§A**: explore→validate, sim-derived state declared · **§8**: decisions under uncertainty. **GUARDRAIL: AI-for-science/drug-discovery is ADJACENT not OMNI's domain (`GRD-026`); distinct from reserved OMNI Medica.** | **ABSENT/frontier → promote** | high (spine) |

## 1A. Per-cluster source anchors (ANTI-FLATTEN — the map is a dispatch board, NOT the reservoir)
**Doctrine (Knox 2026-06-07):** transcript = evidence · `inventory.md` = lossless ledger · this addendum = compressed **dispatch map** · downstream homes (CNS-contract/Build-OS/§C/UX/etc.) **MUST reopen these source anchors + the speaker's verbatim + our discussion before canonizing.** A cluster row is a pointer ("this flight → CNS/Build-OS/UX"), not the airplane/passengers/destination. `reread_before_promotion: Y` for all spine clusters.

| cluster | source anchors (reopen before promotion) |
|---|---|
| Attention routing | 086-47, 086-48, 086-80, 086-46, 086-42, 086-45, 084-12 |
| Autonomy & agent loops | 084-18, 084-31, 084-33, 084-35, 084-41, 084-42, 086-12, 086-13, 085-40 |
| Build-OS builds/proves CNS | 084-6, 084-7, 084-38, 084-85, 084-15, 085-42, 085-47, 086-74 |
| Software 3.0 / context-as-program | 085-6, 085-7, 085-8, 085-9, 085-11, 085-23 |
| Jagged / no-eval-no-autonomy | 084-43, 084-44, 084-42, 085-27, 085-29, 085-31, 084-83 |
| Model plurality / speciation | 084-47, 084-48, 084-66, 084-68, 085-33, 085-35 |
| Capability-addressable / topology | 084-9, 084-27, 084-28, 084-71, 085-62, 086-11, 086-26 + federation-read §3 |
| Agent-to-agent / representation | 085-66, 085-67, 084-55, 086-29, 086-30 |
| Knowledge Reservoirs / understanding-infra | 085-68, 085-69, 085-70, 085-71, 084-76, 084-77, 086-31, 086-32, 086-33 |
| Trust posture (ghosts/accountable-commit) | 085-56, 085-57, 085-58, 086-23, 084-79, 084-80 |
| Security / AI gateway / governance | 084-24, 084-30, 086-17, 086-41, 086-45, 086-52, 086-59, 086-61 (+ pending IBM 079/080/081) |
| Operator topology | 084-1, 084-17, 086-36, 086-38, 086-70 |
| Strategy / destination / mega-AI foil | 084-58, 084-59, 084-62, 086-49, 086-63, 086-67 |
| CNS as live dynamic system | 087-10, 087-14, 087-19, 087-20, 087-22, 087-25, 087-26, 087-28, 087-32 |
| Learned simulators / proving grounds / info-as-fundamental | 088-27, 088-25, 088-26, 088-31, 088-34, 088-36, 088-55, 088-20, 088-15, 088-03 |

## 1B. Section-level landing view (the thesis-§ slice of the above — kept for §-by-§ authoring)

| v4 home | concept clusters routed here (from 084/085/086) | flag vs v3 |
|---|---|---|
| **§A Trust/Authority/Permeability** | proportional-human-review (#84-12) · human-accountable-commit (#86-23) · approval-fatigue + AI-risk-classification (#86-46/47) · escalation-without-policy + check-before-escalation + agent-social-EQ (#86-42/44/45) · values-alignment-judgment (#86-50) · ghosts-not-animals/anti-anthropomorphic (#85-56/57) · cautious-digital-access default-deny (#84-30) · irreducible-human-bits (#84-79) | **sharpen + ADD** |
| **§B AI substrate axis** | Software-3.0 stack + LLM-as-computer/interpreter (#85-6/7/9) · context-window-as-lever (#85-8) · jagged-intelligence + on/off-rails (#84-43/44, #85-29) · model-speciation + small-specialized (#84-47/48) · neural-host inversion (#85-23/24) · open-closed-lag + ensemble-pluralism (#84-66/68) | **ADD (mostly absent in v3) + sharpen** |
| **§C Governed Capability Exchange** | customer-is-agent (#84-28) · api-first-not-apps (#84-27) · macro-actions (#84-9) · untrusted-worker-pool + verify-first + candidate-commit (#84-51/52/53) · sensors-actuators-decomposition (#85-62) · agent-native-rewrite/describe-to-agents-first (#85-60/63) · trusted-access-tiers (#86-53) | **sharpen (UNPAUSES §C)** |
| **§7.6/§12 CNS scopes** | attention-routing-not-task-routing (#86-80) · context-activation/sufficiency (#86-10/21) · agent-memory-tooling/governed-memory-scopes (#84-8/19) · spiky-stochastic-coordination (#85-44) · idea-queue-workers (#84-37) | **ADD (attention-routing absent) + sharpen** |
| **§7.7 Projection/Capability** | app-ux-obsolescence + spurious-apps + neural-ephemeral-UI (#84-25, #85-19/25) · llm-raw-vs-persona (#84-26) · source-derived-lineage (#86-33) · generated situational projections (#85-20/21) | **sharpen** |
| **§7.8 Cross-operator** | agent-representation + agent-to-agent (#85-66/67) · open-collaboration-surface (#84-55) · sharing-becomes-bottleneck (#86-29) · trusted-defender-community (#86-62) | **ADD + sharpen** |
| **§8 Sense/Act loops** | human-binding-constraint (#84-14) · agentic observe-measure-iterate + overnight loops (#86-12/13, #84-35) · proactive-agent-policy (#86-43) · bottleneck-relocation (#86-35) · vision-change-detection pipeline (#84-82) | **sharpen + ADD** |
| **§6 operator topology** | operator-as-orchestrator (#84-1) · org-of-100k-agents (#86-70) · flat-team/solopreneur topology (#86-36/38) · go-up-the-stack maturity (#84-17) | **ADD** |
| **§10 destination** | digital-first-physical-lag + robotics-lags (#84-59/69) · superorganism-nervous-system (#84-61) · jevons-software-demand (#84-62) · doing-vs-judging inversion (#86-49) | **sharpen** |
| **§2 what OMNI is not** | models-not-magic (#86-54) · cross-domain-life-AGI collision (#86-67) · healthcare-workforce-demand (#84-58) | **sharpen (foil)** |
| **Build-OS (REV-158)** | skill-issue/harness-first (#84-6) · agents-md-harness + program-md (#84-7/38) · objective-metric-boundary (#84-33) · no-eval-no-autoresearch (#84-42) · agentic-engineering-discipline + no-vibe-vulns (#85-42/43) · build-break-eval (#85-47) · token-throughput + budgets (#84-15) · feature-branch-promotion-gate (#84-85) | **ADD (Build-OS was posture-only §26)** |
| **CNS-contract** | claw/persistent-loop scopes (#84-18) · model-harness-codesign (#86-22) · agent-fleet-observability/registry (#86-30/70) | **ADD** |
| **Knowledge-Reservoirs** | agent-first-documentation/markdown-for-agents (#84-76/77) · knowledge-recompilation/synthetic-projection (#85-12/71) · derived-permission-invalidation (#86-32) · outsource-thinking-not-understanding (#85-68) · understanding-bottleneck (#85-69) | **ADD (frontier→promote)** |
| **capability-topology-family** | macro-actions · setup-determines-outcome (#86-11) · domain-expert-skill-building (#86-26) · sensor/actuator slots (#84-71) → feeds the **Capability Topology Reconciliation Gate** | **ADD (gate)** |
| **security** | agent-api-discovery (#84-24) · ai-defensive/red-team (#86-52) · cyber/bio high-risk domains (#86-61) · responsible-release-delay (#86-59) | **ADD** |

## 2. Net-new primitives (deduped across the 3; flagged likely-new vs exists-as)

**HIGHEST net-new pressure — Attention-routing cluster (Brockman+Knox converge, ABSENT in v3):**
- `attention_routing_state` · `human_attention_budget` · `interrupt_threshold` / tiers {auto-no-op · draft · must-decide · urgent} · `proactive_agent_policy` · `agent_escalation_policy` · `agent_social_boundary` — **likely-NEW.** This is the single biggest gap; OMNI mantra ("right context/actor/moment/authority") already gestures at it but no primitive exists.

**Autonomy/loop cluster (Karpathy, ABSENT/posture-only in v3):**
- `loop_agent` / `claw` (persistent sandboxed scope) · `autonomy_level` (assist→parallel→persistent) · `objective_metric_boundary` triple · `eval_clean_gate` ("no eval → no autonomy") — **likely-NEW** (autonomy spectrum hinted in REV-176 §3 `autonomy_level` A0-X; promote + bind to §A gates).

**Capability/agent-exchange cluster (overlaps federation read):**
- `macro_action` · `capability-topology family (Capability Node/Route/Grant)` · `non_human_actor`/`agent_representation` · `untrusted_worker_pool`+`trusted_verifier` · `candidate_commit + verify` — **likely-EXISTS-AS** `capability_envelope`/`capability_contract`/`capability_server` (REV-176 §3) + §C + Evidence-Plane promotion → **reconcile via Capability Topology Gate, don't reinvent.**

**Knowledge/doc cluster:**
- `program_md` (org/process as agent-operable spec) · `agent_operable_documentation` (markdown-for-agents) · `derived_permission_invalidation` (cascade revoke) · `knowledge_projection` (synthetic projection over fixed corpus) — **likely-EXISTS-AS** AGENTS.md/read-graph/contracts + §7.7 projection + `GRD-042` → sharpen + name the invalidation cascade (that one is genuinely new).

**Routing/model cluster:**
- `model_speciation`/`plural_routing` · `on_rails`/`off_rails` competence zone · `rl_circuit_fit` — **likely-EXISTS-AS** `ai_model_registry`/`capability_envelope` (v3 §B/§12.8); sharpen into routing-by-demonstrated-competence.

**Trust posture:**
- `ghost_not_animal` model · `human_accountable_commit` · `irreducible_human_bit` — **likely-NEW** vocabulary; bind to §A (`AI proposes / domain commits` already canon).

## 3. Stale-vs-v3 VERDICT lane (receipts — does the center of gravity shift?)

| concept (from batch) | what v3 says today | verdict |
|---|---|---|
| **Attention routing as CNS's core job** | v3 CNS = "handles interactions/missed-follow-ups/duplicate-therapy" (§12.7); no attention-budget/interrupt-tier primitive | **ABSENT → net-new spine** |
| **Build-OS builds/proves the CNS; overnight governed loops; loop-agents** | v3 Build-OS = posture-only §26 pointer (`REV-158`); no loop-agent/proving-ground doctrine | **ABSENT → net-new (center-of-gravity reweight)** |
| **"No eval → no autonomy" / verifiability-gated autonomy** | v3 has "AI proposes/human commits" + autonomy-spectrum mention (§B) | **PARTIAL → sharpen into explicit law** |
| **Jagged intelligence / route-by-competence** | v3 §B: model-pluggable + `capability_envelope` | **PARTIAL → sharpen (jaggedness named, routing by demonstrated competence)** |
| **Software 3.0 / LLM-as-interpreter / context-as-program** | not present as framing | **ABSENT → net-new §B** |
| **Capability-addressable / customer-is-agent / api-first** | v3 §C exists but PAUSED; `capability_server` in REV-176 | **PARTIAL → sharpen + unpause §C + capability-topology gate** |
| **Knowledge Reservoirs as understanding-infra; agent-first docs** | reservoirs = deferred frontier (`FWREG-007`); docs human-first | **ABSENT/frontier → promote** |
| **Outsource-thinking-not-understanding (operator cognition = governance)** | not present | **ABSENT → net-new keystone (§A/Reservoirs)** |
| **Human attention = scarcest resource** | OMNI mantra gestures ("right moment/actor") but not as resource economics | **PARTIAL → sharpen the mantra into attention economics** |
| **CNS as live dynamic system (signal→activation→convergence→commit)** [Batch 2: 087] | v3 CNS = bounded safety control-plane / event-router (§12.7); no activation-state / context-field / convergence / suppression | **ABSENT → net-new (the core of the CNS reweight; bounded per GRD-029)** |
| **Learned simulators / proving grounds / information-as-fundamental** [Batch 2: 088] | proving-grounds posture-only (§26); reservoirs deferred-frontier; no learned-sim / sim≠truth doctrine | **ABSENT/frontier → promote (CNS-contract + Build-OS + §B; GRD-026 keeps drug-discovery out)** |
| **Care doctrine (ownership/consent/adoption/loops/topology)** | fully solidified (v2 §7, locked) | **AFFIRM — untouched by these clusters; preserve substance (G5)** |

**VERDICT (proof cluster):** the batch concepts are overwhelmingly **ABSENT or PARTIAL** in v3's AI/CNS/Build-OS/learning treatment, and **do not touch the care core** (which they affirm by omission). This is **receipts-confirmation that v4 needs the center-of-gravity reweight** — CNS (attention routing + scopes), Build-OS (loop-agents/proving-grounds), §B (Software-3.0/jaggedness/speciation), §C (capability-addressable, unpaused), and Knowledge Reservoirs become **co-central**, while the care doctrine is preserved in substance. Holds within `GRD-029` (CNS bounded) + `DEC-034` (AI-axis-not-target) + G2.

## 4. Weight-tier tally (proof cluster)
| tier | ~count | use |
|---|---|---|
| `spine` | ~150 | earns foundational v4 prose |
| `vocabulary` | ~80 | terms/definitions (glossary, not doctrine) |
| `low-authority-watch` | ~12 | AGI-%/science-horizon/ghost-mindset — corroborate, don't canonize |
| `no-op` | 0 (this cluster is high-signal; expect more in IBM/low-rel sources) | registered, unused |

## 5. Consolidated reread set (verbatim re-read before they edit a v4 section)
claw/persistent-loop (84-18) · program.md-as-org (84-38) · objective+metric+boundaries (84-33) · no-eval-no-autonomy (84-42) · jagged/on-off-rails (84-43/44, 85-29) · customer-is-agent + capability envelopes (84-28) · markdown-for-agents (84-77) · irreducible-human-bits (84-79) · neural-host inversion (85-23) · ephemeral-neural-UI (85-20/25) · ghost-mindset epistemic limit (85-59) · agent-representation/A2A (85-66/67) · attention-routing family (86-47/48/80) · derived-permission-invalidation (86-32) · ambient-context-capture PHI risk (86-17) · cross-domain-life-AGI collision (86-65/67).

## 6. Proof-of-shape note + scaling to the other 39
- **This is the reusable format:** per-source extraction (Knox-first→verbatim-full, G4) → uniform inventory rows (anchor/concept/landing/tier/flag) → this addendum's 6 sections (routing / net-new-primitives / stale-vs-v3-verdict / tier-tally / reread / scaling).
- **Scaling (Nick override 2026-06-07): UNIFORM DEEP extraction on ALL sources — NO lighter-on-low-yield.** The batch is already pre-filtered (Nick hand-picked, all ~4-5/5); treat every source the same depth (full §1 + §3, G4). Dispatch parallel per-source agents, same schema + **per-cluster source anchors (§1A)**; append to `inventory.md`; fold into the §1 multi-home table. Reconcile capability-topology + attention-routing with the federation read + prior canon at the Capability Topology Gate before any v4 prose.
- **Next-batch priority (the 3 missing v4 pillars — all already ingested, next to EXTRACT/route):** (1) **CNS/neural/simulation** = 087 Naveen Rao + 088 Demis Hassabis; (2) **Build-OS/loops/agent-fleet** = 089 Boris Cherny; (3) **§C/security/control-plane** = 079 IBM governance + 080 IBM attacks + 081 zero-click. Then the rest route around these pillars. (Same deep treatment for all — sequencing, not skimping.)
- **STOP:** awaiting Nick approval of this format before routing the remaining 39.

# v4 — C3.1 Lens Coverage Audit (the anti-evaporation preflight; runs BEFORE C3.5)

Document type: `plan_or_roadmap` (a coverage gate; NOT thesis prose, NOT the C3.5 matrix, NOT contract edits)
Authority: `analysis_nonbinding` — proves coverage; binds nothing; promotes nothing (`GRD-036`).
Status: `draft_for_review` 2026-06-13 — answers the meta-problem Knox+Nick flagged: lenses were being surfaced only when Nick *remembered* them. This forces every major concept family from the estate into a v4 landing zone, defer queue, or explicit exclusion.
Controlling plan: `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` → inserts as **C3.1** (between C3 and C3.5). Next gated step is C3.1 review; only then C3.5 plan.
Builds on: C3 note (`v4_C3_method_recovery_ratification_note.md`) §7 candidate C4 section map.

## Method (why this is NOT another memory-driven addendum)
The lens taxonomy is **derived from the estate's own groupings**, not typed from memory:
- `EVRUN-2026-000002` registry **§1** (~100 named clusters, each already carrying a `downstream homes` column), **§2A** net-new batches, **§3T** tension register, **§6.1** 3 super-arcs;
- `EVRUN-2026-000001 §2A` baseline;
- `ORIENTATION-2026-06-10 §2.3` (what-v4-adds);
- the live `contracts/` (15) + planes + Guardrail Digest (`06`).
Knox's 20-family checklist is used as a **cross-check** that nothing on it lacks a row — not as the source list. **Rule: a lens earns a row because the audit forces it into view, never because someone remembered it.**

## Status legend
`covered` (has a C4 landing zone + anchors) · `covered-thin` (landing zone exists but under-weighted → must be forced first-class at C4) · `missing` (no landing zone → fix the C4 map now) · `needs-C3.5` (resolved by the pressure-test) · `defer-C5` (downstream, correctly) · `open-review` (a real decision → route to `08`) · `excluded` (explicitly out of v4, with reason).

## Coverage matrix

| # | Lens / concept family | Source anchors (registry rows / §) | C4 landing zone (§ in C3 map) | Owner / control-plane | Status | Risk if flattened | Required action before C4 |
|---|---|---|---|---|---|---|---|
| 1 | Domain-owned truth / v2-v3 domain physics | v3 spine; AFFIRMed by 124/160/165 | §7 | domain contracts | covered | execution-physics overwrites the skeleton | preserve verbatim; sharpen only |
| 2 | Sense/Decide/Act/Prove-Learn loops | 186 feedback-channel/Act-loop · 184/185 control-loop · 098 Sense | §8 | CNS + §A | **covered-thin** | Prove/Learn + effect-sensing under-named (186 PARTIAL) | force Prove/Learn + effect-observability first-class |
| 3 | AI substrate / model-runtime / capability envelopes | 101/102/106 agent-anatomy · 091 · 165 defaults · 177 post-training | §9 | §B AI-substrate | covered | "model call = unit of architecture" | keep workflow-lane (not model-call) as the unit |
| 4 | Context routing / RAG / long-context / graph / vector-hybrid / prune / freshness | 091 memory-mode-router · 169 memory≠capability routing · 118 context-as-mixing · 164 data-pipeline · 122 | §10 | §B + CNS context-assembly | covered | RAG-as-the-thing; retrieval treated as authority | keep `retrieval≠authority` (`GRD-042`, T8); vector/hybrid/prune build-specifics → C5 |
| 5 | Clinical-doc / D7 / Observation / Clinical-Memory / multimodal fidelity | 098/099/159/178 multimodal · 161 generated-media · 157 imaging-Observation · 126 anchor-relative | §15 | D7 / Observation / Clinical-Memory | covered | flatten artifact→summary; lose provenance | keep the three-gate separation + provenance/model-collapse guards |
| 6 | Knowledge Reservoirs / Intelligence Foundry / ingestion / compiled wiki | FWREG-007 · 126 experience-reservoir · 164 pipeline · Evidence-Plane; ORIENTATION §1 Foundry/Karpathy | §11 | Evidence-Plane + KR family | covered | "Foundry = ingestion box"; Karpathy-wiki rebuilt from scratch | extend Evidence-Plane + compiled-wiki layer; don't rebuild |
| 7 | Learning from provider / staff / inventory / commerce / ops / connectors / security / build | 126 `operator_experience_data`/`workflow_experience_capture` · 105 `privacy_bound_learning` · 137 feedback | §11 (+§16) | KR families + owning domains | **covered-thin** | all "learning" collapses to patient-CNS | C3 §8.5 lens forces provider/inventory/business learning first-class |
| 8 | Third-party tools / add-ons / build-buy-wrap / external-capability ownership | 48 build-vs-buy posture · 106/107 vendor-wrap · ORIENTATION tool-ecosystem/gateways | §12 | §A + Connector-Gov + §C | covered | ownership question flattened to "tool ecosystem" | C3 §4/§12 tool-ownership LAW in v4; vendor picks → C5 |
| 9 | Connector / MCP / tool governance + observability | connector-governance · 110/111 agent-execution · 057/118 trace-governance | §12/§14 | Connector-Gov + security | covered | blind connectors | keep observability/DRI/permission/health per connector |
| 10 | Security / privacy / compliance / attack surface | 096 incident · 100/104 security-mechanism · 135 context-minimization · 139 classic-security GAP-FLAG | §14 | §C security + privacy | **covered-thin** | security-as-later-audit; classic infra-sec under-covered (139) | continuous-lane posture in v4; **open-review: commission a classic-security source** |
| 11 | Federation / operator-network / custody / visibility / boundary-policy | federation-as-boundary-policy · capability-topology · 160 reference-frames; audits 06-07 | §5 | Federation | covered | "federation = multi-tenant SaaS" | keep boundary-policy-for-AI-context framing |
| 12 | CNS layers / orchestration / authority / action envelopes | CNS layers · 077/087 · 149 clinical-action-ladder · 103 lean-supervisor | §6 | CNS contract | covered | CNS = mega-brain | keep orchestrates-not-owns; layered (doctrine/runtime/capabilities/workflows/boundaries/audit) |
| 13 | Product surfaces / HCI / burden / timing / receptivity | 183 HCI deployment-physics · 132 care-design · 144 composable-surfaces (`DEC-033`) | §16/§17 | Surface + Projection planes | covered | "HCI = nice UX" | keep HCI/burden/timing as doctrine; surfaces own no truth |
| 14 | Evaluation / assurance / proof / traces / metrics | 162/175 eval-methodology · 051/054 · 118 observability-governance | §14 | Build-OS eval + assurance | covered | leaderboard evals; proof-as-afterthought | **open-review (Knox-Q #6): elevate `evaluation_shapes_system_law` to named spine** |
| 15 | Build-OS / agent-harness / repo-as-OS | Build-OS `09/10/11` · 101/106/107/111/114 harness · 188 memory-lint · ORIENTATION repo-as-OS | §13 (+§19 repo) | Build-OS + Agent-Work-Protocol | covered | Build-OS becomes the product | posture-not-practice; repo taxonomy itself → C5 |
| 16 | Business-ops / workforce / inventory / retail / payroll / incentives | 095 product-builder workforce · 143 care-business coupling · 137 incentive=reward; BIZOPS contract | §16 | BIZOPS contract | **covered-thin** | buried under clinical; "care ops = business ops" | force BIZOPS first-class; "share events, not ownership" (pairs family 7) |
| 17 | Care-setting expansion / Epic / EMR-less-central / Big-Tech / robotics pressure | audits 06-12 · 142/156 · 184/185 robotics | §1/§5 positioning | (pressure-test) | **needs-C3.5** | one lens becomes the v4 headline | resolved by the C3.5 bounded matrix; feeds §1/§5, not its own section |
| 18 | Data platform / derived analytics / warehouse / retention / deletion / provenance | 057/118 observability-as-data-platform · 164 pipeline; ORIENTATION data_platform | §14-adjacent | data-platform (control-plane) | **open-review / defer-C5** | retention/deletion/provenance left implicit | **retention/deletion/provenance DOCTRINE = v4; warehouse/analytics build = C5** |
| 19 | Guardrails / anti-patterns / non-goals | §3T tension register · Guardrail Digest `06` · per-source GRD-candidates | §20 | Guardrail Digest + `08` | covered | cherry-pick a memorable few | C3 §8 full-corpus-as-a-class method (not 8 hand-picked) |
| 20 | Repo taxonomy / C5 derived architecture | ORIENTATION repo-as-OS arc (6 passes) | §19 (implication only) | (C5) | **defer-C5** | guessing taxonomy before v4 | explicitly C5; v4 carries only the *posture* |
| 21 | World-model / consequence-prediction / planning-governance / bounded-autonomy | 124/180/181 · 182 prediction-horizon→authority · 184/185 control-loop | §8/§9 | §A + CNS + §B | covered | canonize a specific world-model (JEPA) | primitive = `candidate action → predicted consequence → bounded decision`; no model canon |
| 22 | Serving / inference / runtime economics | 173 serving-economics · 172 build≠run · 064 budget | §10 | §B + BIZOPS | covered | runtime treated as deploy-trivia; cheap-route high-risk | **open-review (Knox-Q #5): elevate `runtime_cost_dominates_law`; never cheap-route high-risk actions** |

## Cross-check vs Knox's 20-family checklist
All 20 of Knox's families map to a row above (several merged: his "context routing/RAG" = #4; "clinical-doc RAG" = #4∩#5; "reservoirs/learning" = #6+#7; "tools" = #8; "connector/MCP" = #9). Net-new rows the *estate* forced that weren't on the memory checklist: **#21 world-model/planning-governance** and **#22 serving/runtime-economics** (both heavy in the CS336 super-arc) — proving the inverse method caught families memory would have missed.

## What the audit changes (and does NOT)
- **C4 section map:** no *missing* lens found (every family has a landing zone) — so the map is **not** rewritten. Three rows are `covered-thin` (#2 Prove/Learn, #7 provider/biz learning, #16 BIZOPS, #10 classic-security) and must be **forced first-class** at C4, not added as new sections.
- **Open-review → `08`:** (a) elevate `evaluation_shapes_system_law` (#14), (b) elevate `runtime_cost_dominates_law` + the high-risk-no-cheap-route rule (#22), (c) commission a classic infra-security source (#10, registry 139 gap-flag), (d) data-platform retention/deletion/provenance doctrine scope (#18), (e) Knox-Q #4 multi-axis-scaling + memory-routing≠capability-routing (169) naming.
- **needs-C3.5:** #17 care-setting/Epic/Big-Tech/robotics — that IS the C3.5 matrix.
- **defer-C5 (correctly):** #20 repo taxonomy, vendor/tool picks (#8), data-platform warehouse/analytics build (#18).
- **No** thesis prose, **no** C3.5 matrix, **no** contract edits, **no** repo restructure.

## Verdict
**Coverage is provable: every major estate family lands somewhere.** The genuine work before C4 is narrow and now explicit — force the 4 `covered-thin` families first-class, route the 5 open-review items to `08`, run C3.5 for the care-setting lens, and keep the 3 defer-C5 items downstream. No concept-family evaporation detected; the inverse audit (estate→landing-zone) replaces memory-driven patching going forward.

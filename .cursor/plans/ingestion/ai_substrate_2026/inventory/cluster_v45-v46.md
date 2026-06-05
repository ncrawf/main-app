# Cluster v45–v46 — Lossless Concept Inventory

- **cluster:** v45–v46 (orchestration build/reuse/hybrid as owned architecture · LLMjacking / AI credential control plane)
- **sources:** `videos/v45.md` (IBM Technology — "Build, Reuse, or Hybrid? How Orchestration Powers Agentic AI", Apr 25 2026; transcript + distillation), `videos/v46.md` (IBM Technology — "LLMjacking: How hackers steal your AI API keys and stick you with the bill", May 13 2026; transcript + distillation)
- **date:** 2026-06-04
- **status:** lossless concept inventory — non-binding evidence
- **id scheme:** `vNN-XX` = source video number + concept index within that video (preserves per-video traceability for the count table). High-priority per request: v45 (orchestration-as-owned-architecture), v46 (LLMjacking / credential control plane).

---

## v45 — Build, Reuse, or Hybrid? How Orchestration Powers Agentic AI (IBM Technology, Apr 25 2026; transcript + distillation)

### v45-01 — Build-from-scratch vs assemble-prepared as the core decision frame
- concept: build_vs_reuse_decision_frame
- anchor: "Do I cook everything from scratch or do I assemble the meal using something already? Prepared." (0:00–0:11)
- diluted: The recurring agentic-AI decision is whether to build components yourself or assemble from existing/prepared ones — framed as the dinner-party cook-vs-order analogy.
- why_it_matters: Names the build/reuse axis that OMNI must answer deliberately per capability rather than defaulting.
- omni_impact: affirms OMNI needs an explicit per-capability build/reuse policy instead of ad hoc vendor adoption.
- landing_zone: thesis(P0) + BuildOS(P6)
- affected_artifacts: thesis AI-substrate section, Build OS layer model, CNS
- flag: affirm
- confidence: med
- requires_reread: no

### v45-02 — Different approaches, same outcome — coordination is the binding factor
- concept: coordination_is_what_makes_it_work
- anchor: "we have two different approaches, but the same outcome ... No matter what you choose, coordination is what makes the system work." (0:30–0:54)
- diluted: Build, reuse, and hybrid can all reach the same outcome; the determining variable is coordination/orchestration, not the sourcing choice.
- why_it_matters: Shifts the strategic weight off "build vs buy" and onto the coordination layer — the exact OMNI thesis.
- omni_impact: sharpens OMNI's claim that the moat is the orchestration/coordination substrate, not which components are used.
- landing_zone: thesis(P0) + contract(P1: CNS)
- affected_artifacts: thesis §8 (Sense+Act loops), CNS, AI#12
- flag: affirm
- confidence: high
- requires_reread: no

### v45-03 — Definition of agentic AI (plan, act, use tools, decide, move tasks across the stack)
- concept: agentic_ai_definition
- anchor: "we mean systems that plan, act, use tools, make decisions, and move tasks forward across your stack, not just generate text." (1:08–1:23)
- diluted: Agentic AI = systems that plan, act, invoke tools, make decisions, and advance multi-step tasks across the stack — not mere text generation.
- why_it_matters: Establishes the capability bar OMNI's CNS/Agentic Runtime must govern (cross-stack action, not chat).
- omni_impact: affirms CNS must orchestrate cross-domain action, tool use, and decisioning under authority gates.
- landing_zone: thesis(P0) + contract(P1: CNS)
- affected_artifacts: CNS, AI#12, thesis AI-substrate section
- flag: affirm
- confidence: high
- requires_reread: no

### v45-04 — The orchestration layer binds everything; its concrete responsibilities
- concept: orchestration_layer_responsibilities
- anchor: "this orchestration layer here in the middle truly binds everything together ... It manages task routing, applies policies, enforces identity, handles tool invocation, and coordinates handoffs between the agents and the systems." (1:23–1:45)
- diluted: The orchestration layer is the middle tier that does task routing, policy application, identity enforcement, tool invocation, and agent/system handoff coordination.
- why_it_matters: This is almost verbatim OMNI's CNS/authority-gate charter; it externally validates the substrate's required surface area.
- omni_impact: affirms/sharpens CNS scope — routing + policy + identity + tool invocation + handoffs are all one governed layer, not separate features.
- landing_zone: contract(P1: CNS) + contract(P1: RBAC) + thesis(P0)
- affected_artifacts: CNS, RBAC, AI#12, Federation, authority gates
- flag: affirm
- confidence: high
- requires_reread: no

### v45-05 — Orchestration as timing, sequencing, and flow
- concept: orchestration_as_timing_sequencing_flow
- anchor: "It is the timing, the sequencing, and the flow, just like making sure our dish is finished all at the same time" (1:45–1:54)
- diluted: Orchestration is fundamentally about timing, sequencing, and flow control across components so outputs converge coherently.
- why_it_matters: Adds the temporal-coordination dimension to OMNI's longitudinal-coherence mandate (right moment).
- omni_impact: sharpens that CNS must own temporal sequencing/handoff timing, not just routing decisions.
- landing_zone: contract(P1: CNS) + thesis(P0)
- affected_artifacts: CNS, scheduling/service-occurrence interplay, thesis (Right moment)
- flag: affirm
- confidence: med
- requires_reread: no

### v45-06 — With orchestration agents are one system; without it, isolated boxes
- concept: orchestration_vs_isolation
- anchor: "with orchestration, agents work together as a single system. Without it, everything becomes isolated and these boxes are operating independently." (1:55–2:10)
- diluted: Orchestration is what turns a set of agents into a single coherent system; absent it, agents degrade into isolated, independent silos.
- why_it_matters: Justifies OMNI's substrate-first stance — un-orchestrated agents are fragmented and ungovernable.
- omni_impact: affirms that OMNI must own orchestration or accept fragmentation; isolation is the failure mode.
- landing_zone: thesis(P0) + contract(P1: CNS)
- affected_artifacts: CNS, thesis AI-substrate section, Guardrail digest
- flag: affirm
- confidence: high
- requires_reread: no

### v45-07 — When to BUILD: specialized workflows, deep control, tools pre-built patterns can't handle
- concept: build_criteria
- anchor: "You wanna build when your workflows are specialized, you want deep control, or you're integrating tools that pre-built patterns just simply cannot handle." (2:13–2:30)
- diluted: Build when the workflow is specialized, you need deep control, or you must integrate tools beyond pre-built patterns.
- why_it_matters: Gives OMNI explicit criteria for what to build in-house (its governed, domain-specific core).
- omni_impact: sharpens OMNI build/reuse policy — domain-specialized, control-critical workflows are build candidates.
- landing_zone: BuildOS(P6) + thesis(P0)
- affected_artifacts: Build OS Build Entry Gate, CNS, thesis AI-substrate section
- flag: affirm
- confidence: high
- requires_reread: no

### v45-08 — Building means owning planning logic, tooling, guardrails, and evaluation
- concept: build_means_define_everything
- anchor: "building means you define everything. So you work on your planning logic, you define your tooling, you pick your guard rails. And you evaluate. It does require engineering time and long-term ownership ... you maintain reliability and you can improve behavior over time." (2:30–2:52)
- diluted: Building = defining planning logic, tooling, guardrails, and evals yourself; the cost is engineering time + long-term ownership, the payoff is reliability and improvable behavior.
- why_it_matters: Frames the true cost/benefit of ownership — the same trade OMNI accepts for its core substrate.
- omni_impact: affirms OMNI's choice to own evals/guardrails/planning for governed domains; names the ownership cost honestly.
- landing_zone: BuildOS(P6) + thesis(P0)
- affected_artifacts: Build OS Runtime Proof Layer, eval/guardrail specs, CNS
- flag: affirm
- confidence: high
- requires_reread: no

### v45-09 — Build decision questions (unique to business? engineering capacity? accept slow ramp?)
- concept: build_qualifying_questions
- anchor: "is this workflow that you're creating truly unique to the business? Do you have ... the engineering capacity to build your solution? And can you accept that longer time period ramp up before you're gonna see that value?" (2:52–3:12)
- diluted: Three build qualifiers — is the workflow uniquely yours, do you have engineering capacity, and can you accept a slower time-to-value?
- why_it_matters: A reusable triage checklist OMNI can apply at the Build Entry Gate before committing to build.
- omni_impact: sharpens Build Entry Gate intake questions for build-vs-reuse admission.
- landing_zone: BuildOS(P6) + boot/governance
- affected_artifacts: Build Entry Gate v0, Build OS rollout sequence
- flag: sharpen
- confidence: med
- requires_reread: no

### v45-10 — When to REUSE: working patterns fast, but still require integration engineering
- concept: reuse_criteria_and_hidden_cost
- anchor: "reusing free-built agents or components ... gives you working patterns that you can work with quickly. But reusable components still need engineering. You integrate them with your data sources, you align them with identity model, and you fit them into your orchestration layer." (3:12–3:34)
- diluted: Reuse delivers working patterns fast, but is not free — you still integrate to data sources, align to the identity model, and fit into your orchestration layer.
- why_it_matters: Kills the "reuse = no work" myth; reuse still passes through OMNI's identity + orchestration boundary.
- omni_impact: affirms reused components must align to OMNI identity/RBAC and sit behind the orchestration boundary.
- landing_zone: contract(P1: RBAC) + contract(P1: CNS) + BuildOS(P6)
- affected_artifacts: RBAC, CNS, Build OS Command/Tool layer
- flag: affirm
- confidence: high
- requires_reread: no

### v45-11 — Without orchestration, good components become isolated point-to-point solutions
- concept: reuse_without_orchestration_is_point_to_point
- anchor: "even good free built components become isolated point to point solutions." (3:36–3:42)
- diluted: Reused components without an orchestration boundary collapse into brittle point-to-point integrations.
- why_it_matters: Names the anti-pattern OMNI's substrate exists to prevent (vendor spaghetti).
- omni_impact: affirms orchestration boundary as the antidote to point-to-point integration sprawl.
- landing_zone: thesis(P0) + contract(P1: CNS)
- affected_artifacts: CNS, Federation, Guardrail digest
- flag: affirm
- confidence: med
- requires_reread: no

### v45-12 — Security must wrap orchestration: guardrails + monitoring on integrated tools
- concept: security_around_orchestration
- anchor: "it's important to always think about that security side of the solution around that orchestrations ... what guardrails and monitoring are you going to put in place to make sure that system is operating as you would expect?" (3:42–4:01)
- diluted: Integrating tools demands security thinking around orchestration — guardrails and monitoring to verify the system behaves as expected.
- why_it_matters: Ties orchestration directly to runtime guardrails/observability — pre-figures v46's credential-control-plane lesson.
- omni_impact: sharpens that OMNI orchestration must ship with guardrails + monitoring as first-class, not bolt-on.
- landing_zone: contract(P1: CNS) + BuildOS(P6)
- affected_artifacts: CNS, Build OS Runtime Proof Layer, observation/audit
- flag: affirm
- confidence: med
- requires_reread: no

### v45-13 — Reuse decision questions (covers most needs? predictable? fits governance?)
- concept: reuse_qualifying_questions
- anchor: "Does a pre-built component cover most of what we need? Is the behavior predictable enough? And does it fit our governance model?" (4:02–4:10)
- diluted: Reuse qualifiers — does it cover most needs, is behavior predictable enough, and does it fit your governance model.
- why_it_matters: Governance-fit is an explicit reuse gate — exactly OMNI's stance that vendors must conform to its governance.
- omni_impact: sharpens reuse admission criteria: a component must fit OMNI's governance model to be adopted.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: Build Entry Gate, governance charter, RBAC
- flag: affirm
- confidence: med
- requires_reread: no

### v45-14 — Reuse/buy key test: "most of what we need with minimal engineering"
- concept: reuse_minimal_engineering_test
- anchor: "a key question to know if you should reuse or buy a pre-built component is does this get us most of what we need with minimal? Engineering." (4:10–4:22)
- diluted: The decisive reuse/buy test is whether the component delivers most of the need with minimal engineering.
- why_it_matters: A crisp heuristic OMNI can encode for commodity-component adoption decisions.
- omni_impact: affirms reuse heuristic for commodity layers (models, vector DBs, parsers) where engineering is low.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build Entry Gate, Build OS rollout sequence
- flag: affirm
- confidence: med
- requires_reread: no

### v45-15 — Orchestration holds shared prompts, governance, tooling standards, routing rules, evals
- concept: orchestration_holds_shared_assets
- anchor: "The orchestration layer holds shared prompts, governance, tooling standards, routing rules, and evaluation methods." (4:26–4:37)
- diluted: Across all options, the orchestration layer is the home for shared prompts, governance, tooling standards, routing rules, and eval methods.
- why_it_matters: Enumerates the concrete contents OMNI's orchestration substrate must own centrally (not per-vendor).
- omni_impact: change — define an OMNI orchestration registry holding prompts/governance/tool standards/routing/evals centrally.
- landing_zone: contract(P1: CNS) + contract(P1: AI/Model Lineage) + BuildOS(P6)
- affected_artifacts: CNS, AI#12, prompt/eval registry, Build OS Command/Tool layer
- flag: sharpen
- confidence: high
- requires_reread: no

### v45-16 — Orchestration enables model/tool swap without breaking downstream experiences
- concept: swap_without_breaking_downstream
- anchor: "It lets you update models or tools without breaking any downstream experiences." (4:37–4:43)
- diluted: A real orchestration layer lets you swap models/tools underneath without breaking downstream experiences (the abstraction/decoupling payoff).
- why_it_matters: This is OMNI's swappability promise — vendors are replaceable beneath a stable substrate boundary.
- omni_impact: sharpens OMNI's "owned substrate, replaceable vendors" design — swap-safety is a substrate requirement.
- landing_zone: thesis(P0) + contract(P1: CNS) + contract(P1: AI/Model Lineage)
- affected_artifacts: CNS, AI#12, Federation, thesis AI-substrate section
- flag: affirm
- confidence: high
- requires_reread: no

### v45-17 — One control plane across build/reuse/hybrid: consistent governance, performance, safety
- concept: one_control_plane_three_consistencies
- anchor: "one control plane across build, reuse, and hybrid. Consistent governance, consistent performance, and consistent safety." (4:43–4:55)
- diluted: A single control plane spanning build/reuse/hybrid yields three consistencies — governance, performance, and safety — regardless of component sourcing.
- why_it_matters: Externally names OMNI's "Architecture Memory Control Plane / authority spine" payoff in three concrete consistencies.
- omni_impact: affirms the single-control-plane doctrine; the payoff metric triad (governance/performance/safety) is reusable framing.
- landing_zone: boot/governance + thesis(P0)
- affected_artifacts: Architecture Memory Control Plane, CNS, thesis §8
- flag: affirm
- confidence: high
- requires_reread: no

### v45-18 — The four-step orchestration checklist
- concept: orchestration_adoption_checklist
- anchor: "First, list your use cases ... Then determine if you're gonna build, ... reuse or buy, or ... the hybrid approach. Then figure out your orchestration layer. And finally, pilot and measure your results." (4:55–5:21)
- diluted: A four-step method: (1) list use cases, (2) choose build/reuse/hybrid per use case, (3) define the orchestration layer, (4) pilot and measure.
- why_it_matters: A ready-made rollout cadence that maps onto OMNI's Build OS staged-work + proof obligations.
- omni_impact: sharpens Build OS rollout — pilot-and-measure as a required proof step per capability.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build OS rollout sequence, Build Entry Gate, Runtime Proof Layer
- flag: affirm
- confidence: med
- requires_reread: no

### v45-19 — Hybrid is the lived answer; the meal only works with orchestrated timing
- concept: hybrid_is_the_practical_answer
- anchor: "I'm gonna choose a dish from my favorite restaurant ... And I've decided ... I'm going to be baking the dessert ... But the meal only works when the timing and coordination come together. And that's orchestration." (5:21–5:52)
- diluted: In practice the answer is hybrid (reuse some, build some), but it only works when orchestration brings timing and coordination together.
- why_it_matters: Confirms hybrid as the realistic default — exactly OMNI's "build the substrate, reuse the commodity beneath" posture.
- omni_impact: affirms hybrid as OMNI's operating model; orchestration is the success condition for hybrid.
- landing_zone: thesis(P0) + contract(P1: CNS)
- affected_artifacts: thesis AI-substrate section, CNS
- flag: affirm
- confidence: med
- requires_reread: no

### v45-20 — (Distillation) Orchestration is the product architecture, not an implementation detail
- concept: orchestration_is_product_architecture
- anchor: "the deeper OMNI lesson is orchestration is the product architecture, not an implementation detail." (§2 distillation)
- diluted: The real lesson is not build/reuse/hybrid; orchestration is the product architecture itself, the thing that must be designed and owned.
- why_it_matters: Elevates orchestration from feature to architecture — the spine of OMNI's AI-substrate thesis.
- omni_impact: change — assert in thesis that orchestration IS the architecture, not a helper module.
- landing_zone: thesis(P0) + boot/governance
- affected_artifacts: thesis AI-substrate section, CNS, Coordination Charter
- flag: new
- confidence: high
- requires_reread: yes

### v45-21 — (Distillation) The real question: what orchestration makes all three safe/governed/measurable/swappable/coherent
- concept: real_question_is_the_orchestration_layer
- anchor: "The main question is: What orchestration layer makes all three safe, governed, measurable, swappable, and coherent?" (§2 distillation)
- diluted: Reframes the strategic question away from sourcing and onto: what orchestration layer makes build/reuse/hybrid safe, governed, measurable, swappable, and coherent.
- why_it_matters: Gives OMNI a five-property test (safe/governed/measurable/swappable/coherent) for its orchestration substrate.
- omni_impact: change — adopt the five-property orchestration test as a substrate acceptance criterion.
- landing_zone: thesis(P0) + contract(P1: CNS)
- affected_artifacts: CNS, thesis AI-substrate section, Build OS Runtime Proof Layer
- flag: new
- confidence: high
- requires_reread: yes

### v45-22 — (Distillation) CNS / Agentic Runtime must be the shared orchestration fabric, not a workflow helper
- concept: cns_as_shared_orchestration_fabric
- anchor: "CNS / Agentic Runtime cannot just be a workflow helper. It has to become the shared orchestration fabric across: AI agents ... deterministic domain services ... tool calls ... data access ... identity/RBAC ... policies ... prompts ... evals ... runtime traces ... handoffs ... approval gates" (§2 distillation)
- diluted: CNS must be the shared orchestration fabric spanning agents, deterministic services, tool calls, data access, identity/RBAC, policies, prompts, evals, traces, handoffs, and approval gates — not a mere workflow utility.
- why_it_matters: Defines the full surface CNS must cover; prevents under-scoping it as automation.
- omni_impact: change — expand/affirm CNS contract to explicitly enumerate these eleven cross-cutting responsibilities.
- landing_zone: contract(P1: CNS) + contract(P1: RBAC) + contract(P1: AI/Model Lineage)
- affected_artifacts: CNS, RBAC, AI#12, Observation, Messaging, authority gates
- flag: sharpen
- confidence: high
- requires_reread: yes

### v45-23 — (Distillation) Build when core IP / high-risk / clinically governed / domain-specific
- concept: omni_build_when_core_ip
- anchor: "Build when the workflow is core OMNI IP, high-risk, clinically governed, domain-specific, or requires deep control. Examples: CNS orchestration ... clinical-risk interrupts ... patient context packets ... care-plan logic ... authorization envelopes ... domain commit rules ... audit and trace infrastructure" (§2 distillation)
- diluted: OMNI builds the workflows that are core IP, high-risk, clinically governed, or domain-specific — CNS orchestration, clinical-risk interrupts, patient context packets, care-plan logic, authorization envelopes, domain-commit rules, audit/trace.
- why_it_matters: A concrete OMNI build-list mapping the generic criterion onto named substrate components.
- omni_impact: sharpens which domains are non-negotiably build (substrate core), informing Build OS sequencing.
- landing_zone: BuildOS(P6) + thesis(P0) + contract(P1: CNS)
- affected_artifacts: CNS, RBAC, audit, care-plan/clinical contracts, Build OS rollout
- flag: sharpen
- confidence: high
- requires_reread: no

### v45-24 — (Distillation) Reuse when commodity/replaceable behind the orchestration boundary
- concept: omni_reuse_when_commodity
- anchor: "Reuse when the component is commodity, replaceable, and can live behind OMNI's orchestration boundary. Examples: model providers ... embedding models ... vector databases ... MCP servers ... document parsing tools ... OCR/transcription vendors ... calendar/email/SMS rails ... observability vendors" (§2 distillation)
- diluted: OMNI reuses commodity, replaceable components that can sit behind the orchestration boundary — model providers, embeddings, vector DBs, MCP servers, parsers, OCR/transcription, calendar/email/SMS rails, observability.
- why_it_matters: A concrete OMNI reuse-list; defines the "replaceable ecosystem" beneath the owned substrate.
- omni_impact: sharpens the replaceable-vendor layer; these must conform to the orchestration boundary and identity model.
- landing_zone: BuildOS(P6) + contract(P1: CNS) + contract(P1: Federation)
- affected_artifacts: CNS, Federation, AI#12, Messaging/fulfillment rails
- flag: affirm
- confidence: high
- requires_reread: no

### v45-25 — (Distillation) Hybrid is the OMNI answer: build the control plane, reuse tools beneath
- concept: omni_hybrid_build_controlplane_reuse_tools
- anchor: "Hybrid is probably the actual OMNI answer. Build the control plane, authority model, orchestration substrate, context router, audit layer, and proof system. Reuse tools/models/vendors beneath it." (§2 distillation)
- diluted: OMNI's posture is hybrid — build the control plane, authority model, orchestration substrate, context router, audit layer, and proof system; reuse models/tools/vendors underneath.
- why_it_matters: Crystallizes the exact build/reuse split OMNI should encode as doctrine.
- omni_impact: change — codify the owned-vs-reused split (control plane/authority/router/audit/proof = build; vendors = reuse).
- landing_zone: thesis(P0) + boot/governance + BuildOS(P6)
- affected_artifacts: Architecture Memory Control Plane, CNS, audit, Build OS, thesis AI-substrate section
- flag: new
- confidence: high
- requires_reread: yes

### v45-26 — (Distillation) Doctrine candidate: OMNI may reuse components but MUST own the orchestration layer
- concept: own_orchestration_doctrine_1bn_rule
- anchor: "OMNI may reuse models, tools, MCP servers, agents, and vendor components, but OMNI must own the orchestration layer that governs identity, authority, context, routing, tool invocation, evals, policy, traceability, and domain-commit boundaries. That is a '1BN company' rule." (§2 distillation)
- diluted: Binding doctrine candidate — reuse is allowed, but OMNI must own the orchestration layer governing identity, authority, context, routing, tool invocation, evals, policy, traceability, and domain-commit boundaries.
- why_it_matters: The headline durable rule of the cluster; defines the moat and the non-delegable core.
- omni_impact: change — promote to thesis/governance as a binding AI-substrate doctrine (owned orchestration boundary).
- landing_zone: thesis(P0) + boot/governance + contract(P1: CNS)
- affected_artifacts: thesis AI-substrate section, Coordination Charter, Control Plane, CNS, RBAC, AI#12
- flag: new
- confidence: high
- requires_reread: yes

### v45-27 — (Distillation) Failure mode: vendor-composed spaghetti (no durable moat)
- concept: vendor_spaghetti_failure_mode
- anchor: "otherwise OMNI becomes vendor-composed spaghetti: impressive demos, weak substrate, hard-to-govern execution, and no durable moat." (§2 distillation)
- diluted: Not owning orchestration produces vendor-composed spaghetti — flashy demos, weak substrate, ungovernable execution, no moat.
- why_it_matters: Names the anti-pattern in memorable terms for the Guardrail digest (boot-visible lesson).
- omni_impact: sharpens a guardrail: "demo-strong / substrate-weak" is a tracked failure mode to avoid.
- landing_zone: boot/governance
- affected_artifacts: Guardrail Anti-pattern Digest, Coordination Charter
- flag: new
- confidence: med
- requires_reread: no

### v45-28 — (Distillation) Future Opus prompt: separate owned orchestration primitives from replaceable ecosystem components
- concept: separate_owned_primitives_from_ecosystem
- anchor: "Future Opus prompt: ask it to separate 'owned orchestration primitives' from 'replaceable ecosystem components'" (§2 distillation)
- diluted: A future work item — produce an explicit taxonomy splitting owned orchestration primitives from replaceable ecosystem components.
- why_it_matters: Concrete next action to operationalize the build/reuse doctrine into a maintained registry.
- omni_impact: change — add a Future Work Registry item to author the owned-vs-replaceable taxonomy.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: Future Work Registry, Build OS, CNS
- flag: new
- confidence: med
- requires_reread: no

### v45-29 — (Distillation) Author's read: high-value, not structurally surprising; sharpens the moat statement
- concept: read_sharpens_moat_not_new_domain
- anchor: "this is a high-value but not structurally surprising input. It doesn't force a new OMNI domain by itself ... OMNI's real moat is not 'we use agents.' It is we own the governed orchestration layer that makes agents usable in healthcare/business operations at scale." (§2 distillation)
- diluted: Net assessment — the input sharpens rather than restructures; no new domain is forced; the moat is owning the governed orchestration layer for agents at healthcare/business scale.
- why_it_matters: Calibrates priority — integrate as sharpening to existing AI-substrate doctrine, not a new domain.
- omni_impact: affirms existing architecture; refines the moat articulation in the thesis.
- landing_zone: thesis(P0)
- affected_artifacts: thesis AI-substrate section, comparator/analogy registry
- flag: affirm
- confidence: high
- requires_reread: no

---

## v46 — LLMjacking: How hackers steal your AI API keys and stick you with the bill (IBM Technology, May 13 2026; transcript + distillation)

### v46-01 — LLMjacking definition (stealing AI API keys/credentials to access AI tools)
- concept: llmjacking_definition
- anchor: "this is a relatively new attack where threat actors steal AI API keys and other credentials to gain access to a users's or an organization's AI tools." (1:18–1:25)
- diluted: LLMjacking is theft of AI API keys/credentials to gain access to a victim's AI tools.
- why_it_matters: Names a concrete, current threat class OMNI's credential governance must defend against.
- omni_impact: change — OMNI must treat AI/model/tool credentials as a defended attack surface (credential control plane).
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage) + boot/governance
- affected_artifacts: AI#12, RBAC, Build OS Runtime Proof Layer, secrets management
- flag: new
- confidence: high
- requires_reread: yes

### v46-02 — Attackers want your compute/AI use, not (primarily) your data; they stick you with the bill
- concept: cost_weapon_not_data_theft
- anchor: "they're not really after sensitive data. They just want to use your AI for their purposes because AI costs money and they'd rather stick you with the bill." (1:32–1:39)
- diluted: The primary motive is free use of your paid AI (cost transfer), not data exfiltration — though data exposure can follow.
- why_it_matters: Reframes the threat as cost/compute abuse, a financial-survival risk distinct from classic data breach.
- omni_impact: sharpens that OMNI needs spend ceilings + anomaly detection, not only data-loss controls.
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage)
- affected_artifacts: AI#12, cost/token telemetry, Runtime Proof Layer
- flag: new
- confidence: high
- requires_reread: no

### v46-03 — The $82,000-in-48-hours example (from $180/month)
- concept: cost_blowout_example
- anchor: "a developer from a small startup in Mexico shared a story on Reddit about how thieves racked up $82,000 in 48 hours using their stolen Gemini key ... from $180 a month to $82,000 in 48 hours." (1:44–2:06)
- diluted: A documented case — a stolen Gemini key turned $180/month spend into $82,000 in 48 hours.
- why_it_matters: Quantifies catastrophic-cost tail risk; a vivid proof point for spend-ceiling/kill-switch requirements.
- omni_impact: affirms hard spend ceilings + rapid containment as survival-grade requirements.
- landing_zone: BuildOS(P6)
- affected_artifacts: cost ceilings, anomaly detection, incident runbooks
- flag: new
- confidence: high
- requires_reread: no

### v46-04 — Evolution of hijacking: sabotage/C2 → crypto mining → free cloud-AI on victim's bill
- concept: hijacking_evolution
- anchor: "early 2000s you see more hacker resources for usually sabotage or just ... command and control. Then with ... cryptocurrencies ... profitable for threats basically to mine on your devices ... But now ... opportunity to use cloud for mining because it's free. It's on top of someone else ... cloud account" (2:18–2:53)
- diluted: Attacker monetization evolved from sabotage/C2 → cryptojacking → LLMjacking (riding someone else's cloud/AI bill).
- why_it_matters: Positions LLMjacking as the current stage of resource-abuse evolution OMNI must anticipate.
- omni_impact: affirms credential-abuse defense as a moving target requiring ongoing posture, not a one-time fix.
- landing_zone: boot/governance
- affected_artifacts: Guardrail digest, AI#12, security posture doctrine
- flag: affirm
- confidence: med
- requires_reread: no

### v46-05 — Stolen keys used as unauthorized capability (R&D, research, "build weapons")
- concept: unauthorized_capability_weapon
- anchor: "in the same time as well to use the API to basically ... to do R&D to do research to build weapons." (3:00–3:08)
- diluted: Beyond cost, stolen AI access grants attackers capability — R&D, research, even building offensive tooling — using the victim's AI.
- why_it_matters: Elevates the stakes: a leaked OMNI AI key is an authority/capability leak, not just a billing leak.
- omni_impact: change — treat AI credentials as authority-bearing; scope capability per credential.
- landing_zone: contract(P1: AI/Model Lineage) + contract(P1: RBAC) + boot/governance
- affected_artifacts: AI#12, RBAC, capabilities, authority gates
- flag: new
- confidence: high
- requires_reread: yes

### v46-06 — The bill flows to cloud providers and ultimately the end user; harm beyond money
- concept: blast_radius_bill_and_exposure
- anchor: "cloud providers are ... getting the bill and the problem is the end user ... imagine ... 100k bill ... it's not just about the money itself. It's about also the leakage of data. It's about the exposure." (3:23–3:42)
- diluted: The financial harm lands on providers then end users, and the damage extends past cost to data leakage and exposure.
- why_it_matters: Confirms multi-dimensional blast radius (cost + data + exposure) OMNI must contain.
- omni_impact: affirms layered containment — cost, PHI/context, and exposure are distinct harms to gate.
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage)
- affected_artifacts: AI#12, audit, incident runbooks
- flag: affirm
- confidence: med
- requires_reread: no

### v46-07 — Stolen legit key bypasses Frontier-Lab access lockdowns
- concept: stolen_key_bypasses_access_controls
- anchor: "the Frontier Labs are really trying to lock down who can get access to their tools. But if I steal someone's legitimate API key, I can get in there and use it for my own malicious purposes and I never had to get my own credentials." (4:23–4:40)
- diluted: A stolen legitimate API key lets an attacker bypass provider access-gating entirely, never needing their own credentials.
- why_it_matters: Shows credentials are the access-control bypass; OMNI's own gating is moot if keys leak.
- omni_impact: sharpens that credential hygiene/scoping is the real enforcement point, upstream of provider gating.
- landing_zone: contract(P1: RBAC) + BuildOS(P6)
- affected_artifacts: RBAC, secrets management, AI#12
- flag: sharpen
- confidence: med
- requires_reread: no

### v46-08 — Treat AI API keys "like the crown jewels"
- concept: keys_are_crown_jewels
- anchor: "KPMG's David Nidz said ... one of his top recommendations was to treat AI ... API keys like the crown jewels." (4:51–4:58)
- diluted: AI API keys should be governed as crown-jewel assets — the highest sensitivity tier.
- why_it_matters: Sets the sensitivity classification OMNI should assign to all model/tool credentials.
- omni_impact: affirms classifying AI credentials at the highest secret tier in OMNI's secrets policy.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: secrets management policy, AI#12, Guardrail digest
- flag: affirm
- confidence: high
- requires_reread: no

### v46-09 — AI keys are like passwords — super-secret, no difference
- concept: keys_are_passwords
- anchor: "it's just like your password, right? It's something that should be treated as super secret ... there's no difference there." (5:10–5:16)
- diluted: AI keys deserve the same secrecy discipline as passwords; no special exemption.
- why_it_matters: Reuses existing secret-handling discipline rather than inventing new — pragmatic for OMNI.
- omni_impact: affirms applying standard secret-handling controls to AI credentials.
- landing_zone: BuildOS(P6)
- affected_artifacts: secrets management, AI#12
- flag: affirm
- confidence: med
- requires_reread: no

### v46-10 — Missing guardrails / late detection; credit-card-fraud analogy
- concept: missing_guardrails_late_detection
- anchor: "there's no guard rails. What's going on here? How come I didn't know about this anomaly until it was too late? ... We saw this with credit card companies ... I get notified if there's something strange going on" (5:23–6:03)
- diluted: Victims lacked anomaly guardrails and learned too late; the fix mirrors credit-card fraud alerting (real-time anomaly notification + reject).
- why_it_matters: Provides the design pattern — real-time anomaly detection + user confirmation — for OMNI's cost/usage guardrails.
- omni_impact: change — build credit-card-style anomaly alerting on token/cost/usage for AI credentials.
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage)
- affected_artifacts: anomaly detection, cost/token telemetry, AI#12, Runtime Proof Layer
- flag: new
- confidence: high
- requires_reread: no

### v46-11 — It takes a major event for orgs to act on blind spots
- concept: major_event_triggers_action
- anchor: "unfortunately in cyber security it takes a major security event like this for ... individuals and organizations to start recognizing that something needs to be done." (5:36–5:50)
- diluted: Security blind spots typically only get fixed after a costly incident exposes them.
- why_it_matters: Argues OMNI should pre-empt (build credential controls before the incident), not react.
- omni_impact: affirms proactive credential-control-plane as a pre-production requirement, not post-incident.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: Build OS proof obligations, Guardrail digest
- flag: affirm
- confidence: med
- requires_reread: no

### v46-12 — Attackers outrun usage/spending caps before detection
- concept: caps_outrun_before_detection
- anchor: "even when they have like usage limits or spending ... caps ... sometimes the hackers move so fast that they blow through those limits before the ... services can even detect that there's been something wrong." (6:15–6:28)
- diluted: Static caps are insufficient — attackers blow past usage/spend limits faster than detection can react.
- why_it_matters: Static ceilings alone fail; OMNI needs fast/hard kill switches and pre-emptive scoping, not just soft caps.
- omni_impact: change — pair spend ceilings with hard, fast kill switches and pre-issuance scoping.
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage)
- affected_artifacts: kill switches, scoped credentials, anomaly detection, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v46-13 — Attacker's "what does this key get me?" framing (direct call vs app-flow access)
- concept: attacker_key_value_framing
- anchor: "I like to ask the question, well what does this get me as the attacker? ... is it just ... being able to call directly to a model ... in which case it's not the most interesting thing but if it's part of a larger application flow you may be able to disclose other data or gain access to other underlying systems." (6:58–7:40)
- diluted: A key's danger depends on what it unlocks — a bare model call is low-value, but a key embedded in an app flow can disclose data or reach underlying systems.
- why_it_matters: Argues for least-privilege, narrowly-scoped credentials so a leaked key unlocks as little as possible.
- omni_impact: change — scope each AI credential to minimal capability so leakage yields minimal blast radius.
- landing_zone: contract(P1: RBAC) + contract(P1: AI/Model Lineage) + BuildOS(P6)
- affected_artifacts: RBAC, capabilities, AI#12, per-capability credential scoping
- flag: new
- confidence: high
- requires_reread: no

### v46-14 — Keys baked into complex software supply chains; unknown blast radius
- concept: keys_in_supply_chain_blast_radius
- anchor: "these things are baked into these complex software supply chains. you don't know what this API is connecting to ... if it's connected to the right kinds of things, you can get some access to some really juicy stuff." (7:46–7:57)
- diluted: API keys embedded in software supply chains have opaque, potentially large blast radius because their downstream connections are unknown.
- why_it_matters: Motivates mapping/inventorying what each credential connects to — credential lineage.
- omni_impact: change — maintain credential-to-resource lineage so blast radius is known, not opaque.
- landing_zone: contract(P1: AI/Model Lineage) + BuildOS(P6)
- affected_artifacts: AI#12, credential lineage, audit, Federation
- flag: new
- confidence: med
- requires_reread: no

### v46-15 — Knowledge gap on cloud; bigger gap between cloud security and devops pipelines
- concept: cloud_devops_security_gap
- anchor: "there is a gap on the knowledge on cloud ... and ... a bigger gap ... between cloud security and devop pipelines" (8:15–8:30)
- diluted: Two gaps drive incidents — general cloud-security knowledge, and especially the seam between cloud security and devops pipelines.
- why_it_matters: Points OMNI to close the security/devops seam (DevSecOps) where credentials leak.
- omni_impact: affirms embedding security into OMNI's CI/devops (secret scanning, pipeline controls).
- landing_zone: BuildOS(P6)
- affected_artifacts: CI secret scanning, Build OS Governance Cadence Layer
- flag: affirm
- confidence: med
- requires_reread: no

### v46-16 — Control all parts of cloud: control plane AND data plane
- concept: control_plane_and_data_plane
- anchor: "you need to have a proper control with all parts of cloud for example in control plane in in the data plane" (8:41–8:53)
- diluted: Proper cloud control must span both the control plane and the data plane, not one in isolation.
- why_it_matters: Reinforces OMNI's control-plane spine must also govern the data plane (runtime execution + data access).
- omni_impact: affirms OMNI control plane + data-plane governance pairing for AI runtime.
- landing_zone: boot/governance + contract(P1: CNS)
- affected_artifacts: Architecture Memory Control Plane, CNS, data access governance
- flag: affirm
- confidence: med
- requires_reread: no

### v46-17 — "Insecure by default" — turn on what is off; automate
- concept: insecure_by_default
- anchor: "by default things in cloud are usually insecure so you have to ... make sure that everything that is off by by default to be turned on and in the same time to have more and more automation" (8:53–9:18)
- diluted: Cloud defaults are insecure; security requires deliberately enabling off-by-default protections and automating them.
- why_it_matters: OMNI must ship secure-by-construction defaults rather than inherit insecure vendor defaults.
- omni_impact: sharpens a guardrail — never accept vendor defaults; enable protections explicitly and automatically.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: Guardrail digest, Build OS, secure-defaults policy
- flag: sharpen
- confidence: med
- requires_reread: no

### v46-18 — DevSecOps: defenders closer to devops; "all about automation"
- concept: devsecops_automation
- anchor: "defenders we have to be closer to the devops to have a proper dev sec ops operations and it's all about automation." (9:18–9:32)
- diluted: Effective defense means defenders embedded in devops (DevSecOps), with automation as the backbone.
- why_it_matters: Aligns OMNI security with its Build OS cadence — automated, pipeline-embedded controls.
- omni_impact: affirms automated security gates in the Build OS governance cadence.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build OS Governance Cadence Layer, CI automation
- flag: affirm
- confidence: med
- requires_reread: no

### v46-19 — Secrets hygiene: proper secrets management, not public GitHub or env variables
- concept: secrets_hygiene
- anchor: "make sure that secrets are kept in in the right place. So you have a cit [secret] management and you don't have in public GitHub which is very common or just in in variables ... it's all about hygiene." (9:32–9:50)
- diluted: Keep secrets in proper secret management — not in public GitHub, not loosely in variables; it is fundamentally hygiene.
- why_it_matters: Names the most common leak vectors OMNI must block by policy + scanning.
- omni_impact: change — enforce no-secrets-in-repo/vars policy with CI secret scanning before merge.
- landing_zone: BuildOS(P6)
- affected_artifacts: CI secret scanning, secrets management, Build OS proof obligations
- flag: new
- confidence: high
- requires_reread: no

### v46-20 — Continuous exposure testing: "have we exposed ourselves to something new?"
- concept: continuous_exposure_testing
- anchor: "every time you implement some changes having an ability to assess have we exposed ourselves to something new without realizing it." / "That ... visibility is so key." (10:41–11:00)
- diluted: After every change, assess whether new exposure was introduced; visibility is the precondition for catching it.
- why_it_matters: Maps to OMNI's per-change proof obligation — assess exposure delta on each merge.
- omni_impact: sharpens Build OS proof — add an "exposure delta" check to change/merge proofs.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build OS Runtime Proof Layer, change-review checklist
- flag: sharpen
- confidence: med
- requires_reread: no

### v46-21 — Shared responsibility: end-user exposure-surface control + provider duty
- concept: shared_responsibility
- anchor: "We also have our responsibility in terms of ... controlling the exposure surface ... How are our keys stored? ... on the side of the providers we also need to ensure that ... a leaked key ends up [not] in bankruptcy" (11:17–11:46)
- diluted: Both sides hold responsibility — users control their exposure surface and key storage; providers must prevent a leaked key from causing bankruptcy.
- why_it_matters: OMNI is both a consumer (of model providers) and a provider (to its tenants) — it owns both halves of this duty.
- omni_impact: change — OMNI must protect tenants from runaway cost the way it expects providers to protect it.
- landing_zone: contract(P1: AI/Model Lineage) + boot/governance + thesis(P0)
- affected_artifacts: AI#12, tenant cost-protection, Federation, governance charter
- flag: new
- confidence: med
- requires_reread: no

### v46-22 — Credentials are the prime target; attackers chain them; massive blast radius
- concept: credentials_prime_target_chaining
- anchor: "credentials ... attackers are after them. When they get in, they try to get more of them. There's potentially massive blast radius, so those things have to be locked down." (11:52–12:02)
- diluted: Credentials are attackers' primary objective and they chain stolen creds to gather more, producing large blast radius — so credentials must be locked down hard.
- why_it_matters: Reinforces credential governance as the central control point in OMNI's AI runtime.
- omni_impact: affirms credential lockdown + rotation + scoping as core; limit credential-to-credential reachability.
- landing_zone: contract(P1: RBAC) + contract(P1: AI/Model Lineage) + BuildOS(P6)
- affected_artifacts: RBAC, AI#12, secrets management, rotation policy
- flag: affirm
- confidence: high
- requires_reread: no

### v46-23 — AI amplifies adversary speed/intensity; offensive research must reflect it
- concept: ai_amplifies_adversary
- anchor: "threat actors are using AI to amplify the speed and intensity of their attacks, which means our adversary simulations and offensive security research should reflect this new reality." (12:41–12:52)
- diluted: AI accelerates attacker speed and intensity, so defensive simulation/red-teaming must assume AI-amplified adversaries.
- why_it_matters: OMNI's threat model must assume AI-speed attackers, raising the bar on detection/response.
- omni_impact: sharpens OMNI threat model and incident-readiness assumptions toward machine-speed attacks.
- landing_zone: boot/governance
- affected_artifacts: threat model, Guardrail digest, incident runbooks
- flag: sharpen
- confidence: med
- requires_reread: no

### v46-24 — Human stays crucial in the loop (judgment, accountability, chain of custody)
- concept: human_in_the_loop_necessary
- anchor: "the human is still a crucial part of that loop." / "for actual threat intelligence which requires interpreting all of those signals ... assessing ... adversary intent ... you also need the human in the loop" (12:52–17:34)
- diluted: AI assists, but humans remain essential for interpretation, intent assessment, accountability, and chain of custody on high-stakes work.
- why_it_matters: Directly affirms OMNI's propose/validate/commit doctrine — AI assists, humans/deterministic policy commit.
- omni_impact: affirms AI-proposes / authorized-human-commits across high-risk OMNI actions.
- landing_zone: thesis(P0) + boot/governance + contract(P1: CNS)
- affected_artifacts: authority gates, CNS, AI#12, thesis §8
- flag: affirm
- confidence: high
- requires_reread: no

### v46-25 — Would you let AI run rampant on your network? (bounded autonomy)
- concept: no_ambient_ai_autonomy
- anchor: "if you're running a company ... would you let AI run rampant on your network and do whatever it wanted? I think almost everyone's going to say no" / "AI is not at a point yet where we can let it just go off and do whatever it wants." (14:45–15:14)
- diluted: No responsible org lets AI act unbounded on its network; AI autonomy must be constrained.
- why_it_matters: External backing for OMNI's bounded-autonomy / no-ambient-authority doctrine.
- omni_impact: affirms bounded-autonomy doctrine; agents get no ambient network/tool authority.
- landing_zone: thesis(P0) + contract(P1: CNS) + boot/governance
- affected_artifacts: CNS, RBAC, authority gates, Guardrail digest
- flag: affirm
- confidence: high
- requires_reread: no

### v46-26 — Frame problems so AI does what it's good at; leverage human expertise
- concept: frame_problems_for_ai_strengths
- anchor: "there are things that ... AI is going to be good at and there's things that it's not going to be good at and framing the problems in a way that really lets it do its job well is important while also leveraging the expertise of the people" (15:26–15:44)
- diluted: Effective use means scoping problems to AI's strengths and pairing it with human expertise where it is weak.
- why_it_matters: Guides OMNI's allocation of AI vs deterministic vs human across tasks.
- omni_impact: sharpens task-allocation doctrine — route work to AI/deterministic/human by fit.
- landing_zone: contract(P1: CNS) + thesis(P0)
- affected_artifacts: CNS routing policy, AI#12
- flag: affirm
- confidence: low
- requires_reread: no

### v46-27 — Guardrail-tuning problem (useful but not breaking things) → human oversight
- concept: guardrail_tuning_problem
- anchor: "they struggled with getting the guard rails just right so that it didn't do any damage but was still useful ... that's a perfect encapsulation of like why there's got to be a human still in the loop" (16:01–16:18)
- diluted: Calibrating agent guardrails to stay useful without causing damage is hard, which is precisely why human oversight remains necessary.
- why_it_matters: Justifies OMNI keeping human approval gates around imperfectly-bounded agents.
- omni_impact: affirms approval gates as compensating control while guardrail tuning is imperfect.
- landing_zone: contract(P1: CNS) + boot/governance
- affected_artifacts: approval workflows, CNS, Guardrail digest
- flag: affirm
- confidence: med
- requires_reread: no

### v46-28 — "AI agents are the most helpful insider threats we've ever had"
- concept: agents_as_insider_threats
- anchor: "AI agents are the most helpful insider threats we've ever had" (Dave McInnes, quoted) (20:08–20:19)
- diluted: Agents behave like extremely capable insider threats — helpful yet dangerous from inside the trust boundary.
- why_it_matters: A memorable framing for the Guardrail digest; agents must be governed as privileged insiders.
- omni_impact: sharpens treating agents as privileged insiders under least-privilege + monitoring.
- landing_zone: boot/governance + contract(P1: RBAC)
- affected_artifacts: Guardrail digest, RBAC, AI#12, audit
- flag: new
- confidence: med
- requires_reread: no

### v46-29 — "AI is good as you are" — output bounded by the operator
- concept: ai_only_as_good_as_operator
- anchor: "AI is good as you are. So it's also is really depends who is behind the the AI who is building the the detection who is responding" (18:42–18:56)
- diluted: AI's value is bounded by the skill of the person/process directing it.
- why_it_matters: Reinforces that OMNI's AI quality depends on its governing framework and operators, not the model alone.
- omni_impact: affirms investing in governance/framework/operators around AI, not just model choice.
- landing_zone: boot/governance + thesis(P0)
- affected_artifacts: governance charter, operator context doctrine
- flag: affirm
- confidence: low
- requires_reread: no

### v46-30 — Accountability gap: you can't make AI accountable (chain of custody)
- concept: ai_accountability_gap
- anchor: "you can't really make an AI accountable for something like that ... we need to think about these accountability issues, especially as we ... start integrating these things into our workflows and they start taking more ... autonomous actions." (20:25–20:43)
- diluted: AI cannot bear accountability (e.g., chain of custody); accountability must rest with humans/deterministic systems as autonomy grows.
- why_it_matters: Anchors OMNI's audit/attribution requirement — every committed action must trace to an accountable actor.
- omni_impact: affirms human/owning-domain accountability for committed actions; AI is never the accountable party.
- landing_zone: thesis(P0) + contract(P1: RBAC) + contract(P1: AI/Model Lineage)
- affected_artifacts: audit, RBAC, AI#12, authority gates
- flag: affirm
- confidence: high
- requires_reread: no

### v46-31 — Structural change: let AI do A–C; humans focus on novel high-value work
- concept: structural_role_reallocation
- anchor: "If I have an AI that can do ... steps A through C. I now need to stop having my teams do A through C and focus on ... really novel attack chains ... we have to be willing to let go of things the way they were and focus on where does the human bring value" (21:25–21:43)
- diluted: AI handles routine A–C steps so humans shift to novel, high-value work — a structural reallocation, not just a tool add.
- why_it_matters: Frames OMNI's human/AI division of labor as a structural redesign of workflows.
- omni_impact: sharpens workforce/ops contract — design workflows around AI-handles-routine, human-handles-novel.
- landing_zone: contract(P1: business_ops_workforce) + thesis(P0)
- affected_artifacts: business ops/workforce contract, CNS routing
- flag: sharpen
- confidence: low
- requires_reread: no

### v46-32 — Patch window pressure: CISA 2 weeks → 3 days
- concept: patch_window_compression
- anchor: "current guidelines give federal agencies 2 weeks to fix a flaw under active exploitation ... people are talking about cutting that down to 3 days." (22:19–22:29)
- diluted: Regulators are pressing to compress the active-exploit patch window from two weeks to three days.
- why_it_matters: Signals tightening remediation expectations OMNI's ops posture may eventually be measured against.
- omni_impact: affirms OMNI should track and design for compressed remediation timelines.
- landing_zone: boot/governance
- affected_artifacts: security/ops posture, incident runbooks
- flag: affirm
- confidence: low
- requires_reread: no

### v46-33 — Zero-day clock: ~2 years (2018) → < 1 day to exploit
- concept: zero_day_clock_collapse
- anchor: "in 2018 it took an average of 2 years to exploit a flaw and now it takes less than a day." (22:46–22:52)
- diluted: Time-to-exploit has collapsed from ~2 years to under a day, driven by AI-accelerated attackers.
- why_it_matters: Quantifies why OMNI must assume near-instant exploitation and design for speed.
- omni_impact: sharpens assume-breach + rapid-response posture for OMNI's runtime.
- landing_zone: boot/governance
- affected_artifacts: threat model, incident runbooks, Guardrail digest
- flag: sharpen
- confidence: med
- requires_reread: no

### v46-34 — Is patching the right question? Defense in depth over single control
- concept: defense_in_depth_over_patching
- anchor: "patching is just one thing ... there are other necessary mitigations to ... mitigate exploitation and also ... reduce damage." / "less spreadsheet more agile more microservices and multiple layers of ... detection" (23:16–27:32)
- diluted: Patching is one layer; durable security needs defense-in-depth — multiple detection/mitigation layers, not a single control.
- why_it_matters: Reinforces OMNI's layered authority-gate + monitoring approach over any single safeguard.
- omni_impact: affirms multi-layer defense (scoping + anomaly + kill switch + audit) over reliance on one control.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: layered controls, Runtime Proof Layer, Guardrail digest
- flag: affirm
- confidence: med
- requires_reread: no

### v46-35 — Raise the cost of breach until attacker ROI goes negative
- concept: raise_cost_of_breach
- anchor: "our goal as people stopping hackers is to raise the cost of what it takes to affect a breach ... If we can raise that cost high enough, they'll go away and do something else" (24:36–24:53)
- diluted: The defensive objective is to raise attacker cost until breach ROI is negative, making the target not worth it.
- why_it_matters: An economic framing for prioritizing OMNI's controls (maximize attacker cost per dollar spent).
- omni_impact: sharpens control prioritization toward highest attacker-cost-per-effort defenses.
- landing_zone: boot/governance
- affected_artifacts: security posture doctrine, threat model
- flag: affirm
- confidence: low
- requires_reread: no

### v46-36 — Machine vs machine: autonomous attack vs human-approval bottleneck
- concept: machine_vs_machine_response
- anchor: "We are in the moment which basically you are fighting against machines ... we should start thinking to have also machine versus machine because it's ... very hard that you have ... complete this autonomous AI and you are patching the spreadsheet you need five six ... approvals" (26:16–26:48)
- diluted: Against machine-speed autonomous attacks, slow human-approval chains can't keep up — defense needs machine-speed (machine vs machine) response with agility/microservices.
- why_it_matters: Tension for OMNI — human-in-loop accountability vs machine-speed response; argues for automated containment within bounded authority.
- omni_impact: change — design automated machine-speed containment (kill switch/quarantine) that stays inside authority gates.
- landing_zone: contract(P1: CNS) + BuildOS(P6) + boot/governance
- affected_artifacts: automated containment, CNS, kill switches, authority gates
- flag: new
- confidence: med
- requires_reread: yes

### v46-37 — Assumed-breach mindset built into the security fabric
- concept: assumed_breach
- anchor: "the ... most effective organizations tend to have this concept of assumed breach built into the security fabric of their organization ... the ones who think yes we are going to be breached are we ready" (21:13–29:56)
- diluted: The strongest orgs assume they will be breached and design isolation/response accordingly, rather than assuming perfect prevention.
- why_it_matters: Foundational posture for OMNI's runtime — design for containment and recovery, not just prevention.
- omni_impact: affirms assume-breach design: isolation, blast-radius limits, rehearsed response in OMNI runtime.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: incident runbooks, isolation/blast-radius design, Guardrail digest
- flag: affirm
- confidence: med
- requires_reread: no

### v46-38 — Proactive preparation: "fix your roof while the sun is shining"
- concept: proactive_preparation
- anchor: "it's by JFK ... the best time to fix your roof is when the sun is shining which ... means ... do your preparation ... incident response plan and exposure plus knowing your ... environment ... preparation preparation preparation" (30:30–31:00)
- diluted: Security is proactive preparation — IR plans, exposure knowledge, environment visibility built before incidents, not during.
- why_it_matters: Reinforces building OMNI's credential/incident controls pre-production as proof obligations.
- omni_impact: affirms pre-production IR plans + environment visibility as Build OS proof requirements.
- landing_zone: BuildOS(P6) + boot/governance
- affected_artifacts: incident runbooks, Build OS proof obligations
- flag: affirm
- confidence: med
- requires_reread: no

### v46-39 — Know and have visibility across your critical assets
- concept: asset_visibility
- anchor: "knowing and having visibility across your network. So, knowing what are your critical assets ... what do you have to know what you're protecting in order to protect against it." (28:38–28:56)
- diluted: You cannot protect what you cannot see — asset inventory and visibility are the precondition for defense.
- why_it_matters: Maps to OMNI's need for a complete inventory of AI credentials, tools, and what they reach.
- omni_impact: sharpens credential/tool/asset inventory as a prerequisite to credential governance.
- landing_zone: contract(P1: AI/Model Lineage) + BuildOS(P6)
- affected_artifacts: AI#12, credential/tool inventory, audit
- flag: sharpen
- confidence: med
- requires_reread: no

### v46-40 — (Distillation) LLMjacking = stolen AI credentials as both cost weapon and capability weapon
- concept: dual_weapon_reframing
- anchor: "LLMjacking = stolen AI credentials become both a cost weapon and an unauthorized capability weapon." (§2 distillation)
- diluted: The core reframing — a stolen AI credential is simultaneously a cost weapon and an unauthorized-capability weapon.
- why_it_matters: Unifies the two harm classes OMNI's credential control plane must address together.
- omni_impact: change — credential controls must address both runaway cost AND unauthorized capability use.
- landing_zone: thesis(P0) + contract(P1: AI/Model Lineage) + BuildOS(P6)
- affected_artifacts: AI#12, cost telemetry, capability scoping, thesis AI-substrate section
- flag: new
- confidence: high
- requires_reread: yes

### v46-41 — (Distillation) AI credentials are authority-bearing runtime instruments, not mere API keys
- concept: credentials_are_authority_instruments
- anchor: "AI credentials are not just API keys. They are authority-bearing runtime instruments." (§2 distillation)
- diluted: AI credentials carry authority and must be governed as runtime authority instruments, not ordinary keys.
- why_it_matters: The conceptual pivot that justifies a credential control plane within the authority spine.
- omni_impact: change — classify AI credentials within the authority model (RBAC/AI lineage), not as config.
- landing_zone: thesis(P0) + contract(P1: RBAC) + contract(P1: AI/Model Lineage)
- affected_artifacts: RBAC, AI#12, Control Plane, authority gates
- flag: new
- confidence: high
- requires_reread: yes

### v46-42 — (Distillation) Enumerated leak harms for OMNI
- concept: enumerated_leak_harms
- anchor: "A leaked AI/model key could allow: catastrophic cost exposure ... unauthorized model use ... unauthorized PHI/context processing ... prompt/context leakage ... tool-chain abuse ... downstream system access ... attacker use of OMNI's AI stack to build or automate attacks" (§2 distillation)
- diluted: Concrete OMNI harm list from a leaked key — cost, unauthorized model use, unauthorized PHI/context processing, prompt/context leakage, tool-chain abuse, downstream access, and attacker use of OMNI's stack to build attacks.
- why_it_matters: A checklist of harms the credential control plane must each have a control for.
- omni_impact: sharpens control coverage requirements — one control mapped to each enumerated harm.
- landing_zone: contract(P1: AI/Model Lineage) + BuildOS(P6)
- affected_artifacts: AI#12, PHI/context governance, tool-chain controls, audit
- flag: new
- confidence: high
- requires_reread: yes

### v46-43 — (Distillation) Dedicated AI Runtime Security / Credential Control Plane inside Agentic Runtime
- concept: credential_control_plane
- anchor: "This strengthens the case for a dedicated AI Runtime Security / Credential Control Plane inside the broader Agentic Runtime. Not necessarily a new product domain yet, but a required cross-cutting substrate." (§2 distillation)
- diluted: OMNI needs a dedicated AI Runtime Security / Credential Control Plane as a cross-cutting substrate within the Agentic Runtime — not a new product domain, but required plumbing.
- why_it_matters: The central architectural proposal of v46; defines a named substrate component to add.
- omni_impact: change — define a Credential Control Plane as a cross-cutting substrate in CNS/AI lineage.
- landing_zone: contract(P1: CNS) + contract(P1: AI/Model Lineage) + thesis(P0)
- affected_artifacts: CNS, AI#12, RBAC, Control Plane, thesis AI-substrate section
- flag: new
- confidence: high
- requires_reread: yes

### v46-44 — (Distillation) Don't treat model/MCP/tool/vector credentials as ordinary env vars — required controls
- concept: required_credential_controls
- anchor: "OMNI should not treat model provider keys, MCP credentials, tool credentials, vector DB credentials, or agent execution tokens as ordinary environment variables. They need: No long-lived secrets in client/front-end contexts ... Short-lived scoped credentials ... Per-agent / per-capability credential scoping ... Spend ceilings and anomaly detection ... Provider-level and OMNI-level kill switches ... Secret scanning in CI ... Runtime token/cost telemetry ... Tool-call and model-call audit traces ... Credential rotation policy ... Incident runbooks for model/API compromise" (§2 distillation)
- diluted: A concrete control set for AI credentials — no long-lived client secrets, short-lived scoped creds, per-agent/per-capability scoping, spend ceilings + anomaly detection, provider/OMNI kill switches, CI secret scanning, runtime token/cost telemetry, tool/model call audit traces, rotation policy, and compromise runbooks.
- why_it_matters: The implementation spec for the credential control plane — directly actionable in Build OS.
- omni_impact: change — adopt this ten-item control set as the credential control plane requirements.
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage) + contract(P1: RBAC)
- affected_artifacts: AI#12, RBAC, secrets management, CI scanning, kill switches, audit, rotation policy, runbooks
- flag: new
- confidence: high
- requires_reread: yes

### v46-45 — (Distillation) Build OS insertion: Runtime Proof + Governance Cadence requirements
- concept: buildos_credential_requirements
- anchor: "This belongs directly in the Runtime Proof Layer and Governance Cadence Layer. Build OS should eventually require: secrets scanning before merge ... no model keys committed, logged, exposed, or bundled ... no agent can call a model/tool without a scoped identity ... every model/tool invocation has actor, purpose, capability, cost, context source, and trace ID ... abnormal token/cost/tool-use spikes trigger containment ... 'model provider down / key compromised / runaway agent' incident paths exist before production" (§2 distillation)
- diluted: Build OS must enforce: secret scanning before merge; no keys committed/logged/exposed/bundled; no agent model/tool call without scoped identity; every invocation tagged with actor/purpose/capability/cost/context-source/trace-ID; abnormal spikes trigger containment; and pre-production incident paths for provider-down/key-compromise/runaway-agent.
- why_it_matters: Maps the credential control plane onto concrete Build OS gates and proof obligations.
- omni_impact: change — add these six requirements to Build OS Runtime Proof + Governance Cadence layers.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build OS Runtime Proof Layer, Governance Cadence Layer, CI scanning, AI#12, incident runbooks
- flag: new
- confidence: high
- requires_reread: yes

### v46-46 — (Distillation) Every invocation must carry actor/purpose/capability/cost/context-source/trace-ID
- concept: invocation_provenance_tuple
- anchor: "every model/tool invocation has actor, purpose, capability, cost, context source, and trace ID" (§2 distillation)
- diluted: Each model/tool invocation must record a six-field provenance tuple — actor, purpose, capability, cost, context source, and trace ID.
- why_it_matters: A precise schema requirement for OMNI's AI lineage/audit — the unit of observable, governable AI action.
- omni_impact: change — define the invocation provenance tuple as the canonical AI-lineage record schema.
- landing_zone: contract(P1: AI/Model Lineage) + contract(P1: CNS)
- affected_artifacts: AI#12, CNS, audit schema, observation
- flag: new
- confidence: high
- requires_reread: yes

### v46-47 — (Distillation) AI assists security; deterministic controls + humans govern high-impact actions
- concept: ai_assists_humans_commit
- anchor: "AI can assist security, red-team, monitoring, triage, and low-hanging automation — but accountable humans and deterministic controls still govern high-impact actions. This maps cleanly to your existing doctrine: AI proposes / classifies / assists; deterministic policy and authorized humans commit truth." (§2 distillation)
- diluted: AI assists with security/monitoring/triage/automation, but high-impact actions are governed by deterministic controls and accountable humans — AI proposes/classifies/assists; deterministic policy + authorized humans commit.
- why_it_matters: Re-confirms the cluster's connection to OMNI's existing propose/validate/commit spine.
- omni_impact: affirms the propose/classify/assist vs deterministic-commit doctrine for security workflows.
- landing_zone: thesis(P0) + boot/governance + contract(P1: CNS)
- affected_artifacts: authority gates, CNS, AI#12, thesis §8
- flag: affirm
- confidence: high
- requires_reread: no

### v46-48 — (Distillation) Doctrine candidate: AI runtime access = privileged authority; no ambient authority
- concept: privileged_authority_doctrine
- anchor: "OMNI must treat AI runtime access as privileged authority, not commodity API usage. Model calls, tool calls, MCP access, retrieval access, and agent credentials must be scoped, observable, revocable, budgeted, audited, and governed by runtime policy. No agent receives ambient authority." (§2 distillation)
- diluted: Binding doctrine candidate — AI runtime access is privileged authority; all model/tool/MCP/retrieval/agent credentials must be scoped, observable, revocable, budgeted, audited, and runtime-policy-governed, with no ambient authority for any agent.
- why_it_matters: The headline durable rule of v46; the survival-grade doctrine ("1BN-company plumbing").
- omni_impact: change — promote to thesis/governance as binding AI-substrate doctrine (privileged AI authority, no ambient grants).
- landing_zone: thesis(P0) + boot/governance + contract(P1: RBAC) + contract(P1: AI/Model Lineage)
- affected_artifacts: thesis AI-substrate section, Coordination Charter, Control Plane, RBAC, AI#12, CNS, Guardrail digest
- flag: new
- confidence: high
- requires_reread: yes

### v46-49 — (Distillation) Severity framing: this is survival plumbing, not "cool AI content"
- concept: survival_plumbing_severity
- anchor: "This is not 'cool AI content.' This is 1BN-company survival plumbing." (§2 distillation)
- diluted: The cluster explicitly flags credential governance as existential infrastructure, not optional polish.
- why_it_matters: Sets priority — credential control plane is survival-tier, warranting early Build OS sequencing.
- omni_impact: sharpens prioritization — credential control plane is high-priority, near-term substrate work.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: Build OS rollout sequence, Future Work Registry, Guardrail digest
- flag: new
- confidence: med
- requires_reread: no

---

## Per-video concept count

| video | source type | concepts | priority |
|---|---|---|---|
| v45 — Build, Reuse, or Hybrid? Orchestration Powers Agentic AI | transcript + distillation | 29 | HIGH |
| v46 — LLMjacking / AI API key theft | transcript + distillation | 49 | HIGH |
| **total** | — | **78** | — |

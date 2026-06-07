# Cluster v41–v44 — Lossless Concept Inventory

- **cluster:** v41–v44 (agentic runtime security · hierarchical agents · LLM-as-judge · agentic failure modes)
- **sources:** `videos/v41.md` (transcript-only — no ChatGPT distillation), `videos/v42.md` (transcript + distillation), `videos/v43.md` (transcript + distillation), `videos/v44.md` (transcript + distillation)
- **date:** 2026-06-04
- **status:** lossless concept inventory — non-binding evidence
- **id scheme:** `vNN-XX` = source video number + concept index within that video (preserves per-video traceability for the count table). High-priority videos per request: v42 (hierarchical agents), v43 (LLM-as-judge), v44 (failure modes / least agency).

---

## v41 — Agentic Runtime Security: Securing Non-Human Identities (IBM Technology, Mar 15 2026; transcript-only)

### v41-01 — Agentic AI is a non-human identity (NHI); IAM is the whole problem
- concept: agentic_ai_as_non_human_identity
- anchor: "This topic begins and ends really with identity and access management." / "agentic AI is a form of non-human identity." (0:16–0:39)
- diluted: Securing agents is fundamentally an IAM problem, but CISOs/IT default to thinking about human identities; agents are a distinct, dramatic class of non-human identity.
- why_it_matters: Reframes agent security as identity governance, not model safety — the lens OMNI must adopt for every CNS-driven actor.
- omni_impact: affirms/sharpens OMNI's stance that every actor (human, agent, service) is an identity under RBAC + AI lineage, not a free-floating "AI feature".
- landing_zone: contract(P1: RBAC) + contract(P1: AI/Model Lineage) + thesis(P0)
- affected_artifacts: RBAC, AI#12, CNS, Federation, thesis §8 (Sense+Act + authority gates)
- flag: affirm
- confidence: high
- requires_reread: no

### v41-02 — Identity is the dominant attack surface (~80% of attacks)
- concept: identity_centric_attack_surface
- anchor: "roughly 80% of all cyber attacks actually happen around identities, around compromised identities. And that's just on the human side." (0:42–0:50)
- diluted: The large majority of cyberattacks already route through compromised identities even before agents are added, so identity is the proven failure surface.
- why_it_matters: Justifies investing in identity-grade controls for agents rather than treating them as low-risk automation.
- omni_impact: affirms OMNI's authority-gate-first posture; agent compromise = identity compromise.
- landing_zone: boot/governance + contract(P1: RBAC)
- affected_artifacts: RBAC, audit, Control Plane (authority spine)
- flag: affirm
- confidence: med
- requires_reread: no

### v41-03 — NHI explosion ratio (45–90 non-human identities per human)
- concept: nhi_to_human_ratio
- anchor: "there's, what, 45 to 90 non-human identities for every one human identity with a dramatic form of it being agentic AI" (0:54–1:04)
- diluted: Non-human identities already vastly outnumber humans, and agents accelerate that ratio, so identity volume is a scale problem, not an edge case.
- why_it_matters: OMNI's RBAC/audit must scale to far more agent identities than human users.
- omni_impact: sharpens RBAC + audit scaling assumptions; identity issuance must be cheap, traceable, revocable at scale.
- landing_zone: contract(P1: RBAC) + BuildOS(P6)
- affected_artifacts: RBAC, audit, CNS, AI#12
- flag: sharpen
- confidence: med
- requires_reread: no

### v41-04 — Agents are just workloads given an identity
- concept: agents_are_workloads
- anchor: "they're TypeScript, they're Python, they're running on a container, on a Lambda, on a virtual machine, and we provide them identities, which is the non-humans identity." (1:20–1:29)
- diluted: AI agents are ordinary workloads (containers/functions/VMs) that happen to be issued an identity; nothing about them exempts them from workload security discipline.
- why_it_matters: Lets OMNI reuse workload identity primitives instead of inventing agent-only governance.
- omni_impact: affirms treating CNS agents as governed workloads under standard issuance/revocation.
- landing_zone: contract(P1: RBAC) + BuildOS(P6)
- affected_artifacts: RBAC, CNS, Build OS Command/Tool layer
- flag: affirm
- confidence: high
- requires_reread: no

### v41-05 — Static IAM only protects to the first agent (the gap)
- concept: static_iam_first_hop_gap
- anchor: "The way traditional human-centered static identity and access management works is it protects you to this point, to that first agent. But where the problems come in is once we get into the embedded agents going to back-end resources." (2:10–2:26)
- diluted: Conventional IAM authenticates the user→first-agent hop, but embedded agents calling backends/databases are unprotected, creating the core gap.
- why_it_matters: Defines exactly where OMNI must extend authority enforcement — into agent→resource hops, not just user→app.
- omni_impact: change — OMNI authority gates must reach embedded/downstream agent calls, not stop at surface entry.
- landing_zone: contract(P1: RBAC) + contract(P1: CNS) + thesis(P0)
- affected_artifacts: RBAC, CNS, Federation, audit
- flag: sharpen
- confidence: high
- requires_reread: no

### v41-06 — Hole #1: Accountability (unique agent identifier)
- concept: accountability_unique_agent_id
- anchor: "we need to assign them some sort of identifier ID so they are unique. We know exactly each instance of each agent and we can trace back, what is it doing?" (2:38–2:49)
- diluted: Every agent instance needs a unique identifier so its actions can be traced; without it accountability collapses.
- why_it_matters: Foundational for OMNI audit lineage — you cannot govern what you cannot uniquely name.
- omni_impact: affirms per-agent-instance IDs in CNS/AI lineage; each run is attributable.
- landing_zone: contract(P1: AI/Model Lineage) + contract(P1: RBAC)
- affected_artifacts: AI#12, CNS, audit, RBAC
- flag: affirm
- confidence: high
- requires_reread: no

### v41-07 — Hole #2: Overprivilege (standing vs session privilege)
- concept: overprivilege_standing_privilege
- anchor: "an HR agent, is authorized to go on board or off board an employee, but we don't want that privilege to be existence at all times that the agent's running. We wanna lock it down for the request and the action when it needs it in that session." (2:55–3:12)
- diluted: Agents accumulate broad standing privileges because developers can't scope them precisely; privilege should exist only for the specific request/action within a session.
- why_it_matters: Directly maps to OMNI's `requireCapability` model — capabilities should be just-in-time and action-scoped, not ambient.
- omni_impact: sharpens capabilities doctrine: session/action-scoped grants over standing roles for agents.
- landing_zone: contract(P1: RBAC) + boot/governance
- affected_artifacts: RBAC, capabilities (lib/auth/capabilities.ts), CNS, audit
- flag: sharpen
- confidence: high
- requires_reread: no

### v41-08 — Hole #3: Delegation (act on behalf, with intent + audit)
- concept: delegation_with_intent
- anchor: "oftentimes we want to delegate one of these AI agents to act on our behalf... How do we delegate successfully with intent and with audit logging?" (3:34–3:47)
- diluted: Delegating authority to an agent must capture the delegating principal, the intent, and an audit trail, or the chain of responsibility is lost.
- why_it_matters: OMNI's "right actor / right authority" mantra requires explicit, audited delegation, not implicit inheritance.
- omni_impact: change — add explicit delegation records (who delegated, intent, scope) to CNS/RBAC.
- landing_zone: contract(P1: RBAC) + contract(P1: CNS)
- affected_artifacts: RBAC, CNS, audit, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v41-09 — Hole #3b: Impersonation (agent inherits invoking user's identity)
- concept: impersonation_identity_inheritance
- anchor: "I'm just going to inherit the identity of the user that invoked me... you've lost your accountability at that point... Co-work Agents run on your desktop, they act as you, they operate browsers as you and they are impersonating you." (3:55–4:24)
- diluted: A "lazy" agent that reuses the invoking user's identity (esp. desktop/co-work agents driving browsers) destroys accountability — you can't tell user from agent.
- why_it_matters: OMNI must forbid identity inheritance so patient/operator actions are never indistinguishable from agent actions.
- omni_impact: change — hard rule: agents must carry their own identity; impersonation/inheritance is prohibited and detectable.
- landing_zone: boot/governance + contract(P1: RBAC)
- affected_artifacts: RBAC, CNS, audit, Federation
- flag: new
- confidence: high
- requires_reread: no

### v41-10 — Hole #4: Last mile / last hop problem (agent→database)
- concept: last_mile_last_hop
- anchor: "The last is the last mile. From an agent to a database... Are they all sharing the same database credential?... how do we revoke last mile access... at machine speed... And guess who's checking? Nobody." (4:30–5:38)
- diluted: At the final agent→sensitive-resource hop, access often runs on standing/shared credentials with no point-of-use check of whether access is still valid for current context/risk, all at machine speed.
- why_it_matters: This is the unguarded moment where OMNI clinical/financial/PHI data is actually touched — the highest-stakes enforcement point.
- omni_impact: change — OMNI must add point-of-use authorization at the data-access hop, not rely on standup-time grants.
- landing_zone: contract(P1: RBAC) + contract(P1: CNS) + thesis(P0)
- affected_artifacts: RBAC, CNS, audit, Federation, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v41-11 — Imperative #1: Register agents (with risk quantification)
- concept: imperative_register_agents
- anchor: "the first is register your agents... I provided some sort of identity, and I've probably even gone through the process of quantifying risk of this agent if it's making external connections" (5:50–6:07)
- diluted: Definition-of-done step one: register each agent, give it identity, and quantify its risk (especially for external connections).
- why_it_matters: Gives OMNI a concrete admission gate for agents analogous to the Build Entry Gate.
- omni_impact: change — add agent-registration + risk-scoring as a precondition in Build OS / CNS onboarding.
- landing_zone: BuildOS(P6) + boot/governance
- affected_artifacts: Build Entry Gate, CNS, RBAC, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v41-12 — Imperative #2: Strip privileges (dynamic, just-in-time, session-level)
- concept: imperative_strip_privileges
- anchor: "All privileges get stripped away. We use dynamic privileges just in time at the session level... This is all real time being done." (6:13–6:38)
- diluted: Start agents at zero privilege and grant dynamically, just-in-time, at session level — the opposite of slow static human role assignment.
- why_it_matters: Reinforces capabilities-as-default and zero-standing-authority for OMNI agents.
- omni_impact: sharpens RBAC/capabilities: agents default-deny, grants are ephemeral.
- landing_zone: contract(P1: RBAC) + boot/governance
- affected_artifacts: RBAC, capabilities, CNS, audit
- flag: sharpen
- confidence: high
- requires_reread: no

### v41-13 — Imperative #3: Tie all actions to intent (audit binding)
- concept: imperative_tie_actions_to_intent
- anchor: "How do we know that Tyler has asked agent X to take this action? That is really a crux of an audit problem... they're doing banking transactions... provisioning real infrastructure... we need to have this tie in." (7:02–7:17)
- diluted: Every agent action must be cryptographically/logically bound to the human intent that requested it (which user asked which agent for which action).
- why_it_matters: This binding is exactly OMNI's "right context / right actor / right moment" audit requirement for high-stakes care/commerce actions.
- omni_impact: change — CNS must persist intent→agent→action linkage as first-class audit lineage.
- landing_zone: contract(P1: CNS) + contract(P1: AI/Model Lineage)
- affected_artifacts: CNS, AI#12, audit, RBAC
- flag: sharpen
- confidence: high
- requires_reread: no

### v41-14 — Imperative #4: Force point of use / last-hop enforcement
- concept: imperative_point_of_use_enforcement
- anchor: "is it authorized to do it not was authorized to do it when I stood it up a month ago... I like to call it the last hop... We must analyze each one of those external connections in near real time" (7:25–8:09)
- diluted: Enforce authorization at the moment of use ("is it authorized" not "was it authorized"), analyzing each external/last-hop connection in near real time against current risk/policy.
- why_it_matters: Converts the last-mile diagnosis into an enforceable runtime control OMNI can implement.
- omni_impact: change — add near-real-time authorization checks at each agent external/data connection.
- landing_zone: contract(P1: RBAC) + BuildOS(P6)
- affected_artifacts: RBAC, CNS, audit, Federation
- flag: new
- confidence: high
- requires_reread: no

### v41-15 — Imperative #5: Proof of control (end-to-end auditability, regulated industries)
- concept: imperative_proof_of_control
- anchor: "for those customers... in highly regulated industries, healthcare, life sciences, financial services, this is fundamentally an imperative... We must audit the whole continuum of human identity to non-human identity to actions and response." (8:12–8:42)
- diluted: Regulated domains require provable, end-to-end auditability across the full human→NHI→action→response continuum, not just human→app logging.
- why_it_matters: OMNI is explicitly a healthcare/commerce substrate — this is a hard compliance requirement, not optional.
- omni_impact: affirms OMNI immutable-audit spine must span the entire actor continuum including agents.
- landing_zone: boot/governance + contract(P1: AI/Model Lineage)
- affected_artifacts: audit, CNS, AI#12, RBAC, thesis §8
- flag: affirm
- confidence: high
- requires_reread: no

### v41-16 — Enabling tech #1: Orchestration engine (traffic director)
- concept: tech_orchestration_engine
- anchor: "First is orchestration. You need to have an orchestration engine... who's directing the traffic and making sure that all the auditability and accountability is being baked in." (8:59–9:21)
- diluted: A central orchestration layer must manage traffic between human and non-human identity worlds while baking in auditability/accountability.
- why_it_matters: This is precisely the CNS orchestration role OMNI already names — external corroboration of the pattern.
- omni_impact: affirms CNS as the orchestration spine across human/agent actors.
- landing_zone: contract(P1: CNS) + thesis(P0)
- affected_artifacts: CNS, RBAC, audit
- flag: affirm
- confidence: high
- requires_reread: no

### v41-17 — Enabling tech #2: Governance (policy at each step)
- concept: tech_governance_policy
- anchor: "Second is governance... the policies that need to be in place, everything from access here to the last mile... Has to have governance applied at each step, so you can prove who did what." (9:21–9:37)
- diluted: Governance must apply policy at every step of the chain so that "who did what" is provable end to end.
- why_it_matters: Matches OMNI's Control Plane authority/schema spine; governance is step-wise, not perimeter-only.
- omni_impact: affirms Control Plane + governance cadence as cross-step, not gate-at-edge.
- landing_zone: boot/governance + contract(P1: RBAC)
- affected_artifacts: Control Plane, RBAC, audit, CNS
- flag: affirm
- confidence: high
- requires_reread: no

### v41-18 — Enabling tech #3a: Observability — posture management
- concept: tech_observability_posture
- anchor: "posture management is, it probably is a bit of a problem if my development teams have 13 different secrets managers... maybe we should consolidate... see how many non-human identity management engines do you have" (10:57–11:36)
- diluted: Posture observability surfaces sprawl (e.g., 13 secrets managers, many NHI engines) so the org can consolidate and actually manage agent-identity risk.
- why_it_matters: Warns OMNI against fragmented secrets/identity tooling that defeats governance.
- omni_impact: change — OMNI should consolidate secrets/identity engines and expose a posture view.
- landing_zone: BuildOS(P6) + boot/governance
- affected_artifacts: Build OS, RBAC, audit, Control Plane
- flag: new
- confidence: med
- requires_reread: no

### v41-19 — Enabling tech #3b: Observability — threat management (real-time detection)
- concept: tech_observability_threat
- anchor: "Can you tell in real time? If there is... an agent that pops up that never goes to the secrets manager, never gets a unique identifier. Instead of waiting for an audit to discover, oops, wouldn't it be nice to be able to see that in real time?" (11:40–12:04)
- diluted: Threat observability detects rogue agents (never registered, never issued a unique ID) in real time rather than discovering them at audit.
- why_it_matters: OMNI needs runtime detection of unregistered/unauthorized agents, not just retrospective audit.
- omni_impact: change — add real-time anomaly detection for agents bypassing registration/identity issuance.
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage)
- affected_artifacts: AI#12, CNS, audit, RBAC
- flag: new
- confidence: med
- requires_reread: no

### v41-20 — Org-silo blocker: CISO / IT / Dev lack shared observability
- concept: org_silo_collaboration_gap
- anchor: "you have the CSO office... IT and you have dev... most of the clients... will ask the CISO... what are you doing with the development team? And they'll say, oh, we have a monthly call... there's just a lack of observability across this whole problem that these three groups can use to collaborate." (9:53–10:44)
- diluted: The non-technical blocker is organizational: security, IT, and dev operate in silos with no shared observability, so agentic risk falls through the cracks.
- why_it_matters: Mirrors OMNI's trifecta/collaboration-model concern — governance fails without shared visibility across roles.
- omni_impact: affirms need for a single observability surface uniting governance/build/runtime roles.
- landing_zone: boot/governance + surface/projection(P5/P4)
- affected_artifacts: Coordination Charter, Build OS, Surface Map, audit
- flag: affirm
- confidence: med
- requires_reread: no

---

## v42 — What Are Hierarchical AI Agents? (IBM Technology, Martin Keen, Mar 12 2026; transcript + distillation) [HIGH PRIORITY]

### v42-01 — Long-horizon single-agent focus problem
- concept: single_agent_long_horizon_failure
- anchor: "in long-horizon tasks, it can be tricky to keep the agent focused across all of the different steps that the agent needs to execute." (0:10–0:21)
- diluted: A single agent loses focus over long multi-step tasks; the monolithic architecture is the root cause of several predictable failures.
- why_it_matters: Establishes why OMNI must not centralize everything into one CNS super-agent.
- omni_impact: change — OMNI rejects single-brain CNS in favor of decomposition.
- landing_zone: thesis(P0) + contract(P1: CNS)
- affected_artifacts: CNS, AI#12, Build OS
- flag: sharpen
- confidence: high
- requires_reread: no

### v42-02 — Context dilution
- concept: context_dilution
- anchor: "context dilution. As the task grows, the signal of the original goal gets a bit lost in the noise of the intermediate steps." (0:32–0:40)
- diluted: As a task accumulates intermediate steps, the original goal's signal drowns in noise.
- why_it_matters: Justifies scoped context packets instead of dumping full history into every CNS call.
- omni_impact: change — context packets must be pruned to preserve goal signal.
- landing_zone: contract(P1: CNS) + thesis(P0)
- affected_artifacts: CNS, context_packet primitive, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v42-03 — Tool saturation
- concept: tool_saturation
- anchor: "tool saturation. The more tools you give the agent access to, the harder the tool selection becomes, and the more chances there are to call the wrong tool, or maybe just to pass invalid arguments." (0:40–0:54)
- diluted: Giving an agent too many tools degrades tool selection accuracy and increases wrong-tool / invalid-argument errors.
- why_it_matters: Drives OMNI toward narrow, role-scoped toolboxes per agent (also a security control).
- omni_impact: change — scope tools per agent role; avoid universal toolbelts.
- landing_zone: contract(P1: RBAC) + BuildOS(P6)
- affected_artifacts: RBAC, CNS, tool_scope primitive, Build OS Command/Tool layer
- flag: new
- confidence: high
- requires_reread: no

### v42-04 — Lost in the middle
- concept: lost_in_the_middle
- anchor: "the lost in the middle phenomenon... LLMs can underweight content buried in the middle of a long context window." (0:54–1:07)
- diluted: Even correct instructions are underweighted when buried mid-context; long windows are not reliable storage.
- why_it_matters: Reinforces that OMNI cannot rely on stuffing everything into one prompt; structure matters.
- omni_impact: affirms pruned/positioned context packets over monolithic context.
- landing_zone: contract(P1: CNS)
- affected_artifacts: CNS, context_packet, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v42-05 — Hierarchical agent structure (2–3 tiers)
- concept: hierarchical_agent_structure
- anchor: "there is a trend for agentic workflows to adopt, hierarchical AI agents. Now, most hierarchical structures have two or three types of agent." (1:16–1:29)
- diluted: Instead of one agent doing planning + implementation + QA, work is split across a 2–3 tier hierarchy of agent types.
- why_it_matters: Provides the reference architecture for OMNI's CNS + domain + specialist agent layering.
- omni_impact: change — adopt governed hierarchical agent model as OMNI's agent topology.
- landing_zone: thesis(P0) + contract(P1: CNS) + BuildOS(P6)
- affected_artifacts: CNS, agent_hierarchy primitive, Build OS, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v42-06 — High-level agent (top dog: strategy, decomposition, global state)
- concept: high_level_agent
- anchor: "this is considered to be the high-level agent. This guy is the top dog... it can process strategic plans, it can perform task decomposition, it can manage processes." (1:37–1:52); "the high-level agent maintains the global state" (4:54–5:02)
- diluted: One top-tier agent owns goal framing, task decomposition, process management, and holds global state.
- why_it_matters: Maps to OMNI's orchestration CNS (Patient/Operator/Governance CNS) as the global-state owner.
- omni_impact: change — define high-level orchestration role explicitly in CNS contract.
- landing_zone: contract(P1: CNS)
- affected_artifacts: CNS, agent_role primitive, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v42-07 — Mid-level agents (domain coordinators)
- concept: mid_level_agent
- anchor: "these are called mid-level agents, and they report into the high-level agents... they have their own tasks like implement plans and further decompose tasks and coordinate teams of low-level agents." (1:59–2:32)
- diluted: Mid-tier agents receive directives, implement/further-decompose plans, and coordinate teams of low-level agents within bounded scope.
- why_it_matters: Maps directly to OMNI bounded-domain agents (Intake, Messaging, Clinical Memory, Observation, Federation, RBAC, etc.).
- omni_impact: change — define mid-level domain-agent role per OMNI domain contract.
- landing_zone: contract(P1: CNS) + contract(P1: per-domain)
- affected_artifacts: CNS, domain contracts, agent_role, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v42-08 — Low-level agents (narrow specialist doers)
- concept: low_level_agent
- anchor: "low-level agents... these guys are the doers, and they're specialized for narrow tasks. Perhaps they're trained on certain data, or they're given access to particular tools... they report back results as they go." (2:32–3:07)
- diluted: Bottom-tier agents execute narrow, specialized tasks with limited data/tools and report results upward.
- why_it_matters: Maps to OMNI specialist tools/agents (extract a lab value, classify a message, validate consent, run a schema check).
- omni_impact: change — define narrow specialist agent/tool role with constrained data/tool access.
- landing_zone: contract(P1: CNS) + BuildOS(P6)
- affected_artifacts: CNS, tool_scope, agent_role, Build OS Command/Tool layer
- flag: new
- confidence: high
- requires_reread: no

### v42-09 — Org-chart analogy (executives / PMs / specialists)
- concept: org_chart_analogy
- anchor: "we might have at the top here executives... analogous to the high-level agent... managed by a team of PMs, project managers, the mid-level agents... the actual work is performed by a series of specialists at the low-level agent level." (3:23–3:55)
- diluted: The hierarchy mirrors corporate org structure: executives set strategy, PMs manage projects, specialists execute.
- why_it_matters: Gives OMNI an intuitive governance/ownership mental model that aligns agent tiers with authority tiers.
- omni_impact: affirms aligning agent tier with authority/ownership tier (Lens B build-concept borrow).
- landing_zone: thesis(P0) + boot/governance
- affected_artifacts: thesis §3.5 (comparator registry), CNS, RBAC
- flag: affirm
- confidence: med
- requires_reread: no

### v42-10 — Separation of concerns (classic SWE principle applied to AI)
- concept: separation_of_concerns
- anchor: "it applies a classic software engineering principle to the world of AI: separation of concerns... in a monolithic agent, the model is constantly context switching between high-level reasoning... and then low-level execution." (4:13–4:34)
- diluted: Hierarchy works because it separates concerns, eliminating costly context-switching between strategic reasoning and execution within one model.
- why_it_matters: Gives OMNI a principled (not ad hoc) justification for agent decomposition.
- omni_impact: affirms separation-of-concerns as a binding OMNI agent design principle.
- landing_zone: thesis(P0) + BuildOS(P6)
- affected_artifacts: CNS, Build OS, AI#12
- flag: affirm
- confidence: high
- requires_reread: no

### v42-11 — Contextual packets (pruned context payloads)
- concept: contextual_packets
- anchor: "a hierarchical system uses contextual packets... when it delegates a task to a lower-level agent, it only sends a kind of a pruned relevant slice of that context... it probably doesn't need to know the initial 4,000-word strategy document." (4:45–5:18)
- diluted: Delegation passes a pruned, task-relevant context slice — not the entire history — keeping signal-to-noise high.
- why_it_matters: Distillation flags this as a major OMNI primitive: context packets are agent-work payloads, not just audit artifacts.
- omni_impact: change — promote `context_packet` to a scoped, pruned, authority-labeled, source-labeled, task-specific work payload.
- landing_zone: contract(P1: CNS) + thesis(P0)
- affected_artifacts: CNS, context_packet/task_packet primitives, AI#12, audit
- flag: sharpen
- confidence: high
- requires_reread: no

### v42-12 — Tool specialization = least privilege for tools
- concept: tool_specialization_least_privilege
- anchor: "in IT, we generally follow the principle of less privilege, and this agentic hierarchy lets us do the same thing for AI through tool specialization. Low-level agents... only have access to specific tools... it doesn't get access to CI/CD pipeline tool. That's only for the DevOps agent." (5:24–6:07)
- diluted: Each low-level agent gets only its narrow purpose-built toolbox, applying least-privilege to tool access and simplifying selection.
- why_it_matters: Unifies the v41 security lens with the v42 architecture lens — tool scoping serves both reliability and security.
- omni_impact: affirms `tool_scope` per agent role; ties RBAC capabilities to agent tier.
- landing_zone: contract(P1: RBAC) + contract(P1: CNS)
- affected_artifacts: RBAC, tool_scope, CNS, capabilities
- flag: affirm
- confidence: high
- requires_reread: no

### v42-13 — Model flexibility / right-sizing for cost
- concept: model_right_sizing
- anchor: "in a hierarchy, you have a bit of model flexibility... the heavyweight frontier model... for all the complex planning... But for some of the lower-level agents running more modular self-contained tasks, they can run a much lighter-weight model." (6:27–6:53)
- diluted: Fit model size to task: frontier model for top-tier planning, lightweight models for narrow lower-tier tasks, reducing inference cost.
- why_it_matters: Cost discipline for OMNI at scale — don't burn frontier compute on trivial subtasks.
- omni_impact: change — record model selection per agent tier; optimize cost via tiered model assignment.
- landing_zone: contract(P1: AI/Model Lineage) + BuildOS(P6)
- affected_artifacts: AI#12, CNS, Build OS
- flag: new
- confidence: med
- requires_reread: no

### v42-14 — Modularity (independent test / update / swap)
- concept: modularity
- anchor: "This is all very modular, so each agent can be tested and updated and swapped out without really touching the rest of the system." (6:53–7:03)
- diluted: Hierarchical agents are independently testable, upgradable, and replaceable without disturbing the whole system.
- why_it_matters: Supports OMNI Build OS lifecycle (staged work, swap-in, de-scaffolding) at the agent level.
- omni_impact: affirms modular agent lifecycle under Build OS.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build OS, CNS, AI#12
- flag: affirm
- confidence: med
- requires_reread: no

### v42-15 — Parallelism
- concept: parallelism
- anchor: "It allows for parallelism, which is to say we can have multiple agents working on different parts of the problem all at the same time." (7:03–7:12)
- diluted: Decomposition enables multiple agents to work concurrently on different sub-parts of a problem.
- why_it_matters: Throughput/latency lever for OMNI workflows (intake, monitoring, outreach) at scale.
- omni_impact: affirms parallel agent execution as an OMNI capability.
- landing_zone: BuildOS(P6) + contract(P1: CNS)
- affected_artifacts: CNS, Build OS, AI#12
- flag: affirm
- confidence: med
- requires_reread: no

### v42-16 — Recursive feedback loop / quality gate (supervisor review)
- concept: recursive_feedback_quality_gate
- anchor: "it also provides recursive feedback... when a low-level agent finishes a task, it reports back... that can kind of act as a bit of a quality gate where the supervisor can monitor output and trigger a retry or just kind of pivot if the result appears to be an error." (7:12–7:35)
- diluted: Upward reporting creates a supervisor quality gate that can monitor outputs and trigger retries/pivots on error.
- why_it_matters: Native pattern for OMNI's supervisor-validation + retry/escalation doctrine.
- omni_impact: change — define `supervisor_validation` + retry/pivot logic in CNS / Build OS Runtime Proof.
- landing_zone: contract(P1: CNS) + BuildOS(P6)
- affected_artifacts: CNS, supervisor_validation, Build OS Runtime Proof, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v42-17 — Limitation: task decomposition is hard (GIGO through layers)
- concept: task_decomposition_risk
- anchor: "the entire system here, it hinges on the high-level agent's ability to break... into the right subtasks... if it decomposes poorly... everything downstream is going to inherit that mistake. It's garbage in, garbage out... they over-decompose simple tasks into unnecessary steps." (7:53–8:45)
- diluted: The whole hierarchy depends on top-tier decomposition; LLMs are inconsistent planners (miss dependencies, underestimate complexity, over-decompose), and errors cascade down all layers.
- why_it_matters: Warns OMNI that hierarchy alone doesn't guarantee quality — decomposition itself must be governed and evaluated.
- omni_impact: change — require `decomposition_trace` + evals for decomposition quality, not just final output.
- landing_zone: BuildOS(P6) + contract(P1: CNS)
- affected_artifacts: CNS, decomposition_trace, Build OS Runtime Proof, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v42-18 — Orchestration overhead (state, handoffs, retries; brittle → recursive loop)
- concept: orchestration_overhead
- anchor: "there's also orchestration overhead... designing the state management and then defining the handoff logic... building retry loops... if the logic that governs how agents talk to each other is just a bit brittle, then the whole system can fall into a rather unfortunate recursive loop... until they hit their token limit." (8:47–9:22)
- diluted: Hierarchy requires architecting an entire system (state mgmt, handoff logic, retry loops); brittle inter-agent logic causes recursive error-passing loops until token exhaustion.
- why_it_matters: Direct bridge to v44 infinite-loop failure mode; OMNI must engineer handoff contracts + loop guards.
- omni_impact: change — define `handoff_contract` + loop/termination guards as OMNI runtime requirements.
- landing_zone: BuildOS(P6) + contract(P1: CNS)
- affected_artifacts: CNS, handoff_contract, termination guards, Build OS, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v42-19 — Telephone-game distortion (executing the wrong task perfectly)
- concept: telephone_game_distortion
- anchor: "the good old telephone game effect... if task decomposition is slightly off or if the wrong bit of context gets pruned... the specialized agent can end up perfectly executing the wrong task." (9:22–9:59)
- diluted: Distortion across handoffs (bad decomposition or wrong-context pruning) leads a specialist to flawlessly execute the wrong task.
- why_it_matters: Shows pruning is double-edged — OMNI context packets must be validated, not just minimized.
- omni_impact: change — add handoff validation + context-packet correctness checks to prevent silent task drift.
- landing_zone: contract(P1: CNS) + BuildOS(P6)
- affected_artifacts: CNS, context_packet, handoff_contract, supervisor_validation
- flag: new
- confidence: high
- requires_reread: no

### v42-20 — "Lost in the org chart" / never trust the top dog's plan
- concept: lost_in_org_chart
- anchor: "they can keep your agent from getting lost in the middle, but they can still get lost in the org chart... treat the hierarchy like any other system you'd put into production... never assume that the top dog always wrote a perfect plan." (9:59–10:16)
- diluted: Hierarchy trades "lost in the middle" for "lost in the org chart"; treat it as a production system — design handoffs, validate work, and never assume the top-level plan is correct.
- why_it_matters: A durable governance maxim: top-level plans are provisional, not truth — mirrors OMNI's "plans are evidence until proven" stance.
- omni_impact: affirms doctrine "top agent plan is provisional, not canonical truth."
- landing_zone: boot/governance + thesis(P0)
- affected_artifacts: CNS, Build OS, Agent Work Protocol, AI#12
- flag: sharpen
- confidence: high
- requires_reread: no

### v42-21 — (Distillation) Do not build one CNS super-agent
- concept: no_cns_super_agent
- anchor: "Do not build one CNS super-agent. Build a governed hierarchy of scoped agents." (§2 distillation)
- diluted: OMNI's explicit takeaway — reject a single omniscient CNS brain in favor of a governed hierarchy of scoped agents.
- why_it_matters: Sets a top-level architectural constraint for the entire AI substrate.
- omni_impact: change — binding architectural rule against monolithic CNS.
- landing_zone: thesis(P0) + contract(P1: CNS)
- affected_artifacts: CNS (Patient/Operator/Governance-CNS), AI#12, thesis AI-substrate section
- flag: new
- confidence: high
- requires_reread: yes

### v42-22 — (Distillation) Context packets are agent-work payloads, not just audit artifacts
- concept: context_packet_as_work_payload
- anchor: "context packets are not just audit artifacts; they are agent-work payloads. They must be scoped, pruned, authority-labeled, source-labeled, and task-specific." (§2 distillation)
- diluted: Reclassifies context packets from audit records to active work payloads carrying scope, authority labels, source labels, and task specificity.
- why_it_matters: Sharpens an existing OMNI primitive into a dual-purpose (work + audit) governed object.
- omni_impact: change — extend `context_packet` schema with authority/source labels + task scope.
- landing_zone: contract(P1: CNS) + contract(P1: AI/Model Lineage)
- affected_artifacts: CNS, context_packet, AI#12, audit
- flag: sharpen
- confidence: high
- requires_reread: yes

### v42-23 — (Distillation) Build OS should itself be hierarchical (agent roles)
- concept: hierarchical_build_os
- anchor: "Build OS should be hierarchical too... Architect / Planner agent... Domain contract agent... Implementation agent... Reviewer agent... Runtime proof agent." (§2 distillation)
- diluted: Apply the agent hierarchy to OMNI's own build process: distinct planner, domain-contract, implementation, reviewer, and runtime-proof agents instead of "Opus fix everything."
- why_it_matters: Operationalizes the architecture inside OMNI's Build OS execution model.
- omni_impact: change — define Build OS agent roles mapped to layer model + rollout sequence.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build OS layer model, Build OS rollout sequence, Agent Work Protocol, AI#12
- flag: new
- confidence: high
- requires_reread: yes

### v42-24 — (Distillation) Evaluate decomposition quality, not just final output
- concept: decomposition_quality_evals
- anchor: "decomposition traces / task-packet contracts / handoff validation / supervisor review / retry / escalation logic / narrow tool permissions / 'top agent plan is provisional, not truth' / evals for decomposition quality, not just final output" (§2 distillation)
- diluted: OMNI must instrument and evaluate the decomposition + handoff machinery itself (traces, task-packet contracts, validation, escalation), not only end results.
- why_it_matters: Closes the v42 limitation loop with concrete proof obligations for Build OS Runtime Proof.
- omni_impact: change — add decomposition/handoff eval obligations to Runtime Proof layer.
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage)
- affected_artifacts: Build OS Runtime Proof, decomposition_trace, task_packet, handoff_contract, AI#12
- flag: new
- confidence: high
- requires_reread: yes

---

## v43 — LLM as a Judge: Scaling AI Evaluation Strategies (IBM Technology, ~8 months ago; transcript + distillation) [HIGH PRIORITY]

### v43-01 — LLM-as-a-judge concept
- concept: llm_as_judge
- anchor: "Enter LLM as a judge or LLMs judging other LLM outputs... imagine an AI that can scale, adapt and explain its judgments." (0:09–0:29)
- diluted: Use an LLM to evaluate other LLM outputs at scale, adapting and explaining judgments where manual labeling and traditional metrics fall short.
- why_it_matters: Provides OMNI's scalable evaluation mechanism for AI outputs across care/commerce/build surfaces.
- omni_impact: change — adopt LLM-as-judge as an OMNI eval instrument (evidence-producing).
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage)
- affected_artifacts: AI#12, Build OS Runtime Proof, CNS, eval_run primitive
- flag: new
- confidence: high
- requires_reread: no

### v43-02 — Reference-free evaluation
- concept: reference_free_evaluation
- anchor: "When it comes to reference-free evaluation, there are two main ways to leverage LLM as a judge." (0:42–0:47)
- diluted: LLM judges enable evaluation without a gold reference answer — useful when no ground truth exists.
- why_it_matters: Many OMNI outputs (patient messages, care explanations) have no single correct reference.
- omni_impact: affirms reference-free evals for subjective OMNI outputs.
- landing_zone: BuildOS(P6)
- affected_artifacts: AI#12, Build OS Runtime Proof, eval_run
- flag: new
- confidence: high
- requires_reread: no

### v43-03 — Direct assessment (rubric-based)
- concept: direct_assessment
- anchor: "First, we have direct assessment, in which you design a rubric... is this summary clear and coherent?... Each of your outputs will be evaluated based on the rubric that you've designed." (0:47–1:32)
- diluted: Direct assessment scores each output independently against a designed rubric (e.g., yes/no clarity).
- why_it_matters: Maps to OMNI compliance/policy-adherence scoring (consent, refund, clinical policy).
- omni_impact: change — add rubric-based `direct_assessment` evals with versioned rubrics.
- landing_zone: BuildOS(P6) + boot/governance
- affected_artifacts: AI#12, rubric_version, eval_run, Governance cadence
- flag: new
- confidence: high
- requires_reread: no

### v43-04 — Pairwise comparison + ranking
- concept: pairwise_comparison
- anchor: "In pairwise comparison, your focus is on comparing two different outputs... which of these outputs is better? Option A or option B?... you can then use a ranking algorithm to create a ranking." (1:35–1:58)
- diluted: Pairwise comparison asks which of two outputs is better and uses a ranking algorithm to order many outputs.
- why_it_matters: Maps to OMNI "which patient-facing message is better?" selection problems.
- omni_impact: change — add `pairwise_comparison` evals + ranking for output selection.
- landing_zone: BuildOS(P6)
- affected_artifacts: AI#12, pairwise_comparison, eval_run
- flag: new
- confidence: high
- requires_reread: no

### v43-05 — EvalAssist user-preference finding
- concept: evalassist_preference_research
- anchor: "our user research on the newly open-sourced framework EvalAssist showed that about half of the participants prefer direct assessment... About a quarter preferred pairwise comparison... the remainder... preferred a combined approach." (2:02–2:30)
- diluted: Empirically, ~50% prefer direct assessment (control/clarity), ~25% pairwise (subjective tasks), ~25% combined; choice is task- and user-dependent.
- why_it_matters: Tells OMNI not to standardize on one eval style — offer both and combine by task.
- omni_impact: affirms supporting multiple eval modalities chosen per task.
- landing_zone: BuildOS(P6)
- affected_artifacts: AI#12, eval_run, Build OS Runtime Proof
- flag: affirm
- confidence: med
- requires_reread: no

### v43-06 — Combined approach (compliance scoring + ranking)
- concept: combined_eval_approach
- anchor: "using direct assessment for compliance, and then leveraging the ranking algorithm that comes with the pairwise comparison to select the best output." (2:22–2:30)
- diluted: Combine direct assessment for compliance gating with pairwise ranking to pick the best compliant output.
- why_it_matters: Exactly OMNI's need: enforce policy compliance first, then choose the best among compliant candidates.
- omni_impact: change — define a compliance-gate-then-rank eval pipeline.
- landing_zone: BuildOS(P6) + boot/governance
- affected_artifacts: AI#12, eval_run, rubric_version, Governance cadence
- flag: new
- confidence: med
- requires_reread: no

### v43-07 — Benefit: scale
- concept: benefit_scale
- anchor: "First it scales. If you're generating hundreds or even thousands of outputs... LLM as a judge can handle that volume and give you feedback and evaluations in a structured way in a quick manner." (2:38–2:57)
- diluted: LLM judges evaluate large volumes of outputs quickly and in structured form, beyond human labeling capacity.
- why_it_matters: OMNI generates high volumes of AI outputs; manual eval doesn't scale.
- omni_impact: affirms automated eval at scale as an OMNI runtime requirement.
- landing_zone: BuildOS(P6)
- affected_artifacts: AI#12, eval_run, Build OS Runtime Proof
- flag: affirm
- confidence: high
- requires_reread: no

### v43-08 — Benefit: flexibility / criteria refinement (rubric drift)
- concept: benefit_flexibility_rubric_drift
- anchor: "it is really normal for your criteria to start shifting, and you might want to make changes to your rubric. LLM as a judge helps with the criteria-refinement process." (3:11–3:21)
- diluted: Evaluation criteria naturally drift as more data is seen; LLM judges support iterative rubric/prompt refinement.
- why_it_matters: OMNI must version and track rubric evolution, not freeze a single criterion.
- omni_impact: change — make `rubric_version` first-class and track criteria drift over time.
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage)
- affected_artifacts: AI#12, rubric_version, eval_run, audit
- flag: new
- confidence: med
- requires_reread: no

### v43-09 — Benefit: nuance (reference-free, beyond BLEU/ROUGE)
- concept: benefit_nuance
- anchor: "Traditional metrics like blue and rouge focus on word overlap... what if you don't have a reference?... is my output natural? Does it sound human? LLM as a judge lets you do these evaluations on more subjective outputs without a reference." (3:29–3:50)
- diluted: LLM judges capture subjective nuance (naturalness, human tone) that overlap metrics like BLEU/ROUGE can't, without needing a reference.
- why_it_matters: OMNI patient-facing tone/empathy quality needs nuanced eval, not n-gram overlap.
- omni_impact: affirms nuanced subjective evals for patient/provider communication quality.
- landing_zone: BuildOS(P6) + surface/projection(P5/P4)
- affected_artifacts: AI#12, Messaging contract, eval_run
- flag: affirm
- confidence: med
- requires_reread: no

### v43-10 — Drawback: positional bias
- concept: positional_bias
- anchor: "there's positional bias. And this means that an LLM will continue to favor an output... it continuously favors option A regardless of what is represented by option A." (4:02–4:27)
- diluted: Judges may favor an output based on its position (e.g., always A) rather than its quality.
- why_it_matters: Unmitigated, this silently corrupts OMNI eval results and any downstream selection.
- omni_impact: change — require positional-swap mitigation in OMNI eval harness.
- landing_zone: BuildOS(P6)
- affected_artifacts: AI#12, bias_check, positional_swap, eval_run
- flag: new
- confidence: high
- requires_reread: no

### v43-11 — Drawback: verbosity bias
- concept: verbosity_bias
- anchor: "There's also verbosity bias... when an evaluator continuously favors output that is longer regardless of its output... because it sees length as quality." (4:27–4:50)
- diluted: Judges may equate length with quality, favoring longer (even repetitive/off-track) outputs.
- why_it_matters: OMNI must not reward verbose clinical/patient outputs over correct concise ones.
- omni_impact: change — add verbosity-bias controls/normalization in evals.
- landing_zone: BuildOS(P6)
- affected_artifacts: AI#12, bias_check, eval_run
- flag: new
- confidence: high
- requires_reread: no

### v43-12 — Drawback: self-enhancement bias
- concept: self_enhancement_bias
- anchor: "a model might favor an output because it recognizes that it created the output. This is called self-enhancement bias." (4:50–5:10)
- diluted: A judge model may favor outputs it (or its family) generated, regardless of actual quality.
- why_it_matters: OMNI should avoid same-model judge+author pairings (echoes the Opus→Knox cross-review pattern).
- omni_impact: change — require judge/author model separation; record judge model identity.
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage)
- affected_artifacts: AI#12, judge_model, bias_check, eval_run
- flag: new
- confidence: high
- requires_reread: no

### v43-13 — Mitigation: positional swaps
- concept: positional_swap_mitigation
- anchor: "you can run positional swaps and see if the judgment changes... changing one thing from position A to position B and seeing if the model's output selection... changes." (5:25–5:41)
- diluted: Detect positional bias by swapping A/B positions and checking whether the verdict flips.
- why_it_matters: Concrete, implementable bias check OMNI can bake into its eval harness.
- omni_impact: change — store `positional_swap` result as part of every pairwise eval.
- landing_zone: BuildOS(P6)
- affected_artifacts: AI#12, positional_swap, eval_trace
- flag: new
- confidence: high
- requires_reread: no

### v43-14 — Bias ≠ broken; stay vigilant
- concept: bias_not_broken
- anchor: "Bias in LLMs doesn't mean that the system is completely broken. It just means that you need to stay vigilant." (5:41–5:47)
- diluted: The presence of bias doesn't invalidate LLM judging; it requires ongoing vigilance and controls.
- why_it_matters: Sets OMNI's posture — use judges as instruments with guardrails, don't discard them.
- omni_impact: affirms judge-with-guardrails posture rather than reject-or-trust-blindly.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: AI#12, Governance cadence, eval_run
- flag: affirm
- confidence: med
- requires_reread: no

### v43-15 — (Distillation) LLM judges are evidence, not authority
- concept: judge_is_evidence_not_authority
- anchor: "LLM judges should become evidence, not authority... they cannot be the final clinical, legal, payment, consent, or deployment authority." (§2 distillation)
- diluted: Judge outputs feed CNS/Runtime Proof/Governance as evidence but can never be the final authority on clinical, legal, payment, consent, or deployment decisions.
- why_it_matters: Core OMNI authority-gate principle — separates evaluative evidence from binding authority.
- omni_impact: change — codify judges as evidence-only; authority remains with owning domains/humans.
- landing_zone: thesis(P0) + boot/governance
- affected_artifacts: AI#12, CNS, authority gates, thesis §8
- flag: new
- confidence: high
- requires_reread: yes

### v43-16 — (Distillation) OMNI needs multiple eval types
- concept: multiple_eval_types
- anchor: "OMNI needs multiple eval types... Component evals... End-to-end evals... Rubric evals... Pairwise evals... Regression evals... Adversarial evals." (§2 distillation)
- diluted: OMNI requires a taxonomy of evals — component, end-to-end, rubric, pairwise, regression, adversarial — covering accuracy, experience, policy, selection, drift, and attack resistance.
- why_it_matters: Defines the breadth of proof obligations before any AI workflow is "implemented."
- omni_impact: change — enumerate the eval-type taxonomy in Build OS Runtime Proof.
- landing_zone: BuildOS(P6) + contract(P1: AI/Model Lineage)
- affected_artifacts: Build OS Runtime Proof, AI#12, eval_run
- flag: new
- confidence: high
- requires_reread: yes

### v43-17 — (Distillation) Bias checks + eval metadata are first-class
- concept: first_class_eval_metadata
- anchor: "It needs: rubric version / judge model/version / positional swap result / confidence / uncertainty / disagreement between judges / human override / escalation reason / final authority outcome." (§2 distillation)
- diluted: Don't just store a judge score — persist rubric version, judge model/version, swap result, confidence, inter-judge disagreement, human override, escalation reason, and final authority outcome.
- why_it_matters: Makes OMNI evals auditable and contestable, not opaque numbers.
- omni_impact: change — define a rich `eval_trace` schema with all listed metadata fields.
- landing_zone: contract(P1: AI/Model Lineage) + BuildOS(P6)
- affected_artifacts: AI#12, eval_trace, rubric_version, judge_model, human_override, audit
- flag: new
- confidence: high
- requires_reread: yes

### v43-18 — (Distillation) Strengthens Build OS Layer 4 Runtime Proof
- concept: strengthens_runtime_proof
- anchor: "Before any AI workflow is called 'implemented,' OMNI needs eval traces proving the system behaves under realistic, adversarial, and edge-case conditions." (§2 distillation)
- diluted: Eval traces become a gating proof obligation — no AI workflow is "implemented" without behavior proof under realistic/adversarial/edge conditions.
- why_it_matters: Ties evaluation directly into OMNI's stop-proof/lifecycle-closure discipline.
- omni_impact: change — add eval-trace requirement to Build OS Runtime Proof gate.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build OS Runtime Proof, Build Entry Gate, AI#12, eval_trace
- flag: new
- confidence: high
- requires_reread: yes

### v43-19 — (Distillation) The judge is a review instrument, not the court
- concept: judge_not_the_court
- anchor: "An AI judge is a review instrument, not an owning domain. Its outputs are evaluative evidence routed into CNS / Runtime Proof / Governance, never canonical truth by themselves." / "OMNI cannot... let the judge become the court." (§2 distillation)
- diluted: The LLM judge is an instrument feeding evidence into governed domains; it is never an owning domain or canonical truth on its own.
- why_it_matters: Prevents OMNI from accidentally elevating an eval tool into a truth/authority source (payload-noun ≠ domain).
- omni_impact: affirms/sharpens that evaluation is cross-cutting evidence, not a domain owning truth.
- landing_zone: thesis(P0) + boot/governance
- affected_artifacts: AI#12, CNS, Control Plane, thesis §3.5/§8
- flag: sharpen
- confidence: high
- requires_reread: yes

---

## v44 — Why Agentic AI Fails: Infinite Loops, Planning Errors, and More (IBM Technology, Meenakshi Kodati, May 14 2026; transcript + distillation) [HIGH PRIORITY]

### v44-01 — Failures are system-design failures, not hallucinations
- concept: failures_are_system_design
- anchor: "today, when an agent-ic AI systems fails, is it's less likely because of model failure or prompt quality. It's more likely that there are flaws in the system design." (0:27–0:38)
- diluted: Modern models are consistent enough that agentic failures are predominantly system-design failures, not random hallucinations.
- why_it_matters: Reframes OMNI agent reliability as an engineering/architecture obligation it can actually control.
- omni_impact: change — treat agent reliability as system-design discipline, not model luck.
- landing_zone: thesis(P0) + BuildOS(P6)
- affected_artifacts: AI#12, CNS, Build OS Runtime Proof, thesis AI-substrate section
- flag: sharpen
- confidence: high
- requires_reread: no

### v44-02 — Agentic system definition (observe/plan/act cycle, not LLM+tools)
- concept: agentic_system_definition
- anchor: "there's this common perception that agentic AI system is nothing but a large language model with access to tools. When in fact... it's a much bigger system that can Observe... in a cyclical or iterative format in order to drive more consistent results." (0:38–1:16)
- diluted: An agentic system is a larger observe/plan/act iterative loop, not merely an LLM with tools — which is why it has more failure modes.
- why_it_matters: Aligns with OMNI's Sense+Act two-loop operating model; agents are governed loops, not function calls.
- omni_impact: affirms OMNI Sense/Act loop framing applies to agent runtime.
- landing_zone: thesis(P0) + contract(P1: CNS)
- affected_artifacts: CNS, AI#12, thesis §8 (Sense+Act loops)
- flag: affirm
- confidence: high
- requires_reread: no

### v44-03 — Failure mode 1: Infinite loop
- concept: infinite_loop
- anchor: "the most common failure mode, which is the infinite loop... the agent repetitively performs similar or same tasks without making any meaningful progress... assume that this document... does not exist... it cannot get the answer because the document is non-existent." (1:41–3:24)
- diluted: An agent cycles search→evaluate→replan endlessly when a goal is unreachable (e.g., a nonexistent document), making no real progress.
- why_it_matters: Directly threatens OMNI search, clinical review, prior-auth, scheduling, and outreach loops.
- omni_impact: change — every OMNI agentic workflow must guard against non-terminating loops.
- landing_zone: contract(P1: CNS) + BuildOS(P6)
- affected_artifacts: CNS, agent_run_state, Build OS Runtime Proof, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v44-04 — Infinite-loop cause: no termination condition
- concept: cause_no_termination
- anchor: "one main reason this happens is that there is no proper termination condition... the agent doesn't know when to stop trying." (3:26–3:46)
- diluted: Without an explicit stop condition, an agent never knows when to give up.
- why_it_matters: Defines a mandatory OMNI primitive (`termination_condition`) for all agent runs.
- omni_impact: change — require explicit termination conditions on all OMNI agent workflows.
- landing_zone: contract(P1: CNS) + BuildOS(P6)
- affected_artifacts: CNS, termination_condition, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v44-05 — Infinite-loop cause: not tracking actions
- concept: cause_no_action_tracking
- anchor: "with each retry, we don't know whether the agent is actually searching differently... If we are not tracking the action of the agents, then we wouldn't know that. So not tracking actions." (3:46–4:11)
- diluted: Without action tracking, you can't tell whether retries actually change approach or just repeat the same failing action.
- why_it_matters: Enables OMNI to detect repeated identical actions and break loops.
- omni_impact: change — add action/retry fingerprinting to detect non-distinct retries.
- landing_zone: contract(P1: CNS) + BuildOS(P6)
- affected_artifacts: CNS, retry_fingerprint, action_similarity_score, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v44-06 — Infinite-loop cause: not tracking progress
- concept: cause_no_progress_tracking
- anchor: "The third reason is not tracking the progress of the agent... is it getting better results?... So lack of progress tracking." (4:11–4:30)
- diluted: Without progress tracking, an agent can't tell whether retries improve results, so it loops on no progress.
- why_it_matters: Progress deltas let OMNI exit gracefully when retries stop improving.
- omni_impact: change — add `progress_delta` scoring to agent runs.
- landing_zone: contract(P1: CNS) + BuildOS(P6)
- affected_artifacts: CNS, progress_delta, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v44-07 — Infinite-loop mitigation: termination budgets (steps/retries/runtime/cost)
- concept: mitigation_termination_budgets
- anchor: "set up a max retries, or it could be max number of steps... It could also be the max runtime usage. So that way, you're not stuck in this loop where you're wasting resources like compute and the API costs are going up." (4:37–5:06)
- diluted: Cap retries, steps, runtime, and cost so loops terminate before burning resources.
- why_it_matters: Direct cost-control + reliability lever for OMNI at scale.
- omni_impact: change — define max_step/retry/runtime/cost budgets per agent workflow.
- landing_zone: BuildOS(P6) + contract(P1: CNS)
- affected_artifacts: CNS, max_step_budget, AI#12, Build OS
- flag: new
- confidence: high
- requires_reread: no

### v44-08 — Infinite-loop mitigation: action tracking (compare to prior)
- concept: mitigation_action_tracking
- anchor: "you can also start doing the action tracking... compare them with previous actions and see if they're significantly different. If the search is similar across all the retries, then there's no point wasting your compute." (5:06–5:24)
- diluted: Compare each action to prior ones; abort if retries aren't meaningfully different.
- why_it_matters: Operationalizes loop-breaking via similarity detection in OMNI.
- omni_impact: change — implement action-similarity comparison to abort redundant retries.
- landing_zone: BuildOS(P6) + contract(P1: CNS)
- affected_artifacts: CNS, action_similarity_score, retry_fingerprint, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v44-09 — Infinite-loop mitigation: progress tracking + no-progress exit
- concept: mitigation_progress_tracking
- anchor: "Progress tracking will ensure that you are getting better outcomes with each retry... you can mitigate this infinite loop scenario if you're not getting better result with each retry." (5:29–5:49)
- diluted: Track result quality per retry and exit when no improvement is observed.
- why_it_matters: Gives OMNI a graceful "cannot complete" exit instead of silent burn.
- omni_impact: change — add `no_progress_exit` path tied to progress deltas.
- landing_zone: BuildOS(P6) + contract(P1: CNS)
- affected_artifacts: CNS, no_progress_exit, progress_delta, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v44-10 — Failure mode 2: Hallucinated planning (plausible vs possible)
- concept: hallucinated_planning
- anchor: "hallucinated planning... the agent is gonna come up with a plan that's plausible versus possible... book you flights to Milan that are under $500... it will fail at execution because you probably did not configure that agent with access to the travel API." (5:51–7:04)
- diluted: An agent produces a beautiful plan that assumes tools/permissions/data it doesn't actually have, so it fails at execution.
- why_it_matters: OMNI must never let AI generate impossible care/commerce plans that fail mid-execution.
- omni_impact: change — require plan validation against actual capabilities before execution.
- landing_zone: contract(P1: CNS) + BuildOS(P6)
- affected_artifacts: CNS, plan_proposal, capability_manifest, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v44-11 — Hallucinated-planning cause: tool capabilities not well-defined
- concept: cause_undefined_tool_capabilities
- anchor: "it can happen because your tool capabilities are not well-defined. So the agent doesn't know what your tools can and cannot do." (7:25–7:40)
- diluted: When tools lack clear capability definitions, agents guess at what tools can do and plan around fictions.
- why_it_matters: OMNI needs typed, well-described tool schemas so agents plan against reality.
- omni_impact: change — require `tool_capability_schema` for every OMNI tool.
- landing_zone: contract(P1: RBAC) + BuildOS(P6)
- affected_artifacts: tool_capability_schema, RBAC, CNS, Build OS Command/Tool layer
- flag: new
- confidence: high
- requires_reread: no

### v44-12 — Hallucinated-planning cause: no plan/execute separation (no validation)
- concept: cause_no_plan_validation
- anchor: "asking this agent to plan and execute without separating those two things out. So basically there is no validation of the plan that's happening before the plan gets executed." (7:40–7:57)
- diluted: Merging planning and execution removes the validation step, so impossible plans run and error out.
- why_it_matters: Reinforces OMNI's "AI proposes, runtime validates, authorized actor executes" separation.
- omni_impact: change — enforce a distinct validation phase between plan and execution.
- landing_zone: contract(P1: CNS) + thesis(P0)
- affected_artifacts: CNS, plan_validation_result, execution_allowed, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v44-13 — Hallucinated-planning cause: assuming capabilities vs checking constraints
- concept: cause_assuming_capabilities
- anchor: "the agent is assuming capabilities instead of checking for constraints. Constraint shape." (8:03–8:17)
- diluted: Agents assume capabilities exist rather than checking actual constraints before planning.
- why_it_matters: OMNI must force constraint checks (authority, tenant, inputs) into planning.
- omni_impact: change — add `constraint_check` / `missing_requirement` gates pre-execution.
- landing_zone: contract(P1: CNS) + contract(P1: RBAC)
- affected_artifacts: constraint_check, missing_requirement, CNS, RBAC, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v44-14 — Hallucinated-planning mitigation: clear tool schemas
- concept: mitigation_clear_tool_schemas
- anchor: "you should start describing your tools very clearly to the agent. Clearly describe what the tools can cannot do. Clearly define the tool schema and let the agent understand the capabilities and limitations." (8:20–8:35)
- diluted: Give agents explicit, accurate tool schemas describing capabilities and limits.
- why_it_matters: Foundational input so OMNI agents plan within real tool boundaries.
- omni_impact: change — mandate documented capability/limitation schemas per tool.
- landing_zone: BuildOS(P6) + contract(P1: RBAC)
- affected_artifacts: tool_capability_schema, RBAC, Build OS Command/Tool layer
- flag: new
- confidence: high
- requires_reread: no

### v44-15 — Hallucinated-planning mitigation: verifier agent or HITL between plan & execute
- concept: mitigation_verifier_agent
- anchor: "go with architectures such as multi-agent. Where there is a verifier agent in between planning and executing... You could also have a human in the loop instead of a verifying agent for more serious and high-risk plans." (8:35–9:05)
- diluted: Insert a verifier agent (or human for high-risk) to validate plans before execution.
- why_it_matters: Concrete pattern matching v42's supervisor gate and OMNI's authority gates.
- omni_impact: change — define verifier-agent / HITL validation step keyed to risk tier.
- landing_zone: contract(P1: CNS) + boot/governance
- affected_artifacts: CNS, supervisor_validation, human_authorization_event, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v44-16 — Hallucinated-planning mitigation: specify constraints + ask before assuming
- concept: mitigation_specify_constraints
- anchor: "make sure that you clearly specify the constraints... instruct the agent to ask for clarification before making assumptions. The agent could say, do you want me to use a travel API..." (9:05–9:28)
- diluted: Explicitly state constraints and instruct agents to request clarification rather than assume.
- why_it_matters: Supports OMNI's "right context/right authority" by surfacing ambiguity instead of guessing.
- omni_impact: change — require clarification-seeking behavior + explicit constraint specs for agents.
- landing_zone: contract(P1: CNS) + boot/governance
- affected_artifacts: CNS, constraint_check, Agent Work Protocol, AI#12
- flag: new
- confidence: high
- requires_reread: no

### v44-17 — Failure mode 3: Unsafe tool use (valid but destructive)
- concept: unsafe_tool_use
- anchor: "the final failure mode, which is the unsafe tool use... an agent executes an action that is technically valid, but could be risky, destructive, or unintended. This happens mainly because the tools are overprivileged... deleting active records... sends... emails... with content that has not been reviewed." (9:37–10:32)
- diluted: Overprivileged tools let agents take technically-valid but destructive/unintended actions (delete live records, send unreviewed emails).
- why_it_matters: For OMNI this is existential — wrong actions on PHI, meds, refunds, appointments, or the codebase.
- omni_impact: change — every OMNI tool must be risk-tiered and guarded against destructive misuse.
- landing_zone: contract(P1: RBAC) + boot/governance
- affected_artifacts: RBAC, tool_risk_tier, destructive_action_guard, CNS, audit
- flag: new
- confidence: high
- requires_reread: no

### v44-18 — Unsafe-tool cause: no approval workflow
- concept: cause_no_approval_workflow
- anchor: "this also happens when there is no proper approval workflow in place." (10:32–10:43)
- diluted: Missing approval workflows let high-risk actions execute unchecked.
- why_it_matters: OMNI needs approval gates for high-risk care/commerce actions.
- omni_impact: change — require approval workflows for high-risk tool actions.
- landing_zone: contract(P1: RBAC) + boot/governance
- affected_artifacts: approval_required, RBAC, CNS, audit
- flag: new
- confidence: high
- requires_reread: no

### v44-19 — Unsafe-tool cause: no read/write/delete distinction
- concept: cause_no_access_tiers
- anchor: "It also happens when there is no clear distinction between the read and write axis that you give these tools." (10:43–10:55)
- diluted: Failing to separate read vs write vs delete access lets a tool do more than intended.
- why_it_matters: OMNI tool permissions must be access-typed to prevent over-reach.
- omni_impact: change — type tools by read/write/delete boundaries.
- landing_zone: contract(P1: RBAC)
- affected_artifacts: read_write_delete_boundary, RBAC, tool_risk_tier
- flag: new
- confidence: high
- requires_reread: no

### v44-20 — Unsafe-tool mitigation: least privilege (permission design)
- concept: mitigation_least_privilege_tools
- anchor: "it's important to give only those privileges that are needed to the tools... mitigation starts with permission design in this scenario." (10:58–11:20)
- diluted: Grant tools only needed privileges; mitigation begins at permission design.
- why_it_matters: Reinforces OMNI capabilities-first, default-deny tool design.
- omni_impact: affirms least-privilege tool permissioning.
- landing_zone: contract(P1: RBAC)
- affected_artifacts: agent_permission_scope, RBAC, capabilities
- flag: affirm
- confidence: high
- requires_reread: no

### v44-21 — Unsafe-tool mitigation: approval workflow / HITL for high-risk
- concept: mitigation_approval_workflow
- anchor: "create a proper approval workflow for high-risk tasks. If needed, have a human in the loop to review the task before it's sent for execution." (11:20–11:34)
- diluted: Route high-risk tasks through approval workflows with optional human review before execution.
- why_it_matters: Maps to OMNI authority gates for destructive/clinical/financial actions.
- omni_impact: change — bind approval/HITL gates to high-risk tool tiers.
- landing_zone: boot/governance + contract(P1: RBAC)
- affected_artifacts: approval_required, human_authorization_event, RBAC, CNS, audit
- flag: new
- confidence: high
- requires_reread: no

### v44-22 — Unsafe-tool mitigation: tier tools by access type
- concept: mitigation_tool_tiers
- anchor: "separate the tools into tiers based on the kind of access... whether they have the read axis or write axis or a delete axis. That will ensure that one tool doesn't go ahead and commit actions that it's not supposed to be doing." (11:34–11:51)
- diluted: Organize tools into access tiers (read/write/delete) to constrain what each can do.
- why_it_matters: Concrete tiering scheme OMNI can adopt for its tool catalog.
- omni_impact: change — define explicit tool risk/access tiers in the OMNI tool registry.
- landing_zone: contract(P1: RBAC) + BuildOS(P6)
- affected_artifacts: tool_risk_tier, read_write_delete_boundary, RBAC, Build OS Command/Tool layer
- flag: new
- confidence: high
- requires_reread: no

### v44-23 — Principle of least agency (not just least privilege)
- concept: principle_of_least_agency
- anchor: "it's always good to adopt a principle of least agency. With the tools because mitigation starts with permission design." (11:03–11:20)
- diluted: Beyond least privilege, give agents the minimum *autonomy* needed for the task — least agency.
- why_it_matters: A sharper, durable OMNI doctrine term distinguishing autonomy scope from permission scope.
- omni_impact: change — adopt "least agency" as a binding OMNI agent-runtime principle.
- landing_zone: thesis(P0) + boot/governance
- affected_artifacts: AI#12, RBAC, CNS, thesis AI-substrate section, Guardrail digest
- flag: new
- confidence: high
- requires_reread: yes

### v44-24 — Root causes: too much autonomy / too little constraint / no monitoring → engineering discipline
- concept: root_cause_summary
- anchor: "they happen because of too much autonomy or too little constraint. Or they also happen because there is no proper monitoring or tracking in place... engineering discipline is key to building reliable agents." (12:11–12:30)
- diluted: Agentic failures stem from excess autonomy, insufficient constraint, or missing monitoring; engineering discipline is the cure.
- why_it_matters: Ties the whole cluster together and matches OMNI's Build OS / Anthropic-style engineering-discipline borrow.
- omni_impact: affirms engineering-discipline doctrine across CNS + Build OS for agent reliability.
- landing_zone: thesis(P0) + BuildOS(P6) + boot/governance
- affected_artifacts: AI#12, Build OS, CNS, thesis §3.5 (Anthropic comparator), Guardrail digest
- flag: affirm
- confidence: high
- requires_reread: no

### v44-25 — (Distillation) AI proposes; runtime validates; authorized actor executes
- concept: propose_validate_execute_doctrine
- anchor: "This reinforces the doctrine: AI proposes; deterministic runtime validates; authorized humans/domains execute or commit." (§2 distillation)
- diluted: Canonical OMNI separation: AI generates proposals, a deterministic runtime validates them, and only authorized humans/domains commit.
- why_it_matters: The unifying authority-gate doctrine spanning v41–v44; the spine of safe OMNI agency.
- omni_impact: change — codify propose→validate→execute as a binding AI-substrate rule.
- landing_zone: thesis(P0) + boot/governance + contract(P1: CNS)
- affected_artifacts: AI#12, CNS, authority gates, RBAC, thesis §8
- flag: new
- confidence: high
- requires_reread: yes

### v44-26 — (Distillation) Binding AI-runtime rule: bounded autonomy / agent OS
- concept: bounded_autonomy_agent_os
- anchor: "OMNI agents must operate inside explicit termination conditions, capability manifests, plan-validation gates, progress tracking, action traces, permission tiers, and approval workflows. No agent may infer its own tool authority, assume unavailable capabilities, continue indefinitely without progress, or execute high-risk actions without an owning-domain authorization path." (§2 distillation)
- diluted: OMNI needs a true agent operating system with bounded autonomy — termination conditions, capability manifests, plan-validation gates, progress/action tracking, permission tiers, and approval workflows as non-negotiables.
- why_it_matters: Distillation flags this as a "don't miss for a 1BN company" lesson — the difference between demo and durable substrate.
- omni_impact: change — establish a binding agent-runtime rule and an OMNI agent-OS spec.
- landing_zone: thesis(P0) + BuildOS(P6) + boot/governance
- affected_artifacts: AI#12, CNS, RBAC, Build OS Runtime Proof + Command/Tool layer, Guardrail digest, thesis AI-substrate section
- flag: new
- confidence: high
- requires_reread: yes

---

## Per-video concept count

| video | source type | concepts | priority |
|---|---|---|---|
| v41 — Agentic Runtime Security / Non-Human Identities | transcript-only | 20 | standard |
| v42 — Hierarchical AI Agents | transcript + distillation | 24 | HIGH |
| v43 — LLM as a Judge | transcript + distillation | 19 | HIGH |
| v44 — Why Agentic AI Fails | transcript + distillation | 26 | HIGH |
| **total** | — | **89** | — |

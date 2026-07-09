# EVSRC-2026-000210 — Making AI Agents Work in the Real World (coordination-layer patterns) `TK (inferred title)`

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000210_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000210`  ·  filename (proposed; file NOT renamed by this agent — Opus-main renames on fold): `EVSRC-2026-000210_ai-agents-real-world-coordination-layers.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=4Vg2aVtrX8k`  ·  source_title: `Building AI Agents for Real-World Problems & Workflows`
- channel_or_org: `IBM Technology`  ·  speaker: `Shailaja Patel-Pranav`  ·  published_at: `Jun 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `screenshot + pasted transcript`
- content_type: `production AI agents / workflow coordination / policy-governed execution / human-in-the-loop / state management / exception handling / triage / routing`  ·  source_reliability_context: `IBM enterprise-agent explainer. Very aligned with OMNI's CNS doctrine; useful for production agent patterns and coordination-layer vocabulary (`GRD-039`).`  ·  topic_tags_light: `[ai_agents, coordination_layer, CNS, workflow_orchestration, policy_governed_execution, HITL, exception_handling, triage_routing, onboarding, IT_support, invoice_order, customer_service, integration_over_isolation]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Shailaja Patel-Pranav` · role_in_source: `presenter/narrator` · affiliation_at_publication: `IBM Technology` · speaker_type: `educator/vendor-practitioner` · authority_context: `IBM enterprise-agent explainer; the value is a clean coordination-layer pattern-catalog, not speaker authority — corroborate strong claims (`GRD-039`)` · identity_confidence: `high_from_operator_metadata`
  - *(no additional speakers — solo voiceover)*
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `n/a (solo explainer)`
- event_context: `~7.5-min voiceover/whiteboard explainer arguing production agents succeed as governed coordination layers inside existing systems, not as standalone decision makers — walked through 5 recurring patterns (onboarding · IT support · invoice/order · customer service · triage-under-load).`  ·  perspective / conflict notes: `Vendor/tooling-adjacent framing (generic "AI agent" enterprise pitch). Knox rates 4.25/5 as a clean external AFFIRM of OMNI's CNS doctrine. No conflict with OMNI; the only watch-item is that "HITL should be targeted not blanket" sits in mild tension with care-domain fail-closed conservatism.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [ ] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename (slug proposed in §0; file NOT renamed — Opus-main folds) · [x] §0 metadata (inferred; no screenshot) · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source — Opus-main folds) · [ ] update coverage matrix (Opus-main folds) · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
Today, there's a lot of excitement around AI agents.
0:03
We've seen impressive demos of agents that plan, reason,
0:13
and act across tools.
0:16
But the real question isn't whether we can build them or not.
0:20
The real question is what it takes to make an AI agent effective in real-world environments.
0:26
When agents move from demo into production systems,
0:30
many fall short, not because technology is incapable,
0:34
but because real-world problems are complex, constrained, and interconnected.
0:40
So instead of focusing on what AI agents are, I want to focus on how they behave in practice
0:46
when embedded into real world systems.
0:49
Most real world agent problems share the same core challenges.
0:54
The first one, they span across multiple systems.
1:00
Second one, they involve a lot of policies, approvals, and rules,
1:06
they must fit into existing workflows,
1:11
and the human should always be in the loop.
1:16
Because of this, successful agents aren't standalone decision makers.
1:21
They act like coordination layers,
1:24
maintaining context, orchestrating actions across systems, enforcing
1:29
rules, and determining when control needs to be transitioned to a human.
1:35
A common pattern in real-world agent system is coordinating a sequence of
1:40
actions across multiple systems while managing state,
1:48
timing,
1:51
rules, and exception.
1:56
This pattern shows up anywhere a single event triggers a multi-step workflow with dependencies.
2:04
One concrete example of this pattern is onboarding a new employee.
2:11
Onboarding isn't an easy task.
2:14
It's a workflow composed of many steps, starting with provisioning, access and entitlements,
2:21
ordering required resources, scheduling initial activities, assigning required trainings and tracking them to completion.
2:32
In this use case, agents don't replace people.
2:37
It uses context-based signals such as roles, location, and start date to sequence actions across systems,
2:47
monitor workflow state, and flag deviation from expected behavior.
2:52
The hard part isn't reasoning.
2:54
It's reliably orchestrating multiple systems while respecting policy and timing constraints.
3:02
Another recurring pattern is policy-governed action execution, where risk, rules, and access control shape
3:11
what actions a system is allowed to take.
3:14
This pattern appears whenever a system is handling incoming requests with very level of sensitivity or impact.
3:23
IT support is a good representation of this pattern.
3:26
In this case, agent may process requests such as passwords, software
3:33
or hardware resources, any requests that come through,
3:40
ticketing, and routing of any requests.
3:45
Some requests follow a well-defined and low-risk execution path.
3:50
Others require validation, approval, and sometimes escalations.
3:55
An effective agent in this case interrupts requests intent, evaluates the applicable policies,
4:04
automatically executes some of the permitted actions, escalates any ambiguous or high-risk cases.
4:14
This shows the explicit control boundaries.
4:18
The system behaves predictably and humans step in precisely where the rules need them to.
4:25
In other cases, agents operate inside a well-defined processes where exceptions are the real challenge.
4:33
This pattern shows up in systems such as invoice processing or order management.
4:39
In this case, an agent may,
4:41
extract
4:45
structural data, match it against the existing record, validate it
4:56
against rules or concerns,
4:58
or route approval and lastly, update the downstream systems.
5:08
This is a happy path.
5:11
Which is straightforward.
5:13
The real complexity lies in handling missing data, mismatch data, or any non-standard conditions.
5:24
Agents add value by consistently handling predictable flows and surfacing only through exception for human reviews.
5:33
Another important pattern involves triaging and routing large volumes of incoming work.
5:40
This pattern appears wherever the system needs to prioritize attention under load.
5:46
A customer service is a great example for this.
5:50
Here an agent
5:52
must analyze
5:58
and categorize incoming requests.
6:02
Route
6:05
work to the appropriate teams,
6:07
and suggest responses based on historical data.
6:15
Humans still resolve the issues, but agents ensure the priority, context, and routing decisions are applied consistently at scale.
6:26
The pattern holds regardless of where the work originates.
6:30
Across all the patterns that we saw, regardless of the domain, the same characteristics apply.
6:38
A successful AI agents are narrowly scoped, they orchestrate across systems, apply rules, and relate its signals.
6:56
Keep human in the loop and are designed for integration and not isolation.
7:05
These systems don't feel like flashy AI features.
7:09
They feel like well-designed components of a larger architecture.
7:13
The real power of AI agents is in the autonomy.
7:17
It's its alignment with real workflows, limits, and control structures.
7:23
When agents are designed around coordination, rules and accountability.
7:29
They stop being experiments and start operating as reliable components in production systems.
7:36
That's what it takes to make AI agents work in the real world.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️


IBM — Real-World AI Agent Workflows

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=4Vg2aVtrX8k
source_title: Building AI Agents for Real-World Problems & Workflows
channel_or_org: IBM Technology
speaker: Shailaja Patel-Pranav
published_at: approx late Jun 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: screenshot + pasted transcript
content_type: production AI agents / workflow coordination / policy-governed execution / human-in-the-loop / state management / exception handling / triage / routing
source_reliability_context: IBM enterprise-agent explainer. Very aligned with OMNI’s CNS doctrine. Useful for production agent patterns and coordination-layer vocabulary.
priority: 4.25/5
depth: full_semantic_for_CNS
recommended_status: route to CNS spine, Agent Work Protocol, RBAC, Settings, OFC, D5, Messaging, Build-OS, Ops Command Center.

Topic tags:
[real_world_agents, coordination_layer, policy_governed_execution, exception_surface, control_transition_protocol, HITL, workflow_orchestration, state_timing_rules_exceptions, triage_routing, OFC, care_obligation, CNS]



Priority: 4.25/5
Depth: full semantic for CNS / workflow-agent doctrine, medium for new primitives
Recommended status: route to CNS spine / Agent Work Protocol / RBAC / Settings / OFC / D5 / Messaging / Build-OS / Ops Command Center. This is not flashy, but it is extremely OMNI-aligned.

Core takeaway

This video says the quiet part very clearly:

Real-world agents are not standalone decision makers. They are coordination layers inside existing systems.

That is basically OMNI’s CNS doctrine in plain enterprise language.

The speaker says production agents fail not because AI is incapable, but because real-world problems are complex, constrained, interconnected, policy-bound, approval-bound, and workflow-dependent.

OMNI translation:

The agent is not the product. The governed workflow is the product. The agent maintains context, orchestrates actions, applies rules, manages state, detects exceptions, and hands control to humans when needed.

This strongly affirms OMNI’s move away from “AI assistant” toward Sense → Decide/Resolve → Act → Prove/Learn.

Key concepts to preserve
1. Agents as coordination layers

The strongest line:

successful agents are coordination layers, not autonomous decision makers.

They maintain context, orchestrate across systems, enforce rules, and determine when control transitions to a human.

OMNI keeper: this is CNS.

This maps directly to:

source event
candidate
resolver
owning-domain commit
escalation
queueing
context packet
action authorization
human handoff

Do not create a new “agent domain.” This is CNS + domain contracts + RBAC.

2. Real-world agents span multiple systems

The video emphasizes that real workflows involve many systems, not one neat app.

OMNI keeper: agents must operate across:

Identity
D3 Scheduling
D5 Service Occurrence
D6 Commerce
D7 Documents
Observation
Clinical Memory
OFC
Messaging
Federation
RBAC
Settings
BIZOPS

This affirms the whole decomposed OMNI architecture.

An agent cannot own these truths. It coordinates across them.

3. Policy-governed action execution

The IT-support example is important.

Some requests are low-risk and well-defined. Others require validation, approval, escalation, or ambiguity handling.

OMNI keeper: agent action must be policy-routed by risk and authority.

This lands in:

RBAC
Settings policy definitions
CNS resolver
REV-184 governed resolution lifecycle
action risk tiers
HITL thresholds
deterministic permit gates

Doctrine candidate:

An agent may execute only inside an explicit policy boundary; outside it, it escalates.

4. State, timing, rules, and exceptions

The onboarding example gives a good operational pattern:

provisioning
access
entitlements
resources
scheduling
training
completion tracking
deviation detection

The video says the hard part is not reasoning. The hard part is reliable orchestration across systems while respecting policy and timing constraints.

OMNI keeper: this is OFC + CNS.

OMNI analogues:

new patient onboarding
GLP-1 intake → labs → approval → Rx → follow-up
TRT workup → labs → provider review → therapy
SNF admission workflow
staff training / competency clearance
service occurrence closeout
refill / recall / retest obligations
membership entitlement fulfillment

This source strongly affirms care_obligation and fulfillment_order.

5. Exception-first automation

The invoice/order example is useful because it separates happy path from exception handling.

Agents add value by consistently handling predictable flows and surfacing only true exceptions for human review.

OMNI keeper:

Automate the boring path. Escalate the exception path.

This is exactly how OMNI should handle:

insurance/prior auth workflows
lab order fulfillment
payment mismatch
missing consent
abnormal result routing
intake contradiction
failed message delivery
scheduling conflict
vendor failure
incomplete documentation

Potential primitive:

exception_surface

A projection/workspace where agent-detected deviations are routed to humans with context, rule basis, and recommended next step.

6. Triage and routing under load

The customer-service pattern is another CNS fit:

analyze incoming work
categorize it
route to the right team
suggest responses
prioritize attention under load

OMNI keeper: agent value is often attention allocation, not final resolution.

This maps to:

provider task workspace
patient message triage
intake review queue
abnormal lab queue
staff ops queue
owner dashboard
campaign queue
Build-OS issue queue

Doctrine candidate:

Agents should prioritize and prepare work before they resolve work.

7. Humans remain in the loop, but precisely

The source does not say “humans approve everything.” It says humans step in where rules need them.

That matters.

OMNI translation:

Human-in-the-loop should be targeted, not decorative.

Humans enter when:

risk tier is high
policy requires approval
ambiguity exceeds threshold
domain commit requires licensed authority
exception detected
confidence/proof insufficient
patient/clinical/legal/financial impact is meaningful

Doctrine candidate:

HITL is a control transition, not a blanket slogan.

8. Integration over isolation

The closing line matters: successful agents are narrowly scoped, integrated, rule-applying, signal-relating components of a larger architecture.

OMNI keeper:

Agents should feel like reliable architectural components, not flashy AI features.

This fits OMNI perfectly.

No agent gods. No giant assistant. No autonomous black box.

Narrow agents inside governed lanes.

Likely OMNI landing zones

CNS

coordination-layer doctrine
stateful workflow orchestration
exception routing
triage under load
control transition to human

RBAC

policy-governed action execution
permitted vs approval-required vs escalated actions
authority boundary before execution

Settings

policy definitions
routing rules
service/workflow configuration
escalation thresholds

OFC

fulfillment_order
care_obligation
due/training/recall/exception lifecycle
tracking to completion

D5

actualized work
service occurrence work items
workflow completion state

Messaging

customer/patient request intake
suggested responses
human-send gates

BIZOPS / Workforce Intelligence

employee onboarding
training assignment
competency tracking
staff task routing

Build-OS

agentic SDLC orchestration
issue triage
test/release exception routing
CI/CD agent workflows
Doctrine candidates
Agents are coordination layers, not standalone decision makers.
The hard part is not reasoning; it is reliable orchestration under policy, timing, state, and exception constraints.
An agent may execute only inside an explicit policy boundary; outside it, it escalates.
Automate predictable flows; surface true exceptions.
HITL is a control transition, not a slogan.
Agents should prioritize and prepare work before they resolve work.
Production agents must be narrowly scoped, integrated, rule-bound, and accountable.
The agent is not the product; the governed workflow is the product.
Net-new / sharpen / affirm
Net-new candidates

control_transition_protocol
Rules for when an agent hands control to a human, including reason, context packet, rule basis, urgency, and recommended next action.

exception_surface
A human workspace/projection for agent-detected deviations, missing data, mismatches, ambiguous requests, and high-risk cases.

policy_governed_agent_lane
A workflow lane where low-risk actions can be executed automatically, medium-risk actions require validation/approval, and high-risk/ambiguous cases escalate.

Sharpen existing

CNS_as_coordination_layer
This video is a clean external AFFIRM.

care_obligation / fulfillment_order
The onboarding and order/invoice examples sharpen state/timing/completion tracking.

workflow_lane_as_architecture_unit
Each agent pattern is lane-specific: onboarding, IT support, invoice/order, customer service.

RBAC + Settings composition
Policy definitions and authority gates shape what the agent can do.

Ops Command Center
Triage/routing under load needs a surface.

Affirm
agents should be narrow
agents coordinate across systems
humans remain in the loop at control boundaries
rules and approvals matter
exceptions are the real work
integration beats isolation
agent demos fail when production constraints are ignored
Reject / do not over-import
Do not create an “AI agent” domain.
Do not treat the agent as the owner of workflow truth.
Do not let the model decide its own policy boundary.
Do not make HITL vague or universal.
Do not confuse coordination with authority.
Do not assume autonomous execution is the highest maturity state.
Hard read

This is a CNS spine-affirmer.

It says exactly what OMNI has been converging toward:

Real agents do not replace the enterprise workflow. They sit inside it, maintain context, coordinate across systems, apply policy, track state, detect exceptions, and hand control to humans at defined boundaries.

Shortest OMNI version:

OMNI agents should not be autonomous geniuses. They should be governed workflow coordinators: narrow, integrated, policy-bound, state-aware, exception-sensitive, and accountable to human/domain authority.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Formalizes Knox Review 001 (priority 4.25/5; full-semantic for CNS/workflow-agent doctrine, medium for primitives); does not re-derive.** Grounded vs §1 verbatim. Tier = **full/high** (Knox depth: this is a CNS spine-affirmer). Two-axis reality-check: `doctrine` (vs thesis v3 + domain contracts + post-v3 CNS/`REV-184`/`REV-158`) + `build` (repo grep from `/Users/bloomfrontdesk1/Desktop/main-app` on 2026-07-07: `lib/rules/runtime/dispatcher.ts` · `lib/workflows/onPatientWorkflowEvent.ts` · `lib/intake/runtime/resolve-emissions.ts` · `lib/auth/capabilities.ts` (`requireCapability`) · `lib/pathways/sensitivity-registry.ts` · `repo/rules/**` (clinical_decision/pharmacy_lifecycle/fulfillment_lifecycle) · `lib/orders/updateFulfillment.ts` · `lib/inbox/**` · `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` — the v2/v3 governed **care** build exists; NO unified CNS resolver spine, NO exception-workspace surface, NO ops-command-center as named). Binds nothing (`GRD-036`/`GRD-044`).

**HEADLINE VERDICT.** A **clean external AFFIRM of OMNI's CNS spine in plain enterprise language** — *"successful agents aren't standalone decision makers… they act like coordination layers"* [1:21-1:24]. Zero net-new *frame*; it restates candidate→resolver→owning-domain-commit + RBAC/authority-gates + OFC obligation lifecycle + targeted-HITL as recurring enterprise patterns. **Do NOT create an "AI agent" domain** (`GRD-026`/`GRD-035` — no god-domain). Import as **CNS + Agent-Work-Protocol vocabulary**, not thesis edits. Knox proposes 3 primitives — on dedup, **all 3 collapse to existing OMNI mechanisms** (net-new NAME at most; one is a straight re-mint to reject). Doctrine roll-up = overwhelmingly AFFIRM; the yield is a **doctrine-vs-build gap** (CNS coordination doctrine is settled; the unified CNS spine + exception/triage surfaces are largely uncoded). Convergent with **201** (workflow-lane-is-the-unit; no agent-god) and **202** (governed loop; agent≠owner-of-truth; verification/authority is the boundary).

### A. Concept clusters (full tier)

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **agents = coordination layers, not standalone decision makers** ("agent is not the product; the governed workflow is") | This IS CNS: source-event → candidate → resolver → owning-domain commit → escalation; the agent coordinates, domains+humans commit truth | CNS (primary) · thesis §8 two-loops · Agent-Work-Protocol · `cns_action_orchestration_adr` | "they act like coordination layers" [1:24]; "maintaining context, orchestrating actions… enforcing rules" [1:27] | AFFIRM | partial | none | spine | watch |
| 2 | **real-world agents span multiple systems** (no single neat app) | Confirms decomposed OMNI: agent operates ACROSS Identity/D3/D5/D6/D7/Observation/Clinical-Memory/OFC/Messaging/Federation/RBAC/Settings/BIZOPS — an agent cannot OWN these truths | thesis §8 domain decomposition · §A no-god-domain · all domain contracts | "they span across multiple systems" [0:54] | AFFIRM | present | none | spine | watch |
| 3 | **policy-governed action execution** (risk/rules/access-control shape allowed actions; permit vs approve-required vs escalate) | Agent action is authority-routed by risk tier: deterministic permit-gates + `requireCapability` + HITL thresholds; outside the boundary → escalate | RBAC · `lib/auth/capabilities.ts` · Settings policy defs · CNS resolver · `REV-184` governed resolution · `sensitivity-registry` | "risk, rules, and access control shape what actions" [3:02]; "automatically executes… permitted actions, escalates… high-risk" [4:04] | AFFIRM | partial | none | spine | watch |
| 4 | **state/timing/rules/exceptions orchestration — "the hard part isn't reasoning"** (onboarding: provision→access→resources→schedule→train→track→deviation) | OFC + CNS: the value is reliable multi-system orchestration under policy+timing, not model IQ; maps to intake→labs→approval→Rx→follow-up, recall/retest/refill obligations | OFC (`care_obligation`/`fulfillment_order`) · CNS · D5 service-occurrence · `lib/workflows` · `repo/rules/**` lifecycle | "the hard part isn't reasoning" [2:52]; "reliably orchestrating multiple systems… policy and timing" [2:54] | AFFIRM | partial | none | spine | watch |
| 5 | **exception-first automation** (automate the boring/happy path; surface only true exceptions with context) | AI proposes on predictable flows; deviations (missing/mismatch/ambiguous) route to humans with context+rule-basis+recommended-next → a projection, not truth (projection≠truth) | CNS exception routing · OFC · surfaces/projections · Messaging · (net-new watch `exception_surface`) | "handling missing data, mismatch data… non-standard conditions" [5:13]; "surfacing only… exception for human reviews" [5:24] | PARTIAL | absent | none | vocabulary | watch |
| 6 | **triage & routing under load** (analyze→categorize→route→suggest→prioritize; value = attention allocation, not final resolution) | Agent value is often preparing/prioritizing work, not resolving it: message triage, abnormal-lab queue, intake-review queue, provider task workspace, owner dashboard | CNS · Messaging triage · surfaces (Ops Command Center) · `lib/inbox` · D5 work-items · BIZOPS | "triaging and routing large volumes of incoming work" [5:33]; "route work to the appropriate teams" [6:05] | PARTIAL | partial | none | vocabulary | watch |
| 7 | **HITL = targeted control transition, not a blanket slogan** (humans step in precisely where rules need them) | Human enters at defined boundaries: high risk-tier · policy-required approval · ambiguity>threshold · licensed-authority commit · exception · insufficient proof — a *control transition* with a reason payload | Agent-Work-Protocol §8 checkpoint · CNS human-handoff · RBAC · clinical review gates · `autonomy_level` | "humans step in precisely where the rules need them" [4:18] | AFFIRM | partial | tension (other pole: care-domain fail-closed conservatism biases toward MORE human review) | spine | watch |
| 8 | **integration over isolation; narrowly-scoped accountable agents** ("well-designed components… not flashy AI features") | No agent gods, no giant assistant, no autonomous black box; narrow agents inside governed lanes = reliable architectural components | thesis §1 AI-proposes law · §B model-pluggable-at-substrate-not-care · `GRD-026`/`GRD-035` · Build-OS | "designed for integration and not isolation" [6:38]; "narrowly scoped" [6:38] | AFFIRM | n/a | none | vocabulary | watch |

### B. Net-new primitives (dedup vs existing registry + wave-3 minted — **dedup-pending, Opus-main verifies**)
Knox Review 001 proposes 3. On dedup vs the run baseline (CNS/candidate≠commit · workflow_lane_as_architecture_unit · capability_envelope · delegated_authority_envelope · non_human_actor · autonomy_level · source_authority · consent-specificity · projection≠truth · per-event-ownership · context_packet + wave-3 minted list) → **none are genuinely net-new mechanisms:**

- `control_transition_protocol` — the payload/rules for an agent→human handoff (reason · context packet · rule basis · urgency · recommended next action). **EXISTS-AS: net-new NAME only; mechanism = `autonomy_level` + Agent-Work-Protocol §8 checkpoint + CNS human-handoff + `context_packet`.** Formalize as the *handoff-payload schema* of the existing HITL mechanism; do NOT mint a new god-primitive. (dedup-pending, Opus-main verifies.)
- `exception_surface` — a human workspace/projection for agent-detected deviations (missing/mismatch/ambiguous/high-risk) with context + rule basis + recommended step. **EXISTS-AS: net-new NAME; composes `projection≠truth` (a read-model, owns no truth) + `generated_ui_as_agent_coordination_surface` (from 201) + CNS exception routing.** Surface/Projection-Map candidate, not a new domain. (dedup-pending, Opus-main verifies.)
- `policy_governed_agent_lane` — a lane where low-risk auto-executes, medium-risk requires validation/approval, high-risk/ambiguous escalates. **EXISTS-AS: already `workflow_lane_as_architecture_unit` + `capability_envelope` + RBAC risk-tiers + `sensitivity-registry`. DO NOT re-mint** — reconcile as a *risk-tiered subtype* of the existing lane primitive. (dedup-pending, Opus-main verifies.)

Net-new count = **0 mechanisms** (2 net-new NAMEs to sharpen: `control_transition_protocol`, `exception_surface`; 1 straight reject-as-remint: `policy_governed_agent_lane`).

### C. Reread flags
- No screenshot / no Knox rough-metadata block → channel/speaker/title/URL inferred or `TK`; confirm if a screenshot arrives (style ≈ IBM Technology siblings 202/204 — unverified). Knox Review-001 `at:` timestamp = `TK`.
- `build` reads are for OMNI's **care** substrate (v2/v3): the coordination *doctrine* is affirmed but the **unified CNS resolver spine** and the **exception/triage surfaces** are largely uncoded — "build=partial/absent" means OMNI's own orchestration spine is not fully built, not that app features are missing.
- Cluster-7 tension (targeted-HITL vs care-domain fail-closed conservatism) is a real disposition to carry into CNS/RBAC design — care may *deliberately* over-gate; "targeted not blanket" is an efficiency principle that must yield to clinical safety. Route to §3 Tension Register on fold.

### D. One-line hard read + strongest OMNI line
**Hard read:** a high-value **CNS spine-affirmer with zero net-new frame** — it says in enterprise English exactly what OMNI already holds (agents are governed workflow coordinators: narrow, integrated, policy-bound, state-aware, exception-sensitive, accountable to human/domain authority); import the coordination-layer + policy-routed-action + exception-first + targeted-HITL vocabulary into **CNS / Agent-Work-Protocol**, reject the 3 proposed primitives as re-mints/names, and treat the residue as a **doctrine-settled / build-gap** signal (build the CNS spine + exception/triage surfaces), never as thesis pressure.

**Strongest OMNI line:** *"successful agents aren't standalone decision makers. They act like coordination layers, maintaining context, orchestrating actions across systems, enforcing rules, and determining when control needs to be transitioned to a human"* [1:16-1:29] — this is CNS verbatim: **the agent proposes/retrieves/drafts and coordinates; domains + humans commit truth.**

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `CNS (MAJOR — external coordination-layer AFFIRM) · Agent-Work-Protocol (targeted-HITL / control-transition) · RBAC + Settings (policy-governed action) · OFC + D5 (obligation/exception lifecycle) · Messaging + surfaces (exception/triage) · Build-OS (agentic SDLC triage)` · promotion: `watch` (CNS/Agent-Work-Protocol import-vocabulary; 0 net-new mechanisms; 1 cluster-7 tension → Tension Register)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — transcript (§1) + Knox Review 001 pasted (Nick); §0/§0.1 metadata inferred (no screenshot/metadata block; slug proposed `ai-agents-real-world-coordination-layers`, file NOT renamed — Opus-main folds); §3 Review 003 written (Opus; **full tier, 8 clusters, 0 net-new mechanisms** [2 net-new NAMEs to sharpen + 1 re-mint reject], 1 cluster-7 tension, two-axis reality-check); §4 filled; status `raw_dropped` → `analyzed`. Registry/coverage/anchor fold deferred to Opus-main.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

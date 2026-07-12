# EVSRC-2026-000254 — <title or TK>

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed` (Review 003 written 2026-07-11; folded to `EVRUN-2026-000005`; 0 net-new, vocabulary; propose-only)**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-4 scaffold (created 2026-07-11). Register/run: see `../../00_index.md` (wave-4). EVRUN to open at processing = `EVRUN-2026-000005` (or fold into wave-3 per operator).
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — AS-IS) + optional gut note (§3 Review 002). Then Opus writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry**, coverage matrix, and fills **§4 pointers** at closeout. Deep read lives HERE in §3 — never a sidecar (`GRD-044`).

## §0 — Source identity / metadata  *(normalized by Opus from Knox §3 rough-metadata + transcript)*
- evsrc_id: `EVSRC-2026-000254`  ·  filename: `EVSRC-2026-000254_agentic-framework-taxonomy-workflow-physics.md` *(renamed from `_TK` 2026-07-11 wave-close)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=ZVPlLaehjLk`  ·  source_title: `Agentic AI Frameworks Explained: Workflows, Multi-Agent, & Production`
- channel_or_org: `IBM Technology`  ·  speaker: `Meenakshi Kodati`  ·  published_at: `2026-07-09`
- captured_at: `2026-07-11`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `vendor-practitioner explainer (~11m30s)`  ·  source_reliability_context: `vendor practitioner (IBM) — introductory vocabulary, NOT authoritative architecture doctrine`  ·  topic_tags_light: `[agentic_frameworks, linear_workflows, autonomous_agents, role_based_agents, production_orchestration, rapid_prototyping]`

## §0.1 — People / authorship / authority context
- primary speaker(s):
  - name: `Meenakshi Kodati` · role_in_source: `presenter` · affiliation_at_publication: `IBM Technology` · speaker_type: `vendor educator` · authority_context: `basic orientation + product vocabulary; vendor-adjacent, simplified` · identity_confidence: `high`
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `n/a (explainer)`
- event_context: `IBM Technology explainer comparing 5 agent-framework categories`  ·  perspective / conflict notes: `vendor-adjacent framework survey; frameworks named (LangChain/LlamaIndex/LangGraph/AutoGen/CrewAI/ChatDev/LangFlow/Flowise) are examples, NOT OMNI commitments (`GRD-033`)`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it, but every claim still routes through evidence → interpretation → gated promotion.

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
Hi, let me guess.
0:02
The world around you is abuzz with agentic  AI systems and their massive potential.
0:07
So you decide to go off and  build an agentic system.
0:10
You look for the best  available framework out there.
0:13
And now, all of a sudden,  you have 17 GitHub tabs open,  
0:17
five medium blocks bookmarked, and you  are still clueless on how to proceed.
0:22
Yes, we've all been there.
0:24
LangChain, LangGraph, Crew AI, AutoGen, Semantic Kernel.
0:29
There are so many powerful frameworks  out there, but which one would you pick?
0:34
And in order to answer that question,  
0:36
you first need to understand which type  of agentic AI system you want to build.
0:41
In this video, we are going to cover five types  of most common agent AI projects or systems.
0:47
We are going discuss an example for  each of those and also list frameworks  
0:52
which are best suited for those types  of agentic AI systems and projects.
0:57
First, let's get some basics out of the way.
0:59
What exactly is an agentic AI framework?
1:02
An agentic framework is a toolkit  for building agentic AI systems.
1:06
Let's understand with an example.
1:08
Let's say you have an agent  to analyze some sales data.
1:12
This agent goes to a database  and extracts the relevant data.
1:16
It analyzes the data, maybe  runs some calculations,  
1:19
and then generates a report and crafts a response  that can be sent to the concerned person.
1:24
Now, there's a lot going on here, and  there's lot of coordination that's needed.
1:28
And it gets even more complex when  you have multiple agents working.
1:31
And that's exactly why you  need an agentic AI framework.
1:35
The framework is like a building block.
1:37
Unlike a chatbot application where you  just ask a question and get an answer,  
1:41
the agentic system actually does a lot  of planning, acting, and iterating.
1:53
It is because of this complexity involved  that we need an agentic AI framework.
1:57
These are like building blocks that help  us deploy and manage agentic AI systems.
2:04
Now these have some predefined functions that help us
2:08
build agentic AI systems with more ease and  agility, such as we have predefined architectures.
2:19
We might have integration and monitoring tools.
2:30
We might also have some task  management capabilities.
2:37
And communication protocols.
2:42
Together, these features and functionalities  give agentic AI frameworks the capability  
2:47
to allow us to build these systems with ease.
2:50
Like we discussed before, there are multiple  agentic frameworks available out there,  
2:55
but they're not all competing  to do the same type of tasks.
2:58
In fact, they're optimized for  different types of agentic AI systems.
3:02
Most agentic AI systems and projects we are working  on today fall into one of the five categories.
3:07
First, we have linear workflows.
3:09
We have autonomous AI agents or  autonomous multi-agent systems.
3:14
We have role-based AI systems,  production orchestration systems,  
3:18
and then we have rapid prototyping.
3:21
Let's dive in and understand  each of these in more detail.
3:24
Let's start with the simplest  one, linear workflows.
3:30
Now, this type of an agentic AI system is where  things progress in a step-by-step fashion.
3:35
It is more predictable what's gonna happen next.
3:41
And the steps follow a certain sequence.
3:47
For example, consider a customer-facing  application, let's say a customer support agent.
3:53
The role of this agent is when a user asks a  question, the agent is going to take the question  
3:58
and search the knowledge  base for relevant responses.
4:01
It's then going to craft a response  and send it back to the user  
4:04
and maybe take an additional action  such as creating a support ticket.
4:09
Now, if you observe, these steps are progressing  in a certain fashion, in a certainly sequence,  
4:14
and these systems are more useful when  you need the flows to be more reliable.
4:22
There isn't a need for multiple agents  to collaborate to make this happen.
4:26
And that gives you more  control on how things progress.
4:33
A good example of frameworks that are suitable  for this kind of a setup include LangChain.
4:42
And LlamaIndex.
4:47
LangChain is more suited for setups where multiple  steps need to be happening in a certain sequence.
4:54
LlamaIndex is highly suitable for  
4:57
heavy applications that are heavy  on the data retrieval and indexing.
5:03
For more complex setups, you could also  use LangGraph, which is also by LangChain.
5:12
Next, we have the autonomous agentic AI systems.
5:17
In these systems, you typically give AI a goal.
5:23
And have it figure out how to accomplish it.
5:26
So in this system, it's very common to see  multiple agents collaborating together.
5:36
These agents talk to each other  to accomplish the common goal.
5:40
A good example of this could  be an AI coding assistant.
5:43
You could have a planner agent  that plans the solution for you.
5:47
You could a coder agent that  actually writes the code for you,
5:51
and a reviewer agent, that is reviewing the code,  
5:53
making recommendations, and  also helping with the debugging.
5:56
These agents are constantly talking to each other  in order to give the best code possible to you.
6:02
So, in this kind of setup, the  problem is usually open ended.
6:07
And that's the kind of problems this  kind of setup is most helpful for.
6:14
So, frameworks that work best for this  kind of a scenario include AutoGen.
6:23
You could also use experimental  setups like Baby AGI.
6:29
And CrewAI could also  
6:32
be helpful for designing these kind of  systems where problems are open-ended
6:38
and multiple agents are collaborating  together to achieve a shared goal.
6:43
Next, we have the role-based agentic AI systems.
6:47
These are kind of similar to  the autonomous agentic systems  
6:50
where there are multiple agents collaborating.
6:53
So it is also a multi-agent setup.
7:01
But what makes it different is that each  agent within the setup has a defined role.
7:10
They are still communicating with  each other to accomplish that goal,
7:14
but they are operating within the confines or  the constraints posed by their role descriptions.
7:20
They are working together,  but with clear boundaries.
7:23
A good example of this could  be a content generation agent.
7:27
Here, you could have a researcher  agent that goes on the web and fetches  
7:31
all the material that's needed  to write a piece of content.
7:34
There could be writer agent  that looks at all the content  
7:37
that has been fetched and writes up an article.
7:39
That goes out on a social  media website, let's say.
7:42
And then there could be an editor  agent that's looking at the article  
7:46
that has been written and make some edits to it.
7:49
Now, they have very clearly  defined roles and they don't  
7:52
go into other agents roles when they do this.
7:55
They have discussions, but  they're strictly confined  
7:58
to the description that has given  to them for their particular roles.
8:01
A good framework that is  applicable here is CrewAI.
8:09
But you could also use AutoGen  with some structures around it  
8:14
for this kind of an agentic AI systems.
8:16
There are also some niche frameworks that  are applicable to very specific tasks.
8:20
Like, for example, for software development  kind of tasks, you have ChatDev.
8:28
So these are the kind of frameworks that you  would use for role-based agentic AI systems.
8:34
Next up, we have the production  orchestration systems.
8:38
Like the name suggests, this is when AI  moves out of the experimentation phase  
8:43
and gets real or moves into a real-world system.
8:49
These kind of systems require  deep integration with APIs,
8:57
databases,
9:01
and business workflows.
9:08
Consider the example of an AI operations agent.
9:12
This agent detects alerts, searches  the documentation for the alerts,
9:17
and then runs some automation scripts  
9:19
and sends summaries in a real world  scenario within an organization.
9:22
Good examples of frameworks that are  suitable for this kind of an AI system,
9:27
include agent framework,  
9:33
which essentially is a combination  of semantic kernel and autogen.
9:37
Another good example here is LangGraph.
9:45
Which works for well-structured,  multilayered applications.
9:50
Ancient framework is suitable both for  orchestration as well as for running  
9:55
autonomous workflows.
9:57
Last but not least, you  have the rapid prototyping.
10:02
So you always don't need a perfect architecture.
10:05
You just need to check if  your idea would work or not.
10:09
These types of systems are best when  you need to quickly validate ideas.
10:16
It helps you build quick prototypes.
10:21
To see if you can bring your ideas to reality.
10:25
These kind of systems are where you ideally have  a user interface where you can drag components
10:31
and bring them onto a canvas to  build quick workflows and test ideas.
10:36
Examples of tools or frameworks that  are useful here include LangFlow.
10:45
And Flowise.
10:49
These tools offer you a good graphical  
10:51
user interface where you can  bring components onto a canvas
10:55
and connect models and workflows  and quickly test out your ideas  
10:59
that you can later on take into production.
11:01
These are very quick for rapid  prototyping and hence the name.
11:05
So when choosing a framework, do  not ask which framework is the best.
11:09
Instead ask what kind of  system am I trying to build?
11:12
If it's predictable, use a workflow approach.
11:15
If it is exploratory, use the autonomous agents.
11:18
If it needs teamwork, use role-based systems.
11:20
If it's going into production, use the  production orchestration frameworks.
11:24
And if you are testing ideas,  use the rapid prototyping tools.
11:28
Because the right framework depends  on whether you're building a pipeline,  
11:31
a team of agents, or a production AI system.
11:34
Which agentic AI framework is your typical go-to?
11:37
Feel free to comment below and  don't forget to like and subscribe.
11:41
Thank you.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

Knox / ChatGPT strategic read

Rough metadata

source_platform: YouTube · source_url: https://www.youtube.com/watch?v=ZVPlLaehjLk · source_title: Agentic AI Frameworks Explained: Workflows, Multi-Agent, & Production · channel_or_org: IBM Technology · speaker: Meenakshi Kodati · published_at: Jul 9, 2026 · captured_at: 2026-07-11 · content_type: agent-framework taxonomy / workflow selection / production orchestration · source_reliability_context: vendor practitioner explainer; useful as introductory vocabulary, not authoritative architecture doctrine · topic_tags_light: [agentic_frameworks, linear_workflows, autonomous_agents, role_based_agents, production_orchestration, rapid_prototyping]

People / authority context

Meenakshi Kodati presents an IBM Technology explainer comparing framework categories. The source is useful for basic orientation and product vocabulary. It is vendor-adjacent, simplified, and not deep enough to establish new OMNI doctrine.

Suggested processing

priority: 2.5/5 · depth: light-to-semantic · EVRUN needed?: yes, but short · promotion posture: vocabulary / framework-selection affirmer

Likely homes: AI substrate · Build-OS · Agent Work Protocol · CNS · capability-placement policy.

Strategic read

The keeper is: choose the architecture from the work shape, risk, and production obligations—not from whichever agent framework is fashionable.

The source divides agentic systems into five categories:

predictable linear workflows;
autonomous/open-ended agents;
role-based multi-agent systems;
production orchestration;
rapid prototypes.

That taxonomy is useful, but OMNI should not adopt it literally as five architectural classes. Several categories mix different dimensions:

workflow determinism,
agent decomposition,
deployment maturity,
and development stage.

For example, “production orchestration” is not a peer task shape beside “linear workflow”; a production system may itself contain linear, role-based, or bounded-autonomous lanes.

OMNI translation

The real OMNI decision is not:

Which framework should we use?

It is:

What is the workflow shape, what authority is involved, how open-ended is the task, and what proof is required?

For OMNI:

Deterministic workflow should dominate when steps, gates, and ownership are known.
Agentic exploration belongs where the problem is genuinely open-ended.
Role decomposition should follow capability and task boundaries, not agent fashion.
Production orchestration requires observability, retry, identity, authority, audit, and domain commits.
Rapid prototypes may test ideas, but they do not define production architecture.

The source’s strongest practical line is its closing advice: do not ask which framework is best; ask what kind of system is being built.

Where it lands

AI substrate / Agent Work Protocol — medium

Supports an explicit workflow-classification step before framework or harness selection.

CNS — minor affirmation

Confirms that orchestration and coordination complexity increase as tools and agents multiply, but adds no new CNS physics.

Build-OS — medium

Useful as a lightweight design-time question:

task shape → authority/risk → orchestration pattern → harness/framework

Doctrine / primitive pressure

Possible candidate:

workflow_architecture_classification

Meaning: classify a workload by determinism, openness, role decomposition, authority, production criticality, and proof requirements before selecting an execution pattern.

This likely already exists conceptually under capability_placement_policy, workflow-lane-as-unit, and agent decomposition guidance. Formal extraction should deduplicate rather than mint.

Keeper doctrine
Framework choice follows workflow physics.
Use the least-agentic architecture that reliably solves the problem.
Multi-agent decomposition should reflect real responsibility boundaries, not aesthetic preference.
A prototype proves possibility; it does not prove production readiness.
Production orchestration is a governance and reliability posture, not merely another framework category.
What not to import blindly
Do not treat the five categories as mutually exclusive.
Do not equate role descriptions with real RBAC or delegated authority.
Do not assume multiple communicating agents are superior to one bounded workflow.
Do not let framework selection become architecture.
Do not treat LangChain, AutoGen, CrewAI, or LangGraph as OMNI commitments.
Tiering

stale-vs-v3: AFFIRM
weight_tier: vocabulary
status: watch / no major promotion

Hard read

Useful introductory taxonomy, but mostly existing OMNI doctrine in simplified vendor language.

Strongest OMNI line:

OMNI chooses execution patterns from workflow shape, authority, and proof requirements; frameworks remain replaceable implementation rails.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

reviewer: `Opus` · at: `2026-07-11` · run: `EVRUN-2026-000005` · formalizes Review 001 (Knox), grounded vs §1 · dedup baseline: `EVRUN-000001 §2A` + `000002` + `000003` + post-v3 rounds.

**HEADLINE VERDICT.** Low-medium-signal **vocabulary/framework-selection affirmer** (Knox priority 2.5/5). An IBM explainer taxonomizing agentic systems into 5 shapes (linear-workflow · autonomous · role-based · production-orchestration · rapid-prototype) and mapping frameworks to each. **0 net-new.** Its one keeper AFFIRMS OMNI's settled `GRD-033` rail-agnosticism + the wave-3 monolith-first / bounded-responsibility doctrine: **choose architecture from work-shape/authority/openness/proof — not from whichever framework is fashionable; frameworks are replaceable rails.** `doctrine=AFFIRM · build=partial/absent`. *(Sibling to 256/257 — the wave-4 LangChain/harness cluster; feeds Nick's "when/if do we adopt LangChain tooling" build-timing question — that's a Build-OS decision, not doctrine.)*

### A. Concept clusters (trimmed — vocabulary tier)

| concept | OMNI meaning | downstream homes | source anchor (≤12w + ts) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|
| **Workflow-shape-first selection** (5-category taxonomy) | The real OMNI decision is not "which framework" but *workflow shape × authority × task-openness × proof required*; use the least-agentic architecture that reliably solves it | `capability_placement_policy` · workflow-lane-as-unit · Agent Work Protocol · Build-OS | "do not ask which framework is the best…ask what kind of system" [11:09] | AFFIRM | partial | none | vocabulary | watch (affirm) |
| **Multi-agent must reflect real responsibility boundaries, not fashion** | Role decomposition follows capability/task/authority boundaries; more communicating agents ≠ superior to one bounded workflow | wave-3 `231 single_agent_first`/monolith-first · `214 bounded-responsibility` · CNS anti-god-agent (`GRD-003`) | role-based agents "working together, but with clear boundaries" [7:20] | AFFIRM | partial | tension (multi-agent fashion vs monolith-first — already resolved 214-vs-231) | vocabulary | no-op / cite |
| **Production orchestration = governance+reliability posture** | Production ≠ a framework category; it requires observability · retry · identity · authority · audit · domain commits — i.e. OMNI's CNS + candidate≠commit spine | CNS · RBAC · OFC · candidate≠commit · Build-OS | "deep integration with APIs, databases, and business workflows" [8:38] | AFFIRM | partial | none | vocabulary | no-op / cite |
| **Frameworks = replaceable rails** | LangChain/LlamaIndex/LangGraph/AutoGen/CrewAI/ChatDev/LangFlow/Flowise are implementation rails, not OMNI commitments; framework selection must not become architecture | `GRD-033` rail-agnostic · `GRD-039` (data-not-instructions) | "LangChain, LangGraph, Crew AI, AutoGen, Semantic Kernel" [0:24] | AFFIRM | n/a | none | vocabulary | reject-as-doctrine (cite as Lens-A/rail) |

**Roll-up:** 4 AFFIRM · 0 PARTIAL · 0 ABSENT · 0 direct_conflict. Build: mostly `partial` (OMNI already has the production-orchestration properties via CNS/RBAC/OFC; the explicit "classify workflow shape before selecting pattern" step is `absent` as a named Build-OS step).

### B. Net-new primitive candidates (dedup)
- `workflow_architecture_classification` — **EXISTS-AS**: `capability_placement_policy` (wave-2/3) + workflow-lane-as-unit + agent-decomposition guidance (`231`/`214`). **DO NOT MINT.** Possible tiny sharpening: an explicit design-time step `task-shape → authority/risk → orchestration pattern → harness/framework` as a Build-OS checklist — route as sharpening, not primitive.
- **Net genuine mints = 0.**

### C. Reread flags
- Sibling cluster: **254 (taxonomy) + 256 (harness-as-substrate) + 257 (Deep Agents) = the wave-4 LangChain/harness triad.** Fold together in registry; they collectively pressure the *build-adoption-timing* question (Nick's 256 note), not new doctrine.
- Do not treat the 5 categories as mutually exclusive (a production system contains linear/role/autonomous lanes) — Knox's correct caution; preserve.

### D. One-line hard read
Introductory vendor taxonomy; **0 net-new**, pure AFFIRM of rail-agnosticism + monolith-first. **Strongest OMNI line:** *OMNI chooses execution patterns from workflow shape, authority, and proof requirements; frameworks remain replaceable implementation rails.*

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000005` · concept_registry: `analysis/EVRUN-2026-000005_ai-corpus-wave-4/EVRUN-2026-000005_ai-corpus-wave-4_concept_registry_and_routing_map.md` · source_anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `vocabulary AFFIRM of GRD-033 rail-agnosticism + monolith-first (231/214); 0 net-new; feeds Build-OS framework-adoption-timing question (w/ 256/257)` · promotion: `no-op / watch` (propose-only)

## §5 — Change log
- `2026-07-11` — wave-4 scaffold created (id `EVSRC-2026-000254`, provisional `_TK` slug); awaiting Nick transcript + Knox-read + URL paste.
- `2026-07-11` — transcript (§1) + Knox Review 001 (§3) pasted; **Opus Review 003 written** (`EVRUN-2026-000005`); §0/§0.1 normalized; status `raw_dropped → analyzed`. 0 net-new (vocabulary tier). Folded to `EVRUN-2026-000005`.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md`.

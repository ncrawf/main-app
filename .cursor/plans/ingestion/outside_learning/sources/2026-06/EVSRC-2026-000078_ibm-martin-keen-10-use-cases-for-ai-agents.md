# EVSRC-2026-000078 — 10 Use Cases for AI Agents: IoT, RAG, & Disaster Response Explained

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: AI-agent use cases); Knox read in §3 Review 001 (verified: goal→planner→memory→executor→action pattern primer). Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000078`  ·  filename: `EVSRC-2026-000078_ibm-martin-keen-10-use-cases-for-ai-agents.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=Ts42JTye-AI`
- source_title: `10 Use Cases for AI Agents: IoT, RAG, & Disaster Response Explained`
- channel_or_org: `IBM Technology` (1.71M subs)  ·  series: `IBM explainer` (watsonx cert promo)  ·  published_at: `2025-07-14`  ·  views_at_capture: `171,836`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `explainer / lecture`  ·  source_reliability_context: `academic / vendor-practitioner (IBM Master Inventor — educational agent use-case survey)`  ·  topic_tags_light: `[ai_agent_use_cases, reason_plan_act, iot_agriculture, rag_content_creation, multi_agent_disaster_response, agent_applications]`  ·  note: `IBM-channel source (4th of corpus); AI-generated summary present; cert-promo video`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Martin Keen` · role_in_source: `presenter` · affiliation_at_publication: `IBM (Master Inventor)` · speaker_type: `vendor-practitioner / educator (IBM Technology)` · authority_context: `relevance on **applied AI-agent use cases**: agents that **reason, plan, and act autonomously to achieve complex goals**; highlights **10 use cases** including **IoT in agriculture, RAG for content creation, and multi-agent disaster response.** Survey of where agents apply across industries — useful for OMNI use-case mapping + the reason/plan/act framing` · identity_confidence: `high_from_screenshot`
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `—` (solo explainer)  ·  event_context: `IBM Technology YouTube (watsonx Generative AI Engineer cert promo)`  ·  perspective / conflict notes: `IBM educational content w/ watsonx framing. **OMNI relevance: "reason / plan / act autonomously" agent definition + multi-agent + RAG use-case patterns inform §B + CNS (agent capability framing) + Build OS. Use-case survey is more breadth than depth; the reason/plan/act + multi-agent-coordination framing is the reusable part. Pairs with Andrew Ng 071 (agentic patterns).** Recent (2025-07). Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): IBM Master Inventor / educational = reliable use-case survey; claims route through evidence → interpretation → gated promotion (use cases are illustrative, not OMNI commitments).

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = AI-agent use-cases transcript; §3 = matching agent-pattern read) · [x] EVRUN needed? (yes — inventory_only; §B/CNS reason-plan-act pattern — pair w/ 071) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Intro
0:00
AI agents can reason and act
0:03
autonomously to achieve goals, and unlike a chatbot
0:05
that only responds one prompt at a time,
0:08
AI agents maintain state and can break down
0:11
complex tasks into subtasks,
0:13
execute them in a sequence, or all at once in parallel,
0:16
and then adjust their plan based on intermediate results
0:19
to ultimately execute actions
0:22
towards a defined goal.
0:26
But what goal?
0:28
Well, let's take a look at some specific
0:31
use cases where AI agents have been put to work today,
0:34
and see how all of this planning
0:37
and executing and feedback looping
0:40
can provide some practical, real-world benefit.
0:43
And we're going to focus on three use cases in particular.
Three Use Cases
0:47
And yeah, I know, this video promises
0:50
ten use cases and we'll do ten.
0:53
But the three I want to focus on first, well,
0:56
they relate to Internet of Things or IoT.
1:01
That's the first one.
1:03
The second one we'll look at relates
1:06
to retrieval augmented generation.
1:09
That's RAG.
1:11
And then the third one we're going to take a look
1:13
at our multi-agent workflows which is just,
1:17
well, multi-agent.
1:20
So let's take a look.
Agriculture Use Case
1:22
So let's start with agriculture. And AI agents, they
1:25
can help farmers increase yield and reduce
1:28
waste by autonomously monitoring conditions
1:31
and then optimizing farming decisions.
1:33
And let's use a common framework to show
1:36
how AI agents can enable these use cases.
1:40
And the first part of that framework
1:42
is to start with a goal.
1:45
is a goal for the agent to achieve.
1:48
And perhaps that's to maximize crop yield.
1:51
Once we have a goal, we can start planning
1:54
as to how we're actually going to achieve that
1:57
by using a planner.
2:00
Now in this case, this uses an LLM
2:03
with access to external tools
2:06
to plan a workflow
2:08
to achieve the goal, and in this instance,
2:10
the agents tools use APIs
2:12
to fetch the latest available data sources,
2:14
like the current weather conditions and current soil readings.
2:18
Now, that information is then combined
2:22
with whatever is stored in the memory.
2:26
That stores past actions, history
2:29
and other contextually relevant information
2:31
like the date of the last irrigation.
2:34
And that all feeds into the executor,
2:39
which is the next stage.
2:41
And that's where an agent uses all of this information to generate an action plan.
2:46
So, perhaps the agent derives the appropriate action in this particular case
2:49
is to turn on irrigation for the next two hours.
2:53
Now that execution plan,
2:55
that's passed to the final stage,
2:58
which is the action component,
3:01
which in this case might integrate with Internet
3:03
of Things controllers to perform the irrigation process.
3:08
And this process is both iterative.
3:11
It's continually updating, planning, execution
3:14
and action based upon changing sensor data.
3:17
And it's also self-improving where the agent learns from results,
3:21
such as crop growth outcomes, and adjusts its decisions
3:25
as it becomes better at resource-efficient farming.
3:28
So, agricultural AI agents interfacing with IoT controllers.
3:34
So, let's move on from the essential world of agriculture
3:37
to grow food to the equally essential world
Content Creation Use Case
3:40
of content creation, to write blog posts.
3:42
And as any middle school teacher tasked with grading
3:45
homework can tell you, generative
3:47
AI can produce reams of somewhat human-like text.
3:51
But a genetic AI takes things a step further.
3:55
It can plan the content, gather relevant information
3:58
and then iteratively refine the output.
4:01
So, for this use case, let's set a goal
4:05
to write a blog post on the benefits of solar energy.
4:09
And the audience for this are going to be for students.
4:12
Now, here the planner might use tool access to search for current solar energy
4:17
statistics, recent case studies, relevant
4:19
research papers and stuff like that.
4:21
So, the agent here is performing document loading.
4:25
It uses a search tool to find the most relevant articles.
4:29
And this is where retrieval
4:32
augmented generation or RAG comes in.
4:36
The agent splits these documents into chunks.
4:39
And those chunks get embedded into a vector database,
4:43
which becomes the agent's memory for this specific task.
4:47
Now, when the executor starts
4:49
writing, using a large language model,
4:51
it doesn't just rely on the large language model's training
4:54
data, which is probably from years ago.
4:56
Instead, it retrieves the most relevant information
4:58
from that fresh vector store
5:01
based on the section it's currently writing.
5:03
So, if it's drafting the economic benefits section,
5:06
it pulls up the latest cost per kilowatt statistics.
5:10
Now the agent action
5:13
is to populate the blog post outline,
5:15
incorporating those recalled facts, and adjust the tone for the target audience.
5:19
And again, the agent can work in an iterative way to refine its work.
5:24
So, it might generate a first draft
5:26
and then critique its own writing by asking questions like,
5:30
is this section well supported by the data,
5:33
or does the tone match the brief, which is for students?
5:37
If it finds gaps, it goes back to search for more specific information
5:40
or it adjusts the writing style. So,
5:43
that's authentic content creation,
5:45
incorporating RAG.
5:47
Next up, disaster response.
Disaster Response Use Case
5:50
So, when a major earthquake hits or wildfires are spreading, every second counts.
5:54
And frankly, no single human
5:56
can monitor satellite feeds and social media posts
5:59
and 99 911 transcripts and sensor data all at the same time.
6:04
Nobody could do that. But but the AI agents can.
6:08
And this is where the multiple agent
6:11
or the multi-agent workflow comes in.
6:15
So, for this use case,
6:17
let's set a goal
6:19
to coordinate emergency response after a major earthquake.
6:23
Now, here the planner is actually a coordinator
6:26
agent, working with specialist agents.
6:30
So, we might have one specialist agent analyzing
6:32
satellite imagery for collapsed buildings.
6:34
We might have another that's scanning social media for distress posts.
6:38
And maybe we've got a third agent, which is a simulation model
6:42
that forecasts expected damage.
6:44
Each specialist agent feeds
6:46
intelligence back to the main planner.
6:49
Now, the memory component is a shared situational map
6:53
that all agents can read from and write to.
6:57
So, when the social media agent detects
6:59
help requests from a specific neighborhood,
7:01
that gets flagged into memory. Now,
7:04
the executor that recommends actions
7:07
and the action component coordinates
7:09
the actual response, dispatching fire
7:12
trucks, routing ambulances, sending evacuation alerts and so forth.
7:16
So, this multi-agent approach
7:19
means that agents work in parallel across
7:21
different areas simultaneously.
7:23
That's multi-agent disaster response coordination. Now,
7:27
I promise you ten use cases,
7:29
but I don't want to keep you here all day.
7:31
So let's rapid fire through the remaining seven. Ready? Right.
7:35
So, in banking and finance, agents demonstrate
7:39
real-time stream processing, continuously ingesting transaction data
7:43
and using anomaly detection models to flag fraud.
7:46
For customer experience, agents use sentiment analysis.
7:50
They analyze customer tone to adjust their responses.
7:54
In healthcare, we see multi-agent coordination again.
7:58
This time, specialized sub agents handle different tasks
8:01
like analyzing lab results and managing prescriptions.
8:04
Human resources agents highlight workflow automation.
8:09
They execute multistep processes, like onboarding new employees,
8:12
automatically integrating with enterprise systems,
8:15
like workday or SAP.
8:17
For IT operations, agents use automated
8:21
remediation, parsing thousands of system
8:23
alerts to identify root causes,
8:26
then executing scripts to fix issues.
8:29
Supply chain agents use predictive analytics,
8:32
forecasting demand based on market conditions.
8:35
And transportation agents are good examples
8:37
of dynamic replanning,
8:40
continuously recalculating optimal routes
8:43
as conditions change. And each of these use cases
8:47
follows the same fundamental pattern
8:50
of goal, planner, memory, executor and action,
8:55
all working together to help AI agents
8:58
meet user goals.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `10 Use Cases for AI Agents: IoT, RAG, & Disaster Response Explained`  ·  visible_channel: `IBM Technology` (1.71M subs)
- visible_url: `youtube.com/watch?v=Ts42JTye-AI`  ·  visible_published: `Jul 14, 2025`  ·  visible_views: `171,836`  ·  likes: `3.3K`
- visible_description: *"AI agents can reason, plan, and act autonomously to achieve complex goals. Martin Keen highlights 10 use cases, including IoT in agriculture, RAG for content creation, and multi-agent disaster response. Explore how AI agents are transforming industries and solving real-world problems."* (plus watsonx Generative AI Engineer cert promo + code IBMTechYT20)
- ai_generated_summary (visible): *"Explore ten diverse AI agent use cases, from optimizing agriculture via IoT to crafting content using RAG. The video details a commo…"* (quality/accuracy may vary)
- hashtags (visible): `#aiagents #iot #aiusecases #multiagentsystems`
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_2.17.12_AM-c19c184b…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

Process this one as a use-case taxonomy / agent-pattern primer, not a spine source.

It is useful, but not profound compared to Andrew Ng, LangChain, Anthropic, OpenEvidence, ServiceNow, or Pace. The value is that it gives a very clean reusable pattern:

goal → planner → memory → executor → action

IBM frames agents as systems that maintain state, break complex tasks into subtasks, execute sequentially or in parallel, and adjust based on intermediate results. The examples include IoT agriculture, RAG-assisted content creation, multi-agent disaster response, fraud detection, sentiment-based customer experience, healthcare coordination, HR onboarding, IT remediation, supply chain forecasting, and transportation replanning.

Core takeaway

The strongest idea is:

Agents are not one model response. They are goal-directed loops with planning, memory, execution, action, and feedback.

That is basic, but it is the right baseline vocabulary.

For OMNI, the corrected version is:

goal → planner → memory/context → executor → policy/authority gate → action candidate → domain/human commit or no-op

IBM stops at “action.” OMNI cannot.

OMNI translation
1. The five-part agent loop is useful, but OMNI needs two extra layers.

IBM’s framework:

goal,
planner,
memory,
executor,
action.

OMNI’s care-grade version needs:

goal authorization — is this goal allowed?
authority-labeled memory/context — what is raw, interpreted, promoted, patient-source, clinical, historical, stale?
policy gate — may this action be proposed?
commit boundary — who or what is allowed to make it true?
trace/audit — what happened, why, and who approved?

Keeper:

OMNI agents can plan and act only inside authorized goals, authority-labeled context, policy gates, and domain commit boundaries.

2. The use cases are capabilities, not domains.

This is the main architecture correction.

The video lists healthcare, agriculture, finance, HR, IT, supply chain, transportation, etc. That is fine for teaching, but OMNI should not translate that into “make a healthcare agent.”

Instead, extract capability patterns:

sensor-driven agents — agriculture / IoT → OMNI wearables, labs, home devices, clinic sensors.
RAG agents — content creation → OMNI clinical evidence, protocols, source reservoirs.
multi-agent coordination — disaster response → OMNI CNS, provider queues, scheduling/payment/doc seams.
anomaly detection — banking fraud → OMNI safety flags, abnormal patterns, workflow drift.
sentiment/context response — customer experience → OMNI patient tone and anxiety detection, but gated.
workflow automation — HR onboarding → OMNI onboarding, staff tasks, patient journey steps.
incident remediation — IT ops → OMNI failed workflow diagnosis / Build OS / safety event review.
dynamic replanning — transportation → OMNI rescheduling, care plan changes, follow-up timing.

Keeper:

Do not copy use cases. Extract reusable agent capability patterns.

3. The healthcare example is too vague — but directionally useful.

IBM says healthcare agents can coordinate subagents for lab results and prescription management. That is true at a high level, but OMNI must be much more precise.

OMNI cannot let “lab agent” and “prescription agent” become vague blobs.

A lab flow touches:

D7 artifact/report,
Observation structured values,
Clinical Memory adoption,
provider review,
patient messaging,
follow-up obligation,
possible prescription/order changes,
documentation.

A prescription flow touches:

clinical authority,
medication history,
eligibility,
contraindications,
provider/prescriber authority,
pharmacy/fulfillment,
patient communication,
audit.

So the doctrine is:

Healthcare multi-agent coordination must decompose into owned domains, not generic healthcare bots.

4. Disaster response is the best analogy for CNS.

The disaster example is actually the strongest OMNI analogy: multiple specialist agents analyze different feeds, write into a shared situational map, and a coordinator recommends or executes response actions.

OMNI’s CNS is similar:

patient message agent,
lab/observation agent,
scheduling agent,
commerce/entitlement agent,
documentation agent,
clinical-risk agent,
provider packet agent,
messaging agent.

But the “shared situational map” must not be a free-for-all memory blob.

OMNI version:

Shared context packets must be authority-labeled, role-scoped, and commit-separated.

5. The RAG content example reinforces Knowledge Reservoir doctrine.

The content example uses RAG to pull current data, chunk documents, embed them, retrieve relevant sections, draft, critique, and revise. That is useful for OMNI’s external evidence ingestion and thesis work.

But the OMNI correction remains:

Generic RAG retrieves. OMNI retrieval must label authority.

A retrieved source could be:

raw transcript,
captured interpretation,
promoted doctrine,
stale historical material,
clinical guideline,
patient-source claim,
provider-adopted assertion.

The agent must not treat all retrieved text equally.

Where it lands

CNS / orchestration: medium-to-major. Good simple pattern for planner/memory/executor/action.

§B AI substrate: medium. Reinforces agent loops, memory, RAG, planning, feedback.

§C Governed Capability Exchange: medium. Actions and tool integrations require capability boundaries.

Knowledge Reservoirs: medium. RAG example supports source retrieval and iterative synthesis.

Build OS: medium. Useful generic agent framework, especially for task decomposition and feedback loops.

Clinical safety: useful mainly as a warning: IBM’s generic “healthcare agents” framing is too loose for OMNI.

Doctrine / primitive pressure

Potential concepts:

agent_goal
goal_authorization
planner
memory_context
executor
action_component
action_candidate
policy_gate
shared_situational_map
specialist_agent
coordinator_agent
multi_agent_context_packet
dynamic_replanning
agent_feedback_loop
agent_capability_pattern

Keeper doctrine:

OMNI agents should follow goal-directed loops, but every goal, memory read, tool action, and output must be constrained by authority, policy, trace, and domain commit.

Second keeper:

The reusable lesson is not “healthcare agent.” The reusable lesson is coordinated specialist agents operating over shared, governed context.

What not to import blindly

Do not import IBM’s generic “agents act autonomously” language into care without authority gates.

Do not treat the action component as final commit.

Do not build one “healthcare agent.”

Do not let shared memory become shared truth.

Do not treat RAG as enough; authority labels matter.

Do not let multi-agent coordination create bot sprawl outside CNS.

Priority / confidence

Priority: 3.5/5
Confidence: 5/5
Suggested analysis depth: targeted_semantic

This is a good baseline agent-loop / use-case taxonomy source. It should be routed into the glossary or implementation-pattern layer, not the main thesis spine. The keeper is simple but useful:

Agents are loops. OMNI makes those loops governed.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(I fill later — derived work lives in EVRUN; leave `TK`)*
- EVRUN(s): `TK` · inventory: `TK` · routing_addendum: `TK` · impact §B/§C/security/Build-OS/contract: `TK` · promotion: `TK`

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged §B/CNS reason-plan-act + multi-agent use-case survey (pairs w/ Ng 071); IBM-channel; AI-summary + watsonx cert-promo in source.

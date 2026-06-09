# EVSRC-2026-000077 — LangChain vs LangGraph: A Tale of Two Frameworks

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: LangChain/LangGraph explainer); Knox read in §3 Review 001 (verified: chain-vs-graph implementation-pattern taxonomy). Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000077`  ·  filename: `EVSRC-2026-000077_ibm-martin-keen-langchain-vs-langgraph.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=qAF1NjEVHhY`
- source_title: `LangChain vs LangGraph: A Tale of Two Frameworks`
- channel_or_org: `IBM Technology` (1.71M subs)  ·  series: `IBM explainer`  ·  published_at: `2024-11-04`  ·  views_at_capture: `557,369`  ·  duration: `9:54`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `explainer / lecture`  ·  source_reliability_context: `academic / vendor-practitioner (IBM Master Inventor — educational framework comparison)`  ·  topic_tags_light: `[langchain_vs_langgraph, agent_frameworks, orchestration_graphs, context_aware_apps, framework_tradeoffs, stateful_agents]`  ·  note: `IBM-channel source (3rd of corpus); AI-generated summary present`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Martin Keen` · role_in_source: `presenter` · affiliation_at_publication: `IBM (Master Inventor)` · speaker_type: `vendor-practitioner / educator (IBM Technology)` · authority_context: `relevance on **agent-framework architecture choices**: compares **LangChain vs LangGraph** (two open-source frameworks for building LLM applications) — unique features, use cases, and how they help create **innovative, context-aware solutions**. Educational framework-comparison; useful for understanding chain vs graph orchestration tradeoffs` · identity_confidence: `high_from_screenshot`
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `—` (solo explainer)  ·  event_context: `IBM Technology YouTube (Virtual Agents Day / AI model guide promos)`  ·  perspective / conflict notes: `IBM educational content. **OMNI relevance: chain (linear) vs graph (stateful/branching) orchestration tradeoffs inform §B + CNS orchestration design (how to structure agent flows, state, branching, control) + Build OS. Conceptually pairs with LangChain sources 059/062 (Harrison Chase) — this is the framework-mechanics complement to Chase's vision. Practical orchestration-pattern reference.** Older (2024-11). Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): IBM Master Inventor / educational = reliable framework-mechanics reference; even so, framework-specific patterns route through evidence → interpretation → gated promotion (adapt orchestration patterns to OMNI's governed CNS, don't adopt a framework wholesale).

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = LangChain/LangGraph transcript; §3 = matching chain-vs-graph read) · [x] EVRUN needed? (yes — inventory_only; §B/CNS orchestration patterns — pair w/ 059/062) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Intro
0:00
LangChain and LangGraph are both open source frameworks designed to help developers build applications with large language models.
0:09
So what are the differences and why use one over the other?
0:13
Well, I think a good place to start. Is to define what these two things are, and let's begin with LangChain.
LangChain
0:20
Now, we've done a dedicated video on LangChain, and my guess is there's probably a pop up somewhere over my head right now
0:27
encouraging you to watch that video.
0:28
But don't click, not yet. Give me a moment to summarize LangChain.
0:33
Then at the end of this video, if you want any more, you can go back and check that one out.
0:38
Okay. Now, at its core, LangChain is a way for building LLM powered applications by executing a sequence of functions in a chain.
0:48
So let's say we're building an application and the first thing it needs to do is it needs to retrieve some data from a website.
1:00
Once we've done that, we move on to stage two,
1:03
And stage two is to summarize that data that we retrieved.
1:11
And then finally, we're going to use this summary to do something,
1:15
specifically, We're going to have it answer user questions.
1:21
So the workflow here is retrieve, summarize, and answer
1:26
Now we can use the LangChain to help us do this.
1:30
So let's start with the retrieve component.
1:32
Now, the retrieve component might consist of a LangChain component called a document loader.
1:41
Now a document loader is used to fetch and load content from various data sources,
1:46
and if some of those documents are large, we might choose to use a text splitter,
1:53
which is another LangChain component to split takes up into smaller, semantically meaningful chunks.
2:01
Okay, that's retrieve.
2:03
Now To summarize, we would use a chain, and the chain will orchestrate the summarization process.
2:11
Now, that might include constructing a prompt component to instruct an LLM to perform the summarization.
2:21
And that might also contain an LLM component to pass that request to the large language model of our choosing.
2:29
Okay, and then answer.
2:31
Well, we would build another chain and this chain might include a memory component,
2:40
so this is another component of LangChain, and that's used to store conversation, history and context,
2:46
And we'd throw in another prompt component and another LLM component to generate the answer based on the summary and the record context.
2:56
And the cool thing here is that the LLM that we use for the answer component,
3:02
may be a completely different large language model to the one we use in the summarize component.
3:08
LangChain modular architecture let's build complex workflows by combining these high level components.
LangGraph
3:17
Okay, now let's introduce LangGraph.
3:19
LangGraph is a specialized library within the LangChain ecosystem,
3:24
specifically designed for building stateful multi-agent systems that can handle complex nonlinear workflows.
3:31
So let's consider a task management assistant agent.
3:36
Now, the workflow here involves processing user input.
3:40
So let's start there, Process inputs,
3:45
And then to this workflow we are going to allow to add tasks, we're going to be able to complete tasks, and we are also going to be able to summarize task.
4:05
So this is the kind of the architecture of what we're trying to build here.
4:10
Now, LangGraph helps us create this as a graph structure,
4:15
where each one of these actions is considered as a node.
4:21
So at tasks, complete tasks, summarize, they're all nodes.
4:25
And then the transitions between these things, that's known as edges.
4:29
Now the central mode is the process input node.
4:32
So that's where the user input comes in,
4:34
and that's going to use an LLM component to understand the user intent and to route to the appropriate action node.
4:41
Now there's another component here that's quite central to this called state, the state component.
4:49
And the state component is used to maintain the task list across all the interaction.
4:55
So the adds task node adds new tasks to the state,
5:00
the complete task node marks tasks as finished,
5:05
and then the summarize node uses an LLM to generate an overview of current tasks.
5:12
All nodes can access and modify the state allowing for contextual stateful interactions.
5:19
The graph structure allows the assistant to handle various user requests in any order,
5:25
always returning back to the process input node after the action is complete.
5:33
LangGraph Architecture lets us create flexible stateful agents that can maintain context over extended interactions.
Comparison
5:42
So let's directly compare, LangChain and LangGraph across a number of dimensions.
5:46
Let's start with the primary focus.
5:49
Now the Primary focus of LangGraph Is to create and manage what is known as multi agent systems and workflows.
6:02
The focus of LangChain is to provide an abstraction layer for chaining LLM operations into large language model applications.
6:13
That's the difference between the two.
6:15
Now, as for. Structure, LangChain adopts no surprise here a chain structure.
6:24
And that acts as a Dag,
6:26
that is an acronym for directed acyclic graph,
6:29
Which means that tasks are executed in a specific order always moving forward.
6:35
So, for example, we start with task number one then we'd have a branch for maybe tasks number two and task three,
6:43
and then we'd come back to the central task number four.
6:47
And this process is great where you know the exact sequence of steps that are needed.
6:54
Now, LangGraph's graph structure, on the other hand, is a little bit different because it allows for loops and revisiting previous states.
7:05
So we might have state A which can go backwards and forwards with state B and State C,
7:12
and this is beneficial for interactive systems where the next step might depend on evolving conditions or user input.
7:19
Now, when it comes to components, LangChain uses a bunch and we've mentioned many of these already,
7:27
that includes memory, There's the prompt component as well, There's also the LLM component,
7:35
which is how we actually pass things to the large language model,
7:39
And there's the agent component as well that forms, chains between all of these things.
7:46
Now, LangGraph uses a bunch of different components.
7:49
So we have nodes, we also have edges, And we have states,
7:58
and these are all part of a graph.
8:02
And speaking of state. That brings us nicely to state management.
8:07
I don't think we can say that LangChain has somewhat limited state management capabilities.
8:15
It can pass information forth through the chain,
8:18
but it doesn't easily maintain a persistent state across multiple runs.
8:22
That said, LangChain does have these memory components that can maintain some state across interactions.
8:29
LangGraph's state management, I'm going to say, is more robust,
8:36
And that's because state is a core component that all nodes can access and modify,
8:42
allowing for more complex, context aware behaviors.
8:46
Let's say use cases.
8:48
Well, LangChain really excels, particularly at sequential tasks like a process that retrieves data and then processes it and then outputs a result.
8:58
Again, that said, LangChain is able to handle non sequential tasks to some extent with its own agents feature,
9:05
but LangGraph's wheelhouse that really is. Scenarios that have a much more complex nature to them.
9:15
Complex systems requiring ongoing interaction and adaptation.
9:19
For example, a virtual assistant that needs to maintain context over long conversations and handle varying types of requests.
9:27
So that LangChain and LangGraph, two powerful frameworks for building applications that make use of large language models.
9:38
All right. That's all I got.
9:40
You can go watch that LangChain video now.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `LangChain vs LangGraph: A Tale of Two Frameworks`  ·  visible_channel: `IBM Technology` (1.71M subs)
- visible_url: `youtube.com/watch?v=qAF1NjEVHhY`  ·  visible_published: `Nov 4, 2024`  ·  visible_views: `557,369`  ·  likes: `11K`  ·  duration: `9:54`
- visible_description: *"Get ready for a showdown between LangChain and LangGraph, two powerful frameworks for building applications with large language models (LLMs). Master Inventor Martin Keen compares the two, taking a look at their unique features, use cases, and how they can help you create innovative, context-aware solutions."* (plus Virtual Agents Day + AI model guide promos)
- ai_generated_summary (visible): *"LangChain and LangGraph, two open-source frameworks, are compared for building LLM applications. The video details their unique…"* (quality/accuracy may vary)
- hashtags (visible): `#langchain #llm #largelanguagemodels`
- chapters (visible): Intro · LangChain · LangGraph · Comparison …
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_2.13.05_AM-f6fca029…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

Process this one, but mark it as implementation-pattern taxonomy, not a thesis-spine source.

It overlaps with the Harrison Chase / LangChain sources, but it is not a duplicate. Those were strategic/runtime sources about long-horizon agents, traces, context engineering, and ambient agents. This IBM video is a simpler comparison:

LangChain = mostly sequential chains.
LangGraph = stateful graph workflows with loops, nodes, edges, and shared state.

That distinction is very relevant to OMNI.

Core takeaway

The video explains LangChain as a framework for chaining LLM operations in a sequence, like retrieve → summarize → answer. It then explains LangGraph as a specialized library for stateful, multi-agent, nonlinear workflows, where nodes can access and modify shared state, and the system can loop back depending on user input or evolving conditions.

For OMNI, the key idea is:

Sequential chains are useful for simple AI workflows; governed care orchestration needs stateful graphs.

OMNI translation
1. LangChain maps to simple source/evidence workflows.

LangChain-style chains are fine for things like:

retrieve document,
split chunks,
summarize,
answer a question,
produce a draft,
classify a source,
extract metadata.

That is useful for Knowledge Reservoir ingestion, document summarization, and simple RAG.

But that is not enough for OMNI CNS.

2. LangGraph is closer to CNS.

LangGraph’s stateful graph structure is more OMNI-shaped because care workflows are not linear.

A patient message may branch into:

routine answer,
clarification request,
provider review,
urgent escalation,
scheduling issue,
payment/entitlement issue,
missing consent,
documentation update,
no-op/suppression.

Then it may loop back when the patient replies, the provider edits, a lab arrives, or a policy gate changes.

That is graph/state/orchestration territory, not simple chain territory.

Keeper:

OMNI workflows should be modeled as stateful orchestration graphs, not brittle one-way prompt chains.

3. The “state” concept is the important part.

The video’s most useful point is that LangGraph treats state as a core component accessible/modifiable by nodes.

OMNI needs exactly that — but care-grade.

State includes:

current patient context,
source event,
orchestration run state,
retrieved evidence,
authority labels,
missing information,
human review state,
provider decision,
domain commit/no-commit,
pending follow-up,
trace history.

But OMNI must distinguish agent state from domain truth.

Doctrine:

Agent/orchestration state can guide work; owning domains still commit truth.

4. Loops matter because care is interactive.

LangGraph allows loops and revisiting previous states. That matters because OMNI workflows are not “done” after one model answer.

Examples:

patient gives incomplete info → OMNI asks clarification → patient replies → risk reclassified;
agent drafts message → provider edits → system learns style but not policy;
evidence extracted → reviewer rejects → source is reprocessed;
appointment changes → commerce/doc/follow-up state must be rechecked;
build agent fails tests → revises patch → reruns proof.

Keeper:

OMNI needs loop-capable workflows with checkpoints, not single-pass automation.

5. Do not over-import the framework.

The lesson is not “OMNI must use LangGraph.”

The lesson is architectural:

chains for simple linear tasks,
graphs for stateful interactive workflows,
explicit nodes/edges/state,
loops,
shared run state,
traceability,
human intervention points.

Whether implemented with LangGraph, custom CNS code, Temporal, durable execution, event sourcing, or another orchestration layer is a build decision.

Where it lands

CNS / orchestration: major. This is a clean vocabulary source for why CNS should be graph/state/run-oriented.

Build OS: major. Build agents need stateful loops, retries, test feedback, and checkpoints.

Knowledge Reservoirs: medium. LangChain-style chains are fine for ingestion/extraction; deeper semantic routing may need graph workflows.

§B AI substrate: medium. Useful implementation vocabulary, not deep model theory.

§C Governed Capability Exchange: medium. Tool/action nodes need capability envelopes and authority checks.

Doctrine / primitive pressure

Potential concepts:

chain_workflow
stateful_graph_workflow
node
edge
workflow_state
orchestration_state
loopback_transition
stateful_agent_run
graph_node_policy
state_checkpoint
node_access_scope
agent_state_not_domain_truth
graph_orchestration_trace

Keeper doctrine:

Use chains for simple retrieval/generation workflows; use stateful graphs for care/business orchestration where context evolves, branches, loops, and requires review.

Second keeper:

OMNI’s CNS should preserve orchestration state without confusing that state for committed domain truth.

What not to import blindly

Do not let framework vocabulary replace OMNI doctrine.

Do not assume LangGraph state equals clinical truth.

Do not build every workflow as a graph if a simple chain is enough.

Do not let graph nodes directly mutate patient/care/commercial truth without domain APIs and commit gates.

Do not create agent spaghetti: graphs still need ownership, tests, traces, and review.

Priority / confidence

Priority: 3.5/5
Confidence: 5/5
Suggested analysis depth: targeted_semantic

Useful as a framework vocabulary / implementation-pattern source. Not a spine source, but it cleanly supports the idea that OMNI’s serious workflows need stateful graph orchestration, while simple ingestion/summarization can stay as chains.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus deep-read extraction  ·  layer: `analysis_nonbinding`  ·  EVRUN-2026-000001 (G7 dev-substrate)
- reviewer: `Opus` · type: `AI assistant` · at: `2026-06-08` · purpose: `registry-first concept extraction → routing` · binds nothing (`GRD-036`/`GRD-044`)

**22 clusters (vocabulary-tier). LangChain/LangGraph = Lens-B comparators (GRD-039); import orchestration GRAMMAR, not frameworks.**
1. **`chain_workflow`** — forward-only ordered sequence (DAG); OMNI linear pipeline for bounded ingestion/extraction. "executing a sequence of functions in a chain" 0:48. **PARTIAL → vocabulary.**
2. **`retrieve_summarize_answer_pipeline`** — retrieve→summarize→answer; template for Evidence Plane/KR ingestion, NOT patient-care orchestration. "retrieve, summarize, and answer" 1:21. **PARTIAL → vocabulary (KR/Build-OS).**
3. **`langchain_component_modularity`** — composable stages, each typed capability w/ own model/tool envelope; supports inference-budget routing. "modular architecture… high level components" 3:08. **AFFIRM → vocabulary → watch.**
4. **`stateful_graph_workflow`** — nodes/edges/shared-state for nonlinear/branchy/revisiting = primary CNS orchestration grammar. "stateful multi-agent systems… nonlinear workflows" 3:24. **PARTIAL → vocabulary(elevated).**
5. **`graph_node`** — bounded action unit (classify/escalate/draft/invoke/review-gate/commit-candidate) w/ ownership+envelope+trace. "each action is considered as a node" 4:21. **ABSENT → vocabulary.**
6. **`graph_edge`** — governed transition/routing between nodes (branch conditions/authority gates/risk), auditable. "transitions between these things… edges" 4:29. **ABSENT → vocabulary.**
7. **`orchestration_run_state`** — run-state guides work across nodes; **is NOT committed domain truth.** "state component… maintain the task list" 4:49 · "all nodes can access and modify the state" 5:12. **PARTIAL → vocabulary(spine-adjacent).**
8. **`hub_intent_router_with_loopback`** — central process-input node → routes to action nodes → always returns to hub; matches interactive care re-entry. "always returning back to the process input node" 5:25. **PARTIAL → vocabulary.**
9. **`cyclic_loops_and_state_revisit`** — loops + revisiting prior states for clarification/edit/reprocess; checkpoints required. "allows for loops and revisiting previous states" 7:05. **PARTIAL/AFFIRM → vocabulary (pairs 089).**
10. **`chain_dag_vs_graph_loops_structural_contrast`** — chains for known sequential pipelines; graphs for interactive evolving; don't graph everything. "chain structure… DAG" 6:24. **ABSENT → vocabulary.**
11. **`state_management_spectrum`** — limited pass-through vs robust shared core state; OMNI needs care-grade persistent run-state. "state management… more robust" 8:29. **PARTIAL → vocabulary.**
12. **`use_case_allocation_sequential_vs_interactive`** — pipeline-class → chain; interactive care/build → graph. "excels at sequential tasks" 8:48. **PARTIAL → vocabulary.**
13. **`orchestration_state_not_domain_truth`** — **(AFFIRM keeper)** orchestration state guides; owning domains commit via APIs + authority gates; LangGraph state ≠ clinical truth. (Knox) "do not assume LangGraph state equals clinical truth". **AFFIRM (GRD-029) → spine.**
14. **`framework_comparator_lens_b_not_canon`** — import grammar; don't canonize framework APIs/brand; impl may be LangGraph/custom/Temporal. "open source frameworks" 0:42. **AFFIRM (GRD-039) → no-op(guardrail) → watch.**
15. **`multi_agent_systems_primary_focus`** — LangGraph = multi-agent; CNS coordinates fleets bounded (GRD-029), not sovereign brains. "primary focus of LangGraph… multi agent systems" 6:02. **PARTIAL → vocabulary → watch (pairs 089).**
16. **`care_workflow_branching_taxonomy`** — (Knox) care messages branch (routine/clarify/provider-review/urgent/scheduling/payment/consent/doc/no-op) then loop; CNS routing vocabulary. **PARTIAL → vocabulary → watch (exemplar not canon).**
17. **`loop_capable_checkpoints_not_single_pass`** — (Knox) interactive care/build needs loops w/ checkpoints (Protocol §8); anti single-pass. "loops and revisiting previous states" 7:05. **PARTIAL/AFFIRM → vocabulary.**
18. **`node_authority_envelope_no_direct_domain_mutation`** — (Knox guardrail) nodes emit candidates to owning domains; commit needs authority gate; prevents LangGraph-state-as-EHR. **AFFIRM (GRD-029) → spine.**
19. **`implementation_pattern_taxonomy_not_spine_source`** — (Knox) this = implementation-pattern taxonomy complementing Chase 059/062; ~3.5/5 priority. **AFFIRM → low-authority-watch → watch.**
20. **`langchain_memory_vs_graph_state_distinction`** — conversation memory ≠ orchestration run-state ≠ domain truth. "memory component… conversation history" 2:40 · "state is a core component" 8:36. **PARTIAL → vocabulary.**
21. **`graph_orchestration_trace`** — explicit nodes/edges/state enable traceability (which node/state-delta/edge); first-class audit. (Knox) "graphs still need… traces". **PARTIAL → vocabulary → watch (pairs 058 cockpit).**
22. **`anti_graph_everywhere_minimal_chain_doctrine`** — (Knox guardrail) don't graph what a chain suffices; minimal-sufficient topology. "great where you know the exact sequence" 6:47. **PARTIAL → vocabulary.**

**Net-new:** `chain_workflow`, `stateful_graph_workflow`, `graph_node`, `graph_edge`, `orchestration_run_state`, `hub_loopback_transition`, `loopback_transition`, `node_access_scope`, `workflow_topology_allocation`, `graph_orchestration_trace`(partial). AFFIRM (not new): `orchestration_state_vs_domain_truth` (GRD-029). REJECT as primitives: LangChain/LangGraph/document_loader/text_splitter/memory (Lens-B only). **Reread:** Chase 059/062; live-dynamic CNS 087 (graph=topology, 087=physics); loops/fleets 089; cockpit 058; AOP tension 057/056; CNS contract draft (node/edge/state/loopback vocab w/o framework coupling); comparator registry (append LangChain+LangGraph Lens-B); zero-click 081 (node write scope).

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(I fill later — derived work lives in EVRUN; leave `TK`)*
- EVRUN(s): `TK` · inventory: `TK` · routing_addendum: `TK` · impact §B/§C/security/Build-OS/contract: `TK` · promotion: `TK`

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged §B/CNS orchestration-pattern reference (chain vs graph; pairs w/ Chase 059/062); IBM-channel; AI-summary in source.

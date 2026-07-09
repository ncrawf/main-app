# EVSRC-2026-000217 — Harbor x LangChain: A Unified Stack for Evaluating Agents

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000217_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(lifted verbatim from Review 001 operator metadata block — `identity_confidence: high_from_operator_metadata`)*
- evsrc_id: `EVSRC-2026-000217`  ·  filename: `EVSRC-2026-000217_TK.md`  ·  proposed_slug: `harbor-langchain-unified-agent-eval-stack` (file NOT renamed this pass)
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=Rh6KWngr8T4`  ·  source_title: `Harbor x LangChain: A Unified Stack for Evaluating Agents`
- channel_or_org: `LangChain`  ·  speaker: `Nick, Software Engineer at LangChain`  ·  published_at: `Jul 1, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + description + chapter list + pasted transcript`
- content_type: `agent evaluation / Harbor / LangChain / Deep Agents / LangSmith / sandboxed execution / reproducible evals / deterministic verification / task datasets / isolated environments / observability / runtime metrics`  ·  source_reliability_context: `practitioner — official LangChain engineering walkthrough from a LangChain software engineer; high-value implementation reference for how agent evaluations must evolve once agents read/write files, run code, use full computers, and act over long-running tasks. Tooling-specific details (Harbor/LangSmith/LangGraph) stay implementation examples, not mandatory OMNI doctrine.`  ·  topic_tags_light: `[LangChain, Harbor, LangSmith, Deep_Agents, agent_evaluation, sandboxed_agent_run, deterministic_verification, task_dataset, LangGraph_registry, agent_manifest, Docker_environment, reward_score, parallel_eval_runs, Build_OS, Agent_Work_Protocol, AI_Substrate, Polaris]`

## §0.1 — People / authorship / authority context  *(lifted from Review 001 operator metadata — `identity_confidence: high_from_operator_metadata`)*
- primary speaker(s):
  - name: `Nick` · role_in_source: `presenter` (software engineer walkthrough) · affiliation_at_publication: `LangChain` · speaker_type: `vendor / educator (engineer)` · authority_context: `LangChain software engineer presenting Harbor (open-source agent-eval framework) + LangSmith + Deep Agents; first-party implementation authority on the tooling, vendor-positioned` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `LangChain`  ·  interviewer / moderator / host: `n/a (single-presenter walkthrough)`
- event_context: `LangChain product/engineering walkthrough video (Harbor x LangChain), published Jul 1 2026`  ·  perspective / conflict notes: `Vendor source — Harbor/LangSmith/LangGraph are the presenter's own stack. Import the PATTERN (sandbox + dataset + deterministic verifier + observability + agent manifest), NOT the specific tooling as mandatory doctrine (`GRD-039` watch-not-worship). Near-twin of EVSRC-2026-000215 (same presenter, same Harbor+eval topic) — 217 adds the Deep Agent taxonomy, the agent/graph registry (manifest), and a source-cited deep-research example.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [~] update EVRUN concept registry (cross-source) *(fold packet returned to parent — this file does NOT edit the registry)* · [~] update coverage matrix *(parent)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Why agent evals needed to change
0:00
Hi everyone, I'm Nick and I'm a software engineer at LangChain. Today I want to talk
0:06
about agent evaluations and where we see them heading, especially as agents become
0:11
a lot more complex, long-running and action-oriented. So in this video I'll
0:16
go through an example of a Deep Agent, I'll see how it runs in an isolated
0:21
sandbox, and then we'll introduce Harbor, which is an open source evaluation
0:25
framework for actually running these evaluations reproducibly.
From output strings to real environments
0:32
Let's talk about how evals have changed recently. So previously,
0:36
if we had an LLM or agent, we could grade its effectiveness
0:40
based on the output string. However, as agent capabilities
0:45
have increased, this has become a lot more difficult because
0:49
we've given agents access to entire computers to read files
0:54
or run code, change things within that environment.
0:58
Now that we change things within the environment,
1:01
evaluating these complex long-running agents
1:04
requires a new evaluation setup.
What makes a Deep Agent different
1:07
So one of these complex agents is a Deep Agent.
1:12
Deep Agent is an agent that's designed to plan and act
1:16
over multi-extended tasks.
1:19
So a standard agent simply calls tools in a loop.
1:24
A Deep Agent adds a planning tool.
1:26
It adds sub-agents.
1:28
It adds a file system that's able to read and write files.
1:33
The Deep Agent packages these capabilities
1:36
so you can build an application on your own.
Building a deep research agent
1:40
Now, let's say we've built a deep research agent, which
1:43
is a type of Deep Agent.
1:46
So for this deep research agent, say
1:49
we have a sources folder with different markdowns of sources.
1:54
An agent is able to view these sources.
1:57
It's able to do this research and synthesis loop of reading the sources,
2:01
deciding what matters for the task that it's given.
2:05
And as an output, it writes a report, this report.markdown,
2:09
and it's saved to a specific path with a formatting and it cites the claims
2:15
from the source.
2:16
Let's look into a specific deep research agent we've built.
2:20
We have a Deep Agent we created with the backend accessing
2:24
the file system here under Agent File System.
2:28
Under this folder, we have existing docs under Info
2:34
that the agent can use to generate the report.
2:37
Let's say we want the report to generate
2:39
under the Reports file,
2:43
specifically on the subject noise pollution.
Running the agent: noise pollution demo
2:47
We can kick off an agent run with a simple message "generate report on noise pollution."
2:52
The agent should read through the markdown files it has under "info."
2:56
Find the right file on noise pollution. Synthesize the findings to a markdown under reports.
3:01
The system prompt takes care of ensuring the agent knows how to format where to generate the report and where to find the content.
3:09
I can kick this off with my runner.
3:13
As you can see, the agent returned back a final message saying it has successfully generated
3:18
a report about noise pollution. It has been saved to our reports folder,
3:24
and it consists of material from the original source file. In order to verify this, I can go to
3:31
the reports. I can see that the file exists. The report looks correct, but how do we actually
3:36
evaluate this. And what about if we have a wider variety of tasks we want to
3:42
evaluate, like generating different types of reports all synthesizing from
3:48
different sources? How can we create evaluations here? All of these questions
3:53
can be answered by Harbor. So Harbor is an open source evaluation framework for
Introducing Harbor
3:58
agents that acts in real environments. And in order to utilize Harbor we need to
4:05
bring three things. We need to bring an agent. So essentially an agent with a function that
4:11
actually compiles this agent, including all the tools, prompts, logic, etc. We need to bring a
4:17
sandbox, whether that's locally with Docker or a cloud environment such as a LangSmith Sandbox.
4:25
And we need a data set. So a data set is a folder of tasks. I'll go into it more in the next slide.
Datasets and tasks in Harbor
4:33
But for now, we just need to know that we bring these three variables here, an agent to sandbox,
4:39
a dataset, and we're able to actually run all of these agents in their own clean and reproducible
4:45
environment. A dataset is just made up of tasks. So let's say we have a dataset terminal bench,
4:55
and it has three separate tasks, a Hello World task, a fixed bug task, and a parse CSV. So each
5:02
task is just its own sub folder essentially. And if we zoom in within one specific sub
5:08
folder, that's what a task is. It contains a few things that are necessary. It contains
5:14
a task.toml, which includes some of the configuration variables for a timeout CPU
5:20
memory. It contains an instruction dot MD, which is the main driver of the task. It's
5:32
We have an environment folder which contains the image the sandbox runs so the starting point essentially for every
5:40
clean run and we have a test folder that includes our test script which
5:46
deterministically checks whether or not this task actually passes as well as perhaps the assertions within the Python file for each
5:57
each assertion for that test and
6:00
and we have an optional solution folder
6:03
that's used with this Oracle agent.
6:05
So yeah, that is what a dataset and a task
6:11
is the format of both and what they look like.
Turning a demo into a verifiable eval
6:15
Now, if we look at our previous deep research agent example,
6:18
we can run our agent using Harbor.
6:21
Let's take our original task of running our report
6:24
about noise pollution.
6:26
We want to be able to run this task
6:28
in its own sandbox environment and verify it generates the report correctly.
6:33
How do we do this?
6:35
We need the task to not just include the instructions here, but also have a script which deterministically
6:41
checks using PyTest, whether or not 1) the report is where it should be, 2) the report
6:48
is properly formatted, and 3) the report uses the right content and cites the right sources.
6:55
These can all be found under tests and our pytest here, as well as the script which
7:03
executes it.
7:05
Each task must also have an image that acts as the starting point for the environment
7:10
for a task.
7:12
That can be found under environment and Docker.
7:16
For our data set, there are actually two tasks, one of which is generating a report on noise
7:22
pollution.
7:23
The other is generating a report on deep-sea research.
7:29
Each task has its own verification process.
7:32
Now that we've gone over the dataset,
7:34
let's go over how our Deep Agent integrates.
7:37
In order to integrate our Deep Agent with Harbor,
7:40
we need two main files.
7:42
We need a JSON or a langgraph.json registry,
7:46
which includes dependencies as well as this graph reference
7:52
that points to the function that actually creates our Deep Agent.
Integrating Deep Agent with Harbor
7:57
Previously, we ran our agents locally.
7:59
I simply use the same logic to build this function here.
8:04
And we need to include next to this registry
8:08
the actual code for building up our agent.
8:12
In order to run both of these tasks concurrently
8:15
in their own environment, we use Harbor.
8:18
First, we run pip install harbor[langsmith]
8:22
to install harbor as well as LangSmith.
8:25
We need to have our model API keys for a Deep Agent,
8:28
as well as the LangSmith API key exported to our shell.
Running Harbor via CLI
8:32
Now we can actually do Harbor Run.
8:35
We specify the dash P here to include the path
8:38
to where this dataset exists locally,
8:41
if it does exist locally.
8:43
We specify the agent type is LangGraph here.
8:48
The project path is where our research agent
8:50
actually lives, which is under deep agent.
8:54
And we are running each environment locally with Docker,
8:57
just specified with the -e Docker.
9:00
Like we mentioned before,
9:02
running one task isn't very interesting,
9:04
but as your tasks grow, we can run them in parallel,
9:07
either with Docker or in the cloud
9:09
with the LangSmith Sandbox.
9:11
All we need to do is replace this -e Docker
9:15
with LangSmith,
9:17
and ensure our API key exists in a local shell.
Viewing results in LangSmith
9:21
Now we can look at the LangSmith Observability Platform
9:24
to view our evaluations.
9:26
This exists on LangSmith within data sets
9:29
slash experiments because we specified
9:32
with this dash dash plugin LangSmith here.
9:35
And we also specified the data set name
9:38
as well as the experiment name.
9:42
As you can see, I'm under the data sets and experiments tab.
9:46
And within that, I'm under the demo reports data set.
9:50
From our experiment we ran, we can view the reward,
9:54
which is whether or not the task scores a one or zero
9:58
for the task.
9:59
We can also view latency, tokens used, and more metrics.
Recap and getting started
10:05
So to recap, as agents have become more and more complex,
10:08
like Deep Agents, we've needed our evaluations
10:12
to evolve with that as well.
10:14
And like we've mentioned, they've evolved by making sure
10:18
every run has their own clean isolated environment.
10:21
They have a deterministic way of checking
10:24
whether or not that task actually passes.
10:28
And we have location or a place where we can inspect
10:32
and track these runs over time.
10:35
So if you wanna get started with Harbor and Deep Agents
10:38
and the integration of both,
10:40
I've linked some of the documents below.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️
source_platform: YouTube
source_url: https://www.youtube.com/watch?v=Rh6KWngr8T4
source_title: Harbor x LangChain: A Unified Stack for Evaluating Agents
channel_or_org: LangChain
speaker: Nick, Software Engineer at LangChain
published_at: Jul 1, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + description + chapter list + pasted transcript
content_type: agent evaluation / Harbor / LangChain / Deep Agents / LangSmith / sandboxed execution / reproducible evals / deterministic verification / task datasets / isolated environments / observability / runtime metrics
source_reliability_context: Official LangChain engineering walkthrough from a LangChain software engineer. High-value implementation source for how agent evaluations must evolve once agents can read/write files, run code, use full computers, and act over long-running tasks. Strong reference for sandboxed agent runs, task-folder eval datasets, deterministic pytest verification, Docker/LangSmith sandbox execution, and LangSmith experiment observability. Tooling-specific details should remain implementation examples, not mandatory OMNI doctrine.
priority: 5/5
depth: implementation_reference
recommended_status: route to Build-OS, AI Substrate, Agent Work Protocol, Evaluation Framework, sandbox runtime, deterministic verification, observability, runtime metrics, CI/CD for agents, Polaris/proof layer, and production-readiness doctrine.

Topic tags:
[LangChain, Harbor, LangSmith, Deep_Agents, Nick_LangChain, agent_evaluation, production_agent_evals, sandboxed_agent_run, isolated_execution, reproducible_environment, deterministic_verification, pytest_verifier, task_dataset, instruction_md, task_toml, Docker_environment, LangSmith_Sandbox, agent_eval_bundle, trace_observability, reward_score, latency_metrics, token_metrics, parallel_eval_runs, LangGraph, Build_OS, Agent_Work_Protocol, AI_Substrate, Polaris, proof_layer, CI_CD_for_agents]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 5/5
Depth: implementation reference
Recommended status: route to Build-OS / Agent Eval Framework / AI Substrate / Polaris / Agent Work Protocol / sandbox runtime / CI-CD for agents.

Core takeaway

This source is about the evaluation shift from checking text output to testing agent behavior inside real environments.

Old LLM eval:

Did the output string look right?

New agent eval:

Did the agent act correctly inside an environment it could read, write, mutate, and execute within?

That is the major keeper.

OMNI translation:

Any OMNI agent that can touch state, files, schemas, documents, messages, clinical memory, ledgers, schedules, or external tools needs reproducible task environments, deterministic verification, observable traces, and pass/fail metrics before production trust.

This is not abstract theory. This is the practical eval substrate.

Key concepts to preserve
1. Output-string grading breaks once agents act

The video says agent evals used to be simpler because you could grade the output string. But now agents can read files, run code, and change things inside an environment.

OMNI keeper:

Final output is not enough.

For OMNI, this applies to:

D7 extraction agents
Build-OS code agents
schema migration agents
patient-message routing agents
billing/entitlement agents
source-review agents
workflow-resolution agents
future clinical support agents

The evaluation question becomes:

Did the agent produce the correct final state, not merely a plausible response?

2. Deep Agent definition matters

The source distinguishes a standard agent from a Deep Agent.

Standard agent:

calls tools in a loop.

Deep Agent adds:

planning tool
subagents
filesystem access
read/write ability
multi-step task execution

OMNI keeper:

This is a clean vocabulary distinction.

Possible OMNI taxonomy:

simple_tool_agent
Calls tools in a bounded loop.

deep_work_agent
Plans, delegates, reads/writes artifacts, uses filesystem or stateful workspace, and produces durable outputs.

governed_domain_agent
Operates inside a domain lane with authority boundaries, policy gates, traces, and human/domain commit.

This source helps define when eval requirements become stricter.

3. Agent eval requires a real reproducible environment

The video’s core pattern:

bring agent + sandbox + dataset.

That triad should be preserved almost directly.

OMNI version:

agent + isolated_environment + task_dataset + deterministic_verifier + observability

The agent is not tested in an abstract chat. It is tested inside a clean environment with known starting state.

Doctrine candidate:

Agents that act on state must be evaluated against state, not prose.

4. Dataset as folder of tasks

Harbor’s dataset structure is important:

Each dataset contains multiple task folders.

Each task includes:

task.toml
instruction.md
environment folder / image
test folder
deterministic test script
optional solution folder

OMNI keeper:

This maps very cleanly to agent_eval_bundle.

Potential OMNI artifact:

agent_eval_task

Fields:

task_id
instruction
starting_state
environment_image
allowed_tools
resource_limits
expected_artifacts
deterministic_verifier
assertions
risk_tier
trace_requirements
pass_fail_score
latency_budget
token_budget
regression_suite_membership

This is one of the most concrete implementation patterns so far.

5. Deterministic verification is the heart

For the deep research example, the verifier checks:

report exists where it should
report is formatted correctly
report uses the right content
report cites the right sources

OMNI keeper:

This is directly portable to OMNI.

Examples:

For D7 extraction:

did it preserve exact values?
did it cite source page/line?
did it avoid unsupported inference?
did it classify document type correctly?

For Build-OS:

did it update the correct contract file?
did tests pass?
did schema migration preserve constraints?
did it avoid touching forbidden files?

For source-review pipeline:

did it preserve metadata?
did it route to correct doctrine sections?
did it distinguish net-new vs affirm?
did it avoid promoting vendor-specific claims?

Doctrine candidate:

Agent outputs need deterministic verifiers wherever deterministic verification is possible.

6. Sandbox isolation per task

Each task runs in its own clean environment, either local Docker or LangSmith Sandbox.

OMNI keeper:

Every eval run should be:

isolated
reproducible
disposable
parallelizable
resource-bounded
inspectable

This matters because agents mutate environment state. Without isolation, eval results become contaminated.

Doctrine candidate:

Agent eval environments must reset state between runs.

7. Parallel evals are production-readiness infrastructure

The video emphasizes that running one task is not interesting. The value comes when task count grows and you run many tasks in parallel.

OMNI translation:

A single impressive demo means almost nothing.

A production candidate needs:

multiple task families
edge cases
regression cases
failure cases
adversarial cases
historical cases
cost/latency tracking across runs

Doctrine candidate:

Production confidence comes from eval corpus breadth, not one successful run.

8. LangGraph registry / graph reference

This video adds a more concrete integration detail than the previous Harbor example: a langgraph.json or registry file points to the function that creates the agent, with dependencies and project path.

OMNI keeper:

Build-OS needs something analogous:

agent_manifest

Potential fields:

agent_name
owning_domain
graph_or_entrypoint
dependencies
model_policy
tool_policy
sandbox_policy
eval_suite
trace_sink
secrets_policy
deployment_lane
rollback_policy

This is useful because agents need to be registered, not just invoked.

Doctrine candidate:

Agents should be declared through manifests before they are evaluated or deployed.

9. Observability closes the loop

Results are viewed in LangSmith datasets/experiments with:

reward score
latency
tokens used
experiment name
dataset name
task-level results

OMNI keeper:

Eval output should be visible as experiment history, not buried in logs.

For OMNI, the proof layer should capture:

score
task pass/fail
verifier output
trace
model/version
cost/tokens
latency
environment image
commit/version
regression delta

Doctrine candidate:

Evals become proof only when their run context is observable and replayable.

OMNI translation

This source gives OMNI the concrete shape of a governed agent eval system.

Not:

“Ask the model to solve a task and see if it sounds right.”

But:

Package a task. Reset the environment. Run the agent. Let it read/write/act. Verify the resulting state. Store trace, score, cost, latency, and artifacts. Repeat across a corpus.

That is Build-OS gold.

Likely OMNI landing zones

Build-OS

eval task folders
agent manifests
deterministic verifiers
sandboxed code/doc/schema/source-review agents
regression suites
CI/CD for agent changes

Agent Work Protocol

agent must declare task
run inside isolated environment
verifier required where possible
trace required
promotion requires pass/fail evidence
no production state mutation during eval

AI Substrate

model/runtime selection
sandbox execution layer
graph/agent registry
tool permissions
token/latency/cost tracking

Polaris / proof layer

eval result as proof artifact
trace lineage
environment lineage
verifier output
model/version lineage
regression history

D7 / Evidence Plane

source-cited report generation maps directly to document extraction and review verification
provenance and exact citation checks become deterministic test targets
Doctrine candidates
Agents that act on state must be evaluated against state, not prose.
Final-answer evals are insufficient for agents that read, write, execute, or mutate environments.
Agent evals require agent, sandbox, dataset, verifier, and observability.
Each agent task should run in a clean reproducible environment.
Agent eval tasks should be packaged as reusable folders with instructions, environment, limits, and tests.
Deterministic verifiers are the backbone of production agent evaluation.
Production confidence comes from eval corpus breadth, not one successful demo.
Agents should be declared through manifests before they are evaluated or deployed.
Evals become proof only when their run context is observable and replayable.
Net-new / sharpen / affirm
Net-new candidates

agent_manifest
A registry artifact declaring the agent entrypoint, dependencies, owning lane/domain, tool policy, model policy, sandbox policy, eval suite, and trace sink.

eval_task_folder
A reproducible task unit containing instruction, starting environment, limits, verifier, assertions, optional solution, and expected artifacts.

state_based_agent_eval
Evaluation mode where success is determined by the state/artifacts produced by the agent, not only final text.

replayable_eval_run
A logged eval execution with environment, model, trace, verifier result, latency, token cost, and output artifacts sufficient for inspection or rerun.

Sharpen existing

agent_eval_bundle
This source gives the concrete folder-level anatomy.

isolated_agent_run
Adds Docker/local vs cloud sandbox execution and one clean environment per task.

deterministic_task_verifier
Sharpens from generic “tests” into specific assertions over file existence, formatting, content, and citations.

Polaris proof layer
Eval runs become proof artifacts only if trace + verifier + environment + metrics are preserved.

Build-OS
Adds CI/CD-like structure for testing agent workers before promotion.

Affirm
agent evals must evolve beyond string matching
sandboxing is mandatory for action-oriented agents
deterministic checks are preferred wherever possible
task datasets are reusable assets
observability and metrics are part of evaluation, not an afterthought
parallel evals matter for real coverage
Deep Agents need stricter evaluation than simple chat agents
Reject / do not over-import
Do not make Harbor mandatory OMNI implementation.
Do not make LangSmith mandatory OMNI observability.
Do not assume every task has a fully deterministic verifier.
Do not treat reward score alone as authority.
Do not run evals against real production state when write access exists.
Do not equate sandbox success with clinical/business authority.
Do not skip human/domain promotion gates for high-risk workflows.
Hard read

This is a production-agent eval spine source.

It gives the exact operational answer to “how do we trust agents that can actually do things?”

Not by vibe.
Not by demo.
Not by final answer.
Not by screenshots.

By:

task dataset → clean sandbox → agent run → deterministic verifier → observable trace → metrics → regression history.

Shortest OMNI version:

OMNI needs Harbor-like eval bundles for every meaningful agent lane: declared agent, reproducible task folder, clean environment, deterministic verifier, trace, score, latency, tokens, and replayable proof. That is how Build-OS turns agents from demos into governed production workers.

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

**Reviewer:** Opus (agent) · **at:** 2026-07-07 · **layer:** `analysis_nonbinding` · binds nothing (`GRD-036`/`GRD-044`). Formalizes Review 001 (Knox); verifies/sharpens, does not re-derive.

### Headline verdict
**This is the near-twin/second pass of the Build-OS AGENT-EVAL SPINE source (`EVSRC-2026-000215`)** — same presenter (Nick @ LangChain), same Harbor + sandbox + dataset + deterministic-verifier + observability triad — but 217 sharpens it in three OMNI-load-bearing ways: **(1) an agent-capability taxonomy** (standard agent = tools in a loop → **Deep Agent** = + planning tool + sub-agents + read/write filesystem + multi-step) that gives OMNI the *rule for when eval strictness must escalate*; **(2) a declare-before-run registry** (`langgraph.json` graph reference + deps + project path → net-new `agent_manifest`): agents are **registered, not just invoked**; and **(3) a source-cited deep-research example** (read a `sources/` folder → synthesize → write `report.md` to a fixed path → **cite the claims from the source** → verifier checks the report exists, is formatted, uses the right content, and cites the right sources) that is a **literal mirror of OMNI's own D7 evidence-extraction and of THIS EVRUN source-review pipeline**. Every concept AFFIRMs existing OMNI doctrine (Build-OS `REV-158`, Agent Work Protocol, Polaris proof layer, candidate≠commit, operating-metrics) and every one is **build=absent** (repo grep: no `agent_manifest`/`langgraph`/`deep_agent`/eval-bundle/verifier/micro-VM harness; only domain parity tests `scripts/test-*.ts` exist — the same "verifiers on domain logic, not agent-eval" partial echo noted for 215). Net-new yield is small and mostly captured by 215/216 already: **1 genuine net-new (`agent_manifest`)** + **1 vocabulary NAME (`deep_agent` / agent-capability-tier→eval-strictness)**; the rest of Knox's mint list (`state_based_agent_eval`, `eval_task_folder`, `replayable_eval_run`, `agent_eval_task`) are re-mints of 215's `agent_eval_bundle` / cluster-1 / `operational_trace_contract`. Tier: **full_semantic (Build-OS eval substrate; spine-reinforcing sibling of 215).** Vendor caveat stands: import the PATTERN, not Harbor/LangSmith/LangGraph as mandatory tooling (`GRD-039`).

### A. Concept clusters
| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Output-string eval breaks once agents act on environments | When an agent reads files / runs code / mutates an environment, grading the output string is no longer valid — eval must judge resulting state | Build-OS · Agent-Work-Protocol · §B eval · Polaris proof | *"given agents access to entire computers to read files or run code"* [0:49] | AFFIRM | absent | none | spine | promote(watch) |
| 2 | Agent-capability taxonomy → eval-strictness escalates | Standard agent = tools in a loop; **Deep Agent** = + planning tool + sub-agents + read/write filesystem + multi-step; capability tier sets required eval rigor (sharpens `autonomy_level`) | §B autonomy/runtime · CNS · Agent-Work-Protocol · Build-OS | *"standard agent simply calls tools in a loop. A Deep Agent adds a planning tool"* [1:19-1:24] | PARTIAL | absent | none | spine | promote(watch) |
| 3 | Deep-research agent = source→synthesize→cite→verify (OMNI mirror) | Read a `sources/` folder, synthesize, write a report to a fixed path, **cite claims from source** — a literal analog of D7 extraction + THIS EVRUN review pipeline | D7 / Evidence-Plane · Build-OS · Agent-Work-Protocol · this EVRUN method | *"it writes a report… and it cites the claims from the source"* [2:09-2:15] | AFFIRM | partial | none | spine | promote(watch) |
| 4 | Bring agent + sandbox + dataset (eval as structured pipeline) | Evals are a governed triad/pipeline (agent + isolated env + task dataset + deterministic verifier + observability), not ad-hoc chat testing | Build-OS · Agent-Work-Protocol · CNS | *"we need to bring three things… an agent… a sandbox… a data set"* [4:05-4:33] | AFFIRM | absent | none | spine | promote(watch) |
| 5 | Dataset = folder of reproducible task folders | Each task = folder: `task.toml` (timeout/CPU/mem limits) + `instruction.md` + environment image + test folder + optional solution (Oracle) — reproducible work units | Build-OS · Agent-Work-Protocol · Evidence-Plane style · §C | *"task.toml… instruction dot MD… environment folder… test folder… solution folder"* [5:14-6:03] | AFFIRM | absent | none | spine | promote(watch) |
| 6 | Deterministic verifier: exists · formatted · right content · cites right sources | A PyTest/bash check that decides whether the required state change actually occurred; provenance/citation checks are deterministic test targets | Build-OS · Agent-Work-Protocol · Polaris · D7 · domain-contracts | *"report is where it should be… properly formatted… cites the right sources"* [6:41-6:55] | PARTIAL | partial | tension (T6: unverifiable clinical outputs) | spine | promote(watch) |
| 7 | Each task carries a clean starting-state image | Every run boots from a known environment image (Docker) — the reproducible starting point that makes results comparable | Build-OS · §C Security · Agent-Work-Protocol | *"an image that acts as the starting point for the environment"* [7:05] | AFFIRM | absent | none | vocab | promote(watch) |
| 8 | Declare-before-run: agent/graph registry (agent_manifest) | Agents are **registered, not just invoked** — a registry (`langgraph.json`) declares entrypoint/graph-reference + deps + project path; OMNI extends to owning-domain/tool-policy/model-policy/sandbox-policy/eval-suite/trace-sink | Build-OS · Agent-Work-Protocol · §B (agent registry) · CNS | *"langgraph.json registry… graph reference… points to the function that… creates our Deep Agent"* [7:42-7:52] | ABSENT | absent | none | spine | promote(watch) |
| 9 | Isolated · disposable · parallel runs (Docker/cloud) | Each task runs in its own clean environment; scale by running many in parallel (local Docker or cloud sandbox) — isolation prevents state contamination | Build-OS · §C Security · Agent-Work-Protocol | *"run them in parallel, either with Docker or in the cloud"* [9:04-9:09] | AFFIRM | absent | none | spine | promote(watch) |
| 10 | Observability closes the loop: reward · latency · tokens | Results are experiment history (reward 1/0, latency, tokens, dataset/experiment name) — the practical basis for agent operating metrics + replayable proof | operating-metrics/BIZOPS · CNS §11 trace_lineage · Polaris · Build-OS | *"view the reward… latency, tokens used, and more metrics"* [9:50-10:01] | AFFIRM | absent | tension (T5: green-eval≠ship) | spine | promote(watch) |
| 11 | Recap: clean env + deterministic check + track-over-time | Production trust = isolated clean run + deterministic pass/fail + a place to inspect/track runs over time (not one impressive demo) | Build-OS · Agent-Work-Protocol · Polaris · operating-metrics | *"clean isolated environment… deterministic way of checking… track these runs over time"* [10:18-10:35] | AFFIRM | absent | none | spine | promote(watch) |

### B. Net-new primitives
Dedup vs existing OMNI + wave-3-minted (CNS/candidate≠commit, workflow_lane_as_architecture_unit, capability_envelope, delegated_authority_envelope, non_human_actor/represented_principal/delegation_chain, ai_model_registry, model_lineage, trace_lineage, context_packet, model_placement_policy, inference_budget_policy, runtime_cost_dominates_law, autonomy_level, source_authority, clinical_adoption, consent-specificity, projection≠truth, per-event-ownership + context_memory_budget, prefill_decode_runtime_split, prefix_cache_boundary, crypto_agility_policy, cryptographic_bill_of_materials, harvest_now_decrypt_later_risk, post_quantum_readiness_state, security_migration_lifecycle, enterprise_hill_climbing_machine, cognitive_coverage, generated_ui_as_agent_coordination_surface, promptware_kill_chain, content_authority_class, indirect_prompt_injection_guard, untrusted_content_normalizer, infected_memory_risk, agent_lateral_movement_path, assume_breach_agent_posture, ai_gateway, virtual_model_endpoint, model_admissibility_gate, outcome_per_token_metric, spec_as_agent_contract, legacy_system_interpreter, data_resilience_policy, restore_test_cadence, immutable_recovery_copy, drift_monitoring_policy, context_token_nonpropagation, chain_aware_authorization, workload_identity, tool_invocation_gateway, capability_placement_policy, **agent_eval_bundle, deterministic_task_verifier** [215], trace_to_issue_to_fix_eval_loop, write_access_eval_environment, shadow_agent_production, agent_overview_document, phase_specific_eval_policy [216]). **All EXISTS-AS verdicts dedup-pending; Opus-main verifies at fold.**

- `agent_manifest` — a Build-OS registry artifact that **declares** an executable agent before it can be evaluated or deployed: entrypoint/graph-reference · dependencies · owning lane/domain · tool policy · model policy · sandbox policy · eval suite · trace sink · deployment lane · rollback policy — **EXISTS-AS: net-new (genuine).** Distinct from 216 `agent_overview_document` (curated *runtime memory* for an agent) and from OMNI's own `AGENTS.md`/manifest-read-graph (doctrine-agent boot pointers, not executable-agent registration); distinct from 208 `spec_as_agent_contract` (per-*task* spec). Composes 201 `agent_workbench` + `capability_envelope` + `model_placement_policy` + 215 `agent_eval_bundle`. Build-OS mint candidate. *dedup-pending, Opus-main verifies.*
- `deep_agent` (agent-capability tier → eval-strictness) — vocabulary distinction: standard tool-loop agent vs Deep Agent (+planning +sub-agents +filesystem +multi-step); the load-bearing law is **capability tier sets required eval rigor** — **EXISTS-AS: net-new NAME only (vocabulary); the escalation principle sharpens `autonomy_level` + 214 `capability_placement_policy` + candidate≠commit.** Maps to Knox's proposed 3-tier taxonomy (`simple_tool_agent` / `deep_work_agent` / `governed_domain_agent` — the last = a Deep Agent bounded by domain authority + policy gates + trace + human/domain commit, i.e. the OMNI-governed form). Not a mechanism. *dedup-pending, Opus-main verifies.*
- `state_based_agent_eval` (Knox mint) — success judged by state/artifacts produced, not final text — **EXISTS-AS: already-exists-as 215 cluster-1 (agent evals ≠ output-string eval); re-mint, do not re-coin.** *dedup-pending.*
- `eval_task_folder` / `agent_eval_task` (Knox mints) — the reproducible task unit (instruction + env + limits + verifier + assertions + optional solution + expected artifacts) — **EXISTS-AS: already-exists-as 215 `agent_eval_bundle` (the folder IS the bundle-at-rest); subsume, not a separate primitive.** *dedup-pending.*
- `replayable_eval_run` (Knox mint) — a logged eval execution (env + model + trace + verifier result + latency + tokens + artifacts) sufficient to inspect or **rerun** — **EXISTS-AS: already-exists-as 215 `operational_trace_contract` + Polaris proof-bundle + `trace_lineage`; net-new only in the explicit *replay/rerun* property (fold as an attribute).** *dedup-pending.*
- `isolated_agent_run` (Knox "sharpen") — one clean disposable environment per task, local vs cloud — **EXISTS-AS: already-exists-as 215 `isolated_agent_run` (itself reconciled to 205 `assume_breach_agent_posture` eval-instance); not net-new.** *dedup-pending.*
- `agent operating metrics` (reward/latency/tokens/pass-rate) — **EXISTS-AS: already-exists-as 206 `outcome_per_token_metric` + 215 `cost_per_successful_task`; not net-new.** *dedup-pending.*

**Net-new tally for 217: 1 genuine (`agent_manifest`) + 1 vocabulary NAME (`deep_agent`/capability-tier→eval-strictness).** All else re-mint/subsume of 215/216/206/205 (dedup-pending, Opus-main verifies at fold).

### C. Reread flags
- **RF-1 — self-referential verifier for THIS pipeline.** The deep-research example (read `sources/` → synthesize → cite → verify "uses right content + cites right sources") is a literal mirror of OMNI D7 extraction AND of this EVRUN Review-003 process. A `deterministic_task_verifier` for the source-review lane could deterministically check: metadata lifted verbatim (not inferred), anchors ≤12w + timestamped, homes routed, net-new-vs-affirm distinguished, no sidecar (`GRD-044`), binds-nothing preserved (`GRD-036`). Reread when authoring Build-OS eval doctrine for the Evidence Plane itself.
- **RF-2 — verifier-coverage gap for clinical/judgment outputs (inherited from 215 RF-1/T6).** Knox again warns "do not assume every task has a fully deterministic verifier." OMNI's highest-risk agents (note-gen, clinical-evidence, care-workflow) need a **risk-tiered verification ladder** (deterministic → property/invariant → structured HITL → dual-control); care outputs default to human/dual-control. Reread with §C + CNS commit-path.
- **RF-3 — agent_manifest ↔ authority surface.** A manifest that declares tool-policy/model-policy/sandbox-policy is where `capability_envelope` + `autonomy_level` + 211 `tool_invocation_gateway` + 205 `ai_gateway` bind for an executable agent. Reread with §A/§C when the manifest becomes the enforcement anchor (declaration ≠ authorization; the manifest declares, RBAC/CNS/domain commit).
- **RF-4 — eval sandbox data governance.** "Do not run evals against real production state when write access exists" / "do not equate sandbox success with clinical/business authority." Composes 205 isolation + 204 `prefix_cache_boundary` (no cross-tenant reuse) + 216 `write_access_eval_environment` + consent-specificity. Reread with §C.
- **RF-5 — vendor lock caveat (`GRD-039`).** Harbor/LangSmith/LangGraph are the demo vehicle; the doctrine is manifest + sandbox + dataset + deterministic verifier + observability. Keep Build-OS eval doctrine tool-agnostic.

### D. One-line hard read + strongest OMNI line
- **One-line hard read:** The more an agent can *do* (plan, spawn sub-agents, read/write a filesystem, run multi-step) the less its final message can be trusted — so you **declare it (manifest), boot it in a clean disposable image, let it act, and verify the resulting state deterministically** (including "did it cite the right sources"), tracking reward/latency/tokens over a growing parallel corpus; one demo proves nothing.
- **Strongest OMNI line:** *"a langgraph.json registry… that points to the function that… creates our Deep Agent"* [7:46-7:52] — agents must be **declared before they run**: every OMNI Build-OS agent ships as a registered `agent_manifest` (owning-domain + tool/model/sandbox policy + eval suite + trace sink) whose `agent_eval_bundle` pass is Polaris *evidence*, never commit *authority* — and whose deep-research analog proves the deterministic verifier OMNI most needs is "did it preserve exact values and cite the right source." AI proposes/retrieves/drafts; domains + humans commit.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Build-OS (MAJOR — agent-eval substrate: capability-tiered eval strictness, task-folder datasets, deterministic verifiers incl. source-citation checks, parallel isolated runs, declare-before-run agent registry) · Agent-Work-Protocol (MAJOR — Deep-Agent capability tier sets required rigor, verifier-before-adoption, trace-per-action, resource limits per task) · §B AI-substrate (MAJOR — agent/graph registry = agent_manifest; model/version lineage in trace) · Polaris/proof-layer (MAJOR — reward/verifier/trace/env-image/model-lineage as proof bundle; pass=evidence not authority) · D7/Evidence-Plane (medium — source→synthesize→cite→verify is a literal D7 + EVRUN mirror; provenance/citation as deterministic verifier target) · operating-metrics/BIZOPS (medium — reward, latency, tokens, pass-rate-by-version) · §C Security (medium — isolated/disposable images, no prod-state/PHI in eval, least-privilege tool policy in manifest) · CNS (minor — eval routing + candidate≠commit reinforcement)` · promotion: `watch` (proposes only; `GRD-036` promotion-gated — route Build-OS eval + agent-manifest discipline to C5/Build-OS at gate; near-twin of 215, folds together)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — Opus formal extraction pass (EVRUN-2026-000003): lifted §0/§0.1 metadata verbatim from the Review 001 operator block (LangChain · Nick, Software Engineer @ LangChain · "Harbor x LangChain: A Unified Stack for Evaluating Agents" · YouTube `Rh6KWngr8T4` · pub Jul 1 2026 · `identity_confidence: high_from_operator_metadata`); proposed slug `harbor-langchain-unified-agent-eval-stack` (file NOT renamed); wrote §3 Review 003 (headline verdict + 11 concept clusters + net-new [1 genuine `agent_manifest` + 1 vocabulary NAME `deep_agent`/capability-tier→eval-strictness; rest re-mints of 215/216/206/205, dedup-pending] + 5 reread flags + hard read); grep-verified build=absent (no agent_manifest/langgraph/deep_agent/eval-harness/verifier/micro-VM; only domain parity tests `scripts/test-*.ts`); filled §4 pointers; ticked §0.5; flipped status `raw_dropped`→`analyzed`. Registry/coverage/anchor NOT edited (fold packet returned to parent). Binds nothing (`GRD-036`/`GRD-044`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

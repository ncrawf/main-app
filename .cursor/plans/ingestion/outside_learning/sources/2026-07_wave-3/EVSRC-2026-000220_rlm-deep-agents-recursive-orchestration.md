# EVSRC-2026-000220 — How to use RLMs in Deep Agents

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000220_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(lifted verbatim from operator metadata block in §3 Review 001 — `identity_confidence: high_from_operator_metadata`; no caveats)*
- evsrc_id: `EVSRC-2026-000220`  ·  filename: `EVSRC-2026-000220_rlm-deep-agents-recursive-orchestration.md` *(proposed slug; file NOT renamed this pass)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=5_LLMZfKI6w`  ·  source_title: `How to use RLMs in Deep Agents`
- channel_or_org: `LangChain`  ·  speaker: `Sydney Runkle, Open Source Engineer at LangChain`  ·  published_at: `Jul 1, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + description + chapter list + pasted transcript`
- content_type: `Recursive Language Models / RLMs / Deep Agents / recursive agent calls / code-interpreter orchestration / divide-and-conquer agent work / long-context reasoning / deterministic data coverage / fan-out and aggregation / Oolong benchmark / context-window limits / runtime cost-latency tradeoffs`  ·  source_reliability_context: `Official LangChain technical walkthrough from an open-source engineer. Strong source for agent orchestration patterns where a main agent uses code to recursively call subagents, keep context in variables/files, and perform deterministic coverage over large data tasks. Most useful for AI Substrate, Build-OS, long-context data workflows, and runtime architecture. RLM should be treated as a specialized orchestration primitive, not a general replacement for governed workflow design.` (practitioner / vendor)  ·  topic_tags_light: `[LangChain, Sydney_Runkle, RLM, recursive_language_model, Deep_Agents, code_interpreter, task_function, subagents, fan_out, divide_and_conquer, deterministic_coverage, long_context_reasoning, context_window_limits, lossy_summarization, variables_as_context, files_as_context, data_aggregation, Oolong_dataset, runtime_cost, latency_tradeoff, agent_orchestration, AI_Substrate, Build_OS, Agent_Work_Protocol, operating_metrics]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Sydney Runkle` · role_in_source: `speaker / presenter` · affiliation_at_publication: `LangChain (Open Source Engineer)` · speaker_type: `vendor / open-source engineer` · authority_context: `LangChain OSS engineer presenting an official technical walkthrough of RLM support in the Deep Agents harness; strong practitioner authority for agent-orchestration mechanics, vendor-positioned (LangChain product ecosystem: Deep Agents, dcode, LangSmith)` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `LangChain`  ·  interviewer / moderator / host: `n/a (solo technical walkthrough)`
- event_context: `LangChain YouTube technical walkthrough / product-feature explainer (published Jul 1, 2026)`  ·  perspective / conflict notes: `Vendor source — RLMs are framed inside LangChain's own Deep Agents / dcode / code-interpreter-middleware product surface; treat orchestration insight as strong, product framing as promotional. Per `GRD-039` authority is descriptive, not worship.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(fold packet returned to Opus-main; this agent does NOT edit registry per run contract)* · [ ] update coverage matrix *(Opus-main)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Intro: RLMs + deep agents
0:00
Hey folks, my name is Sydney, I'm an open source engineer at LangChain,
0:03
and today I'm super excited to talk about how you can use RLMs with deep agents.
What is a recursive language model
0:07
First off, what are RLMs? An RLM is a recursive language model,
0:12
which simply means a model that can call itself. So if we think about agents, we often define agents
0:18
in code, and so the orchestration for recursive language models actually lives in code. You give
0:25
the main agent and model, the power to write code to recursively call itself.
0:30
And this means that context can live in variables or files,
0:34
rather than just in the direct context window of the model.
0:38
And this broadly enables a super flexible divide and conquer strategy for work.
Why use RLMs: reliability, finite context, deterministic coverage
0:44
Let's talk a little bit more about why you would want to use recursive language models.
0:48
Agents have trouble doing work reliably at scale.
0:51
If you give your agent a file with thousands of lines,
0:55
it's going to have a really hard time kind of deterministically
0:59
processing that file. In addition, context windows are finite,
1:02
and so over long conversations we have to summarize, right?
1:06
But summarization is lossy, and so if you give your
1:09
agents the power to orchestrate work through code,
1:12
you can avoid these problems. RLM support, as I mentioned,
1:16
deterministic coverage, which is great for data problems at scale.
1:20
They also support bespoke orchestration.
1:23
So you can organize work with code-like primitives, right?
1:26
So loops, fan out and pipelining,
1:29
sort of any code-like primitive you can imagine.
How RLMs work in deep agents (code interpreter + task function)
1:32
Okay, so let's talk about how RLMs are supported in deep agents.
1:36
As a reminder, deep agents is an open-source harness
1:39
for building general-purpose agents that are built for complex, real-world tasks.
1:44
So here's kind of a look at how RLMs are implemented.
1:47
First, we have our main agent, which we give access to a code interpreter.
1:51
We mentioned that the orchestration for RLMs lives in code,
1:55
and so the code interpreter is this lightweight surface we can give to our model to be able to
2:00
write and execute code without being as heavy-handed as needing to attach a sandbox.
2:06
So in order to use RLMs, we give the main agent access to this task function in the code interpreter,
2:13
so the main agent writes code that uses this task function.
2:16
It calls out to subagents, and then there can also be other code surrounding these task calls.
2:22
So maybe data preparation, maybe after all the task calls, aggregation, things like that.
2:27
All right, so how can you get started using this with deep agents?
Getting started + dcode haiku-tournament demo
2:30
It's pretty simple. You just use the create deep agent primitives,
2:34
and then you pass this code interpreter middleware to enable code mode.
2:38
All right, let's test this out with dcode, which is our terminal coding agent built on top of
2:42
the deep agents harness. We can start it up by typing dcode. One key thing to note here
2:47
is that to trigger RLM usage in deep agents you can use the workflow keyword. So here I'm asking
2:53
dcode to run a workflow to generate 16 haikus about breakfast food and use a tournament setup
2:59
to determine the best one. So we've got 16 subagents just generated haikus pretty rapidly.
3:05
Now we're on to the round of 16. Great, so we can see the model is writing code. It's calling this
3:10
JSEval tool. We're already off to the quarterfinals. Looks like the model wrote some bad code,
3:17
but it's now correcting itself. And then off to the finals. So we can see tournament complete.
3:22
I ran a full haiku tournament. And then the winning haiku is about berries. Crimson berries glow.
3:28
Morning sweetness melts on tongue. Summer's gift awaits. I actually just bought some blackberries
3:34
from the farmers market, so this feels on brand. Great. So let's talk about a little bit more of a
Benchmark: the Oolong long-context dataset
3:38
concrete example here. So one way that we tested the effectiveness of RLMs is with the Oolong
3:44
dataset, which is a dataset that challenges models over long context reasoning and data
3:50
aggregation tasks. So I'll talk a little bit about the Oolong dataset setup, and then I'll showcase
3:56
some of our experiments. So the ag news portion of the Oolong dataset is structured as a table
4:03
with thousands and thousands of rows, where you have a date, a user, and then a news headline
4:09
with no label provided. And we give models the challenge of classifying each of the
4:14
headlines according to four categories: World, Sports, Science and Tech, and Business.
4:20
Then we ask distributional questions about the data. So these can fall under three categories,
4:26
moving from kind of easiest to hardest. First we have counting. So an example here
4:31
like which label is the rarest among the headlines.
4:35
Secondarily, we have the user category.
4:37
So this requires the problem solver to filter and then count.
4:42
So for example, for user 72341, how many Science and Tech
4:46
headlines are there?
4:48
And then the most difficult is the temporal reasoning tasks.
4:51
So for example, before August 2004, was Sports more common than World in the headlines?
4:57
And so the reason that this data is challenging is that there's so much data,
5:01
and so it's pretty hard for a model to be sent thousands and thousands of rows and then perform
5:07
these reasoning and data aggregation tasks without the support of RLMs or some sort of coding support.
Results: plain vs. RLM-enabled deep agent
5:14
So the first traces we're going to look at here are comparing
5:17
deep agents with no code interpreter with deep agents enabling a code interpreter.
5:22
So you can see at the 64k context length, there's actually not a huge difference between the plain
5:28
deep agent shown in green, and the deep agent with RLM support enabled via the code interpreter
5:34
shown in pink. But now, if we look at a context length of 128,000 tokens, we can see that the
5:42
RLM-enabled deep agent does much better. One tradeoff here is that the latency for the RLM-enabled
5:48
deep agent is definitely slower, and we do see token costs higher at this rate. Although generally,
5:54
I do think if we optimize further, maybe design some skills,
5:58
explaining how to approach this specific problem,
6:00
we could cut the token count and cost down significantly.
6:03
So you'll note here, you can see actually in the plain deep agent,
6:07
there's a lot of answers that look kind of like,
6:09
"I can't answer exactly," or "I'm blocked from computing this."
6:12
The model is actually giving up early on this task,
6:15
because it's so overwhelmed by the context.
6:17
So you can imagine if the context length was even longer,
6:21
or the problem was even more challenging,
6:23
that the agent with RLMs enabled would continue to outperform the plain deep agent.
Wrap-up
6:29
We think RLMs are a super powerful primitive and that's why we're so excited to expose them
6:33
in deep agents. Let us know what you think.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

Rough metadata for Opus

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=5_LLMZfKI6w
source_title: How to use RLMs in Deep Agents
channel_or_org: LangChain
speaker: Sydney Runkle, Open Source Engineer at LangChain
published_at: Jul 1, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + description + chapter list + pasted transcript
content_type: Recursive Language Models / RLMs / Deep Agents / recursive agent calls / code-interpreter orchestration / divide-and-conquer agent work / long-context reasoning / deterministic data coverage / fan-out and aggregation / Oolong benchmark / context-window limits / runtime cost-latency tradeoffs
source_reliability_context: Official LangChain technical walkthrough from an open-source engineer. Strong source for agent orchestration patterns where a main agent uses code to recursively call subagents, keep context in variables/files, and perform deterministic coverage over large data tasks. Most useful for AI Substrate, Build-OS, long-context data workflows, and runtime architecture. RLM should be treated as a specialized orchestration primitive, not a general replacement for governed workflow design.
priority: 4.5/5
depth: technical_architecture_reference
recommended_status: route to AI Substrate, Build-OS, Agent Work Protocol, runtime orchestration, long-context/data-task strategy, agent evals, operating_metrics, and context-memory doctrine.

Topic tags:
[LangChain, Sydney_Runkle, RLM, recursive_language_model, Deep_Agents, recursive_agent_calls, code_interpreter, task_function, subagents, fan_out, divide_and_conquer, deterministic_coverage, long_context_reasoning, context_window_limits, lossy_summarization, variables_as_context, files_as_context, data_aggregation, Oolong_dataset, runtime_cost, latency_tradeoff, agent_orchestration, AI_Substrate, Build_OS, Agent_Work_Protocol, operating_metrics]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4.5/5
Depth: technical architecture reference
Recommended status: route to AI Substrate / Build-OS / Agent Work Protocol / context-memory strategy / runtime economics / long-context data workflows.

Core takeaway

This source introduces RLMs — Recursive Language Models — as a pattern where a model can call itself through code.

The main idea:

Instead of forcing one agent to hold everything in its context window and summarize its way through large tasks, let the agent write code that recursively delegates subtasks to subagents, stores intermediate context in variables/files, and aggregates results deterministically.

OMNI translation:

For large-scale structured work, intelligence should sometimes be orchestrated through code, not just conversation.

This is especially relevant for Build-OS, D7-style extraction, source corpus processing, analytics, and any workflow where the task requires coverage over many items.

Key concepts to preserve
1. RLM = model that can call itself

The speaker defines a recursive language model as a model that can call itself. In practice, the orchestration lives in code: the main agent writes code that calls a task function, which invokes subagents.

OMNI keeper:

RLM is not magic recursion. It is a controlled orchestration pattern:

main agent → code interpreter → task function → subagent calls → aggregation

Potential primitive:

recursive_agent_orchestration

A pattern where a parent agent decomposes work into subcalls through code, then aggregates the outputs.

2. Context can live outside the context window

This is the most important technical idea.

The source says RLMs allow context to live in variables or files, rather than only inside the direct model context window.

OMNI keeper:

This directly supports OMNI’s existing context doctrine:

Context window is not memory. Durable context belongs in structured artifacts, files, state, reservoirs, traces, and domain-owned records.

For OMNI:

source chunks can live in files
extracted facts can live in structured objects
intermediate classifications can live in tables
task results can live in artifacts
agents can aggregate references instead of holding all raw text

Doctrine candidate:

Long-context work should externalize state before it overwhelms the model window.

3. RLMs enable divide-and-conquer work

The speaker frames RLMs as enabling flexible divide-and-conquer strategies using code-like primitives:

loops
fan-out
pipelining
data preparation
subagent calls
aggregation

OMNI keeper:

This is highly relevant to corpus and Build-OS work.

Examples:

classify 200 source snippets
extract metadata from many docs
run separate reviewers on separate domains
compare multiple patient-document sections
fan out across eval tasks
aggregate trace failure categories
split long source files into deterministic passes

Doctrine candidate:

Large agent work should be decomposed into bounded subcalls with explicit aggregation.

4. Deterministic coverage beats lossy summarization

The source’s critique is clean: agents struggle to process thousands of lines deterministically; context windows are finite; summarization is lossy. RLMs help because work can be orchestrated through code.

OMNI keeper:

This matters a lot.

For high-stakes or architecture-critical work, “summarize everything and hope” is weak. Better:

split corpus into units
process each unit
store result
verify coverage
aggregate deterministically
preserve lineage

Doctrine candidate:

Do not use lossy summarization where deterministic coverage is required.

This should land in Build-OS and D7.

5. Code interpreter as lightweight orchestration surface

The video distinguishes code interpreter from heavier sandboxing. The code interpreter gives the model a lightweight way to write and execute orchestration code without attaching a full sandbox.

OMNI keeper:

There are levels of execution:

pure text reasoning
code-interpreter orchestration
sandboxed execution
write-capable tool execution
production domain action

RLM fits in the middle. Useful, but still needs budgets, traces, and boundaries.

Doctrine candidate:

Code execution used for orchestration is not the same as authority to mutate production state.

6. Subagents as task calls, not independent authorities

In the demo, the main agent writes code that calls a task function. Subagents generate haikus, classify data, or perform chunks of a larger task.

OMNI keeper:

Subagents here are compute workers, not domain owners.

They can help with:

classification
extraction
summarization
ranking
local reasoning
chunk processing

But they do not own truth.

Doctrine candidate:

Recursive subagents may produce candidate outputs; authority still belongs to the governing workflow/domain.

7. Best fit: large data aggregation and long-context tasks

The Oolong example is a long-context data aggregation benchmark. The task requires classifying many headlines, then answering distributional questions involving counting, filtering, and temporal reasoning.

OMNI keeper:

RLMs are especially valuable when the task has:

many rows/items
repeated local judgments
aggregation
deterministic coverage needs
filter/count logic
temporal slicing
long context beyond direct model handling

This is not necessarily needed for small reasoning tasks.

Potential OMNI routing rule:

Use RLM-style orchestration when task coverage and aggregation matter more than conversational synthesis.

8. Performance improves at larger context lengths, with cost/latency tradeoff

The benchmark result is nuanced. At 64k context, RLM support does not differ much from plain deep agents. At 128k, RLM-enabled deep agents perform much better, while latency and token cost are higher.

OMNI keeper:

This is a runtime placement lesson.

RLM is not free. It should be routed by need.

Use when:

plain agent is overwhelmed
task requires coverage
aggregation is structured
context is too large
failure cost is high enough to justify latency/cost

Avoid when:

task is small
simple direct answer works
cost/latency matters more than exhaustive coverage

Doctrine candidate:

Recursive orchestration is a high-power mode; route to it when coverage risk exceeds runtime cost.

9. Skills can reduce cost

The speaker notes that better skills explaining how to approach the specific problem could cut token count and cost.

OMNI keeper:

RLM + skills is important.

For OMNI, recurring workflows should not be rediscovered each time. They need skills/runbooks:

how to classify source types
how to extract metadata
how to evaluate D7 fidelity
how to process trace clusters
how to aggregate eval failures
how to update system docs

Doctrine candidate:

Expensive recursive workflows should be skillized after they stabilize.

OMNI translation

This source gives OMNI a clear pattern for handling work that is too large for a single model pass.

Not:

shove everything into context and ask for a grand synthesis.

But:

use code to fan out bounded subcalls, keep intermediate state outside the model window, verify coverage, and aggregate results.

For OMNI, this could power:

source corpus extraction
large transcript analysis
eval-suite scoring
D7 document processing
trace-cluster classification
Build-OS refactor planning
Knowledge Reservoir cleanup
operating metric aggregation
Likely OMNI landing zones

AI Substrate

recursive orchestration mode
code-interpreter task calls
subagent fan-out
context externalization
cost/latency routing

Build-OS

corpus processing
source extraction
contract refactoring
eval generation
multi-file analysis
documentation maintenance

Agent Work Protocol

recursion depth limits
budget limits
trace each subcall
aggregate with lineage
subagent outputs remain candidates
no production mutation from recursive calls

Knowledge Reservoirs

store intermediate outputs
avoid lossy summaries
maintain chunk lineage
preserve rationale and aggregation trail

operating_metrics

cost per recursive workflow
latency per fan-out
subcall count
failure rate per subagent
aggregation error rate
context savings versus direct approach
Doctrine candidates
Long-context work should externalize state before it overwhelms the model window.
Do not use lossy summarization where deterministic coverage is required.
Large agent work should be decomposed into bounded subcalls with explicit aggregation.
Recursive subagents may produce candidate outputs; authority still belongs to the governing workflow/domain.
Code execution used for orchestration is not authority to mutate production state.
Recursive orchestration is a high-power mode; route to it when coverage risk exceeds runtime cost.
Expensive recursive workflows should be skillized after they stabilize.
RLMs are best for coverage, aggregation, and long-context decomposition, not every agent task.
Net-new / sharpen / affirm
Net-new candidates

recursive_agent_orchestration
A pattern where a main agent uses code to call subagents recursively, fan out work, store intermediate state, and aggregate outputs.

state_externalized_context
Context stored in variables, files, tables, artifacts, or reservoirs instead of the live model window.

deterministic_coverage_mode
Workflow mode optimized for ensuring every item/chunk/row is processed, rather than relying on broad summarization.

recursive_runtime_budget
Limits for recursive workflows: max subcalls, depth, tokens, latency, spend, and failure thresholds.

skillized_recursive_workflow
A stabilized recursive workflow captured as a reusable skill/runbook to reduce cost and improve reliability.

Sharpen existing

context_memory_budget
Adds the idea that some context should leave the context window entirely and live in files/variables.

workflow_lane_as_architecture_unit
RLM becomes a lane for long-context data/coverage tasks.

Build-OS
Adds a practical approach for large source/refactor/eval work.

Knowledge Reservoirs
RLMs need durable intermediate context and lineage.

operating_metrics
Recursive workflows require cost and latency accounting by subcall/phase.

Affirm
context windows are finite
summarization is lossy
code can improve agent reliability on structured tasks
fan-out plus aggregation is a major agent pattern
subagents can protect the main agent from overload
cost/latency tradeoffs must be explicit
skills can reduce recurring workflow cost
Reject / do not over-import
Do not use RLMs for every agent task.
Do not let recursive calls run unbounded.
Do not confuse recursive subagents with domain authority.
Do not treat code-interpreter orchestration as safe for production writes.
Do not ignore latency/cost increases.
Do not assume RLMs solve correctness without evals.
Do not let generated aggregation hide missing coverage or weak lineage.
Hard read

This is a high-value AI substrate source, especially for Build-OS and long-context work.

The keeper is simple:

When the task is too large for one context window, stop pretending the answer is “more context.” Use code-mediated recursion: split the work, call subagents, store intermediate state outside the model, aggregate deterministically, and measure the cost.

Shortest OMNI version:

RLMs give OMNI a pattern for large-scale agent work: bounded recursive subcalls, externalized context, deterministic coverage, explicit aggregation, and runtime budgets. Useful for corpus, eval, D7, and Build-OS workflows — but only inside trace, budget, and authority boundaries.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-07` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Headline verdict.** `full` tier · **AI-substrate / Build-OS mechanism source; doctrine=AFFIRM/PARTIAL · build=absent — the wave's dominant pattern continues.** This is the concrete *HOW* under the frame the wave already established: where 201 says "workflow-lane is the unit," 210 says "agents act like coordination layers," and 214 says "decompose — it's a systems-design problem, not a model-capability problem," **220 supplies the low-level execution mechanic: code-mediated recursion (RLM) — a main agent writes code that fans work out to bounded subagent `task` calls, keeps intermediate state in variables/files instead of the context window, and aggregates deterministically.** It AFFIRMS three OMNI spine laws almost verbatim — (a) *context window ≠ durable memory* (state externalizes to files/artifacts/reservoirs), (b) *candidate ≠ commit* (subagents are compute workers, not domain owners of truth), (c) *containment ≠ authority* (code-interpreter orchestration is not permission to mutate production). It adds a runtime-economics leg that converges cleanly with 204/206 (RLM helps only past a context threshold, at real latency/cost — route by need). **No new care-frame; no domain.** Net-new yield is 1–2 genuine primitives (a coverage-guarantee workflow mode + the code-recursion orchestration pattern); the rest sharpen existing wave-3 mints. Zero tensions with OMNI doctrine — this source is an affirmer/mechanism-supplier, not a challenger. ★ Reflexive note: *this very EVRUN pipeline* (per-source subagent extraction → Opus-main fold, with intermediate state living in source files + the registry) is itself an RLM-shaped divide-and-conquer workflow — 220 describes the method OMNI is already using to process 220.

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | RLM = model that can call itself (`recursive_agent_orchestration`) | Controlled orchestration pattern, not magic recursion: main agent → code interpreter → `task` fn → subagent calls → aggregation. Composes with CNS candidate→resolver→commit; subcalls propose, workflow aggregates. | §B AI-substrate · CNS · Build-OS · Agent-Work-Protocol | "a model that can call itself" [0:12] | AFFIRM | absent | none | vocabulary | watch |
| 2 | Context externalized to variables/files (`state_externalized_context`) | The runtime mechanism for OMNI's "context window ≠ memory" law: durable/intermediate context belongs in files, variables, tables, artifacts, reservoirs, domain records — not the live window. | §B runtime · Knowledge-Reservoirs · CNS `context_packet` · D7 | "context can live in variables or files" [0:30] | AFFIRM | partial | none | spine | watch |
| 3 | Divide-and-conquer via code primitives (fan-out / loops / pipelining) | Large agent work decomposed into bounded subcalls with explicit aggregation, using code-like primitives (loops, fan-out, pipelining, data-prep, aggregation). | Build-OS · D7 extraction · this EVRUN process · Agent-Work-Protocol | "divide and conquer strategy for work" [0:38] | AFFIRM | absent | none | vocabulary | watch |
| 4 | Deterministic coverage > lossy summarization (`deterministic_coverage_mode`) | For high-stakes/architecture-critical work: split→process-each→store→verify-coverage→aggregate→preserve-lineage. "Summarize everything and hope" is weak where every item must be processed. | Build-OS · D7 · Knowledge-Reservoirs · Agent-Work-Protocol | "summarization is lossy" [1:06]; "deterministic coverage… at scale" [1:20] | AFFIRM/PARTIAL | absent | none | spine | promote-candidate |
| 5 | Code interpreter = lightweight orchestration surface (execution ladder) | Levels of execution (text → code-interpreter orchestration → sandbox → write-tool → production action); code-interpreter is the middle rung. Code execution for orchestration ≠ authority to mutate production. | §B runtime · §C security · Agent-Work-Protocol · `capability_envelope`/`autonomy_level` | "without… needing to attach a sandbox" [2:00] | AFFIRM | absent | none | vocabulary | watch |
| 6 | Subagents = compute workers, not authorities | Recursive subagents classify/extract/rank/reason locally and produce **candidate** outputs; they do not own truth — authority stays with the governing workflow/domain (candidate≠commit spine). | CNS (candidate≠commit) · Agent-Work-Protocol · §A `non_human_actor` | "calls out to subagents… aggregation" [2:16-2:22] | AFFIRM | absent | none | spine | watch |
| 7 | Best fit = long-context data aggregation (RLM routing rule) | Use RLM-style orchestration when the task has many items + repeated local judgments + aggregation + filter/count/temporal-slice + deterministic-coverage needs; NOT for small reasoning tasks. | §B runtime routing · `workflow_lane` · Build-OS | "long context reasoning and data aggregation" [3:44] | PARTIAL | absent | none | vocabulary | watch |
| 8 | Cost/latency tradeoff — route by need (`recursive_runtime_budget`) | RLM is a high-power mode: at 64k ≈ no gain; at 128k big accuracy win but slower + costlier. Route when coverage-risk > runtime-cost; needs subcall/depth/token/latency/spend budgets. | §B runtime economics · operating-metrics/BIZOPS · `inference_budget_policy`/`context_memory_budget` (204) | "latency… slower… token costs higher" [5:48] | AFFIRM | absent | none (converges 204/206) | vocabulary→spine | watch |
| 9 | Skills reduce recurring cost (`skillized_recursive_workflow`) | Stabilized recursive workflows should be captured as reusable skills/runbooks so they aren't rediscovered each run — cuts token count + cost, raises reliability. | Build-OS · Knowledge-Reservoirs · Agent-Work-Protocol · `agent_overview_document` (216) | "design some skills… cut the token count and cost" [5:58] | PARTIAL/AFFIRM | absent | none | vocabulary | watch |

**Doctrine/build roll-up:** doctrine = **AFFIRM (5) · PARTIAL (2) · AFFIRM/PARTIAL (2)** — the source affirms context-window≠memory, candidate≠commit, containment≠authority, decompose-not-god-agent, and runtime-cost routing. build = **absent across all 9** (grep from repo root over `app lib components scripts supabase`: **zero** hits for `RLM` / `recursive language model` / `code interpreter` / `deep agent` / `task function` / `fan-out` / `deterministic coverage` / `divide-and-conquer` / `subagent` / `oolong` / `externaliz`; the only `recursive`/`orchestrat`/`aggregat`/`skill` hits are false positives — Postgres RLS-recursion migrations, `lib/intake/write/orchestrator.ts` = domain write-orchestration, `scripts/test-*` = domain deterministic tests, product "skill" strings). Consistent with the whole wave: AI-substrate/agent-harness concepts are **doctrine-present, build-absent**.

### B. Net-new primitives *(dedup vs existing OMNI + wave-3 minted; "dedup-pending, Opus-main verifies")*
- `deterministic_coverage_mode` — a workflow-lane property guaranteeing **every item/chunk/row is processed** (split→process→store→verify-coverage→aggregate→lineage) rather than relying on lossy summarization — **EXISTS-AS: net-new (genuine) — sharpens `workflow_lane` with a coverage-guarantee dimension; DISTINCT from 215 `deterministic_task_verifier` (verifies an OUTPUT is correct) — this asserts the INPUT set was fully covered.** Safety-adjacent for D7/corpus/eval work.
- `recursive_agent_orchestration` — a parent agent uses code to decompose work into bounded subagent `task` calls, keep intermediate state outside the window, and aggregate — **EXISTS-AS: net-new NAME; mechanism largely = `workflow_lane` + candidate≠commit + fan-out + CNS coordination. Mint (if at all) as an execution-pattern label, not a new authority concept (`GRD-026`/`GRD-035`); reconcile against 214 `capability_placement_policy`.**
- `state_externalized_context` — agent runtime state (source chunks, extracted facts, intermediate classifications, task results) lives in files/variables/tables/artifacts, not the live window — **EXISTS-AS: already-exists-as `context_packet` + Knowledge-Reservoirs + the "context window ≠ memory" doctrine; sharpens 204 `context_memory_budget` with a "state leaves the window entirely" dimension. NOT net-new — sharpen.**
- `recursive_runtime_budget` — limits for recursive workflows: max subcalls, depth, tokens, latency, spend, failure thresholds — **EXISTS-AS: already-exists-as `inference_budget_policy` (206) + `context_memory_budget` (204); sharpen with a recursion-DEPTH + subcall-COUNT dimension. NOT net-new — sharpen.**
- `skillized_recursive_workflow` — a stabilized recursive workflow captured as a reusable skill/runbook after it settles — **EXISTS-AS: partial — composes 216 `agent_overview_document` + Knowledge-Reservoir + OMNI's own skills/read-graph; the net-new nuance is the "stabilize-THEN-skillize" lifecycle rule. Sharpen, do not re-mint.**

*Net-new tally for 220 (post-dedup, pending Opus-main): **~1–2 genuine** (`deterministic_coverage_mode` firm; `recursive_agent_orchestration` a label-candidate) + 3 sharpen-existing. Consistent with 202/210/212/213 (mechanism-affirmer, low net-new).*

### C. Reread flags
- **`deterministic_coverage_mode` vs 215 `deterministic_task_verifier`** — confirm the coverage/verification split holds (coverage = "did we process all inputs"; verifier = "is this output correct"); they are complementary rungs, not duplicates. Opus-main verify at fold.
- **Recursion depth/subcall governance** — confirm Agent-Work-Protocol §8 (checkpoint) + `autonomy_level` already bound recursion depth, or whether `recursive_runtime_budget` needs an explicit depth clause. Safety-adjacent (unbounded recursion = runaway cost).
- **Convergence with 204 memory story** — 220's cost/latency-at-128k result is the *task-level* echo of 204's *token-level* KV/paged-attention economics; verify they're folded as one runtime-economics family, not two.
- **217–219 dedup** — three sibling wave-3 sources not yet in the registry (registry currently 211–216); check whether any re-mint `deterministic_coverage_mode` / recursion primitives before Opus-main finalizes.

### D. One-line hard read + strongest OMNI line
- **Hard read:** When a task is too large for one context window, the answer is **not "more context"** — it is code-mediated recursion: split the work, fan out to bounded subagent calls that produce *candidates*, externalize intermediate state out of the window, guarantee *deterministic coverage*, aggregate with lineage, and *meter the cost* — all inside trace/budget/authority boundaries where subagents never own truth and code-orchestration is never permission to mutate production.
- **Strongest OMNI line:** *"context can live in variables or files, rather than just in the direct context window of the model"* [0:30-0:38] — the concrete runtime mechanism for OMNI's law that the context window is not durable memory; durable/intermediate context belongs in files, artifacts, reservoirs, and domain-owned records.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `analysis/EVRUN-2026-000003_ai-corpus-wave-3/EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `analysis/EVRUN-2026-000003_ai-corpus-wave-3/EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: **§B AI-substrate runtime (MAJOR — code-mediated recursion / context-externalization / cost-latency routing) · Build-OS + Agent-Work-Protocol (MAJOR — divide-and-conquer, deterministic coverage, skillize-after-stabilize, recursion budgets) · CNS (medium — subagents=candidates, aggregation coordination) · Knowledge-Reservoirs (medium — externalized intermediate state + lineage) · D7 (medium — corpus/document deterministic coverage) · operating-metrics/BIZOPS (medium — cost/latency/subcall accounting) · §C security (minor — code-orchestration≠production-write authority)** · promotion: `watch` (mechanism-affirmer; doctrine=AFFIRM/PARTIAL, build=absent; ~1–2 net-new primitives, dedup pending Opus-main; binds nothing per `GRD-036`)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — §0/§0.1 metadata lifted verbatim from operator block (identity_confidence: high_from_operator_metadata); title set; slug proposed `rlm-deep-agents-recursive-orchestration` (file NOT renamed). §3 Review 003 formal deep extraction authored (9 concept clusters; ~1–2 net-new [`deterministic_coverage_mode` firm · `recursive_agent_orchestration` label-candidate] + 3 sharpen-existing; 0 tensions; build=absent grep-verified). §4 pointers + §0.5 checklist filled. Status → `analyzed`. Registry/coverage/anchor NOT edited (fold packet returned to Opus-main). Binds nothing (`GRD-036`/`GRD-044`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

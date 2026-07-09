# EVSRC-2026-000227 — How To Build a Self-Improving Agent with LangSmith Engine and Context Hub

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000227_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000227`  ·  filename: `EVSRC-2026-000227_langsmith-engine-context-hub-agent-memory.md` *(proposed slug; file NOT renamed)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=y6WUw2_Hhrs`  ·  source_title: `How To Build a Self-Improving Agent with LangSmith Engine and Context Hub`
- channel_or_org: `LangChain`  ·  speaker: `Jake Broekhuizen`  ·  published_at: `Jun 24, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + description + chapter list + pasted transcript`
- content_type: `self-improving agents / agent memory / working memory / long-term memory / semantic memory / episodic memory / procedural memory / LangSmith Engine / Context Hub / trace-to-memory loop / versioned context / skills / agents.md / memory store / continual learning loop`  ·  source_reliability_context: `Official LangChain technical/product walkthrough. Strong implementation source for turning production traces into reviewed, versioned memory updates through LangSmith Engine and Context Hub. Highly relevant to OMNI's Knowledge Reservoirs, Agent Work Protocol, Build-OS, context governance, and trace-to-improvement loops. Treat LangSmith/Context Hub as implementation examples, not mandatory OMNI infrastructure.`  ·  topic_tags_light: `[LangChain, LangSmith_Engine, Context_Hub, self_improving_agents, agent_memory, working_memory, long_term_memory, semantic_memory, episodic_memory, procedural_memory, traces_to_memory, reviewed_memory, versioned_context, agents_md, skills_files, composite_backend, scratchpad_memory, durable_memory, continual_learning_loop]`
- identity_confidence: `high_from_operator_metadata` *(source_url/title/channel/speaker/published_at/content_type/source_reliability_context lifted verbatim from §3 Review 001 header — no caveats)*

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Jake Broekhuizen` · role_in_source: `presenter` (product/technical walkthrough) · affiliation_at_publication: `LangChain` · speaker_type: `vendor` (developer-advocate / product) · authority_context: `Official LangChain technical walkthrough of LangSmith Engine + Context Hub; strong implementation authority for the trace→reviewed-memory loop, vendor-positioned toward LangSmith/Context Hub adoption` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `LangChain (YouTube)`  ·  interviewer / moderator / host: `n/a (solo walkthrough)`
- event_context: `Product/technical explainer + live demo — builds "NOVA" (a financial-assistant Deep Agent) and wires its traces → LangSmith Engine → Context Hub memory updates.`  ·  perspective / conflict notes: `Vendor source: LangSmith Engine + Context Hub presented as the memory infrastructure. Treat as an implementation EXAMPLE of the trace→memory governance loop, NOT mandatory OMNI infrastructure (Knox: "not mandatory OMNI infrastructure"). Same product family as EVSRC-2026-000216 (Ben Tannyhill); this one leads with the agent-MEMORY taxonomy.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [x] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(Opus-main folds the returned packet; this subagent does NOT edit the registry)* · [ ] update coverage matrix *(Opus-main)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Why agents repeat the same mistakes
0:00
Most agents don't learn, they just leave traces.
0:03
An interaction ends, the trace gets stored, and the agent's behavior stays exactly the same.
0:09
So when the same situation shows up tomorrow, the agent can make the same mistake again.
0:14
What we want is a continual learning loop, where an agent's behavior is shaped by its memory.
0:19
Traces become signal, signal becomes memory, and the memory guides the next run.
0:25
Today, we'll build that loop.
What is agent memory?
0:27
But first, what do we mean by agent memory?
0:30
Memory is the context an agent uses to behave more consistently over time.
0:35
To start, we have the agent and its working memory.
0:38
This is the short-term state of the current interaction,
0:40
the conversation so far, tool results, intermediate reasoning state, and scratchpad-like context.
0:47
It helps the agent stay coherent while it is solving the current task,
0:51
but by itself, it is not the durable memory of the system.
Working memory vs long-term memory
0:55
Next, we have the long-term memory.
0:57
This is the context that persists across runs, and it helps to think about it in three categories.
1:03
Semantic memory is what the agent knows.
1:05
Facts, preferences, domain knowledge, and stable information about the user or business.
1:11
Episodic memory is what the agent has experienced.
1:14
Past interactions, examples, outcomes, and patterns from previous runs.
The three types of long-term memory
1:21
Procedural memory is how the agent should act.
1:23
Instructions, workflows, tool use rules, skills, and decision policies.
1:29
The important relationship is the read/write loop between these two layers.
1:34
During a run, the agent retrieves useful long-term memory into working memory.
1:39
After a run, if something meaningful was learned, that signal can be written back into long-term
1:44
memory.
1:45
So short-term memory helps the agent act in the moment, long-term memory helps the agent improve across runs.
The read/write loop between memory layers
1:52
We want to design a system where we capture the signal produced by an agent as users interact with it,
1:58
analyze that signal, and then have some intelligent process that runs in the background that turns it into durable long-term memory updates
2:06
to a memory store to guide that agent's behavior over time.
2:10
These three pieces, the memory store, the traces,
2:14
and the process to go from traces to a memory store
2:16
make up agent memory.
How LangSmith Engine and Context Hub fit together
2:18
Now let's dive into how LangSmith
2:20
provides the core building blocks for this.
2:23
So, as your agent chats with users, it produces traces.
2:27
Those traces capture useful evidence,
2:30
failed tool calls, mismatches, corrections, bad outputs,
2:34
and places where the agent did not follow
2:36
the right behavior.
2:37
Traces alone do not make the agent better.
2:40
They show you what happened, but they do not automatically change what the agent knows next time.
2:44
LangSmith Engine is the background process that turns those traces into improvement signal.
2:50
It looks across the tracing project for recurring issues,
2:53
diagnoses the root cause, proposes a fix, and can help add evaluation coverage
2:58
so the same issue is caught if it comes back.
3:01
Engine can then directly make updates to the Context Hub,
3:04
the agent's memory store, for versioned context,
3:08
like agent markdown files, reusable skill files,
3:11
and environment-specific versions
3:12
that can move from staging to production.
3:15
On the next run, the agent pulls
3:17
that updated context back in.
3:19
Same agent, better memory.
3:21
So the loop is, traces become signal,
3:24
signal becomes reviewed memory,
3:26
and reviewed memory becomes better behavior on the next run,
3:29
all enabled by LangSmith through Engine and Context Hub.
3:33
Now let's see what that looks like in practice.
Demo: Creating a Context Hub repo for NOVA
3:35
To start, let's navigate to LangSmith
3:38
to create a new Context Hub repo.
3:41
I'm going to choose an agent repo
3:42
because it'll be the top-level repo
3:44
that stores our agent's core memory profile
3:47
along with the skills that it'll use.
3:50
We'll call it NOVA for our financial assistant
3:53
that is going to help users with their spending and saving.
3:58
And next we'll add the agents.md file
4:01
that will serve as NOVA's core memory
4:04
on how it should behave.
4:05
We'll also add three specialized skill files.
4:08
To teach it its vocabulary,
4:10
how to render charts when it needs to,
4:12
and how to format currency.
4:17
Great, we've gone ahead and added those three skills.
4:21
Context Hub is an excellent place to manage your agent's memory,
4:24
giving you a git-based approach
4:25
to version control and environment management.
4:28
It is also connected to the rest of LangSmith,
4:30
which we'll dive into later.
4:32
Great, now that we've defined our Context Hub repo
4:35
in LangSmith, it's time to build our agent
4:37
that will connect with it.
4:39
Let's first run some setup,
4:42
make sure that our environment variables are correctly mapped.
Building NOVA locally with Deep Agents
4:45
Now, I'm going to build NOVA, my agent,
4:47
but first do it locally.
4:49
So I'm going to add my agent's markdown file,
4:52
as well as the three skills that we added
4:54
as part of the Context Hub earlier.
4:58
I'm going to be working with LangChain's
5:00
Deep Agents framework.
5:01
I won't dive too much into the functionality of it.
5:03
So if you want to learn more,
5:04
then please go and have a look
5:06
at the LangChain Deep Agents docs.
5:09
I need to make my agents markdown and skills files
5:12
that we've just defined locally above available
5:15
to my Deep Agent locally.
5:18
So I'll do that there.
5:20
Now this is our main function to build our Deep Agent.
5:24
It takes a model, a few sub-agents, some tools,
5:27
and then two important paths,
5:29
MemoryPath and SkillsPath.
5:32
MemoryPath tells NOVA where to find its agents.md file.
5:35
This is the core memory profile for the agent,
5:38
who NOVA is, how it should behave,
5:39
and what rules it should follow.
5:41
SkillsPath tells NOVA where to find its skills.
5:44
In this case, the skills are those three skill markdown files
5:47
we defined earlier.
5:49
So the agent itself does not really care
5:51
where those files are stored,
5:52
it just needs a backend that can read those files
5:55
at those paths.
State backend vs composite backend
5:57
To start, I use the simplest backend, a state backend.
6:01
The backend is the storage layer that gives an agent a file system-like interface for
6:06
reading, writing, and persisting files or state.
6:10
With the state backend, files live in the agent's LangGraph state within the current thread.
6:15
So for the first version, I created that state file map earlier that had access to our agent's
6:20
markdown file and the skills directory.
6:24
That gave NOVA enough memory to run locally.
6:28
Now at this point, NOVA is a working Deep Agent.
6:31
It has a model, its sub-agents, its tools, its memory path, and its skills path.
6:36
But this memory is local state.
6:38
That's useful as a scratchpad, but it's not the long-term memory store that we want for
6:42
the real agent.
6:44
Now we bring Context Hub back into the picture.
6:47
Context Hub is where we want the durable memory to live, the agent's markdown file, and the
6:51
reusable skill files that we created in the UI.
6:54
I've made some helpful helper functions here
6:56
for us to be able to read and see
6:58
what's inside the Context Hub.
7:00
And if I run those, I can see that at the Context Hub root,
7:02
we have our agent's markdown file,
7:04
as well as our three skill files.
7:07
And inspecting those shows me the skills
7:09
that we went and added into the Context Hub earlier.
7:15
So I still want NOVA to have a scratchpad.
7:18
I don't want every temporary file the agent writes
7:20
to become long-term memory.
7:22
So for my durable backend,
7:23
I'm going to use a composite backend.
7:25
A composite backend lets me combine multiple backends
7:28
behind one file interface.
7:30
In this setup, the default backend becomes the state backend.
7:34
That means ordinary files go to the temporary agent state
7:38
and can be used as a scratchpad.
7:40
Then I mount the Context Hub under the memories file path.
Connecting NOVA's traces to LangSmith
7:44
So anything under memories is durable memory
7:46
from the Context Hub.
7:47
Anything outside of memories is a temporary scratchpad
7:50
backend. That gives us the split that we want. Working files stay local, long-term memory stays
7:56
in the Context Hub. Awesome. I can see those routes in action now. And finally, we set up tracing so
8:02
that every time we run NOVA, our traces are logged to LangSmith, where we will then set up Engine to
8:07
do our continual memory learning updates. I've made a basic front end for NOVA, where we can chat
8:12
with it and visualize the skills that it's referencing, as well as see the traces generated
8:16
from these interactions in LangSmith.
8:19
We can ask a question like,
8:21
"Show me my monthly spending breakdown."
8:24
And NOVA will respond first showing us the skills
8:27
that it's referencing as part of its response,
8:29
and then it'll interact with its different analysts
8:31
to be able to go and answer my question.
8:33
In parallel, we can visualize that trace
8:36
getting populated in LangSmith.
8:38
This is important.
8:38
We've invoked NOVA, and immediately,
8:41
we've captured NOVA's signal as a trace in LangSmith.
Setting up Engine: linking GitHub and Context Hub
8:44
Now, let's dive deeper into LangSmith,
8:46
where we'll see Engine and see this continual memory update process in action.
8:50
I can see there's a tab called Engine. Let's go and set that up.
8:54
I'm going to link the GitHub repo that NOVA is part of. I'm going to link the Context Hub
9:00
that references NOVA's agents.md file as well as its three skills,
9:03
and I'm going to select what matters to me.
9:07
I'm also going to add something specific. We can see that I've got Context and Memory,
9:10
but I'm also going to say correctness of skill files.
How Engine scans traces and surfaces issues
9:16
Great. Now I can start Engine's analysis. While that's analyzing, let me dive into how Engine
9:22
functions on a deeper level. Engine will scan over the traces in NOVA's tracing project and proactively
9:28
look for issues around the areas that we've selected that matter to us, like context and memory,
9:34
or the correctness of skill files, or if the output quality is drifting for whatever reason.
9:38
From there, I'm presented with a single pane of glass to get insight into areas where NOVA might be underperforming.
9:45
So I can see that the analysis has completed and I'm now presented with this Agent Overview doc.
9:50
This is the Engine agents agents.md doc.
9:53
And so you can see that it gives an overview of what NOVA is and NOVA's purpose.
9:58
Notes around standard usage, the trace structure, the tools that it's observed NOVA calling,
10:03
some baselines, some issue categories, and my user preferences.
Reviewing an Engine-detected issue: banned filler words
10:08
Great. I'm going to accept this and continue.
10:11
So as the Engine agent scans,
10:13
we'll see issues begin to populate in the issues board here for my review.
10:18
So now we can see after some time and some Engine agent analysis
10:22
that a few issues have populated here on our issue board.
10:25
Let's have a look at this issue more deeply.
10:27
We can see here that the agent opens user-facing responses
10:30
with banned filler words despite the tone rule.
10:32
So the tone that NOVA responds with is part of its memory.
10:36
Concretely, we've asked it to avoid filler words like "great", "here's", "let me", and "sure",
10:42
and we've specified that in NOVA's agents.md file.
10:46
Engine has flagged that this rule is only loaded as readable memory
10:50
via our agents.md file rather than injected into the system prompt,
10:53
so the smaller model, Claude, deprioritizes it.
10:57
NOVA also has sub-agents, and we can see that the sub-agent system prompts
11:01
also never restate the rule.
11:03
So its synthesized final answers inherit these violations.
Applying the fix directly from Engine
11:07
Engine has flagged the linked traces where this occurs.
11:11
So I can go and inspect that.
11:13
In this case here, we can see "great", as it mentioned.
11:18
And we can also see the proposed fix.
11:20
So as mentioned earlier, the tone rule only lived in the agents.md file and was never
11:24
restated in other system prompts.
11:27
So what we should do is reinforce the rule by adding some explicit examples,
11:31
some few-shot prompting, and we'll add that in Context Hub to our agents.md file.
11:36
We'll also make some changes to the system prompts of the sub-agents.
11:39
So you can see these are the system prompt changes.
11:42
And we can also see the proposed change to NOVA's agents.md file,
11:46
where I can view it in the Context Hub or directly apply the fix to its agents.md file here.
11:52
I'm going to do that.
11:53
Engine has helped me update NOVA's memory by flagging anomalous behavior from NOVA's production traces,
12:01
understanding the context and the memory that NOVA is referencing by looking in Context Hub,
12:06
and then proposing a fix that I can directly apply from Engine's single pane of glass.
12:11
So now I've applied that change to my agents.md file for NOVA.
Confirming the memory update worked
12:14
Let's go ahead and ask another question and confirm that we aren't getting any filler words and that our tone has improved.
12:23
We can see it's reading its skills, it's calling its sub-agent.
12:29
Looks pretty good to me, I can't see any filler words.
Wrap-up: the continual learning loop in action
12:32
And so this is just one example of how you can use LangSmith Engine and the Context Hub
12:38
to enable your agent's memory to continually learn and update as it generates signal.
12:44
Engine will scan your agent's signal, capture things that look anomalous,
12:47
and propose changes to your agent's memory store
12:50
so that it is continuously learning from your user interactions.
12:54
Go and try out LangSmith Engine in one of your tracing projects today.

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
source_url: https://www.youtube.com/watch?v=y6WUw2_Hhrs
source_title: How To Build a Self-Improving Agent with LangSmith Engine and Context Hub
channel_or_org: LangChain
speaker: Jake Broekhuizen
published_at: Jun 24, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + description + chapter list + pasted transcript
content_type: self-improving agents / agent memory / working memory / long-term memory / semantic memory / episodic memory / procedural memory / LangSmith Engine / Context Hub / trace-to-memory loop / versioned context / skills / agents.md / memory store / continual learning loop
source_reliability_context: Official LangChain technical/product walkthrough. Strong implementation source for turning production traces into reviewed, versioned memory updates through LangSmith Engine and Context Hub. Highly relevant to OMNI’s Knowledge Reservoirs, Agent Work Protocol, Build-OS, context governance, and trace-to-improvement loops. Treat LangSmith/Context Hub as implementation examples, not mandatory OMNI infrastructure.
priority: 5/5
depth: architecture_spine
recommended_status: route to Knowledge Reservoirs, Agent Memory Doctrine, Build-OS, AI Substrate, Agent Work Protocol, Polaris/proof layer, Context Governance, and trace-to-improvement loops.

Topic tags:
[LangChain, LangSmith_Engine, Context_Hub, Jake_Broekhuizen, self_improving_agents, agent_memory, working_memory, long_term_memory, semantic_memory, episodic_memory, procedural_memory, traces_to_memory, reviewed_memory, versioned_context, agents_md, skills_files, Context_Hub_repo, composite_backend, scratchpad_memory, durable_memory, trace_analysis, issue_detection, memory_update, continual_learning_loop, Build_OS, Knowledge_Reservoirs, Agent_Work_Protocol, Polaris]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 5/5
Depth: architecture spine
Recommended status: route to Knowledge Reservoirs / Agent Memory Doctrine / Build-OS / Agent Work Protocol / Polaris / Context Governance.

Core takeaway

This source gives a clean operational definition of a self-improving agent:

Traces do not improve an agent by themselves. Traces have to become signal, signal has to become reviewed memory, and reviewed memory has to guide the next run.

The transcript opens with exactly that: most agents do not learn; they leave traces, then repeat the same mistake later. The desired loop is traces → signal → memory → improved next run.

OMNI translation:

OMNI should not treat traces, logs, feedback, or failed runs as “learning” until they are converted into governed, versioned, reviewable memory or policy updates.

That is a major spine point.

Key concepts to preserve
1. Traces are evidence, not learning

The transcript says traces capture useful evidence: failed tool calls, mismatches, corrections, bad outputs, and places where the agent did not follow the right behavior. But traces alone do not make the agent better; they only show what happened.

OMNI keeper:

A trace is not memory. A trace is evidence that may justify a memory update.

For OMNI, this applies to:

Build-OS agent traces
D7 extraction failures
patient message routing failures
source-review mistakes
billing/benefit edge cases
provider summary feedback
clinical-context packet failures

Doctrine candidate:

Observability produces evidence; governance decides what becomes memory.

2. Working memory versus long-term memory

The source distinguishes working memory from durable memory. Working memory is the short-term state of the current interaction: conversation so far, tool results, intermediate reasoning state, scratchpad context. It helps solve the current task but is not durable system memory.

Long-term memory persists across runs and improves consistency over time.

OMNI keeper:

This should be preserved almost exactly.

OMNI taxonomy:

working_memory
Current run state. Useful for coherence, not durable truth.

long_term_memory
Persisted context that can shape future behavior.

domain_truth
Canonical record owned by a domain, not merely agent memory.

Doctrine candidate:

Working memory may guide a run; long-term memory may guide future runs; neither automatically becomes domain truth.

3. Three types of long-term memory

The transcript gives a useful memory taxonomy:

semantic memory = facts, preferences, domain knowledge, stable information
episodic memory = past interactions, examples, outcomes, patterns from previous runs
procedural memory = instructions, workflows, tool rules, skills, decision policies

OMNI keeper:

This is directly useful, but OMNI must add authority states.

OMNI version:

semantic_candidate_memory
Possible stable fact/preference/domain knowledge.

episodic_trace_memory
Prior interactions, examples, outcomes, patterns.

procedural_policy_memory
How the agent should act: workflows, tool-use rules, skills, policies.

adopted_domain_memory
Only promoted after proper domain/human review.

Doctrine candidate:

Memory type and authority state must be tracked separately.

4. Read/write loop between memory layers

The source says the agent retrieves useful long-term memory into working memory during a run, and after the run, meaningful signal can be written back into long-term memory.

OMNI keeper:

This is the core loop, but OMNI needs gates:

retrieve memory → act → trace → analyze → propose update → review/adopt → version memory → future retrieval

Doctrine candidate:

Memory writes require a promotion path; retrieval alone is not adoption.

5. Memory is a system, not a blob

The transcript says agent memory consists of three pieces: memory store, traces, and the process that converts traces into memory store updates.

OMNI keeper:

This is a strong architectural definition.

Agent memory is not “put everything in a vector DB.”

It needs:

durable store
trace evidence
update process
review process
versioning
environment promotion
retrieval policy
authority state
rollback

Doctrine candidate:

Agent memory is a governed lifecycle, not a storage location.

6. Engine as trace-analysis process

LangSmith Engine scans trace projects for recurring issues, diagnoses root cause, proposes a fix, and can add evaluation coverage so the same issue is caught if it comes back.

OMNI translation:

This is exactly the Build-OS / Intelligence Foundry loop:

trace cluster → root cause → proposed fix → eval coverage → reviewed update

For OMNI, every recurring failure should become one of:

skill update
prompt/procedural update
tool policy update
eval case
product gap
domain contract issue
human workflow issue

Doctrine candidate:

Repeated agent failure should produce both a fix candidate and regression coverage.

7. Context Hub as versioned memory store

The transcript describes Context Hub as storing versioned context such as agents.md, reusable skill files, and environment-specific versions that can move from staging to production.

OMNI keeper:

This is very important.

OMNI needs versioned context artifacts:

agent profile files
skill files
workflow policies
tone/style rules
tool-use rules
domain-specific procedures
eval-linked memory updates
staging/prod promotion

Doctrine candidate:

Agent memory that changes behavior must be versioned and promotable across environments.

8. agents.md as core memory profile

In the demo, agents.md serves as NOVA’s core memory: who the agent is, how it should behave, and what rules it should follow. Skill files define specialized abilities like vocabulary, chart rendering, and currency formatting.

Later, the agent’s MemoryPath points to agents.md, while SkillsPath points to the skill markdown files.

OMNI keeper:

This aligns with OpenWiki and Build-OS:

core agent profile
skill registry
behavior rules
domain vocabulary
tool protocols
formatting conventions

Doctrine candidate:

Agent behavior should be defined by explicit context artifacts, not hidden prompt drift.

9. State backend versus composite backend

The demo distinguishes local state backend from durable Context Hub memory. Local state is useful scratchpad memory, but not long-term memory. The composite backend mounts durable memory under a specific path while ordinary files remain temporary scratchpad state.

OMNI keeper:

This is a crucial implementation pattern.

OMNI needs a hard split:

temporary_working_files
Scratchpad, run-local, disposable.

durable_memory_files
Versioned, reviewed, environment-aware.

canonical_domain_records
Owned by domains, not memory files.

Doctrine candidate:

Temporary scratchpad and durable memory must live behind separate write paths.

10. Trace capture starts the learning loop

The demo logs NOVA’s interactions to LangSmith so Engine can later perform continual memory updates. The transcript explicitly says invoking NOVA immediately captures signal as a trace.

OMNI keeper:

Learning cannot happen if the system is not traced.

For OMNI:

no trace, no learning
no trace, no proof
no trace, no regression
no trace, no memory promotion

Doctrine candidate:

If a workflow can change future behavior, it must be traced.

11. Single pane of glass for memory issues

Engine scans traces for selected concerns such as context/memory, correctness of skill files, or output quality drift, then surfaces issues in an issue board. It also generates an agent overview with purpose, usage, trace structure, observed tools, baselines, issue categories, and user preferences.

OMNI keeper:

This is a Build-OS / Polaris surface pattern.

OMNI should have:

agent overview doc
observed behavior
baseline behavior
known issue categories
current skills/policies
drift signals
user/operator preferences
trace-linked issues

Doctrine candidate:

Agent memory maintenance needs a review surface, not just background mutation.

12. Example: trace-detected behavior rule failure

The demo issue is concrete: NOVA opens user-facing responses with banned filler words despite a tone rule. Engine identifies that the rule lives only in readable memory via agents.md, not the system prompt, and subagent prompts do not restate the rule.

OMNI keeper:

This is a useful diagnosis pattern:

rule exists
rule is not placed where model prioritizes it
subagents do not inherit rule
final synthesis violates rule

For OMNI:

safety rule in docs but not prompt/tool gate
D7 citation rule not in extractor prompt
pricing rule in policy but not checkout calculation
tone rule not propagated to outreach subagents
clinical caveat not propagated to summarizer

Doctrine candidate:

A rule is not effective until it is placed at the right execution layer.

13. Fixes should update memory and prompts, not just complain

Engine proposes explicit examples, few-shot prompting, updates to agents.md, and changes to subagent system prompts. The fix is applied to the Context Hub memory file, then the next run confirms the behavior improved.

OMNI keeper:

A trace issue should become a concrete patch:

memory update
skill update
prompt update
eval update
tool policy update
subagent propagation
confirmation run

Doctrine candidate:

Trace-derived fixes should patch the actual behavior layer that caused the failure.

14. Continual learning loop in action

The wrap-up says Engine scans agent signal, captures anomalous behavior, and proposes changes to the memory store so the agent continuously learns from user interactions.

OMNI caveat:

For OMNI, this must be “continual learning” only through governed memory updates, not silent model adaptation.

Especially in clinical workflows:

AI may propose memory
human/domain owner adopts
clinical memory requires provider adoption
policy memory requires governance
user preference memory requires consent/appropriateness
production promotion requires evals

Doctrine candidate:

Continual learning means governed context evolution, not uncontrolled self-modification.

OMNI translation

This source gives OMNI a concrete pattern for governed agent memory evolution:

run → trace → issue detection → root-cause analysis → proposed memory/skill/prompt fix → review/apply → versioned context update → next run improves → eval/regression coverage

The critical OMNI adaptation:

Engine-style systems may propose memory updates, but OMNI must separate candidate memory, reviewed memory, adopted memory, and domain truth.

That is the safety line.

Likely OMNI landing zones

Knowledge Reservoirs

semantic/episodic/procedural memory taxonomy
trace-derived memory candidates
versioned context artifacts
reviewed memory promotion

Agent Work Protocol

memory write rules
scratchpad vs durable memory
trace-required workflows
subagent prompt propagation
no silent self-modification

Build-OS

agents.md-style profiles
skills files
Context Hub-like repo
Engine-like issue board
trace-to-fix workflow
regression coverage after failures

Polaris / Proof Layer

trace evidence
memory update provenance
before/after behavior comparison
version lineage
who approved/adopted memory
staging-to-prod promotion

Clinical Memory / D7

strong caution: clinical memory cannot be auto-adopted
extracted facts remain candidates until provider/domain adoption
source evidence and citation required
Doctrine candidates
Observability produces evidence; governance decides what becomes memory.
Working memory may guide a run; long-term memory may guide future runs; neither automatically becomes domain truth.
Memory type and authority state must be tracked separately.
Agent memory is a governed lifecycle, not a storage location.
Repeated agent failure should produce both a fix candidate and regression coverage.
Agent memory that changes behavior must be versioned and promotable across environments.
Agent behavior should be defined by explicit context artifacts, not hidden prompt drift.
Temporary scratchpad and durable memory must live behind separate write paths.
If a workflow can change future behavior, it must be traced.
Agent memory maintenance needs a review surface, not just background mutation.
A rule is not effective until it is placed at the right execution layer.
Trace-derived fixes should patch the actual behavior layer that caused the failure.
Continual learning means governed context evolution, not uncontrolled self-modification.
Net-new / sharpen / affirm
Net-new candidates

trace_to_memory_loop
Pipeline where traces are analyzed for recurring behavior issues, converted into candidate memory/skill/prompt updates, reviewed, versioned, and used in later runs.

memory_authority_state
State model distinguishing candidate, reviewed, adopted, rejected, superseded, and domain-authoritative memory.

durable_context_repo
Versioned repository for agent profiles, skills, procedural policies, and environment-specific context.

scratchpad_durable_memory_split
Storage pattern separating temporary working files from durable memory paths.

behavior_layer_patch
Fix that updates the actual layer causing failure: system prompt, subagent prompt, skill file, memory file, tool policy, or eval.

Sharpen existing

Knowledge Reservoirs
Adds memory lifecycle and taxonomy: semantic, episodic, procedural.

Agent Work Protocol
Adds write rules for memory promotion and subagent propagation.

Polaris
Memory updates require trace/proof/version lineage.

Build-OS
Adds Engine-like issue board and Context Hub-like context repository.

Clinical Memory
Sharpens the line: trace-derived clinical information is not adopted without provider/domain review.

Affirm
traces alone do not improve behavior
long-term memory needs durable storage
skills and agent profiles are memory artifacts
behavior updates need versioning
subagents must inherit relevant rules
recurring issues need regression coverage
agent memory needs staging/prod promotion
self-improving agents require governance
Reject / do not over-import
Do not allow agents to silently rewrite their own memory in production.
Do not treat trace-derived memory as canonical truth.
Do not let procedural memory override domain policy.
Do not write every temporary scratchpad artifact into durable memory.
Do not auto-adopt clinical facts, preferences, or care plans.
Do not equate “applied fix” with “verified safe.”
Do not rely on readable memory alone when a rule needs system/tool enforcement.
Do not make LangSmith Context Hub mandatory OMNI infrastructure.
Hard read

This is a top-tier agent memory source.

The keeper is:

Self-improvement is not the model magically learning. It is a governed loop: traces reveal failure, an analysis process proposes a memory or skill update, humans/systems review it, the update is versioned, and future runs retrieve the improved context.

Shortest OMNI version:

OMNI needs trace-to-memory infrastructure, but with stronger authority boundaries: traces become candidate signal; candidate signal becomes reviewed memory; reviewed memory becomes versioned context; only domain-approved memory becomes durable truth.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

could be top tier memory source! says knox!

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-07` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**HEADLINE VERDICT.** `full_semantic` · **tier: spine** (Knox 5/5, architecture-spine; long, 14-concept read). This is a **top-tier agent-memory source** and the **memory-taxonomy sibling of `EVSRC-2026-000216`** (same LangSmith Engine + Context Hub product family; 216 = Ben Tannyhill led with the *trace→issue→fix→eval reflexive loop*; **227 = Jake Broekhuizen leads with the agent-MEMORY model** — working vs long-term; semantic/episodic/procedural; state-vs-composite backend; Context-Hub-as-versioned-store). Its keeper is a clean operational definition of self-improvement: **a trace is not learning — traces become signal, signal becomes *reviewed* memory, reviewed memory becomes versioned context, and only that guides the next run.** OMNI **AFFIRMS the loop and adds the authority spine Knox flags**: candidate memory ≠ reviewed memory ≠ adopted memory ≠ domain truth (`GRD-036` capture-broad-promotion-gated · candidate≠commit · no-silent-promotion · C3.7 firewall). **doctrine roll-up: 9 AFFIRM · 4 PARTIAL · 1 AFFIRM/PARTIAL. build roll-up: ~all absent** (2 partial — OMNI's own `AGENTS.md`/read-graph is a manual instance of "agents.md-as-explicit-context-artifact"; `audit_events` is a domain-action trace spine, not an agent-trace/memory store). **No `direct_conflict`/`unresolved`** — 2 tensions, both siblings of already-routed 216 tensions (autonomous memory-writeback vs no-silent-promotion → T7-class; continual-learning vs no-silent-ship → T8-class), resolved by existing law. **Genuine net-new is thin but real** (the memory-authority-STATE ladder + type taxonomy + scratchpad/durable write-path split + behavior-layer-patch placement rule); most mechanism is a re-mint of 216/215/219/220/205. **The frame is unchanged — this sharpens the Build-OS/REV-199 + Knowledge-Reservoirs + Agent-Work-Protocol memory story; it does not extend the care frame.**

#### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Traces are evidence, not learning | A trace is not memory; it is evidence that MAY justify a governed memory update. Observability produces evidence; governance decides what becomes memory. | Knowledge-Reservoirs · CNS §11 `trace_lineage` · Polaris/proof · Build-OS · Agent-Work-Protocol | *"Most agents don't learn, they just leave traces"* [0:00] | AFFIRM | absent | none | spine | watch |
| 2 | Working memory vs long-term memory | Three tiers, not two: working (run-local scratchpad) guides a run; long-term (persists across runs) guides future runs; neither auto-becomes domain truth (canonical, domain-owned). | Knowledge-Reservoirs · Agent-Work-Protocol §7 · §B runtime · CNS | *"short-term memory helps… in the moment, long-term… across runs"* [1:45] | AFFIRM | absent | none | spine | watch |
| 3 | Three types of long-term memory (semantic / episodic / procedural) | Memory-TYPE taxonomy — semantic (facts/prefs/domain knowledge), episodic (past interactions/outcomes/patterns), procedural (workflows/tool-rules/skills/policies). OMNI crosses it with an authority-STATE axis (candidate→reviewed→adopted→domain). | Knowledge-Reservoirs (MAJOR) · Agent-Work-Protocol · Clinical-Memory/D7 | *"semantic… episodic… procedural"* [1:03-1:29] | PARTIAL | absent | none | vocabulary→spine | promote (vocab) |
| 4 | Read/write loop between memory layers | Retrieve LTM→WM during a run; write meaningful signal back after — but OMNI inserts gates: retrieve→act→trace→analyze→propose→review/adopt→version→retrieve. Retrieval is not adoption; writes require a promotion path. | Agent-Work-Protocol §7/§8 · CNS · Knowledge-Reservoirs · Polaris | *"retrieves useful long-term memory… written back"* [1:34-1:44] | AFFIRM | absent | tension (writeback vs no-silent-promotion) | spine | watch |
| 5 | Memory is a system, not a blob | Agent memory = store + trace evidence + conversion process + review + versioning + env-promotion + retrieval policy + authority state + rollback. A governed lifecycle, not a storage location; not "dump everything in a vector DB." | Knowledge-Reservoirs (MAJOR) · Build-OS · Agent-Work-Protocol · Polaris | *"memory store, the traces, and the process"* [2:10-2:16] | AFFIRM | absent | none | spine | watch |
| 6 | Engine as trace-analysis process | Scan trace project → recurring issue → root cause → proposed fix → eval coverage so the same issue is caught on return. = OMNI Build-OS/REV-199 reflexive loop; repeated failure yields BOTH a fix candidate AND regression coverage. | Build-OS + REV-199 (MAJOR) · Agent-Work-Protocol · Polaris/proof · §C | *"Engine… turns those traces into improvement signal"* [2:44] | AFFIRM | absent | none | spine | watch (twin 216) |
| 7 | Context Hub as versioned memory store | Versioned context artifacts (agents.md, reusable skill files, env-specific versions) promotable staging→prod. Memory that changes behavior must be versioned + promotable across environments. | Knowledge-Reservoirs · Build-OS · document-governance (`projection≠truth`) · Settings | *"versioned context… agent markdown files… staging to production"* [3:04-3:15] | PARTIAL | absent | none | spine | watch |
| 8 | agents.md as core memory profile | Explicit context artifacts (agent profile + skills + behavior rules) define behavior — not hidden prompt drift. OMNI already IS this (AGENTS.md + Manifest-Read-Graph + artifact index). | Build-OS · Agent-Work-Protocol/Manifest-Read-Graph · Knowledge-Reservoirs | *"agents.md file that will serve as NOVA's core memory"* [4:01-4:05] | AFFIRM | partial | none | spine | watch |
| 9 | State backend vs composite backend (scratchpad↔durable split) | Temporary scratchpad state and durable memory must live behind SEPARATE write paths (composite backend mounts durable memory under one path; everything else is disposable). OMNI adds a third tier: canonical domain records ≠ memory files. | Agent-Work-Protocol §7 · §B runtime · Knowledge-Reservoirs · CNS | *"anything under memories is durable… outside… temporary scratchpad"* [7:44-7:50] | PARTIAL | absent | none | spine | promote (net-new) |
| 10 | Trace capture starts the loop (no trace, no learning) | If a workflow can change future behavior, it must be traced. No trace → no learning, no proof, no regression, no memory promotion. | CNS §11 `trace_lineage` · Polaris/proof · Build-OS · Agent-Work-Protocol | *"invoked NOVA, and immediately… captured… as a trace"* [8:38-8:41] | AFFIRM | partial | none | spine | watch |
| 11 | Single pane of glass / agent-overview doc | Memory maintenance needs a REVIEW SURFACE, not silent background mutation: an agent-overview doc (purpose/usage/trace-structure/observed-tools/baselines/issue-categories/prefs) + a trace-linked issue board. | Build-OS · Surface/Projection-Map · Knowledge-Reservoirs · Agent-Work-Protocol | *"single pane of glass… this Agent Overview doc"* [9:38-9:53] | AFFIRM | absent | none | spine | watch (twin 216 `agent_overview_document`) |
| 12 | Rule placement / behavior-layer diagnosis | A rule is not effective until placed at the execution layer the model prioritizes; subagents must inherit it. Readable-doc rule ≠ enforced rule (tone rule in agents.md but not injected → smaller model deprioritizes → subagents never restate → synthesis violates). | §C Security · Agent-Work-Protocol · Build-OS · CNS · Clinical-Memory/D7 | *"only loaded as readable memory… rather than injected"* [10:46-10:53] | AFFIRM/PARTIAL | absent | none (AFFIRMs 205 "don't rely on readable memory alone") | spine | promote (net-new) |
| 13 | Fixes patch the actual behavior layer | A trace issue becomes a concrete patch (memory + skill + prompt + subagent-prompt + eval + tool policy) + a confirmation run — not a complaint. Trace-derived fixes patch the layer that caused the failure. | Build-OS + REV-199 · Agent-Work-Protocol · Polaris | *"reinforce the rule… few-shot… changes to… sub-agents"* [11:31-11:39] | AFFIRM | absent | none | spine | watch (twin 216) |
| 14 | Continual learning = governed context evolution | Self-improvement is NOT silent model adaptation; it is governed context evolution. Candidate ≠ reviewed ≠ adopted ≠ domain truth. Clinical memory requires provider adoption; policy requires governance; preference requires consent; prod-promotion requires evals. **The safety line.** | §A trust/authority · Agent-Work-Protocol · Clinical-Memory/D7 (MAJOR caution) · CNS · Polaris | *"continuously learning from your user interactions"* [12:50-12:54] | AFFIRM | absent | tension (self-modification vs no-silent-ship) | spine | watch |

#### B. Net-new primitives  *(DEDUP vs EVRUN-000003 registry §2 + EVRUN-000001 §2A + EVRUN-000002 + standard OMNI primitives, BEFORE minting. All verdicts "dedup-pending, Opus-main verifies.")*

Format: `name — meaning — EXISTS-AS`.

- `memory_authority_state` — a state model for durable memory distinct from its type: `candidate → reviewed → adopted → rejected → superseded → domain-authoritative` — **EXISTS-AS: net-new (memory-specific authority-STATE ladder). Crosses but is NOT identical to 205 `memory_contamination_state` (contamination/safety) or generic candidate≠commit (event-level) — this is the promotion lifecycle applied to a memory ARTIFACT. Composes `GRD-036` + no-silent-promotion + C3.7. dedup-pending, Opus-main verifies.**
- `agent_memory_type_taxonomy` — the semantic/episodic/procedural type axis, tracked ORTHOGONALLY to `memory_authority_state` (type ≠ authority) — **EXISTS-AS: net-new NAME (vocabulary-tier); sharpens Knowledge-Reservoirs by adding the memory-TYPE axis. Not a mechanism; a classification scaffold. dedup-pending, Opus-main verifies.**
- `scratchpad_durable_memory_split` — governance pattern: temporary working files and durable memory (and canonical domain records) sit behind SEPARATE write paths; scratchpad never auto-flows to durable memory — **EXISTS-AS: net-new (write-path separation). Composes candidate≠commit + 204 `context_memory_budget` + Agent-Work-Protocol §7. Distinct from those: it is specifically a write-PATH governance rule. dedup-pending, Opus-main verifies.**
- `behavior_layer_patch` — a trace-derived fix must patch the ACTUAL execution layer that caused the failure (system prompt / subagent prompt / skill file / memory file / tool policy / eval) + propagate to subagents; "readable ≠ enforced" placement rule — **EXISTS-AS: net-new (placement/where-to-patch rule). Distinct from 216 `trace_to_issue_to_fix_eval_loop` (the LOOP) — this is the WHERE. Sibling of 205 `content_authority_class` (both about rule placement/authority). dedup-pending, Opus-main verifies.**

**Re-mints / reconciles — DO NOT mint (dedup hits):**
- `trace_to_memory_loop` (Knox) — **= 216 `trace_to_issue_to_fix_eval_loop`** (near-identical); 227 supplies the memory-taxonomy leg, not a new loop. Reconcile.
- `durable_context_repo` (Knox; = Context Hub) — **= Knowledge-Reservoirs + document-governance versioning + OMNI `AGENTS.md`/read-graph + adjacent to 217 `agent_manifest` + 219 agent-readable-repo.** Reconcile, not net-new.
- `agent overview doc` — **= 216 `agent_overview_document`** (twin). No mint.
- Engine issue board / single-pane — **= 216 `trace_to_issue_to_fix_eval_loop` + 210/216 `exception_surface`.** No mint.
- Sharpen-only (EXISTS-AS): Knowledge-Reservoirs (+memory lifecycle & type taxonomy) · Agent-Work-Protocol (+memory write rules, subagent-prompt propagation) · Polaris (+memory-update provenance/version-lineage/who-adopted) · Build-OS (Engine-like issue board = 216) · Clinical-Memory/D7 (no-auto-adopt of extracted facts) · 205 `content_authority_class` · 220 context-window≠memory · candidate≠commit.

**Net-new tally for 227: 4 genuine candidates** (1 vocabulary-tier `agent_memory_type_taxonomy`; 3 mechanism/policy: `memory_authority_state`, `scratchpad_durable_memory_split`, `behavior_layer_patch`) — the rest re-mint 216/215/219/220/205. Consistent with the wave pattern (thin net-new on the LangChain product-family sources; the value is *sharpening*, not new frame).

#### C. Reread flags
- **`EVSRC-2026-000216`** (Ben Tannyhill · LangSmith Engine self-improving loop) — **PRIMARY sibling; same product family.** Opus-main MUST reconcile so REV-199 mechanism is not double-counted: 216 owns the *trace→issue→fix→eval→curated-memory loop* (`trace_to_issue_to_fix_eval_loop`, `write_access_eval_environment`, `shadow_agent_production`, `agent_overview_document`, `phase_specific_eval_policy`); **227 owns the MEMORY MODEL** (working/long-term; semantic/episodic/procedural; `memory_authority_state`; scratchpad↔durable split). Fold 227 as 216's memory-taxonomy complement.
- **`EVSRC-2026-000219`** (OpenWiki) — `durable_context_repo` overlaps `git_history_to_context_loop` + agent-readable-repo; both = Context-Hub-class versioned context. Confirm no re-mint.
- **`EVSRC-2026-000217`** (`agent_manifest`) — declare-before-run manifest vs 227 Context-Hub versioned store: distinct (manifest = pre-run declaration; Context Hub = durable memory store). Note the boundary.
- **`EVSRC-2026-000204`** (`context_memory_budget`) — reconcile against 227 `scratchpad_durable_memory_split` (204 = cost/size of context memory; 227 = write-path separation). Complementary, not duplicate.
- **`EVSRC-2026-000205`** (`content_authority_class` / `memory_contamination_state`) — reconcile against 227 `behavior_layer_patch` (both placement-of-rules) and `memory_authority_state` (205 = contamination/safety state; 227 = promotion-authority state). Keep distinct.
- **`EVSRC-2026-000220`** (context-window≠memory; `state_externalized_context`) — 227 tiered memory model (working/long-term/domain-truth) sharpens 220's context-window≠memory line.
- **Future:** when the **Clinical-Memory / D7** contract is authored, carry the hard caution — trace-derived clinical facts/preferences/care-plans are candidates until provider/domain adoption; no auto-adopt (cluster 3/14).

#### D. Hard read + strongest OMNI line
- **One-line hard read:** Self-improvement is not the model magically learning — it is a governed loop (trace reveals failure → analysis proposes a memory/skill/prompt fix → humans/domains review → the update is versioned → future runs retrieve improved context); OMNI's job is to keep the four authority tiers — candidate / reviewed / adopted / domain-truth — from ever collapsing into one.
- **Strongest OMNI line:** OMNI needs trace-to-memory infrastructure, but with harder authority boundaries than any vendor loop supplies — **a trace is evidence, not memory; candidate memory is not reviewed memory; reviewed memory becomes versioned context; and only domain-approved memory becomes durable truth** — so agents may read the world and even remember it, but the world (and the agent's own runtime) never gets to silently rewrite what OMNI treats as true.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` (Opus-main folds the returned packet) · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: **Knowledge-Reservoirs (MAJOR — memory lifecycle + semantic/episodic/procedural type taxonomy + authority-state ladder) · Build-OS + REV-199 (MAJOR — Engine/issue-board/behavior-layer-patch; memory-taxonomy sibling of 216) · Agent-Work-Protocol (MAJOR — memory write rules, scratchpad↔durable split, subagent-prompt propagation, no-silent-writeback) · Polaris/proof (medium — memory-update provenance/version-lineage) · §A trust/authority + Clinical-Memory/D7 (medium — no-auto-adopt of trace-derived clinical facts) · CNS §11 trace_lineage · document-governance (projection≠truth for versioned context) · Surface/Projection-Map (medium — agent-overview/issue review surface).** · promotion: `watch` (proposes only — `GRD-036` promotion-gated; net-new candidates `memory_authority_state` · `agent_memory_type_taxonomy` · `scratchpad_durable_memory_split` · `behavior_layer_patch` all dedup-pending Opus-main verification; frame unchanged)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — §0/§0.1 metadata lifted verbatim from §3 Review 001 header (`identity_confidence: high_from_operator_metadata`); proposed slug `langsmith-engine-context-hub-agent-memory` (file NOT renamed); §3 **Review 003** formal deep extraction written (headline verdict + 14-concept cluster table + 4 net-new candidates [all dedup-pending Opus-main] + reread flags + hard read); §4 pointers filled (EVRUN-2026-000003; watch); §0.5 ticked; status flipped `raw_dropped → analyzed`. Registry/coverage/anchor-ledger NOT edited (Opus-main folds the returned packet). `GRD-036`/`GRD-044` respected — binds nothing, no sidecar.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

# EVSRC-2026-000221 — GLM 5.2 + dcode: Frontier Coding with Open Models

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.
Proposed filename (do NOT rename file): `EVSRC-2026-000221_glm-5-2-dcode-model-agnostic-coding-agent.md`

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000221_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(lifted verbatim from operator metadata block at top of §3 Review 001 — `identity_confidence: high_from_operator_metadata`)*
- evsrc_id: `EVSRC-2026-000221`  ·  filename: `EVSRC-2026-000221_TK.md` *(proposed rename: `EVSRC-2026-000221_glm-5-2-dcode-model-agnostic-coding-agent.md` — not applied)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=wVB95vLg_FQ`  ·  source_title: `GLM 5.2 + dcode: Frontier Coding with Open Models`
- channel_or_org: `LangChain`  ·  speaker: `LangChain presenter (not named in pasted transcript)`  ·  published_at: `approx 2026-07-01 (screenshot shows "6 days ago" from 2026-07-07 capture)`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + description + pasted transcript`
- content_type: `open-weight coding models / GLM 5.2 / dcode (Deep Agents Code) / model-agnostic terminal coding agent / coding-agent observability (LangSmith tracing) / MCP + skills + subagents / provider routing / context offload`  ·  source_reliability_context: `vendor` — LangChain product/demo walkthrough showing GLM 5.2 running inside dcode, an open-source model-agnostic terminal coding agent. Benchmark/model-performance claims = source claims until independently verified. Strong implementation signal for "model + agent harness + tracing" over model-only evaluation.  ·  topic_tags_light: `[LangChain, GLM_5_2, Z_ai, dcode, open_weight_models, model_agnostic_coding_agent, MCP, skills, subagents, LangSmith_tracing, Fireworks, provider_routing, context_offload, Build_OS, AI_Substrate, model_admissibility_gate]`

## §0.1 — People / authorship / authority context  *(lifted from operator metadata block — `identity_confidence: high_from_operator_metadata`)*
- primary speaker(s):
  - name: `LangChain presenter (not named in pasted transcript)` · role_in_source: `presenter` (product/demo walkthrough narrator) · affiliation_at_publication: `LangChain` · speaker_type: `vendor` · authority_context: `LangChain product team demoing dcode (Deep Agents Code) + LangSmith; vendor-positioned — promotes own agent-runtime + observability stack` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `LangChain (YouTube)`  ·  interviewer / moderator / host: `n/a (single-narrator demo)`
- event_context: `Product/demo walkthrough — installing dcode, connecting GLM 5.2 via Fireworks, running a coding task, tracing through LangSmith.`  ·  perspective / conflict notes: `Vendor demo — dcode + LangSmith are LangChain products; "frontier open model" + benchmark framing is promotional. Treat GLM 5.2 capability/benchmark claims (81 Terminal-Bench, 1M context, 79 tok/s, "as good as Opus 4.8 / GPT 5.5") as source claims, not OMNI truth (GRD-039 authority-is-descriptive-not-worship).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(NOT edited per task — Opus-main folds)* · [ ] update coverage matrix *(NOT edited per task)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

n this video



Chapters

Transcript
Search in video
Why everyone is talking about GLM 5.2
0:00
On June 16th, Z.ai released GLM 5.2, their open weights,
0:06
MIT licensed model that can deliver frontier performance
0:10
with a one million token context window.
0:13
It's become a daily driver for a lot of devs,
0:15
myself included, and it's got folks on X saying things like,
0:19
"I've never experienced an open model like this,"
0:22
or, "It's as good as Opus 4.8 and GPT 5.5."
0:27
The benchmarks back it up too.
0:29
It scored an 81 on terminal bench,
0:32
just a couple of points behind Opus and GPT 5.5,
0:36
and ahead of most closed models.
0:39
To reiterate, this is an open-weight model
0:41
available on Hugging Face
0:43
that runs 79 tokens per second
0:46
at a fraction of the cost of frontier models.
The benchmark numbers
0:50
However, a model is only as good as the agent driving it.
0:53
Tools like Claude Code and Codex are excellent,
0:57
but they're built to run provider-specific models.
1:01
To get frontier performance out of an open model,
1:04
we need a coding agent that performs
1:06
just as well as the frontier agents,
1:08
but without locking you to a certain provider.
Why a great model still needs the right agent
1:11
That's where Deep Agents Code comes in,
1:13
or dcode for short.
1:15
dcode is the open source, model agnostic coding agent
1:19
with per model optimizations built in.
1:22
It's a similar experience to Claude Code,
1:25
a terminal-based coding agent with skills,
1:27
subagents and MCP.
1:30
Later in the video, we'll see that it also has
1:33
first class tracing through LangSmith,
1:35
so you can see exactly what's going on
1:37
with your model under the hood.
1:39
That said, let's get running with dcode and GLM 5.2.
1:44
So first, head over to the Deep Agents Code docs site
1:48
and copy the install script.
1:51
Over in terminal, we will paste it and press enter.
Meet dcode, the open source coding agent
1:55
After a short install, we can type in dcode and press enter, and then we are in.
2:03
dcode will lead you through initialization.
2:06
We can optionally enter our name.
2:07
I'm going to skip this for now.
2:10
And then we can choose our first model.
2:12
We have a lot of options here, but to begin with, we'll type in Fireworks and scroll down
2:19
to GLM 5.2.
Installing dcode and connecting GLM 5.2
2:23
To enable web search we can enter our API key for Tavily but we'll skip this for now.
2:29
dcode will now install the Fireworks plugin, restart the server and in a second, prompt
2:36
us for our API key.
2:38
Go ahead and enter that, press enter and we're ready to go.
2:43
If you don't already have an API key you can head on over to fireworks.ai, get started
2:50
or if you already have an account, log in.
2:54
I already have mine, so we're ready to go.
Kicking off a real coding task
2:57
You can use dcode just like Claude, Codex,
3:00
or any other coding agent,
3:01
so let's kickstart a long running task.
3:03
We'll do build an LLM chat app powered by deep agents.
3:10
And the agent will go to work,
3:12
so we can take this opportunity
3:14
to check out some of the other features in dcode.
3:16
So I'll fire up a session in a new terminal tab,
3:21
And then let's type /auth.
Authenticating integrations and exploring slash commands
3:25
Here you can authenticate with a bunch of different integrations.
3:29
We'll choose Tavily for now. Enter it, paste your
3:32
API key, and you're connected.
3:36
GLM 5.2 inherits all of the features that you would expect
3:40
from a first class coding agent. So we can type in /threads
3:44
to resume prior conversations. We can type /offload
3:48
to offload older messages and free context.
3:53
And we can type /MCP,
3:54
oh, /MCP to manage our MCP servers.
Checking in on the running agent
4:00
Let's check in now on our long running task
4:03
by opening our browser
4:06
and we'll visit localhost 3000.
4:09
And we have a chat app.
4:12
Let's take a peek under the hood now.
Inside LangSmith: tracing dcode step by step
4:15
What you're looking at now is LangSmith,
4:17
our observability platform that offers complete visibility
4:20
into what's going on under the hood with your agents.
4:23
So we're looking at a number of traces right now,
4:26
but what you didn't see me do beforehand
4:28
is actually set dcode up to be sending traces to LangSmith.
4:32
So let's take a look at that now.
4:35
In dcode, if we type /auth,
4:39
we can head down to LangSmith tracing
4:42
and enter our API key.
4:45
press Enter and that will enable dcode
4:47
to be sending traces to LangSmith automatically.
4:51
And we can see them here.
Drilling into tool calls and token usage
4:54
If we click on a trace,
4:55
you can see a turn by turn breakdown of our conversation.
4:59
You can see the inputs here and the outputs.
5:03
And if we hover, we can see a breakdown of token usage.
5:08
You can also click on a turn
5:10
and drill down into tool executions
5:12
and chat model invocations, among other things,
5:16
and see a lot of the same things.
5:19
There's a ton that I could talk about
5:21
with LangSmith observability.
5:22
If you're interested to learn more,
5:24
check out some of our videos on LangSmith.
Where open models and dcode go next
5:27
I think there's a really exciting future for open models,
5:31
and there's way more that we can talk about
5:32
for open models in dcode.
5:35
If you're interested in hearing anything specific,
5:37
please let us know in the comments or on X.
5:40
Thanks, and I'll see you in the next one.

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
source_url: https://www.youtube.com/watch?v=wVB95vLg_FQ
source_title: GLM 5.2 + dcode: Frontier Coding with Open Models
channel_or_org: LangChain
speaker: LangChain presenter; not named in pasted transcript
published_at: approx Jul 1, 2026, screenshot shows “6 days ago”
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + description + pasted transcript
content_type: open-weight coding models / GLM 5.2 / dcode / Deep Agents Code / model-agnostic coding agent / coding-agent observability / LangSmith tracing / MCP / skills / subagents / provider routing / context offload / open-model frontier coding workflow
source_reliability_context: LangChain product/demo walkthrough showing GLM 5.2 running inside dcode, an open-source model-agnostic terminal coding agent. Useful for Build-OS, model routing, open-model admissibility, coding-agent runtime, and observability doctrine. Benchmark/model-performance claims should be treated as source claims unless independently verified. Strong implementation signal for “model + agent harness + tracing” rather than model-only evaluation.
priority: 4/5
depth: medium_full_semantic
recommended_status: route to Build-OS, AI Substrate, model admissibility, coding-agent runtime, LangSmith-style observability, open-model strategy, MCP/tool integration, and runtime economics.

Topic tags:
[LangChain, GLM_5_2, Z_ai, dcode, Deep_Agents_Code, open_weight_models, MIT_license_claim, one_million_token_context_claim, model_agnostic_coding_agent, coding_agents, terminal_agent, skills, subagents, MCP, LangSmith_tracing, Fireworks, provider_routing, model_selection, slash_commands, context_offload, token_usage, tool_tracing, open_model_strategy, Build_OS, AI_Substrate, runtime_economics, model_admissibility_gate]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4/5
Depth: medium-full semantic
Recommended status: route to Build-OS / AI substrate / model routing / coding-agent harness / observability / open-model economics.

Core takeaway

This source is not really about GLM 5.2 alone.

The deeper point is:

A strong model is not enough. Frontier coding performance requires the right agent harness: skills, subagents, MCP, context management, provider routing, and full observability.

The video uses GLM 5.2 as the motivating model, but the OMNI keeper is broader:

Model capability only becomes useful inside an execution environment that can route, observe, control, and evaluate it.

That lands directly in OMNI’s AI substrate and Build-OS.

Key concepts to preserve
1. Model performance is harness-dependent

The source says a model is only as good as the agent driving it. Claude Code and Codex are strong, but provider-specific. dcode is positioned as a model-agnostic coding agent that can let open models behave more like frontier coding agents.

OMNI keeper:

Do not evaluate models in isolation from their harness.

For Build-OS, the relevant unit is not:

model

It is:

model + agent harness + tools + skills + memory/context policy + evals + traces + runtime budget

Doctrine candidate:

OMNI should admit model-runtime bundles, not naked models.

2. Open-weight model strategy

The source claims GLM 5.2 is open-weight, MIT-licensed, has a 1M-token context window, and performs near frontier coding models on Terminal-Bench.

Treat those as source claims, not doctrine.

OMNI keeper:

Open models matter because they may offer:

lower cost
provider flexibility
local/private deployment paths
reduced vendor lock-in
specialized routing for lower-risk lanes
fallback capacity
experimentation surface

But open-weight does not automatically mean production-admissible.

Doctrine candidate:

Open models require the same admissibility gates as closed models: quality, cost, latency, safety, observability, and lane fit.

3. Model-agnostic coding agent

dcode is presented as a terminal-based coding agent with provider/model flexibility.

OMNI keeper:

Build-OS should avoid assuming one provider forever.

Potential primitive:

model_agnostic_agent_harness

A harness that can swap models while preserving:

tools
skills
subagents
MCP servers
tracing
eval suites
context rules
permissions
rollback

This supports the prior virtual_model_endpoint / model orchestration doctrine.

4. Per-model optimizations

The video says dcode has per-model optimizations built in.

OMNI keeper:

Different models need different operating policies.

For OMNI, a model profile may include:

best lanes
weak lanes
context limit
cost profile
latency profile
tool-use reliability
coding style
hallucination risk
eval pass rates
allowed risk tier
context offload behavior
required verifier strictness

Doctrine candidate:

Model routing should be based on measured lane behavior, not brand preference.

5. Coding-agent features are becoming standard substrate

dcode includes:

skills
subagents
MCP
slash commands
prior-thread resume
context offload
integration authentication
tracing

OMNI keeper:

These are no longer “extra features.” They are becoming the standard control surface for serious coding agents.

Build-OS should expect:

skill registry
subagent delegation
MCP/tool registry
auth management
context compaction/offload
trace capture
resumable threads
command surface
model routing

Doctrine candidate:

A production coding agent is an operating environment, not a chat box.

6. Context offload as runtime primitive

The /offload command frees context by moving older messages out of active context.

OMNI keeper:

This sharpens context-memory doctrine.

OMNI needs explicit context policies:

what stays live
what gets summarized
what becomes file/memory
what gets dropped
what remains citation-required
what can be rehydrated
what is unsafe to offload

Doctrine candidate:

Context offload must be governed, because dropped context can become lost intent or lost constraints.

7. MCP/tool management

The /MCP command manages MCP servers.

OMNI keeper:

For Build-OS, tool rails should be explicit and inspectable.

Agents need to know:

what tools exist
which tools are authorized
what each tool can mutate
what credentials are attached
which environment is being touched
whether tool calls are traced

Doctrine candidate:

Tool access should be configured through explicit, inspectable rails, not hidden prompt assumptions.

8. Observability is first-class

The source shows dcode sending traces to LangSmith, with turn-by-turn breakdown, inputs/outputs, token usage, tool executions, and model invocations.

OMNI keeper:

This affirms the trace doctrine again.

For Build-OS, every meaningful coding-agent session should preserve:

user request
model used
tools called
files read/written
token usage
cost/latency
subagent calls
MCP calls
resulting diff
tests/verifiers run
final acceptance/rejection

Doctrine candidate:

Coding-agent work should be traceable at the level of turns, tools, tokens, and artifacts.

OMNI translation

This source reinforces a major architecture point:

The future is not “which model wins?” The future is model routing inside agent operating systems.

For OMNI, the important object is:

agent_runtime_profile

Not just:

GPT vs Claude vs GLM vs Gemini

A runtime profile includes:

model
provider
cost/latency
context strategy
tool reliability
code-editing reliability
eval pass rate
tracing support
risk authorization
lane fit

That is what should be admitted into Build-OS.

Likely OMNI landing zones

AI Substrate

model-agnostic runtime
model profiles
provider routing
open-model admissibility
context offload policy
tool/MCP registry

Build-OS

coding-agent harness
dcode-like terminal workflow
skills/subagents
repo-edit traces
test/verifier integration
model experimentation lane

Agent Work Protocol

model must be declared
tools must be authorized
traces required for code work
offload rules must preserve constraints
no untraced write actions

operating_metrics

token usage by model
cost per accepted diff
latency per task
eval pass rate by model
rollback rate
tool-call failure rate
context-offload failure modes

Polaris / proof layer

trace proof
model/version proof
tool invocation proof
artifact/diff proof
verifier/test proof
Doctrine candidates
A model is only production-useful inside a governed agent harness.
OMNI should admit model-runtime bundles, not naked models.
Open models require the same admissibility gates as closed models.
Model routing should be based on measured lane behavior, not brand preference.
A production coding agent is an operating environment, not a chat box.
Tool access should be configured through explicit, inspectable rails.
Context offload must be governed, because dropped context can become lost constraints.
Coding-agent work should be traceable at the level of turns, tools, tokens, and artifacts.
Net-new / sharpen / affirm
Net-new candidates

model_runtime_bundle
A production-admissible unit combining model, provider, agent harness, tools, skills, context policy, tracing, eval results, and runtime budget.

model_agnostic_agent_harness
Agent framework that allows models/providers to be swapped while preserving tools, skills, observability, and eval discipline.

context_offload_policy
Rules for what can be removed from live context, where it goes, how it is summarized, and how constraints are preserved or rehydrated.

coding_agent_trace_profile
Standard trace record for coding agents: turns, model calls, tools, token use, files touched, diffs, tests, and final outcome.

Sharpen existing

virtual_model_endpoint
This source gives a concrete coding-agent example of model-agnostic orchestration.

model_admissibility_gate
Open-weight models still need lane-specific evals before trust.

Build-OS
Adds coding-agent runtime features: slash commands, auth, MCP, tracing, context offload.

operating_metrics
Measure cost and success per coding task, not just benchmark score.

Affirm
open models are strategically important
model choice should be decoupled from agent harness when possible
tracing is mandatory for real coding-agent work
token usage and tool calls need visibility
skills/subagents/MCP are becoming normal coding-agent substrate
long-context models still need context management
Reject / do not over-import
Do not treat GLM 5.2 benchmark claims as OMNI truth without independent eval.
Do not assume open-weight means safe or production-ready.
Do not choose models by social hype.
Do not trust one model across all lanes.
Do not let context offload silently drop critical constraints.
Do not equate tracing with correctness.
Do not treat dcode as mandatory infrastructure.
Hard read

This is a model-runtime strategy source, not a pure model source.

The keeper is:

Frontier behavior comes from the bundle: model + coding agent + tools + skills + MCP + context strategy + tracing + evals. Open models become interesting when they can plug into the same serious agent runtime as closed models.

Shortest OMNI version:

OMNI should evaluate model-runtime bundles by lane. GLM 5.2 may be interesting, but the real doctrine is model-agnostic Build-OS: swap models, preserve the harness, trace every step, measure cost/quality, and admit models only where evals prove they belong.

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

**Headline verdict (2-3 sentences).** This LangChain demo is a *model-runtime strategy* source disguised as a GLM 5.2 launch clip: its durable OMNI keeper is that frontier behavior comes from the **bundle** (model + agent harness + tools + skills + MCP + context policy + tracing + evals + runtime budget), never the naked model — so OMNI should admit *model-runtime bundles*, not models, and keep the harness model-agnostic so providers can be swapped while tools/skills/traces/evals/permissions/rollback survive. It is almost entirely a **convergence / vocabulary re-affirmer** of the wave's already-established §B + Build-OS spine (201 harness-as-asset · 206 `virtual_model_endpoint`/`model_admissibility_gate`/`outcome_per_token` · 213 MCP-as-governed-context · 215/216 trace+eval+reflexive · 204 context-memory · 211 tool-gateway) — `doctrine=AFFIRM/PARTIAL · build=absent` across the board (grep-confirmed: no model-registry / model-agnostic harness / LangSmith-style tracing / context-offload / tool-gateway in repo; `provider` in `lib/ai` = clinical care-provider, not model provider). **Tier: medium** (convergence + a few net-new NAMES/labels; 0 genuinely net-new *mechanism* — the mechanisms all pre-exist in the registry). Treat every GLM 5.2 benchmark/capability claim as vendor source-claim, not OMNI truth.

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | model performance is harness-dependent | the unit of capability is model+harness+tools+skills+context+evals+traces+budget, not the model alone | §B AI-substrate · Build-OS · Agent-Work-Protocol · CNS | "a model is only as good as the agent driving it" [0:50] | AFFIRM (201 harness-as-asset) | absent | none | spine | watch |
| 2 | admit model-runtime **bundles**, not naked models | admission gate scores the whole runtime bundle (model+provider+harness+context+tracing+evals+risk-tier), not the model brand | §B `ai_model_registry`/`model_admissibility_gate`(206) · `capability_envelope` · Build-OS | "per model optimizations built in" [1:22] | PARTIAL (sharpens 206 admissibility) | absent | none | vocabulary | watch |
| 3 | model-agnostic coding agent (decouple model from harness) | harness swaps model/provider while preserving tools/skills/MCP/tracing/evals/context/permissions/rollback | §B `virtual_model_endpoint`(206) · `agent_workbench`(201) · Build-OS | "open source, model agnostic coding agent" [1:15] | AFFIRM (206 endpoint routing) | absent | none | vocabulary | watch |
| 4 | open-weight model strategy / open ≠ production-admissible | open models = cost/flexibility/private-deploy/fallback upside, but pass the SAME admissibility gates as closed | §B openness-not-authority(201) · `model_admissibility_gate`(206) · §C | "open weights, MIT licensed model… frontier performance" [0:00] | AFFIRM (201 openness≠authority) | absent | tension (open-hype vs gated admission → other pole) | vocabulary | watch |
| 5 | per-model optimizations / model profile | a model carries a measured profile (best/weak lanes, context limit, cost/latency, tool reliability, eval pass, risk tier, offload behavior) → route by measured lane behavior, not brand | §B model-registry attributes · operating-metrics · CNS routing | "with per model optimizations built in" [1:22] | AFFIRM/PARTIAL (206) | absent | none | vocabulary | watch |
| 6 | coding agent = operating environment, not a chat box | skills · subagents · MCP · slash commands · resumable threads · offload · auth · tracing = the standard control surface of a serious agent | Build-OS(`REV-158`) · Agent-Work-Protocol · §A `capability_envelope` | "skills, subagents and MCP" [1:30] | AFFIRM (208/213/215) | partial (care-side `lib/ai`+`capabilities.ts`+rules exist; agent control-surface absent) | none | spine | watch |
| 7 | context offload as governed runtime primitive | evicting/summarizing older context is a *governed* act — dropped context can become lost intent / lost constraints; some context is unsafe to offload | §B `context_memory_budget`(204) · `state_externalized_context`(220) · Knowledge-Reservoirs · links `memory_contamination_state`(205) | "/offload to offload older messages and free context" [3:48] | PARTIAL (204/220) | absent | tension (free-context vs lost-constraints → other pole) | vocabulary | watch |
| 8 | MCP / tool management via explicit inspectable rails | tools must be enumerable, authorized, credential-scoped, environment-aware, and traced — never hidden prompt assumptions | Build-OS · §A `capability_envelope` · `tool_invocation_gateway`(211) · 213 context-delivery | "/MCP to manage our MCP servers" [3:54] | AFFIRM (211/213) | absent | none | vocabulary | watch |
| 9 | observability / tracing is first-class | every meaningful agent session preserves turn/tool/token/model/diff/test/outcome traces (LangSmith) — traceable at turns, tools, tokens, artifacts | Build-OS · Polaris/proof · `trace_lineage`(§11) · 215/216 | "first class tracing through LangSmith" [1:35]; "turn by turn breakdown" [4:59] | AFFIRM (201/215/216) | absent | tension (tracing ≠ correctness → other pole) | spine | watch |
| 10 | runtime economics (cost per accepted diff, not benchmark) | judge model-runtime by measured cost/latency/success per task, not benchmark score | operating-metrics/BIZOPS · `outcome_per_token_metric`(206) · §B | "a fraction of the cost of frontier models" [0:46] | AFFIRM (206 outcome-per-token) | absent | none | vocabulary | watch |

*Doctrine legend:* AFFIRM/PARTIAL/ABSENT vs thesis v3 §B AI-substrate + Build-OS(`REV-158`)/`REV-199` + contracts + post-v3 wave-3 registry. *Build legend:* grep of `app lib components scripts supabase middleware.ts` — model-registry / model-agnostic-harness / provider-routing / LangSmith-tracing / context-offload / tool-gateway / eval-harness = **absent**; v2/v3 care build present (`lib/ai` chart-review, `rules`, `clinical`, `intake`, `orders`, `messages`, `auth/capabilities.ts`) but unrelated to these AI-substrate primitives.

### B. Net-new primitives (dedup vs registry §2 + standard OMNI primitives — **all "dedup-pending, Opus-main verifies"**)

- `model_runtime_bundle` — the admissible unit = model + provider + agent-harness + tools + skills + context-policy + tracing + eval-results + runtime-budget + risk-tier — **EXISTS-AS: net-new NAME (enterprise-legible label) only; mechanism composes `model_admissibility_gate`(206) + `ai_model_registry` + `capability_envelope` + `enterprise_hill_climbing_machine`(201) + Knox's own `agent_runtime_profile`. Mint as the OBJECT that the admissibility gate admits — not a new mechanism (`GRD-026`/`GRD-035`).** *dedup-pending, Opus-main verifies.*
- `model_agnostic_agent_harness` — harness that swaps model/provider while preserving tools, skills, subagents, MCP, tracing, evals, context rules, permissions, rollback — **EXISTS-AS: net-new NAME; sharpens `virtual_model_endpoint`(206) (endpoint-level indirection → harness-level swap) + `agent_workbench`(201) + Build-OS harness. Knox explicitly ties it to prior `virtual_model_endpoint`.** *dedup-pending, Opus-main verifies.*
- `context_offload_policy` — governed rules for what leaves live context / where it goes (summary/file/memory) / what's citation-required / what can be rehydrated / **what is unsafe to offload** (constraints, consent) — **EXISTS-AS: net-new NAME (governance overlay); sharpens `context_memory_budget`(204) + `state_externalized_context`(220), and cross-links `memory_contamination_state`(205) [rehydrated context can be re-read as instruction]. Likely reconcile to a governance dimension of 204/220 rather than a standalone mechanism; safety-bearing (dropped constraint = silent scope loss).** *dedup-pending, Opus-main verifies.*
- `coding_agent_trace_profile` — standard coding-agent trace record: turns · model calls · tools · tokens · files read/written · diff · tests/verifiers · final accept/reject — **EXISTS-AS: already-exists-as `trace_lineage`(§11) + 215 `operational_trace_contract`/`agent_eval_bundle`; the coding-agent specialization of trace. NOT net-new — reconcile.** *dedup-pending, Opus-main verifies.*

*Net-new yield: 0 genuine net-new mechanism; ~2-3 net-new NAMES/labels (`model_runtime_bundle`, `model_agnostic_agent_harness`, possibly `context_offload_policy`). Consistent with a convergence source.*

### C. Reread flags
- If a dedicated **dcode / LangSmith deep-dive** source appears, reread for the actual *contents* of a "per-model optimization" / model profile (what fields dcode stores per model) → sharpens §B `ai_model_registry` attributes + cluster 5.
- Reread if a source details **model-agnostic harness swap mechanics** (how tools/skills/permissions survive a provider swap) → would upgrade `model_agnostic_agent_harness` from NAME toward mechanism.
- Reread if any source specifies **safe-vs-unsafe context offload rules** (which constraints must never be evicted) → would make `context_offload_policy` a genuine safety primitive rather than a 204/220 overlay.

### D. Hard read + strongest OMNI line
- **One-line hard read:** this is a vendor model-runtime-strategy demo, not a model source — the keeper is *bundle over model*, and it adds legibility, not new physics: everything here already lives in the wave's §B + Build-OS spine.
- **Strongest OMNI line:** *OMNI should evaluate model-runtime **bundles** by lane — swap models freely at the substrate, preserve the harness (tools/skills/MCP/tracing/evals/permissions/rollback), trace every step, meter cost/quality per accepted task, and admit a model into a lane only where evals prove it belongs; open-weight ≠ production-admissible, and model-pluggability lives at the substrate, never at care.*

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` (Opus-main folds this source's registry-fold packet UP — NOT edited by this pass) · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` (receipts only) · per-source deep-read: §3 Review 003 (this file) · impact: **§B AI-substrate runtime + model-registry/admissibility (MAJOR) · Build-OS(`REV-158`) + Agent-Work-Protocol (MAJOR — coding-agent-as-operating-environment, tracing) · operating-metrics/BIZOPS (medium — cost-per-accepted-diff, `outcome_per_token`) · Knowledge-Reservoirs + `context_memory_budget`(204) (medium — context offload) · §A `capability_envelope` / `tool_invocation_gateway`(211) (medium — MCP/tool rails) · Polaris/proof + `trace_lineage` (medium — LangSmith-style tracing)** · promotion: **watch** (convergence/vocabulary re-affirmer; 0 net-new mechanism, ~2-3 net-new NAMES; treat GLM 5.2 benchmark claims as vendor source-claims)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — Opus formal extraction pass: lifted operator metadata verbatim into §0/§0.1 (`identity_confidence: high_from_operator_metadata`); proposed slug `glm-5-2-dcode-model-agnostic-coding-agent` (file NOT renamed); wrote §3 Review 003 (10 concept clusters, ~2-3 net-new NAMES — all dedup-pending; grep-verified `build=absent` for model-registry/harness/tracing/offload/tool-gateway); filled §4 pointers; ticked §0.5; flipped status `raw_dropped`→`analyzed`. Registry/coverage/anchor NOT edited (Opus-main folds). Binds nothing (`GRD-036`/`GRD-044`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

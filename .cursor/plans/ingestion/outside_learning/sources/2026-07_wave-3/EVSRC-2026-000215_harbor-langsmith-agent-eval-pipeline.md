# EVSRC-2026-000215 — Building a Production Agent Eval Pipeline: Harbor + LangSmith + OpenAI SDK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000215_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000215`  ·  filename: `EVSRC-2026-000215_harbor-langsmith-agent-eval-pipeline.md` *(proposed slug; file not renamed this pass)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=Nw7teZn0MqU`  ·  source_title: `Building a Production Agent Eval Pipeline: Harbor + LangSmith + OpenAI SDK`
- channel_or_org: `LangChain`  ·  speaker: `Nick (Software Engineer, LangChain)`  ·  published_at: `Jul 6, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + chapters + pasted transcript`
- content_type: `production agent evaluation / Harbor / LangSmith / agent eval harness / sandboxing / tracing / observability / deterministic verification / datasets / isolated execution / OpenAI SDK`  ·  source_reliability_context: `practitioner / vendor — Official LangChain engineering walkthrough. High-value implementation reference for production agent evaluation architecture (Harbor eval harness + LangSmith observability + isolated micro-VM sandboxes for reproducible agent testing). Strong implementation reference, not abstract AI theory.`  ·  topic_tags_light: `[LangChain, LangSmith, Harbor, OpenAI_SDK, agent_evaluation, sandboxing, isolated_execution, deterministic_testing, evaluation_harness, datasets, experiment_tracking, observability, tracing, verifier_scripts, pytest, Docker, microVMs, reproducibility, parallel_execution, CI_CD_for_agents, reward_scoring, production_readiness, AI_Substrate, Build_OS]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Nick` · role_in_source: `presenter` (engineering walkthrough) · affiliation_at_publication: `LangChain` · speaker_type: `vendor / engineer` · authority_context: `Software Engineer at LangChain demonstrating LangChain's own Harbor + LangSmith agent-eval tooling — first-party practitioner reference; vendor-positioned (promotes LangSmith cloud sandbox + LangSmith observability).` · identity_confidence: `high_from_screenshot`
- publisher / channel: `LangChain`  ·  interviewer / moderator / host: `n/a (solo walkthrough)`
- event_context: `LangChain product/engineering explainer video — how to run agent evaluations on LangSmith with Harbor.`  ·  perspective / conflict notes: `Vendor demo — Harbor (open-source eval framework) + LangSmith (LangChain's paid observability/sandbox platform). Import the PATTERN (sandbox+trace+verifier+score), not the specific vendor tooling as mandatory doctrine (Knox reject-list; GRD-039 watch-not-worship).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(deferred — this pass writes §3/§4/§5 only; fold packet returned for registry update)* · [ ] update coverage matrix *(deferred — fold packet returned)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video


Chapters

Transcript
Search transcript
Search transcript
Chapter 1: Why agent evaluations need to change
0:00Hi everyone, I'm Nick and I'm a software engineer at LangChain. Today I want to show you how to run agent evaluations on LangSmith and with Harbor.
0:1010 secondsSo previously, if we had an LLM or an agent, evaluations used to be a little more simple. We could just look at the output string.
0:1919 secondsBut now with agents, we read files and execute scripts and manipulate the environment.
0:2626 secondsSo we need each agent run now to be in their own clean isolated environment.
Chapter 2: The three things every agent eval needs
0:3333 secondsAnd what we actually need for our new form of agent evaluation, agent evaluations in general are three things.
0:4141 secondsWe need sandboxing, so every run gets its own clean environment.
0:4646 secondsWe need to view traces, so we can see every tool call and decision an agent has made on a task.
0:5353 secondsAnd we also need observability to see for our evaluations whether or not we are heading in the right direction.
Chapter 3: Meet the demo agent: an OpenAI SDK data analyst
1:021 minute, 2 secondsNow, for an example, let's say that we've built an open AI SDK agent.
1:071 minute, 7 secondsIt can be any agent that LangSmith allows tracing on, but just for the simplicity of this example, we'll talk about this one.
1:171 minute, 17 secondsSo if we have this SDK or we have an agent that's role is to act as a data analyst, we
1:261 minute, 26 secondscan give it access to a sales.csv file that includes a product, unit sold, unit price, and revenue.
1:341 minute, 34 secondsAnd we can give the agent a simple task such as update the product, the unit sold or the unit price for one of these products.
1:451 minute, 45 secondsAnd it should go into this sales.csv file, update the unit sold let's say, and also update the revenue.
1:531 minute, 53 secondsAnd all of this will be done locally in our example.
Chapter 4: Running the agent locally and checking the results
1:591 minute, 59 secondsHere we have our own OpenAI SDK agent with its tools, file system access, and system prompt.
2:072 minutes, 7 secondsLet's run this agent with a simple task, update the revenue of product A to 50. When we run this, the agent executes these tasks.
2:172 minutes, 17 secondsAnd when it's done, we can check the output of both the agent as well as the sales.csv file to see the changes.
2:252 minutes, 25 secondsNow, as we can see, the sales.csv file updated correctly.
2:332 minutes, 33 secondsPreviously, it was 10, and we changed to 50. and the revenue also changed to 250.
Chapter 5: Two problems with testing purely locally
2:412 minutes, 41 secondsSo this works correctly, and we could just work locally and keep updating our harness until it produces what we want for all edge cases, but there are two issues.
2:512 minutes, 51 secondsAs our tasks scale, it will take far too long to ensure all the edge cases are met.
2:572 minutes, 57 secondsAnd secondly, we need to view the individual traces for each task to pinpoint what's going wrong. This is where Harbor comes into play.
Chapter 6: Introducing Harbor: bring your agent, sandbox, and dataset
3:073 minutes, 7 secondsSo Harbor is an open source evaluation framework where you bring three things. You bring your agent or your agent code rather.
3:163 minutes, 16 secondsYou bring your sandbox, so LangSmith's cloud sandbox, and you bring your dataset, which is essentially a folder of tasks.
3:253 minutes, 25 secondsAnd you run each task within its own clean environment.
3:303 minutes, 30 secondsHarbor orchestrates this entire process, and you're able to view these results within LangSmith's observability platform.
Chapter 7: Anatomy of a Harbor dataset
3:393 minutes, 39 secondsAs for what a dataset actually looks like, like I mentioned, it's just a folder of tasks, but one task is a folder itself
3:483 minutes, 48 secondsthat includes the instruction.md, which is the markdown for what the agent should actually do, such as setUnitSold for A250.
4:014 minutes, 1 secondIt includes this environment folder with an image of the starting point. So it could be a Docker image for that.
4:104 minutes, 10 secondsAnd it includes a test folder with a deterministic bash script of whether or not some specific criteria are met.
4:194 minutes, 19 secondsThat criteria can be specified with PyTest, for example.
4:234 minutes, 23 secondsAnd we also have a task.toml that includes the limits, such as CPU, memory, things along those lines.
Chapter 8: How sandbox isolation actually works
4:324 minutes, 32 secondsNow, how does the actual isolation process work for these sandboxes?
4:374 minutes, 37 secondsWith LangSmith's sandboxes, every single run gets its own micro-VM, or its own virtual machine.
4:464 minutes, 46 secondsAnd each virtual machine copies over the agent code.
4:504 minutes, 50 secondsIt copies over the specific task that it's given, such as updating unit A. And it runs each task in isolation.
4:594 minutes, 59 secondsSo sandbox A, B, C up to N, all run in parallel in isolation, essentially.
5:085 minutes, 8 secondsAnd they also have their verifier of whether or not that task actually passed that deterministic bash script that we talked about earlier.
5:175 minutes, 17 secondsAnd this is the process for how sandboxing works.
Chapter 9: Turning the demo into a real Harbor evaluation
5:235 minutes, 23 secondsNow, if we look at our previous Open AI SDK agent example, we can run our agent using Harbor. Let's take our original task of changing the units sold for product A.
5:335 minutes, 33 secondsWe want to be able to run this task in its own sandbox and verify if it generated the report correctly. So how do we actually do this?
5:405 minutes, 40 secondsWe need the tasks to not just include the instructions here, but also have a script which deterministically checks using pytest.
5:495 minutes, 49 secondsOne, whether or not the correct rows updated. Two, the unit sold value changed to 50 in this case.
5:575 minutes, 57 secondsAnd three, the revenue value changed to what it should be.
Chapter 10: Installing Harbor and setting up API keys
6:016 minutes, 1 secondEach task must also have an image that acts as the starting point for a task.
6:076 minutes, 7 secondsFor our data set, there are actually two tasks-- Update Product A and Update Product B. Each task has its own verification process.
6:176 minutes, 17 secondsIn order to run both of these tasks concurrently in their own environment, we use Harbor.
6:226 minutes, 22 secondsFirst, we need to run pip install harbor with LangSmith to install both harbor as well as LangSmith.
6:286 minutes, 28 secondsWe also need to have our model API key for our agent, as well as the LangSmith API key exported to our shell.
Chapter 11: Running harbor run against two tasks
6:406 minutes, 40 secondsNow we can do harbor run. So we specify this -p dataset to include the path to where our dataset actually lives with this update product.
6:516 minutes, 51 secondsUpdate Product B, we specify where the agent lives with this
6:586 minutes, 58 secondsHarbor Agent OpenAI SDK to include the path for that agent.
7:067 minutes, 6 secondsAnd we're running each environment in the LangSmith Sandbox environment, which we specify with -e langsmith.
7:147 minutes, 14 secondsAnd for the observability aspect, where we're going to be able to view the results, we need to specify the --plugin
7:237 minutes, 23 secondslangsmith flag, as well as specify the data set name for when we view it later. So now I can run this and wait for the results.
Chapter 12: Viewing results in LangSmith datasets and experiments
7:357 minutes, 35 secondsNow that both tasks have run, we can head over to LangSmith.
7:397 minutes, 39 secondsWe can go under data sets and experiments and we can find the data set name that we chose, which was sales CSV demo.
7:497 minutes, 49 secondsNow under this data set, we can view all of our previous Harbor runs. The last one I ran was here.
7:577 minutes, 57 secondsWe could see that we had two tasks.
7:597 minutes, 59 secondsWe could see that it had a reward score of one, meaning everything was successful. You can also view things like the output tokens and more.
Chapter 13: Drilling into a single experiment and its trace
8:098 minutes, 9 secondsSo now if I click into a specific experiment,
8:148 minutes, 14 secondsI can view the two tasks chosen here, as well as some other information about the reward score, whether on the pass, the tokens, the cost, etc.
8:258 minutes, 25 secondsAnd if I want to view the tracing for one, say one of these tasks failed and I wanted
8:318 minutes, 31 secondsto investigate why, I can dive into it by clicking into the task itself and view the
8:398 minutes, 39 secondsthe trace, seeing how the agent reasoned, seeing that it read the file, seeing that
8:458 minutes, 45 secondsit wrote an output, and sort of going through the agent thought process and trace through this.
Chapter 14: Wrap-up: bring your own agent and try it
8:548 minutes, 54 secondsSo that's the entire workflow. You have an isolated sandbox or isolated sandboxes for every run.
9:019 minutes, 1 secondYou have the full trace of what's going on underneath the hood, and you have scores that that you can use to compare.
9:109 minutes, 10 secondsSo yeah, bring your own agent and try this yourself. I've linked some of the harbor docs and LangSmith docs below.

Sync to video time

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
source_url: https://www.youtube.com/watch?v=Nw7teZn0MqU
source_title: Building a Production Agent Eval Pipeline: Harbor + LangSmith + OpenAI SDK
channel_or_org: LangChain
speaker: Nick (Software Engineer, LangChain)
published_at: Jul 6, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + chapters + pasted transcript
content_type: production agent evaluation / Harbor / LangSmith / agent eval harness / sandboxing / tracing / observability / deterministic verification / datasets / isolated execution / OpenAI SDK
source_reliability_context: Official LangChain engineering walkthrough. High-value implementation reference for production agent evaluation architecture. Focuses on Harbor as an evaluation harness, LangSmith as observability and experiment platform, and isolated sandboxes for reproducible agent testing. Strong implementation reference rather than abstract AI theory.

priority: 4.5/5
depth: implementation_reference
recommended_status: route to AI Substrate, Evaluation Framework, Build-OS, Agent Runtime, CI/CD, Observability, Testing Doctrine, Runtime Verification, and Production Readiness documentation.

Topic tags:
[LangChain, LangSmith, Harbor, OpenAI_SDK, agent_evaluation, production_agents, sandboxing, isolated_execution, deterministic_testing, evaluation_harness, datasets, experiment_tracking, observability, tracing, runtime_tracing, verifier_scripts, pytest, Docker_environments, microVMs, reproducibility, parallel_execution, CI_CD_for_agents, regression_testing, reward_scoring, evaluation_pipeline, production_readiness, AI_Substrate, Build_OS]



Priority: 4.5/5
Depth: full semantic for Build-OS / agent eval substrate
Recommended status: route to Build-OS / Agent Work Protocol / AI evals / sandbox runtime / observability / operating_metrics / Polaris proof layer. This is not broad OMNI thesis, but it is very important for making agent work real.

Core takeaway

This source says agent evaluation has changed.

Old LLM evals could often judge the final output string.

Agent evals are different because agents:

read files
execute scripts
call tools
mutate environments
use external state
run multi-step tasks

So each eval run needs:

clean sandbox + full trace + deterministic verification + score/cost observability.

OMNI translation:

Build-OS agents cannot be trusted because they sound right. They need isolated runs, reproducible task environments, deterministic pass/fail tests, traces, and cost/latency/token telemetry.

This is one of the clearest practical eval-pipeline sources so far.

Key concepts to preserve
1. Agent evals are not output-string evals

The important shift:

Once agents can manipulate environments, the final answer is no longer enough.

For OMNI, this applies to:

code agents
D7 extraction agents
schema migration agents
contract-editing agents
data-reconciliation agents
billing agents
task-routing agents
clinical-evidence agents
future care-workflow agents

The question is not only “did the response look good?”

It is:

What did the agent read, change, call, write, skip, break, or prove?

2. Three things every agent eval needs

The source gives a clean triad:

Sandboxing
Each run gets its own clean isolated environment.

Tracing
You can see each tool call, file operation, and step the agent took.

Observability
You can compare runs, scores, tokens, costs, pass/fail, and whether the system is improving.

OMNI keeper:

Agent eval = sandbox + trace + score.

That should be imported almost directly.

3. Bring your agent, sandbox, and dataset

The Harbor pattern is useful:

bring agent code
bring sandbox/runtime
bring dataset
run each task in isolation
inspect results in observability platform

OMNI translation:

Build-OS should treat evals as a structured pipeline, not ad hoc manual testing.

Possible OMNI shape:

agent_spec + task_dataset + sandbox_image + deterministic_verifier + resource_limits + trace_sink + scorecard

4. Eval dataset as task folders

The dataset structure is a gem:

Each task includes:

instruction.md
starting environment/image
deterministic test script
task limits such as CPU/memory

OMNI keeper:

Agent eval tasks should be packaged as reproducible work units.

This maps well to OMNI’s Evidence Plane style.

Potential Build-OS artifact:

agent_eval_task

Fields:

instruction
starting state
allowed tools
resource limits
verifier
expected outcome
risk tier
trace requirements
pass/fail score
cost budget
5. Deterministic verifier

The source uses bash/PyTest to verify whether the task succeeded.

This is the most important safety point.

For agent work, human review is not enough at scale. You need deterministic tests wherever possible.

OMNI examples:

did schema migration create expected columns?
did D7 extraction preserve exact values?
did a code agent update all references?
did a pricing rule produce correct D6 totals?
did a context packet include required lineage?
did a contract edit preserve required sections?
did a billing reconciliation match source rows?
did a note-generation agent preserve problem order?

Doctrine candidate:

Agent outputs need verifiers, not vibes.

6. Micro-VM / clean environment per run

The source emphasizes one clean micro-VM per run, run in parallel.

OMNI keeper:

Agent work should be isolated, reproducible, and disposable.

This matters for:

security
eval validity
parallel scaling
no contaminated state
no hidden local dependency
no agent side effects leaking across tasks

For Build-OS, this becomes a major runtime law.

7. Parallel evals

Local testing breaks down as tasks and edge cases scale. Sandboxed parallel evaluation lets many tasks run at once.

OMNI keeper:

The eval corpus should scale faster than manual confidence.

This fits your EVRUN process: once doctrine/contracts become executable enough, agents should be tested against many small scenario packets.

8. Trace inspection

When a task fails, you need to inspect the run.

Important distinction for OMNI:

Trace should include:

tools called
files read/written
inputs/outputs
policy checks
verifier result
model/version
cost/tokens
timing
environment ID

Avoid relying on private model chain-of-thought. OMNI needs operational trace, not hidden reasoning disclosure.

Doctrine candidate:

Trace the agent’s observable work, not merely its final answer.

9. Scores, tokens, cost

The source shows reward score, pass/fail, tokens, and cost per experiment.

OMNI keeper:

This is the practical basis for agent operating metrics:

pass rate
cost per passed task
tokens per accepted output
failure class
retry rate
time per task
sandbox resource usage
regression over model versions
cost by workflow lane

This ties directly to operating_metrics.

OMNI landing zones

Build-OS

sandboxed agent runs
task datasets
deterministic verifiers
parallel evals
traceable work units
code/doc/schema/domain-contract agent testing

Agent Work Protocol

no unverified agent changes
every bounded task has expected outcome
every agent action leaves trace
verifier before adoption
resource limits per task

Polaris / proof layer

proof bundle for agent outputs
trace + verifier + source state + model lineage
pass/fail score as evidence, not truth by itself

operating_metrics

cost per successful task
tokens per passed run
pass rate by model/agent/version
regression rate
latency per eval
failure taxonomy

Security

isolated environments
no persistent state leakage
no production secrets in eval sandboxes
least-privilege tool access
Doctrine candidates
Agent evals require sandbox, trace, and deterministic verification.
Final output is insufficient when agents can mutate state.
Agent eval tasks should be reproducible work units.
Agent outputs need verifiers, not vibes.
Each agent run should be isolated, disposable, and resource-bounded.
Trace the agent’s observable work, not merely its final answer.
Cost per successful task is the agent metric that matters.
No agent-generated change should be promoted without a proof bundle appropriate to its risk.
Net-new / sharpen / affirm
Net-new candidates

agent_eval_bundle
A reproducible evaluation package containing instruction, starting environment, allowed tools, deterministic verifier, limits, expected result, trace, score, and cost.

isolated_agent_run
A sandboxed, disposable execution environment for one agent task, preventing state contamination and enabling parallel evals.

deterministic_task_verifier
A script/test/check that determines whether the agent actually achieved the required state change.

cost_per_successful_task
Agent operating metric tying model/runtime spend to verified task completion.

Sharpen existing

Build-OS
This makes Build-OS measurable. Agents become testable workers, not magic collaborators.

Agent Work Protocol
Adds formal eval/run structure.

operating_metrics
Adds agent eval metrics and cost-per-pass.

Polaris
Proof bundle should include trace + verifier + model/runtime lineage.

runtime economics
Cost must be measured against verified success, not raw token use.

Affirm
agent work must be isolated
traces are mandatory
local/manual testing does not scale
deterministic verifiers are the strongest eval form
task datasets are reusable assets
observability is part of production agent infrastructure
Reject / do not over-import
Do not make Harbor or LangSmith mandatory doctrine.
Do not assume every agent task has a perfect deterministic verifier.
Do not treat reward score alone as authority.
Do not use hidden model reasoning as the audit artifact.
Do not run evals with production PHI/secrets unless explicitly governed.
Do not let sandbox success bypass human/domain approval for high-risk work.
Hard read

This is a Build-OS eval spine source.

It gives the missing practical substrate for agent trust:

An agent is not production-ready because it completed one demo. It is production-ready only when it can run many reproducible tasks in isolated environments, leave full observable traces, pass deterministic verifiers, and show stable cost/latency/quality metrics over time.

Shortest OMNI version:

Build-OS needs agent eval bundles: task instructions, clean sandbox, deterministic verifier, trace, score, resource limits, and cost. That is how OMNI turns agent work from impressive demos into governed production capability.

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

**Reviewer:** Opus (agent) · **at:** 2026-07-07 · **layer:** `analysis_nonbinding` · binds nothing (`GRD-036`/`GRD-044`). Formalizes Review 001 (Knox); verifies/sharpens, does not re-derive.

### Headline verdict
**This is the Build-OS AGENT-EVAL SPINE source** — the missing operational substrate that turns "agents propose, domains commit" from a slogan into a *testable* discipline. It says: once an agent can read files, run scripts, call tools, and mutate state, **the final output string is no longer a valid unit of evaluation** — you must evaluate *what the agent read/changed/called/wrote/skipped/broke/proved*. The keeper triad is dead simple and near-directly importable: **agent eval = sandbox + trace + deterministic verifier + score/cost observability**, packaged as reproducible **task folders** (`instruction.md` + starting-env image + deterministic test + resource limits), each run in **its own disposable micro-VM in parallel**. Every concept AFFIRMs existing OMNI doctrine (Build-OS `REV-158`, Agent Work Protocol, Polaris proof layer, candidate≠commit, operating-metrics) and every one is **build=absent** — the discipline is doctrine but uncoded, matching the wave-3 dominant pattern (`doctrine=AFFIRM/PARTIAL · build=absent`). Net-new yield is modest (2 genuine primitives; the rest are re-mints/specializations of wave-3-minted concepts). It is a **strict operational sibling of 202** (governed refactor loop → CI verification), **208** (agentic SDLC → spec-as-contract), **210** (coordination layers), **206** (outcome-per-token), **201** (harness/evals-as-assets), and inherits **205's** isolation posture. Tier: **full_semantic (Build-OS eval substrate; spine-adjacent).** Vendor caveat: import the PATTERN, not Harbor/LangSmith as mandatory tooling (`GRD-039`).

### A. Concept clusters
| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [ts]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Agent evals ≠ output-string evals (state-mutation-aware eval) | When an agent mutates state, judging the final answer is insufficient — evaluate what it read/changed/called/wrote/skipped/broke/proved | Build-OS · Agent-Work-Protocol · §B eval · Polaris proof | *"now with agents, we read files and execute scripts and manipulate the environment"* [0:19] | AFFIRM | absent | none | spine | promote(watch) |
| 2 | Eval triad: sandbox + trace + observability | The three irreducible needs of any agent eval — clean isolated env, full tool/decision trace, comparable score/cost telemetry | Build-OS · Agent-Work-Protocol · §B · operating-metrics · §C | *"we need sandboxing… view traces… observability"* [0:41-0:53] | AFFIRM | absent | none | spine | promote(watch) |
| 3 | Bring agent + sandbox + dataset (eval as structured pipeline) | Evals are a governed pipeline (agent_spec + task_dataset + sandbox_image + verifier + limits + trace_sink + scorecard), not ad-hoc manual testing | Build-OS · Agent-Work-Protocol · CNS | *"you bring your agent… your sandbox… your dataset"* [3:07-3:25] | AFFIRM | absent | none | spine | promote(watch) |
| 4 | Eval dataset as reproducible task folders | Each task = folder: `instruction.md` + starting-env image (Docker) + deterministic test script + `task.toml` limits (CPU/mem) — reproducible work units | Build-OS · Agent-Work-Protocol · Evidence-Plane style · §C | *"instruction.md… environment folder… test folder… task.toml"* [3:48-4:23] | AFFIRM | absent | none | spine | promote(watch) |
| 5 | Deterministic verifier ("verifiers, not vibes") | A bash/PyTest check that determines whether the required state change actually occurred; human review doesn't scale — deterministic tests wherever possible | Build-OS · Agent-Work-Protocol · Polaris · domain-contracts(D6/D7/migration) | *"deterministic bash script of whether… criteria are met"* [4:10-4:19] | PARTIAL | partial | tension (T5b: unverifiable clinical outputs) | spine | promote(watch) |
| 6 | Micro-VM per run: isolated · disposable · parallel | Each agent run gets its own micro-VM; runs A…N in parallel isolation; no contaminated state, no side-effect leakage, no hidden local dependency | Build-OS · §C Security · Agent-Work-Protocol | *"every single run gets its own micro-VM… run in parallel"* [4:37-4:59] | AFFIRM | absent | none | spine | promote(watch) |
| 7 | Parallel eval corpus scales faster than manual confidence | Local/manual testing breaks down as edge cases scale; sandboxed parallel eval lets many scenario packets run at once (fits EVRUN process) | Build-OS · Agent-Work-Protocol · this EVRUN method | *"as our tasks scale, it will take far too long"* [2:51] | AFFIRM | absent | none | vocab | promote(watch) |
| 8 | Operational trace, not hidden reasoning | Trace the agent's observable work — tools called, files r/w, I/O, policy checks, verifier result, model/version, cost/tokens, timing, env-ID — NOT private chain-of-thought | CNS §11 trace_lineage · Build-OS · Polaris · §C | *"seeing that it read the file… wrote an output… trace through this"* [8:39-8:45] | AFFIRM | absent | none | spine | promote(watch) |
| 9 | Scores/tokens/cost = agent operating metrics | Reward score, pass/fail, tokens, cost per experiment → the practical basis for agent operating metrics (cost-per-successful-task, pass-rate-by-version, regression, failure taxonomy) | operating-metrics/BIZOPS · Build-OS · §B | *"reward score of one… view output tokens… cost, etc."* [7:59-8:14] | AFFIRM | absent | none | spine | promote(watch) |
| 10 | Proof bundle: pass/fail is evidence, not authority | Agent output ships with proof bundle (trace + verifier + source-state + model/runtime lineage); sandbox/reward pass is EVIDENCE, never commit authority — candidate≠commit | Polaris/proof-layer · Agent-Work-Protocol · CNS(candidate→commit) · §C | *"scores that you can use to compare"* [9:01] + Knox "not truth by itself" | AFFIRM | absent | tension (T5a: green-eval≠ship) | spine | promote(watch) |

### B. Net-new primitives
Dedup vs existing OMNI (000001 §2A) + wave-3-minted (CNS/candidate≠commit, workflow_lane, capability_envelope, delegated_authority_envelope, non_human_actor, ai_model_registry, trace_lineage, context_packet, autonomy_level, source_authority, consent-specificity, projection≠truth, per-event-ownership, prefix_cache_boundary, crypto_agility_policy, CBOM, security_migration_lifecycle, promptware_kill_chain, content_authority_class, infected_memory_risk, ai_gateway, outcome_per_token_metric, spec_as_agent_contract, data_resilience_policy, drift_monitoring_policy, delegation_chain_authorization, context_token_nonpropagation, workload_identity_for_agents, tool_gateway_policy_enforcement). **All EXISTS-AS verdicts dedup-pending until folded into the EVRUN registry.**

- `agent_eval_bundle` — a reproducible evaluation package = {instruction · starting-env image · allowed tools · deterministic verifier · resource limits · expected outcome · risk tier · trace requirements · pass/fail score · cost budget} — **EXISTS-AS: net-new (genuine).** Distinct from 208 `spec_as_agent_contract` (that's the *task spec*; this is the *executable eval package + its verdict apparatus*). Composes `context_packet` + Polaris proof-bundle. Build-OS mint candidate. *dedup-pending.*
- `deterministic_task_verifier` — a script/test that deterministically decides whether the agent achieved the required state change ("verifiers, not vibes") — **EXISTS-AS: net-new (genuine); sharpens 202 `ci_verification_gate` + Build-OS proof obligations.** The verifier as a first-class attachable artifact on a task, risk-tiered (deterministic where possible; HITL where not). *dedup-pending.*
- `isolated_agent_run` — a sandboxed, disposable micro-VM for ONE agent task; isolation + parallelism + zero state-carryover — **EXISTS-AS: already-exists-as (composition) 205 `assume_breach_agent_posture`/`agent_as_hostile_runtime` + generic sandbox; net-new NAME as the *eval-runtime* isolation unit.** Reconcile as the eval-time instance of the 205 security posture. *dedup-pending.*
- `cost_per_successful_task` — agent operating metric tying model/runtime spend to *verified* task completion (not raw tokens) — **EXISTS-AS: already-exists-as 206 `outcome_per_token_metric` (specialization).** Sharpens it to per-VERIFIED-task granularity + a family (pass-rate-by-version, regression-rate, failure-taxonomy, latency-per-eval). Do NOT re-mint; fold as a metric of the 206 primitive. *dedup-pending.*
- `agent_eval_task` (task folder) — the atomic unit inside a dataset — **EXISTS-AS: subsume into `agent_eval_bundle`** (the folder IS the bundle-at-rest); not a separate primitive. *dedup-pending.*
- `operational_trace_contract` (observable-work-not-CoT) — trace schema of observable agent work, explicitly excluding hidden model reasoning — **EXISTS-AS: already-exists-as `trace_lineage` (CNS §11) + 205 "world may be read, does not instruct"; net-new NAME only** (sharpens trace_lineage with the observable-vs-hidden distinction). *dedup-pending.*
- `parallel_eval_corpus` — the scaling property (eval corpus grows faster than manual confidence) — **EXISTS-AS: process property, NOT a mechanism; no-op mint.** Route as Build-OS/EVRUN method note.
- proof bundle for agent outputs — **EXISTS-AS: already OMNI Polaris proof layer; not net-new.**

**Net-new tally for 215: 2 genuine** (`agent_eval_bundle`, `deterministic_task_verifier`) + ~4 re-mints/specializations (all dedup-pending).

### C. Reread flags
- **RF-1 — verifier-coverage gap for clinical/judgment outputs.** Knox's own reject-list flags "do not assume every agent task has a perfect deterministic verifier." OMNI's highest-risk agents (note-generation, clinical-evidence, care-workflow) often have NO deterministic verifier → needs an explicit **risk-tiered verification ladder** (deterministic verifier → property/invariant check → structured HITL → dual-control). Reread when authoring Build-OS eval doctrine.
- **RF-2 — eval sandbox data governance.** "Do not run evals with production PHI/secrets unless explicitly governed." This composes 205 (isolation/assume-breach) + 204 `prefix_cache_boundary` (no cross-tenant reuse) + consent-specificity. Reread with §C when the eval harness touches real data classes.
- **RF-3 — reward-score-as-authority anti-pattern.** "Do not treat reward score alone as authority" / "sandbox success must not bypass human/domain approval for high-risk work." Directly reinforces candidate≠commit; reread with CNS commit-path + C3.7 firewall.
- **RF-4 — vendor lock caveat.** Harbor + LangSmith are the demo vehicle; the DOCTRINE is sandbox+trace+verifier+score. Reread to ensure Build-OS doctrine stays tool-agnostic (`GRD-039`).

### D. One-line hard read + strongest OMNI line
- **One-line hard read:** An agent is not production-ready because it completed one demo — it is production-ready only when it runs many reproducible tasks in isolated disposable environments, leaves a full observable trace, passes deterministic (risk-tiered) verifiers, and shows stable cost/latency/quality over time.
- **Strongest OMNI line:** *"Agent eval = sandbox + trace + deterministic verifier + score."* — this is how OMNI turns agent work from impressive demos into **governed production capability**: every Build-OS agent action ships as an `agent_eval_bundle` whose pass is Polaris *evidence*, never commit *authority* (AI proposes; domains + humans commit).

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Build-OS (MAJOR — agent-eval spine: harness/task-datasets/deterministic-verifiers/parallel-isolated-runs) · Agent-Work-Protocol (MAJOR — verifier-before-adoption, trace-per-action, resource limits per task, no unverified change) · Polaris/proof-layer (MAJOR — proof bundle = trace+verifier+source-state+model/runtime lineage; pass=evidence not authority) · operating-metrics/BIZOPS (medium — cost-per-successful-task, pass-rate-by-version, regression, failure taxonomy; specializes 206 outcome-per-token) · §C Security (medium — isolated/disposable sandboxes, no PHI/secrets in eval, least-privilege tool access) · §B AI-substrate (medium — model/version lineage in trace, eval-vocab) · CNS (minor — eval routing + candidate≠commit reinforcement) · domain-contracts (minor — verifier examples: D6 totals, D7 lineage, migration columns)` · promotion: `watch` (proposes only; `GRD-036` promotion-gated — route Build-OS eval discipline to C5/Build-OS at gate)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — Opus formal extraction pass (EVRUN-2026-000003): lifted §0/§0.1 metadata verbatim from Review 001 block (LangChain · Nick · Harbor+LangSmith agent-eval pipeline · YouTube `Nw7teZn0MqU` · pub Jul 6 2026); proposed slug `harbor-langsmith-agent-eval-pipeline` (file NOT renamed); wrote §3 Review 003 (headline verdict + 10 concept clusters + net-new primitives [2 genuine: `agent_eval_bundle`, `deterministic_task_verifier`; ~4 re-mints dedup-pending] + 4 reread flags + hard read); filled §4 pointers; ticked §0.5; flipped status → `analyzed`. Registry/coverage/anchor NOT edited (fold packet returned to parent). Binds nothing (`GRD-036`/`GRD-044`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

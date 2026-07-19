# EVSRC-2026-000277 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-5 source (`EVSRC-2026-000277_ibm-5-ai-myths-apparent-intelligence-not-assurance.md`); analyzed 2026-07-15 (`EVRUN-2026-000006`). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000277`  ·  filename: `EVSRC-2026-000277_ibm-5-ai-myths-apparent-intelligence-not-assurance.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=OWPRU_Pc4Ng`  ·  source_title: `5 AI Myths & The Truth Behind Them: ML, Context, Agents & More`  ·  slug: `ibm-5-ai-myths-apparent-intelligence-not-assurance`
- channel_or_org: `IBM Technology`  ·  speaker: `Martin Keen (IBM Master Inventor)`  ·  published_at: `2026-07-14`
- captured_at: `2026-07-15`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `technical explainer (AI-capability limits / reasoning + context / agent reliability / inference economics)`  ·  source_reliability_context: `senior practitioner / vendor educator (IBM) — useful synthesis of current AI-system limitations; quantitative claims are secondary summaries, not primary evidence`  ·  topic_tags_light: `[sycophancy, hallucination, tool_use, refusal_calibration, reasoning_trace, chain_of_thought_faithfulness, inference_compute, reasoning_budget, context_window, multi_source_synthesis, agentic_loop, compounding_error, verifier_model, human_in_the_loop, bounded_autonomy]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Martin Keen` · role_in_source: `primary presenter / technical educator` · affiliation_at_publication: `IBM (Master Inventor)` · speaker_type: `senior practitioner / enterprise-technology educator` · authority_context: `useful for translating misunderstood AI concepts into system-design language (challenge≠verification; tool-use+refusal reduce fabrication; visible reasoning ≠ faithful internal computation; inference is a growing cost; large context ≠ reliable database; per-step accuracy ≠ trajectory reliability). LIMITS: concise IBM explainer, not a primary survey; numeric claims (hallucination %, context perf, inference-share, token multipliers) = source claims until traced; the 0.95^n compounding math assumes independent similar step failures; verifiers/humans not automatically reliable/independent; describes CURRENT frontier behavior — encode measured capability profiles, don't hard-code today's limits as eternal doctrine (GRD-039).` · identity_confidence: `high`
- publisher / channel: `IBM Technology (YouTube)`  ·  interviewer / moderator / host: `n/a (solo explainer)`
- event_context: `IBM explainer debunking 5 AI myths (reasoning, context, agents, inference).`  ·  perspective / conflict notes: `vendor educator; the five myths cohere into one pattern (mistaking a visible model behavior for a stronger system property) directly relevant to OMNI's v4 preflight. Take metrics as directional (GRD-039).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat (metadata in Knox read) · [x] **Knox strategic read → §3 Review 001** · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename (renamed to firm slug) · [x] §0 metadata · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [~] update EVRUN concept registry (cross-source — folded at wave synthesis) · [x] update coverage matrix · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript

Search transcript
Search transcript
0:00Boy, do I have some AI myths for you. So you're chatting with an AI and it gives you an answer, but you're not totally convinced the response is right.
0:1010 secondsSo you say back at it, are you sure?
0:1414 secondsNow, my question to you, dear viewer is, does asking, are sure, get the model to actually recheck its work and give a more accurate answer?
0:2424 secondsWell, there's a myth that it does, but it's quite possible it has the opposite effect.
0:2929 secondsSo the chatbot may read are you sure as a signal of doubt and it will change its position to match that.
0:3838 secondsIt doesn't matter if the original answer was right, and sorry Messi but that England win was indeed the greatest World Cup win
0:4747 secondsof all time but but instead the model is just inferring you want a different answer.
0:5454 secondsBless its sycophantic artificial heart.
0:5757 secondsNow that's one of the many myths about AI that pushing back against a chatbot will give a more accurate response and that myth is not even in my top five.
1:071 minute, 7 secondsSo what is? Well here are five myths about AI and the truth behind them.
1:131 minute, 13 secondsSo I present to you myth number one, AI models hallucinate frequently. Hallucinations being where a model confidently returns a response that's actually incorrect.
1:241 minute, 24 secondsNow, am I really going to tell you that AI hallucinations are a myth?
1:291 minute, 29 secondsNo, no, I am not but but hear me out today's Frontier models are also not the alternative facts generating machines of old.
1:401 minute, 40 secondsNow a few things have changed that have reduced hallucinations. Models now incorporate something called tool use and that helps a lot.
1:501 minute, 50 secondsThat means pulling answers from web search or database lookups instead of generating stuff from memory.
1:571 minute, 57 secondsThere is also refusal calibration training, which is just kind of a fancy way of saying that the AI has learned to say, I can't verify this, instead of making something up.
2:102 minutes, 10 secondsAnd reasoning models have brought along extended thinking, where the model gets time to really check its own work before it comes up with an answer.
2:212 minutes, 21 secondsAnd look, just try to get one of the best frontier models today to hallucinate a fact on a topic you know well.
2:272 minutes, 27 secondsIt's often not as easy as you might think because of these safeguards.
2:332 minutes, 33 secondsI mean, when I asked a Frontier chatbot why volume five of the art of computer programming was published in 2019, which was a trick question because there is no volume five.
2:462 minutes, 46 secondsWell, the chatbot used tool use to run a web search and it was totally on to me. It figured out that volume five had not yet been published.
2:542 minutes, 54 secondsAnd when I asked for something deliberately obscure, which was papers describing RAG using COBOL modernization that were published in 2023,
3:063 minutes, 6 secondswhich is not many, it flat out told me that this was an extremely narrow intersection of tech.
3:133 minutes, 13 secondsAnd to quote the chatbot verbatim, it said back to me, if I just search and report back, I could end up citing papers that don't actually exist.
3:223 minutes, 22 secondsThat is refusal calibration at work.
3:253 minutes, 25 secondsSo while hallucinations are not solved with tool use and reasoning turned on they are greatly reduced compared to older models.
3:353 minutes, 35 secondsThe biggest frontier models today they hallucinate something like three percent of the time,
3:423 minutes, 42 secondswhich is not nothing but I think it's also not really accurate to say that AI models hallucinate frequently.
3:513 minutes, 51 secondsRight, let's get into myth two, which is you can watch AI think.
3:563 minutes, 56 secondsNow, chain of thought is the visible step-by-step reasoning that thinking models generate when they work through a problem.
4:034 minutes, 3 secondsAnd what you get from that is something called a reasoning trace that you as the user can actually follow.
4:144 minutes, 14 secondsYou can see it in any chatbot by expanding the thinking or the reasoning section of the chat.
4:214 minutes, 21 secondsNow, when our reasoning model generates a visible trace, it's producing tokens of text that we can see, and they kind of look like step-by-step reasoning.
4:334 minutes, 33 secondsBut does that trace reflect what the model is actually doing internally? Well, it turns out it doesn't.
4:404 minutes, 40 secondsNow the term for this, for measuring what's going on here, is called faithfulness.
4:474 minutes, 47 secondsSo we can measure faithfulness, which is the degree to which this verbalized reasoning trace causally corresponds to the model's actual computation in reaching its answer.
5:005 minutesAnd these reasoning traces are not entirely faithful.
5:055 minutes, 5 secondsSo what's going on here actually in real time is the model is working through its model weights to come up with an answer.
5:155 minutes, 15 secondsAnd what the model is reporting on in the reasoning trace here is not necessarily highly correlated to what's actually going on in the weights.
5:265 minutes, 26 secondsSo inside the model, a vast network of weights and attention patterns is doing the real work and the reasoning trace is not necessarily a one-to-one relationship to that.
5:365 minutes, 36 secondsNow, researchers have a name for what's going on here. It's called post hoc rationalization.
5:435 minutes, 43 secondsThe trace is reasoning towards whatever answer the model's internal computation is already favoring.
5:495 minutes, 49 secondsSo, it is not entirely fair to say you can watch AI think. What you can watch is the model's narration of thinking.
5:595 minutes, 59 secondsAll right, on to myth number three. Training is where the AI compute goes.
6:046 minutes, 4 secondsNow, we've all heard how data centers are springing up everywhere with massive demands for power and for water.
6:116 minutes, 11 secondsSo, what is all of this data center compute actually being used for.
6:196 minutes, 19 secondsWell, there are two phases when running AI. There's the phase where we have to train the models. So that's the training phase.
6:276 minutes, 27 secondsThis is where the model gets built. So billions of parameters get tuned across huge data sets, taking weeks of GPU time.
6:356 minutes, 35 secondsAnd then there is also inference. And this is where we actually run the models, this is by somebody's using the model.
6:436 minutes, 43 secondsThe GPU runs the weights forward to produce an answer. Now back in...
6:496 minutes, 49 seconds2023 the headlines were about GPT-4 costing 100 million dollars to train which
6:576 minutes, 57 secondsis a lot but that's actually dwarfed by today's models and it can seem like training is indeed the expensive part.
7:057 minutes, 5 secondsOnce it's trained running inference is a good deal cheaper.
7:107 minutes, 10 secondsWell that used to roughly be true but Inference costs as a share of total AI compute are rising.
7:187 minutes, 18 secondsSo let me kind of sketch this out. So if we start at 2023 then it was about one third of all AI compute was spent on inference.
7:327 minutes, 32 secondsThen if we move forward to 2025 it was about half and half between these guys.
7:407 minutes, 40 secondsAnd then by the end of this year, by the analysts are projecting that inference compute will be about two-thirds of all AI compute costs.
7:537 minutes, 53 secondsSo why is that?
7:567 minutes, 56 secondsWell one reason is those reasoning models we talked about in myth 2 generating these trait these chain of thought traces,
8:038 minutes, 3 secondsall of those reasoning traces that it needs to go through and those things can actually generate a lot more tokens something like between 10 to 100
8:138 minutes, 13 secondstimes more tokens per query than non reasoning models and that's especially true in agentic harnesses.
8:218 minutes, 21 secondsSo that's where AI compute is mostly getting spent now, much more on the inference side. All right, myth number four.
8:298 minutes, 29 secondsLarge context windows let you offload data. I'll explain what I'm talking about here. So we've got here a context window.
8:388 minutes, 38 secondsThis is how much text a model can take in.
8:428 minutes, 42 secondsAt once before it generates a response, and a few years ago a context window like this was maybe like a few thousand tokens,
8:508 minutes, 50 secondstoday most frontier models support at least one million tokens.
8:568 minutes, 56 secondsThat means we can share much more stuff with the model when prompting it.
9:019 minutes, 1 secondNow the temptation is to treat this context window a bit like a database,
9:079 minutes, 7 secondswhich is to say we're just going to like dump an entire codebase into here,
9:149 minutes, 14 secondsmaybe we'll send in a bunch of pdf documents and then the model can just query against whatever it needs in the context window. Right?
9:249 minutes, 24 secondsWell, partly. The standard test for long context is called needle in a haystack.
9:329 minutes, 32 secondsSo the idea here is that you hide a specific fact somewhere in the context window, and then you ask the model to find it.
9:439 minutes, 43 secondsNow on a single needle test at 1 million tokens, frontier models today are at or near pretty much perfect.
9:509 minutes, 50 secondsThey almost always find the needle. So far, so database-like.
9:559 minutes, 55 secondsBut real world long context work rarely means finding one fact or one needle.
10:0310 minutes, 3 secondsIt's usually joining together information across multiple parts of the context window.
10:1110 minutes, 11 secondsAnd if we take a look at multi needle benchmarks, things like MRCR,
10:1910 minutes, 19 secondsperformance can drop 30 to 60 points between 200,000 and one million tokens.
10:2810 minutes, 28 secondsSo large context windows still struggle to connect information that's scattered across a lot of tokens.
10:3410 minutes, 34 secondsFinding a single needle is pretty much solved but connecting multiple needles across a long window, not so much.
10:4210 minutes, 42 secondsAll right, we made it all the way to myth number five which is AI agents can work fully autonomously. So what is an AI..
10:5310 minutes, 53 seconds...agent? Well, it's a language model wrapped in a loop. So we typically start with a goal for the agent to achieve.
11:0411 minutes, 4 secondsThe agent decides what to do. It will take an action. It will observe the result of that action.
11:1411 minutes, 14 secondsThen it will decide what to do next and then it will. Repeat, we go round and round
11:2211 minutes, 22 secondsuntil the goal is achieved and this pattern is called the agentic loop.
11:3111 minutes, 31 secondsAnd this is really an example of like an agent browsing the web and maybe querying a database and maybe it then needs to write some code and send an email.
11:4111 minutes, 41 secondsAll of this is driven by the model deciding what is next at each step without being prompted. This is AI autonomy.
11:5011 minutes, 50 secondsSo how's that working out? Well, in general agents handle individual actions pretty well.
11:5711 minutes, 57 secondsAny sort of problem really only shows up when those actions are chained together.
12:0212 minutes, 2 secondsAnd there is a name for that where we end up introducing errors and it is called compounding errors.
12:1212 minutes, 12 secondsSo let me explain what I mean. So let's consider for example, if we take the first step in an agentic loop.
12:2012 minutes, 20 secondsSo, one step here. Maybe the agent gets that step right most of the time.
12:2612 minutes, 26 secondsMaybe let's say it is 95% reliable to complete that step.
12:3312 minutes, 33 secondsWell if we have a chain of 20 steps, and each individual step is 95% percent,
12:3912 minutes, 39 secondsreliable then 20 steps is going to be something like 36% reliable, and you know this just gets worse and worse as we go, so.
12:5012 minutes, 50 seconds50 steps that's going to be something like 8% reliable.
12:5512 minutes, 55 secondsSo agents when left alone to their own devices for too long can get stuck in loops or dead ends.
13:0213 minutes, 2 secondsSo today the common fix is something called human in the loop.
13:0913 minutes, 9 secondsAgents take a few of these steps, a few, of these cycles then they check-in with a human before continuing, or we can also use Verifier
13:1913 minutes, 19 secondsModels, that check each step before the agent commits to the next one, and the idea being that they add reliability by breaking this compounding error chain.
13:2813 minutes, 28 secondsSo, well... Agents run well autonomously in short bursts end to end process autonomy
13:3513 minutes, 35 secondsstill usually works best when somebody is checking over the process, and and look this is an
13:4213 minutes, 42 secondsas-is statement about agents today who knows how reliable the AI agents of the future will be.
13:4913 minutes, 49 secondsAnd I think that's a fair conclusion to draw about all of these myths. They are myths for a reason they either used to be true,
13:5813 minutes, 58 secondslike the high number of hallucinations generated by models, or maybe they will be true in the future, like fully autonomous agents.
14:0814 minutes, 8 secondsSo maybe we should try this exercise again next year and see where we are. But in the meantime, what commonly held AI myth have I missed?
14:1814 minutes, 18 secondsLet me know in the comments.

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

Review 001 — Strategic Read
1. Rough metadata

source_platform: YouTube · source_url: https://www.youtube.com/watch?v=OWPRU_Pc4Ng · source_title: 5 AI Myths & The Truth Behind Them: ML, Context, Agents & More · channel_or_org: IBM Technology · speaker: Martin Keen · affiliation: IBM · title_in_source: Master Inventor · published_at: 2026-07-14 · captured_at: 2026-07-15 · capture_method: YouTube screenshot + pasted full transcript · content_type: technical explainer / AI-capability limits / reasoning and context / agent reliability / inference economics · source_reliability_context: senior practitioner / vendor educator; useful synthesis of current AI-system limitations, but quantitative claims are secondary summaries rather than primary evidence · topic_tags_light: [sycophancy, hallucination, tool_use, refusal_calibration, reasoning_trace, chain_of_thought_faithfulness, inference_compute, reasoning_budget, context_window, multi_source_synthesis, agentic_loop, compounding_error, verifier_model, human_in_the_loop, bounded_autonomy]

2. People / authority context
Martin Keen

role_in_source: primary presenter / technical educator · affiliation: IBM · title_in_source: Master Inventor · speaker_type: senior practitioner / enterprise-technology educator · identity_confidence: high

Authority context: useful for translating several frequently misunderstood AI concepts into accessible system-design language:

asking a model to reconsider is not equivalent to verification;
tool use and calibrated refusal can reduce unsupported answers;
visible reasoning text is not necessarily a faithful account of internal computation;
inference is becoming a major operating cost;
large context windows do not behave like reliable databases;
individually capable agent steps can still produce unreliable long trajectories.

The source is unusually relevant because these are not five unrelated myths. Together, they describe a common architectural failure:

Teams mistake a visible model behavior for a stronger system property that has not actually been established.

Examples:

changed answer → “the model rechecked”;
web search → “the answer is grounded”;
visible reasoning → “we can inspect how it thought”;
large context → “we no longer need data architecture”;
high per-step accuracy → “the whole agent can operate autonomously.”

That pattern is directly relevant to OMNI’s v4 preflight.

Authority limits:

The source is a concise IBM explainer, not a primary research survey.
Numerical claims concerning hallucination frequency, context-window performance, inference-compute share, and token multipliers should remain source claims until traced to their originating studies.
The simple compounding-error calculation assumes roughly independent and similarly distributed step failures. Real agent trajectories may contain correlated errors, recoveries, deterministic steps, checkpoints, and cascading semantic mistakes.
“Verifier models” and human review are presented as general remedies but are not automatically reliable, independent, or authoritative.
The source describes current frontier behavior. It correctly acknowledges that these boundaries may change as models and harnesses evolve. OMNI should encode measured capability profiles rather than hard-code today’s limitations as eternal doctrine.
3. Suggested processing

priority: 4.8/5

depth: full_semantic

EVRUN needed?: yes

promotion posture: AI-substrate-spine-sharpening | context-architecture-requirement | agent-runtime-requirement | epistemic-governance-guardrail | runtime-economics-practice

Duplicate / sibling relationship

This source is a synthesis sibling to:

the test-time-compute / reasoning-model source;
inference-economics and model-routing sources;
long-context versus RAG / graph / compiled-knowledge sources;
the Harbor agent-evaluation source;
the LangSmith trace sources;
the IBM memory and human-in-the-loop sources;
the Rippling eval-driven-development source;
the LangChain FAQ source;
the long-horizon robotics source;
OMNI’s current Agent Runtime & Harness capture.

Much of the substrate already exists in pieces:

model and inference routing by workflow;
long-context versus RAG versus graph selection;
cost/latency/quality policy;
trace lineage;
deterministic verification where possible;
human steering;
candidate≠commit;
bounded capability envelopes.

The current OMNI stack explicitly calls for model, context, retrieval, and inference routing rather than one default model invocation, and separates AI runtime infrastructure from CNS and domain truth.

What is distinct here

The strongest incremental contributions are:

A user challenge is not evidence.
“Are you sure?” can produce sycophantic answer-switching rather than a genuine re-evaluation.
Narrated reasoning is not execution proof.
A reasoning trace may be useful text without faithfully revealing the causal computation that produced the result.
Context capacity is not context competence.
Finding one fact in a huge context does not prove reliable synthesis across many scattered facts.
Step accuracy is not trajectory reliability.
A workflow composed of individually strong actions can become unreliable as uncertainty and errors propagate.
Inference is an operating estate, not a marginal API charge.
Reasoning, long context, retries, verification, and agent loops can multiply runtime cost.
Likely landing zones
AI substrate / runtime — massive
Context Router — massive
Agent Runtime & Harness — massive
Polaris / evidence and proof — major
CNS / candidate resolution and escalation — major
Human-steering architecture — major
Model and capability registry — major
Build-OS / agent evals — major
Runtime Operations / cost and reliability — major
Knowledge Reservoirs — medium-major
Surface design / explanation and challenge semantics — medium-major
Clinical safety / provider workspace — major
Patient-CNS — medium-major
Thesis §B AI substrate — major
Thesis §A trust — major
Core domain contracts — minor directly, but they remain the commit boundary that prevents model uncertainty from becoming canonical truth
4. The strategic read
Classification

Full-semantic AI-substrate source.

Not because any individual myth is new.

Because the source exposes a family of false equivalences that OMNI must systematically prevent:

answer changed
≠ answer verified

tool used
≠ source authoritative

reasoning narrated
≠ computation revealed

context present
≠ context synthesized

step succeeded
≠ trajectory reliable

agent finished
≠ outcome proven

That family deserves v4-level attention.

Core takeaway

The keeper is: OMNI must govern the difference between what an AI system appears to demonstrate and what the evidence actually establishes.

The strongest architecture line is:

Never promote a surface behavior into a system guarantee without independent evidence.

OMNI translation
1. “Are you sure?” is not a verification protocol

The source opens with a subtle but important failure.

A user asks whether the model is sure. The model may interpret the question not as a request to verify evidence, but as a social signal that the user expects a different answer. It may then reverse itself even when the original answer was correct.

This is directly relevant to OMNI.

A clinician might say:

“Are you sure that medication is still active?”
“Really? I thought the patient had CKD.”
“No, I think this was already completed.”

A patient might say:

“Are you sure I need to go to the emergency room?”
“Can’t you just tell me it’s safe?”
“My prior doctor said this was fine.”

An operator might say:

“That refund should be allowed, right?”
“Can’t you mark the appointment completed?”

The system must not equate actor confidence or pressure with evidentiary correction.

Keeper:

Disagreement is a reason to re-examine evidence—not a reason to appease the speaker.

2. OMNI needs explicit challenge semantics

A challenge should trigger a defined behavior rather than generic conversational compliance.

Possible challenge modes:

clarification: what exactly is being disputed?
source refresh: retrieve the latest authoritative state;
alternate-source check: compare independent evidence;
calculation rerun: recompute from source values;
rule-owner check: inspect the relevant policy or contract;
conflict presentation: show why sources disagree;
human/domain escalation: route to the actor who owns resolution;
maintain answer: retain the original conclusion when no contrary evidence emerges.

Potential flow:

actor challenge
→ identify disputed claim
→ preserve original claim and evidence
→ select verification route
→ acquire new evidence
→ compare
→ revise, affirm, or escalate
→ record revision reason

The system should be able to say:

“I rechecked the current medication orders and discharge list. The original answer remains supported.”

That is better than reflexively changing sides.

Keeper:

A recheck must produce a verification event, not merely another generation.

3. Respecting actor authority does not require surrendering epistemic integrity

OMNI’s authority model is plural.

A clinician may own the clinical decision.

A patient may own consent and personal goals.

An operator may own local policy.

A domain may own the committed fact.

But actor authority does not make every factual assertion correct.

The system should distinguish:

the actor is authorized to decide;
the actor is supplying new evidence;
the actor is correcting a source fact;
the actor merely prefers a different answer.

A provider may overrule an AI recommendation through professional authority. That should be recorded as a human clinical decision—not retroactively represented as proof that the AI’s evidence analysis was factually wrong.

Keeper:

Authority may resolve action without rewriting the evidence that preceded it.

4. Answer revision needs provenance

When the AI changes an answer, OMNI should know why.

Possible revision reasons:

new source retrieved;
stale source replaced;
entity resolution corrected;
calculation corrected;
user supplied missing fact;
authorized policy decision changed;
model reconsideration without new evidence;
human override;
safety escalation;
prior response unsupported.

A revision without a reason is dangerous in longitudinal care because the system may appear to “learn” an incorrect correction.

Candidate:

answer_revision_reason

or:

claim_reconsideration_event

Keeper:

A changed answer without changed evidence is a behavior change—not necessarily a knowledge improvement.

5. Tool use reduces unsupported generation but does not create truth automatically

The source argues that frontier models now use search and database tools rather than relying solely on model memory, and that calibrated refusal can prevent fabricated citations or facts.

This is an important improvement.

But the OMNI-grade questions begin after the tool call:

Which tool was selected?
Which source was searched?
Is that source authoritative?
Was the subject correctly resolved?
Was the record current?
Was the query complete?
Did the tool return an error or partial result?
Did the model interpret it correctly?
Were conflicting records excluded?
Was access permitted?
Can the result support the requested action?

A web search can retrieve misinformation.

A database lookup can query the wrong patient.

A correct source can be stale.

A reliable tool can be used for the wrong purpose.

Keeper:

Tool use moves the model closer to evidence; source authority and interpretation determine whether it reaches truth.

6. Refusal calibration is a first-class capability

The source describes models increasingly saying they cannot verify a narrow or poorly supported claim rather than inventing an answer.

That behavior should not remain merely a model personality characteristic.

OMNI needs governed states such as:

verified;
supported but incomplete;
conflicting evidence;
insufficient evidence;
source unavailable;
outside capability;
requires professional resolution;
prohibited to infer;
safe to defer;
urgent escalation required.

The refusal should also be useful.

Not:

“I can’t help.”

But:

“The medication list conflicts with the discharge summary. I cannot establish the active dose. I have routed the discrepancy for clinician reconciliation.”

Keeper:

Good refusal preserves uncertainty, explains the boundary, and routes the unresolved work.

7. A global hallucination rate is not a meaningful assurance claim

The source presents an approximate low single-digit hallucination figure for current frontier models while emphasizing that hallucinations remain unsolved.

That number should not become OMNI doctrine.

“Hallucination rate” depends on:

model and version;
task;
domain;
prompt;
context;
retrieval;
tool availability;
evaluator;
definition of hallucination;
answerability;
source quality;
whether omissions count;
whether wrong tool use counts;
whether unsupported but correct claims count.

For OMNI, the relevant measurement is route-specific:

unsupported clinical assertion rate;
citation mismatch rate;
patient-identity error rate;
medication-list disagreement rate;
false reassurance rate;
missed escalation rate;
fabricated policy rate;
unsupported billing conclusion rate.

Keeper:

Reliability is workflow-specific, not a global property inherited from the model’s marketing statistics.

8. “Ask again” is not independent verification

Running the same model again with nearly the same context may produce:

the same error;
the opposite answer from social pressure;
a polished justification for either position;
correlated mistakes inherited from the same source or prompt.

Independent verification should seek a different evidence path where possible:

deterministic calculation;
canonical domain query;
separate policy engine;
independent retrieval route;
structured rule check;
different model only when genuine diversity is useful;
human/domain review.

Keeper:

Repetition is not independence.

9. Visible chain-of-thought is not the audit record

The source’s second major point is that visible reasoning text may look like step-by-step access to the model’s internal cognition, but it is not necessarily causally faithful to the computation producing the answer. The source describes it as narration that may include post-hoc rationalization.

This strongly affirms existing OMNI doctrine.

OMNI already has the right distinction:

trace tools called;
files and records accessed;
inputs and outputs;
policy checks;
model and version;
verifier results;
costs;
timing;
state changes;

and do not rely on private or narrated chain-of-thought as the audit artifact.

Keeper:

Audit observable work, not the model’s story about its thinking.

10. Explanation, rationale, evidence, and execution trace are different objects

OMNI should not collapse these:

Explanation

A user-facing account of what the result means.

Rationale

The stated reasons or criteria supporting a recommendation.

Evidence

The source records, rules, observations, calculations, and citations that support the claim.

Execution trace

What the system actually accessed, called, generated, checked, changed, and committed.

A reasoning-style narrative may be useful as an explanation.

It should not substitute for:

source references;
policy evaluation;
tool results;
decision inputs;
committed state;
outcome evidence.

Keeper:

A persuasive rationale is not provenance.

11. OMNI should generate inspectable decision summaries, not expose speculative hidden cognition

A care-grade decision summary might state:

subject resolved as patient X
active medication source: signed discharge list
conflicting source: prior outpatient list
applicable policy: medication reconciliation required
AI conclusion: unresolved discrepancy
action proposed: clinician review
action committed by: none

That is far more useful than a long natural-language “thinking” monologue.

It allows reviewers to inspect:

inputs;
conflicts;
rules;
uncertainty;
candidate;
authority;
outcome.

Candidate:

decision_evidence_summary

or:

rationale_projection

This should be a projection over actual evidence and trace—not fabricated introspection.

Keeper:

Expose the decision structure, not an imitation of consciousness.

12. Reasoning traces can still be operationally useful—without being treated as truth

The source should not be overread as saying intermediate reasoning text is worthless.

It may help with:

debugging;
identifying omitted assumptions;
understanding task decomposition;
discovering where verification should occur;
comparing model behavior;
generating candidate explanations.

But it remains:

model output;
potentially incomplete;
potentially post-hoc;
not necessarily stable;
not an authoritative account of internal causation.

Keeper:

Reasoning narration may be diagnostic evidence; it is not privileged truth.

13. Inference is becoming the dominant operating concern of AI systems

The source distinguishes training from inference and argues that inference is consuming an increasing share of total AI compute, especially as reasoning models and agentic harnesses generate many additional tokens.

The exact percentages should remain watch items.

The direction is strategically important.

OMNI’s long-term cost will not be determined only by:

model-list price;
one prompt;
one response.

It will be driven by:

query volume;
context size;
reasoning tokens;
retries;
parallel branches;
tool calls;
verifier calls;
long-running agents;
background monitoring;
multimodal processing;
duplicated context;
evaluation;
shadow runs;
fallback routes.

Keeper:

Inference cost is the cost of operating intelligence, not merely the price of one completion.

14. Reasoning budget must be an explicit runtime policy

The source says reasoning models may consume far more tokens than ordinary responses.

OMNI already has strong pressure toward workflow-specific inference lanes rather than one model path for everything. Existing work calls for distinct runtime choices across patient chat, clinical-risk interrupts, intake classification, document extraction, code review, billing reconciliation, and longitudinal interpretation.

A runtime profile should decide:

whether deep reasoning is needed;
maximum reasoning budget;
latency tolerance;
cost ceiling;
whether multiple paths are useful;
whether verification is required;
whether cached context can be reused;
whether a smaller model is sufficient;
when to escalate to a human.

Potential candidate:

reasoning_budget_profile

Keeper:

Reasoning is a governed resource, not a free synonym for quality.

15. More reasoning compute does not guarantee better judgment

Extra reasoning can improve some tasks.

It can also:

rationalize a wrong premise;
amplify bad context;
pursue irrelevant branches;
increase latency;
increase cost;
create additional opportunities for tool misuse;
produce greater user confidence without greater correctness.

Therefore:

more tokens ≠ more authority

and:

longer reasoning ≠ stronger evidence

Keeper:

Spend reasoning where the workflow can convert it into verified value.

16. Agent economics should be measured per verified outcome

A cheap single call can become an expensive workflow after:

twenty steps;
three retries;
two verifiers;
one human review;
a failed tool;
a rollback.

The useful metric is not raw token price.

It is closer to:

cost per verified task;
cost per accepted output;
cost per resolved case;
cost per safe escalation;
cost per corrected defect;
cost per outcome.

Existing OMNI eval work already treats cost per successful verified task—not raw tokens—as the meaningful operating metric.

Keeper:

Optimize cost against proven completion, not generated activity.

17. A large context window is not a database

The source describes the temptation to dump a codebase or many documents into a huge context window and treat the model as though it can query the material reliably.

It then distinguishes simple “needle” retrieval from the harder task of connecting multiple facts scattered across a large context.

This is a major OMNI affirmer.

A context window does not inherently provide:

canonical identity;
indexing;
relational integrity;
transactions;
versioning;
freshness;
source authority;
complete recall;
stable joins;
permissions;
durable memory;
query reproducibility.

Keeper:

Context is a temporary reasoning workspace—not a truth store or query engine.

18. Single-fact retrieval benchmarks do not prove longitudinal synthesis

Finding one hidden fact is much easier than reconciling:

a diagnosis from one source;
a medication order from another;
a later discontinuation;
a patient statement;
a consent restriction;
a provider correction;
a scheduling event;
an outcome two months later.

OMNI’s hard problem is not usually one needle.

It is:

multiple needles;
multiple authors;
multiple time horizons;
conflicting authority;
versioned meaning;
missing evidence;
relational context.

Keeper:

The care problem is not finding a needle. It is establishing which needles belong together, which one is current, and which actor may act on them.

19. Context quality depends on architecture, not only token capacity

The correct OMNI posture is not:

“Use RAG for small models, then stop when context windows become large.”

Nor:

“Put everything in one vector store.”

It is a context strategy router choosing among:

direct canonical query;
keyword retrieval;
semantic retrieval;
graph traversal;
event/time-window retrieval;
long context;
cached context packet;
compiled knowledge;
human-supplied context;
deterministic joins.

The current AI-substrate plan already names long-context versus RAG versus graph choice, prompt/cache strategy, and workflow-specific inference lanes.

Keeper:

More context capacity increases the design space; it does not eliminate context architecture.

20. Context selection is also an authority and privacy decision

Dumping everything into context is not merely inefficient.

It can violate:

minimum-necessary access;
tenant isolation;
patient consent;
purpose limitation;
role visibility;
trade-secret boundaries;
source restrictions.

A million-token context containing unauthorized information remains unauthorized.

Keeper:

The model’s capacity to read information does not create permission to provide it.

21. Multi-source synthesis deserves its own evaluation family

OMNI should not only test:

can the model find the allergy?
can it find the appointment?
can it find the latest lab?

It should test:

can it reconcile contradictory medication lists?
can it distinguish observation from adopted clinical memory?
can it preserve source authority?
can it identify the current plan after several supersessions?
can it avoid crossing patients or tenants?
can it detect missing dependencies?
can it state unresolved conflict honestly?

Candidate:

multi_evidence_synthesis_eval

or:

context_join_eval

Keeper:

Retrieval correctness and synthesis correctness are different capabilities.

22. Agent autonomy fails at the trajectory level

The source defines the agentic loop:

decide → act → observe → repeat

and explains that agents may perform individual steps well while long chains become unreliable because errors compound.

This is one of the strongest explanations in the source.

The agent may:

resolve the wrong person;
then retrieve the wrong record;
then summarize it accurately;
then choose the correct tool;
then execute the wrong action perfectly.

Each downstream step may be locally competent.

The trajectory is still wrong.

Keeper:

Local competence does not rescue a trajectory built on an early false premise.

23. The source’s arithmetic is illustrative, not a literal reliability model

The source shows that 95% reliability repeated across many steps produces a much lower end-to-end probability if each step must succeed.

The intuition is correct.

The exact arithmetic oversimplifies because:

steps have different risk;
errors may be correlated;
some steps are deterministic;
some failures are recoverable;
some errors are caught;
some mistakes are harmless;
one catastrophic mistake may dominate the whole sequence;
a correct final answer may emerge after recovery.

OMNI should not create one scalar “agent reliability” by multiplying estimated step accuracies.

It should model:

critical-path steps;
irreversible transitions;
semantic dependencies;
checkpoints;
recoverability;
blast radius;
evidence quality;
uncertainty propagation.

Keeper:

Trajectory risk is structural—not merely arithmetic.

24. Checkpoints should occur at semantic boundaries, not every arbitrary number of steps

The source proposes humans or verifier models interrupting the chain.

A crude implementation might require human approval every five actions.

That would produce fatigue without necessarily catching the important failures.

The better checkpoints occur before:

identity becomes the basis for retrieval;
an inference becomes memory;
a recommendation becomes a plan;
a plan becomes an authorized action;
a read becomes a write;
a local action crosses a federation boundary;
a communication leaves OMNI;
a reversible candidate becomes an irreversible commit;
a high-cost branch begins;
a tool changes external state.

Keeper:

Place verification where meaning or consequence changes—not where the step counter reaches five.

25. OMNI should use short-burst autonomy

The source concludes that current agents often work well autonomously in short bursts while end-to-end autonomy benefits from oversight.

This fits OMNI well.

A bounded autonomous burst should have:

explicit objective;
narrow context;
scoped tools;
budget;
stopping rule;
expected artifact;
verifier;
no hidden commit authority;
trace;
escalation path.

Examples:

extract candidate medications from one document;
compare two schedules;
draft a patient message;
generate test cases;
classify an inbox item;
inspect a bounded set of records for discrepancies.

Keeper:

Autonomy should expand through verified bounded work—not through one giant end-to-end permission.

26. Verifier models are useful and subordinate

The source proposes verifier models that inspect steps before an agent continues.

That is valuable when deterministic verification is unavailable.

But a verifier can share:

the same model blind spots;
the same training distribution;
the same bad context;
the same rubric flaw;
the same source error;
social or stylistic preferences mistaken for correctness.

OMNI already has the stronger verification ladder:

deterministic verifier;
invariant or property check;
structured model evaluation;
human/domain review;
dual control for the highest-consequence transitions.

Keeper:

A verifier interrupts the chain only when it checks the right property with sufficient independence.

27. Verification should examine state, not only the agent’s words

A verifier should not merely ask:

“Does this answer sound correct?”

It should inspect:

source state;
selected subject;
tool inputs;
tool outputs;
domain transitions;
changed records;
omitted required actions;
policy results;
final state;
side effects.

The existing agent-eval doctrine already says the final response is insufficient when agents can read files, call tools, and mutate environments. Evaluation must inspect observable work and resulting state.

Keeper:

Verify what changed, not merely what the agent said changed.

28. Human review must remain selective and authority-aware

The source recommends human-in-the-loop checkpoints.

That does not mean every agent step should generate an approval request.

Human involvement may take different forms:

supply missing information;
resolve ambiguity;
approve;
reject;
edit;
monitor;
take over;
independently verify;
receive post-action notification;
accept residual risk.

The correct mode depends on:

authority;
consequence;
reversibility;
uncertainty;
novelty;
urgency;
available verifier strength.

Keeper:

Human involvement is a control mode, not a universal pause button.

29. The model-capability boundary must remain dynamic

The source ends by noting that some current myths were once true and others may become true later.

That is an important governance point.

OMNI should not hard-code:

“agents can never do X”;
“this model is safe for Y forever”;
“long context always fails after Z tokens”;
“all reasoning models cost N times more.”

Instead, every capability should be tied to:

model/version;
runtime;
eval suite;
context strategy;
consequence tier;
observed performance;
expiration or review date.

Potential candidate:

capability_evidence_epoch

Keeper:

Autonomy is earned by current evidence and expires when the system or environment changes.

30. The five myths collapse into one OMNI law

Each myth concerns mistaking a weaker signal for a stronger guarantee:

Visible behavior	Incorrect inference
Model changes answer	It verified the answer
Model uses a tool	The answer is true
Model narrates reasoning	We can inspect its cognition
Model receives huge context	It can reliably synthesize everything
Agent succeeds at steps	The whole trajectory is safe

The common OMNI law is:

Do not infer system assurance from model theater.

The system needs:

source evidence;
runtime trace;
verification;
authority;
state inspection;
outcome observation.
Where it lands
AI substrate / Runtime — massive

This source pressure-tests:

model routing;
reasoning budgets;
context strategy;
inference economics;
refusal behavior;
verifier selection;
model/version capability profiles.
Context Router — massive

Strong external support for retaining:

retrieval;
graph;
long context;
cached packets;
source authority;
multi-source synthesis;
context budgeting.
Agent Runtime & Harness — massive

Requires:

bounded autonomy;
trajectory state;
checkpoint policy;
verifier hooks;
stopping conditions;
budgets;
trace;
failure recovery;
human steering.
Polaris / proof — major

Visible reasoning and model confidence are not proof. Proof is composed from evidence, checks, state, authority, and lineage.

CNS — major

CNS should:

route challenges into verification;
preserve disagreement;
surface uncertainty;
select escalation;
prevent candidate reasoning from silently becoming domain truth.

CNS coordinates, while domains retain commit ownership.

Patient-CNS / Provider Workspace — major

The assistant must resist:

patient pressure toward unsafe reassurance;
provider pressure toward unsupported factual revision;
confident-answer theater;
overlong reasoning used as persuasion.
Build-OS — major

Directly supports:

operational traces rather than hidden reasoning;
deterministic verifiers;
trajectory evals;
context-synthesis evals;
model/version regression;
cost per verified outcome.
Runtime Operations — major

Inference spend, context length, retries, loops, and verifier calls need monitoring, quotas, degradation policy, and budget alerts.

Doctrine / primitive pressure

Candidates for Review 003 to deduplicate—not final:

epistemic_challenge_event
evidence_backed_recheck
answer_revision_reason
claim_reconsideration_event
sycophancy_resistance_policy
challenge_verification_route
refusal_calibration_profile
unsupported_claim_state
decision_evidence_summary
rationale_projection
operational_trace_contract
reasoning_budget_profile
inference_cost_envelope
context_window_noncanonical
context_synthesis_complexity
multi_evidence_synthesis_eval
context_join_eval
trajectory_reliability_profile
trajectory_risk_budget
verification_checkpoint_policy
semantic_commit_barrier
autonomy_burst_limit
verifier_independence_profile
capability_evidence_epoch
answer_stability_under_challenge_eval
Likely dedup / sharpening disposition
operational_trace_contract → already reconciled to trace_lineage; this source strongly affirms the observable-work-not-CoT distinction.
reasoning_budget_profile → sharpens inference-lane and runtime-budget policy.
multi_evidence_synthesis_eval → likely a useful new eval family, not a new domain object.
verification_checkpoint_policy → likely composes workflow lane, autonomy level, authority gate, and verifier policy.
semantic_commit_barrier → probably existing candidate≠commit plus domain-owned commit, but useful vocabulary.
autonomy_burst_limit → likely an attribute of the agent/runtime profile.
capability_evidence_epoch → may sharpen versioned eval validity and model-change review.
answer_revision_reason → potentially a useful trace/explanation field.
epistemic_challenge_event → potentially meaningful surface/runtime event if OMNI wants challenges to trigger a materially different verification route.
sycophancy_resistance_policy → likely guardrail and eval profile rather than standalone primitive.
answer_stability_under_challenge_eval → valuable eval type: correct answers should not collapse merely because the user expresses doubt.
Keeper doctrine
Disagreement is a reason to inspect evidence—not appease the speaker.
A recheck must produce a verification event, not another generation.
Authority may resolve action without rewriting prior evidence.
A changed answer without changed evidence is not necessarily an improvement.
Tool use moves the model toward evidence; it does not create source authority.
Good refusal preserves uncertainty and routes unresolved work.
Reliability is workflow-specific, not a global model property.
Repetition is not independent verification.
Audit observable work, not narrated cognition.
A persuasive rationale is not provenance.
Expose decision structure, sources, checks, and authority—not an imitation of consciousness.
Inference cost is the cost of operating intelligence.
Reasoning is a governed resource, not a free synonym for quality.
Spend reasoning where the workflow can convert it into verified value.
Optimize cost against proven completion, not generated activity.
Context is a temporary reasoning workspace—not a database, memory system, or source of truth.
More context capacity does not eliminate context architecture.
The model’s ability to read information does not grant permission to provide it.
Retrieval correctness and synthesis correctness are different capabilities.
Local competence does not guarantee trajectory reliability.
Trajectory risk is structural, not merely arithmetic.
Place checkpoints where meaning, authority, cost, or consequence changes.
Autonomy expands through verified bounded work—not one end-to-end permission.
A verifier is valuable only when it checks the right property with sufficient independence.
Verify resulting state, not merely the agent’s claim about state.
Human involvement is a control mode, not a universal pause button.
Autonomy is earned by current evidence and expires when the model, workflow, or environment changes.
Never promote a visible model behavior into a system guarantee without independent evidence.
What NOT to import blindly
1. “Are you sure?” always makes answers worse

The failure is possible, not universal. The important lesson is that a conversational challenge is not a defined verification process.

2. Tool use as proof of grounding

Tool use can still retrieve the wrong, stale, unauthorized, or low-authority source.

3. Refusal as inherently safe

An unnecessary refusal can delay care or frustrate legitimate action. Refusal needs capability-, context-, and consequence-aware calibration.

4. One global hallucination percentage

Do not use a vendor-level or benchmark-level rate as assurance for an OMNI workflow.

5. Visible reasoning as either perfect explanation or completely useless text

It may be useful for diagnosis and explanation. It is not a faithful audit of hidden computation.

6. Reasoning tokens as guaranteed accuracy

More inference can produce more cost, delay, and rationalization without better evidence.

7. The source’s inference-share forecasts as fixed planning assumptions

Treat them as directional market evidence. OMNI needs its own runtime telemetry and capacity model.

8. Million-token context as a universal current baseline

Context sizes, pricing, and effective performance differ by model and will change.

9. Needle benchmarks as evidence of care-grade synthesis

Single-fact retrieval is not longitudinal reconciliation.

10. Long context as a replacement for canonical data systems

Context does not provide transactions, authority, lineage, freshness, or durable truth.

11. The simple 0.95^n trajectory formula as an agent reliability score

It is a useful illustration, not a sufficient model of correlated and recoverable workflow failures.

12. Human review every few steps

Fixed-frequency approval creates fatigue. Checkpoints should follow semantic and consequence boundaries.

13. Verifier models as independent authorities

A verifier can share the generator’s failure mode and remains evidence.

14. Short-burst autonomy as safe by definition

Even one step can be catastrophic if it is an irreversible write with broad authority.

15. Today’s capability boundary as permanent

Models and harnesses change. Autonomy policy must be tied to versioned evaluation evidence.

16. “Hallucination” as the only AI failure category

OMNI also must detect:

omission;
wrong subject;
wrong source;
unauthorized access;
stale context;
incorrect synthesis;
tool misuse;
authority violation;
workflow dead end;
silent failure;
harmful but factually correct action.
Do-not-miss lesson

OMNI must distinguish conversational confidence, visible reasoning, available context, and successful tool calls from actual evidence, authority, trajectory reliability, and committed truth.

The shortest version:

Apparent intelligence is not system assurance.

Tiering tags per concept
User challenge can induce sycophantic answer switching

stale-vs-v3: PARTIAL-or-ABSENT · weight_tier: spine-guardrail · status: promote

Evidence-backed recheck

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Answer-revision provenance

stale-vs-v3: PARTIAL-or-ABSENT · weight_tier: vocabulary-to-mechanism · status: watch/promote

Tool use and calibrated refusal reduce unsupported output

stale-vs-v3: AFFIRM · weight_tier: spine-support · status: promote-with-source-authority-qualification

Global hallucination rate

stale-vs-v3: ABSENT · weight_tier: low-authority-watch · status: reject-as-governance-metric

Visible reasoning is not faithful internal computation

stale-vs-v3: AFFIRM/PARTIAL · weight_tier: spine · status: promote

Operational trace rather than hidden reasoning

stale-vs-v3: AFFIRM · weight_tier: spine · status: promote

Inference as growing operating cost

stale-vs-v3: AFFIRM · weight_tier: spine · status: promote

Reasoning-budget policy

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Context window is not a database

stale-vs-v3: AFFIRM · weight_tier: spine · status: promote

Single-needle versus multi-evidence synthesis

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Multi-evidence synthesis eval

stale-vs-v3: ABSENT-or-PARTIAL · weight_tier: Build-OS-practice · status: promote-after-dedup

Compounding agent errors

stale-vs-v3: AFFIRM · weight_tier: spine · status: promote

Simple multiplicative reliability equation

stale-vs-v3: ABSENT · weight_tier: vocabulary · status: analogy-only

Semantic checkpoint policy

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Short-burst autonomy

stale-vs-v3: AFFIRM/PARTIAL · weight_tier: spine · status: promote

Verifier model

stale-vs-v3: AFFIRM · weight_tier: vocabulary · status: promote-only-as-evidence

Capability limits as time-dependent

stale-vs-v3: PARTIAL · weight_tier: governance-requirement · status: promote

5. Hard read

Verdict: full-semantic spine-sharpening source.

It is not the deepest source on any one of its five subjects.

Its value is the unifying pattern.

Each myth begins when a weaker phenomenon is mistaken for a stronger guarantee:

social responsiveness mistaken for verification;
tool use mistaken for truth;
reasoning narration mistaken for cognitive transparency;
context capacity mistaken for information architecture;
strong individual actions mistaken for reliable autonomy.

That is exactly the danger OMNI faces in v4.

A healthcare AI system can look extraordinarily capable while still lacking:

subject certainty;
source authority;
consent;
longitudinal reconciliation;
trajectory verification;
commit discipline;
outcome proof.

The probable net-new yield is modest but important:

Challenge-aware verification: “Are you sure?” should trigger a traceable evidence recheck rather than a socially compliant answer flip.
Answer-revision provenance: the system should distinguish revision due to new evidence from revision due to model instability or human override.
Multi-evidence synthesis evaluation: long context should be evaluated on reconciliation, authority, chronology, and conflict—not needle retrieval.
Trajectory-risk policy: autonomy checkpoints should follow semantic dependencies and consequential transitions.
Capability-evidence expiry: model autonomy must remain tied to current versioned evidence.

The most important source correction is that none of the mitigations stands alone:

search can retrieve bad sources;
refusal can be overused;
reasoning can rationalize;
larger context can dilute attention;
verifiers can share the same blind spots;
humans can rubber-stamp.

OMNI’s answer is composition:

authorized context
+ source authority
+ bounded reasoning
+ observable trace
+ independent verification
+ human/domain authority
+ deterministic commit
+ outcome evidence

Strongest OMNI line:

OMNI must never confuse what the model appears to have done with what the system can prove actually happened.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-15` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

### Review 003 — Opus formal deep extraction (EVSRC-2026-000277)

**Read posture / tiering.** Formalizes Knox Review 001. **Overall tier: full_semantic AI-substrate spine-sharpening — no single myth is new, but the source exposes a family of false equivalences OMNI must systematically prevent.** Siblings: test-time-compute/reasoning (064/065), inference-economics + model-routing, long-context-vs-RAG (227), Harbor eval (215), tracing (260/272), IBM memory + HITL, Rippling EDD (271), LangChain FAQ (273), Agent Runtime capture. **The master law: don't infer system assurance from model theater** — answer-changed ≠ verified · tool-used ≠ true · reasoning-narrated ≠ computation-revealed · context-present ≠ synthesized · step-succeeded ≠ trajectory-reliable · agent-finished ≠ outcome-proven. Dominant reality-check: **`doctrine=AFFIRM/PARTIAL · build=absent/partial`**.

**A. Concept clusters**

---
**Cluster 1 — Challenge ≠ verification (sycophancy); OMNI needs challenge semantics + answer-revision provenance (★)**
| field | content |
|---|---|
| concept | "Are you sure?" can read as a social signal of doubt → the model flips its position even when originally correct ("bless its sycophantic artificial heart"). A user challenge is not evidence. |
| OMNI meaning | Care-critical: a clinician's "are you sure that med is still active?" / a patient's "are you sure I need the ER?" / an operator's "that refund's allowed, right?" must NOT equate actor confidence/pressure with evidentiary correction. Needs **challenge semantics** (clarify → source refresh → alternate-source check → recompute → rule-owner check → conflict presentation → escalate → or MAINTAIN when no contrary evidence) producing a **verification EVENT**, not another generation; + `answer_revision_reason` (new source / stale replaced / entity corrected / recompute / user-supplied fact / authorized policy change / mere reconsideration / human override / unsupported). "Disagreement is a reason to re-examine evidence, not appease the speaker"; "a changed answer without changed evidence is a behavior change, not a knowledge improvement." Authority may resolve ACTION without rewriting the EVIDENCE that preceded it. |
| why | Prevents sycophantic answer-flipping from corrupting longitudinal care memory. |
| downstream homes | **CNS (challenge routing)** · **§A candidate→commit + authority** · **Patient-CNS / Provider workspace** · **Surface (challenge/explanation semantics)** |
| source anchors | "the chatbot may read 'are you sure' as a signal of doubt…change its position" [0:29]; "bless its sycophantic artificial heart" [0:54] |
| stale-vs-v3 | PARTIAL-or-ABSENT · build=absent |
| weight_tier | spine-guardrail |
| status | promote |

---
**Cluster 2 — Tool-use reduces fabrication but ≠ truth; refusal calibration is a first-class capability**
| field | content |
|---|---|
| concept | Frontier models now use tool-use (search/DB), refusal calibration ("I can't verify this"), extended thinking → hallucinations reduced (~3%) but not solved. |
| OMNI meaning | OMNI-grade questions begin AFTER the tool call: which tool / which source / authoritative? / subject resolved? / current? / complete? / error-or-partial? / interpreted correctly? / conflicts excluded? / access permitted? "Tool use moves the model toward evidence; source authority + interpretation determine truth." Refusal calibration → governed states (verified / supported-but-incomplete / conflicting / insufficient / source-unavailable / outside-capability / requires-professional-resolution / prohibited-to-infer / urgent-escalation) — and a GOOD refusal preserves uncertainty + explains the boundary + ROUTES the unresolved work ("the med list conflicts with discharge — routed for clinician reconciliation"). |
| why | Turns model self-limitation into a governed, useful capability. |
| downstream homes | **§C capability / tool gateway** · **CNS (refusal→routing)** · **`source_authority_map` (C3.6)** · **Care Prove/Learn** |
| source anchors | "tool use…pulling answers from web search or database lookups" [1:40]; "refusal calibration…learned to say I can't verify this" [1:57] |
| stale-vs-v3 | AFFIRM/PARTIAL · build=absent |
| weight_tier | spine-support |
| status | promote-with-source-authority-qualification |

---
**Cluster 3 — Visible reasoning ≠ faithful computation: audit observable work, not narrated cognition (★)**
| field | content |
|---|---|
| concept | Chain-of-thought "reasoning traces" look like step-by-step thinking but "faithfulness" is low — the model works through weights; the trace is "post hoc rationalization" reasoning toward the answer the internal computation already favors. "You can watch the model's narration of thinking," not its thinking. |
| OMNI meaning | Strong AFFIRM of OMNI trace doctrine: audit observable work (tools called / records accessed / inputs+outputs / policy checks / model+version / verifier results / costs / state changes) — NOT private/narrated CoT as the audit artifact. Separate objects: explanation ≠ rationale ≠ evidence ≠ execution trace ("a persuasive rationale is not provenance"). Generate a `decision_evidence_summary` / `rationale_projection` (subject resolved / sources / conflicts / policy / AI conclusion / action proposed / committed-by) — a projection over real evidence+trace, NOT fabricated introspection. Reasoning narration = diagnostic evidence, not privileged truth. |
| why | Prevents mythologizing model introspection as an audit record. |
| downstream homes | **Polaris/proof (trace≠narration)** · **Build-OS observability (260/272 AFFIRM)** · **Surface (decision summary)** |
| source anchors | "does that trace reflect what the model is actually doing internally? It doesn't" [4:33]; "post hoc rationalization" [5:36]; "what you can watch is the model's narration of thinking" [5:49] |
| stale-vs-v3 | AFFIRM/PARTIAL · build=partial |
| weight_tier | spine |
| status | promote |

---
**Cluster 4 — Inference is the operating cost; reasoning is a governed resource; measure cost-per-verified-outcome**
| field | content |
|---|---|
| concept | Inference share of AI compute rising (⅓ 2023 → ½ 2025 → ⅔ end-2026), driven by reasoning models generating 10–100× more tokens, esp. in agentic harnesses. |
| OMNI meaning | Inference cost = the cost of operating intelligence (query volume / context size / reasoning tokens / retries / parallel branches / tool calls / verifier calls / long agents / background monitoring / duplicated context / evals / shadow runs / fallbacks). Needs a `reasoning_budget_profile` per workflow lane (whether deep reasoning is needed / max budget / latency / cost ceiling / multi-path / verification / cache reuse / smaller model / escalate) — "reasoning is a governed resource, not a free synonym for quality"; "more tokens ≠ more authority." Measure **cost per verified outcome** (per resolved case / safe escalation / corrected defect), NOT raw tokens (AFFIRM 271). Percentages = watch. |
| why | Makes inference economics an explicit runtime policy, not a surprise bill. |
| downstream homes | **§B AI substrate / model+inference routing** · **Runtime Operations (cost/quotas)** · **271 (cost-per-verified-task)** · **BIZOPS AI spend** |
| source anchors | "inference compute will be about two-thirds of all AI compute costs" [7:40]; "10 to 100 times more tokens per query" [8:03] |
| stale-vs-v3 | AFFIRM/PARTIAL · build=partial |
| weight_tier | spine |
| status | promote (percentages = watch) |

---
**Cluster 5 — A large context window is not a database; retrieval ≠ synthesis; context selection is authority+privacy (★)**
| field | content |
|---|---|
| concept | Temptation to dump codebase/PDFs into a 1M-token window and query it. Single-needle retrieval ≈ solved; multi-needle (MRCR) drops 30–60 points from 200K→1M tokens. |
| OMNI meaning | Strong AFFIRM: "context is a temporary reasoning workspace, not a truth store or query engine" (no canonical identity / indexing / relational integrity / transactions / versioning / freshness / source authority / complete recall / permissions / durable memory). OMNI's hard problem = MULTI-needle across authors/time-horizons/conflicting-authority/versioned-meaning ("establishing which needles belong together, which is current, and which actor may act"). Needs a **context-strategy router** (canonical query / keyword / semantic / graph / event-window / long-context / cached packet / compiled knowledge / human-supplied / deterministic joins — AFFIRM 227) + `multi_evidence_synthesis_eval` (reconcile contradictory med lists / observation-vs-adopted-memory / preserve source authority / current-plan-after-supersession / no cross-patient/tenant / detect missing deps / state unresolved conflict). GUARDRAIL: "the model's capacity to READ information doesn't create PERMISSION to provide it" — a 1M-token context of unauthorized info is still unauthorized (minimum-necessary / consent / tenant isolation). |
| why | Kills "big context replaces data architecture" + names the synthesis + authority/privacy gaps. |
| downstream homes | **Context Router (massive)** · **Knowledge Reservoirs** · **D7 consent / minimum-necessary** · **Build-OS (`multi_evidence_synthesis_eval`)** |
| source anchors | "treat this context window a bit like a database" [9:01]; "performance can drop 30 to 60 points between 200,000 and one million tokens" [10:19]; "connecting multiple needles…not so much" [10:34] |
| stale-vs-v3 | AFFIRM/PARTIAL · build=partial |
| weight_tier | spine |
| status | promote |

---
**Cluster 6 — Agent autonomy fails at the trajectory level; checkpoints at semantic boundaries; short-burst autonomy; verifiers subordinate (★)**
| field | content |
|---|---|
| concept | Agentic loop (decide→act→observe→repeat); steps individually strong (~95%) but compounding errors → 20 steps ≈ 36%, 50 steps ≈ 8%. Fix: human-in-the-loop + verifier models breaking the compounding chain; agents work best autonomously in short bursts. |
| OMNI meaning | "Local competence doesn't rescue a trajectory built on an early false premise" (resolve wrong person → retrieve wrong record → summarize accurately → execute wrong action perfectly). BUT the 0.95^n math is illustrative, not a reliability model → model `trajectory_risk` STRUCTURALLY (critical-path steps / irreversible transitions / semantic dependencies / checkpoints / recoverability / blast radius). Checkpoints at **semantic/consequence boundaries** (identity→retrieval / inference→memory / recommendation→plan / plan→authorized-action / read→write / local→federation-crossing / candidate→irreversible-commit), NOT every N steps ("place verification where meaning or consequence changes, not where the counter reaches five"). **Short-burst bounded autonomy** (objective + narrow context + scoped tools + budget + stopping rule + expected artifact + verifier + no hidden commit + trace + escalation). Verifiers useful but subordinate + must be INDEPENDENT (can share the generator's blind spots) + inspect resulting STATE not just words (AFFIRM 215 agent-eval). Human involvement = a control mode keyed to authority/consequence/reversibility/uncertainty, not a universal pause button. |
| why | The strongest agent-reliability doctrine in the wave; directly shapes Agent Runtime + CNS. |
| downstream homes | **Agent Runtime & Harness (massive)** · **CNS (checkpoints/escalation)** · **§A candidate→commit** · **215 agent-eval (verify state)** |
| source anchors | "compounding errors" [12:02]; "20 steps is going to be something like 36% reliable" [12:33]; "agents…work well autonomously in short bursts" [13:28]; "verifier models that check each step" [13:19] |
| stale-vs-v3 | AFFIRM/PARTIAL · build=absent |
| weight_tier | spine |
| status | promote (0.95^n = analogy-only) |

---
**Cluster 7 — Capability limits are time-dependent → autonomy tied to versioned evidence (the master law)**
| field | content |
|---|---|
| concept | The myths "either used to be true or may be true in future" — capability boundaries move. |
| OMNI meaning | Don't hard-code "agents can never do X" / "this model is safe for Y forever" / "long context always fails after Z." Tie every capability to model/version + runtime + eval suite + context strategy + consequence tier + observed performance + expiration/review → `capability_evidence_epoch` ("autonomy is earned by current evidence and expires when the system/environment changes"). MASTER LAW: the 5 myths collapse to **"do not infer system assurance from model theater"** — the system needs source evidence + runtime trace + verification + authority + state inspection + outcome observation. |
| why | The governance frame that keeps OMNI's capability profiles honest + current. |
| downstream homes | **§C capability topology** · **Build-OS (versioned eval validity) + model-change review** · **thesis §A/§B (master law)** |
| source anchors | "they are myths for a reason they either used to be true…or…will be true in the future" [13:49] |
| stale-vs-v3 | PARTIAL · build=absent |
| weight_tier | spine (governance) |
| status | promote |

---

**B. Net-new primitives (dedup vs baselines + waves 2/3/4 + 215/227/271)**
- `epistemic_challenge_event` / `challenge_verification_route` + `answer_revision_reason` — thin net-new (challenge triggers a defined verification route + revision provenance). → promote.
- `sycophancy_resistance_policy` + `answer_stability_under_challenge_eval` — net-new GUARDRAIL + eval type (correct answers shouldn't collapse under user doubt). → promote to guardrail digest + Build-OS.
- `refusal_calibration_profile` + `unsupported_claim_state` — **SHARPEN** capability + `source_authority_map`.
- `reasoning_budget_profile` + `inference_cost_envelope` — **SHARPEN** inference-lane/runtime-budget (271). → promote.
- `multi_evidence_synthesis_eval` / `context_join_eval` — net-new eval family (long-context reconciliation, not needle). → promote-after-dedup.
- `context_window_noncanonical` — **AFFIRM** (context ≠ truth store).
- `trajectory_risk_profile` / `verification_checkpoint_policy` / `semantic_commit_barrier` / `autonomy_burst_limit` — **SHARPEN** Agent Runtime (checkpoints at semantic boundaries; short-burst autonomy).
- `verifier_independence_profile` — **SHARPEN** 215 (verifier must be independent + inspect state).
- `capability_evidence_epoch` — net-new governance sharpening (autonomy tied to versioned evidence; ties 275 model-change review).
- `decision_evidence_summary` / `rationale_projection` — **SHARPEN** Surface/Polaris (expose decision structure, not narrated cognition).
- REJECT-as-doctrine: global hallucination rate; "ask again" = verification; visible CoT as audit; the 0.95^n formula as a reliability score; human-review-every-N-steps; verifier-as-independent-authority; today's limits as permanent; hallucination as the only failure category.

**Net-new verdict: ~0 net-new DOMAIN objects; several genuine net-new POLICIES/guardrails/eval-families** (`epistemic_challenge_event`/`answer_revision_reason`, `sycophancy_resistance_policy`+`answer_stability_under_challenge_eval`, `reasoning_budget_profile`, `multi_evidence_synthesis_eval`, `capability_evidence_epoch`) + strong AFFIRMs (context≠DB, audit-observable-work, trajectory-risk, short-burst autonomy). All compose existing physics under one master law.

**C. Reread flags**
- Cluster 1 (challenge semantics) + Cluster 6 (trajectory-risk / semantic checkpoints) — reread when authoring CNS + Agent Runtime + Patient-CNS/Provider-workspace safety.
- Cluster 5 (context-router + `multi_evidence_synthesis_eval`) — reread with Context Router + Knowledge Reservoirs + D7.
- Cluster 7 master law + `capability_evidence_epoch` — reread when authoring §C capability profiles + model-change review (with 275).
- Metrics (3% hallucination, ⅔ inference, 30–60pt drop, 0.95^n) = directional watch, not planning constants (`GRD-039`).

**D. One-line hard read**
Full_semantic **AI-substrate spine-sharpening, ~0 net-new domain objects**: five myths collapse into one law OMNI must enforce everywhere — **apparent intelligence is not system assurance; never promote a visible model behavior into a system guarantee without independent evidence** — *OMNI must never confuse what the model appears to have done with what the system can prove actually happened.*

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

### Review 004 — semantic-fidelity restoration  ·  layer: `analysis_nonbinding`  ·  (append-only recovery; Review 003 NOT modified)
- reviewer: Opus (restoration subagent) · type: AI assistant · at: 2026-07-18 · purpose: recover Knox Review-001 nuggets dropped/flattened in Review 003 · binds nothing (GRD-036/GRD-044). Append-only — Review 003 NOT modified.

**Method.** TARGETED RESTORATION per Knox WAVE-5 semantic-restoration ruling (2026-07-18) + `EVRUN-2026-000006_..._nugget_preservation_restore_ledger.md` §1 (EVSRC-2026-000277). Read §3 Review 001 (Knox) in full + §3 Review 003 (Opus) + re-verified transcript anchors in §1. The 5 myths + 8 keeper policies are already faithfully preserved in Review 003; this pass recovers only the **care-relevant counterweights** that were dropped or flattened — chiefly the one-sided refusal doctrine, the failure-mode taxonomy, verifier/answer-stability crispness, and the named route-specific care metrics.

**Fidelity verdict: FAITHFUL-w/-MINOR** (matches restore-ledger §0 scorecard for 277). **Restored: 5** (2 omitted · 3 flattened). **Weight-change: YES** — the over-refusal counterweight is upgraded to a **GUARDRAIL (care safety)**; Review 003 carried the refusal-calibration doctrine one-sidedly (refusal as pure gain) with no over-refusal brake.

| # | restored insight (verbatim-ish ≤20 words) | source/R001 anchor | loss_type | why material | disposition | destination home | relation to prior registry concept | status |
|---|---|---|---|---|---|---|---|---|
| 1 | "An unnecessary refusal can delay care; refusal is not inherently safe — needs capability/context/consequence-aware calibration." | R001 §"What NOT to import" #3 "Refusal as inherently safe" + keeper; transcript "refusal calibration…I can't verify this" [1:57] | omitted | R003 refusal doctrine is one-sided (Cluster 2 treats refusal as pure safety gain); over-refusal is a real clinical-safety harm — highest-value 277 restore | **GUARDRAIL (care safety)** | `06` guardrail digest · Patient-CNS / Provider workspace · sharpens `refusal_calibration_profile` / `unsupported_claim_state` | counterweight to Cluster 2 `refusal_calibration_profile` (adds the missing over-refusal brake) | propose |
| 2 | Failure modes beyond hallucination: "harmful-but-factually-correct action" + "silent failure." | R001 §16 "Hallucination as the only AI failure category" [1414–1415] | omitted | R003 Cluster 6 trajectory-risk lists no failure taxonomy; silent failure + harmful-but-correct action are care-critical (each step correct, outcome harmful) | SHARPEN | Agent Runtime `trajectory_risk_profile` · Build-OS eval failure-mode set | sharpens Cluster 6 `trajectory_risk_profile` | propose |
| 3 | "Repetition is not independence" — rerunning the same model/context is not independent verification. | R001 §8 keeper [565] + keeper-doctrine [1319]; transcript "are you sure" [0:29], "verifier models" [13:19] | flattened | R003 kept `verifier_independence_profile` label but dropped the crisp keeper; sharpens answer-stability + verifier-independence doctrine | SHARPEN | Build-OS `answer_stability_under_challenge_eval` · `verifier_independence_profile` | sharpens Cluster 1 `answer_stability_under_challenge_eval` + Cluster 6 `verifier_independence_profile` | propose |
| 4 | Route-specific CARE metrics: "false-reassurance rate, missed-escalation rate" (not generic "workflow-specific"). | R001 §7 route-specific metrics list [535–536]; transcript "~3% hallucination" [3:35] | flattened | R003 collapsed the named care metrics into generic "reliability is workflow-specific," losing the two most care-load-bearing safety metrics | SHARPEN | Care Prove/Learn · Build-OS eval metrics · Patient-CNS safety | sharpens Cluster 2/4 "reliability is workflow-specific" | propose |
| 5 | "Dual control for the highest-consequence transitions" (top rung of the verification ladder). | R001 §26 verification ladder [1078]; transcript "human in the loop" [13:02] / "verifier" [13:19] | flattened | R003 verification-ladder AFFIRM (215) dropped the dual-control top rung; highest-consequence transitions need two authorities, not one verifier/human | SHARPEN | Agent Runtime `verification_checkpoint_policy` · CNS · §A candidate→commit · `semantic_commit_barrier` | sharpens Cluster 6 `verification_checkpoint_policy` / `semantic_commit_barrier` | propose |

**One-line verdict.** Review 003 was anchor-clean and doctrinally faithful; the only material fidelity gap for 277 was a **one-sided refusal doctrine** — restored here as a care-safety GUARDRAIL — plus four SHARPENs (failure taxonomy, repetition≠independence, named care metrics, dual-control) that make the trajectory-risk / verification / refusal clusters care-complete. Nothing promoted (`GRD-036`); Review 003 untouched.

&nbsp;

⬆️⬆️⬆️  END Review 004  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000006` (ai-corpus wave-5) · concept_registry: `EVRUN-2026-000006_ai-corpus-wave-5_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000006_ai-corpus-wave-5_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `AI substrate/runtime (massive — reasoning_budget_profile; inference economics; refusal calibration) · Context Router (massive — context≠DB; multi_evidence_synthesis_eval) · Agent Runtime (massive — trajectory_risk; semantic checkpoints; short-burst autonomy; verifier independence) · Polaris/proof (audit observable work, not narrated CoT; decision_evidence_summary) · CNS (challenge routing; refusal→escalation) · §A candidate→commit · §C capability (capability_evidence_epoch) · Build-OS (answer_stability_under_challenge_eval) · Patient-CNS/Provider workspace (resist sycophantic reassurance)` · promotion: `watch → promote-candidate (~0 net-new domain objects; several net-new policies/guardrails/eval-families: epistemic_challenge_event, sycophancy_resistance_policy, reasoning_budget_profile, multi_evidence_synthesis_eval, capability_evidence_epoch); global hallucination rate / ask-again-as-verification / CoT-as-audit / 0.95^n-as-score rejected GRD-039`
- **Cross-source convergence:** AI-substrate master-law source atop **064/065** (test-time compute), **227** (long-context vs RAG), **215/271** (eval), **260/272** (trace ≠ narration). Pairs with **276** (Build-OS coding) + **269** (objective ≠ authority) + **270** (plurality but discipline of truth). Master law "apparent intelligence ≠ system assurance" reinforces the wave's plurality-with-governed-resolution spine. Folds into wave-5 registry as the AI-substrate/agent-reliability anchor.

## §5 — Change log
- `2026-07-14` — source file created (wave-5 scaffold; `EVRUN-2026-000006`).
- `2026-07-15` — Opus Review 003 formal deep extraction written into §3 (formalizing Knox Review 001); §0/§0.1 metadata filled (IBM · Martin Keen); file renamed `_TK` → `_ibm-5-ai-myths-apparent-intelligence-not-assurance`; §4 pointers filled (`EVRUN-2026-000006`); status → `analyzed`. Verdict: full_semantic AI-substrate spine-sharpening, ~0 net-new domain objects but several net-new policies/guardrails/eval-families; master law = apparent intelligence ≠ system assurance (don't infer assurance from model theater); metrics + 0.95^n rejected as doctrine (`GRD-039`).
- `2026-07-18` — Opus (restoration subagent) appended **§3 Review 004 — semantic-fidelity restoration** (Knox WAVE-5 semantic-restoration ruling; targeted restoration per restore-ledger §1). Fidelity FAITHFUL-w/-MINOR; restored 5 care counterweights (2 omitted · 3 flattened): over-refusal-is-not-safe (→ GUARDRAIL, care safety; weight-change), harmful-but-correct + silent failure modes, repetition≠independence, named route-specific care metrics (false-reassurance / missed-escalation), dual-control for highest-consequence transitions (all SHARPEN). Append-only — Review 003 / §1 / §0 NOT modified; PROPOSE-ONLY, nothing promoted (`GRD-036`/`GRD-044`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

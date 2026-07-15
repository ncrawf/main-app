# EVSRC-2026-000273 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-5 source (`EVSRC-2026-000273_langchain-agent-vocabulary-faq.md`); analyzed 2026-07-15 (`EVRUN-2026-000006`). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000273`  ·  filename: `EVSRC-2026-000273_langchain-agent-vocabulary-faq.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=kkL_y5t1jo4`  ·  source_title: `The LangChain Team Answers the Most Searched Questions About Agents`  ·  slug: `langchain-agent-vocabulary-faq`
- channel_or_org: `LangChain`  ·  speaker: `Amy + Sean (LangChain)`  ·  published_at: `2026-07-14`
- captured_at: `2026-07-14`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `vendor educational FAQ (agent vocabulary explainer + product overview)`  ·  source_reliability_context: `practitioner-vendor (LangChain) — useful for mainstream agent terminology + LangChain product framing; LOW authority for governance/healthcare/architecture boundaries`  ·  topic_tags_light: `[agent_definition, RAG, MCP, hallucination, agent_lifecycle, memory, human_in_the_loop, agent_evals, LangGraph, LangSmith, Deep_Agents, Fleet]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Amy` · role_in_source: `presenter / product educator` · affiliation_at_publication: `LangChain` · speaker_type: `vendor practitioner` · authority_context: `useful for how a major agent-tooling vendor explains public vocabulary; intentionally introductory + promotional (pivots to LangGraph/Deep Agents/Fleet/LangSmith).` · identity_confidence: `high (first name + affiliation)`
  - name: `Sean` · role_in_source: `presenter / product educator` · affiliation_at_publication: `LangChain` · speaker_type: `vendor practitioner` · authority_context: `co-host; eval advocate.` · identity_confidence: `medium (first name only)`
- publisher / channel: `LangChain (YouTube)`  ·  interviewer / moderator / host: `n/a (two-host FAQ)`
- event_context: `LangChain educational "most-searched-questions" FAQ video.`  ·  perspective / conflict notes: `promotional — back half maps concepts onto LangChain's commercial stack. Separate the generic vocabulary from the implied "one vendor's platform = the lifecycle." Vocabulary checksum, not architecture (GRD-039).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat (metadata in Knox read) · [x] **Knox strategic read → §3 Review 001** · [x] gut note → §3 Review 002 ("too basic for us")
**Agent (Opus) does:** [x] id+filename (renamed to firm slug) · [x] §0 metadata · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [~] update EVRUN concept registry (cross-source — folded at wave synthesis) · [x] update coverage matrix · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video


Chapters

Transcript
Search transcript
Search transcript
Chapter 1: Meet your hosts
0:00Human in the loop. Human in the loop. Hi, I'm Amy. And I'm Sean.
0:044 secondsToday we'll answer every question about agents, from what even is an agent, all the way to-- Will this thing eat my job? The internet has lots. We have answers.
0:1212 secondsLet's get into it.
0:1414 seconds[MUSIC PLAYING]
Chapter 2: What is an agent?
0:1818 secondsQuestion one. What is an agent? All right, good. So we got an easy one to start. I can take this one. OK. Honestly, people get confused about this all the time.
0:2727 secondsI kind of thought agent was just a marketing buzzword join me here. At its core, an agent is just an LLM running in a loop with the ability
0:3434 secondsto call tools. Think of those tools as functions. The model has a task to complete. So it picks a tool, looks at what comes back, and then either formulates a final response or decides it
0:4343 secondsneeds to call another tool. That loop, decide, act, reason, repeat. That's what makes an agent. Nice. What do you think? I think that makes sense.
0:5252 secondsYeah. All right, you get the next one. Question number two. What is RAG? So I would think
Chapter 3: What is RAG?
0:5959 secondsof retrieval augmented generation as giving the model an open book test instead of making it memorize everything.
1:051 minute, 5 secondsThe model was trained on, let's say, like public data so it doesn't have any context on your company docs, your customer history, or your internal knowledge base.
1:131 minute, 13 secondsWhat RAG does is it retrieves what's relevant, drops it into context right before the model answers. - Nice, that was a harder one, you did good. - Yeah.
1:221 minute, 22 seconds- All right, next one, maybe you won't get another easy one. What is MCP?
Chapter 4: What is MCP?
1:271 minute, 27 secondsOK, MCP or model context protocol, kind of like a USB-C cable for agents.
1:321 minute, 32 secondsBefore it, every tool connection was custom built for your agents. One integration per database, per API, per file system.
1:391 minute, 39 secondsMCP is a standard plug that any compliant model can use. You write the server once, you connect it to everything.
1:461 minute, 46 secondsIt's quickly become the default for how agents talk to the rest of the world. Why do agents hallucinate? Ooh. OK.
Chapter 5: Why do agents hallucinate?
1:531 minute, 53 secondsThat's a great question. I'd say technically it's the model that hallucinates, not the agent. LLMs are essentially glorified word guessers.
2:022 minutes, 2 secondsWhen that guess is wrong, it sounds just as confident as when it's right.
2:062 minutes, 6 secondsI think agents make this a little bit more dangerous because errors compound, and so one hallucinated fact in step two poisons step three, step four, and everything downstream, and the loop sort of just amplifies this mistake.
2:182 minutes, 18 secondsWhich is exactly why you can't just vibe check your agent and send it out into the world. You need to actually verify the agent knows what it's doing.
2:252 minutes, 25 secondsI use evals for that, and that's kind of the de facto way to do that. Yeah, evals are great. Next question, this one's a long one. What is the agent development lifecycle?
Chapter 6: What is the agent development lifecycle?
2:332 minutes, 33 secondsSo the agent development lifecycle is the process that agent engineers use to build and improve their agents. There are four phases.
2:432 minutes, 43 secondsYou can build it in code with a framework like Deep Agents, test it with real inputs and expected outputs, deploy it into production and monitor it with tracing and evals.
2:532 minutes, 53 seconds- Feel like we need this on a poster. - We literally have this on a poster. - I get the next question, 'cause it looks way shorter. What is memory?
Chapter 7: What is memory?
3:023 minutes, 2 secondsSee if I remember this one.
3:043 minutes, 4 secondsMemory is how agents hold onto information beyond a single run.
3:083 minutes, 8 seconds- Short term memory is your context window, basically everything in scope right now. For example, I remember what I had for breakfast this morning.
3:153 minutes, 15 seconds- Long term memory is what persists, things like user preferences, decisions from last week, facts that agents learned and need to carry forward.
3:233 minutes, 23 secondsFor example, I'm supposed to remember that my mom's birthday is in October every year.
3:273 minutes, 27 seconds(upbeat music) Next question, mine or yours? - I'll take this one. - Oh, confidence. - I don't know what it is yet. - We'll see, we'll see.
3:343 minutes, 34 secondsWhat is human in the loop? - I'm glad I don't have this one. - I should have given Sean this one.
Chapter 8: What does human in the loop really mean?
3:393 minutes, 39 secondsI would say that human in the loop is sort of a design pattern where the agent pauses and waits for a human to approve before sort of like taking the next action.
3:503 minutes, 50 secondsI think the best production agents use this very deliberately. Right?
3:533 minutes, 53 secondsSo like you'll let the agent handle the routine and you only interrupt for like a really high stakes action.
3:583 minutes, 58 secondsFor example, like, hey, Sean, is it cool if I upload this video to YouTube? Yeah. OK. Not bad. How about if I send this message on your behalf to Harrison?
4:094 minutes, 9 secondsProbably not.
4:114 minutes, 11 secondsI'd say the best teams sort of like shipping the best agents aren't really going for full autonomy on day one.
4:174 minutes, 17 secondsThey're sort of like building systems where humans and agents can divide the work very intelligently.
4:224 minutes, 22 secondsAll right, let's see. I'm getting the next one then. How do you evaluate an agent? Agent evals.
Chapter 9: How do you evaluate an agent?
4:294 minutes, 29 secondsAgent evals. This one's controversial. Guys, this one's spicy.
4:324 minutes, 32 secondsI'm obviously a big proponent of agent evals. One of the big reasons that we need different evals for agents than traditional software is with traditional software you can kind of expect certain outputs and certain inputs.
4:444 minutes, 44 secondsWith agents, that's very different. Right? The input can be all natural language.
4:484 minutes, 48 secondsAnd then even for the same input, you're not going to get the same outputs.
4:524 minutes, 52 secondsRight? So instead of testing for exact outputs, you're going to define what good looks like in your case. Yeah. Right?
4:594 minutes, 59 secondsYou can use like an LLM-as-judge to do that. It can test certain steps. Was it right without making something up?
5:055 minutes, 5 secondsYou're then going to build a data set of real world examples, stuff that tests your agent, like edge cases, and then run those tests every time you make a change to your agent to make sure you don't regress on any of those evals.
5:175 minutes, 17 secondsYeah, sure. Sean sounds like an expert.
5:205 minutes, 20 secondsAnd I think with evals, you want to make sure you run these continuously, not just before you ship.
5:245 minutes, 24 secondsEvery time you sort of tweak a prompt or you swap a model out, I think you want to immediately know if something has regressed.
5:325 minutes, 32 secondsI think the teams that really get this right treat evals sort of as a muscle.
5:355 minutes, 35 secondsYou build it early, you're running it constantly, because I think the alternative is like finding out your agent started recommending the wrong product three weeks ago from a customer complaint.
5:455 minutes, 45 secondsYeah. And that's a situation nobody wants to run into. Yeah, yeah. Getting close to the end. Chugging along. We're almost there. What is LangChain?
Chapter 10: What is LangChain, really?
5:525 minutes, 52 secondsOh, this is a good question. This is my favorite question. Oh, okay. Just say that. So LangChain started as an open source framework that actually predates ChatGPT.
6:026 minutes, 2 secondsWow. It's kind of crazy. We're really helping engineers sort of wrangle LLMs before most people have even heard of the word prompt.
6:086 minutes, 8 secondsAnd I think as the space kind of changed and we saw developers wanting to build more agents, we released LangGraph, which is an agent runtime and low-level orchestration framework.
6:186 minutes, 18 secondsBut since then we've evolved from just an open source framework. We're not really that anymore. We now serve the full agent development lifecycle.
6:256 minutes, 25 secondsThat's building, obviously, LangChain, LangGraph, Deep Agents.
6:286 minutes, 28 secondsWe talked about testing, which is like evals, regression testing, deployment, which is LangSmith deployments, right?
6:366 minutes, 36 secondsyour agent getting that runtime together, then monitoring, which is also sort of evals again. Those like testing, deployments, monitoring, that's all coming through LangSmith, which
6:456 minutes, 45 secondsis our platform for agent reliability, observability. Turns out building the agent is really fun. Super fun.
6:516 minutes, 51 secondsAnd kind of easy now, but actually keeping it from going completely sideways in production is the hard part. Super hard.
6:586 minutes, 58 secondsYeah. And people are sometimes less interested in learning about that, but it's way more important than having a little demo agent. How do you actually bring it to production?
7:067 minutes, 6 secondsSo more than, I think it's like 7,000 organizations, like some big names, NVIDIA, Bridgewater, Harvey, use LangSmith to ship these agents so they can actually hold up in production in front of their customers with their brand image on the line. Final question.
7:217 minutes, 21 secondsLast one. We're just getting into the flow of things. Guys, this is so fun. I don't want this to end. How do I get...
Chapter 11: How do I start building agents?
7:287 minutes, 28 secondsBut-- Oh, wow. The suspense is killing me. Started building agents. Oh, this is a great-- this is a great final question, actually.
7:357 minutes, 35 secondsIt's not-- It's an alien dolly question.
7:377 minutes, 37 secondsThe way I think about it is, if you're a developer who is, I'd say, pretty comfortable building agents, Deep Agents is the easiest way to start building agents.
Chapter 12: Deep Agents vs Fleet, which one to pick
7:467 minutes, 46 secondsIt has built-in task planning, file systems for context management. You can create sub-agents and long-term memory.
7:537 minutes, 53 secondsOr if you're brand new to building agents and you're not really comfortable or you don't want to get hands on with code, you could start building agents with Fleet.
8:008 minutesThat's our no code agent builder, where you build agents using natural language. You describe what you want, Fleet builds it for you. You can then share it across your entire team.
8:088 minutes, 8 secondsSo it's kind of cool, then.
8:098 minutes, 9 secondsIt's like kind of flexing a little bit, like look at this cool agent I just built.
8:128 minutes, 12 seconds- Either way, you can integrate your agent into LangSmith, which is our platform for testing, deploying, and monitoring agents.
8:208 minutes, 20 seconds- Yeah, great.
8:218 minutes, 21 secondsI mean, as we cover that's way more important than actually building the agent.
8:248 minutes, 24 seconds- And I think with LangSmith, you can actually identify where decisions went wrong, what your agent was reasoning.
8:298 minutes, 29 secondsYou can use these evals that Sean's super excited about to measure agent performance and also validate your improvements before shipping.
8:368 minutes, 36 secondsBut I think the best part is that LangSmith actually works with any framework or model you choose. Oh, so it's not just LangChain. It's not just Deep Agents. It's not just Fleet.
8:448 minutes, 44 secondsAnything. Yeah. I mean, we could get them to try out both. Because? See what they think. All right. Links to both are in the description below.
8:528 minutes, 52 secondsTry them out and tell us which one works best for you.
8:548 minutes, 54 secondsThanks for joining the LangChain team on answering the web's most searched questions about agents.
Chapter 13: Where to learn more
8:598 minutes, 59 seconds- If you wanna learn more about any of the topics we covered today, check out LangChain Academy for full length courses starring yours truly and other LangChain educators.
9:089 minutes, 8 seconds- Bye for now.



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

source_platform: YouTube · source_url: https://www.youtube.com/watch?v=kkL_y5t1jo4 · source_title: The LangChain Team Answers the Most Searched Questions About Agents · channel_or_org: LangChain · speaker: Amy and Sean · published_at: 2026-07-14 · captured_at: 2026-07-14 · capture_method: YouTube screenshot + pasted full transcript · content_type: vendor educational FAQ / agent vocabulary explainer / product overview · source_reliability_context: practitioner-vendor; useful for mainstream agent terminology and LangChain’s product framing, low authority for governance, healthcare, or architecture boundaries · topic_tags_light: [agent_definition, RAG, MCP, hallucination, agent_lifecycle, memory, human_in_the_loop, agent_evals, LangGraph, LangSmith, Deep_Agents, Fleet]

2. People / authority context
Amy and Sean

role_in_source: presenters / product educators · affiliation: LangChain · speaker_type: vendor practitioners · identity_confidence: high for first names and affiliation; surname not established for Sean from supplied material

Authority context: useful for understanding how a major agent-tooling vendor currently explains the standard public vocabulary:

agent;
retrieval-augmented generation;
MCP;
hallucination;
agent development lifecycle;
memory;
human-in-the-loop;
evaluation;
runtime and observability tooling.

The source is intentionally introductory and promotional. It compresses each concept into a memorable analogy or rule of thumb. That makes it useful as a vocabulary checksum and onboarding source, not as a source of enterprise-grade architecture.

Conflict / perspective notes: the back half transitions directly into LangChain’s commercial stack—LangGraph, Deep Agents, Fleet, and LangSmith. The broad concepts should be separated from the implied conclusion that one vendor’s platform constitutes the lifecycle itself.

3. Suggested processing

priority: 2.6/5

depth: semantic-light

EVRUN needed?: yes, compact

promotion posture: vocabulary | onboarding/explanation | convergence receipt | vendor-watch

Duplicate / sibling relationship

This source is overwhelmingly a synthesis of concepts already treated more deeply elsewhere:

Agent definition / looping tool use — covered throughout the Agent Runtime corpus.
RAG and context routing — covered by the Context Router, Knowledge Reservoirs, Intelligence Foundry, and agent-ready data sources.
MCP — covered extensively as a replaceable connectivity rail, not governance.
Memory — directly inferior in depth to the IBM four-memory source and the current Agent Runtime capture.
Human-in-the-loop — directly inferior to the IBM HITL/HOTL/HOOTL source and OMNI’s human-steering architecture.
Evals — directly inferior to Harbor/LangSmith, Chime risk-eval, Rippling EDD, and the closed-loop assurance corpus.
Lifecycle — broadly affirms Build → Test → Deploy → Monitor, but adds little to OMNI’s E&V → Release Operations → Runtime Operations separation.

The current OMNI runtime capture already distinguishes working, procedural, semantic, and episodic memory, along with their authority, provenance, expiration, and scope requirements. It also models human control as approve, reject, edit, pause, cancel, resume, transfer, takeover, and independent verification—not merely “pause for approval.”

Likely landing zones
Agent Runtime glossary / onboarding — major
AI substrate explanatory vocabulary — medium
Build-OS lifecycle explanation — medium
Context Router / RAG explanation — minor-medium
Connector Gateway / MCP explanation — minor-medium
Human-steering architecture — minor, mostly contrast
Evaluation doctrine — minor, convergence only
Thesis v4 — no meaningful delta
Product education / enterprise sales explanation — medium
4. The strategic read
Classification

Useful public-vocabulary synthesis; low architectural novelty.

This source should not be mined aggressively for new primitives.

Its value is that it places several agent concepts beside one another and reveals the default industry mental model:

agent
= LLM loop + tools

RAG
= retrieve relevant information into context

MCP
= standard tool connection

memory
= information retained beyond one run

HITL
= pause before consequential action

evals
= define good, test examples, monitor regression

agent lifecycle
= build → test → deploy → monitor

That model is directionally useful and radically insufficient for OMNI.

Core takeaway

The keeper is: the public agent vocabulary has stabilized, but every term remains under-specified for a governed care substrate.

The source is best used as a test:

Can OMNI explain exactly what it adds to each of these generic definitions?

If not, v4 is still describing agent products rather than enterprise-grade agent physics.

OMNI translation
1. “An agent is an LLM in a loop with tools” is a useful minimum definition—not a production definition

The presenters define an agent as an LLM repeatedly deciding, using tools, observing results, and continuing until it returns an answer.

That is a clean explanation for a beginner.

For OMNI, an operational agent is closer to:

model
+ objective
+ identity
+ runtime profile
+ scoped context
+ memory policy
+ skills
+ governed capabilities
+ credentials
+ budgets
+ stopping rules
+ human-steering modes
+ trace and evaluation requirements
+ authority envelope

An LLM loop with a function is merely the generative core.

Without the rest, the system cannot answer:

Who is acting?
On whose behalf?
Against which patient, operator, or tenant?
For what purpose?
With what permission?
With which version of context?
Under what cost and time budget?
What can it propose?
What may it commit?
When must it stop?
Who remains accountable?

Keeper:

The loop makes it agentic. Identity, scope, authority, and proof make it operable.

2. The decide–act–observe loop does not replace OMNI’s governed loops

The source’s agent loop is:

decide → act → observe → repeat

OMNI should not confuse this with its constitutional operating models.

The agent loop describes how one computational actor iterates.

It does not replace:

Care’s Sense → Governed Resolution → Plan/Commit → Act/Fulfill → Prove/Outcome/Learn;
Platform’s engineering, release, and runtime operations;
Accountability’s obligation, breach, remedy, and proof structure;
domain state machines;
durable business or care workflows.

The agent may participate inside those loops. It does not own them.

Keeper:

Agent iteration is an execution technique, not the operating model of the enterprise.

3. RAG is an “open-book test,” but the quality of the book and the right to open it are the real problem

The source defines RAG as retrieving relevant internal information into context immediately before generation.

That is useful beginner language.

OMNI’s architecture must answer several additional questions:

Which source is authoritative for this field?
Is the information current?
Has it been superseded?
Is it evidence, interpretation, adopted memory, or committed truth?
Does this actor have permission to retrieve it?
Is the purpose allowed?
Can patient or operator context cross the federation boundary?
Is the retrieved material trustworthy enough to affect action?
Must conflicting sources remain visible?
What was omitted?

OMNI’s existing posture is already stronger: RAG is one possible access strategy among keyword, vector, graph, hybrid, reranked, long-context, cached, and dynamic retrieval. Embeddings and indexes are access paths over governed truth—not new truth stores.

Keeper:

RAG opens the book. OMNI determines which book, which page, whose authority, and whether the reader is allowed to use it.

4. RAG, durable memory, and compiled knowledge must remain distinct

The source’s simplified vocabulary can encourage teams to call any information supplied to a model “memory.”

OMNI needs the separation:

retrieval finds relevant material for the current task;
working memory is the active run context;
semantic memory preserves durable attributed knowledge;
procedural memory stores how work should be performed;
episodic memory preserves selected learning from prior runs;
Clinical Memory is an authoritative care-specific construct governed by adoption rules;
Knowledge Reservoirs / compiled knowledge are durable projections over preserved evidence;
domain truth remains in its owner.

The Intelligence Foundry work already distinguishes query-time retrieval from durable compilation and gated promotion into canon.

Keeper:

Retrieved context is not automatically memory; memory is not automatically truth.

5. “MCP is USB-C for agents” is memorable and architecturally dangerous if taken literally

The source describes MCP as a standardized plug connecting agents to databases, APIs, and filesystems.

The analogy is good for interoperability.

It omits nearly everything that matters once the connection carries PHI, money, prescriptions, patient communications, or write authority.

MCP does not inherently determine:

caller identity;
delegated identity;
patient or tenant scope;
permitted purpose;
consent;
read versus write authority;
credential custody;
field-level visibility;
tool health;
transaction semantics;
rate and cost limits;
idempotency;
audit;
revocation;
liability;
whether the result may become committed truth.

OMNI’s existing posture is correct:

Use MCP for integration. Do not trust MCP as governance. Wrap it behind OMNI identity, permission, audit, and federation rules.

Keeper:

MCP standardizes the plug. OMNI governs the electricity, appliance, user, permission, and consequence.

6. Standard connectivity increases the need for governance

The easier it becomes to attach tools, the easier it becomes to create:

excessive access;
tool sprawl;
duplicated capabilities;
hidden write paths;
unreviewed connectors;
cross-tenant leakage;
stale credentials;
unclear accountability.

MCP’s success does not diminish OMNI’s role. It strengthens the need for:

Connector Gateway;
tool and connector registry;
capability envelopes;
short-lived credentials;
risk tiers;
per-call authorization;
health and kill switches;
trace lineage;
replacement and exit policy.

Keeper:

Connectivity becoming universal makes authority more valuable, not less.

7. The hallucination section identifies compounding error correctly

The presenters make an important distinction: technically the model hallucinates, but agent loops make the failure more dangerous because one incorrect intermediate claim can contaminate every downstream step.

This is stronger than the ordinary “chatbots can be wrong” warning.

An agentic error can become:

false assertion
→ wrong entity or plan
→ wrong tool call
→ changed external state
→ misleading memory
→ future action based on the corrupted state

In care, the danger is not merely an inaccurate final sentence.

It is the transition from generated error to:

unauthorized retrieval;
incorrect patient association;
false escalation;
missed escalation;
incorrect scheduling;
wrong communication;
corrupted memory;
financial or clinical action.

OMNI’s response must include:

candidate≠commit;
source grounding;
typed tool results;
deterministic checks where possible;
authority gates;
bounded iterations;
error containment;
rollback and reconciliation;
refusal to persist unverified inference as memory.

Keeper:

Agentic error is dangerous because it becomes state, action, and future context.

8. “Do not vibe-check the agent” is correct, but evals alone are not verification

The source says agents require genuine evaluation rather than informal demo inspection.

That is fully aligned with OMNI.

But the source then compresses verification into “use evals.”

OMNI needs several different kinds of assurance:

deterministic verification;
invariants and property checks;
policy and safety evaluation;
retrieval grounding evaluation;
tool-call evaluation;
trajectory evaluation;
stochastic repetition;
human expert review;
dual control;
production monitoring;
outcome evidence.

A model-generated judge is one instrument within this system.

Keeper:

Do not replace vibes with one score and call the problem solved.

9. Build → Test → Deploy → Monitor is useful, but incomplete for OMNI

The source’s four-stage agent lifecycle is:

build → test → deploy → monitor

This is useful as an introductory lifecycle.

OMNI’s enterprise lifecycle needs a larger control structure:

define objective and owner
→ build under governed source base
→ validate and evaluate
→ authorize release
→ deploy
→ operate
→ observe traces, outcomes, and drift
→ remediate
→ learn through governed promotion
→ retire or replace

It also needs the ownership separation already emerging in OMNI:

Build-OS governs how work is built;
Engineering & Validation proves candidate readiness;
Release Operations decides promotion and rollout;
Runtime Operations maintains desired behavior;
domains retain business and care truth;
Accountability handles breached duties and remedy.

Keeper:

An agent lifecycle is not complete until ownership, release authority, runtime health, remediation, and retirement are explicit.

10. The source’s short-term versus long-term memory model is too coarse

The source defines:

short-term memory as the current context window;
long-term memory as persistent preferences, prior decisions, and facts.

That is a beginner-friendly distinction and a dangerous production abstraction.

It collapses fundamentally different information:

preference;
fact;
policy;
instruction;
prior decision;
prior output;
observed behavior;
inferred habit;
clinical memory;
episodic lesson.

OMNI’s current runtime model properly separates:

working memory;
procedural memory;
semantic memory;
episodic memory.

It also states that conversation history is not durable memory by default, episodic memory should not be raw transcript dumping, semantic memory must remain source- and freshness-aware, and agent memory never silently writes clinical truth.

Keeper:

“Long-term memory” is not a storage class. It is a governance problem hidden behind one label.

11. “Facts the agent learned” is especially dangerous language in healthcare

The source casually includes “facts the agent learned” as long-term memory.

OMNI must ask:

Learned from whom?
Was the source authoritative?
Was it an observation or inference?
Was it contradicted?
Was it clinically adopted?
Is it still current?
Does the patient know it is stored?
May it influence care?
Can it be corrected or forgotten?
Is it scoped to this patient, operator, or purpose?

A model’s prior output is not a fact merely because it survived across sessions.

Keeper:

Persistence does not upgrade an inference into a fact.

12. The source’s HITL definition captures one interaction mode, not human authority architecture

The presenters define human-in-the-loop as pausing the agent before a human approves the next action. They recommend allowing routine work to proceed while interrupting humans for high-stakes actions rather than pursuing full autonomy immediately.

This is directionally strong.

But OMNI needs to distinguish:

human review;
human authority;
human correction;
human information supply;
human selection among options;
human notification;
human monitoring;
human takeover;
independent verification;
emergency action with post-review.

The current Agent Runtime capture already recognizes these distinct steering and authority modes and explicitly rejects reducing HITL to “click approve on every tool call.”

Keeper:

Human involvement is not one approval button.

13. “High stakes” is not sufficient to determine when humans enter the loop

Consequences matter, but the gating question is broader:

Is human authority legally or professionally required?
Has authority been predelegated under policy?
Is the action reversible?
Is the context complete?
Is the agent uncertain?
Is the task novel?
Is the affected person able to consent?
Is independent verification available?
What is the harm of delay?
What happens if no human is available?

Some apparently routine actions still require human authority.

Some high-consequence actions may need immediate automated safety behavior followed by human review.

Keeper:

Interrupt policy should follow authority, uncertainty, reversibility, and consequence—not consequence alone.

14. The strongest HITL line is the division of labor, not approval theater

The source says the best systems intelligently divide work between humans and agents rather than chasing total autonomy on day one.

That is the correct strategic posture.

The useful division is not:

AI does everything;
human rubber-stamps.

It is more like:

AI

gathers;
retrieves;
compares;
drafts;
monitors;
simulates;
proposes;
flags;
prepares evidence.

Human or domain authority

resolves ambiguity;
supplies judgment;
accepts responsibility;
commits consequential truth;
handles exceptions;
authorizes irreversible action.

Deterministic systems

validate invariants;
perform transactions;
preserve lineage;
enforce state transitions;
execute scheduled obligations.

Keeper:

The target is intelligent division of responsibility, not maximum autonomy.

15. The evaluation section affirms continuous closed-loop assurance

The source recommends:

defining what good means for the use case;
building datasets from real examples and edge cases;
evaluating every meaningful prompt or model change;
continuing evaluation after deployment;
detecting regressions before customers discover them.

This strongly affirms OMNI’s existing eval posture.

The broader enterprise corpus has already converged on:

production traces → regression dataset → CI/CD gate → online evaluation → drift detection

with simulation before production and LLM judges treated as evidence rather than authority.

No new primitive is needed here.

16. “Define what good looks like” immediately raises the authority question

The source presents this as an evaluation-design task.

OMNI must ask:

Who is entitled to define good?

Depending on the behavior, it may be:

a clinical domain owner;
patient or caregiver;
legal/compliance;
operator policy owner;
product owner;
security;
finance;
professional standard;
public regulation.

The AI engineering team should not silently define the rubric for:

appropriate clinical escalation;
informed refusal;
unauthorized advice;
patient burden;
safe medication behavior;
financial fairness.

Keeper:

The evaluator can measure the rubric. The rightful owner must author the rubric.

17. LLM-as-judge is useful and remains subordinate evidence

The source recommends LLM judges for assessing natural-language outputs and intermediate behavior.

That is appropriate for:

scalable triage;
rubric application;
pairwise comparison;
failure categorization;
semantic scoring;
identifying cases for human review.

It is not sufficient as final authority for:

clinical correctness;
compliance;
consent;
legal obligation;
safety-critical release;
domain commit.

OMNI’s current runtime laws already state:

pass is evidence, not authority;
no eval, no autonomy;
rigor scales with consequence;
LLM-as-judge is evidence and triage, not compliance authority.

Keeper:

The AI judge is a review instrument, not the court.

18. The source correctly says production reliability is harder than building the demo

The presenters say building an agent has become comparatively easy; keeping it from going sideways in production is the difficult and more important work.

This is probably the source’s strongest nontechnical strategic line.

It affirms that OMNI’s durable work is not:

one impressive chatbot;
one agent demo;
one clever prompt;
one framework choice.

It is:

identity;
authority;
context quality;
tool governance;
memory integrity;
observability;
evaluation;
release;
runtime health;
incident response;
outcome learning.

Keeper:

The demo proves possibility. Runtime governance proves product.

19. LangChain’s product stack should remain replaceable infrastructure

The source maps its concepts to:

LangGraph as runtime and orchestration;
Deep Agents as coded agent construction;
Fleet as no-code construction;
LangSmith as testing, deployment, and monitoring.

OMNI should evaluate these products where useful.

It should not encode them into the constitutional architecture.

The correct posture remains:

tools are replaceable;
gateways are stable;
OMNI owns domain truth, authority, custody, context, federation, and care/business action rules;
vendor tools plug into explicit gateways with defined authority, evidence, evaluation, and exit paths.

Keeper:

Use the platform; do not let the platform become the ontology.

20. “LangSmith shows what the agent was reasoning” should not be imported literally

The source implies that trace inspection can reveal where decisions and reasoning went wrong.

Operational traces can reveal:

prompts and supplied context;
outputs;
tool calls;
state transitions;
intermediate artifacts;
approvals;
model metadata.

They should not be described as reliable access to hidden internal chain of thought.

OMNI needs observable-work lineage, not a claim that private model reasoning has become authoritative or inspectable truth.

Keeper:

Trace observable work and decision inputs; do not mythologize model introspection.

Where it lands
Agent Runtime glossary / onboarding — major

Good beginner definitions that OMNI can sharpen into production-grade definitions.

AI substrate — medium

Affirms the standard stack of model, tools, context, memory, human control, evaluation, deployment, and monitoring.

Context Router / Knowledge Reservoirs — medium

Useful contrast between generic RAG and OMNI’s governed context architecture.

Connector Gateway / Federation — medium

MCP analogy is useful for explanation, provided it is immediately paired with governance.

Build-OS / E&V / Release / Runtime — medium

The lifecycle and continuous-eval statements support existing architecture but do not change it.

Human steering — minor-medium

Affirms selective human intervention but is too narrow to define the control model.

Thesis v4 — minor

At most, this source can help create enterprise-readable explanatory language. It should not alter constitutional doctrine.

Doctrine / primitive pressure

Mostly deduplication candidates:

agent_definition_minimum
agent_loop
agent_error_compounding
authority_interrupt_policy
continuous_agent_assurance
public_agent_vocabulary_map
agent_lifecycle_projection
vendor_neutral_agent_stack
Likely disposition
agent_definition_minimum → explanatory vocabulary, not primitive.
agent_loop → already foundational and generic.
agent_error_compounding → guardrail sharpening over cascading failure.
authority_interrupt_policy → existing human-steering and authority architecture.
continuous_agent_assurance → existing closed eval loop.
public_agent_vocabulary_map → potentially useful onboarding artifact, not substrate ontology.
agent_lifecycle_projection → explanatory projection over Platform/Build-OS ownership.
No genuine new mechanism identified.
Keeper doctrine
The loop makes a system agentic; governance makes it operable.
Agent iteration is an execution technique, not the enterprise operating model.
RAG opens the book; authority determines which book may be opened and trusted.
Retrieved context is not automatically memory, and memory is not automatically truth.
MCP standardizes connectivity, not permission or consequence.
Connectivity becoming universal makes authority more valuable.
Agentic error compounds because it can become action, state, and future context.
Do not replace vibe checks with one ungoverned score.
An agent lifecycle requires ownership, release authority, runtime health, remediation, learning, and retirement.
“Long-term memory” is a governance problem hidden behind one label.
Persistence does not upgrade an inference into a fact.
Human involvement is not one approval button.
Interrupt policy follows authority, uncertainty, reversibility, and consequence.
The target is intelligent division of responsibility—not maximum autonomy.
The rightful domain owner defines good; the evaluator applies the definition.
The AI judge is a review instrument, not the court.
The demo proves possibility. Runtime governance proves product.
Use vendor tooling; preserve OMNI’s doctrinal sovereignty.
Trace observable work—not imagined access to hidden reasoning.
What NOT to import blindly
1. Agent = LLM loop + tools as a complete definition

It omits identity, memory governance, authority, budgets, lifecycle, security, and proof.

2. RAG as the universal context strategy

OMNI needs task-dependent routing across multiple retrieval and compilation methods.

3. MCP as inherently safe interoperability

A common connector format does not supply consent, RBAC, federation, or clinical authority.

4. Short-term versus long-term as the complete memory taxonomy

This collapses facts, preferences, instructions, prior events, and authoritative care memory.

5. Anything persisted by the agent as a “learned fact”

Persistence requires provenance, review, scope, correction, expiration, and authority.

6. HITL as approval before a high-stakes action

Human involvement has multiple modes, and some actions require authority rather than mere review.

7. LLM-as-judge as sufficient evaluation

Judges inherit rubric errors, model biases, and blind spots. They remain evidence.

8. Build → test → deploy → monitor as full lifecycle governance

This omits release ownership, runtime failure handling, incident response, remediation, and retirement.

9. LangChain’s product categories as OMNI’s architecture

Vendor products can implement parts of the architecture. They do not define its boundaries.

10. Trace visibility as access to model reasoning

Operational evidence is valuable without pretending hidden reasoning is exposed or reliable.

Do-not-miss lesson

The source is a map of the public agent vocabulary. OMNI’s job is to add the missing enterprise physics—identity, authority, provenance, scope, memory governance, release discipline, and proof—to every term on that map.

Tiering tags per concept
Agent as LLM loop with tools

stale-vs-v3: AFFIRM · weight_tier: vocabulary · status: promote-as-minimum-definition

RAG as query-time context retrieval

stale-vs-v3: AFFIRM · weight_tier: vocabulary · status: promote-with-context-router-qualification

MCP as standardized connectivity

stale-vs-v3: AFFIRM · weight_tier: vocabulary · status: promote-with-governance-qualification

Compounding hallucination through agent steps

stale-vs-v3: AFFIRM · weight_tier: guardrail · status: promote-as-explanatory-line

Build–test–deploy–monitor lifecycle

stale-vs-v3: AFFIRM · weight_tier: vocabulary · status: promote-as-simplified-projection

Short-term / long-term memory

stale-vs-v3: STALE/PARTIAL · weight_tier: low-authority-watch · status: reject-as-complete-model

Selective HITL for high-stakes actions

stale-vs-v3: PARTIAL · weight_tier: vocabulary · status: promote-with-authority-precision

Define what good means and continuously evaluate

stale-vs-v3: AFFIRM · weight_tier: spine-confirmation · status: promote-as-convergence

LLM-as-judge

stale-vs-v3: AFFIRM · weight_tier: vocabulary · status: promote-only-as-evidence

LangChain product stack as full agent lifecycle

stale-vs-v3: ABSENT · weight_tier: vendor-watch · status: analogy-only

5. Hard read

Verdict: useful vocabulary source; low-signal for new architecture; compact semantic processing only.

This video is not bad. It does exactly what it intends to do: explain the mainstream agent stack quickly and memorably.

But almost every concept is simplified past the point at which OMNI could use it as doctrine.

Its strategic value is therefore comparative:

Public shorthand	OMNI-grade meaning
Agent = loop + tools	Identity-bearing runtime actor with scoped context, capabilities, budgets, authority, trace, and lifecycle
RAG = open-book test	Purpose-bound retrieval over provenance-, authority-, freshness-, and consent-aware sources
MCP = USB-C	Replaceable connectivity rail behind governed capability exchange
Memory = short and long term	Working, procedural, semantic, episodic, and domain-specific authoritative memory with promotion and forgetting
HITL = pause for approval	Multiple human steering and authority modes keyed to consequence, reversibility, policy, and uncertainty
Evals = define good and test	Owner-authored, risk-tiered, statistically sufficient, continuously operated evidence
Lifecycle = build/test/deploy/monitor	Governed build, validation, release, runtime, remediation, learning, and retirement

There is no credible net-new primitive here.

There is one useful reason to retain it:

It shows what customers, developers, investors, and less technical operators increasingly mean when they use these words.

OMNI should be able to speak that language while immediately clarifying the care-grade version.

Strongest OMNI line:

The industry has named the agent parts; OMNI must define the laws under which those parts are allowed to touch care.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

eh yea this is prbably too basic for us.. whatever...   

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-15` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

### Review 003 — Opus formal deep extraction (EVSRC-2026-000273)

**Read posture / tiering.** Formalizes Knox Review 001; concurs with Nick Review 002 ("too basic for us"). **Overall tier: semantic-light, vocabulary — 0 net-new; low architectural novelty.** A LangChain two-host FAQ defining the public agent vocabulary (agent / RAG / MCP / hallucination / lifecycle / memory / HITL / evals) then pivoting to LangGraph/Deep Agents/Fleet/LangSmith. Every term is simplified past OMNI-doctrine usability; each is covered deeper elsewhere (Agent Runtime corpus, Context Router, MCP-as-rail, IBM 4-memory, IBM HITL/HOTL/HOOTL, Harbor/Rippling evals). **Its ONLY durable value: a public-vocabulary map + a "what OMNI adds to each generic term" checksum** — if OMNI can't articulate its care-grade delta for each, v4 is still describing agent products, not agent physics. Dominant reality-check: **`doctrine=AFFIRM (as minimums) · build=partial`**.

**A. Concept clusters (condensed — vocabulary source)**

---
**Cluster 1 — Public agent vocabulary has stabilized but is under-specified for a governed care substrate (★ the only keeper)**
| field | content |
|---|---|
| concept | Industry defaults: agent = LLM loop + tools; RAG = open-book retrieval into context; MCP = "USB-C for agents"; memory = short-term (context window) + long-term (persisted); HITL = pause before high-stakes action; evals = define good + test + monitor regression; lifecycle = build→test→deploy→monitor. |
| OMNI meaning | Each is a useful MINIMUM and radically insufficient. The OMNI-grade deltas (the checksum): agent = identity-bearing runtime actor w/ scoped context + capabilities + budgets + authority + trace + lifecycle; RAG = purpose-bound retrieval over provenance/authority/freshness/consent-aware sources; MCP = replaceable rail behind Governed Capability Exchange; memory = working/procedural/semantic/episodic + Clinical-Memory w/ promotion + forgetting ("persistence ≠ fact"; "long-term memory" = a governance problem behind one label); HITL = many steering/authority modes keyed to authority×uncertainty×reversibility×consequence (not one approve button); evals = owner-authored + risk-tiered + statistically sufficient + continuously operated evidence (not one LLM-judge score); lifecycle = governed build→validate→release→operate→remediate→learn→retire w/ ownership separation. |
| why | Serves as an enterprise-legibility asset (speak the industry's words, then clarify the care-grade version) + a self-test for v4 completeness. |
| downstream homes | **Agent Runtime glossary/onboarding** · **thesis v4 (enterprise-readable explanatory language only)** · **product/sales education** |
| source anchors | "an agent is just an LLM running in a loop…call tools" [0:27]; "RAG…open book test" [0:59]; "MCP…USB-C cable for agents" [1:27]; "human in the loop…pauses and waits for a human to approve" [3:39] |
| stale-vs-v3 | AFFIRM (as minimums) · build=partial |
| weight_tier | vocabulary |
| status | promote-as-vocabulary-checksum |

---
**Cluster 2 — Two genuinely useful sharpenings (compounding error + "reliability is the hard part")**
| field | content |
|---|---|
| concept | (a) Agentic error compounds: "one hallucinated fact in step two poisons step three, step four, and everything downstream" — the loop amplifies. (b) "Building the agent is…easy now, but keeping it from going sideways in production is the hard part" — 7,000 orgs use LangSmith for production reliability. |
| OMNI meaning | (a) EXISTS-AS/SHARPEN candidate≠commit + error-containment: agentic error is dangerous because it becomes STATE + ACTION + future CONTEXT (unauthorized retrieval / wrong patient association / false or missed escalation / corrupted memory) → refuse to persist unverified inference as memory + bounded iterations + rollback/reconciliation. (b) AFFIRMS the thesis wager: the durable asset is identity/authority/context/tool-governance/memory-integrity/observability/eval/release/runtime-health/outcome-learning — "the demo proves possibility; runtime governance proves product." |
| why | The two lines worth keeping from a beginner FAQ; both AFFIRM existing spine. |
| downstream homes | **§A candidate→commit (error containment)** · **guardrail digest (compounding error)** · **thesis §B/§8 (runtime governance = product)** · **Build-OS** |
| source anchors | "one hallucinated fact in step two poisons step three, step four" [2:06]; "keeping it from going completely sideways in production is the hard part" [6:51] |
| stale-vs-v3 | AFFIRM · build=partial |
| weight_tier | guardrail / spine-confirmation |
| status | promote-as-explanatory-line |

---
**Cluster 3 — Vendor-stack + "trace shows reasoning" cautions (reject-as-doctrine)**
| field | content |
|---|---|
| concept | Maps concepts onto LangGraph (runtime) / Deep Agents (code) / Fleet (no-code) / LangSmith (test/deploy/monitor, "works with any framework"). Implies traces reveal "what your agent was reasoning." |
| OMNI meaning | REJECT-as-doctrine: don't encode vendor product categories into constitutional architecture (tools replaceable; gateways stable; OMNI owns truth/authority/custody/context/federation). "Trace shows reasoning" — reject literal: traces reveal observable work + decision INPUTS (prompts/context/outputs/tool-calls/transitions/approvals/metadata), NOT reliable access to hidden model chain-of-thought. "Trace observable work; don't mythologize model introspection." |
| why | Guards vendor-neutrality + prevents over-claiming trace introspection. |
| downstream homes | **§C (vendor-neutral rails)** · **observability doctrine** · **future-watch (vendor)** |
| source anchors | "LangSmith…platform for agent reliability, observability" [6:45]; "identify where decisions went wrong, what your agent was reasoning" [8:24] |
| stale-vs-v3 | ABSENT (as doctrine) · build=n/a |
| weight_tier | vendor-watch / no-op |
| status | reject-as-doctrine (analogy/vendor-watch only) |

---

**B. Net-new primitives (dedup)**

- `public_agent_vocabulary_map` / `agent_definition_minimum` — **onboarding/explanatory artifact, NOT a substrate primitive.** Potentially useful as an enterprise-legibility doc; do not mint as ontology.
- `agent_error_compounding` — **EXISTS-AS/SHARPEN: candidate≠commit + error-containment guardrail.**
- `authority_interrupt_policy` — **EXISTS-AS: human-steering architecture** (interrupt keyed to authority/uncertainty/reversibility/consequence, not consequence alone).
- `continuous_agent_assurance` / `agent_lifecycle_projection` — **EXISTS-AS: closed eval loop + Platform/Build-OS ownership separation.**
- REJECT: agent=loop+tools as complete def; RAG as universal strategy; MCP as inherently safe; short/long as complete memory taxonomy; "learned fact" persistence; HITL=approve button; LLM-judge as sufficient eval; build/test/deploy/monitor as full governance; LangChain stack as OMNI architecture; trace=reasoning access.

**Net-new verdict: ZERO net-new.** Value = public-vocabulary map + care-grade delta checksum + 2 AFFIRM sharpenings (compounding-error, runtime-governance-is-the-product). Concur with operator: too basic for doctrine.

**C. Reread flags**
- Use the Cluster-1 comparison table as an enterprise-legibility / onboarding checksum when writing v4 explanatory language — NOT as doctrine.
- Do NOT import any simplified definition as an OMNI primitive; each is covered deeper elsewhere (`GRD-039`).

**D. One-line hard read**
Semantic-light **vocabulary source, 0 net-new** (operator: "too basic"): the industry has named the agent parts — *OMNI's job is to define the laws under which those parts are allowed to touch care*; keep it only as a public-vocabulary map + a self-test that OMNI can state its care-grade delta for every term.

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000006` (ai-corpus wave-5) · concept_registry: `EVRUN-2026-000006_ai-corpus-wave-5_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000006_ai-corpus-wave-5_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Agent Runtime glossary/onboarding (public-vocabulary map) · thesis v4 (enterprise-legibility language only) · §A candidate→commit (agentic error compounding) · human-steering (interrupt policy) · §C (vendor-neutral rails) · Build-OS (runtime-governance-is-the-product)` · promotion: `watch → vocabulary/onboarding only (ZERO net-new; operator: too basic); vendor-stack + trace-as-reasoning rejected as doctrine (GRD-039)`
- **Cross-source convergence:** synthesis/duplicate of the Agent Runtime + eval + memory + HITL + MCP corpus (214/231/215/230/261/262/IBM sources). Companion to 271/272 (LangChain ecosystem). Folds into wave-5 registry as a vocabulary/onboarding checksum, not a spine input.

## §5 — Change log
- `2026-07-14` — source file created (wave-5 scaffold; `EVRUN-2026-000006`).
- `2026-07-15` — Opus Review 003 formal deep extraction written into §3 (formalizing Knox Review 001 + concurring with Nick Review 002); §0/§0.1 metadata filled (LangChain · Amy + Sean); file renamed `_TK` → `_langchain-agent-vocabulary-faq`; §4 pointers filled (`EVRUN-2026-000006`); status → `analyzed`. Verdict: semantic-light vocabulary source, ZERO net-new; value = public-vocabulary map + care-grade delta checksum + 2 AFFIRM sharpenings (compounding error; runtime-governance = product); vendor stack + trace-as-reasoning rejected as doctrine (`GRD-039`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

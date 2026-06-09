# EVSRC-2026-000062 — Ambient Agents and the New Agent Inbox ft. Harrison Chase

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1; Knox read in §3 Review 001. Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000062`  ·  filename: `EVSRC-2026-000062_langchain-chase-ambient-agents-agent-inbox.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=egSh4TxS5go`
- source_title: `Ambient Agents and the New Agent Inbox ft. Harrison Chase`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  series: `AI Ascent 2025`  ·  published_at: `2025-05-07`  ·  views_at_capture: `62,241`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `talk`  ·  source_reliability_context: `practitioner / founder-operator (agent frameworks — direct build relevance)`  ·  topic_tags_light: `[ambient_agents, event_driven_not_prompt_driven, agent_inbox, human_oversight_HITL, latency_requirements, interaction_patterns, scaling_ai_leverage]`

## §0.1 — People / authorship / authority context  *(filled from screenshot description)*
- primary speaker(s):
  - name: `Harrison Chase` · role_in_source: `speaker` · affiliation_at_publication: `LangChain (CEO/cofounder)` · speaker_type: `founder / practitioner (agent frameworks)` · authority_context: `**HIGH build relevance: introduces "ambient agents" — AI systems that operate continuously in the background responding to EVENTS rather than direct human prompts**; how they differ from traditional chatbots; **why human oversight (HITL) remains essential**; the **"agent inbox"** interaction pattern; latency requirements; how this could dramatically scale our ability to leverage AI. Companion to `EVSRC-2026-000059` (same author, context-engineering/long-horizon)` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `—` (AI Ascent talk)  ·  event_context: `Sequoia AI Ascent 2025`  ·  perspective / conflict notes: `LangChain CEO — framework-vendor lens. **VERY HIGH OMNI relevance: "ambient agents" = event-driven (not prompt-driven) background agents with human oversight + an "agent inbox" → maps almost directly onto OMNI's Sense loop, CNS event→candidate→escalation flow, HITL/HOTL gating, and a P5 "agent inbox / approval queue" surface. Strong §B + CNS + §A(authority/oversight) input.** Older (2025-05) but conceptually core. Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): LangChain CEO = high relevance on ambient/event-driven agents + oversight patterns; claims still route through evidence → interpretation → gated promotion. Pair with `EVSRC-2026-000059` for the Chase agent-architecture cluster.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] EVRUN needed? (yes — full_semantic; §B / CNS / Sense-loop / HITL — pair with 059) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️


Search in video
Intro
0:02
Everything we're about to talk about is
0:04
what's next. And the first person up
0:05
here is Harrison Chase, our very own
0:07
Harrison Chase, who's been at Every AIN.
0:10
He's been talking about agents longer
0:12
than anyone I know. We'd love to have
0:14
you come up here and talk about agents,
0:16
in particular, ambient agents, this new
0:18
concept that you guys at Langchain are
0:20
bringing to the
0:26
world. Thanks for that intro and excited
What are Ambient Agents
0:28
to be chatting. My name is Harrison,
0:29
co-founder CEO of Langchain. We build
0:32
developer tools to make it as easy as
0:33
possible to build agents. Um, a lot of
0:36
the agents that we've seen being built
0:38
so far are what I would call chat
0:40
agents. So, you interact with them
0:41
through a chat interface, send them
0:43
messages, they they run and respond and
0:45
and that's great. They're great for a
0:46
lot of purposes. But one of the concepts
0:48
that I'm really excited about is the
0:50
concept of ambient agents. So, what is
0:52
an ambient agent? The way that I like to
0:54
define an ambient agent is ambient
0:56
agents listen to an event stream and act
0:58
on it accordingly, potentially acting on
1:00
multiple events at a time. And so what
1:03
are the differences between this and
1:05
normal agents? So there's a few. One,
1:07
what are the trigger? So it's no longer
1:09
a human coming in and sending a message.
1:11
It's an event that happens in in in the
1:14
background. How many of these can be
1:16
running? With chat, you can usually only
1:18
interact with one agent at a time. Maybe
1:19
you open a few windows and you have a
1:21
few running at the same time, but it's
1:22
generally one. with ambient style agents
1:24
because it's listening to these events.
1:26
It's it's however many events are
1:27
happening in the background. So, it can
1:28
be a far bigger type of
Latency Requirements
1:31
number. Another interesting point is the
1:33
latency requirements around it. So, with
1:35
chat, you message, you expect some
1:38
response back pretty quickly or you get
1:39
bored and you go to another website or
1:41
something like that. Because these
1:43
ambient agents run in the background,
1:45
they're triggered by events. They can
1:46
run for a lot longer period of time
1:48
before you need a response in any shape
1:51
or form. So there's generally much less
1:53
strict latency requirements. And then
1:56
lastly, I think it's interesting to
1:57
think about the UX of these agents. So
1:59
for these chat agents, it's mostly chat
2:01
bots. That's a pretty familiar interface
2:03
by now. I think there's a little bit of
2:05
a question of how do you interact with
2:06
these agents that are in the background
2:09
because they they they are running
2:10
without you knowing that they're
2:11
running. But as I'll talk about in a
2:13
little bit, it's still really important
2:14
for you to interact with them in some
2:16
form.
Why Ambient Agents
2:18
So, just to make this concrete, an
2:19
example of an ambient agent could be an
2:21
email agent that listens to emails
2:23
coming in and acts on them accordingly
2:24
and maybe tries to respond or maybe
2:26
tries to schedule meetings or maybe
2:27
pings you or pings other people on the
2:29
team. So, that's kind of like a concrete
2:31
example of of one type of ambient agent
2:33
that we're seeing. So, why ambient
2:35
agents? I think they're interesting for
2:37
a few reasons. First, they let us scale
2:40
ourselves. So, if you interact with a
2:41
chat agent, it's generally onetoone.
2:43
You're doing one thing at a time. when
2:45
you have these ambient agents, there can
2:47
be thousands of them running in the
2:48
background. And so that just lets us
2:50
scale our impact a lot
2:53
more. Two, they can they can get at kind
2:55
of like more complex operations. So when
2:57
you're interacting with a chat agent,
2:59
it's generally because of the latency
3:01
requirements, it's generally a simpler
3:02
operation that it's doing. So you might
3:04
have the human send a message, it goes
3:05
to the the chatbot, the agent, it
3:07
responds right away. Maybe it calls a
3:09
tool, maybe two tools. The long more
3:11
tools it calls, the longer it takes to
3:13
run. can't do that with ambient agents
3:14
because you don't have this as strict
3:17
latency requirement. You can call a ton
3:19
of tools and do more and more complex
3:21
operations. You can add in other steps
3:22
as well. So you can add in explicit
3:24
planning or reflection steps and
3:26
generally build up the complexity of the
3:28
agents that you're
3:29
building. One thing that I really want
Interaction Patterns
3:31
to highlight is ambient does not mean
3:33
fully autonomous. So I still think it's
3:35
really important that we are able to
3:37
interact with these ambient agents. And
3:39
there's a few different interaction
3:41
patterns that we see people building
3:42
towards. So one is approving or
3:45
rejecting certain actions that these
3:47
agents want to do. If you want to have
3:49
an ambient agent that's potentially
3:51
giving refunds to customers who are
3:53
emailing in, definitely when it starts,
3:55
you're going to want to have a human in
3:56
there approving some of those things.
3:59
Second is a more uh advanced option of
4:01
this editing the actions that they do.
4:03
So maybe they suggest something you
4:04
don't want to approve or reject it, but
4:05
you want to explicitly edit it and have
4:07
it do that. Um, third, these agents can
4:10
get stuck kind of like halfway down and
4:11
so there should be an inability for you
4:13
to answer questions that they might
4:14
have, uh, just like you would answer
4:16
questions of a co-orker if they're
4:17
working on a deep problem or something
4:19
like that. And then fourth, because
4:21
these agents take a lot of steps, it
4:23
might be very useful for you to go back
4:25
to the 10th out of a hundred steps or
4:28
something like that, interact with it
4:29
there, modify what it's doing, give it
4:31
some feedback. And so this is what we
4:33
call time travel. and facilitating this
4:34
is a a cool new interaction pattern we
4:38
see. Um, so there's a few reasons that
Why is it important
4:41
having this human in the loop is
4:43
important. First, it just gives better
4:45
results. So, if you think about deep
4:47
research, which isn't exactly an ambient
4:50
agent, but it is a longunning agent,
4:51
there's a period of time up front where
4:53
it asks you some clarifying questions to
4:55
go back and forth, and that generally
4:57
helps produce way better results than if
4:59
it just went off whatever your initial
5:00
kind of like question or statement was.
5:02
And so having this human in the loop in
5:04
the form of deep research, asking these
5:06
clarifying questions, in the form of
5:07
ambient agents, there's there's
5:09
different types of patterns. This just
5:10
gets better results. It also helps build
5:13
more trust. Um, so if you're doing
5:15
explicit actions like giving giving or
5:18
sending payments or approving things,
5:19
having the human loop just builds more
5:21
trust. And then and then third, and this
5:23
is maybe the most subtle one, is I think
5:25
it it helps a lot with the memory of the
5:27
agent. So when I'm talking about memory,
5:29
I'm talking about learning from user
5:30
interactions. If you don't have the user
5:32
interacting with the agent, then there
5:34
are no user interactions to learn from.
5:36
Um, and so having this uh having this
5:38
human in the loop helps inform a lot of
5:42
the memory things that you want to be
5:43
building into the agent so that it can
5:44
do better in the future. And so with
5:47
this importance of uh the human in the
5:49
loop, I think it's interesting to think
5:51
about what a good UX for this might look
5:53
like. This is one thing that we've kind
5:55
of built as a prototype at Langchain,
5:57
which is the concept, we call it an
5:59
agent inbox. It's an inbox for your
6:01
agent to send things to. You can see
6:02
when it requires actions. You can see
6:04
some descriptions. If you click into a
6:06
row, you can then see a more detailed
6:08
description of of of what's going on,
6:10
what explicitly it wants approval for or
6:12
or whether you want to respond to it.
6:14
And there's a few different interaction
6:15
patterns here. Talking a little bit uh
6:18
very briefly about some of the things
6:20
that we're building that we think help
6:21
with this. We've paid a lot of attention
6:23
uh in Langraph, which is our agent
6:25
orchestration framework to make it good
6:27
at ambient agents. In particular, we've
6:29
paid a ton of attention to the
6:31
persistence layer that backs it. This
6:33
enables a lot of these human interaction
6:35
patterns because basically you can run
6:36
your langraph agent. You can stop at any
6:38
point in time. The entire state as well
6:40
as previous states are persisted. And so
6:42
then you can have the all the human and
6:44
loop interaction patterns. You can wait
6:45
for a second, a day, an hour, however
6:48
long, have the user come in, see the
6:50
state, modify it, go back to previous
6:52
states, things like that. Um, we're
6:54
spending a lot of time right now on
6:56
Lingraph platform as infrastructure for
6:59
running these agents. These agents are
7:00
often way more longunning. They're often
7:03
bursty because they're triggered by
7:04
events. So, you could get thousands of
7:05
events at a time. So, you need to be
7:07
able to scale up and they're flaky in
7:09
nature, not just because of typical
7:10
software things, but also because of
7:12
this human in the blue pattern. You want
7:13
to be able to correct mistakes. And then
7:16
finally, we're we're building Langmith
7:17
as well for these agents. They're really
7:19
long running. They can often mess up.
7:21
They're doing more complex things.
7:22
having visibility and observability into
7:24
what they're doing is really really
7:26
important. As a concrete example of
7:28
this, uh, one of the things that I built
7:31
on the side is an email agent. So, if
7:33
you've emailed me in the past, uh, year
7:35
or so, uh, it's it's drafted a response
7:37
or sent a calendar invite. It's still
7:39
human in the loop. I use the agent inbox
7:41
all the time. It's open source and on
7:43
GitHub. So, if you want to see how all
7:45
these components come together in what I
7:47
think is a pretty cool and unique and
7:49
hopefully uh glimpse of what's next, uh
7:52
I would encourage you to check it out.
7:54
And with that, I will hand it off.
7:58
[Applause]

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `Ambient Agents and the New Agent Inbox ft. Harrison Chase`  ·  visible_channel: `Sequoia Capital` (211K subs)
- visible_url: `youtube.com/watch?v=egSh4TxS5go`  ·  visible_published: `May 7, 2025`  ·  visible_views: `62,241`  ·  likes: `745`
- visible_description: *"LangChain CEO Harrison Chase introduces the concept of ambient agents, AI systems that operate continuously in the background responding to events rather than direct human prompts. Learn how these agents differ from traditional chatbots, why human oversight remains essential and how this approach could dramatically scale our ability to leverage AI."*
- chapters (visible): Intro · What are Ambient Agents · Latency Requirements · Why Ambient Agents · Interaction Patterns · Why is it important …
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_1.07.11_AM-09938801…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

This one is directly OMNI-core. It is not just another LangChain agent talk. This is basically a clean operating model for what we have been calling CNS event-driven orchestration.

The keeper line:

Ambient does not mean fully autonomous. Ambient means event-triggered, background-running, human-interruptible agents.

That distinction is huge for OMNI.

Core takeaway

Harrison defines ambient agents as agents that listen to an event stream and act on it accordingly, potentially across many events at once. They are different from chat agents because the trigger is not a human message; the trigger is an event happening in the background. They can run at larger scale, have looser latency requirements, perform more complex multi-tool operations, and still require human interaction patterns like approve/reject, edit, answer questions, or “time travel” back into prior steps.

For OMNI, that is basically:

source_event → orchestration_run → proposed action → human/domain/policy interaction → commit or no-op.

OMNI translation
1. This validates CNS as event-driven, not chat-driven.

OMNI should not be designed around “the user opens chat and asks the AI something.”

That is too small.

OMNI’s real triggers are events:

patient message received,
lab posted,
appointment canceled,
refill window opens,
intake submitted,
consent missing,
payment fails,
provider task overdue,
post-procedure check-in due,
evidence source updated,
security alert fires,
staff note entered,
patient’s caregiver adds context.

That is the CNS pattern. OMNI agents should wake up because the world changed, not only because a human typed into a box.

Doctrine line:

OMNI is event-driven before it is chat-driven.

2. Ambient agents fit OMNI’s “CNS candidate, not commit” doctrine perfectly.

Harrison is explicit that ambient does not mean fully autonomous. He lists interaction patterns: approve/reject, edit action, answer the agent’s question, or go back to a prior step and modify/redirect it.

That is OMNI’s safety model.

An ambient OMNI agent can:

notice something,
investigate,
gather context,
draft a response,
prepare a task,
propose a workflow action,
ask for missing info,
request approval.

But it does not automatically own truth or commit high-risk action.

Keeper:

Ambient agents propose and prepare; CNS/policy/humans/domains decide what may be committed.

3. Agent inbox is not a cute UI — it is a core OMNI surface.

LangChain’s “agent inbox” is a very important pattern: agents running in the background need a place to ask for approval, show what they need, request human input, and expose state.

OMNI needs this across roles:

provider inbox: clinical review needed,
front desk inbox: scheduling/payment/document mismatch,
operator inbox: workflow exception,
medical director inbox: safety/policy escalation,
build inbox: agent patch/proof/review needed,
patient inbox: clarification requested,
caregiver inbox: delegated input requested, if authorized.

This is not messaging. It is human-agent coordination infrastructure.

Doctrine line:

Every ambient agent needs a human-facing exception/review surface.

4. Persistence/time travel is directly relevant to care-grade audit.

Harrison says LangGraph persists the entire agent state and previous states so a human can come back after a second, hour, or day, inspect state, modify it, or go back to prior states.

That is massive for OMNI.

In care, we need to know:

what the agent saw,
what it inferred,
what it proposed,
where it paused,
who approved,
who edited,
what state changed,
what was committed,
what was not committed.

“Time travel” is not just UX. It is audit, correction, learning, and safety.

OMNI version:

Agent state must be persistent, inspectable, and correctable before commit.

5. Ambient agents are the right model for “many small care obligations.”

This source helps clarify a major OMNI design pressure.

Most care work is not one dramatic AI conversation. It is hundreds/thousands of background obligations:

check whether this lab returned,
see if this patient completed intake,
remind staff only if missing info matters,
detect whether an appointment change creates an entitlement issue,
prepare a follow-up summary,
watch for a post-procedure concern,
notice that a provider has not reviewed something,
route a patient reply into the correct queue.

Ambient agents are the right conceptual frame for that.

But they need prioritization. OMNI cannot create a thousand noisy “agent noticed something” alerts.

So CNS needs:

event importance scoring,
suppression,
batching,
escalation thresholds,
role routing,
review queues,
no-op logging.

Doctrine line:

Ambient scale requires suppression and prioritization, not just more background agents.

6. Human interaction improves memory — but memory must be governed.

Harrison notes that human-in-the-loop interaction improves agent memory because the agent gets feedback to learn from. Without user interactions, there is nothing to learn from.

For OMNI, this is both useful and dangerous.

Useful:

provider corrections improve future packets,
staff edits improve workflow automation,
patient clarifications improve communication,
operator approvals improve routing,
build reviews improve agents.

Dangerous:

feedback may be wrong,
local habit may conflict with policy,
provider preference may not equal clinical standard,
patient preference may not equal safe action,
memory can preserve stale assumptions.

So:

Ambient agents may learn from human interaction, but memory updates require scope, versioning, and authority labels.

7. This supports an “ambient CNS” layer, not random ambient bots.

The dangerous version is:

“Let a bunch of agents run in the background.”

The OMNI version is:

CNS owns ambient orchestration; agents are workers inside governed runs.

Ambient agents should not each have their own logic, memory, escalation, and action authority scattered around the product. They should be part of a unified CNS substrate:

source events,
orchestration runs,
action candidates,
role queues,
agent inbox,
policy gates,
domain APIs,
audit trace,
memory update policy.

That prevents bot sprawl.

Where it lands

CNS / Orchestration: massive. This is one of the cleanest external validations of OMNI as an event-driven orchestration brain.

Thesis §B — AI substrate: major. Ambient agents, persistence, memory, human feedback, background execution, long-running workflows.

Thesis §C — Governed Capability Exchange: major. Ambient agents need permissions, tools, approvals, and bounded action capabilities.

Messaging / Provider Tasks / Work queues: major. Agent inbox and exception surfaces should feed role-specific queues.

Build OS: major. Build agents can run ambiently on events like failed tests, stale docs, open review gates, or source ingestion backlog.

Product surface: major. OMNI should expose agent state and review needs, not hide background AI behind magic.

Doctrine / primitive pressure

Potential concepts worth routing:

ambient_agent
event_stream_listener
orchestration_run
agent_inbox
human_review_request
approve_reject_action
edit_agent_action
agent_question
time_travel_review
persistent_agent_state
previous_state_snapshot
ambient_agent_memory_update
event_burst_handling
agent_exception_queue
background_action_candidate
ambient_no_op_log
ambient_suppression_policy

Keeper doctrine:

OMNI should run ambient agents under CNS supervision: event-triggered, persistent, inspectable, human-interruptible, and commit-bounded.

What not to import blindly

Do not equate ambient with autonomous.

Do not let every event spawn noisy work.

Do not let ambient agents write directly into clinical truth.

Do not let background agents become invisible.

Do not let agent memory update silently from every human interaction.

Do not build separate ambient bots per feature. Ambient work belongs under CNS orchestration.

Do-not-miss lesson

Ambient agents are how OMNI scales attention, not how OMNI removes authority.

Sharper:

The future OMNI CNS listens continuously, but commits deliberately.

Priority / confidence

Priority: 5/5
Confidence: 5/5
Suggested analysis depth: full_semantic

This should feed CNS, §B, §C, Build OS, and product surface design. It gives language for something OMNI already wanted: not chatbots, not full autonomy, but background event-driven agents with human review, persistent state, and governed commit boundaries.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus deep-read extraction  ·  layer: `analysis_nonbinding`  ·  EVRUN-2026-000001 (★SPINE — ambient agents + agent-inbox; pairs 058/059/086/089)
- reviewer: `Opus` · type: `AI assistant` · at: `2026-06-09` · purpose: `formalize Review 001 → structured extraction → registry` · binds nothing (`GRD-036`/`GRD-044`) · [full agent extraction 02a10bce]

**20 clusters. Harrison Chase/LangChain — near-isomorphic validation of OMNI CNS Sense/Act + HITL exception-queue. Import orchestration physics not LangGraph stack. Keeper: ambient ≠ autonomous — event-triggered, background, human-interruptible; CNS listens continuously, commits deliberately.**
1. **`ambient_agent`** — CNS worker wakes on governed events (message/lab/consent-gap/payment-fail/evidence/alert), runs bounded orchestration, emits candidates — not chatbot default. §8(primary)/§7.6/§12 CNS(`event_stream_listener`)/§B/capability-topology/product. "ambient agents listen to an event stream" 0:56. PARTIAL→spine.
2. **`event_before_chat_doctrine`** — chat = narrow Act surface; primary CNS triggers = clinical/ops/financial/evidence events. §8/§B/§7.6/§7.7(chat=sync-takeover not primary)/product. "generally one-to-one… one thing at a time" 2:43. PARTIAL→spine.
3. **`ambient_not_autonomous` + `candidate_not_commit`** — investigate/draft/prepare/ask, don't auto-commit; source_event→run→proposed_action→interaction→commit|no-op. §A/§8/CNS/§C/security/domain-contracts. "ambient does not mean fully autonomous" 3:31. PARTIAL→spine.
4. **`background_execution` + `relaxed_latency_envelope`** — background runs tolerate long duration/many tools/explicit planning vs tight-SLO chat. §B/CNS(lifecycle/timeouts/DLQ)/§7.6/Build-OS/inference-budget-064. "much less strict latency requirements" 1:53. PARTIAL→spine.
5. **`multi_event_concurrency` + `event_burst_handling`** — run cardinality scales w/ event rate; care bursts (Mon-AM/lab-dumps); worker pools/backpressure/batching. §8/§7.6/§12 CNS/§10/Build-OS/product. "thousands of events… scale up" 7:05. ABSENT→spine.
6. **`ambient_suppression_policy` + `ambient_no_op_log`** — event importance scoring/suppression/batching/escalation-thresholds/role-routing + explicit no-op logging, else alert flood. §8/CNS/§A(interrupt_tiers 086)/§7.7/capability-topology/Messaging. "thousands… running in background" 2:47. ABSENT→spine.
7. **`agent_inbox`** — P5 cross-role HITL review/exception queue (not messaging); push review_required across provider/front-desk/operator/medical-director/build/patient roles. §7.7(primary)/§7.6 CNS/§A/capability-topology/Messaging/product/Build-OS. "we call it an agent inbox" 5:59. ABSENT→spine.
8. **`hitl_interaction_mode_taxonomy`** — five governed modes: approve/reject · edit-before-execute · answer-questions · mid-run intervention ("time travel" to step N). §A/§7.7/CNS(`approve_reject`/`edit_action`/`agent_question`/`time_travel_review`)/§C/security. "go back to the 10th of a hundred steps" 4:25. PARTIAL→spine.
9. **`explicit_approval_scope`** — each inbox item states exactly what approval requested (action candidate + envelope + risk tier); prevents vague "AI needs help." §A/§C/§7.7/CNS/domain-contracts/security. "what explicitly it wants approval for" 6:10. PARTIAL→spine.
10. **`persistent_agent_state` + `waiting_for_human`** — persist current+historical states; halt at any step awaiting human; tolerate return after sec/hour/day w/o TTL-auto-commit. CNS(persistence)/§7.6/§12/§A audit/Build-OS/security/domain-contracts. "current and previous states persisted" 6:40. ABSENT→spine.
11. **`time_travel_review`** — governed rewind/branch from step N (audit/correction/learning/safety), not UX gimmick or silent rollback. CNS/§A/§7.7/Build-OS(compensation)/security/KR(intervention lineage). "this is what we call time travel" 4:33. ABSENT→spine.
12. **`cns_owned_ambient` + `anti_bot_sprawl`** — CNS owns ambient orchestration; agents = workers sharing event-vocab/role-queues/gates/audit/memory-policy, NOT scattered per-feature bots. CNS(primary)/§7.6/§12/Build-OS/§6/capability-topology. (Knox) "don't build separate ambient bots per feature." PARTIAL→spine.
13. **`listen_continuous_commit_deliberate`** — thesis-§8 keeper line: Sense listens continuously; Act commits deliberately through gates; ambient scales attention never removes authority. §8(keeper)/§A/§7.6/§12/product/CNS. "still really important for you to interact" 2:14. PARTIAL→spine.
14. **`hitl_quality_and_trust`** — HITL improves results (clarifying Q&A) AND builds trust on commit-class actions; review queues = quality amplifiers not safety-only overhead. §A/§8/§7.7/product/Build-OS(HITL-corrected runs=training signal)/CNS. "human loop just builds more trust" 5:19. AFFIRM(070)→spine.
15. **`governed_memory_from_hitl`** — HITL interactions = feedback for governed memory updates (provider corrections/staff edits); require scope+versioning+authority; never silent promotion. KR/§A/§B/CNS(`memory_update_policy` 059)/Build-OS(`feedback_allowed_use` 054)/security. "learning from user interactions" 5:29. PARTIAL→spine.
16. **`ambient_observability`** — long/bursty/HITL-interrupted runs need tool-trace/decision-record/mistake-correction visibility; idempotent runs + compensation. Build-OS(primary)/security/CNS/§A/§B(trace-as-evidence 059). "visibility and observability… important" 7:24. PARTIAL→spine.
17. **`attention_routing_pairing` (086)** — agent inbox = UX host for attention-routing; classify auto-no-op/draft/must-decide/urgent; batch+suppress to protect human judgment budget. §A/§7.6/§7.7/CNS(`interrupt_threshold` 086)/product. PARTIAL→spine (merge host = `attention_routing_state` 086; 062 = inbox surface evidence).
18. **`workbench_cockpit_pairing` (058)** — agent inbox sits INSIDE workbench/cockpit (058) w/ human_takeover + run handoff; event-triggered cloud agents = candidates inspected before commit. §7.7/Build-OS(`agent_workbench`/`agent_cockpit`/`human_takeover_state`)/CNS/§8. ABSENT→spine (merge 058+062 at §7.7).
19. **`context_engineering_pairing` (059)** — ambient long-runs need governed context assembly per step (059: workspace/compaction/offload/subagent-contracts/trace); 062 owns trigger/HITL-queue, 059 owns context/harness. §7.6/§12 CNS/§B/Build-OS/KR. PARTIAL→spine (bind at CNS-contract; no third duplicate cluster).
20. **`langchain_product_stack`** — LangGraph/LangSmith/LangChain Platform = Lens-B comparators (§3.5); open-source agent-inbox = build-evidence not canonical substrate (GRD-039). §3.5/Build-OS(watch)/CNS(OMNI owns orchestration)/KR(ingest as evidence). "Langraph… agent orchestration framework" 6:23. no-op→low-authority-watch→watch.

**REJECTS/guardrails:** ambient=autonomous; every-event-spawns-noisy-work; ambient agents write directly to clinical truth; invisible background agents; silent memory update from every interaction; per-feature ambient bots; chat-as-primary-CNS-trigger; refund-exemplar as blind autopilot; founder-email-agent as care-grade proof. **Net-new: 062 = PRIMARY spine evidence for registry "Ambient agents + agent-inbox" [Batch 6: 062, 089] — CONFIRMS+sources, no duplicate rows.** Net-new promotable: `ambient_no_op_log`, `hitl_interaction_mode_taxonomy` (five-mode enum), `explicit_approval_scope`; doctrine phrase `listen_continuous_commit_deliberate` (§8, not API); guardrail `cns_owned_ambient`/`anti_bot_sprawl`. SHARPEN/EXISTS: `ambient_agent`/`event_stream_listener`(058+registry), `agent_inbox`(merge 058 host), `time_travel_review`/`persistent_agent_state`/`event_burst_handling`/`ambient_suppression_policy`(registry), `ambient_agent_memory_update`→`memory_update_policy`(059), `sync_takeover`(062/089). REJECT: LangGraph/LangSmith nouns. **Reread (MANDATORY before CNS-contract/§7.7):** ambient≠autonomous + candidate-flow (3:31–4:07 + GRD-029/006 + 070 HITL + 081 zero-click); agent-inbox surface (5:59–6:12, merge 058 cockpit + 086 tiers before wireframes); persistence+time-travel+async-return (6:31–6:50, 4:25–4:33 + 059 trace); burst+suppression+no-op-log (2:47, 7:03–7:05 + 086 + 089 patrol-vs-event); HITL→governed-memory (5:29 + Clinical-Memory + KR gate + 054 feedback_allowed_use); context-engineering bind 059 (cluster 19 — no second inbox cluster); observability (7:09–7:24 + 054 + 059). CROSS-READ: 059(MANDATORY sibling)/058/086/089/070/081.

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000001` (ai-corpus synthesis + routing) · per-source extraction: **§3 Review 003** (this file) · concept_registry: `analysis/EVRUN-2026-000001_ai-corpus-synthesis-and-routing/EVRUN-2026-000001_ai-corpus_concept_registry_and_routing_map.md` · anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · promotion: gated (`GRD-036`/`GRD-044`) — clusters route to thesis-v4 + CNS/Build-OS/security/capability-topology contracts via registry; no direct binding from this file.

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Pairs with `EVSRC-2026-000059` (Chase agent-architecture cluster); flagged strong CNS / Sense-loop / HITL relevance.

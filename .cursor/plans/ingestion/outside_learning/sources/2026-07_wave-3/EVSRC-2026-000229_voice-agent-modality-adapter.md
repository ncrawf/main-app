# EVSRC-2026-000229 — <title or TK>

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000229_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000229`  ·  filename: `EVSRC-2026-000229_voice-agent-modality-adapter.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=i_Tf956Yh0U`  ·  source_title: `Turn Any LangGraph Agent Into a Voice Agent in Minutes`
- channel_or_org: `LangChain`  ·  speaker: `Caroline di Vittorio, Software Engineer at LangChain`  ·  published_at: `Jun 23, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + description + chapter list + pasted transcript`
- content_type: `voice agents / LangGraph / Pipecat / multimodal agent interface / speech-to-text / text-to-speech / voice activity detection / interruption handling / stateless graph adaptation / LangSmith tracing / audio trace capture / modality-specific prompting`  ·  source_reliability_context: `practitioner | vendor — Official LangChain technical walkthrough. Strong implementation source for adapting an existing tested LangGraph multi-agent system into a voice modality without rebuilding the core agent. Most relevant to modality architecture, state ownership, interruption-safe context, audio observability, and voice-specific prompt behavior. Treat Pipecat/LangGraph/LangSmith as implementation examples, not mandatory OMNI infrastructure.`  ·  topic_tags_light: `[LangChain, LangGraph, Pipecat, Caroline_di_Vittorio, voice_agents, multimodal_agents, speech_to_text, text_to_speech, voice_activity_detection, interruption_handling, audio_source_of_truth, stateless_graph, checkpointer_problem, context_truncation, active_agent_from_messages, LangSmith_tracing, OTEL_traces, span_processor, audio_recording_trace, modality_specific_prompting, Surface_Map, AI_Substrate, Agent_Runtime, Polaris]`  ·  identity_confidence: `high_from_operator_metadata`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Caroline di Vittorio` · role_in_source: `speaker / presenter` · affiliation_at_publication: `LangChain (Software Engineer)` · speaker_type: `vendor` (engineer/practitioner at framework vendor) · authority_context: `Official LangChain technical walkthrough — first-party implementation authority on LangGraph/Pipecat/LangSmith integration; demonstrates adapting a tested multi-agent LangGraph system into a voice modality.` · identity_confidence: `high_from_operator_metadata`
  - *(no additional speakers)*
- publisher / channel: `LangChain (YouTube)`  ·  interviewer / moderator / host: `n/a (solo walkthrough)`
- event_context: `LangChain developer education / product walkthrough video (Jun 23, 2026); code linked in video description.`  ·  perspective / conflict notes: `Vendor-positioned — promotes LangGraph + Pipecat + LangSmith. Treat the specific tooling (Pipecat/LangSmith/OpenAI service) as implementation examples, not mandatory OMNI infrastructure. The architectural pattern (modality adapter + state ownership + pipeline trace + audio-as-truth + modality prompting) is the keeper, not the stack.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source — fold packet returned to Opus-main; not edited by this subagent) · [ ] update coverage matrix (Opus-main) · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️





Chapters

Transcript
Search in video
Why voice agents are just a new modality for your existing agent
0:01
Hi everyone, my name is Caroline. I'm a software engineer here at LangChain and today I'm going to walk through how you can take an existing LangGraph agent and build it into a voice agent.
0:11
This is particularly useful if you already have an agent that you've tested, that you're using in production, that works well, that's integrated with all of your tools, and you really just want to offer it in a new modality — like you have an assistant bot that's on your website and you want to say, hey, let's also allow people to talk to it now.
0:30
So if you're not familiar with LangGraph, I highly recommend that you check out our docs first,
0:34
walk through this quick start guide in order to get acquainted with all of the LangGraph fundamentals that we're going to be using today.
What Pipecat does and how it fits into the stack
0:40
To build our LangGraph agent into a voice agent, we're going to be using a framework called Pipecat.
0:48
And Pipecat is going to handle all of the glue required to take the input audio, convert it to text, run it through our LangGraph LLM layer,
0:56
then convert that back to speech in order to send it back to the end user.
1:02
It's a really great framework and it's going to integrate really nicely with LangGraph as well.
The demo agent: LangGym customer support with four specialized sub-agents
1:10
So to get started, I've built an agent here that is a customer support agent for a gym membership.
1:17
Think the kind of gym membership where you have a certain number of credits and then you spend those credits to book classes.
1:23
So this agent in particular consists of four specialized agents,
1:28
a triage agent that initially takes the customer's request,
1:32
and then dispatches it either to a cancellation agent to cancel the membership,
1:37
a credits agent to check on the number of credits that you have left,
1:41
and a booking agent that allows you to book a class.
How the multi-agent graph routes and maintains state
1:47
So the way that this graph works is that each one of these agents becomes a node in our graph.
1:53
And looking at our graph construction here, we can see that we add an edge between start
1:59
and one of the nodes. And the way that we decide which node we're going to is based on what is
2:04
currently stored in the state as active agent. So if you're currently talking to the cancellation
2:10
agent and it's asking you some questions, the next time you send a message and you restart your run
2:14
through the graph, you want to keep talking to that cancellation agent.
2:19
And so this is how we do it. We store the agent that you're currently talking to,
2:24
when we start the graph, we send you to that node right away. After we're done, we immediately
2:29
either transfer to the right agent, if the tool call is a handoff, or we go to the end if it's
Testing the text agent with FastAPI
2:35
the end of the turn. Just to be able to test this agent, I've built a very quick server
2:41
that's a FastAPI server that just allows us to interact with this graph.
2:45
This isn't production ready. That's not the goal of this demo here.
2:49
We have a ton of other resources on how to do that, but the idea here is just
2:53
for us to be able to test it, just to see how it works. Let's test out cancelling our membership.
Watching the triage and cancellation agents hand off in real time
3:04
As you'll notice, we're first talking here to the triage agent, and then now we've been
3:08
handed over to the cancellation agent
3:10
in order to handle this cancellation request.
3:13
So we're gonna give it dummy data.
3:14
It's all backed by dummy data anyways.
3:17
The tool calls are real though.
3:20
Okay, membership successfully canceled.
3:22
Awesome.
Inspecting the LangSmith trace for the text agent run
3:24
Okay, so in LangSmith, we can see the trace
3:27
for the latest run that I just went through.
3:30
Here you can see my request to cancel.
3:33
You can see the AI deciding to transfer
3:36
to the cancellation agent, asking me for my membership ID.
3:40
And then the second turn here where
3:42
I responded with my membership ID,
3:45
it calls the cancel membership tool
3:49
and confirms to me that my membership is successfully
3:51
canceled.
3:52
The purpose of inspecting the traces here
3:54
is just to be able to show that the agent really did go
3:56
through all of the steps.
3:57
The graph works as expected.
3:59
It's calling all of the right tools.
4:01
And at this point, nothing should be new.
4:03
This is pretty standard LangGraph.
4:05
It integrates directly with LangSmith
4:06
and all of that setup is incredibly easy to do.
Time to add voice: swapping in Pipecat
4:09
So with that said, it's time to make this a voice agent.
4:13
Let's do it.
4:14
If you wanna follow along,
4:15
the code is linked in the video description.
4:18
And to get started here,
Walking through the basic Pipecat pipeline (STT, LLM, TTS)
4:20
I've set us up with a very, very basic Pipecat voice agent.
4:25
It's pulled directly from the Quickstart guide
4:28
that's in the Pipecat docs.
4:29
So if you wanna repro the steps yourself,
4:31
you can just step through here.
4:33
But essentially what this does is it sets up a pipeline.
4:37
And a pipeline is a way for us to chain together,
4:39
among other things, a speech-to-text layer
4:42
that's converting the speech down to text.
4:44
An LLM layer — this is right now just an OpenAI,
4:48
right here, this is just currently an OpenAI agent,
4:52
no LangGraph, no graph yet.
4:54
But this is going to be the brain of our voice agent.
4:57
And then a text-to-speech layer
5:00
for converting the output of that LLM brain
5:03
into speech that can be played to the user.
Voice activity detection and interruption handling explained
5:07
What's great about Pipecat is that it's also going to handle
5:09
automatically for us voice activity detection.
5:12
So figuring out when the user is done speaking,
5:15
therefore when we should kick off a new LLM response,
5:18
and then it's also going to handle interruptions
5:20
for us out of the box.
5:21
So if I'm speaking and then the agent speaks,
5:24
and then I interrupt the agent midway through its response,
5:27
Pipecat is automatically going to handle cutting off
5:30
the assistant's response, and then also truncating the context so that on future LLM calls, we're
5:38
only holding within our messages context what the user actually heard versus what was generated
5:45
by the LLM layer. This is really important in order to maintain a coherent conversation
5:51
because you want that context to be faithful to what the conversation actually was, not
5:56
you know, what the underlying mechanics
5:58
of what steps they were at.
Replacing the OpenAI LLM layer with the LangGraph agent
6:01
So in order to make this voice agent run our LangGraph brain
6:04
instead of just an out-of-the-box OpenAI agent,
6:07
we need to replace this LLM layer with our LangGraph agent.
6:12
And in order to do that,
6:15
I've written a LangGraph LLM service class
6:19
that wraps the OpenAI LLM service
6:23
and overwrites the process context function
6:26
to use our LangGraph agent, that particular graph,
6:30
as the LLM layer instead of just the out-of-the-box
6:33
OpenAI one.
6:35
So first things first, let's just go replace
6:39
the OpenAI LLM service that we're using
6:41
with this new LangGraph one,
6:42
and then we're gonna step through what this does.
6:45
So within voice, let's do LangGraph.
7:09
Okay, so here we have this.
The checkpointer problem: why stateful LangGraph breaks with Pipecat
7:20
Okay. So I wish it was as easy as saying, "Ta-da, we're done. Everything's going to work out
7:27
of the box now." But there's one important caveat that we haven't addressed yet, which
7:31
is that if we step into this build graph function, we're currently using a checkpointer. And
7:38
in particular, this means that LangGraph is going to hold its own state and its own messages
7:43
context, and this is an issue for adapting it to the voice modality because
7:49
Pipecat is also going to store its own context with its own messages, and we
7:53
want to use — so first of all we don't want that to be duplicated, but the
7:57
second is we actually want to use Pipecat's context, and the reason for this
Making the graph stateless: deriving active agent from messages
8:02
is that as I mentioned before, all of the interruption handling — Pipecat is
8:05
going to handle truncating that context to be what the user heard, not
8:10
what was generated. And so we want to rely on that particular source of truth
8:15
and use that to build our LangGraph graph, not store duplicate content
8:22
within LangGraph. So we want to replace this by allowing us to not use a
8:28
checkpointer. So let's just make that an option here. Awesome. And then the second thing
8:38
that we need to do here is update how we manage state. So here we're using
8:44
this active agent that's being stored within our GymSupport state and
8:51
that's not going to work because we don't have a
8:54
checkpointer anymore, so we're not going to be saving that. And so instead of
8:58
having it pulling from the state, what we want to do is just pull it
9:01
from the messages. So in the messages we're going to see a transfer to X —
9:06
we want to find X, the latest transfer is the current state that we're in, and so we
9:12
want to just use that. So we're gonna make a little update here. Okay, so I've
9:18
updated the code here to do that, and as you'll notice now in our route initial
9:23
where we're going to the right agent — you know, from the cancellation agent, and
9:27
we're midway through cancelling our membership, we want to stay with that
9:30
particular agent and have that agent handle our next message. So now it calls
9:36
the derive active agent function, and what this one does is it just plays through
9:42
all of the messages, it finds all of the transfer-to tools and it finds the last
9:49
one of those and uses that as the state that we're currently in. So just a
9:55
little bit of the same logic — at the end of the day we're still doing the exact
9:57
same thing, the agent is going to behave in the same way, but instead of relying
10:01
on the saved LangGraph state, we're making this graph completely stateless,
10:06
and we're relying on the messages to recompute where we're at.
How the adapter passes context between Pipecat and LangGraph
10:13
On the adapter side, it takes the messages from the
10:15
Pipecat context, and it invokes our graph with those messages. Then, for text messages,
10:21
we push them to the rest of the pipeline so that they can be spoken. And for tool calls,
10:26
we add them to the Pipecat context so that on the next graph iteration,
10:30
the messages are still in history, but we don't actually want to say them out loud
10:34
because that's not what they're for. Okay, so at this point we've made all of the
Running the full voice agent demo
10:38
updates that we need to make in order to make this work as a voice agent and
10:42
integrate with Pipecat. And so we can go ahead and run the agent. And I have
10:47
Pipecat running here as part of their pre-built UI, so that's very convenient.
10:53
And let's just give it a run.
10:59
Hi, welcome to LangGym support. How can I help you today?
11:04
Hi, I'd like to cancel my membership.
11:10
Sure thing. Let me get that sorted for you right away.
11:14
Could you please share your membership ID so I can process the cancellation?
11:19
Oh yeah, it's one, two, three, four.
11:24
Got it!
11:26
Let me process that cancellation for you now.
11:29
Your membership has been successfully cancelled. No further charges will be made.
11:35
We're sad to see you go, but know that you're always welcome back whenever...
What's missing from the first trace: STT, TTS, audio, latency
11:40
Okay, so pretty cool. So in our traces here, we can see that LangGraph run,
11:46
because we're still tracing that graph from within the pipeline.
11:51
But one thing that we're missing kind of in this trace is being able to see all the other
11:56
aspects — like tracing all of the other aspects of our voice agent, the speech-to-text and
12:00
all of the metrics associated with that; there's latencies there, there are costs there, time
12:06
to first byte, etc.
12:07
And then we're missing also the text-to-speech generation as well, and most importantly,
12:12
we're missing the audio file.
12:13
At the end of the day, the source of truth for this agent is the audio.
12:18
And we currently are not tracing this, which is a huge gap.
Adding the LangSmith span processor for complete Pipecat tracing
12:22
We're going to head to the LangSmith Trace with Pipecat documentation.
12:26
It's under Voice AI frameworks and then Pipecat.
12:29
And what it is going to do is provide us with a span processor file that we can download
12:35
and put into our code in order to trace this application, our Pipecat application, to
12:41
LangSmith.
12:42
Pipecat actually emits OTEL traces.
12:45
And so what this processor does is it captures those traces,
12:48
and it converts them to LangSmith-compatible attributes
12:52
in order for them to show nicely in LangSmith.
12:55
So I've downloaded it into my code,
12:57
and we're just going to set up this processor
13:01
to be used in our code.
13:02
The key thing here is that we are now using
13:05
this span processor.
13:06
And the other thing that I wanted to flag
13:08
is enabling tracing here.
13:10
This is what emits the Pipecat tracing,
13:14
and this is what we need in order to be able to convert it
13:16
to our LangSmith attributes,
13:18
but we need Pipecat to emit those traces first.
13:20
So make sure you set enable tracing here
13:23
and that should work.
13:26
- Hi, welcome to LangGym Support.
13:28
How can I help you today?
13:30
- I'd like to cancel my membership.
13:35
- Of course.
13:37
Let me take care of that for you right away.
13:40
Could you please share your membership ID
13:42
so I can process the cancellation?
13:45
- Yes, my membership is 1234.
13:52
- Let me process that cancellation for you right now.
13:55
Your membership has been successfully canceled.
13:58
No further charges will be made to your account.
14:01
We're sad to see you go,
14:03
but you're always welcome to rejoin anytime.
14:06
We'd love to have you back.
14:08
Is there anything else I can help you with?
14:13
But taking a look at the trace here, we see all of the details from the
14:17
Pipecat tracing that we weren't seeing before. So all of the text-to-speech
14:21
requests, the speech-to-text requests, all of the LangGraph nested layering
14:28
that is occurring under the main LLM node. So this is a much, much better trace
14:35
and it's a much more accurate one, capturing all of this data that we
14:38
weren't seeing before, but there's still one key thing that's missing, which is the audio recording.
Adding audio recording and seeing it in the trace UI
14:42
Okay, so I've gone ahead and I've added audio recording via this audio buffer processor,
14:49
which gets added to our pipeline after the output transport. I don't want to go into the details of
14:56
this because this is just straight Pipecat. You can find all of the details for how to do this
15:01
on the Pipecat docs under recording audio. You can see that we have an audio recording. It shows up
15:06
here with a play button. Let's play it.
15:09
Hi, welcome.
15:12
It shows us all the traces.
15:14
And the way that this is appearing is because we did two things.
15:17
The first is we added the audio recording as an attachment that gets done
15:22
automatically via the LangSmith processor that we downloaded in order to
15:26
convert the Pipecat OTEL traces to LangSmith attributes.
15:31
And the second is because we set LS modality on the root trace — that's
15:36
in the processor, but I'm just flagging it here because if you're rolling with your own
15:42
tracing you're going to want to add both of those things in order to be able to leverage
15:46
this really nice UI here to be able to play the recording. You can see the different channels,
15:50
so that's when I spoke versus when the bot spoke, and all of that is just in line with all of the
15:57
spans. Pretty cool. Okay, so the last thing that I want to highlight is that when you convert
Prompting differences between text and voice agents
16:05
a text agent to a voice agent,
16:08
one thing changes, which is how the agent is expected
16:10
to handle the conversation.
16:12
With a text agent, you can have emojis,
16:15
you can have all this formatting,
16:16
you can have long responses that the user is going to read.
16:20
But with a conversation, that's not necessarily the case.
16:23
You're gonna want shorter responses,
16:24
one question at a time,
16:26
make things really simple and straightforward
16:28
because that's how people talk.
16:30
And so it's going to feel very unnatural,
16:31
make your conversation very wordy,
16:33
and it's going to feel very contrived.
16:36
So those are just minor prompting changes, right?
16:38
You're gonna want to differentiate
16:40
between the two modalities,
16:41
offer your agent different instructions for each
16:44
on how to handle the conversations
16:45
and the types of responses to generate.
16:47
This is it for the LangGraph Pipecat demo.
16:50
I hope you enjoyed the video
16:52
and would love to hear your feedback
16:54
in the comments.
16:57
Bye.

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
source_url: https://www.youtube.com/watch?v=i_Tf956Yh0U
source_title: Turn Any LangGraph Agent Into a Voice Agent in Minutes
channel_or_org: LangChain
speaker: Caroline di Vittorio, Software Engineer at LangChain
published_at: Jun 23, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + description + chapter list + pasted transcript
content_type: voice agents / LangGraph / Pipecat / multimodal agent interface / speech-to-text / text-to-speech / voice activity detection / interruption handling / stateless graph adaptation / LangSmith tracing / audio trace capture / modality-specific prompting
source_reliability_context: Official LangChain technical walkthrough. Strong implementation source for adapting an existing tested LangGraph multi-agent system into a voice modality without rebuilding the core agent. Most relevant to modality architecture, state ownership, interruption-safe context, audio observability, and voice-specific prompt behavior. Treat Pipecat/LangGraph/LangSmith as implementation examples, not mandatory OMNI infrastructure.
priority: 4.25/5
depth: technical_architecture_reference
recommended_status: route to Surface Map, AI Substrate, Agent Runtime, Messaging/Voice, Agent Work Protocol, Polaris/proof layer, multimodal interface doctrine, and voice-agent observability.

Topic tags:
[LangChain, LangGraph, Pipecat, Caroline_di_Vittorio, voice_agents, multimodal_agents, speech_to_text, text_to_speech, voice_activity_detection, interruption_handling, audio_source_of_truth, stateless_graph, checkpointer_problem, context_truncation, active_agent_from_messages, LangSmith_tracing, OTEL_traces, span_processor, audio_recording_trace, modality_specific_prompting, Surface_Map, AI_Substrate, Agent_Runtime, Polaris]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4.25/5
Depth: technical architecture reference
Recommended status: route to Surface Map / Agent Runtime / AI Substrate / Messaging-Voice / Polaris / modality-specific prompting doctrine.

Core takeaway

This source is about treating voice as a modality layer, not as a reason to rebuild the whole agent.

The transcript explicitly frames the use case as taking an existing tested or production LangGraph agent, already integrated with tools, and offering it in a new modality so users can talk to it instead of only typing.

OMNI translation:

Voice should wrap a governed agent runtime; it should not fork the agent’s authority, memory, state, or business logic.

That is the main keeper.

Key concepts to preserve
1. Voice agents are modality adapters over existing agents

Pipecat is used to handle the glue: input audio → speech-to-text → LangGraph/LLM layer → text-to-speech → user audio response.

OMNI keeper:

The voice stack should be an adapter around the same agent/workflow substrate.

For OMNI:

patient phone intake should use the same eligibility/routing rules as web intake
provider voice commands should hit the same governed workflow layer
staff voice workflows should not bypass RBAC, audit, or domain authority
voice should not create a parallel undocumented workflow

Doctrine candidate:

A new modality should reuse the same governed agent brain unless there is a clear reason to fork.

2. Multi-agent graph still matters underneath

The demo agent has a triage agent and specialized agents for cancellation, credits, and booking.

The graph routes based on the active agent and hands off when appropriate.

OMNI keeper:

Voice does not remove the need for routing architecture.

For OMNI voice:

triage agent
scheduling agent
billing/benefits agent
refill/medication-support agent
escalation agent
human handoff
specialty lane routing

Doctrine candidate:

Voice interface does not eliminate workflow routing; it makes routing more important.

3. Tracing proves the graph actually did the work

The walkthrough inspects LangSmith traces to confirm the transfer to the cancellation agent, the membership ID collection, the cancel-membership tool call, and the final confirmation.

OMNI keeper:

For voice workflows, “it sounded right” is not enough.

You need proof of:

what the user said
what STT transcribed
which agent handled it
which tools were called
what state/action changed
what the user actually heard
what was logged/audited

Doctrine candidate:

Voice-agent actions require trace proof, not only conversational plausibility.

4. Voice activity detection and interruption handling are first-class

Pipecat handles voice activity detection to determine when the user is done speaking, then handles interruptions by cutting off the assistant and truncating context so future LLM calls only include what the user actually heard.

OMNI keeper:

This is a major voice-specific issue.

In text, generated output and delivered output are usually the same.
In voice, they are not.

If the patient interrupts halfway through a long answer, the agent’s future context must reflect the partial conversation, not the full generated answer.

Doctrine candidate:

In voice, delivered context matters more than generated context.

5. The checkpointer/state problem

The transcript shows the key architectural change: the original LangGraph agent uses a checkpointer, meaning LangGraph stores its own state/messages. But Pipecat also stores context/messages. For voice, they choose Pipecat’s context as source of truth because it handles interruption-based truncation to what the user actually heard.

OMNI keeper:

This is the most important technical warning.

Do not have two competing conversational state owners.

For OMNI:

phone transcript state
chat transcript state
workflow state
domain state
agent scratchpad
clinical record
audit trail

These must be separated and authority-assigned.

Doctrine candidate:

One layer must own conversation state for each modality; duplicate state creates coherence risk.

6. Make the graph stateless when modality owns conversation state

The fix is to make the graph stateless and derive the active agent from messages, finding the latest transfer tool call and using that as the current state.

OMNI translation:

For voice modality, the graph becomes a deterministic interpreter over the current conversation context rather than a separate stateful owner.

Potential primitive:

modality_owned_conversation_state

The modality pipeline owns heard/delivered conversation history; the agent graph derives routing state from that history.

Doctrine candidate:

When the modality layer owns conversation history, the agent graph should derive state rather than duplicate it.

7. Tool calls are context, not speech

The adapter passes Pipecat messages into LangGraph. Text messages are pushed down the voice pipeline to be spoken. Tool calls are added to context for future graph iterations but are not spoken aloud.

OMNI keeper:

Voice agents need a separation between:

user-heard text
internal tool calls
state transitions
trace events
workflow events
audit events

Doctrine candidate:

Not every agent event belongs in the spoken channel.

8. Full voice observability requires tracing the whole pipeline

The first trace only captures the LangGraph run. The transcript says that is missing speech-to-text, text-to-speech, latency, costs, time to first byte, and audio.

Then they add Pipecat OTEL tracing converted into LangSmith-compatible spans, producing a more accurate trace with STT, TTS, LangGraph nesting, and other pipeline details.

OMNI keeper:

Voice observability must be pipeline-level, not only LLM-level.

For OMNI voice:

audio input
STT transcript
STT latency/cost
VAD events
interruption events
agent trace
tool calls
TTS output
TTS latency/cost
audio playback
final delivered transcript
user consent/audit metadata

Doctrine candidate:

Voice observability must trace audio, transcription, agent reasoning, tools, synthesis, and delivery.

9. Audio is the source of truth

The transcript says the most important missing thing is the audio file, because “the source of truth for this agent is the audio.”

Then they add audio recording into the trace so the UI can play the recording and align channels/spans.

OMNI keeper:

For voice interactions, the transcript is derived evidence. Audio is primary evidence, assuming it is legally/consensually recorded.

OMNI caution:

consent required
jurisdiction matters
PHI governance required
retention policy required
access controls required
patient/staff privacy boundaries required

Doctrine candidate:

For voice workflows, audio is primary evidence; transcript is a derived artifact.

10. Voice needs different prompting than text

The transcript closes with modality-specific prompt differences: text can tolerate formatting, emojis, and longer responses; voice needs shorter responses, one question at a time, simple and straightforward phrasing.

OMNI keeper:

Voice is not just text read aloud.

For OMNI:

shorter turns
one question at a time
no complex lists
explicit confirmation
easy interruption
safe escalation
repeat/clarify loop
avoid long clinical explanations
avoid nested instructions

Doctrine candidate:

Modality-specific prompting is required even when the underlying agent is shared.

OMNI translation

This source gives OMNI a clean architecture for voice:

existing governed agent → modality adapter → STT/VAD/interruption handling → stateless graph invocation → tool/action trace → TTS → audio trace

The key design boundary:

The voice layer owns heard conversation context; the agent graph owns reasoning/routing over that context; domain systems own committed truth.

That separation matters.

Likely OMNI landing zones

Surface Map

voice as modality surface
patient phone agent
provider voice commands
staff/admin voice workflows
modality-specific response rules

AI Substrate

STT/TTS pipeline
modality adapter
stateless graph invocation
voice pipeline observability
latency/cost tracking per layer

Messaging / Voice

interruptions
VAD
audio recording
consent
transcript generation
phone-call workflow state

Agent Work Protocol

modality-owned context
state derivation rules
tool calls not spoken
escalation policy
voice-specific prompt profile

Polaris / Evidence Plane

audio as source artifact
transcript as derived artifact
trace lineage across STT/LLM/TTS/tool calls
action proof and audit
Doctrine candidates
A new modality should reuse the same governed agent brain unless there is a clear reason to fork.
Voice interface does not eliminate workflow routing; it makes routing more important.
Voice-agent actions require trace proof, not only conversational plausibility.
In voice, delivered context matters more than generated context.
One layer must own conversation state for each modality; duplicate state creates coherence risk.
When the modality layer owns conversation history, the agent graph should derive state rather than duplicate it.
Not every agent event belongs in the spoken channel.
Voice observability must trace audio, transcription, agent reasoning, tools, synthesis, and delivery.
For voice workflows, audio is primary evidence; transcript is a derived artifact.
Modality-specific prompting is required even when the underlying agent is shared.
Net-new / sharpen / affirm
Net-new candidates

modality_adapter_layer
Surface layer that converts modality-specific input/output into the shared governed agent runtime without duplicating business logic.

modality_owned_conversation_state
Pattern where the modality pipeline owns delivered/heard conversation context, especially when interruption handling can alter what the user actually received.

delivered_context_trace
Trace record preserving what the user actually heard or saw, not merely what the model generated.

voice_pipeline_trace
Full trace spanning audio input, STT, VAD, interruption events, LLM/graph, tools, TTS, audio output, latency, cost, and final delivered artifact.

modality_prompt_profile
Prompt/context variant for each modality: voice, chat, email, SMS, provider workspace, admin console, etc.

Sharpen existing

Surface Map
Adds voice as a modality wrapper over shared agent/domain runtime.

Polaris
Audio and delivered-context proof become necessary for voice workflows.

Agent Work Protocol
Adds rules for modality-owned state, spoken vs internal events, and interruption-safe context.

D7 / Evidence Plane
Audio is source artifact; transcript is derived artifact.

AI Substrate
Adds STT/TTS/VAD/latency/cost as first-class pipeline components.

Affirm
agents can be reused across modalities
voice needs its own pipeline and prompt profile
interruption handling changes context semantics
tracing must include non-LLM layers
tool calls should be preserved but not spoken
state ownership must be explicit
audio recording is critical evidence when permitted
Reject / do not over-import
Do not rebuild separate business logic for voice.
Do not let voice bypass RBAC, domain authority, or audit.
Do not store duplicate conflicting conversation state.
Do not treat generated-but-unheard text as conversation truth.
Do not record audio without consent and retention policy.
Do not rely on text-only traces for voice workflows.
Do not make Pipecat mandatory OMNI infrastructure.
Do not use text-agent prompt style unchanged in voice.
Hard read

This is a solid modality-architecture source.

The keeper:

Voice agents are not separate agents. They are modality pipelines wrapped around existing governed agents — but voice changes state ownership, interruption semantics, trace requirements, and prompt style.

Shortest OMNI version:

OMNI should support voice through a modality adapter: STT/VAD/interruption handling owns delivered conversation context; the shared agent graph derives routing from that context; domain tools perform governed actions; Polaris traces audio, transcript, tools, latency, cost, and delivered output.

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

- reviewer: `Opus` · type: `AI assistant (formal extraction subagent, EVRUN-2026-000003)` · at: `2026-07-07` · tier: **full table** (Knox depth 4.25/5, technical_architecture_reference — long → full)

**HEADLINE VERDICT.** A **surface/modality-architecture affirmer**, not a frame-extension. The keeper is one boundary law: **voice is a modality adapter wrapped around ONE governed agent runtime — it must not fork the agent's authority, memory, state, routing, RBAC, or business logic.** That is verbatim OMNI physics (no god-domain; AI proposes / domains commit; surfaces own NO truth `D0THES-DEC-033`; model-pluggable at substrate, not at care). Every doctrine keeper here AFFIRMs or PARTIAL-affirms existing OMNI law; **zero direct conflicts.** Genuine yield = a **modality/voice vocabulary layer** the wave has not yet named (Surface Map P5 + §B AI-substrate runtime + Polaris/trace + D7/Evidence-Plane), plus one sharp technical warning (**two competing conversation-state owners = coherence risk**) that maps onto OMNI's "one owner per fact" discipline. Build: OMNI has the **substrate scaffolding** (`appointment.modality` in_person/video/phone/async, `voice_call` table, voicemail audio+transcript 5-disposition, `lib/disclosure-policy` spoken-vs-internal governance, universal CNS event envelope w/ `audit_lineage`) but **no voice-agent pipeline** (STT/TTS/VAD/interruption/graph-adapter/pipeline-trace all ABSENT; distributed tracing = deferred D1). Net-new = **5 modality primitives, all dedup-pending** (Knox's 5; none re-mint an existing mechanism, but all are NAMES over Surface-Map/§B/Polaris — Opus-main verifies).

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **Voice = modality adapter over one governed agent (don't fork the brain)** | A new modality wraps the SAME governed agent/workflow substrate; it must not create a parallel undocumented workflow or bypass RBAC/audit/domain authority. Phone intake reuses web-intake eligibility/routing. | Surface-Map (P5 modality surface) · §B AI-substrate (model-pluggable at substrate) · CNS · §A no-god-domain · Intake/Messaging · Agent-Work-Protocol | *"offer it in a new modality — like… talk to it now"* [0:11-0:30] | AFFIRM | partial | none | spine | watch |
| 2 | **Multi-agent routing survives underneath the modality** | Voice does not remove routing; it makes routing MORE important. Triage → specialist handoff = CNS candidate→resolver→owning-domain (converges 210). OMNI voice lanes: triage/scheduling/benefits/refill/escalation/human-handoff. | CNS (candidate→resolver→commit) · Agent-Work-Protocol · RBAC · workflow-lane-as-architecture-unit | *"triage agent… dispatches… cancellation… credits… booking"* [1:23-1:41] | AFFIRM | partial | none | spine | watch |
| 3 | **Trace proves the graph did the work (not conversational plausibility)** | "It sounded right" is insufficient. Voice actions need proof: what was said/transcribed, which agent, which tools, what state changed, what was heard, what was audited. | Polaris/proof (MAJOR) · CNS `trace_lineage` §11 · Build-OS · Agent-Work-Protocol · audit | *"the agent really did go through all of the steps"* [3:54-3:57] | AFFIRM | partial | none | spine | promote |
| 4 | **VAD + interruption handling are first-class voice concerns** | In text, generated output = delivered output; in voice they diverge. When the patient interrupts, future context must reflect the partial (heard) conversation, not the full generated answer. | §B AI-substrate runtime (voice pipeline) · Messaging/Voice (live-state) · Agent-Work-Protocol (interruption-safe context) | *"truncating the context… only… what the user actually heard"* [5:30-5:45] | PARTIAL | absent | none | vocabulary | watch |
| 5 | **No two competing conversation-state owners** | Duplicate conversational state (LangGraph checkpointer AND Pipecat context) creates coherence risk. Exactly one layer owns conversation state per modality; owners must be separated + authority-assigned (phone/chat/workflow/domain/scratchpad/clinical/audit). | §A no-god-domain / one-owner-per-fact · Clinical-Memory vs transcript state · CNS · Identity/RBAC | *"we don't want that to be duplicated"* [7:53-7:57] | AFFIRM | partial | none | spine | watch |
| 6 | **Stateless graph derives routing-state from the owned message history** | When the modality layer owns conversation history, the graph becomes a deterministic interpreter over that history (find latest `transfer_to` = current lane) rather than a second stateful owner. | §B AI-substrate (stateless invocation) · CNS (context-packet) · Agent-Work-Protocol (state-derivation) · Knowledge-Reservoirs | *"making this graph completely stateless… recompute where we're at"* [10:01-10:06] | PARTIAL | absent | tension | spine | watch |
| 7 | **Tool calls are context, not speech (channel separation)** | Spoken text ≠ internal events. Text → spoken; tool calls → kept in context/history but NOT spoken. Separate: user-heard text / internal tool calls / state transitions / trace / workflow / audit events. | `lib/disclosure-policy` (spoken-vs-internal) · Surface-Map (projection≠truth) · Agent-Work-Protocol · Messaging | *"we don't actually want to say them out loud"* [10:30-10:34] | AFFIRM | partial | none | vocabulary | watch |
| 8 | **Voice observability must be pipeline-level, not LLM-only** | First trace only captured the graph; missing STT/TTS/VAD/interruption/latency/cost/TTFB/audio. Add Pipecat OTEL → LangSmith spans → full pipeline trace. | Polaris/Evidence-Plane · Build-OS telemetry · §B runtime (latency/cost) · operating-metrics · (distributed-tracing D1, deferred) | *"tracing all of the other aspects… latencies… costs… time to first byte"* [11:56-12:07] | PARTIAL | partial | none | spine | watch |
| 9 | **Audio is primary evidence; transcript is derived — consent/PHI-gated** | "The source of truth for this agent is the audio." Transcript = derived artifact. But audio requires consent + jurisdiction + PHI governance + retention + access controls + privacy boundaries. | D7 retention / Evidence-Plane (source vs derived; capture-broad-promotion-gated `GRD-036`) · artifact substrate · Federation (residency) · §C · Messaging (voicemail 5-disposition) | *"the source of truth for this agent is the audio"* [12:13-12:18] | AFFIRM | partial | none | spine | promote |
| 10 | **Modality-specific prompting required even with a shared brain** | Voice ≠ text read aloud: shorter turns, one question at a time, explicit confirmation, no complex lists/emojis, easy interruption, safe escalation, avoid long clinical explanations. | Surface-Map (modality response rules) · Agent-Work-Protocol (per-modality prompt profile) · §B · clinical-safety prompting | *"shorter responses, one question at a time"* [16:20-16:26] | PARTIAL | absent | none | vocabulary | watch |

**Doctrine roll-up:** 5 AFFIRM · 5 PARTIAL · 0 ABSENT · 0 direct_conflict (1 latent tension, cluster 6). **Build roll-up:** 0 present · 7 partial · 3 absent — OMNI has communication/modality/artifact/audit *substrate* but no voice-*agent* pipeline; distributed tracing is admitted-deferred (D1).

### B. Net-new primitives — `name — meaning — EXISTS-AS`  *(DEDUP vs registry §2 (201–220) + standard OMNI primitives before minting; all: "dedup-pending, Opus-main verifies")*

Registry §2 (201–220) mints ZERO modality/voice/surface-adapter primitives, so these are genuinely un-covered NAMES — but each composes with existing mechanisms rather than introducing a new god-concept (`GRD-026`/`GRD-035`):

1. `modality_adapter_layer` — a surface-layer adapter converting modality-specific I/O (audio↔text, channel framing) into the shared governed agent runtime WITHOUT duplicating business logic — **EXISTS-AS: net-new NAME; partial exists-as Surface Map (P5, surfaces own no truth `D0THES-DEC-033`) + §B model-pluggable-at-substrate. The I/O-adapter specialization is un-named. dedup-pending, Opus-main verifies.**
2. `modality_owned_conversation_state` — pattern where the modality pipeline owns delivered/heard conversation context (esp. when interruption alters what was received); the agent graph derives routing state from it — **EXISTS-AS: net-new NAME; sharpens §A one-owner-per-fact + state-authority-assignment; distinct from Clinical-Memory/committed truth (conversation state ≠ clinical record). Safety-relevant. dedup-pending, Opus-main verifies.**
3. `delivered_context_trace` — a trace record preserving what the user actually heard/saw, not merely what the model generated — **EXISTS-AS: net-new NAME; adds a delivered-vs-generated dimension to CNS `trace_lineage` §11 / Polaris proof; sibling of 205 delivered-vs-generated concern. dedup-pending, Opus-main verifies.**
4. `voice_pipeline_trace` — full trace spanning audio-in → STT → VAD → interruption → LLM/graph → tools → TTS → audio-out, with latency/cost/TTFB + final delivered artifact — **EXISTS-AS: net-new NAME; voice specialization of `trace_lineage` + 215 `agent_eval_bundle`/`operational_trace_contract` + the deferred distributed-tracing (D1) infra. dedup-pending, Opus-main verifies.**
5. `modality_prompt_profile` — prompt/context variant per modality/surface (voice, chat, email, SMS, provider workspace, admin console) — **EXISTS-AS: net-new NAME; distinct from `context_packet` (content delivery) — this governs OUTPUT behavior per surface; composes with Surface-Map response rules + Agent-Work-Protocol. dedup-pending, Opus-main verifies.**

**REJECT / do-not-mint:** Pipecat / LangGraph / LangSmith / OpenAI-service = implementation examples, not OMNI infra (`GRD-039` watch-not-worship). "stateless graph," "checkpointer," "span processor," "audio buffer processor" = vendor mechanics, not OMNI primitives. `active_agent_from_messages` = an implementation of derive-state (folds into `modality_owned_conversation_state`).

### C. Reread flags (cross-source convergence — fold into registry, don't duplicate here)
- **210 (agents = coordination layers / CNS) + 214 (anti-god-agent) + 224 (dynamic subagents) + 220 (RLMs):** cluster 2 (routing survives under voice) = the same CNS/workflow-lane spine — voice is a new *surface* over that spine, not a new coordination model.
- **215/216/217 (agent-eval / reflexive loop / manifest) + 222 (Pendo: user-behavior→code-fix trace) + 227 (self-improving agent w/ LangSmith Engine):** clusters 3 + 8 (trace-proves-work, pipeline observability) are the SAME trace/proof thread — 229 adds the **voice/audio + delivered-vs-generated** dimension to Polaris. `voice_pipeline_trace` + `delivered_context_trace` extend 215's `operational_trace_contract` and the distributed-tracing D1 gap.
- **205 (`content_authority_class` / instruction-vs-data) + 211 (`context_token_nonpropagation` / channel isolation) + 213 (governed context delivery):** cluster 7 (tool-calls-not-spoken) is a benign sibling of the security channel-separation law — different events belong on different channels; `lib/disclosure-policy` is the existing build echo.
- **204 (`context_memory_budget` / context truncation):** clusters 4 + 6 (interruption truncation, derive-from-messages) touch the same context-as-governed-resource surface — delivered-context truncation is a modality-specific reason context ≠ full generation.
- **201/226 (Nadella — generated UI as coordination surface):** cluster 10 (modality-specific prompting) + `modality_prompt_profile` extend the Surface/Projection-Map surface-specific-rules line.
- **Build reread (strongest echoes — reread when routing voice):** `docs/architecture/communications_topology.md` (`appointment.modality`, `voice_call`, voicemail audio/transcript, universal CNS envelope) · `lib/disclosure-policy/*` (spoken-vs-internal) · `v1_pressure_test_radar.md` §711 (NO separate AI-orchestrator; CNS is supervisor; deterministic observability) + §573 (voicemail transcript NOT chart-fileable without provider review — audio/transcript governance already anticipated).

### D. One-line hard read + strongest OMNI line
- **Hard read:** Voice agents are NOT separate agents — they are modality pipelines wrapped around ONE governed agent, but voice changes *state ownership*, *interruption semantics*, *trace requirements*, and *prompt style*; treat the LangGraph/Pipecat/LangSmith stack as example, not gospel.
- **Strongest OMNI line:** OMNI supports voice through a **modality adapter** — the STT/VAD/interruption layer owns delivered conversation context; the shared governed agent graph *derives* routing from that context (never a second state owner); domain tools perform governed, RBAC-gated actions; and Polaris traces audio + transcript + tools + latency + cost + delivered output, with **audio as primary evidence** under consent/PHI/retention governance.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Surface-Map (P5 modality surface — MAJOR) · §B AI-substrate voice-pipeline runtime (MAJOR) · Polaris/proof + Evidence-Plane (MAJOR — voice_pipeline_trace / delivered_context_trace / audio-as-primary-evidence) · CNS + Agent-Work-Protocol (medium — routing survives, state-derivation, per-modality prompt profile) · §A no-god-domain / one-owner-per-fact (medium — no dual conversation-state owner) · D7 retention + Federation residency (medium — audio consent/PHI/retention) · Messaging/Intake (medium — voice_call / voicemail 5-disposition) · lib/disclosure-policy (build echo — spoken-vs-internal)` · promotion: `watch (proposes only; promotion gated GRD-036 — 5 net-new modality primitives dedup-pending Opus-main verification)`

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — Opus (EVRUN-2026-000003 extraction subagent): lifted operator metadata into §0/§0.1 (`identity_confidence: high_from_operator_metadata`); proposed slug `voice-agent-modality-adapter` (§0 filename field only — file NOT renamed); authored §3 Review 003 (full table, 10 clusters, 5 dedup-pending net-new modality primitives, reread flags, hard read); grep-verified build status (`app lib components scripts supabase repo middleware.ts`); filled §4 pointers; ticked §0.5; flipped status → `analyzed`. Binds nothing (`GRD-036`/`GRD-044`). Registry/coverage/anchor NOT edited (fold packet returned to Opus-main).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

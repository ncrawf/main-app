# EVSRC-2026-000216 — The best AI agents need less code than you think (LangSmith Engine)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000216_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000216`  ·  filename: `EVSRC-2026-000216_langsmith-engine-self-improving-agent-loop.md` *(proposed slug; file NOT renamed this pass)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=YqjR4vQwbTc`  ·  source_title: `The best AI agents need less code than you think`
- channel_or_org: `LangChain` (series: `Max Agency: A Podcast on Building Agents`)  ·  speaker: `Ben Tannyhill (Product Manager, LangChain)`  ·  published_at: `Jul 2, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + timestamps + description + chapter list`
- content_type: `production agent architecture / LangSmith Engine / self-improving agents / trace-driven engineering / multi-agent delegation / agent memory / sandboxed execution / inference budgets / production operations / agent engineering platform`  ·  source_reliability_context: `practitioner (vendor) — Official LangChain engineering podcast; one of the strongest implementation-level discussions on production agent engineering (LangSmith Engine architecture, trace-native development, delegated sub-agents, memory design, evaluation strategy, sandbox tooling, continuous self-improvement). Strong primary source for modern agent-engineering philosophy.`  ·  topic_tags_light: `[LangChain, LangSmith, LangSmith_Engine, Ben_Tannyhill, Max_Agency, production_agents, agent_engineering, trace_driven_development, observability, condensed_traces, self_improving_agents, multi_agent_delegation, org_chart_architecture, screener_agent, verifier_agent, agent_memory, overview_document, sandbox_execution, Harbor, IssueBench, synthetic_environments, evaluation_pipeline, PR_generation, inference_budget, production_traces, continuous_improvement, runtime_economics, AI_Substrate, CNS, Build_OS]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Ben Tannyhill` · role_in_source: `interviewee` (guest) · affiliation_at_publication: `LangChain (Product Manager, LangSmith Engine)` · speaker_type: `operator / vendor-practitioner` · authority_context: `PM who shipped LangSmith Engine (the "agent for agent engineers"); direct implementation authority on production agent architecture, sub-agent delegation, eval design, memory, sandboxing, inference economics` · identity_confidence: `high_from_screenshot`
  - name: `host (Max Agency)` · role_in_source: `host / interviewer` · affiliation_at_publication: `LangChain` · speaker_type: `operator` · authority_context: `LangChain team member (co-built IssueBench with the guest); asks implementation-depth questions` · identity_confidence: `inferred`
- publisher / channel: `LangChain — Max Agency podcast`  ·  interviewer / moderator / host: `Max Agency host (LangChain)`
- event_context: `Podcast episode published Jul 2, 2026; ~50-min deep dive on LangSmith Engine one month after public launch (at Interrupt).`  ·  perspective / conflict notes: `Vendor source — LangChain describing its own product stack (LangSmith, deep agents, LangSmith deployments, LangSmith sandbox). Treat product-specific choices (LangSmith/Engine/Harbor) as non-mandatory; extract the architecture PATTERNS, not the vendor lock-in (`GRD-039` watch-not-worship).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source — Opus-main fold) · [ ] update coverage matrix (Opus-main) · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introduction
0:00
The agent that powers engine, it actually uses a sandbox as a tool. A langchain harness runs inside of a
0:06
Langmith deployment making calls to a Langmith sandbox. Today, I'm talking to Ben Tanny Hill, a
0:12
product manager at Langchain. A month ago, his team shipped Langmith Engine, [music] our agent that hunts through
0:18
your agents failures, prioritizes issues, [music] and drafts the fix. We have this competent main agent that is
0:25
then going to start delegating tasks to these screeners that are less competent and way cheaper, way faster. Usually,
0:30
the screener sub agent is like the primary way that we investigate [music] traces. He explains the unlikely way engine
0:36
became a self-improving agent. Engine as an agent produces its own traces and so we have another engine
0:42
that runs on top of those traces. So meta. It is it's super meta. We assume that it would be crap. It's becoming more and
0:48
more like one of the primary ways that we find improvements to be made on engine. We get into how you build evals for an
0:54
agent that never stops running. We actually do this shadow production taking real traces running on them but
1:00
not creating real issues to a user and the leap Ben's working on right now [music] where engine proposes a fix and
1:06
then proves it works. That process of running a new version of your agent with this proposed fix
1:12
against these new eval is very challenging but something I think is really exciting. Welcome to Max Agency,
1:17
[music] the podcast that goes deep into how the best agents are being built by builders like you. [music]
LangSmith 101
1:25
Langmith has been around for a few years. Langmith Engine is much newer. Before diving into engine, what is
1:32
Langmith? Yeah. Uh Langmith is our platform for observing and evaluating agents in
1:38
production. And so we have obviously our observability platform which is for sending your agents traces so that you
1:44
can understand what is your agent doing in production. How is it making certain tool calls? How is it utilizing the
1:49
different prompts that you give it to better understand how your agent actually performs in the wild. Langmith
1:55
also offers this ability to run evaluations and to run experiments. Um, so we have the ability to store data
2:02
sets within Langmith and uh you can easily pass those to your agent so that it can then run and then you can view
2:08
these experiments after the fact within Langmith. There's lots of other fun features that we have like an easy way to create data sets using annotation
2:15
cues um a playground where you can tweak and and experiment on different prompts.
2:21
But that's linksmith as a whole and that's existed for a while and then engine came out about a month ago. And
Why Engine is "the agent for agent engineers"
2:27
so what is engine and why did you build engine? Engine in in some ways is like the agent
2:35
for lang or the agent for an agent engineer. What does that mean? Yeah, it's a great it's a great uh it's
2:41
kind of metaphorical, right? The agent for agent engineer. When we built engine, we noticed this this process
2:47
that an agent engineer was going through where they were building or modifying an agent that they had in production,
2:53
making adjustments to the prompt, to its code, etc., running tests to ensure that
2:58
those changes that they made were adequate and that they passed the different evals that they had or were appropriate and then deploying those
3:05
into production and then coming back to Langmith and monitoring using our observability tool to understand, you
3:11
know, what was their agent doing. And so that process which we've talked about is like the agent development life cycle
3:17
has a lot of manual steps to it. And so engine is effectively an agent that tries to you know encourage the the
3:24
process of moving through that loop of helping an agent engineer to better understand their agent and the traces
3:30
that it produces to uh more easily create fixes for errors that they see
3:35
and then to more easily run tests on those. So those are kind of the main buckets, right? Like finding problems
3:40
from your traces, putting up fixes for those issues that it finds, and then assisting in the process of testing
3:46
those fixes that it proposes all before you deploy. Diving into some more of the details,
Under the hood: Engine is a deep agent
3:52
what exactly does engine do under the hood? Yeah, under the hood, engine is an agent. Um, and that's why we call it
3:58
like the Elangmith agent or the agent for agent. Agent for agent engineers. It's a mouthful.
4:03
It is a mouthful. Um, and so that's why we've just started calling it engine. The agent under the hood is a deep
4:10
agent, one of our our lang chain products, right? This agent harness. And the deep agent runs to uh ingest and
4:18
understand a huge number of traces from your lang observability project. Um, it
4:24
ingests those traces and does an analysis to understand are there very explicit errors? Are there places where
4:31
a user's needs are unmet in some way? Are there interesting signals for fixes
4:36
that can be made? And it takes these different errors and it clusters them into these actionable issues and then
4:42
surfaces the those issues to a user where they can say, "Yeah, this is very real. You know, we're making an incorrect tool call in this
4:48
circumstance." And engine takes the next step and proposes a fix usually via a PR
4:54
against your agents repo. And so then I can very quickly implement a prompt change or middleware that would improve
5:00
my agent and directly address this fix. And then that agent again kind of completing the loop here would suggest
5:07
data set examples for me to add to my langals so that I can run those those examples later on. But all of that is
5:13
powered by this agent that is investigating clustering and then generating this code fix and generating
5:19
these eval. Let's maybe break it down a little bit. So so how does engine get kicked off? Does a human message or does it run in
5:26
the background? What happens? Yeah, today it runs in the background and it runs on a schedule. Um, the
5:32
engine can be configured within Langmith and it allows a user to basically configure what repo that their agent is
5:38
using as well as define maybe some of the priorities that they have, things that they might be particularly interested in seeing. And then engine is
5:45
on always and is running and monitoring the incoming traces that are that are coming into Langmith. So suddenly as uh
5:52
my agent is producing a a ton of traces on a Monday afternoon, engine is picking those up, clustering those and surfacing
5:59
issues. There's probably a world where you know engine is invocable in a different way. Um right now it is kind
6:05
of just run on this schedule and is is clustering on its own. How does this clustering work in
Clustering millions of traces with condensed views
6:10
particular when I I know we have customers with millions of traces in their tracing project. How does
6:15
clustering over large amounts of traces work? It is very difficult for us and the ingestion of a ton of different
6:20
traces is one of the things that we are just constantly trying to improve. Realistically, engine can't ingest
6:26
millions of traces at once and so it is something that we're always trying to get better at to to be able to in a cost
6:32
effective way ingest more and more traces. The manner in which we do that is uh a very complex agent that has
6:40
these different sub aents that are running different tasks. One of the ways that we work to, you know, handle this
6:47
massive load of traces is by doing an initial pass on these uh kind of condensed or summarized versions of
6:53
traces. So rather than ingesting the entirety of a you know 500 kilobyte
7:00
trace or or 10,000 of those different traces, engine will using one of our
7:06
like lang command line interface tools will allow it to send a condensed
7:11
version to the engine. And so maybe that condensed version just has the total size of the trace, the input, um, and
7:17
some interesting qualities about it that Yeah, I was going to ask like what exactly does this condensed version look
7:22
like and and did this exist before engine or was this purpose-built for engine?
7:27
Yeah, this like many other things was purpose-built for engine. That's one of the like the perks of building an agent
7:33
internally for our own software tool is that it's highlighted a lot of ways that we can make our own software tool lang
7:40
way more agent friendly and and agent native really. Um and so this summarized
7:45
version. Yeah, it can like I said it contains kind of the input the total number of tokens used the total time of
7:51
that trace. That's kind of just a starting place though. It's just an initial pass that the agent has access to and it's a really easy way to detect
7:59
obvious errors. If the baseline for a trace is going to take two minutes to run, suddenly when it sees 10 traces
8:06
that are exceeding 10 minutes, it's a far more interesting uh signal for engine to dive into more closely and
8:12
investigate. But yeah, coming back to your to your earlier question, that's exactly right. This this summarized
8:17
version of that trace is something that we worked on um to allow engine to run more easily and to have more access and
8:24
it's one of the many things that we've done to improve lang for agents. Are there other examples of of improving
8:31
lang for agents that have made that particularly in the realm of kind of like context engineering for agents like
8:36
when you interact with all this Langmith data how do you best present it to agents? Are there any other learnings or
8:43
changes that you guys made there? Yeah, another one Something that has been uh interesting is that it's kind of
8:48
like we need to dive deeper and deeper into what is valuable out of a trace and
8:54
we want to present as little of that information to the agent as is necessary. If we're feeding it more
8:59
context than is necessary, it's just going to drive up our cost of running this this always on agent. And so the
9:04
first is this kind of like very ultra condensed version. It's going to show basic stats about the trace. The next is
9:10
that we've improved within Langmith. have what's called a messages view and it's like a very nice proper UI for
9:16
viewing the turns of between a user and an agent. There wasn't a very good endpoint for an agent to actually pull
9:23
that uh nice view and instead our options were really this brand new kind
9:28
of highle stats option that we had or the full the entirety of the trace. And so now we have this kind of middle
9:34
option which is uh it doesn't contain the every single piece of metadata associated with the trace but it does
9:40
have now the back and forth conversation between a user and an agent which has more context is suddenly more valuable
9:47
allows the the engine to understand even more about the conversation. Was there an error in this conversation? Was a
9:53
user frustrated in this conversation? And so that process of of kind of like defining more and more of these uh
9:59
endpoints that engine can pull from to find what is valuable out of a trace is is I think probably the the best answer
10:05
to that question of like making lang more agent friendly. You mentioned this was part of a CLI. So
Why the team keeps handing more control to the agent
10:12
do you give the whole CLI to the agent and is is this the same CLI that that
10:17
humans can use to interact with Langmith? Do you control what the agent does with this CLI or is it really
10:22
open-ended? Yeah, I mean we could talk about just that one question for the rest of our of our chat here. There have
10:28
been so many interesting discussions about what do we kind of like make a
10:33
workflow out of or what do we just handle hand over to the agent and let it run with? And when you say work workflow like what
10:40
exactly do you mean by workflow? When I say workflow I mean something more deterministic, right? I could tell the agent
10:45
would that be like a tool or a script or how do you represent Yeah, something like a script like whenever this
10:51
response is received by an agent then always execute this script, right? Suddenly it's it's very deterministic.
10:57
I'm not giving an agent the controls to yeah to say it wants to interact in this way. It's really easy to kind of come up
11:04
with these workflows and say, "Oh, we're going to workflowize this entire process and the first step of the agent should
11:10
always call this CLI command and then it's called this one." It's very easy to do that and it's very easy to be wrong
11:15
as well and to create these ineffic inefficient workflows that also have a an enormous amount of code. And so the
11:21
power really of agents is that you don't have to do that kind of work and suddenly they're they're capable and
11:27
competent enough to define what are the most efficient workflows. That isn't to say that with engine we give the agent
11:35
like no guidance, right? We certainly do give it controls and the ability to make these CLI commands as tool calls, but we
11:41
do give it a lot of guidance over time when we see places where it's acting in an efficient manner. So maybe like in a
11:47
in a more narrative format. Like I said, early on we were kind of tempted by
11:52
these different workflows and and by being very explicit with the different steps that the agent should take
11:58
and and just to like make that concrete like early on was engine basically like a lang graph workflow like is that what
12:04
you mean by like giving explicit steps and and being early on it was still it was still a deep agent but we would we would write
12:11
scripts for the different things that were happening. So like before the deep agent was actually running in any fashion, we would have already pulled
12:17
down all of the traces from a certain window that we thought weren't going to be valuable and we would filter them on certain things and then pass that
12:23
filtered version of the traces to the agent. So suddenly like we've already made a decision. We've already determined something that an agent could
12:29
determine on its own. Um but because we thought it was maybe more efficient or the smarter way to do it, we did that.
12:35
But over time, we would start making adjustments to this and understanding that like maybe we don't have to be that
12:40
explicit with this workflow and maybe the agent having the controls to do those things at the right time is just a
12:46
simpler way to design this. And so there's kind of like this stripping back experience as well and handing over more
12:52
when it comes to like the the full breadth of what the agent has access to and what it can do. The agent has like
12:58
we talked about access to these CLI commands and so it can pull when it's when it's deployed in its own
13:04
environment. It can pull from Langsmith traces and it can pull the existing
13:09
evaluators that you have to understand those. And so it has this this entire process of pulling information from
13:15
Langmith. Yeah, I was going to ask about sandboxes because we were talking about the CLI and I'm assuming that runs inside a
Why Engine uses a sandbox as a tool
13:21
sandbox and I think there's a bunch of talk about how how agents interact with sandboxes. Do they run inside the
13:28
sandbox or do they run outside and connect to the sandbox via a tool? I'm curious if you can share any insight on
13:35
how engine works in that regard. Yeah, so the agent that powers engine, it actually uses a sandbox as a tool.
13:42
Rather than being spun up within that sandbox, it calls out to a Langmith sandbox. So we actually use our own
13:47
product for that sandboxing to run and execute those different scripts. The agent actually runs in a lang deployment
13:54
as well, another one of our products. So our deep agents, you know, a lang chain
13:59
harness that we have runs inside of a Langmith deployment making calls to a Langmith sandbox outside for that
14:06
execution. So much Langmith products. It is a lot of Langmith products. Everything across that loop we got?
Engine's four sub-agents and the org-chart analogy
14:12
Um you mentioned sub agents before. How many different sub aents does engine use and and what are they? Yeah, right now I think it has four
14:19
different sub aents. This is again this is one of the things that we're just always experimenting with and trying to understand like what is the optimal
14:25
structure the different sub aents that we have right now the the most uh important is a screener and so or I
14:32
should say that we have kind of a main agent that is the the brain of the operation and is determining when to
14:37
spin out these different sub aents it's making some of the initial calls to set up the environment it is making the
14:43
initial pull of what we use as like a user's memory um and then it immediately executes this screener sub agent. The
14:50
screener sub agent is is like the primary way that we investigate traces. In order to avoid exploding the content
14:57
or excuse me, the context of the agent, we send out these screener agents that that will always be the ones that have
15:04
access to the entirety of a trace. If ever there's a need to look at, not this extremely summarized condensed view of a
15:10
trace, not even like this middle ground view of a trace, but the full length of a trace. If that ever needs to be
15:16
investigated for engine to determine something is wrong in a trace, all of that is always handled by a screener. So
15:21
the screener is the one that's ultimately kind of making a call and the way that this is something interesting to surface back to that original uh main
15:27
agent. The m main agent also handles that hands that over to a verifier agent
15:34
and the verifier agent is kind of doing a final very quick very light check to ensure yeah this is a problematic trace.
15:40
It should be contained in an issue etc. Like I said, we're kind of always experimenting with the different sub agents that we have in the different
15:46
structure. We do have a sub agent that is actually creating an issue. It's writing out a nice diagnosis and it is
15:51
like linking the specific traces to it. It always changes though and I think one of the things that we're learning is it's there's something kind of weirdly
15:58
familiar to to designing an org chart in a way like we have this competent main
16:06
model main agent that is then going to start delegating tasks to these screeners that are less competent and
16:11
way cheaper way faster usually but they're less capable of these more
16:16
complex decisions um but maybe they're very good at reading traces and understanding very small problems in
16:21
them. So, similar to like an Orchard, the way that like we're fanning things out and determining who's best for what job.
16:27
Does engine use skills at all or or not an avenue that that we've explored yet. It's not an avenue that we've explored
16:32
yet. We've talked a ton about it. Um I mean, we talked about actually just yesterday talking about how we should definitely be skilifying our prompt,
16:39
right? It's just like a super obvious way to reduce context. Not, you know,
16:44
every portion of the run needs to understand the entire context of our system prompt. So something that we need
16:50
to improve on. A lot of the things that we've talked about recently, it seems like, you know, are active areas of exploration. I
Evals for Engine: IssueBench, Harbor, and synthetic environments
16:56
imagine in order to do exploration, you need good evals. Um so maybe pivoting to that. What what do evals for engine look
17:03
like? It's super complex as you're as you're very familiar. And um it is a it's a
17:08
difficult challenge. Engine is evaluating several different things during its run, right? It isn't just
17:15
doing a very single obvious task that we can eval with one single set of data set of inputs and outputs. Instead, there's
17:21
all these different phases to engines run. It's finding a needle in a haststack, right? It's finding
17:26
problematic traces in this large, potentially massive list of traces and determining that one of those has a
17:32
problem and then it's correctly classifying that issue and determining what exactly is wrong with it. Does it match with existing issues? It's
17:39
generating fixes. It's generating eval. So, there's all these different phases to it. What we have landed on as maybe
17:44
like the the most important of those phases for us to really nail in order for engine to be a high quality agent is
17:52
the the process of identifying an error trace from this hstack of of okay issue
17:58
or okay traces I should say. So we have had and you've been very involved in this the process of creating effectively
18:04
a benchmark for us to understand engine's performance against a set of
18:09
traces and and a a subset of error traces and a larger set of traces.
18:15
Yeah, maybe I can talk about this for a little bit because this is one of been this has been the only place that I've been fortunate enough to contribute to
18:20
engine in some form but yeah we're working on something we call kind of like issue bench. It's a collection of hopefully around like 50 or so tasks
18:28
very much aimed at least initially on kind of like issue identification. We use uh Harbor which is a great open
18:34
source framework that powers other benchmarks like like terminal bench 2. We create synthetic environments for
18:40
these traces. So what we want to do cuz because we want to see we want to know exactly what the issue traces are
18:46
exactly which ones are issues what their category is because one of the things uh that engine also does has different
18:52
categories of errors and we want to make sure that's clustered together. So in order to do that we create this in this
18:57
synthetic environment with these issues kind of like prepopulated in it so that
19:02
we don't have to take real data and then try to label it because labeling tens of thousands of traces would be really
19:08
really hard. So we create this synthetic environment, spin up a bunch of traces, and then and then run it in in Harbor.
19:14
And the other thing that's really interesting here is that engine interacts with a lot of stateful
19:19
services. So it's using this CLI that you mentioned earlier that can interact with Langmith. And yes, a lot of that is reading, but some of that can be writing
19:25
back to Langmouth as well. And so obviously we don't we don't even want to read from real lang. And we definitely
19:31
don't want to write to real lang. So we've we've created kind of like a stub server and basically used that to
19:38
interact with and mocked out all of these different endpoints. And I do think that this is pretty generalizable
19:43
in the future of where where eval for a lot of like longunning stateful uh agents will be. That's kind of like the
19:49
offline eval kind of like benchmarking uh side of things. There's been another side of things which I haven't been
19:55
involved in which I think uh we do more kind of like online shadow testing. I
20:00
don't know if you can talk about that. The biggest way that we do like online testing is still running on our internal
20:07
agents, right? We have like our go to market agent internally. We have uh an asynchronous coding agent that we that
20:13
we send traces to linksmith with and we can do all sorts of testing and working on on engine to improve it based on the
20:19
traces from those. We're taking real traces running on them but not creating real issues to a user.
20:25
Do we like fork the project? Do we create like a new project? That's exactly right. Yeah. So that's that's running really on
20:31
like our internal agents. We create real issues. The teams that are working on those agents actually are able to to
20:36
view those issues etc. and kind of understand the changes that we've made there. In maybe like an earlier stage of
20:42
development, we actually do this shadow production where we actually take a fork
20:47
of those tracing projects, this storage of traces that are being sent to Langsmith and we run engine on this, you
20:54
know, forked batch of traces and this, you know, development version of engine is going to create new issues. Sometimes
21:01
they're terrible issues and we can understand what's gone wrong. These aren't creating issues for our teams
21:06
that are working on our internal issues. They're not seeing these. But it gives us kind of like a a second pass or like
21:12
another quick check on the issues that are being created. Do they look right? Are they written appropriately? Are they
21:18
high quality in a way that is a little bit more difficult to grasp from these
21:23
like benchmark evals that we're running um on on harbor? When we have agent running in production
21:30
in in real life, what what metrics do we track to to get a sense of how it's doing? We we track a ton and we have so
21:37
many cool uh tools that make this really easy for us, right? We use we have like our actual database tables that can
21:43
inform us like what customers have engine actively running, who's turned it on, how frequently is it running, how
21:50
many traces is it ingesting in each one of those runs. Those actual like database are very helpful for us just to
21:55
have a highle view of who's using the tool. Um engine actually reports back on
22:00
a lot of its metrics as well. Like I like I just mentioned that it we'll be able to see the number of traces that
22:06
are ingested by engine. There are a variety of things that engine will kind of spin back to us and inform us like x
22:13
amount of traces were were analyzed. It gives us insight into the size of those traces that it's ingesting the latency
22:19
of its own runs like we start to understand a little bit more about how engine is running for the different customers that we work with. So that's
22:25
kind of like the the engine internal stats that we get to see as well. Uh we also do a lot of user tracking to
22:30
understand how users are engaging with the actual issues. We've talked a ton about the agent and like the under the
22:37
engine behind engine right like how it's how it's all investigating and surfacing these issues but there's also this
22:43
entire product side where users are interacting with those issues and um making adjustments to the fixes that it
22:50
proposes. And so we have lots of user analytics there as well. But I mentioned that we have like so many awesome tools.
22:55
We use the hex agent a ton to spin up like dashboard, new dashboards every day for the things that we're looking at and
23:01
it is in my mind like one of the agents I use most frequently. One of the most interesting things about
How Engine evolved: from noisy PRs to an issue inbox
23:07
engine I think is the fact that it's like an ambient style agent. It just runs in the background, runs on a schedule. I think that also makes for
23:13
really interesting UIUX considerations. When do you bring the human in? Um how does the human interact with this agent
23:20
that's running the background? Um, could you speak a little bit about how you think about UIUX for engine? Any
23:26
evolutions that have taken place and and and what that like human in the loop looks like for these ambient style
23:31
agents? The very first version of engine like this the simplest form was that it
23:37
would just spin up PRs and it would just create PRs for different issues that it found and so many of those PRs were bad
23:43
and it suddenly was just super noisy, right? like no one wants to deal with a huge list of PRs that they have to go sort through and understand the commits.
23:50
No matter how good your description of that PR is, like it's just too much. And so very quickly this concept of like an
23:56
inbox became uh like a good option and one that we started kind of socializing
24:02
with our early testers and customers. Um and it just made sense because there are there are these different clustered
24:08
problems that engine will be able to identify that have their own history. And so this inbox gives you a a very
24:14
clear diagnosis of, you know, what problem that has been encountered, what exactly is going on, as well as a look
24:20
into how frequently has this been going on. Is this is this a long-term thing that you've seen for a month? Is it happening to every one of your traces or
24:27
some small subset of that? But all of that is kind of like a new alert that a user can interact with. Um, but with
24:33
each one of those alerts, rather than just something to be made aware of, there's a series of actions that can be taken. Um, and so this is something that
24:39
we're like every day making tweaks to is what are the optimal steps for a user to
24:45
take? What are the easiest ways for a user to take a set of problematic traces
24:52
and come out with a better agent and like yeah, how can we optimize that flow from seeing and understanding this is
24:58
going wrong in my agent. This is the exact fix I need to make and this is um how to deploy it or test it um most
25:05
effectively. So that process has been a lot. It's it's honestly been a challenge to go from like just surfacing a problem
25:11
or a PR to informing a user in the right way and encouraging them to fix it in the right way. The last thing I'll note
25:17
on that as well that has been also difficult to kind of bake into the equation here. A user has so many unique
25:22
preferences and so many unique insights into the uh issues and into the agent itself. We often find that things that
25:30
are real issues that we can, you know, say are objectively problems with the agent are just unimportant to an issue.
25:37
They're just unimportant to a human. And so, uh, that team might not care about times when the context has exploded or
25:44
they might not care about these minor hallucinations. And so, that process of saying, "Yes, this is a real problem. I
25:49
don't care enough to solve it. Let's move past it has also been interesting as we've tried to like make engine learn
25:54
more and more from a user." One of the big things that we try to talk with customers about when they're building
Inside Engine's memory: the agent overview document
26:00
agents is try to try to figure out the the bodies of work where you can do a ton of work, but there's still like a human involved at the end. And I think
26:07
we practice what we preach a little bit with engine because I think it does do all this work, but there's still human involved before it opens up that PR
26:13
before it adds an evaluator or before it adds a data set. But it but but but I think we can have it do a a lot of this
26:20
work. you mentioned at the end kind of like uh there's all these issues that that that people might not care about
26:25
for whatever reason. I imagine it would be pretty annoying if we kept on bringing up the same issues over and
26:31
over to to users. How uh how do you think about memory in engine?
26:36
Within engine specifically, I mentioned at the beginning that there's an opportunity for a user to kind of
26:42
describe things that they're interested in right up front before uh you know engine even does its first run. That
26:48
might be like we've talked about you know specific categories that are important to the user. That might also be like important nodes of information
26:55
that engine should have about my agent like hey it calls this separate sub agent. It's important for you to
27:00
understand the distinction between the two. All sorts of these different preferences or understandings that the user can express to our agent. The way
27:07
that we handle memory is through what we call this agent overview document. Um it
27:12
basically is like a like a quad MD or an agents MD file that engine is able to
27:18
reference and it does reference on every single run to understand you know has the has the user's preferences changed
27:24
are their interests different has the structure of the agent been adjusted um and so that's referenced on each run
27:30
it's updated on each run it's updated as a user interacts with these different issues the process of creating a memory
27:36
storage and updating is super simple it's very hard to do so in a context efficient way. Um it's also very hard to
27:45
like the user interface to encourage the kind of extraction of important information from a user to add to that
27:51
memory. Like obviously engine will not work very well for a certain subset of customers right out of the box and it
27:57
will work really poorly with you know like a a muddled memory that has all sorts of things they don't care about.
28:03
But trying to really understand what are the things that a user cares about is super super challenging. Do we give
28:08
people the ability to leave natural language feedback on issues? Yeah, we do. Every time they every time they ignore or they resolve or they say
28:15
that this is not a high priority, this is a low priority, they have the option to add in like this is low priority,
28:20
don't tell me about this in the future. Yeah, I think that's great. And I think capturing all of that and then passing it the the thing that I think is really
28:26
interesting about memory with uh engine actually is there generally we see that there's kind of like uh two different
28:33
ways that you could do memory for agents. One, you could have the agent as it's running and interacting with the
28:40
user basically update its own memory. And then the other way you could do it is you could have a process that runs in
28:45
the background and looks at all the interactions it's had recently and then and then updates its memory kind of like
28:50
in the background. Kind of combine them here because there's never a place where the human's directly interacting with uh
28:58
engine. Um they're leaving feedback but then that gets picked up on a background run. And so it's it's kind of something
29:03
that's um yeah twisted my mind a little bit where it's this it's this weird hybrid of like yes the engine is doing
29:09
it engine can update its agent overview whenever it does a run and it looks at all this feedback and it has that um but
29:15
it is like a a background process of sorts. So I thought that was kind of like an interesting middle ground for
29:20
some of these things. We talked about cost uh a little bit earlier on and yeah I mean I imagine
How to keep an always-on agent from blowing the inference budget
29:27
running engine over a ton of traces can get expensive. How are we making sure we don't make Langqing go bankrupt?
29:33
Yeah, it is it is very hard and I often get messages from from you or from from
29:40
uh our our head of engineering letting me know that our our bills for our inferences are going crazy. Um uh it's
29:48
something that we're always working on improving. It has become one of the things that has been fun to experiment
29:53
on in the process of improving the agent. there are all sorts of these different obstacles or or different
29:58
bottlenecks that we are able to identify and then work on improving. Um, if we were to run like a state-of-the-art opus
30:05
model to do everything that the agent does, a screener is using opus or a state-of-the-art model from OpenAI, if
30:11
it's running on on one of these high-owered models is going to run up a huge bill for us. And so the process of determining again going back to like
30:18
model selection, determining which models can be used for different tasks has been very interesting. where can we
30:24
use a less competent much cheaper model to run this process and that all goes back to this kind of like process of
30:30
running evals where we have a hypothesis we might do investigation to understand that this portion of the run is
30:37
responsible for 33% of our total cost how can we reduce that specific part of the run can we switch out elements of
30:43
that to a different model that kind of investigation is super interesting and then it's a ton of of experimenting and
30:49
hill climbing against our evals with the different changes that we've made practically speaking
What models Engine uses
30:54
What what models are we using today for different parts of the agent? Right now we use honestly a cocktail of
31:00
different models. We use anthropic models. We use Opus as a as a main agent. We also use uh models from OpenAI
31:08
like 5.5. We use Haiku models for a lot of our our screeners or our verifiers.
31:14
We've swapped in Gemini models at different times. We've also explored a lot of different uh open source models
31:20
for especially for these less challenging tasks like for these screener sub agents that are doing just like a very quick analysis of a trace
31:28
but it is it is really changing frequently. We launched engine I think publicly about a month ago at this
How Engine was rolled out: from Forge to public beta at Interrupt
31:34
point. What did what did the roll out of engine look like from kind of like initial idea to to now I guess and like
31:42
who have we launched it to? How have we how have we incorporated feedback? What what what does that kind of like roll
31:48
out of an of an agent look like? It's really just been like a slow expansion of customers that have been
31:54
onboarded to this new feature. And you know, we've had really awesome design partners earlier early on that were
31:59
excited about the vision and very trusting in a you know a very early very bad version of what the agent was. The
32:06
earliest version of the agent we call it we called it forge back then. this kind of uh early prototype was running with
32:14
some of our customers like Credit Genie or Unifi. Um and I I mentioned before
32:19
that it was putting up these these PRs and it was very easy to get feedback because these teams are super familiar
32:25
with their agents and the the the kinds of errors that they should be looking out for. These teams are agent engineers
32:31
that are used to looking through Langsmith traces and identifying problems and then putting up fixes for
32:36
those exact uh problems that they've identified. And so the feedback loop was really strong, especially when it comes
32:42
to the agents ability to find traces that were meaningful and to put up good
32:47
uh fixes for them. But it really has just been this this process of expanding the group of users that are using it.
32:52
Sometime in I believe it was March, we started rolling out the earliest version of of of engine um to maybe five to 10
32:59
customers. We had kind of like a an expanded beta, private beta where we had
33:04
more customers using it. we had suddenly an interface within Langman that they could interact with um again low quality
33:10
but something that that was uh able to get us a lot of feedback and then just at interrupt we launched our more
33:16
available version of engine uh and then we've had this you know deluge of of feedback that has come in
33:22
I think one of the things that we emphasize as a company is is shipping quickly and then and then iterating
33:28
rapidly after that and I and I think I think we did a pretty good job with that here I remember you and and Palash and
33:33
some of the team members shipped like a version of this so fast and it was incredible to see as you said we basically grew the blast race. We tried
33:39
it out on internal agents and then we tried it out with like two design partners and then I think by the time we
33:44
launched it we had like 20 or so design partners using it and then and then it went I think like yeah we I think we
33:50
definitely practiced that like launch quickly iterate rapidly uh philosophy that we have
33:55
and I think that what has made that so possible is like our ability to to write and ship code is extremely fast with
34:02
coding ages now. we really could be making meaningful changes to the agent in a matter of hours. So we hear
34:09
feedback in the morning from one of our design partners, make a quick change, run engine again for them, and get additional feedback by the afternoon.
34:15
And so the the pace has been kind of frightening. Let's maybe talk about that for a little bit. Like what does the team building
Inside the two teams building Engine
34:22
engine look like? It's very different from what I'm used to as a product manager. I'm used to
34:28
like a team of product engineers and some kind of you know architect really that's doing more of like the infra on
34:33
the team. We still obviously have a lot of product engineering to be done. We have an interface within lang. There's
34:38
obviously a lot of components of infra as we use our lang deployments product. We have these sandboxes that that engine
34:45
utilizes. But there's also this kind of newer branch where we have our agent engineers on the team. There's a very
34:51
different process for the two teams, right? you have it's not quite agile anymore with the speed that we're working with with new coding agents like
34:57
it's extremely fast but it involves us saying here's a very specific product outcome that we want we're going to do
35:03
some kind of like early design dock or or spike on that and then we'll implement that very quickly uh now with
35:09
coding agents the process for like the second part of our team this applied
35:14
agent engineering team is very different where as we've been talking about it's more of like this experimentation flow
35:21
where we are sitting down together and coming up with, you know, wow, the agent is taking a ton of tokens to be to
35:27
running this specific process or this sub agent is taking forever. What are some potential ways that we could reduce
35:32
that and coming up with these different hypotheses? And then throughout the course of a week, usually we'll say like
35:38
these are the hypotheses we want to implement. Let's test them out. We run our evals against them and then usually the latter half of the week we're
35:44
implementing something like that. So the flows and kind of like the the style of engineering is so different across the two teams. And then there's obviously
35:50
places where they interlap, where they overlap. So we have other AI products in Langmith as
Where Insights, Polly, and Engine are converging
35:57
well. Um, and I think in some ways engine is an evolution of them, but then
36:02
also in other ways we still need to figure out how to make them work well together. Maybe I can talk a little bit about how I view some of the evolution
36:10
bits and then I'd be really curious to hear your take on on a anything that I miss, but then b what the future looks
36:16
like. So I think two of the previous AI experiences we we had and still have in lingsmith are insights and poly. And so
36:23
insights it basically clusters uh it runs over traces similar to engine. It
36:29
clusters them. It does two levels of hierarchical clustering and basically shows you insights different trends of
36:35
what's happening in your trace data. Paulie is a chatbot that sits inside links with I'm actually not sure which
36:41
one was launched. Do you know which one was launched first? I have no idea. I think it was before my time here actually. I think I think insights was launched first even though
36:48
the chat's the more basic thing. Um but uh the the chat we we really didn't want to do kind of just a general chatbot and
36:54
so we tried to focus on places where it would provide value and two of those places were within the tracing project. It was within a trace and within a
37:00
thread and you could basically ask it what what was going wrong and then the other place was in a playground and you could ask it to fix the the the prompt
37:06
that was there. And in some ways I kind of view engine as combining uh the best
37:11
parts of both of them. So insights ran over all your traces interesting but not
37:16
actionable like in order to take an action you'd have to think about what to do and then go do it and and then insights also was kind of broad. It gave
37:22
you these clusters. Poly was very focused on on specific things and in playground you could you could actually
37:28
ask it to fix things. And so engine I think kind of combines the best of both worlds because one one downside of poly
37:35
is we never had it had a mode where you could chat with it and ask it to do like massive trace analysis because that's a
37:40
hard problem. And so engine a it lets you run over all your traces just like insights and and and and solves the pain
37:46
point of poly, but then it produces these really actionable things that you can do, which was a pain point of of
37:51
insights, but something that Poly did well. So I kind of view it as bringing the best of both worlds together. I'm I'm curious from your perspective
37:58
building out engine and interacting with these others, will they all just be part of engine in the future? Are there
38:04
differences? How how how do you think about that? There are differences between the three nodes that we've
38:09
talked about between insights, engine, and poly. I think that there is something really exciting to me about the actionability of engine. Right now,
38:16
I'm going not just from like understanding my traces, but I can now use those to make a change to my agent,
38:22
which I think is really cool and I think is like the the right direction. I still think that there are like components of
38:28
insights and poly that engine does not do very well. For example, engine is really good at giving you, you know,
38:34
very specific uh issues that I'm going to go fix, but I I actually don't understand that much about the status of
38:40
my a of my agent from engine. I might look at a list of issues and determine I have 15 issues here. Something is
38:46
majorly broken when in reality they might be smaller issues and and that isn't a great sense of like the health
38:51
of my agent or it's general metrics. And so insights maybe doesn't do that perfectly today, right? It gives us some
38:57
nice clusters of what's how are users interacting with my agent. But there is this zoomed out view of insights I think
39:02
is really important and I think engine is lacking that. And so maybe there's like a a combination of the two where I
39:08
can see both a very actionable set of issues that I'm going to resolve as well as a as a highle view of is everything
39:15
okay on my agent? How are people using my agent? What are they asking it? You know what are general problems that
39:20
we're seeing or categories of issues that we're seeing? Moving on to poly like we we've talked about how engine is
39:26
running on a schedule right now and it doesn't have the interface to necessarily interact with the user in an easy way but we've also seen times where
39:33
a user doesn't want to just be fed this list of alerts or issues and they want to ask questions to engine like you know
39:40
AC across across my agent is my latency getting worse this is something that
39:45
engine with its ability to look through traces could very easily do with you know some minor tweaks to it but right
39:51
now it doesn't allow for so I I think there's there's kind of like elements of these other components that we've built in Langmith today that I think engine
39:57
should probably adopt or maybe there is a world where they totally all just meld into one agent that runs on top of Langmith. Um, but I think they all could
40:05
mesh together nicely. Kind of continuing this, you know, we talk about engine as an agent for agent
The missing piece: testing a fix before it ships
40:10
engineering. What other parts of agent engineering could we help automate or
40:15
help do with agents in the future, whether it's part of engine or some other thing? The biggest one that I feel
40:23
really excited about and there are a lot of unknowns to and a lot of challenges that that we've talked about and
40:28
outlined, but um right now engine I think sits more squarely on this like
40:33
monitoring function of an agent engineer's work. It is it is looking at traces and investigating and clustering
40:38
them into things that are more easily digestible for an agent engineer. And so it does that functionality really well.
40:44
It could probably improve a lot on its ability to make fixes and to build for an a for uh these agents and to make
40:50
those agents better, but it does that today. The compon the component that I think engine is missing today is this
40:56
testing ability. Right now, engine will find an issue, service it to a user alongside a proposed fix. The user if
41:04
they if they're kind of like following standard agent engineering practices before they implement or merge that fix
41:10
into production, they're going to ensure that it passes their eval. and they're going to run these regression tests to
41:16
ensure that this is an appropriate fix. It's not going to, you know, nuke all these other use cases that we've seen
41:21
previously with agents. That's super easy to do if you're making a tweak to a prompt. And so, right now, engine will
41:26
create data set examples based on those production traces. If a user said, you
41:31
know, something inappropriate and your agent handled that poorly, it will create a golden uh data set example of
41:38
that input so that your evals can include that in the future. That's really as far as it goes right now. It it doesn't actually run that experiment.
41:46
That process of of running your agent, not really your agent, but a new version
41:51
of your agent with this proposed fix against these new evals is very challenging, but something I think is
41:57
really exciting. What that would effectively mean is engine would find issues from your production traces,
42:03
propose fixes that are tested and kind of like hardened because they have been run against your eval so that we can say
42:10
with some degree of confidence, you know, this this is a good fix. It will not regress other inputs that you've
42:16
seen with uh your agent in the past. So that's a direction I'm super excited about. There are a ton of challenges to
Running a branched agent, and the write-access eval problem
42:22
that. We've talked about this a bit. What what are some of the challenges? The the first is this like this this question of running
42:28
your branched version of your agent, right? Like if engine is going to make a proposed fix, it is going to make an
42:35
adjustment to your agent. And how do we how do we run that agent? We have to have all of the environment variables.
42:41
We have to have like the API keys available to us. It's easy to make the change and to make a pull request against a specific agent. It's very
42:48
difficult to run that agent in some environment. The components that are necessary to run that agent, I think are kind of uh difficult to scope out.
42:54
That's one of the components. The other element that I think is very challenging is that there are a subset of agents
43:00
that are making read only tool calls like a we have a an agent internally
43:07
called chat lang chain that is like our docs agent and it will ask or it will answer questions about our documentation
43:13
or about what is lang capable of what are deep agents an agent like that is just reading from different uh data
43:20
sources and it's not making any updates to those data sources to run a branched version of that agent is very easy
43:26
because it can make these tool calls with no real world effect. It doesn't matter if it calls my production tool
43:32
call to my documentation. It's not going to make an adjustment. If I'm running a branched version of my agent that makes
43:38
real world write access tool calls, suddenly I might be modifying my
43:44
database. I might be sending out emails to a customer and interacting with the real world in a way that is still in a
43:50
development stage. It's really a process of creating an eval environment for these right access agents I think is
43:57
super challenging and I actually don't think that a lot of teams that are building agents know exactly the right
44:02
way to to build those environments. Yeah, I completely agree. I mean I think the running evals is is is really
44:08
interesting but but you have to have eval first kind of and unless you unless we help people create evals as well
44:14
which I think is also a really interesting direction. you spoke about the process of of like recreating these
44:19
environments to run evals for engine right where we have like these stubs for lang maybe you can speak to that like
44:26
like what is that that feels like the process that customers would have to undergo if they want to run eval as well
44:32
open research question unfortunately I think it's really really hard um and and and that part of the reason is because
44:38
there is uh a lot of domain expertise involved so let's take the chat lang chain example um if we wanted to create
44:44
let's say this This is a real thing like we use mintify for for our docs and we use it in chat link chain but we didn't
44:50
want to use it for our eval because we were potentially thinking about doing RL and we didn't want to do a ton of
44:56
rollouts and slam the mintlifi servers. So we thought about creating this synthetic environment and and one way to
45:02
do it would be to okay let's point it at the traces we can get a good sense of like what questions are asked that's definitely feasible we can have some
45:08
sense of what like we can get a good sense of the tools that are used and the input schemas and the output schemas
45:14
totally feasible we can get some sense of the documents and the underlying data not all of them but we can some of it
45:19
there and you could imagine pointing a coding agent at a bunch of traces and being like hey go create like some synthetic mock server that's just not
45:26
the the the right way to create it the easiest way to created is like, hey, we we have all the docs in markdown format
45:32
in our repo. Like, let's just pull those down, put those on disk, create some synthetic uh questions by basically
45:39
taking a document, finding an answer, and then creating a question for that, and then and then basically use like GP
45:45
or something as a as a as a fake search and and use that to mock out the server. It's far more reliable. It's just better
45:51
to do. And so, that's an like I don't I don't think a coding agent that was tasked with looking at a bunch of traces
45:56
could ever come up with that. I mean and so maybe you just say hey like in those scenarios like yeah humans should be
46:01
involved and and do that but for other scenarios like we can automate that and and that's more of an open research question really hard problem but I think
46:07
would be super super interesting. It's funny because like it's very applicable to engine and making engine better. But
46:13
the reason that it's applicable to engine is because it's so applicable just to these agent engineers. Like that process of defining that is so so
46:20
challenging. And so many of the customers I'll talk to will ask this question of like wow cool that engine
46:26
proposes a fix but how does it test the fix? Yeah. And I'll explain like well you would have to test like a we can't we we don't
46:32
have a really obvious way to create this environment to run evals in. Right now, engine's mostly used for first-party
Using Engine as long-term memory
46:38
agents that teams are building and it suggests a bunch of code fixes and adds
46:44
eval and adds data sets. I think it's also but but this process of running uh
46:49
agent over traces is I think a general process and I think there's other things you can use it for. I have one idea
46:55
that's top of mind and then I'd be curious what other ones you have. So, one I'd say is is is for memory. Um, so
47:00
we released a video earlier today of using engine to power long-term memory for an agent specifically using it as
47:07
like sleeptime compute. So we traced all the interactions to Langmith with just
47:12
normal tracing and then we ran engine over all those traces and we pointed it at our context hub. And in our context
47:19
hub we had the agents memory. We had it's like agent.mmd files and some skills and then this background process
47:24
engine basically suggested changes to the skill files and to the agents.mmd
47:30
and and then once those were merged those could be pulled back in for future runs for the agent. And so in that way I
47:35
think you can use engine as as memory. What else could you use engine for? Something that we've gotten a lot of
Pointing Engine at coding-agent traces
47:40
requests for as well is for running engine on top of coding agents and that is it sounds very similar to like what
47:48
we do for these bespoke agents that our customers build and then trace to Langmith. The difference is that they
47:53
aren't making modifications to the middleware to the prompting of the agent. Instead, they're making adjustments to skills or uh you know to
48:01
these these agents MD files. It is very similar, right? Like at its core, it's still the same thing of ingesting and
48:07
analyzing for issues across different traces, clustering those into things that make sense as a group and then
48:13
proposing a specific fix. In this case, the fix is maybe not a prompt change or a code adjustment. It is just like the
48:18
creation of a new skill or the adjustment of an existing skill. So, it's it's I mean, it's very very similar, but there is a difference to
48:25
that in the sense that like it needs to be tuned for quad code traces or for
48:30
codeex traces, right? it it needs to be modified slightly and then it has this uh in a sense it is it is very related
48:36
to your point on memory right like it's a different kind of file that is that is being output of this it actually brings
48:41
up another point that I wanted to mention which was that we currently run engine on top of engine traces
Running Engine on Engine: the meta self-improvement loop
48:50
h um does it find a lot of stuff it does it's super valuable so engine is
48:55
running on top of traces from an existing agent sometimes that's a customer agent but you know for this use
49:00
case that I'm describing and it's our internal agents. Engine as an agent produces its own traces and so we have
49:08
another engine that runs on top of those traces. So meta. It is super meta. When we first thought
49:13
about this is like very early on that we kind of joked about this and we assumed that it would be crap and that it wouldn't actually help in any way to find real traces, but it's been
49:19
extremely helpful and it's actually one of it's becoming more and more like one
49:25
of the primary ways that we find improvements to be made on engine. like my my dream is that our team just uses
49:32
engine for any of the agent engineering so that we can find problems in our production traces and make fixes. So it
49:38
is it is an interesting process but what you're describing of like using memory and and uh using engine for these
49:45
different things has just you know brought this to mind that like engine is kind of just this improvement loop for
49:50
whatever kind of agent whether it is a coding agent whether it is something that relies on memory whether it is engine itself right like it just is this
49:57
improvement driver. Thanks for listening to Max Agency. If you liked this episode
50:02
leave a review and subscribe. Send feedback or questions to max [music] agency langchain.dev.
50:09
We want to hear from you.

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
source_url: https://www.youtube.com/watch?v=YqjR4vQwbTc
source_title: The best AI agents need less code than you think
series: Max Agency: A Podcast on Building Agents
channel_or_org: LangChain
speaker: Ben Tannyhill (Product Manager, LangChain)
published_at: Jul 2, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + timestamps + description + chapter list
content_type: production agent architecture / LangSmith Engine / self-improving agents / trace-driven engineering / multi-agent delegation / agent memory / sandboxed execution / inference budgets / production operations / agent engineering platform
source_reliability_context: Official LangChain engineering podcast. One of the strongest implementation-level discussions on production agent engineering. Covers LangSmith Engine architecture, trace-native development, delegated sub-agents, memory design, evaluation strategy, sandbox tooling, and continuous self-improvement. Strong primary source for modern agent engineering philosophy.

priority: 4.75/5
depth: architecture_spine
recommended_status: route to AI Substrate, CNS, Agent Runtime, Agent Work Protocol, Evaluation Framework, Observability, Runtime Economics, Build-OS, Memory Doctrine, and Self-Improving Systems.

Topic tags:
[LangChain, LangSmith, LangSmith_Engine, Ben_Tannyhill, Max_Agency, production_agents, agent_engineering, trace_driven_development, observability, condensed_traces, self_improving_agents, multi_agent_delegation, org_chart_architecture, screener_agent, verifier_agent, specialized_subagents, agent_memory, overview_document, sandbox_execution, Harbor, IssueBench, synthetic_environments, evaluation_pipeline, pull_request_generation, inference_budget, production_traces, continuous_improvement, runtime_economics, AI_Substrate, CNS, Build_OS]

Priority: 4.75/5
Depth: full semantic for Build-OS / agent-improvement substrate
Recommended status: route to Build-OS / Intelligence Foundry / Agent Work Protocol / Knowledge Reservoirs / operating_metrics / Polaris proof layer / agent runtime economics. This is richer than the title suggests. It is basically a real-world case study of an always-on agent that improves other agents from production traces.

Core takeaway

LangSmith Engine is described as an agent for agent engineers: it watches production traces, finds failures, clusters them into actionable issues, proposes fixes, and helps generate eval examples before deployment.

OMNI translation:

Build-OS should not only help humans build OMNI. It should eventually watch OMNI’s own agents/workflows, detect recurring failures, cluster them into issues, propose fixes, generate evals, and feed improvements back through governed review.

This is the strongest practical source so far for the self-improving agent-development loop.

Not self-improving in the unsafe “agent rewrites itself and ships” sense.

Self-improving as:

production traces → condensed issue discovery → clustered issue inbox → proposed fix → eval example → sandbox test → human approval → merge/deploy → monitor again

That is extremely OMNI.

Key concepts to preserve
1. Agent for agent engineers

Engine exists because the agent development lifecycle has many manual steps: modify agent, run tests, deploy, monitor traces, find failures, propose fixes, and test again. Engine automates parts of that loop.

OMNI keeper:

Build-OS needs a role like this.

Potential primitive:

agent_engineering_agent

An agent that monitors agent/workflow traces and helps maintain the agent system itself.

For OMNI, this could watch:

Build-OS agents
D7 extraction agents
patient message triage agents
intake routing agents
clinical evidence agents
billing/entitlement reconciliation agents
campaign agents
workflow/resolution agents
2. Trace → issue → fix → eval loop

Engine ingests traces, detects explicit errors or unmet user needs, clusters them into actionable issues, surfaces those issues, proposes a fix via PR, and suggests dataset examples for future evals.

OMNI keeper:

This is the agent-maintenance loop OMNI needs.

Doctrine candidate:

A production agent must emit traces that can become issues, fixes, and evals.

This connects directly to:

Evidence Plane
operating_metrics
Polaris proof
Build-OS
Knowledge Reservoirs
agent eval bundles
3. Always-on monitoring agent

Engine runs in the background on a schedule, monitoring incoming traces and clustering issues.

OMNI keeper:

Always-on agents are valuable, but they need:

scope
schedule
budget
trace access limits
issue inbox rather than direct action
human review before PR/merge
suppression/memory for low-priority issues

This fits OMNI’s “condition watch” / patrol / exception agent concept.

4. Condensed trace views

Engine cannot ingest millions of full traces directly. It uses condensed/summarized trace views first: input, total tokens, latency, size, and other basic stats, then dives deeper only when signals look interesting.

This is a major concept.

OMNI keeper:

Agents need layered trace access, not full context by default.

Possible OMNI trace tiers:

trace summary
message view
tool-call view
full trace
source artifacts
sandbox replay

This is the same architecture as patient context packets and Knowledge Reservoirs:

Start with compact signals. Expand only when needed and authorized.

5. Agent-native observability surfaces

They purpose-built intermediate trace endpoints because the old options were too thin or too huge: high-level stats versus full trace. The middle “messages view” gave the agent the useful back-and-forth without every metadata field.

OMNI keeper:

Make OMNI surfaces and APIs agent-readable.

Not just human dashboards.

Future OMNI needs:

agent-readable operating metrics
agent-readable audit summaries
agent-readable D7 extraction reports
agent-readable patient context summaries
agent-readable workflow state
agent-readable issue inboxes

Doctrine candidate:

Observability must serve both humans and agents, with tiered context views.

6. Workflowize vs hand control to the agent

The team debated whether to make deterministic workflows/scripts or give the agent tools and guidance. They found over-workflowizing can create brittle, inefficient code, while giving the agent controlled tools can be simpler and more effective.

This is subtle and important.

OMNI translation:

Not everything should become rigid workflow.

But not everything should be free agent autonomy either.

The right middle is:

deterministic rails for authority, safety, and commit
agent discretion for search/investigation/synthesis
guided tools
evals to decide whether discretion works
traces to detect failure

Doctrine candidate:

Workflowize authority; delegate investigation.

That’s a good OMNI line.

7. Sandbox as a tool

Engine does not run inside the sandbox; it calls a sandbox as a tool to execute scripts.

OMNI keeper:

Sandboxing can be a callable capability, not only the agent’s host environment.

For Build-OS:

main agent remains in orchestration environment
sandbox tool executes risky code/tests
sandbox returns outputs/traces
main agent reasons over results
no direct production mutation

This sharpens agent eval bundles and safe code execution.

8. Org-chart style subagents

Engine has a main agent plus subagents, especially screeners and verifiers. Screeners inspect full traces so the main agent does not explode its context. A verifier does a quick check before issue creation. The speaker compares the structure to an org chart: a competent main agent delegates to cheaper, faster, narrower subagents.

OMNI keeper:

This is a practical implementation of the prior “bounded responsibility” source.

Possible OMNI Build-OS subagents:

trace screener
citation verifier
issue classifier
fix proposer
eval generator
regression tester
cost screener
security reviewer
memory curator

Doctrine candidate:

Subagents should protect the main agent’s context and budget by owning narrow, repeatable inspection work.

9. Eval is multi-phase, not one score

Engine is hard to eval because it performs several tasks: finding error traces, classifying issues, matching existing issues, generating fixes, and generating evals. They built IssueBench with synthetic environments and prepopulated issues so they know ground truth.

OMNI keeper:

Complex agents need phase-specific evals.

Do not ask “is the agent good?”

Ask:

did it find the right trace?
did it classify the issue?
did it avoid duplicates?
did it propose a valid fix?
did it generate a useful eval?
did it avoid regressions?
did it stay within cost?

Doctrine candidate:

Multi-step agents require phase-specific evals.

10. Stubbed stateful services for eval

They created stub servers/mocked endpoints because Engine interacts with stateful services and may write back. They did not want evals reading or writing real LangSmith.

OMNI keeper:

This is crucial for OMNI.

Any agent with write access needs synthetic/stubbed eval environments.

Examples:

do not send real patient messages in eval
do not mutate real D6 ledger
do not write fake Clinical Memory
do not alter live schedules
do not create real orders
do not call real payment rails
do not email patients from eval

Doctrine candidate:

Write-access agents require synthetic environments before eval.

11. Shadow production

They also run Engine on forked/internal traces in “shadow production,” creating issues that users do not see, to test quality against real-ish data without affecting customers.

OMNI keeper:

Shadow mode is essential for clinical/business agents.

Possible OMNI uses:

run new triage agent silently against patient messages
run new D7 extractor against documents without committing
run new scheduling resolver against historical events
run new billing reconciliation on cloned data
run new clinical evidence retriever on prior cases
compare outputs before enabling action

Doctrine candidate:

New agents should earn production authority through shadow runs before live action.

12. Metrics for always-on agents

Engine tracks customers active, run frequency, traces ingested, traces analyzed, trace size, latency, and user engagement with issues/fixes.

OMNI keeper:

Always-on agent metrics should include both runtime and adoption:

runs
traces inspected
issue yield
accepted issue rate
ignored issue rate
fix acceptance rate
cost per useful issue
latency
recurrence suppression
user trust/engagement
regression prevention

This belongs in operating_metrics.

13. Issue inbox beats noisy PRs

Early Engine created PRs directly, which became noisy. They shifted toward an inbox of clustered problems with diagnosis, frequency, history, and actions.

This is very important.

OMNI keeper:

Ambient agents should not spray work into high-friction surfaces.

They need an issue inbox / exception surface.

For OMNI:

patient message exception inbox
D7 extraction issue inbox
clinical-evidence issue inbox
billing mismatch inbox
agent failure inbox
care obligation exception inbox
Build-OS issue inbox

Doctrine candidate:

Ambient agents should surface clustered issues before creating disruptive work products.

14. Memory via agent overview document

Engine uses an “agent overview document” like an agents.md file that is referenced every run and updated based on preferences, structure changes, and user feedback.

OMNI keeper:

This is a concrete memory pattern:

explicit file/document memory
referenced every run
updated from feedback
concise enough for context efficiency
user preferences and agent structure included
avoids re-surfacing ignored issues

Potential primitive:

agent_overview_document

A governed memory file for an agent/workflow lane containing structure, preferences, non-goals, known issues, suppression rules, and current priorities.

Guardrail:

Memory must be curated and scoped. A muddled memory makes the agent worse.

15. Always-on inference budget

They explicitly discuss inference bills, model selection, identifying expensive run segments, switching subagents to cheaper models, and hill-climbing against evals.

OMNI keeper:

This connects directly to tokenmining / runtime economics.

Always-on agents can bankrupt you unless they have:

trace condensation
model routing
cheaper screeners
budget caps
cost attribution by phase
eval-based model substitution
schedule/cadence control

Doctrine candidate:

Always-on intelligence needs an inference budget, not just permission to run.

16. Model cocktail by task

Engine uses a mix of Anthropic, OpenAI, Gemini, Haiku-style cheaper models, and open-source models for less challenging screener tasks.

OMNI keeper:

This affirms:

model routing by task
no one model for everything
cheaper models for narrow screeners/verifiers
premium models for main synthesis
eval-gated substitutions
17. Design-partner rollout / blast-radius expansion

Engine rolled out through internal agents, a few design partners, private beta, then broader launch. The team expanded blast radius as feedback improved.

OMNI keeper:

This is exactly how OMNI should roll out risky agent features:

internal use
sandbox
shadow production
one trusted operator
small beta
opt-in
monitored expansion
human approval retained
blast radius widened only after evidence

Doctrine candidate:

Agent authority should expand by earned evidence, not feature launch.

18. Two engineering modes: product engineering vs applied agent engineering

The team has normal product/infra engineering, plus applied agent engineering driven by hypotheses, evals, cost bottlenecks, subagent experiments, and rapid iteration.

OMNI keeper:

Build-OS itself may need two modes:

product engineering: interfaces, infra, domain contracts, production systems
agent engineering: traces, evals, model routing, memory, subagents, prompts, skills

This is a useful organizational insight.

19. From insights/chat to actionable engine

They compare prior products: Insights gave broad trace clusters but not actionability; Poly offered focused chat/fixes but not broad trace analysis. Engine combines broad trace analysis with actionable issues/fixes.

OMNI keeper:

A dashboard is not enough. A chatbot is not enough.

The winning surface is:

broad observability → clustered diagnosis → action proposal → eval/proof → human decision.

This applies to OMNI owner dashboards, patient ops, workforce intelligence, and Build-OS.

20. Missing piece: test the fix before it ships

Engine can find issues and propose fixes, but the next big step is running the proposed fix against evals to prove it does not regress prior use cases.

OMNI keeper:

Proposed fixes are not enough. They need regression proof.

Doctrine candidate:

A fix is not ready because it addresses the issue; it is ready when it passes regression against the workflow’s eval corpus.

21. Branched agent + write-access eval problem

Testing a proposed fix requires running a branched version of the agent with environment variables, API keys, and realistic tools. Read-only agents are easier; write-access agents are hard because they may modify databases, send emails, or affect the real world.

OMNI keeper:

This is a major OMNI security/eval law.

Care/business agents are mostly write-access agents.

So OMNI needs:

cloned environments
stubbed external systems
synthetic datasets
fake message rails
fake payment rails
fake patient records
blocked production writes
replayable traces
environment manifests
secret-scoped eval credentials

Doctrine candidate:

Read-only agent evals are not enough for write-capable systems.

22. Engine as long-term memory / sleep-time compute

They describe using Engine over traces to update context hub files, agents.md, and skills, which are then pulled into future runs.

OMNI keeper:

This is very close to OMNI’s Knowledge Reservoir / Clinical Memory distinction, but for agents.

For Build-OS:

traces become candidate memory changes
candidate memory changes become PRs
humans merge
future runs consume updated memory/skills

Hard guardrail:

No automatic memory promotion in clinical/PHI contexts.

23. Engine over coding-agent traces

They also discuss running Engine on coding-agent traces to adjust skills or agents.md files rather than code/prompt middleware.

OMNI keeper:

This is directly useful for the current OMNI work.

Your EVRUN/Opus/Knox process could eventually produce:

better extraction skills
better review templates
better section checklists
better stale-vs-v3 routing
better contract-edit instructions
better source-packet memory
24. Engine on Engine

The strongest ending concept: Engine produces traces, then another Engine runs on Engine’s traces. They expected it to be bad, but it became one of the main ways they find improvements to Engine itself.

OMNI keeper:

This is the governed self-improvement loop.

But it must remain bounded:

agent traces → issue candidates → proposed improvements → evals → human/domain approval → merge

not:

agent silently rewrites itself

Doctrine candidate:

Reflexive improvement is allowed only through trace, issue, eval, and approval boundaries.

This lands directly in REV-199 / Reflexive Build Substrate.

OMNI landing zones

Build-OS

agent-engineering agent
trace-to-issue-to-fix loop
issue inbox
agent overview documents
skills improvement loop
sandbox-as-tool
shadow production
branched-agent testing

Intelligence Foundry / Knowledge Reservoirs

production traces as governed learning substrate
sleep-time compute
candidate memory updates
skills/context PRs
no silent memory promotion

Agent Work Protocol

condensed trace first
screeners/verifiers
proposed fix + eval
human approval before PR/merge
phase-specific evals
write-access eval environments

operating_metrics

cost per useful issue
issue acceptance rate
fix acceptance rate
regression-prevention rate
trace ingestion cost
latency/cost by subagent phase
model mix performance

Polaris / proof layer

trace lineage
issue proof
eval proof
regression proof
branched run proof
promotion proof

Security / RBAC

sandbox tool boundaries
eval with stubs, not production writes
credential-scoped branched agents
no production side effects in eval mode
Doctrine candidates
A production agent must emit traces that can become issues, fixes, and evals.
Workflowize authority; delegate investigation.
Agents need layered trace access, not full context by default.
Observability must serve both humans and agents.
Ambient agents should surface clustered issues before creating disruptive work products.
Always-on intelligence needs an inference budget.
A fix is not ready because it addresses the issue; it is ready when it passes regression against the workflow’s eval corpus.
Write-access agents require synthetic or stubbed eval environments.
Agent authority should expand by earned evidence, not feature launch.
Reflexive improvement is allowed only through trace, issue, eval, and approval boundaries.
Net-new / sharpen / affirm
Net-new candidates

trace_to_issue_to_fix_loop
Production traces are condensed, screened, clustered into issues, proposed as fixes, converted into eval examples, tested, and reviewed before deployment.

agent_overview_document
A scoped, curated memory file for an agent/workflow containing preferences, structure, priorities, suppressions, and known context.

shadow_agent_production
Running an agent on real or forked traces without creating real user-visible effects, to evaluate quality before live authority.

write_access_eval_environment
Synthetic/stubbed/cloned environment where write-capable agents can be tested without touching production systems.

reflexive_agent_improvement_loop
An agent improvement process where agents analyze their own traces, but improvements still pass through issue/eval/review gates.

Sharpen existing

Build-OS
This is one of the strongest Build-OS operational sources.

Knowledge Reservoirs
Traces become governed candidate improvements, not automatic truth.

Agent Work Protocol
Adds issue inbox, condensed trace layers, screeners/verifiers, sandbox-as-tool, and regression-before-merge.

operating_metrics
Adds agent maintenance economics: cost per useful issue/fix, issue acceptance, model routing by phase.

REV-199 Reflexive Build Substrate
Strongly affirms reflexive improvement with guardrails.

Affirm
broad trace analysis must become actionable
chat alone is not enough
dashboards alone are not enough
agent memory must be curated
always-on agents are expensive without routing/budgeting
subagents protect context and cost
human feedback shapes relevance
design partners and blast-radius expansion matter
Reject / do not over-import
Do not make LangSmith/Engine/Harbor mandatory implementation choices.
Do not allow agents to open PRs directly into high-trust repos without review.
Do not equate issue discovery with fix correctness.
Do not run write-capable evals against production rails.
Do not automatically update memory/skills from traces without review.
Do not trust synthetic evals alone; pair them with shadow production.
Do not let the issue inbox become a noisy alert landfill.
Hard read

This is a Build-OS spine source.

The deep OMNI lesson is:

The next frontier is not merely agents doing work. It is agents maintaining the agent system: reading traces, finding failures, clustering issues, proposing fixes, generating evals, testing regressions, learning user preferences, improving memory/skills, and doing all of that inside cost, sandbox, trace, and human-review boundaries.

Shortest OMNI version:

OMNI should eventually have an Engine-like layer for its own agents and workflows: always-on trace review, condensed context, issue clustering, proposed fixes, eval generation, sandbox/shadow testing, memory/skill updates, and human-approved promotion. That is how intelligence compounds without becoming an ungoverned self-modifying system.

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

- reviewer: `Opus` · at: `2026-07-07` · reads: §1 verbatim IN FULL + §3 Review 001 (Knox) IN FULL · binds nothing (`GRD-036`/`GRD-044`)

### HEADLINE VERDICT
**Tier: `full_semantic` — Build-OS spine source (the single strongest OPERATIONAL source in wave-3 for the reflexive / agent-maintenance loop).** LangSmith Engine is "the agent for agent engineers": an always-on agent that watches production traces, condenses them, clusters failures into an **issue inbox**, proposes fixes as PRs, generates eval examples, and (the frontier they're building) tests the fix against evals before it ships — with a human in the loop at every commit and a meta-loop where **Engine runs on Engine's own traces**. Verdict: **overwhelmingly AFFIRM / PARTIAL, build≈ABSENT.** Nothing here contradicts OMNI physics; it is the concrete mechanism-level blueprint for concepts OMNI has *named but not built* — **REV-199 Reflexive Build Substrate**, Build-OS proof loop, Agent Work Protocol (Review 001→003 split, checkpoint), Knowledge Reservoirs (candidate≠commit), and the `inference_budget_policy` / `ai_model_registry` / `outcome_per_token_metric` / `exception_surface` primitives already minted in this wave. It is a **strict operational superset of 202 (refactor loop) and 208 (agentic SDLC)** and the *build-loop instance* of 210's coordination-layer / 201's hill-climbing-machine frame. Two genuine tensions (autonomous memory writeback vs governed promotion; reflexive self-improvement vs no-silent-ship) — both **already resolved by OMNI's candidate→commit + HITL law**; the source polices itself the same way. **The keeper doctrine: an agent that maintains the agent system, bounded by trace → issue → eval → human-approval → merge — never silent self-modification.**

> **Grep basis for `build` column** (`rg -i "<term>" app lib components scripts supabase middleware.ts` from repo root, 2026-07-07): `trace`→only timeline/rule-trigger event types (unrelated to agent traces); `eval`→form/disclosure-policy evaluation (unrelated to agent evals); `sandbox`→none; `screener`/`issue inbox`/`always-on`/`ambient`/`inference budget`/`self-improv`/`reflexive`/`agent overview`/`model routing`/`observability`/`CNS`/`ai_gateway`→**none**. `capability`→`lib/auth/capabilities.ts` (audited mutations); `audit`→audit-trail infra exists. **Net: the v2/v3 care app is built; the entire agent-engineering / trace-eval-sandbox / reflexive substrate is UNCODED.** So `build=absent` across the agent-maintenance clusters; `partial` only where a HUMAN analog exists (context packets/projections; AGENTS.md+read-graph as curated memory; capability/audit rails; this very EVRUN pipeline as a manual trace→issue→fix loop).

---

### A. CONCEPT CLUSTERS

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Agent for agent engineers (agent-maintenance role) | A governed non-human actor whose job is maintaining OMNI's *other* agents/workflows — watch traces, find failures, propose fixes | Build-OS · REV-199 Reflexive Build Substrate · Agent-Work-Protocol · §B non_human_actor | *"engine is like the agent for an agent engineer"* [2:35] | PARTIAL | absent | none | spine | promote |
| 2 | Trace → issue → fix → eval loop (the core lifecycle) | A production agent must emit traces that become clustered issues → proposed fixes → eval examples, all gated before deploy | Build-OS proof loop · Evidence Plane (human analog) · REV-199 · Agent-Work-Protocol · trace_lineage §11 | *"finding problems from your traces, putting up fixes… testing"* [3:35] | PARTIAL | absent | none | spine | promote |
| 3 | Always-on ambient scheduled agent | Background/scheduled patrol agent that ingests incoming traces and clusters issues — needs scope, budget, inbox, review before action | CNS (condition-watch/patrol) · Build-OS · Agent-Work-Protocol · operating-metrics | *"today it runs in the background… runs on a schedule"* [5:26] | PARTIAL | absent | none | spine | promote |
| 4 | Layered / tiered condensed trace access (context frugality) | Agents get progressive-disclosure trace tiers (summary → messages view → full trace), not full context by default — same physics as patient context packets | §B context_packet (TRACE-tier) · Knowledge-Reservoirs · CNS · Security (least-context) | *"initial pass on… condensed or summarized versions of traces"* [6:47] | AFFIRM | partial | none | spine | promote |
| 5 | Agent-native observability surfaces | OMNI surfaces/APIs must be agent-readable with tiered endpoints, not only human dashboards — purpose-built middle "messages view" | Surface/Projection Maps · §B · Build-OS · CNS | *"a very good endpoint for an agent to… pull that view"* [9:16] | PARTIAL | absent | none | vocabulary | promote |
| 6 | Workflowize authority; delegate investigation | Deterministic rails for authority/safety/commit; agent discretion for search/investigation/synthesis — over-workflowizing is brittle, full autonomy unsafe | CNS (candidate→resolver→commit) · Agent-Work-Protocol · §B · deterministic-domain-commit | *"the power of agents is you don't have to do that"* [11:21] | AFFIRM | partial | none | spine | promote |
| 7 | Sandbox as a callable tool (not host) | Sandboxing is a callable capability the orchestrating agent invokes for risky execution — agent stays in orchestration env, no direct prod mutation | Build-OS · Security · §A containment≠authority · capability_envelope | *"the agent… actually uses a sandbox as a tool"* [13:35] | PARTIAL | absent | none | vocabulary | watch |
| 8 | Org-chart sub-agents (screener/verifier) | Competent main agent delegates to cheaper/faster/narrower sub-agents that own repeatable inspection and protect the main agent's context+budget | CNS · Agent-Work-Protocol · §B model-routing · (converges 210 coordination) | *"designing an org chart… competent main… delegating"* [15:58] | AFFIRM | absent | none | spine | promote |
| 9 | Multi-phase eval (IssueBench / Harbor / synthetic env) | Complex agents need phase-specific evals (find trace? classify? dedup? valid fix? useful eval? no regression? in budget?), not one score; synthetic ground-truth env | Build-OS proof obligations · §B eval-vocab · drift_monitoring_policy (207) · operating-metrics | *"all these different phases to engine's run"* [17:15] | PARTIAL | absent | none | spine | promote |
| 10 | Write-access eval environment (stubbed stateful services) | Write-capable agents require synthetic/stubbed/cloned envs before eval — never read/write real rails; the hard problem for care/business agents | Security (SAFETY) · Build-OS · Agent-Work-Protocol · §C · domain-contracts | *"stub server… mocked out all… endpoints"* [19:31] | PARTIAL | absent | tension | spine | promote |
| 11 | Shadow production (forked-trace earned authority) | New agents earn live authority by running silently on forked/real traces without user-visible effects, quality-checked before action | Build-OS rollout · Agent-Work-Protocol · Security · (converges 201 earned-evidence) | *"shadow production… take a fork of those tracing projects"* [20:42] | PARTIAL | absent | none | spine | promote |
| 12 | Issue inbox > noisy PRs | Ambient agents must surface clustered diagnoses (diagnosis + frequency + history + actions) into an exception inbox, not spray PRs into high-friction surfaces | Surface/Projection Maps · exception_surface (210) · Messaging · Build-OS | *"an inbox became a good option… PRs were super noisy"* [23:50] | PARTIAL | absent | none | spine | promote |
| 13 | Curated scoped agent memory (agent overview document) | A governed, curated memory file per agent-lane (structure, preferences, non-goals, suppressions, priorities) referenced+updated every run; muddled memory makes it worse | Knowledge-Reservoirs · Build-OS · CNS · (meta: OMNI's own AGENTS.md+read-graph) | *"agent overview document… like an agents MD file"* [27:07] | PARTIAL | partial | tension | spine | promote |
| 14 | Always-on inference budget + phase cost attribution | Always-on intelligence needs an inference BUDGET (trace condensation, model routing, budget caps, cost-by-phase, eval-based substitution), not just permission to run | §B inference_budget_policy (204) · operating-metrics/BIZOPS · CNS · Build-OS | *"33% of our total cost… reduce that specific part"* [30:37] | AFFIRM | absent | none | spine | promote |
| 15 | Model cocktail / routing by task (eval-gated) | No single model for everything: premium for main synthesis, cheap (Haiku/OSS) for narrow screeners/verifiers, swaps eval-gated | §B ai_model_registry · virtual_model_endpoint (206) · capability_envelope | *"a cocktail of different models… Haiku… for screeners"* [31:00] | AFFIRM | absent | none | vocabulary | promote |
| 16 | Design-partner blast-radius rollout | Agent authority expands by earned evidence, not feature launch: internal → design partners → private beta → broader launch | Build-OS rollout sequence · Agent-Work-Protocol · (converges 201) | *"basically grew the blast radius"* [33:39] | AFFIRM | absent | none | vocabulary | watch |
| 17 | Two engineering modes (product eng vs applied agent eng) | Build-OS itself may need two modes: product/infra engineering AND hypothesis/eval/cost/subagent-driven applied agent engineering | Build-OS layer model · Agent-Work-Protocol | *"very different process for the two teams"* [34:51] | PARTIAL | partial | none | vocabulary | watch |
| 18 | Broad observability + actionable diagnosis fusion | Dashboard alone ≠ enough, chatbot alone ≠ enough: broad trace analysis → clustered diagnosis → action proposal → eval/proof → human decision (Insights+Poly→Engine) | Surface/Projection Maps · Sense+Act loops (§8) · Build-OS · owner/ops surfaces | *"engine combines the best of both worlds"* [37:28] | AFFIRM | partial | none | spine | promote |
| 19 | Test-the-fix-before-ship (regression-proof) | A fix isn't ready because it addresses the issue; it's ready when it passes regression against the workflow's eval corpus — the missing piece | Build-OS proof/de-scaffolding · ci_verification_gate (202) · Agent-Work-Protocol §9 | *"passes their eval… run these regression tests"* [41:10] | PARTIAL | absent | none | spine | promote |
| 20 | Reflexive improvement loop (engine-on-engine; sleep-time memory) | Reflexive improvement allowed ONLY through trace→issue→eval→human/domain-approval→merge; not silent self-rewrite — Engine runs on its own traces + sleep-time memory compute | REV-199 Reflexive Build Substrate (MAJOR) · Build-OS · Knowledge-Reservoirs · Agent-Work-Protocol | *"engine produces its own traces… another engine runs"* [49:00] | PARTIAL | absent | tension | spine | promote |

---

### B. NET-NEW PRIMITIVES *(dedup vs EVRUN-000001 §2A + EVRUN-000002 + wave-3-minted; "dedup-pending, Opus-main verifies")*

- `trace_to_issue_to_fix_eval_loop` — the agent-maintenance lifecycle: production trace → condense → screen → cluster into issue → propose fix (PR) → generate eval example → (test) → human-approve → merge → monitor — **EXISTS-AS: net-new MECHANISM** (concrete instance of the doctrine-only REV-199 Reflexive Build Substrate + Build-OS proof loop; the *agent* version of the human EVRUN pipeline). Mint under REV-199.
- `reflexive_agent_improvement_loop` (engine-on-engine) — an agent analyzing its OWN traces to improve itself, gated by issue/eval/review — **EXISTS-AS: already-named-as REV-199 Reflexive Build Substrate (doctrine); this source supplies the missing MECHANISM.** Do not re-mint the name; attach as REV-199's concrete pattern + hard guardrail (no silent self-modification).
- `write_access_eval_environment` — synthetic/stubbed/cloned env where write-capable agents are tested without touching real DB/messages/payments/schedules/records — **EXISTS-AS: net-new (SAFETY-bearing, highest-value of this source).** Composes with `prefix_cache_boundary` sibling-isolation (204) + stubbed-rails; distinct from shadow-production. Home §C/Security + Build-OS.
- `shadow_agent_production` — running a new agent on real/forked traces with NO user-visible effects to earn live authority before action — **EXISTS-AS: net-new.** Composes with `autonomy_level` earned-authority ladder + Build-OS rollout + 201 earned-evidence. Distinct from `write_access_eval_environment` (shadow = real data, no effects; eval-env = synthetic data).
- `agent_overview_document` — a governed curated per-agent-lane memory artifact (structure, preferences, non-goals, suppressions, priorities) referenced+updated every run — **EXISTS-AS: partially-exists-as Knowledge-Reservoir curated memory + OMNI's own AGENTS.md/read-graph (human instance); net-new as a per-AGENT-LANE runtime memory artifact.** Guardrail: curated+scoped; muddled memory degrades. No auto-promotion in PHI/clinical.
- `trace_context_tier` (condensed→messages→full) — progressive-disclosure trace access tiers for agents — **EXISTS-AS: already-exists-as `context_packet` — sharpen (adds a TRACE progressive-disclosure dimension; same physics as patient context packets / Reservoir tiers). NOT net-new mechanism.**
- `phase_specific_eval_policy` — eval doctrine requiring per-phase ground-truth checks for multi-step agents — **EXISTS-AS: net-new eval-vocab; sharpens Build-OS proof obligations + `drift_monitoring_policy` (207).** Home §B eval-vocab.
- `sleep_time_memory_compute` — background pass over traces that proposes candidate memory/skill updates (merged by humans, pulled into future runs) — **EXISTS-AS: net-new NAME; = background candidate-memory update; composes reflexive loop + Knowledge-Reservoirs candidate≠commit.** Watch label.
- `agent_engineering_agent` (Knox-proposed) — **EXISTS-AS: already-exists-as `non_human_actor` + Build-OS role; mint as a ROLE LABEL only (`GRD-026`/`GRD-035`), not a mechanism/god-agent.**
- `sandbox_as_tool` — **EXISTS-AS: already-exists-as `capability_envelope` + containment (containment≠authority §A); sharpen as callable-capability pattern. NOT net-new.**
- `issue_inbox_surface` — **EXISTS-AS: already-exists-as `exception_surface` (210) + `projection≠truth` + `generated_ui_as_agent_coordination_surface` (201). Dedup — Surface-Map candidate, not net-new.**
- `regression_gate_before_merge` — **EXISTS-AS: already-exists-as `ci_verification_gate` (202) + Build-OS proof obligations + Agent-Work-Protocol §9 stop-proof. Sharpen, not net-new.**
- `cost_per_useful_issue` / agent-maintenance metric — **EXISTS-AS: already-exists-as `outcome_per_token_metric` (206) + operating-metrics; sharpen (adds issue-acceptance / fix-acceptance / regression-prevention / recurrence-suppression as agent-maintenance economics).**

**Genuine net-new this source (~4–5):** `trace_to_issue_to_fix_eval_loop` (mechanism under REV-199) · `write_access_eval_environment` (SAFETY) · `shadow_agent_production` · `agent_overview_document` · `phase_specific_eval_policy`. The rest dedup/sharpen against 201/202/204/206/207/210 + REV-199. *(dedup-pending, Opus-main verifies at registry fold.)*

---

### C. REREAD FLAGS
- **REV-199 scope confirmation** — this source is the concrete mechanism for REV-199 Reflexive Build Substrate; Opus-main should confirm REV-199 absorbs `trace_to_issue_to_fix_eval_loop` + `reflexive_agent_improvement_loop` rather than minting new IDs. (Handoff notes REV-199 exists in Knox read; verify against `08`/future-work registry.)
- **Meta-instance flag** — OMNI *already practices* `agent_overview_document` on ITSELF (AGENTS.md + `04_manifest_read_graph.md` + read-graph tiers = a curated, every-run-referenced, feedback-updated memory file). Worth a doctrine note: OMNI's own boot substrate is a live instance of this primitive → strong AFFIRM, and a template for per-agent-lane memory.
- **Cross-link T1/T2 (204/205)** — `write_access_eval_environment` + `prefix_cache_boundary` (204) + `infected_memory_risk` (205) are the same "runtime is a governed, isolatable resource" family: eval isolation (216) · cache isolation (204) · memory-contamination (205). Fold together in registry.
- **Dedup `issue_inbox_surface` vs 210 `exception_surface`** — confirm single Surface-Map candidate, not two.
- **`write_access_eval_environment` ↔ care rails** — the source's hard cases (don't email patients, don't mutate D6 ledger, don't write Clinical Memory, don't create real orders, don't call payment rails from eval) are OMNI-specific SAFETY laws; route to Security + domain-contracts as a binding-candidate, not just Build-OS.

---

### D. ONE-LINE HARD READ
**The next frontier is not agents doing work — it's a governed agent that maintains the agent system (reads traces → clusters issues → proposes fixes → generates+runs regression evals → curates scoped memory/skills), all inside cost, sandbox, shadow, trace, and human-approval boundaries; OMNI has named this (REV-199) but not built it, and this is the mechanism-level blueprint.**

**Strongest OMNI line (verbatim):** *"engine as an agent produces its own traces and so we have another engine that runs on top of those traces… it's becoming more and more one of the primary ways that we find improvements to be made on engine"* [49:00-49:25] — the governed self-improvement loop, provided it stays bounded by trace → issue → eval → human-approval → merge, never silent self-rewrite.

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `analysis/EVRUN-2026-000003_ai-corpus-wave-3/EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `analysis/EVRUN-2026-000003_ai-corpus-wave-3/EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: **Build-OS (MAJOR — reflexive/agent-maintenance loop, blast-radius rollout, two eng-modes) · REV-199 Reflexive Build Substrate (MAJOR — concrete mechanism) · Agent-Work-Protocol (MAJOR — org-chart sub-agents, condensed-trace tiers, phase-specific evals, regression-before-merge, HITL) · §C/Security (MAJOR — write-access eval env, shadow production, sandbox-as-tool) · §B AI-substrate (medium — model cocktail/routing, inference budget) · Knowledge-Reservoirs (medium — agent_overview_document, sleep-time candidate memory, no-silent-promotion) · Surface/Projection Maps (medium — issue inbox / broad+actionable fusion) · operating-metrics/BIZOPS (medium — cost-per-useful-issue, acceptance rates) · CNS (medium — ambient patrol, workflowize-authority/delegate-investigation)** · promotion: **watch** (proposes only; `GRD-036` promotion-gated; strongest wave-3 Build-OS/REV-199 operational source; ~4–5 genuine net-new, 2 tensions both resolved by existing candidate→commit+HITL law)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — §0/§0.1 metadata lifted from Review 001 block (LangChain / Ben Tannyhill / Max Agency / "The best AI agents need less code than you think", published Jul 2 2026); proposed slug `langsmith-engine-self-improving-agent-loop` (file NOT renamed). §3 Review 003 formal deep extraction authored (Opus): headline verdict + 20 concept clusters (grep-verified build column) + net-new primitives (~4–5 genuine, dedup vs 201/202/204/206/207/210 + REV-199) + reread flags + hard read. §4 pointers filled; §0.5 ticked. Status flipped `raw_dropped → analyzed`. Registry/coverage/anchor-ledger fold deferred to Opus-main (not edited this pass). Binds nothing.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

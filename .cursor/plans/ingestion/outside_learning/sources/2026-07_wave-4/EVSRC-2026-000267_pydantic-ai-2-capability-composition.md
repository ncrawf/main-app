# EVSRC-2026-000267 — <title or TK>

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed` (Review 003 written 2026-07-11; folded to `EVRUN-2026-000005`; 0 net-new + §C/P35 sharpenings; propose-only)**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-4 scaffold (created 2026-07-11). Register/run: see `../../00_index.md` (wave-4). EVRUN to open at processing = `EVRUN-2026-000005` (or fold into wave-3 per operator).
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — AS-IS) + optional gut note (§3 Review 002). Then Opus writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry**, coverage matrix, and fills **§4 pointers** at closeout. Deep read lives HERE in §3 — never a sidecar (`GRD-044`).

## §0 — Source identity / metadata  *(normalized by Opus from Knox §3 rough-metadata + transcript)*
- evsrc_id: `EVSRC-2026-000267`  ·  filename: `EVSRC-2026-000267_pydantic-ai-2-capability-composition.md` *(renamed from `_TK` 2026-07-11 wave-close)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=PY7xIxybYNc`  ·  source_title: `Pydantic AI 2.0: The New Best Way to Build AI Agents is Composing Capabilities`
- channel_or_org: `Cole Medin`  ·  speaker: `Cole Medin`  ·  published_at: `2026-07-10`
- captured_at: `2026-07-11`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `agent-framework analysis (capability composition / progressive disclosure / reusable modules)`  ·  source_reliability_context: `independent technical creator interpreting a framework release — useful practitioner analysis, highly enthusiastic, not a comparative production eval; source itself admits ingredients aren't new (the packaging is)`  ·  topic_tags_light: `[capability_composition, agent_frameworks, progressive_disclosure, reusable_agent_modules, hooks, guardrails, MCP, model_settings, lean_core, agent_harness]`

## §0.1 — People / authorship / authority context
- primary speaker(s):
  - name: `Cole Medin` · role_in_source: `presenter` · affiliation_at_publication: `independent technical educator/agent builder` · speaker_type: `practitioner educator` · authority_context: `translates framework abstractions to architecture; enthusiastic re: Pydantic AI; light on composition-conflict/security/versioning/failure modes` · identity_confidence: `high` *(also 266/wave-3 238/240)*
- publisher / channel: `Cole Medin (YouTube)`  ·  interviewer / moderator / host: `n/a (analysis)`
- event_context: `focuses on the UNIT OF COMPOSITION inside the harness (sibling to 254 taxonomy / 256 harness / P35 capability-topology) — a "capability" = instructions+tools+hooks+model-settings+guardrails as one reusable unit above MCP`  ·  perspective / conflict notes: `Pydantic AI = a named rail, not OMNI architecture; the abstraction is useful, the governance must be added by OMNI`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it, but every claim still routes through evidence → interpretation → gated promotion.

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Pydantic AI 2.0: They Did It Again
0:00
Pidantic AI has been my favorite AI
0:02
agent framework for a long time now.
0:04
I've been making content on it since
0:05
January of last year. They are always
0:08
leading the industry, making it really
0:10
easy to build AI agents, but giving you
0:13
the full customizability and control at
0:15
the same time that you really need to
0:17
ship production agents. And so that in
0:20
my mind is what makes them stand above
0:22
other frameworks like Langchain and Crew
0:24
AI. And Pideantic AI has done it again.
0:28
They just put out their 2.0 0 release
0:30
and this is a big evolution in the way
0:32
that we build AI agents. This version of
0:34
the framework centers around a single
0:37
primitive called the capability. This is
0:40
the main thing that we build out now
0:41
when we're creating our AI agents. And I
0:44
just love this. It's such a beautiful
0:46
simplification that at the same time
0:47
encapsulates everything that you need
0:49
for an agent. And it accounts for
0:52
everything the industry has been
0:53
converging on recently for the different
0:55
components that go into building agents
0:57
like our hooks and our guard rails and
0:59
our skills and MCP servers. And I love
1:02
this so much that I wanted to make a
1:03
video dedicated to covering this idea of
1:06
the capability and the 2.0 release. Now,
1:09
Pyantkai, they're not sponsoring this
1:11
video. And I don't normally make a video
1:13
just on an update to a framework, but
1:15
this is good enough where it it feels
1:17
like we're starting to see this shift
1:18
now, this powerful evolution of how we
1:21
build our agents. So, let's get into
1:23
this here. So, a capability bundles an
What a Capability Is
1:25
agent's instructions, tools, life cycle
1:27
hooks, and model settings into a single
1:30
composable unit. So, a whole extension
1:32
can reach every layer of the agent
1:34
through one concept, which this is a
1:36
little bit of word salad to be honest.
1:38
Basically, what they're saying here is
1:40
no matter the responsibility you want
1:41
your agent to have, it's going to be
1:43
comprised of a set of tools so it can
1:45
reach the outside world and instructions
1:47
and guard rails to guide it. And so
1:50
whatever that is, we can package it all
1:51
together as a single capability which is
1:54
a single input into defining our agent.
1:57
And so now our AI agents can be thought
1:59
of quite simply as just a set of these
2:02
composable units, these capabilities.
2:04
We're combining all of them together to
2:07
give the agent all the responsibilities
2:09
that we want for it. And the best part
2:11
about this, because it's so composable
2:13
and really it's just like piecing Lego
2:15
blocks together, we can very easily
2:17
reuse these capabilities between the AI
2:20
agents that we have for oursel or our
2:22
business. And it's also useful to think
2:24
about capabilities as the layer above
2:26
MCP servers. If you think about it, MCP
2:29
is similar. It's a packaging of tools
2:31
that you can hand to your AI agent. And
2:33
it's very easy to share it between AI
2:36
agents as well. That's one of the main
2:37
benefits of MCP. And MCP servers are a
2:41
subset of what you've added into a
2:43
capability like we're seeing in the
2:45
example right here. But also,
2:47
capabilities are a lot more than just
2:49
the arm of the agent, aka the tools.
2:51
It's also the instructions and the
2:54
settings and the hooks and the
2:55
guardrails, how we want the human to
2:57
interact with the agent and inject
2:58
things. Like all of that is packaged
3:00
together here. And the other thing I
3:03
want to say is like none of this is new,
3:05
right? Like underneath the capability,
3:07
everything that comprises the capability
3:09
is things you're already working with
3:11
probably especially with your AI coding
3:13
assistant like your skills and hooks and
3:15
things like that. But it's just the way
3:17
that we're simplifying bringing them
3:20
into an AI agent framework that I think
3:22
is such a beautiful thing here. So with
Frameworks vs Coding Agent SDKs
3:24
this new release and the idea of the
3:26
capability, it feels like Pantic AI has
3:28
gone from falling behind a little bit to
3:30
leading the industry yet again. And the
3:33
reason I say they were falling behind a
3:35
little bit is really just because of the
3:36
rise of the coding agent SDKs. It is so
3:40
incredibly easy now to just build your
3:42
AI agents, especially your more personal
3:44
agents, on top of something like the
3:46
Clawed agent SDK or the Codeex SDK. They
3:50
are slower and more tokenheavy than a
3:52
traditional framework like Pideant AI.
3:54
So, there's definitely trade-offs. I've
3:55
covered that on my channel recently as
3:57
well, but especially for more personal
4:00
use cases. Generally, when you build an
4:01
AI agent, you're just going to be using
4:03
something like this or maybe just
4:04
building something directly into your
4:06
Hermes or OpenClaw. And so there's just
4:08
been a smaller subset of agents that are
4:11
still useful for Pyantic AI, especially
4:14
because these agent frameworks, they
4:17
integrate so well with the different
4:18
primitives we've already been talking
4:20
about like hooks and sub aents and MCP
4:22
servers. Like it's so easy to
4:24
incorporate these things in. I mean, you
4:26
can see the examples here of how it kind
4:27
of looks a lot like capabilities where
4:29
it's just a couple of lines adding in an
4:30
MCP server or if we want to add in a
4:33
hook, for example. And so Pantai has
4:36
caught up to this, right? Like it's very
4:37
easy to add in these capabilities now.
4:39
And I would argue it's even easier. Like
4:41
PantiAI is like the winner in my mind
4:44
right now. The sponsor of today's video
Sponsor: Nimbalyst
4:46
is Nimbleist, a free open-source visual
4:49
workspace for building with cloud code
4:51
or codecs. If you spend all your time in
4:53
the terminal like I do, you know the
4:55
pain of your agent making a ton of
4:58
changes across your project and it
5:00
becoming hard very quickly for you to
5:02
track what's actually happening. Nimble
5:04
wraps your coding agent in an actual
5:06
workspace. And so as your agent is
5:08
making changes, you see it as red and
5:10
green diffs. And this applies to code,
5:12
markdown, even diagrams, everything
5:15
rendered visually. Plus, you can revert
5:17
and accept any changes to your files and
5:20
even annotate things. So your agent will
5:22
address your feedback directly. And my
5:24
favorite part about Nimble is the agent
5:26
manager. Here I can manage many coding
5:29
agent sessions in parallel, all
5:31
operating in isolation. I also have a
5:33
conbon board so I can view the stage
5:35
that each one of the agents is in. Click
5:37
into it to also view the conversation
5:40
and then also for any of the changes
5:41
that it's making I can click into any of
5:43
these files. So I can look at the
5:45
individual diffs as the agent is
5:47
operating on my codebase. It's just so
5:49
easy to navigate between the sessions
5:50
and all the changes that are happening
5:52
in my project. and all the connections
5:54
that are made under the hood between the
5:55
different files and agents that are
5:57
running, all the tasks that are being
5:58
taken care of. All of that is not just
6:00
for me, it's also for the agent. It's
6:02
able to traverse through a graph that it
6:04
builds internally to get a holistic
6:06
picture of everything that's happening
6:08
in my project. And you know, I always
6:10
love covering open- source projects and
6:11
Nimbleist is seriously impressive.
6:14
Definitely worth trying out. And it is
6:15
100% local. Everything lives as plain
6:18
markdown on disk. There's no lock in,
6:21
nothing you have to sign up for. I'll
6:22
have a link to it in the description.
The Demo Agent Repo
6:24
All right. Now, to make the idea of
6:26
capabilities really concrete for you
6:28
really fast, I have this example. I have
6:30
this GitHub repo, which of course I will
6:32
link to in the description, where I
6:33
built a pyantic AI agent both with 2.0
6:36
and 1.0. So, we'll go through both and
6:39
then I'll demo the newer one as well.
6:41
And you can use this GitHub repo as a
6:44
template or starting point for your
6:45
coding agent to build a podanti 2.0
6:48
agent for yourself. Or the other thing
6:51
you can do, which I would highly
6:52
encourage you to try this, is to just
6:54
give your coding agent the capability
6:56
documentation directly. In the 2.0
6:59
launch article, they literally say right
7:01
here, just point your coding agent at
7:03
the capabilities docs, what we're
7:04
looking at right now. I'll link to this
7:06
in the description as well. And it's
7:08
interesting. You can see like, man, this
7:10
is a very long documentation page. Like,
7:13
holy cow. And that just goes to show
7:15
like how much customizability and
7:17
control we have with Pinantic AI. But
7:20
yeah, I say that because this is not
7:22
meant for a human to consume. At least I
7:24
don't really think so. Like this is more
7:25
meant for a coding agent to consume to
7:28
help you build it up. Like I really
7:29
don't think you should be writing the
7:31
Pantic AI agent code by hand anymore.
7:34
I've not done it for over a year now.
7:36
Please don't spend your time on that.
7:38
And so we're going to look at the code
7:40
in a little bit here just to explain
7:41
some of the ideas, but I'm not going to
7:43
get technical or in the weeds because I
7:44
don't expect you to understand it 100%
7:47
or write the code yourself. I just want
7:49
to illustrate the points here of how
7:51
we've evolved the capabilities and what
7:53
they're really comprised of. All right,
Walkthrough: 1.0 vs 2.0
7:55
so what you're looking at right here is
7:56
a Pantic AI 1.0 agent. Now, it's always
8:00
been a fantastic framework. So, there's
8:02
not a ton of critiques here. Like, I
8:04
still wouldn't mind building my AI
8:06
agents in this way. It's relatively easy
8:08
to define your tools, add them into your
8:11
agent, add in the system prompt and the
8:13
model settings. It's still a good
8:14
experience. But what you can see here is
8:16
when we define our AI agent, it really
8:19
is just a hodgepodge of all the
8:20
instructions and tools that we have for
8:22
it. There's no organization and there's
8:24
no composability. We can't take a subset
8:27
of the capabilities out of this and
8:29
easily add it into another agent. We
8:31
have to redefine and recreate things.
8:33
And so again, it's a good experience,
8:36
but it could be better. And that's what
8:38
we have now with Panti 2.0. Take a look
8:40
at this. So we have this kind of larger
8:43
constructor here. Look at how simple
8:45
this is now. So we have our model that
8:48
we're specifying for the agent overall
8:50
and then everything else is just a set
8:53
of capabilities because this includes
8:55
the instructions like we had to define
8:57
right here and it includes the
8:58
guardrails and hooks and tools like even
9:00
more than I defined right here. We can
9:02
package up in a single capability and
9:04
then we can reuse it between our AI
9:07
agents. Like this first one is a support
9:09
agent. So it needs to access the
9:11
knowledge base like perform rag in our
9:12
database and then also be able to
9:14
escalate things to a human. And then
9:16
imagine at the front of your platform
9:18
you have the FAQ widget where there's no
9:20
escalation here but it still needs
9:21
access to the knowledge base to answer
9:23
basic user questions. And so here we
9:27
don't have to rebuild anything. And as
9:29
we evolve our knowledgebased capability
9:31
over time like improving the
9:32
instructions, guard rails and tools both
9:35
the agents benefit from it at the exact
9:37
same time. And then not to spend too
9:39
much time in the code but just to show
9:40
you how a capability is defined very
9:42
quickly. We have our instructions. We
9:45
have the tool set. So we just have a
9:46
search knowledgebased function for our
9:48
knowledgebased capability. The model
9:50
settings and then a very simple example
9:52
of a hook. And so this is just like in
9:54
cloud code or codeex where we have a
9:56
pre-tool use hook. We want some kind of
9:58
deterministic action for the sake of
10:00
security or guiding the agent properly
10:02
whatever that might be. And then we have
10:03
our escalation capability for the
10:05
support agent defined in a very similar
10:08
way. And so we'd have all of the core
10:09
primitives there. We could add in more
10:11
things like MCP servers as well, like we
10:13
saw with that GitHub example. Very easy
10:15
to add in whatever the agent needs
10:17
wrapped up in this capability. And if
Progressive Disclosure
10:19
that's not enough, one of my favorite
10:20
parts of capabilities is you can
10:22
implement the idea of progressive
10:24
disclosure. So just like with skills in
10:27
cloud code, codeex, GitHub, copilot, you
10:30
have the ability to give a brief
10:31
description of the capability. So the
10:33
agent has a catalog of what it can lean
10:36
on, but it's only going to load the full
10:39
instructions for the capability when it
10:40
decides it actually needs it. And the
10:42
reason that's important is because that
10:44
way we can supply a bunch of different
10:47
capabilities to our agent. whether it's
10:49
the ones built right into Pantankant AI
10:51
like these or a custom one we make, we
10:53
can give it dozens, maybe even hundreds
10:55
of capabilities and not overwhelm the
10:57
LLM because it only has to really dig
10:59
into and leverage the ones that it needs
11:01
based on the user's current prompt. And
Live Agent Demo
11:03
so to show you an example of that, here
11:05
I have the agent spun up in the CLI and
11:07
I'll ask it a question. Can I connect
11:09
orbit to Slack? And so this is something
11:11
where it really doesn't need to leverage
11:13
the escalation capability at all. I sure
11:16
hope it doesn't. It just needs to search
11:17
our knowledge base. And so sure enough,
11:19
it says Orbit doesn't have a native
11:21
Slack integration yet, though it's on
11:22
the road map. And it even references a
11:24
document that it found in the knowledge
11:25
base. And so you can see that out of the
11:27
capabilities that I gave it, it
11:29
leveraged the thinking one that
11:30
Padantkai supplies with the framework.
11:33
And then it also leveraged the custom
11:35
knowledgebased one. So it loaded the
11:36
instructions for both of these and then
11:38
used the tools there. like it used the
11:40
search knowledgebased tool and did some
11:42
reasoning, but it didn't leverage the
11:44
escalation at all. And that's good. That
11:47
wouldn't be worth loading those tokens
11:49
in because it's going to make our agent
11:51
slower and make the call more expensive.
11:53
But let's say someone comes to the
11:55
customer support bot where they actually
11:57
have a concern that needs to be
11:58
escalated to a human. Like, I was
12:00
charged twice this month for my
12:01
subscription. Can you refund the
12:02
duplicate charge? I mean I hope your
12:04
platform doesn't do that but just an
12:06
example here where we need to leverage
12:07
the escalation capability. And so now we
12:10
are going to load it. There we go. We've
12:12
loaded the escalation. Your support
12:13
ticket has been created. Your ticket ID
12:15
is blah blah blah. I mean none of this
12:16
is real. This is just mock for a
12:17
demonstration. But you get the idea. The
12:19
agent is choosing the capabilities that
12:21
it needs. And so not only is it more
12:22
composable in order for us to share this
12:25
easily with other agents, but it also
12:27
means that our agent in the current
12:29
conversation can be very focused to the
12:31
responsibilities that it actually needs
12:33
to lean into for this conversation. All
The Harness & Lean Core
12:36
right, so the last thing in this article
12:37
here that's definitely worth covering is
12:39
the idea of the harness and the leaner
12:41
core for Panti. And I love how they're
12:43
evolving the framework in this way.
12:45
Essentially, there are two layers of
12:48
capabilities in the framework. The first
12:50
layer is the capabilities that they
12:52
consider critical to most AI agents.
12:55
Like most of the time when you build an
12:56
agent, you're going to want thinking.
12:58
You're going to want web search. You're
12:59
going to want tool search that gives us
13:01
that progressive disclosures to make us
13:02
so you can really scale your agents.
13:04
This is the first lane. And so you
13:07
import these things from Pantanki,
13:09
they're supported directly. They're part
13:10
of the lean core. It's very easy to just
13:13
add these in as capabilities. The only
13:14
thing you really have to tweak is maybe
13:16
a couple of parameters like this one for
13:18
thinking. And then our other lane is the
13:20
harness. These are the capabilities that
13:23
Pideantic AI wants to support directly
13:25
but doesn't consider critical for a
13:27
majority of AI agent use cases. And so
13:30
code mode is a good example. This is
13:32
giving your agent the ability to write
13:33
and execute code in a sandbox. And so
13:37
yeah, pretty important for a good number
13:38
of agents, just maybe not a majority of
13:40
them. And this is a really cool
13:42
capability by the way because Pyanticai
13:44
or the Pyantic company, the parent
13:46
company is working on their own
13:48
lightweight sandbox called Monty, which
13:50
is open source as well. It's
13:52
fascinating. I could do a whole video on
13:54
Monty, but outside of the scope what
13:56
we're covering right now, you get the
13:57
point. Like these kinds of capabilities,
13:59
other like third-party ones they want to
14:01
support that falls under the harness.
14:03
It's the wrapper above the lean core of
14:06
Panti, which I think, you know, is why
14:08
they're calling it a harness. So really
14:10
cool. I love this cuz then they keep the
14:12
the core framework really lightweight
14:13
while still giving you a lot of out of
14:15
the box things if you want to reach for
14:16
that. And so there you go. That's
Outro
14:18
everything in the Panti 2.0 release and
14:21
the new idea of the capability being our
14:23
one primitive for building agents. It's
14:25
a simplification without reducing how
14:27
powerful our agents can be with
14:29
Pyantkai. And so I encourage you to just
14:32
play around with this. I mean I'm using
14:33
Panti all the time still. It's something
14:36
where when you want to deploy an agent
14:38
to production and you have other people
14:39
using your agent, you can't just lean on
14:41
those coding agent SDKs or something
14:43
like Hermes or Open Claw. You need a
14:45
framework. Pantic AI really is my go-to.
14:47
And so I'm planning on doing more
14:48
content on Pideantic AI as well. And so
14:51
if you appreciate this video, you're
14:52
looking forward to more things on
14:54
building agents and AI coding, I would
14:56
really appreciate a like and a
14:57
subscribe. And with that, I will see you
14:59
in the next

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

Knox / ChatGPT strategic read

1. Rough metadata

source_platform: YouTube · source_url: https://www.youtube.com/watch?v=PY7xIxybYNc · source_title: Pydantic AI 2.0: The New Best Way to Build AI Agents is Composing Capabilities · channel_or_org: Cole Medin · speaker: Cole Medin · published_at: Jul 10, 2026 · captured_at: 2026-07-11 · capture_method: YouTube screenshot + full transcript · content_type: agent-framework analysis / capability composition / progressive disclosure / reusable agent modules · source_reliability_context: independent technical creator interpreting a new framework release. Useful practitioner analysis, but highly enthusiastic and not a comparative production evaluation. Pydantic did not sponsor the video, although a separate coding workspace sponsored one segment. · topic_tags_light: [capability_composition, agent_frameworks, progressive_disclosure, reusable_agent_modules, hooks, guardrails, MCP, model_settings, lean_core, agent_harness]

2. People / authority context

Cole Medin — technical educator and agent builder with sustained experience using Pydantic AI. His strength is translating framework abstractions into practical architecture. His limitation is strong personal enthusiasm for Pydantic AI and limited treatment of composition conflicts, security boundaries, versioning, or production failure modes.

The source itself acknowledges that the underlying ingredients are not new. The claimed advance is packaging instructions, tools, lifecycle hooks, model settings, and guardrails into one reusable unit called a capability.

3. Suggested processing

priority: 4.4/5

depth: full_semantic

EVRUN needed?: yes

duplicate/sibling relationship: strong sibling to the IBM framework taxonomy, LangChain harness cluster, governed-runtime demonstrations, and P35 capability-topology work. Unlike those sources, this one focuses specifically on the unit of composition inside the harness.

likely landing zones: Thesis §C governed capability exchange · P35 capability topology · AI substrate · Agent Work Protocol · Build-OS · capability catalog · RBAC · runtime policy · progressive context assembly · Settings/Catalog.

promotion posture: section-sharpening + contract-extension candidate + Build-OS practice

4. Strategic read
Classification

This is a high-value architectural vocabulary source.

Its key idea is that an agent should not be constructed as one undifferentiated pile of prompts, tools, hooks, settings, and guardrails. Those elements should be grouped around coherent responsibilities and composed into the agent as reusable capabilities.

The source shows a knowledge capability reused across both a full support agent and a narrower FAQ agent, allowing improvements to that capability to propagate to both.

Core takeaway

The keeper is: compose agents from governed responsibility-bearing capability bundles rather than repeatedly assembling loose tools, prompts, and policies—but treat composition as a contract problem, not as frictionless Lego.

That last correction is where OMNI goes beyond the source.

A. Capability is a better unit than tool—but it must include governance

Pydantic AI’s capability bundles:

instructions;
tools;
hooks;
model settings;
guardrails;
and human-interaction behavior.

The source positions it as a layer above MCP: MCP may package tools, while the capability carries the surrounding behavior needed to use those tools responsibly.

This is strongly aligned with OMNI.

A tool answers:

What operation can technically be invoked?

A capability should answer:

What bounded responsibility may be performed, for whom, under what conditions, with what evidence and consequences?

An OMNI capability therefore needs more than the framework’s bundle:

capability identity and owner;
declared purpose;
typed inputs and outputs;
accessible data and tools;
actor and relationship requirements;
permitted side effects;
authority ceiling;
approval gates;
model/runtime compatibility;
evaluation bundle;
evidence and trace requirements;
failure and degraded modes;
cost and latency limits;
version and revocation state.

Keeper doctrine:

A tool exposes an operation; a capability defines a governed responsibility.
Capability packaging should bind behavior, access, policy, evaluation, and proof around the operation.
A capability may propose or execute bounded work without inheriting the authority of the domain it touches.

Candidate pressure:

capability_manifest
capability_contract
capability_authority_ceiling
capability_evaluation_bundle

These likely sharpen P35 rather than create a new domain.

B. Composition is not automatically safe or coherent

The video uses a Lego metaphor: agents are built by snapping reusable capability blocks together. That is useful pedagogically, but incomplete architecturally.

Two capabilities may conflict through:

contradictory instructions;
overlapping tools;
incompatible model settings;
competing lifecycle hooks;
different assumptions about identity;
inconsistent retry or escalation behavior;
duplicated side effects;
conflicting authority or approval rules.

For example:

a “rapid customer resolution” capability may prefer immediate action;
a “high-risk transaction review” capability may require suspension and human approval.

Both may function correctly in isolation and compose badly.

OMNI therefore needs explicit composition semantics:

compatibility checks;
instruction and policy precedence;
side-effect collision detection;
capability dependency declarations;
authority intersection;
least-privilege tool union;
deterministic hook ordering;
incompatible-combination rejection.

Keeper doctrine:

Composable does not mean universally compatible.
The authority of a composed agent must not exceed the narrowest governing constraint of its active capabilities.
Capability conflicts should be detected before runtime, not discovered through production behavior.

Candidate pressure:

capability_composition_contract
capability_compatibility_profile
composition_conflict
hook_order_policy

This may be one of the most useful contract-level deltas from the source.

C. Reuse improves consistency—but increases change blast radius

The source correctly celebrates reusing the same knowledge capability across multiple agents. A single improvement can benefit every agent that consumes it.

The inverse is equally important:

A defective shared capability can degrade every consuming workflow simultaneously.

OMNI Build-OS therefore needs:

version pinning;
dependency graphs;
impact analysis;
staged rollout;
workflow-specific evals;
rollback;
compatibility ranges;
change provenance.

A knowledge-retrieval improvement that helps an FAQ bot may still harm a clinical workflow if it changes citation selection, freshness, or uncertainty behavior.

Keeper doctrine:

Reuse centralizes improvement and centralizes failure.
Every shared capability update requires blast-radius visibility and consumer-specific evaluation.
Agents should depend on versioned capability contracts, not silently inherit mutable behavior.

Candidate pressure:

capability_dependency_graph
capability_release
consumer_compatibility_eval
capability_rollout_policy

D. Progressive disclosure is useful context engineering, but activation must be governed

The framework allows an agent to receive brief descriptions of many capabilities while loading full instructions only when a capability appears relevant. This reduces context load and lets the agent work with a larger catalog without loading every capability into every prompt.

This is highly relevant to OMNI’s context and capability topology.

But the source frames capability selection largely as an agent decision. OMNI needs three distinct states:

Discoverable — the agent may know that the capability exists.
Invokable — current identity, purpose, relationship, and policy allow use.
Committable — the result may cross into domain truth or real-world action.

An agent may discover a prescribing capability without being authorized to invoke it. It may invoke a medication-review capability without being permitted to commit a prescription.

Keeper doctrine:

Progressive disclosure governs context load; policy governs capability activation.
Discoverable, invokable, and committable are separate capability states.
The agent may select among admissible capabilities; it must not determine its own admissibility.

Candidate pressure:

capability_catalog_projection
capability_activation_policy
capability_admissibility_state

E. Capability boundaries should follow real responsibility boundaries

The example separates knowledge retrieval from human escalation. That is structurally useful: one responsibility retrieves information, while another creates a handoff to a human.

OMNI should avoid both extremes:

one giant “care agent” containing everything;
hundreds of microscopic capabilities mirroring individual functions.

A good capability boundary has:

a coherent purpose;
a stable authority profile;
reusable inputs and outputs;
meaningful evaluation criteria;
bounded side effects;
a recognizable owner.

Examples:

assemble_medication_review_context
evaluate_refill_readiness
create_human_escalation
retrieve_current_trial_availability
prepare_fulfillment_exception_packet

A capability should not simply be query_database or do_patient_care.

Keeper doctrine:

Capability boundaries should follow stable responsibilities, not code convenience.
A capability should be large enough to carry meaning and small enough to evaluate and govern.
F. Deterministic hooks belong around agent behavior, not inside its discretion

The source shows pre-tool-use hooks as deterministic actions that can guide or secure agent behavior.

That is directionally strong.

Hooks can enforce:

input validation;
permission checks;
data filtering;
approval requirements;
rate limits;
trace capture;
output validation;
post-action obligations.

However, a hook bundled by the same capability author is not automatically independent governance. High-consequence constraints may need enforcement at the runtime, gateway, or owning-domain boundary.

Keeper doctrine:

Hooks may enforce local capability policy; domain and runtime gates enforce system authority.
The capability must not be the sole judge of whether its own consequential action is permitted.
G. Lean core plus optional harness supports OMNI’s primitive discipline

The source describes a small supported core for broadly needed behavior and an outer harness for less universal capabilities such as code execution and sandboxing.

This is a useful architectural analogy for OMNI:

Constitutional core

identity;
consent;
authority;
source lineage;
domain ownership;
proof;
audit;
obligation.

Composable capability layer

trial matching;
refill preparation;
benefit explanation;
coding support;
marketing assistance;
specialized retrieval;
voice interaction.

The exact Pydantic distinction should not be copied. Web search or “thinking” is not universally core for every OMNI workload. But the design law holds:

Keep the invariant substrate small; compose optional intelligence above it.

Keeper doctrine:

The constitutional core should remain small, stable, and difficult to bypass.
Optional capability should expand what the system can do without redefining who owns truth or authority.
Do not mint substrate primitives merely because a framework offers another feature.
Where it lands

Major

P35 governed capability exchange
Agent Work Protocol
capability manifests and catalogs
Build-OS dependency, release, and evaluation management
progressive capability disclosure

Medium

AI substrate
RBAC and runtime policy
CNS capability selection
Settings/Catalog

Implementation-only

Pydantic AI syntax
MCP packaging
specific hooks APIs
Nimbalyst
Monty sandbox
What not to import blindly
Do not treat capability blocks as automatically compatible.
Do not allow model settings hidden inside capabilities to alter behavior without evaluation.
Do not expose every registered capability to every actor or workflow.
Do not let the agent decide what it is authorized to invoke.
Do not allow shared capabilities to update all consumers without versioning and staged rollout.
Do not treat MCP tool collections as governed capabilities by themselves.
Do not let deterministic hooks substitute for external runtime or domain enforcement.
Do not make one capability for every function or one universal capability for the whole workflow.
Do not adopt Pydantic AI as binding architecture merely because its abstraction is useful.
Tiering

Capability as the unit above tools
stale-vs-v3: AFFIRM/PARTIAL · weight_tier: spine · status: promote/sharpen

Capability composition and conflict semantics
stale-vs-v3: PARTIAL · weight_tier: spine-supporting contract · status: promote

Progressive capability disclosure
stale-vs-v3: PARTIAL · weight_tier: spine-supporting · status: promote

Shared capability versioning and blast radius
stale-vs-v3: PARTIAL · weight_tier: Build-OS · status: promote

Lean core plus optional harness
stale-vs-v3: AFFIRM · weight_tier: spine methodology · status: sharpen

Pydantic AI implementation
stale-vs-v3: implementation-specific · weight_tier: no-op · status: reject as doctrine

5. Hard read

This is one of the more useful framework sources because it offers a cleaner unit of construction than “agent plus a bag of tools.”

The capability abstraction fits OMNI well—but only after OMNI adds what the framework discussion largely omits: authority, ownership, typed side effects, compatibility, evaluation, versioning, proof, and activation policy.

Strongest OMNI line:

OMNI should compose agents from versioned, governed capability contracts whose tools, instructions, policies, evidence, and authority travel together—while the substrate determines which capabilities are discoverable, invokable, and permitted to commit.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

interesting... i mean.. if we're building our own agents, then we have to take this shit into consideration, even if its not full enterprise ready

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

reviewer: `Opus` · at: `2026-07-11` · run: `EVRUN-2026-000005` · formalizes Review 001 (Knox) + Nick Review 002, grounded vs §1 · dedup baseline: `000001 §2A` + `000002` + `000003` + post-v3 (esp. **§C GCE + P35 capability-topology · capability_contract/envelope · `EVRUN-000004 §0.5` three-gate · candidate≠commit · 217 agent_manifest**).

**HEADLINE VERDICT.** The wave's strongest **§C / capability-topology** source (Knox 4.4/5, full_semantic) — the "unit of composition inside the harness." **0 net-new** (all EXISTS-AS §C/P35), but genuine §C/P35 contract-level sharpenings, esp. **composition-conflict semantics** and **discoverable ≠ invokable ≠ committable**. `doctrine=AFFIRM/PARTIAL · build=absent`. **★ §C-impact source (see §D + registry §5 triage).** Nick note: reinforces Build-OS ("if we're building our own agents, take this into consideration"). Keeper: *compose agents from governed responsibility-bearing capability bundles — but treat composition as a CONTRACT problem, not frictionless Lego.*

### A. Concept clusters (full_semantic — §C/P35 capability topology)

| concept | OMNI meaning | homes | anchor | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|
| **Capability > tool as the unit (must include governance)** (A) | A tool = what op can be invoked; a **capability = a governed responsibility** (identity/owner · purpose · typed I/O · data+tools · actor/relationship reqs · permitted side-effects · **authority ceiling** · approval gates · model/runtime compat · eval bundle · evidence/trace · degraded modes · cost/latency · version/revocation) — a layer above MCP | §C `capability_contract`/`capability_envelope` · P35 · 217 `agent_manifest` | "capability defines a governed responsibility" | AFFIRM | absent | none | spine | promote (sharpens §C) |
| **★ Composition is a contract problem, not frictionless Lego** (B) | Two capabilities can conflict (contradictory instructions/overlapping tools/incompatible settings/competing hooks/authority rules); need compatibility checks · precedence · side-effect collision detection · **authority intersection = narrowest governing constraint** · deterministic hook ordering · reject-incompatible-combinations — detected before runtime | §C · P35 · RBAC (authority intersection) · CNS | "composable does not mean universally compatible" | PARTIAL | absent | none | spine-supporting | **promote (genuine §C/P35 contract delta)** |
| **★ Discoverable ≠ invokable ≠ committable** (D) | 3 capability states: agent may *know* it exists (discoverable) ≠ identity/purpose/relationship/policy allow *use* (invokable) ≠ result may cross into domain truth/action (committable). **Agent selects among admissible; it does NOT determine its own admissibility** | §C · RBAC · `EVRUN-000004 §0.5` three-gate · candidate≠commit | "progressive disclosure governs context load; policy governs activation" | PARTIAL | absent | none | spine | **promote (maps to three-gate)** |
| **Reuse centralizes improvement AND failure (blast radius)** (C) | Shared capability → version pinning · dependency graph · impact analysis · staged rollout · consumer-specific evals · rollback · change provenance; agents depend on versioned contracts, not mutable behavior | Build-OS · 261 (blast-radius) · version pinning | "reuse centralizes improvement and centralizes failure" | PARTIAL | partial | none | Build-OS | promote |
| **Capability boundaries follow real responsibilities** (E) | Not `query_database`, not `do_patient_care`; a good boundary = coherent purpose · stable authority profile · reusable I/O · meaningful evals · bounded side-effects · recognizable owner (e.g. `assemble_medication_review_context`, `evaluate_refill_readiness`) | §C · payload-noun≠domain (`GRD-026`) · capability envelope | "capability boundaries should follow stable responsibilities" | AFFIRM | absent | none | spine-supporting | sharpen |
| **Deterministic hooks around behavior, not inside its discretion** (F) | Hooks enforce input-validation/permission/filtering/approval/rate/trace/output-validation/obligations; BUT a hook by the same capability author ≠ independent governance — high-consequence constraints enforce at runtime/gateway/owning-domain (capability ≠ sole judge of its own consequential action) | 259 governance-outside-loop · RBAC gates · candidate≠commit | "capability must not be the sole judge…of its own consequential action" | AFFIRM | partial | none | spine | cite |
| **Lean core + composable capability layer** (G) | Small stable hard-to-bypass **constitutional core** (identity·consent·authority·source-lineage·domain-ownership·proof·audit·obligation) + composable optional capability above; don't mint substrate primitives for framework features | constitutional core · §C · `GRD-044` dedup discipline · 264-L simplification | "keep the invariant substrate small; compose optional intelligence above it" | AFFIRM | partial | none | spine methodology | promote (validates dedup discipline) |

**Roll-up:** 4 AFFIRM · 3 PARTIAL · 0 conflict. Build: absent/partial (§C undrafted; P35 net-new-per-C3.5). Pattern: `doctrine=AFFIRM/PARTIAL · build=absent`. Strongest §C-shaping source of the wave.

### B. Net-new primitive candidates (dedup)
- `capability_manifest` / `capability_contract` / `capability_authority_ceiling` / `capability_evaluation_bundle` — **EXISTS-AS** §C `capability_contract`/`capability_envelope` + P35 + 217 `agent_manifest`. **DO NOT MINT** — this IS §C/P35; sharpening = the full governed-responsibility bundle (behavior+access+policy+eval+proof+version travel together).
- `capability_composition_contract` / `capability_compatibility_profile` / `composition_conflict` / `hook_order_policy` — **partial exists-as** §C + RBAC (authority intersection) + CNS orchestration. **Genuine §C/P35 contract-level sharpening** = composition-conflict semantics (the most useful delta; OMNI's §C has capability contracts but thin on *composing multiple capabilities into one agent safely*). No mint (extends §C).
- `capability_catalog_projection` / `capability_activation_policy` / `capability_admissibility_state` — **partial exists-as** §C + RBAC + `EVRUN-000004 §0.5` three-gate + candidate≠commit. **Sharpening** = discoverable≠invokable≠committable (the capability-activation form of the three-gate). No mint.
- `capability_dependency_graph` / `capability_release` / `consumer_compatibility_eval` / `capability_rollout_policy` — **EXISTS-AS** Build-OS versioning/rollout + 261 blast-radius. Sharpening. No mint.
- **Net genuine mints = 0.** Sharpenings (→ §C/P35 + Build-OS): capability=governed-responsibility-bundle; **composition-conflict semantics** (authority-intersection=narrowest); **discoverable≠invokable≠committable** (three-gate for capabilities); shared-capability blast-radius (versioning); lean-core+composable-layer.

### C. Reread flags
- **Harness cluster 254/256/257 + capability-unit 267** — 267 is the "unit inside the harness" complement. Sibling: §C GCE, P35 (C3.5 net-new), `capability_envelope`/`capability_contract` (thesis §7 three-object family), `EVRUN-000004 §0.5` three-gate, 217 agent_manifest.
- Nick note: reinforces Build-OS "building our own agents" — the capability-composition discipline is what OMNI needs if it builds its own agent layer (route to Build-OS build-vs-buy + §C authoring).

### D. ★ §C-impact triage (REQUIRED per pipeline doctrine)
267 **does pressure §C** (Governed Capability Exchange): capability-as-governed-responsibility, composition-conflict semantics, discoverable≠invokable≠committable. **Disposition:** these are **sharpenings for §C authoring**, all EXISTS-AS §C/P35 + three-gate — they do NOT change a §C absorption plan (§C is undrafted/PAUSED in the spine). **§C remains PAUSED; no absorption-plan change triggered** (nothing to patch yet); carry 267's composition/activation semantics into §C when it is authored. Logged in registry §5. Propose-only.

### E. One-line hard read
The wave's best §C/capability-topology source; **0 net-new** but real §C contract deltas (composition semantics + activation states). **Strongest OMNI line:** *compose agents from versioned, governed capability contracts whose tools, instructions, policies, evidence, and authority travel together — while the substrate determines which capabilities are discoverable, invokable, and permitted to commit.*

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000005` · concept_registry: `analysis/EVRUN-2026-000005_ai-corpus-wave-4/EVRUN-2026-000005_ai-corpus-wave-4_concept_registry_and_routing_map.md` · source_anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `strongest §C/capability-topology source; 0 net-new; §C/P35 sharpenings (capability=governed-responsibility-bundle; composition-conflict semantics [authority-intersection=narrowest]; discoverable≠invokable≠committable [three-gate]; blast-radius versioning; lean-core+composable) → §C authoring + P35 + Build-OS; §C-impact = PAUSED unchanged` · promotion: `watch` (propose-only)

## §5 — Change log
- `2026-07-11` — wave-4 scaffold created (id `EVSRC-2026-000267`, provisional `_TK` slug); awaiting Nick transcript + Knox-read + URL paste.
- `2026-07-11` — transcript + Knox Review 001 + Nick Review 002 pasted; **Opus Review 003 written** (`EVRUN-2026-000005`); §0/§0.1 normalized; status `raw_dropped → analyzed`. 0 net-new; §C/P35 sharpenings; §C-impact triaged (PAUSED, unchanged). Folded to `EVRUN-2026-000005`.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md`.

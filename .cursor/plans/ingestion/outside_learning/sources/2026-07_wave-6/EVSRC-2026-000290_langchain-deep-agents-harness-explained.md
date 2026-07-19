# EVSRC-2026-000290 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000290_langchain-deep-agents-harness-explained.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000290`  ·  filename: `EVSRC-2026-000290_langchain-deep-agents-harness-explained.md`  ·  firmed-slug SUGGESTION: `langchain-deep-agents-harness-explained`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=GbzEDgcuGJU`  ·  source_title: `Deep Agents Explained`
- channel_or_org: `LangChain`  ·  speaker: `Sydney Runkle; Jake Broekhuizen`  ·  published_at: `2026-07-17`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `technical product-architecture talk + implementation discussion + audience Q&A`  ·  source_reliability_context: `practitioner / vendor` (first-party engineers describing LangChain's Deep Agents harness + observed production patterns; strong implementation authority for the product + observed patterns; vendor-positioned, not independent evidence that Deep Agents is universally preferable)  ·  topic_tags_light: `[Deep_Agents, agent_harness, long_horizon_agents, planning, task_state, context_management, progressive_disclosure, file_systems, abstract_backends, composite_backends, tool_output_offloading, skills, skill_sharing, prompt_supply_chain, sandboxes, execution_environments, code_execution, ripples, durable_execution, streaming, pause_resume, human_steering, context_compaction, model_controlled_compaction, subagents, recursive_agents, typed_delegation, observability, long_traces, AI_trace_analysis, deterministic_workflows, middleware, model_routing, provider_agnosticism, MCP, A2A, Agent_Runtime, Build_OS, Platform_Loop]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Sydney Runkle` · role_in_source: `presenter / core maintainer` · affiliation_at_publication: `LangChain` · speaker_type: `vendor / engineer` · authority_context: `core maintainer of LangChain open-source tooling (LangChain, LangGraph, Deep Agents); prior maintainer of Pydantic + helped start Pydantic AI. Strong first-party implementation authority on the Deep Agents harness (planning, context, filesystem, skills, sandbox, delegation, compaction) + current design experiments` · identity_confidence: `inferred` (no screenshot; from Knox metadata + transcript self-introduction)
  - name: `Jake Broekhuizen` · role_in_source: `interviewer / deployed engineer` · affiliation_at_publication: `LangChain` · speaker_type: `vendor / practitioner` · authority_context: `deployed engineer working with teams building agents; practical authority on architecture choices, deployment/observability problems, model-selection patterns, sandbox trade-offs, production cost` · identity_confidence: `inferred` (no screenshot; from transcript self-introduction)
- publisher / channel: `LangChain (YouTube; official technical event at LangChain HQ)`  ·  interviewer / moderator / host: `Jake Broekhuizen (+ audience Q&A)`
- event_context: `LangChain HQ technical talk + audience Q&A on the Deep Agents harness`  ·  perspective / conflict notes: `vendor-positioned — Deep Agents framed as "the future", LangGraph as preferred runtime, LangSmith as natural tracing/eval. Durable value = the mechanisms + admitted tensions (compaction experimental, sandbox topology unresolved, recursive trees slow, "more power = better" is a bet), NOT the implied product conclusion.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introductions
0:00
Nice to meet everyone. Um I am a as Jake mentioned core maintainer of our open
0:06
source tooling at Langchain. So I've worked on everything from Lingchain to Lingraph and now most of my time is
0:12
spent on deep agents. Um I kind of have a history in open source. I spent about a year and a half maintaining Pyantic
0:18
and then kind of helped start Pyantic AI. So I'm very passionate about kind of the open source for AI space.
0:25
Awesome. Awesome. Thank you. And uh I I'm Jake. I'm a deployed engineer, which
0:31
means that I work with a variety of teams of all different shapes and sizes who are either building agents or
0:37
thinking about building agents. I've seen teams use a variety of different frameworks in their approach to building
0:44
agents and I've seen teams roll their own custom implementation or use their own um you know custom solution.
0:52
What's really interesting is that typical agents excel and are actually pretty good at the regular tool calling
0:58
loop that can handle relatively simple tasks. Where it gets challenging though is when agents are kicked off to do
1:05
longer running tasks. Maybe they're doing research across a variety of different topic areas. Maybe they're
1:10
writing to files. Maybe they are doing some kind of delegated planning and
1:16
having sub agents. that becomes tricky and that's the problem that deep agents
1:22
and other agent harnesses that we'll touch on today aim to solve. So without
1:27
further ado, Sydney, how would you describe deep agents in a sentence? What is what is deep agents?
What are Deep Agents?
1:33
Yeah, so deep agents is a batteries included harness for building agents that excel at complex and longunning
1:41
tasks. That's my sentence. There we go. It's a good sentence. Harness you mentioned harness. Let's
1:47
kind of touch on that. I think that if uh if you're across X if if you're you know reading about different developer
1:53
forums you'll hear the word harness a lot. What do we actually mean when we say harness? Harness is sort of the surrounding
1:59
support that we add onto that core model and tool calling loop. So we're all very familiar with like you have a model and
2:06
some tools relevant to your context and then you send the model some prompt and it runs in a loop until it decides it's
2:13
done and then produces some final output. But there's actually a lot of kind of complex engineering that you
2:18
need to have built into all of the stages of that loop. And so the agent harness is kind of all of those pieces
2:25
added in. Okay. Yeah. Yeah, that makes sense. And and given that's what deep agents is,
2:31
what kind of agent apps or or what kind of applications do you see as the most common or the most applicable for deep
2:37
agents? Yeah, perhaps the one that folks are the most intimately familiar with in this
2:42
space is coding agents. Um, so an agent like Claude Code we would consider a
Common Use Cases for Deep Agents
2:47
deep agent because it's doing you know those longer running jobs uh needs lots
2:53
of context and to kind of be able to manage that context over a long horizon. Um deep research is another common use
2:59
case. So specifically answering questions or solving problems where you need access to tons of different data
3:05
sources um and you know you expect those research operations to take a long time.
3:11
Okay. Yeah. Yeah. Yeah. And and if we're sort of thinking about the way that deep that deep agents are different to
3:18
traditional agents, right? I think that um you know around around 2023 the whole react agent paper came out which is
3:24
reasoning and action agents agents having access to tools. How did like what are the components that make up
3:30
deep agents? I know there's you know there's there's things like file systems and things. What are the main areas that
3:35
make a deep agent or or that agent harness different or an extension of the
3:41
React framework that we're all so familiar with? Yeah. So, I'm going to touch on like kind of a couple of the pieces of the
3:46
harness. You're probably like, Sydney, what what are you inserting around that model and tool calling loop that's very abstract? Um, and then I think we'll
3:52
dive into a lot of these pieces in more depth. So, the first thing, again, you're probably familiar with this if you're a like cloud code user, is a
Core Components of a Deep Agent
3:59
planning tool. Just like humans are better at executing tasks if they like write down what they're going to do and
4:04
then check things off as they go. Um agents are also better at executing complex things if they keep track of the
4:11
work they're doing. So planning tools number one. Um sub agents are super helpful. So if you have a lot of work to
4:18
do, it's super helpful if you have assistants that can go off and do work for you and then come back with some
4:23
report. Um so sub aents is number two. Um, perhaps the one that I'm most excited to talk about is access to a
4:31
file system or kind of more abstract uh a backend where that agent can keep
4:36
track of files, memories, skills. These are a lot of like buzzwords. Um, but
4:41
just sort of the core um abstraction used to keep track of all the context.
4:47
Um, and and that kind of includes sandboxes as well. Um, and then, uh,
4:54
yeah, so that's that's kind of some of the core pieces. One last thing I'll mention is we keep saying long horizon
4:59
tasks, right? Um, and one thing that's really hard to get right with agents is summarization. So models have context
5:07
windows. They are getting longer and longer, but or larger and larger. Um, but we're pushing agents to do tasks
5:14
that always like hit that limit, right? Um, and so you want some sort of like built-in summarization that happens so
5:21
that you never actually hit that limit. You like work on your task until maybe 80% of your window is taken up and then
5:27
you like squish back down and then you can keep doing work. Um, so those are some of the core things built into the
5:33
harness. Okay. Awesome. Yeah. So, so to reiterate a planning tool, sub agents, a file
5:39
system, uh, the execution environment, so sandboxes, am I missing anything? Summarization. and sum summarization
5:47
three or sorry four key areas I s I think sort of is is really interesting to dive into in a little bit more depth
5:52
today so let's sort of start with file systems what make file systems a really powerful feature or or or element of
How File Systems Work in Deep Agents
5:59
building and working with deep agents I know that you know uh when I'm using clawed code or when I'm using cursor
6:05
agents they're accessing my codebase which is a file system so sort of what
6:11
what does it mean to have a file system in deep agents and What are some what are some common, you know, file systems
6:16
that people might use? Like what does that look like? Yeah, great question. So, um I'll start with kind of the example of a local file
6:23
system that we're all familiar with. Maybe not something you would use in production, but great for uh just
6:28
general development. File systems are kind of the key to context engineering.
6:33
Um it's where you can offload information that you don't want to squeeze into the prompt all at once, but
6:39
you do want generally accessible to the model. Um, in my mind, the file system is basically where you can practice what
6:47
we call like progressive disclosure. Um, and so you give the model enough information about what's in the file
6:54
system that it can access relevant files when it needs to. Um, but you're not overloading the context window. Um, and
7:00
the the relevant information can take a lot of forms, right? Like sometimes that's prompts in the form of skills,
7:07
sometimes that's documents that have memories, sometimes it's your like relevant data for your context.
7:13
Okay, got it. And and so you mentioned that was for local a local file system is is one that's quite popular. What if
7:19
I'm now sort of starting to think about how I can productionize and and and build deep agents that have access to to
7:26
something that is that is more than something that locally lives on my machine? I'm sure that you know us speaking about this today will will
7:32
hopefully sort of catalyze a lot of people to go and and see how they can build this and and the different types of applications that they can build. So
7:38
obviously I'll start locally but where will I go from there and sort of what is the file system what does a file system
7:44
landscape look like when I want to move beyond local development? Yeah, so we talk about file systems
7:49
because that's an abstraction that's pretty easy for an agent to understand and interact with like you can read and
7:54
write files etc. Um, but really what we're talking about is kind of abstract backends. And so where is your agent
8:01
going to go to find the um vast sources of data that are relevant to your application? That's probably databases,
8:08
right? Like surely you have important information there. Um I personally have a lot of like helpful information in
8:14
notion for example. Um and so you or in GitHub you can imagine all these like data sources that you want your um agent
8:22
to be able to interact with like their file systems. Um yeah yeah yeah yeah that makes sense. Uh
8:29
in terms of the work some of the work that I've done as a deployed engineer working with teams who actually use file systems. I've seen that people will use
8:37
them for example to offload large tool calls and things like that. So if I'm
8:42
sort of thinking about building an agent, you know things that are familiar to me if I build traditional agents are
8:48
agents that can call tools. how how does a file system like why why would I use a file system to to store large tool calls
8:56
and sort of like why is it helpful for me in in that instance? Yeah, so we're definitely getting back to the idea of like context overflow
9:02
here. If you're calling tools that um return extremely large results, maybe
9:07
you're doing data analysis um and you're getting huge files or just you know getting multimodal results that are
9:13
incredibly large. Um those are going to start to fill up your context window quite quickly. Um, and it's probably not
9:19
necessary that your agent has access to those uh that information in its main
9:25
prompt all the time. Um, and so the file system is a great place to like offload tons of data. Um, and then you know
9:31
point the agent to it in the case that it it needs that information. Um, and and the one last thing I'll say is this
9:37
is all sort of in our attempt to optimize what context you're sending to the model so that it can perform and do
9:44
its best. Um and so tool input and output offloading is one of the
9:50
strategies we use so that we don't have to summarize as often because when you summarize you inherently lose
9:56
information the agent is more likely to you know lose track of its main goal etc. Um and so those are kind of um
10:02
intermediate steps we can take to like reduce context size. Got it. Got it. So in in summary, we're
10:09
not storing things in the context of an agent anymore. we're just we're storing a reference to where that context lives and exists in the file system. And I
10:15
think that's sort of the key unlock there is that is that I can now maintain and and have reference to all of this
10:21
information but but not have it clutter the the context window, not have my LLM
10:27
calls be slower because there's large context. Would you sort of agree that that's that's one of those core benefits
10:33
there? Yeah, definitely. I think like I really like making the analogy that agents are like humans, right? Like I already
10:39
mentioned, you know, they use a planning tool to keep tack of the keep track of their various tasks. And I think similar
10:45
to humans, like if you send a ton of information all at once, they're more likely to get overwhelmed um and have
10:50
trouble. So if you can kind of control what you're sending there, just like humans, they're they do a better job.
10:55
Got it. Got it. And uh and does deep agents give me flexibility with with file systems and sort of like Yeah, I
11:02
guess like I I have access to a variety of different options, I presume? Yeah. Yeah, it's super flexible. So we
11:08
have a couple of built-in ones um local file systems. We also uh deep agents
11:13
runs on langraph which is our core agent runtime which has kind of short-term and long-term memory stores that are built
11:20
in and accessible as well. Um but then we also have kind of a generic backend protocol so that you can add in your own
11:27
backends um and file systems whatever those may be like I mentioned notion, GitHub um databases etc. Um and I think
11:34
the coolest thing is that we offer a like composite backend option. So maybe
11:39
um your you know documentation is in notion and your um customer information
11:47
is in some other source and so you can like combine those in a singular back end. Ah awesome. Awesome. Hey and so what are
11:55
skills and and why do I keep hearing about them on X? Yeah it's a great question. So skills
Agent Skills and Skill Sharing
12:00
are just prompts. They're fancy prompts, um, but they're really easy to share. Um, and they can help agents, you know,
12:08
really narrow in and do a certain task well. And so I use the like progressive disclosure buzzword earlier. And all
12:14
that that means is like you give the agent a little bit of information like, hey, you have access to this like write
12:21
PowerPoint skill and this code review skill. Like if you decide that you need them, you can go load them from this
12:27
location. Um, and so then I, you know, I'm like, "Oh no, I'm late for my meeting. Can you help me generate this
12:33
PowerPoint with these docs?" Um, and then it'll go and load in that skill into the prompt. And so you're not kind
12:39
of cluttering your prompt with this like, you know, hundreds and hundreds of lines of like PowerPoint specific
12:44
information. Um, but when you need it, you can load it in. Got it. Got it. Got it. Can I can I get a show of hands of of people who use
12:51
skills or or at least are familiar with Skills in the audience? Yeah. I mean, wow. Look, we've got a we've got a we've
12:56
got a pro crowd here. I think that I think that skills are really interesting and I think that uh the the the real
13:02
like unlock is that skills as you mentioned are are just like it's an extension of a prompt and skills are
13:08
becoming very sharable like talk a little bit about about why I would want to share a skill and sort of like what
13:14
what what unlock that allows me to do when it comes to building agents like I I see you know um you know we've all
13:20
probably read and seen about um openclaw and claudeb and there's there's there's I think claude or opencore has like
13:27
skill hub like what's the idea of of sharing these and what what does that what does that allow my agents to do?
13:34
Yeah, great question. So, I think we've seen skills blow up in a way similar to like MCP blowing up, right? Because it's
13:40
like, oh my gosh, we have this standard that makes it easier for our agents to like be more capable. And so, like, let
13:47
me just share this folder with my co-orker that's helped me like improve my code quality, right? um or improve my
13:55
um I don't know security of my code or just anything like that. And so um sharing skills are just like ways to
14:03
make yourself more productive, make your agents more productive. Um and because it's standardized, it's yeah, I think I
14:08
think very very popular. Yeah. Yeah. Yeah. No, that that makes a lot of sense. Thank thanks for kind of diving into that. So earlier we
Sandboxes and Execution Environments
14:16
mentioned sandboxes and and sort of execution environment again. You know, if I if I talk about X, I see that a lot
14:21
of people are now talking about where the execution of their agent exists. And I think that, you know, you have
14:27
companies like like modal, like Daytona, you have these companies aiming to make it easy to access a sandbox. And I think
14:34
that as agents become more powerful, people are leaning on them to do more things. And so you know the natural next
14:40
step is well now if it's going to do more then I at least want to be sure about the execution environment and I
14:45
want to be I want to make sure that this is this is executing in a way that I have control over. You know we spoke
14:52
about open core that's great but I'm likely not going to release that on my enterprise data right like that's why
14:57
people have it in a Mac mini that's why people isolate where it executes. So, so
15:02
what what role do you think the execution environment plays in in the rise of these more powerful agents and
15:09
sort of how does that how can you work with an execution environment with deep agents? Yeah, great question. So, um we I'm
15:19
going to like give a little bit of of preface here. So, all of us developers are very like intimately familiar with
15:25
how uh powerful and transformative agents can be, right? like agents help us write code at rates that we could
15:31
like not have imagined maybe even a year ago. Um and so we know that coding agents are really powerful. Um but I
15:38
think like agentic AI has yet to have quite the same impact on other industries but I think the like avenue
15:45
into that is not coding agents but agents that write code and sandboxes are the key to that. Um and the reason is if
15:52
you can write code to automate work you can do really powerful things. So code is super helpful for like data analysis
15:59
and research and that is like you know invaluable across industries. And so if you can ask your agent to you know go
16:06
look at your database and analyze things um it's going to do a much better job of that if it can like write scripts and
16:13
use those to analyze the data and generate figures um and things like that. Um, and so I think we're going to
16:18
start to see this emergence of agents that rely a little bit less on tool calling and a little bit more on
16:25
executing code in sandboxes or ripples. Ex executing code in sandboxes and ripples. Yeah, that's really
16:30
interesting. And and for context, guys, uh I'm I'm working with a variety of different companies who are now thinking about this. They're now building data
16:36
analysis agents that are executing SQL, but you want some safe place to do that SQL execution, right? And and so I I
16:44
think it's really interesting and I I think that it's also really interesting when you sort of look at things through the lens of everything can sort of be
16:50
solved by code or or rather like you can break a problem down into a way that is
16:56
resolvable by code, right? Like that's that's sort of um you know the beauty and and the power of having like exec
17:02
tools and things like that where you can use bash and gp and all of these tools that we see claude code and things like
17:07
that use. So uh that definitely makes sense and and so you mentioned that it's
17:12
very easy to work with sandboxes with deep agents. Why is it important to have
17:18
flexibility in the control of where things execute and sort of like what does that interface look like if I'm
Challenges in Deploying Agents to Production
17:23
working with the deep agents package? Yeah, that's a great question. So sort of the name of the game for us is flexibility, right? Like when langchain
17:31
was released long ago, one of its kind of core pillars and still to this day, one of our core values is that we
17:37
produce like model and provider agnostic solutions for folks. The reason for that is that the space is moving incredibly
17:43
quickly. And so the model that is right for the job, you know, today is maybe
17:48
not the model that's right for the job next week. Um, and I think the same is true, you know, with sandbox providers.
17:54
We mentioned we have all these integrations. Um and yeah, our foundations are in kind of open source
18:00
and open provider. Um and so we are still kind of advancing that with deep agents. And so you you know users
18:07
basically get the benefit and certainty that they can, you know, not experience that like vendor lock in and um try out
18:14
the latest and greatest without having to deal with changing code on their side. Yeah. No, that that that makes a ton of
18:21
sense. And so we've sort of given an overview of what deep agents are. We've spoken about file systems. We have
18:28
spoken about skills. We've spoken about the execution environment. If I'm now someone who is building and developing a
18:34
deep agent locally, I'm writing it in code. What's the next step for me? First of all, like what are the challenges when
18:40
it actually comes to deploying an agent? What what what does it mean to deploy an agent and and what are the challenges
18:46
there? Yeah. So, if you're deploying an agent, things are things are getting real, right? Your agent is like going to do
18:52
things, make an impact. Um, and despite the value in like fully autonomous agents, you might want a little bit of
18:58
like human oversight um or human in loop before really sensitive actions are taken. Maybe you're working on an email
19:04
assistant and you want to, you know, give a final stamp of approval before you're like sending your email to your
19:09
boss. Um, maybe you're working on a travel assistant agent and you want
19:14
users to be able to click an approval button before it charges their credit card, things like that. Um so first
Observability, Tracing, and LangSmith
19:21
class human in the loop support is kind of the first thing that comes to mind. Um the next thing is like durable
19:27
execution. Um so you want to be able to kind of observe all of the steps that
19:33
this agent is taking. Um and you know roll back to previous steps and try things again with different different
19:39
inputs um and know that you're uh you know all of those steps are documented
19:45
etc. Got it. And and also as well you know we spoke about agents being long running is
19:50
is the is the infrastructure different for that and like yeah the presumably as
19:56
well these tasks are now are now you know running for for extended periods of time. What does that also mean for the
20:01
deployment story? Yeah great question. So um one of the important things that comes with
20:07
longunning agents is that you probably want your end user to not experience like really horrible latency. And so we
20:14
in our underlying runtime which is ling graph as I mentioned treat streaming as a first class primitive. So you can see
20:20
like live updates and you know be able to um interrupt and intervene and kind of redirect your agent etc. Um
20:28
but I think also one of the challenges with longunning agents is you're going to have like really hard to debug and um
20:37
understand traces. Um yeah, that might get into our next subject a little bit. Maybe I'm jumping the gun here.
20:43
No, no, no. It's perfect. It's perfect. That That's actually where I want to go. Uh because obviously there's a variety
20:49
of different steps involved when having an agent that you want to deploy to production. Right now, you've taken the leap and you've made it available to
20:55
different users and it's being consumed. Right now, you're on the hook for the way that that responds. Uh you are, you
Quick Tips for Getting Started
21:02
know, responsible for making sure that it delivers high quality uh solutions to wherever you're wherever you are
21:08
applying it. talk to me about some of the challenges in in
21:14
observing and evaluating deep agents. You know, we've spoke about them being quite complex. Does that does that
21:19
introduce complexity? Yeah. So, I think um you know, if you looked at kind of tracing and
21:26
observability for agents that you were building months ago before deep agents were really popular, you would maybe see
21:32
like your input and a couple of tool calls um and then some final result. And it's pretty easy to reason about like
21:38
three, five, 10 tool calls. Um, but as soon as you're veering into the space of like hundreds of tool calls, minutes of
21:46
um processing, etc., you start to need support in like understanding what's
21:52
going wrong um if your agent isn't on track and kind of aggregating, you know, across runs like what are the um what
21:59
are the trends with my agent? What prompts help it do well? What's like, you know, when is it failing? Are there
22:05
like failures that I can predict? Are things like actually going wrong in my code, etc. And that's like really hard
22:11
to uh reason about if you have traces that are that long. And and so naturally, I'm I'm using lang
22:20
deep agents. I'm I'm I've probably heard of Langmith, so I'm going to use Langmith. What are some of the parts of Langmith that make it easier to to sort
22:27
of address those challenges, address those really longunning traces, understand different usage patterns? How does what kind of tools do I have there?
22:34
Yeah, I think the the thing that I'm most excited about is um we're building AI insights into our observability
22:41
platform. Um and so you can use our our AI assistant, which is like you know the little button in the bottom right hand
22:48
corner now um to ask questions about your traces and ask questions not only
22:53
about like a single trace or thread. a thread is kind of like a conversation. Um, but also view like aggregate
22:59
statistics about failures, etc. across um across runs. That makes sense. That makes sense.
23:05
Making me want to try it. So, we're sort of coming to the end of this of this uh this part of the the
23:12
evening, you and I you and I discussing, then we're going to open the floor up for some Q&A. But before we wrap up, if
23:17
a team wanted to try Deep Agents today and and sort of they're setting out
23:23
their missions of of achieving as much as they can in the first month, what are some quick unlocks or like what are some
23:28
quick things they can do to really begin to see the value of using deep agents? Yeah, great question. So the first one
23:34
is easy, which is like write a really good prompt. So the whole point of deep agents is to make agent building easy
23:41
for users. Um, and so the idea is you as a as a developer can just write a prompt
23:47
that's really specific to your use case. Um, and it should perform well. So put the complexity in the prompt is I would
23:54
say our number one recommendation. Um, deep agents makes it really easy to get started with like five lines of code.
24:00
You know, you define your prompt and tools and like you're you're off to the races. Um, the second thing I would say
24:06
is, uh, and this is also, um, something you can do in Linksmith, is you're going
24:11
to want to kind of quantitatively evaluate how well your agent is doing. And that's going to help you, uh, kind
24:17
of build this like self-improving feedback cycle. Um, and so you'll want to set up evals for like,
24:24
yeah, evaluating evaluating your agent. And I think the earlier you commit to that, the better your agent's going to
24:30
be. Awesome. So, Ryan prompts set up in Langmith uh and deep agent CLI as well,
24:35
right? Yeah. Yeah. So, we have um sort of a a an adjacent to claude code um
24:42
implementation. Uh the deep agent CLI is fully powered by our deep agents SDK. Um
24:48
but some nicities that come with that you can use any model um and it's automatically connected to linksmith
24:54
tracing. So if you kind of want to understand more of the um nuances there, you can see your links with traces.
25:01
Nice. Yeah, that's that's one thing that I also think is is really interesting is um and and we sort of mentioned it as
Q&A: How to Write a Good Prompt
25:06
well and and this is what I've seen working with a variety of different teams. If I want to do something that is like image related or you know uh you
25:13
know video related, I'm probably going to go and use a model by Gemini. If I want to if I want to use or or build an
25:19
agent that can execute SQL and um and generate code, then I'm probably going to go with some claude or some anthropic
25:25
model. I personally think that OpenAI's models are really good at writing. And so I I like I like 5.2 for for
25:32
expressive things and writing. And so if I'm if I'm doing something that's kind of like responding to customers maybe or is something that's more conversational,
25:38
maybe I maybe I use uh a model by OpenAI. And so that I think is another
25:43
thing. I think we've touched on it, but but is is definitely a power um and an unlock that you get when using something
25:49
or or when using a harness that that is sort of model agnostic. And and so finally, uh what are you most excited to
25:55
to ship next working working in our open source team working uh as a core contributor to the deep agents package?
26:01
Yeah, great question. We've got an exciting queue coming up for March. So, we talked a lot about sandboxes. U kind
26:07
of a lighterw weight version of a sandbox is a ripple. So it's not like a full execution environment. It's really
26:14
like uh code focused. And so we're working on a ripple tool. Um I'm excited
26:19
about that. We're also working on uh actually there's a a version of this in
Q&A: Multi-Agent Architectures and Sub-agents
26:24
deep agents now that you can um opt into a an autoco compaction tool. Um and that
26:31
sounds like pretty complicated. Like why are you bringing that up Sydney? It sounds like you already built in summarization. But the like I think
26:39
Lance wrote a blog post about this called learning the bigger lesson which is like the more power you give to the
26:44
model the better it's going to do. Like we're giving the model code writing and execution capabilities. We're giving the
26:50
model you know basically everything. Um and so we're experimenting with giving
26:55
it the power to control when it summarizes things. um and trying to evaluate if that is better than our kind
27:02
of deterministic like okay you're at 85% like now let's let's compact um but that
27:08
just to be uh that being said we're kind of very researchy with the uh harness
27:13
still which is is pretty exciting. Yeah. Yeah. I I agree. I agree. Well, thank you so much for uh for answering
27:20
those questions. I want to open up the some questions to the floor if there are anyone if there's anyone that has any
27:25
questions about anything that Sydney I Sydney's mentioned tonight then uh please feel free I'll I can come and
27:30
find you give you the microphone hi um how do you write a good prompt
27:38
what are the lessons learned there on uh how to optimally a prompt engineer that's a great question um so I think
27:45
part of the like my my two things were like write a good prompt and then set up evals and I think those really go hand
27:51
in hand. Um, and I think you know experimenting with like here's 10 different versions of this prompt like
27:57
and I'm going to run this agent a bunch like how is it doing across all of those runs um is really important. And so I
28:03
think if you don't have evals it's kind of hard to um really convince yourself
28:08
that you're um that that your prompt is as good as you want it to be. But that being said in like a rapid development
Q&A: Sandboxing, Isolation, and Cost Efficiency
28:14
cycle you can kind of figure out like okay my agent is really not doing what I want it to do. Um, and it there's like
28:20
great um I think my favorite like prompting tip is just like keep it
28:26
really organized. Um, and give you know good examples and bad examples. Um, and
28:32
what's my last prompting tip? I would say also like as a developer um, don't forget about your tools because the tool
28:40
like descriptions also go into the prompt. So even though that information is often like in code and dock strings
28:46
or arg types or you know um things like that like don't uh don't forget about
28:52
the tools because those are like you know how your agent takes action and if it doesn't know how to call them well then it's not going to do a good job.
29:00
So I I have a question maybe for both of you I want to know if you've seen any cases we had relaxations using debations
29:09
with regardives of agents. So we have been testing this approach for data heavy tasks and it's like quite a mess
29:17
because you have like a tree of an agent that has sub agents that has super agents but it's like quite interesting
29:23
is why I don't know any of you have seen this in production if you have any
29:28
opinions is like so so just to clarify it's a like a
29:35
hierarchy of a tree of agents where you have an agent and then an agent and then that has has planning agents. Yeah, Sydney, I'll let you take that.
29:41
Yeah. So, sort of two notes here. We did a bunch of work on kind of documenting and research for like multi-agent
Q&A: Will Deep Agents Replace Deterministic Workflows?
29:47
architectures and just like the super quick run through. We decided that there were four main ones we were seeing. There was like a router where you decide
29:53
like who does this query belong to and then send it to the relevant agent. the sub agent architecture which we use um
30:00
the like skills um architecture which is like you can kind of say that different
30:07
agents with different skills or like different personas um and the I'm I
30:12
can't remember the fourth one maybe it was custom workflow anyways it doesn't come oh it was it was swarm I guess um
30:18
but that hasn't been coming up as often anyways that being said um we went with the sub aent architecture for um deep
30:25
agents because we saw so many other um powerful harnesses using that and having
30:31
that be successful. Um so that's kind of the the history of why we're using it. Um
30:38
at some point you're like really going to struggle from a latency perspective if like all if it's sub agents all the way down. Um but that being said, we're
30:45
also seeing RLMs um so recursive u patterns gain a lot of popularity right
30:51
now. Um and that's like certainly the you know tree pattern. So I think it's like still to be determined how
Q&A: Supporting Multiple Providers and Multi-modal Blocks
30:58
effective that can be. I think the answer is very effective but you know
31:04
like very slow. I also think an interesting thing there is if you ask yourself like why you have
31:11
a sub agent right it's probably to do some particular task right and if you kind of abstract that away a model that
31:17
calls a tool calls that tool because that tool helps it do the task. If you have a you know a send email tool or a
31:23
you know query my bank account tool those those are separate tasks when you break that down into an into a powerful
31:29
like multiplanning agent that can solve different domain areas. You might, let's say I have like a finance agent. One,
31:35
one sub agent does accounting, one other um, you know, one other sub agent does like accounts receivable, another agent
31:41
does and so and those sub agents have access to their own tools, right? And so like what I think is really interesting,
31:49
what I think is really interesting is this idea that really like model calling
31:54
a tool can be like that same abstraction is applied to like model has or like planner has a sub aent if that makes
32:00
sense because a sub aent just has access to its own set of tools as well. And so like I think there's a really interesting trade-off between how many
32:07
tools can you provide to a model before it starts to lose accuracy on calling
32:12
the right one because now it has to decide between a variety of different tools. The the next question is okay how
32:17
many sub aents can I provide to a model before it begins to become inaccurate in
32:23
directing to the right sub aent. And so you must have a really a really big problem space to have that that sort of
32:30
level of depth. I think it's an interesting way to think about things, you know. Yeah.
32:38
Uh does Langston have any plans to support multiple providers during the execution?
32:44
So I mean many times we see that these contrior
32:52
it handles very perfectly when you switch between the the uh you know providers and the models. So I mean
33:00
right now light LLM they're doing it. So do you have any plans to support that for the deep agent?
33:07
Yes. Um so in I believe it was October we released lingchain v1 which was sort
33:13
of our like maturity mark um for our you know core underlying agent building utilities and with that we shipped uh
33:20
standard content blocks and the but we have to handle it our own those
33:27
blocks. So for example like a lens doing automatically switch input providers. So
33:33
is there any plans to support that? Yeah. So we we definitely want to
33:38
support like multimodal content blocks and like sending them between providers. An example with deep agents uh is that
33:45
you might want you know your sub agents to specialize in like image generation but then you know your supervisor agent
33:52
is doing something else so you're using a different provider. um if you're running into like specific issues, feel
33:57
free to feel free to open an issue, but our like standard content blocks should enable those um communications.
34:05
Is that a question from this side of the room? I'm going to kind of I see one down here. Yeah, thank you. So, I I feel like the
34:12
the whole sandboxing thing is getting oversimplified. What exactly are we isolating here? Is that just the uh code
34:18
execution or the tool permissions or the model state or GPUs uh being used? Uh and then my second
34:25
question is actually how many agents are being deployed in the production now actually uh to worry about the cost
34:33
efficiency in the production actually that do you I mean are we there yet to worry about that or
34:39
to worry about the cost efficiency of like longunning agents? Yes. Yeah. Are you seeing a lot of
34:44
agents getting deployed in the production yet? So, so I think there's two parts to that question. I can answer the question
34:50
about the cost the cost of these longunning agents and then I'll let Sydney take the one about sandboxes. Um, absolutely yes, we are seeing a lot of
34:56
longrunning agents be deployed to production. Uh, the the main cost comes from the model calls, not not the actual
35:04
infrastructure to host them. you know, obviously, right? Like, and actually as well, these longer running agents
35:10
actually often make less model calls than than, you know, short quickfire chatbased agents. It's it's we're kind
35:16
of talking about like longrunning researchbased tasks and things like that. And so I think that I think that the power that agents or rather the the
35:23
the scope of problems that agents can now solve
35:29
and and the ability to use these really powerful reasoning models is a price people are willing to pay to be able to
35:36
offer something that is able to uh to effectively infer over so such a large
35:42
range of unstructured data. And so the answer to your first question is yes. I'm or rather no. I don't see people
35:47
being blocked by the cost there. I think that that people are sort of embracing that with open arms and and it's also a
35:53
competitive market, right? Like the the benefit of having model providers across, you know, Gemini, Anthropic is
35:59
that really like the cost of inference is going down. So is the cost of API prices, right? Because everyone's competing to to to make as many calls as
36:06
possible or to be that provider for calls. Um, and so it's in the consumer's favor. And so I think that it's trending
36:11
in the right direction and I think that people are quite willing to to to move in that direction. to the sandbox
36:17
question. Yeah. Um, so we talked a lot about like code execution in sandboxes. Obviously, you can do that in a in a ripple tool
36:25
which just has, you know, fewer uh resources. I think one of the things we didn't touch on and I I should have
36:31
touched on when you asked about uh complexities with deployments is like um O and permission control. Um, and so
36:37
that's definitely I think where sandboxes become super valuable. Like should this sandbox be you know shared?
36:44
Should it be unique to every user conversation? Should it be like uh used
36:49
for this user across conversations across a team across an org? Probably not sandbox across an org. But um yeah,
36:56
I think permissions is like the biggest thing there. And then also, you know, like why do we have containers? Why do
37:02
we have servers for different things? like you're just giving your agent access to like isolated resources is the
37:09
idea. And I think another interesting thing that people are sort of thinking about now is like do you run the entire agent
37:15
in a sandbox or do you execute tool calls in a sandbox and and and
37:22
effectively cross that that networking boundary, make the tool call and then extract that response back. The the
37:28
problem with executing the entire agent in the sandbox is that you're now giving it sensitive API keys. you're giving it
37:34
the flexibility to go and make the calls that it needs to do. Uh now that agent,
37:39
you know, it's still in a sandbox, but but the the environment secrets and things
37:44
like that now also live in the sandbox too. And this sandbox is meant to be a safe place. So so now if you if you just
37:50
use the sandbox for calling tools, you have to take the hit on latency of making requests to the sandbox, the tool
37:56
executes and then receiving that result. And so there's trade-offs in both. Um, and I think that I don't think that the
38:02
market sort of landed on a on a clear use of them yet. Um, but those is our CEO Harrison Chase wrote about this
38:08
actually. He wrote a blog recently talking about the different paradigms of of using sandboxes. And so I think
38:13
definitely a good call out and and that's something that we'll will become more clear as more people use it. Yeah. So I think we have time for a couple
38:20
more questions. I want to want to make sure that we're heard over here. Questions.
38:26
I it speaking for myself I uh you know the problems that we're solving in my
38:32
company we've used like uh like your create or your react agent with like it
38:37
almost like call it workflow um and subdrafts and all that. Uh when clients
38:42
come to you and ask like uh is this the right use case for deep agents? Do you see deep agents replacing some of those
38:49
like here's the right way to do an analysis for example like I've got really complex data analysis I need to
38:55
run there's a right way to do it sort of like a textbook case for like a workflow. Um do you see DV agents kind
39:02
of like coming in and replacing that like paradigm or you still see like two
39:08
specific lanes for all the types of problems we've run into? Yeah, this is a this is a great
39:14
question. Um, we are pretty excited about deep agents. We do think it's like
39:20
the direction that things are going. You know, I said, um, give the agent more power to do things and it's going to do
39:26
a better job. I think that's in line with the general like the more agentic
39:31
something is, the more useful it theoretically is, but also maybe it's uh
39:36
riskier for something to be more agentic. I think you were mentioning like, you know, there are a lot of tasks
39:41
that kind of fit well into this like workflow architecture. Like you need some deterministic compliance steps
39:48
before you run some agentic uh task. And I think one of the ways that we're
39:53
trying to build that into deep agents is with support for custom middleware. Um, and custom middleware are things that
39:59
you can go and plug in at any point in that agent loop. Um and so that's kind of our like escape hatch for hey I do
40:06
need to run some like deterministic um logic in this or you know checks etc. Um
40:12
I still think there's a place for like langraph uh you know we are putting a
40:17
lot of bets on it as our um agent runtime still um but I I think deep
40:24
agents is the future. Yeah. And and with that as well, the create agent, Sydney mentioned v1. The create
40:30
agent is sort of the create react agent equivalent. And there are definitely some cases where like if you just need a few tools to be able to be called by a
40:36
model and you don't need to have things like delegated planning and and all of the benefits that you get with deep agents, then it definitely does still
40:42
make sense to use create agent and and that um and that sort of core react primitive. So that has access to to
40:49
middleware as well. So yeah, different different levels of complexity are sort of where we see people use different uh
40:56
primitives if that makes sense. I think the the last thing I'll add to is like we do aim to make these things
41:02
composable. Like if your use case really lends itself to a workflow with like one agentic step, maybe you have a bunch of
41:08
deterministic ones and then a deep agent runs in that agentic step and then you like go do your other tasks.
41:15
Okay, I think we have time for one more and then uh and then we'll we'll have some time for networking. Was there was there one coming up from around here?
41:21
Yeah. Yeah. We're just asking about uh the couple like sort of like Oracle
41:27
standards like A2A like a little about being collaboration and the other one MCP
41:34
like it's superseded because they go like code execution and running in a sandbox.
41:39
Sorry, what was the last one? MCB I mean was super popular now like there seems to be a shift more towards
41:45
code execution and CLIs. Yeah. Um, yeah, I do think now that
41:51
we're seeing a little bit more like popularity with programmatic tool calling in, yeah, like ripples and
41:57
sandboxes, maybe a little bit less relevant. At the same time, I think generally when there's like provider
42:03
agnostic standards, I'm excited about it just because, you know, like skills,
42:08
MCP, things like that um are very exciting to like, you know, enterprise
42:13
customers etc. who know that like collaboration across teams both between like people and agents is really
42:19
important. Um so maybe it's a little bit less important than it was like three months ago but I think still like having
42:25
standard specs is is helpful for a collaboration.
42:30
Yeah. Um and and we like kind of endorse that by for linksmith deployments our um
42:36
service for deploying agents built on lingraph. Um, we have like ADA endpoints and um, LinkSmith has MCP endpoints and
42:44
and things like that. It's been an absolute pleasure to host you all at Lang Chain's headquarters.
42:50
Thanks, folks.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

## Review 001 — Knox / ChatGPT strategic read

**Layer:** `captured_interpretation_nonbinding`
**Purpose:** strategic source-local interpretation

### 1. Rough metadata

`source_platform: YouTube`
`source_url: https://www.youtube.com/watch?v=GbzEDgcuGJU`
`source_title: Deep Agents Explained`
`channel_or_org: LangChain`
`speakers: Sydney Runkle; Jake Broekhuizen`
`speaker_roles: Sydney Runkle — core maintainer of LangChain open-source tooling / Deep Agents; Jake Broekhuizen — deployed engineer working with agent-building teams`
`published_at: 2026-07-17`
`captured_at: 2026-07-18`
`capture_method: YouTube screenshot + full transcript paste`
`content_type: technical product architecture talk + implementation discussion + audience Q&A`
`source_reliability_context: first-party engineers and practitioners describing LangChain’s Deep Agents harness and production lessons; strong implementation authority for the product and observed patterns; vendor-positioned and not independent evidence that Deep Agents is universally preferable`
`topic_tags_light: [Deep_Agents, agent_harness, long_horizon_agents, planning, task_state, context_management, progressive_disclosure, file_systems, abstract_backends, composite_backends, tool_output_offloading, skills, skill_sharing, prompt_supply_chain, sandboxes, execution_environments, code_execution, ripples, durable_execution, streaming, pause_resume, human_steering, context_compaction, model_controlled_compaction, subagents, recursive_agents, typed_delegation, observability, long_traces, AI_trace_analysis, deterministic_workflows, middleware, model_routing, provider_agnosticism, MCP, A2A, Agent_Runtime, Build_OS, Platform_Loop]`

---

### 2. People / authority context

**Sydney Runkle** — presents herself as a core maintainer of LangChain’s open-source tooling, with work across LangChain, LangGraph, and Deep Agents and prior experience maintaining Pydantic and helping start Pydantic AI.

She has strong first-party implementation authority concerning:

* what Deep Agents is;
* its planning, context, filesystem, skill, sandbox, delegation, and compaction machinery;
* its current design experiments;
* and the distinctions LangChain is drawing among frameworks, runtimes, harnesses, and execution environments.

**Jake Broekhuizen** — presents himself as a deployed engineer working with organizations building agent systems.

His strongest authority is practical:

* the architecture choices teams are making;
* deployment and observability problems;
* model-selection patterns;
* sandbox trade-offs;
* production cost questions;
* and where agentic systems are being adopted.

**Publisher / perspective posture**

This is an official LangChain technical event. It is considerably more substantive than a product advertisement, but it still contains vendor positioning:

* Deep Agents is described as the likely future;
* LangSmith is the natural tracing and evaluation system;
* LangGraph remains the preferred runtime;
* and some unresolved design experiments are presented enthusiastically.

The durable value lies in the mechanisms and tensions, not the implied product conclusion.

---

### 3. Suggested processing

`priority: 4.75/5`
`depth: full_semantic`
`EVRUN needed?: yes`
`spine_candidate?: runtime-spine sharpening, not independent constitutional source`

**Promotion posture:**
`Agent-Runtime spine sharpening | context-governance implementation | long-horizon execution | sandbox and credential architecture | delegation contract | compaction and checkpoint pressure | Build-OS practice | deterministic-shell / agentic-island doctrine`

### Sibling relationship

This source is a direct expansion of:

* `EVSRC-2026-000257` — introductory Deep Agents harness decomposition.
* `EVSRC-2026-000059` — long-horizon agents, context engineering, traces, compaction, and filesystem-based harnesses.
* `EVSRC-2026-000224` — dynamic subagents and code-mediated parallel orchestration.
* `EVSRC-2026-000216` — trace-driven self-improving agent engineering.
* `EVSRC-2026-000246` — Claude Code practices, filesystem-native work, verification, and agent-operable repositories.
* `EVSRC-2026-000084/85` — Karpathy’s agentic engineering, bounded loops, evals, and verification.
* Current `OMNI Agent Runtime & Harness`.
* Current Platform Loop and OMNI Build-OS.

### What is genuinely additive

This talk adds useful depth around:

1. **The filesystem as a context-externalization interface**, rather than merely a place where code exists.
2. **Large tool-result offloading** and reference-based context management.
3. **Composite backends** that expose databases, Notion, GitHub, and other resources through filesystem-like abstractions.
4. **Skills as progressively disclosed procedural context** and the emerging skill-sharing ecosystem.
5. **Execution-environment topology**, including whether the whole agent or only tool execution belongs inside a sandbox.
6. **Credential and secret placement trade-offs** created by sandboxing.
7. **Long-running execution semantics**, including streaming, interruption, redirection, pause, and rollback.
8. **Model-initiated compaction** versus deterministic threshold-based compaction.
9. **The relationship among tools, subagents, recursive agent trees, and deterministic workflows.**
10. **The strongest admission in the talk:** more agency may increase usefulness while also increasing risk.

---

## 4. Strategic read

### Classification

This is a **high-value implementation source for the Agent Runtime and Build-OS**, but not a generalized architecture for OMNI.

Its surface message is:

> Deep Agents supplies planning, filesystems, skills, subagents, sandboxes, summarization, and observability so models can complete complex long-running work.

The deeper architecture is:

> **Long-horizon agent performance depends on externalizing work state, context, artifacts, execution, and delegated responsibilities into a governed runtime rather than asking one model context to remember and improvise everything.**

Its most important tension is embedded in the speakers’ enthusiasm:

> Giving the model more power can improve performance.

That may be empirically true in some workloads.

It cannot become OMNI doctrine without the paired constitutional law:

> **Every increase in operational power must be accompanied by narrower admissibility, stronger isolation, more explicit authority, better proof, and a reliable stop path.**

---

### Core takeaway

**The keeper is: long-running agents become reliable by moving state, context, orchestration, artifacts, and execution out of the model’s transient reasoning and into explicit runtime structures.**

The OMNI correction is:

> **Externalization must not merely make information available; it must preserve custody, authority, provenance, lifecycle, and the distinction between workspace state and domain truth.**

A second keeper:

> **Use the least agentic architecture that can complete the work: deterministic structure where the process is known, agentic discretion where interpretation is genuinely required.**

---

# A. “Deep agent” should be a runtime profile, not a new ontological species

The source distinguishes simple tool-calling agents from “deep agents” capable of:

* long-running work;
* planning;
* filesystem interaction;
* context management;
* delegation;
* summarization;
* and code execution.

This is a useful product category.

OMNI should not create a separate deep-agent domain or root object.

A deep agent is better modeled as a class of `agent_runtime_profile` characterized by:

* long time horizon;
* larger or dynamic context;
* durable checkpoints;
* artifact workspace;
* planning;
* delegated children;
* execution environment;
* stronger observability;
* interruption;
* and recovery.

The stable agent identity remains separate from its runtime posture.

The same underlying capability could operate in:

* short interactive mode;
* bounded workflow mode;
* long-horizon research mode;
* or background reconciliation mode.

**Keeper line:**
**“Deep” describes the run architecture and horizon, not a new source of identity or authority.**

---

# B. The harness is where model possibility becomes system behavior

The source defines a harness as the software surrounding the model-and-tool loop.

That appears simple, but it is one of the most important architecture statements in the corpus.

The model supplies latent capability.

The harness determines:

* available context;
* tool visibility;
* execution environment;
* planning;
* memory;
* skills;
* delegation;
* compaction;
* retries;
* interruption;
* tracing;
* and stopping.

For OMNI, the harness also needs:

* workload identity;
* represented principal;
* purpose;
* data scope;
* authority ceiling;
* credential policy;
* action semantics;
* proof requirements;
* fallback;
* rollback;
* and kill switch.

This confirms the current runtime law:

> **The harness is where authority is operationalized.**

But that phrase needs precision.

The harness does not originate domain authority.

It enforces the authority granted by:

* the actor;
* the represented principal;
* the owning domain;
* operator policy;
* consent;
* and the current governed workflow.

**Keeper line:**
**The harness may enforce authority; it must not invent it.**

---

# C. Planning tools externalize work state

Deep Agents supplies a planning tool because complex work improves when the agent records:

* intended steps;
* current progress;
* completed items;
* and remaining work.

That is not merely a prompting technique.

It creates an explicit runtime object.

A useful plan record may contain:

* objective;
* assumptions;
* decomposition;
* current step;
* dependencies;
* completed steps;
* blocked steps;
* evidence collected;
* deviations;
* abandoned branches;
* and completion criteria.

The plan should remain:

* versioned;
* inspectable;
* revisable;
* attributable;
* and subordinate to the governing work package.

The agent’s plan is not automatically the authorized workflow.

It may misunderstand:

* the assignment;
* applicable policy;
* task dependencies;
* authority;
* or the required proof.

For Build-OS, the external work package and read graph continue to govern.

The agent’s plan is a run-level execution proposal against that admitted work.

**Keeper line:**
**The mission governs the run; the plan organizes the agent’s attempt to fulfill it.**

---

# D. Plan changes need lineage

Long-running work rarely follows the first plan exactly.

An agent may:

* discover missing evidence;
* encounter a failed tool;
* abandon an approach;
* broaden or narrow scope;
* or revise its sequence.

That change should not disappear inside the conversation.

A meaningful plan transition should record:

* previous plan version;
* reason for revision;
* evidence that triggered it;
* newly introduced work;
* removed work;
* changed risk;
* and whether new approval is required.

This becomes especially important when an agent’s revised plan crosses into:

* another data source;
* a more powerful tool;
* another domain;
* increased cost;
* external communication;
* or consequential action.

**Keeper line:**
**A plan revision that changes scope, authority, or consequence is a governed transition—not ordinary model reasoning.**

---

# E. Filesystems are effective because models understand their interaction grammar

The talk treats filesystems as an intuitive abstraction for models:

* list;
* read;
* write;
* locate;
* reference;
* and organize.

Models have extensive training exposure to these patterns, particularly through coding.

That makes filesystem-like interfaces operationally attractive.

But the usefulness of the interface should not lead OMNI to make every knowledge source literally a filesystem or to flatten every resource into one path hierarchy.

The important abstraction is:

> **A navigable, progressively disclosed resource namespace with explicit operations and stable references.**

The implementation may be:

* repository;
* object store;
* database;
* knowledge reservoir;
* document system;
* clinical record;
* catalog;
* external API;
* or virtual mount.

**Keeper line:**
**Filesystem semantics are an agent-friendly interaction grammar, not a universal truth-storage architecture.**

---

# F. A runtime workspace must remain distinct from canonical memory

The source places:

* files;
* memories;
* skills;
* data;
* and tool outputs

behind a common backend abstraction.

That is operationally convenient.

It risks collapsing several different object classes.

OMNI must distinguish:

### Ephemeral execution workspace

Temporary files produced during one run:

* intermediate calculations;
* generated code;
* downloaded artifacts;
* partial reports;
* scratch state.

### Durable run checkpoint

State needed to resume or audit the run:

* current plan;
* unresolved work;
* source pointers;
* pending tools;
* authority state;
* artifact identities.

### Canonical domain state

Patient, provider, order, payment, communication, deployment, or architectural truth owned by its domain.

### Knowledge or evidence reservoir

Sources and derived projections with provenance, authority, and lifecycle.

### Procedural skill catalog

Instructions governing how an agent performs a class of work.

### Memory

Durable learned context subject to promotion, expiry, correction, and forgetting.

These may all be accessed through one agent-facing interface.

They must not become one storage class.

**Keeper line:**
**One navigation interface may expose many stores; it must not erase what kind of state each store contains.**

---

# G. Progressive disclosure is context governance in miniature

The source repeatedly uses progressive disclosure:

* the model initially sees a small description;
* it loads the full skill, file, or result only when needed;
* large material remains out of the active context window.

This reduces:

* token cost;
* distraction;
* latency;
* and context-window exhaustion.

For OMNI, progressive disclosure needs a stronger admissibility sequence:

`actor + represented principal + task + purpose + authority`
`→ eligible resource set`
`→ compact descriptors`
`→ relevance selection`
`→ full-resource authorization`
`→ context insertion`
`→ use receipt`

A description may itself reveal sensitive information.

Even the existence of a file, diagnosis, investigation, or operator policy can be restricted.

Therefore progressive disclosure should apply to both:

* semantic relevance;
* and permission.

**Keeper line:**
**Reveal progressively by need and by authority.**

---

# H. Large tool results should become governed artifacts

The source describes offloading large tool outputs into files and returning only references to the model.

That is a strong pattern.

Instead of placing a huge:

* query result;
* dataset;
* image collection;
* report;
* or multimodal object

inside the active context, the runtime creates an artifact and supplies:

* a path;
* handle;
* descriptor;
* or summary.

For OMNI, the artifact needs more than a path.

It may require:

* stable identity;
* producing tool and version;
* run identity;
* source query;
* captured time;
* content hash;
* classification;
* operator and tenant scope;
* patient or subject scope;
* retention;
* expiry;
* provenance;
* access policy;
* and whether it is raw, derived, or transformed.

The agent should not be able to replace a large output with an ungrounded summary and discard the original.

**Keeper line:**
**Externalize large context as an attributable artifact, not as an anonymous file and a lossy summary.**

---

# I. References reduce context size but introduce referential failure

A reference-based runtime must handle:

* missing objects;
* expired objects;
* changed contents;
* unauthorized objects;
* stale snapshots;
* broken paths;
* incompatible versions;
* and references that resolve differently after resume.

Therefore a long-running run should use pinned resource identities or snapshots where reproducibility matters.

A path such as `latest/customer_data.csv` is not enough.

The run may need:

* immutable artifact ID;
* version;
* checksum;
* capture receipt;
* and clear refresh semantics.

**Keeper line:**
**A small reference is safe only when what it resolves to is stable, authorized, and replayable.**

---

# J. Composite backends should be federated projections, not merged custody

The source describes combining:

* Notion;
* GitHub;
* databases;
* customer sources;
* and other systems

behind one composite backend.

This is powerful for agent usability.

It also creates an attractive but dangerous fiction that all mounted resources belong to one world.

They may differ in:

* owner;
* authority;
* tenant;
* privacy;
* freshness;
* update semantics;
* transaction behavior;
* retention;
* and legal basis.

The runtime can project them into one interface while preserving:

* source system;
* credential;
* principal;
* operator;
* data class;
* access mode;
* and commit semantics.

**Keeper line:**
**Compose access, not ownership.**

---

# K. “Skills are just prompts” is useful and incomplete

The source says skills are “fancy prompts” that can be loaded when needed.

At the lowest implementation level, that is often true.

A skill may be a folder containing:

* procedural instructions;
* examples;
* scripts;
* references;
* and task-specific guidance.

But in an enterprise or care substrate, the phrase “just prompts” can hide governance consequences.

A skill may shape:

* how the agent interprets policy;
* which sources it consults;
* which checks it performs;
* how it communicates;
* which tools it calls;
* and when it escalates.

That means a skill needs:

* identity;
* owner;
* version;
* source;
* applicability;
* test coverage;
* allowed runtime lanes;
* dependencies;
* deprecation;
* and change lineage.

The current OMNI hard distinction remains necessary:

* **Build skill** — procedural guidance for building or maintaining OMNI.
* **Product skill** — procedural guidance inside a live product capability.
* **Product capability** — the governed responsibility, authority ceiling, side effects, evaluation, and proof.

**Keeper line:**
**A skill may be implemented as context, but its operational effect can be architectural.**

---

# L. Shared skills create a software-supply-chain problem

The source celebrates skill sharing because teams can distribute useful procedures.

This can produce rapid leverage.

It can also distribute:

* malicious instructions;
* stale practices;
* hidden external calls;
* insecure code;
* copied secrets;
* license violations;
* prompt-injection payloads;
* telemetry;
* or unsafe organizational assumptions.

A shared skill should therefore be treated like a dependency:

* provenance;
* publisher;
* signature or checksum;
* version pinning;
* review;
* permissions;
* transitive dependencies;
* compatibility;
* vulnerability reporting;
* and recall.

A public skill hub is not automatically safer than copying code from an unknown repository.

**Keeper line:**
**Reusable procedural intelligence needs supply-chain governance.**

---

# M. Tool descriptions are part of the effective prompt

The speaker correctly warns that tool:

* descriptions;
* argument schemas;
* docstrings;
* and type information

shape model behavior.

This means tool definition is not merely developer documentation.

It is executable behavioral context.

A change in a tool description can alter:

* tool choice;
* argument formation;
* refusal;
* retry behavior;
* and safety.

OMNI should treat material tool-schema and description changes as versioned runtime changes subject to evaluation.

**Keeper line:**
**Tool metadata is behavior-shaping code for the model.**

---

# N. Code execution expands the agent from caller to local programmer

The source argues that non-coding industries may gain major value from agents that can write and run code for:

* analysis;
* database work;
* research;
* figures;
* and automation.

This is plausible and important.

Code execution gives the agent a general transformation language.

Instead of requiring a prebuilt tool for every operation, the agent can compose logic dynamically.

That dramatically increases capability.

It also increases risk.

Generated code may:

* access unexpected files;
* issue broad queries;
* create network calls;
* exfiltrate data;
* consume excessive resources;
* modify state;
* install packages;
* invoke dangerous binaries;
* or behave differently on retry.

**Keeper line:**
**Code execution replaces a bounded tool menu with a programmable action surface.**

---

# O. Generated code should be treated as a candidate execution artifact

A code-capable agent should not simply emit code into an opaque interpreter and receive the result.

The runtime should preserve:

* generated code;
* generating run;
* objective;
* declared inputs;
* allowed outputs;
* dependencies;
* execution environment;
* permissions;
* resource budgets;
* result;
* errors;
* and side effects.

Depending on risk, the code may require:

* static analysis;
* policy checks;
* human review;
* dry run;
* read-only mode;
* or deterministic test execution.

**Keeper line:**
**The agent may write the program; the runtime decides whether and how that program may execute.**

---

# P. Sandboxing is multidimensional

The audience correctly challenges the talk’s initial simplification of sandboxing.

A sandbox may isolate:

* compute;
* process tree;
* filesystem;
* network;
* package installation;
* databases;
* tools;
* model access;
* secrets;
* GPU;
* tenant;
* user;
* conversation;
* time;
* cost;
* and outbound artifacts.

Saying “the agent runs in a sandbox” does not specify which of these are isolated.

OMNI needs an explicit sandbox or execution-environment profile.

Possible dimensions include:

`principal_scope`
`tenant_scope`
`patient_or_subject_scope`
`filesystem_scope`
`network_policy`
`tool_policy`
`secret_policy`
`package_policy`
`compute_budget`
`time_limit`
`persistence_policy`
`artifact_export_policy`
`monitoring_policy`
`destroy_or_reuse_policy`

**Keeper line:**
**A sandbox is a matrix of isolation decisions, not one security property.**

---

# Q. Whole-agent versus tool-only sandboxing is a real architecture decision

The speakers identify two broad approaches.

### Whole agent inside the sandbox

Benefits:

* stronger containment of generated code and local activity;
* simple local interaction among model, files, and execution;
* fewer network crossings.

Risks:

* model-provider keys or service credentials may enter the sandbox;
* the sandbox may gain broad network access;
* compromise of the agent process exposes more control material;
* persistent state becomes harder to govern.

### Tool execution inside the sandbox

The agent remains outside and invokes bounded execution services.

Benefits:

* secrets can remain brokered outside;
* execution environment is narrower;
* easier separation between reasoning and side effects.

Costs:

* more latency;
* larger interface surface;
* data transfer;
* more complicated artifact handling;
* possible leakage across the boundary.

OMNI should support multiple execution topologies selected by consequence and workload.

**Keeper line:**
**Place the smallest necessary execution surface inside the highest-risk boundary.**

---

# R. Secrets should be leased, not deposited

The talk highlights the danger of putting API keys into a sandbox.

This is a critical runtime concern.

Agents should prefer:

* workload identity;
* short-lived credentials;
* brokered calls;
* purpose-bound tokens;
* scoped database roles;
* per-tool authorization;
* and revocation.

The agent or generated code should not possess a long-lived master credential merely because it may need to access several services.

**Keeper line:**
**Give the run a revocable capability for this action, not a reusable secret for the whole system.**

---

# S. Sandbox reuse must match the isolation boundary

The speakers ask whether a sandbox should be:

* per invocation;
* per conversation;
* per user;
* per team;
* or per organization.

There is no universal answer.

Reuse can preserve useful state and reduce cost.

It can also retain:

* prior data;
* generated files;
* credentials;
* injected instructions;
* malicious code;
* and cross-user information.

A runtime should explicitly declare:

* ownership;
* persistence;
* reset conditions;
* cleanup proof;
* and cross-run reuse.

**Keeper line:**
**Persistence is a capability and a contamination risk.**

---

# T. Durable execution is more than keeping the process alive

The source says long-running agents require durable execution.

That should include:

* persisted run identity;
* checkpoint;
* plan state;
* artifact references;
* current authority;
* pending actions;
* retries;
* timeouts;
* leases;
* cancellation;
* resumption;
* compensation;
* and terminal status.

A process surviving for an hour is not durable if it cannot recover from:

* worker loss;
* provider failure;
* user interruption;
* stale context;
* partial tool success;
* or credential expiry.

**Keeper line:**
**A durable agent is resumable and reconcilable—not merely long-lived.**

---

# U. Time changes the validity of context

Long-running tasks create temporal problems that short calls often avoid.

During a long run:

* a patient state can change;
* a deployment may roll back;
* a file may be edited;
* a price may change;
* a policy may be superseded;
* a credential may expire;
* or another actor may complete the work.

The runtime must decide whether to:

* pin context to the start state;
* refresh;
* revalidate before action;
* or abort because assumptions are stale.

**Keeper line:**
**The longer the run, the more likely its original context stops being current authority for action.**

---

# V. Streaming improves visibility but does not authorize the stream

The source values first-class streaming so users can:

* see progress;
* interrupt;
* intervene;
* and redirect.

That is useful for long work.

But streamed text may be:

* provisional;
* incomplete;
* contradicted later;
* or generated before verification.

The interface must distinguish:

* progress;
* intermediate reasoning artifacts;
* candidate findings;
* verified results;
* and committed action.

**Keeper line:**
**Streaming exposes the run’s motion; it does not turn intermediate output into truth.**

---

# W. Human steering needs explicit intervention semantics

The talk mentions interrupting or redirecting the agent.

A governed runtime should record:

* who intervened;
* when;
* what they changed;
* whether the plan changed;
* which prior work remains valid;
* whether tool calls were canceled;
* and which authority the intervention carried.

The human should be able to:

* pause;
* cancel;
* redirect;
* provide evidence;
* reject a candidate;
* constrain scope;
* or escalate.

But a user should not be able to override:

* security policy;
* domain authority;
* consent;
* or mandatory validation

merely through conversational steering.

**Keeper line:**
**Human steering may alter the attempt; it cannot conversationally waive the governing boundary.**

---

# X. Context compaction is a lossy state transition

The source acknowledges that summarization loses information and may cause the agent to lose track of its goal.

This is one of its strongest admissions.

Compaction should therefore not be treated as a transparent token-saving operation.

A compaction event changes the runtime’s operative representation of prior work.

It should preserve:

* mission and completion criteria;
* unresolved obligations;
* decisions;
* rejected alternatives where material;
* source and artifact pointers;
* authority state;
* current owner;
* errors;
* open conflicts;
* pending actions;
* and exact externally changed objects.

The original trace or checkpoint should remain recoverable.

**Keeper line:**
**Compaction may replace active context; it must never silently replace evidence or canonical state.**

---

# Y. Fixed thresholds are heuristics, not doctrine

The source describes compacting at approximately 80–85% context use.

That may be a useful engineering default.

It should not become a universal architectural constant.

Compaction need depends on:

* model context;
* task complexity;
* reserved output needs;
* tool result size;
* safety-critical pending state;
* retrieval ability;
* and the quality of the compactor.

OMNI’s current context-health thresholds are correctly marked for testing rather than canonization.

**Keeper line:**
**Compaction thresholds are runtime policy, not constitutional truth.**

---

# Z. Model-controlled compaction is a powerful but risky experiment

The source describes experimenting with allowing the model to decide when to compact instead of triggering deterministically at a threshold.

The benefit is contextual judgment:

* the model may know when a coherent phase has ended;
* when current context is redundant;
* or when a checkpoint is appropriate.

The risk is that the model may:

* delay too long;
* compact too early;
* omit inconvenient evidence;
* forget unresolved obligations;
* or optimize its own immediate fluency instead of recoverability.

A stronger architecture is hybrid:

* policy defines hard maximums and mandatory preserved fields;
* the model may propose a compaction point;
* a deterministic checkpoint validates required state;
* the original context remains available for audit or rehydration.

**Keeper line:**
**The model may choose when to summarize within policy; it should not decide what the system is allowed to forget.**

---

# AA. Subagents are valuable primarily because they isolate context and responsibility

The source names subagents as assistants that perform work and return reports.

Their key benefits include:

* context isolation;
* parallelism;
* specialized tools;
* bounded tasks;
* and reduced parent-context pressure.

The current OMNI model is correct:

* parent remains accountable;
* child has narrower authority;
* child receives a typed packet;
* child returns a structured result plus evidence;
* output remains a candidate.

**Keeper line:**
**Delegate a bounded obligation with a return contract—not an open-ended piece of the parent’s consciousness.**

---

# AB. Tool and subagent calls share an abstraction but not an authority model

The Q&A makes a useful observation:

* a tool performs a task;
* a subagent also performs a task using its own tools;
* both can appear as callable capabilities to a parent.

That is architecturally useful.

But they differ in uncertainty and behavior.

A deterministic tool may have:

* known arguments;
* known side effects;
* defined output schema;
* and predictable runtime behavior.

A subagent introduces:

* another model;
* another context;
* another plan;
* another set of tool choices;
* and another stochastic trajectory.

The parent runtime should therefore distinguish:

* deterministic capability invocation;
* bounded model capability invocation;
* and delegated agent run.

**Keeper line:**
**A subagent may look like a tool at the interface while carrying a much larger behavioral and evidentiary surface.**

---

# AC. Recursive agent trees require depth, fan-out, and correlation limits

The source discusses recursive or tree-shaped agents and admits they can become slow.

Latency is not the only concern.

Deep trees can create:

* exploding cost;
* unclear accountability;
* duplicated work;
* correlated hallucination;
* circular delegation;
* loss of source lineage;
* difficult cancellation;
* and unreadable traces.

OMNI needs:

* maximum delegation depth;
* fan-out budget;
* cost and time budget;
* cycle detection;
* source-lineage retention;
* parent accountability;
* failure propagation;
* and termination conditions.

**Keeper line:**
**Recursion is an execution strategy, not permission for unbounded organizational depth.**

---

# AD. Parallel subagents do not automatically provide independent evidence

Many subagents may share:

* one model;
* one prompt family;
* one source set;
* one orchestrator;
* and one failure mode.

Parallelizing fifteen agents can improve coverage or exploration.

It does not create fifteen independent witnesses.

OMNI should track model, source, prompt, and orchestration lineage when interpreting apparent consensus.

**Keeper line:**
**Multiplicity increases work capacity; independence must be designed and proven separately.**

---

# AE. Deterministic workflows and deep agents should compose

The source’s best answer in the workflow Q&A is that an architecture may contain:

* deterministic steps;
* one agentic step;
* then more deterministic steps.

That is exactly the right direction.

OMNI should prefer:

* deterministic policy checks;
* deterministic identity and permission;
* deterministic transaction handling;
* deterministic validation where possible;
* agentic interpretation where ambiguity requires it;
* and domain resolution before commitment.

This produces a useful pattern:

> **Deterministic shell, agentic island, governed commit.**

Examples:

* deterministic eligibility → agentic evidence synthesis → clinician resolution;
* deterministic file enumeration → parallel model review → deterministic coverage check;
* deterministic order validation → agentic explanation → authorized order commit;
* deterministic routing → long-horizon research → human adoption.

**Keeper line:**
**Use agency for judgment, not for steps that can be made reliably explicit.**

---

# AF. “More agentic means more useful” is not a general law

The source briefly acknowledges that greater agency may be both:

* more useful;
* and riskier.

This tension must be elevated.

Additional agency can improve performance where the task requires:

* exploration;
* adaptation;
* synthesis;
* planning;
* or recovery from unknown paths.

It can reduce performance where the work requires:

* complete enumeration;
* strict sequence;
* reproducibility;
* fixed compliance checks;
* or transactional correctness.

The appropriate principle remains least-agency:

> **Use the minimum discretionary surface required for the task’s genuine uncertainty.**

**Keeper line:**
**Agency is a budget justified by task uncertainty—not a maturity score.**

---

# AG. Middleware is not merely an escape hatch

The speakers describe custom middleware as the escape hatch for deterministic checks inside agentic loops.

That understates its architectural role.

Middleware can enforce:

* identity;
* policy;
* data classification;
* context filtering;
* tool authorization;
* transaction boundaries;
* trace;
* redaction;
* cost;
* timeouts;
* retries;
* and stop conditions.

In a governed runtime, middleware is part of the control plane.

**Keeper line:**
**Deterministic middleware is how policy survives inside a stochastic loop.**

---

# AH. Long traces require hierarchical observability

The source correctly notes that hundreds of tool calls and long execution times make raw traces difficult to understand.

A useful observability system needs several levels:

1. **Run summary**

   * objective;
   * duration;
   * cost;
   * final status;
   * major findings;
   * external side effects.

2. **Phase view**

   * planning;
   * retrieval;
   * delegation;
   * execution;
   * synthesis;
   * verification.

3. **Finding view**

   * errors;
   * anomalies;
   * policy violations;
   * retries;
   * human interventions.

4. **Full event trace**

   * exact messages;
   * model versions;
   * tool calls;
   * inputs and outputs;
   * checkpoints.

5. **Domain-effect view**

   * what was displayed;
   * adopted;
   * committed;
   * executed;
   * and observed afterward.

**Keeper line:**
**Summarize traces for navigation, but preserve the route back to every material event and world effect.**

---

# AI. AI-generated trace insights are useful diagnostic candidates

LangSmith is adding an AI assistant that can answer questions about:

* individual traces;
* threads;
* failures;
* and aggregate patterns.

That can be valuable at production scale.

It may identify:

* clusters;
* slow paths;
* repeated tool errors;
* unusual prompts;
* and candidate regressions.

But the insight agent may itself:

* overlook rare severe failures;
* overgeneralize;
* misunderstand a trace;
* or present correlation as cause.

Its output should enter as:

* candidate finding;
* with evidence pointers;
* confidence;
* scope;
* and human or deterministic verification where required.

**Keeper line:**
**AI may help interpret the trace estate; it does not become the final authority on what happened.**

---

# AJ. Instrumentation health is load-bearing

The source assumes traces exist.

OMNI must ask:

* Were all events captured?
* Was the tracer active?
* Did the sandbox emit its events?
* Were network calls observable?
* Did the tool bypass the standard wrapper?
* Was the trace truncated?
* Did a provider omit data?
* Did compaction remove material context?

The runtime must distinguish:

* healthy instrumentation;
* degraded instrumentation;
* absent instrumentation;
* and unverifiable execution.

**Keeper line:**
**No observed failure is not evidence of success when observation itself may have failed.**

---

# AK. Model routing should be workload-specific, not personality folklore

Jake describes informal preferences:

* Gemini for image or video work;
* Anthropic for code and SQL;
* OpenAI for expressive writing.

This reflects real jaggedness.

It is not sufficient as production model strategy.

OMNI needs empirical model profiles by:

* workload;
* population;
* language;
* tools;
* context length;
* reliability;
* cost;
* latency;
* privacy;
* and consequence.

A model may be strong in one coding benchmark and weak under OMNI’s tool schemas or healthcare context.

**Keeper line:**
**Route models by measured workload fitness, not brand reputation or anecdotal personality.**

---

# AL. Provider-neutral harnesses are strategically important

The source emphasizes swapping:

* model providers;
* sandbox providers;
* and multimodal services.

This supports OMNI’s replaceability posture.

The harness should preserve stable contracts while implementations change.

But true portability requires more than one API wrapper.

Models differ in:

* tool semantics;
* context behavior;
* multimodal representation;
* safety behavior;
* structured outputs;
* reasoning cost;
* and failure distribution.

A provider change is a versioned platform change requiring evaluation.

**Keeper line:**
**Provider interchangeability is an architectural goal; behavioral equivalence must be proven, not assumed.**

---

# AM. The cost discussion is too casual

The source suggests long-running-agent cost is not preventing adoption and that model competition will continue reducing inference prices.

That may be true for some high-value use cases.

It should not become a planning assumption.

Long-running and recursive systems can generate cost through:

* model calls;
* retries;
* subagent fan-out;
* long contexts;
* sandbox compute;
* storage;
* tracing;
* evaluator calls;
* and human review.

OMNI needs:

* per-run budgets;
* per-phase attribution;
* expected-value thresholds;
* concurrency limits;
* circuit breakers;
* and operator-specific cost policy.

**Keeper line:**
**A valuable agent may justify high cost; it still requires an explicit cost envelope.**

---

# AN. MCP and A2A remain integration standards, not governance

The source observes that MCP may become somewhat less central as agents gain:

* code execution;
* CLI access;
* and programmatic tool calling.

That is plausible.

Standards remain useful for interoperability.

But neither:

* MCP;
* A2A;
* CLI;
* nor code execution

defines:

* identity;
* purpose;
* authority;
* source custody;
* allowed side effects;
* or domain commitment.

These are rails with different ergonomics and risk surfaces.

**Keeper line:**
**Integration syntax may change; the governance wrapper remains mandatory.**

---

# AO. Code execution does not supersede tools

Programmatic code can call services dynamically and compose logic.

Predefined tools still provide:

* narrow contracts;
* controlled arguments;
* explicit authorization;
* stable audit;
* and bounded side effects.

The correct architecture may combine:

* code for local transformation and orchestration;
* typed tools for external effects;
* deterministic services for transactions;
* and agentic interpretation for ambiguity.

**Keeper line:**
**Use code to compose bounded capabilities; do not use code to bypass their boundaries.**

---

# AP. Deep agents fit draft-producing work especially well

The source’s strongest use cases remain:

* research;
* coding;
* analysis;
* and complex artifact generation.

These share a useful property:

* the agent can do extensive work;
* produce an artifact;
* and allow later inspection before commitment.

This is why long-horizon agents currently fit Build-OS unusually well.

They can:

* research;
* compare;
* draft;
* test;
* prepare a pull request;
* or assemble evidence

without directly changing live product or care state.

**Keeper line:**
**Long-horizon autonomy is safest where the primary output is a reviewable artifact rather than an irreversible world change.**

---

# AQ. Long-horizon care agents require a different burden

A research agent working for thirty minutes and a care agent operating across weeks are not merely different run lengths.

Care requires:

* patient identity;
* changing clinical state;
* professional authority;
* consent;
* communication obligations;
* order execution;
* outcome observation;
* and reopening.

OMNI should not directly map the coding-agent harness into care.

A care-facing long-horizon agent may coordinate:

* reminders;
* context assembly;
* unresolved-task tracking;
* evidence gathering;
* and escalation.

It must not retain one unbounded context and quietly become the owner of the care relationship.

**Keeper line:**
**Longitudinal continuity belongs to the care substrate; an agent session is one governed participant in that continuity.**

---

# AR. The source strongly validates controlled handoff and rehydration

Compaction alone is not enough for truly long-running work.

At some point, a run should:

* checkpoint;
* close its current execution context;
* start a fresh context;
* reload canonical state;
* and continue without treating the previous conversation as the database.

This is especially important after:

* context pressure;
* model change;
* long pause;
* human intervention;
* tool failure;
* or authority change.

**Keeper line:**
**The mature long-horizon runtime does not merely keep one context alive; it knows how to stop, preserve, and resume from governed state.**

---

## Where it lands

### Massive

**Agent Runtime & Harness**

* long-horizon runtime profiles;
* execution workspaces;
* planning;
* checkpoints;
* context projection;
* compaction;
* rehydration;
* delegation;
* sandboxes;
* credential leasing;
* streaming;
* intervention;
* trace;
* cost;
* and recovery.

**OMNI Build-OS**

* long-running research and build agents;
* external work packages;
* plans as run-level attempts;
* artifact-oriented outputs;
* deterministic verification;
* controlled handoff;
* pull-request and proof production.

### Major

**Platform Loop**

* harness, prompt, skill, tool, model, middleware, and sandbox changes as versioned artifacts;
* E&V validation;
* runtime instrumentation;
* defect routing;
* release and rollback;
* agent-runtime profile deployment.

**Security / RBAC / Federation**

* workload identity;
* credential leases;
* sandbox isolation;
* data and tenant boundaries;
* per-call authorization;
* network and export controls.

**Knowledge Reservoirs / Context Governance**

* progressive disclosure;
* virtual resource namespaces;
* resource passports;
* source custody;
* context admissibility;
* artifact references;
* memory promotion and forgetting.

### Medium-major

**Reactor**

* risk-sensitive selection of:

  * runtime horizon;
  * sandbox depth;
  * human intervention;
  * delegation;
  * code-execution eligibility;
  * model route;
  * and proof burden.

**Product / Architecture Governance**

* deciding when a deep agent is justified;
* provider and framework replaceability;
* build-versus-buy;
* allowed standards and execution providers.

### Guardrail relevance

**Care**

* no conversation-as-canonical-memory;
* no deep-agent session as clinical truth owner;
* no generated code directly creating care commands;
* no model-controlled forgetting of unresolved clinical obligations;
* no subagent manufacturing clinical authority.

---

## Doctrine / primitive pressure

These require deduplication against the current Agent Runtime and Platform captures.

`long_horizon_runtime_profile`
`execution_workspace`
`workspace_persistence_policy`
`resource_namespace_projection`
`artifact_reference`
`tool_output_artifact`
`plan_state`
`plan_revision_event`
`run_checkpoint`
`run_rehydration_event`
`compaction_event`
`compaction_policy`
`protected_context_state`
`delegation_tree`
`delegation_depth_budget`
`delegation_fanout_budget`
`subagent_result_contract`
`sandbox_profile`
`sandbox_isolation_matrix`
`credential_lease`
`execution_code_artifact`
`code_execution_admission`
`human_intervention_event`
`stream_state`
`instrumentation_health_state`
`trace_summary_projection`
`runtime_cost_envelope`
`provider_route_profile`

Most should extend existing:

* `agent_runtime_profile`;
* `agent_run`;
* `subagent_run`;
* context budget;
* capability envelope;
* change set;
* eval run;
* operational finding;
* resource/evidence identity;
* credential policy;
* rollback;
* and kill switch.

Do not create a separate Deep Agents ontology.

---

## Keeper doctrine

1. **“Deep” describes runtime horizon and machinery, not identity or authority.**

2. **Long-running agents become reliable by externalizing state, artifacts, orchestration, and execution.**

3. **The harness enforces granted authority; it does not originate domain authority.**

4. **The mission governs the run; the plan organizes one attempt.**

5. **Plan revisions that change scope or consequence require explicit lineage.**

6. **Filesystem semantics are an agent-friendly interface, not a universal truth model.**

7. **One navigation interface must preserve the distinct nature of workspace, evidence, memory, skill, and canonical state.**

8. **Reveal progressively by relevance and by authority.**

9. **Large tool outputs should become attributable artifacts with stable references.**

10. **A reference must be stable, authorized, versioned, and replayable.**

11. **Compose access across backends without merging ownership or custody.**

12. **Skills may be prompts, but their operational effects are versioned architecture.**

13. **Shared skills require supply-chain governance.**

14. **Tool descriptions are part of the effective behavioral program.**

15. **Code execution creates a programmable action surface.**

16. **Generated code is a candidate execution artifact subject to admission and proof.**

17. **A sandbox is a matrix of isolation decisions, not one security property.**

18. **Place the smallest necessary execution surface inside the highest-risk boundary.**

19. **Lease narrow credentials; do not deposit reusable secrets into agent environments.**

20. **Persistence is useful state and potential contamination.**

21. **Durable execution means resumable, reconcilable, cancelable, and recoverable.**

22. **Long runs must revalidate context before consequential action.**

23. **Streaming shows provisional progress, not committed truth.**

24. **Human steering can alter execution but cannot waive policy or authority.**

25. **Compaction is lossy and must preserve protected state plus the route back to evidence.**

26. **The model may suggest when to compact; policy decides what may be forgotten.**

27. **Delegation divides bounded work, not accountability.**

28. **A subagent resembles a tool at the call surface but carries a larger behavioral risk surface.**

29. **Recursive delegation requires depth, fan-out, cost, cycle, and termination controls.**

30. **Parallel agents do not automatically provide independent evidence.**

31. **Prefer deterministic shells around bounded agentic islands.**

32. **Use agency for genuine uncertainty, not for steps that can be made reliably explicit.**

33. **Deterministic middleware keeps policy alive inside stochastic execution.**

34. **Trace summaries aid navigation; full material events and world effects must remain recoverable.**

35. **AI-generated trace insights are diagnostic candidates, not authoritative findings.**

36. **Missing or degraded instrumentation creates uncertainty.**

37. **Route models by measured workload fitness rather than provider folklore.**

38. **Provider portability does not prove behavioral equivalence.**

39. **Every long-running capability needs an explicit cost and resource envelope.**

40. **Integration standards and CLIs are rails, never governance.**

41. **Use code to compose bounded capabilities, not to bypass their boundaries.**

42. **Long-horizon autonomy is safest when it produces a reviewable artifact before commitment.**

43. **Longitudinal care continuity belongs to the care substrate, not one immortal agent context.**

44. **A mature runtime knows how to stop, checkpoint, rehydrate, and continue from canonical state.**

---

## What not to import blindly

### Do not create a new “deep agent” class of authority

A long-running agent remains a governed capability under the same domain and principal laws.

### Do not make one filesystem the canonical substrate for all data

Filesystem-style access may project many stores.

The stores retain their own ownership, lifecycle, and transaction semantics.

### Do not treat the runtime workspace as memory or truth

Scratch files and intermediate artifacts remain run state until deliberately promoted.

### Do not trust references without pinning or provenance

A path can resolve differently tomorrow.

### Do not mount every useful backend into one ambient namespace

Discovery and access must remain purpose-, actor-, tenant-, and patient-scoped.

### Do not accept that skills are harmless because they are text

Text can alter tool use, source selection, escalation, and side effects.

### Do not import public skills directly into consequential agents

Treat them like untrusted software dependencies.

### Do not permit generated code broad network and secret access

Code generation plus reusable credentials is an exfiltration architecture.

### Do not equate sandboxing with safety

The sandbox may isolate compute while still exposing data, network, secrets, or powerful tools.

### Do not reuse sandboxes across users or operators without explicit isolation proof

Residual state creates cross-run and cross-principal risk.

### Do not rely on one immortal long-running process

Persist governed state and support restart, migration, cancellation, and recovery.

### Do not assume the context from run start is still valid at action time

Refresh or revalidate when the world may have changed.

### Do not treat streaming text as settled result

Intermediate statements may be incomplete or wrong.

### Do not let human intervention become untracked prompt mutation

Intervention is a runtime event with identity and consequence.

### Do not allow model-controlled compaction to erase unresolved work

The model cannot be the sole arbiter of what matters for future accountability.

### Do not let subagents inherit the parent’s entire context and tool set by default

Delegation should narrow exposure.

### Do not confuse consensus among correlated agents with independent verification

Shared lineage creates shared failure.

### Do not use nested agents where a loop, query, workflow, or deterministic program provides stronger coverage

Agent depth should solve a real uncertainty problem.

### Do not treat deterministic middleware as an embarrassing legacy escape hatch

It is often the correct place for identity, policy, validation, and transactions.

### Do not let trace summaries replace raw execution evidence

Summaries can omit precisely the anomaly under investigation.

### Do not let the observability assistant become incident authority

It proposes findings; owners investigate and resolve them.

### Do not hardwire anecdotal provider strengths

Model behavior changes rapidly and must be tested against OMNI workloads.

### Do not assume inference cost will cease to matter

Fan-out, retries, context, and evaluator calls can turn cheap components into expensive systems.

### Do not treat MCP, A2A, CLI, code execution, or skills as competing constitutional choices

They are composable implementation rails with different risk surfaces.

### Do not let “give the model more power” become an optimization target

Power must be justified by task need and bounded by consequence.

### Do not carry coding-agent assumptions directly into patient care

Care has distinct authority, temporality, rights, and outcome obligations.

---

## Do-not-miss lesson

**Deep Agents demonstrates that the path to capable long-horizon systems is not an ever-larger prompt. It is a runtime that externalizes plans, files, artifacts, skills, delegated work, execution, checkpoints, and traces. OMNI’s job is to ensure that each externalized surface carries the identity, custody, authority, lifecycle, isolation, and proof that the generic harness leaves unspecified.**

---

## Lightweight tiering

| Concept                                       | stale-vs-current OMNI            |             weight tier | status                       |
| --------------------------------------------- | -------------------------------- | ----------------------: | ---------------------------- |
| Deep agent as long-horizon runtime profile    | `PARTIAL / strong sharpening`    |           Agent Runtime | promote                      |
| Harness around model/tool loop                | `AFFIRM`                         |                   spine | promote                      |
| Planning tool / external plan state           | `PARTIAL`                        |                 runtime | promote                      |
| Filesystem as context-engineering interface   | `AFFIRM / sharpened`             |                 runtime | promote                      |
| Filesystem as canonical memory                | `direct conflict`                |               guardrail | reject                       |
| Tool-output offloading to artifacts           | `PARTIAL`                        |      runtime / evidence | promote                      |
| Composite backend projection                  | `PARTIAL`                        |            architecture | promote with custody rules   |
| Skills as progressively disclosed prompts     | `AFFIRM`                         |                 runtime | retain                       |
| Skills as harmless text                       | `direct conflict`                |               guardrail | reject                       |
| Shared skill ecosystem                        | `PARTIAL`                        | Build-OS / supply chain | investigate                  |
| Code execution for non-coding work            | `PARTIAL`                        |         capability rail | promote with hard controls   |
| Generated code as ungoverned runtime behavior | `direct conflict`                |               guardrail | reject                       |
| Multidimensional sandbox profile              | `PARTIAL / important sharpening` |        security/runtime | promote                      |
| Whole-agent vs tool-only sandbox topology     | `PARTIAL`                        |          implementation | investigate                  |
| Short-lived brokered credentials              | `AFFIRM / sharpened`             |                security | promote                      |
| Durable long-running execution                | `AFFIRM / sharpened`             |                 runtime | promote                      |
| Streaming + intervention                      | `PARTIAL`                        |         runtime/product | promote                      |
| Automatic context compaction                  | `AFFIRM`                         |                 runtime | promote with protected state |
| Model-selected compaction timing              | `potentially useful`             |              experiment | watch                        |
| Model-selected forgetting                     | `direct conflict`                |               guardrail | reject                       |
| Subagents for context isolation               | `AFFIRM`                         |                 runtime | promote                      |
| Recursive subagent trees                      | `contextual`                     |                 runtime | constrain                    |
| Parallel agents as independent evidence       | `direct conflict`                |               guardrail | reject                       |
| Deterministic shell + agentic step            | `AFFIRM / strong sharpening`     |                   spine | promote                      |
| “Deep agents replace workflows”               | `unsupported`                    |                   no-op | reject                       |
| AI-assisted trace analysis                    | `PARTIAL`                        |             runtime ops | promote as candidate finding |
| Model-provider agnosticism                    | `AFFIRM`                         |                strategy | promote                      |
| Provider behavioral equivalence               | `unsupported`                    |               guardrail | reject                       |
| Cost is no longer a blocker                   | `unsupported / contextual`       |                   no-op | reject                       |
| MCP/A2A/skills/CLI as replaceable rails       | `AFFIRM`                         |          implementation | retain                       |
| More power always improves the model          | `direct tension`                 |               guardrail | reject                       |
| Least-agency architecture                     | `AFFIRM / strengthened`          |                   spine | promote                      |

---

## 5. Hard read

**Verdict:** `full_semantic`, 4.75/5.

This is the strongest Deep Agents source currently in the corpus.

It substantially exceeds the earlier course primer because it exposes the actual engineering tensions:

* filesystems versus canonical state;
* context offloading versus referential integrity;
* shared skills versus supply-chain risk;
* sandbox containment versus credential placement;
* whole-agent versus tool-only isolation;
* long-running execution versus stale context;
* compaction versus information loss;
* model-controlled behavior versus deterministic policy;
* subagent flexibility versus recursive cost and opacity;
* and agentic systems versus deterministic workflows.

The source is especially valuable because the speakers occasionally reveal where the product story is not settled:

* compaction policy remains experimental;
* sandbox topology has unresolved trade-offs;
* recursive agent trees remain slow and difficult;
* MCP’s role is evolving;
* and more agentic systems may also be riskier.

Those admissions are more architecturally valuable than the polished product claims.

OMNI’s current Agent Runtime is directionally correct and, in governance terms, ahead of the source. It already separates:

* stable agent identity;
* runtime passport;
* sessions and runs;
* context health;
* skills;
* tools;
* delegated children;
* memory;
* steering;
* tracing;
* resilience;
* and domain commitment.

This source pressures the next layer of depth:

* explicit execution-workspace classes;
* artifactized tool outputs;
* compaction events;
* run checkpoints and rehydration;
* sandbox isolation matrices;
* credential leases;
* generated-code admission;
* and deterministic-shell / agentic-island composition.

The source’s most dangerous line is the idea that giving the model more power makes it perform better.

The correct OMNI conclusion is narrower:

> **Give the runtime enough capability to solve the admitted task, then use architecture—not hope—to prevent that capability from becoming ambient authority.**

**Strongest OMNI line:**

> **Externalize everything the model should not be trusted to remember or govern alone—but preserve the authority, custody, and proof of every thing you externalize.**


&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

Okay! always a surprise what we'll get witht he stanford lectures!

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-19` (re-process; see §5) · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

### Review 003 — Opus formal deep extraction · `EVSRC-2026-000290` (LangChain *Deep Agents Explained*, Sydney Runkle + Jake Broekhuizen)

#### 0. Method note
Read §1 transcript IN FULL (0:00–42:50) + §3 Review 001 (Knox, sections A–AR + tiering + hard read) IN FULL, then formalized — did **not** re-derive. This is the **deepest single Deep Agents source in the corpus** (Knox 4.75/5) and a direct expansion of the wave-4 harness cluster (256 harness-as-substrate · 257 Deep Agents promo · 258/259/260 runtime governance · 267 capability composition) + wave-3 231/241/246 + wave-5 272 observability/nesting. Dedup baseline read: wave-6 registry `EVRUN-2026-000011` §2/§3 (sources 282–286, 0 net-new) + wave-4/wave-5 registries + cumulative `000001 §2A` framing. **Posture: PROPOSE-ONLY (`GRD-036`/`GRD-044`)** — extract/dedup/route/prove-fidelity; nothing promoted, no domain object minted, no contract/thesis/registry edited. Verdict up front, consistent with Knox and with waves 4/5/6-batch: **0 net-new domain objects; dominant reality-check = `doctrine=AFFIRM/PARTIAL × build=absent/partial`.** The value is *sharpening depth* on the Agent Runtime & Harness map (map-depth only — the runtime is NOT to be built pre-spine) + a dense guardrail/counterweight yield. Fidelity note: Knox's read is faithful to the transcript and, where it goes further, it *adds OMNI governance* that the vendor talk leaves unspecified (Knox flags this himself). No inversions introduced. Canonical id verified from transcript + Knox metadata = `EVSRC-2026-000290` (topic: LangChain Deep Agents harness); firmed-slug SUGGESTION `langchain-deep-agents-harness-explained`.

#### 1. Concept cluster table
Axes: `homes` = downstream landing · `anchor` = verbatim ≤12w + ts · `doctrine × build` = stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) × repo build_status (absent/partial/present) · `weight` = spine / vocabulary / low-auth-watch / no-op · `status` = promote / retain / watch / constrain / reject. All AFFIRM/PARTIAL against the **existing** Agent Runtime & Harness map (map-depth only).

| # | concept | OMNI meaning | homes | anchor (≤12w + ts) | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| 1 | "Deep agent" = runtime profile, not a species | "Deep" describes run horizon/machinery, not a new identity/authority root; it is a class of `agent_runtime_profile` | Agent Runtime; §B | "batteries included harness…complex and longrunning tasks" 1:33 | AFFIRM(sharpen) × absent | vocabulary | promote(sharpen) |
| 2 | Harness = where model possibility becomes system behavior | Harness enforces granted authority; it must **not invent** domain authority (harness operationalizes, does not originate — W4-T1) | Agent Runtime spine; CNS | "surrounding support…core model and tool calling loop" 1:59 | AFFIRM × absent | spine | promote |
| 3 | Planning tool externalizes work state | Plan = inspectable/versioned run-level *attempt*; the mission/work-package governs, the plan does not self-authorize | Agent Runtime; Build-OS | "planning tool…keep track of the work" 4:04 | PARTIAL × absent | vocabulary | promote |
| 4 | Plan revision needs lineage | A revision that changes scope/authority/consequence = a **governed transition**, not ordinary model reasoning (candidate≠commit) | Agent Runtime; Build-OS | "keep track of the work they're doing" 4:04 (extends) | PARTIAL × absent | vocabulary | promote(→investigate) |
| 5 | Filesystem = agent interaction grammar | Navigable, progressively-disclosed resource namespace w/ stable ops — **not** a universal truth-storage architecture | Agent Runtime; Knowledge Reservoirs | "File systems…key to context engineering" 6:28 | AFFIRM(sharpen) × absent | vocabulary | retain |
| 6 | Runtime workspace ≠ canonical memory | One nav interface may expose 6 distinct state classes (ephemeral workspace / run checkpoint / domain truth / evidence reservoir / skill catalog / memory) — must not become one storage class | Agent Runtime; Clinical Memory; one-owner-per-fact | "offload information…don't want to squeeze into the prompt" 6:33 | AFFIRM × partial | spine | promote |
| 7 | Progressive disclosure = context governance | Reveal by **relevance AND authority**; even a descriptor/existence can be restricted | Agent Runtime; RBAC; disclosure-policy | "practice…progressive disclosure" 6:39 | AFFIRM(sharpen) × partial | vocabulary | promote |
| 8 | Large tool results → governed artifacts | Externalize as an *attributable* artifact (identity/provenance/hash/scope/retention), not an anonymous file + lossy summary | Agent Runtime; artifact-pipeline; Knowledge Reservoirs | "offload large tool calls" 8:37 | PARTIAL × partial | vocabulary | promote |
| 9 | References introduce referential failure | A small reference is safe only when what it resolves to is pinned/authorized/versioned/replayable | Agent Runtime; evidence identity | "storing a reference to where that context lives" 10:09 | PARTIAL × absent | vocabulary | promote |
| 10 | Composite backends = federated projection | Compose **access**, not ownership/custody; mounted sources keep owner/tenant/privacy/freshness/txn semantics | §C(paused); Federation; projection≠authority | "composite backend option…combine…singular back end" 11:34 | PARTIAL × absent | vocabulary | promote(custody rules) |
| 11 | Skills = prompts, but operationally architectural | Keep build-skill vs product-skill vs product-capability distinct; a skill's *effect* can be architecture (sources/checks/escalation/tools) | Agent Runtime; Foundry; Build-OS | "skills are just prompts…easy to share" 12:00 | AFFIRM × absent | vocabulary | retain |
| 12 | Shared skills = software-supply-chain problem | Treat a shared skill like a dependency (provenance/signature/pin/review/recall); a skill hub ≠ automatically safe | Build-OS supply-chain; Foundry; security | "share this folder with my co-orker" 13:20 | PARTIAL × absent | low-auth-watch | investigate |
| 13 | Tool descriptions = behavior-shaping code | Tool schema/docstring/argtypes are effective prompt; material changes are versioned runtime changes subject to E&V | Agent Runtime; Platform Loop | "tool…descriptions also go into the prompt" 28:40 | AFFIRM × partial | vocabulary | promote |
| 14 | Code execution = caller → local programmer | A programmable action surface (not a bounded tool menu); huge capability + huge risk (files/network/exfil/resource/state) | Agent Runtime; Reactor; security | "agents that write code and sandboxes are the key" 15:45 | PARTIAL × absent | vocabulary | promote(hard controls) |
| 15 | Generated code = candidate execution artifact | Runtime decides *whether/how* it runs (static analysis/policy/dry-run/read-only/test) — candidate≠commit + independent-completion-verification (259) | Agent Runtime; Build-OS; Reactor | "executing code in sandboxes or ripples" 16:25 | AFFIRM × absent | vocabulary | promote |
| 16 | Sandbox = multidimensional isolation matrix | "In a sandbox" underspecifies; needs an explicit isolation matrix (principal/tenant/subject/fs/net/tool/secret/pkg/compute/time/persistence/export/monitoring) | security; Agent Runtime | "sandboxing…getting oversimplified. What…are we isolating" 34:12 | PARTIAL(sharpen) × absent | vocabulary | promote(→investigate) |
| 17 | Whole-agent vs tool-only sandbox topology | A real architecture decision (containment vs credential exposure vs latency); OMNI supports multiple topologies selected by consequence | security; Agent Runtime; Reactor | "run the entire agent in a sandbox or…execute tool calls" 37:09 | PARTIAL × absent | low-auth-watch | investigate |
| 18 | Secrets leased, not deposited | Workload identity + short-lived brokered creds per action; never a reusable master secret in the agent env | security; RBAC; requireCapability | "you're now giving it sensitive API keys" 35:28 | AFFIRM(sharpen) × partial | vocabulary | promote |
| 19 | Sandbox reuse must match isolation boundary | Persistence = useful state **and** contamination risk; declare ownership/reset/cleanup-proof/cross-run reuse | security; Agent Runtime | "unique to every user conversation?…across a team across an org" 36:44 | PARTIAL × absent | vocabulary | promote |
| 20 | Durable execution = resumable + reconcilable | Not "immortal process" — persisted run id/checkpoint/plan/authority/leases/cancel/resume/compensation/terminal-status | Agent Runtime; Build-OS | "durable execution…roll back to previous steps" 19:27 | AFFIRM(sharpen) × absent | vocabulary | promote |
| 21 | Time changes context validity | The longer the run, the more likely start-context ≠ current authority; pin/refresh/**revalidate before consequential action** (REV-184 outcome-reads-frozen-context / trust_horizon) | Agent Runtime; REV-184; Care | "longunning agents…running for extended periods" 19:56 | AFFIRM × absent | spine | promote |
| 22 | Streaming exposes motion, not truth | Distinguish progress / intermediate reasoning / candidate finding / verified result / committed action (projection≠authority) | Agent Runtime; product; UX-surfaces | "treat streaming as a first class primitive" 20:14 | PARTIAL × absent | vocabulary | promote |
| 23 | Human steering = typed intervention event | Intervention has identity/consequence; may alter the attempt but **cannot conversationally waive** security/domain authority/consent/validation (P35) | Agent Runtime; RBAC; CNS | "interrupt and intervene and…redirect your agent" 20:20 | PARTIAL × absent | vocabulary | promote |
| 24 | Compaction = lossy state transition | Must preserve protected state (mission/obligations/decisions/pointers/authority/conflicts) + the route back to evidence; never silently replace canonical state | Agent Runtime; Checkpoint Rule; 284 typed-compaction | "when you summarize you inherently lose information" 9:50 | AFFIRM × absent | spine | promote(protected state) |
| 25 | Fixed thresholds = heuristics not doctrine | 80–85% compaction = engineering default, **not** a constitutional constant; OMNI context-health thresholds are correctly marked for testing | Agent Runtime; context-health | "80% of your window…then you squish back down" 5:21 | AFFIRM × absent | low-auth-watch | watch |
| 26 | Model-controlled compaction = risky experiment | Hybrid only: policy sets hard maxima + mandatory preserved fields; model may *propose* when, never decide *what may be forgotten* | Agent Runtime; future-watch | "power to control when it summarizes" 26:55 | watch × absent | low-auth-watch | watch |
| 27 | Subagents isolate context + responsibility | Parent stays accountable; child gets a typed packet + narrower authority + returns a structured **candidate** result | Agent Runtime; typed-delegation | "assistants that can go off and do work…come back with…report" 4:18 | AFFIRM × absent | vocabulary | retain |
| 28 | Tool vs subagent: shared interface, not authority | A subagent looks like a tool at the call surface but carries a far larger behavioral/evidentiary surface (call hierarchy ≠ delegation authority — 272) | Agent Runtime; observability | "model calling a tool…same abstraction…applied to…sub agent" 31:49 | AFFIRM × absent | vocabulary | promote |
| 29 | Recursive agent trees need bounds | Depth/fan-out/cost/cycle/lineage/termination controls; recursion = execution strategy, not permission for unbounded org depth | Agent Runtime; Reactor | "sub agents all the way down…struggle from a latency perspective" 30:38 | PARTIAL × absent | vocabulary | constrain |
| 30 | Parallel subagents ≠ independent evidence | Multiplicity = work capacity; independence must be designed+proven (shared model/prompt/source/orchestrator = shared failure) — multiplicity law (wave-5/284) | Agent Runtime; Prove/Learn; guardrail | "tree of an agent that has sub agents…quite a mess" 29:09 | AFFIRM × absent | guardrail | retain |
| 31 | Deterministic shell + agentic island + governed commit | Deterministic policy/identity/txn/validation around a bounded agentic step, then owning-domain commit — the composition pattern | Build-OS; CNS; Reactor | "deterministic compliance steps before you run some agentic task" 39:41 | AFFIRM(strong sharpen) × partial | spine | promote |
| 32 | Least-agency (vs "more power = better") | Agency is a **budget justified by task uncertainty**, not a maturity score; use the minimum discretionary surface the work truly needs | thesis §B; Reactor; guardrail | "the more power you give…the better it's going to do" 26:44 | AFFIRM(strengthen) × n/a | spine | promote |
| 33 | Middleware = control plane, not escape hatch | Deterministic middleware is *how policy survives inside a stochastic loop* (identity/policy/classification/authz/txn/redaction/cost/stop) — governance-outside-the-loop (259) | Agent Runtime; CNS; Platform Loop | "custom middleware…escape hatch for…deterministic logic" 39:53 | AFFIRM × partial | vocabulary | promote |
| 34 | Long traces → hierarchical observability | 5 tiers (run/phase/finding/full-event/domain-effect); summarize for navigation but preserve route back to every material event + world effect (session-lineage 272; trace≠proof) | Platform Loop; observability | "hundreds of tool calls…hard to…reason about" 21:46 | PARTIAL × partial | vocabulary | promote |
| 35 | AI trace insights = candidate findings | The observability assistant proposes findings w/ evidence+confidence+scope; it is **not** incident authority (candidate≠commit; cf. chart_ai_reviews) | Platform Loop; Accountability Loop | "building AI insights into our observability platform" 22:34 | PARTIAL × partial | vocabulary | promote(candidate) |
| 36 | Instrumentation health is load-bearing | Distinguish healthy/degraded/absent/unverifiable instrumentation; "no observed failure" ≠ success when observation may have failed | Platform Loop; Prove/Learn | "hard to debug and…understand traces" 20:37 | PARTIAL × absent | vocabulary | promote |
| 37 | Model routing = workload fitness, not folklore | Route by measured workload/population/tools/context/consequence, not brand-personality anecdote (benchmark≠workload-fitness — 284) | §B; model gateway; Reactor | "Gemini for image…Anthropic for…SQL…OpenAI…writing" 25:06 | AFFIRM × absent | vocabulary | promote |
| 38 | Provider-neutral harness; equivalence ≠ assumed | GRD-033 replaceability affirmed; a provider swap is a **versioned platform change requiring evaluation** (behavioral equivalence proven, not assumed) | §B; GRD-033; Platform Loop | "model and provider agnostic solutions" 17:31 | AFFIRM × absent | vocabulary | promote |
| 39 | Cost = explicit envelope, not "no longer a blocker" | Fan-out/retries/context/sandbox/tracing/evaluator/human-review compound; needs per-run budget/attribution/circuit-breaker/operator policy | Platform Loop; Reactor; ops | "main cost comes from the model calls" 35:04 | PARTIAL × absent | low-auth-watch | promote |
| 40 | MCP/A2A/CLI/code-exec = rails, not governance | Integration syntax may change; the governance wrapper (identity/purpose/authority/custody/side-effects/commit) is mandatory — composable rails, not competing constitutional choices | §C(paused); GRD-033; Federation | "MCP…maybe a little bit less relevant" 41:45 | AFFIRM × partial | vocabulary | retain |
| 41 | Code execution does not supersede tools | Use code to *compose* bounded capabilities; typed tools keep narrow contracts/authz/audit/bounded side-effects for external effects | Agent Runtime; capability-topology | "break a problem down…resolvable by code" 16:50 | AFFIRM × absent | vocabulary | retain |
| 42 | Deep agents fit draft-producing work → Build-OS | Long-horizon autonomy is safest where the output is a **reviewable artifact** before commitment (research/analysis/PR/evidence) | Build-OS; Reactor | "put the complexity in the prompt…off to the races" 23:47 | AFFIRM × partial | vocabulary | promote |
| 43 | Long-horizon **care** agents = different burden | Longitudinal continuity belongs to the care substrate; an agent session is one governed participant, never the owner of the care relationship (AI never care authority) | Care; thesis §B; CNS | "give the agent more power…maybe…riskier" 39:31 (care extends) | AFFIRM × absent | spine | promote(guardrail) |
| 44 | Controlled handoff + rehydration | Mature runtime knows how to stop/checkpoint/reload canonical state/continue — does not treat the prior conversation as the database (Checkpoint Preservation Rule) | Agent Runtime; Build-OS; Protocol §8 | "durable execution…roll back to previous steps" 19:27 (extends) | AFFIRM × absent | spine | promote |

#### 2. Net-new primitive dispositions
Knox's "Doctrine / primitive pressure" list = **28 named candidates** (Knox itself pre-flags "Most should extend existing… Do not create a separate Deep Agents ontology"). Every candidate dispositioned below. **Genuine net-new DOMAIN objects = 0** (consistent with waves 4/5 and the wave-6 282–286 batch). Retired terms (`EVRUN-000004 §0.5`) and `D0OL-GRD-001..008` NOT re-minted.

**EXISTS-AS (dedup / sharpening of existing canon) — 24:**
1. `long_horizon_runtime_profile` → EXISTS-AS `agent_runtime_profile` (wave-4 256/257/059) — horizon is a profile attribute, not an object.
2. `execution_workspace` → EXISTS-AS runtime-workspace / "conversation is execution context, not canonical memory" + context-offload≠durable-memory (wave-4 243/262/266); sharpening = the 6 workspace state classes (see #6).
3. `workspace_persistence_policy` → EXISTS-AS sandbox reuse/retention posture (#19) + retention/lifecycle.
4. `resource_namespace_projection` → EXISTS-AS projection≠authority + composite-backend (wave-4) + progressive disclosure.
5. `artifact_reference` → EXISTS-AS artifact-pipeline (repo) + resource/evidence identity + reference pinning (#9).
6. `tool_output_artifact` → EXISTS-AS artifact + context-offload (#8).
7. `plan_state` → EXISTS-AS agent plan / work-package + `/goal` declared objective+acceptance criteria (wave-4 258).
8. `run_checkpoint` → EXISTS-AS Checkpoint Preservation Rule (Agent Work Protocol §8) + `agent_run`.
9. `run_rehydration_event` → EXISTS-AS controlled handoff/rehydration (Checkpoint Rule; #44).
10. `compaction_event` → EXISTS-AS context-health + typed-compaction-protects-state (wave-6 284); sharpening = lossy-transition semantics (#24).
11. `compaction_policy` → EXISTS-AS context-health thresholds (marked for testing; #25).
12. `protected_context_state` → EXISTS-AS Checkpoint Preservation Rule preserved-field set + typed-compaction-protects-state (284). **Strong sharpening**, still not a net-new object.
13. `delegation_tree` → EXISTS-AS `subagent_run` + nesting≠delegation (272).
14. `subagent_result_contract` → EXISTS-AS typed-delegation packet + candidate return (wave-4/wave-5).
15. `sandbox_profile` → EXISTS-AS sandbox≠governance (259) + runtime-governance; sharpening = isolation matrix (#16).
16. `credential_lease` → EXISTS-AS requireCapability (repo) + short-lived brokered creds + `capability_envelope`; sharpening (#18).
17. `execution_code_artifact` → EXISTS-AS candidate≠commit + generated-code-as-candidate + independent-completion-verification (259).
18. `code_execution_admission` → EXISTS-AS three-gate discoverable≠invokable≠committable (267) + typed-action-approval keyed-to-risk (259).
19. `human_intervention_event` → EXISTS-AS steering + P35 human-confirmed-command; sharpening = typed intervention event (#23).
20. `stream_state` → EXISTS-AS streaming projection + projection≠authority (#22).
21. `instrumentation_health_state` → EXISTS-AS instrumentation-health (wave-4 260) + partial-trace completeness/finalization (272).
22. `trace_summary_projection` → EXISTS-AS projection≠authority + session-lineage tiers (272) + trace≠proof (wave-4).
23. `provider_route_profile` → EXISTS-AS model-routing benchmark≠workload-fitness (284) + GRD-033.
24. `runtime_cost_envelope` → EXISTS-AS cost/compute-not-fungible (wave-4 255) + capability envelope; sharpening = per-run cost envelope (#39). (Knox's tail list — `agent_run` / context budget / change set / eval run / operational finding / resource identity / credential policy / rollback / kill switch — all EXISTS, folded here.)

**INVESTIGATE-lane (route to owning-home watch; NOT minted, per 282–286 discipline) — 4:**
- `sandbox_isolation_matrix` — the multidimensional sandbox profile (#16). Genuinely useful sharpening. Route: **security + Agent Runtime watch** (map-depth only). Convergent with wave-6 285 `certified_variation_envelope` framing (bounded profile a compiler/admission diffs against).
- `sandbox_topology_choice` (whole-agent vs tool-only, #17) — Route: **security/implementation watch**; selected by consequence (Reactor pressure). Cross-ref Harrison Chase sandbox-paradigms blog (reread flag).
- `plan_revision_event` / plan-transition lineage (#4) — Route: **Agent Runtime + Build-OS watch**; a scope/authority/consequence-changing revision = governed transition (candidate≠commit).
- `delegation_depth_budget` / `delegation_fanout_budget` (recursion-control envelope, #29) — Route: **Agent Runtime watch**; constraint-object candidate, not a domain object.

**REJECT-as-primitive — 0** (no candidate proposed a new domain root; the vendor's implicit "deep agent ontology" is rejected at the *doctrine* level — see #1 and Counterweight C1 — not as a minted-then-rejected primitive).

**Count:** 28 candidates → **0 net-new domain objects · 24 EXISTS-AS (dedup/sharpening) · 4 investigate-lane (routed, not minted) · 0 reject-as-primitive.**

#### 3. Counterweights (EVERY caution preserved — never inverted)
Knox's "What not to import blindly" (25) + tiering-table rejects + hard-read admissions, preserved verbatim-in-spirit. None inverted; each is a *keeper caution*, not a claim OMNI endorses.

**"Do not import blindly" (25, all preserved):**
C1 no new "deep agent" class of authority · C2 no single filesystem as canonical substrate for all data · C3 runtime workspace ≠ memory/truth · C4 no references without pinning/provenance · C5 no mounting every backend into one ambient namespace · C6 skills are not harmless because they are text · C7 no importing public skills directly into consequential agents · C8 no broad network+secret access for generated code · C9 sandboxing ≠ safety · C10 no cross-user/operator sandbox reuse without isolation proof · C11 no reliance on one immortal long-running process · C12 do not assume start-context is valid at action time · C13 streaming text ≠ settled result · C14 human intervention must not become untracked prompt mutation · C15 model-controlled compaction must not erase unresolved work · C16 subagents must not inherit the parent's full context/tools by default · C17 consensus among correlated agents ≠ independent verification · C18 no nested agents where a loop/query/workflow/deterministic program is stronger · C19 deterministic middleware is not an embarrassing legacy escape hatch · C20 trace summaries must not replace raw execution evidence · C21 the observability assistant must not become incident authority · C22 no hardwiring anecdotal provider strengths · C23 do not assume inference cost stops mattering · C24 MCP/A2A/CLI/code-exec/skills are not competing constitutional choices · C25 do not carry coding-agent assumptions directly into patient care.

**Tiering-table rejects (preserved as rejects):** filesystem-as-canonical-memory (`direct conflict` → reject) · skills-as-harmless-text (reject) · generated-code-as-ungoverned-runtime-behavior (reject) · model-selected-forgetting (reject) · parallel-agents-as-independent-evidence (reject) · "deep agents replace workflows" (`unsupported` → reject) · provider-behavioral-equivalence (reject) · "cost is no longer a blocker" (reject) · "more power always improves the model" (`direct tension` → reject as a law).

**Hard-read admissions (preserved as the durable value — vendor's own unsettled points):** compaction policy is experimental ("we're very researchy with the harness still" 27:08) · sandbox topology unresolved ("market…hasn't landed on a clear use" 37:56) · recursive trees "very effective but very slow" (31:04) · MCP's role evolving (41:45) · "more agentic…maybe…riskier" (39:31). These admissions outrank the polished product claims.

**Master counterweight (do-not-miss):** every increase in operational power must be paired with narrower admissibility, stronger isolation, more explicit authority, better proof, and a reliable stop path — externalize everything the model shouldn't be trusted to remember/govern alone, **but preserve the authority, custody, provenance, lifecycle, and proof of every externalized thing.**

#### 4. Care implications
- Care is the center of gravity and the sharpest divergence from the coding-agent frame (#43, C25, Knox AQ). A research agent (30 min) and a care agent (weeks) differ in *kind*, not just run length: patient identity, changing clinical state, professional authority, consent, communication obligations, order execution, outcome observation, reopening.
- **AI never care authority:** a care-facing long-horizon agent may coordinate reminders / context assembly / unresolved-task tracking / evidence gathering / escalation — it must **not** retain one unbounded context and quietly become the owner of the care relationship (longitudinal continuity belongs to the care substrate).
- Care-specific guardrail cluster (Knox, preserved): no conversation-as-canonical-clinical-memory · no deep-agent session as clinical-truth owner · no generated code directly creating care commands · no model-controlled forgetting of unresolved clinical obligations · no subagent manufacturing clinical authority.
- **REV-184 tie-in (#21):** in care, "time changes context validity" is load-bearing — a long-running care agent must revalidate frozen context against current patient/clinical state before any consequential action; outcome reads frozen context, commit reads live authority.

#### 5. Guardrail candidates → route `08` open-review → `06` digest (PROPOSE-ONLY; `user_knox_required`; deduped vs `D0OL-GRD-001..008` + wave-6 §5.1)
1. **"Deep"/long-horizon is a runtime posture, never a new class of authority; a long-running agent remains a governed capability under the same domain+principal law** (C1; dedup vs capability_envelope≠delegated_authority_envelope).
2. **One navigation interface may expose many stores; it must never collapse workspace / evidence / memory / skill / canonical-domain state into one storage class or one authority level** (C2/C3; dedup vs one-owner-per-fact + "conversation ≠ canonical memory").
3. **A reference/handle is safe only when what it resolves to is pinned, authorized, versioned, and replayable** (C4).
4. **Compose access across backends without merging ownership/custody; discovery+access stay purpose/actor/tenant/patient-scoped** (C5; dedup vs projection≠authority + wave-6 §5.1 #16).
5. **Reusable procedural intelligence (skills) needs supply-chain governance; a shared/public skill is an untrusted dependency, not harmless text** (C6/C7; dedup vs wave-6 §5.1 #14 documents-don't-self-author-skills).
6. **Code execution + reusable credentials in one environment is an exfiltration architecture; lease narrow revocable capabilities per action, never deposit master secrets** (C8; dedup vs requireCapability + §5.1 #15).
7. **Sandboxing ≠ safety; declare the isolation matrix + reuse/persistence boundary; no cross-user/operator reuse without isolation proof** (C9/C10).
8. **Do not rely on one immortal process; a durable agent is resumable/reconcilable/cancelable/recoverable from governed state** (C11).
9. **Long runs must revalidate context before consequential action; start-context is not standing authority** (C12; dedup vs REV-184 trust_horizon).
10. **Streaming/intermediate output is provisional, not committed truth** (C13; dedup vs projection≠authority).
11. **Human steering may alter the attempt but cannot conversationally waive security/domain authority/consent/mandatory validation** (C14; dedup vs P35).
12. **Compaction is lossy: it may replace active context but must never silently replace evidence or canonical state; the model may propose *when* to compact, policy decides *what* may be forgotten** (C15; dedup vs Checkpoint Preservation Rule + 284 typed-compaction).
13. **Subagents must not inherit the parent's full context/tools by default; delegation narrows exposure** (C16).
14. **Consensus among correlated agents ≠ independent verification (multiplicity law)** (C17; dedup vs wave-5 multiplicity + §5.1 #9).
15. **Use the least-agency architecture that completes the work; "give the model more power" is not an optimization target** (C18/"more power" reject; dedup vs least-agency spine).
16. **Trace summaries and the observability AI produce candidate findings with evidence pointers, not authority; preserve the route back to raw events; degraded/absent instrumentation = uncertainty, not success** (C20/C21; dedup vs trace≠proof + instrumentation-health).
17. **Route models by measured workload fitness; a provider swap is a versioned platform change requiring evaluation (portability ≠ behavioral equivalence)** (C22; dedup vs GRD-033 + 284 benchmark≠workload-fitness).
18. **Every long-running capability needs an explicit cost/resource envelope; inference cost does not stop mattering** (C23).
19. **Integration standards (MCP/A2A/CLI/code-exec/skills) are composable rails, never governance** (C24; dedup vs GRD-033 + wave-6 §5.1 #15 visible≠authorized).
20. **Do not carry coding-agent assumptions into patient care; care has distinct authority/temporality/rights/outcome obligations, and no agent session may own the care relationship** (C25; care cluster).

*(Reviewer decides distinct-vs-sharpen-existing at the `08→06` gate; several dedup against existing `D0OL-GRD` + wave-6 §5.1 as flagged.)*

#### 6. Reread flags
- **Sibling reconciliation before any Agent Runtime map-depth authoring:** `EVSRC-2026-000257` (Deep Agents intro), `000059` (long-horizon/context/compaction/filesystem harness), `000224` (dynamic subagents / code-mediated parallel orchestration), `000216` (trace-driven self-improving agents), `000246` (Claude Code / agent-operable repos), `000084/85` (Karpathy bounded loops/evals). Cross-source convergence is folded into the **EVRUN concept registry**, not here (`GRD-044`).
- **External artifacts named in-source (future-watch, not evidence yet):** Harrison Chase blog on sandbox paradigms (whole-agent vs tool-only — #17); Lance's "learning the bigger lesson" post ("more power → better" — the #32 tension source). Capture-lane only if pulled; do not treat as promoted.
- **Repo build_status reconciliation:** disclosure-policy evaluator + artifact-pipeline + chart_ai_reviews + requireCapability + audit-actions = the *partial* build touchpoints (#7/#8/#35/#18/#13). NO agent runtime / AI-gateway / skill-registry / model-gateway / sandbox-control-plane exists — most rows are `doctrine AFFIRM/PARTIAL × build absent`. Map-depth only; do NOT build the runtime pre-spine.
- **Context-health thresholds (#25) stay marked for testing** — do not canonize 80–85% or any fixed number.
- **§C touchpoints (composite backends #10, MCP/A2A rails #40) — §C remains PAUSED; carry as pressure inputs only.**

#### 7. One-line hard read
The corpus's deepest single Deep Agents source — **0 net-new domain objects, ~44 sharpenings on an already-ahead Agent Runtime map** — whose durable gift is the vendor's own admissions (compaction/ sandbox/recursion/cost unsettled) and the one law it *cannot* supply: **externalize everything the model shouldn't be trusted to remember, but preserve the authority, custody, and proof of every externalized thing — and give agency only the budget its task's genuine uncertainty earns.**




&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Agent Runtime & Harness (map-depth only) · §B AI-substrate · Build-OS · Platform Loop · security/RBAC/credential-lease · Knowledge Reservoirs/context-governance · Reactor (consequence→control/proof) · Care (AI-never-care-authority) · §C (PAUSED — pressure only)` · promotion: `watch (0 net-new domain objects; ~44 sharpenings; 4 investigate-lane routes; 20 guardrail candidates → 08→06). PROPOSE-ONLY — nothing promoted.`

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold; `EVRUN-2026-000011`).
- `2026-07-18` — §0/§0.1 metadata + §1 transcript + §3 Review 001 (Knox strategic read) + §3 Review 002 (Nick gut note) populated.
- `2026-07-19` — **§3 Review 003 (Opus formal deep extraction) written (re-process).** A prior attempt paired this source with a sibling and exhausted resources before authoring Review 003 — the status line had been pre-flipped to `analyzed` but the Review 003 block was left EMPTY. This pass fills it: 44-cluster table + 28-candidate net-new dispositions (**0 net-new domain objects** · 24 EXISTS-AS · 4 investigate-lane · 0 reject-as-primitive) + 25 counterweights + tiering rejects + care implications + 20 guardrail candidates (→`08`) + reread flags. §4 pointers filled. PROPOSE-ONLY (`GRD-036`/`GRD-044`); registry/coverage-matrix/anchor-ledger/00_index NOT edited (deferred to closeout gate).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

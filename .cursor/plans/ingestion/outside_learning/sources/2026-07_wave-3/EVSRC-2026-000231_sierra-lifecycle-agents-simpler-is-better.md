# EVSRC-2026-000231 — The best AI agents are simpler than you think (Sierra / Zack Reneau-Wedeen)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000231_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000231`  ·  filename: `EVSRC-2026-000231_sierra-lifecycle-agents-simpler-is-better.md` *(proposed slug; file NOT renamed)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=uCKhOmth2ms`  ·  source_title: `The best AI agents are simpler than you think`
- channel_or_org: `LangChain / Max Agency`  ·  speaker: `Zack Reneau-Wedeen (Head of Product, Sierra)`  ·  published_at: `2026-06-18`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + YouTube screenshot + description`
- content_type: `long-form founder/operator interview — enterprise customer-facing agents / no-code agent authoring / voice runtime / agent memory / evals+simulations / agentic commerce / outcome-based pricing`  ·  source_reliability_context: `founder/operator (vendor-positioned — Sierra Head of Product; treat Sierra-specific implementation as product/architecture signal, not mandatory OMNI infrastructure)`  ·  topic_tags_light: `[Sierra, lifecycle_agents, analyze_build_release, Ghostwriter, Journeys, deterministic_no_code_compile, model_constellation, monolith_first, multi_agent_trap, voice_agents, memory_authentication, simulations, monitors, tau_bench, MCP, agentic_commerce, PCI_isolation, outcome_based_pricing, context_engineering]`
- identity_confidence: `high_from_operator_metadata` *(metadata block present at top of §3 Review 001 — lifted verbatim; not inferred)*

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Zack Reneau-Wedeen` · role_in_source: `interviewee` · affiliation_at_publication: `Head of Product, Sierra` · speaker_type: `operator / vendor (product leader)` · authority_context: `Sierra powers customer-experience agents for ~most of the Fortune 20 / 40-50% of Fortune 50-100; deep production authority on lifecycle agents, no-code authoring, voice runtime, memory, evals, agentic commerce, outcome pricing` · identity_confidence: `high_from_operator_metadata`
  - name: `LangChain host (Max Agency podcast)` · role_in_source: `interviewer / host` · affiliation_at_publication: `LangChain` · speaker_type: `vendor (host)` · authority_context: `LangChain-run agent-engineering podcast; author of the "not another workflow builder" blog referenced in-source` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `LangChain / Max Agency`  ·  interviewer / moderator / host: `LangChain (Max Agency)`
- event_context: `Max Agency podcast episode, published 2026-06-18; recording-context date self-referenced as "May 18th, 2026" in-transcript [48:24]`  ·  perspective / conflict notes: `Vendor-positioned (Sierra sells the platform described). Sierra-specific implementation = product/architecture signal, not mandatory OMNI infrastructure. Counterweight value: explicitly rejects premature multi-agent, raw no-code, memory-without-auth, voice-without-modularity, commerce-without-payment-isolation.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [x] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [x] update EVRUN concept registry (cross-source) *(fold packet returned to Opus-main; per instruction agent does NOT edit registry directly)* · [x] update coverage matrix *(deferred to Opus-main per instruction)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introduction
0:00
Agentic commerce will be bigger than e-commerce. There are cases where the Sierra agent is actually getting paid a
0:06
commission on a sale. Today I'm talking to Zach Renault Wedin, head of product at Sierra, the platform
0:13
powering customer experience agents for most of the Fortune 20. Coding agents are really good at file systems. They're really good at Git.
0:19
They're really good at GP. Let's materialize everything into those structures so that coding agents can
0:25
[music] just, you know, cook. He breaks down how Sierra builds for voice and why the architecture looks nothing like a
0:31
standard agent harness. One of the big unlocks for Sierra agents was how to parallelize thinking,
0:36
listening, and talking. And if this model says it's silent, you trust it. If this model does not say it's silent, you
0:42
trust this one. We get into why a Sierra conversation is unlike a typical LM call. You know, 10 or 15 different models
0:48
might be invoked for a given conversation turn. So sometimes you're classifying and you're responding at the
0:54
same time. And Zach explains how and why Sierra built an entirely separate infrastructure layer for payments.
1:00
We have isolated infrastructure where payment info doesn't go to an external large language model cuz none of the LLM
1:05
providers are PCI certified in that way. Welcome to Max Agency, the podcast [music] that goes deep into how the best
1:12
agents are being built by builders like you. [music]
1:17
Most people are probably familiar with Sierra as a customer support platform, but from what I understand recently, you
1:23
guys are going broader than that. Could you talk a little bit about the types of agents that you help people build?
1:28
Yeah, so this has been the vision since the beginning. I think because many companies have an RFP process where
1:34
they're very specific about, hey, we want to solve customer service. That is often where we start, but we think of
1:41
Sierra as the full engagement platform across all of the moments that matter for your customers. So, if you're an
1:48
airline, that might be browsing for a flight, might be booking the flight, might be choosing your seat, might be,
1:54
in my case, I have a small dog, so adding a pet and cabin, then the flight might get rescheduled um or delayed or
2:02
um cancelled, etc., etc. You need to get your bags there. There just so many different things across that process.
2:08
Some of them are sort of sales, some of them are more service, some of them are more loyalty, but they all kind of lad
2:14
up to the relationship between a business and its customers. And Sierra agents are present at all of these
2:21
different parts of the customer life cycle. So, as an example, there are cases where the Sierra agent is actually
2:28
because of our outcomebased pricing model getting paid a commission on a sale, which I think is quite different
2:35
from how most people would imagine service. And so we get really excited about those more exotic opportunities
2:41
because they also give us an opportunity to push the platform forward and you know continue adding to what the
2:47
platform can do and kind of turn that into a product, package it up nicely and bring more to all of our existing and
2:54
future customers. How similar is the platform between these different use cases?
2:59
I would say that it's very extensible and so you can kind
3:04
of take it in different directions. uh we like to say I think it's originally attributed to the um one of the creators
3:10
of the programming language Pearl but we try to make the easy things easy and the hard things possible. So out of the box
3:17
pretty similar the starting point but you can kind of take it in any direction that you want. So it's not that oh
3:23
there's like a separate product for you know one company versus another but the
3:28
agents that you can build on it and we'd like to think of these agents as products unto themselves can be
3:34
arbitrarily uh customized. What does it look like to build on the Sierra platform?
Analyze, build, release: how you build on Sierra
3:40
So uh we have it's basically a web app. There's three main sections. There's analyze, build, and then there's
3:46
release. Um, within the analyze section, you have things like our explorer agent,
3:52
which is kind of the longunning chatbt deep research for all of your uh, customer conversations and data. You
3:59
have reports, you have monitors, which are kind of always on evaluators of conversation data as well. And then
4:06
within build, you have ghostriter, which is the agent similar to codeex or cloud
4:11
code for building agents. Um you also have journeys kind of the underlying source code layer although it's not
4:18
really code it's more like natural language or standard operating procedures uh as well as kind of uh
4:24
different variables um and and everything like that. On the release side you have all of the collaboration
4:31
and change management and governance procedures. And so Sierra, I think at this point we're working with most of
4:37
the Fortune 20, something like uh 40 or 50% of the Fortune 50 or Fortune 100. So
4:44
very much um with a lot of the largest companies in the world and they have needs around governance and release
4:50
processes and change management that have just pushed us to develop from the
4:56
very beginning, you know, very buttoned up procedures and collaboration and review and all of this stuff. That's
5:02
basically what it's like. I think on the surface probably similar to a lot of other you know places that you go to
5:08
build things whether that's uh Figma or cloud code or these different places but
5:13
just very much optimized around no code agent building and um giving you all
5:19
those capabilities and are those different steps intended to be done in that order like analyze
5:24
build release can you analyze basically human transcripts before you build the AI agent or does analyze really come
5:30
after you build and release the first version of the agent? and now you're iterating on it. It's both. So, typically you'll come in
5:38
with some sort of resource of how you want the agent to be structured and
5:43
architected, how you want it to behave. Maybe that's transcripts, maybe that's standard operating procedure, maybe
5:49
that's a conversation that you have with Ghostriter. And that will typically be how you build the agent. So, I'd say
5:55
most people will start with build. But then once your agent is live and
6:00
production conversations are happening, your daily routine probably starts more
6:06
with analysis. You're probably thinking, how can I optimize the metric that I care about, whether that's customer
6:11
satisfaction or resolution rate or in the case of the customer I mentioned like sales converted and so you get
6:19
those insights and then you want to make improvements to the agent whether it's
6:24
you know fixing an issue or finding a new opportunity to hill climb on a metric or please customers in one one
6:31
more way and so that typically involves you know working with ghostriter often
6:36
and ghostriter will actually proactively suggest an improvement on the insights to kind of close that loop and build
6:42
that flywheel. Um, but I would say the day-to-day is more analyze, build, release. Who is doing that analyzing and
6:50
that iterative improvement? Is this is this engineers? Is this product folks? It's primarily people that have the most
6:58
depth and insight about the ideal customer experience, which tends to be
7:03
operations uh people. So customer experience managers um folks in that
7:08
department at our customer companies. It's also a number of engineering teams
7:15
will build either other agents that interface with Sierra agent or they can extend the platform uh via basically
7:23
tools and packages that you can then kind of see and introspect on Sierra. So it's very much kind of the same way that
7:30
you have the person that knows everything about your knowledge base. We want them to be able to come in and self-s serve on day one and just, you
7:37
know, make the perfect instantiation of knowledge. The person who knows everything about the standard operating
7:42
procedures should be able to just do that in the product. And so we're constantly kind of trying to sand down all of the barriers between the people
7:50
with the most context and their ability to contribute directly to the platform. You've said no code a few times. So what
Inside Ghostwriter
7:58
does this agent building experience look like? Is it truly no code? And and I'm assuming it's maybe something like quad
8:04
code where you talk to it and it generates something under the hood. Is it generating code? Is it generating a custom DSL? Yeah, good question. So the
8:12
layers of the stack you have kind of what we call agent OS which has our constellation of models. So translating
8:19
the tasks that need to be done on the platform into prompts uh into data
8:25
injection across you know 10 or 15 different models that might be invoked for a given conversation turn. Some of
8:32
those might be frontier models that need to do you know top tier reasoning. Some of them might be in-house models that
8:39
are very good at a specific task and some of them might be just, you know, classifier models that run really well
8:45
on a a model that's a little bit cheaper and more performant. And so that's kind of the base layer. On top of that, you
8:52
have the agent SDK, which is the codebased layer of agent orchestration
8:59
and context management. That's kind of where Sierra started. But over the last
9:04
18 months, most of the agent development, um, pretty much all of the agent development has shifted to our no
9:11
code layer that we call journeys. It compiles down to agent SDK code
9:16
deterministically and isomorphically, which is a fancy word for you can turn it one way and
9:21
then turn it back and it's the same. And so you can have uh code that you transition over to no code. You can have
9:28
no code that you transition over to code, but the language of specifying it is very much declarative. Here's how I
9:36
want the agent behavior to be. Uh when customers ask about this, we want to unlock these conditions and kind of flow
9:42
in this direction. And we find that that's pretty intuitive because it maps the type of document that we would write
9:47
for someone joining the team in a customer experience role or a sales role. You would explain to them how to
9:54
do the job and that's kind of what you're doing here as well. But there is some DSL for journeys. It's not pure raw
10:00
kind of like text. Correct. And it's very hard. I'm not sure. We could get into a discussion
10:07
about it. If you're just doing text, you have to choose between this is
10:12
non-deterministically compiled, which all of the experiments we've done in that direction, you end up, I think,
10:19
with more harm than good, or this is a prompt engineering task, which then puts
10:24
you in the realm of engineering teams. And we, you know, are very proud to be more in the realm of operations teams
10:31
where a lot of that domain specific knowledge resides. The other big piece of it is that Ghostriter has totally
10:36
changed the learning curve for building agents. So you come in and you just say, "Hey, you know, I want to orchestrate
10:42
order returns or I want to do flight booking or I want to do car rental or uh
10:47
referral from primary care provider to a specialist." And Ghostriter just kind of already knows those concepts and is an
10:54
expert in journeys. But Ghostriter is using the Journeys product. So it's not writing code, it's writing uh journeys
11:01
directly so that you can go inspect that after the fact as well. I imagine there's some there's some
Meeting models on their turf “80% of the time
11:07
format that these journeys have to have to adhere to and I imagine that's not in the model's training data at all. Was it
11:13
hard to teach it that format or was it pretty easy? It's a really good question because at every point there's this conflict
11:20
between here are the perfect abstractions for me and here are the abstractions that the models are most
11:25
familiar with. And similar to in math how you're often taking one problem and reframing it in another problem to do a
11:32
proof or something like that. You have to decide if you want to reframe this problem into something the models understand or build a skill and inject
11:39
context in the right way so that the models can understand your way of thinking. The truth is that we do both.
11:46
So there are cases where we'll say you coding agents are really good at file systems. They're really good at git.
11:52
They're really good at GP. let's materialize everything into those structures so that coding agents can
11:59
just you know cook. Then there are other cases where it's like no no no our way of thinking about this is the correct
12:06
way of thinking about this and there's not really a way to shoehorn it into what models are already good at. So
12:12
let's do the investment to make the models good at this. My personal perspective is that 80% of the time you
12:18
want to do the first thing and just meet the models of where they are on their turf and you should reserve the second
12:25
one for that really special case. I'm curious uh if that's what been your experience as well. I think recently
12:32
it's probably gotten to be we see a lot of people using the file system as an abstraction. And so I think recently
12:37
there's been a lot of talk especially as the labs talk about how they're rlinging the models to be really good for their
12:42
harness to try to fit everything into a file system or this particular like edit file tool or things like that. I also
12:49
think that the models are really good at writing certain packages like if you're in the training data I think I think a
12:54
lot of langraph is in the training data. So I think at least anthropic models recommend Lingraph for a lot of use cases and that's great
13:00
but for newer things like deep agents which is a new package we have it's not in the training data at all we spend a little bit of time not maybe not as much
13:07
as we should but we spend a little bit of time thinking about what makes these models good at writing certain things we really have no clue how to like affect
13:12
know how to affect what goes in the training data but it's a really interesting thing and so I think there's definitely been cases where we see that
13:19
people choose technology because the models are really good at writing it and so one question I was also going to ask
13:25
for agent SDK. I imagine that's you know your own custom kind of like framework built in house. I don't know if you
13:31
experimented with having it sounds like you didn't you're not having ghostriter write that directly but like that's
13:36
obviously much more closer to code and so I was curious if you experimented with ghostriter or any model like
13:41
writing agent SDK versus just writing like raw code. So yes, um, one of the
13:48
things too is if you almost do the abstraction that the models are really good at, it can be overconfident or it
13:54
can be familiar and successful. And so you have to be very thoughtful about going either all the way there or just
14:01
not going there at all. Like you're saying agent SDK is somewhere in the middle and that might actually confuse it. Exactly. Exactly. Um, we have kind of
14:08
reinvented the agent SDK two or three times as models improve. So it used to
14:14
be you had to have more deterministic guardrails in order to get the behavior that you want. Now there's more room for
14:20
reasoning uh at each individual step and you can kind of push out the frontier of that reliability versus reasoning
14:28
trade-off. So that's been very interesting. The reason for uh Ghostriter primarily or entirely editing
14:35
no code is just that that's where the vast majority of activity is on the platform today. So that's what our
14:41
customers know and so making ghostriter good at it is really where all the payoff is. I think if we tried to do it
14:48
for code it would be a similarly scoped task but it would be hard to get it to be really good at both at the same time.
14:54
There's always going to be some trade-off. Do you still let users edit the agent SDK code if they want or is that now
15:01
like completely abstracted away from them in terms of just its journeys? So the core agent SDK is part of the Sierra
15:07
platform, but building agents in code is totally something you can do. One
15:12
example is a number of our customers have CI/CD continuous integration pipelines that they want to make sure
15:20
their agent is released on and so they need a git repository which is where their agent lives. Another example is
15:26
sometimes you have a particularly complex tool that has interacts with a streaming API or something in a way that
15:32
is just easier to model in code than in no code. And so the way that these work is because no code compiles down to
15:40
code, you can kind of import or under the hood it will import code files and compiled no code files kind of all as
15:46
though they're the same thing because they are. So I think this is a benefit of starting out as a codebased platform
15:52
is that we still support it. We have a number of customers that have dozens or in a few cases 100 plus developers
15:59
building on the platform and sometimes for that you know they work in git they release in git and so being part of
16:06
their enterprise change management protocol just means supporting git. You mentioned that the agent SDK has
16:12
changed over over the past few years as everything in the space has. um what does it look like now and how has it
16:19
changed? What does that evolution look like? So, it started out uh we call this now flow-based very much like you know do
16:26
this and it wasn't just like do these things. I think I'm a big fan of your not another workflow builder blog post.
16:32
So, it wasn't that rigid, but it would be, hey, you know, make sure you collect their email before you uh say that
16:40
you're going to send them a confirmation email, right? Very clear to us, but you would want to do those things in that
16:46
order. Now I think if you think about just the way that agents can reason through tool calling uh instead of
16:53
having to specify that in the actual structure of your agent you might just give it the context that in order to
16:59
call this tool you know as a prerequisite you should have their email uh and it will know how to ask for it.
17:05
So it's really like you'll just say that in the prompt. Yes. Um or you know eventually all
17:10
things end up in prompts but it would be in the journey. Um, and so as you're kind of writing it out, you would
17:15
specify that that's one of the rules or policies of the journey and then the
17:21
agent can take care of the rest. I think it's a mix of the models getting better and our orchestration platform becoming
17:28
even more sophisticated and robust. So when I talk about that constellation of models, there's a lot of we talked a
17:34
little bit before about Lanaeus and Darwin, there's post- trainining that goes into that. There's model selection
17:39
and eval and prompt engineering as well. And so I think it's it's kind of equal parts model improvements and platform
The one constraint Claude Code doesn't have
17:47
improvements. I want to talk about those models in a second, but I want to stay on the harness for a little bit. How similar does it look like in its current form to
17:53
a coding agent harness? Does it have access to skills and sub agents in the same way that someone using cloud code
17:59
would would have? So the one constraint we have that cloud
18:05
code doesn't have is latency. Majority of Sierra conversations are voice and if you're not responding in one or two
18:11
seconds then people wonder where you went and so we are highly optimized for
18:17
these low latency use cases. There's a ton of parallelism. That being said at a high level it is
18:23
using a lot of the same models. It has access to tools. Um so there's a lot of
18:29
similarities. There are also you know you can invoke other agents from the Sierra agent. So the core what's best
18:35
for the core conversation loop isn't typically what's best for software development but you might want to say
18:41
hey let me actually give you a call back in 20 minutes after I figure this out and then you would have a type of loop
18:47
that runs you know more like cloud code and for those for those longer loops that might happen in the background are
18:53
those also built on the Sierra platform and are just a separate type of agent that remove the latency con
18:59
you can do it either way so you could have a Sierra agent calling out to another Sierra agent or you could also
19:05
have a Sierra agent calling out to an in-house platform. And because so many of our customers have their own
19:11
technology teams and a robust array of different AI projects internally, they
19:18
might be experts in a particular area. Like they might have document generation
19:23
handled themselves and that might be a longunning agent and then CR agent can call out to it and wait for a response.
19:29
So it's kind of up to you to choose and we find that enterprises are varied enough that they appreciate kind of
Agent-to-agent: when an API call still beats MCP
19:35
having choice when you do these agentto agent communications. Are are you using a toa
19:41
or one of the protocols specifically for that or MCP or just an in-house I don't know rest API call. The most common is
19:48
an API call. When you know who you're talking to in advance often times you can save a lot of tokens and make sure
19:55
that you're 100% accurate that way. That being said, CR agents support the uh MCP
20:01
and agentto agent protocols. You can kind of install that integration and then your agent can be an MCP client.
20:07
You can also set up your agent to be an MCP server. So this is how we support chatgpt apps uh which rely on MCP
20:15
servers. Basically the tools of the agent can be made available to chat GPT and then you can at reference a Sierra
20:22
agent. The example uh that would be most familiar is Redf Fin. Um, if you do, if you go to redfin.com and do their AI
20:29
search, uh, under the hood, it is a Sierra agent that is returning the home listings and having the conversation
20:36
with you. And that agent is also, I believe, available in chat GPT. Interesting. I I didn't realize that
20:42
Sierra agents could be chat GPT apps basic. Is that the right terminology for them? It is. Yeah, exactly. Do you have do you
20:49
have an opinion or hot take on in the future do you think people will be interacting with the agents that
20:55
represent brands on dedicated chatbot websites or in uh chat GBT or central
Why agentic commerce will be bigger than e-commerce
21:02
chat engine? I think that agentic commerce will be bigger than e-commerce. So if I think
21:09
about how I get things done today, it used to be that I went to websites and clicked around. Now, I ask Codeex or
21:16
Claude to do things for me, and I don't see why I won't do that to manage my
21:22
subscriptions, to order supplies to my home, to make dinner reservations. It just feels like that's where we're
21:28
headed. And so, if that's happening, I think brands will want to be ready on the other side of that. So, we are very
21:35
much planning for that world. We were investing in payments before it made sense, I think. And it's a long process,
21:43
but a few months ago, we announced, you know, we're uh fully PCI DSS level one
21:49
certified. I have no clue what that means. What does that mean? Payment card industry. Okay.
21:54
Um Oh, man. You stumped me on DSS. Uh [laughter] I have uh some of the other acronyms um
22:01
in my head, but um we'll put it in in post. Okay. Okay. Thanks. Oh man, it must be like digital sec. I don't know. I know
22:08
that the we were uh certified by a QSA, which is a qualified security assessor.
22:13
And uh what that means is we're able to do the only voice payments platform
22:18
certainly at launch. I think still this is the case where you don't need to transfer to another platform. So it's a
22:24
co cohesive experience throughout checkout and all the work that went into that. we have isolated infrastructure
22:31
where the payment info doesn't go to a large language model, doesn't go to an external large language model because we
22:37
have none of the LLM providers are uh PCI certified in that way. And so putting that all together is like
22:43
spinning up a separate cluster, you know, getting certified uh making sure all of our operational rituals, you
22:50
know, conform to what the security assessor is looking for. And we put in that work because we believe in this
22:56
future where agentic commerce is actually bigger than e-commerce. And I think e-commerce is in the hundreds of
23:02
billions of dollars at this point, couple percentage points of GDP or something like that just in the US. And
23:07
so if you think about that space, um, it's pretty big. And by Agentic Commerce, do you mean like chat GPT
23:15
talking to a Sierra agent that represents Redf Fin or do you mean someone going to Redfin's agent no
23:21
matter where it is and talking with it there? Both. Both. I do think that the majority of this
23:28
will be from personal agents just looking at user behavior. We spend so
23:33
much time in claude and chatbt and codecs that you have to think that's
23:39
where a lot of that behavior will occur. And do you think those agents will interact with another agent? Why not
23:46
just the raw APIs themselves? I do. I think that as you think about
23:51
being ready for that world. Um, the same way that you might want to use Shopify
23:59
or you might want to use certain software on your website to do product
24:04
recommendations to do checkout. Uh, you might want to use Stripe. Similarly,
24:09
you'll want to use a platform that can make sure that you're presenting your products in the right way, that you're
24:16
making checkout as easy as possible, and you're showing up at your best, whether it's for a customer that's browsing or
24:22
for an agent that's browsing. The one thing that I think is pretty different is the attention isn't necessarily
24:29
valuable in the same way. like our eyeballs are more valuable than an agent
24:35
just, you know, spewing out tokens assuming that no one's ever going to look at it. At least I that's true for
24:40
now. At some point it ends up in some future training run and maybe has value, but I think that's dimminimous relative
24:46
to getting us to look at things. And so I do feel like maybe that's a bit different, but the presenting yourself
24:51
in the right way, making it easy to check out, making it easy to understand what products are available to express
24:57
the preferences of whoever is responsible for that agent going off and doing something commercial. That all
25:04
still feels relevant to me. I've seen some dev tools provider, I think Sentry, doing a similar thing where they have a
25:09
bunch of APIs obviously for the underlying platform, but they also have an endpoint to just ask questions of the
25:15
agent directly. And I think you could make a counter-argument that like great brands should absolutely care about how
25:20
the platform is being used and how it's being presented, but you could do that with skills or or some other mechanism
25:25
to expose that to the agent. And I I honestly don't know which one's right, but I it has been interesting to see the whole space is so new, but increasingly
25:32
so companies exposing agents as endpoints to interact with rather than the endpoints themselves. I agree. I think that all of this stuff
25:39
you could try to do it yourself. It might be that certain companies that's the best option. What we've seen is that
25:46
because there's often tens or hundreds of millions of dollars on the line, in some cases billions of dollars on the
25:52
line, you really want to make sure you're getting the best solution. And so if you're going to be 90% as good at it
25:59
as you could be partnering with a company like Sierra, it's still makes sense to partner and, you know, get that
26:06
extra few billion dollars. One last question on this fun side tangent, payments. How early are we?
26:12
I think we're really early. I personally still don't order paper towels with
26:18
codeex. I don't know if you do. No, that's why I asked. I'm glad that you said that because I don't I'm not close to doing that and so I was
26:24
wondering how far behind I was. I mean, like I also didn't do it with Alexa, you know. I think for some of
26:31
that really easy stuff, you could probably have done it already. The one that I think will definitely become a
26:36
thing is there are a lot of apps that claim they can, you know, go through all of your subscriptions and cancel the
26:42
ones that you're not using. That feels like as a consumer that's a useful service. I'm definitely closer to doing
26:48
that with codeex than I am with an app. You know, it would it would be so much
26:54
work to tell it all the things and try to tell it which ones to cancel. It's a very manual process. If I gave Codeex or
27:01
uh Cloud Co-work or something just access to my browser and said, "Hey, you know, go to all of the streaming apps
27:07
and like the ones that I'm not logging into, just, you know, cancel those and
27:13
let me know if you need my password." And obviously, you have to figure out how to make that secure and everything, but I feel like that I would have demand
27:20
for that product. Going back to the harness uh for a little bit, you said something earlier about things running
27:25
in parallel. Is that like guardrails that you're running or retrieval steps or or what's running in parallel in in
Running models in parallel and ensembling transcription
27:31
this process? So many things. One example, knowledge. We will often look up answers before we
27:40
know if we want them. So you'll, you know, before you decide whether this question needs an answer, you'll at
27:46
least have the answer ready or in parallel with deciding. So sometimes you're classifying and you're responding
27:52
at the same time. Basically speculative execution. Another example would be transcription, what we call ensembling.
27:59
Um, I think we might have published a blog post on this today, which is great. Go read it. We've learned so many things
28:06
from being a uh modular architecture on voice. This was an early decision we
28:12
made that I think has totally played out to our advantage where we have the ability for any language, for any
28:20
customer, for any use case to multihome providers uh across transcription,
28:27
across synthesis, and across native uh voicetooice models. And so on the transcription side, for example, it just
28:33
turns out uh when you have a thick UK accent from northern UK or at least
28:39
parts of northern UK, I don't know exactly the region, there is one model that has the highest
28:44
quality transcription, but it hallucinates during silence more than other models. So we run two models in
28:51
parallel, and if this model says it's silent, you trust it. If this model does not say it's silent, you trust this one.
28:58
And so that's just an example where we're running those in parallel. Uh we have logic for when you take the right
29:03
one and it's very specific. And if you had, you know, all your chips in with
29:09
one provider or one system, uh or you weren't doing things in parallel, you would inevitably hit the limits of what
29:16
that provider can do. So the same way we use Claude and Gemini and the GPT class
29:21
models, we're also able to use all of the leading players on the transcription and synthesis and speechtospech side as
29:28
well. You mentioned you have some in-house models as well. What do those models do and why
29:33
did you guys decide to build those inhouse? So uh knowledge is a great example. I think whenever we are pushing the limits
29:40
of what's possible, we always consider whether we should build this inhouse. whenever it's limiting our ability to
29:47
deliver more for our customers. So, an example where we're probably not the
29:52
company is these, you know, many millions of dollar training runs that produce the GPT55 class models. And, you
30:00
know, Mythos, I'm sure, is a many, many millions or tens or hundreds of millions of dollars training run um to get that
30:07
produced. And that's stuff that OpenAI and Anthropic are just the best in the world at. I think what we're the best in
30:12
the world at is going really deep with customers, understanding all of the process knowledge, uh, specific to their
30:20
industry, specific to their company, specific to their customer base, and then having the products that can allow
30:26
them to serve those customers as best as possible. And so an example like knowledge where we were hitting the
30:32
limits of the retrieval and reranking that we could do with out of the box models, we asked the question of you
30:39
know should we create our own models here um and eval them and we have a research team that's pretty sizable and
30:45
tightly integrated with our product teams and so we can flex that muscle when we need to but we try not to be
30:52
doing it just for the sake of doing it. You mentioned something like every run of the agent would have 10 to 15
30:57
different model calls. Yeah. if you had to guesstimate like how many of those are Frontier model calls
31:02
versus like in-house fine-tune versus not Frontier model but but third party. So for a typical um turn of a
31:10
conversation I would guess that and this is just ballpark but you know being uh
31:16
precise rather than being accurate. Uh I think maybe a couple frontier model a
31:21
handful of classifiers that probably don't require that a handful of
31:27
speculative execution in the case of voice in particular to make sure that it's low latency. Um, sometimes there
31:33
will be an interim response that's generated to, you know, the same way you'd say, "Hold on a minute. I'm just pulling up your account." Like that kind
31:39
of thing. Roughly like a third, a third, a third or a quarter, a quarter quarter. But I would say the frontier models just
31:46
because they might be slower or more expensive would probably be, you know,
31:52
more doing the bulk of the reasoning, but in one or two inferences for a given conversation turn.
31:57
Do you ever end up training models specific to a customer? It's not something that would be out of the
32:02
question, but I can't think of a specific example. The reason I pause is because we do have our agent data
32:10
platform and there are machine learning models that power strategies that are
32:15
specific to customers. But in terms of like a uh you know language model or generative model, we don't have cases of
Inside the Agent Data Platform
32:22
that. What's the agent data platform and what does it power? Basically, one thing we
32:27
realized pretty early on is large language models are really good at in the- moment empathy. Oftentimes better
32:33
than we are of understanding, okay, you know, I understand you're having a hard time. I'm really sorry about that. And it's the same way when you walk into a
32:41
restaurant that has amazing service or a hotel that has amazing service. They recognize the moment you walk in, okay,
32:48
this person just got off a really long flight or this person's 10 minutes late to their reservation and they were stuck
32:54
in traffic and I'm just going to let them know that that is not a problem. Their table is ready. And large language
33:00
models have that, especially on a platform like Sierra, but they don't necessarily know what you care about at
33:06
a level deeper than that. And often times the previous generation of AI or
33:12
recommener systems have a better understanding of some of those things. And so what agent data platform does is
33:18
it can either integrate with your customer data platform all your internal systems or you know you can have it just
33:24
on Sierra or you can do sort of a zero copy integration and it can take that
33:29
structured data that knows what to recommend along with the unstructured data of the here and now in the
33:36
conversation and then use those to generate uh better conversations, better
33:42
uh orchestrations around how you want customers to feel and what you want to do for them. Um, so that all sounds
33:48
maybe a little bit abstract. Uh, one example would be during sales. Often times there's structured data that knows
33:55
the right offer to present, but doing it just with that structured data with the previous generation of AI and before
34:01
Sierra feels very stilted or it feels like, you know, I don't know why you're doing this. And so large language models
34:08
can really understand how to present an offer, uh how to attribute it, weigh two
34:14
different offers based on conversation context and pick the right one for the moment and that kind of thing. So we see it a lot with sales with loyalty and
34:21
retention, those types of conversations. One of the last agents we haven't talked about too much is Explorer.
34:27
Yes. What is Explorer? What does it look like under the hood? I've described it as chat GBT deep research uh for all of
34:34
your customer context and conversations and all of the data on Sierra. And so what it allows you to do is basically
34:40
instead of having to go spelunking for the specific insight in reports or in
34:46
monitors, you can just ask the question. You can say, "Hey, I noticed my resolution rate dipped. You know, why
34:52
was that?" Or, "How can I generate more sales?" or uh I wish that more people were converting from trial to you know
34:59
full-time uh paid plan how come that's not happening and then more than that
35:04
you can set up automations so that you know on a daily basis for example explorer can ask the same questions
35:10
proactively and then partner with ghostriter we currently think of these as kind of two separate agents the
35:17
analysis agent and the authoring agent to say oh here are some fixes that are suggested to improve and you can chat
35:24
with ghostriter and kind of pick it up from there. Under the hood, where this is converging, I think, is a shared
35:29
harness that is an expert at using Agent Studio, uh, Sierra's platform. Um, and
35:34
so that's kind of what we've been setting up in terms of what we talked about at the beginning, like you know, figuring out the file system
35:41
architecture that maps to the product. Um and so as we've exposed more and more
35:47
tools um you know like building knowledge bases to these agents they get
35:52
more and more powerful and we see a lot of emergent behavior between both. Does this harness end up looking more
35:58
similar to like a coding agent harness than the the harness that's part of agent OS or agent SDK?
36:04
Yes. Um, so this is less of a quick turn conversational agent and more of a
36:10
longer turn deep analysis agent and so it ends up looking a lot more like a
36:15
cloud code or codeex. One of the things I've been thinking about I'm curious if you have a take here in a year, two
36:20
year, 3 years, will there be this split just in terms of harness ones that's optimized for kind of like yeah lower
36:27
latency external facing customer experience type things? voices maybe
36:32
heavily involved and another that's really focused on these deep research maybe coding like you run in a sandbox
36:37
things like that or will it just end up converging into one harness that you know depending on how you prompt it or you know has these async sub aents in
36:44
the background that can maybe run for longer periods of time I think there will always be latency performance cost
36:51
trade-offs and different architectures that emerge because of that I've actually been surprised by how many
36:58
different types of model companies there still are. And when I talk to people who are particularly AGI pilled about it and
37:05
I say, "Hey, what's like a cool model opportunity that's not flying like so
37:10
close to the sun that the labs will do it?" They'll say, "Oh, well, you'll just ask, you know, GPT12 to make that
37:16
model." So, it's actually not a big opportunity. But I think in reality, at least up until now, I'll probably look
37:23
dumb when AGI comes out. [laughter] You do see a lot of success in areas
37:29
like voice models, from transcription to synthesis. You don't always see
37:34
leadership from the model labs. You see the model labs actually trying to focus more on specific problems. For
37:40
anthropic, I think it's coding. For OpenAI, it's been consumer. Now, maybe shifting a little bit more to
37:46
enterprise. Um, for Google, definitely consumer as well. And it really does
37:51
feel like there are still trade-offs to me. So I expect there will still be multiple architectures up until that
37:57
event horizon of AGIS here. So all bets are off. As you guys build your core agent
38:02
harnesses and I'm assuming want to build them in a model agnostic way. What do you need to change to go from an open AI
38:08
model to an anthropic model? Usually you have the evals that are designed to work across both. So if you
38:13
have really good evals and a really good harness or really good architecture, then you should be able to kind of hill
38:19
climb toward eval performance with too much effort. Often what will happen is you'll learn the first time you're
38:26
switching one task from one to another or making it possible to run on multiple systems that your eval wasn't quite as
38:33
good as you thought. And so then you make your eval better and you continue to improve. But the short answer is that
38:38
it's pretty simple for a given intelligence level of a model to uh run
38:45
a task on one or the other. And so again, it's that basically latency, quality, cost tradeoff, but not more
38:53
than that. And because we have customers that have very specific requirements around what clouds they can run in, what
38:59
models they can use and our uh company approach is to meet them, you know, on
39:05
their terms. You don't serve most of the Fortune 20 without that approach. It's not really a choice. Uh and so because
39:12
that's our approach and we've built a lot of products around that, we also have made sure that we can kind of move
39:17
between models of comparable intelligence without too much heartburn. And what do you end up changing when
39:22
you're hill climbing? Is it just the prompts? Do you also change out some of the tools themselves? It depends on the case. Um, and I might
39:29
not be the expert on the exact history of each. I would I think that if you
39:34
change the tools, it's pretty hard not to have downstream effects of that. And there might be certain tasks that can
39:41
only run on certain models and other tasks that can run on other models. And so there's always kind of a set of
39:47
eligible models for specific tasks. I don't know exactly how tools change, but
39:52
I know the uh eval getting more robust and the prompt, you know, conforming to the quirks of each model is definitely
39:59
part of the development. You guys recently wrote a blog around context engineering and I think you said
Context engineering: everything it needs, nothing more
40:05
it was the key to great agent building or something like that. How do you guys think about context engineering and and and what you know tips or tricks would
40:12
you have for others? I think it's showing agents everything they need to do the right thing but
40:18
nothing more. And as models get smarter, you can be a
40:25
little bit less precise with everything they need and certainly less precise with nothing more. So early on it was
40:31
the agent SDK was really about only giving the model exactly what it needed and kind of spoon feeding the context.
40:37
Now to extend the uh meal analogy, it's probably more like, you know, putting out the right dish. And maybe in the
40:44
future it might be something that is even less structured. One concept that I think is in that blog post is kind of
40:50
progressive disclosure. You'll probably know more about this than I do, but when you bring something into the prompt, you
40:58
don't want to do it before it's relevant. And then you also risk incoherence if you then yank it out of
41:04
the prompt. So when you do things like prompt compaction, you just want to be really thoughtful about not making it
41:10
lossy because if you keep something in the history that is incoherent with the
41:15
rest of the system prompt, it's not going to end well. And so I think to the degree, you know, when we're fixing uh
41:24
issues or when we've seen hallucinations, it's often because one part of the prompt was this and the
41:30
other part was this. And actually, one of my main learnings from Sierra is anytime you think the model's being
41:36
dumb, it's probably you. I like that. I think that I I think a lot of people have learned similar
Whenever you think the model's too dumb, the model's actually too smart
41:42
lessons from doubting. Whenever you think the model's too dumb, the model's actually too smart. How much do you guys care about prompt
41:49
caching and maintaining that cache? I've heard I've heard kind of like two mindsets on it. One is like, yeah, do
41:54
everything you can to maintain the cache. Like don't invalidate it until you like absolutely need to. And then
41:59
I've heard another theory that's basically like, yeah, prompt caching is great, but like what matters most is like performance and sometimes you need
42:05
to just like break the cache in order to insert the right context or give it a system reminder or something like that.
42:11
How how strictly do you guys try to adhere to prompt caching? Is the purpose for those who are prompt
42:17
caching loyalists for uh speed or cost or quality?
42:23
I think the first two mostly speed and cost. Speed and cost. Yeah. I haven't I haven't heard anyone argue that it's for quality, but maybe
42:30
maybe it works better. It's a nice to have. Um we definitely don't want to invalidate a cache for no
42:38
good reason, but quality comes first. So, we aren't zealots about it at all. I
42:44
would also say that when the outcomes that your agents are delivering are very
42:49
valuable, you have the luxury of not being extremely focused on cost in
42:55
particular. Uh, and so that probably is part of the reason for that is that, you
43:01
know, a a conversation with a customer could sell a $100 product or a $1,000
43:08
lifetime value plan. And so those are valuable enough that quality almost
43:13
always comes first. We've talked a bunch about the agent itself. There's two topics that we were discussing earlier
43:18
and I'm curious, we've talked a little bit about them, but I'm curious if you have any more thoughts. First being RL. When is RL good? When is it bad? How
43:25
much have you guys explored it? We've explored it a lot in part because it has two great promises. You know,
43:31
increasing the ceiling of the quality of models and then also making it so that you can do a similar task on more
43:38
models. I'm curious for your take, but in practice, I've seen a little bit more of the second one when it comes to like
43:44
enterprise RL. It's taking an open model or open weights model and saying how can we get similar performance to a frontier
43:52
model. The two things that make it hard are number one uh the way that that gets delivered is non-deterministic and might
43:59
include um you can't include any data that you don't want the model to regurgitate. So we basically would never
44:05
fine-tune a model on something when it could lead to regurgitation risk. That's just a non-starter. And then also uh in
44:12
general just the way that uh you would train the model you have to think about preparing all of that data. The other
44:20
big one is that the frontier models are improving so fast that you want to remain as agile as possible. And so in
44:28
many cases doing something like RL makes a ton of sense for something like knowledge where we feel like we are
44:35
pushing the state-of-the-art but if we're not pushing the state-of-the-art we really want to be thinking about
44:40
what's going to be true 3 months from now, 6 months from now. And often times RL is a rounding error against that.
44:46
Yeah. I feel like to your point earlier, we've started to hear it a little bit more recently. I think because of cost.
44:51
So I think like most people are interested in it when they're using these frontier models and the performance is good, but now whether
44:58
it's coding or other things, their cost is just going through the roof. I think the and we're starting to investigate
45:04
this more, but I think the places we're hearing it most are basically in those where performance is good, cost too high. How can I bring it down? Let's see
45:11
if I can I can train a model to get similar cost at a fraction of the cost or similar performance fraction of the cost.
45:16
Yeah. Interestingly enough, a lot of our progress here has been driven by capacity not cost where you know we have
45:24
a lot of customers that are in the retail space. And when we go into Black Friday, Cyber Monday for example, you
45:31
need a lot of capacity to deal with the spikes that they face. Uh we've also
45:36
done load tests that are on the order of you know if you were to have that rate of conversation over a year it would be
45:43
billions of conversations. And so that level of concurrency and those spikes
45:49
just mean that we need to be resilient to downtime with a particular provider
45:55
and ready for you know using whoever has the capacity to serve us. And so it's
46:01
funny because it's useful in so many ways, but a lot of the reason why we have such good support for multiple
46:07
providers is specifically preparing for Black Friday, Cyber Monday, and running load tests for really large customers.
Why multi-agent systems are a trap
46:14
One other uh harness agent engineering topic, uh multi-agent systems, where do
46:19
you think they're useful? Where are they not useful? I think they are often not as useful as
46:24
people think. My thoughts on this would be people should be really thoughtful about why they want a multi-agent
46:30
system. If you want a multi- aent system so that one team can work on one agent and one team can work on another agent,
46:37
then you're shipping your org chart. If you want a multi- aent system because it's just makes you more comfortable to
46:42
think about this problem over here and this other problem over here, then you're also not optimizing around
46:49
impact. If, for example, you had an agent that does triage and another agent
46:54
that does a task, by building it as a multi- aent system, you're often
47:00
depriving of the agent doing the task of the information from the triage and depriving the agent doing the triage of
47:07
all of the procedural information from the task. And that's typically destructive of value. And so we are
47:14
often just want to make sure that we're doing multi- aent systems for the right reason. if you're kicking off even a sub
47:20
agent, you want to make sure that it has everything it needs to do that task and that there's no reason why it shouldn't
47:27
just be part of the main agent. Um, and so I think I've seen a lot of cases
47:32
where people are reaching for multi- aent systems the same way you might reach for microservices
47:39
uh before you're necessarily ready for that level of optimization and also for
47:44
reasons that might not be just about building the best possible agent. And so Sierra agents tend to be kind of one
47:52
agent representing the brand. You certainly can have multiple agents and build a multi- aent system, but if
47:59
you're managing context correctly, if you're doing really really good context engineering, then typically it's just
48:04
not a problem because you're not exposing the wrong context to the wrong agent. Is there a right time to build a multi-
48:10
aent system? I think if you have truly separable jobs, right, where there's not any purpose of the first context being
48:17
part of the second context, I will say that in my personal opinion with, you
48:24
know, May 18th, 2026, there not a lot of great times for it.
48:30
There might be times where it actually the organizational difficulties are worth the quality drop, but if you're
48:36
doing it specifically for quality, I think it's it's pretty rare that you can't just solve it with better context
48:42
engineering. And I'm kind of a monolith loyalist on that. I feel like voice is
Voice 101: latency, naturalism, and 60 languages
48:47
one of the things that is getting more and more popular, but there still aren't a ton of people doing a lot of, but you
48:53
guys are. Can you give me a voice 101 or 2011? What what should I and other agent builders know about voice compared to
48:59
just building, you know, simple chat agents? Voice has been maybe the most fun project that I've worked on in my whole
49:05
career. So, and and I for context, I joined Sierra as an agent PM working on
49:12
building agents specifically with customers in a forward deployed role. And one of the first customers I worked
49:17
on uh is SiriusXM, the uh incar streaming radio service. And so I'm big
49:23
SiriusXM fan. uh before that and as a result and they have a ton of volume
49:31
over voice, even more than they have over chat. And so many of their touch points with customers are over the
49:36
phone. And so early on it was very obvious that voice was going to be impactful for the business. And we got
49:42
to think from first principles basically from the ground up. What makes a voice experience great? How is that similar to
49:48
chat? How is that sim how is that different from chat? And so latency is probably the most obvious one. You need
49:55
to be really thoughtful about parallelism. You need to be really thoughtful about what we call progress
50:01
indicators, which is where you uh say, you know, hang on a second while I look up your account. That's number one.
50:08
Number two is naturalism. This is a combination of a number of different things. So often times when something
50:14
sounds a little bit robotic, I'll I'll read what the agent said and I'm like, "Wow, I sound robotic, too." So, it's a
50:20
combination of what the agent is reading and then also the quality of the voice itself. Um, there's multilingualism.
50:26
It's very easy to speak different languages over chat using large language models. It's a lot harder to be fluent
50:34
in I think it's about 60 languages on Sierra platform. Um, and you know, than
50:41
it is on chat and each of those languages, you know, sometimes the very best transcription provider might have a
50:47
20% word error rate. I think that's true for a language like Hungarian for example. And so it's okay, how can we
50:54
ensemble multiple transcription providers in order to get that down and kind of be better than a single model is
50:59
on its own. The other big factor is I think we all believe that a few years
51:05
from now most voice agents will be running voice native models. So you know
51:10
uh real time I think they might be up to 2.5 at this point. They've had like three big real-time launches at OpenAI
51:16
this year already. There was the really cool demo from Thinking Machines Labs as well. So there's been a lot of increased
51:23
momentum here and as of a few months ago we now have production agents live with
51:30
the voicetovoice models. Um and so they're you know it's you know fully end to end doing that. You still need the
51:36
transcript in order to like make API calls and that sort of thing but the Asian is responding you know uh with
51:42
audio as the input. The other big piece of it, I think the thinking machines demo was a really good example. Up until
51:49
now, we basically had like 50 lines of Python. I think Silero is the most
51:54
popular voice activity detection library deciding when to speak and then a
52:00
trillion parameters deciding what to say. And that balance feels very off to me. If you think about the conversation
52:07
we're having right now, I'm actually using a lot of my brain power to decide when to speak uh in addition to decide
52:14
what deciding what to say. And it's probably more like 50/50. And so the one of the big unlocks for Sierra agents was
52:21
deciding to think about not only how to parallelize a task, but how to parallelize thinking, listening, and
52:28
talking. So that when I'm listening, I'm already thinking about what I might say next. when I'm talking I'm listening for
52:35
interruptions and so that was a big unlock uh in terms of the product design. The other one I would say is
52:40
just modularity. Like I said earlier, um no one is the best at everything in this space. And when there are you know 100
52:47
plus languages uh worldwide that you know really deliver meaningful results when many of our customers are global
52:53
brands, global companies, you need that flexibility to use one provider here and another provider there and to ensemble
53:01
them together in a specific place as well. How much of that modularity and
53:06
that parallelism and thinking about different things goes away when it's like a a native voicetooice model?
53:13
In one specific conversation, it goes away. But if you think about the
53:19
businesses we serve, the voicetovoice models today are just reaching a level of reliability where you would trust
53:26
them for English. And so if you still want to support all the different languages, you need that modularity for
53:32
the foreseeable future. Um the other thing is they're still almost an order
53:37
of magnitude more expensive. They aren't quite as good at reasoning yet. And so
53:42
the cases where they are live in production, they're not quite as reliable with tool calling and instruction following. the cases where
53:48
they're live in production, it's cases where we know in advance that the journey is a little bit simpler and
53:54
where the naturalism matters even more than usual and the procedure is not as
54:01
complex as some other cases and so it's still I would say a fraction of our
54:06
market that we can use voicetooice models for. My perception also and I I
54:11
have never built a voice agent so I know truly nothing here but my perception here is for the voicetovoice models you
54:17
you probably you have less control over what goes on inside of the loop basically of of tool calling and
54:22
reasoning is that correct or are there pretty good controls for for what happens inside you may not have built a
54:28
voice model but you're an expert in developer ergonomics and I would say early on the APIs miss the mark on the
54:37
ergonomics and so they got the uh integration points wrong and they were
54:42
it was exactly what you said. It was hey if you want our model you need our voice activity detection and you need the
54:48
whole thing. There was still an underlying model that was available. So I'm you know dating myself in AI but the
54:54
GPT40 audio model was extremely exciting. It did things that no model
55:00
before it could do. I think maybe like people that are real AI OGs would say this about like GPT2 or something. And
55:07
so you could see that this was coming and I think we all would have said 5 years from now this is where we're going to be. But the way that we wired that up
55:15
in our system was basically using the entire Sierra pipeline and then holding
55:22
on to the input audio and piping that in with all of the prompt context into the
55:29
audio model to do the last mile. So we were basically still doing everything ourselves and using it for the last
55:34
mile. I think you're right that over time there's more and more that you can do with the audio model the same way
55:40
there's more that you can do with the text models. The fallacy would be that okay so then you don't need the harness
55:46
or you don't need all of the orchestration and simulations and everything because you can make that
55:52
choice. you can either do the same thing a little bit uh more easily or you can set your sights on new and more
55:59
impressive things which I think not to get too philosophical but that's kind of the direction of the industry in
56:04
general. It's like or are we all obsolete or are we going to find new things to do that raise our horizons uh
When voice-to-voice passes 50%: the over/under
56:11
even farther? If you had to guesstimate a time we're big into guesstimating on the podcast apparently. Um when do you when do you
56:18
think more than 50% of your either traffic or customers will be served by a
56:23
voicetooice model as opposed to this this uh speech to text text to speech pipeline? I will be surprised if it happens in the
56:30
next 18 months. I've been surprised before. I was surprised by Opus 4.5
56:36
uh late last year. Um certainly surprised by Chat GBT. like vividly remember the first time staying up till
56:42
3:00 a.m. just, you know, trying to jailbreak the prompt. [laughter] And so,
56:48
you know, I I know you're a sports fan, too. So, if we're doing overunders, it would be like 24 months in one day or
56:56
something like that, you know, like or over under 24 months would be probably my my personal guess. Demation.
Making memory a first-class primitive
57:04
How, if at all, do you guys think about memory? Uh, specifically long-term memory specifically. It sounds like
57:09
you've got users potentially interacting with multiple different agents that you're you're that a single brand can
57:15
can be building. How do you think about the memory that's shared uh across them? Memory is very important to the
57:20
platform. So I mentioned the agent data platform earlier which kind of brings together
57:27
u machine learning data or you know big data as you might say about uh about
57:32
customers and then marries that with uh in the- moment context. that can only
57:37
happen if you have a sense of identity and can also bring in uh memory from the
57:43
past. So in every Sierra conversation there's the possibility of uh
57:49
identifying the customer saving memories either uh implicitly automatically or
57:54
explicitly and then extracting those memories at a future date for use in the agent. So it's very much first class
58:01
primitive on the platform. I think you'll see that happen more and more over time as well, just as these
58:07
journeys get more complex, as we see more and more wins from the personal touch. We already have a number of cases
58:13
where resolution rate has gone up meaningfully from memory, whether it's just greeting you by name, remembering
58:20
what you called about last time, knowing that yesterday you were on the phone for an hour and it was really frustrating.
58:26
And so uh early on we had that memory through uh customer systems only but we
58:32
found just from customers asking over and over hey can you just have this first class on the platform that it's
58:37
helpful to have both seamless integrations with a CRM as well as on platform memory that really understands
58:44
AI better than most uh CRM software does. How do you guys think about memory? I
58:49
feel like you've got agents, multiple agents interacting with customers throughout various stages of their
58:56
buying experience life cycle. So I imagine memory must be important. How how do you guys think about it?
59:01
So memory is extremely important to the platform and since the agent data platform introduction which we launched
59:07
back in early November, it's been a first class primitive on Sierra. So, if
59:13
you call, for example, uh my wife lived in Hawaii for a year and so I was flying Hawaiian Airlines back and forth quite a
59:20
bit and on a couple occasions, um for anyone who's brought a dog to Hawaii, there's a lot of paperwork involved. I'm
59:26
excited for the Sierra agent that can help with that. But I would often add a pet in cabin, not that often, a couple
59:32
times. And if I call back, you know, it's nice for them to remember why I'm calling, to know about me, to know I
59:38
prefer aisle seats. I'm a big user of the uh in-flight internet. Hawaiian has
59:44
Starlink back and forth from Hawaii. And so uh these things just what we've seen
59:49
in practice is that if you know who someone is, you greet them by name, you remember what's important to them and
59:55
you show empathy in the moment, it increases all of the metrics that are most important to businesses from
1:00:01
resolution rate to conversion rate, etc. And so we've made memory first class on
1:00:07
the Sierra platform where during a conversation implicitly or explicitly you can basically store memories and
1:00:14
then uh the agent if the same person calls back can extract those memories.
1:00:19
The one thing to be aware of is you have to be really thoughtful about authentication because oftentimes if
1:00:26
someone calls over the phone, you don't necessarily know 100% from their phone number that it is this person. You know,
1:00:33
some office networks all have the same phone number, maybe it's a family line, etc. And so, every business has to think
1:00:40
about what the policy is for allowing the extraction of memories and which memories are sensitive versus not so
1:00:47
sensitive. saying, "Hey, Harrison, thanks for calling again." You know, that's probably fine. But if it's like,
1:00:52
"Hey, Harrison, are you calling about your social security number?" You know, that's like a definitely a different standard. Um, and so we try to be very
1:00:59
thoughtful about that with our customers as well. When you say you can implicitly or explicitly save memories, what exactly
1:01:06
does that mean? So there's kind of three layers of it. Number one is on a given conversation
1:01:11
turn, you could say, I want to save this to memory. Number two would be at the beginning of a conversation, you could
1:01:17
say, "These are the things that are important to remember." You know, remember their birthday. That's always
1:01:22
nice. Uh I remember Cold Stone Crearyy growing up. They would give you a free scoop on your birthday. You know, it's a
1:01:28
great opportunity for brand. You say you could say, so would the brand say, would the customer say this
1:01:34
in the system prompt or would this be the end customer talking to the agent saying, "Hey, remember for future things
1:01:40
that my birthday is on XYZ?" So the first one you said would be an example of journey building. An example of what
1:01:46
I just said and you would do it in journey building. You'd say I care about birthdays as an agent developer or an
1:01:51
agent builder at any one of our customer companies. The second thing you said would be the third category of memory
1:01:56
which would be just sort of remember important things and it would be an important thing if the customer said hey
1:02:02
I want you to remember this when I call back in the future. Um so whether you're deciding something in the moment this is
1:02:07
important as an agent builder I care about these things or you know let the agent decide uh those are kind of three
1:02:14
ways to structure u memory storage and when you think about the structure of memory itself do you guys think about
1:02:20
it as a knowledge graph a vector store a file system TBD it's not super important um I guess I
1:02:28
would say you want to optimize around retrieval but the reason why I said it's not super important is that typically
1:02:34
your knowledge base is three orders of magnitude larger than the memories for an individual customer and so the
1:02:42
retrieval and ranking problem is pretty simple and I don't think it matters what structure you use at least in our system
Why there's no breakout memory company
1:02:48
today. I feel like memory is this really hot topic and everyone loves to talk about it and and there have been memory
1:02:54
startups now for like 2 years but but I don't see any of them being massive
1:03:00
breakout success. Why is that? Is is memory not that important in the grand scheme of things? Is it so bespoke? Is
1:03:07
it just too early on? Is it is it really hard? Like why why isn't there a more established memory company or memory
1:03:14
pattern? Do you have it turned on with Claude or Chat GBT? Not on purpose, although I think it is accidentally
1:03:19
and do you find it useful with your accidental turning it on? I don't really there. Okay. I ask because I would say that
1:03:26
those are useful to me. I think what I said earlier about how when you're trusting us with memory, you're trusting
1:03:31
us with authentication. That's part of it is that actually in order to pull off memory, you need to be trusted with
1:03:39
something that has higher risk, you know, as well. And so the reason I
1:03:44
mentioned ChachiBT and Claude is those are products that you are already
1:03:49
trusting. And so I think they have more freedom than a B2B player would have
1:03:54
where it's like, hey, if I want to buy memory from you, I also need to buy authentication or verification at least
1:04:01
or identification at least from you. And I don't know exactly what the startups are in the space, but I would imagine
1:04:08
like you're biting off more than you think when you sell memory. Talking about observability and evals for a bit,
1:04:15
you guys have an interesting problem I presume, where you have evals for your internal agents and for the maybe like
1:04:21
general purpose agent SDK, but then I'm assuming your customers want to do eval themselves as well. Are those the same?
1:04:26
Do you use the same tools for both or if they're different, why? And how are they different? Typically not exactly the same. So
1:04:34
internally um the agent OS you know if you think about it as a series of tasks
1:04:40
and some of those tasks might be very complex and some of those tasks might be more simple. The eval problem is more
1:04:47
similar to the eval problem that any applied AI company has. When you think about our customers, I think the eval
1:04:54
problem is much more complicated and involves things like what happens when
1:05:00
there's background noise in voice and uh what if I have an adversarial user and I
1:05:06
want to save these 20 personas and run all of my simulations against all 20 of the personas and make sure that it
1:05:12
works. And so you end up with just a more complicated topography because a
1:05:17
conversation by nature is very complicated and can go in so many different directions. And so we built a
1:05:23
product specifically for our customers to eval agents called simulations. And
1:05:28
it supports all of these different things. I think it is probably you can tell when someone's building an agent if
1:05:35
they have good simulations. It's such a great unlock because you can make changes in a way that is constantly
1:05:42
improving the agent and being sure that you're not regressing especially as you get into big teams with complex agents
1:05:48
that are doing so many things. I mean, I know you see this at Lang Chain as well, like having really good evals is such a
1:05:55
great unlock. And so, we pride ourselves in addition to, you know, government
1:06:00
governance and collaboration and review and making sure that, you know, you have workspaces so you can let ghostriter run
1:06:08
free, but still review it before you make any changes. We also have that uh
1:06:13
simulation layer so that every change you make is tested against all the assumptions of the platform across voice
1:06:18
and chat and many languages and many personas and this highdimensional space that you're going to experience in
1:06:24
production. Going out from evaluing
1:06:31
that also ties into memory I guess a little bit like how do how do you think about continual learning in general?
1:06:36
Does the Sierra platform support it in a fully I'm assuming not like completely automated way, but like how how far
1:06:44
along are you guys and and and what do you think the future in continual learning holds? Where we are today is you can
1:06:51
automatically detect an issue with the monitor. Ghostriter can automatically suggest a fix to an issue and you can
1:06:59
review that issue and push it to your agent. And so you're still in the loop
1:07:04
or people are still in the loop in all of the cases, but it's as automated as
1:07:10
it can be with still giving you authority over that. I think in the near future, you will start to see the first
1:07:16
cases of Sierra agents improving themselves where they have a confidence level to the fix. For example, if
1:07:24
there's an error in a knowledge article and it can tell that there's a contradiction and it can go check the website and you know, for whatever
1:07:30
reason, it's very clear what the true answer is, it could it could give you an FYI instead of needing approval. Same
1:07:37
way I do some work, I ask for approval, I do some other work, I give FYI. And so all of the primitives are there. It's
1:07:43
just around the confidence that people have and the level of control that they want to have. And so we also don't want
1:07:50
to get ahead of our skis there. Most of our customers, they want to review every change that goes into the agent. This is
1:07:55
a really important part of their business. We don't want to pull the future forward too quickly. Um, we want
1:08:00
to move at the pace our customers are excited about. One of the things you mentioned going back to Evals is monitors. What are
Why the solution to all AI problems "is more AI"
1:08:07
monitors? And then you guys also wrote a blog called monitoring the monitors or something like that. Would be curious to hear about that.
1:08:12
Yeah, we have a saying in the company that the solution to all problems with AI is more AI. And so oftentimes you
1:08:18
have something that's 90% accurate and you figure out how to verify it 90% of the time. Figure out how to verify that
1:08:25
90% of the time and and so on and so on and you have something that's you know three or four nines of reliability. And
1:08:32
I think with non-deterministic systems that's just quite a bit about how it works. And so similarly uh with a
1:08:39
conversation platform you can set up monitors that run on every conversation
1:08:44
and look out for the things that you want to flag either for review or to
1:08:49
create issues from uh etc. And it just basically gives you peace of mind narrows the set of hey I don't have to
1:08:56
wake up every morning and try to read 10,000 conversations. I can read five and I can say okay these five look good.
1:09:02
I feel comfortable uh going on with my day. Um, and so that frees up a lot of our customers to think about how do I
1:09:09
actually improve customer satisfaction or resolution rate or some of these more strategic levers as opposed to feeling
1:09:16
like they need to review everything. So I think that's why it's one of our more uh popular features.
Why Sierra open-sources the tau-bench universe
1:09:21
You guys released Talbench which is an eval for a few different agent uh use
1:09:28
cases and I think you released a few other benches as well. Why do you guys invest in these and why should people
1:09:33
check them out? So I mentioned we have a research team and it's very exciting when you're
1:09:39
building something to also think about how other people could use it. I mean the distance that the AI space has come
1:09:47
and how we've benefited just from all of the contributions to open source. You
1:09:52
know our knowledge engine as as I mentioned runs on open models that we've fine-tuned. It has felt like one of the
1:09:59
areas where we can contribute because we actually know a lot about what it takes
1:10:04
to build a good voice agent. I don't think anyone knows more than we do. We know a lot about knowledge retrieval. We
1:10:10
know a lot about tool calling and uh following process. Um and we know a lot about transcription. Um and so we've
1:10:17
released I think those are the four areas. There might be another one where we've released benchmarks in the sort of
1:10:23
tow cinematic universe. There's uh tow voice, tow knowledge, ta bbench, and muuben, which is the multilingual
1:10:29
transcription benchmark. And so it really just started because the first tow bench was a lot more popular than we
1:10:36
expected. And we're like, oh, people trust us to kind of say what good looks like in this space. And so we've
1:10:42
continued to do more and more. And our research team has grown and there's appetite. I think it also has this ancillary benefit of causing us to think
1:10:49
about these problems in a very principled way. and you know from kind of the first principles of what goods
1:10:55
looks like and then we can evaluate our agents that way as well. So I think it has that benefit but it is very path
1:11:01
dependent on TAB bench being a hit and you know TA squared being the SQL being
1:11:07
a hit as well and then us just deciding okay let's do more of this uh people seem to like it. How much does the core agent team use
1:11:15
these to guide their harness choices? Most of the benchmarks we use to evaluate providers
1:11:22
uh more than to evaluate agents. And so for example, we had there's a really
1:11:27
exciting new transcription model. They came by the office and presented it to us. Um and so we were able to say this
1:11:34
looks really exciting, but we'd like you to run it against Mubench and then it will be really exciting. Um, and so it
1:11:40
really helps in the modular approach that we've taken. Like the reason we discover that this model works really
1:11:48
well when there's silence in Northern United Kingdom, but this other model works really well when there's speech is
1:11:54
because of things like MUBench in particular for that one. Internally, simulations is the main way that we uh
1:12:01
eval the actual agents that are going out to production. So it's just too customer specific for us to rely on
1:12:08
something as general as a benchmark. How do you create these benchmarks? Are they synthetically generated? Do you do
1:12:13
a lot of data labeling internally? Outsource it? I think it's a mix of all three. Um I
1:12:19
don't know all of the details for all of the benchmarks, but I know that we uh do
1:12:25
a lot of stuff internally uh just in terms of especially when you're kind of in the 0ero to one phase just figuring
1:12:32
out what the right shape of the data is. Even when you work with external companies, they often want to see some
1:12:37
number of examples from you. And then I think also uh being able to synthesize data when scale matters a lot especially
1:12:45
if you can do it in a reliable way is very helpful too. It's harder for something like transcription where audio
1:12:53
synthesis might be you know already in the training set of the transcription and that kind of thing. Um but for
1:12:58
things like text I think it's easier. One of the things I think is pretty underrated in building agents is UX. So
1:13:04
we've already talked about voice as a modality. We've talked about actually showing up as a chat GPT app. How else
1:13:10
do you guys think about modalities or UX's? Do you have you experimented with generative UI in any form? We have quite
1:13:17
a bit. I think it's pretty vertical dependent as well. To give you an example, when you're checking in for a
1:13:24
flight, if you have a hypothetically 12letter last name with a hyphen in the
1:13:29
middle of it, and a first name that's hard to spell as well, hypothetically, then it might be helpful to type that in
1:13:37
while you're on the phone. And so, we see in industries like airlines appetite for multimodal experiences, especially
1:13:44
when there's a lot of reservation, retrieval, or input. For something like retail, we see exactly what you
1:13:51
described where really polished UI around product discovery and around recommendation moves the needle and
1:13:57
makes a difference. I think where Sierra is particularly differentiated is going
1:14:02
really deep with customers, especially in specific areas, and learning, you
1:14:08
know, what does it mean to build an amazing retail discovery experience? And
1:14:13
then just from first principles, what's the agent that could help drive that versus what does it mean to build a
1:14:19
great airline check-in experience or flight disruption experience? Um, to the
1:14:25
degree that can be great, it can be not terrible, I guess. Then, you know, what's the right form factor for that?
1:14:31
We've seen, and I think one of the reasons vertical companies have been pretty successful lately is that
1:14:38
understanding the contours of each industry and each company really makes a difference. One of the things that I
How outcome-based pricing aligns incentives
1:14:44
think you guys are actually best known for is your revenue model and charging for outcomebased pricing. How do you
1:14:50
actually do that? How do you estimate the the value that an interaction has and is it specific to each customer?
1:14:56
This I think is maybe the number one operational reason or business reason
1:15:02
why Sierra has been successful. It aligns the incentives between
1:15:07
our company and our customers. And I think the phrase I like to use, which is a little bit cheeky probably, is if you
1:15:15
don't understand the value of outcomebased pricing, your outcomes are probably not that valuable. Because when
1:15:21
you're delivering, you know, $100 outcomes and you get to keep a portion
1:15:26
of it, everyone wants to row in the same direction. and it cuts through all of
1:15:32
the prioritization and decision-m that often will cloud and resource allocation that often will will cloud enterprise
1:15:38
partnerships. So, it's extremely valuable and I think it's a big reason why we've been successful. I think it will just become the norm for companies
1:15:46
that are doing differentiated highval activities. If your product really like
1:15:51
feels a little bit more like a commodity, you'll start to see more usage based and seatbased pricing
1:15:58
because it's just simpler. An area for example, knowledge based lookups are a
1:16:03
little bit more that way, just question answering. And so in the case of
1:16:08
question answering, that's not an area where you would have a high premium for an outcome of any particular sort. But
1:16:15
if it's making a sale on a membership or, you know, selling someone a car, that's a really big outcome. Um, and so
1:16:22
companies will be more than happy to pay for that. Uh, I think where we're seeing things going is intra conversation
1:16:30
outcomes to also thinking about more, you know, as I mentioned, kind of the moments that matter across the customer
1:16:36
life cycle and driving outcomes on top of our agent data platform that kind of
1:16:41
span that whole life cycle. I think that's particularly interesting. You guys support multiple different
1:16:47
outcomes. So, you've got customer support and you've got sales. How different is the pricing between those
1:16:52
and how many different of these like categories or templates do you guys end up having? It really depends on the value. So, you
1:16:58
asked if it was customer specific. The answer ends up being that it sort of has to be. In certain cases, you are
1:17:06
troubleshooting very complex setup to a device or something and you have to try
1:17:12
15 different things to get it to work and the average conversation might take 20 turns and the amount of, you know,
1:17:18
context engineering to make that work might be very high. In other cases, you might have something where, you know,
1:17:24
you're just resetting the signal on your TV and it's very quick and easy or you're checking your balance with the
1:17:30
bank. Um, and that's very easy. And so, you know, one outcome is very valuable
1:17:36
and drives a lot of loyalty and one outcome is somewhat commoditized. You might have some cases where there's, you
1:17:43
know, an outcome that's tens of dollars, uh, and in terms of the, you know, money
1:17:49
that the agent would earn. Uh, and then you might have some cases where it's, you know, much much lower than that.
1:17:54
And does that ever differ within a customer? So, like in your example, I
1:18:00
could imagine you you could have an agent doing a really simple task of, oh, tell them to unplug the computer and
1:18:05
plug it back in or something like that. And there's another one where like, oh my god, who knows what's going wrong. And it and it like is a miracle that it
1:18:11
solves it at all. If it's the same customer, will it be charged the same amount or do you differentiate even
1:18:17
within those different types of requests? There are cases where we differentiate. We're not dogmatic about it. What we
1:18:24
found is that often times the benefits of having our incentives aligned are so
1:18:31
high that it's not worth negotiating every detail of what counts for what and
1:18:38
it kind of evens out over time and you do right by your customers over time and
1:18:43
you build trust and contracts aren't infinite and you want to have a really high uh renewal rate and have them trust
1:18:49
you with more use cases and these kinds of things. So we make sure that incentives are deeply aligned. Um and
1:18:55
then on top of that, I think you can get really pedantic about the engineering of specific outcomes and maybe over time
1:19:03
the market will move in that direction, but I think you're missing the forest for the trees in that case because of
1:19:09
just how powerful the concept is. And so most of our customers are eager to find something simple that we all understand
1:19:15
that feels fair as opposed to trying to engineer like the perfect uh value for the for each outcome. Why don't you
1:19:21
think there's more outcomebased pricing right now? Is it because there's not enough agents doing valuable things or
1:19:27
because it's so operationally intensive for now because it's early on that you guys have just a builtup muscle of doing
1:19:33
it and that's what allows you guys to do it so effectively? I think it's probably a bit of both. I think that there are a lot of products
1:19:40
that probably as models have improved find themselves in a position of being more
1:19:47
similar to what you could just buy uh tokens and create. And then also there's
1:19:53
just we're very early here. Um if I had to say though, I would guess that the
1:19:58
second one is more important and there will be a lot more of this. the same way
1:20:04
someone doesn't care how many hours I work as long as I produce you know new
1:20:10
products uh that are good and I think that that will become true of agents as
1:20:15
well. There will be a mix of building agents in house on platforms like Langraph and then there will be also uh
1:20:23
you know buying uh products like Sierra to build agents on. Maybe switching to the last topic which
Who thrives as a forward-deployed agent builder
1:20:29
is just the type of people that thrive at Sierra. I think you guys are also pretty famously known for your for
1:20:35
deployed engineering or agent builder approach. Could you talk a little bit about that both in terms of what those
1:20:40
people do as well as the right persona to grow into that role? I joined Sierra about 2 and a half years
1:20:46
ago and it was my first B2B job ever. I'd only worked in consumer products and
1:20:51
I love building consumer products. I love being like, oh, I could imagine, you know, my friends using this or my
1:20:56
parents using this. But I never really loved growth uh and the idea of figuring
1:21:02
out how to drive a couple percentage points of attention or a couple
1:21:07
percentage points of usage. And what I learned when I joined Sierra is I love enterprise sales. Uh [laughter]
1:21:16
I got a tattoo. Um so basically the the process of caring about each customer
1:21:22
individually saying one customer is upset. I'm gonna call them right now and find out why and see how I can help.
1:21:29
Just felt very empowering as a builder in a way where building for a billion
1:21:35
users on Google search for example, you know, it was exciting in other ways, but it didn't feel like you could listen to
1:21:41
each user and help them. And in many cases, we have customers of Sierra that have, you know, gotten promoted in their
1:21:47
organizations. They're building careers uh because of the agents that they've built on Sierra. And so it's just feels
1:21:53
very deep in terms of those relationships. What I love as well though is that the end user of a Sierra
1:21:59
agent is still a consumer in the vast majority of cases. And I think it's pretty rare to have a product that needs
1:22:05
to be consumer grade where the product that you're building, it's a it's a
1:22:10
platform, but then the end user is really a consumer and you have to have them in your mind the whole time. but where you have kind of the enterprise
The Formula One analogy: why product is the bottleneck
1:22:17
sales process of building trust, of solving problems, of discovering value,
1:22:23
and then delivering that value for people. Um, and so I think the people that really appreciate those two things,
1:22:29
the customer obsession and the craftsmanship, uh, do very well. I think
1:22:35
we've also discovered just with the rise of coding agents, certain things are
1:22:40
more important than they used to be. deep customer intuition. GPT 5.5 doesn't really have that. Um agency, the ability
1:22:48
to say why can't I do this? Um one of our uh engineers that has really high degree of agency, her status message is
1:22:55
just like why not today? Um and so having that mindset I think is really
1:23:01
important. And then the other thing just as someone with a product background is I think we kind of have a faster car
1:23:09
then you need more pit stops kind of thing. So like a a Formula 1 car needs to get its tires changed more often than
1:23:15
my Hyundai Kona. Uh and the reason for that is you know it's driving faster, it's burning more rubber, uh etc. And I
1:23:23
think we have a similar thing building products as well now where coding agents have allowed us to write code a lot
1:23:29
faster and even to review it faster now. But certain things like product judgment and customer intuition are therefore
1:23:36
actually needed more often, not less often. And so, uh, people that can bring that to the table themselves are in this
1:23:44
amazing loop of moving fast, but people where it's one person's job to bring
1:23:49
that and another person's job to do engineering. They need even tighter collaboration and, you know, more daily
1:23:55
standups and that kind of thing to be successful. I really like that car analogy. I hadn't heard that before and totally resonates
1:24:01
with what what what I'm seeing where product is becoming the bottleneck because it's so easy to code and you can
1:24:06
make so much of things, but that doesn't mean you should. Who ends up fitting this agent builder profile the best? Is
1:24:12
this product people then? Is this engineers with good product intuition? Like what does it look like practically?
1:24:17
We're still figuring it out. I will say that people that have done both roles
1:24:23
are often successful in the company. Our head of engineering, Arya, has been a product manager in the past. We have a
1:24:28
number of engineers that have been product managers. I think those skills, knowing how to talk to customers, not
1:24:36
just like what to say when you're in front of a customer, but how to find your way into the right conversations,
1:24:41
having a high degree of agency, being really strong with communication so that you're getting, you know, product isn't
1:24:47
the bottleneck anymore. Uh those are really important skills. I still think kind of knowing the right questions to
1:24:54
ask and the right things to tell coding agents is really important. So the systems thinking and the architecture
1:24:59
design are really important and so if you have not been an engineer before uh
1:25:05
it can be difficult and so I I think that the multidisciplinary approach is more important than ever. My own
1:25:12
personal rubric, which is like very much in beta, is kind of this customer intuition,
1:25:18
agency, product judgment, technical depth, communication, intensity, because
1:25:26
when the car, you know, you need to be really locked in when you're driving a Formula 1 car. Um, and then one which is
1:25:32
a little harder to pin down, but is just kind of leadership where when there's more activity going on, the ability to
1:25:38
to draw it into the correct direction is really important as well. So, this is kind of the working framework in my
1:25:45
head. Um, but I'm sure there are lots of other things, too. How do you interview for agency? And I
How Sierra interviews for agency
1:25:50
asked this because I think the the guest we had on in the previous episode said the exact same word, agency, for one of
1:25:57
the traits that they look at, and I asked him the same question. So, now I'm going to ask you the same questions. How do you how do you interview for agency?
1:26:02
So the most concrete way that we've changed our interviewing process is we have this AI native interview
1:26:08
and you wrote a great blog on it the other week. Yes. And so you by the way Vijay and
1:26:13
Arya and our uh engineering leaders but I've seen it done and participated in
1:26:18
the interview panels and basically it involves building a product end to end
1:26:24
over the course of a few hours and then reviewing it with a team. I think in that environment, you can see what
1:26:31
people think is offlimits or what's their job and what's not their job and how far they extend sort of what they're
1:26:37
allowed to do. And if they're able to find opportunities that you would have
1:26:43
thought, oh, maybe that they would think that's out of scope, bring them into scope and build build great products on top of it. You kind of see agency. You
1:26:50
see that they have a sense that a lot is in their control instead of feeling like certain things are not in their control.
1:26:56
And if you think about coding agents, they bring so much more into I think the
1:27:02
like the locus of control, right? And so you can do more things and if you appreciate that, I think it comes
1:27:09
through in that AI native interview. Thanks for listening to Max Agency. If you liked this episode, leave a review
1:27:15
and subscribe. Send feedback or questions to [music] Max Agency langchain.dev.
1:27:21
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

Rough metadata for Opus

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=uCKhOmth2ms
source_title: The best AI agents are simpler than you think
channel_or_org: LangChain / Max Agency
speaker: Zack Reneau-Wedeen, Head of Product at Sierra; interviewed by LangChain
published_at: Jun 18, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + description + pasted transcript
content_type: enterprise customer-facing agents / Sierra / customer lifecycle agents / agentic commerce / no-code agent building / Ghostwriter / Journeys DSL / Agent OS / Agent SDK / voice agents / modular voice architecture / agent memory / monitors / simulations / outcome-based pricing / MCP / agent-to-agent commerce
source_reliability_context: Long-form LangChain/Max Agency interview with Sierra’s Head of Product. Strong source for production customer-experience agents, especially lifecycle-spanning agents, no-code-to-code agent authoring, monolith-vs-multi-agent doctrine, voice latency/modularity, agentic commerce, memory/authentication, simulations/evals, and outcome-based pricing. Transcript-grounded. Use Sierra-specific implementation as product/architecture signal, not as mandatory OMNI infrastructure.
priority: 5/5
depth: architecture_spine / product_strategy_reference
recommended_status: route to Surface Map, AI Substrate, Agent Work Protocol, Customer/Patient Lifecycle Doctrine, Growth/Commerce Workspace, Voice Runtime, Memory Doctrine, Evaluation Framework, operating_metrics, and Business Model Strategy.

Topic tags:
[LangChain, Max_Agency, Sierra, Zack_Reneau_Wedeen, customer_experience_agents, agentic_commerce, customer_lifecycle_agents, Analyze_Build_Release, Ghostwriter, Journeys, Agent_OS, Agent_SDK, no_code_agent_builder, deterministic_compile_to_code, model_constellation, context_engineering, monolith_loyalist, multi_agent_trap, voice_agents, modular_voice_architecture, PCI_voice_payments, MCP, agent_to_agent, Agent_Data_Platform, Explorer, outcome_based_pricing, simulations, monitors, memory_authentication, agent_memory, Tau_bench, MUBench, forward_deployed_agent_builder]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 5/5
Depth: architecture spine / product strategy reference
Recommended status: route to Surface Map / AI Substrate / Agent Work Protocol / Voice Runtime / Memory Doctrine / Evaluation Framework / Commerce / operating_metrics / Business Model Strategy.

Core takeaway

This is one of the strongest “agents in the real enterprise” sources because Sierra is not describing one agent. They are describing a platform for customer-facing agents across the full customer lifecycle: browsing, booking, sales, service, loyalty, cancellation, retention, and commerce. Sierra explicitly says it is not just customer support; the company thinks of itself as a full engagement platform across all moments that matter for customers.

The key OMNI translation:

The agent is not the channel. The agent is a governed lifecycle surface that can appear in chat, voice, app, web, personal-agent ecosystems, and commerce flows — but the underlying platform must preserve context, authority, memory, evals, releases, and outcomes.

This source is especially useful because it repeatedly rejects naive patterns: raw text-only no-code, premature multi-agent architecture, memory without authentication, voice without modularity, and agentic commerce without payments/security rails.

Key concepts to preserve
1. Customer lifecycle, not support ticket

Sierra starts with customer support because that is where enterprise buyers often start, but the product vision is broader: agents across browsing, booking, choosing seats, adding pets, handling delays/cancellations, baggage, sales, service, and loyalty.

OMNI keeper:

For OMNI, do not think of agents as isolated “chat support.”

Think lifecycle:

acquisition
intake
eligibility
scheduling
visit/service
payment
fulfillment
follow-up
refill/reorder
retention
reactivation
escalation

Doctrine candidate:

Lifecycle agents are more valuable than support agents because they span moments that matter.

2. Analyze → Build → Release as operating loop

Sierra’s product has three major sections: Analyze, Build, and Release. Analyze includes deep-research-like exploration of customer conversations, reports, and monitors. Build includes Ghostwriter, Journeys, variables, and SOP-like behavior. Release includes collaboration, change management, governance, review, and enterprise procedures.

After the agent is live, the daily loop starts with analysis: optimize resolution rate, CSAT, sales conversion, or another target metric; identify issues/opportunities; then Ghostwriter can suggest improvements to close the loop.

OMNI keeper:

This is a clean product loop:

Analyze → Build → Release → Monitor → Improve → Release

For OMNI, this maps directly to Build-OS and operating_metrics.

Doctrine candidate:

Agent platforms need a release loop, not just an authoring surface.

3. Domain operators must be able to build

Sierra’s builders are often the people with the most depth about the ideal customer experience: customer experience managers, operations people, knowledge-base owners, SOP owners, and sometimes engineers. Sierra’s goal is to remove barriers between the people with the most context and their ability to contribute directly.

OMNI translation:

The OMNI builder should not only be an engineer.

For OMNI, the builder personas include:

physician/operator
medspa ops manager
billing owner
MA/front desk lead
compliance/privacy owner
care coordinator
product/engineering hybrid

Doctrine candidate:

The people closest to the workflow must be able to shape the agent without becoming software engineers.

4. No-code must compile to something deterministic

Sierra’s no-code layer is called Journeys. It compiles down to Agent SDK code deterministically and “isomorphically,” meaning no-code can become code and code can become no-code without semantic loss. The no-code language is declarative: how the agent should behave, conditions to unlock, and flows to follow.

They explicitly reject pure raw text because it either compiles nondeterministically or becomes prompt engineering, which moves ownership back to engineering teams instead of operations teams.

OMNI keeper:

This is major.

OMNI should not treat “no-code” as unstructured text.

Potential primitive:

deterministic_no_code_compile

A domain-friendly authoring layer that compiles into governed executable agent policy/workflow artifacts.

Doctrine candidate:

No-code agent building must compile into reviewable, deterministic artifacts.

5. Meet models on their turf 80% of the time

Sierra distinguishes between two strategies: reframe the problem into abstractions models are already good at, or invest in teaching models your custom abstraction. Zack’s heuristic is that 80% of the time you should meet models on their turf, using structures like file systems, Git, and familiar coding-agent patterns; reserve custom model education for special cases.

OMNI keeper:

This directly affects Build-OS architecture.

Use model-native structures when possible:

files
diffs
markdown
Git-like versions
tests
folders
manifests
structured specs

Only invent custom abstractions when they are truly worth the teaching cost.

Doctrine candidate:

Prefer model-native work surfaces unless the domain abstraction is strategically necessary.

6. Reinvent the harness as models improve

Sierra has reinvented its Agent SDK multiple times as models improved. Earlier systems needed more deterministic guardrails; now more reasoning can happen at each step, shifting the reliability-versus-reasoning frontier.

OMNI keeper:

The substrate must evolve with model capability.

Hard-coded flows may become over-constraining.
Loose reasoning may still be unsafe.
The right boundary moves over time.

Doctrine candidate:

The agent harness must be versioned because model capability changes the optimal control boundary.

7. Latency changes the harness

Sierra says the constraint Claude Code does not have is latency. Most Sierra conversations are voice; if the system does not respond in one or two seconds, users wonder where it went. That forces parallelism and a different architecture than a long-running coding agent.

OMNI translation:

Different lanes need different harnesses.

provider chart review can be slower
voice patient intake must be fast
billing reconciliation can run async
safety-critical escalation must be immediate
Build-OS source review can run deep

Doctrine candidate:

Harness architecture is lane-specific: latency, risk, and user tolerance determine runtime shape.

8. API calls still beat MCP when the counterparty is known

For agent-to-agent communication, Sierra most commonly uses API calls. If you know who you are talking to in advance, APIs can save tokens and improve accuracy. Sierra still supports MCP and agent-to-agent protocols, but does not treat them as always superior.

OMNI keeper:

MCP is not magic. It is one integration mode.

For OMNI:

use direct API when target/tool is known and stable
use MCP/agent protocols when discovery/composability matters
always preserve auth, audit, and tool policy

Doctrine candidate:

Use the simplest reliable integration contract; protocol novelty is not architecture quality.

9. Agentic commerce may be bigger than e-commerce

Zack argues agentic commerce will be bigger than e-commerce because people will ask personal agents to manage subscriptions, order supplies, make reservations, and complete commercial tasks. Brands need to be ready on the other side of that agent-to-agent interaction.

Sierra expects much of this behavior to come from personal agents like ChatGPT, Claude, or Codex interacting with brand agents, not only users visiting brand websites.

OMNI keeper:

OMNI should prepare for patient/customer agents, not just human users.

Future flows may include:

personal agent asking OMNI about appointment availability
patient agent managing subscription/membership
payer/employer agent checking eligibility
brand/clinic agent negotiating service/refill/follow-up
external assistant invoking OMNI MCP/API surface

Doctrine candidate:

Businesses will need brand agents that can serve both humans and other agents.

10. Payments/security must be isolated from LLMs

Sierra built PCI DSS Level 1 voice payments with isolated infrastructure because payment information should not go to external LLM providers that are not PCI certified in that way.

OMNI translation:

This is directly relevant to D6 Commerce and PHI.

For OMNI:

payment card data should not enter LLM context
PHI access must be scoped
sensitive identifiers need redaction/tokenization
LLMs should not see secrets unnecessarily
tool paths need compliance-specific isolation

Doctrine candidate:

Sensitive transaction rails must be isolated from general LLM reasoning.

11. Parallelism is everywhere in production voice

Sierra runs many things in parallel: knowledge lookup before knowing whether it is needed, classification while responding, and transcription model ensembling. For some accents/languages, one transcription model may be best for speech but hallucinate silence, so Sierra runs models in parallel and chooses outputs based on specific logic.

OMNI keeper:

Voice runtime is not one LLM call.

It is a parallel system:

listening
silence detection
transcription
classification
retrieval
response planning
tool execution
interim responses
synthesis

Doctrine candidate:

Low-latency voice agents require speculative and parallel execution across the pipeline.

12. Build in-house only where you push the frontier

Sierra builds in-house models when they are hitting limits that block customer value, such as knowledge retrieval/reranking. They do not try to compete with frontier labs on giant general models.

OMNI keeper:

This is a mature build-vs-buy rule.

For OMNI:

buy frontier reasoning
build domain retrieval/eval/harness/context where it creates differentiation
fine-tune only when workflow value and data governance justify it

Doctrine candidate:

Build models only where domain leverage exceeds frontier-lab advantage.

13. Agent Data Platform: structured data + conversational context

Sierra’s Agent Data Platform combines structured customer data with the unstructured “here and now” of conversation to generate better conversations and orchestration. Structured data may know the right offer; LLMs know how to present it naturally in the moment.

OMNI translation:

This is exactly OMNI’s projection strategy:

canonical structured data + live conversation context + policy + memory → next best action

For OMNI:

membership status + patient message
prior service + current intent
benefit ledger + offer
medical eligibility + intake answer
refill cadence + current symptom report

Doctrine candidate:

The best agent action comes from structured state plus in-the-moment conversational context.

14. Explorer + Ghostwriter = analysis agent and authoring agent

Sierra’s Explorer is like deep research over all customer conversations and Sierra data. It can answer why resolution dipped or how to generate more sales, and can run automations. It partners with Ghostwriter, the authoring agent, which suggests fixes. Sierra sees these converging into a shared harness expert at using Agent Studio.

OMNI keeper:

This is a clean pattern:

analysis_agent → authoring_agent → release_review

For OMNI Build-OS:

Explorer: find issues/opportunities from traces/metrics
Ghostwriter: propose workflow/prompt/policy changes
Release: human/domain review and deploy

Doctrine candidate:

Separate analysis from authoring, then reunify through governed release.

15. Model-agnostic hill-climbing needs evals

Sierra can move between models of comparable intelligence because they have evals and a harness. Often the first attempt to switch models reveals the eval was not as good as expected, so the eval improves. The tradeoff becomes latency, quality, and cost.

OMNI keeper:

Model agility depends on eval maturity.

Doctrine candidate:

You are not model-agnostic until your evals are strong enough to survive model switching.

16. Context engineering = everything needed, nothing more

Zack defines context engineering as showing agents everything they need to do the right thing, but nothing more. He also names progressive disclosure: do not bring context into the prompt before it is relevant, and be careful not to yank it out in a lossy way that creates incoherence. Many hallucinations come from conflicting prompt/context layers.

OMNI keeper:

This is spine-level.

For OMNI:

avoid overstuffed context packets
use progressive disclosure by workflow state
avoid conflicting instructions across system/user/memory/tool layers
preserve coherent context when compacting
make context ownership explicit

Doctrine candidate:

Context quality is coherence plus timing, not maximal inclusion.

17. Quality beats prompt-cache loyalty

Sierra does not invalidate prompt cache without reason, but quality comes first. If outcomes are valuable enough, the system can afford to spend more to get them right.

OMNI keeper:

Cost matters, but not evenly.

For high-value/high-risk workflows:

prioritize quality
use better model/context
break cache when needed
spend tokens when outcome value justifies it

Doctrine candidate:

Cache discipline is subordinate to outcome quality in high-value lanes.

18. RL/fine-tuning is useful but limited by regurgitation, agility, and frontier speed

Sierra has explored RL/fine-tuning. It can help raise quality or move tasks to cheaper/open models, but they avoid fine-tuning where regurgitation risk is unacceptable, and frontier models improve so fast that RL may be a rounding error unless Sierra is pushing state of the art in a specific area. Multi-provider support is also driven by capacity and resilience, especially for Black Friday/Cyber Monday spikes.

OMNI keeper:

Fine-tuning/RL is not default.

Doctrine candidate:

Adapt models only when the data, risk, cost, capacity, and frontier-change horizon justify it.

19. Multi-agent systems are often a trap

This is one of the best parts of the source.

Zack says multi-agent systems are often less useful than people think. If you split agents because teams map to agents, you are shipping your org chart. If you split because it feels comfortable, you may degrade quality. A triage/task split can deprive the task agent of triage context and deprive triage of task procedural knowledge. Sierra is “monolith loyalist”: one agent representing the brand, with excellent context engineering, unless jobs are truly separable.

OMNI translation:

This is a necessary counterweight to LangChain dynamic subagents.

OMNI should use subagents/workflows when task shape demands it, but not because “multi-agent” sounds advanced.

Doctrine candidate:

Split agents only when separation improves the work; do not ship the org chart.

20. Voice 101: latency, naturalism, multilingualism, thinking/listening/talking

Sierra’s voice doctrine: latency is obvious; progress indicators matter; naturalism depends on both content and voice quality; multilingual support is much harder than chat; transcription may need ensembling; and the big unlock is parallelizing thinking, listening, and talking.

Voice-to-voice models are promising but still expensive, less reliable for reasoning/tool calling, and only suitable for some simpler journeys where naturalism matters more than complex procedure.

OMNI keeper:

Voice architecture is not a temporary hack until native voice arrives. Modularity remains valuable.

Doctrine candidate:

Voice-native models reduce some plumbing but do not remove the need for orchestration, tools, evals, and modular fallback.

21. Memory requires identity and authentication

Sierra treats memory as a first-class primitive. During a conversation, agents can identify the customer, save memories implicitly or explicitly, and retrieve those memories later. Memory improves metrics by greeting users by name, remembering prior issues, or knowing preferences.

But Zack warns that over the phone, identity is uncertain: shared phone lines, family lines, office networks. Businesses must decide what memories can be extracted under which authentication standard, and which memories are sensitive.

OMNI keeper:

This is a major memory safety rule:

Memory retrieval requires identity confidence and sensitivity policy.

Doctrine candidate:

Memory is not just storage; memory is authenticated retrieval.

22. Three ways to save memory

Sierra describes three memory capture modes: save something on a given conversation turn; define in the journey what categories matter to remember; or let the customer explicitly ask the agent to remember something for future interactions.

OMNI translation:

OMNI should distinguish:

system/policy-directed memory
agent-detected candidate memory
user-explicit memory
domain-approved memory
sensitive memory requiring auth

Doctrine candidate:

Memory capture mode must be explicit because memory authority differs by source.

23. Why no breakout memory company: memory requires trust

Zack’s explanation is excellent: selling memory means you are also selling authentication, verification, or identification. Products like ChatGPT and Claude can do memory because users already trust them; a B2B memory startup may be biting off more than it thinks.

OMNI keeper:

This reinforces OMNI’s memory doctrine.

Doctrine candidate:

Memory products are trust products because retrieval changes behavior toward an identified person.

24. Simulations are customer-specific evals

Sierra distinguishes internal evals from customer-facing evals. Customer evals are more complicated because real conversations include background noise, adversarial users, personas, voice/chat/languages, and complex production topography. Sierra built Simulations so every change can be tested across this high-dimensional space before release.

OMNI keeper:

For OMNI, generic benchmarks are not enough.

Need simulations per lane:

patient persona
provider persona
staff persona
noisy voice call
adversarial prompt
multilingual patient
billing edge case
clinical escalation
membership/benefit edge case

Doctrine candidate:

Production-agent evals must simulate the actual conversation topography, not just ideal text prompts.

25. Continual learning remains human-authorized

Sierra can automatically detect issues with monitors, have Ghostwriter suggest fixes, and let users review/push changes. Future cases may allow FYI-only auto-fixes when confidence is high, but most customers still want to review every change because agents are important to their business.

OMNI keeper:

This matches OMNI’s governed improvement loop.

Doctrine candidate:

Self-improvement should graduate from approval to FYI only by risk tier and confidence, not by default.

26. Monitors narrow review load

Sierra monitors run on every conversation and flag items for review or issue creation. This lets customers review five conversations instead of reading 10,000, freeing them to focus on strategic levers like satisfaction or resolution rate.

OMNI keeper:

This is Polaris/operating_metrics.

Doctrine candidate:

Monitors should convert exhaustive observation into focused human review.

27. Benchmarks are useful for providers; simulations are for production agents

Sierra releases benchmarks around voice, knowledge, tool calling, process following, and transcription. They use many benchmarks to evaluate providers, while simulations are the main way they eval actual customer-specific agents going to production.

OMNI keeper:

Separate:

provider benchmark
model selection eval
harness eval
customer/workflow simulation
production monitor

Doctrine candidate:

Benchmarks choose components; simulations validate deployed workflows.

28. UX/modality is vertical-specific

Sierra has experimented with generative UI and multimodal experiences. Airlines may need typed inputs during phone calls for hard-to-spell names or reservation retrieval; retail may need polished product discovery/recommendation UI. Vertical contours determine form factor.

OMNI keeper:

Surface design should be workflow-specific.

For OMNI:

phone + SMS link for identity/payment
voice plus typed DOB/insurance
provider workspace with generated review surface
patient app for selection/consent
admin dashboard for high-volume review

Doctrine candidate:

The right agent surface depends on the vertical workflow contour.

29. Outcome-based pricing aligns incentives

Sierra’s outcome-based pricing is described as a core business reason for success because it aligns incentives. If the agent delivers a valuable outcome, Sierra gets a portion; for commodity tasks, usage/seat pricing may be more appropriate.

Pricing is customer-specific because outcomes vary in value and complexity; Sierra emphasizes simple fair alignment over over-engineering every outcome.

OMNI keeper:

For OMNI business model:

outcome pricing for high-value measurable outcomes
usage pricing for commodity automation
subscription/platform pricing for baseline infrastructure
hybrid model by lane

Doctrine candidate:

Pricing should follow outcome value when the product creates differentiated measurable value.

30. Product judgment becomes more important as coding gets faster

Zack’s Formula 1 analogy is strong: faster cars need more pit stops. Coding agents make code faster, so product judgment and customer intuition are needed more often, not less. The ideal agent builder has customer intuition, agency, product judgment, technical depth, communication, intensity, and leadership.

Sierra interviews for agency by having candidates build a product end-to-end over a few hours with AI, revealing what they consider in scope and how much control they assume they have.

OMNI keeper:

This directly affects OMNI team design.

Doctrine candidate:

AI increases the premium on product judgment because implementation becomes faster than deciding what should exist.

OMNI translation

Sierra gives OMNI a very strong integrated picture:

Analyze → Build → Release

domain operators author workflows → deterministic no-code compile → agent runtime → simulations → monitors → Ghostwriter fixes → governed release

Plus:

lifecycle agents → memory/authentication → voice/modality → commerce/payment isolation → outcome pricing

The biggest architectural warning:

Simpler agents can be better agents. Do not split into multi-agent systems unless the task truly benefits. Most of the time, better context engineering beats shipping your org chart.

The biggest product warning:

The agent surface will be everywhere: first-party apps, voice, chat, personal-agent ecosystems, and commerce flows. The platform must govern all of them through the same truth, memory, eval, and release rails.

Likely OMNI landing zones

Surface Map

lifecycle agents across patient/customer journey
voice/chat/app/personal-agent surfaces
multimodal UI by workflow
agentic commerce interfaces

AI Substrate

model constellation
lane-specific harnesses
deterministic no-code compile
direct API vs MCP policy
modular voice pipeline
model/provider routing
in-house model build/buy rule

Agent Work Protocol

analyze/build/release loop
simulations before release
monitors after release
Ghostwriter-style proposed fixes
approval/FYI autonomy gradient
no-code/code roundtrip artifacts

Memory Doctrine

identity-aware memory retrieval
sensitivity-based memory access
implicit/explicit/system-directed memory capture
memory as trust product

Evaluation Framework

simulations by persona/modality/language
benchmarks for components
monitors for production
model-switching evals
high-dimensional conversation testing

Growth / Commerce

agentic commerce
brand agents for personal agents
outcome-based pricing
payment rail isolation
sales/retention offers from structured state + context

Business Model Strategy

outcome pricing where measurable value is high
usage/seat pricing for commodity tasks
hybrid pricing by lane/value/risk
Doctrine candidates
Lifecycle agents are more valuable than support agents because they span moments that matter.
Agent platforms need a release loop, not just an authoring surface.
The people closest to the workflow must be able to shape the agent without becoming software engineers.
No-code agent building must compile into reviewable, deterministic artifacts.
Prefer model-native work surfaces unless the domain abstraction is strategically necessary.
The agent harness must be versioned because model capability changes the optimal control boundary.
Harness architecture is lane-specific: latency, risk, and user tolerance determine runtime shape.
Use the simplest reliable integration contract; protocol novelty is not architecture quality.
Businesses will need brand agents that can serve both humans and other agents.
Sensitive transaction rails must be isolated from general LLM reasoning.
Low-latency voice agents require speculative and parallel execution across the pipeline.
Build models only where domain leverage exceeds frontier-lab advantage.
The best agent action comes from structured state plus in-the-moment conversational context.
Separate analysis from authoring, then reunify through governed release.
You are not model-agnostic until your evals are strong enough to survive model switching.
Context quality is coherence plus timing, not maximal inclusion.
Split agents only when separation improves the work; do not ship the org chart.
Memory is not just storage; memory is authenticated retrieval.
Production-agent evals must simulate the actual conversation topography, not just ideal text prompts.
Benchmarks choose components; simulations validate deployed workflows.
Pricing should follow outcome value when the product creates differentiated measurable value.
AI increases the premium on product judgment because implementation becomes faster than deciding what should exist.
Net-new / sharpen / affirm
Net-new candidates

deterministic_no_code_compile
Domain/operator-friendly authoring layer that round-trips to executable code or workflow artifacts without nondeterministic semantic drift.

analyze_build_release_loop
Agent platform lifecycle: observe production, propose improvements, author changes, simulate, review, release, monitor.

agentic_commerce_brand_endpoint
Brand-owned agent/API/MCP surface that can serve both humans and personal agents in commerce flows.

memory_authenticated_retrieval
Memory access policy where identity confidence and memory sensitivity determine what can be retrieved and used.

conversation_topography_simulation
Eval layer modeling real production complexity: modality, personas, adversarial users, noise, language, memory, and multi-turn paths.

monolith_first_agent_architecture
Default posture that favors one well-contexted brand/workflow agent over premature multi-agent splits unless jobs are truly separable.

outcome_value_pricing_lane
Pricing/metric model where high-value measurable agent outcomes justify outcome-based pricing rather than seat/token pricing.

Sharpen existing

Surface Map
Adds personal-agent ecosystems, agentic commerce, and modality-specific UX.

AI Substrate
Adds lane-specific harnesses, modular voice, direct API vs MCP policy, and model constellations.

Agent Work Protocol
Adds release governance, simulations, monitors, Ghostwriter suggestions, and autonomy gradients.

Memory Doctrine
Adds authentication and sensitivity as core to memory retrieval.

Evaluation Framework
Separates benchmarks, simulations, monitors, and model-switching evals.

Business Ops / Commerce
Adds outcome-based pricing and commerce/payment isolation.

Affirm
context engineering is central
model routing is inevitable
voice requires modular architecture
memory improves experience but increases trust burden
domain operators need authoring power
evals unlock model/provider flexibility
production agents need monitors
agent builders need product judgment and technical depth
outcome-based pricing works when outcomes are valuable and measurable
Reject / do not over-import
Do not treat Sierra’s customer-service architecture as directly clinical.
Do not assume MCP is better than direct APIs.
Do not use multi-agent splits to mirror organizational teams.
Do not let raw no-code text become nondeterministic production behavior.
Do not retrieve sensitive memory without authentication confidence.
Do not route payment/PHI/secrets through general LLM context.
Do not assume voice-native models eliminate orchestration.
Do not price on outcomes unless attribution is clear enough and incentives align.
Do not treat benchmarks as sufficient for customer/workflow-specific safety.
Do not optimize prompt caching over outcome quality.
Hard read

This is a top-tier product/architecture source.

The keeper:

The best production agents are often simpler than people think: one well-contexted lifecycle agent, governed by deterministic authoring, simulations, monitors, release processes, memory/authentication rules, and lane-specific runtime architecture.

Shortest OMNI version:

OMNI should build lifecycle agents, not isolated bots. Give domain operators a deterministic Analyze→Build→Release loop; use simulations and monitors to govern changes; keep context coherent and progressively disclosed; default to monolith-first agents unless separation truly helps; isolate sensitive rails; make memory identity-aware; and price/value agent work by measurable outcomes where possible.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

Knox really liked this one!!!    seems like good stuff to me!!! crucial!

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

reviewer: `Opus` · type: `AI assistant` · at: `2026-07-07` · tier: `full_semantic` (long, rich Knox read → full table) · purpose: formalize Review 001 (verify/sharpen, do NOT re-derive) → per-source extraction → EVRUN fold packet · binds nothing (`GRD-036`/`GRD-044`).

**Headline verdict (2-3 sentences).** Sierra is the wave's single most complete *lived production instance* of OMNI's own thesis: not "an agent" but a **governed lifecycle platform** where domain operators author behavior in a deterministic no-code layer that compiles to reviewable code, changes are proven by lane-specific **simulations** and watched by **monitors**, memory is **authenticated retrieval**, sensitive rails (payments/PCI) are **isolated from the LLM**, and improvement stays **human-authorized** — with the single sharpest architectural warning of the run: *most of the time a well-contexted **monolith** beats a multi-agent split; splitting ships your org chart.* Almost every cluster **AFFIRMs existing OMNI doctrine** (longitudinal coherence · candidate≠commit · authority-owns-truth · model-pluggable-at-substrate-never-at-care · no-god-domain) and the dominant reality-check pattern is the wave's usual **`doctrine=AFFIRM/PARTIAL · build=absent`** — the care app (intake/orders/messages/payments-via-Stripe/lifecycle-events) is built, but the agent-platform substrate (no-code compiler, model constellation, simulation harness, agent memory, voice pipeline, agentic-commerce endpoint) is uncoded. Net-new is **vocabulary/posture, not new frame**; the biggest genuinely-new levers are the **monolith-first posture** (the missing pole to 214's anti-god-agent) and the **agentic-commerce brand endpoint**.

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [ts]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Lifecycle agents (not support ticket) | Agent = governed lifecycle surface across acquisition→intake→eligibility→scheduling→visit→payment→fulfillment→follow-up→refill→retention→escalation; = thesis §1 longitudinal coherence | thesis §1 · Surface Map · CNS · domain-contracts | "full engagement platform across all... moments that matter" [1:41] | AFFIRM | partial | none | spine | watch |
| 2 | Analyze→Build→Release loop (+Monitor→Improve) | Agent platform needs a governed *release loop*, not just an authoring surface = Build-OS + Agent-Work-Protocol operating loop | Build-OS (`REV-158`) · Agent-Work-Protocol · operating-metrics | "There's analyze, build, and then there's release" [3:40] | AFFIRM | absent | none | spine | watch |
| 3 | Domain operators must build (not only engineers) | Builder personas = physician/medspa-ops/billing-owner/MA-front-desk/compliance/care-coordinator; sand down barriers between context-holder and contribution | Build-OS · Surface Map · RBAC | "people that have the most depth... operations people" [6:58] | AFFIRM | absent | none | spine | watch |
| 4 | Deterministic no-code compile (isomorphic) | Domain-friendly authoring compiles to reviewable governed executable artifacts round-trip w/o semantic drift; reject raw nondeterministic text | Build-OS · Settings (policy-as-data) · Agent-Work-Protocol | "compiles down to agent SDK... deterministically and isomorphically" [9:11] | PARTIAL | partial | none | spine | watch |
| 5 | Meet models on their turf 80% (model-native surfaces) | Prefer files/git/diffs/markdown/manifests; invent custom abstraction only when strategically necessary — OMNI IS a git/markdown-native doctrine system (reflexive) | Build-OS · Agent-Work-Protocol · Manifest-Read-Graph | "meet the models where they are on their turf" [12:18] | AFFIRM | present | none | vocabulary | watch |
| 6 | Version the harness as models improve | Reliability-vs-reasoning control boundary moves with model capability; substrate/harness must be versioned = model-agility twin | §B AI-substrate · Build-OS · Agent-Work-Protocol | "reinvented the agent SDK two or three times as models improve" [14:08] | PARTIAL | absent | none | vocabulary | watch |
| 7 | Latency changes the harness (lane-specific runtime) | Harness shape (latency/risk/user-tolerance) is per-lane; voice ≠ chart-review ≠ billing-async ≠ build-review | §B runtime · CNS · workflow-lane | "the one constraint... cloud code doesn't have is latency" [18:05] | AFFIRM | absent | none | spine | watch |
| 8 | API beats MCP when counterparty known | Use direct API when target known/stable; MCP for discovery/composability; always keep auth/audit/tool-policy — protocol novelty ≠ architecture quality | §B integration · §C security · CNS | "The most common is an API call" [19:48] | AFFIRM | partial | none | vocabulary | watch |
| 9 | Agentic commerce > e-commerce; brand agents serve humans AND agents | Prepare for patient/payer/employer/personal agents invoking OMNI's MCP/API surface; brand-owned commerce endpoint | Surface Map · §B · D6 Commerce · Federation · future-watch | "agentic commerce will be bigger than e-commerce" [21:02] | PARTIAL | absent | tension (agent-token value ≠ human-eyeball value; care≠commerce) | spine | watch |
| 10 | Payments/security isolated from LLMs (PCI DSS L1) | PHI/PCI/secrets never enter LLM context; isolated infra + compliance-scoped tool paths; = 205 content-boundary + 211 token-nonpropagation | §C Security · D6 Commerce · Identity/RBAC · Polaris | "payment info doesn't go to a... large language model" [22:31] | AFFIRM | partial | none | spine | promote-candidate |
| 11 | Parallelism/ensembling in production voice | Speculative execution (look up before knowing; classify while responding) + transcription ensembling by silence-logic; voice runtime is a parallel pipeline | §B runtime · Surface Map P5 (voice) · CNS | "if this model says it's silent, you trust it" [28:51] | PARTIAL | absent | none | vocabulary | watch |
| 12 | Build in-house only where you push the frontier | Buy frontier reasoning; build domain retrieval/eval/context where differentiating; fine-tune only when justified = model-pluggable-at-substrate | §B model-registry · Build-OS · Knowledge-Reservoirs | "whenever we are pushing the limits... consider... build this inhouse" [29:40] | AFFIRM | absent | none | vocabulary | watch |
| 13 | Agent Data Platform: structured state + in-moment context → next-best-action | Canonical structured data + live conversation + policy + memory → NBA = OMNI projection strategy (projection≠truth) | §B · Projection Map P4 · Knowledge-Reservoirs · Clinical-Memory · CNS | "structured data... along with the unstructured... here and now" [33:29] | AFFIRM | partial | none | spine | watch |
| 14 | Explorer + Ghostwriter = analysis agent + authoring agent → shared harness | Separate analysis (find issues from traces/metrics) from authoring (propose changes), reunify through governed release = Review-001/003 split | Build-OS · Agent-Work-Protocol · operating-metrics | "the analysis agent and the authoring agent" [35:10] | AFFIRM | absent | none | spine | watch |
| 15 | Model-agnostic hill-climbing needs evals | Not model-agnostic until evals survive model-switching; switching reveals eval weakness → improve eval; tradeoff = latency/quality/cost | §B model-registry · Build-OS eval · Polaris | "really good evals... hill climb toward eval performance" [38:13] | AFFIRM | absent | none | spine | watch |
| 16 | Context engineering = everything needed, nothing more + progressive disclosure | Context quality = coherence + timing, not maximal inclusion; hallucinations from conflicting layers; "think the model's dumb → it's probably you" | §B context-packet · CNS · Knowledge-Reservoirs · Agent-Work-Protocol | "everything they need... but nothing more" [40:18]; "progressive disclosure" [40:50] | AFFIRM | partial | none | spine | watch |
| 17 | Quality beats prompt-cache loyalty (high-value lanes) | Cache discipline subordinate to outcome quality; valuable outcomes buy the luxury of not optimizing cost | §B runtime · operating-metrics · workflow-lane | "quality comes first. So we aren't zealots about it" [42:38] | PARTIAL | absent | tension (cost vs quality → quality wins in care) | vocabulary | watch |
| 18 | RL/fine-tuning bounded (regurgitation, agility, frontier-speed, capacity) | Never fine-tune where regurgitation risk; frontier improves so fast RL is a rounding error unless pushing SOTA; multi-provider driven by capacity/resilience | §B model-registry · §C security (regurgitation=leak) · Knowledge-Reservoirs | "never fine-tune... when it could lead to regurgitation risk" [44:05] | AFFIRM | absent | none | vocabulary | watch |
| 19 | Multi-agent is often a trap / monolith-first | Split agents ONLY when jobs truly separable; default one well-contexted agent; "shipping your org chart" — the missing pole to 214 anti-god-agent | CNS · §B runtime · Build-OS · thesis (no-god-domain) | "shipping your org chart"; "I'm kind of a monolith loyalist" [46:30 / 48:42] | AFFIRM | absent | tension (vs 224/220 dynamic subagents — disposition: task-shape decides, not fashion) | spine | promote-candidate |
| 20 | Voice 101 (parallelize thinking/listening/talking; 60 langs; ensembling; v2v) | Voice = modular pipeline over ONE governed agent; voice-native models don't remove orchestration/tools/evals/fallback | Surface Map P5 · §B voice-runtime · Polaris · D7 (audio consent/PHI) | "parallelize thinking, listening, and talking" [52:21] | PARTIAL | absent | none | vocabulary | watch |
| 21 | Memory requires identity + authentication | Memory = authenticated retrieval, not storage; identity confidence + sensitivity policy gate what may be retrieved (shared phone lines; name-fine vs SSN-different-standard) | §A trust-axis · Identity · Clinical-Memory · Knowledge-Reservoirs · D7 | "really thoughtful about authentication" [1:00:19] | AFFIRM | partial | none | spine | promote-candidate |
| 22 | Three memory capture modes (turn / journey / user-explicit) | Capture mode explicit because authority differs by source: system/policy-directed vs agent-detected-candidate vs user-explicit | Knowledge-Reservoirs · Clinical-Memory · §A | "three layers... save this... important to remember... remember this" [1:01:06] | PARTIAL | absent | none | vocabulary | watch |
| 23 | Memory is a trust product (why no breakout memory co.) | Selling memory = selling authentication/verification/identification; retrieval changes behavior toward an identified person | §A trust-axis · Identity · Clinical-Memory · thesis §8 authority | "trusting us with memory, you're trusting us with authentication" [1:03:26] | AFFIRM | partial | none | spine | watch |
| 24 | Simulations = lane-specific evals (conversation topography) | Prod-agent evals must simulate real topography (noise/adversarial/personas/modality/language/multi-turn) per lane, before release | Build-OS eval · Polaris/proof · Agent-Work-Protocol · §C | "we built a product... called simulations" [1:05:23] | AFFIRM | absent | none | spine | watch |
| 25 | Continual learning stays human-authorized (approval→FYI by risk+confidence) | Monitor detects → Ghostwriter suggests → human reviews; FYI-only graduates by risk-tier+confidence, never by default = candidate≠commit | Build-OS/REV-199 · Agent-Work-Protocol · Clinical-Memory (no-auto-adopt) | "FYI instead of needing approval"; "review every change" [1:07:37 / 1:07:55] | AFFIRM | partial | none | spine | watch |
| 26 | Monitors narrow review load ("solution to all AI problems is more AI") | Monitors run on every conversation, flag 5 of 10,000; verify-the-verifier stacks to 3-4 nines = Polaris/operating-metrics | operating-metrics/Polaris · Build-OS · Observation | "read five... instead of... 10,000 conversations" [1:08:56] | PARTIAL | absent | tension ("more AI" vs care needs deterministic/human floor → T6 ladder) | vocabulary | watch |
| 27 | Benchmarks for providers; simulations for production agents (tau-bench universe) | Separate provider-benchmark / model-selection-eval / harness-eval / workflow-simulation / production-monitor (tau-bench/voice/knowledge, MUBench) | §B model-registry · Build-OS eval · operating-metrics | "benchmarks... to evaluate providers... more than... agents" [1:11:22] | PARTIAL | absent | none | vocabulary | watch |
| 28 | UX/modality is vertical/workflow-specific (generative UI) | Surface form-factor follows workflow contour (phone+SMS for identity/payment; voice+typed DOB/insurance; provider workspace; patient consent app; admin dashboard) | Surface Map P5 · Projection Map P4 | "it's pretty vertical dependent" [1:13:17] | PARTIAL | partial | none | vocabulary | watch |
| 29 | Outcome-based pricing aligns incentives | Outcome pricing for differentiated measurable value, usage/seat for commodity, hybrid by lane — BUT care must never be metered against care (C3.7 firewall) | BIZOPS · operating-metrics · thesis §1 (care-first) | "if you don't understand the value... your outcomes probably not that valuable" [1:15:15] | PARTIAL | partial | tension (outcome-metering vs care-not-rationed → C3.7 economically-blind firewall) | spine | watch |
| 30 | Product judgment is the bottleneck (Formula-1: faster car → more pit stops) + agency + forward-deployed builder | AI raises the premium on deciding *what should exist*; interview for agency via AI-native build-a-product session = operator/trifecta context | operator-context+collaboration-model · Build-OS · future-work (team) | "faster car... needs more pit stops" [1:20:29]; "product is becoming the bottleneck" [1:24:01] | AFFIRM | n/a | none | low-authority-watch | no-op |

### B. Net-new primitives *(dedup vs registry §2 [wave-3 201-230] + standard OMNI primitives — all `dedup-pending, Opus-main verifies`)*

- `monolith_first_agent_architecture` — default posture favoring ONE well-contexted brand/workflow agent over premature multi-agent splits unless jobs are truly separable — **EXISTS-AS: net-new POSTURE/NAME; it is the missing OPPOSITE POLE to 214 `capability_placement_policy`/anti-god-agent + a constraint on 224 `typed_subagent_result_contract`/220 recursion — reconcile as a paired default (don't-split-prematurely ↔ don't-make-one-agent-do-everything). dedup-pending, Opus-main verifies.**
- `agentic_commerce_brand_endpoint` — brand-owned agent/API/MCP-server surface that serves both humans and personal agents in commerce flows — **EXISTS-AS: net-new; partial overlap 201 `ambient-endpoint-as-surface` + Surface-Map + D6; the agent-COUNTERPARTY commerce endpoint (Stripe-for-agents analogue) is genuinely new. dedup-pending, Opus-main verifies.**
- `deterministic_no_code_compile` — operator authoring layer that round-trips isomorphically to executable governed agent policy/workflow artifacts w/o nondeterministic drift — **EXISTS-AS: net-new NAME; mechanism partly = OMNI rules-as-config + Settings policy-as-data + 230 `policy_to_eval_compiler` + 208 `spec_as_agent_contract`; the *isomorphic code↔no-code round-trip* is the novel bit. dedup-pending, Opus-main verifies.**
- `conversation_topography_simulation` — eval layer modeling real production complexity (modality × persona × language × noise × adversarial × multi-turn) run before every release — **EXISTS-AS: net-new-ish; sharpens 215 `agent_eval_bundle` + 230 adversarial-dataset/`policy_to_eval_compiler` + 217 `agent_manifest.eval-suite` with a multi-AXIS simulation-space spec. dedup-pending, Opus-main verifies.**
- `memory_authenticated_retrieval` — retrieval-side policy where identity confidence + memory sensitivity gate what may be surfaced/used — **EXISTS-AS: net-new-ish RETRIEVAL-GATE; complements 227 `memory_authority_state` (write/adoption side) + composes Identity + Clinical-Memory + consent-specificity §7.5.4 + 205 `memory_contamination_state`. Likely reconcile as a retrieval attribute on 227. dedup-pending, Opus-main verifies.**
- `outcome_value_pricing_lane` — pricing posture: high-value measurable agent outcomes justify outcome-based pricing (vs seat/token for commodity), by lane — **EXISTS-AS: net-new-ish PRICING posture; distinct from 206 `outcome_per_token_metric` (a metric) + 201 sell-outcomes (a GTM stance); BIZOPS home, bounded by C3.7 economically-blind-care firewall. dedup-pending, Opus-main verifies.**
- `analyze_build_release_loop` — **EXISTS-AS: already-exists — Build-OS (`REV-158`) + Agent-Work-Protocol operating loop + 216 `trace_to_issue_to_fix_eval_loop`. DO NOT re-mint (NAME only).**
- (RECONCILE, not net-new): parallel/ensembling & voice pipeline → 229 `modality_adapter_layer`/`modality_owned_conversation_state` + 204 speculative-decoding; harness-versioning → §B model-agility + 203 crypto-agility twin; API-vs-MCP → 213 (MCP-is-not-the-point); context-engineering → 204 `context_memory_budget` + `context_packet_policy` + 220 state-externalized; monitors/simulations authority → 215/216/217/222/230 eval spine.

### C. Reread flags
- **None blocking.** Metadata block present + lifted verbatim (`identity_confidence: high_from_operator_metadata`); §0 fully resolved (no `TK` for url/title/speaker/date).
- **ASR garble (low impact, do not treat as canonical terms):** internal Sierra model names "Lanaeus and Darwin" [17:34] and "Mythos" [29:52] are transcription-approximate; "toa" [19:41] = the A2A (agent-to-agent) protocol; speaker name in the intro voice-over "Zach Renault Wedin" [0:06] = Zack Reneau-Wedeen (metadata authoritative); "Ghostriter" throughout = Ghostwriter; "GP" [~11:52] likely "grep".
- **Date note (not a conflict):** metadata `published_at 2026-06-18`; in-transcript the speaker anchors an opinion to "May 18th, 2026" [48:24] (recording/opinion-as-of date) — kept in §0.1 event_context.
- **Not a duplicate:** URL `uCKhOmth2ms` is unique in the corpus (distinct from 229 voice / 223 LATAM / 201 Satya); Sierra is referenced by 234 only as a prior read.

### D. One-line hard read + strongest OMNI line
- **Hard read:** the best production agents are *simpler than people think* — one well-contexted lifecycle agent, governed by deterministic authoring, lane-specific simulations, monitors, human-authorized release, authenticated memory, and isolated sensitive rails; "multi-agent" is usually org-chart cosplay, and product judgment (not code) is the bottleneck.
- **Strongest OMNI line:** Sierra is OMNI's thesis validated by a Fortune-20 production platform — *the agent is not the product; the governed lifecycle substrate is* — so OMNI should build **lifecycle agents, not bots**: give domain operators a deterministic Analyze→Build→Release loop, prove every change with lane-specific simulations + monitors, keep memory identity-authenticated, default to **monolith-first** unless separation truly helps, isolate PHI/PCI/secrets from the model, and let outcome-value pricing follow measurable business value while the **C3.7 firewall keeps care un-metered**.

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Build-OS+Agent-Work-Protocol (MAJOR — analyze/build/release loop, no-code compile, simulations, monitors, human-authorized continual learning) · §B AI-substrate runtime (MAJOR — model constellation, lane-specific harness, context engineering, build-vs-buy, voice pipeline) · §A trust-axis + Identity + Clinical-Memory (MAJOR — memory=authenticated retrieval, memory-as-trust-product) · §C Security + D6 Commerce (MAJOR — payment/PHI isolation from LLM, agentic-commerce endpoint) · CNS (medium — monolith-first/coordination) · Surface/Projection Maps (medium — modality-specific UX, generated UI, brand endpoint) · Polaris/proof + operating-metrics (medium — monitors, benchmarks-vs-simulations) · BIZOPS + thesis §1 (medium — outcome-based pricing, care-first firewall)` · promotion: `watch` (proposes only; `GRD-036` gate — net-new primitives dedup-pending Opus-main; `monolith_first_agent_architecture` + `agentic_commerce_brand_endpoint` = strongest mint candidates)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — **analyzed (Opus).** §0/§0.1 metadata lifted verbatim from §3 Review 001 metadata block (`identity_confidence: high_from_operator_metadata`; url/title/speaker/date resolved, no `TK`); proposed slug `sierra-lifecycle-agents-simpler-is-better` (file NOT renamed). Wrote §3 Review 003 formal deep extraction (full_semantic tier — 30 concept clusters + 7 net-new/reconcile primitives [all dedup-pending, Opus-main verifies] + reread flags + hard read); grep-verified build reality (care app built via `lib/ai`/`intake`/`orders`/`messages`/`payments`[Stripe]/`commerce/pricing-profiles`/events; agent-platform substrate — no-code compiler / model-constellation / eval-simulation-harness / agent-memory / voice-pipeline / agentic-commerce-endpoint — ABSENT). Filled §4 pointers; ticked §0.5; flipped `current: raw_dropped → analyzed`. Fold packet returned to Opus-main (registry/coverage/anchor NOT edited here per instruction; `GRD-044` no-sidecar honored).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

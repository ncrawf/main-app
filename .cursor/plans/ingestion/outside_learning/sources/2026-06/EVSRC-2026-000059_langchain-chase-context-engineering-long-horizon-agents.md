# EVSRC-2026-000059 — Context Engineering Our Way to Long-Horizon Agents: LangChain's Harrison Chase

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured; awaiting EVRUN — **flagged verbatim-reread cluster**)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1; Knox read in §3 Review 001. Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000059`  ·  filename: `EVSRC-2026-000059_langchain-chase-context-engineering-long-horizon-agents.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=vtugjs2chdA`
- source_title: `Context Engineering Our Way to Long-Horizon Agents: LangChain's Harrison Chase`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  series: `Training Data`  ·  published_at: `2026-01-21`  ·  views_at_capture: `114,395`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `interview`  ·  source_reliability_context: `practitioner / founder-operator (agent frameworks — directly relevant to agent architecture)`  ·  topic_tags_light: `[context_engineering, long_horizon_agents, harness_architecture, traces_as_source_of_truth, agent_memory_systems, file_systems_in_agents, non_determinism, agent_eval_testing]`

## §0.1 — People / authorship / authority context  *(filled from screenshot description)*
- primary speaker(s):
  - name: `Harrison Chase` · role_in_source: `interviewee` · affiliation_at_publication: `LangChain (cofounder); pioneer of AI agent frameworks` · speaker_type: `founder / practitioner (agent frameworks)` · authority_context: `**HIGH relevance / near-domain-expert on agent architecture itself**: emergence of **long-horizon agents** that work autonomously for extended periods; evolution from early scaffolding → today's **harness-based architectures**; why **context engineering — not just better models — is fundamental** to agent development; why coding agents lead; **role of file systems in agent workflows**; how building agents differs from traditional software; **traces as the new source of truth**; **memory systems that let agents improve over time**. Framework-vendor lens, but this is core build doctrine` · identity_confidence: `high_from_screenshot`
  - name: `Sonya Huang` · role_in_source: `host` · affiliation_at_publication: `Sequoia Capital` · speaker_type: `investor` · authority_context: `framing / host` · identity_confidence: `high_from_screenshot`
  - name: `Pat Grady` · role_in_source: `host` · affiliation_at_publication: `Sequoia Capital (partner)` · speaker_type: `investor` · authority_context: `framing / host` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `Sonya Huang + Pat Grady`  ·  event_context: `Sequoia "Training Data" podcast`  ·  perspective / conflict notes: `LangChain cofounder — may favor framework/harness framing. **VERY HIGH OMNI relevance: context engineering, harness architecture, traces-as-source-of-truth, and agent memory systems are near-direct inputs to §B AI-substrate axis, CNS orchestration (context packets, candidates, traces/replay), Build OS (agent lanes, eval/testing of non-deterministic systems), and Knowledge Reservoirs (memory taxonomy).** Likely a flagged-for-verbatim-reread cluster. Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): LangChain cofounder = high relevance on agent harness/context/memory; claims still route through evidence → interpretation → gated promotion (esp. framework-specific patterns vs OMNI's governed-substrate needs).

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] EVRUN needed? (yes — full_semantic; **verbatim-reread**: §B / CNS / Build OS / Knowledge Reservoirs) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️


Search in video
Introduction
0:00
People use traces from the start to just tell what's going on under the hood. And it's way more impactful in agents than
0:06
in single LLM applications because in single LM applications, you get some bad response from the LLM. You know exactly
0:11
what your prompt is. You know exactly what the context that goes in is because that's determined by code and then you get something out. In agents, they're
0:17
running and and and repeating and so you don't actually know what the context at step 14 will be because there's 13 steps
0:24
before that that could pull arbitrary things in. So like what exactly is everything's context engineering? Context engineering is such a good term.
0:30
I wish I came up with that term. Like it actually really describes like everything we've done at Langchain um
0:35
without knowing that that term existed. But like traces just like tell you what's in your context and that's so important.
0:57
Welcome to training data. Harrison, you are our very first guest on training data and the AI space has moved so
1:03
quickly uh in the 18 months or so since we originally interviewed you and so I'm delighted to get you on the show today.
1:09
Um topics of the moment. I think there's nobody better than you to talk about some of these topics. We're going to talk first about long horizon agents and
1:16
agent harnesses. Pat and I had this blog post on this yesterday. I know this is something that you are deeply um fluent
1:22
in. And then we're going to talk about what's the difference between building long horizon agents versus building software um and the role that you see
1:28
Lang Chain playing in that ecosystem. And then finally, I just want to chat with you about the future. I think you
1:33
single-handedly, you know, kind of saw the agent opportunity I think before anybody. You know, we were back in the
1:39
GP3 days and um I think you see the future for what's happening with agents and so I'm just excited to chat with you
1:44
open-endedly about the future as well. I am really excited as well. Thank you guys for having me back. It's quite an honor. I'll tell my mom again and that
1:51
I'm back on the line. Wonderful. Okay, let's start with long horizon agents.
Discussing Long Horizon Agents
1:57
Yes, that was a great term. You guys wrote a great article. Sony's good at naming things. We're not going to get into the the
2:02
backstory there. Um, what do you think? What do you agree with? What do you disagree with? I mean, uh, I agree that they're
2:08
starting to finally work. I think like the idea of running an LLM in a loop and just having it go was, uh, was always
2:15
the idea of agents from the start. uh autog was basically this then this is why it took off and and captured so many
2:21
people's imagination because it was just an LLM running a loop completely deciding what to do. The issue is the models weren't really good enough and
2:27
the scaffolding and harnesses around them weren't really good enough and I think the models got better. We learned
2:33
more about what makes a good harness over the past few years and now they start to like really really work and you
2:39
see this in coding first and I think that's the domain where they're taking off the most and that's spreading to other domains but you can give a task to
2:46
an agent and you still need to communicate to it what you want it to do and it needs to have the right tools and all of that but it can actually operate
2:51
for longer and longer periods of time and so that yeah the long horizons kind of like uh uh framing of it I think is
2:57
really really apt and really really good. Awesome. Um, what are your favorite examples of long horizon agents and I
Examples of Long Horizon Agents
3:03
guess what shapes you see them taking? So, coding is the place where there's the most. I think that's the one that I
3:09
probably use. Yeah, that's the one that I use the most. Um, adjacent to that, I
3:14
think like really good ones are AI SRRES. So, Traversal I think is a Sequoia company and and they have an AI
3:20
SR that that that operates over longer time horizons. research in general and I'd call like AISR kind of research like
3:27
they're taking a incident and they're going and digging through logs like research in general is a really really good task because it ends up producing
3:33
like a first draft of something and the issue with agents is they aren't like reliable to 99 of reliability but they
3:39
can do a ton of work and and more and more work over longer time horizons. So if you can find these framings where
3:45
they run for a long period of time but produce like a first draft of something those to me are like the killer
3:50
applications of long horizon agents right now. So like I coding coding is an example of that like coding you usually
3:55
put up a PR you don't directly push to prod unless you're vibe coding which is also starting to get better and better.
4:00
Uh AISR usually surface it to a human who comes in and then reviews it. Report generation you don't send it out to all
4:07
of your followers right away. You look at it you edit it. It creates like a first draft of something. So we see this in uh we see this in finance a bunch.
4:14
This is this is a huge research opportunity. Customer support. We see a lot of things pivoting from kind of like
4:20
the initial the initial customer support was like first-line response like someone messages you just respond really
4:25
quickly and there's still that and and that's going great but now there's examples K is a great example of this
4:30
where it's like humans and AI working together when the first line fails you escalate to a human you don't just have
4:36
the human handle it you have this long horizon agent run in the background produce a report of everything that
4:41
happened and then hand it off to the to the to the agent there um to the human agent there agent starts to get
4:47
confusing in customer support. Um, so so I think the killer use case of all of these is places where you have
4:53
like this first draft type of concept. And then how much of the uh the why now
Harness Engineering and Model Integration
4:59
do you think is the models themselves are just so good versus people are doing really smart things on the harness side?
5:06
And maybe even before we get to that, can you say a word for for our listeners on like you know how you frame the the harness versus the model in terms of the
5:13
actual composition of an agent? Yeah. So and and I'll maybe I'll maybe bring in like framework as well because
5:18
I think early on I mean that's how we describe lang chain as that's what lang chain is it's an agent framework and now
5:24
and now we have deep agents which I'd call an agent harness and we get asked about what's the difference so a model
5:29
is obviously the LLM tokens messages in messages out um the framework would be
5:35
abstractions around that so making it easy to switch between models uh adding abstractions for other things like tools
5:41
and vector stores and memory and things like that but pretty like unopinion about what goes in there more values
5:51
are more like batteries included. So when we talk about deep agents we're talking about we we actually give it a
5:57
planning tool by default. So it has a tool that that that comes built into the harness. That's pretty opinionated that
6:02
like this is the right way to do things. Um we do compaction. So you have these long horizon agents. They're running for
6:08
long periods of time. Context windows are larger but they're still not infinite. And so at some point you need to compact that. How do you do that?
6:14
There's a lot of research going on there right now. Uh, one of the other sets of tools that we and a lot of people are
6:21
giving to these agents are tools for interacting with the file system whether directly or via bash and and
6:27
this is it's kind of tough to separate from the models because the models are being trained on a lot of this data as
6:33
well. And so there's this kind of evolution between like I don't know if we could have known that like these file
6:39
system based harnesses are the best thing at like if if we fast if we go back two years ago I don't think we
6:44
could have known that because models weren't really being trained on that as much as they are now and so they're kind of evolving together. So so I think it's
6:51
like a combination of things. It's the models absolutely are getting better. Reasoning models are helping helping a
6:56
lot. Um, but it's also the fact that we're figuring out all these primitives around compaction and uh and planning
7:04
and and these file system tools being really useful. And so it's I I do think it's a combination of both.
Evolution of Agent Frameworks
7:09
Um I remember in in that very first episode we did together, you know, you described
7:15
laying graph I think as the almost the cognitive framework. Yeah. Uh of of the of the agent. Is that the
7:22
right way to think about what the the harness is? Uh yeah, I think I think that's right. Yeah, so we we build we
7:28
build deep agents on top of Langraph. It's one particular kind of like langraph instance. It's very opinionated. It's more general purpose.
7:34
Um and so I think early on we talked about general purpose architectures and more specific architectures. And what
7:40
we've seen is that a lot of the specificity for tasks previously that
7:47
might have been in langraph because you needed to put more structure on the models. Now that specificity is moving
7:52
into the tools and the instructions. So there's still the same level of complexity. It's just in natural
7:57
language. And so prompting and editing those prompts and and and automatic maybe automatically updating those is
8:04
becoming a part, but the harness is remaining a little bit more fixed. Um what's the hardest thing to get right on
8:11
the harness side? And do you think, you know, do you think individual companies can actually excel at the harness
8:17
engineering side of things? Who do you admire there? Uh I think a lot of the companies that are doing the best
8:22
harness engineering are coding companies. Honestly, I think that's the place where it's taken off a bunch. I
8:29
mean you look at cloud code. I would argue a big reason for the popularity of cloud code is the harness itself. Um
8:35
does that by the way imply that harnesses are better built by foundation model companies than by third party
8:42
startups? I I I don't know. Um I so the next company I was going to mention is
8:47
Factory which is another coding company and and I think you look at at the harness they've done there. AMP um is
8:52
another coding company has a has a has a really good harness. Um I think there's
8:58
pros and cons. They there definitely is some aspect of the harness being tied to
9:05
a model. Um and and maybe not just not a specific model but a family of models. So like all cloud models like anthropic
9:11
fine-tunes on some specific tools. OpenAI fine-tunes on different ones. So like I think probably probably probably
9:17
probably probably when we were doing this last time we maybe talked about how prompts need to be different for one model versus another. Hardnesses also
9:22
need to be slightly different for one family of of things versus the other but there are similarities. Uh all of them use the file system in in in some
9:30
sense. Um so I think this is I I I I actually don't know the answer to that. It's a really interesting uh thing. Um we see
9:37
that a lot of the coding com a lot everyone who's building a coding company is basically building their own harness
9:42
right now. Yeah. Um, and there's all these leaderboards and you can see it's actually kind of interesting if you go to terminal bench
9:49
2, which I think is probably the one of the more kind of like popular coding benchmarks right now. You can actually
9:54
see they they have like the the agent harness and then the model and so you can see the variation in performance and
10:00
claude code is not at the top of that. Um, so there's there's differences but I think it
10:05
it doesn't necessarily mean that the model labs are better at it. It just means that you have to understand how
10:12
the models work and people who look at the at what makes a harness tick around the model can can get some performance
10:18
gains there. Yeah. What do you think goes into, you know, making the harness tick? Like what do you think that the guys at the top of
10:24
the leaderboard are doing exceptionally well? I think part of it is definitely understanding like what tools the models
10:30
uh trained on. So uh I think OpenAI trains really heavily on Bash. I think Anthropic has an explicit kind of like
10:36
file editing tools and so I think leaning into that is part of it. Um compaction is becoming more and more of
10:42
a thing. Uh so especially as you start doing longer horizon tasks like you start to fill up the context window and
10:48
so what do you do there is a really big question and there's a bunch of strategies for for kind of like approaching that. I'd argue that's part
10:55
of a harness. I mean, so all of these harnesses also this is where like skills and MCPs and sub aents start to come
11:02
into play as well and you can use those in like different ways and and I don't
11:07
know how I I don't think a ton of like skills or sub agents are trained into the models yet like those are still pretty new.
11:13
Yeah. Um and and so like one one of the things that we see in our harness is like when you have a sub agent the the the the
11:19
main model needs to communicate with it like well it needs to it needs to give it all the appropriate information. it needs to let the sub aent know that it
11:26
needs to like give it its final response out. So like we would see some failure modes where the sub aent because basically what happens is you kick off
11:31
the sub agent and then only the final response is passed back to the main agent. And so we'd see some failure modes where the sub agent would do a
11:37
bunch of work and then it would be basically like look at my work above and then you know pass that back to the main agent and it can't see it and it's like
11:43
what are you talking about? And so like that type of like prompting to get these pieces to work together is a big part of
11:49
it. So like skills, sub agents, MCP, there there are like prompts in all of
11:54
these harnesses that make them work well or don't make work them work well. And they're they're hundreds of of lines
12:00
long if you look at some of the the the ones that are out there. Can I ask you a question on how this has evolved and um
12:08
since you've always been really kind of on the bleeding edge of what are people doing around the models
12:13
to make them work in the real world, right? If we think about in our simplistic view on like what the big
12:20
inflection points over the last five years have been feels like there was a big inflection point around pre-training when chatbd came out. Feels like there
12:26
was a big inflection point around reasoning when 01 came out. Feels like just recently there's been a third big
12:32
inflection point around these long horizon agents with cloud code and opus 45. Um in your world the world of all
12:38
the stuff around the models that that makes them work in the real world. Would you have a different set of inflection
12:43
points? Like what have the major changes been? I remember we talked about cognitive architectures a couple years ago and now we're talking about
12:49
frameworks and agent harnesses. Like what have the major leaps in
12:55
um sort of the design around the model? Yeah. What have they been? So I think there's maybe like three eras
13:03
I would say. I'd say like early on and this is when Langchain was just started like these were still the raw like text
13:08
in text out like not even chatbased models. And so they didn't have any of the tool calling. They didn't have
13:14
any content blocks, any reasoning at all. They were really just like really really
13:19
basic. Uh and so the the things that people were doing were mostly like single prompts or like chains. Um and
13:26
and it wasn't even possible to do anything like that complicated. Then a lot of the model labs started training
13:31
in a lot of like the tool calling into the models and they got really good at kind or they tried to make them good at like thinking and planning and they
13:37
still weren't they still weren't good yet. they sort of weren't good as they as they are today. Um, but they were
13:43
good enough to like decide what to do. And this is where like the custom cognitive architectures would come in more into play because
13:48
you'd ask it explicitly like what do I do here? But it was like a very like point in time and then you go down this branch and then like what do I do here?
13:54
And maybe there's a loop and and there started to be some loops but it's still a little bit more kind of like scaffolding around it.
14:00
And then there was an inflection point and I don't know where exactly that was. I would say I think we noticed it
14:05
probably in like June July of this year where we saw Cloud Code taking off, deep research taking off, Manis taking off
14:11
and these all use the same architecture under the hood of just the the LLM running in the loop but like cleverly
14:16
like a lot of a lot of hardness is context engineering like everything around contraction context engineering sub agents context skills context
14:23
engineering. So we basically saw them using the same core algorithm but making just like improvements on context engineering and we're like oh that's
14:30
interesting that's pretty different than before. And so that's when we started working on deep agents. I think for a lot of people in the
14:36
coding community, I think probably like Opus 4 5 was when they started to like
14:41
really feel this. It might have also just coincided with winter break when everyone went home and started using claude code and realiz how good it was.
14:47
Um but I think like around like November, December like I think there's has been this like
14:53
at least I I sense a pretty big like vibe shift in like people just like yeah you throw hard problems at these things
14:58
and you get long horizon agents. And so I don't know whether it was early 2025 or late 2025, but at some point the
15:04
models got good enough and and that's when we moved from like scaffolds to to harnesses. And what's next on this arc?
15:11
I I wish I could tell you. Um, I mean I do think that like this algorithm of just running the LM in a loop and
15:17
letting it orchestrate its own uh let letting it really choose what to pull into context and and and doing stuff
15:23
there that is like it's so simple and so general purpose like I mean that was the core idea of agents and all along and
15:29
and and we're finally there. Um if you look at some of the manual scaffolding like maybe some of that goes
15:34
away. So like compaction is still very manual like the the harness author decides what to do with it. Anthropic
15:40
has some interesting things where they let the model decide like when to compact things. We don't really see a ton of people using that. Maybe that'll
15:47
be a part that's next. Uh part of what we're really interested in is memory as
15:53
well. If you think about memory in the context of this, that's also context engineering, right? It's context engineering over longer time horizons
15:59
and it's a slightly different set of contexts, but it's still giving that to the to the LLM. And I think uh I think
16:06
like the the core algorithm is is is pretty like it's pretty simple. It's run
16:13
the LLM in a loop and we're finally there and it kind of works. And so I think there'll be a bunch of like context engineering tricks around it.
16:19
And maybe some of that is giving the context engineering actually to the LLM like letting like the anthropic thing.
16:24
Maybe some of that is just pulling in new types of context. The models will will probably get better. They'll
16:29
probably I mean they'll probably get better and better at these types of longer horizon tasks. that'll be great as well. Um, one of the big questions on
16:36
my mind it so a lot of these harnesses that we see are very coding specific. Yeah. Um, and that's where we first
16:42
started to really see these long horizon uh, agents take off and even for non-coding tasks I think you can make an
16:49
argument that like writing code is really useful and uh, can be general purpose.
16:55
I was going to ask you are coding agents is that a subcategory or are coding agents just agents? Meaning the job of
17:01
an agent is to figure out how to get a computer to do useful stuff and code is a pretty good way to get a computer to
17:07
do useful stuff. I don't know. Um this is one of the big so I I I very very strongly believe that
17:14
like right now if you're building a long horizon agent, you need to give it access to a file system. Like there's so
17:19
many things you can do with a file system in terms of context management. Like when we talk about compaction, one strategy is to summarize but put all the
17:25
messages in the file system so that if it needs to look it up, it can. Uh, another strategy is when you have like
17:30
big tool call results, don't pass it all to the model. Put it in the file system and let it looking let it look it up.
17:36
Now you can do all of that without like a real file system actually without letting it write code. So we have a concept of like a virtual file system
17:42
where it's just backed by Postgress or something like that and it's more scalable, but there are obviously things you can do with code that you can't do
17:47
with a virtual file system. You can't run code in a virtual file system. Um, so like writing scripts is like really
17:53
useful for that. Yeah. Um, and I think a coding agent can
17:58
be general purpose, but I don't know if that means that today's coding agents are, if that makes sense. Because I
18:03
think a lot of the coding agents today are pretty optimized for coding tasks. And so I think it's possible that a
18:09
general purpose agent is a coding agent, but I don't know if like the reverse is true if if if that kind of like makes
18:14
sense. Yeah. Yeah. Yeah. We're thinking about that a lot as well. Are all agents coding agents? Yeah. That's that's one of the biggest
18:20
things that we're thinking about right now. Yeah. Maybe can we transition into talking about what goes into building a
Building Long Horizon Agents vs. Software
18:26
long horizon agent versus building software? Um can you maybe describe the software development stack for for 1.0
18:33
code development and um and what's different now? And I thought you had a really good X article on this. Maybe
18:38
maybe just summarize the the punch line. I've been I to think about this a bunch because we like to say that build and I
18:44
think a lot of people would agree that like building agents is different than building software. But like what exactly is different? Cuz I think it's it's easy
18:51
and lazy to say that it's different, but what actually is different? These might sound obvious, but hopefully that's good
18:56
and they're not controversial. But like um when you're building software, all of the logic is in the code in the software
19:02
and you can see it there. When you're building an agent, the logic for how your applications works is not all in
19:08
the code. A large part of it comes from the model. And so what this means is that you can't just look at the code and
19:14
tell exactly what the agent would do in a specific scenario. you actually have to run it. And so and so and so what
19:20
does that mean? And and I think that's the biggest difference by the way like we're introducing like these nondeterministic systems into it and
Understanding Non-Deterministic Systems
19:25
it's a black box and it lives outside and I think all that that's that's the biggest difference. So what exactly does that mean? I think like one thing that
19:33
that means is that in order to tell what the application is actually doing, you
19:38
can't look at the code. You have to look at actually what it does in in real life. Um, and so I think one of the the
The Importance of Tracing in Lang Smith
19:44
one of the things that one of the things that we do that is most popular is Langmith. One of the core parts of that
19:50
is tracing. Why are traces so popular? Because they tell you exactly what goes on inside your agent at every step. Um,
19:55
and it's different than software traces where in software you kind of have your system over here and it emits a bunch of
20:02
like uh stuff and you you know you look at it when maybe there's some errors but
20:07
you don't need like everything and and you usually only turn that on when you put it in production because if it's
20:12
local you just put a breakpoint or something like that. in agents like people use traces from the start to just
20:19
tell what's going on under the hood. And and it's way more impactful in agents than in single LLM applications because
20:24
in single LM applications you get some bad response from the LLM. You know exactly what your prompt is. You know exactly what the context that goes in is
20:31
because that's determined by code and then you get something out. In agents they're running and and and repeating
20:36
and so you don't actually know what the context at step 14 will be because there's 13 steps before that that could
20:41
pull arbitrary things in. So, like what exactly is everything's context engineering. Context engineering is such a good term. I wish I came up with that
Context Engineering and Its Significance
20:48
term. Like it actually really describes like everything we've done at Langchain um without knowing that that term
20:53
existed. But like traces just like tell you what's in your context. And that's so important. And so then and so like
20:59
what does that mean? That means that the the source of truth for software is in code. In for agents it's a combination
21:05
now of code and and and traces are where you can see the source of truth. technically in you know all those
21:11
millions of parameters but like you can't really do anything with that. So now so now that means that traces become
Testing and Collaboration in Agent Development
21:17
a place where you start to think about testing because now you can't you can test you can test some parts still of of
21:24
the harness and and and you can do some unit testing offline but like in order to get the the what the test cases are
21:29
you probably want to use the traces to construct that. You probably want to be testing online. That's probably more
21:34
important in agents than it is in software is online testing because behavior doesn't emerge until until it's
21:40
actually being used with with real world inputs. Um, we see traces becoming a point of collaboration for teams because
21:46
if something goes wrong, it's not, oh, let's go look at the code in GitHub. It's let's go look at the trace. We see this in our open source as well when
21:52
people are being like, hey, deep agents like went off the rails here. What happened? Our response is like send us a
21:58
lang trace. Like we can't really help you debug if it's if it's not that. Previously would be like, show me the code, right? So there's think there's a
22:03
transition there. And then I think the other thing that's and and so that was the blog post that I wrote on next which
22:09
got a lot of good feedback on. I'm still kind of figuring out how to like phrase it but I think that's that's a big part of it. Um the other thing which I'm
Iterative Nature of Building Agents
22:16
still trying to think through as well is I think building agents is more iterative. And we used to say that and I
22:22
would kind of roll my eyes because building software is iterative as well, right? You you ship it, you get feedback and it's it's constant iteration. That's
22:29
like what it is. I think the difference is that in software you're you're you're kind of like iterating based on what you
22:37
want the software to do. Like you have some idea, you ship it, you get feedback. Oh, maybe this, you know, button is confusing. Maybe this uh maybe
22:44
users actually want to do X instead of Y, but you know what the software does before you ship it. With agents, you
22:49
don't know what the agent does before you ship it. You have an idea, but you don't really know what it does before you ship it. And so I think there's way
22:56
more iteration involved in order to get it like accurate, get it like right and passing like conceptual unit tests
23:03
basically. Um, and building upon that like this is actually
The Role of Memory in Agent Development
23:09
why I think memory is really important as well. Um, because memor is like learning from those interactions. And so
23:14
if now you have a process that's like way more iterative. And so now you have to like it's it's way harder to build as
23:19
a developer because I have to like change the system prompt like way more than I would have to change code in order to get it just perform like
23:26
correctly. Yeah. So that's where memory comes in because if there's a way where the system can kind of like learn by itself that cuts
23:32
down the iteration that you have to do as a developer and makes it easier to build these types of agents. So that's
23:37
another kind of like angle that I I like I absolutely think agents are different
23:43
than building software. I think it's also a little cliche to say that and so I've tried to think about what exactly is different and those are like the two
23:48
things that I've kind of come up with. Well, and I'm curious on that too. Um, one of the questions there's a big
Challenges for Existing Software Companies
23:54
public market debate right now is are the existing software companies going to make it. And if you analogize to when
24:01
on-prem software went to cloud, very few actually did make it because it turned out that building cloud software was
24:08
actually quite different than building on-prim. And since you're in the middle of kind of how people are building with
24:13
AI, um what's your take on not necessarily the public market question, but how different is it? Like do you see
24:22
have you seen a lot of people who kind of like were good at building software the old way and now they're good at building software the new way? Or is it
24:29
more just you either grow up building it the new way or you never get it? Like do you think people can make the leap? a
24:34
lot of young founders out there right now which which makes me think that certainly it seems like the younger
24:40
people without a lot of preconceived notions on how to build software you know have the blank slate that has allowed them to like pick up on a lot of
24:46
this stuff. I do think we we have consistently heard that a lot of the
24:52
people who are on these agent engineering teams are more junior developers uh more junior builders even
25:00
um who yeah don't have those preconceived notions. Our applied AI team internally
25:05
definitely skews on the on the younger side. Um I do think I mean in terms of kind of
25:11
like I think there's like a there's like a person aspect to this. There's also like a company aspect to this. Like I do
25:17
think that like data is still really really really valuable. Um I think when you think about this
25:23
harness basically there's like if if harnesses become I by the way I I don't think that most people will build their
25:29
own harness in the long run because it's actually way harder than than building a framework. And so I think they'll uh use
25:35
uh a harness from us or from someone else. And so if you think about what goes into that it's like the prompt and
25:40
the instructions and then the tools that it's connected to. And I think one thing that this is more at the company level now, but like one thing that existing
25:46
companies have is all the data and all the APIs if if you've done a good job at that then I think it will actually be
25:52
pretty easy to plug those in and get real value out of things. Um we were talking to someone in the finance space
25:58
and and they are saying yeah like the value of data is just going up and up and up and up. So if you're a previous uh software vendor and you have this
26:04
data that is valuable like you should be able to expose it to agents and get a lot of value out of that. Yeah. The other part of it though is the
26:11
instructions on what to do with that data and that's probably like more net new um in terms of like how to use that
26:17
data. That's probably you probably had some ideas about that as a software vendor but you didn't kind of like
26:22
consolidate it. You didn't have it because that was something that humans would still do. Like a lot of what agents are doing what humans would still
26:29
do. So you'd give them the tools to do it but you wouldn't have tried to like automate that or you wouldn't have successfully automated it before kind of
26:35
like agents. And so that part I think is is is newer and we're also seeing a lot
26:40
of demand like I think a lot of the a lot of the vertical startups um rogo is a great example of someone who has
26:46
experience in finance and is bringing that knowledge to agents and the reason that's kind of like effective is because
26:52
a lot of the agents are driven by by knowledge and and and and and not like
26:57
world knowledge but like knowledge on how to do specific patterns. Um so kind of yeah I think there's like are the
27:03
people who are building software the right people to build agents. Um I think we saw a lot of really senior developers
27:09
adopt agentic coding and so I think it it it's a mindset thing but like yeah there there is maybe a younger skew
27:15
there. Um and then and then for companies depends on the data. Yeah. Even Pat's on on cloud code. So
27:21
even old guys can get it. Sonia got me on there. Um okay. Okay. So, it seems like the
27:27
trace is a core artifact you think in kind of this new world of of agent development and it's something that
27:32
linksmith helps a lot with. What other core artifacts do you think are there? And specifically, I'm wondering about
27:37
eval. Yeah, I think um maybe artifact is the wrong word. Components.
Human Judgment in Evaluating Agents
27:43
Component. Yeah, I mean I I I think one other thing that is different between building software and and building
27:48
agents is that to evaluate software you could pretty reliably you you could rely on tests and assertions of of things
27:55
programmatically. Um with agents a lot of what they're doing is things that humans would do. So
28:00
in order to judge them you need to bring human judgment into that. And that's another thing that we try to do in Lingsmith is how can you bring you've
28:06
got these traces how can you bring human judgment to them? And so that like one obvious way to do that is to bring
28:12
humans into the equation. Um and so we see data labeling startups doing really well. Uh we have a concept of annotation
28:18
cues in Langmith to bring people in there. And so that actual like actual human judgment is is a big part of it.
28:23
And this is humans annotating the actual trace. So like ah the agent did this and this and this and that was good or bad.
28:29
Yeah. Yeah. Um saying and and sometimes giving like natural language feedback on it like this is good, this is bad,
28:35
should have done this. sometimes just like correcting it like actually like laying out what the what the uh correct steps were kind of depends on the use
28:41
case and it's probably different for model companies doing RL than it is for for agent companies building building
28:47
agents. Yeah. Um but it's bringing that human judgment to it. Um but then another thing we see is trying to build proxies for this
28:53
human judgment. And this is where LLM as a judge type things come in where you can run an LLM or something else that
28:59
you know has some semblance of human judgment in it to grade the the thing that requires human judgment. Um, and so
29:05
one of the things that we think a lot about is how to make building these elements as judges easy because a big
29:11
part of them is making sure that they're aligned with your human judgment and human preferences. And so and because if
29:17
they're not, you know, then your then your greater is just bad. And so we have a we have a concept in Langmith called
29:22
align evals. Um, where a human goes in labels some traces and then that that
29:27
builds an LLM as a judge that that kind of like is calibrated against those traces. Um because a bit yeah a big part
29:33
of it is bringing this human judgment and you just want to make sure that if you're bringing a proxy of it it's it's well calibrated. Interesting. I remember when we first
29:40
got into business with you we were emailing about LLM as judge. Is it a viable idea or not? So it seems like it's come a long way.
29:45
Okay. So there's there's a few different aspects of LM as a judge, right? There's like the immediate like so what most people use them for in eval is like
29:51
taking this trace and give it a score of like one to to zero or or 0 to 10 or something like that. And yeah, I think
29:57
that's valu uh viable and people are doing that. They're doing it offline. They're also doing it online because some of these judgments you don't need
30:03
ground truth for. But I think the other area where this comes into is uh I mean
30:09
you you kind of see this in the coding agents themselves like the coding agents will they'll work up until something
30:16
then they hit an error and they get an error and then they have to correct there and so they're kind of judging their previous work. And so and and we
30:22
also see this in memory like a big part of memory is like reflecting on traces and then updating something. And so like
30:28
can LLM reflect on traces that are either like their own or their own from a previous session or someone? Yeah,
30:35
absolutely. I think they can. We see this all across evals and just like error correcting and and memory. It's all kind of the same thing.
30:41
I see. And then maybe Okay, so you have all this you you have all the traces.
30:46
Yep. You have the evals. Yep. Um I think the natural question that comes to mind for me is is the EVEL
30:53
like a reward signal for reinforcement learning or is it a feedback mechanism for you know a human engineer to improve
30:59
the harness or for agent engineers to improve the harness because everyone's no one's no
31:05
one's coding manual anymore. They're all using these. So yeah, one big thing that we've seen is like um we we have a
31:10
Langmith MCP and we have Langmith fetch which is a CLI because coding agents are actually great at using CLIs. um you
31:17
give that to an agent and it can pull down traces and diagnose what went wrong and then and then it brings those traces
31:23
into the codebase where it can then fix it. That's absolutely a pattern that we are seeing and and we really really really want to support that pattern.
31:30
Crazy. Yeah, I know. And it's good. Yeah. Yeah. Yeah. Yeah. It's good. Like it it Yeah, it um and and so we see I'm
31:36
probably more bullish on that than on kind of like reinforcement learning at least for like the agent app kind of
31:42
like companies right now. That seems like real recursive self-improvement though. Yeah, I think I think uh again there's
31:49
still a human in the loop. So like uh back to the point around around like things are good when you can do something as a first draft like it it
31:55
changes the prompt and then the human reviews it and like it it keeps it on the rails. But like um I absolutely so
32:02
so one of the things we launched was Langmith agent builder which is a no code way to build agents. One of the
32:07
cool things that we have in there is memory. Um, and so right now the way
32:12
that memory works is when you interact with an agent, so it's not in the background yet. It's not like pulling down its traces, but when you interact
32:18
with the agent, if you say, "Oh, you should instead of X, you should have done Y," it will go to its own instructions, which are just files, and
32:24
it will edit those files. So then in the future, and so that's also kind of like a a version of this. One thing we do
32:29
want to add is like the thing that runs every night, looks at all the traces for the day, updates its own instructions,
32:35
and so the dreaming thing. Yeah. Yeah. Sleep time compute. Um, yeah, sleep time compute. Is that what it's
32:40
called? That's a term. Yeah, I think Leta came up with that. It's It's a great term. Yeah, that is good.
32:45
Love it. Awesome. Okay, let's talk more about the future. Um, what are you what are you
Future of Agent Development and Memory
32:50
most excited about? Sounds like you was talking a lot about memory here. I like memory a bunch. Yeah, I mean I think asking the agents to improve
32:56
themselves is I mean I think very very cool and can be useful in a lot of
33:01
situations. Not useful in all situations by the way. like if I'm chatting so so chat GPT added memory I don't actually
33:07
really use that feature that much and I don't think it's created any more stickiness for me to use the product or
33:13
anything like that and I think part of the reason is when I go to chat GPT I do like
33:18
everything's a one-off thing like I don't really repeat myself that much I have like I'm asking about software I'm asking about food trips like everything
33:26
um in agent builder that you you build kind of like specific workflows for specific things so I have an email agent
33:32
Um, and I actually I know it's been emailing me for two years. Well, so, okay, so I had an email agent
33:39
outside of agent builder and it had this like memory as part of it. We then built agent builder and I wanted to move it
33:45
into it and it didn't have all of my memories and that was a big even though it had the same starter prompt and the
33:51
same tools and that was actually a I still haven't fully switched over because it kind of sucks now compared to
33:57
what it was before like the compared to the other one and I if I just interact with it then it will get better and it
34:02
will stop sucking but like that's where memory I think can be like a real moat and I absolutely think that we're at a
34:07
point right now where LLM can look at traces and change things about their
34:13
code. Um, and I think the question then becomes how do you do that in a way that's uh safe and acceptable to to
34:20
users. Um, but I I I think that's absolutely uh something that we'll see more of for specific scenarios, not all
34:27
of them. Like I still don't know if this would be useful in chat GPT in this form at least. Yeah.
34:32
How do you think the UI around working with long horizon agents will evolve?
Async and Sync Modes in Long Horizon Agents
34:37
I think there probably needs to be like a sync mode and an async mode. So long horizon agents running for a long time,
34:44
probably default would be some sort of like async way to manage them. Like you're if if it runs for like a day,
34:49
you're not just going to sit there and wait for it to finish. You're probably going to kick off another one and another one and do a bunch of work. And so I think this is where like async
34:55
management of things comes into play. I think things like linear and Jira and canban boards and maybe even email are
35:02
uh interesting to look at for inspiration about like what it looks to like to basically manage a lot of these agents. But I think for a lot of these
35:09
at some point you're going to want to uh switch into synchronous communication with uh these agents because they come
35:15
back with a research report and you want to give it feedback that it wrote something wrong. And I actually think chat's like reasonably good at that. The
35:22
only thing that I'll maybe say there is that so many of these agents are now modifying other things like files in a
35:29
file system that having some way to view that like state is really important. And so you see this in coding um where IDE's
35:38
ids are still used when you want to go in and manually kind of like change code and and uh even when I kick off uh cloud
35:45
code when it finishes I sometimes I pull it up and look at the code that it actually wrote. Um and so I think I
35:51
think having a a way to view that state is interesting. One of the one of the really cool things that Anthropic did
35:56
with their Claude co-work um when you set it up, you choose the directory that
36:01
it's kind of like working in and you're basically saying like this is your environment. Um and obviously like that's what you do in coding as well.
36:07
You open your ID to a particular directory. But I think that's a nice mental kind of like framing is like this
36:13
is your workspace. That could workspace could be a Google drive. It could be a notion page. Um, it could be anything
36:18
that like stores state and then you and the agent are collaborating on that state. You kick it off, you manage maybe
36:24
a bunch of these running asynchronously. Then you go into sync mode where you chat with it, but you also view this state. And so that's kind of what I see
36:31
right now. And this is like your agent inbox idea then of, you know, to to enable the sync
36:36
mode, your agent's going to have to need a way of reaching you. Yeah, exactly. And so yeah, so the agent inbox or something we launched that
36:42
about a year ago and and had this idea of like ambient agents that ran in the background and pinged you and the first
36:48
version of that didn't have a sync mode and so it would ping you and then you'd give a response but then you'd kind of
36:53
just wait for it to ping you again but oftentimes like when I was switching in to email you and respond to you, I would
36:59
I would I would I would say very small things and I didn't want to switch out and wait like I I you're really important. So I wanted to like be in the
37:05
sync mode in this conversation with the agent. And so one of the things we added was this was was now when you open the
37:11
inbox you're brought into chat and chat is very synchronous and that was actually a big unlock. So I actually think having just an async mode. I don't
37:18
think that really works right now. Maybe in the future if they get so good that you don't really need to like correct them as much it gets more viable. But at
37:25
least right now I think we see people switching from async to sync and back and forth. What do you think of code sandboxes?
The Role of Code Sandboxes and File Systems
37:32
Like is is every agent going to have access to a sandbox? Is every agent going to have access to or a computer?
37:38
Is every agent going to have access to a browser? Really good question. Something we're thinking a bunch about. I think uh I
37:45
think coding has clearly worked more than browser use so far. So at least in
37:50
the short term, it seems like if any of those are going to be a key part there, it's going to be this code execution part. Um file systems, I'm completely
37:58
file system pled. I think in some form agent should have access to some file system coding. I'm maybe not as pilled,
38:04
but I'm probably like I'm like maybe like 90% there. Like yeah, I think like it is definitely possible. There are
38:10
it's maybe for like the longer um tale of use cases. So maybe there's
38:15
something where if you're doing something repeated, you need code less, but I think file systems are still useful because that repeated thing could
38:21
be generating a lot of context and and you need to do context engineering. Um but for the long tale of things,
38:27
coding's great and there's really no replacement for that. browser use. Um, I think the models just aren't good enough
38:32
at it right now from what we've seen. Um, you could probably give like a coding agent a CLI to do browser use and
38:38
there's probably some approximation there. There's probably some people doing some I think I have seen some cool stuff there. Um, and then computer use is like a
38:44
weird hybrid of the two. Um, so if Yeah, code sandboxes, I really like code sandboxes. Yeah. Yeah.
38:50
Cool. Um, Harrison, thank you so much for joining us today. you have consistently seen the future on agents
Conclusion and Future Predictions
38:56
and it was really cool to have this conversation and talk about how context engineering has evolved to the current
39:01
point in time with with harnesses and and long horizon agents and so thank you for for driving that future and thank
39:07
you for always chatting with us about it. Thank you for having me on. I look forward to being back on sometime in the future and being completely wrong about
39:12
everything I said today. So it's very hard to predict the future.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `Context Engineering Our Way to Long-Horizon Agents: LangChain's Harrison Chase`  ·  visible_channel: `Sequoia Capital` (211K subs)  ·  series: `Training Data`  ·  hosts: `Sonya Huang + Pat Grady`
- visible_url: `youtube.com/watch?v=vtugjs2chdA`  ·  visible_published: `Jan 21, 2026`  ·  visible_views: `114,395`
- visible_description: *"Harrison Chase, cofounder of LangChain and pioneer of AI agent frameworks, discusses the emergence of long-horizon agents that can work autonomously for extended periods. Harrison breaks down the evolution from early scaffolding approaches to today's harness-based architectures, explaining why context engineering - not just better models - has become fundamental to agent development. He shares insights on why coding agents are leading the way, the role of file systems in agent workflows, and how building agents differs from traditional software development - from the importance of traces as the new source of truth to memory systems that enable agents to improve themselves over time."*
- chapters (visible): Intro · Discussing Long Horizon Agents · Examples of Long Horizon Agents · Harness Engineering and Model Integration · Evolution of Agent Frameworks · Building Long Horizon Agents vs. Software · Understanding Non-Determinism Systems · The Importance of Tracing in LangSmith · Context Engineering and Its Significance · Testing and Collaboration in Agent Development · Iterative Nature of Building Agents · The Role of Memory in Agent Development …
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_12.53.06_AM-a4efd339…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

This one is absolutely core. This is not just “another agent video.” This is probably one of the most important sources so far for OMNI’s Build OS, CNS runtime, agent memory, context packets, traces, and long-horizon agent architecture.

The keeper idea:

In agent systems, the trace becomes a first-class source of truth because you cannot understand the system only by reading the code.

That is huge for OMNI.

Core takeaway

Harrison’s central point is that long-horizon agents are finally starting to work because models got better and harnesses got better: planning tools, compaction, file-system access, memory, subagents, MCP/tooling, and context engineering around the model. He says agents are different from traditional software because the logic is no longer fully visible in code; part of behavior comes from the model and emerges during execution, so you have to inspect traces to understand what the agent actually did.

That is the OMNI clue:

Agent behavior lives in code + model + context + tools + trace — not code alone.

OMNI translation
1. “Trace is source of truth” belongs directly in OMNI.

For traditional software, you can inspect code and mostly understand what happens.

For agents, you cannot. At step 14, the agent’s context may include things pulled in during the prior 13 steps. Harrison says traces show what was actually in context and what happened under the hood.

OMNI must absorb this hard.

For every significant OMNI agent or CNS run, we need an ordered trace showing:

source event,
context packet,
retrieved sources,
authority labels,
tools invoked,
subagents invoked,
intermediate conclusions,
policy checks,
human interventions,
outputs,
domain commit / no-commit result.

Doctrine line:

For OMNI agents, the trace is not merely observability. The trace is part of the evidence record.

2. Context engineering is not prompt tinkering. It is runtime architecture.

This video sharpens “context engineering” into a real architecture category.

Context engineering includes:

what the agent sees,
what gets retrieved,
what gets compacted,
what gets stored in memory,
what gets written to files,
what tools are exposed,
what subagents receive,
what authority labels survive,
what gets omitted.

That maps directly to OMNI’s context packets and Knowledge Reservoirs.

OMNI cannot let agents stuff random context into a prompt. Context must be governed:

Context packets must preserve provenance, authority, freshness, purpose-of-use, and output limits.

Otherwise the model may “know” a lot while not knowing what it is allowed to do with that knowledge.

3. Long-horizon agents are best where they produce first drafts.

Harrison’s strongest practical pattern is that current long-horizon agents are useful where they can run for a while and produce a first draft for a human: coding PR, research report, customer-support escalation summary, incident analysis, finance report, etc.

That is exactly OMNI’s near-term agent posture.

Good OMNI agent tasks:

draft provider review packet,
draft patient reply,
investigate why a patient is blocked,
summarize longitudinal changes,
prepare intake/lab context,
propose scheduling/commerce/doc reconciliation,
generate evidence routing report,
open a Build OS patch proposal.

Bad near-term posture:

agent independently makes final clinical decision,
agent silently updates clinical truth,
agent writes back without authority,
agent handles a high-risk patient situation end-to-end.

Doctrine line:

Long-horizon OMNI agents should produce reviewable work products before they produce autonomous commits.

4. File systems / workspaces are a big agent primitive.

Harrison is very “file-system pilled”: long-horizon agents need a place to store context, intermediate work, large outputs, prior messages, and working state. He says even non-coding agents benefit from some file-system-like workspace.

That matters for OMNI.

Each meaningful agent run probably needs a workspace, not just a prompt:

artifacts,
notes,
retrieved docs,
intermediate reasoning summaries,
generated drafts,
eval outputs,
trace references,
handoff state,
unresolved questions.

For care, this cannot be a random scratchpad. It needs custody and visibility rules.

OMNI primitive pressure:

agent_workspace / orchestration_workspace

But governed by D7/Evidence and CNS, not free-floating.

5. Memory is context engineering across time.

Harrison frames memory as long-horizon context engineering: learning from past traces and updating future behavior. He also says memory is useful for specific workflows, not necessarily every generic chat use case.

That is extremely important for OMNI.

OMNI memory should not mean “the AI remembers random things.” It should mean:

workflow-specific improvement,
patient-context continuity,
provider preference learning,
build-agent instruction refinement,
source re-review learning,
recurring failure-mode suppression,
better routing over time.

But memory must be fenced.

Doctrine line:

OMNI memory may improve context and assistance; it must not silently mutate clinical policy, authority rules, or domain truth.

6. Agent self-improvement is real, but needs human review.

The transcript describes agents pulling traces, diagnosing failures, editing prompts/instructions/files, and proposing fixes — a form of recursive improvement, but still with a human in the loop.

This maps directly to Build OS.

Future OMNI build agents should be able to:

inspect failed traces,
identify context/harness failure,
propose prompt/tool/eval changes,
update an agent harness branch,
run regression tests,
request human review.

But they should not silently rewrite their own rules in production.

Doctrine line:

Agents may propose improvements to their harness; promoted harness changes require review, proof, and versioning.

7. Async + sync mode is the right UI model.

Harrison says long-horizon agents need async management, but users often need to switch into synchronous chat when feedback/correction is required.

That is a clean UI lesson for OMNI.

OMNI agent surfaces should support:

async agent runs,
inbox notifications,
status updates,
“needs review” queues,
takeover / sync chat,
viewable workspace state,
final approval / rejection.

This pairs perfectly with the Warp video.

The product pattern is:

Agent inbox + agent cockpit + workspace state + sync takeover.

8. Testing agents requires human judgment proxies.

Harrison says agent evaluation often needs human judgment because agents do work humans used to do. That means labeled traces, annotation queues, LLM-as-judge, and judges calibrated to human preferences.

OMNI needs this badly.

For OMNI, evals need layers:

deterministic policy checks,
authority-boundary checks,
source citation checks,
clinical-risk checks,
human reviewer labels,
LLM judge rubrics,
outcome-based validation where available.

No single “was this good?” score.

Keeper:

OMNI evals must combine deterministic rules, human judgment, and calibrated model judges — with trace-level evidence.

Where it lands

Thesis §B — AI substrate: massive. Context engineering, memory, traces, harnesses, long-horizon agents, file systems, compaction, subagents.

Thesis §C — Governed Capability Exchange: massive. Tools, MCP, agent workspaces, subagent boundaries, context transfer, external capability calls.

CNS / Orchestration: massive. Every orchestration run needs trace, context packet, intermediate state, stop conditions, review points, and commit boundaries.

Build OS: massive. Agent traces become debugging/collaboration artifacts; agents can inspect traces and propose harness/code fixes.

Knowledge Reservoirs: major. Memory and context engineering rely on retrieving authority-labeled context without laundering it into truth.

Product surface: major. Async/sync agent management, agent inbox, workspace view, human takeover.

Doctrine / primitive pressure

Potential concepts worth routing:

agent_trace
trace_as_evidence
context_packet_trace
agent_workspace
orchestration_workspace
context_compaction_policy
memory_update_policy
trace_annotation
aligned_eval
LLM_judge_calibration
agent_harness_version
subagent_context_contract
agent_inbox
sync_takeover
async_agent_run
sleep_time_compute
harness_improvement_candidate
trace_based_debugging
agent_learning_boundary

Keeper doctrine:

OMNI agents are not governed by prompts alone. They are governed by traces, context packets, tools, memory policy, evals, workspaces, and commit boundaries.

What not to import blindly

Do not treat memory as automatically good. In care, bad memory can preserve wrong assumptions, outdated patient facts, stale policies, or biased preferences.

Do not let agents edit their own instructions in production without review.

Do not confuse trace visibility with truth. A trace shows what happened; it still needs interpretation, review, and authority labeling.

Do not overbuild a LangChain clone. OMNI should import the architecture principles, not necessarily the exact tool stack.

Do not assume long-horizon agents are ready for autonomous clinical execution. Their best current pattern is still reviewable first drafts.

Do-not-miss lesson

Traditional software is understood by reading code. Agentic systems are understood by reading traces.

OMNI-specific:

If OMNI becomes agentic, every serious agent run must leave a governed trace: what it saw, what it did, why it did it, what it changed, what it could not change, and who/what committed the result.

Priority / confidence

Priority: 5/5
Confidence: 5/5
Suggested analysis depth: full_semantic

This should absolutely feed §B/§C before v3 resumes. It is one of the strongest sources so far for trace-as-truth, context engineering, memory, harness governance, and agent runtime design.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus deep-read extraction  ·  layer: `analysis_nonbinding`  ·  EVRUN-2026-000001 (★SPINE — context-engineering = CNS core; pairs 062/087/077)
- reviewer: `Opus` · type: `AI assistant` · at: `2026-06-09` · purpose: `formalize Review 001 → structured extraction → registry` · binds nothing (`GRD-036`/`GRD-044`) · [full agent extraction f59510d0]

**18 clusters. Harrison Chase/LangChain. CNS-spine — reframes CNS from event-router → governed `context_assembly`/`context_field`. Framework-vendor lens; import architecture physics not LangChain stack. Keeper: the trace is part of the evidence record; CNS's core job is governed context engineering per activation step.**
1. **`context_engineering` (CNS core job · context-as-program)** — assemble right governed context per step (retrieve/compact/store/offload/authority-label/omit), not prompt tinkering. §B/§7.6/§12(CNS rewrite center)/§8/CNS(`context_assembly`/`context_field`)/KR/Build-OS. "everything's context engineering" 0:24. ABSENT→spine.
2. **`trace_as_source_of_truth`/`trace_as_evidence`** — operational truth = code + ordered trace (context/tools/subagents/policy-checks), not weights/review alone; trace joins evidence record. §B/§7.6/CNS(`context_packet_trace`)/Build-OS(trace-from-day-one)/domain-contracts(audit)/UX. "traces are where you can see the source of truth" 21:05. ABSENT→spine.
3. **`emergent_context` (step-N unpredictability)** — context at step N not inferable from static harness review; log per-step assembly, online eval mandatory. §7.6/§12/CNS/§A/Build-OS. "don't know what the context at step 14" 0:36. ABSENT→spine.
4. **`long_horizon_agents` + `first_draft_pattern`** — long-horizon viable now for reviewable first drafts (PR/incident-report/escalation-summary), not 99% autonomous commits; AI proposes, domains commit. §B/§8/§A/CNS(stop-conditions)/UX(needs-review queue)/domain-contracts. "produce a first draft… you edit it" 3:39/4:07. PARTIAL→spine.
5. **`logic_split_code_model` / `nondeterminism_architecture`** — behavior logic splits across code harness + model emergence; can't understand app without running it + reading traces. §B/§A/Build-OS(ship-unknown-behavior + eval gates)/CNS/future-watch. "logic… not all in the code" 19:08. PARTIAL→spine.
6. **`online_testing_priority` + `trace_derived_tests`** — prioritize online/shadow eval under real inputs; build regression suites FROM traces of real failures. Build-OS(online eval/trace-derived regression/aligned judges)/§8/CNS/§A. "online testing… more important in agents" 21:34. ABSENT→spine.
7. **`context_compaction_policy` + `compact_with_archive`** — policy-governed compaction: summarize active window, archive full history w/ provenance (recoverable/auditable); never silently drop authority labels. CNS(`context_compaction_policy`)/KR/Build-OS(pairs 054 `trained_context_compaction`)/§7.6. "summarize but put all the messages in the file system" 17:19. ABSENT→spine.
8. **`agent_workspace` / `scoped_agent_workspace` + state-visibility** — governed workspace per run (artifacts/notes/drafts/eval/trace-refs/handoff) scoped by patient/encounter/operator w/ custody+RBAC+consent; users view/modify state not chat-only. CNS(`agent_workspace`)/KR/domain-contracts(D7 custody)/UX(workspace panel + cockpit 058)/security/capability-topology. "give it access to a file system" 17:14. ABSENT→spine.
9. **`offload_large_tool_output`** — large tool/MCP results spill to workspace w/ pointer; fetch on demand; prevents context rot. CNS/§C-capability-topology(tool-result envelopes)/Build-OS. "put it in the file system and let it look it up" 17:36. ABSENT→spine.
10. **`subagent_context_contract`** — subagents/MCP/skills = context-delivery requiring explicit contracts (what passes/returns; intermediate work not dropped on final-only merge). CNS(`subagent_context_contract`+trace-merge)/§C-capability-topology(MCP under gates)/§7.6/Build-OS. "only the final response is passed back… what are you talking about?" 11:31/11:43. ABSENT→spine.
11. **`memory_as_temporal_context_engineering`** — memory = context engineering across time (workflow-specific continuity); must not silently mutate policy/clinical truth; portability loss = moat/UX failure. KR(workflow-scoped + provenance)/CNS(`memory_update_policy`)/§A/Clinical-Memory(continuity ≠ auto-adopt)/future-watch. "memory… context engineering over longer time horizons" 15:53. PARTIAL→spine.
12. **`self_edit_instructions`/`sleep_time_compute`/`agent_learning_boundary` (GUARDRAIL)** — agents reflecting on traces to edit instructions/memory = proposal ONLY; promotion needs human-review+proof+versioning; nightly "dreaming" drafts harness changes, never silently rewrites production rules. Build-OS(`harness_improvement_candidate`)/§A(promotion-gated)/CNS(patrol≠commit)/KR/security. "runs every night… updates own instructions… still a human in the loop" 32:35/31:49. PARTIAL→spine (hard guardrail).
13. **`trace_reflection_unified`** — LLM reflection on traces = one primitive serving eval/self-correction/memory, differentiated only by authority gate on what may change. CNS/Build-OS(`aligned_eval`)/KR(reflection→re-review candidate)/§A. "It's all kind of the same thing" 30:28. PARTIAL→spine.
14. **`harness_vs_framework` + `scaffold_to_harness` + specificity-in-tools** — era shift: bespoke cognitive graphs → fixed harness + NL specificity in tools/instructions (AGENTS.md); OMNI owns care-grade governed harness, not generic framework fork. Build-OS(harness versioning/markdown-for-agents)/CNS/§B/KR/§3.5(LangGraph/LangChain = Lens-B only). "moved from scaffolds to harnesses" 15:04. PARTIAL→spine (vendor-consolidation claim = watch).
15. **`core_agent_algorithm`** — durable core = run LLM in a loop, model chooses what to pull into context; complexity belongs in governed context/authority not bespoke graphs. §7.6/§12/CNS(convergence loops)/§B/Build-OS. "run the LLM in a loop… finally there" 16:06. AFFIRM→vocabulary→promote (sharpen).
16. **`human_judgment_eval` + `trace_annotation` + `aligned_llm_judge`** — eval needs human judgment + trace annotation; LLM-judge only after calibration to human labels; layered eval (deterministic+authority+citation+human+calibrated-judge). Build-OS(`aligned_eval` gate)/§A/KR/CNS. "align evals… calibrated against those traces" 29:22. PARTIAL→spine.
17. **`agent_trace_debug_loop` / `trace_based_harness_improvement`** — build agents fetch traces → diagnose → propose harness/prompt/tool patches → human review → regression; more viable near-term than RL for app cos. Build-OS(trace→patch)/CNS(failed-run export)/§8. "pull down traces and diagnose what went wrong" 31:17. ABSENT→spine.
18. **`async_sync_dual_mode` + `human_ai_escalation`** — long runs default async (inbox/kanban); switch to sync chat for correction/takeover; failed first-line → background report → human handoff. §8/§7.7-UX(agent-inbox/sync-takeover/workspace-view)/§A(attention-routing)/CNS/future-watch (pairs 062 — merge, don't duplicate). "sync mode and an async mode" 34:44. PARTIAL→spine (merge into 062 inbox cluster).

**Vocabulary/watch (register, don't spine-promote alone):** `harness_model_eval_decomp` (attribute failure to harness vs model); `domain_pattern_knowledge` (vertical procedural knowledge in reservoirs; retrieval≠adoption; pairs 068); `filesystem_over_browser`; `code_sandbox_isolation` (pairs security/089); `langchain_product_stack` → reject (Lens-B §3.5 only). **Net-new:** Batch-6 registry cluster "Context engineering = CNS core job" already hosts convergence — this SHARPENS+BINDS. Truly net-new = `agent_learning_boundary` (authority fence: self-edit/memory may NEVER touch clinical policy/authority/consent/identity). Everything else SHARPEN/EXISTS: `context_assembly`/`context_field` (merge 087), `context_packet_trace`, `context_compaction_policy`(+compact_with_archive), `agent_workspace`(+scoped+custody), `offload_large_tool_output`, `subagent_context_contract`(+trace-merge), `memory_update_policy`, `sleep_time_compute`(draft-only), `harness_improvement_candidate`, `aligned_eval`/`trace_annotation`, `sync_takeover`/`agent_inbox`(via 062), `orchestration_run_trace`. REJECT as OMNI primitives: LangChain/LangGraph/LangSmith nouns; RL-weight-training path; "most people won't build harnesses" (market claim). **Reread (MANDATORY before CNS-contract/§7.6/§12 promotion):** context-engineering+trace-as-truth (0:00–0:48, 19:44–22:03 — CNS router vs context_assembly rewrite); compaction+archive+offload (6:08, 15:34, 17:19 — bind 054, provenance survives compaction); subagent context-loss (11:19–11:49 — intermediate-state merge); self-edit/sleep-time guardrail (31:49–32:35 — §A promotion-gated + 089; never auto-promote); memory workflow-scope+portability (33:07–34:07 — Clinical-Memory gate + FWREG-006/007); eval+aligned-judge (27:48–30:35 — 054 + 085 jagged); async/sync+workspace-visibility (34:37–37:25 — dedupe 062, single inbox/sync_takeover host). DO-NOT-reread: LangChain marketing, terminal-bench rankings, browser-vs-code predictions, "completely wrong about everything" hedge 39:12.

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000001` (ai-corpus synthesis + routing) · per-source extraction: **§3 Review 003** (this file) · concept_registry: `analysis/EVRUN-2026-000001_ai-corpus-synthesis-and-routing/EVRUN-2026-000001_ai-corpus_concept_registry_and_routing_map.md` · anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · promotion: gated (`GRD-036`/`GRD-044`) — clusters route to thesis-v4 + CNS/Build-OS/security/capability-topology contracts via registry; no direct binding from this file.

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged likely **verbatim-reread cluster** (context engineering / harness / traces / memory).

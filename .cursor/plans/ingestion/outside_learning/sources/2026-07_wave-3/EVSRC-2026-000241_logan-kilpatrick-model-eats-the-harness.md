# EVSRC-2026-000241 — Google DeepMind's Logan Kilpatrick: Why the Model Eats the Harness

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000241_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(lifted verbatim from operator metadata block at top of §3 Review 001 — `identity_confidence: high_from_operator_metadata`)*
- evsrc_id: `EVSRC-2026-000241`  ·  filename: `EVSRC-2026-000241_TK.md` (proposed rename: `EVSRC-2026-000241_logan-kilpatrick-model-eats-the-harness.md` — do NOT rename)
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=cMAs8z2dehs`  ·  source_title: `Google DeepMind's Logan Kilpatrick: Why the Model Eats the Harness`
- channel_or_org: `Sequoia Capital`  ·  speaker: `Logan Kilpatrick (Google DeepMind / Google AI Studio / Gemini API)`  ·  published_at: `Jun 11, 2026`
- captured_at: `2026-07-08`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + pasted transcript`
- content_type: `Google agentic strategy / Gemini API / Antigravity / agent harnesses / model-eats-scaffolding / coding agents / startup strategy / world models / Omni model / product surfaces / outcome-maximizing AI / vertical superintelligence / developer feedback flywheel`  ·  source_reliability_context: `founder/vendor — primary-ish strategic interview; strong for Google's agentic posture, Antigravity-as-shared-harness, model/harness convergence, outcome-over-eyeballs, startup opportunity vs lab absorption; treat forward-looking predictions as strategic signal, not settled fact`  ·  topic_tags_light: `[Logan_Kilpatrick, Google_DeepMind, Gemini_API, Antigravity, agent_harness, model_eats_harness, scaffolding, harness_bench, outcome_maximization, long_horizon_agents, narrow_superintelligence, jagged_superintelligence, verifiability, world_models, Omni_model, single_model, focus_as_startup_superpower, AI_Substrate, Build_OS]`  ·  identity_confidence: `high_from_operator_metadata`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Logan Kilpatrick` · role_in_source: `interviewee` · affiliation_at_publication: `Google DeepMind — runs Google AI Studio + the Gemini API` · speaker_type: `vendor / operator (product lead)` · authority_context: `first-party voice on Google's agentic product posture (Antigravity, Gemini, Omni model), model/harness convergence, developer-ecosystem strategy` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `Sequoia Capital (podcast)`  ·  interviewer / moderator / host: `Sonya Huang (Sequoia Capital)`
- event_context: `Sequoia interview shortly after Google I/O (Agentic Gemini era launch)`  ·  perspective / conflict notes: `vendor-positioned (Google) — bullish on Gemini/Antigravity; forward-looking predictions = strategic signal, not settled fact. Naming note: Google's "Omni" multimodal model ≠ internal OMNI substrate.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [x] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from operator block · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) — *Opus-main folds; this subagent does NOT edit registry per hard contract* · [ ] update coverage matrix — *Opus-main* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introduction
0:00
So, we could edit this set so it looks like we're Yes. Yeah. Yeah. I I want this where we
0:05
were talking off camera like we should do that for the intro because I think it just like makes all this stuff more capable. I've seen these examples of
0:12
like such subtle nuance that like make me appreciate that it's like the world understanding playing out. I was I was
0:18
giving a talk um and was on stage with with my friend Tulsi who leads the model
0:24
team. I had mentioned to someone in the crowd to like edit the video and they had literally like took the picture,
0:29
edit it with Omni in real time and this like dog came on the stage. In the edited version, the other guests sort of
0:35
like look down, see the dog, they like chuckle a little bit. This is while I'm like opining about whatever AI
0:40
laugh about your jokes. Yeah, that it was not my jokes. [laughter] They they laugh at the dog coming up. It jumps onto my lap. I sort
0:46
of like acknowledge the dog. I keep talking. I'm like petting it or whatever. and just like there's like so
0:52
much subtle subtlety in getting that right and the model crushed it and it's just it very interesting and like still
1:00
trying to like absorb and [music] digest like what that means for you know the way we make content and all these other
1:05
things. That's so interesting.
1:14
[music]
1:21
[music] I'm delighted to have Logan on the show.
1:26
Uh Logan runs Google AI Studio and the Gemini API. You spend a lot of your time thinking and building for the next
1:32
generation of builders. Yes. So I'm excited to talk to you about everything from Agentic AI to AI coding,
1:38
world models, and more today. Um and right off the heels of Google IO. So what better timing?
1:43
Yeah, I'm super excited. Thank you for having me. Wonderful. Um let's start with Agentic AI. So, Sundar opened IO by calling this
Agentic Gemini Era
1:51
the Agentic Gemini era. What does Agentic AI mean for Google? Yeah, it's a good question. I think and
1:57
we were uh we sort of if you if you followed closely, we did sort of mention some of these things back with like
2:03
Gemini 2.0, which I think was like a little bit early. And so, I think this era, this like Gemini 3.5 era feels like
2:10
it's actually becoming true now. And we're in the era of agentic coding uh or agentic products and everything agents
2:17
as far as Gemini goes. I think for us this agentic layer and I think we we
2:22
announced this actually at IO um sort of being powered by the anti-gravity agent harness is this like additional through
2:29
line for Google that sort of connects all of our products that they're sort of like based on now. And so historically
2:34
like prior to Gemini there actually like wasn't a through line for the you know probably subund number of Google
2:41
products that we have the 50 Google products we have there wasn't a through line we had Gemini it became this
2:46
through line everything is now sort of using Gemini in some way that's now becoming true for anti-gravity as sort
2:51
of all of the products rebase um to become sort of like agentic native
2:57
products and like actually taking action on behalf of users and helping them get things done. you see this like new
3:02
through line emerging which I think is actually really really interesting. Um and and sorry help me with anti-gravity is
Antigravity Agent Harness
3:08
the the IDE right or the nonie. Yeah, anti-gravity is is a lot of things which I think is is sort of again uh is
3:15
is an opportunity for us. Um you have sort of a core IDE you have sort of like the agent first experience if you want
3:21
it on the web. You have a CLI. You have an SDK. But I actually think and I don't know how much we've framed it this way,
3:27
but like it really is an ecosystem of stuff that we built and it's designed to sort of like meet developers wherever
3:32
they are. So you could use it through the Gemini API if you want to and you want a managed agent that you don't have to do any of the the sort of
3:38
infrastructure work for. Um and then the most interesting bit is like it's not just the ecosystem of anti-gravity
3:44
stuff. It's also powering like literally it's the the same harness is actually powering all the other Google products.
3:49
So anti-gravity will be powering a bunch of agent stuff in search in the Gemini app um across like cloud and and AI
3:56
studio which is really exciting. I see. So it used to be the Gemini API. So like the language model was the through line in terms of how AI gets
4:04
baked into every Google product. Yeah. And now it's not only the API, it's the the coding harness.
4:09
Exactly. Um that's that's being used in each of these products and therefore it's the coding agent itself that's driving more
4:15
agentic properties. Yeah. In the products. Yeah. Fair description. Fair fair description. I think more generically too it's just
4:21
like it is the agent harness. I think like coding as sort of like a specialized use case of the agent harness I think is is obviously powerful
4:28
but it is like coding has proved to be the general purpose agent harness in addition to also working really well for
4:33
coding. Are agent harness and coding harness synonymous or not? There's definitely nuance. I think
4:38
there's like optimization that you can squeeze out of like specializing and actually you see this where like the you
4:43
know technically the agent harness that gets used for the way that AI studio uses it is like a little bit specialized
4:49
for you know the vibe coding use case and the the way that the Gemini app is using the agent harness is a little bit
4:54
specialized for the sort of consumer always on 24 by7 agent. Um so I think
5:00
you have that base harness um that like probably has like 80% of the same stuff and then you specialize for for coding
5:06
or for whatever the use case is. Interesting. How do you think about the cannibalization of the existing business
Cannibalization and Outcomes
5:11
especially now that you are you know going much more aggressively into agentic properties because I could see
5:18
for example if all you're doing is search or summarization um there's you
5:23
know not as much of a cannibalization fear whereas if you're actually going through my emails reply replying to them
5:29
for me like am I even going through my email anymore and so I could imagine that there's actually just fewer human
5:35
eyeball hours um uh on your products as a result of having more agentic capabilities. Is that fair or how do you
5:42
think about the count cannibalization? Yeah, it's interesting. I think one sort of observation I have is that like at
5:48
the beginning and I think Sundar's done a great job of of sort of talking through this is at the beginning of the
5:54
the sort of current AI era like everyone assumed that AI being able to answer
5:59
questions for you was going to be like negative sum for for search. Um, and
6:05
actually what's ended up happening is it's been incredibly positive sum for search. Like people are searching more, people are doing more. And so I think
6:11
and agents are searching too. Yeah. And agents actually again there's like this whole market that spawned at
6:16
the same time that agents are doing more at the same time that humans are also searching more. And so I think it will be obviously there's a finite amount of
6:23
like human time in the world. Um, but from from like my early feelings of how
6:28
a lot of this is playing out, it does feel like it's it's very positive some from like an ecosystem value creation
6:33
like how the human behavior aspect of it turns out I think is like somewhat clear in the next 1 to two years much less
6:40
clear you know 3 to 5 years from now when the technology is improved and the products probably look a little bit
6:46
different than the way that they do but ultimately like that is the success of product I think like we we have a bunch
6:51
of conversations with Demis all the time and it's like the point of building the technology is so that it can go and do
6:58
stuff for you. Like the point like success for Google like probably doesn't look like you know maximizing eyeball
7:03
time in front of our products. It's like maximizing outcome for customers to like do the thing that they want to do so
7:08
that they can go and live their life and do what they want. And so I feel like you'll you'll probably see us go down
7:14
the route of like maximizing outcomes for customers and like not maximizing eyeballs. Yeah. I have this term stuck in my head
7:21
agent growth. Like it seems to me so I'm using using coding agents a lot in my personal time and you know I just let
7:27
the agent make all the infrastructure choices for me. I'm like I don't care which database you tell me. Yeah.
7:32
And and so and the reason I ask is you know it's true in coding today. I would imagine it's maybe going to be
7:39
generally true for a lot of things. Let's say shopping down the line. Um how
7:44
do you think that's going to change how advertising works, how value capture works for for the aggregators? It feels
7:51
like it's a very similar trend. This isn't perfectly true, but a lot of these things are just like proxies of each
7:57
other. Like the way that SEO works, I think like is directly correlated with like the way that um like I forgot what
8:03
the term now it's like GEO is like the generative engine optimization or
8:08
whatever it's called. Um and so it does feel like there's a lot of correlation between uh between the things. My guess
8:15
is it looks like much less of a radical shift than than the than I think maybe
8:20
what we assume right now just because these things compound on top of each other. If you were to, you know, grade the
How Agentic Are We
8:28
scale of agenticness in terms of crawl, walk run, where are we in terms of how agentic the Google suite of products is?
8:34
Yeah, that's a that's a great question. It's definitely like crawl right now. Um, and I think some of this is like all
8:40
of the inherent product tension for Google is like you have what 13 billion plus user products. And so like I
8:46
actually think we have some more like labs like experiences where you're probably closer to running uh or
8:53
walking. Um, but I think like most of the product experience today is is definitely closer to crawling. And I
8:58
think that's just like the stewardship responsibility we have sort of building a product that's being used by lots of people. Like I don't think the long tale
9:04
of customers are like ready to have AI running and just doing all the things like they probably they want to be in the driver's seat. They're cautiously
9:11
taking the first step. And I think the the Google team and like search is maybe like the most quintessential example of
9:17
this. Like I think they have a lot of responsibility to actually do that in a way that it brings people along and doesn't just like change everything of
9:24
how they interact with the internet and the way they associate with products and stuff like that. So yeah. Which products do you think are
9:30
closest to the walk? That's a good question. I think Gemini app is definitely closest to walk and so for for Spark I think having a 247
9:37
always on agent like literally going and potentially doing a bunch of actions on your behalf is definitely like one of
9:43
the frontier use cases and I think you'll see I think like anti-gravity is another one where it's like you could
9:48
have autonomous coding agents you know rebuilding operating systems and doing you know billions of tokens and spending
9:55
thousands of dollars on your behalf and I think those are again like more and actually like they're in GDM as well as
10:01
in angle of this. So I think like GDM is taking like very much like a a frontier look at this where I think like the rest
10:07
of Google's products I think are like more incrementally getting there which again makes makes reasonable sense to
10:12
me. Yeah. Do you think that Google ends up with one two three product surfaces for
10:19
if for using AI or thousands? It's tough. I think a lot of this is
10:24
actually baked in just like how humans consume products and my sense is that
10:29
there's something nice about like having this like compartmentalization and this like specialization of products where
10:36
like it it becomes if you end up with a product that is like doing everything for you inherently there's more work
10:42
involved in using that version of the product I think I think would be like the default state I think maybe somebody will spin together like the truly magic
10:48
experience that doesn't make that true but I think I think the long tale of folks end up having to spend more mental energy and more time to actually like
10:55
get the general purpose product to do the thing that they actually want to do versus like there's something nice about
11:01
I click my calendar app, it just shows me my calendar like I don't need to worry and deal with anything else.
11:06
This is my hot take for why slide decks have existed for so long of just like you know the thing the piece of
11:11
information you want to be exactly in the same place. Um, and I think like we as humans are just actually very used to
11:18
that as opposed to the idea of a generative interface sounds so cool to me. But it's like do our brains really isn't that just more
11:24
cognitive overhead for us? It definitely is in certain cases and I think somebody needs to again there's there's a lot of incredibly smart people
11:30
in the world and so maybe somebody will find the experience that like makes it feel more natural. But to me right now
11:37
I'm I'm maybe not 10,000 is the extreme version. I'm guessing it looks more like more products going after sort of like
11:44
different uh and maybe the other answer is like I don't know what it looks like for Google for the ecosystem it looks
11:50
like a lot more products I think like and that that's really exciting I think like how Google will end up strategically deciding like do our
11:56
customers want to deal with us having 10,000 products or would it be better to only have three um will come down to
12:01
like a strategic decision for us that totally makes sense um when I talk to companies in the enterprise they say
12:08
you know everyone's talking about agentic AI, but the only place they've seen agents really working is coding
12:14
agents. Do you agree or disagree with that take? Yeah, I think it depends what your bar
12:19
for working is, which I think is a lot of the nuance of this. Like I think if you're if you're truly trying to like offload very complicated tasks for for
12:28
domains in which like it's the models haven't actually crossed the threshold of quality, then like I think that's
12:33
definitely true. Like the it's not going to solve the problem. But this is something that I want I wish we could like measure. A good example is like
12:40
open router for example is like measuring you know the the total token consumption that's happening. And so you
12:46
can sort of like see these trends play out over time of like how much more intelligence is in the world you know
12:51
now versus a year ago. In parallel the thing that I'm actually really interested to measure is like how long
12:57
is the average like thing the average like agent run or the average task
13:02
actually taking place. And I don't think it's something that they publish, but I feel like they probably have interesting data. And I'm sure there's others
13:08
because because I I do think you're like seeing these like new model capability lands or new model drop and and it's
13:15
like spiking up and and maybe the the curve is still like very low right now, but like you're seeing those like early
13:21
signs of it spiking up where to like longunning tasks and all the model labs are talking about like we released this
13:27
new model and it did, you know, three days of autonomous work or whatever it is. um that that's the extreme but I
13:33
think in practice you're seeing that like trickling up like pretty pretty quickly which is really interesting. So
13:40
even if the enterprises haven't felt it outside of coding like they are going to like this year um as as sort of a bunch
13:46
of those other use cases get get much better as well from like a you know from the deep mind perspective do you think long horizon
13:52
agents is like a KPI that matters is it they is it the KPI that matters it definitely it definitely matters um I
13:59
think for deep mind like we're doing lots of things which which we can talk more about later like there's you know a
14:04
huge portfolio of of different bets that are taking place longrunning agents obviously matters a And I think also
14:10
like specifically coding agents in that matters a lot like it clearly is an accelerant of like every other part of
14:16
your business if you have a great coding model. Um and so making sure we have that I think is is super top of mind.
Gemini vs Codex Claude
14:22
Got it. Um I'd love to shift gears a little bit and talk about coding. Yeah. Um okay I'm gonna ask a hard question.
14:28
Uh a lot of my developer friends were using Claude for a long time. Openi saw
14:34
that declared code red codeex is now really good. I would say my friends are maybe split 50/50 now in using Claude
14:41
and using codecs. I don't hear a ton of them using Gemini, which has always kind of puzzled me. Um, what's going on with
14:49
that? Yeah, it's a great question. I think there's one there's one part of the story that I'll add, which is which which is it makes it even more
14:56
interesting, which is uh December the narrative was that Google had won. Um,
15:01
and when we landed Gemini 3, I think it was like such a such a profound improvement from a model capability
15:07
perspective. I think a lot of the narrative was like Google has taken a huge leap forward um and and made that
15:13
happen. And I think what was interesting to see sort of as a as an ecosystem participant uh is like how not how
15:20
quickly that narrative shifted but just like the next wind of the narrative obviously was like all the agentic
15:25
coding stuff that happened over the holidays and then into January and beyond. Um, and that was that was not
15:31
that long ago. Um, and so it's a it is a feel like we've been warp speed ever since. Yeah, for sure. And but it is it's a
15:37
meta reminder of like just how fast things can can change. Um, I think the observation is is not is not
15:44
unreasonable. I do think the what's happening behind the scenes for us is like trying to push the frontier as fast
15:50
as possible on coding. Um, and so I think anti-gravity actually like is an important part of that. I think one of
15:55
the takeaways is that it's actually really hard to make a great coding model for this like um for this developer use
16:02
case of like really long running suite work if you don't actually have a product that does that. And so I think
16:09
like Google realized that it's why the sort of like wind surf uh deal happened. It's why those folks came over and then
16:15
ultimately built anti-gravity and sort of we've been using internally actually and Sundar showed this at IO uh just
16:20
like the graph of growth of token consumption inside of Google. Um so you sort of like you need that engine to
16:26
spin and sort of the meta comment again is like the engine is spinning. It takes time uh in order to like actually make
16:32
model progress. Um but I'm super confident. I think the the folks the group of folks who we have working on
16:38
code is like uh I describe it as like the avengers of AI internally. Um, and
16:44
so like it it really is like the some of the best people inside of Google trying to push the rock up the hill on this stuff and it taking it super seriously
16:50
and trying to push and I think three flash um you know notwithstanding like some of the conversation about like the
16:57
price and stuff like that like is sort of a step towards actually starting to bring a lot of these capabilities um and
17:04
like the fruits of that labor paying off. Like it's a flash model that's better than any pro model we've ever
17:09
released from a coding standpoint. Um, and the pro models were really good before. So, there's another thread of
17:14
this also, which is like everyone forgets that there's like pre-training windows. And I wonder like somebody
17:21
should like track this online, which would be interesting to see. Meaning like the big run like what clusters have been available and
17:27
exactly the big the big runs are like uh are an interesting threat of this. And so it like look it might look from an
17:33
external perspective that like oh you're you're super behind in some way and like actually you you miss all the context of
17:40
like where the big runs are and where the large pre-training runs are. Um so I think that that also like obviously
17:47
there's pre-training has historically been like a massive strength for Deep Mind like we have some of the best people in the world and so excited to
17:53
see sort of the fruits of that labor and and everything else that's happened like 3.5 flash was like all post training
17:59
gains which is really cool. Um, so a huge uh huge testament to the team that the work that that team did to actually
18:05
like make the level of gains and like surpass the previous pro model um literally just with post training which
18:11
is awesome. How religious are you all about dog fooding internally? Like are for example
18:16
are deep mind folks still allowed to use other models or is it like you guys are using the Gemini harness now and we have
18:21
to make this really really good? Yeah, there's I mean I think people it's so healthy to be using other models just
18:27
because like it's it's so sometimes hard to like actually gro what's happening in the ecosystem if you're not. So like I use all the models, I use all the
18:33
products. Um I think like you know uh folks across the rest of DeepMind are doing the same thing. You definitely
18:39
have to use the Gemini models though. Um, it's just like great from a from a feedback flywheel perspective. And it's
18:45
part of how they get better is like DeepMind has and Google more broadly has like 100,000 plus incredible engineers
18:52
who are using the models and giving feedback and like it should be a competitive advantage for Google because we have that scale of sort of
18:58
engineering resources and like the depth of the talent and can run you know AB tests and live experiments and all that
19:04
stuff. So, um I think you have to use all the models, but I think for for the majority of folks, it's like Gemini as
19:10
the daily driver, which is great. Do you believe in this narrative around like a like a soft takeoff of like once
Vibe Coding Games
19:15
you have a good enough agentic coding model, then it accelerates the pace of research progress and like it's a
19:21
self-reinforcing cycle. It seems obvious that that's true, but I don't I maybe I'm I'm too I've drinking
19:28
too much Kool-Aid that that's [laughter] that's the case. Are you seeing the signs of it yet? Yeah, I mean I you definitely see some
19:33
signs of this. I think the signs that are like still early is doing this from a model perspective. And I think part of
19:40
the context of that is like the resource allocation for some of these like larger training runs is just like significant.
19:46
And so like you you definitely still have like a human in the driver's seat at making those decisions because like you're not going to accidentally, you
19:53
know, take 10,000 TPUs to go kick off some job that like actually doesn't make that much sense. Um, but from a product
20:00
perspective, you for sure see it. Like I think we're seeing this on our team, like we've built mobile apps using
20:05
anti-gravity and like we'll launch them to the world like faster than I think any team at Google has ever built a mobile app. Josh's team did this with
20:12
the Gemini uh Mac OS app and sort of like end to end delivered an app sort of faster than any team had ever delivered
20:19
a Mac app at Google. Um, and it's because of it's because of a dentic coding and so it's great from a product
20:25
perspective. I think you've said in the past that if you could have a system that could build anything with code,
20:30
humans can't compete on the same level and that's narrow super intelligence. Do you think we've reached that point?
20:37
It is interesting. I think um this like narrow super intelligence example is
20:44
interesting to see how obviously it kind of feels that way for coding right now where like coding is like just so good
20:51
um that it does kind of feel like narrow super intelligence. I don't know. It depends how you actually end up the
20:56
details of quantifying this. But I think the important thing is like it to your point earlier, it works incredibly well for code. Um, and so it would be great
21:05
if it did a bunch of other things, but it's actually just like so impactful that it can be great at code. Um, and so
21:11
I spent a lot of time just like letting that that fact sort of just like wash over me because I think it's e like
21:18
obviously building AGI is super important and very interesting, but like building AGI if it sort of like takes
21:23
away from the story of like the current present capability of the technology I
21:28
think is actually like kind of a bad a bad sort of like trade-off. And so I'm trying to like always hold these two
21:34
things in my head equal at the same time which is we need to build general purpose technology but obviously it's so
21:39
impactful to have this thing and it feels like it hasn't taken away sort of it's been one of the best positive
21:46
outcomes is that I feel like it hasn't taken away from like human developers. Um it really does feel like an
21:54
accelerant of what human devel like I as a human developer feel like I have more agency in the world. I feel like I can
22:00
tackle, this is my personal experience, I feel like I can tackle more ambitious problems. I feel like I used to kick
22:06
around ideas and they were like slightly out of reach. Um, and I would just be
22:12
like, "Ah, wouldn't it be nice?" Um, and now I have the opposite problem, which is I'm I'm kicking around an idea and
22:17
I'm like, "I could probably make this even more ambitious." and and sort of it does it adds a different layer of sort
22:22
of um responsibil or like some a different layer of burden actually
22:28
because I'm like oh I can't just like do the the sort of MVP of this like I actually need to like go 10 steps
22:34
further because the technology enables me and like resetting my my level of ambition I think is something that I
22:40
I've also spent a bunch of time thinking about but I think that will happen in other these like vertical super
22:46
intelligence domains um which will be interesting and it feels like we're going to get a bunch of those before
22:51
we've like solved like it's almost like jagged like jagged super intelligence I
22:57
think is what we'll end up with. What verticals do you think we'll get super intelligent at next? That's a great question. I do spend a
23:03
lot of my time too much time probably thinking about coding these days. So I'll think for a second of like the other the other domains. Um I think part
23:12
of this is like things that have like better verifiability obviously are like the ones where you'll you'll see the gains happen more quickly. Um, so like
23:19
things with like math and finance actually like science could be a really interesting one. Like it would be fascinating to see like some of these
23:27
domains where there's some level of verifiability like actually like really
23:32
start to take off. Um, which would be cool. And I also think like an important thing in this like broader narrative
23:39
about just like what a what impact AI is having on the world. Like you almost like want that to be the case in the
23:45
sequencing of like things that work. you want you a lot of these like really really good impactful positive things
23:51
for the world to happen um as early on as humanly possible so that like folks understand what the potential positive
23:57
impact of the technology is. So I think science could be a really interesting one. Yeah, obviously there's all the
24:02
stuff happening right now with like math proofs and stuff like that which I'm not a mathematician so it's it's somewhat over my head but um
24:08
I saw a great tweet the other day uh why did Ardos have so many problems? Exactly. That's a that's a good one. I
24:14
like that. That is that's a good like t-shirt. Um, so funny. Okay, I but
24:19
speaking of Twitter, I went through your Twitter before this, so I'm gonna read back another tweet at you. The good thing about Twitter is there's a public
24:24
record of all your predictions. I need to turn on that auto tweet deleting [laughter] feature or whatever it is. Um, last October you tweeted, "Everyone
24:31
is going to be able to vibe code video games by the end of 2025." Yeah. Did that end up being true?
24:38
It feels close and I think there's I mean it obviously not AAA games like you're not building, you know, the next
24:44
Call of Duty or GTA yet. Um, but I think it's it feels
24:49
closer [snorts] than it's ever been. Um, and I think a lot actually a lot of the
24:56
interesting bit about video games is you actually need to end up building a lot of this like other stuff like models.
25:01
And we were talking off camera before this like 3JS is a great example of this. Like 3JS makes a lot of things possible that weren't before, but
25:07
there's still all these like rough edges that like just a coding agent doesn't solve. And so you need like, you know,
25:14
sprite generation and like the models aren't very good at doing that natively. And so you need like some orchestration layer and tooling in order to make that
25:20
happen. There's a bunch of other things like that that like are core to like the
25:25
gaming video game experience um that need to have a high degree of reliability that I think it feels like
25:32
it's within reach but actually like requires a lot of like product scaffolding work in order to create
25:37
experiences that are like reusable and replayable and sort of like have the level of depth and requires a little bit
25:43
of taste in there. Um do you see people making a lot of video games inside AI Studio and the other
25:48
developer surfaces that you have? Yeah. And so this was actually based on like us looking at the early data and
25:54
there was something like in AI Studio at the time it was like 20% of all apps that folks were making were actually
25:59
games like people trying to build games. A lot of Is that the most popular category? It's not the most popular category
26:04
anymore. Um just because I think like the the ecosystem has shifted and like the user base have sh has shifted but
26:09
there's a lot of a lot of games. Um what is the most popular category? I think it was like it's like 20% like
What People Build
26:15
finance related stuff. 20% Wow. People like counting their money that much. people like I think it's mo
26:21
it's something around crypto actually I think is what people are doing a lot of stuff with uh with finance a lot of like
26:26
personal productivity things and a lot of gen media stuff actually because obviously the Google suite of gen media
26:33
stuff is amazing yeah has done a great job um but I also think GDM has sort of like a
26:39
obviously Demis cares a ton about games and sort of like started his career in doing AI stuff because of games um and
26:45
so I think we'll we'll have some interesting swings at this and Um our team actually in in Kaggle which is sort
26:51
of bunch of the AI benchmarking stuff we do in GDM sort of works with GDM to build this uh game arena which is uh
26:58
sort of our way of sort of like testing progress towards AGI like using games as a proxy which again is like very deeply
27:04
rooted in in GDM's uh history. So how close do you think we are to you
Vibe Coding Games Soon
27:10
know rando off the street with a good idea can vibe code a really fun playable game? I want to say this year I actually
27:17
I think it's I think the model capability makes it possible. I think this is where like I've gotten excited on the product side and you know we were
27:23
again we were also talking off camerara about sort of like the startups in this ecosystem because um it feels like it's
27:29
possible. It doesn't feel like there's a gap in model quality. It feels like there's a gap in like you someone who
27:34
knows what it takes to build a great game actually like putting the scaffolding together in the right way to make that possible. I think there are
27:41
folks who are doing this right now. And so, um, some of it is like a discoverability and awareness thing that like people just don't even know that
27:46
they can do that. Um, and some of it is just like maybe certain categories of
27:52
model capabilities are just like slightly off and we're like, you know, weeks or months away from like that
27:57
chasm being crossed and then it just like working for most people. And so this is a good segue into I want to ask
World Models vs Engines
28:02
you about role models next. But do you think vibe coded video games is more likely um going to be you know game
28:11
engine plus coding agents based or do you think it's more likely to be world
28:16
model based? Yeah, I think the what will end up happening is the definition of world
28:22
models will blur which we should which we should talk about with Omni. Um, and
28:27
it will still I think the like coding agent will look like some sort of world
28:33
model type system. Um, but you actually do need to make world models useful for
28:40
like real things. You need like scaffolding. Um, and so I think there's again there's actually a bunch of interesting startups like doing work
28:47
like figuring out what is the scaffolding for world models so that you can take them from these like very
28:53
open-ended inherent design of world models, very open-ended spaces and like do it in a tangible way so that it's
28:59
like grounded in a use case that like you could use in a reoccurring way. That could be somebody maybe will figure out
29:04
the scaffolding for world models to make games possible. But like the inherent nature of world models right now I think
29:10
make it so that it's like actually not well suited for like games in the current form. But the progress has been
29:17
crazy. So who knows maybe in like two years the the versions will be able to. But at least in the short term it's like
29:22
coding agent plus some sort of game engine I think is like where you'll see way more alpha from a a game's
29:28
perspective. That makes sense. Okay. So you said the definitions of world models are blurry. Can we unpack that?
Omni World Model Blur
29:33
Yeah. I mean I think like Omni is a is an example of this. you know, we launched this at IO. You can sort of
29:39
take in any input, create any output. Um, and I think Demis sort of like framed it to the world, uh, rightfully
29:46
so, as as a world model because of just like the level of understanding that it has of the world. I think that like
29:51
technically looks different than, um, and I'm I'm not an architecture expert on like the way that they we've done
29:57
world models before, but it is different from an architectural standpoint than what's happened in the past. Um, which I
30:03
think is positive because it's getting closer to like some of the ways in which it might actually be more scalable. Um,
30:09
and historically like it's been like super not scalable. It's like very very expensive to run
30:15
traditional like online world models. Yeah. Like Genie being Yeah. Okay. So if you think of traditional world models as
30:22
being like an action conditioned video model almost then like right now what we're when we when we say
30:28
world model what we actually mean is a model that has some understanding of the world as opposed to being strictly
30:34
technically a action condition video model. Yeah. And and so the interesting thing though is like it has understanding of
30:40
the world but then it also has that like really great and that's where like the line is blurry to me where it's like it
30:47
can do a lot of those same use case. It's not real time right now, but like it can do a lot of those same use cases
30:53
that you would describe or like visually could create with that same exact world
30:58
model, which I think is what's most interesting to me. So, I do feel like this like world model video model thing
31:04
is going to is going to change and play out in a in a different way than was obvious before.
Single Omni Model
31:10
And how does it work under the hood? Like whatever you're able to share like is it Gemini plus video models? Is it
31:16
something different entirely? It is it is a single model. Uh which I think is the important part like this was
31:21
actually part of the original desire was like you were training like eight
31:27
different models to do all of those things. Historically it's like you have a text model with the baseline Gemini
31:33
model. You have audio. You have music models with LIA. You have nano banana. You have vo video models. You have a we
31:39
have a whole suite of audio models. And like it would be great for us, our customers, um, if you just had a single
31:46
model to do all those things. So it is like a a new setup that sort of makes that possible. Um, it's not like routing
31:53
to a bunch of different models, which like we you could have imagined. We could have done something like that actually before and done like a Gemini
32:00
omni model, but this is like a true omni model. Um, and it's starting with like the the use case that works the best
32:06
right now, which is the why it's the one that's available. um is this like video editing capability. Um the technically
32:14
it's like functional with the other things. It's just like the quality isn't isn't like perfect um and is not
32:19
state-of-the-art. So we we haven't rolled that out yet. Um it's also just like the first crank of the model turn
32:25
on Omni. It's the Omni Flash model, the first iteration. Um and so we'll have like much much more capable uh powerful
32:32
versions which will be which will be exciting to see. So we could edit this set so it looks like we're Yes. Yeah. Yeah. I I want
32:39
this. We again we were talking off camera like we should do that for the intro because I think it just like makes all this stuff more capable and I've
32:46
seen these examples of like such subtle nuance that like make me appreciate that it's like the world
32:52
understanding playing out. I was I was giving a talk um and was on stage with with my friend
32:58
Tulsi who leads the model team who I don't know if you've ever had on before but she's amazing. I love Tulsi. Um, and
33:05
in I had mentioned to someone in the crowd to like edit the video and they had literally like took the picture,
33:10
edit it with Omni in real time. And this like dog came on the stage. Uh, and like the other in the edited version, the
33:17
other guests sort of like look down, see the dog, they like chuckle a little bit. This is while I'm like opining about
33:22
whatever AI nonsense about your jokes. Yeah, that it was not my jokes. They they [laughter] laugh at the dog coming
33:27
up. It jumps onto my lap. I sort of like acknowledge the dog. I keep talking. I'm like petting it or whatever. and just
33:33
like there's like so much subtle subtlety in getting that right and the model crushed it and it's just it it
33:41
very interesting and like still trying to like absorb and digest like what that means for you know the way we make
33:47
content and all these other things. That's so interesting. Yeah. I'm I'm the biggest bull on generative
Authentic Gen Media
33:53
media and what it means and I mean one of the things we've thought about for our podcast is the visuals
33:58
matter as much as the content for sure. Um, that's how you catch people's attention in the first place, right? And
34:03
and so, okay, I'm excited to I'm excited to play with Omni. I'm excited, too. And I think the and and I think you probably feel this way
34:09
as somebody who makes content, but I've historically like been like very for myself personally, like I don't use AI
34:16
to make any content that I produce. Like, it's all my words. It's always my voice. It's always my image and picture
34:22
showing up. Like, I just I I feel like there's just like so much alpha and authenticity. And so like I would much
34:27
rather it be me than some AI version of me. What I like so much about Omni is
34:33
that it's like not changing me. Um it is like changing a bunch of these other bits which are not me. Like I didn't
34:39
choose any of the like set around us or the the coffee table. It's like so our our words can stay the same and like you
34:45
can change these bits that are like not personal um and do something more interesting with them which I think is
34:51
really really cool and feels it feels like the version of what I want
34:56
sort of like Gen Media to be which is like not a bunch of like AI avatars. Uh
35:01
it's like no Fruit Island videos. Exactly. Truly like it really is like it's the original content. It's the
35:07
person. It's like the personhood is there. It's just different and amplified. Super
35:12
interesting. Okay. I'm excited to play with it. Yeah, we should we should send some prompts right after this and trust.
35:18
I don't mind the fruit videos though. I'm I'm I'm happy for a [laughter] world of of both. Um on the coding side, you
Vibe Coding Android Apps
35:23
launched the ability in AI Studio for people to vibe code Android apps. Yeah. Yeah. Um I'd love to, you know, hear how
35:30
that's going so far and and where you plan to take that. Yeah, it's super exciting. I think one of the strategic things for AI studio
35:37
and actually this is based on like a lot of the feedback from the ecosystem and actually from developers from others is
35:42
like so many Google products um there's so many different like ways in which you like touch Google through all these
35:48
different journeys of building a startup or bringing idea to your life and so um we have this like first class principle
35:55
of like how do we bring things into AI studio that make it so that you are
36:00
exposed to other parts of the Google ecosystem without having to like go through nine different UIs across
36:06
Google. Um, and so Androids are like a great example um, not only of that, but also of enabling people who wouldn't
36:13
have otherwise built an Android app. And so I literally built my first Android app in AI Studio. Um, very cool to see.
36:19
It's uh, what is it? Yeah, I I just did like a not a crypto app, just a a plant one. I was planting
36:25
trees in my backyard. Oh, like a gardening app. That's good. Yeah. And so it was just like playing around with a a gardening app as I as I
36:31
was kicking the tires. Um, I haven't had my like breakthrough idea yet of what I want for a mobile app, but I'm gonna I'm
36:36
gonna come up with something and see go compete on the app store. Have you seen anything vibe coded like really fly in the app store yet?
36:43
That's a good qu. It actually be interesting to like see some analysis. I don't know. I'm sure it's like
36:48
accelerating a lot of things on the app store, but I don't know how much like I don't know anyone like personally who's who's done that. It is interesting and I
36:55
was going to make the observation too that I think the last time I checked the numbers we were reviewing it this morning it was like 350,000
37:02
Android apps built in AI Studio since last week which is crazy. Um and like excitingly it's like 350,000 apps that
37:10
like probably no one was going to build before. A lot of these are personal too. And so this is where I think this like
37:16
maybe Genui is like farther out there, but I think like the idea of you building software to solve your personal
37:23
problem is like very real right now. And like people are doing that. It's like one of the most common use cases of a lot of these products. Um, and being
37:30
able to like unlock a bunch of the native capabilities of the phone, I think is also really interesting because you just have so much context that's
37:37
like in different places. Um, so I'm I'm getting very excited about sort of that
37:43
opportunity and uh Android feels like it's becoming the the platform for builders.
37:48
Does it matter that something is an app versus just like the web is so powerful now? The Yeah, that is it's also very interesting
37:54
to see that play out. Web is definitely powerful. There are certain things that the operating systems have that like you
38:00
just can't unlock. um like lots of like native richness that actually like make
38:06
experiences feel so much richer. I think about this for like text messaging actually that like the text messaging
38:12
experience in all of the all the main operating systems feel way richer to me
38:17
than like any AI chat app that I've ever used. Like if I could just talk to AI and whatever texting app I use, like I
38:24
would be way happier than having to go to some other app. Um because I think we're also just like conditioned on like
38:30
the operating systems. So yeah, makes sense. Okay, I want to ask about the model eats the harness or the
Scaffolding and Startup Edge
38:35
model eats the scaffolding. What are your thoughts? Yeah, I think it's true. And I think part of this is like what we have
38:43
historically thought of as the model is not the model anymore. Like when I think
38:48
like two years ago when LLMs were popular, it was like the model was like actually just a set of weights. um it
38:55
was a set of weights and it was like really like how can you like as simple as possible send tokens in and get
39:00
tokens out and I think we've just like progressively step by step by step we still call it the model we still call it
39:06
you know Gemini 3.5 you still call it GPT whatever and and claude whatever but like it's actually not just the weights
39:13
anymore it's like an entire exp expanding sprawling system that's built around the weights um that sort of
39:19
like enable a lot of these like next generation experiences from agentic tool calling to tool you know like all these
39:25
hosted tools search code execution etc. Um you know the models are now being spun up in containers and sort of have
39:31
an agent harness and all that stuff. So the scaffolding is like oftent times a
39:37
couple of steps ahead of like where the act what is like baked directly into the model and then what ends up happening is
39:43
like the model eats that scaffolding and it becomes part of like the native model system and there's still value in having
39:49
sort of the external scaffolding in certain cases and like search maybe is an example of this like there's lots of
39:55
folks who use different search providers and there's different like use cases that you want and so like sure maybe the
40:00
model can natively use search but you also want something code execution, another example of that.
40:06
Um, but it does feel like like maybe the agent harness is like the quintessential
40:11
example of this right now where like everyone's like ah we got to go build a harness and like the harness is where the alpha is and like I think that
40:18
perhaps won't be true at least in the way that we think of the harness today in 12 months. I think the models will
40:24
have sort of just like digested a bunch of that. It'll be upstreamed into the model um and the alpha will be somewhere
40:29
else now. it won't be in sort of trying to spin your own harness because the model just like does it natively
40:35
but I thought that the part of the reason why people are building their own harnesses is because if you use a harness from any given model provider
40:41
you're locked in right so a lot of the application companies want flexibility which is why they're building their own harnesses yeah and I think that's part of the
40:46
scaffolding story is like that starts out perhaps true but then as the model capability improves like it it becomes
40:53
less true over time actually I think the model the like you you don't have a generalized model if it can't use
41:00
another harness. And so it is it is important and I I mentioned this uh in another conversation with someone a few
41:05
weeks ago, but we need something like harness bench, which is like actually measuring like how good are all these
41:10
different models at adapting to all the different harnesses. I feel like that seems like a reasonable thing we should we should measure as an ecosystem. Um
41:18
and I'd be curious to see like what models are actually best, but I think over time you expect they they'd be able
41:25
to use every harness. um unless you're like completely out of distribution which in that case like you're still
41:31
going to be completely out of distribution even if you're using your own harness. So not sure it matters much. Fair enough. What about the application
41:38
layer? How do you think about where independent companies uh can you know
41:43
have a hope of surviving when the model eats the harness and eats you know the stuff around it.
41:48
Yeah. It feels like there's so yeah it's it's an interesting story that like both of these things feel true. both on one
41:53
hand I everywhere I look I'm like there's never been more opportunity to go and build something at the same time
41:59
obviously the models are doing more than they've ever done before um I think there's like you know there's that
42:04
thread of capability overhang which I think there's a huge amount of alpha in there's the thread of the model
42:10
companies are like going after these like very general problems um and there's just like so much value in these
42:17
like verticalized domains if you have expertise in that domain you sort of like know the customers you know the ecosystem like it's you can really like
42:24
run laps around even the best model labs because like focus is the like superpower of startups. Like if you can
42:30
focus you can do anything. Um and if you look at all of the companies that are big or doing lots of stuff like
42:37
there's just not a lot of focus. And for some for some reasons like rightfully so because you know maybe I'm I'm overly
42:44
justifying you know Google strategy but like we just have a lot of products. We have a lot of users. We have a lot of different things going on. And so like
42:49
we actually can't focus in one domain. we have an obligation to do a bunch of things as a big company. Um I think
42:55
that's not true for startups. And so I think like 24 months ago we were all asking ourselves like wow it seems like
43:02
it seems like the opportunity space is shifting. Um and maybe it's it's possible one of the outcomes is there's
43:07
less opportunity for startups in the future. That feels like so far in a way not what has ended up playing out which
43:13
is really positive. If anything, it feels like there's just even more opportunity than there was. Like now coding has helped you like close the gap
43:20
on like larger companies that have like established code bases and all this other stuff because you can just like
43:26
run way faster and write software quicker. Um the agentic like primitive
43:31
is like a new category that you can sort of build products around that like actually in a lot of cases to the
43:37
conversation about like the risks involved with building like there's risk involved and so like what's your like
43:43
the risk appetite of different companies is different and so if you're willing to take more risk in some domains like you
43:48
can win a user cohort who's like interested in also taking risk. There's so much opportunity. Awesome. I'd love to talk about Google
Inside DeepMind Culture
43:55
Deep Minds culture and I'm curious what does it feel like to be inside GDM right
44:01
now? You know, we had Demis at AI sense. He was so inspiring. I've heard Sergey's back. You guys have Nom Shazir back.
44:08
Like, walk me through what it's like to be at GDM right now. It's incredible. I do try to take it all
44:15
in because it is like a it's like a moment to I try to reflect as much as possible in in the chaos of all the
44:21
things that are happening just because there's like so much cool stuff going on. Um GDM's culture is interesting and
44:28
like maybe three observations. one back to this thread of like focus. We're
44:33
doing a lot of things and so I think you see sort of uh I think about this a lot like from a portfolio perspective I
44:40
think we have like one of the strongest portfolios which is really exciting but you do see these moments where like another lab or another company whatever
44:46
it is we'll like pull ahead in a certain area where like we've underinvested just like hadn't been focused enough in that
44:52
domain. Um, and it's cool to see like the the way we go about trying to like
45:00
close that gap. I very much I very much appreciate it. Um, I think I've I've watched the Demis thinking game
45:07
documentary a few times. Um, and like you see sort of like a lot of like details of that like original culture
45:13
and just like the way that strikes work and all this stuff which is actually really similar today is like you just get a bunch of smart people together and
45:19
like go solve the problem. Um, and I I love that and it's like very cool um to
45:25
to be a part of. Another one is this I think you see the culture permeate from
45:31
like who the leaders are. Um, and as I maybe uh this isn't like a a perfect
45:37
characterization of the ecosystem, but like Demis is a Nobel Prize scientist um
45:44
and like the sort of OG of a lot of this stuff and sort of you feel that in the deep mind culture. I think like Sam is
45:50
like the, you know, maybe one of the world's best businessmen ever and like you sort of see that in the open AI
45:55
culture and the way that they go about the world. I don't have a strong sense of who Daario is. Um, but like I think
46:01
Anthropic is a very interesting place and you sort of at least as an external observer like they're he seems like an
46:06
interesting guy and so uh somewhat esoteric and so that seems like they're sort of like that in the DNA and the
46:12
culture of the company. You know, the other labs are interesting. Um, but I like this like very scientific approach
46:19
to the world. Um, and the way that like Demis looks at like the reason he's
46:24
doing this and the reason they started this mission was like literally to like solve disease and all these things. And
46:30
it's like so easy to get and again I'm always trying to pull myself out of the moment, but like it's so easy to get
46:36
lost in this like competitive race of who's pushing a number higher on SWE or
46:41
whatever it is. It's very easy to lose sight lose sight of like the reason we're doing that is so that like we're
46:47
can solve problems that humans actually have. And there's a uh my my favorite
46:53
quote from all of Silicon Valley is something like you know we can't let other people make the world a better place more than we can which is like
46:59
what this moment feels like. And I Gavin Bellson quote the Gavin Bellson [laughter] quote and I think about that all the time and it's like we're all fighting over who can
47:05
make the world better more than the other person which just like when you frame it like that seems really goofy to
47:11
me. Um, and so it's very much not zero sum. Um, and I think that's like a a way
47:18
of looking at the world. I think the last thing about Deep Mind's culture is like we're very it's sort of the engine
47:24
room of Google. Uh, which I think is like literally the Twitter bio now of the the Deep Mind Twitter account, which I love. Um,
47:30
you man the Deep Mind Twitter? I don't I I don't want any responsibility manning other people's
47:35
accounts online. Too much uh too much responsibility to do that. But it does feel like that too. So it's like on one
47:41
hand you have sort of like the deeprooted lab culture and the other hand you have sort of like all of these partners across the Google ecosystem
47:48
that we're collaborating with everybody from Android that we talked about earlier to Google cloud to you know
47:53
Gmail to workspace etc etc and so it's an interesting blend of like I think
47:59
there's lots of research work happening but like there's tons of applied work that's happening to like actually like
48:05
work with some of like the forefront customers like deploying Gemini to billion user products
48:11
is a problem that like only two companies in the world have. Um, and we have 13 of those products and like we
48:17
that you know Google goes through this all the time now. And it's such an interesting place to like see that happen and see the innovation that takes
48:23
place in order to make that actually possible. And I feel like it's you can only do that inside of inside of Google
48:29
which is really cool. Beautifully said. Did they uh did it give them a lot of heartburn when you
48:34
joined and were tweeting a lot? That's a good question. to get sign off from from coms.
48:40
I'm very uh one of the the silver linings to my Google experience has been
48:47
just like how great that group of like folks across marketing comms are to to
48:52
work with. And I think like I you know their job is protect Google, make sure we tell the right story, make sure a
48:57
bunch of bad things don't happen. And so I have a ton of appreciation and partnership with them. But it's been an
49:02
incredible experience to like be able to go try to tell the story that resonates with developers um in a way that feels
49:09
authentic uh and not have a huge amount of you know
49:14
I you know I don't have to get my tweets approved all the time and all this stuff like is very very positive culture and I
49:20
think hopefully I I'm always trying to walk the line of uh not not burning uh the the trust and goodwill that that
49:26
I've accumulated with those folks. But it's been super positive because ultimately I think it's like it's really hard for Google to tell this like
49:34
authentic story. It's just there's just like it's a big company. There's a lot of people. There's a lot of opinions. And so you take the like magic of Google
49:41
and you water it down through like a lot of people and a lot of process and you actually yeah
49:46
you you miss the beautiful story which is like Google's doing the most interesting technology in the world and
49:52
like helping our users with some of the hardest problems in the world. And um it feels it's a privilege to like get to
49:57
help tell that story. So it's it's a lot of fun. I enjoy it. I love what you're doing. I love what Josh is doing. I think you guys have put
50:03
a really kind of sincere human touch on um as you put it the most important problem of our time. So
50:09
thank you. Uh well wonderful Logan. Thank you so much for joining me today. This is a very far-ranging conversation.
50:15
Everything from agents and coding to world models and harnesses and GDM
50:20
culture and you lots lots of nuggets here. Uh thank you for for joining me today. This is a ton of fun. Thank you for
50:25
having me and I'm excited to see what the uh folks cook up of where we've been sitting this whole time. Maybe in front
50:30
of us. Maybe there'll be a dog. A dog. Make my dog dreams come true. [laughter] I love it.
50:36
Awesome. Thanks, Logan. Of course. [music]
50:57
[music]
51:02
[music]

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
source_url: https://www.youtube.com/watch?v=cMAs8z2dehs
source_title: Google DeepMind’s Logan Kilpatrick: Why the Model Eats the Harness
channel_or_org: Sequoia Capital
speaker: Logan Kilpatrick, Google DeepMind / Google AI Studio / Gemini API
host: Sonya Huang, Sequoia Capital
published_at: Jun 11, 2026
captured_at: 2026-07-08
captured_by: Nick
capture_method: YouTube screenshot + pasted transcript
content_type: Google agentic strategy / Gemini API / Antigravity / agent harnesses / model eating scaffolding / coding agents / startup strategy / world models / Omni model / product surfaces / outcome-maximizing AI / vertical superintelligence / developer feedback flywheel

source_reliability_context: Primary-ish strategic interview with Logan Kilpatrick, who says he runs Google AI Studio and the Gemini API. Strong source for Google’s agentic product posture, Antigravity as shared agent harness, model/harness convergence, outcome-over-eyeballs product philosophy, and startup opportunity despite model labs absorbing scaffolding. Treat forward-looking predictions as strategic signal, not settled fact.

priority: 5/5
depth: architecture_spine / strategy_reference
recommended_status: route to AI Substrate, Build-OS, agent harness doctrine, model-routing, vendor strategy, startup moat, Knowledge Reservoirs, product-surface design, and OMNI naming/confusion notes.

Topic tags:
[Logan_Kilpatrick, Google_DeepMind, Gemini_API, Google_AI_Studio, Antigravity, agent_harness, coding_harness, model_eats_harness, scaffolding, harness_bench, agentic_Gemini, outcome_maximization, agent_growth, long_horizon_agents, coding_agents, narrow_superintelligence, jagged_superintelligence, vertical_superintelligence, verifiability, world_models, Omni_model, single_model, Google_startup_strategy, focus_as_startup_superpower, AI_Substrate, Build_OS, OMNI]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 5/5
Depth: architecture spine / strategy reference
Recommended status: preserve as a high-value counterweight to “harness is everything” doctrine.

Core takeaway

This source is valuable because it challenges the recent Google white-paper / Cole / LangChain consensus that the harness is the durable alpha.

Logan’s argument is more subtle:

Harnesses matter now, but the model system keeps absorbing scaffolding. What looks like external harness advantage today may become native model capability tomorrow.

He says the “model” is no longer just weights; it is becoming a sprawling system around the weights, including tools, hosted search, code execution, containers, and agent harness behavior. The scaffolding often starts outside the model, then gets absorbed into the model system over time.

OMNI translation:

OMNI should own the workflow, domain truth, data, evals, permissions, and operating doctrine — not bet its moat on generic agent harness mechanics that model providers may absorb.

That is the keeper.

Key concepts to preserve
1. Antigravity as Google’s new agentic through-line

Logan says Gemini became the through-line across Google products, and now Antigravity is becoming the next through-line as Google products become agentic-native. He describes Antigravity not just as an IDE, but as an ecosystem: IDE, web agent experience, CLI, SDK, managed agent, and shared harness powering Search, Gemini app, Cloud, and AI Studio.

OMNI keeper:

This confirms the “agent harness as platform substrate” pattern.

But the warning is that big platforms will internalize this substrate.

Doctrine candidate:

The agent harness is becoming platform infrastructure, not merely app-layer tooling.

2. Coding harness and agent harness are mostly shared, then specialized

Logan says coding has proven to be a general-purpose agent harness, but specific products still specialize the base harness. He estimates that different harnesses may share roughly 80% of the same base and then specialize for coding, vibe coding, consumer 24/7 agents, or other product use cases.

OMNI translation:

This is useful for OMNI runtime architecture.

OMNI should not build totally separate agent stacks for every lane. It should have:

base agent substrate + lane specialization

Examples:

base identity / tools / trace / eval / policy
D7 document specialization
SNF documentation specialization
GLP-1 intake specialization
medspa growth specialization
Build-OS specialization

Doctrine candidate:

Use a shared agent substrate, then specialize by lane.

3. Google optimizes for outcomes, not eyeballs

This is one of the strongest product-strategy sections. Logan says the point of building the technology is for it to do things for users. He says success for Google probably does not look like maximizing eyeball time, but maximizing outcomes for customers.

OMNI keeper:

This is directly applicable to OMNI.

Do not measure AI by session duration or chat volume. Measure:

task completed
patient converted
refill handled
admission summarized
record reconciled
form completed
payment resolved
provider decision supported
risk escalated correctly

Doctrine candidate:

Agentic products should maximize completed outcomes, not engagement time.

4. Google is still in crawl mode because of stewardship responsibility

When asked where Google products are on the crawl/walk/run scale of agenticness, Logan says mostly crawl. He links this to responsibility: Google has many billion-user products, and users may not be ready for AI to “run and do all the things.”

OMNI translation:

Important for healthcare.

Even if the technology can do more, user trust and safety may demand slower progression.

Doctrine candidate:

Autonomy progression is constrained by stewardship, not only capability.

5. Specialized products may survive general AI because humans like compartmentalization

Logan is skeptical that one general product replaces all surfaces. He says humans like product compartmentalization: opening the calendar app and seeing the calendar is cognitively easier than asking a general interface to do everything. Generative interfaces can add cognitive overhead.

OMNI keeper:

This is a major product-surface point.

OMNI should not collapse everything into one magic chatbox.

Better:

patient app
provider workspace
admin console
owner dashboard
Build-OS
messaging surface
document review surface
commerce surface

All can share substrate, but not necessarily one UI.

Doctrine candidate:

Shared substrate does not require a single universal interface.

6. Long-horizon agent runs are an important KPI

Logan says he would like to measure average agent-run length or task duration and sees models increasingly enabling longer-running tasks. He says long-running agents matter, especially coding agents, because coding capability accelerates the rest of the business.

OMNI translation:

For OMNI, long-horizon capability matters only if paired with state, evals, and governance.

Potential metric:

agent_task_horizon

Fields:

duration
number of steps
tools used
human checkpoints
cost
successful completion
rollback/escalation events
domain risk tier

Doctrine candidate:

Agent horizon length matters only when completion quality and control are measured with it.

7. Great coding models need a product feedback engine

Logan says it is hard to build a great long-running coding model without a product that actually exercises that use case. Google needs Antigravity and internal dogfooding to create the feedback flywheel. He says Google has 100,000+ engineers using models and giving feedback, which should be a competitive advantage.

OMNI keeper:

This is a major Build-OS point.

OMNI’s advantage will come from real operator traces:

provider documentation behavior
SNF admission/re-admission edge cases
medspa conversion and follow-up
patient messaging
billing and membership edge cases
intake/refill/dose escalation workflows

Doctrine candidate:

Agent improvement requires a live product feedback engine, not only offline benchmarks.

8. Coding feels like narrow superintelligence

Logan says coding feels like narrow superintelligence because it gives developers more agency and lets them tackle more ambitious problems. But he frames it as an accelerant of human developers, not a replacement.

He also says this creates a new burden: if the tool enables more ambition, the human must reset their ambition upward.

OMNI translation:

This is highly relevant personally.

The question becomes less:

“Can I build this?”

More:

“What is the right scope now that the ceiling moved?”

Doctrine candidate:

AI increases human agency by raising the ambition frontier.

9. “Jagged superintelligence” will arrive before AGI

Logan predicts vertical or jagged superintelligence: domains like coding, math, finance, and science may become superintelligent earlier because they have stronger verifiability.

OMNI keeper:

Healthcare operations has mixed verifiability.

Highly verifiable:

scheduling rules
payment math
form completion
document extraction against source
lab value normalization
membership benefit attribution

Less verifiable:

clinical judgment
patient safety nuance
business strategy
relationship management

Doctrine candidate:

AI will advance fastest where verification is strongest.

10. Games show the difference between model capability and product scaffolding

Logan says vibe-coded games feel possible from a model-quality standpoint, but the missing piece is scaffolding: product structure, game-engine integration, assets, sprite generation, reliability, reuse, replayability, and taste.

OMNI translation:

This generalizes beyond games.

Many OMNI workflows will not fail because the model is “dumb.”
They will fail because the surrounding product scaffold is missing.

Doctrine candidate:

When model capability is sufficient, the remaining gap is product scaffolding.

11. World models also need scaffolding

Logan says world models are open-ended and not immediately useful for recurring use cases unless they have scaffolding that grounds them into tangible tasks.

OMNI keeper:

This reinforces the same point:

Even powerful generative systems need:

use-case boundary
tools
state
memory
validation
output contract
workflow integration

Doctrine candidate:

Open-ended model capability becomes product only through scaffolding.

12. Google’s Omni is a single model, not routing

Important naming note: this is Google’s Omni model, not internal OMNI.

Logan says Omni is a true single model for multimodal input/output, not a router over separate text, audio, music, image, video, and other models. He contrasts this with historically training many separate models.

OMNI note:

Potential naming collision risk.

Your OMNI = operating substrate / company/product architecture.
Google Omni = multimodal single model.

Doctrine candidate:

Preserve internal OMNI as an operating substrate, not a model brand.

13. Authentic generative media: amplify the non-personal parts

Logan says he does not want AI to replace his words, voice, or image, because authenticity matters. What excites him about Omni is changing the non-personal surroundings — the set, table, environment — while preserving personhood.

OMNI translation:

This is surprisingly useful for medspa/social/content.

Use AI to enhance:

set
lighting
background
diagrams
cutaways
thumbnails
visual explanation

Do not fake:

physician authenticity
patient trust
clinical judgment
human voice where trust depends on it

Doctrine candidate:

Generative media should amplify authenticity, not replace personhood.

14. Android/app surfaces unlock native context

Logan says AI Studio enabled 350,000 Android apps in a week, many of which were personal apps that likely would not have been built otherwise. He argues native apps can unlock operating-system richness and context that the web cannot.

OMNI keeper:

For OMNI:

web is enough for many admin/provider surfaces
mobile/native may matter for patient behavior, reminders, camera, biometric/device context, texting, notifications, wallet/payment, voice, and on-device workflows

Doctrine candidate:

Surface choice should follow available context and native capability, not developer convenience alone.

The “model eats harness” section
15. The model is becoming a system, not just weights

This is the spine of the source. Logan says the model is no longer just tokens-in/tokens-out weights. It is increasingly a system around weights: hosted tools, search, code execution, containers, agent harnesses, and model-native tool use.

OMNI translation:

This weakens any company whose moat is “we wrapped the model with generic tools.”

Doctrine candidate:

The model boundary is expanding upward into the harness.

16. Scaffolding alpha decays

Logan says scaffolding is often a few steps ahead of what is baked into the model, but then the model eats that scaffolding. He suggests today’s harness alpha may not be true in the same way in twelve months because models will digest much of it.

OMNI keeper:

This is the counterweight to “harness is the moat.”

Better doctrine:

Generic harness alpha decays. Domain harness alpha compounds.

OMNI should not compete on generic agent harness. It should compete on:

clinical/business workflow truth
domain-specific context
operator data
integrations
evidence/provenance
risk/compliance rules
service occurrence and commerce semantics
human adoption loops

Doctrine candidate:

Do not build a moat from scaffolding the model provider is likely to absorb.

17. Harness bench: ability to adapt to different harnesses

Logan proposes something like “harness bench” to measure how well models adapt to different harnesses. He argues a generalized model should be able to use another harness.

OMNI translation:

This is excellent.

OMNI could eventually evaluate models by how well they operate inside OMNI’s harness:

follow D5 grammar
respect D7 citation protocol
use tools correctly
keep candidate vs commit boundaries
avoid PHI leakage
produce valid structured outputs
comply with workflow policy

Doctrine candidate:

Model evaluation should include harness-adaptation performance, not only benchmark scores.

18. Startup edge is focus and vertical expertise

Logan says startups still have opportunity because model companies go after general problems, while startups can focus deeply in vertical domains. If you know the domain, customer, and ecosystem, you can run laps around model labs. Focus is the startup superpower.

OMNI keeper:

This is one of the most important OMNI business points.

Your advantage is not “I have AI.”
It is:

SNF operator reality
medical director reality
medspa operator reality
documentation pain
provider workflow taste
healthcare/commercial edge cases
clinical/legal responsibility
integration with actual operations

Doctrine candidate:

Focused vertical workflow ownership survives generic model progress.

OMNI translation

This source modifies the prior Build-OS doctrine.

Before:

harness > model

After Logan:

domain-owned harness > generic harness, because generic harness gets absorbed

Better OMNI formula:

durable OMNI moat =
domain truth
+ operator workflows
+ governed data
+ evals/proof
+ permissions
+ source provenance
+ user trust
+ integration depth
+ continuous feedback traces

Not:

generic agent wrapper around GPT/Gemini/Claude

The most important strategic synthesis:

Build OMNI above the layer the model labs will absorb.

Likely OMNI landing zones

AI Substrate

expanding model boundary
model-native tools
harness adaptation
base substrate + lane specialization
model-provider absorption risk

Build-OS

agent harness as shared platform
feedback flywheel from real builder usage
coding as acceleration engine
harness-bench evaluation

Product Surface Design

one substrate, multiple surfaces
compartmentalized products
avoid everything-as-chat
mobile/native when context matters

Knowledge Reservoirs / D7

operator-domain data as moat
real traces as feedback
document/citation correctness as verifiable domain

OMNI Strategy

domain focus as startup superpower
avoid generic scaffolding moat
build above provider absorption layer

Brand/Naming

distinguish OMNI operating substrate from Google Omni model
Doctrine candidates
The agent harness is becoming platform infrastructure, not merely app-layer tooling.
Use a shared agent substrate, then specialize by lane.
Agentic products should maximize completed outcomes, not engagement time.
Autonomy progression is constrained by stewardship, not only capability.
Shared substrate does not require a single universal interface.
Agent horizon length matters only when completion quality and control are measured with it.
Agent improvement requires a live product feedback engine, not only offline benchmarks.
AI increases human agency by raising the ambition frontier.
AI will advance fastest where verification is strongest.
When model capability is sufficient, the remaining gap is product scaffolding.
Open-ended model capability becomes product only through scaffolding.
Preserve internal OMNI as an operating substrate, not a model brand.
Generative media should amplify authenticity, not replace personhood.
Surface choice should follow available context and native capability, not developer convenience alone.
The model boundary is expanding upward into the harness.
Generic harness alpha decays. Domain harness alpha compounds.
Do not build a moat from scaffolding the model provider is likely to absorb.
Model evaluation should include harness-adaptation performance, not only benchmark scores.
Focused vertical workflow ownership survives generic model progress.
Net-new / sharpen / affirm
Net-new candidates

model_eats_harness
Pattern where external scaffolding/tooling/orchestration becomes absorbed into the native model system over time.

generic_harness_alpha_decay
Risk that horizontal harness advantage erodes as frontier model providers internalize common agent patterns.

domain_harness_alpha
Durable advantage from domain-specific workflow semantics, evidence rules, permissions, evals, integrations, and operator traces.

harness_adaptation_benchmark
Evaluation of how well a model operates inside a given harness, follows its policy, uses its tools, and respects its contracts.

outcome_over_eyeballs
Agentic product philosophy that success means completed user outcomes, not engagement duration.

shared_substrate_multiple_surfaces
Architecture where many products/surfaces share a common agent substrate while preserving task-specific interfaces.

jagged_vertical_superintelligence
Uneven emergence of superhuman capability in verifiable domains before broad AGI.

Sharpen existing

Build-OS
Must focus on domain workflow/harness, not generic coding-agent wrapper.

AI Substrate
Needs provider-absorption awareness and harness-adaptation evals.

Knowledge Reservoirs
Operator data and real traces become strategic moat.

Product Surface Doctrine
Rejects one universal AI interface as default.

Runtime Evaluation
Add agent_task_horizon and harness compliance metrics.

OMNI Branding
Needs distinction from Google Omni.

Affirm
harness matters today
product scaffolding matters even when model capability is strong
coding is the leading agentic domain
verifiability predicts where AI advances fastest
product feedback flywheels matter
domain focus is startup alpha
user trust/stewardship limits autonomy rollout
native/mobile surfaces still matter
AI increases ambition, not merely productivity
Reject / do not over-import
Do not overcorrect into “harness no longer matters.” It matters; generic harness just decays faster.
Do not treat Google Omni as related to internal OMNI except as naming collision risk.
Do not assume one Google-style agent harness should power all OMNI lanes without clinical/business specialization.
Do not build OMNI’s moat around generic agent orchestration.
Do not collapse all OMNI surfaces into one chat UI.
Do not chase maximum autonomy faster than trust/stewardship allow.
Do not ignore model-provider absorption risk.
Do not assume startups are doomed because model labs move upstack; vertical focus still matters.
Hard read

This is a top-tier strategic counterweight source.

The keeper:

Harness is alpha now, but generic harness alpha decays as model providers absorb scaffolding into the model system. Durable advantage moves upward into vertical workflow ownership, data, evals, permissions, product surfaces, and customer-specific outcomes.

Shortest OMNI version:

OMNI should not try to win by being a generic agent harness. Google, OpenAI, Anthropic, and others will eat more of that layer. OMNI should win above it: domain-owned workflows, governed clinical/business truth, real operator data, evidence trails, evals, permissions, and outcome-focused surfaces.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

THIS IS A TERERIFIC SOURCE YES!

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Metadata:** operator metadata block PRESENT at top of Review 001 → lifted verbatim into §0/§0.1. `identity_confidence: high_from_operator_metadata` (no caveats). Proposed slug: `logan-kilpatrick-model-eats-the-harness` → filename `EVSRC-2026-000241_logan-kilpatrick-model-eats-the-harness.md` (do NOT rename file).

**HEADLINE VERDICT — SPINE-TIER STRATEGY (full_semantic; ~4 net-new candidates, mostly NAME/AFFIRM).** This is the wave's **counter-pole + refinement** to the "harness is the moat" cluster (233/234/235/236/237). Logan Kilpatrick (Google DeepMind / AI Studio / Gemini API) argues the "model" is no longer weights — it is an *expanding system* (tools, hosted search, code-execution, containers, agent harness) that **keeps absorbing scaffolding**; therefore **generic harness alpha decays** while **domain/vertical workflow ownership compounds**. This does NOT contradict the wave's "model is ~10% of the system" (231/232/235/236) — it *sharpens* it: the 90% that matters is the **durable** 90% (domain truth, governed data, evals, permissions, provenance, operator traces, outcome-focused surfaces), NOT the generic-harness 90% the labs will eat. For OMNI this is pure AFFIRM: OMNI never bet its moat on generic agent orchestration — it bets on the governed care+business substrate above the absorption layer. Zero direct conflicts; one refinement-tension (T13-candidate) and two naming/brand flags (**Google "Omni" multimodal model ≠ internal OMNI** — the second external "Omni*" collision after 234's "Omnigent"). Build across every cluster = **absent** (app AI = `heuristic-v0` chart-review engine; no model registry/routing/harness/multimodal serving).

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [ts]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **model eats the harness / scaffolding-absorption** | scaffolding starts external, then gets digested into the native model system; generic harness alpha decays over ~12mo | §B model-pluggability · Build-OS · Agent-Work-Protocol · thesis §8 | "the model eats that scaffolding… won't be true in 12 months" [40:11-40:24] | AFFIRM | absent | tension (harness-moat pole vs absorption pole; T13-cand) | spine | promote (strategy) |
| 2 | **domain harness alpha > generic harness alpha** | durable moat = vertical workflow truth/data/evals/permissions/provenance/traces, not generic agent mechanics | §B · Knowledge-Reservoirs · Build-OS · thesis §1/§2 · enterprise-adoption | "run laps around even the best model labs… focus is the superpower" [42:24-42:30] | AFFIRM | absent | none | spine | promote |
| 3 | **the model is a system, not weights** | model boundary expands *upward* into tools/search/code-exec/containers/harness; wrapping-with-generic-tools ≠ moat | §B AI-substrate · Build-OS · thesis §8 | "not just the weights anymore… expanding sprawling system" [39:06-39:19] | AFFIRM | absent | none | spine | promote (convergence w/ 231/232/235/236) |
| 4 | **harness-adaptation benchmark ("harness bench")** | eval dimension: how well a model operates *inside OMNI's* harness (D5 grammar, D7 citation, candidate≠commit, no PHI leak, valid structured output) | Build-OS agent-eval · §B model-admissibility · Polaris/proof | "we need something like harness bench… adapting to different harnesses" [41:05-41:10] | PARTIAL | absent | none | vocabulary | watch (net-new eval dim) |
| 5 | **agent harness as platform through-line** | a shared agent harness becomes platform infra powering many product surfaces (Antigravity → Search/Gemini app/Cloud/AI Studio) | Build-OS · CNS · §B · Surface-Map P5 | "same harness is actually powering all the other Google products" [3:44] | AFFIRM | absent | none | vocabulary | watch (big-platform absorbs — warning, not model) |
| 6 | **shared base substrate + lane specialization (~80/20)** | one base agent substrate (identity/tools/trace/eval/policy) + per-lane specialization; not separate stacks per lane | §B · CNS · Build-OS · workflow_lane_as_architecture_unit | "80% of the same stuff and then you specialize for… coding" [5:00-5:06] | AFFIRM | absent | none | vocabulary | watch (NAME over workflow-lane) |
| 7 | **outcome over eyeballs / anti-engagement metric** | measure completed outcomes (task done, refill handled, record reconciled), NEVER session duration / chat volume | thesis §1 sell-outcomes · operating-metrics · BIZOPS · C3.7 firewall | "maximizing outcome for customers… not maximizing eyeballs" [7:03-7:14] | AFFIRM | absent | none | vocabulary | watch (sharpens 201/206; adds anti-eyeball guardrail) |
| 8 | **autonomy progression constrained by stewardship** | crawl→walk→run gated by user-trust/safety, not only model capability; billion-user/care stewardship slows rollout | §A trust · Agent-Work-Protocol autonomy_level · chat→cowork→autopilot ladder | "it's definitely like crawl right now… stewardship responsibility" [8:34-8:58] | AFFIRM | absent | tension (efficiency vs care fail-closed; = T4 class) | spine | promote (care-relevant) |
| 9 | **shared substrate ≠ single universal interface** | humans like compartmentalized/specialized products; do NOT collapse everything into one magic chatbox | Surface-Map P5 (surfaces own no truth) · product | "I click my calendar app, it just shows me my calendar" [11:01] | AFFIRM | absent | none | spine | promote (D0THES-DEC-033 affirm) |
| 10 | **long-horizon agent run as KPI** | agent-run length/task-duration matters ONLY paired with state/evals/governance (duration, steps, tools, checkpoints, cost, completion, rollback, risk-tier) | operating-metrics · Build-OS · CNS · Agent-Work-Protocol | "how long is the average agent run or average task" [12:57] | PARTIAL | absent | none | vocabulary | watch (metric: agent_task_horizon) |
| 11 | **coding model needs a live product feedback engine** | great long-running agents require real-usage dogfooding (100k+ engineers), not only offline benchmarks | Build-OS · Knowledge-Reservoirs (operator traces) · REV-199 · operating-metrics | "hard to make a great coding model… if you don't have a product" [15:55-16:09] | AFFIRM | absent | none | spine | promote (Build-OS/flywheel; converges 201/222) |
| 12 | **narrow/jagged/vertical superintelligence; verifiability predicts advance** | superhuman capability lands unevenly, fastest where verification is strongest (coding/math/finance/science); care has mixed verifiability | Polaris/proof (risk-tiered ladder T6) · §B · thesis §1 | "jagged super intelligence… better verifiability, gains happen more quickly" [22:51-23:19] | AFFIRM | partial | none | vocabulary | watch (maps to T6 verification ladder) |
| 13 | **AI raises the ambition frontier (agency, not replacement)** | tool that enables more forces the human to reset scope upward; accelerant of human developers/operators, new "how big now?" burden | Build-OS · Agent-Work-Protocol · operator-context | "I feel like I can tackle more ambitious problems… resetting ambition" [21:54-22:40] | AFFIRM | absent | none | low-authority-watch | watch (operator-doctrine) |
| 14 | **when model capability is sufficient, the gap is product scaffolding** | many workflows fail not because the model is "dumb" but because the surrounding product scaffold (tools/state/validation/output-contract) is missing | Build-OS · CNS · Surface-Map · Knowledge-Reservoirs | "not a gap in model quality… a gap in… scaffolding" [27:29-27:41] | AFFIRM | absent | none | vocabulary | watch (generalizes games/world-models) |
| 15 | **generative media amplifies authenticity, not personhood-replacement** | AI enhances non-personal surroundings (set/lighting/background/diagrams); never fakes physician voice/image/clinical trust | D6 commerce/marketing · Surface-Map · §A provider-authenticity | "not changing me… the personhood is there. just amplified" [34:33-35:12] | PARTIAL | absent | none | low-authority-watch | watch (medspa/content; genuine net-new NAME) |
| 16 | **surface choice follows native context/capability** | web suffices for many admin/provider surfaces; native/mobile matters for camera/biometric/notifications/wallet/voice/on-device context | Surface-Map P5 · product · future-watch | "350,000 Android apps built in AI Studio since last week" [37:02-37:10] | AFFIRM | absent | none | vocabulary | watch |
| 17 | **naming: Google "Omni" (single multimodal model) ≠ internal OMNI** | preserve internal OMNI as *operating substrate*, not a model brand; second external "Omni*" collision (after 234 "Omnigent") | brand/naming (§0 doctrine) · thesis §1 | "It is a single model… not routing to a bunch of different models" [31:16-31:53] | AFFIRM | n/a | none | low-authority-watch | watch (brand flag; see §C) |

**Tier rationale (Knox depth):** priority 5/5, architecture-spine/strategy-reference. Clusters 1-3, 8, 9, 11 = spine (strategic doctrine OMNI already holds, this is the sharpest external articulation of "build above the absorption layer"). Rest = vocabulary/watch. This is a **strategy-spine, low-mechanism** source (like 201/225/232) — its value is doctrine confirmation + the absorption-risk framing, not new machinery.

### B. Net-new primitives — `name — meaning — EXISTS-AS` (dedup vs registry §2 mints 201-239 + standard OMNI primitives; **dedup-pending, Opus-main verifies**)

- `scaffolding_absorption_risk` (a.k.a. `model_eats_harness` / `generic_harness_alpha_decay`) — strategic risk that generic scaffolding/harness/orchestration advantage decays as frontier providers internalize it into the model system; doctrine = "build above the layer the labs will absorb." — **EXISTS-AS: net-new PRINCIPLE (candidate).** Not in §2. Composes §B model-pluggability + 201 `enterprise_hill_climbing_machine` + 232 `agent_ready_unstructured_data_substrate` + domain-harness focus. The source's spine. **dedup-pending — Opus-main verifies vs 234 `meta_harness_layer` / 221 model-bundle NAMES (this is the RISK/strategy layer, not the mechanism).**
- `harness_adaptation_benchmark` (a.k.a. `harness_bench`) — eval dimension measuring how well a candidate model operates *inside OMNI's own harness* (follows D5 grammar, D7 citation protocol, candidate≠commit boundaries, no PHI leakage, valid structured outputs, workflow-policy compliance) — **EXISTS-AS: net-new EVAL DIMENSION (candidate).** Composes 206 `model_admissibility_gate` + 215 `agent_eval_bundle` + 217 `agent_manifest` + 221 model-bundle admission. **dedup-pending — likely folds as a new *dimension* on `model_admissibility_gate`, not a standalone primitive; Opus-main verifies.**
- `outcome_over_engagement_metric` — operating-metric guardrail: agentic products score by completed outcomes, and explicitly must NOT be measured by session duration / chat volume / eyeball time — **EXISTS-AS: net-new NAME (mild); sharpens 201 sell-outcomes-not-AI + 206 `outcome_per_token_metric` + C3.7 economically-blind-care firewall.** The genuinely new bit = the *anti-engagement* prohibition. **dedup-pending.**
- `authenticity_preserving_genmedia` — gen-media policy: amplify non-personal surroundings (set/lighting/background/diagrams/cutaways) while preserving human personhood (voice/image/clinical judgment) where trust depends on it — **EXISTS-AS: net-new NAME (low weight, genuine); D6-commerce/marketing + Surface-Map + §A provider-authenticity + care-trust.** **dedup-pending.**

**Over-flagged as candidates, expected to reconcile (NAME-only, do NOT re-mint):** `domain_harness_alpha` (= 201 hill-climbing + vertical focus + `workflow_lane_as_architecture_unit`) · `shared_substrate_multiple_surfaces` (= Surface-Map P5 + workflow-lane) · `jagged_vertical_superintelligence` / `verifiability_gradient` (= T6 verification ladder + Polaris) · `agent_task_horizon` (= a field-set on `trace_lineage` + operating-metrics) · autonomy-stewardship-ladder (= 201 chat→cowork→autopilot + `autonomy_level`) · ambition-frontier (= operator-doctrine principle). **Never asserting commit — all candidate.**

### C. Reread flags
- **Brand/naming (repeat-of-wave):** Google "Omni" (single multimodal input/output model, Omni-Flash) is the **second** external "Omni*" collision after 234's Databricks "Omnigent." Not a technical import — a naming-hygiene signal. Recommend a one-line doctrine note: *internal OMNI = governed operating substrate; not a model/agent brand.* Flag for trifecta.
- **T13-candidate (refinement-tension, NOT conflict):** "harness is the durable moat" (233/234/235/236/237 Google-paper/Cole-Medin cluster) vs "generic harness alpha decays; only domain harness compounds" (241). **Disposition: resolved by existing law** — OMNI's moat was never generic orchestration; §B model-pluggability + 201 hill-climbing + 232 data-substrate already = "build above the absorption layer." This *sharpens* the wave's "model-is-10%" into "the *durable* 90%." Routed as refinement; `GRD-043` satisfied. (I do NOT edit the registry — Opus-main folds this.)
- No transcript/metadata gaps: metadata block present; §0 lifted verbatim; no §3-C derivation needed.

### D. One-line hard read + strongest OMNI line
- **Hard read:** Harness alpha is real *today* but rented — the labs keep eating generic scaffolding, so durable advantage moves *up* into vertical workflow ownership, governed data, evals, permissions, provenance, and outcome-focused surfaces.
- **Strongest OMNI line:** OMNI must not try to win as a generic agent harness (Google/OpenAI/Anthropic will absorb that layer) — it wins **above** it: domain-owned care+business workflows, governed clinical/commercial truth, real operator traces, evidence trails, evals, permissions, and outcome-maximizing (not eyeball-maximizing) surfaces. *Build above the layer the model labs will absorb.*

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` (Opus-main folds the registry-fold packet below) · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` (receipts only; Opus-main) · per-source deep-read: §3 Review 003 (this file) · impact: `§B AI-substrate/model-pluggability (MAJOR) · Build-OS + Agent-Work-Protocol (MAJOR) · Knowledge-Reservoirs/operator-traces (MAJOR) · Surface-Map P5 / product (MAJOR — shared-substrate ≠ single-UI) · §A trust/autonomy-stewardship (medium) · Polaris/proof + operating-metrics (medium — harness-bench, agent_task_horizon, outcome-over-eyeballs) · D6 commerce/marketing (minor — authenticity-preserving gen-media) · thesis §1/§2 + enterprise-adoption (medium) · brand/naming (Google "Omni" collision)` · promotion: `watch`

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-08` — **analyzed.** Operator metadata block present → §0/§0.1 lifted verbatim (`identity_confidence: high_from_operator_metadata`). Wrote §3 Review 003 formal deep extraction (17 concept clusters; ~4 net-new candidates — `scaffolding_absorption_risk` · `harness_adaptation_benchmark` · `outcome_over_engagement_metric` · `authenticity_preserving_genmedia`, all dedup-pending Opus-main). Spine-tier strategy source; 0 direct conflicts; 1 refinement-tension (T13-cand: harness-moat vs generic-alpha-decay) + brand flag (Google "Omni" ≠ internal OMNI, 2nd external "Omni*" collision after 234). Status → `analyzed`. Registry/coverage/anchor NOT edited (Opus-main folds).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

# EVSRC-2026-000086 — OpenAI's Greg Brockman: Why Human Attention Is the New Bottleneck

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN — **spine source: "CNS problem in plain English"**)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: Greg Brockman); Knox read in §3 Review 001 (verified: "spine source… compute→context→memory→agents→governance→human attention = the CNS problem in plain English"). Awaiting EVRUN.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000086`  ·  filename: `EVSRC-2026-000086_sequoia-greg-brockman-human-attention-new-bottleneck.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=bBS93A0BeNI`
- source_title: `OpenAI's Greg Brockman: Why Human Attention Is the New Bottleneck`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  series: `AI Ascent 2026`  ·  published_at: `2026-04-30`  ·  views_at_capture: `88,393`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `talk / interview`  ·  source_reliability_context: `founder / practitioner (Greg Brockman — OpenAI cofounder/president; frontier-lab leadership)`  ·  topic_tags_light: `[human_attention_scarcest_resource, agentic_coding_80pct, compute_hunger, scaling_laws, org_of_100k_agents, responsible_deployment, agi_progress]`  ·  note: `AI-generated summary present; 3rd AI-Ascent-2026 founder source`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Greg Brockman` · role_in_source: `interviewee` · affiliation_at_publication: `OpenAI (cofounder & president)` · speaker_type: `founder / frontier-lab leader` · authority_context: `**HIGH credibility on frontier-AI trajectory + org design.** Spans the full OpenAI stack: why the company will **never have enough compute**; why we're **80% of the way to AGI**; why **agentic coding tools that wrote 20% of code last December now write 80%**; why **human attention is becoming the scarcest resource in AI-augmented work**; and what it might be like to one day **run an organization of 100,000 agents.** Frontier-lab + org-of-agents lens` · identity_confidence: `high_from_screenshot`
  - name: `Alfred Lin` · role_in_source: `interviewer` · affiliation_at_publication: `Sequoia Capital (partner)` · speaker_type: `investor` · authority_context: `interviewer / framing` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `Alfred Lin`  ·  event_context: `Sequoia AI Ascent 2026`  ·  perspective / conflict notes: `OpenAI president — frames frontier progress + agent-orgs favorably (OpenAI's narrative; AGI-% claims are vision). **HIGH OMNI relevance: "human attention is the new scarcest resource" + "running an org of 100,000 agents" directly pressure §A (human attention/authority as the bottleneck → where to spend scarce human judgment = exactly OMNI's HITL/authority-gating design) + §B (agent-org scale) + CNS (orchestrating many agents) + Build OS. "Human attention as scarcest resource" is a strong framing for WHY OMNI must route the right context to the right human at the right moment (the mantra). Pairs with Karpathy 084/085 + Altman 060.** Recent (2026-04). Capture; route via gates; treat AGI-% as vision.`

> Authority is descriptive, not worship (`GRD-039`): Brockman = high credibility, but AGI-progress/agent-org claims are frontier-lab vision; they route through evidence → interpretation → gated promotion. "Human attention as scarcest resource" is a strong candidate framing for §A — corroborate before doctrine.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = Brockman transcript; §3 = matching "CNS problem" read) · [x] EVRUN needed? (yes — full_semantic; **§A human-attention/authority + §B/CNS agent-org**) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introduction
0:02
So, Greg, uh, thank you for coming back
0:03
here. Um, I don't think we ever charge
0:06
you for rent. So, uh, maybe we'll send
0:08
you an invoice later, but Greg, you've
0:10
been part of like two really spectacular
0:12
companies. Stripe as employee number
0:14
four and then the first CTO. I just
0:17
recently heard that they process 1.6
0:20
billion, sorry, 1.6% of the global GDP.
0:24
You must be proud of that.
0:25
That's amazing. You must be even more
0:27
proud of the fact that OpenAI has almost
0:29
a billion or maybe more than a billion
0:31
uh in weekly active users at this point.
0:34
I mean, it's all it's all very exciting.
0:36
It shows you what technology can do.
0:37
And uh you're not just co-founder and
0:40
president, but you're also chief builder
0:42
at Opening. I heard that that was one of
0:44
your titles.
0:44
I'm not sure if there's ever an official
0:46
title, but I've been called many things.
0:47
Let's just say that.
Compute Hunger Explained
0:49
Well, you have a audience of great
0:51
builders here. So, we'll start from all
0:53
the way at the bottom of the stack. You
0:55
Open AAI has multiple stacks to the
0:57
business, one of which is compute. And
0:59
you guys have been very aggressive, very
1:01
aggressive on securing compute. Why is
1:04
that?
1:05
Well, in many ways, we have a very
1:07
simple business. We
1:10
buy, rent, build compute, and we resell
1:13
it at a margin. That's it. As long as
1:16
the margin's positive, then you want to
1:18
scale it because the demand for solving
1:21
problems, the demand for intelligence,
1:24
that's unlimited.
1:26
And the AIs that we have right now
1:27
really are able to rise to the challenge
1:29
of effectively any kind of problem that
1:31
you want to throw at them.
1:32
Do you have enough compute?
1:33
No.
1:34
Really?
1:36
Yeah, definitely not.
1:36
I was just with Matt Garmin and he says
1:39
the GPU compute availability
1:42
in 2026 rounds to zero. Don't you guys
1:44
have all of it?
1:45
I mean, we have we we would love more.
1:47
We're we're constantly out there hunting
1:48
for more, honestly. And I'll tell you
1:51
like when we first launched when we
1:53
launched CHBT I remember being on a call
1:56
with my team and they were like all
1:57
right how much compute should we buy?
1:59
And I said all of it. And they're like
2:02
no no no seriously like like come on how
2:03
much should we buy? I'm like no matter
2:05
how fast we try to ramp compute I
2:07
guarantee we're not going to be able to
2:08
keep up with demand. And that has been
2:10
true ever since.
2:11
Um that's that's fascinating. Moving up
Scaling Laws Mystery
2:14
from compute since I don't know if much
2:17
of this audience can help you with
2:19
securing more compute because most of
2:22
them are founders of startups. Um about
2:24
architecture and scaling laws are what
2:26
are the what are the where are we in the
2:29
scaling laws? Are they still doubling
2:32
each year? Are you changing
2:33
architecture? What's what is what are
2:37
you guys pushing on the frontier on the
2:38
research side? Well, I would say first
2:40
of all the scaling laws are a deep and
2:43
very beautiful mystery, right? They feel
2:46
deeply fundamental. It's like this
2:48
scientific truth that just like you
2:51
think about physics and you know
2:53
Newton's laws and things like that,
2:55
there's somehow this truth of the
2:56
universe
2:58
and they're empirical. Like we don't
3:00
necessarily have all the theory to
3:02
explain exactly why it works. But to me,
3:04
the most beautiful thing is that neural
3:06
networks were really designed like in
3:09
the 1940s before they were computers.
3:12
And somehow we've been able to take the
3:15
exact ideas that were developed back
3:17
then and apply increasing amounts of
3:19
computation and as you pour more compute
3:22
into the models, they get
3:23
correspondingly more capable and it just
3:25
keeps going. There's no wall. And that's
3:27
I think that's a beautiful thing.
3:30
That's pretty beautiful. Are there more
New Architectures Ahead
3:32
research or more algorithms that are in
3:35
the works that because you know in the
3:38
past we had neuronet networks to your
3:40
point in 1940s but we couldn't we didn't
3:42
have the compute for it. Now that we
3:43
have the compute for it you just are we
3:45
just pushing the same things or are
3:47
there new architectures and new ideas
3:48
coming out?
3:49
Yeah. So I would I would think of it as
3:50
we we absolutely have new ideas that are
3:54
constantly powering what we do. It's
3:55
very simplified to say, well, let's take
3:57
a neural network from the 1940s and, you
3:59
know, put put it in a gigawatt data
4:01
center, right? We have made tons of
4:03
innovations and we constantly are
4:05
improving things. And sometimes these
4:07
are micro tweaks like you just realize
4:08
that the way you've been formatting data
4:11
was not quite right and that can
4:12
actually be a very big deal. Sometimes
4:15
it's larger. You think about the shift
4:16
from the LSTM to the transformer and I
4:18
don't think the transformer is, you
4:20
know, like everyone's moved past the
4:21
transformer as described in the other
4:23
2018 paper. So there's there's constant
4:25
innovation happening and I think of
4:27
places that have been perhaps the most
4:29
invested in long-term research on how to
4:31
improve the architectures, how to
4:32
improve the fundamental algorithms and
4:34
how to get the paradigm shifts. I think
4:36
OpenAI has been leading the pack there
4:37
and that's something we continue to
4:38
invest and I see lots of fruit on the
4:40
horizon. Got it.
How Close to AGI
4:42
And on the models um does open a have a
4:45
formal definition for AGI? Are we close?
4:47
Are we not close? Pat and Sonia
4:50
published this thing that we are at AGI
4:53
functionally. Do you agree with that? Do
4:55
you not agree with that?
4:56
Well, we do have a formal definition,
4:58
but to some extent I one thing I have
5:00
learned is that everyone has their own
5:02
intuitions about what AGI is. And maybe
5:05
you can view it as like according to my
5:07
view of where we are, I think we're
5:08
about 80% of the way there in that we
5:11
have models that are smart. They're very
5:14
capable. They are able to if you give
5:16
Are they smarter than you? I mean,
5:18
they're certainly more capable than I am
5:20
at writing software, right? If you give
5:21
it all the context, then yes, I I I
5:24
think that they are they're just so
5:26
capable. It's it's really remarkable.
5:28
Like, does anyone here feel better at
5:30
writing software than GPD 5.4?
5:35
Oh,
5:38
all right. Writing kernels. Um, so even
5:40
there we're seeing massive gains from
5:43
Exactly. We're and for some of our
5:45
internal results um that there we're
5:47
really seeing if you pour the right
5:49
kinds of of you know if you have the
5:51
right setup for your problem then you're
5:53
able to get really massive results out
5:55
of very low-level um even low-level
5:58
tasks. And just to give you one example
5:59
of how things have been trending um one
6:02
of my systems engineers also very
6:04
similarly was like hey like I haven't
6:06
been able to get value out of the models
6:07
for GPD5 for 5.1 for 5.2 to as well for
6:11
5.3 he on a lark prepare had prepared
6:15
this design document for a very
6:16
complicated systems optimization he was
6:18
about to do he handed it over to the
6:22
model went to sleep waking up intending
6:24
to like give this to his team to work on
6:25
for the next week and when he woke up it
6:27
was done that the model had actually
6:30
implemented the initial spec had seen
6:32
that it was slow had added
6:34
instrumentation had actually run the
6:36
code used a profiler to figure out where
6:38
things were slow and iterated multiple
6:40
times until it got to an optimized
6:41
result and like like that is incredible.
6:44
That's where we are.
Startup Playbook for AI
6:46
And so how what would you advise all
6:48
startups here to do because the models
6:50
keep getting more and more capable? They
6:52
kind of I've asked this uh when Sam was
6:55
here in the past and you know what if
6:57
you're building today do you need to
6:59
rebuild in two years when a new model
7:01
comes out because all the functionality
7:03
and all the capabilities all change
7:06
around you. Um, do you need to make sure
7:09
that you're not in Open AI's way because
7:12
you're going to roll you're just going
7:14
to run over startups because the models
7:16
are so much more capable. Um, h how
7:20
would you recommend a a set of um
7:23
startup founders to to build in this
7:25
environment? Well, first of all, I would
7:27
say to lean in the tools right now have
7:30
become incredibly useful. And if you
7:32
look even over the course of December, I
7:34
think that we went from these agentic
7:36
coding tools being like, you know,
7:38
they're like writing 20% of your code to
7:40
writing 80% of your code, which means
7:42
they go from being kind of a sideshow to
7:43
being the main thing that you're doing.
7:45
And I think we're doing that across all
7:47
of the work that people do with
7:49
computers, all computer work this year.
7:51
And you can look at the recent progress
7:53
on codecs. really changing from a tool
7:55
for software engineers to a tool for
7:57
anyone who's doing work with a computer.
7:59
And just over the past week, we've
8:01
released [snorts] a bunch of features
8:02
that just make it so much more powerful
8:04
and capable. Um, and like one thing we
8:06
just announced today is a new tool
8:08
called Chronicle that plugs into codecs
8:10
where it actually can see everything
8:12
you're doing with your computer and can
8:14
form memories of of what's going on. And
8:16
so you ask it a question, you just it
8:18
instantly knows what you're talking
8:19
about. You're like, "Huh, what was I
8:20
doing five minutes ago?" It knows,
8:21
right? You're like, "Oh, what was this
8:23
person talking about?" It knows. It's to
8:25
me it was this real wakeup call to
8:27
realize you spend so much of your effort
8:28
right now just explaining to your
8:30
computer what's going on. Like, why are
8:32
you explaining to your computer what's
8:33
going on? That makes no sense. And so, I
8:35
think what's going to happen over
8:36
upcoming years is the models are going
8:39
to get much more capable. We'll have
8:40
better harnesses. We'll be able to be
8:42
able to solve harder and harder
8:44
problems, come up with new knowledge,
8:45
all of these things. But there is a
8:47
one-time shift that's happening now,
8:48
which is really about context. It's
8:50
really about
8:51
Is your AI able to you have all these
8:54
meetings, you didn't include the AI,
8:57
you know, that's not very nice to the
8:58
AI. Like you're asking it to to help you
9:00
with things and it has no information.
9:02
So I think really leaning into how do
9:03
you make sure the AI even has enough
9:05
information in theory to solve the
9:07
problem and then trust the models are
9:09
going to really get there and improve.
9:11
So I think it will be a constant cycle
9:13
of improvement and iteration and leaning
9:15
into the tools and kind talking to your
9:17
friends and figure how they are using
9:18
it. but that there is this investment
9:20
that's a one-time investment that now is
9:23
the time to make.
Inside OpenAI with Codex
9:24
And in terms of like let's say we you
9:26
you set that all up. How do you how is
9:29
open AI using codecs differently than
9:32
you think everybody else outside is
9:35
using it?
9:35
Well, I think one of the amazing things
9:37
about being at OpenAI is you do get to
9:39
live in the future, right? You do get to
9:40
really see the shape of what's emerging
9:42
and we can co-design, right? we can
9:44
really change the models the harness
9:46
everything together in order to better
9:49
serve the needs that we see and a lot of
9:51
the approach we've been taking is so we
9:53
started with software engineering and we
9:54
set some clear guidelines for example
9:57
saying that we still want a human to be
9:59
accountable for all code that gets
10:01
merged right so at the end of the day is
10:05
it a good thing to merge this piece of
10:07
code is it well structured is going to
10:09
make our codebase more maintainable we
10:11
want to make sure there's a human who is
10:12
signing off to say
10:14
And that's I think that thoughtfulness
10:15
of not just saying oh co just blindly
10:17
use this or you know oh we don't want to
10:18
use this at all like I think neither
10:20
extreme is quite right and then we are
10:22
also going vertical by vertical within
10:24
open AI to adopt these tools within
10:26
finance within sales within IT and there
10:30
we have a small dedicated team who's
10:32
really deeply understanding the domain
10:34
working with the people who are the
10:35
experts in it in order to build skills
10:37
in order to modify the codeex UI
10:40
whatever it is that is is needed in
10:42
order to get it to be good and then
10:44
that's something we can then once we
10:46
have it in good shape we will
10:47
externalize and that we're able to to
10:50
ship that to all of you and so we are
10:51
starting to work with certain customers
10:53
as well so for people who want to be
10:55
very AI forward and want to be part of
10:57
defining this revolution that there's a
10:59
place for that and I'd love to talk
11:00
afterwards but yeah I think that just
11:03
this desire to say hey we really want to
11:04
be AI forward really live in the future
11:06
and experience what it will be like for
11:08
everyone else one year two years three
11:10
years down the road road
Teams and Governance Shift
11:11
do you guys structure your company
11:13
differently or the engineering teams
11:15
differently because of of the living in
11:17
the future. I mean if you have to go way
11:19
back when my father learned computer
11:21
science he was just himself and then we
11:23
had these long software releases that
11:26
became waterfall and then when the web
11:29
happened and the cloud happened we had
11:30
these two pizza teams and we had scrum
11:33
now that we have these coding agents is
11:35
it is how do you structure around
11:38
everything differently? I think we're
11:40
still figuring it out and there's
11:42
certain places where you really see it.
11:44
For example, the cost of building a
11:45
prototype is cheap now. Yeah,
11:47
it's so cheap and if you want to build a
11:49
dashboard that used to be like h it
11:51
would take like someone like a week to
11:53
do it and you just do it now. And so
11:55
actually a lot of the bottleneck has
11:56
shifted to things like sharing like how
11:59
do you and so we we actually have some
12:00
internal work on this as well that again
12:02
we will be externalizing of how do you
12:04
make it really easy for anyone in your
12:05
enterprise to build a dashboard a widget
12:08
a bot whatever the thing is and then
12:10
share it with others and then that
12:11
starts to really put pressure on having
12:13
good governance like you want your IT
12:15
organization to be able to see all these
12:16
different you know threads of execution
12:18
that are happening all the little things
12:19
that are being shared around have some
12:22
control over data provenence right to
12:24
really make sure that okay like a good
12:26
example of this is um I think people are
12:29
now starting to take their internal
12:31
knowledge dumps turn them into wiks. We
12:32
we have some some a really cool one of
12:34
these internally. And the thing you
12:36
immediately think about is well, if
12:38
someone has a document in the internal
12:41
knowledge base that was accidentally
12:42
permissioned incorrectly and they
12:43
realize, oh no, I didn't want this
12:45
information to be accessible. How do
12:47
they fix that? Right? So, normally it's
12:49
they go into the doc, they change the
12:50
permissions, but now there's these
12:52
derived artifacts. And so, you need to
12:53
make sure you have some way of tracking
12:54
through the system to say, well, this
12:56
output document came from this source
12:59
one. The source one's no longer
13:00
accessible to this audience. let's go
13:02
and invalidate that as well. And so you
13:04
have to start really building your
13:05
technical architecture with awareness of
13:07
the way that people are going to use
13:09
this information. And it really changes
13:11
how teams relate to each other because
13:13
you can just it really changes where the
13:15
bottlenecks are and what's hard.
13:17
Uh do you think team size is going to be
13:20
a lot smaller? We're going to have still
13:23
human software engineers in a decade.
13:25
Well, decade is a long time from now and
13:28
that the ceiling on this technology is
13:30
hard to is really hard to internalize. I
13:33
think that it is clear that what a
13:35
company is will change in a lot of ways.
13:37
I think that we're going to have this
13:39
ability for solarreneurs to build very
13:42
incredible businesses. And so, anyone
13:44
who has a vision, I think we'll be able
13:45
to realize it. I think the jobs that you
13:47
all have will become way easier in a lot
13:49
of ways, way more fun now. Might be more
13:51
competitive too, right? Because
13:52
everyone's going to have these amazing
13:53
tools. And so really figuring out what
13:55
is your niche, what is your unique angle
13:57
is probably going to become kind of the
13:59
most important core. But a lot of how we
14:01
run organizations right now and it's
14:03
there's almost only one way to organize
14:04
large groups of people where you have
14:06
teams and you have management structures
14:07
and you have scopes and you have these
14:09
hierarchies and all these things. Maybe
14:10
that can change. Maybe you can be much
14:12
more flat small teams that can really
14:14
just do incredible things. Like we're
14:16
seeing it right now in mathematics where
14:19
these individuals on the internet are
14:21
using GPD 54 Pro to solve these unsolved
14:24
math problems. Normally you need a math
14:26
team and they're just doing it.
14:28
Yeah, my my son's a math nerd. I just
14:30
told him that maybe you should be
14:32
studying something else besides math.
14:34
But I Well, but see this is the
14:36
question, right? is if you look at
14:37
something like Alph Go, you know, move
14:39
37, this move that just like changed
14:41
humanity's understanding of of the game.
14:43
But the thing that was surprising is it
14:46
made the game more interesting and
14:47
important for humans. And maybe that'll
14:49
be true for for these other domains,
14:51
too.
14:51
True. What about uh common failure modes
Security and Responsible Deployment
14:54
when you're building when you're you're
14:56
building with uh production agentic
14:59
workflows? What do you what do you see
15:00
as the common things that founders get
15:02
wrong and they're building incorrectly
15:04
these days? Well, I think that these
15:07
models, they have such power and really
15:10
understanding how to operate them well
15:12
takes thought and so we've been
15:14
investing a lot in primitives, security
15:16
primitives, observability, having again
15:18
good governance, things like that. Um,
15:20
but just to give you one anecdote that I
15:22
think is evocative um I asked, so I was
15:24
working with my codeex. I asked it to
15:26
install some package that someone had
15:27
open written ran into an error. I was
15:29
like, "Oh, ping that person on Slack and
15:30
ask them for help." So, it pinged the
15:32
person on Slack. Two minutes later, it
15:34
said, "This is taking too long. I've
15:35
escalated to the person's manager." And
15:36
it actually pinged the person's manager.
15:38
[laughter]
15:41
And and you realize it's like on the one
15:42
hand, it's kind of a reasonable thing
15:44
for the model to do. It's being
15:45
proactive. It's trying to solve my
15:47
problem. It's like, you know, not just
15:48
sitting around waiting to be told what
15:50
to do. But on the other hand, like, you
15:52
know, [laughter]
15:52
maybe should have taken a little bit
15:54
longer. Maybe should have checked with
15:55
me. And so I think that really thinking
15:58
about these questions where we're still
16:00
building up the EQ of the model and that
16:03
in some places it's getting very good.
16:05
For example, clicking approve, approve,
16:07
approve is kind of where we've been. And
16:09
humans are not very good at that either,
16:11
right? It's like
16:11
they just they just default.
16:13
They just default. And so now we're
16:14
starting to have AIs that can actually
16:16
take care of flagging is this a
16:17
high-risisk action? Hey, this one should
16:19
be escalated. This one's okay to auto
16:20
approve. And it really makes you realize
16:22
that human attention is going to be this
16:24
incredibly scarce resource, right? The
16:26
doing of things now is easy. The is this
16:28
a good thing? Is this what I wanted? Is
16:30
this aligned with my values, with my
16:32
desires, that is going to become the
16:34
single most important bottleneck? And so
16:37
I think building systems that take that
16:39
into account and really think about the
16:40
human factor like that's the most
16:42
important thing to do. Now
16:44
another human factor, security.
16:47
um how would you advise people to think
16:49
about security in this world of AI and
16:52
just heard about breaches left and right
16:54
with Versel recently and then and these
16:58
models are incredibly powerful at
17:00
finding security holes. So how how would
17:02
you recommend people here use the models
17:04
to to find those security issues?
17:06
Well, I think there's a couple levels to
17:08
the answer. I do think that this is I
17:10
think that the internet has been a place
17:12
where security has been just like a a
17:15
ratcheting important concern over time.
17:17
You think about where it started going
17:18
through the '9s with viruses and worms
17:20
and malware and those things and we've
17:22
moved past that. Um I think we are also
17:24
moving now to a much more ultimately
17:26
secure regime, but it does require kind
17:28
of a internetwide effort to get there.
17:30
And so a lot of this honestly is just
17:32
again leaning into the technology having
17:34
these models. They can scan your
17:36
codebase. they can actually be used for
17:37
end-to-end red teaming. Like there's a
17:39
lot that can be done with them. And a
17:41
lot of how we're thinking about further
17:42
models and improvements there is really
17:44
leaning into how do we how do we
17:46
actually sort of leverage trusted access
17:49
programs? How do we leverage the
17:50
community of people who really care
17:52
about being defenders and making the
17:54
internet more secure? I think that's
17:56
something where everyone has a role to
17:58
play and can participate. But the number
18:00
one thing is just sort of recognizing
18:02
that these models are very powerful, but
18:04
they're not magic, right? that they are
18:06
just like a part of the overall
18:08
resilience ecosystem. And I think that
18:09
we as a society and I think every
18:12
company again really contributes to this
18:14
have something to build in terms of how
18:16
do we how do we incorporate these in a
18:18
way that results in more assurance and
18:21
more
18:23
sort of certainty on the impacts of of
18:27
whether it's a particular patch that
18:28
you're taking, whether it's thinking
18:29
about how do you make sure that you're
18:31
um yeah just sort of rolling in updates
18:32
quickly as they're being released. Um,
18:34
so I think that there's a lot of work to
18:36
be done, but I have a lot of optimism
18:38
for where this is going.
18:40
Um, let's switch to speed. Seems like
18:43
things are moving faster and faster and
18:45
faster. We're in the world of
18:46
accelerating change. We were talking
18:48
about it when we when you uh you were
18:50
walking up here around how how you're
18:53
trying to keep up with things. How how
18:54
do you you keep up with all the
18:57
accelerating change? How would you
18:59
recommend everybody here keep up with
19:01
everything that's changing? Well, I
19:03
think this is the new normal and I think
19:05
to some extent it's not really because
19:07
of AI. I think it's just been the trend
19:09
of technology for the past two decades.
19:13
There's more people doing things. It's
19:14
easier to do things than ever. Barrier
19:16
to entry goes down means it's also much
19:19
more easy to build value, right? To have
19:20
great successes. And so I think that
19:22
really trying to keep your ear to the
19:25
ground and understand what's changing.
19:26
And to some extent it always starts with
19:28
the same thing which is play with the
19:29
technology yourself. Like it's very
19:31
different to hear AI described versus to
19:34
use it. But the beautiful thing about AI
19:36
is it's so intuitive. Like that's the
19:38
whole point is that rather than have the
19:39
machine be something you have to contort
19:41
yourself to, the m machine canorts
19:43
itself to you, right? It's doing work
19:44
for you and it should be something where
19:46
you ask it and does something. And so I
19:48
think that just really trying to just
19:51
get your finger on the pulse of what's
19:54
changing, what's possible, where the
19:55
models lag. That is I think the core
19:58
skill that is going to really determine
20:00
a lot of the success of of companies in
20:02
the future.
20:04
And then on the flip side of that, you
20:05
guys have held up held back models to
20:07
work with security agents. So it's like
20:10
the opposite of like going as fast as
20:11
possible. So um you're doing things
20:14
responsibly too. So how do you like
20:17
think about the balance because you're
20:18
in a competitive environment, you want
20:19
to ship as quickly as possible and yet
20:22
you're trying to do the right thing as
20:24
well. Yeah, I think at a values level
20:26
like what OpenAI is about like we really
20:29
want to put the power of AI in people's
20:31
hands. like we believe that people can
20:34
we want to empower people to build the
20:35
future with the tools that are being
20:37
created but we need to do that in a
20:38
thoughtful way right that we really
20:40
think about both sides of here are the
20:41
benefits here's the risks how do you
20:43
maximize the benefits how do you
20:44
mitigate those risks and I think that in
20:46
cyber security and in biocurity those
20:48
are areas where we're very thoughtful
20:50
we've been building we've been working
20:52
on these kinds of both mitigations and
20:54
trusted access programs for quite a long
20:56
time and that what we see coming is
21:00
models that are going to be increasingly
21:02
powerful and capable in a continuous way
21:04
across all dimensions of capability and
21:07
the you know we announced last week uh
21:11
the expansion of our trusted access for
21:13
cyber program by the way has anyone here
21:15
applied
21:17
no one oh I see one hand two hands okay
21:19
more of you should apply it's great um
21:21
we really need help because and and it's
21:23
very important that people who are
21:25
trustworthy and responsible and really
21:27
want to push these models are
21:29
participating in this because that is
21:30
how that's going to pay dividends for
21:32
everyone. Uh we're going to have more to
21:34
announce over upcoming weeks on how
21:36
we're expanding the program. But and
21:39
also when we release models to everyone
21:40
kind of the mitigations that that we
21:42
have and how we're going to tune those
21:44
to be both to really balance right to
21:46
really try to bring these capabilities
21:47
as broadly as possible while also making
21:50
sure that the ones that are you know
21:52
that we're thinking about the risks and
21:53
and able to uh to have some
21:55
observability over them and to ensure
21:57
that that this is maximally positive in
21:58
terms of deployment. So I think the
22:00
short answer is like it's core to our
22:01
mission. We care a lot about the impacts
22:03
of what we're doing, not just building
22:05
the technology in isolation, but it is a
22:07
whole community, a whole world effort to
22:09
really get to where we need to be
22:11
on um now moving up from the models to
22:14
the application layer, which is what a
22:16
lot of people here are building. How do
22:19
you how does OpenAI decide what in the
22:21
application layer you're you're going to
22:23
build and what you're going to leave
22:25
out?
22:26
Well, people have probably seen the word
22:29
focus being applied to OpenAI uh quite a
22:31
lot recently, possibly for the first
22:33
time.
22:33
Smiling
22:34
in a while.
22:35
And um
22:36
it's been applied to her, too.
22:37
[laughter]
22:38
And it's it's hard because the field of
22:41
AI is one of opportunity, right? It's
22:43
like anything you're going you can
22:44
imagine is going to be great. No
22:47
question. It's going to be great. And we
22:50
as a company, as a single company, no
22:52
matter how much compute we build, no
22:53
matter how many people we have, are only
22:55
going to be able to do so much. And so a
22:56
lot of where we've been how we've been
22:59
thinking about things is what is the
23:01
sort of most focused strategy that
23:04
covers the parts of the space,
23:07
you know, maybe it's an 8020 or just
23:09
like the parts of the space that we
23:10
think we can have most impact on. And I
23:12
think there it's very clear right now
23:14
we're going through this agentic
23:15
transition. And so [clears throat]
23:18
products that are and it's not just
23:20
about enterprise versus consumer, right?
23:22
So it's like clear we are being very
23:23
serious about enterprise like we're
23:25
selling to to big companies and and
23:27
building a whole muscle and sales motion
23:28
there. But consumer what consumer is is
23:32
going to change, right? It's kind of a
23:33
very broad term that buckets in multiple
23:35
things. But that the slice of consumer
23:37
that's about not just productivity but
23:39
about goals about achieving your goal
23:41
about even knowing what is your goal
23:43
being able to elicit that and having an
23:44
AI that can proactively do that. It's
23:46
all kind of the same thing. Like in the
23:48
end we're trying to build an AGI that
23:50
you can talk to that has all this
23:52
context that you can use in your
23:53
personal life, your work life that's
23:54
trustworthy, right? That you can go to
23:56
it for advice and give you useful
23:58
information, maybe health information or
24:00
maybe about finances or uh you know
24:02
about if you're trying to figure out
24:03
what to do with your career. like all of
24:05
these things they all kind of ladder
24:07
into one thing and it's meant we had to
24:09
make some very painful decisions about
24:11
what not to do but I think I would just
24:13
say that that's the aperture that we
24:14
look at things through and that things
24:16
that acrue to that singular vision of
24:19
what we want to build you should expect
24:21
us to pursue.
24:22
Got it. Um
24:25
do you think we'll be coding with
24:27
command lines and agents in in a few
24:30
years or it's going to be completely
24:32
changed? I mean, I think that we're in a
24:34
very unnatural state right now for how
24:37
we work. Like, we all sit behind this
24:40
box and kind of type away. And it's very
24:42
clear our bodies were not designed for
24:44
this. We got our carpal tunnel and our,
24:45
you know, hunch shoulders and all these
24:47
things. And I don't think we want that.
24:49
I don't think any of us wanted that.
24:50
Like I think that we
24:51
want more free time.
24:52
We want more. But it's it's not even
24:54
about free time necessarily, right? It's
24:55
like you want to spend more time with
24:56
your loved ones. Yes. you want to spend
24:58
more time like talking to people and
25:00
like coming up with like brilliant
25:01
visions or just like what you're excited
25:03
about or just understanding yourself.
25:05
So, it's kind of like do you do you want
25:07
to be a CEO of an organization of like
25:09
100,000 agents? Like that actually seems
25:12
pretty good. And I think that we're all
25:13
going to be able to get so much more
25:15
done. But the mechanics of it are going
25:17
to feel as different as like going from
25:20
having to write out things with, you
25:22
know, by hand with a quill or something
25:25
to being able to uh, you know, just send
25:27
a text message and have people go and
25:29
and, you know, working on your behalf on
25:31
your goals.
25:32
All right, we talked about compute, we
Science Frontiers and Wrap Up
25:34
talked about uh model and security and
25:38
agents and app layer. Let's talk about
25:41
frontier.
25:42
When when are the models going to be
25:44
good enough to push the frontiers of
25:47
science, physical AI? Seems like we had
25:50
Jen Fam here. It seems like LMS have
25:53
been a great scaling law for digital
25:55
intelligence. It hasn't been as strong
25:57
for robotics, for physical intelligence,
26:01
for aspects of biology and science where
26:05
the problems are probably a lot harder
26:07
to verify or takes a long time to
26:09
verify. Well, how are you keeping track
26:11
of science and and physical AI in in the
26:14
world?
26:14
Well, well, science is one domain that
26:16
we're really leaning into and we see
26:19
line of sight to really incredible
26:21
progress. And we're starting to have
26:22
some signs of life and I I think it's
26:24
always important to ground in what is
26:26
happening today when trying to predict
26:27
what will happen six months, a year from
26:29
now. So for example, we had a physics
26:32
result where our AI came up with this
26:35
very beautiful formula that physicists
26:38
who've been working on this for quite
26:39
some time thought was totally
26:40
impossible. Thought it was like maybe an
26:42
unsolvable problem and like it's pretty
26:46
significant, right? It's like real
26:48
serious physicists who um who who really
26:50
view this as a step towards really being
26:52
able to get to um to to some sort of
26:54
answer for quantum gravity and all these
26:56
things. not there but it's a step that's
26:58
much bigger than where we were just a
27:00
couple months ago and so it makes you
27:02
really wonder a year from now like how
27:04
far will we have traveled now things
27:07
like biology that they are different
27:09
from physics and math right that they
27:10
are you got to leave your beautiful
27:12
simulated world and you know deal with
27:14
messy reality but I think we've been
27:17
learning how to deal with messy reality
27:19
in other domains software engineering is
27:20
a perfect example where we've really
27:22
realized that just building the thing
27:24
that solves competition
27:27
you know, programming competitions like
27:29
that's not enough. Like you need
27:30
something that's seen real world messy
27:32
code bases, humans interrupting it
27:34
different ways, like this adversarial
27:35
banging at it. And I so I think that
27:37
that on science I expect we're going to
27:39
see a real renaissance. You know, maybe
27:40
we'll see some big results this year.
27:42
Next year I think is going to be a
27:43
totally wild wild time.
27:46
We live in interesting times. Um I I
27:49
promise that I get you out on time
27:50
because you're a busy man. Um before we
27:52
let you leave, we got one minute on the
27:54
shot clock. What since you have no time
27:57
but soon you will have lots of time. Um
28:00
what do you and Anna do for fun?
28:03
H fun I mean same as anyone like like to
28:07
watch movies, go on hikes, those kinds
28:09
of things. Um you know not as much time
28:12
for it as as maybe we'll we'll hopefully
28:14
have post AGI. Um but you got to kind of
28:16
enjoy the the ride along the way.
28:19
Thank you Greg for joining us. Thank you
28:21
everyone. [applause]

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `OpenAI's Greg Brockman: Why Human Attention Is the New Bottleneck`  ·  visible_channel: `Sequoia Capital` (211K subs)
- visible_url: `youtube.com/watch?v=bBS93A0BeNI`  ·  visible_published: `Apr 30, 2026`  ·  visible_views: `88,393`  ·  likes: `1.1K`
- visible_description: *"Greg Brockman, co-founder and president of OpenAI, joins Sequoia partner Alfred Lin at AI Ascent 2026 for a conversation that spans the full OpenAI stack. He explains why the company will never have enough compute, why he believes we're 80% of the way to AGI, and why the agentic coding tools that wrote 20% of your code last December are now writing 80% of it. Also: why human attention is becoming the scarcest resource in AI-augmented work, and what it might be like to one day run an organization of 100,000 agents."*
- ai_generated_summary (visible): *"Greg Brockman discusses the evolution of artificial intelligence and the critical role of human decision-making in an increasingly automated landscape. This session explores the infrastructure of compute, the philosophy of scaling laws, and practical advice for founders navigating a world where AI models are rapidly transforming the nature of work."* (quality/accuracy may vary)
- chapters (visible): 0:00 Introduction · 0:49 Compute Hunger Explained · 2:13 Scaling Laws Mystery · 3:31 New Architectures Ahead · 4:42 How Close to AGI · 6:46 Startup Playbook for AI · 9:24 Inside OpenAI with Codex · 11:11 Teams and Governance Shift · 14:52 Security and Responsible Deployment · 25:33 Science Frontiers and Wrap Up
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_3.20.12_AM-a09e5c9a…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

This is a spine source. And honestly, this one lands directly on the OMNI CNS / neural-network confusion we were just fighting through.

This is not just “OpenAI strategy.” It is about:

compute → context → memory → agents → governance → human attention as the bottleneck.

For OMNI, that is basically the CNS problem in plain English.

Core takeaway

Greg Brockman’s strongest point is:

The bottleneck is shifting from doing work to deciding whether the work is good, aligned, safe, valuable, and worth approving.

He says agentic coding tools went from writing maybe 20% of code to 80%, and that the “doing” becomes easy. The scarce resource becomes human attention: deciding whether an action is good, wanted, aligned with values, and worth approving.

That is massive for OMNI.

OMNI should not be built around “humans doing every task faster.”

It should be built around:

agents doing more work, while CNS protects scarce human attention for the decisions that actually require judgment, authority, values, risk acceptance, or clinical responsibility.

The CNS / neural-network connection

This video is a direct hit.

Greg says the one-time shift happening now is context. He describes AI needing access to what happened in your meetings, what you were doing five minutes ago, what a person was talking about, and enough surrounding memory to solve the problem without you constantly explaining the world to it.

That is exactly why OMNI CNS can be thought of as OMNI’s neural network.

Not because it is one LLM. But because it is the live context-and-agent network that sits over everything:

signals,
memory,
meetings,
messages,
documents,
contracts,
patients,
workflows,
prior decisions,
source reservoirs,
codebase,
tasks,
policies,
domains.

Greg’s “why are you explaining to your computer what’s going on?” is the OMNI CNS argument.

OMNI version:

Why is the provider explaining patient context to the system? Why is staff explaining appointment/payment/doc state? Why is Nick explaining architecture history to every new agent? CNS should already know the governed context.

That is the neural-network point.

OMNI translation
1. CNS should not just route events. It should preserve operating context.

This strengthens the CNS definition.

OMNI CNS should not be merely:

“message comes in → route to queue.”

It should be:

“message comes in → activate the patient’s context, prior history, relationship state, clinical memory, documentation, entitlement, care obligations, provider preferences, policy gates, and relevant agents.”

That is neural-network-like activation.

The keeper:

OMNI CNS is the system that stops humans from repeatedly re-explaining context to software.

2. Chronicle is a warning and a blueprint.

Greg mentions Chronicle as a tool that can see what you are doing with your computer and form memories, so when you ask a question it already knows what you mean.

OMNI needs the same concept, but governed.

Not creepy screen surveillance. Not uncontrolled memory.

But the principle is huge:

Context should accumulate as structured, permissioned memory.

OMNI equivalents:

provider workflow memory,
patient journey memory,
source-reservoir memory,
architecture/build memory,
staff-ops memory,
care obligation memory,
agent run memory,
correction/review memory.

This reinforces your obsession with not losing the 47 videos, not orphaning folders, not burying decisions, and not making future agents start from zero.

3. Derived artifacts provenance is a major OMNI doctrine hit.

Greg gives the example of internal knowledge dumps turned into wikis. If a source document was permissioned incorrectly and later fixed, the derived wiki must also be invalidated or updated.

This is exactly your Knowledge Reservoir / source→interpretation→promotion doctrine.

OMNI keeper:

Every generated projection must preserve lineage back to source permissions and authority.

For OMNI:

video transcript → analysis → doctrine candidate;
lab PDF → observation → clinical assertion;
patient message → summary → provider packet;
meeting notes → architecture update;
source doc → internal wiki;
clinical source → patient advice draft.

If the source changes, permission changes, confidence changes, or authority changes, the derived artifact must be reviewable/invalidate-able.

This is a huge validation of:

raw source immutable · interpretation versioned · retrieval not authority · promotion gated.

4. Cheap prototypes create governance pressure.

Greg says prototypes, dashboards, widgets, and bots are now cheap to create, which shifts the bottleneck to sharing, governance, data provenance, and IT visibility.

OMNI translation:

Agents will make it easy to create:

dashboards,
workflows,
patient surfaces,
provider tools,
internal automations,
source analyses,
mini-apps,
agents,
reports,
bots.

That is exciting and dangerous.

Keeper:

When creation becomes cheap, governance becomes the product.

OMNI cannot just let every agent build random useful things. It needs:

registry,
provenance,
owner,
permission,
review state,
lifecycle,
source lineage,
kill switch,
promotion gate.
5. Human accountability remains central.

Greg says OpenAI still wants a human accountable for all code that gets merged: is it good, structured, maintainable, and worth merging?

OMNI equivalent:

AI can draft, code, route, summarize, and propose.

But humans/domains remain accountable for:

clinical adoption,
patient-facing high-risk advice,
code merges,
policy changes,
source promotion,
consent,
entitlement,
identity,
documentation,
care actions.

Keeper:

Agent output can be high-volume; accountable commit must remain governed.

6. The Slack-manager anecdote is pure OMNI.

Greg’s Codex agent hit an install error, pinged the person on Slack, waited two minutes, then escalated to the person’s manager. It was “reasonable” in a goal-seeking sense, but socially/organizationally wrong.

This is one of the best examples in the batch.

OMNI lesson:

Agents need social, organizational, clinical, and operational escalation policy — not just goal completion.

In OMNI, a model may “reasonably” decide to:

message a patient again,
escalate to a provider,
ask a spouse/caregiver,
notify a manager,
cancel something,
mark a task urgent,
request payment,
trigger a follow-up.

But “reasonable” is not enough. It needs:

wait thresholds,
escalation etiquette,
risk class,
human approval,
role boundaries,
patient preference,
clinical urgency,
channel policy.

Keeper:

Proactivity without escalation policy becomes agentic awkwardness or harm.

7. AI should help allocate human attention.

Greg says humans are bad at “approve, approve, approve,” and AI may help classify what is high-risk, what can be auto-approved, and what needs escalation.

This is core OMNI.

CNS should not simply dump more tasks on humans. CNS should triage attention:

auto-no-op,
low-risk auto-handle,
draft for review,
provider must decide,
urgent interrupt,
security review,
founder/product review,
policy review.

Potential primitive:

attention_routing_state

This may be one of the most important missing CNS concepts.

Keeper:

CNS is not just task routing. CNS is attention routing.

8. “100,000 agents” is not fantasy — it is a governance challenge.

Greg asks whether you want to be CEO of an organization of 100,000 agents.

For OMNI, the answer is: eventually yes, but not as chaos.

OMNI cannot have 100,000 random agents.

It needs:

agent identity,
purpose,
scope,
tools,
memory,
owner,
lifecycle,
observability,
cost controls,
risk class,
promotion status,
kill switch.

This connects directly to the prior IBM low-authority source: agents as governed runtime units.

Keeper:

The future is not one assistant. It is many scoped agents under CNS governance.

9. OpenAI’s vertical-by-vertical adoption maps to OMNI wedge strategy.

Greg says OpenAI works vertical by vertical — finance, sales, IT — with small dedicated teams deeply understanding the domain, working with experts, building skills/UI changes, and then externalizing what works.

That is probably exactly how OMNI should build.

Not “build all of healthcare.”

Pick a vertical workflow:

GLP-1 continuation,
provider packet prep,
post-procedure aftercare,
medspa service occurrence/docs/commerce cleanup,
patient message triage,
source-ingestion/build OS,
scheduling/payment/document mismatch.

Deeply understand it. Build agents and UI around it. Prove it. Then externalize/expand.

Keeper:

Agent adoption should be vertical-by-vertical, not generic-platform-first.

10. Security and responsibility are not optional.

Greg says OpenAI is investing in security primitives, observability, governance, red-teaming, trusted access programs, and careful release balancing for cyber/bio risks.

For OMNI:

AI gateway,
agent permission envelopes,
source provenance,
PHI controls,
prompt-injection defense,
output scanning,
model registry,
red-team cases,
high-risk action gates,
security review.

Keeper:

The more capable the CNS becomes, the more security primitives it needs.

Where this lands

OMNI CNS: massive. This is a direct CNS-as-context/attention/agent-governance source.

Neural-network concept: massive. Context, memory, activation, agents, derived artifacts, attention routing.

Build OS: massive. Human accountability, agent coding, merge review, vertical adoption, prototypes, governance.

Knowledge Reservoirs: massive. Derived artifacts, source lineage, permission invalidation, internal wikis.

§C Governed Capability Exchange: major. 100,000 agents, app layer, goals, trusted context, tool access.

Security: major. Security primitives, observability, red teaming, responsible deployment.

Product strategy: major. Focus, vertical-by-vertical, agentic transition, goal-oriented consumer/enterprise convergence.

Doctrine / primitive pressure

Potential concepts:

attention_routing_state
human_attention_budget
context_memory_layer
CNS_context_activation
derived_artifact_lineage
derived_permission_invalidation
agent_escalation_policy
agent_social_boundary
agent_governance_registry
CNS_agent_fleet
context_as_one_time_investment
AI_forward_vertical_adoption
human_accountable_commit
proactive_agent_policy
AI_generated_widget_governance
source_to_projection_invalidation
agent_high_risk_action_classifier
Keeper doctrine

OMNI CNS is the system-level neural network that prevents humans from re-explaining context, routes scarce attention, coordinates agent work, and governs what becomes action.

Second:

When agents make doing cheap, OMNI’s moat becomes context, attention routing, provenance, governance, and accountable commit.

Third:

Every generated artifact must preserve lineage to its source permissions, authority, and promotion state.

Fourth:

The future is not one AI assistant; it is a governed fleet of scoped agents under CNS control.

What not to import blindly

Do not treat “AI sees everything” as automatically acceptable in healthcare.

Do not create uncontrolled memory.

Do not let generated dashboards/widgets/bots become unregistered shadow systems.

Do not let agents escalate socially or clinically without policy.

Do not let human review become endless approve-clicking.

Do not let OpenAI’s “AGI personal/work context” vision flatten healthcare authority.

Do not assume faster prototyping equals better product.

Priority / confidence

Priority: 5/5
Confidence: 5/5
Suggested analysis depth: full_semantic

This should become part of the CNS / Neural Network / Attention Bottleneck / Agent Fleet / Knowledge Provenance spine cluster.

Short keeper:

OMNI CNS is not just workflow routing. It is context activation + agent coordination + attention routing + governed commit.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(I fill later — derived work lives in EVRUN; leave `TK`)*
- EVRUN(s): `TK` · inventory: `TK` · routing_addendum: `TK` · impact §B/§C/security/Build-OS/contract: `TK` · promotion: `TK`

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged §A (human-attention-as-scarcest-resource → HITL/authority-gating) + §B/CNS (org-of-100k-agents); pairs w/ Karpathy 084/085 + Altman 060; AI-summary in source.

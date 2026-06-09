# EVSRC-2026-000087 — Why the Brain Computes 1,000,000x More Efficiently Than A GPU: Unconventional AI's Naveen Rao

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: Naveen Rao); Knox read in §3 Review 001 (verified: "neural network banger" — physical metaphor for CNS as a dynamic system, NOT a chip mandate). Awaiting EVRUN. *(Knox rated higher-relevance than my low-moderate call — flag for EVRUN to reconcile.)*

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000087`  ·  filename: `EVSRC-2026-000087_sequoia-naveen-rao-brain-computes-more-efficiently-than-gpu.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=Zw1J5pJJMGw`
- source_title: `Why the Brain Computes 1,000,000x More Efficiently Than A GPU: Unconventional AI's Naveen Rao`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  series: `AI Ascent 2026`  ·  published_at: `2026-05-06`  ·  views_at_capture: `101,214`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `talk`  ·  source_reliability_context: `founder / practitioner (Naveen Rao — credible AI-hardware founder: Nervana→Intel, MosaicML→Databricks; now Unconventional AI)`  ·  topic_tags_light: `[compute_substrate, energy_wall, nonlinear_dynamics_chip, thermodynamic_limit_intelligence_per_watt, brains_vs_gpu, beyond_matrix_math, time_domain_computation]`  ·  note: `AI-generated summary present; physical-compute / hardware lens (adjacent to OMNI)`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Naveen Rao` · role_in_source: `speaker` · affiliation_at_publication: `Unconventional AI (founder/CEO); previously founded Nervana (→Intel) and MosaicML (→Databricks)` · speaker_type: `founder / technologist (AI hardware)` · authority_context: `high credibility on **AI compute substrate / hardware**: argues the **80-year-old digital computer is the wrong substrate for the next era of AI**; the math — humanity runs on **160 gigawatts of brainpower**, and within a few years the world won't have enough electricity to keep scaling AI on conventional hardware; proposed answer = **rebuild the computer from physics first principles** — replace matrix math with **nonlinear dynamics**, replace von-Neumann memory access with **computation in the time domain**, push toward the **thermodynamic limit of intelligence-per-watt** (GPUs ~3 orders of magnitude away). Working prototype taped out in 6 months. Deep-hardware/physics lens — far from OMNI's software/care substrate` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `—` (AI Ascent 2026 talk)  ·  event_context: `Sequoia AI Ascent 2026`  ·  perspective / conflict notes: `Unconventional AI founder — frames novel compute substrate favorably (his startup). **LOW-MODERATE OMNI relevance: physical-compute / energy-wall macro backdrop (like Crusoe 066, Jeff Dean 064) — informs §B assumptions on long-run compute cost/availability + the "energy wall" constraint on agent scale, but NOT an OMNI build primitive. Likely watch / macro-context. The "brain is a different substrate" framing is interesting analogically (OMNI's CNS ≠ raw compute) but don't over-read.** Recent (2026-05). Capture; route lightly.`

> Authority is descriptive, not worship (`GRD-039`): Naveen Rao = high credibility on AI hardware, but physical-substrate and adjacent to OMNI; forecasts (energy wall, new chip paradigm) route through evidence → interpretation → gated promotion. Candidate for watch / no-op unless compute-economics framing proves load-bearing for §B.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = Naveen Rao transcript; §3 = matching hardware/metaphor read) · [x] EVRUN needed? (yes — **relevance disagreement: Opus=low-moderate, Knox=high "CNS metaphor"; EVRUN to reconcile**) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introduction
0:02
We're going to jump into our next set of
0:04
frontier talks. The first is which from
0:07
uh Naveen Ralph. Naven is a pioneer in
0:10
the AI space. He did his PhD in
0:12
neuroscience.
0:14
Then he started one of the first ever AI
0:17
chip companies way before it was cool.
0:19
Um he's actually the person who ran
0:22
Mosaic ML, one of the first AI training
0:25
companies and then built all of Data
0:27
Bricks AI. He left that amazing role uh
0:30
to do something new and redefine the
0:33
future of computing bringing uh cool
0:35
back to neuroscience. Naveen, come on
0:36
up.
0:38
[applause]
0:44
All right, afternoon everyone. Um yeah,
0:46
super excited to be here. I'm Naveen
0:48
Ralph and CEO of Unconventional AI. So
0:51
we are unconventional because maybe it's
0:53
actually the wrong word to use because I
0:54
think we're going to have to change the
0:55
name to conventional. It's a it's
Why Startups Win Now
0:57
actually a great time to be a startup as
0:59
uh as Boris Boris alluded to like like
1:01
having no baggage actually I think is a
1:03
true competitive advantage. We can do
1:05
things so much faster than traditional
1:08
um you know sort of chip companies and
1:10
full stack companies can do and I think
1:12
that's what's very exciting. We can get
1:14
to tapes in months instead of years
1:16
things like this. So anyway, let's get
1:19
get started.
1:21
So I put that up there. I can guarantee
1:23
you some of you are like trying to prove
1:24
me wrong. All of a sudden, you're like,
1:26
"Oh my god, what's uh you know, I can
1:27
hear the I can hear the gears turning
1:29
like that that that can't be true."
Redefining ASI Efficiency
1:30
Well, let me let me explain my logic a
1:32
little bit. And uh and and maybe the
1:35
definition of what I call ASI. So
1:37
really, I think we need to get to a much
1:40
greater amount of compute efficiency.
1:42
And when I say compute efficiency, I
1:44
don't mean algorithmic comput efficiency
1:46
or data efficiency. There's lots of
1:48
people working on these problems. I
1:49
actually mean the fundamental substrate
1:52
actually how I do information processing
1:55
at the like physics level. We chose a
1:58
path of making computers work the way
2:00
they did for a lot of reasons about 80
2:02
years ago. If you think about it like in
2:04
the tech industry, how many things have
2:06
existed for 80 years? Like not a lot.
2:08
The digital abstraction sort of
2:10
floatingoint numbers those were around
2:12
from from the 1940s. and for a machine
2:14
that was built from a completely
2:16
different substrate and for a machine
2:18
that was built for a completely
2:19
different purpose. And now we're
2:20
building machines for intelligence. So
2:22
let's think through this a little bit.
2:24
So part of this is that AI will make us
2:27
more efficient. I mean we've talked
2:29
about coding and you know running a
2:31
thousand agents on your phone all this
2:33
kind of stuff right it does make us more
2:35
efficient but at some point we start to
2:36
get to a place where what what does
2:39
efficiency really mean? And if you
The Energy Wall Ahead
2:40
thought think about energy, actual
2:42
energy, maybe we're actually not more
2:44
efficient and we're kind of butdding up
2:46
against those limitations of the
2:47
physical world now. Um, you know,
2:50
already today we're we're using many
2:53
gigawatts for AI inference and training.
2:55
And we're going to get to a point within
2:57
the next couple of years. This is not 10
2:59
years away. This is 2 3 4 years where we
3:01
just don't have any more energy in the
3:03
world for AI. Then this topic starts to
3:05
become very very important. right now
3:07
you can kind of look at it like well
3:09
electrical energy versus like food these
3:12
are two energy sources for intelligence.
3:14
Um and you know there's no real
3:16
limitation on the on the electrical side
3:17
but that's going to hit a pretty solid
3:19
wall very soon. And you know we're
3:21
talking about going to space we're
3:22
talking about building fusion reactors
3:24
great let's do all those things but
3:26
still these fundamental physics apply.
Brains vs Compute Watts
3:28
So if we think through this a little bit
3:30
we have about 8 billion people in the
3:31
world our brains use about 20 watts
3:33
each. That's only 160 gawatt. So the
3:36
entirety of humanity is 160 gawatt. So
3:40
just to put that into comparison, we
3:41
have about 9,000 gawatts of capacity in
3:44
the world today. The US has about a
3:45
thousand. And you know this runs
3:47
everything. This is like heating in your
3:49
home and you know all the things,
3:50
electric cars, all that kind of stuff.
3:52
But if we said we you know maybe got 50%
3:55
more of this and we say okay great now
3:57
we got like you know 4,000 plus
4:00
gigawatts. But the problem is our
4:02
current [clears throat]
4:03
paradigm of compute is just vastly more
4:05
inefficient. So a computer I'm I'm
4:08
making some numbers up here. I mean I
4:09
could say like if I'm running inference
4:11
per token I can come up with numbers but
4:13
you know fully loaded like the amount of
4:15
energy that goes into inference building
4:16
the model running the model all of that.
4:18
Let's call it a gigawatt something like
4:20
that or you know definitely in the
4:22
megawatt range but humans are on the
4:24
order of of 20 watts. And you could also
4:26
argue that evolution over 4 billion
4:28
years has created what we are. But the
4:30
reality is today our constraint becomes
4:33
how quickly can we get uh learning to
4:35
happen? How quickly can we build
4:37
intelligence on a given amount of
4:38
energy. So, if we want to build this
4:41
future where we have lots of
4:42
intelligence in the world and we're
4:44
automating all kinds of things and we
4:46
want to really be more efficient from an
4:47
energy standpoint, we're we're going to
4:48
need a lot more we're going to need a
4:50
lot more watts or we can think about
4:52
building a vastly more power efficient
4:54
computer and that's where we come in.
4:57
So, I love this curve here and I think
4:59
um most people really haven't thought
5:01
about this because you just sort of
5:02
assume the computer is a computer and we
5:04
haven't really questioned that. Again,
5:06
this is the unconventional part is like
5:07
let's break that apart. the the the
5:10
assumptions we made 80 years ago are
5:12
actually not quite valid anymore. We
5:13
just choose to keep building on them
5:15
because I can build a product in two
5:16
years. I can make something that I can
5:18
sell in two years. But we're kind of
5:19
taking a different tactic. Let's go back
5:21
to those first principles and see if we
5:22
can build something much much better. So
Physics Limits of Compute
5:25
there is a thermodynamic limit to
5:27
intelligence for what? Okay, that means
5:29
you just can't do any better. There's
5:31
there's something called the Landau
5:32
principle which some of you may know
5:34
which basically suggests how much
5:35
compute could happen within a certain
5:37
amount of energy. So there is a physical
5:40
reality that we can't we can't get past
5:42
and that's sort of this asmtote here.
5:44
Now biology is somewhere up here. It's
5:47
actually pretty darn efficient. Um 4
5:50
billion years of evolution have created
5:51
something that is actually very
5:52
efficient. However, it's not at the
5:54
asmtote yet. There's probably an order
5:56
of two of magnitude between those two.
5:59
We're actually here by the way. We're
6:02
down here. And I think limits of 2D
6:04
lithography, that's what chips are built
6:06
on today, is call it somewhere down
6:07
here. And I think with focused effort,
6:10
we can get to the point where we're
6:11
pushing the limit of that. And so we'll
6:14
have something that's this is this, by
6:16
the way, is something like three orders
6:17
of magnitude from where we are. It is
6:19
very far away from where we where we
6:20
could be in terms of energy efficiency.
6:22
And so really, that's what we're focused
6:23
on today. So how do we do it? I mean,
Beyond Matrix Math
6:26
yeah, this is great. Make something more
6:28
power efficient and wonderful, right?
6:29
But the reality is we it's not so
6:31
simple. We can't be thinking about the
6:33
computer in exactly the same way as we
6:34
have been. It's not about a machine that
6:36
runs off of mat runs matrix math. That's
6:38
been the simple way to move forward.
6:40
Nvidia of course has owned that market
6:42
and continue to push the envelope. But
6:43
if you look at the power efficiency
6:45
numbers, actual power efficiency of
6:47
delivering an FP8 flop, for instance,
6:50
it's not that much better. Costs have
6:52
gotten better because manufacturing's
6:54
gotten better. Our ability to package
6:55
has gotten better, but actual energy per
6:58
flop with memory access has not gotten
7:00
better. It's very very incremental now.
7:04
So I am a a neuroscientist. I was a
7:07
computer architect for 10 years before
7:09
that. So I've been thinking about this
7:10
problem for a long time actually on the
7:12
order of 30 years. So it's a very
7:13
exciting time for me personally. And you
7:16
know biology really does provide an
7:18
existence proof. I mean, you can argue
7:19
that, okay, the tokens per second out of
7:21
a human are lower than a machine, but
7:23
the intelligence is higher. We still
7:25
haven't gotten to the point with these
7:26
gigawatts that we're throwing at it that
7:28
we're we're rivaling a human's
7:30
intelligence in terms of discovery.
7:31
We'll get there. We're going to get
7:32
there in a very short amount of time,
7:34
but it's going to come at the cost of a
7:35
lot of energy. So, what I think is most
7:38
interesting here is actually not just um
7:40
that brains are human brains are 20
7:42
watts, but that the wattage kind of
7:44
scales with the uh with the weight. A
7:46
macac monkeyy's brain is probably less
7:48
than a watt. And actually, you see this
7:50
all through the mamillian world and also
7:52
the insect world. Like you have very
7:54
complex behavior for millows. Just for
7:56
reference, your phone in your pocket is
7:58
about one watt. So, you know, a squirrel
8:01
jumping from branch to branch is running
8:03
on less than 10 mill. That's 1/100th of
8:06
your phone. We can't actually do this
8:09
perfectly. Like, you know, squirrels
8:11
jumping 10 feet across from branch to
8:12
branch within wind and all that stuff.
8:14
can't do that with a much much larger
8:16
computer. So biology still created
8:18
something quite amazing and and I just I
8:21
just don't feel like there's been an
8:22
appreciation for that. So I'm just you
8:23
know just just just a little reminder
8:25
there. So now great we see this kind of
8:30
phenomenologically like uh um biology is
8:33
efficient can do can do amazing things
8:34
but how does it actually work? We don't
8:36
really know. I will be honest as a
8:38
computer scientist and a uh
8:40
neuroscientist. But there are some ideas
8:42
that we can harvest from neuroscience.
8:44
And one of them is that the brain is
8:46
dynamic. It does not use matrix math to
8:49
do compute. It uses what's called
8:50
nonlinear dynamics to do compute. What
8:53
this means is that there's a time
8:54
varying interaction between neurons and
8:57
that's actually where the compute lies.
8:59
So can we extract that and actually
9:01
apply it to to synthetic circuits?
9:03
Maybe. They don't do floatingoint math.
9:05
They don't do matrix math. They do
9:07
something that can be characterized as
9:09
such, but it's actually much richer than
9:11
that because of these nonlinear dynamics
9:13
and they're stochastic. Brains compute
9:16
is not a strict one and zero. In a
9:18
digital computer, if we're off by a one
9:20
or a zero, the whole system falls apart.
9:24
So really not computers. So I'm going to
9:26
try to go through this quickly. This is
Nonlinear Dynamics Chip
9:28
a thing called a currooto
9:30
synchronization. So if you look at a
9:32
bunch of oscillators here and they're
9:33
kind of rigidly coupled to each other on
9:36
this plank, you know, you'll see over
9:37
time that they start off in any state
9:40
and then they actually synchronize. This
9:43
is an example of a of a of a contracting
9:46
or or or converging dynamical system. So
9:49
no matter how you start it, it converges
9:51
and it's only based on the coupling
9:52
between them. Well, you can generalize
9:54
this to something that has kind of a
9:55
flexible coupling. call it a trainable
9:57
coupling between those those things and
9:59
then it can have all kinds of
10:00
interesting dynamics. It can move
10:02
through this state space of dynamics in
10:03
many many different ways. So if you
10:05
generalize this you can actually think
10:07
about an electron as an electronic
10:08
circuit. You can see I have a bunch of
10:10
oscillators and they have a fabric on
10:11
which they're coupled. And now when I
10:13
when I make this fabric trainable I can
10:15
actually see something that um that
10:17
starts to look a little bit more like
10:18
the dynamics of the brain. It actually
10:20
has nonlinearities and they interact
10:22
with each other in very interesting
10:23
ways. It's actually very rich and can
10:25
represent a lot of information.
10:27
This is actual uh chip that we're going
10:30
to be building this summer. So, we went
10:31
from basically no team in January to a
10:34
to a full prototype in six months. And
10:36
that's because of AI. So, this is what's
10:39
really cool about not having baggage is
10:40
you can do things in completely
10:41
different ways. And the way you compute
10:44
with something like this, the
10:45
traditional way would be you basically
10:46
loop over some sort of linearized time.
10:49
This is how we do things in a in a
10:51
vonoyman machine. We write state out, we
10:53
retrieve it, we operate on it, we write
10:55
it back. So we keep going back and
10:56
forth. Turns out that's what burns most
10:58
of the energy in an existing computing
10:59
system. With something with nonlinear
11:02
dynamics, I actually just say here's the
11:04
initial state, kick it and let it run.
11:06
So that the the physics themselves
11:08
basically do this computation and it
11:10
does a sort of the the state is an
11:12
implicit. It's not an explicit rights.
11:16
So in some ways you can think about if
11:17
you take anything from this talk that we
11:19
use the time the time access of the
11:22
physics to do computing and existing
11:24
computing constructs do not.
11:27
And so the question then is can I train
11:28
this and the answer is yes. Um I can
11:30
actually steer the system into multiple
11:32
multiple different things. In fact we've
11:33
sort of traced out in state space a
11:35
unconventional logo. That's the idea
11:37
here. We can train it in a few different
11:38
ways. So yes we can train these systems
11:40
and steer them into basically any
11:41
arbitrary set of trajectories. And can
11:44
we compute uh can we connect it to AI
11:47
problems like uh image generation. So
Demo and New Paradigm
11:49
actually I have a better version of this
11:51
I can go to in a just a really quick
11:52
demo here. Uh let's go to the next one.
11:56
You put the demo up.
11:59
Yeah. So basically what you see here is
12:02
uh something that's running on a on a
12:04
model of dynamics that was trained on
12:06
these different images. So basically I
12:08
can say okay I have to use cats. I think
12:10
Andrewing is here. So [laughter]
12:13
homage to him, but we can do anything.
12:14
But basically, this is a pretty simple
12:16
generative model. And I can basically
12:18
say like, okay, at times t equals 1, I'm
12:20
going to I'm going to backrop an error
12:23
um from randomness to to a particular
12:25
image class. And after that point, we
12:27
let the we let the system just run
12:29
naturally. And what you'll find is that
12:31
it actually has clumped its
12:33
representation into places that are
12:35
meaningful. They're no longer just
12:37
random pixels, but they're actually
12:39
pixel pixels that make different kind of
12:40
machines or different kind of animals or
12:42
whatever. So for horses, I start off as
12:44
random and at t equals one, you should
12:46
see it kind of converge into horselike
12:48
things and then over time you'll
12:50
actually see it sort of morph between
12:52
those. So it's already learned in the
12:55
state space that it can move between
12:56
these different things.
12:58
So let's go ahead and move out of this.
13:02
So this is really the emergence of
13:03
something new. So CPUs actually do um
13:06
very fast singlethreaded things the best
13:08
even today. Uh it's faster than a GPU
13:11
and really what you're doing is this
13:13
kind of vonoman machine where you're
13:14
moving in and out of uh memory and cache
13:16
and doing operations. GPU basically did
13:19
this with multiple operands at once. So
13:21
we move a bunch of operands from memory
13:22
do some stuff to it write it back.
13:25
Compute in memory like grock sort of did
13:27
the same thing but just did it on chip.
13:28
It's kind of a a more fine grain version
13:30
of this. And what we're talking about is
13:32
doing something in a dynamical system.
13:34
The state and the the function are
13:36
overlapped with the physics themselves.
13:38
So you now have no separation between
13:41
state and computation.
13:43
And you know computer efficiency goes
13:45
goes up of course galaxy brainness goes
13:47
up and uh this is truly nonvoyman.
13:52
So with that I'm just going to leave you
13:54
with this quote. It's been something
13:55
I've guided my entire life by and I'm
13:57
I'm really excited about this time
13:58
because I've been thinking about this
13:59
problem for 30 years and we're at this
14:01
point where I think we can actually
14:02
start to understand how brains work
14:04
because now we can build them. Thank
14:06
you.
14:07
[applause]

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `Why the Brain Computes 1,000,000x More Efficiently Than A GPU: Unconventional AI's Naveen Rao`  ·  visible_channel: `Sequoia Capital` (211K subs)
- visible_url: `youtube.com/watch?v=Zw1J5pJJMGw`  ·  visible_published: `May 6, 2026`  ·  visible_views: `101,214`  ·  likes: `853`
- visible_description: *"Naveen Rao, founder and CEO of Unconventional AI, argues at AI Ascent 2026 that the 80-year-old digital computer is the wrong substrate for the next era of AI. He walks through the math: the entire human race runs on 160 gigawatts of brainpower, and within a few years the world simply won't have enough electricity to keep scaling AI on conventional hardware. His proposed answer is to rebuild the computer from physics first principles — replacing matrix math with nonlinear dynamics, replacing von Neumann memory access with computation that lives in the time domain, and pushing toward the thermodynamic limit of intelligence per watt, which today's GPUs sit roughly three orders of magnitude away from. Plus a working prototype of the resulting chip, taped out in six months from a standing start because, as Naveen puts it, AI itself made it possible."*
- ai_generated_summary (visible): *"Modern AI development faces a critical energy wall as traditional computing architectures reach their physical limits. This talk explores a radical shift back to first principles, examining how unconventional hardware inspired by biological systems and nonlinear dynamics could redefine the future of machine intelligence and compute efficiency."* (quality/accuracy may vary)
- chapters (visible): 0:00 Introduction · 0:56 Why Startups Win Now · 1:30 Redefining ASI Efficiency · 2:40 The Energy Wall Ahead · 3:28 Brains vs Compute Watts · 5:25 Physics Limits of Compute · 6:24 Beyond Matrix Math · 9:28 Nonlinear Dynamics Chip · 11:49 Demo and New Paradigm
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_3.26.47_AM-17666b97…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

Yep. Process this one. This is probably the actual “neural network banger.”

Not because OMNI should build chips. It should not.

Because this video gives the missing physical metaphor for what you were trying to say:

A real neural network is not just a router. It is a dynamic system where state, memory, signal, timing, and computation are intertwined.

That is the pressure on OMNI CNS.

Classification

Priority: 5/5
Depth: full_semantic
Authority context: frontier hardware / neuroscience-informed AI infrastructure
Primary lane: OMNI CNS neural-network doctrine / §B AI substrate
Secondary lanes: Build OS, agent runtime, context activation, energy/compute horizon, future physical substrate
Promotion posture: spine_candidate

This is not app-building 101. This is foundational metaphor / substrate architecture.

Core takeaway

Naveen Rao’s central claim is:

Digital computers are the wrong substrate for the next era of AI because they separate memory, state, and computation; brains compute through nonlinear dynamics where state and computation are entangled over time.

He argues that today’s compute path is energy-limited, that the brain is an existence proof of far more efficient intelligence, and that biology does not compute through floating-point matrix math but through dynamic, stochastic, time-varying interactions between neurons.

That is the OMNI CNS bomb.

Why this matters for OMNI CNS

This video says a “neural network” is not merely:

input → classifier → route → output.

It is more like:

signal enters → system state shifts → connected nodes activate → dynamics unfold over time → patterns converge → output emerges.

That is much closer to what OMNI CNS should become.

A patient message, source insight, lab result, provider correction, or workflow failure should not just trigger a fixed workflow. It should activate a living context network:

patient identity,
clinical memory,
observations,
documents,
appointments,
entitlement,
messages,
prior provider decisions,
current care obligations,
relevant protocols,
outside evidence,
policy gates,
agents,
human attention.

That is not “routing.” That is activation dynamics.

The sharper OMNI definition

This video makes me more comfortable saying the thing plainly:

OMNI CNS is OMNI’s neural network.

But with one precision:

It is not one trained neural-network model. It is the system-level neural network of OMNI: a live, dynamic coordination system where signals activate context, agents, memories, policies, and actions across the care/business substrate.

That is the right framing.

Not “symbolic.” Not some weird academic term. Just:

CNS = OMNI’s neural network over the substrate.

The key correction to current OMNI CNS

Current OMNI CNS doctrine may still be too shaped like:

event → candidate → resolver → action → domain commit.

That is safe, but maybe too linear.

This video suggests CNS needs another concept:

CNS activation state.

Meaning: when something happens, OMNI does not just pick a workflow. It creates a temporary, dynamic activation pattern across relevant context.

Example:

A patient says, “I feel weird after my injection.”

Old workflow-ish version:

classify message → route to provider.

CNS neural-network version:

activate patient identity, treatment history, procedure date, medication list, photos, prior anxiety pattern, consent, aftercare protocol, provider availability, risk policy, message tone, spouse/caregiver context, prior complications, entitlement, and escalation rules → then decide whether this is no-op, clarification, routine reassurance draft, provider review, urgent escalation, or emergency instruction.

That is a neural-network-like CNS.

“State and computation are overlapped” is the big idea

Rao says their proposed nonlinear dynamics chip has no clean separation between state and computation; the physics itself performs the computation over time.

OMNI translation:

CNS state should not be passive storage. CNS state should participate in reasoning.

Patient state, workflow state, source state, doctrine state, agent state, and prior decisions should not just sit in databases waiting to be queried. They should shape what activates next.

That means OMNI needs:

durable domain truth,
plus live CNS activation state,
plus agent working memory,
plus context packets,
plus feedback loops.

This is the missing layer between “database” and “AI output.”

“Kick it and let it run” maps to agent loops

Rao describes nonlinear systems where you set an initial state, “kick it,” and let the dynamics unfold rather than manually stepping through every memory read/write cycle.

OMNI equivalent:

Instead of humans micromanaging every step:

“Check the intake, now check the lab, now check the entitlement, now draft the note…”

CNS should be able to launch bounded agent loops:

Here is the goal, context, authority boundary, tools, verifier, and stop condition. Run until convergence, escalation, contradiction, or confidence threshold.

That is exactly Build OS / CNS maturation.

But the guardrail remains:

Letting the dynamics run does not mean letting them commit truth.

What OMNI is probably missing

This source suggests OMNI needs to explicitly define these CNS concepts:

1. CNS_activation_state

The temporary pattern of what is currently “lit up” across patient/context     then knox got cut off fyi .... here knox gives another interpretation of it .... This is the neural-network banger. Process full semantic. Spine source.

This is much more literal than the Karpathy/Greg Brockman version. Karpathy was saying “neural networks are becoming a new software substrate.” Greg was saying “context/memory/agents change work.” Naveen Rao is saying: the brain itself is not doing matrix math; intelligence may require a different compute substrate where state, time, dynamics, and computation are fused.

For OMNI CNS, this is a major flag.

Core takeaway

The strongest idea:

Brains do not compute by moving data back and forth through memory and matrix operations. They compute through nonlinear, time-varying dynamics where state and computation are entangled.

That is the line that matters for OMNI.

He says current AI compute is built on an 80-year-old digital abstraction, floating point, memory access, matrix math, and von Neumann-style read/write loops. His argument is that intelligence might need a new substrate: nonlinear dynamics, trainable coupling, implicit state, and time-domain computation.

OMNI CNS translation

This is the clearest pressure yet that OMNI CNS should not be modeled like a normal software router.

A router does this:

event comes in → classify → call service → write output.

A brain-like CNS does this:

signal comes in → context activates → prior state matters → multiple domains resonate → irrelevant paths suppress → the system converges toward interpretation/action → output emerges as a candidate.

That is a different mental model.

What OMNI may be missing

The current OMNI CNS framing has been strong on:

source event,
candidate,
resolver,
orchestration action,
domain commit,
audit,
deterministic authority.

That is still correct.

But this video says the middle may be under-described.

The missing layer is not a new brand name. It is the dynamic CNS behavior:

CNS should have activation, context resonance, recurrent state, convergence, suppression, and feedback — not just routing.

So yes: if we say OMNI CNS is OMNI’s neural network, then this video gives us the actual meaning.

“State and computation are not separated” is huge

Naveen’s most important architecture idea is:

in existing computers, state is written out, retrieved, operated on, then written back; in nonlinear dynamic systems, the state and function overlap inside the physics.

OMNI translation:

Old software architecture separates:

database state,
workflow engine,
AI call,
dashboard,
task queue.

But OMNI CNS may need a more integrated live operating state:

patient state,
workflow state,
attention state,
agent state,
care obligation state,
risk state,
doctrine/build state,
evidence state,
human review state.

Not all as one sloppy memory blob. But CNS should behave as if these are coupled, not isolated tables waiting to be queried manually.

Keeper:

OMNI CNS should not merely retrieve context. It should maintain a live context field.

“Kick it and let it run” maps to CNS loops

Naveen describes giving the system an initial state, kicking it, then letting the dynamics run until meaningful structure emerges.

OMNI version:

A source event “kicks” CNS:

patient says something odd,
lab arrives,
payment fails,
provider edits,
transcript is ingested,
build test fails,
source doctrine conflicts,
security signal fires.

Then CNS should run a bounded loop:

activate context → retrieve relevant memory → route to agents → compare against policy → generate candidate → critique → converge → escalate / no-op / propose.

That is much more neural-network-like than linear task routing.

This also explains why human CNS analogy felt right

Your instinct was not random.

OMNI CNS is not just called CNS because it sounds cool. It should behave like a nervous system:

senses,
activates,
remembers,
suppresses noise,
routes attention,
coordinates action,
learns from feedback,
produces reflexes,
escalates danger,
integrates multiple inputs.

This video makes that more literal.

The sharper definition:

OMNI CNS is the live neural coordination layer across OMNI’s substrate.

Not one model. Not one table. Not just an orchestrator.

A live, coupled, agentic context network.

The danger: don’t import the hardware claim as doctrine

We should not make OMNI dependent on Unconventional AI being right about chips.

His claims about energy, thermodynamics, nonlinear dynamics hardware, and timeline are interesting but should stay external evidence, not doctrine, unless independently supported later.

But the conceptual import is strong:

Intelligence may not scale through stateless calls and linear workflows. It may require dynamic stateful systems.

That maps directly.

Where this lands

OMNI CNS: massive. This is now part of the CNS neural-network spine.

Neural network doctrine: massive. Defines what “CNS as neural network” should mean.

Build OS: major. Build agents should not be isolated one-shot scripts; they should operate in recurrent feedback loops.

Knowledge Reservoirs: major. Source ingestion should activate downstream doctrine/build/security/product contexts, not just store transcripts.

§B AI substrate: massive. Physical compute substrate, energy wall, matrix math vs dynamics.

§C: medium-to-major. Future physical/dynamic compute and actor surfaces matter, but not immediate wedge.

Doctrine / primitive pressure

Potential concepts:

CNS_activation
context_field
dynamic_CNS_state
context_resonance
recurrent_orchestration_loop
signal_kick
convergence_candidate
suppression_pathway
attention_field
state_compute_overlap
live_context_graph
CNS_dynamics
nonlinear_context_loop
neural_network_CNS_doctrine
Keeper doctrine

OMNI CNS is OMNI’s neural network: a live, stateful, context-activating coordination system across the substrate, not merely an event router.

Second:

A signal should perturb CNS, activate relevant context, run bounded agentic loops, and converge toward candidate action — before deterministic policy/domain commit.

Third:

Domains store truth; CNS maintains dynamic context and attention.

Fourth:

The more OMNI behaves like disconnected services, the less CNS-like it is. The more it behaves like coupled live context with governed action, the closer it gets.

What not to import blindly

Do not pivot OMNI into hardware.

Do not assume brain-inspired compute timelines.

Do not make CNS a mystical black box.

Do not let “dynamic state” become untraceable memory.

Do not let neural convergence equal truth.

Do not collapse domain truth into CNS vibes.

My hard read

This is the source that resolves the naming fight.

Keep OMNI CNS.
But upgrade the definition.

Final line:

OMNI CNS is not named after a neural network by accident. It should become OMNI’s governed neural network: signal in, context activates, agents work, attention routes, candidates converge, policy constrains, domains commit.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

at anyone reading this.. this feels like the banger yea.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus deep-read extraction  ·  layer: `analysis_nonbinding`  ·  EVRUN-2026-000001 (★SPINE — CNS dynamic-neural origin; pairs 085/088/059/086/064/066)
- reviewer: `Opus` · type: `AI assistant` · at: `2026-06-09` · purpose: `formalize Review 001 → structured extraction → registry` · binds nothing (`GRD-036`/`GRD-044`) · [full agent extraction 6b93050b]

**18 clusters. Naveen Rao/Sequoia — "the neural network banger." TIER SPLIT: CNS-substrate metaphor = spine; energy/physics/hardware = low-authority-watch. 087 = PRIMARY anchor for CNS-as-live-dynamic-system / activation-over-substrate (pairs 088 cl.11, 085 cl.24). Keeper: OMNI CNS is OMNI's governed neural network — signal perturbs a live activation field, bounded loops converge toward candidates, policy constrains, domains commit; NOT a chip mandate, NOT mystical convergence-as-truth.**
1. **`neural_network_CNS_doctrine`** — KEEP name OMNI CNS; CNS = system-level neural network over substrate (not one model, not "symbolic" rebrand): live agent+context coordination mesh; resolves 085/operator naming confusion. §7.6/§12(CNS rewrite center)/CNS-contract(primary)/§B/Build-OS/capability-topology/KR/§8/future-watch(085 cl.24). "biology really does provide an existence proof" 7:16. ABSENT→spine.
2. **`CNS_activation_state`** — on signal, CNS creates temporary activation pattern across relevant context (identity/CM/obs/docs/scheduling/entitlement/messages/decisions/protocols/evidence/policy/agents/attention), not classify→route→one-workflow. CNS-contract/§7.6/§12/§8/Build-OS/capability-topology/KR/inference-budget. "time varying interaction between neurons" 8:53. ABSENT→spine.
3. **`beyond_event_router`** — inherited event→route→commit may be as mismatched as von-Neumann matmul to intelligence; CNS middle needs dynamic behavior (activation/resonance/recurrence/suppression/convergence), deterministic authority at edges. CNS-contract/§7.6/§12/§B/Build-OS(077 grammar admit recurrence)/Agent-Work-Protocol. "assumptions we made 80 years ago" 5:06. ABSENT→spine.
4. **`state_compute_overlap` / `live_context_field`** — patient/workflow/doctrine/agent/evidence/attention state shapes what activates next; live context field coupled across domains, not isolated tables; split durable-domain-truth vs live-CNS-activation-state. CNS-contract/§7.6/§12/KR/§8/Build-OS/capability-topology/§7.7. "no separation between state and computation" 13:38. ABSENT→spine (pairs 059: 087=physics metaphor, 059=engineering job).
5. **`signal_kick` + `recurrent_orchestration_loop`** — event kicks CNS w/ goal+context+authority+tools+verifier+stop; bounded recurrent loop (activate→retrieve→agent-work→policy-compare→critique→converge→escalate/no-op/propose), not micromanagement; dynamics run ≠ truth commit. Build-OS(primary)/CNS-contract/§8/Agent-Work-Protocol/capability-topology/inference-budget. "initial state, kick it and let it run" 11:04. PARTIAL→spine.
6. **`convergence_candidate` + `dynamical_convergence`** — run until interpretation/action converges to candidate (domains resonate, irrelevant suppressed), then deterministic policy + human/domain gates commit; convergence ≠ truth. CNS-contract/§8/§A/Build-OS/security. "no matter how you start it, it converges" 9:49. ABSENT→spine.
7. **`context_resonance` + `suppression_pathway`** — related nodes co-activate (resonance); irrelevant suppress; graded stochastic-tolerant routing not brittle binary; pairs 086 attention-routing as human-attention slice. CNS-contract/§7.6/§8/security/capability-topology/inference-budget. "clumped its representation into… meaningful" 12:31. ABSENT→spine.
8. **`time_domain_CNS`** — CNS time-aware; context coupling evolves (procedure→symptom latency, lab windows, obligation decay, loop recurrence); compute in temporal dynamics not stateless calls. CNS-contract/§8/Clinical-Memory-Observation/Build-OS/§7.6. "time varying interaction… where the compute lies" 8:53. PARTIAL→spine.
9. **`memory_shuttling_cost` → `projection_packet` discipline** — von-Neumann read/write burns energy → analog: repeated cross-domain fetches burn latency/cost; CNS assembles pre-coupled authority-labeled packets (059/086) not N+1 hops. CNS-contract/§7.7/Build-OS/capability-topology/inference-budget. "going back and forth… burns most of the energy" 10:56. PARTIAL→vocabulary (CNS-contract sharpening, not new primitive).
10. **`domains_commit_CNS_activates` (GRD-029 guardrail)** — domains store truth; CNS maintains dynamic context+attention; agents propose/retrieve/draft, humans/domains commit; dynamics must not collapse audit/lineage/authority. §A/CNS-contract/all-domain-contracts/Build-OS/security/Agent-Work-Protocol. (foil) "off by a one or a zero… falls apart" 9:18. AFFIRM→spine (keeper #3).
11. **`trainable_coupling`** — coupling between patient/evidence/doctrine/build nodes is trainable (feedback/promotion-gates/eval adjust co-activation); Evidence Plane ingestion activates downstream homes not only stores. CNS-contract/KR/Build-OS/§8/future-watch. "trainable coupling between those things" 9:55. ABSENT→spine.
12. **`CNS_sense_activate_coordinate` upgrade stack** — integrate 087(activation dynamics)+088(info-processing+learned-simulators)+085(neural-host/Software-3.0): CNS senses→activates→coordinates (eventually simulates as decision-support); 087 = activation physics not sim host. §7.6/§12/§B/CNS-contract/Build-OS/KR/§10/future-watch. "nonlinear dynamics… time varying" 8:44. ABSENT→spine.
13. **`inference_budget_policy` AFFIRM** — intelligence formation energy-bound; ambient agents/deep-inference/long-loops carry real cost; CNS routes compute by stakes/uncertainty (default cheap, escalate on risk), cap loops, meter tokens; same wall as 064/066. §B(primary)/CNS-contract(`risk_weighted_compute_route`)/Build-OS/capability-topology/security(denial-of-wallet)/future-watch. "2 3 4 years… don't have any more energy" 2:40. PARTIAL→vocabulary→watch (append to inference-budget cluster, no duplicate primitive).
14. **`near_term_energy_wall` + `humanity_brainpower_budget`** — ~160GW all human brains vs ~9000GW grid vs AI gigawatt-scale; orders-of-magnitude efficiency gap frames §B posture not near-term schema. §B/§10(50yr-aware)/future-watch/inference-budget(corroboration). "160 gigawatt" 3:28. PARTIAL→low-authority-watch→watch.
15. **`agent_scale_efficiency_paradox`** — thousand agents on phone worsens total joules even if per-task efficiency rises; pressure on Build-OS fan-out caps/bounded-loops/fleet-governance (086/062). Build-OS/§B/CNS-contract(loop caps)/inference-budget. "thousand agents on your phone" 2:31. PARTIAL→vocabulary→watch.
16. **`thermodynamic_limit` + `biology_efficiency_orders`** — Landauer ceiling; biology ~10²× above floor, GPU ~10³× below bio; comparator/foil for infinite-agent planning, no near-term routing. §B/§10/future-watch. "thermodynamic limit to intelligence" 5:25. ABSENT-as-doctrine→low-authority-watch→watch (no promote).
17. **`nonlinear_dynamics_chip` + `time_domain_hardware`** — Rao's chip (oscillators/implicit-state/non-von-Neumann) = external hardware-futures evidence; OMNI does NOT build chips/depend on Unconventional-AI timelines/model CNS on FP8-matmul. future-watch/§3.5(Lens-B biology-inspired compute) — NO CNS-contract routing. "truly nonvoyman" 13:47. no-op→reject (doctrine); watch (external evidence row).
18. **`milliwatt_reflex_path`** — rich sensorimotor at milliwatts → OMNI needs graded depth: reflex/no-op for low-stakes, full activation+loop only when stakes warrant; scope CNS depth by Operator/Patient/Meta scale (capability-topology). Build-OS/CNS-contract/capability-topology/inference-budget. "squirrel… less than 10 mill" 8:03. PARTIAL→vocabulary→watch.

**REJECTS (guardrails):** pivot OMNI to hardware/nonlinear-chips; assume Rao energy-wall timeline as build schedule; CNS as mystical black box where convergence=truth; collapse domain truth into activation vibes; untraceable dynamic memory; "build brains in silicon" as product thesis; lithography/fusion/space bets. **Net-new:** BIND (registry origin — 087=PRIMARY): `CNS_activation_state`/`live_context_field`/`state_compute_overlap`(dynamic-CNS pillar; pairs 059 job + 086 attention), `signal_kick`/`recurrent_orchestration_loop`/`convergence_candidate`(one CNS loop host; corroborate 058/084/071), `context_resonance`/`suppression_pathway`(bind 086+059), `neural_network_CNS_doctrine`(named keeper, merges 085 cl.24 WATCH into 087 spine — 085=Software-3.0/neural-host vocab, 087=dynamic-activation physics), `trainable_coupling`, `time_domain_CNS`. `inference_budget_policy`→NO new primitive, append 087 anchors to 064/066/073 cluster. EXISTS-AS sharpen: `context_field`/`context_assembly`→059; `beyond_event_router`→CNS-contract prose; `memory_shuttling_cost`→059/086 packet discipline; `domains_commit_CNS_activates`→authority spine (AFFIRM); `CNS_sense_activate_coordinate`→merge 088 cl.11. REJECT/no-op primitives: `nonlinear_dynamics_chip`/`kuramoto_chip`/`landauer_doctrine`/`build_brains_in_silicon`/`symbolic_*`(operator rejected 085). **Registry action: elevate Batch-2 row "CNS as live dynamic system" to ★SPINE w/ 087 primary anchor (over 085 WATCH); reconcile Opus-low-moderate vs Knox-5/5 as tier split (spine cl.1-12; watch cl.13-16; reject cl.17).** **Reread (MANDATORY before CNS-contract/§7.6/§12 rewrite):** CNS-as-neural-network doctrine host (7:16–8:57, 10:02–13:41 + Knox injection example + Nick "banger" — pair 085 cl.24 + 088 cl.11 + 059 in ONE contract pass; define what neural may produce=candidates/projections vs never=commits); state_compute_overlap + durable-vs-live split (10:51–11:22, 13:32–13:41 — name CNS_activation_state vs domain truth tables, GRD-029 bounded, audit lineage on convergence); signal_kick→convergence loop semantics (9:43–9:51, 11:04, 12:27–12:56 — Build-OS stop conditions, convergence≠commit); context_resonance/suppression (12:31, 9:13 — merge 086 attention + interrupt tiers, one attention-economics subsection); trainable_coupling × Evidence Plane (9:55–11:40 — KR ingestion activates downstream; FWREG-007). §B/inference-budget APPEND ONLY: energy-wall anchors (2:40–4:33, 3:28 — §B macro paragraph, pair 064/066, reject chip timeline). REJECT-pass: hardware/demo (9:28–10:36, 13:02–13:47 → §3.5 only); thermodynamics (5:25–6:22 → future-watch foil). Cross-source: 085+087+088+059 single CNS narrative (avoid 4 parallel rewrites); 086+087 (attention-routing human-scarce vs activation-routing context-scarce — complementary).

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000001` (ai-corpus synthesis + routing) · per-source extraction: **§3 Review 003** (this file) · concept_registry: `analysis/EVRUN-2026-000001_ai-corpus-synthesis-and-routing/EVRUN-2026-000001_ai-corpus_concept_registry_and_routing_map.md` · anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · promotion: gated (`GRD-036`/`GRD-044`) — clusters route to thesis-v4 + CNS/Build-OS/security/capability-topology contracts via registry; no direct binding from this file.

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged low-moderate (hardware/energy-wall macro backdrop for §B; likely watch — pairs w/ Crusoe 066, Jeff Dean 064); AI-summary in source.

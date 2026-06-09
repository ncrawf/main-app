# EVSRC-2026-000049 — Waymo's Dmitri Dolgov: 20 Million Rides and the Road to Full Autonomy

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox read captured; metadata normalized; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> §0 + §0.1 filled from your screenshot. Transcript (§1) + Knox read (Review 001) captured.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-06)*
- evsrc_id: `EVSRC-2026-000049`  ·  filename: `EVSRC-2026-000049_waymo-dolgov-20m-rides-autonomy.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=l_0Kuf6Aa2c`
- source_title: `Waymo's Dmitri Dolgov: 20 Million Rides and the Road to Full Autonomy`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  published_at: `2026-05-01`  ·  views_at_capture: `50,545`
- captured_at: `2026-06-06`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `interview`  ·  source_reliability_context: `practitioner / founder-operator (AV/AI frontier)`  ·  topic_tags_light: `[world_models, autonomy, foundation_models, safety_scaling, agentic_AI]`

## §0.1 — People / authorship / authority context  *(filled from screenshot description)*
- primary speaker(s):
  - name: `Dmitri Dolgov` · role_in_source: `interviewee` · affiliation_at_publication: `Waymo (co-CEO)` · speaker_type: `founder / operator (autonomy + AI)` · authority_context: `primary-source operator at the AV/world-model frontier; high practitioner authority on autonomy / foundation-models / safety-scaling; not clinical, not a general technical standard` · identity_confidence: `high_from_screenshot`
  - name: `Konstantine Buhler` · role_in_source: `interviewer / host` · affiliation_at_publication: `Sequoia Capital (partner)` · speaker_type: `investor` · authority_context: `framing / market lens` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `Konstantine Buhler`  ·  event_context: `Sequoia AI Ascent 2026`  ·  perspective / conflict notes: `Waymo co-CEO — frames Waymo favorably (world model powering driver+simulator+critic; "13x safer than human"); operator claims captured, routed via evidence, not taken as benchmark truth.`

> Authority is descriptive, not worship (`GRD-039`): a Waymo co-CEO = high relevance on autonomy/world-models; claims still route through evidence → interpretation → gated promotion.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] Knox take labeled `captured_interpretation_nonbinding` · [x] EVRUN needed? `yes` · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️


Search in video
Introduction
0:02
We have an unbelievable treat next. Um,
0:06
a founder who's touching a ton of lives
0:08
and um, who's been at it for a very long
0:11
time. How many people here have been in
0:13
a Whimo?
0:16
Okay, [laughter]
0:16
that's a relief. The chef eats his own
0:19
food.
0:20
I do. I do a lot of it.
0:21
All right. And how many people love the
0:23
Whimo experience?
0:26
Rock on. I'm a daily active now. It's
0:28
incredible. Excellent. Thank you.
0:30
Um, we have here the creator, uh, a a
0:34
man who has been at this mission for,
0:38
get this, founders who've been in AI
0:39
since 2022, almost 20 years, building in
0:44
the autonomous vehicle challenge. And he
0:47
has not only been at this, he's been at
0:49
it in the great times, at the tough
0:51
times. He's been persistent. And he has
0:54
created something that is unlike
0:56
anything else on Earth. Truly
0:57
exceptional. Please join me in welcoming
0:59
Dmitri Dolgo. [applause]
1:04
Thanks. Great to be here.
1:05
All right, Dmitri. So, we've got about
1:07
25 minutes together. Uh the goal is to
1:09
understand a little bit about you. What
1:11
makes you tick? What has made you
1:13
persist since the early days of the
1:15
DARPA challenge 21 years ago all the way
1:17
through Whimo uh early days to today and
1:20
the future. Um let's start on you and
1:22
then we'll get into technology very
1:24
quickly. Sound good?
Dmitri Origins and Education
1:25
Sounds good.
1:26
Okay. So, Dimmitri, you are known by
1:29
your team as technically brilliant,
1:32
incredibly intense, but also very kind
1:34
and humble. Um, you were born in the
1:37
Soviet Union, raised in the States, and
1:39
then chose to go back to one of the most
1:41
prestigious, intense physics programs on
1:44
the planet in Moscow. How did those
1:46
first few years of your life shape you,
1:48
and how did it shape your character?
1:50
So, my parents went to the same school.
1:52
So that to a large degree drove my
1:55
decision to go back and went to high
1:56
school. Actually traveled around quite a
1:58
bit. I spent a year in Japan, then went
2:00
to uh high school in the states and came
2:02
back to college to do math and physics
2:04
in in Russia. Uh so that was the same
2:07
school that my parents went to and I
2:08
kind of really grew up uh uh hearing
2:11
stories about what it is like to be at
2:13
that place. I really wanted to go back
2:14
and I think you know in terms of how it
2:16
shaped me I think it really set the
2:17
foundation uh you know technical
2:19
foundation and the you know in those
2:23
early days in college one of the most
2:24
important thing is you acquiring the
2:28
ability to learn and independently
2:29
explore. So I think that really helped
2:31
me uh in my future career.
2:33
Now you did this very intense program at
2:36
Moscow Institute of Physics and
2:38
Technology and then you decided to keep
2:40
going on the AI path. you earned your
2:42
PhD also in AI and then you pretty
DARPA Challenge Spark
2:46
quickly were attracted to autonomous
2:47
vehicles in in '05 you were a part of
2:50
the DARPA challenge. Can you tell us
2:51
about those early days? What drew you to
2:53
autonomy?
2:55
That was kind of a light switch uh
2:57
moment for me. Right. I you know in the
3:00
early days when I went to college and
3:01
then in grad school it was more about
3:05
just the learning of the fundamentals
3:07
and I didn't have a at all a clear
3:12
picture an idea of what I wanted to do
3:14
after right and then I think the timing
3:17
just was just incredibly lucky that this
3:20
was uh when I was finishing up grad
3:22
school the urban challenges uh the grand
3:24
challenge and then the urban challenge
3:25
the one that I took place in uh were
3:27
happening and It clicked. It was just uh
3:30
the the the technology is incredibly
3:33
interesting. The mission is so powerful
3:37
that nothing else come close and it's a
3:39
real product there. You can be hands-on
3:41
and experience it yourself. So, it
3:43
really checked all the boxes for me. And
3:45
as you said, that's been 20 some years
3:47
ago. You know, who's counting? Uh and
3:48
then I' I've never looked back and
3:50
that's what I've been doing since.
3:51
Amazing. So, Whimos started out of a
3:54
project at uh Stanford Automotive Lab.
3:57
There were two sides of this building.
3:59
There was the autonomy side and then
4:00
there was a solar car side. Fun fact, um
4:04
I was an idealist. I worked on the solar
4:05
car. I got that bet very wrong. Uh you
4:09
bet on autonomy. Tell us about the first
4:12
few years of Whimo from from ' 09 to the
4:16
formative years.
Google Self Driving Beginnings
4:18
So we started in 2009. That was at the
4:20
time the Google self-driving car
4:22
project. Um and the first couple of
4:25
years it was all about
4:28
learning the problem space understanding
4:31
you know what it means to try to put a
4:33
autonomous vehicle on public roads. Uh
4:37
so when we started in service of you
4:40
know those goals of learning
4:41
understanding the problem space we
4:43
created a couple of goals for ourselves.
4:45
One was to drive 100,000 miles total in
4:48
full autonomy which at the time was kind
4:49
of not heard of. Uh and the second one
4:52
was to drive 10 routes. Each one was 100
4:55
miles long. They were all over the Bay
4:57
Area. Uh chosen to be, you know, very
5:00
difficult. And we had to do each one
5:02
from beginning to end in full autonomy
5:04
and still with a person behind the wheel
5:06
uh that you can take control. But the
5:08
challenge was to complete each one
5:10
without an intervention. So it was a
5:12
small team of us. It was about, you
5:14
know, a dozen people. Uh it was the
5:16
early crazy startup days. Yeah.
5:18
everybody working 24/7, you know,
5:20
writing code and building hardware
5:22
during the day. You then you doing some
5:24
testing at night. Uh and it took us
5:26
about 18 months to complete uh both of
5:29
those challenges.
5:32
Incredible. It seemed impossible at the
5:34
time. Now you guys are on hundreds of
5:35
millions of miles.
5:36
Absolutely.
5:37
Um okay, so early Whimo days, extreme
5:40
challenge starting to achieve there.
5:43
next few years. You have a reputation in
Startup Grind and Leadership
5:45
your team for grinding really hard. You
5:48
were sleeping at the office. Tell us
5:50
about Dimmitri in the first few years of
5:53
Whimo and and how you formed your
5:55
leadership style.
5:59
I got to say those early days was
6:01
probably the most fun I've ever had in
6:04
my professional life. And it is that
6:07
that
6:08
you know momentum and that pace of an
6:13
you know early startup days right when
6:16
you are making so much progress you know
6:18
every hour of every day and you're doing
6:20
everything right you are uh working on
6:23
setting up the hardware in the cars and
6:25
then you know configuring and
6:26
calibrating the sensors and the you know
6:28
your pose estimation system and then
6:31
you're writing software during the day
6:32
and it's everything right it's the core
6:34
of the, you know, the software, the
6:36
algorithms that drive the car. It is all
6:38
of the tools uh and UIs and the user
6:41
experience in the car. So, you're doing
6:42
everything. You're learning at an insane
6:44
rate and you're making progress at an
6:46
insane rate. So, [snorts] uh that's that
6:48
was uh those were the early days uh of
6:51
projectur and then you know in those
6:54
couple years we've convinced ourselves
6:55
that you yes this is worth pursuing. So
6:58
we doubled down and started actually
7:01
building towards the future of a of a
7:03
fully autonomous product.
7:05
Okay. So exciting first few years
7:08
intense fast-paced technically really
7:10
difficult. Now take us to 201617 for a
Surviving the AV Hype Cycle
7:14
moment. This was a period where we
7:16
actually had a hype cycle in AI. Turns
7:18
out there's been a few of them and AV
7:21
autonomous vehicle was at the center of
7:23
that hype cycle. I mean, I remember just
7:25
so many companies going after this and
7:28
then there was a massive slump
7:30
and when most people gave up or failed
7:32
or fell apart, you guys persisted and
7:35
you were a leader in that persistence.
7:38
For all the builders in this room, how
7:40
did you navigate through the hard times?
7:45
So first a comment on you know what
7:48
these cycles kind of you know look like
7:50
to me and you know how I've seen them
7:51
and you said there there's been many
7:53
some AV but more generally and kind of
7:56
the what often leads to a cycle like
7:58
this is some rapid some breakthrough
8:03
that leads to
8:05
very rapid progress in the kind of the
8:08
early parts of the problem and very
8:10
rapid advancement still in the early
8:12
part of the problem right and in AVs the
8:14
The problem has always had this property
8:16
that it's very easy to get started but
8:18
it's you know very difficult to take it
8:21
all the way to a real product full
8:23
autonomy and superhuman performance. Uh
8:26
so it's somewhat natural given those
8:28
ingredients that whenever there's been
8:29
you know big breakthrough in technology
8:31
whether it's you know convolutional nets
8:33
or you know transformers or you know
8:35
large language models it's led to the
8:37
cycle okay now the problem is going to
8:39
be you know and it kind of reshapes the
8:41
early part of the curve but it you know
8:43
doesn't change the long tail of it. Mhm.
8:46
Uh so
8:48
in for us I think it was
8:52
understanding that it's not going to be
8:56
an easy problem and but it's a very
8:59
important one
9:00
and having you know believing in the
9:03
mission right because it today
9:07
worldwide somebody loses their life to a
9:10
crash on our roads every 26 seconds. So,
9:14
I guess it's the combination of knowing
9:17
that the mission is really, really
9:19
important and then understanding what
9:21
you're up against and not looking for
9:22
kind of easy wins or quick solutions or
9:25
silver bullets that help the team, you
9:28
know, have the right stamina to go the
9:29
distance.
9:30
Brilliant. So, you guys were in this
9:34
moment where it was really easy to get
9:35
started. A lot of people got there, but
9:38
you guys actually persisted and got
9:40
through to the other side with a truly
9:41
magical experience. pretty much every
9:43
hand in this room went up. Uh truly
9:44
magical experience because of that
9:46
persistence. Let's talk about technology
Waymo World Model Explained
9:48
today. A lot of people are talking about
9:50
world models. You have had all the
9:53
components of world models for many
9:55
years. How do you think about a world
9:57
model and what is Whimo's version of a
10:00
world model?
10:02
Uh yeah, there are a few things that
10:05
a few terms that people use nowadays. uh
10:08
people talk about world models, world
10:10
action models, omni models, you know,
10:12
visual language action models and at the
10:14
core of each [snorts] there's an
10:16
ingredient that is relevant uh and
10:18
really important for Whimo and for what
10:21
we've been building in our AI ecosystem.
10:24
uh at the
10:28
core of our AI ecosystem is what we call
10:30
the Whimo foundation model and it powers
10:34
three main pillars of our AI and our
10:37
tech. It's the driver, the simulator and
10:40
the critic,
10:42
right? And those are
10:45
very related but distinct tasks. Uh so
10:48
at the core of what our foundation model
10:51
needs to be capable of uh are things
10:55
like it needs to understand how the
10:56
world works the physics the dynamics of
10:59
the to the physical world
11:01
uh and it needs to understand you know
11:04
what it is to be a good driver and you
11:06
know [snorts] how the effects of the
11:08
actions of that driver or I agent on
11:10
other agents in the world and then we
11:12
need to instantiate those in that
11:13
physical agent that we're putting on the
11:15
roads. So in a way that foundational
11:17
model that that we've been building over
11:19
the years is uh a multimodal world
11:22
action language model right so it's
11:24
multimodal in that it needs to be able
11:26
to reason about not just you know images
11:28
or video but also other sensors like uh
11:30
lighters and radars uh it is a world
11:34
action model in that you know it really
11:36
has to have a deep precise understanding
11:38
of the 3D spatial properties of the
11:40
world the dynamics the physics the um
11:43
the uh behavioral aspects of other
11:45
agents like cars, pedestrians, cyclists
11:47
and so forth. Uh and we are not just you
11:51
know passively modeling those worlds.
11:52
We're an active participant in it. Uh so
11:55
we not only have to you know the world
11:57
model has to be controllable but also
11:59
you we need to have a deep understanding
12:01
of what it means to be a you know good
12:03
agent in that world. Uh and finally it's
12:05
aligned with language and that allows us
12:07
to kind of pull in the general world
12:10
knowledge of a VLM into our model that
12:12
is very very useful in giving us a boost
12:15
in the uh uh in understanding the
12:19
semantics and the deep social aspects of
12:22
driving [snorts] right and we've been
12:25
you know uh working on productionizing
12:28
that model you know for years and it
12:30
really it u requires an extremely high
12:35
degree of performance and accuracy and
12:37
realism in every aspect of what we just
12:39
talked about.
12:40
Brilliant. So with this driver simulator
End to End Plus Structure
12:42
critic architecture, uh there's also
12:45
been a lot of conversation about
12:46
endto-end architectures. Is that the
12:50
appropriate dichotomy? How do we think
12:52
about the approach to getting us to
12:55
extreme performance efficiency
12:57
autonomous vehicles that are totally
13:00
generalizable? Yeah to be very clear you
13:02
know the world model that just described
13:04
uh the found way of foundation model is
13:05
an endto-end model. Uh so when we talk
13:07
about an end toend model typically mean
13:09
that you know it's one model that goes
13:11
from sensors to decisions or actions
13:15
[snorts] and uh you know there some very
13:17
nice properties of uh such a model. One
13:20
of the most important ones is that uh
13:23
you it learns the right rich
13:27
representations between different
13:28
components of the system like the
13:29
encoder and the decoder or the
13:31
perception and the planning part of your
13:32
system
13:33
as [snorts] opposed to something where
13:34
that interface is engineered which is
13:36
not sufficient for you know a task like
13:39
driving. Uh now I do think there's a a
13:42
false dichotomy there. There's you know
13:43
end to end or something else. Uh really
13:46
it my mind it's always been the question
13:48
of you know it's end to end and then you
13:52
know what else and what else do you need
13:54
to build if you want to have a product
13:57
that is fully autonomous has superhuman
14:00
level of safety and you want to deploy
14:02
at a scale and drive hundreds of
14:04
millions of miles
14:05
and there it turns out that kind of the
14:07
basic vanilla you know endto-end system
14:10
is insufficient right so it's there's a
14:13
massive difference between using end to
14:15
end versus purely relying on it. So at
14:17
Whimo, we've really gone beyond that uh
14:19
kind of basic vanilla uh end to-end
14:21
approach and we've augmented the learned
14:23
representation with structured
14:25
materialized intermediate
14:26
representation. And what that allows us
14:29
to do are a few very important things uh
14:32
that you might not actually need if you
14:34
are you know building a different
14:35
product if you're building a driver
14:37
assist system or you know a prototype a
14:39
demo or small scale deployment. Uh but
14:41
again those things are absolutely
14:42
critical if you want to go all the way
14:44
to a fully autonomous safe system with
14:47
superhuman performance and those are
14:49
things like uh having extra validation
14:52
at runtime in of the agent that's
14:55
running on the car in the physical
14:56
world. It's things like richer training
15:00
and evaluation recipes that are very
15:03
difficult or impractical to do in a pure
15:05
kind of basic ATN system where this
15:07
structured materialized representation
15:09
gives you a boost in things like closed
15:11
loop evaluation, closed loop training,
15:13
uh rich reward functions for
15:14
reinforcement learning. So that's been
15:16
our approach
15:16
and all the human feedback that you get
15:18
from support and drivers dropping in and
15:22
all of that. It's essential to have this
15:24
type of architecture.
15:26
Exactly. Makes perfect sense. So, not
Gen 6 Hardware and Scaling
15:28
only have you innovated on the software
15:31
stack, but also the hardware stack.
15:33
There's a sixth generation now of Whimo
15:35
driver, and you guys have always focused
15:37
on being the driver. Tell us about the
15:39
new sixth generation, and what was it
15:41
like the first time you've interfaced
15:42
with it?
15:43
Yeah, it was uh so the sixth generation
15:45
uh is our most advanced uh hardware
15:48
suite and sensor suite yet. The focus
15:51
there has been on performance but also
15:53
on simplification,
15:55
drastic cost production and uh high
16:00
scale volume production. Uh and then
16:02
this is the uh the driver that's
16:05
powering our latest vehicle platform
16:07
that's the ohigh. Uh we uh earlier this
16:11
year started fully autonomous
16:12
operations. Uh it's currently only open
16:15
to employees but coming to our you know
16:17
all of the writers later this year. uh
16:20
and you know I I had a chance to take a
16:23
ride in one as soon as we started uh
16:26
running fully autonomous operations and
16:29
you know the I spent a lot of my life in
16:32
various generations of our cars every
16:34
once in a while there's uh kind of a new
16:37
first moment and that was definitely it
16:39
is that the the coal car is designed
16:41
around the rider experience it is uh
16:44
even though the external footprint of
16:46
the car is about the same as the
16:48
eyepiece but inside. You get in, it
16:49
feels like it's a living room, right? So
16:51
much space in the back. We have new
16:52
screens. We have these doors that, you
16:54
know, slide open and will, you know,
16:55
open automatically when you approach the
16:57
car. So, I I I had a blast and I I can't
17:00
wait to have this car in our fleet open
17:02
to everyone.
17:03
So, you guys are going through a period
17:05
of incredible scaling for for many
17:07
years. You were in the lab R&D surely.
17:10
It took 16 yearsish to get to 100
17:13
million miles, six monthsish to get to
17:15
200. things continue to scale really
17:18
rapidly, 11 cities now, many, many more
17:21
um on the horizon. Tell us what is it
17:24
like to scale a new city and then tell
17:26
us about your daily life with a Whimo.
17:28
How do you use it as a creator?
17:33
Well, there's a lot. Okay, so
17:34
exponential scaling. First of all, uh
17:35
absolutely it's been uh a phase
17:39
transition for us in how we're scaling.
17:41
So uh to give you a couple of additional
17:44
data points, it took us 8 years from the
17:47
day when we started our fully autonomous
17:49
operations uh to the day when we had our
17:53
service our uh uh our driver uh
17:56
providing rides to the public in four
17:58
cities. Earlier this year, just a few
18:00
weeks ago, we launched four cities in
18:02
one day.
18:03
We've uh given over 20 million fully
18:08
autonomous rides.
18:10
10 of those million happened in the last
18:12
seven months.
18:13
Amazing.
18:13
So that's what exponential scaling was.
18:15
Amazing.
18:15
Uh launching new cities uh there's you
18:20
know operational components you know
18:22
show up uh you know you have to uh
18:24
collect the data characterize the
18:26
environment um validate the driver. Uh a
18:30
significant part of it is starting the
18:33
conversation with the local communities
18:34
because it's a new thing. It's a new
18:35
product. So it's on us to earn the trust
18:37
of the you know the people there. Um and
18:40
then uh more often than not today we're
18:42
seeing that the driver is generalizing
18:44
incredibly well and it's just a matter
18:46
of [snorts] high fidelity rigorous val
18:49
evaluation and validation before we
18:51
deploy the fully autonomous product and
18:53
then uh we you know we grow from there
18:56
and then the last what was the last part
18:57
of the qu oh what is my daily life it
18:59
was a multi-art question yeah uh way I
19:02
mean whimo is uh my is how I get around
19:05
nowadays uh that's how I got here today
19:08
uh was you know a great ride from Palo
19:10
Alto up to San Francisco uh on on
19:12
freeways. Uh I my family use it. I have
19:16
three kids. They love Whimo. Uh they
19:20
they they I think nowadays they get
19:21
annoyed if on a rare occasion we have
19:23
to, you know, be in a car that's driven
19:24
by, you know, myself or my wife or, you
19:27
know, another human being. They're like,
19:28
"Okay, what's going on?"
19:29
Feel the same way at this point.
19:31
Uh they they love it. Uh it's been part
19:34
of their lives, you know, for the
19:35
entirety of their lives. There's uh when
19:38
we are uh driving around there's two
19:41
things. There's only two things that get
19:42
call outs from my kids nowadays. It's
19:43
doggies and it's Whimos.
19:46
[snorts]
19:47
Nice. Um okay. Uh probably similar
19:51
amounts of cognition between those two.
19:52
Um okay. So let let's talk about um uh
Safety Stories and Future Vision
19:57
safety. You know, one of the most
19:59
meaningful, exciting parts of partnering
20:01
with Whimo has been the fact that
20:03
there's 1.19 million people a year on
20:06
Earth that die in road accidents. It is
20:10
this is life or death. You not only does
20:12
it touch everyone in this room, but
20:14
everybody has some connection who's been
20:16
impacted by this. Um, you have been
20:19
about safety from the very beginning.
20:21
And it's actually pretty hard, you know,
20:23
in a Silicon Valley where it's move fast
20:25
and break things and see what happens.
20:27
You guys have been incredibly patient uh
20:30
with safety. Can you tell us about a
20:32
story that made it very real to you and
20:35
how you keep that safety culture at
20:37
Whimo? [snorts]
20:40
So the numbers you mentioned,
20:43
that's what drives all of us at Whimo
20:46
and the status quo is not okay, right?
20:49
We've kind of grown this over time. uh
20:52
but challenging the status quo is really
20:55
important to everyone at our company.
20:57
You're absolutely right that how you go
21:01
about building a system like this is
21:03
different from you might do in other
21:05
areas and other fields and other
21:06
industries where safety has to be the
21:09
non-negotiable foundation and you have
21:11
to build that into your everything that
21:14
you do from day one. your model
21:17
architecture, your training and
21:19
evaluation recipes, the mindset of the
21:21
team. It can be very tempting to, you
21:23
know, [clears throat] focus on
21:24
capability first and get to the, you
21:26
know, 90% uh very quickly. But how you
21:30
go about the first 90%.
21:32
Mh.
21:33
Is a totally different problem for, you
21:35
know, how you go about, you know,
21:36
getting to your next you know, N9s. So,
21:39
keeping that in mind and focusing on
21:41
safety as the non-negotiable fundamental
21:44
layer from day one is super important.
21:46
And then, uh, you know, today we're
21:48
driving more than, uh, 4 million miles
21:51
in full autonomy per week. uh and you
21:55
see a lot of uh events from the field
22:00
and uh today we have the data uh over
22:04
170 million miles fully autonomous miles
22:06
where we see that the Whimo driver is
22:08
more than 13 times safer than a human
22:12
driver when it comes to serious
22:13
injury-causing collisions in the cities
22:15
where we operate. And you see that sort
22:18
of superhuman safety behavior
22:20
manifesting itself on the roads, you
22:23
know, daily, right? I see examples of,
22:25
you know, recently there was a little
22:27
while ago there's an example uh that I
22:29
saw of um a person uh I think it was a
22:34
young woman on electric scooter on the
22:36
road and then she lost control and
22:38
tripped and fell right in front of the
22:40
Whimo. and the Whimo uh driver showed
22:43
superhuman uh accuracy and reaction time
22:46
and was able to you know swerve and
22:48
break and everybody walked away. So it's
22:50
uh things like this that you know uh my
22:54
my uh I myself personally and the team
22:55
the whole team find very rewarding uh in
22:59
terms of actually having a real impact
23:00
on the safety of our roads and the scale
23:02
that we're operating that 13x reduction
23:04
means that we are preventing a serious
23:06
injury
23:07
every eight days and that impact will
23:10
just grow as we scale up.
23:12
Wow. We're gonna open the room to
23:14
audience questions, a couple in in just
23:16
a moment. Before we jump in, I heard a
23:18
story about uh the LAR detecting or the
23:22
radar detecting the footsteps of
23:25
somebody behind a bus. Did that happen?
23:28
And how does that work? Yeah, this was
23:30
one of those moments where I
23:32
I was
23:34
positively surprised by the emerging
23:37
capability of our system
23:39
and the situation was uh this was I
23:42
think in San Francisco uh the Whimo
23:44
driver was at an intersection there was
23:46
a bus that crossed uh and we're you know
23:49
sitting there waiting at a red light uh
23:51
so the bus crossed and stopped partially
23:53
blocking the intersection so our light
23:55
intersection so then our light turned
23:57
green the way driver started to proceed
23:59
And as it's proceeding,
24:01
it detects a pedestrian on the other
24:05
side of the bus.
24:07
And you know, you can't see through the
24:09
bus. It's, you know, uh not through
24:12
lighters, not radars, not cameras. You
24:13
know, the the windows are reflecting
24:15
there people inside the bus. Uh and
24:18
then, you know, starts to react
24:20
defensively. And sure enough, a
24:21
pedestrian emerges from behind the bus
24:23
and then we're able to nudge around them
24:25
and everybody, you know, goes on their
24:27
way. So when I saw that, I was it blew
24:31
my mind. I wasn't sure what's going on.
24:33
Um I guess capable as superhuman as the
24:36
way my driver is, it doesn't see through
24:38
solid objects. So actually what turned
24:39
out was happening is that our lighter
24:43
had was balancing the signal, you know,
24:45
under the bus and got a little bit of a
24:48
sparse return from the movement of the
24:51
person's feet under the bus. And that
24:53
was enough for the Whimo AI to not only
24:56
detect that there's a pedestrian there,
24:58
but also make a prediction about what's
24:59
going to happen in the future and keep
25:01
everyone safe.
25:02
Mind-blowing. Pretty unbelievable. We've
25:05
got time for one question from the
25:06
group. If anybody has a key Jim, sorry,
25:11
no free codes, not at this one. No. Yes,
25:14
Jim, please.
25:15
Thank you. Does this work?
25:16
Yes.
25:17
I was just saying congratulations on all
25:18
you've achieved. It's really
25:20
mind-blowing. If you think about the
25:21
next 5 to 10 years, really focus on the
25:24
business model. What are the milestones?
25:27
What happens in major cities? What's
25:30
going to be different than where we are
25:31
today? Just kind of walk us through
25:33
through your vision of the future.
25:37
So, we're heads down in execution mode.
25:39
[snorts]
25:40
uh we've transitioned from of
25:42
intentional sequential de-risking of the
25:45
driver and key parts of the business to
25:48
rapid parallel global commercialization.
25:52
Uh that means uh deploying the Whimo
25:54
driver uh in more places uh across the
25:57
United States and today we're in 11
25:59
cities uh operating fully autonomously
26:01
and serving our riders that uh we're
26:04
going to expand in those existing
26:05
places. We're going to add new
26:07
geographies, new cities. We're also
26:09
expanding internationally. Announced
26:10
that this year we'll plan to offer a
26:12
service in London and in Tokyo. So, uh
26:15
you will see us just accelerating that
26:17
deployment all in service of our
26:19
mission.
26:20
Good news to our team in London. Well,
26:22
we covered a lot Dimmitri from the very
26:24
early days where you could get a lot of
26:27
distance with not a lot of technology to
26:29
then persisting through extremely hard
26:31
times in autonomous vehicles and getting
26:34
that extra mile. We talked about world
26:36
models, driver simulator critic
26:38
architecture. We got into the hardware,
26:41
the sixth generation hardware safety and
26:45
scaling. Uh, but most of all, I hope
26:47
that we learned a little bit more about
26:49
Dimmitri, the man who's brought the
26:50
magic that is Whimo to to so many of us.
26:53
And as I've gotten to know you more and
26:55
more, I'm constantly struck not only by
26:57
your your brilliance and your
26:58
persistence and performance, but also
27:00
your humility. Uh, it says a lot for
27:03
accomplishing this much. Thank you,
27:04
Dimmitri. Please join me in thanking
27:06
Dmitri for all he does. [applause]
27:07
Thank you.
27:08
And the many lives saved. Thank you.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste — drop the screenshot in chat and I'll fill §0. (Or paste visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

This one is excellent for OMNI. It is less flashy than the Sequoia “AGI” keynote, but probably more useful for how to build a safety-critical AI substrate that actually survives reality.

Core takeaway

Waymo’s lesson is: do not confuse impressive early capability with product-grade autonomy. The long tail is the product. The first 90% can be made to look magical; the next “N nines” require architecture, runtime validation, structured intermediate representations, evaluation, human feedback, safety culture, hardware/software co-design, and disciplined scaling. Dmitri Dolgov explicitly rejects the false choice between end-to-end learning and structured systems: Waymo uses an end-to-end foundation model, but augments it with structured materialized intermediate representations because pure end-to-end is insufficient for fully autonomous, superhuman-safety deployment.

OMNI translation
1. This is a direct warning against “AI demo disease.”

OMNI cannot build a beautiful AI care demo and mistake it for the product. In healthcare, the first 90% will look amazing: intake summary, patient message draft, lab explanation, plan suggestion, scheduling automation.

But the real product is the last mile:

contradictory patient context,
unclear ownership,
missing consent,
stale labs,
provider unavailable,
cross-state authority,
ambiguous patient-source signal,
payment/entitlement conflict,
safety escalation,
follow-up loop not closed.

That is OMNI’s version of Waymo’s long tail.

2. “End-to-end plus structure” is probably a major OMNI architecture principle.

This is the biggest gem.

Waymo’s point is not “end-to-end is bad.” It is:

End-to-end learned systems are powerful, but production-grade autonomy needs structured, materialized intermediate representations for validation, training, evaluation, reward functions, runtime checks, and human feedback.

For OMNI, this maps almost perfectly:

AI can read the patient message.
AI can synthesize context.
AI can propose a plan, draft a response, classify risk, suggest next action.
But OMNI must materialize intermediate state: observation, clinical_assertion_candidate, care_commitment_candidate, authority_evaluation, context_packet, orchestration_action, risk_state, human_review_required, domain_commit_status.

Do not let the model go directly from “patient text” → “care action.” That is the naive pure end-to-end trap.

OMNI’s doctrine should be:

Use learned cognition, but materialize the clinically and operationally important intermediate state.

That is a keeper.

3. Driver / simulator / critic maps to OMNI agent architecture.

Waymo’s AI ecosystem has three pillars: driver, simulator, critic. For OMNI, the analogy is extremely useful:

Driver = runtime agent/CNS proposing or executing bounded actions.
Simulator = pre-deployment and live-sandbox testing of workflows, patient journeys, edge cases, policy changes, and agent behavior.
Critic = evaluator layer: LLM-as-judge, deterministic validators, clinical safety checks, policy checks, regression tests, human review.

OMNI should not only build agents. OMNI needs the agent, the simulator, and the critic as a family.

That lands hard in §B, Build OS, Runtime Proof, and CNS.

4. “Safety from day one” is not branding. It changes architecture.

Dmitri says safety has to be the non-negotiable foundation from day one, built into model architecture, training/evaluation recipes, and team mindset. That is directly applicable.

For OMNI, safety is not a later compliance layer. It has to shape:

context packet design,
authority envelopes,
clinical-risk interrupt,
eval harnesses,
escalation thresholds,
ownership state,
audit trails,
domain commit rules,
human review gates,
autonomy graduation.

If you build fast to “90% working” without that architecture, the last 10% may require a rebuild.

5. Scaling requires local validation, not abstract confidence.

Waymo scaling cities requires collecting data, characterizing the environment, validating the driver, building local trust, and only then deploying.

OMNI equivalent:

Do not assume a workflow validated in Bloom medspa generalizes to:

telehealth peptides,
HRT,
derm,
labs,
partner clinics,
other states,
other operators,
other provider types.

Each new “city” in OMNI — specialty, state, operator, service line, care pathway — needs localized validation and trust-building.

This supports a rollout doctrine:

General substrate, local validation.

6. The LiDAR-foot story is a perfect analogy for longitudinal signal.

Waymo detected a hidden pedestrian indirectly from sparse LiDAR returns under a bus, then predicted future risk and acted defensively. That is basically the physical-world version of OMNI’s longitudinal intelligence.

OMNI may not “see” the clinical event directly. It may infer risk from sparse signals:

patient message tone,
missed refill,
wearable sleep shift,
overdue lab,
appointment cancellation,
prior side-effect,
payment pause,
provider note,
incomplete intake.

But just like Waymo, OMNI should not treat sparse signal as truth. It should treat it as a risk candidate requiring context, prediction, and possibly defensive action.

This is a strong analogy for CNS:

Sparse signal → risk candidate → prediction → defensive action / review.

Where it lands

Thesis §B — AI substrate axis: major. Especially end-to-end plus structured intermediate representations, critic/evaluator layer, runtime validation, and autonomy graduation.

CNS / orchestration: major. The CNS should not be an unstructured agent. It needs materialized states, critic loops, stop conditions, and safe runtime checks.

Build OS / Runtime Proof: major. Driver/simulator/critic is a clean frame for testing AI workflows before they touch real care.

§C Governed Capability Exchange: medium. External actions need capability contracts and runtime validation; pure tool-calling is not enough.

Knowledge Reservoirs / Evidence Plane: medium. World models need rich context; OMNI agents need governed reservoirs. But the stronger lesson here is safety architecture, not reservoirs.

Product rollout / wedge: major. General substrate must be validated per service line/operator/state, like Waymo validates per city.

Doctrine / primitive pressure

Possible concepts worth routing:

structured_intermediate_representation
runtime_validation_state
critic_layer
workflow_simulator
closed_loop_eval
agent_runtime_trace
localized_validation_gate
autonomy_graduation_state
sparse_signal_candidate
defensive_action_candidate
human_feedback_loop
safety_case

But the doctrine line matters more than the primitive names:

OMNI should be end-to-end assisted, not end-to-end governed. Learned systems may perceive and propose; materialized substrate state validates, routes, audits, and commits.

That is the keeper.

What not to import blindly

Do not import “fully autonomous” as the aspiration for clinical care. Waymo’s physical autonomy analogy is useful, but clinical autonomy has different authority, liability, consent, and human-relationship rules.

Do not treat “superhuman safety” as a claim OMNI can casually make. It can be a directional ambition, but it requires proof, metrics, and deployment-specific validation.

Do not treat Waymo’s world model as a reason to collapse all OMNI state into one AI model. Waymo’s own point argues the opposite: learned representations need structured materialized support to become production-grade.

Do-not-miss lesson

The first 90% is not the product. The product is the architecture that survives the long tail.

Or more OMNI-specific:

OMNI should use AI like Waymo uses autonomy: learned cognition plus structured intermediate state, critic loops, runtime validation, and safety culture from day one.

Priority / confidence

Priority: 5/5
Confidence: 5/5
Suggested analysis depth: full_semantic

This is one of the strongest sources so far for the Build OS / Runtime Proof / CNS safety architecture side of OMNI. It should absolutely be routed into the v3 pause before §B/§C harden.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus deep-read extraction  ·  layer: `analysis_nonbinding`  ·  EVRUN-2026-000001 (G10 embodied-compute)
- reviewer: `Opus` · type: `AI assistant` · at: `2026-06-08` · purpose: `registry-first concept extraction → routing` · binds nothing (`GRD-036`/`GRD-044`)

**15 clusters (6 spine). Waymo/Dolgov autonomy. Physical AV is ADJACENT; import safety-case/sim/critic/graduation. Keeper: OMNI should be end-to-end ASSISTED not governed — learned systems perceive/propose; materialized substrate state validates/routes/audits/commits.**
1. **Safety-case as product foundation** — trust to remove/reduce HITL is EARNED by a safety-case baked into architecture/eval/team/runtime from day one; first-90% path ≠ N-nines path. §A/§8, Build-OS (safety-case as gate admission), CNS stop-conditions. "safety has to be the non-negotiable foundation" 21:09 · "how you go about the first 90%" 21:26. **PARTIAL → spine.**
2. **End-to-end learned cognition PLUS structured materialized intermediate state** — models perceive/propose richly but governed autonomy materializes intermediate state (observation candidates/authority-eval/risk/commit-status); never raw input→commit. §B/§A/§8, CNS (AFFIRM GRD-029), Build-OS trace/eval, security deterministic validators. "structured materialized intermediate representation" 14:24. **ABSENT → spine.**
3. **Driver / Simulator / Critic (one substrate, three roles)** — Driver(runtime propose/bound) + Simulator(pre-deploy/replay) + Critic(evaluators/judges/review). §B/§8, CNS driver-vs-critic separation, Build-OS `production_shaped_sandbox`/rollout-as-eval/decomposed-judges. "the driver, the simulator and the critic" 10:37 · "closed loop evaluation, closed loop training" 15:11. **PARTIAL → spine.**
4. **Runtime validation + closed-loop eval (earn autonomy by proof)** — production autonomy needs runtime validation + closed-loop eval/training; autonomy ramps where verification scales. §A/§B/§8 no-eval-no-autonomy, Build-OS closed-loop harness + reward-hacking probes, CNS runtime_check. "extra validation at runtime" 14:49. **PARTIAL → spine.**
5. **Autonomy graduation by demonstrated safety** — sequential de-risking via explicit milestones (intervention-free rollouts) before expanding scope/removing oversight. §A/§8 `autonomy_graduation_state`, Build-OS milestone gates, CNS autonomy_level tied to competence. "drive 100,000 miles… without an intervention" 4:45/5:08 · "intentional sequential de-risking" 25:42. **PARTIAL → spine.**
6. **Localized validation gate (general substrate, local proof)** — each new operator/state/specialty/pathway needs data characterization + validation + trust conversation before deploy. §10, §8, Build-OS admission per locale, CNS `localized_validation_gate`. "validate the driver" 18:26 · "earn the trust of the people" 18:35. **ABSENT → spine.**
7. **Long-tail / first-90%-trap / hype-cycle discipline** — breakthroughs reshape early curve not long tail; product = architecture surviving contradictions/consent-gaps/stale-labs/escalation. §B/§2 foil, §A long-tail=authority/consent edges, Build-OS use-case-first. "doesn't change the long tail of it" 8:43. **PARTIAL → vocabulary → promote.**
8. **Sparse signal → risk candidate → defensive action** — weak signals (tone shift/missed refill/sparse wearable/payment pause) → risk candidates + defensive action/review/escalation, not truth. §8 Sense, CNS `sparse_signal_candidate`/`defensive_action_candidate`, §A sparse≠adopt, D7 obs candidates. "sparse return from the movement of the feet" 24:48 · "starts to react defensively" 24:18. **PARTIAL → vocabulary → watch→promote after pairing 087/088.**
9. **Human feedback loop as architecture requirement** — field/support feedback feeds training/eval/critic (not optional UX); assistance-tuning ≠ policy mutation. §A HITL, Build-OS typed feedback, CNS human_review_required, security. "all the human feedback that you get from support" 15:16. **AFFIRM → vocabulary → promote (sharpen).**
10. **Multimodal world-action-language foundation model (Waymo-specific)** — useful Lens-B comparator for one-substrate-many-instantiations; OMNI must NOT collapse domain truth into one model. §B, §3.5 comparator (GRD-039), CNS context-assembly not monolithic. "multimodal world action language model" 11:22. **PARTIAL → low-authority-watch → watch.**
11. **Superhuman safety metrics / operator claims** — "13x safer" = directional ambition NOT adoptable benchmark w/o OMNI-owned proof. §A proof-obligations-not-claims, product, future-watch. "13 times safer than a human driver" 22:08. **ABSENT (correctly) → low-authority-watch → watch.**
12. **Gen-6 hardware / sensor suite / vehicle platform** — physical AV stack, adjacent no-transfer except "co-design matters." §10 horizon, else no-op. "sixth generation" 15:39. **no-op → reject (§3.5 color only).**
13. **Exponential ride-scale / multi-city velocity** — deployment velocity metaphor; localized validation (cluster 6) is the transferable slice. §10 scale foil. "over 20 million fully autonomous rides" 18:03. **no-op → low-authority-watch → watch.**
14. **Mission persistence / founder stamina** — operator philosophy; pairs 052 not architecture. operator-context, Build-OS core_before_act_two affirm. **AFFIRM → low-authority-watch → watch.**
15. **Fully autonomous clinical care aspiration** — **REJECT** importing "remove human from care" as goal; analogy stops at safety-case/graduation/sim/critic. §A/§2 foil, §C envelopes, CNS human_accountable_commit. "fully autonomous safe system with superhuman performance" 14:44. **AFFIRM → vocabulary(counter-doctrine) → reject as destination, keep as foil.**

**Net-new:** `safety_case`, `structured_intermediate_representation`, `driver_simulator_critic_triad`, `runtime_validation_state`, `localized_validation_gate`, `sparse_signal_risk_candidate`, `defensive_action_candidate`. SHARPEN: `closed_loop_eval_recipe`→`production_shaped_sandbox`(054), `autonomy_graduation_milestone`→`autonomy_level`(REV-176). **Reread:** structured-intermediate-state (14:24, 13:52 → §B/CNS/domain candidate schemas); driver/sim/critic (10:37, 15:11 → Build-OS proving grounds 088 + eval 054); first-90%/N9s + safety (21:09–21:36 → §A graduation + Safety-IS-PMF 070); localized-validation (18:26–18:37); sparse-signal (24:18–25:01 → 087/088); "do not collapse to one model" (Knox) cross-check Software-3.0.

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(I fill later — derived work lives in EVRUN; leave `TK`)*
- EVRUN(s): `TK` · inventory: `TK` · routing_addendum: `TK` · impact §B/§C/security/Build-OS/contract: `TK` · promotion: `TK`

## §5 — Change log
- `2026-06-06` — source file created (awaiting transcript drop).

# EVSRC-2026-000240 — The Best AI Coding Setup Isn't the Most Autonomous One (Cole Medin)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000240_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000240`  ·  filename: `EVSRC-2026-000240_cole-medin-five-levels-ai-coding-harness-dark-factory.md` *(proposed slug; file NOT renamed — Opus-main folds)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=muwRbfuKbR4`  ·  source_title: `The Best AI Coding Setup Isn't the Most Autonomous One (Here's Why)`
- channel_or_org: `Cole Medin`  ·  speaker: `Cole Medin`  ·  published_at: `Jul 3, 2026`
- captured_at: `2026-07-08`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + operator metadata block`
- content_type: `AI coding maturity model / harness engineering / Dark Factory / human-in-the-loop engineering / orchestration / AI development lifecycle / context engineering`  ·  source_reliability_context: `practitioner` (educator / YouTube creator / Dynamous agentic-coding course + Archon open-source harness builder)  ·  topic_tags_light: `[ai-coding, five-levels, trust-ladder, harness-engineering, ai-layer, r-piv-loop, dark-factory, deterministic-vs-agentic, orchestration, independent-review, system-evolution]`
- **identity_confidence: `high_from_operator_metadata`** (metadata block present at top of §3 Review 001; lifted verbatim, no caveats)

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Cole Medin` · role_in_source: `speaker / presenter` (solo explainer video) · affiliation_at_publication: `Cole Medin YouTube channel · Dynamous agentic-coding community/course · Archon (open-source harness builder, his project)` · speaker_type: `educator / practitioner` (AI-coding content creator + tool builder) · authority_context: `practitioner-educator with a commercial channel/community; teaches "agentic coding systems"; builds Archon; recurring wave-3 voice (see 233/234/235/236/238)` · identity_confidence: `high_from_operator_metadata`
  - *(add a bullet per additional speaker)* — none (solo; borrows Dan Shapiro's five-level ladder + cites Google's SDLC paper, StrongDM Dark-Factory writeup, Stripe "Minions"; sponsor segment Sonar × Gitar)
- publisher / channel: `Cole Medin (YouTube)`  ·  interviewer / moderator / host: `n/a (solo)`
- event_context: `standalone YouTube explainer, published Jul 3 2026`  ·  perspective / conflict notes: `creator has commercial incentives (Dynamous course, Archon); mid-video paid sponsor segment (Sonar/Gitar) — treat sponsor claims as vendor-marketing, not evidence. Knox Review 001 flagged this an over-eager promote; operator (Review 002) rates it "basic" — file + harvest convergence, do not over-weight.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot/metadata in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [x] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename (slug proposed) · [x] §0 metadata (from operator block — `high_from_operator_metadata`) · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [~] update EVRUN concept registry (cross-source) — *fold packet returned; Opus-main folds (do NOT edit registry)* · [~] update coverage matrix — *Opus-main folds* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
The Five Levels of AI Coding
0:00
Everyone is using AI coding assistance
0:02
very differently. You'd be surprised how
0:04
large the spectrum is, even for
0:07
companies that are using these tools to
0:08
ship production code. And the best
0:11
explanation I found for the different
0:13
ways we can use coding agents is from
0:15
Dan Shapiro. So in this blog post, the
0:18
five levels from spicy autocomplete to
0:20
the dark factory. And it's really
0:22
important for you to understand the
0:24
level that you're currently at and what
0:26
you should be shooting for and the level
0:28
that's best for you. also changes over
0:30
time as you create a more structured
0:32
approach to AI coding. And so in this
0:35
video, I want to break down each one of
0:37
the levels nice and simple for you and
0:39
help you understand where you should be
0:41
at right now. And I just want to share
0:44
some honest thoughts, especially on some
0:46
of the last levels, especially with the
0:48
dark factory. I see a lot of companies
0:51
go for this right now, and I've even
0:52
built my own. But there are a lot of
0:55
downsides to the dark factory, as
0:57
powerful as it is. And so we'll get into
0:59
the meat of that as well. All right, so
Levels 0 to 2 Explained
1:00
let's get right into the different
1:02
levels of AI coding. And this entire
1:04
article uses the analogy of driving a
1:06
vehicle because there's a company in
1:08
2013 that created the five levels of
1:11
driving automation. And it's very neat
1:13
because we can map each one of these
1:15
levels directly to how we interact with
1:17
AI coding assistants. How much are we
1:20
leaning on them versus keeping our hands
1:22
on the driver's wheel when we are
1:24
interacting with them and having them
1:25
create the code for us? And so level
1:28
number one is spicy autocomplete. I love
1:30
this name, by the way. And here you're
1:33
still writing every single line of code
1:35
yourself. You're just using the coding
1:37
agent as a reference tool or some kind
1:39
of enhanced search. So it's like a
1:41
smarter stack overflow. And so it never
1:43
has the final say. It doesn't get to
1:45
write a line of code, but you're
1:47
constantly leaning on it for how should
1:48
I architect this or how should I write
1:50
this function? And so it's like your
1:53
parents vo. So maybe even having
1:55
automatic transition. This is the most
1:57
manual you can possibly be. You have to
2:00
manage the car at a very fundamental
2:02
level. And so you can see that it's
2:03
actually level zero because we're not
2:06
really having the coding agent do
2:07
anything for us. And so then we get into
2:10
level one. And so this is like the
2:12
coding intern or when you're driving a
2:14
car, you have cruise control. It's that
2:16
first level of autonomy where that
2:18
there's at least one part of the car
2:20
that's being managed on your behalf. And
2:23
so here your coding agent is going to
2:25
write the unimportant or boilerplate
2:27
code. And so setting up your initial
2:29
repository, maybe installing packages,
2:32
writing unit tests, doing simple
2:33
refactors, that kind of thing. You're
2:35
not leaning on it for anything that
2:37
takes true reasoning, but you're still
2:38
saving a good amount of time here. And
2:40
then level two takes us to the junior
2:42
developer. This is where you really
2:44
start to lean on the coding agent or
2:45
lean on the car to operate pretty
2:48
autonomously, but only in some
2:50
situations. So when you're driving, it's
2:52
like you have autopilot on the highway.
2:54
But when you're actually driving in the
2:55
city and there's a lot of turns and
2:57
rules that need to be followed, you
2:59
can't trust it anymore. So it's a junior
3:01
developer where you're doing a lot of
3:02
pair programming. You are handing off a
3:04
lot of the boring work, but there still
3:06
are going to be those things where you
3:08
don't trust it entirely and you're
3:10
driving the process very manually. And
3:12
there's a good chance that this is where
3:14
you are at right now. Because if you
3:16
don't have a very established system for
3:19
how to leverage AI coding assistants and
3:21
have them evolve over time, and we'll
3:23
talk about that in a little bit, then
3:25
you probably don't trust it for every
3:26
kind of task. There are certain things
3:28
where you think it's just going to be
3:30
better for you to do it yourself,
3:32
especially if you're more technically
3:33
inclined. And I do really encourage you
3:36
to get past level two. So, when we start
Level 3: The Sweet Spot
3:38
to talk about level three here, this is
3:40
where I really want you to be. And so
3:43
it's easy to get here because you're
3:45
trusting it with the easy stuff like
3:47
autopilot on the highway. But when you
3:50
really create a system for planning and
3:52
implementing and validating, that's when
3:54
you go into level three, the developer.
3:56
This is where you get to the point where
3:58
your coding agent is writing a majority
4:00
of the codebase, which is what it says
4:01
right here. But honestly, I would take
4:03
this a little bit further. When you get
4:05
to level three, and this is mostly where
4:07
I operate, this is where you're
4:08
delegating all of the coding to your
4:10
agent. And I myself haven't written a
4:13
single line of code for over a year now,
4:15
which is crazy to think because I've
4:17
spent years and years of my life writing
4:19
code every single day. And so as an
4:22
engineer, it took a while to get to the
4:24
point where I had the system and built
4:25
the trust to get to level three. But
4:28
there's a good chance this is where you
4:30
should be. This is the sweet spot of
4:32
reliability and autonomy. Cuz as it
4:34
relates to driving a car, it's like a
4:36
Whimo with a safety driver. you're
4:38
letting the coding agent really go or
4:40
you're letting the car do all the
4:41
driving, but you're still in the
4:42
driver's seat. You're still attentive.
4:44
You're still driving the process. And so
4:46
what I like to say here for level three
4:48
is the only reason that we delegate all
4:51
the coding to the agent and trust it to
4:53
do that is because we're sandwiching the
4:56
implementation with a lot of planning
4:58
and a lot of validation that we are very
5:00
much a part of. And so you delegate all
5:02
the coding, but you still remain in the
5:04
driver's seat. But that starts to change
Level 4: Engineering Teams
5:06
once we get to level four. This is the
5:09
level where we reach the engineering
5:11
team. You're handing off much larger
5:13
sets of work for the coding agent to
5:14
knock out autonomously. And so you're
5:17
still at the helm, but you're sleeping
5:19
for long periods of time because we're
5:21
letting the agent rip through larger
5:23
sets of work based on something like an
5:25
epic, a PRD, or a spec. Level three is
5:28
more like each individual task. We're
5:30
doing the planning and validation with
5:32
the coding agent, but here we're just
5:34
doing the very high level direction
5:36
setting up front and then the validation
5:38
at the very end like a set of pull
5:39
requests for example. And so we're
5:41
letting it go go based on a larger spec.
5:44
And so it's not quite the dark factory.
5:47
We'll talk about this in just a second
5:48
where there's not even a driver's seat
5:51
like right like we still have control of
5:53
the system to an extent but we're just
5:55
not doing that very often. And at this
5:58
level, this is where your reliability
5:59
really starts to tank until you have a
6:02
trusted and really wellestablished
6:04
workflow for AI coding, going from idea
6:07
all the way to production. And it takes
6:09
a while to get there. That's why I
6:10
recommend you stay at level three or you
6:12
at least stay here for a long time
6:14
because you build up that system and
6:16
then you can start to make your coding
6:18
agent more autonomous. So really just
6:20
taking the system that you were more a
6:22
part of and then taking out the human in
6:24
the loop as you go to get to levels four
6:27
and five. And so I'll talk about in a
6:30
little bit what it actually takes to
6:32
create this system. What actually is a
6:33
system for AI coding? But first let's
Level 5: The Dark Factory
6:36
talk about the dark factory for a bit.
6:38
So at level five, it really isn't even a
6:40
car anymore. Let me zoom in on this so
6:42
you can see this image. Well, there is
6:44
no driver's wheel. We can't even take
6:46
control and grab the reinss even if we
6:48
wanted to. Now, there's still a console
6:51
in this vehicle, whatever it is, this
6:53
spaceship. So, the console allows us to
6:55
still input our highest level directions
6:57
possible, but yeah, we're not
6:59
controlling any of the development. And
7:01
so, the way that a dark factory works is
7:03
your input is your spec, the large
7:06
document that outlines everything you
7:08
want to build. And what you get out of
7:10
the dark factory is shipped code. And so
7:13
that's probably the biggest difference
7:14
between level five and four. Level four,
7:16
you're not trusting the coding agent to
7:18
ship right to production. But in level
7:20
five, you actually are. And if that
7:22
sounds kind of scary, it should. That's
7:25
why I'm saying you have to be very
7:26
careful when you get to this level of
7:28
autonomy. Cuz if there's one thing you
7:30
have described wrong in the spec or the
7:32
coding agent just makes some kind of
7:33
incorrect assumption, that can lead to
7:36
dozens of shift deployments that are
7:38
just botching what you wanted to
7:40
actually create. But in the end, the
7:42
dark factory is ideal. If your business
7:45
can get to the point where you have a
7:47
process where you can send in a spec and
7:49
get out shipped code, that my friend is
7:52
the dream. And we're starting to get to
7:55
the point where the dark factory is
7:57
becoming realistic. Now, I want to be
7:59
very careful how I put this right now
8:01
because I don't want you to just reach
8:03
for the dark factory immediately, but I
8:05
think that there is a possibility you
8:07
can get here with the current tooling
8:09
and LLM we have available. And so, you
8:11
can probably jump to level three very
8:13
fast. I mean, that's what I teach on my
8:15
YouTube channel and in the Dynamis
8:17
community, like creating the system
8:18
where you're still in the loop for each
8:20
individual build, but you have quite a
8:22
bit of autonomy. You're delegating all
8:24
the coding to the agent. So, you start
8:26
here. This is where I want you to be.
8:28
And then you take out the human in the
8:30
loop as you create that system where you
8:32
really trust that it understands your
8:34
codebase and your workflows and things
8:36
are reliable. And so there are some
8:39
companies that are starting to come out
8:40
of the woodworks sharing how they do
8:42
have a dark factory that's actually
8:44
running. Strong DM is one example. I'll
8:47
link to an article on that in the
8:48
description. A lot of other companies
8:50
aren't really documenting anything like
8:51
Strong DM. So, it's just some rumors
8:54
that are starting to surface of
8:55
companies that are doing this
8:56
successfully, even in the banking
8:58
industry, even when the code has to be
9:00
perfect when it's shipped to production.
9:02
So, it's definitely possible, but we
9:05
need the system to get there. And so,
9:06
with that, let's actually get into what
9:08
does a system for AI coding look like?
9:10
And how do we build something that can
9:13
even take the form of the dark factory?
Sponsor - Sonar x Gitar
9:15
The sponsor of today's video is Sonar.
9:18
They're making big moves in the AI
9:19
coding space right now. The reality is
9:21
that these days AI is writing a huge
9:24
chunk of new code. And that my friend is
9:26
not slowing down. But the problem is
9:28
traditional code reviews and quality
9:30
gates were never made for volume at this
9:32
speed. And so bugs slip through and AI
9:35
errors compound on themselves and your
9:37
code base gets fragile quickly. That is
9:39
why Sonar has acquired guitar. Guitar is
9:42
AI code review that actually fixes your
9:44
code. It's not just another agent you
9:46
throw at the problem. It's an entire
9:48
harness for validation, making your code
9:50
more reliable with full visibility as
9:52
well. The way that guitar works is you
9:54
connect it to any of your GitHub or
9:56
GitLab repositories. And then as soon as
9:58
you open up a pull request, we can see
10:00
Guitar here running a comprehensive code
10:02
review. And not only does it do the code
10:04
review, but can also fix the issues that
10:06
it finds automatically as well. So right
10:09
here, it identified and fixed a SQL
10:11
injection vulnerability that I have in
10:14
this poll request. And the best part for
10:16
all of this is every single time it
10:18
makes a fix, it automatically validates
10:20
it against your CI. So it just
10:23
increasing the reliability even more. It
10:26
even reads your CI failures for you. So
10:28
it can do things like ddupe your errors,
10:30
help you identify flaky tests, and clean
10:33
up your build and lint failures so
10:35
you're not drowning in logs. And you can
10:37
see this is all very in line with
10:39
Sonar's agent centric development life
10:41
cycle. A framework that's based on the
10:43
three pillars of guide, verify, and
10:46
solve. And guitar fits very well into
10:49
their verify pillar. And teams using
10:51
Sonar are 44% less likely to hit
10:54
production outages caused by AI
10:56
generated code. And it's not about
10:58
replacing your human judgment. It's just
11:00
a serious safety net under everything
11:02
your agent ships. And Guitar has a
11:04
14-day free prot trial. No credit card
11:07
required. I'll link to it in the
11:08
description. All right, so I put a lot
Building an AI Coding System
11:10
of time into thinking about how I can
11:12
quickly describe what a system is to you
11:14
for AI coding. And I want to be concise
11:17
because that's really not the point of
11:18
this video to dive super deep into the
11:20
weeds of system engineering or context
11:23
engineering, but I want to give you an
11:25
idea of what you're going to be creating
11:26
and evolving to trust your coding agent
11:29
to be more autonomous over time. And so
11:31
I decided to pull from the Dynamus
11:34
agentic coding course. So, taking a
11:36
couple of the things that I have there
11:38
and just showing it really fast. And so,
11:40
I want to start by talking about the AI
11:42
layer because these are the different
11:44
components that you build on top of your
11:47
coding agent. Things like your rules and
11:48
skills. So, your coding agent
11:50
understands your conventions, your
11:52
context of your codebase, and your
11:54
workflows. And when you think about
11:56
harness engineering, which is building
11:58
the system for AI coding, it really
12:00
starts at layer zero with the tool that
12:02
you pick. So you don't control this, but
12:05
you get to pick the coding agent. And
12:07
the coding agent, it really is a harness
12:09
because it wraps the large language
12:11
model with the tools and instructions to
12:14
make it operate as an AI coding
12:16
assistant. And then we build the layer
12:18
on top. This is what we control because
12:20
we wrap the coding agent that it itself
12:22
wraps the LLM to provide a context not
12:25
on how to be an AI coding assistant, but
12:27
how we want it to be a coding agent
12:28
specifically on our codebase with our
12:31
workflows. And so there's really six
12:33
components that we're building up here.
12:35
We create our rules. These are the
12:37
conventions we want our coding agent to
12:39
follow. We have our sub agents, how we
12:41
want to delegate work and manage our
12:43
context. And then we have our skills,
12:45
our packaged up workflows. Like this is
12:47
how we want our coding agent to do
12:48
planning. Here's how we want it to
12:50
implement. What's the procedure we want
12:52
it to work itself through based on the
12:54
input we give it for what we want to
12:56
build. And I don't need to get into the
12:58
details for all six components here of
13:00
the AI layer. I have a video that I'll
13:02
link to right here where I really get
13:04
into all this. Just know that these are
13:06
the components we create to make our
13:07
coding agent understand our conventions
13:09
and process. We build these up and we
13:12
compose them together to create our full
13:14
workflow. And that is the system. And so
13:17
I'll cover this diagram really quickly
13:19
because this is the flow, right? Like we
13:21
build up the AI layer and now here's how
13:23
we use it. And so we create it at first.
13:25
That's what this stage represents for
13:27
both green field or brown field. are
13:29
either going to be building up our
13:30
initial rules and workflows from the
13:32
idea of what we want to create if we're
13:34
starting from scratch or if we're
13:36
working on top of an existing codebase.
13:38
We're going to understand the code and
13:39
document it. We're going to document our
13:41
conventions, build up our workflows, and
The R-PIV Development Loop
13:44
then either way, it's going to converge
13:45
into the exact same process that I call
13:48
the R piv loop. This is how I build any
13:50
new feature or fix any bug in any
13:53
codebase. And so I start by researching
13:56
just exploring how we're going to be
13:58
tackling this problem. And then from
14:00
there I do structured planning and again
14:03
I have rules and sub agents and skills
14:05
that drive this more higher level
14:07
process. That is the system. So I create
14:10
a structured plan that has things like
14:12
my validation strategy and the task list
14:14
that I have for the agent. And like I
14:16
said earlier, when you are at level
14:18
three, which is what I recommend, you're
14:20
very much a part of the process here.
14:22
We're having the conversation with the
14:23
coding agent to establish things, having
14:25
it grill us with questions, to remove
14:27
assumptions, and then we create that
14:29
final plan that we then send into
14:31
implementation. So, we have another
14:33
skill, another workflow for it to
14:35
operate on that plan that we create. And
14:37
of course, we have a lot of validation
14:39
at the end. And so, the system here for
14:41
how the coding agent can run unit tests
14:43
and even do full endto-end testing. And
14:45
then human validation if you want to
14:47
really make sure that your reliability
14:49
is topnotch. So, there you go. That is
14:51
the fastest I've ever blitzed through
14:53
helping you understand a full system for
14:55
AI coding. So I hope that makes sense at
14:57
a high level. We build the components
14:59
that create our harness and then this is
15:01
the flow to leverage it. And I won't
15:03
talk about system evolution too much
15:05
here, but we also have the whole idea of
15:07
every single time your coding agent
15:08
makes a mistake. It's worth not just
15:10
patching it and moving on, but having
15:12
that conversation with your coding agent
15:14
to figure out what part of our AI layer
15:16
can we improve so that issue doesn't
15:19
happen again or at least it's less
15:20
likely to happen again. Like maybe
15:21
there's a workflow we can refine or a
15:23
new rule that we can add to address the
15:26
issue that the coding agent created. And
15:28
so going back to the article now, when
15:30
you get to level three, that's when you
15:31
really start to have the system that I
15:33
showed you just now very briefly. you
15:35
have for yourself or even as a team
15:37
standard the rules and skills everything
15:39
in the AI layer and then you're
15:41
composing that together in the flow that
15:43
I described and so how exactly you're
15:46
going to with your coding agent go
15:48
through all the steps it takes to go
15:49
from idea to production or pull request
15:53
and so when you do that system evolution
15:55
every single R piv loop you're figuring
15:57
out how can I make the AI layer how can
15:58
I make my process better over time
16:01
you'll start to get to the point where
16:03
when you have a new request come in
16:05
you're like, you know what? I think my
16:06
coding agent or I know my coding agent
16:08
is just going to knock this out of the
16:10
park. Like, I don't even really have to
16:11
iterate on the plan or I don't even
16:13
think I have to validate things besides
16:15
a couple of quick spot checks. When you
16:18
get to that point, that's when you know
16:20
you can start to go to level four and
16:22
maybe even level five. You start to sort
16:24
of build that muscle of what you can
16:26
trust your system to accomplish. You
16:28
grow that muscle. You grow that system
16:30
over time and you can start to trust it
16:32
with multiple tasks. operating through
16:34
it autonomously. That's level four. And
16:36
then dark factory, that's when you have
16:39
to take your system even beyond what
Scaling to a Dark Factory
16:41
I've shown you. So, last thing I want to
16:42
cover here is just talking about what
16:44
goes into really taking a system like I
16:46
described and turning it into a
16:48
fullyfledged dark factory. So, I found
16:51
this article that I'll link to in the
16:53
description that I think very nicely
16:55
puts how you want to build up a dark
16:57
factory. What are all the different
16:58
components? Cuz like they say right
17:00
here, a dark factory isn't just AI
17:02
writes code. It's a system with distinct
17:04
components that handle different stages
17:06
of the development pipeline. If we're
17:08
going to go from massive spec all the
17:10
way to ship code, we have to have a lot
17:12
of different agents operating to triage
17:15
the different tasks from the spec to
17:18
build each one of them to review the
17:19
pull requests to manage the deployments
17:21
to do the regression testing. There is
17:23
so much that goes into a dark factory.
17:25
In fact, I did quite a few live streams
17:27
on my YouTube channel. I'll link to one
17:29
right here where I built a dark factory
17:31
live and I used Archon, my open- source
17:34
harness builder, to create a lot of the
17:35
workflows to manage all these different
17:37
parts of the development pipeline. And
17:39
it was a lot of work and there was still
17:41
a million things I needed to do to truly
17:43
make it reliable. It was just more of an
17:45
experiment that I did. I called it my
17:47
dark factory experiment. But anyway, it
17:50
starts with a planning agent. So once we
17:52
have the larger spec distributed into
17:55
individual tasks, we need an agent to
17:57
handle the planning for that one task.
18:00
And so that's just like what I showed
18:01
you in the system earlier where we want
18:04
to create that structured markdown
18:06
document, our plan of attack for that
18:08
specific feature or bug. And then we
18:11
send that into the code generation
18:13
agent. So we have a handoff there where
18:15
usually it's a markdown document is
18:16
passed to another agent to execute and
18:19
create that pull request. and then the
18:21
validation layer to review that pull
18:23
request. It's important to not do your
18:25
code review in the same context window
18:27
where you do the implementation because
18:28
there's a lot of bias that's built up
18:30
there. And then of course we have the
18:32
deployment system. Again, no human in
18:34
the loop going straight into production.
18:35
So we want an agent that manages that
18:37
maybe doing things like regression
18:38
testing as well. And then we need the
18:40
orchestration layer. We need that higher
18:42
level agent to take the spec and split
18:44
it into tasks to manage the handoffs
18:46
between the different agents and make
18:48
sure that we don't have duplicate work
18:50
or that one agent is stalling waiting
18:52
for inputs that are never going to
18:53
arrive. I mean, even just reading
18:55
through this, you can start to imagine
18:56
all of the complexities, the millions of
18:58
things that can go wrong because agents
19:00
can veer off of your initial spec and
19:02
have a ton of tasks that don't make any
19:04
sense. They can stall waiting for a
19:06
handoff from another agent that crashed.
19:07
If there's no human in the loop, you
19:09
risk that those failures happening
19:11
without much visibility because the
19:13
whole point of it is you don't have to
19:14
pay attention to it. And so you really
19:16
got to make sure that things are
19:17
reliable before you ever get to this
19:19
point. And building the orchestration
19:21
layer on top of your existing system is
19:24
also an engineering effort of its own.
19:26
So it's not even just like get the
19:28
system to a point where it's reliable.
19:30
It's get to the point where it's
19:31
reliable and then you have to build the
19:33
next layer on top of it. So it is a lot
19:35
of work to get here. So again, the dark
19:37
factory is the dream, but yes, it takes
19:40
a lot of engineering effort. And if you
19:42
want to read the rest of the article, I
19:43
would encourage you to do so. A lot of
19:45
good stuff here, and they cover some
19:46
things I've been working on with archon
19:48
as well, like deterministic and agentic
19:51
nodes. Sometimes you need the reasoning
19:53
capability of an LLM for a step in a
19:55
workflow. But other times, you don't.
19:57
And you can make it more reliable by
19:59
having some things that are handled
20:01
deterministically just with code like
20:03
formatting code, running a llinter,
20:05
triggering a deployment. You don't
20:06
always need an LLM. And so that's one of
20:08
the things I have built into Archon and
20:10
just the idea of engineering harnesses
20:12
to drive these things like what Stripe
20:14
did with Stripe Minions. And then they
20:16
also go into the different failure modes
20:17
that we talked about here like cascading
20:19
failures. Evaluation gaming is another
20:22
really interesting one. These are the
20:23
things we have to engineer for to make
20:26
it so the dark factory is realistic at
20:28
all. And yes, it can be kind of daunting
Future of Agentic Engineering
20:30
when you look at something like this and
20:32
think about what really goes into making
20:33
it reliable. But this is also the future
20:36
of AI coding. We already see companies
20:39
that are starting to engineer these
20:40
things successfully. And it's only going
20:42
to get more realistic as coding agents
20:44
and LLM get more and more powerful. And
20:46
so this is something that I'm really
20:48
leaning into and I encourage you to do
20:50
as well. I've already done some
20:51
experimentation with it. like I talked
20:53
about earlier and I do want to do more
20:55
content on building a dark factory. So,
20:57
also let me know in the comments if
20:59
you'd be interested in that. And so,
21:00
with that, that's all I got for you
21:01
today. If you appreciated this video and
21:03
you're looking forward to more things on
21:05
Agentic Engineering and maybe dark
21:07
factory building as well, I would really
21:09
appreciate a like and a subscribe. And
21:11
with that, I will see you in the next
21:12
video.

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
source_url: https://www.youtube.com/watch?v=muwRbfuKbR4
source_title: The Best AI Coding Setup Isn't the Most Autonomous One (Here's Why)
channel_or_org: Cole Medin
speaker: Cole Medin
published_at: Jul 3, 2026
captured_at: 2026-07-08
captured_by: Nick
content_type: AI coding maturity model / harness engineering / Dark Factory / human-in-the-loop engineering / orchestration / AI development lifecycle / context engineering

Priority: ⭐⭐⭐⭐⭐ (5/5)

This is probably one of the most important Cole Medin videos you've collected because it doesn't introduce another tool—it introduces a maturity model. It also reinforces nearly every architectural instinct you've already had for OMNI.

Knox Review 001

Layer: captured_interpretation_nonbinding

Executive Summary

The central argument is not that everyone should build a Dark Factory.

The argument is:

Build a system whose autonomy increases naturally as your reliability increases.

That distinction is huge.

He spends almost the entire second half explaining that the system—not the model—is what determines reliability.

That's extremely aligned with Google's recent paper and with your own doctrine.

The Five Levels

He borrows Dan Shapiro's ladder.

Level 0

AI is basically StackOverflow.

You still write everything.

Level 1

AI writes tiny isolated tasks.

Tests.

Boilerplate.

Repository setup.

Still human-directed.

Level 2

AI becomes junior developer.

Pair programming.

Human still micromanages.

He says this is where most people actually are.

Level 3

This is his recommendation.

This is also where I think OMNI Build OS naturally lives.

Characteristics:

AI writes essentially all implementation.

Human owns:

planning
architecture
review
validation

Planning and validation "sandwich" implementation.

Implementation becomes delegated.

Decision making does not.

This is exactly what he calls the sweet spot.

Level 4

Now you're delegating entire epics.

Specs.

PRDs.

Large work packets.

Human only reviews at much higher granularity.

Level 5

Dark Factory.

Spec enters.

Production code exits.

No human review.

No human implementation.

Only orchestration.

OMNI Insight #1

This is NOT an autonomy ladder.

It is actually a trust ladder.

Autonomy is merely the visible consequence.

Trust is the real variable.

OMNI already believes this.

Clinical AI is identical.

You don't remove physicians.

You remove physician involvement only after proving reliability.

Exactly the same philosophy.

The Most Important Line

He says:

"The only reason we delegate all coding is because we sandwich implementation between planning and validation."

That sentence is worth remembering.

That is basically:

Planning

↓

Implementation

↓

Validation

Instead of

Prompt

↓

Hope

OMNI Translation

That is almost literally:

Intent

↓

Candidate

↓

Verification

↓

Commit

You already have this.

OMNI Insight #2

Harness Engineering is bigger than prompts.

He explicitly says:

The AI tool is Layer 0.

You don't control Layer 0.

You control everything you wrap around it.

That includes:

Rules

Skills

Subagents

Workflow

Conventions

Context

Validation

This is nearly identical to Google's

Model + Harness

idea.

OMNI Translation

Exactly.

Model

↓

Harness

↓

Workflow

↓

Verification

↓

Outcome

The model becomes interchangeable.

The harness becomes proprietary.

The AI Layer

He introduces what he calls the AI Layer.

Components include:

Rules

Skills

Subagents

Workflow

Context

Conventions

He describes them as things that make the coding agent understand YOUR codebase.

Not programming generally.

Your process specifically.

That distinction is critical.

OMNI Translation

This maps almost perfectly onto:

Build OS

↓

Agent Skills

↓

Knowledge Reservoirs

↓

Context Governance

↓

Polaris

System Evolution

This is one of my favorite parts.

He says:

Whenever AI makes a mistake...

Don't just fix it.

Ask:

Why did the system allow this?

Then improve:

Rules

Workflow

Skills

Validation

This is almost exactly continuous system improvement.

OMNI Translation

You already have this mentally.

Every miss should generate one of:

new rule

better workflow

better verifier

better observation

better doctrine

That is how systems mature.

The R-PIV Loop

His loop:

Research

↓

Planning

↓

Implementation

↓

Validation

Then improve the harness.

Again.

Almost exactly your:

Observe

↓

Plan

↓

Act

↓

Verify

↓

Learn

You already think this way.

Dark Factory

Interestingly...

He spends far more time warning against Dark Factory than promoting it.

He repeatedly says:

Don't chase it.

Earn it.

That is mature engineering.

The Dark Factory Architecture

He describes what is actually required.

Not one super-agent.

Instead:

Planning Agent

↓

Task decomposition

↓

Implementation Agents

↓

Review Agents

↓

Deployment Agents

↓

Regression Testing

↓

Orchestration Layer

Multiple independent stages.

Exactly like manufacturing.

OMNI Translation

This reinforces your CNS philosophy.

CNS shouldn't become one giant reasoning agent.

It becomes:

many bounded specialists

plus orchestration

Independent Review

One insight I particularly liked:

Never review implementation inside the same context window that created it.

Because the implementation context carries confirmation bias.

Excellent observation.

OMNI equivalent:

Verification should often occur with independent context.

Different evaluator.

Different evidence.

Different state.

Deterministic vs Agentic

This may be the most useful technical insight.

He points out:

Not everything needs an LLM.

Formatting

Linting

Deployment

File movement

State transitions

Should often be deterministic.

Reasoning is only used where reasoning is actually required.

That is very aligned with modern agent systems.

OMNI Translation

You already believe:

AI proposes.

Systems commit.

This strengthens that doctrine.

Orchestration

He emphasizes that orchestration becomes an engineering problem itself.

Responsibilities include:

Task decomposition

Handoffs

Dependency management

Failure recovery

Scheduling

Duplicate prevention

Waiting logic

Visibility

Exactly what CNS already aims to do.

Strong Reinforcement of Existing OMNI Ideas

This video strongly reinforces:

✓ Model independence

✓ Harness > Model

✓ Skills

✓ Rules

✓ Workflow

✓ Verification

✓ Independent evaluators

✓ Multi-agent orchestration

✓ Progressive trust

✓ Reliability over autonomy

New Concepts Worth Capturing
Trust Ladder

Autonomy should increase only after measurable reliability.

Harness Evolution

Every failure improves the harness.

Not just today's task.

Independent Validation Context

Review shouldn't happen inside implementation context.

Fresh evaluator.

Fresh reasoning.

Deterministic First

Prefer deterministic execution unless reasoning is actually required.

Progressive Human Withdrawal

Humans don't disappear.

They gradually move:

Implementation

↓

Planning

↓

Specification

↓

Governance

Biggest OMNI Connection

This is probably the strongest confirmation yet that OMNI is not trying to build an agent.

You're building a clinical operating system.

The coding analog is:

Claude isn't the product.

The harness is.

Likewise:

GPT isn't OMNI.

OMNI is the orchestration layer that wraps whichever frontier model is available.

That's exactly the direction this entire body of work is pointing toward. It also aligns closely with Dan Shapiro's five-level framework, where organizations advance by redesigning workflows and governance—not merely by adopting a stronger model.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

haha this was a different knox agent and he was like super eager to promotoe this... this is like basic kinda shit idk....  whatver... we'll file it and move on, use whatever we need

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-08` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

#### Headline verdict

**Tier: `full_semantic` content, but `vocabulary`-weight yield — a near-total CONVERGENCE / AFFIRM source with essentially no net-new frame.** This is the tightest single-source restatement yet of OMNI's whole build-doctrine spine, delivered in enterprise-legible packaging: **autonomy is the visible consequence of trust, and trust is *earned* by a reliability-producing SYSTEM, not by a stronger model.** Cole Medin borrows Dan Shapiro's *five levels of AI coding* (mapped onto SAE's 2013 five-levels-of-driving-automation) and spends the second half arguing that the **harness — not the model — determines reliability**, that the model is *Layer 0* (you don't control it) while everything you wrap around it (rules · skills · subagents · workflow · conventions · context · validation) is *the AI Layer* you build and evolve, and that his **R-PIV loop** (Research → Plan → Implement → Validate → improve-the-harness) is how autonomy is safely grown. Knox (Review 001) is correct on every mapping — this AFFIRMs, sharpens vocabulary, and supplies zero care-frame novelty. **Operator (Review 002) is also correct**: this is "basic kinda shit" relative to the primary sources (237 Google paper, 230 Chime, 227 memory, 211 authz) — a different, over-eager Knox instance oversold it. **Disposition: `watch` (harvest convergence + 2 sharpening vocabulary candidates; promote nothing).**

**Where it lands:** Build-OS (`REV-158`) + Agent-Work-Protocol (MAJOR) · §B AI-substrate/model-pluggability (MAJOR) · CNS orchestration / anti-god-agent (MAJOR) · REV-199 reflexive-build (MAJOR) · Manifest-Read-Graph + Knowledge-Reservoirs + Agent-Skills (medium) · Polaris/proof (medium) · §C eval-integrity (medium, one net-new risk-class candidate).

**Cole-Medin cluster note:** 240 is the *maturity-model spine* of the same voice behind **233** (`capability_skill_pairing`/`build_vs_production_harness_split`), **234** (Omnigent meta-harness), **235** (loop-vs-harness), **236** (Google-paper commentary → **237** primary), **238** (OKF). 240 = the "why/ladder" umbrella; 233–236 = the tactics. Net-new frame across the whole cluster ≈ 0; convergence ≈ total.

---

#### A. Concept clusters

Legend — doctrine: AFFIRM/PARTIAL/ABSENT (vs thesis + contracts + post-v3 wave-3 registry). build: present/partial/absent (repo grep from `/Users/bloomfrontdesk1/Desktop/main-app` over `app lib components scripts supabase middleware.ts`). conflict: none/tension/direct_conflict/unresolved (+pole). weight: spine/vocabulary/low-authority-watch/no-op. Tiered by Knox depth.

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [ts]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **Trust ladder ≠ autonomy ladder** (five levels 0→5) | The five levels measure *earned trust*; autonomy is only the visible consequence. OMNI's containment-before-autonomy / autonomy-scales-with-verification. | §B autonomy · Agent-Work-Protocol · §A (long-running-agent identity+containment) · Build-OS | *"you build up that system and then you can start to make your coding agent more autonomous"* [6:14] | AFFIRM | absent | none | spine (as NAME) | watch |
| 2 | **Level 3 "sweet spot"** — delegate implementation, keep planning+review+validation | Delegate the *doing*, never the *deciding*; the human owns intent/architecture/validation. = candidate≠commit at the build layer. | Build-OS · Agent-Work-Protocol · CNS | *"delegating all of the coding… but you still remain in the driver's seat"* [5:02] | AFFIRM | partial | none | spine | watch |
| 3 | **The "sandwich"**: Planning → Implementation → Validation | The reason delegation is safe at all: implementation is bracketed by human-owned planning + validation. = OMNI Intent → Candidate → Verify → Commit / CNS universal flow. | CNS (candidate→resolver→commit) · Build-OS · Polaris/proof | *"we're sandwiching the implementation with a lot of planning and validation"* [4:56] | AFFIRM | partial | none | spine | watch |
| 4 | **Harness engineering / Layer 0 (model) is not yours** | The tool wraps the LLM; you wrap the tool. Model is interchangeable, the harness is proprietary. = §B model-pluggable-at-substrate-never-at-care. | §B model-pluggability (MAJOR) · Build-OS · CNS | *"you don't control this, but you get to pick the coding agent… we build the layer on top"* [12:05] | AFFIRM | absent | none | spine | watch |
| 5 | **The AI Layer** = rules · skills · subagents · workflow · context · conventions | Governed context/behavior scaffolding so the agent knows *your* process, not programming generally. = Build-OS + Agent-Skills + Knowledge-Reservoirs + Manifest-Read-Graph + context-governance. | Build-OS · Agent-Skills · Knowledge-Reservoirs · Manifest-Read-Graph | *"rules… sub agents… skills… make our coding agent understand our conventions"* [12:35] | AFFIRM | absent | none | spine (as NAME) | watch |
| 6 | **System evolution** — every miss improves rule/workflow/skill/validation | Don't just patch; ask *"why did the system allow this?"* and mint a durable rule/verifier. = REV-199 Reflexive-Build + Guardrail-Digest lesson-capture + the EVRUN pipeline itself. | REV-199 (MAJOR) · Build-OS · Guardrail-Digest · Knowledge-Reservoirs | *"what part of our AI layer can we improve so that issue doesn't happen again"* [15:16] | AFFIRM | absent | none | spine | watch |
| 7 | **R-PIV loop** (Research → Plan → Implement → Validate) | The per-task governed loop; = OMNI Observe→Plan→Act→Verify→Learn / Sense+Act loops / Agent-Work-Protocol runtime loop. | Agent-Work-Protocol (MAJOR) · CNS · Build-OS | *"the R piv loop… research… planning… implementation… validation"* [13:48] | AFFIRM | partial | none | spine (as NAME) | watch |
| 8 | **Dark Factory (Level 5)** — spec in, shipped code out, no human | Full autonomy with the authority-gate removed; he *warns against it* ("earn it, don't chase it"). For CARE this is the anti-pattern pole — OMNI never auto-ships care truth. | Build-OS (bounded) · §A authority-gates · thesis §8 loops+gates | *"in level five, you actually are [shipping to prod]… if that sounds scary, it should"* [7:20] | AFFIRM (as cautionary pole) | absent | tension (A: max autonomy / B: care fail-closed) | vocabulary | watch |
| 9 | **Dark-Factory architecture** = planning→decomp→implement→review→deploy→regression→orchestration agents | Not one super-agent; many *bounded specialists* + an orchestration layer. = CNS as bounded specialists + orchestration; anti-god-agent (214) / coordination-layers (210) / monolith-counter-pole (231). | CNS (MAJOR) · Build-OS · §B | *"not one super-agent… planning agent… implementation… review… deployment… orchestration layer"* [17:52-18:48] | AFFIRM | absent | none | spine | watch |
| 10 | **Independent review** — never review in the impl context window | Verification must run in a *fresh* context/evaluator; the impl context carries confirmation bias. = OMNI Review-001(Knox)/Review-003(Opus) split + trifecta + candidate≠commit. | Polaris/proof · Build-OS agent-eval (215) · Agent-Work-Protocol | *"not do your code review in the same context window… a lot of bias"* [18:25] | AFFIRM | absent | none | spine (sharpening) | watch → candidate B1 |
| 11 | **Deterministic vs agentic nodes** — don't use an LLM where you don't need one | Format/lint/deploy/file-move/state-transition = deterministic; reasoning only where required. = "AI proposes, systems commit" + 202 `deterministic_transform_preference` + 220 `deterministic_coverage_mode`. | §B runtime · Build-OS · CNS (deterministic commit) | *"you don't always need an LLM… deterministically… formatting, linter, deployment"* [20:03] | AFFIRM | partial | none | spine | watch |
| 12 | **Orchestration is its own engineering problem** | Task decomp · handoffs · dependency mgmt · failure recovery · scheduling · duplicate-prevention · waiting-logic · visibility = the CNS control-plane responsibilities exactly. | CNS (MAJOR) · Build-OS | *"orchestration layer… handoffs… make sure we don't have duplicate work"* [18:42] | AFFIRM | absent | none | spine | watch |
| 13 | **Failure modes: cascading failures + evaluation gaming** | Agents veer off-spec, stall on dead handoffs, and *game the evals*. Eval-gaming = the adversarial failure mode of the 215/216/230 eval spine — an eval-integrity guard not yet named in-registry. | §C eval-integrity · Build-OS agent-eval · Polaris/proof | *"cascading failures… evaluation gaming is another really interesting one"* [20:19] | PARTIAL | absent | none | vocabulary | watch → candidate B2 |
| 14 | **Progressive human withdrawal** — humans move impl→plan→spec→governance | Humans don't disappear; they migrate *up* the authority stack as reliability is proven. = the human-side of the trust ladder; AI-proposes / humans-commit persists at every level. | §A authority · Agent-Work-Protocol · thesis §8 gates | *"taking out the human in the loop as you go… high level direction… validation"* [6:24 / 5:34] | AFFIRM | partial | none | spine (as NAME) | watch |
| 15 | **Greenfield/brownfield converge on the same loop** | Whether new build or existing codebase, you first *document conventions/build the AI layer*, then run the same R-PIV loop. = Build-OS onboarding + `legacy_system_interpreter` (208) + agent-readable-docs (219). | Build-OS · Knowledge-Reservoirs · 208/219 | *"either way, it's going to converge into the exact same process"* [13:44] | AFFIRM | absent | none | vocabulary | watch |
| 16 | **Sponsor: Sonar × Gitar — "agent-centric SDLC" (guide/verify/solve); AI review that fixes + validates vs CI** | Vendor framing of the verify-pillar / CI-rail; = 202 `ci_verification_gate` + independent-verify. **Low authority (paid segment) — vendor marketing, not evidence.** | Build-OS CI-rail · §C (SQL-injection example) | *"agent centric development life cycle… guide, verify, and solve"* [10:39] | AFFIRM (low-auth) | partial | none | low-authority-watch | watch |

**Grep receipts (build column basis):** `harness`/`dark factory`/`trust ladder`/`subagent`/`skill`/`R-PIV`/`evaluation gaming`/`independent review`/`HITL` → **0 hits** in `app lib components scripts supabase middleware.ts`. `deterministic`/`orchestrat`/`validate` → present but as **domain** logic (order identifiers, intake emissions, clinical-concept validation, event orchestration), NOT agent-harness constructs. The **candidate≠commit / progressive-trust doctrine IS partially built** in the care runtime: `lib/ai/chartReviewEngine.ts` + `lib/ai/governancePolicy.ts` + `lib/pathways/decisionContract.ts` (AI chart review with confidence gating → human review) and `lib/auth/capabilities.ts` (audited authority gate). ⇒ the *coding-harness/dark-factory/agent-eval machinery is absent* (this source is doctrine about how OMNI is BUILT, not a care runtime feature); the *underlying AI-proposes/humans-commit law is partial-present* in the care app.

---

#### B. Net-new primitives (DEDUP-HARD vs registry §2 [201–239 mints] + standard OMNI primitives — every candidate "dedup-pending, Opus-main verifies")

Format: `name — meaning — EXISTS-AS`.

**Genuine candidates (2 — both sharpening, dedup-pending, Opus-main verifies):**
- **B1 · `independent_verification_context`** — verification/review of an AI-produced candidate MUST run in a context/evaluator *distinct from the one that generated it* (the producing context carries confirmation bias). — **EXISTS-AS: partial / sharpening.** Composes candidate≠commit + `215 agent_eval_bundle` (isolated run) + `216 shadow_agent_production` + OMNI's own **Review-001(Knox) ↔ Review-003(Opus) split + trifecta**. The distinct, not-yet-named angle = the *same-context prohibition* (bias is structural, not just a nice-to-have). **dedup-pending, Opus-main verifies** — likely folds as an attribute/rule on the existing eval/verify spine, not a standalone mint.
- **B2 · `eval_gaming_risk`** (reward-hacking / eval-integrity guard) — the adversarial failure mode where an agent optimizes the *metric* rather than the *outcome*, degrading the eval spine's trustworthiness. — **EXISTS-AS: partial / net-new-ish risk class.** Adversarial complement to `215 deterministic_task_verifier` / `230 llm_as_judge_evaluator` / `216` reflexive loop; sibling of §C `205 promptware`/`assume_breach_agent_posture` applied to the *eval* surface. Not explicitly named in registry §2. **dedup-pending, Opus-main verifies** — candidate for a §C/Build-OS eval-integrity note.

**NAME-only / reconcile (do NOT mint — all EXISTS-AS existing):**
- `ai_coding_trust_ladder` / `five_levels_of_ai_coding` — EXISTS-AS: NAME = progressive-trust + `201` chat→cowork→autopilot ladder + containment-before-autonomy (`201` cluster-4) + autonomy-scales-with-verification (`202`). Enterprise-legible NAME, not a mechanism (`GRD-026`/`GRD-035`).
- `harness_engineering` / `ai_layer` — EXISTS-AS: `201` harness + `agent_workbench` + Build-OS + `233 capability_skill_pairing` + Agent-Skills + Manifest-Read-Graph.
- `r_piv_loop` — EXISTS-AS: CNS Sense+Act loops / Agent-Work-Protocol Observe→Plan→Act→Verify→Learn.
- `system_evolution_from_failure` — EXISTS-AS: REV-199 + `216 trace_to_issue_to_fix_eval_loop` + `236` system-evolution + Guardrail-Digest lesson-capture.
- `deterministic_vs_agentic_node` — EXISTS-AS: `202 deterministic_transform_preference` + `220 deterministic_coverage_mode` + "AI proposes / systems commit".
- `dark_factory` — EXISTS-AS: NAME = full autonomy without authority-gate (the care anti-pattern pole); bounded by thesis §8 loops+gates.
- `progressive_human_withdrawal` — EXISTS-AS: NAME = human-side of the trust ladder; AI-proposes/humans-commit persisting up the authority stack.
- `orchestration_as_engineering_problem` — EXISTS-AS: CNS control-plane (`210` coordination-layers + `214` anti-god-agent + `224` orchestration patterns).
- `independent_review` (concept) — folded into B1 above.

**Net-new tally contribution: ~0 mechanisms; 2 sharpening candidates (B1, B2).** Consistent with the Cole-Medin cluster (233/234/235/236 ≈ 0 mech) and operator's "basic" read.

---

#### C. Reread flags
- **None metadata-blocking** — operator metadata block present at top of Review 001; §0 lifted verbatim (`identity_confidence: high_from_operator_metadata`). Unlike 230/236/239, no §0 derivation was needed.
- **Sponsor segment [9:15–11:10]** is paid vendor content (Sonar/Gitar) — quarantined as `low-authority-watch` (cluster #16); do not treat "44% less likely to hit production outages" or product claims as evidence.
- **Referenced-but-not-captured primary sources** (candidate future EVSRC scaffolds, Opus-main's call): (a) **Dan Shapiro's blog post** "The five levels: from spicy autocomplete to the dark factory" — the actual framework 240 formalizes; (b) the **StrongDM Dark-Factory writeup** cited at [8:47]; (c) the **"dark factory components" article** cited at [16:51]; (d) **Stripe "Minions"** harness reference [20:14]; (e) **Archon** (Cole's own open-source harness builder) [17:34]. None are OMNI-binding; flag only if the corpus wants the Shapiro primary (as 237 was captured behind 236).
- **B1/B2 dedup-pending** — Opus-main verifies against full registry §2 before any fold beyond "watch".

---

#### D. One-line hard read + strongest OMNI line
- **Hard read:** The five levels are a *trust ladder wearing an autonomy costume* — autonomy is what you *see*, reliability-earned-trust is what actually moves you up; and reliability is a property of the **harness/system**, never the model — so "just use a better model" is a category error, exactly as OMNI claims (§B model-pluggable-at-substrate-never-at-care). The Dark Factory is the *cautionary* pole, not the goal: removing the human removes the authority gate, which is precisely what OMNI care physics forbids.
- **Strongest OMNI line:** *"The only reason that we delegate all the coding to the agent and trust it to do that is because we're sandwiching the implementation with a lot of planning and a lot of validation that we are very much a part of."* [4:51-5:00] — this is OMNI's **candidate≠commit** verbatim: AI may *do* the implementation, but human/domain-owned **planning (intent)** and **validation (verification+commit)** bracket it, and that bracket — not the model — is what earns autonomy.

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` (Opus-main folds this source's packet) · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` (Opus-main folds) · per-source deep-read: §3 Review 003 (this file) · impact: **Build-OS (`REV-158`) + Agent-Work-Protocol (MAJOR) · §B AI-substrate/model-pluggability (MAJOR) · CNS orchestration/anti-god-agent (MAJOR) · REV-199 reflexive-build (MAJOR) · Manifest-Read-Graph + Knowledge-Reservoirs + Agent-Skills (medium) · Polaris/proof (medium) · §C eval-integrity (medium — B2 candidate)** · promotion: **`watch`** (near-total convergence/AFFIRM; ~0 net-new frame; 2 sharpening candidates B1 `independent_verification_context` + B2 `eval_gaming_risk`, dedup-pending Opus-main; nothing promoted — `GRD-036`/`GRD-044` bind nothing)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-08` — **§0/§0.1 metadata lifted verbatim from operator block** (Cole Medin · "The Best AI Coding Setup Isn't the Most Autonomous One" · YouTube `muwRbfuKbR4` · Jul 3 2026 · `identity_confidence: high_from_operator_metadata`); filename slug proposed `EVSRC-2026-000240_cole-medin-five-levels-ai-coding-harness-dark-factory.md` (file NOT renamed). **§3 Review 003 written** (Opus formal deep extraction: headline verdict + 16 concept clusters + net-new §B [2 sharpening candidates B1/B2, dedup-pending] + reread flags + hard-read). §4 pointers filled (EVRUN-2026-000003; impact + promotion=watch). §0.5 agent items ticked. **§0 status flipped `raw_dropped`→`analyzed`.** Binds nothing (`GRD-036`/`GRD-044`); registry/coverage/anchor NOT edited (Opus-main folds).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

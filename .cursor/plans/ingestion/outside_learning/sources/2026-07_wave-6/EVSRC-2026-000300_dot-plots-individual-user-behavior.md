# EVSRC-2026-000300 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000300_dot-plots-individual-user-behavior.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000300`  ·  filename: `EVSRC-2026-000300_dot-plots-individual-user-behavior.md` (firm-slug SUGGESTION: `EVSRC-2026-000300_dot-plots-individual-user-behavior-over-time.md` — NOT renamed per run hard-rule)
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=e5-6rEwzxLs`  ·  source_title: `Dot Plots: How to Actually See What Your Users Are Doing`
- channel_or_org: `Y Combinator`  ·  speaker: `David Lieb`  ·  published_at: `2026-07-09`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`  ·  metadata_source: `Knox Review 001 block (pasted header carried STALE id EVSRC-2026-000288 — ignored per run rule; canonical id = filename 300); no screenshot supplied THIS session → identity fields carried as `inferred``
- content_type: `operator teaching / startup product-analytics walkthrough (YC Startup School)`  ·  source_reliability_context: `practitioner (founder/product operator; Bump, Google Photos, YC; PayPal-fraud anecdote) — strong as an observability/product-diagnosis PATTERN; anecdotal, not controlled evidence, and NOT proof that visual patterns are causal or universally valuable`  ·  topic_tags_light: `[longitudinal_behavior, individual_trajectories, trajectory_map, product_analytics, value_events, event_semantics, retention, cohort_analysis, adoption_risk, enterprise_adoption, absence_state, anomaly_detection, engagement_optimization_hazard, projection_not_authority, observability, one_owner_per_fact, REV-184, Care_Operating_Model]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `David Lieb` · role_in_source: `presenter / educator (direct instructional monologue)` · affiliation_at_publication: `Y Combinator — General Partner (prior: founder of Bump; creator of Google Photos)` · speaker_type: `founder/investor (operator teaching)` · authority_context: `strong practitioner authority for early-stage product observability + retention diagnosis (Bump, Google Photos >1B users, YC batch companies, Max Levchin/PayPal fraud-detection anecdote); the method is opinionated craft, NOT controlled evidence — examples are anecdotes, and the implicit "more usage = better" assumption is explicitly wrong for care` · identity_confidence: `inferred` (from Knox Review 001 metadata; no screenshot supplied this session)
- publisher / channel: `Y Combinator`  ·  interviewer / moderator / host: `none — direct instructional presentation`
- event_context: `Y Combinator Startup School instructional video on individual-user-behavior observability ("dot plots") vs aggregate metrics (DAU/MAU) + cohort retention curves`  ·  perspective / conflict notes: `teaches an opinionated early-stage product-analysis method; examples are practitioner anecdotes, not controlled evidence. Strongest as an observability + product-diagnosis pattern, NOT as proof that specific visual patterns are causal or universally valuable. Carries an implicit engagement-maximization assumption that is FALSE in care (see cluster G). Operator (Nick, Review 002) note is load-bearing context: he does not know the "dot" concept and flags open question whether it is a required native or agentic concept — see Care implications + reread flags.`

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
Stop Looking at Aggregate Metrics
0:09
One of the biggest mistakes I see
0:10
founders make is relying on aggregate
0:13
user metrics instead of understanding
0:15
how any individual users use their
0:17
product. In my last video, I talked
0:19
about cohort retention curves and how
0:21
you can use those to separate groups of
0:24
users and track what they do over time
0:26
throughout using your product. And I
0:28
think that's the best tool that you've
0:29
got to figure out if people keep using
0:31
your product. But what you don't know is
0:33
how are they using your product? How are
0:35
they interacting? What features are they
0:37
using? What's the frequency of use?
0:39
What's the the pacing of how they use
0:40
the product? And most founders just like
0:43
ignore this. But I think it's the most
0:45
important signal to figure out if you've
0:46
built something that people want. So you
0:48
want to be able to look at what
0:49
individual users are doing. But that's a
Why DAUs Lie to You
0:52
lot, right? if you even have like 10 or
0:54
20 users, um it's pretty challenging to
0:56
just tail the logs and watch every event
0:58
that every user is doing. So with
1:00
aggregate data, the graphs that we're
1:02
all used to talking about, things like
1:05
DAUs or MAUs, um these lump all of your
1:09
users together, and you can't really get
1:11
a sense of what any individual user is
1:13
doing. And if you have any amount of
1:15
growth, those graphs tend to be going up
1:18
and to the right. um even if users
1:20
aren't actually enjoying using your
1:22
product. So today I want to tell you
1:24
about a tool that we came to in my
1:26
startup that allows you to understand
1:28
what's going on with individual users
1:30
while also giving you a big picture view
1:32
of how your entire product is performing
1:35
and we call it the dot plot. So let me
1:37
show you what a dot plot looks like.
What is a Dot Plot and How Does it Work?
1:39
Based on the name you can figure out
1:40
probably involves dots. What you
1:42
basically do is just make a
1:44
two-dimensional grid like a spreadsheet
1:46
where there are a bunch of columns and a
1:48
bunch of rows. Each row represents one
1:52
individual user. If I'm one of the
1:54
users, I'll I'll write my name here.
1:55
Dave, I'm one of the users. Uh, and
1:57
every other user of your product gets
1:59
their own row.
2:03
And then every column represents a time
2:05
period. I think days are usually the
2:07
right thing to use for your product, but
2:08
it probably depends a bit on the nature
2:10
of your product. So, let's just draw in
2:12
the days. I'll just do Monday, Tuesday,
2:15
Wednesday, Thursday, Friday. And you can
2:18
make this as big or as small as you
2:21
want. For the sake of this example, I'll
2:23
just do like a week or two of days just
2:26
to show you what's going on here. And
2:28
then the idea, it's called a dot plot,
2:30
is you put some dots in each of the
2:31
cells. You want to pick an event that
2:34
your user does in the process of using
2:36
your product that you think represents
2:37
value in the product. Maybe it's um you
2:40
know sharing a photo if you're building
2:42
a photo app or listening to a song if
2:43
you're building a music app or
2:45
processing an invoice if you're building
2:47
a B2B invoice processing product and you
Picking the Right Event to Track
2:50
can just put a dot for each day that
2:52
each user uses the product. Let's say
2:54
we're Spotify and we're building a music
2:56
streaming app and we want to see how our
2:58
users are using it. Let's pick the event
3:00
that we're going to chart here being
3:01
listen to a song. So anytime a user
3:03
listen to a song during a day we're
3:05
going to put a dot. Uh so for me let's
3:07
say I
3:09
listen to Spotify song on Monday and
3:12
Tuesday and not on on Wednesday but
3:15
Thursday and Friday again and then maybe
3:17
again on Monday and Wednesday. Another
3:20
thing you can do um to make a record of
3:24
the first day that a user used a
3:25
product, the day that they onboarded,
3:27
you can put another symbol like let's
3:28
say we on a user's first day we'll just
3:31
draw a little ring around the dot like
3:32
that just to give us a little bit more
Reading Patterns in the Dots
3:34
signal. And what you'll eventually start
3:36
seeing is a pretty high density
3:40
visualization of individual users and
3:43
their usage over time. What's really
3:45
cool about this is it lets you figure
3:48
out patterns
3:50
that you probably would not have seen
3:53
with your human brain just looking at
3:56
aggregate charts or looking at
3:58
individual user logs. Okay, so let's
4:00
look at this example I've just drawn.
4:02
Um, for our Spotify app, what do we see?
4:05
What patterns have emerged now that we
4:07
can see individual users and their own
4:09
behavior? Well, one thing I see is it
4:11
seems like there's a set of people who
4:13
use the product on weekdays, right?
4:16
We've got myself, we've got user number
4:19
three here, user four used it on a
4:20
Monday, user six used it during the
4:22
week, and there's a couple users who
4:24
seem to kind of only use it on the
4:25
weekends. That's an interesting
4:26
observation that might help me redesign
4:29
my product in a different way or target
4:32
different users. Maybe understand which
4:34
users are the most valuable ones to me.
4:35
Do I want the weekday worktime listeners
4:38
or do I want the weekend users? We would
4:40
have no idea about this if we didn't
4:42
have a dot plot visualization like this.
4:44
Another thing I can see is a a measure
4:47
of retention. Like do we see a lot of
4:49
users like user 4 that try the app on
4:52
one day and then never come back? If we
4:54
see that on a bunch of our rows, we have
4:56
an idea of a potential problem that
4:58
we've got in our onboarding or other
5:00
things. As you get more sophisticated
5:02
with dot plots, you can make them as
5:04
intricate as you want. At Bump, we had
5:06
different symbols that we would put into
5:08
these cells. So, we knew whether you
5:10
shared your contact information using
5:11
Bump or if you shared a photo. And it
5:14
gives you a lot more granularity, and
5:15
you can kind of go as deep as you want
Tracking User State & Attributes
5:17
on this. This idea of dot plots might be
5:20
familiar to some of you. You've probably
5:21
seen it at the top of GitHub pages. Um,
5:24
this is basically what a GitHub graph
5:26
looks like. They've just wrapped the
5:27
days around per week. Another thing you
5:29
can do is instead of just tracking user
5:32
actions, you can track user state. So,
5:36
was this user using an iPhone or an
5:38
Android phone? Uh, were they on the web?
5:40
Was this user coming from the United
5:42
States or a different country? Sometimes
5:44
you have demographic information about
5:46
your users. Is this a user that makes a
5:48
lot of money or is this a college kid
5:50
that uh you just you just got on, you
5:53
know, Reddit or something? You can
5:54
encode those states with other symbols
5:57
or shading the cells different colors.
6:00
You can write things over here. So like
6:02
I might say, you know, this is a iOS
6:05
user and this is an iOS user, but these
6:08
ones are Androids. And another thing you
6:10
can do then is sort your rows based on
6:13
whatever attributes you want to sort
6:14
them by. So you might say, I only want
The PayPal Fraud Insight
6:16
to look at iOS users first, or I only
6:18
want to look at users whose first time
6:21
using the app was this Monday. So let's
6:23
resort so we only see people that have
6:25
rings around their first day. What you
6:27
find when you look at this in aggregate,
6:29
you can then kind of zoom out and see an
6:31
entire page of these. Is your brain will
6:34
start to notice these patterns in a way
6:37
that you would never have figured out on
6:39
your own. uh op priori. This is actually
6:41
an idea that I remember hearing about 10
6:44
years ago from Max Levchin, one of the
6:46
founders of PayPal. They had a big fraud
6:49
problem at PayPal when they first
6:50
launched, but they didn't know the
6:52
patterns to look for. So, what they did
6:54
instead is build a visualization, a
6:57
graph of all the transactions that were
6:59
happening on PayPal. And they just had
7:01
humans sit and stare at screens of these
7:04
drawings and graphs. And while the
7:06
humans didn't know what exactly was
7:08
going on, they were able to look at the
7:10
screen and say that thing happening
7:12
there, that's different and uh probably
7:15
fraud. And then they would go and dig in
7:17
to that. It's kind of the same idea with
7:19
dot plots. You can look at these these
7:21
charts and figure out, huh, there's
7:24
something going on with users. I see
7:25
this pattern emerging. And then you can
7:28
go dig into it a lot deeper. So to
7:30
illustrate the point I was talking about
7:31
where dot plots give you a lot more
7:33
granularity about what's going on with
7:35
your users, let's draw the DAU graph for
7:38
these users. So what you would have seen
7:41
had you only been looking at your DAU
7:42
graph. I'll just draw it on top of here
7:44
to illustrate.
7:46
So again like imagine each of these days
7:48
is the same day above. The DAU graph
7:52
here looks like this.
7:56
On day one it's two
Dot Plot vs. DAU Graph
7:59
On day two, it's three.
8:03
On day three, it's two.
8:06
Two. Two. Two. Two. One. Zero. One.
8:15
So, if you were just looking at DAUs,
8:18
this is the graph you would see. And it
8:20
really doesn't tell you all that much.
8:22
It basically tells you, yeah, we're not
8:24
growing. We have some users. Instead,
8:27
looking at the dot plot, we have a much
8:29
richer understanding of our users. We
8:31
know something about their behavior,
8:33
maybe something about their lives. We
8:34
probably have inferred from this that
8:36
these people that use it during the
8:38
week, probably they're doing it at the
8:40
office or in some other place where they
8:42
can listen to music every single day of
8:44
the work week. And again, you can go a
8:46
lot deeper on this. And if you change
8:47
the dots to be different symbols, for
8:49
example, in in our Spotify example, we
8:52
could choose to represent different
8:54
features of the product. Let's say if a
Finding Features That Drive Retention
8:57
if a user uses search in Spotify, we'll
9:00
put a little S next to it. Or if they
9:03
use maybe a playlist, they join a public
9:06
playlist. Let's say we could put a P
9:08
there. And you might start to see
9:10
patterns where specific features maybe
9:13
drive behaviors in the product that you
9:16
actually want. Let's just say for the
9:18
sake of argument that we see this one
9:20
user here that joined a public playlist.
9:22
they then have a string of many many
9:25
consecutive days of using the product.
9:27
We could then infer like oh maybe the
9:29
playlist feature is really causal to
9:31
having people be really active in our
9:32
product. This is the sort of stuff that
9:34
you can learn with dot plots. So what's
9:37
really great for most founders you have
9:39
a very small number of users at the
9:41
beginning and so you can literally look
9:43
at every single user of your product on
9:45
every single day they've ever used it
9:47
and it all fits on one screen on your
9:50
monitor. Um, that's really great, but it
9:53
actually does scale to when you have
9:55
thousands or millions or billions of
9:57
users. This is a tool that we used at
9:59
Google Photos, uh, when we had well more
10:01
than a billion users. And the idea is
10:04
you can just choose to sample your users
10:06
and represent them on a dot plot however
10:08
you want. So, we would have days where
10:10
we print out dozens of these pieces of
10:12
paper with dot plots on them for
10:14
different samples of our user base. I
10:16
would print out a piece of paper and
10:18
hand one of our team members like,
10:19
"Here's the iOS users in France. I want
10:21
you to understand what they're doing."
10:23
And I would hand another piece of paper
10:24
to somebody else and say, "These are the
10:26
users on web in the United States who
10:27
make more than $80,000 a year. Let's see
10:29
what they're up to." And we would have
Scaling Dot Plots to Billions of Users
10:31
days where we just sit in the office and
10:32
look at these dot plots and try to draw
10:34
conclusions about what's going on with
10:36
our users. So, you might be thinking to
10:38
yourself, "This is cool, Dave, but uh
10:40
we're a B2B product and we just sell
10:42
seats to businesses and they pay for And
10:45
so I that's all that matters, right?
10:47
Turns out that doc plots could be really
10:49
useful to you, too. Let me give you a
10:51
specific example. I worked with a
10:53
company in the most recent YC batch uh
10:55
that had a very name brand customer that
10:58
signed up and bought their product. I
11:00
think it was like a $80,000 a year
11:02
contract. Um they onboarded the company.
11:05
The company said they wanted 10 seats
11:07
and later the company churned. Let me
11:10
show you what they could have figured
11:11
out had they been using dot plots. So
The $80K Contract That Churned
11:13
this is what it actually looked like.
11:15
The company bought 10 seats, but only
11:17
three seats ever activated. Only three
11:19
of those people ever tried the product.
11:21
And if you look at their usage, they
11:23
weren't getting a lot of value from it.
11:25
Nobody used it more than 2 days per
11:28
week. Um, and it looks like pretty
11:30
sporadic usage. And it turns out what
11:32
happened is the company was in the
11:34
state. The champion had gotten excited
11:37
about this product and bought it. And
11:39
then the champion left the company. And
11:40
as soon as the champion left, a new
11:42
person came in and they said, "Why are
11:44
we using this software? We're going to
11:45
churn." And so they opted out of a
11:47
renewal clause at the last moment. The
11:49
company could have known that this
11:51
contract was in jeopardy by looking at
11:53
the dot plot. So there's a few ways you
11:55
can misuse dot plots. U the number one
Common Dot Plot Mistakes
11:58
thing is to just chart the wrong event.
12:00
A lot of founders might want to uh
12:02
populate their dot plot with the easiest
12:04
way to populate it so it feels good and
12:06
you see a lot of dots. Maybe you'll pick
12:08
like opened the app or signed in to the
12:10
product. Those are pretty bad events to
12:13
choose because they don't really measure
12:15
whether the user is getting real value.
12:17
So, I suggest you pick something that
12:18
actually represents value being created
12:20
for the user. Listen to a song, shared a
12:23
photo, um something like that that's a
12:25
real event. The other mistake you can
12:26
make is picking a time period that's too
12:29
wide. Sometimes founders want to make it
12:32
look better and they pick weeks, like
12:33
week one, week two, week three. it's way
12:35
harder to figure out what's actually
12:37
going on unless you look at it at the
12:38
day or maybe even like subday
12:40
granularity. So I would go so far as to
Dot Plots + Cohort Curves
12:43
say until you have hundreds of users,
12:46
the dot plot could be your only
12:48
dashboard. What's great about dot plots
12:50
is they're just a logs visualization
12:52
tool. There's no fancy computations
12:54
happening here. You basically just need
12:55
to parse your logs and put them into a
12:58
2D grid. This is a thing that modern AI
13:01
coding tools can whip up in like 10
13:03
minutes. These are best used in
13:05
conjunction with cohort retention
13:07
curves. Cohort retention curves teach
13:09
you in aggregate whether groups of users
13:11
that you acquire stick with you over
13:13
time. That's very important. You should
13:15
definitely be measuring that. But the
13:16
dot plot shows you how those users are
13:18
actually using your product. And they
13:20
give you the color to go ask the right
13:22
questions of your users, to go build the
13:24
right features, to fix things that are
13:26
broken in your product that you would
13:28
never learn by looking at aggregate
13:30
metrics. So, cohort retention curves and
13:33
dot plots are, in my experience, two of
13:35
the most important tools that you've got
13:37
to understand your users. Good luck.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

# EVSRC-2026-000288 — Dot Plots: How to Actually See What Your Users Are Doing

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `raw_dropped`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

## §0 — Source identity / metadata

- evsrc_id: `EVSRC-2026-000288`
- filename: `EVSRC-2026-000288_dot-plots-individual-user-behavior-over-time.md`
- source_platform: `YouTube`
- source_url: `https://www.youtube.com/watch?v=e5-6rEwzxLs`
- source_title: `Dot Plots: How to Actually See What Your Users Are Doing`
- channel_or_org: `Y Combinator`
- speaker: `David Lieb`
- published_at: `2026-07-09`
- captured_at: `2026-07-18`
- captured_by: `Nick`
- capture_method: `transcript paste + screenshot`
- content_type: `operator teaching / startup analytics walkthrough`
- source_reliability_context: `practitioner`
- topic_tags_light: `[longitudinal_behavior, individual_trajectories, product_analytics, value_events, retention, adoption_risk, anomaly_detection, cohort_analysis, enterprise_adoption]`

## §0.1 — People / authorship / authority context

- primary speaker(s):
  - name: `David Lieb`
    · role_in_source: `presenter / educator`
    · affiliation_at_publication: `Y Combinator — General Partner`
    · speaker_type: `investor`
    · authority_context: `Founder and product operator drawing on experience at Bump, Google Photos, YC companies, and a PayPal fraud-detection example`
    · identity_confidence: `high_from_screenshot`
- publisher / channel: `Y Combinator`
- interviewer / moderator / host: `none — direct instructional presentation`
- event_context: `Y Combinator Startup School instructional video`
- perspective / conflict notes: `The source teaches an opinionated early-stage product-analysis method. Examples are practitioner anecdotes rather than controlled evidence. It is strongest as an observability and product-diagnosis pattern, not as proof that specific visual patterns are causal or universally valuable.`

## §2 — Screenshot / visible source details

- visible_views_at_capture: `16,191`
- visible_capture_date: `2026-07-18`
- description_context: `David Lieb argues that aggregate metrics such as DAU and MAU conceal individual behavior. He presents dot plots as a person-by-time visualization for recognizing usage, retention, feature-adoption, fraud, and enterprise-churn patterns.`


Review 001 — Knox strategic read

Signal: 4.4/5 — deceptively simple, directly relevant to OMNI’s longitudinal operating model
Net-new: no new domain; one strong observability-pattern candidate and one measurement-governance candidate

Core contribution

Aggregation destroys the very thing OMNI is designed to preserve: the trajectory of a particular actor, relationship, obligation, or care thread through time.

A DAU graph can look stable while every original user has disappeared and been replaced. A signed enterprise contract can look healthy while only three of ten seats ever activate. Aggregate success can therefore coexist with individual abandonment, weak adoption, silent failure, or unresolved consequence.

The OMNI translation is not literally “build dot plots.” It is:

1. Trajectory-preserving observability

OMNI should have projections that preserve:

subject or relationship × time × meaningful event/state transition

Possible rows are not limited to users:

patient;
provider;
caregiver;
care thread;
obligation;
order or fulfillment path;
operator;
enterprise account;
agent mission;
accountable concern.

This is a projection over owned events, not a new truth store.

The view should reveal patterns hidden by aggregates:

repeated failed handoffs;
long silent gaps;
care obligations that repeatedly reopen;
prescriptions generated but never fulfilled;
referrals created but never accepted;
provider correction clusters;
enterprise accounts with commercial commitment but no operational adoption;
one patient repeatedly falling through different organizational seams.

Candidate name: longitudinal_trace_matrix or trajectory_map.

2. Every dot requires a value-event contract

The source correctly warns that “opened the app” is usually a vanity event. But “value” cannot be chosen informally in OMNI.

Each tracked event needs:

canonical event owner;
precise meaning;
actor and object;
lifecycle position;
whether it represents attempt, completion, acceptance, consequence, or verified outcome;
known failure and null interpretations;
whether absence of the event is meaningful;
privacy and permitted-use constraints.

Examples:

message_sent is not message_received;
order_created is not order_fulfilled;
appointment_booked is not care_occurred;
clinical_recommendation_displayed is not provider_adopted;
task_assigned is not custody_accepted;
payment_received is not patient_value_created.

Keeper line:

A dot is only as truthful as the event semantics beneath it.

This should become a measurement-governance requirement rather than an analytics convention.

3. Absence is ambiguous and must remain honest

A blank cell may mean:

disengagement;
successful resolution;
external care;
inaccessible service;
hospitalization;
loss of insurance;
patient choice;
system failure;
missing telemetry.

Therefore, inactivity must not be treated automatically as churn, noncompliance, or failure.

The trajectory view should distinguish:

confirmed non-occurrence;
expected silence;
unknown due to missing observation;
completed/closed;
externally continued;
overdue/unresolved.

This directly applies REV-184’s world-model honesty: no observed event is not the same as evidence that nothing happened.

4. Enterprise adoption must be separated into multiple realities

The $80,000-contract example is highly relevant to OMNI.

A commercial relationship can be “live” while the actual operating relationship is dead.

OMNI should separately represent:

buyer commitment;
executive sponsor/champion;
contracted entitlement;
seats provisioned;
users activated;
workflows adopted;
meaningful value events;
renewal risk;
patient/provider consequence.

This is a critical enterprise law:

Contract state, deployment state, adoption state, value state, and outcome state are distinct.

The departure of a champion is also not ordinary user churn; it is a relationship-dependency event capable of materially changing enterprise continuity.

5. Human pattern recognition should open inquiry, not produce judgment

The PayPal example is strong: people could visually detect “something different” before they could formally describe the rule.

That suggests a legitimate detection loop:

trajectory projection → human/agent anomaly hypothesis → targeted investigation → owned finding

But visual pattern detection must not become:

a diagnosis;
a fraud verdict;
provider-performance scoring;
patient-risk classification;
causal proof.

The view surfaces candidates for investigation. It does not own the conclusion.

6. The healthcare danger: engagement optimization

The source implicitly assumes more use is usually better. That is often false in care.

A patient using OMNI less may mean:

symptoms resolved;
treatment completed;
confidence increased;
reduced administrative burden;
no further intervention indicated.

Conversely, intense usage may indicate:

confusion;
repeated access failure;
worsening illness;
unresolved obligations;
system friction.

OMNI must optimize for appropriate resolution and continuity, not maximum engagement.

Guardrail candidate:

Usage density is not patient value; repeated activity may be evidence of unresolved harm or friction.

What not to import
Aggregate metrics as sufficient evidence.
Product activity as a proxy for clinical outcome.
Demographic or income segmentation without purpose, consent, fairness, and minimum-necessary controls.
Visual correlations treated as causal.
Missing events interpreted as confirmed inactivity.
Individual trace analysis used for covert workforce surveillance.
Sampling methods that erase rare but high-consequence populations.
“Most valuable user” logic applied directly to patient priority.
Hard verdict

This source contributes more than a startup dashboard trick.

Preserve:

Trajectory-preserving observability projection — individual actor/object/relationship over time.
Value-event contract — explicit semantics beneath every measurement.
Enterprise state separation — contract ≠ activation ≠ adoption ≠ value ≠ outcome.
Absence-state honesty — blank ≠ nothing happened.
Anomaly-as-hypothesis — pattern detection opens investigation; it does not adjudicate.

One-line read: OMNI cannot claim longitudinal coherence while measuring itself primarily through aggregates; it needs governed views that make individual trajectories, silent failures, relationship dependencies, and unresolved consequences visible without confusing activity with value.



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

i don't know what a dot or whaeterv is... but it sounds useful as a concept.... unclear to me if this is a required native or agentic concept .... idk!    

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-19` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Method note.** Formalizes Knox Review 001 (`focused_semantic`, signal 4.4/5), verified against the §1 full timestamped transcript (David Lieb's dot-plot teaching video). Deceptively simple source with one genuinely high-signal through-line: **aggregation destroys the very thing OMNI exists to preserve — the trajectory of a particular actor/relationship/obligation/care-thread through time.** The OMNI translation is NOT "build dot plots"; it is a *trajectory-preserving observability projection* + a *value-event contract* + *absence-state honesty* + *enterprise-state separation* + *anomaly-as-hypothesis*. The pasted Knox header carried a STALE id (`EVSRC-2026-000288`) — ignored per run rule; canonical id = filename `EVSRC-2026-000300`. **Operator Review 002 is load-bearing:** Nick doesn't know the "dot" concept and asks whether it is a *required native or agentic concept* — resolved below (it is a **projection/observability pattern**, P4/P5, NOT a new domain object and NOT an agent). `build_status` grounded by run brief: repo has partial observability (audit-actions, chart_ai_reviews, patient-case) but NO trajectory-projection layer, no value-event registry, no enterprise-adoption-state model — so clusters are `doctrine=AFFIRM/PARTIAL × build=absent/partial`. PROPOSE-ONLY (`GRD-036`); nothing minted, no contract/thesis/registry/matrix/anchor-ledger edited. Anchors carry real transcript timestamps.

### Cluster table

| # | concept | OMNI meaning | homes | anchor | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| A | **Aggregate metrics conceal individual trajectory (the longitudinal-coherence hazard)** | A DAU/MAU graph can look stable while every original user has churned and been replaced; aggregate success can coexist with individual abandonment, silent failure, or unresolved consequence — OMNI's entire premise is longitudinal coherence *per patient/relationship/obligation over time*, so it cannot measure itself primarily through aggregates | thesis §1 (longitudinal coherence) · projections plane (P4) · surfaces plane (P5) · Accountability Loop | "DAUs or MAUs… lump all of your users together" [1:05]; "going up and to the right… even if users aren't enjoying" [1:15] | AFFIRM (affirms core premise) × build=absent | strategy/spine | promote (affirms canon) |
| B | **Trajectory-preserving observability projection (`trajectory_map` / `longitudinal_trace_matrix`): subject/relationship × time × meaningful state-transition** | A read-model PROJECTION over owned events (NOT a new truth store) whose rows are not just "users": patient · provider · caregiver · care-thread · obligation · order/fulfillment path · operator · enterprise account · agent mission · accountable concern; it surfaces patterns aggregates hide (repeated failed handoffs, long silent gaps, obligations that repeatedly reopen, Rx generated-never-fulfilled, referrals created-never-accepted, one patient falling through different org seams) | **projections plane (P4)** · surfaces plane (P5) · Accountability Loop · Care Operating Model · projection≠authority | "each row represents one individual user… every column represents a time period" [1:48]; "patterns you would not have seen… with aggregate charts" [3:50] | PARTIAL × build=absent | projection/observability | promote (as projection) |
| C | **Every tracked "dot" requires a value-event CONTRACT (event semantics are governed, not informal)** | "Opened the app" is a vanity event; but in OMNI "value" cannot be chosen informally — each tracked event needs a canonical owner · precise meaning · actor + object · lifecycle position · whether it is attempt/completion/acceptance/consequence/verified-outcome · known failure + null interpretations · whether absence is meaningful · privacy + permitted-use constraints. `message_sent ≠ message_received`; `order_created ≠ order_fulfilled`; `appointment_booked ≠ care_occurred`; `recommendation_displayed ≠ provider_adopted`; `task_assigned ≠ custody_accepted`; `payment_received ≠ patient_value_created` | **one-owner-per-fact** · domain contracts (event definitions) · Evidence Plane / D7 · measurement governance · REV-184 | "chart the wrong event… opened the app… pretty bad events" [11:58]; "a dot is only as truthful as the event semantics beneath it" [Knox §2] | AFFIRM (= one-owner-per-fact + `metric_definition_is_strategy`) × build=partial | governance/spine | promote |
| D | **Absence-state honesty: a blank cell ≠ nothing happened (`not observed` ≠ `observed absent`)** | A gap may mean disengagement / successful resolution / external care / inaccessible service / hospitalization / lost insurance / patient choice / system failure / missing telemetry — so inactivity must NOT auto-classify as churn, noncompliance, or failure; the trajectory view must distinguish confirmed-non-occurrence · expected-silence · unknown-missing-observation · completed/closed · externally-continued · overdue/unresolved | **REV-184** (world-model honesty) · Care Operating Model · D7/Observation · guardrail | "a blank cell may mean… successful resolution… or system failure" [Knox §3]; direct = 294 cluster S | AFFIRM (= REV-184 + 294 `not-observed≠observed-absent`) × build=partial | spine-guardrail | promote |
| E | **Enterprise-adoption state separation: contract ≠ champion ≠ entitlement ≠ seats-provisioned ≠ users-activated ≠ workflows-adopted ≠ value-events ≠ renewal-risk ≠ patient/provider consequence** | The $80K-contract-that-churned: 10 seats bought, only 3 ever activated, sporadic usage, champion left → non-renewal; a commercial relationship can be "live" while the operating relationship is dead. OMNI must separately represent these distinct realities; champion-departure is a *relationship-dependency event*, not ordinary user churn. Direct sharpening of the batch-2 law `deployment ≠ activation ≠ exposure ≠ adoption ≠ action` (289/290) and the C3.9 plastics/medspa operator-topology work | Platform Loop (adoption state) · §C-adjacent (operator relationship) · commerce (fulfills≠authors) · operator-topology (C3.9) · Accountability | "bought 10 seats, but only three seats ever activated" [11:15]; "the champion left the company… we're going to churn" [11:39] | AFFIRM / strong sharpening × build=absent | enterprise/operator-topology | promote |
| F | **Anomaly-as-hypothesis: pattern detection OPENS investigation, it does not adjudicate (PayPal-fraud loop)** | Humans could visually detect "that's different, probably fraud" before they could state the rule → a legitimate loop: `trajectory projection → human/agent anomaly hypothesis → targeted investigation → owned finding`; but the view must NEVER become a diagnosis / fraud verdict / provider-performance score / patient-risk classification / causal proof — it surfaces candidates for investigation, it does not own the conclusion | **REV-184** · Reactor (detect→resolve) · Accountability Loop · AI-never-authority · guardrail | "that's different and probably fraud… then dig in" [7:12]; "the view surfaces candidates; it does not own the conclusion" [Knox §5] | AFFIRM (= 282 expert-steered-investigation + candidate≠commit) × build=partial | spine-guardrail | promote |
| G | **Usage density ≠ patient value (the healthcare inversion of the engagement assumption)** | The source implicitly assumes more use is better — FALSE in care: a patient using OMNI *less* may mean symptoms resolved / treatment completed / confidence increased / reduced admin burden / no further intervention indicated; intense usage may mean confusion / repeated access failure / worsening illness / unresolved obligations / system friction. OMNI optimizes for *appropriate resolution + continuity*, not maximum engagement — this is a first-order care guardrail and the sharpest divergence from the source | **Care Operating Model** (center of gravity) · thesis §1 · guardrail · REV-184 | "a patient using OMNI less may mean… symptoms resolved" [Knox §6]; "usage density is not patient value" [Knox guardrail] | AFFIRM (care-first) / important care correction × build=absent | care-spine-guardrail | promote |
| H | **The projection SAMPLES + SCALES without becoming truth (billions-of-users → sampled slices)** | Google Photos used sampled printed dot-plots ("iOS users in France", "web US >$80k/yr") — the trajectory projection scales by sampling/segmenting, but segmentation carries fairness/consent/minimum-necessary risk and must not erase rare-but-high-consequence populations; the projection remains a viewing composition (P4), never the owning record | projections plane (P4) · surfaces plane (P5) · Care (fairness/rare-cohort) · privacy/minimization | "you can just choose to sample your users" [10:04]; "sampling that erases rare but high-consequence populations" [Knox what-not-to-import] | PARTIAL × build=absent | projection/care | promote (+guardrail) |

### Net-new primitive dispositions (EVERY Knox candidate dispositioned; net-new DOMAIN objects = 0)
Knox stated "no new domain; one strong observability-pattern candidate and one measurement-governance candidate." Dedup vs cumulative baseline (wave-6 registry §2/§3; thesis §1 longitudinal coherence; projection≠authority / D0THES-DEC-033 surfaces-own-no-truth; one-owner-per-fact; REV-184; 294 `not-observed≠observed-absent`; 282 expert-steered-investigation; batch-2 `deployment≠activation≠exposure≠adoption≠action`) + `EVRUN-000004 §0.5` retired terms + `D0OL-GRD-001..008`:
- **`longitudinal_trace_matrix` / `trajectory_map`** → **dedup-as-EXISTS**: this is a **projection / read-model** on the **P4 Projection plane** (composed for viewing on P5 Surface plane), NOT a new domain and NOT a new truth store — it projects over already-owned events (`D0THES-DEC-033` surfaces/projections own no canonical truth). Resolves the operator's open question (Review 002): it is a **required projection/observability pattern**, *not* a native domain object and *not* an agent. **Route INVESTIGATE** (projections plane + Accountability observability watch). This is the source's single strongest additive pressure.
- **value-event contract** → **dedup-as-EXISTS**: `one-owner-per-fact` + `metric_definition_is_strategy` (REV-184) + domain-contract event definitions applied to *measurement*; a *measurement-governance requirement*, not a new object. **Route INVESTIGATE** (measurement governance → domain contracts + Evidence Plane).
- **absence-state honesty** → **dedup-as-EXISTS**: REV-184 world-model-honesty + 294 cluster S (`not observed ≠ observed absent`); a sharpening, not net-new.
- **enterprise-adoption state separation** → **dedup-as-EXISTS**: extends batch-2 `deployment≠activation≠exposure≠adoption≠action` (289/290) + commerce fulfills≠authors + C3.9 operator-topology; a strong sharpening + a candidate *relationship-dependency event* (champion-departure) → route to operator/Federation watch, NOT minted.
- **anomaly-as-hypothesis loop** → **dedup-as-EXISTS**: 282 expert-steered-investigation + Reactor detect→resolve + candidate≠commit + AI-never-authority.
- **net-new DOMAIN objects: 0.** Retired terms not re-minted (`EVRUN-000004 §0.5`); `D0OL-GRD-001..008` not re-minted as primitives.
- **INVESTIGATE-lane summary (route to owning-home watch; NOT minted):** (1) `trajectory_map`/`longitudinal_trace_matrix` → projections plane (P4) + Accountability observability; (2) `value_event_contract` → measurement governance (domain contracts + Evidence Plane); (3) `enterprise_adoption_state_separation` + `relationship_dependency_event` → Platform Loop + operator-topology (C3.9) + §C-adjacent. These fold into wave-6 registry family **F5** (lifecycle/state) + a projection/observability strand not yet named as a family — flag for parent (no new family minted here).

### Counterweights / what-NOT-to-import (EVERY Knox caution PRESERVED or rejected-with-reason; NEVER inverted)
Knox's "What not to import" list (8 cautions) — all preserved verbatim-in-intent:
1. **Do NOT treat aggregate metrics as sufficient evidence** — aggregates hide the individual trajectory OMNI must preserve. [kept — A]
2. **Do NOT use product activity as a proxy for clinical outcome** — activity ≠ value ≠ care result. [kept — C/G]
3. **Do NOT segment by demographic/income without purpose, consent, fairness, and minimum-necessary controls** — segmentation is a governed act. [kept — H]
4. **Do NOT treat visual correlations as causal** — a pattern opens inquiry, it does not prove cause. [kept — F]
5. **Do NOT interpret missing events as confirmed inactivity** — blank ≠ nothing happened. [kept — D]
6. **Do NOT use individual trace analysis for covert workforce surveillance** — provider-trajectory views are not performance scoring. [kept — F/H]
7. **Do NOT use sampling methods that erase rare but high-consequence populations** — the rare cohort is often the most important. [kept — H]
8. **Do NOT apply "most valuable user" logic directly to patient priority** — commercial value ≠ care priority. [kept — G/H]
- **REJECT-as-OMNI-doctrine (mechanism kept, claim not canonized — `GRD-043`):** "more usage = better" engagement-maximization (rejected for care — cluster G); "dot plot as a literal build artifact" (keep the *projection pattern*, reject the literal spreadsheet-of-dots as an OMNI object); visual-pattern-as-diagnosis/fraud-verdict/risk-score (rejected — F); demographic/income segmentation as default (rejected — H); "the dot plot could be your only dashboard" as OMNI guidance (practitioner-scale advice, not care-grade observability governance). (Recorded, not silently dropped.)

### Care implications (NOT swept by "0 net-new")
- **Trajectory-preservation IS the care premise (A/B):** care coherence is longitudinal-per-patient; the projection must make "one patient repeatedly falling through different org seams", "Rx generated but never fulfilled", "referral created but never accepted", "obligation that keeps reopening" VISIBLE — exactly the silent failures aggregates hide.
- **Absence honesty is a first-order clinical-memory rule (D):** a blank must never auto-mean churn/noncompliance/failure; "no reported adverse event ≠ no adverse event", "no pharmacy receipt ≠ not taken", "no response ≠ adherence" — distinguish confirmed-non-occurrence from expected-silence from unknown-missing-observation.
- **Engagement optimization is the sharpest care hazard (G):** OMNI must NOT optimize for maximum patient usage; less usage may be *success*, intense usage may be *distress/friction* — the objective is appropriate resolution + continuity. This is the source's most important care correction and directly protects care from product-analytics reflexes.
- **Provider trajectory views must not become covert performance surveillance (F/H):** a provider-correction cluster opens investigation under governed authority, it is not a score.
- **Operator note resolution (Review 002):** the "dot" is a **projection/observability pattern** (view over owned truth), not a required native domain nor an agent — Nick's instinct ("useful as a concept… unclear if native or agentic") is correct to flag it; the answer is *neither native-domain nor agent — it is a governed P4 projection.*

### Guardrail candidates → `08` (gated, `user_knox_required`; dedup noted)
- **G-cand-1:** *A trajectory/observability view is a PROJECTION over owned events, never a truth store; it may reveal patterns but owns no canonical fact and adjudicates no conclusion* [dedup vs projection≠authority / `D0THES-DEC-033` + REV-184].
- **G-cand-2:** *Every measured "value event" requires a governed contract (canonical owner · precise meaning · lifecycle position · attempt vs completion vs acceptance vs consequence vs verified-outcome · null/failure interpretation · permitted-use); a dot is only as truthful as the event semantics beneath it* [dedup vs one-owner-per-fact + `metric_definition_is_strategy`].
- **G-cand-3:** *A blank/absent observation is not evidence that nothing happened; inactivity must not auto-classify as churn, noncompliance, or failure — distinguish confirmed-non-occurrence, expected-silence, unknown-missing-observation, closed, externally-continued, overdue* [dedup vs REV-184 + 294 `not-observed≠observed-absent`].
- **G-cand-4:** *Contract state ≠ activation ≠ adoption ≠ value ≠ outcome; a live commercial relationship can mask a dead operating relationship, and a champion-departure is a relationship-dependency event, not ordinary churn* [dedup vs batch-2 `deployment≠activation≠exposure≠adoption≠action` (289/290)].
- **G-cand-5:** *Visual/anomaly pattern detection opens a targeted, owned investigation; it must never become a diagnosis, fraud verdict, provider-performance score, patient-risk classification, or causal proof* [dedup vs 282 expert-steered-investigation + AI-never-authority].
- **G-cand-6:** *Usage density is not patient value; in care, reduced activity may be successful resolution and intense activity may be distress or friction — optimize for appropriate resolution + continuity, never maximum engagement* [care-specific; dedup vs care-center-of-gravity].
- **G-cand-7:** *Segmentation/sampling of individual trajectories is a governed act (purpose + consent + fairness + minimum-necessary) and must not erase rare, high-consequence populations or enable covert workforce surveillance* [dedup vs D0OL data-minimization + fairness guardrails].

### Reread flags
- Cluster B (`trajectory_map`/`longitudinal_trace_matrix`) → reopen when the **Projection plane (P4) / Surface map (P5)** is next authored + with the Accountability Loop observability model; this is the concrete projection that operationalizes "longitudinal coherence" (thesis §1) — map-depth only, do NOT build an analytics dashboard pre-spine.
- Cluster C (value-event contract) → reopen with domain-contract event definitions + Evidence Plane evidence-classes + `metric_definition_is_strategy`; measurement governance belongs across domains, not in an analytics tool.
- Cluster E (enterprise-adoption state separation + relationship-dependency event) → reopen with C3.9 plastics/medspa operator-topology + batch-2 `deployment≠activation≠…` + commerce fulfills≠authors; strong operator/Federation pressure.
- Cluster G (usage-density≠value) is the **care keeper** — carry into Care Operating Model authoring as an explicit anti-engagement-optimization guardrail.
- Operator open question (native vs agentic) is RESOLVED as "governed P4 projection" — surface to Nick for confirmation.

### One-line hard read
`focused_semantic`, 4.4/5, **0 net-new domain objects + 3 INVESTIGATE sharpenings (`trajectory_map`/`longitudinal_trace_matrix` projection, `value_event_contract`, enterprise-adoption-state-separation + `relationship_dependency_event`)** — a deceptively simple product-analytics talk that names OMNI's own premise back to it: **you cannot claim longitudinal coherence while measuring yourself through aggregates** — OMNI needs governed *projections* (not a new domain, not an agent) that make individual trajectories, silent failures, absent-≠-nothing-happened gaps, relationship dependencies, and unresolved consequences visible, each dot backed by a governed value-event contract, with pattern-detection that opens investigation but never adjudicates, and with the explicit care inversion that **usage density is not patient value.**

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Projection plane (P4) + Surface map (P5) (trajectory_map/longitudinal_trace_matrix; projection≠authority) · thesis §1 (longitudinal coherence — affirmed) · Accountability Loop (observability, anomaly-as-hypothesis) · domain contracts + Evidence Plane/D7 (value-event contract, one-owner-per-fact) · REV-184 (absence-honesty, world-model honesty) · Platform Loop + operator-topology C3.9 + §C-adjacent (enterprise-adoption state separation, relationship-dependency event) · Care Operating Model (usage-density≠value, engagement-optimization hazard)` · promotion: `watch` (7 guardrail candidates + 3 INVESTIGATE sharpenings → `08`; net-new domain objects 0) — parent folds cross-source into registry centrally

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, second batch; `EVRUN-2026-000011`).
- `2026-07-19` — PROCESSED (Review 003): canonical id = 300 (pasted Knox header carried STALE id 288 — ignored per run rule; this is the David Lieb "Dot Plots" YC Startup School source); slug firmed (SUGGESTION only — not renamed); §0/§0.1 filled from Knox Review 001 metadata (no screenshot this session → `inferred`; operator Review 002 note load-bearing); §3 Review 003 written (8 clusters, **0 net-new domain objects + 3 INVESTIGATE sharpenings** `trajectory_map`/`longitudinal_trace_matrix` (P4 projection) · `value_event_contract` (measurement governance) · enterprise-adoption-state-separation + `relationship_dependency_event`, 8 counterweights preserved + reject set, 7 guardrail candidates → 08); operator native-vs-agentic question resolved (= governed P4 projection); §4 filled. `raw_dropped → analyzed`; awaiting 2nd-reader fidelity sign-off. PROPOSE-ONLY (`GRD-036`); shared run artifacts NOT edited (parent folds centrally).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

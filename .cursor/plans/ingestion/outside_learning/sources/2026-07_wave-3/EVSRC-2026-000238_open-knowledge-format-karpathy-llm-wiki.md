# EVSRC-2026-000238 — <title or TK>

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000238_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000238`  ·  filename: `EVSRC-2026-000238_open-knowledge-format-karpathy-llm-wiki.md` *(proposed slug; file NOT renamed this pass)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=T33iI6izAKw`  ·  source_title: `Finally, an Open Standard for the Karpathy LLM Wiki is HERE`
- channel_or_org: `Cole Medin`  ·  speaker: `Cole Medin`  ·  published_at: `2026-07-01`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `OKF / Open Knowledge Format / Karpathy LLM Wiki / personal-agent knowledge bases / markdown knowledge bundles / shared second brains / metadata standards / progressive disclosure / agent-readable knowledge graph / portable knowledge substrate`  ·  source_reliability_context: `practitioner — secondary commentary/demo on Google's Open Knowledge Format, NOT the primary OKF spec itself; strong architecture signal for OMNI Knowledge Reservoirs / portable agent-readable knowledge bundles / metadata standards / progressive disclosure; treat as interpretive until the primary OKF spec/repo is reviewed (pending as EVSRC-239 per Review 002)`  ·  topic_tags_light: `[OKF, Open_Knowledge_Format, Karpathy_LLM_Wiki, LLM_wiki, personal_agents, second_brain, knowledge_bundles, markdown_knowledge_base, YAML_front_matter, metadata_standard, entity_pages, concepts, index_files, progressive_disclosure, knowledge_graph, agent_readable_context, portable_knowledge, shared_wiki, Context_Governance, Knowledge_Reservoirs, D7_Documents, Build_OS, OMNI_corpus]`
- identity_confidence: `high_from_operator_metadata` (Knox metadata block present at top of §3 Review 001; lifted verbatim; no caveats)

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Cole Medin` · role_in_source: `speaker / presenter` · affiliation_at_publication: `independent AI-coding educator; creator of Archon (open-source AI coding harness builder)` · speaker_type: `educator / practitioner` · authority_context: `AI-coding YouTuber and tool-builder; secondary interpreter/demoer of Google's OKF — NOT the OKF spec author` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `Cole Medin (YouTube)`  ·  interviewer / moderator / host: `n/a (solo explainer)`
- event_context: `Solo explainer/demo video on Google's Open Knowledge Format (OKF) as a standard atop Karpathy's LLM Wiki pattern; sponsored segment (PostHog).`  ·  perspective / conflict notes: `Practitioner boosting a standard + gifting his own OKF bundle; secondary commentary, not the primary spec. Primary OKF spec/repo review pending (Nick's Review 002 → EVSRC-239).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [x] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(deferred — Opus-main folds fold-packet; this pass does NOT edit registry)* · [ ] update coverage matrix *(deferred — Opus-main)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

n this video



Timeline

Chapters

Transcript
Search in video
The LLM Wiki (Karpathy's Idea)
0:00
A couple months ago, Andre Karpathy
0:02
released the idea of the LLM wiki. It's
0:04
a pattern for building personal
0:06
knowledge bases using LLMs and it
0:09
totally took off and for good reason.
0:11
There's a lot of power in the simplicity
0:13
here. So, this single markdown document
0:16
in GitHub called it gist got to 40,000
0:18
stars. And seriously, you can take this
0:20
file, copy it, paste it into your coding
0:23
agent, and ask it to build you an LLM
0:25
wiki and it's going to be able to just
0:26
basically oneshot it. So, it's really
0:28
easy to get started. And the idea here
0:31
is when we're building a personal
0:33
knowledge base for our second brain,
0:35
instead of just dumping in a bunch of
0:36
documents or indexing things for rag, we
0:39
can have the LLM help us build something
0:41
smarter, incrementally building and
0:43
maintaining a persistent wiki with
0:45
structured interlink collections of
0:47
markdown files. And so the idea here is
0:50
as we're adding in more sources over
0:52
time like meeting transcripts, plan
0:54
documents, articles from online, it's
0:56
going to not just index it, but it's
0:58
going to read each file, extract key
1:01
information, and integrate it into the
1:03
existing wiki. So updating things like
1:04
the entity pages that it creates over
1:07
time, so we have that knowledge graph
1:09
for agent to traverse through and
1:11
remember all the important information
1:12
that we're bringing in. So, at this
1:14
point, pretty much everybody is building
1:16
their own LLM wiki in their second
1:18
brain. But this isn't enough. And the
1:21
main problem that we have here is when
1:23
you take this gist and you build your
1:25
own version of an LLM wiki, it's going
1:27
to be structured differently than the
1:29
next person doing the same thing.
1:31
There's no standard. And so, there's
1:32
really not a way to share your LLM wiki
1:35
with someone else. And that's a bummer.
1:37
You can think of a lot of different use
1:38
cases where you'd want to curate a
1:40
knowledge base over time and then share
1:42
it with other people like other people
1:43
on your team. Maybe you want one wiki
1:45
for the team that everyone's second
1:47
brains are accessing independently.
1:49
Maybe I want to create a wiki for my
1:51
YouTube content and then share that with
1:53
you. There are a million reasons. But if
1:56
your agent doesn't know exactly how I've
1:58
structured my wiki with the different
2:00
metadata and my entity files, it's not
2:02
going to be able to search through it
2:03
optimally. We need a standard so that
Why We Need a Standard: Google's OKF
2:05
everyone's building wikis in the same
2:07
way so that we can share them freely.
2:10
And so that is what Google has released
2:12
here with their open knowledge format.
2:14
It is a beautifully simple thing just
2:16
like Harpathy's LLM wiki idea where it's
2:19
just a simple standard built on top so
2:22
that you can guarantee you're building
2:24
your wiki in a way where other people's
2:26
second brains can understand it and vice
2:29
versa. And so in this video I want to
2:31
cover why OKF is so powerful. It really
2:33
is the future of personal agents. And I
2:36
want to show you how easy it is to get
2:37
started with this standard, both for new
2:40
LM wikis and even transferring existing
2:43
ones into this format. Very easy to do
2:45
that. And no matter the wiki, no matter
2:47
how much you're going to share it or
2:48
not, this is important even as an
2:50
optimization on top of Karpathy's LM
2:53
wiki idea. And I know that Google is
2:56
lagging in the AI race right now. Gemini
2:58
is not as good as GPT and Claude, but
3:01
they have been releasing some really
3:02
good stuff on how to leverage LLMs
3:04
effectively. And I think that's a
3:06
totally different lane than building
3:08
LLMs. Well, so I think this is something
3:10
really worth leaning into even if OKF
3:13
doesn't end up becoming the standard
3:14
down the line for personal agents.
3:16
There's going to be something like this.
3:18
And so it's good to understand this now.
What OKF Standardizes
3:20
Okay. Now, let's really get into OKF. So
3:23
there are two things that they're
3:24
standardizing here. The first is how we
3:27
are organizing information like our
3:28
entity documents and our concepts. And
3:31
then the second standardization is the
3:33
exact fields that we're going to have in
3:35
our metadata. So this is the information
3:38
that we tag at the top of every single
3:40
document to give the agent a richer set
3:43
of information. So we can even like
3:44
query based on the title or the tags. So
3:47
we have categorization. This is one of
3:49
the most important things to let the
3:50
agent traverse through our wiki like a
3:52
knowledge graph. And really the best way
3:55
to make this concrete for you is to show
3:57
you what a traditional Karpathy wiki
4:00
looks like. So we'll take a look at
4:02
this. This is one of the first wiks that
4:03
I built when Karpathy released this
4:05
idea. And then we'll get into some of
4:07
the problems that we have here. So at
4:09
the top of every single wiki is your
4:12
index file. You have the agent maintain
4:14
this every single time it's bringing new
4:16
information in. And the index file, it
4:18
reads this when it's first searching
4:20
through your knowledge base, pretty much
4:21
every single time. And so this just
4:23
gives you a high-level overview of all
4:25
the documents that you have access to in
4:28
the wiki. So the article and then a
4:30
quick summary so it knows if this is
4:31
something that it should look into based
4:33
on the user's request. And so every
4:35
single time we add in new documents,
4:37
this is evolving. And so the agent will
4:40
read this and then based on what we
4:41
asked it to do or the question, if it
4:43
figures like I should look at superbase
4:45
o this concept right here, this entity
4:47
document, then it'll drill into this. We
4:50
also have the metadata like I talked
4:51
about earlier like the title and the
4:53
tags so that it can also search based on
4:56
this like if it wants to look at the
4:58
category of security then it can filter
5:00
out just those documents and so then we
5:03
have the full sort of like skill.md here
5:05
this is like progressive disclosure like
5:07
skills where the index tells it the
5:09
knowledge it has and then it can read
5:11
the full document if it's appropriate
5:13
and then we also link to related
5:15
concepts down here and that link is what
5:17
really gives us this graph view where
5:19
You can see how all of our entities and
5:22
other documents are connected together.
5:24
So, the agent can sift through this to
5:26
really get a comprehensive set of
5:27
information if the question really calls
5:30
for it. And so, looking at one of these
5:32
documents here, it might feel like it's
5:35
overwhelming to build up all this
5:36
knowledge over time, but seriously, with
5:38
an LLM wiki, you are just giving the
5:40
reins completely over to an LLM. So, you
5:42
don't have to be technical. You don't
5:44
have to spend a lot of time maintaining
5:46
this. Literally the whole benefit of the
5:48
wiki is that up until we've had LLMs for
5:52
this, it was way too tedious to create
5:54
this sort of knowledge base where we're
5:56
responsible for understanding related
5:58
concepts and building that over time as
6:00
we're adding in new information. Like
6:01
there's so much tedious work here that
6:03
LLM are really, really good at. But as
6:05
much as they're good at this, they
6:07
aren't going to create this system in
6:10
the same way that someone else will with
6:12
with their LLM, right? like the way that
6:14
we link related concepts might be
6:16
different. The way we structure
6:17
information, even the metadata, like
6:20
what if we don't have tags, but we have
6:22
a field called categories. I mean, even
6:24
something as simple as that, that that
6:26
little change might make it so that if I
6:28
gave the knowledge base to another
6:29
person's agent, it wouldn't know how to
6:32
search through things categorically. It
6:34
would have to dive into the metadata
6:36
first to understand that, and it might
6:38
not decide to do so. I mean, all these
6:40
little problems will start to compound
6:42
when you don't have the same metadata,
6:43
you don't have the same folders. That's
6:45
what we're looking to do here with OKF.
Building With the OKF Spec
6:47
All right. So now, if you want to build
6:49
with OKF, create a new knowledge base
6:51
with this format or even refactor one to
6:54
use the open knowledge format, look no
6:56
further than their spec.md file. So,
6:58
this is in their repo. I'll link to it
7:00
in the description. This is just like
7:02
Karpathy's gist where you copy this
7:05
document. Like you literally just click
7:06
this one button right here, put it into
7:09
your coding agent, and tell it to either
7:11
build you a wiki following the open
7:12
knowledge format or even refactor an
7:14
existing one. Like I said, it's going to
7:15
knock either of those out of the park
7:18
because this is kind of like a skill. It
7:20
teaches the coding agent everything it
7:22
needs to know about the standard. Like
7:24
here is the terminology. Here's how we
7:26
structure the bundles. I'll show you
7:27
more on this in a little bit. Here is
7:29
how we build the YAML front matter.
7:31
different attributes that we have for
7:33
each one of our documents like the tags
7:35
for categorization, right? Like this
7:37
single source of truth is all that it
7:40
needs. And because it's such a simple
7:42
format, a simple standard overall, it's
7:44
not really going to get confused going
7:46
through this. I mean, it's a pretty long
7:48
file, but in terms of what large
7:49
language models can handle these days,
7:51
especially with, you know, GPT 5.5 or
7:53
Opus 4.8, this is not much instruction.
7:56
And it it also doesn't really matter the
7:59
scale of your current knowledge base if
8:01
you are refactoring because you can
8:03
specifically ask it to use sub agents to
8:06
work through the different sections of
8:07
your knowledge base to refactor it to
8:10
this format. So really easy to scale,
8:12
really easy to just have the agent rip
8:13
through this spec. The sponsor of
Sponsor: PostHog
8:16
today's video is Post Hog, a single
8:18
place for you to understand how users
8:20
are actually using your application to
8:22
debug and fix issues and test and roll
8:24
out all of your changes. And I'm excited
8:26
for this because I am using Post Hog
8:29
myself in Archon, my open-source AI
8:31
coding harness builder. I'm legitimately
8:34
leaning on the data insights that I get
8:36
from Post Hog every single day so that I
8:38
know exactly how to improve Archon in
8:40
the way that users actually need. And
8:43
installing Posthog is incredibly easy.
8:45
You just click on the install with AI
8:46
button on their homepage that I'll have
8:48
linked to in the description and boom,
8:50
it's a single command you can run a
8:52
wizard that will essentially be a senior
8:54
engineer helping you set up analytics
8:56
for your entire application in just
8:59
minutes. And you can also create custom
9:01
data views like this is the dashboard
9:03
that I'm looking at every single day to
9:05
see how people are actually using
9:06
Archon. And then we can also drill down
9:08
to get very granular as well. So the
9:10
individual runs of Archon, I can click
9:13
into this here to see all the details.
9:15
And so we can go very high level all the
9:17
way to individual parameters as we need.
9:20
It's got the analytics for everything.
9:22
And so production is the time where you
9:25
can't be flying blind. When you have
9:27
something deployed out to the world, you
9:29
need observability. And Post Hog is the
9:31
best for that. So I'll have a link in
9:32
the description. I would highly
9:34
recommend checking them out. And I
Why OKF Matters (Even If You Never Share)
9:36
talked about this a little bit at the
9:37
start of the video, but this really is
9:39
the future of personal agents. It's like
9:41
what MCP did for agentto tool
9:44
communication, this OKF is doing for
9:47
agent to knowledgebased communication.
9:50
And one of the most important things in
9:51
the spec here is that they talk about it
9:53
being a standard both for consuming
9:56
knowledge bases like searching through
9:57
them, but also producing knowledge
10:00
bases. How do we evolve the wiki over
10:01
time? build up the entity pages like
10:04
Karpathy talked about in the initial
10:06
gist. We really are building on top of
10:08
it. And one of the really interesting
10:10
things to think about here is yes, this
10:13
is fantastic for sharing knowledge bases
10:15
or having a teamwide knowledge base.
10:18
This is also really good though even if
10:19
you're never going to share a knowledge
10:20
base. Think about this. If everybody has
10:23
the same standard for how they are
10:25
building up their own personal knowledge
10:27
base, everyone can share ideas more
10:30
like, oh, here are the entity pages that
10:33
are working really well for me and this
10:34
is how I want to organize things under
10:36
the standard. And then because you have
10:37
the standard as the foundation, it's
10:39
easier for other people to take those
10:41
ideas. And so what we're also I think
10:43
what we're going to see is like yes, I
10:45
don't think OKF is going to in the end
10:47
be the standard, but we're going to see
10:48
something like that and we're going to
10:50
see the standard evolve over time so
10:52
that it's easier and easier for people
10:54
to create these really rich knowledge
10:56
bases without having to spend a lot of
10:58
time upfront designing it with the LLM.
The Gift: My AI Coding Bundle
11:01
Now, of course, sharing wikis with other
11:03
people is the biggest benefit of OKF.
11:05
And that leads me into the example that
11:08
I have for you that's also a gift I'm
11:10
very excited to share. I have built a
11:13
bundle, that's what you call an OKF
11:14
Wiki, that packages up all of my
11:17
favorite AI coding YouTube videos on my
11:20
channel. And so, here's the thing. I'm
11:23
excited for this. I know that a lot of
11:25
you, you don't watch my entire video
11:27
every single time. You're going to sift
11:29
through things. You're going to just
11:30
take the transcript and feed it into
11:32
your second brain and ask questions. You
11:34
guys are already doing something like
11:35
this, but now making it easier for you
11:37
because I'm prepackaging up sets of
11:40
videos. I actually want to start doing
11:41
this so that you can very easily bring
11:43
it into your second brain and ask
11:45
questions as it relates to what you
11:46
actually care about or what you are
11:48
working on specifically. And so take a
11:51
look at this. All you have to do is
11:53
first of all take this spec and give it
11:55
to your coding agent. You have it teach
11:57
itself OKF. And then you go to this repo
12:00
with my AI coding knowledge bundle. I'll
12:02
have this linked in the description as
12:04
well. And you just paste this prompt
12:06
into your coding agent. That's it. You
12:08
give it the link to this repo. You tell
12:10
it to read the readme and set up
12:12
everything and it already understands
12:14
OKF. So, it links those two things
12:15
together. Brings the bundle into your
12:18
local Obsidian or Notion or whatever
12:20
you're managing your knowledge. And then
12:21
boom, you can instantly start asking
12:23
questions. You don't have to bring in
12:24
the transcripts yourself. This is the
12:27
easiest way for just content creators in
12:29
general to share their knowledge with
12:31
the world. They can create bundles. I'm
12:33
creating bundles for all my videos now.
12:35
And so this is just one example of what
12:37
OKF unlocks for us. And so I'll also
12:40
show you what this bundle looks like
12:41
because it's a really good example of
12:43
what OKF is really doing for us. All
12:45
right, let's get into the belly of the
12:47
beast. Now I'll show you how I've been
12:48
setting up OKF and we'll get into the
12:50
example bundle as well. And so something
12:52
that I do for my second brain, every
12:55
single system that I build in, I always
12:57
have a tople document that talks about
12:59
how it works. Like this is how I'm
13:01
working with OKF bundles. And then here
13:03
are the different bundles that I have.
13:05
So I basically have an index so it knows
13:07
the different bundles that it can go
13:08
into and search and read the index that
13:11
we have in there. So we kind of have
13:12
like two layers of indexing. And then I
13:15
also built a simple CLI script. This is
13:18
actually there in the example bundle
13:20
that you can clone that makes it easy
13:22
for it to in the command line list out
13:24
my bundles to view a specific index and
13:27
then you know once it finds one of those
13:28
files it wants to read then we have the
13:30
command line tool to read by a specific
13:33
bundle and concept ID. So I've added
13:36
like a little bit of organization on top
13:38
of OKF with just how I manage many
13:41
different bundles but otherwise I'm
13:43
following the format exactly. And so
13:45
let's actually look at one of these.
13:46
I'll click into bundles here and we'll
13:48
go into the one that I just shared the
13:50
GitHub for. So, if we look at the index
13:53
here, we can see that I have two
13:55
different sections and this is actually
13:57
a smaller bundle. So, I didn't want to
13:59
do something super complicated. So,
14:00
there really are just two sections. I
14:02
have the videos that I've put in this
14:04
bundle, which it's it's rather small.
14:06
There's only four videos, but these are
14:08
like the best and most up-to-date ones
14:10
on my channel for AI coding. And then I
14:12
have the concepts as well. So different
14:14
things that I talk about throughout
14:16
multiple of the videos that I want to
14:18
extract into its own entity page. And so
14:22
the index here says here are the
14:23
sections. And then I don't actually have
14:25
a list of each one of the individual
14:27
files because I'm just going to have the
14:29
agent read the files that we have in
14:32
concepts or videos, right? Like it can
14:33
list out here are all the files or it
14:35
can read the index within concepts
14:38
itself, right? So, however you want it
14:40
to navigate, it's going to be able to go
14:42
through these different layers of
14:43
documents or just do a keyword search.
14:45
And so, clicking into any one of these,
14:47
like the PIV loop, for example, this is
14:49
the primary mental model that I always
14:51
teach for AI coding. Very important to
14:53
have a process for yourself to plan,
14:56
implement, and validate whatever you're
14:58
creating with a coding agent. And so, we
15:00
have the YAML front matter at the top.
15:02
And the type, this is what is required
15:04
by OKF. It is the single required field
15:07
in the metadata because this is what
15:09
gives categorization to your documents.
15:12
So like this is the type of concept. If
15:14
I go to a video here, the type is video.
15:17
So we can search over just the videos
15:18
over just the concepts which is
15:20
especially powerful once you get bundles
15:22
that are a lot bigger than this. Again,
15:24
this is just an example here. But then
15:26
we also have all of the optional titles
15:28
in OKF. So title, tags, related videos.
15:31
This is how we link things together,
15:33
right? Like you saw with that other wiki
15:34
I showed earlier, it was just things
15:36
were linked at the bottom. However, this
15:39
now makes it so it's easier to navigate,
15:41
creating a standard for how we are
15:43
linking our entities together. And so
15:46
each one of these are optional. Only
15:48
type is required in OKF. But just
15:51
because you don't always have these
15:53
doesn't mean that your agent won't
15:54
understand it, right? Like if your agent
15:56
is a consumer of OKF, if you gave it the
15:58
spec and taught it to be a consumer,
16:00
it's going to know how to leverage these
16:02
fields for better searching and
16:04
traversing through the knowledge graph
16:06
that we have here. And so then this is
16:08
just all of our information on the piv
16:10
loop. I kept it nice and simple. And
16:11
then also linking to videos as well,
16:13
which maybe is like a little bit
16:14
redundant with related videos. So I
16:17
could probably make this bundle a bit
16:18
better, but I just wanted to have this
16:20
as an initial example. And it is
16:21
something that you can immediately bring
16:23
into your second brain. Just start
16:24
asking questions. Like I'll show you an
Watching My Second Brain Query It
16:26
example here in my terminal. So first of
16:29
all, at the top level of my second
16:31
brain, I just asked what bundles do I
16:32
have? It ran a command here. So it used
16:35
that little CLI tool to list out all the
16:37
bundles that I have. And then it told me
16:39
that and then I just asked it a
16:40
question. So not even telling it what
16:42
bundle specifically to look through. I
16:44
said, "What's Cole's single biggest idea
16:46
for getting reliable code out of an AI
16:48
coding assistant?" and it ran four
16:50
commands in total. So first of all it
16:52
decided to read the coal AI coding index
16:55
that's the GitHub that I have for you
16:57
and then based on the index it knew like
16:59
okay let's take a look at the concepts
17:01
here and then from the concepts it's
17:03
like okay the single most important
17:04
thing I don't know what in the index
17:06
told it that but it's like context
17:08
engineering let's read the concept of
17:10
context engineering so we can see the
17:12
progressive disclosure as the agent is
17:14
figuring out where it needs to look down
17:16
to find the answer for me and then we
17:19
get the final answer here So just
17:21
beautiful to watch it work. When we have
17:23
something structured like this, it's so
17:25
easy for it to start with really not
17:27
much context at all and then drill down
17:29
into exactly what we need. That's what
17:31
OKF gives us as a standard. All right.
Is OKF Too Simple?
17:34
So if you're not sold on the idea of
17:36
having a standard for the LM wiki at
17:39
this point, I don't know what to tell
17:40
you. The one critique that I think is
17:43
actually pretty valid with OKF is a lot
17:46
of people are saying that it's too
17:47
simple, right? like there's not a lot of
17:49
value or substance that's actually added
17:51
on top of the Karpathy wiki. So, I've
17:54
I've seen that a few times just as I've
17:56
been doing a lot of research. I mean, I
17:57
put a lot of time into prepping for
17:59
these videos. I think it's kind of valid
18:00
because if we look at like what it's
18:02
really doing on top of the Carpathy
18:04
wiki, it's it's speaking to like exactly
18:06
how you organize your different files.
18:09
Like they they specifically have like
18:10
indexes within the folders and a top
18:13
level index like you saw in my bundle. I
18:15
mean, that's something I didn't really
18:16
have in wikis before. And then we have
18:18
the specific fields in our metadata like
18:20
the type is required. The other ones are
18:22
optional but these are the ones that
18:24
they recommend. Like that's pretty much
18:25
it. It's how we organize and what is the
18:28
metadata. That's pretty much all that we
18:30
actually have in the standard. And so
18:34
like the argument is kind of valid where
18:35
it's like what is it really giving? Like
18:37
there's there's not much there. But I
18:39
think that's also the point, right? Like
18:41
minimally opinionated. It's the bare
18:44
minimum layer that we need on top so
18:47
that we can produce and consume these
18:50
wiks in exactly the same way across
18:52
everyone's agents that lean into OKF.
18:55
Like I think that's actually a good
18:56
thing. I think that's a benefit, not a
18:58
downside. The fact that there's not much
18:59
substance here might seem
19:01
counterintuitive, but I think that is
19:03
actually a good thing. And I encourage
Try It Yourself + Wrap-up
19:05
you just try out the bundle that I have
19:08
for you here. give it the spec and then
19:10
give it this prompt and then just start
19:11
asking questions about AI coding like
19:13
how I use sub aents uh what is the piv
19:16
loop like just start asking and and
19:18
seeing how easy it is for your agent to
19:20
grab those things for you and so that's
19:22
everything that I got for you today on
19:24
OKF really is the future of personal
19:26
agents if you appreciated this video
19:29
you're looking forward to more things on
19:30
AI coding and second brains I'd really
19:32
appreciate a like and a subscribe and
19:34
with that I will see you in the next
19:36
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

Rough metadata for Opus

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=T33iI6izAKw
source_title: Finally, an Open Standard for the Karpathy LLM Wiki is HERE
channel_or_org: Cole Medin
speaker: Cole Medin
published_at: Jul 1, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + pasted transcript
content_type: OKF / Open Knowledge Format / Karpathy LLM Wiki / personal-agent knowledge bases / markdown knowledge bundles / shared second brains / metadata standards / progressive disclosure / agent-readable knowledge graph / portable knowledge substrate
source_reliability_context: Secondary commentary/demo on Google’s Open Knowledge Format, not the primary OKF spec itself. Strong architecture signal for OMNI Knowledge Reservoirs, portable agent-readable knowledge bundles, metadata standards, and progressive disclosure. Treat as interpretive until the actual OKF spec/repo is separately reviewed.
priority: 4.5/5
depth: knowledge-substrate architecture reference
recommended_status: route to Knowledge Reservoirs, D7 Documents, Context Governance, Build-OS, Agent Skills, source bundles, agent-readable doctrine, and OMNI corpus packaging.

Topic tags:
[OKF, Open_Knowledge_Format, Karpathy_LLM_Wiki, LLM_wiki, personal_agents, second_brain, knowledge_bundles, markdown_knowledge_base, YAML_front_matter, metadata_standard, entity_pages, concepts, index_files, progressive_disclosure, knowledge_graph, agent_readable_context, portable_knowledge, shared_wiki, Context_Governance, Knowledge_Reservoirs, D7_Documents, Build_OS, OMNI_corpus]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4.5/5
Depth: knowledge-substrate architecture reference
Recommended status: route to Knowledge Reservoirs / D7 / Context Governance / Build-OS / Agent Skills / OMNI corpus packaging.

Source caveat

This is not the primary OKF spec. It is Cole Medin’s interpretation and demo. The canonical review should happen if/when you paste or upload the actual OKF spec.md.

But the transcript is still highly relevant because it captures the architecture pattern: agent-readable markdown knowledge bundles with standardized structure and metadata.

Core takeaway

Karpathy’s LLM Wiki pattern is powerful because an LLM can incrementally build and maintain a persistent markdown knowledge base, extracting key information from sources and integrating it into linked entity/concept pages over time.

The problem is portability: everyone’s wiki ends up structured differently, so another person’s agent may not know how to traverse it, read metadata, or search it optimally. Cole frames OKF as a minimal standard for making these wikis shareable and agent-readable across tools.

OMNI translation:

OMNI needs an internal knowledge-bundle standard: markdown/source bundles that agents can read, traverse, cite, update, and share without custom instructions every time.

This is not “just notes.” This is agent-readable context infrastructure.

Key concepts to preserve
1. LLM Wiki is not RAG dumping; it is maintained knowledge structure

Cole contrasts the LLM Wiki with simply dumping documents into a RAG index. The point is that the LLM reads each new source, extracts key information, integrates it into existing pages, updates entity pages, and builds a knowledge graph the agent can traverse.

OMNI keeper:

This is exactly the distinction between:

document storage

and

knowledge reservoir

For OMNI, D7 should not only store PDFs/transcripts/screenshots. It should support:

source ingestion
extraction
entity/concept pages
cross-links
provenance
summaries
update history
agent-readable indexes

Doctrine candidate:

A knowledge reservoir is not a pile of documents; it is a maintained structure agents can traverse.

2. Standards matter because agents need predictable structure

Cole’s main point is that if one wiki uses tags, another uses categories, and another uses a different folder structure, another person’s agent may not search correctly. Small schema differences compound into poor retrieval and traversal.

OMNI translation:

OMNI needs canonical corpus formats.

For your AI-source corpus, every review/source bundle should have predictable fields:

source title
source type
speaker/author
source URL
capture date
transcript status
priority
topic tags
key concepts
doctrine candidates
OMNI landing zones
related sources
citation/source references
status: raw / reviewed / canonical / superseded

Doctrine candidate:

Agent-readable knowledge requires predictable metadata, not just good prose.

3. OKF standardizes organization and metadata

Cole says OKF standardizes two things: how information is organized, such as entity documents and concepts, and the metadata fields at the top of each document. The metadata gives agents richer searchable information such as title, tags, and categories.

OMNI keeper:

This is a direct schema idea.

Potential OMNI primitive:

omni_knowledge_bundle

A folder of markdown files with:

top-level index
source pages
concept pages
entity pages
doctrine pages
relation metadata
provenance fields
citations back to source excerpts

Doctrine candidate:

The bundle is the unit of portable agent knowledge.

4. The spec itself functions like a skill

Cole says the OKF spec.md can be copied into a coding agent and used to build or refactor a wiki. He describes it as “kind of like a skill” because it teaches the agent terminology, bundle structure, YAML front matter, tags, and attributes.

OMNI translation:

This merges two OMNI ideas:

skills as procedural instructions
bundles as structured knowledge

For OMNI:

OMNI_BUNDLE_SPEC.md should teach an agent how to create, update, validate, and refactor an OMNI source bundle.

Doctrine candidate:

A knowledge standard should be executable by agents, not just readable by humans.

5. OKF is like MCP for knowledge bases

Cole’s strongest analogy is that MCP standardizes agent-to-tool communication, while OKF standardizes agent-to-knowledge-base communication. He says OKF is meant for both consuming knowledge bases and producing/evolving them over time.

OMNI keeper:

Very useful analogy.

OMNI already thinks about tools, domains, and protocol. This adds:

agent ↔ knowledge bundle

as its own protocol boundary.

Doctrine candidate:

Agents need a protocol for knowledge, not only a protocol for tools.

6. The value exists even if the bundle is never shared

Cole argues the standard is useful even for private knowledge bases, because common structure allows people to share patterns, entity-page designs, and organizational ideas. The standard becomes a foundation for reusable knowledge design.

OMNI translation:

Even if OMNI corpus stays private, standardizing it matters.

Why:

every future agent can navigate it
Opus/GPT/Claude can consume same structure
sources can be upgraded/refactored
Review 001/003 packets can be compared
doctrine can be extracted consistently
stale/superseded concepts can be tracked

Doctrine candidate:

Private knowledge still benefits from public-style structure.

7. Bundles are the shareable unit

Cole says an OKF Wiki is called a bundle. He shows a bundle for his AI coding YouTube videos, with videos and concepts as separate sections, plus an index and concept pages.

OMNI keeper:

This is important for your workflow.

Potential OMNI bundles:

bundle_google_new_sdlc
bundle_langchain_deep_agents
bundle_ibm_agent_security
bundle_omni_core_doctrine
bundle_snf_documentation
bundle_medspa_growth_ops
bundle_d7_documents
bundle_cns_messaging

Doctrine candidate:

Bundle-level packaging makes knowledge portable, reviewable, and reusable.

8. Progressive disclosure is the key retrieval pattern

Cole shows the agent starting with a top-level index, then reading a concept index, then drilling into the exact concept page needed. He explicitly calls this progressive disclosure: start with little context, then drill into exactly what is needed.

OMNI translation:

This is extremely aligned with context economics.

OMNI source bundles should be designed so agents do not need the whole corpus loaded.

Instead:

top index → bundle index → concept index → source page → cited excerpt

Doctrine candidate:

Knowledge bundles should support progressive disclosure from index to evidence.

9. Minimal standard may be a feature, not a weakness

Cole acknowledges the critique that OKF may be too simple: mostly folder organization plus metadata fields. But he argues that minimalism is the point. A thin standard is easier for agents and humans to adopt, and enough to make production/consumption consistent.

OMNI keeper:

Do not overbuild the first OMNI bundle standard.

The standard should be:

simple
markdown-native
agent-readable
human-readable
versionable
portable
strict enough for traversal
loose enough to adapt

Doctrine candidate:

A thin standard beats a perfect schema nobody uses.

OMNI translation

This source strongly supports an OMNI corpus architecture:

raw source → source page → concept extraction → doctrine page → bundle index → cross-bundle index → agent retrieval

For your current AI-video workflow, the missed opportunity is obvious:

Right now, these reviews are in chat. They should become a structured OMNI knowledge bundle.

A practical OMNI bundle might look like:

/omni_knowledge/
  index.md
  bundles/
    ai-sdlc-google/
      index.md
      sources/
        google-new-sdlc-whitepaper.md
        cole-google-masterclass-video.md
      concepts/
        harness-engineering.md
        static-dynamic-context.md
        agentic-engineering.md
        factory-model.md
      doctrine/
        build-os.md
        verification-architecture.md
    langchain-deep-agents/
      index.md
      sources/
      concepts/
      doctrine/

And each file has YAML front matter like:

type: concept
title: Harness Engineering
tags: [Build-OS, AI Substrate, agentic engineering]
source_refs:
  - google-new-sdlc-whitepaper
related:
  - factory-model
  - verification-architecture
status: canonical_candidate

The important shift:

OMNI’s corpus should not just preserve outputs. It should become an agent-traversable doctrine graph.

Likely OMNI landing zones

Knowledge Reservoirs

markdown bundle standard
top-level index
entity/concept pages
doctrine pages
relationship metadata
progressive disclosure

D7 Documents

source provenance
raw transcript/source storage
parsed excerpts
citation line references
source-to-concept extraction

Context Governance

dynamic retrieval from bundle indexes
static vs dynamic context management
bundle metadata
context-budget protection

Build-OS

OMNI_BUNDLE_SPEC.md
source review ingestion workflow
concept extraction agents
doctrine refactoring agents
corpus validation/eval

Agent Skills

skill for creating a bundle
skill for updating bundle index
skill for extracting doctrine
skill for deduplicating concepts
skill for citing sources

Polaris / Evidence Plane

source lineage
review status
concept provenance
supersession history
citation coverage
Doctrine candidates
A knowledge reservoir is not a pile of documents; it is a maintained structure agents can traverse.
Agent-readable knowledge requires predictable metadata, not just good prose.
The bundle is the unit of portable agent knowledge.
A knowledge standard should be executable by agents, not just readable by humans.
Agents need a protocol for knowledge, not only a protocol for tools.
Private knowledge still benefits from public-style structure.
Bundle-level packaging makes knowledge portable, reviewable, and reusable.
Knowledge bundles should support progressive disclosure from index to evidence.
A thin standard beats a perfect schema nobody uses.
OMNI’s corpus should become an agent-traversable doctrine graph.
Net-new / sharpen / affirm
Net-new candidates

omni_knowledge_bundle
Portable folder of markdown source, concept, entity, and doctrine files with standardized metadata and indexes.

agent_knowledge_protocol
Standard pattern for how agents consume, traverse, update, and produce knowledge bundles.

progressive_disclosure_knowledge_graph
Knowledge architecture where agents begin at an index and drill down through concepts/sources only as needed.

bundle_as_context_unit
A bundle becomes the unit passed to future agents, not individual transcripts or isolated reviews.

OMNI_BUNDLE_SPEC.md
Agent-readable spec that teaches agents how to create, update, refactor, validate, and cite OMNI knowledge bundles.

Sharpen existing

Knowledge Reservoirs
Becomes not just stored knowledge, but standardized portable markdown bundles.

D7
Needs source-to-concept-to-doctrine lineage.

Context Governance
Gets a concrete retrieval design: index → section → concept/source → evidence.

Build-OS
Should include corpus-building workflows, not just software-building workflows.

Agent Skills
Skills and bundle specs converge: a spec can teach the agent how to operate on the knowledge structure.

Affirm
markdown remains a powerful substrate for agent-readable knowledge
metadata matters
indexes matter
standards matter even for private corpora
progressive disclosure reduces token waste
knowledge graphs can be built incrementally by agents
source bundles are shareable artifacts
simple standards are often best for adoption
Reject / do not over-import
Do not treat Cole’s explanation as the canonical OKF spec.
Do not assume OKF will become the final standard.
Do not overbuild OMNI’s first bundle schema.
Do not confuse RAG indexing with maintained knowledge.
Do not trust generated entity pages without source provenance.
Do not let concepts drift away from cited sources.
Do not make bundle metadata so complex that agents/humans stop maintaining it.
Do not treat “agent-readable” as equivalent to “authoritative.”
Hard read

This is a high-value Knowledge Reservoirs source.

The keeper:

Agents need standardized knowledge bundles the same way they need standardized tool protocols. Markdown plus metadata plus indexes may be enough to make personal/team knowledge portable and traversable.

Shortest OMNI version:

OMNI should create its own OKF-like bundle standard for the AI corpus: every source, review, concept, and doctrine candidate should live in an agent-readable markdown bundle with predictable metadata, indexes, cross-links, provenance, and citation pointers. This turns your chat outputs into a reusable OMNI doctrine graph.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

attention... we will include the actual OKC or whaetervin 239... please link with 239 or whatever

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Headline verdict.** **Tier: vocabulary / medium — a high-CONVERGENCE, low-net-new Knowledge-Reservoirs source; NOT the primary OKF spec (that lands in EVSRC-239).** Cole Medin's OKF explainer is the wave's cleanest external restatement of a thing OMNI *already is*: an agent-readable, index-first, metadata-tagged, progressively-disclosed markdown knowledge substrate (this very `ingestion/` Evidence-Plane + `.cursor/plans/` doctrine graph + Manifest-Read-Graph + document-governance passports). It AFFIRMs — it does not extend — OMNI's Knowledge-Reservoirs / document-governance / read-graph / context-economics spine. The **one genuine net-new twist** is *portability/shareability* + an *executable minimal spec* (a knowledge bundle you can hand to another agent/org and it just works) — a dimension OMNI's reservoirs are today INTERNAL-only about. **Do not over-import**: Cole's own reject-list matches OMNI law (generated pages ≠ authoritative; agent-readable ≠ truth; don't overbuild the schema). Weight is capped because (a) it is secondary commentary and (b) the primary spec review is deferred to 239 — **link 238↔239 and upgrade on that pass.**

Knox's Review 001 is confirmed accurate and is *formalized* below (not re-derived). Where Knox routes to "Polaris / Evidence Plane," OMNI's home is the Evidence-Plane router (`ingestion/00_evidence_router.md`) + document-governance (projection≠truth) + `GRD-036` promotion gate.

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | LLM Wiki = maintained knowledge structure, not RAG dumping | A Knowledge Reservoir is a maintained, agent-traversable structure (read→extract→integrate→link→update), not a document pile or a vector index | Knowledge-Reservoirs · D7 Documents · Evidence-Plane | *"read each file, extract key information, integrate it into the existing wiki"* [0:58-1:03] | AFFIRM | absent | none | spine-adjacent | watch |
| 2 | The bundle is the portable/shareable unit | A "bundle" (folder of source/concept/entity/doctrine markdown + predictable metadata + indexes) is the unit of portable agent knowledge — OMNI's `EVSRC`/EVRUN artifacts are internal bundles today | Knowledge-Reservoirs · D7 · document-governance · Evidence-Plane | *"a bundle, that's what you call an OKF Wiki"* [11:13] | PARTIAL | absent | none | vocabulary | watch |
| 3 | Predictable metadata > prose (agents need standard structure) | Agent-readable knowledge requires canonical metadata fields (type/title/tags/source_refs/status/provenance), not just good prose — OMNI = document passport + catalog row | document-governance (passport) · Knowledge-Reservoirs · D7 | *"one uses tags, another categories… won't search correctly"* [6:20-6:34] | AFFIRM | absent | none | vocabulary | watch |
| 4 | The spec functions like a skill (executable standard) | A knowledge standard should be agent-EXECUTABLE (teach create/update/refactor/validate/cite), not merely human-readable — merges skills(procedure)+bundles(structure) | Build-OS · Agent-Skills · Agent-Work-Protocol §5 | *"it's kind of like a skill… teaches the coding agent everything"* [7:18-7:22] | AFFIRM | absent | none | vocabulary | watch |
| 5 | OKF = MCP for knowledge bases (agent↔knowledge protocol) | Agents need a protocol boundary for CONSUMING and PRODUCING knowledge, not only for tools — OMNI = Manifest-Read-Graph + Evidence-Router already govern this internally | Manifest-Read-Graph · Evidence-Router · Knowledge-Reservoirs · CNS | *"what MCP did for agent-to-tool… OKF for agent-to-knowledge-base"* [9:41-9:47] | PARTIAL | absent | none | vocabulary | watch |
| 6 | Progressive disclosure (index→section→concept→evidence) | Retrieval starts minimal, drills only as needed = context economics = OMNI Manifest-Read-Graph tiering (Tier-0 / Tier-0.5 boot-visible / consult-triggered) + skills progressive disclosure | Manifest-Read-Graph · §B runtime/context-economics · Knowledge-Reservoirs | *"start with really not much context… then drill down"* [17:25-17:31] | AFFIRM | partial | none | spine-adjacent | watch |
| 7 | Standardize even if never shared (private benefits from public-style structure) | Even a private corpus benefits from standard structure: future agents navigate it, refactor it, compare reviews, extract doctrine consistently | document-governance · Knowledge-Reservoirs · Build-OS | *"really good even if you're never going to share"* [10:19] | AFFIRM | partial | none | vocabulary | watch |
| 8 | Two-layer indexing + CLI navigation | Layered indexes (top index → bundle index → concept index) + a read-by-id tool = the traversal surface = OMNI read-graph tiers + artifact index + evidence router | Manifest-Read-Graph · Knowledge-Reservoirs · Build-OS tooling | *"we kind of have two layers of indexing"* [13:12] | AFFIRM | partial | none | vocabulary | watch |
| 9 | Minimal standard is a feature, not a weakness | A thin, adoptable standard beats a perfect schema nobody maintains — "don't overbuild the first bundle standard" | document-governance · Build-OS · Knowledge-Reservoirs | *"minimally opinionated… the bare minimum layer"* [18:41-18:47] | PARTIAL | absent | tension | vocabulary | watch |
| 10 | Provenance/citation must not drift; agent-readable ≠ authoritative | Generated concept/entity pages are PROJECTIONS, never truth; must cite source excerpts; promotion-gated — exactly OMNI `projection≠truth` + `GRD-036` | document-governance (projection≠truth) · Evidence-Plane · Knowledge-Reservoirs · `GRD-036` | *"don't trust generated entity pages without source provenance"* [Knox 001] | AFFIRM | partial | none | spine-adjacent (guardrail) | affirm |

**Tension (cluster 9 pole):** *pole A* — thin/minimally-opinionated standard maximizes adoption + agent traversal. *pole B* — OMNI's internal reservoirs run a deliberately RICH governance layer (document passport, authority class, provenance, lifecycle status, promotion gate). **Disposition:** not a conflict — a *layering*. The thin standard is the shareable EXTERIOR/interchange contract (bundle 2/5); OMNI governance is the rich INTERIOR (authority + promotion). Keep both: adopt a minimal portable bundle schema for interchange **without** relaxing `GRD-036`/document-governance for internal truth. Routed; `GRD-043` posture satisfied (no unresolved).

### B. Net-new primitives  *(dedup vs registry §2 [201-236 mints] + standard OMNI primitives BEFORE minting; "dedup-pending, Opus-main verifies")*
Format: `name — meaning — EXISTS-AS`.

- `portable_knowledge_bundle_standard` (Knox: `omni_knowledge_bundle` / `OMNI_BUNDLE_SPEC.md`) — a minimal, **agent-executable, PORTABLE** standard for knowledge bundles (source/concept/entity/doctrine markdown + predictable metadata + layered indexes + provenance/citation pointers) that another agent/org can consume without custom instructions — **EXISTS-AS: mechanism largely PRESENT internally** = this `ingestion/` Evidence-Plane EVSRC/EVRUN template + document-governance passport + Manifest-Read-Graph + artifact catalog (siblings: 219 `agent_readable_repo_wiki`→OMNI AGENTS.md; 236 static/dynamic-context; 232 `agent_ready_unstructured_data_substrate`). **Genuine net-new twist = PORTABILITY/SHAREABILITY + a thin EXECUTABLE spec** (OMNI's reservoirs are internal-only today). Mint as NAME/candidate. **dedup-pending, Opus-main verifies** (and reconcile against the primary OKF spec in EVSRC-239).
- `agent_knowledge_protocol` (Knox) — a protocol boundary for how agents consume/traverse/update/produce knowledge (the "MCP-for-knowledge" analogy) — **EXISTS-AS: NAME only** = Manifest-Read-Graph + `00_evidence_router.md` already are this internally. Not a net-new mechanism; useful framing label. dedup-pending.
- `progressive_disclosure_knowledge_graph` (Knox) — retrieval that begins at an index and drills into concepts/sources only as needed — **EXISTS-AS: DO NOT re-mint** = OMNI Manifest-Read-Graph tiering (Tier-0 / Tier-0.5 boot-visible / consult-triggered) + skills progressive disclosure + 204 context-economics + 220 `deterministic_coverage_mode` neighbor. Sharpen only.
- `bundle_as_context_unit` (Knox) — the bundle (not the raw transcript) is the unit handed to future agents — **EXISTS-AS: NAME** overlapping 213 `context_packet` + 217 `agent_manifest` + Knowledge-Reservoirs packaging. Not net-new mechanism.

**Net-new tally for 238 (post-dedup): ~1 genuine candidate** (`portable_knowledge_bundle_standard`, on its portability/executable-spec twist only) — consistent with the wave's Cole-Medin cluster (233 ×2, 234/235/236 = 0 mech). Everything else EXISTS-AS Knowledge-Reservoirs / Manifest-Read-Graph / document-governance / Evidence-Plane. **dedup-pending, Opus-main verifies.**

### C. Reread flags
- ⚑ **NOT the primary OKF spec.** This is Cole Medin's secondary commentary/demo. Per Nick's Review 002, the actual OKF spec/repo (or "OKC") will be captured in **EVSRC-2026-000239** — **link 238↔239; upgrade/canonicalize this concept family when 239 (primary spec) is processed.** Treat 238 as interpretive precursor.
- ⚑ Knox `at:` timestamp = TK; Review 002 `at:` = TK (minor; non-blocking).
- ✅ Metadata block present at top of §3 Review 001 and lifted verbatim into §0/§0.1 (`identity_confidence: high_from_operator_metadata`) — no identity caveat.

### D. Hard read + strongest OMNI line
- **One-line hard read:** OMNI *already is* an agent-readable, index-first, progressively-disclosed markdown knowledge graph — the only thing 238 genuinely adds is the ambition to make a bundle **portable/shareable across agents** via a thin executable spec, and even that must never relax `projection≠truth` or the `GRD-036` promotion gate.
- **Strongest OMNI line:** *Agents need a protocol for knowledge the way they need a protocol for tools — but for OMNI the bundle is a **projection**, not authority: a portable, agent-executable knowledge standard makes reservoirs shareable, while document-governance + promotion-gating keep truth un-shareable-by-accident.*

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Knowledge-Reservoirs (MAJOR) · D7 Documents (MAJOR) · document-governance/projection≠truth (MAJOR) · Manifest-Read-Graph + context-economics/§B runtime (medium) · Evidence-Plane/Evidence-Router (medium) · Build-OS + Agent-Skills (medium)` · promotion: `watch` (secondary commentary; primary OKF spec pending in EVSRC-239 — upgrade on that pass)
- related sources: **EVSRC-2026-000239 (primary OKF spec/"OKC" — pending; link per Review 002)** · tightest siblings 219 (OpenWiki repo-docs), 236 (Google AI-coding masterclass / static-vs-dynamic context), 232 (`agent_ready_unstructured_data_substrate`), 227 (agent memory model), 213 (`context_packet`) · Cole-Medin cluster 233/234/235/236.

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-08` — Opus formal extraction pass: lifted operator metadata verbatim into §0/§0.1 (`identity_confidence: high_from_operator_metadata`); proposed slug `open-knowledge-format-karpathy-llm-wiki` (file NOT renamed); grep-verified build presence (`app lib components scripts supabase middleware.ts` — no knowledge-bundle/OKF/reservoir/progressive-disclosure machinery; "bundle" hits = commerce order bundles, "provenance" = artifact-pipeline migrations → build=absent for this concept family); wrote §3 Review 003 (10 concept clusters + 1 tension [thin-standard-vs-rich-governance = layering, routed] + net-new dedup [~1 genuine candidate `portable_knowledge_bundle_standard`, rest EXISTS-AS; dedup-pending Opus-main] + reread flags [NOT primary spec → link 238↔239]); filled §4 pointers; ticked §0.5; status raw_dropped→analyzed. **Did NOT edit registry/coverage/anchor (Opus-main folds fold-packet); did NOT rename file; bound nothing (`GRD-036`/`GRD-044`).**

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

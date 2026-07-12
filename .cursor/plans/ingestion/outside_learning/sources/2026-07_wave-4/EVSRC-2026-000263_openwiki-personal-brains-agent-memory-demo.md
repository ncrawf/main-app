# EVSRC-2026-000263 — <title or TK>

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed` (Opus-led brief Review 003 written 2026-07-11; folded to `EVRUN-2026-000005`; 0 net-new, impl tail of 262; propose-only)**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-4 scaffold (created 2026-07-11). Register/run: see `../../00_index.md` (wave-4). EVRUN to open at processing = `EVRUN-2026-000005` (or fold into wave-3 per operator).
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — AS-IS) + optional gut note (§3 Review 002). Then Opus writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry**, coverage matrix, and fills **§4 pointers** at closeout. Deep read lives HERE in §3 — never a sidecar (`GRD-044`).

## §0 — Source identity / metadata  *(normalized by Opus from transcript; no Knox read / screenshot provided)*
- evsrc_id: `EVSRC-2026-000263`  ·  filename: `EVSRC-2026-000263_openwiki-personal-brains-agent-memory-demo.md` *(renamed from `_TK` 2026-07-11 wave-close)*
- source_platform: `YouTube`  ·  source_url: `TK` (no URL/screenshot pasted)  ·  source_title: `OpenWiki Personal Brains — agent memory (demo)` *(inferred from transcript)*
- channel_or_org: `LangChain` *(inferred)*  ·  speaker: `Brace (Sproul), LangChain` *(inferred from transcript "It's Brace for LangChain")*  ·  published_at: `TK (~2026-07-10)`
- captured_at: `2026-07-11`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste (no screenshot/URL)`
- content_type: `first-party vendor product walkthrough (agent-memory setup)`  ·  source_reliability_context: `vendor implementation demo (lowest authority) — the OpenWiki "personal brains" impl of the 262 panel; illustrative, corroborate before use`  ·  topic_tags_light: `[OpenWiki, personal_brains, agent_memory, knowledge_maintenance, cron_update, wiki_brief, Notion_Gmail_Slack, LangSmith_tracing]`

## §0.1 — People / authorship / authority context
- primary speaker(s):
  - name: `Brace Sproul` · role_in_source: `presenter` · affiliation_at_publication: `LangChain (Head of Applied AI)` · speaker_type: `vendor practitioner` · authority_context: `demoing OpenWiki personal-brains (same presenter/tool as 262 panel); product-specific` · identity_confidence: `medium (first name in transcript; matches 262 speaker)`
- publisher / channel: `LangChain`  ·  interviewer / moderator / host: `n/a (walkthrough)`
- event_context: `implementation demo of the OpenWiki memory system discussed conceptually in 262 (LLM Wikis panel) — personal-brains connects Notion/Gmail/Slack, cron-updated`  ·  perspective / conflict notes: `first-party vendor; OpenWiki = a named rail, not an OMNI commitment. No Knox Review 001 → Opus-led brief extraction (low-signal tier)`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it, but every claim still routes through evidence → interpretation → gated promotion.

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
What's up everyone? It's Brace for Lang
0:01
Chain and today I'm really excited to
0:03
announce OpenWiki personal brains.
0:05
Personal brains is a new way for you to
0:07
generate and maintain generalpurpose
0:09
agent memory through open wiki that
0:11
connects to all your different services
0:13
and systems you already work in. Setting
0:15
it up is just as easy as setting up the
0:16
existing codebase memory. So let's jump
0:18
in and see how to do that. The first
0:20
thing I'll do is run open wiki personal
0:22
init.
0:24
When you run this, you'll see a very
0:25
similar onboarding flow to the codebased
0:27
memory, but at the end there's going to
0:29
be a few extra steps. So, first I'll
0:30
pick my model provider with OpenAI and
0:33
GPD 5.5. Then, it's going to ask for a
0:35
Lenmith API key for tracing. I'll set
0:37
that. And next, it's going to ask me to
0:40
edit or accept a wiki brief. This wiki
0:43
brief is like a prompt. You could think
0:45
of this as the instructions that you'll
0:46
provide to the agent every time it
0:48
generates or updates your memory so it
0:50
knows what to focus on, what to ignore,
0:52
and some more about you. basically just
0:54
a system prompt. So, as you can see, we
0:57
provide a default prompt here, but of
0:59
course, you can edit this or add on to
1:00
it if you see fit. For now, I'll accept
1:02
it as is. And then it's going to ask me
1:04
to set up a cron. This is another key
1:06
distinction between personal brains and
1:08
code brains. Code brains is specific to
1:10
an individual GitHub repo. So, we run
1:12
these updates in a GitHub action that
1:13
runs in the cloud in that repo. For
1:16
personal brains, it's not specific to
1:18
any individual repo and instead you want
1:19
it to be available to every agent
1:21
session on your computer. So, we run
1:23
these crons locally on your Mac. As you
1:26
can see, we suggest a cron 2 a.m. But of
1:28
course, you can overwrite this if you
1:29
want. For now, I'll accept it. And then
1:31
we ask you if you want to wake your Mac
1:33
for these scheduled refreshes. This is
1:35
very important because if you don't do
1:36
this and you close or turn your computer
1:38
off before you go to bed and your
1:39
OpenWiki update job runs overnight, it
1:42
won't actually run. So instead, we have
1:44
a way for you to natively wake your Mac
1:46
before this cron job executes so that
1:48
your computer is actually running by the
1:50
time uh the cron fires so they can
1:52
update your wiki. I won't do this right
1:54
now, but you should absolutely do this
1:55
when setting up your wiki.
1:57
Next, we get to the key difference
1:59
between personal and code brains. For
2:01
code brains, it's only running in a git
2:02
repo and it looks at your commits and
2:04
git history to generate documentation on
2:06
that repo. For personal brains, you need
2:08
to connect this to all the differenti
2:10
systems and services you use every day.
2:12
So wiki can proactively go out look in
2:14
those systems and generate memories
2:16
based on the things that you're doing
2:17
there. So as we can see we still support
2:19
git git repos. There's also notion gmail
2:23
web search hacker news and x or twitter
2:25
with many more coming soon like slack.
2:27
And of course if you have feature
2:28
requests here please open an issue in
2:30
the open wiki github repo and we will
2:32
see if we can support those as well. So
2:34
configuring these these sources is super
2:36
easy. Let's start with notion. All I
2:38
have to do is bring my cursor there and
2:40
then hit enter. It's then going to
2:42
prompt me to off with notion which I can
2:44
do in my browser. So we can see it opens
2:46
up a new tab which I can then accept.
2:48
Hit continue and then we can see
2:50
authorization complete. Now if I go back
2:52
to my terminal we can see browser
2:55
authentication completed and it's going
2:56
to ask me to set another prompt. This is
2:58
a prompt so the agent knows how and
3:01
where to look for new documents when
3:03
it's actually ingesting from this
3:05
source. So for notion I'll say
3:07
prioritize pages related to applied AI
3:09
and customer feedback. But of course,
3:10
you can set a custom prompt if you
3:12
wanted to focus on something more
3:13
specific.
3:15
Next, I'll go to configure X or Twitter.
3:18
This is a little more difficult than
3:19
notion because you do need a Twitter
3:21
developer account for this and an OOTH
3:23
client app, but we have documentation on
3:25
this in the repo and it's pretty easy to
3:26
set up. So, I'm going to hit enter here
3:28
and it's going to ask me to paste in my
3:30
Xclient ID. So, I have my clipboard. I'm
3:33
going to hit paste, enter, and then I'm
3:35
going to authorize with X. As you can
3:37
see, it opens up my browser where I can
3:39
then authorize the app and open wiki
3:41
authorization complete. Now, when I go
3:43
back to my browser once again, sorry, my
3:44
terminal, it'll ask me to set a prompt
3:46
for what to look for on X or Twitter,
3:49
uh, which I can pick from one of the
3:50
defaults or set a custom description.
3:53
For this, I'll just say track my
3:54
timeline and bookmarks.
3:56
Now, I can add more sources if I want,
3:58
and I can also add multiple connections
4:00
per source. Say I wanted to track
4:01
multiple X accounts or multiple
4:03
different web searches, I can do that.
4:05
Uh, but for now I'll continue so we can
4:07
see what this actually looks like in
4:08
practice.
4:10
When you hit continue, it's going to ask
4:11
you if you want to run your injection
4:12
now or wait until the scheduled time. If
4:15
you do wait till the scheduled time,
4:16
it'll run at 2 am or the cron job you
4:18
selected if you overrode that. Uh, but
4:20
running it now will actually run the
4:21
ingestion step for every source you
4:23
connected right now. Let's do that. So,
4:26
as we can see, it's running the agent,
4:27
and it's going to ingest one source at a
4:29
time, starting with notion because it's
4:31
the first one I set up. Now, while this
4:32
runs, let's look at a diagram to see
4:34
exactly how this actually works under
4:36
the hood. All right, let's talk a little
4:37
bit about how it works. Before I do
4:39
this, I want to make one key distinction
4:41
between open wiki memory and say the
4:43
memory in chat GPT or claude. The memory
4:45
in chat GPT or claude is designed to be
4:48
reactive. Right? So, you send a message
4:50
in, it then decides if it should
4:52
remember the context of your message and
4:54
if so, it stores it for later, but it
4:57
can't be proactive. So it doesn't go out
4:58
to discover things about you or your
5:00
interests automatically. With open wiki
5:02
memory, it's complimentary to these
5:04
existing memory systems because it will
5:06
go out and proactively look in all the
5:08
sources you've connected like your
5:09
notion, your Twitter feed, your Gmail
5:12
emails. It'll search the web and so on
5:14
to proactively figure things out that
5:16
you want it to remember, store those in
5:18
its memory, and then make that
5:19
accessible to agents going forward. So
5:22
now to to go over how it actually works,
5:24
you configure all your connectors and
5:26
then one connector at a time, we will
5:28
pull the connector, run an injection
5:30
script. This looks a little bit
5:32
different depending on what the
5:33
connector is, right? So if it's notion,
5:34
there is no API for say getting every
5:36
change over the last 24 hours. So
5:38
instead, what we do is we give the agent
5:40
the prompt that you set when you
5:41
configured the notion uh connector. We
5:44
then give it a tool to query notion and
5:45
it performs a gentic search to fetch all
5:47
that data, ingest it, and then finally
5:50
update the wiki. Once it's done with the
5:52
first connector, it'll go back and find
5:53
the next connector. So for me, that
5:55
would be X here. That'll run an
5:57
injection script. X is a little bit
5:59
easier because we can just say, give me
6:00
every tweet that I've I've sent over the
6:02
last 24 hours, every bookmark I've
6:04
bookmarked over the last 24 hours, and a
6:06
snapshot of my actual feed that I would
6:08
have scrolled through from the last 24
6:10
hours. Once it's downloaded all that
6:12
data, it'll run the actual agent to
6:13
update the wiki. And then once again,
6:15
it'll continue back to the next
6:16
connector until it's gone through all of
6:18
them. We've decided to make this
6:20
sequential because it's a little bit
6:21
easier on the agent's context if it's
6:23
doing them one at a time instead of all
6:25
at once. Also, if it's sequential, it
6:27
doesn't have to worry about conflicting
6:28
or overlapping data because each source
6:30
should return data specific to that
6:32
source. Right? So, my email will
6:34
probably be very different than what it
6:35
finds in Notion, which will be very
6:37
different to what it finds in Twitter.
6:38
So if we do it one at a time, it's able
6:40
to focus solely on that domain, ingest
6:42
the data from that, which will probably
6:44
be a very large amount, right?
6:45
Especially if it's, you know, email,
6:46
you're getting tons of emails or web
6:48
search. So focus on just that domain,
6:50
update the wiki, and then when it's
6:52
done, we start a fresh session where
6:54
it's able to go into the next connector
6:55
and ingest all of that data. Okay, so
6:57
that's high level how the open wiki
6:59
personal brain actually works. Now,
7:01
let's go look at an example of what this
7:03
actually looks like when it's done
7:04
generating. All right, before we talk
7:05
about the rest of the open wiki memory
7:07
directory, I want to first touch on this
7:09
new open questions file, which is a new
7:11
feature we just added in the brains
7:13
mode. So the open questions file is a
7:16
way for the agent to write down
7:17
questions which does not have the answer
7:19
for yet. Instead of just skipping over
7:20
them or making up information, you can
7:22
imagine, say in this use case where we
7:24
have a bunch of initials it found in
7:25
notion, but it doesn't know who those
7:27
initials actually correspond to. Instead
7:29
of hallucinating an answer or outright
7:31
ignoring them, it added them to the open
7:33
questions file where the agent can then
7:35
come back to later if and when it finds
7:37
the answer to update it as answered or
7:39
stale [snorts] if it decides it doesn't
7:40
need it anymore. This is an important
7:42
change we've added to a wiki where we
7:44
tell it at the beginning of every run
7:45
inspect the open questions file to look
7:47
at every open question so it's aware of
7:49
what they are. then ingest from that
7:51
source and at the end of the run revisit
7:53
the open questions file to either add
7:54
new open questions or answer them if
7:57
it's able to find the context it needs.
7:59
You as a human can also go in here and
8:01
manually modify these files to answer or
8:03
add questions that you want answered. Uh
8:05
or if there is an open question the
8:07
agent added and you you know the answer
8:08
to you can directly add them here and
8:10
then the next open wiki run it'll pick
8:12
them up and update its wiki accordingly.
8:15
Great. So the rest of the open wiki
8:17
directory looks pretty similar to how it
8:18
did in code mode. One other key
8:20
difference here is instead of adding a
8:21
open wiki directory in the root of your
8:23
repo, we add it in the root of your
8:25
computer because it should be accessible
8:27
to every single agent session that you
8:28
run on your machine and not just in
8:30
individual repos. Inside this directory,
8:33
there's similar files and folders from
8:34
what we saw before where you have your
8:36
actual wiki, there's logs, data on the
8:38
connectors, backups, uh the
8:40
onboarding.json which contains all the
8:42
configurations you set when onboarding
8:44
and your instructions.mmd file which I
8:46
mentioned before, right? This is the
8:47
open wiki uh instructions you set so it
8:50
knows what to focus on, what not to
8:51
focus on and more context about what you
8:53
want it to remember. You can always edit
8:55
this and every new run it'll pick up
8:57
whatever is the latest version of this
8:58
file. You also have file which stores
9:02
all the secrets which you've added. So
9:04
for say all the connectors or you know
9:05
web search APIs uh and right this wiki
9:08
looks very similar to what it did when
9:10
it was just for code mode where we have
9:12
sources. So, Google Hacker News, notion,
9:14
web search X. There's also individual
9:16
files for say my commitments, open
9:18
questions, which which we just went
9:19
over, personal logistics, the quick
9:21
start, which is the same as in code
9:22
mode, which is right, the index, which
9:24
agents can reference uh when first
9:26
entering this wiki to know what's in
9:28
there and high level about you, and then
9:30
also themes. So, this directory is fully
9:32
agent generated and agent maintained.
9:34
And the idea here is the same as in code
9:36
mode where it's a way to generate and
9:38
store memories about you without you
9:40
needing to do anything to actually get
9:42
those memories in besides initially
9:43
configuring it. All right, so that's a
9:45
high level of how the OpenWiki personal
9:47
brain mode works. You can all go try
9:49
this out now for free using our open
9:51
source agent, OpenWiki. And of course,
9:53
the existing OpenWiki code brain is
9:55
still there unchanged with lots more
9:57
coming soon. If you enjoyed this, please
9:59
go check out the repo and try out
10:00
OpenWiki. If you have feature requests,
10:02
feedback, or bug reports, please open an
10:04
issue on the repo and we'll handle those
10:06
ASAP. And of course, if you want to
10:07
contribute, open up a PR. We love
10:09
getting contributions from the rest of
10:11
the community. See you guys in the next
10:12
one.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

Knox / ChatGPT strategic read

1. Rough metadata

source_platform: YouTube · source_url: https://www.youtube.com/watch?v=sBg90v2qfas · source_title: OpenWiki Brains, general-purpose memory for agents · channel_or_org: LangChain · speaker: Brace Sproul · published_at: Jul 10, 2026 · captured_at: 2026-07-11 · capture_method: YouTube screenshot + full transcript · content_type: product demonstration / proactive agent memory / multi-source ingestion / automatically maintained wiki · source_reliability_context: first-party vendor implementation source. Reliable for OpenWiki’s demonstrated design and mechanics; promotional and insufficient as evidence that the resulting memory is accurate, safe, or appropriate for regulated use. · topic_tags_light: [proactive_memory, ambient_ingestion, wiki_brief, connector_scoping, scheduled_refresh, open_questions, uncertainty, memory_maintenance, personal_context, agent_generated_knowledge]

2. People / authority context

Brace Sproul — LangChain applied-AI leader demonstrating OpenWiki’s “Personal Brains” mode. He has direct authority over the product pattern being shown: source connectors, scheduled ingestion, wiki-generation prompts, open-question tracking, and agent access.

The source is a practical implementation companion to the preceding LLM-wiki panel. That panel explored first principles and disagreement; this video reveals the concrete product choices—and therefore the governance risks—behind one implementation.

3. Suggested processing

priority: 4/5

depth: semantic

EVRUN needed?: yes

duplicate/sibling relationship: direct implementation sibling to LLM Wikis and how to give your agents memory. Most Knowledge Reservoir doctrine should remain consolidated in that source. This video adds specific pressure around proactive ingestion, purpose briefs, connector-scoped retrieval, unresolved-question tracking, shared memory exposure, and unattended maintenance.

likely landing zones: Knowledge Reservoirs · Patient CNS / proactive sensing · D7/Evidence Plane · Clinical Memory · Identity/RBAC · consent and purpose limitation · Build-OS · secrets/runtime security · context assembly.

promotion posture: Knowledge-Reservoir contract sharpening + security/authority guardrail + useful uncertainty-management pattern

4. Strategic read
Classification

This is a useful product-level pressure test, not a separate memory thesis.

Its strongest contribution is showing how a proactive memory system actually behaves:

a user defines a memory brief;
sources receive individual retrieval instructions;
scheduled jobs inspect those sources;
an agent rewrites a persistent wiki;
unknowns are stored as open questions;
the resulting memory becomes available to future agents.

That chain exposes where OMNI must separate sensing, derived knowledge, unresolved uncertainty, memory adoption, and access authority.

Core takeaway

The keeper is: proactive memory should be governed as a purpose-scoped knowledge-compilation process that preserves unresolved questions and source lineage—not as an unattended agent rewriting a universal personal brain.

A. The “wiki brief” is really a memory-purpose contract

OpenWiki begins with a prompt telling the memory agent what to focus on, what to ignore, and what it should remember.

This is more important than generic prompt configuration. It approximates a purpose declaration for longitudinal memory.

OMNI translation:

A memory or knowledge-compilation job should declare:

whose context is being processed;
for which purpose;
which sources are permitted;
what concepts are in scope;
what must be excluded;
how long resulting knowledge may remain active;
which actors may later retrieve it.

A free-form prompt alone is not sufficient enforcement, but the product pattern points toward the right primitive.

Keeper doctrine:

Memory collection begins with declared purpose, not indiscriminate availability.
“What should this system remember?” is an authority and consent question before it is a prompt question.
The memory brief should constrain both ingestion and downstream use.

Candidate pressure:

knowledge_compilation_brief
memory_purpose_scope
source_ingestion_policy

B. Connector-specific prompts correctly recognize that sources have different semantics

The system allows separate instructions for sources such as Notion and X—for example, prioritizing applied-AI pages in one and tracking bookmarks or timelines in another.

That is directionally correct. Different sources carry different:

authority;
expected content;
update behavior;
privacy;
reliability;
retrieval mechanics.

OMNI should go beyond “search this source for topics.” Each connector needs a source profile describing:

source owner;
authority class;
permitted purpose;
freshness behavior;
access scope;
expected confidence;
admissible downstream actions.

Keeper doctrine:

Connectors are not interchangeable pipes; each source enters with distinct authority and use constraints.
Source-specific retrieval instructions must not erase source-specific provenance.
C. Proactive memory is ambient sensing, not automatic truth creation

OpenWiki distinguishes reactive conversational memory from proactive memory that searches connected services and the web for material the user may want remembered.

This is the central OMNI pressure.

The safe architecture is:

source event or scheduled observation → candidate knowledge → reconciliation → optional adoption → governed retrieval

The unsafe architecture is:

ambient source → agent-generated wiki → universal memory

For OMNI, proactive collection may detect:

a new laboratory result;
a patient message;
an uncompleted obligation;
a policy change;
a relevant publication;
a new fulfillment event.

But the resulting interpretation remains a candidate until its authority, relevance, and freshness are resolved.

Keeper doctrine:

Proactive sensing may create memory candidates; it does not automatically create adopted memory.
Ambient ingestion without provenance and purpose becomes surveillance and authority drift.
The system must preserve the difference between noticing something and knowing it to be true.
D. Sequential ingestion is a context-control technique, not reconciliation

OpenWiki processes connectors one at a time and starts fresh sessions to reduce context pressure and avoid overlapping information.

The context-isolation logic is useful. The conflict assumption is not.

Email, Notion, social feeds, records, and messages often describe the same entities and events differently. Sequential processing may reduce token load, but it does not resolve:

contradiction;
duplication;
temporal supersession;
differing source authority;
one source quoting another;
identity mismatch.

OMNI should therefore separate:

source-local extraction
cross-source reconciliation
knowledge projection update

Keeper doctrine:

Source isolation improves extraction fidelity; reconciliation establishes coherence.
Processing sources separately does not make their claims non-overlapping or non-conflicting.

This strongly reinforces Observation extraction versus Clinical Memory adoption.

E. The open-questions file is the source’s best concrete pattern

When the agent encounters initials it cannot resolve, it records the uncertainty rather than hallucinating or ignoring it. Questions may later be answered, manually corrected, or marked stale.

This is a durable pattern for OMNI.

A knowledge system should preserve unresolved uncertainty as an explicit object:

question;
originating source;
why it matters;
what evidence is missing;
who could resolve it;
urgency;
status;
expiration or staleness.

This is better than forcing every ingestion run into a falsely complete narrative.

Keeper doctrine:

Unknown should be represented, not silently omitted or converted into confidence.
An unresolved question is a first-class knowledge state and may create an obligation to seek clarification.
Staleness, resolution, and abandonment are distinct endings for a question.

Candidate pressure:

knowledge_question
uncertainty_obligation
question_resolution_state

This may compose onto REV-184 blockers and obligations rather than require a new domain.

F. Universal memory exposure violates least privilege

The product stores the personal wiki at the computer level so it is available to every agent session on the machine.

That is convenient for personal experimentation. It is unacceptable as a default OMNI pattern.

Not every agent should receive:

every patient fact;
every business record;
personal communications;
financial context;
unrelated clinical history;
proprietary strategy.

OMNI context must be assembled per:

actor;
patient;
relationship;
operator;
purpose;
workflow;
permission;
minimum necessary scope.

Keeper doctrine:

Persistent knowledge may be shared infrastructure without being universally readable context.
Memory access should be resolved per task, not inherited from device or session proximity.
The right to compile knowledge does not imply the right of every agent to consume it.
G. Fully agent-maintained memory is too weak for consequential truth

OpenWiki describes the directory as fully agent-generated and agent-maintained, requiring little intervention after setup.

That may be reasonable for low-risk personal notes. It cannot become the governing model for clinical or regulated memory.

OMNI needs risk-tiered update posture:

low-risk projection: automatic update permitted;
meaningful organizational knowledge: sampled or exception review;
clinically consequential assertion: source revalidation and authorized adoption;
high-risk contradiction: block action and route for resolution.

Keeper doctrine:

Unattended maintenance is acceptable only where error consequences and recovery costs permit it.
Agent-maintained knowledge should never silently impersonate domain-committed truth.
H. Scheduled refresh is a crude substitute for event-driven sensing

The system proposes a nightly cron and may wake the computer to perform the refresh.

This is an implementation convenience, not a durable architectural principle.

OMNI should prefer:

event-driven updates when authoritative events exist;
bounded polling when they do not;
source-specific freshness requirements;
explicit knowledge age and last-verification state.

A nightly schedule may be sufficient for bookmarks and personal research. It may be dangerously slow for urgent care signals and needlessly frequent for stable policy material.

Keeper doctrine:

Refresh cadence follows source volatility and consequence, not one universal cron.
Knowledge freshness must be visible even when update timing is automated.
Where it lands

Knowledge Reservoirs — major

Purpose-scoped compilation, source-local extraction, open questions, freshness, and derived-memory lifecycle.

Clinical Memory / Observation / D7 — major guardrail

Derived wiki content must remain distinct from extracted observation and adopted clinical truth.

Patient CNS — medium

Proactive discovery can create useful candidates, but must pass consent, relevance, burden, urgency, and authority gates.

Identity / RBAC / consent — major

The demonstrated “available to every agent session” pattern directly conflicts with minimum-necessary and purpose-scoped access.

Build-OS — medium

The memory brief, source-specific instructions, logs, backups, and open-question loop are useful engineering patterns.

What not to import blindly
Do not use “personal brain” as canonical OMNI language; it anthropomorphizes a derived knowledge store.
Do not allow a prompt to serve as the sole purpose or consent boundary.
Do not grant every agent access to a universal user memory.
Do not assume sequential ingestion resolves source conflict.
Do not let ambient web or social content become adopted memory automatically.
Do not store connector secrets casually alongside ordinary configuration.
Do not use one nightly cadence for all knowledge.
Do not treat fully agent-maintained documentation as safe for action-critical clinical claims.
Do not confuse backups and logs with source provenance or domain authority.
Tiering

Memory-purpose / compilation brief
stale-vs-v3: PARTIAL · weight_tier: spine-supporting · status: promote

Proactive source ingestion
stale-vs-v3: PARTIAL · weight_tier: spine · status: promote with strong guardrails

Open questions as explicit uncertainty
stale-vs-v3: PARTIAL · weight_tier: spine-supporting · status: promote/dedup

Universal cross-session memory exposure
stale-vs-v3: CONTRADICTS least-privilege posture · weight_tier: guardrail · status: reject

Fully agent-maintained personal wiki
stale-vs-v3: ABSENT · weight_tier: low-risk implementation pattern · status: bounded watch

Named OpenWiki implementation
stale-vs-v3: implementation-specific · weight_tier: no-op · status: reject as doctrine

5. Hard read

This is a useful companion to the wiki panel because it shows the difference between an attractive demo and the governance OMNI actually needs.

The product gets three things notably right:

declare what memory should focus on;
ingest sources under separate instructions;
preserve unresolved questions instead of inventing answers.

But it also demonstrates the failure mode OMNI must avoid: a broadly connected, unattended agent compiling a universal memory that every future agent can read.

Strongest OMNI line:

OMNI should proactively compile purpose-scoped knowledge from permitted sources, preserve uncertainty as explicit questions, and expose only the minimum necessary projection to each workflow—never allowing an unattended universal memory to become truth by repetition.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

reviewer: `Opus` · at: `2026-07-11` · run: `EVRUN-2026-000005` · **low-signal tier — no Knox Review 001; Opus-led brief extraction** grounded vs §1 · dedup baseline: `000001 §2A` + `000002` + `000003` + 262 + reservoirs canon.

**HEADLINE VERDICT.** Low-signal vendor **implementation demo** of OpenWiki "personal brains" (Brace/LangChain) — the concrete impl of the 262 memory panel. **0 net-new, 0 sharpenings** (all concepts belong to 262 + OMNI's deeper reservoir canon). Value = a worked example of the derived-knowledge maintenance loop 262 discussed. `doctrine=AFFIRM · build=absent`. Treat OpenWiki as a named rail; **do NOT double-count vs 262.**

### A. Concept clusters (brief — low-signal, impl of 262)

| concept | OMNI meaning | homes | anchor | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|
| **Auto-maintained personal agent memory over existing services** | Compiled/derived knowledge projection over sources (Notion/Gmail/Slack) — EXISTS-AS 262-A + reservoirs; the connect-to-existing-services pattern = ingestion pathway (not a truth store) | Knowledge Reservoirs (FWREG-007) · Evidence Plane · 262 | "generate and maintain…agent memory…connects to all your…services" [0:03] | AFFIRM | absent | none | no-op | cite (dedup to 262) |
| **Wiki brief = system prompt (what to focus/ignore)** | Operator-authored instructions steering knowledge compilation — EXISTS-AS the wiki-brief ≈ compilation policy (262-D lifecycle) + owner-authored config | reservoirs · Settings/config | "wiki brief…basically just a system prompt" [0:54] | AFFIRM | absent | none | vocabulary | cite |
| **Scheduled (cron) knowledge update** | Periodic recompilation — the exact "cron rewrites pages" pattern 262-D flagged as **insufficient governed maintenance** (risks dup/false-synthesis/authority-blending/drift); OMNI needs a governed lifecycle, not a nightly cron | 262-D (maintenance lifecycle) · 227 memory_authority_state | "set up a cron…run…locally on your Mac" [1:23] | AFFIRM | absent | tension (cron-rewrite vs governed lifecycle — 262-D) | vocabulary | cite (guardrail per 262-D) |

**Roll-up:** 3 AFFIRM · 0 net-new. Reinforces 262 (esp. the guardrail: a cron that rewrites pages is NOT governed maintenance).

### B. Net-new primitive candidates (dedup)
- **Net genuine mints = 0.** Everything EXISTS-AS 262 + reservoirs canon (243/227/Evidence Plane/Clinical Memory). This is 262's implementation tail.

### C. Reread flags
- **Impl sibling of 262** — fold as one; do NOT double-count memory concepts. The cron-update mechanic is a concrete instance of the 262-D "cron ≠ governed maintenance" caution.
- Metadata inferred (no URL/screenshot/date); firm at wave-close. Lowest authority (vendor demo).

### D. One-line hard read
OpenWiki impl demo of 262; **0 net-new**. **Strongest (only) OMNI line:** a scheduled cron that rewrites memory pages is a product feature, not governed knowledge maintenance — OMNI needs the governed derived-knowledge lifecycle (262-D), not a nightly rewrite.

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000005` · concept_registry: `analysis/EVRUN-2026-000005_ai-corpus-wave-4/EVRUN-2026-000005_ai-corpus-wave-4_concept_registry_and_routing_map.md` · source_anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `OpenWiki impl demo of 262; 0 net-new; reinforces 262-D guardrail (cron-rewrite ≠ governed maintenance)` · promotion: `no-op` (propose-only) · note: `no Knox read; metadata inferred; do not double-count vs 262`

## §5 — Change log
- `2026-07-11` — wave-4 scaffold created (id `EVSRC-2026-000263`, provisional `_TK` slug); awaiting Nick transcript + Knox-read + URL paste.
- `2026-07-11` — transcript pasted (no Knox read / screenshot); **Opus-led brief Review 003 written** (`EVRUN-2026-000005`); §0/§0.1 inferred; status `raw_dropped → analyzed`. 0 net-new (impl tail of 262). Folded to `EVRUN-2026-000005`.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md`.

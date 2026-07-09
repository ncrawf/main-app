# EVSRC-2026-000234 — Omnigent: The New Meta-Harness for EVERY Coding Agent (Cole Medin)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000234_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000234`  ·  filename (proposed slug; file NOT renamed): `EVSRC-2026-000234_omnigent-databricks-meta-harness-orchestration.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=oGE_Dwz-rMk`  ·  source_title: `Omnigent: The New Meta-Harness for EVERY Coding Agent - Claude Code, Codex, Pi, More`
- channel_or_org: `Cole Medin`  ·  speaker: `Cole Medin`  ·  published_at: `approx. mid-Jun 2026 (~"3 weeks ago" from 2026-07-07 capture)`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `meta-harness / multi-coding-agent orchestration (Databricks Omni Agent / Omnigent) — harness engineering, cross-agent implement→review workflows, sandboxing, guardrails, HITL approval, custom orchestrators, shared multi-device sessions`  ·  source_reliability_context: `practitioner — creator walkthrough of Databricks' open-source Omni Agent; tactical architecture signal for meta-harness patterns, NOT independent proof of production maturity; ⚠ do NOT confuse external "Omni Agent" with internal OMNI doctrine`  ·  topic_tags_light: `[meta_harness, harness_engineering, Omni_Agent, Omnigent, Databricks, Cole_Medin, coding_agents, Claude_Code, Codex, Pi, multi_model_orchestration, cross_agent_review, sandboxing, guardrails, HITL_approval, worktrees, shared_sessions, Build_OS, AI_Substrate]`
- identity_confidence: `high_from_operator_metadata` (Knox metadata block present at top of §3 Review 001 — lifted verbatim; no caveats)

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Cole Medin` · role_in_source: `presenter (creator walkthrough)` · affiliation_at_publication: `independent AI-coding content creator; building "Archon" (a meta-harness-adjacent tool)` · speaker_type: `educator / practitioner` · authority_context: `AI-coding YouTube educator; explicitly self-interested (bringing Omni Agent ideas into his own Archon tool) — tactical/demo authority, not vendor-of-record` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `Cole Medin (YouTube)`  ·  interviewer / moderator / host: `n/a (solo walkthrough)`
- event_context: `Product walkthrough of Databricks' newly open-sourced "Omni Agent" / "Omnigent" — a meta-harness for orchestrating multiple coding agents (Claude Code / Codex / Pi). Tool authored by Databricks (project driven by their CTO, dogfooded internally).`  ·  perspective / conflict notes: `⚠ NAME COLLISION — external "Omni Agent"/"Omnigent" ≠ internal OMNI substrate; keep strictly separate. Creator has a stated conflict (building a competing/adjacent tool, Archon). Treat maturity claims as demo-signal, not proof.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [x] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [~] update EVRUN concept registry (cross-source) — *fold packet RETURNED to Opus-main; registry NOT edited by this agent per hard contract* · [~] update coverage matrix — *same (not edited here)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introduction
0:00
There is a new open- source tool that
0:02
was released just over the weekend. It's
0:04
called Omni Agent. And we're going to
0:06
unpack this today because it is a very
0:08
powerful and free-touse meta harness. A
0:11
meta harness is a tool that allows you
0:14
to run longer AI coding workflows,
0:16
mixing AI coding assistance. And so the
0:19
most classic example that people really
0:21
like right now is using cloud code for
0:22
the implementation in a workflow and
0:24
then reviewing that code with codecs.
0:27
All of the top engineers right now,
0:29
they're not relying on a single model or
0:31
even a single harness for their
0:34
workflows anymore because we want to
0:36
lean on the different strengths of the
0:38
different AI coding assistants and also
0:40
have these different sessions for the
0:42
sake of context and token optimization
0:44
which is more important than ever right
0:47
now. An Omni agent is the layer above
0:49
the AI coding assistance that makes this
0:51
orchestration really straightforward.
0:53
Because if we don't have a tool like
0:54
this, just one session to manage all of
0:56
our coding agents and we can build
0:57
custom agents. We'll get into all of
0:59
this here. If we don't have something
1:00
like this, we have to go between
1:02
different terminals, create all these
1:03
handoff documents. It really isn't
1:06
straightforward. And so the idea of a
1:07
meta harness, it really is peak harness
1:10
engineering. And so I want to talk about
1:12
why meta harnesses are so important
1:14
right now. Then we'll get into how easy
1:16
it is to use Omni Agent to drive your AI
1:19
coding workflows, even building a custom
1:21
setup in the platform. Cool. So, let's
Why Meta-Harnesses Matter
1:23
start by talking about why meta
1:25
harnesses are so important right now.
1:27
And so, first things first, if there's
1:29
one lesson we can learn this year for AI
1:31
coding, it's that the harness matters as
1:34
much as or maybe even more than the
1:36
model. And it's even more apparent right
1:38
now with the recent ban of Fable 5. We
1:40
can't even rely on having the best LLMs
1:43
for our AI coding workflows or getting
1:45
better ones. And so if we want to make
1:46
our AI coding more reliable, that brings
1:49
us back to the harness. If the LLM can't
1:51
get better, then we better make the
1:54
system around the LLM more powerful.
1:56
See, your harness is everything like
1:58
your system prompt, tools, skills,
2:00
workflows, rules, all of that together
2:02
packaged up is our harness for making a
2:04
single AI coding assistant more reliable
2:06
for us. and the meta harness. This is
2:09
what a lot of people are really starting
2:11
to lean into right now. This is the next
2:13
big thing for AI coding. Instead of
2:15
making one coding agent better, what if
2:17
we have the layer above that
2:19
orchestrates many AI coding assistants
2:22
working together on larger tasks? That's
2:24
exactly what a metah harness is. I'm
2:26
building something kind of around meta
2:28
harness engineering with archon. And
2:30
there's actually a lot of ideas from
2:31
Omni Agent that I'm going to be bringing
2:33
into my tool that working on as well.
2:35
This is just so powerful right now. And
2:37
Omni Agent has made it so easy for us to
2:40
run this meta harness pretty much right
2:42
out of the box. Like we'll see in this
2:43
video here, you can get this up and
2:44
running in just minutes. You can also
2:47
work on it across different devices in
2:49
the same environment. We of course can
2:51
connect all of the most popular AI
2:53
coding assistants like Cloud Code,
2:54
Codeex, and Pi using a bunch of
2:56
different models. We can share our
2:58
sessions with other people, which is
3:00
another thing that coding agents don't
3:02
really have right now. And then of
3:03
course they have a lot around policies
3:05
and guardrails and running agents and
3:07
sandboxes. So this is really set up for
3:09
a production environment as well. I'm
3:11
really impressed with everything that
3:13
they built here. And I'm just ecstatic
3:16
that all this is open source for us to
3:18
try right now. So to get started with
Getting Started
3:20
Omni Agent, literally all you have to do
3:22
is take a link to this GitHub repo, give
3:24
it to your AI coding assistant, and tell
3:26
it to set up everything. And of course,
3:28
I'll have a link to this repo in the
3:30
description. And even if you want to do
3:31
it yourself, it's just a single command
3:33
to set up everything. It's so easy. I
3:35
would encourage you like just try this
3:36
right now. You don't even have to
3:38
reauthenticate because using Claude or
3:41
Codeex or even Pi, it's just going to
3:43
use the credentials from the CLI you're
3:44
already signed into because Omni Agent
3:46
just runs right on your machine. And so
3:49
it even ships with Poly and Debbie a
3:52
couple of example orchestrator agents
3:54
that go between Claude and Codeex. I'll
3:57
show you how these work and even how you
3:58
can create your own agents and
4:00
orchestrators in this video. And so
4:02
before we dive in, just a little bit of
4:04
context. I find this quite interesting.
4:05
Omni agent is open source from the
4:08
company data bricks. And so massive
4:10
company, this is a project driven by
4:12
their CTO. They're already using this
4:15
very extensively internally, right?
4:17
They're they're dog feeding their own
4:18
platform. They're using it for their
4:20
everyday engineering. And of course,
4:22
they're having great success with it. It
4:24
really is an impressive tool cuz you can
4:26
pick any agent. You can build the custom
4:28
ones like I will show you in a bit. And
4:31
then you run it in a sandbox. So it's
4:33
it's reliable, it's secure, and then you
4:35
have the main orchestrator that has your
4:37
history, all of your policies like the
4:39
guardrails, your MCP servers and skills.
4:41
So the AI layer that you customize lives
4:44
in the server and then that can apply to
4:46
any of the AI coding assistants that you
4:48
run. So it's not like you have to have a
4:50
specific setup for PI and then a
4:52
specific one for cloud code. Everything
4:54
runs at the top level and then we can
4:56
access it through a lot of different
4:57
ways. They have their native app. We
4:59
have the REST API if you want to do
5:01
things programmatically. The terminal if
5:02
you're comfortable with that like cloud
5:04
code, a web UI that we already saw. So
5:07
many different ways to access it. So
5:09
once you have Omni Agent up and running,
5:11
you'll have a web UI that looks like
5:13
this. It's nice, simple, and elegant. It
5:15
reminds me a lot of the codeex app. So
5:17
it's just agent first. You have your
5:19
chat session here and you tell it what
5:20
you want to build. We can go between the
5:22
different coding agents and the example
5:25
ones for orchestrating that they gave
5:26
and then also a couple of custom ones
5:28
that I'll cover with you here. And then
5:30
for the custom one, we can go between
5:31
the different harnesses. So if I even
5:33
wanted to use PI with Olama for some
5:35
local development, I can even do that
5:37
with Omni Agent. So it's very flexible.
5:39
I can pick my working directory like my
5:41
AI tutor application and I can even do
5:44
work trees which are very important for
5:46
parallel development. And then I just
5:48
send off my request. Obviously, we're
5:50
not going to watch Paint Dry here. So,
Polly: Claude Implements, Codex Reviews
5:51
I'm going to go to a conversation that
5:53
is already complete. So, I selected Poly
5:55
as my orchestrator here. It has skills
5:58
for how to run these larger workflows
6:01
between different coding agents. And
6:02
then it has access to call upon the
6:05
different harnesses. And so, you can
6:07
give it a GitHub issue or just a free
6:08
form request like I did right here. And
6:10
I'm specifically saying to delegate the
6:12
implementation to Cloud Code and the
6:14
review to Codeex. And so it loads
6:17
context on our work and then it loads
6:19
the skill that Pauly has. So it knows
6:22
our workflow, our repeatable workflow
6:24
for this specific flow and then we kick
6:28
off cloud code for implementation. So we
6:31
have the prompt that we're sending into
6:32
cloud code. This is a subprocess that
6:34
you can have run in sandbox or not
6:36
whatever you can configure all of this
6:38
and we'll talk about that as well. And
6:40
so then Poly is going to monitor, make
6:42
sure that Claude code goes through the
6:44
implementation and then it'll send off
6:46
the review to Codeex. So I didn't even
6:48
have to set up authentication again. It
6:50
just used the codeex and cla code
6:52
credentials I already had. So I had this
6:54
up and running in like literally less
6:56
than 10 minutes. I was able to run this
6:57
workflow going between cloud and codec
6:59
so easily. And I know this is a pretty
7:02
simple example of orchestrating a larger
7:05
AI coding workflow, but it is very
7:08
important, at least at a very
7:09
fundamental level, to do your code
7:10
review in a separate coding agent
7:12
session from your implementation.
7:14
Otherwise, the LLM builds up way too
7:17
much bias. And this isn't like a
7:19
absolute truth, but a lot of people feel
7:21
like Codeex is best at reviewing and
7:24
Claude is best at implementing. So if
7:26
you're not doing a workflow like this, I
7:28
would encourage you to just try it,
7:29
especially because of how easy it is
7:31
with Omni Agent to run this kind of
7:33
thing now. And so we end with the
7:35
implementation just local in our work
7:36
tree. And of course, we can follow up
7:38
just like any AI coding assistant and
7:39
say make a PR for this just for example.
7:42
So, however we want to then get this to
7:44
the point where we review it and ship
7:45
it, you can do all that with Omni Agent.
7:47
It has all of the capabilities that any
7:50
AI coding assistant would have, plus the
7:53
ability to also call upon individual
7:55
coding agents. So, I don't want to spend
Anatomy of an Orchestrator
7:58
too much time in the config here, but I
8:00
at least want to show you how this works
8:01
at a high level. They've done a really
8:03
good job making simple primitives for us
8:05
to build all of the custom agents and
8:07
orchestrators in Omni Agent. And of
8:10
course, it's really set up for our AI
8:13
coding assistants to help us build our
8:15
own custom agents if we want to in the
8:17
platform. And so every single
8:19
orchestrator comprises of three parts.
8:22
We have the configuration and then we
8:24
have all the skills like the cross
8:26
review one that we saw being used in the
8:28
web UI and then we have the agents that
8:30
it can call upon as it is orchestrating
8:33
a larger workflow. So cloud code and
8:35
codeex like we saw and then if we wanted
8:37
to use like our Kimmy subscription or
8:39
miniax or local modama poly the default
8:42
one here can even run pi as well and so
8:45
within our configuration we have the
8:47
executor like for our orchestrator when
8:50
it's not calling upon an agent what is
8:51
the actual coding assistant we're using
8:53
so it's using claude at the highest
8:55
level we have its system prompt which is
8:57
quite long but system prompts can be
8:59
pretty long these days we have the
9:01
sandboxing configuration so we can run
9:03
unsandboxed or run in something like
9:05
Docker or one of those more production
9:07
platforms like E2B for example. Uh yeah,
9:10
there's a lot of different configuration
9:11
here around like the guard rails. And so
9:14
there's a whole capability in omni agent
9:16
I'll show in a little bit where we can
9:17
have certain actions where we as a human
9:19
have to approve. And so we have human in
9:21
the loop where it'll wait for us to
9:24
approve something before it continues in
9:26
the workflow like force pushes to get
9:28
for example. And then we have the tools
9:30
that it has access to. And so this is
9:32
where we tell it that these are the
9:33
agents that you can delegate work to
9:35
when you're orchestrating things at a
9:37
high level. And then skills, I mean
9:39
these are like just the classic skills
9:40
that we have with claude codeex every AI
9:43
coding assistant. This is the workflow
9:45
that it can walk itself through. And
9:47
then each of the individual agents has
9:49
the exact same configuration. So same
9:51
system prompt executor like this one is
9:53
using claude. Obviously the codeex one
9:55
is using codeex pi is using pi. The
9:58
tools it has access to the guard rails.
10:00
And so we can make things very custom
10:01
for each individual agent that we're
10:03
orchestrating as well. Very cool. And so
10:05
I have a cool example here showing you
Custom Agents & Guardrails
10:07
both how to build custom agents in
10:10
Omnien and then also how we can do
10:12
policies and guard rails. And so this
10:15
agent right here, I made something very
10:17
simple, right? Like super simple system
10:18
prompt using cloud code. No sandboxing
10:21
or anything, but I have a custom
10:23
guardrail here where I'm allowing cloud
10:25
code to really run any command
10:26
autonomously except any sort of get push
10:29
that is using the force flag, right?
10:31
Like that is one of those more dangerous
10:33
actions you want to be careful of your
10:35
agent running because it can override
10:36
changes in your repo. And so the policy
10:39
here just lives right next to the config
10:41
for the agent. And it's just Python code
10:43
which also I didn't write this either,
10:45
right? Like this entire thing, I had my
10:47
AI coding assistant build this custom
10:48
agent for me just based on my request.
10:50
Like I literally just told it to look at
10:53
Paulie and Debbie for an example of how
10:56
all the config is set up and then just
10:57
build this for me. And so it's going to
11:00
ask for my approval whenever I run any
11:02
kind of forced get push. And so let me
11:05
actually show you that here. So I'm
11:06
going to go back to Omnigent here. I'm
11:08
going to switch to my guarded custom
11:11
agent that I have loaded up. And then
11:12
I'll just paste in a prompt. I'm just
11:14
telling it to run this command. Get push
11:16
origin feature login. And also another
11:19
thing I didn't show you cuz I didn't
11:20
show you a live run yet. It's really
11:21
cool how uh once it loads the repo, we
11:24
can see like all the files in the
11:25
workspace. We can see the agents that
11:27
we're using if we're orchestrating many
11:29
of them. It's really neat the the UX and
11:32
the UI that we have here in the
11:33
platform. And here you can see that I
11:35
told it to run the command and now it's
11:37
asking for my approval. And so we can
11:39
get really custom here with the
11:40
capabilities we allow our coding agent
11:42
to just run with versus when we have to
11:44
approve. And yeah, you can do this with
11:46
hooks and claw code for example. But the
11:48
benefit here is that we can apply this
11:51
no matter the coding agent that we're
11:52
using or orchestrating in Omnien. And we
Debby: Multi-Model Debate
11:55
can use Omnien for more than just AI
11:57
coding as well. Debbie, their other
11:59
example they ship along with Paulie is a
12:01
great example for this because this is
12:04
an orchestrator that pits two coding
12:06
agents against each other to argue on a
12:09
question or a topic and then come to a
12:12
conclusion together with Debbie
12:13
orchestrating everything. And so I ask
12:15
my question and then it lets Claude
12:18
reason about it and take on one
12:19
perspective and then GPT take on the
12:21
other perspective. We can also click
12:23
into the view to see their reasoning and
12:26
all the tokens for each of the
12:27
individual agents and then back to
12:29
Debbie to see how everything is being
12:31
orchestrated. And so basically it goes
12:34
through two rounds here or at least
12:35
that's what I prompted it to do. So then
12:37
it sends the GPT feedback into Claude
12:39
and vice versa for one more round. And
12:41
then we sort of conclude the debate with
12:44
Debbie synthesizing what both agents
12:46
have said, giving us a final answer. So
12:49
again, just like my test with Poly, it's
12:51
a rather simple example, but I just want
12:54
to quickly show what these workflows can
12:56
look like. And I'm sure your imagination
12:59
can really start to run wild here with
13:00
the kinds of ways that you can build
13:02
these larger workflows, combining coding
13:04
agents when it becomes so incredibly
13:06
easy to do so, even setting up your own
13:09
custom orchestrators like I showed
Same Session Across Devices
13:11
earlier. All right. So, at this point,
13:13
I've showed you every feature at least
13:15
at a high level for Omnigen except for
13:17
the collaboration. So, what I want to
13:19
show you really quickly is how we can
13:21
work in the same session both on our
13:24
phones and on our computer. And you can
13:26
do this across the internet. So, you can
13:27
work with people across the globe as
13:29
well. But the easiest setup is to be
13:31
working with different devices on the
13:32
same Wi-Fi network. And so, if you
13:34
scroll down in the read me here, they
13:36
have instructions for doing that,
13:37
deploying to a server using it from your
13:40
phone. And so, personally, I didn't
13:42
really do this myself. I just had my
13:44
coding agent set up everything for me.
13:46
That's obviously a theme that runs
13:48
through any kind of setup these days.
13:49
But, yeah, very easy to get this up and
13:51
running. And so, if we go back over to
13:52
Omnagent here, just over to this other
13:55
conversation that I showed you earlier
13:56
with the human in the loop. I'm going to
13:58
go ahead and send a message on my phone.
14:01
So, I'll just say hi right here. Send it
14:03
in. And boom, there we go. You can see
14:04
it immediately pop up on our desktop
14:08
here. So very cool that just between
14:10
different devices I can keep the
14:11
conversation going as I'm going between
14:13
different rooms in my house. And like I
14:14
said, you can host this as well. So you
14:16
can even work with it with other people.
Wrap-Up
14:19
So there's everything you need to know
14:20
to get started with Omniant. And meta
14:23
harnesses are just so important now. You
14:25
don't want to be stuck with just one
14:27
model or provider for your entire AI
14:29
coding workflow. It's just not the best
14:31
way to do things these days. And so I
14:34
would highly encourage you to try out
14:35
Omnigen. so easy to get up and running.
14:38
And so that's everything I got for you.
14:39
Now, if you appreciated this video and
14:40
you're looking forward to more things on
14:42
harness engineering and AI coding, I
14:44
would really appreciate a like and a
14:46
subscribe. And with that, I will see you
14:47
in the next video.

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
source_url: https://www.youtube.com/watch?v=oGE_Dwz-rMk
source_title: Omnigent: The New Meta-Harness for EVERY Coding Agent - Claude Code, Codex, Pi, More
channel_or_org: Cole Medin
speaker: Cole Medin
published_at: approx. mid-Jun 2026 / “3 weeks ago” from capture
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + pasted transcript
content_type: meta-harness / multi-coding-agent orchestration / Claude Code + Codex + Pi / Databricks Omni Agent / harness engineering / cross-agent implementation-review workflows / sandboxing / guardrails / human approval policies / custom orchestrators / shared sessions / context and token optimization
source_reliability_context: Creator walkthrough of Databricks’ open-source Omni Agent / Omnigent tool. Useful as a tactical architecture source for meta-harness patterns, model/harness orchestration, cross-agent review, sandboxing, policy hooks, and multi-device/shared coding sessions. Treat as a product-demo and architecture-signal source, not as independent proof of production maturity. Also avoid confusing external “Omni Agent” with internal OMNI doctrine.
priority: 4.5/5
depth: technical_architecture_reference
recommended_status: route to Build-OS, AI Substrate, meta-harness doctrine, Agent Work Protocol, code-review workflow, sandbox/guardrail policy, model-routing, and collaborative agent-session design.

Topic tags:
[Omni_Agent, Omnigent, Databricks, Cole_Medin, meta_harness, harness_engineering, coding_agents, Claude_Code, Codex, Pi, multi_model_orchestration, cross_agent_review, implementation_agent, review_agent, context_optimization, token_optimization, custom_orchestrators, Poly, Debby, sandboxing, guardrails, HITL_approval, force_push_policy, worktrees, shared_sessions, multi_device_agent_session, Build_OS, AI_Substrate, Agent_Work_Protocol]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4.5/5
Depth: technical architecture reference
Recommended status: route to Build-OS / AI Substrate / meta-harness doctrine / Agent Work Protocol / model-routing / guardrail policy.

Core takeaway

This source is about the next layer above individual coding agents:

If one coding assistant is a harness, a meta-harness orchestrates multiple coding assistants across a larger workflow.

Cole defines Omni Agent as a free/open-source meta-harness for longer AI coding workflows that mix coding assistants, such as using Claude Code for implementation and Codex for review.

OMNI translation:

Build-OS should not assume one model, one coding agent, or one session owns the whole build loop. It should support orchestrated roles: implementer, reviewer, verifier, planner, critic, migration writer, test runner, and release checker.

This directly sharpens the “model-runtime bundle” and “workflow lane” doctrine.

Key concepts to preserve
1. Meta-harness = layer above coding agents

The transcript frames Omni Agent as the layer above AI coding assistants, making orchestration straightforward so the user does not have to manually jump between terminals, create handoff documents, and coordinate separate sessions.

OMNI keeper:

A meta-harness is not just another agent.

It is a coordinating layer over multiple harnesses:

orchestrator → coding assistant A → coding assistant B → reviewer → synthesis → PR/release

Potential primitive:

meta_harness_layer

A Build-OS layer that coordinates multiple models/harnesses according to role, task shape, context budget, and review requirements.

Doctrine candidate:

Complex AI coding work needs orchestration across harnesses, not blind loyalty to one assistant.

2. Harness matters as much as the model

Cole says the major lesson is that the harness matters as much as, or maybe more than, the model. He defines the harness as the system prompt, tools, skills, workflows, rules, and related structure around the LLM.

OMNI keeper:

This is strongly aligned with prior Satya / Sierra / Andrew Ng reads.

OMNI’s AI advantage is not “which model.” It is:

harness
context
tools
evals
skills
trace/proof
routing
domain rules
release workflow

Doctrine candidate:

Model quality matters, but harness quality determines repeatable work.

3. Different coding agents have different strengths

The video argues top engineers increasingly do not rely on a single model or harness. They use different assistants for different strengths and separate sessions for context/token optimization.

OMNI translation:

For Build-OS:

Claude-style model for implementation
Codex-style model for review
cheaper/local model for simple edits
stronger model for architecture
verifier model for adversarial review
deterministic tools for tests/migrations

Doctrine candidate:

Model/harness choice should follow role, not preference.

4. Context and token optimization justify separate sessions

The transcript explicitly names separate sessions as useful for context and token optimization.

OMNI keeper:

This sharpens context doctrine.

Do not stuff everything into one bloated session. Split work by role and return structured outputs.

For OMNI:

implementation context
review context
migration context
eval context
release-note context
architecture context

Doctrine candidate:

Separate agent sessions can protect context quality and reduce token waste.

5. Meta-harnesses can centralize policies, guardrails, MCP, skills, and history

Cole says Omni Agent’s main orchestrator has history, policies/guardrails, MCP servers, and skills; the customized AI layer lives at the server/top level and can apply across different coding assistants.

OMNI keeper:

This is important.

The policy layer should not be reinvented per assistant.

Build-OS should centralize:

allowed tools
denied tools
human approval triggers
domain instructions
coding standards
repo policies
MCP/server access
session history
audit log

Doctrine candidate:

Guardrails should live above individual agents when workflows span multiple agents.

6. Poly pattern: Claude implements, Codex reviews

The example orchestrator “Poly” delegates implementation to Claude Code and review to Codex. It loads workflow skills, sends the implementation prompt to Claude, monitors it, then sends review to Codex.

Cole says doing review in a separate coding-agent session is fundamentally useful because the implementation session builds bias.

OMNI keeper:

This is a very concrete Build-OS workflow:

implementer_agent → separate_reviewer_agent → orchestrator_synthesis → human/PR

Doctrine candidate:

Code review should often happen in a separate agent session from implementation to reduce self-justifying bias.

7. Orchestrator anatomy: config, skills, callable agents

Each orchestrator has three parts: configuration, skills, and agents it can call. The configuration includes executor, system prompt, sandboxing setup, guardrails, tools, and delegated agents. Individual agents have their own configuration as well.

OMNI keeper:

This is a clean manifest structure.

Potential OMNI artifact:

agent_orchestrator_manifest

Fields:

orchestrator_id
executor/model/harness
system prompt
skills
callable agents
tool grants
sandbox policy
HITL policies
workspace/worktree policy
audit/logging policy
cost/latency budget

Doctrine candidate:

Orchestrators need explicit manifests, not hidden chat setup.

8. Guardrails as code next to config

Cole shows a custom guardrail that allows general commands but requires approval for dangerous git push --force-style actions. The policy lives next to the agent config as Python code.

OMNI keeper:

This is highly relevant.

Policies should be executable and colocated with the agent/workflow they govern.

For OMNI Build-OS:

force push requires approval
destructive migration requires approval
production deploy requires approval
PHI export requires approval
D6 ledger mutation requires approval
clinical-memory promotion requires approval
bulk SMS send requires approval

Doctrine candidate:

Dangerous actions need executable policy hooks and human approval gates.

9. Guardrails should be agent-agnostic

Cole notes that similar hooks can exist in Claude Code, but the benefit of the meta-harness is applying the guardrail regardless of which coding agent is being used or orchestrated.

OMNI keeper:

This is a serious architecture point.

If OMNI relies on provider-specific guardrails, it loses vendor optionality and consistency.

Doctrine candidate:

Safety policy should be harness-level, not provider-specific whenever possible.

10. Debby pattern: multi-model debate

The second example, Debby, orchestrates two coding agents to argue different perspectives on a topic, exchange feedback, and then synthesize a conclusion.

OMNI keeper:

This is not enough for high-stakes authority, but useful for design/architecture exploration.

For OMNI:

compare architecture proposals
debate product strategy
review clinical-safety policy language
generate pros/cons
stress-test domain doctrine
choose migration approaches

Doctrine candidate:

Multi-agent debate is useful for exploration, not final authority.

11. Same session across devices and collaborators

Omni Agent can keep the same session across phone and desktop, and can be hosted so other people can work in the session remotely.

OMNI translation:

This is a Build-OS collaboration surface.

Future OMNI builder sessions may involve:

physician-founder on phone
engineer at desktop
agent running implementation
reviewer agent running PR review
ops/compliance commenting
orchestrator maintaining session state

Doctrine candidate:

Agent build sessions should become collaborative workspaces, not private terminal transcripts.

OMNI translation

This source gives OMNI a tactical pattern for multi-agent Build-OS orchestration:

meta-harness → orchestrator manifest → skills/workflows → callable coding agents → sandbox/guardrails → separate implementation/review sessions → synthesis → PR/release

The most useful idea is not the specific Omni Agent product. It is the architecture:

Put policy, skills, history, sandboxing, and orchestration above the individual coding assistant.

That lets OMNI remain model/harness-flexible while still enforcing workflow policy.

Likely OMNI landing zones

Build-OS

orchestrated coding workflows
implementation/review separation
PR creation
worktree support
shared builder sessions
custom orchestrator manifests

AI Substrate

model/harness routing
multi-agent orchestration
context/session isolation
sandbox configuration
harness-level policy layer

Agent Work Protocol

separate implement/review roles
HITL approval for dangerous commands
role-specific skills
debate/exploration workflows
cross-agent handoff rules

Polaris / Proof Layer

orchestration trace
which agent did what
token/cost by subagent
approval events
sandbox status
final synthesis lineage

RBAC / Federation

agent-agnostic permissions
shared session grants
collaborator roles
human approval authority
Doctrine candidates
Complex AI coding work needs orchestration across harnesses, not blind loyalty to one assistant.
Model quality matters, but harness quality determines repeatable work.
Model/harness choice should follow role, not preference.
Separate agent sessions can protect context quality and reduce token waste.
Guardrails should live above individual agents when workflows span multiple agents.
Code review should often happen in a separate agent session from implementation to reduce self-justifying bias.
Orchestrators need explicit manifests, not hidden chat setup.
Dangerous actions need executable policy hooks and human approval gates.
Safety policy should be harness-level, not provider-specific whenever possible.
Multi-agent debate is useful for exploration, not final authority.
Agent build sessions should become collaborative workspaces, not private terminal transcripts.
Net-new / sharpen / affirm
Net-new candidates

meta_harness_layer
Layer above individual coding agents that orchestrates multiple assistants, sessions, policies, skills, and handoffs.

agent_orchestrator_manifest
Configuration artifact defining executor, system prompt, skills, callable agents, sandboxing, tools, guardrails, and approval policies.

separate_reviewer_agent_session
Pattern where implementation and review occur in separate agent contexts to reduce bias and improve critique.

harness_level_guardrail_policy
Provider-agnostic policy layer applied across all underlying coding agents.

collaborative_agent_build_session
Shared multi-device/multi-user workspace for humans and agents to coordinate build workflows.

Sharpen existing

Build-OS
Adds meta-harness orchestration over Claude/Codex/Pi/local models.

Agent Work Protocol
Adds role-separated implementation/review/debate workflows.

AI Substrate
Sharpens harness routing and context/session separation.

Polaris
Needs per-agent trace, approvals, token usage, and synthesis lineage.

RBAC/Federation
Shared sessions and delegated agents require explicit permissions.

Affirm
harness engineering matters as much as model choice
one model/provider is not enough for all coding work
review should often be separate from implementation
guardrails need to be centralized
sandboxing matters for agent-run commands
human approval gates are necessary for dangerous actions
worktrees support parallel agent development
collaborative agent sessions are emerging as a real surface
Reject / do not over-import
Do not confuse external Omni Agent with internal OMNI.
Do not treat multi-agent orchestration as automatically better.
Do not let debate workflows become authority.
Do not allow broad unsandboxed agent command execution by default.
Do not rely on provider-specific hooks for core safety policy.
Do not assume local credential reuse is safe for enterprise workflows.
Do not let a meta-harness bypass repo/release governance.
Do not treat a polished orchestrator UI as proof of correctness.
Hard read

This is a strong Build-OS meta-harness source.

The keeper:

The next coding-agent layer is not just a better model. It is a meta-harness that coordinates multiple assistants, keeps their contexts separate, assigns roles, applies shared guardrails, and lets humans approve dangerous transitions.

Shortest OMNI version:

OMNI Build-OS should have a meta-harness layer: role-specific coding agents, separate implementation/review sessions, orchestrator manifests, shared skills, sandboxed worktrees, provider-agnostic guardrails, human approval gates, and Polaris traces showing exactly which agent did what.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

like... some of this stuff from Cole is basic... or like... not in depth enoguh for what we're doing.... but its probably useful, generally speaking.... for alignement and making sure we dont miss easy concepts

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-07` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**HEADLINE VERDICT.** `tier: full — Build-OS/AI-Substrate meta-harness AFFIRMER · near-zero net-new mechanism (all NAMES/extensions) · doctrine=AFFIRM/PARTIAL · build=absent`. This is Cole Medin walking through Databricks' open-source **"Omni Agent" / "Omnigent"** — a *meta-harness*: the layer **above** individual coding assistants (Claude Code / Codex / Pi) that orchestrates them by role (implementer / reviewer / debater), centralizes policy/guardrails/skills/history/MCP at the server level, runs agents in sandboxes with human-approval gates, supports worktrees, and shares one session across devices/collaborators. **The keeper is the architecture, not the product:** put policy, skills, history, sandboxing, and orchestration *above* the individual coding agent so the substrate stays model/harness-flexible while still enforcing workflow policy — which is **exactly OMNI's own Build-OS + §B "model-pluggable at substrate, not at care" posture, and literally OMNI's own trifecta (Opus implements → Knox reviews) + this EVRUN subagent pipeline reinvented externally.** Nick's gut note is correct: *"basic… not in depth enough… but useful for alignment / not missing easy concepts."* It confirms the wave's Build-OS leg (201/202/208/210/214/217/220/221/224); it does **not** extend the frame. **★ HARD NAMING FLAG: external "Omni Agent" ≠ internal OMNI — never conflate** (`GRD-039` authority-is-descriptive; the collision is coincidental branding). One genuinely useful sharpening: **safety/guardrail policy should bind at the harness/substrate layer, provider-agnostically — not per-vendor** (the §B model-pluggable principle applied to SAFETY, not just capability).

---

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [ts]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **meta-harness = layer above coding agents** | The Build-OS orchestration layer that coordinates *many* model-runtime bundles by role — NOT one model/agent/session owning the whole build loop | Build-OS (`REV-158`) · Agent-Work-Protocol · CNS (candidate→resolver→commit analog) · §B | *"layer above the AI coding assistance that makes this orchestration"* [0:47] | AFFIRM | absent | none | spine | watch (NAME for existing Build-OS orch layer) |
| 2 | **harness matters ≥ model** | OMNI's AI edge is harness+context+tools+evals+skills+trace+routing+domain-rules — not "which model"; model can even be *banned* (Fable-5) and work continues | §B AI-substrate · Build-OS · Agent-Work-Protocol · CNS | *"harness matters as much as or maybe more than the model"* [1:34] | AFFIRM | absent | none | spine | watch (verbatim re-affirm of 201/221) |
| 3 | **role-based model/harness routing** | Choose model/harness by ROLE not preference: Claude-implement, Codex-review, cheap/local for edits, strong for architecture, verifier for adversarial | §B model-registry/routing · Build-OS · Agent-Work-Protocol | *"lean on the different strengths of the different AI coding assistants"* [0:38] | AFFIRM | absent | none | spine | watch (= 221 model-runtime bundle + 206 routing) |
| 4 | **separate reviewer session (implement ≠ review)** | Do review in a *separate* agent session from implementation to kill self-justifying bias — OMNI's trifecta (Opus produces → Knox reviews) + Review-001/003 split, at the coding-agent tier | Build-OS · Agent-Work-Protocol (Review-001/003) · Polaris (who-did-what) | *"do your code review in a separate coding agent session… otherwise… too much bias"* [7:09-7:17] | AFFIRM | absent | none | spine | watch (NAME; = OMNI trifecta + 202 loop) |
| 5 | **context/token optimization via separate sessions** | Split work by role → structured outputs; don't stuff one bloated session (impl/review/migration/eval/release contexts distinct) | §B context/runtime · CNS context-packet · Build-OS · Knowledge-Reservoirs | *"different sessions for the sake of context and token optimization"* [0:42] | AFFIRM | absent | none | vocab | watch (= 204 context-budget + 220 state-externalized) |
| 6 | **centralized policy/guardrails/MCP/skills/history at server** | Policy layer is NOT reinvented per assistant: allowed/denied tools, HITL triggers, domain instructions, standards, MCP access, session history, audit — live above individual agents | Build-OS · §C Security · CNS · RBAC · Polaris (audit) | *"main orchestrator that has your history… policies… MCP servers and skills"* [4:37-4:41] | AFFIRM | absent | none | spine | watch (= `capability_envelope`+205 ai_gateway centralized) |
| 7 | **orchestrator anatomy: config + skills + callable agents** | Clean manifest: executor/model + system prompt + sandbox policy + guardrails + tool grants + delegated (callable) agents; each sub-agent has its own manifest | Build-OS · Agent-Work-Protocol · §B agent-registry · Polaris | *"every single orchestrator comprises of three parts… config… skills… agents"* [8:19] | AFFIRM | absent | none | spine | watch (= 217 `agent_manifest`, orchestrator-level) |
| 8 | **guardrails as code, colocated with config** | Executable policy next to the agent it governs (e.g. Python hook: allow all EXCEPT `git push --force` → require human approval); dangerous actions gated | §C Security · Build-OS · Settings (policy-as-data) · Agent-Work-Protocol | *"custom guardrail… any git push… using the force flag"* [10:26-10:31] | AFFIRM | absent | none | spine | watch (= HITL + `autonomy_level` + policy-hook) |
| 9 | **guardrails must be provider-AGNOSTIC (harness-level)** | Safety binds at the substrate, applied regardless of which coding agent runs — else you lose vendor optionality/consistency; the §B model-pluggable principle applied to SAFETY | §C Security (MAJOR) · §B substrate · 205 ai_gateway · 211 tool_invocation_gateway | *"apply this no matter the coding agent… we're orchestrating"* [11:51] | AFFIRM | absent | none | spine | **watch (sharpest delta — safety at substrate, not vendor)** |
| 10 | **HITL approval for dangerous transitions** | Human-in-the-loop wait-for-approval on destructive actions (force-push, destructive migration, prod deploy, PHI export, D6-ledger mutation, clinical-memory promotion, bulk SMS) | Agent-Work-Protocol · §C · RBAC · Settings · D6/D7/Messaging | *"human in the loop where it'll wait for us to approve… force pushes"* [9:21-9:28] | AFFIRM | partial | none | spine | watch (OMNI capability-gates exist; agent-runtime HITL absent) |
| 11 | **sandboxed agent execution (worktrees, E2B/Docker)** | Run agents in sandbox for reliability/security; worktrees enable parallel dev; unsandboxed = opt-in risk | §C Security · Build-OS · §B runtime (isolation) · 215 assume-breach | *"you run it in a sandbox. So it's reliable, it's secure"* [4:33] · *"work trees… important for parallel development"* [5:46] | AFFIRM | absent | none | vocab | watch (= 205 assume-breach + 215 isolated-run + 220 fan-out) |
| 12 | **multi-agent debate (Debby) = exploration, not authority** | Two agents argue opposing views → synthesize; useful for design/architecture/pros-cons/migration-choice exploration — NEVER final authority for high-stakes | Build-OS · Agent-Work-Protocol · CNS (candidate≠commit) · §B | *"pits two coding agents… to argue… come to a conclusion"* [12:04-12:12] | AFFIRM | absent | tension (pole) | vocab | watch (candidate≠commit binds; debate=evidence) |
| 13 | **collaborative agent build session (multi-device/multi-user)** | Same session across phone+desktop+remote collaborators — Build-OS becomes a shared workspace (founder on phone, engineer at desktop, reviewer agent, ops/compliance commenting), not a private terminal transcript | Surface-Map P5 · RBAC/Federation (shared grants) · Build-OS · Polaris | *"work in the same session both on our phones and on our computer"* [3:21-3:24] | PARTIAL | absent | none | vocab | watch (Surface-Map candidate; = 201 generated-UI surface) |
| 14 | **local credential reuse (convenience)** | Runs on your machine, reuses signed-in CLI creds (Claude/Codex/Pi) — no re-auth; frictionless BUT enterprise/PHI-unsafe as-is | §A Identity · §C Security · 211 `context_token_nonpropagation` · RBAC | *"use the credentials from the CLI you're already signed into"* [3:43] | ABSENT | n/a | tension (pole) | low-authority-watch | watch (convenience ≠ enterprise credential boundary) |

**Tier rationale (Knox depth):** Knox marked priority 4.5/5, depth `technical_architecture_reference`, 11 numbered clusters + 11 doctrine candidates + 5 net-new candidates — a *rich* read → **full tier**. But every cluster AFFIRMs pre-existing wave doctrine and every "net-new" resolves to a NAME/extension (see §B) → **near-zero genuine yield; classify with 210/212 as a Build-OS AFFIRMER**, richer in vocabulary than either.

---

### B. Net-new primitives  *(dedup vs registry §2 [201-230 mints] + standard OMNI primitives BEFORE minting; format: `name — meaning — EXISTS-AS`)*

> Verdict up-front: **0 genuine net-new mechanisms.** All 5 Knox candidates are NAMES or subtype-extensions of existing primitives. Strongest *sharpening* = #4 (`harness_level_guardrail_policy`). **"dedup-pending, Opus-main verifies."**

1. `meta_harness_layer` — Build-OS layer coordinating multiple model/harness bundles by role/task-shape/context-budget/review-requirement — **EXISTS-AS: NAME only.** Composes `workflow_lane_as_architecture_unit` + 201 `agent_workbench` + 210 coordination-layers + 214 `capability_placement_policy` + 221 model-runtime-bundle + 220/224 orchestration. The community-legible umbrella label for OMNI's Build-OS orchestration layer. **DO NOT mint as mechanism** (`GRD-026`/`GRD-035` no god-concept). dedup-pending.
2. `agent_orchestrator_manifest` — declares executor/model + system prompt + skills + **callable-agents (delegation graph)** + sandbox + tools + guardrails + HITL + worktree + cost budget — **EXISTS-AS: 217 `agent_manifest` (orchestrator-level extension).** Genuine delta = the **callable-agents / delegation-graph field** (multi-agent, vs 217's single-agent declare-before-run). Reconcile as a manifest subtype, not a new primitive. dedup-pending.
3. `separate_reviewer_agent_session` — implementation and review in *separate* agent contexts to reduce self-justifying bias — **EXISTS-AS: NAME.** = OMNI trifecta (Opus produces → Knox reviews) + Agent-Work-Protocol Review-001/003 split + 202 governed-loop + candidate≠commit, at the coding-agent tier. dedup-pending.
4. `harness_level_guardrail_policy` — provider-AGNOSTIC safety/policy layer applied across all underlying coding agents (bind at substrate, not vendor) — **EXISTS-AS: NAME sharpening 205 `ai_gateway`/`prompt_firewall` + `capability_envelope` + 211 `tool_invocation_gateway` + `autonomy_level`.** ★ **The one useful new angle:** it makes explicit that the §B "model-pluggable at substrate, not at care" law extends to SAFETY policy (vendor optionality for guardrails, not just capability). Worth a doctrine line; not a new mechanism. dedup-pending.
5. `collaborative_agent_build_session` — shared multi-device/multi-user workspace for humans+agents to co-drive a build workflow — **EXISTS-AS: NAME; Surface-Map P5 candidate.** = 201 `generated_ui_as_agent_coordination_surface` + `agent_workbench` + RBAC shared-session grants. dedup-pending.

**REJECT / do-not-import (Knox concurs):** external "Omni Agent" ≠ internal OMNI · multi-agent orchestration ≠ automatically better · debate ≠ authority · broad unsandboxed exec by default · provider-specific hooks for core safety · local-credential-reuse assumed safe · meta-harness bypassing repo/release governance · polished UI as proof of correctness (= 215 "verifiers not vibes").

---

### C. Reread flags
- **★ NAME-COLLISION flag (persistent, not a reread):** external Databricks **"Omni Agent"/"Omnigent"** vs internal **OMNI** — any future search/ingestion touching "Omni Agent" must disambiguate. Recorded in §0/§0.1. No action beyond vigilance.
- **Metadata:** PRESENT (Knox block at top of §3) — lifted verbatim, `identity_confidence: high_from_operator_metadata`, **no reread needed.** `published_at` is approximate ("~3 weeks ago") — precise date TK but non-blocking.
- **Speaker conflict:** Cole Medin is building an adjacent tool (Archon) and openly imports Omni Agent ideas — treat capability/maturity claims as demo-signal (already flagged in §0.1).
- **No transcript-derivation needed** (metadata + Knox both present and rich).

### D. One-line hard read + strongest OMNI line
- **Hard read:** The "meta-harness" is just the community's name for OMNI's Build-OS orchestration layer — coordinate role-specific model-runtime bundles above the individual coding agent, keep contexts separate, centralize guardrails/HITL provider-agnostically, and trace who-did-what; net-new ≈ 0 (pure vocabulary/affirmer + one sharpening: **safety binds at the substrate, not the vendor**), and the only trap is the accidental name collision with OMNI itself.
- **Strongest OMNI line:** *OMNI Build-OS is already a meta-harness — but a **governed** one:* role-separated agents **propose** (implement / review / debate), the orchestrator **coordinates** (candidate→resolver), guardrails + human-approval gates live at the **substrate layer (provider-agnostic)**, agents run in **sandboxed worktrees**, and **Polaris records exactly which agent did what** — because AI proposes; domains + humans commit.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Build-OS + Agent-Work-Protocol (MAJOR — meta-harness orchestration, implement≠review separation, orchestrator manifests, worktrees, PR flow) · §B AI-substrate (MAJOR — role-based model/harness routing, provider-agnostic layer, session isolation, sandbox config) · §C Security (medium — harness-level provider-agnostic guardrails #9, HITL on dangerous actions, sandbox, credential-reuse risk) · Polaris/proof (medium — per-agent trace, approval events, which-agent-did-what) · RBAC/Federation (medium — shared-session grants, collaborator roles) · Surface-Map P5 (medium — collaborative multi-device build session) · CNS (medium — orchestrator = candidate→resolver→commit analog)` · promotion: `watch (Build-OS/AI-Substrate AFFIRMER; near-zero net-new mechanism — 0 genuine primitives, 5 NAMES/extensions dedup-pending; strongest sharpening = #9 provider-agnostic-guardrail-at-substrate; ★ persistent name-collision flag external "Omni Agent" ≠ internal OMNI)`

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — §0/§0.1 metadata lifted verbatim from Knox block (top of §3 Review 001): url `oGE_Dwz-rMk` · title `Omnigent: The New Meta-Harness…` · Cole Medin · content_type meta-harness/multi-agent orchestration · practitioner reliability · `identity_confidence: high_from_operator_metadata`. Proposed slug `omnigent-databricks-meta-harness-orchestration` (file NOT renamed). §3 **Review 003** written (formalized Review 001; 14 concept clusters; **0 net-new mechanisms** — 5 NAMES/extensions dedup-pending [`meta_harness_layer`·`agent_orchestrator_manifest`→217·`separate_reviewer_agent_session`·`harness_level_guardrail_policy`·`collaborative_agent_build_session`]; grep-verified build=absent [`orchestrat` hits = domain msg/emergency orchestration; clinical AI-review governance in `lib/ai/chartReviewEngine.ts`/`governancePolicy.ts` = adjacent echo only]). §4 pointers filled. **Status → `analyzed`.** Registry/coverage/anchor NOT edited (fold packet returned to Opus-main per hard contract). ★ Persistent flag: external "Omni Agent" ≠ internal OMNI.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

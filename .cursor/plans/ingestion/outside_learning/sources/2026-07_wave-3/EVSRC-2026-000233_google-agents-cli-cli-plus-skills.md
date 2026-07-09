# EVSRC-2026-000233 — <title or TK>

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000233_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000233`  ·  filename (proposed slug; file NOT renamed): `EVSRC-2026-000233_google-agents-cli-cli-plus-skills.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=1wfY7GCVvh0`  ·  source_title: `Google's Agents CLI: The CLI + Skills Combination to Ship AI Agents EASILY`
- channel_or_org: `Cole Medin`  ·  speaker: `Cole Medin`  ·  published_at: `2026-06-10`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `Google Agents CLI / Google ADK / CLI-plus-skills workflow / AI coding assistant-driven agent build / production deployment / sandboxed code execution / evals / prompt optimization / audit trails / agent identity / service account permissions / production agent harness`  ·  source_reliability_context: `practitioner (creator walkthrough/demo, made in collaboration with Google per transcript — treat as product-demo evidence + architecture signal, NOT independent proof that production agent deployment is universally easy)`  ·  topic_tags_light: `[Google_Agents_CLI, Google_ADK, CLI_plus_skills, skills_as_instructions, CLI_as_capability, Claude_Code, agent_scaffolding, agent_evaluation, prompt_optimization, agent_deployment, sandboxed_code_execution, agent_identity, service_account_permissions, audit_trails, traces, Build_OS, AI_Substrate, Agent_Work_Protocol]`
- identity_confidence: `high_from_operator_metadata` (source_url/title/channel/speaker/published_at/content_type/reliability lifted verbatim from Knox metadata block at top of §3 Review 001; no caveats)

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Cole Medin` · role_in_source: `speaker / presenter` · affiliation_at_publication: `independent AI-coding creator (Cole Medin YouTube channel); this video made in collaboration with Google` · speaker_type: `educator` (practitioner/creator) · authority_context: `hands-on practitioner voice on AI-coding-assistant + agent-framework workflows; not academic/vendor-official` · identity_confidence: `high_from_operator_metadata`
  - *(add a bullet per additional speaker)*
- publisher / channel: `Cole Medin (YouTube)`  ·  interviewer / moderator / host: `n/a (solo walkthrough)`
- event_context: `Sponsored/collaboration walkthrough demo — building + deploying a Google ADK "ask your data" agent end-to-end via Google's Agents CLI + skills, driven entirely by Claude Code`  ·  perspective / conflict notes: `Vendor-adjacent (explicit Google collaboration; "an honor to say"). Product-demo optimism ("easy"/"one command") is promotional — Knox's reject list guards against importing "easy = safe."`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat (metadata block present in §3 Review 001) · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002 *(left empty)*
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(fold packet returned to Opus-main; per hard contract this subagent does NOT edit registry/coverage/anchor)* · [ ] update coverage matrix *(Opus-main)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Intro: Google's Agents CLI
0:00
These days, anyone can build an AI agent
0:02
pretty easily. And now, even shipping
0:04
them to production is straightforward.
0:06
That's what I want to show you in this
0:08
video. How we can use a combination of a
0:10
CLI and skills to make it so our AI
0:13
coding assistant can walk us through
0:14
creating an agent from idea all the way
0:17
to a reliable deployment. And we're
0:20
going to be using Google's agent CLI for
0:22
this. It is a very powerful tool. It's
0:24
open source. I'll link to it in the
0:25
description. It helps us build agents
0:27
with Google's ADK, which is an agent
0:29
framework that a lot of people are
0:31
already using. Now, I got to say, it's
0:34
been a while since I've made a YouTube
0:36
video on just building an agent.
0:38
Usually, I'm focusing so much on AI
0:40
coding assistance these days. And the
0:42
biggest reason for that is tools like
0:44
this make it so easy to build agents.
0:46
There's not as much substance for me to
0:48
cover in videos. Now, it's not always
0:50
trivial. You can still have complex
0:51
memory systems and rag architectures.
0:54
I'm not trying to say that every agent
0:55
is a walk in the park now, but with
0:57
tools like the agent CLI like I'll show
0:59
you here, it is significantly easier to
1:02
build AI agents now, even compared to 6
1:05
months ago. Okay, so go down memory lane
1:07
with me for just a couple of minutes
1:08
here, then we'll do a live build with
1:10
the agent CLI. I'll show you how easy it
1:12
is. So, when I started my YouTube
How Agent Building Has Changed
1:14
channel a couple of years ago, my videos
1:16
looked like this. We were in VS Code and
1:19
I was showing you line by line how to
1:22
build AI agents with Langchain as the
1:24
framework at the time. Like let's define
1:26
our model. Here's how we bring in our
1:28
system prompt. Here's how we add tools
1:29
to our agent. It was a good time, but
1:32
man did it take a while to build any
1:34
individual agent. And so no AI coding
1:37
assistance at the time. And then once we
1:39
started using AI coding assistants like
1:41
a year or two ago, we were still living
1:44
and breathing in the documentation. Like
1:46
these are the docs for Google's ADK. I
1:49
built a lot of agents with Pyantic AI as
1:51
well. A lot of frameworks out there, but
1:52
AI coding assistants weren't reliable
1:54
with any of them. We didn't have the
1:56
idea of skills to really just like
1:58
inject all the context and all the docs
2:00
that it needed. And so we would go
2:02
through the quick start still. We'd pull
2:04
certain pages and give it as context to
2:06
our coding agents. There were a lot of
2:07
bugs that we had to work through
2:09
ourselves cuz coding agents just weren't
2:10
at that point yet. It was still quite a
2:13
bit of work. And now we've gotten to the
2:15
point where in 2026, you don't have to
2:17
spend a single second in the
2:19
documentation yourself because we
2:21
basically bring it into our coding
2:23
agent. It's just single command to
2:25
install the CLI and skills. And now with
2:28
natural language, we can ask our coding
2:30
agent to build the agent, evaluate it,
2:32
deploy it, harden it. Everything is
2:34
packaged together. And so what I'm
2:36
showing you in the video here is
2:38
universal. But I'm just showing Google
2:41
because with the agent CLI, they do it
2:42
best. the skills that take your agents
2:44
all the way to production. Okay, so back
How Agents CLI Skills Work
2:47
to the repo. If we scroll down in the
2:48
readme here, we can see the commands to
2:50
get an idea for how the agent CLI works.
2:53
And the coding agent is going to drive
2:55
all of this. By the way, more on that in
2:57
a second. So we have commands to
2:59
scaffold the project, evaluate the
3:01
agent, we can run a single prompt
3:03
against the agent. We can even optimize
3:05
the prompts based on our eval data. So
3:07
there's selfiteration built into this as
3:10
well. And we're not going to run any of
3:12
these commands ourself. We're going to
3:14
let our coding agent do all of it. So
3:17
you can think of the CLI as the
3:19
capabilities that we're giving the
3:21
coding agent. It can just run all of
3:22
these commands. And then the skills that
3:25
ship with it tell the coding agent how
3:27
to use the CLI. That's what makes the
3:29
combination so powerful. The CLI is the
3:32
capability. The skills are the
3:34
instructions. And so, for example, one
3:36
of the skills that ships with Google's
3:37
agent CLI is the instructions for how we
3:40
actually write the code for the AI
3:42
agent. This is where we really have all
3:44
of the documentation, like the Google
3:46
ADK documentation baked into our coding
3:49
agent through this skill. That's why we
3:51
never have to go to the documentation or
3:55
even reference it for our coding agent.
3:57
It's super cool. So going back to the
3:59
list of skills, every stage of building
4:02
an agent that we have CLI capabilities
4:04
for, we have a skill to go along with
4:06
it. So your coding agent knows how to
4:09
drive the entire process end to end,
4:11
only following your instructions and
4:13
your spec. And so this is what I love
4:15
about Google's agent CLI. There are a
4:17
lot of frameworks out there that have
4:19
skills to help you build agents, but
4:22
they don't take it as far as going to
4:24
your deployment and even production
4:26
observability, for example. This is why
4:27
I love the agent CLI and so I am working
4:30
with Google to bring this video to you.
4:32
It's an honor to even say that. But this
4:35
is legitimately what I'm building with
4:36
right now because the ADK with the agent
4:38
CLI allows me to go to production so
4:41
easily. So let me actually show you that
4:42
now. Let's build an agent and get it all
Building the Agent with Claude Code
4:44
the way to deployment. So the way to get
4:46
started with the agent CLI like we saw
4:48
earlier is to run this single command to
4:50
install the CLI and skills and then we
4:54
can get into just asking it to build any
4:56
AI agent. But I'm not even going to run
4:58
this command. I'm going to take it upon
5:00
myself as a challenge here to build and
5:01
deploy the entire AI agent without
5:03
running a single command in the terminal
5:05
myself. So I'm going to go straight into
5:07
cloud code here. I'll use my speech to
5:09
text tool and I'll say I want you to
5:12
search the web so you know how to
5:13
install the Google agents CLI and then I
5:16
want you to install it in this project
5:17
here. All right, cool. So, we'll go
5:19
ahead and send that off. I'll come back
5:20
once we have everything good to go. All
5:22
right, and 30 seconds later, we have the
5:24
agent CLI installed with all of the
5:27
skills as well in mycloud folder. If
5:29
this was another coding agent, it would
5:31
be somewhere else, but this does work
5:33
with any AI coding assistant as long as
5:35
it supports skills. So now I'll go in a
5:38
new cloud code session. I'll do /skills.
5:40
You can see that all of them are loaded
5:41
here to build the agent, deploy it, etc.
5:44
And then I'm going to copy a prompt that
5:46
I have off camera just to save a bit of
5:47
time here and paste it in. I'm telling
5:49
it to use the installed ADK skills to
5:52
build and ask your data agent. So this
5:55
is just something simpler for a
5:56
demonstration here, but the user gives a
5:58
CSV and a question and it's going to
6:00
write Python code. So it's going to do
6:02
code execution to answer our questions
6:04
over the CSV. And I'm specifically
6:07
choosing code execution here because
6:09
this is one of the things that you have
6:10
to do in isolation. It's actually a bit
6:12
of a challenge to really make that
6:14
reliable when you have an agent deployed
6:16
to production. And code execution is one
6:19
of the things that Google takes care of
6:21
for us when we deploy it to the cloud
6:24
using the skills here. And so we can see
6:26
that it loaded the CLI workflow skill
6:29
scaffold and ADK code. So it knows how
6:31
to spin up the codebase and build the
6:33
agent for us. Now, for the sake of
6:35
speed, I am just jumping right into the
6:37
build. I'm doing a little bit of vibe
6:39
coding here. So, even with these skills,
6:41
I still would recommend going through
6:43
your usual planning and implementing
6:45
process with your AI coding assistant. I
6:47
cover that all the time on my channel.
6:49
You want to work with your coding agent
6:51
like Cloud Code to build a spec for the
6:54
agent you want to create and then you
6:56
would send in that spec for it to start
6:57
loading these skills and building the
6:59
agent. But because we're not also
7:01
building something super complicated
7:02
here, it should be able to oneshot this
7:04
for us at least because it can also
7:06
iterate and build those evals. We'll see
7:08
that in a little bit as well. So you can
7:10
see it even came back to ask me a
7:12
question here. Which ADK code executor
7:14
should the agent use? And so definitely
7:16
we want to use the built-in sandbox.
7:19
This is one of the best parts of the ADK
7:21
is code execution. A lot of agents rely
7:23
on that now. And in a production
7:25
environment where you could be executing
7:27
any kind of arbitrary code, you need to
7:29
do it in a secure way. So all right,
7:31
let's go ahead and just let this agent
7:32
rip through the implementation. All
Traditional Frameworks vs Agent SDKs
7:34
right, so while the AI agent builds,
7:36
there's an elephant in the room that I
7:37
have to address here. I can't leave this
7:39
out of the video. So many people ask me
7:41
about this. They say, "Hey, Cole, if we
7:43
have coding agent SDKs now, why should
7:46
we even use a framework like Google's
7:50
ADK or Pantai or Langchain? all these
7:54
more quoteunquote traditional
7:55
frameworks. I know it's kind of silly
7:56
even calling it traditional, but they
7:58
are a lot older than these coding agent
8:00
SDKs, these really powerful harnesses
8:03
that give us a ton of capability right
8:05
out of the gate. The same capabilities
8:07
used in these AI coding assistants
8:10
because you can build some very powerful
8:12
AI agents on top of things like the
8:14
anti-gravity SDK. But the thing is those
8:17
more traditional frameworks, they're
8:18
still really important when you want to
8:20
ship your agents to production. And so
8:23
let me just break it down nice and
8:25
simple for you. A lot of people are
8:27
using coding agent SDKs to build their
8:29
own second brains or agentic workflows
8:31
that they run themselves. But the
8:34
problem with these tools is yes, they're
8:36
really powerful, but that comes at a
8:38
cost. It's a lot less token efficient to
8:40
use these SDKs and you're going to get
8:43
slower responses. And so for anything
8:45
you're running yourself like your second
8:47
brain where you care more about the
8:48
output quality over the speed and the
8:51
cost, these are fantastic. I've built my
8:53
own second brain on top of these coding
8:56
agent SDKs. But anything where you're
8:58
building an agent into a platform,
9:00
anything going into production, it's
9:02
almost always more ideal to build with a
9:05
framework like Google's ADK because it's
9:07
something a lot more minimalistic,
9:09
right? You're building an agent from the
9:11
ground up. you get to control the
9:13
prompting and all the tooling and so you
9:15
can make it so it's very token efficient
9:16
and very fast. There's a lot of research
9:19
out there that tells us that if there is
9:22
a customer on a platform and they don't
9:24
get a response or at least that first
9:25
token within 4 seconds from your agent,
9:28
they're just going to leave or at least
9:30
there's a super high chance that they're
9:32
going to leave. So, we need our agents
9:33
to be fast and lightweight if we really
9:36
want to scale them in a platform. That's
9:38
what this video is really showing you
9:39
how to do using one of these frameworks
9:41
like the Google ADK. We're using the
9:43
agent CLI to build an agent that can
9:45
scale incredibly well. We're going to
9:47
deploy it in a environment that can
9:49
immediately be used by even millions of
9:51
people. All right. And 5 10 minutes
Testing the Agent Locally
9:53
later, we now have our agent. And I even
9:55
asked it to tell me what it did with the
9:57
agent CLI. So, we get an overview of the
9:59
different commands that it ran. It
10:01
didn't do anything with evaluation or
10:03
deployment yet, so we'll do that in a
10:05
second. I'll end the video quickly with
10:06
that. But we have the entire agent built
10:09
and tested now. And so I also had Claude
10:11
Code create a really simple streamllet
10:13
UI after I built the agent just so we
10:15
have something to see to really test our
10:17
agent. And so we can either use the
10:19
deployed agent once we have that or the
10:21
one just just running locally. And so I
10:24
can upload a sample data set that I had
10:26
it generate. I know a lot of this is
10:27
pretty trivial, but I don't want to
10:28
convolute things with a really
10:29
complicated example. So just keeping it
10:31
nice and simple. And so the question
10:33
here is what's the median revenue per
10:35
order and which row is the biggest
10:37
outlier above the mean? And so it's
10:40
going to right now create the code, run
10:42
the code, and then give us the answer in
10:44
just a second. And there we go. The
10:46
median revenue per order is $1,348.65.
10:51
And the best part about this UI, and
10:52
this is what the agent communicates back
10:54
to us as well, is the exact code that it
10:56
wrote in order to do this calculation.
10:58
So it loaded in the data. It was small
11:00
enough where I guess it just wrote the
11:02
CSV in line. Obviously, it could read
11:03
from the file as well and just using
11:05
pandas to get us the answer, printing it
11:07
out. So very very cool. That is how we
11:08
got our answer. So now it's time to take
Agent Evaluation (Don't Skip This)
11:11
this agent further by evaluating it,
11:13
refining the prompt and getting it
11:15
deployed. So starting with evals, then
11:17
we'll get into deploying the agent to
11:19
end things off testing that in Streamlit
11:21
again. So really simply with natural
11:23
language, just like building the agent,
11:25
I'm saying use the ADK skill to evaluate
11:28
the AI agent we built here. And I'm
11:29
doing this in a new conversation to show
11:31
we don't even need the context from the
11:34
conversation where we built the agent in
11:35
order for it to understand how to run
11:37
everything here. So it loads the eval
11:39
skill. It understands our existing
11:41
codebase and then basically it just runs
11:43
a test set that it created when it built
11:45
the agent. So you definitely would want
11:47
to expand this if you're really going to
11:49
production. But right now I just have a
11:51
three test case set here. And so it ran
11:54
each of them and we can see that each of
11:55
them passed. And so it's really sending
11:58
a query to the agent per evaluation
12:00
making sure that the response matches
12:02
with the expectation based on the test
12:04
data that it's sending into the agent.
12:06
This is awesome. And so you can also if
12:09
the evaluation shows the agent isn't
12:11
working the best, use this as an
12:13
opportunity to iterate on the system
12:14
prompt, the tools that you have for the
12:16
agent. Get it to the point where it's
12:18
ready for deployment. And now to deploy
Deploying to Production (Super Easy)
12:20
this agent, all we have to say is deploy
12:23
this agent, right? Like that simple.
12:25
It's going to load the skill. It's going
12:26
to go through the full process getting
12:28
this deployed to the Google Cloud. You
12:30
might have to do some kind of
12:31
authentication and set up a project in
12:33
Google Cloud, but it'll even walk you
12:35
through all of that, show you the steps
12:37
to take, the commands to run if you need
12:39
to set up things completely from
12:41
scratch. Obviously, I already have a lot
12:42
of this set up in my environment as I
12:44
was prepping for this video, but yeah,
12:46
overall it's really straightforward. And
12:49
there we go. 6 minutes later and our
12:51
agent is now deployed to production. So,
12:53
it literally spun up an instance in GCP
12:56
for us to host our agent. Of course, you
12:59
can configure all of this and then it
13:01
should also give you a console
13:03
playground URL. So, we can go right to
13:05
the web to test our agent that is now
13:07
running in production. So, we can send
13:09
messages here. Of course, we have that
13:11
stream UI that I'll test in in a second.
13:13
We have memories evaluation built into
13:15
the production environment. We have full
13:16
auditability with traces. This is big as
13:19
well. And then also all the code
13:21
execution that I was talking about
13:22
earlier that also runs in sandboxes in
13:25
our production environment. And then the
13:26
other really powerful thing here with
13:28
our agent is that it has an identity. So
13:31
you can see that right here. Also, if I
13:32
go in the service configuration, we can
13:34
look at the deployment details. And so
13:36
we can set permissions for our agent
13:38
just like you could another user or a
13:41
service account. We can also track our
13:43
traces per agent per user as they're
13:46
using our agents. And we have the URLs
13:48
here to incorporate the agent right into
13:50
any platform that we have built deployed
13:52
to production. Very very cool. So I'm
13:55
going to go back to Streamlit here. This
13:57
time I have the deployed agent selected.
13:59
I'll upload the sample data set again.
14:02
And then let me just copy over this
14:04
question here. So, a slightly different
14:05
question this time. Which region grew
14:07
its total revenue the most from quarter
14:08
1 to quarter 2 and by what percentage?
14:10
Just another basic question to show you
14:12
that we have the same interface here,
14:14
but now this time running through the
14:16
deployed agent that we have in GCP. Take
14:19
a look at that. We got our answer, the
14:21
code that I wrote, everything looking
14:23
really, really nice. So, we took our
Outro
14:25
agent from idea all the way to
14:28
production in this video without me
14:30
running a single command myself. Cloud
14:31
code drove the entire thing. So that's
14:34
the Google agent CLI in 15 minutes. It
14:37
is such a powerful tool to take any
14:39
agent from idea to production. Now
14:41
depending on what you're going to build,
14:42
it might be more complicated than what I
14:45
presented here if it's multi- aent
14:46
complex rag system, but this still is
14:49
going to be the tool that can guide that
14:51
entire process for you. You might just
14:53
have to spend more time specking things
14:55
out with your coding agent. But yeah,
14:57
I'll link to this in the description.
14:59
Just try it out. Build an agent and just
15:01
see how easy it is these days. even
15:03
compared to just a year ago. And so if
15:06
you appreciated this video and you're
15:07
looking forward to more things on AI
15:09
agents and AI coding assistance, I would
15:12
really appreciate a like and a
15:13
subscribe. And with that, I will see you
15:15
in the next

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
source_url: https://www.youtube.com/watch?v=1wfY7GCVvh0
source_title: Google’s Agents CLI: The CLI + Skills Combination to Ship AI Agents EASILY
channel_or_org: Cole Medin
speaker: Cole Medin
published_at: Jun 10, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + pasted transcript
content_type: Google Agents CLI / Google ADK / CLI-plus-skills workflow / AI coding assistant-driven agent build / production deployment / sandboxed code execution / evals / prompt optimization / audit trails / agent identity / service account permissions / production agent harness
source_reliability_context: Creator walkthrough/demo, apparently made in collaboration with Google per the transcript. Useful for understanding the emerging “CLI as capability + skills as instructions” pattern and how agent frameworks are being packaged for coding agents. Treat as product-demo evidence and architecture signal, not as independent proof that production agent deployment is universally easy.
priority: 4.25/5
depth: tactical_architecture_reference
recommended_status: route to Build-OS, AI Substrate, Agent Work Protocol, deployment rails, skills/context doctrine, runtime security, eval/deployment workflow, and agent identity/audit doctrine.

Topic tags:
[Google_Agents_CLI, Google_ADK, Cole_Medin, AI_coding_assistants, Claude_Code, CLI_plus_skills, skills_as_instructions, CLI_as_capability, agent_scaffolding, agent_evaluation, prompt_optimization, agent_deployment, production_agents, sandboxed_code_execution, agent_identity, service_account_permissions, audit_trails, traces, Google_Cloud, production_harness, Build_OS, AI_Substrate, Agent_Work_Protocol]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4.25/5
Depth: tactical architecture reference
Recommended status: route to Build-OS / AI Substrate / Agent Work Protocol / deployment rails / skills doctrine / runtime security.

Core takeaway

This source is not a deep doctrine talk. It is a productized workflow signal:

Agent frameworks are being wrapped so coding agents can drive the full lifecycle: scaffold, build, evaluate, optimize, deploy, trace, and operate.

The key technical pattern is very clean:

CLI = capability. Skills = instructions.

The transcript says the CLI gives the coding agent commands it can run, while the skills tell the coding agent how to use those commands.

OMNI translation:

Build-OS should expose governed capabilities as CLIs/tools, then pair them with versioned skills that teach coding agents how to use them safely.

This is important because it turns “AI coding assistant” from a generic helper into a controlled operator over a deployment substrate.

Key concepts to preserve
1. Agent building has shifted from hand-coding to agent-guided lifecycle

Cole contrasts older agent-building videos, where he walked line by line through model definitions, system prompts, tools, and framework code, with the current pattern where docs and commands are injected into the coding agent through skills.

OMNI keeper:

The builder is no longer manually reading every doc and writing every line.

The new workflow is:

spec → coding agent → loaded skills/docs → scaffold → build → eval → deploy

Doctrine candidate:

Agent construction is moving from hand-coded implementation to skill-guided orchestration by coding agents.

2. Skills package documentation into the coding agent

The transcript says skills contain the ADK documentation and instructions for writing the agent code, so the user does not have to manually visit or paste documentation for the coding agent.

OMNI translation:

This affirms OpenWiki / Context Hub / Build-OS context doctrine.

For OMNI:

D3 scheduling skill
D5 service-occurrence skill
D6 commerce skill
D7 document skill
RBAC/Federation skill
SNF documentation skill
medspa campaign skill
eval-writing skill
deployment skill

Doctrine candidate:

Skills are executable documentation for coding agents.

3. Every lifecycle stage needs both a command and a skill

Cole says each CLI capability has a corresponding skill so the coding agent knows how to drive the process end to end.

OMNI keeper:

This is the clean primitive:

capability_surface + instruction_surface

For Build-OS, do not just create tools. Create:

the command/tool
the skill explaining when/how to use it
constraints
examples
expected outputs
failure modes
evals
rollback/review steps

Doctrine candidate:

A tool without a skill is an exposed capability without operating doctrine.

4. The coding agent can drive the whole process, but the spec still matters

Cole demo-builds quickly, but explicitly says that for real work he still recommends the usual planning and implementation process: build a spec first, then have the coding agent load skills and implement.

OMNI keeper:

Do not let “agent can do it” become “skip design.”

For OMNI:

HHH prompts need specs
D7 extraction needs specs
service occurrence logic needs specs
checkout/benefit logic needs specs
production workflows need specs before deployment

Doctrine candidate:

Skills reduce implementation friction; they do not replace specification.

5. Sandboxed code execution is a production boundary

The demo agent writes Python code over CSV data. Cole specifically chooses code execution because arbitrary code needs isolation in production, and says Google’s ADK handles code execution in a built-in sandbox.

Later, he again notes production code execution runs in sandboxes.

OMNI keeper:

This is major for OMNI.

Any agent that writes/runs code needs a sandbox boundary:

CSV analysis
billing reconciliation
D7 document parsing
Build-OS scripts
report generation
data cleanup
analytics
import/export transformations

Doctrine candidate:

Code-writing agents need sandboxed execution before production use.

6. Agent SDKs vs production frameworks

Cole distinguishes coding-agent SDKs from production frameworks. Coding-agent SDKs are powerful but often slower and less token-efficient, making them good for personal workflows or second brains. For production platform agents, he argues a minimal framework like ADK is often better because you control prompts/tools and can optimize for speed and cost.

OMNI translation:

This is useful but should be treated as a tactical distinction, not universal law.

Potential OMNI rule:

use heavy coding-agent harnesses for Build-OS/deep work
use lean lane-specific runtimes for customer/patient-facing production
use async/deep agents where latency tolerance exists
use minimal fast agents where user-facing latency matters

Doctrine candidate:

The build harness and the production harness may be different.

7. Production agents need latency discipline

Cole says customer-facing platform agents must be fast/lightweight, citing that if users do not receive a response or first token within about four seconds, many leave.

OMNI keeper:

For OMNI:

patient-facing chat/voice needs low latency
provider workspace can tolerate some depth
Build-OS can run longer
billing reconciliation can be async
D7 batch ingestion can be queued

Doctrine candidate:

Runtime depth must match the lane’s latency tolerance.

8. Evals are a lifecycle step, not an afterthought

After local testing, Cole explicitly says the next step is evaluating, refining the prompt, and deploying. The eval skill runs a test set against the agent and checks responses against expected outputs.

OMNI keeper:

Even the “easy production” demo includes evals.

For OMNI, no production lane should ship without some eval path:

deterministic tests where possible
LLM-as-judge where useful
regression cases
risk evals
trace-derived evals
domain-owner review for regulated lanes

Doctrine candidate:

Deployment workflows should make evals a default step, not an optional cleanup task.

9. Deployment is becoming commandable by agents

The transcript shows the coding agent loading a deploy skill and walking through Google Cloud project/auth setup, then deploying to GCP.

OMNI translation:

Deployment becomes another agent-operable workflow, but should still be governed.

For OMNI:

agent can prepare deployment
agent can run checks
agent can create PR/plan
agent can deploy only under policy
humans/domains approve production changes depending on risk

Doctrine candidate:

Agent-driven deployment needs release gates, not blind autonomy.

10. Production environment includes memory, evals, auditability, traces, sandboxing, and identity

The demo’s production environment includes memories, evaluation, full auditability with traces, sandboxed code execution, and agent identity.

It also supports permissions like a user/service account and traces per agent per user.

OMNI keeper:

This is the strongest operational checklist in the video.

A production agent is not just a hosted prompt. It needs:

identity
permissions
traceability
auditability
evals
memory policy
sandboxing
deployment surface
user-level trace attribution

Doctrine candidate:

A production agent must be identity-bearing, permissioned, traced, and sandboxed.

OMNI translation

This source gives OMNI a very practical Build-OS pattern:

skills + CLI + coding agent = controlled agent factory

For OMNI, imagine:

omni-cli

scaffold D3 scheduling lane
scaffold D7 extractor
scaffold GLP-1 workflow
run evals
run migration checks
generate docs
deploy sandbox
promote staging to production
inspect traces
create rollback plan

Paired with:

omni-skills

how D5 service occurrence works
how D6 benefit attribution works
how D7 evidence/citations work
how RBAC/Federation gates are enforced
how to write evals
how to deploy safely
how to avoid domain-truth violations

The important point:

The skill teaches the coding agent the operating doctrine. The CLI gives it bounded power.

That is exactly the Build-OS direction.

Likely OMNI landing zones

Build-OS

CLI-driven workflows
skill-packaged docs
project scaffolding
eval running
prompt optimization
deployment orchestration
coding-agent execution plans

AI Substrate

production runtime selection
lightweight vs deep harness choice
sandboxed code execution
agent identity
trace attribution
memory/eval integration

Agent Work Protocol

spec-first workflow
eval before deploy
permissioned deploy steps
release gates
bounded code execution
generated implementation summaries

Polaris / Proof Layer

audit trails
traces per agent/user
deployment lineage
eval result lineage
code execution provenance

RBAC / Federation

service-account-like agent identity
permissions assigned to agents
user/agent trace attribution
Doctrine candidates
Agent construction is moving from hand-coded implementation to skill-guided orchestration by coding agents.
Skills are executable documentation for coding agents.
A tool without a skill is an exposed capability without operating doctrine.
Skills reduce implementation friction; they do not replace specification.
Code-writing agents need sandboxed execution before production use.
The build harness and the production harness may be different.
Runtime depth must match the lane’s latency tolerance.
Deployment workflows should make evals a default step, not an optional cleanup task.
Agent-driven deployment needs release gates, not blind autonomy.
A production agent must be identity-bearing, permissioned, traced, and sandboxed.
Net-new / sharpen / affirm
Net-new candidates

CLI_as_agent_capability_surface
A command-line/tool interface exposing bounded build/eval/deploy capabilities that a coding agent can invoke.

skills_as_operating_doctrine
Versioned instruction bundles that teach coding agents how to use capabilities safely and correctly.

skill_command_pairing
Design rule that every operational command should have a paired skill explaining its purpose, constraints, examples, and failure modes.

build_harness_production_harness_split
Architecture pattern where deep coding-agent SDKs are used for building, while leaner production frameworks are used for low-latency deployed agents.

identity_bearing_production_agent
Production agent with its own identity, permissions, traces, auditability, and sandboxed execution boundary.

Sharpen existing

Build-OS
Adds CLI + skills as a concrete implementation pattern.

Agent Work Protocol
Adds spec-first agent build, eval, deploy, and permission gates.

AI Substrate
Clarifies harness choice by latency/cost/production needs.

Polaris
Adds deployment and audit trace lineage.

RBAC/Federation
Agents can be permissioned like service accounts.

Affirm
coding agents need current embedded docs/skills
production needs more than a prompt
evals should happen before deployment
sandboxing matters for code execution
deployment is becoming agent-operable
identity and traces are first-class production features
latency/cost shape production harness design
Reject / do not over-import
Do not treat “easy deployment” as safe deployment.
Do not skip specs because the CLI can scaffold.
Do not treat a three-test eval set as production readiness.
Do not let coding agents deploy without release policy.
Do not expose broad cloud permissions to an agent by default.
Do not assume Google ADK/Agents CLI must be OMNI’s stack.
Do not run arbitrary code without sandboxing and audit.
Do not confuse local demo success with multi-tenant production correctness.
Hard read

This is a useful Build-OS tactics source, not a deep enterprise doctrine source.

The keeper:

The production agent workflow is being packaged as CLI capabilities plus skills. The coding agent does not need to know everything natively; it needs bounded commands and versioned instructions that let it scaffold, evaluate, optimize, deploy, trace, and operate safely.

Shortest OMNI version:

OMNI should expose its own build/eval/deploy rails as CLI-like capabilities and pair them with doctrine-rich skills. Coding agents can then build against OMNI’s architecture without inventing it — while sandboxing, identity, evals, traces, and release gates keep production safe.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-07` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**HEADLINE VERDICT.** `EVSRC-2026-000233` (Cole Medin — *Google's Agents CLI: CLI + Skills to Ship AI Agents Easily*) is a **medium-tier Build-OS / agent-harness TACTICS source, not a doctrine source.** Its keeper is one clean, reusable pattern — **"CLI = capability, skills = instructions"** — plus the wave's tidiest **production-agent checklist** (identity · permissions · traces · auditability · evals · memory · sandboxed code execution). Every cluster **AFFIRMs or PARTIAL-affirms existing OMNI doctrine** (Build-OS `REV-158` · Agent-Work-Protocol · §B runtime · §A/RBAC non-human-actor · Polaris trace_lineage · §C containment · Knowledge-Reservoirs) with **build = absent** on the agent-harness side — the gap is BUILD, not frame. It is a near-twin of `208` (agentic SDLC), `212/213` (inner-loop / context delivery), and `217` (declare-before-run), and it slots straight into the wave's leg (a) *governed agent execution + eval*. **Net-new yield: ~2** (`capability_skill_pairing`, `build_vs_production_harness_split` — dedup-pending). **No new care-frame; zero direct conflicts;** one convenience-vs-governance tension (agent-driven "easy deploy"). The single most important OMNI translation: **expose OMNI's own build/eval/deploy rails as bounded CLI-like capabilities, each paired with a versioned doctrine-rich skill** — a tool without a skill is an exposed capability without operating doctrine.

---

#### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [ts]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **CLI = capability, skills = instructions** (the core pattern) | The reusable Build-OS shape: expose governed powers as bounded CLI/tools; pair each with a versioned skill teaching *how* to wield it safely | Build-OS `REV-158` · Agent-Work-Protocol · Knowledge-Reservoirs | "The CLI is the capability. The skills are the instructions." [3:32] | PARTIAL | absent | none | spine | watch |
| 2 | **Agent-guided lifecycle** (hand-code → skill-guided orchestration) | Builder no longer reads every doc / writes every line; flow = spec→coding-agent→loaded-skills→scaffold→build→eval→deploy | Build-OS · Agent-Work-Protocol §5–§7 | "single command to install the CLI and skills" [2:25] | AFFIRM | absent | none | spine | watch |
| 3 | **Skills = executable documentation** (docs baked into the agent) | Doctrine/docs delivered *into* the coding agent so it never manually re-reads them; OMNI already IS this (AGENTS.md + read-graph + artifact index; twin of `219`) | Knowledge-Reservoirs · Build-OS context · document-governance (`projection≠truth`) | "you don't have to spend a single second in the documentation" [2:17] | AFFIRM | partial | none | vocab→spine | watch |
| 4 | **Every stage has a command + a skill** (capability_skill_pairing) | Design rule: never ship a capability without a paired skill (purpose · constraints · examples · failure modes · evals · rollback) | Build-OS (MAJOR) · Agent-Work-Protocol | "every stage… we have a skill to go along with it" [4:02] | PARTIAL | absent | none | spine | **watch (net-new candidate)** |
| 5 | **Spec still matters** (skills cut friction, not specification) | "Agent can do it" ≠ "skip design"; production workflows need a spec before the agent loads skills | Agent-Work-Protocol §5 · Build-OS (`208` spec_as_agent_contract) | "still would recommend going through your usual planning" [6:41] | AFFIRM | absent | none | spine | watch |
| 6 | **Sandboxed code execution = production boundary** | Any agent that writes/runs code needs an isolation boundary before production (CSV/billing/D7-parse/report/import) | §C Security (containment) · §B runtime · Polaris | "execute any kind of arbitrary code… in a secure way" [7:27] | AFFIRM | absent | none | spine | watch |
| 7 | **Build harness ≠ production harness** (SDK vs lean framework) | Deep coding-agent SDK for *building*; leaner fast/token-efficient framework for *deployed* low-latency agents — a tactical distinction, not universal law | §B runtime selection · Build-OS (`214` capability_placement · `221` model-bundles) | "coding agent SDKs… less token efficient… slower" [8:38] | PARTIAL | absent | none | vocab | **watch (net-new-ish)** |
| 8 | **Latency discipline per lane** (first-token ≤ ~4s) | Runtime depth must match a lane's latency tolerance (patient chat/voice = fast; Build-OS/billing = async) | §B runtime (`204`) · workflow_lane · CNS scheduling | "within 4 seconds… they're just going to leave" [9:28] | AFFIRM/PARTIAL | absent | none | vocab | watch |
| 9 | **Evals = default lifecycle step, not afterthought** | No production lane ships without an eval path (deterministic → LLM-judge → regression → risk → owner-review) | Build-OS eval (`215/216/217/230`) · Polaris/proof | "use the ADK skill to evaluate the AI agent" [11:28]; "each of them passed" [11:55] | AFFIRM | partial | none | spine | watch |
| 10 | **Agent-driven deployment needs release gates** | Deployment becomes agent-operable — but stays governed (agent prepares/checks/plans; humans/domains commit prod by risk); "easy" ≠ safe | Agent-Work-Protocol · Build-OS · candidate≠commit (`202` no-autonomous-merge) | "deploy this agent, right? Like that simple." [12:23] | AFFIRM | absent | **tension** (convenience↔gated-release) | spine | watch |
| 11 | **Identity-bearing production agent** (checklist) | A prod agent = identity + permissions + traces + audit + evals + memory-policy + sandbox; permissioned "like a user or service account" | §A non-human-actor · RBAC · Polaris · §C · Knowledge-Reservoirs | "set permissions… just like another user or a service account" [13:38] | AFFIRM | partial | none | spine | watch |
| 12 | **Traces per agent per user** (attribution) | User/agent-scoped trace attribution + deployment/eval lineage as first-class prod features | Polaris/proof · CNS §11 trace_lineage | "track our traces per agent per user" [13:43] | AFFIRM | partial | none | vocab | watch |

*Build column verified via `rg` from repo root against `app lib components scripts supabase middleware.ts`:* **absent** for `skill(s)`, `ADK`/`agent-cli`, `sandbox`/`code-execution`, `service-account`/`agent-identity`, `TTFT`/`first-token`/`latency`, agent-`scaffold`/`prompt-optim`. **present-but-not-agent-facing (→ "partial"):** `audit`/`trace` (84 files — human/domain audit trail, not agent-scoped attribution); `lib/auth/capabilities.ts` `requireCapability` (staff/RBAC capability gating, not agent service-account permissions); `scripts/test-*.ts` domain deterministic tests (a real-world echo of "verifiers-not-vibes" applied to *domain logic*, not agent-eval); AGENTS.md + read-graph + artifact-index (skills-as-docs, as *doctrine boot*, not installable per-capability skills). *The `eval`/`scaffold` grep hits (`disclosure-policy/*`, `rules-templates-scaffold`) are domain-rule machinery, unrelated to agent lifecycle.*

#### B. Net-new primitives — `name — meaning — EXISTS-AS`  *(dedup vs registry §2 mints 201–230 + standard OMNI primitives)*

- `capability_skill_pairing` — every governed capability (CLI/tool/action) MUST ship a paired, versioned **skill** teaching purpose · constraints · examples · expected outputs · failure modes · evals · rollback/review — "a tool without a skill is an exposed capability without operating doctrine." — **EXISTS-AS: net-new DESIGN RULE** (dedup-pending, Opus-main verifies). Sharpens Build-OS tools + OMNI AGENTS.md/read-graph; **distinct from** `217` `agent_manifest` (per-agent *declare-before-run* registry), `208` `spec_as_agent_contract` (per-*task* input contract), `216` `agent_overview_document` (per-lane *runtime memory*). This is the per-*capability* instruction-pairing layer none of those own.
- `build_vs_production_harness_split` — architecture rule: use a deep coding-agent SDK harness for **building** vs a lean, fast, token-efficient framework for **deployed** low-latency production agents; runtime tier chosen by latency/cost/token-budget. — **EXISTS-AS: net-new-ish** (dedup-pending, Opus-main verifies). Sharpens §B runtime selection + `214` `capability_placement_policy` + `221` model-runtime-bundles + `204`/`228` runtime-economics with an explicit *build-tier vs serve-tier* dimension.

**Reconciled → NOT net-new (do not re-mint):**
- `CLI_as_agent_capability_surface` (Knox) → **EXISTS-AS** `capability_envelope` + `211` `tool_invocation_gateway` + Build-OS tools (a NAME over bounded-capability surface).
- `skills_as_operating_doctrine` / "skills as executable documentation" (Knox) → **EXISTS-AS** `context_packet` + Knowledge-Reservoirs + `219` agent-readable-repo-docs + OMNI AGENTS.md/read-graph; **merged into** `capability_skill_pairing` above.
- `identity_bearing_production_agent` (Knox) → **EXISTS-AS composite:** `211` `workload_identity` + §A `non_human_actor`/`agent_identity` + RBAC permissions + `205` `assume_breach_agent_posture`/sandbox + `trace_lineage` + memory-policy (`227`). A restated checklist, not a new mechanism.
- latency-tier / `runtime depth must match lane latency` → **EXISTS-AS** `204` runtime + `workflow_lane` + registry **T4** (targeted-latency-vs-fail-closed).
- sandboxed-code-execution → **EXISTS-AS** `205` `assume_breach_agent_posture` + containment + `capability_envelope`.
- agent-operable-deployment → **EXISTS-AS** Agent-Work-Protocol + candidate≠commit + `202` no-autonomous-merge (release gates).

#### C. Reread flags

- **None material.** Operator metadata block IS present at top of §3 Review 001 and Knox's full strategic read is present — both lifted verbatim into §0/§0.1 (`identity_confidence: high_from_operator_metadata`; url + date real, not TK). No reread trigger.
- Minor watch (non-blocking): `published_at` `2026-06-10` predates capture by ~4 weeks (normal); Google-collaboration framing means product-optimism is expected — already fenced by Knox's reject list (see hard read).

#### D. Hard read + strongest OMNI line

- **One-line hard read:** A Build-OS *tactics/demo* source (not deep doctrine) whose real keeper is the **CLI=capability / skills=instructions** pairing and the production-agent checklist (identity · permissions · traces · evals · sandbox) — all AFFIRM-ing existing OMNI doctrine with a **build gap**, not new care-frame; treat "one-command easy deploy," "three-test eval," and "broad cloud permissions to an agent" as **governance traps, never imports** (easy ≠ safe; scaffold ≠ skip-spec; local-demo ≠ multi-tenant-prod-correct).
- **Strongest OMNI line:** *OMNI should expose its own governed build/eval/deploy rails as bounded CLI-like capabilities and pair each with a versioned, doctrine-rich skill — so coding agents build against OMNI's architecture without inventing it, while sandboxing, agent identity, evals, traces, and release gates keep production safe.*

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: **Build-OS `REV-158` + Agent-Work-Protocol (MAJOR — CLI=capability/skills=instructions, spec-first, agent-guided lifecycle, release gates)** · §B AI-substrate runtime (medium — build-vs-production harness split, per-lane latency) · §A non-human-actor + RBAC + Polaris/proof (medium — agent identity/permissions/traces/audit) · §C Security (medium — sandboxed code execution / containment) · Knowledge-Reservoirs + document-governance (medium — skills-as-executable-docs; AGENTS.md/read-graph twin of `219`) · operating-metrics (minor — eval-as-default, latency/first-token) · promotion: `watch` (net-new = `capability_skill_pairing`, `build_vs_production_harness_split`, both dedup-pending Opus-main; all clusters AFFIRM/PARTIAL · build absent → route build-gaps, do not re-derive doctrine)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — Opus formal extraction: §0/§0.1 metadata lifted verbatim from Knox block (`identity_confidence: high_from_operator_metadata`; slug `google-agents-cli-cli-plus-skills` proposed, file NOT renamed); §3 Review 003 written (12 concept clusters + 2 net-new [`capability_skill_pairing`, `build_vs_production_harness_split`, dedup-pending] + reread flags + hard read); build column grep-verified (agent-harness/CLI/skills/sandbox/agent-identity absent; human audit + RBAC `capabilities.ts` partial); §4 pointers filled; §0.5 ticked; status → `analyzed`. Registry/coverage/anchor NOT edited (fold packet returned to Opus-main). Binds nothing (`GRD-036`/`GRD-044`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

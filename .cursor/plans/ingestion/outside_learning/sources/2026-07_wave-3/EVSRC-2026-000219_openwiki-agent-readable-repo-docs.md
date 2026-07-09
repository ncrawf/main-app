# EVSRC-2026-000219 — Introducing OpenWiki, an open source agent for repo documentation (LangChain / Brace Sproul)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000219_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000219`  ·  filename: `EVSRC-2026-000219_openwiki-agent-readable-repo-docs.md` *(slug proposed; file rename deferred to Opus-main — do NOT rename here)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=nIVu3zfYprI&t=19s`  ·  source_title: `Introducing OpenWiki, an open source agent for repo documentation`
- channel_or_org: `LangChain`  ·  speaker: `Brace Sproul, LangChain`  ·  published_at: `Jul 1, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + description + chapter list + pasted transcript`
- content_type: `repo documentation / coding-agent context / OpenWiki / Deep Agents / agent-maintained documentation / agents.md / Claude.md / GitHub Actions / repo wiki / commit-history documentation / business-logic capture / context engineering for coding agents`  ·  source_reliability_context: `Official LangChain product/demo walkthrough for OpenWiki, an open-source agent and CLI that generates and maintains repository documentation specifically for coding agents. Strong implementation reference for Build-OS documentation substrate, agent-readable repo context, automated doc freshness, and agents.md-based context routing. Tooling-specific details should remain implementation examples, not mandatory OMNI doctrine.` (`vendor` — official product/demo walkthrough)  ·  topic_tags_light: `[LangChain, OpenWiki, Brace_Sproul, repo_documentation, coding_agents, Deep_Agents, agents_md, Claude_md, agent_readable_docs, repo_wiki, documentation_agent, context_engineering, GitHub_Action, automated_doc_updates, commit_history, PR_comments, business_logic_capture, codebase_context, agent_context_bootstrap, Knowledge_Reservoirs, Build_OS, Agent_Work_Protocol, Reflexive_Build_Substrate]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Brace Sproul` · role_in_source: `presenter` (product demo / walkthrough) · affiliation_at_publication: `LangChain` · speaker_type: `vendor` (product engineer / dev advocate) · authority_context: `LangChain team member presenting an official LangChain open-source product (OpenWiki, built on Deep Agents + LangSmith)` · identity_confidence: `high_from_operator_metadata`
  - *(add a bullet per additional speaker)*
- publisher / channel: `LangChain (official YouTube channel)`  ·  interviewer / moderator / host: `n/a (solo product walkthrough)`
- event_context: `Official LangChain product launch / demo video for OpenWiki — an open-source agent + CLI that generates and maintains agent-readable repo documentation.`  ·  perspective / conflict notes: `Vendor demo — promotional framing of LangChain's own tooling (OpenWiki / Deep Agents / LangSmith). Treat tooling specifics as implementation examples, not OMNI doctrine; the transferable frame (agent-readable maintained context) is the keeper, not the product.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat (metadata block in Review 001) · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename (slug proposed §0; rename deferred to Opus-main) · [x] §0 metadata (LIFTED verbatim from operator metadata block — `identity_confidence: high_from_operator_metadata`) · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) — *Opus-main folds* · [ ] update coverage matrix — *Opus-main folds* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
What OpenWiki is and why it exists
0:01
What's up everyone? It's Brace from
0:02
Langchain and today I'm really excited
0:04
to tell you all about OpenWiki, the
0:05
newest open source agent from Langchain.
0:08
Open Wiki is the easiest way to generate
0:10
and maintain documentation for your
0:12
codebase built specifically for agents.
Installing OpenWiki with one npm command
0:15
To get started, it's as simple as
0:16
running one command. So the first thing
0:19
I'll do is install it on my local
0:20
machine through npm. Once it's
0:22
installed, all I need to do is run open
0:23
wiki init. This will first take me
Onboarding and picking a model provider
0:26
through an onboarding process where I
0:27
get to pick my model provider. As you
0:29
can see here, we support not just open
0:31
source but also closed source model
0:32
providers. I'll start with open router.
0:34
It'll then ask me for an API key. I'll
0:36
paste that in and then pick my model. So
0:39
we have a few predefined models set here
0:40
which you can pick from. But of course
0:42
if there's a model you want to run which
0:44
we don't have set here. You can set a
0:46
custom model ID and open Wiki's open
0:48
source. So if there's a provider or
0:50
model you want set in the pre-built
0:52
settings, put up a PR and we can get it
0:54
added to the actual package. So I'll
Optional LangSmith tracing setup
0:56
select GLM 5.2. And then next it's going
0:58
to ask me for my langu API key. This is
1:00
optional, but because OpenWiki is built
1:02
on deep agents and Langmith, you can set
1:04
an API key here to trace every single
1:06
action and run OpenWiki takes to a
1:09
tracing project. So you can always see
1:10
exactly how it's running under the hood.
1:12
For now, I'll skip that. And when I hit
Generating your first docs
1:14
enter, because I ran the init command,
1:16
it's going to immediately jump in and
1:17
start generating documentation for this
1:19
repository. So while this runs, let's go
Touring the generated documentation
1:22
look at what these docs actually look
1:23
like in a repo. All right, so I'm in the
1:26
open wiki repository itself and of
1:28
course we have openwiki docs generated
1:30
for this repo. You can see a directory
1:32
named open wiki and within that there's
1:34
a few subdirectories and a file called
1:35
quickstart.mmd. This quick start file is
1:38
the index for the openwiki docs. So it
1:40
contains a high level of what the actual
1:42
repo is, what it does uh and some
1:45
important files. It also links out or
1:47
acts as an index for the rest of the
1:49
open wiki doc. So we can see it
1:50
references the other directories we have
1:52
here and then also actual files within
1:54
the codebase. This is the first file
1:56
that your coding agent will inspect when
1:58
it's trying to gather documentation for
2:00
the repo. So it acts not just as a
2:02
highle description of the repo itself
2:04
but also as an easy reference to quickly
2:06
find things within the repository. If we
2:08
expand these directories, we can see
2:10
there's subfiles which contain
2:12
documentation for different aspects of
2:13
the repo. So for open wiki, there's the
2:15
actual agent itself. There's the
2:17
architecture of the agent, the CLI,
2:20
different operations within that CLI,
2:22
and then a few more files for uh
2:24
tracking the updates open wiki has made.
2:26
These files include not just technical
2:28
documentation, but also highle business
2:30
logic about the different aspects of the
2:32
repository. These are all important to
2:34
the agent's context because it doesn't
2:35
not need to just know how the code
2:37
works, but also why things were
2:39
implemented as they are. It can see how
2:41
the code works from just reading the
2:42
code. But through looking at git
2:45
commits, the history of git commits,
2:47
comments, and so on, open wiki can
2:49
generate uh documentation documenting
2:51
the business logic and decisions behind
2:53
different changes so that your agent can
2:55
have the best context when it's actually
2:57
writing code in your repository. So
Why docs need to stay up to date
2:59
that's what the actual documentation
3:00
looks like and how to generate initial
3:02
file. To keep this up to date, you don't
3:04
really want to have to maintain or make
3:06
these changes manually. So we have a
Automating updates with a GitHub Action
3:08
GitHub action you can copy which will
3:10
run once a day and automatically update
3:12
your open wiki docs uh for you. As you
3:15
can see here runs the openwiki update
3:17
command. Right? First we ran a net. The
3:19
update command is just update. This will
3:21
run once a day and put up a pull request
3:23
in your repository automatically
3:25
updating documentations. The way it
3:27
updates these docs is primarily through
3:29
using git. So it'll track the last
3:31
commit hash which was checked in before
3:33
the docs were last updated. It'll then
3:35
look at every commit which was merged
3:36
after that, inspect every change that
3:38
was made, PR descriptions, comments, and
3:41
so on, and use that to potentially make
3:43
updates if necessary to the docs so that
3:45
your docs always stay up to date. If you
3:48
have a repo which you don't update as
3:50
frequently, you can change this to run
3:51
say once a week or if you have a repo
3:53
which has hundreds or thousands of
3:55
commits getting merged in every day, you
3:57
could have this run once every four
3:58
hours, 6 hours, whatever you'd like. The
4:02
schedule is completely independent of
4:03
the agent because the agent works on any
4:05
time frame because all it does is look
4:07
at the git history and based on those
4:09
commits update the documentation itself.
Chatting directly with the OpenWiki agent
4:12
Now open wiki doesn't just have two
4:13
commands for running and updating. You
4:15
can also chat with the agent directly.
4:17
Let's see what that looks like. So to
4:19
chat with open wiki all you need to do
4:20
is run open wiki. In here it'll spin up
4:23
a chat interface where you can do things
4:24
like customize the model provider. You
4:27
can update or clear the docs and so on.
4:29
You can also chat with the agent. So I
4:30
can ask it something like what can you
4:32
do?
4:34
As we can see here, OpenWiki doesn't
4:36
just generate documentation, but it's
4:38
also a chatbot. So I can use it to ask
4:40
questions about my repo, about my docs,
4:42
search through the docs it wrote, uh,
4:44
and so on. You can use this to manage
4:46
your openwiki documentation and also to
4:47
make targeted changes to the docs. Now
How your coding agent actually uses the docs
4:50
we have our documentation, but how does
4:52
the coding agent actually use it? Your
4:54
coding agents are made aware of OpenWiki
4:56
through an agents.mmd or claw.mmd if
4:59
you're using cloud code file. Open wiki
5:01
will automatically update these files or
5:03
create them if they don't exist to
5:05
include a reference to open wiki and
5:06
instruct the coding agent how, where,
5:09
and when to use the open wiki
5:10
documentation, aka anytime it needs
5:12
context about the codebase. Because open
5:15
wiki automatically makes these changes
5:16
to your agent MD, you never really need
5:18
to think about open wiki after you set
5:20
it up initially. You run the init
5:22
command to generate your initial docs.
5:23
You then add the github action to
5:25
automatically update the docs as changes
5:27
are made to your repo. And open wiki
5:29
adds this section to your agents. MD.
5:31
That means your agents are always
5:34
keeping your docs up to date for you in
5:35
the background. All you need to do is
5:37
merge the poll requests as they put them
5:38
up. And anytime you run a coding agent
5:40
in your repo, it'll automatically pick
5:42
up your agents. MD file, thus picking up
5:44
the section on open wiki and therefore
5:47
it'll be instructed on how to use open
5:48
wiki when to reference those docs. And
5:50
that way your agents can always have
5:52
full context into your repository
5:54
without you needing to add extra
5:56
prompting or references every single
5:58
time. All right, that's how Open Wiki
What's next and how to contribute
6:00
works at a high level. Right now, it's
6:02
just for coding agents and it's fairly
6:03
simple, but we're just getting started
6:04
with this wiki idea and we're going to
6:05
do a lot more. So, if you have feature
6:07
requests or suggestions or want to
6:09
contribute, please go to the open wiki
6:10
repository, which we'll have linked in
6:12
the description, put up a PR or create
6:14
an issue with the feature requests. I'm
6:16
looking forward to hear from you guys
6:17
soon.

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
source_url: https://www.youtube.com/watch?v=nIVu3zfYprI&t=19s
source_title: Introducing OpenWiki, an open source agent for repo documentation
channel_or_org: LangChain
speaker: Brace Sproul, LangChain
published_at: Jul 1, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + description + chapter list + pasted transcript
content_type: repo documentation / coding-agent context / OpenWiki / Deep Agents / agent-maintained documentation / agents.md / Claude.md / GitHub Actions / repo wiki / commit-history documentation / business-logic capture / context engineering for coding agents
source_reliability_context: Official LangChain product/demo walkthrough for OpenWiki, an open-source agent and CLI that generates and maintains repository documentation specifically for coding agents. Strong implementation reference for Build-OS documentation substrate, agent-readable repo context, automated doc freshness, and agents.md-based context routing. Tooling-specific details should remain implementation examples, not mandatory OMNI doctrine.
priority: 4.5/5
depth: implementation_reference
recommended_status: route to Build-OS, Knowledge Reservoirs, Agent Work Protocol, agent-readable documentation, repo context management, coding-agent substrate, context freshness, and Reflexive Build documentation loop.

Topic tags:
[LangChain, OpenWiki, Brace_Sproul, repo_documentation, coding_agents, Deep_Agents, agents_md, Claude_md, agent_readable_docs, repo_wiki, documentation_agent, context_engineering, GitHub_Action, automated_doc_updates, commit_history, PR_comments, business_logic_capture, codebase_context, agent_context_bootstrap, Knowledge_Reservoirs, Build_OS, Agent_Work_Protocol, Reflexive_Build_Substrate]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4.5/5
Depth: implementation reference
Recommended status: route to Build-OS / Knowledge Reservoirs / repo context substrate / agent-readable documentation / coding-agent workflow / Reflexive Build loop.

Core takeaway

This source is about making a codebase legible to agents.

OpenWiki generates and maintains documentation for a repository, then connects that documentation into agents.md / Claude.md so coding agents automatically know where to look for repo context.

The major keeper:

Coding agents should not have to rediscover the repo from scratch every run. They need a maintained, agent-readable wiki that explains what the repo is, where things live, how the architecture works, and why key decisions were made.

OMNI translation:

Build-OS needs an OpenWiki-like layer: an agent-readable system wiki that stays current from commits, PRs, comments, and human decisions, then gets pulled into future agent runs through explicit context files.

This is not just documentation. It is context infrastructure.

Key concepts to preserve
1. Documentation built specifically for agents

The video frames OpenWiki as documentation for coding agents, not just humans.

That distinction matters.

Human docs explain enough for people.
Agent docs need to help models navigate:

repo purpose
architecture
important files
module boundaries
CLI behavior
business logic
decision history
where to look before editing
how to avoid wrong assumptions

OMNI keeper:

Agent-readable documentation is a runtime dependency, not a nice-to-have.

For OMNI Build-OS, this applies to:

System Map
domain contracts
schema notes
service occurrence doctrine
D7/D6/D5 boundaries
prompt/skill directories
source registries
eval bundles
deployment workflows
2. Repo wiki as index + map

OpenWiki creates an openwiki directory with a quickstart.md / index-style file. That file gives a high-level description of the repo, references other docs, and links to actual files.

OMNI keeper:

Build-OS needs a repo/system index that functions like:

“Start here before touching anything.”

Possible OMNI artifact:

system_context_index.md

Contains:

what this repo/system is
canonical folders
domain boundaries
critical files
build/test commands
where doctrine lives
where schemas live
where evals live
what not to edit casually
current architecture status
known tensions / open questions

Doctrine candidate:

Every agent-editable system needs an agent-readable entrypoint.

3. Docs should include why, not just how

The speaker explicitly says the docs include technical documentation and high-level business logic. Agents can read code to infer how it works, but they also need to know why things were implemented as they are.

This is the most important line for OMNI.

OMNI keeper:

The “why” is context debt if it is not captured.

For OMNI, the “why” matters constantly:

why D5 exists separately from D3
why Clinical Memory is not a junk drawer
why D6 owns ledger truth
why CNS coordinates but does not own truth
why projections are not authority
why AI proposes but humans/domains commit
why Settings configures but does not decide
why Federation is distinct from RBAC

Doctrine candidate:

Agent context must preserve decision rationale, not only implementation structure.

4. Git history as documentation input

OpenWiki updates docs by tracking the last commit hash, looking at merged commits after that, inspecting changes, PR descriptions, comments, and updating docs if needed.

OMNI keeper:

This is a concrete pattern for Build-OS:

git history → changed files → PR context → decision comments → documentation update PR

That is extremely useful.

Potential primitive:

git_history_to_context_loop

A process that converts code/system changes into candidate updates to agent-readable docs.

This connects directly to the Reflexive Build Substrate.

5. Automated documentation PRs

OpenWiki can run via GitHub Action on a schedule and open PRs automatically to update docs.

OMNI keeper:

Docs should not silently mutate. They should become reviewable PRs.

For Build-OS:

agent detects stale docs
proposes doc update
opens PR or issue
human reviews/merges
future agents consume updated docs

Doctrine candidate:

Agent-maintained documentation should be proposed through reviewable diffs, not silent mutation.

6. Context freshness cadence

The schedule is configurable: daily, weekly, every few hours, depending on repo velocity. The agent works across timeframes because it reads git history since the last checked commit.

OMNI keeper:

Context freshness should be cadence-based and workload-dependent.

For OMNI:

high-change Build-OS docs: frequent
stable domain doctrine: slower, review-heavy
production clinical policy: strict gated updates
marketing docs: faster
eval corpus docs: after merge/test events

Doctrine candidate:

Context freshness cadence should match change velocity and risk.

7. Direct chat with repo wiki agent

OpenWiki can also be used interactively to ask about the repo, search docs, manage docs, clear/update docs, or make targeted changes.

OMNI keeper:

Build-OS should have both modes:

scheduled background doc maintenance
interactive repo/system question answering

This maps to:

“what owns this truth?”
“where does D7 extraction logic live?”
“why did we split service occurrence?”
“what evals cover this agent?”
“what files need updating if we change this domain?”
8. agents.md / Claude.md as context bridge

OpenWiki updates or creates agents.md / Claude.md to reference OpenWiki docs and instruct coding agents how, where, and when to use them.

This is a very concrete pattern.

OMNI keeper:

The docs are not useful unless agents are explicitly routed to them.

Potential primitive:

agent_context_bridge_file

A file that tells coding/build agents:

where authoritative docs live
when to read them
what files are mandatory context
what rules override local inference
which folders are dangerous
what evals must run
what “done” means

Doctrine candidate:

Agent-readable docs need an explicit bridge into agent runtime context.

OMNI translation

This source is directly relevant to the current problem: OMNI is becoming too large for any agent or human to safely edit from memory alone.

The OpenWiki pattern says:

Make the system document itself in a way agents can consume, keep that documentation fresh from actual repo/history changes, and wire the docs into the agent runtime through explicit context files.

For OMNI, this becomes:

system changes → doc update candidate → reviewable PR → updated system wiki → agents.md bridge → future Build-OS agents use current context

That is a clean Build-OS loop.

Likely OMNI landing zones

Build-OS

agent-readable repo/system wiki
agents.md context bridge
generated architecture docs
GitHub Action doc refresh
PR-based doc maintenance
repo onboarding for coding agents

Knowledge Reservoirs

system rationale capture
business logic memory
decision history
stale context prevention
“why” documentation

Agent Work Protocol

mandatory context entrypoint before edits
update docs when changing behavior
no hidden memory as sole source
reviewable doc diffs

Reflexive Build Substrate

Build-OS improves its own documentation
coding-agent traces/commits update context
doc freshness as part of system health

Polaris / proof layer

documentation update provenance
commit hash lineage
PR/comment source trail
traceable rationale updates
Doctrine candidates
Agent-readable documentation is a runtime dependency.
Every agent-editable system needs an agent-readable entrypoint.
Agent context must preserve decision rationale, not only implementation structure.
Git history can become a source for context maintenance.
Agent-maintained documentation should be proposed through reviewable diffs, not silent mutation.
Context freshness cadence should match change velocity and risk.
Agent-readable docs need an explicit bridge into agent runtime context.
Coding agents should retrieve maintained repo context before modifying code.
Net-new / sharpen / affirm
Net-new candidates

agent_readable_repo_wiki
A maintained documentation layer designed for coding/build agents, containing repo map, architecture, file references, business logic, and decision rationale.

agent_context_bridge_file
An agents.md-style file that instructs agents where authoritative docs live and when/how to use them.

git_history_to_context_loop
A maintenance process that reads commits, PR descriptions, comments, and changed files to propose updates to agent-readable documentation.

context_freshness_cadence
Configured schedule for refreshing agent context based on repo velocity and risk.

business_logic_memory_doc
Documentation specifically preserving why implementation decisions were made, not just how the code works.

Sharpen existing

Knowledge Reservoirs
OpenWiki gives a concrete repo-level form of a reservoir.

Build-OS
Adds a maintained agent context substrate for code/system editing.

Reflexive Build Substrate
The system can propose updates to its own docs after code changes.

Agent Work Protocol
Before editing, agents should read the context bridge and repo wiki.

source_of_truth doctrine
Docs explain and index truth, but do not become canonical truth by themselves.

Affirm
coding agents need durable context
repo context should be maintained automatically
business logic and rationale matter
docs should stay synchronized with actual changes
agents.md-style context routing is useful
reviewable PRs are safer than silent updates
agent documentation can reduce repeated prompting
Reject / do not over-import
Do not treat generated docs as canonical truth without review.
Do not let the doc agent silently rewrite doctrine.
Do not make OpenWiki itself mandatory infrastructure.
Do not assume git history captures all business rationale.
Do not confuse repo documentation with domain authority.
Do not let stale generated docs override current contracts.
Do not use agent-readable docs as a substitute for tests/evals.
Hard read

This is a Build-OS context substrate source.

The core lesson is not “use OpenWiki.” The lesson is:

Agents need maintained context that lives with the repo, explains both structure and rationale, updates from real change history, and is explicitly loaded through bridge files like agents.md.

Shortest OMNI version:

OMNI needs an agent-readable system wiki: a maintained, reviewable, repo-linked context layer that tells Build-OS agents what the system is, where things live, why decisions were made, and what context must be read before making changes.

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

**Formalizes Knox Review 001 (Priority 4.5/5; depth `implementation_reference`; "route to Build-OS / Knowledge Reservoirs / repo context substrate / agent-readable documentation / coding-agent workflow / Reflexive Build loop"); does not re-derive.** Grounded vs §1 verbatim. Metadata **LIFTED** from the operator block atop Review 001 (`identity_confidence: high_from_operator_metadata`; no caveats on identity). Tier = **full** (Knox depth: rich — 8 numbered keeper-concepts + 8 doctrine candidates + net-new set + reject list; the underlying source is a short vendor product demo, but the strategic read operates at Build-OS-substrate level) → full concept table. Two-axis reality-check: `doctrine` (vs thesis v3 + contracts + post-v3: Build-OS `REV-158` · Agent Work Protocol · Manifest Read Graph · Architecture Memory Control Plane · Knowledge Reservoirs · Reflexive Build Substrate `REV-199` · candidate≠commit · projection≠truth · document-governance/`canon_digest`-can't-originate) + `build` (repo grep `/Users/bloomfrontdesk1/Desktop/main-app` 2026-07-07 over `app lib components scripts supabase repo middleware.ts` + `.cursor/plans`: `AGENTS.md`/`CLAUDE.md` context-bridge **exists**; `04_manifest_read_graph.md` + `00_architecture_artifact_index.md` + System Map = agent-readable **entrypoint/index exists**; `evolution_narrative_*` + ADR + doctrine "why" = **rationale capture exists**; but **no `.github/workflows/`** at all, **no** auto-generation / commit-hash-diff / doc-update-PR tooling, **no** interactive repo-wiki chat agent — i.e. OMNI holds the *maintained agent-readable docs by manual doctrine discipline*, but the *automated maintenance loop* is uncoded). Binds nothing (`GRD-036`/`GRD-044`).

**Headline verdict:** a **Build-OS context-substrate spine-affirmer** landing on the *exact live pain* OMNI names in its own boot rules — "OMNI is becoming too large for any agent or human to safely edit from memory alone." It contributes **zero net-new FRAME** (OMNI already *is* an agent-readable-doctrine system: AGENTS.md boot pointer → Manifest Read Graph → System Map → contracts → doctrine files with rationale; "no authoring from memory" is a HARD STOP in the current handoff) but it (a) **strongly AFFIRMS + names a mechanism** OMNI has only as manual discipline — turning **commit/PR history into a reviewable doc-update loop** (`git_history_to_context_loop`, the one genuinely net-new candidate, wiring directly into Reflexive Build `REV-199`), and (b) restates OMNI's core law at the documentation layer: **the doc agent PROPOSES via reviewable PR; humans/owning-domain COMMIT** ("put up a pull request… you merge the poll requests" [3:23 / 5:38]) = candidate≠commit, projection≠truth. Import into **Build-OS (`REV-158`) + Agent Work Protocol + Knowledge Reservoirs + Reflexive Build Substrate (`REV-199`)** — NOT the care substrate, NOT the v4 thesis spine (supporting example only). Convergent with `000208` (Build-OS lifecycle: `agents.md` shared-context + evidence→structured-intent) and `000216` (self-improving agent loop). Keep the guardrail: **generated docs index/explain truth; they never BECOME canonical truth without gated review** (`canon_digest` rule + document governance).

### A. Concept clusters (full tier)

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **agent-readable documentation as a runtime dependency** (docs built *for agents*, not humans) | Maintained repo/system context is a first-class runtime input to every Build-OS agent run — not a nice-to-have; agents must not rediscover the system each run | Build-OS (`REV-158`) · Agent Work Protocol · Knowledge Reservoirs | "documentation for your codebase built specifically for agents" [0:12] | AFFIRM | present | none | spine (Build-OS) | watch |
| 2 | **agent-readable entrypoint / system index** ("start here before touching anything") | Every agent-editable system needs one canonical index that says what it is, where things live, what not to edit — OMNI already has this stack (AGENTS.md → Read Graph → artifact index → System Map) | Build-OS · Manifest Read Graph (`04`) · `00_architecture_artifact_index` · System Map | "quickstart… the index for the openwiki docs" [1:38]; "first file your coding agent will inspect" [1:56] | AFFIRM | present | none | spine | watch |
| 3 | **docs must capture WHY, not just HOW** (business logic + decision rationale) | Rationale is context debt if uncaptured; agents can read code for *how*, but need *why* (why D5≠D3, why CNS coordinates but doesn't own, why projections aren't authority) — the single most important line for OMNI | Knowledge Reservoirs · doctrine (ADR / `evolution_narrative_*`) · Build-OS · thesis §1/§8 | "not just know how the code works, but also why things were implemented" [2:35] | AFFIRM | present | none | spine | watch |
| 4 | **git-history → context-update loop** (last-commit-hash → merged commits → changed files + PR descriptions + comments → doc-update) | Concrete mechanism to keep agent context fresh from *actual change history*; the operational core of the Reflexive Build Substrate — code/system change becomes a candidate doc update | Reflexive Build Substrate (`REV-199`) · Build-OS · Polaris/proof (commit-hash lineage) · CNS (candidate→commit) | "track the last commit hash… look at every commit… PR descriptions, comments" [3:31-3:41] | PARTIAL | absent | none | spine | watch |
| 5 | **agent-maintained docs must be proposed as reviewable PRs, not silent mutation** | Docs never silently self-rewrite; the agent opens a PR/issue, a human/owning-domain merges — the documentation-layer form of **candidate≠commit / AI proposes, humans commit** | Build-OS · Agent Work Protocol · CNS · thesis §1 (proposes≠commits) | "put up a pull request… automatically updating documentations" [3:23]; "merge the poll requests as they put them up" [5:38] | AFFIRM | absent | none | spine | watch |
| 6 | **context-freshness cadence matched to change velocity + risk** (daily / weekly / hourly, schedule ⟂ agent) | Refresh cadence is workload- and risk-dependent: high-velocity Build-OS docs frequent; stable domain doctrine slow/review-heavy; clinical policy strict-gated — schedule decoupled from the git-diff mechanism | Build-OS · operating_metrics · Knowledge Reservoirs · document governance (staleness) | "run once a day… once a week… every four hours" [3:48-3:58]; "schedule… completely independent of the agent" [4:02] | PARTIAL | partial | none | vocabulary | watch |
| 7 | **`agents.md` / `Claude.md` as explicit context bridge into agent runtime** | Docs are inert unless agents are *routed* to them; a bridge file tells the agent where authoritative docs live, when to read, what overrides local inference, which folders are dangerous — **this is literally OMNI's AGENTS.md/CLAUDE.md boot pointer** | Build-OS · Agent Work Protocol · AGENTS.md/CLAUDE.md boot surface · Manifest Read Graph | "made aware… through an agents.md or claude.md file… how, where, and when to use" [4:56-5:09] | AFFIRM | present | none | spine | watch |
| 8 | **interactive repo/system-wiki agent** (dual mode: scheduled maintenance + ad-hoc Q&A) | Beyond background maintenance, an operator/agent can *query* the system — "what owns this truth? where does D7 extraction live? why split service occurrence? what evals cover this?" | Build-OS · UX-surfaces (operator/dev) · future-watch | "spin up a chat interface… ask questions about my repo" [4:23-4:40] | ABSENT | absent | none | low-authority-watch | watch |
| 9 | **generated docs INDEX/EXPLAIN truth but are NOT canonical truth** (source-of-truth doctrine; review-gated; must not override contracts) | Repo/system docs are a *projection/index* of truth, not authority; generated docs must not silently become doctrine or override current contracts — Knox's reject list = OMNI's `projection≠truth` + `canon_digest`-can't-originate + gated promotion | thesis (`projection≠truth`, `D0THES-DEC-033`) · document governance/taxonomy · Build-OS · Knowledge Reservoirs | "acts as an index for the rest of the… docs" [1:47]; Knox: "docs explain and index truth… do not become canonical" | AFFIRM | present | tension | spine | watch |

**Tension detail (cluster 9):** pole A = **auto-generated docs treated as authority / silently mutating doctrine** (the attractor a doc-generation agent creates — "let the wiki be the source of truth," "let it rewrite doctrine on a schedule"); pole B = OMNI **`projection≠truth` + `canon_digest` files cannot originate binding doctrine + document-governance gated promotion + candidate≠commit**. **Disposition: RESOLVED, no conflict** — the source's own reject list ("do not treat generated docs as canonical," "do not let the doc agent silently rewrite doctrine," "do not let stale generated docs override current contracts") lands exactly on OMNI's posture. Recorded as `tension` (not `direct_conflict`/`unresolved`) because it names an attractor OMNI must actively resist when it builds an OpenWiki-like layer, not a doctrine collision. `GRD-043` satisfied (routed, not buried).

### B. Net-new primitives — dedup vs registry (existing OMNI: CNS/candidate≠commit · `workflow_lane` · `capability_envelope` · `delegated_authority_envelope` · `non_human_actor` · `ai_model_registry` · `trace_lineage` · `context_packet` · `autonomy_level` · `source_authority` · consent-specificity · projection≠truth · per-event-ownership · Knowledge Reservoirs · Reflexive Build Substrate `REV-199` · Manifest Read Graph · Architecture Memory Control Plane · document-governance; + wave-3 minted: `prefix_cache_boundary` · `crypto_agility_policy` · `cryptographic_bill_of_materials` · `security_migration_lifecycle` · `promptware_kill_chain` · `content_authority_class` · `infected_memory_risk` · `ai_gateway` · `virtual_model_endpoint` · `outcome_per_token_metric` · `spec_as_agent_contract` · `data_resilience_policy` · `drift_monitoring_policy` · `context_token_nonpropagation` · `chain_aware_authorization` · `workload_identity` · `tool_invocation_gateway` · `capability_placement_policy` · `agent_eval_bundle` · `deterministic_task_verifier` · `trace_to_issue_to_fix_eval_loop` · `write_access_eval_environment` · `shadow_agent_production` · `agent_overview_document` · `phase_specific_eval_policy`). **Dedup-pending, Opus-main verifies.**

1. `agent_readable_repo_wiki` — a maintained documentation layer designed for coding/build agents (repo map · architecture · file refs · business logic · decision rationale). — **EXISTS-AS: already-exists-as OMNI's agent-readable doctrine substrate** (AGENTS.md boot pointer + `04_manifest_read_graph` + `00_architecture_artifact_index` + System Map + `00_doctrine_manifest` + domain contracts); **also strongly overlaps wave-3 `agent_overview_document`.** Net-new NAME only — reconcile as the *repo/system-wiki framing* of the existing substrate; do NOT re-mint a god-doc (`GRD-026`/`GRD-035`).
2. `agent_context_bridge_file` — an `agents.md`-style file instructing agents where authoritative docs live and when/how to use them, what overrides local inference, which folders are dangerous. — **EXISTS-AS: already-exists-as OMNI's `AGENTS.md`/`CLAUDE.md` boot surface + Read-Graph route loading** (this is literally implemented and enforced today). DO NOT re-mint; reconcile with `agent_overview_document`.
3. `git_history_to_context_loop` — a maintenance process that reads commit-hash-delta + changed files + PR descriptions + comments to *propose* updates to agent-readable docs. — **EXISTS-AS: net-new (strongest genuine content); the operational mechanism of Reflexive Build Substrate `REV-199`, which currently has the intent but no named commit→doc-candidate loop.** Mint candidate — Opus-main verifies vs `REV-199` + Polaris commit-hash lineage. (OMNI's manual analog: checkpoint-handoff repointing discipline.)
4. `context_freshness_cadence` — a configured, risk/velocity-tiered schedule for refreshing agent context (frequent for Build-OS docs; slow/gated for clinical policy). — **EXISTS-AS: net-new NAME; sharpens checkpoint-repointing discipline + document-governance staleness + partial overlap with wave-3 `drift_monitoring_policy`.** Sharpen, don't re-mint.
5. `business_logic_memory_doc` (a.k.a. `decision_rationale_capture`) — documentation preserving *why* decisions were made, not just *how* code works. — **EXISTS-AS: already-exists-as `evolution_narrative_*` + ADRs + doctrine "why" + Knowledge Reservoirs.** Net-new NAME only — sharpen the existing reservoir concept; don't re-mint.

*(Knox's "sharpen existing" set — Knowledge Reservoirs (concrete repo-level form), Build-OS (maintained agent-context substrate for editing), Reflexive Build Substrate (system proposes updates to its own docs), Agent Work Protocol (read the bridge + wiki before editing), source_of_truth/`projection≠truth` (docs index but aren't canonical) — all EXISTS-AS prior; sharpened here, not minted.)*

### C. Reread flags
- **Metadata is PRESENT and LIFTED** (operator block atop Review 001) → `identity_confidence: high_from_operator_metadata`; no reread needed for identity (LangChain / Brace Sproul / OpenWiki / Jul 1 2026 / URL confirmed).
- **Transcript artifacts (auto-caption noise), not substance:** `.mmd`/`quickstart.mmd`/`agents.mmd`/`claw.mmd` = auto-caption garble of `.md` / `agents.md` / `Claude.md`; "langu API key" = **LangSmith**; "ran a net" = ran `init`; "GLM 5.2" = a model pick; "poll requests" = pull requests. Read through to intent.
- **Vendor-demo posture (`GRD-039`):** this is LangChain marketing its own OpenWiki / Deep Agents / LangSmith stack. **Do-not-over-import (Knox):** don't treat generated docs as canonical without review; don't let a doc agent silently rewrite doctrine; don't make OpenWiki-the-tool mandatory infrastructure; don't assume git history captures all rationale; don't confuse repo docs with domain authority; don't let stale docs override contracts; don't use agent docs as a substitute for tests/evals. The keeper is the *frame* (maintained agent-readable context), not the product.
- **`build` column nuance:** OMNI **has** the agent-readable docs + bridge + index + rationale capture (by manual doctrine discipline — `present`) but has **no automated maintenance loop** (no `.github/workflows/`, no commit-diff→doc-PR agent, no interactive wiki chat — `absent`). So the net-new leverage is the *automation/reflexive loop* (cluster 4/5), not the docs themselves.
- **Self-referential:** OMNI's Evidence Plane / this very EVRUN pipeline *is* an "evidence → structured context" instance; and the current handoff's "no authoring from memory" HARD STOP is the exact pain this source addresses — cross-link when folding, don't double-count vs `000208` cluster 8 (evidence→structured-intent) or `000216` (self-improving loop).

### D. One-line hard read + strongest OMNI line
**Hard read:** *A Build-OS context-substrate affirmer that names the mechanism OMNI has only as manual discipline — agents need maintained, repo-linked context that explains structure AND rationale, refreshes from real commit/PR history via reviewable PRs, and is loaded through an explicit bridge file (agents.md) — zero net-new frame (OMNI already IS an agent-readable-doctrine system), one genuine net-new candidate (`git_history_to_context_loop` → Reflexive Build `REV-199`); import into Build-OS + Agent Work Protocol + Knowledge Reservoirs, keep `projection≠truth` / gated-promotion, never let generated docs become canonical.*
**Strongest OMNI line (verbatim-anchored):** *"through looking at git commits… open wiki can generate documentation documenting the business logic and decisions behind different changes so that your agent can have the best context" [2:45-2:57]* → **OMNI's Reflexive Build Substrate should turn every merged change (commit + PR + comment) into a *candidate* update to the agent-readable system wiki — capturing the *why*, not just the *how* — proposed as a reviewable PR the owning domain commits, so future Build-OS agents boot to current context and never author from memory.**

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Build-OS (REV-158) — MAJOR (agent-readable system wiki · agent-readable entrypoint/index · why-not-just-how rationale capture · context bridge · dual-mode maintenance+Q&A) · Reflexive Build Substrate (REV-199) — MAJOR (git-history→doc-update-candidate loop = the named mechanism) · Agent Work Protocol — MAJOR (read bridge+wiki before editing · no-authoring-from-memory · reviewable doc diffs) · Knowledge Reservoirs — medium (repo-level reservoir · business-logic/decision-rationale memory) · document governance / projection≠truth — medium (docs index but do not become canonical; gated promotion) · UX-surfaces — minor (interactive repo/system-wiki Q&A, future-watch) · §B — minor (model-provider-agnostic tooling echoes model-pluggable-at-substrate)` · promotion: `watch` (Build-OS/Reflexive-Build/Agent-Work-Protocol import-vocabulary + 1 genuine net-new candidate `git_history_to_context_loop`; 0 net-new FRAME; 4 of 5 Knox candidates EXIST-AS prior — `agent_readable_repo_wiki`/`agent_context_bridge_file` reconcile vs `agent_overview_document` + AGENTS.md; promotion gated `GRD-036`)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — §0/§0.1 metadata **LIFTED verbatim** from the operator metadata block atop Review 001 (`identity_confidence: high_from_operator_metadata`; LangChain / Brace Sproul / OpenWiki / Jul 1 2026 / URL); slug proposed `openwiki-agent-readable-repo-docs` (rename deferred to Opus-main); §0.5 ticked; §3 **Review 003 written** (Opus subagent; **full tier**, 9 concept clusters + two-axis reality-check + 1 routed tension [cluster 9, resolved: generated-docs-as-authority attractor vs projection≠truth] + 5 net-new candidates [1 genuine — `git_history_to_context_loop`; 4 EXIST-AS prior; dedup-pending] + reread flags + hard read); §4 pointers filled; status `raw_dropped` → `analyzed`. Cross-source fold (registry/coverage/anchor) performed by **Opus-main** (not this subagent). Convergent with `000208` (Build-OS lifecycle · `agents.md` shared context · evidence→structured-intent) and `000216` (self-improving agent loop); complements `000215` (agent eval pipeline). Binds nothing (`GRD-036`/`GRD-044`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

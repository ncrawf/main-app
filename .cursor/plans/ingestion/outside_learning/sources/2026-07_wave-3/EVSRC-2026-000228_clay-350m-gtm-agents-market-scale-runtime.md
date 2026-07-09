# EVSRC-2026-000228 — How Clay runs 350 million GTM agents a month | Interrupt 26

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000228_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000228`  ·  filename: `EVSRC-2026-000228_clay-350m-gtm-agents-market-scale-runtime.md` *(proposed slug; file not renamed)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=LmQtSORYPfw`  ·  source_title: `How Clay runs 350 million GTM agents a month | Interrupt 26`
- channel_or_org: `LangChain`  ·  speaker: `Jeff Barg, Head of AI at Clay`  ·  published_at: `Jun 24, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + description + chapter list + pasted transcript`
- content_type: `go-to-market agents / Clay / production-scale agent execution / GTM infrastructure / market-scale agent workflows / throughput / durable workflow execution / caching / cost control / online and offline evals / agent quality / GTM intelligence / Audiences / agent memory`  ·  source_reliability_context: `LangChain Interrupt 2026 production case study from Clay's Head of AI. Strong practical source for running agent fleets at extreme scale, especially infrastructure reliability, throughput under rate limits, caching/cost discipline, quality/eval loops, and context/memory for market-wide agent workflows. Use as production operations and GTM-agent infrastructure evidence, not as general healthcare or clinical doctrine.` (`practitioner`)  ·  topic_tags_light: `[GTM_agents, Claygent, agent_fleet, durable_workflow_execution, adaptive_throttling, caching_strategy, online_evals, agent_memory, Audiences, go_to_market_alpha]`  ·  identity_confidence: `high_from_operator_metadata`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Jeff Barg` · role_in_source: `speaker / presenter` · affiliation_at_publication: `Head of AI, Clay` · speaker_type: `operator (AI/eng leader at a GTM-data vendor)` · authority_context: `Runs Clay's production agent platform — 350M+ GTM agents/month over 40M+ companies / 900M contacts; first-hand production-scale agent operations` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `LangChain (Interrupt 2026 conference talk)`  ·  interviewer / moderator / host: `n/a (solo conference talk)`
- event_context: `LangChain Interrupt 2026 conference; production-scale agent-operations case study`  ·  perspective / conflict notes: `Vendor/practitioner perspective — Clay sells GTM agent infrastructure and references LangGraph/LangSmith (LangChain's own products) favorably; treat tool endorsements as vendor-adjacent, but the operational lessons (durable execution, throughput, cost, quality) are grounded production evidence.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(deferred to Opus-main fold — subagent does not edit registry)* · [ ] update coverage matrix *(deferred to Opus-main fold)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
What Clay does and why GTM is an agent problem
0:04
>> Hi, everyone. I'm Jeff Barg. I'm the head of AI at Clay. Today I'm going to talk about
0:11
scaling go-to-market agents. Not just running a single agent productively, but what happens
0:16
when you need to run agents across your entire addressable market at production scale. First,
0:22
I wanted to give some brief background on Clay. We like to think of Clay as the creative
0:26
tool for growth.
0:28
So put simply, we help you build lists of companies and people from our go-to-market
0:33
data sets.
0:34
We help you enrich those lists with 150-plus data integration providers and AI agents,
0:40
and we help you orchestrate those lists into things like CRM enrichment, outbound campaigns,
0:46
and more.
0:48
We do this at quite high scale, and so we run over 350 million go-to-market agents every
0:54
month.
350 million agents a month: Clay's scale
0:55
We have a proprietary data set of over 40 million companies
0:59
and 900 million contacts that our agents research over.
1:03
And so you can think of Clay as go-to-market infrastructure
1:06
for running these workflows.
Why no creative advantage lasts forever
1:10
So why is go-to-market a hard problem?
1:12
And why are we running so many agents?
1:15
Well, we think in go-to-market that no creative advantage
1:17
lasts forever.
1:19
And you can think about this from the lens of cold email.
1:22
Cold email deliverability rates
1:24
have been going down for the past couple of years, for many reasons.
1:27
But one of them is just the floor has continued to rise.
1:30
Ever since GPT-4, you can write human-sounding emails.
1:34
And you can think about this from the lens of your own inbox,
1:37
where you're probably drowning in a bunch of outbound emails
1:40
that may or may not be targeted for the things
1:42
that you care about.
How to actually win: the fastest to iterate wins
1:44
So how do you actually win in this environment?
1:47
And we believe that the fastest to iterate wins.
1:51
So you actually need to continuously evolve
1:54
and build new outbound strategies and plays
1:57
to be able to actually do better than your competitors.
Go-to-market alpha: the three levels
2:00
And we call this go-to-market alpha.
2:02
So similar to in finance, where alpha is outperformance
2:05
against the market, we believe there's a similar concept
2:07
in go-to-market.
2:08
So better audiences, better timing, better signals,
2:12
better positioning than your competitors
2:14
can yield actually great results.
2:18
So how do you actually get to that go-to-market alpha?
2:20
We believe there are three levels.
2:22
So level one is individual AI access and literacy building.
2:26
So deploying tools like ChatGPT or Claude to your sellers
2:30
for things like call analysis or outbound copy writing.
2:34
That's great.
2:36
But level two is actually centralizing that
2:38
and deploying it across your sellers.
2:40
So using Claude skills at the workspace level
2:44
or after every call generating post-call notes.
2:48
Level three is creating advantages
2:51
that your competitors can't copy.
2:53
So think about — we work with a lot of AI coding companies,
2:57
and many of them build outbound campaigns
2:59
where they're looking for people —
3:01
they're looking for companies that are hiring
3:03
for a head of engineering and have a lot of engineers
3:06
that have starred their GitHub repo.
3:08
So these are plays that are not transferable
3:10
to their competitors and they're unique to them.
3:12
So reaching that go-to-market alpha.
Why most teams stay stuck at level one
3:16
We find that many teams get stuck here at level one.
3:18
So their sellers might be using tools like Claude
3:21
to analyze call transcripts or write outbound emails.
3:25
But it's fairly low leverage.
3:27
Because you can write the best outbound email.
3:30
But if someone doesn't want to buy your product or service,
3:33
a creative email isn't going to actually change that.
3:36
Much higher leverage is actually fixing targeting.
3:39
So finding customers who already want
3:41
to buy your product or service — you can actually
3:44
get much more meaningful results.
The loop Clay's best customers run
3:47
So our best customers really do this using a loop like this.
3:52
They'll scan their entire addressable market,
3:56
layer on signals like news articles, fundraising announcements,
3:59
or bespoke data points like that GitHub stars metric
4:03
that I talked about, they'll use agents
4:06
to score those accounts to find out
4:08
when is the right time to reach out to them
4:10
and act at that time.
4:12
Finally, our customers will learn from those outcomes
4:15
and iterate on those plays over time.
Why this looks like an engineering challenge
4:18
So this looks a lot like an engineering challenge
4:21
because you need to run agents
4:22
across your entire addressable market.
4:24
And so that's why many of our customers use tools like Clay
4:27
to orchestrate this.
4:29
And at Clay, we have our agent Claygent,
4:31
which does a lot of these workflows.
4:33
So it will do things like company research
4:37
in order to find out: is this account a good company
4:40
to reach out to at this time?
4:42
We run this over 350 million times a month.
4:44
It processes trillions of tokens every week.
Four challenges at production scale
4:47
And I'm going to talk about four challenges
4:50
that we've encountered and lessons that we've learned
4:53
on deploying this agent at scale.
4:55
The first challenge is on infrastructure,
4:57
where we actually deploy this in a reliable way.
4:59
Second is on rate limits and throughput.
5:02
So being able to maximize our inference capacity
5:04
without negative impact.
5:08
Third is on cost.
5:09
As much as we'd like them to be,
5:10
trillions of tokens are not free.
5:13
And fourth is on quality.
5:15
If our agents don't yield meaningful results,
5:18
then none of the other points really matter here.
5:21
So we need to make sure that our agents are high quality.
Challenge 1: infrastructure and durable workflow execution
5:25
First challenge: infrastructure.
5:27
If you're a prolific client,
5:29
or probably like many of the agents
5:30
that you all are building today here,
5:33
most of our agents are actually just
5:36
spending their time waiting.
5:37
So they're waiting on, in our case, browsers or APIs
5:41
or inference.
5:43
So we used to run Claygent on Lambda,
5:46
and Lambda was prohibitively expensive,
5:48
because Lambda charges for wall time.
5:50
So we moved that to ECS.
5:52
But with ECS — we traded cost for reliability.
5:57
So we needed to re-architect our system
6:00
to be able to recover from things like random host
6:04
failure or things like that.
6:06
So the right architecture looks actually much more
6:08
like a durable workflow execution.
6:10
So using things like queues, checkpointing your agent
6:14
at periodic steps.
6:15
So using a tool like LangGraph or LangSmith deployments
6:18
would help here.
Challenge 2: rate limits and the TCP/IP approach to throughput
6:21
The second challenge that we've run into is rate limits.
6:24
We have a lot of dedicated inference capacity at Clay,
6:27
but our workloads are fairly spiky.
6:28
And so we need to be able to maximize the inference
6:30
that we have in order to productively run our agents.
6:35
There's so much effort at the inference layer
6:37
to make sure that GPUs are always hot.
6:39
And a lot of that gets lost at the application layer
6:42
unless you're actually maximizing
6:44
the inference that's available to you.
6:46
So we've actually built a system with back pressure
6:48
to be able to adaptively throttle against our downstream
6:51
inference providers.
6:52
And it looks a lot like the TCP/IP congestion algorithm,
6:55
where we basically will send as much traffic as we can.
6:58
And as soon as we run into rate limit issues,
7:00
we'll progressively dial back that traffic.
7:03
And we've found from some of the experiments
7:05
that we've run internally that this can yield four to ten times
7:08
as much throughput as a more naive system.
7:11
So it's actually quite meaningful, especially at Clay's scale.
7:16
We also had to build fairness across our customers
7:19
because we don't want a single customer who's
7:21
running millions of agents across their market
7:23
to crowd out the customer who just signed up for Clay
7:26
and is running their first 10 agents.
Challenge 3: cost and caching strategies
7:30
The third challenge that we've had to deal with is cost.
7:33
And cost is meaningful at our scale.
7:36
We've built our own agent harness at Clay
7:38
for a variety of reasons.
7:40
But one of the learnings that we've
7:42
found from building our own agent harness
7:44
is that caching strategies have a really meaningful impact
7:48
on the cost of your agents.
7:51
And you can actually build agents around those caching
7:54
strategies to make sure that you're maximizing that.
7:57
For providers like Anthropic, this
7:58
can yield up to 70% cost savings — quite high.
8:03
The second strategy on cost that we found
8:05
is actually bounding retries and tool calls
8:08
before they sprawl.
8:08
So you have to do this in conjunction with your evals.
8:12
But we found that many times, if you force an agent to return
8:15
after a certain number of steps or a certain amount of research,
8:19
it will actually yield better results
8:21
than if you were to let it run to completion.
8:23
And so again, you have to do this in conjunction
8:25
with your evals.
8:26
But use-case specific, this can be quite effective.
8:29
The third point is actually measuring costs
8:31
tied to quality and outcomes,
8:33
which leads to our fourth challenge on quality.
Challenge 4: quality, context, and evals
8:36
We spend a lot of time on Claygent quality,
8:38
and we think it starts with great context.
8:42
So for us, we give Claygent access to great web data
8:46
and proprietary go-to-market data sets.
8:48
We have an entire team dedicated to making sure
8:50
that data set is accessible to agents in a great way.
8:53
We also tune our agent harness
8:55
specifically for go-to-market use cases.
8:57
So we have offline evals, but we also have online evals
9:00
to make sure that our harness is really targeted
9:03
for the things that people are actually trying to do
9:05
in our product.
9:06
And this is again where tools like LangSmith
9:07
are really helpful to understand
9:10
what you're optimizing for.
9:15
One additional note on quality is that quality
9:17
is also a product problem.
9:19
So we built an agent builder in Clay
9:21
where people can actually test and iterate on their agents
9:24
before they run it at market scale.
9:26
And by giving users these kinds of iteration tools,
9:30
they actually have way more confidence
9:31
to be able to run their agents at market scale.
9:34
And yeah, we found a lot of success with this.
What's next: Audiences and agent memory
9:39
Okay, these are the four challenges
9:41
that we've run into: infrastructure, maximizing
9:43
throughput, cost, and quality
9:46
for running these agents at production scale.
9:49
But what's next for Clay and what's next for Clay's agents?
9:53
Piggybacking off what I was talking about on quality and context,
9:57
we really think that agents need great context to do great work.
10:01
And so we spent the last six months or so building a product
10:04
that we call Audiences.
10:06
Audiences lets you aggregate all of your go-to-market data
10:09
into one place.
10:09
So from tools like Snowflake, Salesforce, Gong, and other call
10:13
recordings, you're able to aggregate all of your data
10:16
in one place.
10:17
Layer on third-party signals like fundraising announcements,
10:21
news articles, and more, and give that to Clay agents to be able to run outbound campaigns.
10:29
Audiences is also the foundation for our agent memory.
10:35
And we're using this to build what we call go-to-market intelligence, where agents are
10:39
actually able to recommend plays based on the things that they've tried before and the
10:44
context that they have.
10:46
And so they're able to actually complete this flywheel of improving over time based on the
10:51
things that have actually worked before.
10:54
This comes with all sorts of additional infrastructure challenges that we have — things like virtual
11:00
file systems that are able to actually reason over the context that we have in Audiences,
11:04
things like sandboxes.
11:06
And if you're interested in these challenges, I would love to talk to you after this.
Recap
11:12
To recap, a couple of things that I've talked about.
11:16
One, go-to-market is fundamentally
11:18
an engineering challenge.
11:20
You really want to optimize your agents
11:21
for infrastructure reliability, throughput, cost,
11:24
and quality to be able to get meaningful results.
11:28
You need to actually run your agents
11:29
across an entire market to get great go-to-market alpha.
11:33
And finally, observability is a feedback loop
11:35
that actually makes these agents better over time.
11:40
And with that, thank you.
11:42
Have a great rest of your day.
11:43
(audience applauding)
11:46
[BLANK_AUDIO]

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
source_url: https://www.youtube.com/watch?v=LmQtSORYPfw
source_title: How Clay runs 350 million GTM agents a month | Interrupt 26
channel_or_org: LangChain
speaker: Jeff Barg, Head of AI at Clay
published_at: Jun 24, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + description + chapter list + pasted transcript
content_type: go-to-market agents / Clay / production-scale agent execution / GTM infrastructure / market-scale agent workflows / throughput / durable workflow execution / caching / cost control / online and offline evals / agent quality / GTM intelligence / Audiences / agent memory
source_reliability_context: LangChain Interrupt 2026 production case study from Clay’s Head of AI. Strong practical source for running agent fleets at extreme scale, especially infrastructure reliability, throughput under rate limits, caching/cost discipline, quality/eval loops, and context/memory for market-wide agent workflows. Use as production operations and GTM-agent infrastructure evidence, not as general healthcare or clinical doctrine.
priority: 4.75/5
depth: production_scale_case_study
recommended_status: route to Growth/Marketing Workspace, AI Substrate, Agent Runtime, operating_metrics, Build-OS, Agent Work Protocol, Intelligence Foundry, context/memory doctrine, and runtime economics.

Topic tags:
[LangChain, Clay, Jeff_Barg, GTM_agents, Claygent, go_to_market_alpha, production_agents, agent_fleet, market_scale_agents, 350_million_agents_per_month, durable_workflow_execution, queues, checkpointing, ECS, Lambda, rate_limits, adaptive_throttling, TCP_IP_congestion_control, inference_capacity, customer_fairness, caching_strategy, 70_percent_cost_savings, bounded_retries, bounded_tool_calls, offline_evals, online_evals, agent_builder, Audiences, GTM_intelligence, agent_memory, virtual_file_systems, sandboxes, operating_metrics, AI_Substrate, Growth_Workspace]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4.75/5
Depth: production-scale case study
Recommended status: route to AI Substrate / Growth Workspace / operating_metrics / runtime economics / Intelligence Foundry / Agent Work Protocol.

Core takeaway

This source is about what happens when agents stop being a demo and become market-scale infrastructure.

Clay is not describing one GTM assistant. They run more than 350 million go-to-market agents per month, over a proprietary dataset of 40M+ companies and 900M contacts.

The keeper:

At production scale, agent quality is only one of four hard problems. The others are durable execution, throughput, and cost.

OMNI translation:

Any OMNI agent lane that scales across a whole population — patients, leads, accounts, documents, claims, campaigns, reminders, refills, or provider tasks — becomes an infrastructure problem, not just a prompting problem.

Key concepts to preserve
1. GTM is an agent problem because advantage decays

Clay’s framing is that no creative advantage in go-to-market lasts forever. GPT-4 raised the floor for human-sounding outbound, so better copy alone is not durable advantage.

Their answer is speed of iteration: continuously evolve outbound strategies and plays faster than competitors.

OMNI keeper:

In competitive workflows, durable advantage comes from faster learning loops, not one clever output.

For OMNI Growth/Marketing:

better audience selection
better timing
better signals
better offer/context
faster campaign iteration
outcome-fed playbooks

Doctrine candidate:

In agentic growth systems, iteration speed becomes the advantage.

2. “GTM alpha” is a useful concept

Clay defines “go-to-market alpha” by analogy to finance: outperformance versus the market through better audiences, timing, signals, and positioning.

They describe three levels:

individual AI literacy/access
centralized AI across sellers
unique, non-copyable GTM advantages based on proprietary signals and plays.

OMNI keeper:

This maps cleanly to OMNI business ops:

generic AI use → centralized workflow AI → proprietary operating alpha

Potential OMNI primitive:

operator_alpha

The advantage created when an operator uses its own data, workflows, timing, and outcome history to run plays competitors cannot easily copy.

3. Most teams get stuck at low-leverage AI use

Clay says many teams remain at level one: sellers use Claude or ChatGPT to analyze calls or write emails. That is low leverage because the best outbound email will not matter if the person does not want to buy. Higher leverage is targeting people who already want the product or service.

OMNI translation:

For OMNI, do not confuse surface polish with operating leverage.

Low leverage:

prettier messages
generic outreach copy
one-off summaries
“AI generated” content

Higher leverage:

right patient/account/person
right timing
right need state
right signal
right workflow trigger
right follow-up

Doctrine candidate:

Targeting and timing usually beat copy quality.

4. Best customers run a scan → score → act → learn loop

Clay’s best customers scan their entire addressable market, layer on signals like news/funding/bespoke data, use agents to score accounts, act at the right time, then learn from outcomes and iterate plays over time.

OMNI keeper:

This is the core flywheel:

market/patient/account universe → signals → scoring → action → outcome → play iteration

For OMNI:

patient reactivation
membership upsell
GLP-1 refill/dose escalation
lead conversion
lapsed patient outreach
service-line targeting
provider workload triage
payer/billing follow-up

Doctrine candidate:

Scaled agent workflows should close the loop from signal to action to outcome.

5. GTM at scale becomes an engineering challenge

Clay explicitly says this looks like an engineering challenge because agents must run across the entire addressable market. Claygent performs workflows like company research and account timing decisions, and runs over 350M times per month while processing trillions of tokens weekly.

OMNI keeper:

Population-scale workflows are not “AI features.”

They need:

queues
retry policy
checkpoints
fairness
rate-limit handling
cost controls
evals
observability
outcome tracking

Doctrine candidate:

Market-scale agents are infrastructure, not campaigns.

The four production challenges
1. Infrastructure reliability and durable workflow execution

Clay says most agents spend time waiting on browsers, APIs, or inference. Lambda became too expensive because it charges wall time; ECS reduced cost but introduced reliability concerns. The right architecture looks more like durable workflow execution with queues and checkpointing.

OMNI translation:

Long-running/wait-heavy agents need durable execution.

For OMNI:

don’t lose a refill workflow because one API failed
don’t restart a D7 extraction from scratch if one page/tool fails
don’t duplicate patient outreach because the run crashed
don’t lose billing reconciliation state during downstream latency

Doctrine candidate:

Wait-heavy agents need durable workflow execution, not simple request/response hosting.

2. Rate limits and throughput

Clay’s workloads are spiky, so they built backpressure and adaptive throttling against downstream inference providers. They compare it to TCP/IP congestion control: send as much as possible, then progressively dial back when rate-limit issues appear. Internal experiments produced 4–10x throughput versus a naive system.

They also built customer fairness so one large customer running millions of agents does not crowd out a new customer running ten agents.

OMNI keeper:

Throughput is not just “buy more tokens.”

The runtime needs:

adaptive throttling
backpressure
queue priority
fairness
tenant isolation
retry budgets
provider capacity awareness

Doctrine candidate:

Agent throughput should be governed like network congestion, with fairness and backpressure.

3. Cost and caching

Clay says trillions of tokens are not free. Their caching strategies can yield up to 70% cost savings for providers like Anthropic, and agents can be built around caching strategies.

They also bound retries and tool calls before they sprawl. In some use cases, forcing the agent to return after a certain number of steps or research can yield better results than letting it run to completion, but this must be done with evals.

OMNI keeper:

Cost control is architecture and behavior control.

For OMNI:

prefix/context caching
shared context packets
bounded retries
bounded tool calls
stop rules by lane
eval-gated limits
cost per successful action
cost per accepted output

Doctrine candidate:

Agent cost should be optimized through caching, bounded execution, and outcome-linked evals.

4. Quality, context, and evals

Clay says quality starts with great context: web data, proprietary GTM datasets, and a team dedicated to making the data accessible to agents. Their harness is tuned for GTM use cases, with both offline and online evals.

They also say quality is a product problem: Clay built an agent builder so users can test and iterate before running at market scale.

OMNI translation:

Quality is not only model quality.

Quality depends on:

data/context quality
harness tuning
offline evals
online evals
user iteration tools
confidence before scale
outcome measurement

Doctrine candidate:

Agent quality is a product-system property, not a model property.

Audiences and agent memory

Clay’s next step is Audiences: a product that aggregates GTM data from Snowflake, Salesforce, Gong/call recordings, third-party signals, news, fundraising, and more, then gives that context to Clay agents.

Audiences becomes the foundation for agent memory and “go-to-market intelligence,” where agents recommend plays based on what they have tried before and what worked.

They also name infrastructure implications: virtual file systems to reason over Audiences context and sandboxes.

OMNI keeper:

This is a very strong Intelligence Foundry pattern:

data aggregation → context substrate → agent memory → play recommendation → outcome loop

For OMNI:

patient/service audience context
commercial/clinical segmentation
prior campaign outcomes
patient journey signals
operator-specific play memory
recommendation of next best action/play

Doctrine candidate:

Agent memory becomes valuable when it can recommend future plays from prior outcomes.

OMNI translation

This source gives OMNI a production-scale template for growth and population workflows:

universe → signals → context aggregation → agent scoring/research → action → outcome → memory → improved play

But it also gives the runtime warning:

At 350M agent runs/month, the bottlenecks are queues, retries, rate limits, caching, evals, and data accessibility.

For OMNI, the lesson is not “do Clay for healthcare.” The lesson is:

Population-scale agent work requires an operating substrate before it requires clever prompts.

Likely OMNI landing zones

Growth / Marketing Workspace

audience construction
signal layering
patient/account scoring
timing detection
outreach play recommendation
outcome-driven iteration

AI Substrate

durable workflow execution
adaptive throttling
inference capacity management
provider backpressure
caching-aware harness design

operating_metrics

cost per run
cost per successful action
throughput per provider
retry/tool-call counts
queue delay
rate-limit hit rate
outcome lift by play
cache savings
eval quality by lane

Agent Work Protocol

bounded retries
bounded tool calls
checkpoint requirements
online/offline eval requirements
no market-scale execution before test/iteration

Intelligence Foundry

signals/outcomes become play memory
agents recommend what to try next
outcome-fed GTM intelligence
operator-specific alpha

Knowledge Reservoirs

Audiences-like context substrate
proprietary signal aggregation
virtual file systems over business context
play memory and prior outcome memory
Doctrine candidates
In agentic growth systems, iteration speed becomes the advantage.
Targeting and timing usually beat copy quality.
Scaled agent workflows should close the loop from signal to action to outcome.
Market-scale agents are infrastructure, not campaigns.
Wait-heavy agents need durable workflow execution, not simple request/response hosting.
Agent throughput should be governed like network congestion, with fairness and backpressure.
Agent cost should be optimized through caching, bounded execution, and outcome-linked evals.
Agent quality is a product-system property, not a model property.
Agent memory becomes valuable when it can recommend future plays from prior outcomes.
Population-scale agent work requires an operating substrate before it requires clever prompts.
Net-new / sharpen / affirm
Net-new candidates

operator_alpha
Operator-specific advantage created from proprietary audiences, timing, signals, outcomes, and plays that competitors cannot easily copy.

market_scale_agent_runtime
Runtime architecture for running agents across an entire population/market with queues, checkpoints, throttling, fairness, caching, and evals.

adaptive_inference_backpressure
TCP/IP-like throttling layer that maximizes provider throughput while reacting to rate limits and protecting downstream systems.

audience_context_substrate
Aggregated context layer combining first-party data, third-party signals, CRM, calls, and prior outcomes for agent-driven targeting/play selection.

play_memory
Memory of prior plays, outcomes, and conditions that lets agents recommend future strategies.

Sharpen existing

runtime_economics
Adds caching strategy, bounded retries/tool calls, cost tied to quality/outcomes.

Knowledge Reservoirs
Audiences is a concrete GTM version of a context reservoir.

Intelligence Foundry
Outcome-fed play recommendation is a practical Foundry loop.

Agent Work Protocol
Adds pre-scale testing, bounded execution, and online/offline eval requirements.

operating_metrics
Adds throughput, fairness, rate-limit hit rate, cache savings, cost per successful action.

Affirm
production agents are infrastructure problems
context quality is core to agent quality
online and offline evals both matter
observability improves agents over time
high-volume agents need caching-aware harnesses
scale requires fairness across users/tenants
user-facing builders increase confidence before scale
agent memory should be outcome-linked
Reject / do not over-import
Do not import Clay’s GTM tactics directly into clinical workflows.
Do not optimize for outreach volume without consent, compliance, and user trust.
Do not let agent memory recommend plays without outcome/eval grounding.
Do not allow one tenant/customer/workflow to starve others.
Do not assume market-scale execution is safe just because a test run worked.
Do not bound retries/tool calls without measuring quality impact.
Do not treat cached context as safe across tenant/patient boundaries.
Do not confuse GTM alpha with clinical authority.
Hard read

This is a production-scale agent operations source.

The keeper:

Once agents run across an entire market, the problem becomes durable execution, throughput, cost, quality, context, and outcome-fed memory.

Shortest OMNI version:

OMNI’s population-scale workflows need Clay-like runtime discipline: durable queues/checkpoints, adaptive throttling, fairness, caching-aware execution, bounded retries, online/offline evals, and an Audiences-like context layer that turns prior outcomes into future play recommendations.

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

**Tier: `full_semantic`** (long production-scale case study; Knox priority 4.75/5; 10 concept clusters → full table). **Layer: `analysis_nonbinding` — binds nothing (`GRD-036`/`GRD-044`).**

**HEADLINE VERDICT.** This is a **production-operations AFFIRM source with one genuinely net-new runtime dimension.** Clay's talk is the market-scale operations instance of the wave-3 spine already assembled by 201 (hill-climbing machine / evals-as-assets), 210/214 (agent-fleets-are-coordination-infrastructure, not features), 204/206 (runtime + model economics), and 215/216 (eval + reflexive-memory loop). It re-tells that story through a **Growth/GTM population-scale lens** and confirms, from a real 350M-agents/month fleet, that *once an agent lane runs across a whole population the problem stops being prompting and becomes an operating substrate: durable execution + throughput + cost + quality + context/memory.* **OMNI already holds this as doctrine (§B AI-substrate, CNS, Build-OS, Knowledge-Reservoirs, Sense+Act loops) — the gap is BUILD** (grep: no throttle/backpressure/rate-limit/fairness/agent-memory/GTM runtime; only a *partial* durable-execution echo in `lib/jobs/*` + `lib/ai/enqueueChartAiReview→processChartAiReviewJob` with retry, and a *partial* eval echo in `scripts/test-*.ts` + `lib/disclosure-policy/evaluator.ts`). **The one leg no prior wave-3 source named** = the **throughput/fairness/backpressure runtime dimension** (`adaptive_inference_backpressure` + `tenant_fairness_scheduler`) — the operational-scale sibling of 204's memory-cost dimension and 206's model-routing dimension — plus **`play_memory`**, which extends Intelligence Foundry / REV-199 into the growth/business-ops lane. Net: **~2–3 genuine net-new (dedup-pending), the rest are NAMES/sharpens over the existing registry.** Nothing here is clinical doctrine; the loudest hard-read is the guardrail — **do not import GTM outreach tactics into care without consent/compliance/care-first firewalls.**

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [ts]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Creative advantage decays → **iteration speed is the advantage** | In competitive OMNI growth/ops lanes, durable edge = faster outcome-fed learning loops, not one clever output; GPT-4 raised the copy floor | §B · Build-OS reflexive loop (REV-199) · Growth/BIZOPS · Intelligence Foundry · CNS Sense+Act | "no creative advantage lasts forever" / "the fastest to iterate wins" [1:17, 1:47] | AFFIRM | absent | none | vocabulary | watch |
| 2 | **GTM alpha** = operator-specific, non-copyable advantage (3 levels: individual AI → centralized → proprietary plays) | Maps to OMNI `operator-alpha` firewall: generic AI → centralized workflow AI → proprietary operating alpha from own data/timing/signals/outcomes; alpha stays with the operator | §6.8/§6.10 operator-neutrality · alpha-firewall · data-value economy (REV-201) · §B · Growth/BIZOPS | "advantages that your competitors can't copy" [2:51] | AFFIRM | absent | none | spine | watch |
| 3 | Most teams stuck low-leverage → **targeting/timing beats copy** | Right patient/account + right timing + right need-state > prettier messages; = OMNI mantra "right context/actor/patient/moment/authority" | thesis §1 mantra · Growth/BIZOPS · Observation (signals) · CNS (candidate→resolver) | "much higher leverage is actually fixing targeting" [3:39] | AFFIRM | partial | none | vocabulary | watch |
| 4 | **scan → signals → score → act → learn** loop (best customers) | The core Sense+Act flywheel over a population: universe → signal layering → agent scoring → timed action → outcome → play iteration | CNS Sense+Act loops · Intelligence Foundry · Growth/BIZOPS · Observation · Messaging/Intake (action) | "scan their entire addressable market … learn from those outcomes" [3:52–4:15] | AFFIRM | partial | none | spine | watch |
| 5 | **Market-scale agents are infrastructure, not campaigns** | Population-scale workflows need queues/retry/checkpoints/fairness/rate-limit/cost/evals/observability — an operating substrate, not an "AI feature" | §B AI-substrate · CNS · Build-OS · Agent-Work-Protocol (201/210/214 spine) | "looks a lot like an engineering challenge" [4:18]; "350 million times a month … trillions of tokens" [4:44] | AFFIRM | absent | none | spine | watch |
| 6 | **Durable workflow execution** (wait-heavy agents; queues + checkpointing) | Long-running/wait-heavy lanes (refill, D7 extraction, outreach, billing recon) must survive host failure via durable execution + checkpoints, not request/response hosting | §B runtime · CNS · Build-OS · Agent-Work-Protocol §8 checkpoint · (216 shadow/checkpoint) | "most of our agents are … waiting"; "durable workflow execution … queues, checkpointing" [5:36, 6:08–6:14] | AFFIRM/PARTIAL | partial | none | spine | watch |
| 7 | **Adaptive throughput** = TCP/IP-style backpressure + **tenant fairness** | Runtime governs inference like network congestion: send max, dial back on rate-limit (4–10×); + fairness so one operator's mass run can't starve a new one's 10 | §B runtime (net-new `adaptive_inference_backpressure`) · CNS scheduling · operating-metrics · RBAC/Settings tenant isolation | "TCP/IP congestion algorithm … progressively dial back" [6:55]; "fairness across our customers" [7:16] | PARTIAL | absent | tension (efficiency↔fairness → routed) | spine | promote (dedup-pending) |
| 8 | **Cost = caching + bounded execution** (70% cache savings; bound retries/tool calls) | Cost is architecture+behavior control: prefix/context caching (→204 `prefix_cache_boundary`) + eval-gated bounded retries/tool-calls (force-return often beats run-to-completion) | §B runtime economics · 204 (`context_memory_budget`/`prefix_cache_boundary`) · Agent-Work-Protocol bounded-steps · operating-metrics | "up to 70% cost savings"; "bounding retries and tool calls before they sprawl" [8:03, 8:05–8:08] | PARTIAL/AFFIRM | absent | none | vocabulary | watch |
| 9 | **Quality is a product-system property** (great context + offline+online evals + pre-scale iteration) | Quality = data/context quality + tuned harness + offline AND online evals + user iteration tools + confidence-before-scale + outcome measurement — not model quality | Build-OS · Agent-Work-Protocol · Polaris/proof · 215/216 eval spine · `agent_workbench` (201) · operating-metrics | "quality … starts with great context"; "offline evals, but also online evals"; "quality is also a product problem" [8:42, 8:57, 9:17] | AFFIRM | partial | none | spine | watch |
| 10 | **Audiences → agent memory → play recommendation** (Intelligence Foundry pattern) | Aggregate first-party+third-party context → context substrate → outcome-linked **play memory** → next-best-play recommendation; VFS/sandboxes to reason over it | Knowledge-Reservoirs · Intelligence Foundry / REV-199 · §B context · 216 curated-memory · Growth/BIZOPS · 220 state-externalized (VFS) | "Audiences … foundation for our agent memory"; "recommend plays based on … tried before" [10:29, 10:39] | AFFIRM | absent | none | spine | watch |

**Doctrine roll-up:** 7 AFFIRM · 3 PARTIAL (or AFFIRM/PARTIAL) · 0 ABSENT. **Build roll-up:** 0 present · 3 partial (#3 signal→action readiness `lib/dashboard/computeTreatmentReorderReadiness.ts`; #6 durable-execution echo `lib/jobs/*`+`lib/ai/enqueueChartAiReview`/`processChartAiReviewJob` w/ retry; #9 domain deterministic tests `scripts/test-*.ts` + `lib/disclosure-policy/evaluator.ts`) · 7 absent. **Dominant pattern (consistent with wave-3): `doctrine=AFFIRM/PARTIAL · build=absent`** — direction is already OMNI doctrine; the gap is BUILD, routed to Build-OS/C5. No `ABSENT·build=present`.

### B. Net-new primitives (dedup vs registry §2 [000001 §2A + 000002 + wave-3 201–227] + standard OMNI primitives)

Format: `name — meaning — EXISTS-AS`. **All verdicts "dedup-pending, Opus-main verifies."**

- `adaptive_inference_backpressure` — TCP/IP-congestion-style runtime layer that pushes max traffic to inference providers then progressively throttles on rate-limit signals (4–10× throughput vs naive), reacting to downstream capacity — **EXISTS-AS: net-new (§B runtime). STRONGEST net-new of this source.** No throttling/backpressure/congestion-control primitive exists in the registry; composes with 204 `context_memory_budget`/`inference_budget_policy` + 206 `virtual_model_endpoint` + operating-metrics. dedup-pending, Opus-main verifies.
- `tenant_fairness_scheduler` — queue/scheduling policy that prevents one operator's mass-agent workload from starving another's small one (fairness across tenants at runtime) — **EXISTS-AS: net-new (§B runtime / CNS scheduling); sharpens no-god-domain + RBAC `is_staff` tenant isolation into a *runtime scheduling* law (isolation-of-truth ≠ fairness-of-compute).** dedup-pending, Opus-main verifies.
- `play_memory` — outcome-conditioned memory of prior plays + conditions that lets agents *recommend future plays/next-best-action* — **EXISTS-AS: net-new-ish (Growth/BIZOPS + Intelligence Foundry); DISTINCT from 216 `agent_overview_document` (build-agent runtime memory) and from Knowledge-Reservoirs (frame) — this is operator/growth *play*-outcome memory. Overlaps REV-199 curated-memory; verify not a re-mint.** dedup-pending, Opus-main verifies.
- `operator_alpha` (Knox) — advantage from proprietary audiences/timing/signals/outcomes/plays competitors can't copy — **EXISTS-AS: 201 `operator-alpha-not-surrendered` / alpha-firewall + data-value economy (REV-201). NAME only, not net-new mechanism (`GRD-026`/`GRD-035`).**
- `market_scale_agent_runtime` (Knox) — architecture for running agents across a whole population with queues/checkpoints/throttling/fairness/caching/evals — **EXISTS-AS: umbrella NAME over `workflow_lane_as_architecture_unit` + durable-execution (Agent-Work-Protocol §8 checkpoint + 216) + 214 `capability_placement_policy` + the two net-new above. Do NOT mint as a god-concept (`GRD-026`); it's the *assembly*, not a primitive.**
- `audience_context_substrate` (Knox) — aggregated first/third-party + CRM/call + prior-outcome context layer for targeting/play selection — **EXISTS-AS: Knowledge-Reservoirs (concrete GTM/patient reservoir instance) + 204 context + 216 `agent_overview_document`. Sharpen NAME, not net-new.**
- `bounded_agent_execution_policy` — eval-gated force-return after N steps/tools/research (often beats run-to-completion) — **EXISTS-AS: sharpen of Agent-Work-Protocol §6/§7 bounded-steps + 204 runtime economics + 215 eval-gating. NAME, not net-new.**
- `pre_scale_iteration_gate` — no market-scale agent execution before the operator tests/iterates in a builder — **EXISTS-AS: sharpen of Agent-Work-Protocol + 201 `agent_workbench` + 217 declare-before-run (`agent_manifest`). NAME.**
- `online_eval_loop` — production/online evals (not just offline) tuned to what users actually do — **EXISTS-AS: sharpen of 215 `agent_eval_bundle` + 216 phase-specific eval + 201 evals-as-assets (adds the offline↔online distinction as an attribute). NAME.**
- `outcome_linked_cost_metric` (cost-per-successful-action) — **EXISTS-AS: 206 `outcome_per_token_metric` + 215 `cost_per_successful_task`. Not net-new.**
- virtual file systems / sandboxes over context — **EXISTS-AS: 220 `state_externalized_context` + `capability_envelope`/containment. Not net-new.**

**Net-new tally for 228 (post-dedup, pending Opus-main): ~2 solid (`adaptive_inference_backpressure`, `tenant_fairness_scheduler`) + 1 probable (`play_memory`).** Everything else = NAME/sharpen. Consistent with the wave's "the substance is a runtime/security/eval vocabulary, not a new care-frame" finding.

### C. Reread flags (for Opus-main at fold)
1. **Growth / Marketing Workspace** — Knox routes heavily here, but AGENTS' contract list names Identity/RBAC/Federation/Clinical-Memory/Observation/D3/D5/D6/D7/OFC/Messaging/BIZOPS/Settings/Intake — **no explicit "Growth/Marketing Workspace" contract.** Reread: is growth/outreach a BIZOPS slice or an un-migrated surface? (`grep` BIZOPS + Surface Map before routing weight.)
2. **operating_metrics home** — confirm canonical location (BIZOPS vs a dedicated metrics plane) before attaching cost-per-run / throughput / cache-savings / fairness / rate-limit-hit-rate.
3. **Intelligence Foundry / REV-199 boundary** — `play_memory` vs 216 `agent_overview_document` vs REV-199 curated-memory: verify these are distinct rungs (growth-play memory vs build-agent runtime memory) and not a re-mint.
4. **Consent/compliance firewall (Reject-list, safety-bearing)** — any patient reactivation / refill / upsell / lapsed-outreach "play" MUST route through Messaging/Intake consent + care-first Mission Anchor + C3.7 economically-blind firewall; **cached/audience context must respect tenant/patient boundaries** (composes 204 T1 `prefix_cache_boundary` + 205 T2 `memory_contamination_state`).
5. **Durable-execution build echo** — `lib/jobs/*` + `lib/ai/enqueueChartAiReview`/`processChartAiReviewJob` (retry) is a *partial real-world* durable-execution/bounded-retry echo; flag as the closest existing build anchor when routing #6/#8 build-gaps to C5.

**RESOLVED 2026-07-08 (operator-deferred → Opus disposition):**
- **Flag #1 — "Growth/Marketing Workspace" = a P5 SURFACE workspace, ALREADY dispositioned in the canonical Surface Map (NOT a domain, owns no truth).** Verified against `OMNI_Surface_Map_vNext.md`: there is a named **"Marketing / Growth" workspace** (persona = marketer/owner; views = **Campaign-Performance · Conversion-Funnel · Lead-Lifecycle · Promo-Playbooks**; status **`next` / `stub`**). It is fed by **projections**, not its own truth: `marketing_attribution` projection = **D6(Commerce) + Identity(lead) + CNS(campaign) + Messaging** (`projections/marketing_attribution_projection_contract.md`, planned) + the **`operating_metrics` marketing metric-pack** (funnel/attribution/campaign). Thesis §3.5 comparator = **ActiveCampaign/Klaviyo → outbound/marketing + CNS (external platforms = observers, never source-of-truth)**. Public/brand marketing = the separate unauthenticated content layer. Per `D0THES-DEC-033` a surface owns NO canonical truth. **Routing rule for this source: send TRUTH primitives to D6/Commerce + Identity(leads/Lead-Lifecycle) + CNS(campaign) + Messaging(consent-gated outreach) + Observation(signals) + BIZOPS; attribute the "workspace" itself to the existing Surface-Map "Marketing/Growth" workspace (P5, `next`/`stub`), weighted `medium` not `spine`.** (Knox's "Growth/Marketing Workspace" routing is therefore correct in spirit — it's a real, already-planned surface — just not a truth domain.)
- **Flag #2 — `operating_metrics` home = BIZOPS** (business-operations metrics: cost-per-successful-action, throughput, cache-savings, fairness, rate-limit-hit-rate) surfaced via projections; there is no separate canonical metrics plane. Attach these as BIZOPS measures, not a new domain.

### D. One-line hard read + strongest OMNI line
- **Hard read:** Once an agent lane runs across a whole population, the problem is no longer the prompt — it's durable execution, throughput/fairness, cost/caching, quality/evals, and outcome-fed memory; i.e. an **operating substrate before clever prompts.**
- **Strongest OMNI line:** OMNI's population-scale lanes (reactivation, refills, dose-escalation, billing follow-up, provider triage) need Clay-grade **runtime discipline governed by care-first authority** — durable queues/checkpoints, adaptive backpressure + tenant fairness, caching-aware bounded execution, offline+online evals, and an Audiences-like context/`play_memory` layer that turns prior outcomes into next-best *proposals* — where **AI proposes and domains+humans commit** (never an autonomous outreach machine).

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: **§B AI-substrate runtime (MAJOR — durable execution · `adaptive_inference_backpressure` · `tenant_fairness_scheduler` · caching/bounded-execution) · Build-OS + Agent-Work-Protocol (MAJOR — evals offline+online, pre-scale iteration gate, checkpointing) · Intelligence Foundry / REV-199 + Knowledge-Reservoirs (MAJOR — Audiences context substrate + `play_memory` / outcome-fed play recommendation) · CNS Sense+Act loops (medium — scan→score→act→learn) · Growth/BIZOPS + operating-metrics (medium — operator_alpha, cost-per-successful-action, throughput/fairness/cache metrics) · Messaging/Intake + C3.7 firewall (guardrail — consent/care-first on any outreach play)** · promotion: **watch** (evidence_nonbinding; ~2–3 net-new dedup-pending Opus-main; the rest AFFIRM/PARTIAL·build-absent → route build-gaps to C5, no doctrine re-derive)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — Opus extraction agent (EVRUN-2026-000003): lifted §0/§0.1 metadata verbatim from Review 001 (`identity_confidence: high_from_operator_metadata`); proposed slug `clay-350m-gtm-agents-market-scale-runtime` (file NOT renamed); wrote §3 **Review 003** formal deep extraction (full_semantic tier; 10 concept clusters; grep-verified build presence); filled §4 pointers; ticked §0.5. Net-new (dedup-pending, Opus-main verifies): `adaptive_inference_backpressure`, `tenant_fairness_scheduler`, `play_memory`. Status → `analyzed`. Binds nothing (`GRD-036`/`GRD-044`). Registry/coverage/anchor-ledger NOT edited (Opus-main fold).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

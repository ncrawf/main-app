# EVSRC-2026-000222 — How Pendo used LangSmith to trace Novus from user behavior to code fixes

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000222_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000222`  ·  filename: `EVSRC-2026-000222_pendo-novus-langsmith-product-trace-to-eval-loop.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=uTwBdzMr47U`  ·  source_title: `How Pendo used LangSmith to trace Novus from user behavior to code fixes`
- channel_or_org: `LangChain`  ·  speaker: `Zain Lakhani, Chief AI Officer at Pendo`  ·  published_at: `approx 2026-07-01 (screenshot shows “6 days ago”)`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + description + pasted transcript`
- content_type: `product agent / Novus / Pendo / LangSmith / trace observability / design partner feedback / eval-set creation / product instrumentation / user behavior analytics / usage insights / suggested fixes / unsupported use-case detection / production agent monitoring`  ·  source_reliability_context: `Short LangChain customer/product case study from Pendo’s Chief AI Officer. Useful for product-agent observability, design-partner scaling, trace-derived eval sets, and measuring whether an AI product is doing the job customers actually need. Strong practical source for “production traces become evals and product fixes,” but not deep implementation architecture.`  ·  topic_tags_light: `[LangChain, LangSmith, Pendo, Novus, Zain_Lakhani, product_agent, product_instrumentation, user_behavior_traces, eval_sets, design_partner_feedback, unsupported_use_cases, production_agent_monitoring, trace_to_eval_loop, customer_feedback_loop, operating_metrics, Product_Intelligence, Build_OS, Agent_Work_Protocol, Intelligence_Foundry]`  ·  identity_confidence: `high_from_operator_metadata`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Zain Lakhani` · role_in_source: `speaker / presenter` · affiliation_at_publication: `Pendo (Chief AI Officer)` · speaker_type: `operator (product/AI exec) + vendor-adjacent (LangChain customer case study)` · authority_context: `Chief AI Officer building Novus, a product agent; first-hand practitioner account of trace→eval→product-fix loop` · identity_confidence: `high_from_operator_metadata`
  - *(add a bullet per additional speaker)*
- publisher / channel: `LangChain (YouTube)`  ·  interviewer / moderator / host: `n/a (LangChain-produced customer case study; single-speaker)`
- event_context: `LangChain customer / product case study on LangSmith trace observability, published approx 2026-07-01`  ·  perspective / conflict notes: `Vendor-positioned (LangChain promoting LangSmith/LangChain adoption via a customer). Speaker is a satisfied LangSmith user — take the trace→eval→fix loop as a real practitioner pattern, discount the implicit "buy LangSmith" pull. Not deep implementation architecture.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(fold packet returned to Opus-main; not edited by this pass)* · [ ] update coverage matrix *(Opus-main)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️


n this video



Chapters

Transcript
Search in video
What Novus does
0:00
[MUSIC PLAYING]
0:02
My name is Zain Lakhani.
0:03
I'm the chief AI officer at Pendo,
0:06
and we're building Novus.
0:07
Novus is a product agent that automatically
0:09
instruments your product to detect how users are using it.
0:12
So clicks, replays, whether they're making it
0:14
through funnels or not.
0:16
And then we aggregate all of that data
0:17
to give you insights on how to change your product.
The hardest part of building an AI product
0:19
When building Novus at the beginning,
0:21
the hardest part is always to tell whether the product is
0:23
working or not.
0:24
It's very easy to go finger to the wind and say, hey,
0:26
this generally looks cool.
0:28
AI spitting out something that seems like it makes sense,
0:31
but it's very hard to tell whether it's actually doing
0:33
the job it was intended to do.
0:34
But over time, you start to build these eval sets of,
0:37
is the product working or not?
0:38
Is the product doing what customers are actually asking for?
0:41
How do we intertwine customer feedback
0:43
into the problem statement?
0:45
How do we change the eval sets based on what customers
0:47
are giving us feedback on?
0:48
The thing that we're measuring is, A,
0:50
did we surface the right signal?
0:51
Did we surface the right insight from your product data?
0:54
And B, did we suggest the right fix to it?
0:56
And those are two very, very hard problems
0:58
to solve at scale.
0:58
So we first started using LangSmith to capture trace data.
1:01
That's how I've always started using LangSmith at every
1:04
company that I've been at.
1:06
And it's great because it tells you at the beginning how
1:08
users are using the product and lets you carve out what the
Why eval sets are the answer
1:10
use cases are.
1:11
Rather than going to each of our design partners
1:13
individually and saying, hey, how did you use the chat
1:16
this week?
1:16
How did you use the product this week?
1:18
We go inside of our trace dashboard and say, OK, look,
1:20
here are the seven top use cases that we can see based on
1:23
expanding all of these traces and seeing what the customer is
1:26
asking and how the agent is responding. And quite honestly, half of the time, our
1:30
agent doesn't support what the users are asking. But it's a great way for us to
How LangSmith replaced manual design partner check-ins
1:34
start building eval sets based on what they're asking and support the use cases
1:37
over time. One of the main ways that we improve Novus is every morning we look
1:41
at our trace dashboard to determine what customers are asking versus what we
1:44
expected them to ask and what use cases Novus supports versus what use cases
1:48
they're trying on their own. And this leads to two very interesting situations.
1:51
One is they ask unsupported use cases that effectively error out in Novus,
1:56
or it spits back a response that they wouldn't expect.
1:59
60% of the time, more often than not, we catch those problems before customers do
2:03
because we see how it's working at scale.
2:05
We see Design Partner X ask a question that Design Partner Y would have asked the next day,
2:10
and in between that gap, we add it to our eval sets to support the use case,
2:13
while making sure none of the original use cases degrade in quality.
Catching failures before customers do
2:17
For us, getting agents into POC or even production, LangChain was a great framework because it's
2:22
easy to build with fast.
2:23
The second part of this is once the agent does go to production, you need to know what
2:26
it's doing and what people are asking.
2:28
And for us, Traces was that unlock.
2:30
And I would say our design partner base has directly scaled as a result of having observability
2:34
in the platform.
2:35
When we look at Pendo and Novus in the broader ecosystem of developer and PM-enabled AI tools,
Why LangChain was the right framework for POC and production
2:40
we see a lot of complements between LangChain and Novus.
2:44
Novus instruments the product and tells you how to improve the products over time.
2:48
LangSmith instruments the agents and tells you how to improve the agents over time.
How observability scaled the design partner base
2:51
(upbeat music)
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
source_url: https://www.youtube.com/watch?v=uTwBdzMr47U
source_title: How Pendo used LangSmith to trace Novus from user behavior to code fixes
channel_or_org: LangChain
speaker: Zain Lakhani, Chief AI Officer at Pendo
published_at: approx Jul 1, 2026, screenshot shows “6 days ago”
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + description + pasted transcript
content_type: product agent / Novus / Pendo / LangSmith / trace observability / design partner feedback / eval-set creation / product instrumentation / user behavior analytics / usage insights / suggested fixes / unsupported use-case detection / production agent monitoring
source_reliability_context: Short LangChain customer/product case study from Pendo’s Chief AI Officer. Useful for product-agent observability, design-partner scaling, trace-derived eval sets, and measuring whether an AI product is doing the job customers actually need. Strong practical source for “production traces become evals and product fixes,” but not deep implementation architecture.
priority: 4.25/5
depth: medium_semantic
recommended_status: route to operating_metrics, Product Intelligence, Build-OS, Agent Work Protocol, eval-set doctrine, design-partner telemetry, trace-to-use-case clustering, and Intelligence Foundry feedback loops.

Topic tags:
[LangChain, LangSmith, Pendo, Novus, Zain_Lakhani, product_agent, product_instrumentation, user_behavior_traces, click_tracking, replay_tracking, funnel_tracking, product_usage_insights, suggested_fixes, trace_observability, eval_sets, design_partner_feedback, unsupported_use_cases, production_agent_monitoring, trace_to_eval_loop, customer_feedback_loop, operating_metrics, Product_Intelligence, Build_OS, Agent_Work_Protocol, Intelligence_Foundry]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4.25/5
Depth: medium semantic
Recommended status: route to operating_metrics / Product Intelligence / Build-OS / eval-set doctrine / design-partner telemetry / trace-to-eval loop.

Core takeaway

This source is about the hard part of AI product development:

It is easy to make an AI product that looks cool. It is hard to know whether it is actually doing the job customers need.

Novus instruments product behavior — clicks, replays, funnel completion — then aggregates that into insights and suggested product fixes. LangSmith is used to inspect how users are actually interacting with the agent/product, identify unsupported use cases, and convert those real traces into eval sets.

OMNI translation:

Production traces are not just debugging artifacts. They are the raw material for use-case discovery, eval-set creation, product prioritization, and regression protection.

This source is short, but important.

Key concepts to preserve
1. “Does it look good?” is not enough

Zain’s line is basically:

AI can spit out something that seems like it makes sense, but that does not prove the product is doing its job.

OMNI keeper:

Do not evaluate AI surfaces by vibe.

For OMNI, this applies to:

patient intake
provider workspace summaries
scheduling/routing suggestions
D7 extraction
billing/entitlement reasoning
campaign recommendations
owner dashboard insights
Build-OS source reviews
clinical-context packets

Doctrine candidate:

Plausible output is not product success.

2. Eval sets should evolve from customer feedback

The source emphasizes building eval sets over time based on what customers are actually asking for and where the product fails.

OMNI keeper:

Eval sets are not static launch artifacts.

They should evolve from:

customer questions
unsupported use cases
failed traces
design partner feedback
ignored/low-value suggestions
wrong product assumptions
recurring confusion
high-friction workflows

Doctrine candidate:

Production usage should continuously reshape eval sets.

3. Measure two things: right signal and right fix

Novus measures:

Did we surface the right signal or insight from product data?
Did we suggest the right fix?

This is a very clean product-agent eval frame.

OMNI translation:

For OMNI, many agents should be evaluated in two stages:

signal quality → action/fix quality

Examples:

Did the system detect the right clinical/documentation issue?
Did it suggest the right plan/edit/follow-up?
Did it detect the right billing mismatch?
Did it suggest the right ledger correction?
Did it detect the right patient dropout pattern?
Did it suggest the right outreach action?

Doctrine candidate:

Product agents should be evaluated separately on signal detection and fix recommendation.

4. Traces replace manual design-partner check-ins

Instead of asking each design partner “how did you use the product this week?”, they inspect trace dashboards and identify top use cases from actual behavior.

OMNI keeper:

Trace dashboards scale customer discovery.

For early OMNI pilots, this matters a lot.

You do not want only subjective check-ins. You want:

what users actually clicked
what they asked
where they abandoned
what they retried
what the agent failed to support
what outputs were ignored
what suggestions were accepted
what surfaced insight led to action

Doctrine candidate:

Design-partner learning should come from traces plus interviews, not interviews alone.

5. Unsupported use cases are product gold

They found that customers often ask for things the agent does not support. Those failures become eval-set entries and future roadmap work.

OMNI keeper:

Unsupported use cases are not just errors. They are demand signals.

For OMNI:

provider asks for something not supported
patient app users try a workaround
staff repeatedly override a workflow
owner dashboard question cannot be answered
D7 document type not recognized
campaign agent cannot explain performance
billing/benefit edge case fails

Those should become:

unsupported_use_case → issue → eval example → roadmap/fix candidate

Doctrine candidate:

Unsupported traces should become structured product intelligence.

6. Catch failures before other customers hit them

They describe Design Partner X asking something that Design Partner Y would have asked the next day, and fixing/supporting it in the gap.

OMNI keeper:

This is the promise of trace-driven development.

Production traces can become early warning systems.

For OMNI:

catch triage gaps before more patients encounter them
catch provider-summary errors before other providers see them
catch entitlement edge cases before billing errors repeat
catch intake confusion before campaign scale
catch D7 extraction weaknesses before document volume grows

Doctrine candidate:

Trace observability turns one customer’s failure into system-wide prevention.

7. Production observability scales design-partner base

They explicitly say design partner base scaled because observability let them understand production behavior.

OMNI keeper:

You cannot scale pilots without telemetry.

For OMNI rollout:

design partners should be instrumented
agent traces should be visible
product usage should be visible
failure classes should be tracked
eval sets should update
regressions should be checked
adoption should be measured

Doctrine candidate:

Pilot scale requires observability before scale requires headcount.

8. Product instrumentation and agent instrumentation are complementary

The closing line is strong:

Novus instruments the product and tells you how to improve the product over time. LangSmith instruments the agents and tells you how to improve the agents over time.

OMNI keeper:

OMNI needs both planes:

Product behavior plane

clicks
funnels
page flows
abandoned tasks
feature usage
human overrides
conversion/dropoff

Agent behavior plane

traces
tool calls
prompts
model outputs
latency/cost
eval pass/fail
accepted/rejected suggestions

Doctrine candidate:

Product telemetry and agent telemetry must converge, but they are not the same plane.

OMNI translation

This source sharpens OMNI’s feedback loop:

real usage → trace dashboard → unsupported use case → eval set → fix/product change → regression check → broader rollout

That is different from generic “analytics.”

It is product intelligence becoming agent/product improvement.

For OMNI, this should apply to both:

Build-OS / agent engineering
actual clinical/business product surfaces

The strongest keeper:

The eval corpus should be fed by reality.

Likely OMNI landing zones

operating_metrics

supported vs unsupported use cases
signal quality
fix quality
repeated failure rate
user acceptance of suggestions
use-case frequency
design partner coverage
regression after fix

Product Intelligence

user behavior instrumentation
product insights
funnel/dropoff analysis
feature demand detection
suggested product fixes

Agent Work Protocol

trace-to-eval conversion
unsupported use-case handling
failure classification
regression checks after adding support

Build-OS

use actual source-review failures to create eval cases
convert corpus workflow failures into templates/checklists
track what users/operators ask the build agents to do

Intelligence Foundry

production traces as raw learning substrate
feedback becomes candidate eval/fix
no silent model adaptation without governance
Doctrine candidates
Plausible output is not product success.
Production usage should continuously reshape eval sets.
Product agents should be evaluated separately on signal detection and fix recommendation.
Design-partner learning should come from traces plus interviews, not interviews alone.
Unsupported traces should become structured product intelligence.
Trace observability turns one customer’s failure into system-wide prevention.
Pilot scale requires observability before scale requires headcount.
Product telemetry and agent telemetry must converge, but they are not the same plane.
The eval corpus should be fed by reality.
Net-new / sharpen / affirm
Net-new candidates

trace_to_eval_feedback_loop
Production/user traces are reviewed, clustered into use cases/failures, converted into eval examples, and used to harden future versions.

unsupported_use_case_signal
A trace where the user asks for something the agent/product cannot yet support; treated as roadmap/eval input, not merely an error.

signal_fix_eval_split
Separate evaluation of whether the agent found the right signal versus whether it recommended the right fix.

product_agent_telemetry_plane
Instrumentation over product behavior — clicks, replays, funnels, usage patterns — used to generate insights and product fixes.

design_partner_trace_dashboard
A pilot-stage dashboard that replaces some manual check-ins by showing what design partners actually tried, where they failed, and what they need next.

Sharpen existing

operating_metrics
Adds product-agent metrics beyond runtime traces.

Intelligence Foundry
Reality-fed eval loops become learning substrate.

Build-OS
Trace failures in the build workflow should create future eval cases.

Agent Work Protocol
Unsupported use cases need classification and routing.

Polaris
Product/agent improvement needs traceable evidence from usage to fix.

Affirm
eval sets must evolve over time
trace dashboards are key to production agents
design partner behavior reveals real use cases
observability is required after POC
product insights and agent insights are related but distinct
regressions matter when new use cases are added
Reject / do not over-import
Do not treat user behavior traces as automatically correct product direction.
Do not let trace dashboards replace direct customer interviews entirely.
Do not optimize only for most frequent use cases if rare cases are high-risk.
Do not use production traces for training/evals without consent/privacy governance.
Do not equate “customer asked for it” with “OMNI should support it.”
Do not let product analytics override clinical/domain authority.
Do not assume a suggested fix is correct just because the signal was real.
Hard read

This is a product-agent feedback-loop source.

The important lesson is not just “use LangSmith.” It is:

AI products improve when production traces reveal what users actually ask for, what the agent fails to support, and which failures should become eval cases before the next customer hits them.

Shortest OMNI version:

OMNI’s evals should be fed by real operator/patient/provider behavior. Trace the product, trace the agents, identify unsupported use cases, split signal quality from fix quality, convert failures into evals, and prevent one user’s failure from becoming everyone’s failure.

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

**Tier:** `medium_semantic` (per Knox depth) · **priority 4.25/5** · frame-AFFIRM + operational-vocabulary, NOT frame-extension.

**Headline verdict.** This is the **product-plane companion to the wave's agent-eval/reflexive-build spine (215/216/217).** Where 215 = *how you prove an agent works* (sandbox+trace+verifier+score), 216 = *how the build-agent system maintains itself* (trace→issue→fix→eval→curated memory, REV-199), and 217 = *declare-before-run manifest* — **222 says the eval corpus itself must be fed by REALITY: production traces of how operators/patients/providers actually use the product become use-case discovery, eval material, demand signals, and regression protection.** Its one genuinely net-new leg is the **two-plane telemetry distinction** — a **product-behavior plane** (clicks/funnels/usage/overrides/dropoff → product insight) that is DISTINCT from, but must converge with, the **agent-behavior plane** (`trace_lineage`; tool-calls/prompts/outputs/eval pass-fail). The wave so far had agent telemetry richly (215/216/220); it did NOT name product-behavior telemetry as a plane. Everything else AFFIRMs existing OMNI law: eval-not-vibe (candidate≠commit), signal→fix maps cleanly onto OMNI's **Sense+Act two-loop** model, unsupported-trace = exception = demand (sharpens 210 `exception_surface`), and the whole loop is a **product-plane instance of REV-199**. Build ≈ **absent** across all clusters (grep-verified: no eval-corpus, trace-dashboard, design-partner-telemetry, product/agent instrumentation, or feedback-loop in `app/lib/components/scripts/supabase`). Dominant pattern = **`doctrine=AFFIRM/PARTIAL · build=absent`**, unchanged from 201–221.

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Plausible output ≠ product success (don't eval by vibe) | An AI surface "looking cool" is not evidence it does the job; every AI surface (intake, provider-summary, scheduling, D7 extraction, billing reasoning, campaigns, owner dashboards, Build-OS reviews) needs objective eval, not impression | §B eval · Build-OS · Polaris/proof · Agent-Work-Protocol | *"hard to tell whether it's actually doing the job"* [0:33] | AFFIRM (215 "verifiers not vibes"; candidate≠commit) | absent | none | spine (via 215) / vocabulary here | watch |
| 2 | Reality-fed eval corpus (production usage continuously reshapes evals) | Eval sets are not static launch artifacts; they evolve from real customer questions, unsupported use cases, failed traces, design-partner feedback, ignored suggestions, recurring confusion | Build-OS · §B eval · Agent-Work-Protocol · Intelligence-Foundry · Knowledge-Reservoirs | *"change the eval sets based on what customers... feedback"* [0:47] | AFFIRM (201 evals-as-strategic-assets; 216 reflexive loop) | absent | tension (T9: reality-fed vs PHI/consent) | spine-adjacent | watch |
| 3 | Signal→fix eval split (detect vs recommend, evaluated separately) | Evaluate whether the system surfaced the RIGHT signal separately from whether it proposed the RIGHT fix; maps onto OMNI Sense-loop (signal) + Act-loop (fix) + CNS candidate→resolver→commit | §B eval · operating-metrics/BIZOPS · CNS · thesis §8 (two loops) | *"did we surface the right signal?"* [0:51] · *"did we suggest the right fix"* [0:56] | AFFIRM/PARTIAL (Sense+Act loops; candidate≠commit) | absent | none (Knox "signal real ≠ fix correct" = candidate≠commit) | vocabulary | watch |
| 4 | Trace dashboards scale design-partner discovery | Inspect what pilots actually did (asked/failed/retried/abandoned/accepted) instead of only subjective check-ins; discovery from behavior, not interviews alone | Build-OS · operating-metrics · product-intelligence · Surface/Projection-Map | *"go inside of our trace dashboard... top use cases"* [1:20] | PARTIAL (201 governed-traces flywheel) | absent | tension (T11: traces ≠ replace interviews) | vocabulary | watch |
| 5 | Unsupported use case = demand signal (not just error) | A trace where the user asks for something the product/agent can't yet support is roadmap + eval input, not merely a failure; `unsupported_use_case → issue → eval example → fix candidate` | Agent-Work-Protocol · Build-OS · operating-metrics · product · CNS (exception lifecycle) | *"half of the time, our agent doesn't support what... asking"* [1:30] · *"ask unsupported use cases that... error out"* [1:56] | PARTIAL (sharpens 210 `exception_surface`) | absent | tension (T10: customer-asked ≠ OMNI-should-support) | vocabulary→spine-adjacent | watch |
| 6 | Catch failures before the next customer (trace = early-warning) | One user's failure, surfaced in traces, becomes system-wide prevention before others hit it (triage gaps, provider-summary errors, entitlement edge cases, D7 weaknesses); protect original use cases from regression | operating-metrics · Build-OS · §C (regression/safety) · CNS | *"we catch those problems before customers do"* [2:03] · *"none of the original use cases degrade"* [2:13] | AFFIRM (202 CI-verification/regression; 216 regression-eval) | absent | none | vocabulary | watch |
| 7 | Observability precedes scale ("before headcount") | You cannot scale pilots without telemetry; instrument design partners, make agent traces + product usage + failure classes visible, keep evals + regression current | Build-OS · operating-metrics · rollout/product · Agent-Work-Protocol | *"design partner base has directly scaled as a result of... observability"* [2:34] | AFFIRM (201 traces-as-assets) | absent | none | vocabulary | watch |
| 8 | Two telemetry planes: product-behavior ≠ agent-behavior (converge, distinct) | **Product plane** = clicks/funnels/page-flows/abandoned-tasks/feature-usage/human-overrides/conversion; **agent plane** = traces/tool-calls/prompts/outputs/latency-cost/eval-pass-fail/accepted-rejected. Must converge for product intelligence but are NOT the same plane | §B AI-substrate · operating-metrics/BIZOPS · Observation (behavioral) · product-intelligence · Surface-Map | *"Novus instruments the product... LangSmith instruments the agents"* [2:44] | PARTIAL (agent-plane = `trace_lineage` exists; product-plane unnamed) | absent | none | **spine-adjacent (genuine net-new leg)** | watch |
| 9 | The unifying loop: real usage → trace → unsupported case → eval → fix → regression → rollout | Product-plane instance of REV-199: reality drives eval + product change under governance; "product intelligence becoming product improvement," not generic analytics | Build-OS · REV-199/Intelligence-Foundry · Agent-Work-Protocol · CNS · Knowledge-Reservoirs | *"real usage → ... → fix/product change → regression check → broader rollout"* (Knox synth of [1:41–2:17]) | AFFIRM (parallels 216 `trace_to_issue_to_fix_eval_loop`) | absent | tension (T9 governance gate) | spine-adjacent (via REV-199) | watch |

### B. Net-new primitives — `name — meaning — EXISTS-AS`  (**dedup vs registry §2 + standard OMNI primitives; "dedup-pending, Opus-main verifies"**)

1. `product_telemetry_plane` — instrumentation over PRODUCT behavior (clicks/replays/funnels/feature-usage/human-overrides/dropoff) that yields product insight + fix candidates — **EXISTS-AS: net-new (genuine leg).** The wave's agent-behavior plane = `trace_lineage` (exists); a product-behavior plane is NOT yet named. Distinct from clinical `Observation` (patient physiology/clinical facts) and from `trace_lineage` (agent internals). Composes operating-metrics + Surface-Map. **dedup-pending, Opus-main verifies.**
2. `unsupported_use_case_signal` — a trace where the user asks for something the product/agent cannot yet support, treated as demand/roadmap/eval input rather than a bare error — **EXISTS-AS: net-new; sharpens/composes 210 `exception_surface` + Agent-Work-Protocol failure-classification.** The demand-signal framing (not just exception-triage) is the new part. **dedup-pending, Opus-main verifies.**
3. `signal_fix_eval_split` — a two-stage eval dimension: evaluate signal/insight detection separately from fix/action recommendation — **EXISTS-AS: net-new eval-dimension; sharpens 215 `deterministic_task_verifier`/`agent_eval_bundle` and maps onto OMNI's Sense+Act two-loop (thesis §8) + CNS candidate→resolver→commit.** Likely folds as an *attribute* of the eval-bundle rather than a standalone mechanism. **dedup-pending, Opus-main verifies.**
4. `reality_fed_eval_corpus` / `trace_to_eval_feedback_loop` — production traces continuously curated into eval examples that harden future versions — **EXISTS-AS: RECONCILE, likely re-mint → 216 `trace_to_issue_to_fix_eval_loop` (REV-199) applied to the PRODUCT-surface plane rather than the build-agent plane.** Distinction worth keeping (build-plane vs product-plane instance), but NOT a net-new mechanism. **dedup-pending, Opus-main verifies.**
5. `design_partner_trace_dashboard` — pilot-stage dashboard that surfaces what design partners actually tried/failed/needed, partially replacing manual check-ins — **EXISTS-AS: NAME-only over `product_telemetry_plane` + operating-metrics + Surface/Projection-Map (`generated_ui_as_agent_coordination_surface`).** Low/no-op mint. **dedup-pending, Opus-main verifies.**

*Rejected re-mints (Opus-main should confirm):* "product analytics," "customer feedback loop," "usage insights" = generic labels, not OMNI mechanisms.

### C. Reread flags
- **REV-199 / Intelligence-Foundry authors:** decide whether the reflexive loop is explicitly **two-plane** (build-agent plane AND product-surface plane) — 222 is the clearest source that the SAME trace→eval→fix discipline must run over *product usage of care/business surfaces*, not just over build agents. If yes, `trace_to_eval_feedback_loop` (product-plane) is a first-class sibling of 216's build-plane loop.
- **§B / operating-metrics authors:** `product_telemetry_plane` needs a home — is product-behavior instrumentation a §B AI-substrate concern, an operating-metrics/BIZOPS concern, or a behavioral extension of `Observation`? (222 says it's distinct from the agent `trace_lineage` plane.)
- **Consent/PHI + §C governance:** the reality-fed eval loop (clusters 2/9) is **safety-bearing** — production traces of patient/provider behavior cannot flow into evals/training without consent + PHI governance. Cross-links T1 (204 `prefix_cache_boundary`) + T2 (205 `memory_contamination_state`) + `GRD-036`. Flag for the §C/consent authors: **usage traces are a governed data class.**
- **thesis §8 authors:** confirm the `signal_fix_eval_split` ↔ Sense-loop/Act-loop mapping — this is a clean external validation that OMNI's two-loop split is the right eval decomposition.

### D. One-line hard read + strongest OMNI line
- **Hard read:** OMNI's evals must be fed by *real* operator/patient/provider behavior — trace the product AND the agents (two distinct planes that converge), treat unsupported traces as demand signals, split signal-quality from fix-quality, and turn one user's failure into system-wide prevention — but only through consent/PHI-governed, promotion-gated loops where **usage informs, never authorizes.**
- **Strongest OMNI line:** *The eval corpus should be fed by reality* — production traces are use-case discovery + eval material + regression protection, not just debug artifacts; but "the customer asked for it" ≠ "OMNI should support it," and product analytics never override clinical/domain authority.

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` (fold packet folded UP by Opus-main) · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `§B AI-substrate eval + product-telemetry plane (MAJOR) · Build-OS + Agent-Work-Protocol (MAJOR — reality-fed eval corpus) · REV-199/Intelligence-Foundry (MAJOR — product-plane trace→eval→fix loop) · operating-metrics/BIZOPS (MAJOR — signal/fix + product/agent telemetry) · CNS (medium — signal→fix = candidate→resolver→commit) · Knowledge-Reservoirs (medium — traces as gated learning substrate) · §C Security + consent/PHI (medium, safety-bearing — usage traces are a governed data class) · Surface/Projection-Map (medium — design-partner dashboard / exception surface) · §A trust-axis (minor — product analytics ≠ clinical authority)` · promotion: `watch` (frame-AFFIRM + operational vocabulary; 3 net-new candidates dedup-pending Opus-main; binds nothing per `GRD-036`)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — Opus formal extraction pass: lifted §0/§0.1 metadata verbatim from Review 001 (`identity_confidence: high_from_operator_metadata`); proposed slug `pendo-novus-langsmith-product-trace-to-eval-loop` (file NOT renamed); wrote §3 Review 003 (9 concept clusters + 3 net-new candidates [`product_telemetry_plane` · `unsupported_use_case_signal` · `signal_fix_eval_split`] + 2 reconcile + reread flags + hard read); grep-verified build≈absent across clusters; filled §4 pointers; status → `analyzed`. Binds nothing (`GRD-036`/`GRD-044`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

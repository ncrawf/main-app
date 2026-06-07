# EVSRC-2026-000076 — LLM vs. SLM vs. FM: Choosing the Right AI Model

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: LLM/SLM/FM explainer); Knox read in §3 Review 001 (verified: model-routing taxonomy). Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000076`  ·  filename: `EVSRC-2026-000076_ibm-martin-keen-llm-vs-slm-vs-fm.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=AVQzG2MY858`
- source_title: `LLM vs. SLM vs. FM: Choosing the Right AI Model`
- channel_or_org: `IBM Technology` (1.71M subs)  ·  series: `IBM explainer` (watsonx cert promo)  ·  published_at: `2026-01-24`  ·  views_at_capture: `64,606`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `explainer / lecture`  ·  source_reliability_context: `academic / vendor-practitioner (IBM Master Inventor — educational reference; watsonx commercial framing)`  ·  topic_tags_light: `[llm_vs_slm_vs_fm, model_selection, large_small_frontier_models, model_routing, task_fit, classification_support_incident_response]`  ·  note: `IBM-channel source (2nd of corpus); AI-generated summary present; cert-promo video`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Martin Keen` · role_in_source: `presenter` · affiliation_at_publication: `IBM (Master Inventor)` · speaker_type: `vendor-practitioner / educator (IBM Technology; well-known IBM explainer host)` · authority_context: `relevance on **model selection**: how **Large (LLM), Small (SLM), and Frontier (FM) models differ** and excel at different tasks (classification, support, incident response), and **how to pick the right model for a given project.** Clean educational comparison — directly useful as model-portfolio/routing vocabulary` · identity_confidence: `high_from_screenshot`
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `—` (solo explainer)  ·  event_context: `IBM Technology YouTube (watsonx AI Assistant Engineer cert promo)`  ·  perspective / conflict notes: `IBM educational content w/ watsonx framing (cert discount in description). **OMNI relevance: LLM/SLM/FM selection criteria map directly to §B model-execution / model-routing posture + Build OS model gateway (which model for which task: cost/latency/quality/privacy → esp. SLM for on-prem/PHI-sensitive tasks). Pairs with Mistral 069 (open/small-vs-large) + AI-stack 075. Practical model-portfolio reference.** Recent (2026-01). Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): IBM Master Inventor / educational = reliable model-selection reference, but vendor (watsonx) framing; claims route through evidence → interpretation → gated promotion. Treat as practical reference vocabulary.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = LLM/SLM/FM transcript; §3 = matching model-routing read) · [x] EVRUN needed? (yes — inventory_only; §B model-routing taxonomy — pair w/ 069/075) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
When it comes to AI, I think there's one  term everyone is pretty familiar with,  
0:05
LLM, large language model. But you'll  also hear some other terms like SLM,  
0:13
that's small language model, and FM, that's  frontier model. So, what's the difference? Well,  
0:23
they're not really three separate categories.  LLM, it's really the umbrella term, but we can  
0:30
think of SLMs as kind of the efficient specialists  and we can think of frontier models as more of the  
0:38
cutting edge. They're all language models, but  we label them differently because we use them  
0:44
differently. So, let's define what each term  means and then talk about some use cases that  
0:50
are well suited for each model. And we're going  to start with LLMs, large language models. Now,  
0:56
large language models are what most people  think of when they hear AI. And we're talking  
1:01
about models that are pretty big. They have tens  of billions of parameters. And parameters here  
1:11
means the weights that are learned during training  that determine the model's capabilities. and more  
1:17
parameters generally means a bit more knowledge, a  bit more nuance, a bit more reasoning. Now, LLMs,  
1:23
we can really think of these as being generalists.  And what I mean by that is that they have broad  
1:30
knowledge across many domains and they can handle  sophisticated back and forth conversations. Now,  
1:35
there are a lot of different LLMs. Uh, many of  them are kind of open source models in this kind  
1:43
of parameter range and they typically run in the  cloud or in SaaS environments because they need  
1:50
large amounts of GPU memory and processing power.  So that's LLM. What about SLM? Well, small. Yeah,  
1:58
they have fewer parameters. So we might be talking  about a model that has less than 10 billion  
2:07
parameters. So, SLM's just kind of worse version  of LLMs. Well, I think rather than worse, it's  
2:15
probably better to think of these guys as not so  much generalists, but more as specialists. Today,  
2:24
well-tuned SLMs, they can often match or even beat  these bigger models at focused tasks. So, document  
2:30
classification or code routing or summarization,  an SLM can often do it faster and cheaper.  
2:37
Some examples of that, well, IBM's Granite models,  including the recently released Granite 4.0,  
2:45
that is an SLM. And then we've got some  smaller open-source options as well,  
2:51
like certain models that have come from Mistral.  And then we've got FMs, Frontier models. Now,  
3:01
these are often hundreds of billions of parameters  and quite a bit more. And they also have deep tool  
3:10
integration. But it isn't just the size and the  tools because actually plenty of smaller models,  
3:16
they can use tools now as well. What makes  frontier models frontier is that they are the  
3:23
most capable type of model that we have today.  They have the best reasoning. They're best at  
3:31
complex tasks. So, we can think of models uh that  fall into this category as like Claude Sonnet and  
3:38
Opus would definitely fit into here. GPT5 from  Open AI we could put in here and Gemini Pro from  
3:48
Google. These would all be considered Frontier  models. Now, you might be thinking, all right,  
3:54
Frontier models are the most capable. Why don't I  just use Frontier models for everything? I mean,  
3:59
that's a fair question, but here's where the  strategy comes in. The choice of AI model is  
4:05
use case specific. So, let's look at three use  cases, and we're going to pick one that fits  
4:11
well with each of the types of models. And let's  start with small language models. So, the use case  
4:17
I'm going to use here is document classification  and routing. So, here's the scenario. We've got  
4:23
a company and it receives thousands of documents  every day. So there's a whole bunch of documents  
4:31
coming in. There might be support tickets or  insurance claims, whatever. And each one of  
4:35
those needs to get routed to the right department  and then tagged appropriately. So the documents,  
4:42
they come into our system. And when they get  into our system, they hit what we're going  
4:48
to call the classification service. that is going  to process these documents and the classification  
4:56
service that is running on top of a small language  model. So the service reads the documents and then  
5:06
it does some classification. So it figures  out what the category of each document is.  
5:13
It figures out what the metadata of each  document is. And once it's done all that,  
5:21
then these messages can be routed. So they get  routed to whatever the appropriate queue is to  
5:29
process these messages. A pretty straightforward  pipeline. And implementing the classification  
5:36
service is really a perfect job for a small  language model. Let me give you some some reasons  
5:42
why. One reason really comes down to to speed.  So an SLM with let's say 3 billion parameters  
5:51
instead of a bigger model with maybe like 70  billion that has simply less computation per  
5:58
inference. So document classification is a pretty  straightforward pattern matching exercise and you  
6:03
don't need massive scale to achieve high accuracy.  Uh another good reason comes down to cost. Fewer  
6:11
parameters also means less computational cost  per inference. You're doing fewer calculations  
6:16
which uses less memory which requires less GPU  resources and then we've also got the advantage of  
6:25
governance. Now it turns out that these documents  here they contain sensitive data and running an  
6:32
SLM on premise means that the data never leaves  that environment. There's no external API calls.  
6:37
There's no questions about compliance. And for  regulated industries like finance and healthcare,  
6:43
that's often non-negotiable. So that's why  SLMs work for document classification. There's  
6:48
fast inference from fewer parameters. There's  predictable infrastructure costs and the data  
6:54
stays in house. All right. Next up, large language  models. We're going to go with customer support  
7:00
as the use case here where a customer contacts  support with an issue. So maybe their billing  
7:05
doesn't match what they expected and it's tied  to a a service configuration change and there's  
7:10
also a history of previous tickets about related  issues just like basically some complicated stuff.  
7:15
So what can we do here? Well basically we will  start with a query. Now the query comes in and  
7:22
it's going to hit the element that we're going to  build here which is our basic support system to  
7:30
process this query. And yes, the support system  is running on top of a large language model. Now  
7:41
the LLM, it needs to pull information from a  bunch of sources. So maybe it needs to pull  
7:48
information from a billing database as part of  this processing. Maybe we also need some of the  
7:56
the technical configuration data that needs to be  provided as well to the system. And perhaps we'll  
8:04
also include the ticket history of that particular  customer who has submitted the query. And that's  
8:12
all received into the support system. So it  synthesizes all of that data. And it's going  
8:17
to need to understand the relationships between  all of these different pieces of information. And  
8:22
ultimately what we want it to do is to generate  a solution at the end. So this is a much more  
8:29
complex pipeline than simple classification.  So, why is it a good fit for LLMs? Well, a few  
8:37
reasons. One of the reasons really comes down just  down to the breadth of this solution and what an  
8:44
LLM can do. Now, LLMs are likely pre-trained on  broader and more diverse data sets than SLMs can  
8:52
store in their weights. So, that corpus might span  technical docs and customer service interactions  
8:58
and basically all of the domains that this task  touches. And during pre-training, the model  
9:03
learns patterns and relationships across these  different areas where whereas a SLM train with a  
9:09
specific task in mind like document classification  that might not have the same level of breadth in  
9:15
its training. And I think the other reason really  comes down to generalization. And what I mean by  
9:24
generalization is that customer support queries  have a pretty high variability. So different  
9:31
customers describe the same problems in just  like completely different ways. There are a whole  
9:36
bunch of edge cases and an LLM can generalize to  scenarios it hasn't explicitly seen before because  
9:44
of its broader training has exposed it to more  patterns and more variations. So it can do levels  
9:50
of nuanced reasoning about how concepts relate  even when the specific combination is new. So  
9:56
that's why LLMs work for complex customer support.  There's broad pre-training across multiple domains  
10:02
and there's the ability to generalize across  scenarios with nuanced reasoning. All right.  
10:08
Then finally, frontier models. So the use case  I'm going to go here with is autonomous incident  
10:14
response. So we've got a critical system alert  that has come in at 2:00 a.m. in the morning.  
10:22
Don't they always seem to come in then? At least  in these videos they do. It's never 2 p.m. on a  
10:27
Tuesday when you're caffeinated and ready. always  2:00 a.m. So, so the application servers, they're  
10:33
maybe timing out and the users can't access  the servers. And that normally would wake up  
10:37
an on call engineer who would investigate and fix  it. But what if an AI system could handle it? So,  
10:45
let's figure that out. We've got an alert that  has come in and it has triggered our system,  
10:52
our incident response system that is now going  to process and work on that alert. And the  
11:01
incident response system is of course running on  a frontier model. Now the frontier model needs  
11:09
to query a bunch of things. So it might query  into a monitoring system and it might need to  
11:18
check some logs in order to be able to process  what is going on across multiple services. Then  
11:25
it's going to need to be able to identify the root  cause of what's going on. That would be important.  
11:34
It needs to determine the appropriate fixes that  need to be applied. And then it needs to execute  
11:41
that fix by calling out to a series of APIs,  maybe restarting services and and rolling back  
11:50
a deployment, something like that. So this  is multi-step investigation and execution,  
11:56
and that's the wheelhouse of agentic systems.  Now, to to ground this in a dose of reality,  
12:02
most teams today aren't running fully autonomous  agents yet. what they're running are frontier  
12:10
models as more AI co-pilots with some guardrails  built in and human signoff. So there is also  
12:16
probably a human in the loop here at least today.  But the underlying capability that lives in the  
12:24
frontier scale model. So frontier models they  have very strong agentic capabilities. They're  
12:35
trained to plan multi-step workflows and then to  execute them. They can break down a complex task  
12:40
into steps. They can call the appropriate APIs and  they can evaluate their results. Based on that,  
12:45
they can adjust their approach for the next  step. So, agentic capabilities. There's also  
12:50
a built-in reasoning chain into this whole flow  as well. So system failures like this alert,  
13:01
they require multi-step investigation where each  step kind of builds on what you learned before.  
13:05
And the chain can be pretty long and complex and  and frontier models, they can maintain coherent  
13:11
reasoning across these extended chains, keeping  track of what they've learned, how it connects,  
13:16
and then what to investigate next. So look,  when it all comes down to it, SLM, LLM, and FM,  
13:28
they are all language models and the choice comes  down to matching capability to need. So you might  
13:35
use an SLM when you need speed and low cost or  on-prem control. You might use an LLM when you  
13:45
need broad knowledge and nuance reasoning. And  you might use a frontier model when you need  
13:50
the absolute best complex reasoning for complex  problems. Essentially match the model to the task.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `LLM vs. SLM vs. FM: Choosing the Right AI Model`  ·  visible_channel: `IBM Technology` (1.71M subs)
- visible_url: `youtube.com/watch?v=AVQzG2MY858`  ·  visible_published: `Jan 24, 2026`  ·  visible_views: `64,606`  ·  likes: `1.7K`
- visible_description: *"LLMs, SLMs, FMs—what's the difference? Martin Keen breaks down how AI models like large, small, and frontier models excel at tasks like classification, support, and incident response. Discover their strengths and learn how to pick the right model for your next AI project!"* (plus watsonx AI Assistant Engineer cert promo + code IBMTechYT20)
- ai_generated_summary (visible): *"Learn how Large Language Models (LLMs), Small Language Models (SLMs), and Frontier Models (FMs) differ. This IBM tutorial…"* (quality/accuracy may vary)
- hashtags (visible): `#llm #slm #fm #aimodels`
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_2.11.05_AM-e1eb3c98…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

Process this one, but classify it as model-routing taxonomy, not a breakthrough source.

It overlaps with the prior IBM “AI stack” primer, but it is not the same source. The prior IBM video explained the whole stack: infrastructure, models, data/RAG, orchestration, app layer. This one zooms into which class of model to use for which kind of task: SLM, LLM, or frontier model. That is useful for OMNI.

Core takeaway

The strongest line is:

Match the model to the task.

The video frames SLMs as efficient specialists, LLMs as broader generalists, and frontier models as the highest-capability systems for complex reasoning and agentic workflows. It gives three simple use cases: SLMs for document classification/routing, LLMs for nuanced customer support with multiple data sources, and frontier models for multi-step incident response with tool use and human signoff.

That is simple, but it maps cleanly to OMNI.

OMNI translation
1. This supports OMNI’s model-routing doctrine.

OMNI should not have one default “AI model.”

It should have a model route policy:

SLM / small model: routine classification, routing, tagging, low-risk summarization, metadata extraction, duplicate detection.
LLM / general model: broader synthesis across multiple sources, patient/support-style conversations, provider packet drafting, knowledge reservoir summarization.
Frontier model: high-uncertainty reasoning, multi-domain seam failure, complex clinical-context preparation, architecture/build decisions, agentic incident response.
Deterministic validator: authority, consent, identity, clinical-risk interrupt, domain commit, payment/entitlement, audit.

Keeper:

Use the smallest sufficient intelligence for the job, and escalate when uncertainty, risk, or consequence increases.

2. SLMs are highly relevant to OMNI, not “cheap worse AI.”

This source is useful because it says the quiet part clearly: SLMs are not just bad LLMs. They can be better for narrow, high-volume workflows when speed, cost, governance, and on-prem/private control matter.

OMNI SLM candidates:

intake field classification,
message category routing,
source metadata extraction,
duplicate source detection,
appointment-status classification,
document type tagging,
routing low-risk staff tasks,
classifying “needs human review” vs “routine admin.”

For healthcare, the governance point matters: some models may need to run closer to the data, with fewer external calls, especially when PHI enters the workflow.

3. LLMs fit multi-source support and care coordination, but not final authority.

The video uses customer support as the LLM example because the model must synthesize billing data, configuration data, and ticket history.

OMNI equivalent:

patient message + medication history + provider note + appointment state;
intake answers + labs + eligibility + entitlement;
aftercare concern + procedure performed + photos + prior instructions;
staff note + payment issue + appointment change + documentation status.

That is not a tiny classification task. It needs broader synthesis.

But the OMNI correction:

LLM synthesis creates a candidate understanding, not committed care truth.

4. Frontier models are for complex agentic work — but still need gates.

The incident-response example is very relevant. The video says frontier models are better suited for multi-step investigation: checking monitoring, reviewing logs, identifying root cause, choosing fixes, calling APIs, and adjusting as they learn — but also notes that today many teams still keep human signoff in the loop.

OMNI equivalent:

abnormal clinical context investigation,
failed workflow root-cause analysis,
multi-domain scheduling/payment/document mismatch,
build-agent debugging,
safety incident review,
high-stakes provider packet preparation.

Keeper:

Frontier models may investigate and propose across long chains; OMNI still decides what can be committed.

5. This is a useful counterweight against “frontier model everywhere.”

The source is basic, but it helps reinforce cost/latency/governance discipline.

OMNI should not spend frontier-model reasoning on:

every reminder,
every metadata extraction,
every routing label,
every simple classification,
every routine status update.

That would be expensive, slow, and harder to govern.

Doctrine:

Model quality is workflow-relative, not absolute.

Where it lands

§B AI substrate: medium-to-major. Good model taxonomy and routing logic.

Build OS: major. Model route policy, evals per route, escalation criteria, model regression tests.

CNS / orchestration: major. CNS should decide whether a task is SLM-class, LLM-class, frontier-class, deterministic, or human-review-required.

Clinical safety: major as a caution. Bigger model does not equal authorized action.

Knowledge Reservoirs: medium. SLMs can help classify and route sources; LLMs/frontier models can perform deeper semantic extraction.

Doctrine / primitive pressure

Potential concepts:

model_route_policy
small_model_worker
LLM_synthesis_worker
frontier_reasoning_worker
model_escalation_candidate
task_model_fit
smallest_sufficient_model
risk_weighted_model_route
on_prem_model_route
model_cost_latency_tradeoff
frontier_model_human_signoff
classification_service
incident_response_agent

Keeper doctrine:

OMNI should route tasks to the smallest sufficient model class, escalating only when breadth, uncertainty, consequence, or agentic complexity demands it.

Second keeper:

No model class — small, large, or frontier — owns OMNI authority. Models produce candidates; domains and humans commit.

What not to import blindly

Do not treat SLM/LLM/frontier as fixed categories. Model capabilities change quickly.

Do not use parameter count alone as the routing rule.

Do not assume frontier models are always safer because they are smarter.

Do not assume SLMs are safe just because they are narrow.

Do not let model routing replace clinical-risk policy.

Do not forget evals: each model route needs proof that it performs well on its intended workflow.

Priority / confidence

Priority: 4/5
Confidence: 5/5
Suggested analysis depth: targeted_semantic

This is not a thesis-spine source like Andrew Ng, LangChain, OpenEvidence, Anthropic, or ServiceNow. But it is very useful as a model-routing glossary/checklist for OMNI’s Build OS and CNS.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(I fill later — derived work lives in EVRUN; leave `TK`)*
- EVRUN(s): `TK` · inventory: `TK` · routing_addendum: `TK` · impact §B/§C/security/Build-OS/contract: `TK` · promotion: `TK`

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged §B model-routing/portfolio reference (pairs w/ 069 + 075); IBM-channel; AI-summary + watsonx cert-promo in source.

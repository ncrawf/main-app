# EVSRC-2026-000075 — What Is an AI Stack? LLMs, RAG, & AI Hardware

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: AI-stack explainer); Knox read in §3 Review 001 (verified: taxonomy/shared-vocabulary source). Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000075`  ·  filename: `EVSRC-2026-000075_ibm-mchugh-olende-what-is-an-ai-stack.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=RRKwmeyIc24`
- source_title: `What Is an AI Stack? LLMs, RAG, & AI Hardware`
- channel_or_org: `IBM Technology` (1.71M subs)  ·  series: `IBM explainer` (watsonx cert promo)  ·  published_at: `2025-11-03`  ·  views_at_capture: `307,615`  ·  duration: `9:05`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `explainer / lecture`  ·  source_reliability_context: `academic / vendor-practitioner (IBM Program Director — educational reference content; note IBM watsonx commercial framing)`  ·  topic_tags_light: `[ai_stack, llms, rag, vector_databases, orchestration_layers, ai_hardware, reference_architecture]`  ·  note: `**FIRST IBM-channel source in batch** (not Sequoia); AI-generated summary present; cert-promo video`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Lauren McHugh Olende` · role_in_source: `presenter` · affiliation_at_publication: `IBM (Program Director)` · speaker_type: `vendor-practitioner / educator (IBM Technology)` · authority_context: `relevance on **the canonical "AI stack" reference architecture**: how **LLMs, vector databases, and orchestration layers integrate with AI hardware** to power real-world systems, and how these components enable smarter workflows + reliable AI solutions. Clean structural/educational explainer of the layered AI stack — useful as a shared vocabulary/reference, not a frontier claim` · identity_confidence: `high_from_screenshot`
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `—` (solo explainer)  ·  event_context: `IBM Technology YouTube (watsonx Generative AI Engineer cert promo)`  ·  perspective / conflict notes: `IBM educational content w/ watsonx commercial framing (cert discount code in description). **OMNI relevance: clean layered "AI stack" taxonomy (models / data+vector / orchestration / hardware) is a useful reference vocabulary for §B AI-substrate axis + Build OS model/runtime layering. Educational/foundational, vendor-neutral-ish but IBM-flavored. Good shared-language source; not a differentiated insight.** This is the IBM-corpus shape Nick referenced. Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): IBM Program Director / educational = reliable structural reference, but vendor (watsonx) framing; claims route through evidence → interpretation → gated promotion. Treat as shared-vocabulary reference, weight confidence on structure not vendor positioning.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = AI-stack transcript; §3 = matching taxonomy read) · [x] EVRUN needed? (yes — inventory_only; §B shared-vocabulary / Build OS layering reference) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
Whether you're building an experimental prototype for your own personal use, or creating an
0:05
application to power an entire organization, there are key components of the AI technology stack
0:12
that you must get right to build AI systems that can do more than just generate answers but solve
0:17
real, meaningful problems. Say, for instance, I'm building an AI-powered application to help drug
0:22
discovery researchers understand and analyze the latest scientific papers in their domain. Maybe it
0:28
starts with a model that I recently heard about that is supposed to be better
0:35
at highly complex tasks like that of a PhD researcher. Model is an important layer of the
0:41
stack, but it's just one piece of the puzzle. There's also the infrastructure that that model
0:48
will run on, because not all LLMs, large language models, can run on
0:54
standard enterprise CPU-based servers, and not all are small enough to run on a laptop. So it
1:01
matters what infrastructure you have access to and how you choose to deploy it. Next is data
1:08
because in this example, the whole point is to help scientists understand the latest papers in
1:14
their field. And models typically have a knowledge cutoff date. So if we want to talk about papers
1:20
from, say, the past three months, that means we have to provide the AI system with extra data.
1:26
That will be the data layer. Next would be the orchestration layer. Because to do
1:33
a complex task like this probably is going to require more than simply providing a large prompt
1:40
into the AI system and getting an output, a single output, out. Instead, we'll want to break that user
1:45
query up into different parts. Help um, plan how the AI solution is going to actually
1:53
tackle this problem, what data it needs, and then do the summarization and creating an answer and
1:59
maybe even review that answer. Finally is the application layer. And this is because at the
2:06
end of the day, there's a user using this tool. So there will have to be an interface that defines
2:11
what the inputs will be and what the outputs will be. It might not be as simple as text in and text
2:16
out. And there's also the issue of integrations. So, will the actual results of this be something
2:21
that's integrated into other tools that this user uses? It's important to understand
2:28
all the layers of the AI stack, whether you're building a solution from scratch or using
2:34
solutions which might manage several of these layers for you as a service. This is because
2:39
across the stack, from the hardware, all the way up to the user interface level, the choices you make
2:45
will have important implications on your solution's quality, itsspeed, its cost and its
2:51
safety. When it comes to infrastructure, LLMs generally require AI-specific hardware,
2:58
specifically GPUs, and these can be deployed in one of three ways. The first would be on premise,
3:05
that is, assuming you have the means and resource to buy this kind of infrastructure yourself.
3:12
Second option would be cloud, and that would allow you to rent this capacity and be able to scale it
3:18
up or down as needed. Finally would be local, which usually means on your
3:25
laptop. Not all lap ... laptops can support LLMs of different sizes, but there are certainly LLMs on
3:32
the smaller end of the range that can be run on the kind of GPUs available in a standard laptop.
3:37
The next layer is models. So AI builders have plenty of choice when it comes to what model they
3:44
can use. One dimension to consider is whether the model is open
3:51
versus proprietary. Another dimension is the model
3:57
size. So we have large language models; we also have small language models that might
4:04
be lighter weight and able to fit on more lightweight hardware,uh, but might not have exactly
4:11
the same thinking capacity as a large language model and instead be specialized for more
4:15
specific things. Finally is specialization.
4:26
Which sometimes goes hand in hand with size. Some models might perform better on things like
4:31
reasoning or tool calling or generating code. Others might have different language strengths
4:37
than others. There are plenty of new models over 2 million already in model
4:44
catalogs, like Hugging Face that can serve any mix of these different needs that an AI builder might
4:50
have. The next layer of the stack is data. This breaks up into a few different components,
4:57
so the first would be data sources themselves to supplement the model's knowledge.
5:05
This could also include the pipelines to do any processing,
5:12
pre-processing, post-processing of that data, as well as vector
5:18
databases you may use. Or retrieval systems,
5:25
also known as RAG. Vector databases is the step where that external data is actually vectorized
5:32
into embeddings that are saved so your model can retrieve that context more quickly and augment it
5:37
with this additional knowledge that the base model does not have. That's important because base
5:42
models are usually trained on publicly available information, which might not always be complete to
5:47
accomplish the task that you have. You might need to supplement with additional data. The next layer
5:53
is orchestration, because building an AI system that does something more complex than
6:00
just generating text or answering questions requires breaking the initial user input down
6:06
into smaller tasks. Those can start with things like thinking,
6:13
using the model's reasoning ability to plan out how it will tackle the problem. That
6:20
can also include things like execution, where the model does tool calling
6:27
or function calling, as well as steps like
6:33
reviewing, where an LLM can actually provide its own critique of the initial generated
6:40
responses and initiate feedback loops to even improve those responses. This layer
6:47
is very quickly evolving, with new protocols like MCP and new architectures for how to best
6:53
orchestrate increasingly complex tasks.
6:56
Next is the application layer, so the most widely used AI systems do follow a pretty simple design of text in and text
7:06
out. But as we use these tools in our work in life, there are important features that become critical
7:12
for the actual usability of AI and these factors make up the application layer.
7:17
First factor is interfaces.
7:23
The most classic interface is text in and text out,
7:28
but there are other modalities that can be very valuable for certain tasks too, like image, audio,
7:38
numerical data sets, and plenty of other custom data formats.
7:44
Also, in the interface,
7:45
it's really important to keep in mind the ability to do things like revisions or
7:51
citations so that when the user sees what the model comes up with, they have the ability to edit
7:58
that or inquire on it further. The second consideration is integrations, and that
8:05
comes both in the form of integrations, of allowing other tools that the user uses to
8:12
actually send inputs to the AI system, or to take the
8:19
model outputs and automate how that gets integrated into some of the tools that they use
8:25
in their day-to-day work. All together, these layers of the AI stack, from the
8:32
hardware to the models, the data you use, how you orchestrate it, and the application and the
8:37
usability of it, matter because when we have a clear understanding of how they fit together, we
8:43
can see what's truly possible and make practical choices to design AI systems that are reliable,
8:49
effective and aligned to our real-world needs.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `What Is an AI Stack? LLMs, RAG, & AI Hardware`  ·  visible_channel: `IBM Technology` (1.71M subs)
- visible_url: `youtube.com/watch?v=RRKwmeyIc24`  ·  visible_published: `Nov 3, 2025`  ·  visible_views: `307,615`  ·  likes: `8.9K`  ·  duration: `9:05`
- visible_description: *"🚀 What is an AI stack and why does it matter? Lauren McHugh Olende explains how LLMs, vector databases, and orchestration layers integrate with AI hardware to power real-world systems. Discover how these components enable smarter workflows and reliable AI solutions."* (plus watsonx Certified Generative AI Engineer promo + code IBMTechYT20)
- ai_generated_summary (visible): *"This IBM video explores the essential components of an AI stack, from hardware to applications. It details each layer's function, including models, data, and orchestration. Learn how these elements integrate to build effective and reliable AI solutions."* (quality/accuracy may vary)
- hashtags (visible): `#aistack #llm #ai #machinelearning`
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_2.04.42_AM-6e683f88…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

Not a spine source. Not a breakthrough source.
This is a taxonomy / primer / sanity-check source.

It is useful because it gives a clean, enterprise-friendly map of the AI stack:

infrastructure → models → data/RAG → orchestration → application/interface/integrations

That is basic compared to the Sequoia/Anthropic/OpenAI/LangChain sources, but it is actually helpful as a shared vocabulary source for OMNI. IBM’s speaker is explaining that model choice is only one layer; real AI systems depend on infrastructure, data, orchestration, interface, integrations, cost, speed, quality, and safety.

Core takeaway

The strongest line is:

An AI product is not “a model.” It is a stack.

IBM frames the stack as:

Infrastructure — where the model runs: cloud, on-prem, local, GPU/CPU constraints.
Models — open vs proprietary, large vs small, specialized vs general.
Data — external sources, pipelines, preprocessing, vector databases, RAG.
Orchestration — planning, task decomposition, tool/function calling, review loops, MCP-style protocols.
Application layer — interfaces, modalities, citations, revisions, integrations into user workflows.

That is exactly the kind of “boring map” that keeps people from saying “just add ChatGPT.”

OMNI translation
1. This validates OMNI as full-stack AI architecture, not model wrapper.

This is the main value.

OMNI cannot be:

prompt + model + nice UI.

OMNI needs the full stack:

infrastructure/model routing,
patient/business/clinical data layers,
RAG and authority-labeled retrieval,
orchestration/CNS,
tool calling,
review loops,
integrations,
application/workbench surfaces,
safety and cost controls.

Keeper:

OMNI is not an AI feature. OMNI is a governed AI stack for care/business work.

2. The “data layer” section maps directly to Knowledge Reservoirs.

IBM explains that models have knowledge cutoffs and often need external data, pipelines, vector databases, and RAG to solve real tasks.

For OMNI, the data layer is much more complex than a generic vector DB.

OMNI data includes:

patient identity,
clinical memory,
observations/labs,
D7 documents,
scheduling,
commerce/entitlement,
messages,
care obligations,
provider notes,
external evidence,
human-context research,
staff/operator workflow traces.

The correction:

RAG is not enough. OMNI needs authority-labeled retrieval.

A retrieved chunk must say whether it is raw source, interpreted evidence, promoted doctrine, patient-source, clinical assertion, observation, policy, or historical-only material.

3. The “orchestration” layer is CNS in simple language.

IBM says complex tasks require breaking the user query into parts, planning, finding data, summarizing, answering, reviewing, and possibly using tools/function calls.

That is the simple version of OMNI CNS.

OMNI’s more advanced version:

source event → candidate → context packet → orchestration run → tool calls → review/critique → policy/domain check → human/domain commit/no-op.

So this source supports the idea that orchestration is a separate layer, not just “the model thinking.”

Keeper:

The model reasons; the orchestration layer coordinates work.

4. The “application layer” section is understated but important.

IBM points out that real applications need interfaces, modalities, revision, citations, and integrations.

For OMNI, this becomes:

provider workbench,
patient portal/chat/voice,
operator cockpit,
agent inbox,
evidence review surface,
build-agent cockpit,
clinical review queues,
external agent-facing surfaces,
integrations into rails like Gmail, Slack, EHR, Twilio, Stripe, scheduling, labs.

The key:

A usable AI system is not just answer generation. It is interaction design plus workflow integration.

5. This source is good for teaching Opus / future agents the minimum stack.

This video is not as insightful as Andrew Ng, LangChain, ServiceNow, OpenEvidence, or Anthropic. But it is useful as a baseline checklist.

Future agents should not analyze OMNI’s AI architecture without checking:

where does it run?
what model route is used?
what data sources are retrieved?
what authority labels are preserved?
what orchestration loop executes?
what tools are allowed?
what interface receives the result?
what integrations are touched?
what safety/cost/latency tradeoffs exist?

That is the practical value.

Where it lands

Thesis §B — AI substrate: medium. Good stack taxonomy, but not novel.

Thesis §C — Governed Capability Exchange: medium. Integrations/tool calling/application layer matter, but IBM keeps it generic.

Knowledge Reservoirs: medium-to-major. Helpful for data/RAG vocabulary, but OMNI needs stronger authority labeling.

Build OS: medium. Useful as a minimum architecture checklist.

CNS / orchestration: medium. Confirms orchestration as a layer.

Product surface: medium. Interface, revisions, citations, modalities, integrations.

Doctrine / primitive pressure

Potential concepts worth routing:

AI_stack_layer
infrastructure_layer
model_layer
data_layer
RAG_layer
orchestration_layer
application_layer
interface_modality
integration_surface
revision_affordance
citation_affordance
stack_tradeoff_quality_speed_cost_safety
model_not_product_guardrail

Keeper doctrine:

OMNI must treat AI as a stack: infrastructure, models, data, orchestration, application surfaces, integrations, and safety — not a single model call.

Second keeper:

Generic RAG retrieves context; OMNI retrieval must return authority-labeled context.

What not to import blindly

Do not treat IBM’s stack as sufficient for healthcare. It is generic.

Do not reduce OMNI’s data layer to vector databases.

Do not treat orchestration as merely task decomposition; OMNI also needs authority, policy, domain commit, audit, and human review.

Do not assume “citations” are enough. OMNI needs provenance, freshness, authority, applicability, and adoption state.

Do not let infrastructure/model/application vocabulary flatten the care-specific truth layers.

Do-not-miss lesson

The model is one layer. The product is the stack.

OMNI-specific:

OMNI should be built as a governed care/business AI stack, where models sit inside infrastructure, data, orchestration, application surfaces, integrations, and deterministic authority boundaries.

Priority / confidence

Priority: 3.5/5
Confidence: 5/5
Suggested analysis depth: targeted_semantic

I would route this as a baseline taxonomy / glossary source, not a major spine source. It is useful for grounding the stack vocabulary, especially when explaining OMNI to future agents or nontechnical collaborators.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus deep-read extraction  ·  layer: `analysis_nonbinding`  ·  EVRUN-2026-000001 (G12 IBM explainers)
- reviewer: `Opus` · type: `AI assistant` · at: `2026-06-08` · purpose: `registry-first concept extraction → routing` · binds nothing (`GRD-036`/`GRD-044`)

**18 clusters. IBM "What is an AI stack." Lens-B teaching vocabulary — 0 net-new spine/primitives; AFFIRMS existing clusters. OMNI delta = the authority/commit family IBM omits.**
1. **AI stack as layered reference architecture** — AI product = stack (infra→models→data→orchestration→application); OMNI = governed care/business AI stack not prompt wrapper. §B/§3.5 (IBM Lens-B comparator), CNS (orchestration = separate layer; AFFIRM scope), Build-OS minimum-stack checklist, KR (data tier w/ stronger governance). "all the layers of the AI stack" 2:28. **AFFIRM → vocabulary → watch.**
2. **Infrastructure layer (where models run)** — GPU/AI-hardware; on-prem/cloud/local; OMNI consumes inference infra behind envelopes (route by latency/cost/risk/residency). §B/§3.5 (dedupe 064/069/076), CNS routing-layer, security (on-prem→residency/inspectability). "deployed in one of three ways" 2:58. **AFFIRM → vocabulary → watch.**
3. **Model layer (open/proprietary · size · specialization)** — model = ONE piece; AFFIRMS model-plurality/speciation (route by task/latency/cost/risk/competence). §B/§3.5 (dedupe 076→064/065/073), CNS (model selection = orchestration decision), KR (models ≠ reservoirs). "open versus proprietary" 3:51. **AFFIRM → vocabulary → watch.**
4. **Model-not-product guardrail** — "just one piece of the puzzle"; OMNI is NOT an AI feature or model wrapper — governed stack for care/business work. §B/§3.5 (sharpen §B opening), CNS (model generates; CNS+domains commit), Build-OS (Build Entry Gate rejects 'model+UI'), KR (truth in domains not weights). "just one piece of the puzzle" 0:41. **AFFIRM → vocabulary (high teaching value) → watch.**
5. **Data layer (sources/pipelines/preprocessing/vector stores)** — maps to KR family but OMNI data layer FAR richer (identity/CM/obs/D7/scheduling/commerce/messages/care-obligations/external-evidence/operator-traces). §B/§3.5, CNS (orchestration finds; domains/reservoirs own truth), Build-OS (Evidence Plane + promotion gates = OMNI data-layer pattern), KR PRIMARY (sharpen w/ authority classes FWREG-007), security (PII/consent boundaries — OMNI-specific). "data sources to supplement" 4:57. **PARTIAL → vocabulary (authority-label delta) → watch.**
6. **RAG / vector retrieval (generic vs authority-labeled)** — RAG = embed→store→retrieve→augment; **OMNI delta: retrieval must return AUTHORITY-LABELED context**; retrieval finds candidates not authority (GRD-042). §B/§3.5 (OMNI delta = 6th authority/commit family), CNS (typed+provenance context packets), KR PRIMARY sharpening (production-RAG ≠ OMNI reservoirs), security (reject silent promotion to clinical truth). "retrieval systems, also known as RAG" 5:18. **AFFIRM/PARTIAL→sharpen → vocabulary → watch.**
7. **Knowledge cutoff & domain supplementation** — AFFIRMS freshness/recency first-class; OMNI longitudinal mandate makes cutoff STRUCTURAL. §B/§3.5, CNS (recency per field), Build-OS (Evidence Plane capture dates + promotion state), KR `literature_recency_state` FWREG-006/007. "models typically have a knowledge cutoff date" 1:14. **AFFIRM → vocabulary → watch.**
8. **Orchestration layer (plan/decompose/execute/review)** — IBM's plain-language CNS: event→candidate→context-packet→run→tool-calls→review→policy/domain-check→commit/no-op. "model reasons; orchestration coordinates work." §B/§3.5 (dedupe 075→077/059/087), CNS PRIMARY AFFIRM HOST, Build-OS (loop agents declare orchestration graph), capability-topology (tool calls = §C governed), security (policy/domain checks = OMNI additions IBM omits). "break that user query up into different parts" 1:40. **AFFIRM → vocabulary → watch.**
9. **Agentic feedback loops & LLM self-critique** — bounded critique/review loops in CNS/Build-OS (eval recipes, driver/sim/critic 049/070) — always subordinate to authority gates + human/domain commit. §B/§3.5, CNS (critique → candidates; commit gated), Build-OS (closed-loop eval before promotion), security (self-critique ≠ safety case). "LLM can provide its own critique" 6:33. **AFFIRM → vocabulary → watch.**
10. **MCP & evolving orchestration protocols** — AFFIRMS MCP as §C integration protocol (commodity wire format) NOT trust (pairs 061 'MCP ≠ trust'). §B/§3.5 (MCP Lens-B), CNS (tool transport; authority layer approves), capability-topology PRIMARY HOST, security (MCP gateway/allowlists/shadow-server audit). "new protocols like MCP" 6:47. **AFFIRM → vocabulary → watch.**
11. **Tool / function calling (execution sub-layer)** — maps to §C GCE: neural proposes tool use; deterministic layers + authority gates commit. §B/§3.5, CNS (tool calls logged/scoped/consented/audited), capability-topology PRIMARY HOST, security (least-privilege grants/AI-gateway). "execution, where the model does tool calling" 6:20. **AFFIRM → vocabulary → watch.**
12. **Application layer (interfaces/modalities/usability)** — maps to P5 surfaces/projections (provider workbench/patient portal-chat-voice/operator cockpit/agent inbox/review queues); usable AI = interaction design. §B/§3.5, CNS (surfaces receive outputs as proposals), Build-OS (build-agent cockpit/evidence workbench), security (modalities expand attack/consent surface). "Finally is the application layer" 1:59. **AFFIRM → vocabulary → watch.**
13. **Revision affordance & citation affordance (trust UX)** — OMNI delta: needs provenance/freshness/authority/applicability/adoption-state — citations alone INSUFFICIENT for care (068). §B/§3.5 (citation vs governed-provenance-packet), CNS (outputs carry adoption/review state), KR (authority labels per chunk), security (prevent citation-washing). "citations so that when the user sees" 7:51. **PARTIAL → vocabulary → watch.**
14. **Integrations (bidirectional workflow embedding)** — core §C/capability-topology mandate — OMNI as substrate coordinates rails (EHR/email/Slack/billing/scheduling); integrations = governed capability edges w/ care-governance semantics. §B/§3.5 (Shopify/RingCentral Lens-A → governed exchange), CNS (handoffs = orchestrated commits/events), capability-topology PRIMARY HOST, security (OAuth/delegation/non-human-identity/audit). "send inputs to the AI system" 8:12. **AFFIRM → vocabulary → watch.**
15. **Cross-stack tradeoffs: quality/speed/cost/safety** — AFFIRMS inference-budget/cost-discipline + safety-as-architecture (not bolt-on). §B/§3.5 (four-factor frame), CNS (route by latency/cost/risk), Build-OS (proving grounds measure quality/speed/cost; care adds safety-case gates), security (safety fourth factor → zero-trust/gateway). "quality, its speed, its cost and its safety" 2:45. **AFFIRM → vocabulary → watch.**
16. **Build vs buy / managed multi-layer services** — OMNI builds governed substrate core, consumes commodity AI infra/models/protocols behind boundaries. §B/§3.5 (consume-commodity/own-moat), CNS (managed vendors subject to authority gates), Build-OS PRIMARY (build-entry criteria; prove ownership of evals/guardrails), security (vendor-managed ≠ trusted; zero-trust). "manage several of these layers for you as a service" 2:34. **AFFIRM → vocabulary → watch (reject watsonx chrome).**
17. **★IBM Lens-B teaching vocabulary & authority-family omission (OMNI delta)** — IBM = enterprise-friendly shared map, NOT frontier insight; watsonx-framed (GRD-039). **★Critical OMNI delta: generic AI stack maps OMIT a 6th governance family — identity/consent/source-authority/human-review/policy-envelope/domain-commit/audit/revocation — OMNI must keep explicit atop IBM's five layers.** §B/§3.5 PRIMARY (append IBM explainer series row), CNS (IBM confirms layer, OMNI adds gates), Build-OS ('name your layer + authority gate' checklist), KR (authority labeling = OMNI moat over IBM data layer), security (don't import generic enterprise security as sufficient for healthcare). (Knox) "do not treat IBM's stack as sufficient for healthcare". **AFFIRM/PARTIAL → vocabulary (delta = spine sharpening hosted elsewhere) → watch (reject spine promotion of IBM claims).**
18. **Minimum-stack agent checklist (Build-OS onboarding scaffold)** — Knox preflight: where runs? model route? data retrieved? authority labels preserved? orchestration loop? tools allowed? interface? integrations? safety/cost/latency? Non-binding Build-OS/agent boot-review scaffold — discipline not architecture. §B/§3.5 cross-ref, CNS (mirrors run lifecycle fields), Build-OS PRIMARY (admission/review template), KR (authority-label column mandatory), security (safety/cost/latency column mandatory). "clear understanding of how they fit together" 8:37. **ABSENT as named checklist → vocabulary (procedural artifact) → watch (Build-OS template candidate).**

**Net-new (075): NONE confirmed.** All AFFIRM/sharpen existing (CNS-orchestration 077/059/087; KR/authority-labeled-retrieval FWREG-007/068; model-plurality/inference-budget 064/065/073/076; §C/MCP 061+security; Surface/projection plane). Only OMNI-specific sharpening (6th authority/commit family) already captured in registry G12 — not a new primitive from 075. **Reread:** FWREG-007 contract (clusters 5-6 data/RAG vs authority-labeled retrieval — reopen 5:18–5:47 + 'RAG is not enough'); CNS contract pass (clusters 8-11 orchestration/critique/MCP/tools — 5:53–6:53 alongside 077/059; don't let generic orchestration flatten CNS); §C/capability-topology gate (MCP 6:47 with 061 'MCP ≠ trust'); clinical/evidence surfaces (cluster 13 citations with 068 — citations ≠ clinical adoption); G12 batch dedupe (single §3.5 comparator row); watsonx vendor chrome = reject.

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(I fill later — derived work lives in EVRUN; leave `TK`)*
- EVRUN(s): `TK` · inventory: `TK` · routing_addendum: `TK` · impact §B/§C/security/Build-OS/contract: `TK` · promotion: `TK`

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged **first IBM-channel source** (AI-stack reference vocabulary for §B / Build OS layering); AI-summary + watsonx cert-promo in source.

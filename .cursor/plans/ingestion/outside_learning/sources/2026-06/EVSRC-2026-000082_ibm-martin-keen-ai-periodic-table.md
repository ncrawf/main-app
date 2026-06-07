# EVSRC-2026-000082 — AI Periodic Table Explained: Mapping LLMs, RAG & AI Agent Frameworks

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: AI periodic table); Knox read in §3 Review 001 (verified: component-taxonomy / reaction-grammar map). Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000082`  ·  filename: `EVSRC-2026-000082_ibm-martin-keen-ai-periodic-table.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=ESBMgZHzfG0`
- source_title: `AI Periodic Table Explained: Mapping LLMs, RAG & AI Agent Frameworks`
- channel_or_org: `IBM Technology` (1.71M subs)  ·  series: `IBM explainer` (watsonx cert promo)  ·  published_at: `2026-01-05`  ·  views_at_capture: `227,160`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `explainer / lecture`  ·  source_reliability_context: `academic / vendor-practitioner (IBM Master Inventor — educational taxonomy/framework mapping)`  ·  topic_tags_light: `[ai_periodic_table, taxonomy_of_ai, llms_rag_agents_frameworks, how_components_connect, scalable_ai_systems, reference_map]`  ·  note: `IBM-channel source (8th of corpus); AI-generated summary present; cert-promo video`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Martin Keen` · role_in_source: `presenter` · affiliation_at_publication: `IBM (Master Inventor)` · speaker_type: `vendor-practitioner / educator (IBM Technology)` · authority_context: `relevance on **a unifying taxonomy/map of AI components**: introduces an **"AI Periodic Table"** breaking down **LLMs, RAG, AI agents, and frameworks** into a clear, simple structure; how these **elements connect to power smarter, scalable AI systems** and "rethink how AI fits together." Synthesis/mental-model source — useful as an organizing map across the other §B sources` · identity_confidence: `high_from_screenshot`
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `—` (solo explainer)  ·  event_context: `IBM Technology YouTube (watsonx Data Scientist cert promo)`  ·  perspective / conflict notes: `IBM educational content w/ watsonx framing. **OMNI relevance: a "periodic table" / unifying map of AI components (models, RAG, agents, frameworks + how they connect) is a useful synthesis/organizing lens for §B AI-substrate axis — complements the AI-stack (075), model-routing (076), and orchestration (077) sources by showing how pieces fit. Good map/vocabulary source; not differentiated insight.** Recent (2026-01). Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): IBM Master Inventor / educational = reliable organizing map; claims route through evidence → interpretation → gated promotion. Treat as a synthesis/vocabulary reference.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = periodic-table transcript; §3 = matching taxonomy read) · [x] EVRUN needed? (yes — inventory_only; §B organizing-map — complements 075/076/077) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
Does the world of AI feel a bit like this to you? A thousand terms all flying around.
0:07
Everyone's talking about agents and RAG and embeddings and guardrails, and you're just kind of
0:12
supposed to know how it all fits together. Well, how about we put a structure to all this chaos?
0:18
What if we could organize AI like chemistry organizes the elements into families and periods
0:25
and predictable reactions? Well, welcome to the AI periodic table. Now, a quick
0:32
disclaimer. There is no official AI periodic table like there is in chemistry. This is my take on
0:38
what the structure could look like, but once you understand it, you can basically decode any
0:45
AI architecture, any product demo, any event, the pitch. You'll see which elements they're
0:52
using, how they connect, and then maybe even what might be missing. So let's fill in this
0:59
table starting at the top. So, you know what a prompt is, right? Well, that's my first
1:05
element, Pr. Now a prompt contains instructions that you give to an AI, like
1:12
write me an email or summarize this document or explain quantum physics. And where this sits
1:19
actually matters. So this element sits in a particular row, row
1:26
number 1. And row number 1, this represents primitives.
1:33
Now you can't really break prompting down any further than this. You could say that it's
1:40
atomic. And then, this also sits in a column as well, which we're going to call groups or families.
1:46
So this is G1. And G1 is reactive,
1:54
because prompts are reactive. You change one word in your prompt. Well you're going to get a
1:59
completely different output. So that's the, uh, the made up element of Pr for prompting.
2:06
But prompting isn't alone in this group. It has a family of elements that get more
2:13
reactive as you go down. And it's not alone in this row either. So we're going to map out five
2:20
families across the top. And then we've got four rows down the side. And then you see these
2:26
empty spaces here. Well, they're there for a reason and we'll get to that. But let's fill in the rest
2:33
of the primitives, row number 1. So what's the next element? Well the next element is
2:40
Em. That's for embeddings. So if you've heard of vector databases or semantic
2:46
search, you've probably bumped into embeddings because they are numerical representations of
2:52
meaning. So you take some text, like the cat sat on the mat, and you can turn that text into a list
2:59
of numbers that capture its meaning, and similar meanings get similar numbers.
3:05
It's still in row 1. It's a primitive, but this is in group two now, and we're going to
3:12
call group two the retrieval family, because now we are actually
3:19
retrieving stuff. Embeddings are how AI systems search and remember. Okay now, we're going to
3:26
skip ahead to the end here to the next element. That's the element of Lg,
3:33
the large language model, the LLM, you know, like ChatGPT and Claude and IBM Granite, you know,
3:39
these. And this goes all the way over here into this family, which we're calling G5.
3:46
And G5 is the models family. These are well,
3:53
kind of the noble gases, these stable foundational capabilities that everything else
3:59
reacts around. And notice that row 1 here, it only has three elements prompts and
4:06
embeddings and LLMs. That's it. And that's because in some ways, everything else in AI
4:13
is built from combining these primitives. All right. Let's move on to row number
4:20
2 now. And the first element here is the element of Fc.
4:27
That's function calling. So this is when your LLM calls a tool before giving an answer. So perhaps
4:34
it invokes an API. If you ask a model what's the weather. Well the model is going to call a weather
4:41
API to give you some real data. So it's still in the reactive family group one it's making things
4:47
happen and taking action, but it's not a primitive anymore. So this is row
4:54
2. And row 2 is all about compositions. You need
5:01
a model and structured output and tool integration that makes a composition,
5:07
and watch how the reactive family continues to evolve. So down here, we've got the
5:14
element Ag. That's agents. Now these use think-act-observe
5:20
loops. So the AI plans it, takes an action maybe using function calls, and it observes the result.
5:27
And it keeps going until it reaches a goal. And that is row 3,
5:33
which is all about deployment, putting these things actually into production.
5:40
So look at the progression we've got here from prompt to function to agent. Or
5:47
we could say from control to action to autonomy. That's the reactive family.
5:55
All right, let's fill in the rest of row 2 here. So the next element that is the element
6:02
of Vx, vector databases. These are data stores
6:08
optimized for semantic search. You can store millions of embeddings and then query them to
6:13
find the most relevant ones. This is group two now the retrieval family. Because vector databases are
6:20
storage for semantic search. You compose embeddings, that's why it's row 2,
6:26
into a vector store. Okay. What's next? Well, the element of Rg,
6:34
that's RAG, retrieval augmented generation, one of my favorites. done a bunch of videos on this.
6:40
So you have a question. The system retrieves relevant context from your documents using
6:45
embeddings and vector databases. Then, it augments the prompt with that context. Then, the LLM can
6:52
generate an answer based on what it retrieved. So where does that go? Which family? It's going to go
6:58
under the family of G3, which is the orchestration family?
7:05
Because RAG orchestrates multiple elements together, embeddings and vector stores and models.
7:11
And notice that there is no primitive here in row 1. Because you can't really
7:17
orchestrate one thing. Orchestration only emerges when you're combining multiple pieces. Okay,
7:24
next in row 2, we have the element of Gr. That's guardrails. So we're
7:31
talking runtime, safety filters, maybe schema validation. Basically just making sure that the AI
7:38
doesn't say something that it shouldn't do or just kind of output pure garbage. And that sits
7:43
under the group four, which is all about validation. And
7:50
then rounding out row 2, the last element is Mm. That's
7:57
for multi-modal models. So these are LLMs that can kind of process images. And they can
8:04
process audio as well as being able to read text. So it's still column five, the
8:10
models family. And that is row 2 complete. We've got five compositions that
8:17
honestly, basically power most AI systems today. These guys. All right, let's finish
8:23
row 3. So we had Ag for agent. The next element is Ft
8:30
for fine tuning. So you take a base model, and then, you adapt it. You train it on your specific
8:37
data, on your domain, on your use case, like fine tuning on medical papers or on your company's
8:43
codebase. Now it's under the retrieval family because fine tuning is adaptation. It's baking
8:50
memory directly into the model's weights. So look at that column. Now we've got
8:56
embeddings, which encode meaning. We've got vector databases, which store for search. And then
9:03
we've got fine tuning, which stores in parameters. So three time scales of
9:09
memory. Okay. Next up is Fw. That stands
9:16
for framework. So we're talking about things like a LangChain. These are the platforms that tie
9:23
everything together to build and deploy AI systems. So very much under the orchestration
9:29
family. Next is Rt. That's red teaming. This is
9:35
adversarial testing where we're basically trying to break the AI. So jailbreaks and prompt
9:41
injection and data exfiltration. It's under the validation family. And then under models, let's
9:48
also throw in the element of Sm. That's for small models.
9:54
Distilled specialized models. They're fast, they're cheap. They maybe run on your phone. All right,
10:01
one last row. And first up is the element of Ma. That
10:08
is multi-agent, multi-agent systems. So this is not one AI. It's multiple
10:15
AIs that are all working together. They're debating and collaborating and specializing. So
10:20
maybe one agent does the research, one does the writing, one critiques all of it, and they
10:25
coordinate to solve complex problems. So this is a new row. It's row number 4. And
10:32
I'm going to call row number 4 emerging. Now this is not science fiction.
10:39
It's stuff that's happening now but it is still rapidly evolving. This is the
10:46
reactive family kind of taken to the extreme right. So what else can we add to this row? Well, I
10:53
would argue we could put Sy here for synthetic data. This is using AI
10:59
to generate training data for AI, which yeah, sounds kind of weird, but it works. if
11:06
you can't get enough real examples, you can generate synthetic ones now. This is not new, but
11:13
it is emerging because as we hit the limits of available data for AI to train on, more and more
11:19
is being done with synthetic data. All right. Notice there's a gap here. I think
11:26
there's really no clear emerging orchestration paradigm yet, at least to my eyes. What goes beyond
11:33
frameworks here? Well, I should be curious to to learn what you think would fill in that gap at
11:38
some point. Anyway, moving on, the next element is In. The interpretability.
11:44
So this is about understanding why a model does what it does, kind of peaking inside of the black
11:51
box and finding the neurons responsible for specific behaviors. And it's in the validation
11:56
family as this is frontier safety work. And then rounding things out, we have the element
12:03
of Th. This is for thinking models, models that don't answer immediately. They spend time
12:10
reasoning. There's basically a chain of thought built directly into the architecture. Test time
12:16
compute scaling. These are the smartest models today. Those are the ones that tend to be thinking
12:22
models. So there it is, the AI periodic table. At least my
12:29
attempt at it. But periodic tables aren't just for memorization.They're for predicting
12:36
reactions. And let me show you how these elements combine. So I'm going to show you two reactions.
12:43
But any AI system could be modeled here. So first let's build a chatbot that knows your company's
12:49
documentation. It's one of the most common patterns in production AI. So it starts with the
12:55
element Em, embedding. So you take your documents and you turn them into vectors. And
13:02
then, you store them. Where do you store them? In the element of Vx, into vector
13:09
databases. Now when a user asks a question, we use RAG. That's the element
13:16
Rg. And that is going to query the vector database and
13:23
retrieve the relevant chunks. And those chunks augment the prompt here the
13:30
Pr element. And that gets sent to the large
13:36
language model, the Lg to generate an answer that's grounded in your data. So we've
13:43
got these five elements here, all combining. And actually smart companies are going to probably
13:49
add in one more element as well. And that is the element Gr of guardrails. Because this kind of
13:55
wraps the whole thing in safety filters and makes sure that the model isn't going to be leaking
13:59
sensitive information. So that that's production RAG. All right. One of the
14:06
reaction I wanted to show you, which is the agentic loop. So you give the AI a goal. Let's
14:12
say the goal is book me a flight to Tokyo next month under $800. So the element we're going to
14:18
use for that is Ag. Now the Ag agent is going to take that
14:25
goal, and it's going to break it down. So first, the agent needs to search flights, then check the
14:29
calendar, then compare prices and then book. So to do that it uses
14:36
Fc, function calling. Function calling calls external tools. So the flight APIs, the
14:42
calendar APIs and the payment systems. And then, the agent observes the results and decides the
14:48
next action. So this is basically a loop that goes back and forth here.
14:55
Think. Act. Observe. Think. Act. Observe. So that's the start of the reaction.
15:01
But you might also build and deploy this using a framework. And that
15:08
framework kind of gives you all of the plumbing you need for this loop. So we've got here the Ag
15:14
element that's looping around Fc. And it's deployed into Fw into the
15:21
framework. That's the agentic reaction. And there are so many different reactions we could show
15:27
here. AI image generators, for example, which use the prompt as the text description, which is then
15:33
sent to a multi-modal model to output an image or code assistants, which are
15:40
fine tuned on code, which is then used to build a prompt with the context and is then processed
15:47
by the large language model, the Lg to generate completions. They all basically fit somewhere in
15:53
here. So here's your challenge. Next time somebody pitches you with a fancy new AI feature,
15:59
or a new AI product, or even an AI startup idea, try mapping it to this
16:06
table. What elements are they using? What reactions are they running? Are they missing a safety
16:12
element? Are they over-engineering the orchestration? Are they using a thinking model
16:17
when perhaps a small model would just do the job just as well? It's, it's all right here, a way to
16:23
categorize and link all of these AI terms we talked about at the beginning. So what do you
16:30
think? Will we be seeing a version of this plastered on school classroom walls like the real
16:35
periodic table at some point? Let me know in the comments.



&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `AI Periodic Table Explained: Mapping LLMs, RAG & AI Agent Frameworks`  ·  visible_channel: `IBM Technology` (1.71M subs)
- visible_url: `youtube.com/watch?v=ESBMgZHzfG0`  ·  visible_published: `Jan 5, 2026`  ·  visible_views: `227,160`  ·  likes: `9.8K`
- visible_description: *"What if AI had its own periodic table? Martin Keen introduces the AI Periodic Table, breaking down LLMs, RAG, AI agents, and frameworks into a clear, simple structure. Discover how these elements connect to power smarter, scalable AI systems, and rethink how AI fits together."* (plus watsonx Data Scientist cert promo + code IBMTechYT20)
- ai_generated_summary (visible): *"Explore an AI periodic table, classifying LLMs, RAG, and AI agent frameworks. This IBM video uses a unique visual system to categorize AI concepts. Learn how these elements combine to build complex AI systems."* (quality/accuracy may vary)
- hashtags (visible): `#ai #llm #retrievalaugmentedgeneration #aiagents #aiframeworks`
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_2.31.13_AM-5e04033b…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

AI component taxonomy / reaction-grammar source, not a thesis-spine source.

It overlaps with the prior IBM “AI stack” and “LLM vs SLM vs frontier model” videos, but it adds something useful: a compositional map. The earlier IBM stack video said, “AI is layers.” This one says:

AI systems are built by combining reusable elements into reactions.

That is a better mental model for OMNI than just memorizing terms.

Core takeaway

The useful idea is:

AI architecture can be understood as primitives, compositions, deployed systems, and emerging patterns — combined into repeatable reactions.

IBM’s “periodic table” organizes AI pieces into rows and families:

Primitives: prompt, embeddings, LLM.
Compositions: function calling, vector databases, RAG, guardrails, multimodal models.
Deployment patterns: agents, fine-tuning, frameworks, red teaming, small models.
Emerging patterns: multi-agent systems, synthetic data, interpretability, thinking/reasoning models.

Then it shows “reactions,” like production RAG:

embeddings + vector database + RAG + prompt + LLM + guardrails

and agentic loops:

agent + function calling + framework + think/act/observe loop.

That is not groundbreaking, but it is useful.

OMNI translation
1. This supports an “AI reaction grammar” for OMNI.

This may be the best thing to extract.

OMNI should not talk about “AI” as one blob. Every OMNI AI workflow should be decomposable into its actual components.

For example, a patient-message triage flow might be:

source event + authority-labeled context packet + retrieval + risk classifier + model route + guardrail + draft + critic + human review + domain commit/no-op

A source ingestion flow might be:

raw source + metadata extraction + authority label + semantic extraction + routing candidate + review gate + promotion/no-op

A build-agent flow might be:

task spec + repo context + model route + tool calls + test runner + critic + proof artifact + human review

Keeper:

Every OMNI AI feature should be decomposed into its reaction, not described as “the AI does it.”

2. This helps prevent architecture fog.

The video’s challenge is: when someone pitches an AI feature, ask what elements they are using, what reaction they are running, what safety is missing, and whether they are over-engineering.

That is directly useful for OMNI.

When evaluating an OMNI idea, ask:

Is this just prompt + LLM?
Does it need RAG?
Does retrieval carry authority labels?
Does it need function calling?
Does function calling need approval?
Does it need an agent loop, or is a chain enough?
Does it need a thinking model, or is a small model enough?
Where are guardrails?
Where is red-team coverage?
Where is human/domain commit?

Keeper:

A feature that cannot name its AI reaction is not build-ready.

3. The “missing emerging orchestration paradigm” is interesting.

The video leaves a gap for what comes after frameworks in emerging orchestration. That is actually where OMNI has been circling.

For OMNI, the answer may not be just “better framework.” It may be:

governed orchestration substrate

Meaning:

event-driven CNS,
durable orchestration runs,
action candidates,
authority-labeled context packets,
policy gates,
human review queues,
domain commit APIs,
audit trace,
model/tool routing,
defensive AI gateway.

This is more than LangChain/LangGraph. It is orchestration plus authority.

Potential keeper:

OMNI’s emerging orchestration element is not a framework. It is governed CNS runtime.

4. The table is missing authority as a first-class family.

This is the hard push-back.

IBM includes guardrails, red teaming, and interpretability under validation, which is helpful. But for OMNI, that is not enough.

Healthcare/care-business systems need a separate authority/governance dimension:

identity,
consent,
source authority,
clinical adoption,
human review,
policy envelope,
domain commit,
audit,
revocation,
patient/provider/operator visibility.

So if OMNI made its own AI periodic table, it would need more than IBM’s groups.

IBM groups:

reactive, retrieval, orchestration, validation, models

OMNI needs:

reactive/action, retrieval/memory, orchestration, validation/security, models, authority/commit

Keeper:

Generic AI tables have validation. OMNI needs authority.

5. “Guardrails wrap production RAG” is useful but insufficient.

The video says smart companies add guardrails to production RAG to prevent sensitive leakage or bad output.

For OMNI, that becomes:

Guardrails are necessary but not sufficient.

OMNI needs:

authority-labeled retrieval,
source provenance,
freshness,
clinical applicability,
visibility rules,
PHI controls,
output scanning,
human review,
domain commit separation.

A guardrail after RAG cannot fix bad source authority or wrong clinical adoption state.

6. The “thinking model vs small model” challenge reinforces model routing.

The video asks whether a product is using a thinking model when a small model would do the job.

That belongs in OMNI Build OS.

Do not use frontier reasoning for everything. Do not use small models where consequence is high.

The routing rule stays:

Use the smallest sufficient model for the workflow, but escalate when uncertainty, consequence, or domain risk increases.

7. This is useful for future agents auditing OMNI designs.

A future build agent could use this as a checklist:

“Name the reaction. Name the model route. Name the retrieval layer. Name the tools. Name the validation. Name the authority gate. Name the commit boundary.”

That is valuable.

It turns fuzzy AI architecture into inspectable components.

Where it lands

§B AI substrate: medium. Good vocabulary and compositional model.

Build OS: major. Useful as an architecture-review checklist for AI workflows.

CNS / orchestration: medium-to-major. Helps distinguish chain, RAG, agent, framework, multi-agent, thinking model.

Knowledge Reservoirs: medium. Supports production RAG mapping, but OMNI must add authority labels.

§C Governed Capability Exchange: medium. Function calling and agents imply tools/actions, but IBM does not go deep enough on permissions.

Security/governance: medium. Guardrails/red-teaming appear, but OMNI must strengthen with AI gateway, least privilege, identity, and commit boundaries.

Doctrine / primitive pressure

Potential concepts:

AI_reaction
AI_component_map
reaction_grammar
production_RAG_reaction
agentic_loop_reaction
component_family
primitive_component
composition_component
deployment_component
emerging_component
authority_family
governed_CNS_runtime
feature_reaction_spec
AI_architecture_checklist

Keeper doctrine:

Every OMNI AI workflow should declare its reaction: components used, context retrieved, tools called, model route, validation, authority gate, and commit boundary.

Second keeper:

IBM’s table is useful for AI components, but OMNI needs an added authority/commit dimension because care workflows are not just generated outputs — they change truth, responsibility, and action.

What not to import blindly

Do not adopt IBM’s periodic table as OMNI doctrine.

Do not treat “guardrails” as a complete safety architecture.

Do not reduce OMNI orchestration to LangChain/framework plumbing.

Do not let “agent” imply autonomy without authority gates.

Do not treat fine-tuning as memory truth.

Do not over-engineer every workflow into multi-agent systems.

Do not use taxonomy work as a substitute for building the wedge.

Priority / confidence

Priority: 3.5/5
Confidence: 5/5
Suggested analysis depth: targeted_semantic

Route this as a taxonomy/checklist source. The useful extraction is not the exact periodic table. It is the compositional discipline:

Stop saying “AI feature.” Name the reaction.

OMNI-specific keeper:

Generic AI reacts through prompts, retrieval, tools, models, and guardrails. OMNI reacts through all of that plus authority, policy, human review, and domain commit.

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
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged §B synthesis/organizing-map (complements 075/076/077); IBM-channel; AI-summary + watsonx cert-promo in source.

# EVSRC-2026-000283 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed` · covered · semantic_fidelity=`restored`** (2nd-reader signed 2026-07-19; keeper #16 restored)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000283_TK.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(from Knox §3 Review-001 rough-metadata; no screenshot — inferred)*
- evsrc_id: `EVSRC-2026-000283`  ·  filename: `EVSRC-2026-000283_boinodiris-risk-appropriate-ai-architecture.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=3G6AVkp4Rf0`  ·  source_title: `Why Risk Should Determine Your AI Architecture`
- channel_or_org: `IBM Technology`  ·  speaker: `Phaedra Boinodiris`  ·  published_at: `2026-07-16`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste (metadata from Knox; no screenshot)`
- content_type: `responsible-AI architecture explainer / risk-governance keynote`  ·  source_reliability_context: `practitioner (senior; vendor educator)`  ·  topic_tags_light: `[risk_driven_architecture, principle_operationalization, functional_requirements, explainability_tiers, auditability, contestability, defensibility, provenance, clinical_AI, accountability, governance_by_construction, OMNI_Reactor]`

## §0.1 — People / authorship / authority context  *(from Knox §2; identity_confidence = inferred)*
- primary speaker(s):
  - name: `Phaedra Boinodiris` · role_in_source: `speaker/presenter` · affiliation_at_publication: `IBM (responsible-AI / enterprise-governance practice)` · speaker_type: `practitioner/educator` · authority_context: `strong for governance framing + principle→requirement translation; NOT original empirical research or binding regulation` · identity_confidence: `inferred`
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `n/a (single presenter)`
- event_context: `explainer / keynote`  ·  perspective / conflict notes: `IBM commercial interest in trustworthy-AI / governance consulting + tooling; conceptual mechanism useful, no product/benchmark validated`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
I was in a conversation recently with a public sector leader.
0:03
They told me AI is so easy to build now.
0:06
We can just have an AI build an AI and they're not wrong.
0:10
A lot of things are easy to built badly because there's easy AI and there is risk appropriate AI.
0:19
And those two, they are not the same thing.
0:23
Most teams approach this backwards.
0:25
They build the system then ask who should oversee it?
0:29
And when governance fails, when someone needs an explanation, when the model drifts,
0:34
when a person or a reputation is harmed, they realize the architecture was
0:39
never designed to support the oversight they claimed to want.
0:45
This is the relationship that matters.
0:49
Risk should inform requirements.
0:52
Requirements should inform architecture, not the other way around.
0:57
Let me show you why this matters with something real.
1:01
My favorite definition of the word data is that it is an artifact of the human experience.
1:07
Imagine you're walking down the street and you find a piece of paper that looks like it's been ripped out of a spiral notebook.
1:14
That's an example of data, right?
1:18
There's a data up at the top, maybe some personal notes.
1:22
You walk a little bit further.
1:23
And you find the notebook it was ripped out of.
1:27
You can see what was written before and you can see was was written after.
1:31
Now you have context.
1:33
You know exactly where that page came from.
1:37
Data plus context equals information.
1:43
Then you turn the book over and you see your sister's name on the cover.
1:47
You know it's her diary.
1:49
You understand exactly who wrote it.
1:52
Data plus context plus relationships.
1:59
Equals knowledge.
2:03
We as humans, since the dawn of humankind, we have imparted wisdom from generation to generation through storytelling.
2:12
This combines data, context, relationships through stories.
2:17
Data does not equal information.
2:20
Information does not equally knowledge.
2:22
And most AI systems are operating somewhere in that first category, pretending.
2:28
That they're the third.
2:30
Now I'm gonna prove to you that oftentimes just having the data is not enough.
2:36
What I want you to do, I want ya to take out your cell phones and go to the bookshelf
2:40
in your house or your apartment, take a picture of it, and upload it to your favorite general purpose large language model.
2:46
Ask it to guess what your job is.
2:49
My bookshelf, I've got books about AI and data science, I've gotta lots of
2:53
books on science fiction, I have an entire row on cryptography.
2:58
History, I like to paint and I like to weld so I have books about painting and welding
3:02
and oh yeah, I think I have some Calvin and Hobbes in there.
3:05
The AI decided I work for the NSA.
3:08
I guess it over-indexed on the cryptography books.
3:10
I do not work for NSA and if I did, I would not confirm it to a chatbot or ever talk about it on one of these videos.
3:19
The AI, it saw the data.
3:21
It saw the books.
3:23
But it couldn't understand why certain books were there.
3:27
And it assumed all of those books are mine, that is the gap between pattern recognition and knowledge.
3:35
And when your AI use case depends on closing that gap,
3:40
on explaining why a decision was made and not just what it is,
3:45
a purely probabilistic system that only sees the data without context and relationships may not be enough.
3:55
When an auditable explanation is required, that is not a model issue, that is an architecture issue.
4:04
Most teams, they have AI principles, fairness, transparency, explainability.
4:09
They're on the website, they're in the framework document, they may even have their own font.
4:15
A principle is a statement of intent.
4:18
You cannot build a system from statements of intents.
4:21
You cannot audit one, you cannot put one in a contract.
4:25
What principles need is operationalization, specific functional and non-functional requirements that are risk calibrated.
4:35
This is language that a builder can use to implement, to know what to build.
4:41
Language that a buyer can contract for.
4:44
Language a governance board can own and review.
4:50
Let me show you how by giving you an example with just one principle, explainability.
4:55
But ultimately, you would do this with all of your principles.
4:59
I'm going to start with baseline.
5:01
Baseline explainability.
5:02
Imagine you're interfacing with Netflix and it recommends a TV show for you to watch.
5:06
And you're wondering, why?
5:08
Why is it recommending this show?
5:10
Baseline Explainability might be for the AI to just say, because of your prior viewing history.
5:17
Baseline is fine when the consequence is 90 wasted minutes.
5:21
An enhanced version of that same scenario.
5:25
Is that Netflix might say in response, people who watch the same five shows you rewatched at 2 a.m.
5:33
Also watch this.
5:35
Yeah, it can show your sources, maybe some data lineage in provenance,
5:39
but you still can't show the reasoning, you still cant show your work.
5:44
Vigilant explainability, this is for your highest risk use cases.
5:49
Imagine you've got a nurse in the field.
5:52
That is using AI to figure out how to triage patients, right?
5:57
Those outputs, those explanations, they're gonna need data lineage, data provenance, test, retest, reliability,
6:05
and a traceable explanation tied to the recommendation from this patient in this moment.
6:13
That is a fundamentally different architectural burden.
6:17
Not every use case carries that same level of risk.
6:22
Not every principle applies to every single system.
6:26
The level of rigor, whether you choose baseline or enhanced or
6:29
vigilant, the level of rigor you need depends entirely on the stakes.
6:35
So when someone tells you AI is easy to build right now, the question is not whether they can build it.
6:42
The question is, can they build it in the way this use case actually requires, given the risk?
6:49
We don't argue about build cost.
6:51
Do we ask?
6:52
Do you have the skills to build this AI in this way, given the risks, to build it for failure,
6:59
to red team it, to structure accountability before the deployment, not after?
7:06
The teams that govern AI well understand one thing really clearly.
7:11
The risk level that you assign to a system determines the architecture that you have to build.
7:18
It determines the team with the skills.
7:21
You need to build it right.
7:23
It determines the skills you need for the people who are ultimately gonna
7:26
be governing this AI and even defining the systems around this AI.
7:31
If the risk is low, probabilistic AI with baseline explainability might be totally fine.
7:39
But if the risk is high and people need a decision that is traceable, contestable and defensible,
7:45
your architecture must carry that kind of burden.
7:50
For high stakes use cases, right, clinical decisions, benefits determinations, public safety, none of this is aspirational.
7:59
This is what the requirements demand.
8:02
The question is not whether you can build AI this afternoon.
8:06
The question, is whether you can still defend what you build and how you built it six months later.
8:14
Risk should determine your AI architecture, not budget.
8:19
Not urgency, not what's easy to build, risk.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

## Review 001 — Knox / ChatGPT strategic read

**Layer:** `captured_interpretation_nonbinding`
**Purpose:** strategic source-local interpretation

### 1. Rough metadata

`source_platform: YouTube`
`source_url: https://www.youtube.com/watch?v=3G6AVkp4Rf0`
`source_title: Why Risk Should Determine Your AI Architecture`
`channel_or_org: IBM Technology`
`speaker: Phaedra Boinodiris`
`published_at: 2026-07-16`
`captured_at: 2026-07-18`
`capture_method: YouTube screenshot + pasted full transcript`
`content_type: responsible-AI architecture explainer / risk-governance keynote`
`source_reliability_context: senior practitioner | vendor educator`
`topic_tags_light: [risk_appropriate_AI, risk_driven_architecture, principle_operationalization, functional_requirements, nonfunctional_requirements, explainability_tiers, auditability, contestability, defensibility, data_context_relationships, provenance, lineage, clinical_AI, accountability, red_teaming, failure_design, governance_by_construction, OMNI_Reactor]`

---

### 2. People / authority context

**Phaedra Boinodiris** — primary speaker, presented through IBM Technology. The source description identifies her as the speaker. Her authority here comes from responsible-AI and enterprise-governance practice rather than from presenting original empirical research or binding regulation.

The talk is strongest as:

* a clear architecture-and-governance framing;
* a translation from abstract AI principles into buildable requirements;
* an explanation of why consequence level changes the required system;
* and a concise argument against adding governance after deployment.

It is weaker as:

* a formal risk-classification methodology;
* a complete healthcare-AI architecture;
* a specification for explainability;
* a treatment of multi-principal authority;
* or evidence that risk is literally the only determinant of architecture.

**Publisher / perspective notes:** IBM has commercial interests in trustworthy AI, governance consulting, architecture, and enterprise tooling. The conceptual mechanism is useful; the source does not independently validate a specific product or benchmark.

---

### 3. Suggested processing

`priority: 4.75/5`
`depth: full_semantic, with aggressive deduplication`
`EVRUN needed?: yes`

**Promotion posture:**
`architecture-spine-sharpening | governance-compilation-rule | risk-adaptive-control | explainability-requirement | Build-OS-practice`

### Duplicate / sibling relationship

This source is a very close sibling to:

* **EVSRC-2026-000275 — ISO 42001 AI-management-system governance.** That source assembles scope, ownership, risk criteria, lifecycle governance, monitoring, supplier oversight, audit, corrective action, and continual improvement.
* **EVSRC-2026-000210 — real-world AI-agent coordination layers.** That source says risk, policy, permissions, and exceptions determine what an agent may execute and when a human must assume control.
* **OMNI Agent Runtime & Harness.** It already makes the admissible runtime profile dependent on actor, task, operator, domain, environment, risk tier, current authority, and available tools.
* **OMNI Reactor.** The emerging risk-adaptive architecture is the natural home for consequence-sensitive rigor, provided this source does not tempt OMNI to collapse risk into one universal score.
* **REV-184 / Governed Resolution and replayable proof.** High-consequence decisions need the context, evidence, authority, action, and outcome lineage required to defend what was rational when the decision occurred.

### What is distinct here

The individual ingredients are mostly already represented.

The source’s distinct contribution is the clean compilation order:

> **Risk → requirements → architecture → skills and ownership → tests and evidence → defensibility.**

It also provides a memorable three-level explainability example—baseline, enhanced, vigilant—that can be translated into OMNI as **consequence-calibrated proof burden**, not merely progressively longer explanations.

### Likely landing zones

* OMNI thesis: trust, authority, AI substrate, security/privacy/assurance — major
* OMNI Reactor — major
* Agent Runtime & Harness — major
* Platform Loop / Build-OS / release and runtime proof — major
* Governed Resolution / replayable proof — major
* Care operating model and clinical-AI boundary — major
* AI-use-case registry and capability envelopes — major
* Evidence Plane / Clinical Memory / source custody — medium-major
* Federation and operator-specific policy overlays — medium
* Product surfaces and explanation UX — medium
* Workforce and governance-role competence — medium

---

## 4. Strategic read

### Classification

This is a **high-value architecture principle source** with a low count of genuinely new primitives.

Its surface message is:

> High-risk AI requires more governance and explainability than low-risk AI.

That is true but insufficiently precise.

Its deeper OMNI contribution is:

> **A governance promise is real only when the anticipated consequence has already been compiled into requirements, architecture, authority, instrumentation, evidence, and failure handling before the system is allowed to act.**

That is stronger than generic “responsible AI.” It is governance by construction.

The source confirms OMNI’s current direction rather than overturning it. It pressures OMNI to make its risk-adaptive machinery legible as a complete architecture compilation chain rather than a collection of strong laws distributed across Reactor, the AI substrate, Agent Runtime, Build-OS, Governed Resolution, contracts, and proof systems.

---

### Core takeaway

**The keeper is: risk does not sit beside architecture as a review checklist; consequence determines the minimum evidence, authority, control, failure, and proof architecture a capability must possess before it may operate.**

A second keeper is nearly as important:

**Principles do not govern systems. Requirements, controls, owners, tests, and evidence do.**

---

## OMNI translation

### A. “Easy AI” and “risk-appropriate AI” are different products

The source begins with a useful distinction:

* easy to assemble;
* versus appropriate for the consequence it can create.

That difference is central to OMNI.

A model can generate a recommendation, summary, classification, plan, message, code change, or clinical candidate in an afternoon. That says almost nothing about whether the resulting capability is fit to:

* see the relevant data;
* infer the relevant meaning;
* represent uncertainty honestly;
* act for a particular principal;
* influence a patient or provider;
* cross an operator boundary;
* commit domain truth;
* create an obligation;
* move money;
* affect access to care;
* change a production system;
* or survive later audit and contest.

The unit of evaluation is therefore not “did the model produce a plausible output?”

It is:

`purpose + affected parties + context + model + retrieval + tools + workflow + authority + consequence + failure behavior + proof`

This strongly reinforces the current OMNI distinction between:

* model;
* harness;
* agent;
* capability;
* use case;
* governed resolution;
* authorized action;
* and owning-domain commitment.

**Keeper line:**
**Ease of generation is not evidence of fitness for consequence.**

---

### B. Risk must compile into architecture

The most important sentence in the source is:

> Risk should inform requirements. Requirements should inform architecture.

That should be preserved, but sharpened.

For OMNI, the full compilation chain is:

`purpose and affected principals`
`→ foreseeable benefit and harm`
`→ consequence class and failure scenarios`
`→ functional and non-functional requirements`
`→ architecture and authority boundaries`
`→ admissible runtime profile`
`→ validation and release evidence`
`→ live monitoring and effect sensing`
`→ accountability, remedy, and learning`

Each transition matters.

A clinical-triage capability cannot be called “high risk” and then merely receive a red badge in a dashboard. Its risk classification must alter the system that gets built:

* which sources are admissible;
* how fresh the context must be;
* whether source authority is known;
* which models or routes are allowed;
* which tools are visible;
* what the model may produce;
* whether it may act;
* which human or domain authority must resolve the candidate;
* what uncertainty must be shown;
* which tests are mandatory;
* what observability must remain active;
* what fallback exists;
* how disagreement is preserved;
* how the capability can be paused or recalled;
* and what proof must survive afterward.

**Keeper line:**
**A risk label that does not change the executable system is governance theater.**

---

### C. Principles need a compilation path, not better branding

The source’s line about principles having “their own font” is more than a joke. It identifies a common enterprise failure: principles are published as identity statements but never translated into obligations a builder, buyer, operator, auditor, or harmed party can use.

OMNI should make the translation explicit:

`principle`
`→ protected interest`
`→ named failure or abuse case`
`→ measurable requirement`
`→ architectural control`
`→ accountable owner`
`→ validation method`
`→ runtime evidence`
`→ breach / exception / remedy path`

For example:

**Principle:** explainability.

That is not buildable.

A high-consequence OMNI requirement might instead say:

* the recommendation must identify the patient and encounter context used;
* every material source must retain provenance and temporal validity;
* adopted versus rejected contributions must remain distinguishable;
* the resolving authority must be identified;
* decisive rules and evidence must be inspectable;
* uncertainty and unsupported gaps must be visible;
* the patient or authorized reviewer must have a contest path;
* the resulting action must link to the resolution that authorized it;
* and a later reviewer must be able to reconstruct what was known at the time.

Now the principle has become architecture.

This directly supports OMNI’s contract-first posture. The same language must be usable by:

* builders;
* buyers;
* operators;
* clinical leaders;
* governance bodies;
* regulators;
* auditors;
* and parties seeking explanation or remedy.

**Keeper line:**
**A principle becomes real when different actors can build it, contract for it, test it, operate it, contest it, and prove whether it held.**

---

### D. Explainability is a consequence-calibrated proof obligation

The source’s baseline / enhanced / vigilant framing is useful, but OMNI should not copy it as a universal three-tier taxonomy without testing it.

The durable insight is that “explainability” is not one capability turned up or down. Different consequence classes require materially different evidence structures.

#### Low-consequence explanation

For a media recommendation, a coarse reason such as prior viewing history may be enough.

The consequences are limited, reversible, and usually non-authoritative.

#### Medium-consequence explanation

A system may need to expose:

* which signals were used;
* source categories;
* relevant preferences;
* confidence;
* and a more specific rationale.

#### High-consequence explanation

For clinical triage, access, benefits, safety, consent, or other consequential action, explanation must become a proof-bearing decision record:

* identity and role of the affected person;
* purpose of the capability;
* source custody and provenance;
* temporal context;
* source authority and evidentiary status;
* model and harness lineage;
* material factors;
* decisive rules;
* uncertainty;
* alternatives considered where required;
* disagreements;
* resolving actor and authority;
* adopted recommendation;
* resulting actions or valid non-action;
* contest and escalation path;
* and later outcome linkage.

This is not simply “show more model reasoning.”

OMNI should not depend on exposing hidden model chain-of-thought. The necessary artifact is an **architected justification record**: evidence, factors, policy, authority, uncertainty, and decision lineage that can be inspected without pretending a generated narrative is a faithful window into internal cognition.

**Keeper line:**
**High-stakes explainability is not a better paragraph from the model; it is a replayable chain from source and context through authority and action.**

---

### E. Traceable, contestable, and defensible are different requirements

The source groups these qualities together near the end. OMNI should keep them distinct.

**Traceable** means the system can reconstruct:

* inputs;
* versions;
* transformations;
* actors;
* policies;
* tools;
* decisions;
* and outputs.

**Contestable** means an affected or authorized party can:

* understand the operative basis;
* challenge identity, source, context, authority, or interpretation;
* add evidence;
* refuse or appeal where applicable;
* trigger review;
* and preserve disagreement rather than being overwritten.

**Defensible** means the organization can show that:

* the architecture was appropriate to the known consequence;
* the required evidence and controls existed;
* the proper authority acted;
* known uncertainty was represented;
* policy was followed or a justified exception was recorded;
* and the result was reasonable given what was knowable at that time.

A decision may be traceable but not contestable.

It may be contestable but badly governed.

It may be explainable in ordinary language yet indefensible because the source data, authority, test coverage, or release process was inadequate.

**Keeper line:**
**Traceability reconstructs; contestability gives standing to challenge; defensibility proves the system and decision met their obligations.**

---

### F. “Data + context + relationships = knowledge” is useful—and dangerously incomplete

The diary metaphor helps show why isolated data can mislead. A page becomes more meaningful when its surrounding context, source, and relationships are known.

But OMNI should not import the equation literally.

Data plus context plus relationships may produce a richer interpretation. It does not automatically produce trustworthy knowledge.

Healthcare-grade knowledge also depends on:

* source identity;
* source authority;
* provenance;
* custody;
* purpose;
* consent;
* temporal validity;
* epistemic status;
* corroboration;
* independence;
* interpretation;
* and the authority to use it for a specific action.

The diary example itself exposes the missing governance dimension.

Learning that the notebook belongs to one’s sister increases contextual understanding. It also reveals:

* ownership;
* privacy expectations;
* relationship boundaries;
* and the possibility that possessing context does not grant permission to use or disclose it.

That is deeply OMNI-relevant.

**More context increases both epistemic value and governance burden.**

A patient’s messages, family relationships, purchase history, wearable signals, clinical records, photos, and external-agent conversations may help explain a situation. Their availability does not mean every actor, agent, operator, or model is entitled to combine them.

**Keeper line:**
**Relationship can make data more meaningful while simultaneously making its use more restricted.**

A stronger OMNI progression is:

`data`
`+ provenance and custody`
`+ temporal and relational context`
`+ source authority and epistemic status`
`+ purpose and permission`
`+ governed interpretation`
`= admissible context for a particular decision`

Even then, admissible context is not automatically committed truth.

---

### G. The bookshelf example is a warning against causal overreach

The model sees cryptography books and infers an NSA occupation.

The problem is not merely that the model lacked more data. It lacked the causal and relational explanation for why each object was present:

* owned by whom;
* read when;
* for work or leisure;
* current or historical;
* representative or exceptional;
* purchased, borrowed, inherited, or decorative.

This matters for OMNI because longitudinal systems can accumulate enormous amounts of patient and operator data while still misunderstanding why the data exists.

Examples:

* a medication in the record may have been prescribed but never taken;
* a message may quote someone else;
* a purchase may have been for a family member;
* a diagnosis may be provisional or ruled out;
* a payer denial may reflect coverage policy, not clinical necessity;
* a pharmacy substitution may reflect stock, not medical preference;
* repeated AI recommendations may share one source and one model family;
* an appointment cancellation may reflect transportation, not disengagement.

More data without source and relationship semantics can make the inference more confident while remaining wrong.

**Keeper line:**
**Context volume does not cure context misclassification.**

This confirms OMNI’s need to preserve:

* contribution type;
* represented principal;
* source authority;
* adoption status;
* temporal status;
* relationship;
* incentive;
* independence;
* and why the signal entered the system.

---

### H. Risk changes more than the control—it changes the required team

The source correctly says consequence determines the skills needed to build and govern the system.

A high-consequence AI capability cannot be owned by “the AI team” alone.

Depending on scope, OMNI may require composition across:

* domain architecture;
* clinical leadership;
* patient-rights representation;
* security;
* privacy;
* compliance;
* safety and human factors;
* data stewardship;
* model and evaluation engineering;
* product and UX;
* operator operations;
* legal and contracting;
* release authority;
* runtime operations;
* and accountability/remedy ownership.

This does not mean every low-risk capability requires a heavyweight committee. It means the participation topology must be consequence-sensitive.

The required team itself should be an architecture output.

**Keeper line:**
**Risk determines not only which controls exist, but which forms of expertise and authority must be present before release.**

---

### I. Build for failure before deployment

The source says teams should build for failure, red-team the system, and structure accountability before deployment.

For OMNI, “build for failure” means specifying more than a generic fallback:

* expected failure modes;
* detection mechanisms;
* instrumentation health;
* uncertainty behavior;
* fail-open versus fail-closed posture;
* degraded modes;
* human escalation;
* alternative service route;
* rollback;
* kill switch;
* recall scope;
* partial-failure behavior;
* downstream effects;
* communication duties;
* remedy ownership;
* and reopening criteria.

Risk-appropriate architecture should answer:

* What if the model is wrong?
* What if the context is stale?
* What if identity is mismatched?
* What if the correct source is unavailable?
* What if the model is right but the action fails?
* What if a human adopts the recommendation for the wrong reason?
* What if the patient contests the context?
* What if the monitor itself is degraded?
* What if a vendor silently changes the model?
* What if a federated operator has a stricter or conflicting policy?
* What if no qualified authority is available in time?

**Keeper line:**
**Failure handling is part of the capability definition, not an incident-response appendix.**

---

### J. Six-month defensibility requires prospective proof design

The closing challenge—can the organization defend what it built and how it built it six months later?—is one of the source’s strongest lines.

Most systems attempt to reconstruct defensibility after harm:

* Which model version was used?
* Which context was retrieved?
* Which policy applied?
* Who approved release?
* Which test suite passed?
* Was the source current?
* Did the user see the warning?
* Was the recommendation adopted?
* Why was no action taken?
* Was the runtime monitor functioning?

By then, the relevant state may be gone.

OMNI should design **prospective defensibility**:

* versioned capability and use-case identity;
* architecture decision and risk rationale;
* declared consequence class;
* model, prompt, skill, tool, and policy lineage;
* validation evidence;
* release authorization;
* runtime configuration;
* source/context receipt;
* resolution and authority record;
* resulting action;
* proof of delivery or execution;
* effect sensing;
* contest/remedy history;
* and supersession state.

This aligns with replayable proof and `trust_horizon`: confidence and permission should evolve as evidence ages, context changes, and the system crosses new consequences.

**Keeper line:**
**Do not reconstruct accountability after harm; preserve the evidence of responsible design and action while the system is operating.**

---

### K. Direct pressure on OMNI Reactor

This source is unusually relevant to Reactor because it gives Reactor a clean architectural job:

Reactor should not merely assign a risk number.

It should help determine the **required control and proof envelope** for a proposed capability, run, action, or transition.

A Reactor-style consequence evaluation could affect:

* admissible model class;
* required context sources;
* freshness thresholds;
* independence requirements;
* allowed tools;
* autonomy ceiling;
* human/domain resolution requirements;
* required review roles;
* testing depth;
* red-team scope;
* release gate;
* observability;
* uncertainty display;
* explanation profile;
* contestability;
* reversibility;
* rollback readiness;
* and proof-retention horizon.

But this source also creates an important correction:

**Risk should determine the minimum architecture burden, not single-handedly determine the whole architecture.**

Architecture is also shaped by:

* purpose;
* rights;
* domain ownership;
* professional authority;
* operator topology;
* interoperability;
* temporal behavior;
* adoption;
* service continuity;
* regulation;
* economics;
* and operational capacity.

Budget and urgency must not lower the safety floor. But they still affect which risk-appropriate design is feasible, which capability should be deferred, or whether the organization should buy, wrap, narrow, or refuse the use case.

**Keeper line:**
**Risk sets the admissible floor; it does not erase purpose, rights, ownership, or operating reality.**

---

## Where it lands

### Major

**OMNI Reactor**

* consequence classification;
* minimum control burden;
* autonomy and authority ceilings;
* explanation and proof profiles;
* failure and reversibility requirements;
* risk-sensitive participant and skill requirements.

**AI Substrate / Agent Runtime**

* runtime profile selected by consequence;
* model and tool admissibility;
* context policy;
* HITL/HOTL/HOOTL posture;
* trace and eval policy;
* fallback, rollback, and kill switch;
* authority ceiling.

**Build-OS / Platform Loop**

* principle-to-requirement compilation;
* architecture decision record;
* risk-shaped work package;
* validation contract;
* red-team depth;
* release gate;
* runtime monitoring;
* corrective action and recall.

**Governed Resolution / replayable proof**

* patient- and moment-specific context;
* source and authority lineage;
* contestability;
* defensibility;
* decision-to-action chain;
* outcome read against original context.

### Medium-major

**Evidence Plane / Clinical Memory / Observation**

* data versus information versus admissible context;
* source authority;
* provenance;
* temporal validity;
* relationship semantics;
* reason-for-presence;
* adoption status.

**Care operating model**

* clinical AI remains candidate-generating capability;
* professional and patient authority remain non-fungible;
* consequence changes explanation, escalation, and proof burden;
* AI support does not become care authority merely because it is well explained.

**Federation**

* operator-specific consequence thresholds;
* jurisdictional overlays;
* local authority and professional rules;
* portable proof without centralizing all decisions.

**Surfaces**

* role-appropriate explanation;
* source visibility;
* uncertainty;
* contest and escalation;
* no generated rationale masquerading as verified decision lineage.

---

## Doctrine / primitive pressure

These are candidates for formal deduplication, not automatic new primitives:

`risk_architecture_compilation`
`consequence_class`
`risk_appropriate_architecture`
`principle_requirement_mapping`
`protected_interest`
`foreseeable_harm_case`
`control_obligation`
`explainability_profile`
`explanation_evidence_bundle`
`traceability_requirement`
`contestability_requirement`
`defensibility_requirement`
`architecture_justification_record`
`risk_control_envelope`
`failure_posture`
`prospective_defensibility`
`relationship_context`
`context_admissibility`
`reason_for_presence`
`governance_skill_requirement`
`control_floor`
`proof_retention_horizon`

Most should probably resolve into or extend existing OMNI constructs:

* AI use-case registry;
* capability envelope;
* agent runtime profile;
* validation contract;
* Governed Resolution;
* action envelope;
* replayable proof;
* source custody and provenance;
* trust horizon;
* Reactor consequence thresholds;
* Build-OS admission and proof gates.

The formal extractor should avoid creating a parallel “Responsible AI” ontology.

---

## Keeper doctrine

1. **Ease of generation is not evidence of fitness for consequence.**

2. **Risk must compile into requirements, architecture, authority, tests, runtime controls, and proof.**

3. **A risk label that does not alter the executable system is governance theater.**

4. **Principles do not govern systems; operational requirements and accountable controls do.**

5. **A principle becomes real when it can be built, contracted, tested, operated, contested, and proven.**

6. **Models are components; consequential AI use cases are governed systems.**

7. **High-stakes explainability is a replayable evidence-and-authority chain, not a more persuasive generated paragraph.**

8. **Traceability, contestability, and defensibility are separate architectural obligations.**

9. **Data plus relationships does not automatically equal trustworthy knowledge.**

10. **More context increases both epistemic value and governance burden.**

11. **Relationship can make data more meaningful while making its use more restricted.**

12. **Context volume does not cure context misclassification.**

13. **Risk determines which expertise and authority must participate before release.**

14. **Failure handling is part of the capability definition.**

15. **Do not reconstruct accountability after harm; preserve prospective defensibility during operation.**

16. **Budget and urgency may narrow or defer a capability; they may not lower its required control floor.**

17. **Risk sets the admissible architecture floor, not the complete architecture by itself.**

18. **For high-consequence care, explanation must be tied to this person, this moment, these sources, this authority, and this resulting action.**

---

## What not to import blindly

### Do not make risk a single universal scalar

Risk is multidimensional:

* severity;
* probability;
* uncertainty;
* reversibility;
* detectability;
* blast radius;
* affected rights;
* authority;
* temporal urgency;
* systemic coupling;
* and ability to remedy.

A single score may be a projection. It should not become the architecture’s hidden sovereign.

### Do not accept “risk determines architecture” literally and exclusively

Risk is a governing constraint, not the only source of design.

Purpose, domain physics, rights, authority, operator topology, care continuity, interoperability, adoption, and economics also shape architecture.

The stronger rule is:

> **Consequence sets the minimum acceptable architecture and proof burden.**

### Do not copy baseline / enhanced / vigilant as permanent OMNI vocabulary yet

The framing is intuitive, but three levels may be too coarse. OMNI already has richer risk, authority, autonomy, and blast-radius machinery.

Import the mechanism first. Decide the taxonomy later.

### Do not equate explainability with revealing chain-of-thought

A generated rationale can be plausible and false.

OMNI needs verifiable:

* sources;
* factors;
* rules;
* uncertainty;
* authority;
* decision state;
* and action lineage.

### Do not let relationship context silently authorize access

Knowing that a source belongs to a sister, patient, provider, employee, or operator does not grant the system permission to use it for every purpose.

Relationship affects both meaning and restriction.

### Do not assume more context automatically fixes AI inference

More context can add irrelevant correlations, privacy exposure, stale evidence, contradictory claims, and misleading confidence.

Context needs admission, purpose, provenance, authority, and temporal controls.

### Do not reduce high-risk AI to better documentation

Documentation is necessary but insufficient.

The architecture must actually enforce:

* tool limits;
* authority boundaries;
* required review;
* runtime monitoring;
* stop conditions;
* and evidence retention.

### Do not make governance a centralized god-object

Risk-appropriate governance must compose existing owners:

* care domains;
* AI substrate;
* Build-OS;
* release;
* runtime;
* security;
* federation;
* and accountability.

It must not absorb their truth or authority.

### Do not use “clinical decisions” as a generic example without preserving clinical authority

A clinical recommendation can be generated or explained by AI. The clinical commitment remains with the appropriately authorized professional and, where applicable, the patient’s consent, acceptance, or refusal plane.

---

## Do-not-miss lesson

**OMNI should be able to start with any proposed AI capability and mechanically answer: given what this capability can do to whom, what architecture, authority, evidence, failure handling, professional participation, and proof are required before it may exist?**

---

## Lightweight tiering

| Concept                                          | stale-vs-current OMNI |      weight tier | status                |
| ------------------------------------------------ | --------------------- | ---------------: | --------------------- |
| Risk → requirements → architecture compilation   | `PARTIAL`             |            spine | promote               |
| Risk-appropriate versus easy AI                  | `AFFIRM / sharpened`  | spine vocabulary | promote               |
| Principles must become testable requirements     | `AFFIRM / sharpened`  | spine / Build-OS | promote               |
| Consequence-calibrated explanation burden        | `PARTIAL`             |            spine | promote               |
| Traceable / contestable / defensible distinction | `PARTIAL`             |            spine | promote               |
| Prospective six-month defensibility              | `PARTIAL`             |    spine / proof | promote               |
| Data-context-relationship progression            | `PARTIAL`             |       vocabulary | watch / sharpen       |
| Relationship increases governance burden         | `PARTIAL`             |            spine | promote               |
| Risk determines required team composition        | `PARTIAL`             |       governance | promote               |
| Risk determines all architecture                 | `ABSENT / overbroad`  |            no-op | reject as literal law |
| Three permanent explainability tiers             | `ABSENT`              |       vocabulary | watch                 |
| More context automatically equals knowledge      | `direct tension`      |            no-op | reject                |
| Model-generated rationale as explanation         | `settled against`     |        guardrail | reject                |

---

## 5. Hard read

**Verdict:** `full_semantic`, 4.75/5, high-value architecture sharpening with aggressive deduplication.

This source is not deeply technical, and nearly every major ingredient already exists somewhere in OMNI. It does not supply a complete risk model, healthcare authority model, runtime design, or explainability contract.

But it contributes a remarkably clean organizing law:

> **Risk is upstream of requirements, and requirements are upstream of architecture.**

OMNI has accumulated the relevant machinery—domain authority, AI-use-case governance, Reactor, capability envelopes, runtime profiles, Build-OS gates, Governed Resolution, replayable proof, Platform and Accountability loops. The source asks whether those pieces are visibly connected so that a principle such as explainability or accountability can be traced all the way into:

* a requirement;
* a control;
* an owner;
* a test;
* a runtime receipt;
* and a defensible record.

That is the useful pressure.

The source’s data/context/relationship metaphor is memorable but must be corrected for OMNI. Context and relationships create meaning, but they also create privacy, consent, authority, purpose, and custody obligations. They do not by themselves create truth.

The source is strongest when it says the architecture must already support the oversight later claimed. It is weakest when it implies risk should determine architecture to the exclusion of other design forces.

**Strongest OMNI line:**

> **The consequence of an AI capability must be visible in the architecture before the capability is allowed to create that consequence.**


&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Method note:** formalizes Knox Review 001, verified vs §1. `build_status` grounded by grep: `disclosure-policy/evaluator` + `requireCapability` + `audit-actions` exist (partial); **no** risk→architecture compiler, explainability contract, or prospective-defensibility record. PROPOSE-ONLY; nothing minted. Close sibling to 275 (ISO-42001, wave-5) — aggressive dedup.

### Cluster table

| # | concept | OMNI meaning | homes | anchor | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| A | **Risk → requirements → architecture compilation (governance by construction)** | Consequence determines the minimum evidence/authority/control/failure/proof architecture a capability must possess *before it may operate*; a risk label that doesn't change the executable system is theater | §B · Reactor (consequence→control envelope) · Build-OS/E&V (principle→requirement→control→owner→test→runtime-receipt) · REV-184 | "Risk should inform requirements. Requirements should inform architecture" [0:49]; "a statement of intent... cannot build a system from" [4:15] | AFFIRM/sharpened (Reactor + risk-gated exploration 137 + REV-184) × build=absent | spine | promote |
| B | **Ease of generation ≠ fitness for consequence** ("easy AI" vs "risk-appropriate AI") | A model producing a plausible output in an afternoon says nothing about whether the *capability* is fit to see the data, act for a principal, commit truth, or survive audit; unit of evaluation = purpose+parties+context+model+tools+workflow+authority+consequence+failure+proof | §B model≠harness≠agent≠capability≠use-case · AI-use-case registry · capability_envelope | "there is easy AI and there is risk appropriate AI" [0:10] | AFFIRM (model_plus_harness 105; value_from_action_law) × build=absent | spine-vocabulary | promote |
| C | **Explainability = consequence-calibrated PROOF obligation, not a better paragraph** | High-stakes explanation = replayable chain from source/context → authority → action (patient+encounter context, provenance, adopted-vs-rejected, resolving authority, uncertainty, contest path, outcome link) — NOT exposing model chain-of-thought | REV-184/`replayable_proof` · D7/trace_lineage · Care (this-patient-this-moment) · surfaces (explanation UX) | nurse-triage "vigilant" needs "data lineage... traceable explanation" [6:05]; "level of rigor... depends entirely on the stakes" [6:29] | PARTIAL (replayable_proof + explanation_tier 128 exist; contract absent) × build=absent | spine | promote |
| D | **Traceable ≠ contestable ≠ defensible** (three distinct obligations) | Trace = reconstruct inputs/versions/actors/decisions; contest = affected party can challenge identity/source/authority + preserve dissent; defend = show architecture was appropriate to known consequence, proper authority acted, uncertainty represented | REV-184 (contest/dispute stances) · §A rights · Accountability Loop · D7 proof | "traceable, contestable and defensible" [7:41] | PARTIAL (dispute/reopen in REV-184; contestability under-explicit) × build=absent | spine | promote |
| E | **More context increases epistemic value AND governance burden** (diary metaphor, corrected) | data+context+relationships enriches interpretation but does NOT equal trustworthy knowledge; healthcare knowledge also needs source-authority/provenance/custody/consent/temporal-validity/corroboration; relationship can make data more meaningful *while making its use more restricted* | Clinical Memory (adoption ≠ availability) · §A consent/authority · Observation · source_authority_map | "Data plus context plus relationships... knowledge" [1:52]; sister's-diary → ownership/privacy | PARTIAL/direct-tension-with-literal-equation (CM patient-source gate; minimum_necessary_context 135) × build=partial | spine | promote (as corrected form) |
| F | **Context volume ≠ context correctness** (bookshelf→NSA causal overreach) | Longitudinal systems accumulate huge patient/operator data yet misunderstand *why* it exists (med prescribed-not-taken, message quoting someone else, provisional dx, payer-denial≠clinical-necessity); preserve contribution-type/represented-principal/source-authority/adoption/temporal/relationship/incentive/independence/reason-for-presence | Clinical Memory · Observation · Recommendation Integrity Firewall (correlation-aware) · §B | "The AI decided I work for the NSA" [3:05]; "gap between pattern recognition and knowledge" [3:27] | AFFIRM (historical_behavior_is_evidence_not_truth; multi_source_corroboration) × build=partial | section-sharpening | promote |
| G | **Risk determines required team + authority composition** | Consequence sets not only controls but which expertise/authority must be present before release (clinical leadership, patient-rights, security, privacy, compliance, safety, release authority) — participation topology is consequence-sensitive | governance-role competence · Reactor · Care (multi-principal) | "the risk level... determines the team with the skills" [7:18] | PARTIAL (new governance-doctrine sharpening) × build=absent | governance | promote |
| H | **Build for failure + prospective six-month defensibility** | Failure handling is part of the capability definition (fail-open/closed, degraded, escalation, rollback, kill-switch, reopening); preserve the evidence of responsible design + action *while operating*, don't reconstruct accountability after harm | Platform Loop (Runtime health/rollback) · REV-184 outcome-reads-frozen-context · `trust_horizon` · replayable_proof | "can you still defend what you build... six months later" [8:06] | AFFIRM (world-model-honesty + trust_horizon + expected_outcome_before_rollout) × build=absent | spine/proof | promote |

### Net-new primitive dispositions (all dispositioned)
- **dedup-as-EXISTS:** `risk_architecture_compilation`/`consequence_class`/`risk_control_envelope` → Reactor consequence→control envelope (candidate, frozen); `explainability_profile`/`explanation_evidence_bundle`/`architecture_justification_record` → `explanation_tier` (128) + `replayable_proof`; `traceability/contestability/defensibility_requirement` → REV-184 + D7 trace_lineage + §A rights; `principle_requirement_mapping`/`control_obligation` → Build-OS `executable_governance_law` (148) + validation_contract; `context_admissibility`/`reason_for_presence`/`relationship_context` → `minimum_necessary_context` (135) + CM patient-source gate; `governance_skill_requirement` → governance-role doctrine; `prospective_defensibility`/`proof_retention_horizon` → replayable_proof + trust_horizon; `control_floor` → Reactor floor.
- **net-new: 0 domain objects.** No parallel "Responsible-AI" ontology (Knox instruction). Reinforces 275's "governance-by-design" (D0OL-GRD-005 already promoted).

### Counterweights / what-NOT-to-import (each PRESERVED or rejected-with-reason)
1. **Do NOT make risk a single universal scalar** — risk is multidimensional (severity·probability·uncertainty·reversibility·detectability·blast-radius·rights·authority·urgency·coupling·remediability); a score is a projection, never the hidden sovereign. [kept — the source itself criticizes CVSS-style scalars]
2. **Do NOT accept "risk determines architecture" literally/exclusively** — consequence sets the *minimum acceptable* architecture + proof burden; purpose, domain physics, rights, authority, operator topology, continuity, adoption, economics also shape it. [kept — the single most important correction to the source's headline]
3. **Do NOT canonize baseline/enhanced/vigilant as permanent OMNI vocabulary** — import the mechanism, decide the taxonomy later; OMNI already has richer risk/authority/autonomy/blast-radius machinery. [kept — WATCH, don't mint the 3-tier]
4. **Do NOT equate explainability with revealing chain-of-thought** — a generated rationale can be plausible and false. [kept — reinforces wave-5 CoT-as-audit reject]
5. **Do NOT let relationship context silently authorize access** — knowing a source belongs to a sister/patient/provider does not grant permission for every purpose. [kept — CARE/consent guardrail]
6. **Do NOT assume more context automatically fixes AI inference.** [kept]
7. **Do NOT reduce high-risk AI to better documentation** — architecture must enforce tool/authority limits, review, monitoring, stop-conditions, retention. [kept]
8. **Do NOT make governance a centralized god-object** — compose existing owners (care domains, AI substrate, Build-OS, release, runtime, security, federation, accountability). [kept — `GRD-035`]
9. **Do NOT use "clinical decisions" generically** — clinical commitment stays with the authorized professional + patient consent/refusal plane. [kept — CARE authority preserved]
10. **Do NOT let budget or urgency lower the required control floor** — budget/urgency may narrow, defer, or force a buy/wrap/narrow/refuse decision on a capability; they may NOT lower its required safety/control floor (Knox keeper #16, verbatim: *"Budget and urgency may narrow or defer a capability; they may not lower its required control floor"*). [kept — restored 2026-07-19 per 2nd-reader audit]

### Care implications (NOT swept by "0 net-new")
- High-consequence explanation for care = tied to *this patient, this moment, these sources, this authority, this resulting action* — a direct, care-specific instantiation of REV-184 + replayable_proof, and an anti-rubber-stamp control (clinician must be able to reconstruct reasoning, not be a ceremonial approver).
- The consent/relationship-restriction point (#5) is a first-class **care governance** lesson, not decoration.

### Candidate guardrails → `08` (gated)
- **G-cand-1:** *A risk label that does not change the executable system is governance theater* (governance-by-construction; dedup vs D0OL-GRD-005 governance-by-design).
- **G-cand-2:** *Consequence sets the minimum acceptable architecture + proof burden; it is not the sole architecture determinant.*
- **G-cand-3:** *High-stakes explainability is a replayable evidence-and-authority chain, not a generated paragraph / chain-of-thought.*
- **G-cand-4:** *Budget and urgency may narrow/defer/refuse a capability; they may not lower its required control floor.* (restored 2026-07-19; dedup vs economic-admissibility law C3.8.)

### Reread flags
- Cluster A/H (compilation chain + prospective defensibility) is a clean legibility framing for Reactor + Build-OS E&V — reopen when Reactor consequence-envelope + validation-contract are authored.

### One-line hard read
`full_semantic`, 4.75/5, **high-value architecture-legibility sharpening, ~0 net-new** — a clean organizing law (*risk is upstream of requirements, requirements upstream of architecture; the consequence of a capability must be visible in the architecture before the capability may create it*) that OMNI already has the machinery for (REV-184, Reactor, capability envelopes, validation contracts, replayable proof) but has not made *visibly connected* end-to-end; strongest correction: consequence sets the **floor**, not the whole architecture.

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(filled at closeout)*
- EVRUN(s): `EVRUN-2026-000011` · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `§A · §B · Reactor · REV-184 · Build-OS/E&V · Care (explainability/consent) · replayable_proof` · promotion: `watch` (guardrail candidates → `08`)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold; `EVRUN-2026-000011`).
- `2026-07-18` — PROCESSED: slug firmed; §0/§0.1 filled (no screenshot — inferred); §3 Review 003 written (8 clusters, 0 net-new, 9 counterweights preserved, 3 guardrail candidates → 08); §4 filled. `raw_dropped → analyzed`; awaiting 2nd-reader fidelity sign-off.
- `2026-07-19` — 2nd-reader fidelity audit = `minor_restore_required` → RESTORED: added counterweight #10 + G-cand-4 (Knox keeper #16, budget/urgency ≠ lowering the control floor). `semantic_fidelity=restored`; marked `covered`.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

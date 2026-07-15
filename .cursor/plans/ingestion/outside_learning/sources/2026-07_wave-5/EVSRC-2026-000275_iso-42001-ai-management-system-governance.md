# EVSRC-2026-000275 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-5 source (`EVSRC-2026-000275_iso-42001-ai-management-system-governance.md`); analyzed 2026-07-15 (`EVRUN-2026-000006`). ★ Operator-flagged (Review 002 — "must be incorporated at numerous levels"). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000275`  ·  filename: `EVSRC-2026-000275_iso-42001-ai-management-system-governance.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=SVAwzodyFUo`  ·  source_title: `How to Manage Your AI Before It Makes the Wrong Decision`  ·  slug: `iso-42001-ai-management-system-governance`
- channel_or_org: `IBM Technology`  ·  speaker: `Jeff Crume (IBM Distinguished Engineer)`  ·  published_at: `~2026-07-13`
- captured_at: `2026-07-15`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `standards explainer (enterprise AI-governance overview / AI-management-system introduction — ISO 42001 vs NIST AI RMF vs EU AI Act)`  ·  source_reliability_context: `senior practitioner / cybersecurity engineer / vendor educator (IBM) — secondary source interpreting standards, NOT the official ISO text or legal advice`  ·  topic_tags_light: `[ISO_42001, AI_management_system, AI_governance, risk_based_controls, accountability, lifecycle_governance, model_monitoring, drift, bias, supplier_oversight, internal_audit, corrective_action, NIST_AI_RMF, EU_AI_Act, continuous_improvement]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Jeff Crume` · role_in_source: `primary speaker / standards explainer` · affiliation_at_publication: `IBM (Distinguished Engineer)` · speaker_type: `senior cybersecurity practitioner / enterprise-technology educator` · authority_context: `strong for management-system thinking, cybersecurity-governance analogies (42001 : AI :: 27001 : infosec), accountability structures, lifecycle oversight, auditing, and the org difference between having controls vs operating a governed program. LIMITS: short IBM educational video, NOT the ISO standard; ISO 42001 / NIST AI RMF / EU AI Act discussion compressed — not authoritative on certification scope / regulatory applicability / legal obligation; says little about healthcare-specific authority, clinical evidence, consent, PHI, device regulation, licensure, or runtime enforcement; IBM benefits commercially from broader AI-governance adoption. Strongest as governance-architecture affirmer; weakest as implementation spec (GRD-039).` · identity_confidence: `high` |
- publisher / channel: `IBM Technology (YouTube)`  ·  interviewer / moderator / host: `n/a (solo explainer)`
- event_context: `IBM Technology explainer on ISO/IEC 42001 AI management systems + comparison to NIST AI RMF + EU AI Act.`  ·  perspective / conflict notes: `vendor educator interpreting standards. Operator (Review 002) flags as high-priority — "must be incorporated at numerous levels." Import the management-system + governance-compiles-to-runtime architecture; take standards/legal specifics from primary sources (GRD-039).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat (metadata in Knox read) · [x] **Knox strategic read → §3 Review 001** · [x] gut note → §3 Review 002 ("must be incorporated at numerous levels")
**Agent (Opus) does:** [x] id+filename (renamed to firm slug) · [x] §0 metadata · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [~] update EVRUN concept registry (cross-source — folded at wave synthesis) · [x] update coverage matrix · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript

Search transcript
Search transcript
0:00A bank denies a loan. No explanation, no appeal, just an AI decision.
0:077 secondsNow ask yourself, who validated that model? Who monitored it after deployment? Who's responsible when it's wrong?
0:1616 secondsMost companies don't know the answer to that, and that's the gap. What's needed is an AI management system to govern all of this.
0:2424 secondsAnd the good news is, we have one. If you're a cybersecurity person like me, you've probably at least heard of the International Standards Organization,
0:3232 secondsand in particular, one of their standards, 27001, which is the international standard for information security management systems.
0:4444 secondsSo, 27001 specifies how an organization establishes, implements, maintains, and continuously improves an information security system.
0:5454 secondsWell, they came out with a new standard called 42001. It basically does what 27001 did for security, it does for AI.
1:051 minute, 5 secondsSo it's an AI management system. Now 42001 is not some checklist of controls. It's a system for managing AI risk continuously.
1:151 minute, 15 secondsIt's auditable, it's certifiable, it's built around continual improvement across the entire life cycle. It's governance.
1:231 minute, 23 secondsNot model architecture. Now, like other ISO standards, 42001 follows the plan, do, check, act model.
1:321 minute, 32 secondsIn this case, we plan by defining AI policies, scope and risk criteria.
1:391 minute, 39 secondsThen we move into the do phase where we develop and deploy AI systems with appropriate controls.
1:441 minute, 44 secondsThen we check on the results, monitor performance, look for bias drift and unintended consequences.
1:511 minute, 51 secondsAnd then ultimately we act on what we find, continuously improve based on those findings and the whole thing becomes a continuous improvement cycle.
2:022 minutes, 2 secondsEverything in ISO 42001 hinges on a risk-based approach and not all risk is equal because not all systems are equal.
2:122 minutes, 12 secondsSo we need to put in the appropriate level of controls for our perceived level of risk.
2:172 minutes, 17 secondsIt explicitly considers risk across multiple layers. So one area of risk could be data risk, where we've got bias or quality issues in the data itself that will affect the results.
2:302 minutes, 30 secondsWe've got model risks that can happen here also, where the accuracy of the information or the explainability of the results that come out are in question.
2:412 minutes, 41 secondsWe have system level risks where we have integrations between components, we have security aspects, those need to be considered here also.
2:502 minutes, 50 secondsAnd then usage risks, where we have to consider what misuse and unintended consequences might introduce into the system.
2:592 minutes, 59 secondsISO 42001 uses the standard ISO high level structure. So let's take a look at some of the major sections that are in that.
3:073 minutes, 7 secondsSo the first one we're going to take a looks at is context. With context, we're trying to define the scope of the AI systems.
3:153 minutes, 15 secondsWe're going identify the stakeholders.
3:183 minutes, 18 secondsWe're gonna determine whatever regulatory obligations we may have, and depending on what industry you're in or what country you're, those could vary.
3:263 minutes, 26 secondsThe next thing that it discusses is leadership. So we're gonna assign AI accountability. Who's responsible for this?
3:353 minutes, 35 secondsIf no one is, then it doesn't get done. We define AI policy and we establish some sort of governance structure in this section.
3:443 minutes, 44 secondsThen the next one deals with planning. And in the planning step is where we're gonna do AI risk assessments.
3:513 minutes, 51 secondsWe're gonna look at a methodology to determine what kind of risk are we facing? What appetite do we have for risk?
3:583 minutes, 58 secondsWhat tolerance do we for risk that you can look at those different ways? What is the risk treatment plan? What kinds of actions are we gonna take? Because we don't eliminate all risks.
4:064 minutes, 6 secondsIn some cases, we may decide to accept certain risks. And then measurable AI objectives will all be included in this step.
4:144 minutes, 14 secondsThen we're going to move to the support component.
4:184 minutes, 18 secondsHere we're going to provide documentation, awareness training, and overall communication of how we want to operate the system.
4:264 minutes, 26 secondsThen to an operation section, here we're going to define the life cycle governance.
4:334 minutes, 33 secondsA change management, the system will not stay the same always so we need to plan for change because change is the only constant.
4:404 minutes, 40 secondsSupplier, AI, oversight, all of that needs to be covered in this section. Then we're gonna do evaluation.
4:494 minutes, 49 secondsIn the evaluation component, we're monitoring, we're doing internal audits, we're looking at management reviews, all of this.
4:574 minutes, 57 secondsAnd then ultimately, an improvement stage where we've taken all of these things, we're going to do incident handling, we're go take corrective actions, and we're do that continuous improvement.
5:085 minutes, 8 secondsSo we've been talking about this ISO 42001 standard.
5:145 minutes, 14 secondsAnd I expect a lot of people are gonna be using it as an AI management system and a standard to certify against.
5:225 minutes, 22 secondsBut there are other things out there as well. And you may have heard of some of these and wonder how do they compare and contrast? Well, for instance, the U.S.
5:305 minutes, 30 secondsNational Institute of Standards and Technology has an AI risk management framework.
5:365 minutes, 36 secondsThat also sounds at least somewhat similar to what I've been talking about with the ISO 42001.
5:435 minutes, 43 secondsAnd then the European Union, the EU has their AI Act, which also has some similarities and some overlaps here.
5:535 minutes, 53 secondsSo let's take a look at the the compare and contrast amongst these three. So we'll start off with this one, the NIST risk management framework.
6:016 minutes, 1 secondSo first of all, this one is voluntary. So you can do this one or you cannot. It's up to you. It's flexible.
6:096 minutes, 9 secondsSo, there's a good deal of left to the user to decide how you want to do some of these things,
6:176 minutes, 17 secondsthink of it more as guidance, where it's basically telling you as a design guide, here are the things that you should be doing.
6:266 minutes, 26 secondsSo, take a look at it this way. It's telling you what good looks like. That's the goal of this one.
6:326 minutes, 32 secondsNow, for the ISO 42001, as I mentioned previously, it's certifiable. You can actually get a document that says, We've had someone come in and audit us.
6:446 minutes, 44 secondsAnd issue a certificate against this standard. So then you can prove that you're in compliance with it. You wouldn't be able to do that with this one.
6:526 minutes, 52 secondsThis one is also very prescriptive in nature.
6:556 minutes, 55 secondsIt prescribes a structure and it tells you basically how to manage your AI infrastructure and how to basically meet the obligations that you may have and do it in a consistent way.
7:097 minutes, 9 secondsThen we've got the EU AI Act. Now this one's different still. This one has a lot of teeth in it. This one is law.
7:187 minutes, 18 secondsThis one's definitely not voluntary if you're in the EU.
7:227 minutes, 22 secondsIt's based on risks and it has a tiered risk structure where you've got unacceptable, high, limited, and minimal are all spelled out.
7:337 minutes, 33 secondsAnd this one is enforced. So there are penalties if you don't follow this and it's gonna define what you have to do.
7:407 minutes, 40 secondsSo this is the one that is basically telling you. How you comply. So think of it this way.
7:487 minutes, 48 secondsThe NIST AI Risk Management Framework is for risk modeling and best practices. ISO 42001 is for governance, audibility, and certification.
7:587 minutes, 58 secondsAnd the EU AI Act is the legal constraint you have to satisfy. They're not competing, they're complementary layers that can give you a stronger AI system.
8:098 minutes, 9 secondsOrganizations that treat AI governance as a checkbox are going to struggle. Organizations that don't govern their AI will struggle even more.
8:198 minutes, 19 secondsBut those that build it into the management system will scale faster and safer. ISO 42001 is the first international standard to formalize this into a complete system.
8:308 minutes, 30 secondsGovern your AI well, and you can harness it to do amazing things. If you don't, you're gonna feel like it locked you in the trunk and went for a joy ride.
8:488 minutes, 48 secondsThank you.



&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

Strategic Read
1. Rough metadata

source_platform: YouTube · source_url: https://www.youtube.com/watch?v=SVAwzodyFUo · source_title: How to Manage Your AI Before It Makes the Wrong Decision · channel_or_org: IBM Technology · speaker: Jeff Crume · affiliation: IBM · published_at: approximately 2026-07-13 (YouTube displayed “2 days ago” on 2026-07-15) · captured_at: 2026-07-15 · capture_method: YouTube screenshot + pasted full transcript · content_type: standards explainer / enterprise AI-governance overview / AI-management-system introduction · source_reliability_context: senior practitioner / cybersecurity engineer / vendor educator; secondary source interpreting standards, not the official ISO text or legal advice · topic_tags_light: [ISO_42001, AI_management_system, AI_governance, risk_based_controls, accountability, lifecycle_governance, model_monitoring, drift, bias, supplier_oversight, internal_audit, corrective_action, NIST_AI_RMF, EU_AI_Act, continuous_improvement]

2. People / authority context
Jeff Crume

role_in_source: primary speaker / standards explainer · affiliation: IBM · title_in_source: Distinguished Engineer · speaker_type: senior cybersecurity practitioner / enterprise-technology educator · identity_confidence: high

Authority context: strong for explaining management-system thinking, cybersecurity-governance analogies, accountability structures, lifecycle oversight, auditing, and the organizational difference between having technical controls and operating a governed program.

Crume’s central analogy is that ISO/IEC 42001 does for AI management what ISO/IEC 27001 does for information-security management: it establishes a continuously operated, auditable organizational system rather than prescribing one particular model architecture.

That is highly relevant to OMNI because the source is not asking:

Which model should we use?

It is asking:

Who owns the AI system, how is its risk classified, which controls govern it, how is it monitored after deployment, what happens when it changes, and who must correct it when it fails?

Those are enterprise-operating questions rather than model questions.

Authority limits:

This is a short IBM educational video, not the ISO standard itself.
The discussion of ISO 42001, NIST AI RMF, and the EU AI Act is intentionally compressed.
It should not be treated as an authoritative interpretation of certification scope, regulatory applicability, or legal obligation.
It says very little about healthcare-specific authority, clinical evidence, patient consent, PHI, medical-device regulation, professional licensure, or how controls become enforceable runtime mechanisms.
IBM benefits commercially from broader enterprise adoption of formal AI-governance programs.

The source is strongest as an organizational and governance architecture affirmer.

It is weakest as an implementation specification.

3. Suggested processing

priority: 4.5/5

depth: full_semantic, with aggressive deduplication

EVRUN needed?: yes

promotion posture: governance-spine-sharpening | organizational-operating-model | regulatory-overlay-sharpening | AI-lifecycle-requirement | assurance-practice

Duplicate / sibling relationship

This source is a close sibling to several already-developed OMNI clusters:

IBM / enterprise AI-governance source 079 — AI gateway/firewall, model registry and lineage, use-case registry, shadow-AI discovery, acceptable-use policy, lifecycle states, accountable owners, and runtime-enforced controls.
Clinical AI monitoring source 138 — encounter-level AI-use records, post-market monitoring, recall scope, outcome linkage, silent-model-swap guards, long-tail monitoring, and AI incident channels.
Platform Loop work — Build-OS, Release Operations, and Runtime Operations as semantically distinct control planes.
Accountability Loop work — custody, remedy, communication, independent verification, and closure after consequential failure.
Evaluation / EDD corpus — continuous evaluation, regression detection, statistical sufficiency, and release evidence.
Security / zero-click corpus — risk must map into runtime enforcement rather than static governance documentation.
Regulatory-policy posture — law as a versioned, jurisdiction-scoped external authority layer rather than static compliance prose.

The current registry already pressures an AI governance control plane containing an AI_model_registry, model_lineage_record, AI_use_case_registry, lifecycle state, acceptable-use policy, and accountable ownership. It explicitly warns that healthcare-grade controls must exceed generic checklists and must enforce at runtime rather than remain dashboard theater.

What is distinct here

The individual mechanisms are mostly already present.

The source’s useful contribution is assembly:

It places policies, risk assessment, leadership, operations, supplier oversight, audits, monitoring, incident handling, corrective action, and continual improvement into one organization-level AI management system.

OMNI has many of the organs.

This source asks whether it has explicitly named and connected the management system that governs the organs as an accountable organizational program.

That is the likely delta.

Likely landing zones
Thesis §A trust / authority / accountability — major
Thesis §B AI substrate — major
§C governed capability exchange / AI control plane — major
Platform Loop — massive
Build-OS — major
Release Operations — major
Runtime Operations — major
Accountability Loop — major
Polaris / proof fabric — major
AI-model and use-case registries — major
Security / Privacy / Compliance — major
Federation / operator governance — medium-major
Knowledge Reservoirs / policy sources — medium
Clinical-AI monitoring — major
Settings / jurisdictional policy overlays — medium-major
Care Loop itself — minor-medium, because governance surrounds clinical AI without replacing clinical authority
4. The strategic read
Classification

High-value governance-spine sharpening; low net-new mechanism count; potentially important missing organizational wrapper.

The video’s surface message is:

ISO 42001 is a certifiable AI-management standard.

The strategic OMNI message is larger:

AI governance must exist as a continuously operated management system with scope, owners, risk criteria, lifecycle controls, monitoring, audit, corrective action, and executive review—not as scattered safety features or a binder of policies.

This source does not change OMNI’s core laws.

It pressures OMNI to prove that those laws are connected into a governable enterprise system.

Core takeaway

The keeper is: governance is not a checklist attached to an AI product; it is the organization’s continuous operating system for deciding which AI may exist, under whose authority, with which controls, how it is monitored, and how failure is corrected.

The strongest OMNI translation is:

Every AI capability needs an accountable management envelope spanning conception, build, release, live operation, incident response, correction, and retirement.

OMNI translation
1. The governed object is the AI system or use case—not merely the model

The source opens with a bank loan denied by an AI system and asks:

Who validated it?
Who monitored it?
Who is responsible when it is wrong?

That framing is important because the failure is not necessarily reducible to “the model was inaccurate.”

The outcome may have arisen from:

training or source data;
model selection;
prompt or policy;
retrieval;
entity resolution;
tool access;
business rules;
orchestration;
user interface;
human overreliance;
deployment configuration;
monitoring failure;
appeal-process failure;
organizational ownership failure.

OMNI should therefore govern the whole deployed capability:

AI use case
+ objective
+ affected actors
+ model(s)
+ data sources
+ retrieval
+ prompts / skills
+ tools / connectors
+ domain workflows
+ human roles
+ authority envelope
+ release
+ runtime configuration
+ monitoring
+ outcome linkage
+ incident and recall posture

A model registry alone is insufficient.

Keeper:

Models are components. AI use cases are governed systems.

2. An AI management system is not another OMNI domain

The source calls ISO 42001 an AI management system.

OMNI should resist turning that into:

one new god-domain;
one “AI Governance Loop” that owns every lifecycle;
one giant AI record;
one compliance department that absorbs Build, Release, Runtime, Care, Security, and Accountability.

The management system should coordinate and prove governance across the existing owners.

OMNI’s current architecture correctly separates:

Build-OS, which creates and validates the next possible platform state;
Release Operations, which governs movement into environments;
Runtime Operations, which operates and restores live state;
Accountability, which handles duties of custody, remedy, communication, and verified closure;
Care, which retains clinical truth and clinical authority.

The AI management system is therefore best understood as a cross-cutting governance envelope and evidence composition over these systems.

It should not duplicate their canonical records.

Keeper:

Management governance composes accountable owners; it does not replace them with one governance god-object.

3. “Governance, not model architecture” is a major corrective

Crume explicitly distinguishes the standard’s concern from model architecture.

That matters because AI programs often over-focus on:

model selection;
benchmark scores;
prompt techniques;
architecture diagrams;
inference performance.

Those are necessary engineering concerns.

They do not answer:

Who accepted the risk?
Which use cases are prohibited?
Who can approve a model change?
Which affected population was considered?
What happens when performance drifts?
Who monitors a vendor model?
How can a capability be recalled?
What corrective action follows a near miss?
When must a regulator or operator be notified?
Who verifies closure?

Keeper:

A good model can exist inside a badly governed system.

And:

Architecture determines how it works; governance determines whether, where, and under whose responsibility it may work.

4. OMNI needs an explicit AI-management-system boundary

ISO-style management systems begin by defining organizational context and scope.

That should pressure an OMNI artifact such as:

AI_management_system_scope

It should establish:

which OMNI products and capabilities are included;
which operators and environments are included;
which internally developed and vendor-supplied systems are included;
which agentic and non-agentic AI uses are included;
whether experimental sandboxes are included;
which data classes are affected;
which jurisdictions apply;
which functions are excluded and why;
which accountable executive or governance body owns the system.

Without scope, governance becomes a slogan.

For example, does the management system cover:

provider-note drafting?
intake summarization?
public marketing generation?
internal coding agents?
patient companion interactions?
security scanners?
vendor AI embedded inside a scheduling rail?
AI used by a federated operator outside OMNI’s approved path?

The source’s “context” section makes that question explicit.

Keeper:

You cannot govern “AI in general.” You govern a declared estate of use cases, systems, actors, and boundaries.

5. The AI-use-case registry is the organizational spine

The source repeatedly speaks at the level of “AI systems,” stakeholders, scope, obligations, and risk.

That strongly supports OMNI’s existing AI_use_case_registry.

Each registered use case should likely contain:

use_case_id
purpose
business / care objective
system owner
domain owner
affected actors
affected patients / cohorts
operator / tenant scope
jurisdictions
risk classification
models and versions
data classes and sources
tools / connectors
human involvement model
authority limits
expected benefits
foreseeable harms
required controls
validation contract
release state
runtime-monitoring contract
supplier dependencies
incident / recall owner
retention and retirement requirements

The model registry answers:

Which model is this?

The use-case registry answers:

Why does this system exist, whom can it affect, and who owns its consequences?

Keeper:

No registered purpose, owner, risk class, and control envelope—no production AI use case.

6. Accountability must attach to a named owner before deployment

The source’s leadership section is blunt:

If no one is responsible, governance work does not get done.

This is a direct OMNI affirmer.

Every AI capability should have differentiated ownership, potentially including:

executive or business owner;
product owner;
domain-truth owner;
clinical owner;
model or AI-platform owner;
security owner;
privacy/compliance owner;
release authority;
runtime operator;
incident owner;
owner of last resort.

Those roles should not be collapsed into “the AI team.”

The AI team may build or operate infrastructure.

It does not automatically own:

clinical policy;
patient communication standards;
legal interpretation;
financial fairness;
clinical harm;
operator remediation.

OMNI’s Accountability architecture already distinguishes service restoration, durable defect repair, and obligation/remedy ownership. Runtime Operations restores service, Build-OS repairs defects, and Accountability handles the obligations created by consequences.

Keeper:

Responsibility must be named before risk materializes—not reconstructed after harm.

7. Risk assessment must cover data, model, system, and use—not just model accuracy

The source identifies multiple layers of risk:

data;
model;
system;
use.

That taxonomy is simple and useful.

Data risk
bias;
missing populations;
poor quality;
stale information;
leakage;
ungrounded labels;
improper consent;
source-authority errors.
Model risk
error rate;
calibration;
explainability limits;
instability;
model-version changes;
hallucination;
performance tails;
inappropriate confidence.
System risk
bad integrations;
identity mismatch;
access-control failure;
unsafe tool call;
stale cache;
orchestration loop;
wrong domain transition;
unavailable dependency;
failed rollback.
Use risk
users deploying the system outside intended scope;
automation bias;
malicious use;
missing appeal;
inappropriate delegation;
patient misunderstanding;
operator shortcuts;
use on an excluded population.

This is much closer to OMNI’s architecture than generic model-governance language.

Keeper:

Model risk is only one layer of AI-system risk.

8. OMNI should extend the taxonomy with authority and consequence risk

For healthcare, the source’s four layers remain incomplete.

OMNI also needs:

Authority risk
wrong actor;
wrong patient;
invalid delegation;
expired consent;
professional authority absent;
candidate treated as commitment;
external AI treated as a trusted principal.
Consequence and obligation risk
delayed care;
missed escalation;
patient burden;
inappropriate communication;
financial harm;
continuity failure;
downstream obligations lost;
harm discovered but not remediated.

That is where OMNI must exceed a generic AI-management implementation.

The enterprise AI-governance corpus already warns that healthcare-grade controls must exceed generic IBM/NIST-style checklists and must bind into runtime authority, consent, and audit.

Keeper:

In care, risk is not complete until authority, patient consequence, and owed remedy are modeled.

9. Risk classification must govern actual controls

The source emphasizes that not all AI systems have equal risk and therefore should not receive equal controls.

That is foundational.

A marketing-caption generator and a medication-change recommendation should not share:

the same evaluator;
the same release process;
the same monitoring;
the same human involvement;
the same rollback urgency;
the same documentation;
the same incident threshold.

An OMNI risk profile might include:

consequence severity;
reversibility;
autonomy level;
data sensitivity;
affected population;
authority required;
uncertainty;
novelty;
external exposure;
scale or blast radius;
detectability;
human-review latency;
dependency criticality.

The resulting classification should drive:

required evidence;
eval repetitions and confidence;
approval roles;
canary scope;
runtime monitoring;
permissible autonomy;
human review;
incident clocks;
recall posture;
audit frequency.

Keeper:

Risk classification is useful only when it changes what the system is allowed to do.

10. Governance must compile into runtime policy

This is one of the most important OMNI corrections to the source.

A management standard can define:

policy;
objectives;
processes;
required records;
audit expectations.

OMNI must convert those into enforceable mechanics.

For example:

Governance statement	Runtime or lifecycle mechanism
Only approved models may be used	model-route allowlist and lineage gate
High-risk actions require review	authority gate before capability invocation
PHI must remain in approved regions	deployment and data-residency policy
Model changes require validation	model-version regression and release gate
Certain uses are prohibited	use-case registry prohibition enforced by capability gateway
Human appeal must exist	review/remediation workflow and surface
Vendor failures must be monitored	supplier-health signal and fallback policy
Unsafe capability can be recalled	capability kill switch and scoped recall
Incidents require correction	durable defect and corrective-action workflow

The internal OMNI corpus already states the rule clearly:

AI governance must map risk to control, runtime enforcement, and audit proof.

Keeper:

Policy that cannot block, constrain, route, recall, or prove behavior is documentation—not control.

11. Auditability is necessary and can still become theater

The source emphasizes that ISO 42001 is auditable and certifiable.

That is valuable.

An enterprise should be able to show:

declared scope;
named owners;
approved policies;
risk assessments;
risk-treatment decisions;
training;
lifecycle reviews;
supplier oversight;
monitoring;
incidents;
corrective actions;
management reviews.

But a certificate does not establish that:

every output is correct;
every use is safe;
no patient was harmed;
every integration is authorized;
a model remains performant after a silent vendor update;
operators actually follow the intended process;
the control worked at runtime.

Keeper:

Certification can prove a management system exists; it cannot certify every AI decision as correct.

And:

Audit evidence is not a substitute for live control effectiveness.

12. Evidence should be generated by operating the system

The best governance evidence should emerge naturally from the runtime and lifecycle:

use-case registration;
model and tool lineage;
eval runs;
approval decisions;
deployments;
traces;
policy decisions;
outcome links;
incident signals;
recalls;
corrective actions;
training completion;
supplier reviews;
management review decisions.

OMNI should not rely on humans manually reconstructing all this before an audit.

The proof fabric should make governance continuously inspectable.

Keeper:

The system should produce its audit evidence by operating correctly.

13. Plan–Do–Check–Act maps across OMNI, but must not replace OMNI’s native loops

The source uses Plan–Do–Check–Act.

There is a useful translation:

Plan
establish scope;
define policy;
identify stakeholders;
classify risk;
define objectives;
select controls;
assign owners.
Do
build;
validate;
release;
deploy;
train users;
operate controls.
Check
monitor;
evaluate;
audit;
inspect outcomes;
review incidents;
review suppliers;
detect drift.
Act
contain;
correct;
improve;
revise controls;
retrain;
rollback;
recall;
retire;
update policy.

But OMNI should not rewrite the Care, Platform, and Accountability architecture as one generic PDCA loop.

PDCA is a management-system rhythm.

OMNI’s native owners and records remain distinct.

Keeper:

PDCA is the governance cadence; it is not the ontology of care, platform operation, or accountability.

14. “Do” spans Build, Release, and Runtime—not Build-OS alone

A common mistake would be to place the AI management system entirely inside Build-OS.

The source explicitly includes development, deployment, operation, monitoring, supplier oversight, change management, evaluation, incidents, and improvement.

OMNI has already corrected the overbroad Build-OS framing:

Build-OS produces a verified release candidate.
Release Operations governs promotion, canaries, deployment, rollback, and recall.
Runtime Operations monitors and protects live state.
Runtime evidence and durable defects feed back to Build-OS.

Therefore the management system must span the whole Platform Loop.

Keeper:

AI governance that stops at pre-release validation is not lifecycle governance.

15. “Check” requires post-market and outcome-linked monitoring

The source mentions monitoring performance, bias, drift, and unintended consequences.

For OMNI, this must extend beyond aggregate model metrics.

A healthcare-grade monitoring contract may need:

model version per use;
use-case version;
affected patient or encounter;
generated recommendation;
human disposition;
committed action;
downstream outcome;
alert burden;
override pattern;
false-negative and false-positive review;
demographic and operator disaggregation;
tail-event analysis;
near misses;
source and context quality;
workflow delay.

The existing clinical-AI corpus already pressures:

encounter-level AI-use logging;
post-market monitoring;
AI recall scope;
trace-to-outcome linkage;
silent-model-swap guards;
tail-sensitive monitoring.

Keeper:

Monitor the AI’s relationship to decisions and outcomes—not only the model’s average score.

16. “Act” requires durable corrective-action custody

The source ends the cycle with incident handling and corrective action.

That cannot mean:

write a retrospective;
update a dashboard;
email the AI team;
mark the audit finding closed.

Corrective action may require:

immediate containment;
disabling a capability;
reverting a model;
changing a prompt or skill;
repairing data;
correcting affected records;
notifying operators;
contacting patients;
reperforming work;
refunding charges;
retraining users;
revising policy;
changing a supplier;
creating a regression test;
independently verifying closure.

This is where AI management connects directly to OMNI’s Accountability Loop.

Keeper:

An incident is not closed when the model is fixed; it closes when affected obligations are resolved and recurrence controls are verified.

17. Management-system nonconformity and real-world harm are related but distinct

ISO-style management systems use concepts such as audit findings, nonconformity, corrective action, and improvement.

OMNI should distinguish:

governance-process nonconformity;
product defect;
runtime service incident;
security incident;
privacy incident;
clinical safety event;
patient complaint;
accountable obligation.

For example:

A missing annual management review may be a governance nonconformity.
A model producing unsafe advice may be a product or clinical safety issue.
A vendor API outage may be a runtime incident.
A patient harmed by delayed follow-up may create an Accountability case.

These can link.

They should not become one generic “AI incident” record.

OMNI’s current architecture already insists that state belongs to the object that owns it and separates service incidents, product defects, security incidents, privacy incidents, safety events, and resulting accountability obligations.

Keeper:

One event may trigger several accountable records; it should not erase their distinct owners and lifecycles.

18. Risk acceptance is an authority-bearing decision

The source correctly says not all risk can be eliminated. Some risk will be treated, transferred, avoided, or accepted.

For OMNI, risk_accepted cannot be a checkbox.

The record should include:

exact risk;
affected system and scope;
evidence considered;
expected benefit;
residual likelihood and severity;
affected population;
existing controls;
duration;
conditions;
monitoring;
expiration and rereview;
accepting authority;
whether patient/operator disclosure is required;
whether the risk is legally acceptible at all.

Keeper:

Residual risk is not “leftover risk.” It is risk carried by a named authority under explicit conditions.

19. Risk appetite does not override patient rights or law

The source discusses organizational risk appetite and tolerance.

That is valid at enterprise level.

OMNI must guard against an interpretation such as:

“The company has a high appetite for clinical risk.”

Some constraints are not discretionary:

professional scope;
patient consent;
privacy rights;
prohibited discrimination;
required human authority;
legal reporting;
medical standard of care;
certain product-safety requirements.

Organizational risk appetite can shape choices inside lawful and ethical bounds.

It cannot legalize or authorize what the organization has no right to accept on another person’s behalf.

Keeper:

The enterprise may accept its own residual risk; it cannot casually accept another person’s rights or safety away.

20. Supplier AI oversight is a first-class architecture requirement

The source specifically includes supplier AI oversight.

That is highly relevant because OMNI will depend on:

model providers;
cloud platforms;
embedding services;
transcription systems;
OCR;
clinical-data vendors;
communication rails;
EHR connectors;
payment systems;
agent frameworks;
evaluation vendors.

Supplier oversight needs more than procurement review.

Potential requirements:

approved supplier and capability;
version and model disclosure;
data-use terms;
residency;
security posture;
subprocessor visibility;
update notification;
silent-change protection;
service levels;
incident notification;
evaluation rights;
fallback;
termination;
data return or deletion;
exit portability;
recall cooperation.

Keeper:

Outsourced intelligence does not outsource accountability.

21. Vendor changes must enter Release Operations as governed changes

A vendor can change:

underlying model;
safety filters;
context limits;
behavior;
pricing;
latency;
regional hosting;
API contract.

The AI use case may change even if OMNI’s application code does not.

Therefore a material supplier or model change should trigger:

lineage update;
impact assessment;
regression evaluation;
compatibility review;
risk review;
release decision;
possibly a new canary;
monitoring reset.

The existing OMNI corpus already pressures silent_model_swap_guard, model_change_review, model_version_of_record, and capability recall.

Keeper:

A model change is a system change even when no OMNI code changed.

22. Management review is a real executive function

The source includes management review rather than treating governance as a technical-team concern.

A meaningful OMNI management review might examine:

AI estate by risk tier;
new and retired use cases;
control effectiveness;
serious incidents and near misses;
unresolved corrective actions;
supplier issues;
model changes;
evaluation debt;
drift;
user and patient complaints;
human override patterns;
outcome disparities;
resource and training gaps;
regulatory changes;
risk acceptances nearing expiry;
capabilities that should be paused or recalled.

The outcome should be recorded decisions, not a slide deck that evaporates.

Keeper:

Executives do not govern AI by endorsing principles; they govern it by making recorded risk, resource, release, and remediation decisions.

23. Training and awareness should be role-scoped

The source places documentation, awareness, training, and communication under support.

OMNI should not build one generic “AI literacy course.”

Different actors need different competence:

Developers
data and model risks;
eval design;
secure tools;
lineage;
release gates.
Clinicians
limitations;
evidence;
overreliance;
appropriate review;
patient communication;
reporting near misses.
Operators
approved use;
prohibited shortcuts;
escalation;
privacy;
vendor tools.
Reviewers and auditors
evidence interpretation;
control testing;
conflict;
independence.
Patients
when AI is involved;
what it can and cannot decide;
correction and appeal channels.

Keeper:

AI competence is role-specific because authority and failure modes are role-specific.

24. NIST, ISO, law, and OMNI should occupy different layers

The source frames the three as complementary:

NIST AI RMF: flexible risk guidance and best-practice modeling;
ISO 42001: management-system structure, auditability, and certification;
EU AI Act: binding legal constraint.

That is a productive conceptual separation even though the exact legal and standards details must come from primary sources.

OMNI translation:

external law / regulation
    → mandatory legal constraints

recognized standards and frameworks
    → governance and risk-management reference models

OMNI doctrine and contracts
    → care-native architecture and organizational responsibilities

OMNI policy overlays
    → jurisdiction, operator, use-case, and capability-specific rules

runtime controls
    → actual enforcement

proof fabric
    → evidence of operation and compliance

Existing OMNI posture already says law should be treated as a dynamic, versioned, source-authoritative, jurisdiction-scoped external authority layer gating delegation, prescribing, data use, economics, and care action.

Keeper:

Standards advise and structure; law constrains; OMNI operationalizes.

25. Standards should not be copied directly into the domain model

ISO headings such as:

context;
leadership;
planning;
support;
operation;
performance evaluation;
improvement;

are excellent governance categories.

They should not automatically become:

domain names;
database tables;
agent names;
one universal workflow.

OMNI should map requirements to existing owners and evidence.

Example:

Management-system requirement	Likely OMNI home
Scope and stakeholders	AI use-case registry / Federation / governance
AI policy	policy registry / §C / Settings
Risk assessment	governance profile / Polaris
Validation	Build-OS
Change management	Build-OS + Release Operations
Deployment	Release Operations
Monitoring	Runtime Operations + clinical monitoring
Supplier oversight	Tool/Connector governance
Internal audit	assurance/audit function
Incident handling	owning incident domain
Corrective action	Build-OS, Runtime, Accountability as applicable
Management review	governance body and decision ledger

Keeper:

Map standards into accountable architecture; do not let the standard’s table of contents become the architecture.

26. Certification can be commercially valuable without becoming the product’s moral center

A certifiable management system may help OMNI with:

enterprise procurement;
operator trust;
insurer or partner diligence;
vendor management;
investor confidence;
regulatory readiness;
disciplined scaling.

That matters.

But the ultimate OMNI promise cannot be:

“We have a certificate.”

It must remain:

right context;
right actor;
right patient;
right moment;
right authority;
traceable action;
accountable outcome.

Keeper:

Certification may open the enterprise door; trustworthy execution must justify staying inside.

27. Continual improvement must be governed promotion, not self-modifying AI

The source emphasizes continual improvement.

OMNI must distinguish:

an organization improving its policies, controls, skills, evals, models, and workflows;
an AI system autonomously changing its own behavior in production.

The former is required.

The latter requires strict boundaries.

Improvement should flow through:

runtime evidence
→ finding
→ analysis
→ proposed change
→ validation
→ authorized release
→ monitored deployment

Not:

model notices mistake
→ silently rewrites policy or memory
→ new production behavior

Keeper:

The management system learns continuously; production authority changes discretely and under review.

28. Appeals and contestability are underdeveloped in the source

The opening loan-denial scenario mentions:

no explanation;
no appeal;
only an AI decision.

The remainder of the talk focuses more on organizational governance than the affected person’s remedy.

For OMNI, contestability must remain explicit:

AI involvement disclosed where appropriate;
explanation fit to the affected actor;
correction mechanism;
human review;
challenge or appeal;
evidence preservation;
nonretaliatory incident reporting;
record correction;
remediation if the decision caused harm.

This is especially important in healthcare, where a patient may need to challenge:

an eligibility determination;
a triage response;
a scheduling denial;
a content classification;
an inferred fact;
an automated communication;
a care-routing decision.

Keeper:

Governance is incomplete until the affected person has a path to correction, review, and remedy.

29. OMNI needs both an AI control plane and an AI management system

These are related and not identical.

AI control plane

Operational mechanisms:

registries;
gateways;
model routes;
policy enforcement;
identity;
permissions;
monitoring;
kill switches;
trace;
recall.
AI management system

Organizational governance:

scope;
policy;
objectives;
ownership;
risk methodology;
competence;
audit;
management review;
supplier oversight;
corrective action;
continual improvement.

The management system tells the organization what must be governed and who is accountable.

The control plane enforces and evidences that governance in the system.

Keeper:

The management system governs the organization; the control plane governs execution. Each is incomplete without the other.

30. The likely missing v4 statement

OMNI may need a concise thesis-level declaration such as:

OMNI operates an AI management system across the full capability lifecycle. Every AI use case is registered, purpose-bound, risk-classified, owned, validated, released, monitored, auditable, correctable, recallable, and retireable. Governance requirements compile into runtime controls and proof. The management system coordinates Build-OS, Release Operations, Runtime Operations, Security, Privacy, Care, and Accountability without replacing their canonical ownership.

This should not become a giant standards section.

It is a load-bearing enterprise statement.

Where it lands
Thesis §A — major

Confirms that trust requires:

identifiable responsibility;
appeal and correction;
accountability;
continuous oversight;
proof.
Thesis §B — major

AI substrate includes governance and lifecycle management, not only models, context, tools, memory, and agents.

§C / AI control plane — major

Supports:

use-case registry;
model registry;
acceptable-use policy;
lifecycle state;
runtime policy;
shadow-AI discovery;
gateways;
audit.
Platform Loop — massive

This may be the most important landing zone.

The management-system lifecycle spans Build-OS, Release Operations, and Runtime Operations. It cannot live inside one of them.

Accountability Loop — major

Incidents and findings create differentiated obligations:

custody;
notification;
remedy;
corrective action;
independent verification;
closure.
Clinical AI monitoring — major

Risk-tiered post-market monitoring, outcome linkage, version-of-record, tail analysis, and recall become management-system evidence.

Polaris / proof — major

Each transition needs the relevant governance profile, authorized owner decision, owning-system commitment, and proof. OMNI’s current architecture already uses that transition-specific pattern rather than one universal governance decision.

Federation — medium-major

Need to distinguish:

OMNI corporate management-system responsibility;
operator responsibilities;
local use and training;
tenant-level risk acceptance;
supplier and delegated responsibilities;
evidence flowing across organizational boundaries.
Knowledge Reservoirs — medium

Standards, laws, regulatory interpretations, and internal policies need source authority, versioning, effective dates, and promotion gates.

Doctrine / primitive pressure

Candidates for Review 003 to deduplicate—not final:

AI_management_system
AI_management_system_scope
AI_governance_context
AI_governance_body
AI_use_case_registry
AI_system_owner
AI_use_case_owner
AI_risk_methodology
AI_risk_assessment
AI_risk_treatment_plan
AI_risk_acceptance
residual_risk_authority
AI_control_objective
AI_control_effectiveness_evidence
AI_management_objective
AI_governance_profile
AI_supplier_oversight
AI_supplier_change_event
AI_internal_audit
AI_management_review
AI_governance_finding
AI_nonconformity
AI_corrective_action
AI_preventive_improvement
AI_competence_requirement
AI_role_training_record
AI_appeal_path
AI_contestability_record
AI_regulatory_obligation_map
AI_standard_control_mapping
AI_control_runtime_binding
AI_governance_evidence_bundle
AI_capability_recall
AI_decommission_proof
Likely dedup / sharpening disposition
AI_use_case_registry → already strongly present; this source affirms it as the management-system spine.
AI_model_registry / lineage → already present; no new primitive.
AI_management_system → potentially useful new umbrella name or enterprise declaration, but not a new domain.
AI_management_system_scope → likely useful as a formal organizational boundary artifact.
AI_risk_assessment / treatment → likely existing in dispersed form; needs consolidation.
residual_risk_authority → likely useful sharpening because risk acceptance requires an authorized owner.
AI_internal_audit / AI_management_review → organizational assurance practices, potentially undernamed in current architecture.
AI_nonconformity → should remain distinct from product defect, runtime incident, or patient harm.
AI_control_runtime_binding → likely the most important OMNI-specific sharpening.
AI_supplier_oversight → existing tool/vendor governance, strengthened.
AI_appeal_path → may sharpen agency, correction, and remediation doctrine.
AI_decommission_proof → already seeded under model lifecycle and recall.
Keeper doctrine
Governance is an operating system for risk, not a checklist of principles.
Models are components; AI use cases are governed systems.
A good model can exist inside a badly governed system.
No purpose, owner, risk class, and control envelope—no production AI use case.
Responsibility must be named before risk materializes.
Model risk is only one layer of AI-system risk.
In care, risk is incomplete without authority, patient consequence, and owed remedy.
Risk classification matters only when it changes permitted behavior and required proof.
Policy that cannot constrain or block execution is documentation, not control.
Certification can prove a management system exists; it cannot certify every AI decision as correct.
The system should produce its audit evidence by operating correctly.
PDCA is a governance cadence, not OMNI’s care or platform ontology.
AI governance that stops at pre-release validation is not lifecycle governance.
Monitor the relationship among AI use, human decision, committed action, and outcome.
An incident is not closed when the model is fixed; affected obligations must also close.
One event may create several records without collapsing their distinct owners.
Residual risk is carried by a named authority under explicit conditions.
The enterprise cannot accept another person’s rights or safety away.
Outsourced intelligence does not outsource accountability.
A model change is a system change even when application code is unchanged.
Executives govern through recorded decisions, not principle statements.
AI competence is role-specific because authority and failure modes are role-specific.
Standards advise and structure; law constrains; OMNI operationalizes.
Map standards into accountable architecture; do not copy their table of contents into the ontology.
Certification may open the door; trustworthy execution justifies remaining inside.
The management system learns continuously; production authority changes discretely.
Governance is incomplete without correction, appeal, and remedy.
The management system governs the organization; the control plane governs execution.
What NOT to import blindly
1. ISO certification as a safety certificate

Certification assesses conformity of a management system to a standard. It should not be represented as proof that every OMNI AI capability or clinical use is safe.

2. ISO 42001 as OMNI’s architecture

A management standard is an important external framework. It does not supply OMNI’s domain contracts, care authority, clinical memory, CNS, federation, or accountability ontology.

3. A new “AI Governance Domain” owning everything

Governance coordinates existing owners. It should not absorb model, release, runtime, clinical, security, privacy, and accountability truth into one record family.

4. PDCA as the replacement for OMNI’s loops

It is a management cadence, not a sufficient operating architecture.

5. Risk appetite as unlimited organizational discretion

Legal duties, patient rights, professional authority, and certain safety constraints are not negotiable appetite settings.

6. Equal controls for every AI use

That creates either excessive bureaucracy for trivial uses or inadequate protection for high-consequence uses.

7. Model metrics as complete monitoring

System behavior, user behavior, authority, workflow effects, patient outcomes, and tail failures also matter.

8. Documentation as control

Policies and training matter, but they must connect to gateways, permissions, release gates, runtime monitors, and recall mechanisms.

9. Audit success as operating success

A clean audit can coexist with poor real-world outcomes if scope, sampling, or control design is weak.

10. One generic “AI incident”

Product defects, service incidents, privacy events, security events, clinical safety events, and accountable obligations have different owners.

11. Supplier assurance based only on questionnaires or certificates

OMNI still needs independent evaluation, model/version lineage, contractual notification, runtime monitoring, and exit capability.

12. Continual improvement as autonomous self-modification

Improvement should enter through governed change, evaluation, release, and monitoring.

13. IBM’s comparison as legal or standards advice

Use it as an explanatory frame. Primary standards and legal sources must determine actual obligations.

14. Governance separate from product design

Late compliance review cannot repair a system whose identity, authority, evidence, appeal, and monitoring were omitted from architecture.

Do-not-miss lesson

OMNI has already designed many of the right governance mechanisms. The remaining enterprise question is whether they are assembled into one accountable AI management system that can declare scope, register every use case, assign ownership, classify risk, enforce controls, monitor live behavior, audit evidence, correct failure, and prove retirement.

Tiering tags per concept
AI management system as organizational operating envelope

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote-after-boundary-reconciliation

Governance versus model architecture

stale-vs-v3: AFFIRM · weight_tier: spine · status: promote

AI-use-case registry as central inventory

stale-vs-v3: AFFIRM · weight_tier: spine · status: promote

Named leadership and accountable ownership

stale-vs-v3: AFFIRM/PARTIAL · weight_tier: spine · status: promote

Multilayer data/model/system/use risk

stale-vs-v3: PARTIAL · weight_tier: vocabulary-to-spine · status: promote-with-authority-extension

Risk-tiered controls

stale-vs-v3: AFFIRM · weight_tier: spine · status: promote

Risk treatment and residual-risk acceptance

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote-after-Accountability-reconciliation

Runtime binding of governance requirements

stale-vs-v3: PARTIAL/AFFIRM · weight_tier: spine · status: promote-as-OMNI-differentiator

Auditability and certification

stale-vs-v3: PARTIAL · weight_tier: enterprise-vocabulary · status: watch/promote

Post-deployment drift, bias, and consequence monitoring

stale-vs-v3: AFFIRM · weight_tier: spine · status: promote

Supplier AI oversight

stale-vs-v3: PARTIAL · weight_tier: spine-support · status: promote

Internal audit and management review

stale-vs-v3: PARTIAL-or-ABSENT · weight_tier: governance-practice · status: promote

Nonconformity and corrective action

stale-vs-v3: PARTIAL · weight_tier: governance-practice · status: promote-with-object-separation

NIST / ISO / EU law as complementary layers

stale-vs-v3: AFFIRM · weight_tier: vocabulary · status: promote-with-primary-source-qualification

Certification as proof of AI correctness

stale-vs-v3: ABSENT · weight_tier: no-op · status: reject

One universal AI-governance record or loop

stale-vs-v3: AFFIRM-as-guardrail · weight_tier: no-op · status: reject

5. Hard read

Verdict: full-semantic governance source, but primarily an assembly and management-system source rather than a net-new primitive source.

This is not the deepest source in the corpus on:

AI risk;
technical controls;
monitoring;
evaluation;
clinical safety;
authority;
accountability.

But it reveals a real architectural risk in OMNI’s current pre-v4 state:

OMNI may have an excellent collection of governance mechanisms without yet declaring the organization-level system that owns their completeness, operation, review, and continual improvement.

That is not a trivial omission.

A future enterprise customer, auditor, regulator, insurer, or partner will not only ask:

Do you have model lineage?
Do you have evals?
Do you have audit trails?
Do you have a kill switch?

They will ask:

What is the scope of your AI-management program?
Where is the complete inventory?
Who is accountable?
What is your risk methodology?
How are risks treated and accepted?
How are vendor systems governed?
How are changes reviewed?
How do you monitor live performance and unintended effects?
How do incidents become corrective action?
How does leadership review whether the system remains effective?
How can a capability be recalled and retired?

OMNI should be able to answer those questions from operating records—not from founder memory or a scramble before diligence.

The likely v4 move is not a full ISO section and not a promise to seek certification now.

It is a constitutional statement:

OMNI operates AI through a lifecycle-wide, risk-based, auditable management system. Each use case is registered, owned, controlled, evaluated, monitored, correctable, recallable, and retireable. Governance compiles into the runtime and proof fabric.

The key OMNI distinction is that a generic management system usually stops at organizational assurance.

OMNI must connect it further into:

patient authority;
clinical authority;
source authority;
care obligations;
domain commits;
patient-visible correction;
remedy;
longitudinal outcomes.

That is where OMNI becomes healthcare-native rather than merely ISO-ready.

Strongest OMNI line:

AI governance becomes real only when organizational policy, technical control, human authority, runtime evidence, and accountable remedy form one continuous system.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

THIS IS GREAT!!!!!    I THINK SO AT LEAST....   GREAT ANALYSIS BY KNOX HERE!!! WE CANNOT LET THIS ESCAPE...  MUST BE INCORPRTAED AT NUMEROUS LEVELS.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-15` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

### Review 003 — Opus formal deep extraction (EVSRC-2026-000275) — ★ operator-flagged

**Read posture / tiering.** Formalizes Knox Review 001 + honors Nick Review 002 ("must be incorporated at numerous levels"). **Overall tier: full_semantic, governance-SPINE — low net-new mechanism count, but a genuinely important missing organizational WRAPPER: OMNI has the governance organs; it has not yet declared the AI management SYSTEM that governs them as one accountable program.** Siblings: 079 (AI gateway/firewall/model-registry/use-case-registry/shadow-AI), 138 (clinical-AI post-market monitoring/recall/silent-swap), Platform Loop (Build-OS/Release/Runtime), Accountability Loop, EDD/eval corpus (215/217/271), regulatory-policy posture (law-as-versioned-authority-layer). **The OMNI differentiator this source pressures: governance must COMPILE INTO RUNTIME CONTROLS + PROOF — policy that can't block/constrain/route/recall/prove is documentation, not control.** Dominant reality-check: **`doctrine=AFFIRM/PARTIAL · build=partial/absent`** (organs partly present; the management-system envelope + runtime-binding + management-review largely unbuilt/un-named).

**A. Concept clusters**

---
**Cluster 1 — Governance is a continuously-operated management SYSTEM, not a checklist (★ + operator keeper)**
| field | content |
|---|---|
| concept | ISO 42001 does for AI management what 27001 did for infosec: a continuously-operated, auditable, certifiable organizational system built around continual improvement across the whole lifecycle (Plan-Do-Check-Act) — "governance, not model architecture." Opens with the loan-denial: who validated? who monitored? who's responsible when wrong? |
| OMNI meaning | Governance = the organization's continuous operating system for deciding which AI may exist, under whose authority, with which controls, how monitored, how failure is corrected — NOT scattered safety features or a policy binder. **Every AI capability needs an accountable management envelope spanning conception→build→release→live-op→incident→correction→retirement.** "A good model can exist inside a badly governed system." |
| why | Reframes OMNI's dispersed governance organs as a nameable, accountable, auditable PROGRAM — the enterprise/diligence/regulator answer. |
| downstream homes | **thesis §A (trust/accountability)** · **thesis §B (AI substrate = governance too)** · **Platform Loop (massive)** · **§C AI control plane** |
| source anchors | "an AI management system to govern all of this" [0:16]; "not some checklist of controls…a system for managing AI risk continuously" [1:05]; "It's governance. Not model architecture" [1:23] |
| stale-vs-v3 | PARTIAL (organs exist; the management-system envelope not declared) · build=partial |
| weight_tier | spine |
| status | promote-after-boundary-reconciliation |

---
**Cluster 2 — The governed object = the AI USE CASE/system, not the model; management-system ≠ new god-domain**
| field | content |
|---|---|
| concept | The loan failure may come from data / selection / prompt / retrieval / entity-resolution / tools / business rules / orchestration / UI / overreliance / config / monitoring / appeal / ownership — not just "the model." Govern the whole deployed capability. |
| OMNI meaning | "Models are components; AI use cases are governed systems." AFFIRMS/SHARPENS the `AI_use_case_registry` (079) as the org spine (purpose/owner/affected-actors/models/data/tools/human-model/authority-limits/controls/validation/release/monitoring/supplier/incident-owner/retention). BUT the management system must NOT become one god-domain / "AI Governance Loop" / one giant AI record absorbing Build/Release/Runtime/Care/Security/Accountability — it COMPOSES accountable owners + evidence across them. Reconciles with `D0THES-DEC-033` + Polaris-is-composition. |
| why | Names the correct governed unit + prevents a governance god-object (the exact trap this source could induce). |
| downstream homes | **§C AI control plane / `AI_use_case_registry`** · **Polaris (composition)** · **all domain owners (truth stays home)** |
| source anchors | "who validated that model? Who monitored it…Who's responsible when it's wrong?" [0:07]; "govern all of this" [0:16] |
| stale-vs-v3 | AFFIRM (079 use-case registry) · build=partial |
| weight_tier | spine |
| status | promote |

---
**Cluster 3 — Governance must COMPILE INTO RUNTIME CONTROLS + PROOF (★ the OMNI differentiator)**
| field | content |
|---|---|
| concept | A management standard defines policy/objectives/processes/records/audit. But (OMNI correction) it must convert into enforceable mechanics: approved-models→route allowlist+lineage gate; high-risk action→authority gate; PHI→residency policy; model change→regression+release gate; prohibited use→capability-gateway block; appeal→remediation workflow; vendor failure→supplier-health+fallback; unsafe capability→kill switch+scoped recall; incident→corrective-action workflow. |
| OMNI meaning | **"Policy that cannot block, constrain, route, recall, or prove behavior is documentation — not control."** This is where OMNI exceeds a generic ISO implementation + generic IBM/NIST checklists (079/138 warned: healthcare controls must bind into runtime authority/consent/audit, not dashboard theater). `AI_control_runtime_binding` = the most important OMNI-specific sharpening. Also: `AI_control_plane` (operational mechanisms) vs `AI_management_system` (org governance) — each incomplete without the other. |
| why | The load-bearing translation that makes governance real; the diligence differentiator. |
| downstream homes | **§C AI control plane** · **Runtime Operations** · **Polaris/proof fabric** · **security (enforcement)** |
| source anchors | "put in the appropriate level of controls for our perceived level of risk" [2:12]; "auditable…certifiable…continual improvement" [1:15] |
| stale-vs-v3 | PARTIAL/AFFIRM (079 seeded runtime-enforcement; management→runtime compile not named) · build=absent |
| weight_tier | spine (differentiator) |
| status | promote-as-OMNI-differentiator |

---
**Cluster 4 — Multi-layer risk (data/model/system/use) + OMNI must add authority + consequence risk; risk-tier governs actual controls**
| field | content |
|---|---|
| concept | Risk across layers: data (bias/quality/consent), model (accuracy/explainability/drift), system (integrations/security), use (misuse/unintended consequences). Not all risk equal → controls proportional to risk. Risk treatment: mitigate/transfer/avoid/accept. |
| OMNI meaning | Useful taxonomy but incomplete for care — OMNI EXTENDS with **authority risk** (wrong actor/patient / invalid delegation / expired consent / candidate-treated-as-commit / external-AI-as-trusted-principal) + **consequence/obligation risk** (delayed care / missed escalation / patient burden / financial harm / continuity failure / owed remedy). Risk profile (consequence severity · reversibility · autonomy · data-sensitivity · population · authority · uncertainty · novelty · exposure · blast radius · detectability · review latency · dependency criticality) must DRIVE required evidence / eval reps+confidence (ties 271) / approval roles / canary scope / monitoring / permitted autonomy / incident clocks / recall posture / audit frequency. "Risk classification matters only when it changes what the system is allowed to do." |
| why | Turns risk-tiering into actual behavioral gating + adds the care-critical authority/consequence layers. |
| downstream homes | **§A candidate→commit (authority risk)** · **Care Operating Model (consequence/obligation)** · **Build-OS/Release (risk→controls)** · **271 (eval reps by risk)** |
| source anchors | "not all risk is equal because not all systems are equal" [2:02]; "data risk…model risks…system level risks…usage risks" [2:17] |
| stale-vs-v3 | PARTIAL · build=absent |
| weight_tier | spine |
| status | promote-with-authority-extension |

---
**Cluster 5 — Named accountable ownership before deployment; residual-risk-acceptance is authority-bearing; risk appetite ≠ overriding rights/law**
| field | content |
|---|---|
| concept | Leadership section: "if no one is responsible, it doesn't get done" — assign AI accountability + governance structure. Risk acceptance: not all risk eliminated; some accepted. Risk appetite/tolerance shape choices. |
| OMNI meaning | Differentiated ownership before risk materializes (executive/product/domain-truth/clinical/model/security/privacy/release/runtime/incident/owner-of-last-resort) — NOT collapsed into "the AI team" (ties Accountability: restore≠repair≠remedy). `AI_risk_acceptance`/`residual_risk_authority` = NOT a checkbox: exact risk + scope + evidence + residual likelihood/severity + population + controls + duration + monitoring + expiry/re-review + accepting authority + disclosure requirement + whether legally acceptable at all. GUARDRAIL: "the enterprise may accept its OWN residual risk; it cannot casually accept another person's rights or safety away" — appetite operates only inside lawful/ethical bounds (consent/privacy/scope/required-human-authority/standard-of-care are non-discretionary). |
| why | Makes accountability + risk-acceptance real, authority-bearing, and rights-bounded. |
| downstream homes | **Accountability Loop** · **§A authority** · **governance body / decision ledger** · **legal/compliance overlay** |
| source anchors | "assign AI accountability. Who's responsible?…If no one is, then it doesn't get done" [3:26]; "we don't eliminate all risks…decide to accept certain risks" [3:58] |
| stale-vs-v3 | AFFIRM/PARTIAL · build=absent |
| weight_tier | spine |
| status | promote-after-Accountability-reconciliation |

---
**Cluster 6 — Lifecycle governance spans Build+Release+Runtime; post-market monitoring + durable corrective action; auditability can still be theater**
| field | content |
|---|---|
| concept | PDCA: Plan (scope/policy/risk/objectives/controls/owners) → Do (build/validate/release/deploy/train/operate) → Check (monitor/evaluate/audit/drift/incidents/suppliers) → Act (contain/correct/improve/rollback/recall/retire). Auditable + certifiable. |
| OMNI meaning | PDCA = governance CADENCE, NOT OMNI's care/platform ontology (don't rewrite Care/Platform/Accountability as one PDCA loop). "Do" spans the whole Platform Loop (Build-OS produces candidate → Release Ops promotes/canaries/rolls-back/recalls → Runtime Ops monitors → evidence feeds back) — governance that stops at pre-release validation isn't lifecycle governance. "Check" = healthcare post-market monitoring (model-version-per-use / affected patient / recommendation / human disposition / committed action / outcome / override pattern / demographic disaggregation / tail events — ties 138). "Act" = durable corrective action = the Accountability Loop (contain / disable / revert / repair data / correct records / notify operators+patients / reperform / refund / regression test / independently verify closure) — "an incident isn't closed when the model is fixed; it closes when affected obligations resolve + recurrence controls are verified." GUARDRAIL: certification proves a management system EXISTS; it can't certify every AI decision correct — "audit evidence ≠ live control effectiveness"; evidence should be generated BY operating the system (proof fabric), not reconstructed before an audit. |
| why | Places the management system across the whole Platform+Accountability architecture + keeps audit honest. |
| downstream homes | **Platform Loop (massive)** · **Runtime Operations + clinical monitoring (138)** · **Accountability Loop** · **Polaris/proof fabric** |
| source anchors | "plan, do, check, act model" [1:23]; "monitor performance, look for bias drift and unintended consequences" [1:44]; "incident handling…corrective actions…continuous improvement" [4:57] |
| stale-vs-v3 | AFFIRM/PARTIAL · build=partial |
| weight_tier | spine |
| status | promote (with loop-separation + object-separation) |

---
**Cluster 7 — Supplier AI oversight + model-change-is-a-system-change; management review = executive function; role-scoped competence; appeals/contestability**
| field | content |
|---|---|
| concept | 42001 includes supplier oversight, change management, support/training, internal audit, management review. Compared: NIST AI RMF (voluntary guidance — "what good looks like"), ISO 42001 (certifiable governance — "how to manage consistently"), EU AI Act (law with teeth, tiered unacceptable/high/limited/minimal — "how you comply"); complementary layers. |
| OMNI meaning | (a) **Supplier oversight is first-class** — "outsourced intelligence does not outsource accountability" (approved supplier/version/data-terms/residency/subprocessor/update-notification/silent-change-protection/SLA/incident-notice/eval-rights/fallback/exit-portability/recall-cooperation); ties `silent_model_swap_guard`/`model_version_of_record` (079/138). (b) **A model change is a system change even when OMNI code is unchanged** → lineage update + impact + regression + risk review + release decision + monitoring reset. (c) **Management review = executive function** — recorded risk/resource/release/remediation decisions (AI estate by tier, incidents, unresolved corrective actions, eval debt, drift, override patterns, outcome disparities, risk acceptances near expiry, capabilities to pause/recall) — "executives govern by recorded decisions, not endorsing principles." (d) **Role-scoped competence** (dev/clinician/operator/reviewer/patient) — not one generic AI course. (e) **Appeals/contestability** (the loan-denial's missing half) — disclosure + fit explanation + correction + human review + challenge/appeal + evidence preservation + remedy; a patient may need to challenge eligibility/triage/scheduling/classification/inferred-fact/routing. (f) **Layering**: external law → recognized standards → OMNI doctrine/contracts → policy overlays → runtime controls → proof; "standards advise + structure; law constrains; OMNI operationalizes." |
| why | The full assembly + the care-native extensions (appeals, supplier, executive review) the source underdevelops. |
| downstream homes | **Tool/Connector governance (supplier)** · **Release Ops (model-change)** · **governance body/decision ledger (management review)** · **Settings/jurisdiction overlays + law-as-authority-layer** · **agency/appeal doctrine** · **Federation (operator responsibilities)** |
| source anchors | "Supplier, AI, oversight…covered in this section" [4:40]; "NIST…voluntary…ISO 42001…certifiable…EU AI Act…this one is law" [6:01]; "complementary layers" [8:09]; "no explanation, no appeal" [0:00] |
| stale-vs-v3 | PARTIAL (079/138 seed supplier + monitoring; management-review/appeals/role-competence undernamed) · build=absent |
| weight_tier | spine / governance-practice |
| status | promote (supplier + model-change-as-system-change + management-review + appeals) |

---

**B. Net-new primitives (dedup vs baselines + 079/138 + Platform/Accountability + C3.5–3.8)**

- `AI_management_system` (+ `AI_management_system_scope`, `AI_governance_body`, `AI_management_review`, `AI_internal_audit`) — **thin net-new as an umbrella/enterprise DECLARATION + org-boundary artifact** (organs exist; the accountable program envelope + scope + executive review are undernamed). NOT a new domain. → promote-after-boundary-reconciliation (the likely v4 constitutional statement).
- `AI_control_runtime_binding` — **★ most important OMNI-specific SHARPENING** (governance compiles to runtime controls + proof). → promote-as-differentiator.
- `AI_use_case_registry` (+ owner/risk-class/control-envelope) — **EXISTS-AS: 079.** AFFIRM as the management-system spine.
- `AI_risk_assessment` / `AI_risk_treatment_plan` / `AI_risk_acceptance` + `residual_risk_authority` — **SHARPEN** (consolidate dispersed risk handling; risk-acceptance = authority-bearing + rights-bounded).
- authority-risk + consequence/obligation-risk layers — **SHARPEN** the data/model/system/use taxonomy for care.
- `AI_supplier_oversight` / `AI_supplier_change_event` — **EXISTS-AS/SHARPEN: tool/vendor governance + `silent_model_swap_guard` (079/138).**
- `AI_nonconformity` vs product-defect vs runtime-incident vs safety-event vs accountability-obligation — **SHARPEN: keep distinct owners** (ties Accountability).
- `AI_appeal_path` / `AI_contestability_record` — **SHARPEN** agency/correction/remedy doctrine.
- `AI_regulatory_obligation_map` / `AI_standard_control_mapping` — **EXISTS-AS: law-as-versioned-authority-layer + regulatory_compliance_evidence lane.**
- REJECT: certification-as-safety-certificate; ISO-42001-as-OMNI-architecture; a new "AI Governance Domain" god-object; PDCA-as-OMNI-ontology; risk-appetite-as-unlimited-discretion; documentation-as-control; audit-success-as-operating-success; one-generic-"AI incident"; continual-improvement-as-autonomous-self-modification.

**Net-new verdict: low net-new mechanism, but 1 important missing WRAPPER (`AI_management_system` + scope + management-review) + 1 key differentiator SHARPEN (`AI_control_runtime_binding`) + several consolidating sharpenings** (risk-assessment/acceptance + authority/consequence risk + supplier-oversight + nonconformity-separation + appeals). Operator-flagged for incorporation at numerous levels (thesis §A/§B, §C control plane, Platform Loop, Accountability, Polaris, Settings/law).

**C. Reread flags (operator-flagged — incorporate at numerous levels)**
- **v4 constitutional statement:** draft the AI-management-system declaration (Cluster 1 + Knox §30) — "OMNI operates an AI management system across the full capability lifecycle; every use case registered/purpose-bound/risk-classified/owned/validated/released/monitored/auditable/correctable/recallable/retireable; governance compiles into runtime controls + proof; the management system coordinates Build-OS/Release/Runtime/Security/Privacy/Care/Accountability without replacing their ownership." Reread Clusters 1–3.
- **§C AI control plane + Runtime:** Cluster 3 (`AI_control_runtime_binding`) — the differentiator; reread when authoring the control plane.
- **Platform + Accountability Loops:** Cluster 6 (lifecycle spans Build/Release/Runtime; corrective action = Accountability; audit≠effectiveness).
- **Risk model:** Cluster 4 (authority + consequence risk extension) — reread with §A candidate→commit + 271 eval-reps-by-risk.
- **Settings/law:** Cluster 7 layering (NIST/ISO/EU-law/OMNI) + `AI_regulatory_obligation_map`.
- Take standards/legal specifics from PRIMARY sources; don't treat this IBM explainer as authoritative; certification ≠ safety (`GRD-039`).

**D. One-line hard read**
Full_semantic **governance-SPINE, operator-flagged**: OMNI has the governance organs but not yet the declared, accountable **AI management system** that owns their completeness/operation/review — and its differentiator must be that *governance compiles into runtime controls + proof* — *AI governance becomes real only when organizational policy, technical control, human authority, runtime evidence, and accountable remedy form one continuous system.*

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000006` (ai-corpus wave-5) · concept_registry: `EVRUN-2026-000006_ai-corpus-wave-5_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000006_ai-corpus-wave-5_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `thesis §A (trust/accountability) + §B (AI substrate incl. governance) · §C AI control plane (AI_use_case_registry + AI_control_runtime_binding — differentiator) · Platform Loop (massive — management system spans Build-OS/Release/Runtime) · Accountability Loop (corrective action; incident≠closed-until-obligations-resolved) · Polaris/proof fabric (evidence by operating) · risk model (authority + consequence risk; risk-tier→controls, ties 271) · Settings/law overlay (NIST/ISO/EU layering; AI_regulatory_obligation_map) · Federation (operator responsibilities) · clinical-AI monitoring (138)` · promotion: `watch → promote-candidate (low net-new mechanism; 1 missing WRAPPER AI_management_system + management-review + scope; 1 differentiator SHARPEN AI_control_runtime_binding; consolidating risk/supplier/appeals sharpenings); certification-as-safety / ISO-as-architecture / governance-god-domain / PDCA-as-ontology rejected GRD-039`
- **★ Operator-flagged (Review 002): "must be incorporated at numerous levels."** Likely v4 constitutional statement candidate (AI-management-system declaration). **Cross-source convergence:** governance-spine atop **079** (AI control plane / use-case+model registries) + **138** (clinical-AI post-market monitoring/recall) + Platform + Accountability + eval corpus (**215/217/271**) + law-as-authority-layer. Pairs with **270** (governance/ontology) + **269** (owner-authored objectives) as the wave-5 governance/authority spine. Folds into wave-5 registry as the AI-governance/management-system anchor.

## §5 — Change log
- `2026-07-14` — source file created (wave-5 scaffold; `EVRUN-2026-000006`).
- `2026-07-15` — Opus Review 003 formal deep extraction written into §3 (formalizing Knox Review 001 + honoring Nick Review 002 "incorporate at numerous levels"); §0/§0.1 metadata filled (IBM Technology · Jeff Crume · ISO 42001); file renamed `_TK` → `_iso-42001-ai-management-system-governance`; §4 pointers filled (`EVRUN-2026-000006`); status → `analyzed`. Verdict: full_semantic governance-SPINE; low net-new mechanism but a missing accountable AI-management-system WRAPPER + the OMNI differentiator that governance must compile into runtime controls + proof; keeper = governance is a continuous operating system, not a checklist; certification/ISO-as-architecture/god-domain/PDCA-as-ontology rejected (`GRD-039`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

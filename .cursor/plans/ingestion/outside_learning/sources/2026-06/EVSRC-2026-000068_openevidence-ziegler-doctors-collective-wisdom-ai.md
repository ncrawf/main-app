# EVSRC-2026-000068 — Open Evidence Captures Doctors' Collective Wisdom with AI ft. Zachary Ziegler

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN — **highest in-domain source of batch**)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (content-verified: OpenEvidence/Ziegler); Knox read in §3 Review 001 (content-verified: clinical-AI OMNI translation). Awaiting EVRUN — high clinical corroboration bar.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000068`  ·  filename: `EVSRC-2026-000068_openevidence-ziegler-doctors-collective-wisdom-ai.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=nPOZ1nA2Rlw`
- source_title: `Open Evidence Captures Doctors' Collective Wisdom with AI ft. Zachary Ziegler`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  series: `Training Data`  ·  published_at: `2025-05-12`  ·  views_at_capture: `64,823`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `interview`  ·  source_reliability_context: `founder / practitioner (OpenEvidence CTO — **clinical AI, DIRECT to OMNI's domain**)`  ·  topic_tags_light: `[clinical_decision_support, physician_facing_ai, distributed_medical_knowledge, collective_wisdom_aggregation, point_of_care_ai, healthcare_adoption, clinical_memory]`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Zachary Ziegler` · role_in_source: `interviewee` · affiliation_at_publication: `OpenEvidence (CTO)` · speaker_type: `founder / technologist (clinical decision-support AI)` · authority_context: `**HIGHEST in-domain relevance of the batch: clinical AI used at point of care.** ~**25% of US physicians now rely on OpenEvidence daily** for life-saving information that augments clinical decision-making while navigating complex patient scenarios; preview of work to **aggregate distributed medical knowledge from "millions of wet brains" to improve patient care worldwide.** Direct competitor/comparator + design reference for OMNI clinical-AI, Clinical Memory, and CNS clinical-candidate flow` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `Training Data hosts`  ·  event_context: `Sequoia "Training Data" podcast`  ·  perspective / conflict notes: `OpenEvidence CTO — frames physician-facing clinical AI favorably (own product). **VERY HIGH OMNI relevance + a Lens-A comparator (clinical decision-support OMNI must match/contrast). Bears directly on: Clinical Memory, CNS clinical-candidate→adoption flow, §A trust (augment-not-replace clinician), §B AI axis, and "collective wisdom aggregation" vs OMNI's governed longitudinal patient-specific memory. NOTE: payload-noun ≠ domain (GRD-026) — "clinical knowledge" here is decision-support, distinct from OMNI's per-patient Clinical Memory; do not conflate. Also distinct from the reserved OMNI Medica literature corpus (FWREG-006).** Capture; route via gates; strong promotion candidate but high corroboration bar for anything clinical.`

> Authority is descriptive, not worship (`GRD-039`): OpenEvidence CTO = very high in-domain relevance, but a vendor pitching its own clinical product; claims (25% of US physicians, "millions of wet brains" aggregation, life-saving augmentation) route through evidence → interpretation → **gated promotion with a high clinical corroboration bar** (`GRD-039` tier-3: an unverified source can change your mind, never your code — especially clinical).

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = OpenEvidence transcript; §3 = matching Knox read) · [x] EVRUN needed? (yes — full_semantic; **clinical AI — Clinical Memory / CNS clinical-candidate / §A augment-not-replace; high corroboration bar**) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️


Search in video
0:02
Zach and Open Evidence are trying to
0:04
really help those people that are
0:07
helping the people in our society in
0:08
greatest need with an AI that elevates
0:12
and propels forward healthcare
0:14
providers. Zach.
0:18
All right. Thank you. All right. So,
0:21
Open Evidence is a medical search
0:22
platform for physicians. Uh and in the
0:24
last 12 months, we've grown to have over
0:26
25% of US practicing physicians as
0:29
monthly active users. And the average
0:30
user uses us every single day. Uh and so
0:34
one of the really special things about
0:35
this moment is that we hear very
0:36
frequently from our users about how
0:39
they're using open evidence and telling
0:40
us their stories. And so I thought what
0:42
better way to give a demo of open
0:44
evidence and this platform than just
0:47
collectively walking through a very real
0:49
story that someone has told us exactly
0:51
about. Um, so we got this note a few
0:54
days ago from Dr. Susan Wolver, and
0:56
Susan said, um, "Good morning. I want to
0:58
tell you about how Owie helped me that
0:59
you may not have heard about yet. I'm an
1:01
internal medicine physician who recently
1:02
had to respond to a medical emergency in
1:05
flight. Um, Owie helped me to understand
1:07
how immunompromised the patient was and
1:09
helped me make a treatment plan I might
1:10
not have otherwise made. I'd be happy to
1:12
tell you more if you're interested.
1:13
Thank you for providing an AI product
1:14
that I can
1:15
trust." Um, all right. So, we're going
1:17
to put ourselves in Susan's shoes and
1:19
walk through as a demo, you know,
1:21
exactly what she went through and how
1:22
she used open evidence. So, Susan's on a
1:25
plane and she hears what I suspect most
1:27
doctors spend most of their lives
1:29
preparing for, which is, is there a
1:30
doctor on board? Uh, and so she goes to
1:33
investigate and it turns out that
1:35
there's a 63-year-old uh man who has
1:38
over the course of the flight developed
1:39
a pretty severe uh rash over the uh on
1:43
his arm and it's kind of unclear what it
1:45
is. She suspects that it might be
1:47
chickenpox. So we're going to follow her
1:52
steps. Um so depending on where he's
1:55
been traveling, it could be more or less
1:57
likely that it's chickenpox. And
1:58
depending on the incubation period, um
2:00
that'll that'll help inform, you know,
2:02
what is this is this chickenpox? Is this
2:04
something else? Uh something like that.
2:06
So she puts in open evidence um gets an
2:08
answer. Um in this case, this is a
2:10
pretty simple question. Um it doesn't
2:11
require crazy references. you know, one
2:13
of the key references is the CDC yellow
2:15
book, which um is just a trusted
2:16
resource in the space. And turn turns
2:18
out the answer in this case was 15 days.
2:20
And so, working through talking with the
2:21
patient, it it turns out yes, actually
2:23
this this actually very well could be
2:24
chickenpox. But here's where it gets
2:26
complicated. Uh it turns out the patient
2:28
also had prostate cancer and was on a
2:30
drug called extendi for prostate cancer.
2:32
So chickenpox is not super serious if
2:35
you're a kid. Um, if you're an adult, it
2:37
can be very serious, but if you're an
2:39
imunocmpromised adult, it can be
2:40
extremely extremely serious and very
2:42
dangerous to the extent of potentially
2:44
in this case having to perform an
2:45
emergency landing or turning the plane
2:47
around or something like that. Uh, and
2:49
so the question she asked was the
2:53
following. Um, she had some idea that,
2:56
you know, he the patient could be
2:57
imunocmpromised. uh many cancer drugs do
3:01
uh suppress the immune system and often
3:03
cancer itself acts uh as some amount of
3:06
imunosuppressive. So in this case um
3:08
open evidence is going to search over um
3:11
you know all trusted references the
3:12
medical literature we're looking at
3:14
leading journals such as the journal of
3:15
imunotherapy of cancer recent research
3:18
from you know just a few months ago in
3:19
principle uh and the answer that she
3:21
gets is um that the level of
3:23
imunosuppression is moderate. So yes
3:26
she'll be a little bit imunosh
3:27
suppressed but you know probably it's
3:30
they don't have to turn the plane
3:31
around. Um but still there's a question
3:33
of what you know what do we do in this
3:34
case? So she asked the third question um
3:37
here which is how to manage chickenp fox
3:39
in this case and this is you know really
3:41
trying to get a sense of how urgent is
3:42
this? Is this something that we really
3:44
need to get this guy medical attention
3:46
in the next 30 minutes or can this wait
3:48
a little
3:49
bit? Um and in this case open evidence
3:51
tells her um a series of drugs and kind
3:54
of a a reasonable treatment plan for how
3:56
to uh how to progress in the situation.
3:59
It's based on again you know recent
4:01
literature um and and trusted resources.
4:04
Um and the answer is yeah there does
4:07
there should be some urgency to to
4:09
getting drugs um soon but you know they
4:11
don't need this person doesn't need a
4:13
drug in the next 30 minutes or they're
4:14
going to die. And so on the basis of
4:16
this um they don't turn the plane around
4:18
they keep going and everyone kind of
4:20
continues on their day. They make the
4:21
treatment available upon landing and uh
4:24
everyone's okay. Uh and so for me I
4:26
think what this is what this really
4:28
highlights I think about open evidence
4:29
and and really about uh patient care
4:31
much more broadly is that every single
4:33
patient is a longtail. Every patient has
4:35
their own core morbidities and context
4:37
and it's just really hard to be a
4:39
doctor. It's really hard to there's just
4:41
no way to cram all that into one
4:42
person's head. Uh and so open evidence
4:44
acts as kind of a shoulder that
4:46
physicians can lean on that they can uh
4:48
that they can use to help them with
4:49
their job. Um and you know so that's
4:52
really the reason um we've gone through
4:54
this example for the past three minutes
4:55
of this you know exact one specific
4:57
patient case. This is something that
4:59
right now is happening 10 times a second
5:00
around the United States and around the
5:02
entire
5:03
world. Um all right so everything I've
5:06
just described is open evidence as it
5:07
exists today. Uh and uh there's a ton of
5:11
stuff that we're working on right now
5:12
that I'm super excited about. We're
5:13
getting more into uh directly into
5:14
physician workflows. We're building out
5:16
new modalities for medical reasoning and
5:19
uh medical research. Uh and then there's
5:21
one more thing which I wanted to give
5:22
just a very small sneak peek to this
5:24
group here. Uh and that is um the
5:28
following. So for as much medical
5:30
reasoning and for as much medical
5:31
knowledge as there is that's written
5:33
down somewhere in papers and guidelines
5:34
in the literature there's as much or
5:36
more that's only that only exists in you
5:39
know distributed across millions of wet
5:42
brains, millions of physicians around
5:44
the world. Uh and because of our scale,
5:46
open evidence now has the unique
5:48
opportunity for the first time in
5:49
history to actually be the entity that
5:52
takes all of that, encodes that, um
5:54
fetches all that information and
5:55
aggregates it and then puts it back into
5:57
open evidence to uh improve answers and
6:00
to improve care for everyone. So I'm not
6:02
going to get uh at all deep into this
6:03
example but um here literally just this
6:06
week um this is the first example I'm
6:08
sharing here um where this is a question
6:10
and answer where for the first time this
6:12
answer has been augmented by the
6:14
aggregate clinical wisdom of some of the
6:16
best GI doctors in the entire world and
6:19
the effect is that it goes into um the
6:21
system and we're able to provide better
6:23
answers and better care uh than we
6:24
otherwise would. So that's what I have.
6:27
Thank you.



&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `Open Evidence Captures Doctors' Collective Wisdom with AI ft. Zachary Ziegler`  ·  visible_channel: `Sequoia Capital` (211K subs)
- visible_url: `youtube.com/watch?v=nPOZ1nA2Rlw`  ·  visible_published: `May 12, 2025`  ·  visible_views: `64,823`  ·  likes: `236`
- visible_description: *"OpenEvidence's CTO shares how 25% of US physicians now rely on its technology daily for life-saving information that augments clinical decision-making while navigating complex patient scenarios. He shares an exclusive preview of their groundbreaking work to aggregate distributed medical knowledge from 'millions of wet brains' to improve patient care worldwide."*
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_1.26.59_AM-805a14f6…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️


This one is massive for OMNI — maybe the most directly healthcare-native source in the batch so far.

This is not generic AI substrate. This is the closest external validation yet for clinical RAG, physician-assistive reasoning, long-tail patient context, evidence layering, collective clinical wisdom, and why OMNI must separate medical literature, clinician judgment, patient-specific context, and committed care action.

Core takeaway

OpenEvidence is positioning itself as a trusted medical reasoning/search layer for physicians, not a consumer chatbot. The demo walks through an in-flight emergency where a physician used OpenEvidence to reason through a possible chickenpox case in an adult patient with prostate cancer on Xtandi, assess immunosuppression risk, decide urgency, and avoid unnecessary emergency diversion while still arranging treatment after landing. The key point Zach makes is that every patient is a long tail: comorbidities, medications, context, and scenario-specific details make it impossible for one doctor to hold everything in their head.

That is OMNI-core.

OMNI translation
1. This validates “clinical AI as physician shoulder,” not AI doctor replacement.

OpenEvidence’s posture is very important. It is helping physicians make better decisions; it is not claiming to replace the physician.

That maps perfectly to OMNI:

Clinical AI should augment licensed clinical judgment, not silently become clinical authority.

OMNI can help gather evidence, contextualize risk, summarize literature, surface options, and prepare a plan — but the clinician/domain authority still commits.

This reinforces the existing OMNI rule:

AI proposes / retrieves / reasons / drafts. Clinician or owning domain adopts and commits.

2. “Every patient is a long tail” is a major OMNI doctrine line.

This may be the biggest quote-level concept.

The patient is not “chickenpox.”
The patient is:

age,
rash,
travel/incubation context,
prostate cancer,
Xtandi,
possible immunosuppression,
in-flight environment,
time-to-care constraint,
limited resources,
urgency threshold.

That is exactly why OMNI cannot run on static protocols alone.

OMNI’s version:

Every patient event is a long-tail context packet.

A patient message, lab, photo, aftercare concern, refill issue, or symptom report is not just one classification. It is a context-dependent clinical/operational scene.

3. Literature-backed answers need source hierarchy.

The demo explicitly shows OpenEvidence pulling from trusted references like the CDC Yellow Book and recent medical literature. That matters.

OMNI needs this same source stratification:

guidelines,
primary literature,
drug labels,
specialty consensus,
institutional protocol,
clinician-authored policy,
patient-source info,
local operator procedure,
prior provider decision,
AI-generated summary.

These cannot be flattened.

Doctrine:

Clinical retrieval must preserve source authority, recency, specialty relevance, and applicability to the patient context.

4. This pressures OMNI’s D7 → Observation → Clinical Memory stack.

OpenEvidence retrieves and reasons across medical knowledge. OMNI must go further because OMNI also owns patient-specific operational state.

For OMNI, a clinical question may require:

D7 documents/artifacts,
Observation values,
Clinical Memory assertions,
medication history,
patient messages,
provider notes,
care commitments,
entitlement/scheduling constraints,
consent and communication state.

So the correct pattern is not:

“Ask AI medical question.”

It is:

Build authority-labeled clinical context packet → retrieve evidence → reason → produce candidate → clinician/domain review → commit/adopt/no-op.

This is exactly the layered truth model.

5. The “collective wisdom of wet brains” is both huge and dangerous.

OpenEvidence’s future direction is to aggregate distributed physician knowledge — things not written down in papers/guidelines but living across millions of clinicians — and put that back into the system to improve answers.

This is extremely relevant to OMNI, but it needs hard governance.

OMNI should absolutely want to learn from:

physician corrections,
provider decisions,
specialist reasoning,
edge-case patterns,
clinical review outcomes,
safety escalations,
patient response patterns,
workflow outcomes.

But “collective clinician wisdom” is not automatically truth. It can include:

local practice variation,
outdated habits,
specialty bias,
incomplete context,
anecdote,
medico-legal conservatism,
overconfidence,
conflicting standards.

So OMNI’s rule should be:

Clinician wisdom can become evidence for learning; it does not become doctrine without provenance, aggregation logic, review, and adoption gates.

6. This is the clinical version of the Human Context Reservoir.

Listen Labs gave us the customer-research version.

OpenEvidence gives us the clinical-wisdom version.

But they are different reservoirs:

Listen Labs: customer/user context, product research, preference, friction.
OpenEvidence: physician knowledge, clinical reasoning, medical evidence, edge-case care wisdom.

OMNI needs both, but they must not cross-contaminate.

Potential reservoir families:

medical_literature_reservoir
clinical_guideline_reservoir
clinician_wisdom_reservoir
patient_context_reservoir
care_outcome_reservoir
operator_workflow_reservoir

And every one needs authority labels.

7. “10 times a second” scale implies evaluation and trace burden.

Zach says this type of physician query is happening constantly at large scale.

At that scale, clinical AI needs:

logs,
citations,
answer trace,
feedback,
correction capture,
safety monitoring,
specialty review,
hallucination detection,
outcome tracking,
escalation pathways.

For OMNI, this is not optional. Any clinical assist layer needs trace and audit.

Doctrine:

Clinical AI at scale requires answer provenance and feedback loops, not just high-quality generation.

Where it lands

Clinical Memory / Observation / D7: massive. This is direct evidence for layered clinical truth and patient-specific context.

Knowledge Reservoirs: massive. Medical literature + clinician wisdom + patient-context reservoirs need separate authority models.

CNS / orchestration: major. Patient-specific clinical questions become candidates routed through context, evidence, risk, and clinician adoption.

Thesis §B — AI substrate: major. Medical reasoning, evidence retrieval, multimodal/knowledge integration, feedback learning.

Thesis §C: medium-to-major. If physician agents, patient agents, and clinical tools exchange evidence/actions, capability boundaries matter.

Product wedge: major. OMNI’s clinical wedge should likely start as provider-assistive, not autonomous care replacement.

Safety / governance: massive. This is where OMNI must be more rigorous than generic AI apps.

Doctrine / primitive pressure

Potential concepts:

clinical_question
clinical_context_packet
evidence_backed_answer
medical_source_authority
clinical_applicability_state
physician_assistive_reasoning
clinician_wisdom_reservoir
clinical_wisdom_contribution
specialist_consensus_signal
evidence_to_recommendation_trace
clinical_adoption_required
long_tail_patient_context
patient_specific_risk_assessment
trusted_reference_set
literature_recency_state
clinician_feedback_signal
clinical_answer_audit

Keeper doctrine:

Every patient is a long-tail context problem; OMNI must combine patient-specific context, trusted medical evidence, and clinician judgment without collapsing them into one undifferentiated AI answer.

Second keeper:

Collective clinician wisdom is powerful evidence, but it must be provenance-labeled, reviewable, and adoption-gated before it changes care doctrine or patient-specific action.

What not to import blindly

Do not copy “medical search for physicians” and assume that equals OMNI. OpenEvidence is one layer; OMNI is broader care/business operating infrastructure.

Do not let physician-assistive search become patient-facing medical advice without stricter gates.

Do not treat aggregated clinician behavior as medical truth.

Do not let literature retrieval bypass local clinical policy, licensing, consent, or provider responsibility.

Do not make OMNI’s clinical AI sound more autonomous than the authority model allows.

Do not conflate “trusted answer” with “committed care plan.” A physician still owns adoption.

Do-not-miss lesson

The clinical long tail is the product.

OMNI-specific:

OMNI’s clinical intelligence must be a governed bridge between patient context, medical evidence, and clinician adoption — not a chatbot that sounds medical.

Shorter:

Evidence informs. Clinicians adopt. OMNI commits only through governed care authority.

Priority / confidence

Priority: 5/5
Confidence: 5/5
Suggested analysis depth: full_semantic

This should be routed as a top-tier source for clinical RAG, clinician wisdom reservoirs, Clinical Memory, Observation, CNS clinical-risk routing, provider-assistive workflows, and OMNI’s non-negotiable distinction between evidence, reasoning, adoption, and care commit.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus deep-read extraction  ·  layer: `analysis_nonbinding`  ·  EVRUN-2026-000001 (G11 care-adjacent) ★HIGHEST CARE-ADJACENT AUTHORITY
- reviewer: `Opus` · type: `AI assistant` · at: `2026-06-08` · purpose: `registry-first concept extraction → routing; FWREG-006/007 anchor` · binds nothing (`GRD-036`/`GRD-044`)

**18 clusters. OpenEvidence/Ziegler. ★REREAD MANDATORY when authoring the clinical-evidence reservoir (FWREG-006/007). BOUNDARY: ABSORB clinical-evidence-reservoir doctrine · INTEGRATE OpenEvidence-like service behind capability envelope · DIFFERENTIATE (OMNI = governed longitudinal substrate, not literature-Q&A). Keeper: Evidence informs. Clinicians adopt. OMNI commits only through governed care authority.**
1. **physician-shoulder-augment-not-replace** — AI gathers evidence/contextualizes risk/surfaces options; licensed clinician commits. §A/§8, CNS candidate→review→commit, KR (output = evidence_candidate not assertion), security HITL-permanent, CM adoption gate. "shoulder that physicians can lean on" 4:44 · "AI product that I can trust" 1:13. **PARTIAL → spine.**
2. **every-patient-is-long-tail** — no patient = single protocol label; each encounter = long-tail context packet. (in-flight chickenpox = age+rash+travel+prostate-cancer+Xtandi+immunosuppression+in-flight+time-to-care). §A/§10, CNS `clinical_context_packet`, Build-OS eval (compound cases), KR applicability filtering. "every single patient is a longtail" 4:33. **ABSENT → spine.**
3. **clinical-context-packet** — assemble authority-labeled packet (D7/Obs/CM/meds/messages/notes/entitlements/consent + constraints) BEFORE retrieval/reasoning. §A/§8, CNS `clinical_context_packet` scopes reservoir queries, Build-OS packet tests, KR query-param+applicability-filter, FWREG-006 packet↔literature binding. "depending on where he's been traveling" 1:55. **PARTIAL → spine.**
4. **medical-source-authority-hierarchy** — retrieval preserves stratified authority (guidelines/primary-lit/labels/CDC/specialty-consensus/protocol/clinician-policy/patient-reported/AI-summaries); never flattened. §A, CNS `medical_source_authority` per chunk, KR/FWREG-006 authority-class taxonomy, security (low can't override high). "CDC yellow book, trusted resource" 2:13. **PARTIAL → spine.**
5. **literature-grounded-point-of-care-synthesis** — point-of-care Q&A grounded in searchable literature w/ visible references = core FWREG-006 pattern. §B/§10, CNS literature-query-scoped-by-packet+envelope, Build-OS retrieval/hallucination/citation evals, KR/FWREG-006 PRIMARY HOST, GRD-041 fence (corpus OUT of Evidence Plane). "medical search platform for physicians" 0:21. **ABSENT → spine.**
6. **evidence-to-recommendation-trace** — every output carries trace (sources/order/synthesis/uncertainty) for audit/correction/medico-legal. §A/§C, CNS `evidence_to_recommendation_trace`, Build-OS trace-as-eval-replay, KR derivation edges, CM (trace before adoption). "one of the key references is the CDC yellow book" 2:11. **PARTIAL → spine.**
7. **retrieval-finds-candidates-not-authority** — literature/synthesis = candidates for review, never auto-authority; trusted answer ≠ adopted assertion. §A AFFIRM GRD-042, CNS (hits = candidate; commit via domain API), Build-OS promotion gates (no auto-write to CM), CM `adoption_required`. "helped me make a treatment plan" 1:09 · "they don't turn the plane around" 4:16. **AFFIRM → spine.**
8. **clinical-adoption-required-gate** — no clinical action/assertion/order/commitment without explicit clinician/domain adoption, even high-confidence. §A/§8, CNS `clinical_adoption_required` gate, Build-OS adoption-gate-in-harness, CM/Obs (adoption→assertion write), UX adopt/edit/reject/clarify (pairs 062), pairs 070. "they make the treatment available upon landing" 4:21. **AFFIRM → spine.**
9. **clinical-question-sequential-reasoning** — complex cases decompose into scoped questions (diagnosis-prob → risk-strat → mgmt-urgency), each w/ own evidence+applicability. §8 iterative-convergence, CNS `clinical_question` + hub-loopback (077), Build-OS multi-step eval. "she asked the third question" 3:34. **PARTIAL → spine.**
10. **patient-specific-risk-assessment** — evidence applied through patient-specific risk framing (immunosuppression level modulates urgency). §A applicability-gate, CNS `clinical_applicability_state`+`patient_specific_risk_assessment`, KR/FWREG-006 patient-context filters, Obs/CM. "level of imunosuppression is moderate" 3:23. **ABSENT → spine.**
11. **urgency-and-resource-constrained-triage** — reason about urgency thresholds + resource constraints (in-flight/no-ICU/30-min vs can-wait); operational context = clinical scene. §8 Act-includes-constraints, CNS constraint-fields, D3/Messaging (time-to-care/entitlement/location). "in the next 30 minutes or can this wait" 3:46. **PARTIAL → vocabulary → promote.**
12. **collective-clinician-wisdom-reservoir** — tacit physician knowledge ("millions of wet brains") → SEPARATE provenance-labeled reservoir (distinct from literature FWREG-006 + patient CM), gated learning signal only. §B/§16, KR/FWREG-007 new member + authority class (below literature, above anecdote), CNS `clinical_wisdom_contribution` candidates, Build-OS aggregation+review, CM (MUST NOT cross-contaminate). "distributed across millions of wet brains" 5:39 · "aggregate clinical wisdom of the best GI doctors" 6:14. **ABSENT → spine (aggressive governance gates).**
13. **clinician-wisdom-not-automatic-truth** — collective wisdom = powerful evidence NOT auto-doctrine (local variation/outdated-habit/specialty-bias/medico-legal-conservatism); needs provenance+aggregation+review+adoption gates. §A anti-crowd-truth, KR `specialist_consensus_signal`+review, Build-OS champion-challenger, CM (no auto-adopt as patient assertion). "augmented by the aggregate clinical wisdom" 6:12. **ABSENT → spine.**
14. **reservoir-family-separation-firewall** — medical-literature, clinician-wisdom, patient-context, care-outcomes-learning, operator-workflow-knowledge = SEPARATE families w/ distinct authority classes; must not cross-contaminate. §16/FWREG-007 taxonomy, KR firewall rules, Evidence Plane GRD-041, CM (patient truth class > general knowledge), CNS query-routing-by-authority-envelope. "as much medical knowledge as written down" 5:30. **PARTIAL → spine.**
15. **clinical-ai-scale-trace-audit-burden** — clinical assist at scale ("10x/sec") demands mandatory logs/citations/trace/feedback/correction/safety-monitoring/specialty-review/hallucination-detection/outcome-tracking/escalation. §A/§C audit+lineage, Build-OS clinical-assist eval CI + feedback loops, CNS `clinical_answer_audit`, KR `clinician_feedback_signal`, security anomaly detection. "happening 10 times a second around the United States" 4:59. **PARTIAL → spine.**
16. **clinician-trust-as-adoption-prerequisite** — physician trust = product/adoption prereq earned via grounding/transparency/augment-posture; enables adoption, doesn't replace authority gates. §A/§7.8 trust-as-runtime-architecture, UX transparency, product proof obligations, Build-OS safety-case. "an AI product that I can trust" 1:13. **AFFIRM → spine.**
17. **openevidence-integration-envelope** — OpenEvidence(-like) = COMPLEMENT consumable behind capability envelope: OMNI assembles patient context → invokes external literature synthesis → citation-labeled candidates → clinician adoption; never surrenders authority. §C/capability-topology `clinical_evidence_service_adapter`, Federation, security (API boundary/PHI-minimization/provenance-passthrough), KR/FWREG-006 build-vs-buy gate, §3.5. "medical search platform for physicians" 0:21. **ABSENT → spine → watch→promote at FWREG-006 gate.**
18. **medical-search-product-chrome** — vendor metrics/demo/"life-saving" marketing = product chrome (Lens-A comparator signal, NOT architecture; GRD-039). §3.5 (OpenEvidence Lens-A clinical-decision-support), Build-OS (no gate admission from vendor stats), future-watch. "25% of US practicing physicians" 0:26. **no-op for architecture → low-authority-watch → watch.**

**Net-new:** `clinical_context_packet`, `clinical_question`, `medical_source_authority`, `clinical_applicability_state`, `patient_specific_risk_assessment`, `evidence_to_recommendation_trace`, `clinician_wisdom_reservoir`, `clinical_wisdom_contribution`, `specialist_consensus_signal`, `clinical_answer_audit`, `clinician_feedback_signal`, `clinical_evidence_service_adapter`, `literature_recency_state`, `trusted_reference_set`, `long_tail_patient_context`, `physician_assistive_reasoning`. SHARPEN: `clinical_adoption_required`. EXISTS-AS: candidate→commit, GRD-042, promotion-gated, HITL-permanence, `human_context_reservoir`(053 PARALLEL not merge), GRD-041. **★Reread (AGGRESSIVE, for FWREG-006/007):** -001 FWREG-006 contract (MANDATORY); -002 authority-class taxonomy FWREG-007 (MANDATORY); -003 Clinical-Memory adoption gate (MANDATORY — trusted answer ≠ adopted assertion); -004 clinician-wisdom reservoir go/no-go (MANDATORY); -005 CNS clinical-candidate flow (HIGH); -006 §C clinical_evidence_service_adapter build-vs-integrate (HIGH); -007 provider-assist UX (HIGH); -008 clinical-assist eval harness (HIGH); -009 §A "every patient is a long tail" keystone (HIGH); -010 GRD-041 boundary (MED); -011 §3.5 comparator (MED); -012 vendor-claims corroboration (LOW). ALL spine clusters reread_before_promotion: Y.

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(I fill later — derived work lives in EVRUN; leave `TK`)*
- EVRUN(s): `TK` · inventory: `TK` · routing_addendum: `TK` · impact §B/§C/security/Build-OS/contract: `TK` · promotion: `TK`

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged **highest in-domain relevance of batch** (clinical decision-support comparator) + GRD-026 (payload-noun≠domain) + high clinical corroboration bar.

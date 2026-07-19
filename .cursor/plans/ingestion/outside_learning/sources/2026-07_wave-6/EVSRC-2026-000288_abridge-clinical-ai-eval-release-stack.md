# EVSRC-2026-000288 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000288_abridge-clinical-ai-eval-release-stack.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000288`  ·  filename: `EVSRC-2026-000288_abridge-clinical-ai-eval-release-stack.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=mxweSHetuN8`  ·  source_title: `Building Clinical AI Agents with LangGraph: Abridge's Eval Stack for High-Stakes Healthcare`
- channel_or_org: `LangChain`  ·  speaker: `Janie Lee (VP of Product, Abridge)`  ·  published_at: `2026-07-17`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `first-party healthcare-AI production case study / clinical-documentation platform / clinical-agent evaluation + release architecture`  ·  source_reliability_context: `founder-adjacent senior product operator (vendor, commercially interested); HIGH authority for Abridge's own architecture/workflow/eval/release design; scale, quality, data-rights, outcome, and release-cycle claims NOT independently verified`  ·  topic_tags_light: `[Abridge, ambient_clinical_intelligence, patient_clinician_conversation, clinical_notes, source_attribution, misattribution, hallucination, medication_dosage, upcoding, downcoding, longitudinal_record, billing, clinical_eval_stack, annotation_quality, reference_free_judge, reference_based_judge, LLM_as_judge, APO, judge_calibration, historical_backtesting, silent_release, healthcare_AB_testing, online_monitoring, clinician_edits, unified_clinical_agent, clinician_agency, medical_evidence_retrieval, tool_selection, medication_order, clinical_decision_support, Platform_Loop, Agent_Runtime, Care_Operating_Model, REV-184]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Janie Lee` · role_in_source: `speaker / presenter` (conference-style talk) · affiliation_at_publication: `Vice President of Product, Abridge (clinical intelligence platform)` · speaker_type: `operator (senior product) — vendor, first-party` · authority_context: `HIGH for how Abridge frames product strategy, the risks it says it encounters, its reported internal eval + release workflow, its clinician-assistant design + product principles; LOWER for independently establishing customer counts, ~100M annual conversation volume, model-quality improvements, patient-safety outcomes, exact release-cycle reductions, dataset representativeness, legal sufficiency of data rights, or whether silent production experiments meet every operator/patient/research/privacy/regulatory obligation` · identity_confidence: `inferred` (no screenshot supplied; name/role from Knox metadata + transcript self-identification "I'm Janie...VP of product at Abridge")
  - *(add a bullet per additional speaker)*
- publisher / channel: `LangChain (YouTube — customer presentation)`  ·  interviewer / moderator / host: `n/a (talk format; [applause] at close)`
- event_context: `LangChain customer/community talk on shipping AI + agents in high-stakes, highly-regulated healthcare (Abridge case study: notes product + Abridge Assistant agent)`  ·  perspective / conflict notes: `Abridge gains product + market credibility; LangChain gains LangGraph/LangSmith validation. Framework praise ≠ framework doctrine; reported performance = first-party evidence; separate architecture lessons from product promotion.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introduction and what Abridge does
0:07
Hi everyone.
0:09
Thank you so much for being here. I'm
0:11
Janie. I'm the vice president of product
0:14
at a bridge and excited to chat about
0:17
shipping AI and agents in really high
0:21
stakes and highly regulated industries
0:23
and share a little bit about some of our
0:25
journey.
0:27
So just to give a little bit of context
0:29
about a bridge, we are a clinical
0:32
intelligence platform. We've started
0:34
solving and building tools for
0:36
clinicians solving as many of their
0:38
clerical and clinical workflows as
0:41
possible. Really starting at the patient
0:44
clinician conversation. There are over
0:46
two billion conversations that happen
0:48
every single year in the US. And we
0:51
think that the conversation is probably
0:54
one of the most important workflows in
0:56
healthcare. It's obviously where
0:58
patients and clinicians and doctors are
1:02
giving and receiving care. But if you
1:04
think about the 20% of our GDP that goes
1:07
towards healthcare, so much of it is
1:09
downstream or a derivative of that
1:11
conversation, whether it's the notes,
1:14
the billing codes, the claims, the prior
1:16
authorizations, the medications.
1:20
And where we're at today, the first
1:21
product that we built is we've built the
1:24
infra, the product, and the customer
1:26
value to capture this conversation,
1:29
which is historically been fully
1:30
unstructured data, and to turn it into a
1:33
clinically useful chart or note for
1:35
doctors. And in a world today where um
1:39
there's a massive doctor shortage in the
1:41
country, especially postcoid, and
1:43
doctors are burning out. they spend 10
The most important workflow in healthcare: the patient conversation
1:45
to 20 hours after hours during what they
1:48
call pajama time on documentation. We've
1:51
done a really good job on delivering on
1:53
the ROI of saving time. And now that we
1:56
have all of this data have gotten into
1:59
this wedge of the most important
2:00
workflow. The new products that we've
2:03
been building are really to help us
2:05
deliver on our second and third acts,
2:06
which are how do we help health systems
2:08
save and make more money? And given
2:11
clinicians are opening our app before,
2:14
during, and after a patient walks in the
2:16
room, how might we actually save lives?
2:18
And we say that with all humility. So
2:21
with that, um, we've scaled quickly.
2:24
We're at 250 of the largest health
2:26
systems in the country, the Mayos, the
2:28
Kaisers, Johns Hopkins of the world. And
2:31
we've also put oursel in the center of
2:33
healthc care's data layer. The most
2:35
important signal in healthcare has
2:38
historically, like I said, been
2:39
unstructured and uncaptured. And because
2:42
we now have this scale and have all of
2:44
this data, we've managed to get all of
2:47
these unparalleled data network effects.
2:49
We have over a 100 million conversations
2:52
that happen on our platform on an annual
2:54
basis. With the data rights that we've
2:56
received explicitly from our customers,
2:59
we're able to deidentify it and we're
3:02
learning constantly whether it's edits
3:04
people are making to our notes, queries
3:06
people are asking with our a bridge AI
3:09
agent and using that to improve our
3:11
models and continuously evaluate with
3:13
our LLM and human evaluations and
3:17
continue to deploy better and better
3:19
products so that it compounds over time.
Why trust is earned in drops but lost in buckets
3:22
That's a little bit about the company
3:23
and excited to actually get into the
3:25
content which is what does it mean to
3:27
actually build AI and agents in these
3:30
high stakes high trust environments.
3:33
There are a few things that shape all of
3:35
our product business and technical
3:37
decisions. I think the first one is the
3:40
bar for what we can ship is just
3:42
incredibly high and so velocity can't
3:44
come at the expense of quality. The
3:47
reason for that is the stakes are quite
3:49
high. if we incorrectly label a
3:53
medication or a dosage that has real
3:55
patient safety implications and HIPPA
3:59
and the way that we use and take care of
4:01
PHI data have to shape every decision
4:04
that we make. And finally, especially in
4:07
enterprise healthcare, buyers are
4:09
choosing who they'll even talk to based
4:11
on security and trust. Something that we
4:14
like to say internally is trust is
4:16
earned in drops but lost in buckets. And
4:18
so we know that any single model release
4:21
that has massively negative implications
4:24
could lose the trust we have with
4:25
customers.
Case study 1: clinical notes and why they are not just summaries
4:27
We'll walk through two quick case
4:28
studies to show how we build and ship
4:31
quickly despite all of these things that
4:33
we're thinking about constantly. We'll
4:35
start first with our core notes product
4:38
and then move on to our agent system
4:40
which is what we've built on top.
4:43
So the notes we create for doctors are
4:45
the core product. It's how we landed at
4:47
the scale that we did. Basic highle gist
4:51
is a doctor will open our app. They'll
4:54
record the conversation they have with a
4:56
patient with consent and we'll turn that
4:59
into a clinically useful chart or note
5:01
that then gets submitted into the
5:03
electronic health record. Notes are
5:05
really hard. It's not just a summary of
5:07
a meeting or a conversation. And the
5:10
reasons for that is the note that we
5:12
create ultimately becomes the bill, the
5:14
thing the hospital and the doctor gets
5:16
compensated for. So accuracy is
5:18
extremely important and all of this also
5:21
becomes part of a patient's longitudinal
5:23
record and quality matters in ways that
5:25
I think um a lot of ML products don't
5:28
experience. A few examples. If we have
5:31
misattribution in our notes, so a note
5:34
that might assign a statement or a
5:36
symptom or a decision to the wrong per
5:39
uh person, we have really really large
5:42
medical and legally significant
5:44
ramifications. For example, a patient
The real dangers: misattribution, hallucinations, upcoding, downcoding
5:47
saying that they have a symptom is very
5:49
different than a doctor explicitly
5:52
diagnosing it and billing for it. And if
5:55
you're diagnosing and billing the wrong
5:57
things, there will be severe
5:58
consequences for upcoding or down
6:00
coding. Similarly, confabulation or
6:04
hallucinations. If we are putting orders
6:07
for a medication that wasn't actually
6:09
prescribed or putting the wrong dosage,
6:11
huge, huge patient safety issues. As
6:15
we've had some of these um issues in
6:17
internal testing, the biggest pain in
6:20
trying to fix these was our release
6:21
process. Namely, getting the confidence
6:23
we needed to actually ship changes.
6:26
Prior to some of the changes we made a
6:29
while ago, releases would take us
6:30
anywhere from 1 to two months. And we
6:34
had clinicians annotating data, third
6:36
party labels, labelers, and a lot of
6:39
custom tools that didn't talk to each
6:41
other.
6:43
And we had a generic approach across the
6:45
platforms we chose the actual ways in
6:48
which we hill climbed and then finally
6:51
um just good old human operational
6:54
process improvements. From a platform
How Abridge cut release cycles from 2 months to days
6:56
perspective we migrated to Langraph. We
6:59
were using too many of our own out
7:02
custom tools and as we were scaling they
7:04
weren't serving all of our use cases and
7:07
Langraph gave us unified data sets
7:09
annotation tracing evaluation in one
7:12
system and from an enterprise security
7:15
perspective we were allowed to self-host
7:17
and um also had the access controls and
7:20
auditability we needed and we used
Migrating to LangGraph and LangSmith for evals
7:23
Langmith for our eval platform. It gave
7:26
us all the customization we needed from
7:28
a UI perspective and I think across
7:31
altitudes whether it was debugging a
7:33
single encounter or seeing across all
7:36
all model releases um performance we
7:39
could do it in one place
7:42
from an actual improvement perspective.
7:45
We generally have the gift of a lot of
7:48
feedback given how important this
7:50
product is to clinicians workflows. And
7:53
across all of the clinician and user
7:55
feedback both in product and out of
7:57
product, we had a whole issue whole list
8:00
of model issues we knew we wanted to
8:02
improve. We would prioritize it by both
Building and auto-calibrating LLM judges with APO
8:05
prevalence, so how often was it
8:06
happening as well as the severity of the
8:09
issue. If we got it wrong, were the
8:11
stakes really high? And with that we
8:13
organized all of these model issues into
8:16
an aggregate set of pillars. So think
8:19
things like accuracy, compliance, style,
8:23
completeness. And we started to go one
8:26
by one and create judges against these
8:28
model issues. Originally it was pretty
8:31
cumbersome. We would have a clinician
8:33
who knew the subject matter well design
8:35
the annotation guide. We'd label
8:38
encounters and then someone would
8:40
actually iterate on prompts to get the
8:41
judge to match the clinician labels.
8:44
Really slow. We moved to an APO
8:47
framework and it now takes the
8:49
annotation guide and the labeled
8:51
encounters and generates the calibrated
8:53
judge automatically to reduce turnaround
8:55
times.
8:57
The thing that always keeps me up at
8:59
night are just making sure that the
9:01
underlying data is actually correct and
9:03
high quality. This is the basis of
9:05
everything that we do.
9:07
A few things that are very helpful to
9:09
us. We make sure that the annotations
9:12
are actually matching the expected
9:14
outputs of our LLM judges. We also like
9:17
to collect free text explanations from
9:19
our annotators. Um, obviously when there
9:22
are issues or inconsistencies, it allows
9:25
us to debug, but more importantly, um,
9:27
when things aren't broken, we ask for it
9:30
because it allows us to check that the
9:32
people who are annotating and evaluating
9:34
are actually paying attention. And so if
9:36
people are just clicking through, this
9:38
is a good way to really understand the
9:40
quality of our data. And then finally,
Reference-free vs. reference-based judges: why you need both
9:43
we always think about what is the actual
9:45
expertise we need up front. There are
9:48
certain evaluation or data sets where we
9:50
need a boardcertified physician.
9:52
Sometimes you might need a specialist,
9:54
but laying that up very very explicitly
9:57
has really helped.
9:59
Another design decision that's worth
10:00
calling out is um how we use both
10:03
reference free and reference space
10:05
judges to make sure that we have a
10:07
blended approach and set of layers that
10:10
complement each other. We have reference
10:12
free judges. um they generalize across
10:15
all encounters and they'll look at the
10:18
note and the conversation and score it
10:21
and it doesn't need a gold standard note
10:23
to compare against and that means we can
10:25
run them offline but more importantly
10:27
online at all times to continuously
10:30
monitor the quality of our notes. They
10:32
definitely have limits.
10:34
There's a lot of encounters specific
10:36
nuance and specificity that gets met um
10:39
and notes are just so inherently
10:41
subjective. So we supplement it with
10:44
reference based judges that get as
10:46
specific as the specialty level. And
10:49
with these two approaches, we're able to
10:51
have really high confidence in what
10:54
we're serving.
The A/B testing approach most healthcare companies can't do
10:56
And even with these evals, I say that we
10:59
can't push to prod because of the stakes
11:01
that we're operating in. Offline evals
11:04
happen first. They now happen very, very
11:06
quickly with the process I just
11:07
described. They're really easy, but we
11:10
still will back test against historical
11:12
encounters. Also very quick and I think
11:15
something that might be more unique to
11:17
the industry that we're operating in is
11:20
the way in which we do AB testing. When
11:22
I first joined Bridge, I never thought
11:24
AB testing would be possible in
11:26
healthcare at this enterprise level.
11:28
Because we've earned the trust, we've
11:29
gotten explicit buyin from a set of our
11:32
partners and customers who said, "Given
11:35
what you're doing upstream, I'm okay
11:37
with a silent release without knowing
11:39
about it. And we're willing to be, you
11:41
know, in your first 10 to 15% of
11:43
customers willing to innovate with you."
11:45
Definitely a privilege and a lot of
11:47
trust that we need to keep, but it
11:49
allows us to look again for more signal.
11:52
Are people editing the note? What are
11:54
the ratings that are leaving? are we
11:56
getting really really loud qualitative
11:58
feedback and this is usually signal
12:00
we'll get instantly if it is so and that
12:03
finally gives us the confidence to
12:05
actually go through a full release and
12:07
we'll do our continuous online
12:09
monitoring before this would take us one
12:12
to two months and now we can get through
12:13
this in days and be at a place where
12:15
where there's a new model update we feel
12:17
really good about getting the signal
12:19
that we need
12:21
and so really exciting we've seen
12:24
improvements over the past few quarters
12:26
in making sure that we can continue to
12:29
hill climb and more importantly our
12:31
users are telling us when we ship models
12:33
that they feel it instantly.
Case study 2: the Abridge Assistant agent
12:38
Now I'll move on to the second case
12:40
study. Notes are the foundation of what
12:43
we do and we've built on top a more
12:45
generic a bridge assistant. Um, and
12:49
generally we want to help clinicians
12:51
make the best decisions they can at the
12:54
right moment with the right context. But
12:57
the reality is most tools that
12:59
clinicians use today fail on adoption
13:02
and aren't really used. There's a lot of
13:04
constraints. First is doctors are very
13:06
busy. They're going backtoback 15inute
13:10
appointments. They don't have the time
13:12
to pull something up, look up the
13:13
context of a patient. A lot of existing
13:16
tools also make them for make them
13:18
choose between security or no security.
13:22
And with these fragmented workflows,
13:25
what we did was build a unified agent
13:28
that persists across the workflows. So
13:31
before the visit, during that visit,
13:32
after the visit, there's a uniform UX
13:35
and agent that they could work with. And
Design principles: air conditioning, agency, responsiveness
13:38
we decided to fold a lot of separate
13:40
features and capabilities into one agent
13:43
that has really composable capabilities.
13:46
Examples are um capabilities like being
13:49
able to search patient context across
13:52
multiple systems of record or actually
13:55
doing actions like editing your note or
13:58
placing a medication or an MRI. And then
14:02
finally enabling something like clinical
14:04
decision support. So if a doctor has a
14:06
question, um, can we support them via
14:09
really searching against literature that
14:12
comes from validated medical evidence?
14:15
And instead of these multiple features
14:17
living in disparate places, having it as
14:19
a singular agent allows us to call the
14:22
right tool at the right time, but also
14:24
deliver a really coherent experience.
14:27
from more of a product perspective.
14:29
These are some of the principles that we
14:31
used in building this to make sure that
14:33
we weren't overwhelming our doctors and
14:35
clinicians. The first is we like to say
14:38
that we try to be like air conditioning.
14:41
We want to be on in the background
14:42
making things better but not have to
14:46
actively be present unless we think
14:48
there's something really important. The
14:50
second is agency. In healthcare
14:54
especially, it is really really
14:55
important that clinicians know that
14:57
they're in control. We might be able to
14:59
suggest things, but ultimately we want
15:01
clinicians to use all the data at hand
15:04
and make the right decision. The third
15:07
is responsiveness.
15:09
This can come in a lot of different
15:11
forms. If a clinician is explicitly
15:14
giving us the gift of feedback, we want
15:16
to make sure that our products and
15:18
systems are actively listening and
Eval criteria for a multi-step agent in clinical settings
15:22
improving quickly. But because of where
15:24
we operate, we also can implicitly learn
15:27
a lot to make the product better. So
15:29
this might be if a clinician is
15:32
constantly making the same edits on a
15:34
note, can we learn their style to
15:36
automatically apply this to all future
15:38
notes? or given the context that we have
15:41
about the patient the clinician is
15:43
seeing, how might we suggest through
15:45
this agent, things that they might ask
15:47
at certain moments of the visit with
15:49
their patient to deliver better care.
15:53
And as we built this, I think similar uh
15:56
underlying machinery from an eval
15:59
perspective, but the complexity went up
16:01
a magnitude just because we're not now
16:04
using singlestep models. Some of the
16:07
eval criteria that we thought about
16:09
clinical quality, is it actually
16:11
accurate? Safety, are we making sure
16:14
that this agent isn't actively
16:16
recommending things that would harm the
16:17
patient? Boundary and adversary testing.
16:21
What is happening at the edges? Making
16:23
sure that the agent isn't answering
16:25
questions um on things that isn't
16:27
answering questions that it wasn't
16:29
trained to do. And finally, from a tool
16:31
selection perspective, is the agent
16:34
picking the right tool and behaving the
16:36
way that a clinician would respond.
Two takeaways: velocity plus quality, and why healthcare needs great builders
16:39
So with that, I think the two takeaways
16:42
I hope to leave folks with is first um
16:45
you don't have to sacrifice on velocity
16:48
and andor quality. I think if you invest
16:51
in the right eval infrastructure upfront
16:53
and are really really specific on the
16:56
things at which your product needs to
16:58
get right, you can do both quickly and
17:00
probably know the outputs of your
17:02
product even more deeply. And second,
17:04
maybe more on a personal note, hopefully
17:06
this has excited some folks to
17:09
potentially think about building in
17:10
healthcare. I think from an impact
17:13
perspective, healthcare is probably
17:15
where we need some of our best builders
17:18
and there's probably no more universal
17:20
or important problem. Given 20% of our
17:24
GDP is going towards here, I also think
17:26
this is where the largest businesses
17:27
will get created. And given the high
17:30
stakes, I think some of the hardest AI
17:32
challenges will also need to be solved
17:34
here. So, um, thank you so much for your
17:36
time. Enjoy the rest of your day and
17:37
I'll be around.
17:39
[applause]

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
`source_url: https://www.youtube.com/watch?v=mxweSHetuN8`
`source_title: Building Clinical AI Agents with LangGraph: Abridge's Eval Stack for High-Stakes Healthcare`
`channel_or_org: LangChain`
`speaker: Janie Lee`
`speaker_role: Vice President of Product, Abridge`
`published_at: 2026-07-17`
`captured_at: 2026-07-18`
`capture_method: YouTube screenshot + full transcript paste`
`content_type: first-party healthcare-AI production case study / clinical-documentation platform / clinical-agent evaluation and release architecture`
`source_reliability_context: senior product operator describing Abridge’s own production architecture, workflows, evaluation methods, and deployment practices; first-party and commercially interested; outcome, scale, quality, data-rights, and release-performance claims not independently verified`
`topic_tags_light: [Abridge, ambient_clinical_intelligence, patient_clinician_conversation, clinical_notes, source_attribution, speaker_diarization, misattribution, hallucination, medication_dosage, upcoding, downcoding, longitudinal_record, billing, claims, clinical_eval_stack, clinician_annotation, annotation_quality, reference_free_judge, reference_based_judge, LLM_as_judge, APO, judge_calibration, historical_backtesting, silent_release, healthcare_AB_testing, online_monitoring, clinician_edits, model_feedback, unified_clinical_agent, ambient_assistance, clinician_agency, patient_context, medical_evidence_retrieval, tool_selection, medication_order, imaging_order, clinical_decision_support, model_release, Platform_Loop, Agent_Runtime, Care_Operating_Model]`

---

### 2. People / authority context

**Janie Lee** — identified in the talk as Vice President of Product at Abridge. She is a senior first-party operator describing Abridge’s product, release process, evaluation stack, healthcare customer deployment, and expansion from clinical documentation into a broader clinician assistant.

Her authority is high for:

* how Abridge frames its product strategy;
* the risks it says it encounters;
* its reported internal evaluation and release workflow;
* its intended clinician-assistant design;
* and its product principles.

Her authority is lower for independently establishing:

* the claimed number of health-system customers;
* annual conversation volume;
* model-quality improvements;
* patient-safety outcomes;
* exact release-cycle reductions;
* representativeness of its evaluation datasets;
* legal sufficiency of customer data rights;
* or whether silent production experiments meet every applicable operator, patient, research, privacy, and regulatory obligation.

**Publisher / incentive posture**

This is a LangChain customer presentation. Abridge receives product and market credibility; LangChain receives validation for LangGraph and LangSmith.

That does not diminish the operational value of the source. It means:

* framework praise should not be treated as framework doctrine;
* reported performance should remain first-party evidence;
* and the architecture lessons should be separated from product promotion.

---

### 3. Suggested processing

`priority: 5/5`
`depth: full_semantic`
`EVRUN needed?: yes`
`spine_candidate?: yes — Care × Platform × Agent Runtime intersection`

**Promotion posture:**
`care-spine-sharpening | clinical-document contract pressure | healthcare-eval architecture | Platform-Loop production receipt | Agent-Runtime authority pressure | learning-boundary pressure | recommendation-integrity pressure`

This is one of the highest-value sources in the current wave because it connects three areas that are often discussed separately:

1. **Clinical-source fidelity** — how a conversation becomes a note, order, code, claim, and longitudinal record.
2. **Platform production architecture** — how changes are evaluated, released, monitored, and expanded.
3. **Agent product architecture** — how a single clinician-facing assistant coordinates multiple retrieval, documentation, ordering, and decision-support capabilities.

### Closest siblings

* `EVSRC-2026-000143` — Peter Lee / Stanford healthcare AI: ambient documentation, upcoding, provider burden, collaborator evaluation, entitlements, agent orchestration, and healthcare economics.
* `EVSRC-2026-000147` — Stanford clinician AI literacy and healthcare LLM fundamentals.
* `EVSRC-2026-000216` — self-improving agent loop, evaluation, shadow production, and evidence-earned promotion.
* `EVSRC-2026-000217` — unified agent-evaluation infrastructure.
* `EVSRC-2026-000245` — runtime monitoring, unknown-unknown detection, and safety intervention.
* `EVSRC-2026-000271` — eval-driven development, statistical confidence, change-sensitive evaluation, and production proof.
* Current Care Operating Model.
* Current Platform Loop.
* Current Agent Runtime & Harness.
* Async-care crystallization and replayable-proof acceptance fixture.
* REV-184 Governed Resolution.
* Clinical Memory, Observation, D7/Documents, Ordered Fulfillment, CNS, and authorization contracts.

### What is distinct here

This source adds unusually concrete production detail around:

* the note as a high-consequence derived artifact rather than a summary;
* issue taxonomies organized by prevalence and severity;
* clinician-authored annotation guides;
* annotation-attention checks through written rationales;
* automated generation or calibration of LLM judges;
* combining reference-free and specialty-specific reference-based judges;
* the progression from offline evaluation to historical backtesting to limited live exposure;
* clinician edits and usage as learning signals;
* and one longitudinal clinician-facing agent spanning before, during, and after the visit.

The genuinely important architecture is not LangGraph or LangSmith.

It is:

> **A clinical AI capability can move quickly only when source fidelity, expert judgment, evaluation, release exposure, runtime monitoring, and clinical authority are represented as one governed production system.**

---

## 4. Strategic read

### Classification

This is a **top-tier healthcare AI production source**.

It is not foundational because Abridge’s architecture is still one vendor’s implementation and does not model all of OMNI’s patient, provider, operator, payer, pharmacy, evidence, consent, commerce, fulfillment, and federated authority planes.

It is spine-relevant because it gives practical shape to several OMNI laws:

* conversation ≠ clinical truth;
* generated note ≠ clinician commitment;
* clinical documentation ≠ ordinary summarization;
* model evaluation ≠ release authority;
* offline success ≠ production safety;
* one surface ≠ one authority envelope;
* clinician edits ≠ undifferentiated training data;
* and speed is earned through proof infrastructure rather than relaxed standards.

---

### Core takeaway

**The keeper is: clinical AI velocity comes from turning every material failure mode into an expert-owned, versioned, continuously exercised evidence contract—not from lowering the healthcare safety bar.**

The second keeper is equally important:

> **The patient-clinician conversation may be a uniquely valuable source, but every downstream clinical, operational, financial, and legal artifact must preserve who said what, what was inferred, who adopted it, and which authority committed the resulting state.**

A third keeper:

> **One coherent clinical assistant may span the visit, but every capability behind it needs its own context, evaluation, authority, and commit boundary.**

---

# I. The patient conversation is a high-value source—not the source of all healthcare truth

Abridge describes the patient-clinician conversation as one of healthcare’s most important workflows because many downstream artifacts derive from it:

* notes;
* billing codes;
* claims;
* prior authorizations;
* medications;
* and subsequent care.

That is directionally right.

The conversation contains unusually rich information:

* symptoms;
* concerns;
* clinician questions;
* examination discussion;
* reasoning;
* decisions;
* patient preferences;
* education;
* refusals;
* and plans.

But OMNI should resist the stronger product-centered implication that capturing the conversation places one platform “at the center of healthcare’s data layer.”

The conversation is one source among many.

Care may also depend on:

* structured measurements;
* laboratory results;
* imaging;
* pathology;
* device signals;
* medication-dispense events;
* external records;
* patient-generated evidence;
* physical examination findings;
* specialist interpretation;
* payer decisions;
* pharmacy state;
* and occurrences outside the recorded encounter.

Some clinically decisive events are never spoken.

Some spoken statements are uncertain, hypothetical, quoted, contradicted, or misunderstood.

Some care begins outside any encounter and must reconcile later.

**Keeper line:**
**The conversation is a privileged care source, not the sovereign care record.**

---

# II. A clinical note is not a summary

The source’s strongest early point is that an ambient clinical note is not ordinary meeting summarization.

A note can influence:

* longitudinal clinical understanding;
* diagnosis history;
* future decision support;
* medication reconciliation;
* specialist interpretation;
* coding;
* billing;
* claims;
* quality measures;
* legal review;
* prior authorization;
* and patient understanding.

That means the transformation is not:

`conversation → summary`

It is closer to:

`recorded interaction`
`→ speaker and event segmentation`
`→ source-attributed claims`
`→ observations and examination findings`
`→ clinician reasoning candidates`
`→ diagnoses / assessments / plan candidates`
`→ documentation draft`
`→ clinician review and adoption`
`→ committed clinical note`
`→ downstream typed projections`

The downstream projections may include:

* coding candidate;
* billing support;
* order candidate;
* prior-authorization evidence;
* patient instructions;
* referral documentation;
* quality-measure evidence.

Those projections should not silently inherit authority from the draft.

**Keeper line:**
**A clinical note is a governed transformation from mixed-source interaction into clinician-attested longitudinal evidence.**

---

# III. The note must preserve distinct epistemic and authority planes

The source explicitly identifies misattribution as medically and legally consequential.

A patient saying:

> “I think I have condition X”

is not the same as a clinician diagnosing condition X.

Similarly:

* a family member reports a symptom;
* a clinician asks whether a symptom exists;
* a patient denies it;
* a clinician lists a differential diagnosis;
* a clinician confirms a diagnosis;
* and an AI suggests a possibility

are different contribution types.

A safe note architecture must preserve at least:

* speaker;
* represented principal;
* statement type;
* certainty;
* temporal reference;
* negation;
* hypothetical versus actual;
* source evidence;
* clinical adoption state;
* and resolving clinician.

OMNI’s existing separation remains correct:

`source-attributed claim`
`≠ observation`
`≠ extracted assertion candidate`
`≠ provider-adopted clinical assertion`

A generated note may carry each of these.

It must not flatten them into one clinical voice.

**Keeper line:**
**Documentation must preserve the difference between who experienced, who observed, who inferred, who recommended, and who committed.**

---

# IV. Speaker attribution is a care-safety primitive

The transcript describes the risk of assigning a symptom or decision to the wrong person.

This should not remain a generic “model accuracy” issue.

It is a first-class safety category.

Potential sources of attribution failure include:

* incorrect diarization;
* similar voices;
* overlapping speech;
* remote participants;
* interpreters;
* caregivers;
* trainees;
* copied historical statements;
* quoted prior clinicians;
* ambient background speech;
* and the model converting a question into an assertion.

A documentation system should preserve:

* detected speaker;
* confidence;
* unresolved identity;
* participant roster;
* correction history;
* and the source segment supporting a material statement.

For high-consequence assertions, low-confidence attribution should produce:

* visible uncertainty;
* required confirmation;
* omission from committed truth;
* or escalation.

**Keeper line:**
**When the identity of the speaker changes the meaning, speaker uncertainty is clinical uncertainty.**

---

# V. Clinical documentation is a multi-object pipeline, not one generated artifact

The source explains that the same documentation ultimately becomes part of both the longitudinal record and the financial transaction.

That makes it dangerous to treat “the note” as one undifferentiated object.

OMNI should distinguish:

### Raw source

* audio;
* transcript;
* participant metadata;
* consent and recording context.

### Derived documentation candidate

* draft note;
* extracted findings;
* structured sections;
* unresolved ambiguities.

### Clinical commitment

* clinician-attested note;
* adopted diagnoses;
* plan;
* clinical orders.

### Financial and administrative projections

* coding candidates;
* claim-supporting facts;
* quality-measure candidates;
* prior-authorization evidence.

### Communications

* after-visit summary;
* patient instructions;
* referral communication;
* care-team handoff.

### Audit and proof

* edits;
* source links;
* model and prompt version;
* resolving clinician;
* submission and EHR-write receipt.

These objects may be linked.

They should not be collapsed.

**Keeper line:**
**One conversation may produce many downstream records; each record must earn its own authority.**

---

# VI. The note-to-bill path creates an unavoidable incentive conflict

Abridge correctly identifies upcoding and downcoding as major risks.

The note is not only a clinical record.

It can determine compensation.

This creates pressure to:

* include more complexity;
* frame medical necessity more strongly;
* select higher-paying codes;
* satisfy quality or documentation requirements;
* or omit facts that reduce reimbursement.

The prior Peter Lee source exposed exactly this problem: documentation technology can either audit reality or industrialize reimbursement-optimized language.

OMNI needs a structural **documentation-integrity firewall**:

* clinical facts and assessment are generated from the care evidence;
* coding is derived from the clinician-attested record;
* financial optimization cannot rewrite clinical meaning;
* coding suggestions remain attributable candidates;
* unsupported documentation is rejected;
* and revenue impact is not a feature in the clinical truth-generation objective.

This is a direct application of the Recommendation Integrity Firewall.

**Keeper line:**
**The record may support reimbursement; reimbursement must not author the record.**

---

# VII. Medication and order hallucinations are not ordinary content errors

The source gives examples such as:

* a medication that was not prescribed;
* an incorrect dosage;
* or an invented order.

These are not merely inaccurate text.

They can become executable clinical state.

OMNI should distinguish:

`mentioned medication`
`≠ historical medication`
`≠ patient-reported use`
`≠ contemplated medication`
`≠ clinician recommendation`
`≠ medication-order candidate`
`≠ authorized prescription/order`
`≠ pharmacy dispense`
`≠ patient receipt or administration`

Likewise:

`MRI discussed`
`≠ MRI recommended`
`≠ imaging order candidate`
`≠ signed imaging order`
`≠ scheduled imaging`
`≠ completed imaging`
`≠ interpreted result`

A note-generation system must not convert linguistic proximity into an order.

A broader clinical agent that can “place a medication or MRI” requires:

* authenticated clinician identity;
* patient identity;
* current context;
* indication;
* contraindication checks;
* consent where applicable;
* typed order semantics;
* authority verification;
* deterministic write path;
* idempotency;
* confirmation;
* and execution proof.

**Keeper line:**
**A clinically plausible sentence is not an authorized clinical command.**

---

# VIII. Failure taxonomy is more useful than one overall quality score

Abridge organizes known model problems into pillars such as:

* accuracy;
* compliance;
* style;
* completeness.

It then prioritizes failures using both:

* prevalence;
* severity.

This is directionally strong.

A single aggregate note-quality score can conceal catastrophic failures.

For example:

* perfect style cannot compensate for wrong medication dosage;
* high completeness cannot compensate for incorrect attribution;
* accurate facts cannot compensate for unauthorized disclosure;
* good average performance cannot compensate for rare severe failures.

OMNI should represent a failure taxonomy with dimensions such as:

* source attribution;
* participant identity;
* negation;
* temporal accuracy;
* clinical omission;
* unsupported addition;
* diagnosis inflation;
* medication fidelity;
* dosage fidelity;
* plan fidelity;
* order fidelity;
* coding distortion;
* privacy exposure;
* evidence citation;
* uncertainty;
* and clinician burden.

Each class should have its own:

* definition;
* severity;
* affected population;
* evaluator;
* minimum performance threshold;
* escalation rule;
* release consequence;
* and runtime monitor.

**Keeper line:**
**High-stakes quality is a vector of protected behaviors, not an average score.**

---

# IX. Prevalence × severity is useful but still incomplete

Abridge prioritizes issues by how often they occur and how harmful they would be.

That is necessary.

For OMNI, the full prioritization should also consider:

* detectability;
* reversibility;
* blast radius;
* exposure state;
* affected population;
* source of the failure;
* recurrence pattern;
* clinician likelihood of catching it;
* downstream propagation;
* operator scope;
* and confidence in the measurement.

A one-in-a-million wrong-dose event may matter more than a common style issue.

A common issue that clinicians always correct may still create unacceptable burden.

A rare attribution error that enters the longitudinal record can propagate for years.

**Keeper line:**
**Failure priority depends on frequency, consequence, detectability, propagation, and reversibility—not frequency alone.**

---

# X. The rule owner should define the evaluation contract

The source describes clinicians:

* designing annotation guides;
* labeling encounters;
* providing specialist expertise where necessary;
* and supplying explanations.

That is correct.

The AI or platform team can build the evaluation machinery.

It should not unilaterally define:

* what counts as a clinically meaningful error;
* which omissions matter;
* whether a phrasing changes diagnosis;
* which specialty standard applies;
* or whether a result is safe enough.

The applicable rule owner may be:

* general clinician;
* specialist;
* pharmacist;
* coder;
* privacy officer;
* patient-safety leader;
* compliance owner;
* or patient-experience representative.

**Keeper line:**
**The platform can automate evaluation; the owner of the protected rule must define what success and failure mean.**

---

# XI. Annotation quality needs its own assurance system

Abridge says it asks annotators for free-text explanations even when nothing appears broken, partly to ensure they are paying attention.

That is a meaningful practice.

It reveals that the ground-truth pipeline can fail through:

* inattentive labeling;
* ambiguous guidance;
* specialty disagreement;
* inconsistent thresholds;
* annotation fatigue;
* copied rationales;
* poor case sampling;
* or unsuitable annotators.

The label is not ground truth merely because a human produced it.

A robust annotation program may need:

* annotator identity and expertise;
* guide version;
* blinded or adjudicated review;
* inter-rater agreement;
* disagreement preservation;
* rationale;
* confidence;
* difficult-case routing;
* quality sampling;
* and monitoring for drift.

For subjective clinical documentation, disagreement may be valid.

The system should not force all variation into a synthetic unanimous label.

**Keeper line:**
**Human labels are evidence with provenance and uncertainty—not unquestionable truth.**

---

# XII. Written rationales are valuable, but they should not become performative paperwork

Free-text explanations can reveal:

* whether an annotator understood the task;
* why experts disagree;
* which clinical nuance mattered;
* and whether an evaluation guide is underspecified.

But asking for rationales on every item can also:

* increase cost;
* encourage superficial boilerplate;
* create fatigue;
* and shift attention from the actual judgment to satisfying a form.

OMNI should use rationale requirements selectively:

* all high-severity cases;
* disagreements;
* sampled routine cases;
* newly introduced criteria;
* judge-calibration cases;
* and cases near a release threshold.

**Keeper line:**
**Rationale is a quality-control instrument, not a ritual field.**

---

# XIII. Automatically calibrated LLM judges are evaluator candidates, not evaluator authorities

Abridge describes an APO framework that takes:

* an annotation guide;
* labeled encounters;
* and automatically generates or calibrates an LLM judge.

This is operationally powerful.

It can reduce the time between:

* discovering a failure mode;
* defining it;
* and evaluating future model versions against it.

But the resulting judge remains another model.

It can:

* overfit the calibration examples;
* reproduce annotator errors;
* miss rare cases;
* drift when the evaluated system changes;
* reward superficial markers;
* or fail on a new specialty, language, demographic group, or workflow.

The safe lifecycle is:

`expert-defined failure concept`
`→ annotation guide`
`→ labeled and adjudicated cases`
`→ candidate judge generation`
`→ held-out validation`
`→ subgroup and adversarial testing`
`→ calibration assessment`
`→ bounded deployment`
`→ ongoing comparison to humans and outcomes`
`→ versioning / retirement`

**Keeper line:**
**Automating judge construction accelerates measurement; it does not automate trust in the measure.**

---

# XIV. The evaluator must not share an unchecked failure mode with the evaluated model

An LLM judge may share:

* base model family;
* training data;
* linguistic preferences;
* blind spots;
* provider;
* prompt conventions;
* or optimization incentives

with the model it evaluates.

That can produce correlated failure.

A judge may score an invented but fluent clinical note highly because it values the same patterns that produced the confabulation.

OMNI should record:

* judge model and family;
* evaluated model and family;
* shared training or provider relationship where knowable;
* reference dependence;
* calibration corpus;
* known blind spots;
* and independent human or deterministic checks.

**Keeper line:**
**A model grading its close relative is not independent assurance merely because it runs in a separate process.**

---

# XV. Reference-free and reference-based judges measure different things

The source’s distinction between reference-free and reference-based judges is useful.

### Reference-free judge

Compares:

* source conversation;
* generated note;
* and a general evaluation rubric.

Advantages:

* broad coverage;
* lower cost;
* can run on nearly every encounter;
* supports continuous monitoring.

Limitations:

* may miss specialty nuance;
* may normalize systematic errors;
* may reward plausible language;
* does not establish that a unique preferred note exists.

### Reference-based judge

Compares against:

* a clinician-authored or adjudicated expected result;
* often at specialty or failure-class level.

Advantages:

* supports specific regression testing;
* stronger for known failure modes;
* can test exact protected behavior.

Limitations:

* expensive;
* subjective;
* stale;
* may encode one institution’s style;
* and may mistake variation for error.

OMNI should treat them as complementary evidence layers.

Neither should become a universal pass/fail oracle.

**Keeper line:**
**Reference-free judges monitor broadly; reference-based judges challenge specifically.**

---

# XVI. Evaluation needs confidence, not merely judge agreement

The source says the blended judge approach gives Abridge high confidence.

OMNI should make “confidence” explicit rather than rhetorical.

For each safety-relevant behavior, an evaluation record may need:

* evaluation definition and version;
* judge version;
* model and runtime version;
* population;
* specialty;
* language;
* encounter type;
* sample size;
* failure count;
* confidence interval;
* lower confidence bound;
* severity weighting;
* subgroup results;
* inter-rater agreement;
* uncertain cases;
* false-positive and false-negative estimates;
* and comparison to baseline.

A judge returning 99% on one hundred easy cases is different from 99% across tens of thousands of representative cases with a controlled lower bound.

This aligns with the existing eval-confidence pressure:

> **A pass is an observation. Confidence requires repeated evidence.**

**Keeper line:**
**Judge scores become release evidence only after their own uncertainty and failure distribution are known.**

---

# XVII. Evaluation must be encounter-, specialty-, population-, and workflow-aware

The source acknowledges that notes contain encounter-specific nuance and that some reference-based judges must operate at specialty level.

OMNI should extend the stratification.

Evaluation may need to vary across:

* specialty;
* encounter type;
* acute versus chronic care;
* procedure versus consultation;
* adult versus pediatric care;
* language and interpretation;
* telehealth versus in-person;
* new patient versus follow-up;
* complex multimorbidity;
* medication burden;
* and operator-specific documentation requirements.

A model can perform well overall while failing precisely where the consequence is highest.

**Keeper line:**
**Population-average safety is not evidence of safety for every clinical lane.**

---

# XVIII. Offline evaluation, backtesting, silent exposure, and full release are distinct stages

Abridge describes a progression:

1. offline evaluation;
2. historical backtesting;
3. limited silent release or A/B exposure among willing partner systems;
4. full release;
5. continuous online monitoring.

That is a strong production shape.

OMNI should preserve these as distinct deployment states.

### Offline evaluation

No live user or patient exposure.

### Historical replay

Runs the candidate against prior encounters and compares behavior.

### Shadow deployment

The candidate observes live inputs but does not affect user-visible or committed state.

### Silent user-impacting release

The candidate may generate material clinicians see or use, even if they are not explicitly told which version they received.

### Limited cohort release

A known subset of operators, clinicians, or patients receives the capability.

### General release

The release becomes broadly eligible.

These are not interchangeable.

**Keeper line:**
**“Silent” describes visibility, not absence of consequence.**

---

# XIX. Healthcare A/B testing requires an experimentation contract

Abridge says selected health-system partners explicitly agreed to be early adopters and accept silent model releases.

That is useful operator-level authorization.

But it does not by itself answer every architecture question.

A live healthcare experiment should declare:

* what is changing;
* who may be exposed;
* whether the output is visible;
* whether it can enter the record;
* whether it can alter clinical action;
* whether it affects billing;
* expected benefit;
* foreseeable harm;
* non-inferiority or superiority objective;
* stop conditions;
* monitoring latency;
* rollback;
* notification obligations;
* operator approval;
* clinician awareness requirements;
* patient-rights implications;
* and whether the activity is product improvement, quality improvement, research, or another governed category.

The answer may legitimately differ by experiment.

A style change to a note is not equivalent to a medication-extraction change.

**Keeper line:**
**Every production experiment needs a declared consequence envelope, not merely a cohort percentage.**

---

# XX. Partner trust is not a substitute for runtime controls

The source says limited A/B testing became possible because Abridge earned customer trust.

Trust matters.

But architecture must assume trust can be lost precisely when a high-impact release fails.

A safe early-access release needs:

* operator-specific eligibility;
* narrow cohort;
* known version;
* immediate holdback;
* exposure tracking;
* runtime monitoring;
* clinician correction path;
* rollback;
* affected-record identification;
* and escalation.

The Platform Loop’s exposure ladder is especially relevant:

`generated`
`→ displayed`
`→ adopted`
`→ committed`
`→ acted upon`

A defect’s consequence depends on how far the output traveled.

**Keeper line:**
**Trust permits controlled experimentation; it does not replace containment, traceability, and recall.**

---

# XXI. Clinician editing is a high-value signal—but an ambiguous one

Abridge uses note edits as a learning signal.

That is sensible.

An edit may mean:

* factual correction;
* attribution correction;
* omitted clinical detail;
* preferred style;
* institutional template requirement;
* coding pressure;
* legal defensiveness;
* personal habit;
* or a change in the clinician’s own assessment.

Those meanings must not collapse.

A useful edit taxonomy might distinguish:

* `clinical_fact_correction`;
* `source_attribution_correction`;
* `clinical_assessment_change`;
* `plan_change`;
* `documentation_style_preference`;
* `template_requirement`;
* `coding_or_compliance_edit`;
* `privacy_redaction`;
* `unclassified_edit`.

**Keeper line:**
**An edit is evidence that the output changed, not yet evidence of why it changed.**

---

# XXII. Personalization must separate style from clinical meaning

The source proposes learning repeated clinician edits and automatically applying the clinician’s style to future notes.

That can reduce burden.

But style adaptation must remain separate from:

* diagnosis;
* clinical evidence;
* medication;
* dosage;
* plan;
* coding;
* or risk posture.

A clinician may repeatedly delete a phrase because:

* it is stylistically awkward;
* the institution discourages it;
* it overstates certainty;
* or it reflects a systematic model error.

OMNI needs different learning paths:

### Style preference

May be applied at clinician or operator scope after enough evidence and easy rollback.

### Documentation policy

Requires operator or rule-owner approval.

### Clinical correction

Should become a defect or evaluation case, not a personalized preference.

### Clinical practice preference

May require specialty, organization, evidence, or governance review.

**Keeper line:**
**Personalize expression cautiously; never personalize clinical truth by imitation alone.**

---

# XXIII. Learning from customer data must preserve principal, operator, and purpose boundaries

The source says Abridge receives explicit data rights from customers, deidentifies conversations, and uses:

* clinician edits;
* queries;
* human evaluations;
* and LLM evaluations

to improve its models.

That may be legitimate under its agreements and controls.

Architecturally, OMNI still needs to distinguish:

* customer/operator permission;
* patient rights;
* original care purpose;
* secondary learning purpose;
* deidentification status;
* model-improvement scope;
* cross-operator use;
* retention;
* revocation;
* and whether resulting improvements expose one operator’s practices to another.

The learning artifact also needs lineage:

* source population;
* transformation;
* deidentification method;
* permitted purpose;
* model versions trained;
* and downstream deployments.

**Keeper line:**
**The right to process care data for one workflow is not automatically the right to turn every trace into shared model memory.**

---

# XXIV. Deidentification does not erase source quality or representativeness

Even when direct identifiers are removed, learning data can remain biased toward:

* the health systems using the product;
* specialties with high adoption;
* clinicians who edit frequently;
* encounter types with usable audio;
* English-speaking workflows;
* particular geographic or socioeconomic populations;
* and institutional documentation conventions.

Large volume does not guarantee representativeness.

One hundred million conversations can amplify:

* common practice;
* common bias;
* common coding habits;
* common omissions;
* or commercial incentives.

**Keeper line:**
**Scale compounds signal and bias together unless lineage and representativeness are measured.**

---

# XXV. Data network effects are not automatically care-quality network effects

Abridge frames its conversation volume and feedback as a data network effect.

That may create genuine product advantage.

But OMNI should distinguish:

* more data;
* more annotated data;
* better evaluation coverage;
* improved model behavior;
* reduced clinician burden;
* improved documentation;
* improved clinical decisions;
* and improved patient outcomes.

These are different claims.

The loop is only a care-quality network effect when evidence shows that the accumulated data improves the actual protected outcomes.

**Keeper line:**
**A data flywheel becomes a care flywheel only when improvement survives through clinical adoption, action, and outcome.**

---

# XXVI. One assistant across the visit is a strong surface pattern

Abridge’s assistant persists:

* before the visit;
* during the visit;
* and after the visit.

This is strategically important.

Clinicians do not experience care as disconnected product features.

A continuous assistant can preserve:

* patient identity;
* encounter context;
* pending questions;
* current documentation state;
* unresolved tasks;
* and workflow continuity.

This strongly aligns with OMNI’s longitudinal care posture.

But the persistent relationship should be an **agent session or surface continuity**, not one unbounded context window or one all-powerful runtime.

**Keeper line:**
**Continuity should persist across the care workflow; authority should be recomputed at every consequential step.**

---

# XXVII. A unified UX does not justify a unified authority envelope

Abridge folds multiple capabilities into one assistant:

* patient-context search;
* note editing;
* medication ordering;
* imaging ordering;
* literature search;
* and clinical decision support.

These capabilities differ enormously.

### Retrieval

Reads patient or evidence context.

### Documentation

Creates or modifies a clinical artifact candidate.

### Clinical decision support

Produces recommendations or comparison.

### Ordering

Creates a consequential domain command.

A single interface can coordinate them.

A single permission set should not.

The runtime should resolve:

`actor + patient + task + purpose + care state + operator + consequence`
`→ admissible capability`
`→ context packet`
`→ tools`
`→ authority ceiling`
`→ required review and proof`

**Keeper line:**
**One clinical assistant may have one face, but it needs a different governed passport for every responsibility.**

---

# XXVIII. Tool selection is not enough; tool admissibility and action semantics matter

The source says the agent must choose the right tool and behave as a clinician would.

Tool selection is only one layer.

Before selection, the system must determine:

* whether the tool is allowed;
* whether the actor has authority;
* whether the patient and purpose are in scope;
* whether the context is current enough;
* whether the tool is healthy;
* and whether the consequence requires confirmation.

After selection, the system must verify:

* arguments;
* affected object;
* side effects;
* idempotency;
* result;
* and whether the intended state change occurred.

A medication-order tool is not equivalent to a literature-search tool.

**Keeper line:**
**Correct tool choice without correct authority and arguments is still an unsafe action.**

---

# XXIX. Clinical decision support requires evidence authority, not merely retrieval

The source says the assistant can search validated medical evidence.

That phrase conceals several architecture requirements:

* which sources qualify as evidence;
* publication and update date;
* jurisdiction;
* specialty;
* evidence level;
* retraction or correction status;
* guideline authority;
* population applicability;
* conflicts;
* commercial sponsorship;
* and whether local policy differs.

The agent should not convert retrieved literature directly into an individualized recommendation.

A safe path is:

`clinical question`
`→ evidence retrieval`
`→ source authority and applicability assessment`
`→ evidence synthesis candidate`
`→ patient-specific comparison`
`→ clinician judgment and adoption`

**Keeper line:**
**Retrieving medical literature is an evidence operation; applying it to this patient is a clinical authority operation.**

---

# XXX. “Air conditioning” is a powerful product metaphor—and an incomplete governance model

Abridge says the assistant should work like air conditioning:

* present in the background;
* improving the environment;
* not demanding attention unless something important occurs.

This is a good response to clinician burden and alert fatigue.

But ambient AI has special risks:

* continuous observation;
* unclear activation;
* hidden context use;
* invisible inference;
* unwanted retention;
* false reassurance;
* and interruptions whose logic users cannot inspect.

An ambient clinical system should make clear:

* when it is active;
* what it is sensing;
* what it retains;
* which patient and encounter it is attached to;
* when it generates candidates;
* when it interrupts;
* and how it can be paused or corrected.

**Keeper line:**
**Ambient assistance should be low-friction, not invisible in identity, sensing, or consequence.**

---

# XXXI. Background assistance needs an interrupt-rights contract

The system should not surface everything it can infer.

Nor should it remain silent when a material risk is detected.

A governed interruption policy should consider:

* severity;
* confidence;
* novelty;
* time sensitivity;
* reversibility;
* current workflow phase;
* clinician cognitive load;
* whether the issue is already known;
* and the cost of interruption.

Possible interruption classes:

* immediate safety interrupt;
* encounter-end review;
* passive suggestion;
* after-visit task;
* background monitoring;
* no interruption / retained evidence.

**Keeper line:**
**The right to observe does not automatically include the right to interrupt.**

---

# XXXII. Clinician agency must mean more than retaining the final click

The source says clinicians must feel in control and make the final decision.

That is necessary but insufficient.

A clinician is not meaningfully in control if:

* the system hides its sources;
* the suggested order is difficult to inspect;
* correction is burdensome;
* the agent frames one option as inevitable;
* the clinician cannot see uncertainty;
* or the interface creates automation bias.

Meaningful agency requires:

* visible candidate status;
* source and context access;
* alternatives;
* uncertainty;
* editable output;
* refusal;
* escalation;
* undo;
* and preservation of who actually committed the decision.

**Keeper line:**
**Human authority is not preserved by a button if the system has already made disagreement impractical.**

---

# XXXIII. Patient agency is also present, even in a clinician-facing product

The source focuses primarily on clinician control.

But the patient contributes:

* symptoms;
* goals;
* preferences;
* consent;
* refusals;
* and lived outcomes.

A clinical assistant must not treat the patient merely as data observed during the visit.

Patient authority may govern:

* recording consent;
* treatment acceptance;
* refusal;
* communication preferences;
* sensitive-information use;
* and whether particular actions proceed.

A unified clinician assistant cannot absorb these patient commitments into clinician authority.

**Keeper line:**
**Clinician agency and patient agency are parallel, non-fungible authority planes.**

---

# XXXIV. Multi-step clinical agents require trajectory evaluation

Abridge correctly says agent evaluation is an order of magnitude harder than single-step model evaluation.

An agent may reach a superficially acceptable final answer through an unsafe path.

Trajectory evaluation should inspect:

* which context it loaded;
* whether identity was resolved;
* which sources were trusted;
* which tools were considered;
* which tool was selected;
* tool arguments;
* intermediate conclusions;
* ignored contradictions;
* escalation;
* and whether authority checks occurred.

The final answer alone cannot reveal:

* unauthorized access;
* risky tool attempts;
* repeated retries;
* hidden prompt injection;
* or a correct result obtained through a non-repeatable accident.

**Keeper line:**
**For agents, the path to the answer is part of the safety case.**

---

# XXXV. Agent evaluation needs separate quality, safety, boundary, and authority dimensions

Abridge names:

* clinical quality;
* safety;
* adversarial and boundary testing;
* tool selection.

OMNI should extend the evaluation profile to include:

### Clinical quality

* factual accuracy;
* completeness;
* attribution;
* temporal correctness;
* applicability.

### Safety

* contraindications;
* harmful recommendations;
* missed urgency;
* medication and dosage integrity.

### Boundary behavior

* refuses unsupported tasks;
* does not cross specialties or roles;
* does not answer with unavailable evidence;
* does not silently broaden purpose.

### Authority behavior

* distinguishes suggestion from order;
* invokes required human/domain resolution;
* does not commit clinical truth;
* uses the correct principal and credentials.

### Tool behavior

* selection;
* argument correctness;
* side-effect awareness;
* result validation;
* retry and idempotency.

### Interaction burden

* interruption quality;
* alert burden;
* correction burden;
* explanation burden.

### Equity and population behavior

* subgroup performance;
* language;
* accessibility;
* differential failure.

### Runtime resilience

* stale data;
* unavailable source;
* model failure;
* monitor failure;
* degraded fallback.

**Keeper line:**
**A clinically correct answer from an authority-breaking agent is still a failed agent.**

---

# XXXVI. Boundary testing should include “plausible but not authorized”

Many agent evaluations focus on obviously malicious prompts.

Healthcare boundary failures are often more subtle.

Examples:

* a nurse asks for an action requiring prescriber authority;
* a physician accesses a patient outside the care relationship;
* an assistant tries to order under a stale encounter;
* a model turns educational guidance into a personalized directive;
* a clinician asks for a shortcut around a consent gate;
* a sales or support user gains patient context through shared tools;
* or the system uses one operator’s data to answer another operator.

The output may be clinically plausible.

The failure is authority, purpose, or scope.

**Keeper line:**
**Healthcare safety includes refusing clinically sensible actions that the current actor is not authorized to perform.**

---

# XXXVII. Continuous online monitoring should measure more than note edits

Abridge monitors:

* edits;
* ratings;
* qualitative feedback;
* and judge outputs.

Those are valuable leading indicators.

They do not directly establish:

* whether the patient received the intended care;
* whether the clinician noticed an error;
* whether a wrong fact propagated;
* whether an order was acted upon;
* whether the documentation changed billing;
* or whether harm occurred.

OMNI’s runtime observation should include an exposure and consequence ladder:

`generated`
`→ displayed`
`→ adopted`
`→ committed to record`
`→ used for coding / ordering / communication`
`→ acted upon`
`→ patient received`
`→ outcome observed`

**Keeper line:**
**Runtime monitoring must follow the output far enough to know what consequence it actually created.**

---

# XXXVIII. Technical improvement, clinician satisfaction, and patient outcome are separate horizons

A model release may:

* score better on judges;
* require fewer edits;
* receive higher ratings;
* and still have no proven effect on care outcomes.

Likewise, a release may improve patient care while creating unsustainable clinician burden.

The system should distinguish:

* model-quality improvement;
* workflow improvement;
* clinician-burden improvement;
* documentation-quality improvement;
* financial effect;
* patient experience;
* safety outcome;
* and clinical outcome.

**Keeper line:**
**A better note is not automatically better care, but bad documentation can still corrupt care downstream.**

---

# XXXIX. Trust is a runtime property, not accumulated brand credit

“Trust is earned in drops but lost in buckets” is a strong operator line.

The deeper OMNI version is:

Trust is continuously produced through:

* source fidelity;
* permission;
* visible uncertainty;
* appropriate restraint;
* reliable performance;
* correction;
* containment;
* disclosure;
* and proof.

Trust can disappear when:

* one wrong dose enters the chart;
* one private conversation leaks;
* one release cannot be traced;
* one model silently changes;
* or one patient is harmed.

Therefore, trust cannot remain only:

* a reputation;
* a security questionnaire;
* or a customer relationship.

It must be represented in the runtime system.

**Keeper line:**
**In care, trust is the accumulated effect of governed behavior—and one uncontained failure can invalidate the claim.**

---

# XL. Faster releases are credible only because release burden moved into infrastructure

Abridge reports reducing releases from one or two months to days.

The source attributes that to:

* unified datasets;
* annotation;
* tracing;
* evaluation;
* self-hosting;
* access control;
* automation;
* and operational-process improvement.

This is the correct general lesson.

The organization did not make healthcare less risky.

It reduced repeated manual work and made evidence easier to generate and inspect.

**Keeper line:**
**The safe path to speed is reusable proof infrastructure.**

---

# XLI. Framework consolidation is useful but should remain replaceable

Abridge says LangGraph and LangSmith replaced fragmented custom tools.

A unified platform can reduce:

* inconsistent datasets;
* disconnected annotation;
* duplicate traces;
* manual transfers;
* and operational friction.

But OMNI should not make one vendor tool the canonical owner of:

* clinical evidence;
* release authority;
* model lineage;
* or production truth.

OMNI should own the required contracts and evidence.

Frameworks can implement them.

**Keeper line:**
**Unify the evidence model, not the vendor dependency.**

---

# XLII. The source strongly validates the Platform Loop decomposition

The talk maps naturally onto:

### Engineering & Validation

* issue taxonomy;
* annotation guides;
* labeled encounters;
* judge generation;
* offline evals;
* historical replay;
* candidate model versions.

### Release Operations

* limited cohort;
* partner eligibility;
* silent or early-access rollout;
* promotion;
* rollback.

### Runtime Operations

* online judges;
* clinician edits;
* ratings;
* qualitative signals;
* performance monitoring;
* containment.

This is one of the clearest real-world receipts for OMNI’s Platform Loop.

But it also exposes an owed connection:

The release system needs to know when a technical defect crossed into:

* a clinical record;
* a care decision;
* an order;
* a claim;
* or patient harm.

That is where Platform must notify Care and Accountability without absorbing either.

**Keeper line:**
**Clinical AI releases require technical, clinical, and accountable closure paths that remain linked but independently owned.**

---

# XLIII. The source validates the Agent Runtime model—and its hard boundary

Abridge’s assistant is not merely a model.

It is:

* persistent surface identity;
* patient-context access;
* tools;
* retrieval;
* ordering;
* evidence search;
* feedback;
* trace;
* and evaluation.

That is exactly the model-plus-governed-harness pattern.

But the talk’s phrase “unified agent” must not erase:

* capability-specific runtime profiles;
* tool grants;
* model routing;
* authority ceilings;
* and domain commitment.

**Keeper line:**
**The assistant is unified at the experience layer and decomposed at the responsibility layer.**

---

# XLIV. The source creates direct pressure on OMNI’s clinical-document architecture

OMNI should be able to represent the complete chain:

`recording consent`
`→ source capture`
`→ participant attribution`
`→ transcript and extraction`
`→ source-attributed claims`
`→ observation and assertion candidates`
`→ note candidate`
`→ clinician edits`
`→ clinician attestation/adoption`
`→ EHR commit`
`→ coding and administrative projections`
`→ orders / obligations`
`→ patient communication`
`→ downstream outcome and correction`

At every transition:

* actor;
* source;
* model/runtime version;
* transformation;
* uncertainty;
* authority;
* and proof

must remain available.

**Keeper line:**
**A note-generation system is safe only when the path from voice to committed record is replayable.**

---

# XLV. The conversation must remain available as evidence without becoming the everyday interface

For some disputed or high-consequence statements, reviewers may need access to:

* the source audio;
* transcript segment;
* speaker identity;
* and timing.

But routine use should not require clinicians to replay every encounter.

The system therefore needs:

* concise note;
* source-linked material claims;
* confidence indicators;
* correction path;
* and protected access to the original evidence.

**Keeper line:**
**Compression should reduce burden without severing the path back to source.**

---

# XLVI. “Save lives” must remain an earned outcome claim

Abridge says its later products may help save lives and appropriately adds humility.

That is the right posture.

A documentation or clinical assistant may plausibly contribute through:

* improved information availability;
* reduced missed follow-up;
* better medication fidelity;
* timely escalation;
* reduced clinician fatigue;
* and stronger decision support.

But the system must not infer lifesaving impact from:

* usage;
* note quality;
* clinician satisfaction;
* or model scores.

The claim requires outcome evidence.

**Keeper line:**
**Clinical ambition may guide product direction; outcome proof must determine clinical claims.**

---

## Where it lands

### Massive

**Care Operating Model**

* conversation as source/carrier, not Care itself;
* contribution-level classification;
* source-attributed claims;
* observation versus assertion;
* provider adoption;
* clinical commitment;
* orders and obligations;
* action versus occurrence;
* outcome and reopening.

**Platform Loop**

* healthcare-specific change classes;
* model/prompt/policy/judge/runtime versions;
* evaluation;
* historical replay;
* cohort release;
* exposure state;
* continuous monitoring;
* containment;
* rollback;
* recall;
* and cross-loop consequence notification.

**Agent Runtime & Harness**

* one clinician-facing surface;
* task-specific runtime profiles;
* context policy;
* capability grants;
* tool authorization;
* longitudinal session continuity;
* trace;
* evaluation;
* and clinical authority ceilings.

### Major

**Clinical Memory / Observation / D7**

* source audio and transcript custody;
* speaker attribution;
* extracted claims;
* clinical-adoption state;
* note lineage;
* source links;
* supersession and correction.

**Governed Resolution / REV-184**

* clinical recommendation and decision;
* no-action;
* uncertainty;
* clinician authority;
* patient acceptance/refusal;
* outcome read against original context.

**Ordered Fulfillment and domain commands**

* medication order;
* imaging order;
* referral;
* execution;
* patient receipt;
* partial failure;
* proof.

**Build-OS / E&V**

* expert-authored evaluation criteria;
* annotation-quality controls;
* judge generation;
* judge validation;
* confidence contracts;
* adversarial and boundary tests.

**Recommendation Integrity Firewall**

* separation of clinical documentation and revenue optimization;
* evidence-bound coding;
* no financial objective silently shaping clinical truth.

### Medium-major

**Accountability Loop**

* wrong medication or dose;
* attribution failure;
* privacy breach;
* erroneous release exposure;
* disclosure, remediation, patient communication, and recurrence obligations.

**Federation / operators**

* health-system-specific templates;
* release eligibility;
* operator policies;
* data rights;
* model-improvement permissions;
* local versus shared learning.

**Patient surfaces**

* consent;
* note access;
* correction;
* explanation;
* communication;
* visibility into AI participation where required.

---

## Doctrine / primitive pressure

All names below require deduplication before promotion.

`clinical_source_conversation`
`conversation_capture_receipt`
`participant_attribution_record`
`speaker_uncertainty_state`
`clinical_note_candidate`
`note_source_lineage`
`note_adoption_event`
`clinical_document_commit`
`documentation_integrity_firewall`
`downstream_projection_lineage`
`clinical_failure_taxonomy`
`clinical_eval_pillar`
`clinical_eval_contract`
`annotation_guide`
`annotator_expertise_profile`
`annotation_quality_receipt`
`annotation_disagreement_case`
`judge_generation_recipe`
`judge_calibration_record`
`judge_independence_profile`
`reference_free_judge`
`reference_based_judge`
`clinical_eval_confidence_contract`
`clinical_release_exposure_state`
`healthcare_experiment_contract`
`silent_release_profile`
`clinician_edit_signal`
`edit_intent_classification`
`style_preference_memory`
`clinical_correction_signal`
`clinical_agent_trajectory_eval`
`clinical_authority_eval`
`ambient_activation_state`
`interrupt_rights_profile`
`clinical_agent_session`
`visit_continuity_context`
`clinical_tool_admissibility`
`clinical_action_receipt`

Most should extend existing:

* source event;
* extraction run;
* source-attributed claim;
* observation;
* assertion candidate;
* clinical assertion;
* document/evidence custody;
* Governed Resolution;
* authorized action;
* capability envelope;
* agent runtime profile;
* validation contract;
* release candidate;
* deployment and rollout;
* operational finding;
* response case;
* and replayable proof.

Do not create an “Abridge domain” or a separate ambient-note ontology.

---

## Keeper doctrine

1. **The patient-clinician conversation is a privileged source, not the sovereign care record.**

2. **A clinical note is not a summary; it is a clinician-attested longitudinal evidence artifact with downstream clinical, financial, and legal effects.**

3. **Documentation must preserve who experienced, observed, inferred, recommended, and committed.**

4. **When speaker identity changes meaning, speaker uncertainty is clinical uncertainty.**

5. **One conversation may produce many downstream records; every record must earn its own authority.**

6. **The record may support reimbursement; reimbursement must not author the record.**

7. **A clinically plausible sentence is not an authorized clinical command.**

8. **High-stakes quality is a vector of protected behaviors, not an average score.**

9. **Failure priority depends on frequency, consequence, detectability, propagation, and reversibility.**

10. **The rule owner defines the evaluation contract; the platform supplies the machinery.**

11. **Human labels are evidence with expertise, provenance, disagreement, and uncertainty.**

12. **Automated judge construction accelerates measurement; it does not automate trust in the measure.**

13. **A judge sharing the evaluated model’s blind spots is not independent assurance.**

14. **Reference-free judges monitor broadly; reference-based judges challenge specifically.**

15. **Judge scores become release evidence only after the judge’s own uncertainty is characterized.**

16. **Population-average safety does not establish safety for every specialty or clinical lane.**

17. **Offline evaluation, historical replay, shadow deployment, silent exposure, cohort release, and general release are distinct states.**

18. **“Silent” describes visibility, not absence of consequence.**

19. **Every healthcare production experiment needs a declared consequence envelope.**

20. **Trust permits controlled experimentation; it does not replace containment or recall.**

21. **An edit is evidence of change, not yet evidence of the reason for change.**

22. **Personalize documentation style without learning clinical truth by imitation.**

23. **The right to process care data does not automatically make every trace shared model memory.**

24. **Scale compounds signal and bias together.**

25. **A data flywheel becomes a care flywheel only when improvement reaches care outcomes.**

26. **Continuity may persist across the visit; authority must be recomputed at consequential transitions.**

27. **One clinical assistant may have one face and many separately governed responsibility profiles.**

28. **Correct tool selection without correct authority and arguments is still unsafe.**

29. **Retrieving medical evidence is not the same as authorizing patient-specific care.**

30. **Ambient assistance should be low-friction, not invisible in sensing or consequence.**

31. **The right to observe does not automatically include the right to interrupt.**

32. **Human authority is not preserved when disagreement is technically possible but operationally impractical.**

33. **Clinician and patient agency are parallel, non-fungible authority planes.**

34. **For agents, the path to the answer is part of the safety case.**

35. **A clinically correct answer from an authority-breaking agent is a failed agent.**

36. **Runtime monitoring must follow an output through adoption, commitment, action, receipt, and outcome.**

37. **A better note is not automatically better care.**

38. **The safe path to release velocity is reusable proof infrastructure.**

39. **Unify the evidence model, not the vendor dependency.**

40. **A note-generation system is safe only when the path from voice to committed record is replayable.**

41. **Compression may reduce burden but must preserve the path back to source.**

42. **Clinical outcome claims must be earned through outcome evidence.**

---

## What not to import blindly

### Do not make the conversation the center of all healthcare truth

It is a major signal and workflow wedge.

It is not the whole patient, whole world, whole record, or whole care process.

### Do not treat notes as transcription products

Clinical notes are governed interpretations and commitments.

Raw speech-to-text accuracy is necessary but insufficient.

### Do not let one generated note directly become diagnosis, order, code, claim, and patient instruction

Those are distinct projections and commits.

### Do not equate clinician review with guaranteed detection

Clinicians are busy, may trust the system, and can miss subtle errors.

The platform must carry its own evidence and controls.

### Do not let billing optimization influence clinical fact generation

Coding can consume the attested record.

It must not rewrite the clinical story to improve reimbursement.

### Do not treat every human label as gold standard

Human judgment varies and can be wrong, inattentive, biased, or institution-specific.

### Do not allow automated judge generation to become automated governance

The generated judge needs validation, versioning, monitoring, and retirement.

### Do not use one judge for every specialty and encounter type

Clinical evaluation must match the lane and population.

### Do not use LLM-judge agreement as the only safety evidence

Use deterministic checks, expert review, statistical evidence, adversarial cases, and production outcomes.

### Do not call a release “silent” and infer it is harmless

A silent release may still alter visible notes, clinical decisions, coding, or patient state.

### Do not infer patient authorization from health-system participation

Operator approval, clinician participation, patient rights, product improvement, quality improvement, and research classification are separate concerns.

### Do not learn indiscriminately from clinician edits

Classify style, correction, policy, coding, and clinical-decision changes separately.

### Do not let one clinician’s repeated behavior silently become organization-wide medicine

Preference, local policy, and clinical standard are different.

### Do not treat deidentification as the entire learning-governance model

Purpose, rights, population, provenance, operator boundaries, and downstream model use remain relevant.

### Do not equate large conversation volume with representative evidence

Volume may magnify institutional and population bias.

### Do not let the unified assistant accumulate a universal tool and permission union

One UX is compatible with many scoped capability passports.

### Do not expose every patient source to every capability merely because the assistant persists across the visit

Context must remain purpose-scoped and minimum necessary.

### Do not let a clinical decision-support capability directly commit an order

Recommendation and command remain distinct.

### Do not treat ambient operation as permission for ambient memory

Sensing, retention, learning, and reuse need separate governance.

### Do not treat clinician agency as ceremonial HITL

Agency requires inspectability, correction, alternatives, refusal, and usable control.

### Do not claim quality or lifesaving impact from model scores, note edits, or adoption alone

Clinical impact requires clinical outcome evidence.

### Do not make LangGraph or LangSmith the architectural authority

They are implementation rails.

OMNI must retain the portable contracts, evidence, and control model.

---

## Do-not-miss lesson

**Abridge demonstrates that the hard part of clinical AI is not generating a note or attaching tools to an agent. The hard part is preserving the transformation from human conversation to clinical record, action, payment, and longitudinal outcome while every model, judge, release, edit, and tool call remains attributable, bounded, testable, reversible, and subordinate to the correct human and domain authority.**

---

## Lightweight tiering

| Concept                                                  | stale-vs-current OMNI         |         weight tier | status                  |
| -------------------------------------------------------- | ----------------------------- | ------------------: | ----------------------- |
| Conversation as high-value clinical source               | `AFFIRM`                      |   care architecture | promote                 |
| Conversation as healthcare truth center                  | `direct conflict`             |           guardrail | reject                  |
| Clinical note ≠ summary                                  | `AFFIRM / sharpened`          |               spine | promote                 |
| Speaker-attribution safety                               | `PARTIAL`                     |     contract / eval | promote                 |
| Note → clinical/financial projection separation          | `PARTIAL`                     |               spine | promote                 |
| Documentation-integrity firewall                         | `PARTIAL / strong sharpening` |               spine | promote                 |
| Failure taxonomy by prevalence and severity              | `AFFIRM`                      |          evaluation | promote                 |
| Detectability/propagation/reversibility extension        | `PARTIAL`                     |          evaluation | promote                 |
| Expert-authored annotation guides                        | `AFFIRM`                      |      Build-OS / E&V | promote                 |
| Annotation-attention rationales                          | `PARTIAL`                     |            practice | watch                   |
| Auto-generated calibrated judges                         | `PARTIAL / strong mechanism`  |                 E&V | promote with gates      |
| LLM judge as authority                                   | `settled against`             |           guardrail | reject                  |
| Reference-free + reference-based judge composition       | `PARTIAL`                     |          evaluation | promote                 |
| Specialty-specific evaluation                            | `AFFIRM / sharpened`          |          evaluation | promote                 |
| Eval-confidence contract                                 | `PARTIAL`                     |            contract | promote                 |
| Offline → replay → limited live → general release ladder | `AFFIRM / sharpened`          |       Platform Loop | promote                 |
| Silent-release consequence contract                      | `PARTIAL / important`         |       Platform Loop | promote                 |
| Clinician edits as learning evidence                     | `AFFIRM`                      |            learning | promote                 |
| Clinician edits as unclassified training truth           | `direct conflict`             |           guardrail | reject                  |
| Style personalization                                    | `PARTIAL`                     |   product / runtime | promote with boundaries |
| Clinical meaning personalization by imitation            | `direct conflict`             |           guardrail | reject                  |
| Persistent before/during/after agent UX                  | `AFFIRM`                      |             product | promote                 |
| One agent with universal authority                       | `direct conflict`             |           guardrail | reject                  |
| Ambient “air-conditioning” assistance                    | `PARTIAL`                     |             product | promote with visibility |
| Clinician agency                                         | `AFFIRM`                      |               spine | promote                 |
| Patient authority omission                               | `gap in source`               |      care guardrail | restore from OMNI       |
| Trajectory evaluation for clinical agents                | `PARTIAL`                     | Agent Runtime / E&V | promote                 |
| Tool selection as sole agent-action eval                 | `incomplete`                  |           guardrail | sharpen                 |
| Continuous monitoring from output to outcome             | `PARTIAL`                     |     Platform / Care | promote                 |
| Framework consolidation                                  | `implementation choice`       |                rail | watch                   |
| Reusable proof infrastructure as velocity mechanism      | `AFFIRM / strong evidence`    |    spine / Platform | promote                 |

---

## 5. Hard read

**Verdict:** `full_semantic`, 5/5, spine-relevant production evidence.

This is the strongest healthcare-specific production source in this portion of the wave.

Its value is not that Abridge uses LangGraph or LangSmith.

Its value is that the source exposes the real shape of high-stakes AI delivery:

* healthcare-specific failure classes;
* expert-authored evaluation;
* uncertain human labels;
* automated but governed judges;
* multiple evaluation modes;
* historical replay;
* controlled live exposure;
* runtime feedback;
* and continuous release.

It also shows why clinical documentation cannot be treated as summarization.

The ambient note is a transformation from a mixed-source human interaction into:

* longitudinal clinical evidence;
* financial and administrative projections;
* potential orders;
* and future decision context.

Misattribution, hallucination, or incentive distortion can therefore propagate far beyond the text itself.

The source’s unified clinician assistant is strategically compelling. A persistent agent spanning the visit may become the correct experience layer. But the capabilities named in the talk range from information retrieval to medication and imaging orders. Those cannot share one undifferentiated authority envelope.

The strongest Abridge contribution is the claim that quality and velocity need not be traded when evaluation infrastructure is built properly.

OMNI should adopt the mechanism and raise the bar:

* evaluation must include clinical meaning, authority, trajectory, population, exposure, and downstream consequence;
* LLM judges remain evidence;
* silent release remains real exposure;
* clinician edits must be interpreted before they become learning;
* and the release loop must connect technical defects to clinical reassessment, patient communication, and outcome proof.

**Strongest OMNI line:**

> **Clinical AI moves fast safely only when every transformation—from conversation to record to action to outcome—carries its source, authority, evaluation, exposure, and proof with it.**


&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

WOW!!!!  OKAY!!!!!!!  So this one is a beast, and a gem... although we wont take it all for 100% granted.... i just inherently BELIEVE that OMNI can do it BETTER than these guys... we REALLy have to tune in here... bacause we're ALREADY getting our asses beat on this stuff...   We are BEHIND !!!!!!! But we need to think better, broader, and higher....  and hold it all together... using this as a strong signal!!!!

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-19` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Method note:** formalizes Knox Review 001 (`full_semantic`, 5/5 — the strongest healthcare-specific *production* source in this portion of the wave; 46 numbered sections I–XLVI + 42 keeper doctrines + "where it lands" + ~38 primitive candidates + ~22 what-not-to-import cautions + a 30-row tiering table), verified against the §1 transcript (Janie Lee, VP Product, Abridge — LangChain customer talk). This is a *first-party, commercially-interested* case study: HIGH authority for Abridge's own architecture / eval / release / assistant design; the scale (250 systems / ~100M annual conversations), quality-improvement, patient-safety, data-rights-sufficiency, and release-cycle claims are **not** independently verified (`GRD-039` — authority is descriptive, not worship). `doctrine_status` vs thesis v3 (§0→§B) + current domain contracts + post-v3 layer (C3.5–C3.8 · REV-184/GRR · `EVRUN-000004 §0.5` · Polaris/C4.1 · wave-5 gaps + `D0OL-GRD-001..008` · Reactor candidate). `build_status` grounded by repo inspection (2026-07-18): `requireCapability`/`lib/auth/capabilities.ts` + audit-actions + disclosure-policy evaluator + intake doc routing + `chart_ai_reviews` + lab/observation extraction + patient-case/impl + artifact-pipeline + outbound dispatch exist (**partial**); **NO** agent runtime / AI-gateway / model-gateway / security-control-plane / skill-registry / clearinghouse / self-improving Engine. So nearly every cluster below = `doctrine AFFIRM/PARTIAL × build absent-or-partial` (the wave-2/3/4/5 dominant pattern). PROPOSE-ONLY (`GRD-036`); nothing minted, no contract/thesis/registry edit, §C untouched (`GRD-044`). Formalizes Knox — does not re-derive; where noted, OMNI **sharpens above** Abridge's bar (adds authority / trajectory / population / exposure / outcome dimensions Abridge does not name).

### Cluster table

| # | concept | OMNI meaning | homes | anchor (verbatim ≤12 words + ts) | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| A | **Conversation = privileged care source, NOT the sovereign care record** | The patient-clinician conversation is one high-value carrier among many (labs, imaging, devices, dispense events, external records, patient-generated, unspoken decisive events); OMNI must resist the product implication that capturing it puts one platform "at the center of healthcare's data layer." Conversation ≠ clinical truth | Care Operating Model · thesis §1 (what OMNI is/is not) · Clinical Memory (one-owner-per-fact) | "put oursel in the center of healthc care's data layer" [2:33] | AFFIRM (conversation is a source, not Care) × build=partial (intake/observation extraction) | care-architecture / guardrail | promote source-role / reject truth-center |
| B | **A clinical note is not a summary — it is a governed multi-stage transformation** | `recorded interaction → speaker/event segmentation → source-attributed claims → observations/findings → reasoning candidates → assessment/plan candidates → draft → clinician review/adoption → committed note → typed downstream projections`. Every transition must retain actor / source / model+runtime version / uncertainty / authority / proof so voice→committed-record is **replayable** | Care Operating Model · D7/Documents · Clinical Memory · Build-OS/E&V · REV-184 (frozen-context) | "It's not just a summary of a meeting or a conversation" [5:05] | AFFIRM/sharpened (spine) × build=partial (`chart_ai_reviews`, artifact-pipeline, doc routing) | spine | promote |
| C | **The note must preserve distinct epistemic + authority planes** | `source-attributed claim ≠ observation ≠ extracted assertion candidate ≠ provider-adopted clinical assertion`; a note may carry each but must not flatten them into one clinical voice. Preserve speaker / represented principal / statement-type / certainty / temporal ref / negation / hypothetical-vs-actual / adoption-state / resolving clinician | Care Operating Model · Clinical Memory / Observation · REV-184 | "a symptom is very different than a doctor... diagnosing it and billing" [5:47] | AFFIRM (OMNI's existing separation) × build=partial | spine | promote |
| D | **Speaker attribution is a first-class care-SAFETY primitive, not a generic accuracy metric** | Misattribution (diarization error, overlapping/remote speech, interpreters, caregivers, trainees, quoted prior clinicians, question→assertion conversion) is medically+legally consequential. Preserve detected speaker / confidence / unresolved identity / roster / correction history / supporting segment; low-confidence attribution on high-consequence assertions → visible uncertainty / required confirmation / omission / escalation. **When identity changes meaning, speaker uncertainty IS clinical uncertainty** | Care · Observation / Clinical Memory · Build-OS/E&V (failure class) | "assign a statement or a symptom... to the wrong per[son]" [5:34] | PARTIAL (contract/eval) × build=absent | contract / eval | promote |
| E | **Clinical documentation is a multi-OBJECT pipeline; each downstream record earns its own authority** | Raw source (audio/transcript/consent) · derived candidate (draft/findings) · clinical commitment (attested note/diagnoses/plan/orders) · financial+admin projections (coding/claim-facts/quality-measure/prior-auth) · communications (AVS/instructions/referral/handoff) · audit+proof (edits/source-links/versions/resolver/EHR-write receipt). Linked, NOT collapsed; projections must not silently inherit draft authority | Care · D7/Documents · Ordered Fulfillment · Platform Loop · Accountability | "the note... ultimately becomes the bill" [5:12] | PARTIAL (spine) × build=partial | spine | promote |
| F | **Documentation-integrity firewall — the record may support reimbursement; reimbursement must not AUTHOR the record** | Note→bill creates a structural incentive conflict (upcode/downcode pressure): clinical facts generated from care evidence; coding derived from the attested record as attributable candidates; revenue impact is **not** a term in the clinical-truth objective; unsupported documentation rejected. Direct application of the **Recommendation Integrity Firewall** (already named) | Care · Recommendation Integrity Firewall · Commerce/Coding · Accountability | "severe consequences for upcoding or down coding" [5:58] | PARTIAL/strong-sharpening (spine) × build=absent | spine | promote |
| G | **Medication/order "hallucinations" are executable clinical STATE, not content errors** | `mentioned ≠ historical ≠ patient-reported ≠ contemplated ≠ clinician-recommendation ≠ order-candidate ≠ authorized order ≠ dispense ≠ administration` (same ladder for imaging). Linguistic proximity must never become an order; an agent that can "place a medication or MRI" requires authenticated actor+patient, indication, contraindication checks, consent, typed order semantics, authority verification, deterministic idempotent write, confirmation, execution proof. **A clinically plausible sentence is not an authorized clinical command** | Care · Ordered Fulfillment (OFC) · REV-184 (blast-radius authority) · Agent Runtime · candidate≠commit | "orders for a medication that wasn't actually prescribed... wrong dosage" [6:04] | AFFIRM (candidate≠commit) × build=absent (no order-agent) | spine | promote |
| H | **High-stakes quality = a vector of protected behaviors, not one average score** | Abridge's pillars (accuracy/compliance/style/completeness) → OMNI's finer failure taxonomy (source-attribution, participant-identity, negation, temporal, omission, unsupported-addition, diagnosis-inflation, medication/dosage/plan/order fidelity, coding-distortion, privacy-exposure, evidence-citation, uncertainty, clinician-burden), each with its own definition / severity / population / evaluator / threshold / escalation / release-consequence / runtime-monitor. A single aggregate note-score conceals catastrophic rare failures | Build-OS/E&V · Platform Loop · Reactor (proof burden) | "organized... into an aggregate set of pillars" [8:16] | AFFIRM (evaluation) × build=partial (`chart_ai_reviews`) | evaluation | promote |
| I | **Prioritization = prevalence × severity + detectability / reversibility / propagation / blast-radius / exposure** | Prevalence×severity is necessary but incomplete; a one-in-a-million wrong-dose or a rare attribution error entering the longitudinal record (propagating for years) can outweigh a common style issue. Adds directly to REV-184 blast-radius + Reactor consequence envelope | REV-184 · Reactor · Build-OS/E&V · Accountability | "prioritize it by both prevalence... as well as the severity" [8:05] | PARTIAL (evaluation) × build=absent | evaluation | promote |
| J | **The rule OWNER defines the evaluation contract; the platform supplies the machinery** | Clinicians/specialists/pharmacists/coders/privacy officers/patient-safety/compliance own "what counts as a clinically meaningful error"; the AI/platform team builds annotation+judge machinery but must NOT unilaterally define clinical meaning, which omissions matter, which specialty standard applies, or "safe enough." Mirrors one-owner-per-fact + AI-never-care-authority | Care authority · Build-OS/E&V · thesis §8 gates | "clinician who knew the subject matter well design the annotation guide" [8:33] | AFFIRM (Build-OS/E&V) × build=absent | Build-OS / E&V | promote |
| K | **Human labels are evidence with provenance + uncertainty + disagreement — not unquestionable ground truth; rationale is a QC instrument, not a ritual** | Ground-truth pipeline fails via inattention / ambiguity / specialty disagreement / fatigue / copied rationales / poor sampling / unsuitable annotators. Needs annotator identity+expertise, guide version, blinded/adjudicated review, inter-rater agreement, **preserved disagreement** (don't force synthetic unanimity), confidence, difficult-case routing, drift monitoring. Free-text rationale used selectively (high-severity, disagreements, sampled routine, new criteria, calibration, near-threshold), not on every item (avoids performative boilerplate) | Build-OS/E&V · Knowledge Reservoirs (annotation-quality) | "check that the people who are annotating... are actually paying attention" [9:32] | AFFIRM+PARTIAL (Build-OS/E&V) × build=absent | Build-OS / E&V | promote (rationale=watch) |
| L | **Auto-calibrated LLM judges (APO) = evaluator CANDIDATES, not evaluator authorities** | APO (annotation guide + labeled encounters → calibrated judge automatically) accelerates measurement but the judge is still a model that can overfit calibration, reproduce annotator error, miss rare cases, drift, reward superficial markers, fail a new specialty/language/demographic. Safe lifecycle: `expert failure-concept → guide → labeled+adjudicated cases → candidate judge → held-out validation → subgroup+adversarial testing → calibration assessment → bounded deployment → ongoing human/outcome comparison → versioning/retirement`. **Automating judge construction accelerates measurement; it does not automate trust in the measure** | Build-OS/E&V · Intelligence Foundry (named-only) · candidate≠commit | "APO framework... generates the calibrated judge automatically" [8:47] | PARTIAL/strong-mechanism (E&V) × build=absent | E&V | promote with gates |
| M | **Judge independence — the evaluator must not share an unchecked failure mode with the evaluated model** | Shared base family / training data / provider / prompt conventions / optimization incentives → correlated failure (a fluent confabulated note scored highly). Record judge model+family, evaluated model+family, shared-provenance-where-knowable, reference dependence, calibration corpus, known blind spots, + independent human/deterministic checks. **A model grading its close relative is not independent assurance merely because it runs in a separate process** | Build-OS/E&V · security/assurance lane · REV-184 (world-model honesty) | (Knox §XIV synthesis of judge design) [~8:47] | PARTIAL (assurance) × build=absent | E&V / guardrail | promote |
| N | **Reference-free + reference-based judges measure DIFFERENT things — complementary layers, neither a universal oracle** | Reference-free (source+note+rubric, no gold standard) = broad coverage, low cost, runs online continuously to monitor; but may normalize systematic error / reward plausible language. Reference-based (vs adjudicated expected result, specialty-level) = specific regression + protected-behavior testing; but expensive / subjective / stale / one-institution-style / may mistake valid variation for error | Build-OS/E&V · Platform Runtime (online judges) | "reference free judges... doesn't need a gold standard note" [10:12] | PARTIAL (evaluation) × build=absent | evaluation | promote |
| O | **Eval-confidence contract — a judge score is release evidence only after its own uncertainty + failure distribution are known** | "High confidence" must be explicit: eval definition+version, judge version, model+runtime version, population/specialty/language/encounter-type, sample size, failure count, CI + lower bound, severity weighting, subgroup results, inter-rater agreement, FP/FN estimates, baseline comparison. 99% on 100 easy cases ≠ 99% across representative volume with a controlled lower bound. Affirms wave-1..5 **"a pass is an observation; confidence requires repeated evidence"** + `eval_confidence_contract` (wave-5 named gap) | Build-OS/E&V · Platform Loop · REV-184 | "we can't push to prod because of the stakes" [10:56] | PARTIAL (contract) × build=absent | contract | promote |
| P | **Evaluation must be encounter-, specialty-, population-, and workflow-aware** | A model can pass on population average while failing precisely where consequence is highest (pediatric vs adult, telehealth vs in-person, new vs follow-up, multimorbidity, language/interpretation, high medication burden, operator-specific documentation rules). **Population-average safety is not evidence of safety for every clinical lane** | Build-OS/E&V · Federation (operator variation) · Care | "reference based judges... as specific as the specialty level" [10:44] | AFFIRM/sharpened (evaluation) × build=absent | evaluation | promote |
| Q | **Offline / historical-replay / shadow / silent-user-impacting / limited-cohort / general release are DISTINCT deployment states — "silent" describes visibility, not absence of consequence** | These are not interchangeable; a defect's consequence depends on how far the output traveled. Maps to the Platform Loop exposure ladder `generated → displayed → adopted → committed → acted upon`. Affirms the wave-6 `deployment_activation_state` INVESTIGATE-lane sharpening (route, don't mint) | Platform Loop (Release Ops) · Reactor · Build Entry Gate | "okay with a silent release without knowing about it" [11:37] | AFFIRM/sharpened (Platform Loop) × build=absent | Platform Loop | promote |
| R | **Healthcare A/B testing needs a declared experimentation / consequence-envelope contract — operator buy-in ≠ full architecture** | Partner "silent release" agreement is useful operator-level authorization but does not alone answer: what changes, who is exposed, whether output is visible / can enter the record / alter clinical action / affect billing, expected benefit, foreseeable harm, non-inferiority objective, stop conditions, monitoring latency, rollback, notification obligations, clinician-awareness, patient-rights, and whether it is product-improvement vs QI vs research. **Every production experiment needs a declared consequence envelope, not merely a cohort percentage.** A style change ≠ a medication-extraction change | Platform Loop · Accountability · Federation · REV-184 · (§C pressure — PAUSED) | "first 10 to 15% of customers willing to innovate" [11:41] | PARTIAL/important (Platform Loop) × build=absent | Platform Loop / contract | promote |
| S | **Partner trust ≠ runtime controls; trust is a RUNTIME property, not accumulated brand credit** | "Trust earned in drops, lost in buckets" → the deeper OMNI form: trust is continuously produced through source fidelity / permission / visible uncertainty / restraint / reliability / correction / containment / disclosure / proof, and invalidated by one wrong dose in the chart, one leak, one untraceable release, one silent model change. Needs operator-specific eligibility, narrow cohort, known version, immediate holdback, exposure tracking, runtime monitoring, correction path, rollback, affected-record identification, escalation | Platform Loop (Runtime Ops) · Accountability Loop · Reactor · security lane | "trust is earned in drops but lost in buckets" [4:16] | AFFIRM (runtime-trust) × build=absent | spine-guardrail | promote |
| T | **Continuous online monitoring must follow the output down an exposure→consequence ladder — edits/ratings alone are insufficient** | Edits, ratings, qualitative feedback, judge outputs are leading indicators but do not establish whether the patient got intended care, the clinician noticed an error, a wrong fact propagated, an order was acted on, or documentation changed billing. Ladder: `generated → displayed → adopted → committed → used for coding/ordering/comms → acted upon → patient received → outcome observed` | Platform Loop (Runtime) · Care · Accountability | "Are people editing the note? What are the ratings" [11:52] | PARTIAL (Platform/Care) × build=absent | Platform / Care | promote |
| U | **Velocity is credible only because release burden moved into reusable proof INFRASTRUCTURE — this strongly validates the Platform Loop decomposition** | 1–2 months → days came from unified datasets/annotation/tracing/evaluation, self-hosting, access control, automation, process improvement — NOT from lowering the safety bar. Maps cleanly to E&V (issue taxonomy, guides, labels, judge-gen, offline evals, replay, candidates) / Release Ops (cohort, eligibility, silent/early-access, promotion, rollback) / Runtime Ops (online judges, edits, ratings, monitoring, containment). Owed connection: Platform must notify Care + Accountability when a technical defect crosses into record/decision/order/claim/harm **without absorbing either loop** | Platform Loop · Build-OS · Accountability · Care · thesis §8 (three coupled loops) | "before this would take us one to two months and now... in days" [12:11] | AFFIRM/strong-evidence (spine/Platform) × build=partial | spine / Platform Loop | promote |
| V | **Framework consolidation is useful but must stay replaceable — unify the EVIDENCE MODEL, not the vendor dependency** | LangGraph/LangSmith replacing fragmented custom tools is directionally right, but OMNI must not make one vendor the canonical owner of clinical evidence / release authority / model lineage / production truth. OMNI owns the portable contracts + evidence + control model; frameworks implement them. The genuinely important architecture is NOT LangGraph/LangSmith. Direct `GRD-033` (rail-agnostic, semantics-stable) | GRD-033 · thesis §B · Platform Loop · §C build-vs-buy | "unified data sets annotation tracing evaluation in one system" [7:07] | AFFIRM (GRD-033) × build=n/a | architecture / guardrail | promote (rail) / reject (vendor-as-authority) |
| W | **A clinician edit is evidence that the output CHANGED, not yet evidence of WHY — needs an edit-intent taxonomy before it becomes learning** | An edit may be `clinical_fact_correction / source_attribution_correction / clinical_assessment_change / plan_change / documentation_style_preference / template_requirement / coding_or_compliance_edit / privacy_redaction / unclassified`. These meanings must not collapse into undifferentiated training data | Care · Platform Loop (learning signal) · Knowledge Reservoirs | "if a clinician is constantly making the same edits... learn their style" [15:32] | AFFIRM (learning) × build=absent | learning | promote (edit-taxonomy = investigate-lane) |
| X | **Personalize expression; NEVER personalize clinical truth by imitation** | Style adaptation must be separated from diagnosis / evidence / medication / dosage / plan / coding / risk-posture. Different learning paths: style preference (clinician/operator scope, easy rollback) · documentation policy (operator/rule-owner approval) · **clinical correction → becomes a defect/eval case, not a personalized preference** · clinical practice preference (specialty/org/evidence/governance review). Affirms `D0OL-GRD-007` personalization-not-universal | Care · Platform Loop · Recommendation Integrity Firewall | "learn their style to automatically apply this to all future notes" [15:34] | PARTIAL (product/runtime) × build=absent | product / runtime / guardrail | promote with boundaries / reject imitation-of-clinical-truth |
| Y | **Learning from care data must preserve principal / operator / purpose boundaries + carry lineage — deidentification is NOT the whole governance model** | Distinguish customer/operator permission vs patient rights vs original care purpose vs secondary learning purpose vs deidentification status vs model-improvement scope vs cross-operator use vs retention vs revocation vs whether improvements expose one operator's practices to another. Learning artifact needs source-population / transformation / deid-method / permitted-purpose / trained-versions / downstream-deployments. **The right to process care data for one workflow is not automatically the right to turn every trace into shared model memory** | Care · Federation / operators · D7/consent · §B (model lineage) · Accountability | "data rights that we've received explicitly... deidentify it" [2:56] | PARTIAL (federation/consent) × build=absent | federation / governance | promote |
| Z | **Scale compounds signal AND bias together; a data flywheel ≠ a care flywheel** | Deidentified volume can stay biased toward adopting systems / high-adoption specialties / frequent editors / usable-audio encounters / English workflows / particular populations. 100M conversations can amplify common practice, bias, coding habits, omissions, commercial incentives. The loop is a care-quality network effect ONLY when evidence shows accumulated data improves protected outcomes through clinical adoption→action→outcome | Care · §B (representativeness) · Knowledge Reservoirs · REV-184 (world-model honesty) | "unparalleled data network effects" [2:47] | PARTIAL (measurement) × build=absent | evaluation / guardrail | promote (require representativeness+outcome proof) |
| AA | **One assistant across before/during/after the visit = strong SURFACE pattern (session/surface continuity), not one unbounded runtime or context window** | A persistent assistant preserving patient identity / encounter context / pending questions / doc state / unresolved tasks aligns with OMNI's longitudinal posture — but the relationship is an **agent session / surface continuity**, and **authority must be recomputed at every consequential step**, not carried by one all-powerful runtime | Agent Runtime & Harness (map-depth) · Care · UX surfaces | "build a unified agent that persists across the workflows" [13:25] | AFFIRM (product) × build=absent | product / Agent Runtime | promote |
| BB | **A unified UX does NOT justify a unified authority envelope — one face, many typed responsibility passports** | Retrieval / documentation / clinical-decision-support / ordering differ enormously; one interface may coordinate them but one permission set must not cover them. Runtime resolves `actor + patient + task + purpose + care-state + operator + consequence → admissible capability → context packet → tools → authority ceiling → required review + proof`. Validates the Agent Runtime model AND its hard boundary: **unified at the experience layer, decomposed at the responsibility layer** | Agent Runtime & Harness · RBAC/Federation · capability_envelope ≠ delegated_authority_envelope ≠ capability_contract | "composable capabilities... editing your note or placing a medication or an MRI" [13:46] | AFFIRM (capability-topology) × build=partial (`requireCapability`) | spine | promote |
| CC | **Tool SELECTION is not enough — tool admissibility + action semantics matter** | Before selection: is the tool allowed, does the actor have authority, are patient+purpose in scope, is context current, is the tool healthy, does the consequence require confirmation. After selection: verify arguments / affected object / side effects / idempotency / result / whether the intended state change occurred. A medication-order tool ≠ a literature-search tool. **Correct tool choice without correct authority + arguments is still an unsafe action** | Agent Runtime · OFC · RBAC · MCP visible≠authorized | "is the agent picking the right tool" [16:34] | INCOMPLETE→sharpen (Agent Runtime) × build=absent | Agent Runtime / guardrail | promote (sharpen tool-selection-as-sole-eval) |
| DD | **Clinical decision support requires evidence AUTHORITY, not merely retrieval** | "Search validated medical evidence" conceals: which sources qualify, publication/update date, jurisdiction, specialty, evidence level, retraction status, guideline authority, population applicability, conflicts, sponsorship, local policy. Safe path: `question → retrieval → source-authority+applicability assessment → synthesis candidate → patient-specific comparison → clinician judgment+adoption`. **Retrieving literature is an evidence operation; applying it to THIS patient is a clinical-authority operation** — and CDS must never directly commit an order | Care · Knowledge Reservoirs (evidence) · REV-184 · candidate≠commit · Recommendation Integrity Firewall | "searching against literature... from validated medical evidence" [14:09] | PARTIAL (evidence-authority) × build=absent | Care / evidence | promote |
| EE | **Ambient "air conditioning" is a strong product metaphor + an incomplete governance model — assistance should be low-friction, not invisible in identity/sensing/consequence; the right to observe ≠ the right to interrupt** | Ambient AI risks: continuous observation, unclear activation, hidden context use, invisible inference, unwanted retention, false reassurance, uninspectable interruptions. Must make clear when active / what it senses / what it retains / which patient+encounter / when it generates candidates / when it interrupts / how to pause+correct. Governed interruption policy (severity/confidence/novelty/time-sensitivity/reversibility/workflow-phase/cognitive-load/already-known/interruption-cost) with classes from immediate-safety-interrupt to no-interruption-retained-evidence. **Ambient operation is not permission for ambient memory** | Care · Agent Runtime · UX surfaces · D7/consent | "we try to be like air conditioning... on in the background" [14:38] | PARTIAL (product/runtime) × build=absent | product / runtime | promote with visibility |
| FF | **Clinician agency must mean more than the final click; patient agency is a PARALLEL, non-fungible authority plane** | Meaningful agency needs visible candidate status / source+context access / alternatives / uncertainty / editable output / refusal / escalation / undo / preserved record of who committed — not a button beside a system that made disagreement impractical (automation bias). And the patient contributes symptoms/goals/preferences/consent/refusals/outcomes; a clinician-facing product cannot absorb patient commitments (recording consent, treatment acceptance/refusal, comms prefs, sensitive-info use) into clinician authority. **Clinician and patient agency are parallel, non-fungible authority planes** | Care · REV-184 (non-action-as-commit) · Patient surfaces · thesis §8 gates | "clinicians know that they're in control" [14:55] | AFFIRM + gap-restore (spine) × build=absent | spine | promote (restore patient-agency from OMNI) |
| GG | **Multi-step clinical agents require TRAJECTORY evaluation + separate quality / safety / boundary / authority dimensions — including "plausible but not authorized"** | The final answer cannot reveal unauthorized access, risky tool attempts, retries, prompt injection, or a right result reached by non-repeatable accident. Trajectory inspects context loaded / identity resolved / sources trusted / tools considered+selected / arguments / intermediate conclusions / ignored contradictions / escalation / authority checks. Evaluation profile spans clinical-quality, safety, **boundary** (refuses unsupported tasks, no cross-specialty/role, no answering without evidence, no silent purpose-broadening), **authority** (suggestion≠order, invokes required human/domain resolution, does not commit clinical truth, correct principal+credentials), tool behavior, interaction burden, equity/population, runtime resilience. Boundary tests must include clinically-sensible actions the current actor is NOT authorized to perform (nurse requesting prescriber action, out-of-relationship access, stale-encounter order, cross-operator data leakage). **For agents, the path to the answer is part of the safety case; a clinically correct answer from an authority-breaking agent is a failed agent** | Agent Runtime & Harness · Build-OS/E&V · security lane · REV-184 · candidate≠commit | "the complexity went up a magnitude... not now using singlestep models" [16:01] | PARTIAL (Agent Runtime/E&V) × build=absent | Agent Runtime / E&V | promote |
| HH | **Technical improvement, clinician satisfaction, and patient outcome are SEPARATE horizons — "save lives" is an earned outcome claim** | Better judge scores / fewer edits / higher ratings ≠ proven care-outcome effect; a release may help care while creating unsustainable clinician burden. Distinguish model-quality / workflow / clinician-burden / documentation-quality / financial / patient-experience / safety-outcome / clinical-outcome. **A better note is not automatically better care (but bad documentation can still corrupt care downstream); clinical ambition may guide product direction, outcome proof must determine clinical claims** | Care (outcome evidence) · Accountability · REV-184 (world-model honesty) | "how might we actually save lives?... with all humility" [2:16] | AFFIRM (outcome-honesty) × build=absent | spine / guardrail | promote |

### Net-new primitive dispositions (EVERY Knox candidate dispositioned; Knox: "Do not create an 'Abridge domain' or a separate ambient-note ontology")
Knox listed ~38 candidate names in "Doctrine / primitive pressure" and himself said most should extend existing objects. Dedup vs cumulative baseline (`EVRUN-000001 §2A` + `000002/3/5/6` + waves 4/5 + batch 282–286 + `EVRUN-000004 §0.5` retired terms + `D0OL-GRD-001..008`):
- `clinical_source_conversation` → **EXISTS-AS** `source_event` / clinical source carrier (A/B).
- `conversation_capture_receipt` → **EXISTS-AS** capture receipt + consent/recording context under D7/audit (B/E).
- `participant_attribution_record` → **EXISTS-AS** Observation/Clinical-Memory speaker-attribution field family (C/D).
- `speaker_uncertainty_state` → **EXISTS-AS** uncertainty on the source-attributed claim / observation (D) — **INVESTIGATE-lane** as a care-safety-typed uncertainty (route Care/Observation watch; do NOT mint).
- `clinical_note_candidate` → **EXISTS-AS** `assertion_candidate` / documentation draft (B/C).
- `note_source_lineage` / `downstream_projection_lineage` → **EXISTS-AS** document/evidence custody + replayable-proof lineage (B/E).
- `note_adoption_event` → **EXISTS-AS** provider-adoption / clinical-commitment event (C/E).
- `clinical_document_commit` → **EXISTS-AS** clinical-assertion commit + EHR-write receipt (E).
- `documentation_integrity_firewall` → **EXISTS-AS** the **Recommendation Integrity Firewall** (already named; F) — clinical-documentation instance, not a new object.
- `clinical_failure_taxonomy` / `clinical_eval_pillar` → **EXISTS-AS** Build-OS/E&V failure-class + validation-contract family (H).
- `clinical_eval_contract` / `clinical_eval_confidence_contract` → **EXISTS-AS** `validation_contract` + wave-5 `eval_confidence_contract` (O).
- `annotation_guide` / `annotator_expertise_profile` / `annotation_quality_receipt` / `annotation_disagreement_case` → **EXISTS-AS** Build-OS/E&V annotation + operational-finding + expertise-profile family (J/K).
- `judge_generation_recipe` / `judge_calibration_record` → **EXISTS-AS** `change_candidate` / validation-contract artifacts under candidate≠commit (L).
- `judge_independence_profile` → **EXISTS-AS** assurance-metadata on the validation contract (M) — **INVESTIGATE-lane** (correlated-evaluator-failure profile; route Build-OS/E&V + security watch; do NOT mint).
- `reference_free_judge` / `reference_based_judge` → **EXISTS-AS** evaluator subtypes under the validation contract (N).
- `clinical_release_exposure_state` / `silent_release_profile` → **EXISTS-AS** the deployment/rollout/activation/exposure/adoption state family + wave-6 `deployment_activation_state` INVESTIGATE-lane (Q).
- `healthcare_experiment_contract` → **EXISTS-AS** release-candidate + consequence-envelope (Reactor) + REV-184 (R) — **INVESTIGATE-lane** (declared consequence-envelope for live care experiments; route Platform Loop + Reactor watch; do NOT mint).
- `clinician_edit_signal` / `clinical_correction_signal` → **EXISTS-AS** operational-finding / learning-signal (W).
- `edit_intent_classification` → **EXISTS-AS** typed learning-signal (W) — **INVESTIGATE-lane** (edit-intent taxonomy before edits become learning; route Care + Platform learning watch; do NOT mint).
- `style_preference_memory` → **EXISTS-AS** personalization memory under `D0OL-GRD-007` boundaries (X).
- `clinical_agent_trajectory_eval` / `clinical_authority_eval` → **EXISTS-AS** validation-contract + Agent-Runtime evaluation (GG) — **INVESTIGATE-lane** (trajectory + authority-behavior evaluation for multi-step clinical agents; route Agent Runtime + E&V watch; do NOT mint).
- `ambient_activation_state` / `interrupt_rights_profile` → **EXISTS-AS** Observation/consent sensing-state + Agent-Runtime/UX interruption policy (EE) — **INVESTIGATE-lane** (ambient sensing + interrupt-rights governance; route Care + Agent Runtime + UX watch; do NOT mint).
- `clinical_agent_session` / `visit_continuity_context` → **EXISTS-AS** `agent_runtime_profile` session + `context_packet` continuity (AA).
- `clinical_tool_admissibility` → **EXISTS-AS** capability admissibility + RBAC per-call authorization (CC).
- `clinical_action_receipt` → **EXISTS-AS** `authorized_action` + execution/EHR-write proof under OFC (G/E).
- **net-new DOMAIN objects: 0** (do NOT create an "Abridge domain" or ambient-note ontology; every candidate extends existing source-event / extraction-run / source-attributed-claim / observation / assertion-candidate / clinical-assertion / document-custody / Governed-Resolution / authorized-action / capability-envelope / agent-runtime-profile / validation-contract / release-candidate / deployment-rollout / operational-finding / response-case / replayable-proof). **INVESTIGATE-lane sharpenings to route (not mint): 6** (speaker-uncertainty-as-clinical-uncertainty · judge-independence profile · healthcare-experiment consequence-envelope · edit-intent taxonomy · clinical-agent trajectory+authority eval · ambient-sensing+interrupt-rights governance). Retired terms (`EVRUN-000004 §0.5`) + `D0OL-GRD-001..008` not re-minted.

### Counterweights / what-NOT-to-import (EVERY Knox caution PRESERVED — none inverted)
1. **Do NOT make the conversation the center of all healthcare truth** — it is a major signal + workflow wedge, not the whole patient/world/record/care process. [kept — A]
2. **Do NOT treat notes as transcription products** — clinical notes are governed interpretations + commitments; raw STT accuracy is necessary but insufficient. [kept — B]
3. **Do NOT let one generated note directly become diagnosis, order, code, claim, and patient instruction** — those are distinct projections + commits. [kept — E]
4. **Do NOT equate clinician review with guaranteed detection** — clinicians are busy, may trust the system, can miss subtle errors; the platform carries its own evidence + controls. [kept — FF/T]
5. **Do NOT let billing optimization influence clinical fact generation** — coding may consume the attested record; it must not rewrite the clinical story to improve reimbursement. [kept — F]
6. **Do NOT treat every human label as gold standard** — judgment varies, can be wrong / inattentive / biased / institution-specific. [kept — K]
7. **Do NOT allow automated judge generation to become automated governance** — the generated judge needs validation, versioning, monitoring, retirement. [kept — L]
8. **Do NOT use one judge for every specialty and encounter type** — clinical evaluation must match the lane + population. [kept — N/P]
9. **Do NOT use LLM-judge agreement as the only safety evidence** — use deterministic checks, expert review, statistical evidence, adversarial cases, production outcomes. [kept — M/O]
10. **Do NOT call a release "silent" and infer it is harmless** — a silent release may still alter visible notes, clinical decisions, coding, or patient state. [kept — Q]
11. **Do NOT infer patient authorization from health-system participation** — operator approval, clinician participation, patient rights, PI/QI/research are separate concerns. [kept — R/Y]
12. **Do NOT learn indiscriminately from clinician edits** — classify style / correction / policy / coding / clinical-decision changes separately. [kept — W]
13. **Do NOT let one clinician's repeated behavior silently become organization-wide medicine** — preference, local policy, and clinical standard are different. [kept — X]
14. **Do NOT treat deidentification as the entire learning-governance model** — purpose, rights, population, provenance, operator boundaries, downstream model use remain relevant. [kept — Y]
15. **Do NOT equate large conversation volume with representative evidence** — volume may magnify institutional + population bias. [kept — Z]
16. **Do NOT let the unified assistant accumulate a universal tool + permission union** — one UX is compatible with many scoped capability passports. [kept — BB]
17. **Do NOT expose every patient source to every capability merely because the assistant persists across the visit** — context must remain purpose-scoped + minimum-necessary. [kept — AA/EE]
18. **Do NOT let a clinical decision-support capability directly commit an order** — recommendation and command remain distinct. [kept — DD/G]
19. **Do NOT treat ambient operation as permission for ambient memory** — sensing, retention, learning, reuse need separate governance. [kept — EE]
20. **Do NOT treat clinician agency as ceremonial HITL** — agency requires inspectability, correction, alternatives, refusal, usable control. [kept — FF]
21. **Do NOT claim quality or lifesaving impact from model scores, note edits, or adoption alone** — clinical impact requires clinical outcome evidence. [kept — HH]
22. **Do NOT make LangGraph or LangSmith the architectural authority** — they are implementation rails; OMNI retains the portable contracts, evidence, control model. [kept — V]

### Care / healthcare implications (NOT swept by 0-net-new)
- **This is the highest-density care source in the wave so far.** 0 net-new domain objects does NOT mean 0 care consequence: the source gives concrete production shape to a large fraction of the Care Operating Model's spine (conversation-as-source, note-as-governed-transformation, epistemic/authority-plane separation, speaker-attribution safety, note→projection decomposition, documentation-integrity firewall, medication/order executable-state ladder).
- **F + G + DD are the load-bearing care corrections:** reimbursement must never author the clinical record; a plausible sentence must never become an order; retrieved literature must never auto-become a patient-specific committed recommendation. All are candidate≠commit / AI-never-care-authority instances.
- **D (speaker attribution) is a genuine build gap:** doctrine AFFIRM (OMNI already separates source-attributed claim ≠ observation ≠ assertion candidate ≠ adopted assertion) but build=absent — no diarization-confidence / unresolved-identity / correction-history representation exists yet.
- **FF restores patient agency Knox flagged as a source gap:** the talk is clinician-centric; OMNI must keep clinician-agency and patient-agency as parallel, non-fungible planes (consent, refusal, sensitive-info use).
- **R/S/T:** care-affecting releases need a declared consequence envelope + containment/recall + output→outcome monitoring — the Platform↔Care↔Accountability cross-loop notification OMNI already models but has not built.
- **Operator note (Nick, Review 002):** "we're already getting our asses beat on this stuff… we are BEHIND." Treat as urgency signal for the Care + Platform-Loop + Agent-Runtime build sequence, NOT as license to relax any gate above (the whole keeper is that velocity comes from proof infrastructure, not from lowering the bar).

### Candidate guardrails → `08` open-review (gated `user_knox_required`; dedup noted; PROPOSE-ONLY)
- **G-cand-1:** *The patient-clinician conversation is a privileged care source, not the sovereign care record* (care-truth-center reject; dedup vs one-owner-per-fact).
- **G-cand-2:** *A clinical note is a governed transformation into clinician-attested longitudinal evidence, not a summary; one conversation may produce many downstream records, each earning its own authority* (dedup vs candidate≠commit / projection≠authority).
- **G-cand-3:** *The record may support reimbursement; reimbursement must not author the record* (documentation-integrity firewall; dedup vs Recommendation Integrity Firewall).
- **G-cand-4:** *A clinically plausible sentence is not an authorized clinical command; linguistic proximity must never become an order* (dedup vs candidate≠commit / D0OL-GRD-008 invocation≠delegation).
- **G-cand-5:** *When speaker identity changes meaning, speaker uncertainty is clinical uncertainty* (care-safety primitive).
- **G-cand-6:** *High-stakes quality is a vector of protected behaviors, not an average score; priority = frequency + consequence + detectability + propagation + reversibility* (dedup vs REV-184 blast-radius).
- **G-cand-7:** *Automated judge construction accelerates measurement; it does not automate trust in the measure — a model grading its close relative is not independent assurance* (dedup vs candidate≠commit / D0OL-GRD-006).
- **G-cand-8:** *"Silent" describes visibility, not absence of consequence; every production experiment needs a declared consequence envelope, not merely a cohort percentage* (Platform-Loop exposure ladder).
- **G-cand-9:** *An edit is evidence the output changed, not yet evidence why; personalize expression, never clinical truth by imitation* (dedup vs D0OL-GRD-007).
- **G-cand-10:** *One clinical assistant may have one face and many separately-governed responsibility passports; correct tool selection without correct authority + arguments is still unsafe* (dedup vs 286 one-face-many-passports / MCP visible≠authorized).
- **G-cand-11:** *Runtime monitoring must follow an output through adoption, commitment, action, receipt, and outcome; a better note is not automatically better care* (output→outcome ladder).
- **G-cand-12:** *Ambient assistance must be low-friction, not invisible in identity/sensing/consequence; the right to observe does not include the right to interrupt or to retain* (ambient-memory governance).

### Reread flags + one-line hard read
- **Reread flags:** the wave's **care-spine anchor** source — pairs tightly with `EVSRC-2026-000143` (Peter Lee / Stanford: ambient documentation, upcoding, agent orchestration, healthcare economics — the note→bill incentive problem originates there), `000147` (Stanford clinician AI literacy), `000216` (self-improving agent loop / shadow production / evidence-earned promotion — the deeper Engine mechanism), `000217` (unified agent-evaluation infra), `000245` (runtime monitoring / unknown-unknown / safety intervention), `000271` (eval-driven development / statistical confidence / production proof). Cross-references the current **Care Operating Model**, **Platform Loop**, **Agent Runtime & Harness** (map-depth only — do NOT build pre-spine), **REV-184 Governed Resolution**, **Recommendation Integrity Firewall**, and Clinical-Memory / Observation / D7 / OFC / authorization contracts. Within wave-6, sits beside the enterprise-agent-platform cluster (284/285/286/289) but is the one carrying **clinical** authority + eval weight.
- **One-line hard read:** `full_semantic`, 5/5, **0 net-new domain objects + 6 investigate-lane sharpenings** — the strongest real-world *production receipt* for OMNI's core physics in healthcare: it independently re-derives conversation≠truth, note≠summary, generated≠committed, eval≠release-authority, offline≠production-safety, one-surface≠one-authority-envelope, edits≠training-truth, and speed-from-proof-infrastructure — so OMNI adopts the **mechanism** and **raises the bar** (authority + trajectory + population + exposure + outcome dimensions Abridge does not name); the keeper is **clinical AI moves fast safely only when every transformation — from conversation to record to action to outcome — carries its source, authority, evaluation, exposure, and proof with it.**

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Care Operating Model (conversation-source / note-as-transformation / epistemic-authority planes / speaker-attribution / note→projection / documentation-integrity firewall / medication-order executable-state) · Platform Loop (E&V + Release Ops + Runtime Ops; exposure ladder; consequence envelope; output→outcome monitoring) · Build-OS / E&V (failure taxonomy · rule-owner eval contract · annotation quality · APO judge-gen · judge independence · reference-free+based · eval-confidence contract · stratification) · Agent Runtime & Harness [map-depth] (session continuity · one-face-many-passports · tool admissibility · trajectory+authority eval) · REV-184 / Reactor (blast-radius · consequence envelope · world-model honesty) · Recommendation Integrity Firewall · Accountability Loop (recall/containment/consequence) · Federation/consent (learning boundaries) · §B (representativeness · model lineage) · GRD-033 (unify evidence model, not vendor) · Patient surfaces (patient agency)` · promotion: `watch` (0 net-new domain objects; 6 investigate-lane sharpenings routed; ~30 clusters + 22 counterweights preserved + 12 guardrail candidates → `08`; §C untouched/PAUSED)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold; `EVRUN-2026-000011`).
- `2026-07-19` — Opus §3 Review 003 formal extraction (formalized Knox Review 001, `full_semantic` 5/5 — the wave's care-spine anchor source: Abridge / Janie Lee clinical-AI production case study). §0/§0.1 verified filled from Knox metadata (identity_confidence `inferred`, no screenshot). **34 clusters (A–HH), 0 net-new domain objects, 6 investigate-lane sharpenings routed (not minted), 22 counterweights preserved (none inverted), 12 guardrail candidates → `08`.** PROPOSE-ONLY (`GRD-036`); no contract/thesis/registry/anchor-ledger/00_index edit (parent folds centrally); §C untouched (PAUSED). §4 pointers filled. Firmed-slug SUGGESTION: `abridge-clinical-ai-eval-release-stack`.
- `2026-07-19` — **re-process note:** a prior attempt paired this source with another and exhausted resources before writing the body; the status line had been flipped to `analyzed` while §3 Review 003 was still EMPTY. This pass fills the empty §3 Review 003 body + §4 pointers; status line left as-is.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

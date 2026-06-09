# EVSRC-2026-000079 — Security & AI Governance: Reducing Risks in AI Systems

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: AI risk/governance); Knox read in §3 Review 001 (verified: governance/security controls taxonomy — operational complement to Anthropic 070). Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000079`  ·  filename: `EVSRC-2026-000079_ibm-jeff-crume-security-and-ai-governance.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=4QXtObc61Lw`
- source_title: `Security & AI Governance: Reducing Risks in AI Systems`
- channel_or_org: `IBM Technology` (1.71M subs)  ·  series: `IBM explainer` (Guardium cert promo)  ·  published_at: `2025-09-03`  ·  views_at_capture: `68,342`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `explainer / lecture`  ·  source_reliability_context: `academic / vendor-practitioner (IBM security expert — directly relevant to §A trust/security/governance)`  ·  topic_tags_light: `[ai_governance, ai_security, responsible_ai, cro_ciso_roles, risk_management_compliance, trustworthy_ai, vulnerabilities_ethical_lapses]`  ·  note: `IBM-channel source (5th of corpus); AI-generated summary present; cert-promo video`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Jeff Crume` · role_in_source: `presenter` · affiliation_at_publication: `IBM (security expert / Distinguished Engineer — IBM Technology security host)` · speaker_type: `vendor-practitioner / educator (security/governance)` · authority_context: `**HIGH relevance on §A (trust/security/governance): how to REDUCE AI RISKS while ensuring trust + reliability** — the critical roles of **security and AI governance** in protecting systems from **vulnerabilities and ethical lapses**; how to **safeguard AI systems with best practices in governance, compliance, and risk management**; the complementary roles of the **Chief Risk Officer and Chief Information Security Officer.** Security/governance lens — directly maps to OMNI's governed-AI posture` · identity_confidence: `high_from_screenshot`
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `—` (solo explainer)  ·  event_context: `IBM Technology YouTube (Guardium Data Protection cert promo)`  ·  perspective / conflict notes: `IBM security educational content w/ Guardium framing. **HIGH OMNI relevance: AI governance + security + risk-management + compliance + CRO/CISO role separation map directly to OMNI §A Trust/Authority/Permeability axis, governed-AI posture, Build OS runtime-proof/security, and AI-security guardrails (prompt injection, tool security, RBAC). One of the more directly-applicable IBM sources for OMNI's enterprise security posture. Pairs with Anthropic 070 (trust/safety).** Recent (2025-09). Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): IBM security expert / educational = reliable governance/security reference; even so, claims route through evidence → interpretation → gated promotion. Strong §A + AI-security input.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = AI governance/risk transcript; §3 = matching controls-taxonomy read) · [x] EVRUN needed? (yes — full_semantic; **§A governance/security operational checklist** — pair w/ 070) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
AI is already doing some great
0:02
things and the best is yet to come.
0:04
But with this greatness comes risk.
0:08
Risk that the system will do the wrong thing,
0:11
give incorrect answers and expose the organization
0:14
to reputational and business damage.
0:16
How can you reduce AI risk? Well,
0:19
with a strong governance and security capability. Unfortunately,
0:22
according to the 2025
0:25
IBM Cost of a Data Breach Report,
0:27
63% of organizations
0:31
had no governance policy in place.
0:33
These two areas, governance and security,
0:36
have some overlap, but mostly complement each other in important ways.
0:40
In this video, we'll take a look at what these are
0:43
and how you can leverage them to reduce AI risk.
0:47
Okay, let's take a look at the problem space.
0:50
Get that out of the way.
0:52
First of all we're going to look at compliance issues
0:54
So, in theory you should have a governance policy for AI.
0:58
And you should have a security policy for AI. Now,
1:00
who are the primary stakeholders that are really involved with this? Well,
1:04
when it comes to the governance part,
1:06
it's probably going to be the chief risk officer.
1:09
That's not the only person that's going to care,
1:11
but they may be the primary person that cares.
1:14
Versus from a security standpoint,
1:16
it's more likely to be the chief information security officer.
1:19
Again, both of these roles could care about this,
1:23
but that's who might be the lead in the primary in these.
1:26
Next thing we're gonna take a look
1:27
at in terms of what the AI does.
1:30
What are our particular concerns. From a governance standpoint,
1:33
we want to make sure that the thing is responsible.
1:36
That it's not doing things that put us in a bad light,
1:40
or put our users in a bad light or in a bad situation.
1:44
We wanna make sure that our AI is explainable.
1:46
That it doesn't just make up stuff.
1:48
Ah, that it the stuff it tells is, in fact, reliable.
1:52
And a big part of that involves documentation and source attribution.
1:56
We wanna make sure that we can trace all of this stuff back
1:59
and, therefore, make it more trustworthy.
2:02
Now, from a security standpoint,
2:04
we're looking at vulnerabilities
2:06
that might exist within the AI system itself.
2:10
Where someone's trying to attack the system.
2:12
We also are gonna be concerned about things like shadow
2:15
AI, that someone created some
2:17
AI instance without approval, without authorization.
2:21
Yet this thing is out there running,
2:22
and we might wanna make sure that it's locked down
2:24
because it might be a source of data leaks. Now,
2:27
in terms of the cause
2:29
of some of the issues that we might be trying to
2:32
to guard against with a governance policy and a security policy,
2:36
I would say in general, and this is a big generalization,
2:39
because there's definitely going to be exceptions to this.
2:41
But think of it this way, that the cause in
2:44
that we're really guarding against in a governance case,
2:47
is really self-inflicted wounds.
2:49
This is where we used a bad model.
2:51
We pulled it from a bad source.
2:53
The model wasn't trained properly.
2:55
The ingredients that went into the cake, if
2:57
as it were, were not the right ones.
2:59
They weren't pure.
3:01
Ahm. And the result of this is probably unintentional.
3:05
So, we we did all of this.
3:06
We didn't mean to make a big mess, but we did.
3:09
So we're trying to guard against that.
3:11
We're looking at things like misalignments
3:13
and policy violations and ethical lapses.
3:16
We wanna make sure those don't occur.
3:18
And that's the realm of governance.
3:20
Now, on the security side, what are we gonna gonna be caring about? Well,
3:24
in this case, the damage
3:26
and the cause of this is more done externally or by others.
3:30
So, self-inflicted versus others inflicted.
3:34
And in this case, it could be internal,
3:37
bad insiders who are doing something that they really shouldn't be doing.
3:41
Or it could be an external person
3:43
who's attacking the system, either one of those.
3:46
But in these cases, it's more intentional.
3:49
Someone is trying to break the system.
3:51
That's what the security policy is really concerned with.
3:54
Now let's take a look at the damage
3:56
that can occur in these cases. So,
3:58
if first of all, from a governance standpoint,
4:03
we're looking at things like PAP, hate, abuse and profanity.
4:07
We wanna make sure that our system doesn't say
4:09
really outrageous things that insult our users.
4:12
We wanna make sure that it is fair. It's unbiased.
4:16
It doesn't bias toward or against any particular information or or population.
4:21
We want to make sure that the model doesn't drift.
4:24
It started off true, but now it's getting a little more untrue as it starts
4:28
learning more and more things.
4:29
So we want to make sure that it's still solid.
4:31
We're looking at issues like intellectual property.
4:34
Is someone able to steal our intellectual property through this?
4:38
And also important is
4:40
is our model trained on intellectual property
4:43
that we didn't actually have rights to use?
4:45
In other words, it might be copyrighted material.
4:47
And then, when our model learned on that, it starts using that.
4:51
And now we're subject to a lawsuit.
4:53
That would be a bad thing.
4:54
Hallucinations.
4:55
We wanna make sure that it's not just making up answers,
4:58
that they need to be grounded in truth
5:00
and the reputation of our organization.
5:03
We wanna make sure that the AI, which is representing us,
5:07
is doing it in a way that we would approve of. Now,
5:10
on the security side, what are we looking at here? Well,
5:13
you've heard me if you've seen videos,
5:14
I talk about this thing called the CIA triad,
5:17
where we're looking at confidentiality, integrity and availability.
5:21
Those are the three things that we're about in every security case.
5:24
Those are the things that we're trying to make sure we get right.
5:27
So confidentiality, we wanna make sure that, for instance, the system doesn't exfiltrate.
5:32
It doesn't send sensitive information outside of our system
5:35
so that other people can access it that aren't approved to do that.
5:39
We wanna make sure that the system,
5:40
from an integrity standpoint, cannot be manipulated.
5:44
That someone can't figure out how to make the system
5:47
do other things that we don't intend it to do, that it gives bad answers.
5:51
The data has been poisoned. Things like that.
5:53
And then finally, we wanna make sure that it's available,
5:57
that someone can't do a denial of service attack
5:59
against the system and, therefore, make it
6:01
not available for the people who need it.
6:04
All of these things ultimately
6:06
then feed into this idea of risk.
6:10
Different kinds of risk and different kinds of policies related.
6:14
But it's all about AI risk. So,
6:16
now we've taken a look at those risks.
6:18
Let's take a look at what we need to do about them.
6:21
Well, one of the things is we're gonna need controls in place.
6:25
Controls are the things that let us control what's happening with the system. So,
6:30
some of the things we'll look at on the governance side
6:33
is we wanna have a set of rules that we have spelled out.
6:36
We wanna make sure that we're following them,
6:38
that we've put those into policies that are well understood.
6:41
And we're finding a lot of organizations
6:43
don't do that and have not had that.
6:46
It's pretty hard to know if you're succeeding
6:47
if you've never even defined where the finish line exists.
6:50
We need accountability structures.
6:52
Who's responsible for this and who's responsible for which parts of it?
6:57
On the security side, we're mo looking at different things.
7:00
We're trying to do prevention,
7:02
detection and response.
7:04
That is, I wanna be able to make sure
7:06
that I to the extent possible.
7:09
The system is not vulnerable to begin with,
7:11
and then be able to find out when it is,
7:14
when it's under attack and then what we're supposed to do about it.
7:17
So prevention detection and response.
7:19
Now, with our models, what specifically do
7:22
we need to do from a governance standpoint.
7:25
Well, we wanna make sure that they're trained properly.
7:28
We need to know what the sources are
7:30
so that that information is what we intend it to be.
7:34
If you use bad sources, you get bad data
7:37
and bad responses out of your AI.
7:40
We need to know the lineage of the model.
7:43
Most organizations are not going to create their own models. But if they do,
7:47
they need to be able to know where did the ingredients come from?
7:51
If I go to an open-source
7:53
model repository, where did I get it?
7:55
Do I have the latest
7:57
and greatest and authentic version, or do I have some illicit
8:01
copy that somebody's made, some bogus version of it.
8:04
And how many ah who's touched it along the way?
8:07
That's the lineage. We wanna be able to see all of that.
8:10
We need an acceptable use policy.
8:12
What are the things that we're okay with our AI doing
8:15
and what are we not okay with it doing?
8:18
And how do we want employees to understand their use of that?
8:21
And as I mentioned before, IP risk. If
8:24
we're gonna be creating models,
8:25
or even if we're gonna take a model and train it with our information,
8:28
we need to make sure that it's, in fact,
8:30
our information that we have rights to.
8:32
So, those are all things that we would look
8:35
at in terms of model
8:37
and governance of those. On the security side, well,
8:40
again, we're thinking about an attacker,
8:43
something other than us that is coming in.
8:45
And what is the number one attack type that we're concerned with,
8:48
especially with generative AI?
8:49
It's prompt injections.
8:51
These are things where people are basically socially engineering our
8:54
AI, giving it instructions to override its original instructions,
8:59
and then having it do something that we didn't intend it to do.
9:02
So I need to have protections against that.
9:04
I need to have protections against unauthorized access.
9:07
These are gonna be bigger issues
9:10
as we move toward agentic AI, as well.
9:12
I wanna make sure that that agent that has autonomy
9:15
isn't gonna just go off and do something really crazy,
9:18
because we're giving it a lot of power to do certain things.
9:22
So, unauthorized access. We don't wanna allow that.
9:25
We need to do penetration testing of these models. We bring them in.
9:28
We need to find out if they're vulnerable
9:31
to these types of attacks or not.
9:33
And many, many more. Prompt injections.
9:35
There's more of those than you can dream up.
9:38
So, we need tools that are gonna to be able to do
9:40
automated prompt injection testing.
9:42
We're also looking at a thing we call posture management
9:45
to make sure that the system hasn't been misconfigured in a way
9:48
that allows exposure of information that is sensitive to us.
9:53
So, those are some of the things that we're looking at from a governance perspective
9:57
and from a security perspective. Okay.
9:59
So, now we've taken a look at the risks
10:02
and some of the controls and things like that that we need in place.
10:05
Now, let's take a look at a solution
10:07
framework that implements all of that.
10:09
So, instead of thinking of governance
10:11
and security for AI
10:13
as separate kind of interlinked
10:15
and overlacking, overlapping rings,
10:18
in fact, we could come up with a more integrated solution where we have
10:22
layers of protection against the different types of threats that we're trying to deal with.
10:26
So, for instance, at the center is our
10:28
AI that we're trying to protect. Then, a ring around that of protection.
10:33
That's our governance layer.
10:35
And in this case, I'm gonna do discovery
10:38
and management of AI use cases.
10:41
Those are the things that if I don't define what those are,
10:44
I won't know if I've achieved the outcomes I intend or not. So,
10:47
I wanna be able da to define what those are
10:51
right up front. I need to be able to do model management.
10:54
So, I've got a whole bunch of models.
10:56
How do I make sure that they're doing what I intend?
10:59
How do I know where they came from?
11:00
All of those kinds of things. I need to do risk management.
11:04
I need to be able to figure out what the risks are.
11:07
Quantify them to the extent possible,
11:10
and at least expose what those are.
11:12
So we can map those and try to address those as we recognize them.
11:16
I need to be able to monitor
11:18
and check the performance of this system.
11:22
It won't do any good if it's taking a month
11:24
in order to get an answer back. So,
11:26
that's also a part of these concerns.
11:29
I'm also looking at compliance.
11:31
I may have be in an industry
11:34
where I need to be able to do certain things
11:37
that will get me in trouble.
11:38
I need to avoid other things
11:40
I need to do in order to perform due diligence.
11:43
So I need to make sure that the compliance of the AI system
11:46
is in line with what the expectations are. And
11:48
ultimately lifecycle management,
11:51
because this thing isn't just a set it and forget it.
11:54
These things have lifecycles.
11:56
They begin, they move through certain levels of maturity
11:59
and in certain parts of it need to go away
12:01
and other parts of it come on.
12:02
So I need to have this more holistic view
12:04
of what the system is. Now, around that layer,
12:08
we add the security protections that are necessary.
12:12
So, one of the things I wanna do here, I was talking about discovering
12:15
AI use cases.
12:17
How about we discover the AI models
12:19
that are out there in our environment, especially the shadow
12:22
AI that may be out there.
12:24
And once I've discovered it, I need to do this thing we call
12:28
AI security posture management.
12:30
That is a way to guard against misconfigurations,
12:33
to lock down and make sure that the security policy
12:36
for a particular system is being followed,
12:38
that if it's not supposed to have public facing data,
12:41
the public can't get to it, that there's strong access
12:44
controls, encryption and things like that that might need to be in place.
12:47
And we want to make sure that all of these instances of AI
12:50
that we just found are, in fact, complying with our security policy.
12:54
I need to test these models. Do pen testing
12:57
and other types of model scanning
13:00
to make sure that the models themselves have not been infected,
13:03
because if they've been infected, they might leak information out
13:07
or they might give us wrong information.
13:09
Another thing we have to look at
13:11
is maybe install something that I'll call an AI firewall, or an AI gateway
13:17
that implements guardrails,
13:19
that looks for exfiltration cases.
13:22
So this is something that you set up between the user and the AI.
13:26
You put it there and that it sees all the prompts that are coming in.
13:30
And it looks to see if they conform to policy or not.
13:33
If it looks like we're experiencing prompt injection, well,
13:36
then we can block it right there at the firewall.
13:38
If it looks like our system now has been tricked into leaking information,
13:43
we can look at the information on the way back out
13:45
and maybe redact it or block it entirely.
13:48
So we can test for these things in the model.
13:50
But then we also implement the protections in real time.
13:54
I'm also gonna look at a threat monitor.
13:56
I need to be able to understand
13:58
what things are happening to my system.
14:01
If somebody just did a bunch of stuff through this firewall
14:03
and now they're trying to violate different policies,
14:06
maybe someone should be aware of that.
14:08
And then, ultimately, I wanna be able to see all of this stuff.
14:11
I need some sort of dashboard that visualizes that for me.
14:15
That shows me, in priority,
14:18
what are the critical vulnerabilities that I have in my system?
14:21
Who's trying to hack me?
14:22
Am I in compliance from a security standpoint
14:25
against some of the things like the National Institute
14:28
of Standards Risk Management Framework, other things like that?
14:31
So, this now, if you put all of these things together, you have
14:35
what is really a much stronger solution than you would have
14:39
if this was only by itself.
14:41
So the way to think about this then
14:43
is if we have AI
14:45
and we add to it
14:47
governance plus security,
14:50
then if we do it right,
14:53
we lower risk
14:54
and that's ultimately what we're trying to do.



&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `Security & AI Governance: Reducing Risks in AI Systems`  ·  visible_channel: `IBM Technology` (1.71M subs)
- visible_url: `youtube.com/watch?v=4QXtObc61Lw`  ·  visible_published: `Sep 3, 2025`  ·  visible_views: `68,342`  ·  likes: `1.6K`
- visible_description: *"How do you reduce AI risks while ensuring trust and reliability? Jeff Crume explains the critical roles of security and AI governance in protecting systems from vulnerabilities and ethical lapses. Learn how to safeguard AI systems with best practices in governance, compliance, and risk management."* (plus Guardium Data Protection v12.x Administrator cert promo + code IBMTechYT20)
- ai_generated_summary (visible): *"This IBM video explores AI risk mitigation through robust governance and security. It examines the crucial roles of the Chief Risk Officer and Chief Information Security Officer, and how their efforts complement each other. The presenter details practical strategies for building trustworthy AI systems."* (quality/accuracy may vary)
- hashtags (visible): `#responsibleai #aigovernance #aisecurity`
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_2.20.30_AM-e426304c…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

Process this one. Not a dupe.
Classify it as AI governance/security controls taxonomy — not a sexy frontier-spine source, but absolutely important for OMNI’s enterprise/control-plane maturity.

This one is the operational checklist version of what Anthropic discussed philosophically.

Anthropic source: trust, safety, model behavior, human-in-loop.
IBM source: governance policy, security posture, model lineage, acceptable use, prompt injection defense, AI gateway, monitoring, lifecycle management.

For OMNI, this belongs in Phase 0 / enterprise AI controls / Build OS / §C security posture.

Core takeaway

The big distinction is:

AI governance protects against self-inflicted AI risk. AI security protects against adversarial or unauthorized AI risk.

IBM frames governance as responsible, explainable, reliable, documented, source-attributed, accountable AI. Security is about vulnerabilities, prompt injection, unauthorized access, shadow AI, data exfiltration, model manipulation, and availability. The transcript explicitly separates governance failures like bad sources, model drift, hallucination, IP risk, bias, and reputation damage from security failures like prompt injection, unauthorized access, poisoning, exfiltration, denial of service, and shadow AI.

That distinction is very useful for OMNI.

OMNI translation
1. OMNI needs both governance and security — they are not the same layer.

Governance answers:

“Should this AI system exist? What is it allowed to do? Who owns it? What sources/models/policies/evals make it acceptable?”

Security answers:

“Can someone attack it, bypass it, poison it, leak data through it, misconfigure it, or use shadow AI outside the rules?”

OMNI has been very strong on governance/authority doctrine. This source reminds us not to underbuild the security side.

Doctrine:

Governance defines legitimate AI behavior; security protects the system from illegitimate access, manipulation, and leakage.

2. “Shadow AI” is a real OMNI risk.

This is big.

IBM calls out AI instances created without approval or authorization as a source of data leaks and unmanaged risk.

For OMNI/Bloom, shadow AI could look like:

staff pasting patient info into ChatGPT,
provider using personal AI for clinical summaries,
ops team building random Zapier/AI automations,
unofficial AI notes in Google Docs,
screenshots/transcripts stored outside governed reservoirs,
agent tools running without catalog registration,
undocumented model routes,
abandoned prototypes still connected to data.

Keeper:

No AI surface, agent, prompt, model route, automation, or workflow should exist outside the AI registry.

This maps directly to your “no orphan folders / no orphan evidence / no orphan agents” instinct.

3. AI gateway / firewall is a future OMNI primitive.

IBM describes an AI firewall/gateway that sits between users and AI, inspects prompts coming in, detects prompt injection, and inspects outputs going out for exfiltration or policy violations.

OMNI needs this concept, but care-grade.

Potential OMNI gateway responsibilities:

prompt injection detection,
PHI leakage detection,
forbidden tool-call blocking,
source authority enforcement,
output authority label checking,
clinical-risk escalation,
unsafe instruction refusal,
role/tenant access filtering,
patient-facing tone/claim guardrails,
redaction,
audit logging.

Doctrine:

Every model/tool boundary should pass through an AI gateway that enforces policy before and after generation.

4. Model lineage belongs in OMNI’s model/provider registry.

IBM emphasizes knowing where models came from, whether they are authentic, who touched them, whether they are the latest/approved version, and whether data used for training/fine-tuning is permitted.

For OMNI, this becomes:

model provider,
model version,
route/purpose,
approved use cases,
data handling status,
PHI eligibility,
eval status,
rollback route,
last review,
known risks,
allowed domains,
forbidden domains.

Keeper:

A model cannot be used in OMNI merely because it works; it must be registered, evaluated, scoped, and versioned.

5. Acceptable-use policy must apply to humans and agents.

IBM frames acceptable-use policy as defining what AI is allowed to do and how employees should use it.

OMNI needs two levels:

Human acceptable use:

what staff/providers can paste into AI,
where PHI may go,
what AI outputs can be copied into patient records,
when AI must be cited or reviewed,
what cannot be automated.

Agent acceptable use:

what tools an agent may call,
which data it may retrieve,
whether it can draft/send/write/commit,
when it must escalate,
what instructions it must reject,
what it must log.

Doctrine:

Acceptable use is not only a staff policy. It is an agent runtime policy.

6. Prompt injection defense is not optional for §C.

This lands directly in Governed Capability Exchange.

If OMNI exposes tools, retrieval, external agent access, patient chat, provider agents, vendor integrations, or physical devices later, prompt injection becomes a serious threat.

Threat examples:

patient message tells agent to ignore protocol,
uploaded document contains malicious instructions,
external website injects tool-call instructions,
vendor payload tries to exfiltrate context,
“caregiver” impersonation attempts to access data,
source transcript includes adversarial text,
internal user asks the agent to bypass review.

Keeper:

Every untrusted input must be treated as content, not instruction.

That should be a hard OMNI security law.

7. Governance controls map to OMNI’s already-emerging architecture.

IBM’s governance layer includes:

AI use-case discovery and management,
model management,
risk management,
performance monitoring,
compliance,
lifecycle management.

OMNI already has partial homes for this:

AI use-case registry,
model route registry,
agent/action registry,
domain contracts,
review gates,
evals,
trace logs,
Knowledge Reservoir authority labels,
Build OS proof packages,
open review queue.

But this source says: make it explicit.

Potential artifact:

AI Governance & Security Control Plane

Not giant bureaucracy — just one registry/checklist spine that future agents cannot bypass.

8. Security controls map to OMNI runtime protection.

IBM’s security layer includes:

AI model discovery,
AI security posture management,
model scanning / pen testing,
AI gateway/firewall,
threat monitoring,
vulnerability dashboard.

OMNI should eventually need:

shadow AI discovery,
model/tool inventory,
prompt injection tests,
red-team cases,
PHI exfiltration tests,
unauthorized tool-call tests,
model route posture checks,
agent permission review,
runtime anomaly monitor,
security incident trace.

Keeper:

AI security is not just data security. It is model, prompt, tool, retrieval, agent, and output security.

Where it lands

§C Governed Capability Exchange: massive. Tool access, external agents, gateways, prompt injection, unauthorized access, security posture.

Build OS / Phase 0 controls: massive. Model registry, use-case registry, acceptable use, lifecycle management, red-team checks.

CNS / orchestration: major. Agents need runtime policy enforcement, action scopes, monitoring, and threat detection.

Knowledge Reservoirs: major. Retrieved content must not become instructions; source authority labels matter; malicious source text must be contained.

Clinical safety: major. Hallucination, provenance, accountability, and human review connect governance to patient safety.

Enterprise readiness: massive. This is the kind of checklist future enterprise buyers will expect.

Doctrine / primitive pressure

Potential primitives / control artifacts:

AI_use_case_registry
AI_model_registry
model_lineage_record
model_route_approval
AI_acceptable_use_policy
agent_acceptable_use_policy
AI_gateway
prompt_injection_defense
untrusted_input_boundary
shadow_AI_discovery
AI_security_posture
model_pen_test
AI_firewall
output_exfiltration_scan
AI_threat_monitor
model_lifecycle_state
AI_risk_register
agent_permission_audit
AI_control_dashboard

Keeper doctrine:

OMNI needs an AI governance/security control plane: every model, agent, tool, use case, data source, and output path must be registered, scoped, monitored, and lifecycle-managed.

Second keeper:

Untrusted content may inform an agent, but must never instruct the agent.

Third keeper:

Governance prevents self-inflicted AI harm; security prevents adversarial or unauthorized AI harm. OMNI needs both.

What not to import blindly

Do not turn OMNI into compliance theater.

Do not make every prototype require enterprise bureaucracy before learning.

Do not assume IBM’s generic controls are sufficient for clinical care.

Do not rely only on dashboards; controls must enforce behavior at runtime.

Do not confuse “explainable/source-attributed” with clinically adopted.

Do not treat prompt injection as only a chat problem — it applies to documents, websites, transcripts, uploaded files, emails, and tool outputs.

Priority / confidence

Priority: 4.5/5
Confidence: 5/5
Suggested analysis depth: full_semantic for AI governance/security, targeted_semantic if only routing to glossary.

I would route this into Phase 0 enterprise AI controls, §C security posture, Build OS guardrails, Knowledge Reservoir untrusted-input doctrine, and model/agent registry design.

Short keeper:

OMNI can only safely become agentic if every agent is governed, every tool is scoped, every model is registered, every source is labeled, and every untrusted input is contained.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus deep-read extraction  ·  layer: `analysis_nonbinding`  ·  EVRUN-2026-000001 (★SPINE — AI security control-plane OPS; pairs 070/080/081)
- reviewer: `Opus` · type: `AI assistant` · at: `2026-06-09` · purpose: `formalize Review 001 → structured extraction → registry` · binds nothing (`GRD-036`/`GRD-044`) · [full agent extraction 7d0b72d3]

**30 clusters. Jeff Crume/IBM = §C control-plane CHECKLIST (070=philosophy; 080/081=threats). Keepers: governance prevents self-inflicted harm / security prevents adversarial harm · no AI surface outside registry · every model boundary passes AI gateway · untrusted content informs never instructs · agentic OMNI requires governed+scoped+registered+labeled+contained stack. IBM/NIST framing = low-authority-watch; HIPAA exceeds generic checklist.**
1. **`governance_vs_security_split`** — two control planes: governance=legitimacy/behavior/policy; security=attack/bypass/leak/misconfig; neither substitutes. §A/§C(dual host)/security/Build-OS(separate proof tracks)/capability-topology/CNS. "self-inflicted versus others inflicted" 3:30. PARTIAL→spine.
2. **`cro_ciso_accountability_topology`** — governance owner≈risk(CRO); security owner≈defense(CISO); maps operator-topology + RBAC owner binding. §A/§7.8/Identity-RBAC/Build-OS/domain-contracts/future-watch. "Who's responsible for which parts" 6:52. PARTIAL→vocabulary.
3. **`paired_ai_policies_and_finish_lines`** — explicit governance AND security policy w/ defined success criteria (can't know success if finish-line undefined). Build-OS(gate admission+proof)/§C(`AI_use_case_registry`)/security/capability-topology. "never even defined where the finish line" 6:46. PARTIAL→spine.
4. **`governance_quality_bar`** — governed AI = responsible · explainable · source-attributed · reliable (grounded truth). §A/KR(authority labels/provenance)/§C/Clinical-Memory-Obs(candidate→adopt)/Build-OS(eval dims). "documentation and source attribution" 1:52. PARTIAL→spine.
5. **`governance_failure_modes`** — self-inflicted: toxicity/bias/drift/IP-theft/hallucination/reputation. Build-OS(eval+drift monitors)/§A/§7.8/KR(licensed-source gates)/domain-contracts/security. "model doesn't drift… getting untrue" 4:21. PARTIAL→spine.
6. **`cia_triad_applied_to_ai`** — confidentiality(no-exfil)/integrity(no-poison)/availability(no-DoS) = AI test matrix; pairs 080 offensive classes. security/§C/CNS(resilience/rate-limits)/future-watch. "confidentiality, integrity and availability" 5:17. AFFIRM→vocabulary.
7. **`shadow_ai_discovery_and_containment`** — AI created without approval = leak+unmanaged-risk; no model/agent/automation/workflow outside registry. §C(`shadow_AI_discovery`/`AI_use_case_registry`)/Build-OS(no orphan agents)/security/capability-topology(revoke unregistered)/Identity-RBAC. "shadow AI… without approval" 2:12. ABSENT→spine.
8. **`model_lineage_and_authenticity_registry`** — know origin/authenticity/custody/approved-version/data-rights; model can't be used merely because it works. §C(`AI_model_registry`/`model_lineage_record`/`model_route_approval`)/Build-OS(version-CI/rollback)/security(infected-model scan)/capability-topology. "need to know the lineage of the model" 7:40. PARTIAL→spine.
9. **`acceptable_use_policy_human_and_agent`** — two-level AUP: human (what staff paste/where PHI goes) AND agent (tools callable/data retrievable/draft-send-commit rights/escalation/logging); AUP = agent runtime policy not HR doc. §C(`agent_acceptable_use_policy`)/CNS(runtime scopes)/Build-OS/Identity-RBAC/security. "acceptable use policy… okay with… not okay" 8:10. ABSENT→spine.
10. **`training_source_control_and_data_purity`** — bad sources→bad responses; training/retrieval ingredients permitted+pure; reservoir promotion gates (036) = analog. KR(promotion gates)/Build-OS(data-handling per route)/§C(PHI eligibility)/domain-contracts(consent). "If you use bad sources, you get bad data" 7:34. PARTIAL→vocabulary.
11. **`prompt_injection_primary_genai_threat`** — #1 attack: socially engineer AI to override instructions; applies chat/docs/transcripts/emails/tool-outputs; every untrusted input = content not instruction. §C(`prompt_injection_defense`/`untrusted_input_boundary`)/security(gateway)/CNS(instruction-vs-policy gate)/KR(ingestion sanitization)/Messaging-D7(ambient default-deny). "It's prompt injections" 8:49. PARTIAL→spine.
12. **`unauthorized_access_and_agentic_autonomy_risk`** — agentic AI + broad tool power = amplified blast radius; least-privilege stricter for agents than humans. §C/capability-topology(`non_human_identity`/least-privilege)/Identity-RBAC/CNS(action scopes)/security. "agentic AI, as well… giving it a lot of power" 9:10/9:18. PARTIAL→spine.
13. **`model_pen_test_and_injection_ci`** — pre-deploy pen testing + scalable automated prompt-injection suites before route promotion; supplements never replaces runtime gateway. Build-OS(`model_pen_test`/red-team fixtures)/security(EchoLeak 081)/§C(route promotion gate). "automated prompt injection testing" 9:40. ABSENT→spine.
14. **`ai_security_posture_management` (AI-SPM)** — detect misconfigs exposing data; enforce per-instance security (access/encryption/no-public-when-forbidden). security(`AI_security_posture`)/§C(route posture before activation)/capability-topology/Build-OS. "AI security posture management" 12:28. ABSENT→spine.
15. **`layered_protection_framework`** — concentric: protected core → governance ring (use-cases/model-mgmt/risk/perf/compliance/lifecycle) → security ring (discovery/SPM/pen-test/gateway/threat-monitor/dashboard). §C(control-plane architecture)/CNS(envelope layers)/Build-OS(checklist spine)/security. "layers of protection… center is our AI" 10:22. ABSENT→spine.
16. **`ai_use_case_registry_and_discovery`** — inventory+define use cases upfront (can't prove outcomes without named use cases); pairs core-before-act-two/use-case-first (073). Build-OS(`AI_use_case_registry`)/§C/capability-topology(use-case→capability)/domain-contracts. "define what those are right up front" 10:47. ABSENT→spine.
17. **`model_management_fleet_governance`** — central fleet governance (intent/provenance/behavior/performance); multi-model routing needs registry spine not ad-hoc routes. §C(`AI_model_registry`/`model_route_approval`)/Build-OS/CNS/security. "model management… where they came from" 10:51. PARTIAL→spine.
18. **`ai_lifecycle_management`** — models/agents born→mature→retire; abandoned prototypes = shadow risk; pairs 056 slop-automation gate. Build-OS(`model_lifecycle_state`/decommission proof)/§C/security(revoke stale). "lifecycle management… set it and forget it" 11:48. ABSENT→spine.
19. **`ai_gateway_firewall`** — AI gateway at EVERY model/tool boundary: inspect inbound (injection/policy), inspect outbound (exfil/PHI), block/redact realtime, audit; care-grade + clinical-risk-escalation + authority-labels + forbidden-tool-block. **THE load-bearing §C security primitive.** §C PRIMARY(`AI_gateway`/`AI_firewall`)/security(spine)/CNS(authority-gate hard-stop)/capability-topology(every boundary)/Identity-RBAC/Messaging-D7(PHI scan). "AI firewall, or an AI gateway" 13:11. ABSENT→spine.
20. **`inbound_prompt_inspection_and_realtime_block`** — gateway sees every ingress; conform-to-policy check; block injection at boundary before retrieval/tool exec, not post-hoc. §C/security/KR(ingress)/CNS. "block it right there at the firewall" 13:36. ABSENT→spine.
21. **`output_exfiltration_scan_and_redaction`** — outbound scan for leakage; redact/block when tricked to exfiltrate (PHI). security/§C/CNS(export route split)/capability-topology(read≠export). "tricked into leaking information" 13:38. ABSENT→spine.
22. **`ai_threat_monitor_and_incident_trace`** — detect repeated violations/attack patterns; alert operators; correlate audit (SOC analog). security(`AI_threat_monitor`/`agent_permission_audit`)/CNS(anomaly on loops)/Build-OS/§A. "threat monitor… things are happening" 13:56. ABSENT→spine.
23. **`prevention_detection_response_and_runtime_enforcement`** — prevent+detect+respond; controls enforce at runtime; dashboards = observability not control. security/Build-OS(enforce>observe)/§C/CNS. "Controls are the things that let us control" 6:25. PARTIAL→spine.
24. **`ai_risk_register_and_accountability`** — map/quantify/expose risks; tie to controls; named accountability per domain. §C(`AI_risk_register`)/Build-OS/§A/Identity-RBAC(owner binding). "Quantify them… expose what those are" 11:07. PARTIAL→vocabulary.
25. **`compliance_due_diligence_and_performance_sla`** — industry compliance demonstrability; perf/latency as governance concern; HIPAA EXCEEDS generic IBM/NIST. Build-OS/§C/security/CNS(perf-regression→review gate). "compliance… due diligence" 11:40. PARTIAL→vocabulary→watch.
26. **`nist_rmf_and_ibm_breach_stat`** — NIST RMF + 63%-no-governance stat = sales/comparator context, not OMNI binding (GRD-039). security(watch-list)/future-watch/§3.5(IBM Lens-B). "63% of organizations had no governance" 0:27. no-op→low-authority-watch→watch.
27. **`governance_policy_gap_industry_immaturity`** — majority lack formal AI governance; OMNI must not ship ungoverned routes waiting for catch-up. Build-OS(mandatory gates)/§2(wedge timing)/future-watch. "don't do that and have not had that" 6:43. no-op→low-authority-watch→watch.
28. **`integrated_solution_beats_siloed_rings`** — governance+security integrated > either alone → lower risk; §C ships policy-registry AND security-envelope as one control plane. §C/Build-OS/security/§A. "governance plus security… we lower risk" 14:47. PARTIAL→spine.
29. **`intentional_adversarial_vs_unintentional_governance_harm`** — governance failures usually unintentional (bad model/source/policy); security failures intentional (attackers/bad insiders); different playbooks. Build-OS/security/§A/CNS. "result… probably unintentional" 3:01. PARTIAL→spine.
30. **`insider_and_external_threat_coverage`** — security covers internal bad actors AND external attackers; RBAC must assume insider threat; pairs `requireCapability` + agent-permission-audit. security/Identity-RBAC/capability-topology/§C. "bad insiders… external person who's attacking" 3:37/3:43. AFFIRM→vocabulary.

**Net-new (LOW minting — 079 = OPS/TAXONOMY ORIGIN for registry "AI security control-plane" [Batch 4]; 081/080 add threats, 070 philosophy):** PROMOTE `AI_gateway`/`AI_firewall`(net-new vs v3 — central §C; 081 operationalizes), `untrusted_input_boundary`(sharpen GRD-039; dedupe 081), `output_exfiltration_scan`(pairs 081 EchoLeak), `AI_model_registry`+`model_lineage_record`+`model_route_approval`(merge 069/064/079 single host), `AI_use_case_registry`, `shadow_AI_discovery`(pairs 056/048), `agent_acceptable_use_policy`, `AI_security_posture`, `model_pen_test`, `model_lifecycle_state`(pairs 056), `AI_threat_monitor`+`agent_permission_audit`, `AI_risk_register`. `AI_control_dashboard`→WATCH/subordinate (observability not control). `governance_vs_security_control_plane`→architecture frame not schema host. REJECT primitives: `cro_ciso_topology`(vocab→use operator/RBAC owners), `nist_rmf_mapping`(low-auth comparator), `responsible_ai`/`explainable_ai`(EXISTS-AS §A/KR provenance), `prompt_injection_defense`(081 spine), `non_human_identity`(081/048), `data_poisoning`(079+KR cross-ref OWASP). Keepers (prose): (1) governance prevents self-inflicted / security prevents adversarial; (2) every boundary passes AI gateway before+after generation; (3) untrusted content informs never instructs; (4) no AI surface outside registry; (5) OMNI safely agentic only if every agent governed/tool scoped/model registered/source labeled/untrusted-input contained. REJECT-import: compliance theater; prototype bureaucracy before learning; IBM checklist as sufficient for HIPAA; dashboard-as-control; explainable≠adopted; prompt-injection as chat-only; Guardium cert promo; NIST RMF as binding canon. **Reread (MANDATORY before §C security-control-plane/AI-gateway contract):** pair-read 070+079+080+081 as ONE security spine (070=philosophy/079=ops+gateway+registries/080=offensive+deepfake/081=zero-click+indirect+agent-amplifier — don't promote 079 controls without 081 threat binding); verbatim re-verify gateway anchors 13:11–13:48 (highest-yield 90s); split-axis anchor 2:47–3:51; Capability Topology Gate (AI_gateway = boundary enforcement not parallel permission system); Build Entry Gate v0 (AI_use_case_registry + model_route_approval + model_pen_test = lane-admission proof); KR (1:52, 7:34 source-attribution/bad-sources × GRD-036/042); Identity/RBAC (agent_AUP + non_human_identity + least-privilege merge 079+081); GRD-039 IBM authority ceiling (care-grade EXCEEDS generic checklist).

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000001` (ai-corpus synthesis + routing) · per-source extraction: **§3 Review 003** (this file) · concept_registry: `analysis/EVRUN-2026-000001_ai-corpus-synthesis-and-routing/EVRUN-2026-000001_ai-corpus_concept_registry_and_routing_map.md` · anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · promotion: gated (`GRD-036`/`GRD-044`) — clusters route to thesis-v4 + CNS/Build-OS/security/capability-topology contracts via registry; no direct binding from this file.

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged strong **§A governance/security** + AI-security guardrails (pairs w/ Anthropic 070); IBM-channel; AI-summary + Guardium cert-promo in source.

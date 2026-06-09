# EVSRC-2026-000080 — AI ATTACKS! How Hackers Weaponize Artificial Intelligence

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: AI attacks/weaponization); Knox read in §3 Review 001 (verified: AI offensive-threat taxonomy / security spine). Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000080`  ·  filename: `EVSRC-2026-000080_ibm-jeff-crume-ai-attacks-how-hackers-weaponize-ai.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=0tHb6U2604g`
- source_title: `AI ATTACKS! How Hackers Weaponize Artificial Intelligence`
- channel_or_org: `IBM Technology` (1.71M subs)  ·  series: `IBM explainer` (z/OS cert promo)  ·  published_at: `2025-11-18`  ·  views_at_capture: `185,564`  ·  duration: `18:35`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `explainer / lecture`  ·  source_reliability_context: `academic / vendor-practitioner (IBM security expert — adversarial-AI / offensive-security lens)`  ·  topic_tags_light: `[adversarial_ai, deepfakes, ai_phishing, ai_exploits_CVE, weaponized_llms, ai_cybersecurity_defense, threat_landscape]`  ·  note: `IBM-channel source (6th of corpus); 2nd Jeff Crume source (pairs w/ 079); cert-promo video`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Jeff Crume` · role_in_source: `presenter` · affiliation_at_publication: `IBM (security expert / Distinguished Engineer)` · speaker_type: `vendor-practitioner / educator (security)` · authority_context: `**HIGH relevance on AI-security THREAT side (the attacker's view)**: how **AI attacks are evolving — from deepfakes to phishing to exploits**; how **AI agents, LLMs, and generative AI fuel cyber threats** (whiteboard shows CVE → "CVE Genie" → Exploit → LLM, 51% / <$3 — i.e. cheap automated exploit generation); how **AI cybersecurity can outsmart and stop these emerging dangers.** Offensive/defensive security lens — the threat-model complement to governance source 079` · identity_confidence: `high_from_screenshot`
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `—` (solo explainer)  ·  event_context: `IBM Technology YouTube (z/OS Administrator cert promo)`  ·  perspective / conflict notes: `IBM security educational content. **HIGH OMNI relevance: AI-attack threat model (deepfakes, AI phishing, automated exploit generation, weaponized LLMs/agents) directly informs OMNI's §A trust/authority/permeability threat surface + AI-security guardrails (prompt injection, non-human-identity abuse, tool-security, hostile-by-default external content per GRD-039). The "unverified source can change your mind, never your code" stance is exactly this threat model. Pairs with 079 (governance/controls) + Anthropic 070.** Recent (2025-11). Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): IBM security expert = high relevance on AI threat landscape; claims route through evidence → interpretation → gated promotion. Strong input for OMNI's adversarial/threat-model posture (defensive design, not adoption of attack tooling).

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = AI-attacks transcript; §3 = matching offensive-threat read) · [x] EVRUN needed? (yes — full_semantic; **§A AI threat model** — security cluster w/ 070/079) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
AI attacks. Sounds like a bad sci-fi movie, right? Well, unfortunately, in this case, it's actually
0:06
happening, and we can expect to see more of it going forward. Businesses are using AI to improve
0:11
customer service. Customers are using AI to research products. Unsurprisingly, hackers are
0:18
using AI to, well, hack. Agents powered by AI are equipped with the tools to write
0:25
code, attempt logins, generate fake videos and much more. While AI is doing amazing things to
0:32
reshape our businesses and our lives in positive ways, it's also amping up the threat by putting
0:37
more and more power in the hands of the bad guys. In this video, we're going to take a look at six
0:43
different examples of attacks that are emerging using AI to power attacks so that you can
0:50
prepare your defenses to withstand the onslaught. The first type of attack we're going to take a
0:55
look at is an AI-powered login, where we're going to test the security of your system and your
1:01
authentication capabilities to see if they'll withstand an attack. In this case, AI is being
1:08
leveraged, and it's a pen testing or penetration testing framework that could be used, again, to
1:13
test your security, or by a bad guy to break into your system. And what it does,this particular one
1:19
is called BruteForceAI, it leverages an agent, which is an AI system which is able to
1:26
operate autonomously, and it then uses an LLM to do some of its processing.
1:33
So what is it looking for? Well, this agent is going to go out and start identifying login pages.
1:40
So it's going to look for web pages that have login information. It takes the page, sends it off
1:46
to the large language model that parses the page and figures out if there are any forms, login
1:53
forms, areas where you can type in user IDs and passwords and things like that. LLMs are
1:58
particularly good at doing that. In fact, this one was able to do it in roughly 95% of cases,
2:04
correctly identify where the login area was on that page. Once we have that identified, then the
2:11
agent is, uh, conducting an attack and it directs the attack. What it does in this case is you have two
2:17
different options. One type of attack is a brute force attack, where you basically try every
2:23
combination of user IDs and passwords. This usually is not going to work all that well,
2:28
because you're going to run into a three strikes policy on a particular website that's going to
2:32
lock you out after three bad attempts or something along those lines. So that's one
2:36
possibility is brute force, but a password spraying attempt might get away with, because in
2:43
this case, you're sending the user ID and password to a particular system or to a particular ID, and
2:49
then trying a different ID with that password. So, you're trying in these cases to a number of
2:55
different possibilities, but not all just barreling in on only one possibility. So, this is,
3:01
again, AI is running this attack. The user didn't have to figure out all of these capabilities.
3:08
They use the pen testing framework and they launch it, and the AI takes care of the rest. By a
3:14
similar theme, let's take a look at AI-based ransomware. In this case, we're going to talk about
3:20
something called prompt lock. It was a research project that was designed as a way to see what's
3:26
possible here. Um, what is the art of the possible in this case? And it also uses an
3:33
agent, which then is leveraging a large language model. So, you're probably seeing a
3:40
theme here. And this whole thing then is designed where the agent is going to go off
3:46
and really orchestrate and do all of the activities, direct all of the activities that are
3:52
necessary here. So, it's going to plan the particular attack. It's going to go off and
3:58
analyze the information that it needs once it figures out. In other words, it
4:05
will figure out what systems do I want to attack and then analyze sensitive data on those systems. So,
4:11
it will look for files and say, look, I think this stuff could be really sensitive. They're
4:15
going to pay a lot for this. Or, look over here and say, oh, that's probably really not worth my time.
4:20
And it can use that information then to figure out how much to charge, for instance. Uh, it's also
4:27
going to generate the actual attack. So, whatever code or whatever is
4:33
necessary in order to ... to encrypt the files and that sort of thing and then execute the attack. So,
4:40
it's going to do all of that under the... the auspices of this agent. So the agent is really
4:46
running the whole thing. The LLM is coming into play because it can help with the analysis of
4:52
these files you feed them in. And then we know what we're going to do. And the attack itself
4:57
could result in an exfiltration of data, where I take your data and keep it for
5:04
myself. It could amount to an encryption of your data where I say, I've got your data and I'm not
5:10
going to give it back unless you pay me. Or it could just erase the data. So it depends on what
5:14
type of ... of attack you want to do or threaten that you're going to erase the data after a certain
5:19
period of time. And then some other things that ... that the execution of the attack could do also is
5:24
where this AI agent leveraging the LLM, which is able to understand language, can actually
5:31
write the ransom note for you. And it could be very personalized. It could, for instance, say, here
5:37
are the files that I have ... have leveraged. And the ... here are the files. If you want them back, this is what
5:42
it's going to cost you. And do all of that, all completely directed within the AI. And because
5:49
it's all being done within an AI, we also have the ability to make every single one of these attacks
5:54
different. can be essentially a polymorphic attack where it changes. The first instance of
5:59
this attack looks different than the next instance, which looks different than the next
6:03
instance, which makes it really difficult to detect. We've seen polymorphic viruses and malware
6:09
for decades, and there they present a problem. Now we could see polymorphic generated ransomware
6:16
attacks coming from AI. And by the way, this particular instance, this particular project, all
6:23
of this capability runs in a cloud, which means you basically end up with ransomware as a service,
6:30
all brought to you by AI. The next type of attack we're going to talk about is AI-powered phishing.
6:36
Now, what have we been telling our users about phishing attacks? Remember, those are those emails
6:41
that come in that say, I'm your bank or I'm some well-known entity, but it's a fake and
6:48
they're trying to use ... usually get you in most cases to log in, click on a link that takes you to
6:53
a bogus site. Then they harvest your credentials and then they're off to the races. What do we
6:58
normally tell people to look for that is a clue. This is the dead giveaway that this is not real.
7:04
Well, oftentimes it's bad grammar, bad spelling. So we say
7:11
if you see those kinds of things, then think it's a phishing attack. Well, the implication is if you
7:17
don't see those things, then people are likely to believe that it's legitimate. And I'm telling you,
7:23
we need to untrain all of our users from that, because now with AI, we're not going to see this
7:29
kind of stuff much anymore. The smart phishers will, in fact use an LLM, a large language
7:36
model, which will generate their text in perfect English or Spanish or French or what have
7:42
you, even though the attacker may not speak a word of that language. So, these kinds of artifacts,
7:48
these kinds of clues, if we're expecting to find them, we may not find them much anymore. And it
7:54
could cause someone to have a false sense of security in this. And the way it would work is, an
7:59
attacker just basically puts prompts into a large language model. They're saying, okay, generate a
8:05
phishing email that does this, that or the following. And then what comes out is a phishing
8:11
email that then they send out to others. So they can just copy and paste that. And you might say,
8:15
well, but the ... the LLMs that I work with, if I ask them to generate a phishing email, they'll refuse
8:22
to do it. And they might. But there are other forms of those LLMs that sit out there that I'm not
8:28
going to give the names of, but you can find them if you want to, some are on the dark web, that will
8:33
generate all of this, that don't have those kind of guardrails and don't have those kinds of
8:36
restrictions. The bad guys will be using those. So, and you could also do a little bit of research to
8:42
really personalize this, hyper-personalize this. With AI, it could go out maybe and scrape all of
8:48
your social media posts and things like that, gather a lot of information about you to make
8:53
this phishing email that sent to you very specific to you and therefore you're more likely
8:58
to believe it. I did a video on this a while back where IBM did an experiment on this, where we
9:04
basically took an AI and gave it five prompts and five minutes and compared the
9:10
phishing email it had and how effective it was to what it took a human 16 hours to
9:17
produce. Well-crafted phishing attack. And you know what? They were almost equal. This
9:24
one was slightly more effective, the human-generated one, but not by much. And when you
9:29
consider 16 hours versus five minutes, you can see where the economics of this go. And here's the
9:35
thing. The humans will not be getting vastly better at generating these; the AI will. So, this is
9:42
going to be another area that we're going to continue to see more and more influence from, is
9:46
AI-generated phishing. Now, the next type of attack we're goi ... going to take a look at is AI-powered
9:53
fraud. And in this case, the fraud could take a lot of different forms, but I'm going to
9:58
zero in on one particular type of fraud that we call a deepfake. And a deepfake is
10:04
basically a ... a case where we're using generative AI. Uh, so we've got a gen AI
10:11
model here, and I'm going to take, in this case, something that you say either an audio
10:17
recording of your voice or a video of you doing something. I'm going to feed that into my
10:23
generative AI model, and then it is going to generate a model itself. And that model
10:30
that it has is basically copying what you act like, sound like, look like, all of this sort of
10:36
thing. Then the only thing I have to do is come up with a script, words that I want to put in your
10:41
mouth, and I feed those into this, and then it generates out the result. So that's how a deepfake
10:48
works. And they're not very hard to do. And in fact, we've already seen cases where these have been
10:53
very effective. And by the way, if you want to know more about this, I've got a whole video on that, so take
10:58
a look. I'm just going to say, if you think that by not leaving your ... your voice on your ... on
11:03
your voicemail, it's going to protect you from not getting deepfaked, uh, think again. It doesn't take
11:09
very long. Some of these models can ... can generate a very believable deepfake of your voice with as
11:15
little as three seconds of audio recording of you. Now, we've already seen, as I said, this be
11:21
effective. This is not brand-new news. In 2021, there was a case where an audio deepfake was
11:28
done and it convinced an employee that their boss was telling them to wire 35
11:34
million dollars to a particular account. Turns out that was a deepfake; it wasn't their boss.
11:41
The company had then basically lost 35 million dollars. More recently, in 2024,
11:48
there was a case where the deepfake got even better, and it was video-based. In this one, there
11:54
was a video call that simulated the CFO, the Chief Financial Officer of a company, and it
12:01
convinced an employee to wire 25 million dollars to an attacker. So, this is not theoretical. And
12:08
this is a case where generally we believe what we see and hear. Well, I'm telling you, with deepfakes,
12:13
if you aren't in the room, you can't believe it. Our next type of attack that's AI-powered is
12:19
going to be AI-powered exploits. Now, an exploit is something that once you found a vulnerability,
12:26
the exploit is the thing that takes advantage of that vulnerability. So for instance, we publish in
12:31
the security industry these things called CVEs, common vulnerabilities and exposures. are
12:37
reports where once we find a particular vulnerability, it's described and these things are
12:42
numbered, they're cataloged, they're publicly available. It's a way that everyone in the
12:47
security industry can talk about a particular vulnerability. And we all know what we're all
12:52
talking about. Also, it will talk about the way the thing works and what the underlying vulnerability
12:58
is. So, this is publicly available information. So, with this, another research project, they ... they took
13:05
something, uh, CVE and feed it into a thing that is in an AI called a CVE
13:12
Genie. So this again, is an agent that's going to go off and take the CVE,
13:19
the document itself, feed it into an LLM. Starting to see a trend here. Agent leverages LLM.
13:25
LLM reads the document, pulls out the salient details, sends that information back to
13:32
the genie, which the ... is the agent that then not only figures out what this vulnerability means,
13:39
but how do we exploit it, and writes the actual exploit code for you. So in this case, the whole
13:45
process is automated, from feeding in the CVE to processing it, to generating the exploit.
13:51
And, here's the thing, uh, with this uh, particular version, they achieved a 51%
13:58
success rate by just feeding in a CVE into the system. And the cost for each one of these
14:04
exploits? Less than 3 dollars. So, the economics of this are astronomical
14:11
for the bad guys. And that means, individuals who don't know anything about coding will be able to
14:17
take advantage of systems by using publicly available information and an AI at their disposal.
14:22
And other examples that do this also are malware. So, malware is a type of
14:29
exploit, in many cases where we're taking advantage of an underlying vulnerability in the
14:34
system. So, I could use a system like this to generate malware, which would then obfuscate uh,
14:41
its nature, be polymorphic, like I was talking about before. It could hide certain details about
14:47
the way it's going to operate and make it even harder to detect. So you have a smart system that
14:53
is making itself difficult to detect, making it a lot more effective potentially as well. Now what
15:00
if you have AI that runs the entire kill chain? AI-powered attacks all the way across the
15:07
board. This has already been done. It's been proven to be effective with a sys ... an AI system that
15:14
is weaponizing Anthropic, which is a popular AI system. And what it does, is it uses an AI
15:21
agent, as do many of these other attacks, and the agent is basically responsible for running the
15:27
entire attack. So, it's going to figure out and make decisions, tactical and strategic, on what
15:33
kinds of things it wants to attack, what kind of attack does it want to run. It's going to find its
15:38
victims. It's going to identify the ones that thinks are the most effective, maybe the high-value
15:42
targets, that sort of thing. It's going to analyze data that it has gotten off of their
15:49
systems that it has exfiltrated, figured out, here's the good stuff that I really want to have,
15:54
and I can analyze all that within the context of this agent. The agent might, by the way, leverage an
16:01
LLM to process the documents and things like that. I might create personas to hide behind so I can
16:08
say, if I'm going to do an extortion attack and say, maybe I'm going to release all of this
16:13
information to the world, if you don't give me a certain amount of ransom and pay a ransom, well, we
16:19
could create false personas and hide behind those and say you need to pay it to this false persona
16:24
And then that way, it makes it easier for the attacker to get away. And then ultimately have it
16:30
create the ransomware itself. It's going to create all of this. It's going to figure its demands and
16:36
calibrate those based upon the value of the information, the value of the target that they
16:40
have gone after, and figure out what likelihood they have to actually pay. Because if you ask for
16:47
a ton of money from someone who doesn't have it, they're not going to pay it. If you ask for too
16:51
little, well, then you sold yourself short. So, this can make all of those economic decisions. And
16:57
basically, uh, we could in the future add all kinds of things to this. You could imagine any kind of
17:03
attack that could happen, could potentially be done with a system like this. So, the AI
17:10
agent is able to advance the attack, it's able to design the attack, it's able to execute the attack.
17:16
And what all of this amounts to is basically we're making the skill level that is required for
17:22
an attacker be much lower. In other words, there was a time when an attacker had to be really
17:29
sharp, elite-level skills in order to pull off a complex attack like this. Now, all they have to do
17:36
is basically be like a vibe coder who's doing vibe attacking, vibe hacking. In other words, you
17:42
come up with the idea, instruct your agent to go do it, it figures out all the details, and then
17:49
just you collect the money. This is an example of where AI has been weaponized to do the full kill
17:55
chain. By now it should be pretty clear where all this is headed. AI-powered attacks are on the rise,
18:02
and we're just seeing the beginning of this trend. This much I'm sure of: AI attacks are not going to
18:07
get worse. That means the defenders are going to have to step up their game to meet the challenge.
18:12
We're going to need to leverage AI for cyber defense to do prevention, detection and response.
18:18
it won't be optional. It's going to be good AI versus bad AI. Make sure the good one wins.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `AI ATTACKS! How Hackers Weaponize Artificial Intelligence`  ·  visible_channel: `IBM Technology` (1.71M subs)
- visible_url: `youtube.com/watch?v=0tHb6U2604g`  ·  visible_published: `Nov 18, 2025`  ·  visible_views: `185,564`  ·  likes: `5.1K`  ·  duration: `18:35`
- visible_description: *"AI attacks are evolving fast — from deepfakes to phishing and exploits. Jeff Crume reveals how AI agents, LLMs, and generative AI fuel cyber threats. Learn how AI cybersecurity can outsmart and stop these emerging dangers."* (plus z/OS v3.x Administrator cert promo + code IBMTechYT20)
- whiteboard (visible): `CVE → CVE Genie → Exploit`, `LLM`, `51%`, `< $3`, `MALWARE` (cheap automated exploit generation)
- hashtags (visible): `#hackers #ai #cybersecurity`
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_2.23.59_AM-a496062f…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

Process this one. Not a dupe.
Classify it as AI offensive-threat taxonomy / security spine source.

This pairs with the previous IBM governance/security video, but it is different:

Previous IBM security video = controls and governance architecture.
This one = what attackers can now do with AI agents, LLMs, deepfakes, exploit generation, and full kill-chain automation.

For OMNI, this is very important because it translates directly into §C, external agents, patient identity, staff trust, prompt-injection defense, source ingestion, agent permissions, and future AI gateway design.

Core takeaway

The big idea is:

AI lowers the skill floor for attackers while raising the scale, personalization, speed, and adaptability of attacks.

The transcript walks through AI-powered login attacks, AI ransomware, AI phishing, deepfake fraud, AI-generated exploits from CVEs, polymorphic malware/ransomware, and full-kill-chain AI agents that can identify victims, analyze stolen data, create personas, generate ransom demands, and execute attacks. The recurring pattern is: agent + LLM + tools = automated offensive capability.

That is the OMNI warning.

OMNI translation
1. The same agent architecture that helps OMNI also helps attackers.

This is the uncomfortable truth.

We have been celebrating:

agents,
tools,
planning,
memory,
RAG,
multimodality,
action surfaces,
autonomous workflows,
external capability exchange.

Attackers get the same primitives.

So OMNI’s doctrine needs to say:

Every capability OMNI gives a helpful agent must be threat-modeled as a capability a malicious agent may try to abuse.

If OMNI exposes scheduling, messaging, documents, payments, clinical summaries, patient identity, provider tasks, external APIs, or source reservoirs, those become possible attack surfaces.

2. “Good AI vs bad AI” validates defensive AI inside OMNI.

The video ends with the idea that defenders will need AI for prevention, detection, and response. That should be preserved.

OMNI will eventually need defensive agents too:

prompt-injection detector,
PHI exfiltration scanner,
abnormal tool-call monitor,
identity-risk classifier,
deepfake/social-engineering risk flag,
suspicious patient/contact behavior detector,
external-agent trust scorer,
source-ingestion sanitizer,
model-output safety critic,
audit anomaly detector,
security incident runbook agent.

Keeper:

Agentic OMNI requires defensive agents, not just productive agents.

3. Prompt injection is only one attack. The broader issue is agent compromise.

The prior governance video emphasized prompt injection. This one broadens the threat.

The real danger is not only:

“User tricks chatbot.”

It is:

“Untrusted content, external actors, documents, websites, messages, images, transcripts, vendors, or APIs influence an agent with tools.”

For OMNI, that means any of these can be malicious input:

patient message,
uploaded document,
copied transcript,
vendor payload,
email,
website content,
source reservoir item,
external agent request,
caregiver message,
staff note,
generated summary,
OCR text,
calendar invite,
support ticket.

Doctrine:

Untrusted content may be read as evidence; it must never be obeyed as instruction.

4. Deepfakes are directly relevant to healthcare identity and payment/security.

The transcript’s deepfake section matters a lot: audio/video can impersonate executives and authorize money movement. In OMNI/Bloom terms, deepfake/social engineering could target:

patient identity,
caregiver authorization,
staff instructions,
payment/refund requests,
provider orders,
prescription/refill discussions,
internal approvals,
HR/payroll,
vendor changes,
bank/account changes.

So OMNI cannot treat voice/video as automatic proof.

Keeper:

Voice, video, and “it sounded like them” are not identity proof.

For care, this becomes:

Identity and authority must be verified through deterministic channels, not merely human-like media.

5. AI-powered phishing means staff training has to change.

The video notes that old phishing cues like bad grammar and awkward phrasing are becoming unreliable because LLMs can generate polished, localized, personalized phishing.

For Bloom/OMNI, this means staff security training cannot stay at:

“Look for spelling mistakes.”

It has to shift to:

verify channel,
verify request type,
verify identity,
do not move money/change records based on message alone,
do not paste PHI into unapproved AI,
do not click unverified links,
escalate suspicious requests,
use approved systems of record.

OMNI product implication:

High-risk requests need workflow verification, not employee intuition.

6. CVE-to-exploit automation validates fast patch/security posture.

The CVE exploit example is important because it shows that public vulnerability information can be rapidly converted into working exploit attempts at low cost. The transcript describes AI systems reading CVE details and generating exploit code with meaningful success rates.

For OMNI, the defensive translation is:

know dependencies,
track CVEs,
patch fast,
scan models/tools/connectors,
pen-test agent surfaces,
reduce exposed attack surface,
monitor abnormal behavior,
maintain rollback/disable controls.

Keeper:

Public vulnerability knowledge becomes attacker automation fuel. OMNI needs dependency and posture management from the start.

7. Full-kill-chain AI is the §C nightmare scenario.

The scariest part is not one exploit. It is AI running the entire attack chain:

choose targets,
probe systems,
generate exploits,
analyze stolen data,
decide value,
generate ransom demands,
create personas,
adapt strategy.

OMNI translation:

If agents can transact, request, retrieve, and act, attackers will build agents to impersonate, probe, extract, and manipulate.

This makes §C security non-negotiable:

actor identity,
agent identity,
capability scopes,
trust records,
rate limits,
anomaly detection,
consent checks,
least privilege,
audit trace,
revocation,
human approval,
external-agent quarantine.
8. Agent permissioning becomes security architecture, not product polish.

This video strengthens the point that tool access is dangerous.

A bad AI answer is bad.
A bad AI answer with tools is worse.
A compromised agent with tools is an incident.

OMNI needs:

no broad tool grants,
per-action capability envelopes,
role-scoped access,
patient-scoped access,
tenant/operator boundaries,
purpose-of-use checks,
read/write separation,
action preview,
human approval for high-risk actions,
emergency shutoff.

Keeper:

The more powerful the tool, the narrower the capability envelope must be.

Where it lands

§C Governed Capability Exchange: massive. This is exactly why external agents, tools, action APIs, and capability exchange need security architecture.

AI governance/security control plane: massive. Complements the prior IBM governance/security video.

Build OS: major. Dependency scanning, agent sandboxing, red-team tests, exploit-aware development, secure defaults.

CNS / orchestration: major. Every orchestration action needs permissions, traces, anomaly monitoring, and stop controls.

Knowledge Reservoirs: major. Source content can be malicious; retrieved text must be authority-labeled and instruction-isolated.

Identity / Contact / Actor: massive. Deepfake/social-engineering risks make deterministic identity and authorization essential.

Messaging / Communications: massive. Phishing, impersonation, malicious links, patient/staff messages, and external-line controls.

Doctrine / primitive pressure

Potential concepts:

AI_threat_model
malicious_agent
defensive_agent
AI_gateway
prompt_injection_defense
untrusted_content_boundary
tool_call_anomaly
agent_permission_envelope
external_agent_quarantine
deepfake_identity_risk
voice_not_identity_proof
phishing_resilience_policy
CVE_dependency_monitor
exploit_window
AI_red_team_case
kill_chain_monitor
PHI_exfiltration_scan
ransomware_response_runbook
agent_kill_switch
shadow_AI_detection

Keeper doctrine:

Every OMNI agent/tool capability must be designed twice: once for the helpful workflow, and once for how a malicious actor would abuse it.

Second keeper:

Untrusted content may inform OMNI, but it must never instruct OMNI.

Third keeper:

Voice, video, polished language, and apparent familiarity are not authority. OMNI must verify identity and permission through governed channels.

What not to import blindly

Do not overreact by freezing all agentic work.

Do not treat this as generic cybersecurity only; the specific threat is AI + tools + autonomy.

Do not rely on staff intuition to detect AI-generated phishing/deepfakes.

Do not allow broad agent permissions because “the model is safe.”

Do not let source reservoirs ingest arbitrary web/video/document content without untrusted-input handling.

Do not allow external agents to call OMNI capabilities without authentication, authorization, rate limits, trust scoring, and audit.

Priority / confidence

Priority: 5/5 for security / §C / AI gateway
Confidence: 5/5
Suggested analysis depth: full_semantic

This should be routed into §C security, AI gateway, untrusted-input doctrine, agent permission envelopes, identity/deepfake risk, Knowledge Reservoir safety, Build OS red-team cases, and enterprise AI controls.

Short keeper:

AI gives attackers agents too. OMNI’s advantage cannot just be smarter agents — it must be governed, permissioned, monitored, defensive agents.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus deep-read extraction  ·  layer: `analysis_nonbinding`  ·  EVRUN-2026-000001 (★SPINE — offensive threat-model; pairs 050/079/081/070)
- reviewer: `Opus` · type: `AI assistant` · at: `2026-06-09` · purpose: `formalize Review 001 → structured extraction → registry` · binds nothing (`GRD-036`/`GRD-044`) · [full agent extraction d5e2e1d5]

**31 clusters. Jeff Crume/IBM offensive taxonomy. Keeper: AI gives ATTACKERS agents too — OMNI's advantage can't just be smarter agents, it must be governed/permissioned/monitored/defensive agents.**
1. **`offensive_ai_attack_taxonomy`** — six classes (login-abuse/agentic-ransomware/AI-phishing/deepfake-fraud/CVE→exploit/full-kill-chain) → defense obligation map (each → envelope rule + CNS monitor + red-team fixture + trust tier). §A/§C/security(primary)/Build-OS(red-team catalog)/capability-topology/CNS. "six different examples of attacks" 0:43. ABSENT→spine.
2. **`symmetric_agent_architecture`** — every OMNI agent primitive (tools/planning/memory/RAG/multimodal/action/autonomous) threat-modeled twice: helpful + malicious. §B/§C/§8/CNS/capability-topology/Build-OS/security/domain-contracts(Scheduling/Messaging/D7/D6). "agent + LLM + tools" pattern 1:26. PARTIAL→spine.
3. **`skill_floor_collapse` / `vibe_attacking`** — attack TAM expands to non-technical; OMNI moat = governance semantics + authority gates not model-IQ/attacker-scarcity (counters 089). §A/§2/§10/security/Build-OS(anti-089)/capability-topology. "vibe coder… vibe attacking" 17:36. ABSENT→spine.
4. **`ai_login_recon_attack` (BruteForceAI)** — agents discover login surfaces, LLM-parse forms (~95%), credential-spray at scale; OMNI auth surfaces need rate-limits/lockout/anomaly/no-agent-credential-stuffing. security/§C/Identity-RBAC/capability-topology/Messaging. "95% of cases, correctly identify" 2:04. ABSENT→spine.
5. **`ai_ransomware_agent` (Prompt Lock)** — agent plans→targets→values files→encrypt/exfil/erase code→ransom note→polymorphic; CNS/build agents need read/write separation + PHI exfil scanner + shutoff + backup/rollback. security/§C/CNS/Build-OS(`ransomware_response_runbook`)/D7. "write the ransom note for you" 5:31. ABSENT→spine.
6. **`polymorphic_ai_attack`** — generative variation defeats signature detection; defend w/ behavioral anomaly + tool-call graphs + static command verify. security/Build-OS(eval fixtures)/CNS(anomaly). "polymorphic attack where it changes" 5:54. PARTIAL→spine.
7. **`raas_commoditization`** — full attack stack as cloud service, near-zero skill floor; OMNI needs least-privilege defaults + CVE monitoring + revoke-all-tokens kill-switch Day-1. security/Build-OS/§C. "ransomware as a service… by AI" 6:30. ABSENT→spine.
8. **`phishing_cue_obsolescence`** — untrain grammar/spelling heuristics; polished AI phishing = false confidence; high-risk actions need workflow verification not intuition. §A/security/Messaging/Identity-RBAC(verify channel+identity)/Build-OS. "untrain all of our users from that" 7:23. ABSENT→spine.
9. **`ai_crafted_phishing`** — LLMs (incl unguarded/dark-web) produce perfect multilingual lures; polish ≠ legitimacy. Messaging/§A/security/KR(ingested text = evidence not instruction). "generate their text in perfect English" 7:36. PARTIAL→spine.
10. **`hyper_personalized_phishing`** — AI scrapes social/public data → precision impersonation per patient/staff/caregiver; messaging needs sender-verify/link-policy/external-quarantine. Messaging/security/§7.8/§A/Identity-RBAC. "scrape all of your social media posts" 8:48. ABSENT→spine.
11. **`phishing_economics_asymmetry`** — AI ≈ human quality at ~200× speed (5min vs 16hr) + improves faster; scale governed workflows + gates not vigilance. §C/security/Messaging(rate-limits on AI-drafted sends)/Build-OS. "five prompts and five minutes" 9:04. ABSENT→spine.
12. **`unguarded_offensive_llms`** — defender refusals don't bound attacker tooling; OMNI defenses harness-side (allowlists/gates/static-verify/envelopes) independent of vendor safety. §A/security/Build-OS. "some are on the dark web" 8:28. PARTIAL→spine.
13. **`deepfake_fraud_class`** — gen-AI clones voice/video from short samples → impersonation for orders/payments/consent/staff-instructions; voice/video NOT identity proof. §A/§C/security/Identity-RBAC/Messaging/capability-topology/domain-contracts(D6/D7). "we call a deepfake" 9:58. ABSENT→spine.
14. **`minimal_sample_deepfake` (pairs 050)** — ~3 sec audio suffices; voice biometrics insufficient; step-up auth for meds/labs/payments/consent/refunds. §A/Identity-RBAC/security/capability-topology/CNS(`voice_authentication_state`). "as little as three seconds of audio" 11:15. ABSENT→spine (promote as ONE spine w/ 050 default-fake).
15. **`deepfake_wire_fraud_precedents`** — $35M audio / $25M video exec impersonation; payment/refund/vendor-change paths need multi-party approval + out-of-band verify + immutable audit + amount caps. §C/security/D6/Identity-RBAC/Messaging. "wire 35 million dollars" 11:28. ABSENT→spine.
16. **`sensory_media_not_authority` / authenticated-real (pairs 050)** — "if you aren't in the room, you can't believe it" → identity via deterministic governed channels (session-binding/step-up/attestation); establish authenticated-real positively, default-fake everything else. §A/§8/Identity-RBAC/security/Messaging/capability-topology. "if you aren't in the room" 12:13. ABSENT→spine.
17. **`cve_to_exploit_automation` (CVE Genie)** — public CVE text → working exploit (51% success, <$3); non-coders weaponize vulns; OMNI needs CVE monitor + fast patch + connector supply-chain scan + per-connector disable. Build-OS/security/§C/capability-topology(connector inventory). "CVE Genie… writes the actual exploit code" 13:39. ABSENT→spine.
18. **`cheap_exploit_economics`** — offensive cost floor collapses w/ skill floor; minimize attack surface + static-verify agent-generated code before exec. Build-OS/security/§C. "51% success rate… Less than 3 dollars" 13:58/14:04. ABSENT→spine.
19. **`ai_polymorphic_malware_generation`** — AI generates obfuscated self-hiding malware; tool provenance + version pinning + sandboxed exec + connector anomaly. security/Build-OS/§C. "generate malware… then obfuscate" 14:29. PARTIAL→spine.
20. **`full_kill_chain_offensive_agent`** — single agent: recon→select→exploit→exfil→persona→ransom-calibrate→execute; §C nightmare needing actor+agent identity + trust records + rate limits + quarantine + consent + revocation + human commit gate. §C/§8/security(primary)/CNS/capability-topology/Identity-RBAC/Federation. "AI that runs the entire kill chain" 15:07. ABSENT→spine.
21. **`commercial_llm_weaponization`** — full kill-chain via mainstream commercial stack; no vendor immunity; model registry + envelope per route + gateway/DLP + adversarial red-team + lineage. §B/security(079 gateway)/Build-OS. "weaponizing Anthropic… popular AI system" 15:14. PARTIAL→spine.
22. **`synthetic_attacker_personas`** — agents fabricate false identities for extortion cover; non-human actor registry + external-agent quarantine + delegation-chain audit + no anonymous grants. §7.8/§C/Identity-RBAC/Federation/security. "create false personas and hide behind" 16:08. PARTIAL→spine.
23. **`agent_compromise_beyond_prompt_injection`** — danger not only "user tricks chatbot"; any untrusted content (message/doc/transcript/vendor-payload/email/website/reservoir/external-agent/caregiver/staff-note/OCR/calendar) may influence agent-with-tools. §A/§8/CNS/KR/Messaging/D7/security(081). "the agent is really running the whole thing" 4:40. PARTIAL→spine.
24. **`untrusted_content_never_instructs`** — external content may inform/change-mind as evidence; never instruct/change-code or bypass gates; instruction isolation + output scan at every boundary. §A/KR/security/CNS/Build-OS. "feed them in… figure out what we're going to do" 4:52. PARTIAL→spine (promote w/ 081).
25. **`agent_permission_envelope`** — bad-answer < bad-answer-with-tools < compromised-agent-with-tools; no broad grants, per-action envelopes, role/patient/tenant scope, purpose-of-use, read/write separation, action preview, high-risk approval, emergency shutoff. §C/capability-topology/RBAC/CNS/security/Build-OS. "equipped with the tools to write code" 0:25. PARTIAL→spine.
26. **`defensive_ai_imperative`** — deploy governed defensive agents: injection-detector/PHI-exfil-scanner/tool-call-monitor/identity-risk-classifier/deepfake-flag/external-agent-trust-scorer/ingestion-sanitizer/output-safety-critic/audit-anomaly/incident-runbook. CNS/security(079 control-plane)/§A/§B/KR/Build-OS. "good AI versus bad AI" 18:18. ABSENT→spine.
27. **`dual_use_pen_test_framework`** — same frameworks serve defense (pen-test) and offense; Build-OS runs agent-surface pen-tests; capability-topology exposes only policy-filtered actions. Build-OS/security/§C. "test your security, or by a bad guy" 1:13. PARTIAL→spine.
28. **`offensive_escalation_trend`** — attacks intensify; secure-defaults + hostile-by-default ingestion are wedge prereqs not post-MVP; elevates security ahead of builder-optimism in v4 sequencing. §A/§10/security/Build-OS/future-watch. "just seeing the beginning" 18:02. AFFIRM→vocabulary.
29. **`data_poisoning` (NOT in §1 — user angle)** — valid OMNI threat but absent from this source; route from 079/OWASP/reservoir gates. KR/security/§B(watch). (no §1 anchor). PARTIAL→low-authority-watch→watch.
30. **`model_extraction` (NOT in §1 — user angle)** — model-stealing via API abuse in threat model but absent here; route from dedicated sources. security/§C(watch). (no §1 anchor). PARTIAL→no-op→watch.
31. **IBM z/OS cert promo** — vendor chrome; ignore (GRD-039). none. no-op→reject.

**Net-new (promote — author at destination gate):** `offensive_ai_attack_taxonomy`(six-class map), `skill_floor_collapse`/`vibe_attacking`(anti-089), `ai_login_recon_attack`, `ai_ransomware_agent`, `phishing_cue_obsolescence`, `phishing_economics_asymmetry`, `hyper_personalized_phishing`, `cve_to_exploit_automation`, `cheap_exploit_economics`, `defensive_agent_fleet`(Knox monitor list — name at CNS-contract), `unguarded_offensive_llm`. DEDUPE (one promotion): `minimal_sample_deepfake`+`sensory_media_not_authority`→registry `authenticated-real`/`default-fake` (050+080 ONE spine); `full_kill_chain_offensive_agent`→zero-click/kill-chain cluster (081+080 sharpen). SHARPEN (don't re-mint): `symmetric_agent_architecture`→capability-topology+§C; `agent_permission_envelope`→§C/REV-176; `untrusted_content_boundary`/`content_not_instruction`→zero-click (081 primary); `AI_gateway`→079; `nonhuman_identity`/`external_agent_quarantine`→§7.8/Federation; `agent_kill_switch`→Build-OS/CNS(089); `voice_authentication_state`/`authenticated_real_posture`/`default_fake_assumption`→050+080 pair; `prompt_injection_defense`→081 mechanism; `polymorphic_ai_attack`/`tool_call_anomaly`→security/Build-OS fixtures; `PHI_exfiltration_scan`/`source_ingestion_sanitizer`→defensive fleet; `shadow_AI_detection`→079. REJECT: `malicious_agent` standalone (cover under symmetric+nonhuman-identity); `data_poisoning`/`model_extraction`(not evidenced §1 — watch cross-refs); IBM product names (BruteForceAI/Prompt Lock/CVE Genie = red-team case labels not OMNI schema); Cherny "safety gates obsolete" = explicit counter-doctrine. **Reread (MANDATORY pairs):** 080+050 trust spine (050 R003 cl.10-11 + 080 cl.13-16 → ONE authenticated-real/default-fake + step-up doctrine); 080+081 zero-click (080 broadens input inventory, 081 owns indirect-injection mechanism — before GRD-039 Tier-3 language); 080+079 governance/control-plane (079=ops, 080=threat — before AI-security control-plane contract); full kill-chain (080 15:00–17:55 + 081 autonomy scaling → §C gate admission: actor+agent identity + quarantine + human commit); deepfake→clinical/financial (D6/Identity-RBAC/Messaging before payment/consent/refill impersonation controls); CVE/exploit economics (13:00–14:22 → Build-OS dependency/connector scan); defensive-agent fleet (Knox list + CNS-contract + 070 HITL-permanence — monitors must not auto-commit care truth); phishing-cue obsolescence (7:00–9:46 → operator/staff training + Messaging outbound, not generic SEC awareness); 089 builder-optimism counter-read (skill-floor + zero-click when evaluating any "reduce HITL because model improved"). DO-NOT-reread 080 for data_poisoning/model_extraction (route OWASP/reservoir/079).

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000001` (ai-corpus synthesis + routing) · per-source extraction: **§3 Review 003** (this file) · concept_registry: `analysis/EVRUN-2026-000001_ai-corpus-synthesis-and-routing/EVRUN-2026-000001_ai-corpus_concept_registry_and_routing_map.md` · anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · promotion: gated (`GRD-036`/`GRD-044`) — clusters route to thesis-v4 + CNS/Build-OS/security/capability-topology contracts via registry; no direct binding from this file.

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged strong **§A AI-threat-model / AI-security** (pairs w/ 079 governance + 070 Anthropic); IBM-channel; cert-promo in source.

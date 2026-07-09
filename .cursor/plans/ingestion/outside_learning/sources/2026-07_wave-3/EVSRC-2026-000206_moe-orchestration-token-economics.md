# EVSRC-2026-000206 — <title or TK>

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000206_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000206`  ·  filename (proposed): `EVSRC-2026-000206_moe-orchestration-token-economics.md`  ·  slug (proposed): `moe-orchestration-token-economics` *(file NOT renamed here — `GRD-038`/`GRD-039`; Opus-main folds)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=d-hJa-yDJmQ`  ·  source_title: `New AI models, token minimization and IBM's new sub-1nm chip`
- channel_or_org: `IBM Technology ("Mixture of Experts")`  ·  speaker: `Tim Hwang (host); Huiming Bu; Abraham Daniels; Martin Keen; Gabe Goodhart; Sascha Brodsky`  ·  published_at: `Jun 26, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `screenshot + pasted transcript`
- content_type: `AI hardware / sub-1nm chip / model orchestration / virtual model endpoints / GLM-5.2 / Sakana Fugu / domain tooling / A24 DeepMind partnership / token economics / tokenmining`  ·  source_reliability_context: `IBM panel discussion. Mixed-source strategic commentary; useful for runtime economics, orchestration-as-product, model admissibility, and outcome-per-token metrics. Treat benchmark/model claims cautiously.`  ·  topic_tags_light: `[semiconductor-3d-scaling, memory-density, model-orchestration, virtual-model-endpoint, model-admissibility, open-weights-governance, token-economics, ai-unit-economics, local-offload-models, domain-workflow-tools, domain-traces-as-asset]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Tim Hwang` · role_in_source: `host / moderator` · affiliation_at_publication: `IBM (Mixture of Experts)` · speaker_type: `educator / host` · authority_context: `frames segments; not the technical authority` · identity_confidence: `high_from_operator_metadata`
  - name: `Abraham Daniels` · role_in_source: `panelist` · affiliation_at_publication: `IBM — Senior Technical Product Manager, Granite` · speaker_type: `operator / product` · authority_context: `model-product + enterprise-adoption + token-economics lens` · identity_confidence: `high_from_operator_metadata`
  - name: `Martin Keen` · role_in_source: `panelist` · affiliation_at_publication: `IBM — Master Inventor` · speaker_type: `practitioner / inventor` · authority_context: `orchestration + open-weights-hosting + metrics-absurdity lens` · identity_confidence: `high_from_operator_metadata`
  - name: `Gabe Goodhart` · role_in_source: `panelist` · affiliation_at_publication: `IBM — Chief Architect, AI Open Innovation` · speaker_type: `architect / practitioner` · authority_context: `sharpest technical read — virtual-model-endpoint, non-determinism, local models, not-all-tokens-equal, workflow-tools-vs-vibe` · identity_confidence: `high_from_operator_metadata`
  - name: `Huiming Bu` · role_in_source: `interviewee (hardware special segment)` · affiliation_at_publication: `IBM — VP, Silicon Technology Research & Development` · speaker_type: `researcher` · authority_context: `sub-1nm / nano-stack semiconductor authority` · identity_confidence: `high_from_operator_metadata`
  - name: `Sascha Brodsky` · role_in_source: `interviewer (hardware special segment)` · affiliation_at_publication: `IBM (Mixture of Experts)` · speaker_type: `journalist / host` · authority_context: `interviews Huiming Bu` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `IBM Technology ("Mixture of Experts")`  ·  interviewer / moderator / host: `Tim Hwang (panel) · Sascha Brodsky (hardware segment)`
- event_context: `Weekly AI-news expert panel; one episode with four segments (IBM sub-1nm chip · new models Sakana Fugu + Z.ai GLM-5.2 · A24 × Google DeepMind film-tools deal · "token mining" culture piece).`  ·  perspective / conflict notes: `IBM-produced show — vendor framing on Granite/Malaya/local models; hardware segment is IBM promoting its own node. Treat capability/benchmark claims as vendor-positioned; the reusable OMNI content is the substrate/economics reasoning, not the product claims (`GRD-039`).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(Opus-main folds — not this agent)* · [ ] update coverage matrix *(Opus-main folds)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introduction
0:01
This transistor. The technology we talk about at the Angstrom provides 50% better performance, or it will
0:08
save 70% more power when it does the computing. This is a massive improvement that our industry hasn't seen for a long time.
0:19
All that and more on today's Mixture of Experts.
0:27
I'm Tim Hwang and welcome to Mixture of Experts. Each week, MoE brings together a group of the researchers, builders
0:33
and thinkers working in artificial intelligence to walk you through the week's news. On this week's episode, we've got Abraham Daniels, Senior Technical Product Manager
0:41
for Granite. Martin Keen, Master Inventor. And Gabe Goodhart, Chief Architect, AI Open Innovation.
0:47
We're going to talk a little bit about A24's partnership with Google DeepMind this week. We'll talk a little bit about the phenomenon of token mining.
0:54
And we're going to talk a little bit about these new models that have hit the scene. Sakana Fugu and GLM 5.2.
0:59
But first we've got a special segment with Sascha Brodsky interviewing Huiming Bu VP of Silicon Technology Research and Development on the sub-1nm chip.
IBM's new sub-1 nm chip
1:12
Hi, Huiming. Thanks so much for joining. Hi. Thank you for having me. So before we get into the technology, help us understand
1:21
why this announcement matters for someone who doesn't follow semiconductors every day.
1:26
Why is breaking the one nanometer barrier such a significant moment? So let's start with what semiconductor
1:34
essentially are the chips. I would say charge every single thing
1:41
we are doing in our modern life when it comes to devices. So if you look at it at that angle and realize
1:49
our industry has been relying on semiconductor for transistors scaling for the last 60 plus years. What does it mean?
1:58
A MOSFET actually was invented in 1959. And since its introduction
2:05
we have been making the transistors smaller and smaller,
2:10
more powerful, and consumes less energy.
2:16
So far, we have been successful for most of the time, but in the recent years we have been hitting
2:24
some of the very, very, very difficult challenges. Takes billions of dollars to invest, provided solutions.
2:30
And we are at a point now looking back at the 60 plus years we have been doing transistor scaling in the X direction
2:39
and a Y direction, essentially, in a two-dimensional world, which we call it defined by lithography scaling.
2:46
Today, this sub one nanometer announcement is for the first time in the history of the semiconductor industry.
2:55
We are stack the device in the vertical direction, Z direction, which is a direction our industry has not explored in the past 60 plus years.
3:07
And now we are at the end of the shrinking in the two dimensional.
3:12
The third dimension of Z provides tremendous opportunity for the future of scaling. So interesting.
3:19
Now, for years, we've heard that Moore's Law was slowing down, that the industry was running into the physical limits of silicon.
3:27
What challenges were you trying to solve with this technology? When I joined the company in 2005,
3:34
we faced a major challenge in transistor. So what happened back then
3:40
is that when we tried to make the transistor smaller and one very, very important material in the transistor is a dielectric.
3:49
We call it a gate dielectric. And is that a point of time it was silicon dioxide.
3:55
It started to leak like crazy when you make it thinner. And we provided the solution.
4:02
The solution came with a new materials. We introduced high-k metal gate
4:10
to replace the silicon dioxide and a polysilicon. At that point of time was a gating material for a traditional transistor
4:19
and it was suppressed. The gate leakage and the scaling. We call the Moore's Law continued.
4:25
Another example is only a few years later. What happened is there is for the first
4:32
45 ish years of the transistor scaling, we have been using a planar device.
4:38
As I mentioned in 2D that is called a planar device,
4:44
and when you make a device smaller, the short channel effect shows up, which means
4:49
there is another leakage starts to show up. Electrons start to flow in the channel when the device is even turned off.
4:57
So at that point of time, our engineers introduced FinFET. I can show you a cross section, actually, about of
5:04
how a FinFET looks like. This is a gate. This one is a fin
5:11
similar to the fin of a fish. That's why it's got a FinFET the gate wrapped around this thing on three sides.
5:18
Left top and the right side. So it's called a tri gate device.
5:23
And this device has much better gate control. Hence the suppressor leakage in the channel.
5:31
These are a couple of examples of the key challenges. One are the material side and one on the device architecture side
5:39
we faced. I would say at this point, more than ten years ago. IBM is calling this the world's first sub nanometer chip technology.
5:48
What is sub one nanometer actually mean today? Is that literally about the transistor size,
5:54
or is it shorthand for a new generation of manufacturing today? The technology node name
6:02
is no longer directly correlated to any physical dimensions in the real device.
6:10
It actually becomes a node name quite a few years ago. And it's you can consider it's just a name
6:17
to show the technology keeps evolving. So after two nanometer today, best available technology
6:25
in manufacturing is two nanometer after two nanometer is 1.4 nanometer
6:30
after 1.4 nanometers is one nanometer after one nanometer. There's 7 Angstrom technology.
6:36
But one thing you probably have realized is if you divide the number, the new number versus the old one.
6:42
Generally speaking, the ratio is 0.7 that is called a scaling ratio. That is a real number.
6:49
So we have kept scaling ratio of 0.7 because the point 0.7 times 0.7 is essentially 0.49,
6:55
and 0.49 means your area of scaling, or in other words, your density keeps increasing.
7:03
That is the scaling factor. What are the phrases that stands out in this announcement is nano stack.
7:08
What actually is nano stack, and how is it different from the chip architectures that are being used today?
7:15
Yes. Great question. Here is the cross-section of the nano stack.
7:22
I'm going to let you just look at it for a few seconds. I explain what's actually in front of you.
7:30
So let's look at this direction. If you look at it, you're going to realize
7:36
there are two nanosheets here. This is one nanosheet.
7:41
Here is another one. They are not on the same plane.
7:46
One is on top of the other, but not exactly right on top of each other.
7:52
This is a transistor design. We call it vertically stacked and also staggered.
7:59
So think about two transistors. You stack them, but you also stagger them both in vertical direction.
8:06
That's why we're saying nano stack is a device enabling the transistor
8:12
stacking or scaling in the Z direction, in the vertical direction.
8:17
The beauty of this device is the following. One is these two devices or two wafers.
8:24
Top wafer from bottom wafer, top device, bottom device. They are actually not monolithically defined by litho etch process.
8:33
It is actually using a thin dielectric to bond them up. Also,
8:39
because of the thin dielectric bonding process, these two devices can be optimized
8:46
independently, which means you can use the best material
8:51
you can think about for the bottom device. Best material you can think about for the top device,
8:57
and as they can be optimized for performance independently.
9:02
The other unique nature if you look at this device is because they are stacked and staggered.
9:09
Both the front side of this top device and the back side of this
9:15
top device. Front side of the bottom device. Backside of the bottom device
9:21
can be contacted with your signal line, and a power line directly.
9:26
That itself provides tremendous density scaling benefit with this nano stack structure.
9:33
This chip packs nearly 100 billion transistors into something about the size of a fingernail.
9:39
At that scale. What are the biggest engineering challenges? Are you fighting heat, quantum effects, manufacturing
9:46
precision, or all of the above? So let's do it one by one.
9:51
I explained each of these. The thickness of each of the sheets is about a five nanometer.
9:56
You can consider there is some process margin with it, whether it's a five and a half or four and a half.
10:02
So let's talk about a quantum confinement effect using the four and a half nanometer sheet. Do we observe quantum confinement?
10:09
In fact, in this device, the most pronounced observation when you observe quantum confinement
10:16
effect is threshold voltage variation. So far, we have not observed the quantum confinement effect
10:25
in threshold voltage variation for the thickness down to four nanometer. So we are still operating in a safe zone away from the quantum confinement.
10:34
The second one you asked is heat effect. Yes, heat is a very, very important factor in this device.
10:43
The way to think about it is these devices that are vertically stacked, you have less heat dissipation path.
10:51
So you do have to have innovative way to provide thermal conduction,
10:56
just like how you do the electro conduction to do the same thing, to conduct thermal better in this device.
11:02
And we have engineering work to provide that solution as well. AI is driving unprecedented demand for computing power.
11:10
How much of this breakthrough was motivated by what you're seeing from generative AI and increasingly demanding AI workloads?
11:19
Yes, that is the fundamental reason we are enabling this device.
11:24
I spend quite some time to talk about why you would observe density benefit, but let me talk about the power performance of it
11:31
with this structure compared to two nanometers we announced in 2021.
11:36
By the way, as I mentioned today, the best, most powerful available chip is manufactured
11:44
with two nanometer. Consider that is the best world's best chip compared to that one.
11:50
This transistor. The technology we talk about at the Angstrom provides 50% better performance,
11:57
or it will save 70% more power when it does the computing.
12:03
This is a massive improvement that our industry hasn't seen for a long time.
12:08
That is why we are so excited when it comes to high performance computing, especially for AI computing.
12:15
Another thing I want to mention maybe share with this audience is the other benefit of this
12:21
transistor architecture provides when it comes to AI computing is the very significant extra size
12:30
scaling the nano stack provides 40% extra area scaling compared to the two nanometer.
12:38
That is a significant step forward in scaling that our designers haven't seen for more than a decade.
12:48
And all the AI computing requires memory. And SRAM is embedded memory solution with your computing unit.
12:57
This level of the SRAM density scaling enabled by nano stack will truly help AI computing to be a lot more efficient moving forward.
13:08
So finally, if we're sitting here ten years from now, looking back on today's announcement,
13:13
what do you hope people will say this breakthrough made possible? I would say this nano stack
13:21
architecture innovation is in the first time after 60 plus years in semiconductor industry
13:30
has truly made our computing logical device go from a 2D
13:36
to 3D in its design for the first time. That has opened a completely new dimension for the future of scaling,
13:46
which at least we can see 10 to 15 years of technology roadmap ahead of us.
13:52
Thanks so much for joining me. This has been a wonderful opportunity and I appreciate you being here.
13:58
Thank you for having me.
New AI models: GLM-5.2 & Sakana Fugu
14:03
First, I really want to talk about these two new models that have hit the scene and have been at least eating my social media feeds,
14:12
completely over the last week or two. One of them is a new model, a coding model from Z.ai,
14:18
a Chinese lab called GLM 5.2. And the other one is a model by a Japanese lab called Sakana called Fugu.
14:25
It's sort of an agentic model. And we'll talk about both of them. You know, I think the first one I wanted to talk about was Sakana, though,
14:32
because we had never, ever talked about them. They were not on my radar at all. This is the first time I had heard about them.
14:39
And the numbers for the Fugu model are really shocking, right?
14:44
They have these charts where it's like, oh, you know about Mythos, that model that everybody's been talking about for a really long time? Well, we're we're already there.
14:51
And actually above in some respects, I guess, Martin, maybe I'll bring you in. What what's going on here?
14:57
I thought Anthropic and OpenAI were, you know, so far ahead, so on the cutting edge that no one was ever going to catch up.
15:03
And as yet, I guess, I don't know, maybe I just haven't been watching the Japanese AI scene, but the idea that a model could come out
15:08
and have these kinds of metrics, it's a little bit shocking, isn't it? Remember when Claude Mythos was like the best of the best?
15:15
That was like last week? Yeah. So now we have something else from. Yeah, from apparently out of left field.
15:21
So yeah, it's absolutely crazy. And you know, it does particularly well in coding tasks.
15:27
So it's doing very well on LiveCodeBench benchmarks, things like that. Which, you know,
15:33
already, we could say the the big frontier model labs, they are absolutely laser focused on this.
15:38
It's not like they've picked a metric that nobody was really looking at and then suddenly maxing on that.
15:44
So, yeah, this is this is really impressive to see and just, just kind of the whole Sakana AI
15:51
platform is really interesting because this is a multi orchestration model. So you send your request in and it can go to one of multiple models.
15:58
And in fact the models can change at any point. So if a model goes away or a better model comes along it can kind of slot in there.
16:05
And it is interesting to think about going forward. Are we going to see more multi orchestration kind of harnesses
16:14
where we just go to multiple platforms multiple models and and that changes constantly.
16:19
Or are we going to continue to see this focus where we you know. We're all getting super excited about this. This new model that's come out and we're suddenly sending
16:26
all of our workloads to that new model for a couple of weeks until the next one comes out. And I'm really interested to see where that goes, because this, this whole idea
16:35
of multi-agent orchestration and a platform means that if there's one model that's really good at a particular task, and it's another model
16:42
that's really good at another, that they can diverge, and it will be interesting to see where that goes.
16:48
Gabe, do you, do you buy the numbers here? I mean, I don't know, I look at these stats and I don't know, they're just sort of so unbelievable in a certain respect,
16:56
you know, my immediate instinct is, oh, is this metrics cherry picking. Like, should we, should we buy kind of what they're putting forwards
17:03
or I guess like Martin I mean, you know, Martin sounds like you you buy it. This really is the real deal.
17:09
I know Gabriel on a similar, similar page. I think the numbers are great. It's really, really cool to see success with this architecture.
17:17
But I think we're we're doing it a disservice by calling it a model. Because fundamentally, that's not the innovation here.
17:23
Like, yes, there is a single novel model here that is the router. But everything else is all the existing frontier labs.
17:31
It's just passed through. So what they are doing is not actually creating a. Net new model that can achieve these benchmarks.
17:37
Like you were alluding to. Martin. They are figuring out how to get the best results out of the models that already exist,
17:43
and stitch those together in a meaningful way to solve problems. And many folks on this panel and in other discussions have been saying
17:51
for a long time that there's a lot of greenfield in this orchestration space.
17:56
But I think in some ways, the fact that every, every endpoint looks like
18:03
a list of JSON objects with a role and a content field, and, you know, you could put whatever you want behind that API.
18:11
And in this case, what they are putting behind that API is a carefully routed, orchestrated multi-model ecosystem.
18:17
So calling that a model endpoint is not very accurate. And the other piece of this that is interesting
18:25
is that one of the claims they made, is that this gives a,
18:31
an enterprise resilience to model fluctuations and model changes. And that's true.
18:37
But on the flip side, it also means that your quality could change wildly depending on which models it actually gets routed
18:45
to behind the scenes and how well the routing performs for a given task. So there's you're essentially trading the fact that you'll always
18:54
get some answer for the fact that you really can't predict what answer you're going to get. You get even more non-deterministic because now you're not just dealing
19:02
with the non determinism of the specific model, but you're dealing with the additional non-determinism of which model your request is even going to land on, or which
19:10
collection of models are going to service the subcomponents of your request. So it's it's a wide open field.
19:18
So to your question about do I believe the benchmarks? Yes, I believe that at their perfectly routed settings,
19:24
they are actually able to achieve better than any of the individual models can achieve on their own? Do I believe that that's going to be the floor of quality?
19:32
No, no I don't. So I think it's probably just got a much wider aperture for quality than the other ones,
19:37
because it's got a much wider set of quality models behind it. Yeah. It's like those robotic demos where the robot does it like perfectly
19:45
and you're like, this is the trial one of 100, and the other ones are the robot, like failing to be able to open a door
19:51
just like falling over and up. But usually it's not trial one. Usually it's trial like 74 out of 100 just right.
19:59
But as yet, I mean, so all these points are granted. Abraham. Are we?
20:05
I actually wonder whether or not we worry about the wrong thing with AI. So obviously the big stress around Fable 5 about Mythos has been, say,
20:13
the security aspects of all this, right? That the models are now so good that it poses this huge cybersecurity risk. And I think granted. Right.
20:21
What we're seeing here is an assemblage of models, not a model in of itself, but it kind of says that maybe like the
20:27
the is the cat out of the bag already. Right? Like if we feel like Mythos is a model that's so dangerous that we need to do Project Glassing or whatever, isn't the fact that you can kind of stitch together
20:34
a bunch of models and get to the same result mean that we're trying to control, like, the wrong thing, or in the very least we can.
20:40
We can already get the kind of scary things we're worried about with sort of not commodity parts, but certainly like off the shelf parts. What do you think about
20:48
that? I mean, I've never thought of it that way, to be honest. It is interesting that you bring that up
20:54
the way I kind of saw this from Sakana's point of view was it kind of pitches frontier capability without the risk of export controls, to be
21:00
honest, or government intervention without any sort of,
21:05
control over the actual user of the model. So I kind of saw this as like maybe not a direct shot. But like, you know, worse at times, you know, US
21:12
frontier models are getting restricted. Enabling orchestration gives you a little bit of a protection around what you can and cannot use.
21:19
Given you could build the same capability and aggregate kind of to your point,
21:25
I was really going to echo a lot of what Gabe said in this regard.
21:31
Like, I don't see this as a fundamental jump in terms of a new model. I think we're gearing towards orchestration is the product as
21:36
as opposed to the actual model. Is the product really with Sakana? And I think it does a really good job
21:41
of kind of providing a very simple user experience, like the idea that it's all behind an API is great because the user doesn't have to care about the orchestration or know what models actually getting
21:51
hit with respect to a particular, you know, query. So I thought that was a really good direction. And I think that's really where things are going to start going in terms of being able
22:00
to build out frontier capabilities as opposed to frontier models and really focusing on that aspect of how do you actually get the most out
22:06
of a model for a system of models or orchestration of models for the user? And just to jump on that, you know, something that I know you focus a lot on.
22:14
Abraham is, essentially this virtual model idea
22:22
and what you can do behind a virtual model endpoint to get the most out of a collection of models or even an individual model being orchestrated carefully.
22:31
So, the Malaya project out of IBM is a great example of this, and it's not aiming necessarily at pushing that frontier.
22:36
So one thing I'm really excited about is taking this same concept of a virtual model endpoint and bringing it to the small scale.
22:44
So maybe it's not going to push those capabilities, but if it could push Sonnet capabilities and run on your smartphone
22:51
or run on your commodity laptop, that might actually be the real innovation where we can take we can get acceptable quality in a much
22:57
like order of magnitude smaller footprint than we would based on a single model just based on the weights.
23:05
So I'm really excited for this overall trend of orchestrated virtual models.
23:11
Chasing Mythos and Fable is a lofty goal, and it definitely makes headlines
23:17
and it's really cool, but I think the real impact is going to be at horizontal spread of smaller models
23:23
with great capabilities. Let's make me take a few minutes to talk a little bit about Z.ai and the new GLM 5.2.
23:30
Gabe, you just commented, maybe we'll stay on you with these coding models. I'm not doing coding day in, day out. I don't know if you've played with the model yet,
23:38
but curious about kind of like just your your taste test. You know, I think we can look at the metrics, but really is someone who's doing this day
23:45
in, day out, I feel like you've got probably a better feel for like, what's the is there a good you know, TFR for the model. Is there a good kind of like
23:52
what's the what's the taste of this one. Do you like it. Yeah. Yeah. So so you know, I guess in fairness I haven't tasted this one.
23:58
I've, I've read I've read about other people's tasting experiences, but I haven't tasted it myself. And a lot of that. Oh, it's you
24:04
know. Yeah. Exactly. Exactly. Yeah. Yeah, I've got the flavor profile, but
24:10
no, I think, you know, staying on that point for a minute, one of the things that's interesting
24:15
is that with these open weights models pushing size frontiers that rival the frontier labs,
24:22
what we're really starting to hit also is usability gates.
24:28
Right. So I do the vast majority of my coding in a professional capacity because when I'm not doing that, I'm chasing children around and
24:36
there's not a lot of time for writing code while I'm chasing children. And given that I'm basically gated behind what is acceptable to do
24:43
in my professional capacity, so I'm not able to actually pull this model locally because it's enormous. And, you know,
24:49
I also am not allowed to send any of my professional work to GLM. So, you know, that that's just an interesting aside that,
24:55
yes, this is really cool because it's an open weights model. But the size is still a physical limitation for tinkerers like myself that want to just sort of unbox it and play with it.
25:02
That said, you know, it still is the story we've been telling over and over again over the past couple of years
25:09
is that we get major leaps in quality out of the proprietary labs and then open models, often out of China, catch up in a meaningful way.
25:16
And the interesting thing that I think is that it's not just one Chinese lab that's doing this. This wasn't another round of
25:22
DeepSeek or another round of Qwen. This is, you know, another another lab that, yes, has been making great models for a while but hasn't
25:30
been the one grabbing the headlines. And now they've kind of surged ahead by a nose and we'll see who wins the race type of thing. But
25:36
you know, I think it's awesome to see that these capabilities keep staying on the frontier. And I also think it's really cool
25:43
that the innovations at the model architecture level are continuing to be published in the open. So that was one piece
25:49
that I looked into with this is how they, you know,
25:56
which which architectural widgets are they borrowing from which other models? It's highly inspired by the latest DeepSeek architecture.
26:08
But it's it's able to actually bring speed and quality at an extremely long, context length, to an extremely large model. And that's that's awesome.
26:15
So, I love seeing those quality, you know, pieces pushed and again, true to myself, I like things that I can hold in my hands.
26:23
I hope this same architecture gets released in a much smaller
26:28
footprint, say, approximately 100 billion parameters
26:34
that fits on a DGX Spark so that I can play with it myself. Martin and I actually want to pick up on the point that Gabe is making.
26:41
You know, it's kind of interesting. It feels like out of the kind of Chinese market for models it seems like there's a new, new player,
26:49
you know, every few months. Right? We're like, oh, wow. Is Z.ai, their new, it's not just like another DeepSeek thing versus I think it feels like in the US
26:56
market, we've gotten very much into the mode of like, okay, OpenAI is doing one now Anthropic is doing one, OpenAI is doing one, but there's not so much like we're blindsided by a new lab
27:04
that comes out with a model that's like, you know, kind of capturing the headlines. And I guess kind of the question is like, you know, do you feel like the US
27:12
market is like almost insufficiently competitive, like, you know, you only have these two labs now that are doing like a lot of the model
27:18
work versus where in the US or in China, you feel like there's always a new lab kind of popping up?
27:23
Well, I was not even aware of GLM models at all until this 5.2 came out.
27:29
So to me, this is just something out of left field. But of course it's not. I mean, this 5.2 tells you something.
27:43
This is not their first not their first rodeo. So yeah, I mean, it is an interesting point in that
27:48
there are so many, so much innovation coming out of a, you know, a country that has been traditionally restricted with its compute capacity
27:56
as well for being able to build these models. But, it is also interesting the direction
28:02
that this has gone, because it seemed like the direction initially we were going is you have big frontier models from the big labs, you know, the big three
28:11
that we're always talking about. And then you have these open weights models, which are maybe nine months behind everything,
28:18
but they're also a bit smaller. I can run them maybe on my laptop or a dedicated GPU. Well, that is not really the case here.
28:24
This this model. This this GLM 5.2 is about the same size
28:29
as Claude Sonnet 4.6. It's enormous. So these are not models that you're just going to kind of take and run in your basement anymore.
28:37
These are models that need to be deployed somewhere to go to Gabe's point. Like, if I want to access this model now, firstly it needs to be somewhere that I can get it because I can't install it myself.
28:45
And now we have all sorts of governance issues as to, well, am I allowed to access it and who is hosting it for me,
28:53
and what sort of workloads can I send to it and can I trust who's doing the hosting, all that sort of stuff as well? But also it is
29:02
great to see that this research is now it's published, it's available for everybody to see. It just speeds up the whole development
29:09
market for all of this. And I've been been following along with, with some of the people who have been able to use this model.
29:16
And it does seem that in coding tasks in particular, it's doing a great job with a few little caveats. Like apparently
29:25
it had a very large Mandarin training data set. So it will just like, blurt out
29:33
random Mandarin phrases, apparently, even when you're talking to it in English. So you never know when that's coming along.
29:40
But yeah, just kind of fascinating to see how these things are developing.
AI in the film industry
29:49
Well, I'm going to move this on to our next topic today. Really interesting headline. We've been kind of having a subplot of this, you know, as we get into the summer here at MoE,
29:58
which is, I think, the kind of relationship between the, you know, emerging AI industry and, you know, filmmaking, art, entertainment.
30:06
And there was a big partnership that was announced between Google DeepMind and A24, which is the studio behind movies
30:13
like The Back Rooms and Marty Supreme and kind of known as in some ways, like a kind of prestige sort of film studio.
30:21
And, you know, the interesting thing is basically what it sounds like is DeepMind is going to team up with A24, and they're going to build new
30:27
AI tools for filmmakers to use. And so this is a little bit different from,
30:33
oh, hey, they're going to just start producing AI movies. It's a little bit thinking a little bit about the back end kind of toolkit.
30:39
And Abraham, maybe a question for you. You know, I don't think it's unfair to say that, like the relationship
30:44
between entertainment and the AI industry has been pretty fraught. I would say, you know, a lot of people do not like what the AI companies have been doing.
30:52
And one way of doing this partnership is maybe a kind of like, you know, olive branch peace deal to say, well, look, look,
30:57
we're going to work with you to develop tools to do filmmaking. We're not going to just try to do, you know, AI generated film or whatever.
31:06
I guess question for you, Abraham is like, do you think this, like, changes the narrative? Like, is this the beginning of what a beautiful relationship might look like?
31:13
I think between the AI industry and sort of filmmaking and, and the arts or, or is this just not going to be
31:20
this is just a blip in what is already a negative relationship. It might be getting more negative over time. I want I think
31:25
it's a great olive branch too. I think it's the beginnings of a better relationship, maybe not a beautiful relationship. So,
31:33
the the way it was framed out, I think was just really strategic in terms of building tools with artists and the idea of trying
31:41
at least as best as possible to preserve creative control. And I know that the first prototype of this was kind of the storyboarding
31:47
tool, which is really precursor to the movie. So if anything, it adds a lot of kind of value to expediting that process.
31:55
I read earlier, too, that, you know, Martin Scorsese, arguably one of the most, you know, recognized directors, also partnered with an AI firm
32:03
to build out some AI storyboarding tool. So I think you're starting to see a little bit more appetite
32:11
from the industry in terms of AI tools.
32:16
Truthfully, I kind of see this like, you know, in CGI and 3D animation, 3D kind of came onto the scene and,
32:22
you know, a lot of individuals on the animation side of things or on these, you know, set design were kind of ousted for with with these respected technologies.
32:31
And now it's kind of moving upstream to actresses, actors and actresses. I think it's inevitable, but I do I kind of I do applaud A24
32:39
in terms of getting in front of this and trying to kind of frame this more as an additive as opposed to a replacement.
32:46
Truthfully, let's just see how it goes. Moving forward, I don't really have a position in terms of how this is going to land, but,
32:53
you know, with more and more artists recognizing that this is going to be an aspect of it and potentially
32:59
protecting your copyright or IP, you know, whether your image, you know, I know Taylor Swift has done that in certain cases.
33:06
So I think it's just going to be something that we continue to see in terms of trying to protect your brand or really your ability to make money in this industry.
33:14
But yeah, to your initial question, I do think this is the beginning of trying to mend or at least build a bridge between the two sides.
33:21
Gabe, why do you think A24 is doing this? You know, they're they're obviously a very well-regarded studio on the scene.
33:28
You know, this using this technology, partnering up with big, bad technology, you know, is maybe a little bit fraught for them.
33:34
What's their angle? What do you think they get out of something like this? I guess I have a cynical view and an optimistic view on this.
33:41
So the cynical view is that a studio like A24 has the credibility to spend,
33:47
and they can see where the ball is going to go one way or the other. It's somebody is going to do this.
33:53
So they'd like to be the ones doing it right. They'd like to set the set, the playing field for everybody else.
34:00
So that's kind of my cynical take that it's more of a getting out in front of the narrative play. But my optimistic take is that, you know, this is actually akin to,
34:11
I'm going to make the analogy to, again, something I know and love, which is coding agents. I think, you know, you think about the early attempts at AI in the film industry.
34:20
They're very akin to vibe coding. They're basically single shot. This thing like, I want a video that looks like blah.
34:26
Give me one of those cool at the end. And now, just like in coding, we're recognizing that vibe coding
34:32
is wonderful for prototyping and for demonstration of the possible and pretty terrible for actual professional usage.
34:40
I imagine that this is going to look a whole lot like that within the context of the film industry.
34:46
So again, just like Abe said, I think the framing it as tools rather than models is intentional
34:53
and important because, as we think about, you know, coding agents in the hands of developers, we think about the, the nuanced usage
35:02
patterns, how you map these tools to the existing, workflows of developers.
35:09
I hope that DeepMind and A24 will do the same thing in the context of movie production.
35:15
And so storyboarding is a great example that's akin to project planning and software, and that's a place that you can absolutely get boosted
35:22
without having to necessarily replace the, the actual quality and architectural, integrity of a piece of software.
35:31
I hope the same thing gets gets held true in the movie industry so that we have high quality stories coming out.
35:37
They're just coming out better with the help of the new tools. I get that, Martin. Do you want to I mean, so they haven't talked a little bit more about,
35:44
I mean, to a great point, like haven't talked too much about, like the precise tools they're building. But I think it might be fun to do a little bit of, like, pie in the sky.
35:51
I mean, I don't know if you have kind of dreams about what these tools might look like, but it just
35:57
seems like there's is a lot to be done outside of the completely kind of naive, like, I need a movie about blue and like the movie comes out.
36:04
There are a lot of kind of really interesting tools here, but curious if there's anything that you have in mind really like, oh, be really cool if they build XYZ or
36:10
I wonder if this might be what the future of it looks like. If you want to kind of dream a little bit about where this all might go.
36:16
See, Tim, I absolutely have some dreams about this. To me, this this deal is absolutely wild because
36:23
DeepMind are going to be creating tools that will help A24 create their movies, right?
36:28
So how much are A24 paying Google DeepMind for them to develop the tools? Oh, they're not paying anything.
36:36
They're getting paid $75 million. Google are paying the studio for the studio to use Google's tools.
36:44
That's absolutely wild. And of course, why are they doing that? Well, because they need to understand the use cases of
36:53
what is it they're doing in terms of the storyboarding and the production and the animations and the, you know, all of it,
37:00
whereas these labs already know how to do coding. I mean, that's what they do. So they don't really need to be doing these big deals with somebody
37:08
to learn how to code. But they do need to learn how a movie is made. And and that is so valuable to valuable to them
37:17
that they're willing to spend tens of millions of dollars doing it. So you mentioned dreams, Tim.
37:23
My dream on the side. I, I like to brew like, fancy pretentious coffee.
37:30
And I have all these, these coffee machines that brew, the coffee. And some of them have started to have AI features in there.
37:36
So this just in case, like Demis Hassabis is listening to this, I just want to put out an open call
37:42
if they would like to learn how to brew fancy coffee and how that DeepMind could help with that, I would be more
37:48
than willing to offer my coffee experience for much less than $75 million, and teach the model how to do that.
37:55
Well, this is great. And a lot more to come. And I think, Martin, I buy your point that like, we will see these sort of interesting collaborations.
38:01
I mean, entertainment, of course, is the most prominent one, but I wouldn't be surprised if you find like, oh, well, we're going to team up with a prominent coffee
38:07
maker to build tools for this, right? We're going to team up with a prominent, you know, every domain, right?
38:13
I think like is amenable to this. My friend, you know, actually reminded me that back in the,
38:18
I think 80 or 90, there was actually a rice cooker that was sold with one feature being that it contained a neural net,
38:25
and it was like a really, really old school perceptron that was used to just measure kind of like moisture in the rice cooker.
38:32
And it was using it to kind of improve the technology. And so, you know, I think we're going to see all sorts of partnerships like this emerge in the future.
Tokenminning
38:43
All right. Well, let's move to the final topic of the day. This is kind of more of a culture piece.
38:48
Needless to say, for a period of time, I think corporate America was very gung ho about people using AI more.
38:55
And, like so many things, you know, what you measure is what you get. And so a lot of these companies were measuring their success at adopting
39:03
AI based on how many tokens were consumed, because, of course, the more tokens that are consumed, the more people in a company are using AI.
39:11
The problem with that, of course, is that tokens are expensive, really expensive, and sometimes colossally expensive.
39:17
And so there's been a number of pieces. One of them that we caught our eye was a piece by Eli Tan at The New York Times called Tech Workers Maxed Out Their
39:24
AI Use. Now They're Trying to Minimize It and specifically talking about the phenomenon of token mining.
39:30
Now, we've gone a little bit too far in terms of token maxing. The idea is how do you get done what you need to do with the least number of tokens?
39:39
And Abraham, I guess question for you is, you know, like, how widespread is this phenomenon?
39:44
Do you feel like in general, enterprises are starting to be like, whoa, whoa, whoa, we've just spent way too much on tokens.
39:50
You know, everybody's got to be on this, like, much more fixed diet of tokens now. And is that going to be the norm of the future?
39:56
Are people going to just start tightening their belts when it comes to this? Yeah. I think it's you've seen headlines, you know, whether it's Uber or Microsoft
40:03
or other enterprises either restricting or limiting, you know, API or access to cloud models just because,
40:10
you know, within 3 or 4 months they've already swallowed up their entire yearly budget for, you know, for the usage.
40:17
So I think you're definitely going to see it. And to your point, there is, you know, the fundamental shift from token maxing to token
40:22
mining. I think the narrative's shifting away from, you know, more tokens means more productivity and more so token economics,
40:31
like, how do you get the best result for the unit economics of a single token? And then kind of that will I think that kind of plays into our earlier,
40:40
you know, conversation about orchestration of models to define, you know, how do we get the best output independent of whatever model
40:47
was used using some type of, you know, orchestration layer? So, so in short,
40:53
yeah, I think this is kind of the direction forward. Inferencing costs exponentially more than to organizations
41:00
want above the person model training. So there has to be a better way of actually, you know, building a business case around this
41:06
and the user experience. I just think it's it's it's something that we, you know, we're already starting to see.
41:13
You know, it seems like the problem here is that we have a really hard time measuring like what the business value per token is like.
41:19
We've been maxing because there's an assumption that the value was greater than the cost of every token. Now we're mining because we actually believe the value is less than.
41:26
But at the end of the day, the problem is like we just don't know how many like business points you get from a given token.
41:34
I don't know. Is that the right way of thinking about this? I have, yeah. It's. Yes. In some dimensions and no in one critical dimension.
41:41
So I have I had a whole bunch of reactions to this, and my first reaction is, 100% token maxing is the wrong thing.
41:50
And this token mining manifesto
41:55
asserts that measuring outcomes is the most important thing, but it doesn't really explain how to do that.
42:02
Just like you said, we can't really measure business value in any meaningful way.
42:08
Every business measures its value in different ways. There are so many degrees of freedom between a given line of code,
42:14
a given token, and actual monetary value, or societal value, or just maintainability value
42:22
or whatever, whatever value you want to call the output of that. So it's really hard to measure.
42:28
Another interesting aspect of this, I read an adjacent article by Steve Yegge called The Flat Curve Society that was focusing,
42:36
its initial premise was talking about how, given Mythos class models, we're going to sort of see a flattening of capabilities
42:45
because we're reaching the point where models won't be generally available to the public. And that's an interesting premise, but the follow on from that
42:51
was that the real work then becomes the educational journey
42:57
of the majority. So right now we've been on this overall experience where everyone is pushing toward like we've got spiky capabilities.
43:05
We've got like the people really running ahead in AI that can get 10x 100x done. And then we've got a very large
43:11
majority of people that are sort of working their way up that ladder of capability and understanding. And
43:18
one of the things that Steve cited in his article was that up to the point of spending about 5 million tokens
43:26
a day, token maxing actually is a decent predictor of overall output.
43:31
But after that, and I think I think actually he said up to 15 million after
43:36
that, it becomes a really bad predictor of the overall quality of output.
43:41
And that's where you get gamification of the metric. And so the idea of token mining, I think, becomes really important
43:49
as the general populace reaches that level playing field of overall AI literacy, that everyone is now able to effectively use these tools,
43:58
and now it's about effectively using them efficiently. So the last point on this one that really stuck out to me
44:06
is that mining is obviously a very nice antonym to maxing, right?
44:11
But I actually don't think it's quite the right metaphor for what needs to be done here. I think the real metaphor is efficiency,
44:19
and there's a critical element that is missing from this token mining manifesto, and that is that not all tokens are created equal.
44:27
So the tokens that I can run on my laptop are, for all intents and purposes, free.
44:33
I can use as many of those as I want. I can max the heck out of those ways. Exactly.
44:39
The tokens that I spend on a very inexpensive model are less burdensome to my overall budget and to the environment,
44:48
and all of the negatives that we have associated with the cost of a token, both monetary and environmental.
44:56
So back to that initial point about Fugu
45:01
orchestration is going to play a key element here. And I think one of the big untapped areas here is this idea of local
45:09
offloading that happens to align with my personal interests, because I love models that I can run locally.
45:14
But truthfully, in my daily flow, I spend almost half the tokens I spend are on local models.
45:21
Now, granted, I have some pretty nice hardware here in my house, so that's not accessible to everyone. But
45:28
in the range of 30 to 100 billion parameter models, you can get a whole lot of work done.
45:37
You can't get your most challenging frontier problems done. That's true. But you can get a huge amount of internet research,
45:46
basic code implementation, exploration of your repository for, you know, summarization
45:52
and information, like, all of that stuff is not your frontier of capability, and you don't need an expensive frontier model for that.
45:59
So, that's where I think the story really needs to drive is that efficiency of output.
46:06
And that has both a use less and a use more, aspect to that overall equation.
46:13
Yeah. There's so many variables here. It's like almost like what tokens, where the tokens are. It's a big, I think gawky math equation.
46:22
It's awfully hard to encapsulate that in a pithy phrase like token max min. Exactly.
46:27
Well, max, under certain conditions, which you specify. Exactly, exactly. Yeah, exactly.
46:35
I think one aspect I mean, Gabe, you mentioned that kind of interesting like curve where it's like, okay, up to this many tokens,
46:41
it's a good predictor after this many tokens, it's a bad predictor. And it strikes me that that's actually a really interesting number
46:48
because it almost reflects to your point how efficiently people can use this technology. So you imagine a world where, like everybody's using AI for the first time
46:56
and they're just trying to like, use it to figure out the problem. Like that predictor threshold is like way higher, right?
47:01
Because the average person takes like just a lot longer to use the technology to solve the problem. But then over time, you actually want that number to slowly kind of go down,
47:09
because your hope is that people get better at using the technology they can, I don't know, they prompt better and so they get the answer more quickly.
47:15
And so your token consumption like decreases over time. I guess, Martin, just to turn this into a question
47:21
a little bit, it's almost a little bit like, you know, there's almost going to be like token deflation is what you want to see
47:27
as people kind of get better and better because it's less about the tokens. It seems like it's actually more about the, the person, right,
47:32
and how they use the technology. Yeah. What this reminds me of is the laser printer at my first office.
47:41
When I got my first job, they had this really fancy laser printer. It could print
47:46
like 50 pages a minute or something, and we had full access to this thing, and we were encouraged any time that we had like a PDF or manual
47:54
or something that we wanted printed, just send it to this fancy printer and it would like, spew this thing out in seconds.
48:00
They had folders and you could put them in the ring binder. Yeah. And then at everybody's cubicle, they actually had shelves set aside
48:08
so you could stack them up. You could basically make your own personal library. So that was print maxing.
48:15
That was print maxing because who wouldn't want the biggest fancy looking library in their cubicle to show how busy and important and productive they were, right?
48:23
Well, I left that company and I moved to a startup and this was a tiny startup.
48:28
There were six of us in one room above the harbormaster's office at a Marina,
48:34
and I get there my first week and I come across this PDF with this this Java manual. I'm like, oh, that might be useful at some point.
48:41
So I send the the job to the little laser printer we had in the office there. And within like two minutes, the founder is coming over to my
48:49
desk and he's like, dude, we have a policy with printing here. You can print as much as you want, but you've got to read every word.
48:58
And I'm just sat there looking across at the printer as it's spewing out page after page of this Java manual.
49:04
And I'm like, I am at most going to read three pages of this. I just don't know which three pages.
49:09
So I printed the whole thing. Print mining, right? Like, the fewer the better.
49:15
So I think that idea of just measuring
49:21
productivity by I printed this whole bunch of manuals. Look how productive I am, or I've hardly printed anything.
49:28
Look how productive I am is really the wrong metric. It's a very easy metric to measure, right? I mean, that's that's the thing that tokens are a number.
49:36
We can measure them. We can compare them against other people. But as as Gabe and Tim, as you've both pointed out,
49:43
you know, a printer page is a printer page, but a token is well, it could be a token from a model that's running locally in my laptop.
49:51
It could be a pretty efficient token from a, from a sort of small 100 billion parameter model.
49:57
Or it could be something from a frontier model that we are paying $0.50 for every million tokens or something.
50:03
So it could get real expensive real fast. So yeah, just just the raw number
50:08
is is not a good not a good measurement. But, you know, I still miss that laser printer. That thing was so fast.
50:15
Yeah. I think it's like, you're revealing the absurdity of it because, like, no one's like, bro, you got to be electricity maxing,
50:20
you know? Or, like, you have to be, you know, like, why are you not water maxing?
50:26
You know, I think, again, this is probably like the process of becoming more mature about how we manage and measure, these technologies.
50:33
A terrific discussion, like always. Abraham, Martin, Gabe, thanks for joining us on the show today, and thanks to Huiming and Sascha for the special segment.
50:41
That's all the time that we have. And thanks for joining all you listeners. If you enjoyed what you heard, you can get us on Apple Podcasts, Spotify and podcast platforms everywhere.
50:48
And we'll see you all next week on Mixture of Experts.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

IBM Mixture of Experts — Token Minimization / New Models / Chip

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=d-hJa-yDJmQ
source_title: New AI models, token minimization and IBM’s new sub-1nm chip
channel_or_org: IBM Technology
speaker: Tim Hwang; Huiming Bu; Abraham Daniels; Martin Keen; Gabe Goodhart; Sascha Brodsky
published_at: Jun 26, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: screenshot + pasted transcript
content_type: AI hardware / sub-1nm chip / model orchestration / virtual model endpoints / GLM-5.2 / Sakana Fugu / domain tooling / A24 DeepMind partnership / token economics / tokenmining
source_reliability_context: IBM panel discussion. Mixed-source strategic commentary. Useful for runtime economics, orchestration-as-product, model admissibility, and outcome-per-token metrics. Treat benchmark/model claims cautiously.
priority: 4/5
depth: medium_full_semantic
recommended_status: route to §B AI substrate, model orchestration, runtime economics, operating_metrics, domain workflow lab, Build-OS, Knowledge Reservoirs.

Topic tags:
[tokenmining, token_economics, outcome_per_token, virtual_model_endpoint, model_orchestration, model_admissibility_gate, domain_workflow_lab, orchestration_as_product, local_model_offload, runtime_cost, AI_unit_economics, professional_workflow_tools]


Priority: 4/5
Depth: medium-full semantic
Recommended status: route to §B AI substrate / runtime economics / model orchestration / domain-tool partnerships / operating_metrics / Build-OS. Mixed source: one hardware segment, one model-orchestration segment, one domain-tools/GTM segment, one token-economics segment.

Core takeaway

This episode is not one concept. It is four useful pressure points:

Compute scaling is moving into new physical architectures, including 3D transistor stacking and denser embedded memory.
“Model” endpoints are becoming orchestrated systems, not single models.
Domain partnerships matter because labs need workflow traces/use cases, not just generic model capability.
Token usage is a bad adoption metric unless tied to outcome, cost, model tier, and workflow value.

The strongest OMNI line:

AI value is not “more tokens” or “best model.” It is the right model/orchestration/runtime path for the workflow, with measurable outcome per unit cost.

Key concepts to preserve
1. Hardware scaling is becoming 3D, not just smaller 2D

IBM frames the sub-1nm / angstrom announcement as a shift from 60 years of mostly X/Y transistor scaling into Z-direction vertical stacking. The speaker says 2D shrinking is reaching limits and that the third dimension opens a new scaling path.

OMNI keeper: do not make this hardware doctrine, but preserve the macro point:

AI runtime economics will keep being shaped by compute architecture, memory density, thermal constraints, and hardware placement.

This affirms the runtime family, not a new OMNI primitive.

2. Memory density matters for AI workloads

The hardware segment explicitly ties nano-stack benefits to AI computing, including performance/power improvements, extra area scaling, and SRAM density improvements for embedded memory.

OMNI translation: memory is still the bottleneck theme. This pairs with the KV-cache video:

context has memory cost
runtime placement matters
local/edge/inference hardware may change feasible workflows
operating metrics should track AI unit economics
3. “Model endpoint” may actually be a routed multi-model system

The Sakana/Fugu discussion is highly relevant. The panel says Sakana’s system routes requests to multiple models, can swap models over time, and may be better understood as a multi-model orchestration harness rather than one model.

Gabe sharpens this: calling it a model is misleading because the innovation is getting the best results from existing models and stitching them together behind a familiar API shape.

OMNI keeper:

A model endpoint can hide an orchestration system.

This is directly relevant to OMNI’s AI model registry and runtime governance. OMNI must record not only “model used,” but:

router used
submodels used if knowable
model version(s)
routing policy
eval envelope
confidence/quality floor
whether the endpoint is stable or virtual
4. Virtual model endpoint creates resilience and nondeterminism

The panel notes that a routed endpoint can give resilience to model changes, but also adds unpredictability: quality may change depending on which model or combination of models serviced the request.

OMNI keeper: orchestration is not automatically safer. It can improve resilience while widening the quality distribution.

This lands in:

AI model registry
runtime audit
model lineage
no silent model substitution
high-risk lane stability requirements
eval-gated routing
5. Orchestration is becoming the product

Abraham’s line is important: the direction is not just frontier models, but frontier capabilities built through systems of models/orchestration.

Gabe extends this with the “virtual model endpoint” and small-model angle: orchestration may matter most when it enables strong capabilities in smaller footprints, including local or commodity hardware.

OMNI keeper:

Frontier capability can be composed; it does not always require one frontier model.

This affirms:

workflow_lane_as_architecture_unit
model-router
local/offloaded lanes
runtime-cost policy
small model + verifier patterns
AI capability topology
6. Open-weight does not equal usable in enterprise

The GLM discussion is useful because it separates “open weights” from practical usability. Huge open models still need hosting, governance, workload approval, and trust in the host.

OMNI keeper:

Model availability is not model admissibility.

For OMNI, every model needs:

license posture
hosting posture
PHI posture
jurisdiction posture
operator approval
eval results
allowed workflow lanes
data retention/training policy
7. Domain tools beat “vibe generation”

The A24 / DeepMind section is very useful. The panel distinguishes “make me a movie” single-shot generation from tools mapped to real professional workflow, like storyboarding. They explicitly compare this to coding agents: vibe coding is useful for prototyping but weak for professional use; professional value comes from tools mapped into existing workflows.

OMNI keeper:

Professional AI adoption happens as workflow tools, not magic one-shot generation.

This is directly applicable to OMNI:

provider review tools
intake review tools
D7 extraction tools
prior auth tools
documentation tools
workforce coaching tools
campaign tools
Build-OS tools
8. Labs need domain partners because they need use-case traces

Martin’s point is a gem: DeepMind/A24 matters because the lab needs to understand how movies are actually made. They already know coding; they do not know every domain’s workflow.

OMNI keeper:

Domain workflow knowledge is valuable because model labs do not have it by default.

This strongly affirms OMNI’s medspa/care/business-ops wedge. BLOOM/NAKED is not just a customer; it is the workflow laboratory.

9. Token maxing is a bad adoption metric

The tokenmining section is the most OMNI-relevant business segment. The panel says companies initially measured AI adoption by token consumption, but tokens are expensive and that metric gets gamed.

Abraham reframes the shift as token economics: best result for the unit economics of a token.

OMNI keeper:

AI adoption cannot be measured by tokens consumed.

10. Outcome measurement is hard but required

Gabe notes that “measure outcomes” is right but under-specified because every business defines value differently, and there are many degrees of freedom between a token and monetary, societal, or maintainability value.

OMNI keeper: OMNI needs operating_metrics for AI:

cost per workflow
cost per accepted output
cost per completed task
cost per provider minute saved
cost per resolved patient issue
cost per D7 document processed
cost per revenue/labor improvement
quality-adjusted output per token
11. Not all tokens are equal

This is the practical runtime economics point. Gabe argues that local tokens, cheap-model tokens, and frontier tokens have different cost/environmental burdens and should not be measured as one raw number.

Martin reinforces that raw token count is a bad metric because tokens differ by model/location/cost.

OMNI keeper:

Token count alone is not a metric. Token value depends on model, lane, cost, latency, quality, locality, and outcome.

Likely OMNI landing zones

§B AI substrate

virtual model endpoint
model-router lineage
orchestration-as-product
model admissibility
local/offload model lanes
runtime cost policy

Operating metrics

AI unit economics
outcome per token
cost per accepted output
cost per workflow completion
token class weighting
model/lane cost attribution

Build-OS

agent cost telemetry
local vs cloud lane policy
code-agent workflow tools, not vibe generation
eval-gated model substitution

Knowledge Reservoirs / Intelligence Foundry

domain workflow traces as strategic asset
operator workflow lab
domain-partner learning loop
no blind training; governed trace capture

Product / surfaces

professional workflow tools
storyboarding analogy → provider/intake/D7/ops tooling
domain-specific assistive surfaces

Governance / Polaris

no silent virtual-endpoint substitution in high-risk lanes
model lineage/proof for routed endpoints
license/host/workload admissibility
Doctrine candidates
A model endpoint may be an orchestration system; lineage must record the routing layer, not just the endpoint name.
Frontier capability can be composed; it is not always one frontier model.
Model availability is not model admissibility.
Professional AI adoption happens through workflow tools, not one-shot generation.
Domain workflow traces are strategic assets.
Token consumption is not productivity.
Not all tokens are equal.
AI unit economics must be measured per workflow outcome, not per raw token count.
Runtime optimization should minimize waste, not intelligence.
Net-new / sharpen / affirm
Net-new candidates

virtual_model_endpoint
An endpoint that appears as one model API but routes across models/submodels/orchestration behind the scenes. Requires lineage and stability policy.

model_admissibility_gate
A model may exist or be open-weight, but still not be allowed for a workflow because of hosting, license, PHI, eval, jurisdiction, or governance constraints.

outcome_per_token_metric
AI value metric tying token/model spend to workflow outcome, quality, and cost—not raw adoption.

domain_workflow_lab
A real operating environment used to learn domain-specific workflow patterns, tool needs, and eval traces.

Sharpen existing

workflow_lane_as_architecture_unit
Model orchestration and token economics both reinforce per-lane routing.

model_lineage
Must include virtual routing and submodel uncertainty.

runtime_cost_dominates_law
Tokenmaxing/mining confirms cost shock after initial adoption.

professional_tooling_vs_demo_generation
A24/storyboarding sharpens this strongly.

operator_alpha_firewall
Domain traces are valuable; governance must prevent extraction/leakage.

Affirm
orchestration is a product layer
small/local models can carry large portions of work
open weights still need governance
benchmark claims need skepticism
AI cost must be tied to business value
workflow-integrated tools beat “vibe” generation for professional use
Reject / do not over-import
Do not promote IBM chip claims as OMNI hardware strategy.
Do not treat Sakana/Fugu benchmark scores as doctrine.
Do not assume orchestrated endpoints are stable or safe.
Do not treat token mining as “always use fewer tokens.”
Do not make raw token count an operating metric.
Do not turn A24/DeepMind into an entertainment-industry thesis; the reusable concept is domain workflow tooling.
Hard read

This is a runtime/business-model source, not a single-spine source.

The best OMNI extraction is:

The market is moving from “best model” to “best orchestrated capability per workflow,” and from “AI adoption = more tokens” to “AI value = outcome per unit cost.”

Shortest OMNI version:

OMNI should not measure AI maturity by tokens burned or models called. It should measure governed work completed per dollar, per lane, per risk class, with full model/routing lineage and no silent substitution in high-stakes workflows.

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

**Headline verdict.** This is a **four-segment runtime/business-model source**, not a single-spine source — and Knox's Review 001 read is correct and is formalized (not re-derived) below. The OMNI-load-bearing yield is the **§B AI-substrate + operating-metrics** spine: a "model endpoint" can secretly be a *routed multi-model orchestration system*, so lineage/admissibility/eval must attach to the **routing layer**, not the endpoint name; frontier capability can be **composed** (small/local models carry a large share of work at near-zero token cost); professional adoption arrives as **governed workflow tools, not one-shot "vibe" generation**; **domain workflow traces are a strategic asset** labs lack by default (the BLOOM/NAKED workflow-lab thesis); and **token count is not a metric** — value is *governed work completed per unit cost, per lane, per risk class*. The whole source is **doctrine=AFFIRM/PARTIAL · build≈absent** (the dominant wave-3 pattern): OMNI's §B/CNS/Reservoirs/operating-metrics doctrine already anticipates all of this; the gap is BUILD (repo has care-side `lib/ai` chart-review that proposes-only under `AI_GOVERNANCE_POLICY`, records a single static `model_provider`/`model_name`, and has **no** model-registry/router/eval/trace-lineage/cost-metrics). Hardware (3D nano-stack, SRAM density) is **watch-only** context (do NOT mint hardware doctrine). Sharpest single line: *market moving from "best model" → "best orchestrated capability per workflow," and from "adoption = more tokens" → "value = outcome per unit cost."*

**A. Concept clusters** *(tiered full — Knox priority 4/5, depth medium-full_semantic)*

| # | concept | OMNI meaning | downstream homes | source anchor (verbatim ≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Compute scaling goes **3D** (Z-direction) | Macro: AI runtime economics stay shaped by compute architecture / thermal / placement — NOT OMNI hardware doctrine | §B runtime (context) · future-watch | "go from a 2D to 3D in its design for the first time" [13:36] | ABSENT | absent | none | low-authority-watch | no-op |
| 2 | **Memory density** matters for AI workloads | Memory is the recurring bottleneck theme; embedded/SRAM density → feasible workflows shift (pairs w/ 204 KV-cache) | §B runtime (context) · operating-metrics · future-watch | "SRAM density scaling… truly help AI computing… more efficient" [12:57] | PARTIAL | absent | none | low-authority-watch | watch |
| 3 | A "model endpoint" is really a **routed multi-model system** (`virtual_model_endpoint`) | Lineage must record router + submodels + routing policy + version + stability, not just endpoint name | §B `ai_model_registry`·`model_lineage`·`trace_lineage` · CNS · Security/Polaris | "calling that a model endpoint is not very accurate" [18:17]; "carefully routed, orchestrated multi-model ecosystem" [18:11] | PARTIAL | absent | none | spine | promote |
| 4 | Virtual endpoint = **resilience + widened non-determinism** | Orchestration is not automatically safer; quality distribution widens → no silent substitution in high-risk care lanes; eval-gated routing | §B `model_lineage` · CNS candidate→commit · Security/Polaris · §A autonomy | "you really can't predict what answer you're going to get" [18:54]; "non-determinism of which model your request… land on" [19:02] | AFFIRM | partial | tension (resilience vs predictable quality floor) | spine | promote |
| 5 | Orchestration **is the product**; frontier capability can be **composed** | Value = right orchestration/runtime path per workflow, not one frontier model → `workflow_lane_as_architecture_unit` + model-router | §B model-router · Build-OS · CNS · thesis §B | "frontier capabilities as opposed to frontier models" [22:00]; "orchestration is the product" [21:31] | AFFIRM | absent | none | spine | watch |
| 6 | **Small/local models** carry a large share of work | Local tokens ~free; 30-100B models do research/basic-code/repo-summarization → `model_placement_policy` + local/offload lanes | §B placement/runtime · Build-OS local-vs-cloud lane · operating-metrics | "almost half the tokens I spend are on local models" [45:14]; "30 to 100 billion… get a whole lot of work done" [45:28] | AFFIRM | absent | none | vocabulary | watch |
| 7 | Model **availability ≠ admissibility** (open-weights still need governance) (`model_admissibility_gate`) | A model may exist / be open-weight yet be barred for a lane by host/license/PHI/jurisdiction/eval/operator-approval | §B `capability_envelope`·`source_authority` · Security/Polaris · Federation vendor · Settings | "governance issues as to, well, am I allowed to access it and who is hosting" [28:45-28:53] | AFFIRM | absent | none | spine | promote |
| 8 | Professional adoption = **workflow tools, not one-shot "vibe" generation** | Care/build value comes from tools mapped into real workflows (provider/intake/D7/prior-auth/documentation), proposing under review | Product surfaces · Build-OS · §B · Intake/D7/D5/Messaging contracts | "framing it as tools rather than models is intentional and important" [34:46]; "vibe coding… pretty terrible for actual professional usage" [34:32] | AFFIRM | partial | none | spine | promote |
| 9 | **Domain workflow traces = strategic asset** (labs lack them) | Domain workflow knowledge is scarce; the operating environment (BLOOM/NAKED) is a governed *workflow lab*, not just a customer | Knowledge-Reservoirs · Intelligence-Foundry · CNS §11 trace_lineage · operator-alpha-firewall | "they do need to learn how a movie is made" [37:08]; "$75 million… to understand the use cases" [36:36-36:53] | AFFIRM | absent | tension (governed trace capture vs extraction/leakage) | spine | watch |
| 10 | **Token consumption ≠ productivity** (token-maxing is a gamed metric) | AI adoption cannot be measured by tokens burned; the "count is easy to measure" trap → wrong metric | operating-metrics/BIZOPS · Build-OS agent-telemetry · §B `runtime_cost_dominates_law` | "measuring their success… based on how many tokens were consumed" [39:03]; "print maxing… how busy and important" [48:15] | PARTIAL | absent | none | spine | promote |
| 11 | **Outcome per unit cost** is the real metric — but hard (many degrees of freedom) (`outcome_per_token_metric`) | Need AI operating-metrics: cost per accepted output / workflow / provider-minute-saved / resolved-issue / D7-doc — quality-adjusted | operating-metrics/BIZOPS · CNS · Build-OS · thesis §B | "we just don't know how many business points you get from a given token" [41:26]; "measuring outcomes… doesn't really explain how to do that" [41:55] | PARTIAL | absent | none | spine | promote |
| 12 | **Not all tokens are equal** (token-class weighting) | Token value depends on model/lane/cost/latency/quality/locality/outcome; "use-less AND use-more" — minimize waste, not intelligence | operating-metrics · §B `inference_budget_policy`·placement · Build-OS | "not all tokens are created equal" [44:19]; "tokens I can run on my laptop are… free" [44:27] | PARTIAL | absent | none | vocabulary | promote |
| 13 | **AI-literacy curve** → token deflation as users mature | Maxing predicts output only up to ~5-15M tokens/day then gets gamed; efficiency-per-outcome rises with operator literacy | operating-metrics (context) · Build-OS cognitive_coverage · future-watch | "up to… 5 million tokens a day, token maxing… a decent predictor" [43:18]; "you actually want that number to slowly… go down" [47:01] | ABSENT | absent | none | low-authority-watch | watch |

**B. Net-new primitives** *(snake_case; deduped vs EVRUN-000001 §2A + 000002 + wave-3 minted — **dedup-pending, Opus-main verifies**)*

- `virtual_model_endpoint` — an endpoint that presents as a single model API but routes across models/submodels/orchestration behind the scenes; demands routing-layer lineage + stability/eval policy — **EXISTS-AS: net-new NAME; sharpens `ai_model_registry` + `model_lineage` (a *routing/stability subtype*). Mint candidate — highest-value §B name of this source (safety-bearing: no silent substitution in high-risk lanes).**
- `model_admissibility_gate` — a model may exist / be open-weight yet be *inadmissible* for a workflow lane (host/license/PHI/jurisdiction/eval/operator-approval/retention posture) — **EXISTS-AS: net-new NAME; composes `capability_envelope` + `source_authority` + 201 "openness≠authority; route by registry/lineage/envelope." Reconcile as the model-side application of `capability_envelope`, not a new god-gate (`GRD-026`).**
- `outcome_per_token_metric` — AI operating-metric tying model/token spend to *workflow outcome × quality ÷ cost*, per lane and risk class (not raw adoption) — **EXISTS-AS: net-new NAME; sharpens `runtime_cost_dominates_law` + `inference_budget_policy` with an OUTCOME dimension; is the operating-metrics instantiation. Mint candidate (BIZOPS/operating-metrics).**
- `domain_workflow_lab` — a real governed operating environment used to learn domain-specific workflow patterns / tool needs / eval traces that model labs lack by default — **EXISTS-AS: ALREADY — Knowledge Reservoirs + Intelligence Foundry + `enterprise_hill_climbing_machine` (201) + operator-alpha-firewall + 201 "company-owned governed traces/outcomes = flywheel." NOT net-new mechanism; at most a net-new NAME for the BLOOM/NAKED wedge. Reconcile, do not re-mint.**
- *(considered, NOT minted)* `token_class_weighting` / `orchestration_as_product` / `local_offload_lane` — all fold into existing `inference_budget_policy` · `workflow_lane_as_architecture_unit` · `model_placement_policy`. Hardware (3D/SRAM) mints nothing (Knox concurs; watch-only).

**C. Reread flags.**
- **Segment boundaries:** this is 4 distinct segments — treat hardware (cl.1-2) as *context/watch* and do NOT let vendor node-claims bleed into doctrine. The spine is cl.3-12 (§B + operating-metrics).
- **`virtual_model_endpoint` vs `model_lineage`:** confirm at fold whether this is a distinct primitive or strictly a lineage subtype — decides whether the §B registry grows a row or annotates an existing one.
- **T1-206 (routing non-determinism) vs 204 T1 (prefix-cache isolation):** both are §B-substrate safety tensions resolved by "governed boundary + no silent reuse/substitution" — check they route to one coherent Polaris/CNS rule, not two.
- **Metric double-count:** cl.10/11/12 are one operating-metrics family (adoption≠tokens · outcome-per-cost · token-class); fold as a *single* BIZOPS/operating-metrics cluster, not three.
- **Guardrail on cl.9:** domain-traces-as-asset is real, but the disposition is *governed capture only* — verify operator-alpha-firewall + no-blind-training language survives promotion (`GRD-039`).

**D. One-line hard read.** OMNI should never measure AI maturity by tokens burned or models called — it must measure **governed work completed per dollar, per lane, per risk class, with full model/routing lineage and no silent substitution in high-stakes care workflows** — and treat its operating environment (BLOOM/NAKED) as a governed *workflow lab* whose domain traces are strategic, capturable only under the operator-alpha-firewall.
**Strongest OMNI line (verbatim-grounded):** *"what they are putting behind that API is a carefully routed, orchestrated multi-model ecosystem… calling that a model endpoint is not very accurate"* [18:11-18:17] → OMNI's `ai_model_registry`/`model_lineage` must bind to the **routing layer**, and its metrics to **outcome per unit cost**, not to the endpoint name or the token count.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: **§B AI-substrate RUNTIME + operating-metrics (MAJOR — virtual-model-endpoint / model-admissibility / orchestration-as-product / outcome-per-token; 3 net-new §B/BIZOPS names) · Knowledge-Reservoirs + Intelligence-Foundry (MAJOR — domain-workflow-lab / domain-traces-as-asset, converges 201 flywheel) · CNS candidate→commit + Security/Polaris (medium — no silent model substitution, routing lineage) · Build-OS (medium — agent cost-telemetry, local-vs-cloud lane, workflow-tools-not-vibe) · product surfaces + Intake/D7/D5/Messaging (medium — workflow-tools framing) · §A autonomy + capability_envelope (minor — model admissibility) · hardware 3D/memory (watch-only, no-op)** · promotion: **watch** (PROPOSES only; `GRD-036` — Opus-main folds cross-source + promotion gate)
- **Cross-source convergence (Opus-main to fold into registry):** AFFIRMs & sharpens **201** (orchestration/registry/openness≠authority/traces-flywheel/hill-climbing-machine — 206 adds the *virtual-endpoint routing-lineage* + *domain-workflow-lab* sharpenings) · **204** (runtime economics — 206 adds the *business-metric* leg: outcome-per-token / not-all-tokens-equal / local-offload, above 204's serving mechanics) · **202** (workflow-tools-not-vibe = the care/GTM twin of the governed-refactor-loop). No cross-source conflict; T1-206 (routing non-determinism) pairs with 204 T1 (prefix-cache isolation) as one §B-safety family.

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — Opus §3 Review 003 formal deep extraction written (13 concept clusters, tiered full; 3 net-new §B/BIZOPS name candidates + 1 already-exists reconcile; 2 tensions [T1-206 routing non-determinism · trace-capture vs leakage]); §0/§0.1 metadata inferred from transcript (slug `moe-orchestration-token-economics` proposed, file NOT renamed); §0.5 agent boxes ticked; §4 pointers + impact/convergence filled; status `raw_dropped`→`analyzed`. Binds nothing (`GRD-036`/`GRD-044`); registry/coverage/anchor folded by Opus-main.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

# EVSRC-2026-000244 — <title or TK>

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000244_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(lifted verbatim from §3 Review 001 operator metadata — `identity_confidence: high_from_operator_metadata`; only `published_at` remains TK)*
- evsrc_id: `EVSRC-2026-000244`  ·  filename (proposed slug; file NOT renamed): `EVSRC-2026-000244_dylan-patel-semianalysis-hardware-software-codesign.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=f6D_aiy8qyU`  ·  source_title: `Why Hardware-Software Co-Design Is AI's Real 100x: Dylan Patel of SemiAnalysis`
- channel_or_org: `Sequoia Capital`  ·  speaker: `Dylan Patel (SemiAnalysis)` — interviewers Sean & Sonia Huang (Sequoia)  ·  published_at: `TK` (not supplied in Knox metadata; date TK)
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + operator metadata (Knox §3)`
- content_type: `long-form interview / infrastructure-market thesis`  ·  source_reliability_context: `practitioner/analyst (SemiAnalysis founder) — investor-hosted (Sequoia); market numbers = interview claims, not independently verified`  ·  topic_tags_light: `[ai-infrastructure, inference-economics, hardware-software-co-design, living-benchmarks, throughput-interactivity, model-routing, compute-market, task-level-roi]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Dylan Patel` · role_in_source: `interviewee` · affiliation_at_publication: `SemiAnalysis (founder/chief analyst)` · speaker_type: `founder / industry analyst (practitioner)` · authority_context: `premier independent semiconductor/AI-infrastructure research firm; deep supply-chain + inference-economics expertise; commercial InferenceX benchmark product` · identity_confidence: `high_from_operator_metadata`
  - name: `Sean` (Sequoia) · role_in_source: `host/interviewer` · affiliation_at_publication: `Sequoia Capital` · speaker_type: `investor` · identity_confidence: `high_from_operator_metadata`
  - name: `Sonia Huang` (Sequoia) · role_in_source: `co-host/interviewer` · affiliation_at_publication: `Sequoia Capital` · speaker_type: `investor` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `Sequoia Capital (YouTube)`  ·  interviewer / moderator / host: `Sean + Sonia Huang (Sequoia)`
- event_context: `Sequoia-hosted long-form interview at the SemiAnalysis office`  ·  perspective / conflict notes: `speaker sells InferenceX (benchmarking) + institutional research; investor-hosts have positions (e.g. SpaceX). Market/revenue/gigawatt figures are speaker claims, non-binding illustration — not verified evidence.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [~] screenshot (n/a — metadata supplied inside Knox §3 Review 001) · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002 (left empty)
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata (lifted from Knox metadata block) · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [~] update EVRUN concept registry (cross-source) — **deferred to Opus-main via fold packet (this task: do NOT edit registry)** · [~] update coverage matrix — **deferred to Opus-main** · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introduction
0:00
I think it's really fun inside of semi analysis because we have 90 people and like a big chunk of them are
0:05
technologists engineers across the whole supply chain. Um, and then a big chunk is people who are formerly at hedge
0:10
funds. And you see these arguments like people are like, "Oh, well that doesn't matter." And it's like, then someone's like, "Well, but cost." And then someone
0:17
the engineers like, "No, no, no, but this technology is the coolest." And you see this you see this organically like fight it out. Um, and and we're pretty
0:23
informal and you know, given the fact that I was a for moderator, you can imagine what the the
0:29
enjoying it. You don't wrestle with a pig because a pig enjoys it, right? Exactly.
0:50
We're here in the semi analysis office with Dylan Patel. You know, I'm Sean from Sequoia. My partner Sonia Huang.
0:58
It's pretty insane what you've done. Semi semis 5 years ago were not very sexy in the west. They were sexy in the
1:05
east but uh people here in the west had kind of forgotten about them. You did not forget about them though. You went
1:10
very long. You created probably the premier research company in the space that's been educating the world and you
1:17
know the state of the art from very technical details to supply chain you know to the bigger picture. Um there's
1:23
rumors that semi analysis recently passed 100 million of revenue. I don't know how accurate those are. Whatever
1:29
the numbers are you guys are crushing. It's it's as accurate as the information is. Yeah. Cool. You know, you never you
1:34
never know. Um there's also rumors that you might start a venture fund like you know I I hear all the time in the
1:40
ecosystem people wanting you know affiliation with semi analysis. You you've built this trusted brand and so
1:45
whatever you do it's working. This clearly like just the beginning of the journey for you. Congratulations all of
1:51
that. But how did this happen? Like how did you first question is like what is the background? How did you kind of get
1:57
to where you are now? Well, well, when I was a young boy in the, you know, coming out of the womb. No. So, so, okay. So, I
Motel Kid Origins
2:04
grew up in like a small business. My parents had a motel. We lived in the motel. We laid our gas station. So, you
2:10
know, uh I was selling. You know, I joke a lot of times the first neural network I trained was uh racially and and
2:17
visually profiling people based on when they enter the gas station, which cigarette to uh pick. Right. Basically,
2:23
you know, the cigarettes were all extrudeed across the top and I was too short to actually like, you know, reach them and technically it wasn't legal to
2:29
sell cigarettes at that age, but whatever. I I had to move the step stool over to the right area. I started working my first job was
2:35
before it was legal, too. So, but it's good experience. Well, I didn't get paid, right? It's a family business. Same. Same. Um, but yeah, we had our motel and
2:41
then across the street was our gas station. So, you know, sometimes, you know, you know, someone would walk in and so like if a old white lady with
2:47
curly hair walked in, I'd move the ladder or the step stool over to where the camels are. And if you know and you
2:52
know different different age, demographic, profession, you know, race, etc. I would move the step stool over
2:59
and I joke this is the first neural network I trained because if I waited for them to tell me I'd have to like move it over and then I'd step up versus
3:05
like just being ready. Um so you know menthols versus, you know, 100 slims and all these things, you know, I joke
3:10
that's the first neural network I trained. But I grew up in family businesses. Um lived in a motel and um
Xbox Repair Spark
3:16
it all really goes back to when I was like, you know, it was my 8th birthday. Um, my birthday's in May. Um, and it was
3:23
April when the Xbox 360 was announced. Um, for my birthday, I didn't ask for the Xbox or I didn't ask for a birthday
3:28
gift. My parents asked what I wanted. I asked for it for Christmas. Uh, we celebrated Christmas, but there was no way, at least at the time, I thought
3:34
there was no way they would ask would give me the Xbox 360 for Christmas and so I got it for I asked for my birthday for tab for Christmas. Anyways,
3:41
Christmas comes around, I get it. Um, you know, fast forward a couple months, my cousin who lives in Alabama, they also lived in a motel, was going to come
3:47
over for spring break, um, for his spring break and we were going to just hang out at my house and he's in between me and my older brother in age,
3:53
brother's a bit more jockey. Um, so he didn't really care too much about the Xbox. He played sometimes, but he didn't really care. Um, but my cousin, you
4:00
know, I wanted to think I'm him to think I was cool, right? You know, so I bragged many times on the phone. I was like, "Yeah, I got an Xbox." And then
4:06
the Xbox broke. There was something there's a hardware defect called the red ring of death. Um, but long story short,
4:12
I had to open it up and, you know, short the temperature sensor and it fixed it. Um, but I there was many other tricks I
4:17
tried first and none of them worked. Um, and so that's sort of how I like got into hardware. I was like open Pandora's box. By the time I was 12, I was like on
Internet Forums to Semis
4:24
these forums a lot reading uh posting a lot and this is around the time when Reddit ate all other forms and so I
4:31
became a moderator of you know Android and Apple and Google as well as like hardware and was watch you know looking
4:37
at Intel, Nvidia and AMD and all these other forms right? I was build a PC. All these forms I was watching, reading, posting a lot, but some of them I was
4:43
moderating a lot. Um, and so, you know, smartphones, watching smartphones develop from like very simple to speed
4:50
racing to being technologically more advanced than PCs, um, in many ways architecturally and and same with like,
4:56
you know, all the in GPUs like just tracking and watching at that, reading every comment. Um, always having the
5:01
economic tinge because I grew up in a small business. So, I was always looking at the economics, right? There was a time where all the like I'd say neck
5:08
beards on the internet loved AMD GPUs and like I personally had bought an AMD GPU too because price performance but
5:15
then when it came down to like what's technically better I'd always be like no no no Nvidia is better because they use a smaller chip to get you know better
5:22
performance at better power efficiencies and their margins better and and so like I would always like talk about how
5:27
Nvidia's margins were better than than AMD's in the GPU landscape and so it's like very fun. And you were 12 at the time. I started
5:34
moderating when I was 12, but this is all through my teenage tween age and high school years, right? Do you have any other weird hobbies or
5:40
was it just semis? I played a ton of Starcraft. At one point, I was grandmaster on the North
5:46
American ladder. Starcraft 2. Very serious. So, you've gotten just obsessively good at multiple things. Yeah. I mean, it's it's it's obsession
5:52
is good. How were your grades? Um, they were decent. Um, I would say
5:58
like I had mostly A's, but they're classes that I like were thought were really boring or, you know, I just
6:04
didn't enjoy. Um, like Spanish I got like not the greatest grades. Um, you
6:10
know, but but it was like I speak fluent Spanish by the way, so it's really dumb.
6:15
But like it's just sort of maybe that's why you didn't get a good grade. I didn't learn Spanish till later to be fair. But yeah, so sort of my grades
6:22
were fine, right? Like I mean I like they were fine enough for Asian parents. I was better than most of school but you
6:29
know it wasn't like you know tryh hard maxing for like you know all A's. Okay. So you're very much a student of
6:34
the internet then this is how you how you develop this expertise. At what point do you decide to start semi analysis and what's been the biggest
6:40
surprise since starting the company? Yeah so I went to school I got a few degrees in stuff that wasn't related to semiconductors. Um was a quant for two
From Quant to Founder
6:48
years at a small quant risk firm. Um and then basically, you know, there's a
6:53
culmination of events that happened, right? One was that my um you know, sort of like I got screwed out of a bonus. I
6:59
I'd made my company many millions of revenue of risk-free revenue because I exploited like a risk, you know, thing
7:05
in the market. Um you know, I think well over 10 million and they then someone else took credit for my work and all this sort of stuff. But eventually I did
7:11
get rightsized. But you know, I lost a social contract with the company I was working with. Um add some you know, my
7:16
grand my grandparents grew up in my house with us, right? are in the motel with us. Uh they lived with us and so
7:21
you know very close with them and my grandmother got dementia and she forgot who I was and she she fell down some stairs and had like a tragic accident
7:28
and passed away. So all of that happened in early 2020. Um additionally there were some like you know girl things and
7:33
so you know there's a few things that happened that made me like kind of very sad. Um
7:39
and and and so all of those things sort of culminated. Then co happened and my brother's like dude just just come stay
7:45
with me. He lived in Nashville so I came and stayed with him in Nashville. We were like, "Oh, lockdowns will be a few weeks. You can stay with me while they
7:51
happen and then you can go back home and you know, whatever." Famous last words. Lockdowns lasted much longer. But, you
7:57
know, living with my brother for a few months, you know, was like sort of like, okay, didn't know what I was doing. I was now at my brother's home. Um,
8:03
everything was his rules. You know, sort of like, you know, him and him and his fiance at the time, now wife, you know, were like there. And so, like, I
8:09
basically had to tiptoe around, but I didn't care about my job. And so, I was like posting even more than normal. I'd always been posting a lot on the
8:15
internet. I'd always been trading stocks a lot, but like I made a lot of money shorting COVID and long in COVID and
8:20
like all this stuff. Semiconductor shortages happened around then too. And anyways, I was like very much obsessed with posting and and things like that.
8:27
And eventually um around that time someone I got into an argument with someone on the internet and they doxed me, right? They they publicly revealed
8:33
my identity for my anonymous account. And at the time I was like, "Oh no, I scared. I stopped posting for like three weeks and I was like, what am I doing?
8:39
Why do I care?" So then I just started posting under I had like had like blogs and stuff as well. I made a real blog,
8:45
semi- analysis, and on my 24th birthday, I posted um you know, two blogs and and
8:52
then from there it just like it was not a newsletter, but I got so much traction because now instead of posting on an anonymous name, it was a real name and I
8:59
put a lot more effort into those two posts than I usually did. Instead of like posting on the internet, it was like real effort into the blog. Um
9:06
you can actually go back and read those if you want. They're they're not that great, but you know, they were they were good for the time. They were the best stuff you could find on the internet
9:11
about semis. Um, and and I just kept posting, posting, posting. I started getting a lot of consulting business. You know, 2020, I also sort of I was
Homeless Research Roadtrip
9:18
again crashing out. Didn't know what I wanted to do. So, I uh packed everything up or sort of I I I took my truck, I
9:24
bought a tent that fits on the back of the tent, truck, um, bought a air mattress, whatever, and would like and drove around all these national parks
9:31
all around America. And so, like two or three or four days of the week, I'd stay in a random motel where I negotiated the price to be like $30 a night for a room.
9:38
And I was work on something else stuff. And then the weekends I'd read books and oftentimes read textbooks um while in
9:44
some random national park or hiking and listen to audiobooks um about semiconductors about AI about all the
9:50
things that I cared a lot about and got way more educated over these six months where I'm just like going to every national park. Um and the whole time I
9:57
was I was alone the whole time I was posting blogs. Um everyone was like DD what the are you doing
10:03
pre-larink or the very early days of Starling? Pre-star link pre-tar link. Um yeah, so it was like very much like what are you
10:09
doing? Um I travel around Latam again like for for a year initially with my friend and then with my ex you know for
10:15
you know about a year and then I go then 22 23 24 end of 21 22 23 and 24 I'm
10:21
completely I'm still completely homeless since mid2020 right um but I'm traveling
10:27
around to every conference in the world. I go to 40 plus conferences a year no matter where in the supply chain it is.
10:33
I'm like oh that looks interesting. I guess I'll go to that. And I'm like I went to one conference like wow this is amazing. you get to talk to the experts
10:40
and they just like they they're they they're going to talk to you because and then you're so excited and in the case of semiconductors everyone's a boomer so
10:45
it's like it's great to like you know they're like they don't see young people who are like excited about it so they're really happy to tell stuff and so you
10:51
just have to ask on this was there like a part of the supply chain or one of these conferences that you know
10:59
particularly changed your view of the semi-world or that you felt then or feel now is particularly underrated. I think
11:06
I think the trade shows like r and conferences range really widely. Um obviously some of the you know the ones
11:12
I have the most fun at you know include NERPS. Why why is that? Because it's 20,000 AI researchers and they're generally in my distribution of age
11:18
range. So it's like a lot of fun but they're also like leading AI researchers and it's a lot of fun and lot you learn a lot. Um there's also a lot of parties
11:24
and then it ranges all the way to like you know there's random chemical conference in Japan where it's 300
11:29
Japanese dudes. It's like 20 guys from ASML, 20 guys from TSMC, 20 guys from Intel, and those are the only people who
11:35
speak English. Uh, everyone else speaks only Japanese, and you're like, h, I guess they're still pretty interesting and fun. I think I think like one thing
11:42
that I have like a skill set of is like I'm able to bond with anyone regardless of their background and like who they
11:47
are. I'm able to talk to them, find something interesting to talk about. Oftentimes, it's the tech stuff, but, you know, it's it's and so I think like
11:53
the most interesting conferences are oftentimes like, you know, the really big ones because that's where the biggest stuff is happening. Um but I
11:59
think the niches that are really really exciting is like you know SPIE um so there's IE which is international
12:06
electrical engineering something um and there's SPI which is another ecosystem. SPIE conferences are super super deep in
12:15
details. Every single one that I went to, especially like SPI advanced lithography or SPI photo mask, I went to
12:22
them the first time I didn't even understand 90% of what I heard. And then I read red, red, red, I had made some context, of course, and then next time I
12:28
went, I understood like half of what I went to. Third time I went, I understood like 75% of what I went to. Even now, I
12:33
went and I was like, I still don't understand everything that's going on. Whereas like you go to like Nurips, you know, a couple times you can understand,
12:40
okay, what's neurosymbolic reasoning? Okay, what's this? What's that? like you can you can kind of get a mapping of what everything is pretty quickly but
12:45
some parts of the supply chain are so arcane and so deep and so technical. It takes a lot of times for you to even
12:51
understand what's happening in and you know on everything right um for every research paper doesn't necessarily mean
12:56
you didn't you know you go to a conference for a few reasons right you understand the research you understand but like it's all the research that's
13:03
being published but what you really care about is understanding how does that research intersection intersect with
13:08
technology also how does that research differ from what's there today and none of these research papers tell you what's happening today but then you just ask
13:14
people and you you build contacts and you learn and then you like learn about the supply chain and oh this company supplies this company even though it's
13:20
not publicly stated anywhere or like you know you learn that the the this chemical is like cost about this much
13:26
and a tool uses about this much and you hear you hear the horror stories of like this chemical had a shortage and it
13:34
totally threw off this part of the supply chain and then it turns out there's only three companies in the world that make that chemical and it's
13:40
like my favorite one is I learned uh a Japanese guy at that specific Japanese uh conference that I went to where no
13:46
almost no one spoke English in very broken English he told me about how uh his father worked in this in in in this
13:51
industry in the 1980s that the the only factory in the world that built this chemical uh burned down and that caused
13:57
memory prices to like double or triple and I was like wow not too different from today not not not at all
14:03
crazy um inference going to be the biggest market on earth biggest market beyond earth
InferenceX and Benchmarking
14:09
agree or disagree um I mean obviously use of tokens is going to be the biggest market um and
14:16
the value that's created from tokens is going to be the biggest market but I think tokconomics sort of the use of tokens adoption of AI sort of is the
14:21
most important thing that's happening and inference whether it's open models or closed models will be like one of the biggest markets in the world much bigger
14:27
than oil I think much bigger than like you know many other parts like inference of AI will be you know many percentage
14:34
points of the GDP yeah right what you've done with inference X I think is you know industry standard
14:39
maybe say a word on why you started it what it does and you know what do people misunderstand about uh performance
14:46
benchmarking on inference yeah So, so to zoom back, right, like semi analysis, uh, we do a lot of stuff
14:52
that's like, you know, a lot of it is like research for institutional clients and and our subscription versus products, but a lot of it is also like,
14:58
hey, you know, this would just be cool to figure out. Let's figure out how to figure it out and just post it publicly. And that gets, you know, more and more
15:04
scale. And so we've done this with a lot of GPU benchmarking and testing and training performance and inference performance, but you know, ultimately we
15:10
saw like inference benchmarking was like point in time. you know, you test it and you take some time, you release it and
15:16
it's like slow and arcane and out outdated because models change all the time. Every I feel like every week
15:23
there's a new model whether it's a Chinese model or you know today mythos 5, Fable dropped and new models are
15:28
coming out all the time. Um on the software layer uh PyTorch, VLM, SG lang
15:34
um new drivers, new new something drops, you know, in fact the update cycle for most of these libraries is twice a week.
15:41
So you basically have the software updating all the time and therefore performance changing. Um you know new inference optimizations are coming out
15:47
and those get updated and and so I feel like it's a relentless breakthrough after breakthrough after breakthrough that keeps driving efficiency and cost
15:53
down which is why we've seen you know model cost drop for equivalent quality by like 60x a year. It's incredible. Um
16:00
but to stay on top of that you can't have point in time benchmarking. You need to have benchmarks be living and breathing i.e. you know constantly
16:06
running on the latest hardware on the latest models. And so we embarked on a
16:11
project and we got a lot of buyin from the ecosystem. This was only possible because we had you know enough aura with some of the ecosystem where we're able
16:17
to get coreweave and cruso and nebus and Oracle and Microsoft and Amazon and
16:22
Google and OpenAI to contribute to us um compute and then we were able to work with SG Lang and VLM and now Radix Arc
16:29
and InRact uh which are the private companies who are sort of leading those efforts um the open source efforts um to
16:35
collaborate with us. We're able to get Nvidia and AMD and Google and Amazon now because we're adding TPUs and trrenium
16:40
uh to collaborate. Now we've got all these people collaborating. We've got over $50 million of hardware uh donated
16:46
to us. Um once we launch TPUs and trainum it actually should be over $und00 million of hardware. Um you know
16:52
maybe about like 15 different chip types all running these benchmarks every single day on all the latest model,
16:57
right? the best model from Moonshot, the best model from Alibaba, the best model from um there's about five different
17:03
Chinese models, the best open source models, the best Chinese labs there. We run benchmarks on their models every day and then also the best US open source
17:09
models um GPTOSS, Neotron, etc. So we're running these benchmarks every day um in
17:15
an automated fashion and they run on these these servers that are dedicated to us for inference benchmarking and we
17:21
sweep across so many different configurations and optimization types and then what it creates is and all the
17:26
results are public and all the configurations are public. So now we have the paralo optimal curve because a lot of you know times when people are
17:32
comparing inference performance they're like taking a suboptimal curve or point for someone else and comparing it to
17:37
their optimal one. And it's like, well, yeah, I can make I can I can stick, you know, if I drove a Porsche versus like
17:42
some some race car driver, obviously I'd drive it slower. The same thing with inference benchmarking. And so what we did is we created open- source uh
17:49
basically containers for the optimal points across every uh point on the interactivity, i.e. how fast is it
17:56
responding to me versus you know batch size, i.e. how many users am I simultaneously serving curve? And so now
18:01
anyone who wants the optimal point can just go to inference X download it and run that as the optimal point and they can check every day if they want or they
18:07
can even autod download the most optimal point for that model and and their inference performance will be near peak.
18:12
Um is that curve like the most important curve in your opinion? The throughput interactivity curve is the most
18:18
important one. Yeah, I think I think um most things in hardware infrastructure uh model
18:24
application layer everything is downstream of that curve, right? Is it is it something that needs to be super super fast, super low latency? Um, and I
18:31
don't really care about the cost, so I make batch size very low and I use techniques like speculative decoding or multi-token prediction heavily and and
18:38
there's so many, you know, possible techniques there. Or is it something where actually I'm batch processing a ton of documents and I don't really care
18:45
about all these things. I don't use these techniques that actually are worse on cost efficiency but help you with speed for an individual user because I
18:50
just want to pack a bunch of users. I don't care if the document takes all night to process, right? Um, and right now the way we treat AI infrastructures,
18:57
it's like one-sizefits-all. But over time, we're going to get to the point where, you know, there's stuff where you you have batch workloads or, you know,
19:03
you need instant response and there's there's the whole curve that's going to matter for uh users. And so we see this
19:08
with entropic, right? Cloud code fast mode cost way more than regular mode. Um, and same with open eyes priority Q
19:16
thing. Um, sorry, dumb question. How does cost factor into the chart? So if if I let's
19:21
say imaginary example, I have 100 I have a batch size of 100, okay? And I can do 10 tokens per second per
19:27
user. So in total I'm doing a thousand tokens per second uh off of that one piece of compute. That's one side of the
19:34
curve. Super slow, 10 tokens per second. Um you know, other side is I have uh uh
19:39
500 tokens per second, but I only have one user. And so maybe 250 tokens per second, one user. And then there's
19:45
points on the middle that are more fraal optimal, right? the average person actually wants like 50 or 100 tokens a
19:50
second and maybe you know the this the the number of users I can batch together. So the curve is okay a thousand tokens total uh per second or
19:59
250 tokens total per second depending on how many users I batch and there's a curve in the middle and so ultimately
20:05
some workloads will actually want the 4x cost decrease because the same unit of hardware can do a th000 versus 250 and
20:10
some users I'll pay 4x more because I don't care about the price I care about time because the person using the tokens
20:16
is expensive or the feedback loop that I have here is expense is is expensive. If you had to guess, you choose the time
20:22
frame 10 years or 15 years. What percent of inference compete do you think will happen in space?
20:28
Can be 0% 50% Sean 99% like this is a tough one. Um you choose the
20:35
time frame like 10 whatever time frame and you're so I think I think the non- consensus or
20:40
at least against SpaceX thing, you know, I love SpaceX by the way and I totally would buy the IPO if I could buy stocks.
20:46
Um not investment. Not investment advice. Thank you. Thank you. not invested ice um from either um
20:54
I don't think that space data centers will really matter in the next um you know 3 to 5 years um with that said I
21:00
think in you know 20 years I think the vast majority of compute will be going in space um and so the real real factor
21:08
there is sort of you know what's the cost it's the time frame it's the cost of building power on terrestrial land
21:14
and how much power you going to be able to do on terrestrial land and I think obviously my views of where inference
21:19
you know you know how many gigawatts or terowatts are devoted to inference is it's a crazy curve for me personally
21:25
what's your forecast how many gigawatts or um yeah I think I think by you know 2030 just open anthropic we'll have over 100
21:31
gigawatts combined um and then you'll add you know meta and Google and you know so on and so on so forth it's it's
21:37
a humongous amount of compute that will be dedicated to inference um and by like 2040 it'll be terowatts right um the the
21:44
curve of like productivity that we're going to get and so you know inference deployments is going to be huge And so if you look at like 2040, I think like
21:50
you know probably more than half of the incremental compute will be going in space. But if you look at 2030, I think it's sub 1%.
21:56
Do you think intelligence per watt has been increasing? Uh and then it seems like there's still a giant gap between
22:02
where we are intelligence per watt versus like human biology and so like if we are do you think we are to close that
22:07
gap? And if so, where is that game going to come from? Yeah, I think I think it often depends on what you're doing too, right? Like a
22:12
TI84 is way more intelligence per watt in terms of doing math than us and it's like 30 years old, right? Obviously this
22:18
is like a dumb dumb you know sort of general intelligence. Yeah. But general intelligence wise um so one of the things inference X does is
22:24
we also measure the power and cost of all of these this hardware. And so we offer not just you know throughput
22:29
versus interactivity we offer cost versus interactivity. We offer power versus interactivity. And so as far as
22:36
has you know intelligence per watt been increasing? Um I mentioned you know it's been a 60x cost decrease for same
22:42
benchmark level. Um we've also seen the same on on uh intelligence per watt. Um it's not been it's not been exactly 60x.
22:49
It's been closer to like 40x. Uh some of the efficiencies are nonp power ways, but there's been a humongous improvement
22:55
in in intelligence per watt on an annual basis at least so far this year, last year, year before, year before. And I
23:01
expect that to continue as far as where we are from the human brain. We're we're many orders of magnitude away.
23:06
Thankfully, doesn't really matter. We can devote a lot of power to computers. Much easier to power computers than
23:12
human brains. Like you know, we have sickness, disease, and like food preferences. sleep. Uh yeah, exactly.
23:18
Let me just ask one more question on the like on the general theme in my opinion in terms of like you know intelligence
23:26
per watt or intelligence per per dollar like any any of these
23:33
metrics. I think there's kind of three levels of input. You can get hardware
23:39
improvements that are where the hardware is more efficient. You can get lowlevel
23:44
systems optimizations like kernel level you know improvements matri multiplication libraries you know things
23:50
like that or you can get like highlevel like model level algorithmic
23:55
improvements you know at the highest level. It see like to me it seems like in the last three years most of the
24:01
gains have come from hardware level and you know and some from the model level
24:08
like do you think that that is what do you agree with that do you think that's what look like in the future do like do
24:13
you think there's a bunch of juice to squeeze in a say like kernel level like yeah Sean I completely disagree with you
24:19
by the way great great that's why I'm asking this question um okay so I I think you know one way is
24:25
to look at as these three different layers Um and in that sense like okay from hopper to blackwell which is all
24:30
we've had over the last three years roughly 30x improvement on deepseeek on the most optimized deployment which is
24:36
you know you can see on inference there's about a 30x improvement but you know over the last three years um we've
24:43
had way more improvement intelligence per watt a lot of that coming from the model layer right if you look back three years it's GPD4 now it's like you know
24:51
you know maybe like Quen one of the smaller Quen models that's like you know 27B parameters total and like 2 billion
24:57
active is like way better. Um, and so you've got this huge improvement on model layer, you've got this pretty sizable improvement on hardware, but
25:03
it's that co-design layer and I think that's that's what's important, right? If you look at the architecture of, you know, any of these models, but deepseek
25:09
is the most famous one at least, uh, that's public and people have seen. Yeah, Deepseek got huge efficiency gains
25:15
from like co-op optimization or kernel level optimizing memory. Yes, I I think it's it's it's like
25:20
kernels of course, but it's actually you build the hardware architecture for the chip. So if you look at the shapes of
25:26
all the experts in in DeepSeek, uh V3, they were all optimized for Hopper. And if you look at for V4, they're optimized
25:32
for Blackwell and Huawei's chip. And what's interesting is despite the fact that TPUs are objectively an amazing
25:38
chip, you know, and and they run all of deep mind and they do all the training uh for anthropic as well on the
25:44
pre-training side at least. TPUs suck at running deepseeek, but they are really really great at running other kinds of
25:49
models that don't run well on NVIDIA. there is some level of such deep optimization that has been done um
25:55
whether it be shapes uh network IO uh patterns you know how you do the collectives how you do um things around
26:02
you know the the arithmetic intensity of the attention mechanism all these different things are co-optimized
26:07
between the model and the and the and the hardware and the infrasoftware in between and it's it's hard to say you
26:14
can disentangle the games do you think that like my understanding is that like China has done this a lot
26:21
better than the west the last few years like in the deep sea was one of the first models to really like do this.
26:27
I don't necessarily think so. think it's more so that the west doesn't tell people what they do right like open eye
26:33
didn't tell people that you know GP40 was uh how sparse it was what the shape
26:39
size was all these things but GP40 is roughly the same size slightly smaller than deepseeek v3 and 40 came out you
26:46
know a little bit earlier right if I recall correctly so is your is your view that like all three of these things have been
26:51
happening simultaneously at like roughly the same rate and the most the biggest gains are when you just co-optimize
26:57
I would say I would say there's been more gains on the model layer than on that co-op than than on the sort of
27:03
software infrastructure layer and the hardware layer. Um, but there's been innovations on every layer and and and really the biggest gain and the beauty
27:10
of the best labs is when they co-optimize all three, you know, and and and that's what like you know when Enthropic is is, you know, even though
27:16
they used many different kinds of hardware, they don't really inference too much on TPUs. They mostly train on TPUs. um and and they inference a lot on
27:24
cranium and GPUs and GPU is more a jack of all trades but they've optimized their hardware they're optimized their
27:29
model they've optimized everything so they can do that whereas open AI they're you know prior models were optimized for
27:35
hopper more now they're more optimized for blackwell and you know you you step forward through time these these um
27:40
these labs and and and the same with Google right they've they've they've optimized you know Gemini 2 was really
27:46
optimized for the TPU uh v uh v6e or tp Gemini 3 was and then Gemini
27:52
uh you know the next Gemini that's coming out is really optimized for TPV7. Um and so sort of like a lot of these things are being co-optimized and
27:59
actually when you pull that model and put it run it on the old hardware it's really not that great. Um and so I think
28:05
a lot of this co-optimization is is the most important thing. It's called software hardware co-design and that's what's like really exciting about like
28:12
you know sort of what what you know I think my day-to-day is like you know great you get to look at one layer there's all these innovations happening
28:18
here there's all these innovations happening on every layer. The real breakthrough innovation is when you leaprog a few layers, you co-optimize
28:24
and co-design them, and now all of a sudden you've you've taken what could have been a 2x here, 2x here, 2x here, and instead of being multiplicative to
28:30
8x, it's actually 100x because you've optimized across all three layers. And so that's what's really exciting about
28:36
sort of like what you see at the labs, which you see at like a company like Nvidia who's not co-optimizing on the model layer per per se, but a little bit
28:43
from the model layer all the way downstream to, you know, silicon. Or you look at a company like TSMC, they're co-optimizing not just, you know,
28:48
fabrication, but all the way from the components and the consumables and the tools all the way upstream to what the
28:54
designs, their chips are, the customers are telling them is this co-optimization across many layers of the abstraction
28:59
stack. There will always be bottlenecks somewhere in that optimization though that are like lagging behind and then
29:05
need to get pulled forward, you know, and band-aids to toact.
29:11
If you had to predict like what are at any level of the stack, it can be literally anywhere. What are some of the
29:18
bottlenecks you're most like you're kind of tracking most acutely the next year? And not necessarily in the supply chain,
29:24
not in like scale, but in terms of the actual um and it can it can be in the supply chain too, but just like you
29:30
know, is it memory improvements? Is it is it that like just like scaling? So memory memory
29:38
is memory is an easy one that everyone's talked about, but I'm not going to talk about from a supply chain angle. I'm talking about from a technology angle,
29:43
right? Memory um capacity and bandwidth have been improving very slowly. The NAN
29:48
cell was invented like 25 years ago. The DM cell was invented like 40 years ago and there's been no major breakthrough
29:54
in in cell like you know how what a NAND cell is. Obviously NAND is like a very simple gate or DAM cell. There there is
30:01
stuff that could come down the pipeline that could be hugely innovative. But even over the last, you know, five years, all we've really done is make the
30:08
HBM, you know, more stacks, faster, but actually there's like new innovations coming in the next few years where
30:14
instead of, you know, stacking the HPM separately from the chip, you stack the memory directly on the chip and that makes your bandwidth explode. Um, and so
30:20
there's interesting companies in that space and interesting PC's that companies are trying to do there. I think like memory bandwidth is one of
30:26
the biggest. Another one is um for the history of like silicon basically for
30:32
the last two decades at least you know how many watts a chip is can be easily predicted just by looking at it for for
30:38
a data center or desktop chip it it peaks up at one watt per millimeter squared and so if a chip is 100 millime
30:45
squared generally the power consumption is around 100 or a little bit less um and if you look at the newest Nvidia
30:50
silicon the newest TPU silicon it's still on that range of one watt per millimeter squared so you know chips are
30:56
now getting to you know, 1400 watts. Next generation is 2,000 watts for Nvidia. Um, with Reuben and such. Uh,
31:03
and and you move forward to Reuben Ultra, it's going to be like 4,000 watts or something like that. But really, there's increasing the amount of silicon. What's exciting is we're now
31:09
finally doing things and and it's in development right now where you actually can pump the amount of power into the
31:16
silicon uh to be way more than one watt per millimeter squared. And now that all of a sudden means you need less silicon.
31:23
Obviously, it's running at higher power. It's less efficient in some cases, but you reduce the amount of silicon and
31:28
you're able to like like over thermal issues, thermal issues. Um there's uh interference of like electrical
31:35
interference issues. There's all sorts of different issues uh that crop up and that's why it's a hard engineering problem. That's why we've stuck at about
31:41
one. But what's exciting is the world is trying to change these things. I think interesting like in a different part of the supply chain it's sort of like you
31:47
know people people will talk about like energy is hard and you know we have energy bottlenecks and it's like yeah
31:53
but there's actually like very simple solutions you know one could think of right um take the millions of diesel
32:00
engines for trucks that the US has the capacity to make um you can very trivially convert them to be using for
32:06
gas uh in the assembly line and then stick them up to a electrical motor like back driving it so the electrical motor
32:12
generates electricity rather than the electrical motor causing the the rotation of the wheel, for example, but
32:18
doing it the opposite direction. And now you've generated electricity by pumping gas into something that us can make millions of. Um, and then, okay, well,
32:25
that sounds like a pain in the ass to uh service, right? Because now you have to have hundreds of these on a data center
32:31
site. Well, actually, you can just pull people out of car mechanic shops and have them run around and repair truck
32:36
engines. Actually, it's actually pretty trivial to not I don't want to say it's trivial, I couldn't do it. Um
32:41
I think you're making a really good point which is that like because the
32:46
west wasn't really thinking about semic even hardware more broadly the last 20 30 years we didn't have like much
32:53
innovation we'd have the best minds like thinking about how do you improve these why why would you why would you want to go work in hardware when you can uh make
33:00
ads to ads yeah exactly um okay I'm dying to ask Nvidia versus
33:06
TPU what are your thoughts um I think I think like everyone wants to pick one or the other for this, but
33:11
it's really like a function of like look, you know, you look two years from now, Google's going to make 10 plus million TPUs and through their supply
33:18
chain and Nvidia is going to make, you know, many more million tens of millions of GPUs and both are going to be 100
33:24
plus billion dollar, you know, well, Google's going to be 100 plus billion dollars, you know, of TPU created a year and and Nvidia will be, you know, 500
33:31
plus or, you know, whatever. I'm not making a specific estimate. This is not revenue forecast. This is just a thought experiment.
33:36
Yeah. Or research. You've been media trans. Absolutely. you know, getting ready for the SpaceX idea.
33:42
Um, are you guys big in SpaceX? Okay, so that makes sense. Um, we're very lucky to be very large investors.
33:47
Awesome. Awesome. Um, so I would say um the the case of sort of like Google TPUs
33:54
versus uh Nvidia GPUs, they both have like points that are really like in their favor, right? You know, Nvidia
34:00
will be like, "Oh, well, we have switches and we're general purpose." And and TPUs will be like, "Well, we're more optimized. actually more energy
34:05
efficient and our network is actually more um optimized for certain types of network architectures. And so you have
34:11
like these counterpoints that both would really uh get into and you know I could with a straight face argue with you like
34:18
that GPUs are way better than TPUs or TPUs are way better than GPUs but it comes down to hardware software codeesign. So actually the way OpenAI's
34:24
models are headed, it would be a terrible decision for them to use TPUs potentially. And the way that Enthropic
34:30
and Google's uh models are headed, it's actually a terrible decision potentially for them to train with GPUs. I mean,
Sparse vs Dense Models
34:35
it'd be fun to what's the what's the fundamental difference there? There's various things, right? Like the size of the matrix multiply unit is
34:40
different as a as a very simple thing. And therefore, the shape of the matrix multiply you do, the attention mechanism
34:47
you use, uh the way that attention mechanism is structured, the way the experts are structured. So you think so
34:52
open AI and anthropic are converging the very different model architectures. I think they're I think they have quite different model architectures. In fact,
34:59
um, you know, open eyes are much more sparse, um, and that has benefits. And then anthropics are, you know, they're
35:04
still sparse, but more dense in general, and and that has different benefits. And there's many other things, right? The network topology, right? Nvidia, all of
Interconnect Shapes Architecture
35:10
their chips are connected to switches, NVLink switches. For Google, they have no switch. Um, but what they've done is
35:17
they've been able to, you know, Nvidia, the NVLink can only connect 72 GPUs. for Google, their ICI can connect 8,000
35:24
chips at super high bandwidth, but you have to pass through other chips to get there because there's no switch. And so there's like there's trade-offs there.
35:31
There's positives and negatives and that influences the model architecture. It's not necessarily that you should uh you
35:37
know claim one is better than the other because at the end of the day, how do you say that this is better than that
35:43
when you can't measure them in isolation because it also extends up to the model layer, right? Um
CUDA Moat Is Shifting
35:49
but I remember for a long time thinking you know one the programmability of Nvidia and just CUDA as as such a big
35:56
moat. It seems to me that narrative has kind of changed at least in my mind for the last three six months like model companies no longer care about if we
36:03
have to write custom kernels for you know this other chip so be it. We'll work with four or five chips if we have to. Um Claude and Codeex are actually
36:10
quite good at doing a lot of that optimization work. And so it seems like some of the and then and then it's you
36:16
know it's not like there's 10,000 model companies that are each you know each need programmability. There's on the
36:21
order of tens maybe model companies and so it seems to me that like if you the
36:26
fundamental premise of like tens of thousands of big customers that need CUDA compatibility like it seems that
36:32
kind of thesis is is changing in the last Yeah. I mean I mean certainly the CUDA mode and software remote is at least
36:38
partially uh disentangled because you know models are just great at coding and
36:44
all software gets commoditized in that case. I do think there is some level of like open source and you know what
Ecosystems and Co-Design
36:50
people call the CUDA mode is not actually anything to do with CUDA but it's like the fact that DeepSeek Kimmy
36:56
and and Zippui and and Alibaba and Tens all these all these companies Xiaomi had
37:02
an awesome model recently their models are co-designed for GPUs and therefore if I want to run them on TPUs actually
37:08
in some cases they don't run really well on TPUs now Google just has to create their own open source model ecosystem or
37:14
open source models themselves so they have the Gemma models and and so you end up with like well that's not really CUDA
37:19
as a moat it's that the downstream product is more optimized for Nvidia and in these cases these companies are just
37:24
open sourcing them or like Neotron is just open sourcing it and then the users of it for example the open you know the
37:30
inference uh API providers the RL companies that are trying to take open models and customize them for company's
37:36
business use cases all these different companies are downstream of the fact that like okay well I guess I need to use Nvidia because the ecosystem uses
37:42
Nvidia even though I don't partic particularly care about writing CUDA kernels because the models are great at
37:49
that, but it's like the shape of like well this expert the the demod is this and you know the hidden dimension blah
37:54
blah blah is this right and and so therefore it's better to run on Nvidia GPUs than it is on TPUs and vice versa
38:00
right if Google were to actually open source really good models you know this would be the same thing right people would take their models and they'd be
38:05
like oh wow these don't run that well on Nvidia GPUs um I should actually just rent TPUs or buy TPUs and do it on there
38:12
for small teams you're going to want to use all the open source software like VLM MSG laying um pietorch all that stuff but the big labs they don't
38:18
necessarily need to use all that right open I forked PyTorch long ago and you know anthropic and all these other people don't necessarily rely heavily on
38:25
the open- source implementation of you know these things they forked things or built it on their own already and so
38:31
they don't need to rely on the open source and therefore now it's more like you know I'll choose the best hardware and I'll co-design my model and
38:37
infrastructure software through and through for that hardware uh that is the best and most costefficient
38:43
and you know I'll have AI help me write all that software. What do you think of Cerebrus? I think Cerebrus is a really innovative
Cerebras Speed and Limits
38:50
company. Um I I think in in some spots of the market they're really really good. Um very fast inference. I think
38:57
that's a big market. Uh we use fast mode almost exclusively at semi analysis. Um by the way I love how disciplined you've
39:04
been about accounting for I don't know if that was one exhibit you did or if you do it consistently but accounting
39:09
for the dollar spent and the ROI on each task. Awesome analysis. Yeah. Yeah. We we we uh we do it pretty
39:15
diligently and so thank you. That was the dark GDP article that we wrote. Um and so and and also like track
39:21
everyone's token spend by day and if someone's like spiked up I'm like what did you do? It's like okay thank you for telling me that that seems worth it.
39:28
Cool. On with my day. I think fast mode is obviously worth a lot for high-end tasks, right? I could just see so many
39:33
different use cases where you know super fast tokens are worth it. I can also see the flip side where there's a lot of use
39:38
cases where super fast tokens aren't needed and and therefore uh the market won't pay for them and they'll use GPUs
39:44
and TPUs instead. I think the big risk for Cerebrus is I mostly think the best
39:50
models are the ones that you want to use fast mode on and small models you necessarily might not use fast mode on. I could see that being wrong with you
39:56
know financial markets maybe or something like that like a Jane Street high frequency trading or something like that um or medium frequency trading. Um
40:03
but ultimately you know running really large models at really long context is very difficult on SRAMM based chips like
40:09
Cerebras like Grock and so now it all of a sudden is like you know what happens then if like the models get too big
40:15
right if open's model is not you know on the order of uh you know hundreds of billions parameters or you know low
40:20
trillion parameters but it's actually 10 plus trillion parameters now all of a sudden I don't think that that will fit
40:25
on cerebrus right and then if that doesn't with a long context length right if you have a million context length now
40:30
that makes it really difficult to justify you know, and and as all so far we've
40:36
seen the bulk of revenue and usage at the labs be on their best model. Even when the model price has gone up, we've
40:42
seen that. Um there's some data that shows that even though Fable just released today, they've had incredible
40:47
amounts of people switch to Fable and Mythos, sort of that next tier model, even though it's way more expensive. And so um
40:53
is that and that's volume by dollars totally. But was that volume by tokens? Well, I guess who cares about volume by
40:58
tokens? It's about the dollars. Fair enough. Right. If I don't care that there's, you know, uh, you know, I don't know,
41:04
200,000 Mini Coopers or Toyota Camry sold if if, uh, you know, I don't know, Ford50s are 5x ASP and they sell only
41:11
half as much. Okay. Right. And then and and therefore the most lucrative market is pickup trucks in America. Right. Mostly being facicious,
41:18
but like I do think this is one of the things that you've done so well and differentiates you from almost everyone
41:23
else is that you you care so much about the economics in addition to the technology. And I think very few people
41:30
bridged those two thing things well. And so I think I think it's really fun inside
41:35
of semi analysis because we have 90 people and like a big chunk of them are technologist engineers across the whole
41:40
supply chain. Um and then a big chunk is people who are formerly at hedge funds and you see these arguments like people
41:46
are like oh well that doesn't matter and it's like then someone's like well but cost and then someone the engineers like no no but this technology is the
41:53
coolest. You see this you see this organically like fight it out. Um and and were pretty informal and you know
41:58
given the fact that I was a for moderator is you can imagine what the the enjoying it
42:04
you don't wrestle with a pig because a pig enjoys it. Exactly. Just on this topic before going
ROI Debates and Hot Takes
42:11
to the next question. Are there like trigger topics in semis for you? You
42:17
know like if someone's like which is like such a meme you think this person must be a like if you know if it's like oh you like memory is the
42:25
bottleneck. I mean it's true but like um I think I think moreover the one that
42:32
really gets me is people are like AI has no ROI infuriates me right like there's like
42:37
what's the ROI or like denying model progress right there's these people that are like models aren't getting better they're not reasoning they can't think
42:44
they're going to deadend and plateau and it's like bro the line has been up and to the right in terms of capabilities this entire time and they're like look
42:51
this benchmark didn't improve that's cuz it said 90% look at the new benchmark you saturated
42:56
now they're skyrocketing, right? It's like I think that's more so the issue and challenge. Like I think semis are
43:02
really complex and I don't fault people for um lacking like understanding of it.
43:09
Like I learn stuff every day about the semiconductor supply chain from people and I've been studying it for you know
43:16
arguably 18 years since I started moderating the forums when I was 12 right like you know arguably been
43:21
studying it for that long but even then like and it's like live breathed and that's all I care about but there's so many layers of the abstraction stack
43:27
it's like like I learned about a new chemical that does like a hundred million dollars of sales like yesterday
43:32
and I'm like whoa didn't know this one existed and what process it did and it's like but it's like you know you learn
43:38
about things all the It's like okay hundred billion dollar sales in a you know couple hundred billion dollar industry is whatever but like you know
43:44
it's like but it's essential it's essential and it's like actually every chip requires it. It's like wow I
43:49
guess there are a thousand process steps and you know it's like oh yeah you like semiconductors name every process step. It's like no come on. What what I think
43:55
is the most funny is when people have all the facts in front of them and then they get the conclusion completely wrong. Um and that's
44:01
that happens in our job all the time too. Yeah. Yeah. I mean, I can't I I get I I think
44:06
my attitude is not to be mad that you do that. It's to do it as fast as possible. I think the industry because it's so
44:14
it's just like AI is the most important thing in the world right now and there's so many near-term bottlenecks. We talk a lot about the near-term. Are there
Ten Year Tech Bets
44:21
longer term things that you're really excited about? Like say on a 10-year time frame? We talked about orbital data centers, but like like siliconics, you
44:28
think they're underrated or overrated on a 10-year time frame? Are there other things that on a 10-year time frame? Yeah, I mean I think on SP I think space
44:34
is like super crazy awesome in the 10-year time frame that I'm you know for space data centers and all these sort of
44:39
mining asteroids and all these things which is you know super excited about the vision of SpaceX right um again not
44:45
investment advice before you hop in um I think I think on the semiconductor side tremendous market movements and
44:50
tremendous like things can happen just when like things happen one year later or sooner and so that's all like technology that like you know in terms
44:56
of like co-ackage optics like well like everyone knows it's going to happen by the end of the decade the the debate is
45:02
like 27 7 28 29 2030 but some point along there it's going to happen. I think the more interesting thing is like
45:08
there's companies like um I did you guys invest in Navian Ral's company? We did. Okay. Yeah. So I think like he's trying
45:14
to innovate on like the silicon layer on the software abstraction layer and the model layer simultaneously and he fully
45:20
understands that it's not a like a you know we're going to do this in a few years. It's not a two-year time frame. Yeah. It's not a few year time frame.
45:26
It's a long-term bet. Um, and like stuff like that is like, okay, we're going to bring like potentially like analog
45:31
compute with energy based models and like all this crazy all at once. It's like that's exciting. Probably
45:37
won't work, but you know, that's exciting and I I like really look forward to definitely won't work quickly.
45:42
Yeah, definitely won't work quickly is what I should say. I believe in Deaveen and like, you know, I I I met him very,
45:49
you know, I think he's one of the first people I met in the industry um, funnily enough, like in 2020 or 2021. Um,
45:55
actually 2020. Yeah. It says something about him. I think he's someone in my experience. He's always trying to
46:00
I baited him on the internet. I baited him on the internet. That's He's always trying to help the younger generation. He's trying to identify
46:07
talent. And he was also so ahead of his time with Mosaic. I remember getting pitched. No, it was 2019. I was still I was still
46:13
anonymous then actually. I I baited him on the internet and he started replying and then I just took it to DMs and then
46:18
took it to a call and like that was the first person who's like really important that I talked to in the entire semiconductor industry. funny.
46:25
Um, but yeah, sorry to interrupt. That's funny. What do you think is the end state of the ecosystem? Like do you
46:30
think every lab, every hyperscaler just has its own chips? Like train seems like it's now working, right? So do you think
46:37
we end up with every lab, every hyperscaler has it own chips at least for inference and then maybe for training you go to Nvidia or whoever or
46:42
what do you think is the end state? I think everyone will try and stop
46:47
trying. I think ultimately um you know supply chains matter. what technology
46:54
you can bring in matters and more and more as the industry gets bigger supply chain diversification happens. Um you
47:00
know right now everyone's chip more or less looks the same. It's a big logic compute die in the center and there's
47:06
some HBM on the right and left and on the top and bottom top side is networking and then the bottom side is PCIe and other IO. Um and that is the
47:14
exact same structure for tranium TPU Nvidia chips. Um and most of the startups um not Grock and Fris are doing
47:21
weird but that's cool you know um I think like as you step forward we're going to get more bifurcation of
47:27
hardware architecture and model architecture and therefore people are going to co-optimize them and you know some of them will end up in local
47:33
minimas right you know as we're you know if this is like gradation gradient descent like people are like trying to go to the most optimized solution some
47:40
people will race to a local minima and then the question is like how do you leap how do you scoot back over to like
47:45
the absolute minima and some to some extent like a general more Nvidia will always be more general purpose than
47:52
anyone else's chip in general um at least on a parallel AI compute basis because they have so many customers who
47:58
care about different things who will always give them feedback in the design you know the minima will always be better than them but is that minima a
48:04
local minima like is is the TPU or tranium or grock or cerebras or whoever's design
48:10
optimized awesomely for here but in the end state actually you got to go over here and so they're the wrong
48:16
um and Maybe they make a great time, they're great for a little bit of time, but then they end up being wrong. It's like that's the real question. Um, and
48:22
so I think I think there will be a big market for general purpose AI compute. Um, because you talk to people at labs,
48:29
they don't even know what architecture they're going to be doing in a year. Like, right, like they literally don't know what architecture they're going to be doing in a year. They have bets. They
48:35
have many research bets and and that's this exciting thing, but they don't know where where it's going. generally they like know what hardware they have and
48:41
they're trying to co-optimize but ultimately like if a new breakthrough happens on model architecture it's like just replace the tension mechanism with
48:47
something else right who knows or you know all of a sudden you know something happens the best hardware will change
48:54
and therefore like are people going to make fiveyear investments on hardware solely on you know an an asich that is
49:01
more specialized or are they going to do so they're going to have some bucket of more general purpose compute and so you see this with like Google's paying $11
49:08
an hour per GPU to XAI for G for GPUs, right? Like that's insane, right? It's a
49:13
very high amount of uh obviously compute is limited and and so on and so forth, but it's like very like insane, but at
49:20
the same, you know, despite the fact that they have TPUs and so there's like some questions there like why do they do that? Um Google actually has three
49:25
different design programs for TPUs. They're making a TPU with Broadcom. That's a different architecture than the TPU with MediaTek. That's a different
49:31
TPU than the architecture that is, you know, I won't disclose, you know, by research. Um but, you know, they're
49:37
they're making different architectures. It's not just like, oh, they're making TPUs with a couple vendors. It's the
49:42
same architecture. It's different architectures. And the third one is a very different architecture from the first two. And so, I think people
49:48
recognize that the local minima can happen. And therefore, um, I think everyone will have their own ASIC
49:53
program. I think everyone will deploy billions of dollars of their own AS6, tens of billions of dollars. In the case of Google, hundreds of billions of
50:00
dollars a year of their own AS6. But ultimately, they're also going to have workloads that don't use TPUs, right?
50:06
Some of the Google bets that are not Gemini Deepbind actually primarily use GPUs. They don't use TPUs. Um, some of
50:11
them also primarily use TPUs, right? It's a bit of a broad thing, but like, you know, maybe for drug discovery or
50:17
for Whimo, you might not want to use TPUs. I won't say which one it is, but like, you know, there's there's there's there's different architecture bets and
50:23
different paths for AI. AI for science may have different algorithmic patterns than than general intelligence AGI
50:29
models. Um, and so I think we'll see we'll see diversity continue to proliferate. Yeah. and and and because
50:35
the market has gotten so big, niches will be carved out and so that's makes it possible for companies to have their
50:41
niche and actually make money even if the majority of the pie goes to Nvidia and TPU and tranium.
50:46
Yeah. Okay. Love that. Can we talk about the data center buildout? Like one, it seems like I mean by all accounts if you look
Compute Crunch and NeoClouds
50:52
at the charts like dollars per compute hour, we are in the middle of a crazy compute crunch. Um and it seems like
50:57
it's both a demand and supply side crunch, right? demand for long agents skyrocketing, supply, all these data
51:03
center buildouts are delayed. Um, do you think this we're in a compute crunch for the foreseeable future or do you think
51:09
it alleviates at some point? Yes, every quarter we're deploying vastly more compute than the prior
51:14
quarter and there's more data centers built than the prior quarter. Um, this year there's going to be 20 gigawatts uh
51:20
even accounting for the delays and next year there's going to be more than 30 gigawatts accounting for the delays. Um,
51:26
of course delays happen on everything, right? Anything hardware can have a delay. That's that's just the reality of life. Are we gonna have a compute crunch
51:32
for the rest of our lives? It depends on what happens with models. But like the TAM for Mythos, you know, Mythos 5,
51:37
Fable 5 is not just like 2x that of Opus, right? The model is so much better
51:45
and it can do so many more tasks that the Tamford is way larger than that. And yet compute in the world did not double
51:50
in the last, you know, six months, right? From, you know, Opus or maybe like seven or eight months since Opus 45
51:56
launched to now. huge you know 46 47 48 were improvements but fable and methos
52:01
were like a huge step function improvement the world's compute did not double in that or or quadruple or whatever in that same time frame but the
52:08
demand for useful tasks that can be done by AI the number of useful tasks and the value of them that can be done by AI has
52:15
and so now the question is what happens well obviously anthropic in Q2 is
52:21
profitable their net income profitable um excluding stockbased compensation um
52:27
And and I think by Q3 they may even be profitable including stockbased compensation. That's like how profitable
52:32
they're getting. And their margins on a on a on an Opus token, at least Opus 48 token is like north of 80% for the API
52:41
price. They've got a lot of deals where their total corporate gross margins gets clawed down a little bit uh because of
52:47
like how they do bedrock deals and vertex deals and things like that. But ultimately their their per token margin
52:52
is so high. Well, then if you don't have the cap, they have the capability to pay
52:58
ultimately every GPU they buy at above market rate. You know, they also bought GPUs at above market rate from SpaceX,
53:04
which is below the rate of Google, but that's because they signed earlier. Um, you know, it's it's something that, you know, other companies, maybe a
53:10
ventureback company or company that's not really got positive uh margins can't necessarily do, right? What is the cost
53:16
benefit ratios like every GPU I rent because I'm out of compute capacity I can immediately turn around and sell
53:21
tokens on it or every TPU or every tranium I can immediately sell tokens on it at a positive margin and if I'm
53:27
running 75% gross margin and I double the cost of the compute it's fine I'm still running 50% gross margin and
53:33
spinning up more compute nodes is not really necessarily a human requiring task for them if they're renting them and so ultimately it's like well my NOI
53:40
still goes up right and and so I'm going to rent GPUs at whatever price at some level whatever price I want to pay I can
53:46
pay. I have almost the reverse question of like at some point does this compute build out go bump at night? Earlier
53:51
today I think there was a tweet like Cuso publicly said one of their customers had asked to halt construction on one of their data center buildouts.
53:58
Like it seems like everybody in the ecosystem is so levered right now to like we got to build, we got to go build, we got to build. High leverage
54:04
high growth to me is like makes me very very nervous as investor. Like wait hold on. High leverage high growth
54:10
means small amount of equity has huge upside. You're not a debt investor. You're a credit you're an equity
54:16
investor, right? Let's go. Um, look, you got you got to go to the school of private equity. Levered
54:22
buyouts only. I actually come from the school of private equity. Oh, awesome. She forgot the school. It's been a VC
54:27
for too long. Yeah. No, I just do revenue multiples. No, but are you do you see any signs of that?
54:33
Are you worried about that? I I I see what you mean. Right. And that sort of goes back to the model point, right? Obviously if the models expanding
54:40
the total economic valuable like work sort of the dark GDP uh report that we did and the you mentioned earlier um if
54:47
the work that these models can do does not expand faster than the compute capacity then that tide turns right and
54:54
over the last six months that tide has been you know very much levered in this direction of um you know the models can
55:01
do more work or can is exp or expanding their TAM of work they can do faster than the compute is increasing And so
55:07
prices go up. It's very possible that all of a sudden model progress stops. You talk to anyone at Enthropic or
55:13
OpenAI, maybe they're drinking the Kool-Aid, but you talk to basically all of them, they're like, "No, no, no, no. Model progress still go up." Um, and so,
55:20
you know, ultimately, you know, current methods could stall somewhere. I'm not sure where that would be. It seems like
55:26
we have line of sight to model improvement, rapid model improvement. And in fact, models are improving faster than they were six months ago or a year
55:32
ago because there's I wouldn't call it recursive self-improvement, but basically the engineer the models are helping write all the info and and
55:40
launch the next model sooner and sooner and sooner. So you've got this like pseudo recursive self-improvement loop going and so the models are getting
55:46
better and better and better faster. Um and so but ultimately, you know, capital is a big problem which is why Google
55:52
raised capital. You know, they they've got an ungodly amount of SpaceX, right? They own like 5% of the company.
55:57
I think a little more, but yeah. Yeah, maybe. I think at one point they had like 10%. Larry Page invested a billion dollars at
56:02
a $10 billion valuation, got 10% of the company, it got diluted, like all this. But that was one of the greatest
56:08
investments of all time. Good job, Larry. The guy. So, they know they have like a hundred billion dollars in the bank that they
56:14
can sell in, you know, nine months or whatever from the lockup. And they have all the gross profit they
56:20
do, and yet they still modeled that. and they were like we need to raise capital and so they did an offering and it's like that's insane. So that tells you
56:26
how much they think they need to spend. But capital is like really, you know, you know, Meta's do Meta did announce
56:32
that they're going to do a raise. Stock tanked. People don't like it, but you know, that's all these companies are going to raise capital, whether it be
56:38
debt or equity. At some point, money spiggots will have to, you know, slow down. But right now, every GPU that
56:44
Amazon adds, they're making higher revenue or every TPU or tranium, you know, whoever anyone adds is is making
56:50
is making gross profit. I do a little bit of a tea up on this to turn into a
56:55
question for you. But like as we talk about this for me, the thing that's going my through my head that's
57:01
that is almost an alternative hypothesis for like the Crusoe example. I'm going
57:07
use an analogy in oil like in oil Saudi Arabia has way lower cost per barrel to produce oil than a lot of other
57:14
countries. There's also like the purity of the oil. A lot of you know Saudi has generally like very low contaminants in
57:21
their oil which makes refining easier all of this. The question for me is like
57:26
when you look at for every gigawatt that's being put in the ground if call it the 20 gigawatts coming online today
57:32
like how much like how much homogeneity do you see in those gigawatts? Is it
57:37
something like and I don't you can tell me whatever metric you think is right but like are Google's gigawatts two
57:44
times more valuable than say most Neoclouds because they have optical
57:50
switches and they have like they've been doing it for a long time and like they know how to do power smoothing because I
57:56
think this could be the alternative hypothesis that some of the people that are it's like the people that are good at at building data centers they they
58:04
should just do it to the max because there's so much demand and there's so much better than it, but then maybe we're starting to see the early signs of
58:10
the people that are like not as good at it kind of getting hit a little. So I like I don't know the reality here. I'm
58:16
just curious how you think about this. So so far um there there are metrics for this, right? So uh tranium sells at
58:24
sub10 billion per gawatt rental rate uh to anthropic and to open aai. GPUs at
58:30
least before the craziness of the last six months usually went around 12 to$13 billion per gigawatt. So the rental rate
58:36
and this is from a neocloud versus Amazon even and now when Amazon sells GPUs they'd also be 13 or so
58:42
and my understanding of that also is that those number like Amazon subsidized that a little bit so that it's like I
58:49
actually think the numbers were even like I think the disparity was even more it's less than 10. It's less than 10 but
58:54
there's like some weird basically and like look I my understanding obvious
59:00
like anthropic played a big role in making tranium useful in terms of you know writing all the libraries etc and
59:06
and so like I everything I hear is that tranium's really freaking good hardware and it's
59:12
getting way like way better and obviously anthropic now using it a lot so hopefully we would see that price go
59:18
up you know like per the the deal they did was actually like there was a floor mechanism them and like it if it didn't
59:24
do well it would be like cheaper and then to the point where it's cancelceable and you know if it if it did really well the price is kind of higher um but effectively um less than
59:32
10 right is is where tranium shakes out at whereas GPUs I mean this the SpaceX
59:38
deal again was like 25 or something crazy billion dollars per gigawatt or $25 million per megawatt right a year
59:44
rental rate with Google I was like that's a crazy divergence now obviously if if if Amazon was selling tranium
59:50
today it' probably be more expensive than 10 because the comput shortages, but you you do see this already in the
59:56
sense of uh with data centers oftent times a rental price of a data center if you're doing collocation, right? Not
1:00:01
compute in there, but just power. Here's the data center. Um you you price it generally on a uh dollars per kilowatt
1:00:08
per month. And so they used to be $60 per kilowatt hour per month, and now you see things transacting at anywhere from
1:00:14
like 120 to 160. Um but different quality data centers, this actually
1:00:19
you've I've seen data centers go as high as 200. um when the customer is not such a great credit rating and then the data
1:00:26
center is a pretty good one. And I've seen stuff go as low as 100 still or in like India go like as low as 80 because
1:00:32
the grid's not reliable, the internet connection's not great and it's a pretty mid data center but at least it's a data center. Um and so you you see this huge
1:00:38
discrepancy there already. Um in the case of like data center construction, usually the pitfalls they
1:00:45
just fail. There's a lot of people who fail, you know, claim they're g they're like they're like four guys they they're
1:00:50
like, "Yeah, we here I bought some turbines. I put the money down for them. I'm gonna build a data center." And then they get delayed, delayed, delayed, and
1:00:56
fail. Um, so you have to like probability, weight, time, weight, time lag, the teams that suck versus don't.
1:01:02
Um, and and sort of, you know, our data center model does that. We kind of track every data center uh and try and do this
1:01:07
for every single one based on, you know, equipment that they're using and all these things. One of the things you mentioned about Google is you know in a
1:01:13
gigawatt data center they'll actually put like 1.5 gigawatts of hardware and because they have such understanding all
1:01:18
the way from workload to u you know they're able to slosh the power around and so instead of you know constantly
1:01:24
you know a gigawatt of compute which typically runs at like 60 or 70% utilization in terms of power consumption not utilization of the
1:01:31
hardware someone's always renting it um they're now running it at like you know you know that 60 to 70% means it's at a
1:01:37
gigawatt and you're using the full gigawatt um you see people doing deals with including Google with utilities
1:01:43
where they're like, "Oh, well, I know this grid can sustainably take a gigawatt, but you know, except for three
1:01:49
days of the year, you can actually do two gigawatts, so give me two gigawatts and then just tell me to turn off." And so they'll do that. And so these sorts
1:01:54
of tricks and then you need to have supreme management of workload, backup power, all these things, um, generators
1:01:59
on site to figure out how to actually keep it 2 gigawatts sustainably. When people do this, they're able to charge
1:02:05
more. Whether it be I'm actually selling two gigawatts despite only having one gigawatt because those three deers deal
1:02:10
days I'm be able to deal with via battery, gas, etc. or I figured out how to build power on site. Now I have a
1:02:17
gigawatt where no one else does and so I'm able to do it quickly. Um it's not necessarily transacting for a higher price. It's that I'm selling more
1:02:23
gigawatts. And sometimes there are levers where you're selling more gigawatts is where where each gigawatt is selling at a different price. Um I
1:02:29
think it's more on the data center and energy layer. It's more about just having it versus not and then that being delayed or not. It's more binary. But on
1:02:36
the compute side, I do think there's a lot more um interesting work there. Right? A gigawatt given to Enthropic is
1:02:42
objectively worth more revenue than a gigawatt given to OpenAI. And it seems that both of them could sell every
1:02:49
gigawatt that they have right now. Uh given rate limit problems and token max limit and all these sorts of things at
1:02:55
OpenAI and anthropic. Uh especially since Codex 5.5 came out, it's much better. And then likewise, if you gave a
1:03:01
gigawatt to SpaceX, you know, they turn my my guess, like my suspicion is that
1:03:07
they're they probably make better use of the, you know, hardware than most
1:03:14
people. Um, just like I think people underestimate how much networking experience they have from Starlink in
1:03:20
particular and also how much just like power management experience they have via from Tesla.
1:03:26
Yeah. people like Brett Mayo are like incredible like pretty good. Yeah. And so I I think that like for me that's actually I think probably the thing that
1:03:31
might I don't actually know the answer but I think that might be missing from the analysis a lot of people are doing.
1:03:37
I think I think it's also the fact that when Coreweave builds a gigawatt even though their GPU compute is objectively
1:03:44
better than Amazon or Google or Microsoft's in terms of performance. We've tested the performance and
1:03:49
reliability. Um, the problem is Google sells it six months before they have it up and they need to turn around and take
1:03:55
that paper that they signed to get debt uh with that credit backing and then turn around so they can actually pay for
1:04:00
the PO that they've already issued you know for the order that they've already issued. Whereas SpaceX was like no no no this is running now buy it right and
1:04:08
it's it's a big discrepancy when you have a balance sheet to do that versus not and that also helps your revenue per
1:04:13
megawatt like be much higher. Why does the Neocloud opportunity even exist? Because if you had asked me five years ago, I would have said the
1:04:19
hyperscalers are going to own this. And you know, you mentioned just now core weight has better performance than than the hyperscalers. Like what why does
1:04:26
this opportunity exist maybe at the macro level and then in the execution level? Yeah. So in 2023 I wrote a report that
1:04:32
had uh Amazon really hate me. Um it was called Amazon cloud crisis. So I talked
1:04:37
about how Amazon was the best cloud because they had their nitro nicks which offered like tenant isolation. all the
1:04:43
hypervisor ran on the nick and then you could sell all the cores and they had you know custom SSDs that they made and
1:04:49
they'd buy the raw NAND and they'd have lower cost because they'd buy the raw nand and build their own SSDs um and you
1:04:54
know they had their custom graviton CPUs and that drove down cost for for per core and so they had all these things
1:05:00
that enabled them to sell more cores have better security good networking for but this was all for the traditional CPU
1:05:05
better storage for the traditional you know cloud world but in the AI cloud a lot of this stuff hurt performance right
1:05:11
these nitro necks bad for performance, still are worse performance. Although they've caught up a lot because they've
1:05:17
had a couple iterations to like, you know, improve them, but they're still worse for performance. Um, a lot of the security stuff doesn't matter because
1:05:22
it's not like I'm time splicing users or splicing a socket into many users, right? It's like no one buy rents a
1:05:29
single GPU and an 8GPU server. No one rents a single GPU in a 72GPU rack. They rent the whole rack and in fact, they
1:05:34
rent many of the racks. And so, and then and then there's no like, oh, I rent for six hours and I give it back. it's
1:05:40
everyone has these long-term contracts. So, the mechanics of the GPU rental market meant that a lot of the expertise
1:05:46
of the hyperscalers fell away. Um, and a lot of the expertise that they did have were actually some of them were
1:05:51
detrimental, right? Network performance for Google and Amazon. It was they had custom networks that were better for
1:05:57
traditional CPU and for the stuff that they were doing, but actually worked for AI. Um and then in other cases it's like
1:06:03
well you know Microsoft would save money by building their own data centers but their data center teams are actually
1:06:09
were not actually that great and so when it came time to run you know when it was predictable building it was like fine
1:06:14
when it came time to like actually double your forecast for the year it's like they fell on their face and they had to go get a bunch of NeoCloud
1:06:20
capacity. I think so performance I think you know I think time to market's another one right ne you know these
1:06:26
massive organizations no one's getting rich from building this data center faster right but you look at Crusoe for
1:06:33
example Chase and and and and all the other people at the team you know I was
1:06:38
going to name some people at the team I'd rather not you know these all these people are getting rich if they deliver these this compute faster
1:06:44
they're they're you know they're lever they're hyperlevered equity owners hey look they're also all coming from
1:06:49
Bitcoin And and you know they you're not supposed to say that. Uh I mean a lot of the data center like their main data center guy came from
1:06:54
Microsoft. I don't know. I'm just I'm just teasing. But it's uh you know it's like you learn you learn a lot when you're in a very
1:07:01
high fluctuation you know market. What do you think was Jensen playing for
1:07:06
each chess? Jensen absolutely hates a world where all the hyperscalers have all the power. There's a reason he's like blowing money
1:07:13
on like random AI labs that like I don't even know if like it makes sense to but like you know he's blowing money and
1:07:19
pumping them up and going to you know everyone around the world and saying you should invest in this company because he wants to create a multipolar world.
1:07:25
That's why he loves Chinese labs because he wants to create a multipolar world. A world where open anthropic and Google models are the only models is one in
1:07:31
which he's screwed. Yep. Right. Um a world in which you know the hyperscalers are the only ones building
1:07:37
compute is one he's screwed in. Yeah. And so, you know, of course he needs to point the allocation gun at NeoClouds,
1:07:43
help back stop their clusters, do anything and everything because while today a GPU sold to Cruso and a GPU sold
1:07:49
to um Coree and a GPU sold to Google and Amazon are all the same price for him,
1:07:55
five years from now Cruso and Coree existing means Google TPU will be weaker
1:08:00
and means Amazon tranium will be weaker and more inference being done with you
1:08:06
know non-clos model labs is is better for firm. So I think you know the neocloud ecosystem is you know it's
1:08:12
these people that are wild west these neolabs as well a lot of them have investments from Nvidia it's the wild west some will fail many will fail but
1:08:18
you know some will emerge as really great teams whether it be you know oddly cruso who's a bunch of crypto guys who
1:08:24
then started building data centers and doing flared gas stuff or you know corweave who initially was a bunch of
1:08:29
New York hedge fun guys they were also and then they were doing and crypto guys but then they they they like built you know there were a lot of
1:08:35
people who didn't bubble up like them started around the same time just failed Right. And so I think you know um
1:08:40
I gotta say both those teams are phenomenal. They deserve a lot of credit and it's like that's your point. But yeah, I mean my point is like he he you
1:08:47
know you throw it's like you throw a bunch of like bait into the water and the best fish will figure out and survive, right? Um and and sort of the
1:08:53
same way with the Neoclouds and and and he hopes the Neols as well. We'll see if any of the Neolabs really bubble up, but
1:08:59
like you know Thinking Machines has a few hundred million dollars of ARR, right? That's pretty impressive even though they've had you know in the media
1:09:05
it's like oh they've lost all this talent. It's like, well, but Tinker is doing a few hundred million of ARR. Like, that's pretty impressive for out
1:09:10
of the gate a product that's less than six months old or whatever. Um, and and you, you know, we hope the same happens
1:09:15
to other Neolabs and and so um you know, he wants a multipolar world. Truly, congratulations on the success.
1:09:22
Thank you. Just the last thing I'll say is I've seen a little bit of this. I think the public, they can probably tell
1:09:28
from listening to you how hard you work, but like it's clear you've just been working your ass off for more than a
1:09:34
decade and it, you know, led to the last few years of being in the right place, right time. But like it's unbelievable
1:09:39
what you've accomplished and I know it's just the beginning. So, thank you so much. Thank you for doing this. Awesome.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

You’re right. This one has a real transcript, so the read below is grounded in the transcript, not the title/description.

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Metadata

Title: Why Hardware-Software Co-Design Is AI’s Real 100x: Dylan Patel of SemiAnalysis
URL: https://www.youtube.com/watch?v=f6D_aiy8qyU
Channel: Sequoia Capital
Speaker focus: Dylan Patel / SemiAnalysis
Source type: long-form interview / infrastructure-market thesis
Transcript status: transcript available and analyzed
Confidence: high for transcript-derived claims; lower for any market numbers because they are interview claims, not independently verified here.

Priority: 4.75/5
Depth: strategic infrastructure spine
Recommended status: preserve in EVSRC §3 as an infrastructure/economics source; route to OMNI Runtime, model-routing, cost policy, deployment economics, and “AI factory” doctrine.

Core takeaway

This is not really a “chips” video. It is a systems economics video. Dylan’s core point is that the largest AI gains come from co-optimizing across layers: model architecture, software/kernel/runtime, hardware, memory, networking, data center power, and workload shape. The “100x” is not one magic breakthrough; it is the result of aligning layers that people usually analyze separately. He explicitly frames the real breakthrough as cross-layer co-design, where what looks like separate 2x improvements can become far more than their naive product when the whole stack is shaped together.

For OMNI, the direct translation is: model choice is downstream of workload architecture. The winning system is not “pick the best model.” It is: classify the task, pick the latency/cost/quality envelope, choose the right runtime path, and continuously benchmark against actual workload distributions.

Key concepts to preserve
1. Living benchmarks, not point-in-time benchmarks

Dylan says inference benchmarking became obsolete because models, runtimes, libraries, drivers, and optimizations change constantly. Point-in-time tests become stale almost immediately. InferenceX exists because performance needs to be measured continuously across models, hardware, and optimization settings.

This maps cleanly to OMNI: evals cannot be annual, static, or demo-based. OMNI needs living evals tied to workflow lanes, model versions, prompt versions, policy versions, and real cost/latency/quality telemetry.

Candidate primitive: living_benchmark_registry.

2. The throughput–interactivity curve

The most important curve in the video is not “tokens per second” alone. It is the tradeoff between interactivity and throughput: one user getting very fast output versus many users/tasks being packed efficiently on the same hardware. Dylan describes the curve as downstream of hardware, infrastructure, model, and application-layer decisions.

For OMNI, this is the missing formalism behind “which model should handle this?” A synchronous patient chat, an async chart summarization job, a nightly claims audit, and an intake triage lane should not share one generic runtime policy.

Candidate primitive: throughput_interactivity_curve.

3. Workload-specific inference policy

Dylan gives the clean distinction: some workloads need instant response and tolerate higher cost; others can batch-process overnight and should optimize for throughput/cost. He explicitly rejects one-size-fits-all AI infrastructure.

This is directly OMNI-relevant. Every AI lane should carry runtime metadata:

latency_class
batchability
human_waiting
clinical_risk
cost_ceiling
quality_floor
fallback_model
audit_required

This belongs in the runtime router, not buried in prompts.

4. Cost is not abstract; it depends on the user/task feedback loop

The key economic line is that some users will pay 4x more because they care about time, not token price, especially when the person or feedback loop is expensive.

For OMNI: a physician waiting on a discharge med reconciliation, a front desk staffer waiting to send a patient SMS, and an overnight marketing segmentation job have radically different cost/latency economics. Runtime policy should price the workflow bottleneck, not just the model call.

Candidate primitive: workflow_bottleneck_value.

5. Hardware/software/model co-design beats isolated optimization

The video’s central doctrine is that the best labs co-optimize model architecture, hardware, and infrastructure software together. He gives examples of models being shaped for specific chips and says old hardware may run newer co-designed models poorly.

OMNI translation: don’t think of “agent,” “database,” “policy,” “scheduler,” “document store,” and “model” as separate procurement choices. They are one operating design. A clinical-memory agent should not be architected the same way as an ad-copy agent or a lab-review agent.

Doctrine candidate: workflow-software-model co-design.

6. Memory bandwidth and power are system bottlenecks

Dylan flags memory bandwidth/capacity and watts-per-mm² as major technical bottlenecks, then discusses future memory stacking and higher-power silicon as ways to move the bottleneck.

For OMNI, the abstraction is more useful than the hardware specifics: every runtime has a dominant bottleneck. Sometimes context is the bottleneck. Sometimes latency. Sometimes cost. Sometimes verifier quality. Sometimes human review capacity. OMNI should explicitly identify bottleneck class per lane.

Candidate primitive: dominant_bottleneck_class.

7. CUDA moat is becoming ecosystem-shape, not just programming API

The video argues the CUDA moat is shifting. It is less about humans writing CUDA kernels and more about the fact that many open models and downstream tooling are already co-designed around Nvidia-shaped execution.

OMNI translation: the real moat may not be a feature. It may be the shape of the ecosystem that downstream builders unconsciously conform to. For OMNI, that means the care graph, service occurrence model, document/event schema, and evaluation harness can become more important than individual AI features.

8. Fast mode is valuable only for some workloads

Dylan’s Cerebras discussion is basically a warning against overgeneralizing fast inference. Very fast tokens matter for high-end interactive tasks, but many workloads won’t pay for that speed, and large models/long context can be hard on SRAM-based architectures.

OMNI translation: don’t route everything to the fastest model. “Fast” is a product value only when latency is actually the user-visible bottleneck.

9. ROI has to be measured at task level

SemiAnalysis tracks token spend by person/day and asks what caused spikes; Dylan links this to ROI-by-task discipline.

For OMNI, this is a big one: AI cost should not be treated as generic COGS. Every lane should support:

cost_per_completed_task
cost_per_human_minute_saved
cost_per_error_avoided
cost_per_billable_action_created
cost_per_patient_conversion
cost_per_provider_review

Candidate primitive: task_level_ai_roi.

10. Compute crunch is driven by useful work expanding faster than supply

Dylan’s argument is that compute shortages persist if models expand the amount of economically useful work faster than compute supply expands. He frames this as “work TAM” expanding faster than deployed compute.

OMNI translation: demand for AI inside a business will not scale linearly with users. It scales with newly discovered work the system can now do. Once OMNI starts finding work — follow-ups, refill gaps, unsent forms, missing notes, churn risk, conversion windows — the bottleneck becomes runtime allocation and governance.

OMNI translation

This source strengthens the idea that OMNI’s AI architecture should be workload-class-native.

Do not build a single “AI assistant.” Build a runtime substrate where every lane declares:

what kind of work this is
who is waiting
whether the task is batchable
whether the task touches clinical authority
what evidence is required
what latency tier is justified
what model/tool stack is admissible
what verifier closes the loop
what cost envelope is allowed

This is the infrastructure version of OMNI’s existing doctrine: workflow lane as unit of AI runtime architecture.

Likely OMNI landing zones

Runtime Router
Add latency/cost/quality/batchability routing, not just model selection.

Evaluation / Evidence Plane
Add living benchmarks by workflow lane. Static evals are not enough.

CNS
CNS should not just coordinate work. It should understand workload economics and route tasks according to policy.

D7 / Observation / Clinical Memory
High-risk tasks need slower, more expensive, more auditable runtime lanes. Low-risk batch jobs should use cheaper lanes.

Commerce / Business Ops
Task-level ROI should become an executive dashboard: AI spend by lane, value recovered, human time saved, revenue protected.

Federation / Multi-operator OMNI
Different operators may have different cost/latency policies. Runtime policy must be tenant-configurable, but governed.

Doctrine candidates

living_benchmark_registry
A registry of continuously refreshed evals by lane, model, tool stack, prompt/policy version, and workload distribution.

throughput_interactivity_curve
The formal tradeoff between fast individual response and high aggregate task throughput.

workflow_bottleneck_value
The value of speed depends on who or what is waiting.

task_level_ai_roi
Every meaningful AI lane should be measurable by cost per useful completed task, not just token cost.

workflow_sofware_model_codesign
OMNI should co-design workflow, data structures, policies, agent harness, and model routing together.

dominant_bottleneck_class
Every workflow lane should declare its current limiting factor: context, latency, cost, verifier quality, authority, human review, or data access.

model_hardware_runtime_fit
Model choice is only valid inside a runtime envelope: context size, latency target, batchability, tool needs, cost, and verification mode.

Net-new / sharpen / affirm
Net-new candidates

Inference policy as product architecture.
This is stronger than “pick the right model.” It says inference economics should shape the product surface itself.

Work TAM expansion.
Once models improve, the number of useful tasks expands faster than compute. This is directly relevant to OMNI because the system will discover latent operational work.

Ecosystem-shape moat.
A platform moat may come from the shape of the surrounding workflow/data/eval ecosystem, not one technical component.

Sharpen existing

Workflow lane as architecture unit.
This video gives the infrastructure/economics version of that doctrine.

Outcome per token.
Needs to be upgraded to outcome per task, outcome per bottleneck, and outcome per runtime dollar.

Runtime router.
The router should explicitly encode latency/throughput/cost tradeoffs.

Build-OS / Intelligence Foundry.
The same co-design logic applies internally: codebase, evals, agents, docs, traces, and deployment harness should be tuned together.

Affirm

Do not worship model rank.
Best model is meaningless without workload fit.

Do not centralize all AI into one generic assistant.
Different lanes need different runtimes.

Do not evaluate with demos only.
Living evals are mandatory.

Reject / do not over-import

Do not over-import the capital markets side into OMNI. The data center/neocloud details are interesting, but OMNI mostly needs the abstraction: capacity, latency, and cost are strategic constraints.

Do not make OMNI hardware-aware too early. The near-term product should be runtime-policy-aware, not silicon-aware.

Do not use “100x” as hype language. The useful doctrine is cross-layer co-design, not the numeric claim.

Hard read

This is a spine source. Not because OMNI needs semiconductor strategy, but because OMNI needs to avoid the classic mistake: treating AI as a model plugged into an app.

The real architecture is:

workflow → runtime policy → context shape → model/tool stack → verifier → trace → benchmark → cost/value feedback → updated policy

That is exactly the kind of governed AI operating system OMNI is trying to become.

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

**Reviewer:** Opus (agent) · **at:** `2026-07-08` · **binds nothing** (`GRD-036`/`GRD-044`) · formalizes Review 001 (Knox), does not re-derive.

**HEADLINE VERDICT.** This is a **semiconductor/inference-economics interview that, read for OMNI, is a spine-AFFIRMER of the AI-runtime-economics leg (leg b: 204·206·228) and the eval leg (215·216·222·230) — NOT a new care frame.** Dylan Patel's central doctrine — *the largest AI gains come from co-optimizing across layers (model ↔ software/kernel/runtime ↔ hardware ↔ memory ↔ network ↔ data-center power ↔ workload shape); the "100x" is cross-layer alignment, not one breakthrough* — maps cleanly onto OMNI's already-held **"model choice is downstream of workload architecture"** and **"the model is ~10% of the system"** (201/231/232/236/237). The source's genuine yield is a **richer economics vocabulary for the runtime router + living-eval layer**: the throughput↔interactivity curve, workload-class inference policy, task-level (not token-level) ROI, per-lane dominant-bottleneck, living (not point-in-time) benchmarks, and "work-TAM expands faster than compute." **doctrine=AFFIRM across the board; build=absent** (grep: only `lib/ai/*` chart-review governance-gate exists — `minConfidenceForAutofill`/`patientVisibilityRequiresReviewedAccepted`, a candidate≠commit echo; **no** benchmarking/model-registry/routing/runtime-economics/inference-policy code anywhere: `rg` for benchmark|throughput|interactivity|inference_budget|model_routing|outcome_per_token|co-design returned only an unrelated outbound-dispatch comment). **Tier: full (rich, ~11 clusters) but weight = vocabulary/economics-sharpen with a handful of candidate net-new economics primitives — no net-new frame, no net-new domain.** Reject the capital-markets/silicon/orbital detail (Knox concurs: OMNI needs the *abstraction* — capacity/latency/cost as strategic constraints — not silicon-awareness or the "100x" hype number).

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [ts]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **Cross-layer co-design = the real "100x"** | Don't procure agent/DB/policy/scheduler/model/context as separate choices — they are ONE operating design; a clinical-memory lane ≠ an ad-copy lane | §B AI-substrate · Build-OS · Manifest-Read-Graph · CNS · thesis §8 | *"instead of… multiplicative to 8x, it's actually 100x"* [28:24]; *"software hardware co-design"* [28:05] | AFFIRM | absent | none (restates 201/231/236 "model is 10%") | spine (as restatement) | watch |
| 2 | **Living benchmarks (not point-in-time)** | Evals must be continuous — tied to workflow lane, model version, prompt/policy version, and real cost/latency/quality telemetry; static/annual/demo evals go stale immediately | Build-OS/eval · §B · operating-metrics · Reservoirs | *"you can't have point in time benchmarking… living and breathing"* [16:00] | AFFIRM | absent | none | spine (sharpens eval leg) | watch |
| 3 | **Throughput↔interactivity curve** | The formal tradeoff behind "which model handles this?": one user fast vs many tasks packed; sync patient chat ≠ nightly claims audit ≠ intake triage | §B runtime router · CNS · operating-metrics | *"the throughput interactivity curve is the most important one"* [18:12] | PARTIAL | absent | none | vocabulary (sharpens 204) | watch |
| 4 | **Workload-class inference policy (reject one-size-fits-all)** | Every AI lane carries runtime metadata: latency_class · batchability · human_waiting · clinical_risk · cost_ceiling · quality_floor · fallback_model · audit_required — in the router, NOT the prompt | §B runtime router · CNS · Settings (policy-as-data) · §A/§C | *"the way we treat AI infrastructure… one-size-fits-all"* [18:50] | AFFIRM | absent (partial: `lib/ai/governancePolicy.ts` per-task confidence gate) | none | spine (= workflow-lane-is-unit, infra version) | watch |
| 5 | **Cost = the workflow bottleneck / feedback loop** | Price the *bottleneck*, not the model call: a physician waiting on med-rec, a front-desk SMS, an overnight segmentation job have radically different cost/latency economics | operating-metrics/BIZOPS · §B router · CNS | *"pay 4x more because… time… the person… is expensive"* [20:10-20:16] | PARTIAL | absent | tension→C3.7 (care-not-metered) | vocabulary | watch |
| 6 | **Per-lane dominant bottleneck class** | Each lane declares its current limiting factor: context / latency / cost / verifier-quality / authority / human-review capacity / data-access — and optimizes THAT | §B runtime · CNS · Build-OS · operating-metrics | *"there will always be bottlenecks somewhere… lagging behind"* [29:05]; memory bandwidth flagged [30:20] | PARTIAL | absent | none | vocabulary | watch |
| 7 | **CUDA moat → ecosystem-shape moat** | The moat isn't a feature — it's the shape downstream builders conform to. For OMNI: the care graph, service-occurrence model, doc/event schema, and eval harness matter more than any single AI feature | thesis §1/§3.5 · §B · Knowledge-Reservoirs · 238/239 interchange | *"the CUDA moat is not actually anything to do with CUDA"* [36:50] | AFFIRM | absent | none | spine (strategy restatement) | watch |
| 8 | **Fast mode is valuable only for some workloads** | Don't route everything to the fastest model; "fast" is product value ONLY when latency is the user-visible bottleneck; big models/long context strain SRAM (Cerebras) | §B router · CNS · operating-metrics | *"super fast tokens aren't needed… won't pay for them"* [39:38] | AFFIRM | absent | none | vocabulary (sharpens #3/#5) | watch |
| 9 | **Task-level AI ROI (not generic COGS)** | Measure cost_per_completed_task · per_human_minute_saved · per_error_avoided · per_billable_action · per_conversion · per_provider_review — upgrade "outcome-per-token" to "outcome-per-task" | operating-metrics/BIZOPS · Build-OS · §B | *"track everyone's token spend by day… what did you do?"* [39:21] | AFFIRM | absent | tension→C3.7 (never care-rationing) | spine (sharpens 206 outcome-per-token) | watch |
| 10 | **Work-TAM expands faster than compute** | AI demand does NOT scale with users — it scales with newly-discovered work (follow-ups, refill gaps, unsent forms, missing notes, churn risk, conversion windows); then the bottleneck becomes runtime allocation + governance | thesis §1/§8 · CNS · §B · Product-Intelligence | *"the world's compute did not double… demand for useful tasks… has"* [51:50-52:08] | AFFIRM | absent | none (demand-side twin of 223) | spine (net-new-ish) | watch |
| 11 | **General-purpose compute + avoid premature local-minima specialization** | Labs "don't even know what architecture in a year" → keep a general-purpose bucket + model-agility; don't over-fit OMNI to one model/hardware/silicon early | §B model-agility · future-watch (silicon/orbital = park) | *"big market for general purpose AI compute… don't even know… in a year"* [48:22-48:29] | AFFIRM | absent | none | vocabulary (= model-pluggability) | watch |

**Reject / do-not-import (Knox concurs):** capital-markets/neocloud/data-center-power detail, silicon-awareness (OMNI is runtime-policy-aware, not silicon-aware — near-term), the "100x" hype number, and all market/revenue/gigawatt figures (speaker claims, unverified — non-binding illustration only).

### B. Net-new primitives — `name — meaning — EXISTS-AS`  ·  **DEDUP HARD vs registry §2 (201-239) + standard OMNI primitives**  ·  *all labeled "dedup-pending, Opus-main verifies." Candidate over-flag OK; nothing asserted as committed.*

1. `living_benchmark_registry` — continuously-refreshed evals keyed by lane × model-version × prompt/policy-version × workload-distribution × cost/latency/quality (not point-in-time) — **EXISTS-AS: sharpens 207 `drift_monitoring_policy` + 215 `agent_eval_bundle` + 216 `phase_specific_eval_policy` + 222 product-behavior-telemetry with the genuinely-unnamed CONTINUOUS/LIVING dimension.** *dedup-pending, Opus-main verifies.*
2. `throughput_interactivity_curve` — the explicit latency-vs-aggregate-throughput tradeoff formalism a lane sits on — **EXISTS-AS: sharpens 204 `prefill_decode_runtime_split` + `inference_budget_policy` + 228 `adaptive_inference_backpressure` (adds the tradeoff-CURVE formalism they imply).** *dedup-pending, Opus-main verifies.*
3. `task_level_ai_roi` — cost/value per *completed task / human-minute-saved / error-avoided / billable-action / conversion / provider-review* — **EXISTS-AS: the "token→task" upgrade of 206 `outcome_per_token_metric` + 215 `cost_per_successful_task`; Knox explicitly says "upgrade outcome-per-token to outcome-per-task."** *dedup-pending, Opus-main verifies.*
4. `dominant_bottleneck_class` — per-lane declaration of the current limiting factor (context/latency/cost/verifier/authority/human-review/data) — **EXISTS-AS: net-new lane-metadata attribute; sharpens `workflow_lane_as_architecture_unit` + 204 runtime split.** *dedup-pending, Opus-main verifies.*
5. `workflow_bottleneck_value` — the economic value of speed = a function of who/what is waiting (price the bottleneck, not the model call) — **EXISTS-AS: extends 206 `outcome_per_token_metric` + 201 sell-outcomes; composes 204/228 economics.** *dedup-pending, Opus-main verifies.*
6. `work_tam_expansion` (a.k.a. latent-work-discovery) — AI demand scales with newly-discovered work, not user count; once OMNI *finds* work, the bottleneck becomes runtime allocation + governance — **EXISTS-AS: demand-side twin of 223 `out_of_scope_as_product_gap`; composes CNS "system discovers work" + thesis §1 longitudinal-coherence.** *dedup-pending, Opus-main verifies.*
7. `workflow_software_model_codesign` — co-design workflow + data structures + policy + agent-harness + model-routing together, not as separate procurement — **EXISTS-AS: doctrine/NAME restatement of 201 harness-as-strategic-asset + `workflow_lane_as_architecture_unit` + 231/214 task-shape-decides; NOT a mechanism.** *dedup-pending, Opus-main verifies.*
8. `model_runtime_envelope_fit` (Knox: `model_hardware_runtime_fit`) — a model choice is valid ONLY inside a runtime envelope (context/latency/batchability/tool/cost/verify-mode) — **EXISTS-AS: RECONCILE — mostly = 201 `model_placement_policy` + `capability_envelope` + 204 runtime split + 221 model-runtime-bundles. Likely NOT net-new.** *dedup-pending, Opus-main verifies.*
9. `ecosystem_shape_moat` — the platform moat is the shape of the surrounding workflow/data/eval ecosystem, not one technical feature — **EXISTS-AS: doctrine/NAME = 201 positive-sum-ecosystem + 238/239 knowledge-shape + care-graph/service-occurrence; not a mechanism.** *dedup-pending, Opus-main verifies.*
10. `inference_policy_as_product_architecture` — inference economics should shape the product surface itself (Knox "stronger than pick-the-right-model") — **EXISTS-AS: doctrine/NAME = infra/economics restatement of `workflow_lane_as_architecture_unit`.** *dedup-pending, Opus-main verifies.*

**Net assessment:** of Knox's 7 candidates + 3 net-new, the **genuinely un-named economics adds are ~4** (`living_benchmark_registry` [living/continuous eval dimension], `throughput_interactivity_curve` [tradeoff-curve formalism], `dominant_bottleneck_class` [per-lane limiting-factor], `work_tam_expansion` [demand-scales-with-discovered-work]); `task_level_ai_roi`/`workflow_bottleneck_value` are strong *sharpenings* of 206; the remaining 3 (`workflow_software_model_codesign`, `ecosystem_shape_moat`, `inference_policy_as_product_architecture`) are doctrine NAMES over 201/231/236; `model_runtime_envelope_fit` likely reconciles to existing. **Opus-main makes the final mint/dedup call.**

### C. Reread flags
- **`published_at` = TK** — Knox metadata block supplied url/title/channel/speaker (→ `identity_confidence: high_from_operator_metadata`) but **no publish date**. Reread §0 if operator supplies the date. (URL `f6D_aiy8qyU` operator-provided, not independently resolved here.)
- **Market/economic numbers are speaker claims, NOT verified** — 60x/40x cost & intelligence-per-watt drops, $50-100M donated hardware, 20/30 GW buildout, ≥80% Opus-token margin, $/GW rental rates, ">100 GW by 2030." Treat all as non-binding illustration; do not promote any figure as evidence.
- **Confidence split (per Knox):** high for transcript-derived *concepts*; lower for any market *numbers*.

### D. One-line hard read + strongest OMNI line
- **Hard read:** OMNI's classic mistake to avoid is treating AI as *"a model plugged into an app"* — the real architecture is a governed loop: **workflow → runtime policy → context shape → model/tool stack → verifier → trace → benchmark → cost/value feedback → updated policy** [formalizing 28:24 co-design + 16:00 living-bench + 18:12 curve].
- **Strongest OMNI line:** **"Model choice is downstream of workload architecture"** — classify the task, pick the latency/cost/quality envelope, route to the admissible model/tool stack, and continuously benchmark against *real* workload distributions — never "pick the best model." (This is the infra/economics restatement of OMNI's `workflow_lane_as_architecture_unit` + "model is 10%" spine; care lanes ride the C3.7 economically-blind firewall so cost-routing NEVER rations care.)

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` (**fold packet returned to Opus-main; this task did NOT edit the registry**) · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` (**not edited here**) · per-source deep-read: §3 Review 003 (this file) · impact: **§B AI-substrate runtime-economics (MAJOR — throughput↔interactivity curve, workload-class inference policy, living benchmarks, model-agility)** · **operating-metrics/BIZOPS task-level ROI (MAJOR — cost/value per completed task, not per token; C3.7-firewalled)** · **Build-OS/eval living-benchmark layer (MAJOR — continuous, not point-in-time)** · CNS workload-class routing + work-TAM discovery (medium) · §A/C3.7 economically-blind-care firewall (guardrail — cost-routing never rations care) · thesis §1/§3.5 ecosystem-shape moat (medium) · Knowledge-Reservoirs (minor) · future-watch orbital/silicon (park/ignore) · promotion: `watch` (spine-AFFIRMER of runtime-economics + eval legs; ~4 candidate net-new economics primitives pending Opus-main dedup; no net-new frame/domain)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-08` — §0/§0.1 metadata lifted verbatim from Knox §3 Review 001 (`identity_confidence: high_from_operator_metadata`; `published_at` TK). §3 **Review 003** formal deep extraction authored by Opus (11 concept clusters + 10 candidate net-new primitives, dedup-pending vs registry §2 201-239). §4 pointers filled. Status → `analyzed`. §0.5 ticked. No sidecar (`GRD-044`); registry/coverage/anchor NOT edited (fold packet returned to Opus-main). Binds nothing (`GRD-036`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

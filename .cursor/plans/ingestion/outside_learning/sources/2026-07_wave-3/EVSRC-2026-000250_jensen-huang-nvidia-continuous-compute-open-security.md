# EVSRC-2026-000250 — Jensen Huang (NVIDIA) — Stanford class guest (continuous-compute / open-for-security / defend-swarm / real-evals)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`** (§1 transcript preserved 2026-07-08; §3 Review 003 formalized — net-new ≈ 0, grounding/C3.8-corroboration source)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> ⚑ **PROVENANCE — re-homed 2026-07-08 (operator correction).** CEO talk — same genre as the wave-3 sources — lives HERE in `outside_learning`, NOT `competitor_product_evidence`. Captured "quick and dirty" during **C3.8** (2026-07-03), filed provisionally in `competitor_product_evidence/2026-07_enterprise_ai_os_ceo_interviews/00_capture_and_interpretation.md` (materialization owed). ✅ **PROCESSED 2026-07-08** — transcript pasted into §1 + §3 Review 003 written (C3.8 interpretation-v1 formalized against the transcript; ~0 net-new — grounding of §BATCH3-X/axis-6/§6.6/axis-5/REV-184). C3.8 interpretation linked in §3/§4 as the prior read it formalizes.

## §0 — Source identity / metadata  *(pre-filled from the C3.8 capture registry; confirm on paste)*
- evsrc_id: `EVSRC-2026-000250`  ·  filename: `EVSRC-2026-000250_jensen-huang-nvidia-continuous-compute-open-security.md` *(proposed slug — NOT renamed until transcript pasted)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=tsQB0n0YV3k`  ·  source_title: `Jensen Huang — Stanford class (guest)` *(confirm exact title)*
- channel_or_org: `Stanford (class, guest)` (speaker org: NVIDIA)  ·  speaker: `Jensen Huang — NVIDIA CEO`  ·  published_at: `TK`
- captured_at: `2026-07-03` (in-session during C3.8/G1b)  ·  captured_by: `Nick`  ·  capture_method: `provided in-session; transcript re-fetch OWED`
- content_type: `class Q&A / fireside (founder/CEO)`  ·  source_reliability_context: `founder/CEO — interested source; high-signal PRESSURE, NOT truth (GRD-039)`  ·  topic_tags_light: `[compute_platform, continuous_agentic_compute, open_models, security_zero_trust_NHI, defend_swarm, eval_as_discipline, world_models, model_gateway_cost_infrastructure, market_strategy]`

## §0.1 — People / authorship / authority context
- primary speaker(s):
  - name: `Jensen Huang` · role_in_source: `guest speaker / interviewee` · affiliation_at_publication: `NVIDIA (CEO)` · speaker_type: `founder/CEO` · authority_context: `compute-platform CEO; authoritative on compute/agentic-runtime trajectory (interested — NVIDIA frame)` · identity_confidence: `high_from_capture_registry`
- publisher / channel: `Stanford (class recording)`  ·  interviewer / moderator / host: `Stanford faculty/host (TK)`
- event_context: `university class guest; continuous agentic compute, open-for-security, defend-swarm, "serious evals"`  ·  perspective / conflict notes: `interested source (NVIDIA frame). Consumed as corroboration by G1b §CORR (axis 6 open+defend; §BATCH3-X continuous-operating-capability; axis 5 eval).`

> **Authority is descriptive, not worship** (`GRD-039`).

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot/URL in chat *(URL pre-filled)* · [ ] **Knox read → §3 Review 001** · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [~] §0 metadata *(pre-filled; published_at/title/moderator still TK)* · [x] **§3 Review 003** (formalized C3.8 interpretation vs §1 verbatim) · [~] fold to EVRUN-000003 *(fold packet returned to Opus-main)* · [ ] coverage matrix *(Opus-main)* · [x] §4 pointers · [x] NO sidecar (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Timeline

Transcript
Search in video
0:00
0:08
I would like to welcome back Preacher Huang. [APPLAUSE]
0:16
We have been now locked in a global race,
0:24
way faster than NASCAR racing. And it's partly your fault. Jenson's
0:30
been the preacher that's given us all the power we need, all the energy, and some more,
0:36
to have what I think has been the craziest 12 months of my life, certainly for many of you.
0:42
And we're just getting started the energy with which you
0:47
approach every single thing you do, including the class last year.
0:53
And then every time I've had the chance to hang out with you, you've given so much time to the students, to the founders.
0:59
Thank you. Should we jump right in? Yeah. Let's go. All right. We're going to rapid fire.
1:05
What is codesign? And why is it so important?
1:12
I'll answer that in a second. Yes, please. But this is a great time to be in computer science.
1:18
And obviously, the reason is because computing is being reinvented for the first time, as dramatically as it is,
1:26
for the first time, really, in about 60-plus years. The computer that we know, that you all use in our computing
1:33
model, our mental model, the architecture of a computer, how you write the program, run the program,
1:41
how you think about even taking computers to market, what it's used for, for 64 years,
1:47
it has been largely the same since the IBM system 360. In fact, my first architecture book
1:54
for learning about computer architecture was the system 360's manual.
1:59
And so a lot has changed. As we went from PCs to internet, and mobile,
2:05
and cloud, and all those things. But the fact of the matter is the computing model, the fundamental part of computer science
2:11
has largely remained the same until now. For the first time, the way you write
2:17
the software, how you process the neural network versus the software, and what the applications can do
2:25
has now dramatically changed. Everything is fundamentally different. At the highest level, one simple way to think about it
2:32
is, computing, as we knew it before, was largely prerecorded.
2:39
It's content that we prerecorded, images, videos, software that we largely prerecorded.
2:46
But now, everything is generated. And the nice thing about generating everything in real-time is that it could be contextually
2:54
consistent, contextually relevant to what it is that you're dealing with.
3:00
And of course, it can respond to your intention, not just explicitly to the things that you instruct.
3:08
And so the computer is fundamentally different in that way.
3:14
Now, the question is, what does that mean at every single layer of the stack? From how the computer, how the software is now developed,
3:24
the methodology of it, how you organize your company to be able to develop software of today completely changed.
3:31
And so the methodology, the tools we use, the approach that we think about software coding,
3:36
completely changed. How we run the software, neural network versus compiled binaries, very, very different.
3:44
And so what does that mean to the computer system, the network, the storage?
3:49
What does that mean to the software stack and the cloud services that sit on top of that? And of course, everything about the applications.
3:57
What did it open up? And somebody just came and said, this piece of software
4:03
we just opened up, called Alpamayo. And I've been working on self-driving cars
4:08
now for about 13 years. And the days of robotaxis are going
4:15
to be literally everywhere. Everything that moves will be robotic. And that's an example of an application
4:21
that we wouldn't consider doing, until deep learning and artificial intelligence came along.
4:28
That was such a big unlock that I said, hey, aha, all of these problems that we wanted to solve in the past,
4:36
that we need a computer vision for, really are now fundamentally unlocked.
4:42
And so it's how you think about every single stage of that.
4:47
What is a software engineer? How do you organize the company? What is a computer for the age of AI?
4:55
How do you architect that? All the way to what you can use it for. And therefore, where you would deploy it.
5:04
All of that has fundamentally changed. And for me, the journey really started about 15 years ago.
5:10
And I had the benefit of seeing some early works in the area.
5:15
And as all Stanford students do, you break the problem down. You reason about it from first principles.
5:22
And you come to the conclusion, literally, everything has changed. And so here you are, computer scientist students, this
5:29
is really the first generation of AI becoming useful.
5:34
And where we, a couple years ago, was in the generative part of AI.
5:40
And as you guys know, generative AI not only made it cool for us to do image generation, and text
5:47
summarization, and translation, and whatnot, but generative AI also enabled us to think.
5:54
And so when I saw generative AI, what other people saw
5:59
was that it was able to generate images, and I surely appreciated that as well. But the fact that you can generate thoughts
6:07
in the form of images, but you can generate thoughts, you can also reason with it. And the ability for AI to think after GPT
6:16
was very, very obvious. Now, the question is, how would you train, how would you fine tune an AI
6:23
to be able to reason step by step by step? And how would you teach it how to do so at fairly large scale
6:29
in a semi-supervised way? And so those are the engineering problems you had to solve. But the moment you see GPT, you say, aha, thinking
6:37
is just around the corner. And thinking is generating tokens that you consume internally.
6:43
And generating tokens that you consume externally would be called tool use.
6:48
And so the idea that after GPT happened two years ago,
6:54
that we would be at this moment, was fairly easy to predict. Now, of course, an unbelievable amount of technology
7:01
was invented, and a lot of amazing people did amazing work, but you could almost see that moment here.
7:07
And so here we You now have agentic systems. And so now, the question is, what's next?
7:13
And what happens in a world, where a computer is not
7:19
responsive to what you ask it to do, it's not on-demand?
7:24
Today's computing is really on-demand computing. The word "on-demand" was actually created
7:31
in our generation to talk about how you think about using computers. Time sharing computers that you would use on-demand
7:38
became cloud computers. And cloud computing, of course, is on-demand. But in your new world of agentic system,
7:46
the computers are now continuously running. And so what happens in a world where the computers are
7:52
continuously running? What happens to cloud services? What happened to your personal computer?
7:57
What happens to all of these different systems? Now, there's a great opportunity again to rethink all of that.
8:04
And so my introduction to everything about computer
8:10
science has changed, and everything about every field of science has changed because of the things
8:16
that we've changed. And so this a good time to go to school. OK. That's it.
8:21
What was your question? You know what, I'm just going to turn it over to the kids.
8:27
Codesign. Codesign. Codesign. Let's just go into-- the students have questions. They've all been asking questions in Discord.
8:33
They're all voting on each other's questions. Codesign is really interesting. Codesign is super interesting.
8:39
And basically, codesign said, back in the old days, we abstracted computing, so that the people who
8:48
design microprocessors, design microprocessors People who worked on compilers, worked on compilers.
8:54
And people who worked on languages, worked on languages, and so on and so forth. You guys that. And we actually had different fields.
9:02
And in fact, this happened at Stanford. What's the beauty of risk? What was the beauty of the work that John Hennessy did?
9:10
The beauty of it is that you got to think about compilers and microprocessor architectures harmoniously, codesign,
9:18
because otherwise, you could end up creating a microprocessor that's super, super tight, and everything is maximally optimized.
9:27
But unfortunately, it's hard to compile. It's difficult. It's not compilable. And so they created a simpler instruction set that exposed
9:36
simplicity to compilers, so that compilers could do a better job of generating code. And it turns out, a simpler machine,
9:43
codesigned with a compiler, creates better performance than two systems that were optimized individually.
9:51
That's very Stanford. This is part of your heritage as all
9:57
of you in John Hennessy's trail of amazing work that's left behind.
10:02
And so you take that, and you think about, well, what happens in the post world of general purpose computing?
10:09
Why is it that every problem in computer science would be solvable by a general purpose instrument?
10:15
At some level, you could say, well, if you had a general purpose instrument, you prefer that. However, there are some extreme problems,
10:23
whether it's computer graphics back in the old days, or molecular dynamics, or quantum chemistry, or fluid dynamics and large multiscale, mesoscale,
10:33
multiphysics problems or deep learning. These problems are so computationally intense.
10:38
Why would you use a general purpose computer to go do that? And so there, the big insight is,
10:43
if you understood the stood the algorithms, understood the computer systems, understood,
10:50
if you will, the compilers, the frameworks, and understood the architecture of chips,
10:56
and you were optimizing all of it at the same time. And so here are the facts.
11:02
This is what happens when you do it what I just described. NVIDIA is probably the first computer systems company
11:08
that's extreme codesign. Meaning, we literally codesign across all of that and including CPUs, GPUs, networking, and switches,
11:15
and storage. And so the question is, what you get-- well, Moore's Law, back in the old days, you guys all know about that,
11:22
Moore's Law was about 2x every 18 months, so call it 10x every 5 years.
11:29
So 10x every 5 years is 100x every 10 years. And that was in the good old days of Moore's Law.
11:35
And for all the computer scientists in the room, you know that Moore's Law was underpinned by a concept called
11:41
Dennard scaling. And Dennard scaling ran out of steam several years ago, probably about a decade ago, in fact.
11:48
And we kept squeezing it. We kept squeezing it. But over the course of last 10 years, if you just allowed microprocessors to continue
11:55
to scale, and you just don't touch the software and just benefit from the speed up of semiconductors,
12:02
microprocessor design, at best case, you would have gotten 100x, but probably,
12:07
because Dennard scaling slowed down and Moore's Law largely ended, you probably got something along the lines of 10x
12:13
over the course of 10 years. Well, in the case of NVIDIA and codesign, we got 1 million x over 10 years, 1 million x.
12:21
And so somewhere between 100,000x and 1 million x, so when you're talking about numbers that big,
12:27
it really doesn't matter. And so 1 million x over 10 years, we were able to get scaling and computation
12:35
scales so large, so fast that AI researchers say, why don't we just take all of the internet?
12:42
Why even worry about what data to go curate and what data to create? Let's just take all of the world's data
12:48
and just give it to the computer. And that's really the big breakthrough. When you're able to do something so insanely fast--
12:55
for example, if you were able to travel at the speed of light, where we choose to live doesn't matter.
13:03
If you were able to go from New York to California in 10 minutes, everything about society would change.
13:12
And so if you're able to do computing a million times faster, everything about computing changed.
13:18
And that's really the big breakthrough. Because of codesign, because of the way NVIDIA approached it, we accelerated computing so far that it
13:26
created all this infinite abundance opportunity for everybody to think about the future. And so anyways, here we are.
13:33
Cool. I have a bunch of follow up questions, but I'm not going to ask-- That one word led to that.
13:39
GPT 10 [INAUDIBLE]-- That's what it's like to work at NVIDIA. You give me one word, and you get ranted at for about half
13:44
an hour, because I got too much to share with you.
13:50
The question is, how should education evolve in response to the industry is changing? Yeah. And that's a really excellent question.
13:56
And I think the answer, clearly, is, AI should be part of your curriculum,
14:02
not just in learning about AI, but using AI for the curriculum. The problem with textbooks, as you know,
14:08
it takes an enormous amount of effort to do. And when I was taking classes at Stanford,
14:14
Professor Hennessy was still writing his textbook. It was all handwritten down. And each week, it seemed like he was writing a chapter.
14:23
I don't even how he writes a chapter a week, but every week, he was writing about a chapter. And then over time, all of those notes turned into a textbook,
14:31
into the first edition. And that must have taken several years. And so I think it's not possible for universities
14:41
for pre-recorded textbooks to keep up with information and knowledge that's being generated
14:49
in real-time by AI. And so I think the future, probably, has to be some union of the two. And I don't know about you guys, but I
14:56
can't learn anymore without AI. And so not only do I have the I read the papers, but I also,
15:02
once I read the papers, I might ask it to go read a whole bunch of the other papers that are associated with it.
15:08
And then now, it becomes a super researcher. And then first, I ask it to summarize,
15:14
I ask it some basic questions. And then after that, you interact with that paper as if it's a researcher that's dedicated to you.
15:20
And so most people don't realize that. I think a lot of people still think that you summarize a document.
15:26
But in the process of summarizing the document, that AI learned a lot. And I think that in the future, I
15:35
do hope that curriculum are tightly integrated. In defense of the textbooks, though, I
15:41
will say that first principles don't change. In the final analysis, Mead and Conway
15:48
is still a solid of fundamental methodology as before.
15:53
It is true that the scaling process that led to constant current density, constant power
16:03
density, all of those design optimizations associated with modern semiconductor design,
16:09
we've exhausted all of that. None of that is iso anything anymore.
16:14
But it's still good to know where we came from. And so I would still encourage to appreciate
16:21
the first principles. While I was going to Stanford, I was already working at AMD.
16:27
And I was designing microprocessors at the time. And it was still really good to see simultaneously,
16:35
how we design things in practice versus the first principal
16:41
methods associated with learning about eventually, how to design these things. And I really enjoyed having freedom, both sides of it.
16:52
And I ended up learning a lot more. And so what that means is, when you're using AI, which is real world, it's contextually relevant now,
17:01
it's contemporary. And meanwhile, you have first principles knowledge that you're learning at the same time.
17:06
You're kind of getting the same thing that I experienced. The question is, what are your thoughts on open source? How does open source stay at the frontier?
17:12
Yeah, there's really the question of closed source versus closed proprietary software versus open source.
17:18
There's a question of my intentions with open source. And so I'll start with my intentions of open source.
17:24
First of all, NVIDIA uses more Anthropic and OpenAI tokens
17:31
than just about anybody. And the reason for that is, obviously, we do a lot of coding, we do a lot of design.
17:37
And 100% of our engineers are now agentically supported. And so I want them to be working with agents, using the latest
17:46
generation tools, and remodernize how NVIDIA does work altogether.
17:51
So number 1, if you can use OpenAI and Anthropic, I would highly recommend you use it.
17:57
And the reason for that is because it's useful. It works really well. It's getting better all the time. And as you know, large language models,
18:06
it's the technology inside by Claude is a product. And Claude Code is a whole harness around it.
18:12
And that harness is getting better all the time. The model is getting better all the time. It's not likely that anybody open source
18:18
go to GitHub, download something, it's going to work nearly as well. So I highly recommend, and we do, use off the shelf frontier
18:27
AI models. The question is, why is it that we're advancing and working so hard on open models?
18:34
The reason for that is because language models are very important because they represent the codification
18:40
of our intelligence. And we want to automate ourselves, especially it's a very important part.
18:46
But you need to know that AI is about learning the representation, the meaning, the structure of information.
18:54
And so the question is, where is information? Well, we're living in information right now as we speak. The reason why there's structure is the reason why every day,
19:01
you show up, it's largely the same. Otherwise, it'd be like practically white noise. And so the fact that biological systems and physical systems
19:09
have structure. And from that structure, I must be able to learn higher level representation.
19:15
And if I can learn the representation, then I could manipulate it. Does that make sense?
19:20
And so just because I can learn the representation of language, I can then generate it, I can manipulate it,
19:26
I could put it to use. And so I want to do the same thing for chemicals, and proteins, and genes, and physics,
19:33
and physical systems, robotics, for example. And so notice, the way you represent all of those things
19:39
are fundamentally different, because the structure is different and the dimensionality is different.
19:45
How you train it is fundamentally different, because you don't have a whole bunch of internet corpus of human language on it.
19:53
So you've got to come up with new strategies for all of that stuff. And so we decided that we would dedicate ourselves
20:00
in some fundamental pillars, because the company has the talent and the scale.
20:06
We have the ability to put the first piece of artifact out in the world-- data, model, how to train it, and several different domains.
20:14
And so some of the domains, I care very much about. One of them is called, of course, Nemotrons language. And I'll come back to that in a second, why does it
20:21
we're doing it? And then second is BioNemo, that's for biology. And we have Alpamayo.
20:28
Somebody mentioned it earlier, for autonomous vehicles, basically, artificial intelligence, navigation.
20:36
And then we have Groot, which is a humanoid articulation,
20:41
robotics, artificial general robotics. And then we have climate science, basically mesoscale
20:48
multiphysics. And so all of these different domains, we decided that we should go and pioneer it.
20:56
And the reason for that is because, otherwise, the scientists in these different domains,
21:01
they simply won't have the scale and the technology necessary to go build that foundation model.
21:06
And so we decided that we would do that. And as a result of doing that, we activated health care.
21:12
We activated life sciences. We're working with every single self-driving car company in the world, doesn't matter which one it is.
21:19
There's NVIDIA in there somewhere. And so we enabled that entire ecosystem to really flourish.
21:25
And we're working with robotics right now, and so on and so forth. Without us making that first effort
21:31
and building a foundation model, it's hard to activate the whole industry downstream. And so it's really about expanding AI and democratizing
21:41
this capability. The reason why we do language models is because, two reasons-- one, there
21:46
are too many societies, where the scale of their language is not big enough for somebody else to decide
21:54
to make it a high priority. They'll understand Swedish. But making Swedish a top priority
22:01
is not likely, because the country is big, but not so big.
22:06
Chinese, of course, well taken care of. Indian, certain dialects, very well taken care of.
22:11
But as you know, you have 230 others. And so there are too many others that unless you deeply care,
22:18
it's never going to be great. And human intelligence, no matter the size of your population, somebody should care.
22:26
And so we created a large language model that's near frontier, Nemotron is close to frontier. And we make everything available,
22:33
so that if somebody wants to then fine tune it into whatever language of their choice, they got no trouble doing that.
22:39
And then the second reason is very important, is because we want to also take these language models
22:47
and fuse it with the domain-specific models because of human priors.
22:53
So for example, Alpamayo is a language model fused with a world model.
23:00
And so on the one hand, it's really designed to detect cars, and roads, and things like that. But on the other hand, we also believe
23:08
that if the AI model, if Alpamayo, the self-driving car model, can reason reason like a human,
23:14
and it could reason with human priors, then the amount of experiences it needs to have before it could
23:21
be an extremely good and safe driving car, the amount of training data is reduced, and we've proven that.
23:28
Alpamayo is probably one of the most effective self-driving car systems in the world.
23:34
And it's really only experienced a few million miles, not billions of miles. And so the system actually works.
23:42
So anyways, I just gave you a long-winded answer. I broke it all down. You can't just ask a simple question.
23:48
Well, we talked about-- Open models is really important. And then one more thing. That wasn't enough.
23:54
One more thing. If you care to have AI be safe and secure, it has to be open.
24:00
And the reason for that is, you can't defend against a black box, and you can't secure a black box.
24:06
And you can't put a black box of some incredible capability into your system with a completely opaque.
24:13
Now, of course, there's a lot of different ways you could solve the opaqueness. For example, you could say, before it does anything,
24:20
you have to reason about it to me step by step. Before you do anything at all, you have to come up with a plan, you have to reason about it step by step.
24:27
But you could always lie. And the nice thing about transparent systems
24:33
is that then everybody gets to interrogate it. If you have a transparent system, then researchers get to use it.
24:39
If you have a transparent system, an open system, then the way you defend against super-agentic systems in the future for cybersecurity
24:47
is obviously not to go into a battle of who gets the better one. You come up with some model, model 7.0.
24:55
And the only way I combat against that, I'm completely vulnerable until I come back with an 8.0.
25:01
And then you got to come back with a 9.0. And we just go back and forth, driving each other nuts. And that's obviously not the smartest way to do it.
25:09
The smartest way to do it is, you're going to create these incredible cybersecurity systems
25:15
or the cybersecurity threats. And what we're going to do is, we're going to have millions, billions, swarms of cheap AIs.
25:23
And we're going to systematically surround it. And so it's, if you will, a giant dome.
25:29
So for example, Nemotron Nano is being used for cybersecurity. And so all these cybersecurity firms take Nemotron Nano, because it's so fast and so cost-effective,
25:39
you can train it to detect cyber attacks and then just deploy trillions of them.
25:46
Yeah. On the topic of open scaling, we hung out in January.
25:52
I feel like-- you know that one scene in Thor? Do you remember, he was just hanging, and he kept rotating in that direction?
26:00
It's zero gravity. Here at AI Coachella, we got no gravity. [CHUCKLES] Thor-- Ragnarok.
26:05
Do you remember that? We can move a little bit back. [INAUDIBLE] OK. You guys don't watch movies? Well, we got a whiteboard, too, if you want to get up and walk.
26:13
So in January, we met, and we talked about this topic, open scaling. We talked about bottlenecks. We talked about data as one bottleneck,
26:20
compute as another bottleneck. There's at least one experiment that we
26:26
announced at GTC together, which was the coalition scaling idea. The second is on how to improve utilization on compute,
26:33
which is increasingly scarce. It came out last week that there was a memo at xAI that said Memphis cluster pool is running at 11% MFU
26:43
utilization, which I think, corresponds to something like 11 billion or something of unutilized MFU flops.
26:48
How can the open space-- well, maybe you could talk a little bit about why coalition scaling is an experiment worth trying.
26:55
And we have Brian coming, actually, in the final office hours, to talk about progress. And then how do we get utilization
27:01
to be better for the open ecosystem when you don't have fully integrated companies that can
27:06
optimize up and down the stack? Yeah. Do you guys know what my MFU is?
27:12
And FU, do you guys know? You guys don't use that anymore? So MFU is just simply wrong.
27:21
It's the amount of the percentage of flops, basically,
27:28
that you consume while doing your work. Model flops utilization. Yeah. And so unfortunately, with every metrics,
27:38
depending on what you measure, you could be measuring the wrong thing. And so let me tell you why.
27:43
If you ask me, do I want to be at high MFU personally or low MFU?
27:49
I would like to be at low MFU all the time. And the reason for that is because I want to be so smart,
27:54
I'm overprovisioned for the work. Because I'm overprovisioned, I got so many flops
28:00
and sitting idle. And the reason for that is because, the way the computing works in these large scale data centers is,
28:07
you have flops, you have memory bandwidth, you have memory capacity you have network capacity. At any given point in time, something is bottlenecked.
28:15
At any given point in time, something is bottlenecked. And so what you want to do is you want to overprovision on everything,
28:23
so that you can avoid Amdahl's law. Otherwise, you're fighting Amdahl's law all the time.
28:28
But then if you're provisioning for peak, not your base loads, then you're going to have a bunch of those flops sitting
28:33
while overprovisioned, when you don't need them, because spiky. At the right time, it goes to 100% MFU,
28:40
but only for a short period of time. And if that short period of time, you don't get all that overprovisioned flops,
28:47
then during that short period of time, it becomes a long period of time. And so what are you seeing for teams that are trying to--
28:53
And flops are cheap. No, flops are cheap. H100s are going up in price.
28:59
Well, not because of its flops, but because of H100. Hopper, its bandwidth, its architecture,
29:04
its everything else, not just its flops. So should we think about compute as not a scarce resource?
29:12
No, no, that's not the question. It's like this-- when you ask about a car,
29:18
back in the old days, when we were unsophisticated, we used to say, how many horsepower is your car? But these days, who does that?
29:24
So what's the right measure you think we should be thinking about? Performance. And when you tell the teams, guys,
29:29
this is the perf we've got to hit next year, what are you finding is the eval you're reaching for more and more?
29:34
You have to come up with a real eval, a really serious eval. Because otherwise, you'd be improving your flops.
29:41
You figure out something that you guys can improve. And you're improving that number,
29:46
it doesn't make you smarter. You're improving that number, it doesn't make you more successful. And so there's nothing wrong with having a lot of flops,
29:57
but it's not the complete. Necessary, not sufficient, that's all. In one sense, you could think about the output
30:03
of tokens as intelligence. So it should be some unit of intelligence per watt?
30:08
Yeah. Yeah. Notice, the tokens per watt is more than flops.
30:16
In fact, we that now, because for decoding these large language models, the singlemost important thing
30:22
for generating tokens per watt is actually the aggregate bandwidth across the NVLink 72.
30:29
And the MFU is incredibly low, because the prefill is not that much, it's mostly decode.
30:35
But you can decouple, decode, and prefill. It's disaggregated. And so notice, I just delivered incredibly high tokens per watt
30:41
with extremely low MFU. MFU. But not all tokens are born equal, right? And so how do we account for that?
30:48
When you're designing the systems of the future, what is the right way to measure without a standard measure
30:53
of intelligence? When you have coding tokens being more valuable for watt than, I don't know, some other kind of token.
30:58
Does that question make sense? Makes perfect sense. You always have to come back to not just optimizing
31:04
for SAT scores. You're optimizing for something bigger. And so that's basically it.
31:11
It's the same idea. You have to decide what evaluation. As you know, eval, how you evaluate success
31:18
matters a lot in how people perform. And so what NVIDIA does extremely well
31:24
inside the company is the systems that we create for evaluating architectures. And flops is too contrived.
31:32
Because if it was that easy, then I wouldn't be here. You have a hard job, which is to try
31:39
to design an index of different intelligences. I think when our teams are researching on the NVIDIA
31:46
architecture, we've got one lab doing coding, another one pushing the frontier of superconductivity and so on. And they all have completely different evals
31:53
they're measuring for, but they're all using NVIDIA chips. So how do you solve that problem?
31:59
Your customers all have their own evals? Yeah. But the architecture of the underlying platform-- That's why it's so hard.
32:05
And it is true, it's that hard. The problem is this. If you build something that's too overfit for something,
32:14
you could be incredibly good at it. And so you're overfit for this one problem. You're insanely amazing at it.
32:20
But then the problem is that market, that problem space may not be big enough
32:26
to fund a sufficiently large R&D. And so you want to be good at many domains, multidomain.
32:33
On the one hand, on the other hand, if you're good at everything, then you're good at nothing. You became general purpose.
32:39
And so writing that balance, by the way, is artistry. That's what I do for a living.
32:46
What should we not do? What should we double down on? What should we 10x on? That requires some amount of vision, strategy,
32:54
some amount of trial and error, some just personal enjoyment
32:59
and entertainment, iteration, all of that. Can we talk about the Canvas of Feynman,
33:05
which is a trip I'm very excited about? But it's been hard to get info on it. What's the canvas telling you now
33:11
about what your art piece is going to look like for the Feynman? Well, I can tell you the journey that we came on.
33:16
And so if you look at Hopper. Hopper was designed for a problem space that was rather new.
33:22
It called pretraining. And so pretraining came along. And we came to the conclusion that although the generation
33:32
before it was fairly significant already, that we should build tremendously large ones, larger
33:39
than any of the largest scientific supercomputers
33:44
in the world. So that's a very big deal, that the largest supercomputer in the world was about $350 million.
33:51
And we thought, you know what? Pretraining is going to be such a large domain and such an important problem. We should design systems that could be multibillion dollars.
33:59
At the time that we're thinking about doing this, it just sounds insane. You would have precisely zero customers.
34:05
And the reason for that is because the most expensive thing that has ever been sold was $350 million.
34:10
And you're building something that's multiple billions of dollars. So you're building for precisely a marketplace of zero.
34:17
But we went and did it anyways on first reasoning. And so Hopper was designed for pretraining, and that was a great call.
34:23
The second thing that we did was, we said, OK, well, after training, we're going
34:28
to keep making training better. But the goal of AI isn't training. The goal of AI is inference.
34:35
And what kind of a system would inference really care about? And so we created a system called NVLink72.
34:42
And the reason we did that was because decode in processing the neural network, there's the prefill,
34:48
which is really context processing and things like that, and attention processing, and then the decode, which is generating all these tokens.
34:55
The generation of tokens requires really high memory bandwidth.
35:00
And the amount of memory bandwidth you need is way more than one chip can possibly provide.
35:06
And so we said, why don't we gang up 72 of these things? And so we had to invent all kinds of new systems
35:11
for switching, and interconnects, and create all kinds of new [INAUDIBLE]. And we created, essentially, the world's first rack
35:18
scale computer. It's called Grace Blackwell NVLink 72. The speedup over the previous generation, 50 times.
35:25
In two years, we improved something by 50 times. Moore's Law would have improved by 2x.
35:31
So the architecture and the insight was fantastic. And decode, and inference, and large language models,
35:38
and token generation, all of that landed at exactly the time that Grace Blackwell came out, and boom, took off.
35:45
So Grace Blackwell, another incredible generation. Now, the question is, what happened to Vera Rubin?
35:51
And what's the big idea? Well, the big idea is that the goal isn't just to think,
35:57
the goal is to do work. And so Vera Rubin is designed for agents. And so the question is, what is the compute pattern?
36:04
What is the processing pattern of agents? And agents, of course, you have to load a fair amount of memory.
36:12
Long memory, he's got working memory. So long-term memory, we put it into storage. And we got that storage needs to be able to directly communicate
36:18
with the GPU. You can't be copying that data off of the network storage,
36:24
but you want storage to be connected right into the processor itself. And so we have storage that's connected to the fabric.
36:31
We're going to use a lot of tools. And so CPUs are going to be really important.
36:36
But the CPUs of the current generation was really designed for cloud computing. And so you have these CPUs with hundreds of cores,
36:44
like 200 cores. Well, the CPUs of agents, because the AI
36:51
is this multibillion dollar system, and it sends off an instruction to use a tool,
36:57
and that tool is going to run on the CPU. Meanwhile, this computer, this GPU supercomputer,
37:04
this multi-billion dollar system, is waiting for this one CPU. And so that CPU really wants to have extremely low latency.
37:11
So we designed Vera, which is for current generation,
37:16
for multiple core, single-threaded code, it is, by far, the most performant.
37:22
And so we created a CPU just for that. Notice, the way you solve this problem intuitively is, you think about, what is the computing pattern?
37:30
How is it different than the past? You have to have some mental model about it. And you create a system that you can go and go build to run that.
37:41
And so now, agents are here. We're going to run that on Vera Rubin. And hopefully, when Feynman gets here,
37:47
it's going to be all software. We call them agents today, but it
37:53
could be modules in the past or submodules. And so in the future, you're going to clearly
37:58
have systems of agents, and agents with subagents, and subagents with subagents. And so you're going to have this swarm of agents.
38:07
And what kind of computer does that manifest? And so that's likely what Feynman's about.
38:12
I have one more follow up question on that, which is, one of the things you've always done well is spot bottlenecks one generation ahead,
38:19
and then try to presolve for that in the supply chain. A year ago, that was, photonics ended up
38:24
becoming a huge solution. As we look at energy as a bottleneck,
38:29
literally, copper wires are one of the transmission bottlenecks. How does that get solved in your view?
38:37
Energy is just everywhere. Well, the first thing that we could do that is in our control,
38:45
as with everything in life, whatever the problem is, whatever the external concerns are,
38:52
you should do something that's in your control. And in our control is energy efficiency. So if you look at tokens per watt, we improved it by 50x.
39:01
And then we'll have to keep on improving it by significant factors. And it compounds.
39:06
That's the first thing we can do. We can control that through codesign, architectures, and things like that.
39:12
And the second thing that we could do, the thing we could inspire people, and that's through a lot of education,
39:18
inspire the ecosystem to get ready for this. And I've been, over the last half decade,
39:24
helping people understand the amount of compute that's likely to be coming. And I just told you guys something about how I reason through how much energy
39:32
is going to be necessary. The amount of energy that we need for computing is likely
39:38
probably, 1,000 times more than we currently have. And that's an enormous amount of energy.
39:43
However, the way to think about that is, in the future, computers are going to be two things-- it's always
39:49
going to be generated, because it's intelligent, it's contextually aware. So it's going to be generated. And the number 2, it's going to be continuous.
39:55
And so this generative computing, in a continuous way, compared to prerecorded retrieval-based computing
40:03
that is only initiated per use, the question
40:08
is, how do you think about the amount of energy necessary for that? So I think, if you say, we need 1,000 times,
40:14
I wouldn't be surprised if we're off by a couple of orders of magnitude. And so we need a lot more compute, we need a lot more energy.
40:20
And so you got to go and explain this to people. And so I got to explain it to people in a way that's common sense.
40:26
And they can observe it. And there are indicators along the way that, in fact, this
40:32
is happening. And notice, as I was breaking it down for you guys, reasoning about it for you, so it's common sense to you.
40:39
And so the amount of energy is high. And then lastly, the source of energy.
40:44
Now, there's all kinds of sources of energy, but unfortunately, because of great concerns
40:52
about the cost of sustainable energy, we under-invested in sustainable energy.
40:59
But this is the best time ever in the history of humanity to go and invest in sustainable energy.
41:05
And the reason for that is because the market forces are so strong. Back in the old days, you needed government subsidies
41:12
to go build solar farms and government subsidies to go build nuclear plants. And now, you can just market.
41:18
We'll pay you to do it. And so market forces are so powerful right now. This is our best chance to upgrade
41:25
our grid, our archaic grid, and add sustainable energy of all kinds.
41:30
And this is a great time. In terms of education, what I've learned as well, we designed the class for the students here.
41:36
Turns out, a lot more people, especially a lot of investors and capital allocators, are watching this [INAUDIBLE]. Is that right?
41:41
Oh, shocks. Why don't we put it up? Yeah.
41:47
I'm just kidding. If there's education you'd like to do to that audience, feel free to drop it. Repeating yourself after a while with capital allocators
41:55
can get repetitive. I don't mind that. So if you'd like to transmit, feel free to--
42:00
what is the next question we should take? The question is, how best to spend [INAUDIBLE] faculties
42:06
over the next few years? Yeah. So first of all, on the pain and suffering comment,
42:14
there's some advice that says, you should choose what you love and what you're passionate about.
42:21
That's what your career should be. And I think that's terrific. I think that's terrific. If you happen to know what you're passionate about, if you
42:30
happen to know what you love-- but I think there are a lot of people
42:35
who don't know what they're passionate about, and they don't what they love. And the reason for that is because nobody knows everything.
42:41
How could you know what you don't know? So in a lot of ways, the idea that you would only
42:49
choose careers that give you passion, that makes you happy
42:55
is a bar that I think is too high, number 1. And the reason for that is because,
43:00
whatever you decide to do for a living, whether you found something that you're passionate about or this
43:06
is your job-- and in my case, it used to be cleaning toilets and bussing
43:12
tables, it was my job. And I will do the best I can in my job.
43:18
Whatever you give me as a job, I will do the best I can possibly do. And I do that today.
43:24
Now, there's a misunderstanding that somehow, CEOs,
43:29
we love our job. And many say, oh, I'm passionate about my job.
43:35
I love my job. They're lying. There's not one CEO who can say that from the moment
43:44
I wake up to the moment I go to bed is just zippity doo dah. The fact of the matter is, I really
43:51
love doing 10% of my work, and 90% of my work is hard. And I do it to the best of my ability, anyhow.
43:59
And I suffer through it. I literally suffer through it. I prefer to do something else, that other 10%.
44:06
But that other 10%, there's only so much quantity of that. And every company has abundance of problems.
44:11
And there comes in different types. And you're going through life, you're going to have abundance of problems that are going to come in different types.
44:17
And you just have to learn how to condition yourself to want to get to a better state,
44:23
no matter how hard. To get better, no matter how hard. And that's suffering.
44:28
You don't like doing it, but you're doing it with all your might anyways. What do you call that? That's suffering.
44:34
And so I think that when you suffer, and you have the benefit of struggle, and you're
44:41
being presented with many opportunities like that, it teaches you resilience. And when the time comes, and the world, or your family,
44:49
or your company, or your colleagues, they need you to be tough. They need you to be resilient. They just need you to be able to fight through it.
44:59
You don't have that character about you. You don't have that muscle, unless you've gone through it
45:04
a whole bunch of times. And so I'm advising that you not seek for just joy,
45:13
that you also seek for some pain, some suffering, because you're going to need it, someday.
45:19
And then lastly, it's just your job. As preacher Huang once said, don't wake up
45:26
with a loser mindset. The question is, what's your favorite order of Denny's?
45:33
Yeah, Corvallis, really, should have a Denny's.
45:38
After all these years, frankly, it's about time. And so there was that one Chinese restaurant
45:47
and Woodstock's, of course, Corvallis Woodstock's Pizza. It's still pretty good, isn't it, Woodstock's?
45:53
It's all that I like American Dream better. American Dream is better? OK. All right. I'll be back there soon enough.
45:59
And so Denny's, I would say, surprisingly, the fried chicken
46:05
is really good. It's slightly on the sweet side. Superbird is excellent. It's done right.
46:12
And then another one, if they're willing to make it for you, make it like a Superbird, but as a grilled ham
46:19
and cheese with tomato and mustard, if they're willing to make it for you. They're willing to make it for me.
46:24
Not because I'm an alum.
46:31
Hey, you use the bus tables here. Yeah. Yeah. We'll make special for you. But those are all good.
46:38
The grand slam, I enjoy it like a pigs in a blanket,
46:43
so that's pretty good. There's a whole bunch of stuff. Goodness. I go all day.
46:49
At Denny's, I had my first fudge hot fudge sundae. I had my first apple pie with cheese on top.
46:58
For a Chinese kid, it's like, what is that about? That doesn't make any sense. But now, you think about it, it makes perfect sense, apple
47:04
and cheese. But anyways, I had my first milkshake when I was at Denny's.
47:10
I had a whole bunch of firsts. Denny's was eye-opening for me. Man, before we lose you to the memory lane, next question,
47:17
please. Those are some of the most important questions. Agreed. Yes.
47:23
The question is about your thoughts on adversarial countries, getting access to NVIDIA chips.
47:29
First of all, so you know what we make for a living. We make GPUs.
47:34
And GPUs are used for video games. They're used for delivering soy sauce.
47:40
They're used for medical imaging. If you had a CT scan done yesterday, I'm fine.
47:46
But behind it was NVIDIA. NVIDIA is in every single medical imaging system in the world. And so the question is, what is it that you build?
47:56
What I'm fundamentally against, and it makes no sense to this moment, is to compare NVIDIA GPUs to atomic bombs.
48:06
There are a billion people with NVIDIA GPUs. I advocate NVIDIA GPUs to all of you. I advocate NVIDIA GPUs to my family, to my kids,
48:13
to people I love. But I don't advocate atomic bombs to anybody. So that analogy is stupid.
48:22
And so if you start from there, you can't finish a thought. If you start from believing that,
48:28
you can't finish the rest of the thoughts. The second idea that I consider completely ridiculous.
48:36
Why should American companies go compete in foreign countries? You're going to lose it anyways.
48:43
You're going to lose it anyways. So why go? Well, if you guys all apply that same philosophy,
48:49
why wake up in the morning? And so I don't prescribe to "We are going to lose anyways."
48:55
I don't prescribe to that. If you want me to lose, you're going to have to deal it to me. But I'm going to have to put up a fight.
49:03
And I put up a lot of fights over the years. I'm doing OK.
49:10
And as you know, the battle, the competition serves markets. It enhances your company.
49:16
I'm not a little bit afraid of having to go and compete in the marketplace. But the idea that I'm going to lose anyway, so why go compete,
49:24
makes no sense to me. And then lastly, the idea that somehow, we
49:29
should deprive certain countries of general purpose computing, and we can all acknowledge now, NVIDIA is a general purpose
49:35
computing company, I just gave you a whole bunch of general purpose use cases, is a general purpose computing company, to be deprived of that,
49:42
so that one or two companies could benefit from depriving other people of it, that makes no sense either.
49:49
Why should one industry suffer, so that another one or two companies benefit?
49:56
The American technology industry is one of our national treasures. You are going to be part of it.
50:04
And if I do my job, when you are done graduating, you're going to graduate into the mightiest industry
50:13
in the history of humanity. But if we give it up for some reason, or we, through policy,
50:20
decide that we can't go, and sell, and concede 2/3 of the world to other companies,
50:29
by the time that you graduate, you would have gone into a shell of an industry.
50:34
That shell of an industry, we've seen before, a long time ago, the same arguments went against America in telecommunications.
50:44
Today, America has no telecommunications fundamental technology anymore.
50:50
It was all completely policied out of our country. And so somebody has to put up a fight for that.
50:56
Some of these reasoning systems, to say that AI is going to come,
51:01
and it's going to be a singularity moment-- that singularity moment, the moment it comes, it's going to be the most powerful thing in the world.
51:08
It's come as a flash. We have no idea whether it's going to come on Wednesday or Thursday at 7 o'clock.
51:15
But when it comes, it's going to be game over. Some percentage chance that it'll be the end of society,
51:21
as we know it. Come on, we all watch Dune. We don't have to repeat it.
51:28
And so I think that living their fantasies out, their science fiction fantasies out in public demonstration,
51:39
when everybody is relying on their words and believing the words, is irresponsible. It is not true.
51:45
It is not true that we have no idea how these systems work. It is not true. It is not true that the technology is going to, somehow,
51:54
in some nanosecond, become infinitely powerful, and therefore, it's going to take over the world. It is not true.
51:59
It is not true. There is no way to defend against it. It is not true. These things are all being made up.
52:06
And it's made up in a way that, unfortunately, even harms all of you.
52:11
You're in computer science. You're hoping that when you graduate, people care about computers.
52:20
We want to create a future that is optimistic about the technology that you are learning to master.
52:27
We want to create that future. We want to make sure that America, we want to make sure that everybody benefits from AI.
52:33
Everybody should have AI. Nobody should have nuclear bombs. Can you guys agree with that? Yeah. OK.
52:39
[APPLAUSE] And so young man, thank you for triggering me.
52:46
I'm just kidding. [CHUCKLING] I'm just kidding. I'm just kidding. I just wanted to get it out.
52:52
So we're rational optimists here at AI Coachella, so we believe in optimism. I'm going to push back a little bit on a different angle.
52:58
I completely agree, reasoning by analogy is a problem. Once you start with bombs, you should do first principles.
53:04
What we are observing is that compute-- we are compute-constrained in America.
53:09
Independent teams, startups, universities, they can't get compute. So from a preference order perspective,
53:16
shouldn't America get first priority to a scarce resource before we start shipping it off? Absolutely.
53:21
That's not happening. Absolutely not. [CHUCKLES] There's the gotcha.
53:27
Yeah, absolutely and absolutely not. Why not? The question is, why not? There's plenty of chips.
53:32
If the president of Stanford places an order, I promise you, I'll deliver it.
53:38
You guys heard it here. All right. Ahead of--
53:45
This is not funny. This is not funny. We are dying out there. No, no, this is not funny. That's right.
53:50
This is a serious matter. It is not true that people are giving me orders,
53:56
placing orders, and we're not delivering chips. It is just not true. You got to place orders. The fact of the matter is, the fundamental problem is actually
54:04
something very different. Stanford needs compute.
54:09
Science needs compute. The fundamental problem is, the system
54:14
is no longer built to be able to deliver massive scale compute.
54:20
And the reason for that is because, just think, all of the research departments here at Stanford,
54:26
they're all in different departments. You all raise your own funding. You all get your own grants.
54:31
Nobody's going to go share their grants. But none of the grants are big enough to have a large enough compute that you use some of the time,
54:39
but when you use it, you need it to be incredible. The world moved away from those centralized computing
54:46
environments towards everybody just using laptops. This is today's computing environment.
54:52
And fundamentally, all the universities-- Stanford is not alone, you don't have a budget
54:58
for $1 billion compute. It doesn't exist. But whose fault is that? Stanford's.
55:05
And the reason why you have to say that is because I'm empowering-- when somebody is at fault,
55:12
you empower them to solve it. Do you agree? Oh, yeah, it's not your fault. Son, it's not your fault. Your failure, it's not your fault.
55:19
He's not your talking to me, right? Hey, son, you're an idiot.
55:25
It's not your fault. No, it's absolutely your fault. And so by saying that, it's absolutely your fault,
55:32
you're also empowering yourself to solve it. Isn't that right? You're empowering yourself to solve it.
55:38
You just talked to somebody who feels, I can do something about my future.
55:45
You're talking to somebody who believes in that. And so if I were Stanford, you have
55:51
to find a way to change the way you do budgeting, the way you deal with computing.
55:56
You have to find a way to aggregate and build yourself a linear accelerator, just like Stanford has done in the past.
56:02
We need to build campus-wide supercomputers that everybody share. Now, you could also go and just contract somebody else to do it.
56:09
I mean, that's all possible. But you do need to have $1 billion. You need to have some reasonable fund
56:15
to go build something like this, because that's how much you cost. But that's just what it takes. I mean, last I checked, we've got, what, $40 billion
56:22
endowment here? How would you put that to use if you were starting-- We're going to cut $1 billion of it right away and give it to somebody as a cloud service,
56:28
and have every single student and every researcher here have access to AI supercomputers.
56:36
I would do that right away. Now, of course, you've got to go plan things. If you want to buy $1 billion worth of tomatoes,
56:43
you don't show up to the grocery store and say hi. And then they don't have $1 billion of tomatoes,
56:49
and you go, aha, you're withholding tomatoes from me. [CHUCKLES]
56:54
That's just ridiculous. And so you got to do some planning. And so what you got to do is you got to say,
57:00
next year, we need to have $1 billion worth of computing for Stanford. And so we'll go build it.
57:07
All right. You know what? We'll move on. But thank you for that. Yeah. Yeah. Yeah, exactly.
57:12
[APPLAUSE]
57:17
We'll come back to that one. [LAUGHTER] What is the best and worst part of your job?
57:22
When you're CEO of a company, you have the benefit of a lot of really fun things.
57:28
Like for example, you're really the person who has to conceive of the intersection between vision,
57:35
and strategy, and execution. And so you have to live in that world.
57:41
And when you're a company with capability, and I'm surrounded by amazing computer scientists, and many of them from Stanford, when
57:47
you're surrounded by people like that, when you have a vision, it's very realizable. And because you're with amazing people,
57:53
your vision is more ambitious. So I think that's the fun part.
58:00
So that fun part, I get to do almost all the time. I'm always constantly updating my view of the future,
58:08
and my vision of the future, and our role in it, and how we reinvent ourselves, so that we could contribute more
58:15
to that future or go invent that future in the first place. And so as a CEO, you get to live in that world, and that's fun.
58:22
It's very imaginative. It's very strategic. It's highly complicated.
58:28
There's no right answer. In a lot of ways, it's creativity at its most.
58:34
On the other hand, what comes with that power is the responsibilities for a bunch of people
58:41
who joined you in that spaceship, that joined you in that vessel. And they want to help you create this future.
58:49
And they're part of your team. And you feel a deep responsibility for their well-being.
58:54
And so when the company is not doing well, or the company, in the older days, when we were, in the beginning,
58:59
trying to find our way, we probably nearly went out of business four or five times.
59:05
I mean, literally almost went out of business. And we were on fumes or we were really flat on our back.
59:11
And so during those times, it's embarrassing. It's humiliating. It's hard.
59:17
You don't what the answer is. Oftentimes, you're in the dark. You're afraid.
59:23
All of those feelings that we have as humans just multiplied by 1,000, 1 million.
59:30
And when you're a public CEO, your face is always out there.
59:36
And when you do well, people are happy. When you don't do well, they're fast to tell you.
59:43
And so for me, it's a highly vulnerable profession.
59:50
And so you're not naked, but you feel it. The question is, what's the biggest mistake you've made
59:56
in the early days of NVIDIA? And what did you learn from it? Let me give you an example of what somebody might say,
1:00:04
and I'll say that that's not. And so anybody who knows our history
1:00:10
would know that the first generation of our products, the architecture, the technology we used was completely wrong.
1:00:19
It's not a little bit wrong, it's like completely wrong. The fact that smart engineers, and professionals,
1:00:26
and we were actually funded, and we created this thing, and it's like, check it out. It doesn't work at all.
1:00:33
And so using curved surfaces instead of triangles, no z-buffer instead of z-buffer, forward texture mapping
1:00:41
instead of inverse texture mapping, we did everything wrong. We did everything wrong. No floating point inside, we did everything wrong.
1:00:48
And so we made a lot of tremendously bad choices.
1:00:53
And I'll say that those are technical bad choices, but it led to strategic genius moves.
1:01:02
How do you take a company that had that reputation and wasted
1:01:07
a bunch of money and a bunch of time, 2 and 1/2 years, doing it the wrong way and surrounded by competition?
1:01:13
And now, here we are, the only one remaining. And so that transformation taught me
1:01:21
a lot about the importance of-- technology is important, but strategy is so important.
1:01:29
And so how you see the world? How you approach competition? How do you approach the market?
1:01:34
How do you conserve resources and apply resources? Those decisions, I learned more in my early 30s,
1:01:42
through that deep failure and the company almost vaporizing. I learned so much about strategy and strategic thinking,
1:01:50
and maneuvering, and things like that, and it's lasted a whole long time. The mistake that I made, that I would say,
1:02:00
was a genuinely straight up mistake is, when the PC or when mobile devices took off,
1:02:08
we were approached by very important companies that are important in the mobile space,
1:02:14
to work on some mobile devices.
1:02:22
And the choices that I made, I think the answer
1:02:28
when they approached us, the answer should have been, no, not interested.
1:02:34
But we decided to shift a bunch of our resources to go build mobile devices.
1:02:40
And I thought that we could add a lot of value, but I think, if I were to have thought through it a couple more
1:02:46
clicks, the amount of value you could really deliver for the things that we know how to do
1:02:52
and what we're good at, it's probably marginal at best. And so I shifted the company to go into mobile devices.
1:02:58
It grew into a billion dollar business and that kind of positive reinforcement. And then shortly after, during the 3G to 4G transition,
1:03:08
we were just 100% locked out. And Qualcomm was the leader in that 3G to 4G modem.
1:03:16
And that's the most important part of the phone, not the SOC, not computer graphics, not even the application processor.
1:03:23
The phone is obviously the most important part. And so during that transition, they were able to block us out.
1:03:28
I could have probably called it-- if that circumstance were to happen again, I would have said,
1:03:35
yeah, it would be a really interesting opportunity for a couple of years, but we're going to get shot out after that. So what's the point?
1:03:41
Let's go conserve our resources somewhere else. So we got shut out.
1:03:47
We built it up to about $1 billion and then went back to 0. But the recovery was, I took all of that expertise,
1:03:52
that extreme low power and energy efficiency expertise, and I shifted all to an application that didn't exist
1:04:00
at the time, called robotics. Somebody mentioned Thor.
1:04:05
Thor is the great, great, great, great grandson of the chip that we were using in mobile devices.
1:04:12
And that entire genealogy, and all the teams, and all the expertise that we built up
1:04:18
was really helpful to getting here. And so that's rationalization.
1:04:25
Going into that market in the first place was a waste of time. And so that, I think, is a strategic mistake.
1:04:31
On strategy, sometimes, strategy is about forecasting, so precisely enough.
1:04:38
From a systems perspective, what do you think you've updated your priors on? Or what is the forecasting mechanism you've
1:04:44
developed to give yourself some confidence that this fog of war here don't know quite where things are going to go,
1:04:49
but generally speaking, we're shooting in the right direction. Is there a systems design advice you'd
1:04:56
give folks on when the shape of the future is not entirely clear? Yeah. And in fact, you used all the right words already.
1:05:05
The first thing I do is, what am I observing? What am I observing? And based on what I observe, let's reason
1:05:13
about it back to first principles, break it all back down. And ask ourselves, so what's going to happen next?
1:05:20
And first, so what? Is this a big deal? Hey, deep learning, computer vision, AlexNet, big deal.
1:05:27
Is that a big deal or not a big deal? And so the big deal part of it is, my goodness,
1:05:34
here's two engineers, Alex and Ilya, and Hinton, of course.
1:05:39
And they came up with a neural network model. And boom, it crushed the computer vision capabilities
1:05:45
of all the computer scientists, decades before them, in one shot. And so is that a big deal?
1:05:51
Is that a big deal? The step up in quality and performance was a big deal.
1:05:58
Now, the next question is, so what's going to happen next? How far can you take it? And then if you could do it in this way,
1:06:04
what else can you solve? And if this was able to solve some really amazing problems,
1:06:09
what does that mean to computers and computing? And so you just keep asking yourself these questions. And so you're just iterating like that, all the way
1:06:16
to first principles. And then from that, you create a mental model about the future of computing.
1:06:22
And where is it going to be? What can it do? For example, self-driving cars and robotics.
1:06:28
How large would models become? And if so, what would computers look like?
1:06:34
Processing neural networks, how is that different than processing floating point numbers, and integers, and first principal mathematics?
1:06:41
We express everything in FP64 or FP32, but obviously, neural networks don't have to do that. And so you reason through it like this.
1:06:49
And then you build up a mental model of the future. And then your company, where you are going to be within it.
1:06:57
And then you just work backwards from there. And then now, the question, of course, is, you could be wrong.
1:07:03
And oftentimes, if you reason about things properly, you're not completely wrong, but you're not completely right.
1:07:09
And so I tend to be very comfortable, saying, OK, these are the things that will likely happen.
1:07:17
And these are things that will absolutely happen. And these things may happen. And based on that, I think we ought
1:07:22
to go in that general direction. And we'll feel our way through. And now that the skill of building companies then,
1:07:29
of being successful along the way is, you're going into this direction, and it's going to take energy, it's going to take time,
1:07:35
it's going to take money. And everything, that time, energy, and money, that takes away from something else.
1:07:41
So the opportunity cost of pursuing a strategy
1:07:47
is the real cost. And so you've just got to ask yourself, how can you be smart enough such that the opportunity cost is
1:07:55
reduced and your optionality is increased? And so you're trying to think through all of that stuff all the time.
1:08:01
It's no simple answer, but in a lot of ways, you're trying to get the journey to pay for itself.
1:08:10
Given everybody's going to mob you for more signatures, that's where we're going to end. Thank you.
1:08:16
Thank you very much. [APPLAUSE]

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Drop the screenshot/URL in chat and the normalizer fills §0.*

## §3 — Interpretations & review log  ·  append-only

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored)
- reviewer: `Opus` · type: `AI assistant` · at: `TK` · purpose: `formalize prior interpretation → structured extraction → feed EVRUN registry` · binds nothing (`GRD-036`/`GRD-044`)

> ⚑ **Prior analysis to FORMALIZE (not author from):** C3.8 interpretation-v1 for CEO-JENSEN in `../../../competitor_product_evidence/2026-07_enterprise_ai_os_ceo_interviews/00_capture_and_interpretation.md` (§CEO-JENSEN), consumed in `v4_C3_8_G1b_source_concept_reality_map.md` §CORR. Summary: **computers continuously running** (agentic) vs on-demand → §BATCH3-X continuous-operating-capability; **open-for-security** ("can't defend a black box… has to be open"; transparency=interrogability) → axis 6 + OMNI auditability/`trace_lineage`; **defend-swarm** ("swarms of cheap AIs… a giant dome") → §6.6 continuous-defend candidate; **"real serious eval… tokens per watt… not all tokens equal"** → axis 5 eval-as-discipline; domain foundation models fused w/ world-models (Alpamayo) → axis 1/4 + REV-184. **Write grounded Review 003 here once §1 in.**

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW (after §1 transcript pasted)  ⬇️⬇️⬇️

**Reviewer:** Opus (agent, formal deep extraction) · **at:** 2026-07-08 · **binds nothing** (`GRD-036`/`GRD-044`). Formalizes C3.8 interpretation-v1 (§CEO-JENSEN) against the now-preserved §1 verbatim (transcript re-fetched into §1 2026-07-08; the OWED paste is discharged). **No Knox Review 001** (per operator).

### Headline verdict
Jensen Huang / NVIDIA is a **compute-platform CEO — high-signal PRESSURE, hostile-by-default, NOT truth** (`GRD-039`). He was already consumed as **C3.8 corroboration** in `v4_C3_8_G1b_source_concept_reality_map.md` §CORR. Grounding the seed against verbatim: **genuine net-new mechanisms ≈ 0.** Everything Jensen says either (a) **already landed in C3.8** — continuous-agentic-compute → §BATCH3-X continuous-operating-capability · open-for-security → axis-6 open/defend · defend-swarm → §6.6 continuous-defend · real-eval/tokens-per-watt → axis-5 eval-as-discipline · domain-FM-fused-with-world-model → REV-184 `world_model` (do **NOT** double-count these; cross-linked to §CORR/G4 below); or (b) **dedups to already-minted wave-3 legs** — runtime-economics (204/206/228/244), agent-eval (215/230/240), memory (227/243), recursion/subagents (220/224), model-is-10%/harness (201/231/232/235/241). Dominant pattern: **`doctrine=AFFIRM/PARTIAL · build=absent`** (grep-verified — `continuous`/`world_model`/`swarm`/`tokens-per-watt`/`codesign`/`backpressure` return zero in `app lib components scripts supabase`; the `eval`/`audit`/`confidence`/`monitor` hits are domain disclosure-policy evaluators + clinical chart-review confidence gates, adjacent echoes not the concept). **Import-discipline flag (same as 245):** Jensen's AV/robotics sample-efficiency + "we've proven it" safety claims (Alpamayo few-million-miles) do **NOT** transfer to care — import the architecture logic, reject the guarantee. **Strategic-self-interest pole to discount (`GRD-039`):** Jensen's "open," "1,000x more energy," "compute abundance," and "there are plenty of chips, just place the order" are a **compute-demand-maximizing NVIDIA GTM frame** — process-as-data; the substrate *logic* is the yield, not the numbers.

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| J1 | continuous / generative compute (agentic, not on-demand) | substrate must assume always-running agents generating context in real time, not per-request retrieval | §B continuous-runtime · CNS · Build-OS · **C3.8 §BATCH3-X** | "the computers are now continuously running" [7:46] | AFFIRM (via C3.8) | absent | continuous-compute vs care fail-closed/consent — **pole: safety over always-on** | spine | no-op (already-C3.8; cross-link §CORR, don't recount) |
| J2 | open-for-security / "can't defend a black box" | transparency = interrogability; a governed system must be inspectable/auditable, and step-by-step reasoning "you could always lie" ⇒ authority stays outside the model | §C Security · §B AI-gateway · `trace_lineage`/auditability · document-governance · **C3.8 axis-6** · 205 | "you can't defend… a black box… it has to be open" [23:54-24:00] | AFFIRM (via C3.8) | partial (generic audit-log/event infra exists; AI-transparency absent) | transparency vs PHI opacity — tension, routed | spine | no-op (already-C3.8; sharpens auditability + 205 "world may read, not instruct") |
| J3 | defend-swarm / "giant dome" | defense = many cheap governed monitors surrounding the threat, not a one-model arms race (Nemotron Nano, "trillions") | §C continuous-defend (**§6.6 candidate**) · CNS · §B model-registry | "swarms of cheap AIs… a giant dome" [25:15-25:29] | PARTIAL (C3.8 §6.6 candidate) | absent | none | spine-candidate | no-op (already-C3.8 §6.6; cross-link) |
| J4 | real serious eval > contrived flops | you must define the *right* eval; the metric you pick shapes behavior ("optimizing for SAT scores"); flops is necessary-not-sufficient | **axis-5 eval** · Build-OS/Polaris proof · operating-metrics · 215/230/240/244 | "come up with a real… serious eval" [29:34] | AFFIRM (via C3.8) | absent (AI confidence-gate partial) | metric-choice-shapes-behavior (Goodhart) — tension = 240 `eval_gaming_risk` | spine | no-op (already-C3.8 axis-5; dedups to 215/230/240) |
| J5 | tokens/intelligence per watt · overprovision · flops-cheap-bandwidth-scarce | AI runtime is bandwidth/memory/scheduling-bound; "not all tokens born equal" ⇒ value-differentiated work; low-MFU can be optimal (overprovision to beat Amdahl) | §B runtime-economics · operating-metrics/BIZOPS (**C3.7-firewalled**) · 204/206/228/244 | "some unit of intelligence per watt… not all tokens born equal" [30:03-30:41] | AFFIRM/PARTIAL | absent | outcome/token vs care-not-metered — C3.7 economically-blind firewall | vocab/spine-affirm | dedup → 206 `outcome_per_token_metric` + 244 (Opus-main verifies) |
| J6 | extreme hardware-software codesign (1,000,000× vs 10×) | substrate-wide co-optimization beats per-layer point optimization; "a simpler machine codesigned with a compiler" wins | §B runtime-economics · substrate-coherence doctrine · 244 | "extreme codesign… 1 million x over 10 years" [11:08-12:13] | AFFIRM (analogy) | n/a | none | vocab | dedup → 244 `workflow_software_model_codesign` (Opus-main verifies) |
| J7 | domain foundation model fused w/ world-model + human priors | reasoning with priors cuts training data needed (Alpamayo few-million miles); domain models over generic | §B `world_model` · **REV-184** · Clinical-Memory (sample-efficiency, care-bounded) · 232/243 | "Alpamayo is a language model fused with a world model" [22:47] | PARTIAL (REV-184) | absent | **AV/robotics sample-efficiency + safety proof ≠ transferable to care** (import arch, reject guarantee — 245 discipline) | spine | no-op (already-C3.8 REV-184; cross-link + import-flag) |
| J8 | swarm of agents + subagents; agent compute pattern (memory to storage, tool-use→CPU) | agents-with-subagents = CNS coordination topology; long-term memory externalized to storage, working memory hot, tool calls low-latency | CNS · §B runtime · Knowledge-Reservoirs (memory) · 220/224/227/243 | "agents with subagents… swarm of agents" [37:47] | AFFIRM | absent/partial | none | vocab | dedup → CNS + 224/220 + 227/243 memory (Opus-main verifies) |
| J9 | compute as governed scarce shared resource (aggregate the "linear accelerator") | fragmented per-team funding can't buy substrate scale; the answer is a governed shared resource everyone aggregates onto — OMNI-as-substrate analog | axis-2 compute-ownership · thesis §1 (substrate-as-shared-resource) | "build campus-wide supercomputers that everybody share" [55:51] | PARTIAL | n/a | none | vocab | dedup → axis-2 (not an OMNI mechanism; NVIDIA-GTM pole) |
| J10 | first-principles forecasting (observe→reason→mental-model→work-backwards) | strategy craft: likely/absolutely/may-happen tiers; opportunity-cost = the real cost; increase optionality | Build-OS reasoning · Agent-Work-Protocol · Lens-B (Anthropic build-OS discipline) | "what am I observing… reason back to first principles" [1:05:05] | AFFIRM (method) | n/a | none | low/vocab | no-op (operator-craft; not a substrate primitive) |
| J11 | open models democratize + activate ecosystem (underserved languages) | first-mover foundation model activates a downstream ecosystem; "someone should care" about the long tail | axis-2 open · §6.8/§6.10 positive-sum ecosystem · 201 | "Nemotron is close to frontier… make everything available" [22:26-22:33] | AFFIRM | n/a | openness≠authority (route by registry/lineage) | vocab | dedup → 201 positive-sum + axis-2 (NVIDIA-GTM pole discounted) |
| J12 | use frontier closed models where they work; model = product, harness = the 90% | "Claude is a product, Claude Code is a harness around it"; model-pluggable, harness compounds | §B model-pluggability · Build-OS harness · 201/231/232/235/241 (model-is-10%) | "Claude Code is a whole harness around it" [18:06] | AFFIRM | absent | none | spine-affirm | no-op (strong external convergence on §B + Build-OS; dedup to 241 harness) |

### B. Net-new primitives — `name — meaning — EXISTS-AS` (all **dedup-pending, Opus-main verifies**)
**Genuine net-new mechanisms = 0.** Jensen is a grounding/corroboration source; every candidate resolves to a C3.8 delta or an already-minted wave-3 primitive. Candidate NAMES surfaced for the reconciliation pass (do **not** mint; do **not** double-count against C3.8):
- `continuous_generative_compute_posture` — always-running generative agents vs on-demand — **EXISTS-AS: C3.8 §BATCH3-X continuous-operating-capability. Cross-link `v4_C3_8_G1b_source_concept_reality_map.md` §CORR; do NOT recount.**
- `open_for_defensibility_principle` — "can't defend/secure a black box"; transparency=interrogability — **EXISTS-AS: C3.8 axis-6 open/defend + 205 `content_authority_class` + OMNI auditability/`trace_lineage` + open-governed doctrine. NAME only.**
- `defend_swarm_posture` — many cheap governed monitors "surround" the threat (dome) — **EXISTS-AS: C3.8 §6.6 continuous-defend candidate. NAME only.**
- `real_eval_over_proxy_metric` — pick the eval that measures true success; the metric shapes behavior — **EXISTS-AS: axis-5 + 240 `eval_gaming_risk` + 230 `owner_authored_risk_definition` + 206 `outcome_per_token_metric`.**
- `intelligence_per_watt_metric` — value-differentiated tokens; bandwidth/scheduling-bound runtime — **EXISTS-AS: 206 `outcome_per_token_metric` + 244 `throughput_interactivity_curve`/`dominant_bottleneck_class`.**
- `world_model_prior_fusion` — domain FM + world-model + human priors → sample efficiency — **EXISTS-AS: REV-184 `world_model` + 245 import-discipline (reject robotics/AV guarantee for care).**
- `overprovision_to_beat_amdahl` — provision for peak/spiky agentic load, low-MFU can be optimal — **EXISTS-AS: 228 `adaptive_inference_backpressure`/`tenant_fairness_scheduler` + 204 runtime-split (inverse framing).**
- `foundation_model_activates_ecosystem` — first-mover substrate unlocks downstream domains — **EXISTS-AS: 201 positive-sum ecosystem + axis-2 open. NVIDIA-GTM pole (`GRD-039`).**
- `aggregated_compute_commons` — pool fragmented demand into one governed shared resource — **EXISTS-AS: axis-2 compute-ownership NAME; NOT an OMNI mechanism (OMNI is the care/business substrate, not a compute broker).**

### C. Reread flags
- **Metadata unconfirmed (§0 pre-filled, transcript now pasted):** `published_at` = TK · exact `source_title` = TK · moderator/host name = TK ("Stanford faculty/host"). URL ✅ (`tsQB0n0YV3k`). Slug proposed, **file NOT renamed** (per contract).
- **`GRD-039` interested-source pole:** discount Jensen's compute-demand-maximizing frame ("1,000x energy," "plenty of chips," "open democratizes") — NVIDIA sells the picks-and-shovels; "open" widens demand for NVIDIA compute. Keep the substrate logic (continuous/generative, eval-defines-behavior, codesign-coherence, world-model-priors), process the market claims as data.
- **Import-discipline (mirror of 245):** Alpamayo "we've proven it… few million miles" — AV/robotics sample-efficiency + safety proofs do NOT transfer to care (no formal reward/dynamics model for clinical judgment). Import architecture; reject the guarantee.
- **Provenance discharged:** raw §1 transcript re-fetched + preserved 2026-07-08 (was OWED). Prior C3.8 interpretation-v1 (§CEO-JENSEN) was FORMALIZED here, not authored-from.

### D. One-line hard read + strongest OMNI line
- **Hard read:** Jensen's whole talk is a compute-vendor's case that the future is *continuous, generated, evaluated, and defended in swarms* — which is exactly the C3.8 pressure OMNI already absorbed; the danger is importing his AV/robotics confidence ("we've proven it") into care, where no formal guarantee exists.
- **Strongest OMNI line:** *"You can't defend against a black box… to be safe and secure it has to be open"* [24:00] — OMNI's answer is not "open weights" but **governed transparency**: authority, action, and truth live in inspectable deterministic domains/RBAC/CNS *outside* the model, so the substrate stays interrogable and auditable even when the model is a swappable black box.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000003` ai-corpus wave-3 · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 · **enterprise linkage:** C3.8 capture (§CEO-JENSEN) → `v4_C3_8_G1b_source_concept_reality_map.md` §CORR → `v4_C3_8_G4_disposition_ledger_and_handoff.md` (cross-linked, NOT double-counted) · impact: **grounding/corroboration only — net-new mechanisms ≈ 0**; confirms C3.8 deltas already absorbed (§BATCH3-X continuous-compute · axis-6 open/defend · §6.6 defend-swarm · axis-5 eval · REV-184 world_model) + dedups to wave-3 legs (204/206/228/244/215/230/227/243/220/224/201/241); dominant `doctrine=AFFIRM/PARTIAL · build=absent`; import-discipline flag (reject AV/robotics guarantee for care, per 245) · promotion: **watch** (no promotion — corroboration source; nothing net to route beyond existing C3.8/wave-3 homes)

## §5 — Change log
- `2026-07-03` — captured in-session during C3.8/G1b (filed provisionally in `competitor_product_evidence`); interpretation-v1 written; raw transcript materialization owed.
- `2026-07-08` — **re-homed to `outside_learning` wave-3 as `EVSRC-2026-000250`** (operator correction). §0 pre-filled; scaffold awaiting §1 transcript + Knox read.
- `2026-07-08` — **§1 raw transcript re-fetched + preserved** (OWED paste discharged); **§3 Review 003 authored by Opus** (formalized C3.8 §CEO-JENSEN interpretation-v1 against verbatim; NO Knox Review 001 per operator). 12 concept clusters; **net-new mechanisms ≈ 0** (all C3.8-already-captured or dedup-to-wave-3, `dedup-pending Opus-main verifies`); dominant `doctrine=AFFIRM/PARTIAL · build=absent` (grep-verified). Status flipped `raw_dropped → analyzed`. §0.5 ticked; §4 pointers filled. Fold packet returned to Opus-main (registry/coverage/anchor NOT edited here per contract).

> Authority/retrieval labels defined once in `../../00_evidence_router.md`.

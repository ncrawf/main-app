# EVSRC-2026-000084 — Skill Issue: Andrej Karpathy on Code Agents, AutoResearch, and the Loopy Era of AI

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN — **spine source, verbatim-reread, Knox priority 5/5**)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: Karpathy code agents); Knox read in §3 Review 001 (verified: "spine source, 5/5, full_semantic"). Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000084`  ·  filename: `EVSRC-2026-000084_no-priors-karpathy-code-agents-autoresearch-loopy-era.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=kwSVtQ7dziU`
- source_title: `Skill Issue: Andrej Karpathy on Code Agents, AutoResearch, and the Loopy Era of AI`
- channel_or_org: `No Priors Podcast` (82.8K subs)  ·  series: `No Priors: AI, Machine Learning, Tech & Startups`  ·  published_at: `2026-03-20`  ·  views_at_capture: `866,934`  ·  duration: `~1:06`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `interview / podcast`  ·  source_reliability_context: `practitioner / researcher (**Andrej Karpathy — among the most influential AI practitioner/educators; ex-OpenAI founding, ex-Tesla AI director**)`  ·  topic_tags_light: `[code_agents, autoresearch_closing_the_loop, loopy_era_ai, model_speciation, human_ai_collaboration_surfaces, jobs_impact, open_vs_closed, agentic_education]`  ·  note: `AI-generated summary present; long-form (~66 min); likely verbatim-reread cluster`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Andrej Karpathy` · role_in_source: `interviewee` · affiliation_at_publication: `independent / Eureka Labs (ex-OpenAI founding member, ex-Tesla Sr. Director of AI)` · speaker_type: `researcher / educator (foundational AI figure)` · authority_context: `**VERY HIGH credibility.** On the state of models, the future of engineering + education, jobs impact, and his project **AutoResearch — where agents close the loop on a piece of AI research (experimentation, training, optimization) autonomously, without a human in the loop.** Covers: capability limits, mastery of coding agents, second-order effects of natural-language coding, relevant skills in the AI era, **model speciation**, building **more collaboration surfaces for humans + AI**, autonomous robotics, MicroGPT + agentic education` · identity_confidence: `high_from_screenshot`
  - name: `Sarah Guo` · role_in_source: `host` · affiliation_at_publication: `Conviction (No Priors)` · speaker_type: `investor` · authority_context: `interviewer / framing` · identity_confidence: `high_from_screenshot`
- publisher / channel: `No Priors Podcast`  ·  interviewer / moderator / host: `Sarah Guo`  ·  event_context: `No Priors podcast`  ·  perspective / conflict notes: `Karpathy = unusually credible, relatively low commercial-conflict (educator/researcher). **VERY HIGH OMNI relevance: "agents close the loop without a human" (AutoResearch) is the sharpest possible articulation of the autonomy OMNI must GOVERN — directly pressures §A (when is human-in-loop required), §B (loopy/agentic substrate), CNS (closing loops via candidates → adoption), Build OS (auto-research/auto-improvement agents). "Model speciation" + "collaboration surfaces for humans + AI" → §B + P5 surface design. Flagged verbatim-reread cluster (pairs with Andrew Ng 071, LangChain 059/062).** Recent (2026-03). Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): Karpathy = very high credibility, but "agents closing the loop autonomously" is exactly the capability OMNI must wrap in authority gates — high relevance, still routes through evidence → interpretation → gated promotion. The loop-closing must be *governed* in OMNI, never ambient.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = Karpathy transcript; §3 = matching "spine source 5/5" read) · [x] EVRUN needed? (yes — full_semantic; **verbatim-reread spine**: §A/§B/CNS/Build OS) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Timeline

Chapters

Transcript
Search in video
Andrej Karpathy Introduction
0:00
code's not even the right verb anymore, [laughter] right? But I have to um express my will to my agents for 16
0:06
hours a day manifest. [music] How can I have not just a single session of clot code or codeex or some of these agent harnesses? How can I have more of
0:12
them? How can I do that appropriately? The agent part is now taken for granted. Now the claw-like entities are taken for
0:18
granted and now you can have multiple of them and now you can have instructions to them and now you can have optimization over the instructions. But
0:24
there [laughter] I mean this is why it gets to the psychosis is that this is like infinite and everything is skill issue.
0:34
Hi listeners, welcome back to No Briars. Today I'm here with Andre Karpathy and we have a wide-ranging conversation for
0:40
you about code agents, the future of engineering and AI research, how more people can contribute to research,
0:47
what's happening in robotics, his prediction for how agents can reach [music] out into the real world, and
0:53
education in this next age. Welcome, Andre. Andre, thanks for doing this. Yeah, thank you for having me.
0:59
Uh, so it's been a very exciting couple of months in AI. Uh, yeah, you could say that. I remember um walking into the office at
1:07
some point and you were like really locked in and I was asking what you were up to and you're like, I just I have to code for 16 hours a day or code's not
1:13
even the right verb anymore, right? But I have to um express my will to my agents for 16
1:19
hours a day. Manifest um because like there's been a jump in capability.
1:25
Uh what's happening? and tell me about your experience. Yeah, I kind of feel like I was just in this perpetual I still am often in this
1:31
state of AI psychosis just like all the time. Uh because there was a huge unlock in what you can achieve as a person as
1:36
an individual, right? Because you were bottlenecked by you know your typing speed and so on. But now with these agents, it really I would say in
1:43
December is when it really just something flipped where I kind of went from 8020 of like you know uh to like
1:49
2080 of writing code by myself versus just delegating to agents. And I don't even think it's 2080 by now. I think
1:54
it's a lot more than that. I don't think I've typed like a line of code probably since December basically. [laughter]
2:00
Um, which is like an extremely large uh change. Um, I was talking to it like for
2:06
example I was talking about it to for example my parents and so on and I don't think like a normal person actually realizes that this happened or how
2:11
dramatic it was like literally like if you just find a random software engineer or something like that at their at their desk and what they're doing like their
2:18
default workflow of you know building software is completely different as of basically December. Uh so I'm just like
2:26
in this state of psychosis of trying to figure out like what's possible uh trying to push it to the limit. How is it how can I have not just a single
2:32
session of you know um clot code or codecs or some of these agent harnesses. How can I have more of them? How can I
2:37
do that uh appropriately? And then how can I use these claws? What are these claws? Uh and uh so there's like a lot
2:44
of new things. I want to be at the forefront of it, you know, and I'm very antsy that I'm not at the forefront of
2:49
it. And I see lots of people on Twitter doing all kinds of things and they all sound like really good ideas and I need to be at the forefront or I feel
What Capability Limits Remain?
2:55
extremely nervous. And so I guess I'm just in this psychosis of like what's possible like because it's unexplored
3:00
fundamentally. Well, if you're nervous, the rest of us are nervous. We have a uh we have a team that we work with at conviction that
3:07
their setup is everybody is like, you know, none of the engineers write code by hand and they they're all microphoned
3:14
and they just like whisper to their agents all the time. It's the strangest work setting ever. Uh, and I thought
3:19
they were crazy and now I like I fully accept I was like, "Oh, this was the way." Like you're just ahead of it. Um, what uh how do you think about your
3:27
own capacity now to like explore or to do projects like what is it limited by?
3:32
Yeah. What is it limited by? Uh just I think everything like so many things even if they don't work I think to a
3:38
large extent you feel like it's skill issue. It's not that the capability is not there. It's that you just haven't found a way to string it together of
3:44
what's available. like I just don't I didn't give good enough instructions in the agents MD file or whatever it may
3:50
be. I don't have a nice enough memory tool that I put in there or something like that. So it all kind of feels like
3:56
skills when it doesn't work to some extent. You want to see how you can paralyze them etc. And you want to be Peter Steinberg basically. Uh so Peter
4:02
is famous. He has a funny photo where he's in front of a monitor with lots of uh like uh he uses codecs. So lots of
4:07
codecs agents styling the the monitor and they all take about 20 minutes if you prompt them correctly and you use
4:12
the high effort. And so they all take about 20 minutes. they have multiple, you know, 10 repos checked out and so
4:18
he's just um going between them and giving them work. It's just like you can you can you can move in much larger
4:24
macro actions. It's not just like here's a line of code, here's a new function. It's like here's a new functionality and
4:29
delegate it to agent one. Here's a new functionality that's not going to interfere with the other one. Give it a two and then try to uh review their work
4:35
as best as you can [laughter] depending on how much you care about that code. Like what are these macro actions that I
4:41
can like manipulate my software repository by? and like another agent is doing some like research and another
4:46
agent is writing code, another one is coming up with a plan for some new implementation. And so everything just like happens in these like macro actions
4:52
over your repository. Um, and you're just trying to become like really good at it and develop like a muscle memory
4:58
for it is extremely um, yeah, it's very rewarding number one because it actually works. Uh, but it's also kind of like
5:03
the new thing to learn. So that's why hence the psychosis. Yeah, I I do feel like my instinct is like whenever I am
5:12
waiting for an agent to complete something, the obvious thing to do is like, well, I can do more work, right? Like if I have access to more tokens,
5:18
then like I should just paralyze add more tasks. And so that that's very stressful because if you
5:23
don't feel very bounded by your ability to spend on tokens, then you know you are the bottleneck in the system that is
5:30
max capability. Yeah. you're not maximizing your subscription at least and ideally for
5:35
multiple agents like if you run out of the kod on codecs you should switch to cloud or whatnot I don't know like that's what I've been trying to do a
5:41
little bit and I feel nervous when I have subscription left over uh that just means I haven't maximized my token throughput so I actually kind of
5:47
experienced this when I was a PhD student you would feel nervous when your GPUs are not running like you have GPU capability and you're not maxing out the
5:53
available flops to you but now it's not about flops it's about tokens uh so what is your token throughput and what token
6:00
throughput do you command I would actually argue that it's very interesting that we had you know at
6:05
least 10 years where in many engineering tasks people just did they didn't feel
6:10
compute bound right um and like the entire industry feels that now they feel like they they
What Mastery of Coding Agents Looks Like
6:16
they felt resource bound uh and now that you have this big capability jump you're like oh actually
6:23
it's not you know my ability to access the compute anymore like I'm I'm the binding constraint yeah it's a skill issue
6:29
which is very empowering cuz um yeah cuz you could be getting better. So that's why that's why I think it's very
6:34
addictive because there's unlocks when you when you get better. Where do you think it goes? Like if you just think about like okay you know
6:40
Andre is iterating and everybody else is for 16 hours a day getting better at using coding agents like what does it look like in a year of like you've
6:47
reached mastery? [laughter] Yeah. What does mastery look like right at the end of the year or like two three
6:52
years 5 years 10 years etc. Well I think everyone is basically interested in like going up the stack.
6:58
So I would say yeah it's not about a single session with your agent. Um multiple agents how do they collaborate
7:03
and teams and so on. So everyone's trying to figure out what that looks like. And then I would say claw is also kind of an interesting direction because
7:08
it really when I say a claw I mean this like layer that uh kind of takes persistence to a whole new level. Like
7:14
it's something that like keeps looping is is like um it's not something that you are interactively in the middle of.
7:20
It kind of like has its own little sandbox its own little you know it kind of like does stuff on your behalf even
7:25
if you're not looking kind of thing. um and then also has like maybe more sophisticated memory systems etc that
7:30
are not yet implemented in agents. So open claw has a lot more sophisticated memory I would say than what you would
7:35
get by default uh which is just a memory compaction when your context runs out. Right. You think that's the piece that
7:40
resonated for more users versus like perhaps like broader tool access for open claw.
7:46
Yeah. There there's like I think there's at least I think there's a lot of really good ideas in here. Yeah. Good job Peter. I mean Peter has done a really amazing
7:52
job. Um I saw him recently uh and I talked to him about it and I he's very humble about it but I think he innovated
7:59
simultaneously in like five different ways and put it all together. Um so for example like the soul and D document like he actually really crafted a
8:05
personality that is kind of compelling and interesting and I feel like a lot of the current agents they don't get this correctly. I actually think a clot has a
8:11
pretty good personality. It feels like a teammate uh and it's excited with you etc. Uh, I
8:16
would say um, for example, Codex is a lot more dry. Um, which is kind of interesting because in ChachiPT CEX is
8:22
like a lot more upbeat and highly cyclical. But I would say Codex the coding agent is very dry. It doesn't it
8:27
doesn't seem to care about what you're creating. It's kind of like, oh, I implemented it. It's like, okay, but do you understand what we're building?
8:33
[laughter] It's true. You know, it doesn't it. The other thing I would say is for example with Claude I
8:38
think they dial the psychopasy fairly well where when Claude gives me praise I do feel like I slightly deserve it
8:44
because sometimes I kind of give it like not very wellformed thoughts and uh I give it an idea that I don't think it's fully baked and it doesn't actually
8:50
react very strongly. It's like oh yeah we can implement that. But when it's a really good idea by my own account, it
8:55
does seem to reward it a bit more. And so I kind of feel like I'm trying to like earn its praise which is really
9:00
weird. And so I do think the personality matters a lot. uh and I think a lot of the other uh tools maybe don't
9:06
appreciate as much and I think in this aspect also Peter really cares about this and so that was correct and then the memory system and then uh just you
9:12
know he's just having fun with this um and then the the single WhatsApp portal to all of the automation. Yeah. Is there something that you have
9:20
done personally with your claws beyond software engineering that you think is fun or interesting?
9:25
Yeah. So in January I had a claw I went through a period of claw psychosis. So, I built um I have a claw basically that
9:32
takes care of my home and I call him Dobby the elf claw. Um and uh basically
9:38
I used uh the agents to find all of the smart home subsystems of my home on the
9:43
local area network which I was kind of surprised that worked out of the box. Like I just told it that I think I have Sonos at home. Like can you try to find
9:48
it? and it goes and it did like IP scan of all the um basically um computers on
9:53
the local area network and it found the Sonos thing uh the Sonos uh system and it turned out that there's no password
10:00
protection or anything like that. I just logged in and it's like oh yeah you have these Sonos systems installed I let me try to reverse engineer how it's
10:05
working. It does some web searches and it finds like okay these are the API endpoints and then it's like do you want to try it? And I'm like whoa like you
10:12
just did that. And I'm like, "Yeah, can you try to play something in the study?" And uh it does and music comes out and I'm like, "I can't believe I just
10:18
That's crazy. That's like three prompts." Yeah. I can't believe I just typed in like, "Can you find my sonos?" And that suddenly it's playing music. And it did
10:23
the same for lights. And so basically like it kind of hacked in, figured out the whole thing. Uh created APIs,
10:28
created a dashboard so I could see the command kind of center of like all of my lights in the home. And then it was like
10:34
switching lights on and off. And you know, so I can ask it like Dobby at sleepy time. And when it's sleepy time,
10:39
that just means all the lights go off, etc. and so on. So, it controls all of my lights, my HVAC, my shades, uh the
10:45
pool and uh spa and also my security system. So, I have a camera pointed outside of the house and anytime someone
10:51
rolls in, I have a Quinn uh a Quinn model that looks at the videos. So,
10:56
first of all, there's change detection, right? And then based on change detection, it goes to Quinn and then it actually like tells me um it sends me a text to my
11:03
WhatsApp. It shows an image from the outside and it says, "Hey, a FedEx truck just pulled up. FedEx truck just pulled
11:10
up and you might want to check it and you got me mail or something like that. And Dobby just text me this this really
11:15
incredible. Um so so Dobby is in charge of the house. I text through with it through WhatsApp. Um and it's been like
Second Order Effects of Natural Language Coding
11:22
really fun to have these macro actions that maintain my house. I haven't like really pushed it uh like way more beyond
11:27
that and I think people are doing a lot more crazy things with it. Uh but for me even just a home automation setup, I used to use like six apps, completely
11:34
different apps and I don't have to use these apps anymore. Like Doby controls everything in natural language. It's amazing. Um, and so I think like I
11:40
haven't even pushed a paradigm fully, but already that is so helpful and so inspiring I would say. Do you think that's indicative of like
11:46
what people want from a user experience perspective with software, right? Because I I don't think you know it's
11:52
pretty ignored that it takes humans effort to like learn new software like new UI. Yeah, I think uh to some extent
11:59
that's right. It's like working backwards from how people think an AI should be because what people have in
12:05
their mind of like what an AI is is not actually what an LLM is by by like in a raw sense like LLM is a token generator,
12:10
you know, like more tokens come out, but what they think of is like this p this persona identity that they can tell
12:16
stuff and it remembers it, you know, and it's just kind of an entity behind a WhatsApp. It's like a lot more
12:21
understandable. Mhm. Uh so I think to some extent it's like matching the expectations that humans already have for what an AI should
12:27
behave but under the hood it's like a lot of technical details go into that and LLMs are too raw of a primitive to
12:32
actually um type check as AI I think for most people if that makes sense. Yeah. Um I think that's like how we
12:39
understand what the AI is and like the um description of it as Dobby or some
12:45
personality obviously resonates with people. Um, I also think that it uh the
12:50
unification that you did across your six different software systems for your home automation speaks to a different question of like
12:56
do people really want all the software that we have today? Yeah. Right. Um because I I would argue like well you have the hardware
13:03
but you've now thrown away the software or the the UX layer of it. Um do you
13:08
think that's what people want? Yeah. I think there's this like there's this sense that these apps that are in the app store for using these smart home
13:15
devices etc. uh these shouldn't even exist kind of in a certain sense like shouldn't it just be APIs and shouldn't
13:20
agents be just using it directly and um wouldn't it like I can do all kinds of
13:26
home automation stuff that uh any individual app will not be able to do right um and an LLM can actually drive
13:31
the tools and call all the right tools and do do pretty complicated things um and so in a certain sense it does point
13:38
to this like maybe there's like an overproduction of lots of custom bespoke apps that shouldn't exist because agents
13:43
kind of like crumble them up and everything should be a lot more just like exposed API endpoints and agents
13:49
are the glue of the intelligence that actually like tool calls all the all the parts. Um, another example is like my
13:55
treadmill. Uh, there's an app for my treadmill and I wanted to like keep track of how often I do my cardio. Uh,
14:00
but like I don't want to like log into a web UI and go through a flow and etc. Like all this should just be like make
14:06
APIs available and this is kind of you know going towards the agentic um sort of web or like agent first uh tools and
14:12
all this kind of stuff. So I think the industry just has to reconfigure in so many ways that it's like the customer is not the human anymore. It's like agents
14:19
who are acting on behalf of humans and this refactoring will be will probably be substantial in a certain sense. One
14:24
way that people sometimes push back on this is like do people do do we expect people to v code some of these tools? Do
14:30
we expect normal people to do this kind of stuff that I described? But I think to some extent this is just you know technology as it
14:36
exists today and right now there is some vibe coding and I'm actually watching it and I'm working with the system. But I
14:42
kind of feel like this kind of stuff that I just talked about this should be free like in a year or two or three.
14:47
There's no back coding involved. This is trivial. This is table stakes. This is like any AI even the open source models
14:52
etc can like do this. You should be able to translate from a less technical humans intent very easily
14:59
to this extremely easily. Yeah. Today it's vi coding it's involved and not many people are going to do it. But and you still have to make some design decisions, right? We were talking about
15:05
like you take frames for example. Yeah. Yeah. But I kind of feel like this will
15:10
just uh start to the barrier will just come down and it's just ephemeral software on your behalf and some kind of
15:17
like claw is handling all the details for you but you're not involved. Claw has a claw has a machine and it will figure it
15:22
out and it's just presenting you UIs and you're like saying stuff you know. Mhm. Why haven't you um I guess like pushed
15:29
the boundaries of what you can do personally with Claus? Like is it you know you're focusing on more important
15:35
projects, auto research, etc. or uh you're climbing the hill to mastery or
15:40
something else, right? Yeah. I just feel like I'm so distracted by everything. So I spend [laughter] I spent like a week on the class stuff and
15:46
I I have more to do almost. Um but I will say that um like Jensen tools were all just busier
Why AutoResearch
15:52
unfortunately. Yeah. Uh, I didn't really take advantage of a lot of like email and calendar and all this other stuff and I didn't give
15:58
it access because I'm still a little bit like suspicious and it's still very new and rough around the edges. So, I didn't want to give it like full access to my
16:04
digital life yet. And part of it is just the security, privacy and uh just being very cautious in that in that realm. And
16:11
um, so some of it is like held back by that I would say. Yeah, maybe that's like the dominant dominant feature, but some of it is also just I feel so
16:18
distracted because I feel like I had a week of claw and then other stuff is happening. And what was the um I mean you've talked
16:24
about like being able to train or at least optimize a a model as a task you
16:30
want to see agents do for a long time like what was the motivation behind auto research? Auto research. Yeah. So I think like I
16:36
had a tweet earlier where I kind of like said something along the lines of to get the most out of the tools that have
16:41
become available now you have to remove yourself as the as the bottleneck. You can't be there to prompt the next thing.
16:47
You're you need to take yourself outside. um you have to arrange things such that they're completely autonomous
16:52
and the more you you know how can you maximize your token throughput and not be in the loop. This is the this is the goal and so I kind of mentioned that the
16:59
the name of the game now is to increase your leverage. uh I put in just very few tokens just once in a while and a huge
17:04
amount of stuff happens on my behalf and so auto research like I tweeted that and I think people liked it and whatnot but
17:10
that they haven't like maybe worked through like the implications of that and for me auto research is an example of like an implication of that
17:16
where it's like I don't want to be like the researcher in the loop like looking at results etc like I'm I'm holding the
17:21
system back so the question is how do I refactor all the abstractions so that I'm not I have to arrange it once and
17:27
hit go the name of the game is how can you get more agents running for longer periods of time without your involvement
17:32
doing stuff on your behalf and auto research is just yeah here's an objective here's a metric here's your boundaries of what you can and cannot do
17:39
and go and uh yeah you were surprised at its effectiveness yeah I I didn't expect uh it to work
17:46
because so I have the project data chat um and fundamentally like I think a lot of people are very confused with my
17:52
obsession for like training GBT2 models and so on but for me uh training GBT models and so on is just a little
17:57
harness a little playground for training LLMs and fundamentally what I'm more interested in is like this idea of recursive self-improvement and to what
18:03
extent you can actually have LLMs improving LLMs because I think all the Frontier Labs this is like the thing
18:08
uh for obvious reasons and they're all trying to recursively self-improve roughly speaking and so for me this is kind of like um a little play pen of
18:15
that um and I guess I like tuned Namat already quite a bit by hand in a good old fashioned way that I'm used to like
18:21
I'm a researcher I've done this for like you know two decades I have some amount of like what is the opposite of uh [laughter] yeah
18:28
earned confidence okay I have like two decades of like oh I've trained this model like thousands
18:33
of times of like um so I've done a bunch of experiments I've done hyper primary tuning I've done all the things I'm very
18:38
used to and I've done for two decades and I've gotten to a certain point and I thought it was like fairly well tuned
18:43
and then I let auto research go for like overnight and it came back with like tunings that I didn't see
18:48
and yeah I did forget like the weight decay on the value embeddings and my atom betas were not sufficiently tuned
18:54
and these things jointly interact so like once you tune one thing the other things have to potentially change too you know I shouldn't be a bottleneck
18:59
like I shouldn't be running these hyperparameter search optimizations. I shouldn't be looking at the results. There's objective criteria in this case.
19:05
Uh so you just let you just have to arrange it so that it can just go forever. So that's a single sort of version of auto research of like a
19:11
single loop trying to improve. And I was surprised that it um it found these things that I you know the repo is
19:17
already fairly well tuned and still found something. And that's just a single it's a single loop like these frontier labs they have GPU clusters of
19:24
tens of thousands of them. And so it's very easy to imagine how you would basically get a lot of this automation
19:30
on um smaller models and fundamentally everything around like frontier level intelligence is about extrapolation and
19:36
scaling loss and so you basically do a ton of the exploration on the smaller models and then you try to um
19:42
extrapolate out. So you're saying our research efforts are going to get more efficient like we're going to have better direction for when we scale as well if we can do this
19:49
experimentation better. Yeah, I would say that like the most interesting project and probably what the frontier labs are working on is uh you know you
19:55
experiment on the smaller models. You try to make it as autonomous as possible. Remove researchers [laughter] from the loop. Uh they have way too much
20:02
what is the what is the opposite? Way too much confidence. Yeah, they don't know. They shouldn't be touching any of
20:07
this really and so you have to like rewrite the whole thing because right now I mean certainly they can contribute ideas but okay uh they shouldn't
20:14
actually be enacting those ideas. There's a queue of ideas and there's maybe an automated scientist that comes
20:19
up with ideas based on all the archive papers and GitHub repos and it funnels ideas in or researchers can contribute
20:24
ideas but it's a single queue and there's workers that pull uh items and they try them out and uh whatever works
20:30
just gets uh sort of put on the feature branch and maybe some people like um monitor the feature branch and merge to
20:37
the main branch sometimes. So yeah, just removing humans uh from all the
20:42
processes and automating as much as possible and getting high tok tokens per second throughputs and it does require rethinking of all the abstractions. Um
20:49
and uh everything has to be reshuffled. So yeah, I think it's very exciting. If we take one more recursive step here, um
20:57
uh when is the model going to write a better program MD than you? Yeah. Uh so program MD is
21:03
we're not in the loop. Yeah, exactly. Yeah. Um, so program MD is my crappy attempt at describing like how the auto
21:10
researcher should work like oh do this then do that and that and then try these kinds of ideas and then here's maybe
21:15
some ideas like look at architecture look at optimizer etc. I just came up with this in markdown, right? Um
21:21
and so uh yeah, exactly. You want some kind of an auto research loop maybe that
21:27
looks for you can imagine that different program NDS would um would give you
21:32
different uh progress. So you basically every research organization is described by program MD. Yeah,
21:38
a research organization is a set of markdown files that describe all the roles and how the whole thing connects.
21:43
Um and you can imagine having a better research organization. So maybe they do fewer stand-ups in the morning because they're useless. And this is all just
21:50
code, right? Um and so you can so one organization can have fewer stand-ups, one organization can have more uh one
21:56
organization can be very risk-taking, one organization can be less. And so you can definitely imagine that you have multiple research orgs. Um and then they
22:03
all have code and once you have code, then you can imagine tuning the code. So 100% there's like the meta layer of it.
22:08
Uh um did you see my text about my contest idea? My contest idea was
22:14
uh like let people write uh different program MDs, right? And and so for same
22:19
hardware, where do you get most improvement? Oh, I see. And then you can take all that data and then give it to the model and say write
22:25
a better program MD. Yes. Yes. Yeah. Exactly. We're going to get something better. Like there's no way we don't. You can 100% look at um where the
22:32
improvements came from and like can I change the program MD such that more of these kinds of things would be done or
22:38
like things that didn't work. uh meta optimization. Yeah, you can 100% imagine doing that. So I think this is a great idea, but it's
Relevant Skills in the AI Era
22:45
like you know I think like you sort of go one step at a time where you sort of have one process and then second process
22:50
and then the next process and these are all layers of an onion like the LLM sort of part is now taken for granted. The
22:56
agent part is now taken for granted. Now the claw-like entities are taken for granted and now you can have multiple of them and now you can have instructions
23:02
to them and now you can have optimization over the instructions and it's just like it's a little too much you know but there I mean this is why it
23:08
gets to the psychosis is that this is like infinite and everything is still issue and that's why I feel like yeah that's just coming back to this is why
23:14
it's so insane. Okay. Well, if [laughter] we're we're just trying to like diagnose the current moment and uh
23:20
what is a relevant skill right now, what do you like what do you think is the implication that this um that this is
23:26
the loop we should be trying to achieve in different areas and that it works right like you know remove
23:32
create the metric or create the ability for um agents to continue working on it without you. Yeah.
23:38
Do we still have performance engineering like Yeah. I mean so there's a few caveats that I would put on top of the LM
23:43
ecosystem. Number one, uh this is extremely well suited to anything that has objective uh metrics that are easy to evaluate. So for
23:49
example, like writing kernels for more efficient CUDA, you know, code for various parts of a model, etc. are the
23:55
perfect fit. Because you have inefficient code and then you want efficient code that has the exact same behavior, but it's much
24:01
faster, perfect fit. Uh so a lot of things like like are perfect fit for auto research, but many
24:07
things will not be and so they it's just if you can't evaluate then you can't auto research it, right? Uh so that's
24:12
like caveat number one. And then maybe caveat number two I would say is, you know, we're we're kind of talking about next steps and we kind of see what the
24:18
next steps are, but fundamentally the the whole thing still doesn't it's still kind of like bursting at the seams a little bit and there's cracks and it
24:24
doesn't fully work. And if you kind of try to go too far ahead, the whole thing is actually net not useful if that makes
24:29
sense. Um because these models like still are not, you know, they've improved a lot, but they're still like rough around the
24:35
edges is maybe the way I would describe it. I simultaneously feel like I'm talking to an extremely brilliant PhD
24:41
student who's been like a systems programmer for their entire life and a 10-year-old. And it's so weird because
24:47
humans like there's I feel like they're a lot more coupled. Like you have, you know, um everything
24:52
you wouldn't you wouldn't encounter that combination. This jaggedness is really strange and humans have a lot less of that kind of
24:57
jaggedness. Although they definitely have some, [laughter] but humans have a lot more jaggedness. uh sorry the agents
25:03
have a lot more jaggedness where uh sometimes like you know I ask for functionality and it like comes back
25:09
with something that's just like totally wrong and then we get into loops that are totally wrong and then I'm just I get so frustrated with the agents all
25:14
the time still because you feel the power of it but you also there's still like it does nonsensical things once in
25:22
a while for me still as well I get very annoyed [clears throat] when um uh I feel like the agent wasted a lot
25:29
of compute on something it should have recognized was an obvious problem. Yeah, I think like some of the bigger
25:34
things is like maybe what's under underneath it, if I could hypothesize, is fundamentally these models are
25:39
trained via reinforcement learning. So they're actually struggling with the exact same thing we just talked about, which is the labs can improve the models
25:45
in anything that is verifiable, whether [clears throat] has rewards. So did you write the program correctly and does it
25:51
do the unit test check out? Yes or no? But some of the things where they're struggling is like for example, I think they have a tough time with like nuance
25:57
of maybe what I what I had in mind or what I intended and when to ask clarifying questions. Um like what I
26:04
yeah it's just um anything that feels softer is like worse. And so you're kind of like you're either on Rails and
26:10
you're part of the super intelligence circuits or you're not on Rails and you're outside of the verifiable domains and suddenly everything kind of just
26:16
like meanders. Like maybe another way to put it is if you go to if today if you go to like state-of-the-art model chachi
26:22
PT and you ask it tell me a joke um do you know what joke you're going to get? There's the joke.
26:28
The joke I do feel I I I can't tell you like the you know standard form of it but I do feel like Chach has like three
26:34
jokes. Yeah. Yeah. So the the joke that apparently all thems like laugh the most is why do scientists uh not trust atoms?
26:41
Okay. Because they make everything up. Okay. They make everything up. So this is
26:46
how did that emerge? So this is the joke you would get like three or four years ago and this is the joke you still get today.
26:52
Okay. So even though the models have improved tremendously. Yeah. And if you give them an agentic task, they will just go for hours and move
26:59
mountains for you. And then you ask for like a joke and it has a stupid joke, a crappy joke from 5
27:04
years ago. And it's because it's outside of the it's outside of the RL. It's outside of the reinforcement
27:09
learning. It's outside of what's being improved. It's like and it's part of the jaggedness of like shouldn't you expect
27:15
models as they get better to also have like better jokes or more diversity of them or it's just it's not being
27:20
optimized and it's stuck. Do you uh uh think that that implies
27:25
that we are not seeing like generalization in the sense of like broader intelligence of joke smartness
27:32
being attached to code smartness. Yeah, I think there's some decoupling where some things are verifiable and some
27:38
things are not and some things are optimized for arbitrarily by the labs depending on like what data went in and some things are not and um
27:46
and but I mean the the premise there's a you know premise from some research groups
27:51
that if you are smarter at code generation or in these ver verifiable fields you should be better at
27:56
everything and and like the the the joke situation suggests that that's not happening in all I don't think that's happening. Yeah, I
28:02
don't think that's happening. I think uh I think maybe we're seeing like a little bit of that but not like a satisfying amount. Yeah, that agonist exists in humans.
28:09
[laughter] You can be very very good at math and still tell a really bad joke. Yeah, that's true. Yeah, but it just it
28:15
still means that we're not getting like the story is that we're getting a lot of the intelligence and capabilities in all the domains of society like for free as
28:22
we get better and better models. And that's not like exactly fundamentally what's going on. And there's some blind spots and some things are not being
Model Speciation
28:28
optimized for. And this is all clustered up in these neural net opaque models, right? So you're either on rails of what
28:35
it was trained for and everything is like you're going at speed of light or you're not. Um and so it's jaggedness.
28:40
So um so that's why I think like even though the the progression is obvious
28:45
what should happen, you can't let it fully go there yet because it doesn't
28:51
fully work or it's a skill issue and we just haven't like figured out how to use it. So you know it's hard to tell. Can I ask kind of a blasphemous question which
28:58
is like if this jaggedness is persisting um and it's all rolled up in a uh at
29:04
least monolithic interface right but you know single model um does that make sense or do do you
29:10
should should it be unbundled into things that are can be optimized and improved against different
29:15
domains of intelligence uh like unbundling the models into multiple experts in different areas etc
29:20
more directly yeah um instead of juste that we have no exposure to that can be confusing as a
29:28
why is it so good at this but not at this other thing. Yeah, I think currently my impression is the labs are trying to have a single
29:34
sort of like monoculture of a model that is arbitrarily intelligent in all these different domains and they just stuff it
29:41
into the parameters. I do think that we will we I I I do think we should expect more speciation in the um intelligences.
29:48
Um like you know the animal kingdom is extremely diverse in the brains that exist and there's lots of different
29:53
niches of uh of nature and some animals have overdeveloped visual cortex or other part kind of parts and I think we
30:00
we should be able to see more speciation and um you don't need like this oracle that knows everything. and you kind of
30:06
speciate it and then you put it on a specific task. And we should be seeing some of that because you should be able to have like much smaller models that
30:11
still have the cognitive core like they're still competent but then they specialize and then um and then they can
30:17
become more efficient in terms of latency or throughput on uh specific tasks that you really care about like if
30:22
you're a mathematician working in lean. I saw for example there's a few releases that really like target that as a domain. Um uh so there's a probably
30:29
going to be a few examples like that where the unbundling kind of makes sense. One question I have is whether or
30:34
not uh the capacity constraint on available compute infrastructure
30:40
drives more of this because efficiency Yeah. actually matters more, right? Like your
30:45
if you financing aside though financing is involved in all of this, if you have access to full compute for anything you
30:52
do, like even one single model, right? But if you actually feel pressure where you're like I can't serve
31:00
um a model of massive size for every use case like do you think that leads to any
31:05
speciation? Does that question make sense to you? The question makes sense and I guess like what I'm what I'm what I what I'm struggling with is I don't
31:11
think we've seen too much speciation just yet, right? No. Uh we're seeing a monoculture of models. Yeah. So um
31:17
and there's like clearly pressure for like make a good code model, put it back in the main merge again. Yeah. Yeah.
31:23
Um even though there already is pressure on the models.
31:28
I guess perhaps I I feel like there's a lot of very short-term supply crunch and like maybe that causes more speciation
31:34
now. Yeah. Yeah, I think fundamentally like the the the labs are serving a model and
31:40
they don't really know what the end user is going to be asking about. Uh so maybe that's like some part of it because they
31:45
kind of have to multitask over all the possible things that could be asked. But I think if you're coming to a business and maybe partnering on some specific
31:50
problems you care about, then maybe you would see that there. Um or there would be some very high value applications
31:56
that are like more niche. Um but uh I think right now they're kind of like going after the totality of what's
32:02
available. I don't think that the science of manipulating the brains is like fully developed yet partly.
32:07
What do you mean manipulating? So like so fine-tuning without losing capabilities as an example and we don't
32:12
have these primitives for actually like working with the intelligences in ways other than just context windows like context windows kind of just just work
32:19
and it's very cheap to manipulate etc. And this is how we're getting some of the customization etc. Uh but I think if it was I think it's a it's a bit more of
32:26
a developing science of how you like more deeply adjust the models, how you have continual learning maybe or how you
Building More Collaboration Surfaces for Humans and AI
32:32
um how you fine-tune in a certain area, how you get better in a certain area or like how you actually touch the weights, not just the context windows. And so
32:38
it's a lot more tricky, I would say, to touch the weights than just the context windows. Uh because you're actually
32:43
fundamentally changing the full model and potentially its intelligence. And so um so maybe it's just like not a fully
32:49
developed science, if that makes sense, of speciation. A and it also has to be like cheap enough
32:54
for that speciation to be worthwhile in these given contexts. Can I ask a question about uh
33:00
like uh an extension to auto research that you described in terms of um open ground? You said okay well you know we
33:06
have this thing um we need more collaboration surface around it essentially for people to
33:12
contribute um to research overall. Can you talk about that? Yeah. So, we talked about our research has a single thread
33:17
of like I'm going to try stuff in loop, but fundamentally uh the paralization of this is like the interesting component.
33:23
Um, and I guess I was trying to like play around with a few ideas, but I don't have anything that like clicks as simply as like I don't have something
33:29
that I'm like super happy with just yet, but it's something I'm like working on on the side when I'm not working on my claw. Um so I think like one issue is if
33:37
you have a bunch of nodes uh of paralization available to you then it's very easy to just have multiple auto
33:43
researchers talking through um a common system or something like that. What I was more interested in is how you can have an untrusted pool of workers out
33:50
there on the internet. So for example in auto research uh you're just trying to find um the piece
33:57
of code that trains a model to a very low validation loss. If anyone gives you a candidate commit, it's very easy to
34:03
verify that that commit is correct, is good. Like they someone could claim from the internet that this piece of code
34:08
will optimize uh much better and give you much better performance. You could just check very easy, but probably a lot
34:14
of work goes into that checking. Uh but fundamentally they could lie and etc. So you're basically dealing with a similar
34:19
kind of it's almost actually like looks a little bit like my my designs that incorporate an untrusted pool of workers
34:25
uh actually look a little bit more like a blockchain a little bit. uh because instead of blocks, you have uh commits
34:31
and these commits can build on each other and they contain like changes to the code as you're improving it. Um and
34:36
uh the proof of work is basically doing tons of experimentation to find the commits that work. Um and that's hard. Um and then the
34:43
reward is just being on the leaderboard right now. There's no monetary reward whatsoever. uh but I don't want to push
34:48
the analogy too far but it fundamentally has this issue where you a huge amount of search goes into it but it's very
34:54
cheap to verify that a candidate solution is indeed good because you can just train a single you know someone had
34:59
to try 10,000 ideas but you just have to check that the thing that they produced actually works because the 99,000 of them didn't work
35:05
you know um and so basically long story short is like you have to come up with a system
35:11
where an untrusted pool of workers can collaborate with a trusted pool of workers uh that do the verification
35:18
And the whole thing is kind of like asynchronous and works and um and so on and uh it's it's like safe from a
35:24
security perspective because if anyone sends you arbitrary code and you're going to run it that's very sketchy and dodgy. So um but fundamentally it should
35:31
be totally possible. So you're familiar with projects like seti at home and folding at home all of these problems have a similar kind of setup. So folding
35:37
at home you're folding a protein um and it's very hard to find a configuration that is low energy. But if someone finds
35:42
a configuration that they evaluate to be low energy that's perfect you can just use it. you can easily verify it. So a lot of things have this property that
35:48
you know very expensive to come up with but very cheap to verify and so in all those cases things like folding at home
35:54
or seti at home or auto research at home will be good fits. And so, um, long
36:00
story short, a swarm of agents on the internet could collaborate to improve LLMs and could potentially even like run
36:06
circles around Frontier Labs. Like, who knows, you know? Um, yeah, like maybe that's even possible. Like, Frontier
36:12
Labs have a huge amount of trusted compute, but the Earth is much bigger and has huge amount of untrusted
36:18
compute. But if you put systems in check uh systems in place that you know deal with this then maybe it is possible that
36:24
the swarm out there could uh could come up with with better with better solutions and people kind of like
36:30
contribute cycles um to to a thing that they care about. And so sorry so the last thought is uh lots of companies or
36:37
whatnot they could maybe have like their own uh things that they care about and you if you have compute capacity you could contribute to different kind of
36:43
auto research tracks like maybe you care about certain you know like you care about like cancer or something like that
36:48
of certain type you don't have just donate money to an institution you actually could like purchase compute and then you could join the auto resource
36:55
forum for that project you know uh so if everything is rebundled into other researchers then compute becomes the
37:01
thing that you're contributing to the pool. Yeah, that's very inspiring. And it's also interesting like I don't I don't know how far this goes, but it is
37:08
interesting that at least some audience of people, you know, here in Silicon Valley or lining up at um you know,
37:14
retail stores in China have discovered that like having access to personal compute is interesting again.
37:20
Yeah. Right. So maybe they're really motivated to do that for their claws and then they can contribute to auto research.
37:25
It's almost like dollars the thing everyone cares about, but is flop the thing that actually everyone cares about
Analysis of Jobs Market Data
37:30
in the future? Like is there going to be like a flipping almost of like what the thing that you care about? Like right now for example, it's really hard to get
37:36
compute even if you have money. Yeah. So actually it almost seems like the flop is like dominant [laughter]
37:42
uh in a certain sense. Um yeah. So uh so maybe that's kind of like kind of like that like how much how many flops do you
37:48
control instead of like what wealth do you control? I don't actually think that's true but it's kind of interesting to think about. The last thing you released was like a
37:55
little bit of jobs data analysis. Is that right? What um and might have touched a nerve
38:01
even though you're just like visualizing some public data. Yeah. Uh what was you know what were you curious about?
38:06
Yeah, I guess I was curious to um I mean everyone is like really it's everyone is really thinking about the impacts of AI
38:12
on the job market and what's going to look like. So I was just interested to take a look like what does the job market look like? Where are the
38:17
different roles? um and how many people are in different professions. And I was like really just interested to like look
38:23
through uh the individual cases and try to think myself about like you know with these AIs and how they're likely to
38:28
evolve like are these going to be tools that people are using? Are these going to be displacing tools for these uh
38:35
professions and like what are the current professions and how are they going to change? Are they going to grow or uh adjust to a large extent or like
38:42
what could be new professions? So it's really just like a way to fuel my own chain of thought about the industry I suppose. M
38:47
um and so uh yeah the jobs data basically is just a Bureau of Labor Statistics they actually have um percent
38:55
outlook for each profession about how much it's expected to grow over the next I think almost a decade. Uh yeah I think it's a decade but it was
39:01
made in 2024. We need a lot of healthare workers. Yeah. So so they've already made those projections and I'm not sure actually
39:07
100% what the methodology was that they that they put into the projections. Um, I guess I was interested to color things
39:13
by like if people think that what's like primarily being um developed now is this kind of like more digital AI that is
39:20
kind of like almost like these ghosts or spirit entities that can like interact in the digital world and manipulate a
39:26
lot of like digital information and they currently don't really have a physical embodiment or presence and the physical stuff is probably going to go slightly
39:32
slower because you're manipulating atoms. So flipping flipping bits and and the ability to copy paste a digital
39:38
information is like makes everything a million times faster than accelerating matter, you know. So um so energetically
39:44
I just think we're going to see a huge amount of activity in digital space, huge amount of rewriting, huge amount of activity boiling soup and I think the
39:52
we're going to see something that that in the digital space goes at the speed of light compared to I think what's going to happen in the physical world to some extent if would be the
39:59
extrapolation. And so I think like [clears throat] there's currently kind of like I think overhang where there can
40:05
be like a lot of unhobling almost potentially of like a lot of digital information processing that used to be
40:10
done by computers and people and now with AI as like a third kind of manipulator of digital information. There's going to be a lot of refactoring
40:16
in those in those uh disciplines. Um but the physical world is actually going to be like I think um behind that by some
40:24
amount of time. And so I think what's really fascinating to me is like so that's why I was highlighting the the
40:29
professions that fundamentally manipulate digital information. This is work you could do from your home etc. because I feel like those will be like
40:35
things will change and it doesn't mean that there's going to be less of those jobs or more of those jobs because that has to do with like demand elasticity
40:41
and many other factors but things will change in these professions because of these new tools and um because of this
40:47
upgrade to the nervous system of the human superorganism [laughter] if you want to think about it that way. Given the look you had at the data, do you
40:53
have either any observations or um uh guidance for people facing the job
40:59
market or thinking about what to study now or what skills to develop? I mean, we can all go get like I'm very thankful
41:05
that I have to like meet people for my job right now. [laughter] More physical. Yeah. Could you do your work from home though?
41:11
Uh I could I think there are relationship parts of it that are hard, but most of it I could. Yeah. I think it's really hard to tell
41:17
because again like the job market is extremely diverse and I think the answers will probably vary but uh to a large extent like these tools are
41:23
extremely new, extremely powerful and so just being uh you know just trying to keep up with it is like the first thing
41:28
um and um yeah because I think a lot of people kind of like dismiss it or
41:33
or they're afraid of it or they're afraid of it etc which is totally understandable of course. Yeah, I think like um it's fundamentally an
41:40
empowering tool at the moment. Um and these jobs are bundles of tasks and some of these tasks can go a lot faster and
41:45
so people should think of it as primarily a tool that it is right now. Um and I think the long-term future of that is uncertain. Yeah, it's kind of
41:52
really hard to forecast to be honest and like I'm not professionally like doing that really and I think it's a job of
41:57
like economists to do properly. You are an engineer though. Uh and like one thing I thought was interesting is
42:03
that like the uh demand for engineering jobs is continuing to increase. Yeah.
42:08
Um I I can't tell if that's like a temporary phenomenon. I'm not sure how I feel about it yet. Do you know? Yeah. That's like the demand almost like
42:15
uh software was scarce, right? And so the reason we don't have more demand for software is just it's scarcity and it's
42:21
too expensive. Too expensive. Yeah. So if the barrier comes down then actually you have the Jevans paradox which is like you know you actually the
42:26
demand for software actually goes up. It's cheaper and there's more more powerful. Yeah. the the classical example of this always is the ATMs and
42:33
the bank tellers uh because there was a lot of like fear that um ATMs and computers basically uh would displace
42:40
tellers but what happened is they made like the cost of operation of um of a bank branch much cheaper and so there
42:46
were more bank branches so there were more tellers is like the canonical example people site uh but basically it's just paradox like something becomes
42:53
cheaper so there's a lot of unlocked demand for it so I do think that that's
42:58
probably I do have cautiously optimistic view of this in software engineering where I do um it does seem to me like
43:05
the demand for software will be extremely large um and it's just become a lot cheaper and um so I do think that
43:12
for quite some time um it's very hard to forecast but it does seem to me like
43:18
right now at least locally there's going to be more demand for software um because software is amazing it's like you know digital information processing
43:23
you're not forced to use like arbitrary tools that were given to you that are imperfect in various ways you're not forced to subscribe to what exists uh
43:30
code is now ephemeral and it can change and it can be modified um and so I think there's going to be a lot of activity in
43:36
the digital space to like rewire everything in a certain sense and I think it's going to create a lot of demand for for this kind of stuff I
43:43
think long term um yeah obviously even with auto research like openi or or you
43:48
know uh anthropic or these other labs like they're employing what like a thousand something researchers right
43:53
these researchers are basically like glorified auto like you know [laughter] they're like automating themselves away
43:59
like actively and this is like the thing they're all trying to do. Yeah. I f like I went around um some of those researchers also feel feel
44:06
the psychosis, right? Because they can it's working. Yeah. Right. And and so they're like oh it's over for me too.
44:11
I did spend a bunch of time going around opening eye and I was like you guys realize if we're successful like we're all out of job like
44:16
like it's just we're just building automation for Sam or something like that. like I or the board I'm not sure
44:22
but like uh there's just building like this automation for yeah the board or the CEO or something like that and we're
44:27
all out of our job and maybe um contributing on the sides and so yeah
44:33
it's kind of like uh nerving from that perspective is it okay if I ask you Nome's question you know you could be doing that right
44:40
auto researching with a lot of compute scale and a bunch of colleagues at one of the [clears throat] frontier labs like why not
44:45
well I was there for a while right like and I did re-enter so to some extent I agree and I think that there are many
44:50
ways to slice this question. It's a very loaded question a little bit. Um I will say that I feel very good about like
44:55
what people can contribute in their impact uh outside of the frontier labs obviously not in the industry but also
45:01
in like more like ecosystem level roles. Um so your role for example is more like ecosystem level. My role currently is
45:07
also kind of more on ecosystem level and I feel very good about like impact that people can have in those kinds of uh roles. I think conversely there's there
45:13
are definite problems in my mind for um uh for basically aligning yourself way too much with the frontier labs too. So
45:20
fundamentally I mean you're you have a huge amount of financial incentive to uh with these frontier labs and by your own
45:25
admission the uh the AIs are going to like really change humanity and society in very dramatic ways and here you are
45:32
basically like building the technology and benefiting from it like and being like very allied to it through financial
45:37
means like this was a conundrum that was in um at the heart of you know how open
45:42
started in the beginning like this was the conundrum that we were trying to solve. M um and so you know that so it's kind of
45:49
um it's still not the conundrum is still not like fully resolved. So that's number one. You you're not a completely free agent and you can't actually like
45:55
be part of that conversation in a fully autonomous um free way like if you're inside one of the frontier labs like
46:01
there are certain things that you can't say. Uh and conversely there are certain things that the organization wants you to say and you know they're not going to
46:07
twist your arm but you feel the pressure of like what you should be saying you know cuz like obviously [laughter]
46:14
Otherwise, it's like really awkward conversations, strange side eyes, like what are you doing? You know, like so you can't like
46:20
really be an independent agent and I I feel like a bit more ali like aligned with humanity in a certain sense outside
46:26
of a frontier lab because uh I don't I'm not subject to those pressures almost, right? And I can't say whatever I want
46:31
or yeah, I would say in the frontier labs like um you can have like uh impact there of course as well. So uh but
46:38
there's many researchers and maybe you're one of them, maybe your ideas are really good, etc. Maybe there's a lot of decision-m to to do and you want to be
46:43
in a position where you are in the room with those conversations when they come up. I do think that currently the stakes are like overall fairly low and so
46:49
everything is kind of like nice but ultimately at the end of the day like when the stakes are really high etc. If you're an employee at an organization I
46:55
don't actually know how much sway you're going to have on the organization what it's going to do like fundamentally at the end of the day um uh it's uh you're
47:02
not like really in charge like you're in a room and you're contributing ideas but you're not like really in charge of that entity that you're that you're a part
47:08
of. So those are like some sources of misalignment I think to some extent. I will say that like in one way I do agree
47:13
a lot with that sentiment that um I do feel like and if uh like the labs for better or worse they're opaque and a lot
47:20
of work is there and they're kind of like at the edge of capability and what's possible and they're working on what's coming down the line and I think
47:25
if you're outside of the frontier lab uh your your judgment fundamentally will start to drift because you're not part
47:31
of the you know what's coming down the line right and so I feel like my judgment will inevitably start to drift
47:36
as well and uh I won't actually have an understanding of how these systems actually work under the hood that's an opaque system uh I won't have a a good
47:43
understanding of how it's going to develop and etc. And so I do think that in that sense I agree and something I'm
47:48
nervous about. I think it's worth basically bas uh being in touch with what's actually happening and actually being in the frontier lab and if if some
47:55
of the frontier labs would have me come for you know some amount of time and do really good work for them and then maybe
48:00
coming is looking for a job. This is super [laughter] exciting. Yeah. Then I think that's maybe a good setup because I kind of feel like it kind of
48:06
um you know um maybe that's like one way uh to to actually be connected to what's
48:12
actually happening but also not feel like you're necessarily fully controlled by Yeah. by those entities. So I think honestly
48:17
in my mind like uh Noom can probably get do extremely good work at uh at OI but also I think his most um impactful work
48:24
could very well be outside of OpenAI. No that's a call to be an independent researcher with auto [laughter] research. Yeah, there's many things to
Open vs. Closed Source Models
48:31
do on the outside and it's a it's a and I think ultimately I think the ideal solution maybe is like yeah going back
48:37
and forth uh or um yeah and I think fundamentally you can have really amazing impact in both places. So very
48:43
complic I don't know like it's a very loaded question a little bit but I mean I joined the frontier lab and now I'm outside and then maybe in the future
48:49
I'll want to join again and I think um uh that's kind of like how I look at it.
48:54
One question related to what visibility to does the world or the AI ecosystem
49:00
have into uh the frontier is like how how close open sources to the frontier
49:06
um and how sustainable that is. I I think yeah I think it is quite surprising the entire sequence of events
49:13
actually from like having a handful of Chinese models and global models and I
49:19
think people are going to continue releasing here in the near term that are closer than much of the industry anticipated from a capability
49:25
[clears throat] perspective. Um I don't know if you're surprised by that but you're a long-term contributor to open source. Like what's your
49:30
prediction here? Yeah. So roughly speaking basically the um yeah the closed models are ahead but like people
49:35
are monitoring the number of months that sort of like open source models are behind. Um and it started with there's nothing and then it went to 18 months and now it's
49:42
convergence right. So maybe they're behind by like what is the latest maybe like eight six months eight months kind of thing right now. Yeah I'm a huge fan
49:48
of open source obviously. So for example in operating systems you have like closed like you know Windows and Mac OS. These are large software projects kind
49:54
of like what LM are going to become and there's Linux but Linux is very easy like actually Linux is extremely
50:00
successful project it runs on the vast majority of computers like last time I checked was it like 60% or something
50:05
like run Linux um and that's because there is a need in the industry to have a common open platform that everyone
50:10
feels uh sort of safe using I would say like the industry has always felt a demand for that kind of a project to
50:16
exist and I think the same is true now and that's why businesses actually want there's demand for this kind of a um a
50:21
thing to exist the big difference is that everything is capital. Uh there's a lot of capex that goes into this.
50:27
Um so I think that's where things like fall apart a little bit make it a bit harder to to compete in certain sense.
50:32
Uh I I do think that the current models are very good. The other thing that I think is like really interesting is that for the vast majority of like consumer
50:38
use cases and things like that even like term open source models are actually quite good I would say and I think like
50:43
if you go forward like more uh more years it does seem to mean like a huge amount of like simple use cases are
50:50
going to be well covered and actually even run locally. Um, but there's going to be always like some demand for like
50:56
frontier intelligence and that that can actually be extremely large piece of the pie. But it could be that the frontier
51:01
the need for frontier intelligence is going to be like, you know, Nobel Prize kind of work or like let's move Linux
51:07
from C to Rust. There's going to be like bigger projects, you know, like scoped in that kind of a way. And there's going
51:12
to be maybe more um and maybe that's where a lot of the frontier closed intelligences were are going to be
51:18
interacting with and open source is kind of like going to eat through a lot of the more basic use cases or something
51:23
like that. You know at some point what is frontier today is going to be you know probably later this year what's
51:28
frontier today in terms of what I'm using right now from the closed labs uh might be open source and that's going to be doing a lot of work. So I kind of
51:34
expect that this dynamic will actually basically continue like we'll have Frontier Labs that have closed um AIS that are kind of like these oracles and
51:41
then we'll have open source kind of like behind by some amount of months and I kind of expect that to uh to continue
51:46
and I actually think that's like a pretty pretty good setup uh overall. Um
51:51
because I I'm a little bit hesitant of having um I don't actually think it's like structurally I think there's some
51:56
systemic risk attached to just having intelligences that are closed and that's like that's it. Mhm. And I think that that's uh you know
52:02
centralization has a very poor track record in my view uh in in the past and has uh you mean like in political or economic
52:09
systems in general. [laughter] Yes. Exactly. I think there's like a lot of like Eastern European. Yeah.
52:15
A lot of pretty bad president. So I want there to be a thing that is maybe not at the edge of capability because it's new and unexplored etc. But I want there to
52:21
be a thing that's behind and that uh is kind of like a common working space for intelligences that the entire industry
52:27
has access to. Yeah, that seems to me like a pretty decent power balance for the industry. Yeah, I also think there's just like
52:32
there are many problems to solve, right? Like if you keep advancing intelligence from the frontier, we can do new things
52:38
and there are a lot of like very big problems for humanity, right? And so like it seems that that will continue to
52:44
be a very expensive game. And so I want to like root for labs that are doing that because there are problems we cannot solve without continuing to
52:50
advance the models in a very expensive way. Yeah. And yet, as you point out, like if what we have today as Frontier is
52:58
open, that's a lot of capability. Yeah. Right. And and so I I think you know the power of that or the democratization of
53:04
that seems like very useful and also healthy. Yeah. I think basically by accident we're actually like in okay spot
53:09
and optimal. [laughter] Yeah. By accident we we are happen to be in a good spot in a certain sense. Um
53:14
well and and to some degree the the longer this endures like this dynamic um the the healthier of a spot like the
53:22
ecosystem might be in right because you have more and more area under the curve and I will say that even on the close
53:27
side I almost feel like it's been like even further centralizing recently because I think a lot of the front runners are like not necessarily like
53:33
the top tier and so yeah like in that sense I think it's um it's not super
53:38
ideal. I would love there to be more more front to last because yeah I'm like by default very suspicious of like um I
53:45
want there to be more people in the room. I want I think like in machine learning ensembles always outperform any individual model and so I want there to
Autonomous Robotics
53:52
be ensembles of people thinking about all the hardest problems and I want there to be ensembles of people in the room when they um to be all well
53:58
informed and to make all those decisions you know so uh I don't want it to be like a closed doors with two people or three people. I feel like that's like
54:04
not a good not a good future. I almost wish like there were more labs is long story short and I I I do think that open
54:10
source has a has a has a place to play. I hope it sticks around and I basically it's currently slightly behind and
54:16
that's actually kind of like a good thing. Okay. you worked on the precursor to generalized robotics autonomy um in
54:23
cars, right? Uh a a lot has happened in the last couple months with robotics
54:28
companies as well like acceleration of really impressive generalization of environment of tasks like increasing
54:35
long horizon tasks, lots of money going into the space like is it going to happen? Has anything in your view
54:41
changed recently? So like my view is kind of informed by what I saw in self-driving and I do feel like self-driving is the first robotics
54:46
application. So probably what I saw is at the time like 10 years ago there were a large number of startups and I kind of
54:52
feel like um like most of them basically like didn't long-term make it. Um and what I saw is that like a lot of capital
54:58
expenditure had to go in and a lot of time and so um I think it like I think robotics because it's so difficult and
55:05
so messy and requires huge amount of capital investment and a lot of like con conviction um just it's like a big
55:11
problem and I think items are really hard. So I kind of feel like they will lag be it will lag behind what's going to happen in digital space and in
55:17
digital space there's going to be a huge amount of unhobling uh basically like things that weren't super efficient
55:22
becoming a lot more efficient by like a factor of 100 because bits are so much easier and so I
55:27
think currently in terms of what's going to change and like where the activity is I kind of feel like digital space is
55:34
going to like change a huge amount and then the physical space will lag behind and what I find very interesting is like this interface in between them as well
55:41
because I think in this If you we do have more agents acting on behalf of humans and more agents kind of
55:46
like talking to each other and and doing tasks and participating in the kind of economy of agents etc. Um you're going
55:53
to run out of things that you're going to do purely in a digital space. At some point you have to go to the universe and you have to ask it questions. Um you
55:59
have to run an experiment and see what the universe tells you to get back to learn something. And so we currently have a huge amount of like digital work
56:07
uh because there's an overhang in how much we collectively thought about what already is digital. So we just didn't
56:12
have enough thinking cycles among the humans to think about all the information that is already digital and already uploaded. Um and so we're going
56:18
to start running out of stuff that is actually like um already uploaded. Uh so you're going to at some point read all
56:24
the papers and process them and have some ideas about what to try. But um yeah, we're just going to uh I don't
56:30
actually know how much you can like get intelligence that's like fully closed off and with just information that's available to it, you know. And so I
56:36
think what what's going to happen is first there's going to be huge amount of unhobling and I think there's a huge amount of work there. Then actually it's going to move to like the interfaces
56:42
between physical and digital. So and that's like sensors of like seeing the world and actuators of like doing
56:47
something to the world. So I think a lot of interesting companies will actually come from that interface of like can we
56:53
feed the super intelligence in a certain sense data and can we actually like take data out and manipulate the physical
56:59
world um per its bidding if you want to like interropomorphize the whole thing right and then the the physical world
57:04
actually I almost feel like the the total addressable market etc in terms of like the amount of work and so on is is massive possibly even much larger maybe
57:12
what can happen in digital space so I actually think it's like a much bigger opportunity as well but um I do feel
57:18
like it's a huge amount of work and and in my in my mind the atoms are just like a a million times harder. So um so it
57:25
will lag behind but it's also I think a little bit of bigger market. So it's kind of like uh yeah I think the opportunities kind of like follow that
57:31
kind of trajectory. So right now this digital is like my main interest then interfaces would be like after that and
57:38
then maybe like some of the physical things um like their time will come and they'll be huge when they do come. Well,
57:44
it's it's an interesting framework for it too because uh certain things not the things I'm working on right now but certain things are much easier even in
57:50
the world of atoms right like if you just think about like read and write to the physical world like read like
57:56
sensors cameras like there's a lot of existing hardware and you can imagine like enriching agent capabilities or
58:03
capturing a lot of new data if you're just clever about it and like you don't necessarily have to invest a lot to like
58:09
get something valuable. Yeah. So like examples of this that I saw for example are you know a friend of
58:14
mine Liam is running is a CEO of periodic I visited them last week so it's just on top of mind like they're
58:21
trying to do auto research for material science um and so in that case it's like the sensors to the intelligence are actually
58:27
like pretty expensive lab equipment and the same is true in biology. I think a lot of people are very interested in engineering biology and you know the
58:32
sensors will be more than just like video cameras if that makes sense. And then the other thing I was I saw for example is companies that are trying to
58:38
have um like you basically pay people for training data. Yeah. As an example to feed programmatically.
58:43
Yeah. To feed to feed the Borg. Uh um and so like these are all examples of
58:48
like sensors in a certain sense. So they take many diverse shapes and forms if that makes sense. Yeah. So I'm looking forward to the
58:54
point where I can ask for a task in the physical world and I can put a price on it and just tell the agent like you know
59:00
you figure out how to do it. Go get the data. I'm actually kind of surprised we don't have enough like information markets. Mhm.
59:05
Like if for example if poly market or other betting markets or even stocks etc if they have so much autonomous activity and rising amount of activity
59:12
like um why should like for example if Iran was just happening now like how come there isn't a process where like
59:17
taking a photo or video from somewhere in Tan should cost like 10 bucks like someone should be able to pay for that you know like and that's an example of
59:23
like feeding the intelligence there's not going to be a human looking at it it's going to be like agents who are trying to guess the betting games and
59:29
stock markets and so on. M so I kind of feel like the agentic web is still like fairly new that there's no like mechanisms for this but this is an
59:35
example of what I I think might happen there's a good book that maybe is inspiring called demon you potentially
59:42
read it in Damon the intelligence um ends up like puppeteering almost a little bit like humanity in a certain
59:48
sense you know and so humans are kind of like its actuators but humans are also like its sensors um and so I think like collectively like
59:55
society will kind of like reshape in a certain way in uh to to serve that kind kind of a that will kind of like end up
1:00:02
happening collectively across the industry where yeah there's just a lot more automation and has certain needs
1:00:07
and kind of humans will be serving those needs of that of that machine not necessarily like to each other well we were um on this very specific
1:00:14
point of uh like missing pieces of training data we needed um we needed something like auto research right like
1:00:20
we we need the training cycle or the SFT piece to be uh far more mechanized
1:00:27
for for what part in order to make the uh collection like in order to take the human out of the
1:00:33
loop to ask for a task that is just like improve my model quality with new data, right?
1:00:38
Uh yes. Does that make sense to you? Like we um if you can't have the model do the
1:00:45
training runs by itself, then your ability to do this as a like
1:00:50
closed loop task Yes. with u by pricing data Yeah. is um more challenged.
1:00:55
Yes. Yes. 100%. Yeah. But now the thing is for LLM training it actually is like very easily it like really fits the
MicroGPT and Agentic Education
1:01:01
paradigm. Um so you'd actually yeah clean metric yeah like LM training actually fits the
1:01:06
paradigm really well really easily like all the optimization of all the code and so it runs faster and then you also have
1:01:12
like metrics that you can optimize against. I do think that if you had an autonomous loop over those metrics there's going to be a lot of like good
1:01:17
harding going on where the system will like overfitit to those metrics and so um but then you can use the system to
1:01:23
devise more metrics and you just have really good coverage. So it's kind of hard to tell but um in a certain sense
1:01:28
it's like a pretty pretty good fit. I want to talk about a little uh tiny side project you have before we end. Um
1:01:34
tell me about the micro GPTR. Oh yeah. Okay. So micro GPT. So I have this like running obsession of like
1:01:41
maybe a decade or two of just like simplifying and boiling down the uh basically LLMs uh to like their bare
1:01:47
essence. And I've had a number of projects along these lines. So like nano GPT and um make more and uh micro GP
1:01:54
microrad etc. So I feel like micro GPT is now the state-of-the-art of me trying to like just boil it down to just the
1:02:00
essence because the thing is like training neural nets and LLMs specifically um it's a huge amount of
1:02:05
code but all of that code is actually complexity from efficiency. It's just because you need it to go fast. If you don't need it to go fast
1:02:12
and you just care about the algorithm then that algorithm actually is 200 lines of Python very simple to read and
1:02:17
this includes comments and everything. Um because you just have like uh your data set which is a text um and you need
1:02:23
your neural network architecture which is like 50 lines. You need to do your forward pass and then you have to do uh your backward pass to calculate the
1:02:29
gradients. And so an little autograd engine uh to calculate the gradients is like 100 lines and then you need an optimizer an atom for example which is a
1:02:36
very state-of-the-art optimizer is like again 10 lines really. And so putting everything together in a training loop
1:02:41
is like yeah 200 lines. And it was interesting to me like normally before
1:02:46
like maybe a year ago or more if I had come up with micro GPT I would be tempted to basically explain to people
1:02:52
like I have a video like stepping through it or something like that. Uh and I actually tried to make that video
1:02:58
a little bit and I tried to make like a little guide to it and so on but I kind of realized that this is is not really
1:03:03
it's not really adding too much because people cuz it's already so simple that it's 200 lines that anyone could ask their agent to explain it in various
1:03:10
ways and the agents like I'm not explaining to people anymore. I'm explaining it to agents. If you can explain it to agents, then agents can be
1:03:16
the router and they can actually target it to the human in their language uh with infinite uh you know uh patience
1:03:23
and uh just at their capability and so on. Right. If I don't understand um this particular function, I can ask the agent
1:03:30
to explain it to me like three different ways and I'm not going to get that from you. Exactly. And so I kind of feel like you know what is education? like it used to be guides,
1:03:36
it used to be lectures, it used to be this thing, but I feel like now more I'm explaining things to agents and maybe I'm coming up with skills uh where like
1:03:44
um uh so basically skill is just a way to instruct the agent how to teach the thing. So maybe I could have a skill for
1:03:50
micro GPT of the progression I imagine the agent should take you through if you're interested in understanding the codebase and it's just like hints to the
1:03:57
model to like oh first start off with this and then with that and so I could just script the curriculum a little bit
1:04:02
as a skill. Uh, so, uh, so I I don't feel like, um, yeah, I feel like there's
1:04:07
going to be less of like explaining things directly to people and it's going to be more of just like does the agent get it? And if the agent gets it,
1:04:13
they'll do the explanation. And we're not fully there yet because they I still can I still think I can probably explain
1:04:19
things a little bit better than the agents, but I still feel like the models are improving so rapidly that um, I feel
1:04:25
like it's a losing battle to some to some extent. Um and so I think uh education is going
1:04:30
to be kind of like reshuffled by this quite substantially uh where it's the end of like teaching each other things
1:04:36
almost a little bit like if I have a um library for example of code or something like that it used to be that you have
1:04:41
documentation for other people who are in my user library but like you shouldn't do that anymore like you should have instead of HTML documents
1:04:47
for humans you have markdown documents for agents because if agents get it then they can just explain all the different parts of it. So it's this redirection
1:04:54
through agents, you know, um, and that's like, so I think we're going to see a lot more of that playing out.
1:05:00
Well, we'll see if the great teachers know like to develop intuition for how to explain things to agents differently.
1:05:06
Ultimately, so for example, micro GPT like I asked I tried to get an agent to write micro GPT. So I told it like try
1:05:11
to boil down the simplest things like try to boil down um, neural networking to the simplest thing and can't do it.
1:05:17
like micro GPT is like my is it's like my end of my obsession. It's the 200
1:05:23
lines. I thought about this for a long time. I was obsessed about this for a long time. This is this is the solution.
1:05:28
Trust me, it can't get simpler. And this is this is my value ad. Everything else like agent gets it. It just can't come up with it. But it
1:05:35
totally gets it and understands why it's done in certain way etc. So like my contribution is kind of like these few
Conclusion
1:05:40
bits, but everything else in terms of like the education that goes on after that is like not my domain anymore. So
1:05:47
maybe yeah, it's like education kind of changes in those ways where you kind of have to infuse the few bits that you feel strongly about the curriculum or
1:05:54
the the best the better way of explaining it or something like that. The things that agents can't do is your job now. The things that agents can do,
1:06:01
they can probably do better than you or like very soon. And so you should um be strategic about what you're actually
1:06:07
spending time on. Well, we appreciate the few things. Thank you, Andre. Okay.
1:06:13
Find us on Twitter at no prior pod. [music] Subscribe to our YouTube channel if you want to see our faces. Follow the
1:06:19
show on Apple Podcasts, Spotify, or wherever you listen. [music] That way, you get a new episode every week. And
1:06:24
sign up for emails or find transcripts for every episode at no-briers.com.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `Skill Issue: Andrej Karpathy on Code Agents, AutoResearch, and the Loopy Era of AI`  ·  visible_channel: `No Priors Podcast` (82.8K subs)
- visible_url: `youtube.com/watch?v=kwSVtQ7dziU`  ·  visible_published: `Mar 20, 2026`  ·  visible_views: `866,934`  ·  likes: `15K`
- visible_description: *"What happens when AI agents can design experiments, collect data, and improve — without a human in the loop? Andrej Karpathy joins Sarah Guo on the state of models, the future of engineering and education, thinking about impact on jobs, and his project AutoResearch: where agents close the loop on a piece of AI research (experimentation, training, and optimization, autonomously)."*
- ai_generated_summary (visible): *"Explore how AI agents are transforming engineering workflows from manual typing to delegation. Discover new methods for autonomous research and managing digital environments through conversational interfaces."* (quality/accuracy may vary)
- chapters (visible): 0:00 Karpathy Intro · 2:55 What Capability Limits Remain? · 6:15 What Mastery of Coding Agents Looks Like · 11:16 Second Order Effects of Natural Language Coding · 15:51 Why AutoResearch · 22:45 Relevant Skills in the AI Era · 28:25 Model Speciation · 32:30 Building More Collaboration Surfaces for Humans and AI · 37:28 Analysis of Jobs Market Data · 48:25 Open vs Closed Source Models · 53:51 Autonomous Robotics · 1:00:59 MicroGPT and Agentic Education · 1:05:40 Conclusion
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_2.38.58_AM-58758391…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

Process this one. This is absolutely not garbage. This is a spine source.

This is probably one of the most important sources in the whole batch because it connects almost everything we have been circling: code agents, agent management, AutoResearch, recursive loops, eval-gated autonomy, open-vs-closed models, robotics, physical/digital interfaces, agent-first software, and education/documentation for agents.

I would mark it:

Priority: 5/5
Depth: full_semantic
Authority context: frontier-practitioner / researcher / ecosystem-level AI operator
OMNI relevance: Build OS / agent runtime / research loops / Knowledge Reservoirs / §B / §C / education-for-agents
Promotion posture: spine_candidate
Core takeaway

The keeper is:

The new skill is not “writing code.” It is designing loops where agents can work longer, in parallel, with objective feedback, bounded authority, and humans removed from the bottleneck where possible.

Karpathy says the workflow flipped from mostly hand-writing code to mostly delegating to agents, where the human now operates through “macro actions” over repos: one agent researches, another codes, another plans, another reviews. He frames the new constraint as token throughput and the human’s ability to structure agent work, not typing speed.

That is directly OMNI Build OS.

The big OMNI translation
1. “Skill issue” is real — but OMNI must turn it into structure.

Karpathy’s repeated point is that when agents fail, it often feels like the human has not yet found the right harness: better instructions, better memory, better parallelization, better evaluation, better workflows.

For OMNI, that means:

Agent capability is partly model intelligence, partly workflow design.

So OMNI cannot just ask “which model?” It must ask:

What is the loop?
What is the memory?
What is the objective?
What is the eval?
What is the sandbox?
What is the agent allowed to touch?
What is the human reviewing?
What gets committed?
What gets rolled back?

Keeper:

OMNI’s leverage comes from agent harness design, not just model access.

2. AutoResearch is the Build OS north star.

The AutoResearch section is enormous. Karpathy describes setting an objective, a metric, and boundaries, then letting agents run experiments without the human constantly prompting the next step. He specifically says the name of the game is to increase leverage: fewer human tokens in, more agent work out.

OMNI translation:

Build OS should become AutoResearch for product/architecture/code/workflow improvement.

Not fully autonomous chaos — but loops like:

objective → constraints → experiment queue → agent workers → evaluator → candidate improvement → reviewer → merge/promote/reject

This maps to:

architecture extraction,
code patches,
workflow tests,
source ingestion,
eval generation,
UI copy testing,
provider packet improvement,
safety red-team cases,
Knowledge Reservoir routing.
3. The key limiter is evaluability.

This is maybe the most important caution.

Karpathy says the approach works best where there are objective metrics that are easy to evaluate. If you cannot evaluate, you cannot really AutoResearch it. He gives examples like CUDA/kernel performance or model validation loss where the metric is clean, and contrasts that with softer domains where models meander.

That is a direct OMNI law:

Autonomy should scale first where evaluation is clean.

Good early OMNI autonomy targets:

tests passing,
duplicate source detection,
metadata extraction accuracy,
transcript ingestion completeness,
schema validation,
broken link detection,
source routing coverage,
policy checklist completion,
workflow state mismatch detection.

Bad early autonomy targets:

clinical judgment,
patient-specific medical advice,
subjective product strategy,
vague “make OMNI better,”
unstated founder intent,
ambiguous care escalation.

Keeper:

No eval, no autonomy.

4. “Jagged intelligence” is doctrine-grade.

Karpathy says current models can feel like an expert systems programmer and a 10-year-old at the same time. They are incredible on optimized/verifiable rails, but weirdly weak outside them. He gives the joke example as evidence that skill in one domain does not automatically generalize everywhere.

This is crucial for OMNI.

Do not assume:

“The model is good at code, so it is good at clinical nuance.”

Or:

“The model is good at summarization, so it is safe at escalation.”

Doctrine:

Model capability is jagged; OMNI must route by proven competence, not general impressiveness.

5. Model speciation validates OMNI’s model-routing strategy.

Karpathy expects more “speciation” of intelligences: smaller/specialized models that retain cognitive competence but are optimized for specific niches, rather than one oracle model doing everything.

This reinforces everything from Mistral, IBM, ServiceNow, and Anthropic:

OMNI should be model-plural and route by task, risk, latency, cost, and evidence of competence.

Not one magic model.

6. “Agents are the new UX layer” is huge.

His Dobby/home automation example is wild but important: agents bypass six separate apps and directly operate APIs. He argues many app UIs may become unnecessary because agents can act as the glue across APIs.

OMNI implication:

The future user may not operate software directly. They may operate through agents that call capabilities.

For OMNI, that means future surfaces should expose governed capabilities, not just screens:

schedule appointment,
request missing info,
draft message,
prepare provider packet,
verify entitlement,
open follow-up task,
retrieve evidence,
update documentation candidate,
escalate risk.

But the correction:

Agent-first UX does not mean ungoverned API access.

OMNI needs capability envelopes, not free-form tool chaos.

7. “The customer is not the human anymore” pressures §C.

Karpathy says the industry may reconfigure because agents will act on behalf of humans; software may need to expose APIs for agents rather than only UIs for humans.

That is exactly OMNI §C.

Future OMNI may serve:

human users,
internal AI agents,
external partner agents,
patient-side agents,
provider-side agents,
device/robot actors.

Keeper:

OMNI must become legible to agents without becoming vulnerable to agents.

8. Untrusted workers + trusted verification is a major §C pattern.

The section on untrusted internet workers contributing commits to AutoResearch is massive. Karpathy describes expensive search but cheap verification: untrusted workers can propose candidate commits, while trusted systems verify them before acceptance.

That is a very important OMNI pattern:

Untrusted contributors may propose; trusted verifiers decide.

This maps to:

external agents,
vendor tools,
source reservoirs,
patient-source data,
AI-generated code,
clinician wisdom,
community evidence,
future research swarms.

OMNI version:

Proposal is cheap. Verification is authority.

9. Digital first, physical later — but interfaces matter.

Karpathy argues digital work will move much faster than physical work because bits are easier than atoms. But he says the interface between digital and physical — sensors and actuators — will become very important as agents need to ask the universe questions and act in the world.

This supports your robotics/Neuralink anxiety in the right way.

OMNI does not need to build robots now. But it must be ready for:

sensors,
wearables,
home devices,
lab equipment,
photos/videos,
voice,
medication dispensers,
future physical actors.

Keeper:

OMNI’s near-term wedge is digital care/workflow; its architecture must leave room for physical-world sensors and actuators later.

10. Education/documentation shifts from human-first to agent-first.

The MicroGPT section is sneaky-important. Karpathy says he increasingly explains things to agents, not directly to people. If the agent understands the code/library/concept, it can explain it to humans in different ways. Documentation may become markdown for agents, not HTML docs for humans.

This is directly relevant to your repo/control-plane obsession.

OMNI docs should not just be human essays. They should be agent-operable instructions:

AGENTS.md,
domain contracts,
read graphs,
eval rubrics,
source authority labels,
workflow specs,
build gates,
“how to teach/operate this domain” files.

Keeper:

Future documentation is not just read by humans. It is executed through agents.

Where it lands

Build OS: enormous. This is the main source so far for multi-agent coding, macro-actions, AutoResearch loops, agent throughput, eval-gated automation, and agent-operable docs.

Knowledge Reservoirs: enormous. Source ingestion should become an agent loop with objective checks, reviewers, and rerun triggers.

§B AI substrate: enormous. Jagged intelligence, model speciation, token throughput, verifiable domains, open vs closed model dynamics.

§C Governed Capability Exchange: enormous. Agent-first APIs, untrusted worker proposals, trusted verification, external agents, capability access.

CNS / orchestration: major. Long-running claws, memory, persistence, parallel agents, tool use, checkpoints.

Robotics / physical AI: major horizon relevance, but not wedge-direct.

Education / documentation: major. Agent-readable docs become infrastructure.

Doctrine / primitive pressure

Potential concepts:

agent_macro_action
token_throughput
agent_harness
claw_like_persistent_agent
AutoResearch_loop
objective_metric_boundary
eval_gated_autonomy
untrusted_worker_pool
trusted_verifier
candidate_commit
program_md
agent_operable_documentation
agent_first_API
ephemeral_software
jagged_intelligence
model_speciation
digital_first_physical_later
sensor_actuator_interface
human_bottleneck_removal
macro_action_repository_workflow

Keeper doctrine:

OMNI should automate where objectives, boundaries, and verification are clear; where they are not clear, agents may assist, but humans/domains must remain in the loop.

Second keeper:

The new build skill is designing agent loops: instructions, memory, tools, evals, sandboxes, parallelism, review, and commit gates.

Third keeper:

Future OMNI documentation must be agent-operable: written so agents can safely understand, navigate, build, test, and explain the system.

What not to import blindly

Do not let “remove humans from the loop” apply to clinical authority.

Do not confuse token throughput with productive progress.

Do not run many agents before the evals and boundaries exist.

Do not treat “skill issue” as permission to bypass safety.

Do not expose APIs to agents without §C security and capability envelopes.

Do not assume agent-first UX means human UX disappears.

Do not let untrusted contributors/agents execute code or actions without sandboxing and verification.

Do-not-miss lesson

This is the line for OMNI:

Autonomy scales only where verification scales.

And the second line:

OMNI’s Build OS should not merely help humans build faster; it should structure work so agents can safely keep working when humans are not looking.

Priority / confidence

Priority: 5/5
Confidence: 5/5
Suggested depth: full_semantic

This is one of the batch’s spine sources. It should feed Build OS, §B model/workflow doctrine, §C external-agent/capability exchange, Knowledge Reservoir automation, agent-readable documentation, and the long-term thesis that OMNI is not just software humans use — it is a governed environment where humans and agents cooperate over care/business work.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus deep-read extraction  ·  layer: `analysis_nonbinding`  ·  EVRUN-2026-000001 (★SPINE — loopy-era agentic engineering)
- reviewer: `Opus` · type: `AI assistant` · at: `2026-06-09` · purpose: `formalize Review 001 → structured extraction → registry` · binds nothing (`GRD-036`/`GRD-044`) · [full agent extraction d3f88689]

**33 clusters (22 spine). Karpathy/No Priors. Keepers: autonomy scales only where verification scales · Build-OS = AutoResearch for governed improvement · future docs = agent-operable harness.**
1. **`operator_as_orchestrator`** — human = macro-delegator not typist (16h directing fleets). §6/Build-OS/Agent-Work-Protocol/UX-cockpit. "express my will to my agents" 0:06. ABSENT→spine.
2. **`manifest_not_code`** — builders speak objectives/constraints/envelopes; impl agent-executed. §B/Build-OS. "code's not even the right verb" 0:00. vocabulary.
3. **`december_workflow_flip`** — 80/20 hand→delegate flipped to agent-first default; era-version eval baselines. §B/Build-OS/§10. "default workflow completely different as of December" 2:18. spine.
4. **`skill_issue_doctrine`** — agent failure usually = harness/workflow design failure, not model gap. §B/Build-OS/CNS/§8. "everything is skill issue" 0:53. spine.
5. **`agent_harness_design`** — 7 harness questions/lane: loop? memory? objective? eval? sandbox? allowed-touch? human-review? commit/rollback? Build-OS/Agent-Work-Protocol/CNS/KR. "didn't give good enough instructions in the agents MD" 3:44. ABSENT→spine.
6. **`macro_actions_parallel_role_agents`** — delegation unit = governed macro-actions; concurrent role-agents w/ conflict boundaries. §C/capability-topology/CNS/Build-OS/§6. "macro actions over your repository" 4:52. spine.
7. **`token_throughput_meter`** — new scarce resource; meter governed token spend/lane w/ budget caps + kill-switch. Build-OS/§B/CNS/security. "what is your token throughput" 6:00. vocabulary.
8. **`claw_persistent_loop`** — persistent sandboxed loop; needs checkpoints/sandbox/envelope/kill-switch — steered, NOT set-loose. §A/§8/CNS/Build-OS/security. "keeps looping… even if you're not looking" 7:14/7:20. spine (pairs 089/058/049).
9. **`go_up_the_stack_maturity`** — assisted→parallel→persistent→meta; cap meta-depth w/ authority gates (infinite-onion psychosis risk). Build-OS/§10/§A. "optimization over the instructions… infinite" 23:02. spine.
10. **`proportional_human_review`** — review depth scales w/ risk (clinical=full; low-risk eval-clean=lighter). §A/§C/Build-OS/domain-contracts. "depending on how much you care about that code" 4:35. spine.
11. **`agent_first_api_customer_is_agent`** — customer often the agent; §C publishes agent-legible capability APIs w/ envelopes ("legible without vulnerable"). §C/§7.7/capability-topology/security. "the customer is not the human anymore" 14:12. PARTIAL→spine.
12. **`ephemeral_software`** — agent-generated glue cheap/disposable; still passes promotion gates; cheap glue ≠ authority-free care commit. §C/Build-OS/§10. "ephemeral software on your behalf" 15:10. spine.
13. **`cautious_digital_access`** — Karpathy withholds email/calendar from claws; default-deny PHI/messaging/billing until envelopes proven. §A/security/§C (pairs 081/079). "suspicious… full access to my digital life" 16:04. spine.
14. **`AutoResearch_loop`** — objective+metric+boundaries once → go → agents run overnight; Build-OS north star (objective→constraints→queue→workers→evaluator→candidate→reviewer→merge). §8/Build-OS/CNS/KR/§A. "remove yourself as the bottleneck" 16:41. ABSENT→spine.
15. **`objective_metric_boundary`** — the AutoResearch triple; no loop without declared triple (binds 049). §A/Build-OS/CNS/eval-054. "here's an objective… metric… boundaries" 17:32. spine.
16. **`no_eval_no_autoresearch`** — can't evaluate → can't autonomize; good targets = tests/schema/ingestion-completeness; bad = clinical judgment/vague-"make-OMNI-better". §A/§2/Build-OS/domain-contracts/security. "if you can't evaluate then you can't auto research it" 24:07. spine.
17. **`idea_queue_workers_promotion_gate`** — idea queue + automated workers + feature-branch promotion; humans contribute ideas not enactment; trusted merge. CNS/Build-OS/KR/§8. "monitor the feature branch and merge" 20:37. ABSENT→spine.
18. **`program_md_org_spec`** — org/process as agent-operable versioned markdown (program.md); AGENTS.md/read-graph/contracts = OMNI's program.md. Build-OS/KR/Agent-Work-Protocol/CNS. "research organization is a set of markdown files" 21:38. spine.
19. **`jagged_intelligence`** — brilliant + 10-year-old simultaneously; route by proven competence per task/risk, never infer clinical safety from codegen prestige. §A/§B/CNS/security/domain-contracts. "PhD student… and a 10-year-old" 24:41. PARTIAL→spine.
20. **`model_speciation_plural_routing`** — diverse specialized intelligences; route by task/latency/cost/risk; open lags closed ~6-8mo. §B/CNS/capability-topology/§C/security. "more speciation in the intelligences" 29:48. PARTIAL→spine.
21. **`untrusted_worker_trusted_verifier`** — expensive search, cheap verification: untrusted propose candidate commits; trusted verify before accept. §C/§7.8/capability-topology/security/KR/Build-OS. "untrusted pool of workers… cheap to verify" 33:43/35:48. PARTIAL→spine.
22. **`open_collaboration_surface`** — governed surfaces for external contribution; federation+audit on commit chains (not open PRs). §7.8/§C/KR/CNS/future-watch. "collaboration surface around it" 33:06. spine.
23. **`digital_first_physical_lag`** — bits refactor at light-speed, atoms lag; OMNI wedge stays digital, governed hooks for sensors later. §10/§8/§7.8/capability-topology/future-watch. "robotics will lag the digital space" 55:11. PARTIAL→spine.
24. **`sensor_actuator_interface`** — governed sensor/actuator capability slots (wearables/labs/cameras) as obs/action surfaces; OMNI governs care action, not robots. §7.8/capability-topology/§8/Observation/future-watch. "interfaces… sensors… actuators" 56:42. spine.
25. **`agent_first_documentation`** — docs target agents first (markdown-for-agents); AGENTS.md/contracts/read-graphs/eval-rubrics = agent-operable harness. KR/Build-OS/Agent-Work-Protocol/§B/CNS. "explaining things to agents not directly to people" 1:03:10. spine.
26. **`irreducible_human_bit`** — humans contribute what agents can't invent; clinical doctrine/consent/judgment stay human-owned. §A/§6/Agent-Work-Protocol/domain-contracts. "outsource thinking… can't outsource understanding" (085 keystone) · "things agents can't do is your job now" 1:05:54. spine.
27. **`metric_overfit_eval_arms_race`** — autonomous loops overfit metrics; decomposed eval bundles + deterministic validators + reward-hacking probes (054). Build-OS/§A/CNS/security. "overfit to those metrics… devise more metrics" 1:01:17. PARTIAL→spine.
28. **`steered_long_horizon_anti_swarm`** — long runs need plan+check-ins+bounded scope+early-abort; human = binding constraint. Build-OS/CNS/Agent-Work-Protocol/§A/security/cockpit-058. "wasted compute… should have recognized" 25:29. PARTIAL→spine (pairs 058/089).
29. **`mechanized_ingestion_sft_loop`** — data/SFT ingestion mechanizes; automated scientist ingests archive/GitHub → idea queue; Evidence Plane = AutoResearch loop (THIS EVRUN). KR/Build-OS/CNS/§8. "SFT piece to be more mechanized" 1:00:27. spine.
30. **`llm_raw_vs_persona_surface`** — raw LLM = token generator; projection plane wraps into consent-bound personas w/ lineage. §7.7/§B/UX. "LLM is a token generator" 12:10. vocabulary→watch.
31. **`open_closed_ensemble_pluralism`** — closed leads, open converges months behind; ensembles outperform monoculture; preserve inspectable harness even w/ closed. §B/§7.8/security/future-watch. "systemic risk… intelligences that are closed" 52:02. vocabulary→watch.
32. **`jobs_jevons_empowerment`** — Jevons paradox on software demand; OMNI = empowerment substrate for care operators (not architecture). §10/§2/product. "Jevons paradox… demand for software goes up" 42:26. low-authority-watch.
33. **`frontier_lab_independence_foil`** — inside=access/capture, outside=independence/drift; Evidence Plane keeps operator judgment calibrated. §2/§6/future-watch. "judgment will start to drift" 47:25. low-authority-watch.

**Net-new (promote):** `objective_metric_boundary`, `no_eval_no_autoresearch`/`eval_clean_gate`, `claw_persistent_loop`, `idea_queue_workers`+`feature_branch_promotion_gate`, `token_throughput_meter`, `mechanized_ingestion_loop`, `irreducible_human_bit`, `steered_long_horizon_scope`(sharpen 058), `metric_overfit_probe`(sharpen 054). EXISTS-AS (don't re-mint): `program_md`/`agent_first_documentation`→AGENTS.md, `macro_action`→Capability Node/Route/Grant, `untrusted_worker`/`trusted_verifier`→capability_envelope+Evidence-Plane promotion (Capability Topology Gate), `jagged_intelligence`/`model_speciation`→§B+069/076, `autonomy_graduation`→049, `production_shaped_sandbox`/`agent_rollout`→054, `agent_workbench`/`human_takeover`→058, `builder/runtime split`→056. REJECT/no-op: blockchain-commit-chain (use audit not blockchain), ai-psychosis, dobby-personality (import portal-unification only), flops-as-currency (→inference-budget 064/066), frontier-weight-training/recursive-self-improvement (OMNI eval/harness path only). **Reread (MANDATORY):** eval-harness×054 (1:01:17,16:41–19:11); steered-long-horizon×058/089 (25:09–25:29); autonomy-graduation×049 (clinical loops NEVER auto-commit); CNS grammar×077/059; zero-click×081 (ingest+act = attack surface); Capability Topology Gate (macro_action/untrusted_worker→envelope/Grant); Agent-Work-Protocol §6/§8/§9 (harness questions→stop-proof); KR mechanized loop. VERBATIM-reread anchors: 16:41–19:11, 23:43–27:20, 33:37–35:48, 1:03:03–1:04:54, 39:44–57:38. DO-NOT-reread (low yield): jobs/Jevons 37:55–43:36, frontier-lab-career 44:40–48:24, personality/soul.md 7:46–9:12.

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000001` (ai-corpus synthesis + routing) · per-source extraction: **§3 Review 003** (this file) · concept_registry: `analysis/EVRUN-2026-000001_ai-corpus-synthesis-and-routing/EVRUN-2026-000001_ai-corpus_concept_registry_and_routing_map.md` · anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · promotion: gated (`GRD-036`/`GRD-044`) — clusters route to thesis-v4 + CNS/Build-OS/security/capability-topology contracts via registry; no direct binding from this file.

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged **verbatim-reread cluster** (Karpathy; AutoResearch/loop-closing autonomy → §A/§B/CNS/Build OS; pairs w/ Ng 071, LangChain 059/062); AI-summary in source.

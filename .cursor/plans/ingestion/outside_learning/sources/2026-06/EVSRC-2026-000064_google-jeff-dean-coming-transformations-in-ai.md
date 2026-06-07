# EVSRC-2026-000064 — Google's Jeff Dean on the Coming Transformations in AI

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: Jeff Dean); Knox read in §3 Review 001 (content-verified: Jeff Dean AI-substrate/infra read — initially had a transcript-dup mis-paste in the Knox slot, corrected + re-verified 2026-06-07 audit). Awaiting EVRUN.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000064`  ·  filename: `EVSRC-2026-000064_google-jeff-dean-coming-transformations-in-ai.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=dq8MhTFCs80`
- source_title: `Google's Jeff Dean on the Coming Transformations in AI`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  series: `AI Ascent 2025`  ·  published_at: `2025-05-12`  ·  views_at_capture: `181,390`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `talk`  ·  source_reliability_context: `practitioner / researcher (Google Chief Scientist; foundational AI/infra authority — near-domain-expert)`  ·  topic_tags_light: `[specialized_hardware_TPUs, organic_systems, multimodality, agents, large_models, future_engineering_capabilities, ai_infrastructure]`

## §0.1 — People / authorship / authority context  *(filled from screenshot — "People mentioned": Jeff Dean)*
- primary speaker(s):
  - name: `Jeff Dean` · role_in_source: `speaker` · affiliation_at_publication: `Google (Chief Scientist; pioneer behind Google's TPUs and foundational AI research — MapReduce, TensorFlow, etc.)` · speaker_type: `researcher / senior technologist (frontier infra/research)` · authority_context: `**Among the highest-credibility infra/research voices in AI.** Bold predictions on how the tech evolves: from **specialized hardware (TPUs)** toward **more "organic" systems**, **multimodality**, **agents**, **large models**, and **future engineering capabilities**. Deep-infra/research lens — strongest where claims are technical-trajectory, lighter on product/business` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `—` (AI Ascent talk)  ·  event_context: `Sequoia AI Ascent 2025`  ·  perspective / conflict notes: `Google Chief Scientist — Google/infra perspective. **OMNI relevance: technical-trajectory context (hardware→organic systems, multimodality, agents, large models) informs §B AI-axis substrate assumptions + Build OS model-execution/gateway posture + long-horizon planning. Foundational backdrop more than directly-adoptable primitive.** Older (2025-05). Capture; route via gates; high trust on technical trajectory, still gated for adoption.`

> Authority is descriptive, not worship (`GRD-039`): Jeff Dean = very high credibility on AI infra/research trajectory; even so, predictions route through evidence → interpretation → gated promotion (forecasts ≠ commitments).

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = Jeff Dean transcript; §3 = matching Jeff Dean read — corrected from a transcript-dup mis-paste during 2026-06-07 audit) · [x] EVRUN needed? (yes — targeted_semantic; §B technical-trajectory backdrop) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Timeline

Chapters

Transcript
Search in video
Intro
0:02
We have Jeff Dean and if you read Jeff's bio, he's run everything at some point
0:08
in Google uh including overseeing the genesis of this industry and the BERT
0:13
paper that kind of sparked things so many years ago. And um and we're very fortunate at Sequoia to have our partner
0:19
Bill Korn who spent about a decade before Sequoia running most of engineering at Google with Jeff. And so
0:25
please welcome Jeff and Bill.
0:30
Thank thank you. Um and Jeff, it's great to see you. We got to work together for
Jeff Dean
0:36
a few years, and Jeff still is occasionally willing to talk to me, which I'm very proud of. We we have an
0:43
occasional dinner, which is great fun. Yeah. No, he he's now the chief scientist, I think, at at Alphabet. So,
0:50
um I I thought we'd start. Obviously, a lot of the people in the room are excited about AI and what's happened.
0:57
Google clearly introduced a lot of the tech that that the industry is based on
1:04
uh transformers and other things. Where do you where do you see things going these days as you look out in both
1:10
within Google but also in the industry as a whole? Yeah, I mean I think uh this
Where do you see AI going
1:16
this sort of period has been a fairly long time in developing even though it's sort of come into sort of popular
1:23
visibility only in the last three or four years but really starting maybe in 2012 and 13 people were starting to be
1:31
able to use these really you know at that time what seemed like large neural networks to solve interesting problems
1:38
and the same sort of algorithmic approach would work for vision and for speech. speech and for language. And
1:44
that was, you know, pretty remarkable and kind of brought uh attention to, you
1:51
know, machine learning as a way to solve those problems rather than sort of more traditional handcrafted approaches. And
1:57
one of the things we were interested in in 2012 even was how can you scale and train very very large neural networks.
2:04
So, we trained a neural network that at the time was 60x larger than anything else and we used 16,000 CPU cores
2:11
because that's what we had in our data centers. Um, and got really good results. Um, and that really, you know,
2:18
cemented in our mind that scaling these approaches would really work well. Um, and there's been, you know, a whole
2:24
bunch of evidence of that and, you know, hardware improvements to help, uh,
2:30
increase the our ability to scale to larger and larger models, larger data sets. You know, we had an expression
2:36
bigger model, more data, better results. Um, which has been sort of relatively
2:42
true for the last 12 or 15 years. um and where things are going. I think you know
2:47
now the models that we have are capable of doing really interesting things. Uh
2:53
you know they can't solve every problem. Uh they can solve an a growing set of
2:59
problems year-over-year because the models get better. um you know we have better algorithmic improvements that
3:06
show us how to you know train larger models with you know uh the same compute
3:11
cost uh more capable models. Um and then we have scaling of hardware. We have uh
3:17
you know increasing uh compute per per unit of hardware and uh also we have you
3:26
know reinforcement learning and post- training kinds of approaches that are making the models better and sort of guiding them into the ways that we want
3:32
them to behave and that's really exciting I think you know multimodality is another big thing like having you
3:39
know uh the ability to put in audio or video or images or text or code and have
3:46
it sort of output all those kinds of things as well is is pretty pretty useful. The the industry is I think
multimodality
3:53
mesmerized by agents right now. How how real do you think agents are? I know Google introduced an agent framework.
4:00
Some of this stuff, not Google's necessarily, but some of the agent stuff seems to be a
4:05
little bit vaporware to me. So yeah, I mean sorry folks, I'm a little direct as
agents
4:11
some some folks will tell you. It's all good. I mean, I think there's a lot of promise there because, you know, we I I
4:18
do see a path for agents with, you know, the right training process to eventually
4:24
be able to do many many things in the virtual sort of computer environment
4:29
that humans can do today. You know, right now they can sort of do some things but not most things. But the path
4:38
for increasing the capability there is, you know, reasonably clear. you get more
4:43
reinforcement learning uh going, you have more agent experience that it can learn from. You have, you know, early
4:49
nent products that can do some things but not most things uh but are still incredibly useful for people. Uh and I
4:56
think similar things will happen in sort of physical robotic agents as well. Like
5:01
right now that we're probably close to making that transition from, you know,
5:07
robots in messy environments like this room kind of don't quite work today, but you can see a path where in the next few
5:15
year or two they'll start to be able to do 20 useful things in this room. And
5:20
that will introduce, you know, pretty expensive robotic products that can do those 20 things. And then learning from
5:26
experience, they will then get cost engineered to now have something that's 10 times cheaper and can do, you know, a
5:33
thousand things and that's going to engender even more cost engineering and more improvement in capability. So it's
large models
5:41
exciting. It is and and it does seem like it's coming even though it's figured today. But the uh um I guess one
5:49
of the other things that comes up I think with a lot of young companies is what's happening with the large models.
5:54
I mean clearly you know Google has the Gemini 2.5 Pro and deep research and so
6:01
forth and then there's open AAI and a number of other players. it I think there's a open debate about how many
6:09
large language models open source closed source where where are things going how
6:15
do you think about that obviously Google has a strong position and wants to I'm sure dominate in that area but how do
6:22
you see the the landscape yeah I mean I think uh clearly there it takes quite a
cutting edge models
6:29
lot of investment to build the absolute cutting edge models um And I think there
6:36
won't be 50 of those. Uh there may be like a handful. Um and uh there are an
6:43
awful lot of you know once you have those capable models it's possible to make much lighter weight models that can
6:49
be used for many more things because you can use techniques like distillation that uh I was a co-author on and got
6:56
rejected from Nurup's 2014 is unlikely to have impact. I' I've heard that I've
7:01
heard that technique may have helped DeepSeek. So um so that that's a really nice uh technique if you have a better
7:09
model and then you can put it into a smaller scale thing that actually is pretty lightweight and fast and all the
7:14
kinds of properties you might want. Um so uh I mean I think there will be quite
7:20
a number of different players in this this space because you know different shape models or models that focus on
7:27
different kinds of things but I also think you know a handful of really capable general purpose ones will will
7:33
do pretty well. Fair enough. I guess hardware is the other thing that's interesting. I it looks to me like every
hardware
7:41
large player is building their own hardware. Obviously, Google has been
7:46
very public about the TPU program, but Amazon has their own. Rumors are Meta
7:52
has one. Rumors are OpenAI is building one. You know, there's lots of uh
7:58
hardware and and yet the industry seems to only hear about
specialized hardware
8:03
Nvidia fairly. I'm sure that's not true in your office, but I how how do you how
8:09
do you think about that? uh how how important is specialized hardware for this stuff? Yeah. Well, I mean it it's
8:16
very clear that having hardware that is focused on sort of machine learning style computations and you know I like
8:23
to say accelerators for reduced precision linear algebra are what you want and you want them to be better and
8:29
better generation over generation and you want them to be connected together at large scale with super high speeded
8:34
networking so that you can you know uh spread your model computation out over as many you know compute devices as
8:41
possible. Um, I think it's super important. You know, I helped bootstrap the TPU program in 2013 because it
8:47
seemed obvious we would want a lot of compute for inference at that time. That was the first generation. And then the
8:54
next generation of TPUs, TPUv2 was focused on both inference and training because we saw uh a big need there. And
9:02
our I think we're on now uh we stopped numbering them for some annoying reason. So now it's uh we're on Ironwood which
9:09
is coming out uh any day now. and trillium before that. So be be care be
9:14
careful that sounds like an Intel uh chip naming strategy which hasn't worked
9:20
small at a distance from myium which is a little Yeah. No, I guess going a little bit off topic
9:28
and then maybe we'll open up to questions from folks in the in the room. Uh I I I have a lot of friends who are
9:36
physicists. uh they they were a little surprised when Jeff Hitten uh and his
9:42
colleagues uh won the Nobel uh in in physics. I guess how how do you see AI
9:50
uh you know I some of the physicists I know are sort of offended that a non-physicist is starting to win Nobel
9:57
prizes. How how far do you think AI is going to go in in various fields at this
AI in science
10:03
point? Uh pretty far I think. I mean also this year my colleague uh Demis and
10:08
and John Jumper won it for I almost forgot that. Yes. Yes. So double Nobel
10:14
Prize celebration Monday and Tuesday or whatever it was. Um so I mean I think that's a sign that
10:22
really AI is influencing lots of different kinds of science because um
10:27
you know at its core you know can you learn from interesting data and a lot of
10:33
parts of science are about making connections between things and understanding them and if you can have
10:39
AI assisted help in doing that you know one one of the things I've seen in many different fields of science is many
10:46
disciplines often have incredibly expensive computational simulators of some process like uh weather forecasting
10:53
is a good example or um you know fluid dynamics or quantum chemistry
10:58
simulations. Um and often what you can do is use those simulators as training
11:04
data for a neural net and then uh build something that approximates the simulator but now is 300,000 times
11:11
faster. And that just changes how you do science because all of a sudden, well, I'm going to go to lunch and screen 10
11:16
million molecules. That's now possible instead of, you know, I would have to run that for a year on compute I don't
11:23
have. Uh, and I think that that that just kind of fundamentally changes your your your process of what you how you do
11:30
things and will make faster discoveries. I I think it it's probably be most
Questions from the audience
11:37
interesting if there are questions from the audience at this point. I have other questions for Jeff, but um
Future of inference hardware analog
11:46
uh well actually just to quickly follow up on the you know Jeff Hinton uh famously left Google after um like
11:53
studying I guess the effects of uh or the differences between digital and analog computing um as a future platform
11:59
for uh inference and and learning. And I'm wondering uh is the future of
12:04
inference hardware analog? Uh it's definitely a possibility. I mean I think like analog has some nice
12:11
properties in terms of it being very very power efficient. Um you know I
12:17
think there's a lot of room for digital things to be much more specialized for inference as well. So and it's a little
12:24
bit easier to work with typically uh but you know I think there is a general
12:29
direction of how can we make inference hardware that is you know 10 20 50
12:35
thousand times more efficient than what we have today. And that seems eminently possible uh if we put our minds to it.
12:42
Uh it's actually something I'm spending a bit of time on. So
Developer experience vs hardware
12:49
hi, I was just going to ask about developer experience versus hardware. I
12:54
think the TPU hardware is extremely impressive, but there's a lot of, you know, in the zeitgeist about how CUDA or
13:00
different like, you know, technologies are easier to use than the TPU layer. And so I'd be curious for your
13:06
perspective on that. And is that something you've been thinking about or getting a lot of angry emails about or
13:12
uh yeah I mean I I don't connect with cloud c TPU customers all that much but
13:18
definitely the experience can be improved. Um, one of the things we started working on in 2018 is a system
13:23
called Pathways, which is really enable uh designed to enable us to take lots of
13:29
different computing devices and then give uh sort of a really nice
13:34
abstraction with those where you have a virtual to physical device mapping that is managed by the underlying runtime
13:40
system and uh you know we have uh support for that for both PyTorch and
13:46
Jax. Uh we primarily use Jacks inhouse, but what we have is a single Jax Python
13:52
process just looks like it has 10,000 devices on it and you just write your code as you would as an ML researcher
14:00
and off you go. You know, you can prototype it with four or eight or 16 or 64 devices and then you change a
14:07
constant and you run against a different Pathways back end with a thousand 10,000 chips and off you go. like our largest
14:14
Gemini models are trained with a single Python process driving the entire thing uh with you know tens of thousands of
14:20
chips and it works quite well. So pretty good developer experience. I think one
14:25
thing I would say is to date we had not offered that to cloud customers but we just announced at cloud next that we're
14:32
now going to have pathways available for cloud customers. So then everyone else can have the delightful experience of a
14:38
single Python process with thousands of devices
14:45
attached. And I agree that's a much better experience than managing like 64
14:50
processors for your 256 chips. Like why why would you want to do that?
Google Cloud Gemini
14:59
Um I love using the Gemini API. Um it would be even easier if it we got one
15:04
API key rather than like the Google Cloud uh credential setup. Do you guys have a plan to unify the Google Cloud
15:11
Gemini stack with the Gemini project like set up right now that's more for uh
15:18
testing stuff? Yeah, I think there's a bunch of streamlining that is being looked at. Uh it's a known problem, not
15:25
something I spend a lot of time on personally, but I know like Logan and others on the the developer side are
15:32
aware of this friction. We like to make it frictionless to use our use our bottles.
The future of computing
15:42
Is that working? Okay. So, um it's an interesting time in computing. You've got the confluence of Moors law and
15:48
dinard scaling being completely dead uh with AI just scaling like crazy. Um you
15:55
have a pretty unique position in the world of driving these supercomputers and infrastructure that is being
16:01
built. Uh and and you know like how to map the workloads onto these things which is a unique sort of uh skill. What
16:07
do you think the future of computing is going to look like? What is what is the computing infrastructure heading towards
16:12
like from an asmtoic thought experiment level? Yeah, I mean it's it's really clear that we
16:19
have dramatically changed the kinds of computations we want to run on computers in the last say five years, 10 years.
16:28
Um, and that was like initially a small small ripple, but it's pretty clear now
16:34
that you want to run incredibly large neural networks at incredibly high performance and incredibly low power.
16:41
Uh, and you also want to train them. Uh, training and inference are pretty different kinds of workloads. So I think
16:48
it's useful to think of those two as you know you probably want different solutions for the for the two uh or
16:56
somewhat specialized solutions. Um and I think you're going to see all
17:02
kinds of adaptation of compute platforms for this new reality that you really just want to run uh incredibly capable
17:09
models. Um, and so some of that will be in low power environments like your
17:15
phone. Like you'd like your phone to run incredibly good models uh with lots of parameters uh super fast uh so that when
17:23
you talk to your phone, it just talks back to you and it can help you do all kinds of things. Uh you're going to want
17:29
to run these on robots uh and autonomous vehicles. uh you know we already do somewhat but even better hardware for
17:35
that will make uh those systems much easier to build much more capable uh you
17:41
know physical agents in the world and then you want to run them at incredibly large scale in data centers and then you
17:47
also then want to use lots of inference time compute for some kinds of problems
17:52
but not others so you have problem you know it's it's pretty clear you want to use 10,000 times as much compute for
17:58
some problems as for others and that's a nice new scaling knob we have uh that
18:05
can make your model much more capable or give you you know uh much better answers or make the model capable of doing
18:11
things with that much compute that it can't do with with you know one as much compute um but you shouldn't spend
18:17
10,000 times as much compute on everything so um how do you make your systems work well for that and I think
18:23
that's a combination of hardware system software you know model and algorithmic tricks distillation all these things can
18:30
help you make uh amazing models come to life in small comput footprints.
Traditional algorithmic analysis
18:36
One thing I've noticed is the um computer science at least traditionally
18:41
you know uh when people are studying algorithms and computational complexity it was all opcount based and I I think
18:49
as people are rediscovering hardware and details of hardware and system design I
18:56
think one of the things that's come back into focus is you need to think about network bandwidth and memory bandwidth
19:01
and so forth and so I think a lot of kind of traditional algorithmic analysis needs
19:09
to be completely rethought uh just because of realities of what real computation looks like. Yeah, one of my
19:16
office mates in grad school did his thesis on like cache uh aware algorithms because the the order of magnitude bigo
19:24
kind of notation didn't account for the fact that some operations are 100x worse than others. Yeah. No, that's right. And I think in in modern ML computing, you
19:32
care about data movement at the incredibly small level like moving things from SRAM into accumulators cost
19:39
you some tiny number some tiny number of picoles but it's way more than the
19:45
actual operation costs you. So it's important to have pico jewels at the tip
19:50
of your tongue these days. The uh I one one other quick question.
Do you vibe code
19:56
Do you vibe code?
20:02
Uh I I've been trying it a little bit. It actually works surprisingly well.
20:07
Um yeah, I mean we've had some nice uh we have like a little demo chat room. Actually have a lot of chat rooms. Uh we
20:15
sort of run Gemini via chat room. So I'm in like 200 chat rooms and when I wake up and brush my teeth I get like nine
20:21
notifications because my London colleagues are busily doing things. Um like we had one where people can send
20:27
out cool demos of things. things I've seen and uh one that was particularly cool
20:33
was you feed in a YouTube educational oriented video. Okay. And the prompt is
20:40
just something like please make me an educational game that uh uses graphics and interactivity to help illustrate the
20:47
concepts of this video. And you know it doesn't work every time but 30% of the
20:52
time you get something that's actually kind of cool and related to differential equations or traveling to Mars or you
20:59
know uh doing some kind of cell aspect thing. And you know that's just an
21:05
incredible sign for education like the the tools we now have and will have in
21:10
the next few years really have this amazing opportunity to change the world in in so many positive ways. So I think
21:16
we should all remember that is as is kind of what we should be striving for.
21:21
Um would you mind passing there and then maybe there yeah we love to hear your
Gemini in Chrome
21:27
thoughts about uh the future of search and uh especially given um Chrome has
21:34
such big uh distribution right and and then especially Chrome already know the
21:40
credentials like payments and then web signing credentials. Uh, have you
21:45
thought about like getting Gemini just directly into Chrome and, you know, making the Chrome app Gemini app instead
21:51
of have a separate app? You know, I I say this because I'm long-term Googler, so just you know, think about it. Yeah.
21:58
I mean, I think there there are definitely lots of interesting downstream uses one could make of the
22:04
core sort of Gemini models or other models. you know, one is can it help you
22:10
do stuff in your browser or on your full computer desktop uh by observing what
22:15
you're doing and you know doing OCR on on tabs or maybe it has access to the
22:21
the raw tab contents you know that that seems like it will be incredibly helpful and uh you know I think you know we have
22:29
some early work in this area we that we've published public demos of in video
22:35
form that that seem pretty useful things like mariner and things like that. So TBD
22:41
you pass the Jeff uh question for you. Uh so thank you for
Endgame
22:46
your comments very insightful. Um you know earlier you mentioned like you know the number of sort of foundational model
22:53
players you know will likely only be a handful and you know this is largely because of you know kind of the
22:58
infrastructure costs and sort of the scale of investment uh to sort of remain at that cutting edge. Um, and so sort of
23:05
as this like battle for the frontier unfolds, like how do you see the how do you like where do you see this endgame
23:12
going? Like what you know where's like the where does this lead us? Like is it is it just whoever writes the biggest
23:18
check to build the biggest cluster wins or is it you know better you know you just talked about like better
23:24
utilization of like unified memory optimization and sort of you know different you know efficient uses of
23:29
what you already have or uh you know is it the consumer experience or like how where does this all where does this arms
23:36
race uh lead us? Is isn't it just whoever gets to Skynet first the game's
23:42
over? Um yeah, I mean I think uh
23:48
it it it's going to require really good insightful algorithmic work uh as well
23:54
as really good systems hardware and infrastructure work. I don't think
23:59
either one of those is more important than the other because what we've seen in say our Gemini progression to from
24:05
generation to generation is the algorithmic improvements are as important or maybe even more so than the
24:12
hardware improvements or this the more you know larger amount of hardware we're putting to the problem. Uh but both are
24:18
incredibly important. Um, and then I think from a product standpoint, you know, what it it's there's sort of early
24:27
stage products in this space, but I don't think we've collectively hit on what is the thing that or it's probably
24:34
going to be many things that become the the daily used products for billions of
24:41
people, right? I think there's probably some in the educational space or in you know general information retrieval that
24:48
is search like but but sort of taking advantage of the strengths of of uh um
24:55
you know uh large large multimodal models. Uh I think probably helping
25:00
people get stuff done in you know uh whatever work environment they find
25:06
themselves in is going to be an incredibly useful thing. And how will that get manifested in product settings?
25:13
You know, how do I manage my team of 50 virtual agents that are off doing things? And they'll probably be mostly
25:20
doing the right thing, but occasionally they'll need to consult, you know, with with me about some choice they need to
25:25
make. Uh, I need to give them a bit of steering. Uh, how do I manage, you know,
25:30
50 virtual interns? It's going to be complicated.
AI at the level of a junior engineer
25:36
Hi, Jeff. Thanks for being here. right here. Oh, sorry. Uh, I literally cannot think of anyone better in the world to
25:43
ask this question. Um, how far do you believe we are from having an AI
25:50
operating 247 at the level of a junior engineer?
25:58
Not that far. Yeah. Yeah. Is that six weeks or six
26:05
years or every year an AI seems like a dog dog
26:11
seven or something? I I will claim that's probably possible in the next yearish.
26:17
Yeah. Hi, you talked about uh scaling pre-training and now scaling RL. Um how
Scaling RL
26:25
do you think about like in the the future trajectory of these models? Will it be you know one large model with all
26:30
the compute or a constellation of smaller models that have been distilled from these larger models both working in
26:37
parallel? How do you see um you know the the future landscape? Yeah, I mean I
26:42
I've always been a big fan of models that are kind of sparse and have different parts of expertise in
26:48
different parts of the model because, you know, from our uh our weak
26:53
biological analogies, that's partly how our real brains get so power efficient
26:59
is, you know, we're 20 watts or whatever and we can do a lot of things, but our Shakespeare poetry part is not active
27:05
when we're like worried about the garbage truck backing up at us in the car. Um and I feel like there's uh we we
27:12
do some of that with mixture of expert style models. Uh you know we did some of the early work in that space where we
27:18
had like 2,48 experts and showed that it gave you dramatic improvements in
27:23
efficiency uh like 10 to 100x uh more efficient um sort of model quality per
27:31
training flop. Uh and that that's super important. Uh but it feels like we're not really fully exploring the space yet
27:39
because right now the kinds of uh sparsity people tend to do is incredibly
27:44
regular. Like it feels like you want paths through your model that are like a hundred or a thousand times more
27:50
expensive than other paths. And you want experts or pieces of your model that are tiny amounts of compute and some that
27:56
are very large amounts of compute. Maybe they should have different structures. Um, and uh, I think you want to be able
28:03
to extend your model with like new new parameters or new new bits of of space.
28:09
And maybe you want to be able to compact parts of your model, running a distillation process on this piece of it
28:15
to make it one quarter the size. And then you have some background garbage collectiony thing that is now like, oh
28:20
great, I have more memory to use. So I'm going to put those parameters or put those, you know, bytes of memory
28:26
somewhere else and make more effective use of them somewhere else. And so that that to me seems like a much more
28:32
organic continuous learning system than what we have today. Um so I I you know
28:39
uh the only problem with this is what we're doing today is incredibly effective. So it becomes a bit hard to
28:47
completely change what you're doing to be more like that. But I I really do think there are huge benefits to doing
28:52
things in that style rather than the sort of more rigidly defined model uh
29:00
that we have today. I I think one more question and then
29:05
we'll probably wrap up. Hey, I wanted to return to the to the
29:10
junior engineer inside a year. I'm curious what advancements do you think we need to get there? Like obviously just maybe code generation gets better
29:16
but like outside of code generation uh what do you think gets us there? Tool use, augentic planning. Yeah, I mean I
29:22
think they uh you know this hypothetical virtual uh engineer probably needs a
29:29
better sense of many more things than just writing code in a in an IDE. Like it needs to know how to like run tests
29:35
and like debug performance issues and all those kinds of things. And we know how human engineers do those things.
29:42
They learn how to use various tools that we have and can make use of them to to accomplish that. And they, you know, get
29:50
that wisdom from more experienced uh engineers typically um or reading lots
29:56
of documentation. And I feel like, you know, junior virtual engineer is going to be pretty good at reading
30:02
documentation and sort of trying things out in virtual environments. And so that seems like a way to get better and
30:09
better at some of these things. Uh, and you know, I don't know how far we'll
30:15
will take us, but it seems like it'll take us pretty far. Jeff, thank you for coming and
30:22
sharing your wisdom. Thank you. Great to see you.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `Google's Jeff Dean on the Coming Transformations in AI`  ·  visible_channel: `Sequoia Capital` (211K subs)
- visible_url: `youtube.com/watch?v=dq8MhTFCs80`  ·  visible_published: `May 12, 2025`  ·  visible_views: `181,390`  ·  likes: `2.7K`
- visible_description: *"At AI Ascent 2025, Jeff Dean makes bold predictions. Discover how the pioneer behind Google's TPUs and foundational AI research sees the technology evolving, from specialized hardware to more organic systems, and future engineering capabilities."*
- chapters (visible): Intro · Jeff Dean · Where do you see AI going · multimodality · agents · large models …
- people_mentioned (visible): `Jeff Dean`
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_1.11.22_AM-3e3f81bb…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

This one is core AI-substrate / future-computing material. Not as immediately “OMNI product surface” as Sierra or LangChain, but very important for how OMNI should think about models, compute, inference routing, multimodality, robotics, scientific discovery, and agent capability timelines.

Jeff Dean is a very high-authority technical source here: Google/Alphabet chief scientist context, foundational ML/systems credibility, TPU/large-scale model infrastructure background. So this should be marked as frontier technical operator / infrastructure authority, not generic market commentary.

Core takeaway

The big idea is:

AI progress is not one thing. It is model algorithms + data + hardware + systems + inference-time compute + post-training + multimodality + product harnesses all compounding together.

Jeff’s framing is sober: agents are promising, but current agents can do some things, not most things. The path to broader capability is clearer through reinforcement learning, agent experience, better tools, and learning from use. He also says robotic/physical agents are close to crossing from “doesn’t quite work” into “can do 20 useful things,” then cost-engineering and learning loops may expand that dramatically.

For OMNI, this means: do not bet on today’s model limitations as permanent, but do not design as if frontier capability equals safe domain authority.

OMNI translation
1. OMNI should assume models get much better — but authority boundaries still matter.

Jeff is basically saying the capability slope is real. Bigger models, better algorithms, hardware, RL, post-training, and inference-time compute will keep expanding what models can do.

That strengthens OMNI’s long-term architecture.

Do not build OMNI around the assumption:

“AI will always be flaky and mostly assistant-like.”

But also do not build around:

“AI got smarter, so it can own care truth.”

The correct doctrine is:

Model capability may rise continuously; domain authority still changes discretely through policy, proof, and commit gates.

A smarter model can get more privileges only when the workflow, evals, safety case, and domain boundaries support it.

2. Compute routing becomes a real OMNI primitive.

Jeff says inference-time compute is a new scaling knob: some problems may deserve 10,000x more compute than others, but you should not spend that on everything.

That is extremely relevant.

OMNI should not treat every AI call equally.

Some tasks need tiny/cheap/fast models:

rewrite a reminder,
classify a routine message,
summarize a short note,
autocomplete a workflow label.

Some need bigger reasoning:

reconcile conflicting patient context,
investigate a failed workflow,
prepare provider review,
compare evidence sources,
debug an agent failure,
evaluate policy edge cases.

Some may need deep / slow / expensive review:

high-risk clinical escalation,
multi-domain seam failure,
major build architecture change,
safety incident analysis.

Doctrine:

OMNI should route compute by risk, complexity, uncertainty, and action consequence — not by habit.

Potential primitive: inference_budget_policy.

3. Specialized small models and distillation matter.

Jeff expects a handful of cutting-edge general models, but many smaller/lighter models created through techniques like distillation and specialization.

OMNI should not assume every task requires the biggest frontier model.

Long term, OMNI may use:

frontier model for hard reasoning,
smaller local/specialized model for routine triage,
domain-tuned model for intake classification,
small model for front-desk workflow routing,
vision model for photo/document preprocessing,
evaluator model for rubric scoring,
deterministic validator for authority/commit checks.

Keeper:

OMNI should be model-plural: one governed harness, many model routes.

4. Sparse / mixture-of-experts thinking maps to OMNI architecture.

Jeff talks about models having specialized parts, different paths through the model, some tiny and some expensive, and eventually more organic/continuous learning structures.

This should not become a mystical OMNI metaphor, but the architecture lesson is useful:

Do not make one giant OMNI agent do everything.

Use specialized capabilities:

scheduling agent,
documentation/evidence agent,
patient-message triage agent,
provider-packet agent,
commerce/entitlement resolver,
build agent,
evidence reservoir agent,
evaluator/critic agent.

Then CNS routes among them.

Doctrine:

OMNI should be a routed network of specialized governed capabilities, not one monolithic intelligence blob.

5. Multimodality strengthens the Observation / Evidence plane.

Jeff emphasizes multimodality: text, code, audio, images, video in and out.

For OMNI, this is foundational.

Care data is not just text:

patient messages,
voice calls,
lab PDFs,
clinical photos,
before/after images,
consent forms,
wearable data,
video context,
screenshots,
provider dictation,
staff notes,
device telemetry.

So OMNI needs a multimodal ingestion pipeline, but with strict layering:

Multimodal perception creates candidates; it does not directly create clinical truth.

D7 artifact → Observation value → Clinical Memory adoption → CNS action remains the safe stack.

6. AI in science supports the “simulation / surrogate model” idea.

Jeff describes AI approximating expensive scientific simulators and making them hundreds of thousands of times faster, changing what scientists can screen and explore.

For OMNI, the direct equivalent is not molecular simulation. It is workflow simulation and patient journey simulation.

Could OMNI eventually simulate:

care pathway bottlenecks,
staffing load,
message volume,
follow-up failure points,
scheduling/payment/documentation cascades,
provider review queues,
patient education comprehension,
agent failure modes?

Yes — but it must be labeled as simulation, not truth.

Doctrine:

Simulation can accelerate exploration, but real-world validation governs adoption.

7. Robotics is coming, but OMNI still does not need to build robots.

Jeff’s robotics comments reinforce the same conclusion from Waymo/Neuralink:

Physical agents are likely to become more capable, cheaper, and more useful.

OMNI should be ready for that world by defining:

actor identity,
device/robot actor type,
capability adapter,
action authority,
physical-world event capture,
human supervision,
audit,
exception handling.

But OMNI does not need to become a robotics company.

Keeper:

Robots become future actors/action surfaces; OMNI remains the care authority and coordination layer.

8. Junior-engineer agents are close — but “engineer” means tools, tests, docs, debugging.

Jeff says an AI operating 24/7 at the level of a junior engineer is probably possible in roughly the next year-ish, but clarifies that it needs more than code generation: it needs to run tests, debug performance issues, use tools, read documentation, and try things in virtual environments.

This is a Build OS banger.

OMNI build agents should not be measured by “can write code.” They need:

repo navigation,
test running,
failure diagnosis,
documentation reading,
architecture constraint awareness,
proof production,
review request,
rollback discipline.

Doctrine:

An OMNI build agent is not a code generator. It is a tool-using worker inside a governed build environment.

9. Hardware/system constraints matter even for application companies.

Jeff and Bill discuss how traditional algorithmic analysis misses real hardware/system costs like memory bandwidth, network bandwidth, and data movement.

OMNI does not need to build TPUs, but this matters later:

inference latency,
model cost,
retrieval cost,
context size,
multimodal processing,
background ambient agents,
real-time voice,
long-horizon traces,
patient-scale usage,
agent swarms.

Application architecture that ignores compute economics can become impossible to operate.

Keeper:

AI product architecture must include runtime economics, not just capability design.

Where it lands

Thesis §B — AI substrate: massive. Models, multimodality, inference-time compute, distillation, sparsity, agents, robotics, scientific acceleration.

Build OS: major. Junior-engineer agents, tool use, virtual environments, tests, documentation, debugging, compute routing.

CNS / orchestration: major. Specialized capabilities, inference routing, ambient/agent compute budgets, multimodal event handling.

Observation / D7 / Clinical Memory: major. Multimodal inputs and sensor/physical-world data strengthen the need for layered truth.

§C Governed Capability Exchange: medium-to-major. Robots, agents, external tools, physical-world actors, and future protocols need authority gates.

Cost / infrastructure strategy: major long term. OMNI must avoid designing agent systems whose compute costs explode.

Doctrine / primitive pressure

Potential concepts worth routing:

inference_budget_policy
risk_weighted_compute_route
model_route_policy
specialized_model_capability
distilled_model_worker
frontier_model_escalation
multimodal_source_event
robot_actor
physical_agent_action
simulation_surrogate
workflow_simulation
runtime_compute_cost
junior_engineer_agent
virtual_work_environment
tool_using_build_agent
sparse_capability_network
model_provider_boundary

Keeper doctrine:

OMNI should assume rapidly improving model capability, but govern every use through risk-weighted compute routing, specialized capabilities, traceable tools, and deterministic domain authority.

Second keeper:

Use the right intelligence for the job: small/fast where safe, deep/expensive where stakes demand it, and deterministic where authority requires it.

What not to import blindly

Do not chase frontier-model infrastructure as OMNI’s business.

Do not assume bigger model = better healthcare answer.

Do not treat robotics as OMNI’s product direction.

Do not treat simulation as validation.

Do not let multimodal ingestion bypass D7/Observation/Clinical Memory gates.

Do not build one huge general OMNI agent when specialized routed capabilities are safer and more inspectable.

Do-not-miss lesson

AI progress is becoming a full-stack systems problem: algorithms, hardware, inference budgets, tools, traces, and product environments.

OMNI-specific:

OMNI’s job is not to build the frontier model. OMNI’s job is to route frontier capability safely through care-specific context, tools, evals, compute budgets, and domain commits.

Priority / confidence

Priority: 5/5
Confidence: 5/5
Suggested analysis depth: full_semantic

This should feed §B strongly and Build OS materially. It is especially important for model routing, inference-budget policy, multimodal ingestion, robotics readiness, specialized agents, and avoiding the trap of designing OMNI as one monolithic AI brain.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(I fill later — derived work lives in EVRUN; leave `TK`)*
- EVRUN(s): `TK` · inventory: `TK` · routing_addendum: `TK` · impact §B/§C/security/Build-OS/contract: `TK` · promotion: `TK`

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged §B AI-axis technical-trajectory backdrop.

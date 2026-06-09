# EVSRC-2026-000070 — Trust, reliability, and safety in AI ft. Daniela Amodei of Anthropic and Sonya Huang

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: Anthropic/Amodei/Claude 3); Knox read in §3 Review 001 (verified: trust/safety/HITL — initially had a wrong-tab paste of 069's Mistral read, corrected). Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000070`  ·  filename: `EVSRC-2026-000070_anthropic-daniela-amodei-trust-reliability-safety.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=3JLekB-NV8o`
- source_title: `Trust, reliability, and safety in AI ft. Daniela Amodei of Anthropic and Sonya Huang`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  series: `AI Ascent 2024`  ·  published_at: `2024-03-26`  ·  views_at_capture: `23,488`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `interview`  ·  source_reliability_context: `founder / practitioner (Anthropic cofounder/president — AI safety/trust, directly relevant to §A + Lens-B Anthropic build discipline)`  ·  topic_tags_light: `[trust_reliability_safety, ai_safety_techniques, research_transparency, values_alignment, claude_3, business_of_trust, responsible_scaling]`  ·  hashtags: `#AI #AIAscent #Sequoia #Startup #Founder #entrepreneur`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Daniela Amodei` · role_in_source: `interviewee` · affiliation_at_publication: `Anthropic (cofounder & president)` · speaker_type: `founder / operator (frontier safety-first lab)` · authority_context: `**HIGH relevance on §A (trust/reliability/safety) + Lens-B Anthropic build discipline (AGENTS.md cites Anthropic as build-OS engineering-discipline comparator).** Discusses launch of Claude 3, **solving the business problems of trust and reliability in AI**, importance of **transparency in research**, and implementing **technical safety approaches to make AI more aligned with human values.** Safety/trust-as-product lens` · identity_confidence: `high_from_screenshot`
  - name: `Sonya Huang` · role_in_source: `interviewer` · affiliation_at_publication: `Sequoia Capital` · speaker_type: `investor` · authority_context: `framing / host` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `Sonya Huang`  ·  event_context: `Sequoia AI Ascent 2024`  ·  perspective / conflict notes: `Anthropic president — frames safety/trust favorably (Anthropic's whole positioning). **HIGH OMNI relevance: "trust & reliability as the business problem," research transparency, technical safety, values-alignment map directly to OMNI §A Trust/Authority/Permeability axis + governed-AI posture + Build OS runtime-proof/eval discipline. Also a Lens-B comparator (Anthropic build discipline, per AGENTS).** Older (2024-03). Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): Anthropic president = high relevance on trust/safety, but pitching Anthropic's safety brand; claims route through evidence → interpretation → gated promotion. Strong §A input + Lens-B build-discipline comparator.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = Anthropic transcript; §3 = matching Anthropic safety read — corrected from an initial Mistral mis-paste) · [x] EVRUN needed? (yes — full_semantic; §A trust/safety + Lens-B build discipline + HITL) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Chapters

Transcript
Search in video
Introduction
0:03
we are thrilled to have our next speaker with us uh Daniela is the uh president and co-founder of anthropic um which
0:10
recently just launched the really impressive Claude 3 Model uh please welcome Danielle in
0:19
conversation uh thank you so much for being here Daniela you're welcome M uh
0:24
yes you do here take this oh that's so nice of you thank you I think everybody in the audience is amiliar with
0:30
anthropic as probably a customer of yours uh but can you just do a quick refresher for everyone in the audience
0:36
about anthropic the company what is your mission what's the future you imagine and um how are you building towards that
0:42
future sure thing uh so first of all thanks so much for for having me uh great to be with all of you today so uh
0:48
I'm Daniela I am a co-founder and president at anthropic we uh are a
0:54
generative AI company that is really working to build uh powerful transformative generative AI tools that
1:00
really have humans at the center of them so we have a huge focus on building this Tech in a way that is trustworthy and uh
1:07
reliable and we've been around for just about uh three years a little over three years and uh in that time have been able
1:15
to advance the State ofth art uh across generative AI on a number of of Dimensions wonderful and what are the
What makes Anthropic unique
1:22
things that what are the unique approaches that you're taking now that the foundation model space is getting very crowded what are the things that
1:27
make you uniquely anthropic uh I love that question so uh first of all I would
1:32
say there's there's a few different ways that I kind of uh like think about or or interpret that question one is really
1:39
how do we kind of differentiate ourselves at the model level right what do we do when we're training the models
1:44
or how do we want the models to sort of have people feel when they when they use them and here what I would say is we
1:51
really uh again thinking about this kind of commitment to trustworthiness reliability of our models we Implement a
1:58
number of different sort of technical safety approaches to help uh make the models really more aligned with uh what
2:05
humans want them to be doing so we pioneered a technique called uh constitutional AI which really enables
2:13
uh the models to incorporate documents like the UN Declaration of Human Rights the Apple terms of service to really
2:20
make it more aligned with uh with values of of the the sort of human race um from
2:25
a sort of business perspective we really have tried to make uh Claud as approachable as possible in particular
2:32
for Enterprise businesses so large businesses uh in particular I think have really resonated with our approach
2:40
because they also value models that are helpful and honest and harmless right in
2:46
general very large Enterprise businesses um tend to be uh concerned about models that will you know hallucinate or say
2:53
something very very offensive wonderful uh let's talk about use cases I think one of the major
Use cases
2:59
questions people in the audience have today is uh where companies are finding the most product Market fit and I think
3:05
you have a unique vantage point on that uh from anthropic what are the use cases that you see that are already reaching
3:11
real product Market fit and what are the use cases that you think are on the come that are about to reach prodct Market fit so I think it it varies a little bit
3:19
uh first of all just kind of depending on industry so there's some uh there's kind of some industries that I think are
3:24
kind of quite advanced in in generative AI um unsurprisingly the technology industry has been you know an early
3:31
adopter that's that's often how how it goes but I think something that has sort of been interesting for us to see is we
3:37
we just released this new sort of Suite of of models the the CLA 3 Model we call it the model family and so the kind of
3:44
biggest model CLA 3 Opus is the kind of state-of-the-art we sort of joke it's like the Rolls-Royce of the models it's
3:50
incredibly capable and powerful and really what we've seen is you know not everybody needs the kind of top tier
3:57
state-of-the-art model for all of their use cases is but the times when you do need it is when you need a model that is
4:03
just incredibly intelligent capable and and Powerful so things like you know if
4:08
you're doing scientific research or you're trying to have a model uh write very complex code for you at a fast pace
4:15
or do you know complex macroeconomic policy analysis um CLA 3 Opus is like a great fit for that um CLA 3 Haiku which
4:23
is the smallest model this is like the Ducati it's sort of the like racing motorcycle is amazing for things like
4:28
customer support so really what we've seen in the industry is that um you know speed and cost are very important for
4:35
anything that kind of requires real-time response rates and then Claud 3 Sonet which is sort of that middle Model A lot
4:41
of Enterprise businesses are using for things like um day-to-day retrieval summary of information if they have
4:48
unstructured data that they need to uh pull together and analyze and so I would
4:53
say it varies by industry but it also sort of varies by use case and just how much uh ability C customers have to kind
5:00
of choose between uh between what's available for them wonderful can you share one or two of your favorite use
Danielas favorite use cases
5:05
cases that people have built on anthropic yeah for sure um I would say I'm I'm like a do goter at heart so uh
5:12
one of my favorite use cases is the Dana Farber Cancer Institute uses Claud to help with a genetic genetic analysis so
5:19
looking for sort of cancer markers um I think there's also like much more kind of a a sort of boring application but
5:26
there's a lot of kind of financial services firms like Bridgewater and street that are really using CLA to help
5:31
them you know analyze financial information uh in in real time I think I like both of those because they really
5:37
just sort of represent such a wide spectrum right I think it illustrates how truly general purpose these models
5:44
are right it's a model that can help you to literally try and cure cancer faster but also to do sort of the day-to-day
5:51
bread and butter of illegal services or financial services firms work Wonderful
Finding product market fit
5:56
are you seeing more success uh in your customers finding product Market fit from startups or from Enterprises right
6:02
now so I would say you know for anthropic in particular uh we have
6:08
really focused on kind of the Enterprise use case and again this is really because we have felt such a resonance
6:15
you know in approach um for businesses that are interested in building in ways
6:21
that are you know trustworthy and reliable right all of the things we we've sort of been talking about um that being said I think there's a ton of
6:27
innovation that is always happening in the start space and so something that I think is really interesting to watch is
6:33
sometimes we'll have kind of a startup um sort of prototype something and we'll see like wow that's you know that's a
6:38
really fascinating use case like we wouldn't have thought that you know you could use Claud that way and then that will become something that like
6:44
Enterprise businesses sort of like later learn about because they know someone who works at that startup or they've kind of seen it in production so my
6:51
sense is for us personally we're much more sort of you know building for and pivoted towards the Enterprise but I
6:56
think there's really a wide wide ecosystem uh of development that that's happening uh in the business space
Current customers
7:02
wonderful on the Spectrum from prototyping to you know experimentation
7:07
all the way to production where do you think most of your customers are today on that Journey yeah um I think on the
7:14
kind of I think for this I'll like talk about Enterprise and then and then startups because they're a little bit different um I think for Enterprises it
7:21
it actually ranges like pretty pretty widely um there's some businesses that I
7:27
would even say have multiple kind of production use cases right where they might be
7:32
using CLA internally to uh you know analyze health records or help doctors
7:37
or nurses um you know analyze notes and save themselves administrative time so
7:42
they can be with patients more but if they're a big company they might also be using it for a chat interface right so
7:48
depending on the business use case sometimes they have you know multiple use cases in production but it's a
7:53
little spiky right there might be times where one of those one of those use cases is like quite far along they've already been in production for like a
7:59
year um they really like know the question right they come to us and they're like we really really want to optimize like this metric or we really
8:06
care about price or we really care about latency and then there's businesses all the way on the other end of the spectrum
8:11
who come to us and are like I've been hearing about generative AI like from my board can you help us understand is
8:18
there a solution here right and so I think it um it does it does vary a lot
8:23
but I will say Industries I have personally been surprised that some um industries that are not necessarily
8:30
historically known for being early adopters like insurance companies or financial services um or Healthcare I
8:37
think are actually um great candidates for incorporating this technology and and many of them have wonderful let's
Claude 3 launch
8:45
move on to Cloud 3 and and research uh maybe you just you just launched Cloud 3
8:50
maybe tell us a little bit about what into what went into it um and how the reception has been so far so uh yes we
8:57
just uh just a couple of weeks ago launched uh clae 3 as I mentioned it's this sort of model uh family right so
9:04
there's uh different uh models kind of available for different use cases again for businesses uh and really I think
9:12
what has been so interesting is uh we've gotten great you know positive feedback about Claude of course there's always things that that we're improving and
9:18
wanting to do better but some something that I have found you know really um just interesting is customers have sort
9:25
of simultaneously commented on how kind of capable and Powerful the models are right they're the most intelligent
9:31
state-of-the-art models available on the market today but people have also commented hey it's way harder to
9:37
jailbreak these or the hallucination rates have kind of gone down a lot and so there has been this kind of dual
9:42
language around both capability and safety and then the last piece which I always find um really interesting is um
9:50
many customers have told us part of the appeal of Claude is that Claude feels more human um and so when people kind of
9:56
interact with or talk to Claude we've sometimes heard folks say it really feels like talking to you know a trusted
10:01
person versus talking to a robot that was kind of trained to sound like a
10:06
human I love that uh and I've I think everyone here has seen all the eval charts I think Claude really one of the
Claude in coding
10:14
areas where it really spikes is in coding where I think the performance is is just off the charts right now maybe
10:20
can you tell us a little bit about how you made the model so good at coding in particular and then how you see the role
10:26
uh how you see AI software engineering playing out and anthropics role in it m so I think something that uh that is
10:33
interesting that I've like learned from my research colleagues so I don't sort of pretend to be an expert uh on this is
10:40
as the models just become generally more performative they kind of like get better at everything and so I think much
10:47
of the same training uh techniques that we used to improve the model's you know
10:52
accuracy and uh reading comprehension and general reasoning were also used to
10:58
to improve its ability to code and I think that's something that again is kind of a fundamental interesting sort
11:03
of research thing which is like Rising boat sort of lifts all tides that being said there's a lot of variety in these
11:09
models and something I've always found interesting is certain models like people are like I always use this model
11:15
for like task X right at the consumer level and other times folks will say this model like you absolutely have to
11:21
use for for task y so I I think they're there is a little bit of almost um pull through personality that happens with
11:27
these kind of regardless of of the Improvement it's kind of a useful caveat in terms of you know what are people
11:33
doing in the sort of software engineering space and and kind of what is the role of these models um I'm I'm not a programmer so I feel like I'm I I
11:40
probably can't opine on this as well as others but um much of what we have heard from our customers is that Claude is a
11:46
great tool in helping you know people who write code so Claude cannot replace a human engineer uh you know yet but it
11:52
can be a great kind of co-pilot in in helping love that maybe more of a Phil
Transparency
11:57
philosophical research question question um how do you think about the role of transparency in AI research especially
12:04
as it seems like the AI field has become more and more closed anthropic has always uh felt very
12:10
strongly about publishing um a large portion of our research so uh we don't publish everything but we have published
12:17
something like two dozen uh papers the vast majority of them are actually technical uh safety uh or policy
12:23
research papers and the reason that we choose to publish those are um as a
12:29
public benefit Corporation we really view uh our job as helping to raise the watermark really across the industry in
12:36
areas like safety so uh we have a team that focuses on something called mechanistic interpretability which is uh
12:43
essentially the art of trying to figure out you know what is happening inside the black box that is these neural
12:48
networks and it's a very kind of emerging field of of research uh there's
12:54
like two or three teams in the entire world that work on it and we really feel like there's a lot of opportunity when
13:01
kind of sharing that more broadly with the scientific Community to just increase understanding around around
13:06
topics like that particularly in sort of the element of of safety so we've shared uh all of these research papers and then
13:13
additionally we do a lot of work in kind of the policy sphere and try and publish uh research results papers our you know
13:19
red teaming uh red teaming results as well thank you uh one of the big themes
Challenges
13:25
of today's event is trying to think about what's next um so I was hoping to ask from your from your Vantage Point
13:31
what are the biggest challenges that you see your customers facing or your researchers thinking about when they're
13:37
trying to build with llms like where are they you know hitting a wall uh and how is anthropic working to address some of
13:43
those problems so I think there's a a few kind of classes of ways that that
13:48
these models are still sort of they're still not perfect right um I think one big one is there are just fundamental
13:54
kind of challenges to how these models are developed and trained and used so
13:59
the kind of prototypical one that's talked about is this hallucination problem right I'm sure everyone in the
14:05
room knows this but models are just trained to predict the next word and so sometimes they don't know the right
14:10
answer and so they just make something up and we have made a huge amount of progress as an industry in reducing
14:16
hallucination rates from like the gpt2 era but they're still not perfect I'm
14:21
not entirely sure like what the sort of like decrease Curve will look like for
14:26
hallucination rate right we keep getting better at it I'm not sure if we'll ever be able to get models to zero um that is
14:33
a fundamental challenge for businesses right if your model is going to even very occasionally hallucinate for some
14:39
of the highest Stakes decisions you probably wouldn't choose to use a model alone right you would say hey we need a
14:44
human in the loop and I do think something that's kind of very interesting is there's there's a really
14:50
small set of cases today where llms alone can do the majority of the task
14:56
right like their best again I think in t with a human for the majority of of kind of use cases I also think there's just
15:03
sort of this interesting um it it almost feels a little more philosophical which is just what are humans actually
15:10
comfortable with giving to models right I think part of the sort of human in the loop story is also about helping um you
15:16
know businesses and industries and individuals feel more comfortable with an AI tool making fundamental
15:23
decisions thank you for sharing that uh a few of the folks here uh spoke about
Plan and reasoning
15:28
plan and reasoning is that something you all are thinking about at anthropic and could you share a few words on that yeah
15:34
definitely um so that can obviously mean a a few things so I think on the kind of
15:40
dimension of like how do you get these models to sort of like execute sort of multi-step instructions right I'm
15:46
assuming that's kind of what what planning means um you know it's it's really interesting there's a lot of research and and kind of work that has
15:52
gone into uh this this sort of concept of like agents right like how do you
15:58
give the models ability to like take control of something and like you know execute multiple actions in a row and
16:04
like can they plan right can they can they sort of think through like a a set of steps I do think that Claude 3 sort
16:09
of represented for us a leap uh between kind of the last generation of models in it sort of ability to do that but I
16:16
actually think that level of kind of agentic behavior is still really hard like I think the models cannot quite
16:22
quite do that reliably yet again this feels like such a sort of fundamental research question that I don't know how
16:29
long it will be until that's not the case but I don't think it's the the sort of you know the dream of like can I just
16:34
ask Claude to book my flight for me like please go book my reservation hotel just plan my vacation I don't actually think
16:40
that that's like immediately around the corner I think there's still some some research work and and uh engineering
16:45
work that needs to go into making that possible yep yep okay so the the future is coming but maybe not as quickly as we
AI safety
16:52
think the future is coming quickly it's also coming choppily it's a little unclear exactly which parts of it are
16:57
going to come where okay very cool uh can we talk about AI safety for for a moment anthropic really made a name for
17:03
itself on AI safety and I think you were the first major research institution to publish your responsible scaling
17:09
policies um how do you balance Innovation and and accountability and how would you encourage other companies
17:14
in the ecosystem to do that as well so something that we um that we kind of get asked a lot is is you know how do you
17:21
all plan to compete if you're you know so committed to safety and something that I think has been you know really
17:27
interesting is many fundamental safety challenges are actually business
17:32
challenges and rather than sort of thinking of these two as something that is you know two sides that are kind of
17:38
opposed to each other I actually think the path to kind of mline success in generative AI development runs through
17:45
many of the safety topics we've been talking about right uh most businesses don't want models that are going to like
17:51
spout harmful garbage right like that's just not a useful product the same thing is true like if the model refuses to
17:57
answer your questions if it's if it's uh if it's dishonest right if it makes things up those are sort of fundamental
18:04
business challenges in addition to kind of technical safety challenges I also think something we have really aimed to
18:11
do as a business is sort of take the responsibility of developing this very
18:16
powerful technology quite seriously right we uh we sort of have the benefit of being able to look back on several
18:22
decades of social media and say like wow much of what social media did for the world was incredibly positive
18:29
and there were these externalities that nobody predicted that it created which I think are sort of now widely believed to
18:35
be quite negative for people so I think anthropic has always aimed to say what
18:40
if we could try and sort of build this technology in a way that better anticipates what some of those risks are
18:45
and helps to prevent them and the responsible scaling policy is basically our first attempt to do that right it
18:51
might not be perfect there could be things about it that are sort of laughably wrong later but really what we've said are you know what are the
18:57
dimensions on on which something can go wrong here right and um you know our CEO my brother Dario testified to Congress
19:04
about the potential risks for generative AI to develop things like chemical and biological weapons and what we've said
19:10
is we actually have to do proactive work to ensure that these models are not able to do that and the responsible scaling
19:16
pact is really just a way of sort of saying hey we're committing to doing that work thank you for sharing that uh
Audience questions
19:23
let's see any questions from the audience yes
19:30
thanks so much um one of the things that I think was really awesome about the the Claude Opus release was that it was
19:37
really strong specific performance in a few domains of interest and so I was wondering if you could talk more about
19:43
um kind of like technically how you view the importance of research versus compute versus data for specific domain
19:51
outperformance and what the road map looks like for where CLA um will continue to get better yeah um that's a
19:58
that's a great question I think my real answer is that I think you're probably
20:03
giving the industry more credit than it deserves for having some like perfectly uh sort of planned structure between
20:09
like we'll we'll sort of you know research area X and like increased compute will improve y um I think I
20:16
think there's a way in which training these large models is more a process of uh Discovery by our researchers than
20:22
kind of uh intentional deliberate decisions to like improve particular areas to kind of go back to that like
20:29
Rising tide lifts all boat sort of analogy um making the models just generally more performative tends to
20:35
just make everything better sort of across the board that being said there is sort of particular targeted work that
20:42
we did do in some sub areas with constitutional Ai and reinforcement learning from from Human feedback where
20:48
we just saw that performance wasn't wasn't quite as good um but it's actually a smaller fraction than you
20:53
might think compared to just generally improving the models and making them better it's a great question
21:01
yes Sam um I've been loving playing with Claude 3 Claud Opus it's fantastic and I totally agree it feels way more human to
Claude
21:08
talk to one thing I've noticed that it almost feels like a specific human like it has a a personality and I'm kind of
21:14
curious as you guys continue to work in this domain and make other models how you see the boundary of um kind of like
21:21
personality development if people are kind of trying to create specific characters um is there kind of a stance
21:27
you guys are taking from the constitutional perspective of the boundaries of how Claude can actually play a character other than itself so
21:35
something that is really I think unusual about kind of Claude is just how like
21:41
seriously Claude will take feedback about about its tone right if you're like Claude you are this is this is too
21:48
wordy like please just be very factual and talk to me like I am a financial analyst like try it out Claude will
21:53
absolutely sort of adjust its style to be more kind of in that in that sort of you or hey I'm writing you know a
22:00
creative writing story like please use very flowery language or talk to me like you're angry at me or talk to me like
22:05
you're sort of you know friendly or whatever um I think I think there's sort of an interesting other thing you're
22:12
asking though which is like what is the default mode that we should be setting these models kind of personalities to be
22:18
and I don't think we've I don't think we've sort of landed on kind of the perfect the perfect spot but really what
22:24
we were aiming for was like what is a slightly wiser better version of us kind of how would they react to questions
22:31
right like some humility I'm oh I'm sorry I missed that um or thanks so much
22:36
for the feedback like I'll try to do that better I think there's kind of an interesting fundamental question though
22:41
which is as the kind of marketplace evolves do people want like particular
22:46
types of of kind of chat Bots or chat interfaces to sort of treat them differently right like you might want to
22:52
sort of coax a particular form of customer service bot to be like particularly obsequious or um I don't
22:58
know there there are just kind of other potential use cases my guess is that's probably going to end up being the province of like startups that are built
23:05
on top of tools like Claude um and I think our stance might might vary a little bit there but in general we've
23:11
tried to start from a like friendly humble uh base and then let people tweak them as they as they go within
23:17
boundaries of course hey um so the developer
Switching costs
23:22
experience on Claude and the you know the new generation of Claude 3 models is markedly different than other llm
23:29
providers um especially the use of XML as like a prompt templating format how
23:34
are you thinking about introducing switching costs here and especially in the long term do you want it to be an
23:40
open ecosystem where it's very easy to switch between um anthropic and your
23:45
various competitors or are you thinking about making more of a closed ecosystem where you know I'm working directly with
23:51
anthropic for all of my model needs so I think I think maybe the best way to
23:56
answer this is what we've seen kind of in the market today which is that most
24:03
like big businesses are interested in at some point you know some some of them just use one model but they they like to
24:09
try them out and my guess is that likely developers will have that same Instinct right so I think the more kind of open
24:16
hey like it's whatever it's easy to download your data move it over um I think that's the sort of goal that we're
24:22
trying to eventually aim towards the one sort of difference I would say is that often developers particularly when
24:28
they're just getting started are like the switching costs are just more laborious for them right they're like hey I'm I'm I'm building on this tool
24:35
it's annoying to switch like it's complicated to switch you have to sort of redo your prompts because all of the models like react a little bit
24:41
differently just depending on and like we have great prompt engineering resources like please check them out and also it just takes some time and effort
24:48
to like understand the kind of new personality of the model that you're using so I think my kind of short answer
24:55
is yes we're aiming for sort of that more open ecosystem but also it's it's sort of tactically hard to do in kind of
25:02
a perfect way um with interpretability research
Interpretability
25:09
I'm curious what you think is coming first to the product like what what is
25:15
looking most optimistic where I could say like turn on a switch and have it only output Arabic or something like
25:20
that what what do you think is like closest working so interpretability is a is a
25:26
team that is deep Dey close to my heart despite me like not being able to contribute anything of value to them
25:32
other than telling them how great they are I think interpretability is to me like the coolest and most exciting area
25:38
of AI research today because it's fundamentally trying to figure out like what what are these models actually
25:45
doing right it's it's like the Neuroscience of of of like large models
25:51
I actually think we're like not impossibly far but like not that close from being able to sort of productionize
25:58
something in interpretability today right the kind of Neuroscience analogy is a little bit strange but I actually
26:04
think it's it's relevant in one particular way which is that like we can
26:09
have a neuroscientist like look at your brain and be like well we know that these two things light up when you think
26:14
about dogs but it can't sort of like change you thinking about dogs right
26:19
it's like you can sort of diagnose and understand and see things but you can't actually like go in and change them yet
26:25
and I think that's about where we are at sort of the interpret level could we offer some insight like
26:31
in the future I think almost certainly yes probably not even on a a crazy long time skill right we could say hey if
26:38
you're playing with sort of you know this type of model and it's it's you know it's activating Strangely I think
26:44
that's the type of thing we could like show a sort of visualization to a customer of I don't actually know how
26:49
actionable it is if that makes sense right in sort of the same way or like well these these sort of two parts of the model are are lighting up or this
26:55
set of neurons is activating um but I think it's it's it's an interesting area of like very basic science or basic
27:02
research that I think could have incredible potential applications like a couple of years from
27:08
now I'll ask a question uh what maybe give the folks here A Taste of what's
Product roadmap
27:13
going to come on the product road map let's assume that Claude gets smarter and smarter but what are you all going to add on the developer facing product
27:20
and then what should we expect in terms of first party products from you so uh first of all we uh we are just sort of
27:27
scrambling day in day out to try and keep up with the uh incredible demand that we have so we are incredibly grateful for everybody's patience but I
27:33
think really on the kind of you know developer side we really want to just uplevel the tools that are available for
27:39
developers to be able to kind of make make the most use of of Claud sort of broadly um I think something that's
27:45
really interesting just sort of speaking to the kind of ecosystem point is there's so much opportunity for like
27:50
knowledge sharing and sort of learning between developers and between people that are kind of using these models and
27:55
tools so we're also very interested in just sort of figuring out how to host more information sharing about how to
28:01
get the most out of these models as well wonderful yes oh you have the mic yes go
28:08
for it um given your um focus on safety I was hoping you could comment on how
Regulatory landscape
28:14
you see the regulatory landscape evolving um maybe not so much for you specifically but for the companies that
28:21
are using your models and others so something that I think is just
28:27
always an unknown is like what what's going to happen in the regulatory landscape and how is it going to impact
28:32
like how we build and do our work kind of in in this space I think I mean first of all I don't have any amazing
28:38
pressions to say like this set of regulations I expect will happen but I I imagine what we'll see is kind of on it
28:47
will probably start from a place of the consumer because that's really what kind of governments and Regulators are sort
28:53
of most well positioned to try and defend or protect and I think a lot of
28:59
the kind of narrative around data privacy is one that I expect will sort of see emerge right around just hey what
29:05
are you doing with my data right people put personal things into these into sort
29:10
of these interfaces and they want to know like are the companies being responsible with that information right
29:15
what are they doing to protect it are they de anonymizing it we don't train on people's data but if C if other
29:20
companies do like what does that mean for that person's information um completely speculative but that sort of
29:26
is my guess of of where things will start I also think there's a lot of um
29:32
interest and activation in sort of the policy space right now around like how to develop these models in a way that is
29:40
safe from a sort of bigger picture like capital S perspective right some of the sort of scary things I I talked about
29:46
but again like regulation is is a sort of it's a long process and I think something we' have always aimed to do is
29:52
work closely with policy makers to give them as much information as possible so that there is thoughtful reg regulation
29:59
that will you know prevent some of the potentially bad outcomes without sort of stifling Innovation thank you danela
30:06
thank you do we have time for one more question okay one more I'm getting I'm
30:11
getting looks from Emma sorry hey Danel Claud fre is awesome thank you um when
30:17
you think about the model family and the hierarchy of models you have any thoughts on whether um it is effective
30:24
to use prompts or you've done any work internally on giving the smaller models Insight that larger models are available
30:31
uh to kind of say hey this is beyond my knowledge but this is a good time to use the larger model that is such a good
30:37
idea are you looking for a job that is a that's a great idea um that has not been
30:43
something we have currently uh trained the models to do I actually think it's a great idea something we something we
30:50
have thought about is just how to kind of make the process of switching between
30:55
models within a business just much more seamless right you can imagine that over time the model should know like hey
31:01
you're you're not actually like trying to look at like macroeconomic Trends in like the 18th century right now you're
31:07
just like trying to answer a sort of Frontline question you don't need Opus you need Haiku and I think some of that
31:12
is sort of a research Challenge and some of it is actually just a product and engineering challenge right which is how well can we kind of get the models to
31:19
self-identify the level of difficulty and really sort of price optimize right for customers to say you don't actually
31:25
need Opus to do this task it's really really simple pay you know a tiny fraction of the cost for haou and we'll
31:31
just switch you to Sonet if it's sort of somewhere in the middle um we're we're not like we're not there yet but I think that's definitely something we've been
31:37
we've been thinking about and a request we've been hearing from from customers but I love your idea of adding in the sort of um the sort of like self-
31:44
knowledge of the models it's a cool idea the callif friend exactly yeah wonderful thank you so much Daniela thank you for
31:50
sharing with us today thanks for having appreciate [Applause]
31:56
it

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `Trust, reliability, and safety in AI ft. Daniela Amodei of Anthropic and Sonya Huang`  ·  visible_channel: `Sequoia Capital` (211K subs)
- visible_url: `youtube.com/watch?v=3JLekB-NV8o`  ·  visible_published: `Mar 26, 2024`  ·  visible_views: `23,488`  ·  likes: `354`
- visible_description: *"Daniela Amodei, co-founder and president of Anthropic, sits with Sonya Huang at Sequoia Capital's AI Ascent to discuss the launch of Claude 3, solving the business problems of trust and reliability in AI, the importance of transparency in research, and implementing technical safety approaches to make AI more aligned with the values of the human race."*
- hashtags (visible): `#AI #AIAscent #Sequoia #Startup #Founder #entrepreneur`
- chapters (visible): Introduction · What makes Anthropic unique · Use cases · Danielas favorite use cases · Finding product market fit · Current customers …
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_1.37.48_AM-8bb327e5…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

This is a high-signal safety / enterprise trust / model-routing source, especially because it comes from Anthropic’s Daniela Amodei and directly addresses trust, reliability, hallucination, human-in-the-loop, model families, constitutional AI, interpretability, and responsible scaling.

Core takeaway

The strongest idea is:

Safety, reliability, and trust are not separate from AI product-market fit. They are the path to enterprise adoption.

Daniela frames Anthropic’s differentiation around models that are helpful, honest, and harmless, with constitutional AI, safety research, red teaming, and responsible scaling policies as part of both the technical and business strategy. She also says hallucinations remain a fundamental challenge, and for high-stakes decisions, models alone are not enough — human-in-the-loop remains necessary.

For OMNI, this lands hard.

OMNI translation
1. Safety is product, not compliance theater.

This supports a major OMNI line:

In care, trust is runtime architecture.

Patients, providers, operators, and partners will not adopt OMNI because it is flashy. They will adopt it if it is reliable, bounded, reviewable, and honest about uncertainty.

So safety belongs inside:

context packets,
model routing,
clinical-risk interrupt,
human review,
consent,
action envelopes,
trace/audit,
escalation,
model version gates,
output authority labels.

Not bolted on later.

2. Hallucination means “AI alone” is wrong for high-stakes OMNI actions.

Daniela says models still hallucinate, and for highest-stakes decisions, businesses likely should not use a model alone. That is directly OMNI doctrine.

OMNI version:

The higher the consequence, the less acceptable model-only action becomes.

For routine rewrite/summarization: low risk.
For clinical triage, medication, consent, abnormal labs, identity, billing, or documentation: gated.

This strengthens:

AI may draft, retrieve, classify, and propose. It does not independently commit clinical truth.

3. Model families validate OMNI’s model-routing strategy.

Anthropic’s Claude 3 family is explicitly positioned by use case: larger models for complex research/coding/policy analysis, smaller/faster models for customer support, middle models for everyday enterprise retrieval and summarization.

That maps exactly to OMNI:

small/fast model: routine message classification, reminder rewrite, low-risk summarization;
mid model: provider packet prep, patient journey synthesis, document summarization;
frontier/deep model: ambiguous clinical-risk context, multi-domain seam failure, architecture/build decisions;
deterministic validator: authority, consent, domain commit, policy gates.

Keeper:

Use the right intelligence for the risk, latency, cost, and consequence of the task.

4. “Self-routing to bigger models” is a real OMNI primitive.

The audience question at the end is gold: could smaller models know when a bigger model is needed? Daniela says that is a great idea and frames it as both research and product/engineering challenge.

OMNI absolutely needs this.

Potential primitive:

model_escalation_candidate

A small model should be able to say:

“This is beyond my confidence/risk envelope. Escalate to stronger reasoning or human review.”

That is not weakness. That is safety.

5. Constitutional AI maps to OMNI, but OMNI needs domain constitutions.

Anthropic uses constitutional AI to shape model behavior around higher-level principles. For OMNI, the analogy is not “copy Anthropic’s constitution.” It is:

OMNI needs domain-specific constitutions/policies for what agents may say, see, infer, request, and commit.

Examples:

clinical response constitution,
patient messaging constitution,
provider-assist constitution,
evidence/reservoir constitution,
Build OS agent constitution,
external-agent/capability-exchange constitution.

These are not vibes. They become policy envelopes and eval rubrics.

6. Interpretability is promising, but not yet operational control.

The interpretability section is useful because Daniela describes it as a young field: you may be able to see what parts of a model activate, but not necessarily control or correct behavior directly yet.

OMNI takeaway:

Do not rely on model interpretability as the main safety mechanism.

Use it where helpful, but OMNI safety should come from:

tool boundaries,
context limits,
deterministic policy,
source citation,
human review,
trace inspection,
evals,
model version gates,
rollback paths.
7. Personality/tone must stay bounded.

Daniela talks about Claude’s adjustable tone and default personality aiming for something friendly, humble, and helpful. That matters for Bloom/OMNI.

OMNI can absolutely have a warm, quiet-luxury, human-feeling brand voice.

But:

Tone is subordinate to authority.

A Bloom agent can sound elegant and calm. It cannot sound medically certain when it lacks clinical authority. It cannot soothe someone past an escalation gate. It cannot use warmth to blur risk.

Where it lands

Thesis §B — AI substrate: major. Model families, model routing, safety, hallucination, interpretability, personality, planning limits.

Thesis §C — Governed Capability Exchange: major. Trust, model boundaries, model provider seams, enterprise controls, switching/model plurality.

CNS / orchestration: major. Human-in-loop, escalation, uncertainty, model escalation, action gates.

Clinical safety: massive. This reinforces that care workflows need reviewable candidates, not autonomous clinical commits.

Build OS: major. Model version changes, evals, safety policies, responsible scaling logic.

Product surface: major. Trustworthy tone, bounded personality, enterprise adoption.

Doctrine / primitive pressure

Potential concepts:

model_safety_envelope
model_escalation_candidate
model_family_route
helpful_honest_harmless_policy
domain_constitution
clinical_response_constitution
hallucination_risk_state
human_in_loop_required
model_personality_policy
tone_authority_boundary
responsible_scaling_gate
model_switching_eval
model_self_assessed_difficulty
interpretability_signal
safety_business_alignment

Keeper doctrine:

OMNI’s safety layer is not a brake on product-market fit; it is what makes product-market fit possible in care.

Second keeper:

Models may vary by size, speed, cost, tone, and capability, but OMNI’s authority boundaries must remain stable across all of them.

What not to import blindly

Do not rely on constitutional AI alone for healthcare safety.

Do not assume “more human-feeling” means more trustworthy.

Do not treat enterprise trust as the same as clinical trust.

Do not make model interpretability the safety plan.

Do not let model self-routing replace deterministic escalation rules.

Do not let personality tuning blur medical authority.

Do-not-miss lesson

Trustworthy AI is not just nicer AI. It is bounded, reliable, honest-about-limits, and reviewable.

OMNI-specific:

OMNI should use powerful models, but every model must operate inside domain constitutions, model-routing policy, human-review gates, and deterministic commit boundaries.

Priority / confidence

Priority: 5/5
Confidence: 5/5
Suggested analysis depth: full_semantic

Route this into §B safety/model strategy, §C model-provider boundaries, CNS escalation, clinical-risk gating, Build OS evals, and product trust language. This one belongs in the spine.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus deep-read extraction  ·  layer: `analysis_nonbinding`  ·  EVRUN-2026-000001 (★SPINE — §A trust/safety philosophy; pairs 049/079-081)
- reviewer: `Opus` · type: `AI assistant` · at: `2026-06-09` · purpose: `formalize Review 001 → structured extraction → registry` · binds nothing (`GRD-036`/`GRD-044`) · [full agent extraction d33efc71]

**18 clusters (12 spine). Daniela Amodei/Anthropic = §A trust-PHILOSOPHY layer (049=safety-case mechanics; 079-081=security ops). Keepers: safety/reliability/trust = runtime architecture + PMF path in care · HITL permanent for high-stakes · authority boundaries stable across model tiers · interpretability diagnostic-only · tone subordinate to authority.**
1. **`safety_business_identity` (Safety-IS-PMF)** — safety/reliability/trust = commercial prerequisites for care adoption, not innovation brakes; proof obligations = GTM infra. §A/§B/§10/Build-OS(safety-case gates 049)/security/product/CNS/UX/domain-contracts. "safety challenges are actually business challenges" 17:27. PARTIAL→spine.
2. **`trust_runtime_architecture`** — trust engineered into context packets/routing/gates/trace/escalation/consent, NOT brand/policy-PDF/tone. §A/§B/§7.8/CNS/Build-OS/security/domain-contracts/UX. "commitment to trustworthiness reliability" 1:51. AFFIRM→spine.
3. **`hallucination_floor_skepticism`** — completion models won't hit zero fabrication; architect for residual error; higher consequence → less model-only action. §A/§B/CNS(`hallucination_risk_state`)/Build-OS(upgrade regression)/security/domain-contracts/UX(uncertainty display). "not sure we'll ever get… zero" 14:26. AFFIRM→spine.
4. **`human_in_loop_required`** — highest-consequence (triage/meds/consent/abnormal-labs/identity/billing) NOT model-alone; HITL structural not transitional. §A/§7.6/§12/§C/CNS(`clinical_clearance_required`)/Build-OS/security/domain-contracts/UX. "wouldn't choose to use a model alone" 14:39. AFFIRM→spine.
5. **`narrow_autonomy_envelope`** — full model-only automation = tiny low-risk subset today; default=propose; autonomy graduates via eval proof (049). §A/§B/§8/CNS/Build-OS/security/domain-contracts. "small set of cases… llms alone" 14:50. PARTIAL→spine.
6. **`model_family_route`** — tiered models matched to intelligence/speed/cost/consequence; small/fast for classify, frontier for ambiguous, deterministic validator last for commit. §B/§C/§7.6/CNS(routing policy)/Build-OS(per-envelope pins+switch-eval)/security/dedupe-076. "not everybody needs the top tier" 3:50. PARTIAL→spine.
7. **`model_escalation_candidate`** — weaker model declares beyond-confidence/risk → escalate to stronger OR human; safety signal, logged, never replaces deterministic escalation. §B/§7.6/CNS(primary host)/§C/Build-OS/security/dedupe-076. "call a friend exactly" 31:37. PARTIAL→spine (net-new).
8. **`capability_safety_dual_eval`** — product acceptance requires BOTH capability gain AND safety/hallucination/jailbreak improvement; kills ship-capability-fix-safety-later. §B/§A/Build-OS(eval bundles + 049)/CNS/security(jailbreak 080)/domain-contracts. "dual language around capability and safety" 9:25. PARTIAL→spine.
9. **`domain_constitution`** — principle-doc-shaped behavior policies PER domain (clinical/messaging/evidence/build/external-agent); NOT copy Anthropic's UN constitution. §B/§A/Build-OS/§C/CNS/security/domain-contracts. "constitutional AI" 2:05. PARTIAL→vocabulary.
10. **`responsible_scaling_gate`** — proactive safety work before capability release; staged accountability; pairs 049 safety-case admission. §A/§B/§10/Build-OS(primary + 049)/CNS/security(hard-refusal)/§C. "responsible scaling policies" 17:03. PARTIAL→spine.
11. **`interpretability_diagnose_only`** — mech-interpretability observes, can't reliably edit/control; safety from tool-boundaries/policy/citation/HITL/trace/evals/version-gates/rollback, NOT neuron-viz. §B/security(harness-side primacy)/Build-OS(red-team>interp)/CNS/§A. "diagnose… can't actually change" 26:19. PARTIAL→spine.
12. **`safety_research_transparency`** — publish safety/red-team research to raise watermark; Evidence Plane ingests external safety corpus → gated promotion. §8/KR/Build-OS(threat reservoir 080/081)/security/§A/§B/CNS. "raise the watermark across the industry" 12:29. PARTIAL→vocabulary→watch.
13. **`externality_anticipation`** — build anticipating unpredicted harms (social-media lesson), not only reactive; Sense includes proactive harm anticipation (consent erosion/autonomy overreach). §A/§8/§10/Build-OS/security(pairs 079)/CNS/domain-contracts. "externalities that nobody predicted" 18:22. PARTIAL→spine.
14. **`comfort_boundary` / `enterprise_clinical_trust_split`** — adoption limited by delegation willingness; enterprise reliability appetite ≠ clinical authority proof; permeability earned not assumed. §A/§7.8/§B/CNS/Build-OS/security/domain-contracts(consent/D7)/UX. "what are humans comfortable giving" 15:10. AFFIRM→spine.
15. **`tone_authority_boundary`** — brand voice (warm/humble) subordinate to authority envelopes; warmth can't blur risk or override escalation. §A/§6/UX(primary)/product/CNS/§B(personality_policy)/Build-OS/security/domain-contracts. "feels like talking to a trusted person" 9:50. PARTIAL→vocabulary.
16. **`unreliable_agentic_planning` + `choppy_capability_timeline`** — multi-step agents/planning still hard; capability arrives unevenly; CNS step-gated w/ revalidation; no "book my flight" autonomy for care (counters 089). §A/§7.6/§12/§C/§10/CNS(step-gates/stop)/Build-OS/security/domain-contracts. "agentic behavior is still really hard" 16:16. AFFIRM→spine.
17. **`model_provider_plurality` + switching-eval** — open ecosystem; enterprises try multiple; prompt/personality drift on switch; §C stays rail/model-agnostic; authority invariant across providers. §C/§B/§7.8/CNS/Build-OS/security/domain-contracts. "more open ecosystem" 24:16. PARTIAL→spine.
18. **`care_production_pmf_signals` + `consumer_data_privacy_reg_first`** — Dana Farber genomics + health-record analysis validate assistive-care wedge (not autonomous commit); regulation likely starts consumer data-privacy → patient consent lineage first. §10(wedge validation)/§A(consent)/§7.8/security(079)/domain-contracts(D7/Obs)/CNS/Build-OS. "Dana Farber Cancer Institute uses Claud" 5:12. PARTIAL→vocabulary→watch.

**REJECTS (guardrails):** constitutional-AI-alone for healthcare safety; human-feel=trustworthy; interpretability-as-safety-plan; model-self-routing-replaces-deterministic-escalation; general-capability-lift-without-regression (watch); discovery-not-roadmap research posture (low-auth). **Net-new (promote):** `model_escalation_candidate`(ledger#42, also 076), `responsible_scaling_gate`(pairs 049), `externality_anticipation`(ledger#34), `capability_safety_dual_eval`, `hallucination_risk_state`, `model_switching_eval`(dedupe 069), `tone_authority_boundary`. SHARPEN/BIND: `domain_constitution`→§B policy-envelope (instantiate per domain not vendor doc), `human_in_loop_required`→§A authority gate, `model_family_route`→§B+076 (070 adds consequence economics), `safety_case`→049 origin (070=philosophy/049=mechanics), `safety_business_alignment`→registry Safety-IS-PMF (pick one canonical name). REJECT: `anthropic_constitution_copy`, `trusted_persona_equals_trust`, `zero_hallucination_aspiration`. **Reread (MANDATORY before §A spine promotion):** Safety-IS-PMF × 049 safety-case (17:27–17:45, 18:45–19:16 — philosophy-vs-mechanics split); HITL-permanence × anti-089 (14:26–14:56 + Karpathy claws — clinical-clearance invariant across generations); `model_escalation_candidate` host schema (30:24–31:44 + 076 — escalation ≠ replaces clinical_risk_interrupt); hallucination floor × authority labels (14:05–14:44 → CNS/Observation candidate schemas); interpretability limits × 079 ops (25:09–27:02 — harness > neuron-viz). PAIR 079-081 (070=philosophy/079=ops/080=adversarial/081=governance — no duplicate rows); enterprise-vs-clinical trust (2:40, 6:02, 7:32 — don't relax clinical bar for enterprise branding); §3.5 Anthropic build-discipline Lens-B (GRD-039, not worship); auto-caption timestamp re-verify.

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000001` (ai-corpus synthesis + routing) · per-source extraction: **§3 Review 003** (this file) · concept_registry: `analysis/EVRUN-2026-000001_ai-corpus-synthesis-and-routing/EVRUN-2026-000001_ai-corpus_concept_registry_and_routing_map.md` · anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · promotion: gated (`GRD-036`/`GRD-044`) — clusters route to thesis-v4 + CNS/Build-OS/security/capability-topology contracts via registry; no direct binding from this file.

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged strong **§A trust/safety** + **Lens-B Anthropic build-discipline** comparator; oldest-era source (2024).

# EVSRC-2026-000242 — Simulating Humans at Scale: Simile's Joon Sung Park

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000242_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(lifted verbatim from §3 Review 001 operator metadata block — `identity_confidence: high_from_operator_metadata`)*
- evsrc_id: `EVSRC-2026-000242`  ·  filename (proposed, NOT renamed): `EVSRC-2026-000242_simile-joon-sung-park-human-behavior-simulation.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=lfhFmwcESRw`  ·  source_title: `Simulating Humans at Scale: Simile's Joon Sung Park`
- channel_or_org: `Sequoia Capital`  ·  speaker: `Joon Sung Park (founder/CEO, Simile; creator of Stanford "Smallville" generative agents)`  ·  published_at: `2026-06-16`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `founder interview — human-behavior simulation / generative agents / synthetic populations / market + social-science simulation`  ·  source_reliability_context: `founder (primary-ish interview; treat company metrics + performance claims as speaker-provided, not independent proof)`  ·  topic_tags_light: `[Simile, generative_agents, Smallville, human_behavior_simulation, synthetic_populations, say_do_gap, convergent_vs_divergent, TVD, CERN_of_human_society]`

## §0.1 — People / authorship / authority context  *(lifted from §3 Review 001 operator metadata block)*
- primary speaker(s):
  - name: `Joon Sung Park` · role_in_source: `interviewee` · affiliation_at_publication: `Simile (founder/CEO); ex-Stanford researcher (generative agents / Smallville)` · speaker_type: `founder / researcher` · authority_context: `first-author of Stanford generative-agents ("Smallville") work; now applying behavioral simulation commercially at Simile` · identity_confidence: `high_from_operator_metadata`
  - name: `Sonya Huang` · role_in_source: `host / interviewer` · affiliation_at_publication: `Sequoia Capital` · speaker_type: `investor` · authority_context: `Sequoia partner; frames investor/market lens` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `Sonya Huang (Sequoia)`
- event_context: `Sequoia Capital published founder interview (podcast/video), Jun 16 2026`  ·  perspective / conflict notes: `founder promoting own company + investor host — behavioral-simulation thesis is talking-their-book; performance claims (85% accuracy, TVD<0.15, CVS/Gallup partnerships) are speaker-asserted, not verified`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [x] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot (lifted from operator metadata block) · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source — Opus-main; DO NOT edit registry per this run's contract) · [ ] update coverage matrix (Opus-main) · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
I am somebody who is quite inspired by science fiction. And when you read science fiction uh that covers societies
0:07
that have progressed far enough in its technological maturity, you always see two pillars. You have some version of
0:14
AGI and you have some version of simulations that really help guide the
0:20
society. I do see an opportunity today to really take the first crack at
0:25
building the simulation. I would not have said that even 5 years ago, but that is a conviction that we have built
0:32
up over the years as we are going deep into this research.
0:45
[music]
0:52
Today we're delighted to have Jun uh founder and CEO of Simile. Uh, Similey is building an applied AI lab simulating
0:59
human behavior and societies and I'm very excited to have you here to discuss what you're building. Same here. Thank you for having me.
1:05
Okay, take me back to April 2023, Stanford, California, specifically
1:10
Smallville, Stanford, California. What was what was that? So, Smovville was a project that we were running at Stanford
1:17
where the idea was that we made this observation that large lynch models can now encode a lot of human behavior that
1:24
is embedded in its training data from the web and social media and so forth that if you sort of prove at the right
1:30
angle, you can actually get a lot of micro behaviors out of these models. So, given a very specific demonstration or
1:36
description of a situation, what would person X do? And it would actually generate really interesting behaviors.
1:41
We found that to be so interesting and we found that to be the ingredient that we had been waiting for for creating
1:47
really complex agentic behaviors. So small bit actually was an experiment where we decided that if we pushed this
1:54
as far as possible what would a society that is created by these agents look like. So we basically created generative
2:00
agents that is paired with generative AI model with memory planning and reflection to basically create this
2:07
lived experience of agents living in the small town. So smallville was basically a game town of 25 agents living in it.
2:14
Individual agents had a description of persona but they would actually wake up in the morning do their routines go to
2:20
work actually have relationship sort of like people would and they would actually have emergent phenomena like
2:26
having parties and so forth. So that was the experiment that we ran. What was the most surprising things to
2:32
come out of the experiment? So one of the surprising things was so the experiment the simulation itself
2:39
actually sets place the day before a Valentine's Day. So you actually see
2:44
these agents one of the agents actually thinking well I run a cafe. So she's a cafe owner. Her name's Isabella. She
2:51
goes and thinks it would be great if I can do a Valentine's Day party where we invite a lot of friends, customers. So
2:57
you actually see her on the day before Valentine's Day going around actually gathering materials for the party,
3:03
actually telling her customers, hey, we're going to have this party. Please come. And on the day of Valentine's, you
3:08
actually see this immersion party that actually get formed with all these agents coming to the to the basically
3:13
cafe. Did anyone not get invited? Well, some of the people did get the invite invitation, but they forgot. That's one thing that did happen. Uh
3:20
some of the agents did not explicitly get invited, but we had one agent who got the invite, Claus, who decided to
3:26
ask his crush out on a date. So he would actually bring in the date. They would actually have a party at this cafe. So
3:32
quite surreal. So how did you end up building Smallville in the first place? Like were you studying kind of human psychology
3:39
and social behavior or was this coming from was this coming from the kind of customer back or was it coming from the
3:44
technology out? So my particular team has been excited about simulations and we saw the vision of simulation failure
3:50
early on. So my career as a researcher at Stanford really started back in 2020.
3:56
That was the year when GPT3 was about to come out. It wasn't quite there yet but it was just about to come out. We
4:02
started to get its first demos. And my first year uh we wrote this paper called
4:07
opportunities and risks of foundation model alongside many of the Stanford researchers and was led by one of my
4:13
co-founders Perc Leang who is now the head of the center for foundation model at Stanford and when we were writing
4:19
that the part that I was really focused on was well here's a new class of models that we have not seen in the past that
4:24
these models that can be very generalizable in ways we didn't quite have in the past and I got into thinking
4:31
well if we can imagine the kind of interaction we can create with these models, what would that be? And many of
4:37
my colleagues back then were surprised that these agents or these models can do classification or simple generation. And
4:43
that was really incredible to see because these models didn't really know or didn't really wasn't really taught to do that. But the part that was
4:49
surprising to me wasn't that these models can do that because from interaction perspective, we've known how
4:54
to do this for a long time. The interesting part was well, these models can actually encode human behavior. What
5:00
does that mean if we were to push this as far as possible? So part of the
5:05
tradition I come from research included what we call social computing and social computing within human computer
5:10
interaction really has to do with this idea of how can we build a better techn
5:16
technological platform that would enable social interactions and collaboration. One of the most difficult challenges of
5:23
building a social platform is not necessarily testing the UIU UX of the system, but it's more about when you
5:30
have tens of people, millions of people, and down the line billions of people. How do all these people come together to
5:38
create the immersion phenomenon that's both good and bad and how can we design for a scale? And so far, we didn't
5:45
really have a tool that would enable us to test for that. The only way we test it today is you basically field test it.
5:51
You release your prototype, see what happens. And sometimes it actually comes at a real cost. Obviously, it's high
5:57
cost in terms of human hours and the time it takes. But at the same time, if you have a bad design, imagine you have
6:04
a feed on social media that is more likely to propagate certain emotion that is negative. Then obviously that is
6:10
something that we want to avoid. But this now gets tested in the in the field. So we wanted to see whether we
6:15
can actually create a simulation that would actually let you test for this. So 2022 this was actually a year before
6:22
generative agents we worked on a paper called social similacra which actually really was the precursor to the agent
6:29
paper that we ended up writing. The core thesis was imagine you're building a subreddit. You're a designer on a
6:34
subreddit. You want to see what people might do in the subreddit which is surprisingly hard task even for practice
6:40
designers. And we basically decided, hey, we have this model seems unique. Let's use this model to create
6:46
simulations of the entire subreddit. So you define the goal, you define the moderation strategies, and you populate
6:53
it with thousands of what back then we didn't call them agents, but we call them personas, but populated with
6:59
thousands of personas. This is basically 22 uh version of mobook, which is quite interesting that
7:05
it actually came back. And when we saw that, we actually got a lot of really important insights out of this. What are
7:12
the good behaviors? We actually simulated a community where the entire idea was for people to discuss with each
7:18
other the sight sing uh places to sightsee in Pittsburgh. And all of a sudden, you start to see this personas
7:24
actually collaborate to actually discuss, hey, XYZ places are amazing. Do you want to actually go to a trip
7:30
together and actually plan those trips live in the simulated subreddit? So
7:35
that's how we got excited. So we saw the vision and the excitement and the potential applications failure early on.
7:41
But then the work that we had to do was then demonstrating how can we go beyond simple personas to create complex agents
7:47
that actually can think over time because we want to simulate the longitudinal aspect of the our society
7:53
and then actually validating that these simulations are actually accurate in practice. Was there a point of model
7:59
evolution at which you felt like okay we're there the the models are good enough for us to actually have a you
8:05
know faithful representation of human society. So Gypty 3 when it came out and social
8:11
similar was built with GP3 and it was very janky. It didn't do any instruction tuning. It did not follow your
8:18
instructions. So just to have it to listen to you and do what you wanted to do, you had to do some weird tricks with
8:24
prompting and so forth. But you could actually see the promise. The model actually have encoded a lot of human
8:29
behavior and you could actually see the trajectory and when we had the generative agents paper wasn't quite
8:34
tragic but we now had instruction tuning. So we could actually build much more complex agents that can reason
8:40
about its memory that wasn't really possible when we did social similar and since then of course the models have
8:46
improved. So where we are today is the models at its foundational level have
8:52
reached a point where we can actually imagine building these kind of applications. Now the part that actually
8:58
I do think however that's quite interesting here today if you look at many of the large linkage model companies whether it's open AAI
9:05
anthropic and many of the neolabs that are getting formed the models they are creating are models that I would
9:11
consider to be their north start to be something that is similar to let's build a super intelligent machines. These
9:17
machines are meant to be rational and these machines are supposed to be really amazing at technique problems that have
9:23
an objective answer. So maybe that's not even the best simulation of
9:28
true human society. Then turns out, yeah, people are irrational. Yeah. Right. We have a lot of subjective
9:33
values, preferences, and taste. So you actually start to see divergence in moral science going up and the
9:41
performance in its ability to predict and simulate human behavior. So we have sort of plateaued with current modeling
9:49
paradigm our ability to really simulate humans. So it is sort of at the starting
9:54
good foundational level but to make it really amazing we do need the next frontier that is more geared towards
10:00
actually modeling people's diversity. Very interesting. At what point did you realize that you know what you did with
10:08
Smallville could become a company? Right. So again the promise of
10:14
application was something that I was very much inspired by early on by simulation with social similacra and so
10:19
forth. But the part that I realized over time is research and a company have very
10:26
different function. Research is an amazing vehicle if you want to basically do breath research. You are in a lab
10:34
surrounded by really smart set of people and each of our each of the researchers own a small piece of thesis and they go
10:41
explore some of those thesis blossom into amazing research product but we're not necessarily known for finishing our
10:48
job. We're not usually the one to bring that research impact to the real world.
10:54
Company is a machine for depth for search. You have a conviction on an area. You find a hill that you want to
11:00
climb. This is the vehicle that let you put together resources and an amazing
11:06
group of people to go after a singular vision without hesitation. And we got
11:11
that conviction I would say about half year after generative agents after the
11:17
original generative agents paper. We got so much inbound interest initially from actually social scientists who wanted to
11:22
run their experiments and all the RC RCTs on our platform. Then very soon after many of the Fortune 500 companies
11:30
who saw this demo and their board members and CEOs who sometime visits Stanford saw that and they start asking
11:36
well we go run all these surveys and experiments and there's so many research questions about the market that we
11:42
cannot answer today. Can we run that in simulation? That started to really intrigue me because that showed a clear
11:48
line towards a real world impact for research which is not always the case that we have that kind of opportunity.
11:55
So that is when we decided we actually want to validate the simulations are accurate. So we went out and actually
12:01
created simulations of thousand people of the US population. We demonstrated that using our architecture and the
12:07
models we can actually predict people's behaviors 85% as accurately as people
12:12
replicate their own. When we saw that we thought okay this is something that we feel comfortable providing to our users
12:20
as a platform for simulating their really important decisions. So that's when the co-founders myself Percy as
12:28
well as Micah Bernstein was a researcher and my adviser at Stanford. Both of them were actually my adviserss. So the three
12:33
of us have been working together for five years and now at this point it's similarly six years but that's when we got together to have the initial
12:39
conversation of can this be a company. Got it. Amazing. Um maybe walk me
12:45
through a customer engagement end uh today like who's a canonical customer and which department and they come to
12:52
you what are they asking you uh and you know what product do you or service do you deliver to them
12:58
right so maybe an example that I can give uh to make this concrete um so CVS
13:05
has been partnering with similarly for the past I would say nearly half a year uh and they they've been an amazing
13:10
partner the way we initially got in touch with so our main buyer at CVS is
13:16
the lead uh it's a senior VP who leads human insights and original story there
13:22
was he was he basically read my paper that validated the age and simulations
13:27
and thought we have to bring this to CBS because today we are bottlenecked by the
13:33
number of questions we can field test and we're also bottlenecked by truly the
13:38
physics of human society. It's one thing to ask surveys and experiments. Totally
13:43
different thing if down the line you actually want to simulate the entire market and actually map out all the
13:48
second order impact of the decisions you suggest to your leadership. So he's been
13:54
looking around for that solution and his cousin happened to know me and basically told uh our buyer shri that the authors
14:02
of the paper are actually looking to start something. So that's how we got connected and in this particular
14:07
engagement usually the way this goes is our customers are very much used to
14:13
working with polling companies or panel companies today and there they go and
14:18
basically ask these companies XYZ are the populations that we are interested in better understanding can we go run a
14:25
research study of these topics that initial stage looks very similar
14:31
for simile so our buyers come and They tell us we want to better understand XYZ
14:36
population. Then similarly goes out and we have through our partnership with vendors. We have a strategic partnership
14:42
now with Gallup for instance who is a polling and panel company where we go out work with our vendors to actually
14:49
reach out to real humans. So these simulations are grounded in real data but reach out to those people collect
14:56
data that we believe are efficient and generalizable about that person. So imagine you have 15 minutes. what are
15:02
the magical questions you can answer or you can ask these people during that time. We collect that data, use that
15:08
data to create agents or simulations of these people that can basically be used to answer a large number of questions
15:15
that goes way beyond the original domain. We load that onto our platform and it's basically a SAS product. Our
15:21
customers come and they can basically ask any questions about the group of people of their interest. So interesting. It reminds me of um in
15:29
autonomous vehicles, you know, you go and collect a bunch of data from the road and then you're able to augment it
15:34
with simulation. Is this similar concept or are there big differences to to what you're doing here?
15:39
It is similar concept in the sense that of course you with the self-driving
15:45
vehicles. You want to create model that is based on real world physics, but you
15:51
want to create a model that is generalizable beyond your training data. It needs to be generalizable into
15:56
different locations with different weather conditions. Very similar concept where what we want to create is we want
16:02
to reach out to real people and for these people want to understand something fundamental about these people
16:08
in a way that we can encode into the model. I would thought that the large language models would be such a good
16:14
representation of you know the whole world. Yeah. That you could almost narrow it down.
16:19
you could tell Claude, you are a 34 year old woman living in a you know by
16:25
coastal metropolitan area and you know it would be able to have faithful representation. So I'm actually
16:31
surprised that you go out to Gallup maybe. Can you just explain why you have to go out and collect any real world
16:36
data at all? Yeah, one of the big questions here is the question around say do gap. There
16:42
are things that people say and then there are people there are things that people actually do and the gap there is
16:48
real and a lot of the large language models are trained on edit data
16:54
fundamentally it is the things that people have said online that does cover a large quantity of its training data.
17:00
So one of the things that simul simulation platform does is actually closing that gap. So a lot of the data
17:07
that we end up collecting by nature are behavioral. It also includes data that actually goes
17:13
into literally questions like just tell me the story of your life. Turns out if we understand the person's story of your
17:19
life, the kind of data you get from it is what we consider to be the longtail information about this person. It's not
17:26
about um what you've done in this particular moment. It's not about very
17:31
broad questions like what's your view on politics. It's about where you grew up, what you what were some of the difficult
17:37
decisions you had to make in in life. And what's interesting about this data is it's an amazing way to build a
17:42
translational layer between attitudes and behavior. So we combine these kind
17:48
of data sets but fundamentally that's the gap that we want to close. What sort of behavioral data do you have?
17:53
So similarly does run a lot of experiments. So kind of models that we have trained for instance we have a huge
17:59
repo of RCTs. So randomized control trials that were run in social scientific context that were run around
18:07
pricing studies. So one of the models that we are training is basically the foundation model of human behavior in
18:13
quite a literal sense. We have all the behavioral signal from RCTs. Can we actually encode that into the model so
18:20
that the end outcome is a model that can basically predict the results of any RCTs?
18:25
At the same time, uh, one of the conversations that we keep on having with our customers that we're very excited by is our customers then come
18:33
in, see that potential and their mind goes to, wow, we have 90 million
18:38
customers, let's say here at CVS. How can we leverage this kind of data to create better simulations? So there's
18:45
also conversation around how can we in a responsible and ethical way leverage
18:50
existing data that is also inhouse for our customers then use that to create
18:57
augmented version of simile model. So that of course is going to be more fine-tuned specific to the population of
19:04
these customers. Yeah. But that's the kind of data that we will be leveraging. I see. And are you doing these
19:09
interviews typically by voice? Is it is it a survey that you fill out? like what's the modality? So, it's a huge breath. Uh the quick
19:17
answer here is it's both. Um interviews are fantastic if you want to get the
19:23
longtail information about people. So, we actually do in the original study that I conducted uh back in 2024, we
19:30
literally ask a question, tell me the story of your life. Now, the way we do it is we are training our own model. So,
19:37
it's a reinforcement learning loop. Basically imagine the objective function here is how can you spend the minimum
19:42
amount of time to get the maximum amount about visibility about this person. So
19:48
that is one of the things that we do. So basically training an interviewer that is not really asking for factual
19:54
information or an experience about a particular platform but just what are the life story that people have that can
20:00
be used to train our own model for these agents. And then for the more factual or
20:06
sort of a more discrete choices uh choice questions surveys and so forth.
20:11
These are also very efficient. These are time and data efficient because people can fill out many of the questions in
20:16
short periods of time. So for those we actually do leverage them in for instance if you want to just have a
20:21
broad understanding of people's viewpoints on certain topics, certain policies and things like that.
20:27
You describe yourself as an applied AI lab. How do you think about where you want to build your own models versus where you
20:34
want to rely on other existing models? So in terms of building our own model
20:40
really the core thesis here is there is an amazing model to be built that really
20:45
uncodes the diversity of people's values preferences and taste in ways that
20:51
simply a rational model cannot do. So one way I actually post this we're sort of building. So imagine the current
20:57
today's model are akin to the CPU of intelligence unit. It's a single model
21:03
trained on amazingly rational data that is amazing at solving very complex
21:08
objective questions. Simile's model is much more akin to developing something that is close
21:15
closer to the GPU of the intelligence unit where the idea here is we don't
21:20
actually need a model that is superhuman at simile. In fact, we want model that's as human as possible, but we want to
21:27
make sure that these models at the sort of individual subunits can represent the real viewpoints of different
21:32
populations. So where we see that gap, that's when we go develop our own model.
21:38
But at the same time, we do leverage volunteer models for instance as a way to coordinate the research. Frontier
21:44
models are amazing at coming up with a research plan. So that's where those models actually do get leveraged.
21:50
Very interesting. Um, are people typically coming to you with questions around new product launches,
21:58
uh, you know, how they should be marketing their companies, pricing, all of the above?
22:03
So, it's it is all of the above. Okay. Our customer journey usually does however start with a very concrete use
22:09
cases and problems they are trying to solve. Uh, concept testing is a big one. It's also a very straightforward one. So
22:16
they have a new concept, new product idea, new market message they want to test and they want to hear from their
22:21
users what they would think about XYZ. This is one way for them to quickly test those ideas. And then the promise they
22:29
quickly see is well right now we're very much in the practice of testing five to 10 different ideas. But what does it
22:35
look like for us to test instantly thousand different ideas across thousand different sub populations? That's the
22:42
initial vision they see. Then we really get into the nitty-gritty uh details of well where the simulation
22:49
go from here. They then pretty soon start asking well can this be used to do
22:54
product testing but not just simply submitting like an image but imagine basically asking these agents go
23:01
experience this product for 10 minutes and tell us about what you experienced what you saw. So you're basically adding
23:07
temporal dimension. Then you go into things like multi- aent simulation.
23:12
Some of our customers very routinely actually ask us to simulate their earnings goal. This is actually a use
23:18
case that both surprised me at first but this is also surprisingly a common ask because of course the CEOs and board
23:24
members always need to think about hey how are we going to design our earnings call? How would the the audience react
23:30
so that is something that we also do and this is very much multi- aent simulation. you know, it seems like
23:35
there's so many use cases that could potentially be tested once you have like a simulated almost customer population,
23:43
right? Yeah. Um I'm curious the value of research and testing in SIM
23:50
versus just like let's say you have a new product concept that you want to test. Why not just go run a thousand
23:55
Facebook ads and like you actually get the click-through rates on this stuff? Isn't that real world data almost more useful than the simulated data on how
24:02
people might behave that you then correct for with your own models? So it's a great question and I think to
24:07
some extent here the answer has to do with initially scale and then down the
24:13
line truly the new capability that comes because you can simulate the interactions. The scale question here is
24:19
actually quite straightforward where yes, you can absolutely run Facebook ads and Facebook testing. But the kind of
24:25
experiments that you can run in simulation is actual behavior simulation at scale, right? So you can basically
24:31
pull in any number of users doesn't even have to be bounded by the number of population that's available on Facebook.
24:37
And it's also much more representative because only certain groups of people will actually respond to the online
24:43
experiments. But similarly the model that we are creating one of the key promises is that it is representative.
24:50
We do the hard work of actually gaining the representative set of people and then collecting the data that would
24:55
actually represent them properly. So the scale representativeness is something that many of our users do not have easy
25:03
access to. This is actually one of the common ask also that we do get or common sort of pain points that we have heard
25:08
where the question that many of these people have isn't about like what questions do we ask these people but
25:14
it's about in the first place how can we get to the population that we're excited to talk to that's a huge bottleneck.
25:20
Then down the line you can actually really start to imagine and this is something that our customers and some of the most forwardlooking customers are
25:26
now going into which is what are all the downstream implication of the decisions
25:32
you make. It's not just about whether imagine you have this particular product will do you like it or do you not like
25:38
it? Would you pay for this not pay for this? It's not necessarily the just that initial questions that we want to answer
25:45
and finish but we want to understand imagine you're a car company. You
25:50
launched an electric vehicle in this market. Maybe the electric vehicle does really really well. So we can help you
25:56
do concept testing around marketing and the product around the electric vehicle. But what does that do to the perception
26:03
of let's say non electric vehicle? Does that change the market perception? Then
26:08
what does that mean for the rest of the product line? And how do you balance those kind of second order impact of
26:14
your decision in a way that is more evidence-based today? There's no way to test for this.
26:19
Yeah, you can run this in simulation. So really going beyond simply asking one question at a time, but then to think
26:25
about what are the long-term implications of your decisions is something that our customers are quite excited by.
26:31
I'd love to understand how you think about how predictive your model is in actually simulating real human behavior.
26:38
I imagine you have a lot of eval. I guess what is your northstar metric? How do you guys do on that? Um and you know
26:45
what do you think is the theoretical limit? It's a great question. So theoretical limit and let me just start from there.
26:51
certainly does exist in the sense that humans are genuinely there's a lot of randomness that if you ask me the same
26:56
question I actually answer the question slightly differently. So there is certainly that degree of randomness in
27:02
human behavior. However, there's a lot of gains in performance that we can have
27:07
even today in the way we're predicting people. So the measurement that we do is
27:13
so at the level of population we measure the distribution of responses if it is more quantitative. So we actually
27:19
measure total various distance which basically shows how close are the distributions of the ground truth versus
27:25
the simulated information and that is a metric that we run across all the use cases that our customers
27:32
have and we have certain threshold that we believe is good enough for decision- making. So a TVD of let's say less than
27:39
0.15 we believe is actually quite strong evidence for making decision. So that is
27:45
a northster state that we want to hit for this class of use cases that are more quantitative that's more question
27:52
and answers. This also does cover RCTs which is many of the core use cases our customers have. Now there's actually a
27:59
really interesting then question to ask around well what about multi- aent simulation? What about all the
28:04
downstream implications we're going to be simulating? What does the evaluation of those look like?
28:10
Yeah. And then do you daisy chain errors as you kind of you know if this one is 85% accurate and then this agent is
28:17
telling another agent something and you know like do you accumulate errors as you go as you go towards multi- aents exactly and one of the core thesis here
28:24
is we basically see two categories of simulations one simulation is what I would consider to be simulations that
28:30
converge the other categories of simulations are the simulations that diverge and sometimes they actually
28:36
coexist and it's really about what research questions do you have questions that converge
28:41
doesn't actually matter if you have a little bit of error. Now the error cannot be obviously so dramatic that it
28:47
sort of is completely detached from reality but you actually are okay even if the errors do compound over time
28:54
because the pool towards of convergence is strong enough that you'll actually understand where everything would fall.
29:00
A good example here actually is if you simulate a network of people then that
29:05
network will always have a hub that gets formed. This is what sort of network
29:10
scientists would call the skillfree network. For instance, this is actually what powered Google too. One of the core
29:16
observation of page rank was doesn't matter how these networks actually get formulated, you actually see some web
29:23
pages that get exponentially more links that are attached to it. This is a very fundamental uh behavior in humans that
29:30
we also see in simulated networks and that convergence always happens as long
29:36
as you are replicating human behavior with certain threshold accuracy. Now there are then questions that generally
29:42
do diverge. It's like your classical questions like was World War I inevitable or was it not?
29:49
And there it is sometimes difficult to run the same simulation over time and
29:55
get the same exact outcome. Imagine you're running a this is not something
30:00
that necessarily similarly right now is going into but imagine you're running a simulation of an election. Will the same
30:06
person win the election every time? There are a lot of downstream implications of every single decision that does happen. So it does diverge
30:14
there. The core evaluation is around confidence. So imagine you run the simulation 100 times. How many of those
30:21
times do the results come out to be X? And how can we actually use that to basically create a bootstraps resembling
30:29
to calculate the confidence around the simulations. Those are some of the questions that we do ask. And a huge
30:36
part of this also of the power of simulation is then to show when it diverges to show the diversity of
30:43
possible outcomes so that people can actually look understand the cause or mechanism of how we got to those
30:48
outcomes and prepare for those futures. So those are some of the implications of divergence in simulations.
30:55
Are there any mathematical descriptions of like why something would converge or diverge? Like I imagine if you have like an average function maybe you converge
31:02
and then if it's like a you know you're splitting outcomes to a binary then you might maybe diverge but
31:07
yeah so the intuition I think is close uh and technically this is also a research topic so similarly is a
31:14
certainly a company where we do go deep into this research topic in the sense that I see simulation as a field as akin
31:22
to developing your day one of inferial statistics. you know inferial statistic
31:28
scientists actually had to do a lot of discussion and research over time to decide that P less than 0.05 is actually
31:35
evidence that is strong enough for science. Similarly is working on setting the same kind of threshold and standards
31:42
for the rest of the field. So those are the intuition. I think that's exactly the right intuition in terms of actually
31:48
how to make a robust mathematical equation around when it's going like what's going to happen when it is a real
31:54
research frontier for simulations. Thank you for being nice about my vibe mathing. Um I'm curious you know it
32:01
seems like so a lot of force 500s coming to you. I'm wondering whether there are you know non-existing corporate use
32:07
cases that might you know the like great mysteries of our society that might become solved. And for example, I'm
32:12
wondering about economics. You know, central bank decisions oftentimes like,
32:18
you know, I've I personally believe in that macro. Nobody's nobody knows nothing. Uh and oftentimes a lot of the
32:25
issues come about from human psychology. Um so to me, macroeconomics is a
32:30
function of simulating human behavior at scale. You know, I'm thinking even in the venture capital use case, we we often
32:37
debate internally, you know, does value acrue to this company or not? you could you could you could run the simulation
32:42
of all the different layers of the AI stack and and almost figure out where durability and value value occurs like
32:48
you had a kind of perfect simulator of human behavior there's so much more you
32:54
could do than serving the Fortune 500 do you agree with that and then if so are you serving governments
33:01
uh you know the like yeah so it's interesting um when we were
33:07
still researching in this area the way I actually uh back then my adviserss
33:12
Michael and Percy excited about this was I basically told them look we do this
33:17
right there's a Nobel Prize to be won there and I truly believe that and it's
33:24
also not surprising in that your classical economics uh simulations
33:29
things like Asian based models that really pioneered our understanding of back in the day the kind of topic they
33:35
studied was how does segregation happen what are the causal mechanism for segregation So scholars like Thomas Shelling would
33:41
actually build agent-based models that are extremely simple and rudimentary but that showed something deep about human
33:49
macro behaviors and he of course went on to win a Nobel Prize. I see the same opportunity here but in an augmented way
33:56
where back in the day the agent-based models were very much deterministic in some sense where you basically in this
34:03
simulation of let's say like motor of segregation from like 30 years ago individual agent was simply red dot or
34:10
blue dot and every game iteration they would look around its corner see how many of its neighbors are of the same
34:15
color and if that threshold goes below certain threshold then they will decide to move to a new location that was it
34:22
but Now we can actually create real agents that replicate the full richness of individuals and run the same kind of
34:29
simulations. So the kind of questions that we can ask that goes beyond simply the commercial use cases for instance in
34:36
the in the context of macroeconomics actually the questions that I actually did get asked from economist uh were
34:41
things like when does bankr run happen or questions like climate change one of
34:46
the sort of core blocker of climate like solving that issue is the collective action problem of many nations. Can we
34:52
actually simulate that? Or what are the signals of a democracy that is about to
34:57
collapse? Can we understand the origin story of the monetary system? These are
35:03
the kind of simulations that I do believe ought to be the northstar state
35:08
of this field. And it is sort of interesting to imagine like what that would actually look like in practice,
35:14
right? Because these would involve very large scale simulations with many agents interacting with each other. I do see a
35:21
future where today this is certainly not the case. Uh today a simulation is quick
35:26
and fast to run. But what about simulation that takes actually a$und00 million to run once and could take many
35:34
months to run but when we run it it solves one of the fundamental questions of our society. That I do think is
35:41
genuinely a very exciting possibility for this field. I agree. I'm even thinking like politics for
35:47
example could be forever changed of say everyone has an agenda of how they say
35:52
some policy change will will impact things. Why don't we just run the simulation
35:58
and understand all the downstream implications. Yeah. And not just what's going to happen this year but what does it mean in the next 5
36:04
to 10 years. Exactly. Fascinating. I was going to close by asking you what makes you
36:10
excited about the future. Is it what we just talked about or is it something else? I am somebody who is quite inspired by
36:16
science fiction and when you read science fiction uh that cover societies
36:21
that have progressed far enough in its technological maturity, you always see two pillars. You have some version of
36:29
AGI and you have some version of simulations that really help guide the
36:35
society. I do see an opportunity today to really take the first crack at building the
36:41
simulation. I would not have said that even five years ago, but that is a conviction that we have built up over
36:48
the years as we are going deep into this research. And what's exciting is there's a clear use case today that can serve
36:54
our users. But then there's a lot of innovation that is yet to come that I do
36:59
think will build up to actually building simulator that's akin to the CERN of human society.
37:06
And one of the things that my one of my my co-founder Percy sometimes say is you look at the greatest scientific
37:11
innovation they often start from an amazing measurement. Hubble telescope
37:17
really change the trajectory of how we understand the universe. Simulation can be that for human society. So the thing
37:25
that does excite me there's a lot of focus on natural sciences but how can social how can simulation really unlock
37:32
our understanding of humanity and social sciences and how can we actually use it to make our society be a better place
37:38
that's exciting I remember reading somebody was excited about you know there's a small but you
37:45
know breathtaking chance that you know the field of economics as we know it may actually become solved by simulation and
37:52
I'd extend that not just to be economics but kind of everything that deals with
37:58
uh human behavior uh and social sciences which ultimately is everything around us.
38:03
Truly wonderful. Thank you so much for joining today and sharing the story of both
38:08
Smallville and what you're now up to at Simil. I really enjoyed the conversation. Same here. Thank you for having me.
38:16
[music]
38:23
[music]
38:29
[music]
38:39
[music]

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

Rough metadata for Opus

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=lfhFmwcESRw
source_title: Simulating Humans at Scale: Simile’s Joon Sung Park
channel_or_org: Sequoia Capital
speaker: Joon Sung Park, founder/CEO of Simile; creator of Stanford “Smallville” generative agents work
host: Sonya Huang, Sequoia Capital
published_at: Jun 16, 2026
captured_at: 2026-07-08
captured_by: Nick
capture_method: YouTube screenshot + pasted transcript
content_type: human-behavior simulation / generative agents / synthetic populations / market simulation / social science simulation / Smallville / Simile / behavioral foundation models / RCT modeling / representative panels / convergence-divergence evaluation / simulated decision labs

source_reliability_context: Primary-ish interview with Joon Sung Park discussing his own Stanford generative-agents research and Simile’s applied simulation work. Strong source for behavioral simulation doctrine, synthetic populations, agent memory/planning/reflection, validation methods, and social-science-scale simulation ambition. Treat performance claims and company metrics as speaker-provided; useful strategic signal, not independent proof.

priority: 4.75/5
depth: strategic architecture / simulation substrate reference
recommended_status: route to OMNI Simulation Lab, product research, medspa/consumer behavior modeling, workflow stress testing, clinical safety simulation, population panels, eval generation, and Longitudinal Intelligence doctrine.

Topic tags:
[Simile, Joon_Sung_Park, Smallville, generative_agents, human_behavior_simulation, social_simulation, synthetic_populations, agent_memory, planning, reflection, behavioral_foundation_model, CPU_vs_GPU_intelligence, rational_models, human_values_preferences_taste, say_do_gap, representative_panels, Gallup, RCTs, concept_testing, earnings_call_simulation, multi_agent_simulation, convergent_simulation, divergent_simulation, TVD, confidence_bootstrap, CERN_of_human_society, OMNI_Simulation_Lab, Longitudinal_Intelligence]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4.75/5
Depth: strategic architecture / simulation substrate reference
Recommended status: preserve as a major source for simulation as a product/eval layer, not as direct authority.

Core takeaway

This source is not about “better chatbots.” It is about a different class of AI system:

Models that simulate human behavior, populations, and downstream social effects.

Park’s starting point is that frontier models encode enough human behavior from web/social data that, when probed correctly, they can produce plausible micro-behaviors. Smallville pushed that into a simulated town of 25 agents with persona, memory, planning, reflection, routines, work, relationships, and emergent events like a Valentine’s Day party.

OMNI translation:

OMNI should eventually have a Simulation Lab: not to decide truth, but to stress-test workflows, patient journeys, messaging, medspa offers, operational policies, and edge-case behaviors before real-world rollout.

Simulation is not authority.
Simulation is a preview, stress test, and hypothesis generator.

Key concepts to preserve
1. Simulation becomes possible because LLMs encode human micro-behavior

Park says his team observed that LLMs contain a lot of human behavior embedded in training data from the web and social media. If prompted from the right angle, they can generate interesting answers to “what would person X do in this situation?”

OMNI keeper:

This supports a new layer:

behavioral_simulation_layer

Not for factual authority, but for modeling likely user/staff/patient reactions.

Potential use cases:

patient response to GLP-1 onboarding
medspa offer/conversion testing
staff workflow friction
family caregiver behavior in SNF workflows
missed check-in patterns
provider adoption resistance
message tone testing
pricing/package reaction

Doctrine candidate:

LLMs can simulate plausible behavior, but plausible behavior is not ground truth.

2. Generative agents need memory, planning, and reflection

Smallville was not just 25 one-shot prompts. Park describes generative agents paired with AI models plus memory, planning, and reflection to create lived experience over time.

OMNI translation:

If OMNI simulates users or staff, they need state:

persona
goals
constraints
prior events
memory
schedule
preferences
response tendencies
interaction history

Doctrine candidate:

Useful behavioral simulation requires longitudinal agent state, not one-shot personas.

3. The old way to test social products is field testing, which can cause real harm

Park frames the original motivation from social computing: large-scale social platforms are hard to test because the real question is not UI alone, but how thousands or millions of people interact and produce emergent good or bad outcomes. Today, teams often only discover that by field testing, which can have real cost if the design propagates negative behavior.

OMNI keeper:

This is directly relevant to healthcare/product operations.

Before launching a workflow, simulate:

escalation failure
confusing consent flow
patient anxiety after lab abnormality
staff misunderstanding
bad automated message timing
provider ignoring alert fatigue
offer seeming coercive
family/caregiver conflict

Doctrine candidate:

Simulation is valuable when real-world testing carries cost, delay, or harm.

4. Simile is building the “GPU of intelligence,” not the CPU

Park contrasts frontier models as “CPU of intelligence”: rational, superhuman at objective problems with right answers. Simile wants something closer to a “GPU of intelligence”: many human-like subunits representing diverse values, preferences, and tastes.

OMNI translation:

This distinction is excellent.

OMNI’s core clinical/business reasoning may use “CPU-like” frontier models.

But simulation needs “GPU-like” diversity:

many patient types
many staff types
many provider personalities
many buyer segments
many family/caregiver roles
many risk tolerances
many socioeconomic realities

Doctrine candidate:

Simulation value comes from diversity of plausible agents, not one rational super-agent.

5. Real data matters because of the say-do gap

The host asks why not just ask Claude to roleplay a 34-year-old woman in a coastal metro area. Park answers with the “say-do gap”: LLMs are trained largely on edited online things people say, while simulation needs behavioral data about what people actually do. Simile collects behavioral and life-story data to close that gap.

OMNI keeper:

This is crucial.

Generic personas are weak.
OMNI should ground simulations in actual operator data where ethically allowed:

real intake drop-offs
real booking behavior
real follow-up response rates
real SNF documentation misses
real provider edits
real medspa purchase patterns
real message replies
real no-show patterns

Doctrine candidate:

Behavioral simulations are only as useful as the behavioral data grounding them.

6. “Tell me the story of your life” as long-tail behavioral context

Park says interviews are useful for long-tail information. His original study literally asked people to tell the story of their life. That kind of data helps build a translational layer between attitudes and behavior.

OMNI translation:

This is relevant to Longitudinal Intelligence.

A patient is not just:

BMI
age
meds
labs
chief complaint

They are:

motivation
fear
trust
access
shame
prior failures
family pressure
financial constraints
personal goals

Doctrine candidate:

Long-tail narrative context explains behavior better than demographics alone.

7. Company = machine for depth search

Park distinguishes research from company-building: research explores breadth; a company is a machine for depth search around a single conviction, with resources and people focused on climbing one hill.

OMNI keeper:

This is useful founder doctrine.

OMNI cannot remain abstract thesis forever. It needs a hill.

Possible hill:

SNF documentation + care coordination
medspa operating substrate
GLP-1/TRT async care
Build-OS for healthcare
D7 document intelligence

Doctrine candidate:

A company is a machine for depth search around one hill.

8. Simulated populations can answer many questions from one data collection pass

Simile collects data from real people, creates agents/simulations of those people, and lets customers ask many questions beyond the original survey domain.

OMNI translation:

This is not “survey once, answer once.”
It is “build a reusable simulated panel.”

For OMNI:

build medspa buyer panel
build GLP-1 patient panel
build provider-user panel
build front desk/staff panel
build SNF-family/caregiver panel

Doctrine candidate:

A simulated panel turns one data-collection effort into many hypothesis tests.

9. Concept testing scales from 5–10 ideas to thousands

Park says customers often start with concept testing: new product idea, market message, or concept. The promise becomes testing thousands of ideas across thousands of subpopulations, not just five to ten.

OMNI keeper:

This is directly useful for BLOOM/NAKED/OMNI growth.

Simulate:

memberships
pricing
event messaging
before/after language
male hormone positioning
GLP-1 framing
RLT offers
patient financing
concierge care copy
reactivation campaigns

Doctrine candidate:

Simulation expands testing bandwidth before live-market spend.

10. Multi-agent simulation enables second-order impact analysis

Park says customers move from simple concept testing to temporal product testing and multi-agent simulation, including earnings-call simulations. The bigger promise is modeling downstream implications and second-order effects of decisions.

OMNI translation:

This is important for healthcare operations.

Many decisions have second-order effects:

cheaper Botox pricing may alter provider workload
AI message automation may reduce calls but increase anxiety
GLP-1 membership may increase churn if expectations mismatch
a new intake gate may reduce risk but lower conversion
direct-to-patient lab alerts may increase support burden
staff incentive changes may distort booking behavior

Doctrine candidate:

Simulations are most valuable when the question has second-order effects.

Evaluation doctrine
11. Simile validates at population-distribution level

Park says their quantitative north-star metric compares distributions of ground truth versus simulated responses using total variation distance. He cites TVD under 0.15 as strong evidence for decision-making in that class of use cases.

OMNI keeper:

For OMNI, simulated outputs need explicit confidence metrics.

Potential metrics:

distribution match
rank-order agreement
segment-level error
scenario pass/fail
qualitative evaluator agreement
calibration against real campaigns
false-confidence flags

Doctrine candidate:

Simulation outputs require calibration metrics before they can influence decisions.

12. Convergent versus divergent simulations

Park distinguishes simulations that converge from simulations that diverge. In convergent simulations, small errors may not matter because the system pulls toward a stable pattern. In divergent simulations, small differences can lead to different outcomes, so the value is showing a range of futures and confidence over repeated runs.

OMNI translation:

Excellent doctrine.

Convergent OMNI simulations:

whether a confusing form causes drop-off
whether a price point feels expensive
whether staff miss a required field
whether a message reads as cold

Divergent OMNI simulations:

market positioning over months
staffing culture changes
family conflict patterns
viral reputation effects
compliance incident cascades
payer/referral dynamics

Doctrine candidate:

Simulation findings must be labeled convergent or divergent before acting on them.

13. Simulation needs its own statistical standards

Park says simulation is like day one of inferential statistics: the field needs thresholds and standards, analogous to how science developed conventions like p < 0.05.

OMNI keeper:

This is important.

OMNI cannot treat synthetic simulation as self-validating.

It needs:

confidence levels
repeat runs
calibration against real data
uncertainty reporting
segment-level caveats
ground-truth comparison
“do not use for” warnings

Doctrine candidate:

Synthetic simulation needs explicit uncertainty standards, not persuasive narratives.

Larger ambition
14. The long-term vision is a CERN of human society

Park frames the long-term opportunity as simulation for social science: economics, bank runs, climate cooperation, democracy collapse, policy impact, and large-scale societal questions. He says future simulations might cost $100M and take months but answer fundamental questions.

He closes by saying advanced societies in science fiction often have both AGI and simulations to guide society, and that simulation could become a Hubble-like measurement instrument for human society.

OMNI translation:

Do not overbuild this now, but preserve the frame.

OMNI’s smaller version:

CERN of healthcare operations

Not to simulate civilization, but to model:

patient journeys
operational bottlenecks
provider adoption
documentation quality
marketing-market fit
safety incidents
staffing/incentive effects
care coordination failures

Doctrine candidate:

Simulation can become a measurement instrument for human systems.

OMNI translation

This source creates a new optional module:

OMNI Simulation Lab
  ├─ simulated patient panels
  ├─ simulated medspa buyer panels
  ├─ simulated provider/staff panels
  ├─ simulated caregiver/family panels
  ├─ workflow stress tests
  ├─ message/copy/concept tests
  ├─ second-order effect simulations
  ├─ calibration against real data
  └─ uncertainty + convergence reporting

The rule is:

Simulation informs design. It does not commit truth.

For OMNI, simulated behavior should never become:

clinical diagnosis
treatment authority
medication decision
patient consent substitute
real-world outcome proof
compliance approval
domain commit

But it can be incredibly useful for:

designing better workflows
generating edge cases
prioritizing experiments
evaluating messaging
rehearsing staff/patient reactions
finding failure modes before launch
Likely OMNI landing zones

OMNI Simulation Lab

synthetic patient/staff/customer panels
workflow simulations
offer/message testing
second-order effect modeling
convergence/divergence labeling

Longitudinal Intelligence

narrative context
behavioral data
say-do gap
patient journey modeling
motivation/friction prediction

Build-OS

simulated user testing before release
workflow stress tests
edge-case generation
synthetic eval cases

D7 / Evidence Plane

simulation provenance
data grounding
model/config version
confidence reporting
source/behavioral-data lineage

BLOOM / NAKED / Growth

concept testing
pricing simulation
campaign reactions
membership design
offer segmentation

Clinical Safety

patient-message anxiety testing
consent comprehension testing
escalation-path simulation
staff miss/failure simulation
Doctrine candidates
LLMs can simulate plausible behavior, but plausible behavior is not ground truth.
Useful behavioral simulation requires longitudinal agent state, not one-shot personas.
Simulation is valuable when real-world testing carries cost, delay, or harm.
Simulation value comes from diversity of plausible agents, not one rational super-agent.
Behavioral simulations are only as useful as the behavioral data grounding them.
Long-tail narrative context explains behavior better than demographics alone.
A company is a machine for depth search around one hill.
A simulated panel turns one data-collection effort into many hypothesis tests.
Simulation expands testing bandwidth before live-market spend.
Simulations are most valuable when the question has second-order effects.
Simulation outputs require calibration metrics before they can influence decisions.
Simulation findings must be labeled convergent or divergent before acting on them.
Synthetic simulation needs explicit uncertainty standards, not persuasive narratives.
Simulation can become a measurement instrument for human systems.
Simulation informs design. It does not commit truth.
Net-new / sharpen / affirm
Net-new candidates

OMNI_Simulation_Lab
Governed environment for synthetic patient, staff, provider, buyer, and caregiver simulations used to stress-test workflows, messages, product concepts, and operational policies.

simulated_panel
Reusable synthetic population grounded in real behavioral/narrative data and calibrated against observed outcomes.

convergence_label
Metadata flag indicating whether a simulation question is likely convergent, divergent, or unknown.

behavioral_grounding_data
Real-world behavioral, narrative, and interaction data used to improve simulated personas beyond generic demographic roleplay.

simulation_confidence_report
Output artifact containing scenario, population, assumptions, repeat count, uncertainty, convergence/divergence status, calibration history, and decision limits.

say_do_gap_policy
Reminder that stated attitudes and actual behavior diverge; simulations should be grounded in behavior where possible.

Sharpen existing

Longitudinal Intelligence
Now has a behavioral-simulation extension: life story, motivation, barriers, and behavior patterns.

Build-OS
Can use simulated users/staff as pre-release workflow testers.

Evaluation Framework
Synthetic simulations can generate eval cases but need calibration and uncertainty labels.

Knowledge Reservoirs
Need separate buckets for observed behavior, simulated behavior, and inferred persona traits.

Polaris / Evidence Plane
Must distinguish real data, synthetic panel output, and model-generated projection.

Affirm
behavioral context is more than demographics
real-world testing can be costly/harmful
synthetic agents can help find product/workflow failure modes
second-order effects matter
simulation requires evals/calibration
convergence versus divergence matters
representative data matters
social systems need different AI than objective problem-solving systems
Reject / do not over-import
Do not treat simulated patients as real patients.
Do not use synthetic behavior as clinical truth.
Do not let simulation override provider/domain authority.
Do not assume generic LLM personas are representative.
Do not ignore privacy/consent when grounding simulations in real data.
Do not use simulation outputs without uncertainty labels.
Do not confuse “plausible” with “predictive.”
Do not use simulated market response as a substitute for actual launch data.
Do not allow synthetic panels to launder bias into product decisions.
Do not let a simulation become a domain commit.
Hard read

This is a major OMNI Simulation Lab source.

The keeper:

The next AI substrate is not only agents that do work. It is simulated populations that let teams test how humans may respond before exposing real humans to the experiment.

Shortest OMNI version:

OMNI should eventually include governed behavioral simulation: synthetic patient, staff, provider, caregiver, and buyer panels grounded in real data, labeled by confidence and convergence/divergence, used to test workflows, messaging, offers, and second-order effects. But simulation remains advisory only: it informs design and eval generation; it never commits clinical, operational, or financial truth.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

sounds like a good one here as well!!

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-08` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**HEADLINE VERDICT.** `tier: full_semantic` (new-axis-opening; Knox 4.75/5 strategic-architecture). **This is the wave's FIRST behavioral-simulation / synthetic-population source — a genuinely NEW capability axis orthogonal to the entire 201–241 agent-execution/eval/security/runtime spine.** Where 201–241 answer *"how does OMNI govern agents that DO work,"* 242 opens *"how could OMNI govern agents that SIMULATE humans before real humans are exposed to a decision."* The keeper is not a chatbot; it is **simulated populations as a preview / stress-test / hypothesis-generator layer** — and it lands cleanly on OMNI's deepest existing law: **simulation informs design, it never commits truth** (`projection≠truth` `D0THES-DEC-033` + candidate≠commit + `GRD-036`). Real spine-touching yield is small but sharp: (a) the **say-do gap + long-tail life-story narrative** deepens **Longitudinal Intelligence / thesis §1 longitudinal-coherence** (behavior > demographics — "care remembers the patient" restated from the behavioral-science side); (b) **CPU-vs-GPU-of-intelligence** sharpens §B model-pluggability (care-reasoning = rational "CPU" models; simulation = diversity "GPU" models); (c) **convergent-vs-divergent labeling** + **distribution-match/TVD calibration** + **simulation-needs-its-own-statistical-standards** extend the eval spine (215/216/222/230) with a *population-distribution* + *uncertainty-honesty* dimension none of those named. Everything else is a **new optional module (OMNI Simulation Lab)** that is `doctrine=ABSENT/PARTIAL · build=absent` across the board (grep: no `simulation`/`generative agent`/`synthetic panel`/`say-do`/`convergence` anywhere in `app lib components scripts supabase`; "behavioral" = email-nudge templates only; "eval"/"confidence" = disclosure-policy + clinical-AI gates, unrelated). **Status = watch across the board — this is a preserve-the-frame source, not a build-now source; nothing binds.** Talking-their-book caveat: founder + Sequoia host; the 85%/TVD<0.15/CVS/Gallup claims are speaker-asserted.

#### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Behavioral simulation is now possible (LLMs encode human micro-behavior) | A NEW AI-substrate axis: probe a model "the right angle" to get plausible human reactions — for *modeling* likely patient/staff/buyer behavior, never as fact | §B AI-substrate (new axis) · OMNI Simulation Lab (new module) · future-watch | "models can actually encode human behavior" [4:54] | ABSENT | absent | none | vocabulary (new-axis) | watch |
| 2 | Generative agents need memory + planning + reflection (longitudinal state) | Simulated actors need persona/goals/constraints/history/schedule/state over time — not one-shot personas; longitudinal agent-state | Knowledge-Reservoirs · Clinical-Memory (analog) · CNS · Simulation Lab | "generative AI model with memory planning and reflection" [2:00] | PARTIAL | absent | none | vocabulary | watch |
| 3 | Simulation ≠ authority (preview / stress-test / hypothesis generator) | Sim output informs design + generates edge cases; it NEVER becomes diagnosis, treatment, consent, outcome-proof, or a domain commit | thesis §1 · `projection≠truth` (`D0THES-DEC-033`) · candidate≠commit · `GRD-036` · Polaris | "prepare for those futures… show diversity of outcomes" [30:43] | AFFIRM | absent | none | spine (AFFIRM) | watch |
| 4 | Field-testing carries real cost/harm → simulate first | Simulate escalation failure, confusing consent, anxiety-after-abnormal-lab, coercive-offer BEFORE live rollout — value rises with real-world cost | Build-OS (pre-release testing) · Clinical-Safety · Simulation Lab | "it actually comes at a real cost" [5:51] | PARTIAL | absent | none | vocabulary | watch |
| 5 | CPU vs GPU of intelligence (rational model vs diverse human-like subunits) | Care/business *reasoning* may use rational "CPU" frontier models; *simulation* needs "GPU" diversity — many patient/staff/buyer types, values, tastes | §B model-pluggability (sharpen — "capability surface not model surface") · Simulation Lab | "CPU of intelligence unit… GPU of the intelligence unit" [20:57–21:15] | PARTIAL | absent | none | vocabulary | watch |
| 6 | Say-do gap → simulations must be grounded in behavioral data | LLMs train on what people *say* (edited web); real behavior differs. Ground sims in observed operator behavior where ethically allowed | thesis §1 longitudinal-coherence · Observation contract · Evidence-Plane · Simulation Lab | "things people say… things people actually do… gap is real" [16:42] | PARTIAL | absent | none | spine-adjacent | watch |
| 7 | Long-tail narrative context ("tell me the story of your life") | Behavior is explained by motivation/fear/trust/prior-failures/constraints, not BMI+age+meds — the translational layer between attitude and behavior | thesis §1 (Longitudinal Intelligence) · Clinical-Memory · Intake · Reservoirs | "just tell me the story of your life" [17:13] | AFFIRM | partial | none | spine (AFFIRM) | watch |
| 8 | Company = machine for depth-search around one hill | Operator/founder doctrine: research explores breadth; a company focuses resources on climbing one hill (OMNI needs a wedge) | operator-context · Build-OS sequencing (meta) | "Company is a machine for depth for search" [10:54] | n/a | n/a | none | low-authority-watch | watch |
| 9 | Simulated panel (one data pass → many questions) | Reusable synthetic population grounded in real data, calibrated vs outcomes; turns one collection effort into many hypothesis tests | Simulation Lab · Knowledge-Reservoirs · BLOOM/NAKED growth | "answer a large number of questions… beyond original domain" [15:08] | ABSENT | absent | none | vocabulary | watch |
| 10 | Concept testing scales 5–10 → thousands of ideas × subpopulations | Test memberships/pricing/messaging/offers across thousands of segments before live-market spend | Growth/BIZOPS-slice · Simulation Lab · Product-Intelligence | "test instantly thousand different ideas across… sub populations" [22:35] | ABSENT | absent | none | vocabulary | watch |
| 11 | Multi-agent simulation → second-order / downstream effect analysis | Model second-order effects (EV launch → non-EV perception; AI-automation → anxiety; new intake gate → conversion drop) before deciding | CNS (multi-agent) · Simulation Lab · BIZOPS | "map out all the second order impact of the decisions" [13:43] | PARTIAL | absent | none | vocabulary | watch |
| 12 | Population-distribution validation (TVD threshold) | Sim outputs need explicit calibration metrics vs ground truth — distribution match, not vibes; TVD<0.15 as a decision threshold | Polaris/proof · operating-metrics · eval spine (215/230) | "TVD… less than 0.15… strong evidence for decision" [27:39] | PARTIAL | absent | none | vocabulary | watch |
| 13 | Convergent vs divergent simulations (label before acting) | Convergent Qs tolerate error (pull to stable pattern); divergent Qs need repeat-run confidence + shown range of futures. Label BEFORE acting | Simulation Lab · Polaris/proof · eval spine | "simulations that converge… simulations that diverge" [28:24] | ABSENT | absent | none | spine-adjacent (net-new) | watch |
| 14 | Simulation needs its own statistical standards (day-1 of inferential stats) | Synthetic sim is not self-validating — needs confidence, repeat runs, calibration, uncertainty reporting, "do-not-use-for" warnings; p<0.05 analog | Polaris/proof · Evidence-Plane provenance · eval spine | "day one of inferential statistics… p less than 0.05" [31:22] | PARTIAL | absent | none | spine-adjacent | watch |
| 15 | CERN / Hubble of human society (long-term measurement instrument) | Aspirational far-frame: sim as a measurement instrument for human systems (economics, bank runs, democracy). OMNI's small version = "CERN of care operations" — do NOT overbuild | future-watch · thesis §1 (aspirational) | "CERN of human society… Hubble telescope" [37:06–37:11] | ABSENT | absent | none | future-watch | watch |

**Doctrine/build roll-up:** 15 clusters — **doctrine: 2 AFFIRM (3, 7) · 7 PARTIAL (2,4,5,6,11,12,14) · 5 ABSENT (1,9,10,13,15) · 1 n/a (8)** · **build: 0 present · 1 partial (7 — Clinical-Memory/Intake exist but no life-story narrative capture) · 14 absent**. The dominant pattern is a NEW pattern for this wave: **`doctrine=ABSENT/PARTIAL · build=absent` on a NEW capability axis** (vs the 201–241 dominant `doctrine=AFFIRM · build=absent` on the already-spined agent-execution axis). Simulation is the one source that adds a genuinely new *frame direction*, not just security/eval/runtime vocabulary under the existing spine.

#### B. Net-new primitives  *(dedup vs registry §2's ~60 mints [201–239] + standard OMNI primitives — NONE of the ~60 touch simulation; this source opens a new family. All "dedup-pending, Opus-main verifies." Candidate over-flag; nothing asserted-committed.)*

- `omni_simulation_lab` — governed environment for synthetic patient/staff/provider/buyer/caregiver panels used to stress-test workflows, messages, concepts, policies; advisory-only — **EXISTS-AS: net-new umbrella MODULE (no simulation primitive in registry §2). Mint as an optional-module LABEL, not a god-concept (`GRD-026`/`GRD-035`); binds nothing. dedup-pending, Opus-main verifies.**
- `behavioral_simulation_layer` — the §B substrate capability that generates plausible human reactions from grounded personas — **EXISTS-AS: net-new §B axis; sharpens "capability surface not model surface" but adds a NEW capability class. dedup-pending.**
- `simulated_panel` — reusable synthetic population grounded in real behavioral/narrative data + calibrated vs observed outcomes — **EXISTS-AS: net-new; composes Knowledge-Reservoirs + 232 `agent_ready_unstructured_data_substrate`. dedup-pending.**
- `convergence_label` — per-question flag: convergent | divergent | unknown (determines whether error tolerance / repeat-run confidence is required before acting) — **EXISTS-AS: net-new (strong; genuinely new eval dimension). dedup-pending.**
- `behavioral_grounding_data` — real observed behavior/interaction/narrative data used to move personas beyond generic demographic roleplay — **EXISTS-AS: partial = Observation contract + 232 `agent_ready_unstructured_data_substrate`; the SIMULATION-consumer framing is net-new. dedup-pending.**
- `say_do_gap_policy` — principle: stated attitude ≠ actual behavior; ground sims in behavior; never treat "plausible" as "predictive" — **EXISTS-AS: net-new PRINCIPLE; adjacent to thesis §1 behavior-over-demographics. dedup-pending.**
- `simulation_confidence_report` — output artifact: scenario + population + assumptions + repeat-count + uncertainty + convergence/divergence + calibration history + decision-limits ("do-not-use-for") — **EXISTS-AS: net-new; specializes Polaris proof-bundle + D7/Evidence-Plane provenance for sim outputs. dedup-pending.**
- `distribution_match_metric` — population-distribution calibration metric (e.g. TVD) with decision threshold — **EXISTS-AS: net-new; sharpens 215 eval-score + operating-metrics with a distribution (not per-task) dimension. dedup-pending.**
- `cpu_vs_gpu_intelligence` — distinction: rational objective-answer models ("CPU") vs diversity-of-values models ("GPU") — **EXISTS-AS: net-new NAME; sharpens §B model-pluggability (care=CPU, sim=GPU-diversity). dedup-pending; likely NAME-only.**
- `second_order_effect_simulation` — modeling downstream/second-order effects of a decision across a simulated market/population — **EXISTS-AS: net-new-ish; composes CNS multi-agent + Simulation Lab. dedup-pending.**
- `simulation_statistical_standard` — field-level confidence/threshold discipline for synthetic sim (uncertainty-honesty, repeat runs, calibration) — **EXISTS-AS: partial = Polaris proof + evidence-not-authority; the "sim has NO deterministic ground truth so needs its own standard" framing is net-new. dedup-pending.**
- (reconcile / DO NOT re-mint) `longitudinal_narrative_context` (life-story) → **EXISTS-AS: thesis §1 Longitudinal Intelligence + Clinical-Memory + Intake — sharpen, do not mint** · `simulation_as_measurement_instrument` (CERN/Hubble) → **future-watch NAME, not a mechanism** · `depth_search_company` (one-hill) → **operator-context NAME, not an OMNI primitive**.

#### C. Reread flags
- **Metadata PRESENT** (operator block at top of §3 Review 001) — lifted verbatim into §0/§0.1, `identity_confidence: high_from_operator_metadata`. No §3-C metadata-missing reread flag. (Contrast 230/236 which were transcript-derived.)
- **Talking-their-book:** founder (Simile) + Sequoia investor host. All performance/scale claims (85% accuracy vs self-replication [12:07], TVD<0.15 [27:39], CVS half-year partnership [13:05], Gallup strategic partnership [14:42], "thousand people of US population" validation [12:01]) are **speaker-asserted, not independently verified** — treat as strategic signal, never proof.
- **New-family flag for Opus-main:** this is the FIRST simulation source (242) in the wave; the registry §2 has NO simulation primitives. All B-primitives above open a new family — Opus-main should verify none collide with a standard OMNI primitive before folding, and decide whether `omni_simulation_lab` should exist as a **future-watch module** vs be absorbed into Build-OS pre-release-testing + Polaris. Watch for near-siblings arriving later in 243–246.
- **Watch for eval-spine collision:** clusters 12/13/14 (distribution-match · convergence-label · sim-statistical-standard) are adjacent to the 215/216/222/230 eval spine but are a DIFFERENT thing (they evaluate *simulated populations*, not *agent task-outputs*). Opus-main: keep distinct (simulation-eval ≠ agent-eval), do not merge.

#### D. One-line hard read + strongest OMNI line
- **Hard read:** The next AI substrate is not only agents that *do* work — it is simulated populations that let you test how humans may respond *before* exposing real humans to the experiment; but for OMNI a simulation is only ever a preview, never a verdict.
- **Strongest OMNI line:** OMNI should eventually host a **governed behavioral-simulation lab** — synthetic patient/staff/provider/caregiver/buyer panels grounded in *real behavioral + life-story data*, labeled by **confidence + convergence/divergence**, used to stress-test workflows, messaging, offers, and second-order effects — but simulation stays strictly **advisory: it informs design and generates eval/edge cases; it NEVER commits clinical, operational, or financial truth** (`projection≠truth` `D0THES-DEC-033` + candidate≠commit + `GRD-036`; and the same say-do-gap that motivates grounding-in-real-data also forbids laundering bias or bypassing consent/PHI when doing so).

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` (Opus-main folds the registry-fold packet UP — NOT edited by this per-source run) · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` (receipts; Opus-main) · per-source deep-read: §3 Review 003 (this file) · impact: **§B (new behavioral-simulation axis; CPU/GPU model-pluggability sharpen) · thesis §1 Longitudinal-Intelligence (say-do gap + life-story narrative, AFFIRM) · Build-OS (pre-release simulation testing) · Polaris/proof + eval-spine (distribution-match/convergence-label/sim-statistical-standard) · CNS (multi-agent second-order sim) · Knowledge-Reservoirs (grounding data) · new optional module: OMNI Simulation Lab · future-watch (CERN/Hubble frame)** · promotion: `watch` (preserve-the-frame; `doctrine=ABSENT/PARTIAL·build=absent`; nothing binds — `GRD-036`)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-08` — Opus formal extraction pass: §0/§0.1 metadata lifted verbatim from Review 001 operator block (`identity_confidence: high_from_operator_metadata`); proposed slug `simile-joon-sung-park-human-behavior-simulation` (file NOT renamed); §3 Review 003 authored (15 concept clusters + ~11 net-new simulation-family primitives, all dedup-pending; reread flags; hard read); §4 pointers filled; §0.5 ticked; status flipped `raw_dropped → analyzed`. Binds nothing (`GRD-036`/`GRD-044`). Registry/coverage/anchor-ledger NOT edited (this run's contract; Opus-main folds cross-source).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

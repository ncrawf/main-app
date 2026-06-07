# EVSRC-2026-000058 — Making the Case for the Terminal as AI's Workbench: Warp's Zach Lloyd

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1; Knox read in §3 Review 001. Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000058`  ·  filename: `EVSRC-2026-000058_warp-lloyd-terminal-as-ai-workbench.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=8PZ4ZjiB0os`
- source_title: `Making the Case for the Terminal as AI's Workbench: Warp's Zach Lloyd`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  series: `Training Data`  ·  published_at: `2026-01-27`  ·  views_at_capture: `62,537`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `interview`  ·  source_reliability_context: `practitioner / founder-operator (dev tools / agent workbench)`  ·  topic_tags_light: `[agent_workbench, ide_terminal_convergence, agent_orchestration, prompting_intent_bottleneck, cloud_agent_swarms, output_summarization_truncation, dev_tools_competition]`

## §0.1 — People / authorship / authority context  *(filled from screenshot description)*
- primary speaker(s):
  - name: `Zach Lloyd` · role_in_source: `interviewee` · affiliation_at_publication: `Warp (founder/CEO)` · speaker_type: `founder / operator (dev tools)` · authority_context: `high relevance on **the convergence of IDEs + terminals into new "workbenches" built for prompting + agent orchestration**; thesis that "coding will be solved" within a few years, making **human expression of intent the ultimate bottleneck**; managing **swarms of cloud agents**; why terminal's time-based/text-oriented format suits agent orchestration; competing vs subsidized Anthropic/OpenAI tools; output summarization/truncation, perf measurement, autocomplete models. Own-product thesis; not a standard` · identity_confidence: `high_from_screenshot`
  - name: `Sonya Huang` · role_in_source: `host` · affiliation_at_publication: `Sequoia Capital` · speaker_type: `investor` · authority_context: `framing / host` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `Sonya Huang`  ·  event_context: `Sequoia "Training Data" podcast`  ·  perspective / conflict notes: `Warp CEO — frames terminal-as-agent-workbench favorably. **OMNI relevance: "human expression of intent as the ultimate bottleneck" + agent-orchestration workbench ≈ §B AI-substrate axis (CNS as orchestration/control plane, intent→candidate→commit) + Build OS (agent lanes, swarms, traces). Workbench/orchestration-surface framing → P5 surface / agentic-runtime console.** Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): a Warp founder = high relevance on agent workbenches/orchestration; claims ("coding will be solved," intent-as-bottleneck, terminal-as-best-orchestrator) still route through evidence → interpretation → gated promotion.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] EVRUN needed? (yes — full_semantic; §B intent-orchestration / Build OS agent lanes) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️


Search in video
Introduction
0:00
Just the general form factor of the terminal is perfect for agentic work because everything is like timebased.
0:06
It's all about input of text and output of text. You get to log what you're doing. You can multitask agents in the
0:12
terminal really easily. And so I think it's been like actually a great stroke of luck for us in a lot of ways that the
0:18
terminal has become the center of agentic development. It's a huge opportunity for us.
0:41
In this episode, Zach Lloyd, founder of Warp, reveals why the terminal is becoming the center of AI powered
0:46
development. Zach shares how coding interfaces are converging into a new workbench built for prompting and agent
0:52
orchestration and why the next frontier isn't developers typing prompts but ambient agents running in the background
0:58
that autonomously respond to system events like server crashes or security incidents. We discuss the brutal
1:04
competitive dynamics of the coding market and why model providers are racing into the application layer. And
1:09
finally, Zach shares his thesis that coding is nearly solved and that the ultimate bottleneck for AI will be
1:14
humans ability to clearly express intent. Enjoy the show.
Meet Zach Lloyd: Founder of Warp
1:20
Zach, thanks so much for taking the time to join today. Thanks for having me on. It's good to be here.
1:25
Before we get started, can you tell our audience a little bit about yourself and what is Warp and what company did you
1:31
set out to build and why? Yep. So, I am Zach. I'm the CEO and founder of Warp. Warp is a developer
1:38
focused startup. Our goal has always been just like help prodevelopers ship
1:43
better software more quickly. The uh the product that we've built it it has an
1:48
interesting history. We're like 5 years old. We started off building a modern uh
The Evolution of Warp: From Terminal to Agent Workbench
1:53
reimagination of the terminal and today the product has evolved into it's sort
2:00
of a terminal with agents built in uh is is one way of thinking about it. It's probably simplest. It's a it's a
2:07
workbench for building software with agents is kind of the more general way of of framing it.
2:12
Awesome. Let's dive right in. Um, what made you decide that the terminal was the right place to build?
The Importance of the Terminal in Modern Development
2:19
So, I've been a developer for a really long time. I've always used the terminal. Uh, in prior life, I was a
2:25
principal engineer at Google. I used to run engineering on Google Docs. Uh, I'm not a good terminal user. like I always
2:31
worked with people who were good at using it and I saw that you know you get just a ton of stuff done as a developer
2:38
because of where it sits in the stack. So it's like a super duper powerful
2:44
thing if you know how to use it right. But the sort of stock version or classic
2:49
version of the terminal I think is like a horrible product. It's hard to learn. It's easy to make mistakes in. The mouse
2:55
doesn't work. And so, you know, I was I was interested in how do you build something that's impactful for
3:02
developers? How do you build something that helps more good software exist in the world? And trying to reimagine the
3:07
terminal felt like a a cool thing to take on. H and how much of the thesis around
Single Player vs Multiplayer Terminal Use
3:12
making the terminal great for single player versus multiplayer? It's a good question. So, the the multiplayer part was going to be with
3:19
the business model was going to be. So, it's like, you know, I came from the Google Docs world. I built collaborative
3:25
software. I think the closest analogy would be something like Postman where you know they have like a collaborative
3:31
API platform. We were going to do that uh around the terminal where you could share commands, you could share sort of
3:36
like runbooks, um share incident response manuals and warp actually has
3:42
all that stuff and it's super it's super useful not just for people but for
3:47
agents at this point to have all that knowledge baked into the product. Um, so
3:52
that was like going to be the the business model, but where we actually started was just like the hands-on keys
3:59
interaction with the terminal itself. Could we reimagine the developer
4:06
experience of that? So we spent, you know, the first like year, year and a half of just like how would we like this
4:12
thing to work? How do we want the input into the terminal to work? How do we want the output to work? and like how can we make it just like easier without
4:20
uh diminishing the power of the tool. Yeah. Awesome. And you made the decision to focus on rebuilding reimagining the
4:26
terminal pre generative AI pre-coding models taking off. Um
4:31
do coding models and agents do they change your answer to the question of like how important is the terminal as the workbench?
4:38
Terminal is like ironically more important now. uh the terminal has become I think the preferred form factor
4:46
for working with agents. I mean basically you can work with them in in the IDE or you can work with them in the
4:53
terminal. Um or you like you can create some other workbench which you know warp
4:59
you can see warp that way. Actually warp started as a terminal is a broader workbench now for agents but just the
5:04
general form factor of the terminal is perfect for agentic work because everything is like timebased. It's all
5:11
about input of text and output of text. You get to log what you're doing. You can multitask agents in the terminal
5:16
really easily. And so I think it's been like actually a great stroke of luck for us in a lot of ways that the terminal
5:24
has become the center of agentic development. It's a huge opportunity for us. H I'm curious if you thought there we
5:31
were headed towards a world where people just weren't going to spend time in the IDE and do you think that's been accelerated now? I think that the kind
5:37
of tools are morphing. Um and so you know pre- agent world you had
5:44
pretty clear distinction between terminals and idees. Um, today you have
5:50
tools like warp which are, you know, we've like grown from the terminal and
5:55
added a bunch of IDE features like code editor and code review features and and
6:02
the file tree and like we get yelled at on the Twitter for having a file tree in warp because it's not like a pure
6:08
terminal thing. But then if you look at like the latest iteration of cursor uh which you know started as an IDE it
6:14
looks a lot more like warp like the primary interface is now more of a chat interface and talking to your computer
6:21
but they you still have all the file editing things. So I don't know if I would be like terminal is going to die or the ID is going to die. What I do
6:27
feel strongly about is that the um there's going to be innovation and there is innovation happening where the form
6:35
factor is changing to match what the agentic workflow should be. So the form
6:41
factor is like it should be geared towards prompting. It should be geared towards um adding
6:47
context. It should be geared towards reviewing agent agent generated code diffs. Uh I think actually now like team
6:55
is even more important. um like especially as you have more and more agents that are not just like launched
7:01
locally by people but are coming to be launched by system events and so I think the workbench is changing and I I
7:07
actually think it will end up looking more like a terminal than an IDE but probably won't strictly speaking be a
7:13
traditional version of either and is the rough framing of you know the the reason to use each that you know
7:19
terminal is roughly equivalent to the the chatbot like you can you can chat with a coding agent and um hand off
7:25
tasks and and an IDE is roughly equivalent to like a guey for actually editing and writing code. Is that is
7:32
that the right mental model? Yeah, that's definitely where things have like started. Uh like Yeah. Right.
7:37
The ID is like Microsoft Word for your code and the um the terminal is like is
7:43
like chatting with your computer. Um, and the if you're doing professional
7:50
agentic development, which I would distinguish from vibe coding, you kind of want both of those. Like I don't
7:58
think for uh the pro use case, we're at a spot yet where you can be so disconnected from the code that you
8:05
don't need some way of like falling into hand editing it. I would think of it as like the hand editing is like almost
8:13
become like a fallback interface or a secondary interface and the primary interface now is the prompting interface
8:20
and so um yeah I basically I think that that is the right like distinction but I
8:26
think it's all kind of merging product wise merging yeah interesting um you mentioned procoders a few times what was
8:32
the decision to focus on procoders about and um how do you think that plays out over the next decade
8:38
Will there be prodevelopers left? Will everybody be a prodeveloper? So, okay, it's a great question. So,
8:43
what I think what I really care about is um helping build software that I use
8:51
every day. like there's probably 10 apps or whatever in my Mac doc and
8:57
pinned as Chrome tabs which are apps like Google Docs or Spotify or notion or
9:03
Figma or Warp which are hard to build apps that I think um it's those hard to
9:11
build apps that the world spends most of their time using and those are built I
9:16
think more by pros and they're definitely built more by enterprises and I just want be a part of like creating
9:23
that kind of software. Whereas I I do feel like the the the nonpro segment is
9:30
cool and I do think it's it's actually really it's empowering that kind of anyone can make an app at this point.
9:37
Um, but I just think like the the sort of economic value of the apps that you build with a vibe coding tool, you know,
9:43
like lovable or replet or whatever is lower uh than the economic value of the
9:48
apps built with a tool that's geared towards pros. And it's also it's just like I can't I don't think I've ever
9:54
spent my day using an app that's been built in like a no code, low code, vibe code tool, whereas I spend all of my
10:02
days uh like literally living in software that is built by pros. It's really like built for like these
10:08
immersive, hard, important, economically valuable use cases. Totally. The world is a museum of
10:14
passion project and I think that includes the the software we choose to to use every day. Yeah.
The Competitive Landscape of Coding Tools
10:20
Let's talk about competition in the coding market. This is like this is the most brutally competitive
10:26
subs of software I have ever ever seen. Um and you're playing in interesting
10:31
waters, right? You're you're competing with a lot of folks. you're collaborating with a lot of folks. Um maybe just help orient our audience. Uh
10:39
where do you see yourselves in the broader competitive landscape in the coding market? Yeah, it's like it is competitive out
10:47
there because it's such a big important market that a lot of people want to play
10:52
in it. Um and you know where where do where do we sit? So
Warp's Unique Position and Product Approach
10:59
so we are a sort of general purpose agentic development workbench. Um, which means you can use
11:08
us like cursor, you can use us like cloud code. I think we have a unique
11:14
product approach to doing agentic development where we are truly the only
11:21
um platform out there that has grown out of the terminal. So there's a lot that have grown out of like IDE specifically
11:28
forking VS Code and they're all very similar products. And then there's a lot that are just um apps that run within
11:36
the terminal. And so though th those are like text based apps and those are also basically all the same. Uh and so warp
11:42
is is has a very differentiated product approach. Um I think one area where our
11:50
product approach really shines is for people who are doing like traditionally terminalheavy workflows. And so that
11:56
would be things like um stuff beyond coding. So stuff like the software
12:01
development life cycle, it could be setting up projects, it could be deployment, it could be working with
12:08
like Docker and Kubernetes, uh it could be incident response. So like backend
12:13
DevOps, um S people who do production work, I think Warp is an amazing tool
12:19
for them because it integrates so well with all of these non-coding uh terminal workflows. But the truth is, I don't
12:24
know, Warp is like we're at any given moment, we're one of the top five agents on Sweetbench. We're typically number
12:31
one or two on Terminal Bench. And so it's a great generalpurpose coding agent. Um, and so we're we're in the
12:39
market, but it is really competitive. Yeah. And uh we're trying to compete on the quality of the product. It's like we are
12:48
in competitive there's competitive pressure around cost which is like a really challenging thing for us.
12:54
Let's talk about that directly and just to hit it head on like how how do you compete when anthropic you know can
13:00
subsidize their tool with with model profits? It's anthropic it's open AI and it's
13:05
Google. Um so we have to compete uh based on the
13:12
quality of the product for one thing and so I think like we can be a little bit in the more premium part of the market
13:18
here like uh coding agents and like developer experience it's not it's not
13:26
bananas. It's not like a commodity. these aren't like totally fungeible things like the product experience does
13:33
actually matter and so we can get people who who who care about that. I think
13:40
that matters and that um basically I I also think you want to stay away from certain user segments who are most
13:47
costconscious and cost shopping and so that would be like vibe coders people who are running like agents like 24
13:54
hours a day making you know making prototypes uh and that's just not
13:59
actually the usage pattern of a prodeveloper and so for you know a prodeveloper
14:05
um I think you can make a pretty strong argument that like the the actual holistic experience of using the tool
14:11
might be worth like 20 bucks more, 40 bucks more, 80 bucks like these are tiny sums compared to the amount of like
14:19
productivity that people are gaining in the amount of software that's being produced. Um I think there's also a a
14:26
way that we are trying to sit above the model providers and you know I think there's been a positive development here
14:32
which is that for about I don't know three months maybe three six months I think anthropic was kind of like the
14:38
main show in town when it came to frontier coding and now I think Gemini 3
14:43
and and even like the latest codecs are basically on par with the like the
14:48
latest cloud model and so there is advantage to being able to let people
14:54
choose between those or model route amongst them to model route with like cheaper open source models. So it's not
15:02
easy and if you view it as just like we're in like a cost race and all these coding tools are the same then I think
15:08
that's like we have to differentiate way more on the product and also just like the orchestration of these agents but I
15:15
don't think it's quite that's quite the situation. Got it. Okay. So you're winning people because they they love the overall warp
15:22
product and that includes I think so but also product like like the actual
15:27
you know terminal the better terminal you set out to build. Yeah and it is kind of a funnel. It's like we have a lot of you know we have
15:34
like 700,000 developers in warp uh actively and like there's like a bit of
15:39
a funnel from the terminal into the coding use cases and the at least into the terminal use cases.
15:45
Yeah. You mentioned being one or two on terminal bench. What goes into that?
15:50
Like are you training your own terminal models or is this harnesses on top of
15:55
the existing foundation models? So for us it's a harness on a mix of models. So
16:01
um and then like the actual capabilities of the app kind of matter which is
16:06
interesting. So, and what I mean by that is like terminal bench, it's not just coding tasks. It's
16:12
like all sorts of things that you might do in the in the terminal. And so, we have some intrinsic advantage there by
16:18
actually being the terminal and not a like an app running within the terminal.
16:24
And so, like for example, I one of the terminal bench tasks was like playing Zork or something which is like an
16:30
interactive terminal game. And so we can we can like use the terminal. We can do
16:36
computer use in the terminal is probably the easiest way to think of it. So uh just like there's there's companies out
16:42
there that doing browser use, we can do terminal use at the layer of the terminal as opposed to at the layer of
16:48
like a web page which is at the what the equivalent would be for the browser analogy. And so that helps us like do
16:55
certain tasks on that particular eval that uh is hard for other uh harnesses
17:00
to do. Hm. Got it. Um, you recently redid your pricing. What'd you learn
Pricing Strategies and Challenges
17:06
about developers and how they want to pay for AI? Oh my god. So, we're we're still like
17:12
not fully out of this. Uh, yeah. I mean, I could just explain like the whole whole thing here. So, we our initial
17:19
pricing was um basically you you do a subscription and you get a fixed amount
17:25
of AI credits every month. Uh and we
17:31
priced it so that uh this is when we were at smaller scale. Uh if you like
17:37
fully utilized your plan, it would cost us money. But the hope was that the on the sort of on the average utilization
17:44
the that we would make money, right? So it's like you have a plan that gives people 50,000 credits and most people
17:51
only use 20,000. You can kind of price it around that. What happened was like the um people just used more and more
17:58
and so we got to a point where we were losing more and more money. Uh and so from a company strategy standpoint, we
18:04
had a choice. We talked to Andrew a bunch about this. Like we could either kind of play the like uh and like we're
18:12
growing really fast. Like the revenue is growing, you know, we're adding like a million in revenue every uh it's since
18:18
slowed down a little. It was like every five days or something. It's like we could play the game, go raise more
18:24
money, but the margins were really bad. And so we
18:29
decided that wasn't just like wasn't the smart long-term strategic thing to do. And like also not like a race we can win
18:37
to the earlier conversation here. Like we we we just can't beat people if the
18:42
thing is cost. And so we wanted to know like are people paying for value? Will they pay if if we are margin positive?
18:49
And so the way that we have like changed the pricing is so that it's much more
18:54
consumption based. So you pay you now pay for like a base plan of 20 bucks a
19:00
month and then you buy credits on top of that. And we we ensure that that like
19:06
you know it's like in the old world we didn't want people fully utilizing their AI because it would cost us money. Now
19:12
it's like much better if people use more AI. Um, it is more expensive for sure
19:19
and we've had a lot of user complaints around that which sucks if any customers
19:24
are listening. Like it's a bummer. Um, it really does suck, but it's like we just could not afford to keep
19:30
subsidizing the way that we were. Um, and like all in all, I would say it's gone pretty well. like we're still we're
19:38
still growing pretty well and now it's like uh a growth that is sustainable not
19:44
like a you know unsustainable subsidized revenue growth. So tricky thing to do.
19:49
Would you ever train your own models? I think it we would definitely do like
Harnessing Models for Optimal Developer Experience
19:54
what um some of our competitors are doing where we would fine-tune models and do RL and
20:00
that type of stuff. I um it's hard for me to imagine us competing with training
20:07
like a full frontier level model just the amount of capital that costs.
20:13
We do have a ton of interesting data like I think it's like actually a really
20:18
interesting strategic asset for us in terms of like the workflows people are doing in the terminal, how to improve them, how people are interacting with
20:24
our agent. Um, so I think it's likely that we will we will do some sort of RL.
20:30
Uh, and I think it's also very likely that we're going to lean more into a mixture of models and more model routing
20:37
to try to like give users the best experience when it comes to sort of
20:43
latency, cost, and quality, which are the three Yeah. the three sort of like vectors here.
20:49
And do you see your role as kind of like optimizing that on behalf of users? Do
20:54
you want to see yourselves as giving all options to users for them to pick? Yeah. So, our our philosophy has been
21:00
like make a great default, but then because these are developers, they want control. So, we have like um an we
21:09
actually have a couple variants of default. So, we have like an a default that's geared towards like efficiency and one that's geared towards
21:15
performance. And then after that, we give people the raw choice. Um the raw
21:20
choice is like a little weird because like increasingly we really want to like use different models for different
21:25
things internally and it doesn't map that cleanly on using say like you know
21:32
GPT52 for everything. So it's it's a little complicated but I think it's actually something that developers like
21:39
is the control and so I don't see us moving away from that right now. Yeah. Um, one of the most interesting
21:45
parts about where you sit is that you can actually see which models different developers are using. And so I'm curious
21:51
in your user base, which models are most popular. Has it evened out a lot? And are like, are there different flavors or
21:58
personalities of what the different models are good at? Like 70 to 80% of our user base will use
22:04
whatever we set our auto to and not touch it. Um, and what we set the auto to
22:11
currently is like, um, it's a different one for efficient and a different one for performance. It's a mix of the, um,
22:19
codeex, sorry, GPT5 too, but it could be it's related to codecs and then uh,
22:26
Sonnet 45. Um when people are opting into choosing a model uh lately Gemini 3
22:35
Pro has been very popular. It's a really good model. You know what what we will do is like we will test different
22:41
variants in our auto model and see how people respond, how they engage with them. And I think we'll probably test
22:47
Gemini 3. I've been impressed with it. Um, so yeah, I would say I would if I had to
22:53
like stack rank, I would probably say like the anthropic models are probably still most popular. And then um between
23:00
Gemini and OpenAI, there's there's a decent amount of people opting into each of those. What about Grock?
23:06
Grock is not in Warp. Um, it could be in Warp. They've reached out a bunch of
23:12
times to put it in Warp. We we I'm not I have I'm not at all opposed to putting
23:17
in Warp. It's just like every time we put a model in warp, we have to I like would like some concrete benefit to
23:23
users and because it's a bunch of work to to tune our harness to work well with
23:28
the model. I see. Interesting. Can you say a word more about that harness? Like what do you do uh to make
23:35
your harness good? So harness is like how you how you prompt, what tools you make available,
23:41
how it um how you manage context. Um, and so like the big things that like
23:49
are determining quality of harness are like it's literally like the language of the prompting. It's the tool set
23:55
definition. Um, it's things like handling the context window. So specifically
24:02
when do you uh use something like a sub agent where you where you uh go out and
24:08
you have something as a separate context window. When do you summarize? When do you truncate? Like we have things that
Summarizing and Truncating Outputs
24:13
have like you know you might run a terminal command that has like gigantic output and you don't want that all in
24:18
your context window but you might want some part of it in your context window. So how do you sort of pick out the right stuff? How do you do rag? How do you
24:25
integrate with MCP? And so it's um there's just like some engineering and
Engineering and Measuring for Better Performance
24:31
like alpha that goes into that. The way that you make that good is by measuring.
24:38
uh like you can start just by like in a pretty like naive way and just give it a bunch of prompts, but the way that you
24:43
make it really good is by measuring and by measuring you can do it with um sort of like a fixed set of evals where we
24:50
know uh what the results should be and like not all of them should work. Uh and
24:55
so we have internal evals. You can do it on public benchmarks and that's actually been really good for getting our harness
Public Benchmarks and User Data
25:00
to be awesome is just like going through the exercise of making our agent perform well on the public benchmarks and then
25:07
you can do it by looking at like uh you know user data and so we use um brain
25:13
trust. So so there's various platforms you can use to like sort of look for patterns and failure modes in the agent
25:21
interaction and then try to tune the harness and sort of replay them as eval. So,
25:27
you know, that was a big mindset shift for us, like to to get to doing that, but that was 100% necessary to do it all data driven to get to something that was
25:33
good. Yeah. Got it. And do you have your own tab autocomplete models? Is that just
Tab Auto Complete Models
25:39
not even relevant for your your product? We don't have that. Um, it's not super
25:44
duper relevant at the moment. Um, like I think there would be incremental benefit
25:50
if we were doing tab completion in the terminal for people. And I we do have and I think for like the hand editing
25:56
parts of warp by far like the more typical use case is for code review of
26:02
an agent's code than it is like typing code but it it is it would be nice to have. It's just not a not an area high
26:09
priority for us. Yeah. Got it. Awesome. I'd love to talk a little bit about how you see the
Future of Coding Interfaces
26:14
future of um coding interfa interfaces and see the future workbench evolving.
26:20
So it seems like very much like you believe there's a convergence happening between kind of the traditional call it
26:26
Microsoft Word IDE guey approach to writing code and then the chat with your
26:32
computer um agentic um kind of uh style of you know terminal first approach and
26:39
those those two are starting to merge. What other kind of UI innovations do you
26:44
think are happening in terms of how people work with coding agents? I think the biggest change that we're
Cloud Agents and Orchestration Platforms
26:50
going to see in the next year is more and more um like kind of like cloud
26:55
agents or we call them agents where and this is already happening like
27:00
we're investing in this at warp where rather than a developer sitting at a
27:06
keyboard giving a prompt there's some system event that triggers an agent to do something and that system event could
27:12
be like you have a server that's crashing you have a cluster of user reports reports um someone has reported
27:20
like a filed like a security incident against you and all those things are basically going to serve as context into
27:26
an agent that gets launched and runs not on some individual's machine but like
27:31
somewhere in the cloud and so what I think that implies is that you're going to want um the the sort of like
27:39
workbench to become more of an orchestration platform more of a uh like kind of cockpit for managing not just
27:46
your own agents but your team's agents. I really think it implies you're going to need like a strong team concept. Um
27:53
because you know the these things aren't it's not going to be the normal workflow of like I'm sitting at my desk like I
28:01
I'm writing a coding change and I push a PR. It's like agents are going to push PRs and then agents are probably going
28:06
to leave an initial round of reviews on PRs and they're going to file tasks or
28:12
task tracking system. And so all this stuff needs like it needs tracking um
28:19
and it needs coordination and you need different ways of integrating it into
28:24
existing systems. And so whoever like this is like what warps probably like
28:30
our our biggest product focus for next year is on this type of of uh evolution
28:36
off of just like interactive agents into the cloud agents because I think it's going to it's going to be pretty
28:41
transformative. And I imagine that's like a massive infrastructure push to be able to kind
28:48
of you know run up and spin up. It is. It's it's it's turning um Yeah. So like for us it's turning us much more
Building Agent Hosting and Management Layers
28:54
from a like a product to a platform. And so the way that we think about building this out is building it on different
29:01
layers of the stack where you have like an agent SDK, you have um uh agent
29:08
hosting if you want it. So like, you know, if if you're a smaller company and
29:13
you don't want to like set up spots in the cloud for your agents to do their their their work, Warp will host that
29:19
for you. There's a whole category of startups that are going into this business of agent hosting. Uh which I
29:25
think is really interesting. It speaks to like this is like a real thing that's happening. Uh there's an API layer for once you
29:32
have the agent running, how do you get its status and how do you um how do you
29:37
maybe take it over or see its progress? Where does it write its logs? Uh and then there's like a management layer of
29:44
like what are all these things doing? What states are they in? and what's a the log like you know who started them
29:49
when did they produce PRs and so I think it's cool because it's going to be the most impactful way to use these agents a
29:56
lot is just not to have a person like driving them I don't think that this means that the person driving the agent
30:02
is going to go away either I think that there's like it's a the the sort of types of tasks that are going to start
30:08
with these ambient cloud agents are more like toil tasks or things that are oneshotable and I think harder more
30:15
interesting software engineering ing is still going to be done by a developer like at their workbench. But um yeah,
30:21
this is how I I see things evolving in the next year. That's awesome. And I think one of the mo more important scaling law charts is
Scaling Law Charts and Agent Run Time
30:27
like the the meter like how long can the the agent run for? Yeah. Um what are you seeing in terms of how
30:34
kind of long horizon these agents can be? I don't know at its max I would say like doing real coding tasks for us now
30:41
is like 20 30 minutes something like that maybe
30:47
like you can have it run longer just to be clear but the run in circles
30:53
the problem is it will start going in circles still there's still context
30:59
limitations and like it's a it's a costly proposition to have agents
31:06
running without people checking in and guiding them. And just by far you get
31:12
the best results when the agent is really steered. So when you do like an
31:18
upfront plan with the agent, when you check in on the agent's work and so I think yeah, I think this will
31:25
just keep on going up. But the I I don't I don't know. It's like hours
31:30
and hours of work. It needs a really clearly defined task in order for that to even make sense to me. needs to be
31:35
doing like some like big code migration or some some big big task. Got it. What do you think the product
31:41
might look like when it's good at kind of being this cockpit to manage, you
31:46
know, swarms of these agents? Yeah, we're so we're we're building this out right now and like we're having all
31:52
sorts of internal debates on whether it's it's it should be one product or
31:57
two products. um uh the way that we're doing it right now
32:03
and how I think other people will probably approach this is like a sort of like area of our app which is about
32:10
agent orchestration. Um the reason I wonder if it should be a whole separate product for us is because
32:16
like um you know it's it very much it feels more web centric to me which we
32:23
you we can make warp work on the web but it's not the primary interface. Um it
32:28
feels like potentially it has like a different user some of the time. Um but the advantage of having it
32:35
bundled into warp is that it makes the handoff from one of these cloud tasks to
32:42
a developer extremely seamless. And so very very common workflow like we have
32:47
this thing like we have it running in our slack in our linear um and so what
32:52
will often happen is like you'll tag something in slack and you'll be like you know can you make this fix for me
32:58
change this button position or whatever and right now you need a developer to like tie the loop on that. So it'll do
33:05
the work in the cloud and then you'll bring it onto your local machine and it's very nice to have that be in one
33:10
environment where you can just keep working on it seamlessly. So short answer is I don't know, but it'll be a
33:15
little bit more like a task management UI. I don't think it's going to quite like
33:20
I know there's there's like thoughts of like is task management the primary primitive for developers to be working
33:26
with. I don't buy that either. Like I don't think like every developer is going to be doing all their work out of linear Jira, but I do think there's some
33:33
aspect of seeing what the agents are doing across various systems that developers are going to want.
33:38
Yeah. Awesome. I'd love to close by maybe talking a bit about the state of Agentic development and and how the
Challenges in Agentic Development
33:45
software engineering market will play out. Sound good? Sure. I guess maybe for starters, where do you
Frontier Model Capabilities
33:51
think we are in terms of like the frontier model, you know, capability uh
33:56
frontier like where are the models good today? Where are they not? Um, you know, still producing all their
34:04
errors like where are we? So, I I'm constantly using this stuff.
34:09
Uh I'm I'm somewhat biased because I use it on Warp's codebase, which is like a very custom big Rust codebase. But I
34:16
think that's still an interesting perspective. Um the agents can do what I would think of as like medium complexity tasks
34:23
pretty well if you give them a bunch of guidance. Uh they can't do
34:31
like whole big projects. um at least we haven't had success doing that. They
34:39
can't uh I don't trust them to make like very fundamental architecture uh decisions for us. Um so it's like you
34:48
want like pretty constrained tasks, but they're well beyond doing trivial tasks like change the
34:55
button color, change the text, like that's that like they can make apps. They're very good at zero to one. They
35:00
can solve like kind of hard bugs. uh we have a medium-sized feature like I
35:06
don't know what a good example would be like I was adding a new slash command to warp the other day and it's like I just
35:12
tagged the agent to do that you know in Slack and it made a 300 line PR and it was basically right and so I I think
35:19
there's a bunch of headroom at the upper end um
35:24
I if if I had to put it on like a scale of 0 to 10 I think we're at like a six
35:29
maybe um so I think it's like It's real. It's gamechanging for how people work, but
35:35
it's not at like the level of doing what a full-time engineer on a hard product needs to do.
Bottlenecks in Agent Performance
35:42
And where do you think the bottlenecks are? Like is it just pe you know that models don't have enough context? We need to get better at giving them
35:48
instructions. Is it just we need to keep scaling these things up? Like what are the biggest bottlenecks?
35:53
So I definitely think context window is still a big issue. Um, and even with the bigger context windows, it having like
36:00
attention over the whole context window in like a reasonable way is is hard. Um,
36:06
I think like there's like an issue of it always having to like relearn everything. Like
36:13
memory is not just seems like a slow inefficient repopulate the whole thing
36:19
with a bunch of files take like there's no like continuous learning with it. So, it's
36:26
it's like this big stateless thing where you're kind of always starting from scratch and have to fill it up before
36:32
you can set it loose. That's that sort of stinks. I would I would like to see that solved.
36:39
Um there's still like how do you use it effectively as a developer? We're very
36:46
early. Like this stuff didn't exist a year ago. And so how should you be doing
36:52
context engineering? How should you be setting up your projects so that agents can work well with them? Um, that's like
36:59
a a problem. We if you were to look across how people on our team use warp to build, it's like high variance and
37:09
you know that's not great because it's like we have very very great we have very very like rigorous standards around
37:14
writing code and like almost no standards. I mean we've tried around like how to use the agents. No one has
37:21
been taught how to use the agents. there aren't even agreed best practices on how to use the agents and so I think that's
37:26
pretty nent. Yeah, got it. Um my experience whenever I try to vibe code a little bit is that
37:33
the coding models still produce a lot of errors. Yes. Um is that getting better over time and
37:39
that seems like to me in the category of stuff is like if you can verify it like did it work or did it not you should be
37:44
able to RL it. Um, and like where are we today in in terms of the state of, you
37:51
know, how frequently are errors coming out and like can we actually RL that or am I misunderstanding something?
Error Frequency and Verification
37:58
No, I think that they're still definitely producing errors. Um, it's it's interesting. So, it's pretty
38:07
infrequent that the agent at this point will produce something that doesn't compile for me, which I think is an
38:12
interesting milestone. So, like uh I don't know, not that long ago, four or five months ago, that was a problem.
38:18
Like getting to a compiling version of the thing. It it compiles for me about 100% of the time right now, which is
38:25
amazing. Um it produces stuff with bugs and
38:30
errors relatively frequently. I don't think it has a good way of closing the
38:38
loop uh in terms of does the thing work and so I think some version of browser use
38:45
or computer use where the agent can not only make the change but verify the
38:51
change from the user's perspective not the code perspective is pretty important. Are people doing that yet? Yeah, I like
38:58
we're working on stuff like that like the the the computer use all of the
39:03
model providers are have like beta versions of like computer use APIs and
39:08
um you know browser use for sure computer use we're looking at like I I would be surprised if this wasn't a
39:14
thing and I I think it becomes even more important of a thing pretty soon as more
39:20
work is done remotely because the real pain in the ass with the remote work is verifying that it works from a user
39:26
perspective. So I think that's like a big part of it. And then I think if you have that loop, it's probably easier to do RL and get to
39:32
things that are behaviorally correct, not just like static compile correct.
39:38
Yeah. Yeah. Absolutely. Okay. Well, looking forward to that. Um and then I guess do you think that we're going to
Super Intelligence and Coding Models
39:44
reach a super intelligence moment here like where where the models are better at coding than the best human coders?
39:50
I have no idea. Um no idea. What I do think is going to happen is I
39:55
I think um I don't know if this is super intelligent. I do think like coding will be solved by models. Uh and what I what
40:02
I mean by that is like I think that the limiting factor that we're going to come up against is just like expression of
40:08
intent from from humans in terms of like what do you want built? How do you how
40:15
do you build it? Like how do you express that clearly? Like English is ambiguous. Um,
40:20
isn't coding the the truest expression of intent though? Yeah, but that that the problem is we're
40:25
moving from a world where people speak in code to one where they just speak in English to try to build apps. And so
40:30
you we're like reintroducing ambiguity because developers, people building apps
40:36
are no longer actually um directly expressing what they want. They're going
40:42
through this translation layer of telling it to a saying to a model what they want and then the model produces the code. So, it's an interesting it's
40:50
like an interesting step backwards there in a sense, but it's also way way way more efficient to do it this way. Um,
40:56
yeah, I think like we'll get to a point where you actually don't need to be on the frontier to have something that
41:03
produces code that is as well matched to a person's intent as possible. Uh, so I
41:10
I and I think that actually is an interesting thing from a competitive perspective. I wouldn't want to be in
41:16
the API business for coding tokens because I do think like at some point
41:23
there's going to you won't you just won't need to be on the frontier. You're not be able to charge a huge margin on top of it which is why I think actually
41:30
you see anthropic and uh open AAI and Google going so hard at the application
41:36
layer because there's huge risk at the API layer. just for this vertical in particular that I think things are
41:43
basically solved within a few years. Yeah, I don't know that that's just I'm prognosticating.
41:49
Well, that's awesome. Do you think that people will ever are are people already thinking about the amount they spend on
Economic Impact of Coding Tools
41:57
coding tools being, you know, the replacement of what they would be spending on, you know, hiring few
42:03
software engineers or are they thinking about in their heads as buying a tool still? So when we talk to enterprises, it is it
42:12
is still viewed as like uh by and large is like a productivity boost. Yeah. And
42:17
that's like the way that it's being evaluated. In fact, it's really hard to measure
42:22
even what like the effectiveness of this stuff. And so it tends to fall back to subjective measurements from engineers
42:28
like do you feel like you're getting a bunch of value out of this or not? Or maybe you look at like Dora metrics or
42:34
like it's really hard to like to know. So, I don't think that they're viewing it yet uh by and large, at least as as
42:42
um labor spend. And I think today if you pitch like here's a $200,000 agent to
42:48
replace your $200,000 engineer or whatever, they would be like what? Like no, like not even not even close. Like
42:54
um so but I I would expect that this starts to change. What do you think will change that?
43:00
It's a great question. I think it's like in increasing the uh
43:05
automation use cases or may may maybe another way of thinking is like if if companies start to launch products
43:11
without engineers I think that that will be like a major proof point and to be clear I don't want
43:18
this to happen. I'm like an engineer at heart and and I don't want people losing their jobs. But there will be pro
43:23
projects products that are launched where there's like very very minimal engineering involved and you're going to
43:29
look at the spend for that and be like okay this was the cost of delivering the product and you're going to be like okay
43:37
uh with and without engineers um what's that like? So I think I think you need more of that to happen. I don't think
43:44
that's happening very much yet. H got it. And maybe last question, I'd
Coding as an Art Form
43:49
love to chat about how you see coding as an art form and therefore, you know, your role in the world evolving. You
43:56
wrote this blog post that I loved back in 2023, I think. Um, everyone should go
44:01
go give it a read. It's called uh I think it's about the future of productivity interfaces being ask and
44:07
adjust. Maybe say a word on that and and how you think, you know, three
44:13
years in how you think that's evolved. Yeah. So I wrote this like pretty shortly after chat GPT came out and we
44:20
started um like trying to deeply integrate it into warp. And the the idea
44:25
was this sound really obvious right now but the way that like productivity
44:30
interfaces have always worked in the past was that that they were geared towards hand editing, right? And by hand
44:36
editing, um, it could be like you go into Figma and you're like drawing vectors or you go into Google Sheets and
44:44
you're entering cells or you go into VS Code and you're typing code. And my
44:50
thesis in that article was like that's going to change to a point where the primary interface is one is a I didn't
44:57
have the word agentic at the time but I it was like AI based where you would ask
45:02
uh ask the app to do to make the do the thing for you and then you as a um human
45:09
author would be responsible for adjusting and adjusting might mean like
45:16
reprompting Or it might mean uh free prompting failed. It might mean like uh going in
45:23
like treating the prior hand editing interface as like like using that to
45:29
like complete your change. And I kind of think that's where we're at right now for a lot of like especially for coding.
45:34
It's really transitioning to you start by asking for something and then you
45:39
adjust it. Um, and another thing I said in that
45:46
article, which I don't know if it's right or not, was that I was thinking about are you going to be able to get
45:51
rid of the adjustment piece? And my thesis was that the the area where
45:56
you're going to need the adjustment piece the least is in areas where there's like a lot of like acceptable
46:03
solutions. So that would be like creative domains. You know, if you ask for an image of something, there's
46:09
probably a thousand outcome, a thousand images that might work for you. And so,
46:14
you can just reprompt, repromp, reprompt until you get what you want. Whereas for something like code
46:20
um or a spreadsheet where there's one thing that needs to be right that you
46:26
would have to keep that ability to like get it perfect with a hand editing interface. So, that was the thesis. I
46:32
think it's it wasn't bad. I think it's held up okay. Not bad. Yeah. Um, yeah. I guess you didn't coin
46:38
agentic editing back then. No. Yeah, the thesis was spot on. Um,
46:43
we did. You want to know something we coined at Warp? What'd you coin which we should have like trademarked is
46:49
agent mode. So, we were the first product to launch a branded thing called
46:54
agent mode. And if you like look this up on chat GPT and just like ask like where did this come from? It came from warp.
46:59
And now that's like a a very common like way of describing the feature which I
47:06
wish we were getting um you know some kickbacks for that or something. Totally. I love it. Well, thanks so much
Conclusion and Final Thoughts
47:13
for coming on to share what you're doing um and you know your observations on the coding market as a whole. It's such a
47:20
white hot competitive market and and the way that you think you know the terminal will be the workbench for the future and
47:25
how it's going to evolve. Um it was it was awesome uh to to have this chat today. Thanks, Zach. Thanks, Sonia. It's awesome to be here.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `Making the Case for the Terminal as AI's Workbench: Warp's Zach Lloyd`  ·  visible_channel: `Sequoia Capital` (211K subs)  ·  series: `Training Data`  ·  host: `Sonya Huang`
- visible_url: `youtube.com/watch?v=8PZ4ZjiB0os`  ·  visible_published: `Jan 27, 2026`  ·  visible_views: `62,537`
- visible_description: *"Zach Lloyd built Warp to modernize the terminal for professional developers, but the rise of coding agents transformed his company's trajectory. He discusses the convergence of IDEs and terminals into new workbenches built for prompting and agent orchestration, and why he thinks 'coding will be solved' within a few years, making human expression of intent the ultimate bottleneck. Zach explains how Warp competes against subsidized tools from Anthropic and OpenAI, and why the terminal's time-based, text-oriented format makes it perfect for managing swarms of cloud agents."*
- chapters (visible): Intro · Meet Zach Lloyd: Founder of Warp · Evolution of Warp: From Terminal to Agent Workbench · Importance of the Terminal in Modern Development · Single Player vs Multiplayer Terminal Use · Competitive Landscape of Coding Tools · Warp's Unique Position and Product Approach · Pricing Strategies and Challenges · Harnessing Models for Optimal Developer Experience · Summarizing and Truncating Outputs · Engineering and Measuring for Better Performance · Public Benchmarks and User Data · Tab Auto Complete Models · Future of Coding Interfaces · Cloud Agents and Orchestration Platforms
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_12.51.48_AM-1c758da2…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

This one is very high-signal for OMNI’s Build OS and agent workbench, less for clinical doctrine directly.

The big idea is not “OMNI needs a terminal.” The big idea is:

Agentic work needs a workbench: a place where humans can prompt, supervise, inspect, take over, coordinate, and review multiple agents over time.

Warp is arguing that the terminal accidentally has many properties agentic work needs: time-based input/output, logs, text, commands, multitasking, and a natural record of what happened. That maps hard to OMNI’s agent control plane.

Core takeaway

Warp’s thesis is that developer tools are converging into a new agent workbench: not a traditional IDE, not a traditional terminal, not just chat, but a place where agents can be launched, steered, reviewed, handed off, and coordinated.

Zach Lloyd also makes a second major point: the next phase is not just humans typing prompts into coding agents. It is cloud/ambient agents triggered by system events — server crashes, security incidents, tasks, Slack messages, Linear tickets — then tracked through an orchestration cockpit.

For OMNI, this is huge.

OMNI translation
1. OMNI needs workbenches, not just dashboards.

A dashboard shows information.
A workbench lets humans and agents do governed work together.

OMNI’s provider/admin/operator surface should not just display:

messages,
labs,
tasks,
appointments,
commerce,
documents,
reminders.

It should let a human supervise agentic workflows:

“draft follow-up,”
“prepare provider review packet,”
“investigate this patient drop-off,”
“reconcile appointment + payment + documentation,”
“collect missing intake details,”
“summarize what changed since last visit,”
“open a re-review run on these evidence sources.”

The user interface should expose agent state, not just patient state.

2. The Build OS needs an agent cockpit.

This lands massively in the OMNI Build OS.

Future OMNI build agents should not be invisible chat bubbles. They need a cockpit showing:

which agents are running,
who launched them,
what triggered them,
what task they are pursuing,
what files/domains they touched,
what tools they used,
what they are blocked on,
what proof they produced,
what needs human review,
what was merged/rejected/rolled back.

Warp’s direction — SDK, hosting, API, logs, status, takeover, management layer — is basically the Build OS runtime shell OMNI has been circling.

Doctrine line:

Agents are not useful at scale unless their work is observable, interruptible, reviewable, and transferable.

3. “Ambient agents triggered by events” maps to CNS.

This is the CNS version of Warp’s cloud-agent thesis.

In OMNI, agents may be triggered by:

abnormal lab posted,
patient message arrives,
appointment canceled,
refill window opens,
consent missing,
payment failed,
provider overdue,
evidence source updated,
security alert,
workflow test failed,
build gate changed.

But the trigger should not equal action. It should create a CNS candidate or orchestration run.

OMNI version:

source event → agent/orchestration candidate → context packet → policy/authority check → supervised action or domain commit.

That preserves the difference between “agent noticed something” and “OMNI acted.”

4. The “terminal” metaphor is really about time-based trace.

This is the deeper architectural gem.

The terminal is useful because it naturally creates a sequence:

input → output → next input → output → error → retry → result.

OMNI needs that kind of trace for agentic work.

For care operations:

patient said X,
caregiver added Y,
agent retrieved Z,
policy blocked A,
provider approved B,
message sent C,
follow-up scheduled D.

For build operations:

agent read files,
proposed patch,
ran tests,
failed one,
changed approach,
passed proof,
requested review.

That is not just logging. It is epistemic continuity.

Doctrine line:

Agentic work should be recorded as an ordered trace, not flattened into a final answer.

5. “Ask and adjust” is a good human-agent interaction model.

Warp’s “ask and adjust” framing is useful: the human asks for an outcome; the agent produces; the human adjusts through reprompting or direct editing.

For OMNI, this is exactly the right posture in many workflows:

AI drafts, human adjusts.
AI plans, human approves.
AI summarizes, human corrects.
AI proposes, domain commits.
AI routes, human escalates/de-escalates.

This supports OMNI’s existing doctrine:

AI proposes/classifies/drafts; humans/policy/domains commit.

6. Long-horizon agents still need steering.

Zach is pretty sober here. He says current agents can do medium-complexity tasks with guidance, but not full big projects or fundamental architecture decisions. They can run longer, but may go in circles; the best results come when humans plan upfront and check in.

That matters for OMNI because it argues against “set loose the agent swarm” fantasies.

For now, OMNI agents should be scoped, steered, checked, and bounded.

Doctrine line:

Long-horizon autonomy requires explicit plans, checkpoints, progress state, and human takeover.

7. Intent expression becomes the bottleneck.

This is a major theme across Neuralink, Warp, and the AI-substrate videos.

Warp says coding may become increasingly solved, but the limiting factor becomes human ability to clearly express what should be built. English reintroduces ambiguity where code used to be precise.

OMNI implication:

The future bottleneck is not only “can AI do the task?” It is:

did the human express the task clearly?
did the agent understand the intended outcome?
did context preserve constraints?
did the system know what “done” means?
did the agent verify from the user/patient/operator perspective?

This connects directly to OMNI’s need for intent candidates, success criteria, acceptance tests, and domain-specific workbenches.

8. Harness quality is product quality.

Warp describes harness work as prompts, tools, context management, subagents, summarization/truncation, RAG, MCP, evals, benchmarks, and user data.

That is a Build OS goldmine.

OMNI should treat the harness as a first-class product component, not a hidden prompt folder.

For OMNI agents, harness quality includes:

which tools are available,
what context is included,
what authority labels are preserved,
when subagents are allowed,
when context is summarized,
what is truncated,
what must be cited,
what tests must pass,
when the agent must stop.

Doctrine line:

The agent is only as good as the harness that shapes what it can see, do, remember, and prove.

Where it lands

Build OS: massive. This is a direct source for the agent cockpit, trace, workbench, cloud agents, task orchestration, and human takeover model.

Thesis §B — AI substrate: major. Harness design, context engineering, model routing, long-horizon agents, memory/compaction, evals.

Thesis §C — Governed Capability Exchange: major. Agent hosting, status APIs, tool/capability management, MCP, event-triggered agents, controlled takeover.

CNS / orchestration: major. Ambient agents triggered by system events map cleanly to CNS candidate generation.

Product surface: major. OMNI should distinguish dashboards from workbenches.

Knowledge Reservoirs: medium. Relevant through RAG/context/memory, but not the core source.

Doctrine / primitive pressure

Potential primitives worth routing:

agent_workbench
agent_cockpit
agent_run
agent_status
agent_trace
agent_takeover
system_event_triggered_agent
ambient_agent
agent_hosting
agent_management_layer
agent_task_queue
ask_adjust_loop
human_takeover_state
context_truncation_policy
context_compaction_policy
subagent_invocation
harness_version
model_route_policy
user_perspective_verification

Keeper doctrine:

OMNI needs workbenches where humans supervise fleets of bounded agents, not dashboards where AI outputs appear magically.

What not to import blindly

Do not make OMNI’s clinical surface look like a terminal. The terminal metaphor is useful for agent traces and workbenches, not patient UX.

Do not assume developers are the user model for nurses, providers, front desk, or patients.

Do not overtrust cloud agents. They need status, logs, stop conditions, takeover, and proof.

Do not treat “coding will be solved” as proof that care operations will be solved. Care has authority, consent, liability, relationship, and ambiguity that code agents do not fully model.

Do not let task management become the only primitive. Work may pass through tasks, but care context is richer than a ticket queue.

Do-not-miss lesson

Agentic work needs an operating surface.

OMNI-specific:

If OMNI has many agents, it needs a cockpit: ordered traces, task state, context, logs, ownership, proof, review, and human takeover — otherwise agentic work becomes invisible chaos.

Priority / confidence

Priority: 5/5
Confidence: 5/5
Suggested analysis depth: full_semantic

This should feed the Build OS / CNS / §C workbench and agent runtime model immediately. It is one of the best sources so far for the idea that OMNI’s agents need not just policies and tools, but an actual operating surface where humans can manage, inspect, and steer them.

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
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.**

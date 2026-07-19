# EVSRC-2026-000311 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000311_matt-pocock-agentic-engineering-harness-first.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000311`  ·  filename: `EVSRC-2026-000311_matt-pocock-agentic-engineering-harness-first.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=nQwJVHCtDDY` (inferred from Knox §0 block)  ·  source_title: `Matt Pocock's Agentic Engineering Workflow (just copy him)` (inferred)
- channel_or_org: `David Ondrej and Matt Pocock` (inferred)  ·  speaker: `Matt Pocock; David Ondrej` (inferred)  ·  published_at: `2026-06-18` (inferred)
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `podcast interview / agentic-development workflow demonstration`  ·  source_reliability_context: `practitioner`  ·  topic_tags_light: `[agent_experience, harness_engineering, strategic_programming, agent_skills, stateful_skills, context_ablation, AFK_agents, sandboxing, work_queues, review_sampling, adaptive_learning, software_architecture]`

> **Header-id note:** the pasted Knox §3 Review 001 block carries a **stale header id `EVSRC-2026-000298`** (+ a SerpApi sponsor segment sits inside §1). **Canonical id = filename = `EVSRC-2026-000311`.** No mis-file — content is genuinely Matt Pocock × David Ondrej.

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Matt Pocock` · role_in_source: `principal interviewee / workflow demonstrator` · affiliation_at_publication: `AI Hero (aihero.dev) — independent developer educator + tooling author` · speaker_type: `practitioner` · authority_context: `Experienced developer educator demonstrating his skills repo, Teach skill, Grill Me, Sand Castle sandboxing, GitHub Actions automation, and a harness-first / strategic-programming philosophy` · identity_confidence: `inferred` (no screenshot dropped this session; identity + metadata carried from Knox §0/§2)
  - name: `David Ondrej` · role_in_source: `host / interviewer` · affiliation_at_publication: `David Ondrej Podcast` · speaker_type: `creator` · authority_context: `AI creator/interviewer challenging the harness-first thesis (frontier-model gains, agent loops, automation boundaries, hiring, AI-enabled product)` · identity_confidence: `inferred`
- publisher / channel: `David Ondrej and Matt Pocock`  ·  interviewer / moderator / host: `David Ondrej`
- event_context: `Long-form podcast interview + live workflow demo (agentic engineering, reusable skills, adaptive teaching, AFK execution, models-vs-harness). Contains a sponsored SerpApi segment (~4:47–5:57).`  ·  perspective / conflict notes: `Both promote their own products/communities (Pocock: courses, AI Hero, skills repo, Teach skill, Sand Castle; Ondrej: AI education community + sponsor). Multiplier/"tactical programming is gone"/skill-effectiveness/model-vs-harness claims are practitioner judgments, not measured findings. Strongest on concrete workflow design + epistemic counterweights to model hype.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
Everyone's obsessed with the uh model and I think they should be more interested in the harness, what you can
0:06
do to get the most out of the harness, giving it the right prompts, giving [music] it the right skills to work with and improving the environment in which
0:12
the model runs. As I sort of said with Fable, like the model is useful, but I
0:18
think the harness has an equal amount of work and you have much more control of the harness than you do the model.
0:24
People are focused on the wrong thing. They're looking at the big shiny [music] new thing when in fact just focus on the
0:30
stuff that's been working for 30 40 years, you know, and it really does work. Like people ask me all the time,
0:37
how do you optimize for token spend? Have a code base that's easier to make changes in,
0:42
right, Matt? So what's going to be the main difference between people who use AI to get insanely ahead and the
0:48
majority of people who only get a small boost from it? So in his book philosophy
0:53
of software design, John Asterout talks about the difference between tactical and strategic programming. So I find
1:00
this distinction so useful when thinking about AI because tactical programming is all about the on the ground day-to-day
1:06
stuff, the actual writing of the code, the actual messing about with the syntax, figuring out bugs as they come
1:12
up, and actually creating the code, creating the commits. Strategic programming is winning the war, not the
1:18
battle. It's longer term thinking. It's the general sitting right at the top. How does the codebase need to look what
1:24
um strategies can I use to improve our velocity? And for me, strategic
1:30
programming has always been the most interesting, the most exciting. That's how I was thinking even when I was a junior. How can we increase our
1:36
velocity? How can we do more with less? And AI has basically eaten tactical
1:41
programming. It's gone, right? It's all gone. So AI is just better at doing tactical programming than you are
1:47
because it can do it for cheaper, right? And so you need to be great at strategic
1:53
programming in order to get the most out of this infinite fleet of tactical programmers that you now have access to.
1:59
So does that mean knowing how to orchestrate these agents plus some like fundamentals of software design,
2:06
codebased architecture, like how would you break that down into like these specific skills that people can learn? Yeah, great question. So strategic
2:13
programming really hasn't changed in AI, right? AI is just um all we're doing is
2:18
instead of delegating to junior or mid-level programmers, we're delegating to AI instead. So the things that you
2:26
need to do good delegation are still the same. You need to design the hard parts
2:31
up front. You need to make sure those tasks are really, really well scoped. You need to be thinking about the interfaces between all of the modules in
2:38
your codebase. You know, you need to be thinking about test scenes and good tests. You need to essentially design a
2:44
codebase that's easy to work in and have just enough documentation that can point AI to the right places where it's going
2:50
to make those changes and make them effectively. I think everybody at this point agrees that the AI progress is very fast if not
2:56
speeding up. So, I think a lot of people also miss the part of upskilling themselves, right? Because the like yeah
3:03
you can pay for subscriptions you know you can get the latest tools but ultimately anybody can do that but there is still going to be people who use
3:09
these tools to massively grow their business you know to ship more and better software than ever before and there's going to be people who like try
3:15
it a bit and you know maybe use the free version or the cheaper model. So how would you advise people to start
3:21
teaching themselves to be better? Yeah. Um people ask me all the time like because you know I sell developer
3:27
courses right? So I'm sort of, you know, you can take my advice here with a pinch of salt, but I personally feel that my
3:35
skills are a multiplier for AI, right? I if I'm able to oversee a codebase and
3:41
think about how like things should be built and just tell AI how to do it, then a AI just has so much richer
3:47
context to work with. And I think of this, I mean, I see this everywhere and
3:53
people uh like CTO's and like people I talk to at conferences tell me this all the time is that AI makes senior
3:59
developers just 10 times better. And it sort of doesn't make sense to hire that many juniors anymore because juniors get
4:06
a little boost from AI, but seniors just get this ridiculous huge boost from it and they can do so much more with it. So
4:13
your skills are the ceiling on what AI can do. And if your skills are low, then AI is not going to be able to go past
4:19
that, you know. So getting good with AI is really about getting good at your
4:24
domain, getting good at what um AI is going to be doing for you. So a better
4:30
teacher can use AI to teach people better than uh a random can, you know.
4:36
So I think skills are more important now than they used to be because again, you
4:41
just have this multiplier available to you and you can delegate more. So you recently shipped the new teach skill,
4:47
right? Can you tell us more about that? If you've ever tried pulling search data from the web at scale, you know it's a
4:53
nightmare. You write a scraper, it works for a week, but then the layout changes. Then you hit captures, your proxies get
4:59
blocked, rate limits everywhere, and suddenly you find yourself maintaining scraping infrastructure instead of
5:05
building the actual project. This is where SER API comes in. It gives you clean structured search results from
5:11
Google, Bing, Yahoo, and more through a single API call. You send a request and
5:16
you get back a clean JSON object with exactly the data you want. No capture solving, no rotating proxies, no broken
5:24
HTML. They handle all of it. And for AI work, this is huge. Say you're building an agent that needs live information.
5:31
Just use their Google search API. Or maybe you're training an AI model that needs a data set. Their Google Images
5:37
API gives you pre-classified titles, URLs, and thumbnails ready to go. A ton of production agents already use SER API
5:44
as one of their core tools, and you can get started with 250 free credits. No credit card required. Just scan the QR
5:52
code on screen or click the first link below the video. Oh, and a huge thank you to Surf API for sponsoring this
5:57
video. Yeah, I know a lot about teaching. I've been a teacher for 10 years, actually. So I was teaching uh singing and voice
6:04
when I was uh just straight out of university. Then I became a developer and now I teach developers. I've been
6:09
doing that for the last four years. So I know a lot about teaching and I I thought okay what if I take some of the
6:15
teaching principles that I know about such as the zone of proximal development such as the difference between knowledge skills and wisdom encode that into a
6:23
skill and essentially use it to create a course on the fly about any topic and
6:29
that's what I've done and it's extremely effective. I've actually been learning I'm teaching myself Rubik's cube from
6:35
this. I can solve a Rubik's cube now from memory thanks to this skill. And I've been using this for all sorts of
6:41
stuff. So yesterday I was I was messing about with what it might look like to
6:47
ask the teach skill how to become a senior developer. And it basically went
6:52
on this big journey looking at a bunch of trusted resources getting a big sort of curriculum together and just produced
6:58
something that was gorgeous. And so that absolutely let's give it a go.
7:04
Yeah. Yeah, I think people would love to see that. Definitely. Okay, so uh David, what do
7:10
you want to learn? Let's do like systems design. I tell you what, I mean I I I I've got an idea here, which is that a lot of
7:16
people come to me. I I teach courses for engineers, really, people who already know how to be an engineer.
7:22
I'm intrigued by if this skill can teach you basically the basics of engineering,
7:28
you know what I mean? To fill in the gaps that you might have if you're a vibe coder, you know? So, I'm going to
7:34
pretend that I'm a vibe coder. I'm going to invoke the teach skill. I'm inside an empty directory here and I'm just going
7:40
to let it roll. So, I'm going to dictate something out and let's see how it goes. I am a vibe coder and I want to fill in
7:48
my knowledge gap so that I can ship better software. I know some very, very
7:53
basic CLI commands and I know just about enough to read some code and use the
7:59
terminal, but that's about it. What do you think I should learn to um develop my skills next?
8:06
So, I'm going to put that a simple prompt, plain English. Anybody can ask you this. Exactly. And it's just a a very very
8:12
simple request. And I'm not really talking about the subject that I'm trying to learn. I'm talking about my mission, the thing I want to get out of
8:19
this, the reason I'm coming to this session with the teacher today. And you can think of this really as a
8:25
collaborative effort. Basically, I am talking to a teacher and the agent is my teacher. and it should know how best to
8:32
teach me. And it's good that you you brought it up and you created the skill recently
8:37
because literally I was thinking about this yesterday, right? Especially when Fable came out. I was like, how can I
8:42
upskill myself to get the most out of it cuz like I I I know I'm not where I can be. You know, there's people much better
8:48
than me, much more skilled than me. So like it's it's great timing that you have this skill now. Good. Well, this um so it's basically
8:55
saying, okay, I've checked the workspace. It's a blank slate. the teach skill, you need to run it in a workspace because it saves a bunch of information
9:01
in that workspace. Okay? And so for a vibe coder who can read code and use a basic terminal, the highest leverage gap is almost never
9:07
more syntax. It's the stuff around the code that lets you ship without fear. That's 100% true. So git, reading
9:14
errors, debugging, how software actually ships, testing, totally git is where we start. Okay,
9:20
but first the mission. I don't want to guess. Three quick questions. The first thing the skill does is it basically
9:26
aligns with what you want to do. I think of teaching and learning as not getting
9:33
information into your head but orienting you in the world, putting you in a new
9:38
place in the world. And this is kind of a bit abstract and a bit you know spiritual almost but it's not really I
9:43
mean essentially you need to learn these skills in order to do something into the in the world and that's your mission
9:50
right so it's like what are you building what does ships better software mean to you right now what's a concrete project
9:55
you're working on so let's imagine I answer this let's imagine I was a I'm a voice coach wanting to learn how to be a better
10:01
coder you know that's actually who I was back then so I am a voice teacher and a singing teacher I want to build a
10:07
scheduling app to help me schedule my students to help me retain notes on my students to teach them better and to,
10:14
you know, build something that they can help practice with. That's the kind of app that I'm looking at. So, probably a
10:20
full stack application with a database with some kind of authentication, but that's way beyond my abilities right
10:25
now. By the way, I'm using Whisper Flow for dictation. It's really good. Yeah. So, this is going to be also the game like how fast you can output your
10:32
tokens from your brain and input them back into your brain. Totally. Yeah. I mean like dictation is
10:38
a if we do a little sidebar on dictation, anyone who's not doing dictation is just so much faster, right?
10:44
It's very fast for me because I'm like quite a fluid speaker. So I can translate my brain into words quite
10:51
effectively. But it's a skill, you know, it's a skill at the end of the day and people can can uh learn to verbalize false better and
10:57
faster. Exactly. And it's a skill that is actually overpowered if you're if you're a developer. It really really is. like
11:04
uh I found that being able to communicate and being able to speak was something that was just ridiculously
11:09
overpowered in the development world and so it has proved um so it has created a mission.md here. So, it's basically
11:17
saying, okay, who is this person? What do they want to build? Why it matters? What success looks like? Being able to
11:22
ship that app, not break it, get it live, and trust that it works for real students. This is now going to orient
11:28
everything about this skill and what it does next. So, you can see it's doing some um searches here. So, it's
11:34
searching for some trusted resources. How does a full stack web app uh front end back end blah blah blah blah blah.
11:40
Let me set up your resources, a learning record, a reference cheat sheet, and your first lesson. So it's going to
11:45
start churning out some material that's running locally. And this is going to
11:51
the idea of this is I think of there are skills as stateless skills that don't
11:56
need any state on the local system or any kind of like um memory about what
12:01
was done before. And then there are stateful skills. So skills that rely on
12:06
information running locally. And this teach skill is a stateful skill because
12:12
if you think about working with a great teacher, a teacher remembers what you've done before. A teacher knows about where
12:18
your sort of need to go next. Knows what your mission is, all that stuff. And so it's saving a
12:24
bunch of states locally so it can remember everything. And it's first of all created a reference. So we've got a
12:30
reference cheat sheet. It's now going to create the first lesson. And these are created as HTML. This means we can open
12:36
it in a browser and have like a really rich thing to look at because learning stuff in the terminal is just brutal.
12:42
Yeah. So you're using uh cl code with fable, right? I'm using claw code with opus 4.8 with
12:48
medium effort. So I'm not using fable. Not quite yet. I haven't decided whether I want to get into fable yet or not. Um
12:55
really I well I mean yeah I I don't I don't really believe in all the kind of like
13:02
yesterday was it yesterday when it was released. It's just so much unbelievable amount of noise. People saying they've
13:07
one-shotted this, oneshotting that. And yes, it does seem to be a step change. It does seem to be slightly better. But
13:13
then you've got to weigh that against the cost of the tokens and how available it is, the latency of it. Um I prefer to
13:21
essentially not try a new model when it comes out and wait about a month just to see how things shake out. That's what I
13:27
did with um Opus 4.5, which was the like the last time I really had a massive um
13:34
new feeling about a model and it worked fine. You know, you're not you're not losing that much by just waiting a
13:39
little while to see how things shake out. All right, so this is the file it created. This is lesson one. Get your projects
13:46
undo button. So we can see that it's using a more rich um like actually
13:51
seeing this in the HTML is a lot richer and nicer than doing in the terminal. This
13:57
is saved locally so you can always go back and reference this and it's giving you actual things you can do in the
14:04
terminal giving you proper exercises to go and do it. So you make a folder, go into it, start getting it, create a
14:10
file, check the status, stage it, save the snapshot, and because of course it's running like on my system, it knows what
14:17
my setup is. It's probably already checked whether I've got git installed, that kind of thing. So it's, you know,
14:22
it's perfectly personalized education, you know. Exactly. Totally personalized. So which
14:28
command saves a snapshot of your stage changes? David, do you reckon you're going to answer this one for me? uh get [snorts] command say snapshot
14:35
your state changes get commit get commit bam so again it's using
14:41
techniques that are well known in education for increasing um storage strength right so quizzes are such an
14:48
awkward thing like I sort of hate quizzes but quizzes are just unreasonably effective for uh increasing
14:55
the strength that something is stored in uh what command shows what has changed right now David
15:01
good status Get status. Yeah. Oh, bugger. I pressed the wrong thing.
15:07
Uh, what does git add do to a change? Stages changes. Stage changes. A commit is best pictured
15:13
as a safe point. Safe point. You broke a file but haven't
15:19
committed. To restore it, you run um get restore.
15:25
Yeah, I think it's git restore, isn't it? Yes, there it is. Very good. Okay. And so it then sends you off to read a
15:32
primary source if you fancy it. So the um progit book um and then invites you to ask your
15:39
teacher follow-up questions and create the next lesson. And so the idea of this is you I think of knowledge as like a
15:45
graph, right? It's like a big forest through which you're exploring. And what this is doing is it's creating a linear
15:51
path through that graph. It's basically going okay, you've learned this. Now that's I I know that you've learned it.
15:57
It's in your learning record. We can see it's retaining a list of learning records in the top right here, which is
16:03
your mission and your starting point. So, it's captured your mission, a decision to start with Git zone of
16:09
approximal development, current estimates, you get the idea. So, it's great. I freaking love it. And that's
16:16
what I would recommend to anyone starting with uh especially development
16:21
because it's sort of I mean, I'm a developer. I know what developer education is. And so I've sort of put
16:26
that into this teach skill. And I think I've always thought coding was quite easy to learn. Like I didn't have that
16:32
much trouble when I was learning it myself. And I I think this is a great way to do it.
16:39
So is this live on GitHub somewhere? Where can people find this? GitHub Matt Pokco skills. And if you
16:45
head there, you just run this uh CLI command npx skills latest add map
16:52
skills. You can choose the teach skill and it will just save to your local setup. So whether you're using claw
16:58
code, whether you're using codeex, it will work and you'll be able to then just invoke teach inside a fresh
17:03
workspace. So you have, you know, perhaps the most at least one of the most famous and popular skills repos. What separates a
17:11
good agent skill from a bad one? It's such a deep question.
17:17
It's such a deep question because it depends what you want. Um you [clears throat] can think of there as being two types of skills. There are
17:24
skills that are procedures, skills that you intend to uh run yourself and then
17:31
there are skills that are more like abilities. Those are abil like things
17:36
that you intend the model to invoke itself. And so a good ability for
17:41
instance might be uh your coding standards let's say. So let's say your agent is sort of doing its own thing
17:48
kind of working along and it needs to check uh how you like your react code written. So it's going to write some
17:53
React code you it pulls in the ability uh great React coding standards let's say and then it reads it and it
18:00
understands okay I shouldn't use use effect I should use something different a procedure is more like something uh
18:07
this is how I prefer my skills written it's something that you invoke yourself to get the model to behave a certain way
18:14
it's something I love is my grill me skill that's one of my most popular
18:19
skills what it essentially does It turns the model into an adversarial interviewer. So this is under
18:26
productivity under grill me. It's incredibly short and you can see it's
18:31
literally just uh four sentences I think this skill maybe five sentences and it's
18:36
unreasonably effective because it just turns the agent into an adversarial interviewer asking you questions
18:43
interviewing you and popping up with ideas that you might not have considered until you reach a shared understanding.
18:49
I've been using this for coding first of all just like as a replacement for plan mode. So before you actually go and
18:56
implement some code, you go, okay, here's my idea. Uh, interview me about it. Let's reach a shared understanding.
19:01
Let's flush out any weirdness or any unexpected stuff before we get in as much as you can. And it's just
19:09
unreasonably effective. And this is a procedure. This is not an ability. I tend to prefer my skills as
19:15
procedures. I like to be the one in control. I like to go, okay, we'll do grill me and then we'll go, let's write
19:22
a product requirements document. So we use two PRD for instance. Then let's take that PRD and turn it into
19:28
individual issues so that we can work through them. That's just personally how I like to do it. But other skills such
19:34
as superpowers from Opera, which is probably the most popular skills repo out there, it takes the opposite
19:40
approach and it prefers things to be more like the model is in control. But I've always preferred to me personally
19:46
be in control because I know my skills, I know my abilities. I don't want to delegate my thinking to the model.
19:51
Yeah. I mean that I think is one of the See, I'm like playing with this idea of the list. It's like a list of
19:59
abilities, you know, knowledge. Basically something that like if you
20:04
could take the average, you know, 100x developer that uses AI versus a, you
20:10
know, 1x developer, whatever. What would be the list of the differences, right? You can say like okay some of these are
20:15
like raw intelligence you know blah blah blah but most of them are probably teachable most of them are some skills
20:21
some knowledge something like that so I'm obsessed with this idea and I think one of them is kind of knowing when to
20:28
have the AI ask you right like kind of this grill me style of skill because personally I found out like the biggest
20:34
difference instead of like saying oneshot this app I describe my vision for this app and say like list out the
20:40
10 most consequential decisions right the software design decisions architectural decisions product decisions that will shape this
20:47
project and ask interview me until you understand 98% about it. Right? So, kind of that is like one of the things I
20:54
would put on the list. What what are some of the things you think are on the list?
21:00
Well, can we um can I challenge the idea that this is possible? Is it right if I
21:06
take this question in a different way? Because skills are really hard to write uh
21:13
especially because every single skill that you write it leaks a description
21:18
this description here into the context window. Right. Yeah. And you can disable this. So you can uh
21:24
there are some skills in here I think in my engineering zoom out I think which
21:29
has uh disable model invocation true. So this one uh this skill can only be
21:35
invoked by the user and this means its description is not leaked into context.
21:41
Every single ability uh let's say we have the list. Let's say we have a 100 different skills. You're going to be
21:47
leaking 100 descriptions into the context window. Right? Okay. Maybe let me rephrase. I didn't
21:52
mean it for the AI. I meant the list is the person, right? Like if you had to
21:58
say like I know it's difficult to like it's maybe a reductionist to take
22:03
someone who's like really insanely productive you know maybe like so some of the top people at opening are onic
22:08
who like worth hundreds of typical developers right what would be the list
22:14
of their abilities skills knowledge that compare them to an average developer
22:19
yeah got you well this I mean the you're kind of heading in my direction I think which is I prefer to hide most of these
22:27
descriptions from the AI itself and keep all of that knowledge inside the human,
22:33
right, inside the developer. And so I prefer that's how I prefer my skills to be used is you essentially are the
22:39
driver. You know, you take the steering wheel. And so I do think that this is
22:46
such an exciting time to be a senior dev and to like be able to share and like
22:54
procedurize proceduralize maybe um your work into reusable chunks, right? Like
23:02
in in a codebase you have a function that's repeated three times. you take that function and you pull it out into a
23:08
shared function that is then you know um you reduce the duplication basically and
23:13
we're able to do that now with our own procedures with how we build software we're able to take these like okay I've
23:21
uh you know made this plan a h 100 times I know how to make good plans I can turn that into a skill distribute that to my
23:27
team and everyone can be planning in the same way contributing back to that same skill making everyone on the team better
23:33
so you're raising the floor really on what engineers can do. It's such an exciting time. And what I would say
23:40
though is that skills like there's like know I'm going to sort of
23:47
confuse our terminology a bit. I think of there as being three things that you need to be good at anything which is you
23:52
need knowledge. You need the fundamental sort of uh what is that thing like understanding it in your head. You need
23:58
the skills. You need to be able to have done it a bunch of times to like um you know in muscle memory. And then you need
24:04
wisdom. You need to know when to do it. You need to know how it fits in in the
24:10
real world. And wisdom is almost impossible to obtain without actually
24:16
having done the thing in the exact context where you need to do it. So if
24:21
you want to be like someone at anthropic, sure you can gain the knowledge, you can gain the skills, but then how are you going to gain the
24:27
wisdom, right? Like you need to probably go to anthropic to gain the wisdom to actually understand how to do the thing,
24:32
you know? But I think it's like being able to bundle the first two knowledge and skills into something that's
24:38
reusable is such a fascinating um outcome of this weird age we're
24:44
living in. So currently we talked about skills.
24:49
What's your agentic engineering setup? Like what tools do you use? What models?
24:54
How many agents? Yeah. Um so my setup is um I use claude
25:00
code essentially for planning and for um some implementation locally. So I'm
25:06
using Opus 4.8 with um medium effort is kind of what I've landed on and it works fine. I do most of my uh development and
25:14
a lot of my work now um AFK so with me away from the keyboard and the way I do
25:21
that is with something I built which is uh a tool called sand castle and sand
25:26
castle is essentially a way to run agents inside sandboxes. Okay, so you can um inside like if you don't
25:35
run an agent in a sandbox then it's going to do weird stuff. So it might you know randomly delete your home directory
25:41
or um you know exfiltrate your um environment variables out to um bad
25:47
sites etc. With Sand Castle, you're essentially able to plug in things like Docker or Podman and run agents, run
25:55
either uh this is what it looks like, run clawed code uh inside some sandbox,
26:00
which is extremely cool, extremely effective and it means that you can parallelize a bunch of agents at once
26:06
either on your own machine or you can use like Versel sandboxes for instance to just ping up a remote agent and then
26:14
pull the commits back into your local workspace. I've been doing that and I've been
26:19
combining it actually with GitHub actions. So we can see inside for instance here inside the actions tab of
26:25
map sand castle this one this was an agent review action which happened a
26:32
little while ago which checks out the branch. This runs on on a PR. It uh runs
26:39
the review agent which is just a prompt I have locally. We can see all of the um things the agent did. It's checking
26:45
various things blah blah blah blah blah uh type check round clean and then it replies saying cool it all looks good to
26:52
me. So that's mostly how I've been doing things is running uh agents using sand
26:59
castle on GitHub actions and essentially just telling them to do things and that
27:05
has been extremely unreasonably effective because you just get to parallelize as much as you want. you're not worried about constraining the
27:11
resources on your local machine and yeah it's just very very quick to just spin
27:16
up an agent and get it to do something. So in terms of models are these 5.5
27:21
extra high are these another cloth codes what do you prefer? These are I think uh again just claw
27:28
code uh opus 4.8 eight medium. I think I don't think I've varied it too much to be honest. I mostly don't worry about
27:35
models that much. I mostly just use um like I think
27:41
yeah, this is my sort of hot take I suppose which is that everyone is obsessed with the model.
27:47
Everyone's obsessed with the engine of the Formula 1 car whereas in fact the engine is really only a part of the
27:55
whole system. Right? You've got the entire chassis. You've got uh how it um how it moves through the air. Everyone's
28:03
obsessed with the uh model and I think they should be more interested in the harness, what you can do to get the most
28:09
out of the harness. Uh giving it the right prompts, giving it the right skills to work with and improving the environment in which the model runs,
28:16
improving the codebase and all that stuff. So yeah, as I sort of said with Fable, like I the model is useful, but I
28:25
think the harness has an equal amount of work and you have much more control of the harness than you do the model.
28:31
That's true. I would maybe challenge you a bit on this because I don't see why you cannot do both because like
28:37
obviously I I agree that you need the right skills, you need the right setup, all of that matters, but then if you
28:43
swap in a better engine, all of that is instantly better. No. Yeah, it totally is. Um but I think they
28:50
you need to think of them as 50/50 right so instead of um the model being like 90% and sort of the 10% optimization of
28:57
har like everyone's so focused on the model people are not so like intrigued
29:03
by so okay let's go back one step there's a
29:08
famous idea in ML which is the bitter lesson you heard of the bitter lesson yes
29:14
yes the bitter lesson is the idea that Um, whatever you do in machine learning
29:20
research, compute, raw compute will just beat you every time because compute is
29:25
increasing at such a high rate that you can just essentially trust that the underlying thing will get better and
29:31
that will uh beat any optimizations you put on top of it. And there's a a sort of idea here that maybe I'm falling into
29:38
the bitter lesson that instead of like like optimizing my setup, optimizing my harness, I should just wait for the
29:44
models to get better, wait for the engine to get better, and then my car will be faster.
29:49
I don't know. I still think there's a lot to be gained by just optimizing the harness and focusing on creating like
29:56
good code bases that the agent can do well in instead of hamstringing the agent before it even gets started. I
30:02
would say probably I I I agree that you shouldn't wait. Like that's that's that was a very stupid idea. People just
30:08
waiting around for AGI or not doing anything. Obviously, I completely agree with you there. I would say I'm somewhere in the middle. I would say
30:14
like I'm actively trying to improve my setup every single day trying to, you know, get faster at using these agents.
30:21
Figure out, okay, should I be using Cmax here? Should I be using should I put this on VPS? Should I be using Tailscale
30:26
here? trying to like actively improve everything else except for the model but also trying to use the best model
30:33
possible because fundamentally like you said you might be falling into that. I would say maybe if it's 50/50 now for
30:39
the simplicity of this argument, what if like the model really becomes a lot better, right? Like let's let's assume
30:45
the next generation, right? Like Opus 6, Fable 6, GPD 6, whatever 7 like don't
30:52
you think these models will require less steering and like less handholding as they become more competent or or no?
31:01
I'm not a pundit, right? This is what I say to every single one of these questions. I'm trying to do the best
31:06
with what I have right now and I don't I don't have the insight to know whether
31:12
these things will get better. I don't really want to make predictions about the future. I think that if I try to
31:18
keep my um workspace and my harness agent agnostic as much as possible, if I
31:25
try to apply good software fundamentals to what I'm doing, if I do stuff that's
31:30
always worked, then it will probably continue to work in the future. You know what I mean? So, if I try to overoptimize around a
31:37
model, if I get too focused on the model, I will lose focus on um the
31:42
fundamentals. That's that's that's my point of view. Yeah. So basically you're focused on like okay what has been true for the
31:47
last 10 20 30 years you know the the the really best principles of great software
31:54
and it's likely going to hold up with the next model rather than people going from the model first and like okay this
31:59
model maybe requires shorter prompts this model you know sucks at that part let me patch that part like building up
32:05
you know properly proper foundation rather than like starting with the model maybe exactly people are focused on the wrong
32:11
thing they're looking at the big shiny new when in fact just focus on the stuff
32:17
that's been working for 30 40 years, you know, and it really does work, you know,
32:22
if you have a codebase that's easy to change. Like people like people ask me all the time like how do you optimize
32:28
for for token spend, right? How do you optimize for token spend? Have a code base that's easier to make changes in?
32:34
Because then you can employ a stupider model. If your codebase architecture is better, then you can get a cheaper model
32:41
to do the same work because it your guard rails are better, it's easier to explore, it needs to spend fewer tokens
32:48
banging its head against the wall. If you're hamstringing your model from day one, then you will need a smart model to
32:54
get the most out of it. Um, but yeah, so I think thinking from the model first is
32:59
the wrong way to do it. Yeah. So basically I would say like the exact opposite of you is like the
33:04
quintessential vibe coder who like is switching tools every single week right like there's a new replet update goes to
33:11
replet agent switches to lovable switches to this and that constantly switching and never learning any any
33:17
programming principles anything about software engineering nothing you're like your approach is basically the difference is in approach it's not like
33:23
you don't believe in AI obviously right now you you're heavily trying to be at the age of AI and educating people how
33:30
to use it it's more about the difference of approach. She's like, "Listen guys, learn the fundamentals. Learn how code
33:35
works, how good software looks like, and this is going to be valuable no matter what. No matter if OpenAI is ahead,
33:41
Enthropic is ahead, Gemini is ahead." Versus the exact opposite approach, which unfortunately I think most of the
33:47
people who are new to AI take is like jumping on the latest trend and like switching everything the moment, you know, some new update or tool comes out.
33:55
Totally. And I think, you know, that's, you know, you can do that and that's exciting. Um, but you're not really
34:01
increasing your skills that way. And it's your skills. I firmly believe that are the ceiling to what AI can do. You
34:08
should be focused on yourself. You know, upskilling yourself for this new world instead of thinking um, right? How do I
34:14
delegate my thinking? How do I delegate more? You know, you should be pulling more into your own domain and delegating
34:21
only the tactical stuff. Keep the strategic mindset. keep thinking about you know the next uh months and weeks
34:28
ahead the road map of where you're going in your code instead of just um trying to delegate that to you know people are
34:34
obsessed by the idea that you know you can just delegate everything to AI and you can't you really can't and I don't
34:40
see I mean again I'm not a pundit you know I'm just looking at what we have right now and it doesn't
34:47
yeah yeah I I am the person in the real world that's driving this stuff I need to be the one making product decisions I
34:53
know where I'm going And I think me as a developer, I should be in control and I
34:58
need the skills to be able to do that. I agree. One note I'm going to share on Fable is that happened yesterday which
35:05
is a bit scary and it definitely doesn't follow security practices is that I was setting up a new um like a new agent for
35:12
for like Twitter and basically u the Twitter API was bugged. The developer console was wasn't loading some buttons
35:18
and I tried it on a different browser. It still didn't work. I disabled all extensions. It still didn't work. So I gave it like a few solid minutes to try
35:24
to debug it and I failed. I mean I didn't it wasn't the main thing I needed to get done so I didn't really try as
35:29
hard as I could but I gave it to Cursor powered by Fable. It used the built-in
35:35
browser inside of cursor. You know I had to log in obviously to the console but apart from that it started clicking. It
35:42
created API keys copied them. Again I do not recommend this for production apps. This is just a simple thing for me. And
35:49
then it figured out when it did the testing that those API keys were in a different like app in the console and
35:55
they actually weren't using the credits I charged up. So then it moved the app again using the built-in browser inside
36:00
of cursor and like for me I really felt like what am I doing here? Like obviously I described what we're
36:06
building, why are we building it, some of the you know kind of my version of grill me at the start but then I felt
36:11
like okay I just logged in into the console and I just charge up a few dollars but like everything else the AI
36:18
was doing right so like I felt like my value in this project was a lot lower than with previous models.
36:25
So what's your thoughts on this? I mean, if you think about the AI's
36:30
output, right, what it what it was doing at the end there, um, it needed like how
36:37
does the AI know at the end that it's done a good job, right? What it is is the theory here that you can disappear
36:43
from the project completely. No, you're still needed, right? Like all we're doing here is we've just given the AI a
36:49
set of tools and we're it's, you know, we've given it a scoped task and it's performing that task, right? you know it
36:55
we've given it a goal and we said you know do blah blah blah blah blah I don't think of that as that particularly magical you know that's something that
37:01
uh agents can do now you just give them the tools and they go and do it but to decide whether that's the right thing to
37:08
do to um uh security test that at the end of that that's something that you're needed for right you David are needed
37:15
for that to know whether it's done a good job and so yeah we can delegate more but I don't think that's a reason
37:20
to start thinking um you know or have AI psychosis or anything. It's just yeah,
37:26
it's a reasonable thing that the AI can do with computer use. I've also seen a lot of people report
37:32
like they they were, you know, maybe looking for optimizations or doing some feature and then again I'm talking about
37:39
fable because it just came out. It's topical, right? So, it's on top of my mind. But a lot of people reported that it found like deeper bugs that they
37:45
didn't notice at all. Whereas other models completely miss those. And that I I I would like again I would challenge
37:51
you slightly that that's a sign of like AI being able to do more. I'm not saying we need to be completely removed from
37:57
the loop but like if the AI is you know redesigning the front end and it finds a
38:02
issue in one of the like backend API endpoints like a major security issue I
38:07
would argue that that's like AI being more involved. It's not a 50/50 at that point.
38:14
Yeah. So you're saying that um the better a the better the engine is
38:19
the more value you can bring to the business just by having the engine and those effects are emergent. You don't
38:25
know what you're going to get by increasing the power of it. It will still know the vision, right? It will still know what you're doing here. Like this is a educational
38:32
repository for my students in my paid community or this is something just for my team. It will be used by roughly five
38:38
people. The purpose of this is XY Z. It will still know the core idea, the initiative that comes from you. But in
38:44
terms of the actions and like what happens, my argument would be that as the models get more powerful, more and
38:50
more of these is going to be done by the AI. But not only that, the AI will spot what needs to be done, such as the
38:56
example with the, you know, deep bugs that the user wasn't even debugging. Totally. But I I think that we think
39:03
that the model is the only way to get there, right? What you could be doing is in your repository is you could run an a
39:10
cron job that runs every single day, let's say, and does a security review and every day it checks a new part of
39:15
the repo, right? And you could use a relatively simple model for that and you probably get some decent results. I mean
39:20
this idea that there are deep bugs that um you know or deep sort of security things inside your application that uh
39:28
the model could spot and others cannot you know like sure that's like it sounds
39:33
attractive but you could probably also uncover those bugs with cheaper models if you just looked in the right places
39:39
you know and you gave it the right prompt let's say for one of a better word or the right harness so I don't
39:44
think there's something that's necessarily special about the model that does those things or you know and I
39:50
think that's again 50/50. If you had a harness that sort of was looking specifically for those things then you
39:56
would find them and I think we're lagging behind in our practices and expecting the model to just pick up the
40:02
slack. You can absolutely just run Opus and get it to do that stuff. You know, people
40:07
were talking about this like when Opus 4.5 came out, whoa, all these security things that Opus, it's just like, sure,
40:14
it's found them and you can just get that with a harness and just get it to do it again and again. I like
40:20
Yeah, I I understand. I understand like you're basically pushing against the hype wave, you know, you're trying to like implement some sense, some wisdom
40:28
into this. Say like guys, okay, the models are getting better. Yes. But at the same time, let's not lose the
40:33
obvious, you know, optimizations, the obvious things that has always always been true. Maybe like if you had a
40:39
better harness, you could support it even in the previous generation model. Or maybe you didn't have to spend $2,000 on API tokens, maybe only 200, you know,
40:46
stuff like that. So yeah, I I completely agree with you there. You're trying to be like one thing one thing just to to finish
40:52
there, which is that what is this what is this thing that you've learned from Fable looking at
40:57
your code and spotting a security issue? What you've actually learned? Sure, you've learned that Fable is good
41:02
definitely, but you've also learned that there are security issues in your code, right? And you should probably have
41:08
something that runs and checks for more security issues in the future. We need to build loops into our um loops for
41:15
God's sake um into our I mean, we can talk about that as well if I've got some opinions there. Um, you need to build
41:22
these uh systems that just check your like you need, what am I trying to say?
41:30
You need to figure out why it happened like why it even got to this place. You know, it's like if someone keeps stealing your bike, maybe buy a lock.
41:38
Yes, exactly. Maybe we need to uh be designing systems that are
41:44
self-improving over time, right? And this is something that we've been doing as software engineers for a long time.
41:50
We write test suites so that we can test our own code. We do human reviews so that we can make sure things are looking
41:56
the way they need to. We refactor so that we can change code better in the future. And sure, a model has uncovered
42:02
that we need to do a bit more of that. So let's do a bit more of it. But we don't need to use the fancy model in order to get those insights. See, that's
42:09
what one of the things I would put on the list is like the thing that really separates the people who are going to go
42:14
super fast with the AI and build better and more software versus people who are not. Like most people in that situation,
42:20
they would just say, "Oh yeah, Fable is great. Fix the bug. It fixes the bug." But like the the people I don't know if
42:26
it's like 10x developer, it's almost like 10x AI builder, you know, because everybody's becoming more of a builder,
42:33
whether it's a designer background, a developer background. It's like that person would look at the underlying issues. is like how did that even
42:38
happen? How did I have this bug for so long that I didn't notice it and try to patch the underlying issue? You know,
42:44
whether it's a new skill, a new system, better staging process, whatever that I think I would put as one of the things
42:50
on the list of your human capabilities or things you should have to get the most out of AI. Totally agree.
42:58
All right. So, you mentioned loops. This was super viral on Twitter. Maybe it still is, but like, you know, a week ago. Um I think it started with Peter
43:05
Stanberger if I'm not mistaken. But basically people are like obsessing over agentic loops. Uh half of it I would say
43:10
is like the research labs selling more tokens. You know basically you should be running loops to pay us more endless
43:17
tokens. Stop prompting your agents. Figure out what loops it can run forever permanently. Half of it could be useful.
43:23
What's your thoughts? So what we're essentially talking about
43:28
here is the difference between human in the loop work and AFK work. Right. human in the loop work being the human you are
43:35
there with the agent um talking together and like uh figuring out something. So really useful for planning, really
43:41
useful for some kind of more complicated implementations, uh really useful for unscoped work, you know, stuff that you
43:47
just need to uh figure it out locally with the agent. And then we're talking about AFK stuff. So AFK away from
43:54
keyboard, you ping off the agent and it goes and does something. Now,
43:59
I think that I mean the moment that I discovered AFK was the moment I really got into AI coding and the moment I was
44:06
really able to massively increase my output because then instead of me having to sit in the loop, handle all the
44:13
permissions requests, handle all of the, you know, anything the agent needs to ask me. The moment I can just remove
44:18
myself from the equation, I've paralyzed myself. Suddenly there are two of me, you know, or three of me, four of me,
44:23
five of me able to go and produce so much more code that I then go and review. This idea that loops are the
44:29
only way to do it is crazy, you know, like we're essentially talking about the history of this goes back to Jeffrey
44:35
Huntley. Uh where is it? G Huntley Ralph uh goes back to Ralph. You remember
44:41
Ralph? Yeah, I was talking about Ralph in uh January, I think. Um the original article comes
44:46
from 14th of July last year. And essentially it's a loop. So this is the
44:52
idea where you have a while loop that says okay pass this prompt to claude code and then um eventually you'll be
44:59
done. Now it's essentially just uh
45:04
running clawed code again and again and again. That's the idea of the Ralph loop that I was talking about for a while.
45:10
And what I realized is I don't really need to run this as a loop, right? The only thing I need out of this is the AFK
45:16
agent to take on a specific task and do that task. The way I mostly think about these
45:21
things as cues, okay, cues, not loops. The Q is really the backlog of tasks
45:28
that I need to complete. I'm looking at the Sand Castle issues right now. These are bug reports coming in about uh Sand
45:34
Castle feature requests, things like that. I need to scope the item. Let's say it's this for instance. So, I've
45:41
done a bit of triage here. It's um sort of explored. Okay, is this trivial? Is this possible? This uh was done AFK,
45:48
right? So, this this item has been picked off the queue. It's been explored, been put back on the queue. I
45:53
might then need to go and actually implement this. Uh looks like yeah, this looks pretty good. I'll actually add the
45:59
agent implement label and I'll go and implement this in my GitHub action sand castle setup that I was talking about
46:05
earlier. Now, this isn't a loop really like it's sort of just uh it's a queue that
46:11
eventually gets resolved. This will come off the queue once it gets um uh once
46:16
the pull request gets merged. And that's all development is really. You just have a queue of tasks that you need to get
46:22
done. Project managers add more stuff to the queue. You complete the tasks in the queue. Like that's how we've always done
46:28
it. And there are multiple nodes picking stuff off the queue, multiple developers. And so an idea that there's
46:33
a single loop that just sort of goes and completes all the tasks doesn't really match with how like you developer teams
46:41
generally work when it's all sort of inside GitHub actions like this. Uh anyone any developer can add one of
46:48
these labels can trigger something and can just get work going. So yeah, I I
46:54
think the idea of the loop is useful but it's not the whole picture. And I think
46:59
an idea of a queue where you're picking tasks off is is better. But mostly it's just sort of nonsensical really. Like
47:04
when people talk about you need a loop prompting your agent, we're really just talking about AFK agents.
47:10
Yeah. I guess uh when you talked, I don't know why, but the the image that came into my head is like a medieval
47:15
king managing a a kingdom with like some ministers or whatever. And basically
47:22
assuming you know the king knows the best know has most the most context not like a king that just like randomly got
47:28
inherited empire right. So if you deployed a minister into some region,
47:33
far region and you never heard from him, never gave him commands, he would be running on a loop and that could go
47:39
wrong or could go right depending on you know how complex the issues are in that region, how how smart the minister is,
47:45
whatever. But ultimately as as the king in that medieval kingdom, you want to do the Q approach. You want to have people
47:50
come to you and say like we have a problem upcoming invasion you know or there's a famine in this region and like
47:56
you have this queue of problems and you are still in charge so that would be the equivalent of a human here with you know
48:02
a bunch of agents bunch of AIs still you would be prioritizing okay we have these
48:08
50 bug reports only three of them are critical let's fix those first okay we have these resources um this brand deal
48:15
this company wants to work with us check their reputation first. Is that a good
48:20
way for to think about it? Totally. And what we're doing here is like you're still able to build tons of
48:26
automation into here. Let's say that I had some kind of telemetry set up for sandbox for sand castle or like an
48:32
observability tool like Sentry or something. I could get a bug report from a live application uh create an issue
48:38
from it immediately tag that issue as like explore the issue. Maybe the agent could return some structured data from
48:44
the explore saying can we fix this immediately or does this need a human in the loop? It goes and implements it. It goes and reviews it. And then maybe it
48:50
has a little tag on it saying, "Can we automatically merge this or does it finally like um ping the user to go and
48:56
do it?" Like I see these systems as you need human in the loop checkpoints and
49:02
you need to push those further and further right further and further towards the final thing as as or the
49:09
final output as you can. So you would essentially get these like in instead of like seeing the bug report, you would
49:15
see the bug report, you would see the um exploration of the codebase, you would see the fix and you see like um can we
49:23
review this? Yeah. Just like that's that's what you get as the human instead of seeing the bug report and it's just so much richer
49:31
and it means it's one button click away instead of a whole debugging session away. So that's I mean
49:37
so then the question here where Yeah. Yeah. So the question in that situation becomes because it's not
49:43
a loop right it only runs when the buck comes there's no point for it to running infinitely just paying open AI or
49:48
enthropic infinitely but my question was like you know again as the AI gets more
49:54
powerful where because you mentioned you push yourself further further to the right to like last step is pushing to
50:01
production what are the like when does it cross the threshold where like these type of things whether it's like a small
50:07
UI change you know user requests a new color scheme whatever like it could be approved automatically, right? And then
50:13
maybe we go more and more. So, how does that look like? Do you see what where I'm getting at? Oh, how do you remove human in the loop
50:19
checkpoints is what you Yeah. Like where do you decide basically where it's it's trivial enough for you
50:24
to not even look at, right? Like maybe maybe all the agents you have which
50:30
again you set up the harnesses, they have your skills, you use a good model and all the agents are like, "Okay, this
50:35
is a small bug. It was just a misaligned UI element. there is no, you know,
50:40
harmful intent from the user. The user isn't trying to hack the application. We're just going to merge it into prod right away. That will presumably grow
50:48
like the the scope of things that could be merged to prod right away. So, how would you think about that? Well, what I'd say is like what do you
50:55
gain from review, right? Sure. You gain okay like you gain the ability to gate things gate dangerous
51:02
things from going into production. So, prevent um security bad stuff happening, you Yeah,
51:08
prevent you know uh let's say uh claude code source code being leaked to the world you know you prevent that bad
51:15
stuff. Um, so but you also gain uh insight into your own system into the
51:22
into the plumbing, right? So you're watching the thing do its work and you're assessing did it do a good job.
51:28
And so that second one, you don't want to lose that because like again we're
51:33
talking about the harness, right? You want to improve your harness over time and you want some observability into it.
51:38
Now you could remove some human in the loop checkpoint. So you could say, okay, this uh this PR is just an internal
51:46
refactor. It just moves some code around. It doesn't actually change any behavior. And you could have an AI that kind of says, okay, you don't really
51:52
need to review that one. But then who reviews the AI that's doing that, right? How do you give feedback to that over
51:58
time? You probably do need to check some of the PRs that the agent says are fine to review to check if they are actually
52:04
fine to review. And then you improve that over time. And so we need to think about this. We're not just reviewing the
52:10
code. We're also reviewing the system that produces the code and that is important and useful but I agree the
52:16
goal is to remove human in the loop checkpoints where possible definitely. So maybe the better way rather than like
52:22
okay let's say in a average day for this application AI autonomously fixes 20
52:28
things and pushes to production right away because they were super small at the end of the day instead of you like reviewing all these because that'll be
52:35
boring and slow maybe you get a custom you know teach skill HTML file and say like okay this is the common patterns in
52:41
the bugs that were fixed right so like instead of you having to go through all of the GitHub commits PRs whatever which
52:48
is not really optimized for this agenda IC era. I mean again GitHub was created a long time ago. It would be a custom
52:54
software, a custom HTML file, whatever that's you know knows you, your learning style, your common mistakes. It has a
53:01
history of the bugs in the past, you know, whatever. And it would be more optimized to helping you improve
53:07
yourself and the system. Totally. I mean, one really cool like what we're talking about here is in
53:14
making review seamless and taking um taking the human effort out of review.
53:20
One thing that I've seen people do uh which is crazy is on any front-end change, it gets the AI to record a video
53:27
of itself walking through the code and like the the thing that changed. It then
53:32
calls a texttospech API and overlays some speech on top. So it's like the AI
53:38
is talking to you while it walks through the code and you just have a video on the PR of the thing working like that
53:44
sort of richness is something that we should be building into everything that we do and trying to optimize for human
53:50
review and make human review faster because everyone's sort of moaning about you know like oh man we've got so much code to review but probably you could be
53:57
using AI to help you review the code right like in in all sorts of
54:02
interesting ways that I think we're just scratching the surface of Absolutely. So
54:08
a lot of people want to build something with AI, right? Whether like you could start with some personal tools, some you
54:14
know something for your team, but a lot of people want to build a like business, whether it's AI startup, whether it's some other business. How would you think
54:20
about that? Like you know, a lot of people there's there's a group of people who say like, oh yeah, SAS, you know,
54:26
subscriptions, they're going to be more valuable than ever because you're going to be adding more seats for the agents. There's a group of people who say like
54:32
SAS is dead. How are you thinking about building a business, building software in the age of AI?
54:39
Well, I I don't think that much has changed about it to be honest. Um, like again, I'm not a pundit. I don't really
54:45
watch markets. I don't really like care whether SAS dies or thrives. Um, like if
54:50
you're building a business, what you need to do is the fundamental stuff. You need to go and talk to customers. You need to figure out what they need. And
54:55
then you need to build stuff um like you need to build prototypes that look like what they need and solve their actual
55:01
problem. I don't think anything has changed there and I think you can learn to do that and be better with it but I don't think AI gives you any particular
55:08
advantage there because what you need to do is go out in the real world and have conversations and figure out what it
55:13
actually is people need. So I think all of the classic product design books will
55:18
still make sense here. It's just you have a massive leg up when it comes to actually implementing it and the
55:24
procedures they talk about you can start delegating them to AI too. So mostly
55:29
though, it's just about having the right idea and building the right thing. And that's not something that AI can help
55:35
with. If you're not also talking to actual people and figuring out what they want, as soon as you figure out what
55:41
people want, um, you're good to go. Yeah, I think that's actually the thing that AI is notoriously bad at is like
55:48
the original ideas out of the box. And uh yeah, like that would be probably one
55:53
of the main pieces of advice I would give to people is like you need to be choosing the features that get added,
55:58
right? If you see somebody who's like delegating all of that, it's like what's the next big thing we should add? It's like no, you should be in charge of the
56:04
product. You could Yeah, obviously you don't have to like learn the exact syntax or whatever. You don't have to
56:09
read every file, but like you cannot be asking the AI to build your app. Like you need to have the vision. You need to
56:14
know why you're building it and like what problem it's solving. Absolutely. You should be asking AI what thing you can remove from your app.
56:21
Basically, you should be asking how do I make this simpler? How do I improve the UX? How do I actually focus in on what
56:27
people want instead of ending up like you know uh one of those dreadful uh VC funded apps that we've all seen where
56:33
there's a thousand features and uh you can't find the thing that you want to do. So again, this is just product design fundamentals.
56:40
We mentioned that senior devs get like 10x improvement and you know speed up.
56:46
How do you because from my experience that's true but only if they actually used the AI tools. There's a group of
56:52
there still developers still that are kind of refusing to believe it or you know AI is not that good. They tried it a year ago two years ago they were you
56:58
know disappointed but obviously tools harnesses models are much better. But my counterargument or maybe it's not a
57:04
counter argument is like what about just hiring the true if you were hiring hiring young people who are true
57:11
believers in AI who like know these tools inside and out. They use them all the time. They know what's the best
57:17
model, what's the best skill, what's the best, you know, agent in each situation. And obviously, they need to have some
57:23
technical fundamentals. But like, how would you reconcile this tension of like these are seniors who have 10, 15, 20
57:31
years of experience and they get a 10x versus these are like true AI believers
57:36
who might not have as much experience as the seniors, but like are better operators at using the AI? Well, hiring
57:44
great juniors has always been the goal of any company basically because if you find a great junior then anyone who's
57:49
enthusiastic will do a better job than someone who's more experienced basically
57:54
like enthusiasm beats experience just in pure output and because they develop so
57:59
much faster and they learn so much faster. And so people who are really uh excited about this new age and know a
58:06
lot about this stuff, if you can just pair that with a little bit of software fundamentals with because what we're
58:11
talking about here is I think of there as being a difference between DX developer experience and AX, right?
58:18
Agent experience. And so agent experience is the experience that the agent has working in the codebase. And
58:25
anything you can do whether that's um um better skills um you know increasing the power of the model works of course um
58:32
you know improving the harness and improving the codebase as well is like that's amazing often people forget about
58:39
improving the codebase actually for better AX you know improve about uh they forget about all the edges you can get
58:45
with like good software fundamentals and so that's where the senior will be
58:50
useful because the senior knows how to build good DX right they know how do if they're a good senior, they know how to
58:57
build a codebase that can work well with humans. And there's a huge overlap between good DX and good AX, but they're
59:05
just coming at it like the junior who's great at AI is just coming at the problem from a different point of view
59:10
from the um senior. Um what was your original question? How do they get hired or like how do you or like you hire out
59:17
of both of them? Sure. But not not like who would you hire but like who will maybe get more
59:22
alpha you know who be more valuable like is it like the senior who has a lot of these experiences you know the right way
59:27
of thinking about software but maybe isn't as true of AI believer and versus somebody who's like fully embracing AI
59:35
to the maximum and knows how to use it to the fullest. I think if you have an experimental mindset and you're excited about AI then
59:42
you're going to get a ton out of it whether you're junior or senior. And I think again if you're intrigued by the
59:47
harness first of all and intrigued by improving AX everywhere that you can then you're gonna you're gonna thrive
59:54
and love it. Now there's obviously a lot of like good reasons that people have for not wanting to get on the AI train.
1:00:00
You know they might um just be a bit you know squeamish with the ethical stuff. You know like anthropic stealing
1:00:07
everyone's um novels and just sort of pumping them into Claude. Um, but
1:00:13
like it is here and it's that's how the job is now. You know, if you're just a
1:00:19
tactical programmer just plumbing away doing your work, you're gone, right? Like that's out. You know, you can't be
1:00:26
a code monkey anymore. You need to think strategically. And so seniors can absolutely make the most of that. But
1:00:31
juniors can learn that, too. All right. My closing question is going to be practical for the people watching.
1:00:37
If you could take the average AI enthusiast and give him like one or two
1:00:42
action steps to do today to either improve his setup, improve his harness, learn something, what would those one or
1:00:48
two things be? First thing I would do is I would delete every single skill, every single plugin,
1:00:53
every single MCP server. I would go back. I' delete your claw.md, delete your agents.mmd, go back to absolutely
1:00:59
nothing, and then observe the agent. See what it does. In my experience, everyone bloats up their context window with too
1:01:06
much stuff, with too many instructions. Go back to a blank slate and see what
1:01:12
the agent does. Once you're seeing what the agent does in that basic um sort of
1:01:17
mode, then layer things on top of it and make sure those things are procedures, procedure skills, not um ability skills.
1:01:26
Layer things on that you yourself decide. And my skills repo is is a great place to start there. If you really miss
1:01:32
something, if you really miss like brainstorming from superpowers, then bring that back. If you miss this, if
1:01:37
you miss that and make sure that you install them in a way that you can customize them, you can play around with them and experiment, you know. Um, if
1:01:45
you're noticing problems, then try to find solutions to fix those problems and try as much as you can to delegate the
1:01:51
implementation to an AFK agent. Um, AFK is just incredible way to work. It's
1:01:57
just takes a little bit of setup, but once it's set up, it's just goes crazy.
1:02:02
Right, V? Appreciate your time. Where should people find you? Uh, find me on Twitter, find me at
1:02:07
aihero.dev, and I've got a newsletter where I post about all this stuff. So, aihero.dev, especially if you want to
1:02:13
learn about my skills and learn about updates to them, then go to aihero.dev/skills.
1:02:18
All right, I'm going to link all of that below. Once again, thank you for your time, Matt, and have a great day. Now where is David?

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

# EVSRC-2026-000298 — Matt Pocock’s Agentic Engineering Workflow

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `raw_dropped`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

## §0 — Source identity / metadata

- evsrc_id: `EVSRC-2026-000298`
- filename: `EVSRC-2026-000298_matt-pocock-agentic-engineering-workflow.md`
- source_platform: `YouTube`
- source_url: `https://www.youtube.com/watch?v=nQwJVHCtDDY`
- source_title: `Matt Pocock’s Agentic Engineering Workflow (just copy him)`
- channel_or_org: `David Ondrej and Matt Pocock`
- speaker: `Matt Pocock; David Ondrej`
- published_at: `2026-06-18`
- captured_at: `2026-07-19`
- captured_by: `Nick`
- capture_method: `transcript paste + screenshot`
- content_type: `podcast interview / agentic-development workflow demonstration`
- source_reliability_context: `practitioner`
- topic_tags_light: `[agent_experience, harness_engineering, strategic_programming, agent_skills, stateful_skills, context_ablation, AFK_agents, sandboxing, work_queues, review_sampling, adaptive_learning, software_architecture]`

## §0.1 — People / authorship / authority context

- primary speaker(s):
  - name: `Matt Pocock`
    · role_in_source: `principal interviewee / workflow demonstrator`
    · affiliation_at_publication: `AI Hero / independent developer educator and tooling author`
    · speaker_type: `practitioner`
    · authority_context: `Experienced developer educator demonstrating his skills repository, Teach skill, Grill Me workflow, Sand Castle agent sandboxing, GitHub Actions automation, and broader philosophy of strategic programming and harness-first engineering`
    · identity_confidence: `high_from_screenshot_and_transcript`

  - name: `David Ondrej`
    · role_in_source: `host / interviewer`
    · affiliation_at_publication: `David Ondrej Podcast`
    · speaker_type: `creator`
    · authority_context: `AI creator and interviewer challenging the harness-first thesis, discussing frontier-model improvements, agent loops, automation boundaries, hiring, and AI-enabled product development`
    · identity_confidence: `high_from_screenshot_and_transcript`

- publisher / channel: `David Ondrej and Matt Pocock`
- interviewer / moderator / host: `David Ondrej`
- event_context: `Long-form podcast interview and live workflow demonstration focused on agentic engineering, reusable skills, adaptive teaching, AFK execution, and the relative value of models versus harnesses`
- sponsorship_context: `The episode contains a sponsored SerpApi segment`
- perspective / conflict notes: `Matt Pocock promotes his own courses, AI Hero site, public skills repository, Teach skill, and Sand Castle tooling. David Ondrej also promotes his AI education community and sponsor. Claims about senior-developer multipliers, tactical programming disappearing, skill effectiveness, and model-versus-harness contribution are practitioner judgments rather than independently measured findings. The source is strongest on concrete workflow design and epistemic counterweights to model hype.`

## §2 — Screenshot / visible source details

- visible_duration: `1:02:18`
- visible_views_at_capture: `302,975`
- visible_capture_date: `2026-07-19`
- series: `David Ondrej Podcast`
- description_context: `Matt Pocock explains why software fundamentals, strategic programming, codebase architecture, reusable procedural skills, sandboxed AFK agents, and human-controlled work queues matter more than repeatedly switching to the newest model. The episode includes a live demonstration of a stateful adaptive Teach skill.`
- linked_resources_context:
  - `Matt Pocock skills repository`
  - `AI Hero`
  - `Sand Castle`
  - `SerpApi — episode sponsor`

## §3 — Interpretations & review log  ·  append-only

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`

- reviewer: `Knox / ChatGPT`
- type: `AI assistant`
- at: `2026-07-19`
- purpose: `strategic source-local interpretation`

**Signal:** **4.9/5 — major Agent Runtime, Build-OS, workforce-learning, context-governance, and automation-control source**

**Cross-source relationship:** This source directly extends `EVSRC-2026-000294–000296`. It affirms context artifacts, resolved manifests, activation receipts, harness loops, system understanding, sandboxed execution, and human-owned strategic judgment. Its distinct yield is:

1. **Agent Experience as an engineered system property**
2. **procedure-versus-ability skill invocation**
3. **baseline context ablation before adding instructions**
4. **queue-governed work versus indefinite agent loops**
5. **review as both output gate and producer-observation mechanism**
6. **knowledge and procedure being transferable while situated wisdom remains unpackageable**

**Net-new posture:** no new OMNI domain; **four credible runtime/control candidates and five major sharpenings**

### Core contribution

> **The model does not operate on a task directly. It operates through an environment whose architecture, context, tools, interfaces, tests, and feedback determine how much of the model’s capability becomes useful.**

The source’s model-versus-harness ratio should not be treated literally as `50/50`.

Its stronger claim is:

> **Effective capability is produced by the interaction between model capacity and system legibility.**

A stronger model may compensate for a hostile environment.  
A better environment may let a smaller model perform reliably.  
Neither removes the need for authority, verification, or human ownership of purpose.

---

### 1. Agent Experience should become an explicit runtime property

Pocock distinguishes:

- **Developer Experience — DX**
- **Agent Experience — AX**

This is more than convenient terminology.

A codebase or operational environment can be easy or difficult for an agent to navigate depending on:

- module boundaries;
- naming;
- interface clarity;
- test speed;
- deterministic setup;
- documentation quality;
- dependency visibility;
- error legibility;
- locality of change;
- tool reliability;
- sandbox availability;
- context compactness;
- architectural consistency.

A poor environment forces the system to spend more:

- tokens;
- latency;
- retries;
- model intelligence;
- human correction;
- verification effort.

## Candidate: `agent_operability_profile`

Possible dimensions:

- navigability;
- task locality;
- interface clarity;
- environment reproducibility;
- test and feedback latency;
- error interpretability;
- dependency complexity;
- context burden;
- safe tool availability;
- change isolation;
- model portability;
- human takeover quality.

This is not merely developer convenience. It affects cost, reliability, delegation readiness, and the minimum model capability required.

**Keeper line:**

> **Architecture quality is an inference optimization: systems that are easier to understand require less intelligence to change safely.**

#### OMNI translation

The same applies beyond code.

An OMNI domain is more agent-operable when:

- events are typed;
- ownership is explicit;
- authority is queryable;
- state transitions are constrained;
- unresolved conditions are visible;
- evidence is linked;
- tools expose bounded capabilities;
- projections disclose missing context.

A stronger model should not be used indefinitely to compensate for an incoherent substrate.

---

### 2. Procedure skills and ability skills require different invocation law

The source makes a useful distinction:

#### Procedure skill

- explicitly invoked by the human;
- structures a known workflow;
- remains under deliberate operator control;
- may not need to occupy ambient model context.

Examples:

- adversarially interview me;
- create a PRD;
- turn the PRD into issues;
- teach this topic.

#### Ability skill

- remains available for the model to invoke;
- may activate without a direct human command;
- influences ongoing behavior;
- consumes ambient context or registry-selection capacity.

Examples:

- coding standards;
- framework conventions;
- recurring review practices;
- specialized domain abilities.

This should become a formal extension of the existing `context_artifact_contract`.

## Candidate: `skill_invocation_policy`

Possible modes:

- `human_invoked_only`
- `mission_orchestrator_invoked`
- `model_selectable`
- `event_triggered`
- `always_active`
- `prohibited_without_approval`

Required declarations:

- who may invoke it;
- whether its description enters ambient context;
- activation evidence;
- authority inherited by invocation;
- tools and data it may access;
- whether it may invoke subordinate skills;
- whether it may persist state;
- whether invocation requires a human checkpoint.

**Keeper line:**

> **A useful instruction is not automatically something the model should be free to activate.**

This prevents a registry from turning every approved skill into ambient behavioral authority.

---

### 3. Context ablation should precede context accumulation

The source ends with unusually strong advice:

- remove skills;
- remove plugins;
- remove MCP servers;
- remove large instruction files;
- observe baseline behavior;
- add only what demonstrably corrects a real failure.

This is an important complement to the prior context-governance source.

Most systems evaluate a new skill only by asking:

> Did performance improve after adding it?

They rarely ask:

> Was the skill necessary at all?

## Sharpening: `context_ablation_protocol`

Evaluation should compare:

1. clean baseline;
2. current production context;
3. candidate addition;
4. prior version;
5. alternate model or harness;
6. behavior after removing the artifact.

Measure:

- target-task improvement;
- regression elsewhere;
- activation rate;
- token and latency cost;
- contradictory instruction;
- model dependence;
- whether the artifact has become obsolete.

**Keeper line:**

> **The clean baseline is part of the evidence; without it, context accumulation becomes superstition.**

This supports explicit retirement triggers and protects OMNI from permanent instruction sediment.

---

### 4. Stateful skills require mission-scoped memory law

The Teach skill stores:

- learner mission;
- current capability estimate;
- prior lessons;
- quiz results;
- decisions about what to teach next;
- local reference material;
- learning progress.

That is materially different from a stateless procedure.

The concept is useful for OMNI workforce training, patient education, provider enablement, and capability qualification—but only if state remains bounded and governed.

A stateful skill should declare:

- subject;
- mission;
- memory owner;
- allowed state;
- source provenance;
- retention period;
- correction rights;
- portability;
- isolation;
- reset conditions;
- whether state may influence future missions;
- whether it is merely educational context or authoritative workforce truth.

## Sharpening: `stateful_skill_session`

The session may maintain adaptive working memory.

It must not silently become:

- a personnel record;
- a clinical assertion;
- a competence credential;
- a durable patient preference;
- a cross-tenant profile.

A quiz result may guide the next lesson. It does not independently establish professional qualification.

**Keeper line:**

> **Adaptive state may personalize the interaction; only an owning domain may promote it into durable truth.**

---

### 5. Knowledge and procedure can be packaged; situated wisdom cannot

Pocock separates:

- **knowledge** — understanding concepts;
- **skill** — practiced ability;
- **wisdom** — knowing when, why, and under what conditions to apply them.

The first two can often be:

- documented;
- taught;
- encoded;
- rehearsed;
- distributed through skills.

Wisdom depends on:

- context;
- consequence;
- history;
- relationships;
- incentives;
- tacit environmental knowledge;
- lived responsibility.

This is an important counterweight to the entire skills-registry cluster.

> **A skill package can distribute a procedure. It cannot transfer the accountability or situated judgment of the person who originally knew when to use it.**

For OMNI:

- a clinical procedure does not grant clinical judgment;
- a compliance skill does not create legal authority;
- a care-coordination playbook does not understand every patient context;
- a design pattern does not decide whether the experience is humane;
- an architecture skill does not become an architect.

This should inform `capability_adoption_lifecycle`:

- exposure to a skill;
- demonstrated procedure;
- supervised application;
- contextual judgment;
- qualified delegation

must remain separate states.

---

### 6. Work queues are safer and more truthful than indefinite loops

The source challenges the hype around permanently running agent loops.

Its alternative is structurally stronger:

- work arrives as a bounded item;
- the item is classified;
- an agent performs a declared stage;
- structured output returns;
- the item advances, pauses, escalates, or closes;
- more workers may process other items concurrently.

This is not “less agentic.” It is more governable.

## Candidate: `agentic_work_queue_contract`

A work item should declare:

- mission identity;
- trigger;
- source and requester;
- priority;
- scope;
- current lifecycle stage;
- assigned actor;
- required tools and context;
- retry policy;
- timeout;
- dependencies;
- authority ceiling;
- human checkpoint;
- completion condition;
- failure and escalation state;
- final disposition.

Loops remain legitimate inside bounded work:

- retrying a test;
- iterating toward a constrained output;
- polling a known external condition;
- refining until a declared stopping rule.

But the portfolio of work should not be governed by an unbounded prompt that “keeps going.”

**Keeper line:**

> **Use loops inside missions; use queues to govern which missions exist, which matter, and when they are finished.**

This aligns closely with OMNI’s obligation, custody, and resolution lifecycle.

---

### 7. Review has two independent purposes

The source identifies a frequently missed point.

Human review may serve as:

1. **output gate**
   - should this specific change be accepted?

2. **producer observation**
   - is the harness still behaving correctly?

Even when low-risk changes become eligible for automatic promotion, removing all review loses information about the system producing them.

## Candidate: `automation_review_sampling_policy`

Possible controls:

- consequence-based mandatory review;
- random sampling of auto-approved work;
- increased sampling after model, skill, or harness changes;
- targeted sampling for novel patterns;
- automatic escalation after disagreement or failure;
- periodic comparison between human and machine dispositions;
- decay of automation confidence when sampling stops.

This resolves a false binary:

- review everything manually; or
- review nothing once the agent appears reliable.

A mature system may automate most low-risk cases while retaining statistically and strategically meaningful inspection of the producer.

**Keeper line:**

> **Removing the approval checkpoint must not remove observation of the system that earned the approval.**

---

### 8. AFK execution requires sandboxing, explicit identity, and pull-based results

The source’s Sand Castle workflow runs agents:

- in Docker, Podman, or remote sandboxes;
- against scoped repository work;
- through GitHub Actions;
- with resulting commits pulled back into the primary workspace.

This is a strong practical pattern:

`bounded mission → isolated execution → explicit artifact return → review or promotion`

The isolation protects against:

- filesystem destruction;
- credential leakage;
- environment-variable exfiltration;
- cross-task contamination;
- resource competition;
- uncontrolled side effects.

However, a sandbox does not itself establish safety.

The mission still requires:

- least privilege;
- declared network access;
- bounded credentials;
- non-human actor identity;
- output inspection;
- provenance;
- timeout;
- resource budget;
- revocation;
- recovery.

**Sharpening:** AFK agents should return candidates and evidence through controlled seams rather than directly modifying the authoritative workspace.

---

### 9. Better-model surprise should become a system-learning input

The discussion repeatedly returns to frontier models discovering:

- unexpected bugs;
- security problems;
- deeper implementation defects.

The wrong response is:

> The new model is magical; use it everywhere.

The better response is:

1. preserve the discovered issue;
2. determine why existing controls missed it;
3. classify the failure;
4. improve tests, skills, scanning, architecture, or process;
5. evaluate whether a cheaper recurring mechanism can now detect the class;
6. retain the frontier model for cases where its marginal capability remains justified.

This sharpens the earlier `correction_to_system_learning_loop`.

**Keeper line:**

> **Use frontier intelligence to discover missing controls; do not make permanent dependence on frontier intelligence the only control.**

A strong model can serve as an exploratory teacher for the harness.

---

### 10. Strategic programming must remain human-owned—but not human-exclusive

Pocock’s central division is:

- tactical programming — implementation, syntax, routine debugging;
- strategic programming — system shape, interfaces, task boundaries, tests, roadmap, and long-term velocity.

The source is right that implementation is increasingly delegable.

But “strategic” must not become shorthand for:

- senior engineer preference;
- unilateral architecture;
- founder instinct;
- undocumented taste.

Strategic decisions still require:

- domain evidence;
- product reality;
- security and operational input;
- user consequence;
- architecture governance;
- explicit authority;
- contestability.

AI can help:

- surface consequential decisions;
- generate alternatives;
- identify contradictions;
- predict implications;
- challenge assumptions.

It should not silently own the strategy.

**Keeper line:**

> **Delegate the production of options aggressively; retain accountable ownership of purpose, tradeoffs, and commitment.**

---

### 11. Mission-oriented teaching is more valuable than generic information delivery

The Teach demonstration begins not with a fixed curriculum but with:

- who the learner is;
- what they are trying to accomplish;
- what they already know;
- what successful real-world action looks like.

The resulting learning path is then shaped around the mission.

This is strongly relevant to OMNI’s capability-adoption lifecycle.

A provider, operator, patient, or builder should not merely “complete training.”

The system should connect:

`declared mission → current capability → bounded lesson → practice → evidence of understanding → next step`

However, the mission must not cause the system to skip foundational requirements simply because the learner wants a rapid outcome.

Mission orientation should determine sequence and relevance—not weaken safety or qualification floors.

---

### 12. Product vision remains grounded in reality, not generated feature abundance

The source’s product argument is intentionally conservative:

- talk to real people;
- understand their need;
- build the right thing;
- use AI to implement and test more rapidly;
- ask what should be removed, not only what should be added.

This is a strong counterweight to machine-generated product backlogs.

The more cheaply features can be created, the more important it becomes to preserve:

- user evidence;
- strategic coherence;
- simplicity;
- non-action;
- retirement;
- adoption;
- outcome.

**Keeper line:**

> **The ability to build every plausible feature increases the responsibility to choose very few.**

---

## What not to import

- The exact `50/50 model-versus-harness` ratio as settled fact.
- “Tactical programming is gone” interpreted as all implementation knowledge becoming unnecessary.
- Seniority treated as automatic strategic wisdom.
- Junior developers treated as economically obsolete.
- Human-controlled procedure skills assumed inherently safe.
- Local skill state treated as durable memory or qualification evidence.
- One person’s procedural preference standardized across every team.
- AFK execution treated as safe merely because it runs in a container.
- Model-selectable abilities loaded indiscriminately into ambient context.
- Review removed completely once low-risk work appears reliable.
- Queue processing treated as permission to execute every item placed in the queue.
- A model discovering a problem treated as proof that the same model must become the permanent monitor.
- Human mission ownership used to ignore valid machine-discovered alternatives.
- Product vision reduced to founder intuition without user and outcome evidence.
- Self-improvement loops allowed to modify shared behavior without promotion and rollback gates.

## Hard verdict

This is one of the most useful practitioner sources in the wave because it connects agent effectiveness to the properties of the surrounding system rather than treating model intelligence as a standalone force.

Its strongest contribution is the claim that the environment has its own operability—and that invocation, memory, work admission, and review must all remain explicit.

### Genuine architecture candidates

1. **`agent_operability_profile`**
   - measures how easily and safely an agent can understand, change, test, and recover work within a system.

2. **`skill_invocation_policy`**
   - distinguishes human-invoked procedures, model-selectable abilities, event-triggered behavior, and always-active context.

3. **`agentic_work_queue_contract`**
   - governs event-triggered and portfolio work through typed items, lifecycle, authority, retry, escalation, and closure.

4. **`automation_review_sampling_policy`**
   - retains ongoing observation of automated work even after individual approval checkpoints are reduced.

### Major sharpenings

1. **Context ablation before accumulation**
   - prove that a skill or instruction is necessary against a clean baseline.

2. **Stateful skill sessions**
   - adaptive memory remains mission-bounded until an owner promotes it.

3. **Knowledge / skill / wisdom separation**
   - procedures can be distributed; situated judgment and authority cannot.

4. **Frontier-model discovery into durable controls**
   - use strong models to expose missing tests, tools, and system protections.

5. **AX as compute economics**
   - better architecture reduces token cost, model requirements, retries, and correction burden.

6. **Mission-oriented capability development**
   - training should lead toward real action while retaining qualification and safety floors.

### Principal counterweights

1. Model improvement and harness improvement compound; neither makes the other irrelevant.
2. Installed skills are not neutral—they change behavior and consume attention.
3. Loops should remain bounded inside governed work items.
4. Automation still requires observation of the producer.
5. Encoded expertise does not transfer wisdom or authority.
6. Cheap implementation increases the value of product restraint.

### One-line read

**The decisive agentic advantage is not merely using the strongest model; it is designing an environment where bounded work is easy to understand, skills activate deliberately, state remains scoped, execution occurs safely, review observes both output and producer, and every model-discovered surprise improves the system rather than deepening dependence on magic.**

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-19` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Method note.** Read §1 verbatim transcript IN FULL (incl. the SerpApi sponsor break ~4:47–5:57, excluded from analysis) + §3 Review 001 (Knox, 4.9/5) IN FULL. §3 Review 002 (Nick) empty. This Review 003 **formalizes** Knox's read — verifies/sharpens, does not re-derive. PROPOSE-ONLY (`GRD-036`): nothing promoted, no domain minted, no shared run artifact edited (registry/matrix/anchor-ledger/00_index/`08` folded centrally by parent). Dedup baseline = `EVRUN-2026-000011` registry §1–§5 + `EVRUN-000001 §2A` + waves 4/5 + `EVRUN-000004 §0.5` retired-terms + `D0OL-GRD-001..008`. Source is a **practitioner interview + live demo** → strong on concrete workflow design + epistemic counterweights; multiplier/"tactical-programming-is-gone" claims are practitioner judgment, not measured. Anchors verbatim ≤12 words + timestamp. Build reality per boot: NO agent runtime / skill-registry / AI-gateway in repo → runtime candidates land `× absent`.

### Cluster table
| # | concept | OMNI meaning | homes | anchor (≤12w + ts) | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| 1 | **Agent Experience (AX) → `agent_operability_profile`** | effective capability = model capacity × system legibility; a domain/codebase is agent-operable by its navigability·task-locality·interface-clarity·reproducibility·feedback-latency·error-legibility·context-burden·safe-tool-availability·change-isolation·human-takeover; a strong model must not indefinitely compensate for an incoherent substrate | Agent Runtime & Harness (map-depth) · Build-OS (legibility) · thesis §B · domain-contract quality (typed events/explicit ownership/queryable authority) | "interested in the harness… get the most out of the harness" 0:00 | PARTIAL × absent | vocabulary/investigate | investigate |
| 2 | **`skill_invocation_policy` (procedure vs ability)** | a useful instruction is not automatically something the model may self-activate; declare who may invoke, whether its description enters ambient context, activation evidence, inherited authority, tool/data access, sub-invocation, state, human checkpoint | extends `context_artifact_contract` · Agent Runtime · Build-OS · RBAC/capability (visible≠authorized) · Foundry (generated-skill governance) | "disable model invocation true" ~21:29 | PARTIAL × absent | vocabulary/investigate | investigate |
| 3 | **`context_ablation_protocol` (ablation before accumulation)** | prove a skill/instruction is necessary against a clean baseline before adding it; the clean baseline is part of the evidence; protects against permanent instruction sediment + supports retirement triggers | Agent Runtime (context discipline) · Build-OS · context-governance (prior wave) · retirement/de-scaffolding | "delete every single skill… go back to a blank slate" ~1:00:48 | AFFIRM × absent | vocabulary | watch |
| 4 | **`stateful_skill_session` (mission-scoped memory)** | adaptive local state (mission/estimate/lessons/quiz/decisions) may personalize the interaction; it must NOT silently become a personnel record, clinical assertion, competence credential, durable patient preference, or cross-tenant profile — only an owning domain promotes it to durable truth | capability_adoption_lifecycle · Care memory (partitioned/consented — 295) · candidate≠commit · Knowledge-Reservoirs | "saves a bunch of state locally so it can remember" ~12:24 | PARTIAL × absent | vocabulary | watch |
| 5 | **knowledge / skill / wisdom separation** | procedures + knowledge can be packaged/distributed; situated wisdom (when/why/under-what-conditions + accountability) cannot; a skill package transfers a procedure, never the judgment or authority of who knew when to use it | capability_adoption_lifecycle (exposure→procedure→supervised→contextual-judgment→qualified-delegation as separate states) · Care (procedure≠clinical-judgment) · AI-never-care-authority | "wisdom is almost impossible… without having done" ~24:10 | AFFIRM × absent | vocabulary/spine-adjacent | watch |
| 6 | **`agentic_work_queue_contract` (queues > indefinite loops)** | portfolio of work governed by typed items (mission·trigger·requester·priority·scope·stage·actor·tools·retry·timeout·deps·authority-ceiling·checkpoint·completion·escalation·disposition), not an unbounded "keep going" prompt; loops legitimate INSIDE a bounded mission | OMNI obligation/custody/resolution lifecycle (OFC) · Agent Runtime · CNS orchestration · Reactor | "cues, okay, cues, not loops" ~45:21 | AFFIRM × absent | vocabulary/investigate | investigate |
| 7 | **`automation_review_sampling_policy` (review has two purposes)** | review is both output-gate AND producer-observation; removing the approval checkpoint must not remove observation of the system that earned it — consequence-based mandatory review + random sampling + increased sampling after model/skill/harness change + decay of confidence when sampling stops | Accountability (recall) · 288 eval≠release-authority · 285 compositional-review · Prove/Learn | "who reviews the AI that's doing that" ~51:52 | PARTIAL × absent | vocabulary/investigate | investigate |
| 8 | **AFK execution needs sandbox + identity + pull-based results** | isolated execution (Docker/Podman/remote) protects against fs-destruction/credential-leak/exfiltration/cross-task-contamination — but a sandbox does not itself establish safety; still needs least-privilege, declared network, bounded credentials, non-human actor identity, provenance, timeout, budget, revocation, recovery; return candidates through controlled seams | Agent Runtime & Harness · security-control-plane (absent) · non-human identity/RBAC · candidate≠commit | "run agents inside sandboxes" ~25:26 | AFFIRM × absent | vocabulary | watch |
| 9 | **frontier-model surprise → durable system-learning input** | a strong model finding a hidden bug/security issue is a signal to (1) preserve the issue, (2) find why controls missed it, (3) classify, (4) improve tests/skills/scanning/architecture, (5) see if a cheaper recurring mechanism now catches the class — use frontier intelligence to discover missing controls, not as the only permanent control | Prove/Learn · Accountability · `correction_to_system_learning_loop` (sharpened) · security (cron scan) | "if someone keeps stealing your bike, buy a lock" ~50:51 | AFFIRM × absent | vocabulary | watch |
| 10 | **strategic programming human-owned but NOT human-exclusive** | delegate production of options aggressively; retain accountable ownership of purpose/tradeoffs/commitment; "strategic" must not become shorthand for senior preference / unilateral architecture / founder instinct / undocumented taste — strategic decisions still need domain evidence, security input, user consequence, governance, contestability | thesis §B · Care authority · Build-OS governance · REV-184 · CNS orchestrates-not-owns | "AI has basically eaten tactical programming" ~1:36 | AFFIRM (w/ correction) × n/a | vocabulary | watch |
| 11 | **mission-oriented capability development** | teaching starts from learner mission/current-capability/success-in-the-world, then shapes a bounded path (mission→capability→lesson→practice→evidence→next); but mission orientation sets sequence/relevance — it must NOT weaken safety or qualification floors | capability_adoption_lifecycle · workforce/provider/patient enablement · Care (qualification floors) | "first the mission. I don't want to guess" ~9:20 | PARTIAL × absent | vocabulary | watch |
| 12 | **product vision grounded in reality (choose few)** | cheaper feature creation increases the responsibility to choose very few; talk to real people, understand need, ask what to REMOVE not only add; AI is notoriously weak at the original out-of-the-box idea — human owns which features exist | Polaris (composes not enforces) · product surfaces · non-action-as-commit (REV-184) · Build-OS restraint | "you need to be choosing the features that get added" ~55:53 | AFFIRM × n/a | vocabulary | watch |
| 13 | **AX as compute economics** | better architecture is an inference optimization — a more legible codebase needs fewer tokens/retries/model-intelligence/human-correction; "have a codebase that's easier to make changes in" lets a cheaper model do the same work | wave-6 F3 (cost-as-runtime-property — 291/296) · Reactor economic-admissibility · Platform Runtime · Build-OS | "have a code base that's easier to make changes in" ~0:37 | AFFIRM × absent | vocabulary | watch |

### Net-new dispositions (EVERY candidate accounted for)
Knox surfaced **4 architecture candidates + 6 major sharpenings.** Dedup verdict: **0 genuine net-new DOMAIN objects** (consistent with waves 4/5 + wave-6 batches 1–2). Dispositions:
- `agent_operability_profile` (AX) → **INVESTIGATE** (route: Agent Runtime & Harness + Build-OS legibility watch). EXISTS-AS pressure on the already-ahead Agent-Runtime map (290) + codebase-legibility; a measurement framing, not a new domain. Clusters with wave-6 **F5**.
- `skill_invocation_policy` → **INVESTIGATE** (route: extend `context_artifact_contract` + RBAC visible≠authorized + Foundry). EXISTS-AS 285 generated-skill-governance + 286 tool-visibility≠authorization + capability_envelope≠delegated_authority_envelope. Clusters with **F1/F5**.
- `agentic_work_queue_contract` → **INVESTIGATE** (route: OFC obligation/custody/resolution lifecycle + Agent Runtime). Knox himself notes it "aligns closely with OMNI's obligation, custody, and resolution lifecycle" → specialization over OFC, not a new root. Clusters with **F5**.
- `automation_review_sampling_policy` → **INVESTIGATE** (route: Accountability recall + 288 eval≠release + 285 compositional-review). EXISTS-AS Prove/Learn + release-governance; the producer-observation-after-checkpoint-removal is the sharpening.
- Sharpenings **context-ablation · stateful-skill-session · knowledge/skill/wisdom · frontier-discovery→durable-controls · AX-as-compute-economics · mission-oriented-development** → **DEDUP/watch** (EXISTS-AS: context-governance+retirement / care-memory-partitioning (295) / capability_adoption_lifecycle / `correction_to_system_learning_loop` / F3 cost-as-runtime / qualification-floors). Route to named homes.
- **Investigate-lane clustering:** 4 candidates cluster with wave-6 registry **F1 (governed compiler/skill-governance)** + **F5 (agent-runtime lifecycle/isolation)** — flag for parent's central fold. **Net-new DOMAIN objects: 0. Investigate-lane candidates named: 4.** No retired term re-minted; `D0OL-GRD-001..008` not re-minted.

### Counterweights (EVERY Knox caution preserved — NEVER inverted)
Knox "what not to import" — all preserved as-is:
1. The exact `50/50 model-vs-harness` ratio as settled fact.
2. "Tactical programming is gone" = all implementation knowledge becoming unnecessary.
3. Seniority treated as automatic strategic wisdom.
4. Junior developers treated as economically obsolete.
5. Human-controlled procedure skills assumed inherently safe.
6. Local skill state treated as durable memory or qualification evidence.
7. One person's procedural preference standardized across every team.
8. AFK execution treated as safe merely because it runs in a container.
9. Model-selectable abilities loaded indiscriminately into ambient context.
10. Review removed completely once low-risk work appears reliable.
11. Queue processing treated as permission to execute every item placed in the queue.
12. A model discovering a problem treated as proof that the same model must become the permanent monitor.
13. Human mission ownership used to ignore valid machine-discovered alternatives.
14. Product vision reduced to founder intuition without user + outcome evidence.
15. Self-improvement loops allowed to modify shared behavior without promotion + rollback gates.

Knox "principal counterweights" — all preserved:
1. Model improvement + harness improvement compound; neither makes the other irrelevant. *(Ondrej's live challenge — a better engine instantly lifts everything — is preserved as a genuine pole, not inverted.)*
2. Installed skills are not neutral — they change behavior + consume attention.
3. Loops should remain bounded inside governed work items.
4. Automation still requires observation of the producer.
5. Encoded expertise does not transfer wisdom or authority.
6. Cheap implementation increases the value of product restraint.
- **Opus-added counterweight (does not invert Knox):** the source's own §1 "vibe-coding into a live API console + charging credits + moving apps via built-in browser… I do not recommend this for production" is a live demonstration of capability outrunning governance — preserve as evidence that *computer-use capability ≠ authorization to act on consequential external systems*.

### Care implications
- **capability_adoption_lifecycle** gains its sharpest external articulation here: exposure → demonstrated procedure → supervised application → contextual judgment → qualified delegation must remain **separate states**. Direct care mappings (Knox, preserved): a clinical procedure does not grant clinical judgment; a compliance skill does not create legal authority; a care-coordination playbook does not understand every patient; an architecture skill does not make an architect. Reinforces **AI-never-care-authority**.
- **`stateful_skill_session`** is the care-critical guard: adaptive learner/patient state may personalize education but must not silently become a competence credential, clinical assertion, or durable patient preference — promotion to durable truth belongs to the owning domain (echoes 295 care-memory-partitioning + candidate≠commit at the knowledge layer).
- **mission-oriented development must not lower qualification/safety floors** — a learner wanting a fast outcome cannot skip foundational clinical requirements.
- **AX/`agent_operability_profile` applies to care domains**: a domain is agent-operable when events are typed, ownership explicit, authority queryable, unresolved conditions visible, evidence linked, projections disclose missing context — this is exactly OMNI's substrate physics restated as operability.
- **review-as-producer-observation** maps to clinical safety: even when low-risk care actions become eligible for reduced review, sampling the *producer* (the model/harness) must continue.

### Guardrail candidates → `08` open-review → `06` digest (named only; parent folds; PROPOSE-ONLY, `user_knox_required`)
- **G-311-1** An installed skill/instruction is not neutral: it leaks a description into context + changes behavior; prove necessity against a clean baseline before adding (ablation-before-accumulation). *(dedup vs context-governance/retirement triggers → reviewer: sharpen-existing.)*
- **G-311-2** A useful instruction is not automatically something the model may self-activate; invocation authority is declared, not implied by presence. *(dedup vs 286 tool-visibility≠authorization + capability≠authority.)*
- **G-311-3** Adaptive/stateful skill memory may personalize the interaction; only an owning domain may promote it into durable truth (personnel/clinical/credential/preference). *(dedup vs candidate≠commit + 295 care-memory.)*
- **G-311-4** A skill package distributes a procedure; it never transfers the situated wisdom, accountability, or authority of who knew when to use it. *(candidate NEW-or-sharpen vs capability_adoption_lifecycle.)*
- **G-311-5** Use loops inside bounded missions; govern the portfolio of missions with typed queues + authority ceilings — a queue item is not permission to execute it. *(dedup vs OFC lifecycle + candidate≠commit.)*
- **G-311-6** Removing an approval checkpoint must not remove observation of the system that earned the approval; sample the producer, decay confidence when sampling stops. *(dedup vs 288 eval≠release + Accountability recall.)*
- **G-311-7** An AFK/sandboxed agent is isolated, not authorized: containment ≠ least-privilege + identity + provenance + revocation; return results through controlled seams, not by mutating the authoritative workspace. *(dedup vs 290 harness-as-where-authority-lives + non-human-identity.)*
- **G-311-8** Use frontier intelligence to discover missing controls; do not make permanent dependence on frontier intelligence the only control. *(dedup vs `correction_to_system_learning_loop`.)*
- **G-311-9** Delegate the production of options aggressively; retain accountable human ownership of purpose, tradeoffs, and commitment ("strategic" ≠ senior taste/founder instinct). *(dedup vs CNS-orchestrates-not-owns + REV-184.)*
- **G-311-10** Cheap feature creation increases the responsibility to choose very few; ask what to remove, not only what to add. *(dedup vs non-action-as-commit + Polaris composes-not-enforces.)*
- **G-311-11** Computer-use capability (browsing/clicking/creating keys/charging credits) is not authorization to act on consequential external systems. *(Opus-added from §1; care/§C-relevant.)*

### Reread flags
- **`agentic_work_queue_contract`** must be reconciled against the OFC obligation/custody/resolution lifecycle + CNS orchestration before any promotion — risk of re-minting a lifecycle OMNI already owns.
- **`skill_invocation_policy` + `agent_operability_profile`** overlap wave-6 F1/F5 + 290 (Deep-Agents harness) heavily — treat as map-depth sharpening of Agent Runtime; do NOT build a skill-registry pre-spine.
- **stateful_skill_session** touches Care memory (frozen/partitioned) — reconcile with 295 + the Care-forensic audit before promotion.
- Practitioner interview with commercial promotion (courses/tooling/sponsor) + explicit "I'm not a pundit" hedging — treat multiplier/economics claims as judgment, verify before any downstream reliance.
- §C-adjacent: G-311-11 (external computer-use) + Sand Castle remote-execution touch the external boundary → §C stays **PAUSED** (pressure input only).

### One-line hard read
**The decisive agentic advantage is not the strongest model but a legible environment where bounded work is easy to understand, skills activate deliberately, state stays mission-scoped, execution is isolated-but-still-governed, review observes both output and producer, and every model-discovered surprise hardens the system instead of deepening dependence on magic — with human ownership of purpose, and wisdom/authority explicitly non-transferable.**

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` (parent folds cross-source) · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` (parent appends receipts) · per-source deep-read: §3 Review 003 (this file) · impact: `Agent Runtime & Harness · Build-OS · thesis §B · capability_adoption_lifecycle/Care · RBAC/capability · Accountability/Prove-Learn · §C (PAUSED, pressure only)` · promotion: `watch` (4 investigate-lane candidates; 0 net-new domain; 11 guardrail candidates → 08)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, third batch; `EVRUN-2026-000011`).
- `2026-07-19` — §0/§0.1 filled (identity `inferred` from Knox §0/§2 — no screenshot this session; stale header id `EVSRC-2026-000298` noted, canonical = filename `EVSRC-2026-000311`); status → `analyzed (Review 003 done 2026-07-19; awaiting 2nd-reader fidelity sign-off)`; §3 Review 003 authored (Opus formal deep extraction; 13 clusters, 0 net-new domain, 4 investigate-lane candidates, 15+6 Knox counterweights preserved + 1 Opus-added, 11 guardrail candidates named for `08`); §4 pointers filled. PROPOSE-ONLY (`GRD-036`/`GRD-044`); no shared run artifact edited.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

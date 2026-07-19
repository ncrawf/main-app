# EVSRC-2026-000303 — Odevo AI-Native Enterprise Transformation (Daniel Jones / re:cinq + Tomasz Maj / Odevo)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000303_odevo-ai-native-enterprise-transformation.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(filled from Knox §3 Review-001 embedded §0/§2 metadata block; NO screenshot dropped this pass → identity `inferred`; file NOT renamed per run scope)*
- evsrc_id: `EVSRC-2026-000303`  ·  filename: `EVSRC-2026-000303_odevo-ai-native-enterprise-transformation.md` (firm-slug SUGGESTION: `EVSRC-2026-000303_odevo-ai-native-enterprise-transformation`)
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=mB74LGAmmV0`  ·  source_title: `Daniel Jones & Tomasz Maj — More software, faster — Odevo's AI Native transformation — AI DevCon '26`
- channel_or_org: `AI Native Dev`  ·  speaker: `Daniel Jones; Tomasz Maj`  ·  published_at: `2026-07-17`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `enterprise transformation case study / technical conference presentation`  ·  source_reliability_context: `practitioner`  ·  topic_tags_light: `[enterprise_AI_transformation, agentic_engineering, organizational_adoption, developer_training, SDLC_redesign, enterprise_federation, citizen_builders, workforce_pressure, AI_governance, platform_readiness]`
> **⚠ stale-header note:** the pasted Knox §3 Review-001 block carries header id `EVSRC-2026-000291` — that number is already taken (Stanford "Economics of Generative AI" in the registry). Per run rule *canonical id = filename EVSRC number* → this source is **`EVSRC-2026-000303`** (Odevo), NOT a duplicate. Mirrors the batch-2 295/296 stale-id pattern.

## §0.1 — People / authorship / authority context  *(from Knox §0.1 + §2 metadata block; no screenshot re-verified this pass → identity `inferred`)*
- primary speaker(s):
  - name: `Daniel Jones` (DJ) · role_in_source: `presenter / transformation consultant` · affiliation_at_publication: `re:cinq (boutique AI-native transformation consultancy, northern Europe)` · speaker_type: `operator` (consultant) · authority_context: `describes discovery, training design, organizational enablement, agentic-development practices, and the transformation program delivered with/for Odevo` · identity_confidence: `inferred` (from Knox §0/§2; no screenshot this pass)
  - name: `Tomasz Maj` · role_in_source: `presenter / enterprise operator` · affiliation_at_publication: `Odevo` · speaker_type: `operator` · authority_context: `internal Odevo leader describing the technology estate, acquisition-driven complexity, adoption program, reported metrics, org changes, and future direction` · identity_confidence: `inferred` (from Knox §0/§2; no screenshot this pass)
- publisher / channel: `AI Native Dev`  ·  interviewer / moderator / host: `Unidentified AI DevCon '26 host`
- event_context: `AI DevCon '26 conference case study on Odevo's enterprise-wide adoption of agentic coding and AI-enabled product development (visible_duration ~36:50 · ~318 views at capture per Knox §2)`  ·  perspective / conflict notes: `jointly delivered by the transformation consultancy (re:cinq) AND the customer (Odevo) — reported adoption/throughput/rewrite/staffing/productivity outcomes are self-reported and partly promotional (GRD-039). Strongest as direct enterprise-practice evidence about transformation prerequisites, organizational bottlenecks, training design, and emerging workforce risks — take the mechanism, not the marketing metric.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
Okay. Amazing. I mean, we have three minutes, but I'm going to let these guys get started a little bit early since there's no seats left, so.
0:07
Damn. Dang. Impressive. So this is Daniel Jones and Tomasz Maj.
0:14
These guys are going to be giving you very interesting case study. But they're professionals.
0:20
As you can see from the not contrasting at all vibes here.
0:26
Absolute dream team. So take it away guys. Okay.
0:34
I'm surprised people won't put off by the scary, like, AI enhanced face.
0:39
Yeah, it's heavily very good. It was photoshopped a bit. You know, I wish they put more hair on my head.
0:47
So. Right. I'll kick things off. As you might have guessed. The topic is about generating more software faster.
0:55
And we'll come back to that theme at the end. And this is really the story of some work that we've done together.
1:02
One of us is an ex McKinsey consultant and the other works at a small boutique consultancy.
1:08
I'm not sure if you can tell which one is which. But yeah, so I'm Daniel Jones or
1:15
DJ to my friends because of the initials, not because of the raving. I'm not actually a DJ or anything like that.
1:21
I'm Thomas. Thomas is Thomas. What is your Polish? You can tell you can use one of the five versions of my name if you want.
1:30
Yeah, but it's only for Polish people. It's an internal secret we have. Yeah. So I work for a small consultancy.
1:37
Boutique consultancy, I think is the most flattering way to put it, called re:cinq. We're based in northern Europe and we do AI native transformation.
1:44
So we come from a background of cloud native transformation, helping people with, you know, cloud, Kubernetes, all those kind of things.
1:51
And we're seeing the same kind of patterns around transformation. And why adopting agentic coding practices and getting the most out of AI
1:58
is not just as simple as like, give people some Claude Code licenses. There are changes that need to happen around and alongside that.
2:05
So we'll go into a bit of that in this talk. Yeah. So yeah we'll talk about the background.
2:12
So I'll tell you a bit about Odevo. So we're all on the same page. Then we'll continue talking about the training.
2:18
And then together we'll wrap it up with some measurable impact that we have had now in with this.
2:24
So yeah the background the background of it is Odevo is a property residential property management company
2:32
that has both owns property managers and also provides them services.
2:37
Which one of those is technology, right. And in the recent ranking we are the third
2:43
largest tech company, private tech company in Sweden. So if you take loveable number one, there's another one in the middle.
2:51
We don't talk about them. And then it's us number three. So that's just how relatable it is.
2:56
And yeah, we are global right? We are the third largest. And we have we offer the full suite.
3:02
So we own the full entire value chain of residential property management. And property management in this context is like, you know, when renting a flat
3:11
and you've got to pay some company like £100 a month or whatever to like, make sure the bins are in good order and the communal lighting
3:18
and the HVAC works and the lifts and the elevators and. Many other things like that, the bills are accounted for and that nothing breaks.
3:27
Or if it breaks, it gets fixed. And the UK, of course, now it's all the fire safety.
3:32
Or in the US it's elevator safety and all the others, everything around it we own as the full suite of services
3:41
and to end in residential property management. Yeah. And it's quite important stuff in that.
3:47
Like the kind of people that your end customers, your end users like they some of them are volunteers.
3:52
So having good software that works well makes their life a lot easier. They're often under kind of equipped for the job.
3:58
They have to manage finances and maybe they're volunteers. So if Odevo can do things really well, then there's a large scope
4:05
to make lots of people's lives better and improve their living circumstances.
4:10
Yeah, yeah. So we're growing like crazy. We've been acquiring a new company pretty much every week.
4:16
We have to take into account an M&A, in our case, is taking a company that's usually a father, a mother, a kid and a dog that are a property manager.
4:26
And we sort of we buy this at scale across the across the northern hemisphere,
4:32
from the US to, to, to Europe and everywhere else. So we're present in the United States, Mexico, United Kingdom.
4:40
We originally started in Sweden. And then we started growing, expanding towards the UK,
4:45
United States and and the rest of the world. And we're right now focusing in which we can't grow more time zones.
4:54
It's becoming a bit problematic. So we're sticking to the ones we have and probably will continue growing either
5:00
probably north in some parts, south and others, or trying to bring everything together. So yeah, it's a massive, massive change.
5:08
Seven and seven years, we've gone from 50,000 homes under management to two, 2.5 million
5:15
from 1000 employees to 14,000 employees. And we continue growing and continue expanding.
5:22
What? Yeah, as a company. And those all of those acquisitions and having different solutions
5:28
in different places means that there's a really heterogeneous tech kind of situation.
5:33
So a number of different tech stacks you have, like. If you have a tech stack, you think you have a tech stack,
5:38
we probably have it. So we have we have everything we have, we got we even have some,
5:44
some sort of we use software that's completely there's no UI to it. And you call a server
5:49
and it takes sometimes like 30 minutes to just upload information about it's it's also very outdated heavily paper and pen and paper industry.
5:58
So in the UK we still have a property manager will put
6:04
how much he has to charge a homeowner association, how much money on to post it. And those posters tend to be lost sometimes.
6:12
So stuff like that happens still today, which is really cool that the power of digitization in property management is massive.
6:19
It's everything. There's just there's a win and there's a case for all sorts of things,
6:25
which will be very important when we talk about the impact of this training. But yeah. Yeah. And so there's lots of different tech stacks.
6:32
And because of the acquisitions there's also a lot of different cultures. There's a lot of different processes, a lot of different methodologies.
6:38
So when we're talking about, you know, it wasn't so much that there's like one way of doing things and that's what needed to be evolved.
6:46
There were loads of different ways of doing things. Which brings us on to like the AI situation when we started this journey.
6:53
When we when I joined in 2024. So we had some things in place. We we've been already using GitHub
6:59
Copilot in our, our developers were using GitHub Copilot. We've built our own chat solution
7:06
based on on OpenAI's API, which is a dogfight for. The main reason for that was that we process a lot of sensitive data, customer data.
7:15
We did not want to sort of have our employees go wild and upload the information that shouldn't be uploaded to different types of chats.
7:25
So we build our own solution. And somewhere we were having a bit of Claude islands,
7:31
we would say like there would be 1 or 2 devs who got very excited, decided to get a license on their own and use Claude
7:39
or other tools, but it was just sort of like an island here. One guy there, one guy there, nothing serious.
7:45
And we weren't really there wasn't really a adoption of a massive adoption of AI in the devs job.
7:51
Right? So we only had around 30% and it was most GitHub copilot.
7:56
When we talk about time to merge, things took a lot of time when it came to PR sizes, usually big once a week, sometimes more, even less often.
8:06
And of course the devs were not. It was quite slow, so we did invest a lot of time
8:12
when I joined in 2024 to systemize a way of working around flow, around maximizing and sort of the the speed and making it transparent
8:21
because most teams did not even know they were underperforming. They just everything was kumbaya. Everyone was like, hey, let's go.
8:28
We created that transparency, which then helped in adopting AI and the trainings, making them more successful.
8:35
Right. We had to create that, that knowledge. And that was something that really made the future journey much easier,
8:41
because we already spent a year and a half bringing modern ways of working to the teams across all these tech stacks, all these cultures.
8:50
So that was that was an important investment in the beginning. But yeah, we were okay. But it wasn't really like a massive.
8:58
So a nice spoiler alert. Yeah disruption is coming. And we we already knew that AI is going to be a big deal.
9:05
Like this was still pre summer 2025. We again had more and more of these islands Claude islands popping up.
9:12
And it's nice that Claude island that would be a nice place or a scary place for some maybe. But we saw that there was more and more talk about it, and we realized
9:20
we had to partner up with someone to help us in this journey. To help all the devs,
9:25
we made a very bold statement that we're going to train every single developer and organization on the same way around AI,
9:32
so we we create an RFP with AI, those I mean, all the we we sent it out.
9:38
I made a big mistake of putting on LinkedIn. I am looking for an AI training company.
9:43
I got a lot of 15 year olds telling me they have 25 years of experience doing AI training. That was weird.
9:49
Or of course, I had several people who told me there had been they've been doing agentic before agent was a thing, so
9:55
I got around 80 submissions or people reach out to me. I had to sort of simmer down and tell them to relax.
10:02
We then we got ten that we really looked for, looked good. We ran several talks with them
10:10
and we landed with. An idiot with a mustache. That's exactly what we called him.
10:17
Where he couldn't remember his name. What's his name? Oh, it's the guy with the mustache. Yes, yes. Wearing ridiculous clothes as well.
10:23
So that was summer last year. And, I mean, it seems like ancient history, but that was like before, you know, Opus 4.5.
10:32
It was before spectrum development was kind of becoming popular. It was like September when I think spec Kit came out.
10:38
So you folks were quite ahead of the curve and seeing that this wave was coming. And we really wanted we really our main takeaway
10:46
was with AI, bad things get worse and good things can get better. So we really wanted to have someone who could help us in that journey.
10:54
Yeah, it wasn't easy, right? We really did land with three companies in the end that were very close. But again, the mustache. Exactly. Was the most.
11:01
You want to win more business, get good facial hair. That's one option anyway. So let's talk about training.
11:08
I probably should have given some kind of like photosensitive sensitive epilepsy warning. So if anyone is like sensitive to flashing lights
11:16
or you've got a stinking hangover, definitely not me. You might not want to look at the brightly colored slides.
11:22
So I'm going to talk to you now about the training, how we did it, and some of the things we did before the training to make it more successful.
11:29
This is not as a sales pitch. This is so that you can go and do this inside your organizations
11:34
and think about the kind of fundamentals that need to be in place to do this. Well. So the first thing
11:43
told you it first thing that we did is a process called discovery.
11:49
So for folks who aren't consultants, this is where you go into an organization and you figure out what's the current lay of the land.
11:54
And this is a really important thing to do because of this very authentic
11:59
Dora report quote might be. But in the 2025 Dora report, there were a couple.
12:07
There was one that was, I think, August ish. It made the point, after looking at a couple of thousand companies
12:14
that if you are not doing software development well at the moment and you
12:19
throw agentic coding at the problem, things are going to get worse. You're optimizing a system, you're making one part
12:27
of an interconnected system go really fast. You will expose bottlenecks elsewhere.
12:32
If you're doing software delivery well and you start adopting agentic coding, then things will go much faster
12:38
and you'll be on a hockey stick of like exponential performance. The tricky part is that nobody knows where this balance point is.
12:45
Like how crap do you have to be? Is it that how bad software development do you have to be to go slower?
12:54
Like, are you in a good place or not? And as an industry, we haven't quite figured that out, but the kind of things
12:59
that we needed to look at across the various different teams and cultures at Odevo were things like CI/CD, do you have a platform?
13:08
This is a current bugbear of mine with I shouldn't tell too many tangents about other customers,
13:13
but if you don't have a platform like you can't ship code reliably and quickly, and then you're just
13:18
going to generate all this code and have no where to go with it. Do you have tests? If agents can't run tests to find out they've broken your software,
13:25
don't be surprised when they break your software. If you're you don't have coding standards.
13:30
If you're the humans in your organization, don't agree what good looks like, then there's a very low chance that an agent is going to be able
13:37
to produce code that your team is going to approve of. So there are lots of things that are worth looking at.
13:43
And the optimist in me likes to think that maybe this is another opportunity as an industry, that we get to
13:49
look at those fundamentals and go, look, we really need to improve these. And we really wanted we made it very clear in the RFP
13:57
that we do expect to discover recession that we will pay for because we're
14:02
I mean, it's very easy to make assumptions without understanding. So we really wanted our partner to get to know our company better.
14:08
We've had some bad experiences when companies came in with all these assumptions which were not right.
14:15
So we really wanted the the partner. We're partnering with this guy to get to know the people
14:21
that will do the training for it, to know the company. This was a very important part of making this a success, I think.
14:27
So, yeah. If you're going on an coding journey in your organization, make sure that you're bringing attention to these fundamentals and like
14:34
raising the flag if if they're not, if they're not good enough. The next thing that we did was workshops.
14:42
And we got lots of people in the fancy office, which is Spotify's old office.
14:48
So it's quite cool to be be be there. But doing things in person, both to
14:56
we did the initial set of training in person, but also we did workshops to explore how people felt about all of this.
15:01
So hands up if anyone knows what liberating structures are.
15:07
Panels, you know you're just lazy. Can't be bothered to hand up. So Liberating Structures is like a menu of different meeting formats
15:14
and ways of facilitating conversations that tend to subvert power dynamics and make sure that idiots with loud
15:21
voices like me don't dominate an entire conversation. So we used a couple of these in person to ask people, you know,
15:29
what do you feel about the upcoming AI training that you're about to do?
15:34
What emotions do you experience? Are you are you scared? Are you worried that your job satisfaction is going to go?
15:41
Are you worried about the not being motivated in future? We also did a round of questions using a format called trees,
15:49
which apparently any Russian speakers in the room. It's some acronym for the Creative Theory of Problem solving.
15:55
So we posed a question to the group, which was, imagine that you work
16:00
for a property management company called Odevo, and they're about to hire 200 junior software developers
16:06
that come from a country and a culture where they always say yes. They never say no. They don't push back on anything and they never sleep.
16:13
They've got an intravenous drip of Red bull, and they're just going to code all day and all night.
16:19
How could we make sure that this is a bigger disaster as possible? And then we everybody contributed their ideas and chatted amongst themselves.
16:27
Next question was what do we do here? That's a bit like some of those bad things. And then you see everyone kind of looking at each other going,
16:34
can I say that the testing is not good enough? Yeah, it was really cool. That was also unanimous across all these different tech stacks.
16:40
There's cultures. They started saying, you do it. We also do it. It was like a lot of these like Spider-Man memes situation.
16:47
It was really everyone was like, oh my God, you don't test. We don't either. Why? And then yeah, it was.
16:54
And this is important in terms of reducing reactants, reducing people's
16:59
hesitancy, reducing the fear that they have. Getting them to start thinking about the solutions they're going to
17:05
need to make this work better. So this is if you take anything away from all of this, really get people on board
17:12
and getting speaking to each other face to face, empathizing with each other, find out what their fears are so then you can have a more sensible conversation with them in the future.
17:20
And we also did a we did a pilot version of the training as well, to learn all the to get all the little things that could not go right in the big session.
17:29
So we did a pilot version that was on November 11th, a very important date. It's Polish Independence Day.
17:34
So please remember 1111 is pushing dependance. And we did a pilot. And that also helped, right?
17:40
Because we we did in a small group, we realized all the things that could go bad or right or whatever, what to watch out for.
17:46
And that made it. Then the big one where we had 80 people much more successful, I think. Cool.
17:51
Yeah, I learned lots of important things about Poland when working with Tomasz, one of which is don't go out drinking with a tall Polish person
18:00
the night before, delivering training or delivering a conference talk. The Jagermeister last night might have been slightly surplus to requirements.
18:07
Anyway, we're already kind of 15 minutes in, so we probably need to speed up something about training technique.
18:13
If you end up going through training, delivering any of this yourself, or trying to upskill your peers, a really powerful technique
18:21
is after just getting somebody to do an exercise is, what did we just do? So we would deliver a training module, get into an exercise of
18:29
and we talk about the syllabus in the moment. But draw up live okay. What did we just do. Okay. So you install Claude. Where did that come from. Okay.
18:36
You typed in a prompt where did that prompt go. And then it called a tool. Okay. Where do tools actually execute.
18:42
How does the model decide which tool to use. And drawing this up piece by piece means that you can
18:49
leverage different types of mental machinery that we have. So it's got social importance because people remember
18:56
sitting there awkwardly going, oh, I've got to answer the question because they did it with asking. We're not going to go on until we've answered.
19:03
People contribute things. Funny things happen. It's a visual way of representing stuff. So it really cements people's knowledge
19:11
in a way that just doing the exercises doesn't. So I would really recommend trying to use a technique like that when you're a.
19:18
And make the workshop in person. That was also a massive thing. We really brought everyone into the office in person.
19:26
We fed them, of course we did give them, which is a big thing in Sweden. We fed them.
19:31
We then had an after party, everything around that, but by bringing them in into the office,
19:36
telling them the first half of the day, no laptops, you were going to talk it out. That also made the training stick more right rather than than being,
19:45
of course, doing multitasking and not listening to the guy with the mustache, putting them in the office
19:50
to see each other, to meet each other, to put a oh, this oh, you it's you. Okay. That also made a massive change.
19:56
And we pushed for that heavily that it has to be in person. It has to be in Stockholm. Cool.
20:02
So the syllabus then in terms of what we actually taught people, really fundamental thing teaching people about context
20:09
context management and maximum effective context windows. If you don't understand that, the more you add
20:17
into your context window, the more off the rails the LLM is going to get. Then people start doing daft things, like adding every possible instruction
20:25
for every possible scenario into their agents. MD, which has been shown in a couple of academic studies. Now to have negative impacts, you're better off having no instructions
20:34
in your agents MD than lots of them. For example, we also did exercises with old models
20:40
that are easy to get to hallucinate and to do prompt biasing to demonstrate people the failure cases.
20:46
I shouldn't go in standards. We don't need to train people on how to use coding agents on the happy path.
20:54
It's when it goes wrong. When they work, it's magic and you just get working code out at the end. So the important part is teaching people about the failure modes.
21:02
And that's what the first module was all about. There's a big jump between using something like VS code, GitHub Copilot,
21:08
and Claude Code. For a lot of people psychologically, like when you're in VS code, you choose which files are open and you can look at them any time you like.
21:16
When you're using Claude code in a terminal, then all of a sudden the agent is doing stuff and it chooses what to show you.
21:23
For some people, that was quite a big jump. So that's a thing to be aware of. We talked to people about MCP and spectrum developments and eventually got onto
21:31
multi-agent workflows and things like Gastown, now Gas City, which by doing all of those things, they then had the building blocks
21:39
by the end to think about how this would be applied to a team process, not just to an individual.
21:47
Another thing that we did that was quite important is we did not deliver this training all in one go. So there's a journey that people need to go on.
21:54
And we did weekly half day modules and then at the end. So okay, you've just learned about MCP.
21:59
Why don't you go away back to your desk, install the MCP, ask it like can you figure out what ticket I should do next?
22:07
What do you think of the acceptance criteria? And then allowing that to be pushed back and find out
22:12
whether this stuff works in real life, not just in a training exercise. And make sure you tell IT ops that people will be installing
22:19
software on their laptops. We lost like 15 to 30 minutes in our trainings because people couldn't install Docker.
22:26
That was great. Yes, win. And another important part of this psychologically is people like
22:31
the training exercise is gave people a guided tour of like here's code, here's how skills work.
22:37
But it's when they then go back to their own desks and make their own minds up and get the chance to play with it
22:42
on their actual production code basis. That's when people start to see the power of this kind of stuff,
22:48
rather than just when we're showing it to them. So should we get to the impact?
22:54
So of course there's an impact. Massive. Everything up, everything. All the good things up, all the bad things down.
23:01
But yeah, but it really did. We do see after now after we finished these trainings in February.
23:08
So we trained a whole entire group within. Then I did a little more with others. But in general by mid-February were finished with our core group of developers
23:18
and we are seeing a massive, massive we are seeing great things. Right. So in general, we're seeing AI adoption now at around 94% based on.
23:29
Did you use AI in your last ten years? 94% said at least in at least three or more,
23:36
50, 60% in ten out of ten, and then a bit less. But only 6% of organizations did not use it.
23:43
And it's more interesting why rather than do it right. So now we're doing interviews with that group on on this.
23:51
What's happening? Why aren't you using it to make your life and a general like what's what's blocking you?
23:58
We are seeing massive increase in time to market. So we are able to push things faster.
24:04
We are able to build things smaller and better quality. And of course yeah, it's it's also the the whole
24:11
merge and releasing things makes it much easier. So we're seeing that. And if you look at the PR throughput and it's constantly increasing right.
24:20
So it's it's transparent. We've also built a series of dashboards. And every dev can see every other dev's
24:27
where they are working, which repos they're working on. We're making it super transparent and cross the org across all teams.
24:35
We've invested in that as well. So we have this data on a click of a button. You can even chat to it. You can have conversations.
24:42
So it's very easy to find what's working, what's not working. And of course we're seeing a constant increase in it.
24:48
I think giving people tools we would probably see similar trends, but I don't think they would be as impactful.
24:55
And that the training did it enabled that they're more intentional how they use it and they use it, I think, in a much smarter way.
25:03
So people are not, you know, pumping everything onto Opus 4.7 just because they are they're experimental.
25:10
They're playing with things. But, you know, all these metrics are great. But I think the biggest impact of our AI transformation was in this,
25:19
this is this, you know, you can if you if you find enough smart people in the room, hopefully all of them will start, maybe not as exponential in our case
25:27
in this case, but there should be an increase. Now the tools are getting better. What we saw and if you go to the next slide was the boldness.
25:36
People are not afraid to try things. And I think that's the biggest takeaway for me. If anyone asks how do you measure a successful AI transformation?
25:45
It is how many more bold things are you doing? How many experiments are you trying out?
25:50
Are you actually trying to do a full end to end agentic workflow? So one of our we did a very bold move.
25:57
We took a platform that we've been building for eight years wasn't a great success.
26:03
What we did is we took it and we rewrote it end to end rewrite. It took us with the support of an external expert, but we rebuild it.
26:12
Feature parity 1 to 1 in three weeks. So something that we've built for eight years, we were able to rewrite
26:18
in three weeks, feature parity 1 to 1. And now we're continuing to build it, have a team dedicated much smaller than we had before.
26:26
So that was 20 devs building it for eight years. Now we have four devs building it with with AI.
26:33
That's that was a bold move trying to build a mobile app in three days. We tried. That didn't work out.
26:40
Yeah, not so great, but we tried. So we're doing a lot of. Also, if you remember when I showed you the map, right.
26:48
All that that fragmented software, all countries are doing different things.
26:53
It's also because of regulation of legal stuff, everything. It's very complicated to build a single piece of software for all those markets.
27:00
But now we're trying we're going to try to build a dedicated platform that will be able to tackle all the all the needs
27:09
of all the markets in a single source, in a single place, and then, of course, customized with AI for their different needs.
27:16
But that could have would have never happened last year or without this feeling of boldness.
27:22
We've got four minutes and 45 seconds and we've got quite a few slides. So with this in particular.
27:28
So we did the coding training. People were using Claude code on an individual basis. One of the teams that Thomas mentioned took a step back
27:36
and was like, how do we reimagine our software delivery process? Like working on individual stories just doesn't work
27:42
when you can go so quickly with coding agents. So what they did was an entirely different approach.
27:47
That was AI. First, they spent two weeks talking about product requirements, speaking with their mouths, having everything
27:53
automatically transcribed, from which they then went on to get agents to create a product requirements document.
28:00
And they really battle tested that. They thought it through very deeply. They sketched out the entity relationships or the business logic,
28:07
get that domain really well defined, then ship it off to agents to split into like a task plan, kind of like spec-driven development,
28:15
but like upper level of abstraction, if you like. And now developers pick up a couple of epics a day,
28:22
and if one developer wants to use be mad. Sure, fine. If the one wants you spec it, fine.
28:27
Some people are still vibe coding, but they each have their own way of working.
28:33
Once they pick up an epic and they're no longer doing human code review. So they will look at the code themselves.
28:39
They're not writing code anymore on that team, but they will do like 7 or 8 passes of a code review before then raising a PR,
28:48
which they will then self merge so they don't have the bottleneck of other humans reading code, like humans doing static analysis of code is a silly idea
28:57
in the first place. So they've gone fully AI AI native in all of the steps,
29:04
and trying to use the existing scrum Kanban methodologies is you're going to hit bottlenecks very, very quickly.
29:12
So once you've got those practices in place, then it's time to reassess your SDLC and how you go about doing things.
29:20
And then and there's sharing this. Right. So there again sharing we're making it more like we're using them
29:26
as a lighthouse. Everyone can go and join, talk to them, see how they're doing. So it's also a massive transformation.
29:32
Everybody's talking about sharing. We've also talked about this. We do a podcast work. Tomasz has been on it.
29:37
And so one of the developers on this team, so the latest episode is all about this process and their methodology.
29:43
Speaking of which, the impact on people. So this is the Dominic who's a would try to pronounce that last name.
29:52
It's a. How was it done authentically in. A very nice Polish last name. He doesn't speak Polish though, so he has a hard time.
29:58
Yeah, yeah. So Dom, he was an AI skeptic when we came to the training. He had previously got ChatGPT to write code in isolation, you know,
30:06
non-urgent and was like, this is rubbish. It's never going to work. And also had like quite legitimate ethical concerns about AI,
30:13
how the models of trained the energy usage and all of that kind of stuff. It was when he had the opportunity to play with opus
30:20
45 back in November, and the freedom to explore that. That's when he realized that the previous beliefs weren't true and that when running a gently,
30:30
these tools can create good code that he would be proud of. You will find in a lot of organizations people that trade vs code GitHub copilot
30:39
like a year ago and it was rubbish and they're like oh, I think is never going to work. I tried it once. It was crap. And it's never, ever going to be good.
30:46
You will find people like that and they need the opportunity to see the current state of the art in order to change their minds.
30:53
And like Dom on the podcast was saying, I haven't written any code at work for 4 or 5 months.
30:59
What was interesting is he's doing it for fun at home. You know, just like you might buy furniture from Ikea, but then do carpentry in your spare time.
31:07
That's what the craft has turned into for him. Then we have Daniel, which is part of our dev team.
31:13
We have a dedicated team that focuses on developer experience. He's also hasn't written code, and he's building all the tools
31:20
to improve the developer experience in our organization. So they build like massive amount of tracking
31:27
and telemetry and observational tools and doing that all without writing code. And he was one of the more one of our, like, top skill top performers,
31:36
I think, he said he's increased his performance by 2000 30s.
31:42
And then the final, the final colleague that I want to mention is Nicholas. We invested in a trained trainer program from the start.
31:49
We made it very clear we want to have build this capability to train on AI and then develop our training continuously, evolve it internally.
31:58
So Nicholas became a trainer. He was also a high performer, already heavily doing things with.
32:04
He was also been educating on, like Ralph Wiggum loops and all that. He's always been a heavy user of AI by becoming a trainer.
32:11
Trainer now goes to our to the remaining sort of companies where we still have developers that weren't part of the initial one,
32:17
and training them, telling him about his experience. And that makes it much more real. I mean, mustache and tracksuit and all.
32:24
Yes, but if it's a real person that understands the industry and can share their own real experience for working at Odevo,
32:31
that makes it even realer, right? That makes it more people. Some people don't like to be taught by others.
32:37
We have to end. No, but we do need to hurry up. So the. Future. And the way that we.
32:43
See the future, we have now shifted, I know I we shifted. We realized that my investing in our engineers,
32:50
we've forgotten about another very important part of the organization, which is our product colleagues, designers, Vas, product managers.
32:57
So now we're taking we've taken the train that worked very well for engineers. And we shifted towards we've adjusted it.
33:04
We've pivoted a bit for our product colleagues. And you will find that the product folks become the next bottleneck.
33:10
We've seen that in lots of different places. Also seeing that massively in this, the Dominic has,
33:15
I think you mentioned in the podcast. So this is and then the next step is once we turn our product managers,
33:22
we want to now train an AI and how to use basic things with Claude Code and others to our remaining employees, which is pretty interesting.
33:31
It's 13,000 people that will need to educate on basic use of AI, and we're seeing people are already using it.
33:37
We have financial managers or or accountants using Claude Code to build local small apps for themselves.
33:44
So we want to help them. We want to structure that with training as well. Got three more slides so you and you will get lunch soon.
33:51
And then. Yeah. And one thing we've also noticed and I hear more of that today. I heard it like we are having some of our engineers saying I can't turn it off.
34:00
I it's 6 p.m., 7 p.m. sometimes 1 a.m. I'm the dopamine rush is real.
34:07
So now we're also having sort of discussions with like, hey, put it away.
34:12
Like yeah, go enjoy life, go outside. I mean, in Sweden it's. A lot of cell. You go outside.
34:18
I would love to tell you about Skinner boxes and the psychology behind it, but it's a real the compulsion is a real thing.
34:23
Also, this hasn't happened in Endeavor's case, but Lauren Peat, CEO of multitudes, did some research that showed that
34:30
in a lot of organizations, people are working overtime because of the increased feature pressure of you've adopted agentic coding,
34:37
you should be doing loads more stuff, you should be getting lots more done, and people are now actually doing overtime because of that perceived pressure.
34:44
Yeah. So our goal and our ambition is to make everyone a builder. We want to we want to pivot from software.
34:50
We build for our for our up coast to coast build software. With our support. We're making that shift.
34:57
We really believe everyone at Odevo will be a builder, and we really want 14,000 people to be building stuff for themselves.
35:05
And in the past, like in the 70s, if you wanted a new business process, right, you've got some paper, you made a form, you told people about it.
35:11
That's how you changed the business. Then our software developers got involved. And to leverage the power of computing,
35:17
like we had to devolve all of that to engineers and then you couldn't make any changes yourself.
35:22
And this got worse in the cloud era when everything was distributed and complex. Now we can re-impose business users to solve their own problems,
35:29
like some of the product managers are using Claude Code now. We're vibe coding and lovable and other tools as well, and building things that are used every day.
35:37
So what we see is not that software development is going to go away. Not that we're going to end up with software developers
35:44
needing to be made redundant because of those bigger, bolder changes that people are now empowered to make.
35:50
We see a world of more software that is more bespoke, more usable, solving individual people's
35:56
business problems rather than kind of big, slow software that takes years to. Develop those complicated Excel models.
36:02
They used to be on someone else's hard drive. We're moving that to vibe coded solutions that are usable, used by actual users
36:09
and organization, which is super exciting, but also a bit scary. So yeah, fun journey ahead of us. If you
36:18
do we do questions or have we run over that? Yes. Sorry. Lunch. There's a very stern shaking the head at the back.
36:26
If you can spot me, I might be hard to find than happy to talk afterwards. There's our LinkedIn QR codes, but other than that, I'll shut up and say
36:34
thank you and we can go into more detail afterwards.
36:41
Thanks everyone. Enjoy lunch. There's plenty of food. Don't worry. Don't need to rush.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

# EVSRC-2026-000291 — More Software, Faster: Odevo’s AI-Native Transformation

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `raw_dropped`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

## §0 — Source identity / metadata

- evsrc_id: `EVSRC-2026-000291`
- filename: `EVSRC-2026-000291_odevo-ai-native-enterprise-transformation.md`
- source_platform: `YouTube`
- source_url: `https://www.youtube.com/watch?v=mB74LGAmmV0`
- source_title: `Daniel Jones & Tomasz Maj - More software, faster - Odevo's AI Native transformation - AI DevCon '26`
- channel_or_org: `AI Native Dev`
- speaker: `Daniel Jones; Tomasz Maj`
- published_at: `2026-07-17`
- captured_at: `2026-07-18`
- captured_by: `Nick`
- capture_method: `transcript paste + screenshot`
- content_type: `enterprise transformation case study / technical conference presentation`
- source_reliability_context: `practitioner`
- topic_tags_light: `[enterprise_AI_transformation, agentic_engineering, organizational_adoption, developer_training, SDLC_redesign, enterprise_federation, citizen_builders, workforce_pressure, AI_governance, platform_readiness]`

## §0.1 — People / authorship / authority context

- primary speaker(s):
  - name: `Daniel Jones`
    · role_in_source: `presenter / transformation consultant`
    · affiliation_at_publication: `re:cinq`
    · speaker_type: `operator`
    · authority_context: `Consultant describing discovery, training, organizational enablement, agentic-development practices, and the transformation program delivered with Odevo`
    · identity_confidence: `high_from_transcript`

  - name: `Tomasz Maj`
    · role_in_source: `presenter / enterprise operator`
    · affiliation_at_publication: `Odevo`
    · speaker_type: `operator`
    · authority_context: `Internal Odevo leader describing the company’s technology estate, acquisition-driven complexity, adoption program, reported metrics, organizational changes, and future direction`
    · identity_confidence: `high_from_screenshot_and_transcript`

- publisher / channel: `AI Native Dev`
- interviewer / moderator / host: `Unidentified AI DevCon host`
- event_context: `AI DevCon ’26 conference case study on Odevo’s enterprise-wide adoption of agentic coding and AI-enabled product development`
- perspective / conflict notes: `The presentation is jointly delivered by the transformation consultancy and the customer organization. Reported adoption, throughput, rewrite, staffing, and productivity outcomes are self-reported and partly promotional. The source is strongest as direct enterprise-practice evidence about transformation prerequisites, organizational bottlenecks, training design, and emerging workforce risks.`

## §2 — Screenshot / visible source details

- visible_duration: `36:50`
- visible_views_at_capture: `318`
- visible_capture_date: `2026-07-18`
- description_context: `Case study of how Odevo, described as Sweden’s third-largest private technology company, adopted agentic coding and AI-enabled product management across a heterogeneous multinational estate. The presentation covers discovery, training, workflow redesign, measurable outcomes, and challenges beyond simply purchasing licenses.`
- organization_context: `Odevo operates residential-property-management businesses and technology across multiple countries, regulatory environments, acquired companies, cultures, and technology stacks.`

## §3 — Interpretations & review log  ·  append-only

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`

- reviewer: `Knox / ChatGPT`
- type: `AI assistant`
- at: `2026-07-18`
- purpose: `strategic source-local interpretation`

**Signal:** **4.9/5 — major enterprise, Build-OS, Platform, Federation, and Workforce source**

**Net-new posture:** no new OMNI domain; **three credible architecture candidates, five major sharpenings, and several serious enterprise guardrails**

### Core contribution

> **AI-native transformation is not the deployment of a new tool. It is the controlled amplification and eventual redesign of the organization’s existing operating system.**

The source’s most important statement is effectively:

> Bad organizational practices become faster bad practices; strong delivery systems become capable of nonlinear acceleration.

That is not generic change-management advice. It establishes an **amplification law**:

`AI impact = existing system quality × machine execution capacity × adoption discipline`

A weak delivery system does not become modern because it has agents. It gains faster code generation while testing, release, product definition, governance, review capacity, and ownership remain bottlenecks.

For OMNI, this means enterprise adoption cannot begin with licenses, prompts, or a universal assistant. It begins by determining whether the operator can safely absorb accelerated production.

---

### 1. Enterprise AI adoption needs a readiness gate

Odevo first examined:

- CI/CD maturity;
- platform availability;
- test quality;
- coding standards;
- delivery flow;
- transparency;
- security boundaries;
- team culture;
- existing bottlenecks.

This suggests a concrete candidate:

## `AI_delivery_readiness_profile`

A team, operator, or domain should not receive the same automation envelope merely because it has access to the same model.

The readiness profile should evaluate:

- quality and test coverage;
- deployability and rollback;
- observability;
- ownership clarity;
- review capacity;
- change-failure recovery;
- data and access controls;
- domain complexity;
- workforce competence;
- baseline delivery performance;
- consequence and reversibility.

The output should determine:

- permitted agent capabilities;
- required human oversight;
- whether work may progress beyond drafting;
- whether changes can be self-served, supervised, or delegated;
- what remediation is required before higher autonomy.

**Keeper line:**

> **Do not grant automation according to model capability alone; grant it according to the receiving system’s ability to absorb and recover from machine-speed change.**

This is more precise than a generic maturity model because it directly controls capability admission.

---

### 2. Enterprise heterogeneity must be governed, not erased

Odevo’s estate contains:

- acquired companies;
- different cultures;
- different countries;
- different regulations;
- many technology stacks;
- legacy systems;
- paper processes;
- uneven engineering maturity.

The transformation did not begin by forcing one immediate global stack. It created shared practices and training while operating across heterogeneity.

This strongly sharpens OMNI’s Federation posture:

> **Standardize meaning, authority, evidence, and outcome expectations before standardizing implementation.**

For OMNI enterprise deployment, the shared layer should govern:

- identity and delegation;
- consent and visibility;
- authoritative event semantics;
- consequence and proof;
- interoperability contracts;
- escalation and accountability;
- capability admission.

Local operators may retain different:

- systems of record;
- deployment stacks;
- workflows;
- regulatory adaptations;
- organizational structures;
- user surfaces.

The transformation target is not technological sameness. It is **governed coherence across difference**.

---

### 3. Training is part of the capability control plane

The source does not treat training as a webinar or documentation exercise. It uses:

- organizational discovery;
- facilitated fear and failure-mode workshops;
- pilot cohorts;
- staged weekly modules;
- production-relevant practice;
- in-person discussion;
- explicit teaching of failure modes;
- train-the-trainer programs;
- lighthouse teams;
- continuing internal diffusion.

That suggests a candidate:

## `capability_adoption_lifecycle`

Possible states:

`unaware → exposed → sandboxed → supervised practice → production-qualified → delegated → trainer / steward`

Promotion should require more than course completion. It should include evidence of:

- correct tool use;
- failure recognition;
- context discipline;
- security behavior;
- escalation behavior;
- domain competence;
- ability to evaluate outputs;
- appropriate autonomy judgment.

This belongs partly in BIZOPS/workforce truth and partly in Platform capability admission.

**Keeper line:**

> **A model license grants access; demonstrated practice grants operational capability.**

---

### 4. Agentic acceleration moves the bottleneck upstream

Once coding became faster, Odevo found that:

- story-level work became too small;
- Scrum and Kanban assumptions began to strain;
- product requirements became the bottleneck;
- teams spent longer defining the domain and desired product;
- agents decomposed well-formed intent into execution plans;
- developers moved from writing code to directing and evaluating systems.

This suggests an important Build-OS shift:

`implementation-centered SDLC → intent-centered delivery system`

The scarce work moves toward:

- domain definition;
- requirement quality;
- architectural boundaries;
- decision quality;
- evaluation design;
- acceptance criteria;
- consequence prediction;
- prioritization.

However, the source overreaches when it implies that human code review can simply disappear.

Repeated AI review passes and self-merging may be appropriate for low-risk, reversible work. They are not sufficient for:

- authority-bearing contracts;
- identity or consent changes;
- migrations of canonical truth;
- security boundaries;
- clinical logic;
- cross-domain commitments;
- high-blast-radius infrastructure.

OMNI should use **risk-tiered review**, not preserve human review ceremonially and not eliminate independent review universally.

**Guardrail:**

> **Remove low-value manual inspection where stronger machine verification exists; preserve independent authority and separation of duties where consequence demands it.**

---

### 5. “Everyone becomes a builder” requires a governed local-solution substrate

Odevo’s long-term ambition is for 14,000 employees—including accountants, financial managers, product staff, and operators—to build software for themselves.

This is strategically important but also one of the largest ungoverned risks in the source.

AI-generated local software can recreate the worst properties of spreadsheet culture:

- unknown owners;
- hidden business logic;
- sensitive data leakage;
- untested calculations;
- abandoned dependencies;
- contradictory local truth;
- no lifecycle;
- no audit;
- no recovery path;
- no knowledge transfer when the creator leaves.

OMNI should distinguish:

1. **personal instrument**
   - private, disposable, no authoritative effect;

2. **local operational tool**
   - bounded team use, declared data and owner;

3. **shared workflow capability**
   - validated and registered;

4. **authoritative platform component**
   - promoted through full architecture and governance gates.

## Candidate: `governed_local_solution`

Minimum properties:

- creator and accountable owner;
- intended users and scope;
- data accessed;
- capability and authority ceiling;
- retention and security policy;
- validation state;
- dependencies;
- version;
- monitoring;
- rollback;
- expiration or review date;
- promotion path;
- retirement path.

**Keeper line:**

> **Democratized creation without governed adoption produces shadow infrastructure at machine speed.**

---

### 6. Baseline transparency is required before transformation claims

Odevo spent significant effort making delivery performance visible before broad AI adoption.

That is essential because otherwise increases in:

- commits;
- pull requests;
- lines of code;
- tool usage;
- model spend;
- generated applications

can be mistaken for actual improvement.

The transformation should be evaluated against pre-adoption baselines for:

- lead time;
- deployment frequency;
- failure rate;
- recovery time;
- escaped defects;
- product outcomes;
- operational load;
- review burden;
- employee hours;
- customer consequence;
- maintenance cost.

The source reports 94% adoption and rising throughput, but those are not sufficient outcome measures.

Even the celebrated eight-year-platform rewrite requires caution:

- “feature parity” does not establish data parity;
- it does not establish operational resilience;
- it does not prove migration safety;
- it does not prove historical compatibility;
- it does not prove security or regulatory parity;
- it does not establish lower lifecycle cost.

**Keeper line:**

> **Machine-speed delivery makes baselines more important, not less, because activity can increase far faster than value.**

---

### 7. Organizational boldness should become governed experimentation capacity

The presenters argue that the deepest transformation signal was not raw productivity but increased willingness to attempt ambitious work.

That is valuable. AI can lower the cost of testing previously unaffordable ideas.

But “boldness” must be converted into a governed experimentation system:

- explicit hypothesis;
- bounded blast radius;
- reversible deployment;
- protected canonical state;
- success and failure criteria;
- observation window;
- accountable owner;
- termination condition;
- learning capture.

The failed three-day mobile-app attempt is not necessarily waste. It becomes valuable if the organization preserves what was learned and avoids mistaking activity for progress.

**Sharpening:**

> **AI-native organizations should maximize the number of safely falsifiable experiments—not merely the number of things built.**

---

### 8. AI adoption introduces a new workforce-risk surface

The source explicitly identifies:

- inability to stop working;
- late-night agent use;
- dopamine-driven iteration;
- perceived pressure to generate more features;
- overtime caused by expectations of AI productivity;
- anxiety about job meaning and craft;
- changes in professional identity.

This is one of the most important and least mature parts of enterprise AI transformation.

OMNI’s workforce and BIZOPS architecture should recognize:

## `agentic_work_intensity_signal`

Possible indicators:

- sustained after-hours agent activity;
- increased concurrent workstreams;
- review backlog growth;
- rising feature expectations;
- workday extension;
- intervention frequency;
- self-reported inability to disengage;
- decline in recovery time;
- mismatch between machine throughput and human acceptance capacity.

This must not become covert employee surveillance. Its purpose should be:

- organizational health;
- workload policy;
- staffing;
- right-to-disconnect enforcement;
- manager accountability;
- safe capacity planning.

**Guardrail:**

> **Tokens may be abundant; human attention, recovery, and psychological safety are not.**

AI productivity gains must not silently become permanently expanded labor expectations.

---

### 9. The transformation pattern is recursive

The source shows a progression:

1. instrument current delivery;
2. assess readiness;
3. address foundational weaknesses;
4. train engineers;
5. observe new bottlenecks;
6. redesign the SDLC;
7. train product and design;
8. expand to business users;
9. govern new local software;
10. revisit workforce and operating policy.

This is not a one-time rollout. It is an ongoing platform and organizational learning loop.

Each increase in capability changes:

- the bottleneck;
- the risk surface;
- the relevant skills;
- the required controls;
- the meaning of high performance.

OMNI should therefore treat enterprise AI adoption as a **continuously requalified capability**, not a completed migration.

---

## What not to import

- License distribution as transformation.
- AI adoption percentage as proof of value.
- Pull-request throughput as proof of improved software.
- “Feature parity” as proof of safe system replacement.
- Multiple AI review passes as independent verification.
- Elimination of human review in high-consequence zones.
- Universal employee software creation without ownership and lifecycle law.
- Transparency dashboards that become individual productivity surveillance.
- “Everyone should build more” as a permanent labor expectation.
- Bold experimentation without blast-radius and retirement controls.
- One standardized workflow forced across all acquired operators and regulatory environments.
- Model-generated code used to compensate indefinitely for missing tests, weak platforms, or unclear architecture.

## Hard verdict

This is one of the most important enterprise sources in the wave because it demonstrates that AI transformation is a change to the whole operating system—not an isolated developer-productivity initiative.

### Genuine architecture candidates

1. **`AI_delivery_readiness_profile`**
   - determines what degree of agent capability a team or operator can safely absorb.

2. **`capability_adoption_lifecycle`**
   - moves people from access through supervised practice to qualified delegation and stewardship.

3. **`governed_local_solution`**
   - gives citizen-built software declared ownership, scope, authority, validation, lifecycle, and promotion state.

4. **`agentic_work_intensity_signal`**
   - identifies organizational overload and AI-induced labor pressure without becoming individual surveillance.

### Major sharpenings

1. AI amplifies the receiving organization’s existing strengths and defects.
2. Standardize enterprise semantics and controls before forcing implementation uniformity.
3. Machine-speed delivery moves the bottleneck toward intent, domain definition, and acceptance.
4. Risk-tiered verification should replace both universal human review and universal self-merging.
5. Transformation measurement requires pre-adoption baselines and post-change consequence evidence.
6. Organizational boldness should be measured as safely falsifiable experimentation capacity.
7. Enterprise AI adoption requires continuous requalification as bottlenecks and risks move.

### One-line read

**The enterprise that wins with agents will not be the one that distributes the most licenses; it will be the one that can safely absorb machine-speed change, govern thousands of new builders, preserve coherence across heterogeneous operators, and prevent productivity abundance from consuming human judgment and wellbeing.**

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` · type: `AI assistant` · at: `2026-07-19` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Method note:** formalizes Knox Review 001 (signal **4.9/5** — a major enterprise / Build-OS / Platform / Federation / Workforce source; Knox posture = *no new OMNI domain; 3 credible architecture candidates + 5 major sharpenings + several serious enterprise guardrails*), verified against §1 verbatim. This packet carries a **full Knox Review 001** (present) → full-depth formalization; extraction **formalizes** Knox, does not re-derive. **Canonical id = filename `EVSRC-2026-000303`** (Odevo); the pasted Knox header id `291` is stale scaffolding (see §0 note). `build_status` grounded vs the run grep: OMNI has (partial) `requireCapability` / audit-actions / disclosure-policy / patient-case / outbound-dispatch, but **NO** agent runtime / AI-gateway / skill-registry / security-control-plane / model-gateway and **no workforce-intensity or citizen-builder governance surface** → every org/platform/readiness/workforce concept here is `doctrine=AFFIRM/PARTIAL × build=absent`. All reported figures (94% adoption, "feature parity in three weeks", 20→4 devs, "+2000%") are self-reported + volume/promotional (`GRD-039`) — take the *mechanism*, never the metric. PROPOSE-ONLY (`GRD-036`); nothing minted, no contract/thesis/registry edit this pass.

### Cluster table

| # | concept | OMNI meaning | homes | anchor (verbatim ≤12w + ts) | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| A | **The amplification law: AI = existing-system-quality × machine-execution × adoption-discipline** | AI-native transformation is not a tool deployment; it is controlled amplification (then redesign) of the org's *existing* operating system. Weak delivery gets faster bad output; strong delivery gets nonlinear acceleration. For OMNI: enterprise adoption cannot begin with licenses/prompts/a universal assistant — it begins by determining whether the operator can *safely absorb accelerated production* | thesis §B · Build-OS · Platform Loop · Reactor (absorb-capacity) · capability-topology | "with AI, bad things get worse and good things can get better" [10:46]; "if you are not doing software development well... things are going to get worse" [12:14] | AFFIRM (re-derives capability≠readiness; Platform/Build-OS) × build=absent | spine | promote |
| B | **`AI_delivery_readiness_profile` — capability admission by the RECEIVING system, not the model** | A team/operator/domain should not receive the same automation envelope merely because it can access the same model. Readiness evaluates test coverage, deployability/rollback, observability, ownership clarity, review capacity, change-failure recovery, data/access controls, domain complexity, workforce competence, baseline delivery, consequence/reversibility → output = permitted agent capabilities + required oversight + may-progress-beyond-drafting? + self-serve/supervised/delegated + required remediation | Build-OS/Build Entry Gate · Reactor (consequence floor) · capability-topology · Platform Loop | "if you don't have a platform... you can't ship code reliably and quickly" [13:13]; "if agents can't run tests... don't be surprised when they break your software" [13:18] | PARTIAL (sharpens Build Entry Gate + Reactor consequence→control floor; capability admission) × build=absent | vocabulary/investigate | investigate→watch |
| C | **Govern enterprise heterogeneity — standardize MEANING/authority/evidence/outcome before implementation** | The estate holds acquired companies, cultures, countries, regulations, many stacks, legacy, paper. Transformation did NOT force one immediate global stack — it created shared practice while operating across difference. Sharpens OMNI Federation: shared layer governs identity/delegation, consent/visibility, authoritative event semantics, consequence/proof, interop contracts, escalation/accountability, capability admission; local operators keep their own systems-of-record, stacks, workflows, regulatory adaptations, surfaces. Target = **governed coherence across difference**, not technological sameness | Federation · §C (boundary, PAUSED) · thesis §A · RBAC/Identity | "if you have a tech stack... we probably have it" [5:38]; "very complicated to build a single piece of software for all those markets" [26:53] | AFFIRM (re-derives Federation: centralize meaning, federate implementation) × build=absent | spine | promote |
| D | **`capability_adoption_lifecycle` — a model license grants access; demonstrated practice grants operational capability** | Training here is a capability control plane, not a webinar: discovery → fear/failure-mode workshops → pilot cohort → staged weekly modules → production-relevant practice → in-person → explicit failure-mode teaching → train-the-trainer → lighthouse teams. States: `unaware → exposed → sandboxed → supervised practice → production-qualified → delegated → trainer/steward`; promotion requires evidence (correct tool use, failure recognition, context discipline, security/escalation behavior, domain competence, output evaluation, autonomy judgment). This is the **human analog** of the agent-promotion-path (dedup vs 286) | BIZOPS/workforce truth · Platform (capability admission) · Build-OS · capability-topology | "we're going to train every single developer" [9:25]; "we invested in a trained trainer program from the start" [31:42]; "teaching people about the failure modes" [21:02] | PARTIAL (sharpens capability admission + BIZOPS workforce; human analog of `agent_promotion_path`/286) × build=absent | vocabulary/investigate | investigate→watch |
| E | **Agentic acceleration moves the bottleneck UPSTREAM: implementation-centred SDLC → intent-centred delivery** | Once coding got fast: story-level work too small, Scrum/Kanban strained, product requirements became the bottleneck; scarce work moved to domain definition, requirement quality, architectural boundaries, decision quality, evaluation design, acceptance criteria, consequence prediction, prioritization. Affirms OMNI: the scarce, human-held work is *intent + judgment + acceptance* (conv 5 + wave-6 296 verification-debt) | Build-OS · Agent Runtime · Reactor · Care authority (human-commits) | "product folks become the next bottleneck" [33:04]; "spent two weeks talking about product requirements" [27:47] | AFFIRM (conv 5; bottleneck→intent, dedup 296) × build=absent | spine | promote |
| F | **Risk-TIERED verification — not universal human review, not universal self-merge** | The AI-first team dropped human code review, did "7 or 8 passes" of AI review, then self-merged. Knox correctly flags overreach: repeated AI passes + self-merge may suit low-risk/reversible work but are **insufficient** for authority-bearing contracts, identity/consent changes, canonical-truth migrations, security boundaries, clinical logic, cross-domain commitments, high-blast-radius infra. OMNI = risk-tiered review keyed to consequence (Reactor), preserving independent authority + separation of duties where consequence demands | Reactor (consequence→review tier) · Build-OS/E&V · Care (clinical-logic carve-out) · Accountability Loop | "no longer doing human code review... 7 or 8 passes" [28:33/28:39]; "self merge so they don't have the bottleneck of other humans" [28:48] | PARTIAL/CONTRA-if-generalized (dedup vs 285 compositional-review + REV-184 blast-radius) × build=partial | spine-guardrail | promote (with care/high-consequence carve-out) |
| G | **`governed_local_solution` — democratized creation without governed adoption = shadow infrastructure at machine speed** | Odevo's ambition: 14,000 employees (accountants, financial managers, PMs, operators) building their own software. This recreates the worst of spreadsheet culture at machine speed (unknown owners, hidden logic, PHI leakage, untested calc, abandoned deps, contradictory local truth, no lifecycle/audit/recovery). OMNI must tier: (1) **personal instrument** (private, disposable, no authoritative effect) → (2) **local operational tool** (bounded team, declared data+owner) → (3) **shared workflow capability** (validated + registered) → (4) **authoritative platform component** (full gates). Each citizen-built artifact carries owner, users/scope, data accessed, capability+authority ceiling, retention/security, validation state, deps, version, monitoring, rollback, expiry/review, promotion + retirement path. The **citizen-developer analog** of `shadow_agent`/`agent_promotion_path` (286) + candidate≠commit | Build-OS self-service · Platform Loop · Reactor (consequence tiering) · governance · Care (PHI exposure) | "make everyone a builder... 14,000 people to be building stuff" [34:44/35:05]; "financial managers or accountants using Claude Code to build local small apps" [33:37] | PARTIAL (specialization of Build-OS self-service promotion lane; dedup vs 286 shadow_agent) × build=absent | vocabulary/investigate | investigate→watch |
| H | **Baseline transparency BEFORE transformation claims — machine speed makes baselines more important, not less** | Odevo made delivery performance visible *before* broad adoption ("most teams did not even know they were underperforming"). Otherwise rising commits/PRs/LoC/tool-usage/model-spend/generated-apps get mistaken for value. Evaluate vs pre-adoption baselines: lead time, deploy frequency, failure rate, recovery time, escaped defects, product outcomes, operational load, review burden, employee hours, customer consequence, maintenance cost. 94% adoption + rising throughput are NOT outcome measures; even the 8-year-platform rewrite ("feature parity in three weeks") does not establish data parity / operational resilience / migration safety / historical compatibility / security-regulatory parity / lower lifecycle cost | REV-184 (world-model honesty) · Platform Loop (baseline/outcome) · `metric_definition_is_strategy` · Build-OS/E&V | "most teams did not even know they were underperforming" [8:21]; "feature parity 1 to 1 in three weeks" [26:12] | AFFIRM (metric/activity ≠ outcome; conv 2; feature-parity≠safe-replacement) × build=partial | guardrail | promote |
| I | **Boldness → GOVERNED experimentation capacity (maximize safely falsifiable experiments, not things built)** | Presenters' deepest signal = increased willingness to attempt ambitious work ("how many more bold things are you doing?"). Valuable, but boldness must convert into a governed experimentation system: explicit hypothesis, bounded blast radius, reversible deployment, protected canonical state, success/failure criteria, observation window, accountable owner, termination condition, learning capture. The failed 3-day mobile app is not waste IF the learning is preserved and activity isn't mistaken for progress | Reactor (blast-radius/reversibility) · Build-OS (experiment lifecycle) · REV-184 (non-action/termination) · Platform Loop | "how many more bold things are you doing?" [25:45]; "build a mobile app in three days... didn't work out" [26:33] | PARTIAL (sharpening: governed experimentation; dedup vs Reactor blast-radius) × build=absent | vocabulary | watch |
| J | **`agentic_work_intensity_signal` — tokens are abundant; human attention, recovery, psychological safety are not** | New workforce-risk surface: inability to stop ("I can't turn it off... the dopamine rush is real"), late-night agent use, dopamine-driven iteration, perceived feature-pressure, overtime from AI-productivity expectations, anxiety about job meaning/craft. Indicators (sustained after-hours agent activity, concurrent workstreams, review backlog growth, rising feature expectations, workday extension, intervention frequency, self-reported inability to disengage, declining recovery, throughput-vs-acceptance mismatch) serve org health / workload policy / staffing / right-to-disconnect / manager accountability / safe capacity planning. **MUST NOT become covert employee surveillance.** AI productivity gains must not silently become permanently expanded labor expectations | BIZOPS/workforce truth · Accountability Loop · Care (clinician-burnout/alert-fatigue analog) · Reactor (capacity) | "I can't turn it off... the dopamine rush is real" [33:53/34:00]; "working overtime because of the increased feature pressure" [34:30] | PARTIAL (BIZOPS/workforce watch; new signal surface) × build=absent | vocabulary/investigate | investigate→watch |
| K | **Transformation is RECURSIVE — a continuously requalified capability, not a completed migration** | The 10-step progression (instrument → assess readiness → fix foundations → train engineers → observe new bottleneck → redesign SDLC → train product/design → expand to business users → govern new local software → revisit workforce/operating policy) is an ongoing platform + org learning loop. Each capability increase changes the bottleneck, the risk surface, the relevant skills, the required controls, the meaning of "high performance." OMNI treats enterprise AI adoption as continuously requalified | Platform Loop · Build-OS · capability-topology · Reactor | "the product folks become the next bottleneck... seen that in lots of different places" [33:04] | AFFIRM (governed continuous requalification; dedup vs Platform Loop) × build=absent | spine | promote |
| L | **Dashboards/transparency must not become individual productivity surveillance** | "Every dev can see every other dev's... which repos they're working on" — transparency enabled adoption, but Knox's guardrail holds: baseline transparency for org health ≠ per-individual ranking/surveillance telemetry. Pairs with J | BIZOPS/workforce · Accountability Loop · governance (privacy) | "every dev can see every other dev's where they are working" [24:20] | PARTIAL (guardrail: transparency≠surveillance) × build=absent | guardrail | promote (as caution) |

### Net-new primitive dispositions (EVERY candidate dispositioned; count stated)
- **net-new DOMAIN objects: 0** (Knox: no new OMNI domain; consistent with waves 4/5 + wave-6 batch 282–296). Verified vs §1. Odevo's four Knox candidates are **capability-admission / workforce / promotion-lane specializations**, not root domains (`payload-noun ≠ domain`, `GRD-026`).
- **INVESTIGATE-lane (route to owning-home watch; NOT minted):**
  1. `AI_delivery_readiness_profile` (cluster B) → **Build Entry Gate + Reactor + capability-topology** watch. Sharpens capability admission: grant automation by the receiving system's absorb/recover capacity, not model capability. Reviewer decides distinct object vs compose into Build Entry Gate.
  2. `capability_adoption_lifecycle` (cluster D) → **BIZOPS/workforce + Platform capability-admission** watch. The **human analog** of `agent_promotion_path`/`agent_maturity_lane` (286) — reviewer decides shared abstraction vs distinct.
  3. `governed_local_solution` + its 4-tier ladder (cluster G) → **Build-OS self-service + Platform + Reactor** watch. Citizen-developer analog of `shadow_agent`/promotion-path (286) + candidate≠commit; strongest genuinely-new governance pressure in this source.
  4. `agentic_work_intensity_signal` (cluster J) → **BIZOPS/workforce** watch (surveillance-guarded). New signal surface; reviewer decides distinct workforce-truth object.
- **dedup-as-EXISTS (sharpenings, NOT minted):** amplification-law → capability≠readiness + Platform/Build-OS (EXISTS); heterogeneity-governance → Federation *centralize-meaning-federate-implementation* (EXISTS, dedup w6 conv 7 + 285); bottleneck→intent → conv 5 + 296 verification-debt (EXISTS); risk-tiered-review → 285 compositional-review + REV-184 blast-radius (EXISTS); baseline/feature-parity → REV-184 world-model-honesty + `metric_definition_is_strategy` + 292 feature-parity≠safe-replacement (EXISTS); boldness → Reactor blast-radius/reversibility + experiment lifecycle (EXISTS); recursive-requalification → Platform Loop (EXISTS).

### Counterweights / what-NOT-to-import (EVERY caution PRESERVED or rejected-with-reason — never inverted)
1. **License distribution / adoption % / PR throughput / LoC are not transformation or proof of value.** [kept — dedup vs REV-184 + conv 2]
2. **"Feature parity" is not safe system replacement** — no data parity, operational resilience, migration safety, historical compatibility, or security/regulatory parity implied. [kept]
3. **Multiple AI review passes are not independent verification**; do not eliminate human review in high-consequence zones. [kept — inversion guarded: risk-tiered, NOT "self-merge everywhere"]
4. **Universal employee software creation without ownership + lifecycle law = shadow infrastructure.** [kept]
5. **Transparency dashboards must not become individual productivity surveillance.** [kept]
6. **"Everyone should build more" must not become a permanent labor expectation**; AI gains must not silently expand labor. [kept]
7. **Bold experimentation without blast-radius + retirement controls is ungoverned risk.** [kept]
8. **One standardized workflow forced across all acquired operators/regulatory environments is wrong** — govern meaning, federate implementation. [kept]
9. **Model-generated code must not indefinitely compensate for missing tests / weak platforms / unclear architecture.** [kept]
10. **Amplification cuts both ways** — accelerating a weak system exposes bottlenecks elsewhere before it delivers value. [kept]

### Care implications (NOT swept away by the "0 net-new" verdict)
- **Readiness gates care absorption (B/A):** a care operator cannot receive an accelerated automation envelope merely because a capable model exists — capability admission must be keyed to the receiving care system's ability to absorb and *recover* from machine-speed change (Reactor consequence floor). Directly relevant to any future clinical-agent rollout.
- **Risk-tiered review has a hard clinical carve-out (F):** clinical logic, identity/consent changes, and canonical-truth migrations can never be AI-self-merged — independent authority + separation of duties are non-negotiable where consequence is high (`AI never care authority`).
- **`governed_local_solution` in care is high-stakes (G):** a citizen-built "small app" touching PHI or care logic is a governed capability with an owner/authority ceiling/lifecycle — not a personal instrument; candidate≠commit at the citizen-builder layer.
- **`agentic_work_intensity_signal` maps to clinician burnout / alert-fatigue (J):** the same abundance-pressure surface applies to care staff — org-health signal, never covert surveillance; protects the humans who carry care authority.
- **Baselines protect care outcome truth (H):** activity (notes generated, tasks closed) must be measured against pre-adoption care-outcome baselines, never mistaken for improved care.

### Candidate guardrails → route `08` open-review → `06` digest (PROPOSE-ONLY, `user_knox_required`; parent folds centrally)
- **G-cand-1:** *Do not grant automation by model capability; grant it by the receiving system's ability to absorb and recover from machine-speed change (`AI_delivery_readiness_profile`).* (dedup vs capability≠authority + Reactor)
- **G-cand-2:** *Standardize meaning, authority, evidence, and outcome expectations across a heterogeneous estate before standardizing implementation — govern coherence across difference, never force sameness.* (dedup vs Federation + w6 T-w6-3)
- **G-cand-3:** *Remove low-value manual inspection where stronger machine verification exists; preserve independent authority + separation of duties where consequence demands (risk-tiered review) — never universal self-merge, never ceremonial human review.* (dedup vs 285 compositional-review + REV-184)
- **G-cand-4:** *Democratized creation without governed adoption produces shadow infrastructure at machine speed — every citizen-built artifact carries owner, scope, authority ceiling, validation, lifecycle, and promotion/retirement path (`governed_local_solution`).* (dedup vs candidate≠commit + 286)
- **G-cand-5:** *Machine-speed delivery makes pre-adoption baselines MORE important, not less — activity (adoption %, PR/LoC throughput, "feature parity") is not outcome or safe replacement.* (dedup vs REV-184 + conv 2)
- **G-cand-6:** *Tokens are abundant; human attention, recovery, and psychological safety are not — AI productivity gains must not silently become permanently expanded labor expectations, and workload signals must not become covert surveillance (`agentic_work_intensity_signal`).*
- **G-cand-7:** *Enterprise AI adoption is a continuously requalified capability, not a completed migration — each capability increase moves the bottleneck, risk surface, and required controls.*

### Reread flags
- Pairs directly with **286** (shadow_agent / personal-experiment→shared-capability promotion path — `capability_adoption_lifecycle` and `governed_local_solution` are the human + citizen-builder analogs) · **285** (compositional review + control inheritance → risk-tiered verification F) · **296** (bottleneck→intent + verification-debt-as-capacity-control → E) · **288 Abridge** (clinical eval/release → the care carve-out for F) · wave-6 conv 5/7 (human-commits + federate-meaning). Clusters B/D/G reopen for **Build Entry Gate + capability-topology + BIZOPS/workforce**; cluster C reopens for **Federation + §C (PAUSED)**; cluster J reopens for **workforce-truth + Accountability Loop**.
- **§C-touch:** cluster C (multi-operator federation) + the "single platform for all markets" ambition are inbound/outbound governed-coherence pressure → **§C stays PAUSED** (pressure input only; no absorption-plan change).

### One-line hard read
`full_semantic` (Knox 4.9/5), **0 net-new domain objects** + 4 investigate-lane candidates (`AI_delivery_readiness_profile` · `capability_adoption_lifecycle` · `governed_local_solution` · `agentic_work_intensity_signal`, all promotion/admission/workforce specializations, not root domains): the enterprise that wins with agents is not the one distributing the most licenses — it is the one that can safely *absorb* machine-speed change, gate capability by the receiving system's recovery capacity, govern thousands of new builders, preserve governed coherence across heterogeneous operators, keep pre-adoption baselines, and prevent productivity abundance from consuming human judgment and wellbeing.

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Build-OS / Build Entry Gate · Platform Loop · Federation + §C(PAUSED) · Reactor (consequence/absorb-capacity) · capability-topology · BIZOPS/workforce truth · Accountability Loop · Care authority` · promotion: `watch` (0 net-new; 4 investigate-lane candidates [`AI_delivery_readiness_profile` · `capability_adoption_lifecycle` · `governed_local_solution` · `agentic_work_intensity_signal`] + 7 guardrail candidates → `08`; parent folds registry/matrix/ledger centrally)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, second batch; `EVRUN-2026-000011`).
- `2026-07-19` — PROCESSED (Opus, Review 003): §0/§0.1 filled from Knox §0/§2 metadata (no screenshot this pass → identity `inferred`); stale Knox header id `291` noted, canonical = filename `303` (Odevo); slug firmed (SUGGESTION `odevo-ai-native-enterprise-transformation`; file NOT renamed this pass); §3 Review 003 written (**12 clusters, 0 net-new DOMAIN objects** + 4 investigate-lane candidates + 10 counterweights preserved [risk-tiered-review inversion-guarded], 7 guardrail candidates → `08`); §4 pointers filled. `raw_dropped → analyzed`; awaiting 2nd-reader semantic-fidelity sign-off. PROPOSE-ONLY (`GRD-036`); no registry/matrix/ledger/00_index/thesis/contract edit this pass (per run scope).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

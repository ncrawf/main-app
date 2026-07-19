# EVSRC-2026-000314 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000314_cq-stack-overflow-for-agents.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000314`  ·  filename: `EVSRC-2026-000314_cq-stack-overflow-for-agents.md`  *(canonical id = filename EVSRC number; the pasted Knox block carries a **stale header id `EVSRC-2026-000301`** — ignored per instruction)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=AHIY1XccX_E`  ·  source_title: `Peter Wilson & Davide Eynard — cq — Stack Overflow for Agents — AI Native DevCon June 2026`
- channel_or_org: `AI Native Dev`  ·  speaker: `Peter Wilson; Davide Eynard`  ·  published_at: `2026-07-16`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`  *(no screenshot dropped in the processing chat → identity `inferred` from transcript + pasted Knox metadata block)*
- content_type: `technical conference talk / open-source platform + protocol proof-of-concept`  ·  source_reliability_context: `practitioner`  ·  topic_tags_light: `[agent_learning, knowledge_units, shared_agent_memory, procedural_knowledge, context_retrieval, knowledge_graduation, federated_commons, agent_security, knowledge_validation, executable_supply_chain, open_source_AI]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Davide Eynard` · role_in_source: `presenter / project builder` · affiliation_at_publication: `Mozilla.ai` · speaker_type: `practitioner` · authority_context: `presents the context problem, local-small-model examples, CQ's learned-knowledge workflow, privacy-first posture, and an MCP-configuration case study` · identity_confidence: `inferred` (no screenshot this run; high from transcript + pasted Knox metadata)
  - name: `Peter Wilson` · role_in_source: `presenter / project builder` · affiliation_at_publication: `Mozilla.ai` · speaker_type: `practitioner` · authority_context: `presents CQ's knowledge-unit schema, local/team/public deployment modes, review flow, security threat model, delegation credentials, roadmap, and protocol ambitions` · identity_confidence: `inferred` (no screenshot this run; high from transcript + pasted Knox metadata)
- publisher / channel: `AI Native Dev`  ·  interviewer / moderator / host: `unidentified AI Native DevCon stage host`
- event_context: `AI Native DevCon June 2026 — presentation introducing Mozilla.ai's CQ proof-of-concept (agent-knowledge exchange)`  ·  perspective / conflict notes: `Speakers are CQ's builders/advocates; they explicitly frame it as an early PoC with unresolved retrieval, security, moderation, identity, federation, and scaling problems. Strongest as direct DESIGN evidence + problem discovery — NOT proof that a public agent-knowledge commons is production-safe.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:01
All right. Thank you for coming. Really cool session coming up just now.
0:06
We've got Peter Wilson and Davide Eynard. They are going to be talking to you about CQ Stack Overflow for agents.
0:16
I don't know if you've seen contributions to human. Stack overflow basically plummeted
0:23
after ChatGPT came out, which is really sad for all of us. Hopefully these two can do something about it.
0:29
Give them a round of applause, please. Take it away.
0:36
Thank you. Thank you so much. Very one. So I'm David. He's Peter. We're both from Mozilla.ai.
0:42
The first thing I wanted to start with was Mozilla. Because the first thing they usually people tell us
0:48
is, are you the Firefox guys or are you the browser guys? We don't want the AI in the browser and things like that.
0:53
Or we're very happy to have AI the browser. This doesn't happen that often though. So I left an exercise for you for after the talk.
1:01
If you have the Firefox application installed on your laptops, try and connect to moz://a.
1:09
This is kind of a Fakhri, but the browser folks can do anything they want with it. So you just connect to that and it will open the Mozilla manifesto,
1:19
which is a manifesto that has been set up like 20 years ago when the internet was
1:25
at, let's say it's very beginning, at least from the user perspective. It kind of began even 25 more, more years earlier.
1:33
So in that manifesto, you find some principles that are all about the internet, the web as a resource that was open,
1:42
that should have remained open and they should have, and where people should be able to drive the experience they have of the web,
1:51
where security is important and were open code and the standards and interoperability are very important.
1:59
So the next step in the exercise is your play a regular expression. And you substitute the internet with AI and try and see
2:07
if this makes sense to you. And I did this exercise before applying for Mozilla AI, and I was mind blown
2:14
at how actual this principle could be, even if you just moved the internet to AI. And this is exactly the same exercise that the Mozilla Foundation folks
2:23
did a few years ago. It's five years ago, before the big AI boom, when they decided they wanted
2:29
to fund a startup company to work on AI, not specifically in the browser. So something separate from the Mozilla Corporation working on Fifo,
2:39
but something that was only directed towards promoting open source AI. So it's as we are not the browser guys, we love the browser
2:47
guys, we talk to them, we are siblings, we are just focusing on open source AI.
2:53
So first thing when you talk about open source AI is a comparison. I see done very often in terms of user experience.
3:00
Very often people take open weights models and then try and evaluate them and see how they work for their tasks and then compare them to commercial
3:09
AI services. But what often they don't think about is that a commercial AI service is not just an LLM, it's an agent code plus tools, plus engineering,
3:19
plus thousands of engineers working on more engineering. And to me, the comparison is a bit unfair and creates a gap between the perception
3:27
that users have of close AI services versus open source AI. So our mandate is to try and make this gap smaller, but making OpenAI,
3:38
sorry, open source AI more accessible to users and something
3:44
where their experience is very similar to the one of commercial services.
3:49
The first thing we want to work on or we want to talk about is context. And here I have two very simple examples.
3:55
If you are here, you probably all know that context is king and context is important and it's important, but from the bad or negative point of view
4:03
and from the positive point of view, this is the negative example. We have a tool that's called agents that allows you
4:10
to play with agents in your browser, connecting to a local LLM. And one problem we gave it was try and connect to this website, which is the Mozilla AI.
4:19
I think it was the any-agent repository. Yes, the any-agent project and tell us how many stars it has.
4:25
And the first times I tried this tool I was like, man, I did something wrong because it's just returning me the manual to any agent.
4:33
What's happening and what I realized later. At the time, I was still using the default context size was 4K,
4:40
and my tool was downloading stuff from the web and getting way more tokens that were available in the context that was made available by alarm.
4:48
So at the time, the full choice for K nothing shown because logs were not apparent to the user.
4:54
Usually great user experience because if you have a very small context size, the LM is going to work on your system, but the context is cut.
5:03
The model forgets the the question that it's been asked, and it will just take the page and summarize it to you to some extent.
5:11
So this is the bad example. A good example instead is this one. We were playing with any agent,
5:16
which is another open source tool that we're building. And we were trying to answer simple questions.
5:21
I very much like naive, super simple examples. This one is about my birthday.
5:27
I asked Claude what my birthday was and he said, oh, I don't know this David. I asked what my name was.
5:33
It was a bit harsher. It said David, I didn't know, but it doesn't appear anywhere, so I cannot really tell his birthday.
5:41
And then I tried to add a tool, a very simple one that had two functions. It was browse this directory and open and read the contents of this file,
5:50
and then ask the same question to a local small model that kind of try to open stuff and found a birthday file and then opened it.
6:00
Found that there were birthdays of very popular computer scientists. You can see there's other Lovelace, Alan Turing and Charles
6:06
Babbage and me, and it answered properly. And the nice thing is,
6:12
this is a positive example from a model that 0.8 billion large. And again, you already know this.
6:17
You inject the proper context and the thing is going to work better even than a commercial model to some extent.
6:23
Then, to be completely truthful, the zero 8 billion models took quite some attempts
6:28
to get this done properly, but still with very small local models. Let's say for billions, nine billions you will see them.
6:35
This is not right. This is a local agent answering your questions. You will see it trying to open the directory,
6:43
seal the files, try and get a sense of what's there. See there something called birthdays and detect that birthdays is a good file
6:52
name for something that might contain date words and automatically open this.
6:57
So we are living in the context world and something that we feel we are kind of missing from our contexts
7:04
is ways to solve issues that the models have not experienced yet.
7:10
So this is a very frequent use case. You have an LLM, you have a or a commercial model to.
7:15
In this case it was run with a cloud. You ask it to solve a problem. The model finds an issue.
7:22
Luckily it's an agent. It will try and fix the issue, try other solutions. But in some cases the solution is just not there.
7:29
It won't be able to find it unless you interrupt it and say, you know, this thing should be done differently.
7:35
It will do the thing differently and from then on continue without any, any problem. So what if you could save this information and reuse it to some extent?
7:44
And I think Claude does this already. It has memories.
7:49
And you might think that Claude probably is everything that you need to solve this task. I'm going to hand this out to Peter,
7:55
because he had a nice experience with Claude to tell you. Yeah, I'm very good friends with Claude.
8:00
Here's an empty slide. Yeah. So, like David said, folks might say, yeah, but we've got agents MD and Claude.
8:08
We can just add rules and that solves it. Or if you debunk that slightly, then you say, oh, well, we've got memories now as well, so that will solve it. But
8:17
I've, I've got enjoyed quite a lot of time with you in two seconds. I'll keep that off the side for now.
8:22
But I guess the problem with that is that one, it's all it's stored locally. You end up with everything stored in like a Claude.md file.
8:31
I mean, you can have your global one and you have a project one, but all of that stuff then also has to get loaded into the context, which also means
8:37
that Anthropic and friends get to see what's in your context. So you might not want all that stuff getting send up there.
8:43
So yeah, the memories thing I feel like was intended to kind of like improve on the rules.
8:49
But sometimes, even with memory, Claude seems a little bit forgetful. So I asked it click this question, which was saying, basically,
8:58
can you just go and have a little spy at all these memory files you'd been writing and see, like if there's basically duplication across them?
9:05
And Claude was very happy and obliging and told me I was great and then came back and said, yeah, nothing's the same, basically, because they're not byte identical
9:13
and they don't have the same file name, so they just must be completely different. And I was like, are you kind of took me a little bit too literally there, so past it, you know,
9:20
with a little bit of steering, maybe just check for the intent. And then Claude on the wind did lots of things and then came back
9:27
and till the obvious that he said, oh, yeah, I've been writing the same memory tons of times in different places and also just ignoring it.
9:35
So a little bit. Yeah. I feel like this was a little bit of a therapy session. So I will also share some things that happened
9:42
with me and Claude very quickly, which is to fight this Claude not following the rules that it's been given and just doing what it wants.
9:49
Sometimes even when you say no to a prompt, doing what it wants, stuff where it remembered things and kept relapsing.
9:56
And just once when it just told me it was confused. So yeah, it's the good times.
10:02
Anyway. So getting back to the topic, I guess CQ, the blog post that we put out
10:07
about this initially was describing it as Stack Overflow for agents. That was a lot to do with me
10:14
having a very smooth brain, and it seemed like it made sense. And disclaimer for this slide, it doesn't exactly what guy this, but it just try and paint the picture.
10:21
But the idea being that you've got your agent running away runs into some errors. Does that stuff that David
10:27
before finally figures out this is how you do this thing. And then at that point, what it should do in our ideal world is propose.
10:34
That is what we call a knowledge unit to CQ. So we've got CQ exchange at the bottom that if anyone can scan that,
10:41
if they want to go and see the the kind of hosted version that we're running, but also the open source CQ repo that Mozilla AI's got has got an open source
10:50
server component that you can run yourself locally in Docker or whatever. And just check in the case I forget anything, so don't ever forget anything.
10:59
Yeah, that was just it was just a QR code I wasn't supposed to forget. Okay, cool. So what was the knowledge unit?
11:05
I spoiler alert we don't save them. We just put them in JSON. But it looks pretty. Maybe in YAML on a slide.
11:11
So the idea being that we have this schema for a knowledge unit, that the agent's got a skill that explain this in a second how works.
11:18
But this is just basically what gets saved when it's run into a problem. Like what? Like what the domains were
11:23
that it thought it was working in, what the kind of insight was. So what what like some reads got, what action had to take.
11:29
And then it gets like some metadata so they can save around the languages it was using the frameworks. It can save a little pattern I think for once as well.
11:37
Yeah. And then this is kind of how it works on the on the right hand side hits the problem, figures out to fix it.
11:43
Summarizes that stuff submitted to CQ when you're running in a remote mode
11:48
that gets approved by a human in the loop review took over in a second. And then once that's been proposed and exists in the server
11:57
and has been reviewed than any other agent on the planet, that's talking to our hosted CQ instance can get that via a query.
12:04
So the idea being that the skill itself will say, before you start working on a new task, you should come query CQ for that domain
12:11
and see if there's something that might give you a hand. So you kind of get like very targeted specific bits of information
12:17
rather than having to either load everything on the front or figure it out, whatever. Yeah.
12:23
Okay. Cool. I'm still talking. I'm going to hand it back to point just to keep it exciting. So yeah. So CQ, the skill is basically like a, there's a skill
12:32
which you can still plug in and then that runs an MCP server because you've got to have an MC server to be cool, and then the server
12:40
to let you do this so you can query to see what has already got. Let's see. You can propose things once you find it, you know, non-obvious problem
12:49
that would save another agent time. Once you once you get something from querying the guidance and the skills
12:54
like validate this thing first, don't just blindly use it. But anyway, once it's checked and then it tries something out and says,
13:01
actually that did work, it should confirm it. So you kind of build up this confidence scoring over time. And similarly if there's something wrong like it's still guidance
13:08
or it's completely wrong, it can flag that thing as well. There's also a kind of human trigger,
13:16
part of the skill in the plugin, which is that at the end of a session, if you feel like it missed some stuff, you can ask it to like reflect over the whole session
13:22
and kind of show you what it thinks might be like, summarize knowledge units and then you can like approve them and edit them and stuff.
13:29
Yeah. And so how it works I guess initially is this on the left is when you install
13:34
install the plugin by default it's you just kind of you get like a little SQLite database locally.
13:42
So nothing goes anywhere as the default installation. So anyone can just start using it on your own machine.
13:49
And that also means that anything it creates and proposes is saved there.
13:54
There's no like, review process in this stage. So any other agents are running on that machine automatically. Just see that stuff straight away.
14:00
You can then configure it to connect to a remote tier. So as mentioned before, you've got an OS server component of the the CQ repo.
14:08
And that kind of allows you to do almost have like a team level thing. So you can add some users with using in passwords
14:15
and then everyone can propose them. And at that point you have to go through a review process, which I joked yesterday,
14:21
looks a little bit like Tinder. I think it's got a screenshot to show you, but and then also that there's a public commons,
14:26
which is for us, which is like Mozilla, I'm going to say curated.
14:32
But, you know, that kind of vibe where when this thing's fully up and running, the idea is that, you can propose things up
14:39
through the chain. And so if you've got even within your, like, private namespace on the on exchange, you could actually this is something that applies to everyone.
14:47
And I want to nominate that to be graduated up to the Commons. That's kind of that StackOverflow view of like once it's there
14:53
then it's something that everyone can see. Yeah okay. But but risks.
14:59
So yeah we've got to be honest about a lot of this stuff. Said StackOverflow a few times. And with that comes a bit of like,
15:06
oh, this feels a little bit like a social network in some ways. There's a lot of potential
15:12
things that could go wrong with this, and we know about them. We did talk with the security expert. We've got like an old stride internally.
15:18
We've got this document we've tried to look at to ways to mitigate these things, but we can't completely get rid of everything. So,
15:25
yeah, I'm sorry. It says on the social media platform. So basically you've got a variety of things that could potentially go wrong with this.
15:31
So the actual coup could contain something that could make it do something bad or sad times for enterprise.
15:38
And maybe there's personal data or something like that in the skill itself. Again, there's some things on the front like front loaded on the skill,
15:44
which are supposed to mean that it was like a vibe check that we be. So we've built into it now and we worked alongside someone for that,
15:54
which is intended to sort of like go through a series of checks to try and filter out anything ending up in there.
15:59
And the protocol always says, I mentioned earlier, that should always validate K before it tries to actually do what it tells it to do.
16:06
Obviously that's front loaded stuff, but there's still potential for other things. When you look at the server side and the server side of
16:14
things like DDoS and identity spoofing and all the other stuff that comes along with it. So yeah, we're saying this
16:20
you kind of have the same assumptions that given the open internet, that this is a free commons for everyone, but we have to be careful with that.
16:27
I'll stop talking in a second, I promise. Wrap it up, Peter. I give another time. Yeah. So some of the stuff
16:33
we've got this idea of mitigation, as we mentioned before, and some of the kind of the defense in depth is, you might consider it like, what ways could we go about trying to improve this?
16:41
So, with the exchange platform we build in like some of the roadmaps to at the end about was like we could use cryptographic signing maybe.
16:47
So you've got an API key. So I guess very, very quickly when you sign in to CQ Exchange
16:53
or even the open source one, you get like a JWT token for yourself, but then you can then create short lived API keys, which you give to your agent,
17:01
so that actually like delegating permission to your to the agent to act on your behalf. And then we'll take one one step.
17:08
But then so you can't do control plane operations with an API key. And then also the idea being that like that verifies
17:14
like who that person was or what that was acting on behalf of. But then we could do signing of the actual knowledge unit.
17:21
You could potentially upload your public key into the exchange and sort of opt into that sort of stuff.
17:27
We can then make sure that it came from your computer as well. So it's like a layered mitigation there. There's the idea of like layered
17:33
guardrails or guardrails pipeline, where we kind of pass through a lot of stuff as it comes through. So you could check for PII, you can check for stuff out.
17:40
We could be could run sandboxes for things. And the human in the loop review stuff is something
17:46
that we'd we've talked about internally as well. At some point, maybe we need to be able to get away from
17:52
that to like human on the loop, to be able to scale it much more. But for now, we're very keen on making sure we do this right.
17:59
So we're doing human in the loop reviews for things before they become available to other people. And at the same, when you play with this yourself in the server.
18:07
Oh, here we go. There's some screenshots, so there's the Tinder one you can swipe left and right with that's
18:12
on the open source one, and the CQ Exchange one that we just released last week. It looks a little bit more sensible, but that's that.
18:20
And then I think I can give it back to David a thank you. Sorry. Thank you for your time.
18:26
So first of all, I need to say we didn't fix it for everyone or forever.
18:32
We fixed it for a very specific use case. That was a very personal one. I wanted to run the Joplin MCP.
18:40
So Joplin is an open source note taking tool, which I've been using since, I don't know, 15 years ago or something like that.
18:46
So it has plenty of nodes and I want to have my own, let's say LM wiki like experience.
18:51
I wanted it to make make it accessible to cloud. So I just asked Claude, how can I add a new MCP server?
18:58
I know the configuration. I know all the keys I have to add. How should I do that?
19:04
It gave me some instructions. I followed them and this was beginning of April.
19:10
So you will find some things which might not be super up to date with the latest version of SQL, but they're definitely reflecting
19:16
the behavior of cloud. So Claude tried to install and told me everything is fine.
19:22
You have your MCP server set up. Then I started Claude again and I couldn't find it. So I asked, what's the problem?
19:29
And I said, let me look into that. And it continued for a while, trying to find more possible causes.
19:36
And eventually, after quite some time and tokens,
19:41
I decided to give it a suggestion like, why don't you look for the up to date documentation on your own website?
19:49
And this is what Claude did. It went and checked it out and eventually found a solution
19:54
that was like the configuration file has to be in another path and fixed it and eventually told me, okay, now the problem is fixed.
20:01
So what I did with you after that was to explicitly say do, secure, reflect.
20:08
So reflect on what happened. Go through your trace and find how you fix the issue.
20:13
And then it created its own knowledge unit. We proposed it to the system and saved it.
20:19
In that case, it was still just a local. This is why I say we didn't fix it for everyone yet,
20:24
because it was on the local setup that we had and once fixed I could just restart Claude, The MCP was already there.
20:34
I just removed everything and we started the process from scratch just to show that I could try again.
20:40
And then Claude Code automatically looked for relevant information in SQL. It's found the solution to the problem, so it immediately
20:48
decided to use the proper configuration file. So think about these. I sold it for myself whenever I run the agent.
20:56
Again, not just with Joplin, but with other MCPs. The configuration is going to be the good one, and I save time and tokens on that.
21:03
What if now I can share it with my team? Or with what if I can share it with everyone else?
21:09
Like, what is the value that we add to the whole community of people developing with the eye power tools?
21:15
And we want these tools to be in the hands of just one single corporation. Or do we want these tools to be in the hands of many people,
21:22
potentially your own, your own corporation, or your own team? If you want to be safe and just share the internal knowledge you have,
21:30
but possibly also with as a more general commons open to everyone else.
21:36
So what we learned. Yeah. So yeah, it's been fun for a couple of months. Then we only begin to June today.
21:42
Yeah. So this kind of start we talked about late February and then started trying to build this thing throughout April and May.
21:49
We learned a lot of things, I think. And the, the interesting stuff I guess here summarized. So skeletal frames, Tesla vibes.
21:57
It's a big fight for attention because we found a lot of issues on trying to get the skill trigger at the right time,
22:02
because we didn't look like using hooks specifically and just seeing if we could get the LM and the agent to know
22:08
when it should do something rather than ever before. Every single call, for example, because it's more like when a task starts, not before every call or whatever.
22:16
And so that was interesting. And how you kind of do versioning and all that stuff, it kind of interesting. It was why we're here. Yes. That was one thing.
22:24
We found the privacy for us. Privacy first was like the right default a lot. We've been talking a lot internally again about how we could do things
22:32
like Web of Trust and how you could sort of like open this thing up and use like just rely on the protocol itself to do a lot of stuff for you.
22:41
Obviously one of the Mozilla Mozilla like principal things around choice from privacy around the rest of it. So it was like, how do we kind of make things more opt in?
22:48
So from default you can't see who who else who created a specific key. You and I say opt into something and all that sort of stuff.
22:56
But the lesson we learned around that was it kind of sometimes makes things a bit slower to to get there, because you're always having to kind of keep
23:02
that in your mind when you're saying, we can build it this way, we can do that. Well, we build it this way a little, enable us to get there later.
23:09
So it's like trying to dodge a lot of things. The thing compounds.
23:14
So even if you use it offline, found that the more things it finds, it actually becomes quite useful.
23:19
I did I've done some podcast, no live stream anyway.
23:25
Podcast, the live stream things recently where we did a demo on the kind of initial demo for this thing was, trying to get it to write
23:31
some GitHub actions, and it always used to use versions of like two, two major versions, our day, which might not be terrifying, but
23:39
ideally you want it to be accurate and, that sort of thing. You find that it didn't matter how many times
23:44
if you didn't save stuff with CQ, would have still kept doing it because it just goes off it's trading day and sort of like full Dunning-Kruger.
23:50
It claims it knows everything. And then it's controversial thing at the end of the platform before protocol thing, it was more of like a mindset thing, I guess.
23:58
So it was like, as Mozilla David said, we want to make sure that we're trying to put something out there in the public domain.
24:04
We want to like, have have protocols, have schemas like try and help steer that stuff. But actually
24:12
it's sometimes the way around. Maybe you need to have a platform first to be dog food and stuff to see what's like should be in a in a schema.
24:20
What doesn't need to go in there yet, what kind of you might want to leave out? Maybe people might want to customize their own things.
24:27
So we want to get to protocols of our platforms, but we're just trying to make sure that we kind of
24:32
we feel like we're doing it right. I really just wrap this up. Yeah. And so I think the last thing maybe from me is, I think that
24:40
maybe if CQ isn't for you, don't worry if it is, that's awesome. But it feels like there's a lot of similar conversations
24:47
we're having with people that there's a lot of other people in this space as well. So if we've got it wrong, a lot of people have got it wrong, which is slightly reassuring.
24:55
So yeah. Oh yeah. Quit the roadmap. Sorry. That was the thing. What was next? So from a platform perspective on our exchange, we want to build
25:02
a kind of tenancy stuff for names for namespaces. So it's not just individual contributor stuff. It's all private and working on the nomination graduation pipeline.
25:11
So you can graduate stuff from all namespace to commons regardless. Pipelines I mentioned before the signing server
25:17
mentioned before being able to export UK use. So obviously to open schema. So want to be able to take that stuff out and take it any way you want.
25:26
Yeah. It's like that's like the crossover to the protocol one. And then a protocol side, how do we look at things like federation between other servers.
25:32
So if anyone else wanted to run their own server. We've talked to some folks in this in the space who kind of were interested
25:40
in, like a working group around that sort of thing. So there's a lot of stuff coming to watch this space,
25:45
and then that'll be me. Okay.
25:51
Thank you. So this is our usual ending slide. And for that I recycled this image that comes from a 2006 publication.
26:00
It's a 20 years old image. I was doing work on participative systems and CQ is going to be participative.
26:08
StackOverflow was and there was this power law participation that I read about 20 something years ago.
26:14
And it shows how like which different type of engagement or participation
26:20
you can have with the platform that starts from the lowest effort ones till the highest effort once, and also the ones that reward you
26:27
the more because you contributed the most to a given process. So the links that we provide here are kind of following the same power law.
26:34
So you can just check out our Mozilla organization on GitHub. There's plenty of projects.
26:40
There is something we call the choice first stack for AI development that starts from agentic frameworks, goes to
26:48
routing, goes to serving or local model serving and adding
26:54
guardrails and running encoders, everything like that. So you will find an open source package for almost everything that you can do here
27:01
or try to change. This is super low effort. You just try the website and see how it works for you.
27:07
You can clone the repo and try and play with the actual code locally and see how that works for you to.
27:13
And after you've seen how these things work for you. Open issues. We super appreciate harsh comments.
27:21
We want to improve. We want to make this thing something that people actually use. And
27:28
to my desire, if other people want to contribute or want to fork
27:33
and have another project which is as open as what we want to build ours. I just want an open project to to win over here and have these kind of
27:41
knowledge units being shared across people and not just owned by a single company. Submitters, of course, if you want to collaborate with our code
27:50
instead of working and yeah, contribute nucleus, that's also, well, probably not the highest effort thing, but maybe it's something
28:00
that you need to put some effort in before you create them and you test the system on your own. So I think that is really all from this.
28:06
Thanks a lot.
28:14
Thank you both so much. That was really interesting. And like touching on problems we're talking about every day as well.
28:21
We have exactly two minutes for questions. Does anyone have a question they want to ask quickly? Yes.
28:33
Hello there. How does it work when you have like you're in a big organization, you have multiple repositories and different domains.
28:41
And if you're going to do DDT, you take bounded context or something like this. Like I saw in the examples, it said like front end and things like this.
28:49
How does the retrieval work and all this sort of stuff? And does it like leak incorrect information
28:55
and actually confuse the agent. So you can try and answer this. So yeah, it's the skill drives basically like a ton of this stuff
29:05
in terms of like it asks the agent to summarize things at us, the agent to figure out what domains and stuff, and it also tells it like to try and generalize things
29:13
and not to make them specific to like, like, say like a specific project that it's working on. Unless that project is like an open source tool,
29:20
for example, in that, in which case it would be allowed to. So the domains, it's the way that it works and sort of thing before
29:27
like because it was up and down. But you kind of like the domains almost like that, kind of like it's trying to generalize so it can have as many domains as well,
29:34
I think, say as many as you said, a list of domains in or things isn't. Back to my YAML. Yeah.
29:40
But you've also got like languages frameworks. There's a there's a pattern that you can use as like a bespoke string as well.
29:45
So like the agent should be told via the skill. Like a good way to try and use that.
29:53
In terms like what stops it from doing stuff like once things are submitted to like upstream to a remote.
29:59
I guess at that point it sort of becomes more of like the guardrail stuff. And then and then a human in the loop review to say whether something is
30:06
or isn't allowed into like the Commons or whatever. But to add on these,
30:12
these, as you clarify, this is very much a retrieval problem, right. So we have a first implementation.
30:18
We also hope we will make this better in time. So I think there is a lot of effort that can be put here
30:25
into making things better and better. And the more the knowledge base grows,
30:30
the more we want to have something that works efficiently. Yeah, it's actually on that in the open source replayability
30:37
to see exactly how the server can work around how it kind of gets those results
30:42
and scores them and then sends back like the the ordered by relevance. There's a PR one of our colleagues is open
30:48
on the open source report to bring in some untick search and stuff. So exactly that building off that.
30:55
Amazing. Thank you so much guys. Really appreciate that. Thank you all for coming.
31:00
In exactly ten minutes. We will have our last session before lunch.
31:06
Everyone's favorite time slot. So please come back for that and you can find these guys out and about today.
31:14
I hope you can ask them all the questions you like about CQ. Thanks again. Thanks everybody. Thank you.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

# EVSRC-2026-000301 — cq: Stack Overflow for Agents

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `raw_dropped`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

## §0 — Source identity / metadata

- evsrc_id: `EVSRC-2026-000301`
- filename: `EVSRC-2026-000301_cq-stack-overflow-for-agents.md`
- source_platform: `YouTube`
- source_url: `https://www.youtube.com/watch?v=AHIY1XccX_E`
- source_title: `Peter Wilson & Davide Eynard - cq - Stack Overflow for Agents - AI Native DevCon June 2026`
- channel_or_org: `AI Native Dev`
- speaker: `Peter Wilson; Davide Eynard`
- published_at: `2026-07-16`
- captured_at: `2026-07-19`
- captured_by: `Nick`
- capture_method: `transcript paste + screenshot`
- content_type: `technical conference talk / open-source platform and protocol proof-of-concept`
- source_reliability_context: `practitioner`
- topic_tags_light: `[agent_learning, knowledge_units, shared_agent_memory, procedural_knowledge, context_retrieval, knowledge_graduation, federated_commons, agent_security, knowledge_validation, open_source_AI]`

## §0.1 — People / authorship / authority context

- primary speaker(s):
  - name: `Davide Eynard`
    · role_in_source: `presenter / project builder`
    · affiliation_at_publication: `Mozilla.ai`
    · speaker_type: `practitioner`
    · authority_context: `Mozilla.ai practitioner presenting the context problem, local-model examples, CQ’s learned-knowledge workflow, privacy-first posture, and an MCP-configuration case study`
    · identity_confidence: `high_from_screenshot_and_transcript`

  - name: `Peter Wilson`
    · role_in_source: `presenter / project builder`
    · affiliation_at_publication: `Mozilla.ai`
    · speaker_type: `practitioner`
    · authority_context: `Mozilla.ai practitioner presenting CQ’s knowledge-unit schema, local/team/public deployment modes, review flow, security threats, delegation credentials, roadmap, and protocol ambitions`
    · identity_confidence: `high_from_screenshot_and_transcript`

- publisher / channel: `AI Native Dev`
- interviewer / moderator / host: `Unidentified AI Native DevCon stage host`
- event_context: `AI Native DevCon June 2026 conference presentation introducing Mozilla.ai’s CQ proof-of-concept`
- perspective / conflict notes: `The speakers are CQ’s builders and advocates. They explicitly describe it as an early proof-of-concept developed over several months and acknowledge unresolved retrieval, security, moderation, identity, federation, and scaling problems. The source is strongest as direct design evidence and problem discovery—not as proof that a public agent-knowledge commons is production-safe.`

## §2 — Screenshot / visible source details

- visible_duration: `31:31`
- visible_views_at_capture: `418`
- visible_capture_date: `2026-07-19`
- description_context: `CQ is presented as a standardized way for agents to preserve and share lessons learned from difficult tasks—first locally, then within teams or organizations, and eventually through a public commons. Agents query for relevant guidance, propose new knowledge units after resolving problems, validate retrieved guidance, and confirm or flag its usefulness.`
- project_context:
  - `Mozilla.ai CQ open-source client and server`
  - `CQ Exchange hosted service`
  - `local SQLite mode`
  - `team or organization server mode`
  - `proposed federated public commons`
  - `MCP-based agent integration`

## §3 — Interpretations & review log  ·  append-only

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`

- reviewer: `Knox / ChatGPT`
- type: `AI assistant`
- at: `2026-07-19`
- purpose: `strategic source-local interpretation`

**Signal:** **4.9/5 — major Agent Runtime, Build-OS, context supply-chain, federation, and collective-learning source**

**Cross-source relationship:** This source operationalizes the shared-learning, context-artifact, resolved-manifest, activation-receipt, paved-road, and correction-to-system-learning concepts developed across `EVSRC-2026-000292–000300`.

Its distinct contribution is the attempt to create a portable artifact for **experience-derived procedural learning**, then graduate that artifact from:

`private lesson → team knowledge → organization knowledge → federated commons`

The source also exposes why this is substantially more dangerous than an ordinary documentation or question-answering system: an agent may retrieve the lesson and convert it directly into action.

**Net-new posture:** no new OMNI domain; **three credible architecture candidates, five major sharpenings, and several hard security and authority counterweights**

### Core contribution

> **A correction should not have to be rediscovered by every agent—but neither should one agent’s successful workaround silently become everybody’s operating truth.**

CQ addresses a real failure:

1. an agent encounters an unfamiliar problem;
2. it wastes time and tokens trying known but obsolete approaches;
3. a human supplies one decisive correction;
4. the agent succeeds;
5. the lesson disappears when the session ends;
6. every future agent repeats the same failure.

The useful target is:

`experienced failure → preserved lesson → bounded reuse → independent validation → broader promotion`

The dangerous shortcut is:

`one apparent success → reusable instruction for everyone`

OMNI needs the first pattern and must explicitly prevent the second.

---

### 1. Experience-derived lessons need their own artifact type

CQ calls its portable artifact a `knowledge unit`.

That is directionally correct, but the artifact should not be treated as generic knowledge.

It is specifically an **operational lesson derived from an attempted task**.

## Candidate: `operational_lesson_unit`

Minimum contents:

- problem or task signature;
- environment and versions;
- observed failure;
- failed approaches already attempted;
- successful intervention;
- evidence that the intervention worked;
- affected tools, frameworks, domains, and dependencies;
- known applicability boundaries;
- prohibited or dangerous uses;
- source agent and initiating principal;
- human corrections involved;
- creation time;
- validation state;
- supersession and expiry conditions;
- links to the original execution trace.

The unit remains distinct from:

- raw evidence;
- a durable fact;
- organizational policy;
- an approved skill;
- domain truth;
- an execution instruction.

It begins as a **candidate reusable lesson**.

**Keeper line:**

> **A lesson records what worked under declared conditions; it does not prove what should always be done.**

---

### 2. A lesson requires an applicability envelope

CQ retrieves guidance according to domains, languages, frameworks, patterns, and semantic similarity.

That is necessary but not sufficient.

A technically similar problem may differ in:

- software version;
- operating system;
- deployment environment;
- security policy;
- tenant;
- dependency graph;
- available permissions;
- consequence;
- regulatory setting;
- organizational conventions.

A lesson about configuring one MCP server may be useful for another configuration task but harmful if the path, runtime, permission model, or version changed.

## Candidate: `lesson_applicability_envelope`

It should declare:

- valid task classes;
- applicable versions and environments;
- required preconditions;
- incompatible contexts;
- confidence;
- last successful reproduction;
- known failures;
- local policy overrides;
- authority required to apply it;
- whether the lesson is informational, advisory, or executable.

Retrieval should return not merely:

> This looks relevant.

It should return:

> This may apply because these declared conditions match; these material differences remain.

**Keeper line:**

> **Retrieval without applicability is just confident context injection.**

---

### 3. Local success, community confirmation, and independent proof are different states

CQ allows agents to:

- propose a lesson;
- retrieve it;
- confirm that it worked;
- flag it as stale or incorrect;
- accumulate a confidence score.

That is useful, but confirmations can create false confidence.

Ten confirmations may still be:

- ten agents using the same model;
- ten runs against the same repository;
- ten copies of the same original claim;
- ten users who never inspected the resulting side effects;
- ten successful outputs with one shared hidden failure.

The lifecycle should preserve an evidence ladder:

## `operational_lesson_validation_state`

Possible states:

- `proposed`
- `locally_reproduced`
- `human_reviewed`
- `independently_reproduced`
- `cross_environment_reproduced`
- `organization_approved`
- `commons_published`
- `contested`
- `stale`
- `revoked`
- `superseded`

Confidence should reflect:

- independence;
- environmental diversity;
- version coverage;
- failure reports;
- reviewer competence;
- consequence class.

Not merely vote count.

**Keeper line:**

> **Repeated reuse raises confidence only when the repetitions add genuinely independent evidence.**

---

### 4. Knowledge needs a graduation ladder, not one shared pool

CQ’s strongest architectural decision is its progressive scope:

1. local SQLite;
2. team or organization server;
3. public exchange;
4. proposed federated commons.

This is superior to sending every learned lesson directly to a global platform.

## Candidate: `knowledge_graduation_ladder`

### Local

- private by default;
- rapid capture;
- may include project-specific context;
- low publication burden;
- limited authority and reuse.

### Team or operator

- ownership required;
- sensitive details removed;
- environment and policy compatibility checked;
- human review;
- internal validation.

### Cross-operator or public commons

- generalized safely;
- independently reproduced;
- privacy and intellectual-property review;
- security analysis;
- publisher identity;
- stronger moderation;
- explicit licensing;
- revocation support.

### Governing adoption

Even commons publication does not make the lesson OMNI policy, doctrine, or domain truth.

It still requires task- and authority-specific admission.

**Keeper line:**

> **The farther a lesson travels from the event that created it, the stronger its evidence, abstraction, privacy, and revocation requirements must become.**

---

### 5. A shared lesson is part of the executable supply chain

The source openly recognizes that a knowledge unit may contain instructions capable of causing an agent to:

- run commands;
- modify files;
- access data;
- alter configuration;
- invoke tools;
- persist behavior.

The Stack Overflow analogy therefore understates the risk.

A human reading an unsafe answer may exercise judgment before acting.

An agent may translate retrieved guidance into immediate execution.

A lesson commons therefore belongs inside the same supply-chain control surface as:

- skills;
- plugins;
- prompts;
- MCP servers;
- scripts;
- packages;
- model tools.

Required controls include:

- publisher identity;
- artifact signatures;
- immutable versions;
- provenance;
- declared effects;
- malware and PII scanning;
- sandbox testing;
- tool and network restrictions;
- short-lived delegated credentials;
- revocation;
- incident response;
- downstream invalidation.

**Hard line:**

> **Advice becomes software when an agent can execute it.**

The source’s “vibe check,” prompt-level validation instruction, and human swipe review are useful prototypes, not sufficient security boundaries.

---

### 6. Validation must happen before use and after consequence

CQ instructs the agent not to trust retrieved guidance blindly and to validate it before applying it.

That is directionally strong.

But validation has two moments:

#### Pre-application validation

- does the environment match;
- is the lesson current;
- is the source trusted;
- is the action permitted;
- can it be tested safely;
- is rollback available?

#### Post-application validation

- did the immediate task succeed;
- did another behavior degrade;
- was the underlying problem actually resolved;
- were security or privacy consequences introduced;
- did the result persist after restart or deployment?

A command completing without error is not sufficient confirmation.

**Keeper line:**

> **A lesson is not validated merely because the instructed action ran; reality must confirm the intended effect without unacceptable side effects.**

This should connect to the corpus’s `prediction_residual_event` and post-intervention outcome evidence.

---

### 7. Revocation must propagate as aggressively as publication

The source discusses flagging stale or incorrect knowledge but does not fully develop the downstream consequences.

Once a lesson has been:

- copied locally;
- cached by agents;
- extended into skills;
- used in automation;
- republished through federation;

a correction at the source does not automatically repair the deployed ecosystem.

A mature system needs:

- stable artifact IDs;
- dependency and reuse tracking;
- revocation notices;
- invalidation propagation;
- affected-run discovery;
- replacement or migration guidance;
- emergency blocking;
- audit of actions taken under the revoked lesson.

**Sharpening: `knowledge_revocation_propagation`**

**Keeper line:**

> **A commons that can distribute guidance but cannot retract its influence is not governable.**

---

### 8. Web-of-trust and reputation may guide attention, not create truth

The presenters consider:

- publisher identity;
- cryptographic signing;
- public keys;
- webs of trust;
- confirmation scores;
- community moderation.

These are useful for answering:

- who created this;
- whether it was modified;
- whether others found it useful;
- whether a contributor has a history of quality.

They cannot answer by themselves:

- whether the lesson is correct now;
- whether it applies here;
- whether the publisher has authority over this domain;
- whether local policy permits its use;
- whether the lesson is safe in a high-consequence context.

**Keeper line:**

> **Reputation can prioritize what deserves review; it cannot substitute for applicability, evidence, or authority.**

This is especially important if public knowledge enters healthcare, identity, communications, security, or commerce workflows.

---

### 9. Privacy-first local operation is the correct default

CQ defaults to a local SQLite database and makes remote sharing opt-in.

That is one of its strongest decisions.

Agent traces and lessons may expose:

- code;
- internal architecture;
- credentials;
- customer names;
- security weaknesses;
- personal information;
- proprietary operational practices;
- failed attempts that reveal exploitable conditions.

Before promotion beyond local scope, the system should perform:

- purpose review;
- sensitive-data detection;
- de-identification;
- intellectual-property review;
- tenant-boundary review;
- abstraction;
- human approval.

However, de-identification must not destroy the technical context required to judge applicability.

The solution is not indiscriminate redaction. It is **scope-aware abstraction with retained private provenance**.

---

### 10. Reflection is useful, but the agent should not grade its own lesson alone

CQ can ask the agent at the end of a session to reflect on what it learned and propose knowledge units.

That is a useful extraction mechanism.

But the agent may:

- misidentify the cause;
- overgeneralize the workaround;
- omit the decisive human intervention;
- forget failed attempts;
- produce a cleaner story than the trace supports;
- take credit for a correction supplied by the operator.

A proposed lesson should link to:

- execution trace;
- relevant human intervention;
- before-and-after state;
- tests or observations;
- unresolved uncertainty.

The reflection is a hypothesis about the lesson—not the lesson’s proof.

**Keeper line:**

> **The agent may summarize its experience; the trace and resulting consequence must remain available to challenge that summary.**

---

### 11. Platform-before-protocol is sensible if the protocol remains provisional

The presenters candidly explain that they first needed a working platform to discover:

- what the schema should contain;
- how retrieval behaves;
- where activation fails;
- which security problems appear;
- what users actually need;
- what should remain customizable.

That is sound.

A protocol designed before operational experience often encodes imaginary requirements.

But platform-first work also creates the opposite danger:

- one product’s assumptions harden into the standard;
- temporary implementation constraints become universal fields;
- backward compatibility freezes early mistakes;
- commercial incentives shape supposedly neutral protocols.

The safe path is:

`prototype → observed use → provisional schema → multiple implementations → interop tests → versioned protocol`

Required protocol properties include:

- version negotiation;
- extension points;
- explicit optional fields;
- portable export;
- namespace and federation rules;
- semantic compatibility tests;
- no dependency on one hosted exchange.

**Keeper line:**

> **Use the platform to discover the protocol; do not let the platform quietly become the protocol’s permanent constitution.**

---

### 12. Federation must preserve local authority and refusal

CQ’s federation ambition is strategically valuable:

- organizations may run their own servers;
- lessons can remain private;
- selected lessons may graduate outward;
- public knowledge need not be controlled by one corporation.

But federation is not one universal commons.

Different participants may have different:

- trust policies;
- legal restrictions;
- moderation standards;
- accepted schemas;
- security requirements;
- licensing;
- revocation rules;
- risk tolerance.

Federation therefore requires:

- namespace identity;
- origin server;
- signature chain;
- local admission policy;
- selective synchronization;
- right to refuse or quarantine;
- conflict and supersession behavior;
- provenance preserved across hops.

**Keeper line:**

> **Federation should make knowledge portable without making every participant equally trusted or every lesson universally admissible.**

---

## What not to import

- Stack Overflow votes or confirmations treated as truth.
- One agent’s successful workaround generalized automatically.
- Semantic similarity treated as proof of applicability.
- A public knowledge unit allowed to expand local authority or tool access.
- Agent self-reflection treated as independent evidence.
- Prompt-based “validate before use” treated as a security boundary.
- Human swipe review treated as adequate for high-consequence publication.
- Cryptographic signing treated as proof that content is correct or safe.
- Web-of-trust reputation treated as domain authority.
- Public lessons containing private traces, code, patient data, credentials, or proprietary context.
- Local lessons automatically shared among every agent on a machine without mission scoping.
- Confidence scores based on correlated agents or copied confirmations.
- Human review removed merely because commons volume becomes inconvenient.
- Federation treated as one global policy regime.
- Lessons retained indefinitely after versions, tools, or environmental assumptions change.
- Agent accessibility allowed to outrank human contestability and correction.

## Hard verdict

This is one of Wave-6’s strongest collective-learning sources.

Its central idea is correct:

> A hard-won correction should become reusable system knowledge rather than disappear with the session.

But safe reuse requires substantially more than saving a summarized answer and counting confirmations.

### Genuine architecture candidates

1. **`operational_lesson_unit`**
   - an experience-derived candidate lesson preserving problem, environment, failure, intervention, evidence, scope, provenance, and lifecycle.

2. **`lesson_applicability_envelope`**
   - declares where a lesson is valid, incompatible, stale, permitted, and independently reproduced.

3. **`knowledge_graduation_ladder`**
   - governs movement from private lesson to team, operator, federated commons, and possible formal adoption.

### Major sharpenings

1. **Operational-lesson validation states**
   - proposal, local reproduction, independent reproduction, publication, contest, revocation, and supersession remain distinct.

2. **Knowledge revocation propagation**
   - retraction and invalidation must travel through every cached, extended, or federated use.

3. **Pre- and post-application validation**
   - validate both task fit before execution and real consequence afterward.

4. **Reflection linked to trace**
   - agent-authored lessons remain hypotheses grounded in durable execution evidence.

5. **Platform-to-protocol maturation**
   - derive standards from use, then prove them through multiple implementations and versioned interoperability.

6. **Federated local admission**
   - portable knowledge does not imply universal trust or universal applicability.

### Principal counterweights

1. Advice becomes executable supply-chain material when an agent can act on it.
2. More confirmations do not necessarily provide more independent evidence.
3. Publisher identity proves origin, not correctness.
4. A reusable lesson is not policy, doctrine, authority, or truth.
5. Collective learning compounds poison as readily as wisdom.
6. The right to share knowledge must be paired with the ability to refuse, quarantine, revoke, and forget it.

### One-line read

**CQ points toward a valuable collective-learning substrate in which agents stop repeating solved mistakes—but OMNI must ensure that every portable lesson carries its provenance, applicability, evidence, authority ceiling, graduation state, and revocation path before one local workaround becomes shared machine behavior.**

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



- reviewer: `Opus` (repo-native, Cursor) · type: `AI assistant` · at: `2026-07-19` · purpose: `formalize Review 001 (Knox) → structured per-source extraction` · binds nothing (`GRD-036`/`GRD-044`)

**Method note.** Read §1 transcript IN FULL (Peter Wilson + Davide Eynard, Mozilla.ai "cq — Stack Overflow for Agents," AI Native DevCon, ~31 min, timestamped incl. audience Q&A) + §3 Review 001 (Knox, Signal 4.9/5 — one of wave-6's strongest collective-learning sources) IN FULL. **Full-depth** formalization; transcript is timestamped → verbatim anchors carry real `mm:ss`. I **verify/sharpen** Knox against OMNI canon + the wave-6 registry (`EVRUN-2026-000011`) + the cumulative dedup baseline; I do not re-derive. **Canonical id = `EVSRC-2026-000314`** (filename); the pasted Knox block's header id `EVSRC-2026-000301` is **stale** → ignored. PROPOSE-ONLY: nothing minted/promoted; no contract/thesis/registry edits. Dedup verdict up front: **0 genuine net-new DOMAIN objects**; yield = 3 investigate-lane candidates (an operational-lesson/knowledge-lifecycle family) + 6 major sharpenings + a heavy security/authority counterweight set. This is a **Knowledge-Reservoirs + Agent-Runtime + security + §C-federation** source; **§C stays PAUSED** (federated commons = inbound/outbound governed-exchange pressure only). Its single hardest contribution — *advice becomes executable software the moment an agent can act on it* — is the sharpest external statement of OMNI's supply-chain/candidate≠commit physics in the wave.

### Cluster table (one row per concept cluster; 4-axis + anchor + verdict)

| # | concept | OMNI meaning | downstream homes | source anchor (verbatim ≤12w + ts) | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| 1 | **Core: a correction shouldn't be re-discovered by every agent — but one workaround must not silently become everyone's truth** | The useful target is `experienced failure → preserved lesson → bounded reuse → independent validation → broader promotion`; the dangerous shortcut is `one apparent success → reusable instruction for everyone`. OMNI needs the first and must structurally prevent the second. | Knowledge-Reservoirs · candidate≠commit (knowledge layer) · Accountability/Learn · Evidence-Plane (`GRD-036` capture-broad-promotion-gated) | "save this information and reuse it… Claude does this already" (07:35–07:44) | doctrine=AFFIRM (candidate≠commit; capture-broad-promotion-gated) × build=absent | spine-affirming | watch |
| 2 | **`operational_lesson_unit`** (candidate) | An experience-derived *candidate lesson* from an attempted task — problem signature, environment/versions, observed failure, failed approaches, successful intervention, evidence it worked, affected tools/frameworks/domains, applicability bounds, prohibited uses, source agent + initiating principal, human corrections, timestamps, validation state, supersession/expiry, link to execution trace. Distinct from raw evidence / durable fact / policy / approved skill / domain truth / execution instruction. Begins as a candidate. | Knowledge-Reservoirs · Agent Runtime · Evidence-Plane · dedup vs 287 OKF knowledge-unit + 295 self-learning-memory + 288 edits≠training-truth + 305 correction-to-system-learning | "propose… what we call a knowledge unit to CQ" (10:34); "domains… insight… action… metadata" (11:18–11:37) | doctrine=PARTIAL (candidate≠commit; payload-noun≠domain — an artifact TYPE, not a domain) × build=absent | vocabulary / investigate | investigate |
| 3 | **`lesson_applicability_envelope`** (candidate) | Retrieval by domain/language/framework/semantic-similarity is necessary but NOT sufficient: a similar problem may differ in version, OS, deployment, security policy, tenant, dependency graph, permissions, consequence, regulation, conventions. Envelope declares valid task-classes, versions/environments, preconditions, incompatible contexts, confidence, last-successful-reproduction, known failures, local-policy overrides, authority-required, and whether the lesson is informational/advisory/**executable**. Retrieval must return "may apply because X matches; these material differences remain" — not "this looks relevant." | Agent Runtime (retrieval) · Knowledge-Reservoirs · Reactor · dedup vs `capability_envelope` + 285 `certified_variation_envelope` + retrieval≠authority + REV-184 outcome-reads-frozen-context | "does it like leak incorrect information and confuse the agent" (08:49, audience); "generalize… not specific to a project" (29:05) | doctrine=AFFIRM (retrieval≠authority; capability≠authority) × build=absent | vocabulary / investigate | investigate |
| 4 | **`operational_lesson_validation_state`** (candidate — evidence ladder) | Confirmations can manufacture false confidence (ten confirmations may be ten copies of one claim / one model / one repo / one hidden shared failure). Lifecycle preserves an **evidence ladder**: `proposed → locally_reproduced → human_reviewed → independently_reproduced → cross_environment_reproduced → organization_approved → commons_published → contested → stale → revoked → superseded`. Confidence must reflect independence, environmental diversity, version coverage, failure reports, reviewer competence, consequence class — NOT vote count. | candidate≠commit lifecycle · Accountability · dedup vs 288 eval≠release-authority + F5 activation-states + multiplicity≠authority (`EVRUN-000004` F4) | "build up this confidence scoring over time" (13:01); Knox: "Ten confirmations may still be ten copies" | doctrine=AFFIRM (candidate≠commit; multiplicity≠independence) × build=absent | vocabulary / investigate | investigate |
| 5 | **`knowledge_graduation_ladder`** (sharpening) | CQ's strongest decision: progressive scope `local SQLite → team/org server → public exchange → federated commons`, superior to global-by-default. The farther a lesson travels from its origin event, the stronger its evidence/abstraction/privacy/revocation requirements must become. Even commons publication ≠ OMNI policy/doctrine/domain-truth; still needs task+authority-specific admission. | Knowledge-Reservoirs · Build-OS · Manifest-Read-Graph (tiers) · `GRD-036` · dedup vs 286 shadow_agent promotion-path + 287 OKF graduation | "local SQLite… team level… public commons… graduate up to the Commons" (13:34–14:53) | doctrine=AFFIRM (capture-broad-promotion-gated; promotion ladder) × build=absent | spine-affirming | watch |
| 6 | **A shared lesson is EXECUTABLE supply chain — "advice becomes software when an agent can execute it"** (sharpening; HARD LINE) | The Stack Overflow analogy *understates* the risk: a human exercises judgment before acting; an agent translates retrieved guidance into immediate execution. A lesson commons belongs inside the SAME supply-chain control surface as skills/plugins/prompts/MCP-servers/scripts/packages/model-tools: publisher identity, signatures, immutable versions, provenance, declared effects, malware/PII scanning, sandbox testing, tool/network restriction, short-lived delegated credentials, revocation, incident response, downstream invalidation. "Vibe check" + prompt-level "validate before use" + human swipe review are prototypes, NOT sufficient boundaries. | security/supply-chain control-plane · Agent Runtime · Build-OS · dedup vs 285/293 plugin=supply-chain+release-authority + config=executable-architecture + 287 portable-bundle=exfiltration-surface | "the actual [unit] could contain something… make it do something bad" (15:31); Knox: "Advice becomes software when an agent can execute it." | doctrine=AFFIRM (supply-chain governance; candidate≠commit) × build=absent (no supply-chain control-plane) | spine-affirming | watch |
| 7 | **Pre- AND post-application validation** (sharpening) | Validation has two moments. Pre: environment match, currency, source trust, permission, safe-testability, rollback. Post: did the task succeed, did another behavior degrade, was the underlying problem actually resolved, were security/privacy consequences introduced, did it persist after restart/deploy. "A command completing without error is not confirmation." Knox explicitly links this to the corpus `prediction_residual_event` + post-intervention outcome evidence. | REV-184 (outcome-reads-frozen-context) · Reactor · Prove phase · dedup vs `prediction_residual_event` + actual_vs_predicted (294) | "validate this thing first, don't just blindly use it" (12:54); "restart Claude… immediately… proper config" (20:40) | doctrine=AFFIRM (REV-184; prove-by-observed-reality) × build=partial (audit/outcome reads exist) | spine-affirming | watch |
| 8 | **`knowledge_revocation_propagation`** (sharpening) | Flagging stale/incorrect knowledge is discussed but under-developed. Once a lesson is copied/cached/extended-into-skills/automated/republished, a source correction does NOT auto-repair the deployed ecosystem. Needs stable artifact IDs, dependency/reuse tracking, revocation notices, invalidation propagation, affected-run discovery, replacement/migration guidance, emergency blocking, audit of actions taken under the revoked lesson. "A commons that can distribute guidance but cannot retract its influence is not governable." | security/incident · Knowledge-Reservoirs · dedup vs `EVRUN-000004` F1 correction/withdrawal-propagation + supersession-state | "it can flag that thing as well" (13:08, under-developed) | doctrine=AFFIRM (correction/withdrawal propagation) × build=absent | vocabulary | watch |
| 9 | **Web-of-trust / reputation guides attention, not truth** (sharpening / counterweight) | Publisher identity, signing, public keys, webs of trust, confirmation scores, moderation answer *who created this / was it modified / did others find it useful / contributor history* — they CANNOT answer *is it correct now / does it apply here / does the publisher have domain authority / does local policy permit / is it safe in high-consequence*. Reputation prioritizes what deserves review; it never substitutes for applicability, evidence, or authority. | RBAC/Identity · Federation · dedup vs capability≠authority + multiplicity≠authority | "cryptographic signing maybe… Web of Trust" (16:41; 22:24) | doctrine=AFFIRM (identity/reputation ≠ authority/correctness) × build=absent | spine-affirming | watch |
| 10 | **Privacy-first local default** (sharpening / AFFIRM) | Local SQLite default with opt-in remote is one of CQ's strongest decisions. Traces/lessons may expose code, architecture, credentials, customer names, security weaknesses, PII, proprietary practice, exploitable failed-attempts. Before promotion: purpose review, sensitive-data detection, de-identification, IP review, tenant-boundary review, abstraction, human approval — but de-identification must NOT destroy the technical context needed to judge applicability. Solution = **scope-aware abstraction with retained private provenance**, not indiscriminate redaction. | D7 consent/retention · tenant-boundary (C3.8) · Care (partitioned/consented memory) · dedup vs 295 partitioned-memory + 292 research-data≠care-truth | "privacy first was the right default a lot" (22:24); "from default you can't see who created a key" (22:48) | doctrine=AFFIRM (consent/tenant-boundary; scope-aware abstraction) × build=absent | spine-affirming | watch |
| 11 | **Reflection is a hypothesis, not proof — the agent must not grade its own lesson alone** (sharpening) | Agent end-of-session reflection is a useful extraction mechanism, but the agent may misidentify cause, overgeneralize, omit the decisive human intervention, forget failed attempts, produce a cleaner story than the trace supports, or take credit for the operator's correction. A proposed lesson must link to execution trace, human intervention, before/after state, tests/observations, unresolved uncertainty. The trace + resulting consequence must remain available to challenge the summary. | `EVRUN-000004` F3 (AI-contribution influence lineage; exposure≠acceptance≠correctness) · dedup vs 292 generator≠sole-evaluator + candidate≠commit | "do, secure, reflect… go through your trace" (20:01–20:13) | doctrine=AFFIRM (self-reflection≠independent-evidence; F3) × build=absent | spine-affirming | watch |
| 12 | **Platform-before-protocol — use the platform to discover the protocol, don't let it become the protocol's constitution** (sharpening) | Building the platform first to discover schema/retrieval/activation/security/needs is sound; the opposite danger is one product's assumptions hardening into "the standard," temporary constraints becoming universal fields, backward-compat freezing early mistakes, commercial incentives shaping "neutral" protocols. Safe path: `prototype → observed use → provisional schema → multiple implementations → interop tests → versioned protocol`. Protocol needs version negotiation, extension points, explicit optional fields, portable export, namespace/federation rules, semantic-compat tests, no dependency on one hosted exchange. | GRD-033 (rail-agnostic, semantics-stable) · Build-OS · dedup vs 287 OKF standard-vs-admission | "we want to get to protocols out of platforms" (24:27); "maybe you need a platform first to dogfood" (24:12) | doctrine=AFFIRM (GRD-033; interop-at-boundary) × build=n/a | vocabulary | watch |
| 13 | **Federation must preserve local authority + refusal** (sharpening; §C-pressure) | Federation is strategically valuable (orgs run own servers; lessons stay private; selected lessons graduate; commons not owned by one corp) — but it is NOT one universal commons. Participants differ in trust policy, legal restriction, moderation, schema, security, licensing, revocation, risk tolerance. Requires namespace identity, origin server, signature chain, **local admission policy**, selective sync, **right to refuse/quarantine**, conflict/supersession behavior, provenance preserved across hops. | §C (Governed Capability Exchange — **PAUSED**) · Federation · RBAC · dedup vs 282 clearinghouse-federation + "centralize plumbing, federate meaning" | "how do we look at things like federation between servers" (25:26); "right to refuse or quarantine" (Knox) | doctrine=AFFIRM (Federation; local admission/refusal) × build=absent | spine-affirming | watch (§C PAUSED — pressure only) |
| 14 | **"The thing compounds" — collective learning compounds poison as readily as wisdom** (counterweight-anchor) | Eynard/Wilson note offline the corpus becomes more useful as it grows; Knox's inversion is the keeper: the same compounding that spreads good lessons spreads bad ones. The right to share knowledge must be paired with the ability to refuse, quarantine, revoke, and forget. | security · Knowledge-Reservoirs · Care (no silent shared training) · guardrail digest | "The thing compounds… the more it finds… quite useful" (23:09) | doctrine=AFFIRM-with-counterweight × build=absent | spine-affirming | watch (see counterweights) |

### Net-new primitive dispositions (EVERY candidate → disposition; dedup vs cumulative baseline)
Knox names **3 genuine architecture candidates + 6 major sharpenings + 6 principal counterweights**. Candidate dispositions:

1. **`operational_lesson_unit`** → **INVESTIGATE** (route to Knowledge-Reservoirs + Agent Runtime + Evidence-Plane watch). `EXISTS-AS` an *artifact type* under candidate≠commit + `GRD-036` capture-broad-promotion-gated; **payload-noun≠domain** (`GRD-026`) — a lesson is not a new root domain. Converges with 287 OKF knowledge-unit, 295 self-learning-memory (must be partitioned/consented/promotion-gated), 288 edits≠training-truth, 305 `correction_to_system_learning_loop`. Do NOT mint; carry as investigate. This is the anchor of a **knowledge-lesson-lifecycle family**.
2. **`lesson_applicability_envelope`** → **INVESTIGATE** (route to Agent Runtime retrieval + Knowledge-Reservoirs + Reactor watch). `EXISTS-AS` a specialization of `capability_envelope` + retrieval≠authority + REV-184 outcome-reads-frozen-context; pairs directly with 285 `certified_variation_envelope` (batch-2 family F1). Not net-new domain. Investigate.
3. **`operational_lesson_validation_state`** → **INVESTIGATE** (route to candidate≠commit lifecycle + Accountability watch). `EXISTS-AS` the candidate→…→committed lifecycle + 288 eval≠release-authority + F5 activation-states + F4 multiplicity≠independence. A state family, not a domain. Investigate.
4. **`knowledge_graduation_ladder`** → **DEDUP** into `GRD-036` capture-broad-promotion-gated + Manifest-Read-Graph tiers + 286 promotion-path + 287 OKF graduation. Sharpening.
5. **Executable-supply-chain / "advice becomes software"** → **DEDUP** into 285/293 plugin=supply-chain+release-authority + config=executable-architecture + 287 portable-bundle=exfiltration-surface. Sharpening (the strongest in the source).
6. **Pre-/post-application validation** → **DEDUP** into REV-184 + `prediction_residual_event` + Prove phase. Sharpening.
7. **`knowledge_revocation_propagation`** → **DEDUP** into `EVRUN-000004` F1 correction/withdrawal-propagation + supersession. Sharpening (under-built everywhere; strong security watch).
8. **Reflection-linked-to-trace** → **DEDUP** into F3 AI-contribution influence lineage (exposure≠acceptance≠correctness) + 292 generator≠sole-evaluator. Sharpening.
9. **Platform-to-protocol maturation** → **DEDUP** into GRD-033 + 287 standard-vs-admission. Sharpening.
10. **Federated local admission** → **DEDUP** into §C + Federation + 282 clearinghouse; **§C stays PAUSED** (pressure input only). Sharpening.

**Genuine net-new DOMAIN objects: 0.** Retired terms (`EVRUN-000004` §0.5 ④) NOT re-minted. `D0OL-GRD-001..008` NOT re-minted as primitives. The three investigate candidates form a coherent **operational-lesson / knowledge-lifecycle family** — route to Knowledge-Reservoirs + Agent-Runtime watch alongside batch-2 F1 (compiler/variation) and F5 (activation/promotion) families, NOT minted here.

### Counterweights (EVERY caution preserved or explicitly rejected — NEVER inverted)
**Knox's 6 principal counterweights — all PRESERVED:**
1. **Advice becomes executable supply-chain material the moment an agent can act on it.** (keeper hard line)
2. **More confirmations do not necessarily provide more independent evidence.** (correlated agents / copied confirmations)
3. **Publisher identity proves origin, not correctness.**
4. **A reusable lesson is not policy, doctrine, authority, or truth.**
5. **Collective learning compounds poison as readily as wisdom.**
6. **The right to share knowledge must be paired with the ability to refuse, quarantine, revoke, and forget it.**

**Knox's "What not to import" (18) — all PRESERVED as reject/guardrail inputs:** SO votes/confirmations as truth · one workaround auto-generalized · semantic similarity as proof of applicability · a public unit expanding local authority/tool access · agent self-reflection as independent evidence · prompt-based "validate before use" as a security boundary · human swipe review as adequate for high-consequence publication · signing as proof of correctness/safety · web-of-trust reputation as domain authority · public units containing private traces/code/patient-data/credentials/proprietary context · local lessons auto-shared among every agent on a machine without mission scoping · confidence scores from correlated agents/copied confirmations · human review removed for commons-volume convenience · federation as one global policy regime · lessons retained after versions/tools/assumptions change · agent accessibility outranking human contestability/correction. None inverted. The builders' own optimistic framings (Stack-Overflow-for-agents, "the thing compounds → useful," swipe/Tinder review, memories "solve it") are recorded as **design evidence held under their counterweights**, not adopted as safe.

### Care implications
- **Highest-stakes clause: a public/shared lesson entering healthcare, identity, communications, security, or commerce workflows.** Knox flags this explicitly (§8). In OMNI, a portable "lesson" that an agent can *execute* against a care surface is exactly the path AI-never-care-authority + candidate≠commit exist to block: a workaround confirmed ten times by correlated agents must NEVER become care behavior without independent reproduction, authority-specific admission, and outcome proof.
- **Care memory must diverge from CQ's default sharing.** Reinforces 295: care/patient knowledge must be **partitioned, consented, promotion-gated** — the opposite of "any other agent on that machine automatically sees it straight away" (14:00). Local-by-default is right; *silent local cross-agent sharing without mission scoping* is a care hazard.
- **Scope-aware abstraction, not redaction.** A care lesson that strips PII but keeps enough context to judge applicability is the correct target; indiscriminate redaction destroys the applicability envelope, and un-abstracted sharing leaks patient/tenant data. This is a real design constraint for any future OMNI clinical-knowledge reuse.
- **Revocation must reach care fastest.** A revoked/incorrect care lesson that stays cached in an agent is a patient-safety incident; `knowledge_revocation_propagation` is care-critical, not merely hygienic.

### Guardrail candidates → route `08` open-review → `06` digest (PROPOSE-ONLY, `user_knox_required`; reviewer decides distinct-vs-sharpen-existing)
- **G-314-1:** *Advice becomes software the moment an agent can execute it; any shared/retrieved lesson an agent can act on belongs inside the same supply-chain control surface as skills, plugins, MCP servers, and packages.* (dedup vs 285/293 plugin=supply-chain.)
- **G-314-2:** *Retrieval without an applicability envelope is confident context injection; a match on domain/similarity is not proof the lesson applies here, now, at this version/tenant/consequence.* (likely distinct — `lesson_applicability_envelope`.)
- **G-314-3:** *Repeated reuse/confirmation raises confidence only when the repetitions add genuinely independent evidence; correlated agents and copied confirmations are one vote, not many.* (dedup vs multiplicity≠independence, `EVRUN-000004` F4.)
- **G-314-4:** *Publisher identity and signatures prove origin and integrity, never correctness, applicability, safety, or domain authority; reputation prioritizes review, it does not authorize action.* (dedup vs capability≠authority.)
- **G-314-5:** *A lesson is not validated because the instructed action ran without error; reality must confirm the intended effect without unacceptable side effects (pre- AND post-application).* (dedup vs REV-184 / `prediction_residual_event`.)
- **G-314-6:** *A commons that can distribute guidance but cannot retract its influence across every cached, extended, and federated use is not governable; revocation must propagate as aggressively as publication.* (likely distinct — `knowledge_revocation_propagation`.)
- **G-314-7:** *The farther a lesson travels from the event that created it, the stronger its evidence, abstraction, privacy, and revocation requirements must become; commons publication is never OMNI policy/doctrine/domain-truth.* (dedup vs `GRD-036` capture-broad-promotion-gated.)
- **G-314-8:** *Agent self-reflection is a hypothesis about a lesson, not its proof; a proposed lesson must link to the execution trace, the decisive human intervention, and before/after consequence that can challenge the summary.* (dedup vs F3 exposure≠acceptance≠correctness.)
- **G-314-9:** *Privacy-first local default is correct, but silent cross-agent sharing on one machine without mission scoping is a leak; use scope-aware abstraction with retained private provenance, never indiscriminate redaction.* (dedup vs 295 partitioned-memory / D7.)
- **G-314-10:** *Federation makes knowledge portable without making every participant equally trusted or every lesson universally admissible; each participant retains local admission policy and the right to refuse/quarantine.* (§C PAUSED — pressure input.)

### Reread flags
- **`operational_lesson_unit` + `lesson_applicability_envelope` + `operational_lesson_validation_state`** — reread as a *single family* against Knowledge-Reservoirs + Agent-Runtime map + batch-2 F1 (`certified_variation_envelope`, 285; `compiled_agent_manifest`, 293) and F5 (activation/promotion, 289/286) before the reviewer decides distinct-vs-sharpen; risk is minting three siblings where one governed lifecycle + envelope already covers them.
- **Care-memory divergence** — reconcile against 295 (self-learning-memory partitioned/consented/promotion-gated) and 288 (edits≠training-truth) so the registry folds one care-memory position, not three.
- **§C** — federated-commons pressure logged; confirm the parent carries it as a §C pressure input and does NOT unpause.
- **Stale ids** — ensure registry/coverage-matrix fold uses canonical `314` (not pasted `301`); Knox's internal cross-ref "`EVSRC-2026-000292–000300`" is Knox's own stale numbering — map to the actual wave-6 collective-learning siblings (287/290/295/296/305), not literal registry ids.

### One-line hard read
**CQ is the right instinct — a hard-won correction should become reusable system knowledge instead of dying with the session — but it proves that saving a summarized answer and counting confirmations is nowhere near enough: OMNI must make every portable lesson carry provenance, an applicability envelope, an independence-weighted validation ladder, an authority ceiling, a graduation state, and a revocation path, and treat the whole commons as executable supply chain, before one local workaround silently becomes shared machine behavior — 0 net-new domain objects, a coherent knowledge-lesson-lifecycle family routed as investigate.**

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` (cross-source fold done centrally by parent — NOT edited by this run) · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` (parent folds) · per-source deep-read: §3 Review 003 (this file) · impact: `Knowledge-Reservoirs · Agent Runtime · security/supply-chain · Build-OS · Federation/§C (PAUSED) · Care (partitioned/consented memory) · RBAC/Identity` · promotion: `watch` (3 investigate-lane candidates forming an operational-lesson/knowledge-lifecycle family: `operational_lesson_unit`, `lesson_applicability_envelope`, `operational_lesson_validation_state`; 6 sharpenings; 10 guardrail candidates → `08`; 0 net-new domain objects; §C stays PAUSED)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, third batch; `EVRUN-2026-000011`).
- `2026-07-19` — Opus §3 Review 003 formal deep extraction (full-depth; transcript + Knox 4.9/5 both read in full). §0/§0.1 normalized from transcript + pasted Knox metadata block (two Mozilla.ai speakers; no screenshot → `inferred`; stale header id `301` noted + ignored, canonical = `314`). Status → `analyzed (awaiting 2nd-reader fidelity sign-off)`. Verdict: **0 net-new domain objects** · 3 investigate candidates (knowledge-lesson-lifecycle family) · 6 sharpenings · 6 principal + 18 "what-not-to-import" counterweights preserved · 10 guardrail candidates · §C PAUSED (federated-commons pressure only). §4 pointers filled. PROPOSE-ONLY (`GRD-036`); no shared run-artifact edits.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

# EVSRC-2026-000307 — Harness Engineering: The New Discipline of Agentic Dev

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000307_tessl-harness-engineering-software-factory-loops.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000307`  ·  filename: `EVSRC-2026-000307_tessl-harness-engineering-software-factory-loops.md`  *(firm-slug SUGGESTION: `tessl-harness-engineering-software-factory-loops`)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=D_cw-k0F1DM`  ·  source_title: `Harness Engineering: The New Discipline of Agentic Dev`
- channel_or_org: `AI Native Dev`  ·  speaker: `Dru Knox`  ·  published_at: `2026-07-08`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `technical interview + conference presentation / product + operating-model case study`  ·  source_reliability_context: `practitioner`  ·  topic_tags_light: `[harness_engineering, software_factory, agent_control_plane, inner_outer_meta_loops, agent_identity, progressive_automation, verification, continuous_learning, headless_agents, software_delivery]`

> **id note (stale-header resolved):** the pasted Knox block (§3 Review 001) carries a **stale drafting header id `EVSRC-2026-000295`** and stale filename `…_harness-engineering-software-factory-loops.md`. The canonical id is this file's number — **`EVSRC-2026-000307`**. Topic verified from the §1 transcript + Knox metadata (Dru Knox, Head of Product & Design, Tessl; AI Native Dev interview + AI Engineer SF talk). No mis-file. `EVSRC-2026-000295` is a separate, already-processed source (YC / Emergent, Mukund Jha) in this run. *(NB: the speaker "Dru Knox" is unrelated to OMNI's reviewer "Knox".)*

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Dru Knox` · role_in_source: `interviewee / conference presenter` · affiliation_at_publication: `Tessl — Head of Product and Design` · speaker_type: `operator` · authority_context: `Product/design leader describing Tessl's internal move to headless agent workflows, its harness-engineering model, and the related orchestration/review/verifier/registry/execution products` · identity_confidence: `inferred` (self-identified in transcript at 28:46; no screenshot supplied to normalizer)
  - name: `Unidentified AI Native Dev interviewer` · role_in_source: `interviewer` · affiliation_at_publication: `AI Native Dev / Tessl ecosystem` · speaker_type: `practitioner` · authority_context: `Elicits Tessl's factory model, internal implementation history, and product architecture before the embedded conference talk` · identity_confidence: `unknown`
- publisher / channel: `AI Native Dev`  ·  interviewer / moderator / host: `Unidentified AI Native Dev interviewer`
- event_context: `Interview recorded around AI Engineer San Francisco, followed by Dru Knox's AI Engineer SF presentation on harness engineering and software factories`
- perspective / conflict notes: `Extended Tessl product + operating-model presentation. Internal claims — banning human-written code and interactive sessions, verifier reliability, reduced review need, factory progression — are self-reported. Strongest as direct practitioner evidence on control-plane design, agent-loop architecture, and org-transition patterns; NOT independent proof that autonomous software factories are broadly production-ready (GRD-039).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introduction
0:00
I think most folks look at factories as a way to ship faster.
0:06
They'll say like, oh yeah, you'll get a little bit of slop, but my God, you'll you'll launch so much more features like the cost return, the ROI will be worth
0:14
think that's a very short term phenomenon, every team has backlogs of bug fixes or improvements
0:21
that they wish they could be making, that they just with a software factory. The idea of a backlog kind of goes away.
0:27
So how do you get to a software factory?
0:35
Oh, no. Oh! So we're here in San in SF for AI Engineer.
Interview: What Is Harness Engineering?
0:41
And of course, you're giving a session tomorrow. Tell us a little bit about the session that you're. Yeah.
0:47
So the talk is about harness engineering or maybe more broadly factory building.
0:52
So it's a bit more advanced of a talk. But we go through people who are maybe at a point where you're using agents
1:00
interactively, but you've kind of gotten to a place of multiple sessions at once. You are pretty frequently one shopping easier tasks,
1:09
maybe some more medium complexity tasks also land without much human intervention. And you're starting to ask, how do I like what's the next step?
1:16
How do I go further? And so the talk will walk you through from that starting point. How do you get to the broader software factory vision, where
1:26
pretty much all of your end product is being delivered by some sort of an agent system, and then you and your engineering team are focused more on
1:34
improving the quality of the agent and the system around it. So how do you make them require less human intervention?
1:41
How do you make them require less review from yourself? And then the sort of dream at the end of it is how do you
1:48
then, once you've got those pieces in place, start actually improving the quality of what you're building beyond what you could have done before,
1:53
because you have so much more bandwidth and output through the factory itself. And software factory, I guess.
1:59
I guess it's, you know, a newer kind of term that people are using. But people, people maybe wittingly are on that journey
2:07
as they as they build more automations and as they are using multiple agents and longer running tasks and those types of things,
2:14
they're leaning into that style of of development, right. I think that this is an area where I'm sure there will be people who disagree
2:22
with me on this, but at Tessl, we don't really view the software factory as this sort of monolithic end game that it's like once your AI native,
2:30
you can do this and it's more of a just steps along the way. It's like as you delegate more work to agents, sort of.
2:38
Everyone is on the software factory journey. It doesn't actually require a lot of complexity or being far along
2:45
the adoption curve to start thinking about what you're building as a factory. It's just about we split it into sort of three, three big categories.
2:53
So the first is you have to think about the autonomy of agents that you're working with. And so everybody's worried about this.
2:59
Now, how do I make it that agents require fewer human corrections, fewer human interventions as they work?
3:06
So you could think of like really high autonomy means you give a prompt to Claude Code or Codex, and it just runs for 30, 40 minutes.
3:15
And what you get at the end is right. It doesn't require correction. So that's I think, where a lot of people start,
3:20
it's like a good, good place to start getting productivity gains. Then you start moving into automation, which is
3:27
sounds similar to autonomy, but it is actually. How much are you allowing agents to build without human oversight.
3:35
So you can actually have very high autonomy, but low automation if you don't trust the agent's output.
3:40
So and that's the key thing is that trust. And so how do you actually gather that trust what is needed to be able to have that full autonomy.
3:47
So some of it is just getting used to the tools, learning where they'll be successful, where they won't be. But a lot of it will come into something that we go into in the talk.
Inner, Outer, and Meta Loops Explained
3:56
This new discipline of harness engineering or loop engineering. So we break this up into there is the inner loop,
4:04
which is basically what the agent is iterating on as it is building. You can think of this as the plugins, the skills, the test suite
4:11
that you have access to for the agent. These are things that are fast. The agent sort of checks its work as it goes.
4:17
The better this is, the more the agent will sort of land at the right solution. And of those of those tasks, how much of our individual
4:24
versus shareable things that the rest of the team can kind of. Yeah, yeah, yeah, I would say
4:30
there's two scales if you're talking about within the repo, almost all of it is shared. And in fact, at Tessl's we've been sort of working on our own software factory.
4:38
I know this is something said more broadly as well. We sort of outlawed any local configuration.
4:44
We think, like everything needs to be checked into the repo so that if you make an improvement, it improves for everyone and you get that sort of compound loop.
4:51
If you're talking about the broader maybe across your organization, across a few different repositories, there will be some amount
4:57
that is specific, like a workflow that is about building a specific feature within a specific code base or hooks, test suites, etc.
5:06
that you're not going to share. But there will be things that are very common your style guide, your design system, your security policies, all of that, and those
5:16
you'll want to share and hopefully have everybody at the company benefit. And almost like mandate. This is what we need because we're exactly the same place.
5:23
So that's the middle. What's what's the very center. That's the inner loop. Yeah. And then basically you can think of the inner loop runs with the agent until it puts up its PR.
5:31
And the outer loop is what you run at the PR boundary. So these are tend to be
5:36
slower, maybe slightly more expensive checks that you wouldn't want the agent sort of cranking on infinitely as it works.
5:43
But they do make sense if they're replacing human review time. So this is where you put things like agent QA, where you'll have agents
5:50
running through test scripts actually trying out your product. This is where you can put like deeper code review that might be a little bit more expensive.
5:57
A little bit slower is also where you can put things like Tessl verifiers, which I think we'll talk about a bit,
6:03
but these are the things that you actually hope that they all are green right from the start, and you actually kind of plan it that way.
6:09
But they are what give you that safety, that confidence that this code is good.
6:15
I don't have to say pull down the PR and do some manual verification on my own, or read every single line of code that's been written.
6:22
And so that's what we call the outer loop. That's that's what we'll build your confidence. So that inner loop is typically very much a developer.
6:28
Developers are very much integrated with that loop. And using that the next loop out, would you say that's more in the in the CI
6:35
kind of space on PR? So it's outside of what a developer would more locally run? Yes. Yeah.
6:40
Pretty much exclusively will run on some kind of CI hook. And as I mentioned, the sort of hope is that
6:46
the faster inner loop checks catch pretty much everything. And they've gotten the agent to a place where it is pretty much spot on.
6:54
Every time the outer loop is intentionally run in a separate process, it's slower, it's more expensive.
7:00
It's meant to just be your final gate check to make sure nothing, no mistakes have been made. Right? Okay, so that's the two loops.
7:06
That's the two loops. There's a third loop, the meta loop that goes around them all. You can think of this as the continuous learning.
7:14
So as you're building both the inner and the outer loop they won't be perfect. Things will slip through those checks you will review.
7:21
You'll have to do code review. You'll find issues. You'll leave comments, you might have CI checks that fail, etc.
7:29
the meta loop is sort of sitting in the background observing this process, and then automatically suggesting changes to improve the inner
7:36
or the outer loop so that basically you only make a mistake once. Never tell the agent more than once how to do a thing
7:42
before it gets codified somewhere in the inner or outer loop. And so this meta loop is something that a lot of people, the meta loop
7:50
to start as humans. And we can go into why that makes it hard and why that will leave you sort of stuck at local maxima.
7:56
But as you make it increasingly automated, that's when you'll really start to see the sort of exponential growth and how much the agents can do on their own.
8:05
And when we look at these loops, what I find fascinating here is, as we see adoption, we're really seeing, I guess, people starting in the center
8:13
and as they as they grow more mature and as they start building these processes out, they start getting further and further
8:19
and further out into into a more into a full and more complete factory. Basically, your bottlenecks will just keep moving as you work right.
8:26
And at first it's the agent just can't even put up a good PR and so you'll put all your time there. Then the PR will be good, but you still don't trust that you have to do review.
8:34
This is where I think a lot of people in the industry are right now of the code review is the new bottleneck I think comes out a lot.
8:40
So then the outer loop will help you work through that. And then people, that's where they really want to start pushing the limits of how big a task can I give how
8:48
we've heard the echoes of token Max in here. Like how do I get it to where it's like a nine hour task that just runs to completion?
8:55
You're only going to get to those kinds of extreme, like positive outcomes with some kind of a meta loop
9:00
that is slowly ratcheting up the quality of your agent. System right in in your talk tomorrow as well, you'll mention a little bit of Tessl,
9:08
and you'll talk about how we've built Tessl Agent to satisfy a number of these different ways.
9:14
Now, one of the things that I actually relates back to my last point there, when people kind of like have these loops and they start in the center
9:21
and they slowly build out and they grow. They grow their, you know, their usage of a software factory.
9:26
They don't just go, here's a software factory just walked out. Oh yeah.
9:31
Yeah. And so and so one of the things I love about the Tessl agent is, you know, you can go at the pace
9:37
or Tessl Agent is ready to go at the pace that you are ready to grow up. And so if you want to start right there in the middle,
9:43
right in there in the center, absolutely. You can use Tessl Agent for those types of things. And then as you build out as you and as the organization culturally
9:51
are going to change and adapt and adopt, they can use more and more of their Tessl Agent.
9:56
And allowing that to kind of like build out this factory for you. So, so tell us about the stages of how you how you bring
10:03
tessellation into into your session. So a lot of the, a lot of the design and build of the Tessl
How Tessl Built Its Own Software Factory
10:08
agent and Tessl's platform in general is rooted in our own experience trying to get Tessl itself to be more of a software factory by design.
10:18
So maybe I can use that as an example, because a lot of the things we've built will almost be sort of like walked through in the same order of pain that we felt.
10:25
And we talked to customers. We see that most people tend to roll out or hit these problems in the same rough order.
10:31
So the first thing that we did at Tessl was we focus on getting the control plane. Right. So I mentioned how you want to have these meta
10:40
loops running that are observing how the system is behaving. Finding common errors, making them better.
10:45
You can't do that. If all of the feedback and insight into issues is locked away in opaque places.
10:53
So if you get your control plane right and such that all of the feedback you're giving is in very legible places in everything else will be easier.
11:02
So it's a great place to start. Start the process. And this can be a little counterintuitive because it sounds like a very advanced way of building.
11:09
But at Tessl, the first thing we did was we we we set a few goals, a few ground rules we were going to try to abide by.
11:16
The first was no more human written code, and the second was no more interactive coding agent sessions.
11:23
That was the big one, where we got gasps from the crowd. When we first went to, nobody wanted us to take away their Claude Code or their Codex.
11:29
Two people, two people collapsed out of shift, right? Yeah, they fell back out.
11:34
But it turns out it's not as extreme as it sounds like. If you're to the point where you're already managing multiple agent sessions
11:41
and getting pretty frequent one shot for simple to medium tasks, you'll actually find that where we wanted to move was you file.
11:50
In our case, we use Linear as our task tracker. So you file a Linear ticket, an agent will pick that up and it will get through to building a PR.
11:57
And then you will code review against the PR. It sounds like an extreme leap, but I think a lot of people found that
12:02
that was actually how they were building already. They would ask the agents to do something. They would switch away to another tab, it would run completely unsupervised
12:10
until it was done, and then they would review the code locally and effectively provide PR review via the chat interface.
12:17
So it's not as big a leap as it sounds. And once you do this now everything is running through like a very persistent ledger, right?
12:24
You have the issue contains the initial prompt. You have the PR with all of your feedback, all of your if you've got
12:31
like a code review tool or something, all of that feedback, all in very durable places that are easy to pull down with open tools.
12:39
And so it just sets the groundwork for that continuous loop. So when we started moving to this, the first thing that we hit was
12:46
we built our own little agent orchestrator. Pro tip it's not as hard to build a orchestrators as it maybe sounds.
12:52
And so we believe that it's something you want to own yourself. You can customize it exactly to your company's needs.
12:58
But when you get started, we had Maria, a teammate on our research team.
13:03
She built the first version of the orchestrator and she used her own GitHub credentials for it. And so there was a couple week period where all of our peers
13:11
coming from, Maria and all of the follow up comments, she quickly shot to the top of our contribution list, which was, I'm sure fun for her, but also not great for her.
13:19
Notification inbox. I mean, her productivity. It must have looked amazing. Through the roof. Yeah, through. The roof. So there's a lot of things you build very quickly.
13:26
Just to say you need a Linear app, you need a GitHub app, then you need them to be able to talk to each other
13:33
so that you can delegate issues to that Linear app, and then it will fire off something that runs in GitHub. So and these are things everyone will need.
13:40
These these aren't like very specific to Tessl. This is anyone who does this is going to likely.
13:45
If you want to work in this way, if you want to assign tickets to agents and then have them put up a PR and respond to feedback,
13:52
you're going to need solutions to this and you're going to hit problems around identity. You're going to hit problems around webhooks and reacting to comments that are left on the PR.
14:01
And so Tessl, just to make that easier, we built it for ourselves. And then we sort of turned it outward for other folks. We have a the Tessl Linear app, the Tessl GitHub app, very basic, very opinionated.
14:12
All they do is wire those two things together. So on either end you can define what kinds of labels,
14:18
what kinds of information you're putting in your Linear ticket, and then what kinds of workflows are being run on GitHub.
14:23
We just handled that wiring for you and the identity part so that you don't have to worry about it. And that's not something like from a from a Tessl Agent point of view.
14:30
That's not something necessarily that is mandated. That's something that if you wanted to do that, if you're ready to step forward to do that,
14:36
that's something that you can just implement. And that's something I mentioned how I think as we were building within Tessl,
14:43
we came to the conclusion that this was something we wanted to really deeply own. Every time we tried to use an off the shelf orchestrator,
14:50
we found it's great for getting from 0 to 0.5, but actually getting to a place where you can use it in production all the time.
14:58
There's just so many little quirks to your team and your company that having a black box tool own your entire
15:05
SDLC is it quickly greats. And so we wanted to be able to configure, we wanted to be able to pull in our favorite tools, etc..
15:13
And so almost immediately we committed to the way that Tessl helps you build your factory has to be open and modular.
15:20
It has to allow we have defaults. We have things that if you don't want to care about it, you can just get started.
15:25
But it's easy to pull them out and replace them with something you either built yourself or your favorite tool.
15:31
We really, really strongly believe that this space is so broad. There's not going to be a single player that is best and breed
15:38
at every single part of the development lifecycle, and even for people who are best and breed, they still won't match every single peculiarity
15:45
of your development flow, and you want to retain that ability to customize. So we have like like you mentioned, Tessl app or sorry, Tessl Linear app.
15:54
Tessl GitHub app can both be pulled out. You could make your own, you could ship swap in someone else's.
16:00
And then once you have that the last piece you need to sort of set up this control plane is somewhere to run the agents.
16:05
So you can start just running them in GitHub actions. And actually that's where we we began as well. You'll quickly hit a bunch of little things, right.
16:12
Like GitHub actions. They're not the cheapest place to run cloud actions. They also they're not built for like multi-hour long running tasks.
16:21
You'll have to set up a little sidecar that renews your GitHub tokens. Again.
16:27
Permissions auth like a lot of times GitHub actions don't have, they aren't allowed to then trigger follow on CI/CD actions.
16:34
And so we built a again just a very small tool called Tessl Launch Skill.
16:40
It's a CLI command that lets you codify a workflow. You want it to be run as a skill, and then just kick it off into a cloud container that Tessl hosts.
16:48
Again, you don't have to use it, but it has all the right defaults. It will post with the right identity. It has the GitHub credentials.
16:55
And so once you have all those pieces together, you now have a very simple way to say, okay, I can quickly get myself up
17:02
and running with I file a ticket that triggers a GitHub workflow. The workflow will pick a skill, launch it in
17:10
a cloud environment that is better built for long running tasks. That skill can then post back to the PR, leaving comments
17:17
or putting up the PR to begin with. And that gets you started with that control plane loop.
17:22
Yeah, very focused right now on Linear and GitHub because that's what we use within Tessl. But we have more coming soon for all the different services.
17:29
One thing I love is as we as as an organization starts building out their processes, it's very much sometimes you get analysis paralysis,
17:37
right where it's like, okay, we want this thing now, let's have this huge, this huge thought process about what's the right tool, what's the best way of doing this.
17:43
And actually the best way of doing it is almost like to start with something. Yeah. Understand what works, what doesn't work, what
17:48
you need to change, what you need to adjust. And actually then you realize exactly. It's like you need to live in a house before you work out how to where
17:56
to arrange your furniture. And so it's a really nice way of quickly getting up to speed and then saying, actually, this is fit for purpose, this is good enough,
18:03
or do we need something that actually works at the way? Do we need to handcraft something, or do we need to buy something else to replace and plug it in?
18:10
And it's that extensibility as well as that, that defaults good defaults that allow you to get up to speed quickly
18:16
and then decide what you need. This is something we've seen across pretty much every successful customer who
18:22
started moving towards software factories and resonates with ourselves as well, trying to treat it as a single monolithic like lift and shift of change.
18:32
Everything about how you work is just sort of doomed to fail. First, it's the industry is changing rapidly still, and so trying to commit
18:40
to a three month build out in three months is going to look very different. It's hard. Yeah.
18:45
But second, there's I mean, it's the same thing of like agreeing to your style guide, right. Like everybody knows how much pain that's going to be.
18:51
Everybody has different opinions. It's so, so much easier and so much more likely to stick if you can just almost like a reverse jawbreaker, right?
19:00
Like layer on piece by piece, like just find a workflow that everybody can kind of agree, put a box around it and then set it up to run automated.
19:08
Or find a couple playbooks for how you build features. Add them as skills that can. Then when you start a new feature, you apply a label to the issue.
19:16
To use that skill, just keep it simple. Just work piece by piece. As you layer on more and more.
19:24
After a few months, you might find like wow, 60% of what we do is automated and doesn't require human review.
19:29
It was never a big step. It was never a big argument. We had to get the whole team aligned. You just go with what works.
19:35
It's much easier then if one piece doesn't work to just roll it back, rip it out and try something else.
19:40
And so again, the Tessl Agent really tries to internalize this. It's designed to help you move step by step one workflow at a time.
19:48
It is not trying to migrate you from where you are today to a software factory in, you know.
19:53
It gets you to that place that you're most comfortable with. And if that is a software factory, then you can build it out. Exactly.
19:59
There's one thing before we jump into your session, which is going to be weirdly tomorrow, but
20:04
yeah. Yeah, exactly. I want to talk about one thing, which I think a lot of people kind of like jump to is almost like the first thing that they want to add
20:11
in, particularly when they want longer running agentic flows, which is going to be reviewing that code. And I think from our point of view, from a trust point of view,
20:18
from a validation and verification point of view, you need to be able to have a good review of that. Now, of course, Tessl has their own that you can use.
20:26
And again, it's like you can swap it out. You can if you prefer a different code review, you can pull that in. But talk us through Tessl's code review. Yeah. Yeah.
Tessl's Code Review and Verifiers
20:34
So again, just sort of walking through the timeline of as we were building our own factory,
20:39
as soon as we got the control plane in place, the next biggest problem was we're getting all these PRs, how do we review them more effectively?
20:46
And I think this is common across the industry. Even before you start moving towards issue tracker to PR,
20:52
getting flooded with a review becomes the pain point. So we found that there were three big components that we needed
20:58
to tackle that we just kept coming up in our own code review. So the first is what I'd call just your general agentic review.
21:07
It's just you want someone other than a human who sits down and has a set of rules, and they look through every part of the diff.
21:14
They look through the rest of the code base and they just give a pass. They leave a bunch of get rid of all the low hanging fruit.
21:20
And so we built we call Tessl Change Review, which is a command that you can run.
21:26
It comes pre-built with a bunch of lenses for how it can review the code, so it can look for security issues.
21:32
It can look for areas where readability is poor, can look for areas where you're not reusing existing pieces of your platform like a classic one is.
21:41
It uses the standard logger instead of your custom company logger, and we have a few more, but they come out of the box covering what
21:48
we think are the common things you're going to want to look for. But importantly, I mentioned, we think everything needs to be open.
21:54
Everything needs to be customizable because this really is your new discipline is building this factory. So the Tessl Change Review is powered by skills.
22:03
So you can very easily as you start to discover more things that you care about,
22:08
you can add in a skill on your particular style or your particular approach to accessibility or visual design,
22:18
and make sure that all of those are being reviewed in this review. So that's kind of like your base layer, which is mostly.
22:24
Just to add. I saw some internal chat from Amy, who was she was so happy.
22:30
Code review starting. With the amount of with the amount of really good insights, actually useful insights that that the Tessl.
22:39
I think it was the default plugin. Right. That is the. Default five lenses that we apply.
22:44
She was she was really so exciting, so excited. She was like very, very, very talkative about how amazing these,
22:51
these different, these different issues were. So definitely one to try for people who. It's sort of surprising, I think as models are getting stronger,
23:00
one, they're getting easier to use. So you can now there's a world where you don't have to have a full team
23:05
prompt engineering the heck out of your code review guidelines just to get good results, right. What's more important is actually just good sound engineering
23:13
principles stated plainly to the agent. And so it's a lot easier to own your own code review now than I think
23:20
people maybe who got started a year ago would be familiar with. But then I think given that given how deeply agents can look,
23:28
it makes it very clear how we're going to move towards a world where actually agent and agent written code is higher quality, not lower.
23:36
I think right now the narrative some people is, oh, if you move to a software factory, you're accepting lower quality in exchange for higher throughput.
23:44
I think that's a very short term moment as we make this migration, because what we have found is we moved to to your point with these new five lenses
23:53
for code review, is that at first, when we were applying that on human authored PRs, that all that engineers started complaining,
24:00
they said it's too much feedback, like, I don't have time to fix all of this. This is pedantic. This doesn't matter.
24:06
Like, sure, in a year when we scale, like, I guess I could do these things right?
24:12
The very human like, I don't have capacity for this, but there are real issues. Like they could actually improve the quality of the code you're shipping.
24:19
Now when it's an agent on the other end, it's just like, great point when you go fix all these things. Absolutely. And it's like, yeah, yeah.
24:26
It's just like the capacity to fix like there's no such thing as a backlog anymore. And so if an agent can identify a problem, it can be fixed.
24:33
And that's that's what gives me hope that in the sort of medium to long term, we're actually getting to a place where the code worshiping is higher quality,
24:40
not lower, and it'll be faster and it will be more fun to build. Yeah, yeah. So that's the change review portion.
24:46
I'd go into the others unless you have. Yeah. No, I was going to say like one of the big things I guess is if you give if you give an agent
24:52
like a huge list of things that it needs to kind of like check very often, it will maybe be like 80% of them and things like that.
24:57
I'm really curious to dig in a little bit deeper into the verifiers with like some of these problems. Perfect here.
25:02
Perfect, yeah. So once you have your general review, that's great at catching big classes of problems, unanticipated issues.
25:10
But the next biggest source of problem you'll find when you're doing code review is there's a long laundry list of things
25:17
you've told the agent to do that just sometimes they get forgotten, right? It's like 95% of the time you're good.
25:24
5% of the time it'll mess it up. That's probably better than humans, but you have to think through like,
25:29
how do I catch those mistakes? Because I want to. I want it to be 100%. I want to sort of lock it in, and I don't want my general code review, like you said, to become this
25:37
laundry list of make sure every front end element has an ARIA attribute.
25:43
Make sure every design uses this particular hex value of green, etc., etc..
25:48
So what we introduced was a thing called verifiers. The easy way to think of this is very small,
25:55
fast, cheap LLM powered linting rules. So the idea is usually as a start.
26:02
We'll look at the skills you have in the repo, but you don't have to power them with skills. You can just be any issue you care about.
26:08
You'll define something that you like, an invariant. You want to be true. Like every every front end component must have ARIA attributes
26:15
or these are our design colors, or every instance of logging must be our internal custom logger.
26:23
You define those. And then what Tessl will help you do is create a bunch of targeted
26:29
LLM checks that look for you define like a set of glob patterns for files that it could affect.
26:35
It can be the whole code base if you'd like, but you can also target it to reduce cost. And then it will give a bunch of focused.
26:41
Does this file contain a front end element that does not have an RA attribute, or does this file contain any call to a logger that is not this logger?
26:52
Very easy. You can basically get 100% reliability these days, like agents effectively never miss those or llms go ahead.
27:00
No, no, I was going to say but and that stage is very deterministic, right. Because it's like, you know, it's going to run that and it's going to make
27:06
and it's going to do the check at least. Yeah. And when that check is very, very small, like you say, it has a very high success rate.
27:13
Yeah, yeah, yeah. You keep it very scoped, very black and white. And I think a lot of people again, sort of if you've gotten started,
27:19
almost a curse of knowledge like a year ago, people knew that even routine straightforward commands to an LLM might be incorrect.
27:28
Nowadays, it just really doesn't happen. Like if you ask an agent, does this JSX element have an ARIA attribute on it?
27:35
It's going to get it right 100% of the time. Yeah. And so what you do is you set all these up, you can run them in parallel.
27:41
They're fast, they're cheap. You run it like actually. In fact, we usually add it to our linting and testing rules
27:47
so that whenever the agent puts up a PR, you just have a green check that says everything you have said in your skills, or every little mistake
27:55
you've ever seen an agent make was not made here. And that really closes the loop on.
28:00
If you think of the agent code review will catch things you weren't anticipating. The verifiers catch any problem you've ever seen
28:08
so that it never happens again. It's back to the only correct at once. It's almost a little bit like the activation problem of A of a skill, right?
28:15
It's down to the agents to whether whether it activates the right skill or not. Whereas with these and in a code review,
28:21
is it going to activate these various checks that are needed. Will look for. Everything, whereas we know it's going to be done every single time.
28:27
Exactly. Amazing. This was super insightful. And I really appreciate you talking about how Tessl itself has been on the journey
28:33
and how we're turning those learnings into really kind of like, you know, product features through through the Tessl Agent.
28:40
So super, super valuable. Why don't we listen to you in more depth with your with your session?
28:46
AI Engineer. Now over to you, Dru. So. Quick introduction. My name is Dru Knox.
Dru Knox's AI Engineer SF Talk Begins
28:52
I'm the head of product and design at Tessl. Tessl is an agent enablement platform.
28:59
We help you go from scaling skills to building your own software factory.
29:04
So today I'm going to talk about a few things. The core is going to focus on harness engineering, which we see
29:11
as sort of the new discipline of agentic development, and how you can use it to ladder up to a software factory.
29:20
So before we get started, a few prerequisites. This is a bit of an advanced talk in the sense that if you aren't
29:28
already using coding agents, what I'm about to walk through is probably not where you want to get started. So I'm sort of assuming that if you're working with coding agents,
29:37
you're used to having a couple sessions at a time. You've gotten to a place where coding agents will for like easy
29:47
tasks and maybe medium complexity tasks, frequently do the right thing. You're sort of at the sweet spot for starting to think about
29:55
harness engineering, starting to think about a software factory. What I'm going to say here is not exclusive to that,
30:01
but that's where you'll get your best results. So I'm going to walk through a few things.
30:06
First, I want to define Software Factory and talk a little bit about why you might want to build towards one second.
30:15
We're going to then focus a lot on harness engineering, which is kind of the core practice or skill that you'll use to reach a software factory.
30:23
We'll talk about what are going to be the components you work on while you're doing harness engineering. And finally, I'll walk through how the Tessl product briefly
30:32
can help you along that journey. But most of the topics I'm going to talk through here today work with any stack.
30:38
They're mostly techniques. Tessl makes them easy, but they're not exclusive to us.
30:44
Okay. Part one software factories. What are they?
What Is a Software Factory?
30:49
There's no strict definition. I'm sure you're all probably as frustrated as I am with how quickly terminology
30:56
changes and migrates in the in the industry today, but roughly speaking, software factory is any system where
31:05
all of the end product of what you're building and shipping to users is created by agents, and your software
31:12
engineering teams effectively focus on building the factory, so they work on making the factory more autonomous,
31:19
more automated, and raising the quality of what it produces. I'll go into each of those terms in just a second.
31:25
That's kind of the core idea of a factory, though. Is everyone on your team effectively becomes internal tool builders,
31:31
and then you're building a system that produces your product.
31:37
So I mentioned three key metrics. These are sort of like the pillars you need to think about when building
31:43
towards a software factory. And they sort of go in this order. So autonomy is effectively how much human intervention
31:51
do you need to get to the right answer. So how many times do you need to correct the code or provide a nudge on how the agent should be building
32:01
automation? Oh, sorry, I've gotten them flipped here. Autonomy is the first one.
32:06
It's how much do you have to do you humans have to correct automation is how much can you let them run right?
32:13
How much do you need to review or build trust in the solution before you accept it?
32:19
They sound quite similar, but there is a difference. You can have high autonomy in the sense that agents frequently
32:25
are one shotting the problems you're giving them, but low automation because you don't trust it yet, and so you're reviewing all of the code directly.
32:33
You are manually verifying everything. So they are distinct things that obviously have a connection.
32:38
Right. You have to build up autonomy first before you can move to automation.
32:44
The final quality, probably the most self-explanatory. How good is the product that you're actually producing for your users?
32:53
These metrics are your usual user analytics, your test quality, your test coverage, etc.
33:01
as you work towards a factory, you're going to go improving autonomy, then improving automation, all while keeping quality constant.
33:09
And then the sort of payoff at the end. Why would you want a software factory is that ultimately
33:15
we think you can raise quality once you have a factory. So talk about this a bit. I think most folks look at factories as a way to ship faster.
33:25
They'll say like, oh yeah, you'll get a little bit of slop, but my God, you'll you'll launch so much more features
33:31
like the cost return, the ROI will be worth it. I think that's a very short term phenomenon, right.
33:37
As agents are sort of coming online and getting better in reality, yes, you will move to higher velocity with a factory,
33:46
but every team has backlogs of bug fixes or improvements that they wish
33:51
they could be making, that they just don't have time to do, or explorations that they wish they were they were doing with a software factory.
34:00
The idea of a backlog kind of goes away. And so you actually just have much more capacity to work on
34:06
test quality improvements, architectural refractors. So at Tessl, we believe that yes, at first as you transition,
34:14
you will want to keep quality constant or maybe like a very small dip, but that the ultimate payoff is
34:19
you should see better quality in the code that you're producing. Also, it's great for your overall team collaboration styles.
34:26
So once you've moved to a software factory, it's much easier for people who aren't in technical roles to contribute ideas.
34:33
So it's easier to explore more and to have more perspectives. Coming in and contributing while you're engineering team is much more focused on
34:42
building the underlying system that everyone is using to push features out to your users. So I think ultimately it leads to a more dynamic and inclusive
34:50
development experience. So how do you get to a software factory?
Harness Engineering as the Core Discipline
34:56
Harness engineering. As a sign of how fast terms evolve, it's also started to be called loop engineering over the last couple of weeks.
35:04
This is really the core discipline that you're going to take to get towards a software factory.
35:11
At its core, harness engineering is I mentioned the software factory is building your product.
35:17
You are building the loops that automate and improve the quality of your factory.
35:24
So what do I mean by loops? What are the loops that you might be working on?
35:29
There are three core concepts, each at maps to a certain phase of development.
35:37
So you have your inner loop, which is as the coding agent is working on a PR before it has put it up.
35:45
Right. So these are very fast, iterative loops. You want them to be cheap. You're expecting the agent to run them all the time.
35:51
Improvements here will drive better autonomy. They help catch things and correct the agent without your
35:57
coming in and human intervention. Once the PR is up, you move to the outer loop.
36:04
So this is where you're going to put more expensive, exhaustive checks that don't make sense
36:10
to run over and over again as the agent is iterating on features. But they do encode things that otherwise
36:16
a human would have to verify to build confidence in the system. And so this is because they're more expensive,
36:22
but they are taking away human review time. They can be worth it. So this is where you might put something like a show or where
36:30
you might say like run mutation testing to check the quality of our test suite.
36:35
This is for expensive things that you want to run once when the PR goes up, and then have the agent iterate on on the results.
36:43
Finally, you have the meta loop. This is where you'll drive quality, so the meta loop
36:49
sits outside of the development process. It observes your coding agent, logs it,
36:55
looks at PRs, your issue tracker, user feedback, and it's basically
37:01
finding mistakes that are making their way through the pipeline to your users,
37:06
or that you had to correct as a human to stop that from happening. And it feeds back into the inner and the outer loop to make sure that
37:14
that mistake is not made again. So the outer loop is what really kind of once you have
37:20
the infrastructure for each of these loops, the outer loop or sorry, the meta loop is where you're going to be actually driving
37:26
from a certain percentage of like how AI native am I? You're going to be driving it up by investing in your meta loop.
37:37
So before we get into like what are the components? What do you do to actually accomplish this? I think full disclosure up front, harness engineering at least raw unassisted
Why Harness Engineering Is Hard
37:47
harness engineering is hard for a few specific reasons that basically come down to human psychology.
37:54
So the first, hopefully this one will go away over time. But it's a new discipline and it's changing very fast.
38:02
And so a lot of teams that get into harness engineering, you basically become an AI researcher just to try and keep up your reading papers.
38:11
You're watching blogs, you're coming up with best practices that go out of date the next week,
38:16
and then two weeks after that, and actually at some point they become anti-pattern and you don't want to do them anymore.
38:22
And so there's just like a lot of time and space you'll devote to keeping up with how to do harness engineering.
38:29
And so if you want to get into this discipline, you need to have sort of upfront approach to how you're going to solve this problem.
38:36
How are you going to make time and space to keep up with the knowledge that's changing every week?
38:42
The second, and this one is more durable in my opinion. Harness engineering is fundamentally unplanned work.
38:48
So you will start shipping a feature you have no way to anticipate.
38:53
Will agents fail? How will they fail? How long is it going to take me to fix it? And all of that work
38:59
that you're going to do to try and make the agent better, competes with shipping, so it will slow you down from getting the features out.
39:05
And we all know that is just a perpetually hard trade off to make. You either don't do it and you get stuck in the local
39:11
maxima of the agent never improves, or you do it and you miss your deadline for the future and you get in trouble.
39:17
And so no one ever does it. The final piece is that once you've solved these initial problems
39:24
to make time and space for harness engineering, you'll find that a lot of the information you want access to is not available.
39:32
It's hidden away and local coding agent logs, or it is on someone's machine somewhere. It's in someone's head.
39:38
A lot of the signals that you want to see. To make agents better, you need to do some work
39:44
to move your workflows onto surfaces where everything is saved and publicly available for later optimization loops.
39:53
Okay, with all that aside, then what are the pieces that you should be working on as you're doing harness engineering?
The Three Layers of Harness Engineering
40:00
I've broken it into three layers. These aren't by any means standard terms though. You want to help me make them, so I would be forever grateful.
40:09
The first layer and these are sort of like in the order you need to do them as far as Tessl is concerned, is you have to get your control plane.
40:16
Right. And so I mentioned how most of the data that you want to have access to, to make agents better and move towards a software factory is not legible.
40:26
If you move your workflows into, for example, a Tessl. We have all issues.
40:33
All work starts as an issue on the issue tracker. It gets sent to a headless agent running in a sandbox.
40:40
The agent puts up a PR and then engineers engage with comments on the PR. So it still has manual correction, it still has manual interface,
40:48
but now all of your touch points with the agent are legible. So we can you can then point tools at them to pull that information down
40:56
and make things better. Typically the three things that everybody comes to when they're trying to set up a control plane.
41:03
So you have some way of tracking issues and kicking off agent work from that. They're going to have some way to review GitHub PR review is probably the easiest,
41:12
and then you're going to have some way to standardize and distribute workflows, playbooks, things that make the agents better.
41:20
Typically that ends up being something like a skills registry or a shared GitHub repo, where you push skills that improve agent quality.
41:29
Next is a massive grab bag that I call Agent It, which is if anyone's ever tried to move
41:36
like a project that had a lot of local config into something that someone else can set up, and you realize with horror
41:42
all of the dependencies that you thought were cleanly isolated and are not, you basically are going to have to go through the same thing with agents.
41:48
There's going to be all these things that you thought were easily accessible by an agent, right? Like CLI, API access, giving away for the agent
41:57
to click through your product to build it, I promise. It's worse than you think.
42:02
Like there's no one who has come in thinking like, yeah, it's not going to be that hard for us has left saying that at the end.
42:09
And so there's just like a lot of pieces you'll work through. And this is probably the most unplanned
42:16
and most like spend a week, spend two weeks and just get it done. But it will come through things like writing, writing down in your company
42:24
brain how you get work done, what are your workflows, etc.
42:29
you're going to have to give access to all your internal services, which will require governance and API access.
42:35
Questions you're going to want to give away to access production logs. And that's going to have this whole question of like,
42:42
what's your compliance stance? Things like that. And then you'll need an environment where the agent can execute the code
42:48
that it is running. There's infinite more, but there are generally pretty company specific. And you'll just work through as you try to get agents to put code up
42:56
without you intervening, you'll quickly learn what are the problems. Finally, this is where you'll end up spending most of your time.
43:04
These are the improvement loops. So these are the things I mentioned before the inner outer meta loop.
43:09
These are components that tend to go into your meta loop. So repo maintenance you're going to want things that sweep your code base
43:17
every day every night every week something like that. To look for problems you're going to want playbooks for common
43:23
development practices. So how to add a feature to your CLI. You're going to want to find a way to identify
43:30
repeated tasks and automate them. And ideally as quickly and easily as possible because otherwise people won't do it.
43:37
And then you're going to want something that looks at the output quality just on a consistent basis, and brings back improvements and learnings to the rest of your code base.
43:45
So say things like, oh, I saw the agent made this mistake. Let's update a skill on at like the playbook you have for adding features to the CLI.
43:53
Let's update that so it doesn't make this mistake again in the future.
43:59
So those three control planes, Tessl sort of exist to try and help you solve them.
44:04
As I mentioned, everything I've said before, here are just techniques. You could go do them all yourself if you wanted.
44:10
There's plenty of tools that do that. So I'm going to talk a little bit through how Tessl will help you. If you want to use us
44:17
to start, why would you want to use us? So we focus really hard on making it
44:23
relatively iterative and sustainable to get to the cutting edge. So we try to make it like a bunch of small lifts rather than one massive snake
44:33
eating the moose all at once. We're batteries included. So we solved the knowledge gap by saying, we will keep up
44:40
and you will have an agent experience that basically knows the best practices of harness engineering is kept up to date on your behalf.
44:48
We have a real commitment to being modular and open, so we don't think every component of a factory is going to be best in class with a single company.
44:55
We want to make sure you can pick and choose what is the most important piece for your stack. And then, like I said, we focus on making it easy.
45:03
So we have automated loops for you that you can install and just react to the changes that are proposed.
45:08
And we really try to make sure it's just incremental steps so that you six months later like, oh wow, we're like 40% there to a software factory.
45:16
We never had to stop and delay shipping or anything like that. So the first
45:22
place that Tessl helps is in setting up your control plane. We have a skills registry where you can publish and version the workflows
45:30
and the automations that you're working on with built in governance, things like security reviews, quality reviews, controls for who can publish and update what.
45:39
We also have easy connectors for issue trackers to GitHub. Right now we're focused on Linear to GitHub.
45:46
You can basically file Linear ticket and get it to run and GitHub workflow with more connectors coming soon.
45:53
And then we also have a suite of tools for code review, just to make it easy to set up your standards for agentic code review, as well as more targeted checks.
46:02
See here an example of something that like a workflow that has been posted to the registry being scanned for security quality,
46:10
and how much it actually improves the agent's output.
46:15
After this, I'm going to play a video while we talk. See if this goes so we have an agent experience called Tessl Agent,
46:23
which will help you with creating and then maintaining your improvement loops over time.
46:29
So the first thing that we do is we will help you with that change management of how do I actually make the time to find repeated tasks
46:39
and set them up in automation so the agent will mine through PR issues,
46:45
things like that, and find like every week you do a hunt for flaky tests. Why don't we just set that up as a skill for the workflow,
46:53
and then we'll put it in automation on a GitHub action. So we help you actually make time to do the automations, just like
46:58
one workflow at a time. The second is that we come with a lot of out of the box maintenance tasks.
47:04
So I mentioned you want to have weekly scans for things like architecture quality, code duplication.
47:12
How good are your test suites? Do you have any security vulnerabilities? So if you use test you can just sort of like one click,
47:18
install a bunch of those things and just get weekly improvements to your code base without any other effort.
47:24
And then finally, we offer a way to turn any skill into an automated workflow. So it's through a command called Tessl Launch, where you effectively
47:33
take a skill that codifies a workflow. You can then pick a particular coding agent that you want to handle it.
47:40
Tessl Agent can be one of them, but for most coding tasks, you probably want to use something like Codex, Claude Code, Gemini.
47:45
We have access to all of them, and we will run them in a sandbox that has the appropriate permissions.
47:51
Can be long running. We'll have GitHub tokens that it can put up a PR and respond to comments as you leave them.
47:58
So it just makes it really easy to automate workflows like that. And so with these things together, we just make it really easy to get started
48:05
and just one at a time, find an improvement, take a workflow, turn it into a skill, ship it to everyone, and then get your improvement
48:14
loops going. The what you're going to want to focus on as you're doing this work is driving down manual takeovers, driving down human PR comments.
48:24
So these are like metrics that you can track to see, like how far am I towards Software factory. And then over time you want to see more PRs initiated without human input.
48:33
That's a sign that you're automating more. And then of course you want to first hold quality constant
48:38
and then aim to drive it up after that. That's it. If you want to learn more, Tessl Booth is just that way.
48:46
Please give a scan. Come over, see us. We'd love to chat. Thank you all for your time.
48:59
Oh, no. Oh!

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

# EVSRC-2026-000295 — Harness Engineering: The New Discipline of Agentic Dev

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `raw_dropped`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

## §0 — Source identity / metadata

- evsrc_id: `EVSRC-2026-000295`
- filename: `EVSRC-2026-000295_harness-engineering-software-factory-loops.md`
- source_platform: `YouTube`
- source_url: `https://www.youtube.com/watch?v=D_cw-k0F1DM`
- source_title: `Harness Engineering: The New Discipline of Agentic Dev`
- channel_or_org: `AI Native Dev`
- speaker: `Dru Knox`
- published_at: `2026-07-08`
- captured_at: `2026-07-19`
- captured_by: `Nick`
- capture_method: `transcript paste + screenshot`
- content_type: `technical interview + conference presentation / product and operating-model case study`
- source_reliability_context: `practitioner`
- topic_tags_light: `[harness_engineering, software_factory, agent_control_plane, inner_outer_meta_loops, agent_identity, progressive_automation, verification, continuous_learning, headless_agents, software_delivery]`

## §0.1 — People / authorship / authority context

- primary speaker(s):
  - name: `Dru Knox`
    · role_in_source: `interviewee / conference presenter`
    · affiliation_at_publication: `Tessl — Head of Product and Design`
    · speaker_type: `operator`
    · authority_context: `Product and design leader describing Tessl’s internal move toward headless agent workflows, its harness-engineering model, and the company’s related orchestration, review, verifier, registry, and execution products`
    · identity_confidence: `high_from_transcript`

  - name: `Unidentified AI Native Dev interviewer`
    · role_in_source: `interviewer`
    · affiliation_at_publication: `AI Native Dev / Tessl ecosystem`
    · speaker_type: `practitioner`
    · authority_context: `Interviewer eliciting Tessl’s factory model, internal implementation history, and product architecture before the embedded conference talk`
    · identity_confidence: `unknown`

- publisher / channel: `AI Native Dev`
- interviewer / moderator / host: `Unidentified AI Native Dev interviewer`
- event_context: `Interview recorded around AI Engineer San Francisco followed by Dru Knox’s AI Engineer SF presentation on harness engineering and software factories`
- perspective / conflict notes: `The source is an extended Tessl product and operating-model presentation. Internal claims—such as banning human-written code and interactive agent sessions, verifier reliability, reduced review needs, and progression toward a software factory—are self-reported. The source is strongest as direct practitioner evidence about control-plane design, agent-loop architecture, and organizational transition patterns, not as independently verified proof that autonomous software factories are broadly production-ready.`

## §2 — Screenshot / visible source details

- visible_duration: `48:59`
- visible_views_at_capture: `1,716`
- visible_capture_date: `2026-07-19`
- description_context: `Dru Knox describes harness engineering as the discipline for progressing from interactive coding agents toward software factories. The presentation separates autonomy, automation, and quality; introduces inner, outer, and meta loops; explains Tessl’s issue-to-agent-to-PR control plane; and demonstrates code review, verifiers, registries, sandboxed execution, and continuous factory improvement.`
- product_context: `Tessl Agent, Tessl Change Review, Tessl Verifiers, Tessl Launch, Tessl’s skills registry, Linear integration, GitHub integration, and Tessl-hosted execution environments are promoted throughout.`

## §3 — Interpretations & review log  ·  append-only

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`

- reviewer: `Knox / ChatGPT`
- type: `AI assistant`
- at: `2026-07-19`
- purpose: `strategic source-local interpretation`

**Signal:** **4.9/5 — major Agent Runtime, Build-OS, Platform, verification, and continuous-learning source**

**Cross-source relationship:** This source overlaps with `EVSRC-2026-000292–000294` on harnesses, shared skills, registries, continuous learning, review surfaces, and software-factory progression. Its distinct contribution is the explicit separation of **autonomy, automation, and quality**, the **inner/outer/meta loop topology**, the requirement to establish a **legible agent-work control plane before attempting continuous improvement**, and the visibility of **agent identity and review-substitution evidence**.

**Net-new posture:** no new OMNI domain; **three credible architecture candidates, four major sharpenings, and several hard counterweights**

### Core contribution

> **An agent’s ability to finish work, the organization’s permission for it to act without review, and the quality of the resulting outcome are three separate variables.**

The source calls these:

- **autonomy** — how little correction the agent needs to reach an answer;
- **automation** — how little human review or approval is required before accepting or executing the answer;
- **quality** — how good the resulting product actually is.

This is one of the cleanest and most important distinctions in the wave.

A system can be:

- highly autonomous but not trusted enough for automation;
- heavily automated despite weak autonomy, creating repeated failure;
- autonomous and automated while producing poor outcomes;
- low-autonomy but high-quality because humans carry the reasoning burden.

For OMNI, this directly strengthens the separation between:

- machine capability;
- delegated authority;
- and realized consequence.

---

### 1. Capability, delegation, and outcome need independent runtime axes

OMNI should not describe an agent mission with one maturity or autonomy score.

## Candidate: `autonomy_automation_quality_profile`

Possible dimensions:

### Autonomy / competence

- number and type of human corrections;
- ability to recover from tool or environmental failures;
- ability to recognize uncertainty;
- completion rate within declared mission bounds;
- dependence on undocumented human knowledge.

### Automation / delegated authority

- whether the system may begin work without approval;
- whether it may call tools;
- whether it may create candidates;
- whether it may commit authoritative state;
- whether it may communicate externally;
- whether it may proceed without human review;
- required escalation and takeover conditions.

### Quality / realized consequence

- correctness;
- safety;
- continuity;
- user or patient effect;
- domain acceptance;
- recovery burden;
- false closure;
- observed outcome.

These axes must not automatically rise together.

A model improvement may raise autonomy without changing delegated authority.  
Stronger verification may justify more automation without changing model capability.  
Higher throughput may reduce quality if the organization cannot absorb or verify the work.

**Keeper line:**

> **Competence earns consideration; evidence and authority determine delegation; outcomes determine whether the system was actually good.**

This should merge with the previously identified `delegation_readiness_state` rather than replace it:

- `delegation_readiness_state` determines whether a mission may enter an automation band;
- `autonomy_automation_quality_profile` measures the system operating within that band.

---

### 2. The inner, outer, and meta loops form a useful proof topology

The source divides harness engineering into three loops:

#### Inner loop

Fast, mission-local checks used while the agent is working:

- tests;
- linting;
- skills;
- tool feedback;
- local validation;
- rapid correction.

Its purpose is to improve autonomy by helping the agent catch errors before handing work off.

#### Outer loop

Slower, broader, and ideally more independent checks at a commitment boundary:

- exhaustive review;
- security checks;
- mutation testing;
- end-to-end evaluation;
- product interaction;
- evidence required before promotion.

Its purpose is to justify automation by replacing some portion of human verification with repeatable proof.

#### Meta loop

Post-run observation and learning:

- human corrections;
- CI failures;
- escaped defects;
- user feedback;
- production incidents;
- recurring tool or context failures.

Its purpose is to propose improvements to the inner or outer loops.

This is valuable, but OMNI needs one hard correction:

> **The meta loop must create change candidates; it must not silently rewrite the loops that govern future behavior.**

## Candidate: `loop_improvement_record`

A proposed loop change should preserve:

- triggering failure or opportunity;
- source evidence;
- recurrence and affected scope;
- proposed target: inner loop, outer loop, or both;
- expected effect;
- regression risks;
- evaluation plan;
- owner;
- rollout scope;
- rollback;
- observed post-change effect.

The loop topology is useful because it prevents several collapses:

- self-checking is not independent verification;
- boundary verification is not real-world outcome;
- post-run learning is not automatically accepted policy.

**Keeper line:**

> **The inner loop improves the attempt, the outer loop justifies the commitment, and the meta loop proposes how the system should learn.**

---

### 3. Continuous learning requires a legible agent-work control plane

Tessl’s most consequential internal move was not banning interactive coding by itself. It was moving agent work onto durable surfaces:

`issue → headless agent run → pull request → review comments → revision → merge or rejection`

That made the full interaction available for later analysis.

Interactive local sessions often hide:

- initial intent;
- context supplied;
- agent actions;
- human corrections;
- failed attempts;
- final acceptance rationale;
- identity;
- version;
- outcome.

Without a durable record, the meta loop cannot distinguish:

- repeated agent weakness;
- poor instructions;
- bad tools;
- hidden local knowledge;
- weak evaluation;
- or human preference.

## Candidate: `agent_work_control_plane`

Minimum responsibilities:

- durable mission identity;
- authenticated human and non-human actors;
- initial intent and constraints;
- resolved context and tool manifest;
- execution state;
- interventions and takeovers;
- generated candidates;
- verification results;
- final disposition;
- observed outcome;
- links to any resulting loop-improvement proposal.

This is not a new source of domain truth. It is the execution and evidence plane through which machine work becomes inspectable and governable.

**Keeper line:**

> **A system cannot learn reliably from work that occurred in invisible sessions with ambiguous identity and no durable intervention record.**

---

### 4. Banning interactive sessions is useful as an experiment, not a universal doctrine

Tessl banned:

- human-written code;
- interactive coding-agent sessions.

That forced all work through the control plane and exposed hidden workflow dependencies.

The experiment is valuable because it reveals:

- what agents cannot access;
- what humans know but have not externalized;
- which tools lack APIs;
- where identities and permissions are weak;
- where review remains essential;
- which work is genuinely delegable.

But OMNI should not import a universal ban.

Interactive work remains valuable for:

- exploration;
- collaborative framing;
- ambiguous problem definition;
- domain deliberation;
- exception handling;
- relational decision-making;
- early-stage design.

The governing distinction should be:

> **Conversational exploration may remain interactive; consequential execution must enter a durable mission and proof envelope.**

This aligns with OMNI’s existing law that conversation is context, not canonical commitment.

---

### 5. Non-human actor identity must remain explicit

The source recounts an early orchestrator using an employee’s personal GitHub credentials, causing all agent-generated work to appear under her identity.

That is not a cosmetic attribution error. It corrupts:

- accountability;
- authorship;
- approval history;
- contribution metrics;
- incident reconstruction;
- notification routing;
- separation of duties.

OMNI must never let an agent silently borrow a human identity merely because the human configured or launched it.

Required distinctions include:

- initiating principal;
- delegating principal;
- executing agent;
- credential or service identity;
- reviewing principal;
- committing authority;
- affected subject or organization.

**Hard guardrail:**

> **Delegation may connect a human to an agent’s action; it must never erase the agent as a separate actor in the provenance chain.**

This applies equally to:

- clinical drafting;
- patient communication;
- operational changes;
- commerce;
- fulfillment;
- architecture authoring;
- repository changes.

---

### 6. Workflow-by-workflow automation is safer than factory migration

The source rejects a monolithic transformation and recommends:

1. identify one repeatable workflow;
2. put a boundary around it;
3. encode it as a skill or playbook;
4. run it through the control plane;
5. verify the result;
6. measure correction and takeover;
7. expand or roll back;
8. repeat.

This is a strong operating pattern.

## Sharpening: `workflow_automation_ladder`

Possible stages:

- `human_performed`
- `agent_assisted`
- `agent_executed_human_reviewed`
- `agent_executed_exception_supervised`
- `delegated_with_continuous_verification`
- `retired_or_rolled_back`

Promotion should be based on:

- bounded mission scope;
- demonstrated autonomy;
- verification quality;
- consequence class;
- takeover frequency;
- recovery;
- observed outcome;
- change-absorption readiness.

The source’s claim that a team may eventually discover “60% is automated” is healthier than declaring the entire organization a factory.

**Keeper line:**

> **Automate bounded workflows, not organizational identities.**

---

### 7. Verification that replaces human review carries a proof-substitution burden

The source claims outer-loop reviews and targeted verifiers can make manual line-by-line review unnecessary.

That may be true for some classes of work, but only if the replacement evidence is at least as strong as the human function being removed.

A review-substitution decision should ask:

- What did the human review previously detect?
- Which of those functions are now covered deterministically?
- Which are covered probabilistically?
- Which remain uncovered?
- Are the verifier and generator independent?
- Are they using the same model, context, or failure-inducing assumptions?
- How is verifier drift detected?
- What happens when the verifier is unavailable?
- What consequence classes remain prohibited from machine-only review?

The source calls small LLM checks effectively deterministic and sometimes “100% reliable.” That is too strong.

A narrowly scoped model check may be highly reliable, but it remains probabilistic unless converted to a deterministic parser, test, type check, policy engine, or formal assertion.

**Hard line:**

> **If a requirement can be checked deterministically, do not preserve probabilistic verification merely because an LLM can perform it.**

LLM verifiers are most valuable for judgments that cannot yet be reduced to deterministic mechanisms. They should not displace stronger checks.

---

### 8. “One mistake only once” is an aspiration with an overfitting hazard

The meta-loop slogan is:

> Never tell the agent more than once how to do something.

The useful interpretation is:

- recurring corrections should become reusable system improvements.

The dangerous interpretation is:

- every correction should become a permanent global rule.

One failure may be caused by:

- unusual local context;
- temporary model behavior;
- incorrect human feedback;
- a one-time dependency issue;
- ambiguous requirements;
- environmental change;
- tenant-specific policy.

Before a correction becomes a shared rule, OMNI should evaluate:

- recurrence;
- scope;
- causal confidence;
- model dependence;
- domain ownership;
- conflicting cases;
- regression risk;
- expiration conditions.

**Keeper line:**

> **Remember every correction as evidence; promote only the lessons that survive scope and regression testing.**

---

### 9. “The backlog disappears” is strategically wrong

The source argues that abundant agent capacity may eliminate engineering backlogs because every identifiable defect or improvement can be fixed.

This confuses labor scarcity with prioritization.

Backlogs also represent:

- unresolved product judgment;
- competing stakeholder priorities;
- uncertain value;
- opportunity cost;
- change-absorption limits;
- coordination burden;
- regulatory constraints;
- architectural sequencing;
- risk;
- reasons not to act.

Even cheap implementation has costs:

- review;
- deployment;
- documentation;
- migration;
- user disruption;
- support;
- maintenance;
- security exposure;
- long-term complexity.

OMNI should reject the idea that every detectable problem should be fixed.

**Hard counterweight:**

> **When implementation cost approaches zero, the value of disciplined non-action rises.**

The system still needs Governed Resolution:

- should this be changed;
- by whom;
- now or later;
- at what risk;
- with what evidence;
- and with what downstream burden?

---

### 10. Factory quality must be measured beyond the generated artifact

The source hopes software factories will eventually create better code because agents can address every review comment and maintenance opportunity.

That may improve artifact quality while worsening system quality through:

- excessive churn;
- over-engineering;
- architectural inconsistency;
- dependency growth;
- unbounded maintenance activity;
- user-facing instability;
- security exposure;
- false confidence in machine review.

OMNI must evaluate quality across multiple levels:

- artifact quality;
- runtime behavior;
- domain correctness;
- user or patient consequence;
- continuity;
- operational burden;
- recoverability;
- lifecycle cost;
- trust and change absorption.

A perfect pull request can still be the wrong change.

---

### 11. Control-plane ownership is strategic

The source argues that off-the-shelf orchestrators get teams from “zero to 0.5,” but production use requires deep customization around:

- identity;
- issue trackers;
- repository workflows;
- execution environments;
- permissions;
- callbacks;
- tools;
- review;
- company-specific process.

The right lesson is not that every organization should build its own orchestrator.

It is:

> **The organization must own the semantic and governance contract of orchestration, even when it rents the execution machinery.**

OMNI should own:

- mission semantics;
- actor and delegation lineage;
- capability admission;
- authority ceilings;
- state transitions;
- evidence requirements;
- recovery;
- outcome accounting.

It may buy or replace:

- containers;
- queues;
- model APIs;
- GitHub or ticket connectors;
- execution infrastructure;
- generic review engines.

This preserves portability without surrendering the operating constitution.

---

## What not to import

- Autonomous software factories treated as the inevitable end state of every workflow.
- Human-written work prohibited universally.
- Interactive exploration treated as inherently inferior.
- Agent autonomy confused with delegated authority.
- Machine review treated as independent evidence merely because it is a separate process.
- Narrow LLM verifiers called deterministic or infallible.
- “No backlog” used to justify indiscriminate change.
- Every correction automatically promoted into a shared rule.
- Agents using human credentials or appearing under human authorship.
- More autonomous PRs treated as proof of better business or patient outcomes.
- Machine-produced artifact quality treated as whole-system quality.
- Factory metrics optimized without considering security, continuity, authority, labor, or downstream change burden.
- Platform ownership of the harness becoming ownership of substantive domain decisions.

## Hard verdict

This source is highly additive despite overlapping with the recent Tessl cluster.

Its strongest contribution is not another argument for software factories. It is the clean decomposition of **competence, delegation, and outcome**, plus a workable topology for how machine work is checked, committed, and learned from.

### Genuine architecture candidates

1. **`autonomy_automation_quality_profile`**
   - independently measures machine competence, delegated operating permission, and realized outcome quality.

2. **`agent_work_control_plane`**
   - durable mission, actor, context, execution, intervention, verification, disposition, and outcome lineage for agent-performed work.

3. **`loop_improvement_record`**
   - governs proposed changes from meta-loop evidence into inner-loop or outer-loop controls.

### Major sharpenings

1. **Inner / outer / meta proof topology**
   - self-correction, commitment verification, and system learning remain separate.

2. **Workflow automation ladder**
   - progress one bounded workflow at a time with measured promotion and rollback.

3. **Review-substitution burden**
   - removing human review requires explicit proof that its necessary functions have been replaced.

4. **Non-human actor provenance**
   - agent execution must never disappear beneath a borrowed human identity.

5. **Control-plane ownership**
   - own orchestration semantics and governance even when execution infrastructure is rented.

### Principal counterweights

1. High autonomy does not create authority.
2. A machine verifier is not necessarily independent evidence.
3. Every correction is evidence; not every correction should become doctrine.
4. Cheap implementation does not eliminate prioritization.
5. The correct endpoint is not maximum darkness—it is maximum justified delegation with honest visibility and recovery.

### One-line read

**Harness engineering becomes constitutionally important when it separates what an agent can do, what it is permitted to do without review, how its work is independently verified, and how observed failures become tested system improvements rather than invisible local fixes or globally propagated mistakes.**

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

**Method note.** Formalizes Knox Review 001 (`Signal 4.9/5` — major Agent-Runtime / Build-OS / Platform / verification / continuous-learning source; Knox produced 3 "architecture candidates" + 5 major sharpenings + 11 numbered analysis sections + a 12-item what-not-to-import list + 5 principal counterweights), verified against the §1 verbatim transcript (48:59; timestamped interview + embedded AI Engineer SF talk, so anchors are real). The pasted Knox block carries a **stale drafting header id (`EVSRC-2026-000295`)** — ignored per instruction; canonical id = filename **`EVSRC-2026-000307`**; topic confirmed as Dru Knox / Tessl / harness engineering. This is a *first-party, commercially-interested* operator case study: HIGH authority for Tessl's own factory build/eval/release; the "ban all human code / interactive sessions", verifier-reliability, review-reduction, and factory-progression claims are **self-reported, not independently verified** (`GRD-039`). `doctrine_status` vs thesis v3 (§0→§B) + current contracts + post-v3 layer (C3.5–C3.8 · REV-184/GRR · `EVRUN-000004 §0.5` · Polaris/C4.1 · wave-5 gaps + `D0OL-GRD-001..008` · Reactor candidate). `build_status` grounded in supplied repo reality (requireCapability · audit-actions · disclosure-policy evaluator · intake routing · chart_ai_reviews+lab observations · patient-case/impl · artifact-pipeline · outbound dispatch; NO agent runtime / AI-gateway / skill-registry / security-control-plane / clearinghouse / model-gateway). **Agent Runtime & Harness + Build-OS + Platform-Loop** source — **map-depth only** (do NOT build the runtime pre-spine). Formalizing, NOT re-deriving, Knox. This source is a close sibling of 288/289/290/293/296 (fold cross-source into the registry, not here).

### Cluster table
`doctrine_status` = stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) × build_status. `weight_tier` ∈ {spine · spine-guardrail · vocabulary · runtime · low-authority-watch · no-op}.

| # | concept | OMNI meaning | homes | anchor (verbatim ≤12w + ts) | doctrine_status × build_status | weight_tier | status |
|---|---|---|---|---|---|---|---|
| C1 | **Autonomy ≠ Automation ≠ Quality (three independent axes)** | Competence (how little correction to finish), delegated authority (how little review before acting), and realized outcome are three separate variables that must NOT rise together automatically. This is the source's cleanest contribution — a re-derivation of `capability_envelope ≠ delegated_authority_envelope ≠ capability_contract` + REV-184 outcome | Agent Runtime · capability_envelope · REV-184 · Reactor | "you can have very high autonomy but low automation" [3:35] | AFFIRM (sharpened) × build=partial (requireCapability) | spine | watch |
| C2 | **Inner / Outer / Meta loop proof topology** | Inner = fast mission-local self-checks (improve autonomy); Outer = slower independent checks at the commit boundary (justify automation); Meta = post-run observation → proposes loop changes. Keeps self-check ≠ boundary-verification ≠ real-world-outcome distinct | Build-OS · Platform E&V · Accountability Loop · Reactor | "there's a third loop, the meta loop… continuous learning" [7:06] | AFFIRM (proof-topology) × build=partial (chart_ai_reviews) | spine | watch |
| C3 | **Meta loop must produce CHANGE CANDIDATES, never silently rewrite the governing loops** | Post-run learning is not automatically accepted policy; a proposed loop/skill/verifier change must carry trigger, evidence, recurrence, scope, target, expected effect, regression risk, eval plan, owner, rollout, rollback, observed effect. Pure candidate≠commit + GRR at the harness layer | candidate≠commit · GRR/Accountability Loop · Platform Loop · Build-OS | "you only make a mistake once" [7:36]; "never tell the agent more than once" [7:42] | AFFIRM × build=absent | spine | watch |
| C4 | **Legible agent-work control plane is the precondition for learning** | `issue → headless agent run → PR → review comments → revision → merge/reject` moves work onto durable surfaces so the full interaction (intent/context/actions/interventions/identity/verification/disposition/outcome) is inspectable. NOT a new source of domain truth — the execution + evidence plane | Agent Runtime & Harness · Platform Loop · Evidence-Plane/D7 · audit-actions | "all of your touch points with the agent are legible" [40:48] | AFFIRM × build=partial (audit-actions) | spine | watch |
| C5 | **Interactive-session ban = useful EXPERIMENT, not universal doctrine** | Tessl banning human-written code + interactive sessions forced hidden dependencies into the open — valuable as diagnostic. But conversational exploration/deliberation stays interactive; only consequential *execution* must enter a durable mission + proof envelope. Re-derives "conversation is context, not canonical commitment" | Agent Runtime · thesis (conversation≠commit) · Care (deliberation) | "no more human written code… no more interactive coding agent sessions" [11:16] | PARTIAL/CONTRA-if-generalized × build=n/a | spine-guardrail | reject-as-universal / keep-as-experiment |
| C6 | **Non-human actor identity must stay explicit (provenance chain)** | Tessl's early orchestrator ran on a teammate's personal GitHub creds → all agent work appeared under her identity, corrupting accountability/authorship/approval/metrics/incident-reconstruction. Delegation may LINK a human to an agent's act; it must never ERASE the agent as a separate actor | RBAC/Identity · Accountability Loop · one-owner-per-fact · audit-actions | "she used her own GitHub credentials for it" [13:03] | AFFIRM (hard) × build=partial (requireCapability/audit) | spine-guardrail | watch |
| C7 | **Workflow-by-workflow automation ladder (not factory migration)** | Progress one bounded workflow at a time — identify → box it → encode as skill/playbook → run through control plane → verify → measure takeover → expand or roll back. "60% automated" discovered incrementally beats declaring the org a factory. Stages map to candidate≠commit promotion | Build-OS · Platform Loop · candidate≠commit · Reactor | "layer on piece by piece… find a workflow everybody can agree" [19:00] | AFFIRM × build=absent | vocabulary | watch |
| C8 | **Review-substitution carries a proof burden** | Replacing human review requires explicit proof that each necessary review function is covered by evidence at least as strong; verifier must be INDEPENDENT of generator (not same model/context/failure assumptions); handle verifier drift + unavailability; some consequence classes stay prohibited from machine-only review | Platform E&V · Reactor · Care (eval≠release, 288) · REV-184 | "I don't have to… read every single line of code" [6:15] | AFFIRM × build=partial (chart_ai_reviews) | spine-guardrail | watch |
| C9 | **Narrow LLM verifiers are probabilistic, NOT deterministic/"100% reliable"** | Small scoped LLM checks ("does this JSX have an ARIA attribute?") are high-reliability but remain probabilistic unless converted to a deterministic parser/test/type-check/policy-engine/formal-assertion. If a requirement is deterministically checkable, don't preserve probabilistic verification just because an LLM can do it | Platform E&V · Reactor proof-floor · Care-safety-proof | "you can basically get 100% reliability these days" [26:41] | PARTIAL/CONTRA (claim too strong) × build=absent | spine-guardrail | reject-claim / keep-mechanism |
| C10 | **Control-plane OWNERSHIP is strategic (own semantics, rent execution)** | Off-the-shelf orchestrators get you "0→0.5"; a black-box tool owning your whole SDLC grates. OMNI owns mission semantics / actor+delegation lineage / capability admission / authority ceilings / state transitions / evidence / recovery / outcome accounting; may buy/replace containers, queues, model APIs, connectors, generic review engines. Pure GRD-033 | GRD-033 · Platform Loop · Agent Runtime · §B model-gateway (absent) | "black box tool own your entire SDLC… grates" [15:05]; "open and modular" [15:13] | AFFIRM × build=absent | spine | watch |
| C11 | **"The backlog disappears" is strategically WRONG → disciplined non-action** | Abundant agent capacity does not eliminate backlogs — backlogs also encode product judgment, competing priorities, uncertain value, opportunity cost, change-absorption limits, risk, reasons NOT to act. When implementation cost → 0, the value of disciplined non-action RISES. Direct REV-184 non-action-as-commit | REV-184 (non-action-as-commit) · Reactor · GRR · Care | "the idea of a backlog kind of goes away" [33:44]; "no such thing as a backlog anymore" [24:26] | AFFIRM (counter to source) × build=n/a | spine | watch |
| C12 | **Factory/system quality ≠ artifact quality** | A perfect PR can be the wrong change. Quality must be evaluated across artifact / runtime behavior / domain correctness / user-or-patient consequence / continuity / operational burden / recoverability / lifecycle cost / trust + change-absorption — not just the generated diff. Guards against churn/over-engineering/dependency-growth | Reactor · Platform Loop · Care (patient consequence) · REV-184 | "hold quality constant and then aim to drive it up" [48:33] | AFFIRM (multi-level) × build=n/a | spine | watch |
| C13 | **Three harness layers: control-plane → "agent-it" grab-bag → improvement loops** | (1) legible control plane (issue-tracking + review + skills distribution); (2) "agent-it" = exposing internal services/APIs/logs/envs to agents (surfaces governance + compliance + identity gaps — "worse than you think"); (3) improvement loops (repo maintenance, playbooks, repeated-task automation, output-quality sweeps). Maps to Build-OS layering | Build-OS · Platform Loop · Agent Runtime · security/compliance | "control plane… agent it… improvement loops" [40:00–43:04] | AFFIRM × build=partial | vocabulary | watch |
| C14 | **Skills registry with built-in governance (publish/version/who-can-update + security/quality review)** | A shared, versioned, governed registry for workflows/automations with controls for who may publish/update — the workflow is the durable asset, promoted not assumed. Governed-skill = candidate-until-adopted (dedup 285 Foundry) | Intelligence Foundry (FWREG-007, named-only) · Build-OS · candidate≠commit | "skills registry… with built in governance" [44:23] | AFFIRM × build=absent (no skill-registry) | vocabulary | watch |
| C15 | **Sandboxed, long-running, correctly-identified execution environment** | Agents run headless in a sandbox with appropriate permissions, renewed GitHub tokens, correct posting identity, and long-running capability — GitHub Actions "0→0.5" but not built for multi-hour tasks / follow-on CI. Pairs with 290 sandbox_isolation_matrix / credential_lease | Agent Runtime & Harness · security · GRD-033 (execution rented) | "set up a little sidecar that renews your GitHub tokens" [16:21] | PARTIAL × build=absent | runtime | watch |

### Net-new primitive dispositions
Knox proposed **3 "genuine architecture candidates" + 5 major sharpenings**. Per PROPOSE-ONLY + dedup baseline (`EVRUN-000001 §2A` + `000002/3/5/6` + waves 4/5 + wave-6 batches 1/2 + `EVRUN-000004 §0.5` retired terms + `D0OL-GRD-001..008`), **every candidate is dispositioned; none minted:**
- **`autonomy_automation_quality_profile`** → **EXISTS-AS (sharpening)** of `capability_envelope ≠ delegated_authority_envelope ≠ capability_contract` (competence/delegation) + REV-184 outcome/world-model-honesty (realized quality). Knox itself says merge with the previously-identified `delegation_readiness_state` (the band; this measures operation within the band). Route: Agent-Runtime + Reactor **watch** — a measurement-profile shape, NOT a domain object. *Not minted.*
- **`agent_work_control_plane`** → **EXISTS-AS.** This is the "legible control plane" (registry convergence 9) = Platform Loop + Agent Runtime & Harness (map-depth) + Evidence-Plane/D7 + audit-actions. Knox explicitly: "not a new source of domain truth… the execution and evidence plane." *Not minted.*
- **`loop_improvement_record`** → **EXISTS-AS.** = candidate≠commit + GRR (Governed Reporting Resolution) + Accountability Loop + Platform-Loop operational-finding. A structured meta-loop change proposal is a *record shape* over existing physics. Route: Accountability/GRR + Platform **watch** (investigate the record schema; do not mint a domain). *Not minted.*
- **5 major sharpenings** → all EXISTS-AS/AFFIRM: inner/outer/meta topology (C2, Build-OS/E&V) · workflow-automation ladder (C7, candidate≠commit promotion) · review-substitution burden (C8, Platform E&V + 288) · non-human actor provenance (C6, Identity + one-owner-per-fact) · control-plane ownership (C10, GRD-033).
- No Tessl product taxonomy adopted as OMNI ontology (Tessl Agent / Change Review / Verifiers / Launch / registry = product vocabulary, not domain objects). "Software factory", "harness/loop engineering", "verifier", "software factory journey" = practitioner vocabulary. Retired terms not re-minted; `D0OL-GRD-001..008` not re-minted as primitives.
- **Genuine net-new DOMAIN objects: 0** (expected 0 — confirmed; consistent with waves 4/5 + wave-6 batches 1/2). This source's investigate-lane content folds into registry families **F5** (agent-runtime lifecycle: control plane, sandbox, delegation) + **F2** (evidence/monitor-health: verifier/meta-loop telemetry) + **F3** (verification-debt/cost) — route to owning-home watch, do NOT mint.

### Counterweights / what-NOT-to-import (EVERY Knox caution preserved; never inverted)
1. **Autonomous software factories are NOT the inevitable end state of every workflow** (C7/C12). *Preserved.*
2. **Human-written work must NOT be prohibited universally**; the ban is an experiment, not doctrine (C5). *Preserved.*
3. **Interactive exploration is NOT inherently inferior** — it stays valuable for exploration, framing, ambiguous definition, domain deliberation, exceptions, relational decisions, early design (C5). *Preserved.*
4. **Agent autonomy must NOT be confused with delegated authority** (C1). *Preserved.*
5. **Machine review is NOT independent evidence merely because it is a separate process** (C8) — verifier must be independent of generator. *Preserved.*
6. **Narrow LLM verifiers are NOT deterministic/infallible**; "100% reliable" is too strong (C9). *Preserved — claim rejected, mechanism kept.*
7. **"No backlog" must NOT justify indiscriminate change** (C11) — cheap implementation does not eliminate prioritization; disciplined non-action gains value. *Preserved.*
8. **Not every correction should become a shared global rule** (C3) — remember every correction as evidence; promote only lessons surviving scope + regression testing. *Preserved.*
9. **Agents must NOT use human credentials or appear under human authorship** (C6). *Preserved as hard guardrail.*
10. **More autonomous PRs are NOT proof of better business/patient outcomes** (C12). *Preserved.*
11. **Machine artifact quality is NOT whole-system quality** (C12). *Preserved.*
12. **Factory metrics must NOT be optimized without security / continuity / authority / labor / downstream-change burden** (C12). *Preserved.*
13. **Platform ownership of the harness must NOT become ownership of substantive domain decisions** (C10). *Preserved.*
- **Principal counterweights (Knox):** high autonomy ≠ authority; a machine verifier ≠ independent evidence; every correction is evidence, not doctrine; cheap implementation ≠ no prioritization; the correct endpoint is **maximum justified delegation with honest visibility + recovery**, NOT maximum darkness. *All preserved verbatim in intent.*
> No caution inverted. Where the source over-claims (verifier determinism, backlog elimination, factory inevitability), the counterweight is kept as an OMNI *rejection/bound*, not softened into agreement.

### Care / healthcare implications (not swept by 0-net-new)
- **Review-substitution burden (C8)** is the care-critical clause: removing clinician review requires proof each review function is replaced by at-least-as-strong, INDEPENDENT evidence — sibling to **288 Abridge eval≠release-authority**; some clinical consequence classes stay permanently prohibited from machine-only review (AI never care authority).
- **Disciplined non-action (C11)** maps straight onto **REV-184 non-action-as-commit**: in care, "we can now fix everything" is dangerous — not every detectable issue should be acted on; deciding *not* to change is a governed care decision with authority + evidence.
- **Non-human actor provenance (C6)** is acute clinically: an agent drafting a note / message / order must never appear under a clinician's identity — authorship, attribution, and approval must stay typed and separable.
- **Interactive deliberation preserved (C5):** clinical framing, ambiguous-case deliberation, and relational decisions remain legitimately interactive; only consequential care *execution* enters the durable mission + proof envelope.
- **Whole-system quality (C12)** = patient-consequence + continuity + recoverability, not a green PR check — a "perfect" automated change can still be the wrong care change.
- **Verifier determinism caution (C9)** hardens the care-safety-proof floor: prefer deterministic checks (parser/type/policy-engine) over probabilistic LLM checks for safety-bearing invariants.

### Candidate guardrails → route `08` open-review → `06` digest (PROPOSE-ONLY; `user_knox_required`; deduped)
- **G-cand-1:** *Autonomy (competence), automation (delegated authority), and quality (realized outcome) are three independent axes; they must not be collapsed into one score and must not be assumed to rise together.* (dedup vs capability_envelope≠delegated_authority_envelope≠capability_contract + REV-184)
- **G-cand-2:** *A meta/learning loop may propose changes to the loops/skills/verifiers that govern future behavior; it must never silently rewrite them — proposals are candidates until owning-domain review promotes them.* (dedup vs candidate≠commit + GRR)
- **G-cand-3:** *A durable, legible control plane (identity/intent/context/execution/intervention/verification/disposition/outcome) is a precondition for reliable learning; invisible interactive sessions with ambiguous identity cannot be learned from safely.* (dedup vs conversation-is-context-not-canon + audit-actions)
- **G-cand-4:** *Delegation may connect a human to an agent's action; it must never erase the agent as a separate actor in the provenance chain — an agent must not borrow a human's identity or authorship.* (dedup vs one-owner-per-fact + Identity)
- **G-cand-5:** *Removing human review requires explicit proof that each necessary review function is replaced by at-least-as-strong evidence, with the verifier independent of the generator, drift-monitored, and with defined behavior when unavailable.* (dedup vs 288 eval≠release-authority + 284 parallel-agents≠evidentiary-independence)
- **G-cand-6:** *If a requirement can be checked deterministically, do not preserve probabilistic (LLM) verification merely because an LLM can perform it; narrow LLM checks remain probabilistic, never "100% reliable".* (dedup vs Reactor proof-floor + care-safety-proof)
- **G-cand-7:** *Remember every correction as evidence; promote only the lessons that survive scope + causal-confidence + regression testing — "one mistake only once" has an overfitting/over-globalization hazard.* (dedup vs candidate≠commit)
- **G-cand-8:** *When implementation cost approaches zero, the value of disciplined non-action rises; not every detectable problem should be fixed — "the backlog disappears" is false.* (dedup vs REV-184 non-action-as-commit + GRR) — strong care resonance.
- **G-cand-9:** *Own the orchestration semantics + governance contract even when renting the execution machinery; buying containers/queues/model-APIs/connectors must not surrender mission/authority/evidence ownership.* (dedup vs GRD-033)
- **G-cand-10:** *Whole-system quality (continuity, security, authority, maintenance, recoverability, patient consequence) is not artifact quality; a perfect PR can be the wrong change; factory metrics must not be optimized without these.* (dedup vs REV-184 + Reactor)
> Reviewer decides distinct-vs-sharpen-existing; several sharpen wave-6 §5.1 entries (#8 automate-evidence-not-authority, #9 evidentiary-independence, #15/#16 authorization) + wave-6 batch-2 platform-authority cluster. Nothing promoted.

### Reread flags
- Tight sibling of **289** (agent-engineering platform: automate-the-loop-not-the-gate), **290** (Deep Agents harness: externalize-but-keep-authority; sandbox/delegation), **293** (compiler: compile-time policy), **288** (clinical eval≠release), **296** (verification-debt/abundance). Fold C1–C4/C8/C10 cross-source into the registry's **F5 + F2 + F3** families + convergences 8/9/10 — do NOT duplicate as new objects.
- `agent_work_control_plane` vs OMNI **Platform Loop** + **Agent Runtime & Harness** boundary is the load-bearing reconciliation for spine authoring — flag for the Agent-Runtime map-depth pass (map only; do NOT build).
- `autonomy_automation_quality_profile` ↔ `delegation_readiness_state` merge is an open **investigate** item (measurement profile within an authority band) — route to Agent-Runtime/Reactor watch.
- §C-flavored: control-plane-ownership + connector interchange (Linear/GitHub) are GRD-033 boundary inputs; **§C stays PAUSED** (pressure only).
- Operator-authority ceiling: do not cite Tessl's "60% automated / no more human code / verifiers 100% reliable" as verified outcomes.

### One-line hard read
**Harness engineering becomes constitutionally important precisely when it separates what an agent CAN do, what it is PERMITTED to do without review, how its work is INDEPENDENTLY verified, and how observed failures become TESTED candidate improvements — never invisible local fixes, borrowed identities, globally-propagated corrections, or "the backlog is gone" indiscriminate action.**

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Agent Runtime & Harness (map-depth) · Build-OS · Platform Loop · §B (model-gateway, GRD-033) · Reactor (non-action, capacity) · REV-184/GRR · RBAC/Identity (non-human provenance) · Care (review-substitution, eval≠release) · §C (control-plane-ownership / connector interchange, PAUSED)` · promotion: `watch` (0 net-new; 3 Knox architecture candidates dispositioned EXISTS-AS; sharpenings + guardrail candidates only)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, third batch; `EVRUN-2026-000011`).
- `2026-07-19` — **§3 Review 003 formal extraction written (Opus)**; §0/§0.1 filled from Knox metadata (identity_confidence `inferred`, no screenshot); stale Knox header id `EVSRC-2026-000295` resolved → canonical `EVSRC-2026-000307` (Harness Engineering / Dru Knox / Tessl); status → `analyzed`; §4 pointers filled. 15 clusters · **0 net-new** (3 Knox architecture candidates → EXISTS-AS: `autonomy_automation_quality_profile` / `agent_work_control_plane` / `loop_improvement_record`) · 13 counterweights + 5 principal counterweights preserved · 10 guardrail candidates → `08`. PROPOSE-ONLY (`GRD-036`); nothing promoted; shared run artifacts untouched.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

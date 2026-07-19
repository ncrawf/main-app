# EVSRC-2026-000302 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000302_hud-runtime-intelligence-prod-to-code.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000302`  ·  filename: `EVSRC-2026-000302_hud-runtime-intelligence-prod-to-code.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=-6SNbcE3C9o` (inferred from Knox §0 block)  ·  source_title: `May Walter — From Blind Spots to Merged PRs: Runtime Intelligence for Continuous Agentic Performance` (inferred)
- channel_or_org: `AI Native Dev` (inferred)  ·  speaker: `May Walter` (inferred)  ·  published_at: `2026-07-18` (inferred)
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `technical conference talk / production case study`  ·  source_reliability_context: `founder`  ·  topic_tags_light: `[runtime_intelligence, production_observability, coding_agents, prod_to_code_mapping, agentic_workflows, performance_optimization, progressive_context, impact_scoring, human_attention, continuous_improvement]`

> **Header-id note:** the pasted Knox §3 Review 001 block carries a **stale header id `EVSRC-2026-000290`** (+ that number is already taken by LangChain Deep Agents in the registry). **Canonical id = filename = `EVSRC-2026-000302`.** No mis-file — content is genuinely May Walter / Hud.

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `May Walter` · role_in_source: `presenter / case-study operator` · affiliation_at_publication: `Hud — co-founder` · speaker_type: `founder` · authority_context: `Founder presenting a customer deployment of a runtime-intelligence layer that bridges live production behavior to code-level agent reasoning and human-reviewed fixes` · identity_confidence: `inferred` (no screenshot dropped in this processing session; identity + metadata carried from Knox §0/§2)
- publisher / channel: `AI Native Dev`  ·  interviewer / moderator / host: `unidentified conference host`
- event_context: `Practical agentic-engineering conference session (post-lunch); production runtime intelligence + continuous performance investigation + human-reviewed agent-generated changes`  ·  perspective / conflict notes: `Speaker promotes Hud's product + a customer case study. Technical/workflow lessons are direct practitioner evidence; impact numbers (e.g. "30–40%", "45s→normal") + adoption claims are vendor-reported, not independently audited. Strongest on workflow design, context architecture, and production-agent failure modes.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript

Search transcript
Search transcript
0:000 secondsWell, welcome back to the tool call. This room today and tomorrow is all about practical stuff. This is where I want to be.
0:088 secondsIt's no like Sea Level. Heady takes about what AI is and isn't. It's like, what can we actually use today and tomorrow?
0:1616 secondsSo my Walter is here.
0:2020 secondsShe is the co-founder of hood, and she's going to be talking about the difference, the chasm, if you will, between what agents think they do well and what they actually do well.
0:3232 secondsSo can we give her a round of applause, please? All right.
0:4040 secondsSo welcome everyone. Thank you for for taking the time and and joining after lunch. Hopefully it will.
0:4747 secondsI have added some points in which, you know, you might wake up a little bit and might might be funny. We'll see.
0:5555 secondsSo I wanted to start with the situation that kind of led us to this actual use case, which is a situation you might know.
1:031 minute, 3 secondsThere's this PM saying, oh my God, this page is so slow. We have to do something about them, about it.
1:101 minute, 10 secondsAnd then they text the engineering managers like, so can we optimize it? And then Ben would say probably, but I'd have to dig in to find out.
1:181 minute, 18 secondsAnd then they say, oh, never mind then, right. Because they're busy, they're doing things right.
1:251 minute, 25 secondsAnd then a few weeks later she would say, no, no, no, no, no, no, no. But this is actually too slow. Now we're going to have to do something about it.
1:341 minute, 34 secondsHow long will it take what he says? Well, I don't know. Right. Somewhere between an hour and a week, I.
1:411 minute, 41 secondsI'll have to look, Okay. And. And who can even take this? The answer is only Dave.
1:491 minute, 49 secondsHe is the only one that has any idea what's going on in that code base. The rest are not in the company for like five years. So.
1:581 minute, 58 secondsSo just Dave and our one of our customers started with this situation where they were constantly in this.
2:072 minutes, 7 secondsWe have to fix this. We have no idea how, but we can't prioritize it phase. And then we said, well, maybe we can do something about it.
2:162 minutes, 16 secondsSo mine co-founder and CEO had we're building a runtime intelligence layer for coding agent.
2:232 minutes, 23 secondsSo it's basically a sensor that runs with your app in production and captures what coding agents need to reason overproduction.
2:312 minutes, 31 secondsSo like for every function, how often it runs, how long it takes, whether it's failing and when something goes wrong, it proactively captures deep forensic context about why that happened.
2:412 minutes, 41 secondsSo that when you ask why is this slow or why is this failing, you can actually get an answer. And.
2:502 minutes, 50 secondsThe big problem is that, you know, it got easier to build and to generate code.
2:562 minutes, 56 secondsAnd then you kind of have this like, yeah, it looks good to me. And a bunch of pull requests. That looks good. You have one agent that build them.
3:053 minutes, 5 secondsYou have another agent that says, yeah, that looks great. This is a great idea.
3:093 minutes, 9 secondsAnd then the question that you ask yourself is, why is this broken like
3:173 minutes, 17 secondsbut but but why it like all the tests were passing and everything was fine and and code still finds creative ways to fail in production.
3:253 minutes, 25 secondsAnd we still do that, like with the best tools and the best engineers and the best days of the universe.
3:333 minutes, 33 secondsAnd the coding agents have no idea how that actually behaves.
3:373 minutes, 37 secondsAnd we are basically obsessing about how come this can live alongside this at scale.
3:473 minutes, 47 secondsSo maybe there's an agent we can build for that. And basically I'm going to go over the journey that we had from there.
3:563 minutes, 56 secondsWhy was that even important for them, how they did it from a how we did it from a tech perspective and most importantly, how we thought we would do it and it didn't work.
4:074 minutes, 7 secondsAnd what we did about that, and also how it worked from a process perspective, which I think is also very important today to understand
4:154 minutes, 15 secondshow to connect all these dots from it kind of works from a technical perspective to people are actually using it and summarize what we can take out of this so that leaks faster than we bail.
4:284 minutes, 28 secondsAnd I think that was true for humans as well. We kind of ignore the issue and then it degrades and then it becomes a crisis.
4:364 minutes, 36 secondsAnd now we have to prioritize it. So we we fix it. I don't know. Does anyone relate or is it just us?
4:454 minutes, 45 secondsOkay, okay. We're good. We're good. So you're okay.
4:484 minutes, 48 secondsIt just so happens that everyone is doing this, and it's not because we're stupid, and it's not because we don't care.
4:544 minutes, 54 secondsIt's because we're very busy building features, which is what we are here to do. We're ingenious. We're builders.
5:005 minutesSo we try to ignore things because they might not be as important.
5:055 minutes, 5 secondsAnd then once they get to that crisis mode, we want to fix them as soon as possible so that we can go back to building. That is a leaky bucket by definition.
5:155 minutes, 15 secondsSo the research phase is a big problem there, because if I knew that I can fix it in a day, I would probably prioritize that.
5:245 minutes, 24 secondsBut what I have to do is to pay just to find out.
5:285 minutes, 28 secondsIt's kind of like taking something from the grocery store and then going all the way to the cashier just to know how much it costs so that you understand if you want it or not.
5:365 minutes, 36 secondsAnd that's what we've been doing for years.
5:395 minutes, 39 secondsWe were like, okay, let's invest a few hours and then we can understand what can be done. And magically there's always something we can do, right? But we weren't aware of it.
5:485 minutes, 48 secondsAnd then when we know that something could take an hour to three weeks, we don't want to prioritize it because we don't know what we're going to get out of it.
5:565 minutes, 56 secondsWe don't know how much optimization we're going to get. So you don't know how much it costs.
6:016 minutes, 1 secondYou don't know what impact it has, and you're expected to just prioritize that in your day to day life, comparing to features that give value to the customer.
6:126 minutes, 12 secondsSo that doesn't really add up. So our thought was to automate the investigation part.
6:196 minutes, 19 secondsIt wasn't even about fixing it.
6:216 minutes, 21 secondsIt was just about knowing what can be done automatically and then being able to streamline the fix.
6:296 minutes, 29 secondsSo what if we just run on a weekly basis or biweekly, depending on your sprint planning sequences, and just know
6:376 minutes, 37 secondsabout real sweet spot with high ROI opportunities that are scored so we can just run it every week, and that performance sprint that we've been trying to get to for months can just happen regularly.
6:516 minutes, 51 secondsSounds pretty good, except that it was pretty hard. So let's talk about what we did there and what was helpful. All right.
7:007 minutesDid I convince you about why this is needed? Great. That's good. That's a good start.
7:077 minutes, 7 secondsI think a lot of times when you're talking about agenda workflows, the first question is like, does it really need to be built?
7:147 minutes, 14 secondsAnd it gets so much easier to build stuff that we just stumble on building things because they're fun and, you know, auto triage and all these things are like very good examples of that.
7:247 minutes, 24 secondsI think what was interesting about this case is that we were trying to automate something that is not a part of our day to day lives. In the same way.
7:337 minutes, 33 secondsThis is built for how agents work, which is kind of like this automatic thing.
7:377 minutes, 37 secondsYou won't stop every week and ask an engineer to kind of go over and find some interesting performance optimizations.
7:447 minutes, 44 secondsBut if you knew that they exist and that engineer would just like slack, their team lead saying, hey, I just found this thing, like in two hours we can get this down 30%.
7:537 minutes, 53 secondsThey would say, wow, that's amazing, right? So maybe that's sort of the first wedge to change that behavior.
8:018 minutes, 1 secondSo let's talk about how that works.
8:048 minutes, 4 secondsFirst of all, we needed to ask the question of where can this run. Because agentic workflows don't. We don't want them to run on our computers.
8:128 minutes, 12 secondsWe want something to run in the cloud.
8:148 minutes, 14 secondsAnd it just so happens that not every customer we work with even has their own setup for that.
8:228 minutes, 22 secondsAnd we have players like cursor and others that are building their automations so that it's very, very easy to install.
8:298 minutes, 29 secondsBut at the same time, you're now locked to that specific vendor, which does not make sense at scale.
8:358 minutes, 35 secondsSo we wanted something that's vendor neutral, both in terms of the compute as in where it runs in terms of the harness, as in which coding agent is and which model we choose.
8:458 minutes, 45 secondsWe don't know. No one knows what's the best. There are seasons. And then what we wanted to do is to make it easy to switch.
8:548 minutes, 54 secondsWe wanted it to be secure.
8:568 minutes, 56 secondsOf course, in terms of the permissions the tool calls, the authentication, we don't want to build something for scratch. We want to use something that we can trust.
9:049 minutes, 4 secondsWe want a set of triggers that could be webhooks like, hey, this is slow, let's investigate it.
9:109 minutes, 10 secondsAnd also on schedules that are per deployment or on a weekly basis or whatever that they different teams would want.
9:209 minutes, 20 secondsAnd we wanted it to be easy to maintain and update, which is what I think people get most most wrong about agentic workflows is you don't just ship them, they are like code.
9:329 minutes, 32 secondsYou ship them and then you find out something and you just want to change and tweak that little thing so that it will be easier to work with.
9:399 minutes, 39 secondsAnd then if it's hard to do that, then people just won't. And in our case, the biggest question was what matters?
9:469 minutes, 46 secondsAnd that's something that is live and changes with your business and products. So it was very important for us. Specifically, we chose GitHub Agentic Workflows.
9:559 minutes, 55 secondsI don't know if you're familiar with that, but there's actually a guy that built it in the audience. You can talk to him later.
10:0110 minutes, 1 secondAnd the idea was that people already have GitHub Actions or those similar. Not everyone, but many of them.
10:0910 minutes, 9 secondsSo we can just start with something that they already know, that they already trust, that has these parameters in place.
10:1610 minutes, 16 secondsAgain, it's not the only solution, but it was something feasible. We don't want to innovate.
10:2210 minutes, 22 secondsWe don't want to build this new agent infrastructure for whatever and prioritizes with the platform team. We have GitHub actions.
10:2910 minutes, 29 secondsSo now we can have those in a way that works.
10:3210 minutes, 32 secondsAnd again it's about reducing friction and finding that path of least resistance to just trying something out and see if it works.
10:3910 minutes, 39 secondsSo that's kind of how it looks like.
10:4210 minutes, 42 secondsAnd if we go over it a bit more thoroughly, is it big enough we can do this.
10:4910 minutes, 49 secondsThe first thing is you actually choose the engine, as in where do you want to run it?
10:5510 minutes, 55 secondsAnd is it cloud or codex or whatever, which permissions you have, the network, the tools and so on. The MCP servers — in this case, Hud's MCP server.
11:0511 minutes, 5 secondsAnd then you just start talking. So the task is basically a prompt that runs every once in a while or triggered and does that.
11:1711 minutes, 17 secondsAnd if I go back to here, you can see that it's basically a weekly report of an AI performance and reliability
11:2511 minutes, 25 secondsengineer for the repo that generates this deep insights and context about the repo and what it does.
11:3411 minutes, 34 secondsAnd this was actually we started with the repository.
11:3711 minutes, 37 secondsAnd then we even like did it more ingrained because a lot of people are still using monolith.
11:4211 minutes, 42 secondsAnd the idea is not this report about all the cool things that we can theoretically do. It's about the thing that the tech lead for that specific service cares about.
11:5011 minutes, 50 secondsSo they are getting designated report only on the parts that they care about. So basically we have a coding agent could be cloud or anything else.
11:5811 minutes, 58 secondsSpecifically we use Claude.
12:0012 minutesAnd the runtime intelligence runs weekly on GitHub actions and sends the report to slack.
12:0612 minutes, 6 secondsAnd again this I'm not saying this is the only way to make it work.
12:1012 minutes, 10 secondsWhat I'm actually saying is find a way that matches your stack and your tools so that it would be as easy as possible.
12:1712 minutes, 17 secondsThey were using Claude Code, GitHub and slack. So that's why it made a lot of sense for us to kind of latch onto that.
12:2612 minutes, 26 secondsBut let's talk about what it does. Right.
12:2912 minutes, 29 secondsWhat we basically want is to start with the production context, have the agent analyze it to find anti-pattern and opportunities.
12:3712 minutes, 37 secondsThen we want to score and flag them, because not everything that can be done should be done. And that's because we still have to review that code and merge it to production.
12:4712 minutes, 47 secondsIt's because we want to make sure that it actually has an impact, and we don't want to take a risk on a deployment if it's not going to be that impactful.
12:5512 minutes, 55 secondsAnd again, I hope no one relates to that.
12:5812 minutes, 58 secondsBut a lot of times what happens in performance is you start with a thesis and then you fix it, then you deploy, and it's not exactly as impactful as you expected it to be.
13:0713 minutes, 7 secondsIt was really great in staging, but in production the problem isn't really that.
13:1213 minutes, 12 secondsSo we tried to avoid that and to sort of convince something that's worth doing and then go over the diff and merge the PR with a human review, and that sort of closes the loop.
13:2613 minutes, 26 secondsAnd then it didn't work right, because that's how it is.
13:3013 minutes, 30 secondsFirst of all, some of these offers were plausible but unverified, which is kind of like what we do when we go over the code.
13:3713 minutes, 37 secondsIt's like, well, we can probably optimize this, but we don't know if that's really the bottleneck.
13:4213 minutes, 42 secondsIf something is taking 20s or five seconds, I'm not sure exactly where that time is spent.
13:4813 minutes, 48 secondsSo things that sound right are not necessarily the ones that are going to move the needle. Second was specifically for queries.
13:5513 minutes, 55 secondsSo queries can be very complex.
13:5813 minutes, 58 secondsAnd also they are very dependent on how the code actually runs and where the data is.
14:0314 minutes, 3 secondsIf you have that customer with like 10,000 rows returning from the database, it's not a big surprise that it's going to take longer.
14:1114 minutes, 11 secondsIt's just that you have no idea how that looks like. And of course, the biggest, biggest problem is what we call the lazy fix, which means, oh, there's an exception, let's catch it.
14:2314 minutes, 23 secondsThis is great, but it's not helpful at all.
14:2714 minutes, 27 secondsAnd a lot of time, what happens is that if you try to optimize for the syntax error or the long running query, then the question and the answer will be local.
14:3714 minutes, 37 secondsAnd we actually want to look at it from a broader perspective. So those are like things that I guess it's fine that they will start that way.
14:4714 minutes, 47 secondsBut in time, we understood that.
14:4914 minutes, 49 secondsWe want to explain what a fix does look like and what what am I interested in, kind of like a staff engineer would explain to someone who just joined the team.
14:5814 minutes, 58 secondsAnd all you need is context, right? And there are only two problems with context.
15:0515 minutes, 5 secondsOne is you might have too much of it, and then it's really hard to understand what matters.
15:1015 minutes, 10 secondsAnd the other is you might not have enough and then it won't matter because the agent would just assume what's going on there.
15:1915 minutes, 19 secondsOr what I would do as an engineer is I would probably add more logs or metrics, deploy a version, gather context, understand where the bottleneck is, and then go and fix it.
15:3115 minutes, 31 secondsWhat the agent will do is to say, okay, this is what I have. Let's find the shortest path. Let's let's assume, take some assumptions and see where that goes.
15:3915 minutes, 39 secondsWe can't do that to scale, especially if we want to interrupt engineers flow. Right. That's like the most important. We love that.
15:4615 minutes, 46 secondsSo if I am going to flag an opportunity, I can't risk just saying something that won't really make sense
15:5415 minutes, 54 secondsbecause then they will read my report, they will open a pull request, they will review it and then deploy it and then find out that it didn't change anything.
16:0216 minutes, 2 secondsAnd then I just wasted their time.
16:0516 minutes, 5 secondsSo it was really important for us to make sure that we have just enough context so that we can understand and have confidence in the fact that it's actually going to do something.
16:1316 minutes, 13 secondsBut that's actually hard to do because they don't speak the same language.
16:1816 minutes, 18 secondsYou know, the production context is usually in service level or endpoint level.
16:2216 minutes, 22 secondsThis endpoint takes five seconds and the P99 is six six seconds, and the P 100 is 17 seconds.
16:3016 minutes, 30 secondsAnd then the agent the agent reasons overcoat right. The local functions and the files and the class methods.
16:3716 minutes, 37 secondsIt can kind of deduct the connection between the two, but they don't speak the same language.
16:4416 minutes, 44 secondsAnd that's where most of the of the problem is when you ask why is it long. It could go over the code and it might get it right.
16:5316 minutes, 53 secondsDon't get me wrong, some of the issues can be found in static analysis, but when we want to make that transition between
17:0017 minuteshuman lead to an agent workflow, we have to be quite certain in our confidence so that we can truly automate it.
17:0717 minutes, 7 secondsIf something works 90% of the time. It's not an automation, it's streamlining humans.
17:1417 minutes, 14 secondsAnd that's why we built what we call prod to code, which is basically a mapping of what's going on in production to the function level.
17:2317 minutes, 23 secondsSo you have like the endpoint or the service and the endpoints or event consumers and the job cron jobs that it runs, and then the mapping of the functions that are involved within it.
17:3417 minutes, 34 secondsSo one thing that we got from this is the ability to ask this is slow why.
17:4017 minutes, 40 secondsBut it also opened a huge window of opportunity to ask the inverse question of I'm going to touch this. What does that impact?
17:4817 minutes, 48 secondsAnd should I care about it? Is it going to touch my payments and my authorization or not?
17:5517 minutes, 55 secondsSo basically what the sensor is doing in
18:0218 minutes, 2 secondsthat aspect is complete function level context in a way that's connected to the endpoint and deep forensic context only when it needed.
18:0918 minutes, 9 secondsAnd the assumption here is that we can't just go through like gigabytes of logs and spans and traces to be able to do that.
18:1718 minutes, 17 secondsBut if we have for each of these functions, the ability to connect them to how often it runs, which business flows, does it impact, how long it takes,
18:2718 minutes, 27 secondsand whether it's failing, then we can start going over the deeper context, whether that's logs or traces or whatever,
18:3418 minutes, 34 secondswhen we kind of have the area of where we are trying to to tap into, and that's the same level at which the coding agents reason.
18:4618 minutes, 46 secondsSo we have the basic query language layer we specifically use ClickHouse for that. But of course every team has their own.
18:5518 minutes, 55 secondsAnd on top of that we can build a set of skills because it's not just enough to connect the skills to connect the data and kind of ask the agent to see what happens there.
19:0419 minutes, 4 secondsI saw like five different talks about why that fails.
19:0819 minutes, 8 secondsSo we have the skills of how to approach an HTTP 500, how to approach a memory leak, how to approach a performance degradation.
19:1819 minutes, 18 secondsAnd all of a sudden it's not just Dave that can tap into that knowledge and expand it. And on top of that, or the level of the automations.
19:2719 minutes, 27 secondsSo auto fix or dead code removal, a building on top of those skills that are building on top of the query language.
19:3419 minutes, 34 secondsAnd I think it was really important in terms of what we learned to allow all of these layers.
19:3919 minutes, 39 secondsThe coding agent might need something that I cannot express in words, and that's why tools are not enough.
19:4519 minutes, 45 secondsBut at the same time, I don't want to waste my tokens and my chain of thought on things that I know.
19:5319 minutes, 53 secondsI do know how to tackle a memory leak. I want to look at the pod that's had that memory leak.
19:5919 minutes, 59 secondsI want to look at a different one that didn't, and I want to see what happened there. That didn't happen there. Right?
20:0420 minutes, 4 secondsI when I look at the performance degradation, I want to understand where the time is being spent.
20:0920 minutes, 9 secondsSo that small level of involvement and ownership on the methodology was very impactful for us.
20:1820 minutes, 18 secondsAnd then we can say something like, look for artificial delays like sleeps and timeouts, look for n plus one queries, look for missing indexes or synchronous blocking or sequential awaits all of these things.
20:3120 minutes, 31 secondsAnd when you think of a code base that exists in their case for 15 years, obviously these things are there.
20:3820 minutes, 38 secondsIt's just that we need to kind of dig them out and know that they exist.
20:4220 minutes, 42 secondsAnd then you have these moments we're like, oh my God, this was like this for six years. Are you serious?
20:4820 minutes, 48 secondsBut if we look at it from a positive perspective, there's like so much we can do.
20:5420 minutes, 54 secondsAnd I think in that aspect that gave us that balance between
21:0121 minutes, 1 secondkind of letting it run free and having that full, full freedom, but also kind of guiding it to how we know that engineering practices and skills work.
21:1321 minutes, 13 secondsAnd then we can ask something like, why are my endpoints taking so long, like my product manager asks, and get an answer of, oh, there's actually this thing with an N plus one query that exists in the code base for like six years.
21:2621 minutes, 26 secondsMaybe we can do something about this. And we were very happy and pleased about the results.
21:3221 minutes, 32 secondsSo we said, okay, maybe we can just like add open pull requests for all of these high impact, low risk changes that don't require migrations or anything super scary.
21:4221 minutes, 42 secondsAnd we can just open a pull request.
21:4721 minutes, 47 secondsNo no no no no, we don't want any pull requests that no one's going to go over and we don't want to go over those 80 progress even though they exist.
21:5721 minutes, 57 secondsAnd I think that's like if I if you can take one thing out of this is like after you get it working and you want to automate it, think about the scale and think about the humans that are still in the loop.
22:0822 minutes, 8 secondsWe're not in the point where no one just cares about it.
22:1122 minutes, 11 secondsAnd if you open a pull requests, it's kind of like opening your Datadog and Sentry with those like 700 issues that all they say is like, well, I'm not going to be able to fix this, so I'm not even going to try.
22:2422 minutes, 24 secondsSo we of course, we started with automated pull requests. We realized no one cares about that. And if it's not prioritized, then they're not going to do something about it.
22:3422 minutes, 34 secondsAnd again, I am not complaining. I'm not judging. We're builders, right? We have prioritization and it exists for a reason.
22:4322 minutes, 43 secondsNo one has time to just go over a bunch of four requests built by the agent that are statistically huge, and try to understand what happens.
22:5122 minutes, 51 secondsWe don't want to own that. We don't want to go into it. So we actually need to convince the human that it's worth the attention.
22:5922 minutes, 59 secondsInstead of convincing the agent that it's worth the tokens, he will always think that they are.
23:0523 minutes, 5 secondsSo we map the hot paths that endpoints that are invoked often the business impact of that.
23:1123 minutes, 11 secondsSo is this impacting payments or authentication or the set of things that you already know that you care about for your business?
23:1823 minutes, 18 secondsAnd also the risk? We are not looking for the best optimizations.
23:2423 minutes, 24 secondsWe are looking for the highest impact, lowest risk changes that can be done so that we can go to the developer or the PM and say, hey, listen, it's like that small and it's going to do like 30% improvement.
23:3823 minutes, 38 secondsSo we should do that and we want to make that humanly readable.
23:4423 minutes, 44 secondsSo if a human gets something like hey, this endpoint is like the P90 is around 100 milliseconds, except it kind of takes 45 seconds every once in a while, and we have no idea why, theoretically speaking.
23:5723 minutes, 57 secondsAnd then it would be, oh, this is happening because you always use the Mongols distinct function.
24:0424 minutes, 4 secondsIf you switch it to a search, then that should slow you down like improve like 30, 40%.
24:1224 minutes, 12 secondsAnd this is something that we can actually prioritize.
24:1524 minutes, 15 secondsAnd once we started talking about these quick wins, you can see that they can either open it to to dive deeper,
24:2424 minutes, 24 secondsthey can create a ticket or create a PR because again, I don't want to be opinionated on exactly how advanced they are. That's fine.
24:3124 minutes, 31 secondsEither of those work, we can do it later. We can do it now. Obviously, both are labeled so that we can measure it.
24:3724 minutes, 37 secondsAnd all of a sudden that endpoint that used to take 100 milliseconds, except the fact that it kind of takes 45 seconds every once in a while.
24:4524 minutes, 45 secondsWell, it doesn't anymore.
24:4624 minutes, 46 secondsAnd I think that was a very, very big learning for us that we just want to get to a point where the humans kind of make the decision that it's worth a while.
24:5624 minutes, 56 secondsThe fact that merging to production did not become it's not free, it's just cheaper to to merge and to ship.
25:0325 minutes, 3 secondsAnd then we kind of have the ability to learn more about it.
25:0825 minutes, 8 secondsSo for things you can take from our experience so far, one, we still need to define what matters.
25:1625 minutes, 16 secondsAnd I think if I can be a bit philosophical, even though it's a use case, I think that's going to be a huge part
25:2325 minutes, 23 secondsof what we do as engineers in the future is decide what's worth a while, worth the tokens, worth the time, whether it's a human that's reviewing it or an agent.
25:3225 minutes, 32 secondsWe still define what matters more and what matters less than the ability to score by what will be impactful for the business is really important.
25:4125 minutes, 41 secondsAnd I think that's that's something that we can all take to our day to day lives.
25:4525 minutes, 45 secondsAnd if we inform our agents on how we look at what they do, then they're going to do better because they don't just lack the runtime context.
25:5325 minutes, 53 secondsThey also lack the business context.
25:5625 minutes, 56 secondsSecond part is to automate the investigation phase to make prioritization better. And this is an example that we had for performance.
26:0426 minutes, 4 secondsWe're doing similar things for reliability and the other things.
26:0726 minutes, 7 secondsBut I'm not saying that the backlog should be empty just because we have agents.
26:1326 minutes, 13 secondsI'm saying that we have a way to use the agents to make better decisions on what to prioritize. And this is a use case that is not as common as what we're seeing.
26:2326 minutes, 23 secondsLike a lot of people are using agents to do what they were planned to do faster, and this was a way for us to help people
26:3326 minutes, 33 secondsprioritize the the ROI and not just the task itself. Context over cleverness, I guess.
26:4126 minutes, 41 secondsLike it's it's it seems obvious, but the agents get useful once they see what's going on.
26:4726 minutes, 47 secondsIn our case, it was production context, being able to understand where it is and to have very high signal data about it
26:5726 minutes, 57 secondsso that they can build it the same way that a staff engineer cannot just move to a different company and ship to production on day one.
27:0627 minutes, 6 secondsThat's the context that matters, and it's going to change their behavior the same way that it changes our behavior.
27:1227 minutes, 12 secondsAnd last but not least, Agentic engineering is not like coding with an agent. It is different.
27:2027 minutes, 20 secondsIf we want something to work as a workflow, it has to actually work and it has to be confident in what it does.
27:2627 minutes, 26 secondsIt is better to do less but the right things. And if I at any time I would suggest something that won't work.
27:3427 minutes, 34 secondsWe lose trust in the process, so the automation unlocks continuous impact, but it also requires a higher confidence level.
27:4227 minutes, 42 secondsSo choose the things that you feel that your repo and your automation level are ripe for. But I think that's where we're going.
27:5027 minutes, 50 secondsAnd when we try to think about that, our core engineers, when we know the scale, we can architect the system.
27:5627 minutes, 56 secondsSo I think the scale that we're going to see, and the question that I'm asking myself is, how would would it look like
28:0328 minutes, 3 secondsto get to a point where some engineers and some of our customers companies would actually just click that merge button and get that fixed as is?
28:1128 minutes, 11 secondsAnd because I can measure it now, we can get better and better until we get to that point.
28:1628 minutes, 16 secondsAnd I think, you know, we can talk a lot about how that would be perfect if it just works.
28:2228 minutes, 22 secondsBut the thing that was, I think really int about the process here is the ability to start with something that is still net positive,
28:3128 minutes, 31 secondsand it allows you that flywheel of understanding where it got stuck, where the insights not good enough. Were they good enough. But it was hard to merge them.
28:3928 minutes, 39 secondsDid we merge them. But they they didn't give that effect that we tried. And that let's us learn and improve. Before we get to that point of full automation.
28:4728 minutes, 47 secondsAnd again, my dream is to get to a point where people would say, well, 80% of the time we just did the exact same thing
28:5428 minutes, 54 secondsand we kind of merged it to main, and then we will know that we're ready, but we're providing value along the way as we're getting there.
29:0129 minutes, 1 secondWhen the models are getting better, the context is getting better, and everyone can kind of spend their time on on the right things.
29:0929 minutes, 9 secondsSo thank you. I hope that was somewhat helpful.
29:2129 minutes, 21 secondsI appreciate your attention in this tough hour and we have some time for questions. Right. We have one minute, one questions.
29:3029 minutes, 30 secondsIf someone has a very quick question anyone?
29:3729 minutes, 37 secondsOne in the back. Yeah.
29:4329 minutes, 43 secondsIf someone has a question that requires more than a minute, I'll stay outside to to answer them. Thanks a lot for the talk.
29:5129 minutes, 51 secondsI have one question.
29:5229 minutes, 52 secondsSo most people we probably already have integrated with, like Datadog or Sentry or some other, like platform where you need to ingest loads of data to be able to get all these production metrics.
30:0430 minutes, 4 secondsSo how do you stay competitive with it?
30:0630 minutes, 6 secondsBecause, yeah, I guess you need to also ingest that amount of data, but then people won't be like, oh, well, we just like also pay you 10-K a month or whatever to be able to do this stuff.
30:1630 minutes, 16 secondsSo to how do you figure that out? That's a huge question and especially for a startup. So we always like to say that we're like an espresso shop.
30:2530 minutes, 25 secondsWe only have a spesso, but it's the best one in town. We try to focus on the thing that we do better.
30:2930 minutes, 29 secondsIf they have Datadog or all these tools, we will ask, okay, but do you still suffer from production incidents and issues?
30:3730 minutes, 37 secondsDo you still spend way too much time? Are you still surprised by issues that your customers report? And if so, let's run together, obviously, like for example, distributed tracing.
30:4630 minutes, 46 secondsIf they have that, we will just connect to what they already have.
30:4930 minutes, 49 secondsThe thing is the function level context and the forensic context that is being proactively captured. And we focus on that and integrate to whatever it is that they have.
31:0131 minutes, 1 secondOkay. Thank you so much. My.

Sync to video time

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

# EVSRC-2026-000290 — From Blind Spots to Merged PRs: Runtime Intelligence for Continuous Agentic Performance

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `raw_dropped`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

## §0 — Source identity / metadata

- evsrc_id: `EVSRC-2026-000290`
- filename: `EVSRC-2026-000290_runtime-intelligence-production-to-code-agent-performance.md`
- source_platform: `YouTube`
- source_url: `https://www.youtube.com/watch?v=-6SNbcE3C9o`
- source_title: `May Walter - From Blind Spots to Merged PRs: Runtime Intelligence for Continuous Agentic Performance`
- channel_or_org: `AI Native Dev`
- speaker: `May Walter`
- published_at: `2026-07-18`
- captured_at: `2026-07-18`
- captured_by: `Nick`
- capture_method: `transcript paste + screenshot`
- content_type: `technical conference talk / production case study`
- source_reliability_context: `founder`
- topic_tags_light: `[runtime_intelligence, production_observability, coding_agents, prod_to_code_mapping, agentic_workflows, performance_optimization, progressive_context, impact_scoring, human_attention, continuous_improvement]`

## §0.1 — People / authorship / authority context

- primary speaker(s):
  - name: `May Walter`
    · role_in_source: `presenter / case-study operator`
    · affiliation_at_publication: `Hud — co-founder`
    · speaker_type: `founder`
    · authority_context: `Founder presenting a customer deployment of a runtime-intelligence layer that connects production behavior to code-level agent reasoning and proposed fixes`
    · identity_confidence: `high_from_screenshot_and_transcript`
- publisher / channel: `AI Native Dev`
- interviewer / moderator / host: `Unidentified conference host`
- event_context: `Practical agentic-engineering conference session focused on production runtime intelligence, continuous performance investigation, and human-reviewed agent-generated changes`
- perspective / conflict notes: `The speaker is presenting and promoting Hud’s product and customer case study. Technical lessons are direct practitioner evidence, but reported outcomes, impact measurements, and adoption claims are vendor-provided rather than independently audited. The source is strongest on workflow design, context architecture, and production-agent failure modes.`

## §2 — Screenshot / visible source details

- visible_duration: `approximately 31 minutes`
- visible_views_at_capture: `240`
- visible_capture_date: `2026-07-18`
- description_context: `Case study of agents analyzing real production context to identify high-ROI performance fixes, score them by impact and complexity, and produce human-reviewable interventions. The deployment reportedly identified N+1 queries and missing indexes with measurable P90 latency improvement.`
- channel_description_context: `AI Native Dev`
- title_card_context: `May Walter — From Blind Spots to Merged PRs: Runtime Intelligence for Continuous Agentic Performance`

## §3 — Interpretations & review log  ·  append-only

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`

- reviewer: `Knox / ChatGPT`
- type: `AI assistant`
- at: `2026-07-18`
- purpose: `strategic source-local interpretation`

**Signal:** **4.8/5 — highly additive Agent Runtime, Build-OS, Platform, and Accountability source**

**Net-new posture:** no new OMNI domain; **two credible architecture candidates, four major sharpenings, and three important guardrails**

### Core contribution

> **Agents do not become operationally intelligent by reading more code. They become useful when production reality is translated into the semantic level at which they reason—and when only sufficiently evidenced findings are admitted into human attention.**

This source is not fundamentally about performance optimization. Its deeper contribution is the missing bridge between:

- what the live system is actually doing;
- where that behavior originates in implementation;
- which business or care flow it affects;
- whether a proposed intervention is likely to matter;
- and whether the finding deserves human review at all.

That is directly relevant to OMNI’s future runtime, Build-OS, Accountability, and Prove/Learn architecture.

---

### 1. Production-to-code mapping is a real architecture pattern

The central technical breakthrough is the `prod-to-code` bridge.

Production observability speaks in:

- endpoints;
- services;
- jobs;
- consumers;
- latency percentiles;
- failure rates;
- traces;
- business flows.

Coding agents reason in:

- repositories;
- files;
- functions;
- classes;
- call paths;
- dependencies;
- diffs.

Without an explicit mapping between those semantic spaces, agents can produce plausible fixes that are disconnected from the actual bottleneck.

The OMNI-level generalization is broader:

### **Observed consequence → responsible implementation → owning domain → affected relationship**

OMNI will eventually need to trace:

- a failed patient consequence;
- an unresolved obligation;
- a delayed fulfillment;
- a consent violation;
- a misleading projection;
- a dropped handoff;
- or an operator failure

back through:

- the observed event;
- the responsible workflow;
- the runtime path;
- the implementation carrier;
- the domain owner;
- the governing policy;
- and the human or agent intervention that changed it.

This is not ordinary distributed tracing. It is a **semantic consequence graph** connecting real-world behavior to technical and authoritative ownership.

**Architecture candidate:** `runtime_consequence_lineage`

Minimum links:

`observed behavior → business/care flow → runtime path → code/function → deployed version → responsible capability → domain owner → governing constraint`

**Keeper line:**

> **Observability becomes actionable only when runtime evidence can cross the semantic gap into implementation and ownership.**

---

### 2. Automate investigation before automating intervention

The source began by trying to automate fixes. It discovered that the higher-value first step was automating the expensive investigation that humans repeatedly postpone.

The investigation produces:

- what is happening;
- why it is likely happening;
- what evidence supports that view;
- expected impact;
- estimated effort;
- implementation risk;
- and a candidate path forward.

The human can then decide whether to:

- ignore;
- investigate further;
- create a ticket;
- generate a PR;
- review and merge.

This is a strong OMNI pattern:

> **Use agents first to collapse uncertainty around consequential work—not to collapse the authority boundary.**

In care, operations, commerce, or accountability, a governed agent may precompute:

- relevant evidence;
- candidate causes;
- affected parties;
- likely remediation paths;
- urgency;
- reversibility;
- and downstream consequences.

But the resulting intervention remains a candidate until the appropriate owner accepts it.

This is more useful than generic “human in the loop.” The human should not receive a raw problem or a finished unauthorized action. They should receive a **decision-ready investigation packet**.

**Candidate artifact:** `intervention_evidence_packet`

Possible fields:

- observed problem;
- affected flow and population;
- evidence and provenance;
- confidence;
- suspected causal path;
- proposed intervention;
- predicted impact;
- effort;
- risk;
- reversibility;
- required authority;
- post-intervention measurement plan.

---

### 3. Human attention needs an admission gate

The talk’s failed auto-PR phase is one of its strongest lessons.

Generating 80 technically plausible PRs did not create value. It created a new backlog that nobody trusted or owned.

The system therefore shifted from:

`can the agent produce a change?`

to:

`is this finding worthy of scarce human attention?`

That suggests an explicit **attention-admission contract**.

A candidate should not interrupt a human merely because:

- the agent found something;
- a fix is possible;
- tests pass;
- or expected impact is nonzero.

It should cross a threshold based on some composition of:

- consequence magnitude;
- confidence;
- frequency;
- affected population;
- business or care criticality;
- implementation risk;
- reversibility;
- estimated effort;
- human review cost;
- competing priorities;
- expected value of information.

This belongs above notification policy. It determines whether a finding becomes a claimable work item at all.

**Architecture candidate:** `attention_admission_score`

Not necessarily one universal formula; rather a governed decision surface that explains why this candidate deserves interruption, digest inclusion, backlog entry, or suppression.

**Keeper line:**

> **The scarce resource in agentic systems is no longer candidate generation. It is justified human attention.**

---

### 4. Context should be progressively disclosed, not maximally dumped

The source identifies the two familiar context failures:

- too little context → the agent invents assumptions;
- too much context → signal is buried and reasoning becomes expensive or noisy.

Its solution is layered:

1. maintain lightweight function-level production facts;
2. connect those facts to services and business flows;
3. retrieve deeper logs, traces, and forensic evidence only when a candidate area is identified;
4. apply a task-specific investigation skill.

This is a strong runtime pattern for OMNI:

### **Progressive forensic context**

Always-available context should be:

- small;
- high-signal;
- current;
- ownership-aware;
- sufficient to route deeper investigation.

Expensive or sensitive evidence should be pulled only when:

- the mission requires it;
- the actor has authority;
- the purpose is declared;
- and the evidence materially improves the decision.

This is superior to “load the complete patient record” or “give the agent all production telemetry.”

In care, it also supports minimum-necessary access and reduced PHI exposure.

**Keeper line:**

> **Do not maximize context. Maximize decision-relevant evidence per unit of attention, latency, cost, and exposure.**

---

### 5. Agent agreement is not production evidence

The source describes a familiar anti-pattern:

- one agent writes code;
- another agent reviews it;
- both conclude that it looks good;
- production still fails.

This is not merely an evaluation weakness. It is an epistemic category error.

Two agents reading the same implementation are not independent evidence that the implementation behaves correctly in the real world.

OMNI translation:

- model critique does not equal observed outcome;
- simulation does not equal accepted custody;
- a clean static analysis does not prove operational continuity;
- two agents agreeing does not prove clinical appropriateness;
- local tests do not establish cross-domain consequence.

**Keeper line:**

> **Model-on-model agreement remains synthetic evidence until reality answers back.**

This reinforces the corpus distinction between agent consensus and independent evidence.

---

### 6. “Lazy fixes” are symptom suppression masquerading as resolution

The talk’s clearest example is:

`exception occurs → catch exception`

The code becomes quieter, but the underlying cause and user consequence may remain.

OMNI has the same failure mode at a higher level:

- send another reminder instead of resolving access failure;
- mark a task complete without accepted custody;
- reroute a patient without confirming fulfillment;
- suppress an alert without changing the deteriorating state;
- add fallback messaging while the obligation remains orphaned;
- compensate financially while leaving the care failure unresolved.

This should become a cross-domain guardrail:

### **Symptom suppression is not consequence resolution**

Any proposed fix should distinguish whether it:

- removes the cause;
- mitigates the consequence;
- hides the signal;
- transfers the burden;
- or merely improves observability.

Those are materially different outcomes.

---

### 7. Post-change impact measurement closes the learning loop

The system labels proposed changes so it can compare predicted and observed impact after deployment.

That creates a complete loop:

`runtime evidence → candidate cause → proposed intervention → human adoption → deployment → observed effect → model/process update`

This directly converges with the prior Wave-6 `prediction_residual_event` concept.

The important object is not simply “the PR merged.” It is:

- what effect was predicted;
- what effect occurred;
- whether the target metric improved;
- whether another consequence worsened;
- whether the causal theory was supported;
- and whether future confidence should rise or fall.

OMNI’s equivalent must preserve the original intervention hypothesis and compare it with the resulting patient, operator, financial, or system outcome.

**Sharpening:** every agent-proposed consequential intervention should declare its expected effect and its post-action verification method before commitment.

---

### 8. Automation has a higher confidence threshold than assistance

The speaker makes an unusually crisp distinction:

> If it works 90% of the time, it may streamline a human, but it is not yet trustworthy automation.

That is directionally correct, though the numeric threshold must vary by consequence.

The important distinction is:

- **assistive mode:** human expects incomplete or uncertain output and actively interprets it;
- **recommendation mode:** system ranks candidates but does not act;
- **supervised execution:** system performs a bounded action after review;
- **delegated automation:** system acts within a previously granted authority envelope;
- **autonomous consequence:** extremely high evidentiary and control burden.

Confidence alone is insufficient. Automation eligibility must also depend on:

- consequence;
- reversibility;
- observability;
- recovery path;
- authority;
- novelty;
- and failure containment.

This source gives a useful operational law:

> **Trustworthy automation requires fewer, better-selected actions—not maximum action volume.**

---

### 9. Vendor-neutrality and existing infrastructure are strategic, but secondary

The source correctly avoids building an entirely new agent platform and instead uses familiar infrastructure:

- GitHub Actions;
- existing coding agents;
- Slack;
- existing observability systems;
- switchable models and execution environments.

This affirms OMNI’s build-vs-buy-vs-wrap posture:

- own the semantic and governance layer;
- integrate commodity execution and telemetry;
- avoid coupling the architecture to one model, harness, or vendor;
- preserve the ability to change components without losing intent or evidence.

The differentiator is not raw telemetry ingestion. It is the function-level semantic context and the production-to-code bridge.

---

## What not to import

- Agent-generated PR volume as evidence of productivity.
- Static code analysis as proof of production relevance.
- A second agent’s approval as independent validation.
- High-confidence language as evidence of high-confidence causality.
- Automatic exception catching as genuine resolution.
- Business-impact scoring that silently overrides safety, privacy, or clinical priority.
- Constant deep production capture when progressive, purpose-limited collection would suffice.
- Runtime telemetry treated as domain truth without provenance and interpretation.
- Human review used as a magical safety blanket when the review burden is too large to perform honestly.
- “80% of the time humans merge unchanged” as sufficient proof for autonomous deployment; selection bias and consequence class still matter.

## Hard verdict

This is one of the stronger Wave-6 sources because it contributes operational architecture rather than generic agent enthusiasm.

### Genuine architecture candidates

1. **`runtime_consequence_lineage`**
   - maps observed production or real-world consequence through runtime behavior, implementation, capability, and owning domain.

2. **`attention_admission_score`**
   - governs whether a machine-generated finding deserves interruption, digest inclusion, backlog admission, or suppression.

### Strong sharpenings

1. **Automate investigation before intervention.**
2. **Produce decision-ready intervention evidence packets.**
3. **Use progressive forensic context rather than maximal context loading.**
4. **Require predicted-versus-observed effect measurement after consequential changes.**
5. **Differentiate assistive reliability from automation eligibility.**

### Guardrails

1. **Agent agreement is not production evidence.**
2. **Symptom suppression is not consequence resolution.**
3. **Generated work must not exceed the human system’s honest review capacity.**

### One-line read

**The missing layer in agentic engineering is not another coder—it is a governed semantic bridge from live consequence to implementation, evidence, prioritized human attention, and measured post-change effect.**

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

YES!!!!  OMNI MUST PLAN FOR MISTAKES!!!!   IT MUST LAN FOR NOT FINDING THEM, FINDING THEM, AND SHOWING THAT ITS FOUND THEM, CORRECTING THE PROBLEM FOR NEXT TIME, ADJUSTING THE WORK THAT WAS RECORDED, OR DECALRING IT, ETC ETC ETC !!!!!   THAT IS THE PHYSCUS OF HEALTHCARE!!!!

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-19` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Method note.** Read §1 verbatim transcript IN FULL + §3 Review 001 (Knox, 4.8/5) IN FULL + §3 Review 002 (Nick, load-bearing). This Review 003 **formalizes** Knox's strategic read — verifies/sharpens, does not re-derive. PROPOSE-ONLY (`GRD-036`): nothing promoted, no domain minted, no shared run artifact edited (registry/matrix/anchor-ledger/00_index/`08` folded centrally by parent). Dedup baseline = `EVRUN-2026-000011` registry §1–§5 + `EVRUN-000001 §2A` + waves 4/5 + `EVRUN-000004 §0.5` retired-terms + `D0OL-GRD-001..008`. Source is a **vendor case-study conference talk** → workflow/failure-mode evidence is strong; impact numbers + adoption claims are vendor-reported (treat as claim-not-outcome). Anchors are verbatim ≤12 words + transcript timestamp. Build reality per boot: NO agent runtime / AI-gateway / security-control-plane in repo → runtime candidates land `× absent`.

### Cluster table
| # | concept | OMNI meaning | homes | anchor (≤12w + ts) | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| 1 | **prod-to-code bridge → `runtime_consequence_lineage`** | trace observed real-world consequence → business/care flow → runtime path → code/function → deployed version → responsible capability → domain owner → governing constraint; a *semantic consequence graph*, not ordinary tracing | Accountability Loop · REV-184 (lineage/blast-radius) · Care forensic-inheritance · Prove/Learn · one-owner-per-fact | "prod to code, mapping production to the function level" ~17:14 | PARTIAL × absent | vocabulary/investigate | investigate |
| 2 | **automate investigation BEFORE intervention** | run the expensive, repeatedly-postponed investigation first (what/why/evidence/impact/effort/risk/path); collapse uncertainty, not the authority boundary | Sense loop · CNS orchestration · candidate≠commit · artifact-pipeline/chart_ai_reviews | "automate the investigation part… not even about fixing it" ~6:12 | AFFIRM × partial | vocabulary | watch |
| 3 | **`intervention_evidence_packet`** | human receives a *decision-ready* packet (problem·flow·population·evidence·confidence·causal path·proposed fix·predicted impact·effort·risk·reversibility·required authority·post-measurement plan), not a raw problem nor a finished unauthorized action | Reactor (consequence routing) · REV-184 (outcome-reads-frozen-context) · candidate≠commit · Accountability | "convince the human that it's worth the attention" ~22:51 | PARTIAL × absent | vocabulary/investigate | investigate |
| 4 | **`attention_admission_score` (attention as scarce resource)** | governed decision surface deciding whether a finding earns interruption / digest / backlog / suppression — above notification policy; composed of consequence·confidence·frequency·population·criticality·risk·reversibility·effort·review-cost·EVOI | Reactor consequence floor · REV-184 blast-radius · 286 low-friction→high-friction escalation · Polaris (composes not enforces) | "we don't want any pull requests no one's going to go over" ~21:47 | PARTIAL × absent | vocabulary/investigate | investigate |
| 5 | **progressive forensic context** | keep always-on context small/high-signal/current/ownership-aware; pull deep logs/traces/PHI only when mission requires + actor authorized + purpose declared + evidence materially improves the decision | Agent Runtime (context discipline) · disclosure-policy (repo) · minimum-necessary/PHI · projection≠authority · Clinical Memory | "too much of it… or not have enough" ~15:05 | AFFIRM × partial | vocabulary | watch |
| 6 | **agent agreement ≠ production evidence** | two models reading the same implementation are not independent evidence of real-world behavior; model-on-model agreement is synthetic until reality answers back | multiplicity law · REV-184 world-model-honesty · Prove/Learn · guardrail digest | "one agent builds… another says that looks great" ~2:56–3:05 | AFFIRM × n/a | guardrail | watch (guardrail) |
| 7 | **symptom suppression ≠ consequence resolution** (the "lazy fix") | a fix must declare whether it removes cause / mitigates consequence / hides signal / transfers burden / merely improves observability — materially different outcomes; catching the exception quiets the code, not the cause | cross-domain guardrail · REV-184 non-action-as-commit · candidate≠commit · Care (center of gravity) | "the lazy fix… there's an exception, let's catch it" ~14:11 | AFFIRM-extends × absent | guardrail (care-critical) | watch (guardrail) |
| 8 | **predicted-vs-observed post-change measurement** | preserve the intervention *hypothesis* + compare with the resulting patient/operator/financial/system outcome; the object is not "PR merged" but predicted-vs-observed effect + confidence update | Prove/Learn · `actual_vs_predicted` receipt (294) · `prediction_residual_event` (wave-6) · Accountability | "labeled so that we can measure it" ~24:31 | AFFIRM × absent | vocabulary | watch |
| 9 | **automation eligibility ≠ assistance reliability** | ladder: assistive → recommendation → supervised execution → delegated automation → autonomous consequence; "90% is not automation, it's streamlining humans"; eligibility depends on consequence·reversibility·observability·recovery·authority·novelty·containment, not confidence alone | Reactor · capability_envelope≠delegated_authority_envelope · REV-184 · AI-never-care-authority | "works 90% of the time… not an automation" ~17:07 | AFFIRM × absent | vocabulary | watch |
| 10 | **vendor-neutral harness / own the semantic+governance layer** | commodity execution + telemetry (GitHub Actions, coding agents, Slack, observability, switchable models/compute); OMNI owns the function-level semantic context + prod-to-code bridge + governance — the differentiator is not raw telemetry ingestion | `GRD-033` (rail-agnostic/vendor-replaceable/semantics-stable) · build-vs-buy-vs-wrap · §B model gateway | "vendor neutral… the compute… the harness" ~8:35 | AFFIRM × partial | vocabulary | watch (affirms canon) |
| 11 | **define-what-matters / business-impact scoring** | future engineering = deciding what's worth the tokens/time; score by *business* impact (payments? auth? care-critical?) — but scoring must never silently override safety/privacy/clinical priority | REV-184 · `metric_definition_is_strategy` · projection≠authority · Care priority floor | "context over cleverness" ~26:33 | AFFIRM (w/ caution) × partial | vocabulary | watch |

### Net-new dispositions (EVERY candidate accounted for)
Knox surfaced **2 architecture candidates + 1 candidate artifact + 5 sharpenings + 3 guardrails.** Dedup verdict: **0 genuine net-new DOMAIN objects** (consistent with waves 4/5 + wave-6 batches 1–2). Dispositions:
- `runtime_consequence_lineage` (candidate) → **INVESTIGATE** (route: Accountability Loop + REV-184 lineage watch). EXISTS-AS pressure on Accountability/forensic-inheritance + one-owner-per-fact; the *consequence-graph across semantic gaps* is a genuine sharpening, not a new root domain. Pairs with 288 (care chain) + 292 (execution-proof) + Nick's Review 002.
- `attention_admission_score` (candidate) → **INVESTIGATE** (route: Reactor consequence-routing + Polaris compose watch). EXISTS-AS Reactor floor + 286 escalation + 296 scarce-human-intent; "admission before notification" is the sharpening. NOT a universal formula (Knox agrees).
- `intervention_evidence_packet` (candidate artifact) → **INVESTIGATE** (route: Reactor + candidate≠commit + REV-184 frozen-context). EXISTS-AS candidate≠commit + decision-ready-packet framing; sharpening of Sense→Decide handoff.
- Sharpenings **automate-investigation-before-intervention · progressive-forensic-context · predicted-vs-observed-measurement · automation-eligibility-ladder** → **DEDUP/watch** (all EXISTS-AS: Sense-loop / minimum-necessary / `actual_vs_predicted` (294) / capability≠authority + Reactor). Route to named homes as sharpenings.
- **Investigate-lane clustering:** the 3 candidates cluster with wave-6 registry **F2 (evidence-stream + monitor-health)** and the **Accountability Loop** authoring — flag for parent's central fold. **Net-new DOMAIN objects: 0. Investigate-lane candidates named: 3.** No retired term re-minted; `D0OL-GRD-001..008` not re-minted.

### Counterweights (EVERY Knox caution preserved — NEVER inverted)
Knox "what not to import" — all preserved as-is:
1. Agent-generated PR **volume** ≠ productivity.
2. Static code analysis ≠ proof of production relevance.
3. A second agent's approval ≠ independent validation.
4. High-confidence **language** ≠ high-confidence **causality**.
5. Automatic exception catching ≠ genuine resolution.
6. Business-impact scoring must not silently override safety/privacy/clinical priority.
7. Constant deep production capture where progressive, purpose-limited collection suffices.
8. Runtime telemetry treated as domain truth without provenance + interpretation.
9. Human review used as a magical safety blanket when the review burden is too large to perform honestly.
10. "80% of the time humans merge unchanged" ≠ sufficient proof for autonomous deployment (selection bias + consequence class still matter).
- **Opus-added counterweight (does not invert Knox):** vendor-reported impact figures (30–40%, P90/45s) are *claims*, not audited outcomes — they belong to the predicted-vs-observed loop, not to promotion evidence.

### Care implications
- **Nick Review 002 is load-bearing** and directly elevates this source: *"OMNI MUST PLAN FOR MISTAKES… not finding them, finding them, showing it found them, correcting for next time, adjusting the recorded work, or declaring it… the physics of healthcare."* This is the **Accountability/consequence loop as care physics** — it converts clusters 1/7/8 from engineering practice into a care-spine obligation: care must (a) detect its own misses, (b) prove detection, (c) remediate + prevent recurrence, (d) correct the *recorded* truth (amendment/addendum, not silent overwrite — one-owner-per-fact + immutable-audit), or (e) explicitly declare the unresolved state. Route as **Care operating-model + Accountability Loop pressure** (map-depth; do not build pre-spine).
- **symptom-suppression ≠ resolution** maps 1:1 to care failure modes: send another reminder instead of resolving an access failure; mark a task complete without accepted custody; reroute a patient without confirming fulfillment; suppress an alert without changing the deteriorating state; compensate financially while the care failure stays unresolved. Highest-value cross-domain guardrail in this source.
- **progressive forensic context** = minimum-necessary PHI: always-on context stays small/ownership-aware; deep clinical evidence pulled only on authorized, purpose-declared need — reduces exposure while improving decisions.
- **AI-never-care-authority** holds throughout: the agent may precompute the investigation packet; the owning clinician/domain still commits.

### Guardrail candidates → `08` open-review → `06` digest (named only; parent folds; PROPOSE-ONLY, `user_knox_required`)
- **G-302-1** Agent/model agreement is not production evidence; model-on-model consensus is synthetic until reality answers back. *(dedup vs registry §5.1 #9 parallel-agents≠evidentiary-independence + wave-5 multiplicity law → reviewer: sharpen-existing.)*
- **G-302-2** Symptom suppression is not consequence resolution: every proposed fix must declare whether it removes cause / mitigates consequence / hides signal / transfers burden / merely improves observability. *(care-critical; candidate NEW-or-sharpen vs candidate≠commit + REV-184 non-action-as-commit.)*
- **G-302-3** Generated candidate work must not exceed the human system's honest review capacity; findings need an admission gate, not just a possibility of a fix. *(dedup vs §5.1 #19 low-friction-creation→high-friction-escalation.)*
- **G-302-4** A plausible-but-unverified finding must not enter scarce human attention without evidence-sufficiency; sounding right ≠ moving the needle. *(dedup vs §5.1 #20 coverage-proof / illusion_of_correctness_guard.)*
- **G-302-5** Every consequential intervention declares predicted effect + post-action verification method **before** commitment; "PR merged" is not the outcome. *(dedup vs `actual_vs_predicted` (294) + REV-184 outcome-reads-frozen-context.)*
- **G-302-6** Business-impact scoring may prioritize but must never override the safety/privacy/clinical-priority floor. *(dedup vs REV-184 + care priority floor.)*

### Reread flags
- **`runtime_consequence_lineage`** overlaps the frozen **Care-forensic-inheritance audit** (`HANDOFF_2026-07-13`) + Accountability Loop capture — reconcile there before any promotion (Care capture is frozen/propose-only).
- **`attention_admission_score`** must be reconciled against Reactor consequence-routing + Polaris (composes-not-enforces) so it does not become a hidden central authority deciding what humans see.
- Vendor case-study: re-verify any quantitative claim against an independent source before it informs anything beyond the predicted-vs-observed loop.
- Sibling density: strong overlap with 288 (care chain), 290 (Deep-Agents harness), 294 (`actual_vs_predicted`), 296 (scarce human intent) — cross-source convergence belongs in the EVRUN registry, not here.

### One-line hard read
**The missing layer in agentic engineering is a governed semantic bridge from live consequence → implementation → owning authority → prioritized human attention → measured post-change effect; and Nick's operator note makes it care physics: OMNI must plan to miss, detect the miss, prove it, correct the record, or declare it.**

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` (parent folds cross-source) · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` (parent appends receipts) · per-source deep-read: §3 Review 003 (this file) · impact: `Accountability Loop · Care operating-model · REV-184 · Reactor · Agent Runtime · §B model-gateway/GRD-033 · Prove/Learn` · promotion: `watch` (3 investigate-lane candidates; 0 net-new domain; 6 guardrail candidates → 08)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, second batch; `EVRUN-2026-000011`).
- `2026-07-19` — §0/§0.1 filled (identity `inferred` from Knox §0/§2 — no screenshot this session; stale header id `EVSRC-2026-000290` noted, canonical = filename `EVSRC-2026-000302`); status → `analyzed (Review 003 done 2026-07-19; awaiting 2nd-reader fidelity sign-off)`; §3 Review 003 authored (Opus formal deep extraction; 11 clusters, 0 net-new domain, 3 investigate-lane candidates, 10 Knox counterweights preserved + 1 Opus-added, 6 guardrail candidates named for `08`); §4 pointers filled. PROPOSE-ONLY (`GRD-036`/`GRD-044`); no shared run artifact edited.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

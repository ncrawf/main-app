# EVSRC-2026-000306 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=restored`** (2nd-reader signed 2026-07-19; minor anchor/counterweight restore)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000306_tessl-skills-context-supply-chain-workflow.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
> **NO screenshot dropped this session → all identity fields `inferred`** from §1 verbatim + the metadata block embedded in the pasted Knox read. **Canonical id = `EVSRC-2026-000306` (filename).** The pasted Knox block carries a **stale header id `EVSRC-2026-000294`** — ignored per processing rule; content (James Moss skills talk) matches this file's §1 transcript, so the Knox read is a genuine match, only the header id is stale.
- evsrc_id: `EVSRC-2026-000306`  ·  filename: `EVSRC-2026-000306_tessl-skills-context-supply-chain-workflow.md`  *(firm-slug SUGGESTION, not renamed: `EVSRC-2026-000306_skills-context-supply-chain-team-workflow.md`)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=6VRKZQ3pmoU` (inferred)  ·  source_title: `James Moss — Using skills to pay the bills: graduating from solo hacks to a team workflow — DevCon26`
- channel_or_org: `AI Native Dev`  ·  speaker: `James Moss`  ·  published_at: `2026-07-15` (inferred)
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste (screenshot NOT dropped this session)`
- content_type: `technical conference talk (enterprise skill/context governance + tooling)`  ·  source_reliability_context: `practitioner`  ·  topic_tags_light: `[agent_skills, context_governance, skill_registry, context_supply_chain, context_evals, context_activation, versioning, dependency_management, team_workflows, agent_security]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `James Moss` · role_in_source: `presenter` · affiliation_at_publication: `Tessl — Member of Technical Staff (works on the registry product)` · speaker_type: `practitioner` (software engineer / vendor-adjacent) · authority_context: `Engineer at Tessl reporting observed enterprise skill/context failure modes and proposing software-grade practices for governing shared agent skills; demonstrates Tessl's skills-inventory + public registry + review/eval/security tooling` · identity_confidence: `inferred` (from §1 transcript + pasted Knox metadata block; no screenshot this session)
- publisher / channel: `AI Native Dev`  ·  interviewer / moderator / host: `Macy (co-worker at Tessl; introduces + moderates Q&A; surname/role not established)`
- event_context: `AI Native DevCon 2026 conference talk — moving agent skills from solo/personal experimentation into governed team + enterprise workflows`  ·  perspective / conflict notes: `Practitioner observation, BUT commercially aligned — the talk promotes Tessl's private-beta skills inventory, public registry, LLM-as-judge skill review, and Snyk-partnered security scanning. Registry + supply-chain recommendations advance Tessl's product direction. Ecosystem counts ("2M+ skills / 44k repos", "20% of OpenClaw skills malicious") and customer quotes are unverified within the source. Weight the mechanism, discount the vendor framing (GRD-039).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
Whoa! Hi, everyone. Thank you for coming.
0:06
This is a special talk from my colleague James Moss.
0:11
We work together at Tessl. James is a member of technical staff, which means he's
0:17
a software engineer with a superiority complex. Just kidding. I have been liking this.
0:24
Eventually we'll all just be employees and I look forward to that time personally.
0:30
So James is going to be talking about a problem that I would be surprised if you haven't encountered yourself.
0:37
Everyone in a team kind of uses agents a little bit differently. James is going to talk about
0:44
some of the tension points when your disparate agent workflows come together to try and work on the same piece of software.
0:52
So with that, over to James.
1:04
Thank you very much, Macy. Hello everyone. Hope you guys are enjoying AI native Dev Con so far.
1:10
Hopefully you have a little bit of a break. Have some coffee. Brains warming up. You're starting to feel a bit more engaged.
1:16
So a little bit about me. My name is James Moss. I've spent probably more than two decades working
1:23
in the industry across the stack, doing lots of different things. Right now, I'm a software engineer.
1:30
Sorry, I mean, member of technical staff at Tessl, where I work on our registry product, amongst many other things, as you do at startups.
1:38
So using skills to pay the bills. If you didn't read the abstract and you just read the title of the talk and you came and you thought
1:45
today I was going to be sharing a get rich quick scheme. Here it is. Maybe it works, maybe it doesn't.
1:51
You're probably going to be disappointed in the rest of the talk. They've got to give you today. Maybe you'll take away some priceless little nuggets that you can take home
1:59
and use yourself instead of this crazy, this crazy skill.
2:05
So yeah, we're going to talk about adoption and management of skills within the enterprise, right.
2:10
So there's quite a different challenge to using skills within a personal vibe coded project and requires a different set of practices.
2:19
So plan for today we're going to cover three things. Skill sprawl,
2:24
which I'll talk about shortly, which you might have heard of before. Skills or software.
2:30
So building on some of the things that guy was talking about this morning and his keynote, and then a small piece at the end
2:37
around the context development lifecycle. So let's kick off talking about skill sprawl.
2:43
First of all, maybe a term you haven't heard before. If you think about skills and authoring them, the barrier to entry is super low, right?
2:52
They're mostly just text files. Sometimes you might put a couple of scripts in there with them. It's super easy to add your own new ones or install third party ones from GitHub.
3:02
They're also pretty powerful as well, right? Like, it's very easy to write a small amount of text and influence
3:08
how the agents works in quite a powerful way. And so because of this, teams are facing this kind of
3:14
Cambrian explosion of skills within their organizations. Guy mentioned in his slides this morning, we have 2 million
3:22
plus skills across GitHub, across 44,000 repos. That's an insane amount. That's obviously just the public ones as well.
3:28
I'm sure it's even higher in terms of internal private repos and private skills as well.
3:33
So yeah, we're seeing skills spread across lots of different locations. So and GitHub, as I mentioned, across things like Claude Marketplaces
3:42
and also on developers, local machines as well. Right. It's hard to get visibility around where skills are being used.
3:49
And if you can't track that, then you can't measure that and you can't improve things. Right? So this is a real problem right now that we're hearing from customers.
3:55
I collected some quotes that I want to kind of just quickly go through with everyone here just to kind of outline this problem, right.
4:03
First up, we have a plethora of skills distributed across so many repositories
4:08
that's become incredibly difficult and almost impossible to get your head wrapped around. How to unify, centralize, and properly distribute skills across all teams.
4:18
So the from a lead architect and AI services company a couple more.
4:23
It's a free fall right now. For the most part everyone's been doing their own thing. It's the Wild West, right?
4:29
Another couple of engineers here, right? These are experienced folk from the industry, from companies
4:35
you definitely heard of. And this is an industry wide problem right now. So a quick show of hands.
4:41
Who here kind of agrees with these statements? Who here doesn't have a clear picture of every skill in use across your team?
4:48
Amazing. Lots of hands. I was worried no one was going to say this in my talk was falling on deaf ears.
4:54
So yeah, hopefully lots of you are recognizing this problem already and you're facing the pain of that already, right?
5:01
So how does this sprawl manifest actually, and impact humans and the agents that we're instructing.
5:08
So there's a couple of different failure modes that we're seeing. The first one is overlap.
5:13
So this is where you might have multiple teams all building the same thing in isolation, without realizing each team might have built their own version
5:22
of the skill. It might achieve the same thing. You might have generally the same outcomes, but it's done in a different way, right?
5:28
And you're having multiple kind of wasted effort there. So that's overlap. Next up we often see drift.
5:34
So this is where newer skills are shipping. And teams aren't keeping up with those newer versions.
5:42
And a good example here recently is Matt Pocock. Hopefully you've all heard of him. He's great educator, published a bunch of great skills.
5:49
He has a grill me skill. That's where you kind of do an interview with the agent and you kind of
5:55
get a shared understanding. He recently published a newer version of that grill school called grill with docs, which kind of expands on it and adds a lot more detail to it.
6:03
I'm sure there's lots of folks that don't realize that that's been released, right? And they're still using that order version and haven't updated.
6:10
So that's drift. We also have problems around activation or a lack of activation, right.
6:16
Lots of people are producing these skills. Are they being used by the agents. Are they being used by humans. There's no real way to to understand that
6:24
and know that right now you probably don't have that visibility yet. So Guy mentioned this in his talk as well.
6:30
This morning. You might have a skill that describes some code or a code base, or a process
6:37
or even a workflow, and those two things can quickly go out of sync so your skill never gets updated. Things change.
6:43
And in those instances, having an outdated skill can often be just as bad as having no skill at all.
6:50
Right? Next up is overloading the last one here, and this is one that you might not be aware of.
6:58
This is having too many skills in a single repository. So right now you might not know, but there is actually a limit
7:06
to the amount of skills you can have with most coding agents, often expressed as a percentage of the context window.
7:13
So if we think about our skills, the name and the description gets injected into the start of every context window, as the agent knows about those skills
7:20
and knows when to use them, makes decision about activating them.
7:26
What can happen here is undefined. Most agents will truncate that description,
7:32
which means you end up in a situation where your skills might not be activated because the description
7:37
has been shortened, and key bits of information that the model kind of needs to know about to be able to to invoke that skill
7:44
and not there anymore. Right. So these are the the major failure modes that we're seeing.
7:49
So we set out to detect and actually solve these problems for our customers. And so we've built a skills of entry right.
7:57
We connect to your GitHub org. We pull in all the skills we find across all your repos.
8:03
We let you kind of drill into how they're being used. So you can break it down by repo. You can break it down by skill.
8:08
You can see those first party skills, those third party skills. You can see token usage on those skills.
8:14
And we are also able to surface those findings as well that it talks about.
8:19
So that previous slide with those different failure modes we're able to find those surfaced them to you produce a report
8:25
and then you can go and fix that and decide what you want to do. We're also able to lean on our public registry.
8:31
And if we're finding a third party skill that you're using within, there will also surface any reviews
8:37
or eval scores or security scans that we've also done on that skill. This is currently in private beta.
8:43
It's very, very new. If you're interested, come and find me. I'm working on the Tessl booth for the rest of the day.
8:49
I'm more than happy to chat and give you a quick demo. Run you through this if you're having the same problems as most people seem to be.
8:57
So quick recap on Sproule. Let's go. Right. We need to start measuring how we're actually using skills
9:05
across our organization. And we need to track that over time so that we can improve that and resolve those issues.
9:11
So that's a recap. Next up I want to talk about skills and software.
9:17
So this is kind of building on a lot of the things that Guy talked about this morning. I want to give you some actionable things that you can take away and use
9:24
within your own teams and your own organizations today. So I'm not going to go into lots of detail
9:31
about what makes an individual skill work. Hopefully many of you in here are already familiar with that.
9:37
There's lots of resources on there, but I want to talk about the kind of ecosystem of exists around skills.
9:44
Before we dive into that, I want to talk about the agent equation. Right. So if we think about it, an agent is a function of the model,
9:53
the harness and the context. Right. Changing any one of these three pieces has an impact
9:58
on how the agent works and its output, and the quality of its output. Right. Most of the time, we're probably not going to change the model of the harness
10:06
so much that's harder to do. Or maybe we're kind of tied into using a certain model or a certain harness within the organization we're working in.
10:13
And so context is effectively the best lever that we can pull to affect the outcome of the agent here.
10:20
And it has a pretty big impact as well. Right. I'm sure most of you are familiar with this, right.
10:26
You can do a lot in terms of where you're doing instructions and the skills you use and the prompting you use, and the kind of hooks you have set up.
10:33
So within context, skills, again, feel like an important kind of powerful piece
10:38
because they can encode business or domain specific logic and that the model won't have been trained on.
10:44
So you can give the model that knowledge that it won't otherwise know about. So given all of this thinking about this, what can we do
10:50
to make skills as effective as possible? So first one nice and easy.
10:56
Hopefully you're already doing this. Don't write monolithic skills right. Don't write huge epic skills.
11:02
Think about decomposing breaking skills down into smaller pieces. Most agent coding tools support the use of plugins.
11:11
If you're not familiar with plugins, plugin is just a group of context related together that can be installed into your agent.
11:19
Coding tools. Agents can then pick and choose which parts of the plugins they want to use.
11:25
Because you're breaking down your skill into smaller ones, you can use descriptions for each of those individual pieces,
11:32
and so the agent is more likely to activate those individually, rather than trying to stuff a load of kind of keywords into a bigger description of a larger skill.
11:40
And you can also end up building kind of pretty complex, interconnected skills as well.
11:46
So I mentioned this morning that skills can call skills. And so you can have one skill that is maybe invoked by a human
11:53
that sets up the agent to call a bunch of other skills. An example of that recently is we built a UI skill, a test
12:01
which enabled us to build user interfaces in the browser. So we would take a Figma design.
12:08
We would feed that into one skill that was able to break that Figma design down into its various components, and then hand that off to somebody
12:14
using other skills to implement those. So we had a specific skill for building kind of low level components like buttons,
12:20
a separate one for building sort of high level components, things like pages, and another one for those things in the middle,
12:27
things like forms that perhaps compose buttons, text inputs, that kind of thing. And so the agent was able to do all of these.
12:33
But the powerful part about breaking them apart is that me as a human, I could go in and if I wanted to just build a small widget, I could just invoke the
12:41
that kind of low level, sort of like button level skill that describes how to build sort of generic components if you wanted to.
12:49
So that's decompose extend. So skills are just text right.
12:56
And they get ventured into your repo as well. So you have a copy of a bunch of all these skills. Very tempting to just edit them directly.
13:02
You've got some issue with the way the agent is acting after using your skill. I'll just edit that right in the git repo. Right.
13:07
Don't. Please don't do that. Your teammates won't like you. What you want to do here is extend third party skills.
13:14
So let's say you've got a great code review skill that you like the look of, but it's not tailored to the technology stack
13:21
you're using or the best practices you have employed in your company. Write your own first party skill that invokes that skill.
13:27
Agents have a pretty good understanding of kind of intent here, and what needs to sort of override each piece.
13:32
And they can fill in the blank. So extend. And then lastly, thinking back to our kind of see us 101,
13:38
if folks remember that thinking about the solid principles s as a single responsibility principle, it's important for skills to write.
13:46
So don't overload that skill. Again, closely coupled to decomposition.
13:51
Next up, avoid global skills. So what do we mean by this right. This is the works on my machine problem skills that are installed
14:00
on a developers machine but live outside of the repo right. So if a skill lives on someone's local config rather than in the repo,
14:08
the agent sorry, the agent's behavior depends on who's running it. Two different people
14:13
run the same task against the same code base and get very different output, because one has the skill and the other one doesn't,
14:20
or it has a different version of it, right? Horrible to debug trying to work out what's happened, right?
14:25
The skill isn't in the diff. The use of the skill isn't in the diff. It's not in the review, it's not in CI.
14:31
And the divergence kind of has no paper trail here. It's really hard to track down.
14:36
The fix here is the same instinct is committing kind of your log file and traditional code packages.
14:42
Skills that affect output should be version controlled alongside the thing that they're acting on. So not floating around in user's home directory.
14:51
A colleague recently attended a small forum with Boris Cherny, creator of Claude Code, and he had this to say.
14:57
So we ban any local setup. All agent workflow improvements, hooks, skills, etc. must be checked into the repo for everyone.
15:04
So if Boris is doing it, he's following my guidelines already. So amazing work Boris. Next up is automated
15:13
skill reviews, so I don't think you, or probably your agent wouldn't commit code without running it through a linter.
15:19
We often ask agents for write tests for us for a kind of a single module of code.
15:25
Skill review is kind of similar to these two processes, right? The quick to run, you can run them locally after making changes
15:32
to the contents of your skill to kind of get that quick feedback loop. You can also run them in CI as well to kind of gate quality regressions
15:40
and sort of failed build if skills don't meet that certain level here in the screenshot, hopefully it's not too small.
15:47
You can see I've run the skill review on the skill that I shared at the start. So lots of green ticks is a valid skill.
15:54
The line count is not too long, the front matter is valid or good.
16:00
Our skill review also has another piece to it which uses an LLM as a judge, which is not so happy.
16:05
It's given me a score of 20% here saying that I definitely shouldn't. It's got inherently dangerous financial operations.
16:12
So, you know, we have a certain level of gating for skills with Tessl. This one definitely isn't getting published.
16:18
It's not getting pastor. Next up, publish to a registry.
16:24
So right now I imagine most of you are here are probably loading your skills directly from repos on GitHub, sort of via the Claude marketplace,
16:33
or perhaps using something like NP Skills command. And that's fine.
16:38
That's the path of least resistance right now, but the registry adds a lot more. On top right. You have this one source of truth.
16:45
Everyone's pulling the same version of the skill, the same pin version. Right now, there's a kind of a explosion of skills on GitHub
16:53
that are forks, right? So someone's forked a skill. It's from a different place. They've changed something slightly.
16:58
It's very easy to end up with two skills and name the same thing. Look like they do the same thing, but they're not in fact the same skill.
17:05
So registry also allows you to stay current safely to know when there's updates, review diffs, rollback, that kind of thing.
17:13
Discoverability is a big piece. If we think about think back to the skill. Sprawl. Overlap is a big concern.
17:19
You know, having a centralized registry where all this stuff is can help people find those skills and not write their own, as well
17:28
as kind of maybe promoting skills to you that you would want to use. And lastly, there's an interesting one that we're hearing from some customers
17:36
as they're rolling out skills to non-tech folks, their skills are living inside private GitHub repos,
17:43
and they have to provision a GitHub seat for those non-technical users. So even though they're not using any of the features of GitHub,
17:49
they're having to pay however many dollars a month right now for users to be able to access those skills in those private repos.
17:55
And so putting putting a registry in front of where your source code lives helps negate that kind of issue.
18:01
The registry is also a great enforcement point, right? It gives you a surface to be able to put in place governance and enforce
18:10
company policies, kind of examples of those things like approved skills only. Perhaps you allow all your first party skills,
18:16
but only a small subset of third party skills, because the kind of risk profile within your company, similar piece around security
18:24
and kind of bad actors at sneak we do security scans. Sorry, that's all we use. Sneak.
18:30
We partner with sneak to do security scans of all the things that blend it to the registry.
18:36
Right. And so you might want to enforce that. Only the highest level security checks pass before skills can be installed.
18:44
And then finally the minimum release age. Right? I think this is definitely quite personal right now. For those that are not aware, you can you can set a minimum release age
18:53
of say a few days. And any packages newer than that can't be installed. This is especially pertinent for us.
19:00
Tessl last month is just like 3 or 4 weeks ago we had the mini Shiloh
19:05
tech, which affected a bunch of packages that we depend on. We're big npm stack fans at Tessl,
19:14
and the malware here was notable because it was basically a spy chain attack, but it was notable
19:21
because it had a level of persistence where it added a global clawed code
19:27
hook to your machine to try and keep it self installed on the user's machine. So another good reason not to use any kind of global state for your skills.
19:37
We weren't affected by this because in our node package manager we have a release age of a few days.
19:44
The stack team that were found this issue pretty quickly and cleaned it up. So there's no way any devs could have installed that.
19:51
This is not such a big thing right now in terms of some of the skills on registry,
19:56
I think OpenClaw, maybe it's definitely an issue right now. Guy mentioned this morning and it was at 20% of all the skills.
20:03
And there are malicious. We're going to see that expanding into other registries other skills as well.
20:09
And it's not long before I'm sure we'll see as chain issue if you're loading it straight from GitHub, what's in the way what stands between
20:17
that code being on GitHub and being compromised and being installed into your machine, versus having something like a registry in the middle that is able to kind of save you that.
20:26
Next up, don't look your skills to one agent. I grabbed a screenshot from the skills repo.
20:33
Take a look at the project paths. How many are there there? I don't know, there's so many. This is also only up to K as well, which is what
20:41
the 11th list or the alphabet? There's many, many more, right? Some there's some good people that are using the agents
20:49
kind of pattern for putting their skills inside. But this is crazy, right.
20:55
And so if we think about the agents we're using in six months might look nothing like today's right.
21:01
The cost of tokens is going up, Openweight models are getting more and more kind of traction, and you don't want to be just tied into one coding agent, right?
21:09
Skills are effectively your durable asset. The agent is just the runtime. You want to keep them portable, and you don't want to have
21:15
to rewrite your investment every time the landscape shifts. Or you want to do experiments with new tooling, right?
21:23
Also, why registry matters as well, especially a package manager. It can abstract away a lot of this pain
21:28
of having to put these things in different places. You just write it once, and then the manager will take care of installing it into whatever agent you're using.
21:36
Next up, making context a team asset, not just a personal setup. Keeping things dry.
21:43
So one source of truth having shared ownership, not letting one person or one team own everything super important.
21:49
Making things safe to contribute, right? If people feel like a skill is highly dependent upon by many,
21:55
many others in the company, they might not feel safe to contribute to. So putting in place those kind of CI checks I mentioned
22:02
and gating and creating a safe space where they can edit skills and create skills without feeling they're going to break
22:09
the kind of internal ecosystem for, for many folks, super important. I'm going to touch on evals, finally measuring with evals.
22:18
So I like to think of evals as a bit of an experiment and treating skill success as a measurement, sorry, as an experiment.
22:25
And if you can't measure it again, you can't improve it. I found a couple of funding posts from Reddit and LinkedIn here.
22:31
We've got a claim that they built a clawed skill that can reduce, stops overthinking, and cuts token usage by 60 to 80%, right?
22:38
It seems pretty crazy. I want Claude to think more, not less. 44% increase in coding accuracy, right?
22:45
Four rules from capacity added to your Claude, MD and coding accuracy jumped from 65 to to 94%.
22:53
I don't really know what coding actually means, but it was great to see. Big uptick this one 20,000 tokens added to every prompt, right?
23:02
This guy here is saying that he's got this magic prompt that kills 90% of production bugs before they're written, right.
23:07
Is it a bug? If it never existed, I don't know. There's some sort of like Heisenberg there. Very strange.
23:12
All these kind of claims make me think about this awesome quote from Adam Savage of MythBusters fame.
23:17
Hopefully you know who he is. I think this quote now, the difference between screwing around and science is writing it
23:22
down is kind of more important than ever, and the sort of vibes based world that that we're living in. So to me is a bit like writing it down.
23:30
If we go back to the agent equation, Evals let you change any part of it, right? The model, the harness, the context and measure actually happens to the output.
23:38
You can run evals against a single skill or multiple skills, and you can run them against a real code base to see what holds up
23:44
and what breaks right. They also answer questions that might be difficult to answer by doing kind of manual testing.
23:50
So things like will this change make the skill worse? Swapping different models out many different models.
23:56
Does the skills to work. Do you even need this skill? Has the agent sorry, has the model just got better and you no longer need to worry about
24:03
kind of documenting some of these processes that you are within skills. So quick recap on skills and software decompose.
24:11
Do your reviews, make sure you implement a registry and have policies around that
24:17
that kind of fit your company and the things that you care about. Team ownership make it safe for everyone to contribute.
24:24
And then finally using evals to be able to measure that express success with experiments.
24:32
So lastly, I want to touch on the context of element lifecycle.
24:37
So everything you do to keep code healthy already has a direct equivalent for context, right?
24:44
You probably just haven't really been doing it yet. If you think about skill reviews, they're like linting and unit tests.
24:50
Evil is a bit more like end to end tests. Code registries are kind of like, sorry, context rotaries, like code registries.
24:58
And when it comes to authoring skills, the same reflexes that you apply with code also apply to context and skills, right?
25:04
You compose things together, you avoid global state. All of those things matter. And lastly, same things with human factors for code, right?
25:12
We don't have siloed knowledge. Avoid that kind of bus factor. So all those same things apply.
25:19
I want to leave you guys on a bit of a story. When you think back to 2005, if you were able to remember that
25:26
if you're slightly old enough to remember it, Myspace was in its heyday. Mr. Brightside by The Killers was topping the charts.
25:33
It's pretty phone. There's no iPhone is pre GitHub, pre containers, pre DevOps. I was a fresh face developer out of university writing PHP
25:42
at my very first gig. At that time PHP had no package manager, right? It was seven years before composer came around
25:49
and so if we wanted to install things we'd go over to SourceForge, we'd download a zip, we'd extract that vendor that into our code base.
25:57
We'd never do any kind of security review. Right. We're not looking at that code. We're not thinking, hey, does this have a vulnerability in it?
26:03
We're just like, cool, this is a date library we want to have in our code. Right. The, the, the there was no semantic versioning that hadn't been invented yet.
26:13
It was whatever the author's kind of whim was to updating that deployment kind of made me wince a little bit, thinking, thinking about deployment.
26:20
So we used to use FTP and we would, we would copy files across on FTP
26:26
into straight into production, which it's just mad to me now. We weren't total monsters. We used SftP.
26:32
Right. So this is crazy, right? Like we would never dare to do any of this kind of stuff now.
26:39
And it took the industry about ten years to sort of fix all of this, right? We invented or at least for PHP.
26:45
We invented a package manager. We have we had lock files, registry, CI test,
26:50
dependency scanning, signed releases, all this stuff. Right. All this stuff that we now kind of take for granted.
26:56
You'd never imagine dragging a file into prod anymore, hopefully.
27:01
Right. So we would never do any of those outdated practices anymore, but it does feel like we are doing them a bit with skills and contexts right now.
27:10
Like in some of the ways we're working where we're skipping package managers, we are suing directly from the source and we're not we don't have these kind of CI things up in place.
27:18
Right. So the good news is we already know how the story ends, right? We don't have to spend another
27:23
ten years coming up with these processes and rediscovering those. We can apply what we've learned with the SDLC to the CDC, right.
27:31
We just have to make sure we're not making the same mistakes again. Cool.
27:36
Thanks.
27:45
James. Yes, we have four minutes for questions.
27:51
Does anyone have any question for James? Thank you. So I've been using the test registry and I was curious about the
28:00
now you're migrating everything plugins I understand from skills. That's right. And so if I have multiple skills
28:08
do I have to package them into a plugin. Should I keep them separate? And what's the suggestion here?
28:15
The classic answer it depends. It depends you we I think we are planning
28:21
on allowing you to upload individual skills, even though we're kind of focusing on plugins right now. It comes down to your needs, right?
28:27
Like my example there, I was talking about a bunch of skills that are related and so that makes sense to package to them.
28:33
You might want to also package a bunch of kind of related plugins that are broader.
28:39
Perhaps you have a bunch of plugins that everyone uses, right? Almost like a standard library for for skills across your company,
28:46
and you want everyone to install that, and you want to just give them one dependency that they can install and keep things up to date. So yeah, as I say, it depends.
28:53
It depends on your use case. We want to support both ways. Whatever's kind of flexible for yourself..
28:59
Because we have a very aggressive warning from the planning now from the client. You have to move the planning.
29:09
Any more. I I'd love to hear more on the kind of
29:14
how you share this with non-technical people in the company because like permitting bats, if you're using JIRA
29:19
and you're updating tickets and using skills to help with that, and you want to share that with the other half of the business.
29:25
Yeah. How do you do that? This is a huge problem right now. Like this is probably again,
29:31
one of the bigger, bigger questions we're hearing from customers. I don't think there's a good answer. Expecting folks to start running CLI commands in the terminal
29:40
to build skills locally I think is going to be difficult. Yeah, definitely don't have a good answer for that.
29:48
One is a real problem. People don't. Again, we don't want to be in the position where we are
29:55
passing things like zips and files around getting folks to install that. I think what we'll probably end up having is some sort of GUI.
30:01
Imagine for most folks, and probably roots lie. So I don't know. I'm not committing to that though.
30:13
Thanks for the talk. Who? Excellent. What do you think to APM as a solution for some of the problems
30:19
that you mentioned. Is great. Yeah, I've played around with it a bit. Very very good.
30:24
Definitely use APM if that's what you want to use. For those that don't know, it's package manager from it was started by one guy at Microsoft.
30:33
Now kind of come under an umbrella umbrella of the whole of Microsoft.
30:38
Yeah really good. Definitely use it if you if you if that's going to work for you.
30:44
Anyone else. Yes. Can you.
30:54
How do you recommend expressing dependencies between skills and particularly skills that are not in the same package.
31:00
So if you have a kind of generic set and a specific set, because there isn't a standard way, as I understood it at the moment, to to.
31:06
Relate that this is peer dependencies, it's something that I think everyone's a bit scared to tackle.
31:11
Guy mentioned this morning again is keynote around dependency management and resolution and what a pain that is.
31:17
I didn't work at snake. There's lots of folks that didn't work at Sneaker Tussle today have faced that pain and they understand that.
31:24
I think ultimately it comes down to maybe having something like peer dependencies. I think we're also in a position where maybe there's
31:33
nothing better than that, right? Like we're moving to more agent world peer dependencies and maybe an artifact
31:39
of this world where things had to be more predictable and deterministic. And so maybe just the agent being able to look at the skill and say,
31:46
hey, I need to use this other skill by reading it. I think that could also be a solution to that.
31:57
Thank you guys. That's all we have time for. But lucky for you, James will be easy to find.
32:02
If you want to chat with him. He'll be at the Tessl booth today and tomorrow. Yeah, I think both days. Yeah. Both days.
32:09
Chat to me? Yeah. Come by and chat to James. Thank you all so much. The next talk will be in exactly ten minutes.
32:15
1145 you'll get a preview of Stack Overflow for agents.
32:21
If that doesn't pique your curiosity, I don't know why you're here. Thank you very much. Thank you. Thank you very much.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

# EVSRC-2026-000294 — Using Skills to Pay the Bills: Graduating from Solo Hacks to a Team Workflow

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `raw_dropped`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

## §0 — Source identity / metadata

- evsrc_id: `EVSRC-2026-000294`
- filename: `EVSRC-2026-000294_skills-context-team-workflow-and-supply-chain.md`
- source_platform: `YouTube`
- source_url: `https://www.youtube.com/watch?v=6VRKZQ3pmoU`
- source_title: `James Moss - Using skills to pay the bills: graduating from solo hacks to a team workflow - DevCon26`
- channel_or_org: `AI Native Dev`
- speaker: `James Moss`
- published_at: `2026-07-15`
- captured_at: `2026-07-19`
- captured_by: `Nick`
- capture_method: `transcript paste + screenshot`
- content_type: `technical conference talk / enterprise context-governance and tooling presentation`
- source_reliability_context: `practitioner`
- topic_tags_light: `[agent_skills, context_governance, skill_registry, context_supply_chain, context_evals, context_activation, versioning, dependency_management, team_workflows, agent_security]`

## §0.1 — People / authorship / authority context

- primary speaker(s):
  - name: `James Moss`
    · role_in_source: `presenter`
    · affiliation_at_publication: `Tessl — Member of Technical Staff`
    · speaker_type: `practitioner`
    · authority_context: `Software engineer working on Tessl’s skill-registry product, presenting observed enterprise failure modes and proposed practices for managing shared agent skills and context`
    · identity_confidence: `high_from_screenshot_and_transcript`

- publisher / channel: `AI Native Dev`
- interviewer / moderator / host: `Macy — surname and formal role not established in supplied material`
- event_context: `AI Native DevCon 2026 conference presentation on moving agent skills from personal experimentation into governed team and enterprise workflows`
- perspective / conflict notes: `The presentation contains direct practitioner observations but also promotes Tessl’s private-beta skills inventory, public registry, review, evaluation, and security capabilities. Registry and supply-chain recommendations are commercially aligned with Tessl’s product direction. Reported ecosystem counts and customer quotations are not independently verified within the source.`

## §2 — Screenshot / visible source details

- visible_duration: `32:38`
- visible_views_at_capture: `661`
- visible_capture_date: `2026-07-19`
- description_context: `James Moss describes how agent skills and context files become an unmanaged software-like layer when teams move beyond solo experimentation. The talk covers skill sprawl, overlap, drift, activation failure, context overloading, registries, versioning, security scanning, evaluation, shared ownership, portability, and a proposed Context Development Lifecycle.`
- product_context: `Tessl skills inventory and registry are demonstrated and promoted during the talk.`

## §3 — Interpretations & review log  ·  append-only

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`

- reviewer: `Knox / ChatGPT`
- type: `AI assistant`
- at: `2026-07-19`
- purpose: `strategic source-local interpretation`

**Signal:** **4.9/5 — major Build-OS, Agent Runtime, architecture-memory, and AI supply-chain source**

**Cross-source relationship:** This operationalizes claims from `EVSRC-2026-000292` and `000293` about shared skills, context registries, paved roads, and continuous learning. Its distinct contribution is treating context as a **versioned, executable influence layer with dependencies, activation behavior, security exposure, evaluation requirements, and lifecycle state**.

**Net-new posture:** no new OMNI domain; **three credible architecture candidates, one lifecycle consolidation, and several high-value guardrails**

### Core contribution

> **Agent context is not documentation. It is executable influence over system behavior and must receive software-grade lifecycle, provenance, testing, security, and release controls.**

A skill may be “just text,” but that text can determine:

- which evidence an agent retrieves;
- what tools it invokes;
- what rules it follows;
- what it ignores;
- how it modifies software;
- and what it believes it is permitted to do.

The artifact may contain scripts and dependencies as well. Treating it as harmless prose is therefore a category error.

For OMNI:

> **Any artifact capable of materially changing agent behavior belongs inside the governed capability supply chain.**

---

### 1. OMNI needs a first-class context-artifact contract

The source identifies several unmanaged states:

- overlapping skills with the same purpose;
- divergent local copies;
- unknown versions;
- stale context;
- unmaintained forks;
- local-machine-only behavior;
- unclear activation;
- registry sprawl;
- silent context truncation;
- malicious third-party instructions.

These cannot be solved by storing more markdown.

## Candidate: `context_artifact_contract`

A reusable skill, instruction bundle, context module, or agent procedure should declare:

- stable artifact identity;
- owner and steward;
- source and provenance;
- intended purpose;
- applicable missions and domains;
- activation conditions;
- prohibited uses;
- required inputs and tools;
- capability and authority ceiling;
- dependencies;
- supported models and harnesses;
- version;
- evaluation evidence;
- security review state;
- data-access implications;
- supersession and deprecation state;
- rollback path;
- review or expiration date.

This artifact is not doctrine merely because it is centrally published. It is a governed implementation of accepted intent within a bounded capability.

**Keeper line:**

> **Instructions that can change consequential behavior are governed capability artifacts, not informal advice.**

---

### 2. Installed context is not activated context

One of the source’s most important details is that skill descriptions are injected into limited context space so the model can decide what to invoke. When too many skills exist, descriptions may be truncated and activation becomes unpredictable.

That means several states must remain distinct:

- artifact available;
- artifact selected for consideration;
- description visible to the model;
- artifact activated;
- artifact executed;
- artifact materially influenced the output.

Current agent systems frequently expose only the first state.

## Candidate: `context_activation_receipt`

For consequential runs, OMNI should be able to preserve:

- which context artifacts were available;
- which exact versions were resolved;
- which were presented to the agent;
- which were truncated or excluded;
- which were activated;
- which tools or subordinate skills they invoked;
- which policies overrode others;
- whether activation succeeded;
- whether the final output materially depended on them.

This is not private chain-of-thought. It is externally verifiable runtime lineage.

**Keeper line:**

> **You cannot reproduce or govern an agent decision if you do not know which instructions actually entered the decision path.**

---

### 3. Agent context needs a resolved manifest, not ambient local state

The source’s “works on my machine” example is structurally important:

- two developers run the same task;
- one has a local skill or different version;
- the resulting behavior diverges;
- the difference is absent from the diff, CI, and review record.

OMNI should reject undeclared ambient context for governed missions.

However, “put everything in the repository” is too narrow for OMNI. Context may be drawn from:

- constitutional doctrine;
- domain contracts;
- operator policy;
- subject-specific evidence;
- tenant configuration;
- mission-local instructions;
- approved external packages.

What matters is not physical colocation. It is deterministic resolution and provenance.

## Candidate: `resolved_context_manifest`

The manifest should capture:

- exact artifact IDs and versions;
- source locations and checksums;
- dependency graph;
- precedence and override rules;
- model and harness versions;
- operator and tenant scope;
- mission scope;
- activation budget;
- security and approval states;
- unresolved dependency or conflict warnings.

This is analogous to a lockfile, but stronger because natural-language artifacts are semantically nondeterministic and may interact differently across models.

**Keeper line:**

> **Governed reproducibility requires the resolved instruction environment, not merely the source code and model name.**

---

### 4. The Context Development Lifecycle should become a Build-OS lifecycle

The source correctly maps familiar software practices onto context:

- authoring;
- decomposition;
- review;
- linting;
- evaluation;
- version control;
- registry publication;
- dependency resolution;
- security scanning;
- rollout;
- observation;
- maintenance;
- deprecation.

OMNI should consolidate this as a formal lifecycle:

`candidate → reviewed → evaluated → security-cleared → published → pinned → activated → observed → revised | superseded | retired`

Each state answers a different question:

- Is the artifact syntactically valid?
- Does it improve the intended mission?
- Does it degrade adjacent missions?
- Is it secure?
- Is it approved for this scope?
- Did it activate as expected?
- Did it improve real outcomes?
- Is it still required after models or harnesses change?

The last question is especially valuable. Improved models may make a skill obsolete. Accumulating old context indefinitely creates contradiction, latency, cost, and activation failure.

**Sharpening:** every context artifact needs a **retirement trigger**, not only an update path.

---

### 5. Skill composition creates a dependency and authority graph

The source recommends decomposed skills that invoke other skills and extending third-party artifacts rather than editing them directly.

That is useful, but it creates a graph:

`mission → skill → subordinate skill → tool → data → side effect`

This graph needs more than package-style dependency resolution.

OMNI must know whether a parent skill can:

- expand the child’s authority;
- alter its purpose;
- replace its safety constraints;
- introduce incompatible data access;
- call a higher-risk tool;
- conceal the child’s provenance.

The safe rule is:

> **Composition may narrow inherited authority; it may not silently widen it.**

Local overlays should retain:

- upstream artifact identity;
- version;
- local modifications;
- conflict resolution;
- evaluation evidence for the composed behavior;
- the ability to accept or reject upstream updates.

Extension is preferable to opaque forking, but only when precedence remains explicit and testable.

---

### 6. Registries are governance seams, not truth authorities

The registry provides valuable functions:

- discoverability;
- deduplication;
- ownership;
- approved versions;
- security scanning;
- evaluation results;
- update and rollback;
- policy enforcement;
- release-age restrictions;
- portability across runtimes.

This strongly validates OMNI’s need for a governed capability catalog.

But a registry must not become a universal authority that decides:

- what clinical policy is correct;
- which operator process is legitimate;
- whether a skill is appropriate for every tenant;
- whether a successful benchmark grants action authority.

The registry can establish:

- artifact identity;
- integrity;
- provenance;
- compatibility;
- approved scope;
- evidence state.

The domain owner still determines substantive authority.

**Keeper line:**

> **The registry can certify the package; it cannot certify every decision the package may influence.**

---

### 7. Skills create a software-supply-chain attack surface

The source’s malware example is not incidental. An instruction package can:

- persist through global hooks;
- alter agent behavior;
- exfiltrate data;
- trigger tools;
- modify repositories;
- weaken review;
- create hidden instructions;
- spread through shared registries.

Minimum controls include:

- verified publisher identity;
- signatures or checksums;
- immutable release versions;
- minimum release age or quarantine;
- static and dynamic scanning;
- declared scripts and hooks;
- declared network and data access;
- tool-level least privilege;
- sandbox evaluation;
- dependency scanning;
- revocation and emergency disablement;
- activation telemetry.

For OMNI, third-party context touching PHI, clinical workflows, identity, consent, commerce, or communications requires far stronger admission than a generic coding skill.

**Guardrail:**

> **Natural-language instructions are part of the executable supply chain whenever an agent can translate them into tool calls or authoritative proposals.**

---

### 8. Context overload is a capability failure, not merely a token-cost problem

Too many skills can reduce activation quality because:

- descriptions compete for limited attention;
- relevant definitions are truncated;
- near-duplicate instructions conflict;
- models choose the wrong artifact;
- useful context becomes harder to distinguish from noise.

This means context catalogs need admission and retrieval discipline.

The system should optimize:

- relevance;
- non-overlap;
- activation clarity;
- authority fit;
- mission fit;
- evidence quality;
- compactness.

Not total available context.

A large registry is not useful if every artifact is partially visible on every mission.

**Sharpening:** capability admission requires both:

1. registry approval; and  
2. mission-specific context selection.

---

### 9. Context evaluation needs ablation, not promotional percentages

The source correctly mocks unsupported claims such as:

- 90% fewer bugs;
- 80% lower token use;
- 44% higher coding accuracy.

A useful evaluation should compare:

- baseline without the skill;
- candidate skill;
- previous version;
- alternate model;
- alternate harness;
- adversarial and edge cases;
- real repository or domain conditions;
- cost and latency;
- regression outside the target task.

It should also ask:

> **Does this artifact still add value?**

The model may have improved enough that the skill now adds:

- redundancy;
- stale assumptions;
- unnecessary cost;
- degraded behavior.

LLM-as-judge may contribute one signal, but cannot independently establish:

- security;
- correctness;
- clinical appropriateness;
- policy compliance;
- real-world outcome.

---

### 10. Shared ownership must avoid both personal drift and central bottlenecks

The source correctly rejects critical skills that exist only on one employee’s machine. It also warns that shared artifacts can become intimidating to modify.

OMNI needs a contribution model that supports:

- named stewardship;
- broad proposal rights;
- protected review;
- sandbox experimentation;
- regression testing;
- staged promotion;
- clear escalation;
- supersession history.

“Team-owned” must not mean “nobody is accountable.”  
“Platform-owned” must not mean “domain experts cannot correct it.”

The healthiest pattern is:

- platform owns packaging, lifecycle, evaluation infrastructure, and distribution;
- domain experts own substantive meaning;
- security owns admission constraints;
- operators own local applicability;
- architecture governance resolves cross-domain conflict.

---

## What not to import

- Every useful instruction forced physically into one repository.
- Registry publication treated as doctrinal or clinical approval.
- Package-manager analogies treated as complete; semantic behavior varies across models and harnesses.
- LLM review scores treated as sufficient evidence of quality.
- First-party extensions allowed to silently override upstream safety constraints.
- “Approved skill” interpreted as permission for every user, tenant, mission, or tool.
- Local context universally prohibited; mission-local context remains necessary but must be declared and resolved.
- Skill invocation inferred solely from the final output.
- Public popularity or download counts treated as trust.
- Security scanning treated as proof that an instruction is substantively safe.
- More skills treated as more capability.
- Third-party context granted access to sensitive data before purpose and authority are established.

## Hard verdict

This is one of the most operationally important Wave-6 sources because it identifies the next supply-chain layer OMNI must govern.

The model is not the only executable component.  
The harness is not the only executable component.  
The **context artifact** is also part of the runtime.

### Genuine architecture candidates

1. **`context_artifact_contract`**
   - identity, owner, purpose, scope, activation, authority ceiling, dependencies, evaluation, security, version, and lifecycle for reusable context.

2. **`resolved_context_manifest`**
   - exact versioned instruction environment, dependency graph, precedence, compatibility, and approval state for a mission.

3. **`context_activation_receipt`**
   - evidence of which context was visible, selected, truncated, activated, and materially involved in an agent run.

### Major lifecycle consolidation

**Context Development Lifecycle**

`author → review → evaluate → security-clear → publish → resolve → activate → observe → revise | supersede | retire`

### Principal guardrails

1. Context that drives tools belongs to the executable supply chain.
2. Registry approval never creates domain authority.
3. Composition may narrow authority but must not silently widen it.
4. Installed context is not proof of activated context.
5. Shared context must be easier to retire than to accumulate forever.

### One-line read

**OMNI cannot govern agent behavior while treating skills and context as loose markdown; they need the same identity, provenance, dependency, evaluation, security, activation, and retirement discipline applied to every other consequential capability artifact.**

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

**Reviewer:** Opus (repository-native) · **at:** `2026-07-19` · **depth:** `full_semantic` (matching Knox read present; Knox signal 4.9/5) · binds nothing (`GRD-036`/`GRD-044`). **PROPOSE-ONLY** — no mint, no promotion, no contract/thesis/registry edits.

### Method note
Read §1 verbatim (James Moss, "Using skills to pay the bills," AI Native DevCon 2026) IN FULL, then §3 Review 001 (Knox, 4.9/5) IN FULL. This is a **formalization** of Knox's strategic read (verify + sharpen + anchor + dedup), **not** a re-derivation. **Stale-header note:** the pasted Knox block self-labels `EVSRC-2026-000294` — that id is stale/mis-headed; its content (skills/context supply chain) matches this file's §1 (James Moss skills talk), so it is a genuine match. **Canonical id = `EVSRC-2026-000306`.** Dedup baseline = `EVRUN-2026-000011` concept registry (§1 282–296 + §2 + §3 F1/F5 families) + `EVRUN-000001 §2A`/wave-5; retired terms (`EVRUN-000004 §0.5`) and `D0OL-GRD-001..008` NOT re-minted. Verdict up front: **0 genuine net-new DOMAIN objects** (consistent with waves 4/5 + wave-6 batches 1–2); this source is the wave's cleanest **context-as-executable-supply-chain** re-derivation of OMNI physics (`candidate≠commit` · `projection≠authority` · `capability_envelope≠delegated_authority_envelope≠capability_contract` · `GRD-033` · one-owner-per-fact · `GRD-033` MCP visible≠authorized). Build reality: OMNI has NO skill-registry / agent-runtime / security-control-plane / model-gateway → this whole cluster is `doctrine AFFIRM/PARTIAL × build absent`.

### Cluster table
| # | concept | OMNI meaning | homes | anchor (≤12w + ts) | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| 1 | Context artifact ≠ documentation; it is executable influence | A "skill" is just text but it decides what an agent retrieves, invokes, ignores, and believes it may do → it is a runtime component, not prose | §B AI-substrate · Build-OS · Agent Runtime · security | "skills… mostly just text files" ~2:52; "encode business or domain specific logic" ~10:38 | AFFIRM × absent | spine | watch |
| 2 | `context_artifact_contract` (declared identity/owner/purpose/authority-ceiling/deps/eval/security/version/lifecycle) | A reusable skill/context module must self-declare identity, steward, provenance, applicable missions, activation conditions, prohibited uses, **capability + authority ceiling**, deps, supported models, eval evidence, security state, supersession, rollback, review date | Build-OS/Build Entry Gate · Platform Loop · Knowledge-Reservoirs · capability-topology | Knox §1 formulation (NOT §1-verbatim), anchored near transcript ~13:07 (third-party/extend-context segment) | AFFIRM × absent | vocabulary | investigate (dedup → F1) |
| 3 | Installed ≠ activated → `context_activation_receipt` | Available / selected-for-consideration / description-visible / activated / executed / materially-influenced-output are DISTINCT states; governance needs externally-verifiable runtime lineage (not chain-of-thought) | Agent Runtime · Accountability Loop · REV-184 (outcome-reads-frozen-context) | "description… shortened… skills might not be activated" ~7:32 | AFFIRM × absent | vocabulary | investigate (F5) |
| 4 | `resolved_context_manifest` (deterministic resolution + provenance, NOT physical colocation) | The "works-on-my-machine" divergence is invisible to diff/CI/review; fix = a resolved, checksummed, version-pinned, precedence-ordered instruction environment (lockfile-stronger, because NL is semantically nondeterministic across models) | Agent Runtime · Build-OS · Platform Loop | "the skill isn't in the diff" ~14:25; "ban any local setup… checked into the repo" ~14:57 | AFFIRM × absent | vocabulary | investigate (F1) |
| 5 | Context Development Lifecycle + **retirement trigger** | `author→review→evaluate→security-clear→publish→resolve→pin→activate→observe→revise\|supersede\|retire`; every artifact needs a retirement trigger, not only an update path (stale context = worse than none) | Build-OS · Platform Loop · Reactor | "outdated skill… just as bad as… no skill at all" ~6:43; "SDLC… we can apply… to the CDC" ~27:23 | AFFIRM × partial | vocabulary | watch (= convergence 3) |
| 6 | Skill composition = dependency + authority graph; **narrow-not-widen** | `mission→skill→subordinate-skill→tool→data→side-effect`; a parent skill/overlay may narrow inherited authority but must NOT silently widen it, swap safety constraints, or conceal child provenance; extend > opaque fork only when precedence stays explicit + testable | Agent Runtime · Build-OS · RBAC/capability-topology | "skills can call skills" ~11:46; "extend third party skills" ~13:07 | AFFIRM × absent | vocabulary | watch |
| 7 | Registry = governance seam, NOT truth authority | Registry certifies identity/integrity/provenance/compatibility/approved-scope/evidence-state; it CANNOT certify clinical policy, operator legitimacy, per-tenant appropriateness, or that a benchmark grants action authority — the domain owner still holds substantive authority | Platform Loop · §C (PAUSED) · Federation · Build Entry Gate | Knox §6 formulation (NOT §6-verbatim), anchored near transcript ~16:38 (registry enforcement segment) | AFFIRM × absent | spine | watch (§C pressure) |
| 8 | Skills = software-supply-chain attack surface | An instruction package can persist via global hooks, exfiltrate, trigger tools, modify repos, weaken review, spread through registries → needs verified publisher, signatures, immutable versions, min-release-age/quarantine, static+dynamic scan, declared scripts/network/data, least-privilege tools, sandbox eval, revocation | security/assurance lane · Platform Loop · §C | "spy chain attack… persistence… global clawed code hook" ~19:00–19:27 | AFFIRM × absent | spine | watch (→ 08) |
| 9 | Context overload = capability failure (not just token cost) | Too many skills → competing descriptions, truncation, near-dup conflict, wrong artifact chosen; catalogs need admission + retrieval discipline. Capability admission requires BOTH registry approval AND mission-specific context selection — "more skills ≠ more capability" | Agent Runtime · Manifest-Read-Graph · Build-OS | "limit… percentage of the context window" ~7:06 | AFFIRM × absent | vocabulary | watch |
| 10 | Evaluation needs ablation + independence, not promotional % | Real eval = baseline-without vs candidate vs prior-version vs alt-model/harness vs adversarial vs real-repo, incl. cost/latency/off-target regression, and asks "does this still add value" (model may have outgrown it); LLM-as-judge is one signal, never proof of security/correctness/clinical-appropriateness | Build-OS/E&V · Reactor · REV-184 | "difference between screwing around and science is writing it down" ~23:17; "20%… inherently dangerous financial operations" ~16:05 | AFFIRM × partial | vocabulary | watch |
| 11 | Shared ownership: avoid BOTH personal drift AND central bottleneck | Named stewardship + broad proposal rights + protected review + sandbox + regression + staged promotion + escalation + supersession history; platform owns packaging/lifecycle/eval-infra/distribution, domain-experts own meaning, security owns admission, operators own local applicability, architecture governance resolves cross-domain conflict | Platform Loop · Build-OS · Accountability Loop | "shared ownership, not letting one person… own everything" ~21:43 | AFFIRM × partial | vocabulary | watch |
| 12 | Skill sprawl failure-mode frame (overlap · drift · activation · overloading) | The problem statement OMNI's governed lifecycle already answers: duplicate isolated builds, un-updated versions, unknown activation, context-window overloading — measure-to-improve ("if you can't track it you can't improve it") | Platform Loop · Build-OS · Manifest-Read-Graph | "Cambrian explosion of skills within… organizations" ~3:14 | AFFIRM × absent | low-authority-watch | watch |
| 13 | Skills are the durable asset; the agent is just the runtime (portability) | Keep context portable across agents/models because the runtime landscape shifts in ~6 months; a package manager abstracts install-per-agent — direct GRD-033 (rail-agnostic, vendor-replaceable, semantics-stable) | §B model-gateway · GRD-033 · Build-OS | "Skills are… your durable asset. The agent is just the runtime" ~21:09 | AFFIRM × absent | spine | watch |

### Net-new dispositions (EVERY candidate → dedup / investigate / reject) — count: **4 named candidates → 0 mint · 3 investigate-route · 1 dedup-as-sharpening**
1. **`context_artifact_contract`** → **INVESTIGATE (route, do NOT mint).** `EXISTS-AS` the wave-6 **F1 governed-compiler family** (`compiled_agent_manifest`/`compile_time_policy_check` 293 · `certified_variation_envelope` 285 · `okf_compatibility_profile`/`metadata_quality_state` 287) + Foundry generated-skill governance (285) + the physics primitive `capability_contract`. Adds the **authority-ceiling + prohibited-uses + retirement-date** declarations to that family. Route → Platform Loop + Build Entry Gate + Knowledge-Reservoirs. Not a new DOMAIN.
2. **`resolved_context_manifest`** → **INVESTIGATE (route).** `EXISTS-AS` the F1 family's mission-time resolution of `compiled_agent_manifest` (293) — the "lockfile" projection; reinforces "conversation is execution context, not canonical memory" + one-owner-per-fact. Route → Agent Runtime + Build-OS. Not a new DOMAIN.
3. **`context_activation_receipt`** → **INVESTIGATE (route).** Sharpens the wave-6 **`deployment≠activation≠exposure≠adoption≠action`** chain (289) + Abridge installed/activated distinction (288) + REV-184 outcome-reads-frozen-context; a proof/receipt object belonging to Agent Runtime & Harness + Accountability. Route → F5 (Agent Runtime). Not a new DOMAIN.
4. **Context Development Lifecycle** → **DEDUP (as section-sharpening).** `EXISTS-AS` Build-OS lifecycle + Platform Loop + convergence-3 (governed lifecycle > artifact) + Build Entry Gate + 288 (eval≠release-authority). Contributes the explicit **retirement trigger** sharpening. Not net-new.
- **Net-new DOMAIN objects: 0.** Retired terms + `D0OL-GRD-001..008` not re-minted. All four route as INVESTIGATE/DEDUP into existing F1/F5 homes for the parent's central fold (do NOT edit registry here).

### Counterweights (EVERY caution preserved — NEVER inverted) — count: **13 preserved · 0 inverted**
Knox "what not to import" + sharpenings, preserved verbatim-of-intent:
1. Do NOT force every useful instruction physically into one repository — **mission-local context remains necessary; it must be declared + resolved, not banished** (corrects Boris Cherny's "ban all local setup" into a narrower rule).
2. Registry publication is NOT doctrinal/clinical approval.
3. Package-manager analogies are NOT complete — NL semantic behavior varies across models/harnesses; a lockfile is weaker than needed.
4. LLM review scores are NOT sufficient evidence of quality (nor of security/correctness/clinical-appropriateness/policy/outcome).
5. First-party extensions must NOT silently override upstream **safety** constraints.
6. "Approved skill" is NOT permission for every user/tenant/mission/tool.
7. Local context must NOT be universally prohibited (see #1).
8. Skill invocation must NOT be inferred solely from the final output (installed≠activated≠materially-influenced).
9. Public popularity / download counts are NOT trust.
10. Security scanning is NOT proof an instruction is substantively safe.
11. More skills is NOT more capability.
12. Third-party context must NOT get sensitive-data access before purpose + authority are established.
13. **Verification depth ≠ verification independence** (Knox sharpening): a hundred machine-generated checks can share one blind spot; LLM-as-judge cannot self-certify. (Reinforces wave-6 multiplicity law + FWREG-013 coverage-proof.)
- **Care-specific escalation preserved:** third-party context touching PHI/clinical/consent/commerce/communications requires **far stronger admission than a generic coding skill** — NOT inverted into "registries make skills safe."

### Care implications (0-net-new is a dedup fact, NOT permission to drop care cautions)
- **AI-never-care-authority at the context layer:** a registry can certify a clinical-guidance skill's package; it can NEVER certify the care decision that skill influences — the owning clinical domain still commits (affirms AI-never-care-authority + capability≠authority).
- **Installed≠activated is a clinical-reproducibility requirement:** to govern/replay a care decision you must know which exact instructions entered the decision path (this-patient-this-moment), not merely which were "available" — direct REV-184 (outcome-reads-frozen-context) + explainability-as-replayable-chain (NOT chain-of-thought).
- **Retirement triggers protect care:** stale clinical context ("outdated skill… just as bad as no skill") must be easier to retire than to accumulate — care memory must be partitioned/consented/promotion-gated (wave-6 T-w6-6).
- **Care-grade admission floor:** any NL artifact that an agent can translate into a tool call or an authoritative care proposal is part of the **executable care supply chain** and inherits the consequence-calibrated control+proof floor (Reactor); commerce/comms skills may fulfill but never author care.

### Guardrail candidates → route `08` open-review → `06` digest (PROPOSE-ONLY, `user_knox_required`; dedup noted)
- **G-306-1** Natural-language instructions are part of the **executable supply chain** whenever an agent can translate them into tool calls or authoritative proposals. *(dedup vs wave-6 §5.1 #13 config-is-executable-architecture + #15 tool-visibility≠authorization; sharpen.)*
- **G-306-2** Registry/catalog approval NEVER creates domain (or clinical) authority. *(dedup vs §5.1 #14/#16 + capability≠authority.)*
- **G-306-3** Composition may narrow inherited authority; it must never silently widen it, swap safety constraints, or hide child provenance. *(net-new-ish sharpening of control-inheritance §5.1 #12.)*
- **G-306-4** Installed/available context is not proof of activated context; consequential runs need an activation receipt (available→selected→visible→activated→executed→materially-influenced). *(sharpens 289 deployment≠activation chain.)*
- **G-306-5** Shared context must be easier to **retire** than to accumulate forever; every artifact needs a retirement trigger, not only an update path. *(sharpen convergence-3.)*
- **G-306-6** Security scanning ≠ substantive safety; LLM-as-judge is one signal, never authority for security/correctness/clinical-appropriateness. *(dedup vs §5.1 #7 + wave-6 illusion_of_correctness_guard.)*
- **G-306-7** More skills ≠ more capability; capability admission requires BOTH registry approval AND mission-specific context selection. *(net-new-ish; → Manifest-Read-Graph + Build-OS.)*
- **G-306-8** Third-party context touching PHI/clinical/consent/commerce/comms requires care-grade admission (min-release-age/quarantine, signed+immutable versions, least-privilege, declared data/network) far beyond a generic coding skill. *(care escalation; → security lane + §C.)*
- All → `08`; reviewer decides distinct-vs-sharpen-existing. Nothing promoted.

### Reread flags
- **Stale header id resolved:** pasted Knox block self-labels `EVSRC-2026-000294`; content matches this file's transcript → treated as genuine match, **canonical id = 306**, header ignored per rule. (Parent: ensure the anchor ledger records id=306, not 294.)
- **No screenshot dropped** → §0 identity fields `inferred` (url/title/date from pasted metadata block + transcript). Reread if screenshot later supplied.
- **Heavy dedup vs F1 (285/293/287) + F5 (286/289/290)** — sibling reconciliation is a **parent-registry central-fold** job; do NOT duplicate cross-source synthesis here (`GRD-044`).
- **Vendor-framing discount:** Tessl-commercial claims (2M+ skills; 20% OpenClaw malicious; Snyk partnership) are `unverified` — keep the mechanism, discount the marketing (GRD-039).

### One-line hard read
**OMNI cannot govern agent behavior while treating skills/context as loose markdown — a context artifact is a runtime component and belongs in the same governed capability supply chain (identity · provenance · resolved manifest · activation receipt · dependency-authority graph · eval · security admission · retirement) as every other consequential capability; the registry certifies the package, never the care decision it influences.**

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` (parent folds this source's clusters centrally) · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` (record id=306, not stale 294) · per-source deep-read: §3 Review 003 (this file) · impact: `§B · Build-OS · Agent Runtime · Platform Loop · security/supply-chain · §C (PAUSED, pressure only) · Care` · promotion: `watch` (0 net-new DOMAIN; 3 investigate-route + 1 dedup; 8 guardrail candidates → 08)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, third batch; `EVRUN-2026-000011`).
- `2026-07-19` — Opus §3 Review 003 formal extraction (full_semantic; formalizes Knox 4.9/5); §0/§0.1 filled (`inferred`, no screenshot); status → `analyzed (awaiting 2nd-reader fidelity sign-off)`; §4 pointers filled. Stale Knox header id 294 ignored (canonical 306). Verdict: **0 net-new DOMAIN**, 13 clusters, 4 candidates dispositioned (3 investigate-F1/F5 + 1 dedup), 13 counterweights preserved (0 inverted), 8 guardrail candidates → 08. Firm-slug SUGGESTION (not renamed): `_skills-context-supply-chain-team-workflow`.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

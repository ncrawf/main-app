# EVSRC-2026-000308 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=restored`** (capping-agent restoration 2026-07-19: the Batey Knox read — located mis-pasted in 309 — was formalized at full depth in the Review-003 RESTORATION ADDENDUM below; `reread_when_knox` RESOLVED. **One operator-hygiene residual:** the raw Batey Knox read should be physically re-pasted from `309 §3 Review 001` into `308 §3 Review 001` [your paste zone]; the keeper CONTENT is already preserved in Review 003, so this is hygiene, not a fidelity blocker.)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **PROCESSING NOTE (Opus, 2026-07-19):** NO screenshot dropped in chat AND NO Knox §3 Review 001 (paste block empty). Processed **transcript-native at reduced depth** per operator directive. §0/§0.1 filled `inferred` from the transcript's own self-introductions. Anchors are transcript-native (verbatim + ts). Firmed-slug SUGGESTION: `building-product-teams-in-the-age-of-ai` (NOT renamed — propose-only, `GRD-036`).

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000308_batey-building-product-teams-age-of-ai.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000308`  ·  filename: `EVSRC-2026-000308_batey-building-product-teams-age-of-ai.md`
- source_platform: `YouTube`  ·  source_url: `inferred` (no screenshot; not in transcript)  ·  source_title: `inferred: "Building product teams in the age of AI — what we had to relearn every quarter"`
- channel_or_org: `inferred: "Latent Space" conference stage (host intro) · speaker's firm = Core Engineering Consulting Group`  ·  speaker: `inferred: Christopher Batey`  ·  published_at: `inferred` (unknown; captured 2026-07)
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste only (NO screenshot dropped in chat)`
- content_type: `conference talk / practitioner engineering-leadership prescription`  ·  source_reliability_context: `practitioner (engineering leader / consultancy CTO)`  ·  topic_tags_light: `[agent_native_engineering, systems_thinking_not_delegated, ADR_first, producer_black_box, harness_model_gateway, vanity_metrics, adoption_over_output, blast_radius, loosely_coupled_services, parallelism_one_complex_task, reviews_bottleneck, small_streams]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Christopher Batey` (inferred from host intro + self-reference) · role_in_source: `speaker / presenter` · affiliation_at_publication: `CTO, Core Engineering Consulting Group (platform-engineering + continuous-delivery consultancy)` · speaker_type: `operator (engineering leader / CTO) · practitioner` · authority_context: `hands-on engineering leader reporting first-person operating changes his 10-person product org made adopting agentic development on two high-consequence systems (sensitive client data + client production environments)` · identity_confidence: `inferred` (no screenshot; name from transcript host intro only)
  - *(add a bullet per additional speaker)*
- publisher / channel: `inferred: "Latent Space" (conference/stage brand per host intro)`  ·  interviewer / moderator / host: `Katie Roberts (host, per transcript self-intro)`
- event_context: `live conference talk, "building product teams in the age of AI"`  ·  perspective / conflict notes: `Speaker sells consultancy + a productized developer platform (they are "its best customer"); claims are first-person operating experience, not measured comparative research (one self-described made-up velocity graph). Strongest as a practitioner operating-model report; weakest as generalizable evidence.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
So. Hello. Hello. Welcome to the Latent Space. My name is Katie Roberts. I've been hosting on this stage today.
0:06
And right up next we've got Christopher Batey. He works for as a CTO for Core Engineering Consulting Group.
0:13
And his talk is building product teams in the age of AI. What we had to relearn every quarter.
0:20
Thanks. Thanks very much. Caleb. Yeah.
0:26
Okay. So what I'm going to go. Through is and if everything that we've learned well, not everything, but certainly the, the,
0:32
the important things for building a product team in the age of AI. So I work for Core Engineering Consulting Group,
0:38
and there's a keyword in there called consulting. And in historically, we have been a consulting firm
0:44
in the domain of platform engineering and continuous delivery. And if I if I see where we're at about two years ago, the majority of the engineers
0:52
at our organization would be at client sites, and we would only work with large enterprise clients across media, finance, healthcare.
0:59
And we do two types of things. We'd do advisory, so we'd help them. We'd look at their continuous delivery
1:05
practices, digital transformation, building developer platforms, and we'd give them advice on how to how to move forward.
1:11
And then we provide the engineers to go in and help do that thing if needed. They can either take that and do that, or we could go in and help them.
1:19
And for the people who've worked at this type of knowledge based consultancy, you know, the way that you,
1:24
you operate as a business is because you're a specialized in your domain, which in our experience is platform engineering and continuous delivery.
1:31
You can normally add quite a lot of value because the engineers at the our clients, while they're focusing on media or finance or healthcare.
1:39
But anyone who's tried to scale an organization like this beyond a handful of engineers knows
1:44
that it's really, really hard because as you get more and more people, it's really hard to keep your edge about being experts in that domain.
1:52
So you start to build systems for it. And two years ago, this is what our systems look like.
1:58
So we don't want to train our engineers internally. And the actual type of training it would be information on wikis.
2:05
It would be decks we'd run workshops, we'd do bootcamps with our engineers.
2:11
The other thing we had was a lot of text and spreadsheet based knowledge on what good looks like in platform engineering and continuous delivery.
2:19
So it would be what features does a development platform have? What how? What type of testing are you doing in your path to production?
2:26
And we'd have quick ways of evaluating whether what people were doing based on where they'd want to get to.
2:31
And then the third was like reference material. So because we kept on building the same type of thing over and over again
2:37
at our clients, then we'd end up with roadmaps, predefined roadmaps with epics and milestones and tasks for building certain types of things.
2:45
And that naturally led to reference implementations. So for key features that we kept building and building again for different clients,
2:52
we'd end up with some kind of reference implementation we could bring in.
2:57
That is not where we're at today, though. And, you know, the premise of this talk is we probably wouldn't be where we're at today without AI.
3:03
So if I take the training that used to be wikis, decks and workshops, that right now is an internal interactive training platform.
3:10
So all the engineers are going to join our company. They go and learn about continuous delivery and platform engineering. They learn about a concept,
3:16
say versioning and promotion or different types of testing. So you can release your software more quickly.
3:22
And then we have software which provisions them a realistic environment to try that skill out. So your training is normally made up of like showing something, telling something.
3:30
But now we have an interactive training platform that can do the thing. So like an example would be it automatically provisions them a GitHub
3:37
repository, an environment like a namespace and Kubernetes plus say a cloud account, and then the software
3:43
running in the background, which is checking that they've done the thing, you know, like deployed, just deployed an immutable version artifact.
3:51
The processes, which used to be lots of wiki pages and spreadsheets and all engineers love wiki pages and spreadsheets,
3:57
is now like an interactive tool, which all of our engineers use to track the maturity of various things that we are specialists in all of our all of our clients.
4:05
So it could be security, it could be security, could be application architecture for continuous delivery.
4:10
It could be the types of testing or promotion you did and the reference implementation.
4:17
So the roadmaps and developer platform features, well we still use those with enterprise clients, but we use them
4:23
to build an off the shelf developer platform for like smaller companies. So rather than just working with huge companies, we now work with small companies
4:29
where we can install this into their cloud provider, and they can get some of the benefits that the big companies would normally spend
4:35
millions and millions of pounds building internally. And just to add on some more fun, that internal tool has become a SaaS.
4:42
So now our actual enterprise clients can log in themselves and reasonably complex to to do that.
4:48
And then the product which we built, which is for small to medium enterprises, well, we are actually its best customer because when we built it,
4:55
I wasn't thinking we're going to use this to build all of our products, but now we do. So we use that as a as a customer.
5:01
And just to give you a flavor of what this looks like, well, one of the managed services which we which we host, this is a margin.
5:07
This is what I mean by insights. So being able to quickly see the maturity of various stages of the path to production and across lots of different components,
5:14
and then the developer platform, this is the user interface for it, where I can see which version of which my components is in different
5:21
environments as part of the path to production. That's not that interesting. That's just what we build.
5:27
I think the important thing is, is we're building two types of systems, right? There's systems which manage very sensitive data.
5:34
If any of our clients were to any of the data which we have in the first system that I described would be leaked or exposed in
5:41
some way, that would probably be the end of our relationship with that client. And then the other product manages people's production environment.
5:48
So the impact of it going wrong is pretty severe. So that's kind of the impact I want to talk about.
5:53
I'm talking about building a product team, which is going to manage a system where it really matters if it goes wrong, rather than like working on lots of other small projects,
6:02
which might be like websites with basic, basic functionality. And that is in the context of everything we're hearing today in an industry,
6:10
and especially on social media, that we're rapidly approaching a world where software no human has ever seen reaches production.
6:18
And I don't think this is hypothetical anymore. And I'm definitely not talking about our side projects
6:24
or the like, one person businesses where they're quickly idea and putting something in production. I think that's totally fine.
6:30
I'm talking about the systems which have your credit card details, or they manage or your personal or healthcare data.
6:36
And this actually starts to scare me, right? Because code can do anything with the data it has access to.
6:43
And if we're not looking at that code, that could do anything. So certainly if my bank started doing this or my healthcare
6:50
company started doing this, I'd start to be pretty scared. And I think some of the optimism optimism is real, right?
6:56
Everyone is kind of worked in this area for the last 24 months, especially the last nine months, the last 12 months.
7:03
AI is absolutely fantastic at writing code, right when we started building these products, it was 50 over 50.
7:10
Whether the code would compile with these tools right now, it's going to compile. It's probably going to work, and I'm more just spending time refining how it works.
7:18
So it is pretty amazing. That said, I don't think it's a good at other parts of the software delivery lifecycle.
7:24
So my question for you to think about is, is writing code the hardest part of software engineering?
7:29
Because I definitely think that's the best thing right now that AI is good at. And is software engineering really the hardest part of a successful
7:36
digital product and building and building products, by which I mean like adopted features in production
7:42
that potentially generate revenue or whatever impact. And I wanted to get I'm sure this isn't going to be
7:48
the only time you're going to be asked this today. And I've seen this been asked to quite a few conferences up until now, but I wanted to get an idea of
7:53
who's in the audience. So for the code or digital product that you're working on,
7:59
that is what you're paid for. I know we've all got like at least 20 side projects recording on at the weekend, so not those.
8:06
What percentage of your code is currently written by AI? And it's good to exercise. So I'm going to get you to put your hand up.
8:13
Who here has less than 10% of the code written by AI for their real system.
8:18
So we've got one two any like full manual coders? I didn't put zero as an option.
8:24
No no no no. But under 10%. What about under 50%.
8:29
So I'd say maybe 20%. What about 90? Most under 9,100%.
8:37
There's quite a few of the 100%. We're there. I would say for us we're at 90 to 100%. It's very, very rare in my company that any of the engineers
8:45
actually writing code. I would say, though, that this is a vanity metric which people like to talk about,
8:51
because out of all that code, and if I look in my main branch of any of our products, it's all written by now,
8:57
but how much of it was written without any human intervention with software engineers like using critical thinking?
9:02
And I think the answer is probably like zero zero for 30. Certainly, certainly.
9:09
I would say that my experience of the last of the last year or so is AI is an amplifier. So for the things that we did really well as a company,
9:16
it allows us to do it much quicker, right, for the things that we did really badly, which we're trying to improve on.
9:21
And many of the like the topic of this talk, then all it's done is amplify the things that we didn't do so well.
9:26
And for me, it's really enabled, like delivery focused engineers. So people are really focusing on getting working software adopted in production.
9:34
It's really like being the game changer for us. And my company certainly wouldn't be in the position it is right now
9:39
if AI didn't exist, because we couldn't have afforded probably to hire a ten person product team to two years ago.
9:47
What about this question, which is slightly more controversial? I'm going to see if we get to the same kind of answers. So what?
9:52
The center of your code goes to production without humans ever seeing it. So the person prompting the agent, the automatic agent ending workflow, or maybe someone doing a review after that.
10:01
So does anyone have no code going to production? Actually that's more than 50. That's 50%.
10:09
So I'm pretty happy with that one actually. Does anyone get all the way to 100% where not a single human
10:15
sees the code which goes into production? Is anyone at the other extreme it gives me?
10:20
Oh, there's a couple. There's a couple. Well, it's good, it gives me hope. We're here. I would love to say actually 0%, even though like we're massively adopting
10:28
AI and we're massive at my company, I just couldn't guarantee it. So I went with the less than 10%.
10:34
And I think the thing which like worries me more and more important is what percentage of your code already, what percentage of your system goes to production
10:41
without a human understanding and understanding it? And to think about that, I wanted to like, dig into
10:48
and start to think about what we actually do to build a digital product. So we produced code for a long time, digital assets,
10:56
and we end up with a product. And the producer is up until recently been a human
11:01
flesh and blood product owners, QAS developers. It was it was a team. And the thing we produce is a digital asset, right?
11:08
It's code. It's an artifact. It's verification. It could be the testing. It could be the monitoring and alerting. It could be the documentation.
11:14
So this is where we're at a couple of years ago now the production of our digital product is very much becoming a black box
11:21
to all of us. Right. So you could be using some agent workflow. You could be using Codex, or Claude Code, some kind of autonomous agent.
11:27
But I'm not too worried about this. Right. Because I'm still producing my digital product, which I own at the end of it, and I understand it.
11:34
But of course, it's a slippery slope which we're all being pushed into doing, you know, go faster, go faster, go faster.
11:39
So at some point it becomes this where we don't understand really how it's being produced and we don't actually understand
11:45
the thing that's being produced. But don't worry, because obviously the answer to this is we look at the verification.
11:51
Right? So as long as you understand the black box tests of the thing now no longer understand, it's okay.
11:56
If I understand, say, my acceptance tests, my functional test, it's doing the right thing, then everything is okay.
12:02
But when people do this, what I find is it quickly becomes this, then quickly becomes this, then quickly becomes this.
12:07
And the no one stands a thing. What's going on? So my first tip, and the thing which we've tried to work on recently inside
12:14
my organization, is to not delegate our systems thinking to agents. So I'm not going as far to say as everyone understands every single line of code,
12:21
but let's not delegate systems thinking to agents. So I want to give you a concrete example of a change in our delivery process
12:27
that we made recently. So here's a very simplistic architecture diagram of one of our managed
12:32
managed services. We've got back private backends like training pulse insights teams. We've got a public front end and some kind of authentication service.
12:40
What it does doesn't really matter, but this is something our clients just log into, right. They have no idea how it's implemented.
12:46
And if they ever knew how it was implemented, it's probably because we, you know, we broke it somehow. On the other side is something we deploy actually at our clients.
12:53
And this is an intentional system design because it is it has access to their data,
12:58
and it does lots of processing where the clients would not want that data to leave their premise, their, their network.
13:04
So it has its own front end now. Lots and lots of features. Keep on getting requested that require this connection, right?
13:11
Some of the functionality we've got in the managed managed service and then combining it somehow with the client side
13:17
agent, which is running and collecting and processing data. Now, I could just describe the feature I want, the feature I want
13:26
which would combine this, and I'm pretty confident that our agentic workflow would build it. And then maybe a pull request is going to land, which is maybe
13:34
7000, 7000 changes. And then what would I be reviewing it for? Well, I first want to reviewing it for the systems thinking.
13:41
So here's some questions which I just threw together about what I'd want to know about this change. How does the client side connect to the manage?
13:48
What does it connect to? How does it and authorize? Because this is a client side component. Talking to a multi-tenant managed service, what parts of the managed service
13:57
are exposed to the internet? We're very careful about not exposing things. You know, do we ever share an API which is used by a human usable front end
14:04
versus like an agent system? What data can pass from the client and the managed? What data? Compassion manages the client.
14:10
There are different deployment mechanisms, right? We do continuous delivery virtually every commit for the managed service.
14:16
But the client side, that means that we need we need to do something on our client. And maybe that might get updated once a week because it's deployed
14:23
deployed to their systems. So that's the type of thinking I definitely want to keep into the engineers that I work with.
14:29
So one thing we do now is when we're planning whatever work we're going to do in the next week is if we think there's a system level decision that always comes as a completely separate
14:37
pull request in something called an architectural decision record. If you've not come across those, Google them. It's about documenting your technical decisions
14:44
along with your code so that you can. Someone can quickly learn why we made the decision, so we don't keep on discussing them again.
14:51
And we've always used ADR, or at least for a very long time. And when we first adopted agentic development, all of the agents loved writing aids.
14:59
They were very good at seeing that we had ADRs. So they wrote more ADRs, and our ADR has got longer and more verbose. Another single human understood them, which completely defeated the point
15:06
of having them. So what we did is we said from now on, we're going to start with the ADR. I, me as a human, I'm going to spend a lot of time reviewing it.
15:14
I want diagrams, I want them to be visual so I can I can understand them. And then humans reviewing them can really put a lot of effort
15:20
into reviewing those architectural decision records. And once you've got those agents are really, really good
15:27
at reviewing implementations against well-structured architectural decision records, not only when you eventually land
15:33
the implementation, but all of the follow up requests then. Because one thing I don't think humans are good at is keeping all of those aids in your head,
15:41
and then subsequent pull requests, which subtly, perhaps change your system architecture. You might not realize that something's happened.
15:47
Something's happening like a new API is exposed. But what we actually do is have the ads constantly reviewed
15:52
against all of the poor requests that come in. So that's kind of my first tip about not delegating systems thinking to agents.
15:59
The next thing I wanted to dig a bit deeper into is have a real think about the dependency you want to put on the producer of your digital product.
16:08
So if we go back to this diagram and we've accepted that, maybe we don't understand how agent workflows actually produce code.
16:15
If we were to break it down a bit more. So I'm breaking down the producer box into three things. We've heard the first one, I've called it interface,
16:22
but in most places we'll call it harness, like in the keynote. So there's an interface for how you do that, right?
16:27
That could be Claude Code. It could be Claude Code. It could be Codex. It could be some automatic workflow based off your, your your GitHub issues.
16:36
Then you've got the thing which is hosting your model. Right. So that could be directly it could be the Anthropic API, but you could be hosting your own.
16:42
You could be using a third party which reached between them. And then you've got your model. So really your black box is made up of three things that you don't understand.
16:50
It's called code. It's an API which perhaps at 330 on an afternoon stops working. Anyone experienced that? Does anyone feel the most productive?
16:57
Once the Americans wake up and and make the Anthropic APIs. Go down? And then you've got the model, which obviously you don't understand.
17:04
I'm not saying you only see on this day, if anyone wants to explain how opus works to me, I'm very happy to hear it.
17:10
So we can choose not to be quite so coupled to that workflow. We can use a harness which is open source.
17:16
What's the benefit of that? You know, when Anthropic goes down, I just switch to OpenAI with a single command and I carry on.
17:22
I obviously get different results. Every model gives you different results, but it's a good to have the way that you're building your digital product be able to flip between providers.
17:30
You could go as far as to hosting the models themselves. That limits the models. You could do use something like so,
17:35
and then if you want, you could use a model with open weights or at least an open source way, the way you that's trained.
17:41
I don't think any of that is that important, apart from being able to switch between providers very quickly.
17:47
If you've got a production outage and suddenly at the same time, let's say your favorite AI provider does,
17:52
and the only way your engineers can debug production is with that model. Good luck. I think it's more important that you end up understanding the product
17:59
that's developed, because they can't take that away from you. I don't think it's produced that. It's your intellectual property.
18:05
It's a whole different ball game, though. If you build interactions into your product, then then you've got another black box inside your black box.
18:13
So vendor lock in is fine as part of your development process. Maybe we've all done it.
18:18
Cloud providers, roles, all sorts of things, but make it a conscious choice in your organization and understand the consequences of that producer
18:26
going down at key points for your business. The next thing I want you to dig on is that the changes we've made to the flow
18:32
of how software development happens all the way from idea through to work in software in production, and actually one is set further.
18:38
So I'm talking from now on about like an existing product with real users with real data.
18:44
So we're not talking about like an existing like greenfield like prompts prompt off you go. And it's got users. So we have product management.
18:50
We have ideas. Anyone can have ideas in the company about how we evolve the software. We have product ownerships. That's coming up with a concrete plan for turning those ideas into taking what
18:58
we've got and modifying it and ending up with a hopefully a coherent product. We've got people who build it actually go off and execute it
19:04
with all the new tools, and often the step which is forgotten about, which is driving adoption and evaluating whether the idea was actually a good idea.
19:12
Right. Because every time we change our product, our digital product, it's an experiment. And there's no point doing experiments if you don't actually look at the result
19:19
and then learn from it. So all of this should feed back into that process. And that is the amazing thing about agent development, because some feedback
19:27
can be actioned right away. And if you have a good path to production for deploying the software as your users are starting to adopt it if you're sat with them, perhaps
19:34
if you're at a client, you can actually just change the software in real time and have it deployed through to your path to production.
19:41
And one thing that we noticed is the different stages of that path to production had different speed ups from AI.
19:47
So this is just our experience. Yours might be different. The building is where the order of magnitude has gone up, right?
19:53
If you give a senior software engineer like the time to just build features, they can build as many features as you want
19:58
right now, there might not be the right features. If we go to the product management, product ownership, we heavily use
20:04
AI there to to do product market research, research, to analyze user feedback, to build roadmaps, to refine issues.
20:12
But there's a lot of decisions to be made there. There's a huge number of decisions. It's much more important to decide what we're building, in what order.
20:20
And that is not something I delegate. So that's why we haven't found. We've got the same speed up as we did in building and this one for a while.
20:27
It's actually got harder, right? Because we're providing too many features to our clients sometimes in a great problem to have, isn't it?
20:34
Which can make adoption harder because we keep dropping new features before the previous ones. So I think look for friction in your process
20:41
is caused by different levels of acceleration, and you work out what your, your flow of software development is.
20:47
And one kind of tip that we've recently executed on is to have software engineers be directly responsible for adoption of the features they build.
20:55
Do not let them just go and build the next feature, because you end up with lots of features, which is essentially useless.
21:01
And if you don't do something like this, or you don't speed up product management in the same way as you do building, you have to expect software engineers
21:07
to build features that you do not need because it's fun, right? AI system development is fun, and the friction for an idea
21:13
turning into working software has gone down, so we often end up with features that we don't want. So the way I think about it right now and how the software engineers work in, in
21:22
my team is that we've merged together the friction of getting adoption with the building.
21:29
Right. So engineers aren't allowed to go and build the next feature until they've done everything they possibly could to get that feature adopted.
21:35
And I come from a like a software development background that became a platform engineer, and I really believe in the cultural side of DevOps.
21:42
And you build it, you run it with something which I would have said for many, many years and I really believe believed in. But for now, it's like you build it, you run it,
21:49
and you have to drive the adoption of that feature. Otherwise you just end up with too many features, unused features in production.
21:56
I'm now going to dive a little bit deeper into how the role of our software engineers have changed over the last year, and I'm going to break down what they do
22:03
into three, into three, into roughly three steps. So we're now just in the build box of the previous diagram.
22:08
So technical planning is the first part of actually building a feature. Architectural decisions testing strategy
22:15
how to integrate with third party and dependencies. That's where you're using a lot of your brain a brain. As a software engineer.
22:20
It's absolutely the thing we put into ADR, as I talked about at the start. Then we come to execute on said plan.
22:26
And obviously that's a bit that's got extremely good with AI. So code, code, code what needs to be nice and relaxing.
22:31
And then we refine. And for me the refinement is where the magic is up with AI, because we can quickly iterate on our ideas based on user feedback.
22:39
If people don't use things like superpowers, I would highly recommend it. That's the one that we use is obviously spec
22:46
driven frameworks that people use, but this kind of matches the brainstorming would be the technical planning, but don't delegate to it.
22:53
It's going to ask you lots of questions. It's going to make you feel very informed, but it's up to you to come up and take the right technical design.
22:58
And then obviously the writing and executing plans, if you haven't, if you haven't broken your software development flow into that.
23:04
So one of the key changes in how an engineer spend my time is previously, I'd have spent a short amount of time doing
23:11
technical planning, quite a long time relaxing with my cup of coffee coding. I found that quite therapeutic. And then doing that validate and deploy.
23:18
And most people feel like a superhero initially, right? Super powers is a very apt name because I can go so fast with AI
23:25
at the same time as anyone. Find AI in frustratingly slow, right? I've come up with the design. I've told you how to implement it.
23:33
Why does it take 30 minutes for you to go and like do that 4000 line change? Come on AI, so what do we actually do?
23:40
Everyone's probably gone and done this. That's my flow. I've compressed the coding. So what do we do once we've done the first technical planning.
23:46
Any guesses? Yeah we start another one. Good good good answer. And then we start another one. Right.
23:52
And we all ended up very very tired. So parallelism is definitely necessary in our engineering humbug.
23:58
We actually like almost Monday to everyone in my company is assigned multiple tasks at the same time.
24:03
But we have to be careful about it because what we found happened is if, let's say people had three complex tasks to do, like three features
24:10
which required the brain to think about the system architecture. The first one would be fantastic. The second one would be not so good.
24:16
By the time you got to the third one, it would be a load of rubbish. So even though we hadn't delegated our systems thinking to AI,
24:21
we've already used the brain, so it's going to come out a bit rubbish. So one of our kind of guiding principles is to work in parallel.
24:28
Absolutely. But only work on one complex task at a time. And we assign to label issues and things and say, yeah,
24:33
you can pick up these to let go while the agent is doing something else. Everything I've said so far is about the individual, right?
24:40
But I'd say the hardest part of this are a new way of building software is how to get a team to work together to solve problems with AI.
24:49
And I do think you need a team. As in, I want a team of people that can operate and evolve and maintain
24:56
like my digital product. I don't want one hero. I don't want some AI system that's not accountable. I want them to use AI as much as possible to build it.
25:03
But you know, people are the should be accountable and have like the real agency. So I'm sure a lot of people have heard of like the Amazon's
25:10
two pizza team keep team sizes down to like 6 to 8. Absolutely ludicrous idea as far as I was concerned, because
25:17
obviously if you've got eight people, you need eight pizzas to feed them. It's definitely two. I think American pizzas are bigger than us anyway.
25:25
Let's assume you can feed to a team with two pizzas, right? If you don't think about it, what's going to happen? Is this right?
25:31
Everyone's going to be addicted to their new game, which is, like I said, development. They're going to prompt, prompt and what's going to happen.
25:40
Lots of pull requests, 48 pull requests. And then someone is going to tell you that the most common complaint in
25:46
AI software, ISIS's software development is what is it? Reviews of the bottleneck.
25:52
This is crazy. I think this is crazy, right? Because we're complaining that we can build so much valuable software that we don't have the time to look at it.
25:59
And we've spent a couple of decades inventing practices to build a shared understanding of a system and maintain it.
26:06
Right. We're talking about XP pairing more being boomerangs. We did all this stuff with the goal of not having no knowledge side of it.
26:14
Right? I think this helps, right? Because if you put the friction of adoption directly to the engineers,
26:19
they don't build quite as much stuff in parallel, which is a good thing, because what you want is the outcome of the use of the software,
26:25
not just features in production. And like this is like I've gone through like most of the engineers I work with.
26:30
And you cannot get yourself worth from the features you prompt. This is not a new problem with AI. We've always struggled with people. Want to tip it up the code?
26:37
Get the commitment GitHub rather than review other people's stuff. But it's massively accelerated by AI as a as a bigger problem anyway.
26:45
So what have we done about it? So rather than having our normal steam sizes of 6 to 8 people, we've made them much, much smaller.
26:51
So they're now two utmost four. And we give them a mission. And their mission is based on adopted software by particular customers.
26:58
And you're not allowed to start the next feature unless you've done everything in your power. So if we're at a stand
27:03
up and you're telling me how great the next feature you're building is, if you haven't spoken to that customer about getting them to use the previous feature, that's not something we do anymore.
27:11
Which then means that that small sub stream needs to do the reviewing. Fix the bugs, gathering the user feedback.
27:17
The most important part of this though, is if we break that team of 6 to 8 people into sub streams of two of 2 to 4 is you get three pizzas,
27:25
because obviously you can't have a two different substitute share pizzas. The problem this produces, which is the same problem that we had
27:32
when we broke up, bigger teams like we broke up bigger teams into teams of 6 to 8 is they can go off in different directions.
27:37
They've got a mission, they've got focus. That's fantastic. So you really need to think about how you're going to do product ownership across these different streams,
27:44
let them work in isolation and let them just review their own stuff, but make sure that key architectural decisions are still reviewed by the right people, and make sure there's at least 1
27:52
or 2 people who are working across the streams and understand how everything's going to work together.
27:58
So a question I keep asking myself through all of this transformation is, has AI changed good engineering practices?
28:04
And, you know, this is a graph I've completely made up with no real data. But we start off with high velocity and then we get slower
28:11
and then we fix some stuff and then we get slower and then we fix some stuff, then we get slower, and then maybe we end up somewhere below what we started.
28:19
Right? So we start off conquering the world, and then eventually we end up at some some steady pace for a digital product.
28:25
So what causes this? Well, there's two answers. There's technical debt. That's the obvious one. And the other one is success. Obviously, success is not necessarily a bad thing.
28:32
When I say technical debt, it's things like longer testing cycles, more dependencies, harder to make code changes.
28:37
And obviously agents will have the same problems that humans have for modifying a code base in a safe way.
28:43
Success is going to be things like more customers, more deployments, larger data sets. So there's certain engineering practices which I think are even more important.
28:51
I've got more than I can cover in this talk, but I'm just going to cover a couple probably. Wonderful that I've got time for one minute.
28:59
There you go. One the first is system architecture really matters. I already talked about this, but why do we break things up
29:04
into loosely coupled services? Maybe a very important word. Loosely coupled. Otherwise you've just got a distributed mess, right?
29:10
It's for fast feedback cycles. If we're going to build more features, we're going to end up with larger systems. I'm talking about complex systems rather than just like,
29:16
say, trivial web, but it is imperative that we keep the feedback of each of those components very short.
29:22
It's 15 minutes for me, is absolute maximum for running a full suite of tests, which gives me a high level of confidence that that thing works.
29:29
The other thing is, if we're going to modify software more quickly, blast radius really matters. What is the worst thing that can go wrong
29:35
when one instance of a pipeline path to production happens? So and only really way to do that is to design your systems
29:41
so that if one of these components goes down, most of your product functionality still works. And I was going to go through an example of the types of tests we used.
29:48
But I'm not going to have time but feel talk to me after if you want to.
29:54
So I'm going to end on time with a few final thoughts, which is define your principles for using AI.
30:01
And by that I mean the stuff at the start. Decide what you want humans to understand versus agents decide
30:07
like what dependency or vendor lock in you're happy with. Identify your real bottleneck all the way from idea to adoption.
30:15
Do not get sucked in by vanity metrics that measure one little bit in the middle, like token usage or commits or PR merged.
30:22
There has to be a features in production is what I used to use before AI. That's not good enough anymore.
30:27
You have toes, features actually have to be used and you have to expose those to your engineers. Or certainly that's what what we're trying to find your definition of good
30:34
in a very concrete way, and then have AI to be held accountable to it.
30:39
I'm turning this talk into a few articles for our website. If you want us to send you them.
30:44
There's a QR code there because we love QR codes these days. They made a real comeback. And thank you very much for taking the time to listen.
30:58
Christopher,

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️



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

#### Method note
- **Reduced-depth, transcript-native read.** This source has **NO Knox §3 Review 001** (paste block empty) and **NO screenshot**. Per operator directive I processed §1 verbatim only — there is no Review 001 strategic read to *formalize*, so this Review 003 is an **originating** structured extraction (flagged reduced-depth), not a formalization. Anchors are transcript-native (verbatim ≤12 words + `mm:ss`). All dispositions remain PROPOSE-ONLY (`GRD-036`); no domain object minted, no contract/thesis/registry/matrix edited, file not renamed.
- **Dedup baseline:** wave-6 registry `EVRUN-2026-000011` §1–§5 (esp. batch-1 through-line + batch-2 F1/F5 families) + `EVRUN-2026-000001 §2A` + wave-5 + `EVRUN-2026-000004 §0.5` retired terms. Expected 0 net-new — **confirmed 0 net-new DOMAIN objects.**
- **What this source IS:** a practitioner engineering-leader re-deriving OMNI physics (GRD-033 vendor-replaceability, projection≠authority, capability≠authority, blast-radius authority, human-owns-systems-reasoning) in platform-engineering / continuous-delivery language, on two explicitly high-consequence systems (sensitive client data + client production estates) — with **healthcare named as the scary case**. Highest-signal keeper = *don't delegate systems thinking to agents* + *ADR-first as the human-authored authority artifact agents are held accountable to*.
- **5 anti-flattening rules honored:** keeper insights preserved in their structural form (not paraphrased to abstraction); every candidate gets an explicit disposition; every counterweight preserved, none inverted; no silent omission; reduced-depth disclosed.

#### Concept cluster table
`# | concept | OMNI meaning | homes | anchor (verbatim ≤12w + ts) | doctrine × build | weight | status`

| # | concept | OMNI meaning | homes | anchor | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| 1 | **Don't delegate systems thinking to agents** | System-level reasoning (boundaries, data-flow, authority, blast radius) stays human/owning-domain even at 90–100% AI-written code; AI writes lines, human owns the system. Re-derives REV-184 world-model-honesty + AI-never-care-authority. | thesis §B · REV-184 · CNS(orchestrates-not-owns) · Care · Agent Runtime | "let's not delegate systems thinking to agents" 12:14 | AFFIRM × partial(no agent runtime) | spine (affirms canon) | watch |
| 2 | **ADR-first: human-authored decision record as the authority artifact** | The architectural decision record is authored + heavily human-reviewed FIRST (diagrams, legible); agents are then good at reviewing implementations *against* it, and ADRs are continuously re-checked against every incoming PR to catch silent architecture drift (a new API exposed). Agent-generated verbose ADRs no human understands defeat the purpose. | Build-OS · architecture-memory control plane · document-governance-taxonomy · Agent Runtime | "start with the ADR… I'm going to spend a lot of time reviewing it" 15:06 | AFFIRM × partial | vocabulary (sharpening) | watch |
| 3 | **Producer = black box of 3 (harness/interface · model-host · model)** | Decompose the "producer" of your digital product; each layer is separately un-owned/replaceable; use an open-source harness so you can switch providers on a single command when one goes down. Direct re-derivation of GRD-033 (rail-agnostic, vendor-replaceable, semantics-stable) + §B model gateway + harness. | §B model gateway (GRD-033) · Agent Runtime & Harness · Platform Loop | "your black box is made up of three things" 16:42 | AFFIRM × partial(no model gateway) | vocabulary | watch |
| 4 | **Black box inside a black box (product-embedded model)** | Vendor lock-in in your *dev process* is a conscious tolerable choice; building the model INTO your *product* creates a second, deeper un-owned black box — govern it as a conscious decision with understood degraded-operation consequences. | §B · Reactor(consequence) · Platform Loop · product | "another black box inside your black box" 18:05 | AFFIRM × partial | vocabulary | watch |
| 5 | **Vanity metrics: %-code-by-AI, tokens, commits, PRs** | "% of code written by AI" (and token usage / commits / PRs merged) is a projection over one middle slice, not the owning fitness measure; the real question = how much reached prod without human critical thinking (~"zero for 30"), and the real metric = adopted, actually-used features / outcomes. Re-derives projection≠authority + REV-184 + metric_definition_is_strategy. | REV-184 · Reactor · Care(outcome-reads) · guardrail digest | "this is a vanity metric which people like to talk about" 8:45 | AFFIRM × n/a | spine (affirms canon) | watch |
| 6 | **Outcome over output; engineer owns adoption** | Different SDLC stages get different AI speedups → friction (build 10×, product-judgment not); engineers must not start the next feature until they've done everything to get the last one *adopted* — "you build it, you run it, you drive the adoption." Too many features actively *hurts* adoption. Re-derives Care/Platform Prove→Learn (outcome, not features-in-prod). | Care operating model · Platform Loop(Prove/Learn) · Build-OS · product | "you have to drive the adoption of that feature" 21:42 | AFFIRM × partial | vocabulary (sharpening) | watch |
| 7 | **Parallelism yes, but one complex task per human** | The human systems-thinking budget is scarce + degrades across parallel complex tasks (1st great → 3rd rubbish) even when not delegated to AI; parallelize simple/labeled work, serialize the brain-work. Sharpens 290 `delegation_depth/fanout_budget` + 285 parallel-agents≠independence at the *human-cognition* layer. | Agent Runtime & Harness · CNS · Build-OS | "only work on one complex task at a time" 24:26 | PARTIAL × partial | low-authority-watch | investigate |
| 8 | **Reviews-as-bottleneck is a symptom, not the law; small mission-streams** | "Reviews are the bottleneck" complaint is suspect — we invented decades of practice (XP pairing, mob) to build shared understanding; fix = 2–4-person sub-streams each owning an *adoption mission* + self-review, WITH cross-stream architects keeping coherence + key ADRs reviewed by the right people. Team = governance structure for shared understanding, not a harness for throughput. | Build-OS · Platform Loop · RBAC/review-authority · (pairs 312 team-as-governance) | "reviews are the bottleneck… I think this is crazy" 25:52 | AFFIRM × partial | vocabulary | watch |
| 9 | **Architecture matters MORE under AI: loosely-coupled + fast feedback + blast radius** | More features + more success = larger systems; loosely-coupled services give short feedback (≤15-min full test suite) + blast-radius containment (one component down → most of product still works). Re-derives blast-radius authority (REV-184) + Platform Loop + GRD-033 seam discipline. | Platform Loop · REV-184(blast radius) · thesis §B · domain-contracts(seams) | "blast radius really matters" 29:29 | AFFIRM × partial | vocabulary | watch |
| 10 | **Cross-boundary systems-review questions (before the diff)** | For a client-side component talking to a multi-tenant managed service: how does it connect/authenticate/authorize; what is internet-exposed; is a human-front-end API reused by an agent system; what data crosses each way; different deploy cadences. These are reviewed as a *separate ADR PR*, not by reading a 7000-line implementation diff. §C-flavored (cross-operator boundary) + capability≠authority + human-usable-API≠agent-API. | security/assurance · §C(boundary, PAUSED) · RBAC/Identity · Reactor | "what parts of the managed service are exposed to the internet" 13:50 | AFFIRM × partial | vocabulary | watch (§C pressure) |
| 11 | **Define principles for AI use; concrete definition of "good," hold AI accountable to it** | Decide up front what humans must understand vs agents; identify the *real* bottleneck idea→adoption (not the middle slice); write a concrete definition of "good" and hold AI accountable to it. Re-derives governance-by-design (principle→control) + candidate≠commit. | Build-OS · Reactor · governance-by-design · guardrail digest | "find your definition of good in a very concrete way" 30:34 | AFFIRM × partial | vocabulary | watch |

#### Net-new primitive dispositions (EVERY candidate → dedup / investigate / reject)
Candidate concepts surfaced (11 clusters). **Genuine net-new DOMAIN objects = 0.** Dispositions:
1. systems-thinking-not-delegated → **dedup** (REV-184 world-model-honesty + AI-never-care-authority + CNS-orchestrates-not-owns). No mint.
2. ADR-first authority artifact → **dedup** (architecture-memory control plane + document-governance taxonomy + candidate≠commit). Pairs w/ 312 `decision_carrying_artifact` + wave-6 F1 compiler family. No mint; route Build-OS/doc-gov watch.
3. producer-black-box-of-3 (harness/model-host/model) → **dedup** (GRD-033 + §B model gateway + 290 harness). No mint.
4. black-box-inside-black-box (product-embedded model) → **dedup** (GRD-033 + consequence-floor). No mint.
5. vanity-metrics reject → **dedup** (projection≠authority + REV-184 + `metric_definition_is_strategy`). No mint.
6. outcome-over-output / engineer-owns-adoption → **dedup** (Prove→Learn loop + Care outcome-reads). No mint.
7. one-complex-task-per-human (human cognition budget) → **INVESTIGATE** (route: Agent Runtime & Harness watch, alongside 290 `delegation_depth/fanout_budget`; distinct axis = *human* reasoning budget, not agent fanout). Sharpening candidate, not a domain object.
8. small mission-streams / reviews-as-symptom → **dedup** (team-as-governance = 312 convergence; RBAC review-authority; shared-understanding). No mint.
9. architecture-matters-more / loosely-coupled / blast-radius → **dedup** (REV-184 blast-radius authority + Platform Loop + seam discipline). No mint.
10. cross-boundary systems-review questions → **INVESTIGATE** (route: §C boundary PAUSED pressure + security/RBAC; sharpens human-usable-API≠agent-API seam). Not minted.
11. define-principles / concrete-good → **dedup** (governance-by-design + candidate≠commit). No mint.

**Net-new count: 0 domain objects · 2 investigate-lane routes (both sharpenings, not mints): human-cognition-budget (→Agent Runtime), cross-boundary-review-set (→§C/security).**

#### Counterweights (EVERY caution preserved — never inverted)
1. **Writing code is NOT the hardest part of software engineering, and software engineering is not the hardest part of a successful product** — AI is best at exactly the part that matters least on its own ("is writing code the hardest part?" 7:24). Preserve.
2. **"% code written by AI" is a vanity metric** — high AI-authorship ≠ high autonomy-without-thinking; the honest number for code reaching prod with zero human critical thinking is ~0/30 (8:51–9:09). Preserve; do NOT invert into "measure AI authorship."
3. **AI is an amplifier — it accelerates what you do badly too** (9:09). Preserve.
4. **Cannot honestly guarantee 0% unseen-code-to-prod even while heavily adopting AI** — operator honesty over aspiration (10:20–10:34). Preserve.
5. **"Understanding the verification/tests" is NOT a substitute for understanding the system** — black-box-tests-of-a-black-box regresses until "no one understands a thing" (11:51–12:07). Preserve.
6. **More features can HURT adoption** — over-shipping before prior features are adopted makes adoption harder (20:27–20:41). Preserve; do NOT invert into "more features = more value."
7. **Reviews-as-the-bottleneck framing is itself suspect** — "complaining that we can build so much valuable software that we don't have time to look at it… this is crazy" (25:52). Preserve.
8. **Vendor lock-in is acceptable ONLY as a conscious, consequence-understood choice**; product-embedded models are a deeper black box than dev-process lock-in (18:05–18:26). Preserve the asymmetry.
9. **Feature-in-production is no longer a good-enough success metric** — must be *used* features / outcomes (30:22–30:34). Preserve.

**0 counterweights inverted or dropped.**

#### Care implications
- **Healthcare is named as the scary case** ("if my… healthcare company started doing this, I'd start to be pretty scared," 6:43) — the "software no human has ever seen reaches production" fear is explicitly aimed at systems holding credit-card / personal / healthcare data. This is external practitioner corroboration of OMNI's *no-unseen-code / no-unowned-authority-for-consequential-systems* stance.
- **Systems-thinking-not-delegated + blast-radius-containment + cross-boundary-review-before-the-diff** map directly to care-grade: the clinical/authority reasoning and the boundary between a client-side (patient/operator-premise) component and a multi-tenant substrate must be human-reasoned, not inferred from a 7000-line agent diff.
- **Outcome-over-output** = the Care Prove→Learn read: a care change is an experiment; "features in production" ≠ care value; the durable read is adopted, safe, used outcome.
- **AI-amplifier caution** → in care, AI amplifies unsafe practice as readily as safe practice; the governed loop, not the model, must be the thing that scales.

#### Guardrail candidates → route `08` open-review → `06` digest (PROPOSE-ONLY; reviewer decides distinct-vs-sharpen)
- G-308-1: **Do not delegate systems thinking (boundaries, data-flow, authority, blast radius) to agents** — high AI code-authorship must not become delegated system ownership. (dedup vs REV-184 + AI-never-care-authority.)
- G-308-2: **The decision record (ADR) is a human-authored, human-reviewed authority artifact; an agent-generated record no human understands is governance theater** — agents may *check implementations against* it, not *author* the authority. (dedup vs candidate≠commit + 312 decision-carrying-artifact + wave-6 doc-gov guardrails.)
- G-308-3: **A cross-boundary / multi-tenant change is reviewed for the systems-and-security questions BEFORE the diff (as a separate decision artifact), never by reading the 7000-line implementation** — human-usable-API ≠ agent-API. (dedup vs 285/286 tool-visible≠authorized + §C boundary.)
- G-308-4: **%-code-by-AI, token usage, commits, and PRs-merged are vanity projections; the owning metric is adopted, used outcome** (dedup vs REV-184 + `metric_definition_is_strategy` + convergence 2).
- G-308-5: **Building a model INTO the product is a black-box-inside-a-black-box; vendor lock-in must be a conscious, degraded-operation-understood choice** (dedup vs GRD-033 + consequence-floor).
- G-308-6: **Design for blast radius: one component down → most product still works; keep feedback cycles short (≤15-min test suite)** (dedup vs REV-184 blast-radius authority).
- G-308-7: **Parallelize simple work but serialize the human systems-thinking budget — one complex task at a time; the human reasoning budget is scarce and degrades** (new sharpening at the human-cognition layer; pairs 290 fanout-budget).
- G-308-8: **Understanding the tests is not understanding the system; black-box tests of a black box compound until no one understands anything** (dedup vs projection≠authority + verification-judgment).

#### Reread flags
- **No Knox §3 Review 001 and no screenshot** → this Review 003 is reduced-depth + originating (not a formalization). If this source approaches promotion-adjacency, obtain a Knox strategic read + screenshot metadata and re-run at full depth.
- **Producer-black-box-of-3** (harness/model-host/model) should be reconciled with 290 (Deep Agents harness) + §B model gateway when the Agent-Runtime map / model-gateway is authored — same seam, different vocabulary; avoid double-counting.
- **`one-complex-task-per-human`** is a genuinely useful *human-side* companion to the agent-side fanout budget (290) — carry as a distinct sharpening, not a duplicate.
- Metadata is `inferred` (name from host intro only); verify speaker/title/URL if promoted.

#### One-line hard read
> **The durable engineering discipline in the AI era is refusing to delegate systems thinking, boundary reasoning, and the definition of "good" (adopted outcomes, not code volume) to the producer — while keeping the producer itself a replaceable, blast-radius-contained black box you own the *output* of, never a black box you build *into* your product.**

&nbsp;

---

#### Review 003 — RESTORATION ADDENDUM (capping agent, 2026-07-19) · `layer: analysis_nonbinding` · append-only
> **Why this exists.** The original 308 Review 003 (above) was written *reduced-depth / transcript-native* because 308's Knox §3 Review 001 paste block was empty — its actual Knox read was **mis-pasted into `EVSRC-2026-000309`** (self-mislabeled `EVSRC-296`). The Wave-6 Capping Agent located that read, read it in full, and formalizes it here so the wave's fidelity gate is genuinely satisfied (keeper preserved in Review 003 per `00_pipeline_doctrine.md` semantic-fidelity gate). **The raw Batey Knox read verbatim currently lives in `309 §3 Review 001`** pending a physical operator re-paste into this file's §3 Review 001 (Nick's zone). This addendum recovers the *intelligence*; the re-paste is hygiene. PROPOSE-ONLY (`GRD-036`); 0 net-new DOMAIN objects (wave verdict holds).

**The Batey Knox read (4.9/5) named 3 architecture CANDIDATES + a verification-root principle + 6 sharpenings + 5 counterweights.** Formalized with dedup dispositions (every candidate → dedup / investigate / reject; nothing minted):

| # | Knox candidate / sharpening | disposition | home |
|---|---|---|---|
| 1 | **`system_understanding_record`** — accountable team's coherent model of boundaries / data-movement / authority / trust-boundaries / failure / deployment / blast-radius / recovery / conformance-evidence for a consequential change | **DEDUP → investigate-lane sharpening.** `EXISTS-AS` REV-184 world-model + `context_packet` + architecture-memory control plane; pairs w/ wave-6 **F1** (compiler/manifest) + 313 architecture-memory. NOT a domain. Keeper line: *"Implementation may be machine-generated; system accountability cannot be machine-orphaned."* | REV-184 · architecture-memory · Agent Runtime · Build-OS |
| 2 | **`cognitive_concurrency_budget`** — classify a human operator's capacity by work type (complex-reasoning / bounded-review / lightweight-supervisory / mechanical); machine concurrency expands faster than human comprehension; orchestration must budget *judgment*, not agent slots | **INVESTIGATE** (this is the `one-complex-task-per-human` sharpening the original 308 R003 already flagged — now Knox-named + sharpened). Route: **Agent Runtime & Harness** watch, as the *human-side* companion to 290 `delegation_depth/fanout_budget`. Explicit **care** relevance (Knox): one clinician facing many "decision-ready" candidates that each still need genuine thought. Not a domain. | Agent Runtime · CNS · Care |
| 3 | **`product_change_outcome_record`** — links product intent / hypothesis / adoption-owner / target-population / deployment-state / exposure-state / actual-use / burden / realized-effect / final-disposition; *deployment ≠ closure, usage ≠ closure* | **DEDUP → investigate-lane sharpening.** `EXISTS-AS` Care/Platform **Prove→Learn** loop + Care outcome-reads-original-context + REV-174 outcome-link + OFC `care_obligation`. Aligns w/ OMNI Reactor (candidate-value-until-adopted). NOT a domain. | Care · Platform Loop · REV-174 · OFC |
| 4 | **`architecture_conformance_gate`** — accepted architecture decision precedes implementation + remains continuously checked against every later change for drift | **DEDUP.** `EXISTS-AS` architecture-memory control plane + Build-OS + candidate≠commit + wave-6 **F1** (285/293 compiler). Keeper: *use agents to enforce architecture; do not treat generated architecture prose as evidence it was understood/accepted.* | architecture-memory · Build-OS · Agent Runtime |
| 5 | **verification-root principle** — every consequential assurance chain must terminate in evidence whose meaning/ownership/limits are understood *outside the generator being assessed*; **verification depth ≠ verification independence** (100 machine checks can share one blind spot) | **DEDUP → strong guardrail candidate.** `EXISTS-AS` FWREG-013 coverage-proof + wave-5 `illusion_of_correctness_guard` + parallel-agents≠evidentiary-independence. Route `08`→`06`. | REV-184/proof · guardrail digest · Agent Runtime |
| 6 | mission-cell topology · idea-to-outcome flow · provider-independent operating understanding · machine-speed blast-radius control | **DEDUP** (all `EXISTS-AS` Platform Loop + team-as-governance [312] + REV-184 blast-radius + GRD-033 harness-portability + Prove/Learn). Section-sharpenings, not objects. | Platform Loop · Build-OS · §B |

**Net-new DOMAIN objects from the Batey Knox read: 0** (confirms the wave verdict). 1 genuinely-useful investigate-lane route confirmed (`cognitive_concurrency_budget`, human-cognition-budget → Agent Runtime), 2 dedup-as-sharpening candidates (system_understanding_record, product_change_outcome_record), 1 guardrail candidate (verification-root).

**Counterweights — Knox-VALIDATED (upgrades the original list from transcript-native to Knox-confirmed; 0 inverted):**
1. AI-generated-code % (and tokens/commits/PRs) is a **vanity metric** — high authorship ≠ system understanding ≠ value.
2. **Human code review is neither necessary nor sufficient** for system accountability — understanding the *system* is the standard.
3. **Parallel machine work must not exceed human systems-thinking capacity** (the concurrency budget).
4. **Deployment ≠ adoption; adoption ≠ verified value** — a feature in production is still a *candidate* value proposition.
5. **Cheap implementation increases the importance of disciplined architecture, prioritization, and *non-action*** (blast-radius, loose coupling, saying no) — directly affirms REV-184 non-action-as-commit.
> All 5 preserved; **0 inverted.** These reconcile with — and Knox-validate — the 9 transcript-native counterweights in the original 308 Review 003.

**Fidelity outcome:** 308 `semantic_fidelity` flips **`faithful (bounded)` → `restored`**; `reread_when_knox` RESOLVED (the Knox read was read + formalized). Residual = operator hygiene only (physically re-paste the raw Batey Knox read 309→308 §3 Review 001). No caution inverted; no candidate minted; §C untouched (PAUSED).

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` (cross-source fold pending — parent) · source_anchor_ledger: `EVRUN-2026-000011_…_source_anchor_ledger_receipts_only.md` (receipts-only; anchors above are transcript-native) · per-source deep-read: §3 Review 003 (this file) · impact: `§B (GRD-033 harness/model-gateway) · REV-184 (systems-thinking/blast-radius) · Build-OS (ADR-first) · Platform Loop (loosely-coupled/feedback) · Care (outcome-over-output; healthcare named) · §C (cross-boundary review — PAUSED, pressure only) · security/RBAC` · promotion: `watch` (0 net-new; 2 investigate-lane sharpenings; propose-only)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, third batch; `EVRUN-2026-000011`).
- `2026-07-19` — Opus §3 Review 003 formal extraction (reduced-depth transcript-native: NO Knox Review 001, NO screenshot). §0/§0.1 filled `inferred`; status → `analyzed (awaiting 2nd-reader fidelity sign-off)`. 11 clusters, 0 net-new DOMAIN objects, 2 investigate-lane sharpenings, 9 counterweights preserved (0 inverted), 8 guardrail candidates → `08`. §4 pointers filled. PROPOSE-ONLY (`GRD-036`/`GRD-044`); no shared run artifact edited; file not renamed.
- `2026-07-19` — **Wave-6 Capping Agent RESTORATION ADDENDUM** appended to §3 Review 003. Located the mis-pasted Batey Knox read (4.9/5) in `309 §3 Review 001`, read it in full, and formalized it at full depth (3 candidates dispositioned + verification-root principle + 6 sharpenings, all dedup — 0 mint; 5 counterweights Knox-validated, 0 inverted). `semantic_fidelity` **`faithful (bounded)` → `restored`**; `reread_when_knox` RESOLVED. Operator-hygiene residual: physically re-paste the raw Batey Knox read `309 §3 Review 001` → `308 §3 Review 001` (Nick's paste zone). Append-only; PROPOSE-ONLY; 0 net-new DOMAIN; §C PAUSED.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

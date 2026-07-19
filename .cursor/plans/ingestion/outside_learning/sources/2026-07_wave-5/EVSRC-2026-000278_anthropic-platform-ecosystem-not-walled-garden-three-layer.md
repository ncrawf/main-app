# EVSRC-2026-000278 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-5 source (`EVSRC-2026-000278_anthropic-platform-ecosystem-not-walled-garden-three-layer.md`); analyzed 2026-07-15 (`EVRUN-2026-000006`). ★★ Operator-flagged top-5 source (Review 002 — "DNA of OMNI, incorporate at high levels"); revisit source. Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000278`  ·  filename: `EVSRC-2026-000278_anthropic-platform-ecosystem-not-walled-garden-three-layer.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=vPnVTHYplrQ`  ·  source_title: `Anthropic's Katelyn Lesse & Angela Jiang: Building an Ecosystem, not a Walled Garden`  ·  slug: `anthropic-platform-ecosystem-not-walled-garden-three-layer`
- channel_or_org: `Sequoia Capital`  ·  speaker: `Katelyn Lesse + Angela Jiang (Anthropic platform) × Sonya Huang + Lauren Reeder (Sequoia)`  ·  published_at: `2026-07-14`
- captured_at: `2026-07-15`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `first-party platform-strategy interview (enterprise agent-platform architecture / developer ecosystem / runtime + harness roadmap)`  ·  source_reliability_context: `authoritative vendor practitioners on Anthropic's own platform direction — HIGH authority on Anthropic architecture/priorities, MEDIUM as universal doctrine (model-vendor + token-economics incentives)`  ·  topic_tags_light: `[AI_platform, internal_external_platform, knowledge_layer, execution_layer, coordination_layer, meta_harness, strategies, tokens_not_fungible, primitives, skills, MCP, build_vs_buy, open_ecosystem, model_routing, context_economics, last_mile_custom_software]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Katelyn Lesse` · role_in_source: `interviewee` · affiliation_at_publication: `Anthropic (Platform)` · speaker_type: `vendor practitioner (platform builder)` · authority_context: `HIGH for Anthropic's platform architecture + roadmap (internal+external platform; knowledge→execution→coordination; primitives/skills/MCP). Vendor/token-economics incentives; medium authority as universal doctrine (GRD-039).` · identity_confidence: `high`
  - name: `Angela Jiang` · role_in_source: `interviewee` · affiliation_at_publication: `Anthropic (Platform)` · speaker_type: `vendor practitioner (platform builder)` · authority_context: `co-builder of Anthropic's platform; same posture/limits.` · identity_confidence: `high`
  - name: `Sonya Huang + Lauren Reeder` · role_in_source: `interviewers / hosts` · affiliation_at_publication: `Sequoia Capital` · speaker_type: `investor` · authority_context: `investor framing toward platform strategy / ecosystem / moat.` · identity_confidence: `high`
- publisher / channel: `Sequoia Capital (YouTube)`  ·  interviewer / moderator / host: `Sonya Huang + Lauren Reeder`
- event_context: `Sequoia interview with Anthropic's platform team on building an ecosystem (not a walled garden).`  ·  perspective / conflict notes: `first-party vendor on its own platform — import the three-layer stack + meta-harness + internal=external + open-ecosystem architecture; treat product endorsements + token-economics claims as vendor strategy; OMNI keeps sovereignty over meaning/authority (GRD-039). Operator (Review 002) flags top-5, "DNA of OMNI," revisit.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat (metadata in Knox read) · [x] **Knox strategic read → §3 Review 001** · [x] gut note → §3 Review 002 ("DNA of OMNI" directive)
**Agent (Opus) does:** [x] id+filename (renamed to firm slug) · [x] §0 metadata · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [~] update EVRUN concept registry (cross-source — folded at wave synthesis) · [x] update coverage matrix · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video


Chapters

Transcript
Search transcript
Search transcript
Chapter 1: Introduction
0:00The last layer of abstraction on top of this is probably the coordination layer.
0:033 secondsSo you have knowledge and you have execution, you have coordination. And at the coordination layer, we're beginning to think of these things called like strategies where basically it's almost
0:1010 secondslike a meta harness. The true low-level harness is designed for execution. But the next one is about okay if tokens aren't really fungeible and you need to
0:1818 secondsgive them different jobs like maybe some this token is advising versus this token is executing you want to start composing these like these kind of orchestrated strategies that go together and they
0:2626 secondsshould sit on top of all these things because at the end of the day you still need to execute and the execution still needs to know what to do. So everything in theory should kind of like ladder together. And so I think you know if you
0:3535 secondswere to look at our road map and the maybe kind of project forward a little bit where you kind of expect us to go.
0:3939 secondsWe'll move more and more from the knowledge layer to the execution layer and from the execution layer to the kind of coordination layer in terms of the abstractions that you can see us put out.
1:041 minute, 4 secondsCaitlyn and Angela, thank you so much for joining us today. Lauren and I are thrilled to have you here. You are responsible for building Anthropics platform and so you are responsible for
1:131 minute, 13 secondsbuilding what I think is one of the most important if not the most important developer platform in the world and we are really excited to interview you today to understand more about what's
1:211 minute, 21 secondsahead and so maybe just to get started can you give us the context of you know what is anthropic platform and where do you sit within anthropic? Yeah. So
1:291 minute, 29 secondsplatform is both our externally facing APIs, our developer platform that people build on top of when they want to build applications and system that systems
1:371 minute, 37 secondsthat access cloud's intelligence as well as internally um we run our product infrastructure and basically we're the
1:441 minute, 44 secondslayer that our apps build on top of uh internally as well.
Chapter 2: Two North Stars
1:491 minute, 49 secondsAwesome. What's your northstar as a team?
1:511 minute, 51 secondsIt's a great question. We actually because we have both internal and external. We actually kind of have like two north stars which is probably like you know you' be like why there should
1:581 minute, 58 secondsonly be one north star but um no we different planetary system.
2:022 minutes, 2 secondsYes exactly they're separate solar system so it's fine. Um but uh on the internal side like we really want to provide is like literally as much leverage as possible for our internal
2:102 minutes, 10 secondsteams to be able to ship like AGI pill products. Um and we want them to be able to move fast, be able to have reliable
2:182 minutes, 18 secondslike great like uh platform uh to be able to build on top of. But I think that key bit about speed is like really intentional for us and we really really
2:262 minutes, 26 secondscare about that internally. Externally um we actually have a lot more like complicated set of things. Um but one of the true norths that we have there is to
Chapter 3: External Builders And Primitives
2:332 minutes, 33 secondsbe able to basically give any builder the tools to be able to work with claude to build whatever they want to build.
2:392 minutes, 39 secondsAnd so it's a bit of a broad statement but as a result that uh boils it itself down into you know being wherever that business is. Like we really care about
2:472 minutes, 47 secondslike bringing our platform really really close to that business. This is why we spend a lot of time with the hyperscalers integrating really closely uh directly with them like AWS, Google,
2:552 minutes, 55 secondsso on and so forth. Um and it is a lot of like primitives that we end up creating. We want people to be able to express what they think their product
3:043 minutes, 4 secondsshould be. We want them to be able to almost do like custom software in their own way. You know, like in this new world with AI, uh what used to be
3:113 minutes, 11 secondsprobably economically impossible was that last mile of of custom software now in theory should be like very very achievable. Um, and we want to give them
3:203 minutes, 20 secondsall the tools and all the capabilities to go and do that. And so sometimes that comes in the form of primitives and APIs and higher order abstractions. And sometimes that comes in the form of just
3:283 minutes, 28 secondslike standards. Uh, so for example like skills and MCP. Um, those are things just like cloud needs them to be useful and we can just give them out to the
3:363 minutes, 36 secondsrest of the ecosystem, work with everyone to help you create those things and get the best out of cloud. So um I would say externally you know we really
3:433 minutes, 43 secondsare oriented around just helping you just be able to build but internally that orientation while still existing is probably more you know specified towards
3:523 minutes, 52 secondsspeed and being able to move really quickly.
Chapter 4: What To Externalize
3:543 minutes, 54 secondsHow do you decide what goes into the platform what gets externalized and what doesn't to decide what products should be available?
4:014 minutes, 1 secondYeah I mean we generally try to have a philosophy that we try to be consistent across the board. It's actually one of the reasons uh why we do internal and
4:094 minutes, 9 secondsexternal. Um there's plenty of other you know platform businesses and constructs where you actually like bifrocate these two things. Um for us we kind of try to
4:164 minutes, 16 secondsintentionally keep it equal and then as a result we try to hold this philosophy as much as we can around like you know for any builder internal or external even though if our internal builders
4:254 minutes, 25 secondsmight have some slightly different requirements in the same way any user would have slightly different requirements. Uh we want to have the same primitives that are available to everyone. And one of the maybe the
4:334 minutes, 33 secondsoverarching thesis for that is that we've just seen like the capabilities of these models just grow and such just exponential and it's really hard to figure out like a longlasting form
4:414 minutes, 41 secondsfactor. I think two years ago we were all like everything's chat and now everyone's like forget chat and just like agents and like there's going to be another form factor, another form
4:484 minutes, 48 secondsfactor. Um and we kind of imagine that like constantly evolving. And so the best way for us to kind of enable that for everyone and also ourselves is to
4:574 minutes, 57 secondsactually build a really robust platform that gives people those kinds of like tools to figure out what those form factors are. And I don't think we by any means feel like we're the only ones
5:045 minutes, 4 secondscapable of figuring out that form factor like not at all. In fact, the more democratization we can do on that and help people and allow people to experiment, I think the the more those
5:125 minutes, 12 secondsform factors will actually kind of naturally come out of the market.
5:155 minutes, 15 secondsYeah. Yeah. And I think within our team, we've we've had moments where we're experimenting even with just like a packaging up of our primitives in a
5:225 minutes, 22 secondsdifferent sort of higher order way. And we've thought about, okay, cool. We've solved this exact type of problem with this product that we've built into the
5:305 minutes, 30 secondsworld. And so we can go and dog food it for ourselves, but we'd never want to fall into this trap of like we're overindexed on the problem as it needs
5:375 minutes, 37 secondsto be solved for an internal user. Like because exactly what Angela said, internal users have very specific requirements. External users have very specific requirements and so if you
5:465 minutes, 46 secondsoverindex on one or the other, you fall into a trap. So a lot of the time what we'll do is dog food something internally at the same time that we open
5:535 minutes, 53 secondsup early access of some sort with external customers so that we can kind of get a range of feedback and bring those things back into the platform.
Chapter 5: From Messages To Agents
6:006 minutesI'd love to talk about the higher levels of abstraction that you discussed. So I guess at the base level this is just you know raw access to CLA opus or whatever
6:096 minutes, 9 secondstokens. How do you think about the I guess the layer cake of abstractions above that?
6:146 minutes, 14 secondsYeah, if you look back um so when I joined Anthropic around a year ago um the platform was basically just the
6:216 minutes, 21 secondsmessages API. It was a messages API. Um you know we had come out with standards like MCP. We obviously have developer
6:286 minutes, 28 secondstooling around our SDKs and our docs and our console and things like this. But for the most part it was a stateless API. Um, and what's interesting to
6:366 minutes, 36 secondsAngela's point on form factors evolving over time is we found a lot of our customers solving the same problems over and over again that we also were solving
6:446 minutes, 44 secondsover and over again around as the models got better at running for longer and working with more contexts at a given time. You want to build agents that can
6:536 minutes, 53 secondssucceed in a kind of longunning context and even a remote context that doesn't necessarily have a human in the loop.
6:596 minutes, 59 secondsAnd so we found that we could piece together our primitives and stand up all the same infrastructure that we're finding ourselves standing up internally
7:077 minutes, 7 secondsto power our own products and arrive at some higher order abstractions that let you do more agentic work out of the box.
7:147 minutes, 14 secondsAnd the problems that we're solving for you are, you know, infrastructure being kind of a hard thing to deal with. like how do you figure out spawning sandboxes
7:227 minutes, 22 secondsthat are going to have the right governance and security and like you know spin them up and spin them down when you need to or the storage around
7:297 minutes, 29 secondstranscript sessions so that you can resume a session if you stop it and pick it back up later. Um so that infrastructure is a big thing that we wanted to be able to provide more of out of the box and we do more of that today.
7:397 minutes, 39 secondsUm, and then the second thing just being harnesses and harness engineering.
7:447 minutes, 44 secondsThere's a lot of thought and energy going into how do I do my prompt caching and how do I manage my context window as well as how do I actually just get more
7:517 minutes, 51 secondsintelligence out of the model um, and how do I manage my costs and things like that. So we've kind of packaged up our primitives a bit more in tune with the
8:018 minutes, 1 secondproblems that we found ourselves solving to provide more of these things out of the box for people so that they can if they're building systems for themselves
8:088 minutes, 8 secondsinternally, if they're building products, they can just be more focused on the problems that they want to be solving and if they want to offload some aspects of those problems to us, they can. Um, and that's kind of the ethos.
Chapter 6: Managed Agents Adoption
8:198 minutes, 19 secondsAnd are your customers generally choosing to opt from the grab bag of stuff that you offer or are they like how how often are they opting into the just the the managed agents offering? I guess just take care of it all for me.
8:298 minutes, 29 secondsUm it varies by like the the user group.
8:328 minutes, 32 secondsSo like for I would say you know like really AI native startups like the ones who are like tinkering and like experimenting at a really low layer they're just going to go for the
8:408 minutes, 40 secondsprimitives. Um and then for everyone else and these are kind of classic like more like enterprises or areas where it's like the purpose of the startup or the philosophy behind the startup isn't
8:498 minutes, 49 secondsnecessarily to optimize on um some kind of hill climbing piece. It's more like stringing together a bunch of workflows and you know providing unique user value
8:568 minutes, 56 secondsat uh to that user. For those people um you know it's just kind of not their core competency. It's not where they want to focus their time and resources and they reach much more for these kind
9:049 minutes, 4 secondsof like higher order like package offerings.
Chapter 7: Three Layer Cake
9:079 minutes, 7 secondsWhat are some examples of the primitives you've released at different layers in the last few months? We've seen a few of them. Would love to hear.
9:139 minutes, 13 secondsYeah. I think maybe one framing I would give um for some of the constructs that Caitlin was talking about is like and this is a bit of an oversimplification, but effectively there's approximately
9:229 minutes, 22 secondslike three like layers of this cake. At the very bottom is just kind of like like knowledge. And so at this layer like in many ways it's it's knowledge
9:309 minutes, 30 secondsabout the model. It's knowledge about the things that the model needs. And it's just like the ability to know how to actually do something with claude is maybe the way I'd phrase that. And so
9:379 minutes, 37 secondsthere the primitives that we have spent more and more time on uh have been actually things of the past because like we still evolve them but they tend to be
9:459 minutes, 45 secondsa little bit more baked. Like for example there's very specific shapes and parameters we put on the messages API and it's more like trying to expressly
9:539 minutes, 53 secondslike uh showcase Claude's like design like Claude the model's uh actual design the way it thinks the way it respects
10:0010 minutescertain parameters the way it kind of like um will do tool calls like all of those different pieces. And then we started standardizing like tools. And then we started standardizing bits and
10:0910 minutes, 9 secondspieces of like context that you could put in at different moments in time which is concretely like skills and like memory. And so those are like the kind of like knowledge layer type of
10:1710 minutes, 17 secondsabstractions that we've put out over the past um I guess like year plus plus a bit. Um the next layer of abstraction that we've actually started to spend
Chapter 8: Execution Harnesses Explained
10:2510 minutes, 25 secondsmore and more of our time on is like once you kind of know stuff you then need to like execute. And so at the execution layer, that level of abstraction is the part that Caitlin was
10:3410 minutes, 34 secondstalking about around like we're doing these like higher order pieces, but like what are we putting higher order there?
10:3810 minutes, 38 secondsIt really is because you're now getting Claude to execute work. It's not just to know something, right? I can give it a question and give me an answer. You can put string a lot of that stuff together.
10:4710 minutes, 47 secondsUh but now if you need to execute like do work, give me the output, edit files in a bunch of different systems, that becomes a lot more complicated and
10:5410 minutes, 54 secondsrequires infrastructure to handle. And so that layer is basically I would say a low-level harness plus manage infrastructure as like the set of abstractions. Today we just like our
11:0311 minutes, 3 secondshighle product for that is called cloud manage agents. Um and so that's like a piece but we started to wrap more and more pieces in that. Um I think there's going to be a layer like on top of that
Chapter 9: Coordination Strategies Roadmap
11:1111 minutes, 11 secondswe have like some inklings of it we started to build towards but the last layer of abstraction on top of this is probably the coordination layer. So you have knowledge and you have execution
11:1911 minutes, 19 secondsyou have coordination. And at the coordination layer, um, we've started to expose some of these in ways that like aren't very obvious, but we're beginning to think of these things called like
11:2711 minutes, 27 secondsstrategies where basically it's almost like a meta harness, right? The harness, the true low-level harness is designed for execution. But the next one is about
11:3511 minutes, 35 secondsokay if tokens aren't really funible and you need to give them different jobs like maybe some this token is advising versus this token is executing this token is dreaming versus this token's
11:4411 minutes, 44 secondsexecuting so on and so forth you want to start composing these like these kind of orchestrated strategies that go together and they should sit on top of all these things because at the end of the day you
11:5211 minutes, 52 secondsstill need to execute and the execution still needs to know what to do so everything in theory should kind of like ladder together and so I think you know if you were to look at our road map and
12:0012 minutesthe maybe kind of project forward a little bit where you kind of expect us to go we'll move more and more from the knowledge layer to the execution layer and from the execution layer to the kind
12:0812 minutes, 8 secondsof coordination layer in terms of the abstractions that you can see us put out. That's a really cool.
Chapter 10: Ecosystem Standards And Safety
12:1312 minutes, 13 secondsHow do you think this all comes together into a broader ecosystem beyond just the things that you guys are building? How do you help support people building
12:2112 minutes, 21 secondsproducts on top of it and how do you help them get the most out of all these pieces?
12:2512 minutes, 25 secondsYeah, I think this is like super top of mind for us. like we really want to find a way to be to support as many people in doing this as we can. I think we're
12:3412 minutes, 34 secondsstill like learning like a lot of the industry like has evolved. We've seen, you know, a lot of different pieces um get spun up and spun down. And I think
12:4212 minutes, 42 secondsthe the operative part for for Caitlyn and I has been in the category of like making sure at least at the base layer that we provide as many primitives
12:5112 minutes, 51 secondsacross the board as possible. So you know this kind of like yeah like knowledge execution coordination layer we want to give all of that out to everyone so that people can start to
12:5912 minutes, 59 secondscompose and create on top of that. Um and that's just from like I think pure builder kind of point of view. Then there's a point of view around like how do you kind of like plug in with us
13:0713 minutes, 7 secondsright like we're also building firstparty products of our own. We've also created some ways to embed natively with us like for example connectors which are built on top of the MCP spec.
13:1713 minutes, 17 secondsUm, and we try to be more open about those types of things. And we're starting to figure out like what are the right bits and pieces, but what we're really trying to do is get to a place
13:2413 minutes, 24 secondswhere, you know, in a company is able to get created and built on uh they can build whatever products that they want. They can build agents if they need to.
13:3213 minutes, 32 secondsAnd then those agents and those products could be things that could plug into other agents. Some of those agents could be cloud agents, some of those agents could be other people's agents. Um, but
13:4113 minutes, 41 secondswe want to be able to enable that kind of like transactability across the board. And then I think in order for all of that to kind of ultimately be true, there is a bit around like standard
13:5013 minutes, 50 secondssetting and I think there's the traditional standard setting which is around you know how do systems interoperate um and that's uh you know things that you've kind of seen us do
13:5713 minutes, 57 secondswith like skills and MCP but they're at again like the builder layer. I think at a higher order layer there's also a bit around interoperability and standard
14:0414 minutes, 4 secondssetting around how do we all kind of like treat safety together and you know we've talked to a lot of these companies and this is less from you know
14:1114 minutes, 11 secondsphilosophies aside just more like no one really wants to have technology that's like for example like doing negative things on um on their service right so
14:2114 minutes, 21 secondscyber I think is a great example of this uh you want to protect your own systems from like negative actors or or bad actors and so like these kinds of like
14:2914 minutes, 29 secondsstandard settings of like how we find ways to partner with more and more people to be like, yeah, we all kind of want to make sure our critical
14:3614 minutes, 36 secondsinfrastructure is good. We all want to prevent like fraud or any of those things from happening and how can we work better with each of these members.
14:4314 minutes, 43 secondsI think on the last layer, we're still kind of like we're still evolving and I think we're still very much like trying to find ways that we can be better and work with the rest of the industry to
14:5214 minutes, 52 secondsbring people along and and work with them. Um but those are kind of like you know the higher order primitives or pieces that we wish to kind of like be
14:5914 minutes, 59 secondsin place. Um so they can work with folks to to ultimately solve this. I think if I were to like take a step back at the end of the day on on all of these things
15:0615 minutes, 6 secondsum you know like this technology is so transformative. Uh and if it's a little bit like electricity in the sense like before electricity there was just like
15:1415 minutes, 14 secondsyou know you had to like have a candle and it was like you can only do so many things. Um, but with electricity, the reason why it's such a transforming
15:2215 minutes, 22 secondstechnology for all of us and so greatly of a utility is because you can actually like wire it into everything. Everyone is able to actually access it. We also
15:2915 minutes, 29 secondshave like standards and ways to plug in and do all the pieces that we need. And that's not something that anybody can do by themselves. They always have to work with the ecosystem and work with
15:3715 minutes, 37 secondspartners um to figure out a path forward.
Chapter 11: Open Ecosystem Not Walled
15:3915 minutes, 39 secondsHow do you think about the philosophy of building an open ecosystem uh versus a walled garden? And you know, how do you think about what products are
15:4815 minutes, 48 secondsreally important for you to own first party versus where you're perfectly happy to plug into other components of the ecosystem?
15:5415 minutes, 54 secondsYeah, there's so maybe in using Angela's kind of layered cake that we talked about a little bit earlier, you'll see that on some pieces of this like
16:0216 minutes, 2 secondsexecution for example, um what we've done within something like cloud managed agents and I think over time you'll see us try to make this a little bit more
16:1016 minutes, 10 secondsmodular. We actually aren't precious about you should run these things on our infrastructure like it should be sandboxes that we control or it should
16:1716 minutes, 17 secondsbe a storage layer that we control. Um well we actually like for example we launched self-hosted sandboxes and we partnered with modal and versel and
16:2616 minutes, 26 secondscloudflare and a bunch of other folks um even like Amazon's new microVMs um to have a first class offering where you can go plug any of those things in.
16:3616 minutes, 36 secondsUm, we launched MCP tunnels so that you can call out to your MCP servers that are behind your firewall, right? And um, be able to punch through there. And so
16:4516 minutes, 45 secondsfor some of these things, we, you know, the weather, whether it runs on our infrastructure versus somebody else's infrastructure is actually not important to us because the thing that's important
16:5316 minutes, 53 secondsto us is more that the architecture of how you put together these agents in a way that will be powerful, in a way that
16:5916 minutes, 59 secondswill be reliable and scalable. um we have strong opinions on that and you can kind of just conform to the interfaces that we put out there and plug those
17:0817 minutes, 8 secondsthings in. Um and we think that that generally is a thing that works really well. Yeah, I think on the the kind of like verticals where we might build
Chapter 12: Vertical Products And Form Factors
17:1517 minutes, 15 secondsproducts um you know I think we we kind of have like two frames here. The first one is we are always trying to figure
17:2217 minutes, 22 secondsout a form factor like an evolving form factor. We by the way don't think form factors are like static. It's like a dynamic thing. So what might be awesome
17:2917 minutes, 29 secondsfor one year's worth of AI development will probably not be awesome for the next year's worth. And we just kind of try to have that mentality. We tell the team uh just overall like around
17:3817 minutes, 38 secondsanthropic. Everyone's always trying to be like is this agi pill enough? Um and then we always have this mentality of like you know we built something it works it was cool for a year and maybe
17:4717 minutes, 47 secondsit's not the right next thing and so throw it away try again. Um and we we tell like platform users the same thing.
17:5217 minutes, 52 secondsum I just think that's probably just like you know attached to the technology but so yeah one one principle is like trying to always constantly find this new form factor. So sometimes we'll like
18:0018 minuteslaunch products in certain areas to try to showcase a new type of form factor.
18:0418 minutes, 4 secondsUm, it's not necessarily because we think it's like the biggest ham or the most important thing to go after, but sometimes you're like, okay, this is like always been a really difficult thing and people have always
18:1218 minutes, 12 secondscommunicated this way or tried some things this way and can we show that maybe there's a slightly different way.
18:1818 minutes, 18 secondsUm, and because the model capabilities are are so advanced now, can we try to express it a bit differently? Um, what's an example of that?
18:2518 minutes, 25 secondsYeah, you know, like uh cloud design is a little bit of of that way. I think depending on how you squint, you might see it as like a way that we kind of
18:3218 minutes, 32 secondsgoing into design as as like you know one of the verticals. But more often than not, it's like if you take a look at what we're trying to do with that
18:4018 minutes, 40 secondsproduct, there's a couple of like decisions that were made in there. The first one is that like you can actually try to offload more and more and more to Claude. Um, and so it tries to be kind
18:4918 minutes, 49 secondsof opinionated on like, you know, just just like talk to it and like let it really try to figure out. And yes, you can still edit it and then do these kinds of things, but kind of like discourage a little of that and more
18:5718 minutes, 57 secondsjust like let just talk to Claude to go figure it out. Um, the second thing was it was really trying to express that actually like code is a is a a way to
19:0619 minutes, 6 secondssolve for things that you wouldn't normally think would be the way. So a lot of people who have built kind of generative um you know like slide decks or designs or whatever um will pick uh
19:1519 minutes, 15 secondsthe way of like they have like some kind of design system you integrate against design system. It's almost the traditional like classic wissywig style of designing something. And with like
19:2519 minutes, 25 secondsquad design, it was like okay, can we try to just like use code purely have Claude generate that code and would it
19:3219 minutes, 32 secondslike do a good job? And we found through some experiments early on. It's like actually it looks like it can kind of do that and how can we kind of showcase
19:3919 minutes, 39 secondsthat uh to the world. So that's like an example. We have a lot of other internal projects and this kind of falls in the category of like expressing form factor.
19:4619 minutes, 46 secondsWe'll all try it out internally. it'll be super cool for like two weeks and then we move on to the next thing. We never even ship the thing frankly. But yeah, we actually do a lot of product
19:5319 minutes, 53 secondsexperimentation in that area and that's like our labs team. And then there's like the second category which is that we actually do look at TAM like we're a business. We do look at TAM. We do look
20:0120 minutes, 1 secondat areas that we think uh you know there' be reasonable agentic like operations that would happen in those areas. Uh we do tend to have an
20:1020 minutes, 10 secondsorientation towards things that are more tokenheavy. And by token heavy or token hungry maybe is the way I would say that is like what we mean is like you know
20:1720 minutes, 17 secondsyou for spending once you spend a like call it like one turn you look at the end of that turn and you say like am I done or am I actually so glad that I did
20:2520 minutes, 25 secondsthat thing I want to do more of that thing we like industries where it's like the answer to that question you say I want to do more of that thing so coding is obviously the one that we all know
20:3320 minutes, 33 secondsand the great thing about coding is that what it's actually doing is that like once you finished a turn you look at that and you're like that was incredible I'm like unlocked I'm going to do like
20:4220 minutes, 42 secondsmore. I'm going to build more. I can do more. And there's other services where it's like actually when you finish that turn, you completed the job and you just move on. You know what I mean? Um, and
20:5020 minutes, 50 secondsso we tend to like go into the ones that are a bit more like there's this kind of like iterative flow. You're going to build more, generate more together. Um, and then the last angle that we kind of
20:5820 minutes, 58 secondstake a look at is just sort of like, you know, there's going to be certain business functions that we're like, they are the buyer that we like to go to. We want to help them optimize their
21:0621 minutes, 6 secondsworkflows, help them create better products there. And I think we've been pretty transparent with some of the verticalization. Like we've done like finance, we've done like legal um and
21:1421 minutes, 14 secondswe've tried to kind of like narrow on into specific areas where we feel like by having the right context and the right tools and putting it together in a good form factor is probably useful um for us to to be able to do.
21:2521 minutes, 25 secondsAnd in each of those areas, we do we're trying to do a bit of like showing the art of the possible across all the different ways that you would accomplish
21:3321 minutes, 33 secondsthose outcomes. And so for you know like finance for example is a good one. Um, you know, we you could be a company that
21:4121 minutes, 41 secondssolves problems in finance and you could build directly on the messages API and you can just get some tokens and you can build everything else on top or you
21:4921 minutes, 49 secondscould be someone who builds on cloud managed agents. You can get a lot more out of the box or you could say I'm going to build a plug-in that or like a
21:5621 minutes, 56 secondsconnector right that's going to sit within one of our products and within those form factors. When we did recently, we launched like claude for financial services is like, "Okay, cool.
22:0622 minutes, 6 secondsWe've got packages of skills and things like this that you could choose to use within our product, within other people's products. We even launch like cookbooks on here's how you would use
22:1422 minutes, 14 secondscloud managed agents to go and do these things." And so, I think for us, it's all kind of an experimentation around like, you know, we provide people all
22:2322 minutes, 23 secondsthese different pieces and see kind of where they run with it. And then sometimes we put together products that are just packaging of all of these
Chapter 13: Claude Tag Under The Hood
22:3022 minutes, 30 secondsthings like claw tag I think is a really good example like we had been seeing people in the industry go and say like Shopify did this with River um Square Block recently did this with Builderbot.
22:4122 minutes, 41 secondsUm, there's like a few of these examples where people said, "I'm going to pro I'm going to build like an agentic platform internal to my company and I'm going to try to give it all the right context and
22:5022 minutes, 50 secondsI'm going to make it accessible from Slack or from various other um, you know, platforms that you'd want it to be accessible at." And I think Claude tag
22:5822 minutes, 58 secondswas very much a packaging of all those same things that anybody could choose to build something similar but this is how we're kind of like well this is how
23:0623 minutes, 6 secondswe're doing it internally and if you would like to just kind of plug in and go here's what that looks like.
23:1123 minutes, 11 secondsWhat do you think people misunderstood about cloud tag? Because there was all this like ruckus about oh my gosh it's just a slackbot like tell tell us what the magic of tag is.
23:1923 minutes, 19 secondsNo I think it's a great question. Um and I I do think it actually showcases a little bit of where maybe the future could be going. Um, yeah. I think like
23:2623 minutes, 26 secondsthe I think if you look at products in the past, people are like, "Oh, you really attach to like the form or the the UI almost, right? Like it looks like this." So, it's like super cool. Um, and
23:3523 minutes, 35 secondsI think when you look at like tag, uh, it like yeah, like the way you interact with it is that you like literally tag it in Slack. Uh, and so yeah, that is
23:4323 minutes, 43 secondslike the interface, but that's not really the important part. The important part, um, is all the kind of like
23:5023 minutes, 50 secondscontext engineering and like architecture that we put underneath the hood. So that tag just works. It really should just like just feel like a
23:5923 minutes, 59 secondsco-orker like a co, you know, if you go to a company and you onboard and a co-orker comes into your channel and then you can chat with it. It's proactive. It figured out like what's
24:0724 minutes, 7 secondslike useful you and um it just gets stuff like done for you. And so if you think about, you know, especially like nontechnical audiences, this is like
24:1524 minutes, 15 secondsit's a huge unlock. you just you literally create a channel and then you atclude or sometimes you don't even atclude and you're like hey I want to be able to do this and do that and I can't
24:2324 minutes, 23 secondsfigure out this and how do I actually like submit an expense report again and traditionally you think about how to solve that workflow you are going all over the place and you're talking to
24:3024 minutes, 30 secondsyour manager you're talking to your spin buddy and it's really really complicated and uh today now you just like go talk to cla tag and we do a lot of the hard
24:3924 minutes, 39 secondswork on doing the context engineering the proactivity a lot of the harness pieces I think Andre Kaparthi said it really well it's like it's like an org level harness There's a lot of like
24:4724 minutes, 47 secondscomplexity baked into that like Kayla mentioned like you can use our APIs to go and construct that. You have to do a lot of the experimentation yourself obviously but this is like an
24:5424 minutes, 54 secondsopinionated take from anthropic on like how you can have this really awesome always on uh kind of agent for your
25:0125 minutes, 1 secondentire entire company. And the bit that's like futuristic I guess is like a lot of that complexity is actually like
25:0925 minutes, 9 secondsit's like an iceberg. is like all the stuff underneath it that's actually becoming the harder and harder and like useful part that we're trying to like
25:1625 minutes, 16 secondspush through. And I think we'll see more and more like that kind of like tip bit that's like outside in the water. It's just like the interface can actually
25:2425 minutes, 24 secondsconstantly swap like today, right? Like Slack is a place where a lot of people collaborate, a lot of business collaborate, but also a lot of people collaborate in teams and some people
25:3225 minutes, 32 secondscollaborate by a WhatsApp group um or they text each other or they may some people still email each other and like those could be the form factors that
25:3925 minutes, 39 secondsactually completely you can imagine agents just going there and being and they're almost taking up the same form factors as humans have taken up. It was almost like a very almost like boring
25:4825 minutes, 48 secondstake, but it's actually like I feel like the most like forward one because you want the agent and you want AI to basically be like another person and
25:5625 minutes, 56 secondsit's helping you, but it's like you know very intelligent can figure out all the context and you can always have it to be a really helpful assistant.
26:0326 minutes, 3 secondsTotally. You talked about context and then harnesses quite a bit and so your team is just, you know, has such an opinionated point of view on like what it takes to build an exceptional agent.
Chapter 14: Harness Best Practices
26:1226 minutes, 12 secondsI imagine a lot of that comes down to the context engineering and the harnesses. Totally.
26:1626 minutes, 16 secondsMaybe like what best practices or advice would you would you share with people about what you need to get right on the harness and what you need to get right on the context.
26:2426 minutes, 24 secondsYeah, I think so. It's interesting because we've kind of talked about, you know, we launched cloud manage agents as this like very generic but high
26:3326 minutes, 33 secondsperforming harness because we've done all the nitty-gritty work that's actually like really boring and not super interesting around how do you deal
26:4126 minutes, 41 secondswith prom caching? How do you deal with context management? You like clear old stuff out of the window. Sometimes you like call tools programmatically so you
26:4826 minutes, 48 secondsdon't pull everything into the context window and you can keep it clean.
26:5126 minutes, 51 secondsThere's a lot of those sort of details on the lower level harness layer. Um and I think honestly like best practices are just stuff like prom caching. Do it.
27:0127 minutes, 1 secondYou're going to save a lot of money and and token costs. Um, obviously like try to keep your context window clear and then putting those things together in uh
27:1027 minutes, 10 secondsa harness that will be performant is is you know sometimes specific to the task that you're trying to accomplish, right?
27:1827 minutes, 18 secondsAnd then of course evals. Um I'm surprised we got this far into this thing before one of us said the word evals, but like you need evals um to
27:2527 minutes, 25 secondsmake sure that what you're trying to accomplish is performance. Um, but I think where we're starting to go, and Angela mentioned this a little bit earlier, is more of a concept of
27:3427 minutes, 34 secondsstrategies or metah harnesses because I do think that yes, you can again make this lower level harness is going to be performant and maybe that's interesting
27:4227 minutes, 42 secondsfor you to do yourself or maybe not and you offload it to us. But this concept that you can take any given token and
27:4927 minutes, 49 secondsspend that token on just executing or you could take that same token and choose to actually reflect on your past agentic sessions and write learnings to
27:5827 minutes, 58 secondsmemory so that the next agent does a good job or you could take that token and advise with a bigger model so that a smaller model can execute and do a
28:0628 minutes, 6 secondsbetter job. Um or you can say execute execute and then like a greater comes in is like did you do a good job? No, you didn't try again. Right? And so I think
28:1528 minutes, 15 secondsthe the like interesting innovation is going to come more at that higher level on like the meta level, right? And I
28:2228 minutes, 22 secondsthink optimizing within those strategies is something that our team is really excited about and we're starting to do a lot of work there. Um, and I think a lot
28:3028 minutes, 30 secondsof other people are starting to feel really excited about this concept of strategies and like the jobs you give to tokens because again like yes, there's
28:3728 minutes, 37 secondsbest practices on stuff like your prom caching and exactly how you clear stuff out of your context window and how you write your evals and like a lot of things like this, but I I don't know
28:4628 minutes, 46 secondsthat there's necessarily so much juice to squeeze in a lot of cases out of that layer as compared to a layer higher than that.
28:5328 minutes, 53 secondsYeah. And one of the reasons for that I think is it has to do with the generations of the the models. I if you look like two years ago, a lot of the harness was like a scaffold to kind of
29:0129 minutes, 1 secondlike tell the model to go from point A to point B. And you had to like you really had to like build in a lot. You practically build one wall here and one
29:0829 minutes, 8 secondswall here. So like the thing would go in a straight line. And now the models are actually very very steerable. Um and so a lot of that steering you could just
29:1629 minutes, 16 secondsput in the prompt, right? Like go do go from point A to point B and the model like will go from point A to point B.
29:2329 minutes, 23 secondsSo, a lot of if you have harnesses um that are like designed to kind of do that kind of like steering, you can delete that part. Like that part we
29:3129 minutes, 31 secondsactually frequently encourage like you can delete part of those harnesses. I think various people have said things along those lines. And that's I think what people often times mean when they're like the model will kind of
29:3929 minutes, 39 secondsconsume some of the scaffolding and like in that sense like for sure if your scaffolding is telling it to go in direction um that it can just intelligently figure out like that I
29:4729 minutes, 47 secondsthink will increasingly continue to to be so. But as a result of of this, what the harness needs to start doing is more allow it to run longer. And so that's
29:5629 minutes, 56 secondswhere like that execution bit tends to be. I think like it sounds like a maybe somewhat silly point, but I do think it results in a lot of differences because because you can go in the direction that
30:0430 minutes, 4 secondsyou tell it to go. You obviously don't want it to stop at B. You're going to be like, "Okay, now go from B to C and then go to F and then go to Z and then come back to me on A." You know, something
30:1230 minutes, 12 secondsfunky like that. In order to be able to do a lot of those things, the kinds of harnesses that you do are less the steering harness and it's more like these kind of strategy harnesses that
30:2030 minutes, 20 secondsCaitlyn's mentioning, which allows you to operate at a slightly higher level of thinking which matches I think a lot of the intelligence gains that we're trying to see with the model.
30:2830 minutes, 28 secondsDo you think task specific harnesses make sense or a vertical specific or task specific harnesses?
30:3330 minutes, 33 secondsI think people have different opinions on this. Like our opinion is yes. I don't think there's like a general harness. I think there are some capabilities that are obviously very
30:4130 minutes, 41 secondsgeneral and they tend to like be very useful. Uh like coding is a capability that like is very useful because you can use it across so many things and
30:4830 minutes, 48 secondssoftware as uh you know just like eaten so much of of what is capable. So our ability to like write software is therefore useful. I think when you think
30:5630 minutes, 56 secondsabout like very very specific types of domains they're going to require like a couple of pieces of the harness to be sort of like customized. One of that uh
31:0531 minutes, 5 secondsI do think is how you choose to kind of like handle sort of like errors uh between when you do something and you hand something off to the model. Um, so
31:1331 minutes, 13 secondsin like domains where you require like an extreme level of verification, that logic of how you handle that ver like it again, I think it sounds small, but like
31:2131 minutes, 21 secondsI totally understand why some people feel like they really want to own the harness because tweaking that last bit will give you a ton of juice and especially domains like like legal and
31:2931 minutes, 29 secondsfinance where there's a lot of consequences um to you not getting it perfectly correct like is really going to matter and that's going to be the difference between your product and
31:3731 minutes, 37 secondssomeone else's product being the thing that the user ultimately uses. Um and then there are other domains for which like I would say uh it's not going to
31:4531 minutes, 45 secondsmatter as much because you're able to compress it into like a general model capability. So the tweaks that I guess like you know where we feel like the domain specificity is really going to
31:5431 minutes, 54 secondsmatter is the specific like verification logic between the model and your execution. And then um I think it's
32:0132 minutes, 1 secondgoing to be about like some of these kind of like higher order strategies on how well um you're able to actually like allocate your token budget. Um, I think
32:1032 minutes, 10 secondsthe context bit is actually a little like overdone. Like yes, you're going to like throw in context and like that's uh but any harness can actually handle a
32:1832 minutes, 18 secondslot of context and so that's just more like you have the data and if you have the data then obviously you're you're uniquely qualified to do something useful.
32:2432 minutes, 24 secondsYeah. And I think when people say harnesses they often mean a lot of different things and I think this is why in part there's so many different opinions on this. Like you can think of
32:3232 minutes, 32 secondsa harness as literally just like a loop um that's like okay cool like user model user model tool you know like that sort
32:4032 minutes, 40 secondsof thing. Um then you could think of the harness as also all of the tools that are packaged up with the harness right and and there's just like a lot of different definitions of these things.
32:5032 minutes, 50 secondsAnd I think the stuff that can be pretty generic and like less interesting to own and and deal with is what I was kind of saying earlier is like getting your
32:5832 minutes, 58 secondsprompt caching right right like maybe that is not the world's most interesting thing. Choosing to clear out old tool calls from the context window and and
33:0733 minutes, 7 secondsthings like that right are like maybe a little bit less interesting and you like go a layer higher into some of the stuff Angela's talking about and then you get into like okay yeah these are things that I might want to own and control.
33:1833 minutes, 18 secondsAnd so it's interesting with cloud manage agents like the thing that we built today, we call it higher order, but it's not really like that high order
33:2633 minutes, 26 secondsin the sense that you can choose to define all of the tools that you want to bring in as custom tools with the harness, right? And like we give you a
33:3433 minutes, 34 secondslot of knobs to control, you can define skills, you can do your system prompts, you can do a whole bunch of different things, MCP servers and things like this. And I think where you know we want
33:4233 minutes, 42 secondsto get to is a point where you can literally just tell an agent here's the outcome I want and here's the budget that I want to spend like ready set go and you may be like don't think about
33:5133 minutes, 51 secondsany of those things underneath. And so I think there's just a few different layers of this right that for certain things like you might want to sit at a
33:5833 minutes, 58 secondsdifferent layer of what you actually go and control. Um and you can probably get better outcomes within some of those layers by doing a little bit more optimization work.
34:0734 minutes, 7 secondsVery cool. One of the things I'm curious about and one that I love about infrastructure and platform teams is that you get to see what the most advanced users in the world are using
34:1534 minutes, 15 secondsand learn from them. I'm curious what are some things that you're seeing and learning from from the people building on your platform.
34:2134 minutes, 21 secondsThere's some people that have been doing some really funky ways of like handling context. Um we ourselves explore this a lot. That's actually like one of the
34:2934 minutes, 29 secondsreasons why TAG is like uh such a great product is like there's a lot of really awesome like context kind of engineering that that's happening. Um, we've seen
34:3634 minutes, 36 secondssome teams be really clever about like how they do that and they are able to kind of think through like, okay, if I have all these contacts in a bunch of
34:4434 minutes, 44 secondsdifferent places, how can I proactively go reach out to them? How can I try to generate enough like um permissions across each of them? So, and then feed
34:5234 minutes, 52 secondsthat all into like an agent. And it's interesting that like um I guess like this is kind of the level of innovation that like we're actually like very excited by. It doesn't express itself as
35:0035 minuteslike a completely different product form factor. Um, but what it actually does express itself as is like maximally useful to users and we've been seeing this more and more with like inter
35:0935 minutes, 9 secondsactually like internal use cases instead of like external ones. So like companies who are becoming more AI native basically they're the ones we're seeing
35:1635 minutes, 16 secondsincreasingly more and more innovation out of and so you know we've had like customers try to do this for their like they've built their own like custom SDLC
35:2435 minutes, 24 secondskind of setup in very very innovative ways. We've had uh ones who do that for like their entire back office and just like the kind of nuances of how they
35:3235 minutes, 32 secondslike stream in context I think has been like actually really interesting in terms of like how they've been putting together the pieces. So that's been like one category that's been like really
35:3935 minutes, 39 secondsreally like fascinating. Uh another category that's been like really interesting has actually been with companies that are dealing with like really old school software. And so
35:4835 minutes, 48 secondsthere's a lot of like healthcare companies um that we kind of engage with and you know like they're like the the systems I'm working with they don't even have APIs. like that's that's a a dream.
35:5735 minutes, 57 secondsUm and so you know how can they use computer use uh and things like this to be able to start to kind of automate and
36:0436 minutes, 4 secondscreate more connectivity with our systems. Um and that area of innovation I think has been really exciting. It's been really interesting to see people try all sorts of crazy stuff from like
36:1236 minutes, 12 secondstaking a laptop and trying to like run a bunch of things on it to autogenerate a bunch of things that then their agents can go and use. Um, and this has actually been probably like an area of
36:1936 minutes, 19 secondsum, I think a lot of innovation coming from a lot of our customers that we want to find ways to like support better and see like okay maybe there are like how
36:2636 minutes, 26 secondscan we make this easier for you? How can we help you with some standardization?
36:3136 minutes, 31 secondsHow can we get it so that you know like you can just have a spec and then claude can then respect it and so it's much easier for you to organically connect a lot of these things. But yeah, maybe the
36:3936 minutes, 39 secondsthe general theme I would just give you is like interestingly a lot of the innovation that's most exciting out there right now has been uh this kind of
36:4636 minutes, 46 secondslike context and connectivity layer which has been really fascinating.
36:4936 minutes, 49 secondsYeah. Like a good one in that um we were working with a customer who they've built some agents on cloud manage agents. They also have some agents they
36:5736 minutes, 57 secondsbuilt on other models and other platforms and they've kind of optimized each of these agents to be good at the things that they want. They want these agents to all be able to work well
37:0637 minutes, 6 secondstogether. Um, and they kind of were like, "Wow, Galaxy brain. Like, what if I expose an MCP server on top of this agent so that it can then go and like
37:1437 minutes, 14 secondshave this other agent call a tool on that agent, right? And and have these things just be more modular and be able to work together." And we were like, "Yeah, totally." And we sat down with
37:2237 minutes, 22 secondsthem and worked through it and and it worked perfectly and it was pretty cool.
37:2537 minutes, 25 secondsAnd so, we're seeing a lot of again that connectivity layer that I think is one of the cooler areas where people are innovating. But outside of that, one
37:3437 minutes, 34 secondsthing that has been cool is just seeing the shift in I guess like industry trends of where we're seeing a lot of our usage come from like talked a lot
37:4237 minutes, 42 secondsabout coding like coding as a category like of course absolutely explode in.
37:4537 minutes, 45 secondsThere's so much going on there and we're starting to see some of these emerging trends like more recently. Um, we're starting to see manufacturing really
37:5237 minutes, 52 secondspick up as just a category where people are building with AI and like one of our PMs like getting on a flight to Detroit to go like figure out what these
38:0138 minutes, 1 secondcustomers like what they need and what's going on. And so I think we're going to start to see a lot more just kind of like outside of the box of what people
38:0938 minutes, 9 secondsthink about today sort of use cases which we're really excited about. H it seems like there's now there's a we went through a token maxing moment of
Chapter 15: Token Costs And Whats Next
38:1638 minutes, 16 secondshistory and now there's like the token rationalization moments of history. What are your thoughts on that and like what what should companies be doing and then
38:2538 minutes, 25 secondshow how does the platform team think about uh enabling that?
38:2838 minutes, 28 secondsYeah, I mean it it makes sense. Uh it it makes sense from the high you start to rationalize. I I really like that framing and I think there's like a
38:3638 minutes, 36 secondscouple things that that are like top of mind for us on this front. I think like again it makes sense and as these models get more and more capable you're going to hit like levels of intelligence max
38:4338 minutes, 43 secondsmaxing that are like there that then you want to do the next kind of dimension and the next dimension after intelligence will either be cost or it will be speed. Um and you just kind of
38:5338 minutes, 53 secondsyou know go through that across all possible tax complexities in the distribution. Um, and as we kind of see that like happen, you know, something that's like really top of mind for us
39:0039 minutesthat we kind of try to spend some time with users on is like what you don't want to do is like stop AI usage, right?
39:0639 minutes, 6 secondsLike that's kind of the wrong move. And we do actually see some of our our customers do that. So oftent times the way that AI spend has erupted inside their company has been through some kind
39:1439 minutes, 14 secondsof like uh shadow IT, you know, like their employees just like want to use it, they find a way, they end up procuring it themselves, and before you know it, like half your or has like
39:2239 minutes, 22 secondsfound some way to have installed cloud code. And in that world it is kind of hard to to manage because these things are again like they're very token hungry ultimately. And so what we try to kind
39:3039 minutes, 30 secondsof encourage our customers is like okay you don't want to like stop the innovation like if you are getting returns on top of this you are shipping faster than ever before you can like run
39:3739 minutes, 37 secondsmore operationally like uh efficient then those are gains. And so the area that we actually try to encourage people is like if there is a way for you to
39:4639 minutes, 46 secondskind of construct again like a strategy that allows you to design an architecture that says like given a task assesses level of complexity. I mean I'm
39:5339 minutes, 53 secondseffectively describing a router but like there are ways to do this that are like I think a bit better now and so like this task comes in has a certain level of complexity for that level of
40:0140 minutes, 1 secondcomplexity like you can define some rules but for the most part right if it's like a hard task you should probably route that to like a big super smart model and if it's not a hard task
40:0940 minutes, 9 secondsyou can route that to like cheaper models um designing that I think has a little bit of like there's a lot of technical complexity in that but it's like very very doable and we actually
40:1740 minutes, 17 secondslike encourage people to try those kinds of things I think ultimately offer rather I I think within the clawed space it will like make sense. It's actually one
40:2540 minutes, 25 secondsof the strategies we imagine like designing because the way that we kind of thinking a lot of these things is like it almost feels like every month there was a new era of something. Um and
40:3340 minutes, 33 secondsif we take a step back like okay and this seems to be like really fast and so what are the different ways that are recomposable so we can redesign very
40:4040 minutes, 40 secondsquickly for any new whatever the cool thing is that month kind of like bit. Um and so this is like in that category of things where we feel like we can
40:4840 minutes, 48 secondsactually just like recompose a lot of our primitives and then design it. I think the bit that we do feel really strongly about on the model routing
40:5540 minutes, 55 secondsfront is like we are designing our platform for Claude and we want to make sure that Claude is great at like solving all these things. So we'll like
41:0341 minutes, 3 secondsrestrict to that space um rather than you know I don't think we're that interested in saying like okay and then you know you should route to a different model or whatever. Makes sense.
41:1141 minutes, 11 secondsYeah. and and well some of that too is just like I think we have a strong belief that harnesses and and just like the agentic layer should be tuned to the
41:1941 minutes, 19 secondsmodel family that you use it with. And so I think there was a period where people were kind of like yeah cool I can like build a harness and build an agent and then just like plug in a different
41:2841 minutes, 28 secondsmodel underneath and they were excited about routers from that perspective. And I think we started to see um like Verscell just did this with harness
41:3541 minutes, 35 secondsagent for example like some of these players in the space like come up a layer of abstraction and say actually like plug in the whole harness and the
41:4341 minutes, 43 secondswhole agent that's tied to a model family which makes a lot of sense and so what we could provide is a little bit better smarter like how do you mix and match the right models within the model
41:5141 minutes, 51 secondsfamily underneath that thing if that makes sense. But yeah, on the general question of token maxing costs and these sorts of things, I think we're just kind
41:5941 minutes, 59 secondsof going through what feels like a normal natural cycle for companies and figuring out how to make the best use of this technology and run their businesses
42:0842 minutes, 8 secondsreally well and really effectively. And um it's interesting like before working at Anthropic I was at Stripe and we were kind of in the very reasonable era of
42:1642 minutes, 16 secondslike we paid a lot of attention to our AWS bill and so you know if someone were to have built some background job and they like didn't quite configure it
42:2542 minutes, 25 secondscorrectly and this thing's like burning through like CPU or whatever it is right like at any given moment and causing you
42:3342 minutes, 33 secondsknow big increase in spend that's not actually worth it right like we have put in place the guardrails to find that and then go ask that engineer very nicely to
42:4142 minutes, 41 secondsplease turn off their background job that's not like within the bounds of of what they should be spending for the thing they're trying to accomplish. I think those are the things with AI that
42:5042 minutes, 50 secondspeople are going to start to go and figure out. And I think to Angela's point, a thing that gets dangerous is when you're kind of just like here's a
42:5742 minutes, 57 secondscap and you're stuck within your cap like ready, set go. But I do think that encouraging innovation, encouraging
43:0443 minutes, 4 secondspeople to, you know, create really excellent outcomes with this stuff and then coming in from the side and looking and saying like, okay, well, there are
43:1243 minutes, 12 secondsfew different ways that we probably could have accomplished that outcome, right? And one is like you take Opus and you run it all night and you do
43:2043 minutes, 20 secondssomething crazy. And another is maybe to get a little bit smarter with the strategies that you put together in order to create that same outcome within a lower cost. And I think that's the
43:2843 minutes, 28 secondslike next layer of thinking that everyone's going to start to do.
43:3143 minutes, 31 secondsVery cool. Is there anything that you guys are excited about building over the next few months that you can share a hint at what might come next?
43:3743 minutes, 37 secondsUh yeah. I mean I know we said this word like 20 million times. I apologize but like we really are trying to build ways for you to compose strategies. Um and so
43:4543 minutes, 45 secondsuh that is an area that that we're like trying to move into that kind of like yeah uh coordination layer of the abstraction. Um, and we want to start at
43:5343 minutes, 53 secondsthis front because the types of problems that we see people building, they are at a layer where it's like in order to get the most return on this, you have to be
44:0144 minutes, 1 seconda little clever about like what is the nature of the problem that you're solving. So to give you something like concrete like when you try to solve for like let's say you want to build an
44:0944 minutes, 9 secondsagent that's like trying to um do bug hunting and you could just send one off to go and do that and it's going to give
44:1644 minutes, 16 secondsyou a certain type of return a level of return of possibility um and then people kind of get stuck at that and they're like okay my next options are I can like
44:2444 minutes, 24 secondsmake a bigger I can just like swap the model for a different I probably bigger model um or I could like let it run like longer and that's pretty much like the
44:3244 minutes, 32 secondsonly two like levers that you have to like try to make this like bug hunting agent. From a lot of experimentation, when we do these kinds of things, there's like actually the thing like
44:4044 minutes, 40 secondsthose two those two things are still true, but you actually have like a third lever and tends to actually do a lot more than you think it does, which is that actually if you were to like best
44:4844 minutes, 48 secondsof end the thing, it would like give you a lot more returns. But like just to be just saying those words are fine and there's plenty of papers and people have published it to actually build that
44:5644 minutes, 56 secondsthing and put it into production so you can actually test it on users uh and see the results for yourself, that's like really really freaking hard. and you end up building all these like custom
45:0345 minutes, 3 secondsharnesses so on so forth like you know all that stuff. Um but we're seeing like this is where the alpha is and it's hard and so like in the same very simple
45:1145 minutes, 11 secondsphilosophy that we talked about at the beginning like if it's like gives you the return that you want and it's hard we're going to try to make it easy for you so then you can use it to then run
45:1945 minutes, 19 secondsthe experiments you actually need to run.
45:2045 minutes, 20 secondsReminds me of when people are talking about agent swarms a year ago. It's some version of that. Has it been a whole year?
45:2645 minutes, 26 secondsYeah. Oh my god, I know. We're finally there.
45:2845 minutes, 28 secondsYes. Um yeah. No, I think that that's like that's a type of strategy. Exactly.
45:3345 minutes, 33 secondsIn the same way that you have like, you know, one big one that separates a bunch as another type of strategy. And I think people have thought about this maybe the in the way of like human organization.
45:4145 minutes, 41 secondsI guess it could be similar, but if you take it to kind of its ends, it's actually more just like the token has a job. And I think it's this job piece that we're we're really indexed on and
45:4945 minutes, 49 secondsum we see a lot of returns too and that's the thing that we want to spend time with users and the rest of the ecosystem on on like how can we just make that easier for folks to then
45:5845 minutes, 58 secondsexperiment like we can give you like five jobs off the top of our head and we'll probably like that's what we have internally. Um and if we give this out to the rest of the ecosystem there's
46:0646 minutes, 6 secondsprobably going to be like 100,000 200,000 who knows what other combinations that people could put together. Yeah, we want to be able to keep doing this hill climbing on like how do you get the most value, the most
46:1546 minutes, 15 secondsintelligence per dollar and just put that power in people's hands, but around the edges of that, we have these personas that have kind of just like
46:2346 minutes, 23 secondsthings they have to work through in order to be able to like really deploy AI either within their companies or within their products. And um that's
46:3246 minutes, 32 secondslike the sort of enterprise ready security and compliance controls and things like this. But really even just like making the platform more modular in
46:4146 minutes, 41 secondsthe right ways like being able to plug in different pieces of the solutions that we're building like I want to use memory for this thing over here, right?
46:4746 minutes, 47 secondsor whatever else it is and having a truly excellent developer experience around that because we spent a lot of time with enterprises who are like okay
46:5646 minutes, 56 secondsI have this like walled garden and I need to figure out exactly how I can plug these solutions in and so we're we've got a part of our team that's
47:0347 minutes, 3 secondsinnovating on things like strategies and jobs and trying to help you maximize intelligence and they're like that's really cool but I can't actually use any of that for XYZ reasons. So I think
47:1147 minutes, 11 secondssolving those problems is really really important to us. But then the other persona is you know the like weekend developer who's like I want to go and
47:1947 minutes, 19 secondsbuild something useful for myself right and they're often doing that on top of our platform and on top of many other just pieces of developer platforms in
47:2647 minutes, 26 secondsthe community. And I think for some of those folks, there's more that we can do to be provide solutions that are maybe more open or more hackable or whatever
47:3447 minutes, 34 secondsit might be for those folks to kind of just like go wild with what we can offer them and have this really excellent developer experience. And so I think
47:4347 minutes, 43 secondsthere's a lot of stuff that maybe I would put in the category of table stakes that I'm really excited about because I think those are the things that then unlock getting people to say,
47:5247 minutes, 52 seconds"Okay, yes, this thing works for me and now I can plug in on some of the stuff that you guys are doing." that's really innovative and hill climby to get more intelligence and save costs and things like that.
48:0148 minutes, 1 secondWonderful. Caitlyn, Angela, I feel I mean you are building one of the most important developer platforms in the world and talking to the two of you over
48:0948 minutes, 9 secondstime. I just feel really optimistic that that platform is in very thoughtful uh hands that that care about the
48:1648 minutes, 16 secondsecosystem. So, thank you for taking the time today to share what you're up to and um we look forward to what's ahead. Thanks for having us. Thank you guys.

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

Strategic Read
1. Rough metadata

source_platform: YouTube · source_url: https://www.youtube.com/watch?v=vPnVTHYplrQ · source_title: Anthropic’s Katelyn Lesse & Angela Jiang: Building an Ecosystem, not a Walled Garden · channel_or_org: Sequoia Capital · speakers: Katelyn Lesse and Angela Jiang · publisher_hosts: Sonya Huang and Lauren Reeder / Sequoia Capital · published_at: 2026-07-14 · captured_at: 2026-07-15 · capture_method: YouTube screenshot + pasted full transcript · content_type: first-party platform strategy interview / enterprise agent-platform architecture / developer ecosystem / runtime and harness roadmap · source_reliability_context: authoritative vendor practitioners describing Anthropic’s own platform direction; high authority on Anthropic’s architecture and priorities, medium authority as universal doctrine, with obvious model-vendor and token-economics incentives · topic_tags_light: [AI_platform, internal_external_platform, knowledge_layer, execution_layer, coordination_layer, strategy_harness, meta_harness, managed_agents, prompt_caching, context_management, agent_runtime, token_jobs, model_family_tuning, model_routing, skills, MCP, memory, sandboxes, open_ecosystem, first_party_products, vertical_products, enterprise_adoption, org_level_harness, cost_governance, legacy_healthcare_connectivity]

2. People / authority context
Katelyn Lesse and Angela Jiang

role_in_source: leaders responsible for Anthropic’s developer platform · affiliation: Anthropic · speaker_type: first-party platform executives / practitioners · identity_confidence: high

The speakers describe Anthropic’s platform as serving both external developers and Anthropic’s own internal products. The same platform sits beneath Anthropic’s first-party applications while exposing APIs and higher-order capabilities to outside builders.

That gives them unusually strong authority on:

which problems Anthropic repeatedly encounters while building agents;
which primitive layers are becoming standardized;
where low-level infrastructure is commoditizing;
how managed agent offerings differ from raw primitives;
how prompt caching, context management, sessions, sandboxes, tools, skills, and memory fit together;
where Anthropic believes the next platform abstraction will emerge;
what it is willing to open versus what it strategically wants to retain.

This is not outside commentary on agent architecture. It is a first-party description of the platform beneath one of the major model and agent ecosystems.

Perspective and conflict notes

Anthropic’s incentives matter.

Its business benefits from:

more token consumption;
more applications tuned specifically to Claude;
model-family attachment;
its standards becoming ecosystem defaults;
low-level infrastructure becoming interchangeable while the Claude intelligence layer remains central.

The speakers are candid that Anthropic prefers “token-hungry” product categories where successful work creates demand for more iterative model use.

They are also candid that their open-ecosystem posture stops at a meaningful boundary: they support modular infrastructure and external sandboxes, but want the harness and routing logic tuned to the Claude family rather than acting as a neutral router across competing model providers.

That does not invalidate the architecture.

It tells OMNI where to separate:

genuine technical coupling;
useful ecosystem standards;
vendor strategy;
OMNI’s own sovereignty requirements.
3. Suggested processing

priority: 5/5

depth: full_semantic

EVRUN needed?: yes — major convergence and several meaningful sharpening candidates

promotion posture: AI-substrate-spine-candidate | Agent-Runtime-spine | Build-OS-practice | enterprise-platform-strategy | governed-ecosystem-pattern | business-model-sharpening

Why this is a top-tier source

The source joins several questions that OMNI has mostly encountered separately:

knowledge and context;
execution harnesses;
coordination and meta-harnesses;
internal versus external platform architecture;
primitives versus managed products;
build versus buy;
open ecosystem versus walled garden;
model routing versus model-specific tuning;
generic versus domain-specific harnesses;
context and cache economics;
enterprise adoption;
vertical products;
organization-wide agents;
legacy healthcare connectivity.

The source’s three-layer architecture is not merely another agent-framework taxonomy.

It provides a coherent vertical progression:

knowledge
→ execution
→ coordination

And it pairs that progression with a horizontal platform posture:

internal builders
↔ common primitives
↔ external builders
↔ first-party products
↔ ecosystem components

That directly intersects Nick’s intuition that OMNI is both vertically deep and horizontally broad—an internal and external organism rather than one application.

Sibling and duplicate relationships

This source should be read beside:

the canonical Agent Runtime & Harness capture;
the long-horizon robotics source;
the Rippling flat-agent / declarative-skills source;
the Archon general-purpose harness source;
the Harbor agent-eval source;
the inference-economics corpus;
the model-routing and context-engineering sources;
the IBM context/prompt-caching sources;
the Governed Capability Exchange and “open rails, closed authority” work;
the internal/external membrane finding from source 251;
the Build-OS and Agent Work Protocol captures;
the Knowledge Reservoirs family;
the “one giant conversation is not canonical memory” finding.

OMNI already has a strong constitutional premise:

Internal governance and external permeability are the same boundary operation at different radii and trust postures.

This source provides unusually strong first-party external convergence for that conclusion.

Likely landing zones
Thesis §B AI substrate — massive
Thesis §C governed capability exchange — major
Agent Runtime & Harness — massive
Knowledge Reservoirs / context architecture — major
CNS / orchestration — major
Build-OS — massive
Agent Work Protocol — major
Federation / ecosystem topology — major
Model and inference routing — major
Runtime Operations — major
BIZOPS / AI spend governance — medium-major
Surfaces and projections — major
first-party versus operator platform strategy — major
healthcare legacy connectivity — medium-major
domain-specific verification — massive
operator-specific customization — major
business model / moat — major
4. The strategic read
Classification

This is genuine spine material for OMNI’s AI substrate and platform strategy.

Not because OMNI should copy Anthropic’s products.

Not because “knowledge, execution, coordination” is a complete OMNI ontology.

The source matters because it cleanly identifies the three progressively harder layers of agent-platform value:

What intelligence knows and can access.
How intelligence performs durable work.
How multiple uses of intelligence are composed into a strategy.

It then reveals the build-versus-buy boundary:

low-level infrastructure increasingly becomes packaged and interchangeable;
durable differentiation moves upward into strategy, verification, context selection, domain adaptation, and outcomes.

That is extremely important for OMNI.

Core takeaway

The keeper is: the durable AI-platform stack is knowledge → execution → coordination, but the durable enterprise moat moves upward—from raw model access and generic harness plumbing into domain-specific strategy, verification, authority, and outcomes.

The OMNI correction is:

Knowledge enables. Execution acts. Coordination allocates intelligence. Domains and humans retain authority. Proof establishes what actually happened.

And the larger strategic keeper:

OMNI should own meaning, strategy, verification, and authority; it does not need to own every sandbox, cache, model server, or connector rail.

A. The three-layer cake is the missing middle of OMNI—not the whole organism

Anthropic presents three layers:

Knowledge
model-facing API shape;
tools;
context;
skills;
memory;
knowledge of how to perform work.
Execution
low-level harness;
managed infrastructure;
sandboxes;
session and transcript storage;
resumability;
tool execution;
context management;
cost handling.
Coordination
strategies;
meta-harnesses;
differentiated jobs for tokens;
advising;
executing;
reflecting;
grading;
memory formation;
multiple passes or workers composed toward an outcome.

The source explicitly describes the progression from knowledge primitives such as tools, skills, and memory into managed execution, and then into higher-level strategy composition.

This is the right stack inside the AI execution column.

It is not the whole OMNI architecture.

OMNI must still surround that stack with:

identity;
consent;
source authority;
RBAC;
Federation;
domain truth;
clinical authority;
human authority;
durable workflow ownership;
domain-owned commitment;
evidence;
outcome;
Accountability.

Anthropic’s stack ends at coordinated intelligence.

OMNI’s constitutional problem begins where coordinated intelligence attempts to affect care, business truth, money, communication, or obligation.

Keeper:

Anthropic’s three layers describe how intelligence becomes organized work. OMNI must additionally govern how organized work becomes authorized reality.

B. A precise OMNI mapping of the three layers
Layer 1 — Knowledge and context

Possible OMNI components:

Knowledge Reservoirs;
model-interface profiles;
source and evidence retrieval;
context packets;
skills;
procedural memory;
semantic memory;
episodic memory;
tool descriptions;
capability descriptions;
domain projections;
policy and rule sources;
model-specific prompting knowledge.

The source treats tools, context fragments, skills, and memory as knowledge-layer abstractions.

OMNI must preserve distinctions the source compresses.

A skill is not a clinical fact.

A memory is not necessarily truth.

A tool description is not permission.

A retrieved document is not adopted Clinical Memory.

A context packet is not the domain record.

OMNI’s Knowledge Reservoirs doctrine already carries the stronger law:

CNS orchestrates, reservoirs supply, domains commit. Each reservoir has its own authority class, owner, gate, and retrieval interface.

Therefore the canonical OMNI name should probably remain Knowledge Reservoirs / Context Architecture, with “knowledge layer” as an industry-facing gloss rather than a replacement ontology.

Keeper:

The knowledge layer supplies candidate understanding; it does not own canonical truth.

Layer 2 — Execution and harness

Possible OMNI components:

agent session;
agent run;
runtime profile;
sandbox;
workload identity;
model-family profile;
context budget;
prompt cache;
session checkpoint;
resumption;
tool gateway;
capability envelope;
delegation envelope;
run state;
retry and stopping rules;
cost budget;
observability;
trace;
verifier hooks;
human-steering hooks.

The source says that once a model is expected to do work, edit files, interact with multiple systems, resume sessions, and operate remotely, the infrastructure becomes substantially harder. Anthropic therefore packages low-level harness and managed infrastructure around those problems.

This directly validates the current OMNI finding that the project needs one canonical Agent Runtime & Harness architecture defining how an agent is identified, configured, admitted, equipped, contextualized, delegated, run, observed, steered, compacted, recovered, versioned, constrained, and retired.

Keeper:

The model supplies intelligence. The execution layer makes that intelligence resumable, constrained, observable, and capable of work.

Layer 3 — Coordination and strategy

Possible OMNI components:

strategy graph;
inference-role allocation;
advisor pass;
executor pass;
verifier or grader pass;
reflection pass;
memory-promotion pass;
model/harness routing;
parallel exploration;
human checkpoint;
budget allocation;
convergence rule;
workflow-level stopping condition;
outcome evaluation.

Anthropic calls this a meta-harness.

The critical idea is that “tokens are not fungible.” A unit of inference can be assigned a different job:

advise;
execute;
reflect;
grade;
retrieve;
write memory;
supervise another run.

The source describes this as the future higher-order abstraction above a low-level execution harness.

This is a very strong OMNI insight.

It says the system should not ask only:

Which model do we use?

It should ask:

What sequence of cognitive jobs produces the best verified outcome for this class of work?

Keeper:

The token has a job; the domain has authority.

C. Coordination strategy does not necessarily mean more agents

This source helps resolve a recurring industry confusion.

An advisor, executor, reflector, grader, and memory writer do not necessarily need to be five persistent “agents.”

They can be:

passes within one run;
separate runs;
separate models;
deterministic tools;
one model under different instructions;
human and AI combinations;
temporary workers created by one strategy.

The important abstraction is the job assigned to intelligence, not the number of named agent personas.

That reconciles this source with Rippling’s finding that product-team-shaped subagents and conversational handoffs created unnecessary failure.

OMNI should avoid:

Scheduling Agent
talks to Commerce Agent
talks to Clinical Memory Agent
talks to Consent Agent

when the real need is:

retrieve
→ interpret
→ advise
→ verify
→ route to domain commit

Keeper:

Compose cognitive roles before multiplying agent identities.

And:

Coordination topology should follow the work’s verification structure—not the company org chart.

D. The coordination layer should not be collapsed entirely into CNS

This source will tempt OMNI to say:

Coordination layer = CNS.

That is partly right and architecturally incomplete.

CNS is the care/business coordination system.

It should be able to select and invoke strategies for:

patient follow-up;
care-plan preparation;
operator exceptions;
message drafting;
schedule reconciliation;
longitudinal monitoring.

But Build-OS also needs coordination strategies.

So do:

security;
evidence ingestion;
BIZOPS;
marketing;
evaluation;
source processing.

The likely architecture is:

shared AI strategy/runtime substrate
        ↓
domain- or loop-specific coordinator
        ↓
bounded runs and capabilities

Thus:

CNS coordinates care and business work;
Build-OS coordinates construction work;
Runtime Operations coordinates live operational responses;
Accountability coordinates owed remedy;
a shared strategy substrate provides reusable composition mechanics.

Keeper:

Strategy composition is cross-cutting infrastructure; CNS is the care/business authority-aware consumer of it.

E. Internal and external are the same platform at different radii

This is one of the source’s strongest confirmations of Nick’s intuition.

Anthropic deliberately uses one platform for:

external builders using APIs and primitives;
Anthropic’s own internal product teams;
first-party products;
packaged managed-agent offerings.

It has different north stars for the two audiences:

internally: speed and leverage for product teams;
externally: expressive power for diverse builders and businesses.

It nevertheless tries to maintain the same underlying primitives rather than building completely separate internal and external systems. Internal dogfooding is paired with external early access so the platform does not overfit one audience.

This is directly aligned with OMNI’s existing membrane conclusion:

Internal and external are the same operation at different radii and trust postures.

Nick’s “OMNI is a wide-breadth, vertically high, internal and external organism” intuition is correct.

The practical OMNI radii may be:

Radius 1 — Build OMNI
architecture agents;
code agents;
security agents;
corpus and documentation agents;
eval and release tooling.
Radius 2 — Operate OMNI internally
customer support;
implementation;
finance;
growth;
security;
platform operations;
clinical operations.
Radius 3 — First-party OMNI products
OMNI Direct;
patient surfaces;
provider workspace;
operator console;
communication surfaces.
Radius 4 — Federated operators
clinics;
medspas;
healthcare organizations;
specialist networks;
enterprise customers.
Radius 5 — External ecosystem
health systems;
EHRs;
labs;
pharmacies;
patient agents;
third-party agents;
partner applications;
external capabilities.

The same primitive families can operate across these radii.

The grants, data, authority, risk, and proof cannot be the same.

Keeper:

One primitive substrate; differentiated governance by radius.

F. “Same primitives for everyone” must not mean equal privilege

Anthropic wants internal and external builders to access the same primitive families.

That is a valuable platform discipline.

OMNI must phrase the law more precisely:

Same primitive semantics and interface families—not identical permissions, data access, autonomy, or assurance requirements.

For example, internal and external actors may both use:

context packets;
skills;
agent runs;
connectors;
workflow strategies;
human-review requests.

But they may have radically different:

patient access;
tenant scope;
write authority;
available tools;
cost budgets;
PHI handling;
review requirements;
release pathways;
audit obligations.

Keeper:

Primitive parity prevents platform fragmentation; capability envelopes prevent privilege flattening.

G. Dogfood internally without letting internal assumptions become the platform

Anthropic explicitly warns that an internal product team can overindex the platform toward its own narrow requirements. Its response is to combine internal use with early external feedback.

That is directly applicable to OMNI.

OMNI should be dogfooded through:

its own Build-OS;
its own operational workflows;
its own first-party clinics or brands;
its own support and growth work.

But OMNI cannot allow:

one medspa’s policies;
one physician’s workflow;
one Stripe configuration;
one staff model;
one location;
one specialty;

to quietly become universal substrate truth.

External operators also cannot dictate the substrate through bespoke requests.

The correct feedback cycle is:

internal use
+ external operator use
+ ecosystem use
→ repeated problem identified
→ reusable primitive proposed
→ domain and governance review
→ generalized interface
→ both audiences benefit

Keeper:

Dogfood the platform; do not canonize the dogfood.

H. AI makes the last mile of custom software economically reachable

Anthropic argues that AI changes the economics of the formerly unaffordable “last mile” of custom software. Builders can increasingly express what their particular business needs without paying for a fully bespoke traditional software project.

This has enormous strategic relevance for OMNI.

Healthcare software historically forces a bad choice:

rigid generic product;
expensive bespoke implementation;
vendor-specific customization;
spreadsheet and workflow hacks;
permanent fork.

AI creates a potential middle path:

stable OMNI primitives
+ operator-specific policy
+ skills
+ connectors
+ strategy packs
+ projections
+ generated workflow configuration

That allows local expression without corrupting the shared substrate.

Possible examples:

operator-specific intake sequence;
local escalation routing;
practice-specific service catalog;
approved patient education style;
role-specific workspace projections;
location-specific fulfillment rail;
jurisdiction-specific policy overlay;
custom growth or follow-up workflow.

The guardrail is critical:

AI-generated customization must compile into governed configuration, skills, or bounded capabilities—not arbitrary forks that redefine clinical truth.

Keeper:

The future of customization is not one fork per customer; it is governed last-mile composition over stable primitives.

I. Form factors are temporary; the substrate must survive them

Anthropic notes that two years ago the dominant form factor appeared to be chat; then the industry moved toward agents; another form factor will follow. Therefore it wants primitives robust enough to support forms no one has discovered yet.

This directly affirms OMNI’s surface doctrine.

The durable system should not assume the final interface is:

app;
chat;
dashboard;
inbox;
voice;
Slack;
Teams;
SMS;
email;
agent-to-agent API.

The interface is the visible tip.

Context, identity, authority, capabilities, state, and proof sit underneath.

The source describes its organization-wide agent as an “iceberg”: a simple Slack interaction rests on substantial context engineering, proactivity, and harness architecture, while the visible interface could later move to Teams, WhatsApp, text, email, or another surface.

Keeper:

Surfaces are disposable projections; the governed agent and domain substrate must survive the surface.

J. The organization-level harness is real

The source’s description of Claude Tag is not really about a Slack bot.

It is about an organization-level harness that can:

obtain company context;
understand workflows;
act proactively;
use tools;
surface in existing collaboration channels;
behave coherently across the organization.

That is relevant to OMNI at two scales.

Operator-level harness

An operator-wide agentic substrate could understand:

staff roles;
services;
schedules;
policies;
inventory;
memberships;
communications;
outstanding obligations;
local workflow.
Care-context harness

A patient-centered orchestration system could understand:

active care context;
source authority;
provider decisions;
follow-up;
communication;
clinical memory;
care obligations;
patient response.

But OMNI must not simply market this as an invisible “AI coworker.”

A non-human actor must have:

visible identity;
owning operator;
stated purpose;
allowed contexts;
permitted actions;
audit;
revocation;
escalation;
non-deceptive presentation.

Keeper:

An organization-level harness can feel simple at the surface only because the identity, context, permissions, and runtime beneath it are rigorous.

K. Prompt caching is basic infrastructure—not strategic differentiation

Anthropic is blunt that prompt caching, old-context removal, and similar details are important but increasingly low-level and generic. They need to work, but the higher-order strategic value lies above them.

This is useful for OMNI’s build-versus-buy decisions.

OMNI should probably not attempt to differentiate itself through proprietary implementations of:

KV-cache mechanics;
generic prompt-cache infrastructure;
base sandbox creation;
generic session storage;
low-level model SDKs;
ordinary token counting;
standard tracing transport.

These may be:

purchased;
managed;
open-source;
swapped;
wrapped behind stable interfaces.

OMNI must still own the policies governing their use.

Keeper:

Prompt caching is table stakes. Cache eligibility, authority boundaries, invalidation, and outcome economics are OMNI’s concern.

L. Prompt caching requires healthcare-grade boundaries

“Do prompt caching” is not enough.

OMNI needs explicit cache governance:

tenant boundary;
patient boundary;
purpose-of-use;
role and actor;
model and provider;
policy version;
skill version;
source freshness;
consent state;
effective date;
encryption and retention;
invalidation trigger.

A stable prefix may include:

general model instructions;
non-sensitive public domain guidance;
stable tool schemas;
approved procedural skills.

It should not casually share:

patient context;
operator secrets;
stale policy;
revoked access;
cross-tenant material.

Potential pressure:

prompt_prefix_version
cache_eligibility_policy
cache_scope_key
cache_invalidation_event
cache_provenance_record

Keeper:

A cache hit is an economic success only when the cached context is still authorized, coherent, and current.

M. Context-window management is active runtime work

Anthropic identifies several practical harness behaviors:

clear old material from context;
avoid pulling every tool result into the model;
call tools programmatically;
keep the context window clean;
use evals to determine whether the strategy remains effective.

This strongly converges with OMNI’s live finding that one long-running conversation must not become:

memory;
decision ledger;
evidence store;
task plan;
architecture record;
work log;
canonical truth.

OMNI already has the controlling law:

Conversation is execution context. It is not canonical memory.

The execution layer therefore needs explicit context health:

context budget
context composition
source mix
staleness
duplication
tool-result bulk
cacheability
compaction status
checkpoint readiness
rehydration readiness

Potential candidates:

context_health_profile
context_eviction_policy
tool_result_offload
context_pointer
run_compaction_event
checkpoint_rehydration_contract

Keeper:

Context management is not stuffing and summarizing; it is preserving coherent work while externalizing durable state.

N. Programmatic tools should keep bulk data outside the model window

The source mentions calling tools programmatically rather than dragging everything into context.

That is a quiet but important architectural gem.

An agent does not need every row, file, event, or tool response in raw form.

A capability can:

compute;
filter;
aggregate;
validate;
store;
return a bounded result and lineage pointer.

For example:

query a year of observations server-side;
calculate a trend;
return the relevant inflection points;
preserve the source set separately;
place only the bounded evidence packet in context.

This reduces:

token cost;
latency;
privacy exposure;
context dilution;
accidental leakage;
repeated processing.

Keeper:

Move computation to the data when possible; move only the governed result and necessary evidence into context.

O. Low-level harnesses will commoditize; domain-specific verification will not

This may be the source’s most important product-strategy section.

The speakers say much low-level harness work is becoming generic:

caching;
context clearing;
base loops;
generic tool packaging;
standard infrastructure.

But they do not believe one completely general harness will solve every domain.

They identify domain-specific differentiation particularly in:

error handling;
verification between model output and execution;
token-budget allocation;
task-specific strategy.

They explicitly call out legal and finance as domains where verification differences are consequential enough to determine which product users trust.

Healthcare is more demanding still.

OMNI should therefore consider the following its proprietary layer:

clinical context admissibility;
patient/actor resolution;
source-authority reconciliation;
candidate-versus-commit control;
contraindication and escalation logic;
clinical-memory adoption;
consent and purpose checks;
provider authority;
care-state transitions;
outcome verification;
patient burden;
remedy when the system is wrong.

Keeper:

The moat is not the loop. The moat is the domain-specific proof between intelligence and consequence.

P. Anthropic underweights context at exactly the point OMNI cannot

One speaker suggests that context may be somewhat overemphasized: if a company has the relevant data, a generic harness can often handle much of the context work, while verification and strategy become more differentiating.

This is the source’s biggest conceptual tension with OMNI.

For ordinary enterprise tasks, that may often be directionally correct.

In healthcare, “having the data” is nowhere near sufficient.

OMNI must establish:

which patient;
which source;
who authored it;
whether it is current;
whether it has been superseded;
whether it is an observation, assertion, order, or adopted memory;
whether the actor may see it;
whether the purpose permits its use;
whether conflicting evidence exists;
whether it may support an action;
who can commit the resulting conclusion.

OMNI’s existing open-rails doctrine says portability is not merely moving a record; it is moving governed context with source authority, purpose, consent, semantic reconciliation, and action boundaries intact.

Therefore OMNI’s position should be:

Generic context-window plumbing may commoditize. Care-context governance does not.

Keeper:

Anthropic may commoditize context handling; OMNI must still own context meaning and admissibility.

Q. Strategies are likely the true higher-order runtime primitive

Anthropic’s strategic bet is that the next important layer is not simply a better loop.

It is a reusable strategy specifying which cognitive jobs occur and how they interact.

Examples from the source include:

large model advises
→ smaller model executes
→ grader evaluates
→ retry if necessary

or:

execute
→ reflect on past session
→ promote learning to memory
→ next run uses the learning

The source says this higher-order composition may offer substantially more leverage than endlessly optimizing the low-level harness.

Possible OMNI candidate:

strategy_profile

Potential fields:

objective class;
risk tier;
inference roles;
eligible model/harness bundles;
context requirements;
allowed capabilities;
role sequence or graph;
parallelism;
verifier;
human authority points;
memory-write policy;
budget;
deadline;
stop rule;
failure route;
evidence requirements;
outcome metric.

This is not a clinical domain object.

It is a reusable AI-runtime and Build-OS configuration.

Keeper:

A strategy defines how intelligence is spent—not merely which model receives the prompt.

R. “Here is the outcome and budget—go” is close, but OMNI needs more fields

Anthropic imagines a future where a builder supplies:

desired outcome;
spending budget;

and the managed platform handles the rest.

That is an attractive interface for low-risk work.

For OMNI, the contract must also include:

subject;
purpose;
authority;
risk tier;
deadline;
allowed data;
allowed tools;
prohibited actions;
human-review conditions;
evidence requirements;
commit owner;
escalation route;
stopping condition.

Possible OMNI form:

objective
+ subject
+ authority envelope
+ risk profile
+ resource budget
+ evidence contract
+ completion definition

Keeper:

Outcome and budget tell the agent what success costs; authority and proof tell it what success is allowed to mean.

S. Open ecosystem and modular infrastructure strongly affirm OMNI

Anthropic says it is not precious about whether execution runs on its own sandboxes or external infrastructure.

It supports:

self-hosted sandboxes;
partner infrastructure;
cloud and micro-VM providers;
MCP tunnels into tools behind enterprise firewalls.

Its stated priority is the architecture and interfaces by which the pieces compose, rather than owning every machine or storage layer.

That is directly aligned with OMNI’s durable-primitives / replaceable-rails posture.

OMNI should be able to run across:

different clouds;
different model providers;
different sandbox providers;
operator-owned infrastructure;
external connectors;
local systems;
federated health systems.

But OMNI should own:

identity;
semantic contracts;
authority;
capability envelopes;
context admissibility;
domain commits;
audit;
outcome proof.

OMNI’s current doctrine already states the concise law:

Open rails. Closed authority. Everything may connect. Nothing becomes truth merely because it connected.

Keeper:

Own the interfaces and operating law; rent or replace the machinery beneath them.

T. The electricity metaphor is useful and incomplete

Anthropic compares AI to electricity:

transformative because it can be wired into everything;
useful because common standards allow broad access;
too large for one company to build alone.

This supports OMNI’s governed capability-exchange posture.

But healthcare AI is not electricity alone.

Electricity is largely fungible at the outlet.

AI outputs differ in:

evidence;
confidence;
provenance;
subject;
authority;
intended use;
liability;
consequence.

OMNI is closer to:

a governed electrical grid whose appliances, users, purposes, circuit limits, and consequences all matter.

Keeper:

AI may become universal infrastructure; care still requires non-fungible authority and meaning at every outlet.

U. Agent-to-agent interoperability is real, but calling an agent as a tool can hide authority

The source describes a customer exposing one agent through an MCP server so another agent can invoke it as a capability.

This is directly relevant to OMNI’s future A2A and Federation architecture.

Potential pattern:

agent_as_capability_adapter

But the adapter must preserve:

caller identity;
originating human or organization;
delegation chain;
requested purpose;
subject scope;
data classes;
input provenance;
receiving-agent identity;
model/runtime version;
output authority;
cost;
trace;
downstream commit restrictions.

Otherwise, a complex agent with broad access becomes a deceptively simple tool call.

Keeper:

An agent may be exposed as a capability; its identity, delegation, and output authority must not disappear behind the function signature.

V. Open interfaces do not imply model interchangeability

Anthropic’s most important technical qualification is that harnesses should be tuned to the model family operating them.

It rejects the naive assumption that a harness optimized for one model can simply swap in another model with no loss.

This is credible.

Different models differ in:

tool-call behavior;
instruction hierarchy;
context handling;
refusal;
planning;
verbosity;
output shape;
latency;
reasoning mode;
memory interaction;
reliability under long runs.

OMNI should therefore avoid both extremes.

Wrong extreme 1

Hard-code the platform permanently to Claude.

Wrong extreme 2

Pretend every model is interchangeable behind one generic API.

The correct architecture is:

open control plane
+ versioned model-family harness profiles
+ bundle-specific evaluation
+ policy-constrained routing

Possible primitive:

model_family_harness_profile

Containing:

model family and versions;
prompt/instruction conventions;
tool schemas;
context and cache behavior;
known failure modes;
supported skills;
compatible strategy roles;
eval suite;
risk eligibility;
cost/latency profile.

Keeper:

Be vendor-portable at the control plane and model-specific at the execution plane.

W. Route complete agent bundles—not naked models

This source strengthens a more mature routing unit:

agent_bundle
=
model family
+ harness profile
+ tools
+ skills
+ memory policy
+ context strategy
+ verifier profile
+ runtime environment

A router should not merely ask:

Claude or GPT?

It should ask:

Which evaluated bundle is eligible for this strategy role under this risk, cost, latency, data, and authority profile?

Potential pattern:

strategy role
→ eligible agent-bundle set
→ route based on evidence and constraints

This allows OMNI to remain open while respecting real model-harness coupling.

Keeper:

Model routing without harness routing is incomplete.

X. Anthropic’s closed routing posture is partly technical and partly commercial

Anthropic’s argument that harnesses benefit from model-family tuning is valid.

Its conclusion that the platform should therefore stay within Claude is not inevitable.

That conclusion also serves Anthropic’s business.

OMNI should import the technical truth:

model/harness coupling exists;
cross-model substitution requires evaluation;
the routing unit should be a tested bundle.

OMNI should reject the vendor conclusion:

therefore one model family must become permanent constitutional infrastructure.

Keeper:

Model specificity justifies profiles and evals—not surrendering platform sovereignty.

Y. The source gives OMNI a crisp build-versus-buy boundary
Likely externalizable or replaceable
model inference;
base sandbox infrastructure;
micro-VM creation;
generic session storage;
cache implementation;
low-level SDKs;
generic agent-loop framework;
standard connector transport;
standard telemetry transport;
commodity file and code execution;
ordinary token metering.
OMNI should own
domain semantics;
Knowledge Reservoir authority;
context admissibility;
operator and patient identity;
Federation;
consent;
capability envelopes;
strategy profiles;
domain-specific verification;
model/harness eligibility;
candidate-versus-commit law;
human authority;
longitudinal state;
outcome interpretation;
Accountability and remedy;
operator-specific policy compilation.

Keeper:

Externalize generic mechanics. Own the semantics and controls that determine consequence.

Z. Enterprise customers will consume different abstraction levels

Anthropic sees a spectrum:

advanced AI-native builders use primitives;
enterprises often prefer packaged managed-agent offerings because low-level optimization is not their core competency.

OMNI should probably expose several levels.

Primitive layer

For sophisticated integration teams:

APIs;
events;
context interfaces;
capability interfaces;
policy hooks;
connector SDKs.
Managed runtime layer

For organizations that want OMNI to operate the agent infrastructure:

managed runs;
skills;
context handling;
observability;
evals;
human steering;
runtime controls.
Domain workflow packages

For operators wanting outcomes rather than infrastructure:

intake and review;
follow-up;
refill preparation;
scheduling resolution;
patient messaging;
clinical document assembly;
membership or service operations.
First-party surfaces

For customers who simply want the complete product.

Keeper:

One substrate can support primitive buyers, managed-runtime buyers, and outcome buyers without becoming three separate architectures.

AA. First-party vertical products should demonstrate the substrate—not define it

Anthropic builds vertical and first-party products partly to explore new form factors and demonstrate what its primitives can do. Some experiments may be discarded quickly; others are chosen because they represent attractive markets or iterative token use.

OMNI can similarly use first-party products and operating environments to prove:

medspa workflows;
virtual-care workflows;
operator tooling;
patient follow-up;
provider workspaces;
public-presence generation;
Build-OS.

But the substrate must not become a disguised extraction of one first-party implementation.

Keeper:

First-party products are proving grounds and reference compositions—not the ontology of the platform.

AB. Token hunger is Anthropic’s business objective—not OMNI’s

Anthropic openly favors domains where useful output leads users to perform more iterative AI work.

That makes sense for a token provider.

OMNI’s objective is different.

OMNI should optimize:

care outcome;
resolved obligation;
reduced patient burden;
provider time saved;
correct escalation;
successful fulfillment;
safe longitudinal coherence;
verified business outcome.

Sometimes the best workflow will use many tokens.

Sometimes the best workflow will:

avoid a model call;
use a deterministic rule;
reuse cached context;
retrieve one field;
no-op;
suppress an unnecessary message.

Keeper:

Token hunger is the model vendor’s business model. Outcome density must be OMNI’s.

AC. Cost governance should enable innovation rather than merely cap it

The source discusses organizations discovering widespread employee AI usage through shadow IT and then trying to manage an exploding token bill.

Anthropic advises against simply shutting the activity down. It recommends understanding task complexity and routing appropriately so valuable usage continues with better economics.

This fits OMNI’s future internal AI-management system.

Possible mechanisms:

AI-use-case inventory;
cost attribution by workflow;
cost per verified outcome;
model/harness route;
strategy budget;
anomaly detection;
runaway-run termination;
shadow-agent discovery;
departmental and operator allocation;
cache effectiveness;
reviewer cost;
retry cost.

A flat cap can produce the wrong behavior:

expensive high-value work blocked;
cheap low-value work proliferates;
staff move to unmanaged tools.

Keeper:

Govern AI spend by outcome, risk, and workload—not by one undifferentiated token ceiling.

AD. Complexity routing is insufficient without risk and authority routing

Anthropic suggests:

hard task → powerful model;
simple task → cheaper model.

That is sensible and incomplete.

A simple task may still be high consequence:

send a controlled-substance message;
update a medication allergy;
release a refund;
disclose PHI;
cancel a procedure;
suppress an urgent escalation.

OMNI routing should consider:

cognitive complexity;
consequence;
reversibility;
data sensitivity;
source uncertainty;
authority requirement;
verification strength;
latency;
cost.

Keeper:

Route by complexity and consequence—not complexity alone.

AE. Strategies should allocate intelligence per dollar, not merely models per task

Anthropic sees strategy composition as the next major lever beyond:

selecting a larger model;
letting one model run longer.

A better strategy can allocate intelligence more efficiently through:

advisor/executor separation;
parallel exploration;
grading;
reflection;
selective memory;
targeted retries;
small/large model collaboration.

This aligns closely with OMNI’s progressive-fidelity and risk-tiered execution findings.

Examples:

Build-OS
small model classifies change
→ larger model plans
→ executor edits
→ deterministic tests
→ reviewer evaluates
Care workflow
cheap classifier detects possible issue
→ canonical context assembled
→ premium reasoning produces candidate
→ deterministic contraindication check
→ clinician resolves
Evidence ingestion
cheap extraction
→ source-preservation check
→ semantic interpretation
→ formalization
→ promotion gate

Keeper:

The strategic unit of optimization is the verified workflow—not the individual model call.

AF. Memory writing is a strategy role and must remain gated

The source suggests spending inference on reflecting over prior sessions and writing learnings into memory for future runs.

That is powerful and dangerous.

A reflection pass may produce:

useful procedural improvement;
incorrect causal interpretation;
overgeneralized lesson;
contaminated memory;
unauthorized patient inference;
self-reinforcing error.

OMNI should distinguish:

candidate procedural learning;
candidate episodic lesson;
semantic memory proposal;
Clinical Memory adoption;
policy change;
model or skill update.

The reflector may propose memory.

It should not silently canonize it.

Keeper:

Reflection may propose learning; the memory owner determines what survives.

AG. “Delete the scaffolding as models improve” is correct only for steering scaffolds

Anthropic says modern models are increasingly steerable enough that some older harness scaffolding—built merely to force a model from point A to point B—can be removed. The harness should evolve toward enabling longer runs and higher-level strategy rather than micromanaging each move.

That is likely true.

OMNI should distinguish:

Scaffolding that may shrink
excessive prompt choreography;
brittle step-by-step steering;
redundant model reminders;
artificial persona decomposition;
unnecessary subagent handoffs.
Scaffolding that must not disappear
identity;
permissions;
authority gates;
durable state;
source provenance;
consent;
budgets;
tool restrictions;
verification;
audit;
stopping rules;
domain commit ownership.

Keeper:

Delete scaffolding that compensates for weak steering; preserve controls that encode institutional authority and safety.

AH. Legacy healthcare connectivity is a real execution-layer requirement

The speakers note that many healthcare companies still operate systems without usable APIs and are exploring computer use and other techniques to bridge them.

That is highly relevant to OMNI.

A realistic healthcare platform cannot assume:

clean FHIR;
modern APIs;
reliable webhooks;
full vendor cooperation.

OMNI may need degraded rails such as:

browser automation;
computer use;
email parsing;
fax ingestion;
document exchange;
human-assisted workflow;
scheduled exports.

But these should be explicitly typed as degraded integrations.

Potential requirements:

visible rail class;
brittleness and confidence;
screen-state evidence;
write restrictions;
duplicate protection;
human fallback;
selector/interface-change monitoring;
vendor-policy review;
PHI controls;
reconciliation after action.

Keeper:

Computer use can bridge a missing API; it must not masquerade as a reliable transactional interface.

AI. The interface standard can be open while the semantic standard remains governed

Anthropic supports standards such as:

MCP;
skills;
connector interfaces;
sandbox interfaces.

These help systems compose.

OMNI should participate in and use open standards where appropriate.

But interface standardization does not settle:

what a patient is;
what an active order is;
who can prescribe;
what counts as completed care;
which memory is authoritative;
which source is current;
when an action is legally or clinically permitted.

This is exactly why OMNI’s semantic posture rejects both:

proprietary captivity;
one universal imposed ontology.

It instead uses governed semantic reconciliation across messy worlds.

Keeper:

Standardize connection and exchange; govern meaning and adoption.

AJ. This source strongly confirms OMNI’s “organism” intuition

Nick’s word is useful if kept precise.

OMNI is not an organism because it has many features.

It is organism-like because one constitutional substrate supports several interdependent radii:

it builds itself;
it operates itself;
it presents first-party surfaces;
it supports operators;
it exchanges capabilities with external systems;
it learns through governed evidence;
it preserves differentiated organs and boundaries.

The three Anthropic layers form one vertical nervous/execution column:

knowledge
→ execution
→ coordination

OMNI extends outward through:

internal build
→ internal operations
→ first-party

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

AT OPUS....  THIS IS ANOTHER 5/5!!!!!!!!!! NO JOKE!!!!!!!!!  IT'S TOP 5 of all vidoes!!!!!   it's VERY FRESH.....  need's to be incorporated at high levels, and DNA of OMNI!!!!!!!!!!!!!!!

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-15` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

### Review 003 — Opus formal deep extraction (EVSRC-2026-000278) — ★★ operator-flagged (top-5, "DNA of OMNI")

**Read posture / tiering.** Formalizes Knox Review 001 (5/5) + honors Nick Review 002 ("another 5/5, top-5 of all videos, DNA of OMNI, incorporate at high levels"). **Overall tier: full_semantic, SPINE — genuine AI-substrate + platform-strategy spine material; ~0 net-new domain objects (it composes existing OMNI physics) but the strongest first-party external convergence yet for OMNI's internal+external platform identity + the AI execution stack's shape.** Siblings: Agent Runtime & Harness capture, 235/274 (harness/work-factory), 271 (flat-agent), 215 (eval), 227 (context), §C "open rails, closed authority", 251 (internal/external membrane), Knowledge Reservoirs, 256 (harness-sovereignty). **Two spine keepers: (1) the AI execution stack = knowledge → execution → coordination (meta-harness; "tokens are not fungible" → each token has a JOB); (2) internal builders = external builders on the SAME primitives (ecosystem, not walled garden).** The load-bearing OMNI correction: **Anthropic's stack ends at coordinated intelligence; OMNI's constitutional problem BEGINS where coordinated intelligence tries to affect care/money/truth/obligation — "the token has a job; the domain has authority."** Dominant reality-check: **`doctrine=AFFIRM/PARTIAL · build=absent/partial`**.

**A. Concept clusters**

---
**Cluster 1 — The AI execution stack = knowledge → execution → coordination (the missing middle of OMNI) (★)**
| field | content |
|---|---|
| concept | Three progressively harder layers: **Knowledge** (model API shape / tools / context / skills / memory), **Execution** (low-level harness / managed infra / sandboxes / sessions / resumability / tool execution / context mgmt / cost), **Coordination** (strategies / meta-harnesses / differentiated token jobs / advise-execute-reflect-grade-memory / multi-pass composed toward an outcome). "Everything should ladder together." |
| OMNI meaning | The right stack INSIDE the AI execution column — but NOT the whole OMNI organism: OMNI must SURROUND it with identity / consent / source authority / RBAC / Federation / domain truth / clinical + human authority / durable workflow ownership / domain commit / evidence / outcome / Accountability. "Anthropic's three layers describe how intelligence becomes organized WORK; OMNI must additionally govern how organized work becomes AUTHORIZED REALITY." Maps: L1→Knowledge Reservoirs/Context Architecture (candidate understanding, not canonical truth); L2→Agent Runtime & Harness (identify/configure/admit/equip/contextualize/delegate/run/observe/steer/compact/recover/version/constrain/retire — AFFIRMS the one-canonical-harness finding); L3→CNS orchestration (strategy graph / inference-role allocation / routing / convergence / stopping). |
| why | Names the AI-execution middle layer OMNI has encountered piecemeal + fixes its scope boundary (execution stack ⊂ governed substrate). |
| downstream homes | **§B AI substrate (massive)** · **Agent Runtime & Harness (massive)** · **CNS orchestration** · **Knowledge Reservoirs / Context Architecture** |
| source anchors | "you have knowledge and you have execution, you have coordination" [0:03]; "almost like a meta harness" [0:10]; "we'll move more and more from the knowledge layer to the execution layer…to the coordination layer" [0:39] |
| stale-vs-v3 | AFFIRM/PARTIAL · build=partial |
| weight_tier | spine |
| status | promote (as the AI-execution-stack frame; NOT a replacement for OMNI's governed-substrate ontology) |

---
**Cluster 2 — Coordination/meta-harness: "tokens are not fungible" → the token has a JOB; the domain has AUTHORITY (★)**
| field | content |
|---|---|
| concept | Coordination = strategies that compose orchestrated jobs on top of execution because "tokens aren't really fungible" — one token/pass advises, another executes, another reflects/grades/writes-memory/supervises. The meta-harness sits above the low-level execution harness. |
| OMNI meaning | Reframes the runtime question from "which model?" to "**what sequence of cognitive jobs produces the best VERIFIED outcome for this class of work?**" → strategy graph (advisor / executor / verifier-grader / reflection / memory-promotion passes; model+harness routing; parallel exploration; human checkpoint; budget allocation; convergence rule; outcome eval). CRITICAL: coordination ≠ MORE AGENTS — advisor/executor/reflector/grader can be passes within one run / separate runs / separate models / deterministic tools / one model under different instructions / human+AI (reconciles WITH 271 flat-agent + 274 workload-topology: "the important abstraction is the JOB assigned to intelligence, not the number of named agent personas"). **"The token has a job; the domain has authority."** |
| why | The strongest articulation of OMNI's CNS orchestration grammar + the anti-god-agent resolution. |
| downstream homes | **CNS orchestration (massive)** · **Agent Runtime (strategy layer)** · **§A candidate→commit (domain authority)** · **271/274 (decomposition reconciliation)** |
| source anchors | "tokens aren't really fungible and you need to give them different jobs" [0:10]; "this token is advising versus this token is executing" [0:18]; "orchestrated strategies that go together" [0:26] |
| stale-vs-v3 | PARTIAL (CNS orchestration exists; token-job/meta-harness framing sharpens it) · build=absent |
| weight_tier | spine |
| status | promote |

---
**Cluster 3 — Internal builders = external builders on the SAME primitives (ecosystem, not walled garden) (★ Nick's DNA-of-OMNI)**
| field | content |
|---|---|
| concept | Two north stars (internal: max leverage + speed for internal teams; external: give any builder tools to build whatever they want) served by ONE consistent philosophy — "we want to have the same primitives available to everyone" (internal + external), intentionally NOT bifurcated. Primitives + APIs + higher-order abstractions + standards (skills, MCP) given to the whole ecosystem. |
| OMNI meaning | Directly AFFIRMS OMNI's constitutional premise (251 internal/external membrane): **internal governance and external permeability are the same boundary operation at different radii + trust postures.** OMNI is both vertically deep AND horizontally broad — an internal+external organism, not one app. OMNI should build ONE set of governed primitives/capabilities used by internal teams AND external operators/builders (§C governed capability exchange = "open rails, closed authority"), rather than a private internal system + a separate external product. Dog-food internally what operators get externally. |
| why | The external first-party validation of OMNI's internal=external substrate identity — Nick's "DNA of OMNI." |
| downstream homes | **§C governed capability exchange (open rails, closed authority)** · **Federation / ecosystem topology** · **251 internal/external membrane** · **thesis §1/§2 (organism + business model)** |
| source anchors | "give any builder the tools to be able to work with claude to build whatever they want" [2:33]; "same primitives that are available to everyone" [4:25]; "ecosystem, not a walled garden" [title] |
| stale-vs-v3 | AFFIRM/PARTIAL · build=partial |
| weight_tier | spine |
| status | promote (★ operator DNA-of-OMNI) |

---
**Cluster 4 — Own meaning/strategy/verification/authority; don't own every sandbox/cache/model-server/rail (build-vs-buy boundary) (★)**
| field | content |
|---|---|
| concept | Low-level infra increasingly becomes packaged + interchangeable; durable differentiation moves UPWARD into strategy, verification, context selection, domain adaptation, outcomes. Primitives + standards (skills, MCP) get democratized to the ecosystem. |
| OMNI meaning | The build-vs-buy boundary: **OMNI should own meaning, strategy, verification, and authority; it does NOT need to own every sandbox, cache, model server, or connector rail.** "The durable enterprise moat moves upward — from raw model access + generic harness plumbing into domain-specific strategy, verification, authority, and outcomes." Ties 268/272/274 build-vs-buy signals + 256 harness-sovereignty + §C rail-agnosticism (rails replaceable; authority/proof/domain-truth owned). Skills + MCP = replaceable STANDARDS/rails (not governance — same as 273/wave-4 267). |
| why | Sharpens where OMNI invests (up the stack) vs consumes (interchangeable infra) — a Build-OS build-vs-buy doctrine. |
| downstream homes | **Build-OS build-vs-buy** · **§C rail-agnosticism** · **thesis §2 moat** · **256 harness-sovereignty (AFFIRM)** |
| source anchors | "the last mile of custom software now in theory should be very achievable" [3:11]; "skills and MCP…give them out to the rest of the ecosystem" [3:28]; "custom software in their own way" [3:04] |
| stale-vs-v3 | AFFIRM/PARTIAL · build=partial |
| weight_tier | spine |
| status | promote |

---
**Cluster 5 — Form factors keep changing → build robust primitives, don't over-index on one form factor or internal-only requirements**
| field | content |
|---|---|
| concept | "Really hard to figure out a long-lasting form factor" (chat → agents → next → next); build a robust platform of primitives so form factors emerge from the market; don't over-index on solving the problem only for internal users' specific requirements. |
| OMNI meaning | AFFIRMS surfaces-as-replaceable-projections (`DEC-033`) + the substrate/surface split: invest in durable governed primitives (identity/authority/context/capability/proof/domain truth), let surfaces/form-factors evolve on top. Guardrail: don't over-fit the substrate to one internal workflow (one clinic / one medspa) — the C3.9 plastics/medspa federation lesson (design primitives general enough for the ecosystem, specialized via overlays). |
| why | Keeps OMNI's substrate investment durable against form-factor churn. |
| downstream homes | **Surface/Projection Map (`DEC-033`)** · **§C primitives** · **C3.9 federation (don't over-fit one operator)** |
| source anchors | "really hard to figure out a longlasting form factor" [4:33]; "constantly evolving…build a really robust platform" [4:48]; "never want to…overindex on the problem…for an internal user" [5:30] |
| stale-vs-v3 | AFFIRM · build=partial |
| weight_tier | spine-vocabulary |
| status | promote |

---
**Cluster 6 — Knowledge layer supplies CANDIDATE understanding, not canonical truth (the OMNI distinction the source compresses)**
| field | content |
|---|---|
| concept | The source treats tools / context fragments / skills / memory as knowledge-layer abstractions (a flat "knowledge" bucket). |
| OMNI meaning | OMNI must preserve distinctions the source compresses: **a skill ≠ a clinical fact; a memory ≠ truth; a tool description ≠ permission; a retrieved document ≠ adopted Clinical Memory; a context packet ≠ the domain record.** AFFIRMS Knowledge Reservoirs law: "CNS orchestrates, reservoirs supply, domains commit; each reservoir has its own authority class / owner / gate / retrieval interface." Keep "Knowledge Reservoirs / Context Architecture" as canonical; "knowledge layer" = industry-facing gloss, not a replacement ontology. "The knowledge layer supplies candidate understanding; it does not own canonical truth." |
| why | Prevents the flat "knowledge layer" from eroding OMNI's authority-classed reservoir + candidate≠commit doctrine. |
| downstream homes | **Knowledge Reservoirs (authority classes)** · **§A candidate→commit** · **Clinical Memory (adoption)** |
| source anchors | "you have knowledge…tools, skills, and memory" [platform primitives, ~3:20]; (knowledge-layer compression) [0:03] |
| stale-vs-v3 | AFFIRM/PARTIAL · build=partial |
| weight_tier | spine |
| status | promote (as OMNI distinction; reject flat-knowledge-bucket) |

---

**B. Net-new primitives (dedup vs baselines + waves 2/3/4 + 251/256/271/274 + §C)**
- `knowledge_execution_coordination_stack` — thin net-new FRAME for the AI-execution column (composes Knowledge Reservoirs + Agent Runtime + CNS). → promote-as-frame (NOT a replacement ontology; execution stack ⊂ governed substrate).
- `coordination_strategy` / `meta_harness` + `token_job_allocation` ("tokens not fungible") — **SHARPEN CNS orchestration** (strategy graph of advise/execute/reflect/grade/memory jobs; job ≠ agent-persona). → promote.
- `internal_external_same_primitives` (ecosystem-not-walled-garden) — **EXISTS-AS/SHARPEN: 251 internal/external membrane + §C open-rails-closed-authority.** AFFIRM (★ operator DNA). → promote.
- `own-meaning-not-rails` build-vs-buy boundary — **EXISTS-AS/SHARPEN: §C rail-agnosticism + 256 harness-sovereignty + 268/272/274 build-vs-buy.** → promote as Build-OS doctrine.
- `coordination ≠ more agents` — **AFFIRM/reconcile: 271 flat-agent + 274 workload-topology + 231 monolith-first.**
- `knowledge-layer ≠ canonical truth` — **AFFIRM: Knowledge Reservoirs authority classes + candidate≠commit.**
- `form_factor_churn` → robust-primitives — **AFFIRM: `DEC-033` surfaces-as-projections.**
- REJECT/QUALIFY: three-layer stack AS the whole OMNI ontology (it's the execution column only); flat "knowledge layer" (collapses authority classes); vendor token-economics forecasts; product endorsements as architecture.

**Net-new verdict: ~0 net-new DOMAIN objects; the value is CONVERGENCE + framing** — the AI-execution stack (knowledge→execution→coordination), the meta-harness/token-job sharpening of CNS, and (★ operator DNA) the internal=external-same-primitives ecosystem model. All compose existing OMNI physics; the load-bearing correction is that the stack ends at coordinated intelligence while OMNI's governance begins where that intelligence touches care/money/truth/obligation.

**C. Reread flags (operator-flagged top-5 — revisit at high levels)**
- **v4 spine + §B AI substrate:** Clusters 1–2 (knowledge→execution→coordination + meta-harness/token-jobs) — reread when authoring the AI-substrate + CNS orchestration + Agent Runtime spine. The AI-execution-stack frame belongs high in v4.
- **§C + Federation + business model (★ Nick's DNA):** Cluster 3–4 (internal=external same primitives; own-meaning-not-rails) — reread when authoring §C governed capability exchange + Federation + the internal/external organism thesis (with 251).
- **C3.9 plastics/medspa:** Cluster 5 (don't over-fit one operator; robust primitives + overlays).
- Keep OMNI's authority/candidate-commit distinctions above the flat "knowledge layer"; treat token-economics forecasts + product endorsements as vendor strategy (`GRD-039`).

**D. One-line hard read**
Full_semantic **SPINE, operator top-5 ("DNA of OMNI"), ~0 net-new**: the durable AI-platform stack is knowledge→execution→coordination and the durable moat moves UP into strategy/verification/authority/outcomes — OMNI should be one internal+external organism on the SAME governed primitives (ecosystem, not walled garden), owning meaning/authority while renting interchangeable rails — because *Anthropic's three layers describe how intelligence becomes organized work; OMNI must govern how organized work becomes authorized reality: the token has a job; the domain has authority.*

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

### Review 004 — semantic-fidelity restoration

- reviewer: Opus (restoration subagent) · type: AI assistant · at: 2026-07-18 · purpose: recover Knox Review-001 nuggets dropped/flattened in Review 003 (nugget-preservation audit + Knox semantic-restoration ruling) · binds nothing (GRD-036/GRD-044). Append-only — Review 003 is NOT modified.

**Method.** Full transcript-native reread — read §1 verbatim transcript (timestamped) + §3 Review 001 (Knox, sections A–AJ) + §3 Review 002 (Nick) + §3 Review 003 (Opus, 6 clusters) in full; verified every restored nugget against Knox's read AND the transcript rather than copying the restore ledger. **Fidelity verdict: SIGNIFICANT-FLATTENING** — Review 003's 6 clusters faithfully carried the two spine keepers (three-layer stack; internal=external) and were anchor-clean (0 fabrications), but omitted or flattened the bulk of Knox's ~36 lettered sections, biased toward (1) skeptical counterweights / what-NOT-to-import, (2) named candidate-primitives left un-dispositioned, (3) care/authority execution governance swept under the "~0 net-new" verdict. **Restored: 27** (18 omitted · 8 flattened · 1 inverted). **Weight-change: YES** — restoration adds care-safety/authority GUARDRAILs (§AH, §AF, §AG, §J, §H) + PRIMITIVE-CANDIDATEs (§L, §R, §Q, §V) to the record that Review 003 did not carry; **the dedup verdict itself ("~0 net-new DOMAIN objects") is unchanged** — these are cautions / sharpenings / guardrails / primitive-candidates, not new domains.

| # | restored insight (verbatim-ish ≤20 words) | source / R001 anchor | loss_type | why material to OMNI | disposition | destination home | relation to prior registry concept | status |
|---|---|---|---|---|---|---|---|---|
| 1 | "Computer use can bridge a missing API; it must not masquerade as a reliable transactional interface." | "they don't even have APIs…how can they use computer use" [35:48–36:04]; [Knox §AH] | omitted | Only explicitly-healthcare execution requirement the source volunteered; legacy-EHR reality for OMNI's wedge. | GUARDRAIL | Federation / vendor_integration / degraded_mode | extends open-rails / connector governance (typed degraded rails) | restore→propose |
| 2 | Agent exposed as a tool: "identity, delegation, output authority must not disappear behind the function signature." | "expose an MCP server on top of this agent…call a tool on that agent" [36:57–37:22]; [Knox §U] | omitted | A2A/Federation: a broad-access agent must not become a deceptively simple tool call. | SHARPEN | §C governed capability exchange / A2A / Federation | sharpens §C capability envelopes (`agent_as_capability_adapter`) | restore→propose |
| 3 | "Reflection may propose learning; the memory owner determines what survives." | "reflect on your past agentic sessions and write learnings to memory" [27:49–27:58]; [Knox §AF] | omitted | Reflection can contaminate memory / make unauthorized patient inferences; must stay candidate, not silent canon. | GUARDRAIL | Knowledge Reservoirs / CNS memory-promotion / `06` digest | AFFIRMS candidate≠commit for memory-write | restore→propose |
| 4 | "Delete scaffolding that compensates for weak steering; preserve controls that encode authority and safety." | "you can delete that part…delete part of those harnesses" [29:23–29:39]; [Knox §AG] | omitted | Guards against stripping identity/permissions/audit/verification as "the model got better." | GUARDRAIL | Agent Runtime & Harness / `06` digest | distinguishes steering-scaffold (may shrink) vs authority-scaffold (must not) | restore→propose |
| 5 | "Primitive parity prevents platform fragmentation; capability envelopes prevent privilege flattening." | "same primitives that are available to everyone" [4:25]; [Knox §F] | flattened | Same-primitives (Cluster 3) must not read as same permissions / data / autonomy / assurance. | SHARPEN | §C capability envelopes / RBAC | sharpens Cluster 3 (internal=external same primitives) | restore→propose |
| 6 | Org-level harness feels simple only because identity/context/permissions/runtime beneath it are rigorous. | "org level harness" (Karpathy) [24:39]; [Knox §J] | omitted | The Claude-Tag "iceberg" — surface simplicity rests on rigorous substrate. | SHARPEN | Agent Runtime / surfaces / §C | AFFIRMS surface-is-tip / substrate-underneath | restore→propose |
| 7 | Non-human actor needs visible identity, owning operator, revocation, and **non-deceptive presentation**. | "you want the agent…to basically be like another person" [25:48]; [Knox §J] | omitted | "AI coworker" marketing must not hide that a non-human actor is acting; care-relevant. | GUARDRAIL | security / §C / surfaces | net-new non-human-actor governance framing | restore→propose |
| 8 | "A cache hit is success only when cached context is still authorized, coherent, and current." | "prompt caching. Do it." [26:41–27:01]; [Knox §L] | omitted | Cache reuse can leak stale/cross-tenant/revoked PHI; caching needs healthcare-grade scope keys. | SHARPEN + PRIMITIVE-CANDIDATE | Agent Runtime / security / Build-OS | `cache_scope_key` / `cache_invalidation_event` / `cache_provenance_record` | restore→watch |
| 9 | "Context management is preserving coherent work while externalizing durable state" (not stuffing/summarizing). | "clear old stuff out of the window…keep it clean" [26:41–26:48]; [Knox §M] | omitted | Runtime context health is active work; converges with OMNI's live finding. | SHARPEN | Agent Runtime (context health) / boot §11 | AFFIRMS "conversation is execution context, not canonical memory" | restore→propose |
| 10 | "Move computation to the data; move only the governed result and necessary evidence into context." | "call tools programmatically so you don't pull everything into the context window" [26:41–26:48]; [Knox §N] | omitted | Reduces token cost, latency, PHI exposure, context dilution, accidental leakage. | SHARPEN | Agent Runtime / Knowledge Reservoirs / privacy | Knox: "a quiet but important architectural gem" | restore→propose |
| 11 | "Outcome and budget tell what success costs; authority and proof tell what success is *allowed to mean*." | "just tell an agent here's the outcome…and here's the budget" [33:42–33:51]; [Knox §R] | omitted | Governed work-order needs subject / authority / evidence / commit-owner — outcome+budget is insufficient. | SHARPEN + PRIMITIVE-CANDIDATE | Agent Runtime work-order / Build-OS | pairs with 274 `claimable_work_item` | restore→propose |
| 12 | "AI may become universal infrastructure; care still requires non-fungible authority and meaning at every outlet." | electricity metaphor "wire it into everything" [15:06–15:29]; [Knox §T] | omitted | Rebuts the electricity/fungibility framing — AI outputs differ in evidence, provenance, authority, liability. | SHARPEN | thesis §C / §1 | rebuts electricity-as-fungible-utility import | restore→propose |
| 13 | "Be vendor-portable at the control plane and model-specific at the execution plane." | "harnesses…should be tuned to the model family that you use it with" [41:11–41:19]; [Knox §V] | omitted | Avoids both hard-coding to Claude and pretending all models interchange. | SHARPEN + PRIMITIVE-CANDIDATE | Agent Runtime / model routing | `model_family_harness_profile` | restore→watch |
| 14 | "Model routing without harness routing is incomplete" — route evaluated agent bundles, not naked models. | "plug in the whole harness and the whole agent that's tied to a model family" [41:35–41:43]; [Knox §W] | omitted | A router should ask which evaluated `agent_bundle` is eligible, not "Claude or GPT?". | SHARPEN | Agent Runtime / model routing / CNS | `agent_bundle` = model+harness+tools+skills+memory+verifier | restore→watch |
| 15 | "One substrate can support primitive, managed-runtime, and outcome buyers without three architectures." | AI-native go for primitives; enterprises reach for managed agents [8:19–9:04]; [Knox §Z] | omitted | OMNI should expose primitive / managed-runtime / domain-workflow / first-party abstraction tiers. | SHARPEN | BIZOPS / product / §C | abstraction-tier product model | restore→propose |
| 16 | "Govern AI spend by outcome, risk, and workload — not by one undifferentiated token ceiling." | shadow-IT cloud-code [39:06–39:22]; "here's a cap…ready set go" is dangerous [42:50–42:57]; [Knox §AC] | omitted | A flat cap blocks high-value work and pushes staff to unmanaged tools. | SHARPEN | BIZOPS AI-spend governance | cost-per-verified-outcome / shadow-agent discovery | restore→propose |
| 17 | "Route by complexity AND consequence — not complexity alone" (a simple task can be high-consequence). | complexity router: hard→big model, easy→cheap model [39:46–40:09]; [Knox §AD] | omitted | A simple task may send a controlled-substance message or update an allergy — route by consequence/reversibility. | SHARPEN | CNS routing / Agent Runtime / care safety | adds consequence/authority axis to complexity routing | restore→propose |
| 18 | Radius topology: Build → Operate internally → First-party → Federated operators → External ecosystem. | "internal and external…intentionally keep it equal" [4:09–4:25]; [Knox §E] | flattened | Cluster 3's generic "radii + trust postures" loses the concrete five-radius governance gradient. | SHARPEN | Federation / thesis §1 organism / C3.9 | sharpens 251 membrane + Cluster 3 | restore→propose |
| 19 | Don't collapse coordination into CNS — Build-OS / security / BIZOPS / Accountability also consume it. | coordination layer / meta-harness roadmap [11:11–12:08]; [Knox §D] | inverted | Review 003 mapped "L3→CNS orchestration," the exact collapse Knox warns against. | CORRECTION / SHARPEN | Coordination Charter / CNS / Build-OS | strategy composition = cross-cutting substrate; CNS = one authority-aware consumer | restore→propose |
| 20 | "Outcome density must be OMNI's" — the best workflow may no-op or suppress an unnecessary message. | "take Opus and run it all night" vs smarter strategy, same outcome, lower cost [43:12–43:28]; [Knox §AB] | flattened | Only the token-economics *reject* survived; the positive outcome-density obligation was dropped. | SHARPEN | CNS / thesis §2 / BIZOPS | token-hunger is vendor's model; outcome density is OMNI's | restore→propose |
| 21 | "Dogfood the platform; do not canonize the dogfood." | "never want to…overindex on the problem…for an internal user" [5:30–5:53]; [Knox §G] | flattened | One clinic / physician / Stripe config / specialty must not become universal substrate truth. | SHARPEN / GUARDRAIL | Build-OS / C3.9 / substrate governance | internal use + external feedback → reusable primitive (not canonized dogfood) | restore→propose |
| 22 | AI-generated customization must compile into governed config / skills / bounded capabilities — not arbitrary forks. | "last mile of custom software…very achievable" [3:04–3:20]; [Knox §H] | flattened | Last-mile expression must not become one-fork-per-customer that redefines clinical truth. | GUARDRAIL | Federation / operator policy overlays / §C | governed last-mile composition over stable primitives | restore→propose |
| 23 | "Generic context-window plumbing may commoditize; care-context governance does not." | "the context bit is actually a little overdone" [32:10–32:18]; [Knox §P] | omitted | The source's biggest tension with OMNI: in care, "having the data" is nowhere near sufficient. | SHARPEN / GUARDRAIL | Knowledge Reservoirs / context admissibility / care | OMNI owns context *meaning and admissibility* | restore→propose |
| 24 | A strategy is a reusable spec of which cognitive jobs occur and how they interact (not a better loop). | "strategies or meta harnesses" [27:34–28:22]; [Knox §Q] | flattened | Cluster 2 kept the meta-harness idea but dropped `strategy_profile` as a named, fielded primitive-candidate. | PRIMITIVE-CANDIDATE | Agent Runtime / CNS / Build-OS | `strategy_profile` (objective/risk/roles/verifier/budget/stop) | restore→watch |
| 25 | "Model specificity justifies profiles and evals — not surrendering platform sovereignty." | "we are designing our platform for Claude…restrict to that space" [40:48–41:03]; [Knox §X] | flattened | Import the technical truth (model/harness coupling); reject the vendor conclusion (one model family forever). | GUARDRAIL / REJECT-ADD | model routing / §C sovereignty / `GRD-039` | separates technical coupling from vendor lock-in | restore→propose |
| 26 | "Standardize connection and exchange; govern meaning and adoption." | transactability + standard-setting + shared safety standards [13:41–14:04]; [Knox §AI] | flattened | Open interfaces (MCP/skills) don't settle what a patient / active order / valid prescriber is. | SHARPEN | §C / Federation / semantic reconciliation | interface-standard open, semantic-standard governed | restore→propose |
| 27 | Strategies allocate intelligence per dollar via advisor→executor→verifier→reflection, not just bigger/longer models. | "advise with a bigger model so that a smaller model can execute" [27:49–28:06]; [Knox §AE] | omitted | The strategic unit of optimization is the verified workflow, not the individual model call. | SHARPEN | CNS / Build-OS / progressive-fidelity | AFFIRMS progressive-fidelity / risk-tiered execution | restore→propose |

**Restoration verdict.** SIGNIFICANT-FLATTENING confirmed and repaired: 27 material Knox nuggets restored (18 omitted / 8 flattened / 1 inverted §D coordination-collapse), adding a care-safety + authority-governance + primitive-candidate layer that Review 003 dropped — while the "~0 net-new DOMAIN objects" dedup verdict stands unchanged (PROPOSE-ONLY, `GRD-036`/`GRD-044`; nothing promoted).

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000006` (ai-corpus wave-5) · concept_registry: `EVRUN-2026-000006_ai-corpus-wave-5_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000006_ai-corpus-wave-5_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `§B AI substrate (massive — knowledge→execution→coordination stack) · Agent Runtime & Harness (massive — execution layer; meta-harness) · CNS orchestration (massive — coordination strategy; token-job allocation; coordination≠more-agents) · §C governed capability exchange (★ internal=external same primitives; own-meaning-not-rails) · Federation / ecosystem topology (251 membrane) · Build-OS build-vs-buy · Knowledge Reservoirs (candidate≠canonical) · Surface/Projection (form-factor churn, DEC-033) · thesis §1/§2 (internal+external organism + moat) · C3.9 (don't over-fit one operator)` · promotion: `watch → promote-candidate (~0 net-new domain objects; AI-execution-stack frame + meta-harness/token-job CNS sharpening + internal=external ecosystem AFFIRM); three-layer-as-whole-ontology / flat-knowledge-layer / token-economics-forecasts rejected GRD-039`
- **★★ Operator-flagged (Review 002): top-5 source, "DNA of OMNI," incorporate at high levels; revisit.** **Cross-source convergence:** first-party platform-strategy spine atop **251** (internal/external membrane), **256** (harness-sovereignty), **235/274** (harness/work-factory), **271** (flat-agent), **§C** (open rails/closed authority). Pairs with **270** (ontology/federation) as the wave-5 substrate/federation DNA pair. Folds into wave-5 registry as the AI-substrate + platform-strategy + internal/external-organism anchor + flagged v4-spine input.

## §5 — Change log
- `2026-07-14` — source file created (wave-5 scaffold; `EVRUN-2026-000006`).
- `2026-07-15` — Opus Review 003 formal deep extraction written into §3 (formalizing Knox Review 001 + honoring Nick Review 002 "DNA of OMNI"); §0/§0.1 metadata filled (Sequoia · Anthropic — Katelyn Lesse + Angela Jiang × Sonya Huang + Lauren Reeder); file renamed `_TK` → `_anthropic-platform-ecosystem-not-walled-garden-three-layer`; §4 pointers filled (`EVRUN-2026-000006`); status → `analyzed`. Verdict: full_semantic SPINE, ~0 net-new domain objects but strongest first-party convergence for the AI-execution stack (knowledge→execution→coordination + meta-harness) + internal=external same-primitives ecosystem (Nick's DNA-of-OMNI); keeper = the token has a job, the domain has authority; three-layer-as-whole-ontology / flat-knowledge / token-economics-forecasts rejected (`GRD-039`). Flagged for repeat revisits (v4 spine).
- `2026-07-18` — Opus (restoration subagent) appended §3 **Review 004 — semantic-fidelity restoration** (Knox 2026-07-18 semantic-restoration ruling; wave-5 nugget-preservation audit `EVRUN-2026-000006` restore-ledger). Full transcript-native reread; fidelity verdict **SIGNIFICANT-FLATTENING**; **27 Knox nuggets restored** (18 omitted / 8 flattened / 1 inverted — §D coordination-into-CNS collapse), incl. §AH degraded-healthcare-rails · §U agent-as-capability-hides-authority · §AF gated memory-write · §AG preserve-authority-scaffolding · §F privilege-parity · §J non-human-actor governance · §L cache governance · §M/§N context health + move-compute-to-data · §R work-order shape · §T non-fungible-authority · §V/§W harness routing · §Z abstraction tiers · §AC/§AD spend/route-by-consequence · §E radius topology · §AB outcome-density. **Append-only — Review 003 / §1 / §0 NOT modified.** PROPOSE-ONLY (`GRD-036`/`GRD-044`); nothing promoted; the "~0 net-new DOMAIN objects" dedup verdict is unchanged.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

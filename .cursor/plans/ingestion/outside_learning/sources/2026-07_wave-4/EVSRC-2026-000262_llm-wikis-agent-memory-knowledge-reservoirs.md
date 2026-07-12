# EVSRC-2026-000262 — <title or TK>

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed` (Review 003 written 2026-07-11; folded to `EVRUN-2026-000005`; 0 net-new + 5 sharpenings + 2 guardrails + 1 REJECT; propose-only)**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-4 scaffold (created 2026-07-11). Register/run: see `../../00_index.md` (wave-4). EVRUN to open at processing = `EVRUN-2026-000005` (or fold into wave-3 per operator).
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — AS-IS) + optional gut note (§3 Review 002). Then Opus writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry**, coverage matrix, and fills **§4 pointers** at closeout. Deep read lives HERE in §3 — never a sidecar (`GRD-044`).

## §0 — Source identity / metadata  *(normalized by Opus from Knox §3 rough-metadata + transcript)*
- evsrc_id: `EVSRC-2026-000262`  ·  filename: `EVSRC-2026-000262_llm-wikis-agent-memory-knowledge-reservoirs.md` *(renamed from `_TK` 2026-07-11 wave-close)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=Lsut4TCfygw`  ·  source_title: `LLM Wikis and how to give your agents memory`
- channel_or_org: `LangChain`  ·  speaker: `Harrison Chase, Brace Sproul, Devin Stein, Jeff (Chroma)`  ·  published_at: `2026-07-10`
- captured_at: `2026-07-11`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `expert panel (agent memory / organizational knowledge infrastructure / retrieval / maintenance)`  ·  source_reliability_context: `high-value practitioner panel with competing vendor perspectives — strong for design patterns + unresolved questions + first-principles distinctions; weaker for production outcome claims (experimental/self-reported)`  ·  topic_tags_light: `[LLM_wiki, agent_memory, Knowledge_Reservoirs, compiled_knowledge, knowledge_cache, freshness, eviction, progressive_disclosure, organizational_memory, proactive_agents, retrieval, RBAC]`

## §0.1 — People / authorship / authority context
- primary speaker(s):
  - name: `Harrison Chase` · role_in_source: `moderator` · affiliation_at_publication: `LangChain (co-founder/CEO)` · speaker_type: `founder/agent-framework` · authority_context: `agent infra; frames via harnesses` · identity_confidence: `high`
  - name: `Brace Sproul` · role_in_source: `panelist` · affiliation_at_publication: `LangChain (Head of Applied AI)` · speaker_type: `vendor practitioner` · authority_context: `presents OpenWiki auto-maintained memory (Notion/Gmail/Slack); see 263 impl demo` · identity_confidence: `high`
  - name: `Devin Stein` · role_in_source: `panelist` · affiliation_at_publication: `DOSU (founder/CEO)` · speaker_type: `founder` · authority_context: `strongest conceptual challenge — "cache/compiled index" > "wiki"` · identity_confidence: `high`
  - name: `Jeff` · role_in_source: `panelist` · affiliation_at_publication: `Chroma` · speaker_type: `vendor practitioner` · authority_context: `retrieval/indexing/progressive-disclosure/human-legibility/maintenance difficulty` · identity_confidence: `medium`
- publisher / channel: `LangChain`  ·  interviewer / moderator / host: `Harrison Chase`
- event_context: `panel where the speaker DISAGREEMENT is the value — agree on need for persistent compiled knowledge, disagree on audience/representation/storage/maintenance/autonomy`  ·  perspective / conflict notes: `competing vendor perspectives (LangChain/DOSU/Chroma); OpenWiki/Chroma = named rails, not commitments`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it, but every claim still routes through evidence → interpretation → gated promotion.

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
Welcome everyone. Uh we're really excited to be doing this. Uh I will wait
0:07
a second for Devin and Jeff to to join us. Um and there we go. All right. So,
0:14
thank you. Uh thank you everyone for tuning in. Thank you Devin and Jeff and Brace for being here. Excited for this.
0:20
This was a last minute webinar. Normally we try to do kind of like a month ahead of time, but this was just such a hot topic that we decided to put together uh
0:26
we decided to put together last minute as I was uh getting uh lunch with Devon
0:32
uh last week um and then and texting with Jeff. And so I'm really excited for this. I think wikis and uh the idea of
0:39
memory or knowledge has well memory and knowledge have always been hot from kind of like the early days of rag to to
0:46
memory and I think wikis with with uh some of the stuff in the coding space and with karpathy have kind of emerged
0:53
as an interesting way of representing this and so I think everyone on this call has been thinking about um uh wikis
1:01
or memory or knowledge management in some form for a while and So, uh, really
1:07
excited to do this. And I think we've got some differing opinions on here as well. Devin told me he has a hot take that wiks are the wrong abstraction, and
1:13
we can get more into that later. Um, but to start, um, I figured I it would be
1:18
good to have everyone, uh, talk about, uh, slashdemo what they've been working
1:24
on for, uh, no more than two minutes, uh, each. This will be a hard stop. I'm
1:30
going to I'm going to actually time it. Um, but we'll let's let's go. Uh, let's go. brace Devon and Jeff I guess in in
1:37
that order. Um and if you guys could introduce yourself and then do a do a twominut or less kind of like
1:43
walkthrough of what what you're building and how you're thinking about wiksmemory
1:49
knowledge. Brace you're up. Sounds good. Um hey everybody. I'm Brace. I I lead a plati here at Lang
1:55
Chain. I've been thinking a lot about wikis and memory uh recently. Um so let
2:01
me figure out how to share my screen first. Uh and then I can go through a
2:07
demo on open wiki which is our new memory uh uh CLI agent um that we have
2:14
just released. So screen share we'll do
2:21
this. All righty. So open wiki is a new memory CLI that we just released and we
2:27
actually just released a new 0.1 uh uh version this morning with uh a
2:32
general purpose memory module. So the idea behind open wiki is we think that you know or from from our experience
2:39
right uh generating and maintaining memories is very difficult um and timeconuming and tedious. So so we wanted to abstract that all into a CLI
2:47
um that is super easy to set up and then just runs in the background without you needing to think about it. So we built a
2:53
wiki. It's a CLI you can install through npm and then getting it set up is is super easy uh and you can use it to
2:58
document either your own like personal work and and general purpose memory or code bases. So for this I'm going to
3:04
show off our personal memory module uh because this is what we just released this morning. Setting it up is super easy right you just run open wiki
3:10
personal init and then you just configure you know your your model provider uh your model uh and then we
3:15
ask you to set a prompt. So we call this a wiki brief. Uh this you can think of as like a prompt that you would give to your memory agent. So it knows what to
3:22
focus on uh what not to focus on you know what you want it to remember and how you want to structure your memories. We provide a default as you can see
3:29
here. So I can go and accept this. Um and then the nice thing about open wiki rate is it automatically updates itself.
3:34
So one of the most tedious parts about maintaining or about you know memories and and and documentation is you need to
3:39
keep these constantly up to date. Uh so with open wiki we just have it run a cron job every day. Uh so we suggest
3:44
like 2 am you can use this uh then we can also make it so it can you know automatically wake up your Mac in the
3:50
middle of the night. uh you do this and then you connect your your providers like notion, Gmail,
3:55
Slack, it'll ingest data from all of that. Um and then when you've connected all of them and it runs uh it will
4:02
automatically write docs. All right, we're we're harsher than the the academy here. Um I was trying to get
4:08
some music to play you off, but I couldn't figure out how to do that in time. Uh Devin, do you wanna Do you want
4:13
to go? All right. Yeah. Thank you, Harrison. Thanks everyone for joining. Um I'm
4:19
Devon Stein, CEO and founder of DOSU DOSU's knowledge infrastructure for agents and humans. So we're helping
4:26
curate and share knowledge uh to make agents more token efficient and reliable. So [snorts] I will do my power
4:33
demo. Let's see. Can you see my screen?
4:39
Yes. So um you know with DOSU we plug right into your kind of coding agent
4:45
workflow and so that's mainly through MCP and so as agents are working on a
4:51
task um they're going to use one of our APIs or tools for reading or writing knowledge. So if [clears throat] we just
4:57
take off an example task, let's say we're going to create some new userfacing database table. You
5:03
[clears throat] know what Claude is going to do in this case, it's going to work. It's going to learn about your project, your organization um as it's
5:09
building this new feature. And then with [clears throat] DOSU, it's able to capture
5:15
that those learnings as kind of a persistent knowledge for your organization. And [clears throat] so
5:21
what that'll look like because of the sake of time you'll get a call like this where you'll write knowledge with whatever it learned like in this case
5:27
how does the schema table and you know database migrations work in the background that'll kick off DOSU's kind
5:35
of librarian agent to generate a what we call a knowledge index or topic page
5:42
that is human readable uh which is very important but uh optimized for agents. So it's very concise um highly
5:48
referential and like information dense. So basically whenever an agent works on a topic like this again we auto inject
5:56
that into the cloud code session. Um and then also automatically keep all this
6:02
knowledge up to date as code changes. Um and then lastly you know the hardest part about wikis which we'll talk a lot
6:08
about is like understanding the impact. And so we also give you analytics to understand like how are you how your
6:14
agents are actually using this wiki and the impact it's having on your organization.
6:20
Awesome. Right on time. Super super prompt. Thank you, Deon. Uh all right, Jeff.
6:27
Okay, great. Um I do not have a live demo to share, but I will attempt to describe why we're interested in this
6:32
topic. Um, so by brief history, um, if you go to the [clears throat] aigrant.com website, you'll see chroma
6:39
described as programmable memory for AI. This is in 2023, I believe, when we sort of coined that. And so I've been
6:44
thinking about this problem now for many years. Um, you may know Chroma as a so-called vector database. I think
6:49
actually the problem that we solve is we figured out how to store massive amounts of unstructured data and make it
6:55
extremely queryable by AI and by humans. And that's kind of the key job to be done. Um, we also in the spring released
7:01
a model called context one. It's a model that's state-of-the-art at the task of agentic search. Um, and so, uh, I think
7:07
that, you know, one way that we think about like this wiki thing is that it's in some ways like a new kind of index. It is a way to, uh, process large
7:14
amounts of unstructured data and create some level of a map on top of that unstructured data. Um, you know, very crudely, maybe if you have like no
7:20
indexing at all, it's like just a big blob of data, you can sort of send in probes and guess and check. And then like if you have embeddings, sparse or
7:27
dense embeddings, you have like the topology of the map, but you're still kind of guessing and checking. And then with a wiki, it sort of adds like the
7:33
road network and like adds all the pipes and the connections between these places and allows the agents to better traverse things. Um, and it avoids context fraud
7:40
and lots of other things. So we're really interested in this idea of like wiki as a new form of indexing. Um, we ourselves as our own team have been
7:46
experimenting with building like our own teams like organizational memory um by ingesting lots of unstructured data and
7:53
building one of these things. I'm very interested to see uh uh these hot takes about wiks being uh right or wrong.
7:58
We've certainly found that they are really hard to both build and very hard to maintain. Um and it's sort of
8:04
unobvious like you know should pages be long if pages be short. Um you know how do you maintain like freshness? How do
8:10
you maintain consistency? Um you know introduces a lot of new and complex problems that are both like maybe
8:16
partially addressable by like the props and changing the prompts but also I think uh many of these are actually like
8:21
systems engineering problems uh where you need to think about concurrency control and whatnot. Um and they are not easy problems to solve. So, uh, we'll
8:28
see, uh, what we come up with at Chroma. Um, but that is some setting some context of why we're interested in the topic.
8:33
Awesome. All right. So, so great intros from everyone. Uh, real quick before we dive in, there is a Q&A, uh, there is a
8:41
Q&A section. Um, please put any questions you want answered there. We'll probably spend the last kind of like 15
8:48
uh, minutes or so answering answering audience questions. So, put anything you want answered there. Um, and if you like
8:54
uh if you like um if you like questions, upvote them. Uh, I'll probably sort through them in terms of the amount of
9:00
upvotes they get. So, please use that to make sure that we're answering the stuff that's top of mind for everyone. Um,
9:07
maybe to get started, uh, I think it would probably be helpful to just like try to even define what a wiki is. And
9:13
so maybe I'll take like an initial stab and then you guys can each tell me what I'm wrong or or where I'm wrong or what
9:18
I'm missing or things like that. So, like when I think of a wiki, naively I think of kind of like a set of files in
9:25
some directory structure that is usually like generated by an agent and usually
9:33
for an agent. Um, and maybe I'll stop really there with the with that brief description. Is there stuff I'm missing?
9:38
Like how do you guys think about wiks? I think that definition of wiki is
9:44
overfit to the technology and overfitit to the use case in some ways. um like what does a wiki actually like how does Wikipedia store data like is it in a
9:52
file system no is it for agents also no is it a wiki yes um so I I would try
9:57
more of an abstract definition of a wiki which is like roughly some level of hyperl pages right it's in some ways an
10:03
internet right you have a bunch of pages and they're linked together um and they're again intended to beformational
10:09
they're intended to be clear there's sort of a the the layout of the page is intended for information consumption you
10:15
know there's not lots of distracting advertisements everywhere where um but uh yeah that's I I'll stop there. That's
10:20
sort of maybe some thoughts about what wikis are. Yeah, I mean I kind of agree with Jeff, right? It's like a collection of files
10:27
in today's day and age is kind of like markdown files uh that document something whether that's actual docs or
10:33
you know notes or memories. Um, but like at its core, it's just just, you know, a large collection of files that are that
10:39
are linked together some way through like page linking or an index um that that you know contain text and
10:45
documentation that agents or humans can then consume.
10:50
Yeah, I I would agree. I think specifically to like the LLM wiki, maybe not wiki. I think generally I agree with
10:56
Jeff's definition like inter you know pages that are linked together.
11:02
But I think for the LM wiki, I think Andre Carbathy's tweet kind of does did a good job of like I really think of it
11:08
as like that compiled knowledge aspect like you're taking sources and you're basically building an index. I you know
11:15
I very much agree with Jeff's framing there where each page is acting I mean I'm biased but as like a cache basically
11:21
it's compiling knowledge for future reference so you don't have to reexplore that information.
11:27
Yeah, I thought that was a really when we were having lunch de I thought that was a really interesting analogy. Could you expand on kind of like that the the
11:33
cache framing of it? Yeah, I think so uh I guess this gets
11:38
meta into like you know the purpose of a wiki or like the wiki abstraction. And so my uh you know I think the thing
11:46
that I don't love about wiks today in terms of like how the implementations are is that if you tell an agent to
11:53
generate a wiki it generates something that you know because it's trained on human wiki data it'll look like a wiki
12:00
for a human and those characteristics are and it you know because that's only what has existed today right and what
12:06
that usually looks like is it has some level of ordering you know you often see like a getting started like in
12:13
architecture there's like kind of a common structure that LLM or agents will go to when you tell it to generate a
12:19
wiki that is inherently in my mind like kind of human oriented where there's an expectation that someone's reading it
12:25
sort of front to back and then [clears throat] separately is like you
12:31
know when you start to think about like what is the um you know why have a wiki right if you think about from first
12:37
principles for agents there's sort of two types of knowledge that will live in a wiki
12:43
one is like what I call necessary knowledge which is like information that doesn't exist anywhere else and so like
12:49
if you know the agent doesn't have a way to get access to that information unless it's like documented in the wiki. Um
12:55
then the other knowledge the one that's like more of the compiled knowledge that you're generating from sources is is
13:01
sort of functional, right? It's there because it's going to make the agent more efficient where it doesn't have to
13:07
reexplore that information to get to the same conclusion. you know sort of like you know caching knowledge is like I
13:14
think an interesting anal analogy and then if you take that analogy further right it's like like a cache you only
13:22
you don't want your entire database to be a cache because that'll be very expensive because you have to keep it up to date with the source of truth and so
13:30
um you only want to sort of cach what is relevant and is going to be accessed
13:36
frequently or is expensive to recomputee and So yeah, the I guess generally think
13:43
that um the wiki concept makes sense, but I think like the default implementation is is too kind of from a
13:49
human perspective. Maybe question for folks. It sounds like
13:55
you very much think of these LLM wiks as being for agents. Um, do do Jeff embrace
14:00
do you guys agree with that or do you think this con and like yes wiki wiks can be anything but when people are talking about LLM wiks or when you guys
14:07
are thinking of what you guys want to build in the wiki adjacent space do you mostly think of building it for agents
14:13
or for humans and is is that the same? I think historically this term has been used as a way to describe documentation
14:20
that both humans and agents consume. If we think about like deep wiki from from cognition which I think was like the
14:25
first wiki to be popularized that was you know a website which us humans can go to and look through. Um but then they also have like MCP server for agents to
14:32
consume. And I think that that's that's not like a bad way to think about it but going forward if we think about like
14:38
where agentic development is going. Most things are moving into an agent. You're you humans are doing less and less of
14:44
like the nitty-gritty and that means we're reading less of docs and we're more like asking our agent to communicate with docs and service
14:49
information to us. So I I think that going forward these these wiks should be primarily designed for like pure agent
14:56
uh interfacing and then you use your agent to then surface that information up to you.
15:02
I think if talking to a venture capitalist obviously the answer is they're all for agents exclusively. Um I think in practice that's not the case.
15:09
Uh so take like one thought experiment. Let's say that it was optimal for your agent to store this entire wiki actually
15:14
not in natural language or English at all but only in latent vectors that are completely legible to humans, right? Like in a way that would be like oh
15:21
that's cool that that exists. However, it breaks the ability for we as humans to have any level of control or steerability over the wiki and like any
15:28
level of legibility and sort of shared workspace. And so like I actually think it's really important for these wikies to be in English and not in latent
15:34
vectors. And so that actually what that sort of motivates or tells you is that the wiki is for both. is for both the agents but it's also for humans as well
15:42
maybe okay maybe diving uh deeper into that um as as all of you guys are
15:47
building products how do you think about the human in the loop the human steerability that like where
15:54
what is the right way for humans to interact with this wiki creation curation whatever you want to call it
16:00
process what does that human in the loop process look like for you guys I have two thoughts one I think there's
16:06
a distinction because I was going to say actually very similar thing to Jeff like yeah you could take it to the extreme
16:11
where like actually agents have like their own wiki language that we don't understand you know it's just in laten space but I I think from uh there's a
16:19
difference between like if humans if it's human interpretable which I think is actually very very important um
16:25
versus like the audience is a human like is the same person that's going to like
16:30
you know be reading that page and so I do think like we want to optimize for
16:35
ages as the audience but keep it human interpter And
16:41
and yeah and then in terms of like
16:47
you know what like what was the question? [laughter]
16:53
How how do you when people when humans are using the loop? Yeah. Yeah. Keep in the loop for do.
16:58
Okay. So um we uh you know as part of the product right we keep people in the loop because a lot of it is tied to the
17:05
PR review process. So we do knowledge reviews um similar to like a code
17:10
review. So you humans are kind of observing how knowledge is changing but they don't necessarily have to approve
17:16
every change. I think I mean what we've heard from our customers as well is that you know they don't they're already
17:22
overwhelmed with code review. They don't want knowledge review to be burden as well. The other side of it um is I like
17:29
to say that knowledge is eventually consistent. Meaning that if it is incorrect, as long as you kind of build
17:35
in self-correcting mechanisms, it'll, you know, ultimately be fixed in the future. So if you, you know, kind of
17:41
cache or like write at a wiki entry that's incorrect and you provide mechanisms for the agent that, you know,
17:46
reads that and then finds out that it's incorrect, it can just correct it in the future. You know, you lose like some
17:52
token efficiency, but you know, eventually it will be corrected if it's important.
17:57
Yeah, I kind of agree with Devon's last point about like like agents correcting themselves. Like the way we set up a wiki, um if it's like code mode, then
18:04
that wiki lives in like markdown files in in your codebase. So that there's human loop because it puts up PRs and you need to review that before it can
18:10
get merged. Um but for like the general purpose memory that lives in your computer and it just writes whatever it wants without like a review step because
18:17
that would be very tedious. Um so for us like like what we did in a wiki is we
18:22
have a way for the agent to like add questions. Um, so it can add like open questions that it doesn't know the answer to and then you can go in and
18:28
answer them or in later runs if it thinks it found the answer, it can go and and mark that as answered. You know,
18:34
reference the the actual wiki uh that it used or like the the part of the wiki which answered that question. Um, and
18:40
then as a human, you can also go in there and add questions uh answer questions on its own. Um, and then the
18:46
last thing which we haven't done in the agent yet, but but I want to do today or tomorrow is like a change log. like
18:52
because the wiki is just modifying itself without you know you to to uh approve all the changes you may not want
18:59
to have to like approve every individual change but you probably want some visibility into what changed and if it's all markdown files you can look at a
19:06
diff but that's going to get like very timeconuming so instead I'm thinking like a very concise change log hey I
19:11
edited this file to document you know this new product you added or whatever it might be and then you know you can
19:16
retroactively go in there and say hey actually this part of the change log doesn't sound right can you go and and you know dig deeper into that part of uh
19:24
I don't know our new product or can you correct it to do XYZ? That way you don't need to like read the individual changes
19:30
but you have like a highle overview of like what was changed and then you can go chat with your agent to have it go
19:35
correct that. What is now? Oh, sorry Harrison.
19:42
No, go ahead. I was going to say like we're kind of in like the prompt engineering era of this stuff where like we're not even in
19:48
harness engineering or loop engineering yet. Um, but eventually it will be loop engineering, not to be a buzzer
19:54
compliant, but just because that will probably resonate with some people in the room. Um, and so right now I think
20:00
that human touch in the prompts itself is still quite important. The exact signals to hill climb on to improve
20:05
these things is also challenging I think to figure out automatically. And so human judgment is quite helpful. Um, you
20:11
know, I think that like the nice part about like a wiki relative to like raw source search is like you can also
20:17
correct it. You know, like if something's wrong, if it has a date wrong, you can be like, "You got the date wrong." And like maybe it
20:22
hallucinated it and like you're figure you're fixing hallucination, but maybe actually the source material was wrong and like you're [clears throat] kind of
20:27
like fixing the source material like updating a Slack message from 3 months ago doesn't really make any sense. And so I think this like controllability
20:33
serability aspect of a wiki is like really attractive. Um and but the bitter
20:39
maybe you know not to again to throw out buzzwords here but the bitter lesson story is eventually we should like to some degree learn to trust the agents to
20:45
know when to come to us and say hey human I need help with this um this is you know ambiguous or this is vague or I
20:52
don't think I have enough expertise here to come to determination uh can you please help I think that idea of like um
20:58
uh interviewing uh agents interviewing humans uh is super interesting um and uh
21:04
you know Maybe well we're just really early in all this so maybe it's wrong to call it majorly unexplored but is by
21:10
definition maybe majorly unexplored. What is what is the hardest part of
21:16
building wikis
21:22
or is it all easy? It's just so it's just so easy. There's nothing hard that can't [laughter] prompting it to to to make uh or the the
21:31
the prompting for updates right now I think is most difficult like like it it can write a first pass very well. Um,
21:38
but as that expands, you if you get 300 updates into your wiki and your wiki is,
21:43
you know, a billion tokens long, getting it to like identify where in the wiki to
21:49
update when it gets new information or updates information and then concisely update or insert or remove information.
21:56
I think that's probably the most difficult part. [clears throat] Like that's what we've seen in like open wiki and then also like other agents we've
22:02
built like in fleet where like it can update itself and like oftent times it wants to just insert new lines into the
22:07
prompt instead of modifying what it's already wrote. Um and and having that balance between like modifying removing
22:13
and inserting new information is like like a tricky thing to get right with agents right now especially as they deal
22:19
with like more and more context. Yeah, I'd say uh maybe three things that
22:25
I think are tricky. I actually do think um generation is hard. Um not on like
22:31
small repositories or projects but at like you know some of our customers have you know tens of millions of lines of code um and just like our large
22:38
organizations and when you have something at that scale figuring out what is important is actually a hard
22:45
problem. Uh because if you just like let an agent try figure it out by itself it's going to focus on the wrong things.
22:52
And so identifying what is actually important is the kind of the first challenge at scale at least. I think on
22:58
smaller projects agents can do quite fine. And two is [clears throat] definitely like you know maintenance. I
23:04
think the maintenance problem is really really hard. Um like brace is saying it's just on prompting is like one part
23:10
of it. Um but then also doing it at scale and efficiently. Um right because
23:16
uh if you are you know your wiki becomes massive and you're spending a ton of tokens to maintain it are you actually
23:23
getting you know ROI is that actually does that make sense to be maintaining all of that knowledge
23:29
even if you're doing it effectively which is a challenge in of itself and then the last like related piece is observability slash like you know are
23:36
you actually getting understanding ROI and like I think the attractive part of wikis is like everyone kind of
23:43
intuitively like gets it, you know, in terms of like the value, but actually measuring impact right now is not easy.
23:52
I agree with what Braayson Deon said and I think like kind of my like metaphraming of this is like the hardest
23:58
part right now is the like harness engineering that where the goal is accuracy but also cost management. Uh
24:05
you probably don't want to throw fable at all of your ingestion and all of your updates. You're going to cry. Uh and so
24:12
you know well can you get away with you know communicate to I don't know like it depends on your prompt and it depends on
24:17
everything else and like how does all the stuff mix together and like yeah is it is a multivariate optimization problem um which I think is like pretty
24:24
challenging to solve in in a in a good way. I think I want to one last thing like plus plus one on what Devon said at the
24:31
end about like measuring um like ROI on wiks. I think like measuring ROI on like many agent use cases is really difficult
24:38
and on wiks especially it's hard because you know your agent can read from your wiki but like did what it read actually
24:44
improve its quality. Um so this is something that like we're still thinking through line don't have great answers
24:49
for yet but uh I think that's like a very important thing to like do especially if you want to sell this to people like you need to tell them hey
24:55
it's actually going to make your life or your agent better. Um and I think yeah it's very tricky to to do well
25:01
I I was going to ask exactly that. How how do you guys think about measuring the impact of wikis?
25:09
Are your agents better as a result of it existing? How do you measure that? You're the evos guy. You tell me,
25:16
Harrison. You know the ideas that like we tossed around um for like open wiki on code bases were uh
25:24
you know run a coding agent benchmark over you know it's its its task without
25:29
the dock and then rerun it with the dock and you know if it's like sweet bench
25:35
those benchmarks like very saturated so you know it's going to perform well or agents will perform well with or without
25:40
you know better documentation uh on them but what we were going to look at is like you know is it more efficient so
25:45
like is it able to get to the same right answer but quicker and with fewer tool calls and fewer tokens. Um and you know
25:52
we tried with like off-the-shelf benchmarks the agents are like you know that those benchmarks are in these
25:58
agents training data already with these models training data. So like doesn't really make much of a difference there because they just kind of know what to do. Um, so I think you know requires
26:04
designing like in-house eval but yeah the way we were thinking about is like like is it able to get to the right
26:10
answer with with fewer tool calls and and fewer tokens consumed because in theory it should it shouldn't have to
26:15
search as much if the wiki contains you know all the re relevant information. It should be able to find that you know concise answer and then use it to uh
26:22
apply or apply it to the solution. Yeah, I agree with that. Um we've done
26:28
some internal benchmarking and you know for customers that have evals we kind of work with them on that. Um but yeah like
26:33
I think token efficiency is really the goal um from internal eval when we we
26:38
call like a cash it basically you working on a topic that has a wiki entry you know runs can cost about half as
26:45
much because it's doing less context gathering that's like the way you're going to get see the token efficiency.
26:50
Um the other interesting learning was uh which you know also kind of makes sense
26:55
intuitively but like the outputs are more consistent. Um it's interesting
27:00
like if you run the same agent on like the same task like 10 times you do get variations in outputs like you know even
27:07
if it gets to the right answer but if you have like the same starting point
27:13
which is like the wiki so you have a more consistent seed the outcomes are also the the trajectories downstream are
27:19
also more reliable and consistent. Maybe two just want to share want to
27:24
share there is there's like two ways to think about it. One is like plugging in this wiki into your existing workflows
27:29
in which case you know hopefully you'll see like you know cheaper faster because you're doing less exploration and then also like better like fewer human
27:36
interventions is when you think about like better for you know existing agent workflows and then like the second question which is not like big posting
27:42
but is actually genuinely I don't know is like what new kinds of things does having this like pre-built thing enable
27:48
um and like those things will probably be more based you know all new things are evalu
27:55
um and so like that basket of work that like they're not already even doing today, but having this wiki allows you
28:00
to do will probably first be emails on vibes and then later we'll have, you know, stricter emails. But
28:06
any good examples of that of the of the latter category of things that are net new that you can do with wiks?
28:14
My theory is that like wiks are in a way agent memory and like
28:21
very good memory hopefully would give agents the ability to operate on longer horizon tasks and therefore like uh
28:28
obviously it depends on your context but like for an organization like any task which you can think of as long horizon
28:34
um you could basically deploy an agent into that task where you could not have maybe even done so beforehand something
28:39
like that. I think I I haven't really thought about this too much, but like one thing worth
28:45
thinking about is like proactive agent actions. So like with it with like most memory systems that are like chess to
28:51
your claw, like they remember what you tell it, but they don't remember things proactively because they don't connect like external or sources and can't like
28:57
ambiently update themselves. Um, but if your agent can, you know, connect to
29:02
these data sources like Slack or your email or Twitter, whatever it might be, then it can proactively remember things
29:09
like say from your Twitter feed that you haven't seen yet about like research and then it can, you know, suggest or like take actions on your behalf without you
29:15
really needing to prompt it. That's like very meta. And I also want to prefix this with like we haven't really tried
29:21
that out yet internally. But you know, it's kind of what I'm thinking with like connecting agents to other sources so it can go out in its own find things which
29:28
like it thinks you might be interested in or that you want to remember and then if it's like an engineering agent, maybe it can like prototype new features or
29:34
tasks for you or like you know draft new uh content or like like you present ideas to you um proactively instead of
29:41
reactively. The only other idea I'll add there is something that I think is really
29:46
interesting um is like agent collaboration basically you know like if
29:51
you have agents across teams uh products at a company um having wiki as sort of a
29:57
central repository that they're all contributing to and reading and writing to I think just opens up kind of it's
30:03
probably long horizon task ultimately but I think that that collaboration layer is really really interesting.
30:10
I want to go into questions soon, so I uh reminder to people to go look at the Q&A section and upvote ones that you
30:18
want answered or uh or add your own. But before we do, uh Devin, you gave me the
30:23
hot take that you don't think wiks are the right abstraction, but here you are on a webinar about wiks. So, so what's
30:28
the what's the nuance? Well, I I I sort of alluded it uh before, right? And I think it's just the
30:35
way we talk about wikis today is very human oriented. Um, but I think if we
30:40
kind of reapproach the problem from like an agent first perspective, you do get into you basically re-examine both like
30:47
the content and structure from like a token efficiency standpoint. And I do think the shape is different. So I think
30:52
like Wiki's, you know, generally true, but I think I really do think like I
30:58
don't think where we're going to be if we fast forward a year is going to be
31:03
like, you know, I think we're going to think of it more as a cache or an index as Jeff referred to before.
31:09
What is Can you give me a concrete example of what that means in terms of like the shape of a wiki? Like what
31:14
shouldn't it be? What should it be? I think the language is going to be a lot I mean we already see this like a
31:20
lot more tur um like you don't need pros in the same way for agents as you do with humans highly referential even more
31:27
so than kind of existing um uh like wiki style articles because agents are really
31:33
good at okay here are all the information if it needs to do additional exploration here's where it can
31:38
reference I think that's more agent friendly than for humans you don't want to keep digging but agents are very good
31:45
at And then [clears throat] the other piece is just like eviction. Um like wikis for
31:50
people like you kind of want to keep things around forever because it like could take you a couple hours or days to
31:56
get to the same conclusion. Um but for agents u I think we'll probably see something where if a wiki isn't being
32:03
accessed, you just evict it. Um or and [clears throat] like being more sort of
32:08
strict about what information even makes sense to write in the wiki because maybe it's really easy and cheap to recmputee.
32:15
Jeeoff, I think you described a wiki as like a set of hyperl pages at the start. So, I'm assuming you agree with kind of
32:21
like Devon's comments around linking. Anything else to add there in terms of the best way to hyperlink these pages
32:28
together? Um, I think there's a bunch of variables
32:34
around how do you give the agents ability to kind of do the progressive disclosure thing. And so like how long
32:40
should your pages be, how short should your pages be, to where you should be able to like dump the headings off and use that as like progressive disclosure,
32:47
like linking, uh how aggressively should you do active linking versus like passive linking where like they want to
32:53
use a search term to go search the corpus and find the other page. Um how do you clean up back links uh as they
32:59
grow stale or or removed? Um yeah, there's a lot of kind of these like yeah
33:05
maintenance in terms of maintenance agent kind of problems here. Um, and yeah, I don't think I have the answers
33:11
to any of them and they probably answers vary depending on your use case. Um, that's all I have to say.
33:17
Cool. All right, going into some of the Q&A. Um, I'd be curious for organizations that are not full of
33:24
programmers and engineers, but rather knowledge workers, do you have a meaningful metric for measuring value
33:30
there? And I' I'd maybe add something on as well which is even more maybe a more basic question like do you see wikis
33:36
being used for kind of like knowledge work or is it mostly for coding at this point in time?
33:43
I think yes to knowledge work. I think if if you can create a general purpose wiki then just from you [clears throat]
33:50
know all your company's sources um then you know assuming the non-programmers at
33:58
your org are already using agents for some task or like chat GPT at least for like you asking questions if you can
34:04
hook this wiki up to that chat interface they're already using hopefully you can
34:09
make them a little bit more productive or like answer their questions quicker without them needing to go to humans um
34:16
for measuring ROI on this. I think that's just as tricky as you know measuring for anything else. Like you
34:21
know is it are they able to resolve more questions in their agent when it queries
34:28
the wiki versus like going to humans? But I don't know. It's still kind of an
34:34
unknown to me besides like can they get answers quicker and faster than without
34:40
the wiki? I'll take the extreme opinion here which is I think that like I won't even
34:47
necessarily use the term wiki but what fundamentally the wiki is the state of the organization it's sort of the state layer right of the organization or could
34:53
be um I think that that tool itself will be both the communication coordination
34:59
and execution layer for every company on earth um so that is you know it
35:04
certainly impacts knowledge workers but everybody yeah I'll say that we have like examples
35:10
of customers we work with who have I mean do is very focused on the product engineering knowledge um [clears throat] you know kind of side of the
35:16
organization but we have folks who are building this on the GTM side or customer success side where you know
35:22
having like a wiki entry for every customer just makes a lot of because it's a very common query
35:28
that said I will say kind of going also back to the challenges of wiks knowledge work wiks at organizations uh are very
35:35
complex from an arbback perspective who has is able to see what
35:43
How is wiki different from creating a knowledge graph slashcontext graph and
35:49
and and maybe another variant of this like why a wiki instead of a of a of a knowledge graph?
36:00
I mean is a wiki like a type of knowledge graph? Like if you think about like like Carpathy's wiki concept like
36:06
it's a bunch of files that that link to each other or like like Google's um
36:11
what's like okay OKF open knowledge format where like one key part of that is like linking pages back and forth
36:17
forth to each other that's kind of graph-like. So it's is it's like a different way of of storing the nodes of
36:26
your graph, but like if they you know link back to each other in this like web of links, it kind of is graphlike.
36:37
Yeah, I just say like sorry I was say the RDF triple store Neo4j style like
36:44
rigid graph database thingy. I think is just like too um
36:50
too opinionated and you want the agent to have more flexibility and like the wiki gives you linking and that's what
36:56
you want like you want linking you don't actually want like noun verb noun so
37:02
yeah I was going to say the same thing basically graph side is more like query language it's much more structured I
37:08
also think wiks you know are lend itself well to like the semantic space which is
37:13
like kind of when you surface information that you you're usually in similar semantic space versus like a
37:18
graph like query. I was going to ask Jeff since we've got you on wikis, vector databases, do they
37:26
go well together? Are they separate? How how do you think about them?
37:31
Uh I don't know what a vector database is. No one's ever given me a good definition of a vector database. It's just as far as I can tell a term that
37:37
Andreas and Horowits made up. [snorts] Uh yeah, well it turns out every database is a vector database because
37:42
every database has vector search now. So um yeah again the way we think about the problem is like how do you store massive
37:47
amounts of unstructured data and how do you make it very searchable and so like that is the problem that we want to solve and uh you know we should assume
37:53
that we will solve all of the problems uh related to that as well and so I think that's kind of like why we're interested in this.
38:00
Can you elaborate on ways to know when a wiki is either wrong or out of date?
38:10
Oh and there's a followup. Sorry I didn't see that. Do we need a validation proxy? Let's say the agent will interview the human. What would the triggers for the agent be?
38:18
I think this is tricky, right? Like knowing when it's wrong is like an eval
38:23
problem where hopefully it's never wrong because you can correct that before it gets to that point. um when it's out of date. I mean the
38:30
first thing jumps to mind is like like kind of like uh open wiki's concept like like the the open questions file like it
38:37
can have open questions and maybe it can like add notes like if it sees if it adds some context which it thinks could
38:42
become out of date it can update this like open questions or like you know to loop back to file with like hey revisit
38:50
this in you know on on this date because it may become stale. um
38:56
I I if we're assuming like humans don't look at this data and can't or won't manually modify because if humans do
39:02
that then you can you know say a human can audit it but like like if it's just for an agent um like trying to prompt into it uh uh you know the an idea of
39:11
like when something might become out of date, write that down and then have it revisit this like context might be out
39:16
of date file at some point in the future to then review its own context. Um,
39:23
yeah, I'll just say what I said before around like I think knowledge is like
39:28
eventually consistent as long as you build kind of the loops necessary to selforrect
39:34
matters. What does it correct itself? What do the loops look like?
39:40
The simple loop is uh you know agent reads it, it finds out it's incorrect, it has a tool to correct it. I mean
39:46
that's the be the most basic loop. [clears throat]
39:55
What's the best way to expose an agent to the wiki? File system operations
40:01
slashbash search tools.
40:09
I can go over this as well. I think it's probably a mix of both, right? Like like what we found is a gentic search where
40:15
it just uses file system tools. uh not like specifically for wiks but just for like trying to you know have agents find
40:22
specific contexts in like these large directories like code bases. They do really well with file system tools. Um
40:30
that's not always the optimal path though like like you know if you can like you might want to have a mix of you
40:37
know agentic search plus full text search for just find keywords um or
40:43
maybe there's you know some part of like bit of like semantic search um but I I
40:49
don't think there's like one sizefits-all solution here. You probably do want a mix of retrieval modes. Um,
40:56
but then whether you let the agent pick that retrieval mode or you just kind of throw all, you know, n of them uh
41:03
whenever the agent asks a question, I think that's kind of an unknown to me.
41:08
And I can chime in on this. Um, I think there's been a lot of like misinformation about search uh primarily promaggated by people who would have you
41:14
token max are happy to have you rediscover 85 files, you know, every single query. And um I think the bitter
41:20
lesson applied to search is that you should give the agent all the tools and then like trust the agent to use those tools effectively to discover the right
41:26
information as fast as possible. And so I sort of just echo what Brace said which is like give it yeah give it GP
41:32
capability finding patterns in data with reax super helpful. Um but also we think
41:37
you know give it sparse vectors g2 also give it dense vector semantic search and let the agent decide uh the right blend
41:43
of tools and the right ordering of those tools to get to the right information as fast as possible and hopefully find it at all. Right? That's one of the key
41:48
problems is not just finding it fast and cheap but also finding it period. Um the last thing I'll say is like I don't
41:54
think that file systems are or will be uh kind of like the lindy like data at
41:59
rest representation of these uh of this data and um I think that there's you
42:04
know file systems are very good at some things which is specifically like extremely fast file access which is necessary for some things like linting
42:11
um for example or you know other like very code oriented operations um but they're also very bad at a lot of
42:16
things. They're bad at version control. They're bad at or slow bad at version control. They're bad at access control.
42:22
They're bad at discovery. Um I just don't think that I mean we're just reinventing everything all over again.
42:27
There's a reason that databases were invented. Uh you know, we're not just file system maximalists, you know, from the 50s or whatever. Um and so I think
42:33
that we're kind of like re we have to rediscover that again, but like that will be rediscovered. So but there's a difference between storage
42:40
of the files and how they're exposed to the LLM, right?
42:46
of course, but there's also, I think, an ideal way to store the data such that it can be exposed to the LM,
42:59
which I guess depends on the ideal way to expose it to the LLM, which gets back to how should agents
43:05
access and do they need to do do you want to give them read, write, do you want to give them search? like what is
43:11
the right way as a as a you know if if you need to give it a semantic search you're probably not going to store it in
43:17
a file system as a you know obvious example in one direction. Yeah.
43:24
Um cool. I think we're just about at time. So thank you. Thank you everyone for joining. Um there's a bunch of uh
43:31
questions in here as well. I I'll I'll try to maybe share some of these with Devon and Jeff and you should follow
43:37
them all on uh Twitter. they're they they think a lot about this space and have some good spicy takes. Um the last
43:44
uh the last uh shout out that I'll give is is if you like conversations like this, we're we're bringing Interrupt,
43:51
which is our user conference, to London and New York in the fall. Um and we will be doing a bunch of fireside chats and
43:57
talks and things like that and talking about all things agents. Um so thank you again, uh Devin, Jeff, and Brace for
44:05
joining and thank you everyone for tuning in. See you next time. Thank you. Thank you.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

Knox / ChatGPT strategic read

1. Rough metadata

source_platform: YouTube · source_url: https://www.youtube.com/watch?v=Lsut4TCfygw · source_title: LLM Wikis and how to give your agents memory · channel_or_org: LangChain · speakers: Harrison Chase, Brace Sproul, Devin Stein, Jeff from Chroma · published_at: Jul 10, 2026 · captured_at: 2026-07-11 · capture_method: YouTube screenshot + full transcript · content_type: expert panel / agent memory / organizational knowledge infrastructure / retrieval / knowledge maintenance · source_reliability_context: high-value practitioner discussion with competing vendor perspectives. Strong for emerging design patterns, unresolved implementation questions, and first-principles distinctions; weaker for production outcome claims, many of which remain experimental or self-reported. · topic_tags_light: [LLM_wiki, agent_memory, Knowledge_Reservoirs, compiled_knowledge, knowledge_cache, indexing, freshness, eviction, progressive_disclosure, organizational_memory, proactive_agents, retrieval, RBAC]

2. People / authority context

Harrison Chase — LangChain co-founder and CEO; moderator. High authority on agent frameworks and emerging production patterns, with a natural incentive to frame the problem through harnesses and agent infrastructure.

Brace Sproul — Head of Applied AI at LangChain; presents OpenWiki, an automatically maintained memory/wiki system ingesting sources such as Notion, Gmail, and Slack.

Devin Stein — founder and CEO of DOSU; focuses on persistent, concise, agent-oriented organizational knowledge. He provides the strongest conceptual challenge to “wiki” as the correct abstraction, preferring the language of a cache or compiled index.

Jeff, Chroma — represents the programmable-memory and unstructured-data retrieval perspective. Particularly useful on indexing, progressive disclosure, human legibility, retrieval architecture, and the systems-engineering difficulty of maintaining derived knowledge.

The disagreement among the speakers is the source’s principal value. They broadly agree on the need for persistent compiled knowledge, but disagree about its audience, representation, storage, maintenance, and degree of autonomy.

3. Suggested processing

priority: 4.75/5

depth: full_semantic

EVRUN needed?: yes

duplicate/sibling relationship: strong sibling to prior RAG, memory, context-engineering, long-horizon-agent, and Knowledge Reservoir sources. It is not a duplicate because it pressures the boundary among raw evidence, derived knowledge, working memory, organizational state, and adopted truth more explicitly than most prior sources.

likely landing zones: Knowledge Reservoirs · Clinical Memory · Observation · D7/Evidence Plane · AI substrate · context assembly · Build-OS · Agent Work Protocol · CNS · Product Intelligence · RBAC · proactive sensing · organizational memory.

promotion posture: analogy_spine_candidate + Knowledge-Reservoir contract sharpening + Build-OS practice + clinical guardrail

4. Strategic read
Classification

This is a high-signal source because it reveals that “agent memory” is not one thing.

The panel repeatedly moves among:

raw source material;
indexed unstructured data;
generated wiki pages;
compressed conclusions;
organizational knowledge;
agent working context;
and writable long-term memory.

OMNI must keep these distinct.

Core takeaway

The keeper is: an agent wiki is best understood as a derived, revisable knowledge-compilation layer—a cache or map over authoritative sources—not as the source of truth itself.

That is the architectural gem.

A. “Wiki” is useful vocabulary, but the deeper abstraction is compiled knowledge

Devin distinguishes two categories:

necessary knowledge — information that does not exist elsewhere and must be explicitly preserved;
functional or compiled knowledge — conclusions prepared so the agent does not need to repeatedly rediscover them.

He compares the latter to a cache: maintain what is frequently accessed or expensive to recompute, rather than copying the entire database into the cache.

This maps strongly to OMNI’s Knowledge Reservoirs.

A durable architecture should distinguish:

authoritative source material
Records, documents, messages, observations, policies, literature, domain state.
derived knowledge projection
Summaries, topic maps, linked pages, cached conclusions, indexes, synthesized context.
adopted domain truth
Facts or decisions committed by the owning domain or authorized human.
ephemeral working context
The subset assembled for one actor, purpose, and moment.

The generated wiki belongs primarily in layer two.

Keeper doctrine:

Compiled knowledge is a projection over evidence, not a replacement for evidence.
A knowledge cache may accelerate reasoning without inheriting the authority of its sources.
Memory, knowledge, evidence, and committed truth must not collapse into one writable store.

Candidate pressure:

derived_knowledge_projection
knowledge_cache_entry
knowledge_compilation_job
source_to_projection_lineage

B. Human legibility is part of governance, not merely user experience

One panelist proposes optimizing future wikis primarily for agent consumption. Jeff gives the stronger counterargument: if organizational memory becomes an opaque latent representation, humans lose the ability to inspect, correct, steer, and share the workspace. He argues that the representation should remain human-legible even when optimized for agents.

This matters profoundly for OMNI.

An agent-optimized projection may be:

terse;
highly referential;
progressively disclosed;
machine-indexed;
structurally different from human prose.

But its consequential claims must remain projectable into a human-auditable form.

Keeper doctrine:

Machine efficiency must not erase human inspectability.
A knowledge representation may be agent-optimized while remaining human-auditable.
Shared legibility is a control surface for correction, disagreement, and accountability.

This supports the distinction between canonical substrate and role-specific projections: agents and humans need not receive identical renderings, but they must be able to refer to the same underlying claims and lineage.

C. OMNI should reject “eventual consistency” for action-critical clinical knowledge

Several speakers suggest that generated knowledge can be “eventually consistent”: if an agent later discovers that a wiki entry is wrong, it can correct it.

That may be tolerable for low-risk coding documentation or personal notes. It is unsafe as a general healthcare doctrine.

A stale or incorrect cache may influence:

medication decisions;
contraindication assessment;
escalation;
eligibility;
patient communication;
trial matching;
fulfillment.

OMNI therefore needs risk-sensitive admissibility:

low-risk derived knowledge may be usable with uncertainty;
consequential claims may require source revalidation;
action-critical knowledge may need fresh retrieval from the owning domain;
expired projections may remain readable but become non-actionable.

Keeper doctrine:

Eventually corrected is not safe enough when an incorrect projection can drive irreversible action.
Derived knowledge must carry freshness, source lineage, and an admissibility horizon.
The higher the consequence, the closer execution must return to authoritative source state.

Candidate pressure:

knowledge_admissibility_state
projection_freshness_contract
revalidation_trigger
stale_but_readable

D. Knowledge maintenance is a lifecycle, not a nightly summarization job

The panel repeatedly identifies maintenance as harder than generation:

determine what matters;
place new information in the correct topic;
modify versus append;
remove superseded material;
maintain links and backlinks;
detect staleness;
control cost;
evict low-value knowledge.

At scale, the system must decide what to preserve, recompute, update, merge, or delete.

This implies a real Knowledge Reservoir lifecycle:

candidate → compiled → reviewed/validated → active → stale → superseded → evicted/recomputable

A cron job that rereads Gmail, Slack, or clinical records and rewrites pages is not sufficient architecture. It risks:

duplication;
false synthesis;
authority blending;
privacy leakage;
irreversible loss of nuance;
drift from source truth.

Keeper doctrine:

Knowledge generation is easy; governed maintenance is the actual system.
Append-only accumulation is not memory—it is entropy.
A durable knowledge layer must know when to revise, invalidate, supersede, and forget.
E. Eviction and recomputation are legitimate memory operations

The cache analogy leads to a useful concept: not every synthesized item should be retained forever. Material may be evicted if it is:

rarely used;
cheap to recompute;
stale;
low-confidence;
superseded;
disproportionately expensive to maintain.

Devin explicitly argues that agent-oriented knowledge may be more aggressively evicted than human documentation because the agent can recompute some conclusions cheaply.

OMNI translation:

Retention should depend on more than access frequency. Clinical and legal obligations may require preservation even when rarely accessed. The system therefore needs to distinguish:

evidence retention
knowledge-projection retention
clinical-memory retention
working-context eviction

A derived summary may be evicted while its authoritative sources remain preserved.

Keeper doctrine:

Forgetting a projection is not the same as deleting evidence.
Retention belongs to the object’s authority, purpose, recomputation cost, and legal obligations—not merely its token value.
F. Retrieval should support progressive disclosure and multiple modes

The panel rejects one universal retrieval method. Useful options include:

file traversal;
full-text search;
sparse retrieval;
semantic retrieval;
linked-page traversal;
agentic search;
progressive disclosure through headings and references.

The OMNI implication is not “let the agent use every tool freely.” It is:

Expose multiple governed retrieval capabilities, then route among them based on purpose, sensitivity, cost, and evidence needs.

Examples:

exact medication value → deterministic domain query;
policy interpretation → authoritative policy retrieval;
longitudinal narrative → semantic plus temporal assembly;
source verification → direct document retrieval;
exploratory research → broader agentic search.

Keeper doctrine:

Retrieval mode follows the question and authority requirement.
Progressive disclosure should reduce context load without hiding the path back to source evidence.
The cheapest retrieval path is not always the safest evidentiary path.
G. Knowledge value must be evaluated beyond retrieval accuracy

The panel struggles to measure wiki ROI. Proposed measures include:

fewer tokens;
fewer tool calls;
faster completion;
lower cost;
more consistent trajectories;
fewer human interventions;
equal or better task quality.

These are useful but incomplete for OMNI.

A Knowledge Reservoir should be evaluated on at least four dimensions:

Efficiency — cost, latency, tool use.
Quality — correctness, completeness, consistency.
Governance — provenance, freshness, permissions, authority preservation.
Outcome impact — whether it improved the real workflow or reduced failure.

The source also identifies a second value class: new capabilities enabled by persistent compiled knowledge, including longer-horizon work, proactive action, and cross-agent collaboration.

Keeper doctrine:

A knowledge layer should prove both reduced rediscovery and improved decisions.
Efficiency gains do not compensate for provenance loss or stale conclusions.
The strongest value may be work that becomes possible only because context survives across time.

Candidate pressure:

knowledge_utility_eval
rediscovery_cost
projection_usefulness_signal
knowledge_enabled_capability

H. Proactive memory is powerful—and dangerous

Brace speculates about agents continuously ingesting external sources, remembering material the user has not seen, and proactively suggesting or performing work. He appropriately marks this as exploratory.

This directly touches Patient CNS.

The safe OMNI form is:

sense changes;
create source-attributed candidates;
compare them against known obligations or interests;
assess confidence and urgency;
surface or route them under consent and burden policy;
require authority before consequential action.

The unsafe form is an ambient agent absorbing everything and silently rewriting what it “knows.”

Keeper doctrine:

Ambient ingestion may create proactive candidates; it must not silently create authoritative memory.
A system that remembers without purpose, permission, and provenance becomes surveillance rather than care.
I. A shared wiki is not the canonical state of the organization

One speaker proposes that the wiki could become the organization’s state, communication, coordination, and execution layer. The same discussion later acknowledges difficult RBAC problems in organization-wide knowledge systems.

OMNI should reject the monolithic interpretation.

There is no single wiki that should own:

clinical truth;
commerce state;
consent;
scheduling;
fulfillment;
workforce state;
policy;
evidence.

Those remain domain-owned.

A shared Knowledge Reservoir can provide a traversable map and derived context across those domains, but it cannot replace their authority boundaries.

Keeper doctrine:

The knowledge layer may map organizational state; it must not become the owner of every state.
Cross-domain coherence is achieved through lineage and federation, not by copying all truth into one mutable wiki.
Doctrine / primitive pressure

derived_knowledge_projection
knowledge_cache_entry
knowledge_compilation_job
projection_freshness_contract
knowledge_admissibility_state
revalidation_trigger
knowledge_eviction_policy
knowledge_question
source_to_projection_lineage
knowledge_utility_eval

The likely net-new value is not a new “Wiki domain.” It is a clearer derived-knowledge lifecycle inside Knowledge Reservoirs.

What not to import blindly
Do not equate a wiki with memory generally.
Do not let generated pages become canonical clinical truth.
Do not adopt eventual consistency for action-critical knowledge.
Do not allow background agents to ingest Gmail, Slack, records, or messages without purpose, consent, scope, and retention policy.
Do not make approval optional merely because review is burdensome; vary review based on risk.
Do not store consequential knowledge only in agent-illegible latent form.
Do not give every agent broad read/write access to organizational knowledge.
Do not measure value only in tokens saved.
Do not treat filesystem representation, vector databases, or knowledge graphs as doctrine.
Do not let a central wiki dissolve domain ownership or RBAC.
Do not confuse self-correction with reliable correction; the source and correction authority still matter.
Tiering

Wiki as compiled knowledge/cache over sources
stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Human-legible, agent-optimized knowledge projections
stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Freshness, revalidation, supersession, and eviction lifecycle
stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Eventually consistent agent memory
stale-vs-v3: ABSENT · weight_tier: guardrail · status: reject for action-critical care; bounded watch elsewhere

Multiple retrieval modes and progressive disclosure
stale-vs-v3: AFFIRM · weight_tier: vocabulary/contract · status: sharpen

Proactive memory and shared-agent collaboration
stale-vs-v3: PARTIAL · weight_tier: spine-supporting · status: watch/promote with authority gates

Wiki as the organization’s canonical state layer
stale-vs-v3: CONTRADICTS domain ownership · weight_tier: no-op · status: reject literal framing

5. Hard read

This is full-semantic Knowledge Reservoir material.

Its greatest value is forcing a separation that OMNI needs to make explicit before v4:

raw source evidence, compiled agent knowledge, longitudinal memory, and domain-committed truth are different layers with different authority, freshness, retention, and correction rules.

The “wiki” label may fade. The underlying requirement will not.

Strongest OMNI line:

OMNI’s Knowledge Reservoirs should compile expensive-to-rediscover context into human-auditable, agent-efficient projections while preserving the sources, authority, freshness, and domain boundaries that prevent the projection from impersonating truth.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

this is likely on point, but we may already have other reservoir concepts from previous video waves that are actually even... deeper... in terms of ability... or structure... however.. i suspect that these guys are boiling it down for us and fill in gaps

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

reviewer: `Opus` · at: `2026-07-11` · run: `EVRUN-2026-000005` · formalizes Review 001 (Knox) + Nick Review 002, grounded vs §1 · dedup baseline: `000001 §2A` + `000002` + `000003` + post-v3 (esp. **243 `internalize_externalize_policy`, 227 `memory_authority_state`, `cns_and_knowledge_reservoirs_frontier` doc / FWREG-007, Clinical Memory 5-layer, Evidence-Plane GRD-042, §7.7 degrade-declare, Settings freshness_profile**).

**HEADLINE VERDICT.** The wave's standout (Knox 4.75/5, full_semantic) — **and Nick's Review-002 instinct is correct: OMNI's reservoir canon is already DEEPER.** This panel *boils down + fills gaps*, it does not out-model OMNI. **0 net-new**; it AFFIRMS the reservoir/projection/evidence separation and contributes **5 sharpenings** for the future **Knowledge Reservoirs contract (FWREG-007)** + **2 guardrails** + **1 REJECT**. `doctrine=AFFIRM/PARTIAL · build=absent`. Keeper: *an agent wiki is a derived, revisable knowledge-compilation layer — a cache/map over authoritative sources — NOT the source of truth.*

**Framing note (Nick's note formalized):** OMNI already separates raw-source ≠ interpretation ≠ promoted-truth (`GRD-042`), has `memory_authority_state` (227: candidate→reviewed→adopted→domain-authoritative), `internalize_externalize_policy` (243: PHI/authoritative facts stay external+cited), Clinical Memory's 5-layer (evidence→concept→assertion→context→current), projection≠authority (`T0-15`), and degrade-declare (§7.7). 262's value = it names the **derived-knowledge lifecycle + eviction/recomputation + admissibility-horizon** legs OMNI's reservoir frontier had not yet fully specified. Every candidate below dedups into that existing (deeper) frame.

### A. Concept clusters (full_semantic — Knowledge Reservoirs)

| concept | OMNI meaning | homes | anchor | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|
| **Compiled knowledge = cache/projection over evidence, not truth** (A) | 4 distinct layers: authoritative source ≠ derived-knowledge projection ≠ adopted domain truth ≠ ephemeral working context; the wiki is layer-2 | Knowledge Reservoirs (FWREG-007) · Evidence Plane `GRD-042` · projection≠authority (`T0-15`) · Clinical Memory 5-layer · 243 | "a cache or map over authoritative sources—not…the source" | AFFIRM | absent | none | spine | promote (AFFIRM; OMNI deeper) |
| **Human-legible AND agent-optimized projections** (B) | Agent-optimized (terse/referential/progressive) but consequential claims must project into a human-auditable form; shared legibility = a control surface | projection plane (role-specific) · retrieval≠authority · §7.7 degrade-declare | "remain human-legible even when optimized for agents" | PARTIAL | absent | none | spine | promote (sharpening) |
| **Risk-sensitive admissibility horizon** (C) | Derived knowledge carries freshness + source lineage + admissibility: low-risk usable-with-uncertainty; consequential → revalidate; action-critical → fresh retrieval from owning domain; **expired = readable but non-actionable** | §7.7 degrade-declare · Settings `freshness_profile` · 243 · Clinical Memory adoption | "eventually corrected is not safe enough…irreversible action" | PARTIAL | absent | none | spine | **promote (key sharpening)** |
| **Knowledge maintenance is a governed lifecycle** (D) | candidate→compiled→reviewed/validated→active→stale→superseded→evicted/recomputable; a cron that re-reads Gmail/Slack/records and rewrites pages is NOT architecture (risks dup/false-synthesis/authority-blending/privacy-leak/drift) | 227 `memory_authority_state` · Evidence-Plane promotion states · FWREG-007 | "governed maintenance is the actual system…append-only accumulation is entropy" | PARTIAL | absent | none | spine | promote (sharpening) |
| **Eviction/recomputation are legit memory ops** (E) | Forgetting a projection ≠ deleting evidence; retention by authority·purpose·recompute-cost·legal-obligation, NOT token value; 4 retention classes (evidence / knowledge-projection / clinical-memory / working-context) | D7 `retention_class` · reservoirs · Clinical Memory · 243 | "forgetting a projection is not…deleting evidence" | PARTIAL | absent | none | spine-supporting | promote (sharpening) |
| **Retrieval mode follows the question + authority** (F) | Expose multiple governed retrieval modes, route by purpose/sensitivity/cost/evidence-need (exact med → deterministic domain query; policy → authoritative retrieval; narrative → semantic+temporal; verification → direct doc) | context assembly · `memory_mode_router` (091) · capability placement | "retrieval mode follows the question and authority requirement" | AFFIRM | partial | none | vocabulary | sharpen |
| **Knowledge value ≠ retrieval accuracy** (G) | Evaluate a reservoir on efficiency · quality · **governance (provenance/freshness/permissions/authority)** · outcome-impact; + a 2nd value class = capabilities enabled by persistent context (longer-horizon, proactive, cross-agent) | agent-eval bundle · Build-OS · reservoirs eval | "efficiency gains do not compensate for provenance loss" | PARTIAL | absent | none | Build-OS | sharpen |
| **Proactive memory is powerful AND dangerous** (H) | Ambient ingestion may create source-attributed candidates; it must NOT silently create authoritative memory (require authority before consequential action) — else surveillance, not care | Patient CNS · ambient (062) · candidate≠commit · `EVRUN-000004 §0.5` three-gate · `GRD-036` | "must not silently create authoritative memory" | AFFIRM | absent | none | spine | promote (guardrail) |
| **Eventual-consistency REJECTED for action-critical clinical knowledge** (C/guardrail) | Fine for low-risk docs; unsafe as healthcare doctrine — a stale cache can drive meds/contraindication/eligibility/comms | guardrail · candidate≠commit · clinical-adoption · 243 | "eventually corrected is not safe enough" | ABSENT(as explicit guardrail) | n/a | none | guardrail | **promote as guardrail** |
| **Wiki as org's canonical state — REJECT** (I) | No single wiki owns clinical/commerce/consent/scheduling/fulfillment/workforce/policy/evidence truth — those stay domain-owned; a reservoir maps + derives context, never replaces authority boundaries | `GRD-035` (no god-domain) · domain contracts · Federation lineage | "the knowledge layer may map…must not become the owner" | CONTRADICTS | n/a | **conflict** (rejected) | no-op | reject literal framing |

**Roll-up:** 3 AFFIRM · 5 PARTIAL · 1 CONTRADICTS(rejected) · 1 tension(rejected framing). Build: absent across (reservoir contract not yet authored — FWREG-007). Pattern: `doctrine=AFFIRM/PARTIAL · build=absent` — highest-value *contract-shaping* source of the wave for the deferred Knowledge Reservoirs contract.

### B. Net-new primitive candidates (dedup — HARD, per Nick's note)
All 14 candidates resolve into OMNI's (deeper) reservoir/evidence/projection canon — **0 mints**:
- `derived_knowledge_projection` / `knowledge_cache_entry` / `source_to_projection_lineage` — **EXISTS-AS** projection plane + Evidence-Plane raw≠interpretation≠truth (`GRD-042`) + `trace_lineage`. No mint.
- `knowledge_admissibility_state` / `projection_freshness_contract` / `revalidation_trigger` / `stale_but_readable` — **partial exists-as** §7.7 degrade-declare (stale/redacted/not-actionable) + Settings `freshness_profile` + 243. **Sharpening** = risk-sensitive admissibility horizon → FWREG-007.
- `knowledge_compilation_job` / `knowledge_eviction_policy` — **partial exists-as** 227 `memory_authority_state` + Evidence-Plane promotion + D7 retention. **Sharpening** = derived-knowledge lifecycle + eviction/recomputation legs → FWREG-007.
- `knowledge_utility_eval` / `rediscovery_cost` / `projection_usefulness_signal` / `knowledge_enabled_capability` — **partial exists-as** agent-eval bundle + Build-OS. **Sharpening** = 4-dim reservoir eval (efficiency/quality/governance/outcome) → Build-OS/reservoir eval.
- `knowledge_question` — **EXISTS-AS** context assembly / retrieval routing. No mint.
- **Net genuine mints = 0.** 5 sharpenings (all → the future Knowledge Reservoirs contract FWREG-007): (1) derived-knowledge lifecycle + eviction/recompute; (2) risk-sensitive admissibility horizon (freshness×consequence→non-actionable); (3) forgetting-projection ≠ deleting-evidence + 4 retention classes; (4) human-legible+agent-optimized dual projection; (5) 4-dim reservoir eval. + 2 guardrails (proactive-memory-creates-candidates-not-authority; reject eventual-consistency for action-critical) + 1 REJECT (wiki-as-canonical-state).

### C. Reread flags
- **263 = the OpenWiki "personal brains" implementation demo of THIS panel** (Brace) — process 263 as 262's impl sibling; do not double-count.
- Sibling cross-refs (fold to registry, do not duplicate; several DEEPER in canon): 243 `internalize_externalize_policy`, 227 `memory_authority_state`, `cns_and_knowledge_reservoirs_frontier_2026-06-06` (FWREG-007), Clinical Memory 5-layer, Evidence-Plane `GRD-042`, §7.7 degrade-declare, 091 `memory_mode_router`, 232 `agent_ready_unstructured_data_substrate`.
- **Nick's note is the disposition:** confirm at wave-close/FWREG-007 authoring which 262 legs are already deeper (most) vs genuine gaps (admissibility-horizon + eviction-lifecycle + 4-dim eval). Do NOT let the vendor "wiki" framing flatten OMNI's richer reservoir/Clinical-Memory model.

### D. One-line hard read
Full-semantic **Knowledge-Reservoir contract-shaping** source; **0 net-new**, AFFIRMS OMNI's deeper model + sharpens the derived-knowledge lifecycle. **Strongest OMNI line:** *OMNI's Knowledge Reservoirs compile expensive-to-rediscover context into human-auditable, agent-efficient projections while preserving the sources, authority, freshness, and domain boundaries that prevent the projection from impersonating truth.*

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000005` · concept_registry: `analysis/EVRUN-2026-000005_ai-corpus-wave-4/EVRUN-2026-000005_ai-corpus-wave-4_concept_registry_and_routing_map.md` · source_anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `wave standout for Knowledge Reservoirs (FWREG-007) contract-shaping; 0 net-new (OMNI canon deeper — Nick's note confirmed); 5 sharpenings (derived-knowledge lifecycle; admissibility-horizon; forgetting≠deleting + retention classes; human-legible+agent-optimized; 4-dim eval) + 2 guardrails + 1 REJECT (wiki-as-canonical-state)` · promotion: `watch` (propose-only; route to FWREG-007 authoring)

## §5 — Change log
- `2026-07-11` — wave-4 scaffold created (id `EVSRC-2026-000262`, provisional `_TK` slug); awaiting Nick transcript + Knox-read + URL paste.
- `2026-07-11` — transcript + Knox Review 001 + Nick Review 002 pasted; **Opus Review 003 written** (`EVRUN-2026-000005`); §0/§0.1 normalized; status `raw_dropped → analyzed`. 0 net-new + 5 reservoir sharpenings + 2 guardrails + 1 REJECT. Folded to `EVRUN-2026-000005`.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md`.

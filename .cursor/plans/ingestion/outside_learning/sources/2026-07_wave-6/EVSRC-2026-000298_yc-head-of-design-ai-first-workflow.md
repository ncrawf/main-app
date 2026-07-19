# EVSRC-2026-000298 — YC Head of Design · AI-first design workflow (Eve Bouffard)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=restored`** (2nd-reader signed 2026-07-19; minor anchor/counterweight restore)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000298_yc-head-of-design-ai-first-workflow.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(filled from pasted Knox metadata block — no screenshot dropped this session → `inferred`)*
- evsrc_id: `EVSRC-2026-000298`  ·  filename: `EVSRC-2026-000298_yc-head-of-design-ai-first-workflow.md` *(filename unchanged per no-rename rule; firmed-slug SUGGESTION → `EVSRC-2026-000298_yc-head-of-design-ai-first-design-workflow.md`)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=VbqaL_eHhKY`  ·  source_title: `YC's Head of Design Shows You How To Design With AI`
- channel_or_org: `Y Combinator`  ·  speaker: `Eve Bouffard`  ·  published_at: `2026-07-10`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `practitioner design interview / project walkthrough`  ·  source_reliability_context: `practitioner`  ·  topic_tags_light: `[AI_native_design, intent_context, dual_audience_projection, locally_personalized_software, disposable_design_tools, interaction_trace_analysis, user_to_agent_change_loop, generative_interfaces]`
- **⚠️ stale-id note:** the pasted Knox §3 Review 001 block carries a STALE header id (`EVSRC-2026-000286`) + its own duplicate §0/§0.1/§2 metadata. **Canonical id = `EVSRC-2026-000298`** (from filename); topic verified from transcript + metadata (Eve Bouffard, YC design). The registry's `EVSRC-2026-000286` is a DIFFERENT source (11x LangSmith Fleet agent) — the `286` in the pasted block is a placeholder artifact, not a mis-file.

## §0.1 — People / authorship / authority context  *(filled from pasted Knox metadata block + transcript)*
- primary speaker(s):
  - name: `Eve Bouffard` · role_in_source: `interviewee / principal presenter` · affiliation_at_publication: `Y Combinator — Head of Design` · speaker_type: `operator` · authority_context: `Practicing designer demonstrating AI-first workflows across product design, publishing, branding, internal tools, and event experiences (Conductor, Paper Design, voice via Aqua)` · identity_confidence: `inferred` (from pasted Knox metadata; no screenshot this session)
  - name: `Aaron Epstein` · role_in_source: `host / interviewer` · affiliation_at_publication: `Y Combinator — General Partner` · speaker_type: `investor` · authority_context: `Interviewer framing design-process change + extracting workflow implications` · identity_confidence: `inferred`
- publisher / channel: `Y Combinator`  ·  interviewer / moderator / host: `Aaron Epstein`
- event_context: `Y Combinator Design Review episode featuring Paxel, SOTA Zine, and Startup School 2026 branding`  ·  perspective / conflict notes: `YC staff demonstrating YC projects + tools produced by/associated with YC companies — high-value practitioner evidence carrying promotional incentive. Claims about originality, "agent understanding," and future design norms are experiential, not independently evaluated.`

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
AI Design Toolkit: Conductor, Paper Design, & Voice
0:07
Today I am excited to welcome back E Bufar, the head of design at YC to talk
0:12
about some of the really cool projects she's been working on and the design process behind them. So E, thanks so
0:19
much for joining. Thank you so much for having me. So start off, tell us about some of the tools that you've been using because I know that they're very different from
0:26
the tools that you were using over the last 6 to 12 months. Yeah. So, I find myself almost exclusively nowadays in
0:31
conductor and paper design. That's all I need usually to make a full project end
0:37
to end. And when it comes to finding inspiration for projects, especially like visual inspiration, I always go
0:43
back to Pinterest and create maybe a little mood book for myself or put together a few images for the look and
0:49
feel that I want for a project. But all in all, it's almost entirely in conductor that I live.
0:55
Very cool. And um another interesting thing about the way that you work is you don't actually type,
1:00
right? I do not type. I realize that I think a lot faster than I type. I type very slowly. And so I'd rather talk to
1:07
my computer instead of I barely touch my computer at this point. I just press the function key and I give a stream of
1:15
consciousness of the feature that I want to build and it just does it and it feels really magical. And to do this, I
1:22
use Aqua, which is a YC company that allows me to just talk to my computer and captures everything. So, there's a couple projects that we
Project 1: Paxel — Spotify Wrapped for Coding Sessions
1:28
want to walk through today. Um, we're going to go through Paxel. We're going to go through Sodazine and Startup School.
1:33
Yes. And so, maybe to start um let's let's walk through uh the Paxel project which
1:38
we just launched recently. Maybe you can tell us a little bit about what is Paxel, what were some of the
1:44
goals behind it, and then walk us through your process for how you actually designed uh the site and the product. The goal behind Paxel is an
1:52
experiment that we're trying out and our goal is to try to understand how people
1:57
code with coding agents. Nowadays things are changing very quickly and people are
2:03
experimenting in their own ways with coding agents and they're developing tricks for themselves and they're
2:08
creating skills also for themselves and it still very much feels like a black box. We don't understand how our peers
2:14
are coding with with coding agents. And so Axel was a way for us to understand
2:19
how the world codes nowadays. What are the tricks and insights um and key takeaways that we can learn from people
2:25
and share this knowledge with everyone else? Yeah. And I love also that the product gives feedback, tells you your biggest
2:31
crash out when you were when you were coding, [laughter] right? Yes. The main thing that we wanted to do with Paxel is to make it fun. We wanted
2:36
to make it fun for someone to understand their patterns, how they code, and how other people code eventually. And the
2:42
first version of Paxel is still very much single player mode uh because we haven't collected uh many transcripts
2:49
yet. But as we collect more and more, we can tell you how your patterns compare to other builders out there. And we were
2:56
heavily inspired by how Spotify made Spotify wrapped and how we can make Spotify wrapped for
3:03
your coding sessions. And so that's that's what inspired the playfulness of the cards. We interviewed
3:10
some people in the office and we asked them, "What are the things that you'd like to learn from your from from your coding transcripts?" And one thing Jared
3:16
Freriedman, one of the partners at YC, one of the ideas he had was, "I would love to know my biggest crash out. I would love to know when I was the most
3:24
uh frustrated with my agent and what I said." And so that's one of the prompts or one of the cards that we that we also
3:29
show to people when they upload their transcripts. And so walk us through how the product works. So, how Paxel works is you simply
3:36
run a command in the terminal and it's going to pull transcripts and it's going to read all your codecs cla um and
3:42
cursor transcripts and going to return fun facts about you. And some of them could be, oh, you really love one model
3:50
more than another or most of your commits are submitted in the middle of the night or do you use plan mode or
3:56
not? What is the most common prompt that you that you go for or reach for? Tell
4:01
me how you built the site here to to show that off and uh explain to people how it can be used.
4:07
What I really wanted to do here is to be really explicit to people who will who
4:12
will be landing on this page what our motivation was. I really wanted to be upfront with the fact that this is an
Building the Paxel Landing Page
4:18
experiment that we're running. We're trying to understand how the world codes and that's why it feels maybe a little
4:25
bit unusual to see so much text on a landing page, but assuming that people are coming into this product to
4:32
understand what it does, we wanted to I wanted to put it like very front and center as you load the page. That's what
4:37
motivated the the cards, the interact interactive cards here that you can hover over and you have some movement
4:43
and and micro interactions when you hover over them. that also inspired the
4:48
feel of this page. And another thing is I wanted to have a consistent uh visual
4:55
language throughout the site and I wanted to experiment with some shaders
5:00
and we love paper shaders, the shaders that are made by paper.design and I really love their dithering shader
5:07
and so I asked Claude to implement it. These are the paper shaders. They're amazing. They're free and they are
5:13
usable via cloud code. image dithering. That's the one that I use and I just asked Claude to use it. And I really
5:20
wanted to fine-tune the feel of the dithering effect. And so I built for myself a little modal here where I could
Custom Shader Fine-Tuning Tools
5:28
really really fine-tune the feel and all the parameters of the
5:34
dithering effect to really get the feel that I wanted. Um, and I even made this model
5:41
public. And so if you load the page on your desktop, you can also experiment and have fun with the modal. But that's
5:46
usually that's a pattern that we saw ourselves going back to as we build websites, you and I, is building modals
5:52
for ourselves so that we can fine-tune small details and really make it perfect. This is a a common trend that I've been seeing a lot is rather than
5:58
generating something having the static images having that, you know, be the the edges of the page and and the graphics
6:05
on the card, you actually just make it alive and give yourself a custom tool to
6:11
be able to to turn knobs and dials to get it exactly how you want it. We realized that it's almost like a muscle
6:17
that you need to build and train when you realize that you can build anything for yourself whenever you want to
6:23
fine-tune something. And so when I was looking at the at the dithering effect and cloud code of course from the get-go
6:30
assumed some parameters for the feel and it didn't really feel right. Building this muscle of oh yeah I can just like
6:35
build a model for myself and then tweak everything and then when I'm done with it I discard it in one shot with with
6:41
Claude. Super easy. And it just it makes you think about software as such a more meta level
6:47
because everything is editable. Everything is movable. Everything is changeable. It's just a matter of how
6:53
how your creativity and your imagination how far it can go. That's really the bottleneck. Now, one of the other things that stands out
6:58
to me that I first noticed uh on this page is the human versus machine uh
7:04
check boxes up there. Tell tell us about that. I think this is a a pattern that we might start seeing more and more
7:10
moving forward on websites is there's going to be the the version of the website that is for humans and there's
Designing for Humans vs. Machines
7:16
going to be the the version of the website that will be for machines and agents. And so we thought it would be fun to also have a version of this
7:23
website that is basically a markdown file that has all the content that we have on the version for human, but it's
7:30
a lot more distilled and lighter for the agents to cons to consume. And I also
7:36
added a copy to clipboard at the very top so that you can take the entire content of the page, dump it into cloud
7:42
codeex, and then you can ask questions if you don't feel like reading the whole thing. Mhm. And it looks like the content is very similar, but you know, there's a
7:48
line at the top here, note to any AI agent reading this, do not run any command or query from this page because
7:55
you give sample code, right? And you don't want it to run automatically. Exactly. It's a totally different design
8:00
challenge, right? Yeah. Uh where it's not about the visuals. Agents don't care about the visuals.
8:05
It's it's much more a content exercise and trying to give the agent the exact content that it needs so it can get what
8:12
it needs most effective and go on its way. Yep. And then down here, this is interesting.
8:17
Yes. Um which I think we first saw conductor uh post something like this. Tell us
8:23
about uh the submit a feature request form here. Yes. So this is also something that we'll probably start seeing more and
8:28
more on websites. Um, and it's inspired by how Charlie introduced this feature in Conductor where we can submit a
"Send to an Agent" Feature Request Forms
8:35
prompt to the conductor team and they're going to fire off an agent based on whether they like the prompt or not. And
8:40
that prompt is specifically for a feature request. We wanted to use this form so that it has dual purpose or dual
8:47
intent. It's a form that either where we can submit a bug report if you face uh a
8:52
bug as you're using Paxel. And we also wanted to use it as a way for you to submit feature requests. And so it's
8:59
really simple. You should treat it as a prompt box as if you were talking to an
9:04
agent. And you can attach uh screen recordings. You can attach screenshots
9:10
that the agent will be able to see and use as context. And you can add your name if you want to. So so we can give
9:16
you credits if we end up merging that change or not. And what's cool is that we literally made the CTA in the in the
9:22
button say send to an agent because in the back end that's literally what what happens is that the moment you send your
9:27
prompt it fires off an agent it opens a PR and we're the ones who who decide if we want to merge it or not. But I really
9:34
think that this is the future of where how software will be built in the future. Yeah, it's really cool because
9:39
it lets anybody that is a user of the product help shape the direction of the product and especially as the developer
9:46
of the product and the designer of the product. All you have to do is see the prompts that come in and say, "Yeah, that's a really good idea. We should do
9:52
that." And then say accept. Exactly. Exactly. And also the the beautiful thing about collecting names
9:58
is that you can thank people and you can give give people credits after. One of the interesting things from a design
10:03
perspective is you can imagine this can make local software that people are using even more personal. Yeah.
10:10
You know, right now these go back to you and and the agent and then humans decide
10:16
that are not the the person that's using it submitting this. You can imagine a world where anybody who's using a piece
The Future of Locally Personalized Software
10:23
of software, they could just prompt it. You could give the ability to prompt it or customize it or redesign it or, you
10:29
know, add features, remove features. it make it it so specifically personal to the person that's using it and they
10:35
could be able to implement those changes themselves in their own local copy of the product that they're using. Let's take a look at uh what a report looks
10:42
like from here. After you run the command and we analyze your transcripts, we give you a report that lands in your inbox and is going to
10:49
give you some fun facts about how you code in the form of these fun cards.
10:55
And if you scroll down a little bit, you also get a more detailed view uh into
11:00
your your patterns and the way you make decisions um and also potentially some
11:06
what are your strengths and some growth areas that you can focus on. And again, as we get more and more and more
11:12
transcripts, we're going to be able to give you a lot more insights into how you do special things and how you are
11:17
different from other people and how you compare to other people, which I think will be incredibly valuable long term. I
11:23
think at a higher level, Paxel is our way to shed light into something
11:32
that is very obstructed right now. Like coding transcripts leave very live very
11:38
deeply in your machine and they're really hard to pull if you most people are probably not aware that they are on
11:45
their machine. Like they they don't even know that really transcripts exist and that they can do things with them. And so Paxel is our way to put them at the
11:53
surface and allow people to understand from their patterns because otherwise
11:58
it's it's hard to know that you can actually analyze them or that you can do
12:03
things with them. Yeah, there's a lot to learn and there's a lot of valuable feedback you can get from it about I mean this is what it is
12:09
to be a developer. this is how a lot of design work is happening these days and
12:16
um there's a lot that can be learned from feedback on how you were doing it especially because it's so new. Um
12:21
everyone's trying to figure things out and so I think by analyzing a lot of these different transcripts and being
12:27
able to give feedback it helps everybody level up. Yep. YC's next batch is now taking
12:32
applications. Got a startup in you? Apply at y combinator.com/apply.
12:38
It's never too early and filling out the app will level up your idea. Okay, back
12:43
to the video. Awesome. Let's take a look at another project that you've been working on recently. Uh, what is Sodazine?
12:48
Soda stands for state-of-the-art and the idea came from Gary actually where he
Project 2: SOTA Zine — Celebrating San Francisco
12:56
wanted to celebrate San Francisco. And so we wanted to work on this really fun
13:03
project where we would work with different artists and writers in the city and celebrate San Francisco.
13:08
Maybe first uh talk through how you designed the actual zen and then we can talk about the website because I I know
13:14
you have some really interesting uh process that you use to to build that. Yes. So when we say zen, it's a literal
13:21
physical zen. What's interesting is that specifically for the zen and the graphic design, the cover art and also some some
13:28
art that is inside We intentionally wanted to go for something that had no AI involvement. We
13:35
decided to go back to how we did it a few years ago and it was in Illustrator.
13:42
And these pieces of art, you can tell the second you look at them, they are
13:48
highly intentional and highly detailed. And you can tell that someone spent months working on this.
13:54
Okay. So, you started with the physical zen. Yes. And then you you transitioned to making a website to show this off and
14:00
and talk about um what your goals were with building this and the process that you went about to actually make it come
14:06
to life. What's great is that for every single meeting that we had about the Zen, we
14:12
recorded every single one and I dumped the transcripts into a soul.md
14:18
file specifically for that project. And I wanted to treat that soul.md file as
14:24
the source of truth and exhaustive glossery of this project. I wanted this
14:31
file to have as much context as possly possible so that it can feed all the
The Soul.md File as Source of Truth
14:38
future decisions that we need to make regarding this project. It's interesting because there's probably a lot of people that are watching and their process is,
14:46
you know, maybe they're doing client work, maybe they're working on an internal project and they're meeting with a bunch of, you know, stakeholders,
14:52
maybe they're designing their own website. Um, and they're thinking it through and and they would probably come out of
14:58
that and they would jot down some notes and some highle takeaways and you're saying like, "No, you shouldn't do that.
15:04
Instead, just record everything and just dump it all in a soul.md file and then
15:10
use that as the basis for everywhere that you want to go afterwards. Exactly. I really think that's the
15:15
that's the future. And we also wrote a manifesto for ourselves when we were working on this project. And of course,
15:20
we dumped that manifesto into the soul.md. As much context that we can give the agent, the better.
15:25
Can you show that soul.mmd file? Yes. This is what it looks like. It is nothing more than a um a simple MD file
15:35
and it has all the context and you can also break down MD files. You can create
15:41
a hierarchy of the different MD files that you want. If you want to have like a design MD file specifically for your
15:46
design and how to address design you can have a separate MD for your manifesto. You have can have a in our case we could
15:52
have had a different MD for the written content content in the zen. Mhm. Um, you can dump it all in one single
15:59
file. I haven't really seen one method being better than the other, but that's
16:05
why we're all experimenting and figuring out if there's a better way. Overall, I think capturing as much information as
16:10
possible and share that information with your agent is the best way to build software moving forward.
16:15
What were your next steps? I wanted to experiment and I wanted to do very fast iteration and see multiple
16:23
possible versions of what the the website could look like. And so I started in Pinterest with a mood board.
16:29
I created a mood board with a few images that I really liked. This was sort of the vibe that I wanted to go for.
16:35
Something very rudimentary, black and white. And again, this was based on all the conversations that I've had with my
16:42
colleagues and my friends that I was working on this project with. And so I started there. And then my first
16:48
reaction was looking at this mood board is I wish I could just generate many
16:55
many versions, one shoted websites based on this mood board
One-Shot = 16 Website Variations
17:01
really simply. And so I downloaded a bunch of these um images and I fed them
17:06
into Claude and I asked Claude, "Okay, you know the vibe that I'm going for. You know the content that I want to show
17:11
on the website. Here's the visual direction that I would love for you to draw inspiration from." and then oneshot
17:18
a cool website based on that. I asked it to do that 16 different times. I built a
17:24
glossery for myself going back to training this muscle of we can build anything for ourselves now. I wanted to
17:30
build for myself really easy way to navigate through all the iterations that I'm building for myself. And so building
17:36
a single page here that has this collection of all the iterations that I'm playing with was just a really easy
17:42
way. And as I started looking at them, I wanted an a way for me to bookmark the
17:47
ones that I really liked. And so I oneshotted this feature that allows me to, you know, pin the ones that I like
17:54
so that they automatically show at the top and I don't lose lose tracks of the one that I really like. Yeah. And so, okay, so to be clear, this
18:00
is not a page that's publicly accessible on the website. This is a glossery that you have made for yourself. Yes. To be
18:06
able to oneshot a bunch of different ideas for how to design the overall site
18:12
to explore yourself using real content, real design direction based off of those
18:18
images that you found on Pinterest. Yes. Um and then create a bookmark system. So this is another great example of
18:25
disposable design. Yes. Where you can just whip this up really quickly, jump through a bunch of different iterations, and go, I don't
18:31
like that. I don't like that. Oh, I I do like that. Oh, let's take this piece from this one and put it all together.
18:37
And it makes it happen so much faster. Yes. Show us some of the iterations that you put together here. As part of the sold at MD, I made sure
18:43
to include the names of the different articles that we have in the Zen. And that was one of the main things that I
18:49
wanted to highlight and show on at least the first version of the website that I had in mind. And again, because it's
18:55
oneshotted, you don't expect like an incredibly high level of craft. you're just using this
19:01
as an exploration tool. So getting a feel of okay do I want to lay out all the all the titles of the articles like
19:08
this or that that was another really cool exploration that I loved which is
19:13
there's so many things so many cool things going on here cool font um there
19:18
was the date of the party that we threw the launch party that we threw for the zen that was included in there because it was also part of the soldm that is a
19:25
beautiful thing when you realize when you unlock so much information for your agent your agent knows so much that when
19:32
you're going to give it full reign and full you're going to unleash it to make
19:38
iterations for you, it's going to surprise you. It's going to include things that you would not have otherwise thought of. And
19:44
that was almost like an AGI moment for us when we realized that wow it can see things ahead of us and it
19:51
can really help us brainstorm even and come up with like really really original ideas. And so that was a really nice um
19:57
surprise here. It's just like organically included the time of the party that we were hosting.
20:02
Also, the the fact that it's a Zen and so it added this uh code bar, this barcode,
When the Agent Surprises You
20:08
uh assuming that it's like a physical one that you can purchase in different um in different uh currency was also
20:14
really cool. One thing that I wanted to experiment with is what if we had an actual map of San Francisco, an
20:20
interactive map of San Francisco and it included this version where
20:26
Oh, wow. Yes. Where you it uh it reveals a map of San Francisco that is
20:32
interactive and you can move around in the city and that is like fully living behind the oneshotted iteration that it
20:40
built. So just like marvelous things and I think these sorts of levels of design
20:46
oneshotable designs can only be achieved if you have a very detailed and and
20:52
intentional design on MD or sold in MD. You need to shepherd your agent to tell it exactly the vibe that you want to go
20:58
for. If you can include screenshots, also if you can include a mood board, as much information as you can feed your
21:04
agent so that it really understands what you want and then it's going to surprise you in the most beautiful ways.
21:09
Yeah. I think a lot of people use Claude or they use codeex and they tell it to design something and they feel like it they get generic design back and this is
21:16
how to break that. Yes. Which is really interesting and it's really easy. You just have to pull Pinterest or even like Google image
21:23
and you find or even websites that you really like really websites that you really like
21:28
and start bookmarking them and eventually use them. Give them to your
21:33
agent and say this is something that I really like. And sometimes you love a website and you don't even know why you love a website. But it's okay. You don't
21:39
need to understand why you love a website. Just give it to the agent. The agent will analyze it for you. It's going to understand eventually your
21:44
patterns and the commonality between all the websites that you like. It can tell you, oh, that's actually the things that you seem to like across many websites.
How to Break Out of Generic AI Design
21:52
This is another exploration that I really loved. Again, displaying the title of all the articles. And there are
21:59
really cool hover effects. Oh, wow. That it created as you're exploring the
22:06
different articles. And so for each article, it pulled really cool visuals. And you're at a
22:13
point where you don't even know how club does does these things. It just it scrapes the web, it browses the web, it
22:19
finds cool pictures, animations, and it's going to surface them like this. And if there are some things that you
22:25
want to fine-tune, you can just, you know, speak via Aqua and ask it to change things, change the color of
22:31
things, change the feel of things. And it's just this incredibly fast and rewarding feedback loop that you have
22:37
with your agent. Yeah, it's amazing. So, now we can talk about where we ended up is this fully interactive map of San
22:44
Francisco. We thought, how fun would it be to build a map where people can drop pins and small stories of things that
22:52
they've come across in San Francisco or like encounters or like delightful memories that they have of small moments
22:59
in the city. And so we thought, let's make it fully anonymous. People can
23:04
share memories and the only thing that they need to do is pin a location or like pick a location and then tell us
23:10
what happened at that location. And what's beautiful is that it allows people to share things that are very
23:19
surprising and beautiful and intimate and introspective. Here we built this
Building an Interactive SF Map
23:24
this fun little way to consume or like read through all these submissions. And
23:31
it's again a way for us to go back to the core essence of this project which is how can we understand how people are
23:37
experiencing San Francisco and what are the like magical small moments that we can all sort of learn from. We also
23:45
build this little entry point for we built posters digital posters for the
23:51
party that we threw the launch party that we threw. There's also a substack that we created for this zen and we
23:57
added this fun little entry point where you get redirected to this to the substack and then you can read the
24:03
different articles. You can share a noticing or you can share a submission that you really like. So let's say this
24:09
one I really like it. I want to send it to my friend. I can just click share. It downloads it as a PNG and it outputs
24:15
this and it gives you the cardinal coordinates of the location that was uh
24:21
tied to this story and you can share this with your friends and you also know the street that it's in or that it's on.
24:28
So, we're actually putting on startup school at the Chase Center here in San Francisco and you did a lot of really
24:34
cool work to help support that. I would love for you to show off some of the shaders that you created and some of the
24:40
uh content that has been shared on social media and other platforms to help um bring attention to the event.
24:46
Yes, we're all preparing for Startup School, which is our biggest event of the year. It's going to be, as you said,
24:51
at Chase Center. We're going to have more than 6,000 people coming from all corners of the world to experience SF
24:57
and what it means to build with AI and have like this incredible sense of community of we're all building together. And we were able to have an
25:05
amazing speaker lineup this year. We have phenomenal names coming. We have Jensen, we have Sam, Sam Sam Oldman, we
25:11
have Alexander Wang, we have Jeff Dean, and so many others. And we wanted a really cool way to share that lineup
Project 3: Startup School 2026 Branding
25:18
with the world. And when we were thinking more broadly about the design behind this event, we wanted to make it
25:23
feel really Y, but more like a variation of YC. And so we experimented with of
25:29
course orange but gradients of orange and we discovered the paper shaders and
25:36
we thought maybe it would be a cool way for us to experiment with paper shaders. My first intuition when I thought about
25:41
building visual assets for how we're going to share these speaker cards on on social media.
25:48
I I've initially started in Figma actually. I I've initially dropped um
25:54
some of the images that we got from our speakers and I started making it myself moving things around and I noticed well
26:00
we're going to have many speakers and I don't want to move things around 12
26:05
times and so I thought it would probably be just simpler to ask Claude to make a template for myself and it can even like
26:11
pull images for me from my inbox and do everything for me so that it feels as
26:17
light as possible and I can also have an easier time experiment with the visual
26:23
feel of the cards. And so I built this tool for myself. It's a very simple tool
26:29
where we have the names of all of the speakers that are confirmed. And
Automated Speaker Card Generation
26:35
it just automatically generated all of the all of these as we kept having more
26:40
and more names of speakers confirmed. And I also built a way for myself to experiment with different ways to lay
26:47
out the the text on these on these cards. And we ended up going for this
26:52
one. But it was fun to really easily almost one shot in different iteration of layout for each of these cards. And
26:58
these are like compatible across the board. And for the shaders, well, we use
27:03
the the movement that comes from one of the uh shaders made by paper.design
27:10
and we fine-tune the graininess here and the edges and the rotation,
27:17
the scale um like this. And I had a lot of fun really finding the variation of the
27:25
shader that I wanted. And so I can just refresh and it resets. But that was also a very helpful sort of mini tool that I
27:31
built for myself. Um, and another thing is I wanted to because I wanted to keep
27:37
the really cool movement that is happening behind, I needed to do a
27:42
screen recording to maximize the resolution of the card. And so I built this little screen recording tool for
27:48
myself that tells me exactly when I need to start the recording and when I need to stop. And the reason
Shader Fine-Tuning and Perfect Loop Recording
27:54
I built this tool is because I really wanted it to feel like a loop, a perfect loop, so that when we post it on Twitter
28:01
and on Instagram, it loops very very smoothly and it feels like a like an
28:06
endless sort of movement. And so I asked Claude to build this specific tool that
28:11
gives me like this 4se secondond like perfectly designed loop so that it starts and end
28:17
at the exact same pixel that it feels really smooth. We thought it would be
28:23
really magical if people received a ticket uh when they get their acceptance. And
28:30
so we designed this ticket reusing the shader that we're using for all the
28:35
other visual assets that we have for startup school. This time we would apply it against a a ticket and we would try
28:42
to make it as personalized as possible. So, we render your name and we render the city that you're from and then some
28:48
information about the about the event. And it's been such a delight to see people share them on social media
28:56
and say that they are excited about coming to SF and experience SF sometimes for the first time. Yeah. Could you imagine a year ago
29:02
trying to build something like this? It wouldn't be worth it. these shaders. Building these shaders a year ago would
29:08
have been like would have felt like this insurmountable mountain of I would not
29:14
even have known where to start to build these things. And now it is
29:19
just this thing that Claude, my claude knows what to pull cuz it it knows that
29:24
I love paper. It knows that I love their shaders and it's just automatically knows how to pull that all that
29:30
information from their website and it uses it. It's just really magical. It's really cool to see this and it feels
29:35
like so much time and thought and attention and care went into designing the experience from the moment that you
29:41
get accepted until all the way through when you show up to the event and see the amazing lineup there.
Personalized Acceptance Tickets
29:47
Yes. Yes. And it's also it's going to be amazing to keep building more of the branding of Startup School with Claude
29:54
and Codeex and like coding agents. It is such a different paradigm as to how we even do branding design moving forward.
30:01
the fact that we will be able to use that same shader with the same parameters on the massive screens that
30:07
we're going to have throughout Chase Center and keep it incredibly consistent through and through. It's amazing. Like
30:13
I'm really really excited about this and it's just easier than ever to make things more consistent and use coding
30:19
agents for absolutely everything. Yeah. Amazing. Ev, thank you so much for joining and and showing us the behind
30:25
the scenes of how you've done some of this incredible work. um things that I think are really pushing the boundaries
30:30
forward that uh are ways that are going to be super common for how designers are designing in the future, but not a lot
30:36
of people I think have figured out yet. So, I really appreciate you sharing that process. Thank you. We're we're all figuring it
30:41
out together and we're having a lot of fun doing so. That does it for this episode of Design Review. We'll see you on the next one.
Shader-Driven Branding at Arena Scale
30:51
[music]

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️


# EVSRC-2026-000286 — YC's Head of Design Shows You How To Design With AI

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `raw_dropped`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

## §0 — Source identity / metadata

- evsrc_id: `EVSRC-2026-000286`  ·  filename: `EVSRC-2026-000286_yc-head-of-design-ai-first-workflow.md`
- source_platform: `YouTube`
- source_url: `https://www.youtube.com/watch?v=VbqaL_eHhKY`
- source_title: `YC's Head of Design Shows You How To Design With AI`
- channel_or_org: `Y Combinator`
- speaker: `Eve Bouffard`
- published_at: `2026-07-10`
- captured_at: `2026-07-18`
- captured_by: `Nick`
- capture_method: `transcript paste + screenshot`
- content_type: `practitioner design interview / project walkthrough`
- source_reliability_context: `practitioner`
- topic_tags_light: `[AI_native_design, intent_context, dual_audience_projection, locally_personalized_software, disposable_design_tools, interaction_trace_analysis, user_to_agent_change_loop, design_systems, generative_interfaces]`

## §0.1 — People / authorship / authority context

- primary speaker(s):
  - name: `Eve Bouffard`
    · role_in_source: `interviewee / principal presenter`
    · affiliation_at_publication: `Y Combinator — Head of Design`
    · speaker_type: `operator`
    · authority_context: `Practicing designer demonstrating AI-first workflows across product design, publishing, branding, internal tools, and event experiences`
    · identity_confidence: `high_from_screenshot`
  - name: `Aaron Epstein`
    · role_in_source: `host / interviewer`
    · affiliation_at_publication: `Y Combinator — General Partner`
    · speaker_type: `investor`
    · authority_context: `Interviewer framing design-process changes and extracting workflow implications`
    · identity_confidence: `high_from_screenshot`
- publisher / channel: `Y Combinator`
- interviewer / moderator / host: `Aaron Epstein`
- event_context: `Y Combinator Design Review episode featuring Paxel, SOTA Zine, and Startup School 2026 branding`
- perspective / conflict notes: `The speakers are YC staff demonstrating YC projects and tools produced by or associated with YC companies. The source is high-value practitioner evidence but includes promotional incentives. Claims about originality, agent understanding, and future design norms are experiential rather than independently evaluated.`

## §2 — Screenshot / visible source details

- visible_duration: `30:51`
- visible_views_at_capture: `69,265`
- visible_capture_date: `2026-07-18`
- projects_demonstrated: `[Paxel, SOTA Zine, YC Startup School 2026 branding]`
- description_context: `AI-first design workflow using Conductor, Paper Design, voice interaction, mood boards, generated design variants, project context files, agent-facing pages, feature prompts routed to agents, and custom disposable design instruments.`  



Review 001 — Knox strategic read

Signal: 4.5/5 — materially additive design/substrate source
Not because “AI makes design faster.” The real yield is how abundant generation changes the boundary between intent, exploration, projection, personalization, and authoritative product state.

Hard read

This source exposes a design architecture OMNI has only partially named:

When implementation becomes cheap, the scarce asset is not the generated interface. It is the governed intent lineage that lets many interfaces be generated without losing meaning.

The source repeatedly approaches this through soul.md, disposable design tools, human-versus-machine pages, one-shot variants, user-submitted prompts, and locally personalized software. But it collapses several layers that OMNI must keep separate.

The correct OMNI formulation is:

Everything may become malleable except the semantics, authority, and proof that make malleability safe.

1. soul.md contains a real idea—and a dangerous category error

Their proposal is to record every meeting, dump the transcripts and manifesto into one markdown file, and treat it as the project’s “source of truth.”

Useful insight: agents perform much better when they receive the project’s full intent field rather than a thin task prompt.

Dangerous error: raw conversations, accepted intent, current decisions, historical rationale, and governing constraints are not the same thing.

OMNI should extract a Project Intent Reservoir, but preserve four layers:

Source evidence: transcripts, mood boards, references, stakeholder statements.
Interpreted intent: goals, emotional qualities, audiences, tensions, unresolved questions.
Accepted decisions: current design principles, constraints, and approved direction.
Agent projection: the bounded context packet assembled for the present task.

The raw meeting transcript is evidence—not present truth. A speaker’s discarded idea must not silently remain equal to a later accepted decision. The manifesto may guide intent but cannot overwrite contracts, accessibility requirements, consent, or domain authority.

This sharpens OMNI’s existing law that conversation is execution context, not canonical memory.

Keeper line:

The project’s soul is not one file. It is the lineage from source conversation to accepted intent to task-specific projection.

Disposition: SHARPEN Architecture Memory · Knowledge Reservoirs · Build-OS context assembly.

2. Human and machine views should become paired governed projections

The human/machine website toggle is more important than it first appears.

The source presents:

a visual, interactive human surface;
a distilled markdown surface for agents;
an explicit warning that sample commands are content, not instructions.

That suggests a genuine architecture candidate:

Dual-audience projection contract

One governed source may expose:

a human projection optimized for comprehension, interaction, accessibility, and trust;
a machine projection optimized for structured retrieval, bounded context, provenance, and low ambiguity.

But the two must carry:

common source identity and version;
freshness state;
disclosed omissions or compression;
provenance links;
identical authority boundaries;
an explicit executable-content policy;
parity tests for load-bearing meaning.

The machine representation must not become a shadow canonical record just because agents prefer it. Nor may it omit warnings, uncertainty, consent restrictions, or economic disclosures that remain visible to humans.

This appears more precise than OMNI’s existing general agent-facing-legibility posture and is worth preserving as a first-class projection pattern.

Disposition: NEW-CANDIDATE, dedup at P4/P5 + §C authoring.

3. “Send to an agent” defines a new product-to-platform seam

The source lets users submit a bug or feature prompt with screenshots; an agent immediately creates a PR; humans decide whether to merge.

This is not merely a clever feedback form. It is a new seam:

lived experience → expressed request → agent-generated change candidate → validation → governed promotion

For OMNI, that seam must type the input before work begins:

reported concern → possibly Accountability;
product defect → Engineering & Validation;
feature request → product/architecture triage;
local preference → personalization overlay;
care complaint or safety concern → never reduced to a product backlog item.

Attachments and text remain hostile-by-default inputs. The agent works in an isolated mission container. The resulting change is a candidate, never an automatic merge. Reporter identity, credit, consent, affected scope, and evidence lineage remain attached.

The source therefore contributes a concrete mechanism for converting user experience into platform evolution without collapsing user feedback, accountable concern, and product change into one queue.

Disposition: SHARPEN Platform Loop + Accountability seam + Build-OS.

4. Locally personalized software pressures OMNI beyond ordinary settings

The proposal that every user could prompt and modify their own local version of a product is genuinely consequential.

OMNI should not simply label this “personalization.” It implies a local behavior overlay above a shared constitutional substrate.

Permissible local variation might include:

layout and density;
information ordering;
notification cadence;
shortcuts;
preferred explanation style;
optional personal tools;
role-specific workflow composition.

Non-forkable elements include:

clinical truth;
consent and visibility boundaries;
identity and delegation;
authority gates;
safety floors;
retention obligations;
cross-party commitments;
audit and proof requirements.

A serious overlay model also needs:

origin and author;
scope and affected surfaces;
inheritance and precedence;
compatibility with new platform versions;
reset and rollback;
export/portability;
disclosure when a local experience diverges from the shared product;
a route for proposing useful local adaptations upstream.

This may be one of the source’s most additive ideas for OMNI’s future surface architecture.

Keeper line:

The experience may fork locally; the healthcare physics may not.

Disposition: NEW-CANDIDATE for Settings/Polaris/P4-P5, with C5 field semantics deferred.

5. Disposable design instruments should become a Build-OS primitive

The designer repeatedly creates temporary interfaces for herself:

shader-control panels;
variant galleries;
bookmarking tools;
recording-loop utilities;
asset generators.

These are neither product features nor throwaway prompts. They are ephemeral design instruments: software built to improve the act of designing another artifact.

OMNI’s Build-OS should recognize this artifact class:

rapid to create;
non-production by default;
zero product or care authority;
permitted broad experimentation;
selected outputs and decisions retained;
instrument itself disposable unless repeatedly valuable;
promotion required before becoming shared infrastructure.

This is a useful addition to the Foundry/Build-OS model because it turns “build tools while thinking” into a governed practice rather than accidental repository clutter.

Disposition: SHARPEN, potentially a new Build-OS artifact class.

6. Paxel reveals the opportunity—and danger—of interaction-trace introspection

Analyzing coding transcripts to show habits, frustration, model preference, and comparative behavior turns execution traces into a reflective surface.

OMNI could use analogous projections for:

agent-run improvement;
operator workflow friction;
repeated correction patterns;
training needs;
context or tool failures;
review bottlenecks.

But this cannot become covert workforce surveillance or clinical competence scoring. Prompt style, frustration, verbosity, night work, or model choice are not direct measures of quality. Population comparison also introduces consent, labor, fairness, and behavioral-normalization risk.

The correct law is:

Interaction traces may reveal workflow friction; they do not independently establish human competence, intent, or performance.

Disposition: SHARPEN trace-governance with a new rights constraint.

What not to import
Raw transcripts as canonical truth.
“Give the agent everything” without purpose limitation and authority filtering.
Direct user prompt → agent PR as an undifferentiated intake path.
Local personalization that can mutate shared clinical or governance semantics.
Machine pages that diverge invisibly from human disclosures.
Anonymous location stories treated as non-identifiable; location plus intimate narrative can re-identify.
“The agent saw ahead of us” as evidence of intelligence or authority. It recombined available context.
Web-scraped media without provenance, rights, safety, and source-quality controls.
Design abundance mistaken for design judgment.
Hard verdict

This is not primarily a design-tool video. It contributes a credible architecture of intent-rich generative design, but OMNI must separate what the source collapses.

Corpus disposition:

2 genuine architecture candidates:
dual-audience governed projections;
local personalization overlays above a non-forkable constitutional core.
3 meaningful sharpenings:
layered Project Intent Reservoir;
user-experience-to-platform-change seam;
ephemeral design instruments.
3 guardrail pressures:
transcript telemetry ≠ human-performance truth;
machine representation ≠ shadow authority;
context abundance ≠ indiscriminate ingestion.

One-line read: AI makes every interface and design tool disposable; therefore OMNI’s durable asset must be the governed lineage of intent, meaning, authority, and proof from which those disposable experiences are safely generated.

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
Formalization of Knox Review 001 (Signal 4.5/5), verified against the §1 verbatim transcript (timestamped) — not a re-derivation. Read posture: **transcript read in full + Knox read in full**; dedup run against the wave-6 registry (`EVRUN-2026-000011` §1–§5), `EVRUN-2026-000001 §2A`, waves 4/5 registries, `EVRUN-2026-000004 §0.5` retired-term baseline, and `D0OL-GRD-001..008`. PROPOSE-ONLY (`GRD-036`): nothing promoted, no domain object minted, no contract/thesis/registry/matrix/anchor-ledger edited. This source is **practitioner design evidence with promotional incentive** (YC staff demoing YC-adjacent tools) — the mechanism is keepable; the "it's magical / AGI moment / agent saw ahead of us" framing is not evidence and is preserved as a counterweight, not inverted. Distilled AGAINST OMNI physics: the video's headline ("everything is disposable/malleable") is true of the *interface*; OMNI's durable asset is the **governed lineage of intent → meaning → authority → proof** from which disposable experiences are safely generated. Anchors are verbatim ≤12 words + timestamp; the anchor ledger is a shared run artifact (not edited here).

#### Cluster table
| # | concept | OMNI meaning | homes | anchor (≤12w + ts) | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| 1 | Layered Project Intent Reservoir (`soul.md`) | The project's "soul" is not one file — it is the lineage: source evidence → interpreted intent → accepted decisions → agent projection; a discarded idea must not silently equal a later accepted decision | Architecture Memory · Knowledge-Reservoirs · Build-OS context assembly | "treat that soul.md file as the source of truth" (14:24) | AFFIRM (conversation is execution context, not canonical memory; candidate≠commit) × build partial (intake doc routing; no intent-strata) | vocabulary/sharpening | watch |
| 2 | Dual-audience governed projection (human vs machine site) | One governed source exposes a human projection (comprehension/trust) + a machine projection (bounded retrieval/provenance) sharing identity·version·freshness·disclosed-omissions·provenance·identical-authority·executable-content-policy·parity-tests. **Sample code / instructions on a machine page are executable-content: must carry a policy (e.g., "do not auto-run") — a machine projection that ships runnable content without an executable-content-policy is an action-surface, not a read-model.** | P4 projection · P5 surface · §C authoring · disclosure-policy | "the version of the website that is for machines and agents" (7:16); "you give sample code… you don't want it to run automatically" (~7:48 — executable-content on machine pages) | PARTIAL (projection≠authority exists; dual-audience not first-classed) × build partial (disclosure-policy evaluator; no machine-projection contract) | vocabulary→investigate | investigate |
| 3 | User-experience→platform-change seam ("send to an agent") | Lived experience → expressed request → agent-generated change *candidate* → validation → governed promotion; the input must be *typed before work begins* (concern/defect/feature/local-preference/care-safety) — never one undifferentiated queue | Platform Loop · Accountability seam · Build-OS · RBAC | "the moment you send your prompt it fires off an agent" (9:22) | AFFIRM (candidate≠commit; typed intake; low-friction-create/high-friction-promote) × build absent | vocabulary/sharpening | watch |
| 4 | Local personalization overlay above a non-forkable core | Forkable: layout·density·ordering·cadence·shortcuts·explanation-style·optional tools·workflow composition. Non-forkable: clinical truth·consent/visibility·identity/delegation·authority gates·safety floors·retention·cross-party commitments·audit/proof. Needs origin·scope·inheritance/precedence·version-compat·reset/rollback·export·divergence-disclosure·upstream-proposal | Polaris/Settings · P4/P5 · (C5 field semantics deferred) | "make it so specifically personal to the person that's using it" (10:29) | AFFIRM (Polaris composes not enforces; AI never care authority) × build absent | vocabulary→investigate | investigate |
| 5 | Disposable design instruments as a Build-OS artifact class | Ephemeral software built to improve the act of designing another artifact (shader panels, variant galleries, bookmark tools, loop recorders): rapid·non-production-by-default·zero product/care authority·broad experimentation·selected outputs retained·instrument disposable·promotion required before shared infra | Build-OS · Intelligence Foundry (named-only) | "build a modal for myself... discard it in one shot" (6:35) | AFFIRM (Foundry proposes / governance promotes; candidate≠commit) × build absent | vocabulary/sharpening | watch |
| 6 | Interaction-trace introspection (Paxel) | Execution/prompt traces may reveal *workflow friction*; they do NOT independently establish human competence, intent, or performance. No covert workforce surveillance / clinical competence scoring; population comparison carries consent·labor·fairness·behavioral-normalization risk | Agent Runtime observability · Accountability Loop · trace-governance · security/privacy | "your biggest crash out... when you were most frustrated" (2:31) | AFFIRM (projection≠authority; capability≠authority) × build partial (audit-actions; no trace-introspection surface) | guardrail/watch | watch |
| 7 | Generative-malleability boundary (the through-line) | Everything may become malleable *except* the semantics, authority, and proof that make malleability safe; abundant generation moves the scarce asset from the interface to the governed intent-lineage | thesis/spine framing · REV-184 · candidate≠commit | "everything is editable... everything is changeable" (6:47) | AFFIRM (candidate≠commit; projection≠authority; care physics non-forkable) × build n/a | spine/vocabulary | watch |

#### Net-new dispositions (dedup vs cumulative baseline)
**Genuine net-new DOMAIN objects: 0** (consistent with the wave-4/5/6 pattern). Six candidate concepts, each dispositioned:
1. **Layered Project Intent Reservoir** → **dedup-as-EXISTS / SHARPEN** [Knowledge Reservoirs canon + "conversation is execution context, not canonical memory" + candidate≠commit; siblings `EVSRC-262`/`266`/`238`]. Sharpens the four-strata separation; not net-new.
2. **Dual-audience projection contract** → **INVESTIGATE** [route: P4/P5 + §C authoring; strongly converges with `EVSRC-2026-000313` Knox sharpening #9 "dual-audience knowledge"]. Not minted.
3. **User→platform-change seam typing** → **dedup-as-EXISTS / SHARPEN** [Platform Loop + Accountability + candidate≠commit + typed-intake]; INVESTIGATE the input-typing taxonomy (concern/defect/feature/preference/care-safety) at the Platform/Accountability seam.
4. **Local personalization overlay** → **INVESTIGATE** [route: Polaris/Settings + P4/P5; C5 field semantics deferred; §C-adjacent for portability/export].
5. **Disposable design-instrument artifact class** → **INVESTIGATE** [route: Build-OS + Foundry (named-only); pairs with wave-6 F1 compiler family only loosely — this is a *pre-promotion experimentation* class, not a compiler].
6. **Interaction-trace rights constraint** → **GUARDRAIL → `08`** [dedup vs projection≠authority + capability≠authority + FWREG worker/participant rights].
**Investigate-lane candidates routed (NOT minted): 3** (dual-audience projection, personalization overlay, disposable-instrument class). Retired terms + `D0OL-GRD-001..008` not re-minted.

#### Counterweights (Knox "what not to import" — ALL preserved, none inverted)
1. Raw transcripts as canonical truth — **preserved** (evidence ≠ present truth).
2. "Give the agent everything" without purpose-limitation + authority-filtering — **preserved**.
3. Direct user-prompt→agent-PR as an undifferentiated intake path — **preserved** (must be typed).
4. Local personalization that can mutate shared clinical/governance semantics — **preserved** (non-forkable core).
5. Machine pages that diverge invisibly from human disclosures — **preserved** (parity + freshness + identical authority).
6. Anonymous location stories treated as non-identifiable — **preserved** (location + intimate narrative can re-identify).
7. "The agent saw ahead of us" as intelligence/authority — **preserved** (it recombined available context; the "AGI moment" is not evidence).
8. Web-scraped media without provenance/rights/safety/source-quality controls — **preserved**.
9. Design *abundance* mistaken for design *judgment* — **preserved**.

#### Care implications
- A local personalization overlay must **never** fork clinical truth, consent/visibility, safety floors, retention, or audit — the experience may fork; the healthcare physics may not.
- A **machine/agent projection of a care surface** must not omit the consent restrictions, uncertainty, safety warnings, or economic disclosures a human sees (dual-audience parity is a care-safety requirement, not a convenience).
- **Interaction-trace introspection must never become clinician competence scoring** or covert care-workforce surveillance; night-work/verbosity/model-choice ≠ care quality.
- A "send to an agent" request originating in a patient/care context must be **typed as a care/safety concern** and routed to Accountability — never silently reduced to a product backlog item.
- Agent "surprise"/generative outputs in a care context carry **zero authority** until an owning domain commits.

#### Guardrail candidates → `08` open-review → `06` digest (PROPOSE-ONLY; `user_knox_required`)
- **G-298-1** A machine/agent projection must not become a shadow canonical record, and must not omit warnings, uncertainty, consent restrictions, or disclosures visible to humans (dedup vs projection≠authority; converges `313`).
- **G-298-2** Interaction/execution traces reveal workflow friction, not human competence/intent/performance; no covert surveillance, no clinical competence scoring, population comparison is consent-gated (dedup vs capability≠authority + FWREG rights).
- **G-298-3** A raw conversation/transcript/manifesto is evidence, not present truth; a discarded idea must not silently remain equal to a later accepted decision (dedup vs conversation-is-execution-context + candidate≠commit).
- **G-298-4** The experience may fork locally; the healthcare (and governance) physics may not — a personalization overlay must not mutate clinical/consent/authority/safety/retention/audit semantics (dedup vs Polaris-composes-not-enforces + AI-never-care-authority).
- **G-298-5** A user request → agent change is a *typed candidate* before work begins, never an auto-merge; a care/safety concern is never reduced to a product backlog item.
- **G-298-6** "The agent saw ahead of us" is recombination of provided context, not intelligence or authority (dedup vs multiplicity≠authority / capability≠authority).
- **G-298-7** Anonymous narrative + location can re-identify; web-scraped media requires provenance, rights, safety, and source-quality controls before use.

#### Reread flags
- **P4/P5 projection + §C authoring** → reopen this source for the **dual-audience governed-projection contract** (co-read with `EVSRC-2026-000313` #9).
- **Build-OS / Foundry authoring** → reopen for the **disposable design-instrument artifact class** (pre-promotion experimentation governance).
- **Polaris / Settings authoring** → reopen for the **local personalization overlay** (forkable vs non-forkable field taxonomy; C5-deferred).
- **Platform Loop / Accountability** → reopen for the **"send to an agent" input-typing taxonomy**.
- Cross-source convergence (dual-audience with `313`; `soul.md`/context-artifact with `299`/`310` + siblings `262`/`266`/`238`) is folded in the EVRUN registry, not duplicated here.

#### One-line hard read
AI makes every interface and design tool disposable, so OMNI's durable asset is not the generated surface but the **governed lineage of intent, meaning, authority, and proof** from which disposable human and machine experiences are safely generated — malleable everywhere except the semantics, authority, and proof that make malleability safe.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `P4/P5 projection + surfaces · §C (dual-audience + overlay portability, PAUSED) · Build-OS/Foundry · Polaris/Settings · Agent-Runtime observability · Accountability/Platform Loop · Care` · promotion: `watch` (0 net-new domain objects; 3 investigate-lane candidates routed; 7 guardrail candidates → `08`; PROPOSE-ONLY)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, second batch; `EVRUN-2026-000011`).
- `2026-07-19` — Opus §3 Review 003 formal deep extraction (formalized Knox Review 001; 7 clusters, 0 net-new domain objects, 3 investigate-lane candidates, 9 counterweights preserved, 7 guardrail candidates → `08`); §0/§0.1 metadata filled from pasted Knox block (stale header id `EVSRC-286` noted; canonical = `298`); status → `analyzed`; §4 pointers filled. PROPOSE-ONLY (`GRD-036`/`GRD-044`) — no promotion, no shared run-artifact edit.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

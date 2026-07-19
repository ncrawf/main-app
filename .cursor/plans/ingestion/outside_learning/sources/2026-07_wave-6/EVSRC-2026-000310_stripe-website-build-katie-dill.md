# EVSRC-2026-000310 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000310_stripe-website-build-katie-dill.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000310`  ·  filename: `EVSRC-2026-000310_stripe-website-build-katie-dill.md`  *(firm slug SUGGESTION — not renamed: `EVSRC-2026-000310_yc-design-review-stripe-website-katie-dill.md`)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=ypzNhwpmOD4`  ·  source_title: `How Stripe Built Their New Website`
- channel_or_org: `Y Combinator`  ·  speaker: `Katie Dill; Aaron Epstein`  ·  published_at: `2026-04-22`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `design interview / product and brand case study`  ·  source_reliability_context: `practitioner`  ·  topic_tags_light: `[product_design, public_surfaces, trust_signaling, progressive_disclosure, design_systems, AI_prototyping, experience_coherence, minimum_viable_quality, user_journeys, brand_narrative]`
- *(canonical id = filename EVSRC-2026-000310; the pasted Knox §3 block carries a STALE header id `EVSRC-2026-000297` — IGNORED per run brief; topic verified from §1 transcript + Knox metadata as the Stripe-homepage-redesign design source. No screenshot supplied → metadata carried from the pasted Knox Review 001 §0 block; identity_confidence downgraded to `inferred`.)*

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Katie Dill` · role_in_source: `interviewee / principal design practitioner` · affiliation_at_publication: `Stripe — Head of Design` · speaker_type: `operator` · authority_context: `design leader explaining Stripe's homepage redesign, design-system evolution, AI-assisted prototyping, quality standards, product-story architecture, and company-wide user-experience review practices ("walking the store")` · identity_confidence: `inferred` (no screenshot; corroborated by §1 transcript + Knox §0)
  - name: `Aaron Epstein` · role_in_source: `host / interviewer` · affiliation_at_publication: `Y Combinator — General Partner` · speaker_type: `investor` · authority_context: `host examining Stripe's redesign decisions, visual storytelling, AI-enabled design workflows, craft standards, and design-team evolution` · identity_confidence: `inferred` (no screenshot; corroborated by §1 transcript)
- publisher / channel: `Y Combinator`  ·  interviewer / moderator / host: `Aaron Epstein`
- event_context: `Y Combinator "Design Review" episode examining Stripe's first major homepage redesign in ~6 years`  ·  perspective / conflict notes: `Practitioner-led retrospective about Stripe's OWN public brand surface — a high-craft org discussing its work in a favorable setting. Claims about trust, quality, effectiveness, and differentiation are experiential, not independently validated. Strongest evidence concerns design PROCESS, coherence practices, progressive disclosure, and the relationship between AI-generated abundance and human quality judgment.`

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
Intro
0:00
Today, I am thrilled to welcome Stripe's head of design, Katie Dill, back to the show. Katie and her team recently
0:06
launched a brand new Stripe homepage. She's going to take us behind the scenes of the new website and talk about how AI
0:13
is changing her team's design process. Welcome to another episode of Design Review.
0:20
[music]
0:26
Katie, thank you so much for joining us again. Well, thank you for having me. It's nice to be back. I saw along with everybody else when you
The Old Site
0:32
launched the new Stripe homepage and I thought it would be amazing to have you on and kind of take us through the old
0:37
site and uh things that you wanted to change about it and update cuz I know it's been a few years since you launched
0:44
that one and then take us through the new one and talk a little bit about the process that you used in order to get to
0:50
uh where you guys landed with the new one. I do enjoy a good design crit with you. So, let's do it. All right, let's jump into uh the
0:55
original site. So, how long ago did you launch this one? This one was from 2020. Okay. So, we're talking six years ago at
1:02
this point. Yeah. Kudos to the team. I wasn't there at the time, but I do think that they built something that stood the test of
1:07
time quite well. Uh we weren't, you know, oh my gosh, we have to change it. It's been too long.
1:12
It's just, you know, it doesn't work anymore. It actually was standing up quite well. And when we endeavored to
1:18
change it, it was because the business had just evolved beyond the point of what this story was was being told on
1:25
this site. And I'll explain that in a little bit. Of course, we wanted to kind of freshen it up as a part of our brand
Why Stripe Redesigned a Site That Still Looked Good
1:30
that also had been evolving and becoming more sophisticated and reaching, you know, a broader set of users. Uh, but
1:37
still it was it was a good site. So, I can point out a couple of things that we uh aimed to change. Yeah.
1:42
Uh, so one, you know, this evolved over time. We certainly had changed the words
1:48
on the site and exactly how it was portraying what we do. Um, and then also some of the the product shots that we
1:55
were including. Um and then of course our users as we you know continue to evolve and um help more in different
2:02
categories or larger enterprises or uh growing startups. But then as you go
2:07
down the page we were articulating the number of things that we do and this is actually one of the things that had
2:12
evolved the most over the last couple of years because our product suite was evolving. And so for example we started
2:18
with payments being a main part of our business but over time uh payments is
2:23
just one part of it. We now today serve you in multi- uh national enterprises in
2:31
many categories including helping them with subscriptions, helping AI companies with usage based billing, tax revenue
2:38
recognition platforms like Shopify and helping them move money for the
2:43
businesses in their um on their platform. And so these stories were coming through here, but you were kind
2:50
of only getting a glimpse of the product offering that Stripe provided. And so this was probably the biggest thing that
2:57
we realized that we needed to change. So we needed to adjust that. And the other piece is that, you know, the page grows
The Biggest Thing They Needed To Change
3:04
quite long. There's a lot of trying to be told here. uh we were doing that thing that happens over time where you
3:10
kind of add on and add on and we're kind of losing the the narrative uh with the
3:16
site and so we thought to think about ways that we could uh update that
3:21
narrative. Now of course you could adjust that what was here but we realized that it was also time to
3:26
refresh the visuals. uh it I don't think that the you know the visuals came out of fashion but it also just didn't feel
Crafting A New Narrative For The New Site
3:34
like it took the sophistication of how the business itself evolved. Uh and we were seeing it honestly in the way that
3:41
our teams were kind of rolling out this design language. There wasn't a lot of clarity on how do we use this 12 degree
3:47
bar, how do we use colors and overlays? Um how do we use our typography? Um the
3:52
gradient wave that's at the top was certainly an element but it didn't really scale well. So, we had to create
3:59
a new design vision for our language and then update the story. It's interesting because you mentioned
4:05
that visually I look at this and this looks like a site that could have been launched yesterday. Um, and I think
4:10
that's a testament to how Stripe has always been so far ahead of the game from a design perspective that you could
4:15
have a site that's 6 years old and obviously you you made updates to it over the years. This wasn't literally
4:21
the site that you launched six years ago, right? But um clearly it has stood the test of time which is really impressive and it makes sense that
4:28
you've got all these different customers now. It seems like the approach that you took with the old one was just keep
4:33
adding sections that would target different types of users and hopefully people would scroll until they hit the one that's right for them. And it sounds
4:40
like maybe you've rethought that for the new site that you launched. Yeah, I mean like perfect example, you know, AI is very big part of our
4:46
business. It's both like how we build what we build and who we build for. like over 78% of the Forbes AI 50 use Stripe
4:56
and they are using our products to help them scale really fast and help them
What Story Was Missing From The Old Site
5:01
monetize in new ways right so usage based billing so that you can uh make the right moves for your inferences
5:07
costs and how your users are actually using your product and it's a tile on the website [laughter]
5:13
so the story was missing like what we're actually building wasn't coming clear and so when we realized okay now it's
5:19
time to update our site I would say there's a couple of things on that front which is one like first principles what
5:24
are we trying to do here like what is the point of a website anyways I remember being in a meeting where Patrick asked like well what is the
“What Is The Point Of A Website?”
5:30
point of a website I think one part of it is it's it's your manifesto whether you explicitly call it that or not
5:37
because you're demonstrating who you are what you are doing and why you do it and
5:42
in some indirect ways right it's just like the nature of the way that you build your site how you present yourself
5:47
what colors you choose what typography you choose the details that you choose to care and the ones you don't and then
5:53
of course how you articulate what you're doing and what you offer. So we set out to make sure that the story was
5:58
extremely clear for who we're serving and how we're serving them and what we care about. And so that's where, you
The New Site
6:05
know, honestly painstaking hours over a year or more is what, you know, ended up
6:10
going into this. Partly because in some ways we weren't rushing to get something out like when we're ser when we're
6:16
building something for our users, it's like, okay, it needs to be out like it needs to be out tomorrow because they're dependent on this. This was like it was
6:22
for ourselves in a lot of ways. And so we certainly could take the time to sniff out the right design and, you
6:29
know, get on that scent. Um, and you know what? There were many weeks and months of design exploration where we
6:36
liked it, but we're like, "No, that's not it." Yeah, we're not ready to, you know, wear that shirt for the next six years or whatever it might be.
6:42
And so, it's financial infrastructure to grow your revenue as the first one, which is the exact same for a sentence.
New Landing Page Breakdown
6:48
So, that has remained consistent and it seems like what [clears throat] you wanted to add here was the extra things here that would catch other people.
6:54
Yeah. That where Strike would actually be the right product for them, too. Yeah. One of the things that's interesting is I like looking at sites
7:00
and trying to figure out what is something that only this company could do that nobody else could do. And one of
7:06
the things that stands out to me is the GDP counter that you have here. It's not many companies that could um that could
The GDP Counter: A Homepage Element Only Stripe Could Pull Off
7:12
have a live counter of the percentage of the global GDP, not even just US GDP
7:19
that is running on Stripe. Talk about the decision to put that right up at the top as well. Well, I would imagine a lot
7:25
of, you know, people watching and people building websites are thinking about, well, how can we demonstrate the the
7:31
impact that we're having, the the reason why you should trust us, the social proof, you know, what users trust us
7:37
before. Uh, these are important messages. They they help the, you know, the the potential customer understand
Building Trust Through Design
7:43
like whether or not this is a brand that you could trust and okay, good to know that you've done it for others. As I expressed earlier, like we're, you know,
7:50
trying to help everybody from a micro entrepreneur who's going to grow a startup to hopefully great success as
7:55
well as these large enterprises. It matters a lot to them whether or not that Stripe is dependable, reliable,
8:01
trustworthy, and can operate at their scale. So, we ask ourselves, well, how do we express that? How do we help you see
8:07
that we can? Of course, one of the ways is that we tell you about the users that use us, and you can see that scrolling
8:12
across the bottom. But another way is like you know the actual enormous impact that we have had the the privilege and
8:18
the responsibility of serving in that can actually be quantified in the GDP. Yeah. I love that. And the other key
8:24
word here too is billionth. You know like that just signals if you do billions of transactions stripe is right
8:30
for you. Yeah. YC companies. Yeah. [laughter] You got this. Yeah. Yeah. Very cool. Okay. Take us
8:36
through uh the other sections that you you put underneath that. Yeah. All right. So this next section is what we call our bento. And so this is
8:44
probably the big area that's seeking to solve some of the problems I talked about earlier about really expressing
Inside Stripe’s “Bento Box” Approach to Product Storytelling
8:50
kind of like the scale of the product offering. And so before you saw like okay we do issuing we do payments. Uh
8:57
but here we're trying to depict a little bit more of the solution set. And so payments yes we do payments we do online
9:03
payments we also do terminal. Uh billing is you know what we were talking about earlier about usage based billing or um
9:09
you know could be fixed fee subscriptions any number of these types of things are a lot more adjustable and
9:15
um customizable to the businesses we're serving. uh we talked a little bit about the the role that AI plays in the
9:22
organizations and so we wanted to make that clear our issuing product stable coins and then of course the way that we
9:30
uh provide for platform businesses and marketplaces and so what we're trying to do here is not overwhelm you with too
9:37
much going on I mean that I know there is a lot on this page but you know you can see that there's a very little text we're just
9:44
trying to get the point across to give you enough of a sense of like, okay, this may be for me. And then what we're
9:50
really trying to do is show rather than tell. So, hence the imagery. And then the quick way that you can gain more
9:57
insight is we do this kind of overlay, this larger modal, so you don't actually have to go off your course. You're not
10:04
we're not taking you away from the homepage yet, but we can give you a little bit more of a sense of what this is all about. There's many products
10:11
layered into this, right? Like, you know, we on that bento, it's 1, two, three, four, five, six. But that's, you
10:17
know, I think we have many, many more dozen products on top of that that we
10:23
can't express all on one page. That would just be too much and would overwhelm you. So, we want to give you essentially progressive disclosure as a
10:30
way of of getting towards the more details behind the products and more things that we offer. Yeah, that's very cool. I don't know
10:35
that I've seen this specific design with the bento box and the modals that you can pop up that give more information
Why Stripe Used Modals Instead of Sending People to New Pages
10:40
directly on the page. It's an interesting smart choice because rather than take people to a dedicated page,
10:46
you keep them right here. Show them what they want. You give buttons to to jump to the next section or you can keep
10:51
scrolling down if this is not the right thing that you're looking for. Yeah. That that you want it to feel light. You want it to feel easy to kind
10:59
of explore and engage and you're taking them on a journey for sure. You want to help them get to where they're going. Uh
11:05
but yeah, I think if we leapt people off the page, you know, when it might be too early for them to have made their
11:11
decision on what they're actually going after. Uh so this is really just a bit more of a browse experience and it's a
11:17
gives them a bit more of a a chance to explore. YC Starter School is back. We're hand
11:22
selecting the most promising builders in the world and flying them out to San Francisco for July 25th and 26th to
11:29
discuss the cutting edge of tech. Apply now for a spot. Okay, back to the video. Yeah, it's interesting. Another thing
11:35
that stands out to me is how much animation you use um in each of these cards. Talk a little about about that
Adding Lively Animations That Don’t Feel Distracting
11:40
and and how you can do it without making it too overwhelming or distracting for people. Yeah, it's a difficult balance to get. I
11:47
mean, this is where prototyping and experimentation like I remember this one where it's like we had too many lines at
11:53
first and then we had too few lines at first and the the ball was moving too fast. Uh so you do have to really
11:58
fine-tune, bring it in. You know, one of the things as kind of pointed out earlier and when when you're building a
12:03
website like this, you are either, you know, both directly and indirectly expressing your company's manifesto. So,
12:09
one of the things that we are trying to express is the care that we put into the work that we do because if you see the
12:15
care that goes here, then you you're right to assume that we also put that care behind the scenes in the way that
12:20
we move money and the way that we protect uh a company's information. These are important details to express.
12:27
It's also, you know, the idea of making the site feel a bit more alive. You know, that there's a presence here
12:34
is something that I think the motion does really well. You were right though. If you go too far with it, it becomes
12:39
distracting. It becomes annoying. Nobody really wants to engage with that. And so, it's just delicate movements and
12:45
really just like trying to fine-tune it. Um, and also thinking about the role that when somebody engages with it,
12:50
that's where, you know, you bring certain things to life and make sure that you're like responding and this gives the feedback to also register
12:57
like, okay, I can click on this. You might not have known that otherwise. So, we try to engage in that way. This is
13:02
where we're we're basically these are kind of like the the big important metrics that can help you understand
13:07
again kind of the scale of what we build. Um, and you know, of course, there were versions where we could just
13:13
put the numbers there. Uh but what we intended to do with this is to just add
13:18
a little bit of interest. It is loosely communicating the intention of these uh
13:24
metrics. It's not really a data viz of course. Uh but it gives you a sense of like okay here we're talking about
13:30
global scale. Here we're talking about um uptime and so you kind of get the sense of continuity here. Um but really
13:37
it's just fun. It's just beautiful. Um, and then there's, you know, it changes depending on what time of day, but if
13:42
you want to go ahead and see what it would be like at night, you can come in and check it out yourself. It feels like we're entering an era now
13:48
where websites can be fun again. Yeah, they were fun early on and then it got to a point where every SAS website
The Value Of Beauty In Web Design
13:55
looked exactly the same. And um, it's really cool to see you focused on things that are just fun for the sake of being fun.
14:00
Yeah. I mean, I'm I'm a AI hopeful that the creation of these tools that can help us move so much faster and
14:07
basically get to like get to good almost like instantaneously and almost for
14:12
free. And now great, we can take that time to then push it that next level and
14:17
to create something that is really interesting and playful and, you know, beautiful. Yeah. I think what's interesting here
14:24
that's that's maybe worth for anybody watching to pay attention to is that these aren't animations for animation's
14:29
sake or interactivity for interactivity sake. There's there's an intention and a purpose behind everything that you're doing and it's connecting to the
How To Be Intentional With New Design Elements
14:36
specific message that you're trying to communicate with each of these numbers and it's easy to look at it and go like oh yeah it's just like a fun kind of
14:42
thing and it is that but it's not random. Yeah. And a lot of thought goes into that I'm sure like talk about some of
14:48
the different things that you explored or were people even against putting this in thinking well what value does it have
14:54
and every inch of the screen has to have um you know directly measurable value. Yeah. Well also interesting is it's this
15:02
section that the site didn't launch in December. M
15:07
so we we ended up launching in January and uh we were at a stage with this
15:14
where like we had something good like we had you know all four animations but
15:20
they didn't move quite the way you know we thought would feel really smooth and really intentional and the extra detail
15:29
of how they transition from one to the next just like felt a little cluji and
15:34
wasn't quite as smooth as it could And it was a decision, you know, a group
The Balance Between Getting It Right and Endless Iteration
15:40
decision that we should wait and we should do it right. We could have, well,
15:46
let's just only do three or let's just only do one or maybe you don't make the move. Um, and you know, for sure what we
15:52
don't want to get in the habit of is just like pushing timelines out to the end of time. But this was a decision
15:57
that it was worth it to get it done well and make it actually a kind of joyful
16:04
experience that demonstrates you know that love and care and the technical ability and you know it was over the
16:11
holidays and so pushing it another week was was not going to be you know the end of the world but also a really good
16:16
thing in the long run about how it feels within the overall composition. Yeah. Very cool. So this area is um a
16:23
place where we're we're talking about our users but we created these images so it brings together Stripe the brand and
AI-Generated Brand Imagery
16:31
the the companies that we serve. So each one of these is custommade uh and it's
16:37
you know intended to express a bit of the brand that we're highlighting as well as the Stripe brand with the
16:43
parallelogram. You could look at this and you could be like oh yeah great opportunity to use AI as did we. We're
16:48
like great, we're gonna use AI and it's going to be awesome and we're gonna get these done in a, you know, a day. Now,
16:53
of course, like the reality is, you know, building with AI is actually also, you know, something that is u it
17:00
requires the love and care and attention of the makers. And so, there was definitely a process behind it. But
17:05
these are really just meant to bring some interest. And you kind of again, as you're trying to express through
17:11
visuals, a lot of people scroll really fast through the website, right? At least I do. I don't know about you. But
17:17
when you're you're trying to get them to like take a beat almost like a song, you know, it's like what are those like key moments of punctuation and where do we
17:25
want you know folks to slow down and take a note and also when are we trying to express something like you know
How A Website Is Like A Song
17:30
trying to communicate uh the type of brand that we work with especially if you're you know not familiar with them.
17:36
And now we've moved to a darker background. Is there something intentional behind that now? Well, this is an area that
17:42
we're talking about our um integrations in the way that our APIs work. Uh and
17:48
certainly there's, you know, a developer language. Uh not everything has to be in dark mode, but um it is actually
17:55
something we have done in the previous site as well. And so we wanted to carry that forward. This is uh the area that we call squeezy
18:01
boy. [laughter] Uh design is definitely more fun when you can give everything a fun name. Uh
18:07
but it is a an area where we're we're kind of just showing some of the things that are comingings and goings and uh so
18:13
this is our Black Friday Cyber Monday uh city that we had built um our
18:20
podcast Cheeky Pint. Uh so this will always be changing with different things that come through. Uh but we wanted to
18:25
once again you know have a little fun with how we portray these things make it easier and um also inviting to engage
18:32
with. Um certainly added more challenge to it. Like so for example how do you get an image that when it's this size is
18:39
going to make sense as much as it's going to make sense when it's this size. Uh so this was tricky to to build it
18:45
right. And so you know quite a bit of iteration on that but I think the team found a clever way. It's amazing seeing
18:50
the finished product here and everything is so polished and and put together, but I think it's really easy to miss all the
18:57
work and the iteration and the process that goes on behind the scenes there. I would love for you to take us through
19:02
show your work on all these different sections and all the iterations that you went through to ultimately end up at this point.
19:07
Well, okay, we're starting here on the top where we have this wave. Uh I've worked at Stripe now for five years and
Designing the Perfect Stripe Wave Background
19:14
I cannot even tell you how many different variants of a wave or gradient or gradient wave that I have seen and
19:21
been a part of. Um I think we are trying to find every possible solution on this
19:26
project. You know we knew we wanted to bring a lot of kind of color and joy to
19:33
the experience and we knew that a a wave or gradient wave like we had before is a
19:39
a key way to do that. and we enjoy that part of the brand, but which wave, how to do it, what's going to stand the test
19:45
of time, what could be on there for six years potentially, uh, and, you know, give you a, you know, a bit of joy when
19:52
you visit, but not overdo it. And what's super cool is that our wonderful team
19:58
created this tool where we can experiment and get the right waves,
20:03
the perfect wave. Exactly. So, you could just like tweak, do I want that much blur? No, not that
20:09
much. Do I want a more grain? No, not that much. Let's see. We want to also switch it on the scale. Do how do we
20:15
want it rotated? How thick do we want? How much texture do we want? You know,
20:20
the reality is is all of those factors matter so much. Like what exactly is the color? Like that's a little like that
20:26
yellow isn't right. Right. That's not the what we ended up with. Like we want to find just the right color mix, just the right texture, just the right amount
20:32
of movement. And having a tool like this was essential to make that happen. And
20:37
then you know we first get it right and like okay we see how it is here and then becomes the building process like how do
20:43
we actually build it so it's also performant and is going to you know operate really smoothly on anybody's computer
20:50
and and I noticed some buttons here it looks like you can save the state so do you create different variations of
20:55
these and then kind of test them against each what was the process even of using this tool yeah before we even got in that tool we
21:00
were even just trying to get centered on well what is it that we're actually trying to achieve with the wave what are
21:06
talking about here like well how vibrant do we want to be or do we want like prefer it muted like some of these were really interesting but is that the right
21:14
feel for the page or not? Um you know there this is one of our previous waves from one of our event sites uh which was
21:21
monochromatic but also really bold or do we want to be a little bit more uh diverse and more rainbow like? And so we
21:28
looked at each of these kinds of ways of thinking about it and then you know essentially had discussions about like
21:34
well is it flat or is it an object with a form and these great discussions help
21:40
us tease out uh what we're we're actually trying to do and of course you know Patrick is was heavily involved in
21:47
the site as well and so we had many discussions with him is like this this wave feel right because when you're you know creating a new homepage it's almost
21:54
like yeah you're deciding what you know clothes you're going to wear for the next many years. M it's a big decision. It's amazing seeing um the literally
22:01
infinite variations that you could come up with here. I imagine that makes it harder to just make a final call. What is that process?
22:08
Who who decides and and um you know how do you decide like this is the one that
22:13
we're going with and and move on from this because you could probably spend forever debating. Oh, it's very very true. Uh usually well
22:21
for something like this Patrick was definitely a part of the decision-making process and so usually you know with the
22:27
team we will look at quite a large range then we will down select to you know a
22:34
subset of those and say like okay these are the ones that we're comfortable with like we don't want to put in front of Patrick ones that we're like definitely
22:40
not comfortable with or wouldn't recommend. Although it's it's always helpful to show kind of like the process and what we did explore. But then we
22:46
look at the ones that are likely a very good fit and then we'll have a conversation about what you know feels
22:52
right for him. And luckily, you know, he's also exceptionally decisive and has very good taste. And so we usually can
22:59
use that as a conversation of like, okay, this one feels right. But I'll also admit, I mean, this is one of the blessings and the curse of the design
23:04
process is that something that could feel great here on or on a board or in isolation, um, all of a sudden feels
23:11
very different when you actually put it in place and you feel it. that you feel it with the rest of the typography and
23:16
the the logos on there and the various other things and also just like sit with it for some time. Uh so we definitely
23:22
evolved it over time. Something that may have felt right at one point um starts to feel, you know, just like it it it
23:28
isn't going to stand the test of time and then we want to change it. Yeah. So, at what point in the process do you go from looking at a bunch of
23:34
different variations on this like flat to an object with a form or quiet to turbulent and then actually get it coded
23:41
up and working live in the page so that you can get a sense of what it actually feels like live. I mean, I would say the goal is as
23:47
quickly as possible to get it into state that would be like the way a user would experience it.
23:52
Uh because it is really hard to judge anything in isolation in a way that isn't like the user would be. you're you
23:58
that's what you're trying to do is just like put yourself in their shoes and then see what that would feel like. Sometimes we're just we're not there
24:04
yet. Like it could take some time to code it up. Uh and so we want to you know start to down select just so we
24:10
know like should we code you know the these five versions or you know these five versions. And so we would start
24:16
perhaps with something that's more of just like a static visual and just get a sense okay we want to go over here over
24:21
there. But that's where that tool comes in hand because this allows us to essentially, you know, get many versions
24:28
[clears throat] at once, right? And so we can play with them together. Yeah. And one of the other things that you might not get to experience um just
24:34
playing with it in frames is it it comes behind the text there. And so you have to change the text color and make sure
24:39
that the text is readable and and not distracting and and it interacts with all these other elements on the page that are really important, too.
24:45
Right. You talked about a few different uh bento variations. Oh, yeah. I'm curious to see some more of those.
All the Homepage Concepts Stripe Tried Before Landing on the Final Design
24:50
Yeah. So, this is the bento where we're trying to communicate a lot of different things that we do. Uh, and what what's the right way to to
24:58
communicate this? We looked at a ton of different things. And so, what we're trying to figure out is, you know, if
25:04
you're what kind of user are you? Are you a uh micro entrepreneur with a small
25:11
business or are you a large enterprise? Are you interested in billing or are you interested in connect these things? Do
25:17
we want to show you them all in one screen? this might be an approach so we can get there faster because of course
25:23
on any website the more you scroll down the less users get there, right? Uh so what if we just squished it all in?
25:29
Well, that's a lot. It's pretty type heavy. We're not doing a whole lot of showing versus telling. Uh we looked at uh these kinds of
25:36
sections. This is a little bit more similar to our original site that I showed you where you just kind of like
25:42
pass through section by section. This felt like a little too scrolly telling, right? and you're just like kind of you
25:48
want to get to it and you want to get to it faster and you want to be able to get a a quicker sense of what we offer. Uh
25:53
then we have here a essentially an accordion so you could press these things to then open them up and see what
25:59
we have. Uh this one we actually did take to user research and unsurprisingly
26:05
it was not a quick way for people to really digest a lot at once because it
26:12
requires effort. you know what even if it's not a lot of effort, right? But you um you want somebody to tap on it or you
26:19
want them to scroll over it. Uh and you know, otherwise you're you're in trying to introduce something to them like
26:24
manage a marketplace end to end. Like you might know what that means, but you might not. Would you would you be interested enough
26:30
to click through and most people just don't click tabs? Yeah, exactly. So that's why, you know, again, this didn't feel right and a more
26:36
visual one um was definitely a better choice. Uh but there's a lot of different variants here in the way that
26:43
we explored how to communicate this. And then again, you know, it just we have to remember that when people are coming to
26:49
this site, they're in a more of a lean back mode. They're in more of a browse mode. So the idea that you're going to
26:55
put your most important messages a click away, it's going to be tough. And so that's where the bento kind of won at
27:02
the end of the day because it was just so much more visual um and I would say kinder to the users because it meant
27:08
that they could be in that lean back position. Talk a little bit about the process and maybe how you used AI in building this.
How AI Is Changing Stripe’s Design Process
27:15
Well, so yeah, let's start with the images that but there's other parts of the process there. But these were certainly a type of thing that lend
27:23
themselves to AI. I think AI is really good at these pictures that seem, you know, super real. Uh, and so this is
27:30
kind of what we're going for. Now, it seems like it would be pretty simple to ask a, you know, an AI like, you know,
27:37
free pick or whatever of like, you know, give me a parallelogram inside this thing. But the reality is, you know, the
27:44
nuance of the details really mattered to us. Like, you couldn't just put uh something that sort of got there. Uh, it
27:51
had to feel like it was, you know, at the same level of love and care as these other things. What was really kind of
27:57
funny was the process here. Uh because you know, one wouldn't have thought that bubbles would have taken so much of our
28:03
attention, but they sure did. Uh so here was a version that we had for a different user that is uh not depicted
28:09
on the site just right now. Um and you can kind of see like, okay, yeah, it's
28:14
an ice cube and the bubbles and you know, generally what do you think? Looks looks okay. Yeah, looks real. Yeah, ship it.
28:19
Well, [laughter] this is the team's uh thoughts on the matter. And so each one of these things
28:25
is actually a critique of, you know, where it just doesn't feel quite real, right?
28:30
The example um from uh urban um or URBN is the um you know, how well does this
28:38
all feel like the right urban uh layout now gets a lot of it right, but when you
28:43
take a double look, um her arm isn't quite right. He doesn't quite have a hand. Um you know, that shadow isn't
28:50
exactly how it would be. uh and so the the detail in each of these little
28:56
nuances like each pixel basically needs the same uh amount of attention. So I
29:01
think what AI is helping us do is it's helping us speed up our process and certainly helping us explore more. We
29:08
can look at you know 20 ideas in the time it normally would have taken to look at two. However, the it doesn't
29:15
replace craft. It doesn't replace taste. it doesn't replace, you know, the attention to detail to ensure that
29:20
you're getting each of those things right. Um, we're really excited about how it's sped up prototyping and sped
29:27
up, you know, experimentation. So, it's like, how should these accordionss move? Should it replace this or should it push that? Uh, we can mock that up really
29:34
fast and then saves engineers countless time hours and and designers as well as
29:39
they're exploring different varieties. It's also really great for user testing. Um, if we want to be able to change all
29:45
the words in here, uh, so that it feels one way for one user that we're talking to versus another, we can do that really
29:52
easily with AI prototyping. I would say even during that time period, you know, what we were exploring is, you know,
29:58
feels oldfashioned a year ago versus uh, how we explore today. How about uh, like the role of
30:04
designers? You know, it's it seems like it's not just um, pushing pixels in frames in Figma.
30:10
Yeah. talk about what the designers on your team are doing and and the role that they played in uh in actually
30:16
building this what designers at Stripe endeavor to do or to create things that feel like they
30:21
push the status quo forward. That kind of all harks back right to the idea of like what what is the global progress
30:27
that we can provide and we want to do that via design as well. We want to create things that are exceedingly easy
30:32
to use that are also really really powerful and that can help people solve problems or help them build their
30:38
business or help them accomplish what they're trying to do but do so in a way that actually just brings a little joy
30:43
to the day too. You know, because frankly that's part of progress as well is that like a beautiful world is
30:49
definitely a better world. I want to live in that one. And so designers are trying to create things that are going
30:55
to be really intentional for our users but also do so that's you know in a creative and thoughtful and
31:01
differentiated way and I would say the tools that we're using are allowing for
31:07
that now hopefully better and faster you know as we talked about earlier is that you know I think AI can you know give us
31:14
opportunity to keep the base like to raise the floor essentially to create baseline products maybe that like the
31:20
seven out of 10 really quickly, really easily. But then what do you do with that extra found time? Do you just like
31:26
ship that and just like, you know, ship more sevens out of tens? Like, boy, I hope not. Uh, what instead we want to do
31:33
is, you know, get the things that are just like, okay, that's a very typical modal to, you know, accept somebody's
31:39
email address to sign them up. Like maybe you don't need to reinvent the wheel there. Like as long as that is like a really good version of that, then
31:45
we're good. But now, can we spend the time to think about new paradigms of interaction? Like for example, people
31:51
are using agents to build their businesses now. Um they're using agents to basically do everything under the
31:57
sun. So what is your agent experience? How good is that? What is the the users's experience going to be like when
32:03
they are traversing, you know, the internet or their tools in that way? And so that's where I would say designers
32:08
are putting more time now is thinking about those new paradigms of interaction and trying to think about like what does
32:14
great experience or user experience or agent experience look like for tomorrow. We have incredible new tools that are
32:20
available for everybody. And one of the trends obviously that that we've been seeing a lot of is everybody within a
32:26
company now having the ability to ship code and improve products and update the
32:33
website and you know the core product that customers are using which I think is really powerful and one of the
32:39
questions that I think that that comes out of that um especially from a design perspective
32:44
is how do you keep it so there's this cohesive design language and it stays to
32:49
the bar that you is so important to you and without being directly in the flow of
32:55
how new code gets written and shipped and going live on the site. Yeah, I really interested to see and be
33:02
a part of the evolution of design systems in this way because design systems have always been a way to help a
33:08
team scale. So as a organization grows and you can no longer just know what the
33:14
right thing is because you know there's 10 of you seated around the table and you're all just talking about every single thing you do. when you scale like
33:21
it helps the organization make decisions together and ensure that there's con coherency in the user's experience with
33:29
AI tools I think that we're going to see a whole new wave where these systems are
33:35
you know kind of managed by the AI tools and that can help us scale things a lot
33:41
more quickly and so for example as I mentioned I you know drew a sketch of what I wanted to see built and then I
33:49
put that in the AI tool and then it uses the components from our design system to piece that together for me and get a
33:55
like the the rough version. Then I want to, you know, push it here and there and actually, you know what, that component
34:01
isn't really fit to purpose for what I'm trying to do here. So this is where we're going to need to push from that
34:06
and so then can the AI tool help me actually expand the design system and
34:11
actually help to grow it for the use cases that we need. And so I think there's a lot that is going to be
34:18
facilitated in terms of bringing more high quality things at that like
34:23
baseline. But honestly, I mean, this is what people have to choose to do because sometimes it's so easy when you put it
34:29
in the, you know, the AI tool and it spits back a thing and you're like, "Oh, that that was fast and that was easy and
34:34
that's pretty good." And you will like you can feel it in yourself just being like, "Yeah, I guess that's enough." But
34:40
like the reality is like don't be wooed by you know just how easy that was to
34:46
achieve but instead ask yourself like but is this really is this really great? Is this like have I really hit the mark?
34:52
Is this really going to achieve the goal? is really going to feel like it's wellcraftrafted and put, you know, intentionality behind it. And then, you
34:59
know, sometimes that takes, you know, another rev and another turn. And, you know, the the way that, you know, our tools today can allow you to kind of go
Fighting the “Gravitational Pull to Mediocrity”
35:06
back and like, no, tweak this little bit and tweak that little bit. Uh, and essentially the merging of design and
35:12
edge tools and one allows you a lot more ability to kind of customize that. So, you don't need to accept slop and you
35:19
shouldn't accept slop. you should you know hunt for fight for the right solution.
35:24
What are some more principles like that that you try to instill in your team? I mean, I think I think a part of it is,
35:30
you know, the reality is, and I think we may have even talked about this last time we talked, like the gravitational
35:35
pull is to mediocrity. Like, it is just so easy to accept good enough.
35:43
And I think it really really takes intentionality and you really have to think about like what is the cost of
35:49
accepting good enough. And I think in that one decision, you're just like, well, it's just fine. Like it's just
35:55
like ship it like it, you know, it achieves it. like you know I really you know we we've got too much to do and you
36:01
know is it like that data viz thing we were talking about before like it's it's pretty good you know we got like wouldn't it be great to like get the
36:06
team on something else and you you like weigh all these other costs and you think about it and you end up making a decision to go for good enough
36:13
but think about if you made that good enough decision every day all day every
36:18
day and then think about how many companies do that right like how many companies really stand out to us as like
36:25
exquisite and exceptional and that like really hold that bar up that it reminds you of just like how hard it is to fight
36:32
that fight of like well I if I let this slide you know what else am I going to let slide and what is that like
36:38
composite going to be and then I think a lot of people make decisions based on well you know the team put so much
36:44
effort in like I'm going to you know upset the team if I don't go forward it's like well how happy is the team going to be if the product is just meh
36:51
fight the gravitational pull to mediocrity and do not leave well enough alone Mhm. And really look for the thing that's
36:57
going to make a difference. I think the other thing that we talk a lot about internally and I think is really
37:03
important for folks to consider when they're building products and experiences is what is the user going to
37:11
experience at the end of the day. You know, we get a little too caught up in our own world. We're too comfortable with it. And so what I would always say
37:19
is just like realize it the way a user would. prototyping, not presenting.
37:25
Don't try to communicate to, you know, the stakeholder of like, well, this is why we did this and this is, you know,
37:31
the trade-off that we fought against and this and that. It's just like if you're there to talk about whether or not this
37:36
is the right solution or not, then you should be asking of like, well, how is this going to feel at the end of the day for the person that's going to be
37:42
experiencing this? And, you know, does that feel good? Without all of that knowledge, do I think that part is is
37:49
the right one? um that makes a big big difference. Um I would also say when
37:54
we're exploring different products and like what are you know what is actually
37:59
shipworthy or not you think about like what the trade-offs are of like is this going to negatively impact somebody's
38:06
day? Is this going to be something that erodess trust if you don't get this right? Is this going to make it to the
38:13
front page of the news? Like what what are the tradeoffs when you're making a decision? And I guess like a lot of the
38:19
things that I'm talking about here are the things that sound like I'm looking for perfection. And I think that's also
38:26
a dangerous pursuit because of course like your product is only as good as
38:31
what's actually out there, what's shipped. It's not what we've been thinking about. It's not what we've been talking about. It's not our intention
38:36
and what we're pursuing. It's what's actually available to the people that are you're you're serving.
38:41
And I think progress is probably more important than perfection in that case.
38:47
And a lot of times it's not out there until you actually can learn and understand whether or not it's
38:52
effective, especially with AI tools and the way that you know you you really don't know how people are going to use
38:59
it and how it's going to respond and how they're going to evolve with it until you can bring it actually to market. And
39:05
so I think you have to have a kind of a rubric in place about what are, you know, the essential pieces to a
39:12
successful product. I wouldn't call it an MVP. It's probably like an MVQP, like a minimum viable quality product. Uh
39:20
because again, you don't want to lose trust by experimenting with something out in the world. Uh but you certainly
39:25
want to learn from their experiences. It feels like something that's becoming even more important these days um with
39:30
all the advancements in AI is QA. Yeah. And testing. And you know, you talk about having the voice of the user and
39:36
the perspective of the user in your head as you're designing. Um, and part of what you do at Stripe, which you told us
39:42
about last time, is uh, walking the store. Oh, yeah. And, um, and you actually go in and you
39:47
test all of the products yourselves and you do that as part of a company culture and a requirement that everybody does.
39:53
Everyone is expected to do that. Um, which I think is really important. How has that changed more recently? Um,
39:59
either within Stripe or certainly with all the changes with AI that have been happening. Walking the store is such an
Walking the Store: Stripe’s Secret to Better Product Design
40:05
important part of building products and experiences because again it like at the end of the day you're trying to
40:10
understand what the user is going through. And when you're building something, it's so easy to be like, "Oh yeah, we're in our product. We're in it
40:16
all day. I'm thinking about my product all day." But what you're thinking about is, you know, that next feature that you
40:22
launch and it's really easy to lose sight of what's actually out there. It's kind of funny like how you can create
40:30
something. you're like, "Oh, when I shipped it, we did all these bug bashes and it was great." But then you use it
40:35
and maybe you use it a month later, maybe you use it, you know, two, six months later, and it's evolved. It's
40:41
changed. And the reason why is because probably somebody else shipped something and somebody else shipped something and
40:46
now it's like, you know, it's in your home when you've updated the dining room, but none of the other rooms and
40:52
all of a sudden the light switches don't match and the colors are off and every other room now looks bad. You have to
40:57
think about how that composite works together. And you know for Stripe for example, we have a number of different
41:03
business areas, right? We have our money movement business, we have our revenue business, we have our payments business.
41:09
And these organizations need to focus and they need to stay true to their
41:14
mission and what they're trying to get done. But if they don't think about how their product intersects with each
41:21
others and how a user might go from, well, I use subscriptions and I use
41:26
payments and I use tax. how are these things all going to work together? Then they're really missing the user
41:32
experience. And so walking the store helps people see kind of the forest through the trees and see how all these
41:38
things connect. And yes, we do basically it's like a part of the culture that everybody does
41:44
this. Uh we do have a program that we talked about last time, essential journeys where we have a a subset of
41:51
these journeys um kind of like on a scoreboard and like are they you know
41:56
red, yellow, green, how good are they? But everybody should be exploring the store different parts imagining
42:02
themselves as different types of users experiencing different sides of it and trying to find the the dead ends. We
42:08
also do this every Friday where the founders do it in front of the whole company where they're walking the store.
42:15
One to just instill how important this is and kind of raise awareness and also to help people think about how do you
42:22
see not everybody has the same attention to different types of details. And so I
42:27
might see something that you might not because of my discipline or my disposition or you know that the user
42:33
that I talked to earlier that week and so the thing that I'm interested in. And so when we do these things together, we see the value that different points of
42:40
view bring. So I really love to walk the store with like an engineer in the room and a product leader in a room and a
42:45
data science in the room because we're all looking at it very differently and we're all going to point out different things and that is what like gets us
42:52
closer to really actually understanding what a user might feel. Well Katie, this has been incredible. Thank you so much for coming and um I
42:59
feel like it's so rare to get an honest peak behind the scenes and showing the process and all the steps that you had
43:04
along the way. So, uh, really appreciate you sharing that with us. It was a lot of fun. I'm always happy to talk about behind the scenes. I think
43:11
the blood, sweat, and tears and the effort that goes into it is something that's a part of the work, but is often
43:16
not talked about. I [music] love hearing it from other designers, and I'm always happy to talk about it myself. Thanks for having me on. Awesome. That does it for another design
43:23
review. Thank you for joining us, and we'll see you on the next episode.
43:29
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

# EVSRC-2026-000297 — How Stripe Built Their New Website

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `raw_dropped`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

## §0 — Source identity / metadata

- evsrc_id: `EVSRC-2026-000297`
- filename: `EVSRC-2026-000297_how-stripe-built-their-new-website.md`
- source_platform: `YouTube`
- source_url: `https://www.youtube.com/watch?v=ypzNhwpmOD4`
- source_title: `How Stripe Built Their New Website`
- channel_or_org: `Y Combinator`
- speaker: `Katie Dill; Aaron Epstein`
- published_at: `2026-04-22`
- captured_at: `2026-07-19`
- captured_by: `Nick`
- capture_method: `transcript paste + screenshot`
- content_type: `design interview / product and brand case study`
- source_reliability_context: `practitioner`
- topic_tags_light: `[product_design, public_surfaces, trust_signaling, progressive_disclosure, design_systems, AI_prototyping, experience_coherence, minimum_viable_quality, user_journeys, brand_narrative]`

## §0.1 — People / authorship / authority context

- primary speaker(s):
  - name: `Katie Dill`
    · role_in_source: `interviewee / principal design practitioner`
    · affiliation_at_publication: `Stripe — Head of Design`
    · speaker_type: `operator`
    · authority_context: `Design leader explaining Stripe’s homepage redesign, design-system evolution, AI-assisted prototyping, quality standards, product-story architecture, and company-wide user-experience review practices`
    · identity_confidence: `high_from_screenshot_and_transcript`

  - name: `Aaron Epstein`
    · role_in_source: `host / interviewer`
    · affiliation_at_publication: `Y Combinator — General Partner`
    · speaker_type: `investor`
    · authority_context: `Host examining Stripe’s redesign decisions, visual storytelling, AI-enabled design workflows, craft standards, and design-team evolution`
    · identity_confidence: `high_from_transcript`

- publisher / channel: `Y Combinator`
- interviewer / moderator / host: `Aaron Epstein`
- event_context: `Y Combinator Design Review episode examining Stripe’s first major homepage redesign in approximately six years`
- perspective / conflict notes: `The source is a practitioner-led retrospective about Stripe’s own public brand surface. It presents a high-craft organization discussing its work in a favorable setting. Claims about trust, quality, effectiveness, and design differentiation are experiential rather than independently validated. The strongest evidence concerns design process, coherence practices, progressive disclosure, and the relationship between AI-generated abundance and human quality judgment.`

## §2 — Screenshot / visible source details

- visible_duration: `43:29`
- visible_views_at_capture: `88,120`
- visible_capture_date: `2026-07-19`
- description_context: `Katie Dill explains why Stripe redesigned a visually successful six-year-old homepage after the business and product suite outgrew its previous narrative. The discussion covers progressive product storytelling, live trust signals, animation, custom design tools, AI-generated imagery, design-system evolution, minimum viable quality, user testing, and Stripe’s “walking the store” practice.`
- product_context: `The redesigned surface communicates Stripe’s broader financial-infrastructure portfolio across payments, billing, tax, issuing, platforms, marketplaces, stablecoins, AI-company monetization, and global-scale enterprise operations.`

## §3 — Interpretations & review log  ·  append-only

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`

- reviewer: `Knox / ChatGPT`
- type: `AI assistant`
- at: `2026-07-19`
- purpose: `strategic source-local interpretation`

**Signal:** **4.8/5 — strong Surface, Product Loop, Platform, trust, and experience-coherence source**

**Cross-source relationship:** This source overlaps with `EVSRC-2026-000286` on AI-native design, disposable design instruments, locally generated interfaces, and agent-legible design systems. Its distinct contribution is the treatment of a public surface as an **operational manifesto**, the need to link visible claims to real organizational capability, the use of **minimum viable quality** rather than feature-minimum thinking, and “walking the store” as a recurring cross-domain coherence ritual.

**Net-new posture:** no new OMNI domain; **two credible architecture candidates, five major sharpenings, and several important trust guardrails**

### Core contribution

> **When AI makes competent design and implementation cheap, the scarce capability becomes deciding what the system should mean, how that meaning is experienced as a whole, and which details are important enough not to accept at “good enough.”**

The source is not mainly about websites.

It is about how an organization converts a complex operating reality into a coherent, trustworthy, navigable projection—and how it prevents abundant generation from pulling the product toward polished mediocrity.

For OMNI, that applies to:

- patient surfaces;
- provider workspaces;
- operator consoles;
- enterprise administration;
- agent-facing projections;
- public claims;
- onboarding;
- longitudinal journeys across multiple domains.

---

### 1. Public and user-facing claims need a contract to operating reality

Stripe describes the website as an implicit manifesto:

- who the company serves;
- what it does;
- why it matters;
- how much care it applies;
- whether it can be trusted at scale.

The danger is that a surface can tell a more coherent story than the underlying system deserves.

OMNI will eventually make visible claims such as:

- coordinated care;
- longitudinal continuity;
- governed AI;
- accepted custody;
- secure collaboration;
- patient control;
- real-time visibility;
- closed-loop fulfillment.

Those claims must not exist only in copy or design.

## Candidate: `surface_claim_contract`

A consequential public or in-product claim should carry:

- exact claim;
- intended audience;
- underlying capability or domain owner;
- evidence supporting the claim;
- applicable scope and exclusions;
- freshness or last-verification date;
- known degradation states;
- responsible owner;
- required surface disclosure when the capability is unavailable or partial.

Examples:

- “Your care team has been notified” must distinguish message generation, delivery, acknowledgment, and accepted custody.
- “Your medication is ready” must be tied to authoritative fulfillment state.
- “Your records are connected” must disclose scope, latency, and missing sources.
- “Your information is private” must map to actual consent, visibility, retention, and access controls.

**Keeper line:**

> **A trustworthy surface does not merely describe the system beautifully; it makes only claims the underlying owners can currently prove.**

This is more than brand governance. It is surface-to-substrate truth alignment.

---

### 2. Progressive disclosure is an authority-sensitive context pattern

Stripe’s bento and modal approach avoids forcing every product, detail, and message into one flat page.

The user receives:

1. a coherent top-level orientation;
2. enough visible signal to decide what is relevant;
3. deeper detail without losing location;
4. a route to full product depth when ready.

That is useful for OMNI, but healthcare requires an authority-sensitive version.

A surface should progressively disclose according to:

- user role;
- task;
- urgency;
- consent;
- domain relevance;
- cognitive load;
- consequence;
- whether omission could create harm.

Progressive disclosure must not hide:

- active risk;
- unresolved obligations;
- uncertainty;
- consent state;
- critical contraindications;
- financial exposure;
- who currently owns the next action.

## Sharpening: `governed_progressive_disclosure`

The projection should preserve:

- what was summarized;
- what was omitted;
- why it was omitted;
- whether more detail exists;
- whether the omission is safe for the current mission;
- how to reveal the source evidence.

**Keeper line:**

> **Reduce visible complexity without erasing consequential truth.**

This directly connects surface design to OMNI’s projection law: projections may compress and reorganize truth, but may not silently upgrade, weaken, or conceal authority-relevant state.

---

### 3. “Minimum viable quality” is a better release gate than minimum viability

Katie rejects both extremes:

- perfection that never ships;
- minimum viability that damages trust.

She proposes something closer to a **minimum viable quality product**.

For OMNI, this should become a release standard for consequential experiences.

## Candidate: `minimum_viable_quality_gate`

Before exposure to real patients, providers, operators, or enterprises, a feature should satisfy a declared floor across:

- domain correctness;
- safety;
- authority and consent;
- understandable state;
- accessibility;
- performance;
- resilience;
- recovery;
- visual and interaction coherence;
- disclosure of uncertainty;
- support readiness;
- measurement plan.

The threshold should vary by consequence.

A lightweight internal experiment may tolerate roughness.  
A patient-facing medication, consent, billing, or care-continuity experience may not.

**Keeper line:**

> **Ship early enough to learn, but never so early that the experiment spends trust the system cannot easily recover.**

This gives Product Loop experimentation a quality floor without turning every launch into an impossible perfection exercise.

---

### 4. AI raises the floor and increases pressure on the ceiling

The source repeatedly states:

- AI can generate a competent “seven out of ten” quickly;
- it can create many variants;
- it accelerates prototyping;
- it helps explore interactions and copy;
- it can produce imagery and code.

The danger is that ease feels like completion.

This creates what Katie calls the **gravitational pull to mediocrity**.

The OMNI translation:

> **Machine fluency increases the probability that an acceptable-looking local answer will be mistaken for a resolved system problem.**

This applies beyond design:

- a polished note may still lack clinical authority;
- a coherent workflow may still orphan custody;
- a persuasive dashboard may still use weak event semantics;
- a beautiful patient explanation may conceal uncertainty;
- a generated architecture may still violate ownership boundaries.

The quality question becomes:

- Is this merely plausible?
- Is it internally coherent?
- Is it externally correct?
- Is it fit for the intended human?
- Is it aligned with the governing system?
- Does it produce the intended consequence?

**Sharpening:** Build-OS and Product Loop reviews should explicitly distinguish `baseline_competent` from `differentiated_and_fit`.

---

### 5. Design systems are becoming generative constraint systems

Stripe expects designers and other builders to express an intent or sketch while AI composes approved components from the design system.

The system then needs to support two outcomes:

1. use existing components where they fit;
2. recognize when the intended experience requires an extension.

This turns the design system from a static component library into a **generative constraint and evolution surface**.

For OMNI, an agent-legible design system should encode:

- approved components;
- accessibility obligations;
- semantic roles;
- allowed states;
- domain-specific warnings;
- interaction and notification patterns;
- authority-sensitive visual treatment;
- patient/provider/operator distinctions;
- safe extension rules;
- review requirements for new components.

The agent should not freely invent a new presentation for:

- consent;
- clinical uncertainty;
- escalation;
- failed custody;
- payment obligation;
- safety risk.

New components may be proposed, but they require design, domain, accessibility, and governance review according to consequence.

**Keeper line:**

> **A design system should make the safe and coherent path easy without making the existing component set the limit of future experience.**

---

### 6. “Walking the store” is a recurring cross-domain coherence review

Stripe requires people across disciplines to experience the product as users:

- founders;
- engineers;
- product leaders;
- designers;
- data scientists.

The purpose is not only bug detection. It is to see the composite experience created by many independently focused teams.

A product can have locally excellent components and still feel broken as a whole because:

- terminology changes;
- transitions fail;
- responsibilities are unclear;
- one journey contradicts another;
- visual or behavioral patterns drift;
- users hit dead ends between organizational boundaries.

This is directly relevant to OMNI, where a person may traverse:

- intake;
- scheduling;
- observation;
- clinical memory;
- orders;
- fulfillment;
- messaging;
- payment;
- documents;
- follow-up;
- accountability.

## Candidate: `experience_coherence_review`

A recurring review should:

- select high-value or high-risk end-to-end journeys;
- experience them from the perspective of different principals;
- cross domain and organizational seams;
- capture dead ends, contradictory states, missing transitions, and trust breaks;
- assign findings to the owning domain or seam;
- track red/yellow/green status;
- verify remediation against the complete journey.

This should not create a new canonical truth store. It is a multidisciplinary projection and review practice over existing domain evidence.

**Keeper line:**

> **Domain teams own their truths; somebody must still experience the relationship among those truths as the user does.**

This is one of the strongest additive contributions in the source.

---

### 7. Surface quality can signal care—but cannot substitute for proof

Stripe uses motion, precision, custom imagery, and detail to signal:

- care;
- technical competence;
- reliability;
- sophistication;
- trustworthiness.

That signal is real. Poorly designed surfaces can communicate neglect and create operational error.

But visual quality can also launder weak substance.

OMNI must distinguish:

- **experienced trust**
  - understandable, coherent, humane interaction;

- **earned trust**
  - correct state, authority, custody, security, proof, and outcome.

Both matter. Neither substitutes for the other.

**Hard guardrail:**

> **A surface may help a user perceive trustworthy operation; it must never be used to compensate for operation that is not actually trustworthy.**

The reverse is also true: technically correct systems can still fail people through confusing, inaccessible, or dehumanizing presentation.

---

### 8. Abundant variants increase the need for explicit selection criteria

Stripe explored large numbers of:

- visual directions;
- waves;
- layouts;
- product-story structures;
- imagery;
- interaction patterns.

AI multiplies those possibilities further.

Abundant choice creates new failure modes:

- endless iteration;
- selection by executive taste alone;
- aesthetic novelty without user value;
- inability to explain why one option won;
- local optimization disconnected from the whole.

A design decision should therefore declare criteria such as:

- intended audience;
- communication objective;
- user comprehension;
- trust effect;
- accessibility;
- distinctiveness;
- coherence with the broader system;
- implementation and maintenance cost;
- expected lifespan;
- user-research evidence.

Taste remains necessary, especially for high-craft work, but it should operate inside a visible decision frame rather than as unexplained authority.

---

### 9. Generated imagery requires provenance and representational honesty

The source shows extensive human critique of AI-generated imagery:

- anatomical errors;
- implausible shadows;
- compositional artifacts;
- brand mismatch;
- lack of realism.

For OMNI, generated imagery and other synthetic media require additional controls:

- provenance;
- rights and licensing;
- disclosure where relevant;
- representational accuracy;
- demographic and cultural bias review;
- no synthetic patient testimonial without explicit labeling;
- no implication that a fictional scene is a documented care event;
- accessibility descriptions;
- approval for clinical or educational use.

A visually convincing image can create false evidentiary weight.

**Keeper line:**

> **Photorealism increases the burden of provenance because users may interpret visual plausibility as factual truth.**

---

### 10. Experience quality should be judged in the real environment

Stripe aims to prototype and test ideas in the form users will actually experience rather than judging isolated frames.

That matters because real behavior depends on:

- surrounding content;
- movement;
- performance;
- accessibility;
- responsive layout;
- reading order;
- state transitions;
- device;
- time of day;
- actual data;
- adjacent workflows.

OMNI should similarly avoid approving consequential experiences only through:

- static mockups;
- idealized fixture data;
- isolated component stories;
- happy-path demos.

Evaluation should include realistic state, degraded conditions, partial data, conflicting authority, accessibility, and cross-domain transitions.

**Sharpening:** prototype fidelity should rise with consequence and uncertainty.

---

## What not to import

- Beauty or polish treated as proof of reliability.
- Public claims allowed to outrun verified system capability.
- Progressive disclosure used to bury uncertainty, risk, cost, or unresolved ownership.
- Founder or executive taste treated as unquestionable product authority.
- AI-generated imagery treated as factual or rights-clear by default.
- “Seven out of ten instantly” becoming the accepted quality ceiling.
- Endless refinement justified by craft when real users need the capability now.
- User research on surface comprehension treated as proof of clinical or operational correctness.
- Personalized messaging generated without consent, fairness, and disclosure controls.
- Design systems becoming centralized authority over domain meaning.
- Product teams optimizing isolated components while nobody owns the composite journey.
- Engagement and visual delight prioritized over clarity during urgent or consequential care.

## Hard verdict

This source contributes meaningful architecture beyond visual design.

Its strongest insight is that abundant generation makes **coherent meaning, honest claims, minimum quality, and whole-journey stewardship** more—not less—important.

### Genuine architecture candidates

1. **`surface_claim_contract`**
   - links public and in-product claims to actual capabilities, owners, evidence, scope, freshness, and degradation behavior.

2. **`experience_coherence_review`**
   - recurring multidisciplinary review of end-to-end journeys across domain and organizational seams.

### Major sharpenings

1. **Minimum viable quality gate**
   - experimentation must clear a consequence-sensitive floor before real-user exposure.

2. **Governed progressive disclosure**
   - compress complexity without concealing authority-relevant truth.

3. **Agent-legible design systems**
   - approved generative constraints with governed extension rather than static component libraries.

4. **Baseline competence vs differentiated fitness**
   - AI-generated acceptability is the starting point, not the completion criterion.

5. **Real-environment experience verification**
   - judge consequential design in realistic composite conditions, not isolated mockups.

### Principal counterweights

1. Experienced trust and earned trust are distinct and both required.
2. A beautiful surface can conceal an untrustworthy system.
3. More variants do not create better judgment.
4. Design coherence must not become centralized control over domain truth.
5. Photorealistic synthetic media carries heightened provenance and truth risk.

### One-line read

**AI can make every individual screen competent and every variant cheap; OMNI’s differentiated responsibility is to ensure that the complete experience remains truthful, coherent, humane, and aligned with the real capabilities and consequences of the governed system beneath it.**

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

Like...  we have previously tapped into....  how do we enable these federations, or individual people, or bussiness woners to create their own sites... like....  WHAT IS A WEBSITE.. EXACTLY!!!    but we really have to imagine that as a entire elementor side of the app... like..   the admin or federation owner should be able to prompt and model their site... at some point...  that or we hand this portion off to 3rd party...  idk.... just htinking yea 

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-19` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Method note:** formalizes Knox Review 001 (`Signal 4.8/5 — strong Surface, Product Loop, Platform, trust, experience-coherence source`), verified against the §1 full timestamped transcript. The pasted Knox block carries a STALE header id (`EVSRC-2026-000297`) — **ignored** per run brief; canonical id/topic = filename `EVSRC-2026-000310`, the YC "Design Review" Stripe-homepage-redesign episode. This is the wave's strongest **Surface (P5) / Projection (P4) / Product-Loop** source; it introduces NO new domain (surfaces/projections own no canonical truth — `D0THES-DEC-033`). Its through-line: *when AI makes competent design + implementation cheap, the scarce capability becomes deciding what the system should MEAN, how that meaning is experienced as a whole, and which details are important enough not to accept at "good enough."* `build_status` grounded by run brief: repo has partial `disclosure-policy`/`intake-doc-routing`/`chart_ai_reviews` but NO surface-claim registry, no experience-coherence-review harness, no agent-legible design system — so clusters are `doctrine=AFFIRM/PARTIAL × build=absent/partial`. **Operator Review 002 is LOAD-BEARING** (Nick: "WHAT IS A WEBSITE… enable federations / business owners to model their own site… entire Elementor side of the app… or hand to 3rd party") — preserved as cluster K + a reread flag; it is §C + Surface-Map + product-future-watch pressure, NOT a build directive. PROPOSE-ONLY (`GRD-036`); nothing minted, no contract/thesis/registry/matrix edited. Anchors carry real transcript timestamps; `[Knox §X]` loci mark points Knox synthesized across the dialogue.

### Cluster table

| # | concept | OMNI meaning | homes | anchor | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| A | **A consequential public/in-product claim needs a contract to operating reality** (candidate `surface_claim_contract`) | Stripe treats the website as an implicit manifesto (who it serves · what it does · why · how much care · trust at scale); the danger is a surface telling a MORE coherent story than the system deserves. OMNI's future claims ("care team notified" · "medication ready" · "records connected" · "your information is private") must not live only in copy — each consequential claim should carry exact-claim · audience · underlying capability/domain owner · supporting evidence · scope+exclusions · freshness/last-verification · known degradation states · responsible owner · required disclosure when the capability is unavailable/partial. This is surface-to-substrate **truth alignment**, not brand governance | P5 Surface Map · P4 Projection Map · projection≠authority · one-owner-per-fact · REV-184 | "it's your manifesto whether you explicitly call it that or not" [5:30]; "'Your care team has been notified' must distinguish … accepted custody" [Knox §1] | PARTIAL / important sharpening × build=absent | investigate/spine | investigate (route) |
| B | **Progressive disclosure is authority-sensitive** (sharpening `governed_progressive_disclosure`) | Stripe's bento + modal pattern avoids flattening every product into one page: coherent top-level orientation → enough signal to decide relevance → deeper detail without losing location → route to full depth. Healthcare needs an authority-sensitive version: disclose by role · task · urgency · consent · domain relevance · cognitive load · consequence — but progressive disclosure must NOT hide active risk · unresolved obligations · uncertainty · consent state · contraindications · financial exposure · who owns the next action. The projection preserves what was summarized/omitted/why + whether more exists + whether omission is safe for the mission | P4 Projection Map (projection law) · Care · CNS | "give you enough of a sense … progressive disclosure" [10:23]; "Reduce visible complexity without erasing consequential truth" [Knox §2] | **AFFIRM** (projection may compress/reorganize, never silently upgrade/weaken/conceal authority-relevant state) × build=partial (`disclosure-policy`) | spine (projection law) | promote (sharpening) |
| C | **Minimum viable QUALITY gate, not minimum viability** (sharpening `minimum_viable_quality_gate`) | Katie rejects both perfection-that-never-ships and minimum-viability-that-damages-trust → an "MVQP." For OMNI this is a consequence-sensitive release floor before real patient/provider/operator/enterprise exposure across domain-correctness · safety · authority+consent · understandable-state · accessibility · performance · resilience · recovery · interaction coherence · uncertainty disclosure · support readiness · measurement plan; the threshold varies by consequence (a lightweight internal experiment may be rough; a patient-facing medication/consent/billing/continuity experience may not) | Build Entry Gate · OMNI Reactor (consequence floor) · Product Loop | "minimum viable quality product … MVQP" [39:12]; "you don't want to lose trust by experimenting … out in the world" [39:40] | **AFFIRM** (283 consequence→minimum control+proof floor) × build=absent | Build-OS/Reactor | promote (sharpening) |
| D | **AI raises the floor and increases pressure on the ceiling — the "gravitational pull to mediocrity"** (`baseline_competent` ≠ `differentiated_and_fit`) | AI generates a competent "seven out of ten" fast + many variants; the danger is that ease feels like completion. OMNI translation: *machine fluency increases the probability that an acceptable-looking LOCAL answer is mistaken for a RESOLVED system problem* — a polished note may lack clinical authority, a coherent workflow may orphan custody, a persuasive dashboard may use weak event semantics, a beautiful explanation may conceal uncertainty. Build-OS/Product-Loop reviews must distinguish `baseline_competent` from `differentiated_and_fit` (plausible? internally coherent? externally correct? fit for the human? aligned with the governing system? produces the intended consequence?) | Build-OS · Product Loop · REV-184 | "the gravitational pull is to mediocrity … so easy to accept good enough" [35:35]; "don't be wooed by … how easy that was" [34:46] | **AFFIRM** (295/296 "finished"≠LoC/tokens) × build=absent | Build-OS/spine | promote (sharpening) |
| E | **Design systems become generative constraint + governed-evolution surfaces** (sharpening: agent-legible design system) | Stripe expects builders to express intent/sketch while AI composes approved components — and to recognize when the intended experience needs an EXTENSION. An agent-legible design system encodes approved components · accessibility obligations · semantic roles · allowed states · domain-specific warnings · interaction/notification patterns · authority-sensitive visual treatment · patient/provider/operator distinctions · safe-extension rules · review requirements. The agent must NOT freely invent presentation for consent · clinical uncertainty · escalation · failed custody · payment obligation · safety risk; new components may be PROPOSED but require design+domain+accessibility+governance review by consequence | Build-OS · Agent Runtime · 285 certified-variation-envelope + 293 compiled-agent-manifest family | "it uses the components from our design system to piece that together" [33:49]; "make the safe and coherent path easy" [Knox §5] | PARTIAL × build=absent | Build-OS/investigate | investigate (route) |
| F | **Experience-coherence review across domain/org seams** (candidate `experience_coherence_review`; "walking the store") | Stripe requires people across disciplines (founders/engineers/PM/designers/data-science) to experience the product AS USERS — not just bug detection but seeing the COMPOSITE created by independently-focused teams (terminology drift · failed transitions · unclear responsibility · contradictory journeys · dead ends between org boundaries). Directly relevant to OMNI where a person traverses intake→scheduling→observation→clinical-memory→orders→fulfillment→messaging→payment→documents→follow-up→accountability. A recurring review selects high-value/high-risk end-to-end journeys, experiences them as different principals, crosses seams, captures dead-ends/contradictions/trust-breaks, assigns findings to the owning domain/seam, tracks red/yellow/green, verifies against the whole journey. **Does NOT create a new canonical truth store** — a multidisciplinary projection+review practice over existing domain evidence | P4/P5 Surface+Projection · Accountability Loop · Build-OS · CNS | "walking the store … see the forest through the trees" [41:32]; "the founders do it in front of the whole company … every Friday" [42:08] | PARTIAL / strong additive sharpening × build=absent | investigate/Accountability | investigate (route) |
| G | **Surface quality signals care but cannot SUBSTITUTE for proof** (experienced trust ≠ earned trust) | Motion/precision/custom-imagery/detail genuinely signal care, competence, reliability; poor surfaces communicate neglect and cause error. BUT visual quality can also LAUNDER weak substance. OMNI distinguishes **experienced trust** (understandable, coherent, humane interaction) from **earned trust** (correct state, authority, custody, security, proof, outcome). Both matter; neither substitutes for the other. A surface may help a user PERCEIVE trustworthy operation; it must NEVER compensate for operation that is not actually trustworthy — and a correct system can still fail people through confusing/inaccessible/dehumanizing presentation | REV-184 · Care · projection≠authority | "if you see the care that goes here … we also put that care behind the scenes" [12:15] | **AFFIRM** × build=absent | spine-guardrail | promote (guardrail) |
| H | **Abundant variants increase the need for explicit SELECTION criteria** | Stripe explored huge numbers of waves/layouts/story-structures/imagery/interactions; AI multiplies possibilities. New failure modes: endless iteration · selection by executive taste alone · aesthetic novelty without user value · inability to explain why one option won · local optimization disconnected from the whole. A design decision should declare audience · communication objective · comprehension · trust effect · accessibility · distinctiveness · coherence with the broader system · implementation/maintenance cost · expected lifespan · user-research evidence. Taste remains necessary but should operate inside a visible decision frame, not as unexplained authority | Build-OS · Product Loop · governance | "you could probably spend forever debating" [22:13]; "he's also exceptionally decisive and has very good taste" [22:52] | PARTIAL × build=absent | Build-OS | promote (watch) |
| I | **Generated imagery / synthetic media needs provenance + representational honesty** | Stripe shows extensive human critique of AI imagery (anatomical errors, implausible shadows, artifacts, brand mismatch). For OMNI, synthetic media needs provenance · rights/licensing · disclosure · representational accuracy · demographic/cultural bias review · NO synthetic patient testimonial without explicit labeling · NO implication a fictional scene is a documented care event · accessibility descriptions · approval for clinical/educational use. A visually convincing image creates false evidentiary weight — photorealism increases the burden of provenance | §B (synthetic media) · 294 `synthetic_evidence_class` · Evidence Plane · guardrail | "her arm isn't quite right … that shadow isn't exactly how it would be" [28:43]; "each pixel basically needs the same … attention" [29:01] | PARTIAL × build=absent | §B/guardrail | promote (guardrail) |
| J | **Judge consequential experience in the REAL environment, not isolated mockups** (prototype fidelity rises with consequence/uncertainty) | Stripe prototypes/tests ideas in the form users actually experience (surrounding content, movement, performance, accessibility, responsive layout, reading order, state transitions, device, real data, adjacent workflows). OMNI should avoid approving consequential experiences only via static mockups / idealized fixtures / isolated component stories / happy-path demos — evaluation should include realistic state, degraded conditions, partial data, conflicting authority, accessibility, and cross-domain transitions | Platform E&V · Build-OS · 288 eval · 294 OOD | "as quickly as possible to get it into state … the way a user would experience it" [23:47] | **AFFIRM** (288 realistic eval · 294 OOD) × build=absent | E&V | promote (sharpening) |
| K | **"What is a website?" — operator/federation-owned surface COMPOSITION as a governed capability** (operator Review 002; future-watch) | Operator note (Nick): enable federations / business owners to prompt-and-model their own site — "the entire Elementor side of the app," or hand it to a 3rd party. This is the surface-authoring seam: OMNI may need to let an operator/federation compose its own public + in-product surfaces from OMNI's governed components + claims — which multiplies cluster A (each operator-authored claim still needs a `surface_claim_contract` to that operator's real capability) and cluster E (operator-composed surfaces still bind to the agent-legible, review-gated design system). Governed-exchange + surface-composition pressure; §C-adjacent | §C (PAUSED — pressure only) · P5 Surface Map · product future-watch · Build-OS self-service | "WHAT IS A WEBSITE … enable these federations … to create their own sites" [Review 002, Nick] | PARTIAL / future-watch × build=absent | future-watch/§C | watch (pressure only) |

### Net-new primitive dispositions (EVERY Knox candidate dispositioned; net-new DOMAIN objects = 0)
Knox named 2 architecture candidates + 5 major sharpenings + several trust guardrails. Dedup vs cumulative baseline (projection≠authority · one-owner-per-fact · REV-184 · Build Entry Gate · 283 consequence-floor · 288 one-surface≠one-authority-envelope + realistic-eval · 294 `synthetic_evidence_class`/OOD · 285/293 compiler family · 295/296 "finished"≠LoC · `D0THES-DEC-033` surfaces-own-no-truth):
- **`surface_claim_contract`** → dedup-as-EXISTS: a **P5 Surface / P4 Projection** object binding a visible claim to its owning domain + evidence + scope + freshness + degradation; a specialization of **projection≠authority + one-owner-per-fact + REV-184** at the surface boundary (pairs 288 "one-surface ≠ one-authority-envelope"). Surfaces own no canonical truth (`D0THES-DEC-033`) → NOT a domain object → **route INVESTIGATE (Surface/Projection Map watch)**. *The strongest genuinely-new surface-plane pressure in the source.*
- **`experience_coherence_review`** → dedup-as-EXISTS: a multidisciplinary **projection + review PRACTICE** over existing domain evidence (explicitly NOT a new truth store); homes in Surface/Projection + Accountability Loop + Build-OS. NOT a domain object → **route INVESTIGATE (Surface/Projection + Accountability watch)**.
- **`minimum_viable_quality_gate`** → dedup-as-EXISTS: sharpening of **283 consequence→minimum-control+proof floor** + **Build Entry Gate** + Reactor consequence-calibration → **route INVESTIGATE (Build-OS/Reactor watch)**.
- **`governed_progressive_disclosure`** → dedup-as-EXISTS: sharpening of **P4 projection law** (compress/reorganize, never silently conceal authority-relevant state) → promote as projection-law sharpening (watch).
- **agent-legible design system** → dedup-as-EXISTS: composes with **285 `certified_variation_envelope` + 293 `compiled_agent_manifest`/`compile_time_policy_check`** (registry F1 compiler family) + generated-skill governance + Build-OS → **route INVESTIGATE (Build-OS/F1 watch)**.
- **`baseline_competent` vs `differentiated_and_fit`** → dedup-as-EXISTS: Build-OS/Product-Loop quality sharpening; pairs 295/296 ("finished" ≠ LoC/tokens) + gravitational-pull-to-mediocrity → sharpening (watch).
- **real-environment experience verification** → dedup-as-EXISTS: E&V sharpening (pairs 288 realistic eval + 294 OOD/degraded conditions) → sharpening (watch).
- **generated-imagery provenance** → dedup-as-EXISTS: §B synthetic-media + **294 `synthetic_evidence_class`** + Evidence Plane → guardrail candidate (below).
- **net-new DOMAIN objects: 0.** No "website domain," no "design-system domain," no "brand domain." Retired terms not re-minted (`EVRUN-000004 §0.5`); `D0OL-GRD-001..008` not re-minted as primitives.

### Counterweights / what-NOT-to-import (EVERY Knox caution PRESERVED or rejected-with-reason; NEVER inverted)
Knox's "What not to import" (12) + 5 principal counterweights — all preserved:
1. **Do NOT treat beauty/polish as proof of reliability.** [kept — G]
2. **Do NOT allow public claims to outrun verified system capability.** [kept — A]
3. **Do NOT use progressive disclosure to bury uncertainty, risk, cost, or unresolved ownership.** [kept — B, CARE]
4. **Do NOT treat founder/executive taste as unquestionable product authority.** [kept — H]
5. **Do NOT treat AI-generated imagery as factual or rights-clear by default.** [kept — I]
6. **Do NOT let "seven out of ten instantly" become the accepted quality ceiling.** [kept — D]
7. **Do NOT justify endless refinement by craft when real users need the capability now.** [kept — C; progress > perfection]
8. **Do NOT treat user-research on surface comprehension as proof of clinical or operational correctness.** [kept — G/J, CARE]
9. **Do NOT generate personalized messaging without consent, fairness, and disclosure controls.** [kept — I/B, CARE]
10. **Do NOT let design systems become centralized authority over domain meaning.** [kept — E/F]
11. **Do NOT let product teams optimize isolated components while nobody owns the composite journey.** [kept — F]
12. **Do NOT prioritize engagement/visual delight over clarity during urgent or consequential care.** [kept — B/G, CARE]
- **Principal counterweights (preserved):** experienced trust ≠ earned trust (both required) · a beautiful surface can conceal an untrustworthy system · more variants do not create better judgment · design coherence must not become centralized control over domain truth · photorealistic synthetic media carries heightened provenance/truth risk.
- **REJECT-as-OMNI-doctrine (mechanism kept, claim not canonized — `GRD-043`):** "walking the store" as a canonical truth-store (it is a review practice, not a domain) · Stripe's design language / bento / squeezy-boy / GDP-counter as OMNI vocabulary (import the mechanism, not the aesthetics) · "AI gets us to good almost instantly and almost for free" as a quality claim (it is a floor-raiser, not a completion signal) · executive-taste-as-decisive as an OMNI governance model. (Recorded, not silently dropped.)

### Care implications (NOT swept by "0 net-new")
- **Surface-claim honesty is a patient-safety concern (cluster A):** "your care team has been notified," "your medication is ready," "your records are connected," "your information is private" must each map to authoritative state (message generation ≠ delivery ≠ acknowledgment ≠ accepted custody; fulfillment authority; consent/visibility/retention/access controls) — a surface may make only claims the owning domain can currently prove.
- **Progressive disclosure must never hide consequential truth in care (cluster B):** active risk, unresolved obligations, uncertainty, consent state, contraindications, financial exposure, and who owns the next action may be compressed/reorganized but never silently concealed — this is the projection law applied to a patient/provider surface.
- **Experienced trust ≠ earned trust (cluster G):** a humane, coherent patient surface must not be used to compensate for care that is not actually coordinated/authorized/safe; and a technically-correct system can still harm through confusing or dehumanizing presentation.
- **MVQP is the care release floor (cluster C):** patient-facing medication/consent/billing/continuity experiences may not ship at "seven out of ten"; the quality floor scales with consequence.
- **Synthetic media in care carries evidentiary risk (cluster I):** no synthetic patient testimonial without labeling; no fictional scene presented as a documented care event; photorealism raises the provenance burden.

### Candidate guardrails → `08` (gated, `user_knox_required`; dedup noted)
- **G-cand-1:** *A consequential public/in-product claim must bind to an owning domain + evidence + scope + freshness + degradation state; a surface may make only claims the underlying owners can currently prove* [dedup vs projection≠authority + one-owner-per-fact + REV-184].
- **G-cand-2:** *Progressive disclosure may reduce visible complexity but must never conceal authority-relevant truth (active risk · unresolved obligations · uncertainty · consent state · contraindications · financial exposure · next-action owner)* [dedup vs projection law].
- **G-cand-3:** *Consequential experiences must clear a consequence-sensitive minimum-viable-QUALITY floor before real-user exposure; MVP ≠ MVQP* [dedup vs 283 consequence-floor + Build Entry Gate].
- **G-cand-4:** *Machine fluency raises the probability that an acceptable-looking local answer is mistaken for a resolved system problem; `baseline_competent` is the starting point, not the completion criterion (`differentiated_and_fit`)* [dedup vs 295/296 "finished"≠LoC].
- **G-cand-5:** *An agent must not invent new presentation for consent · clinical uncertainty · escalation · failed custody · payment obligation · safety risk; new components require design+domain+accessibility+governance review by consequence* [dedup vs 285/293 compiler family].
- **G-cand-6:** *A beautiful/coherent surface may help a user PERCEIVE trustworthy operation but must never be used to COMPENSATE for operation that is not actually trustworthy (experienced trust ≠ earned trust)* [dedup vs REV-184].
- **G-cand-7:** *Photorealistic synthetic media carries a heightened provenance + representational-honesty burden; no synthetic patient testimonial and no fictional-scene-as-documented-care-event without explicit labeling* [dedup vs 294 `synthetic_evidence_class`].
- **G-cand-8:** *Someone must own the composite cross-domain journey; locally excellent components can still produce a broken/contradictory whole* [experience-coherence-review; dedup vs one-owner-per-fact at the journey/seam level].

### Reread flags
- Clusters A/F (`surface_claim_contract`, `experience_coherence_review`) → reopen with **P5 Surface Map + P4 Projection Map** authoring (the two genuinely-new surface-plane candidates in the wave); pair 288 one-surface≠one-authority-envelope + registry conv.1/2.
- **Operator Review 002 (cluster K — "what is a website" / federation-owned surface composition)** → reopen with **§C + Surface Map + product future-watch + Build-OS self-service**; sibling to 292's load-bearing operator note (membrane-not-asset) and Nick's prior "what is a website" thread. §C stays PAUSED (pressure input only).
- Clusters B/I (`governed_progressive_disclosure` + generated-imagery provenance) → Care surface + §B synthetic-media + 294 `synthetic_evidence_class`.
- Cluster E (agent-legible design system) → registry F1 compiler family (285 `certified_variation_envelope` + 293 `compiled_agent_manifest`/`compile_time_policy_check`) + Build-OS.
- This is the wave's strongest SURFACE/PROJECTION-plane source — DEPTH INPUT to the Surface/Projection maps, NOT license to build surface authoring / a design-system engine pre-spine.

### One-line hard read
`full_semantic`, 4.8/5, **0 net-new domain objects + 2 INVESTIGATE surface/projection candidates (`surface_claim_contract`, `experience_coherence_review`) + 5 sharpenings (MVQP · governed progressive disclosure · agent-legible design system · baseline-competent≠differentiated-fit · real-environment verification)** — AI can make every individual screen competent and every variant cheap, so OMNI's differentiated responsibility is to ensure the COMPLETE experience stays **truthful, coherent, humane, and aligned with the real capabilities and consequences of the governed system beneath it**: claims bind to owners and evidence, disclosure compresses without concealing, quality clears a consequence floor, and someone owns the whole journey.

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `P5 Surface Map (surface_claim_contract · experience_coherence_review) · P4 Projection Map (governed progressive disclosure) · Build-OS / Build Entry Gate (MVQP · agent-legible design system) · OMNI Reactor (consequence floor) · Product Loop · §B (synthetic media) · REV-184 (experienced≠earned trust) · Care (surface-claim honesty) · §C (operator/federation surface composition — PAUSED, pressure only)` · promotion: `watch` (8 guardrail candidates + 2 INVESTIGATE surface candidates + 5 sharpenings → `08`; net-new domain objects 0)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, third batch; `EVRUN-2026-000011`).
- `2026-07-19` — PROCESSED (Review 003): slug firmed (SUGGESTION only — NOT renamed: `…_yc-design-review-stripe-website-katie-dill`); §0/§0.1 filled from pasted Knox Review 001 metadata (no screenshot → `inferred`; stale Knox header id `EVSRC-2026-000297` IGNORED, canonical id = filename 310, topic verified from §1 transcript = YC "Design Review" Stripe homepage redesign); §3 Review 003 written (11 clusters incl. operator Review 002 as cluster K, **0 net-new domain objects + 2 INVESTIGATE surface candidates** `surface_claim_contract` / `experience_coherence_review` + 5 sharpenings, 12+5 counterweights preserved, 8 guardrail candidates → 08); §4 filled. `raw_dropped → analyzed`; awaiting 2nd-reader fidelity sign-off.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

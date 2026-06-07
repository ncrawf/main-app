# EVSRC-2026-000050 — ElevenLabs' Mati Staniszewski: How Voice Becomes the Interface for AI

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox read captured; metadata normalized; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> §0 + §0.1 are filled. **You: paste 1 (transcript → §1) + 2 (Knox → Review 001), then Cmd+S.**

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-06)*
- evsrc_id: `EVSRC-2026-000050`  ·  filename: `EVSRC-2026-000050_elevenlabs-staniszewski-voice-interface.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=ZNzYN2jyVTU`
- source_title: `ElevenLabs' Mati Staniszewski: How Voice Becomes the Interface for AI`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  published_at: `2026-05-06`  ·  views_at_capture: `50,315`
- captured_at: `2026-06-06`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `interview`  ·  source_reliability_context: `practitioner / founder-operator (voice-AI frontier)`  ·  topic_tags_light: `[voice_AI, agent_interface, audio_models, agent_to_agent, agentic_AI]`

## §0.1 — People / authorship / authority context  *(filled from screenshot description)*
- primary speaker(s):
  - name: `Mati Staniszewski` · role_in_source: `interviewee` · affiliation_at_publication: `ElevenLabs (co-founder & CEO)` · speaker_type: `founder / operator (voice/audio AI)` · authority_context: `primary-source operator scaling a frontier audio-AI company (~400 people, $400M+ rev); high practitioner authority on voice-as-interface, audio model stack, agent-to-agent voice; not clinical, not a general technical standard` · identity_confidence: `high_from_screenshot`
  - name: `Andrew Reed` · role_in_source: `interviewer / host` · affiliation_at_publication: `Sequoia Capital (partner)` · speaker_type: `investor` · authority_context: `framing / market lens` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `Andrew Reed`  ·  event_context: `Sequoia AI Ascent 2026`  ·  perspective / conflict notes: `ElevenLabs CEO — frames voice as the primary AI interface (own thesis/business); operator claims captured, routed via evidence, not taken as settled fact.`

> Authority is descriptive, not worship (`GRD-039`): an ElevenLabs co-founder = high relevance on voice/audio AI; claims (voice as primary interface, emotional-intelligence frontier, agent-to-agent voice) still route through evidence → interpretation → gated promotion.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] Knox take labeled `captured_interpretation_nonbinding` · [x] EVRUN needed? `yes` · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️



Search in video
Introduction
0:02
So I love uh line charts and bar graphs
0:05
as much as the next guy probably more.
0:08
Uh the story of 11 labs is also
0:10
interesting from a human perspective
0:12
which is you started a company with a
0:14
childhood friend. So maybe take us back
0:16
to 2022 or earlier and just tell the the
0:19
human side of the 11 Labs story to start
0:22
the I have the I have the most luck in
0:25
the story of 11 Labs because well it
0:26
started in 2022. It felt feels like it
0:29
started 17 years ago when I met my my
0:31
co-founder P. Uh all the names in Polish
0:34
are complicated luckily for for for us
0:36
but we we met in high school became best
0:39
friends took all the same classes
0:40
together and then through the years did
0:42
everything together. So we travel
0:43
together, study together, work together,
0:45
and time is on our side. We are still
0:47
best friends. It's working. It's working
0:48
out. Um, and part of what started 11
Poland Dubbing Problem
0:52
Labs is is is inspiration from where we
0:54
are both from. We are both from Poland,
0:57
uh, suburbs of Warso, and there's a very
0:59
peculiar thing in Poland. If you if you
1:02
watch any foreign movie in Polish
1:03
language, all the voices, whether that's
1:06
a male voice or a female voice, get
1:08
narrated with one single character. So
1:11
as you can imagine pretty terrible
1:12
experience. You have literally one voice
1:15
narrating everything. Um it usually also
1:18
on purpose is kept in monotone. So you
1:20
are meant to interpret your own emotions
1:22
for that content. And uh while we grew
1:25
up with this this is still happening
1:26
today for majority of content. And that
1:28
kind of opened our eyes into one of the
1:31
clear things across the domain across
1:33
audio domain um across the future will
1:36
be this ability for everybody to speak
1:38
any language with the same emotion the
1:40
same inonation. Um and we started diving
1:42
deeper into that problem and realized
1:44
the problem of audio exists in so many
1:46
other domains too. Whether that's
1:47
narrating the content around us, um
1:50
whether that's the books not being
1:52
available in audio form, whether that's
1:55
the news articles that we could read,
1:56
whether that's that language barrier or
1:58
in the future as we heard in the
1:59
previous conversations, the future where
2:01
humanoids, the robots are around us, the
2:03
voice will be the primary interface to a
2:04
lot of that technology and uh and
2:07
something we would love to fix and
2:08
solve.
2:09
Excellent. Um and 11 Labs builds
Why Audio Was the Bet
2:12
frontier models for audio. I think
2:15
there's a paradigm now where to build a
2:17
frontier model you have to start with
2:19
hundreds of billions or billions of
2:21
dollars and then figure out the rest
2:23
later. 11 Labs did not take that path.
2:26
May you talk a little bit about your
2:28
approach towards building this company
2:30
why you had this hasn't been replicated
2:32
is that even possible in 2026
2:35
etc. Yeah, that goes uh I think that
2:37
continues that great lack and timing
2:40
because we started in 2022 for those of
2:42
you uh working in the domain at the time
2:44
that that was year of uh [snorts] crypto
2:47
and metaverse. Nobody was still working
2:49
on the AI side. Um even further people
2:53
were starting to work of course on the
2:55
text models on the visual models but
2:57
audio as a domain was still considered a
2:59
big niche. There's so few researchers in
3:01
the space working on on that work. So
3:04
for us that was uh a good part of
3:06
picking that domain where a we were
3:08
excited about where that future is
3:10
called. We felt the people around just
3:12
didn't realize the value of that domain
3:13
but three the requirements of what you
3:16
needed to solve were very different. The
3:17
audio models were smaller so you don't
3:19
need as much compute as you need for
3:21
some of the other sister domains. Um the
3:23
data needs are big. Um, but while
3:26
there's a lot of audio data, we knew
3:28
that the thing to actually get that
3:29
audio working, you will need to figure
3:31
out how to transcribe a lot of that data
3:33
and annotate a lot of that data, which
3:34
we knew we can do. And then ultimately,
3:36
it all boiled down to architectural side
3:39
of can we can we solve that part uh in a
3:42
good way. And here my co-founder is um
3:45
one of the smartest people I know um and
3:47
and a great researcher and has been able
3:49
to assemble some of the best people in
3:51
audio to to help us. And we took a
Remote Team and Early Monetization
3:53
slightly untraditional approach at the
3:54
time. We started uh we started in
3:57
London. We had a lot of people between
3:58
London and Warso and started a company
4:01
in remote completely remote way. So we
4:03
wanted to hire the best researchers
4:05
wherever they were. Uh we were going for
4:07
the classic GitHub scraping and uh and
4:09
and trying to reach people based on
4:11
their work instead of based on their
4:13
presence. And based on that work, we
4:15
would reach out to those people. Um we
4:17
would always share our samples and try
4:19
to get them to join the team. And that's
4:20
how we assembled the first the first set
4:22
of of of people who we think are some of
4:24
the best uh researchers in that audio
4:26
domain. And through the years they still
4:28
help us crank a lot of those models in
4:30
into production. Um then we launched the
4:34
product. I think the slightly different
4:35
approach we took was monetizing very
4:37
quickly. So trying to get some of the
4:40
revenue stream back so we can fund a lot
4:42
of the work in the models. We try to
4:45
stay uh stay healthy on the margins so
4:50
we can continue investing with the
4:51
assumption that it's better for us to
4:54
figure out that stream and be be able to
4:55
be independent in that development. Um
4:58
but then as the ambitions grew, we knew
4:59
that we needed to train models. So we of
5:01
course brought a lot of money externally
5:03
as well. And I think like projecting to
5:05
today, one thing that's clear for us is
5:08
there's still so many of those niches
5:10
that people don't tackle that um that
5:12
you can start with and then step by step
5:15
start opening them them up.
Building the Audio Model Stack
5:17
I think a lot of customers see 11 Labs
5:20
through their narrow needs, right? Um
5:23
maybe take a zoomed out view like what
5:26
is the suite of models that 11 Labs
5:28
works on? How do you prioritize them?
5:30
How do you organize R&D etc.
5:32
Yeah. So we started um we started with
5:35
the first texttospech model. So the
5:36
model that could finally understand the
5:38
context of what's being written and
5:39
based on that con context understanding
5:42
get the right um emotion the right
5:44
inonation from text. So it was a happy
5:46
sentence you get that happiness out. If
5:48
it's a uh it's a dialogue it can
5:50
pronounce the dialogue out and then
5:52
continuously started adding that. So it
5:53
started with the problem of of breaking
5:55
down language barriers. Um the things
5:59
you need to solve dubbing is
6:02
transcription. So understanding then the
6:04
the translation and then text to speech.
6:06
So you first saw text to speech then we
6:08
knew we needed to added the other
6:10
component which is speech to text and
6:11
being able to transcribe content in a in
6:13
a great way. Then how we combine those
6:15
models together. So that's kind of was
6:17
the first three models in the first
6:19
first couple of years. And then of
6:20
course the other thing started happening
6:22
across the space which is that a lot of
6:24
the reasoning models started becoming
6:26
quick enough and smart enough at the
6:27
same time where you could imagine those
6:29
interactive experiences being possible
6:31
and that's where we started launching
6:32
our um more of the real-time streaming
6:35
models across audio and then combining
6:37
those into conversational experiences.
6:39
So added effectively all the stack all
6:42
the turn taking and orchestration to
6:44
create a voice engine for a voice for a
6:46
voice agent. Um and then on the other
6:49
side as we realized that the
6:50
emotionality is something we can solve
6:52
uh we added some of the hardest modality
6:55
in in in audio which is music and being
6:57
able to produce music. So today we span
6:59
entirety of the research of audio where
7:01
it's texttospech speech to text um
7:03
combining those models together in both
7:06
localization with dubbing with uh
7:08
orchestration with voice a voice engine
7:10
and then uh and then being able to do
7:12
that across music as well. And what's
7:14
the um all those things and all that uh
Early Wow Moments
7:17
interesting development work? Uh was
7:19
there any oh wow moment in terms of what
7:22
these products are capable of that you
7:23
can you can remember?
7:25
You know there's so many and it's a kind
7:26
of the bar changes for all of us. The
7:28
first moment for us uh uh was
7:31
well first moment for us they always use
7:32
my voice as a testing voice because has
7:34
this weird accent and uh and the first
7:37
time was like when when we could
7:38
replicate my voice based on a good
7:41
sample. was like a first wow moment to
7:42
to myself and you always go through this
7:44
moment like this is not how my voice
7:46
sounds like and then you listen to
7:47
yourself side by side and it's like
7:49
definitely how it sounds like.
7:51
Uh uh unfortunately uh then the the
7:55
second moment was where we first got it
7:57
to laugh and people were like okay this
7:59
is actually the thing that that makes
8:01
the the whole experience more human the
8:04
laughter the pauses thems
8:10
uh that was the wellment for us because
8:11
we made it to the top of hacker news
8:13
with the first AI that can laugh uh uh
8:15
model which was a very proud moment for
8:17
us one of the I feel like pinnacles of
8:20
the voice performance ments Matthew
8:22
McConna giving his newsletter and this
8:25
iconic lines in in in Spanish and
8:27
Portuguese where for the first time his
8:29
family who speaks that language could
8:30
hear him speak those languages too. Um
8:33
but for more recent pieces the two two
8:36
ones that we are excited about bringing
8:37
to production I think the first one is
8:41
uh finally figuring out the emotional
8:43
intelligent in that interactive
8:45
experience. So in the voice agent
8:48
experience where it doesn't only get the
8:50
right uh inonation emotion but can
8:52
understand the other side. So if
8:54
somebody is stressed it gets and
8:56
delivers that uh that that suffing
8:58
reassuring emotion. If someone is
9:01
excited maybe it matches that. If
9:02
someone speaks slowly it makes sure to
9:04
slow down. And that emotional
9:06
intelligence is something that we are
9:07
finally seeing internally a path to
9:10
solving which will be just a a a
9:12
continuous step change to to what's
9:14
possible. And then the second one uh
9:17
which will apply there but also apply
9:19
into general audio space is audio
9:22
general intelligence where you can
9:23
combine audio models together in one
9:25
stream. So you could theoretically have
9:27
a model that narrates then pauses and
9:30
let's say starts singing with that same
9:32
continuous voice and that's something
9:34
that's extremely hard to combine today
9:36
and and something that would be would be
9:38
possible I think very very soon
9:40
and voice you mentioned you know voice
9:42
agents and it seems like everybody is at
9:44
least on the customer side everyone's
9:46
buying a voice agent um and I think
9:48
intuitively you think customer support
9:51
um you know the old phone tree
9:52
replacement uh what's actually going on
9:55
in the of voice agents and what do you
9:57
think are are the most interesting
9:58
overlooked opportunities spots where
10:00
startup founders should focus?
10:03
Yeah, the of course the customer support
10:05
is probably the one that everybody heard
10:06
and and knows about very very well. Um I
10:09
think the second thing and the second
10:10
thread we are seeing is increasing shift
10:12
to revenue generating opportunities
Voice Agents Beyond Support
10:14
where voice agents can act in sales
10:16
whether it's inbound or outbound sales
10:18
of of sales. It doesn't replace the
10:20
entire experience but takes an amplified
10:22
part of that experience. Um maybe a good
10:24
example is Deliveroo where Deliveroo
10:27
will have voice agents that contact the
10:29
restaurants to capture their opening
10:32
times and based on their opting times
10:33
they can update the riders and drivers
10:35
and of course the people ordering on
10:37
when to get to to that network all the
10:39
way through to the inbound sales where
10:43
increasingly people that's a good
10:44
example of Deutsche Telecom will be
10:46
contacting to inquire about the service
10:49
inquire to buy a a a product and instead
10:52
of going for the drop down instead of
10:54
going through the form you can speak
10:55
with the voice agent to leave that
10:56
information. Uh we do it ourselves too.
10:58
So we have a good metrics of an
11:00
understanding of what's happening there.
11:02
One of course so much simpler and
11:05
quicker to go through instead of going
11:07
through that form. But the second thing
11:08
that started happening in that inbound
11:10
sales flow is we uh we had a lot more
11:14
information that people started leaving
11:15
because they would speak about the use
11:16
cases they're coming with but then where
11:18
it's not working where it's working some
11:20
of the other use cases that they are
11:21
evaluating which we can combine and then
11:23
just deliver such a much better
11:24
experience afterwards. On the overlooked
11:27
side, uh I think my favorite example
11:31
there's the citizen support, education
11:33
and healthcare will completely change on
11:35
the citizen support like all of us would
11:38
um would benefit from just generally
11:40
better uh government access whether
11:43
that's understanding how to fill in the
11:45
taxes that I think many of you went
11:46
through earlier this this month uh all
11:49
the way through to just learning how
11:51
what is the policy for travel abroad and
11:53
and and and how that might affect the
11:56
the space. We recently seen that work
11:58
deployed in government of Ukraine who we
12:00
think is like one of the most advanced
12:01
governments on that front. Um we
12:03
traveled to Ukraine uh uh working with
12:06
their team and what they are trying to
12:07
solve is they they have a a government
12:10
app which every citizen can access and
12:12
get information about what's happening.
12:14
But given the war, given the the the
12:16
frontline and lack of that access, they
12:18
wanted to figure out a new channel for
12:20
people to be able to call in and get
12:22
that information. So they created voice
12:24
agent effectively where you can where
12:26
you can call in and get the information
12:29
about what's happening on the front
12:30
line. You can get education help and
12:32
some of the lectures delivered to your
12:34
to your kids all the way through to
12:37
proactive engagement about uh about
12:39
staying safe and staying staying out
12:41
there. And maybe last example on
12:43
education front and that's probably my
12:44
favorite one as I think about that
12:45
changing. It's it's just how incredible
12:48
would it be to have a uh someone that is
12:51
an incredible teacher available 24/7
12:53
where you can ask him questions whether
12:55
it's Karpati all the way through to
12:56
Richard Feainman and uh and you can
12:59
learn physics with them on the
13:00
headphones while you are teaching that
13:02
subject or learning that subject and um
13:04
and that's something that we are seeing
13:06
pockets of like a great example is
13:08
masterclass where masterclass of course
13:10
collaborates with incredible teachers to
13:12
deliver static lectures but recently
13:15
they launched an interactive version of
13:16
that. Uh so for I don't know if that
13:19
will be a good reference for for this
13:21
this audience but we uh we recently
13:23
worked with them on bringing Gordon
13:25
Ramsey that can teach you cooking uh so
13:28
while you're in the kitchen he can shout
13:29
at you effectively uh to get to get
13:32
better or maybe a better one there's a
13:34
Chris boss where you can of course learn
13:35
negotiation but you can learn by
13:38
negotiating with Chris live on the phone
13:41
to to to to get better which I thought
13:43
was a phenomenal subject
13:45
having negotiated against Marti a number
13:47
of times around financing rounds. I
13:48
understand now
13:49
I think it helps you to say this but I
13:51
think [laughter] it's the opposite
13:52
opposite is true.
13:53
Um uh I ask more questions. I want to
13:56
save time for the audience as well. Um
13:58
maybe one as as Constantine mentioned
14:00
more than 100 million of net new era are
14:02
in Q1. Obviously the business is going
14:04
very well. Um and you're sort of
14:06
pioneering the startup founder building
14:08
a foundation model applications. um any
14:11
counterintuitive lessons about building
14:13
a company in this era that for the
14:15
founders in the audience they might want
14:16
to take home with them.
14:19
So we are just for reference we are uh
14:22
uh just over 400 people over 400 million
14:25
in revenue uh but still keep the teams
Operating Lessons at Scale
14:27
extremely small. So it's it's like rough
14:30
arbitrary a little bit cap is is less
14:32
than 10 people is for each of the the
14:35
research product even the the go to
14:37
market ops talent teams are all smaller
14:39
than that size um most of people will
14:42
have 10 direct reports or so it keeps
14:44
relatively flat and allows us to move
14:46
move a little bit quicker one thing that
14:48
we've done which is in this model and
14:49
very surprisingly this is very similar
14:51
model that we've seen actually with the
14:52
government of Ukraine each of the teams
14:55
even the teams that aren't uh technical
14:58
teams will have engineers within them.
15:00
So our people team, our go to market
15:02
team, our uh legal team will have an
15:04
engineer in that team that helps to
15:07
build of course automation upscale up
15:09
level the the rest of the people and
15:11
recently that really helped because as
15:13
I'm sure many of you are going through
15:14
everybody will be vip coding and coding
15:17
a lot of the the help even if they are
15:19
not technical. So now that kind of
15:21
shifted the responsib not not
15:24
responsibility but shifted the
15:25
requirement of how good the review needs
15:27
to be for a lot of that work because
15:28
security infrastructure uh implications
15:31
you will want to make sure that the
15:32
output is right. Um and I think on the
15:34
engineering side you can put that
15:35
expectation on the non-engineering side
15:37
the the ability to do that is is
15:40
relatively hard. So that technical
15:42
resource in those teams helped us a lot
15:43
to to figure this this out. And um and
15:46
in the general there's just so many
15:47
incredible work you can do by having
15:49
that whether that's the scraping on the
15:52
hiring and recruiting front and
15:53
analyzing what worked in the past to
15:54
improve in the future whether that's uh
15:57
uh uh uh upsking the legal team on how
15:59
to use those tools and then figuring out
16:02
ways of uh we recently introduced this
16:04
scoring system. uh for those on the go
16:06
to market on like sales side you
16:08
frequently will end up in this
16:09
negotiation with your sales team of can
16:11
I give uh indemnity provisions what's
16:14
the liability cap can I give the set of
16:16
clauses and then you kind of need to
16:18
draw the line of how many things you
16:19
give and I ended up being in so many of
16:22
those conversations that we gave already
16:23
a lot or we didn't so now we introduced
16:25
the scoring system that you can give per
16:28
per size of the customer you can just
16:30
give a few of those points out and in um
16:33
which just made it so much easier and Of
16:35
course that's fully automated now with
16:36
with with how we work across that team.
16:38
So that was one of unintuitive small
16:41
teams bringing technical talent in the
16:43
nontechnical teams uh keeping relatively
16:46
flat. We also have no titles which
16:48
allows us uh to to to bring people and
16:51
and really optimize for impact that they
16:53
are having and then you can grow as
16:54
quickly as as as as you want. The tenure
16:57
will not define this uh and many more.
17:00
So, we'll see. It's four years old
17:01
company, so we'll see if that helps.
17:04
Any questions?
17:07
Oh, no. Okay, Sonia,
17:10
are you seeing people deploy voice
17:12
agents to actually negotiate on their
17:14
behalf? And then when you are you
17:17
starting to see agents actually
17:18
negotiate with agents? Um, and sorry, I
17:21
I do three-part questions. uh when that
17:24
when that world happens, do you think
17:26
the agents are actually talking to each
17:28
other the way that humans talk to
17:30
communicate and negotiate or do you
17:31
think it's beep boop boop? Do you think
17:33
it's you know it's all done
17:34
instantaneously like how how's how's
17:35
that world going to look like?
17:37
So one early inklings of that we haven't
17:40
seen any truly successful on the
17:41
negotiation front. It was like more you
Audience Q&A Future of Voice
17:43
know kind of order taking what's the
17:44
price can we capture that and then kind
17:46
of goes back to the team. So not real
17:48
negotiation but there's uh there's few
17:50
startups that we see especially on any
17:52
any like organizational shifts of can I
17:55
organize this event calling calling a
17:58
lot of places getting the price and then
17:59
calling again with like our budget so
18:01
that is happening and I think this will
18:03
shift I think emotional intelligence
18:05
will like this is the big part that will
18:07
start being important in a lot of that
18:09
work where it's not only the content
18:10
that matters but how you deliver when
18:12
you pause uh uh that work and then maybe
18:15
the extreme version of that which agents
18:17
are uh are not like most of the people
18:20
wouldn't do it and and they are not good
18:22
at that is today you will see a lot of
18:24
interruptability built in where human
18:26
can interrupt the agent but with
18:28
negotiation you also want the opposite
18:29
where agent will interrupt the human
18:31
kind of the extreme version of that on
18:33
the second part on the agent to agent
18:35
part uh uh some of you might have seen
18:38
this uh that we did a hackathon over a
18:41
year and a half ago and that was exactly
18:42
the case where agent was speaking with
18:44
another agent they detected that they
18:47
both agents and they swapped over to the
18:49
to a different language and also get
18:51
more of a a more efficient transmitter
18:54
of information than just the the classic
18:57
um um spoken word and uh I think this
19:00
will happen I 100% like the the the big
19:04
question will it be really voice will it
19:06
be other transmission of information and
19:08
depends truly on what the infrastructure
19:11
is built for and I think this will
19:12
define that that experience and
19:19
It's here got a catch box.
19:21
Hey, [snorts]
19:22
um curious how you're thinking about the
19:25
need for voice in a future where agents
19:27
do more and more of the work. So
19:29
basically what are the kind of use cases
19:31
maybe where human conversation I think
19:33
it's more of a followup to that last
19:35
question
19:36
like first
19:38
you all of us will have so many
19:40
different devices around us and step
19:43
from that you will have robots around us
19:45
so of course voice will be such a
19:46
important interface to to instruct and
19:49
and be able to interact with those those
19:51
those those devices in many ways I feel
19:53
like the you know we see a lot of
19:55
developments of of intelligence but then
19:56
the the real bottleneck of the future
19:58
will be how you communicate with that
19:59
intelligence and I have voice and visual
20:02
part will will be a big unlock to be
20:04
able to actually get the most of that
20:05
intelligence value in those settings
20:07
which um which which which isn't um yet
20:10
possible. Uh but on the flip side it's
20:13
it's yet the value of the humanto human
20:15
interaction will only increase. So like
20:18
the the whether that's the events like
20:20
this one, whether that's events with
20:22
your favorite artist uh will will
20:24
increase in value um with that ability
20:28
of having voice all all around you.
20:31
But the trust will be such a big part
20:33
and something we optimize for like in
20:35
between the agent and human of you know
20:36
in the in the future where all of you
20:38
will all of us will have a voice agent
20:40
for example to call and book a
20:41
restaurant or um give information to a
20:44
healthcare appointment. Um all of that
20:47
will require such a high degree of trust
20:48
that this is you and and authenticated
20:51
you. So there'll be like a level of
20:53
encoding and decoding for real then
20:54
encoding decoding for watermarked opted
20:58
in human and then by default everything
21:00
else will be uh fake which is kind of
21:02
the opposite of how it is today. You
21:03
detect for AI but it will detect for
21:06
real authenticated AI in the future and
21:08
assume it's fake.
21:12
Yeah, if you could pass it. Thank you.
21:17
Uh Andre spoke earlier about jagged
21:19
intelligence. Do you see similar odd
21:22
places in audio where models are good
21:24
and a bad that you might not expect? And
21:25
yeah, what are they?
21:29
The um there's still so much on the on
21:32
the on the bad side. I think the you
21:35
know like we spoke a little bit about
21:36
where we see the voice agents working.
21:37
So like this combination of the models
21:39
together um and support settings works
21:42
really well works reliably in early
21:45
sales starts working but like the moment
21:47
you start swapping to a true emotional
21:49
interaction not yet working it's um it
21:52
doesn't get the emotion that that well
21:54
it's slightly too slow. Uh so that is
21:57
still like I think a big step change
21:59
that should work. Um same will apply on
22:02
in a very different domain on on the
22:04
music side. I think in the music side
22:06
you uh you can get you can get good
22:10
production music. You cannot get top
22:12
charts music even with artist input. Um
22:14
I think this will change over the next
22:16
over the next year or two.
22:17
Can I follow up?
22:18
Of course.
22:18
Andre's take was that the reason for
22:20
that was that the labs were basically
22:22
training for the stuff that had economic
22:24
value where you're training your models.
22:26
Is that true of you? Are you basically
22:28
training for the things that make the
22:29
most money or is it that there are some
22:31
challenges that are genuinely harder
22:33
than others?
22:35
the you know we we try to train the
22:37
models build the product and the
22:38
ecosystem that will derive of course the
22:40
biggest impact for for for for all our
22:43
customers all users which should
22:45
correlate of course with the revenue in
22:47
the long term so like that long-term
22:49
perspective it's it's going to be like
22:50
minimal in the next few years so not
22:52
next year um so frequently we will train
22:55
the models that might not provide that
22:57
value in the short term or even step
22:59
before we'll like spend so much time
23:01
labeling the data not only the what of
23:03
audio but also how of audio like what
23:05
emotions did I use um what is my voice
23:08
described as what is this music
23:10
described us so we assembled a team of
23:12
now thousand plus people that have been
23:14
voice coaches musicians artists before
23:16
that can help us annotate that behind
23:17
the scenes and that will not provide
23:19
value in the next 6 to 12 months but we
23:22
think well in the next 20 12 to 24 um
23:24
and then you of course need to collect
23:26
that data which frequently just isn't
23:27
that accessible as well
23:31
last one and then we'll go to
23:37
Hey, you hear me? Thanks. Big fan of
23:40
yours in 11 Labs.
23:42
What do you think from from the model
23:44
air perspective? What do you think are
23:47
the modes here with with audio models?
23:50
The labs are going there, not going
23:52
there. What are the kind of, you know,
23:55
in this sausage making of making a real
23:57
good frontier audio [snorts] model? what
24:00
what are the the main defensible parts
24:02
there?
24:03
The um so of course we do a a variety of
24:07
models and uh recently had a pleasure of
24:09
meeting Jensen and he was commenting on
24:11
a few of those models and he said that
Moats and Closing Remarks
24:13
our speech to text our speechto text
24:14
models are technology and texttospech is
24:17
artistry and we are all artists. Uh so
24:20
he gained a client for life. Uh but of
24:22
course uh we do believe there's a little
24:24
bit of that too to really fix text to
24:26
speech and fix that emotionality. You
24:28
you you you will need to be really
24:30
focused on that space. You really need
24:32
to get in front of users, collect the
24:34
data, collect the preferences, use that
24:36
to fine-tune the models and then there's
24:37
a domain specificity in how you actually
24:40
bring those models to production and
24:41
healthcare very different than in
24:42
financial services very different than
24:44
in education or um experiences. So
24:47
that's on the model I think there will
24:48
be continuous advantage that if you
24:50
actually care about the quality the like
24:53
actually uh spending the time on the
24:55
model work will will will help you keep
24:57
that advantage but to your point the
24:59
models and like a lot of use cases will
25:02
use a model as just a small part of
25:03
their stack and that's where we spend a
25:05
lot of time like beyond going beyond the
25:07
research on on the product side of how
25:09
you understand the user's problem the
25:10
workflow that they need. Um in voice
25:12
agents is combining the audio models
25:14
with knowledge uh and bringing that
25:16
inside of the the system. How you bring
25:18
it outside with telephon system so you
25:20
can interact across channels how you
25:22
evaluate test and monitor. Um and then
25:25
as you create whether that's in the
25:26
agent space whether that's in the
25:27
creative space that same understanding
25:29
you build the ecosystem and that's what
25:30
we hope to build across 11 labs a place
25:33
where whether that's distribution and
25:35
brand that people can trust the platform
25:38
where you have pre-existing set of work
25:40
that you can start off whether it's a
25:41
template for creating an agent template
25:43
for creating a workflow in creative
25:45
space or whether that's a voice and we
25:48
had a pleasure now of having over 20,000
25:51
voices that people created contributed
25:53
that you you can use across language
25:55
styles and voices and I think that will
25:57
be an increasingly important layer of
25:59
how you are able to cater to that
26:00
diversity make it easy for people to
26:02
start and really understand that that
26:04
workflow.
26:06
All right, I'm going to hand it back to
26:07
Kazadine Motti. Thank you, Andrew.
26:09
Thanks for being partner. [applause]
26:11
Amazing. [cheering] Thank you guys.



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `ElevenLabs' Mati Staniszewski: How Voice Becomes the Interface for AI`  ·  visible_channel: `Sequoia Capital` (211K subs)
- visible_url: `youtube.com/watch?v=ZNzYN2jyVTU`  ·  visible_published: `May 6, 2026`  ·  visible_views: `50,315`
- visible_description: *"Mati Staniszewski, co-founder and CEO of ElevenLabs, joins Sequoia partner Andrew Reed at AI Ascent 2026 — how a four-year-old company built a frontier audio-AI business with ~400 people and $400M+ revenue; why audio was overlooked in 2022; why ElevenLabs monetized from day one; why voice will be the primary interface for agents, robots, and the next generation of computing; emotional intelligence as the next frontier in voice; what happens when one voice agent realizes it's talking to another."*
- chapters (visible): Intro · Poland Dubbing Problem · Why Audio Was the Bet · Remote Team & Early Monetization · Building the Audio Model Stack · Early Wow Moments · Voice Agents Beyond Support · Operating Lessons at Scale · Audience Q&A Future of Voice · Moats & Closing
- screenshot_ref: `assets/Screen_Shot_2026-06-06_at_11.54.40_PM-f7ae6d2a…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

This one is very relevant, but in a different lane than Waymo.

Waymo was about safety-critical autonomy and structured validation.
ElevenLabs is about voice as the human-facing interface layer for abundant intelligence — and the trust/authentication problems that arrive when humans, agents, and systems all start “speaking.”

Core takeaway

The strongest claim is not “voice agents will replace support.” It is:

As intelligence becomes abundant, the bottleneck becomes communication with that intelligence — and voice/visual interfaces become the natural affordance layer.

Mati says this directly: the future bottleneck is how people communicate with intelligence, and voice plus visual interaction will unlock more of its value. He also pushes voice agents beyond support into sales, government/citizen services, education, healthcare appointment intake, and agent-to-agent communication.

For OMNI, this lands hard in surfaces, messaging, patient experience, agent identity, and Governed Capability Exchange.

OMNI translation
1. Voice is not just a rail. It is an affordance layer.

OMNI has been talking about rails: SMS, portal, email, phone, chat, API, MCP, A2A. This video pressures us to treat voice as more than transport.

Voice can become the lowest-friction interface for patients, staff, providers, and maybe even agents:

patient calls to ask about meds, symptoms, labs, appointments, aftercare;
front desk uses voice to update schedules or gather missing info;
provider dictates or asks “what changed with this patient?”;
care coordinator speaks to OMNI instead of clicking across dashboards;
patient’s external agent calls OMNI to book or transmit info;
OMNI agent calls partner/vendor/clinic to retrieve status.

But the key: voice must route into the same substrate. It cannot become a separate voice app with its own truth.

Doctrine pressure:

Voice is a surface/rail into substrate truth, not a separate care system.

2. Emotional intelligence matters in care, but it is dangerous if ungoverned.

The transcript emphasizes voice models understanding stress, excitement, pace, emotion, and responding with the right tone. That matters in OMNI because tone is not cosmetic in healthcare. A patient asking about nausea after a GLP-1 dose, a scary lab, a post-procedure complication, or a billing issue needs a different voice posture than someone rescheduling Botox.

But OMNI has to be careful:

emotional detection is probabilistic;
tone adaptation should not manipulate;
clinical risk still gates the interaction;
high-emotion states may require escalation, not better soothing;
voice empathy must not masquerade as clinical authority.

A good OMNI rule:

Voice agents may adapt tone, but they may not use emotional fluency to bypass clinical, consent, or human-review gates.

3. “Authenticated real” becomes more important than “detect fake.”

This is one of the biggest trust-axis gems.

Mati says the future may invert today’s assumption: instead of detecting AI/fake, systems may need to detect authenticated real / watermarked / opted-in human or agent, and assume everything else is fake by default.

That is directly §A / §C material.

For OMNI, voice creates a huge identity problem:

Is this actually the patient?
Is this the patient’s delegated agent?
Is this a family member?
Is this a staff member?
Is this a synthetic voice?
Is this an approved OMNI voice agent?
Is this an external agent acting for the patient?
What is it allowed to know, say, request, or change?

This supports a doctrine line:

In voice and agentic channels, authenticity must be established positively; absence of proof is not proof of human authority.

That matters for scheduling, medication, payments, lab results, consent, and clinical advice.

4. Agent-to-agent communication should not be forced to sound human.

The hackathon example where two agents detect each other and switch to a more efficient communication mode is very relevant.

OMNI should not assume that all external communication remains human-style voice or chat. If two agents are communicating, they may need a structured protocol, not a fake phone call.

This pressures §C:

human voice call = surface/rail;
agent-to-agent exchange = capability exchange;
structured payload = probably safer than “AI pretending to talk”;
if one side is human, use human affordance;
if both sides are agents, use governed protocol where possible.

Doctrine pressure:

Human-facing communication should optimize for human affordance; agent-facing communication should optimize for governed structure, provenance, and machine-verifiable intent.

5. “Voice agents beyond support” maps directly to OMNI operations.

The video gives examples of voice agents doing inbound/outbound sales, gathering restaurant hours, collecting customer intent, government support, education, and healthcare appointment info.

OMNI equivalents:

call a patient to collect missing intake details;
gather updated symptoms before provider review;
call a partner lab or imaging center for status;
confirm appointment readiness;
collect opening hours / availability / supply status from partners;
perform post-procedure check-ins;
route urgent patient calls into CNS;
help a provider query context hands-free;
help front desk reduce phone burden.

But this must be bounded. Voice agents should not silently create clinical truth. They capture source events, observations, preferences, and candidates.

6. Embedded engineers in nontechnical teams is a Build OS / workforce gem.

ElevenLabs keeps small teams and puts engineers inside people, go-to-market, legal, and other nontechnical teams to help automate, review, and safely up-level work. He specifically notes that as nontechnical teams “vibe code,” review quality becomes harder because of security/infrastructure implications.

This is very relevant for OMNI’s build and business-ops doctrine.

OMNI should not have “AI/engineering over here” and “ops/clinic over there.” It probably needs technical operators embedded into workflows, especially as staff start generating automations, prompts, reports, and tools.

Doctrine pressure:

Agentic leverage expands who can build, but it also increases the need for review, security, and embedded technical stewardship.

That maps to Workforce Intelligence, Build OS, permissions, internal tool review, and operational AI governance.

Where it lands

Thesis §A — Trust / Authority / Permeability: major. Voice identity, authentication, synthetic voice, delegated agents, default-fake posture, opted-in/watermarked agents.

Thesis §B — AI substrate: major. Voice models as modality runtime; emotional intelligence; voice agents; multimodal interface layer.

Thesis §C — Governed Capability Exchange: major. Agent-to-agent communication, voice as rail vs structured protocol, external agent identity, authenticated capability calls.

Messaging / Communications contract: major. Voice should be treated as a communication rail with capture, consent, transcript, source authority, escalation, and audit.

CNS: major. Voice input should become source_event → observation/candidate → policy resolver → owning-domain commit, not direct action.

Build OS / Workforce Intelligence: medium-to-major. Embedded technical review for nontechnical AI-generated workflows.

Product surface: major. Voice may be the most natural interface for patients and staff in high-friction care operations.

Potential primitives / doctrine pressure

Potential concepts worth routing:

voice_session
voice_actor_identity_check
voice_authentication_state
synthetic_voice_disclosure
voice_consent_capture
voice_transcript_artifact
voice_emotion_signal
voice_agent_intent
agent_to_agent_detection
agent_channel_switch
human_affordance_mode
machine_protocol_mode
authenticated_voice_agent
delegated_patient_agent
voice_escalation_trigger
voice_output_policy

The important doctrine is:

Voice captures and conveys context; it does not own truth.

What not to import blindly

Do not import “voice agents for healthcare” as “AI takes healthcare calls and handles everything.” That is the dangerous shallow version.

Do not let emotional intelligence become persuasion. OMNI’s voice tone should serve clarity, reassurance, and routing — not manipulate patient decisions.

Do not collapse “sounds like the patient” into “is authorized by the patient.” Synthetic voice makes voice biometrics alone insufficient.

Do not build voice as an isolated product. Voice must land in Messaging, Identity, Consent, CNS, D7 transcript artifact, Observation/Clinical Memory when appropriate, and owning-domain commit.

Do-not-miss lesson

Voice is likely the human affordance layer for agentic systems, but in OMNI every voice interaction must carry identity, consent, source authority, transcript/provenance, escalation rules, and commit boundaries.

Shorter:

Voice can make OMNI feel human, but only substrate authority can make it safe.

Priority / confidence

Priority: 4.5/5
Confidence: 4.5/5
Suggested analysis depth: targeted_semantic to full_semantic

I’d mark it full_semantic if this batch is specifically shaping §C and future rails. It is highly relevant to the question: how does OMNI interact with humans and agents when voice becomes a primary interface?

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

Wow!!!  We did NOT see this one coming, reagrding voice!!!

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(I fill later — derived work lives in EVRUN; leave `TK`)*
- EVRUN(s): `TK` · inventory: `TK` · routing_addendum: `TK` · impact §B/§C/security/Build-OS/contract: `TK` · promotion: `TK`

## §5 — Change log
- `2026-06-06` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.**

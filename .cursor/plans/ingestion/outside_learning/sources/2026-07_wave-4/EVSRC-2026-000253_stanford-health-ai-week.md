# EVSRC-2026-000253 — <title or TK>

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed` (Review 003 written 2026-07-11; folded to `EVRUN-2026-000005`; propose-only)**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-4 scaffold (created 2026-07-11). Register/run: see `../../00_index.md` (wave-4). EVRUN to open at processing = `EVRUN-2026-000005` (or fold into wave-3 per operator).
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — AS-IS) + optional gut note (§3 Review 002). Then Opus writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry**, coverage matrix, and fills **§4 pointers** at closeout. Deep read lives HERE in §3 — never a sidecar (`GRD-044`).

## §0 — Source identity / metadata  *(normalized by Opus from Knox §3 rough-metadata + transcript)*
- evsrc_id: `EVSRC-2026-000253`  ·  filename: `EVSRC-2026-000253_stanford-health-ai-week.md` *(renamed from `_TK` 2026-07-11 wave-close)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=y81IfY-Cc1U`  ·  source_title: `Live from Stanford Health AI Week`
- channel_or_org: `Stanford Online / Stanford Medicine Health AI Week`  ·  speaker: `Matt Lungren + Justin Norden (hosts) with Sue Sheridan, Chris Boerner, Kimberly Powell, Ed Kim, Arati Prabhakar`  ·  published_at: `2026-07-09`
- captured_at: `2026-07-11`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot + YouTube URL`
- content_type: `multi-speaker interview compilation / event coverage (~1h36m)`  ·  source_reliability_context: `mixed high-authority — patient-safety leader · pharma CEO · infra vendor exec · oncology system physician · former federal science adviser (treat vendor/predictive claims as examples)`  ·  topic_tags_light: `[patient_AI, diagnostic_safety, patient_reported_outcomes, longitudinal_context, AI_adoption, shadow_AI, ROI_measurement, hybrid_capability_placement, agent_harness, data_readiness, clinical_trials, trial_matching, provider_workforce, patient_empowerment, evidence, knowing_doing_gap]`

## §0.1 — People / authorship / authority context
- primary speaker(s):
  - name: `Sue Sheridan` · role_in_source: `interviewee` · affiliation_at_publication: `Patients for Patient Safety US (President/CEO)` · speaker_type: `patient-safety advocate/operator` · authority_context: `demand-side + lived diagnostic-failure authority; NOT model/systems evaluator` · identity_confidence: `high`
  - name: `Chris Boerner` · role_in_source: `interviewee` · affiliation_at_publication: `Bristol Myers Squibb (Board Chair/CEO)` · speaker_type: `enterprise operator (regulated pharma)` · authority_context: `enterprise change-mgmt, shadow-AI, ROI, capital allocation` · identity_confidence: `high`
  - name: `Kimberly Powell` · role_in_source: `interviewee` · affiliation_at_publication: `NVIDIA (VP Healthcare)` · speaker_type: `infrastructure vendor exec` · authority_context: `hybrid/edge placement, harness, domain models — vendor incentives noted` · identity_confidence: `high`
  - name: `Ed Kim` · role_in_source: `interviewee` · affiliation_at_publication: `City of Hope Orange County (Physician-in-Chief/SVP)` · speaker_type: `oncology + trial-system operator` · authority_context: `trial access/accrual, frontline burden — highest-value operational segment` · identity_confidence: `high`
  - name: `Arati Prabhakar` · role_in_source: `interviewee` · affiliation_at_publication: `former Director, White House OSTP` · speaker_type: `science-policy leader` · authority_context: `national R&D, institutional trust, labor timelines — the techno-optimism counterweight` · identity_confidence: `high`
- publisher / channel: `Stanford Online / Stanford Medicine Health AI Week`  ·  interviewer / moderator / host: `Matt Lungren + Justin Norden (Stanford Medicine healthcare-AI)`
- event_context: `anthology of 5 recorded interviews from Stanford Medicine Health AI Week — 5 authority lenses on one question (where healthcare AI produces value, what constrains it, what must change)`  ·  perspective / conflict notes: `institutionally pro-AI/optimistic venue; value = contrast among speakers, do NOT flatten to one consensus voice`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it, but every claim still routes through evidence → interpretation → gated promotion.

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Timeline

Transcript
Search in video
0:10
Hi everybody, it's Matt and Justin. We're here on location at the Health AI week at Stanford Medicine
0:15
and we're going deeper with a few of those speakers on the Stanford AI and Healthcare podcast.
0:20
So we hope you'll join us for the next few episodes where we'll be again speaking with some of the leaders in
0:26
industry, healthcare, and AI and life sciences.
0:31
I was having a debate with Zeke Emanuel. Yeah. Obviously, we're all here super excited
0:37
about AI, the potential already. I think we would argue, I'm curious if you agree with this, is having the biggest impact
0:44
on patients, understanding knowledge, access to information, a leveling like that is
0:50
already happening today. Uh where I'm curious and I was struggling is given
0:57
that we believe that you're also a quality person. How will we be able to measure this? How will we be able to
1:05
measure the impact of what I think we believe is the positive impact for patients? How will we know at like a
1:11
national level? How will we be able to measure it? Well, I think we have to start researching. I mean that's I mean so
1:17
much research is done right now on AI and clinicians and AI in health care
1:22
systems and the impact on efficiency and cost savings and all that. There has
1:28
been little research on patient use of AI. Who's doing it? When
1:35
we do it, how are we doing it? Why are we doing it? I mean, no one is collecting this
1:41
data and it is I think some of the richest information for us to learn and
1:46
that when this research is is developed and I think it's just on the horizon quite frankly because we I think we are
1:53
some of the biggest users of AI. I think we are like outpacing the health care system. And so I think when this research when
2:00
whoever decides to research this um they need patients at the table because uh we
2:07
need to help design the research questions you know what would that research look like and we need to base it on the outcomes that matter to us. So
2:14
that's you know I think there is that is fertile territory. Is this but is this going to be like a public I mean cuz
2:20
like the different vendors have obviously lots of data on their users. I
2:25
mean they they may not share all of it all the time but like there's been some interesting reports like you know I think I think it was open
2:31
that showed like a map of the US and then sort of had like you know access to care in one sort of angle and then the
2:38
the number of chats about healthcare and it was pretty well correlated. Yeah. So, I think we I think this maybe begs
2:45
for to your point, can we learn a little bit more about the use cases where they're working, where
2:50
they're getting stuck? Like I you know, it seems like we could give them a boost. They're already seeing so many
2:56
opportunities. You know, something I would love to see in research. I mean, like um like I mentioned and other speakers mentioned
3:03
that diagnostic safety is a huge national problem. It it kills or
3:09
permanently harms about 900,000 Americans a year. And so I would love to
3:15
see an AI organization or AI developer dig, mine their data, look for the
3:23
trends in in the diagnostic process that patients go on with AI. I've gone on a
3:30
diagnostic process with AI and it's not just one question. It's a journey and then it remembers me. And so I would
3:37
love for an AI company to dive into their mind their trends and then I my
3:42
organization patients for patient safety US we have access to thousands of patients and so why not bring in the
3:48
real patients who have experienced harm with what what AI companies are learning in their trends get together and form
3:55
something you know do some research and then form something to solve this problem. How have the conversations been so far?
4:01
Have you tried approaching the frontier labs? Obviously you're here at Stanford
4:07
you know you can talk to academia you've done this frontier labs are new right to healthcare um on this have you had those
4:14
discussions how has that gone so far trying to engage them on that you know I know others in you know
4:19
Google and and Microsoft and that and I would love to sit down just have this have this conversation quite frankly my
4:25
organization was just thinking like last week how do we solve this problem of
4:31
miss wrong and delayed diagnosis that harms so many people AI is the answer and so we need a partner and this is
4:37
what we were just kind of formulating and I actually went into chat GBT and said chat GBT envision a partnership
4:43
with the AI with open AI is what I put you know envision a partnership what would we do together it was fascinating
4:48
as Justin and the people who ever watch our show know like I am extremely bullish on the idea that this is
4:55
transforming the patient experience at large you know the the fact that we
5:00
spend you know whatever 15 maybe if we're lucky minutes with a patient and do I even know by the time they leave?
5:07
Like, have they comprehended enough? Am I answering all their questions? All the things. And then on my side, am I up to
5:13
speed enough to really address all the things that they're going to ask? It's been a game. I also feel like it's been pushing the health systems in a way that
5:21
I've never seen before because the technology is so accessible and so useful that health systems are kind of
5:27
like almost on their back foot a little bit. Have you heard from patients in your organizations that are like, I
5:33
don't know what to do. I go to my doctor and they seem to be less knowledgeable than I am now that I've been working
5:39
with these tools and it feels as though I'm lacking someone that can help guide
5:44
me through what right and wrong is cuz I don't know if I should trust just AI. Do I trust my helper? You know, like is
5:50
there a We do hear a lot from patients who uh use AI and most of us very positive and
5:57
you know they're using why are they using AI? We have to ask ourselves this question first of all you know first of all access you know I live in Frontier
6:04
Idaho I don't have access to I can't see a primary next week it'll take months a
6:09
specialist even longer and so first of all you know access is a huge problem
6:14
second of all AI you know there's a there's a epidemic of patients and family members concerns
6:20
getting dismissed you know what AI can't dismiss me and you know AI remembers me
6:26
I've gone into doctor's office who know well I thought they knew me and then they walk in and they have no you know
6:33
his memory of my history well I can go on to chat and chat's like oh it knows
6:38
all my background it remembers me and you know and so there's so many reasons why patients are it's got all the time
6:44
in the world like you said so I mean first of all we have to really learn why are patients using AI and what is this
6:51
gap that that's getting filled by AI it's a big gap so when we get to the physicians yes sometimes patients do
6:58
arrive with maybe more of their own data from wearables, from whatever and more
7:04
data that they've learned from more information. So this democratization of data and knowledge, we arrive as a
7:12
different patient these days. And so we're calling for, you know, a different relationship with our provider,
7:17
different partnership that I think that's where the sweet spot is, quite frankly. And maybe I'll use this
7:24
opportunity to ask the question we're asking everyone, which is what is the constraint
7:29
holding your vision back for how AI could change how healthcare looks like?
7:35
What is the constraint that if you could remove would really run things forward? Culture. Say more. I think that, you know, right
7:43
now what I'm observing is um in the media, in commentaries and journals,
7:49
we're seeing all this negative uh positioning of patients using AI
7:56
that, you know, they they class, you know, they classify us and label us as midnight moms and all these these these
8:02
patients that are fictit. They're not really engaging real patients. And so they're positioning patrons as the
8:10
problem instead of the solution. I think we're the solution. And so I think culture, you know, like
8:15
um when I used AI and it was in it it solved a big problem for me. It was on
8:21
the front page of New York Times. It went went viral in a blog. I was heavily
8:27
criticized in LinkedIn on on on every social media channel because, you know,
8:33
doctors were calling me uh doctor shoppers and that I shouldn't be challenging my doctor. And um so I was
8:40
shocked at that response. And so culture, we've got to change the culture in terms of what the media says. you
8:47
know these I I you know I my husband is a clinician so I respect clinicians but
8:53
I think there's a lot of bias when they talk about patients using AI you know instead of rolling their eyes and
8:58
calling us a problem they should celebrate an informed patient can't agree more I mean yeah I don't know how we follow that
9:05
well but I mean the meta point here I think as we wrap is you know I think there has been harm not just in the
9:11
healthcare narrative but societal narrative right I think that you're seeing the push back on data center
9:17
buildouts, a lot of misinformation being put around the buildout, what they're used for, uh the impact of the
9:23
environment of the economy, and of course the job narrative. I don't think it's been helpful for anyone working in
9:29
this technology, the way the narrative had sort of start, you can start to see it shift now, I think, and as people are
9:35
beginning to become more used to using it in their work or in their personal lives. But to your point, the this is
9:42
all a culture problem that we're gonna have to figure out. And we have to acknowledge, I mean, I
9:48
look at PA I look at AI through a patient safety angle and getting the right diagnosis because two of my family members were harmed. I lost a husband
9:54
when his malignant pathology got lost. AI could have caught that. And then I have a son, 31, who suffered brain
10:00
damage from his newborn jaundice when everything fell through the crack. AI could have caught it. So I see it
10:05
through an AI lens. And you know, we actually live in a health care get our
10:11
health care in a health care system that really is unsafe. So when people try to position patients as oh they're going to
10:18
believe everything AI says, well you know what I believe the doctors and you know is so I think we have to level set
10:24
and understand that our health care system really isn't designed to help clinicians do their
10:31
best. You know they got 12 minutes, they've got, you know, all these all these restrictions. That's why patients
10:36
are stepping in. Yeah. And I I I love that as a spot to wrap, which is can we measure
10:43
diagnostic errors and see them going down with the introduction of AI and like as
10:49
a metric that we think AI can improve again from both patients bringing their own information and of clinicians. I I
10:56
love that as a focus. Absolutely. I do. And you know, this kind of been an excuse for a long time. Oh, we can't measure it. Yes, we can.
11:02
And you know one of the measures that's just been uh missing a big gap is patient reported measures. There is no
11:09
mechanism yet to learn from us. You know when the diagnostic errors happened to
11:14
Cal and Pat and me there was nothing to collect that data. I was eager to share that because I
11:21
didn't want that to happen again. Well, we're changing that. You know the group my group is working with HHS and others.
11:27
We've been doing some research on you know changing that. And so that's a layer of data. That's a new layer of
11:33
data. And then, you know, with technology and other measures are now going to be easier to capture.
11:39
I'm excited for it. Thank you for all the great work you're doing. Yeah. Thanks for joining us. Well, thank you. Yeah, it's been a
11:44
pleasure. In my mind, the tech technology is going
11:50
to evolve and you're going to have companies like ours that figure out either because folks are doing it
11:56
bottoms up or top down investments, they're going to figure out how to use it. and we're going to figure out where to make the investment. Ultimately, it's
12:03
what happens when you start making those investments and what do people do? It's the cultural change associated with it
12:08
because that's the thing that I used to have a lot more hair. When you start making hundreds and hundreds of millions
12:15
of dollars of investment today, I approved another hundred million investment in AI. Then you're like,
12:20
okay, why is it that these projects aren't moving faster? what's happening
12:26
around. You know, we I could go off on this. No, you go. I think they're rolling. So,
12:32
just like just to be sure, we encourage rants and going off on this show all the time. So,
12:37
please because the the thing that is so frustrating to me is that, you know,
12:43
we're putting massive amounts of resources around projects like, okay, how do we minimize the
12:51
quality issues in a manufacturing site? There's actually a really good New York Times article two or three weeks ago on
12:58
our Devons facility where we're doing it at scale and I can count on one hand the
13:04
number of New York Times articles that are positive on pharma and so to have an
13:10
entire New York Times article on pharma where it's like look at what this one manufacturing site is doing in AI it was
13:16
great but the precursor to all of that is you're doing a ton of investment and
13:22
the teams will spend millions and millions millions of dollars and they're like, "Well, we might be able to shave off about a half a day on this." And
13:28
you're like, "No, no, no. At some point, we got to start putting like real numbers and actual impact." Investors in
13:35
our space have gone from are you doing anything in AI to what are you getting
13:40
for it? And and all of this is tied up in one
13:46
people don't know what they don't know. The same thing you guys mentioned that this stuff's moving so fast. you're a
13:51
lot of folks just don't even they don't even keep pace with what what's happening two when they start using it
13:58
they're like oh this is really interesting we could do a lot of you can see their brain start moving then you put real money behind it and like well I
14:04
don't want to be held accountable for what for the output on this stuff I just want to spend the money so we got to get that happening and then
14:11
when there's a lot of resources behind it folks start going where's this going what does that mean for me and my teams
14:18
so then you have to start having that convers conversation and that's where you got to be really thoughtful about
14:24
how you engage. So I mean are you like I mean it's a large org and and I mean when I was at
14:29
Microsoft like that was our whole bread and butter. We meet with large healthcare organizations in all different sectors and there were there
14:35
were always little like pockets of people that were like AI pill is the term out here but whatever it is like
14:41
they're so excited about it and they're they can't wait to do everything. And then you have other folks that are like,
14:47
uh, I looked at it a year ago. It was okay, but it really wasn't as good as I thought. So, I'm I'm good. And and it's
14:53
like to your point, how do you how do you encourage writing that understanding
14:58
the constant checking on, okay, can it do this now? Can it do this now? At the same time as keeping people on track.
15:04
Yeah. For like, hey, we actually have to deliver this and we we need to show where the delta was for using the tools.
15:11
Like you've got the idea person who's got 50 million projects and you've got the person that's like h you're going to drag me along and then there's a
15:16
spectrum like organizationally how do you what's the metrics incentives like
15:22
how do you work with that? Well there's no easy answer to it for sure and but you're right you you have these folks who are early adopters
15:29
they're enthusiastic in their copious spare time they read about AI they see where it's going. they're the ones who
15:34
sit down and partner with um our digital transformation officer and and they're
15:40
staying up to speed on things. Then you have folks who are like I have a real job and I you know I got like I got to
15:46
do stuff and you know I'm I don't have time for this. And then in our industry, you also
15:52
have it's heavily regulated. And so you got tons of lawyers and tons of process.
15:59
And so you got to kind of break that problem down and say, okay, how do you
16:04
keep these projects moving when you find that there's proof of concept, you scale them? And how do you get the
16:10
organization out of the way to be able to implement them and derive value? And
16:15
there's no simple way to do that. But it does come down to those evangelists have
16:20
to you have to continue to incent them to drive this forward. You will find that an organization of the size of
16:28
Bristol Myers with 30,000 people. We operate globally. We've been around 170
16:34
years and all the wiring and plumbing that goes with that. And so what happens is somebody has to be accountable for
16:40
just breaking through organizational barriers wherever they come. We're very fortunate that our digital
16:48
transformation officer didn't come from pharma. So when the first models of chat GPT were coming out in November 22,
16:56
we almost did what every pharma colleague of ours did, which was let's surround it by lawyers and process and
17:03
strangle it until we're forced eventually to actually do something with it. And
17:10
he said, "Please don't do that." And so after a very long engaged discussion, we ended up putting a chat
17:17
GPT that first model on about a thousand of our executives
17:22
um toolkit. And what began to emerge were kind of use cases. Well, now we have every every
17:29
morning you log in 34,000 people have access to a whole suite of AI tools. And
17:36
the idea was let's let a thousand flowers bloom. let's just get those ideas moving. You can execute them. If
17:43
they're good, we'll put some money behind them. And so that's worked. And then what we said is, okay, over time
17:49
there are some areas across the big verticals, manufacturing, research, development, commercialization. We got
17:55
to put more resources in and we're going to start pushing down um not only
18:01
computing power, but specific tools that we think can drive the mission of the organization.
18:06
And then for each of those, you then have to stay on top of how much are we
18:12
spending, are we getting a return, who's going to drive these projects because you get through the morass of the middle
18:18
layers of the organization. You got to blow through it. It's coming back up to my level because at the I was literally
18:24
just having a conversation with one of our employees on a topic and I'm like, send me an email because I can break through some of that if necessary.
18:31
There's no simple solution. It's just you got to it's constant diligence, but it's in the trying that you're like
18:37
that's the progress. Like it's almost like but the paralysis and I I know we've talked about this before, but the
18:42
shadow IT problem, everyone's got it on their phone. They know what it's capable of. They also know what their use cases
18:49
are and their role. It's not hard to see the opportunity, but if there's all
18:54
these again processes or bans or you know in healthcare I I always say this
18:59
story where I I would after JBD came out one of the health systems I worked with said we are not going to be able to
19:05
access it on our hospital computers anymore like or period and so folks residents overnight residents were
19:11
tethering their laptops to their phone to be able to use it because it's so useful right
19:17
and the problem with that is you end up with shadow organization So now you're spending twice as much as you thought you were spending.
19:24
And unfortunately when you have those shadow organizations often times, you know, we we spend a lot of time building
19:31
these tool some of these tools ourselves cuz they're customized. We connect them to our data. We curate the data to work
19:36
with these systems. And then you have somebody in some random part of the commercial organization is like, well, I'm just going to partner with this
19:42
consulting firm. They're going to come in and do it. So now we paid for that. And you just have to whack-a-mole those
19:48
projects so that you can say, "No, we're going to take those resources, tap you into this, make sure it fulfills what
19:55
you need to get out of it." But in some ways, this I if you've if you've seen
20:01
sort of these technological elevations over time, this one's bigger than anything we've seen before.
20:08
This is sort of this learning phase that you go through and eventually we'll get out on the other side of it.
20:14
But the most important thing we can do right now is we're going to end up spending more than we need to. But let's
20:21
figure out how we can utilize this technology to the betterment of what we do as an organization. And if I may,
20:27
I'll give you one example just from this morning. So we have a study ongoing with one of our products where when we moved
20:33
from phase one to phase two, we started to get some sort of funky safety signals sufficiently so that we it probably
20:40
would kill the drug eventually. So what we did fortunately is we've curated a lot of the data. We're a
20:46
leader in the space. We built some AI tools to operate on it and continue to
20:52
inform us. And within about 3 weeks, we were able to identify a small change in
20:58
manufacturing that had been made on a process between phase one and phase 2.
21:04
And now we think that we've zeroed in on what the issue is. We can undo that and
21:10
continue to get this study up and running. We could never have done that 2 or 3 years ago. And so fortunately that
21:18
was one of those bottoms up projects that somebody said you got all this data why don't we curate it in such a way we
21:23
can do something with it. That's the brilliance of this stuff and we just need to find more of those and
21:30
invest in those at scale. No and I I think the fun part now and I spend most of my time most of my days
21:36
with health system CEOs. So they're similar organization size maybe have
21:41
been around for for as long uh and you know you get a range of perspectives of
21:48
how much time and attention they should spend on AI. You seem like you're on one end of the spectrum. This is a focus.
21:54
This is an area you're spending time. But you know I've heard things from them of AI is everywhere now. But the bottom line Well, that's a little bit what these
22:00
investors are trying to No. No. And and it's it's it's pushing. It's again it's it's it's funny because it's true, right?
22:06
these balances, but then you hear stories like the one you mentioned. And so one of my questions is like how do
22:11
you start to create this structure to measure that, right? Amazing use case. Do you get to count the whole drug,
22:19
right, as as the potential, you know, how do you start to document these wins? Because again the stories are so
22:26
powerful at this stage at this stage of learning why are we spending the money we're going to spend as a as a country
22:33
ahead right of the impact so far with AI but then we have to have the stories to
22:38
kind of keep fueling the fire and to kind of keep attention and interest and so h how have you started to work with
22:44
your teams to measure right an example like this how do you get to quantify that well you know we have a person and who's
22:50
now building a team where all they will do is begin to figure out how do we a
22:56
track what we're spending cuz that because of how we set this up it's hard to know where all of these dollars are
23:02
going actually using AI to help us do that by the way um so one where are we
23:08
spending two begin to you know say okay for for the for the small investments
23:13
we're probably never going to ask for an ROI just doesn't make sense you'll spend more time tracking it down than you will
23:18
actually um getting getting uh any anything useful and you chalk that up to almost like investing in the literacy of
23:25
the folks that are right. Yeah. So, but for the bigger projects, it it
23:30
is now there's an organizational effort at my level to begin to say for these
23:36
we've got to start coming up with, okay, how are we going to account for the impact that we've seen? You know, on our
23:42
last earnings call, we said we're going to get a 30% reduction in drug development, the longest period of time
23:48
and the most money that we spend in getting a new medicine to market. We're going to reduce that time from the first
23:54
inhuman to an approval by 30% using these tools. It took us months to figure
24:00
out that we could actually pull that off because you're piecing together different pieces of drug development
24:06
saying how is AI going to actually cut down on on time. So, it's it's just
24:11
going to be brute force until you systematize it. You get some common language about how you think about the
24:17
investment you're making. you know, how do you every time you run one of these models, you're you're generating energy
24:23
costs and all of that. So, how do you factor that in? So, it's not straightforward.
24:28
I mean, do you do but do you look at the economics because they're those are changing almost as fast as the technology is getting better. Like you
24:34
see some of these graphs where like the the quote unquote intelligence, however you want to measure. We can argue about the benchmarks, but they are getting
24:40
better. We know that. And then there's the same almost asmmptoic decreasing
24:45
cost curve per token for example if that's the unit of measure for now like
24:51
so like if you're if you're planning a budgetary cycle of you know a logarithmically decreasing you know
24:58
expenditure like does do you just say I'm willing to take the bet that this is going to be cheaper and sustainable in
25:05
terms of a long-term budget planning cycle like in other words like it's going to cost X today, but probably
25:13
maybe an order of magnitude less next year. I mean, is that is that that's the logic. The logic is we're
25:19
going to spend more now to ultimately spend less. And in order to justify that, what we've
25:26
had to say is, you know what, we're going to begin to pull down costs in other areas to say, I've got a slush
25:33
fund in which I can use in order to fund this. And the other thing that we're doing to accelerate because you want to
25:40
move from the phase where you're just assuming you're going to get benefit to actually yielding benefit. What you
25:47
start do is saying okay you know what let's let's put money where our vision is and say if I've got an organization
25:54
where I think I can reduce the cost associated with running that organization using this technology.
26:00
Let's start taking resources out of that group that will accelerate their
26:06
execution and implementation of this and and then find somebody in the organization who's a visionary who can
26:13
continue to push it and then just stay on top of whether or not it's working or not. You may have to dial back a little bit here and there, but ultimately we're
26:20
still at the phase where it's like we're going to invest and eventually we're going to get a return and we're going to
26:25
do everything we can to start tracking where that returns coming from and shift resources accordingly. What has surprised you as you started
26:32
this process? And then it's like and how much of your time right obviously your time is pressed for a thousand different
26:38
things but what has surprised you in this and how much of your time is focused on like the change management of
26:45
an organization towards investment allocation and use of AI? Well, I think what surprised me is we
26:51
talked about it earlier just the pace at which it's moving. Like you you guys can't write a curriculum for a class
26:57
because it's outdated the moment you type it up. Yeah. Exactly. Um but um in
27:04
our in our case the speed with which this is having an impact everyone says
27:09
this is going to be the space where AI is going to have the biggest impact from a sector standpoint and you can you can
27:16
see that's that's going to be the case. So that surprised me the the most. And
27:23
you know what's sort of funny is that we're finding it's being used everywhere and even you we do earnings calls every
27:30
quarter and I was like you know I really wish I knew what people were going to ask me. Well as it turns out somebody
27:37
heard me ask that question and they're like well let's use build a model on
27:43
every analyst who covers those analysts ask the same questions of the same industries right totally that's an amazing use. Then I said,
27:50
"Okay, well, is it accurate?" We can we can predict with about 80% accuracy the
27:56
questions we're going to get. So it's like having the exam before you take it. So then you're like, "All right, well
28:02
now I used to get a 500page binder
28:07
that I would read diligently the first 200 pages and then hope I wouldn't get a question for the other 300 pages because
28:13
you just run out of time. You can't get through all of it." And so they're like, "Well, why don't we create a tool that
28:19
you can just say,"I want to know everything about this topic and then put it in my language." So now I've got a
28:26
tool that scripts my answers to these questions, trudging through all of the resources that we have.
28:32
Here's where it might go is on the actual call. We're now training a model
28:38
to listen to the question because you have kind of what your sort of stock answer will be to that. But at some
28:45
point, I'd like to be able to say, "Okay, did I miss anything?" And so, as the call is taking place and the questions come in, I can look at my
28:51
computer and say, "Okay, did I did I answer the question as thoroughly as I could have
28:57
and that's that's just something that occurred because I asked a question like it wasn't there wasn't a big
29:03
project around it. That's happening everywhere." And I think we should have let those things go
29:09
because eventually you're going to find the idea that helps us accelerate a new asset,
29:14
enable us to get it to a patient faster. I mean, at the end of the day, where this technology needs to get to is
29:20
changing human health outcomes. And that's going to mean we're going to
29:25
have to partner with health systems. We're going to have to partner with other parts of the health care system
29:32
because that's what we're in the business of doing. And I think this technology can be transformative. We haven't even begun to to go there yet.
29:39
Yeah. Uh well, Chris, thank you so much for joining us. Chris Boner, the CEO of
29:45
Bristol Myers Squid. Great to be here.
29:51
Kimberly Powell from Nvidia, the vice president of healthcare. Thanks so much for joining us again to coming back. Uh
29:58
before we talked about robotics, AI, and drug discovery. Uh we're definitely
30:03
going to talk some about agents. Uh but we were just talking about onprem. Yeah.
30:08
Right. Where there's a lot of security concerns today broadly now with AI with mythos new models coming healthcare
30:15
obviously the most one of the most sensitive places for data and so talk more about what's your vision of like
30:21
onrem cloud how do you see it at Nvidia where do you what questions are health
30:26
systems going to be talking about? All right. I think you know the agentic world, we're fully in this future now
30:33
and that is without a doubt. But if you think about how you're going to be interacting with agents, you're going to
30:39
want a hybrid approach. No, no matter who you are, uh, for a lot of reasons. And so edge computing has all of a
30:46
sudden gotten sexy again for a lot of good reasons. Uh we were talking in there about lab equipment and how do we
30:53
make every scientific instrument a robot on day one is by having a little
30:58
computer that runs an agent and can uh you know listen to all the metadata that's coming off the instrument can
31:05
look at you know what the experiments running see if anything's going off course correct it right then and there
31:11
you see where you have a real time tight closed loop that is going to benefit any kind of an instrument. Okay. So that
31:18
that's one. Um another reason is you know there's a lot of people myself
31:24
included. Um I'm an electrical and computer engineer but I'm not somebody who lives in Linux or other operating
31:31
systems. You know I usually live in Windows. A lot of doctors, nurses live
31:37
in Windows environments because that's what's been largely deemed kind of the de facto enterprise computing across the
31:44
entire healthcare system. And so wouldn't it be great if they can now
31:50
also have localized agents just to help them get through their day-to-day and it can run in Windows an environment that
31:56
they understand. So I think that's another huge one. Um then there's uh
32:01
let's think about cost here a little bit containing cost. Um there's a great
32:07
reason why um a lot of uh let's go for um Lily Eli Liy announced their AI
32:15
factory last year. They want to make sure that their scientists have access
32:20
to what is now I think without any dispute. An AI factory is the modern scientific
32:27
instrument and they want every single scientist to have as much of that as they can get. And so they're going to
32:33
deploy that locally. you're also every single one of them I I almost think about it as a an inverted triangle where
32:40
you're going to have sort of the generalist cloud um AI APIs that know
32:46
everything about generalist knowledge as soon as you start to get into a domain specific you're going to start wanting
32:52
to build your own agents for the the work you do it's more specialized and then when you get into the core IP of
32:59
any company or maybe very core to your patients and your population, you're going to be really wanting to lock down
33:06
and own that. And so, you kind of want to have this tiered approach. And so, you can go cloud, you can go cloud on
33:12
prem, you can go on prem to on desk. And you want to have sort of that ability to go between the three.
33:19
I mean, I I I love that vision because like what we what we tended to see for a while, especially in healthcare use
33:25
cases, like, okay, you're you're constantly testing the cloud models against some benchmark. They're obviously incredibly powerful for lots
33:31
of use cases, but the the question always comes up is, do I need to use the
33:36
most advanced cloud-based giant model for every thing that I want
33:42
to accomplish? And the answer is obviously no. And then it's like, well, what's the best way to start to think
33:47
about the open source models? Well, there's an option to run these on prem. And I think that's a lot of the work that that you all have been doing is
33:53
let's keep an open platform to allow people to customize without having to get into additional services and and and
34:01
cloud-based you know charges or token costs. But I think at some level like
34:07
what do you think about like the proprietary data aspect because I feel like um there's a commoditization impact
34:13
of just the the broader data that I think that we're all building models with but then places like Eli Liy
34:19
certainly healthcare we have really interesting proprietary unique data. Are you seeing like in combination with
34:26
agents be able to leverage the data but actually training is there any training going on I suppose? Absolutely. Yeah. And I appreciate that
34:32
question. I mean this is why Nvidia has really put forward our open- source
34:37
strategy and we talk about the concept of open models. Um open models I want to
34:44
define it as it's not just a model. Open models is really a set of models for all
34:51
different uh domains. Um whether it's world models with our cosmos, our
34:56
multimodal large language models with Neotron, our biology language models with Bionmo, it's a collection of models
35:04
that are at the frontier. They are not the frontier almost by design, but they're at the frontier and they're
35:10
meant to be post-trained with domain specific data for all the reasons that
35:16
you just described. It's proprietary data. It's you got to protect the data and frankly speaking this is get the set
35:22
of that middle tier of sub agents that is really codifying your domain
35:28
expertise right this is your craft this is your deep domain specialty and so you
35:34
have to do post training or you have to do reinforcement learning so you can align these models to the task or the
35:41
job that it's trying to get done and so we really need a huge collection of open
35:46
models and we we literally really try to partner across the ecosystem. Um whether it's the you know the EVO models that's
35:53
coming out of the arc institute or um you know the uh openfold models that you
35:59
know for all the protein fold that's in the biology realm but even all over the language models uh we're working on
36:05
this. So I think it's really important that people learn that there there it's not AI is not just a model
36:13
and actually it's a lot more than even the open models that I'm describing but the open models I'm describing give you
36:18
the opportunity to really exercise and create these domain specific um models
36:25
and then as you know we're going way beyond the model we're going into these agentic systems so you do need to have
36:31
levels of reasoning and so um both Cosmos and Neotron had big announcements last week. You know, they are
36:37
multimodal. They reason, right? You need them to be able to reason uh with you.
36:43
And and what they're also able to do then is with this reasoning capability, a Gentic, you're going to go have the
36:51
agent do work. And what do you need to do work? You need to go tap into a knowledge base to understand something
36:57
about a subject matter. You need to go use a tool that you might have used way in the background. That tool could be an
37:03
electronic health record system. uh or you need to uh create a skill that
37:08
is you know every time that I'm with my patient and we say we need to get you an MRI you actually go deploy a skill that
37:15
says let me go check you know the next nearest MRI appointment that might be available to my patient right you can
37:22
see how knowledge and tools and skills are now surrounding the model and so
37:28
that's what they call like these agent harnesses and then the application developer really specifies the orchestr
37:34
ration of this, right? It's like I know how my I know how my hospital works and so I'm going to specify the
37:40
orchestration of this and then I need to give it access to the knowledge to the tools and to the to the skills. And so
37:46
we want to make sure all of that's available and again you want you want that to maybe run in a lab in the
37:52
doctor's office or on the cloud and have choice. Yeah. And just going back to what you started with, which is like there there
37:58
there was a bit of a to get on prem in a health 95% of healthcare globally is on
38:04
a Windows operating system. It's wild, right? It's it's a it's a stat that not a lot of people think about. And as you
38:10
think about the hardware shift to your point, these capabilities are going to come together with a platform that can
38:16
run this seamlessly. And I think it's going to start to accelerate a lot more
38:21
than what we're seeing today, which again has that slight sort of mild barrier to get to the cloud. Is
38:27
everyone, you know, does everyone have the right budget or the right team to to really leverage all this on the cloud?
38:32
And to your point, this inverted triangle, I like the way you think about that. I think that's really exactly
38:37
coming from hardware all the way up to to the largest models. Yeah. But but I guess where So again, we're
38:43
we're here because we all live this every day. What's happening in the future? what's coming. What is the
38:50
constraint in your mind? Like what is the constraint stopping a health system from like really being able to achieve
38:57
this? Like what what will just unlock uh the field to run because we're still not
39:02
there yet. We don't fully see it yet today. So what is the constraint in your mind? Yeah, I I guess I have I have maybe two
39:08
that that come to mind. I mean to to your point of people's definition of what AI is is is still evolving and just
39:17
as you said the magic is going to happen and it happened with me right as a non-developer right a lot of the current
39:24
AI we're living in is is is coding agents that are just amazing at that
39:29
craft well imagine you put this on any in the hands of any any doctor or health or health care professional in general
39:36
and what might come to mind of what problems they might want to solve, but they need to be able to know that they
39:42
have access to do that. And that still is going to take some time, which is, you know, I loved how Jensen said we we just reinvented the PC for the first
39:49
time in 40 years. That reinvention to put it into the hands of thoughtful
39:56
professionals from any domain is going to blow the use cases open, right? I
40:01
mean it's it's magical what it what it did for coding and it's a necessary condition but now you can just think
40:07
about solving almost anything but they they need to be empowered to do so they need to have the right infrastructure
40:13
which could be this agent PC they need to have you know the ability to now um
40:18
you know access some of their data but do it the way they do it on prem now it should be all within the firewall and
40:24
we've now just literally in the last 48 hours kind of unlocked that potential
40:29
condition to do everything in your firewall on your PC and start to, you know, give the capabilities that, you
40:36
know, high-tech companies have been throwing a lot of muscle at where that doesn't always exist into some of these
40:42
ind industries. So, I think that understanding we've got to really accelerate that and now we have the
40:48
infrastructure that's coming out to to say that's no longer a problem. Now, it's going to be more about education
40:53
and making sure that you do all the right things from an IT perspective that are necessary. And then when we're
41:00
talking about the open models front, you know, things like that, you know, data is still a challenge. You can talk to
41:06
any pharmaceutical company here. You can talk to any health care system. We're still not AI data ready. Um, and so
41:15
there's a lot of potential. You know, there's there's great companies like Snowflake and Data Bricks, um, who are
41:21
really trying to help enterprises get their data into a place that it can be operated on because agents are useless
41:27
without data, right? that that knowledge base and or the other amazing thing about agents is they're always running.
41:34
So, they should be able to pick up and sense this bit that changed over here and it should alert you that something's
41:40
going wrong. And and that that statement I just said, imagine having that always on patient monitoring system in your uh
41:49
environment. It it's going to be huge. And therefore, you're moving away from you're prompting the computer to it's
41:55
prompting you. Um but that data unlock or you know at
42:00
least organizing the data getting it data ready getting it agent friendly um
42:05
and in every sort of domain situation has its own challenges. I mean right we
42:10
work with um companies like Tetra Science who are trying to take all lab data and get it into an ontology that
42:18
can be used for scientific workflows. It's a scientific data platform, right? And so we've got to really, you know, we
42:25
work a lot with those partners as well. And we're we're saying again here, how can we bring the compute closer to the data so you can work really fast
42:32
because, you know, the the challenge now is you have to move at the speed of thought, right? You have your next idea,
42:38
you want to go, you want to go. And whole point is iterate, turn, iterate, turn. If you have the data, if you have the data,
42:44
and you have the knowledge to know we're doing that. Well, we just we just finished. So we just as an example, we just finished our
42:49
our course at Stanford. We teach every, you know, quarter course on generative AI and healthcare. And this is the first
42:55
time we've done this. To your point about the the domain experts having ideas and being able to act on that with
43:01
some of the coding models, we asked them to build a solution and and a and there
43:06
was a there was a little bit of resistance initially. There was a lot of resistance, right? They were like, I don't know how to code like are you crazy? like you
43:12
know and we're like no just trust us that you're is once you get past that initial barrier and and you saw the
43:19
light bulb switch on with folks from across the health system certainly in the business school that were in our class and I think that's the that's the
43:26
final unlock I think there's the capabilities are starting to come into focus and it's it's bringing that domain
43:32
expert getting their head around that they can now build things that solve problems for them in their specific
43:38
domain without needing to have you know again a full product life cycle, whatever else to accomplish something.
43:44
It's amazing. It's an amazing time. It really is. It's an amazing time. And I think one of the interesting things I spend all my time with health
43:50
systems. How do we unlock this? How do we move faster? The data infrastructure is almost probably the worst in
43:57
healthcare of any large enterprise industry. um where there's huge migrations still to do many different
44:03
reasons for this many different silos but getting them now and now people are starting to really engage on we have to
44:09
get that at a place where we can unlock and use it and then the other thing I find so interesting is many people are
44:15
saying well hey and in general for healthcare it's why don't we just wait let's just wait we'll wait for the next
44:20
model let's wait for someone else to prove it will get better and like it's true like of course uh this interesting
44:26
part you mentioned though is like people and this is where I find myself spending time and I'm curious how how you do this which is
44:33
people aren't going to shift overnight like this right and healthcare is what you know the largest employer in most
44:38
states right and how do we start training our people because that you can
44:44
wait to deploy a model you know uh in a year but you can't wait to start training your people and so I'm curious
44:50
how you all are engaging how we need to kind of get out the word for healthcare it's part of the reason
44:57
we we agreed to this But what are you seeing? What are different people?
45:08
Well, I guess I'll make an observation and well, first of all, it was Menllo Ventures observation in data that said
45:15
healthcare systems are deploying enterprise AI three times faster than
45:21
the economy. This is the first time in history. That tells you what's going on here. And you look at what companies are
45:29
driving that, those are companies like A Bridge and Ambient Voice Technologies.
45:34
Why? Because they're solving an absolute acute catastrophic problem in the
45:40
healthcare system here in the United States. But it's a global phenomenon. And they've solved it in such a way
45:47
there's zero barrier to entry. It's may I record this conversation on this
45:53
phone? Click. The agent system gets to work. Okay, they now get 30 or more% of their
46:00
time back. Um, and work is being done in the background that they are still
46:05
completely in the loop on and they get to do the the final exquisite work and check off on everything. So,
46:13
the other company that comes to mind is Open Evidence. Having the world's most upto-date,
46:21
richest medical knowledge in your pocket. that is so exquisitly designed
46:27
that it can read and think and communicate with you like you were trained as a physician. It can go
46:33
through the papers and present you the data um in just the right form factor that you would want it. It's really hard
46:39
to read these papers, especially overnight call shifts and yes, all the other things going on.
46:45
And then and then uh imagine imagine this amazing capability they unlocked earlier this year is as you're having
46:53
this conversation about a particular patient. They might see that there's some inclusion exclusion criteria in
46:58
there to connect you with a clinical trial that is so hard to do today and is
47:04
such a such a slowdown of patients getting access as well as um drug companies making progress in clinical
47:10
development. And so if I just use those two examples, it's they're so they're so well made, so
47:19
easy to use that now the health care professionals can't live without it. So, I would say how does that come back to
47:25
education? They need to use it. They just need to engage it. They don't have to build it
47:31
at the get-go, but the faster you or somebody else in that health system
47:36
could make something for them to just start using it, it will build trust. It will it will
47:42
build the feeling like, I can't believe I didn't ever I I have I didn't have this before. And how would I if you took
47:48
this away? That's how you know, right? If you say if you take it away, I'm I'm going to have a way worse work life balance or
47:55
way worse work experience. But step number one is just engage it and use it. And then step number two is how do we
48:02
get you to be somebody who could be a builder of it. Right? These are all highly trained medical professionals
48:07
who've dedicated their life to this. You know, they have a craft. You can just like you and I. And the way that I want
48:14
to get my daily calendar looks different than the way you want. I mean on the simplest form, but so I get to go train
48:20
it the way I want it and that's empowering. All right. And so that's kind of the next phase of it, right? And so I I
48:26
think I think but just the first is just to touch and use it. Yeah. And one of the things I'll mention just
48:32
about the adoption like it I think that the the interesting about both those solutions you brought up massively
48:38
popular and you don't at least I don't I don't immediately think AI. I think just
48:44
solving pro like it's a problem that I'm thinking it's solving. And that I think is a a huge shift that when you know
48:50
it's working and you know it's well adopted. You don't call it AI anymore. You just call it this is my solution for
48:55
notes. This is my solution for evidence that I need to take care of my patient. You know what I mean? It's kind of an interesting
49:01
because you're not calling it when you call it AI. It just feels like a a piece of tech or or a tool when you're saying
49:07
let me show you how I can make your life better every single day. Totally. Like who wouldn't listen to that? Who
49:12
wouldn't want to engage that? And then let's and then measuring it I think is a really important thing, right? When you
49:18
go into these when you go into these like trial periods or whatever or just users like really learn how they're how
49:25
they're using it and what benefit they're getting out of it because the the fact of the matter is these these things are very easy to customize and
49:32
evolve. And so if it's just missing on this one thing, don't let that kill it. Say, "Oh, give give me a second. We'll we'll go fix it."
49:38
Yeah. You don't have to wait two years for that feature to get shipped. like it will be there if you have three year installment, three years of
49:44
learning how to use it, you know. Yeah. It's not it's it's just kind of over there update. It can be fixed just by a
49:50
prompt. Yeah. It's it's this very different which again is a new muscle. It's a new
49:55
way for people to adopt. It's a new way for people to expect change. Um and then the building part you mentioned is
50:01
fascinating. And so I'm curious when when is that you know we could pick a number we could pick a way to describe
50:07
it but like when are let's pick when are 20% of people in healthcare
50:14
prediction both both of you so Matt actually Matt M when are 20% of people in healthcare going to be building
50:20
and customizing their own agents not just the adopter like documentation what's what's your timeline
50:27
um if you if you count like the things that you kind of talked about just small
50:33
customizations like I like to have my O schedule at this particular like all the you know every physician has their own
50:38
list of things that they like their way I I would say it's within the next two years I think the tools are
50:45
being deployed at a scale that I haven't seen before I mean I'm c you do this like with qualify to hear your answer
50:50
too uh adoption is different at different institutions when there is a CEO and
50:59
seuite top- down mandate that we're taking a direction that this AI again AI
51:05
isn't an innovation this is a transformation and a direction that we're going and we all are expected and
51:11
they even are talking about the different automations that they're doing and again I in healthcare I like to use
51:17
the word automation because agents AI it gets people in a different thinking so
51:22
like hey there's things you do multiple times a day how can you automate that if you do something three times a day that's pretty straightforward why not
51:28
automate it correct and so there we're starting to see, you know, cases where you have 20%
51:34
of an institution kind of using AI and customizing to to some level. Um, and so
51:40
I and you have other institutions where AI is a pilot project on the side of a
51:47
small team. And so there's just huge differences. But I I think at particular institutions, you'll see that 20% number
51:55
like you're seeing it this year. Um, okay. I love it. Are you saying this year too
52:00
or what are you I'm I'm in I'm in for it. I mean if if I'm any you know testament
52:06
of like you know doing it myself because it's just it's really intriguing and uh
52:11
it can it can be very to your point of automation. It can be very powerful to free my mind. I mean this is what we
52:18
want. We want every health care professional operating at the top of their license. Automation is the way to get it there.
52:25
And so if they could if everyone just could believe in that I because I I believe it's true. Uh I think it will go
52:32
it will go very fast. And they you know every medical professional touches a computer today. They all have to touch a
52:38
mouse and a keyboard. Um you know and there's just so so much that you know we
52:44
could put in their hands to empower empower them to do their their amazing work. So I'm excited this year. Let's do
52:52
it this year. In certain cases. in certain cases. Now you're hedging. No, no, I said I said certain cases. I don't absolutely
52:58
do not mean globally. Well, thank you so much for being here with us again. You're our first official second guest on the pod and we're just
53:05
hope we have you back soon. Yeah, absolutely. I'd love to. It's good to see you guys. Thanks.
53:13
as someone who's gotten a reveal on data that's been positive where I've had the
53:18
the honor to present you you're just at a moment you you remember that moment when you're sitting
53:24
in front of the computer or sitting in the meeting and the company or the agency shows you that survival curve
53:31
and you're like you know it's that moment and you think about all the people you've treated and all like you just
53:37
like you you just Yeah, but then you gota you got to pivot. Yeah. Okay, how we how are we going to
53:44
improve this? Where else does it go? Yeah, please let's get it out there. So, where where do you see where are
53:51
things going to change? Right. You know, I think you know we've talked about again that survival curve science that
53:58
has been true for decades now in medicine and we've seen amazing advances. uh you know we're here right
54:04
Stanford Health AI week talking about you know a particular topic but where do
54:09
you think changes are going to happen where do you see that you know whether in trials as we were talking about or
54:15
how you're delivering or doing research what do you think is coming you know one of the initiatives I started at city of hope was an
54:21
integrative oncology program and the reason I did that is because number one
54:27
we can't ignore what eastern medicine brings and we seem to accept things that
54:32
we seem are traditional scientific oh that's a chemotherapy and it's a traditional compound but there are
54:38
plenty vitamin A and other derivatives I mean these are been around for long-standing times pletaxel came from a
54:44
bark and and a plant and so we accept certain things and we reject certain things and I believe you have to think
54:51
open mind and think of the entire patient experience so that is from
54:59
worried about cancer to surviving to longevity.
55:04
I think we have to put the same focus on the provider side. We have a nursing shortage. We're going to have an
55:10
oncology shortage. I have faculty that are burning out because they're typing
55:16
on a computer all day. And so I think there is an excitement around what AI
55:22
could bring in a meaningful, tangible, measurable way to start creating
55:27
efficiencies. And I can't wait for that. equally important on the front side
55:33
where if we can accelerate acrruels to clinical trials, help people find them earlier, not as a lastditch effort. We
55:40
know that the regional and community based practices don't have access to as many trials as academic centers and 80%
55:48
of our population is not getting that out of the gates. These are the things that I'm excited about and I feel can
55:56
absolutely happen in the next 5 to 10 years based on the platforms that are
56:01
being built. Quantum computing that can come up. I mean we have a server shortage right now and we're going to we
56:07
need to build people I don't think understand how much power and cost you turn city of hope into data centers.
56:13
That's another we have we have lots of lots of land in both campuses. 122 acres in Dwarte and
56:19
65 you guys. That's right. So uh these are the things that I think are rate limiting steps but
56:26
can absolutely accelerate the science, accelerate the patient experience and preserve our workforce.
56:32
Yeah. Well, you know, I think a lot of people let's rewind the clock. I think with AlphaFold some of the I would say some
56:38
of the traditional protein and the impossible problems and we saw the breakthrough obviously you know Nobel
56:44
prize it was major achievements and I think one of the questions that was asked is well you know besides just the
56:51
general impatience for when is this going to start changing you know how quickly we get new drugs in the market
56:56
but even ignoring that I think it's opened the aperture for what are all the problems and opportunities along the way
57:03
in from you know drug development, target identification, all the way to a survival curve. And I think to your
57:10
point, you're kind of seeing it across the spectrum from where you sit. And you you pointed out a couple big things. I
57:16
think one was, do I even know about the trial cuz there's so many. Do I even know that this patient's eligible?
57:22
That's just an information problem at some level, right? And then there's can I select them and refer them? And then
57:28
to your point about the holistic care, are there other is there evidence I don't read in
57:33
different journals that also may help? So like I feel like you're pointing out that there's this kind of arc of
57:40
information that we're starting to get our hands around in ways we haven't before. Is that is that kind of how
57:45
you're seeing it? Yeah. If you just look at different segments, uh I mean how many drugs have
57:50
been sitting on the shelf Mhm. in different companies, different warehouses that may actually confer
57:56
activity now that the science has caught up at least to a certain degree. And the exciting part is we're learning more
58:03
about each individualized person as a as their own experiment and of one as
58:10
opposed to grouping you in with a bunch of folks. uh can we decipher back in
58:16
clinical trials that were negative? But I guarantee you every time I tell somebody the benefit of of being in a
58:22
clinical trial is that there's always a few people depending on the size who actually benefit. It just didn't get the
58:30
number that needed to produce a statistical p value. So can we actually
58:35
find those people, their characteristics, their data, apply some of these drugs that have deemed to be
58:41
not so successful or marginally successful or proof for under indications and bring them back into the
58:47
fold. This is where you could just see the multiplier occur.
58:53
What do you think is achievable? You talked about clinical trial recruitment. You know, this has been a problem for
58:59
ever. You know, you talked about new targets, new folding, etc. Most of the cost happens later.
59:05
Yeah. Right. On trial recruitment, what is achievable? You know, you mentioned 5 10 years. What do you think is achievable
59:10
in the next two years? How how many more patients can we get on trials? How much easier can it get? You know, because
59:16
there's always this technological capability, but then like adoption across healthcare. So, you sit at that
59:22
intersection. What do you think is achievable? Well, I tell you, uh I I took over the system clinical trial job at City of
59:30
Hope about two two and a half years ago. So, I can give you that window. Uh, I had to restructure it. We're a
59:37
system that's not just a campus model, and you should never think you're just a campus model because that ignores the
59:42
surrounding community. We built our new campus in Irvine. We
59:48
acquired campuses in North Chicago, Atlanta, and Phoenix. This gives us 40
59:53
sites across four states. Now, how are you going to maximize that? I
59:59
restructured the office. No AI here. This is just brute brute strength. This is old school.
1:00:04
That's right. Old school. That's right. Pull up the sleeves. And I told people, we're building superighways. Now, you
1:00:11
got to drive the car, but we're going to make sure those lanes are open. Maybe there's express lanes that are open. And
1:00:17
our enrollment numbers have been beating record after record. We crossed 1,400
1:00:24
interventional treatment acrruels last year. We're going to cross over,550 this year. a single month in our system. The
1:00:31
high was 156 patients in one month acrewed in January. That was until we
1:00:36
hit April and had 171. And that's just interventional treatment. That's with a therapeutic.
1:00:44
We're enrolling hundreds of more in the non- therapeutic and other realms. So that's just brute strength. Now you add
1:00:52
technology to create efficiencies to empower the local physicians to drive
1:00:58
efficiency with time so they don't have to hunt and they don't have to look. As a specialist, I know what trials are
1:01:05
open in lung cancer. I always did. And my first five patients in my clinic are lung cancer, lung cancer, lung cancer,
1:01:10
lung cancer. When you're in a community practice, your first five patients are lymphoma, headneck cancer, breast
1:01:17
cancer. That's already covering 300 trials. You're not even going to start. Yeah. Because then you'll delay things. Your
1:01:24
patient satisfaction press gaining scores will go down. You'll get dinged by your system. It's a it's a self-fulfilling prophecy. So this is
1:01:30
where I see opportunity. Empower those frontline providers who are where the
1:01:36
patients are. Meet them there and literally put the tools in their hands to empower this. the companies if you
1:01:43
shaved two months off of enrollment what is that a cost of at net present value
1:01:49
if you improve it by another month after that this we're talking things I would
1:01:55
have loved to have seen this data from pancreatic cancer last year at ASCO because then it would have meant the
1:02:00
trial occurred faster one year of people that could have taken this drug who die
1:02:06
so quickly from pancreatic cancer think of the lives saved and the lives benefited
1:02:12
this is how we have to how how to measure it together. Do you do you think that the I mean the way that you're setting up the infrastructure my guess
1:02:18
is you're also layering on top of that uh the the the data and sort of AI
1:02:24
connectivity piece like is there a world where um you know centers like yours are
1:02:30
able to start kind of tapping on the glass of that we've been talking about forever which is this digital twin concept where do I need to have a
1:02:37
placebo arm or not because it just there's some things you just wonder is
1:02:43
this ethical at some level, right? We know we have to do it for the betterment of the science, but are we are we almost
1:02:49
to a place where the technologies at such that we can actually run a trial with a virtual arm like that?
1:02:55
So, and I'm going to commentary a little bit here. So, first part of the brute strength was what are the easy things to
1:03:01
take hurdles out of the clinician's way. We I created a a program called Hope Pathways. And what it does is on three
1:03:07
clicks, you can actually see if you have a patient with lung cancer in front of you, exactly the trials that are open
1:03:14
and at your site in three clicks. And if it the symbol is green, it means it's open. If it's red,
1:03:20
it's it's not open. And this is simply just information surfacing information that straight from the Encore uh or whatever
1:03:26
your CTMS is straight in there. So study coordinator changes the field, it changes the color.
1:03:32
Interesting. It's so visual. It's so quick. You didn't waste any time and you can see right away. Now, if there is a
1:03:38
trial, you can actually get the information with another click and with one click, send an inquiry to a
1:03:46
centralized study coordinator who will answer you within 24 hours and start
1:03:51
looking at the eligibility. Simple. Keep it simple. Make it easy. So, that was a way we empowered our
1:03:58
frontline folks. To answer your question about digital twins, again, I always like to lean in front of the patient.
1:04:05
And we know that there's benefit in in some drugs, but maybe not enough. As
1:04:10
someone who actually chaired the central IRB for the NCI for over 5 years, I
1:04:16
understand patient safety. I I understand these things. I feel like we
1:04:21
are too cautious in our drug approvals. Think of the number of drugs we've
1:04:27
actually over time and indications that we've actually had to pull back. I don't think it's enough.
1:04:34
Okay? If you're a 300 hitter in in baseball, you're an all-star. You're a Hall of Famer. I'm not saying we should
1:04:40
use 300 as our level, but it certainly shouldn't be 99%. I think there are people benefiting out
1:04:46
there. You you want to make sure it's safe, but as long as you're doing no harm, I
1:04:53
think it's okay. So that that's my informal commentary of if we can speed up the process, speed up the reviews and
1:05:01
and have a bar to let people try these drugs out there,
1:05:06
you might learn actually that some are more effective than they're not or others. Th this is the really interesting thing
1:05:11
actually. We had Amy Abernathy on before where she was at the FDA and different roles on the data side. And
1:05:18
as we have better and again this is another AI part separate from drug discovery post deployment monitoring we
1:05:25
can lower the bar if we get to an a safety threshold to get things out in the wild. And then if we actually set up
1:05:31
as a infrastructure and this is bigger than any system but a system can do it at an individual level and then start to
1:05:37
scale this out then you can actually move a lot faster to take things off that you don't see right you know what
1:05:43
what is the uh rate that we should be doing that again arguably lower than 99%
1:05:49
as just how much that would increase the throughput of what we would get to see and and the tools make that ever more
1:05:56
capable today right the information retrieval that we can get in structured and unstructured
1:06:02
imaging to actually be able to monitor for this is at a completely different level with the tools. And so I love
1:06:08
that. I love that vision. And and to answer your question about control arms, placebo arms, digital
1:06:13
twins, look, the drugs we had in the past, you had to have very strict eligibility criteria because the
1:06:20
benefits were measured in days, weeks, or months, small number of months. It was a
1:06:25
two-month improvement in lung cancer for the longest time to get that point8 hazard ratio. We don't want those drugs anymore.
1:06:32
Yeah, we don't want them. So my my push and we've worked with ASU when friends of friends forensic cancer
1:06:38
research with the FDA, Rick Pazer, with the NCI with CEP is to expand eligibility criteria. Why are we
1:06:44
excluding people for non-scientific reasons into clinical trials? They want to join. They can't because we are
1:06:51
unnecessarily doing it. and that will prevent this exclusion.
1:06:57
I think we can absolutely use historical standards and we're biasing against rare
1:07:02
cancers and rare diseases by setting up these models. How are you going to run a placeboc controlled arm with a incidence
1:07:08
of a biioarker of 0.1% with effective therapies? And yes, everybody's punting
1:07:14
to early stage now. So, they're running the randomized trials in early stage, but pretty soon we're going to be like breast cancer. We do we really want to
1:07:20
run a 10,000 patient study to prove one aromatase inhibitor might be better than the other by one to two percent. I don't
1:07:27
think so. I hope we don't go there. Well, and and this kind of goes back to one of the threads that that has has come up probably since we started this
1:07:34
this podcast, this conversation with different leaders is the the patient is
1:07:39
now empowered in a way that that maybe has never happened before. In other words, like you know, they're going to
1:07:46
be looking for that uh old drug that's now a generic that's not being used anymore. They're going to be like asking
1:07:52
questions. What possible thing would would work for my specific cancer? And
1:07:58
they're putting their lab values and they're putting their biopsy results, their genetic, you know, profile of their tumor. And I think that's going to
1:08:05
push us if if there's not a, you know, a concerted effort on our side to to have
1:08:11
to make some changes as a system. And I think physicians as you know front on the front lines are looking at cases of
1:08:18
compassionate use which drugs can they possibly and then we've heard stories of folks going so far as to push the
1:08:25
development of mRNA vaccines for individual cancer and so it does feel
1:08:30
like there's a push pull here. I think there's a willingness on almost all parties to do something but almost we
1:08:36
have a new voice in the room for the first time. the patients are saying they're standing up and saying I'm empowered to take advantage of my own,
1:08:44
you know, technology I have available to me and address my healthcare problems. You know, we have we have two very
1:08:49
important sayings in research at City of Hope and and these are the things that we live that are literally our our
1:08:56
moonshots, our guiding force, our northstar. One is every patient who comes to us deserves the opportunity to
1:09:04
be on a clinical trial. That's one. Number two is speed, scale, serve.
1:09:11
Speed to activation, scale to multiple sites to serve that
1:09:17
end user, the patient, to empower that provider. And I welcome the patient
1:09:22
dialogue. It's no different than somebody who printed out a 100 pages off of AOL, off of their net search, and I'm
1:09:30
sure it took them 24 hours to do that search and just to get it loaded. And and that that forces the clinician, the
1:09:37
scientist, the researcher to up their game. Yeah, that's right. You got to be on top of that. That's what competition builds. And we we
1:09:44
thrive on that. So whether it's academic centers against each other, scientists against each other, or the
1:09:50
patients and their advocates and their the people who are rallying around them to find every piece of information
1:09:57
possible, I welcome that. I think that is great and it's such an important voice in this whole conversation. 100%.
1:10:04
Yeah. So, so I want to I want to come back to you've mentioned so many interesting things, so many interesting
1:10:10
improvements. What is the constraint? What is the constraint holding us back from from
1:10:16
that vision that's possible? You've mentioned so many different ones like if what is the one that if we removed we
1:10:22
would just we would just be in a different different place. Well, I I view it as a a and it's kind
1:10:27
of the same thing. It's a resource constraint. It's whether it's the person's time who's helping develop
1:10:33
these tools, whether it's the resources accessible to them. You you've heard about great tools, but we need
1:10:39
structured data. Now, how deep do we go back to fix all the data flaws that
1:10:46
we've had because the worst thing we can do is to rush it and have a biased uh decision- making. That is we cannot have
1:10:54
that situation. You will lose the trust. It will all fall through. So it is what is the problem to be solved? How deep or
1:11:02
backwards do you go to solve it versus just going prospective and who has the time and the resource to
1:11:08
put in? And I'm glad we have partnerships with industry. I'm glad we have partnerships with technology
1:11:14
companies who are doing this. Before the limiting fact was the semiconductor and the microchip. That's changed. Now it's
1:11:21
going to be water and power and resources. Uh but I I view an really
1:11:29
exciting chapter coming up for people with all types of chronic diseases and health ailments to be able to benefit
1:11:36
from this technology. And I think we all sense it. Uh getting biomarkers in cancer was such a pipe dream in in in
1:11:43
2000. In 2004, we reported two papers that had a total of 14 patients on there that
1:11:51
defined EGFR mutations. But it wasn't until 2012 that it actually became
1:11:56
publicly utilized into the patient. We need to shrink those timelines down and
1:12:02
it's happening which which is exciting. It's moving so fast that experts are now becoming dinosaurs like myself. So you
1:12:08
know it's okay. We need new smart people to come in and do this. Well I think I think to add to that too
1:12:14
and one of the last things I'll say as we wrap I think you know the technologic curve is exponential. I think a lot of
1:12:20
us could agree with that. Um, but it it it if you just pause for a sec just in
1:12:25
terms of looking back, imagine that you can put in all of the information about
1:12:31
the genetic mutations in a large, you know, readout that you would have had to shop around or wait months to find
1:12:37
someone. Do you know what this mean? Like what, you know, and the fact that a a model that's on your phone can start
1:12:44
to answer, it's just wild to me. and and what that you know what that ultimately means to me is that the the the barriers
1:12:51
to understanding your disease and the conversations you can have with your expert physicians is just it's it's
1:12:58
dissolving and it's just such an incred incredible time. Context is so important as we talked about in the sessions. If
1:13:04
you do genetic testing on yourself and your family and and and you get some results and you don't know what they
1:13:10
mean and you're just reading the footnotes, it's going to be a long Christmas vacation before you can get in front of a genetic counselor. So, it's
1:13:16
really important to have the context of the expertise behind it. And that's what I warn people, let alone the full body MRI. We're in
1:13:23
Silicon Valley up here a little bit programs this fall, but we're putting the right people together so that nobody
1:13:29
gets results until we go over it with them. So, uh, we we could talk for hours. I'm sure about that. Uh, Ed Kim,
1:13:36
uh, physician and chief at City of Hope. Thank you so much for joining us. Thank you. Thank you so much.
1:13:43
What I see is we're living in a time of unbounded potential. AI is part of it, but there's so much more. You all know
1:13:50
how much is happening with biology. There's so much potential, and yet our country is in this crisis. And one of
1:13:56
the consequences of the polarization and all, you know, all of the mess that we're in is we're we're not only are we
1:14:03
not seizing these huge opportunities, but we're destroying our basic capacity
1:14:08
for R&D. I have to say we've done what like 15 20 shows over the last year and a half with
1:14:14
leaders from across I mean literally tech, medicine, life sciences, even government.
1:14:21
Uh that has not come up and I'm surprised actually. So that well the idea about the funding of like
1:14:26
the some of the I feel like it's always been as an American
1:14:31
something that I could count on that the NIH, the NSF, the CDC, they're just rock
1:14:38
bedrock institutions that I know if it comes from that I don't have to like
1:14:44
doublech checkck it or think twice about it. Do you know what I mean? And like and and you're kind of maybe suggesting
1:14:50
that that has started to shift. And so tell us more about that because I think we're
1:14:56
that's very unnerving to hear as a someone you know clinician someone who you know believes in science you know
1:15:02
was funded by those institutions. Yeah. Yeah. Yeah. I'm living in a time in which so
1:15:08
many of the things we all took for granted for all you know all the years of our professional lives you can't take
1:15:15
for granted. and the ones you just talked about um federal research
1:15:20
agencies, National Science Foundation, National Institutes of Health, but also public health organizations, CDC, FDA,
1:15:28
that it it's um the funding that we knew was the bedrock of the innovation
1:15:34
system. everything else builds on top of it. Plus the trust in those institutions
1:15:40
to use scientific facts in making decisions about vaccine recommendations,
1:15:46
right? all of that is that where it really is that where it is that kind I mean just by the social
1:15:52
narrative and whatever that felt like where it we hit a branch point in the road in terms of people's belief or they
1:16:00
they always hold that as the point at which they changed their point of view whether it was we should believe in it
1:16:06
more and or we we don't believe in anything we're kind of nihilists about science and like is that or is did it go
1:16:15
back further than that because I actually haven't thought about it that deeply actually look if you step back what's happening
1:16:20
in our country is a national crisis that is the result of the polarization that
1:16:26
has grown over a very long time which grew out of you know record inequality
1:16:33
um too for too many people the American dream was became a fiction which is you
1:16:39
know heartbreaking thing to think about so we're at this very dangerous juncture as a country what That danger is
1:16:46
manifesting in the destruction, the attempted destruction, because I'm
1:16:51
not ready to give up, but the attempted destruction of one institution of our democracy after another. Look at the
1:16:59
rule of law. Look at people being shot in the streets for exercising their first amendment rights, the most
1:17:04
precious rights we have as American citizens. Horrible things are happening. And th
1:17:10
many of those things have immediate horrible consequences. The the gutting,
1:17:17
they haven't managed to gut it yet. The attacks on federally funded research and development have some immediate
1:17:24
consequences. Their clinical trials that got stopped in the middle. For sure researchers lives have been disrupted.
1:17:30
But the real issue there is that for years and decades into the future, there
1:17:36
will be fewer drugs to solve critical medical problems. We will have we won't
1:17:42
have the national security capabilities that we need. We won't have the next revolutions in technology that create
1:17:48
new industries. That's what we are putting at stake. And you know, so it's
1:17:54
a much bigger problem than R&D and science and technology. But, you know, that's the institution I'm fighting for
1:18:00
cuz that's the one I think I can do something about. It almost seems like it, you know, like it if I had to write a movie script of
1:18:08
like the things that have happened in healthcare and AI and science and it almost seems like with with this kind
1:18:14
of threat, this sort of change, this disruption. It's almost like the last minute, you know, AI with large is
1:18:22
coming in at a time when maybe we need it the most. I don't know if that's a weird maybe I'm too much of a techno
1:18:27
optimist but in terms of you're being a techno optimist. I am but I'm saying like in discovery and like information we just had a
1:18:33
it's amazing. Yeah. Right. And so like do you have a a balanced view in the sense that like
1:18:38
does does AI solve any or help solve any of these it can threats. Yeah. I don't think it's going
1:18:43
to deal with the threat I am talking about. I think it is a powerful force that because we're not wrangling it and
1:18:51
putting it to good use as a society quite yet. I have great hopes that we will. But when you don't wrangle this
1:18:57
disruptive force, I think it actually exacerbates our national crisis right now. I am so blown away by the
1:19:04
disconnect between the techno optimism of Silicon Valley and you know the tech
1:19:09
sector is just like they're high on how exciting AI is. And then have you seen
1:19:14
the latest polling? The latest Pew poll says that 50% of Americans think that AI
1:19:20
will do more harm than good. only 10% of Americans think that it's a it's going to be a net positive. And those numbers
1:19:27
are getting worse, not better. H how do we how do we fix that? Because again, we're we're here, right? We live
1:19:34
have been in Silicon Valley. We're we're optimists. Again, in some ways, you know, some people have called out DC is
1:19:41
more closely aligned with Silicon Valley than usual. And we can say whether that's good or
1:19:46
bad in a in a in a in a unique way. in a unique way. H but this this
1:19:53
there are incredible and we're here at the Stanford and Health AKI week. We're seeing incredible positive
1:19:59
the potential undeniably positive use cases that are starting to happen and come about and yet this public narrative and the
1:20:06
general public opinion uh is that AI is not a force for good, not a force for them or much more
1:20:13
concern. How how do we reconcile these things and how do we work to improve this because um if
1:20:20
we don't you know if we don't actually get whether it's funding attention
1:20:25
highlighting of the positives this is only it has been getting worse so what do we do what do we do about that I don't think it's a marketing problem I
1:20:31
think it's a facts on the ground problem and number one the I think the first
1:20:36
place to start when you think about this generation of AI it a lot of its power
1:20:42
is its breadth and So you're seeing applications in biology and medicine,
1:20:47
but of course that's one of 500 areas that it's changing. And if you are uh if
1:20:54
you work in customer service and that was the first area where we saw quantifiable powerful uh business
1:21:02
productivity improvements. uh Brenn Hoffson here at Stanford did the work showed I think it was a 14% improvement
1:21:08
in customer service productivity controlled experiment real world situation so like I I read that and I
1:21:15
thought that's a CFO who is very happy today right like a cost center got 14%
1:21:20
productivity improvement my customer service still sucks I'm very sure they fired people rather than paying them
1:21:26
more right so I so I I think it's a fact that it's causing problems for people I
1:21:32
don't think it's just you know that we we haven't explained it. We haven't explained how it works well enough,
1:21:37
right? Like that's not the problem. And and I think even in medicine um you all know because you you know the
1:21:45
whole game is to use this technology responsibly and really be thoughtful about what you're doing and if that if
1:21:52
it's done I think medicine is a place where people care and also it is actually a pretty heavily regulated
1:21:58
healthc care provision is a pretty regulated area and so it's I I I think there are enough right I think it's an
1:22:05
area where there are some controls in place so that that you can't just willy-nilly, you know, embed bias in an
1:22:12
algorithm or uh rely on an algorithm to make a life and death decision without a human in the loop. So, I think it's
1:22:18
actually one of the areas where I I'm more optimistic. I' I'd like to see us actually be able to use AI in more
1:22:25
health care applications, but I think that won't happen until insurers are confident enough to be able to assess
1:22:31
risk. So, I think there's a lot more work to be done there. But I think it's quite different if you look at labor
1:22:36
impacts because of business productivity enhancements in business operations. And it's very different if you look at you
1:22:43
know the first when I was at the White House we spent a lot of time thinking about generative AI and what the risks
1:22:50
would be and speculating about which would turn into actual harms. The first place I will tell you it turned into
1:22:56
significant harms was deep fake nudes which just exploded overnight. And you know we still haven't really
1:23:02
wrangled that problem. So there's a lot more work to be done. It's really interesting to talk with you about this because like it it kind of
1:23:09
pulls us a little bit out of what we typically focus on which is literally just a healthcare and I and and thinking
1:23:14
about other industries and how that impact and then trying to pull it back into our world. It's like so for us like
1:23:23
in at least as you know very well the narrative around the the amount of physicians and other well-trained
1:23:28
healthcare workers, nurses, others who are doing administrative work that is not has nothing to do with their
1:23:35
education, their training, the the mission that they're you know the reason they went into this field and peeling
1:23:41
that back is like a like euphoric victory and then maybe through other
1:23:46
industries that is maybe not the same, right? maybe that chunk of work is my
1:23:52
actual entire livelihood. So I I can see that tension, but the I think that the
1:23:57
side that we've found is that does it unlock the opportunity for doing more or doing different things? It's it's
1:24:04
complicated, right? In healthcare, it's it's also complicated in our world, too. But it sounds like the way you're kind of looking at the broader economy, it's
1:24:11
not just the narrative. It's actually literal dollars and cents that are being I guess maybe AI is an excuse. maybe it
1:24:18
truly is delivering the the ROI, but are you seeing is that the same kind of juxosition you're seeing where like it's
1:24:24
not all sunshine and roses uh to to peel back some of these tasks that we would
1:24:30
consider I would love to get them out of my way to do my to take care of patients for example. Exactly. Yeah. You know,
1:24:36
every doctor I've seen in the last year or so starts by saying, "Is it okay to
1:24:41
use AIDA?" And and and every one of them I ask them how they like it, and every one of them says how great it is
1:24:46
because, you know, it really sucked that they weren't able to look at look at their patients because they were looking at the computer. So, I think that's a
1:24:54
great example, and it's freeing them to be the doctors and the healthcare providers that they always wanted to be.
1:25:00
Uh but I think that this is why I'm uncomfortable with these sort of broad brush, you know, it will always be like
1:25:07
this or it'll always be like that because for you're right, for other people it's gutting the job that is
1:25:12
their livelihood. Um and and I think sorting that out the great sorting is
1:25:18
happening. What's happening is a massive experiment across all sectors of the economy simultaneously. And no one's
1:25:25
talking about it as an experiment. The thing I'm seeing companies do that I think doesn't really make sense is, you
1:25:31
know, CEOs are exhorting their people to use AI and firing people in anticipation
1:25:37
of and blaming AI when I'm not sure that's actually why they're firing people. But um I I would love to see
1:25:43
people be rigorously experimental and actually look to their employees and say, "You're the one who does this job.
1:25:50
Please spend 20% of your time experimenting and learning and and tell us what works and then share it with
1:25:56
your colleagues and you'll get rewarded for that. You'll share in the expansion of what we're able to do as an
1:26:03
enterprise. But I that's unfortunately that's not what I'm really seeing. I will say some companies here are doing
1:26:09
it and I can know that with a fact because like we we are doing it as a CEO of a you know hundredish person company
1:26:16
now. Uh but it's hard right and it's hard. We spent a couple days last week
1:26:22
on we are going to dedicate time to a hackathon to learn and build internal tooling and make things better. Um it
1:26:28
comes down from weekly we need to be sharing and learning and training each other on these tools and we're fortunate
1:26:34
to be in a place where we are growing as a startup and so like really truly every
1:26:40
job here we can keep and we can expand because we have infinite demand to work with systems. However, all of the jobs
1:26:48
are going to change. My job as a CEO is changing. What are the things I can automate to make myself better, to
1:26:54
replace what I was doing so that I can do more? And however, there's just like
1:27:00
very different narratives. And so I think I bring that up as an example because this is a little bit one of the
1:27:07
reasons I see this kind of disconnect between Silicon Valley and people spending so much of our time right
1:27:12
focused on these tools and what's happening what's possible versus the general narrative is not that is loss of
1:27:20
job work productivity and that's happening with some companies in the valley as well where cultures have been
1:27:26
destroyed. Um and it's just a very interesting time where to your point the
1:27:33
large experiment there are people taking opposite positions of how to motivate your workforce engage
1:27:39
your workforce. Hospitals are taking very different positions with these AI tools. Um we were just
1:27:45
talking about the future of research with someone of how you know you're able to get people on trials and do things
1:27:51
differently. Yeah. Um there's a lot of potential. Uh but it is interesting your point of you know is it
1:27:57
facts on the ground versus marketing. There are good stories to get out and it
1:28:03
is an interesting choice as a country of where and how do we want to focus and where how do we want to shape attention
1:28:09
um because it is again it is one of the most important issues I think that we have to tackle and I don't know that
1:28:16
anyone knows the right way to do it but we are facing it no matter what we choose. Yeah. Yeah. And I think I love being
1:28:21
experimental and every everyone that's taking a different approach is an experiment and I think we should learn
1:28:27
from all of them. That's good. Do you feel like so one of the things that like because actually this is one
1:28:32
of the origin stories of this the the podcast the format that we do is that it's changing so quickly. Yeah. And one of the things that I struggle
1:28:38
with and going back to the idea of fundamental research science is that like every time I see a this is my whole
1:28:45
thing every time I see a I tell my students this too. Every time I see a peerreview paper that talks about what
1:28:51
AI can and cannot do, I immediately go down and look at what model they're using and almost without fail,
1:28:58
it's an old model already. It is. I haven't used that model in I can't even remember the name of it at that
1:29:03
point. Like and and and so so like obviously we have things like archive and we're we're trying to you know adopt
1:29:09
some of the patterns of computer science, but in healthcare there's a there's kind of a cadence to things.
1:29:14
there's a culture to to how we process information and it it's on a completely
1:29:20
different timeline and so like when you when it talks about science funding another similar situation is like I
1:29:27
would get NIH grants and I would get the award notice and then the check comes 18 months later you know and right and so
1:29:34
by then I've got the entire experiment change so are are you feeling like yes there's some challenges with the
1:29:40
narrative and some of the political tension around the trust in institutions, but is that potentially
1:29:46
going to lead to hopefully an upside? I'm trying to be optimistic that we will need to change the way that we conduct
1:29:51
science, the way we fund science. So, let's talk about two things. Num number one, I think it's important to be
1:29:57
clear that the pace of technological change of AI tools is not the ch the pace of change in the world because the
1:30:04
world has human beings and organizations in it and we're the ones who exercise judgment about what we're actually going
1:30:09
to do with this stuff. And I find Arvin Nurayan and Sash Kapoor's work on AI as
1:30:15
normal technology to be sort of the only sane voice in this you know overhyped environment. So that's AI and and I
1:30:23
think it you have to recognize that it's moving fast but then what it means for everything else like you still actually
1:30:29
need peer-reviewed journals and and you know papers that have the rigor of
1:30:35
scientific review and that is that is going to take more time than you know throwing something into a chatbot.
1:30:41
That's number one. Number two is about the federal R&D system. And I think the challenge I think for those of us who
1:30:47
are fighting for it is to it in in the decades past it has been paradoxically
1:30:54
it's been the best system for publicly funded research in all of human history.
1:31:00
Societies have been funding public research back to the ancient Egyptians. No one has done it like the
1:31:05
ROI is incredible. I think I've seen data like it's well above economically economically it's
1:31:11
phenomenal in terms of quality of life in terms of you know all of what healthcare looks like it's phenomenal at
1:31:18
the same time it was inadequate for the future that we're trying to go into and so you know I think you just have to
1:31:24
confront that and recognize that when I'm an optimist and I know this country
1:31:30
is too big a deal to give up on and so we have to build again we have to get through this crisis and we have to build
1:31:36
again. It's not about building back to what we had before because what we need
1:31:42
for the R&D capacity for the country is to be clear about what our great needs and our aspirations are, you know, now,
1:31:49
not not in 1945 when we sort of set the architecture. It evolved quite a lot in
1:31:55
80 years, but the fundamental bones were set in 1945. Well, the world's pretty different.
1:32:00
China AI the deep inequalities in our society
1:32:06
that we have to deal with. So we've got a lot of you know the context is different. The same things fundamentally
1:32:12
still matter. The reason societies back to ancient Egypt have invested in research peace, prosperity and health.
1:32:19
Those are always the reasons. It's just how you achieve national security today
1:32:24
in our world is different. Uh health can't be just about more cures. That's
1:32:30
we're you can't just have more biology close this horrible gap in American
1:32:36
health outcomes. The the fact that there are three dozen countries with longer lifespans than than our wealthiest
1:32:43
country in the world is I think just a national embarrassment. And that's actually not going to get fixed with
1:32:50
even with AI. It's not going to get fixed by medicine. Right? So you have to reconceptualize what it means to improve
1:32:57
health. It's it's very different than what we've been doing for the last 80 years. I still want all the therapies.
1:33:03
Well, just to be clear, but it's not enough. I I I will take a different opinion. I
1:33:08
do believe some of these tools can I think one of the things that drove me crazy in medical school seeing what we
1:33:14
know and what gets done to your point in our health system, right? We have the resource, we have the capital, there is
1:33:20
this giant gap between that and like actually AI can tell me tell me about that. Like what do
1:33:26
you have in mind? example um we uh published some work actually earlier
1:33:31
this year uh across University of Texas with anthropic of identifying patients who've have gaps in their care in their
1:33:37
cardiovascular care. So you now with AI can go through thousands and thousands of charts both
1:33:43
the structured and unstructured information in the notes find these gaps in care and bring these patients in. This is again a gap between we know
1:33:50
these things. It has been impossible right to you talk about a primary care doctor for them to apply every guideline
1:33:57
they would need you know tens of hours right it doesn't fit but AI actually can apply those guidelines to every patients
1:34:04
and do this and so these gaps again this knowing doing gap right is something where actually AI can move us in that
1:34:11
direction it can't go all the way we will have other gaps I love that example and I actually think this uh one one thing I really have
1:34:19
struggled with is finding people who can who I I find people who know so much
1:34:24
about research and health almost all biology and biio medicine and then I find people who know so much about
1:34:30
population health and health outcomes but they're not that that's not a field where we have we're accultured to the
1:34:36
idea that R&D can change how how we do it underresourced it's now it's now
1:34:43
tragically disrespected after the pandemic despite the fact that these are the people that literally saved you know
1:34:50
like I I was living here. My home is right here and I was here when the pandemic hit and you know as our public
1:34:55
health officials who shut down things in the Bay Area and saved a lot of lives. But I what I always hear from the public
1:35:02
health community is we just need resourcing and I know they need resourcing but we also have to find ways
1:35:08
to bring innovation in to to change the fundamentals in this area. So anyway, I think so I think it's I'm
1:35:15
happy to hear AI examples but I think there are much deeper issues that we still have to get to. Yeah, absolutely.
1:35:20
So, we got work to do. We do. I mean, I think we're here to talk about and do do the work. Yeah. I mean, this
1:35:26
is this is one of the most exciting times. Again, we tend to trend optimistic to your point, but like
1:35:32
Well, listen, we need that. We need that because I think if you just read the news, it's easy to get to give up and
1:35:38
you can't give up. And I I do feel hopeful. It's why it's worth fighting for.
1:35:44
Well, I'm glad you're in the fight with us on this. Yeah. Yeah. Thanks for the chance to talk. Thank you so much.
1:35:49
Great to be with you guys.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

§3 Review 001 — Strategic Read

Candidate packet: EVSRC-2026-000253 — first wave-4 scaffold; normalizer should confirm assignment.

1. Rough metadata
source_platform: YouTube
source_url: https://www.youtube.com/watch?v=y81IfY-Cc1U
source_title: Live from Stanford Health AI Week
channel_or_org: Stanford Online / Stanford Medicine Health AI Week
hosts:
  - Matt Lungren
  - Justin Norden
primary_speakers:
  - Sue Sheridan
  - Chris Boerner
  - Kimberly Powell
  - Ed Kim
  - Arati Prabhakar
published_at: 2026-07-09
captured_at: 2026-07-11
capture_method: YouTube URL + screenshot metadata + full transcript paste
content_type: multi-speaker interview compilation / event coverage
duration: approximately 1h 36m
1. Rough metadata

source_platform: YouTube · source_url: https://www.youtube.com/watch?v=y81IfY-Cc1U · source_title: Live from Stanford Health AI Week · channel_or_org: Stanford Online / Stanford Medicine Health AI Week · speaker: Matt Lungren and Justin Norden with Sue Sheridan, Chris Boerner, Kimberly Powell, Ed Kim, and Arati Prabhakar · published_at: Jul 9, 2026 · captured_at: 2026-07-11 · capture_method: YouTube screenshot + pasted full transcript · content_type: multi-interview healthcare-AI roundtable / patient AI use / enterprise adoption / agent infrastructure / clinical trials / science policy · source_reliability_context: mixed high-authority practitioner and policy panel — patient-safety leader, pharmaceutical CEO, healthcare-AI infrastructure executive, oncology-system physician leader, and former White House science adviser. Strong for lived institutional constraints, strategy, adoption, research operations, patient experience, and enterprise architecture; weaker where speakers make broad predictive or vendor-positioned claims without evidence. · topic_tags_light: [patient_AI, diagnostic_safety, patient_reported_outcomes, longitudinal_context, AI_adoption, shadow_AI, enterprise_change_management, ROI_measurement, hybrid_AI, edge_agents, domain_specific_models, agent_harness, data_readiness, clinical_trials, trial_matching, research_access, provider_workforce, patient_empowerment, evidence, public_R&D, knowing_doing_gap]

2. People / authority context

Matt Lungren — co-host; Stanford Medicine / healthcare-AI physician and educator. Authority context: experienced translator between clinical operations, research, and AI deployment. He frequently pushes guests from broad enthusiasm toward measurable outcomes and real institutional adoption. His perspective is pro-deployment and optimistic, but generally grounded in healthcare delivery constraints.

Justin Norden — co-host; Stanford / healthcare-AI operator and investor-adjacent perspective. Authority context: strong on enterprise adoption, product deployment, and the changing healthcare technology market. He helps surface the product and organizational implications, though his framing is generally technology-forward.

Sue Sheridan — President and CEO, Patients for Patient Safety US; patient-safety advocate with direct family experience of diagnostic and system failures. Authority context: unusually relevant to OMNI’s patient-context, diagnostic-safety, longitudinal-memory, patient-reported-signal, and external-AI-companion questions. She is not speaking as a model evaluator or systems architect; her strength is exposing the demand-side and lived-care failure that institutional AI discussions often underweight.

Chris Boerner — Board Chair and CEO, Bristol Myers Squibb. Authority context: senior operator of a globally regulated pharmaceutical company making large AI investments. High relevance for enterprise change management, bottom-up experimentation, capital allocation, shadow AI, ROI measurement, data curation, and scaled organizational deployment. His examples are strategically valuable but naturally reflect a large-pharma executive perspective.

Kimberly Powell — Vice President of Healthcare, NVIDIA. Authority context: technically informed infrastructure/vendor executive. Strong relevance for hybrid deployment, edge/on-device inference, open and domain-specific models, agent harnesses, data locality, and compute architecture. Vendor incentives matter: treat specific NVIDIA models, hardware, and deployment claims as examples, not OMNI commitments.

Ed Kim — Physician-in-Chief and Senior Vice President, City of Hope Orange County; oncology and clinical-trial system leader. Authority context: particularly strong for oncology operations, distributed trial access, site activation, frontline-provider burden, research enrollment, patient empowerment, evidence delivery, and system-level trial infrastructure. His operational examples are among the highest-value parts of the source.

Arati Prabhakar — former Director of the White House Office of Science and Technology Policy and former science adviser to President Biden. Authority context: high relevance for national R&D systems, public institutional trust, labor effects, evidence cadence, and the difference between rapid model improvement and slower human/institutional adaptation. She provides the strongest counterweight to the panel’s techno-optimism.

Publisher / host: Stanford Online / Stanford Medicine Health AI Week.

Event context: recorded interviews from Stanford Medicine’s Health AI Week. This is not one coherent lecture; it is an anthology of five distinct strategic lenses joined by a common question: where healthcare AI is actually producing value, what constrains deployment, and what must change next.

Perspective / conflict notes: the video is institutionally pro-AI and hosted in a highly optimistic environment. Its value comes from the contrast among the speakers: patient advocate, pharma CEO, infrastructure vendor, oncology operator, and science-policy leader. The source should not be flattened into one consensus voice.

3. Suggested processing

priority: 4.75/5

depth: full_semantic

EVRUN needed?: yes

duplicate/sibling relationship:
Strong sibling to prior enterprise-AI adoption sources, agent-harness and hybrid-runtime sources, patient-companion / external-agent posture, oncology-trial-access work, outcome-intelligence, Knowledge Reservoirs, and the OMNI-as-workbench thesis. It is not a duplicate because it brings five different authority positions into one source and repeatedly grounds them in care failures, organizational friction, trial operations, patient demand, and national research infrastructure.

likely landing zones:
Thesis §1/§2 product identity · §5 wedge · §8 Sense/Decide/Act/Prove-Learn · §10 destination · §A trust/authority/permeability · §B AI substrate · §C governed capability exchange · CNS · Governed Resolution Lifecycle / REV-184 · Knowledge Reservoirs · Outcome Intelligence · Patient CNS · Federation · P35 external capabilities · BIZOPS/workforce · D7/Evidence Plane · Clinical Memory/Observation · trial-access and trial-execution deltas · Surface/Projection Map · Product/Operator Intelligence · Build-OS/eval · enterprise adoption/change-management posture.

4. The strategic read

Classification

Priority: 4.75/5
Depth: full_semantic
Authority context: unusually strong multi-perspective source; mixed patient, clinician, enterprise, infrastructure, research-operations, and federal-policy authority.
OMNI relevance: major.
Promotion posture: analogy_spine_candidate + section_sharpening + product_posture + Build-OS-practice + enterprise-adoption + patient-context + research-access.

This is not one new architectural revelation. It is more valuable than that: it is a multi-angle field validation of why OMNI’s care-first governed execution substrate is necessary, where it will face resistance, and what the product must feel like to become indispensable.

Core takeaway

The keeper is: healthcare AI wins when it closes a real care or work loop inside the user’s existing reality — remembering the person, surfacing the right evidence, reducing the knowing-doing gap, and producing measurable action — while preserving human judgment, institutional trust, and proof.

The source repeatedly rejects AI as a model demonstration. Patients use AI because institutions forget them, dismiss them, or cannot see them soon enough. Clinicians adopt AI when it gives them time back or puts the correct evidence in front of them. Enterprises scale AI when projects have accountable owners, measurable effects, and governed access to usable data. Trial programs improve when eligibility and availability become visible at the point of care. Public trust improves through “facts on the ground,” not marketing.

That is highly consonant with OMNI.

OMNI translation
A. Patients are already building a parallel longitudinal care layer outside healthcare

Sue Sheridan identifies the most strategically important demand-side fact in the source: patients are not using AI merely for isolated questions. They use it as a diagnostic journey, and it “remembers” them. She contrasts that continuity with clinical encounters in which the physician may not remember the patient’s history, has limited time, and may dismiss concerns. Patients arrive differently now: with wearable data, research, longitudinal conversations, and a stronger expectation of partnership.

This directly confirms the strategic threat behind OMNI’s patient-context thesis:

The parallel AI conversation is becoming the patient’s most coherent longitudinal record of concern, interpretation, and intent — even when it is not the authoritative clinical record.

That is why OMNI cannot be only the authorized action backend while ChatGPT owns the workbench. The product must receive, preserve, structure, compare, and govern the patient’s lived reasoning journey without blindly adopting it as truth.

This sharpens the Patient CNS / external-agent posture. Patient-generated and external-AI-generated material should enter as source-attributed candidates and signals. But OMNI must also preserve why the patient asked, what evolved, what was dismissed, what became more concerning, and what outcome eventually occurred.

Keeper doctrine:

A patient’s AI conversation may lack clinical authority while still containing clinically consequential longitudinal signal.
Patient-generated context is not noise around the encounter; it may be the only durable record of the journey between encounters.
External AI does not become the clinical owner, but OMNI must not discard the coherence it created.

Candidate pressure:

patient_ai_journey
patient_reported_diagnostic_signal
external_companion_context_packet
dismissed_concern_signal
diagnostic_journey_lineage

These should be deduplicated against patient-source assertions, conversation sessions, external-agent interop, Clinical Memory, and REV-184 rather than minted casually.

B. Patient-reported outcomes and safety events are a missing sensing layer

Sheridan makes a second major point: the healthcare system often has no mechanism to capture a patient’s report that a diagnostic failure occurred. Her family’s harms did not automatically become learning signals. She describes patient-reported measures as a “new layer of data.”

OMNI translation:

This is not simply “collect more surveys.” It is a missing post-action and post-non-action sensing surface.

The Prove/Learn loop remains incomplete if the system only reads structured clinical outcomes, claims, clinician documentation, and operational events. It also needs governed patient-reported discrepancy and harm signals:

“My concern was dismissed.”
“The diagnosis was delayed.”
“The treatment did not match what was explained.”
“The result never reached me.”
“I deteriorated after being told to monitor.”
“I sought care elsewhere and the decision changed.”

These reports are not automatically adjudicated truth. But they are high-value candidates for reconciliation, safety review, outcome linkage, and system learning.

Keeper doctrine:

A care system that cannot hear the patient after the decision cannot honestly claim to learn from outcomes.
Patient-reported harm is a governed safety signal, not merely satisfaction feedback.

Likely homes: Outcome Intelligence, CNS Prove/Learn, D7 evidence, Clinical Memory, REV-184 outcome linkage, safety-event workflow, operating intelligence.

C. The product must solve a problem so well that “AI” disappears

Kimberly Powell’s strongest product observation is not technical. Abridge and OpenEvidence are adopted because users experience them as solutions to acute work problems, not as AI projects. Once the tool works, people stop calling it AI; it becomes “my solution for notes” or “my solution for evidence.”

This strongly supports OMNI as the daily product and verb:

OMNI should be experienced as where the work gets done, not as a collection of AI capabilities.

Polaris, model routing, agent harnesses, source authority, and proof matter enormously, but they should recede into the substrate. The user should say:

“Put the patient in OMNI.”
“OMNI found the missing result.”
“OMNI says this cannot clear yet.”
“OMNI showed the open trial.”
“OMNI prepared the next step.”

Not: “I am invoking the AI governance layer.”

This also supports the wedge discipline. An elegant substrate without a painful daily problem solved at near-zero friction does not earn adoption.

Keeper doctrine:

AI becomes infrastructure only after the user experiences it as indispensable work.
The product earns trust by removing a real burden before asking users to understand the architecture.
Do not sell AI. Deliver the missing action, memory, evidence, or time.
D. OMNI needs a governed experimentation and adoption loop, not just a deployment plan

Chris Boerner’s segment is an enterprise-adoption field study. Bristol Myers Squibb enabled broad employee access, encouraged bottom-up discovery, then concentrated investment in high-value verticals. The recurring problem was not lack of ideas; it was organizational accountability, shadow projects, duplicate spend, unclear ownership, and difficulty measuring return.

This has two OMNI implications.

First, OMNI’s customers will not adopt through one centrally designed workflow. Providers, staff, owners, coordinators, and managers will discover local uses. The platform needs a governed way to capture those uses without allowing uncontrolled shadow AI.

Second, the system should distinguish:

cheap experimentation and literacy-building,
bounded local workflow customization,
organization-wide production capability,
high-risk clinical use,
capital-intensive strategic programs.

Boerner explicitly says small experiments may not justify detailed ROI accounting; large programs do. That implies a tiered evaluation burden rather than one universal approval process.

Keeper doctrine:

Experimentation should be cheap; authority should not be.
Evaluation burden should rise with spend, blast radius, irreversibility, and clinical consequence.
Shadow AI is often unmet workflow demand expressed outside governance. The answer is neither prohibition nor surrender; it is a faster governed path.

Candidate pressure:

experiment_to_capability_lifecycle
local_workflow_candidate
adoption_risk_tier
shadow_ai_demand_signal
benefit_realization_record
capability_investment_class

These likely compose onto capability governance, Product Intelligence, Build-OS, tenant configuration, eval rigor, and trust-horizon rather than forming a new domain.

E. Outcome measurement must attach to the loop, not float as analytics after the fact

Across the panel, the hardest recurring question is: what changed because AI was used?

Examples include:

diagnostic errors decreasing,
clinician time returned,
drug-development time reduced,
manufacturing variance identified,
trial enrollment accelerated,
knowledge delivered at the right moment,
care gaps found and closed.

Boerner describes the need to track spend and account for impact. Sheridan argues diagnostic error can and should be measured. Ed Kim translates faster trial enrollment into months saved and lives potentially reached sooner. The panel repeatedly moves from “interesting use case” to “what is the measurable delta?”

OMNI translation:

Outcome Intelligence cannot be an executive dashboard attached later. Each governed workflow should, where meaningful, define:

baseline state,
intended effect,
action or non-action,
accountable owner,
proof that the workflow occurred,
observed effect,
time horizon,
confidence and confounders,
benefit recipient,
economic and clinical tradeoffs.

The source supports the v4 elevation of Prove/Learn and effect observability.

Keeper doctrine:

A workflow is not improved because AI participated; it is improved only when the intended effect becomes visible.
Every important capability needs a declared outcome hypothesis before its success can be measured honestly.
The system should preserve stories, but it must graduate important stories into repeatable measures.
F. Hybrid deployment is not merely security architecture; it is capability placement

Powell’s “inverted triangle” is useful: general cloud models at the broad layer, domain-specific agents/models closer to proprietary knowledge, and the most sensitive or real-time work placed locally or at the edge. She also emphasizes closed-loop instruments, local agents, domain post-training, agent harnesses, and choice across cloud, on-prem, and desk-level execution.

The hardware/vendor specifics should not become doctrine. The architectural lesson is stronger:

Capability placement should follow data locality, latency, privacy, resilience, cost, and action-loop requirements — not a blanket cloud-versus-on-prem ideology.

This confirms capability_placement_policy, workflow-lane-as-unit, model-pluggable substrate, and BYOM posture. It also sharpens trust-horizon: a local model may have lower latency and better privacy but still lack authority. Placement and authority remain orthogonal.

Keeper doctrine:

Where a capability runs does not determine what it may commit.
Model placement follows workflow physics; authority follows governance.
The tightness of the loop, sensitivity of the context, and cost of delay should shape runtime placement.

Do not import blindly:

“Every instrument becomes a robot” as a literal OMNI product commitment.
NVIDIA’s named model stack.
open models as inherently safer or more governable.
domain post-training as the default answer when retrieval, tools, deterministic logic, or workflow design may be superior.
G. The model is a component; the harness, knowledge, tools, skills, and orchestration produce work

Powell explicitly says AI is not just a model. Useful agents require knowledge bases, tools, skills, and application-specific orchestration. The application developer encodes how the hospital works.

This strongly affirms existing OMNI doctrine. The source is valuable because it states the enterprise-facing version plainly:

models reason or generate;
knowledge provides context;
tools expose capabilities;
skills package repeatable behavior;
orchestration expresses workflow;
the organization supplies local semantics and authority;
proof determines whether the result can be trusted.

The caution is that “the application developer specifies orchestration” is incomplete for OMNI. In care, workflow authorship must include domain owners, clinical owners, policy owners, and operational users—not only software developers.

Keeper doctrine:

The model is not the workflow, and the workflow is not the authority.
The organization’s craft is encoded in governed orchestration, not merely in model weights.
Knowledge, tools, and skills become care only when ownership, authority, and follow-up are attached.
H. Data readiness is not an ingestion problem; it is an operational truth problem

The panel repeatedly says healthcare data is fragmented, poorly structured, and not agent-ready. Powell discusses ontologies and bringing compute closer to data. Kim warns that rushing over flawed data can produce biased decisions and destroy trust.

OMNI should resist a generic “data platform” interpretation.

The deeper lesson is:

Agent-ready data is not merely parseable data. It is data with known ownership, source authority, semantics, freshness, permissions, adoption state, and fitness for the proposed action.

This is Polaris territory as a composed trust layer, not a new ontology god-domain.

It strongly supports:

source_authority_map,
semantic reconciliation,
Clinical Memory adoption gates,
Observation verification,
D7 provenance,
field-level freshness,
trust-horizon,
knowledge partitions,
domain-owned truth.

Keeper doctrine:

Readable is not reliable; structured is not authoritative; available is not admissible.
Data becomes action-ready only when provenance, meaning, freshness, permission, and authority survive assembly.
I. “Always running” agents sharpen the Sense loop, but proactive sensing is not autonomous care

Powell describes agents that continuously notice changes and prompt the human, moving from “you prompt the computer” to “the computer prompts you.”

This is a direct affirmation of Patient CNS and proactive orchestration, but it needs OMNI’s guardrails:

Always-on sensing does not imply always-on intervention.
Detection creates a candidate signal.
The signal’s authority depends on source, freshness, model reliability, and context.
The next step may be monitor, request more data, notify, escalate, or do nothing.
Patient burden and alert fatigue are part of the decision.

The source reinforces the governed-resolution lifecycle rather than requiring a new proactive-agent primitive.

Keeper doctrine:

Continuous sensing creates more candidates, not more automatic authority.
A proactive system is safe only when it can govern silence, suppression, uncertainty, and non-action as carefully as escalation.
J. Clinical-trial access is an information-and-workflow problem before it is an AI problem

Ed Kim’s City of Hope segment is one of the strongest in the video. He describes the operational reality: distributed sites, frontline clinicians covering many cancer types, hundreds of possible trials, and no time to hunt. His solution starts with “brute strength,” centralized operations, current trial availability, a simple visual interface, and rapid coordinator response. AI can later amplify that functioning operating model.

This is a direct validation of C3.7:

availability truth matters,
source authority belongs with the site/CTMS,
the clinician needs current, local, site-specific options,
matching must create a navigation obligation,
one-click inquiry is more important than an impressive explanation,
frontline workflow fit determines accrual.

The line “speed, scale, serve” also maps well to OMNI’s wedge philosophy, though it should remain attributed rather than adopted wholesale.

Keeper doctrine:

Trial matching without current slot truth and a closed navigation loop is search, not access.
The best research intelligence is useless if the frontline clinician cannot act on it within the visit.
First make the operational highway real; then let intelligence increase traffic quality and speed.

This source should be cross-linked heavily to the trial-access addendum rather than generating parallel primitives.

K. Patient empowerment is not a threat to clinical authority; it changes the relationship around it

Both Sheridan and Kim reject the idea that informed patients are the problem. Patients arrive with research, AI conversations, biomarker data, and treatment hypotheses. Kim explicitly welcomes this because it forces clinicians and researchers to “up their game.”

OMNI should preserve the distinction:

patient authority governs consent, relationship, preference, and what treatment they accept;
patient-supplied information enters with provenance;
desire does not become indication;
clinician authority does not permit dismissing or erasing the patient’s reasoning;
disagreement should become visible and resolvable.

This is REV-184 in product form.

Keeper doctrine:

An informed patient is not an authority violation; they are another actor bringing evidence, preference, and hypotheses into the governed resolution lifecycle.
OMNI should make disagreement legible without flattening the difference between lived experience, evidence, preference, and clinical commitment.
L. Trust will be earned through facts on the ground, not AI marketing

Arati Prabhakar offers the necessary counterweight. She argues that public concern is not merely a communication problem. People are reacting to real labor displacement, harmful applications, institutional distrust, and uneven benefit distribution. She warns against confusing rapid model progress with rapid change in the human world. Human judgment, organizations, research rigor, and institutions move on different timelines.

This is extremely important for OMNI.

The company cannot claim trust merely because Polaris exists, AI is governed, or clinicians remain in the loop. Trust will depend on visible consequences:

Does care improve?
Are patients heard?
Are workers augmented or merely surveilled?
Are incentives disclosed?
Can decisions be challenged?
Can artifacts move?
Does the system admit uncertainty?
Who benefits from the learning economy?
Are harmful outcomes detectable and repairable?

Keeper doctrine:

Trust is an observed outcome of system behavior, not a brand claim or governance diagram.
The speed of model improvement does not erase the slower physics of institutions, evidence, labor, and care relationships.
OMNI should be technologically fast and institutionally honest.

This also sharpens the anti-hype posture. “AI as normal technology” is a useful comparator: powerful, consequential, uneven, and governed through ordinary human institutions rather than magical exception.

M. The knowing-doing gap may be a better care thesis than “AI answers questions”

Near the end, Lungren describes using AI to scan structured and unstructured records, identify cardiovascular-care gaps, and bring patients back for known interventions. The issue is not absence of medical knowledge; it is the inability of clinicians to apply every guideline to every patient under current constraints.

This is highly OMNI-native.

The long-term value is not only generating smarter recommendations. It is closing the gap between:

what is known,
what applies,
what has been done,
what remains unresolved,
who owns the next step,
whether the patient completed it,
what happened afterward.

That is Sense → Governed Resolution → Act → Proof → Obligation → Learn.

Keeper doctrine:

The durable care opportunity is not merely better answers; it is making known care reliably happen for the right person at the right time.
Knowledge without ownership, action, and follow-up is not care.
Where it lands

Major

Patient CNS / Longitudinal Intelligence: patient diagnostic journeys, patient-reported safety signals, always-on sensing, care-gap detection.
REV-184 Governed Resolution Lifecycle: patient-generated hypotheses, disagreement, non-action, escalation, outcome linkage.
Outcome Intelligence / Prove-Learn: measure diagnostic error, workflow benefit, trial access, care-gap closure, workforce impact.
Product / Surfaces / OMNI workbench: solve painful work; AI disappears into the product; capture the patient and provider journey inside OMNI.
Clinical-trial access and execution: availability truth, matching, navigation obligations, frontline provider workflow.
AI substrate / capability placement: cloud/on-prem/edge by workflow physics; model is one component of the harness.
Knowledge Reservoirs / data readiness: agent-ready means semantically reconciled, source-attributed, fresh, permissioned, and action-fit.

Medium

BIZOPS / workforce: literacy, job redesign, employee experimentation, augmentation versus displacement, incentive design.
Build-OS / Product Intelligence: experimentation tiers, user-discovered workflows, feature-demand signals, adoption telemetry, rapid correction.
Federation / P35: industry and health-system partnerships, localized capability, external agents and systems.
Polaris: trust as proof and alignment across every seam; no governance-by-brand-claim.

Minor / contextual

public R&D and national science policy,
energy and compute-resource planning,
historical control arms and regulatory modernization,
open-model ecosystem specifics.

These matter strategically but should not hijack the care-first spine.

Doctrine / primitive pressure

Candidate names for formal deduplication:

patient_ai_journey
patient_reported_safety_signal
diagnostic_journey_lineage
dismissed_concern_signal
external_companion_context_packet
experiment_to_capability_lifecycle
shadow_ai_demand_signal
capability_investment_class
benefit_realization_record
workflow_outcome_hypothesis
capability_placement_policy
action_ready_data_state
frontline_trial_navigation_obligation
workforce_ai_experiment
care_gap_candidate

Most are likely names or specializations over existing primitives, not genuinely new substrate objects.

Keeper doctrine
The patient’s external AI may not own clinical truth, but it may hold the most coherent record of the patient’s unresolved journey.
A care system that cannot hear the patient after the decision cannot honestly learn from outcomes.
Experimentation should be cheap; authority should not be.
Shadow AI is often unmet workflow demand expressed outside governance.
A workflow is improved only when its intended effect becomes visible.
Where a capability runs does not determine what it may commit.
The model is not the workflow, and the workflow is not the authority.
Readable is not reliable; structured is not authoritative; available is not admissible.
Continuous sensing creates candidates, not automatic authority.
Trial matching without current availability and navigation closure is search, not access.
An informed patient is not the problem; unmanaged authority and untraceable claims are the problem.
Trust is an observed outcome of system behavior, not a governance slogan.
Knowledge without ownership, action, and follow-up is not care.
OMNI succeeds when the user stops thinking “AI” and starts thinking “this is where my work gets done.”
What NOT to import blindly
Do not turn patient AI enthusiasm into automatic clinical adoption.
Do not assume patient-reported experience is adjudicated truth; preserve it as high-value signal with provenance.
Do not import “let a thousand flowers bloom” without risk tiers, data boundaries, evals, and authority gates.
Do not make ROI the sole value measure for safety, literacy, trust, and care-quality capabilities.
Do not make NVIDIA’s infrastructure stack, open models, or on-prem hardware OMNI doctrine.
Do not equate local execution with safety or authority.
Do not canonize “always-on agents” without suppression, uncertainty, burden, and non-action semantics.
Do not mistake a trial catalog for trial access.
Do not let pharma economics influence patient-facing trial recommendations.
Do not frame workforce disruption as a marketing problem; some harms are real.
Do not let rapid model cadence erode scientific review, longitudinal validation, or institutional accountability.
Do not let the science-policy section expand v4 into a national innovation manifesto. Its value is the institutional-timeline and trust lesson.
Tiering tags per concept

Patient AI as longitudinal diagnostic journey
stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Patient-reported safety/outcome sensing
stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Problem-first product adoption / AI disappears
stale-vs-v3: AFFIRM · weight_tier: spine · status: promote

Enterprise experimentation, shadow AI, and tiered evaluation
stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Outcome hypothesis and benefit realization
stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Hybrid capability placement
stale-vs-v3: AFFIRM · weight_tier: spine · status: promote

Model + knowledge + tools + skills + orchestration
stale-vs-v3: AFFIRM · weight_tier: spine · status: no-op / cite as external convergence

Action-ready data state
stale-vs-v3: AFFIRM · weight_tier: spine · status: promote naming only

Always-on proactive sensing
stale-vs-v3: AFFIRM · weight_tier: spine · status: no-op / sharpen

Trial access and frontline navigation
stale-vs-v3: AFFIRM after C3.7 · weight_tier: spine · status: cite as field validation

Patient empowerment and governed disagreement
stale-vs-v3: AFFIRM · weight_tier: spine · status: promote product language

Trust through facts on the ground
stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

National R&D system redesign
stale-vs-v3: ABSENT · weight_tier: low-authority-watch for OMNI scope · status: watch / do not import into care thesis

5. Hard read

This is full-semantic spine material, but not because it reveals a brand-new technical architecture.

Its strength is convergence across five realities that OMNI must reconcile:

the patient already has an external longitudinal AI relationship;
the enterprise is struggling to turn experimentation into accountable value;
useful AI is a harness around knowledge, tools, workflow, and local craft—not a model;
clinical-trial access fails at the point where information does not become navigable work;
trust will be earned through measurable benefit, honest labor effects, preserved judgment, and institutional proof.

The source’s strongest OMNI line is:

OMNI should become the governed place where patient context, institutional knowledge, and AI-generated candidates cross into owned action and measurable follow-up—so seamlessly that users stop calling it AI and simply call it how care and work get done.
&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

meh whatever, fuck these guys... i hate these healthcare standford vids... because just fuck them.. but we have to examine them
&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

reviewer: `Opus` · at: `2026-07-11` · run: `EVRUN-2026-000005` · formalizes Review 001 (Knox), grounded vs §1 · cumulative dedup baseline: `EVRUN-000001 §2A` + `000002` + `000003` + post-v3 rounds (C3.5/6/7/8 · REV-184 · `EVRUN-000004 §0.5`).

**HEADLINE VERDICT.** Full-semantic **field-validation** source, NOT an architecture reveal. Five authority lenses (patient-safety · pharma · infra-vendor · oncology-ops · science-policy) independently re-derive OMNI's care-first governed-execution thesis. **~0 genuinely net-new primitives** — the yield is confirmation + a few sharpenings + strong spine-prose anchors. Dominant reality-check: **`doctrine=AFFIRM/PARTIAL · build=absent`**. Keeper law: *healthcare AI wins when it closes a real care/work loop inside the user's existing reality — remembering the person, surfacing the right evidence, closing the knowing-doing gap, producing measurable action — while preserving human judgment, trust, and proof.*

**Framing note (what Knox got right / what I sharpen):** Knox's 13-finding A–M read is accurate and I preserve it. I formalize by (a) collapsing his ~15 candidate names to `EXISTS-AS` verdicts against the estate (almost all are names over existing primitives), and (b) separating the two genuine *sharpenings* (patient post-non-action safety sensing; tiered evaluation-burden) from the AFFIRM mass.

### A. Concept clusters (formalized from Knox A–M; grounded in §1)

| concept (Knox term) | OMNI meaning | downstream homes | source anchor (≤12w + ts) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|
| **Patient AI journey = parallel longitudinal record** (A) | The patient's external-AI conversation is often their most coherent longitudinal record of concern/intent — enters as source-attributed candidate, never clinical truth; OMNI must preserve the journey (why asked, what evolved, what dismissed) not discard it | Patient CNS · §A/§B external-agent · Clinical Memory (patient-source) · `EVRUN-000004 §0.5` participation topology + three-gate context-admission | "it's a journey and then it remembers me" [3:30]; "AI can't dismiss me…AI remembers me" [6:20] | PARTIAL | absent | tension (platform-owns-context foil, T81-class) | spine | promote (as sharpening) |
| **Patient-reported safety/discrepancy sensing** (B) | A missing **post-action / post-non-action** sensing surface: governed patient-reported harm/discrepancy signals ("concern dismissed", "result never reached me", "deteriorated after monitor") feed Prove/Learn — high-value candidate, not adjudicated truth | Outcome Intelligence/RWE (REV-174) · CNS Prove/Learn · Observation (`patient_state_observations`) · REV-184 outcome linkage · D7 | "getting dismissed…AI remembers me" [6:20]; Sheridan patient-reported "new layer of data" | PARTIAL | absent | none | spine | **promote (genuine sharpening — see B in §B primitives)** |
| **Problem-first adoption — "AI disappears"** (C) | Tools win when experienced as the solved work problem, not an AI project ("my solution for notes"); OMNI = the verb/where-work-gets-done; Polaris/routing/harness recede into substrate | Thesis §1/§2 product identity · §5 wedge · Surfaces | "stop calling it AI…my solution for notes" (Powell, Abridge/OpenEvidence) | AFFIRM | partial | none | spine | promote (product language) |
| **Governed experimentation + shadow-AI = unmet demand** (D) | Shadow AI is unmet workflow demand outside governance; answer = a faster *governed* path, not prohibition/surrender; capture local uses without uncontrolled sprawl | Build-OS · Product Intelligence · tenant-config · C3.8 §3 data-value | "shadow IT problem, everyone's got it on their phone" [18:42]; "shadow organization…twice as much" [19:17] | PARTIAL | absent | tension (089 builder-optimism / "thousand flowers" vs governance) | spine | promote |
| **Tiered evaluation burden** (D) | Evaluation rigor rises with spend · blast-radius · irreversibility · clinical-consequence — not one universal approval; cheap experiments ≠ ROI-accounted, large programs are | C3.8 §2.1 (spend/blast-radius) · C3.5 risk tiers · Build-OS | Boerner: small experiments may not justify detailed ROI; large do | PARTIAL | absent | none | spine | **promote (sharpening)** |
| **Outcome hypothesis attached to the loop** (E) | Outcome Intelligence is not a later dashboard: each meaningful workflow declares baseline · intended-effect · action/non-action · owner · proof · observed-effect · horizon · confounders · beneficiary | Outcome Intelligence (REV-174) · CNS Prove/Learn · REV-184 | "what changed because AI was used?" (recurring panel Q) | PARTIAL | absent | none | spine | promote |
| **Capability placement ≠ authority** (F) | Placement (cloud/on-prem/edge) follows data-locality/latency/privacy/cost/loop-tightness; a local model is not thereby authoritative — placement and authority orthogonal | §B AI substrate · C3.8 §2.3 BYOM · REV-184 `trust_horizon` · `capability_placement_policy` | "inverted triangle" [32:33]/[38:32] | AFFIRM | absent | none | spine | promote (naming) |
| **Model is a component; harness+knowledge+tools+skills+orchestration = work** (G) | Affirms harness doctrine; BUT care workflow authorship must include domain/clinical/policy owners + users, not only "the application developer" | §B · CNS · Build-OS · Polaris | Powell: "AI is not just a model" | AFFIRM | partial | none | spine | no-op / cite convergence |
| **Agent-ready data = operational-truth problem** (H) | Agent-ready ≠ parseable; = known ownership · source-authority · semantics · freshness · permissions · adoption-state · fitness-for-action. Polaris composed trust layer, NOT a new ontology god-domain | `source_authority_map` (C3.6) · Polaris · Clinical Memory adoption · Observation · D7 · wave-3 232 `agent_ready_unstructured_data_substrate` | Kim: rushing over flawed data → bias → destroys trust | AFFIRM | absent | none | spine | promote (naming only) |
| **Always-on sensing → candidate, not autonomous care** (I) | "Computer prompts you" affirms Patient CNS/proactive orchestration under guardrails: detection = candidate; next step may be monitor/notify/escalate/nothing; govern silence + burden as carefully as escalation | Patient CNS · CNS proactive · candidate≠commit · `EVRUN-000004 §0.5` three-gate | "the computer prompts you" (Powell) | AFFIRM | absent | none | spine | no-op / sharpen |
| **Trial access = information+workflow before AI** (J) | Direct C3.7 field validation: availability truth (site/CTMS source-authority), current local options, matching→navigation obligation, one-click inquiry > explanation, frontline fit determines accrual; "brute strength" operating model first, AI amplifies | C3.7 (`cohort_slot_state`, `research_navigation_obligation`, `trial_match_candidate`, `honest_null_terminal`, economically-blind firewall) | "No AI here. This is just brute…strength" [59:59]; "brute strength" [1:00:44] | AFFIRM (post-C3.7) | absent | none | spine | cite as field validation |
| **Informed patient = actor in the resolution, not a threat** (K) | Patient empowerment changes the relationship around clinical authority, doesn't violate it: patient authority governs consent/preference; patient info enters with provenance; desire≠indication; disagreement becomes legible/resolvable = REV-184 in product form | REV-184 · §A · Identity patient-source · `EVRUN-000004 §0.5` | "up their game…that's what competition builds" [1:09:37] | AFFIRM | absent | none | spine | promote (product language) |
| **Trust = facts on the ground, not marketing** (L) | Public concern is real (labor, harm, distrust, uneven benefit), not a comms problem; don't confuse rapid model progress with rapid human/institutional change; "AI as normal technology" comparator | Polaris/proof · anti-hype posture · §3.5 comparator · C3.8 governed-data-economy | "facts on the ground problem" [1:20:31]; "facts on the ground versus marketing" [1:27:57] | PARTIAL | absent | none | spine | promote |
| **Knowing-doing gap as the care thesis** (M) | The durable opportunity ≠ smarter answers; = making *known* care reliably happen for the right person at the right time = Sense→Governed Resolution→Act→Proof→Obligation→Learn (Chain A) | Chain A (C3.5) · `governed_decision_lifecycle` (C3.7) · CNS proactive · OFC `care_obligation` | "this knowing doing gap…AI can move us" [1:34:04] | AFFIRM | absent | none | spine | promote |

**Doctrine roll-up:** ~7 AFFIRM · 6 PARTIAL · 0 ABSENT · 0 direct_conflict (2 tensions). **Build roll-up:** 0 present · 2 partial · 11 absent → textbook `doctrine=AFFIRM/PARTIAL · build=absent` wave pattern (the gap is BUILD, not ideas).

### B. Net-new primitive candidates (dedup vs cumulative baseline — verdicts)
- `patient_ai_journey` / `external_companion_context_packet` / `diagnostic_journey_lineage` — **EXISTS-AS**: `EVRUN-000004 §0.5` (patient private-AI = actor→participant on admission; three-gate context-admission) + Patient CNS + Identity patient-source + wave-3 `227 memory_authority_state`. **DO NOT MINT** — sharpening of the participation-topology + Patient-CNS external-agent posture.
- `patient_reported_safety_signal` / `dismissed_concern_signal` — **partial exists-as** Observation `patient_state_observations` + C3.7 `outcome_intelligence` + Prove/Learn; **the genuine sharpening** = an explicit **post-non-action patient-reported discrepancy/harm sensing input to Prove/Learn** ("a care system that cannot hear the patient after the decision cannot learn"). Ground vs REV-184 outcome-reads-original-context + `EVRUN-000004` replayable_proof. Route as sharpening, not mint.
- `experiment_to_capability_lifecycle` / `shadow_ai_demand_signal` / `adoption_risk_tier` / `capability_investment_class` / `benefit_realization_record` — **EXISTS-AS**: C3.8 §3 (governed data-value/experimentation) + C3.5 P39 + Build-OS + tenant-config. The **tiered-evaluation-burden** rule (rigor ∝ spend·blast-radius·irreversibility·clinical-consequence) sharpens C3.8 §2.1 — flag as sharpening.
- `capability_placement_policy` — **EXISTS-AS** wave-2/3 + C3.8 BYOM/hybrid (§2.3). AFFIRM; sharpen "placement ⟂ authority".
- `action_ready_data_state` — **EXISTS-AS** wave-3 `232 agent_ready_unstructured_data_substrate` + C3.6 `source_authority_map` + Polaris. Naming only.
- `frontline_trial_navigation_obligation` / `care_gap_candidate` — **EXISTS-AS** C3.7 (`research_navigation_obligation`) / Chain A + `governed_decision_lifecycle` (C3.7) + OFC `care_obligation`. Field validation, no mint.
- `workflow_outcome_hypothesis` — **partial exists-as** REV-174 Outcome Intelligence + C3.7 outcome-testable-without-retroactive-judgment; sharpening (declared hypothesis before measuring).

**Net genuine mints = 0.** Two sharpenings to carry (both `analysis_nonbinding`, propose-only): (1) patient post-non-action discrepancy/harm sensing → Prove/Learn; (2) tiered evaluation-burden → C3.8 §2.1. No re-mint of `EVRUN-000004 §0.5` retired terms.

### C. Reread flags
- Anchors here are transcript-verbatim with timestamps (grounded), EXCEPT speaker attributions of paraphrased segments (Powell "inverted triangle", Boerner ROI) — verified by segment position, exact quote-level attribution to firm at wave-close if needed.
- **Sibling cross-refs (fold to registry, do not duplicate):** patient-AI journey → `EVSRC-000200` (Kyle), `EVSRC-000251` (TRT/ChatGPT loop), `EVRUN-000004 §0.5`; trial access → C3.7 + `000068` (OpenEvidence); enterprise adoption → wave-3 `225` (Levie/Box), `232` (Ng); harness → 254/256/257 (this wave). 
- **Tension to register:** shadow-AI "let a thousand flowers bloom" (D) vs governance = the recurring 089/wave-2 T2 builder-optimism family — route to governed-fast-path, do not adopt literally.
- Nick's Review 002 note ("hate these stanford vids…but we have to examine them") = do-not-over-weight the optimistic venue; the value is the 5-lens contrast + Prabhakar counterweight.

### D. One-line hard read
Full-semantic **spine-prose + field-validation**, ~0 net-new: it proves — from patient, pharma, vendor, oncology, and policy angles at once — that OMNI's care-first governed execution substrate is the right bet, and hands the spine author quotable anchors. **Strongest OMNI line:** *OMNI should be the governed place where patient context, institutional knowledge, and AI candidates cross into owned action and measurable follow-up — so seamlessly the user stops calling it AI and calls it how care gets done.*

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000005` · concept_registry: `analysis/EVRUN-2026-000005_ai-corpus-wave-4/EVRUN-2026-000005_ai-corpus-wave-4_concept_registry_and_routing_map.md` · source_anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `field-validation of care-first governed-execution thesis (§1/§2/§5/§8/§A/§B + REV-184 + Outcome Intelligence + Patient CNS + C3.7); ~0 net-new; 2 sharpenings (patient post-non-action safety sensing; tiered eval-burden)` · promotion: `watch` (propose-only; spine-prose anchors + 2 sharpenings routed to registry)

## §5 — Change log
- `2026-07-11` — wave-4 scaffold created (id `EVSRC-2026-000253`, provisional `_TK` slug); awaiting Nick transcript + Knox-read + URL paste.
- `2026-07-11` — transcript (§1) + Knox Review 001 (§3) + Nick Review 002 pasted; **Opus Review 003 written** (`EVRUN-2026-000005`); §0/§0.1 normalized from Knox rough-metadata + transcript; status `raw_dropped → analyzed`. Folded to `EVRUN-2026-000005` registry/coverage/anchor.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md`.

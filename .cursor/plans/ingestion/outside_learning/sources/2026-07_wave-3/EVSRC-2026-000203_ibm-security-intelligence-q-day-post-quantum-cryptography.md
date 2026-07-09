# EVSRC-2026-000203 — Q-Day & Post-Quantum Cryptography (IBM Security Intelligence podcast)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000203_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000203`  ·  filename: `EVSRC-2026-000203_ibm-security-intelligence-q-day-post-quantum-cryptography.md`
- source_platform: `YouTube`  ·  source_url: `TK (not provided)`  ·  source_title: `Security Intelligence (IBM) — Q-Day / Post-Quantum Cryptography special (title inferred from transcript)`
- channel_or_org: `IBM Security Intelligence (IBM's weekly cybersecurity podcast)`  ·  speaker: `Matt Kosinski (host) · Mason Molesky · Suja Viswesan · Mark Hughes`  ·  published_at: `TK (references a "last week" US PQC executive order)`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste (no screenshot / no Knox metadata block; metadata read from transcript)`
- content_type: `podcast / interview (post-quantum cryptography · Q-Day-as-process · crypto agility · CBOM · harvest-now-decrypt-later · PQC migration lifecycle · non-human-identity explosion)`  ·  source_reliability_context: `vendor-practitioner (IBM security leadership) — high DOMAIN authority for security posture; vendor interest (IBM sells PQC products/standards). Treat market stats ("30%") + product claims as vendor-positioned.`  ·  topic_tags_light: `[post_quantum_cryptography, Q_Day, crypto_agility, CBOM, harvest_now_decrypt_later, PQC_migration, certificate_lifecycle, non_human_identity, vendor_supply_chain_security, D7_retention, classic_security_lane, security_zero_trust]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Matt Kosinski` · role_in_source: `host` · affiliation_at_publication: `IBM (Security Intelligence podcast)` · speaker_type: `journalist/host` · authority_context: `frames + summarizes; not a claim source` · identity_confidence: `high_from_transcript`
  - name: `Mason Molesky` · role_in_source: `interviewee` · affiliation_at_publication: `IBM — leads cyber policy strategy incl. PQC` · speaker_type: `operator/policy` · authority_context: `high on PQC policy/regulatory (US executive-order detail)` · identity_confidence: `high_from_transcript`
  - name: `Suja Viswesan` · role_in_source: `interviewee` · affiliation_at_publication: `IBM — VP, Security Products` · speaker_type: `vendor/operator` · authority_context: `high on security-product strategy; vendor interest` · identity_confidence: `high_from_transcript`
  - name: `Mark Hughes` · role_in_source: `interviewee` · affiliation_at_publication: `IBM — Global Managing Partner, Cybersecurity Services` · speaker_type: `vendor/operator` · authority_context: `high on enterprise crypto migration; vendor interest` · identity_confidence: `high_from_transcript`
- publisher / channel: `IBM Security Intelligence`  ·  interviewer / moderator / host: `Matt Kosinski`
- event_context: `IBM weekly cybersecurity podcast, PQC special — occasioned by a US executive order accelerating federal PQC migration (2030/2031 vs prior 2035). Two segments: policy (Molesky) + practitioner (Viswesan/Hughes on Q-Day-as-process).`  ·  perspective / conflict notes: `IBM is a PQC-standards author + vendor (sells the products/services discussed). Value = the SECURITY-LIFECYCLE doctrine (Q-Day-as-process, crypto agility, CBOM, harvest-now-decrypt-later), NOT IBM product endorsement. Market stats vendor-positioned.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [ ] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata (read from transcript; no screenshot) · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** · [x] update EVRUN concept registry (cross-source) · [x] update coverage matrix · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
Introduction
0:01
There's a really big tsunami of stuff coming at us as cybersecurity people. If it's not frontier AI models that we've heard an awful lot about, it's
0:08
also obviously AI in itself and how you actually can implement that—and implement that in a secure and a safe way.
0:18
Q-Day, that's what they call the day when quantum computing capabilities will finally be able to crack the public key cryptography
0:27
we rely on to secure everything from websites and email communications to digital signatures, bank accounts and blockchains.
0:35
And it might be coming faster than we think. Last week, US President Donald Trump issued a pair of quantum
0:40
related executive orders, one of those securing the nation against advanced cryptographic attacks establishes a government wide mandate
0:48
to accelerate the United States transition to post quantum cryptography. Welcome to Security Intelligence, IBM's weekly cybersecurity podcast.
0:56
I'm your host, Matt Kosinski, and we have a very special episode for you today, all about quantum safety.
1:01
Later in the show, we'll have Suja Viswesan, VP, Security Products, and Mark Hughes, Global Managing Partner, Cybersecurity Services.
1:07
Join us to talk about why we should consider Q-Day more of a process than an event, and what that means for quantum strategies.
1:14
But first, we have here Mason Molesky, who leads IBM's cyber policy strategy, which includes post-quantum cryptography.
Post-quantum cryptography executive order
1:26
Here with me today, Mason Molesky, who leads IBM's cyber policy strategy, which includes post-quantum cryptography.
1:33
Mason, thank you for joining me. Let's start with an overview. What exactly is this executive order?
1:39
What's it all about? So on Monday, President Trump signed an executive order on post-quantum cryptography, which is just the latest development in a decade long US government
1:49
policy effort to address this transition from modern day encryption to new encryption that is not susceptible
1:58
to attacks from quantum computers. The, this particular executive order represents the US government's
2:06
transition from recognizing quantum risk to really mandating
2:11
coordinated actions and efforts, you know, through establishing clear accountability, clear timelines
2:20
and enforcement, to ensure our information and data is protected. To really dive in there. You know, what does that mean?
2:27
You know, it establishes first, you know, that the Office of Management and Budget, which is where the federal CIO sits, as well as the national cyber director
2:35
in the White House are going to lead this the strategy representing the level of importance
2:41
and coordination that's going to occur across the US government, as well as technical guidance to be coming
2:48
from our National Institute of Standards and Technology, our National Security
2:53
Agency and our Cybersecurity and Infrastructure Security Agency. Second point is it creates clear accountability.
3:00
It asks for agencies to appoint a lead for post-quantum cryptography migration efforts,
3:08
so that the White House specifically knows who to, who to go to, who to ask questions, and who to hold accountable
3:16
for these efforts across the federal government. So can you expand on that for us? What is the EO asking organizations to do?
3:23
I think probably one of the most significant things that this executive order does is it accelerates the timeline
3:29
of the transition that the US government is going to be undertaking. Yeah, there's a lot of a lot of numbers out there in terms
3:36
of what year people say we need to be quantum safe by where
3:41
quantum computers are actually going to pose a risk to regularly breaking encryption.
3:48
And 2035 was kind of an agreed upon date generally with the US government before this new executive order accelerates that up to end of 2030
3:57
and then the 2031. And then I think, you know, and lastly, it
4:04
it helps kind of set the directive of how this matters to, to others. You know, the US government's going to be updating its acquisition regulation
4:13
so that government or federal contractors are required to comply as well.
4:18
And accelerates some of the processes that enable this activity. So the the crypto validation to be able to sell products,
4:27
they're looking to streamline and enable this in the marketplace. Thanks for breaking that down for us. So I know that the executive order deals, you know,
4:33
primarily with the functions of the US federal government, but obviously it's got broader implications, too. Right?
4:39
So the question is who should be paying attention to this executive order and why. Like you said, I you know, first and foremost, it's
4:47
the federal government and the agencies. But I think that it obviously extends well beyond this, as I mentioned,
4:55
you know, federal contractors are going to care about this because the acquisition regulations and what they're going to have to comply with.
5:02
But at the same time, the executive order has a has a clear focus on on the two other main stakeholders, which is international partners, meaning
5:13
they want to ensure that internationally we adopt similar standards,
5:20
you know, ideally leveraging the NIST standards that we've spent over a decade developing in the United States with global colleagues.
5:27
And that's really to ensure that we have interoperability, that when we when we talk to someone else overseas,
5:34
that that information can be understood appropriately.
5:40
And second, it's really the critical infrastructure operators and owners,
5:47
that's water power, electric, financial. Many, many of these sectors are already thinking and working through this.
5:57
The IT sector, telecommunications, financial sector are always kind of ahead in this because they they play in this space.
6:06
But helping ensure that our water plants or our hospital systems have the ability to protect information
6:16
that may never change, that is sensitive, that we want protected, is done so properly.
6:22
And so the executive order calls for that in both ways. Calls for Department of State
6:27
and others to work internationally with their partners and allies. And it calls on the, you know, Cybersecurity
6:34
and Infrastructure Security Agency, as well as the sector risk management agencies like Health and Human Services
6:40
to work with their respective sectors to help enable and support this this major transition for critical infrastructure.
6:47
Now, I always like to close out segments on the show with the so what right. The immediate kind of concrete takeaways for our listeners.
6:54
So Mason, what's the so what here. You know, what do we start doing. Where do we go. First, let's start with why this matters at all.
7:02
What what we're already seeing is bad actors look to gather encrypted data.
7:10
It's often called, you know, collect now, decrypt later. Collect now harvest.
7:16
Harvest now. Decrypt later. That's a very clear indication that,
7:22
you know, these adversarial actors understand that they can collect sensitive information that'll have a lifespan
7:31
whenever a quantum computer is regularly available, and then they can decrypt it then. And that's, that's not just government secrets.
7:37
It is government secrets, but it you know, that extends to, like I said, health care information that will never change about you, about you.
7:45
It extends to financial information. And so we are seeing that actively as a risk.
7:51
It's not all information. We don't think everything needs to move. A takeout menu is is going to change.
7:57
And the life of that is not not something that needs to be protected. But we we do want to ensure that we're
8:02
taking this risk based approach to protect the information we need. For, for a long time,
8:09
and then, you know, part of why this matters as well is we've we've this is not the first encryption transition we've been through.
8:17
Encryption goes back to the Roman days. You know, the Caesar cipher, very simple encryption.
8:23
It was physically where we would take information, they would encrypt it that way. It's it's meaningless information in transit, physically on horseback
8:33
or in person. And they would decrypt it with that trusted party at the end. It works the same way. It's just with our laptops now.
8:41
But that transitions then, as well as transitions now, over the last 50 years with computers, have taken years and years and years.
8:50
We still haven't fully completed past encryption transitions. So even if we think a quantum computer
8:57
will won't be available until 2040, it could easily take that long until something is available
9:04
and the timelines of when quantum computers that may risk this could become available are as soon as this decade
9:11
possibly, which means we could potentially already be behind or starting to put information at risk.
9:19
So given these risks, what do you recommend organizations start doing today? The good news is we you know, the US government has been doing this work.
9:29
The the the world has undertaken a very collaborative effort to create these new post-quantum encryption standards.
9:38
And those standards have are out. And now you know what's happening. Industry has taken those.
9:46
IBM has helped create those standards. So it may have a jump start, but now we are commercializing
9:54
those into products and to solutions, that first secure the the products that we sell,
10:02
because most, most organizations are just going to buy, they're not going to be doing this work themselves.
10:08
So they they want to ensure that they are buying products that are quantum safe.
10:14
And second, we're developing products and services that help organizations understand what they have, what risk they have,
10:22
and how they can make this, this, this successful transition. Finally, just to put a fine point on this, you know, we we
10:30
have a very clear kind of perspective that we talk with, with governments. And the US government's not the only one doing this,
10:37
you know, a dozen or so governments worldwide updated post-quantum cryptography policies last year,
10:46
another dozen or so created new ones. We're seeing sector guidance already start to come out.
10:53
So collectively, the world is kind of moving towards ensuring the security.
10:59
But but our, our, you know, as governments think about this, our guidance to them is clear.
11:04
It's it comes in three phases. It's make sure that we plan, make sure that we act, make sure that we motivate.
11:11
Planning means we have to as governments as nations work to
11:19
get roadmaps, get readiness together, integrate PQC into existing national cybersecurity strategies,
11:28
doing the big, weighty, process heavy things, getting the budget aligned to ensure that we can do this successfully.
11:38
It means ensuring that we prioritize. Like I said before, not all information is the same value,
11:44
the same sensitivity over the same lifetime. So understanding what you have, how sensitive it is, how valuable it is
11:53
over time is what matters and prioritizing where you need to do this. This is kind of where the the executive order really steps up.
12:00
It says we are not just going to to plan and to talk about doing this.
12:06
We actually want tangible action. It calls for pilots, specific like pilots. That's next year.
12:14
Quick, quick action to have lessons learned to actually migrate. You know, the EO sets forward clear migration deadlines, 20, 30, 20, 31.
12:26
And from those things, it's it's clear to say, like we need to replicate and grow those examples.
12:34
So that's part of what the support to critical infrastructure will be. Is a power plant pretty, pretty important?
12:43
The data may be less sensitive, so it may happen slightly later, but it'll it'll have lessons learned from across the government sector.
12:50
And finally it's it's really about motivating, not just us,
12:56
US government, federal agencies to act. It's about ensuring that all organizations, critical infrastructure,
13:02
all their private organizations worldwide are educated enough to to know what they should be
13:08
thinking about, what they need to know, what they don't need to know, and what to do, how to take action, what tools and resources are out there
13:16
and available. Thank you, Mason, for hopping on with us today. Switching gears now, here is a prerecorded conversation with Suja and Mark Hughes.
13:24
Hence the change in wardrobe and location that our video viewers will pick up on.
What is Q-Day?
13:33
I want to dive right in up top and just ask if you can outline for our listeners, what exactly
13:39
are the concerns when it comes to quantum computing and security? What is the risk of Q-Day? Mark, you want to start us off?
13:45
The main issue is you teed up up front is that the quantum computing capability that we're going to have is going to essentially be able to run an algorithm,
13:54
which we've known about for some years, called Shor's Algorithm, which essentially unravels for the better description,
14:00
the PKI encryption algorithm. And what that means is that, therefore, a lot of the stuff that we rely on
14:07
today in terms of encryption is going to become vulnerable, and therefore we have to do something about it.
14:12
So the so-called Q-Day, which is a bit misleading because it's not a day, it's actually going to be a process.
14:18
But the point is that the quantum computing capability that's now emerging is going to essentially undermine the encryption, a lot of the encryption,
14:26
asymmetric encryption that we rely upon today. Absolutely. And I'm glad you gesture towards the fact that Q-Day is kind of maybe more of a process than just the day,
14:33
because I do want to dig into that with you folks. Both. You wrote a great article about this. But before we do, Suja, I just wanted to,
14:39
you know, ask for your kind of top line overview. Anything to add to to to what Mark said up there for us about the risks of quantum,
14:46
to cybersecurity. I mean, just like everything else, right? Today, the AI wave. Because of that,
14:53
the identities are exploding, and then we need to be ahead of it.
14:58
And when you are taking care of it, you might as well take care of the post-quantum thing as well. As Mark pointed out, it is not a point in time like Y2K.
15:06
After that, after everything gets better, it comes in waves, not in shocks.
15:12
So we have to be prepared for that. That is why we are talking about it today, even though you can say
15:17
it's five years and it's anybody's guess at this point. As you point, Google is having a date, IBM has a date, government has a date.
15:24
So that's all fine. But it's a journey. So are we getting prepared for that? And, you know, I it does come at a time, like you said, we're also
15:32
dealing with this AI and how it's changing security. And it just it feels like a lot. You know,
15:38
there are cybersecurity professionals have a lot to be thinking about. Mark, does it complicate things that we've got AI
15:43
and quantum both like together like like how does that play out for us? Of course not that it makes a lot more interesting
15:52
though. Yeah. I mean, look, I think Suja would agree with me. There's a really big tsunami of stuff coming at us as cybersecurity people.
16:01
At the moment, if it's not frontier AI models that we've heard an awful lot about, it's also obviously AI in itself and how you actually can implement
16:08
that—and implement that in a secure and a safe way in most organizations. Suja talked about the identities that come with that.
16:15
A lot of organizations are really struggling with how to get the best out of AI because they can't work out, work out yet
16:21
how to implement it securely, with the right levels of access. And then of course, you've got quantum alongside there as well.
16:27
So there's a lot. But, Matt, the good news is that within all of that, there's a few foundational principles that we work at with cybersecurity.
16:35
And a lot of those foundational things don't change. But the one thing that does change is we've got to speed up,
16:40
because a lot of the quantum, an impending quantum revolution. And also what we're seeing with AI means that we've got to
16:46
do a lot of the things that we know how to do. We've got to do them a lot quicker. I'm glad you also, you referenced the foundational stuff
16:51
because I do want to come back to that. But, you know, we've kind of set up the scene here for folks,
16:57
but I really want to dive into what I think is kind of the crux of the conversation today. And it is this idea that Q-Day is not really a
17:04
when it's a process, right? Back in April, you folks published a coauthored article that kind of gave your take on this matter.
17:12
Here's a quote from that. Unlike Y2K, there won't be a single moment when everything breaks at once.
17:17
Rather, quantum risk will be realized over time, spanning multiple years as different cryptographic systems become vulnerable at different times.
17:25
That was really fascinating to me because I've been hearing for years about Q-Day as like a specific moment. Right? And this is like, no, it's an unfolding process in time.
17:31
We're dealing with it already. Suja, could you elaborate a bit for us on what it means to view Q-Day as something that happens over time rather than a sudden event.
17:39
Since we wrote, our thinking hasn't changed. I believe Mark and I agree. As I said, this comes in waves
17:45
because when we think about cryptography, right, which is the encryption, this is
17:51
invisible scaffolding, if you will, for the modern software. So when
17:57
the quantum computer doesn't break just encryption, it breaks a lot of our assumptions that we have had for years on this one.
18:07
And because of that, it's the hardware. It is your credentials. It's your PKI that Mark was talking about.
18:15
So everything needs to change. And so this is not just a technology problem.
18:20
It's the people the process. So the biggest bottleneck is execution.
18:26
Mark, Matt, we know about the data in general stays for ten years.
18:32
Financial institutions, they say they keep the data for ten years, something that is today 2026.
18:39
Today's data needs to at least last until 2036. If you think about health care data,
18:45
it needs to be held on for the lifetime of a person. So these are all important data which are encrypted and kept.
18:53
How do we make sure that they are safe? How do we prevent them from harvest now and decrypt later?
19:00
Because the bad actors are already taking this data today to decrypt later? How do we stop that?
19:06
That is why it's a journey, because you need to be starting on the journey because first, we don't even know.
19:13
We cannot fix things that we don't know because cryptography is something that we will put on and don't worry about for a year or two years.
19:20
And then they will take a look at it. Today we need to be looking at it and make sure that our hardware, software,
19:28
our third party vendor software that you are having, all of them are ready for this new world.
19:33
And it's a good thing that it's a process because you have time to work through it almost.
19:39
Right? Like, yes, there are issues that we're starting to deal with already, but we can start thinking about them as we move along.
19:46
Mark, anything to add there in terms of, you know, how our thinking changes when we see Q-Day as a process?
19:51
Yeah. Massively important what Suja was saying. It really is pervasive and it's not an area in cryptography that was absolutely essential.
19:58
Because the one thing about cryptography more broadly, when when things don't work, when certificates don't work, whatever,
20:03
everything stops, things can't handshake properly. And so it's a it's a really important area, but one
20:09
which we have got pretty well working well and we have had over many, many years.
20:14
The thing now though, is as we enter this, this period, we really now have to start rethinking the way we approach this
20:21
in a way in which we necessarily haven't done had to do for some time. So of course, that that demands,
20:27
as you were saying, a different approach which pervades right across many different parts of the whole IT ecosystem.
20:34
So there's a lot of little pieces of the of the issue, essentially
20:39
that ecosystem that I was talking about that need to be addressed, that really it starts with understanding what's out there.
20:47
And as you said, you can't you can't deal with something that you don't know about. And so just getting to that discovery point is a pretty important
20:54
step in all of this, which actually is not to do with anything complex around algorithms or anything. We can get to that later.
21:00
It's actually just starting about, well, what have you got already and what do you know about today? And once you can get to that point,
21:06
then you can begin to work out, well, how are you going to prioritize and how you're going to manage it over that, that time period? Yeah, I like that framing a lot because I think especially
21:14
we talk about quantum, it can feel like a radical break from what's out there. Right. Like it can feel like something that's totally different than what we're used to.
21:21
But you a couple times now, Mark have gestured towards like, look, it starts with understanding what you already have, what's in place
21:27
and applying some fundamental principles just to a new kind of realm. And in this way, I see again that parallel between quantum and AI,
21:35
where like, it can feel so different from what we've seen before, but a lot of what we know can still be transferred over to this area.
21:42
It's just about okay, the terrain has changed. So how do we implement things the right way? And I want to ask too, because like I said, this,
21:49
this idea of Q-Day as a process was new to me and it was very clarifying. I would love to get your take on how the rest of the industry talks about this.
21:59
Do you think the kind of tenor of our Q-Day conversations is it on the right track? Are we sensational?
22:05
Are we not sensational enough? And Suja, I'll ask you first, do you feel like we've got the right conversation out there,
22:11
or do you worry that we need to change the framing? How do you feel about it? Look, from and I when I think about last year to this year,
22:18
I do see people are taking it much more seriously. Today we have we see about 30%
22:25
of the industry have started on this journey. Okay. I'm not saying they are in there, at least started on a journey.
22:32
They started at least in the strategize and discovery phase, right? So they are at least beginning in that which shows especially because
22:39
of regulations and also the finance and the health care industry and telecom
22:45
industry are the in the forefront of it because it matters for the critical infrastructure to be ready for this quantum era.
22:54
So I do see that the conversation has started, but we are only at 30% and we are in the first two stages.
23:01
I'd love to shift gears now to talking about the the so what? Right. The point of this show is to to offer people kind of, you know, pragmatic, concrete takeaways,
23:10
right? So let's start with talking about what does it mean for us that we are at the beginning of the kind of Q-Day process, thinking about this stuff?
23:17
Where do we get started? And Mark, I want to ask you, especially because earlier you had mentioned, you know,
23:22
some of the foundational stuff of cybersecurity still applies here. And I was wondering if you could start maybe let's talk about that first.
23:28
First. What's the foundational stuff that still applies to a kind of post-quantum world? Can you walk us through that?
23:34
Yeah. First things first is actually just realizing that there is an impending issue coming up. And Suja was saying 30% of organizations
23:41
really needs to be a lot more than that, because, as you said, right at the beginning, regardless of when the day is, if it's 29 or whatever,
23:47
when we know that the capability will exist, won't necessarily be immediately accessible for everyone to get to, but the capability will exist to undermine
23:55
current asymmetric encryption. So that that is not far away. And when you think about the complexity
24:01
of the interwoven nature of hardware software and how interoperability happens between different organizations,
24:07
unpicking that to discover where those cryptographic artifacts are and then doing something about it is pretty urgent.
24:15
And so what the so the starting thing is actually organizations have got to realize this needs to be addressed.
24:21
And this is not a you know, we just do it once and that's it. We can talk a bit more about that later on.
24:26
But the reality is this is a process that starts with really getting and digging deep into something
24:31
that perhaps organizations haven't had to do for some time. So it's an awareness point to start with, and that really has to be driven
24:38
from really a pretty high level within an organization, because there's so many different pieces of the ecosystem that needs to be touched,
24:46
and also the flow down interoperability that has to happen in their supply chains. If you think about the average enterprise, you know there's a lot to think about.
24:54
So the first thing is literally just getting the awareness to say, hey, we've got to get off to this and start addressing it.
24:59
And then really is the next biggest step in this journey is, as you've probably realized already, Matt,
25:05
Suja and I alluded to is, how do you discover what you've got? Because you can't deal with stuff that you don't know. If you don't know
25:11
it's there. So that discovery exercise, where are these cryptographic artifacts?
25:16
Who am I working with? What are they doing in terms of. Because if they start doing some changes and then the organization
25:22
that you're in hasn't done those changes, then obviously that could cause you some trouble in terms of interoperability.
25:27
Now's the time to think through that when we've got time. I'm afraid to do that and leave that much longer.
25:34
If you're in a pressured situation where others are changing around you and you haven't got on with it soon enough, and go on at least with a
25:41
decent amount of discovery at this stage, you could find yourself in a lot of trouble. So really, now is the time to get going and to get going with that,
25:49
that discovery exercise. Absolutely. And you brought up something there that I didn't really think about at all.
25:55
And it feels like a major, you know, a miss for me, which is that like, this is also a supply chain issue, right?
26:00
Like, like you said, even if maybe you're addressing some of the cryptography in your own systems
26:07
nowadays, nobody's making like software in a vacuum. We're using, you know, open source libraries
26:12
or code that other people have written. We're pulling it all together. So you could have your whole, you know, fiefdom can be all set up.
26:18
But if somebody's got got something, you know, if they haven't touched it in theirs, that can be a huge issue.
26:24
Suja, any thoughts there on like, you know, discovery like Mark said, is huge, especially in this supply chain
26:31
that we have built is very complex of our supply chain. Any thoughts on on how we actually discover these things?
26:36
What do we do? That's why this is not a project project. It's a transformation, right? The first one is you strategize, right? Okay.
26:44
Because this is hardware, software, network, all of these. And like you said, it's a supply chain. All your your vendors.
26:51
When are they going to be ready. So this is if your vendor is not planning to be ready then you have to have alternate.
26:57
That means it's a migration project. So that is why the strategizing is very, very important.
27:02
Then assessing like we Mark talked about, the discovery part of it, then you figure out how you're going to modernize it.
27:08
When you modernize, this is a transformation product. You have to govern and make sure that it doesn't waver from where it is.
27:15
And then you remediate when the day comes. When the algorithms are available, you are ready to be agile and remediate.
27:21
And the cycle continues, right? This is not it's a five step, but this five step keeps going.
27:26
It's in a circle, right? You strategize, assess, modernize, govern, remediate and then it keeps going.
27:32
And the biggest thing for us the strategizing is we you talked about supply chain.
27:38
If you are doing a hardware refresh today right. You don't do it every year.
27:43
You want to make sure that they are quantum ready so that you don't have to be spending money unnecessarily.
27:50
That is why we are starting today. Same thing. The certificate lifecycle is changing. It used to be a year, then it became 200, now it's becoming 100.
27:58
Then it is reducing it. Think about how are you going to make sure that they are quantum ready that way.
28:05
Because you can use some of these to accelerate your path and be ready for the new world.
28:12
Because look, this is not a question of whether a company is going to do it or not.
28:17
This is about like who's going to start first, because that is what that person is going to have the advantage. Because if you do it last minute,
28:26
it's going to be very, very expensive. Very, very expensive. Yeah, it's going to be very, very expensive. And also I could see, you know, you talk about
28:33
like you have to work with your vendors. Right. And if you have a vendor who isn't thinking about this or you are a vendor is not thinking about this,
28:38
you could lose some trust from from customers, right? Like if you're not starting to think about this and they come to you and they say, hey,
28:43
what are you doing for post-quantum cryptography? And they're like, nothing that people are going to start looking elsewhere.
28:49
You know, and you mentioned Suja, you know, modernization, right? Once you've actually looked at everything and you've kind of inventoried,
28:56
you figured out who you're working with, you're getting started, you want to do some modernization. And that makes me think about, you know, post-quantum cryptography or quantum
29:04
cryptography, which is I think when we talk about Q-Day, that's the kind of the top line thing that comes up a lot, which is like, you got to get that post-quantum cryptography.
29:12
What exactly is that, though? Mark, could you give us a kind of overview of what's the difference between cryptography
29:18
and PKI, post-quantum cryptography? What makes those things different? It's a great question. So look at the National Institute of Standards and Technology
29:25
ran around a competition a few years ago to, to really, to to for organizations to actually develop new cryptography
29:33
and that can't be unraveled by quantum computing to the best of our knowledge. And that's important because this will come back to our notion
29:40
of what we call crypto agility, because in the future we've seen we see cryptography being not so static as as quantum computing capabilities
29:47
continue to to emerge and become more powerful, then we see that the cryptographic approach is going to have to change as
29:54
that happens. But for today, and as we see a quantum, quantum computing capability being available,
30:02
the approaches that there have been a number of algorithms that have been developed, there are four and IBM, IBM has been at the absolute forefront of developing those,
30:10
those post-quantum resistant algorithms. And so what we mean by post-quantum cryptography is there's algorithms exist.
30:17
Now here's the catch. And the catch is that of course the quantum compute capability means that the algorithms have to be more sophisticated,
30:25
because they have to be able to withstand the now this new compute capability that's going to emerge, because obviously that's very different
30:31
from what we have today. So they are more complicated, they are potentially bigger
30:36
and they have different characteristics. So this is not a one for one swap.
30:42
So at the moment we have four post-quantum resistant algorithms. In the future there could be more.
30:47
And the way in which we deploy those and we think about how we deploy them. And most importantly, during this transition period
30:54
where organizations are in this transformation, they're going to have to make some choices about which is the most appropriate
31:01
and necessary algorithm to deploy in different scenarios.
31:06
So that's really why there is a shift from what was a fairly static environment to now, this environment where there are some choices based upon the complexity
31:15
of the cryptographic algorithms that are post-quantum resistant and that will continue to emerge and develop, we think, in the future as well.
31:23
Yeah. It's like Suja said, right. This is a cycle that doesn't stop. You might reach a kind of a moment of crypto safety or post-quantum safety, and then that might change again.
31:32
And you might need another algorithm or another way of implementing it. PQC is necessary, but it's not sufficient.
31:37
Crypto agility is the endgame, right? Are you agile? Because we are used to having an encryption and forgetting about it, right?
31:45
Because we are safe. Now you need to be agile and will be able to change as these algorithms mature,
31:51
as things mature. Are you able to be agile to take in? That means your protocols need to be upgraded.
31:57
Your systems need it's a hardware, software. Everything needs to be thought about and upgraded so you can be agile.
32:03
This is a serious thing. This is a real transformation and a transformation, not just in terms of we've got to do this big project now.
32:10
This is a transformation to how you operate. And in many respects, when we think about how AI is impacting our IT stack here,
32:17
that that is also a transformation in how we're operating as well. And that's where I think many organizations that Suja and I talk to.
32:24
Yeah, I've got to start with thinking about it in that way, real transformation and ground up. How do we think differently now
32:30
and get to a state of crypto agility? And that's different, as I was saying from today.
32:35
So it's this notion of we've got to think much more dynamically, be much more prepared to think we have to reopen, revisit as new things emerge.
32:45
And that, I think, is going to be a theme not just in the post-quantum cryptography space, but if you think about it just in terms of what quantum computing is going to offer for us in the first place, right?
32:53
Today we've got some ideas what they'll be able to do, but in the future, I think that will impact on the whole IT stack as well.
32:58
So there's this notion that we are now much more in this way of being able to think about it, much less static, much more dynamic and changing rapidly.
33:07
Yeah. It reminds me, you know, again, I didn't see these parallels before I started talking to you folks for this, this, you know, episode.
33:13
But it's almost like we're developing a similar kind of. And you can tell me if I'm wrong here, but it's almost like we're developing a similar kind of agility with AI in terms
33:21
of like, how the new models keep coming out and you kind of have like, you can't just sit and wait for, you know, like,
33:26
okay, this, you know, Mistral's preview is the model to end all models. Oops. No, it's not right. Like and I feel like that's
33:32
what we're saying about kind of quantum computing and quantum cryptography. Right. Is that like it's not going to be a thing where we find the one thing that we sit on for the next 20, 30 years, right?
33:41
It's going to be developing that agility. And we've said this term a few times now, crypto agility. And it might be useful to just kind of define it explicitly for our listeners.
33:50
Suja, do you have like a definition of crypto agility? What does that mean to you? Crypto agility is the ability to change your cryptography
33:58
as easily as a software upgrade, right. You're updating your software today. That is not how it happens.
34:04
It takes it's a huge transformation journey. We want to be in a place that you just, hey, I'm able to update it
34:11
like I update a software. So because the cryptography, as Mark was pointing out, will be changing and evolving and
34:19
vulnerable, new vulnerabilities will emerge and then the threats will shift. So that's what it is.
34:24
So for me, it's about can you upgrade it just like you do a software upgrade. You just put it in the night in your phone or something.
34:30
Upgrade and you'd upgrade it instead of having to go do this massive transformation. So the transformation map is
34:37
saying the transformation is about getting to a state where you can do that, not just about where you've worked out which are the best new bits of
34:44
cryptographic artifacts to replace the ones that you've got today. So you've got to think about it in that way.
34:50
And what I, what I would also add is when talking to too many clients, as Suja and I do, is when you think about that whole environment, that whole changing nature
34:59
that does make people suddenly lots of times I feel pretty uncomfortable, actually, because it's like, so this is not a one and done.
35:06
This is not I can do this and then I'm done. No, no, no, this is going to be an ongoing, as we said, crypto agile approach
35:13
as is as are now many other things in the IT environment. And that that it's,
35:18
you know, there's this notion that it's okay, a few things will happen, it'll be disruptive, and then everything will settle down,
35:23
and then we can just go back to how we used to be. Now that's not how it's going to be now. And some people are really excited about that.
35:30
You can probably tell that Suja and I are very excited about that. But some others, you know, find that a bit, a bit bit
35:35
hard to deal with and understandably so because it's like constant change. And that presents challenges. But it presents an opportunity as well.
35:42
And it's overwhelming. So I know I made it simple saying that, hey, it should be as easy. So what can you do?
35:48
So first thing is, when you're architecting, make sure that you're designing into the architecture.
35:53
Right. And the second one is knowing I think, Mark, you had mentioned knowing where your cryptography lays your certificates, algorithms, keys. Where
36:00
where do they live. That's where discovering and knowing that becomes visibility becomes very important.
36:06
And then decoupling this cryptography from your application so that it's not been built in your application.
36:12
And your this is you talked about the model example. So this is something that you reach out and then get it when you need it.
36:17
Then automating the lifecycle. Right. If a certificate is expiring, you are not finding out later and their systems are down.
36:23
You are automating this and building into the system. And establishing clean governance
36:28
so that when changes are systematic and you are not doing reactively. So when you do that in a in that fashion, it becomes much easier.
36:37
That is why it's a transformation journey that each one of our enterprises, including us, IBM, has scanned thousands of repos,
36:45
millions of lines of code building the cryptographic bill of materials. So we understand we are in the same journey, just like we are a vendor.
36:53
We are also in our own journey and we are learning from it. And then we are able to share it with our clients.
36:59
Yeah. I, you know, what's really cool to me here is that I walked into this conversation thinking the transformation
37:04
was just from cryptography to post-quantum cryptography. But it is so much more than that. And I can see now, you know, why you would say this is exciting?
37:13
Because there is something really cool about this idea of like, what if your cryptography was as agile as a software update, right?
37:18
What if you didn't have to commit to an algorithm for decades? You could use it when it was the strongest and when you needed to change it out,
37:24
you could change it out. That's exciting. I feel kind of energized by that, almost.
37:31
I do. So we're starting to run low on time here. And there's two more things I just want to ask you folks about real quick.
37:36
The first is we spent a lot of time here talking about kind of quantum computing as a big cybersecurity risk.
37:43
But I also am kind of wondering if quantum computing might have some benefits for us too, like, you know,
37:50
and again, not to hit the parallels too hard, but I think about AI, right?
37:55
We talk about it as a cybersecurity risk a lot, but we also talk about it as a major cybersecurity boon. Mark, any thoughts on like, will quantum also be good for us in some ways?
38:04
What do you think? Yeah, I mean, trust security to come along and spoil the party as as is often the case, but I try not to consider
38:10
and I really try not to. It's, it's it's it's it's only one sliver of what quantum is going to bring us,
38:18
and everyone wants to talk about it, and they should talk about it because as we said, it's urgent that we need to address it. But it is only one thing, which is that in the space
38:27
where quantum is going to bring us this unbelievable ability to, to, to perform very complex algorithmic, algorithmic, algorithmic tasks.
38:34
Right? That's one of the big use cases that quantum is going to bring us. If that one bit in there, which is the ability to run the
38:42
algorithm that's going to defeat some of our existing asymmetric encryption, that's the only thing really, which we have here,
38:47
which is the security focus downside of it. There are so many upsides. If you just go beyond the well, start with that algorithmic capability,
38:56
which is going to exist now, there are so many things that, you know, clients are already working with us on.
39:02
Think about complex financial ways of trading and transactions. You know, there's
39:07
there's complex algorithmic solutions that quantum is going to bring us that we can't do at the moment, even if the compute capabilities
39:14
as good as they are, quantum is going to really change that. We think about the whole area around natural sciences and the natural world,
39:20
how we can emulate the natural world, and especially in the life sciences and medical applications of thinking about how we can really use quantum computing
39:28
to unfold proteins and give us the ability to actually target, for example, treatment schedules and medicines designed specifically for individuals
39:37
really based upon the understanding how the quantum is going to bring us to be able to actually unlock some of the,
39:42
those processes that we haven't been able to in the natural world. So there are many, even just at this beginning point of quantum computing,
39:49
we can already see some clear use cases that are going to bring us some fabulous capabilities.
39:54
And of course, in security as well. So some of those things apply in terms of being able to now process complex algorithms, manage data, do sensing
40:03
in a way in which we can't get anywhere near at the moment. You know, that quantum capability is going to give us that as well
40:09
and give us the ability to respond and react much more quickly. So lots and lots of different applications, which are really exciting
40:17
and which are already people are beginning to talk about. The one thing I would say actually, is that because everyone's so fixated on AI
40:23
and AI deployment, that they're sort of forgetting that this huge revolution with all the benefits that will come from it is, is coming to us,
40:31
and we really need to start thinking about it because there's endless capability and opportunity. I think for
40:36
me, the healthcare, right, the amount of the compute, the research that we can do and then solve
40:43
a lot of like these niche 1 in 1,000,000, somebody is suffering. And because of that, we don't have enough compute to do research and figure
40:50
it out can be unlocked with the quantum computers. Look, we put the quantum computers on the cloud ten years back.
40:57
We have quite a million people already using it and published 6000 plus research papers.
41:03
And it's really, really exciting to see. This is this is another era, just like what we saw with AI and everything else that's emerging.
41:11
And this is going to be really, really good. Yes. With everything, we had to be ready for that. Then we have the time to get ready for the day so we can get there.
41:19
But what we will see on the other side is really, really exciting. And personally for me, it is on the medical field because and we see
41:26
a lot of partners who are putting, putting our quantum computers in their labs to go and start experimenting on. One is in the research
41:33
side of the world, education and also in healthcare. So I'm really excited about that. Absolutely. And yeah, you know, I, I just had to step back for a second.
41:40
Something you had mentioned there, Mark? I do, I kind of agree with you that like AI gets a lot of the headlines right now. But like quantum has been making
41:47
these quiet leaps in the background and really reaching levels that like just a few years ago, I'm not sure that we could have even imagined. And so, like, I think some really exciting
41:55
things are on the horizon. And I agree with you, Suja. You know, looking at those real world applications of like, think about medicine,
42:01
what could change there? But to close us out today, folks, I always like to end the show on kind of the a practical note, right?
42:07
So let's imagine somebody sitting there listening to this episode. They're saying, this all sounds amazing. What do I actually do right now?
42:14
Like, how do I get started? What's the first kind of steps I take? Mark, I'll ask you first your thoughts on like if you're an organization today,
42:21
where do you get started on this? Get a conversation going immediately at the highest level in the organization to say that this is coming
42:29
and we need to address in a transformational way how we think about cryptography
42:35
and then start deploying tools, start discovering where you have crypto cryptographic artifacts
42:41
across the organization to then get that cryptographic bill of materials, and then you'll have a chance of being able to
42:46
then think about what the strategy needs to be and the mitigation options to you, as algorithms
42:51
that are available now can be deployed or other mitigating strategies. So have a conversation, get going with discovery straight away.
42:58
Strategize and discovery. That is the biggest thing that you can start with. A few things.
43:03
The non-human identities, which used to be like 20 to 1 with human identity, is now
43:08
50. And and when I, when I was looking up before this meeting, it was 109 or something like that. So it is exponentially increasing. That's number one.
43:16
So when these things are already increasing, it's important to get started. For me, the enterprises that are going to win
43:24
are not the one that's moved fast. That's the one that starts early. Folks, that does it for today's episode. Thank you so much to Mason and Suja and Mark.
43:32
Thank you to the viewers and the listeners. Thank you to our producers. Subscribe to Security Intelligence wherever podcasts are found
43:38
so that you never miss an episode. Stay safe out there and if you have questions, comments, or concerns about Q-Day and the quantum future, drop them in the YouTube comments.
43:46
We'd love to hear from you. And don't forget to check out our latest bonus episode with Ryan and Schutz.
43:51
We talk all about patch management and why we need to actually ditch it for a new approach he calls Exposure Management
43:58
that's available on all the usual audio platforms right now.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️


IBM — Post-Quantum / Q-Day

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=RYUR9BdDgyI
source_title: The new post-quantum cryptography executive order. Plus: What is Q-Day, really?
channel_or_org: IBM Technology
speaker: Mason Molesky; Suja Viswesan; Mark Hughes; host Matt Kosinski
published_at: Jul 1, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: screenshot + pasted transcript
content_type: post-quantum cryptography / Q-Day / crypto agility / cryptographic inventory / harvest-now-decrypt-later / vendor security posture / non-human identity risk
source_reliability_context: IBM security discussion. Strong for infrastructure-security vocabulary and crypto-migration posture. Vendor/security framing; use as security substrate support, not OMNI care doctrine.
priority: 3.5/5
depth: medium_full_semantic
recommended_status: route to §C Security, classic infrastructure security, Settings security policy, Federation/vendor governance, D7 retention, Identity/non-human identity, Build-OS security scans.

Topic tags:
[post_quantum_cryptography, Q_Day, crypto_agility, CBOM, cryptographic_bill_of_materials, harvest_now_decrypt_later, vendor_readiness, key_lifecycle, certificate_lifecycle, non_human_identity, D7_retention, classic_security_lane]



Priority: 3.5/5
Depth: medium-full semantic
Recommended status: route to §C security / classic infrastructure-security lane / Settings / Federation / RBAC / Identity / D7 retention / Build-OS security posture. This is not v4-frame-changing, but it contains several bread-and-butter definitions OMNI should not lose.

Core takeaway

This video is about post-quantum cryptography, but the useful OMNI concept is broader:

Q-Day should not be treated as a single future disaster. It is an unfolding migration process across cryptographic assets, vendors, protocols, certificates, identities, hardware, software, and governance.

The best OMNI translation is:

Security transitions are not one-time patches. They are governed lifecycle substrates: inventory → risk-prioritize → modernize → govern → remediate → repeat.

The speakers explicitly frame Q-Day as a process rather than a sudden event, because cryptographic systems become vulnerable at different times and migration spans years.

Key definitions to preserve
1. Q-Day

Q-Day is described as the moment when quantum computing can break the public-key cryptography used for websites, email, signatures, bank accounts, blockchains, and other systems.

OMNI keeper: do not treat this as a date. Treat it as a long transition window where different systems, vendors, algorithms, and data classes become risky at different times.

2. Harvest now / decrypt later

Attackers may collect encrypted data now and decrypt it later once quantum capability exists. The transcript specifically calls out health and financial data as long-lived sensitive categories.

OMNI keeper: data-retention risk is not just “can someone read it today?” It is “will this still be sensitive when future decryption becomes possible?”

This directly lands in:

D7 retention
PHI storage
backups
audit logs
exported reports
shared_context_grants
archived documents
model/context logs
Evidence Plane retention
3. Post-quantum cryptography

PQC means new cryptographic algorithms designed to resist quantum attacks. The source emphasizes that these algorithms are not a simple one-for-one replacement: they are larger, more complex, and have different characteristics.

OMNI keeper: cryptography must be abstracted behind policy/config/rail layers. Do not hardcode crypto assumptions inside application logic.

4. Crypto agility

The clearest definition in the video:

crypto agility = the ability to change cryptography as easily as a software upgrade.

OMNI keeper: security primitives should be replaceable through governed configuration and lifecycle tooling, not buried across the product.

This maps strongly to Settings/Catalog as config plane, §C security, Build-OS, and vendor/subprocessor governance.

5. Cryptographic bill of materials

The source says organizations need to know where cryptography lives: certificates, algorithms, keys, hardware, software, third-party vendors, and repos. IBM describes scanning thousands of repos and millions of lines of code to build this inventory.

OMNI keeper: OMNI needs a security inventory / CBOM-style artifact, analogous to SBOM, but for crypto.

OMNI translation

This video is not mainly about quantum. For OMNI, it is about infrastructure-security lifecycle governance.

OMNI cannot only govern AI actions, clinical truth, and commerce. It also needs boring security substrate discipline:

certificates
keys
cryptographic algorithms
third-party vendors
TLS dependencies
signed artifacts
backups
data retention
identity credentials
non-human identities
device/agent credentials
API integrations
external rails

The source’s lifecycle is useful:

strategize → assess/discover → modernize → govern → remediate → repeat.

That is a good security-control-plane loop for OMNI.

Likely OMNI landing zones
§C Security / classic infrastructure security

This is the primary home.

Add or sharpen:

crypto_agility_policy
cryptographic_asset_inventory
cryptographic_bill_of_materials
certificate_lifecycle_monitor
key_algorithm_registry
post_quantum_readiness_state
harvest_now_decrypt_later_risk
security_migration_lifecycle
Settings / Catalog

Settings should host configurable cryptographic/security policy definitions, but not runtime secrets.

Possible definitions:

required algorithms
certificate duration policy
vendor crypto-readiness requirement
data-class retention sensitivity
crypto migration policy
security posture floors that cannot be configured away
D7 Documents / Evidence / Retention

D7 must understand that stored artifacts may have future decryptability risk. Long-lived PHI, signed documents, consents, exported PDFs, and media artifacts need retention and encryption posture that accounts for future threat horizons.

Federation / Vendor governance

The video stresses supply chain interoperability and vendor readiness.

OMNI implication:

vendors need crypto-readiness metadata
partner integrations need algorithm/cert posture
cross-operator grants must not depend on fragile crypto assumptions
subprocessor registry should include PQC/crypto-readiness fields
Identity / RBAC

The source notes that AI is causing non-human identities to explode, and the number is increasing rapidly.

OMNI implication:

non-human identity governance is not optional
agent credentials, service accounts, API keys, device actors, vendor adapters, and automation identities need lifecycle management
identity explosion increases crypto/certificate/key management burden
Build-OS

Build-OS should scan for crypto usage and insecure dependencies as part of CI/security posture.

Potential Build-OS artifacts:

CBOM generation
repo crypto scan
certificate expiry tests
dependency crypto posture checks
vendor readiness checklist
migration simulation
Doctrine candidates
Q-Day is a process, not a date.
Crypto agility is the target state, not merely PQC migration.
Security transitions require inventory before remediation.
You cannot protect cryptography you cannot locate.
Long-lived sensitive data carries future-decryption risk.
Cryptographic policy must be abstracted from application logic.
Vendor readiness is part of security posture.
Non-human identity growth increases cryptographic governance burden.
Net-new / sharpen / affirm
Net-new candidates

crypto_agility_policy
The ability to rotate/replace cryptographic algorithms, certificates, and protocols through governed lifecycle mechanisms rather than application rewrites.

cryptographic_bill_of_materials / CBOM
Inventory of algorithms, certificates, keys, libraries, protocols, vendors, and locations where cryptography is used.

harvest_now_decrypt_later_risk
Risk classification for long-lived sensitive data that may be encrypted safely today but decryptable in the future.

post_quantum_readiness_state
Readiness posture for systems/vendors/data classes against PQC migration requirements.

Sharpen existing

classic_security_lane
This source is a good answer to the C3.1 “classic infra-security under-covered” concern.

vendor/subprocessor governance
Add cryptographic readiness and migration posture.

non_human_identity
AI/agent identity growth increases key/cert/credential lifecycle burden.

D7 retention
Retention policy should include future-decryption horizon, not only current access control.

Affirm
security is continuous, not a later audit
supply chain is part of the threat surface
inventory/discovery comes before governance
static infrastructure assumptions are dying
policy/config abstraction matters
Reject / do not over-import
Do not turn OMNI into a quantum-computing company.
Do not make quantum medicine/drug-discovery part of OMNI’s core strategy.
Do not over-promote vendor numbers like “30% of industry.”
Do not treat PQC as a one-time checkbox.
Do not assume healthcare relevance means clinical workflow doctrine; this is infrastructure-security doctrine.
Hard read

This is a classic-security gap filler.

It does not reshape OMNI’s care thesis, but it gives the missing boring substrate language that a real enterprise platform needs:

inventory the crypto, classify long-lived data risk, abstract cryptography from application logic, govern vendors, automate certificate/key lifecycle, and build toward crypto agility.

Shortest OMNI version:

OMNI needs crypto agility the same way it needs model agility: the substrate must know what cryptographic assumptions it depends on, where they live, who owns them, when they expire, which vendors are involved, and how to rotate them without breaking care, commerce, identity, documents, or federation.

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

**Formalizes Knox Review 001 (medium-full/3.5); does not re-derive.** Grounded vs §1. Two-axis reality-check: `doctrine` (vs §C security lane + C3.1 covered-thin "classic infra-security" family + D7 retention + Federation vendor governance + §A non-human-identity) + `build` (repo grep: no crypto inventory/CBOM/cert-lifecycle/PQC tooling — absent). Binds nothing (`GRD-036`/`GRD-044`).

**Headline:** the wave's **classic-infra-security gap-filler** — it directly answers the C3.1 "classic security under-covered" concern (and 201's cluster-9 "security is continuous" posture) with concrete, boring, necessary substrate: **Q-Day-as-process** (not a date) → the security-lifecycle loop **strategize → assess/discover → modernize → govern → remediate → repeat**, plus a **CBOM** (crypto bill-of-materials), **harvest-now-decrypt-later** retention risk, and **crypto agility** (rotate crypto like a software update). 4 net-new §C/security primitives. The keeper meta-line: *crypto agility ⟷ model agility* — the substrate must know what crypto/model assumptions it depends on, where they live, who owns them, when they expire, which vendors are involved, and how to rotate them without breaking care/commerce/identity/documents/federation.

### A. Concept clusters (medium-full)

| # | concept | OMNI meaning | downstream homes | anchor (≤12w + [ts]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **Q-Day is a process, not a date** | security transitions are governed lifecycle substrates, not one-time patches; risk arrives in waves | §C security · Build-OS security posture | "Q-Day… more of a process than an event" [1:07]; "comes in waves, not in shocks" [15:06] | PARTIAL (201 "security continuous") | absent | none | spine (§C) | promote |
| 2 | **security-migration lifecycle** (strategize→assess/discover→modernize→govern→remediate→repeat) | the security-control-plane loop; inventory precedes remediation ("can't fix what you can't locate") | §C security · Settings (policy defs) · Build-OS | "strategize, assess, modernize, govern, remediate… keeps going" [27:26]; "can't deal with stuff you don't know" [25:05] | ABSENT (as-named lifecycle) | absent | none | spine (§C) | promote |
| 3 | **crypto agility** (rotate crypto like a software upgrade) | security primitives replaceable via governed config/lifecycle, NOT buried in application logic — parallels model agility | §C security · Settings/Catalog config-plane · §B (model-agility parallel) | "change your cryptography as easily as a software upgrade" [33:50]; "PQC necessary, not sufficient. Crypto agility is the endgame" [34:37] | ABSENT | absent | none | spine (§C) | promote |
| 4 | **cryptographic bill of materials (CBOM)** | inventory of algorithms/certs/keys/libraries/protocols/vendors/locations — SBOM analog for crypto | §C security · Build-OS (repo scan) · Federation (vendor metadata) | "scanned thousands of repos… building the cryptographic bill of materials" [36:37] | ABSENT | absent | none | vocabulary | promote |
| 5 | **harvest-now / decrypt-later risk** | data-retention risk ≠ "readable today" — "will this still be sensitive when future decryption is possible?"; health data = lifetime, financial = 10yr+ | **D7 retention** · Evidence Plane retention · audit logs · shared_context_grant | "collect now… decrypt later" [7:10]; "health care data… lifetime of a person" [18:39] | PARTIAL (D7 retention exists) | absent | none | spine | promote |
| 6 | **crypto abstracted from application logic** (decouple; reach-for-it-when-needed) | do NOT hardcode crypto assumptions in app code — config/rail/policy layer, automate cert lifecycle | §C security · Settings · Build-OS · §B (mirror of model-not-hardcoded) | "decoupling this cryptography from your application" [35:53]; "automating the lifecycle" [36:12] | PARTIAL | absent | none | vocabulary | watch |
| 7 | **non-human-identity explosion → crypto/credential burden** | NHI now ~50-100:1 vs human; each agent/service/API/device credential needs lifecycle mgmt — sharpens §A NHI + 201 cluster-4 | §A / Identity / RBAC (non_human_actor) · §C · Federation | "non-human identities… now 50… 109" [43:00]; "identities are exploding" [14:53] | AFFIRM (§A NHI family) | absent | none | vocabulary | watch |
| 8 | **vendor / supply-chain crypto readiness** | subprocessor/partner integrations carry crypto-readiness posture; cross-operator grants must not depend on fragile crypto | Federation vendor governance · §C · subprocessor registry | "it's a supply chain issue" [26:00]; "your vendors… when are they going to be ready" [26:51] | PARTIAL | absent | none | vocabulary | watch |
| 9 | **quantum upside (medicine/science) = future-watch** | quantum's non-security upside (protein folding, individualized treatment) — watch-only; do NOT make OMNI a quantum company | future-watch · low-authority macro backdrop | "unfold proteins… treatment schedules… designed for individuals" [39:28] | ABSENT (peripheral) | absent | none | no-op | watch (low) |

### B. Net-new primitives (dedup vs EVRUN-000001 §2A + 000002 registry)
- `crypto_agility_policy` — rotate/replace crypto algorithms/certs/protocols via governed lifecycle, not app rewrites — **net-new (§C security); parallels §B model-agility.** Mint.
- `cryptographic_bill_of_materials` (CBOM) — inventory of algorithms/certs/keys/libs/protocols/vendors/locations — **net-new (§C + Build-OS); SBOM analog.** Mint.
- `harvest_now_decrypt_later_risk` — retention risk class for long-lived sensitive data decryptable in future — **net-new; composes with D7 retention + data-class sensitivity.** Mint (safety/retention-bearing).
- `post_quantum_readiness_state` — readiness posture per system/vendor/data-class vs PQC migration — **net-new (§C + Federation vendor metadata).** Mint.
- `security_migration_lifecycle` — the strategize→assess→modernize→govern→remediate→repeat loop — **net-new-as-named (a §C control-plane loop; mirrors the CNS universal-flow discipline for security).** Mint.
- (sharpen, EXISTS-AS) `classic_security_lane` (this is a strong answer to the **C3.1 covered-thin "classic infra-security"** family) · `non_human_actor`/`non_human_identity` (§A; NHI-growth burden) · `D7 retention` (add future-decryption horizon) · vendor/subprocessor governance (+crypto readiness).

### C. Reread flags
- No screenshot / no Knox metadata block → URL/published_at `TK`; speakers + channel read from transcript (high confidence). References a "last week" US PQC executive order (accelerated 2030/2031) → dates the capture ~mid-2026.
- **C3.1 linkage:** flag to whoever owns the C3.1 covered-thin families — this source materially fills "classic infra-security." Also close-links to the open `08` security-lane items (REV-181 classic-security was close-eligible; this adds PQC/crypto-agility depth) — surface to the trifecta.
- Cluster 7 (NHI explosion) converges hard with 201 cluster-4 (long-running agent identity) → cross-source convergence noted in registry.

### D. Two-axis roll-up
- `doctrine=PARTIAL/ABSENT · build=absent`: all 9 — §C security lane exists but classic-infra-crypto (Q-Day/CBOM/crypto-agility/PQC/harvest-now-decrypt-later) is ABSENT-as-named and uncoded → **the highest doctrine-GAP source of the batch (fills a C3.1 covered-thin family).** 5 net-new primitives worth minting.
- No `ABSENT·present`. Genuine net-new: 5 §C/security primitives.

### E. One-line hard read
**Classic-security gap-filler, medium-full, 5 net-new §C primitives:** it doesn't reshape the care thesis but supplies the boring-but-essential security-substrate language OMNI's C3.1 audit flagged as thin — inventory the crypto (CBOM), classify long-lived-data future-decryption risk (harvest-now-decrypt-later), abstract crypto from app logic, govern vendor readiness, automate cert/key lifecycle, and build toward crypto agility (the security twin of model agility). Do NOT make OMNI a quantum company; do not treat PQC as a one-time checkbox.

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `§C security / classic-infra-security (primary; fills C3.1 covered-thin) · D7 retention · Settings config-plane · Federation vendor governance · §A/Identity/RBAC non-human-identity · Build-OS` · promotion: `watch → promote candidate (5 net-new §C primitives + C3.1 gap-fill; links 08 REV-181)`

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — transcript (§1) + Knox Review 001 pasted (Nick); §0/§0.1 metadata read from transcript (4 speakers; no screenshot); §3 Review 003 written (Opus; medium-full, 9 clusters + 5 net-new §C primitives + C3.1 classic-security gap-fill, two-axis reality-check); §4 filled; status → `analyzed`. Folded to `EVRUN-2026-000003` registry + coverage + anchor. Slug firmed → `ibm-security-intelligence-q-day-post-quantum-cryptography`.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

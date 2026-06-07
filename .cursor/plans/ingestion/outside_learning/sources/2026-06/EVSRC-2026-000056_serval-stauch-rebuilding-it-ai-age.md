# EVSRC-2026-000056 — Rebuilding IT From the Ground Up for the AI Age: Serval's Jake Stauch

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox read captured; metadata normalized; awaiting EVRUN)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> §0 + §0.1 are filled. **You: paste 1 (transcript → §1) + 2 (Knox → Review 001), then Cmd+S.**

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000056`  ·  filename: `EVSRC-2026-000056_serval-stauch-rebuilding-it-ai-age.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=j7ypvRUFY7M`
- source_title: `Rebuilding IT From the Ground Up for the AI Age: Serval's Jake Stauch`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  series: `Training Data`  ·  published_at: `2026-05-19`  ·  views_at_capture: `51,544`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `interview`  ·  source_reliability_context: `practitioner / founder-operator (agentic enterprise software)`  ·  topic_tags_light: `[agentic_enterprise, capability_gating, model_routing, IT_service_management, two_agent_architecture, agent_governance, Build_OS]`

## §0.1 — People / authorship / authority context  *(filled from screenshot description)*
- primary speaker(s):
  - name: `Jake Stauch` · role_in_source: `interviewee` · affiliation_at_publication: `Serval (founder & CEO)` · speaker_type: `founder / operator (agentic enterprise / IT service management)` · authority_context: `high relevance on agentic enterprise architecture — two-agent split (admin agent code-gens workflows; **help-desk agent can ONLY act through tools admins explicitly approve = scoped capability gating**), model-routing (OpenAI for end-user, Anthropic for code-gen), release-rollback discipline, "fewer-better" hiring moat. Own-product thesis; not clinical, not a standard` · identity_confidence: `high_from_screenshot`
  - name: `Pat Grady` · role_in_source: `host` · affiliation_at_publication: `Sequoia Capital (partner)` · speaker_type: `investor` · authority_context: `framing / host` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `Pat Grady`  ·  event_context: `Sequoia "Training Data" podcast`  ·  perspective / conflict notes: `Serval founder — frames "ServiceNow for AI era" favorably. **HIGH OMNI relevance: the approved-tools-only help-desk agent ≈ §C governed capability exchange / RBAC scoped authorization; model-routing + rollback ≈ §B model gateway + GRD-039.** Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): a Serval founder = high relevance on agentic enterprise design; architecture claims (two-agent split, approved-tools-only action, model rollback, rebuild-every-6-months) still route through evidence → interpretation → gated promotion.

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] Knox take labeled `captured_interpretation_nonbinding` · [x] EVRUN needed? `yes` · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️


Search in video
0:00
You know, I think that there's always a gap between the idealized vision of what you think your job's going to be and then what your job actually is. I think
0:06
it's true for every profession. You you idealize, and kids do this the most, right, when they're like, want to be a firefighter, an astronaut,
0:12
um what that job looks like. And then then you get in that job and you realize, oh, there's there's actually a lot in this that I don't like. And we
0:20
want to be the tool that that actually closes the gap between what you think your job's going to be and what your job
0:25
actually is. All
0:43
right, I'm here with Jake, the founder and CEO of Serville. Jake, welcome to the show. Thank you so much. Great to be here.
0:48
All right, we're going to start with a high level question. You guys are building kind of the next generation service now, like the AI native service
0:55
now, so to speak. That is right. Why does the world need an AI native service now?
1:01
Yeah, employees need help at work. That's kind of the idea here is we are a platform for employee support. The
1:07
technical term is enterprise service management, but what it really means is getting help at work. And the ideal way
1:12
to get help at work is you ask for something and you get it instantly automatically. You don't have to wait on somebody to track down a ticket and
1:19
assign a ticket to somebody. You just get help immediately. that requires you to have some kind of automated support
1:26
and that automation is is best built with AI. So we think about this from first principles. How do we support
1:32
employees? You automate all the requests. How do you automate all those requests? AI is really a good tool to bring that automation to employees.
1:38
Awesome. Let's say more about that. So I remember back in the day um when we
1:43
first met Fred Lety who was the founder of Service Now in like 2007208 sort of time frame and at that time people
1:51
thought that service now was amazing because it was this big step function change over paragrin and remedy and the
1:57
key thing that they got right was to think about uh enterprise software as an
2:03
abstraction is just workflows on top of a database right so they built kind of this flexible workflow configuration
2:09
engine on top of a database. And at the time that was amazing and you know it people loved it and and they were off to
2:15
the races. What I'm hearing you say is that that's not enough. With AI there's kind of a new generation of automation
2:21
that can be done. Can you just say more about the thing that Service Now built and the thing that you guys have built
2:28
and kind of the side by side like what is truly different this time around? They got it right. uh we also built
2:35
workflows on top of databases and that is the right uh abstraction that those are the right primitives.
2:40
The problem with their workflows and databases is that they require a lot of manual effort to build and maintain. So
2:46
building those workflows often requires dedicated development resources to put those together. And while that sounds
2:53
fine, you invest those resources and you get a beautiful automation on the end of it, that can take weeks to months. And
2:59
in an era where business processes are changing very rapidly, by the time you get that workflow implemented, your business may have changed and moved on
3:05
and you you want a different workflow. And so your automation kind of runs behind where you want it to be. And
3:10
that's more true now than ever before. Same with the database. If if you need to manually update those entries and
3:17
look at your IT assets and make sure they're up to date in those systems, that's going to be very very painful to
3:22
have to bring in consultants or internal developers to update. We took this unique approach of let's keep those
3:29
primitives workflows on top of databases but allow you to use AI to build the workflows and use AI to update the
3:35
databases. And the way we do that is this codegen engine where you describe the workflow that you want all the
3:42
different steps and permissions and approvals and logic and we take your natural language description. We turn
3:47
that into code and so your workflow appears instantaneously. There's practically zero time to develop those
3:54
workflows. And the same thing goes for our databases. You can describe exactly
3:59
what data you want to take from which sources and our system will actually generate the code to fetch that data and
4:04
keep it up to date without you having to do any kind of manual intervention. I remember you said uh months ago, this
4:10
is one of the things you said when we were first getting to know each other that really piqued my interest. something along the lines of if you
4:16
really want to drive enterprise automation, you have to make the process of building the automation just as
4:23
simple if not simpler as the workflow being automated. Exactly. Is that Do you still believe that? Is
4:29
that still true? I still believe that. And and that insight came from just putting yourself in the the shoes of someone in it or
4:36
another function and you're presented with a task. Somebody asks you to reset their password and you've got two
4:41
options. You can go into Google Workspace, find the user, hit a button that says reset password. Yeah.
4:47
Or you can open up a workflow builder and you can drag the trigger and then you can drag the response and then you
4:52
can you can build out this custom workflow. And when you're presented with that choice, you're just going to reset the password.
4:58
You're going to do the manual thing. But if it were actually easier to build the automation, you would build the automation because it's just why
5:04
wouldn't you? And I think that it comes down to that people in the moment have to make that decision. And you want that decision to
5:10
be very very easy to opt for the automation, not opt for the manual step. Now, is there is there such a thing as
5:16
being too simple to automate? Like is it is there you know people talk about the vibe coding and all the slop that it
5:22
produces. Is there such a thing as slop automation? Yeah, it it is. It's real. And we've had
5:27
to build some really interesting things around that because Yeah. When you make it so easy to automate, somebody might build the 20th password reset workflow
5:33
this week. Yeah. And it's basically the same as the 19 that came before it. And now you've got all these uh duplicate workflows and the
5:40
AI gets confused on which one to run. Yeah. How do you guys manage that? We we built a uh a new agent basically
5:46
on top of servo. That's we're we're really excited about that has full contextual awareness of all the
5:51
workflows you've ever built before, how they work, what they're going to do. So when you say, "Hey, I want this workflow
5:56
that does X Y and Z." It says, "Hey, actually you've got 19 that already do that. I could modify one of these, but here's what I think you should do. I
6:02
think you should actually delete 10 of them. separate these remaining nine into these different categories, add these
6:08
approval steps and so it actually walks you through the system and is kind of your assistant that's an expert in our product to help you translate your the
6:14
business requirements into the actual uh product implementation. Speaking of the product, so you're a product guy and one of the things that
6:21
we've heard about you consistently from every possible source is that you're extremely customer focused and like
6:27
really good at listening to customers and figuring out what they need. Do you have a northstar metric that you rely on
6:33
that just tells you the product is getting better and more useful or is it more you collect all the anecdotes, you
6:39
synthesize them, you kind of have an intuitive sense like is there a number that you can look at? I think it's the latter. Like I try to
6:44
be embedded with the customers like full immersion. I am in every single customer Slack channel. Yeah. I think most of our customers will get a
6:51
slack from me and that channel every single day. Wow. And that is a huge maybe
6:56
and just to set the context a listener might think like okay you probably have four customers. How many customers do
7:01
you have or No, over a hundred customers uh and and a lot of large enterprises and it is
7:07
overwhelming at times to be in all those conversations all the time and sometimes I feel like oh man am I wasting my time
7:13
but I feel like I really understand what's going well what's not going well and and I just have my finger on the
7:18
pulse and there's just no substitute for that especially when a lot of the implementation work has gotten very fast
7:25
more and more of the moat for any startup is the customer insight the empathy of like actually understanding
7:31
what they want and if we can have a differentiated advantage around the customer insight
7:36
that's going to be much more valuable than having a you know a product uh advantage which is copyable overnight.
7:42
Let's talk more about that because um this has been a hot topic for a few years now. You know chat GBD comes out
7:48
in November of 2022 and immediately people start deriding application layer
7:54
companies as rappers on top of a foundation model. Right. And what you just said kind of plays directly into
7:59
this theme of there's always a school of thought that says well the foundation model is going to just do everything and
8:05
then there's a school of thought that says sure but you can build a company on top to close the gap between raw
8:11
capabilities and like actual customer problems. How do you view your role
8:16
running an application layer company versus the role of the foundation models? Like where do you think the moes
8:23
form around your business over time? Basically to the extent somebody listening is interested in like how do
8:29
you build an application layer company in this era? What are your thoughts on that? I think you have to be happy when
8:36
the new models come out and that is that is kind of the guiding principle that we have is how do we make sure whatever
8:42
we're building is actually not made obsolete by whatever the labs and hyperscalers come out with but actually is is made better.
8:48
What's a good example for us? We think the product is the boundaries. The product is the controls.
8:55
uh the product is actually what limits the capabilities of the model because the question now is not can Opus can uh
9:01
GBT 5.5 do these amazing things can they do the things I want to do in my
9:06
enterprise environment the capabilities are practically unlimited it's the limitation now is how do I get
9:13
comfortable as a large enterprise that cares about security and deploying this companywide without elevating my
9:20
security risk and so we think about it from the boundaries and so that means really boring old school enterprise
9:26
software things around permissions and approvals and uh limiting the scope of
9:32
your API integrations and having visibility into that, having audits and and reporting and logs and alerts and
9:40
just all of the things that make you feel comfortable letting the models run
9:45
wild in your environment. And so one of the fundamental things we did from an architecture perspective is kind of divide the agents into two parts. So our
9:53
our customers when they experience servo, there's there's really two agents they work with. One is the admin agent
9:59
that helps build all of these tools and skills that configure how the help desk
10:05
what what things that the help desk agent can do and what it knows about. And so it's the admins that build that
10:10
and then there's a help desk agent that end users talk to that resolves their problems. The help desk agent can only
10:17
use the tools and skills that have been expressly built, published with approvals and permissions and all of
10:23
that by the admins. And that architecture, that kind of like two-pronged architecture ends up being
10:29
really, really powerful because you can let the help desk agent run wild, right? Because the end user can ask it anything
10:35
and it can use its reasoning ability and its full intelligence to be able to solve a user problems,
10:40
but it can only use the tools that the IT admin has expressly said are okay to
10:46
use and those may have approvals attached, permissions that gate certain users from doing certain things. All of
10:51
that is done on the admin side, but then you get like kind of the full ability and intelligence of the help desk agent
10:57
to use those tools appropriately. What's under the hood? Is there anything you can say about which models you guys are having luck with and maybe how
11:03
that's evolved over time? Yeah, we we use open AI and anthropic models today. Um, always experimenting
11:10
with the latest models from all providers to make sure that we're on the cutting edge running evalues on on
11:16
everything that we do. Um, today it's still open and anthropic models. We find
11:22
different models are better at different uh applications. So for the interaction
11:27
with the end user, we're seeing the most luck with OpenAI models um and that has
11:33
remained consistent for quite a long time that you know actually calling the correct tools and responding to user in
11:39
the appropriate way that still we're having a lot of success with with various GPT models and um you know
11:44
always keeping those up to date depending on on the latest release. But on the automation side the which is
11:50
mostly codegen automation having the most success with entropic model. So interesting. Um continue to use those sonnet, Opus.
11:58
Um and tons of trade-offs between the different models. And I think what's interesting in recent times is is the
12:04
new releases often times are not just like plug-andplay. You know, sometimes you get some advantages and some things
12:09
that were working really well don't work as well anymore. So that's become an interesting challenge as things go actually. Yeah. How do you guys manage
12:15
that? Like how long does it take to incorporate new models into the production version of your product? How
12:20
much of that process is like automated in some fashion? How much of that is somebody just has to sit down and figure it out? Like how do you manage that?
12:27
It's not as automated as I'd like. We we have the eval but then in every situation when we when we have a new
12:33
model that we're testing, some things get better and some things get worse. And a lot of things that get worse, not necessarily the model got worse, but we
12:40
built a lot of prompt tuning and a lot of uh infrastructure around the known
12:46
quirks or or behaviors of that model. And those make less and less sense when
12:51
the new model comes out or where you're swapping models. And so that's where a lot of the adjustments have to be made and then you kind of run it through the
12:57
evals and then you do a slow release across customers. So we're getting better at this. But I think there's there's certain cases where the
13:03
trade-offs have not been worth it where we've actually uh upgraded models and then downgraded the models and said, you
13:09
know what, the old models are maybe they're a little bit faster um or maybe they're reliable in a way that the new
13:14
models are. And so maybe the new models are a little bit smarter, but they misbehave in ways that are less
13:20
predictable and we have less predictable guard rails to prevent against. And so we're like, hey, this model might not be
13:25
as smart, but we know it's going to behave the right way for these customers. So um it's been an interesting challenge
13:30
and it's changed over time. How much are you guys um factoring cost into the equation right now because I
13:36
think you know step one you got to make sure the product does something magical. Yeah. Step two, okay, now let's make sure we
13:42
got a business, you know. Exactly. and we can you know we can extract an appropriate amount of value for for this
13:47
functionality. Do you guys think much about cost at this point or we kind of know where that's going over time. Let's
13:53
make sure the product is magical and we'll figure out the cost element later. It it's the latter and I think one of the reasons that give us this flexibility is
14:00
that our unit economics end up looking much better than a lot of AI companies because we are not in the business of
14:05
reselling tokens. The way that our product works is that you build these automations which are, you know,
14:11
basically TypeScripts. And once they're built, you don't have to rebuild that. And so every time the
14:18
end user asks for a password reset, it's not going and regenerating code to reset a password. It's actually just running
14:24
the code that's already been generated. Over time, users have to generate less
14:29
and less actual code because we have a a growing library of automations that
14:34
cover the very long tale of things that you might want to do. And so there's not as much uh especially in the the kind of
14:41
very expensive codegen uh token consumption. There's not as much as you'd expect. And so the unit economics
14:46
are very strong even though we haven't done a lot of optimizations around that. So I tried to tell the team spend more
14:52
money, use the best possible product. we know longterm where this is going. We know that there are all kinds of
14:58
optimizations we can make down the line. Um, so that's been our focus to date. Think that though where it starts to get
15:04
more interesting is is as we explore more and more applications of like background agents, longunning agents
15:10
that are not just responding to help desk requests or not just building quick scripts for you, but investigating all
15:16
of your historical tickets or investigating logs from devices and and doing all this work in the background
15:22
and maybe generating solutions to problems you didn't know you had. That's where it becomes a little bit more interesting where maybe the costs become
15:28
more relevant. So, that's where we'll probably start to think about cost a little bit earlier in the journey. Um, because those could run away pretty
15:34
quickly if you're not keeping an eye on it. Yeah, that makes sense. Let's say somebody at OpenAR Anthropic wakes up
15:40
tomorrow and they're like, "Wait a minute. I found this company called Service Now and it seems to be like a
15:46
major system of record, major center gravity inside the enterprise. I think we should build as a first party
15:53
product, you know, the OpenAI service now or the or the anthropic service now." If they set their sights on you
15:59
and come after you directly or come after your category directly, what would that mean for serv? Yeah, I mean this this is always a
16:06
really tough question because on the one hand any response to like okay this company with infinite money and the best
16:12
engineering talent and AGI wants to do what you do, how are you better is kind
16:18
of like any response to that is going to sound pretty naive of like well we're just going to like beat them. Um but I
16:23
think the history of startups tells us that often the smaller company does beat them. I mean that the existence of
16:29
OpenAI and Enthropic are kind of proof that you can beat the entrenched
16:34
incumbent with infinite resources. Uh and and I think it comes down to you know maybe divine providence favoring
16:40
startups or maybe like a a lack of focus uh is is often what makes it hard to
16:47
execute. And so, you know, when I was starting my first company, the whole, you know, every VC would ask me, uh, won't Google just do this? And, and yes,
16:54
Google will do a lot of those things, but it actually is very hard to do a lot of different things really, really well,
17:00
and it's hard to to divert your focus into all these categories. And I don't think ITSM makes the most sense as a
17:05
focus area. One reason is that I think in the past couple months, Enthropic has added more ARR than Service Now has in
17:12
the past 20 years. Good point. And so does it really make sense for them to take their best and brightest people to throw them at this
17:18
problem that even if they are very successful would not be really it would take them years to get what they could
17:24
get out of the rest of their product portfolio in a matter of months. And so I I don't think they're going they're
17:29
probably look at this category. I wouldn't be surprised if they they built some kind of simple version maybe a more
17:34
mid-market or SMB focused version. but to really devote the time and energy to to master the complexities of enterprise
17:40
service management. Not to say they couldn't, but the focus that would require I think would be a bad use and
17:45
bad prioritization of their resources. And I don't think that that's going to happen. Yeah, I think you're right. Um, let's
17:50
talk about your customers for a minute. So, you got a bunch of the kind of really nice AI native logos and you're
17:58
also starting to have some kind of big enterprises. How do the needs differ from the AI
18:03
native crowd to the big enterprise crowd? And if you had to pick from each
18:08
of those, what's the nicest thing that they would have to say about you? You know, serville is amazing because what
18:14
would they say? Yeah, I think what's been the biggest learning is how similar they are
18:19
relative to how different. I expected them to be much more different, but the pain points and the problems end up looking remarkably alike from the AI
18:25
native to the the large enterprises. You know, we work with companies as small as a few hundred employees up to companies
18:31
as large as a few hundred thousand employees. The difference ends up being how many
18:36
people it takes to make a decision. And that's what actually makes things really challenging is because it's more of a go to market thing.
18:42
It's a go to market. It's an implementation thing more than that though. So when you're if you're working with a company with a few hundred employees,
18:48
there's probably an IT leader that can say this is how we're going to do things. This is how onboarding works. This is how we're going to reset passwords.
18:54
Whatever. If you're working with a company with a few hundred thousand employees, no one even knows who that person is if that
18:59
person exists. And so you end up in all these kind of committees trying to figure out what should we do here. And
19:05
that's actually what makes it very very challenging. Um and I think you see that in in these labs building out these
19:11
consulting businesses and more and more services and deployment resources because that ends up being a lot of the
19:17
the rate limiting step and adoption is coordinating all these folks. So what would the nice things they say about me?
19:23
I I think uh or about servil um in the the AI native early stage companies we
19:28
we often just we take an IT person that's passionate about technology and we let them spend their time building.
19:34
They got into it because they love technology and so much of their job before serving
19:40
to experience technology. Um my favorite example of this is a customer we had that spent a lot of their day fielding
19:47
service now requests to provision someone's access to cursor. Yeah. And that juxtaposition was just so
19:54
sad. I'm like I am in this like ancient ticketing system helping somebody else
19:59
at the company get access to a really cool AI tool and my tools are still uh
20:05
stuck in the past and I don't get to use the cool stuff and with servo they get to use the cool stuff like there's actually an AI tool for it built for
20:11
them and so that's I think what we see on the the native side. I think in the large enterprise, you know, generally
20:17
they're thinking about it at at just a higher level of of business transformation. And we hear a lot more
20:23
about the end employee experience because at a small company, even if your IT processes aren't perfect, no one's
20:29
waiting weeks to get a response back from it. But at a large organization, like you could send a ticket into, you
20:36
know, into the abyss. Yeah. And and just have no idea where it's at if it's being worked on. So then you'll send another ticket and then there's
20:42
confusion on the other side because now you've got two tickets from the same person and and there's actually people that are blocked for weeks from getting back to
20:49
the thing they're trying to do. And so I think in a large enterprise we actually change the employee experience and what
20:54
it feels like to be an employee and and have this more broad impact because the problems are actually a lot
21:00
deeper in those big organizations. What is a delightful or a surprising use of servo at serval? How do you guys use
21:08
it? Oh man, I forced the team to use it for everything. Um, so every time So where do they really push the
21:14
boundaries of like Exactly. I mean obviously like things like office requests, like snacks, like all of that has to go through serv. Um,
21:20
but I think one of the coolest things we do for Serville is one, we have a channel called Dream Team Draft. We take
21:26
this very person first approach to recruiting where we want to identify the best people in the world and we want to
21:32
bring them to Servil versus just cast a wide funnel, host an open try out and see who makes it. And so people put the
21:38
best people they've ever worked with in this channel. They post to LinkedIn. That's a servo channel. So serville will take that profile and then run a series
21:44
of automations. One, it'll it'll run into all of our outbounding campaigns, our nurturing campaigns. It'll also do a
21:51
lot of things that my marketing team won't let me talk about of like making sure that they are seeing Servil uh
21:57
everywhere they go and and Servil becomes very top of mind for them. And we basically warm this audience to make
22:03
sure that that they know about Serbal. and we're playing the long game because these are generally not people that are going to leave their job tomorrow, but
22:09
people that we'd love to work with one day. And so I I love the idea of going in and saying like, "Hey, all I have to
22:15
do as an employee is just say, I love this person. They're great." And I'm done. And the talent team will be able
22:20
to through serval have all these automations that kind of get them into the the system. That is very cool. Um, what's the best
22:27
reason to work at Serv? Like why do people join your team? I think it is the greatest group of
22:32
people I've ever worked with. I think when you walk into our office and you meet our team, it's just a group of so,
22:39
you know, people that are so kind and so talented and so fun to be around. And I think that that's what's really unique
22:45
is is I didn't even know I was selecting for this when we started the company, but something candidates started telling
22:51
me is that, wow, your team is so nice and they're so fun to be around. And like I walked in the office and the
22:56
energy was just contagious and I I wanted to work there. And obviously there's really interesting technical
23:02
problems. You know, building these really complex enterprise automations, getting to touch HR, legal, finance, IT,
23:08
security, like it's kind of a training ground. We often think about this as a training ground for anyone who wants to do anything in AI. You get to like touch
23:14
all these different departments, build all these cool workflows. Um, but I think the, you know, if I'm being
23:20
honest, the reason you join servil is because you meet the team and you realize this is the place for you. Yeah. Very cool. We heard some of the
23:26
words that you used to describe your culture. you know fun and nice and high energy people. What is it not?
23:33
It is not a good place um for let's say a lot of training or mentorship.
23:40
So everyone is kind but everyone's doing their job and there is not a lot of hey
23:45
you're going to be onboarded through this program and you're going to learn how to do these things and we're going to train you really well and we're going
23:51
to pair you with you know some resources and coaching and mentorship and uh there are great companies that do that really
23:56
well. We are not one of them. So, we we hire people to come in and and basically be productive on day one. Um, and who
24:03
like that ambiguity of I've got to show up and figure out what I'm supposed to do and then do it really really well.
24:09
Um, so it's it's not a place for coaching mentorship. It's not a place for very clearly defined career paths.
24:15
We don't know where a lot of these functions are going to go. So, there's not going to be this clear progression up the org chart. There's not really an
24:21
org chart. I don't actually know who reports to me at the company. Um I I I am like blissfully unaware of who
24:27
technically reports to me versus other people because we try to keep everything as flat as possible and and so if you're
24:33
looking for that kind of like natural progression, you know, it's just not going to be a good place for you. Yeah. As far as one of the big topics
24:39
that uh we've had a lot of conversations on recently just amongst founders and folks is this idea of living in the
24:47
future and not only the product that you build needs to be AI native but the way
24:54
that you build it and the way that you manage your organization needs to be AI native um beyond using serville itself
25:01
like what does that mean for you guys like how has the way that you operate changed this time around versus Vicata
25:08
or your prior companies in so many ways. So one is we are questioning everyone's role uh every
25:15
department we're wondering if it needs to exist anymore and it still makes sense and oftentimes it does you we
25:20
relearn the necessity of some departments that we thought maybe we didn't need and but we start with the
25:26
the assumption that maybe this doesn't need a person anymore. Maybe this could be AI. So AI almost gets like the right
25:31
of first refusal for every job or every department of like hey maybe we don't need this at all. Um, and maybe this can
25:37
be much smaller than maybe this. Is there a good example of something that fully went to AI? Um, solutions engineering. So, we don't
25:44
have sees, we also don't have STRs, but I think that's been that's less of a controversial take um over the past few
25:50
years, but we don't have SDRs and we we don't have solutions engineers. Um, our reps are not necessarily more technical
25:57
than than reps in in past generations have been, but they have access to servo. Yeah. And so any question they
26:03
have about how the product works or that a customer comes up with a prospect, Serville is going to give them an instant a answer to that question.
26:09
Servil can even build them decks, build them um one pages and quick uh you know
26:15
battle cards and comparison sheets like all of that on the fly in the middle of a call. So we expect more out of our AES and
26:21
they're not going to have the SE resource. Um we do have four deployed engineers that assist with the actual pilot implementation but that's been one
26:28
example where we didn't need that. We also delayed hiring in a lot of domains like in in um and sometimes not by
26:34
choice just by uh the slowness of our hiring but we've discovered how fa how far we can get um on the enablement side
26:40
we have uh someone in product marketing who's done an incredible job of like building out enablement and all these automated resources and scaled that
26:47
quite far and we we definitely need more help there but you know a lot of times you get further than you think with these AI tools um revops is another one
26:55
where we've gotten pretty far without a rev ops hire but then discovering like actually you do need somebody eventually And so there's a lot of these things
27:00
where you delay it a little bit and you're like actually we need somebody but maybe this department is a little bit smaller than we thought it was going to be.
27:06
Company is about two and a half years old thereabouts. Just two years old. Two years old. Okay. In the last and you guys have grown like crazy. More people,
27:12
more customers, all that good stuff. How has your job changed in the last two years?
27:17
In the very early days, I felt very useless honestly. Um my CTO is is
27:24
building the product and it's very clear what we need to build. uh there's so much to build and I'm trying desperately
27:31
to hire and to set up customer calls and maybe try to sell this thing and it's just not working. Um and so I think in
27:39
the early days it was kind of like trying to figure out how I can be most useful when we don't really have a business yet. And then over time it it
27:46
switches and and it becomes a business and stops being me kind of pushing the boulder up the hill and and more of the
27:52
business dragging me along. Um, I think what hasn't changed, I'm still very involved with customers, both in the
27:58
sales side, but also in like the long-term success and talking to customers every day. Um, I'm still very
28:03
involved in recruiting. What I'm not as involved in that I'd like to be is is a lot of product. Um,
28:10
in the early days, I am thinking non-stop about the product direction. And now it feels like the product
28:16
direction is kind of emerging from our customers through our four deployed engineers and going right into the product. And which is in many ways great
28:22
because you have this kind of nice closed loop of customers talking to four deployed engineers and then the products
28:27
getting implemented and getting better all the time. You know, I've often referred to this as like gradient descent for product improvements because
28:33
our four deployed engineers are just just swarmed with all these uh you know,
28:38
all this feedback from customers and they're like, "Oh, I'll fix this. I'll make this better. I'll change this." And like you fast forward a week and like,
28:44
"Wow, the product is a lot better than it was a week ago." And it keeps going that way. Um, but I get to spend a lot
28:49
less time thinking about the future and and where we want to be. And I think that's something that that I need to
28:55
spend more time on because this stuff is changing so quick. To your question earlier about, you know, how are we
29:00
different as an organization and and an AI native organization, I think a big difference is you have to be willing to
29:07
reinvent yourself so much faster and disrupt yourself so much faster. like we are thinking about just uprooting things
29:13
that we were convinced were true months ago and going in completely different directions in all these different ways
29:19
and we have to have that flexibility. We're going to be renaming parts of the product. We're going to be completely shifting how we do certain things in the
29:26
product and we have to be willing to do that over and over and over again. And there's going to be less of this idea of
29:31
like I am building software that's going to last for 20 years and more I'm gonna build software that hopefully will last
29:37
six months and then I might have to rebuild it uh once the paradigm shift and the markets have changed.
29:42
Yeah. And let me ask you about that because there's a foundation model on one side or a set of foundation models
29:47
and capabilities. There's a customer on the other and there's servo in the middle and these capabilities are
29:56
changing at a very rapid pace. this customer is probably not changing all
30:02
that fast and so you guys in the middle are kind of this buffer that is trying
30:07
to take all these capabilities and put them to work for the customer. So so the question is really it's kind of a change
30:13
management question like how do you keep the customer from drowning on this
30:19
downpour of capabilities coming out of the foundation models. I think that's exactly the right way to think about it. We are in we are kind of
30:25
the that translation layer. Yeah. And we have to meet customers where they are. I mean I think we very much have to
30:31
understand their business problems and that's what what really helps with the for deployed engineers is we are starting with their business problems.
30:38
What are they trying to solve for and then we are helping them discover how those solutions are implemented in servil. We are on the other side
30:45
figuring out how to take in the latest advances in AI to be able to deliver those solutions. And so that is kind of
30:51
what role we serve. And then we're often educating them of like, hey, here's how we do this. And by the way, it's changed
30:56
since how we would have done this three months ago. And we have these new tools at play, but we will be the ones to help
31:01
figure this out for you. And one of the things we're working on is how can we bridge that gap a little bit more uh
31:06
succinctly. So how can we make, you know, an agent available to the end user that kind of says, okay, what are your business problems? Cool. Here's what
31:13
we're going to do. Here's we're going to solve them. So you don't really have to think about the latest advances. Servil just kind of takes care of that for you
31:18
and you just have to focus on what are your problems? is what are you trying to achieve? What's your most contrarian take on the
31:24
world of AI? So, one take that I have which I don't know how uh contrarian this is, but I
31:30
think there's this big gap emerging between who wants autonomy and who wants
31:35
control of these agents and the individuals in an enterprise, they want autonomy. They want their clawed agent
31:44
to do everything for them and have access to everything. the organization itself doesn't want their employees
31:51
agents to have all this autonomy and there is this interesting tension
31:56
emerging between and I often see this in consumer versus enterprise products where the consumer products obviously
32:02
are built for a world where you want it to do everything and the enterprise products are built more with this control layer and what's happening in
32:07
the enterprise is that the individuals are adopting these tools and wanting it to be able to do more
32:13
and the the security organization the IT organization is very worried about this and for good reason and I think that's
32:21
something interesting to track is this tension between autonomy like do organizations actually want autonomy or do just individuals want autonomy and
32:28
how do you navigate that tension and that's where we're thinking a lot about the servo product and how we help solve
32:34
that it reminds me of shadow IT back in the day when consumers started to adopt
32:40
iPhones and enterprises still had blackberries because they could lock down the Blackberry and the iPhone
32:47
started to show up with work information and then work applications and they're kind of sneaking their way into the
32:53
enterprise. And the instinct of most CISOs was, you know, protect, protect,
32:58
protect. And then I think eventually they realized, well, wait a minute, this is kind of the leading indicator on what my employees need to be productive and
33:05
they started to embrace it. Yep. Right. And it it feels like the same thing's happening now with AI where
33:11
employees kind of a lot of them kind of know what they need to be productive and as long as you can just kind of
33:17
systematically follow those signals and embrace it, you're more likely to end up on the right side of history.
33:22
Yeah. And I think the companies that that basically say yes as the default are going to
33:28
be way ahead of the companies that say no as a default. And we're seeing this with the companies that just embrace it. they will also kind of be leading the
33:35
charge and face a lot of the consequences of there are going to be security incidents, there are going to be problems and and we're going to learn
33:42
a lot from those. But I think that that is uh that is what we're going to see is the companies that take those risks are
33:47
going to get ahead. Yeah. But that you know those risks are real and they're also going to be some of the ones that suffer some of the
33:53
consequences on the security incidents. What's your biggest issue at the moment? Our biggest issue is hiring still. every
33:58
AI company I talk to is is in the same situation. Even though AI is allegedly supposed to
34:04
automate all this work and take away all these jobs, we're all still hiring more than ever before and it's still like our
34:09
number one priority and our number one concern. And so, um, but I think people remain the biggest moat you can have and
34:15
having better people in the room is really the only thing that's will keep you ahead of the competition. It's the
34:21
only moat that's left is the people in your organization. So hiring and scaling
34:26
and keeping the bar incredibly high as we hire are the things that keep me up at night and and worry me, especially as
34:32
the business grows so much that I have I'm less involved. You know, there's a lot of people that I only meet in their interview and they're onboarding, but
34:39
not have probably a lot of one-on-one interactions after that. Yeah, the talent density point I think is a good one. We we think about that a
34:45
lot too because we're sort of in this world where cost goes down, capabilities go up, the result is accelerating
34:51
change. If the world is changing quickly around you, you have to optimize for agility.
34:56
Yes. The best way to optimize for agility as an organization is to have the smallest possible number of the best possible
35:02
people, right? And so I feel like the returns to talent density have never been higher
35:07
than they are today. And so like you guys could go hire a million people, but like doing so with
35:13
the sort of quality and cult culture fit that you need, you know, that's that's tricky. And to your point, it it makes it harder
35:18
to sear the to turn the ship. Yeah. Um, and so our mantra on hiring is fewer, better, fewer, better. Like we
35:24
say this over and over again, fewer better. Like how can we make this department fewer and better? Yeah. And and that's going to be really
35:29
important because again, I think we're going to have to reinvent ourselves more frequently than companies have ever had to do this before. And I can imagine a future version of
35:36
Serbal where it's unrecognizable from what we do today because we just had to adapt so quickly. And that's much easier
35:41
to do with a small agile team than if we scale very rapidly. you become thousands and thousands of employees and you say,
35:47
"Hey, by the way, we're changing everything about our go to market. We're changing everything about what our product does." Yeah. Um, you know, we're making some big
35:54
changes the product and it's nice to have a relatively small organization that can embrace that shift almost
35:59
overnight. I can't imagine what we do if we had to convince thousands of people that this is the new direction.
36:04
Yeah. Let's assume, and obviously this is not something we can take for granted, but just for fun,
36:10
let's assume, let's assume that Servil becomes a monster company. you know, gazillion customers and employees and
36:18
revenue and market cap and free cash flow and all that great stuff. Let's assume you monster company.
36:23
At that point, what would you want people to say about you? What else would you want to be true that is not
36:28
contained in one of those traditional metrics of scale or success? I think I would want the impact of serval to be
36:34
very clear in terms of like what it did for the world. Um, the impact I think is most important of what we do today is is
36:41
we unlock meaningful work for people. You know, I think that there's always a gap between the idealized vision of what
36:47
you think your job's going to be and then what your job actually is. I think it's true for every profession. You you idealize, and kids do this the most,
36:53
right? When they're like, want to be a firefighter, an astronaut, um what that job looks like. And then
36:58
then you get in that job and you realize, oh, there's there's actually a lot in this that I don't like. And we want to be the tool that that
37:06
actually closes the gap between what you think your job's going to be and what your job actually is. And we do that by
37:12
automating away all this, you know, repetitive menial work that you don't
37:18
want to do and that is not productive and is not part of the reason you took this job. And we've done that in many
37:23
ways for it. And I think as we unlock automation for the entire organization, that's what we do for people is we get them back to the work that they actually
37:29
signed up for and the work they actually enjoy. And so I would hope that there is clarity that that was the impact that we
37:35
had. Yeah. Yeah. And it wasn't just like, oh, serville automated away a bunch of IT jobs. It's
37:40
like now I want people to feel like servil made people's work lives a lot better. Awesome. That feels like a great place
37:47
to end it. Jake, thank you so much for joining us today. Thank you so much for having me. This is a blast.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `Rebuilding IT From the Ground Up for the AI Age: Serval's Jake Stauch`  ·  visible_channel: `Sequoia Capital` (211K subs)  ·  series: `Training Data`  ·  host: `Pat Grady`
- visible_url: `youtube.com/watch?v=j7ypvRUFY7M`  ·  visible_published: `May 19, 2026`  ·  visible_views: `51,544`  ·  note: auto-dubbed
- visible_description: *"Jake Stauch, founder & CEO of Serval — a 'ServiceNow for the AI era': product looks like boring old enterprise software but with unlimited intelligence. Serval's architecture splits work between two agents: an admin agent that uses code generation to spin up workflows from natural language, and a help-desk agent that can only act through the tools admins explicitly approve. Uses OpenAI models for end-user interaction and Anthropic models for code generation; why new model releases sometimes have to be rolled back when prompt tuning breaks; why he's not worried foundation labs come downmarket; 'fewer, better' hiring as the only durable moat in a world where products may need rebuilding every six months."*
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_12.37.23_AM-ed619413…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️

This one is very high-signal for OMNI. Honestly, this may be one of the cleanest application-layer examples so far because Serval is wrestling with almost the exact enterprise problem OMNI has:

How do you let AI do real work inside a complex organization without letting it run unbounded through systems, permissions, workflows, and truth?

This is not “IT help desk” only. This is agentic enterprise operating-system doctrine.

Core takeaway

Serval’s core insight is:

The product is not raw AI capability. The product is the boundary layer that makes AI capability safe, useful, controllable, and deployable inside an enterprise.

Jake says the capabilities of the models are becoming practically unlimited, so the question becomes how an enterprise gets comfortable deploying them without increasing security risk. His answer is old-school enterprise controls: permissions, approvals, scoped API integrations, logs, alerts, audits, and visibility. He also describes a two-agent architecture: an admin agent that builds approved tools/workflows, and a help desk agent that can only use tools explicitly published with permissions and approvals.

That is basically OMNI’s world.

OMNI translation
1. “The product is the boundaries” is a major OMNI line.

This is probably the biggest keeper.

OMNI should not think:

“The product is the AI doctor / AI coordinator / AI assistant.”

The better version is:

The product is the governed boundary system that lets intelligence act safely inside care and business operations.

For OMNI, the “boring old enterprise things” become even more important:

identity,
roles,
consent,
permissions,
approvals,
clinical authority,
action scope,
documentation,
audit logs,
escalation,
domain commit rules.

That is not boring infrastructure. That is the product.

2. Serval’s two-agent architecture maps directly to OMNI.

Serval splits work between:

an admin agent that helps build tools/workflows;
a help desk agent that resolves end-user problems but can only use approved tools/skills.

OMNI needs this pattern.

For OMNI:

Builder/configuration agents help create workflows, care pathways, message templates, automations, evals, and tools.
Runtime/care agents interact with patients, providers, staff, and systems — but only through approved capabilities, policies, and owning-domain APIs.

That prevents the runtime agent from inventing power it was never granted.

Keeper doctrine:

Builder agents may configure capabilities; runtime agents may only use authorized capabilities.

That belongs in §C and Build OS.

3. Natural-language automation creates “slop automation” unless the system dedupes and governs.

Jake says when automation becomes too easy, users can create the 20th password-reset workflow, producing duplicates and confusing the AI. Serval responds with an agent that understands existing workflows and recommends modifying/deleting/reorganizing instead of creating more junk.

This is directly relevant to OMNI.

OMNI will face the same problem:

duplicate care pathways,
duplicate message templates,
duplicate intake forms,
duplicate follow-up automations,
duplicate “lab review” workflows,
conflicting clinic-specific variants,
abandoned AI-generated automations.

So OMNI needs workflow governance, not just workflow generation.

Doctrine line:

AI-generated automation must pass through dedupe, ownership, approval, and lifecycle management before becoming runtime capability.

4. “Automation must be easier than doing the manual thing” is product gold.

Serval’s point is that if resetting the password manually is easier than building the automation, the employee will just do it manually. Automation wins only when the creation path is simpler than the repeated manual action.

For OMNI, this is huge.

If it is harder for front desk/provider/staff to teach OMNI the workflow than to just do the task, OMNI loses.

So OMNI needs “capture while doing” patterns:

staff handles a patient issue;
OMNI watches / records steps;
OMNI proposes a reusable workflow;
authorized admin approves;
next time it runs semi-automatically.

That is much better than asking staff to design workflows from scratch.

5. Serval is a strong example of “application layer as translation layer.”

Jake frames Serval as the buffer between fast-changing foundation-model capabilities and slower-changing customer needs. Customers do not want to drown in model advances; they want their business problems solved.

That is exactly OMNI’s role.

Foundation models will change constantly. Clinics, providers, patients, and operations will change slower. OMNI is the translation layer:

model capability → governed care/business capability → usable workflow.

This validates the application-layer thesis:

OMNI wins by translating frontier AI into domain-safe operations, not by chasing every model release.

6. Model upgrades are not automatically upgrades.

Jake says new model releases often improve some things and break others because the product may have prompt tuning and infrastructure built around known model behavior. Sometimes Serval upgrades and then downgrades because the older model behaves more predictably.

This is extremely relevant to OMNI.

OMNI cannot assume “newest model = safest model.”

Every model swap needs:

evals,
regression tests,
behavior comparison,
slow rollout,
safety review,
domain-specific checks,
rollback path.

Doctrine line:

Model version changes are clinical/business runtime changes, not dependency bumps.

7. “Autonomy vs control” is a central OMNI tension.

Jake names the tension: individuals want autonomous agents with access to everything; organizations want control because uncontrolled autonomy creates security risk.

OMNI’s version is even sharper:

patients want immediate answers;
providers want automation but not liability;
staff want less work but not loss of control;
owners want efficiency but not chaos;
AI wants broad context;
compliance requires scope;
clinical safety requires interruption.

OMNI’s answer cannot be “more autonomy” or “more lockdown.” It has to be:

bounded autonomy through approved capabilities, live policy, audit, and escalation.

8. “AI gets right of first refusal” is useful, but dangerous.

Serval questions every role/function and asks whether AI can do it first. They eliminated or delayed some functions like SDRs/solutions engineering/revops, while later discovering some human roles were still needed.

For OMNI/Bloom, this is useful as a business-ops lens:

Can AI draft this?
Can AI triage this?
Can AI prepare this?
Can AI gather missing info?
Can AI reduce the handoff?
Can AI make the human’s job smaller/better?

But in care, “AI first refusal” must be bounded:

AI may get first pass; humans/domains keep final authority where stakes require it.

Where it lands

Thesis §B — AI substrate: major. Especially model/runtime translation, evals, model-version governance, and product-specific AI behavior.

Thesis §C — Governed Capability Exchange: massive. Approved tools, permissions, approvals, runtime capability boundaries, admin/runtime agent split.

CNS / orchestration: major. Runtime agents should only operate through authorized orchestration actions and owning-domain APIs.

Build OS: major. Natural-language workflow creation, automation lifecycle, dedupe, approval, and model release gates.

Business Ops / Workforce: major. Employee support, internal workflows, AI-native org design, fewer/better teams.

Product surface: major. Boring enterprise surfaces may be correct if they hide powerful intelligence underneath.

Doctrine / primitive pressure

Potential concepts worth routing:

admin_agent
runtime_agent
approved_tool
published_capability
workflow_dedupe_check
automation_lifecycle_state
capability_approval_gate
model_release_gate
model_rollback_state
autonomy_control_tension
enterprise_boundary_layer
capture_while_doing
workflow_compiler
natural_language_to_workflow
permissioned_tool_registry
AI_first_pass_human_final_authority

The keeper doctrine:

OMNI’s product is not unlimited intelligence. OMNI’s product is intelligence made deployable through boundaries, permissions, approvals, audit, and domain commit.

What not to import blindly

Do not make OMNI look like boring enterprise software just because Serval says that works for IT. Care experience still needs warmth, trust, and human affordance.

Do not let natural-language workflow generation create uncontrolled care automations.

Do not let runtime care agents build their own tools on the fly without admin/domain approval.

Do not treat model upgrades casually.

Do not import “AI gets first refusal” into clinical authority without risk gates.

Do-not-miss lesson

The boundary layer is the product.

OMNI-specific:

AI capability only becomes valuable in care when OMNI can say who may use it, what it can touch, when it must stop, who must approve, what gets logged, and which domain commits the result.

Priority / confidence

Priority: 5/5
Confidence: 5/5
Suggested analysis depth: full_semantic

This should absolutely feed §B/§C before v3 resumes. It is one of the strongest sources so far for the admin/runtime agent split, permissioned capability registry, automation lifecycle, and enterprise-grade control layer that OMNI needs.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

wow!  this is knox's first 5/5! haha

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(I fill later — derived work lives in EVRUN; leave `TK`)*
- EVRUN(s): `TK` · inventory: `TK` · routing_addendum: `TK` · impact §B/§C/security/Build-OS/contract: `TK` · promotion: `TK`

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.**

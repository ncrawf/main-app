# EVSRC-2026-000269 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-5 source (`EVSRC-2026-000269_michelle-lam-just-in-time-objectives-specialized-ai.md`); analyzed 2026-07-15 (`EVRUN-2026-000006`). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000269`  ·  filename: `EVSRC-2026-000269_michelle-lam-just-in-time-objectives-specialized-ai.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=ylELycbIbfg`  ·  source_title: `Stanford CS547 HCI Seminar | Spring 2026 | Just-in-Time Objectives for Specialized AI Interactions`  ·  slug: `michelle-lam-just-in-time-objectives-specialized-ai`
- channel_or_org: `Stanford Online`  ·  speaker: `Michelle Lam (Stanford HCI)`  ·  published_at: `2026-07-13` *(lecture ~2026-05-22)*
- captured_at: `2026-07-14`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `academic HCI seminar (adaptive AI interaction / objective induction / generated interfaces / steerable analysis / societal objective functions)`  ·  source_reliability_context: `academic researcher presenting a ~6-year research program w/ several empirical studies + open-source systems`  ·  topic_tags_light: `[just_in_time_objectives, adaptive_interfaces, user_owned_AI, objective_induction, interaction_traces, dynamic_UI, generated_tools, generator_evaluator, steerable_defaults, concept_induction, societal_objective_functions, behavioral_outcomes, user_governance, HCI, AI_alignment]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Michelle Lam` · role_in_source: `primary speaker / presenter` · affiliation_at_publication: `Stanford University (Human-Computer Interaction Group)` · speaker_type: `researcher (academic / HCI)` · authority_context: `HIGH for human-AI interaction, adaptive interfaces, objective induction, steerable systems, empirical eval — coherent research program (200+ participant online study; 17-participant in-lab study; open-source concept-induction tooling adopted by others; Science-published feed-ranking field experiments). Limit: demonstrations are bounded (writing/research/UI-gen/topic-analysis/feed-ranking) — do NOT prove safety for clinical decisioning, irreversible action, or high-consequence longitudinal care; "user-owned AI" vision under-specifies multi-party authority/consent/liability.` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Stanford Online`  ·  interviewer / moderator / host: `CS547 seminar host (Q&A participants unnamed)`
- event_context: `Stanford CS547 Human-Computer Interaction Seminar, Spring 2026 (researcher presenting her own program).`  ·  perspective / conflict notes: `researcher presenting her own work — results = meaningful evidence, not independent replication. Import the architecture/patterns; hold reported percentages as study-local (GRD-039).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat (metadata in Knox read) · [x] **Knox strategic read → §3 Review 001** · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename (renamed to firm slug) · [x] §0 metadata · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [~] update EVRUN concept registry (cross-source — folded at wave synthesis) · [x] update coverage matrix · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:10
and I'm really excited to share with you about uh what I've been working on these past six years. Um so something has
0:17
really changed about human AI interaction. Um we used to be excited about finding objects in images or
0:23
detecting writing tone, but now these are real interactions. um like drafting
0:28
a little bit of an awkward message, learning about a concept in a paper, proofreading or writing, or even just
0:34
venting about some drama happening in our lives. But what that means is that
0:39
an LLM is a personal assistant, a topic expert, a copy editor, a confidant, and
0:46
so many more things all at once. And I think that's a problem because it's all squished into one interface with an
0:52
identical input interaction no matter what we're doing. and we end up with these generic outputs from the model.
0:58
And I call this a spork problem. Uh by combining many functionalities into one interface, we actually get worse
1:05
results. Um using a spork is maybe not the peak eating experience for you. You
1:10
know, the when you're trying to stab into a piece of broccoli and it's not working, it's because it's also trying to be good at scooping soup. It's not
1:16
the best spoon or the best fork because it's trying to be both at the same time.
1:21
And it's challenging to override LM sporks. I can try engaging in a series of prompts to manually override the
1:28
generic outputs. But research has found that prompting is effortful and challenging. And even worse, it's a
1:34
reactive strategy. I can really only first see the spork and then have to react and put in that work myself, if at
1:40
all. And sporks are everywhere across AI systems the more you look. For LM, we
1:47
see these types of generic outputs. But social media also has these default feed
1:52
rankings that we see and that shape our opinions and topic models that help us analyze broad swaths of text have these
1:59
standard topics that get surfaced. And I think this is really worrying because you know when we don't override sparks
2:05
we can end up with things like homogeneous thinking across the population when people are relying on the same tool. We can have things like
2:12
feeds that amplify political polarization and impact our society and
2:17
we can end up with really potentially shallow understandings of text that are really important to understand like
2:23
public sentiment. But if sporks are so bad, why do we have
2:29
them in the first place? Well, sporks can be a good thing. Um, they're great for when we don't know the user's
2:35
situation and goals and we kind of have to make an assumption. Like if we're camping or we can only bring one
2:42
utensil, works are great for that. But if I have my plate in front of me, I'd much rather have a spoon if it's soup or
2:49
chopsticks, it's noodles. Uh, and similar reasons underly LM forks. At training time, developers
2:56
don't know all of the user situations they'll be faced with. So they bake in assumptions about many potential user
3:02
situations in the data and the training processes. Um and that extends to these post-training processes that fine-tune
3:09
models against many possible objectives like many uh different values or many
3:14
diverse annotators preferences. But that can lead the model towards these more generic and spork-like outputs.
3:22
To summarize here, we have this problem of spork AI interactions where predefined objectives produce generic
3:29
interactions. To combat these, my research focuses on
3:34
just in time AI interactions. These enable specialized AI interactions with
3:40
just in time objectives, much like your own color drawer that has the specific tools you need in the moment. To do
3:47
this, my work focuses on a few key challenges. Um, so we have different types of AI
3:53
systems out there like the ones I talked about earlier. And the challenge first is how do we decide what objectives to
4:00
pursue? And then second, how do we embed those objectives interactively into AI systems
4:06
at the time when users are using them? So my work contributes technical methods to address these challenges. um first on
4:13
determining what objectives to pursue there's strategies like observing the user in interaction transferring
4:20
knowledge from social science and um starting from a steerable default and
4:25
just as an overview on the second question on how we embed these in interaction time in AI systems there's
4:32
methods like generator evaluator architectures that allow us to hill climb on these types of objectives feed
4:38
re-ranking methods that allow us to co-opt the objectives of existing systems and modular algorithms that expose their
4:44
objectives by design. And these different methods unlock new and
4:50
specialized AI interactions. So, for example, for LMS, because we're able to generate these distinct user objectives,
4:56
we're able to unlock the generation of proactive tools and interfaces.
5:02
For social media, when we embed these types of societal values deeply, we can do things like reduce partisan animosity
5:08
for thousands of participants. And when we're looking at topic models, when we have these types of steerable
5:14
concepts, I'll show how this enables researchers to analyze their own data and publish novel research.
5:21
Um, and so we're really thankful that this work has been well received by our community and we've seen adoption from
5:27
open source releases of this work um that have led to other follow-on work by our own team and other researchers and
5:33
opportunities for new funding as well as usage by industry teams.
5:38
These ideas apply also across the AI life cycle. Um, not just uh at the time
5:44
when we're interacting, but also upstream when we're thinking about designing and developing AI systems, training and and fine-tuning as well as
5:51
doing things like evaluating and auditing. So for the rest of today's talk, I'll
5:57
talk through a few endto-end examples of this. First, showing how just in time approaches can really yield new
6:03
interactions for individual end users, but not just lay users. but also domain experts who are using AI and not just
6:11
individuals but also impacting society at large and then I'll share the visions
6:16
that shape my future research agenda. So I'll jump right into the namesake
6:23
just in time objectives work which is designed for everyday end users and this work appeared at Kai earlier this year.
6:30
The main issue as I talked about earlier with sporks is that we don't know what specific tools to build in advance. Our
6:37
insight here is that we can wait until interaction time when we actually have many more cues. So let's take a paper
6:44
talk that I was working on. Um at interaction time we can actually observe what a user like me was doing. So even
6:50
from this one screenshot, we can tell things like which of these papers this talk was based on that I likely need to
6:57
finish the slide outline given that it's half done and that this course that I'm speaking to is one that has many
7:03
undergrads such that we can infer a quite detailed objective like this for the system
7:08
without any user effort. And that's what we call just in time objectives. their model of the user's in
7:15
the- moment goals that's automatically induced by observing their interactions. Um, and importantly, that allows us to
7:22
then optimize LM systems on the fly towards this type of more specialized output that users might prefer. Um,
7:28
whether we're looking at generating whole tools or individual chat feedback. So for reference, when I was working on
7:34
those same slides and went to chatjbt, it provided some rather generic forms of assistance and I went and uh did a long
7:41
back and forth set of prompting to give the context and get the help that I wanted.
7:47
But from that same slide deck, J objectives enabled specialized assistance like a slide outlining tool
7:53
that had already suggested the relevant talk formats for my audience. It
7:58
generated a slide outline that allow had elements I could easily move around given that the structure was the main
8:04
focus um at this moment, but also with an edit mode in situ where I could
8:09
refine the content as that was the next step. And I got all of this without needing to
8:14
prompt or engage with the system. J objectives allow us to automatically specialize LM output from the start and
8:21
generate this type of software on the fly. So for example, in another case when I was working on a diagramming tool in
8:27
Figma, it generated this or when I was working on a diagram, it generated this custom diagramming tool that, you know,
8:33
had a canvas and nodes that were based on the specific concepts that were in my paper that I could move around and edit.
8:39
It had different automatic layouts that I could experiment with. And it also had
8:44
a targeted LM feedback on these versions that I was generating again without me needing to request this directly from
8:51
the system. So that's the interaction that we're striving for. But to make this happen,
8:57
we had to deal with a few technical challenges. First, how can we induce accurate
9:03
objectives? Um, we have as our input a user who we can observe and we want to get out these
9:10
sort of objectives like I showed earlier. And we find that we can get more accurate objectives by uh prioritizing a
9:16
wider compatibility with a broad range of observation types, but those that are less effortful to gather. Um these are
9:23
ubiquitous inputs like screenshots of the work workplace or the raw DOM of the web page that we can increasingly make
9:29
sense of with modern models. And this task also becomes more tractable when we explicitly bound our objectives. Um
9:36
focusing on instantaneous moments when we might be able to better capture what a user is doing. um but where we can
9:42
also have the LM state its uncertainty and have our pipeline reason over it um very uh concertedly.
9:50
So with these principles in mind, our J objectives are induced by a language model prompt on an input of an
9:56
interaction trace which could be a screenshot of the workspace or a stream of screenshots or or the DOM of the web
10:02
page. And the model focuses on instantaneous objectives um based on that trace. And this produces these
10:08
rather lightweight JIT objectives that have a name, a detailed description, and a weight.
10:16
To understand whether this process actually yields accurate objectives, we ran an experiment with over 200 online
10:21
participants um who uploaded screenshots of their own tasks, just things that they were working on. Um and these
10:26
really spanned a wide range from a draft letter to the UN to running statistical analyses. And from these we had our
10:34
system induced objectives. Um and those are things like completing country specific recommendations in the UN
10:39
letter or um analyzing specific statistical findings in the Excel sheet.
10:44
And across these tasks we found that J objectives were highly accurate. The vast majority of these objectives were
10:50
deemed by these participants as accurate or very accurate. But I'll note that there's not just one
10:56
valid objective at any given point in time. Um so we also ran a task where we surfaced the top three objectives and in
11:02
a random order. users could also write in their own custom objective. Um, and we found that induced objectives were
11:08
chosen in about 98% of cases and that user preferences promisingly were
11:14
aligned with these induced weights. Um, so the higher weighted options were more frequently selected. So this is really
11:21
promising, but um there's then the question, are these actually good for anything? Um, how can we actually have
11:26
them be a generalizable way to specialize this broad range of AI systems?
11:31
The challenge here is that there's so many different types of LM systems um beyond UI generation that I was talking
11:38
about earlier. There's things like expert or role generation, um coding
11:43
assistance and writing assistance and general purpose forms of assistance that you might see today. But when we look
11:50
across these, they're made up of some similar building blocks. There's some sort of prompt coming in
11:56
from the user, of course. Um, and there's generators that are responsible for producing some type of artifact,
12:01
whether that's a specification for a UI or a plan for writing code.
12:06
And often there are evaluators in the loop that are uh judging this content like LM as a judge scoring or open-ended
12:13
feedback that's used to iterate further on further generations.
12:19
Our J objectives can replace this first step by automatically inducing what a user needs rather than strictly
12:24
requiring their prompt. And then once we have that, we can use this JIT objective to steer the existing generators and
12:32
evaluators irrespective of what they were meant to generate. Um, and this can be as simple as appending the JIT
12:37
objective to existing uh generation and evaluation prompts that might already be internal to a system.
12:44
So if I consider a system that's generating feedback, it might be powered by some detailed system prompt that has
12:49
criteria like principles and a custom chain of thought process. Um, and if I
12:55
have a slot instead for the J objective that can be added to this prompt, then in real time as a user's interacting, it
13:02
can tailor this generation in this more strong direction. And similarly, if I have these
13:08
components that are evaluating content, they might have this detailed prompt that has a detailed scoring rubric. Um,
13:14
and adding this J objective allows us to refine the evaluation on the fly. Um, not just scoring by general quality, but
13:21
getting much more stringent. Taken together, this produces a
13:26
generalizable architecture where we can take in an interaction trace, have a language model induce a detailed JIT
13:33
objective, and then steer existing generation and evaluation operations um to produce specialized output.
13:42
I want to note here for a second that we were able to implement this using third party models which means that we're not
13:48
maxing out our AI systems that we have today. Just by focusing on improving our objectives, we have this headroom to
13:55
really raise the performance of even off-the-shelf models. But J objectives can also help us train new models. Um,
14:02
so we've been operating here at the end at inference time, but some of my other work has been upstream at the training
14:08
and fine-tuning phases where we can get stronger shifts in model behavior. Um, so just as a quick uh preview, for
14:15
example, I worked on the Ditto project co-led with Omar Shik and Joey Hannah, and we developed a technique to
14:22
fine-tune a language model um to a distinct user style just using a handful of demonstrations on the order of five
14:28
writing samples. And by iteratively treating the users uh demonstrations as
14:34
unilaterally better than anything the model generates across time steps, we're able to produce much uh much better and
14:41
more um user aligned behavior from the model. And this shows us that once we have the right objective, methods like
14:48
this can strongly steer a model and bring performance benefits even above manual prompting.
14:55
But we wanted to see how effective the prompt based interventions would be with these JIT generators and evaluators. Um
15:01
so we returned to that same set of data from the online participants that I uh showed earlier and we surfaced back to
15:06
them this task where um for generation we had these baselines that they took in the full screenshot that the users had
15:12
provided and suggested relevant experts to assist with the task, tool designs and feedback to directly assist on the
15:19
task. And for example, here we had a TA training handbook um where you can see that the generators provided some um
15:26
general forms of assistance for this task. And the JIT generator was the same but
15:31
just with the induced objective added. Um here the objective actually picked up on the fact that there was unresolved
15:38
comment about clarifying the role of a TA on the handbook. And you can see how the outputs here are tailored
15:44
accordingly. We find that with this small modification over the baseline, JIT
15:50
generators produce outputs that are preferred about 70% of the time in head-to-head comparisons.
15:56
And looking at the evaluators, we find that, you know, if a JIT evaluator is working well, it should be selecting
16:02
more user preferred outputs or more user preferred candidates even among those JIT generations. And so that's what we
16:08
did here. And we'd want to see a higher win rate for a larger number of samples.
16:13
And we indeed find that JIT evaluators help us to select more user preferred outputs, further hill climbing on this
16:19
objective. Um, jumping up about 16 percentage points from 10 samples to one sample, which is almost as much benefit
16:26
as scaling up to a whole order of magnitude more samples.
16:33
Putting these together, we built an interactive system called Poppins that demonstrates objectives um with on
16:39
demand UI generation. And we had this in a browser extension. Um, with my presentation open in my browser, I can
16:45
initiate Poppins. And based on that same screen I showed earlier that had this pending structure,
16:51
it induced an objective of improving the presentation structure. Um, and but there's other options I could provide
16:57
that I I can select from or modify myself. And then it suggested tool ideas like a
17:03
presentation flow organizer or a research narrative validator. And each of these has a detailed specification
17:09
about how the tool ought to work. Again, I can go and modify these details if I want.
17:15
And then the system generates code on the fly and renders it for me here, which was this interactive action plan
17:21
from my research narrative. Um, and it suggested things like framing the problem statement around examples the
17:27
students could better relate to. Um, suggesting generated tools from the paper that might be more compelling to
17:32
demo. And again, we got all of this without me needing to go in and prompt. And maybe I didn't even think at the start that I
17:39
wanted or wanted to switch over to ask a model for help on this task, but it went ahead and assisted me.
17:47
And we wanted to understand then how J objectives actually work in practice with Poppins. So we ran hourlong inlab
17:53
sessions with 17 participants who brought in their own writing tasks. And this was really important to us that these were actually tasks that people
17:59
were working on and cared about. So people brought in a range of things from short stories to scholarship
18:05
applications and Poppins produced outputs that were rated as significantly higher quality
18:11
than that of a baseline language model something very similar to an interaction to chatbt that participants often were
18:16
already using and I'll walk through a few of these examples. Um, on a participant's short story draft, Puppins
18:23
created a tool that helped them to track the trajectory of characters emotions over the course of the story. And that
18:28
actually helped the author to realize that there were some inconsistencies in how their character was coming across that they wanted to go in and fix after
18:34
the study session. In a pretty different setting, um, there were participants research notes and
18:40
Poppins created a tool that helped them to explore different technical methods that they were weighing. um looking not
18:46
just at the algorithms and code but also the applications downstream to help them compare
18:52
and these tools really varied in form. I won't go into depth here, but there's things like theatic highlighting and um
18:58
diff views to help manage the language of a presentation. Um and yeah, we saw
19:03
quite a range across these participants. But what I found interesting beyond the artifacts was how they changed users
19:11
processes. Um, we found that because J objectives were sufficiently accurate, they reduced user effort, having them
19:17
focus not on, for example, the type of feedback, sorry, not on prompting the language model, but focusing on the type
19:23
of feedback they wanted. And it provided a helpful starting point where it's often hard to go and articulate your
19:29
goals to a system. And they also ended up actually improving the ultimate task performance.
19:36
Um, we had a participant who was already very familiar with chatbt and had used it during their work. and they were
19:41
surprised that they actually got higher quality outputs out of the system out of the box um even on par with advice they
19:47
had gotten from their real life adviserss and I think promisingly users
19:52
found that this assistance could augment their abilities um really stretching what they're capable of doing rather
19:57
than replacing them in ongoing work led by PhD students
20:03
Michael Ryan and Dora Jaw and our group um we're finding that J objectives can extend um for example they can take on
20:09
project level scope um enabling background agents that might unblock your trajectory. Um and they can extend
20:15
to long-term needs. Um we can steer AI agents by uh inferring users underlying
20:20
motivations. Um for example, if a user has a love for learning, but also many parallel commitments, the right
20:26
assistance might not be to autocomplete as we might do today, but to actually help them rebalance their schedule to
20:32
set aside that time for the learning they want to do. To summarize this work, end users often
20:39
don't know exactly what they want or maybe how to articulate it with AI systems and J objectives address this by
20:46
inducing specialized objectives on the fly at interaction time. And I think the idea here is that we can really meet
20:52
users where they're at and raise the baseline of where they're starting from when they choose to interact with an AI system.
20:59
And I'll show how similar principles apply to domain experts. Um just in time objectives are also relevant to tasks
21:05
that we might not think of as involving personal taste um like analyzing data.
21:11
But I think one evidence of this is that um we developed and open sourced a system as a Python package and it's been
21:17
adopted by a number of researchers in academia and industry and I think there's appetite for text analysis that
21:23
is steerable and interpretable by design.
21:29
So the vision of topic modeling um is that we can go from messy text data to meaningful findings. And this is an old
21:36
problem with work spanning over decades in this area.
21:42
But today, no matter what my interests are as an analyst, the topic model returns the same set of generic themes
21:48
from the data set and they're often hard to understand because they're so vague.
21:53
We introduced concept induction which is an approach for surfacing highle concepts from unstructured text where
21:59
our goal here is to make the default output steerable by design. Um so instead of vague keywords concepts are
22:05
natural language descriptions like government accountability and they're defined by explicit inclusion criteria.
22:11
Um and that means that you can understand the default output but you can also go and turn it around and steer it based on your specific interests. So
22:18
maybe I'm interested in federal government accountability or maybe I actually have a different definition of accountability that I go and want to
22:24
insert. To achieve this vision, we developed an algorithm called Loom that's made up of
22:29
some modular operators that we can apply iteratively. And I'll just give a bit of intuition about each of these operators.
22:36
Um the synthesize operator is the most important. Um it's taking the key text from the documents and drawing these
22:42
unifying concepts across them using a language model. Um for example here extracting concept uh about energy
22:49
solutions. Um but you'll notice that the input here is really critical. Um if we don't refine these we can end up with
22:54
really broad and uninformative concepts that are unifying them. Uh working backwards we have two operators that
23:00
basically set this up for success. The distill operator basically addresses
23:05
the fact that not everything in every document is important. We want to really be able to zoom in to the parts that are
23:11
relevant for our analysis. So the the still step uses a language model to extract key quotes and abstractively
23:17
arrive at key points and the cluster operator allows us to make sense across these undifferiated
23:24
pool of key points and identify cross cutting commonalities. So we detach the key points from their documents and then
23:30
reccluster them using embeddings and HGB scan so that we can have likely more
23:36
related text spans um together to be passed up to synthesize.
23:41
The distilled cluster synthesize steps that I talked about earlier give us these candidate concepts. Um and the
23:46
score operator allows us to go and verify whether these concepts actually occur by independently mapping back to
23:52
the documents. And so that helps us verify whether and where these concepts occur.
23:59
Now because we have these modular operators, we can steer each of them. The seed operator allows the user to
24:05
steer any operator using a seed term that modifies what it attends to. Um so seeding the distill step guides it to
24:12
take notes on only the parts of doc document that are related to the seed or seeding the synthesize step has its
24:17
proposed concepts that are related to that seed. Um so in summary all these steps um in
24:23
the still cluster and syn synthesize phase propose these concepts iteratively. The score operator allows
24:28
us to go back and map these to the documents and then the seed operator allows us to steer this whole process.
24:35
We built a text analysis tool around this concept allowing us to visualize data sets in terms of steerable concepts
24:42
and I'll show how we can use it to analyze a data set of political social media posts.
24:47
Um, we have a main matrix view here where we can see all the concepts that were generated by Loom as rows and on
24:53
the columns we see metadata like here partisan animosity ratings
24:59
and analysts can hone in very quickly on unanticipated trends like there was a benign looking concept of um political
25:08
was it political party positions that had high partisan animosity um and based on the inclusion criteria we see that oh
25:14
it's capturing the actions or positions of political parties Um, and there's a summary and representative quotes and
25:19
all of the documents down below. And what the analysts found was actually that they're written from one party's
25:25
perspective and are critiquing the opposing party's stance, not just talking about their own position. So that was what was going on here.
25:31
But it also helps analysts to investigate nent patterns. Um, within this policy related concept, there were
25:37
posts that were discussing policy outcomes as a crisis. and the analysts created a custom concept called crisis
25:44
based on what they were noticing and were able to rapidly isolate more posts that were displaying the same behavior.
25:52
Um, I'll just go through quickly here, but comparing to status quo methods. Um, as I mentioned before, there are
25:58
existing methods that produce things like vague keywords and even emerging methods of just passing to an LLM can
26:04
work all right for capturing generic concepts. But these are things more like transportation policy where we find that
26:10
Loom is able to actually recover more specific concepts. Things like economic stability that might characterize what's
26:16
happening within a broader concept like economic policy. Um, and we ran a series of evaluations with synthetic data sets
26:22
that allowed us to verify that this pattern held true.
26:27
But I've been particularly excited about what this has enabled after this project. Um, as I mentioned before, we
26:34
released this as an open source package for data analysts um, in their notebooks and we created some documentation and
26:40
guides to try to make this accessible beyond the paper.
26:46
And this enabled researchers to lead their own theorydriven research. Um here are just a few examples of research
26:51
that's been published at places like um EMNLP and IE viz. Um and these include
26:57
things like understanding the impact of public science communication um methods that could help us better conduct
27:03
literature review and discourse strategies that are used by populist politicians.
27:10
And researchers also applied Loom to a really wide variety of types of text, even things we didn't anticipate like
27:15
visualization notebooks and product reviews. To recap this work, domain experts often
27:23
really do know what they want and they seek control over the process. Loom is designed around a steerable default. You
27:29
know, it's modular operators and its output are intended to be um steerable so that users can adapt them just in
27:36
time based on their analysis objectives. Um, and this has unlocked some novel scientific research.
27:43
I'll now talk about how this can speak to AI in society more broadly.
27:49
Just in time AI isn't just about individual users. Um, it also applies to social computing systems like our social
27:55
media feeds with many users. And we found that to tackle these types of broad social outcomes, we often need to
28:02
push against the default values that are embedded in these systems. And this can be really powerful. Um,
28:08
this work opened up new lines of research, including a science paper. And it led to funding for more work on
28:14
rethinking the default objectives in our social media feeds.
28:19
And I think there's been some excitement because there's significant challenges with moving beyond the individual user
28:24
setting. Um, so we were interested in this setting of social media and democracy. As you all know, social media
28:31
plays a really central role in our lives and there's been increasing concerns that social media is harming democracy.
28:37
Um, there's been increasing evidence that it's associated with increases in partisan animosity. These negative
28:43
thoughts, feelings, and behaviors towards a political out group.
28:49
And a major problem is that social media AI today are centered on the wrong objective. Um, a generic objective of
28:55
engagement signals such as likes and clicks. But threads to democracy don't
29:01
yield observable engagement signals to train on. Um there's not a trace when a user sees a post that lowers their
29:07
opinion of the opposing party or reduces their trust in a practice like voting.
29:14
Um and it's technically difficult to instantiate an alternative. Um even if I know that I want to reduce partisan
29:20
animosity, how do I go and do that as an individual user? Um, I think a challenge here is that we have this broad broad
29:26
set of social media posts and inventory out there and our output that we want to arrive at is this social media feed that
29:33
we ultimately see, but the actual outcome we care about is not that feed. It's the level of partisan animosity in
29:40
response to that feed, this behavioral outcome. And that is harder to anticipate.
29:45
We needed to develop methods to address this. Well, political scientists are of course
29:51
experts about threats to democrac threats to democracy. Um, could we draw on their expertise?
29:57
For example, a recent mega study um published in science had major results on reducing partisan animosity. Um, and
30:04
they looked at things like interventions such as videos and educational activities. And in that work, they
30:10
defined a construct of anti-democratic attitudes and partisan animosity um or APA. And that was used to assess these
30:17
behavioral outcomes. And there's a lot of detail here, but the construct had eight dimensions that
30:23
um were things like opposition to bipartisan cooperation. They each had a definition and associated survey
30:29
measures. And our insight was that the precision and and detail of these survey measures and qualitative codebooks um in
30:36
social science was really well suited to translate into large language model prompts that we can enact today where
30:42
you know we can take the variable name the uh definition that was drawn from the prior literature and detailed
30:48
codebook factors that were generated along the way by these expert annotators. And that means that we can take
30:54
constructs like OPA and directly use them as AI objectives like in our social media feeds. Our work introduces
31:01
societal objective functions which is a method for translating these types of social scientific constructs into AI
31:07
objective functions where first we identify a relevant societal a social science construct like the opa construct
31:15
and then we operationalize these into a manual intervention um first allowing us to assess whether this intervention is
31:22
effective in reducing or in producing [clears throat] the behavioral outcome we're interested in and then we scale
31:28
this up with algorithmic methods um like using a language model to rebank social media feeds.
31:36
To briefly cover the technical implementation, um we had an LM pipeline
31:41
for feed rebanking that allowed us to take in an arbitrary inventory of posts and then generate ratings for each of
31:47
the individual variables of the construct. Um and then we can combine these into a total score, use those to
31:53
rerank this inventory of posts. And notably, this pipeline is something that can be run in real time if we connect to
31:59
users feeds. Um, it can be adjusted to swap in different variables, different rating scales, different aggregations,
32:06
and and ultimately different rankings of the feed. And this allowed us to basically run
32:12
some experiments to see if we could move the needle on this on this um really important societal issue. So we designed
32:19
several feed algorithms that incorporated OPA. Um and as we also implemented baselines that represent
32:24
more of the status quo today. Um so the main conditions that I'll talk about were a downranking feed that put these
32:30
APA posts more towards the bottom of the feed and a baseline engagement feed that ranked posts more similarly to how we
32:36
see them today with high engagement at the top of the feed. Um and we ran experiments on US
32:42
partisans um with engagement feeds, manual feeds and feeds that were algorithmically generated. Um and the
32:49
x-axis here is partisan animosity um where higher value is greater animosity. So we're trying to see reductions.
32:57
And as expected, we observed substantial partisan animosity with the engagement based feeds like the ones we have today.
33:04
Um, but we found that manually re-ranking feeds using this APA objective significantly reduced partisan
33:09
animosity both for Democrats and Republicans in these pre-registered experiments. And we're somewhat
33:16
surprised because this this is a challenging metric to move, especially with such a short feed intervention.
33:22
Um, I'll go through quickly here, but we basically found that we can use language models to replicate this type of annotation um to a fairly high degree.
33:30
But the question remained, does that actually produce the same behavioral outcome when you actually use it in a feed? So we returned to another set of
33:37
experiments where we implemented this algorithmic LM ranking and we found that we're able to also significantly reduce
33:44
partisan animosity with this intervention both Democrats and Republicans.
33:49
So this is a really exciting result for us because it means that we have a chance at actually moving this measure
33:55
out in the wild because an LLM based intervention can scale up to many users.
34:03
And so I'm really excited now about what's possible. um field experiments run by amazing colleagues translated
34:10
sole objective functions into real users X feeds um with a browser extension and
34:15
they confirmed that in the wild decreasing or increasing Apple exposure shifted partisan animosity and this work
34:23
was published last year in science and other exciting work has shown that
34:28
we can expand beyond our demonstration of this one value of democratic attitudes we can expand to a much larger
34:34
library of values and that users might be able to control themselves.
34:40
To sum up this work, for pressing societal issues, we might know what we want to achieve, but we might not know
34:46
how to achieve it with our existing systems. And I show that transferring knowledge built up in the social sciences can allow us to operationalize
34:54
these societal objectives and realize them just in time in users feeds.
34:59
Zooming out, I've shown how just in time objectives work across a variety of different problem settings from end
35:05
users who are working on their own projects, domain experts who are conducting research, and communities of
35:11
users on social media. And I've shown how my research develops strategies for
35:16
um combating these spork AI interactions um by determining what objectives to pursue and how to embed them
35:23
interactively in AI systems. Um, and this came with a toolkit of strategies for deciding what objectives to pursue
35:30
from passively observing to transferring that social science theory and methods to embed these objectives from LLM
35:36
systems to social media systems. And these really form the foundation of
35:42
where I want to go next in my research. As I talked about at length at the start, sporks are bad. Uh, and but I
35:48
think there's paths forward. Instead of sporks, what I'd like to envision is instead more like a Mary Poppins bag.
35:54
This was a magic bag that she always had that had the right tool for the task at hand. Um, so here she's pulling out this
36:02
really large mirror. Um, because apparently the first one was way too small and now she's much happier.
36:08
I'd like to argue that this is a vision of userowned AI. The technology that we
36:14
own and curate, uh, it has many functions available, but importantly, it
36:19
only surfaces the specific one that I need right now for me.
36:24
My research vision is for this type of userowned AI where everyone can own their own Mary Poppins bag that
36:29
specializes for them in real time and not just towards immediate goals but towards their longer longitudinal user
36:37
goals and broader societal goals. And this line of work really means that we have to rethink how we design our
36:43
interfaces, how we structure our own research and also how we govern AI systems. And so I'll start first with
36:50
our interfaces. interfaces today are largely rigid and predefined and I think
36:55
that's why we see AI sporks everywhere. I envision just in time personal and
37:00
computing with computers that mold entirely to us as we work where objectives might be these more universal
37:07
routers to different adaptive computing environments that could be generated and adapted on the fly. um addressing goals
37:13
of varying scope and kind like there are goals that are common to a domain like making sense of paper reviews that I'm
37:19
getting but there's also goals that are specific to an individual like triaging areas of concern um based on my specific
37:27
research taste and there's competing goals within an individual like in a busy week how I
37:34
prioritize revisions among many other to-dos immediate goals might imply automating
37:41
task task that AI can confidently complete. But if we discern if we discern longer term user goals over
37:47
maybe months of observation like investing in health goals amidst a busy research workload, AI might automate the
37:54
tasks that are most disruptive to my health or drawing on societal objective functions. We might have goals like
38:00
preserving a healthy democracy and we might want AI to automate tasks that are getting in the way of my civic duties.
38:08
And I think we can take AI research and not only make it accessible to end users, but go in the other direction to
38:13
advance AI research. If we consider the full set of tasks like these dots on the screen of tasks that um users are
38:21
pursuing, current LLM logs only really have visibility into a small portion and they're often only using AI on a small
38:28
set of tasks that are useful to them with limited ability to raise problems and maybe even less ability to propose
38:34
their own solutions. How do we expand this? Here I envision an AI interaction
38:39
observatory where uh infrastructure like automatic pipelines might allow us to learn from large scale end user
38:45
objectives um where we can group by combinations and trajectories of objectives that allow us to understand
38:51
commonalities not just in what users are doing but why. And this could power uh
38:56
new dashboards that allow us to discover tasks and problems as well as solutions for AI research to tackle.
39:04
Finally, on governance, if we want userowned AI, we need infrastructure for users to actually own these systems and
39:10
govern them. And this is both a technical problem, but also an interface design and social computing problem. Um,
39:17
for example, we can already fine-tune models, open models with a handful of examples like I talked about earlier.
39:23
But there aren't many end users who are doing this. So, it's not just a technical problem, it's also a usability one. And I think JIT strategies can make
39:30
these more usable. We could build systems that automatically fine-tune models for frequent user objectives that are occurring and learn how to manage
39:36
and serve those models um in the background on a user's device. But fine-tuning may have its limits. And
39:43
so we might actually be able to get better model performance by pulling resources. And I think the AI
39:48
interaction observatories could actually help us here by identifying salient communities of users who actually have
39:53
similar needs but may not be connected. Um, we could design protocols that allow users to share data and compute with
40:00
trusted community members to improve model performance. And here we also may able may be able to
40:07
tackle collective goals. Um, this requires tools to allow us to deliberate over what society level goals to even
40:14
set. Um, like in some of my past work, we simulated juries of community members. Um, could we assemble juries
40:20
for setting these types of broad objectives? And we also need tools to embed and
40:25
monitor these types of societal level objectives. Um drawing on the societal objective functions work, how could we
40:32
understand how societal values um not just work in social media but across the whole surface of different computing
40:38
environments that I encounter. My PhD work was made possible by collaborators with faculty or
40:45
collaborations with faculty and researchers across institutions um and across areas. And I think this will be
40:50
really necessary as I tackle this future research agenda. And I've worked with an
40:56
amazing set of PhD and undergraduate students who have been fortunate to collaborate with and mentor.
41:03
To close, uh, you should now know how to spot a spork and why it can be deceptively dangerous. Um, and hopefully
41:11
now you know about the just in time strategy which allows us to avoid predefined assumptions and shift the
41:17
control closer to the end user. So for the next flashy AI system that might come out, I hope you can ask, is this a
41:24
spork? Who designed it that way? And what assumptions are encoded by that decision? And are there other ways to
41:30
build that might give users greater voice over these assumptions? Um, thank you very much. [applause]
41:39
Thank you for the most lovely analogy, so Mary's back. Um, I have this
41:47
question. Uh so one of the practices that maybe for the future research one of the practices or multiple practices
41:53
that have not been included have to do with adversarial situations what they
41:59
happen in professional services such as law maybe finance risk underwriting
42:05
also defense. Um uh so uh so but my technical question would be do you think
42:12
your research um uh um has u enough fidelity
42:18
um uh for human decision making. So uh by fidelity I'll just explain it from
42:24
the from the analogy. So in the computer science we have a um bypacking and
42:30
bitacking etc. So by this modality I mean uh you know various um uh let's say
42:38
retinal variables that a person can uh understand and see when they're making decisions and uh the interfaces that
42:46
this study has done has to do with checkboxes and pieces of text and drop downs etc. Do you think that in the
42:53
future research we need to go kind of even one level deeper into you know written written marks to to to to
43:01
mention you know to I mean I think these ideas have brought up ability I mean we're talking about these types of interfaces that we're
43:07
dealing with but if you have AI systems that are acting on any layer you know whether it's like low-level computer
43:12
systems operation and assisting on that or helping someone on a security problem I think it's really critical to understand what are the assumptions that
43:19
are embedded in the AI system that's assisting you and it might be assuming for example, that you care about I don't
43:24
know individual security or something but not like I don't know a whole organization security or maybe like
43:30
cross you know country I don't know concern um and I think no matter what
43:36
context you're in it actually does really matter that you have similar types of tools um so I think the systems
43:42
I'm demonstrating here are really like a demonstration of what you can achieve but I think there is still a broad
43:49
applicability to any AI system that we might be using whether for computer
43:55
science tasks or interface tasks.
44:02
I have an easier question for you. Um when you were soliciting tasks for your entire system, um did you refer
44:12
uh to AI in your request or were the users primed in any way to be giving you tasks that would naturally lend
44:18
themselves to use of an AI system? Yeah, I mean here we asked users to contribute
44:24
tasks that they were actually working on. We didn't tell them what was going to come afterwards or anything about our
44:29
system in in those um technical eval. They were asked to basically provide a
44:35
screenshot of some task they were working on. Um [snorts] we did have a system that like verified and made sure
44:40
that like it was a valid screenshot. Um things like that. But yeah, we tried to
44:45
keep these requirements as loose as possible so that we wouldn't get sort of like easier inputs and we wanted to
44:51
basically have something as ecologically valid as we could because we really wanted to see like does this approach actually accurately induce the
44:57
objectives that people have in their tasks out in the world. Um, and yeah, so
45:02
that was a sort of fundamental like requirement I guess going into our our study setup.
45:10
I have two questions. [laughter] Maybe I'll I'll give you both and you can decide which one you want to answer. So,
45:16
in one of the in one of the studies with the algorithmic down ranking versus a manual down ranking, you had a better
45:22
result with algorithmic down ranking. I wonder if you right is that
45:27
I'm not sure if it's significantly better.
45:35
And I'm curious if you have a hunch on why that might be the case. Maybe I'll give you the second question.
45:43
[laughter] I guess I would maybe I feel hesitant to lean into the why because it is rather exploratory to that difference like
45:49
between algorithmic and manual. So I mean one possibility is like you know we did uh we did sort of like tune our our
45:57
prompts to like development set and you know it's possible like the development set like I guess maybe like has some
46:04
attributes that are like I don't know maybe more particular that a like language model was better able to hone
46:10
in on than the manual readers who maybe were thinking more broadly than beyond that set. um we didn't apply that same
46:16
like we didn't uh we applied it to a new set of data to do our evaluation but maybe that could be a potential factor
46:24
on that first question. Yeah. I think it's super interesting to see.
46:29
Yeah. Oh yeah sure. [laughter] [snorts] Um the second question was about hom um
46:37
homogenization of output and I feel like your work is such a great example of how
46:42
we can move beyond this homogenization effect and I'm wondering if you think that jits might actually be homogenizing
46:50
at a different level like broader categories of people or do you think it can actually I don't know if it can
46:56
reflect that. Yeah. Yeah. I think actually my ideal world is that people have ownership over these objective induction processes
47:02
themselves. Um I think what we're really trying to open up is like hey there is a task that exists here and that too is
47:07
something you know users need to be aware of that they're have visibility into and are able to intervene on. Um
47:12
because I think you know this method was just exposing that there can be sort of this lever up here and we want to show
47:19
that to users but I think it would be a real risk if we just had users use our version of the system and it always
47:25
induces their objectives because that may encode biases for example towards tasks that a language model can understand or um tasks that are well
47:32
scoped and bounded and able to be tackled with the solutions it can propose. So, um, yeah, I think it's
47:37
really an entry point into like allowing us to think about and support a broader space of like ways to induce objectives
47:44
and and act on them.
47:52
[applause]

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

source_platform: YouTube · source_url: https://www.youtube.com/watch?v=ylELycbIbfg · source_title: Stanford CS547 HCI Seminar | Spring 2026 | Just-in-Time Objectives for Specialized AI Interactions · channel_or_org: Stanford Online · speaker: Michelle Lam · published_at: 2026-07-13 · lecture_date: 2026-05-22 · captured_at: 2026-07-14 · capture_method: YouTube screenshot + pasted full transcript · content_type: academic HCI seminar / adaptive AI interaction / objective induction / generated interfaces / steerable analysis / societal objective functions · source_reliability_context: academic researcher presenting a six-year research program with several empirical studies and deployed/open-source systems · topic_tags_light: [just_in_time_objectives, adaptive_interfaces, user_owned_AI, objective_induction, interaction_traces, dynamic_UI, generated_tools, generator_evaluator, steerable_defaults, concept_induction, societal_objective_functions, behavioral_outcomes, user_governance, personalization, objective_horizons, HCI, AI_alignment]

2. People / authority context
Michelle Lam

role_in_source: primary speaker / researcher · affiliation: Stanford University Human-Computer Interaction Group · speaker_type: academic researcher / HCI practitioner · identity_confidence: high_from_screenshot

Authority context: strong for human–AI interaction, adaptive interfaces, objective induction, steerable AI systems, and empirical evaluation of interaction designs. This is not a speculative keynote. Lam presents a coherent research program with:

an online study involving more than 200 participants contributing real work screenshots;
a 17-participant in-lab study using participants’ actual writing tasks;
open-source concept-induction tooling used by other researchers;
experimental work translating social-science constructs into ranking objectives;
subsequent field experiments involving real social-media feeds.

That raises the source above ordinary product-personalization commentary. It contains both conceptual framing and implemented mechanisms.

Limits: the strongest demonstrations involve bounded writing, research, interface-generation, topic-analysis, and feed-ranking tasks. They do not prove that inferred objectives are safe enough for clinical decisioning, irreversible action, legal commitments, or high-consequence longitudinal care. The source’s “user-owned AI” vision is strategically important but under-specifies multi-party authority, consent composition, liability, and conflicting care obligations.

Publisher / event

publisher: Stanford Online · event_context: Stanford CS547 Human–Computer Interaction Seminar, Spring 2026

The academic setting raises methodological relevance, but the source remains a presentation by the researcher of her own work. The reported results should be treated as meaningful evidence, not independent replication.

3. Suggested processing

priority: 4.9/5

depth: full_semantic

EVRUN needed?: yes

promotion posture: analogy_spine_candidate | section-sharpening | product-architecture | surface/projection architecture | AI-governance requirement | Knowledge-Reservoirs practice

Duplicate / sibling relationship

This is not a duplicate of the existing agent-context corpus. It intersects several prior sources but contributes a distinct missing axis: objective formation and objective governance at interaction time.

Strong siblings include:

EVSRC-2026-000123 — observing actual user behavior as a counterweight to imagined requirements.
EVSRC-2026-000223 — “the product is the intelligence across interactions,” not merely the visible agent.
EVSRC-2026-000230 — domain/rule owners author the acceptance criteria and evaluators.
EVSRC-2026-000232 — agent-ready unstructured data and the redesign of work around AI.
EVSRC-2026-000253 — closing the knowing–doing gap inside real care/work loops.
EVSRC-2026-000262 — memory and compiled knowledge as revisable projections rather than authoritative truth.
EVSRC-2026-000267 — governed capabilities as composable responsibility bundles with distinct activation semantics.
The Surface/Projection Map and OMNI’s long-standing doctrine that product surfaces specialize while substrate functions unify.

The closest existing registry concept is source 230’s owner_authored_risk_definition and policy_to_eval_compiler: the relevant authority defines what “good” means, while the model evaluates as evidence rather than becoming the authority.

What is distinct here: this source moves that idea from evaluation into live interaction. It asks:

Who determines the objective?
How is the objective inferred, expressed, contested, and changed?
How does it steer generators, evaluators, rankings, tools, and surfaces?
What actual behavioral outcome—not merely output quality—is the system attempting to produce?
Likely landing zones
Surface / Projection architecture — massive
Polaris / authority and alignment composition — massive
AI substrate — major
Agent Runtime / capability composition and activation — major
Care goals / planning / commitment boundary — major
Patient-CNS / longitudinal intent and preference — major
Knowledge Reservoirs / user and organizational memory — major
Build-OS evaluation and experimentation — major
Product Intelligence / Outcome Intelligence — major
D7 / consent / ambient observation — major
Clinical Memory and Observation — medium
Settings / Catalog / policy-as-data — medium-major
Federation / patient–operator–community ownership — medium
Data Value / Learning Economy — medium, heavily guarded
BIZOPS and adaptive staff workspaces — medium
4. The strategic read
Classification

Full-semantic spine material for objectives, adaptive surfaces, and alignment—not a generic personalization source.

The “spork” analogy is memorable, but the source is deeper than “personalized UI is better.”

Its real claim is:

Every AI interaction is governed by an objective, whether that objective is explicit or silently baked into the default.

Generic systems appear neutral because they expose one broad input box and one broad assistant. In reality, they encode averaged assumptions about what the user wants, what quality means, which values matter, and which outcome should be optimized. Lam calls that the spork problem: by trying to perform many functions through one generic interface and one generalized objective, the system becomes worse at the specific task and silently homogenizes behavior.

The source’s answer is not conventional preference storage. It is a runtime architecture:

observe current interaction → infer bounded objective candidates → express uncertainty and alternatives → let the user inspect/modify → steer generators + evaluators + rankings → assemble or generate a suitable tool/surface → measure the real effect

That is highly relevant to OMNI.

Core takeaway

The keeper is: OMNI should not begin an interaction by choosing a generic assistant behavior. It should resolve the applicable objective, then assemble the context, capability, evaluator, and surface appropriate to that objective.

But OMNI needs one crucial correction to the source:

An inferred objective is a candidate, not authority.

The system may infer that a patient is trying to understand a medication, schedule a visit, avoid an adverse effect, reduce cost, or leave a facility. It may infer that a provider is trying to reconcile a discharge plan or close an overdue obligation.

It cannot silently convert that inference into:

a patient commitment;
a clinical goal;
consent;
an order;
an authorized action;
a durable preference;
a policy exception;
or an accepted care responsibility.

The objective must pass through the appropriate ownership and authority boundary.

OMNI translation
1. The “spork” is the exact surface anti-pattern OMNI has been trying to avoid

Lam’s argument is that a single generalized interface produces generic interactions because it must carry assumptions for many possible tasks. The problem is not only visual design. It is objective collapse: editing, research, emotional support, coding, decision support, and planning are squeezed through one apparent interaction contract.

This externally validates one of OMNI’s strongest product/substrate doctrines:

Product surfaces specialize. Substrate functions unify.

OMNI should not become:

one giant patient chat;
one provider copilot box;
one universal agent screen;
one “ask OMNI anything” interaction;
one generic work queue;
one summary format for every actor;
or one model posture applied to every task.

The shared substrate can unify identity, authority, context, evidence, memory, capabilities, audit, and orchestration. The interaction should specialize according to:

actor × relationship × objective × authority × moment × environment × consequence

That is not six hardcoded modes. It is a computed projection.

Keeper:

One substrate does not imply one interface.

2. This source pressures an explicit objective layer—but not a new truth-owning “Objective Domain”

The source treats objectives as lightweight runtime representations containing a name, detailed description, and weight. They are inferred from an interaction trace such as a screenshot, sequence of screenshots, or webpage DOM. Importantly, Lam bounds them to the current moment and has the model state uncertainty.

That is useful, but OMNI needs a stronger representation.

A candidate objective should probably carry something like:

objective_candidate_id
subject
objective_description
objective_scope
objective_horizon
objective_source
evidence_refs
inference_method
confidence / uncertainty
alternatives
purpose
applicable_actor
authority_requirement
consent_basis
consequence_class
status: inferred | surfaced | selected | modified | rejected | superseded
expires_at / trust_horizon

The object would not own the actual patient goal, clinical plan, obligation, or organizational truth. It would be a candidate interpretation of what should organize the next interaction.

This matters because OMNI already has more authoritative downstream constructs:

patient preferences;
goals;
resolutions;
care commitments;
care obligations;
orders;
policies;
work packages;
authorized actions.

The source’s objective should feed those things where appropriate, not replace them.

Keeper:

Objective inference proposes the frame for the interaction; it does not commit the person or the domain.

3. The most important design move is not inferring one answer—it is producing a contestable objective set

The study found that there was often more than one valid objective at a given moment. The system presented its top three candidates in random order and allowed users to write or modify their own. Participants selected one of the induced objectives in approximately 98% of cases, and higher-weighted objectives were selected more frequently.

The strategic gem is not the reported percentage. It is the interaction shape:

infer several plausible objectives;
preserve multiplicity;
expose them;
permit correction;
avoid pretending the highest-scoring interpretation is truth.

That maps cleanly to OMNI’s candidate≠commit law and world-model honesty.

A safer OMNI shape is:

interaction evidence → objective_candidate_set → objective resolution → capability/surface assembly

not:

interaction evidence → hidden objective → autonomous action

For routine, reversible work, selection may become mostly automatic. For high-consequence care, financial, consent, or legal transitions, the applicable objective may require explicit confirmation or domain-authority resolution.

Keeper:

Uncertainty should produce alternatives, not false confidence.

4. The objective is a routing primitive across context, capability, model, evaluator, and surface

Lam shows that the same inferred objective can steer both:

a generator, determining what artifact or assistance is produced;
an evaluator, determining what counts as a strong output.

The architecture takes an interaction trace, induces an objective, and inserts that objective into existing generation and evaluation operations. This improved off-the-shelf systems without requiring a new foundation model.

This is highly significant for OMNI because an objective can become a routing input to several independent substrate decisions:

Which context should be retrieved?
Which context must be excluded?
Which capability should be invoked?
Which model/runtime lane is admissible?
Which evaluation profile applies?
Which surface or projection should be rendered?
What level of autonomy is permissible?
Which evidence is required before completion?
Which downstream owner receives the result?
What outcome must later be observed?

Potential architecture:

recognized interaction
        ↓
objective candidate assembly
        ↓
objective resolution / applicable authority
        ↓
context strategy
capability composition
runtime profile
evaluation profile
surface projection
        ↓
candidate output / action
        ↓
authorized commit where applicable
        ↓
effect observation

The objective does not become a new executive. It helps resolve which existing owners and profiles apply.

Keeper:

The objective should route the system; it should not own the system.

5. Just-in-time surfaces may be one of the strongest future expressions of OMNI’s projection model

Poppins generates task-specific tools directly from the user’s current workspace:

a presentation-flow organizer;
a research-narrative validator;
a diagramming environment using concepts from the user’s paper;
character-emotion trajectory tools;
comparison tools for technical approaches.

Users could adjust the inferred objective and proposed tool specification before generation. The assistance reportedly changed not only the artifact but the user’s process, reducing prompting effort and helping users focus on the kind of feedback or work they wanted.

The OMNI implication is substantial:

A surface does not always need to be a predesigned permanent page. It can be an objective-conditioned projection assembled for a particular actor and moment.

Examples:

a medication-reconciliation surface generated around unresolved discrepancies;
a discharge-risk surface assembled around missing dependencies;
a wound-review surface focused on longitudinal images, measurements, and orders;
a provider handoff view assembled around the exact decisions that must transfer;
a patient preparation surface generated for the next scheduled occurrence;
an operational surface for a front-desk employee resolving one specific entitlement/payment/scheduling knot;
a post-call review tool assembled from the call’s commitments and open obligations.

But this must not mean unconstrained generated software.

In OMNI:

domain state remains in its owning system;
the generated tool is a projection and capability composition;
the generated surface cannot invent authority;
commands must use governed domain APIs;
the capability manifest and permissions must be explicit;
high-consequence actions require stable, reviewed interaction patterns;
the generated surface itself must be traceable and versioned.

Keeper:

Generate the utensil, not the physics.

And more sharply:

The surface may be just-in-time. The authority model cannot be.

6. Tool generation and tool activation are separate transitions

The source often moves directly from inferred objective to generated code and rendered tool. That is acceptable in a bounded research prototype. It is not sufficient for OMNI.

An inferred need may produce a:

generated_tool_candidate

That candidate still requires:

capability declaration;
allowed data classes;
allowed commands;
actor identity;
scope;
sandbox/runtime policy;
resource budget;
security scanning;
provenance;
evaluation;
activation authority;
expiration;
rollback or disable semantics.

This source therefore strengthens the distinction between:

composition: what tool or capability bundle would serve the objective;
activation: whether this actor may run that bundle against this state for this purpose;
commit: whether any resulting candidate may alter domain truth or cause real-world action.

The same applies to generated patient interfaces. A surface can recommend a path or collect information without automatically acquiring the authority to perform the action.

Keeper:

Generating a capability is not permission to activate it. Activating it is not permission to commit its result.

7. Immediate, project, longitudinal, and societal objectives form different horizons—not one goal field

Lam extends the idea beyond momentary objectives:

immediate assistance;
project-level background agents;
long-term motivations inferred over months;
societal objectives such as democratic health.

She also recognizes competing goals within the same person: an immediate productivity objective may conflict with longer-term learning, health, or civic goals.

This pressures a more explicit OMNI objective hierarchy:

momentary objective — what the person appears to be doing now;
episode objective — what this interaction or care episode is trying to achieve;
project/pathway objective — the multi-step trajectory;
longitudinal personal goal — enduring preference or desired health state;
care-system objective — safety, continuity, quality, stewardship;
operator objective — throughput, revenue, efficiency, compliance;
societal/legal objective — equity, public health, professional duty, law.

These may conflict.

A patient may want:

immediate relief;
minimum cost;
no hospitalization;
privacy from a family member;
long-term health;
rapid discharge.

A clinician may have an obligation to recommend something the patient does not prefer. An operator may prefer lower cost. A regulator may require disclosure. None of these can be collapsed into one hidden objective weight.

This is where Polaris becomes load-bearing. Polaris names the alignment composition across source authority, role authority, safety, policy, semantic truth, model/capability boundaries, and proof; it does not replace those owners or become a god-domain.

Keeper:

Objective plurality is normal. Alignment is the governed resolution of which objectives apply, to whom, and with what authority.

8. “User-owned AI” is a major OMNI direction—but user-owned does not mean user-sovereign over every outcome

Lam’s Mary Poppins bag is her alternative to the spork: one user-curated system with many capabilities, surfacing only the capability needed for that person at that moment. She extends this toward longer-term user goals and broader collective goals.

This is close to the long-term Patient-CNS vision:

one patient identity;
longitudinal context;
patient-controlled preferences and permissions;
capabilities assembled around the person;
continuity across providers and brands;
different surfaces without different patient silos;
the patient able to see and contest how the system understands them.

But healthcare is inherently multi-principal.

Patient ownership should include strong rights over:

their data and permissions;
which relationships may use it;
their stated goals and preferences;
visibility into inferred objectives;
correction or rejection of inferences;
portability;
when personalization may occur;
which learning uses are allowed.

It does not mean:

the patient authors laboratory truth;
patient preference automatically becomes a clinical order;
a provider’s professional duty disappears;
consent can authorize an unsafe capability;
a user can silently alter regulatory or public-safety obligations;
the model may act as though inferred preference equals capacity or informed refusal.

Keeper:

User-owned AI means user-governed objectives and permissions—not user-sovereign clinical truth.

9. The Loom pipeline is an unusually strong mirror of OMNI’s evidence-ingestion method

Lam’s concept-induction system uses modular operations:

distill → cluster → synthesize → score

with an additional seed mechanism that lets the analyst steer what each stage attends to.

The critical part is score: proposed concepts are independently mapped back to the documents to verify whether and where they occur. The system does not accept a concept merely because synthesis produced it.

This is almost a direct external mirror of OMNI’s source lane:

source-local transcript/evidence;
strategic interpretation;
extracted candidate concepts;
cross-source clustering;
registry synthesis;
anchor verification;
dedup;
gated promotion.

The source sharpens two laws for Knowledge Reservoirs and EVRUN:

Concept synthesis must remain reversible to evidence.

A cluster is a candidate pattern until independently mapped back to its sources.

It also validates steerable defaults. A researcher can begin with a coherent default representation and then modify:

inclusion criteria;
definitions;
seeds;
abstraction level;
clustering focus.

That is superior to either extreme:

opaque generic topics;
completely manual analysis from scratch.

Keeper:

Propose the concept broadly; prove it locally.

10. “Steerable by design” is more important than “promptable after failure”

The source contrasts reactive prompting with systems whose internal objectives and operators can be adjusted directly.

Prompting around a generic default is expensive because:

the user must recognize the mismatch;
understand what the system assumed;
formulate a correction;
repeat the context;
and hope the correction actually reaches the relevant internal component.

A steerable system instead exposes the lever:

objective;
definition;
inclusion rule;
evaluator;
ranking weight;
data scope;
or tool specification.

For OMNI, this supports:

editable context packets;
visible source-authority labels;
inspectable objective candidates;
explicit patient goals;
configurable operator policies;
domain-owner-authored evaluation criteria;
surface-level “why am I seeing this?” explanations;
correction routes that update the correct owner rather than merely changing chat text.

Keeper:

Promptability is not the same as governability.

11. The societal-objective section makes objective functions visibly political and normative

The social-media work begins from a crucial observation: engagement is not neutral. It is an objective function chosen because clicks and likes are observable, even though the effect society cares about may be political hostility, trust, cooperation, or democratic participation.

Lam’s team takes constructs developed by political scientists—with definitions, dimensions, survey measures, and qualitative codebooks—and translates them into AI objective functions. They first test a manual intervention, then scale it through model-assisted ranking and measure the behavioral effect.

This is one of the source’s strongest OMNI contributions.

It gives a complete governance sequence:

authoritative discipline identifies the construct
        ↓
construct is explicitly defined
        ↓
measurement contract is specified
        ↓
manual intervention tests causal plausibility
        ↓
algorithm operationalizes the objective
        ↓
real-world behavioral effect is measured
        ↓
objective remains monitored and revisable

This is much stronger than letting engineers choose a proxy metric and calling it alignment.

It sharpens source 230:

source 230: the rule owner authors the eval;
this source: the relevant discipline authors the runtime objective and its outcome measure.

Candidate:

owner_authored_objective_definition

or

domain_authored_effect_target

These likely sharpen rather than replace:

owner_authored_risk_definition;
policy_to_eval_compiler;
Polaris profiles;
Settings policy-as-data;
effect-observation contracts.

Keeper:

Every objective function is policy in executable form.

12. Manual proof before algorithmic scale is a major Platform and Build-OS law

The societal-objective process did not begin by allowing an LLM to optimize millions of feeds toward a newly invented score.

The sequence was:

define the target construct from prior domain knowledge;
perform manual reranking;
test whether the manual intervention moves the desired behavioral outcome;
assess whether the model can reproduce the classification;
test whether algorithmic reranking produces the same real-world effect;
then consider field deployment.

That is exactly how high-consequence OMNI behavior should mature.

Examples:

manually assembled provider packet before automated packet generation;
manually adjudicated triage rubric before autonomous routing;
human-selected follow-up priorities before automated prioritization;
clinician-authored message standards before model evaluation;
manual care-gap review before proactive patient interventions;
simulated or shadow-mode queue decisions before operational control.

Keeper:

Prove the objective manually before scaling it algorithmically.

13. “The output is not the outcome” directly reinforces the Care Prove/Outcome/Learn path

Lam explicitly distinguishes the feed that the algorithm produces from the behavioral response that actually matters. The output is a ranked feed. The desired outcome is reduced partisan animosity.

This maps almost perfectly to OMNI’s Care Operating Model:

Sense → Resolution → Plan/Commitment → Act/Fulfillment → Prove/Outcome/Learn

The act, message, appointment, order, recommendation, or completed task is not itself the final outcome. OMNI’s care model already separates execution from effect observation.

Examples:

sending instructions ≠ patient understanding;
booking follow-up ≠ follow-up occurring;
prescribing medication ≠ adherence or benefit;
closing a task ≠ resolving the care need;
displaying a recommendation ≠ appropriate adoption;
producing a provider summary ≠ improved judgment;
reducing clicks ≠ reducing harm;
a patient opening a message ≠ informed consent.

Keeper:

The artifact is not the effect. The interaction is not the outcome.

14. The AI interaction observatory is a real Product-Intelligence idea and a serious surveillance risk

Lam proposes infrastructure that observes large-scale trajectories of user objectives to discover:

common tasks;
common problems;
why users are attempting them;
unserved needs;
candidate areas for future AI research;
communities with similar needs.

She also discusses pooling data and compute among trusted communities.

This maps to:

Product Intelligence;
demand discovery;
out_of_scope_as_product_gap;
outcome intelligence;
Knowledge Reservoirs;
Learning Economy;
longitudinal user research;
patient journey analysis.

But in care, an “objective observatory” could become an extraordinarily invasive behavioral-surveillance system.

OMNI would need explicit controls for:

observation permission;
purpose limitation;
data minimization;
sensitive-task exclusion;
on-device inference where appropriate;
retention limits;
user visibility;
correction;
learning opt-in;
aggregate thresholds;
community governance;
prohibition on commercial exploitation;
separation of care from marketing inference.

Keeper:

Learning what people are trying to do is valuable precisely because it is sensitive.

15. The source identifies its own most dangerous failure: objective inference can homogenize at a deeper level

In the closing discussion, Lam acknowledges that her own objective-induction system could encode biases toward:

tasks the model can understand;
tasks that are well scoped;
tasks that fit the kinds of tools the system can generate;
goals legible to the training distribution.

She argues users need visibility into and control over the objective-induction process itself.

This is the right correction.

Without it, a JIT system could subtly reshape human work:

ambiguous problems get rewritten into model-friendly tasks;
relational goals get reduced to measurable transactions;
long-horizon care becomes near-term checklist completion;
patient uncertainty becomes a falsely precise preference;
goals without observable traces disappear;
unusual users receive worse inferred objectives;
the tool narrows attention to what it can solve.

The source therefore pressures an explicit guardrail:

model_legibility_bias

or more generally:

The system must not redefine the person’s objective merely to make the objective computable.

Keeper:

Do not confuse the goal the model can represent with the goal the person actually has.

Where it lands
Surface / Projection architecture — massive

This may be the strongest external source yet for:

computed surfaces;
task-specific projections;
adaptive interaction;
generated tools;
one substrate with many moment-specific expressions;
surface specialization without domain duplication.
Polaris — massive

The objective question is inherently an alignment question:

whose objective;
inferred from what;
for which relationship;
under which authority;
with what consent;
over what horizon;
carrying what consequence;
measured by what outcome.
Patient-CNS / Care goals — major

Supports longitudinal goal awareness and reduced prompting burden, but requires the distinction:

inferred objective ≠ stated preference ≠ accepted goal ≠ care commitment ≠ authorized action

Agent Runtime / capability topology — major

A resolved objective can route:

skills;
tools;
context;
evaluator;
model;
runtime;
surface.

Generated capabilities require separate composition, activation, and commit gates.

Build-OS / Platform — major

Strong support for:

generator–evaluator loops;
owner-authored criteria;
manual-before-algorithmic scale;
real-task evaluation;
shadow deployment;
effect measurement;
objective-specific eval suites.
Knowledge Reservoirs / Evidence lane — major

The Loom sequence is a direct mirror of provenance-preserving source synthesis:

distill → cluster → synthesize → independently score back to source

D7 / Consent / Privacy — major

Ambient screenshot, DOM, and interaction-trace observation cannot be treated as free context—especially for clinical, workplace, and cross-application surfaces.

Product / Outcome Intelligence — major

Objectives, objective trajectories, abandoned attempts, corrections, and unmet needs could become a strong product-learning signal if separated from exploitative surveillance.

Settings / Catalog — medium-major

Objective definitions, policies, evaluators, constructs, and weighting rules need versioned, inspectable representation.

Federation / Learning Economy — medium

Community-shared objectives, data, and compute raise questions about collective ownership, representation, benefit sharing, and exit rights.

Doctrine / primitive pressure

Candidate terms for Review 003 to deduplicate—not final objects:

objective_candidate
objective_candidate_set
objective_provenance
objective_confidence
objective_scope
objective_horizon
objective_conflict_set
objective_resolution_event
objective_contestability
objective_expiration
objective_conditioned_context
objective_conditioned_projection
objective_conditioned_capability_assembly
objective_conditioned_evaluation_profile
steerable_default
generated_tool_candidate
generated_surface_candidate
capability_activation_gate
owner_authored_objective_definition
domain_authored_effect_target
objective_operationalization_contract
manual_intervention_scale_gate
interaction_effect_target
objective_observatory
ambient_observation_permission
model_legibility_bias
goal_representation_loss
objective_drift
objective_trace
objective_to_policy_compiler
Likely dedup / sharpening disposition
owner_authored_objective_definition → sharpens owner_authored_risk_definition.
objective_to_policy_compiler → sharpens policy_to_eval_compiler, but extends it from evaluation into runtime steering.
objective_conditioned_capability_assembly → likely composes capability topology + Context Router + computed Polaris posture.
generated_tool_candidate → likely sharpens capability composition and candidate≠activation.
objective_candidate_set may be a genuinely useful representation if no current equivalent exists.
objective_horizon should reconcile against existing goal/commitment time horizons and trust_horizon; it is not the same thing.
objective_observatory likely routes to Product Intelligence / Learning Economy rather than a new domain.
steerable_default is probably vocabulary/doctrine, not a first-class object.
model_legibility_bias may be a valuable guardrail rather than an object.
manual_intervention_scale_gate likely sharpens existing validation and staged-autonomy doctrine.
Keeper doctrine
A generic interface is not neutral; it silently chooses objectives.
One substrate does not imply one interface.
Infer a candidate objective, not a hidden command.
An inferred objective is not a patient preference, care commitment, consent grant, or authorized action.
Uncertainty should produce alternatives, not false confidence.
The objective routes context, capability, evaluation, and surface; it owns none of them.
Generate the utensil, not the physics.
The surface may be just-in-time. The authority model cannot be.
Generating a tool is not permission to activate it. Activating it is not permission to commit its result.
User-owned AI means user-governed objectives and permissions—not user-sovereign clinical truth.
Promptability is not governability.
Steerable by design beats correction after a generic default fails.
Objective plurality is normal; alignment resolves which objectives apply and with what authority.
Every objective function is policy in executable form.
The relevant domain owner should define the outcome—not the model vendor or engagement metric.
Prove the objective manually before scaling it algorithmically.
The artifact is not the effect. The interaction is not the outcome.
Propose concepts broadly; prove them locally against the source.
Do not redefine the person’s goal merely to make it computable.
Learning what a person is trying to do is sensitive data.
Dynamic interfaces should adapt around stable, auditable semantics.
OMNI should surface the right governed capability at the right moment—not force every need through one AI spork.
What NOT to import blindly
1. Ambient screenshot and DOM observation as harmless context

This may be acceptable in a consented research study. In healthcare and enterprise work it can expose:

PHI;
credentials;
unrelated patients;
employee communications;
financial information;
privileged documents;
third-party data;
sensitive inferred intent.

Observation requires purpose, scope, consent, minimization, and retention controls.

2. The top inferred objective as truth

Even high study accuracy does not justify hidden action. Multiple objectives may be valid, and the most consequential objective may be invisible in the screenshot.

3. Long-term motivations inferred from passive observation

This can become paternalistic or manipulative. “The system thinks your real goal is health” does not authorize it to reorder the user’s life or care.

4. “User-owned” as an answer to every authority question

Care includes professional duties, capacity, surrogate authority, safety obligations, law, payer constraints, and public-health responsibilities.

5. Generated UI as an unconstrained production mechanism

Dynamic tools can create:

inconsistent command semantics;
inaccessible interfaces;
hidden side effects;
unfamiliar safety controls;
audit difficulties;
security vulnerabilities;
user confusion.

High-risk transitions need stable, tested, recognizable interaction contracts.

6. LLM evaluator improvement as proof of correctness

The evaluator is still evidence. It can inherit the objective’s error, share generator bias, or optimize toward the wrong metric.

7. Social-science constructs as uncontested truth

The sequence is excellent, but constructs remain theory-bound, context-dependent, and open to disagreement. The system must preserve authorship, version, population, uncertainty, and applicability.

8. Behavioral outcome optimization without rights constraints

Even a beneficial aggregate outcome does not justify manipulative ranking, opacity, compelled participation, or suppression of legitimate minority perspectives.

9. Large-scale objective observatories by default

This could become a more intimate surveillance layer than conventional analytics because it attempts to infer why people act.

10. Personalization as universally desirable

Some contexts require:

consistent instructions;
standard-of-care presentation;
equal treatment;
stable legal disclosures;
predictable navigation;
resistance to manipulation.
11. The Mary Poppins metaphor as proof that one AI should own every function

The metaphor is useful at the user-experience level. Architecturally, OMNI should still preserve independent domain owners, capability envelopes, failure boundaries, and audit.

Do-not-miss lesson

OMNI’s next surface should not merely ask, “What did the user type?” It should ask, “What objective appears to govern this moment, who is entitled to define or correct it, which capabilities are admissible under it, and what real-world effect would prove the interaction helped?”

Tiering tags per concept
Spork / generic-interface anti-pattern

stale-vs-v3: AFFIRM · weight_tier: spine-vocabulary · status: promote

Externally validates “product surfaces specialize; substrate functions unify.”

Objective candidates inferred from interaction traces

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote-after-reconciliation

Likely a meaningful representation gap, but must remain candidate-state.

Objective candidate set with alternatives and user correction

stale-vs-v3: PARTIAL-or-ABSENT · weight_tier: spine · status: promote

Stronger than hidden top-1 inference.

Objective-conditioned context/capability/evaluator/surface routing

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote-as-composition

Likely composes existing mechanisms rather than requiring a new executive.

Just-in-time generated surfaces

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote-with-guardrails

Strong Surface/Projection destination.

Generated tool candidate vs activation

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote

Important Agent Runtime and P35 correction.

Immediate/project/longitudinal/societal objective horizons

stale-vs-v3: PARTIAL · weight_tier: vocabulary-to-spine · status: watch/promote-after-goal-model-reconciliation

User-owned AI

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote-with-authority-precision

Strong direction; raw phrase insufficient for care.

Steerable defaults

stale-vs-v3: PARTIAL · weight_tier: vocabulary · status: promote

Useful product/doctrine phrase.

Loom evidence-preserving concept induction

stale-vs-v3: AFFIRM · weight_tier: Build-OS/Reservoirs practice · status: promote-as-method-validation

Owner-authored objective functions

stale-vs-v3: PARTIAL · weight_tier: spine · status: promote-as-sharpening

Extends owner-authored evals into runtime behavior and effect targets.

Manual intervention before algorithmic scale

stale-vs-v3: AFFIRM/PARTIAL · weight_tier: spine · status: promote

Strong Platform/Build-OS doctrine.

Output-versus-effect distinction

stale-vs-v3: AFFIRM · weight_tier: spine · status: promote

Directly reinforces Prove/Outcome/Learn.

AI interaction observatory

stale-vs-v3: PARTIAL · weight_tier: low-authority-watch/product-idea · status: watch

Potentially valuable, potentially surveillance-heavy.

Passive inference of longitudinal goals

stale-vs-v3: ABSENT-or-PARTIAL · weight_tier: low-authority-watch · status: watch

Do not promote without consent and authority design.

Societal objectives

stale-vs-v3: PARTIAL · weight_tier: spine-pressure · status: watch/promote-method-not-specific-values

Model-legibility bias

stale-vs-v3: PARTIAL · weight_tier: guardrail · status: promote

5. Hard read

Verdict: full-semantic spine source.

This is one of the better recent sources because it is not merely another argument that context, memory, or harnesses matter. It identifies a distinct control variable that the existing corpus has not fully centered:

the objective organizing the interaction

The source connects that variable to:

user observation;
uncertainty;
alternative interpretations;
generator behavior;
evaluator behavior;
capability selection;
dynamic interfaces;
concept formation;
social values;
real-world behavioral effects;
user governance;
longitudinal goals.

Its best contribution to OMNI is not “personalization.” It is the proposition that objectives should become explicit, inspectable, steerable, provenance-bearing runtime inputs rather than silent assumptions embedded in generic products.

Its most important OMNI correction is equally strong:

The system may infer an objective, but it may not silently grant that objective authority.

The source also provides three excellent operational patterns:

candidate objective sets rather than hidden top-1 intent;
distill–cluster–synthesize–score-back-to-source;
domain-defined construct → manual intervention → algorithmic scale → real effect measurement.

This should not create a sovereign Objective Engine or a new god-domain. It should sharpen the seam among:

Sense/context assembly;
patient and actor goals;
Polaris alignment;
capability composition;
surface generation;
evaluation;
authorized action;
and outcome learning.

Strongest OMNI line:

OMNI should infer what matters now, expose who gets to decide, assemble the right governed capability, and prove the effect—without ever confusing inferred intent with authority.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-15` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

### Review 003 — Opus formal deep extraction (EVSRC-2026-000269)

**Read posture / tiering.** Formalizes Knox Review 001 (excellent, high-fidelity). **Overall tier: full_semantic, spine — the richest Surface/Projection + Polaris source in the corpus, but ~0 genuine net-new domain objects after dedup (it composes existing OMNI mechanisms).** Siblings: 230 (owner-authored risk/eval), 223 ("product = the intelligence"), 123 (observe real behavior), 262 (memory = revisable projection), 267 (capability = composable responsibility bundle + activation), 253 (knowing–doing gap). The source's distinct axis the corpus had not centered: **the objective organizing the interaction** — currently silent/baked-in ("spork"), which OMNI should make explicit, inspectable, steerable, provenance-bearing. **The load-bearing OMNI correction (verify + keep): an inferred objective is a CANDIDATE, never authority** — it may route context/capability/evaluator/surface but must never silently become a preference, consent, order, or authorized action. Dominant reality-check: **`doctrine=PARTIAL · build=absent`** (objective layer is a genuine representation gap; surfaces/Polaris doctrine exists but this dynamic-projection form is unbuilt).

**A. Concept clusters**

---
**Cluster 1 — The "spork" anti-pattern: one generic interface silently collapses objectives (★)**
| field | content |
|---|---|
| concept | Combining many functions into one generic interface + one generalized objective → worse task performance + homogenized behavior. A generic system is not neutral; it encodes averaged assumptions about what "good"/"the user wants" means. |
| OMNI meaning | External validation of OMNI's strongest surface doctrine: **product surfaces specialize; substrate functions unify** (`D0THES-DEC-033`). OMNI must NOT become one patient chat / one provider copilot box / one "ask OMNI anything." Substrate unifies identity/authority/context/evidence/memory/capabilities/audit; interaction specializes by actor × relationship × objective × authority × moment × environment × consequence (computed projection, not 6 hardcoded modes). |
| why | Names WHY a single generic assistant degrades + homogenizes; anti-pattern for the whole surface plane. |
| downstream homes | **Surface/Projection Map** · **thesis §B** · **product** |
| source anchors | "spork problem…combining many functionalities…we get worse results" [0:58]; "homogeneous thinking across the population" [2:05] |
| stale-vs-v3 | AFFIRM (doctrine) · build=partial |
| weight_tier | spine-vocabulary |
| status | promote |

---
**Cluster 2 — Objective candidates inferred from interaction traces (the missing layer)**
| field | content |
|---|---|
| concept | Infer bounded "just-in-time objectives" (name + description + weight) from ubiquitous low-effort observation (screenshot / screenshot stream / DOM); bound to the instant; have the model state uncertainty. Automatically specializes off-the-shelf models without prompting. |
| OMNI meaning | A genuine representation gap: OMNI has downstream authoritative constructs (preferences, goals, resolutions, care commitments, obligations, orders, policies, work packages) but no explicit **objective_candidate** that frames the *next interaction*. OMNI's version must carry provenance/scope/horizon/confidence/alternatives/authority-requirement/consent-basis/consequence-class/status/expiry — and stay candidate-state (feeds the authoritative constructs, never replaces them). |
| why | Reduces prompting burden; makes the interaction's organizing objective explicit + inspectable instead of silently baked-in. |
| downstream homes | **CNS context-assembly / Sense** · **Patient-CNS (longitudinal intent)** · **Polaris** · **Surface/Projection** · **capability topology (P35)** |
| source anchors | "just in time objectives…automatically induced by observing their interactions" [7:15]; "name, a detailed description, and a weight" [10:08]; "have the LM state its uncertainty" [9:42] |
| stale-vs-v3 | PARTIAL (candidate≠commit exists; an explicit objective-candidate frame is absent) · build=absent |
| weight_tier | spine |
| status | promote-after-reconciliation (must stay candidate-state; not a new god-domain) |

---
**Cluster 3 — Contestable objective SET (alternatives + correction), not hidden top-1**
| field | content |
|---|---|
| concept | Often >1 valid objective; surface top-3 (random order) + let users write/modify their own. Induced objectives chosen ~98%; higher weights chosen more. The gem is the *interaction shape*: infer several → preserve multiplicity → expose → permit correction → never treat top-score as truth. |
| OMNI meaning | Maps to candidate≠commit + world-model honesty: `interaction evidence → objective_candidate_set → resolution → capability/surface assembly`, NOT `evidence → hidden objective → autonomous action`. Routine/reversible → mostly-automatic selection; high-consequence care/financial/consent/legal → explicit confirmation or domain-authority resolution. |
| why | Uncertainty should produce alternatives, not false confidence. |
| downstream homes | **§A candidate→commit** · **Polaris** · **Surface (why-am-I-seeing-this)** |
| source anchors | "not just one valid objective at any given point" [10:50]; "chosen in about 98% of cases" [11:08] |
| stale-vs-v3 | PARTIAL-or-ABSENT (candidate-set representation absent) · build=absent |
| weight_tier | spine |
| status | promote |

---
**Cluster 4 — The objective is a ROUTING primitive (context/capability/model/evaluator/surface); it owns nothing**
| field | content |
|---|---|
| concept | Same inferred objective steers both a generator (what artifact) and an evaluator (what counts as good), inserted into existing gen/eval prompts — improved off-the-shelf systems w/o a new model. |
| OMNI meaning | An objective becomes a routing input to independent substrate decisions: which context to retrieve/exclude, which capability, which model/runtime lane, which eval profile, which surface, what autonomy level, what evidence-before-completion, which downstream owner, what outcome to observe. Composes Context Router + capability topology + computed Polaris posture — it resolves which existing owners/profiles apply; it is NOT a new executive. |
| why | Explains how one primitive coherently conditions the whole pipeline without becoming sovereign. |
| downstream homes | **Context Router** · **§C capability topology** · **Build-OS eval profiles** · **Polaris** · **Surface** |
| source anchors | "steer the existing generators and evaluators" [12:24]; "irrespective of what they were meant to generate" [12:32] |
| stale-vs-v3 | PARTIAL · build=absent |
| weight_tier | spine |
| status | promote-as-composition |

---
**Cluster 5 — Just-in-time generated surfaces = strongest future expression of the projection model**
| field | content |
|---|---|
| concept | Poppins generates task-specific tools from the current workspace (presentation organizer, narrative validator, diagramming env, char-emotion tracker); user can edit the objective + tool spec before generation. Changed users' *process*, not just artifacts. |
| OMNI meaning | A surface need not be a predesigned permanent page — it can be an objective-conditioned projection assembled for an actor+moment (med-reconciliation surface around discrepancies; discharge-risk surface around missing dependencies; provider-handoff view around decisions that must transfer). GUARDRAIL: domain state stays in owning systems; the generated tool is projection + capability composition; it can't invent authority; commands use governed domain APIs; capability manifest + permissions explicit; high-consequence actions use stable/reviewed patterns; the generated surface is itself traceable + versioned. |
| why | "Generate the utensil, not the physics"; "the surface may be just-in-time — the authority model cannot be." |
| downstream homes | **Surface/Projection Map** · **§C** · **security/audit** · **product** |
| source anchors | "generates code on the fly and renders it for me" [17:15]; "changed users' processes" [19:03] |
| stale-vs-v3 | PARTIAL · build=absent |
| weight_tier | spine |
| status | promote-with-guardrails |

---
**Cluster 6 — Composition ≠ activation ≠ commit (three transitions)**
| field | content |
|---|---|
| concept | Source jumps inferred-objective → generated tool → rendered (fine for a prototype). OMNI must split: a `generated_tool_candidate` still needs capability declaration, allowed data/commands, actor identity, scope, sandbox/runtime policy, resource budget, security scan, provenance, eval, activation authority, expiry, rollback. |
| OMNI meaning | EXISTS-AS 267 (capability = composable responsibility bundle + activation semantics) + P35 (human-confirmed command) + 259 (governance outside the reasoning loop). SHARPEN: generating a capability ≠ permission to activate; activating ≠ permission to commit its result. Same for generated patient interfaces. |
| why | Prevents dynamic-UI from becoming an unconstrained production/authority mechanism. |
| downstream homes | **§C capability topology / P35** · **Agent Runtime** · **security** |
| source anchors | "generates this or when I was working on a diagram, it generated" [8:21] |
| stale-vs-v3 | PARTIAL (267/P35 hold this) · build=partial |
| weight_tier | spine (sharpen) |
| status | promote (sharpen 267/P35) |

---
**Cluster 7 — Objective horizons (immediate / project / longitudinal / societal) → Polaris, not one goal field**
| field | content |
|---|---|
| concept | Objectives span horizons (momentary, project background agents, months-long motivations, societal e.g. democratic health) and CONFLICT within one person (immediate productivity vs long-term learning/health/civic). |
| OMNI meaning | Pressures an explicit horizon distinction (momentary/episode/pathway/longitudinal-personal/care-system/operator/societal-legal) that may conflict — a patient's immediate-relief/min-cost/privacy vs clinician duty vs operator cost vs regulator disclosure. This is exactly **Polaris**: the governed resolution of which objectives apply, to whom, with what authority — Polaris names the composition; it does not become a god-domain. |
| why | Objective plurality is normal; alignment is the resolution, not a hidden weight. |
| downstream homes | **Polaris** · **Patient-CNS / care goals** · **thesis §A** |
| source anchors | "immediate goals…longer term user goals…broader societal goals" [36:29]; "competing goals within an individual" [37:27] |
| stale-vs-v3 | PARTIAL (Polaris holds composition; horizon taxonomy not named) · build=absent |
| weight_tier | vocabulary → spine |
| status | watch/promote-after-goal-model reconciliation (reconcile `objective_horizon` vs existing goal/commitment horizons + trust_horizon — not the same thing) |

---
**Cluster 8 — "User-owned AI" (Mary Poppins bag) — right direction, wrong if read as user-sovereign**
| field | content |
|---|---|
| concept | Alternative to the spork: one user-curated system, many capabilities, surfaces only the one needed now; extends to longitudinal + collective goals; user visibility/correction of inferences; community data/compute pooling; juries for societal objectives. |
| OMNI meaning | Close to Patient-CNS (one identity, longitudinal context, patient-controlled preferences/permissions, continuity across brands, contestable inferences). BUT care is multi-principal: user-owned = user-**governed objectives + permissions + visibility + portability + learning opt-in**, NOT user-**sovereign** over clinical truth (patient preference ≠ order; consent can't authorize an unsafe capability; provider duty/law/public-health persist). |
| why | Preserves patient agency without collapsing clinical authority. |
| downstream homes | **Patient-CNS** · **Federation / tenant-ownership (C3.8)** · **D7 consent** · **Polaris** |
| source anchors | "vision of userowned AI…surfaces the specific one that I need" [36:14]; "own their own Mary Poppins bag" [36:24] |
| stale-vs-v3 | PARTIAL · build=absent |
| weight_tier | spine (with authority precision) |
| status | promote-with-authority-precision |

---
**Cluster 9 — Loom (distill→cluster→synthesize→score-back-to-source) mirrors OMNI's evidence method**
| field | content |
|---|---|
| concept | Concept-induction pipeline: distill key points → cluster (embeddings/HDBSCAN) → synthesize concepts → **score: independently map concepts back to documents to verify occurrence**; a `seed` operator steers each stage; "steerable by design" default. |
| OMNI meaning | Near-direct mirror of the Evidence Plane lane (source → interpretation → candidate concepts → cross-source clustering → registry synthesis → **anchor verification** → dedup → gated promotion). Method-validation for Knowledge Reservoirs + EVRUN: concept synthesis must remain reversible to evidence; a cluster is a candidate until independently mapped back. "Propose broadly; prove locally." |
| why | External validation of GRD-044 authoring discipline (anchor ledger / no quote-driven authoring). |
| downstream homes | **Knowledge Reservoirs** · **Evidence Plane (this lane) / Build-OS eval** |
| source anchors | "score operator…independently mapping back to the documents" [23:46]; "steerable by design" [21:53] |
| stale-vs-v3 | AFFIRM · build=partial (evidence-plane method present; not tooled) |
| weight_tier | Build-OS/Reservoirs practice |
| status | promote-as-method-validation |

---
**Cluster 10 — Societal objective functions: every objective function is policy in executable form**
| field | content |
|---|---|
| concept | Engagement is not neutral — it's a chosen objective because clicks are observable, even if society cares about hostility/trust/cooperation. Translate social-science constructs (defs + dimensions + survey measures + codebooks, e.g. APA anti-democratic-attitudes) into AI objective functions; manual intervention first → algorithmic scale → measure behavioral effect (Science-published). |
| OMNI meaning | Sharpens 230 (rule owner authors the eval) INTO runtime: the relevant discipline authors the runtime objective + its outcome measure → `owner_authored_objective_definition` / `domain_authored_effect_target`. Also the full governance sequence: authoritative discipline → explicit construct → measurement contract → manual intervention (causal plausibility) → algorithmic operationalization → measured effect → monitored/revisable. |
| why | "Every objective function is policy in executable form"; "prove the objective manually before scaling it algorithmically." |
| downstream homes | **Polaris** · **Settings policy-as-data** · **Build-OS (manual-before-scale)** · **effect-observation contracts** |
| source anchors | "social media AI today are centered on the wrong objective…engagement" [28:49]; "societal objective functions" [30:54]; "manually re-ranking…significantly reduced partisan animosity" [33:04] |
| stale-vs-v3 | PARTIAL (230 holds owner-authored eval; runtime-objective + manual-before-scale = sharpen) · build=absent |
| weight_tier | spine (method, not specific values) |
| status | promote-as-sharpening (method); watch (specific societal values) |

---
**Cluster 11 — Output ≠ outcome (reinforces Prove/Outcome/Learn) + observatory/legibility guardrails**
| field | content |
|---|---|
| concept | The ranked feed (output) ≠ the behavioral response that matters (reduced animosity = outcome). Plus: (a) "AI interaction observatory" (learn large-scale objective trajectories) = real product-intel idea + serious surveillance risk; (b) self-identified failure: objective inference can homogenize deeper (rewrite ambiguous goals into model-friendly tasks) → `model_legibility_bias` guardrail. |
| OMNI meaning | AFFIRMS Care Prove/Outcome/Learn (sending ≠ understanding; booking ≠ follow-up occurring; closing a task ≠ resolving the need). Observatory → Product/Outcome Intelligence but with consent/purpose-limit/minimization/sensitive-task-exclusion/retention/opt-in controls. `model_legibility_bias` = keeper guardrail: "do not redefine the person's goal merely to make it computable." |
| why | Locks the effect-vs-artifact distinction + names the deep homogenization + surveillance risks. |
| downstream homes | **Care Operating Model (Prove/Outcome/Learn)** · **Product/Outcome Intelligence** · **D7 consent** · **security/guardrail digest (`model_legibility_bias`)** |
| source anchors | "the actual outcome we care about is not that feed" [29:33]; "encode biases…towards tasks a language model can understand" [47:25] |
| stale-vs-v3 | AFFIRM (output≠outcome) · PARTIAL (observatory/legibility) · build=partial |
| weight_tier | spine (output≠outcome) / guardrail (`model_legibility_bias`) / low-authority-watch (observatory) |
| status | promote (output≠outcome + `model_legibility_bias`); watch (observatory) |

---

**B. Net-new primitives (dedup vs `EVRUN-2026-000001 §2A` + waves 2/3/4 + C3.5–3.8 + `EVRUN-000004 §0.5`)**

- `objective_candidate` / `objective_candidate_set` — **thin genuine gap** (an explicit candidate frame for what organizes the next interaction). Must stay candidate-state; feeds existing goal/preference/resolution/commitment constructs; NOT a new truth-owning "Objective Domain." → promote-after-reconciliation as a Sense/context-assembly + Polaris input.
- `objective_conditioned_{context,capability,evaluator,surface}_routing` — **EXISTS-AS: Context Router + §C capability topology + Build-OS eval profiles + computed Polaris posture.** Composition, not new primitive. AFFIRM.
- `generated_surface_candidate` / `generated_tool_candidate` + activation gate — **EXISTS-AS: 267 (capability bundle + activation) + P35 + Surface/Projection.** SHARPEN (composition ≠ activation ≠ commit for generated artifacts).
- `owner_authored_objective_definition` / `domain_authored_effect_target` — **EXISTS-AS: 230 (`owner_authored_risk_definition`/`policy_to_eval_compiler`).** SHARPEN (extend from eval into runtime objective + effect target).
- `objective_horizon` — reconcile vs existing goal/commitment horizons + `trust_horizon` (NOT the same). → watch.
- `model_legibility_bias` / `goal_representation_loss` — **net-new GUARDRAIL candidate** ("don't redefine the goal to make it computable"). → promote to guardrail digest for evaluation.
- `steerable_default` — doctrine/vocabulary (AFFIRMS steerable-by-design). 
- `objective_observatory` / `ambient_observation_permission` — route to Product/Outcome Intelligence + D7 consent; watch (surveillance risk).
- AFFIRMS: spork↔surface-specialization (`DEC-033`), output≠outcome (Care model), Loom↔evidence-method (GRD-044), manual-before-scale (staged-autonomy).

**Net-new verdict: ~0 net-new domain objects; 1 thin representation gap (`objective_candidate[_set]`, candidate-state) + 1 net-new guardrail candidate (`model_legibility_bias`) + ~6 strong sharpenings** (surface-specialization, objective-as-router, generated-surface projection, composition≠activation≠commit, owner-authored-runtime-objective, output≠outcome). Everything else composes existing mechanisms. No god-domain "Objective Engine."

**C. Reread flags**
- Clusters 2–5 (objective candidate → set → routing → generated surface) are the spine passages — reread when authoring the Surface/Projection contract + Polaris + Context-Router objective-input.
- The candidate≠authority correction is load-bearing: keep `objective_candidate` from ever silently becoming preference/consent/order/action.
- Ambient screenshot/DOM observation is NOT free context in care (PHI/credentials/other patients) — route through D7 consent + minimization before any build.
- Reported percentages (98% selection, 70% preference, Science feed results) = study-local evidence, not OMNI guarantees (`GRD-039`).

**D. One-line hard read**
Full_semantic **spine, ~0 net-new**: the corpus's clearest articulation that *the objective organizing an interaction* should be an explicit, inspectable, steerable, provenance-bearing **candidate** that routes context/capability/evaluator/surface — while OMNI's non-negotiable correction holds: *infer what matters now, expose who gets to decide, assemble the right governed capability, prove the effect — never confuse inferred intent with authority.*

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

### Review 004 — semantic-fidelity restoration  ·  layer: `analysis_nonbinding`
- reviewer: Opus (restoration subagent) · type: AI assistant · at: 2026-07-18 · purpose: recover Knox Review-001 nuggets dropped/flattened in Review 003 · binds nothing (GRD-036/GRD-044). Append-only — Review 003 NOT modified.

**Method.** Targeted restoration per the WAVE-5 semantic-restoration transaction (Knox ruling 2026-07-18). Read §3 Review 001 (Knox) + §3 Review 003 (Opus); used the `EVRUN-2026-000006_…_nugget_preservation_restore_ledger.md` EVSRC-269 entry as minimum inventory; verified each anchor against §3 Review 001 ("What NOT to import blindly" §§3/6/8/10 + Keeper doctrine) with §1 transcript corroboration for the steerable/evaluator passages ([~lines 122/274/282/454/466]). **Fidelity verdict: MINOR-LOSS** (confirms restore-ledger §0 for 269 — anchor-clean/0 fabrications, but the skeptical "what-NOT-to-import" counterweights were systematically dropped or flattened). **Restored: 5** (omitted 3 · flattened 2). **Weight-change: YES** — restores a **care-safety guardrail cluster** (3 guardrails) that Review 003 under-counted (Review 003 carried only `model_legibility_bias`); the dedup verdict itself is UNCHANGED — still **~0 net-new DOMAIN objects** (these are guardrails/sharpenings, not new domains). Review 003's positive extraction is not corrected — only supplemented.

| # | restored insight (verbatim-ish ≤20 words) | source/R001 anchor | loss_type | why material | disposition | destination home | relation to prior registry concept | status |
|---|---|---|---|---|---|---|---|---|
| 1 | "Personalization is not universally desirable — some contexts need consistency, standard-of-care presentation, equal treatment, stable legal disclosures, manipulation-resistance." | R001 "What NOT to import" §10 "Personalization as universally desirable" (+ Keeper) | omitted | Direct counterweight to importing JIT specialization wholesale into care; Review 003's whole thrust is objective-conditioned specialization with no brake for consistency/equal-treatment contexts — **highest-value restore**. | **GUARDRAIL** (care) | `06` guardrail digest · Surface/Projection Map · Care wave | Brakes Cluster 1/5 (spork↔specialization; generated surfaces); pairs with `model_legibility_bias` | restored |
| 2 | "The LLM evaluator is still evidence — it can inherit the objective's error and share generator bias." | R001 "What NOT to import" §6 "LLM evaluator improvement as proof of correctness" | omitted | Review 003 Cluster 4 uses the objective-steered evaluator only positively ("what counts as good"); the caution that a JIT evaluator is fallible, biased evidence — not proof — was dropped. | **SHARPEN** (eval-governance) | Build-OS eval profiles · `06` (illusion_of_correctness) | Sharpens `owner_authored_risk_definition`/`policy_to_eval_compiler` (230); pairs with 271 eval-governance | restored |
| 3 | "Behavioral-outcome optimization without rights constraints → no manipulative ranking, opacity, compelled participation, or suppression of minority perspectives." | R001 "What NOT to import" §8 "Behavioral outcome optimization without rights constraints" | omitted | Review 003 Clusters 10/11 endorse societal-objective functions + effect-measurement but never carry the rights-constraint limit; a beneficial aggregate does not license manipulation/opacity. | **GUARDRAIL** | `06` guardrail digest · Polaris · Care wave | Constrains Cluster 10 (societal objective functions as executable policy) | restored |
| 4 | "Long-term motivations inferred from passive observation can become paternalistic/manipulative; does not authorize reordering the user's life or care." | R001 "What NOT to import" §3 "Long-term motivations inferred from passive observation" | flattened | Review 003 kept the ambient-observation reread flag + observatory surveillance risk but flattened away the paternalism/authority-limit point on inferred longitudinal goals. | **GUARDRAIL** | `06` guardrail digest · D7 consent · Patient-CNS | Extends the ambient-observation/PHI reread flag (Review 003 §C) + Cluster 7 horizons | restored |
| 5 | "Promptability is not governability — steerable systems expose the lever; correction routes update the correct owner, not merely the chat text." | R001 Keeper "Promptability is not governability" + §10 "Steerable by design" | flattened | Review 003 flattened this to "`steerable_default` — doctrine/vocabulary (AFFIRMS steerable-by-design)," dropping the governability distinction + correction-routes-to-owner sharpening. | **SHARPEN** (`steerable_default`) | Surface (why-am-I-seeing-this) · §C · CNS correction routes | Sharpens `steerable_default`; correction updates the owning system, not the transcript | restored |

**One-line verdict.** MINOR-LOSS restored to faithful: Review 003's positive spine extraction stands and is anchor-clean, but its systematic drop of the skeptical care-safety counterweights is repaired — 5 nuggets recovered (3 omitted / 2 flattened), adding a 3-item care-safety guardrail cluster (personalization-not-universal = GUARDRAIL) without changing the ~0-net-new-domain dedup verdict; PROPOSE-ONLY (GRD-036/GRD-044), binds nothing.

&nbsp;

⬆️⬆️⬆️  END Review 004  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000006` (ai-corpus wave-5) · concept_registry: `EVRUN-2026-000006_ai-corpus-wave-5_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000006_ai-corpus-wave-5_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Surface/Projection (massive — spork↔specialization; generated projections) · Polaris (massive — objective horizons + alignment resolution) · §A candidate→commit (objective candidate ≠ authority) · Context Router / §C capability topology (objective-as-router; composition≠activation≠commit, sharpen 267/P35) · Patient-CNS (longitudinal intent) · Care Prove/Outcome/Learn (output≠outcome) · Knowledge Reservoirs (Loom↔evidence-method) · Build-OS (owner-authored runtime objective; manual-before-scale) · D7 consent (ambient observation) · guardrail (model_legibility_bias)` · promotion: `watch → promote-candidate (spine sharpenings + 1 thin gap objective_candidate[_set] candidate-state + 1 net-new guardrail model_legibility_bias; NO god-domain Objective Engine; ambient-observation/percentages held GRD-039)`
- **Cross-source convergence:** distinct "objective layer" axis on top of **230** (owner-authored eval → runtime objective), **223/253** (product=intelligence; knowing-doing gap), **262** (memory=projection), **267** (capability bundle + activation). Strongest Surface/Projection + Polaris source in the corpus. Folds into wave-5 registry as the objective/surface-projection anchor.

## §5 — Change log
- `2026-07-14` — source file created (wave-5 scaffold; `EVRUN-2026-000006`).
- `2026-07-15` — Opus Review 003 formal deep extraction written into §3 (formalizing Knox Review 001); §0/§0.1 metadata filled (Stanford CS547 · Michelle Lam); file renamed `_TK` → `_michelle-lam-just-in-time-objectives-specialized-ai`; §4 pointers filled (`EVRUN-2026-000006`); status → `analyzed`. Verdict: full_semantic spine, ~0 net-new domain objects (1 thin gap `objective_candidate[_set]`, candidate-state; 1 net-new guardrail `model_legibility_bias`); keeper = objective organizes the interaction but inferred objective ≠ authority.
- `2026-07-18` — Opus (restoration subagent) appended §3 Review 004 (semantic-fidelity restoration) per WAVE-5 semantic-restoration transaction (Knox ruling). Targeted restoration off the `EVRUN-2026-000006` nugget-preservation restore ledger (EVSRC-269 entry) + §3 Review 001; recovered 5 flattened/omitted skeptical counterweights (3 omitted / 2 flattened): personalization-not-universally-desirable (GUARDRAIL, care — highest value), LLM-evaluator-is-still-evidence (SHARPEN), behavioral-optimization-needs-rights-constraints (GUARDRAIL), passive-longitudinal-inference-is-paternalistic (GUARDRAIL), promptability≠governability (SHARPEN). Fidelity MINOR-LOSS; weight-change YES (adds a 3-item care-safety guardrail cluster) but ~0-net-new-domain dedup verdict UNCHANGED. Append-only — Review 003/§1/§0 NOT modified; PROPOSE-ONLY (GRD-036/GRD-044); binds nothing.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

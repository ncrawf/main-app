# EVSRC-2026-000071 — What's next for AI agentic workflows ft. Andrew Ng of AI Fund

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `reviewed`** (transcript + Knox captured + content-verified; awaiting EVRUN — **flagged verbatim-reread cluster**)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> Captured + reviewed 2026-06-07. Transcript in §1 (verified: Andrew Ng/Stanford); Knox read in §3 Review 001 (verified: agentic design-pattern spine). Awaiting EVRUN analysis run.

## §0 — Source identity / metadata  *(filled from screenshot 2026-06-07)*
- evsrc_id: `EVSRC-2026-000071`  ·  filename: `EVSRC-2026-000071_andrew-ng-whats-next-for-ai-agentic-workflows.md`
- source_platform: `YouTube`  ·  source_url: `https://youtube.com/watch?v=sal78ACtGTc`
- source_title: `What's next for AI agentic workflows ft. Andrew Ng of AI Fund`
- channel_or_org: `Sequoia Capital` (211K subs)  ·  series: `AI Ascent 2024`  ·  published_at: `2024-03-26`  ·  views_at_capture: `408,092`
- captured_at: `2026-06-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `talk`  ·  source_reliability_context: `practitioner / researcher (Andrew Ng — DeepLearning.AI / AI Fund; foundational AI educator/practitioner — high credibility)`  ·  topic_tags_light: `[agentic_workflows, iterative_agent_loops, reflection_tool_use_planning_multiagent, agentic_reasoning, ai_advancement, agent_design_patterns]`  ·  hashtags: `#AI #AIAscent #Sequoia #Startup #Founder #entrepreneur`

## §0.1 — People / authorship / authority context  *(filled from screenshot)*
- primary speaker(s):
  - name: `Andrew Ng` · role_in_source: `speaker` · affiliation_at_publication: `DeepLearning.AI & AI Fund (founder); ex-Google Brain, ex-Baidu, Coursera cofounder` · speaker_type: `researcher / educator / investor (foundational AI authority)` · authority_context: `**HIGH build relevance: the canonical talk on AI AGENTIC WORKFLOWS** — what's next for agentic workflows and their potential to **significantly propel AI advancements, perhaps surpassing the impact of the next generation of foundational models.** Widely-cited source of the **agentic design patterns (reflection, tool use, planning, multi-agent collaboration)** framing. Very high credibility, foundational educator lens` · identity_confidence: `high_from_screenshot`
- publisher / channel: `Sequoia Capital`  ·  interviewer / moderator / host: `—` (AI Ascent talk)  ·  event_context: `Sequoia AI Ascent 2024`  ·  perspective / conflict notes: `Andrew Ng — broadly respected, less commercial-conflict than vendor founders. **VERY HIGH OMNI relevance: agentic workflow design patterns (reflection / tool use / planning / multi-agent) are near-direct inputs to §B AI axis, CNS orchestration, and Build OS agent lanes. Likely a flagged verbatim-reread cluster (pairs conceptually with LangChain 059/062).** Influential/often-cited (408K views). Older (2024-03) but foundational. Capture; route via gates.`

> Authority is descriptive, not worship (`GRD-039`): Andrew Ng = very high credibility on agentic workflows; even so, design-pattern claims route through evidence → interpretation → gated promotion (adapt patterns to OMNI's governed substrate, don't import wholesale).

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot (in chat) · [ ] gut note → §3 Review 002 (optional) · [x] Knox read → §3 Review 001
**Normalizer (Opus) confirms:** [x] id+filename confirmed (slug set) · [x] §0 + §0.1 metadata from screenshot · [x] takes labeled (Knox = `captured_interpretation_nonbinding`) · [x] **content-verified** (§1 = Andrew Ng transcript; §3 = matching agentic-patterns read) · [x] EVRUN needed? (yes — full_semantic; **verbatim-reread**: §B/CNS/Build OS agentic design patterns) · [ ] linked once analyzed

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️




Search in video
0:03
all of you uh know Andreu in as a famous
0:06
uh computer science professor at
0:08
Stanford was really early on in the
0:10
development of neural networks with gpus
0:13
of course a creator of corsera and
0:15
popular courses like
0:17
deeplearning.ai also the founder and
0:19
Creator uh and early lead of Google
0:22
brain uh but one thing I've always
0:24
wanted to ask you before I hand it over
0:26
Andrew while you're on stage uh is a
0:30
question I think would be relevant to
0:31
the whole audience 10 years ago on
0:35
problem set number two of cs229 you gave
0:38
me a
0:39
b and I was wondering I looked it over I
0:42
was wondering what you saw that I did
0:44
incorrectly so anyway Andrew thank you
0:47
Hansen um looking forward to sharing
0:49
with all of you what I'm seeing with AI
0:51
agents which I think is the exciting
0:53
Trend that I think everyone building in
0:56
AI should pay attention to and then also
0:57
excited about all all the other uh on
1:00
Sak presentations so hey agents you know
1:03
today the way most of us use Lish models
1:05
is like this with a non- agentic
1:07
workflow where you type a prompt and
1:10
generates an answer and that's a bit
1:12
like if you ask a person to write an
1:14
essay on a topic and I say please sit
1:16
down to the keyboard and just type the
1:18
essay from start to finish without ever
1:21
using backspace um and despite how hard
1:24
thises is L's do it remarkably well in
1:27
contrast with an agentic workflow this
1:30
is what it may look like have an AI have
1:32
an LM say write an essay outline do you
1:35
need to do any web research if so let's
1:37
do that then write the first draft and
1:40
then read your own first draft and think
1:42
about what parts need revision and then
1:45
revise your draft and you go on and on
1:47
and so this workflow is much more
1:49
iterative where you may have the L do
1:52
some thinking um and then revise this
1:55
article and then do some more thinking
1:57
and iterate this through a number of
2:00
times and what not many people
2:02
appreciate is this delivers remarkably
2:05
better results um I've actually been
2:07
really surprised myself working these
2:08
agent workflows how well how well they
2:11
work I's do one case study at my team
2:14
analyzed some data uh using a coding
2:16
Benchmark called the human eval
2:18
Benchmark released by open a few years
2:20
ago um but this says coding problems
2:22
like given the nonent list of integers
2:25
return the sum of all the all elements
2:26
are an even positions and it turns out
2:29
the answer is you code snipper like that
2:31
so today lot of us will use zero shot
2:33
prompting meaning we tell the AI write
2:35
the code and have it run on the first
2:37
spot like who codes like that no human
2:39
codes like that just type out the code
2:40
and run it maybe you do I can't do that
2:43
um so it turns out that if you use GPT
2:46
3.5 uh zero shot prompting it gets it
2:50
48% right uh gp4 way better 607 7% right
2:55
but if you take an agentic workflow and
2:57
wrap it around GPT 3.5 I say it actually
3:01
does better than even
3:03
gbd4 um and if you were to wrap this
3:06
type of workflow around gb4 you know it
3:09
it it also um does very well and you
3:12
notice that gbd 3.5 with an agentic
3:15
workflow actually outperforms
3:18
gp4 um and I think this has and this
3:21
means that this has signant consequences
3:24
fighting how we all approach building
3:26
applications so agents is the ter of
3:29
around a lot there's a lot of consultant
3:31
reports talk about agents the future of
3:33
AI blah blah blah I want to be a bit
3:35
concrete and share of you um the broad
3:38
design patterns I'm seeing in agents
3:40
it's a very messy chaotic space tons of
3:42
research tons of Open Source there's a
3:44
lot going on but I try to categorize um
3:46
bit more concretely what's going on
3:48
agents reflection is a tool that I think
3:51
many of us should just use it just works
3:54
uh to use I think it's more widely
3:56
appreciated but actually works pretty
3:57
well I think of these as pretty robust
3:59
technology when I use them I can you
4:01
know almost always get them to work well
4:04
um planning and multi-agent
4:05
collaboration I think is more emerging
4:08
when I use them sometimes my mind is
4:10
blown for how well they work but at
4:12
least at this moment in time I don't
4:13
feel like I can always get them to work
4:15
Rel Lively so let me walk through these
4:18
four design patterns in the few slides
4:20
and if some of you go back and yourself
4:22
will ask your engineers to use these I
4:24
think you get a productivity boost quite
4:26
quickly so reflection here's an example
4:29
let's say ask a system please write code
4:31
for me for a given task then we have a
4:34
coder agent just an LM that you prompt
4:37
to write code to say you def du task
4:40
write a function like that um an example
4:42
of
4:43
self-reflection would be if you then
4:45
prompt the LM with something like this
4:47
here's code intended for a toas and just
4:50
give it back the exact same code that
4:51
they just generated and then say check
4:53
the code carefully for correctness sound
4:55
efficiency good construction CRI just
4:57
write prompt like that it turns out the
4:59
same l that you prompted to write the
5:01
code may be able to spot problems like
5:03
this bug in line Five May fix it by blah
5:05
blah blah and if you now take his own
5:07
feedback and give it to it and reprompt
5:09
it it may come up with a version two of
5:12
the code that could well work better
5:13
than the first version not guaranteed
5:15
but it works you know often enough for
5:17
this be wor trying for a lot of
5:19
applications um to foreshadow to use if
5:22
you let it run unit test if it fails a
5:25
unit test then he why do you fail the
5:27
unit test have that conversation and be
5:29
able to figure out fail the unit test so
5:31
you should try changing something and
5:32
come up with V3 by the way for those of
5:35
you that want to learn more about these
5:37
Technologies I'm very excited about them
5:38
for each of the four sections I have a
5:40
little recommended reading section at
5:42
the bottom that you know hopefully gives
5:44
more references and again just the
5:46
foreshadow multi-agent systems I've
5:48
described as a single coder agent that
5:51
you prompt to have it you know have this
5:52
conversation with itself um one Natural
5:55
Evolution of this idea is instead of a
5:57
single code agent you can can have two
6:00
agents where one is a coder agent and
6:02
the second is a Critic agent and these
6:05
could be the same base LM model but that
6:08
you prompt in different ways where you
6:10
say one your expert coder right code the
6:12
other one say your expert code review to
6:14
review this code and this Tye of
6:16
workflow is actually pretty easy to
6:18
implement I think it's such a very
6:19
general purpose technology for a lot of
6:21
workflows this would give you a
6:23
significant boost in in the performance
6:25
of LMS um the second design pattern is
6:28
to use many of where already have seen
6:31
you know LM based systems uh uh using
6:33
tools on the left is a screenshot from
6:36
um co-pilot on the right is something
6:39
that I kind of extracted from uh gp4 but
6:42
you know LM today if you ask it what's
6:44
the best coffee maker web search for
6:46
some problems um will generate code and
6:48
run code um and it turns out that there
6:51
are a lot of different tools that many
6:53
different people are using for analysis
6:56
for gathering information for taking
6:58
action for personal productivity
7:00
um it turns out a lot of the early work
7:02
in two use turned out to be in the
7:03
computer vision Community because before
7:06
large language models lm's you know they
7:09
couldn't do anything with images so the
7:10
only option was that the LM generate a
7:13
function called that could manipulate an
7:15
image like generate an image or do
7:17
object detection or whatever so if you
7:18
actually look at literature it's been
7:20
interesting how much of the work um in
7:22
two years seems like it originated from
7:25
Vision because LMS would blind to images
7:27
before you know gp4 and and and lava and
7:31
so on um so that's two use and it
7:34
expands what an LM can do um and then
7:38
planning you know for those of you that
7:40
have not yet played a lot with planning
7:42
algorithms I I feel like a lot of people
7:44
talk about the chat GPT moment where
7:46
you're wow never seen anything like this
7:48
I think if not used planning alums many
7:51
people will have a kind of a AI agent
7:54
wow I couldn't imagine the AI agent
7:56
doing this I've run live demos where
7:59
something failed and the AI agent
8:01
rerouted around the failures I've
8:02
actually had quite a few of those moment
8:04
wow you can't believe my AI system just
8:07
did that autonomously but um one example
8:10
that I adapted from a hugging GPT paper
8:12
you know you say this general image
8:14
where the girls read where a girl is
8:16
reading a book and it posts the same as
8:17
a boy in the image example. jpack and
8:19
please subscribe the new image for your
8:21
voice so give an example like this um
8:23
today we have ai agents who can kind of
8:25
decide first thing I need to do is
8:27
determine the post of the boy
8:29
um then you know find the right model
8:32
maybe on hugging face to extract the
8:34
post then next need to find a post image
8:37
model to synthesize a picture of a of a
8:40
girl of as following the instructions
8:43
then use image to text to and then
8:46
finally use text of speech and today we
8:48
actually have agents that I don't want
8:50
to say they work reliably you know
8:52
they're kind of finicky they don't
8:55
always work but when it works is
8:57
actually pretty amazing but with agentic
8:59
loops sometimes you can recover from
9:00
earlier failures as well so I find
9:03
myself already using research agents for
9:05
some of my work where one of piece of
9:07
research but I don't feel like you know
9:09
Googling myself and spend a long time I
9:11
should send to the research agent come
9:13
back in a few minutes and see what it's
9:14
come up with and and it sometimes works
9:16
sometimes doesn't right but that's
9:17
already a part of my personal
9:20
workflow the final design pattern multi-
9:22
Asian collaboration this is one of those
9:24
funny things but uh um it works much
9:28
better than you might think
9:29
uh uh but on the left is a screenshot
9:33
from a paper called um chat Dev uh which
9:36
is completely open which actually open
9:38
source many of you saw the you know
9:41
flashy social media announcements of
9:43
demo of a Devon uh uh Chad Dev is open
9:46
source it runs on my laptop and what
9:49
Chad Dev doeses is example of a
9:51
multi-agent system where you prompt one
9:54
LM to sometimes act like the CEO of a
9:57
software engine company sometimes Act
9:59
designer sometime a product manager
10:01
sometimes I a tester and this flock of
10:03
agents that you built by prompting an LM
10:05
to tell them you're now Co you're now
10:08
software engineer they collaborate have
10:10
an extended conversation so that if you
10:12
tell it please develop a game develop a
10:15
GOI game they'll actually spend you know
10:18
a few minutes writing code testing it uh
10:21
iterating and then generate a like
10:23
surprisingly complex programs doesn't
10:25
always work I've used it sometimes it
10:27
doesn't work sometimes it's amazing but
10:29
this technology is really um getting
10:32
better and and just one of design
10:34
pattern it turns out that multi-agent
10:36
debate where you have different agents
10:38
you know for example could be have ch
10:40
GPT and Gemini debate each other that
10:42
actually results in better performance
10:45
as well so having multiple simulated air
10:48
agents work together has been a powerful
10:50
design pattern as well um so just to
10:53
summarize I think these are the these
10:55
are the the the uh patterns of seen and
10:58
I think that if we were to um use these
11:01
uh uh patterns you know in our work a
11:04
lot of us can get a prity boost quite
11:06
quickly and I think that um agentic
11:09
reasoning design patterns are going to
11:12
be important uh this is my small slide I
11:15
expect that the set of T AI could do
11:17
will expand dramatically this year uh
11:20
because of agentic workflows and one
11:23
thing that it's actually difficult
11:25
people to get used to is when we prompt
11:27
an LM we want to response right away
11:29
um in fact a decade ago when I was you
11:31
know having discussions around at at at
11:33
Google on um it called a big box search
11:36
we type a long prompt one of the reasons
11:39
you know I failed to push successfully
11:42
for that was because when you do a web
11:43
search you one of responds back in half
11:45
a second right that's just human nature
11:47
we like that instant grab instant
11:49
feedback but for a lot of the agent
11:50
workflows um I think we'll need to learn
11:53
to dedicate the toss and AI agent and
11:56
patiently wait minutes maybe even hours
11:58
uh to for a response but just like I've
12:01
seen a lot of novice managers delegate
12:03
something to someone and then check in 5
12:05
minutes later right and that's not
12:07
productive um I think we need to it be
12:10
difficult we need to do that with some
12:11
of our AI agents as well I saw I heard
12:14
some loss um and then one other
12:17
important Trend fast token generation is
12:18
important because with these agented
12:21
workflows we're iterating over and over
12:23
so the LM is generating tokens for the
12:25
elm to read so be able to generate
12:26
tokens way faster than any human to read
12:29
is fantastic and I think that um
12:31
generating more tokens really quickly
12:33
from even a slightly lower quality LM
12:36
might give good results compared to
12:39
slower tokens from a better LM maybe
12:41
it's a little bit controversial because
12:43
it may let you go around this Loop a lot
12:44
more times kind of like the results I
12:46
showed with gbd3 and an agent
12:48
architecture on the first slide um and
12:51
cand I'm really looking forward to Cloud
12:53
5 and uh CL 4 and gb5 and Gemini 2.0 and
12:56
all these other wonderful models that
12:58
may are building
12:59
and part of me feels like if you're
13:01
looking forward to running your thing on
13:03
gp5 zero shot you know you mayble to get
13:07
closer to that level performance on some
13:09
applications than you might think with
13:11
agenting reasoning um but on an early
13:14
model I think I I I I think this is an
13:17
important Trend uh uh and honestly the
13:21
path to AGI feels like a journey rather
13:24
than a destination but I think this typ
13:26
of agent workflows could help us take a
13:29
small step forward on this very long
13:31
journey thank
13:35
[Applause]
13:38
you

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`
- visible_title: `What's next for AI agentic workflows ft. Andrew Ng of AI Fund`  ·  visible_channel: `Sequoia Capital` (211K subs)
- visible_url: `youtube.com/watch?v=sal78ACtGTc`  ·  visible_published: `Mar 26, 2024`  ·  visible_views: `408,092`  ·  likes: `9.2K`
- visible_description: *"Andrew Ng, founder of DeepLearning.AI and AI Fund, speaks at Sequoia Capital's AI Ascent about what's next for AI agentic workflows and their potential to significantly propel AI advancements—perhaps even surpassing the impact of the forthcoming generation of foundational models."*
- hashtags (visible): `#AI #AIAscent #Sequoia #Startup #Founder #entrepreneur`
- screenshot_ref: `assets/Screen_Shot_2026-06-07_at_1.46.29_AM-d13c3b88…png`

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — captured Knox / ChatGPT take  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `initial relevance scan`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S READ BELOW  (optional — leave empty if none)  ⬇️⬇️⬇️


This is a spine source for agentic workflows.

This is Andrew Ng giving the cleanest early taxonomy of agentic design patterns: reflection, tool use, planning, and multi-agent collaboration. It is less “enterprise control layer” than Serval, less “trace/memory/runtime” than LangChain, and less “RL/evals” than Cursor — but it is probably the simplest foundational source for why agentic workflow > single prompt.

Core takeaway

The big idea is:

The workflow around the model can matter as much as, or more than, the model itself.

Andrew compares normal LLM use to asking a person to write an essay straight through without backspace. Agentic workflows instead let the model outline, research, draft, critique, revise, use tools, test, retry, and collaborate with other model instances. His coding benchmark example is the important “aha”: GPT-3.5 wrapped in an agentic workflow can outperform GPT-4 used zero-shot on the same kind of task.

For OMNI, that is huge:

Do not wait for the perfect model. Build the right workflow harness.

OMNI translation
1. Agentic workflow is not “one AI answer.” It is an operating loop.

OMNI should not be designed around:

patient/staff/provider asks → model answers.

That is too primitive.

The OMNI pattern should be:

event/question → gather context → reason → use tools → critique → verify → revise → route → human/domain approval → commit/no-op.

That applies to:

provider packet preparation,
patient message triage,
clinical-risk classification,
source ingestion,
Build OS code work,
workflow debugging,
evidence routing,
scheduling/commerce/document reconciliation.

Keeper:

OMNI agents should work in loops, not one-shot answers.

2. Reflection is the first cheap win.

Andrew says reflection is robust and underused: have the model critique its own output, identify flaws, and revise.

For OMNI, this should become a basic harness pattern.

Examples:

draft patient reply → self-check for authority overreach / missing escalation / tone / citation;
create provider packet → self-check for missing labs, stale context, unsupported claims;
propose code patch → self-check against domain contract and tests;
summarize evidence → self-check for source authority and promotion state.

But reflection alone is not authority. It improves candidate quality.

Doctrine:

Reflection can improve agent output; it cannot validate clinical truth or bypass review gates.

3. Critic agents are not optional decoration.

Andrew’s coder/critic pattern is directly useful. A critic agent can be the same model prompted differently, but the role separation improves performance.

OMNI should use role-separated agents:

drafter vs critic;
clinical-risk checker vs patient-tone editor;
source extractor vs authority-label verifier;
build patcher vs invariant/test critic;
workflow planner vs feasibility checker;
summarizer vs citation/provenance checker.

This is not “multi-agent for vibes.” It is decomposition of responsibility.

Keeper:

Separate generation from critique.

4. Tool use is where agents become workers.

Andrew frames tool use as the second major design pattern: search, code execution, image tools, function calls, analysis tools, and actions.

OMNI translation:

A model with no tools is a talker.
A governed agent with tools is a worker.

But OMNI tools must be permissioned:

retrieve context,
inspect documents,
call scheduling availability,
draft message,
check entitlement,
open provider task,
propose note,
run tests,
query source registry.

Not:

silently update clinical truth,
send high-risk medical advice,
change billing state,
approve consent,
prescribe,
delete or overwrite source evidence.

Doctrine:

Tool use gives agents capability; policy gives capability legitimacy.

5. Planning is powerful but currently unreliable.

Andrew is honest: planning can produce “wow” moments, but it is finicky and not always reliable.

This is exactly OMNI’s stance.

Use planning for:

proposing work plans,
decomposing build tasks,
sequencing evidence review,
preparing workflows,
exploring alternatives.

Do not use planning alone for:

autonomous clinical care,
irreversible commits,
unreviewed patient actions,
policy changes,
billing/consent changes.

Keeper:

Planning produces candidates, not authority.

6. Multi-agent collaboration is real, but can become theater.

Andrew’s ChatDev / multi-agent discussion is valuable: agents playing roles like CEO, engineer, tester, designer can produce surprisingly complex outputs. But he also says it does not always work.

For OMNI, the lesson is not “spin up a swarm.”

The lesson is:

Use multiple agents only when the roles map to real checks, responsibilities, or expertise.

Good OMNI multi-agent patterns:

clinical evidence agent + safety critic + provider-facing packet drafter;
Build OS patch agent + test runner + architecture invariant critic;
source ingestion extractor + promotion gate reviewer;
scheduling resolver + commerce resolver + documentation resolver.

Bad pattern:

fake boardroom of agents debating endlessly with no tool access, no tests, no human review, no commit boundary.
7. Agentic work requires patience and async surfaces.

Andrew says people are used to instant responses, but agentic workflows may need minutes or hours. He compares it to novice managers checking in too quickly after delegating work.

This links directly to Warp and LangChain:

OMNI needs:

async agent runs,
progress state,
agent inbox,
checkpoints,
trace view,
“needs human input” states,
stop/cancel/takeover,
final review.

Keeper:

The user of OMNI is increasingly an agent manager, not just a software user.

8. Fast tokens matter because loops matter.

Andrew’s point about fast token generation is important: if an agent loops many times, a slightly weaker but much faster model may outperform a stronger slower one in some workflows.

This supports model routing and inference-budget doctrine:

fast cheap model for reflection loops;
stronger model for final synthesis or high-risk reasoning;
deterministic validator for policy;
human review for authority.

Keeper:

Model quality is not absolute; it is workflow-relative.

Where it lands

Thesis §B — AI substrate: massive. This is a foundational taxonomy for agentic workflow patterns.

Build OS: massive. Reflection, critic agents, tool use, tests, async delegation, multi-agent roles.

CNS / orchestration: major. Event-driven agent runs should use iterative loops, tools, verification, and role-specific critique.

Thesis §C: major. Tool use and agent collaboration require permissioned capability exchange.

Knowledge Reservoirs: medium-to-major. Source ingestion and evidence routing should use extractor/critic/reviewer loops.

Clinical safety: major as a caution. Agentic loops improve output but do not equal clinical authority.

Doctrine / primitive pressure

Potential concepts:

agentic_workflow
reflection_loop
critic_agent
tool_using_agent
planning_agent
multi_agent_collaboration
agent_loop_iteration
draft_critique_revise
unit_test_feedback_loop
agent_manager_surface
async_agent_run
workflow_relative_model_choice
fast_token_loop
agentic_candidate_quality
role_separated_agent

Keeper doctrine:

OMNI should improve intelligence through workflow design — reflection, tools, critique, planning, tests, and human review — not by relying on one-shot model answers.

Second keeper:

Agentic workflows can make weaker models behave stronger, but no agentic loop converts an output into authorized domain truth without gates.

What not to import blindly

Do not assume multi-agent collaboration is automatically better.

Do not let agents debate without evidence, tools, or evaluators.

Do not treat reflection as proof.

Do not let planning become autonomous action.

Do not use fast/cheap models for high-consequence reasoning just because iteration is cheaper.

Do not overbuild elaborate agent swarms before the first wedge workflow is real.

Do-not-miss lesson

The jump from chatbot to agent is not magic. It is iteration, tools, critique, planning, and patience.

OMNI-specific:

OMNI’s agents should not be judged by how smart their first answer sounds. They should be judged by whether their workflow can gather context, use tools, critique itself, verify, escalate, and produce a reviewable candidate.

Priority / confidence

Priority: 5/5
Confidence: 5/5
Suggested analysis depth: full_semantic

This should absolutely feed §B / Build OS / CNS. It is the cleanest foundational source for the design-pattern layer underneath the other agent videos.
&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(I fill later — derived work lives in EVRUN; leave `TK`)*
- EVRUN(s): `TK` · inventory: `TK` · routing_addendum: `TK` · impact §B/§C/security/Build-OS/contract: `TK` · promotion: `TK`

## §5 — Change log
- `2026-06-07` — source file created + metadata/authorship (§0/§0.1/§2) normalized from screenshot by Opus. **Awaiting transcript + Knox paste.** Flagged likely **verbatim-reread cluster** (agentic design patterns; pairs with LangChain 059/062); §B/CNS/Build OS.

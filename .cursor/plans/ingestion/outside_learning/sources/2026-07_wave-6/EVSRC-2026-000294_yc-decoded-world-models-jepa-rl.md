# EVSRC-2026-000294 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000294_yc-decoded-world-models-jepa-rl.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000294`  ·  filename: `EVSRC-2026-000294_yc-decoded-world-models-jepa-rl.md` (firm-slug SUGGESTION: `EVSRC-2026-000294_yc-decoded-world-models-jepa-sample-efficient-rl.md` — NOT renamed per run hard-rule)
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=qz4GQ0zUFRw`  ·  source_title: `World Models, JEPA And The Path To Sample-Efficient RL`
- channel_or_org: `Y Combinator` (series: `Decoded`)  ·  speaker: `Ankit and François (surnames not established from source)`  ·  published_at: `2026-07-17`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot` (full timestamped transcript pasted into §1 → anchors carry real transcript timestamps)
- content_type: `long-form technical explainer / reinforcement-learning + world-model tutorial / research + startup commentary`  ·  source_reliability_context: `practitioner (technically sophisticated secondary discussion drawing on control theory, RL, JEPA, Dreamer, robotics, autonomous driving, neuroscience) — useful for conceptual architecture + mechanism pressure; NOT a primary research paper or settled account of human cognition, AGI, robotics readiness, or comparative model performance (`inferred`; no screenshot supplied)`  ·  topic_tags_light: `[world_models, sample_efficiency, intelligence_per_sample, intelligence_per_watt, model_predictive_control, reinforcement_learning, model_free_RL, model_based_RL, policy, value_function, transition_model, action_conditioning, world_action_model, test_time_planning, Monte_Carlo_tree_search, action_space_explosion, latent_state, video_diffusion, synthetic_rollouts, Dreamer, JEPA, robotics, autonomous_driving, cross_embodiment, teleoperation_data, sensory_feedback, online_adaptation, Agent_Runtime, Reactor, digital_twin, physical_automation, Care_Operating_Model, Platform_Loop]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Ankit` (surname not established from source) · role_in_source: `speaker / technical explainer` · affiliation_at_publication: `not established (Y Combinator "Decoded" segment)` · speaker_type: `researcher/practitioner (RL + world-model technical)` · authority_context: `strong explanatory authority for world-models-as-action-conditioned-transition-models, action-space/planning-horizon explosion, model-free vs model-based RL, video/latent world models for imagined trajectories, robotics barriers; WEAK for "world models required for AGI", neocortex-as-world-modeler, sleep≈an ML optimization loop, near-term household robotics, or one-architecture-succeeds-transformers` · identity_confidence: `inferred` (no screenshot; from Knox Review 001 metadata)
  - name: `François` (surname not established from source) · role_in_source: `speaker / technical explainer` · affiliation_at_publication: `not established` · speaker_type: `researcher/practitioner` · authority_context: `same explanatory/speculative split as above; jointly presents the RL/world-model/robotics material` · identity_confidence: `inferred`
- publisher / channel: `Y Combinator (series: Decoded)`  ·  interviewer / moderator / host: `n/a (two-speaker dialogue)`
- event_context: `first Y Combinator source in the corpus; long-form technical dialogue on sample efficiency, world models, JEPA, and the path to sample-efficient RL`  ·  perspective / conflict notes: `publisher incentive rewards identifying investable technical frontiers (robotics infra, data collection, world-model training, new embodiments) — treat AGI/neuroscience/robotics-readiness claims as `research hypothesis | informed speculation | future-watch`, not doctrine (Knox §2). Operator (Nick, Review 002) note: "first y combinator source and i think i like it" — engagement signal, not a promotion instruction.`

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
One of the biggest open problems in AI right now is how to solve sample efficiency. That is, how do you get models to quickly learn new tasks or
0:06
skills from relatively small amounts of training data? Humans do this incredibly well. We can learn new games, concepts,
0:11
and skills, often after just a handful of tries. Our best models, on the other hand, often need tens of thousands of
0:17
data points just to learn. So, today we're going to discuss what many top researchers believe is the most promising path to closing that gap.
0:23
World models. We're going to discuss the motivation and math behind world models, current applications, and why this
0:29
approach might be the key to unlocking AGI.
0:39
You and I have talked a lot about the various ways people are training models and the sample efficiency of them. Why
0:44
don't we start by just defining sample efficiency and how we intuitively think about it as humans? Yeah. So I think from my perspective the
0:52
two major problems that we have left to solve is intelligence per watt and intelligence per sample. Um, intelligence per watt is like how how
0:58
many valve perplexity points we get per watt of spend. And then intelligence per
1:04
sample is basically if I have one additional sample in my data set, how much more intelligent am I getting? And so if I imagine I have a new tasks like
1:11
RGI for example, I think like really Frantole has been on the forefront of this thinking uh and talking about
1:17
intelligence as a rate of skill acquisition versus skill acquisition and
1:22
that's very different. And so how fast do we get uh smarter with more and more
1:28
samples? And these things are incredibly poor at at at getting smarter with with fewer and fewer samples.
1:33
And for context, you know, the the RKGI test sets are a really good example of cases where humans are intuitively very
1:39
good at them. Most humans can intuitively solve those puzzles with some amount of thinking and effort. But
What would perfect efficiency look like?
1:45
our current state-of-the-art AI systems, what people consider frontier intelligence, basically can't do them,
1:51
right? I mean there we come into new problems with such inductive bias from K through 12 like all these math and
1:58
school that we we've had um that you know these models are are kind of getting from the entire compressing the
2:04
entire internet um and and so when we come in we're not coming in tabularasa just like bare bones but even so that
2:11
they have you know I don't know what percent of the internet you've read I've read very little percent of the internet but despite that and having read the
2:17
entire internet it still can't really do well on and and uh generalizing to these new tasks.
2:23
So now let's think about this in like the extreme cases. In the extreme case where let's say we were perfectly sample
2:29
efficient, you know, we were as sample efficient as possible. What would that mean in terms of a a model that is uh taking a set of
2:36
actions in the world? Well, I guess um the perfect sample efficiency would be zero samples and like uh there are
2:43
examples of this and is that sounds absurd to say but it and the the um example the hypothetical I'll give on
2:50
this is uh imagine I had a perfect world model then I should never go to the
2:56
environment to go and collect samples to train on and well that can't possibly happen like no it actually can happen we
3:02
do it all the time it's called Newton's second law of motion it's like Newton mechanics like we basically know how to
3:07
like get an object from point A to point B with a rocket um quite easily just by following like Newton's laws of motion.
3:14
Yeah. Like when when NASA plans to intercept an asteroid and is planning it, you know, years in advance and can
3:21
set it off in a trajectory where it just glides to the right thing and intersects to the right point. That is an example of a perfect world model we've built
3:28
where we're then just letting that world model act. And it that that system does not need to intelligently collect new samples from
3:34
the environment to decide which direction to go next. It can already it's already been pre-programmed and can perfectly do it.
3:39
Yeah. Can you imagine if like we needed to collect 1 million training examples of like us shooting spaceships to the
3:45
moon to like know how to do it because like complet it would be we definitely wouldn't have the Apollo missions,
3:51
right? Um but we do have that that ability because the the real world is differentiable and we can do something
3:57
called model predictive control that we're going to talk about in a little bit. Um, but even in our own brain, I was just uh uh, you know, thinking about
4:04
this on the drive up, but like there's so many ways that like I can basically think about the things that you are
4:10
going to say or what a VC is going to say when I'm when I was pitching them or what customer might say. Uh, and even
4:16
product being having taste. What is taste is like predicting that other people are going to like this thing. And so we've built this world model over
4:23
years of entrepreneurship, 10 years of like getting it wrong, right? um that
4:28
maybe Bill Gates, uh Steve Jobs and Jensen have 50 years of of you know
4:35
world modeling experience to know what people want. And uh and and basically this is actually proven in the 1967 uh
4:41
COGSAI study uh by Richardson that basically showed that if you take a
4:46
cohort of of three different pe three groups of people and you uh have one go
4:52
practice layups in basketball and they go and they shoot they they improve for one hour they improve by like I think it
4:58
was like 24% or something like that. And then if you take the other one and they just blindfold them and they imagine
5:05
laying up a basketball, they improve it 23%. Interesting. And against the control. I mean, that's insane. It means that we
World models in the human brain
5:11
have this crazy good world model. And there's the this uh neuroscientist at Stanford named Shaw Duckman who
5:17
basically is of the view that the entire point of the growing neoortex for the during the great cortical expansion 10
5:24
million years ago was to get better and better and better and better at world modeling and having just like my little
5:29
VA which we'll define of doing the ne predicting the next action is not as good as having a world model to lean on
5:35
either for training for training purposes or for test time adaptation. Yeah. What it fundamentally comes down
5:41
to is, you know, we as humans, we think about our intuitive ability to think as coming from some implicit world model we
5:48
have in our heads encoded by genetics and our ability to learn and whatever else. It seems like models can do surprisingly
5:55
intelligent things despite not having an explicit world model when it comes to
6:00
natural language. when they're just talking, it seems like, you know, maybe under the hood, deep inside the weight somewhere, there's some kind of implicit
6:06
understanding of the world, but there isn't an explicit representation of that. But then it seems like in certain domains, especially in robotics and
6:13
self-driving, as we'll talk about, that sort of breaks down. And um you know maybe it would be helpful now to just
6:18
think a little bit about and and just sort of define some of the pieces of what makes it challenging in these
6:24
different domains and then we can use that to kind of build up to why it's particularly hard in things like
6:30
self-driving and robotics to get these types of predictive models to work. Yeah, let's do it. So let's actually like take a step back and just talk
6:36
about like control reinforcement learning and define some define some common terms. So typically in um we
6:43
teach a a course called decision-making under uncertainty uh which is like the main reinforcement learning course uh at
6:49
Stanford. I like to show like a specific example of let's say I have some drone
6:54
and this is my poor little drone here and it has some mass m and we know that
7:01
that gravity g is pulling down on it and it's currently at position uh t with
7:06
velocity t which we will collectively call the state and to be really clear
7:12
this is going to be uh p uh x py pz Z.
7:18
Yep. TT and Vx V Y Z VZ.
7:24
It's like the sixth dimensional state vector. Yep. And we have uh some thrust vector U that
7:33
we control and we're trying to get to some point P star and V star which is V
7:39
star is typically zero. Right? So you have some platform that I want this thing this drone to land on. Yep. So this is just a control problem, right?
7:46
And so uh let's say this is like and we'll go through optical
7:51
optimal optimal yeah optimal control. So how would I actually solve this? So the first thing I need to
7:57
know is my transition function. And so this is my state transition function
8:03
which is st plus one given the previous given st and my action which which I
8:08
control is UT. And so this is my state transition or dynamics function or a
8:14
world model. This is a world model. This is like a very fundamental for for context. You know, this this equivalent to transition function you would think
8:20
about in RL in general. Exactly. And so uh and then what I'm trying to learn is something called a policy which
8:27
is like what UT should I uh uh emit
8:33
given some ST? Yep. And so this is the ultimate question. What should I do? What's what action should I take given
8:40
some state ST? And so uh the way that we'll we'll solve this and luckily we
8:46
have a world model that is perfect and it's called Newtonian physics. Newtonian physics. This is like Newton's second law of motion which is F= MA. And
8:55
so we know that the position PT + 1 is going to equal PT + uh deltat T VT plus
9:04
12 delta T ^ 2. So, everyone's taken high school uh uh high school physics.
9:11
Yep. And the same thing for the velocity blah blah blah delta da.
9:16
And then my acceleration is a sum of sum of the for sum of the forces uh which is
Control theory & the drone example
9:21
going to be my uh utide by the mass and g. And so that's it. And now I have my
9:29
transition function. Now how do I get to a policy? And I'm going to apply something called model predictive
9:34
control or real-time model predictive control which is like the way that SpaceX lands the rocket on uh on some
9:41
platform in the ocean. And what you're going to do is you're going to set up your loss function. You're going to minimize
9:47
sum over all t. You have u t to infinity. And I'm going to minimize my P star
9:55
minus PT plus V star minus VT.
10:03
And usually you add this little lambda UT which is like how much energy you're
10:10
exerting. Y and you can't have infinite thrust. So
10:16
you typically will have to say UT u max thrust. Yeah. that can be achieved. And so this
10:24
is easily solvable with convex optimization. And so this is convex. This is convex. This is convex. The sum
10:30
of convex functions is convex. This is a convex constraint. And so I DCP
10:35
discipline convex programming means I can put this into CVX pie. And it will just give me out my policy which will be
10:43
the solution will be the optimal UT plus one all the way to infinity.
10:50
So we can solve this in closed form basically like you know we can because we have this world model of Newtonian
10:56
physics we can say at every step exactly how this drone should fly so that it lands on the appropriate thing under a
11:02
set of constraints like max thrust available gravity. You'll run your log barrier or interior point whatever to
11:08
some solver on this and and it will give me uh my optimal and this will be literally the optimal path that this
11:14
thing can take to get to this state and that will minimize and then and I can I can do increase this if I if I want it
11:22
to do the least energy path or if and I make that zero if I want it to be the fastest and so those that's typically the way
11:28
that you would do uh what I we'll call like deterministic
11:34
uh um uh differentiable control right
11:39
and why differentiable because I can take the I can form the lrangian by by taking this minus this constraint and uh
11:47
and take the gradient of it and I can do robins you use the fact that it's differentiable to to do the the
11:53
optimization exactly if this is if this is non-ifferiable you cannot do convex optimization and you cannot do SGD uh uh
11:59
even if it's non-convex you could still solve and get and get a pretty good solution uh as we do in deep learning.
12:05
But I I you if it's non-ifferiable, you kind of can't. There's nothing you can do. So yeah, let's have an example then of
12:10
how you could make this non-ifferiable. Like what's a what's a scenario? I guess even like this drone scenario where it now becomes non-ifferiable.
12:16
Yeah. So I'll put this adversary named Ankit. Okay. And and your job is to you have another
12:23
drone. Let's say Ankit's drone is to try to hit me. Wow. And stop me from getting there.
12:29
Now from the position of your drone, you don't know what actions I'm going to take, right? And so now let's just call this
12:35
the uh this would be now we're definitely not not deterministic we're stochastic um
12:42
and stochcastic and non-ifferiable and in this case
12:49
my state transition what is st plus one it's going to be my say I'm in now my
12:56
thrust and what ankit's going to do right and these it was all differentiable until
13:03
Yeah. And I can't like back prop through your brain to tell say what you're going to do with your little drone controller,
13:09
right? It's completely uh uh non-ifferiable now. And I I'm resorting and I have to resort to this awful area
13:16
called reinforcement learning, which is just super brutal and it's sprawling and there's so many different
13:21
things and you'll hear things like when you study initial uh um reinforcement
13:27
learning called value iteration or policy iteration. Um, and there's DQN or
13:34
deep Q-learning or just Q-learning. Yep. Um, there's actor critic. There's all
13:39
this bag of stuff. All of this stuff ultimately comes down to ways to estimate to to model this
13:47
non-ifferiable stochastic process. Exactly. Yeah. And so like that's basically the the main thing is is
13:53
you're going to start talking about uh this as a model where I'm gonna introduce this sigh to say that this is
14:00
going to be some model that's going to take in these things and then output this um and that we're going to train it over many many instance in
14:06
instantiations of this and that's so get a better and better world model and then I need to train some policy at ST and
14:15
then typically you also need a value function and that is the value of um state and to
14:21
discern between the value of of different states and like in this case I don't know what a valid state is but
14:27
like let's just say I was doing um uh like SpaceX with with um launching
When physics breaks down
14:32
rockets and landing rockets in Florida. Let's just say that like there's different if I have my launch pad here
14:39
and I have a whole bunch of houses here. Let's just say the path going from here
14:46
to here. I may think that doing this and
14:51
then coming across here and burning all these houses alive, right, may be not high highly value. So I might
14:57
say as an example, they typically call this like some kind of a cone here. And I might say like it's low value to
15:03
be here or and it's very high value to be to be in this cone or something, right? As an example, in a sense a value gives you some
15:10
expectation of future rewards like the sum of future rewards you're getting. And so if you if you're in a bad space,
15:15
you would set the value to zero or negative negative infinity or something. Yeah. So so we can we can we should introduce R RT as well. And so typically
15:22
like if you're uh playing go or chess like winning the game uh you can say winning the game is plus one minus one
15:29
for losing draw is zero. That's what's done in alpha go. In chess we have these heruristics like a a a pawn is is worth
15:36
one point a rook is worth five etc etc. So you can like already have reward is
15:41
is the difference in in in board state. Um and then this yes will be the sum of
15:48
my discount um should just do t
15:53
no of rt uh given and and it's important also to to to use this nomenclature
16:02
um vi and the reason why that's important is because what it what's actually happening here is this is the
16:08
discounted reward following policy pi correct and that means that when I'm in this state I will take this action and then
16:13
I'll end up in this C++1 and then I'll take this action and it's it taking it greedy and so that's the value with
16:20
respect to pi. Yeah. And so ultimately what it comes down to is we are trying to still find a
16:25
new policy pi and along the way we will use machine learning models in various
16:30
capacities. This is standard RL to estimate the value function given the rewards we're receiving. Right. And then
16:37
where world models come in is a way of incorporating all of those into some sort of joint modeling of the state and
16:44
action distribution so that we can make more intelligent policies off of it. Right? And so your standard kind of
16:49
setup for this is what I'm always trying to get to at the end of the day is some joint distribution which would be st
16:56
plus one given uh where I'm at now uh where I'm I'm at now and then this
17:03
factorizes with chain rule simply to my pi my policy a given st
17:11
and my world model and I'll give this this is usually represented with theta and this is my world model which would
17:19
be um st plus one given st and a t.
17:24
Yeah. And so and these are typically learned uh uh separately and like and like you
17:31
can imagine in fact actually you can actually learn this. This is a video generation model and I have the frame ST
17:38
and I predict the next frame ST plus one. Right. And then and we'll get into this. Yeah. For those of us who kind of saw our our diffusion model series often
17:44
people these days use video diffusion for exactly this. Yeah. And then what you can do and this is like the in vogue
Chess, Go & the action space problem
17:50
thing to do since Danar and and uh um the dreamer paper series from V1 to V4
17:57
is do action conditioning later like similar to clip where we will inject this like input head or input tail to
18:05
come into the model to uh influence and and enable the world model to have embodiment. What does that mean? It
18:12
means that not only can I predict like as a plant or tree on the on growing on the the side of the of the building, I
18:18
can like see the world go passing by, but I can I can actually influence it and I can change the the world and I can
18:24
I can learn that with at far fewer samples uh to do this postaction
18:29
conditioning um if I already have a really good uh ST to SC plus world model
18:35
and so here you're saying you know what's also invoked now is jointly training these versus separately
18:40
training Exactly. And so this is called that is called a world action model where the some of the issues here is one
18:48
there's all these training dynamics if these things are dis disparate training on different sets and things like that. Uh the other issue is plainly obvious.
18:55
What I have to do to actually do test time planning is I'll have to sample my
19:01
with model one invoke theta and then pass that sampled action into here and
19:08
then roll it out to ST+1 and it's very expensive and it's very not real time. Two major issues and why like why can't
19:15
we just scale up alpha go to like solve all the problems um is because because of this property. if I have one
19:22
invocation to the model and it gives me both. Here's the action I should take and here's the ST+1 that I'll end up
19:28
much much cheaper and much much faster. Okay, so I think that's a really good segue. I think why don't we now motivate
19:33
everything we just described through a series of increasingly complex
19:39
environments. So I'll contend that I think the right set of environments for us to consider is chess followed by go
19:46
followed by self-driving followed by robotics. Um, all right. So, let's go through a couple examples of problems
19:51
that we want to apply uh reinforcement learning to. So, chess is is a pretty easy one. There's an 8 by8 grid.
19:58
Yep. Um, and so, typically when you when you uh approach any uh RL problem, you're
20:03
going to look at uh star. And so, the this the size of the state
20:09
uh uh the number of states I can be in. So, if I have these eight here and these
20:14
eight, so this be 8 16 32. So it' be 32 to the 64.
20:20
Yes. Quite large. Quite large. Then uh my transition function is stochastic and non-
20:27
differentiable because you can you don't know what the other player is going to do. So if I'm at like in uh uh playing
20:32
chess.com at my house, I move and then something happens and it comes back and and then now you moved and the board has
20:39
changed. So I can't really differentiate through what the other player uh is doing. The current my action space is
20:44
actually quite small. Um, even though there's 32 uh uh pieces and all that
20:50
stuff, that there's only eight possible moves in expectation that you can actually that are legit moves. So like
20:55
in any given state, there's only eightish moves you could do. Let's just say in the beginning, I can move all my pawns. I can move my horses.
21:02
So that's 10. Yeah, that's like not that much. So this is extremely small. And then my reward, we
21:08
can use the heristic based approach or we can just say, you know, plus one zero or minus one if I lose, plus one if I
21:14
win. And uh so this is very tractable. You say it's tractable even though there's a really big state space here.
21:21
But why don't we talk about that for just a second? I think this a really important point. I think when you say it's tractable, you're specifically
21:27
referring to the action space being small because it affects the kind of like combinatorial expansion here.
21:32
Should we talk about that for just a second? Yeah. Or maybe we can add go and then kind of contrast the two. Yeah. So why don't we do that because um
21:38
it's because I want to get to the alpho uh uh the way that they solve this. And you're right. So, if I were to do this
21:44
naively and I just took um I'm at SC plus1 and I want to do look aheads. Uh
21:50
what I would do is I would take all of the actions I can take. So there's eight. So I would do action one, action
21:56
two, action eight bop bop and then each one of these I need to expand it for all
22:03
possible states. And so now I need to do cardality s which we just said is this huge freaking number. And so I have to
22:10
do that eight times. And I have to do it again. I have to do it again. So just doing looking forward one move is like
22:17
quite intractable. Although at the same time you know the you everyone starts at the same starting
22:22
position and while it is a really large space you know it there isn't an infinity number
22:28
of potential. There's actually a relatively small number of game boards even four moves
22:34
into the game as opposed to a game where you could start in any permutation for example of initial game state and what a
22:41
few states down. Yeah. So so this is like definitely over uh um done because there's there's it's
22:47
it's much much less than this in practice. Yes. But just naively like looking at you know uh uh what possible game states
22:55
could be uh as a rough math here. But this is roughly the idea. And then each one of these leaves I need to invoke my
23:01
value function right uh which is the value of that state t+1 and so I have to
23:07
do that all many times and we'll get this alpha go but like this ends up being estimating the leaf node uh
23:13
because at the end of the day my policy at ST I want to pick I want the arg max
23:20
yeah of like the value of the the following
23:26
action I guess it would be an a here aactly Yeah, the arg max over a of the
23:31
value of the state of the of the end state s plus n let's say it's like
23:36
that's the the main goal here. Um and so for me to do that I need to roll all this out estimate the value and then
23:44
pick the the best one. And so this this quickly grows um however and we'll see
23:49
this alpha go which is actually has an even bigger state space. Um so I think it's 19 by 19. Um grab my phone. I don't
23:57
think I got the spot right now. So you have this 19 by9 grid. You can in each one it can be black, white or or
24:04
nothing there. So I have three uh so let's do our star again.
Why AlphaGo can't scale
24:10
So the cardality of the state I think is going to be s uh two or three it turnary
24:17
thing here I guess the 19 squar I think it's 361. Yeah something like that 361.
24:23
Um my transition same issue I don't know. Uh my action space is going to be
24:29
361, let's say. So it's a good amount bigger than chess. Much bigger. But it's still not uh enormous.
24:36
Yeah. As we'll see in a second. Yeah. And so basically what they do, they call this Z, which is kind of
24:42
annoying, but let's call it R. And it's the terminal. It's the terminal when they won the game. And they basically,
24:49
you know, you have your trajectory which is um S 0 A Z R0
24:58
um then then all the way to the end of the game. Yep. S N A N Rn. And if you won then all of
25:08
these uh all the moves that black if black won all the moves that black did get plus. All the moves that white did
25:14
were minus one. and they just that's how they create their um their rollouts. Roll out refers to a taking n steps of
25:24
play of all players one after another. Yeah. Of moves under a specific policy at the
25:30
at the particular instantiation of it, right? So let's just let's probably under this policy p theta t
25:38
and we're going to overload T, but like this is that instantiation. We froze that model. We froze that model and we
25:44
play I think it's like 70 games and we like treat all of those and we we're going to subsample a bunch of um of
25:50
these uh state action results state action results to train our to update our policy in our our um in our world
25:58
model our transition model and what it's actually doing is we we take in an ST we give it to some theta and it wants to
26:05
output um the probability of ST+1 being played.
26:12
uh which is our transition function and uh the uh value of the current state
26:19
and how do we get the value and so the value of the current state uh well both of them are coming out of out
26:26
of the model but basically the loss function L
26:31
theta is going to equal and it's going to be eily close to this uh control
26:36
problem one is we have some v theta minus this Z, which we'll just call it R
26:42
here, um, squared, and then plus, uh, actually,
26:48
sorry, it's minus this pi, which I'll explain in a second, log P theta,
26:55
and I think they everyone includes this, but they include it in the paper, so I'll include it
27:00
there as well, which is the um weight decay. Yep. And so um so this is basically what uh
27:07
our loss function is. Then we'll play a bunch of these games. Let's try to be a little bit organized here. And uh and so
27:15
this is our setup. This our architecture. And now the most once we train this thing, we do an insane
27:22
insanely expensive task of uh of test time planning. And so this trend in RL
27:30
is just called test time planning. And the and the specific algorithm they use here for this is Monte Carlo
27:36
research MCTS. And so this is one of the possible things that you could do. Uh it ends up
27:42
working extremely well I if you have small action spaces. Yeah. So let's let's just like very intuitively talk about what MCTS does
27:48
and a lot of people have heard about Monte Carlo research because AlphaGo was such a you know big moment but how
27:54
exactly does that map into our star in value function and policy? Yep. So I'll take this ST. This will
Monte Carlo tree search explained
28:00
give me uh 361 uh uh numbers that sum to one. And so
28:06
I'll have some probability of uh of where these things are going to go for the of where my my opponent will play.
28:14
Um here. So these are like the sets of actions. Yeah. So I'm here.
28:20
So that I have all my SC plus1's I'll have 361 of these things. Um and then
28:25
to be clear, this is like action one, action two all the way to action 361. Exactly. Yeah. And the um we have to
28:35
estimate the value of each one of these. And so then we have to invoke the model all 361 times to give me values for each
28:41
one of these things. And then I will select I'll select it based on the the UCB the upper confidence bound which is
28:49
this equation that is roughly something like um balancing
28:56
uh my value function of ST+1
29:02
which they're going to in the literature it would be called a Q value because it's actually the difference between a
29:08
value function and a Q value is just that I have the action as well. Yep. So it's be st then a t. Um so we'll just
29:16
call that q value which is my um exploitation term and then my
29:21
exploration term will be something like uh it's this funky square root of n. Uh
29:32
so it's the arg max of a of my q and then I have this which is the
29:38
probability of this this move being played which we have from here of of s
29:43
let's just call it st plus one and then I have this term which
29:48
is this sum over uh n s b / n sa
29:57
and yeah what's what's the intuition we got on this term So these ends is is the the
30:03
visit count during my MCTS process. So this whole tree I'm going to
30:10
So this tree can get really big, right? It's 361 per thing. So you can't depth of 30. So you can't visit every single leak
30:17
though. Exactly. And so you want to keep track of which uh which state did you end up
30:23
in and what action did you take when you were in that state and you want to make sure that you you have good exploration,
30:29
right? And so the way you keep track, the way you ensure that you have good exploration is you want to not just be
30:36
greedy and always pick the highest value one because that could be local very myopic. And so what you'll do is during
30:43
this MCTS process, you'll start this dictionary which will be all zeros of
30:49
the visit count of being in this state and taking this action. Yep. And then once you go through your first
30:54
roll out, you'll do you'll go here. You'll all these things will be to zero. you'll have some probability. We're
31:00
going to bias it towards the higher probability uh of places to go and then
31:06
we'll go we'll expand those trees and then we will um update the counts that we visited this and that will basically
31:13
reduce the amount of uh uh probability that we're going to select it again because this this will reduce my my
31:20
exploration term and if it's highly valued then we're going to increase the Q on this because this is the expected
31:26
value of going down this this this path. So the gist of it is fundamentally like
31:31
you want to take the optimalish path but have enough exploration in this really
31:37
expensive uh step you're doing here so that you
31:43
are making sure you're getting a decent chunk of the other potential leaf nodes you could traverse to right
31:49
in these 30 step rollouts. And so I'm going to do this this MCTS simulation
31:54
800 times here. And then for all 800 I have to go through this whole process and I have to
32:00
invoke the model like at least 30 times to get through all here. And so that's you know 27,000
32:08
800* 30 yeah invocations uh 24,000 uh invocations of the model to to develop
32:14
this tree. And then once I have that's per step per step just to do one action into the game. A lot of people don't understand
32:20
that this is like you don't like store this MCTS tree. You like you throw it away after uh uh you you make the move.
32:27
Um but once it's very expensive to develop this MCTS tree and once you have it the probabilities of traversal are
32:35
actually should be useful for training and then you end up biasing it and you train it with the MCTS tree which is
32:42
like a little bit seems like circular motion or something like that like uh but you end up treating that as as the
32:49
pi that you'll train in your loss function. Okay. Um so we have the r of did we win or
32:54
lose. we have the the pi of of what was the end result of this whole expensive
33:00
process. Um and then at test time we are going to do these 24,000 steps every
33:05
single um uh every single move to pick the argmax uh that gives that that
33:13
satisfies both exploration exploration and exploitation. In this case, you know, this still feels
33:20
somewhat tractable though because the action space is small enough where this like kind of works. But now like let's
33:26
say hypothetically maybe we can draw like an an imaginary go game of go where it's like
33:33
you know let's let's say this game of go was like a thousand by a thousand. And so now you have a equals uh you know
33:41
more or less uh a million. And now this this tree uh we're drawing
33:49
here that has to take here this has cardal or like you know width I guess 1 million
33:56
right and there's like s0 through s1 million and the number of uh you know steps you
Self-Driving: state space is infinite
34:03
would have to take here presumably have to be way more than 800 in order to get any reasonable
34:09
uh kind of sampling of this and so you're probably multiplying the test
34:14
time cost of doing a roll out or of doing a a next step prediction
34:19
astronomically if the game was even let's say you know this is only 100x bigger than the current game or not even
34:25
50x bigger than the current game. Everyone was very excited about Alph Go and at the time in what was this 2017 uh
34:32
2016 uh everyone's very excited about this and the important thing to pick up
34:37
is that we did 800 uh MCTS simulations
34:43
and to cover 361 possible actions on average. So that gives us about two samples roughly on an expectation for
34:50
every single action. So here you need like two million of them for a similar depth to for for a similar depth. And then
34:56
that's still to do a depth of 30, I would still have to do this times 30. So that be 60 million uh invocations of the
35:02
model. So that better be a small model, right? That's a lot. Um so yeah, so that's to do a single action to be
35:07
clear. Yeah. So exactly to do one action. So just imagine uh so why alpho uh doesn't
35:15
scale. Yeah. To me, there's one uh the cardality of
35:23
the action space must be extremely small. If it's big, sad. Yeah.
35:28
Uh two, the um I need a perfect uh deterministic environment, right? Like
35:35
this this this doesn't change. The rules of this game don't change, but like the rules to the stock market change all the
35:40
time. The rules to like venture change all the time. Like the real world changes quite often. So, uh like uh
35:47
homoscadastistic Uh, and real time if you saw the the
35:56
movie the documentary is which is s such an amazing documentary. I'd highly recommend it to anyone that watches it.
36:02
Um, the guy is s sitting there for like 60 seconds maybe five minutes waiting for the computer to like decide and and
36:08
it's kind of like imagine we were driving a car and like you took like 60 seconds to like turn the steering wheel. Everyone's
36:14
dead. Like the whole car is dead. And so like you know uh now let's talk about uh
36:20
robotics and self-driving car um and why this why that approach kind of can't scale.
36:26
Yeah, I think it's a really good contrast here because intuitively uh I think in thinking through this
36:32
exact star layout, it actually really changed how I think about the kind of problem space of both of
36:38
these two. So like let's take self-driving car Mhm. as an example. This is one, you know, many people have started to experience
36:44
for the first time because we have some self-driving cars that actually work. You have Whimo and Tesla FSD and whatnot that seem like they kind of work. So,
36:49
like let's maybe apply your same star framing here. Um, I would contend that the state space
36:56
of self-driving car is enormous and it's actually not intuitive to me whether
37:02
it's more or less large than this one, right? I mean, in a sense, the chess in AlphaGo state space is already like more
37:07
than the number of atoms in the universe or something to that effect. But like just to emphasize that here, you know,
37:13
you were considering, you know, surroundings, vehicle state.
37:19
Yep. Uh like, you know, camera like
37:25
weather. Mhm. I guess the point is like road conditions. It's like massive. This is massive.
37:30
For all purpose is infinite. Yeah. For all purpose, it is infinite. Correct. Yeah. Um and and so is the uh
37:38
space of pixels like you know like what can I put in an image? I can take a picture image of anything. Right. True.
37:44
Um and so we're able to handle it and the same thing here where we compress from the board state. We don't represent
37:50
the the board state. We compress it with a comnet. So they have some deep some some some deep comnet that actually
37:57
takes this state and converts it into a latent, right? And that latent compression is sufficient to kind of like do pattern
38:03
matching do do some type of like symmetric symmetric uh uh equivariance kind of things. And same thing with this
38:10
and even better with JPA which we can talk about at the end there which is like basically taking some type of state
38:16
space and doing all of our optimization in the latent space which stable diffusion did uh that worked extremely
38:23
well which reduces our state space dramatically because I'm in some latent highdimensional space. So like the key
38:28
thing there is that yeah despite this state space being effectively infinite
38:33
we've actually gotten really good at compressing this and we'll talk more about some of the tricks for how we actually do this in practice here but
38:39
the TLDDR is you know there's like 10 years of deep learning work that
38:44
basically makes us extremely good at compressing that very fast. Exactly right. Exactly right.
38:49
T seems to have a similar problem as before. Right. In fact maybe even more extreme. there's like infinity other variables around you
38:55
of things going in some ways you'd think that it's this is physics Newton's laws laws of motion should apply if I ste the steering wheel
39:02
like this if I hit the gas I should be able to really easily model this but what is nondiffiable is that I have if
39:09
I'm going into a a circle right is like the most the biggest issue that that we fa we faced in when I was doing
39:16
self-driving car is like you're imposing your will onto maybe driving in India I think is really similar right you're
39:22
imposing your will onto the environment and like people just kind of adapt naturally like if you were doing
39:27
Newton's law of motion you were going to collide and so that the optimal policy if you were being strict Newtonians here
39:33
would be like don't move because anything you do you're going to crash but it's not true like that then we
39:38
wouldn't function like cars wouldn't go down the road um and so you have to model the the envir you have to include other people
39:45
in the environment and uh understand the embodiment of like how your action will
39:50
change other people's actions why's Next batch is now taking applications. Got a
39:55
startup in you? Apply at y combinator.com/apply. It's never too early and filling out the
40:01
app will level up your idea. Okay, back to the video. Now, let's talk about the action space.
40:07
You know, like one way to look at the action space is that it seems relatively small. Seems like, well, you know, you
40:13
turn the steering wheel left to right, you hit the brake, you hit the you hit the gas. Doesn't seem that big, but like
40:18
how big is it actually? like how do we actually represent these action spaces when it comes to a realistic self-driving car scenario?
40:24
Yeah, I I don't know how they how they do this nowadays. Um they they're doing a whole bunch of like bird's eye view
40:29
different things like that. Let's consider even just like a very simplified What do you have? You have a steering wheel that you can turn left, right? You
Model-Free vs. Model-Based RL
40:35
have a a brake pad. Yeah. And you have the gas. Yeah. And so I guess this thing is like 365°.
40:43
Yeah. So it's like a 1 to 365, let's say. Or 0 to 365. Yep. And you, let's just say you break
40:50
this up into 10 different uh uh severities, you're already at even with just this oversimplified model, your action space
40:57
cardality, right, is 365,000. So that's like 100x bigger than alpha. It's in fact
41:04
it's about the size of the example or it's a decent amount smaller than the size we said breaks.
41:11
And so yeah, so 36,000 action space is very large. And then even worse, unless you're Tesla, we have a bunch of video
41:18
of people driving cars. We don't have video of like dash cams like that. Like you actually don't have, again, only
41:25
Tesla has this of the action as well. And so the things that you have access to your trajectories are just like ST+1.
41:33
Yes. ST plus2. So there's a you're saying there's a decent number of these that's from like dash cam footage on YouTube or
41:39
something, but not really that many either. Yeah. Relatively. So, if you wanted to do a self-driving car and you didn't want to
41:44
go spend a million dollars, trillion dollars on going collecting all this data, then you want to leverage this data somehow. And this is going to be
41:51
really applicable for uh robotics because we have a lot of uh uh videos of
41:56
people doing things. Yeah. Right. Especially with ecoentric like we we have those videos, but we what we
42:02
don't have is the actions they take. Yeah. Yeah. So this is like
42:10
this is this is a sequence of what you're showing here unless you're Tesla. Unless you're Tesla and Tesla has this. So this is a huge competitive mode of
42:17
like what do people do in that state and then so you can behavior clone to go from here to here from here to here go
42:23
here to here etc. But even then it's still very very difficult. You have to it's it's not sufficient. People think that like okay I have this we have a
42:29
self-driving car right? I mean the amount of work that they're doing at FSD is like incredible and it's it's not
42:34
generally available like you can't you know it's not Whimo level um yet. Would this be a good moment to briefly
42:40
talk about model free versus model based RL? I think that's an important distinction that's going to be relevant
42:46
when you talk about more world models. Yeah. So this is a perfect point. Um, so model free just means that my my policy
42:53
pi uh of a t given st uh I have no world
42:59
model involved. It's literally and it's literally doing what I said. I grab a bunch of these and I train go from s to
43:05
a s to just predict the next day. That's it. And that's and this is logic called DLA. Um, you know, this is like giving us
43:12
pretty good results. It's behavior cloning. It's all the the the the stuff that it's not getting us to Rosie the
43:17
robot just yet. But um in many ways, it's the closest thing that just looks like the next token prediction from LLM that seems to scale
43:25
pretty well with natural language. I mean it's it's not exactly the same thing because there's no action exactly but picking a token is not exactly the
43:30
same thing but it's very analogous to that like basic thing that's I basically take away the tokenizer head and I give it an action space and I
43:37
collect a bunch of teaops data you know like this as as the self-driving car does in Tesla and I just
43:44
take in the the state which is some image and or maybe sequence of images and then I'll output some action and
43:51
that's it cool and this is let's say model
43:56
because I don't have a model for the environment. And then now if I do model based
Why robotics is the hardest case
44:02
RL I have not just some pi but I have also
44:07
my uh sigh as well here and so uh by
44:14
uh by including this I can have a much stronger policy but it would take a lot more time to perform inference because I
44:21
have to do this full test time planning. Just to remind us that SI is referring to this specific transition function,
44:26
right? It's referring to this. You're saying this is specifically referring to um a function of ST + one
44:35
given ST and action T. Yes. So it's like your ability to predict the
44:40
next state you'll be in is is the crux of it. Yep. As opposed to just directly predicting the actions.
44:45
Yeah. And the main thing that I believe is that this is required for AGI. This
44:51
is what the the human brain is is at least in the way the human brain does it. Yeah. And let me go further in saying
44:56
that like if you look at the um billions of years of evolution basically there's
45:02
this thing called 10 million 10 million years ago called the great cortical expansion which you see the size of a
45:08
brain just explode get bigger bigger and bigger exponentially up until us and it
45:13
basically stops. And if the entire point of the neoortex is world modeling, what happened is we started from VAS, this
45:19
would be like ants or whatever and fish. Yeah. Right. Just like very like, you know, lizard brain, whatever you want to
45:26
call it. And then we develop this neoortex to like, you know, go from our our motor cortex to actually simulate
45:32
what's going to happen. And that makes us just so much smarter. And then we once we get those samples we can
45:38
compress it when we sleep or otherwise with this hippocample shortwave ripple whatever you want to call it. And then
45:44
that helps us uh develop a better policy. And that marriage between the two is is not only helps us um train on
45:52
hallucinated uh examples but it also allows us to test time plan. Right. I I guess the the kind of extreme
45:59
case then of self-driving car is kind of general robotics. Yes. Right. So if you're if you're like a
46:05
humanoid company like figure or pi or whatever again same st setup.
46:11
Yep. I I guess the gist of it is that a is now even bigger. Yeah. Right. It is like I guess a very simple
46:17
robot would be Yeah. How would you how would you parameize the action space? Like let's take a very basic one. If I take like my six axis uh arm
46:24
Yeah. as your your standard here that we're actually working on right now in Stanford Robotics Center. Um you have
46:30
two degrees of freedom. Two degrees of freedom. Two degrees of freedom. Uh, and then you have another two for the endector, right? And so
46:36
that's a simple endector, not even like a not even like a literally a one axis like, you know, you can rotate, but you have the the the the
46:43
one axis yi style uh thing. So this is eight. So you have 16 degrees of freedom
46:49
and let's just say that you do the 365 by 10 or whatever, you know, kind of thing. I mean,
46:54
it's like 10 to the 16. It's like insane, something like that. It's an insane number. Um, and so much
47:01
bigger than self-driving car. Um, and even worse, like getting tea ops data is
47:07
extremely painful and expensive. It's not just like, oh, we'll just get some people in the Philippines, we'll give them like some, you know, things or
47:13
whatever. It's like totally totally doesn't work. And nor is there yet something like uh Tesla's fleet where
47:20
there are cars deployed that people are just using and they're not even necessarily realizing that every time they turn the steering wheel they're
47:26
providing this this data set for Tesla to train on. And then even worse you have this like
47:31
what's called cross embodiment gap. And so if I were to like train this policy
47:37
on Tesla Model X and I were to like put it on a Tesla Model 3 it wouldn't work.
47:44
No. like it totally wouldn't work. Like all the so much so much of this uh the the way that if if I were to break on a
47:51
Model 3 versus a Model X, a Model X, it weighs more. It has different dynamics, aerodynamics, and things like that. And
47:57
so what's actually going to happen is very different. Like the degradation you have across c across embodiment is very
48:03
very very strong. And clearly Tesla's figured various ways to get around that. I mean, they they have these that roll out, but actually
48:08
even with Tesla's new FSD today, they don't roll out in all the cars at the same time. probably for more or less that reason. And in this case, it's even
48:15
harder now. I mean, you have bigger differences between embodiment than a Model 3 versus Y. And you have way
World models that actually work
48:21
bigger action spaces. You have to sell some model. Yeah. Uh Lane Macintosh, I played hockey with at Stanford, who now runs Tesla
48:27
FSD. Um I can ask him, but I would bet money that they shard the data per
48:34
model, per uh car type. I just because that's what I would do. There's no way that like, you know, I I
48:40
would trust, you know, data that was collected on a Model X on a Model 3. There would no way I would trust it.
48:46
Okay. So, now that we understand the basic setup here and why the action space problem is so big, why don't we
48:52
talk a little bit about how world models actually fit into this? You know, maybe first, you know, I guess what didn't work about the naive world models and
48:58
how do we fix those and then let's kind of talk about some of the newest world modeling techniques. Cool. So like in robotics in particular,
49:04
it's very hard to get these this kind of trajectories that you want that you kind of need to train for your VAS and people
49:10
spend up you know uh with a whole bunch of teleops data. It's very expensive, very expensive. Ideally what we would do
49:15
is take like data like this from someone who is just like puts a camera on them and just like making sushi. Okay, like I
49:22
want to make a sushi robot. Um how do I do it? Give it to all the sushi chefs. Don't put anything in their hands and
49:28
just have them start cutting up sushi and making sushi. And ideally, we would train it in that way you were describing of like somehow we would train a model
49:34
just on these two and then later add this afterwards. And so the first real person that um you
49:41
know went after this was Jurgen Smid Humor. Please uh so so he doesn't yell at us, we have to we have to make sure
49:47
we cite him. Uh but he has this really cool paper called World Models. uh very
49:52
aptly named and it's basically he took these like um open AI gym classic uh
49:58
games car racing and I think Doom as well and then just like trained a model
50:05
at that time was like an RNN um he had some funky uh uh zero order stuff in there whatever but basically the key
50:12
premise was I can take an environment I can extract a whole bunch of this type
50:18
of data off of it. I think he actually does actually this data but we'll get into dreamer where he does it in this paper in this way and then uh trains a
50:27
policy on only the syn the the synthetic data the imaginated uh rollouts and it
50:35
actually performs well in the environment. This is the first time in my understanding that that actually happened and it actually works really
50:41
well. And then so the key thing there is you can basically use this if you have some predictive model of this in that case
50:47
and eventually of this you can use that as basically a synthetic training set to train your policy model and then
50:53
basically fine-tune it on real data later. Exactly. And which is just like a really powerful idea especially since in
50:58
robotics the limiting step is access to large amounts of state action data. And
51:04
so now the dreamer series. So basically this publish publishes in May of 2018.
51:10
Uh Danar uh Hafner publishes dreamer one I think in November of 2018 and then now
51:17
he's been on this rampage for the last seven years publishing these papers and dreamer v4 I think is the capstone of
51:24
it. Um where he basically does the same thing and he focuses on Minecraft. Um
51:29
and he trains these a world a world model on this type of data and then
51:36
injects action conditioning on a very small amount of data. Yeah. To get to this type of world model that
51:42
can that has the action conditioning as well and then samples a lot from it
51:48
and then trains a policy on those synthetic uh imaginated rollouts. And
51:53
it's the policy is so good that it's the first paper to mine diamonds in Minecraft. I'm not a big Minecraft
51:59
player, but apparently that's extremely difficult. That's like next level difficulty. And it did it all on synthetic data, which is kind of crazy.
52:05
And and the key unlock there, yeah, use synthetic data specifically on a model trained on just this sort of state
52:11
transition type of thing. Yes. And this ends up being very convenient because it turns out we as a society
52:18
have a lot of this. Exactly. Yeah. All of YouTube, right? he does do a very small amount of data from
52:24
to enable the action conditioning and that get that allows you to do this full uh simulated roll out but yeah it's true
52:30
so we have we have YouTube we have like flicker we have all these data sets online of like you know people doing
52:37
things we'd like to use it and no one has really gotten that to work and then now that with this um these like video
52:44
generated generation models we can take that data create a world model out of it
52:49
add action conditioning. Post train it with action conditioning for some new task that is we want it to do. Chopping
52:55
down wood or uh you know um making sushi or folding my bed or whatever it is only
53:00
a few amount of examples and then we can train a policy on this in this neural uh
53:07
simulation. Yeah. And you know we put out a video um about diffusion models very recently in flow matching. I imagine that now ties
53:15
very closely to this. Right. Ultimately the the kind of current state-of-the-art best way to do this on basically
53:20
infinity data that we have available and can keep generating is using state-of-the-art video diffusion/flow
53:26
matching models. Exactly. Yeah. So like if you have your your C dance or your Sora or Exactly.
53:32
All those models like basically the idea is now we have them and they're already trained and they're great. let's do a
53:38
small amount of action conditioning on them to get to this uh this world model
53:44
and then we can sample from it a bunch and then train and this is exactly what wave uh did with Gaia and Gaia I think
53:51
they've raised $1.5 billion to to basically run with this idea for self-driving car um I think a bunch of
53:56
companies um Nvidia uh uh this this paper here uh is basically talking about
54:02
doing exactly the same this dream zero for robotics um and What I thought was
54:08
really cool about this paper is that they yeah they do exactly this process where they have this um joint model of
JEPA & latent space tricks
54:14
um state transitions and actions. They train it by first instantiating it with
54:20
the open- source one video diffusion model and then it only takes them about 500 hours of teleyop data which is
54:26
basically exactly this right to get it to be pretty good. And they have a lot of clever tricks that allowed it to be cross embodiment and work on
54:32
scene tasks with relatively small amounts of data. And and it really is taking basically the exact concept I
54:37
believe from the dreamer paper and applying it specifically to these robot embodiment. Exactly. Um and and it turns out it actually works uh actually better
54:44
than I would have anticipated it working. Yeah. So I think that this is basically the the the path to it was the path I
54:50
believe it was the path to get humans uh uh to be as good as we are genetically over the last 10 20 million years of
54:58
evolution. A bigger world model helps uh for training and for uh test time
55:04
planning. Um and I think it'll be the same thing as true as for robotics.
55:09
What's also cool is there's a bunch of applications of this to things outside of robotics too. I mean there was a weather planning paper for example we
55:14
were reading this Gencast paper which I think applies a relatively similar concept um in terms of how they model
55:22
you know literally the world the world's weather um with something like this. Yeah, we have to talk about the world
55:28
model for the world. Um, yeah, so basically they do this exact same thing
55:33
where you know the key unlocks for this whole thing was getting diffusion to work in very high dimensional state
55:40
spaces like we talked about in the last uh lecture and then learning to to use that to action condition in the way that
55:47
he's done. But they did this for the entire world with this exact same diffusion steps which go from some and
55:53
they go back to uh two time steps lag of of order two AR2 for the set of sitions
56:00
there and they basically predict the next uh state of the world based on those things with this lang diffusion
56:06
rollouts. My my big assertion is that um it was
56:12
necessary for the human brain to develop world modeling. I actually just just saw
56:17
this paper that I wanted to make sure to call out because I thought it was so great uh out of uh University of Washington where they say explicitly in
56:24
the in the abstract each cortical area estimates both latent sensory states and
56:29
actions and the cortex as a whole predicts the consequences of those actions. That
56:35
sounds like a world model to me. Yeah. Right. Um it's actually describing exactly these
56:40
two equations here. Exactly. Right. Where we're estimating both the sensory latent states and actions. I mean, I guess it's really the joint model that
56:46
we showed earlier, right, is what he's describing here. It's exactly this this equation he's showing.
56:52
Yeah. Exactly right. And so, uh, if it works in us, it should work in robotics. Um,
56:58
and I think that that takes us the rest of the distance. Why don't we talk briefly about latent world models, especially the con the
57:03
Jeepa concept, because I think there's been a number of papers that use Jeepa as an element of their, I guess,
57:10
architecture. Why don't we just briefly introduce Japa and how it fits into the current landscape of world modeling? Yeah, in classic RL you'll have like you
57:18
know if you do study Q-learning for example, you basically keep this matrix called the Q matrix. Yep. And it's going
57:24
to be uh s by a and so I have this um s that's states and actions
57:30
a states and actions and each one I need you know some amount of counts of being
57:36
in this state action uh and I take the average value of being of
57:43
taking that action in this state and that's my Q value there and it's a little bit more complicated than that there's bellman equation all this backup
57:49
all this stuff like that but so this scales horribly because as the cardality of my space gets bigger and my action
57:56
space gets bigger stuff I don't have enough and I become less and less sample efficient correct right in case of like
58:02
robots or whatever state is like yeah it's this whole thing we described earlier right it's absolutely massive because it has all of these elements in
58:08
it couldn't really enumerate a huge grid and so the classic trick I mean since I took you know uh CS 229 with Andrew Wong
58:14
in 2012 is you do this stick a neural network on it exactly and you basically are just going
58:20
to compress that state into some lower dimensional state space. This is actually predates deep learning. Uh we
58:26
were doing stuff like this. Um I think my first paper was basically doing something like this. Uh basically
58:32
turning like a grid into like uh a bunch of like pyramids and like and and the
58:38
state was how much I'm in pyramid one or pyramid 2 or whatever. But anyway, the neural networking can just do this. And
58:43
so basically what uh the the key idea in JPA if I have um an image one and I have
58:50
image two and I have image three I can do my my world modeling uh my my
58:58
world modeling of st + one uh given st and a t in pixel space and have this is
Open problems remaining
59:07
uh let's say at time t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t + 1, t+
59:13
etc etc and I have to actually predict now the full uh image that's extremely
59:19
expensive from a computation standpoint and also from like a sample efficiency standpoint. What I can do instead is put
59:24
this through some comnet some encoder some encoder and then I'll get a latent
59:31
for t and I'll have a latent for t+1 and
59:36
I'll have a latent for z t +2 and then I'll have from this from zt I want to
59:45
predict z t+1 hat and my goal is to make this
59:50
and this uh make and my loss function will be something very simple like
1:00:00
I want to minimize this that's it now this doesn't work this collapses hard and so what happens is basically
1:00:06
just if you if you just predict zero done just output zeros which the model
1:00:12
will learn to do and I'm actually incorporating this into my current research right now um and so what you need to do is something called sigg or
1:00:20
uh this is one technique vic rag is another where basically I add this another term that basically says uh I
1:00:28
want the um over a large enough batch size I want the the distribution of z
1:00:36
t + one to follow a gaussian you know it's kind of like a normaliz like a like a batch norm type of
1:00:42
type of trick I mean not in the same if if it's zero it can't be this right cuz then this is non zero and so maybe I
1:00:49
think that there's probably this or something like that but basically This prevents it from modal collapse and it makes it do something good. And this is
1:00:56
the most recent paper for the audience is LE WM LE world model which is super super great. Um, however, to be
1:01:03
completely frank, the this this is self-supervised learning super great. It doesn't work that well.
1:01:10
If you were to not do uh these techniques and there's there's a bunch of other techniques that you can do, uh
1:01:16
it will actually outperform much better and that are let's say for example um if I'm going to do an LLM and you have like
1:01:23
you know Francois uh likes sushi, which is definitely
1:01:29
true. Um, and I tokenize this into bunch of different tokens here.
1:01:36
And this is token ID 6, 19, 28, whatever. And I look up the encoding
1:01:42
into this. And it's going to be uh E1. Yes. E2,
1:01:50
E3, etc. Um what you can actually do is have the LLM output uh what the LLM will take in
1:01:59
take in these things and we'll output um the the next token and so it would be
1:02:07
like let's call it H uh this would be the low jets coming out of it two plus one and what you can do is actually have
1:02:13
this be close to E T+1. Mhm.
1:02:19
And a lot of people are playing with this idea and getting rid of the cross entropy loss entirely.
1:02:25
And so if you were to do this, it actually as a proxy for the cross entropy loss and there is no cross
1:02:31
entropy loss and the the cross entropy head is actually very expensive. And so this is very cheap and like this
1:02:37
literally just grabbing it. So people are playing around with this idea um and as a as a basically as a as a cheaper
1:02:43
proxy for the cross country loss. So there's lots of different ideas on basically uh taking this JPA idea to not
1:02:49
just pixels but to L lns as well. Yeah. Interesting. Yeah. So just to define what JPA is, it's
1:02:56
joint embedding predictive architecture. I I think one of the things I find cool about this JPA idea is it feels like an
1:03:02
idea we see over and over in deep learning. There's a version of this idea that's basically the stable diffusion
1:03:07
idea. Yeah, there's a version idea that in my company training graph convolutional neural networks to um design drugs we
1:03:14
use to do you know latent variable generation for example and it's like it's an idea that comes back over and
1:03:20
over and then has this yeah various tricks that it actually takes to get it to work in practice. Okay, now we have a pretty good sense
1:03:26
for how world models work. We have a pretty good sense for what the state of the art looks like if we trust this paper and it seems like these kind of work on
1:03:32
robots too. This paper is only from the end of end end of last year this year and it seems like they have various
1:03:38
methods that allow you to train on relatively small amounts of data that's tractable and pre-trained on you know
1:03:44
diffusion models. So are we good or does it all work? Yeah, this is 2016
1:03:51
will be the year of the robot. We're going to have Rose the robot in your house, you know. Um
1:03:56
yeah. No. What What are one or two because there's lots of open problems remaining. What are like a few open
1:04:02
problems maybe we can emphasize here that the community can go emphasize working on? Yeah. So um I think the first one is
1:04:10
that uh pins doesn't really work. What is pins? Physics informed neural networks. So pins
1:04:17
uh doesn't really work. This is physics informed neuronet networks. And so basically if like almost all of the
1:04:25
self-driving car data looks like this. The car is driving down the road. And let's just say for example uh I have you
Does this pass the squint test?
1:04:32
know uh a house here and I want to train the model on you not
1:04:40
driving into the house. And so let's say I put I put it into a state right here
1:04:45
to drive into the house. What's going to happen is because almost all the data is
1:04:50
like looks like this driving down the road. This will just turn magically into like a highway and it just like boom. It
1:04:56
just don't worry. It basically needs like a ton of data. not to do that either from simulation
1:05:01
for that to not happen. In fact, I actually don't even know if because of the data distribution, there's no data here. There's almost all
1:05:09
the data here. And like when you're training a neural network, it has a a tendency to collapse if you don't keep the mini mini batch composition uh like
1:05:17
very even over the you know over the class space or whatever you want want to
1:05:22
call it. But like you'd have to train on uh you you have to be very careful about your data mixing to make sure you get
1:05:28
this right to solve this problem that no one really has. But even then the if you take just a simple thing like this, this
1:05:35
is like the the the conic example and I have some sine wave and I want and
1:05:41
I have these as my xop
1:05:48
and I have these as my y. So this is complete interpolation. No.
1:05:54
Uh maybe messed this up, but why like this? No, we can't get to like machine precision.
1:06:01
We can't What is it? I don't know what is it 18 - 16 or whatever it is. We can't we we the SGD will not get to Z
1:06:06
effectively zero. So we'll always have some residual. And for us to be like a really good world model to simulate body
1:06:12
interactions like to to simulate this what's going to happen when I do this and like let's say that I'm trying to be
1:06:18
LeBron James. like there's like I saw this one video of um Steph Curry
1:06:23
dribbling a a basketball on a court and he just felt that there was a dead spot in the court and he because he's so good
1:06:30
and he knows exactly the physics of what's going to happen if I hit this you know the ball with this force like the
1:06:35
ball is going to come back exactly this spot and it just didn't and he knew it wasn't him it was the the court and he
1:06:40
found a dead spot in the court like that's how good the the human brain is at world modeling in my opinion I think
1:06:47
it's an SGD issue I think it's probably an architecture issue. I think Sam Alman just kind of came and just said that he
1:06:53
thinks that there's definitely an architecture that's going to be more performant than the transformer. I think he's right. Um I think the the the
1:07:00
transformer doesn't do compression uh uh in the time domain at all. It just keeps on everything. Um so anyway, so I think
1:07:06
that the getting higher fidelity in the world model is extremely important.
1:07:13
One I think two seems like test time probably is going to be big thing like adaptation. Exactly. test time planning we the how
1:07:20
quickly the human brain can you know in in times of in sports and things like
1:07:26
that when you're playing tennis you're a tennis player like how quickly we can adapt to what a player is doing and
1:07:32
things like that we're not going to sleep and like retraining we're we're very quick to adapt to a new new
1:07:38
environment like the out of distribution prediction is really challenging and like one little data point we can like quickly adapt to that new thing and
1:07:45
change um I think there's been a lot of papers uh uh on like basically estimating that
1:07:51
the the friction coefficients and so like those can change over time if you go to a human environment or not for
1:07:56
example like this this friction might change and that's important in control um and so you need to estimate that very
Outro
1:08:02
quickly and adapt and that these models just kind of don't have a mechanism to do it. Yeah. And then I guess there's
1:08:08
like the practical speed elements of these, right? A lot of these are doing some sort of expensive
1:08:14
planning step and we're doing some sort of like uh we're we're kind of hacking around it
1:08:20
with this pre-training process and synthetic data, but even so like to really get maximum performance right
1:08:25
now, you'd want to do something that's closer to like the AlphaGo style roll out and it's extremely slow,
1:08:31
right? The MCTS process which can't happen. Um, the other thing that that is pretty crazy about the way that the
1:08:36
brain works is that like everything is kind of running autonomously. And so like you you might be like in the middle
1:08:42
of saying sentence one and be like, "Oh, actually no, something else." And so like what just happened there? It's like
1:08:47
type one and type two thinking are happening at the same time in some way. And so like there's definitely uh you
1:08:53
know some um really cool mix of these like heterogeneous
1:09:00
models and like some are overriding others and like taking control of the motor cortex and like commanding the
1:09:05
body to do a thing you know. Okay. But on the flip side now we um talked in the past video about the
1:09:11
squint test and how we felt that autogressive LLMs maybe don't pass the squint test. Why don't we reintroduce
1:09:18
what the squint test was for a second and then maybe let's think about whether this passes the squint test despite all those limitations.
1:09:24
Yeah. And the squint test for me I think is like um this comes from the Yan Lakun uh we didn't need uh flapping wings to
1:09:31
achieve flight. Um and to that I say well we did need two wings. And like if I squint and I look at a bird and I
1:09:37
squint and I look at a plane I'm like yeah it's kind of similar. It looks right. Um, similarly, if I squint and I look at the human brain and
1:09:43
I squint and I look at all these these world models, we have like this VA, this
1:09:49
action policy, and that they're doing test time planning together and things like that, it's getting really close. It's much much closer.
1:09:55
Seems closer than an autogressive LLM. And that like this concept of a world model of, you know, implicitly
1:10:01
predicting future states and actions feels intuitively like what our brain is doing. And it seems like there's some,
1:10:07
you know, neuroscience evidence to support that. I mean, I'm I'm getting to the conclusion that I think that the
1:10:12
brain is the optimizer, not the model, and that the the brain emits like has
1:10:18
models that it invokes, but the brain is somehow also the optimizer itself. And so, in that way, it doesn't pass the
1:10:24
squint. Um because like, you know, something magical is happening when you're sleeping. There's no intelligent
1:10:29
species that we're aware of that have any amount of intelligence that don't sleep. And so, like octopuses, dolphins,
1:10:35
all this stuff, elephants, they all sleep. There's some reason for that. And that seems like a really think about
1:10:40
like the evolutionary re like recourse of sleeping like you get eaten when you sleep. So like for the benefit of
1:10:47
sleeping should be so so much better to outperform that. So I think we don't have this idea of awake sleep uh in our
1:10:54
current um architecture but I can imagine I'm like simulating you know you know compress from the hippo campus some
1:11:00
like experience in the day. I'm like training on more of those examples, right? You're like collecting a whole bunch of these experience rollouts and then
1:11:08
you're updating your your policy function over there. There's got to be something like like there's this thing called shortwave ripple where like the hippoc campus when
1:11:14
you're sleeping like emits these uh spike trains that are actually reversed from when they actually happen back in
1:11:20
through the both both the hemispheres and for like seven times and then it like stops. So like there's something happening
1:11:26
there that's very uh uh training something. Yeah. And if you don't sleep, then you don't up you don't have
1:11:32
long-term memory. Right. Right. And so like there's definitely a reason why we're we're training uh uh things that happened uh into our brain.
1:11:40
So where does that put us now? We have all this work happening with world models. How should we think about what's coming ahead in these next few years in
1:11:46
the research community? Yeah, I think that like we're going to see a lot more uh of these world models
1:11:51
in robotic policies. I think that's going to unlock probably full self
1:11:56
driving would be like a one of those examples if they can get the real timeness of it. They can probably they can probably solve it with more compute
1:12:02
to like have parallel things and you probably don't need it for like most standard things maybe like you know
1:12:08
getting out of weird parking jams and like things like that would take us some time similar to the Rosie the robot
1:12:14
which we've always wanted to have a Rosie the robot to like you know clean up my room for me. Um, I think that like
1:12:20
this feels like we're getting to good enough that we can pay up for data in compute to get to Rosie the robot. It
1:12:27
does feel like that it'll be expensive to collect the data and do the dreamer sequence of going from state to state
1:12:34
and then getting the action conditioning to work, but like I feel like it should work. Yeah. I mean what's pretty cool is we
1:12:40
see a lot of companies at YC working at every step of this from the collecting egocentric data collecting uh the
1:12:46
teleyop data training their own world models and action models um building new
1:12:52
embodiment and then making ways of adapting those embodiment and feels like this is the first year where you see
1:12:57
demos where you're like okay this actually like kind of is starting to look like it's going somewhere and it
1:13:02
seems like a very exciting year. Yeah. So anyway, I think that there are real AI problems to solve still. We
1:13:09
talked about pins. We talked about the real-time issues. And then on the robotic side, there's real issue. Like
1:13:14
it's amazing how effective our epidermis is in terms of we we can detect detect
1:13:20
tactile. Oh, epidermis. Yeah, epidermis. Our tactile. We can detect sheer force. We can detect
1:13:26
temperature and it's everywhere. And so like versus, you know, like the we get like one little sensor that only
1:13:33
does tactile. But we don't have the the friction component. We don't have temperature. We don't have all these the feeling. We can't estimate coefficient
1:13:39
of friction very quickly. I can touch something and say, "Oh, this is smooth. This is rough." It doesn't we don't have any of that. And if I numb your hands, I
1:13:45
actually had this experience uh um just recently. If I numb your hands, like you actually can't tie your shoes. Yeah.
1:13:51
So, you can't perform control. And so, like, yeah, if you like, you know, uh uh
1:13:56
if you train enough um on enough human data tying your laces, do I think you
1:14:01
can do it with no feedback? Maybe, maybe. But like how much would you need if you did actually have the
1:14:08
human like touch? Like I think it'd be so much easier. Yeah. Well, there's a lot of more research to do then.
1:14:13
Yeah. Yeah. Thanks so much for joining us. Thanks so much for watching everyone. We'll be back with the next episode of Decoded.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

## Review 001 — Knox / ChatGPT strategic read

**Layer:** `captured_interpretation_nonbinding`
**Purpose:** strategic source-local interpretation

### 1. Rough metadata

`source_platform: YouTube`
`source_url: https://www.youtube.com/watch?v=qz4GQ0zUFRw`
`source_title: World Models, JEPA And The Path To Sample-Efficient RL`
`series_or_program: Decoded`
`channel_or_org: Y Combinator`
`speakers: Ankit and François; surnames not established from the supplied source`
`published_at: 2026-07-17`
`captured_at: 2026-07-18`
`capture_method: YouTube screenshot + full pasted transcript`
`content_type: long-form technical explainer / reinforcement-learning and world-model tutorial / research and startup commentary`
`source_reliability_context: technically sophisticated secondary discussion drawing on control theory, reinforcement learning, JEPA, Dreamer, robotics, autonomous-driving, neuroscience, and recent papers; useful for conceptual architecture and mechanism pressure, but not a primary research paper or settled account of human cognition, AGI, robotics readiness, or comparative model performance`
`topic_tags_light: [world_models, sample_efficiency, intelligence_per_sample, intelligence_per_watt, model_predictive_control, reinforcement_learning, model_free_RL, model_based_RL, policy, value_function, transition_model, action_conditioning, world_action_model, test_time_planning, Monte_Carlo_tree_search, action_space_explosion, latent_state, video_diffusion, synthetic_rollouts, Dreamer, JEPA, joint_embedding_predictive_architecture, robotics, autonomous_driving, cross_embodiment, teleoperation_data, sensory_feedback, online_adaptation, Agent_Runtime, Reactor, digital_twin, physical_automation, Care_Operating_Model, Platform_Loop]`

---

### 2. People / authority context

**Ankit and François**

The speakers present a technically detailed discussion spanning:

* control theory;
* reinforcement learning;
* representation learning;
* world models;
* robotics;
* autonomous driving;
* latent-state prediction;
* synthetic training data;
* and neuroscience analogies.

Their strongest authority in this source is explanatory:

* defining world models as state-transition predictors conditioned on action;
* explaining why action-space size and planning horizon create computational explosion;
* contrasting model-free and model-based reinforcement learning;
* explaining how video or latent world models can generate imagined training trajectories;
* and identifying current technical barriers in robotics.

Their authority is weaker for:

* claiming that world models are required for AGI;
* treating the neocortex primarily as a world-modeling system;
* equating sleep with a specific machine-learning optimization loop;
* predicting near-term household robotics;
* or concluding that one current architecture is the inevitable successor to transformers.

Those claims should remain:

`research hypothesis | informed speculation | future-watch`

rather than OMNI doctrine.

**Publisher / incentive posture**

Y Combinator benefits from highlighting:

* frontier technical problems;
* startup opportunities;
* robotics infrastructure;
* data collection;
* world-model training;
* and new embodiments.

The talk is not directly selling one product, but it is operating inside an ecosystem that rewards identifying investable technical frontiers.

---

### 3. Suggested processing

`priority: 4.5/5`
`depth: full_semantic with strong sibling deduplication`
`EVRUN needed?: yes`
`spine_candidate?: supporting AI-substrate / Reactor / physical-execution source; not independently constitutional`

**Promotion posture**

`world-model sharpening | consequence-prediction architecture | risk-adaptive deliberation | simulation-versus-observation boundary | synthetic-evidence governance | physical-execution planning | embodiment-specific calibration | model-cost and latency pressure`

### Closest siblings

* **EVSRC-2026-000124** — Stanford representation learning and world modeling:

  * action-conditioned next-state prediction;
  * latent representations;
  * Causal-JEPA;
  * predictive sufficiency;
  * object interaction;
  * model-predictive planning;
  * fast and slow policy composition.

* **EVSRC-2026-000180** — JEPA / world-model foundations:

  * representation learning;
  * latent prediction;
  * non-generative world modeling;
  * sample efficiency;
  * LeCun’s architectural thesis.

* **EVSRC-2026-000182** — operational world-model planning:

  * explicit consequence prediction;
  * action-sequence search;
  * goal-state scoring;
  * receding-horizon execution;
  * hierarchical planning;
  * rollout drift;
  * candidate action → predicted state → resolver.

* **Agent Runtime & Harness**

  * governed model/harness composition;
  * context;
  * skills;
  * tools;
  * delegation;
  * budgets;
  * trace;
  * fallback;
  * authority ceilings;
  * domain-owned commitment.

* **Research / Digital-Twin / Physical-Automation architecture**

  * OMNI owns link, telemetry, record, command gate, and proof;
  * physical systems retain actuation mechanics;
  * authority is device-, context-, and mode-specific.

### What is distinct here

This source adds several valuable mechanisms and cautions:

1. **Intelligence per sample** as a separate optimization dimension from intelligence per compute or watt.

2. **The action-space problem** as a first-class explanation for why AlphaGo-style planning does not scale directly into robotics, care, markets, or open-world operations.

3. **A useful model-free/model-based split**:

   * direct action policy for familiar situations;
   * explicit future-state modeling and planning for uncertain or novel situations.

4. **World-action models** that jointly predict:

   * the candidate action;
   * and the next state produced by that action.

5. **Synthetic imagined rollouts** as a way to reduce expensive real-world exploration.

6. **Cross-embodiment failure**:

   * a policy or model learned for one vehicle, robot, institution, device, or body does not transfer safely merely because the task looks similar.

7. **Sensor insufficiency**:

   * poor tactile, friction, temperature, or state feedback can make reliable control impossible regardless of model intelligence.

8. **Real-time planning pressure**:

   * a theoretically superior planner can still be operationally useless if it cannot respond before the action deadline.

9. **Online adaptation pressure**:

   * the environment may change faster than retraining or batch release cycles.

---

## 4. Strategic read

### Classification

This is a **high-value technical architecture-pressure source**, substantially overlapping earlier world-model material but adding a clearer explanation of why consequence prediction is difficult in open-world systems.

Its surface thesis is:

> World models may make reinforcement learning more sample-efficient by allowing agents to simulate future states, train on imagined trajectories, and plan before taking real-world actions.

The OMNI translation is:

> **A governed agent should maintain an explicit, uncertainty-bearing model of how candidate actions may change relevant state—but simulated futures remain predictions, not observations, decisions, or authority.**

The deepest lesson is not that OMNI should train a universal robotics model.

It is:

> **When an agent can affect the world, it needs machinery for predicting consequences, constraining the action space, selecting an appropriate planning horizon, acting incrementally, observing what actually occurred, and revising its model without confusing the prediction with reality.**

---

### Core takeaway

**The keeper is: act from a bounded prediction, observe the resulting state, and replan—never treat a long imagined rollout as a committed future.**

A second keeper:

> **The complexity of an intelligent system is determined as much by its action space and consequence horizon as by the size of its input state.**

A third keeper:

> **Synthetic experience can reduce expensive exploration, but it cannot become evidence that the real world behaved as simulated.**

---

# A. Sample efficiency is a strategic property, not merely a training metric

The speakers frame two major efficiency questions:

* intelligence per watt;
* intelligence per sample.

The first asks how much capability is obtained for a unit of computation or energy.

The second asks how quickly a system acquires useful competence from new evidence.

This distinction matters deeply for OMNI.

OMNI will often operate in domains where:

* severe failures are rare;
* individual patients are heterogeneous;
* each operator has limited historical volume;
* new protocols have few examples;
* novel incidents cannot be recreated cheaply;
* and experimentation can create harm.

A system that needs tens of thousands of real examples before adapting may be unusable for:

* rare adverse events;
* unusual medication interactions;
* new operational failures;
* low-volume specialty workflows;
* emerging regulations;
* and new operator configurations.

OMNI therefore needs mechanisms that improve from sparse evidence without pretending one case establishes universal truth.

Possible mechanisms include:

* cross-operator learning with strict boundaries;
* simulation;
* historical replay;
* causal or mechanistic constraints;
* expert-authored rules;
* structured analogical retrieval;
* synthetic test generation;
* and explicit uncertainty.

**Keeper line:**
**In high-consequence domains, learning efficiency matters because real mistakes are expensive training data.**

---

# B. “Perfect sample efficiency” exists only in bounded domains with sufficiently accurate laws

The source uses Newtonian mechanics as an example of near-perfect prediction.

If the dynamics are known, one can calculate a trajectory without repeatedly experimenting by crashing rockets into the target.

This is a useful idealization.

It does not generalize directly to:

* clinical care;
* human organizations;
* markets;
* patient adherence;
* provider judgment;
* or multi-actor institutions.

Those environments involve:

* hidden state;
* changing incentives;
* non-stationary behavior;
* incomplete observation;
* heterogeneous actors;
* social response;
* and interventions that alter future behavior.

**Keeper line:**
**Perfect planning requires a sufficiently complete world model; most human systems do not offer one.**

OMNI should seek **bounded predictive sufficiency**, not omniscient simulation.

---

# C. A world model is an action-conditioned transition model

The cleanest formal contribution is:

`current state + proposed action → predicted next state`

This is more useful than generic prediction.

A forecast such as:

> The patient may deteriorate.

is different from:

> If the current plan continues, deterioration risk may increase; if intervention A occurs, these state changes are predicted; if intervention B occurs, different obligations and risks appear.

The action-conditioned form supports:

* counterfactual comparison;
* planning;
* safety analysis;
* and trade-off evaluation.

For OMNI:

`governed current-state projection`
`+ candidate action`
`+ relevant environmental assumptions`
`→ predicted next-state candidate`

The output remains:

* model-derived;
* uncertainty-bearing;
* time-bounded;
* and non-authoritative.

**Keeper line:**
**Prediction becomes operationally useful when it distinguishes what may happen from what may happen because of a specific action.**

---

# D. OMNI needs predicted-state candidates, not fictional future facts

A world model might predict:

* expected patient response;
* provider workload;
* scheduling congestion;
* fulfillment delay;
* churn;
* adverse-event risk;
* cost;
* or a downstream obligation.

That prediction must not enter the record as if it occurred.

OMNI should preserve distinct classes:

`observed_current_state`
`predicted_state_candidate`
`counterfactual_state_candidate`
`committed_plan`
`authorized_action`
`actual_occurrence`
`observed_outcome`

**Keeper line:**
**A predicted future is a planning artifact, not a future-dated fact.**

---

# E. The action space is often the real source of intractability

The source’s chess → Go → driving → robotics progression is valuable because it separates:

* state-space size;
* action-space size;
* environmental uncertainty;
* and planning latency.

An environment can have a huge state space and remain tractable if:

* available actions are few;
* rules are stable;
* rewards are clear;
* and simulation is cheap.

A seemingly simple environment can become intractable when:

* actions are continuous;
* combinations explode;
* other actors respond;
* timing matters;
* and every candidate action requires expensive simulation.

This applies directly to OMNI.

A care or business agent may technically have access to:

* thousands of tools;
* many communications;
* multiple orders;
* scheduling changes;
* escalations;
* pricing options;
* and policy paths.

Exposing them all as one flat action space is architectural failure.

**Keeper line:**
**Capability abundance without action-space governance makes intelligent planning less reliable, not more.**

---

# F. Capability projection is action-space reduction

OMNI’s current runtime already says tools and skills should be projected based on:

* actor;
* task;
* operator;
* domain;
* environment;
* risk;
* authority;
* and tool availability.

World-model reasoning strengthens this architecture.

By limiting an agent to the actions admissible in the current context, OMNI:

* reduces planning complexity;
* reduces error opportunities;
* lowers cost;
* improves evaluation;
* and makes consequence prediction more tractable.

**Keeper line:**
**Least privilege is also a planning optimization.**

The action set should be narrowed before the model reasons over it.

---

# G. Hierarchical action spaces are required for complex work

A robotic system should not plan every microscopic actuator movement directly from a high-level goal.

Likewise, OMNI should not ask one reasoning process to choose among every low-level operation in the platform.

A hierarchy may look like:

`goal`
`→ governed subgoal`
`→ workflow candidate`
`→ bounded domain action`
`→ deterministic command`
`→ physical or digital occurrence`

Example:

`resolve medication-access problem`
`→ determine whether clinical review is required`
`→ obtain authorized prescription/order state`
`→ identify eligible pharmacy options`
`→ choose fulfillment route`
`→ transmit bounded command`
`→ observe acceptance / rejection / partial fill`

Each layer can use a different:

* model;
* policy;
* authority;
* action space;
* and planning horizon.

**Keeper line:**
**High-level intelligence should choose bounded subgoals; deterministic systems should execute the lowest-level known mechanics.**

---

# H. Model-free and model-based control should compose

The source distinguishes:

### Model-free policy

`state → action`

Useful when:

* situations are frequent;
* the action is familiar;
* latency must be low;
* training coverage is broad;
* and consequence is bounded.

### Model-based planning

`state + possible actions → predicted futures → selected action`

Useful when:

* the situation is novel;
* the cost of failure is high;
* multiple futures need comparison;
* goals conflict;
* or explanation requires predicted consequences.

OMNI should not choose one universally.

A useful architecture is:

* deterministic policy for known invariants;
* learned policy for routine bounded decisions;
* explicit planning for novel or consequential cases;
* human/domain resolution where authority or ambiguity remains.

**Keeper line:**
**Use habitual execution for proven routines and deliberative planning for material uncertainty.**

---

# I. Reactor may be the selector between fast and deliberative paths

The source’s implicit “fast policy versus slow planner” distinction aligns strongly with OMNI Reactor.

Reactor can help determine:

* whether the case stays on a routine lane;
* whether consequence prediction is required;
* whether additional context must be loaded;
* whether a slower model route is justified;
* whether more candidate actions should be considered;
* and whether a human or domain authority must intervene.

Possible shape:

`state + action class + uncertainty + consequence`
`→ fast bounded policy`
or
`→ explicit counterfactual planning`
or
`→ human/domain resolution`

This should not create two entirely separate OMNI systems.

It is one governed substrate with risk-adaptive deliberation.

**Keeper line:**
**Spend planning depth in proportion to uncertainty, novelty, and consequence.**

---

# J. Receding-horizon planning is safer than committing the full imagined future

Model predictive control typically:

1. observes current state;
2. simulates candidate action sequences;
3. selects the best sequence;
4. executes only the first action or small prefix;
5. observes the new state;
6. replans.

This is highly relevant to OMNI.

A long-term care or business plan should rarely be executed as though the entire future were fixed.

Instead:

* approve the current bounded action;
* preserve the longer plan as a projection;
* define the next observation point;
* and re-resolve after new evidence.

**Keeper line:**
**Commit the next authorized step; retain the distant plan as revisable intent.**

---

# K. Planning horizon must be explicit

Prediction error compounds over time.

A model may be useful one step ahead and unreliable twenty steps ahead.

Every world-model output should carry:

* prediction horizon;
* confidence;
* uncertainty growth;
* assumptions;
* boundary conditions;
* and required re-observation point.

A patient-risk model might be reliable for:

* the next hour;
* but not the next month.

A staffing model might be reliable for:

* tomorrow’s schedule;
* but not next quarter’s demand.

**Keeper line:**
**A prediction without a declared horizon invites the user to trust it too far.**

---

# L. Rollout depth is an economic and safety budget

The source explains that AlphaGo-style tree search can require many thousands of model invocations for one move.

That becomes infeasible when:

* the action space grows;
* the depth grows;
* the model is expensive;
* or the decision must occur in real time.

OMNI therefore needs planning budgets:

* maximum candidate actions;
* maximum rollout depth;
* maximum model invocations;
* latency deadline;
* cost ceiling;
* and stop conditions.

The runtime should be able to say:

* the search is complete enough;
* the decision should use a simpler policy;
* more time is required;
* or the uncertainty is too high to proceed automatically.

**Keeper line:**
**Planning depth is a governed resource, not an unlimited sign of intelligence.**

---

# M. Real-time adequacy can matter more than theoretical optimality

A controller that discovers the perfect steering action sixty seconds too late is useless.

The same applies to:

* urgent care deterioration;
* medication safety;
* fraud intervention;
* system containment;
* queue management;
* and patient communication.

OMNI must distinguish:

* best available answer;
* best answer before the deadline;
* and safe fallback when adequate deliberation cannot finish.

**Keeper line:**
**A late optimal answer can be worse than an immediate safe bounded action.**

---

# N. The world changes while planning occurs

Many formal planners assume:

* stable environment;
* stable rules;
* stable reward;
* and no significant change during computation.

OMNI’s world does not.

During a run:

* a patient may deteriorate;
* another clinician may act;
* an appointment may be taken;
* a pharmacy may reject the order;
* a deployment may roll back;
* a law may change;
* or a customer may withdraw consent.

Longer planning increases the risk that its initial state is stale.

**Keeper line:**
**The planner must revalidate the world before consequential execution.**

---

# O. Other actors make the environment interactive, not merely stochastic

The adversarial-drone example is simplistic but important.

An action can change what other actors do.

In OMNI:

* a patient responds to messaging;
* a provider changes behavior after an alert;
* a payer changes its decision after submitted evidence;
* a staff member works around a workflow;
* an external agent changes the user’s belief;
* a vendor changes availability after receiving demand.

The system is not predicting a passive environment.

It is predicting a world containing other decision makers.

**Keeper line:**
**When actions change other actors’ behavior, prediction requires a model of interaction—not merely a forecast of background state.**

---

# P. Human and organizational world models are especially fragile

Predicting physics is different from predicting:

* trust;
* adherence;
* motivation;
* professional judgment;
* organizational politics;
* customer demand;
* or regulator response.

These targets can change because the prediction or intervention exists.

For example:

* a risk score can alter clinician attention;
* a forecast can change staffing;
* a recommendation can change patient behavior;
* a ranking can change market demand.

**Keeper line:**
**In reflexive systems, the model’s output can become part of the world it is trying to predict.**

OMNI should monitor intervention effects and not assume pre-intervention relationships remain valid.

---

# Q. Synthetic rollouts can reduce real-world exploration

World models can generate imagined trajectories:

`current state`
`→ simulated action`
`→ simulated next state`
`→ simulated continuation`

These rollouts can support:

* policy training;
* rare-case generation;
* safety testing;
* adversarial scenarios;
* regression cases;
* and pre-release evaluation.

This is especially useful when real experimentation is:

* costly;
* dangerous;
* slow;
* or ethically constrained.

**Keeper line:**
**Simulate broadly before acting narrowly.**

---

# R. Synthetic experience is not observed evidence

The danger is that an organization begins treating:

* model-generated cases;
* synthetic patients;
* simulated outcomes;
* or imagined tool trajectories

as evidence that the world behaves accordingly.

OMNI needs explicit evidence classes:

`observed_evidence`
`historical_replay`
`simulated_scenario`
`synthetic_training_example`
`counterfactual_rollout`
`expert-authored_case`

These can all support validation.

They are not interchangeable.

**Keeper line:**
**Synthetic scenarios test the system’s reasoning; they do not prove real-world efficacy.**

---

# S. The simulator can reproduce its own blind spots at scale

A policy trained extensively inside an inaccurate world model can become highly optimized for the wrong world.

This is sometimes called exploiting the simulator.

In OMNI, the equivalent could be:

* optimizing a workflow against an incomplete patient model;
* optimizing revenue against a simplified demand model;
* optimizing alerting against a weak proxy;
* or optimizing care pathways against an unrepresentative cohort.

The policy can look excellent in simulation and fail in production.

**Keeper line:**
**A policy can become perfectly adapted to the simulator’s mistakes.**

Independent observed evidence must constrain the loop.

---

# T. World-model confidence must be calibrated against actual outcomes

OMNI should compare:

`predicted next state`
versus
`observed next state`

and retain:

* prediction error;
* direction of error;
* subgroup;
* environment;
* action;
* time horizon;
* and downstream consequence.

This supports:

* calibration;
* drift detection;
* model retirement;
* and improved routing.

The model should know when it is outside reliable coverage.

**Keeper line:**
**A world model earns trust by surviving repeated comparison with what actually happened.**

---

# U. Out-of-distribution states are the central danger

The source gives a vivid failure example:

A driving model trained almost entirely on roads may convert a house into a plausible road-like future rather than understanding that collision is catastrophic.

The model follows its training distribution instead of physical reality.

OMNI analogues include:

* assuming an unusual patient will follow the common pathway;
* treating an unrecognized complication as ordinary recovery;
* interpreting an absent record as an absent event;
* assuming a new operator behaves like an existing one;
* or forecasting a failed fulfillment step as successful because success dominates the training data.

**Keeper line:**
**A plausible familiar future can be dangerously wrong when the current state is unfamiliar.**

---

# V. Hard constraints must sit outside learned prediction

A learned world model may estimate likely outcomes.

It should not be the only system enforcing:

* dosage ceilings;
* contraindications;
* identity;
* consent;
* authority;
* financial limits;
* security boundaries;
* prohibited actions;
* or device safety ranges.

These should exist as:

* deterministic constraints;
* domain rules;
* safety envelopes;
* and authorization gates.

**Keeper line:**
**Learned prediction may rank admissible actions; it must not define the hard boundary of admissibility by itself.**

---

# W. The reward function is a governance object

In reinforcement learning, the value function reflects expected future reward.

The source uses examples such as:

* winning a game;
* minimizing distance;
* minimizing energy;
* avoiding houses.

In OMNI, deciding what counts as reward is never neutral.

Possible objectives include:

* patient outcome;
* patient preference;
* clinical safety;
* clinician burden;
* speed;
* operator cost;
* revenue;
* retention;
* throughput;
* or reduced liability.

These can conflict.

A system optimizing one scalar reward may sacrifice everything not encoded.

**Keeper line:**
**The objective function is a policy decision about whose outcomes matter and which harms are unacceptable.**

---

# X. Safety should often be a constraint, not merely a negative reward

A planner should not trade:

* a small chance of catastrophic harm

against:

* enough efficiency or revenue gain

simply because the aggregate reward is positive.

Certain boundaries should be represented as:

* prohibited states;
* mandatory review;
* hard safety floors;
* lexicographic priorities;
* or constrained optimization.

**Keeper line:**
**Some values may be optimized; some boundaries may not be bargained away.**

---

# Y. Multi-objective planning must preserve trade-offs

A care plan may improve:

* symptom relief;
* convenience;
* cost;
* and adherence,

while worsening:

* risk;
* uncertainty;
* burden;
* or long-term outcome.

OMNI should not hide those trade-offs inside one opaque score.

It should preserve:

* objective dimensions;
* weights or precedence;
* decision owner;
* uncertainty;
* and why one option was selected.

**Keeper line:**
**A single score can select an action while concealing the conflict that made the action consequential.**

---

# Z. State representation determines what the model can understand

A world model does not reason over reality directly.

It reasons over a representation of reality.

If the state representation omits:

* an important symptom;
* patient preference;
* device calibration;
* provider authority;
* medication history;
* payment failure;
* environmental condition;
* or uncertainty,

the transition model cannot recover it reliably.

**Keeper line:**
**Prediction quality is bounded by what the state representation preserves.**

This strongly supports OMNI’s separation among:

* source evidence;
* claims;
* observations;
* adopted assertions;
* commitments;
* occurrences;
* and outcomes.

Flattening these into one summary weakens both prediction and governance.

---

# AA. Latent compression is necessary and dangerous

JEPA and related approaches operate in compressed latent spaces rather than predicting every pixel.

This can improve:

* computational efficiency;
* generalization;
* and focus on task-relevant structure.

Compression inevitably discards information.

The latent may preserve what is predictive for the training task while losing:

* rare safety signals;
* identity;
* provenance;
* fairness-relevant detail;
* or evidence needed for explanation.

**Keeper line:**
**A compact state can support planning without being sufficient for audit, authority, or truth.**

OMNI should retain the source artifacts and structured records behind the latent representation.

---

# AB. World structure is not always language-shaped

The source reinforces the earlier JEPA conclusion:

* video;
* movement;
* spatial relationships;
* tactile feedback;
* and physical interaction

contain information that language descriptions may omit.

For OMNI:

* photographs;
* imaging;
* waveform data;
* sensor streams;
* procedure video;
* speech timing;
* document layout;
* and interaction traces

should retain modality-native representations.

Language summaries are projections.

**Keeper line:**
**Verbalization helps humans and agents reason; it must not become a lossy replacement for the underlying modality.**

---

# AC. Sensor completeness can dominate model intelligence

The robotics discussion closes with a critical observation:

Humans have rich tactile sensing, including:

* pressure;
* shear;
* texture;
* friction;
* and temperature.

A robot with sparse sensing may be incapable of reliable control even with an excellent policy.

The OMNI equivalent is that no reasoning system can compensate indefinitely for missing observations.

Examples:

* no confirmation that a patient took the medication;
* no visibility into whether a message was understood;
* no pharmacy receipt;
* no device health signal;
* no physical examination;
* no current lab value;
* no knowledge of the patient’s changed circumstance.

**Keeper line:**
**Missing feedback is not intelligence debt; it is an observation gap.**

The correct response may be:

* ask;
* measure;
* verify;
* escalate;
* or abstain.

Not hallucinate the missing state.

---

# AD. Absence of observation must remain uncertainty

A model may be tempted to infer that:

* no reported adverse event means no adverse event;
* no failed-delivery receipt means delivery succeeded;
* no patient response means adherence;
* or no new note means no change.

OMNI should preserve:

`not observed`
as distinct from
`observed absent`

**Keeper line:**
**Silence is not a negative measurement.**

---

# AE. Cross-embodiment failure maps directly to operator and device variation

The source notes that a policy trained for one vehicle may not transfer safely to another because:

* mass;
* geometry;
* aerodynamics;
* sensors;
* and dynamics differ.

In OMNI, “embodiment” can include:

* a specific device;
* care setting;
* operator;
* staffing model;
* jurisdiction;
* workflow;
* patient population;
* or external partner.

A pathway proven in:

* an academic hospital

may fail in:

* a rural clinic.

A model trained on:

* one EHR;
* one specialty;
* one imaging device;
* one language;
* or one patient population

may not transfer cleanly.

**Keeper line:**
**Similar tasks do not imply interchangeable operating environments.**

---

# AF. Every deployment needs an environment or embodiment profile

A predictive or control model should declare the environments in which it has evidence.

Possible dimensions include:

* operator;
* site;
* device;
* instrument;
* specialty;
* population;
* language;
* workflow;
* data source;
* physical configuration;
* and policy regime.

Deployment into a new environment may require:

* recalibration;
* shadow operation;
* local evaluation;
* lower autonomy;
* or explicit prohibition.

**Keeper line:**
**Model portability is an empirical claim about environments, not a file-format property.**

---

# AG. Adaptation must not happen through uncontrolled self-editing

The source correctly identifies rapid test-time adaptation as an open problem.

A system should update its understanding when:

* friction changes;
* behavior changes;
* policy changes;
* or the current case differs from training.

But a care or business agent must not silently retrain itself into a new operating policy during one live interaction.

Possible safe adaptation layers include:

* run-local state estimate;
* temporary parameter estimate;
* updated uncertainty;
* candidate memory;
* changed model route;
* or escalation.

Durable changes to:

* policy;
* model;
* memory;
* or capability

remain Platform Loop events.

**Keeper line:**
**Adapt the estimate immediately; govern durable behavioral change separately.**

---

# AH. Online state estimation is safer than online policy mutation

A controller may estimate:

* current friction;
* current load;
* current response rate;
* current risk;
* current device drift;
* or current patient state

without changing the underlying policy model.

This distinction is valuable.

OMNI can update:

* what it believes about the current world

while preserving:

* what actions are allowed;
* which policy version is active;
* and who owns commitment.

**Keeper line:**
**A changing state estimate does not require an unversioned change in decision policy.**

---

# AI. The “brain is the optimizer” claim is interesting but not architectural proof

The source speculates that human intelligence may arise from:

* multiple interacting systems;
* continual prediction;
* fast and slow processes;
* offline consolidation;
* and sleep-mediated learning.

This is suggestive.

It supports investigating:

* parallel fast and slow routes;
* offline replay;
* memory consolidation;
* model ensembles;
* and background evaluation.

It does not establish that OMNI should imitate biological sleep or cortical architecture.

**Keeper line:**
**Biology can inspire mechanisms without becoming the specification.**

---

# AJ. Offline consolidation resembles a governed learning cycle

The sleep analogy does surface a useful pattern:

* experience is collected during operation;
* selected experience is replayed later;
* representations or policies are updated offline;
* and the active system is not continuously rewriting itself during every action.

This maps better to OMNI’s Platform Loop than unrestricted online self-improvement.

Possible form:

`runtime traces and outcomes`
`→ selected learning corpus`
`→ evaluation / replay`
`→ candidate change`
`→ validation`
`→ release`

**Keeper line:**
**Learn from operation offline; do not let every operation rewrite the operator.**

---

# AK. World models can support digital twins without creating literal twins

The term “world model” can easily inflate into “digital twin.”

OMNI should preserve a strict definition.

A digital twin or patient-state model is:

* partial;
* purpose-specific;
* versioned;
* time-bounded;
* uncertainty-bearing;
* and derived from incomplete evidence.

It is not:

* the patient;
* the hospital;
* the operator;
* or the world.

**Keeper line:**
**A twin is a governed predictive projection of selected state, not a duplicate reality.**

---

# AL. Different purposes require different world models

A single universal model may be neither necessary nor desirable.

OMNI may need different predictive representations for:

* clinical deterioration;
* medication fulfillment;
* scheduling;
* provider workload;
* patient communication;
* cash flow;
* infrastructure capacity;
* physical device behavior;
* or research simulation.

Each can differ in:

* state variables;
* horizon;
* confidence;
* objective;
* source evidence;
* and authority.

**Keeper line:**
**World models should be scoped to the decision they support.**

---

# AM. Model disagreement is useful evidence

Different models may predict different futures.

Rather than forcing premature consensus, OMNI can preserve:

* model identity;
* assumptions;
* predicted state;
* confidence;
* and disagreement.

Material disagreement can trigger:

* additional observation;
* broader planning;
* expert review;
* or a safer action.

**Keeper line:**
**Disagreement among predicted futures is a reason to investigate, not an inconvenience to average away.**

---

# AN. Prediction should be evaluated at the action boundary

A world model can be globally imperfect but useful for ranking a narrow set of actions.

Conversely, a model with good average prediction may fail precisely where an action is consequential.

Evaluation should therefore ask:

* Did it preserve the correct ordering among candidate actions?
* Did it identify prohibited outcomes?
* Was uncertainty calibrated near the decision boundary?
* Did errors change the selected action?
* Did it remain safe under distribution shift?

**Keeper line:**
**The relevant predictive error is the error that changes what the system does.**

---

# AO. Model evaluation needs horizon-, action-, and environment-specific metrics

Possible evaluation dimensions include:

* one-step prediction;
* multi-step rollout drift;
* constraint violations;
* rare-event recall;
* uncertainty calibration;
* counterfactual ranking;
* action-selection regret;
* latency;
* compute cost;
* environment transfer;
* subgroup performance;
* and recovery after changed conditions.

A single aggregate benchmark cannot establish operational fitness.

**Keeper line:**
**World-model quality is a profile, not one score.**

---

# AP. Model lineage is part of action lineage

If an authorized action was selected partly because a world model predicted a favorable outcome, the action record should preserve:

* model version;
* state representation version;
* input evidence;
* candidate actions considered;
* predicted outcomes;
* constraints;
* uncertainty;
* planner version;
* and resolving authority.

If the model is later found defective, OMNI can identify:

* affected decisions;
* affected actors;
* affected patients;
* and required reassessment.

**Keeper line:**
**A prediction that influenced action becomes part of the action’s evidentiary lineage.**

---

# AQ. World-model recall may require reopening downstream work

A later model defect may reveal that:

* a risk was systematically underestimated;
* a device behavior was modeled incorrectly;
* a population was poorly represented;
* or a fulfillment route was overtrusted.

The consequence may be:

* rerun simulation;
* reassess unresolved cases;
* reopen care;
* notify operators;
* change policy;
* or recall a runtime profile.

**Keeper line:**
**Model correction can create real-world reassessment obligations.**

---

# AR. Physical systems need command-boundary architecture

The robotics material reinforces OMNI’s current physical-link doctrine:

* OMNI may observe;
* model;
* propose;
* authorize;
* transmit;
* and record.

The physical device or embedded controller performs the actuation.

Access modes should remain explicit:

* `read_only`;
* `simulate_only`;
* `recommend`;
* `human_confirmed_command`;
* `bounded_control`;
* `prohibited`.

**Keeper line:**
**A predicted safe action is not permission to actuate the device.**

---

# AS. Physical control needs short horizons and rapid feedback

In robotics and autonomous driving, long open-loop execution is fragile.

The system should:

* act in small bounded increments;
* observe device and environmental state;
* verify expected response;
* and stop when divergence appears.

This maps directly to:

* medication devices;
* laboratory instruments;
* clinical automation;
* scheduling automation;
* financial operations;
* and platform remediation.

**Keeper line:**
**The higher the physical or financial consequence, the shorter the safe open-loop horizon.**

---

# AT. OMNI should not confuse consequence prediction with authority

World models can help answer:

* What may happen?
* Which option appears safer?
* Which state is closer to the goal?
* Which risk may increase?

They cannot answer alone:

* Who may decide?
* Whose preference governs?
* Which legal or clinical rule applies?
* Whether consent exists?
* Whether the action is allowed?
* Whether the predicted benefit justifies the burden?

**Keeper line:**
**Prediction informs resolution; it does not resolve authority.**

---

## Where it lands

### Massive

**OMNI Reactor**

* selects fast versus deliberative processing;
* increases planning depth by novelty, uncertainty, and consequence;
* determines when simulation, more evidence, or human/domain review is required;
* constrains action-space exposure;
* sets prediction and execution horizons.

**Agent Runtime & Harness**

* world-model route;
* planner;
* state projection;
* candidate-action set;
* rollout budget;
* latency and cost;
* uncertainty;
* fallback;
* trace;
* model lineage;
* kill switch.

**Physical Automation / Device Link**

* embodiment profile;
* sensor completeness;
* bounded command;
* receding-horizon control;
* telemetry;
* instrument health;
* divergence detection;
* emergency stop;
* actual-occurrence proof.

### Major

**Care Operating Model**

* predicted state versus observed state;
* counterfactuals;
* provider and patient authority;
* candidate action;
* commitment;
* occurrence;
* outcome;
* reopening after prediction failure.

**Platform Loop**

* model and planner validation;
* simulated scenario suites;
* historical replay;
* environment-specific release;
* drift;
* model recall;
* outcome calibration;
* cost and latency regression.

**Research / Digital Twin**

* purpose-specific predictive models;
* simulation;
* synthetic rollouts;
* experimental validation;
* environment scope;
* scientific and operational twins.

### Medium-major

**Knowledge Reservoirs / D7 / Observation**

* modality-native state;
* temporal evidence;
* actual versus simulated evidence;
* source lineage;
* non-observation;
* uncertainty.

**Federation and operator configuration**

* operator-specific calibration;
* environment and embodiment scope;
* local policy;
* transfer restrictions;
* cross-operator learning boundaries.

**BIZOPS**

* demand, staffing, fulfillment, revenue, and operational-state models;
* interactive response to interventions;
* multi-objective planning;
* operator value and risk.

---

## Doctrine / primitive pressure

All names require deduplication against existing world-model, simulation, Reactor, and digital-twin concepts.

`world_model_profile`
`world_model_scope`
`state_representation_profile`
`transition_model_version`
`policy_profile`
`value_objective_profile`
`predicted_state_candidate`
`counterfactual_state_candidate`
`counterfactual_rollout`
`planning_run`
`planning_horizon`
`rollout_budget`
`receding_horizon_plan`
`action_space_projection`
`candidate_action_set`
`prediction_confidence_state`
`prediction_assumption_set`
`world_model_trust_state`
`model_environment_profile`
`embodiment_profile`
`environment_transfer_evidence`
`synthetic_evidence_class`
`simulated_scenario`
`actual_vs_predicted_receipt`
`prediction_error_record`
`world_model_drift`
`world_model_recall`
`sensor_coverage_state`
`observation_gap`
`interaction_model`
`hard_constraint_envelope`
`fast_policy_route`
`deliberative_planning_route`

Most should extend existing:

* `agent_runtime_profile`;
* `capability_envelope`;
* `context packet`;
* `model_version_of_record`;
* `world_model_trust`;
* `Governed Resolution`;
* `change candidate`;
* `eval run`;
* `operational finding`;
* `device-link profile`;
* `digital twin`;
* `observation`;
* and `outcome`.

The strongest likely additions or formal sharpenings are:

1. **Explicit predicted-state and counterfactual-state candidates**
2. **Planning horizon and rollout budget**
3. **Environment/embodiment applicability**
4. **Actual-versus-predicted calibration receipt**
5. **Synthetic-evidence classification**
6. **Fast-policy versus deliberative-planning routing under Reactor**

---

## Keeper doctrine

1. **A world model predicts how state may change under action; it does not create facts or authority.**

2. **Act from a bounded prediction, observe the result, and replan.**

3. **Commit the next authorized step; retain distant futures as revisable projections.**

4. **Sample efficiency matters where real mistakes are expensive evidence.**

5. **Perfect planning belongs to sufficiently bounded worlds, not most human systems.**

6. **Action-space size and consequence horizon can dominate planning difficulty.**

7. **Capability projection is both least privilege and action-space reduction.**

8. **Use hierarchy to separate goals, subgoals, workflows, commands, and actuation.**

9. **Compose fast bounded policies with slow explicit planning.**

10. **Spend deliberation in proportion to novelty, uncertainty, and consequence.**

11. **Every prediction needs a declared horizon and uncertainty.**

12. **Planning depth has cost, latency, and safety limits.**

13. **A late optimum may be worse than a timely safe action.**

14. **Revalidate the world before executing a plan produced from stale state.**

15. **Other actors make the environment interactive and reflexive.**

16. **Synthetic rollouts reduce exploration cost but do not become observed evidence.**

17. **A policy can overfit the simulator’s errors.**

18. **World-model trust must be earned through comparison with actual outcomes.**

19. **Hard safety and authority boundaries must sit outside learned prediction.**

20. **The objective function is a governance object.**

21. **Some values may be optimized; some boundaries may not be traded away.**

22. **State representation bounds what the planner can understand.**

23. **Latent compression can support planning without supporting audit or truth.**

24. **Preserve modality-native evidence before translating it into language.**

25. **Missing sensor feedback is an observation gap, not a reasoning challenge to hallucinate through.**

26. **Not observed is different from observed absent.**

27. **Similar tasks do not imply interchangeable devices, operators, populations, or environments.**

28. **Model portability requires environment-specific evidence.**

29. **Adapt state estimates quickly; govern durable policy changes separately.**

30. **Biology can inspire mechanisms without becoming the architecture specification.**

31. **Learn from operation through offline governed release loops.**

32. **A digital twin is a partial predictive projection, not a duplicate reality.**

33. **Different decisions may require different world models.**

34. **Model disagreement is useful uncertainty evidence.**

35. **Evaluate predictive errors by whether they alter action.**

36. **Model lineage belongs in action lineage.**

37. **Model defects may create downstream reassessment obligations.**

38. **A predicted-safe command still requires physical or domain authority.**

39. **Higher-consequence systems require shorter open-loop horizons and faster feedback.**

40. **Prediction informs governed resolution; it never replaces it.**

---

## What not to import blindly

### Do not canonize “world models are required for AGI”

It is a plausible and influential research thesis, not settled architecture.

### Do not treat neuroscience analogies as implementation proof

The cortex, sleep, imagination, and human motor control may inspire mechanisms without establishing direct machine equivalents.

### Do not infer that internal simulation eliminates real-world testing

The simulator may be wrong precisely in rare consequential states.

### Do not treat imagined rollouts as clinical, business, or physical evidence

They belong to simulation and evaluation.

### Do not deploy a policy trained primarily in one model-generated world without observed-world challenge

Synthetic scale can magnify simulator bias.

### Do not treat “perfect sample efficiency” as a realistic target for human systems

Patient, organizational, and market behavior is not Newtonian mechanics.

### Do not expose every possible tool to improve agent flexibility

A larger action space increases planning difficulty and risk.

### Do not flatten care, business, and physical actions into one shared reward

Their objectives and authorities differ.

### Do not let revenue or throughput quietly dominate the value function

Protected care and authority constraints remain superior.

### Do not use a scalar reward to hide hard safety limits

Catastrophic states should often be inadmissible, not merely expensive.

### Do not treat model predictive control as permission for long autonomous sequences

Execute bounded increments and re-observe.

### Do not assume a model trained in one operator, device, specialty, or population transfers safely

Require applicability evidence.

### Do not let a model adapt its durable policy invisibly during a live high-consequence case

Run-local adaptation and released policy changes are different.

### Do not infer current state from missing telemetry

Unobserved state remains uncertain.

### Do not treat richer reasoning as a substitute for better sensing

Some uncertainty can only be resolved through new observation.

### Do not make the digital twin canonical truth

The twin remains a model-derived projection.

### Do not allow the prediction model to authorize the action it recommends

Authority remains external.

### Do not use world-model confidence as a substitute for consent, professional judgment, policy, or evidence

Those are different constraints.

### Do not let test-time planning violate latency requirements

The runtime must have a safe fallback.

### Do not treat one aggregate benchmark as proof of planning fitness

Evaluate by horizon, environment, action, consequence, and calibration.

### Do not create a separate universal “World Model domain”

This is AI-substrate, Reactor, digital-twin, runtime, and domain-resolution machinery composed through existing OMNI physics.

---

## Do-not-miss lesson

**This source makes the consequence-prediction problem concrete. The difficulty of an acting system is not just understanding a large world. It is choosing among a combinatorial action space, predicting how the environment and other actors will respond, doing so before the decision deadline, and recognizing when the predictive representation is incomplete or outside its evidence.**

OMNI should therefore not build “a world model” as one grand universal simulator.

It should support purpose-specific, versioned, uncertainty-bearing predictive models inside governed runtime profiles.

Those models may:

* compare candidate actions;
* simulate near-term consequences;
* identify unsafe states;
* narrow the action set;
* and recommend the next bounded step.

They may not:

* declare the future;
* create authority;
* replace observation;
* silently mutate policy;
* or actuate the world merely because the simulated trajectory looked favorable.

---

## Lightweight tiering

| Concept                                       | stale-vs-current OMNI            |               weight tier | status                       |
| --------------------------------------------- | -------------------------------- | ------------------------: | ---------------------------- |
| Action-conditioned world model                | `AFFIRM`                         |              AI substrate | promote                      |
| Consequence prediction before action          | `AFFIRM`                         |           spine / Reactor | promote                      |
| Predicted state as candidate                  | `PARTIAL / important sharpening` |                  contract | promote                      |
| Receding-horizon planning                     | `AFFIRM / sharpened`             |                   runtime | promote                      |
| Full long-horizon plan as committed future    | `direct conflict`                |                 guardrail | reject                       |
| Sample efficiency as high-stakes concern      | `PARTIAL`                        |     strategy / evaluation | promote                      |
| Synthetic rollouts for testing                | `AFFIRM`                         |                       E&V | promote                      |
| Synthetic rollout as real evidence            | `direct conflict`                |                 guardrail | reject                       |
| Model-free routine policy                     | `PARTIAL`                        |                   runtime | retain                       |
| Model-based deliberative planning             | `PARTIAL`                        |         runtime / Reactor | promote                      |
| Fast versus deliberative routing              | `PARTIAL / strong Reactor fit`   |              architecture | promote                      |
| Flat exposure of all possible actions         | `direct conflict`                |                 guardrail | reject                       |
| Action-space projection                       | `AFFIRM / sharpened`             |                   runtime | promote                      |
| Hierarchical goal/subgoal/action planning     | `AFFIRM`                         |               CNS/runtime | promote                      |
| Planning horizon and rollout budget           | `PARTIAL`                        |          runtime contract | promote                      |
| World-model confidence as authority           | `direct conflict`                |                 guardrail | reject                       |
| Environment/embodiment applicability          | `PARTIAL / strong sharpening`    |          model governance | promote                      |
| Transfer without local evidence               | `direct conflict`                |                 guardrail | reject                       |
| Sensor coverage / observation gap             | `PARTIAL`                        |       observation/runtime | promote                      |
| Latent state replacing source evidence        | `direct conflict`                |                 guardrail | reject                       |
| Digital twin as partial predictive projection | `AFFIRM`                         |            P31 / Research | promote                      |
| Digital twin as literal system truth          | `direct conflict`                |                 guardrail | reject                       |
| Online state adaptation                       | `AFFIRM`                         |                   runtime | promote                      |
| Unversioned online policy mutation            | `direct conflict`                |                 guardrail | reject                       |
| Model lineage in action lineage               | `PARTIAL`                        |          Platform / proof | promote                      |
| World-model recall and reassessment           | `PARTIAL`                        | Platform / Accountability | investigate → likely promote |
| World models as necessary path to AGI         | `unresolved research claim`      |              future-watch | watch                        |
| Brain/sleep analogy as architecture doctrine  | `unsupported`                    |                     no-op | reject                       |

---

## 5. Hard read

**Verdict:** `full_semantic`, 4.5/5, heavily deduplicated against the existing world-model cluster.

This source does not overturn the earlier JEPA and world-model reads.

It makes them more operationally legible.

The earlier sources established:

* modality-native latent representations;
* action-conditioned state prediction;
* candidate-action scoring;
* explicit planning;
* hierarchical subgoals;
* and receding-horizon control.

This source explains why those mechanisms are necessary and why they remain hard:

* real action spaces explode;
* other actors respond;
* the environment changes;
* simulation is expensive;
* sensor coverage is incomplete;
* learned models fail outside their data distribution;
* policies do not transfer cleanly across embodiments;
* and planning may be too slow for the moment of action.

The strongest OMNI implication is a risk-adaptive composition:

`current governed state`
`→ Reactor selects routine or deliberative path`
`→ admissible candidate-action set`
`→ predicted near-term consequences`
`→ hard constraint and authority checks`
`→ governed resolution`
`→ execute one bounded step`
`→ observe actual result`
`→ calibrate and replan`

This is not merely an AI pattern.

It is a possible deepening of how OMNI carries care, business, platform, and physical work through uncertainty.

The system should become better at asking:

* What state are we actually in?
* What state might this action create?
* Which assumptions support that prediction?
* How far ahead is the model trustworthy?
* What information is missing?
* Which actions are even admissible?
* Who owns the decision?
* What is the smallest next step?
* What actually happened afterward?
* Did the predictive model deserve the trust placed in it?

The source’s most important correction to naive autonomy is simple:

> **The ability to imagine a future is not the ability to authorize it, and the ability to plan through a simulator is not proof that the world will cooperate.**

**Strongest OMNI line:**

> **Predict broadly, authorize narrowly, act incrementally, and let observed reality—not the model—close the loop.**


&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

Interesting! This is our first y combinator source and i think i like it!

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-19` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Method note:** formalizes Knox Review 001 (`full_semantic`, 4.5/5, heavily deduplicated against the existing world-model cluster), verified against the §1 full timestamped transcript. This is the corpus's first Y Combinator source; it does NOT overturn the earlier JEPA/world-model reads (EVSRC-124/180/182) — it makes the consequence-prediction problem **operationally legible** and supplies strong **Reactor** (fast-vs-deliberative selection) and **Physical Automation / Device Link** pressure. `build_status` grounded by run brief: repo has NO world-model runtime, planner, digital-twin engine, model-gateway, or device-link — so nearly every cluster is `doctrine=AFFIRM/PARTIAL × build=absent`; a few observation/evidence primitives are `partial`. PROPOSE-ONLY (`GRD-036`); nothing minted, no contract/thesis edited. Knox's own instruction is honored: **do not create a universal "World Model domain"** — this is AI-substrate + Reactor + digital-twin + runtime + domain-resolution composed through existing OMNI physics. Anchors carry real transcript timestamps where a verbatim line was located; chapter-title anchors (verbatim §1 headings) and `[Knox §X]` loci are used where Knox synthesized across the dialogue.

### Cluster table

| # | concept | OMNI meaning | homes | anchor | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| A | **Sample efficiency (intelligence-per-sample) is a strategic property, not a training metric** | In high-consequence domains real mistakes are expensive training data (rare adverse events, unusual interactions, new operational failures, low-volume specialty, emerging regulation, new operator configs); OMNI must improve from SPARSE evidence without pretending one case is universal truth (cross-operator learning w/ boundaries, simulation, historical replay, mechanistic constraints, expert rules, analogical retrieval, synthetic test generation, explicit uncertainty) | thesis strategy/eval · Platform Loop (learning) · Care (rare events) · Reactor | "intelligence per watt and intelligence per sample" [0:52] | PARTIAL × build=absent | strategy/eval | promote |
| B | **"Perfect sample efficiency" exists only in bounded, sufficiently-law-governed domains → seek bounded predictive sufficiency** | Newtonian/NASA-asteroid prediction is a near-perfect world model precisely because the dynamics are known; it does NOT generalize to clinical care, human organizations, markets, adherence, provider judgment, multi-actor institutions (hidden state, changing incentives, non-stationarity, incomplete observation, social response, interventions that alter future behavior); OMNI seeks bounded predictive sufficiency, not omniscient simulation | thesis §B (AI substrate) · Reactor · Care Operating Model | "perfect sample efficiency would be zero samples" [2:36]; "an example of a perfect world model" [3:21] | PARTIAL × build=absent | strategy | promote |
| C | **A world model = an action-conditioned transition model (`current state + proposed action → predicted next state`)** | More useful than generic forecasting: it supports counterfactual comparison, planning, safety analysis, trade-off evaluation ("if plan continues, risk rises; if intervention A, these state changes; if B, different obligations/risks"); the OMNI form = `governed current-state projection + candidate action + environmental assumptions → predicted next-state candidate` (model-derived, uncertainty-bearing, time-bounded, non-authoritative) | thesis §B (AI substrate) · Reactor · Care/BIZOPS world models | "this is a world model… equivalent to transition function" [~13:40]; "Newtonian physics… F= MA" [~14:40] | AFFIRM × build=absent | AI-substrate/spine | promote |
| D | **Predicted-state candidates are NOT future-dated facts (evidence-class separation)** | A prediction must never enter the record as if it occurred; OMNI preserves distinct classes: `observed_current_state` · `predicted_state_candidate` · `counterfactual_state_candidate` · `committed_plan` · `authorized_action` · `actual_occurrence` · `observed_outcome` — this is **candidate ≠ commit** and **projection ≠ authority** applied to prediction | thesis (candidate≠commit) · Care Operating Model · REV-184 · D7/Observation | "A predicted future is a planning artifact, not a future-dated fact" [Knox §D] | PARTIAL / important sharpening × build=absent | contract/spine | promote |
| E | **The ACTION SPACE (not state size) is often the real source of intractability** | Chess→Go→driving→robotics separates state-space size, action-space size, environmental uncertainty, planning latency; a care/business agent with thousands of tools + communications + orders + scheduling + escalations + pricing paths exposed as ONE flat action space is architectural failure — capability abundance without action-space governance makes planning LESS reliable | Agent Runtime (action-space governance) · Reactor · CNS | "36,000 action space is very large" [41:11]; ch. "Chess, Go & the action space problem" | AFFIRM × build=absent | runtime/spine | promote |
| F | **Capability projection = action-space reduction (least privilege is ALSO a planning optimization)** | Projecting tools/skills by actor/task/operator/domain/environment/risk/authority/availability narrows the admissible action set BEFORE the model reasons — reducing planning complexity, error opportunity, cost, and making consequence prediction + evaluation more tractable | Agent Runtime (capability projection) · RBAC · capability_envelope | "Least privilege is also a planning optimization" [Knox §F] | AFFIRM / sharpened × build=partial (`requireCapability`) | runtime | promote |
| G | **Hierarchical action spaces are required (goal → subgoal → workflow → bounded domain action → deterministic command → occurrence)** | Do not ask one reasoning process to choose among every low-level platform op; each layer uses a different model/policy/authority/action-space/horizon (e.g. resolve-med-access → clinical-review-needed? → authorized order state → eligible pharmacies → fulfillment route → bounded command → observe accept/reject/partial) — high-level intelligence chooses bounded subgoals; deterministic systems execute lowest-level mechanics | CNS (orchestration) · Agent Runtime · Care/commerce workflows | "High-level intelligence should choose bounded subgoals" [Knox §G] | AFFIRM × build=absent | CNS/runtime | promote |
| H | **Model-free and model-based control should COMPOSE (habitual execution + deliberative planning)** | `state → action` (model-free) for frequent/familiar/low-latency/broad-coverage/bounded-consequence; `state + actions → predicted futures → selected action` (model-based) for novel/high-cost/conflicting-goals/explanation-requiring cases; OMNI uses deterministic policy for known invariants, learned policy for routine bounded decisions, explicit planning for consequential cases, human/domain resolution where authority/ambiguity remains | Agent Runtime · Reactor · Care authority | ch. "Model-Free vs. Model-Based RL"; "model free just means my policy" [~44:00] | PARTIAL × build=absent | runtime | promote (model-based) / retain (model-free) |
| I | **Reactor is the selector between fast and deliberative paths (risk-adaptive deliberation, ONE substrate)** | `state + action class + uncertainty + consequence → fast bounded policy | explicit counterfactual planning | human/domain resolution` — Reactor decides routine-lane vs consequence-prediction-required vs more-context vs slower-model vs more-candidates vs human intervention; must NOT fork into two separate OMNI systems; spend planning depth in proportion to novelty/uncertainty/consequence | **OMNI Reactor** · Agent Runtime · CNS | "Spend planning depth in proportion to uncertainty, novelty, and consequence" [Knox §I] | PARTIAL / strong Reactor fit × build=absent (Reactor frozen/unpromoted) | architecture/spine | promote |
| J | **Receding-horizon planning: commit the next bounded step, retain distant futures as revisable projections (with declared horizon, uncertainty, and governed rollout budget)** | Rarely execute a long plan as if the future were fixed: approve current bounded action, preserve longer plan as projection, define next observation point, re-resolve after new evidence. Every world-model output carries prediction horizon + confidence + uncertainty-growth + assumptions + boundary conditions + required re-observation point. Rollout depth is an economic + safety budget (max candidate actions / rollout depth / model invocations / latency deadline / cost ceiling / stop conditions) — and a **late optimum can be worse than a timely safe bounded action** | OMNI Reactor · Agent Runtime (rollout budget/horizon) · Platform Loop (cost/latency) | "Commit the next authorized step; retain the distant plan as revisable intent" [Knox §J]; "A prediction without a declared horizon invites… trust it too far" [Knox §K] | AFFIRM / sharpened × build=absent | runtime contract/spine | promote |
| K | **The world changes while planning occurs → revalidate before consequential execution** | Formal planners assume a stable environment; OMNI's does not (patient deteriorates, another clinician acts, appointment taken, pharmacy rejects, deployment rolls back, law changes, consent withdrawn) — longer planning increases the risk that the plan's initial state is stale | Agent Runtime (state revalidation) · Reactor · Care | "The planner must revalidate the world before consequential execution" [Knox §N] | PARTIAL × build=absent | runtime | promote |
| L | **Other actors make the environment interactive AND reflexive (the model's output can become part of the world it predicts)** | An action changes what other actors do (patient responds to messaging, provider changes after an alert, payer changes after evidence, staff works around a workflow, external agent changes belief, vendor changes availability); in reflexive systems a risk score alters clinician attention, a forecast changes staffing, a recommendation changes patient behavior — OMNI must monitor intervention effects and not assume pre-intervention relationships still hold | Care Operating Model · BIZOPS (demand/staffing) · Reactor · Accountability Loop | "the model's output can become part of the world it is trying to predict" [Knox §P] | PARTIAL × build=absent | care/bizops | promote |
| M | **Synthetic rollouts reduce real exploration but are NOT observed evidence — and a policy can overfit the simulator's own blind spots** | Imagined trajectories support policy training / rare-case generation / safety testing / adversarial scenarios / regression / pre-release eval (simulate broadly before acting narrowly) when real experimentation is costly/dangerous/slow/unethical; BUT treating synthetic patients/outcomes/tool-trajectories as evidence the world behaves accordingly is the danger — a policy trained inside an inaccurate world model becomes "perfectly adapted to the simulator's mistakes"; keep evidence classes distinct: `observed_evidence · historical_replay · simulated_scenario · synthetic_training_example · counterfactual_rollout · expert-authored_case` | Platform Loop / E&V (synthetic suites) · Evidence Plane (evidence classes) · guardrail | ch. "World models that actually work"; "Synthetic scenarios test… reasoning; they do not prove real-world efficacy" [Knox §R/§S] | AFFIRM (as E&V) / direct-conflict-if-conflated (as evidence) × build=absent | E&V + guardrail | promote (+guardrail) |
| N | **World-model trust must be calibrated against ACTUAL outcomes (`actual_vs_predicted` receipt)** | Compare predicted vs observed next-state and retain prediction error + direction + subgroup + environment + action + horizon + downstream consequence → calibration, drift detection, model retirement, improved routing; the model should know when it is outside reliable coverage | Platform Loop (calibration/drift) · Accountability Loop (proof) · REV-184 (world-model honesty) | "A world model earns trust by surviving repeated comparison with what actually happened" [Knox §T] | PARTIAL × build=absent | Platform/proof | promote |
| O | **Out-of-distribution states are the central danger (the "house becomes a road" failure)** | A driving model trained on roads may convert a house into a plausible road-like future rather than recognize catastrophe — it follows the training distribution, not physical reality; OMNI analogues: assuming an unusual patient follows the common pathway, treating an unrecognized complication as ordinary recovery, reading an absent record as an absent event, assuming a new operator behaves like an existing one, forecasting a failed fulfillment step as successful | Reactor (OOD detection) · Care · guardrail | ch. "When physics breaks down"; "A plausible familiar future can be dangerously wrong" [Knox §U] | direct-conflict-if-ignored × build=absent | spine-guardrail | promote |
| P | **Hard constraints must sit OUTSIDE learned prediction** | A learned model may RANK admissible actions; it must NOT be the only system enforcing dosage ceilings, contraindications, identity, consent, authority, financial limits, security boundaries, prohibited actions, or device safety ranges — those are deterministic constraints / domain rules / safety envelopes / authorization gates | thesis §B · Care (deterministic safety) · security · Reactor | "Learned prediction may rank admissible actions; it must not define the hard boundary" [Knox §V] | AFFIRM × build=partial (`requireCapability`/disclosure evaluator) | spine-guardrail | promote |
| Q | **The reward/value function is a governance object; safety is a constraint, not a negative reward; multi-objective planning must preserve trade-offs** | Deciding what counts as reward (patient outcome vs preference vs safety vs clinician burden vs speed vs operator cost vs revenue vs retention vs throughput vs liability) is never neutral and these conflict; a system optimizing one scalar sacrifices everything unencoded; catastrophic states should be inadmissible (prohibited states / mandatory review / hard floors / lexicographic priority / constrained optimization), NOT merely expensive; preserve objective dimensions + weights/precedence + decision owner + uncertainty + why-selected rather than hiding the conflict in one opaque score | thesis §8 (authority) · Care (whose-outcomes-matter) · REV-184 · governance | "The objective function is a policy decision about whose outcomes matter" [Knox §W]; "some boundaries may not be bargained away" [Knox §X] | AFFIRM × build=absent | spine | promote |
| R | **State representation bounds what the model can understand; latent compression is necessary AND dangerous; preserve modality-native evidence** | A world model reasons over a REPRESENTATION of reality — if the representation omits a symptom / preference / device calibration / provider authority / med history / payment failure / uncertainty, the transition model cannot recover it; JEPA-style latent compression improves efficiency/generalization but discards rare safety signals / identity / provenance / fairness-detail / explanation-evidence; video/imaging/waveform/sensor/procedure-video/speech-timing/document-layout must retain modality-native form — a language summary is a lossy projection | Knowledge Reservoirs / D7 · Clinical Memory · Evidence Plane · projection≠authority | ch. "JEPA & latent space tricks"; "A compact state can support planning without being sufficient for audit, authority, or truth" [Knox §AA]; "Verbalization… must not become a lossy replacement" [Knox §AB] | AFFIRM / sharpen (supports source→claim→observation→assertion→commitment→occurrence→outcome separation) × build=partial (observations exist) | reservoir/observation | promote |
| S | **Sensor completeness can dominate model intelligence; an observation gap is not reasoning debt; `not observed` ≠ `observed absent`** | A robot with sparse tactile/friction/temperature sensing cannot control reliably even with an excellent policy; OMNI analogues: no confirmation a patient took a med, no visibility a message was understood, no pharmacy receipt, no device-health signal, no current lab value — the correct response is ask/measure/verify/escalate/abstain, NOT hallucinate the missing state; and `no reported adverse event` ≠ `no adverse event` — **silence is not a negative measurement** | D7/Observation · Care · Agent Runtime (abstain/escalate) | ch. "Why robotics is the hardest case"; "Missing feedback is not intelligence debt; it is an observation gap" [Knox §AC]; "Silence is not a negative measurement" [Knox §AD] | PARTIAL × build=partial (observations) | observation/spine | promote |
| T | **Cross-embodiment failure maps directly to operator/device/environment/population variation; portability is an empirical claim, not a file-format property** | A policy for a Tesla Model X fails on a Model 3 (mass/geometry/sensors/dynamics differ); OMNI "embodiment" = specific device / care setting / operator / staffing model / jurisdiction / workflow / patient population / external partner — a pathway proven in an academic hospital may fail in a rural clinic; a model needs an environment/embodiment profile declaring where it has evidence, and deployment into a new environment may require recalibration / shadow operation / local eval / lower autonomy / prohibition | Federation (operator variation) · Platform Loop (env-specific release) · model governance · Care | "cross embodiment gap… put it on a Tesla Model 3 it wouldn't work" [47:31]; "Model portability is an empirical claim about environments" [Knox §AF] | PARTIAL / strong sharpening × build=absent | model governance/Federation | promote |
| U | **Adaptation must not happen through uncontrolled self-editing: online STATE estimation ≠ online POLICY mutation; durable change is a governed (offline) learning cycle; biology inspires, it does not specify** | A controller may update its estimate of current friction/load/response-rate/risk/device-drift/patient-state WITHOUT changing the policy model; a care/business agent must NOT silently retrain itself into a new operating policy during one live interaction — durable changes to policy/model/memory/capability are Platform Loop events (`traces+outcomes → selected corpus → eval/replay → candidate change → validation → release`); the sleep/consolidation analogy maps to this offline loop, not to unrestricted online self-improvement, and neuroscience is inspiration, not architecture spec | Platform Loop (governed learning) · Agent Runtime (run-local estimate) · REV-184 (non-action-as-commit) · candidate≠commit | ch. "Open problems remaining"; "Adapt the estimate immediately; govern durable behavioral change separately" [Knox §AG]; "A changing state estimate does not require an unversioned change in decision policy" [Knox §AH] | AFFIRM × build=absent | runtime/Platform | promote |
| V | **A digital twin is a partial, scoped, versioned, uncertainty-bearing predictive PROJECTION — not a duplicate reality; different decisions need different world models; model disagreement is useful evidence** | "World model" must not inflate into "digital twin = the patient/hospital/operator/world"; a twin is purpose-specific, time-bounded, derived from incomplete evidence; OMNI may need distinct predictive models for deterioration / fulfillment / scheduling / workload / communication / cash-flow / capacity / device behavior / research — each differing in state variables, horizon, confidence, objective, evidence, authority; when models disagree, preserve identity/assumptions/predicted-state/confidence/disagreement and investigate rather than average away | Research / Digital Twin (P31) · Care · projection≠authority | "A twin is a governed predictive projection of selected state, not a duplicate reality" [Knox §AK]; "Disagreement among predicted futures is a reason to investigate" [Knox §AM] | AFFIRM × build=absent | P31/Research | promote |
| W | **Evaluate prediction at the ACTION boundary; world-model quality is a profile, not one score; model lineage ∈ action lineage; model defects create downstream reassessment obligations** | The relevant predictive error is the error that CHANGES what the system does (did it preserve correct ordering among candidate actions? identify prohibited outcomes? calibrate uncertainty near the decision boundary? stay safe under shift?); evaluate by horizon / rollout-drift / constraint-violations / rare-event recall / calibration / counterfactual ranking / action-selection regret / latency / cost / transfer / subgroup / recovery — one aggregate benchmark cannot establish operational fitness. If a world model influenced an authorized action, the action record preserves model version + state-rep version + input evidence + candidates considered + predicted outcomes + constraints + uncertainty + planner version + resolving authority — so a later model defect can identify affected decisions/actors/patients and drive rerun / reassess / reopen-care / notify / policy-change / runtime-profile recall | Platform Loop (eval profile / recall) · Accountability Loop (lineage) · REV-184 (outcome-reads-frozen-context) | "The relevant predictive error is the error that changes what the system does" [Knox §AN]; "A prediction that influenced action becomes part of the action's evidentiary lineage" [Knox §AP] | PARTIAL (recall = investigate→likely promote) × build=absent | Platform/Accountability | promote |
| X | **Physical systems need command-boundary architecture + short open-loop horizons; a predicted-safe action is not permission to actuate** | OMNI may observe / model / propose / authorize / transmit / record; the device or embedded controller performs actuation; access modes stay explicit (`read_only · simulate_only · recommend · human_confirmed_command · bounded_control · prohibited`); high-consequence physical/financial work acts in small bounded increments, observes device+environment state, verifies expected response, and stops on divergence — the higher the consequence, the shorter the safe open-loop horizon | Physical Automation / Device Link · Care (devices) · commerce/remediation · Reactor | "A predicted safe action is not permission to actuate the device" [Knox §AR]; "the higher the physical or financial consequence, the shorter the safe open-loop horizon" [Knox §AS] | AFFIRM (existing physical-link doctrine) × build=absent | Physical Automation/spine | promote |
| Y | **Prediction informs governed resolution; it never resolves authority (AI is never care authority)** | World models can answer what-may-happen / which-option-appears-safer / which-state-is-closer-to-goal / which-risk-may-rise; they CANNOT alone answer who-may-decide / whose-preference-governs / which-legal-or-clinical-rule-applies / whether-consent-exists / whether-the-action-is-allowed / whether-predicted-benefit-justifies-burden — the ability to imagine a future is not the ability to authorize it | thesis §8 (authority gates) · Care · REV-184 · CNS-orchestrates-not-owns | "Prediction informs resolution; it does not resolve authority" [Knox §AT] | AFFIRM × build=absent | spine | promote |

### Net-new primitive dispositions (EVERY Knox candidate dispositioned; net-new DOMAIN objects = 0)
Knox listed ~35 candidate names and stated "all names require deduplication against existing world-model, simulation, Reactor, and digital-twin concepts… most should extend existing." Dedup vs baseline (EVSRC-124/180/182 world-model cluster, Reactor candidate, digital-twin, capability projection, candidate≠commit, one-owner-per-fact, REV-184; wave-6 registry §2 conv.1/2/5/6):
- **dedup-as-EXISTS → world-model/AI-substrate cluster (EVSRC-124/180/182):** `world_model_profile`, `world_model_scope`, `state_representation_profile`, `transition_model_version`, `policy_profile`, `value_objective_profile` → extend existing action-conditioned-world-model + representation-learning concepts (sharpenings); `interaction_model` → reflexive/other-actor sharpening (cluster L).
- **dedup-as-EXISTS → candidate≠commit / evidence classes:** `predicted_state_candidate`, `counterfactual_state_candidate`, `counterfactual_rollout` → candidate≠commit applied to prediction + D7/Observation evidence classes (cluster D) [EXISTS-AS candidate≠commit]; `synthetic_evidence_class`, `simulated_scenario` → Evidence Plane evidence-class taxonomy (sharpening; pairs w/ registry conv.6 chat/index≠truth) — **route INVESTIGATE (evidence lane)**.
- **dedup-as-EXISTS → Reactor / Agent Runtime:** `planning_run`, `planning_horizon`, `rollout_budget`, `receding_horizon_plan`, `action_space_projection`, `candidate_action_set`, `fast_policy_route`, `deliberative_planning_route`, `prediction_confidence_state`, `prediction_assumption_set` → Reactor risk-adaptive-deliberation + Agent Runtime rollout/horizon contract (sharpenings; the fast-vs-deliberative router is the strongest Reactor fit); `hard_constraint_envelope` → existing deterministic-safety/authority-gate doctrine (cluster P).
- **dedup-as-EXISTS → Platform Loop / Accountability / model governance:** `actual_vs_predicted_receipt`, `prediction_error_record`, `world_model_trust_state`, `world_model_drift` → Platform calibration/drift + REV-184 world-model-honesty (sharpening) — **route INVESTIGATE (calibration receipt)**; `world_model_recall` → Platform/Accountability recall + reassessment obligation (Knox: investigate→likely promote) — **route INVESTIGATE**; `model_environment_profile`, `embodiment_profile`, `environment_transfer_evidence` → Federation operator-variation + model-governance env-applicability (sharpening) — **route INVESTIGATE (environment/embodiment applicability)**.
- **dedup-as-EXISTS → Observation / Device Link:** `sensor_coverage_state`, `observation_gap` → D7/Observation (not-observed ≠ observed-absent) [EXISTS-AS registry conv.6 + observation build-partial].
- **INVESTIGATE-lane candidates (route to owning home's watch; NOT minted):** (1) `embodiment_profile` / `model_environment_profile` — environment/embodiment applicability boundary (Federation + model governance); (2) `actual_vs_predicted_receipt` / calibration+drift record (Platform Loop + REV-184); (3) `synthetic_evidence_class` — the observed/historical/simulated/synthetic/counterfactual/expert-authored evidence taxonomy (Evidence Plane); (4) fast-vs-deliberative Reactor routing (Reactor design, when unfrozen); (5) `world_model_recall` → downstream reassessment obligation (Platform/Accountability). Reviewer decides distinct-vs-compose.
- **net-new DOMAIN objects: 0.** No universal "World Model domain" (Knox explicit). No sleep/cortex biology adopted as architecture. Retired terms not re-minted (`EVRUN-000004 §0.5`); D0OL-GRD-001..008 not re-minted as primitives.

### Counterweights / what-NOT-to-import (EVERY Knox caution PRESERVED or rejected-with-reason; NEVER inverted)
Knox's "What not to import blindly" (21 cautions) — all preserved:
1. **Do NOT canonize "world models are required for AGI"** — plausible influential research thesis, not settled architecture. [kept — future-watch]
2. **Do NOT treat neuroscience analogies as implementation proof** — cortex/sleep/imagination/motor-control inspire mechanisms, not machine equivalents. [kept — U]
3. **Do NOT infer that internal simulation eliminates real-world testing** — the simulator may be wrong precisely in rare consequential states. [kept — M]
4. **Do NOT treat imagined rollouts as clinical/business/physical evidence** — they belong to simulation + evaluation. [kept — M]
5. **Do NOT deploy a policy trained primarily in one model-generated world without observed-world challenge** — synthetic scale magnifies simulator bias. [kept — M]
6. **Do NOT treat "perfect sample efficiency" as a realistic target for human systems** — patient/org/market behavior is not Newtonian. [kept — B]
7. **Do NOT expose every possible tool to improve flexibility** — a larger action space increases planning difficulty + risk. [kept — E]
8. **Do NOT flatten care, business, and physical actions into one shared reward** — objectives and authorities differ. [kept — Q]
9. **Do NOT let revenue/throughput quietly dominate the value function** — protected care + authority constraints remain superior. [kept — Q, CARE]
10. **Do NOT use a scalar reward to hide hard safety limits** — catastrophic states should be inadmissible, not merely expensive. [kept — Q/P]
11. **Do NOT treat model-predictive control as permission for long autonomous sequences** — execute bounded increments and re-observe. [kept — J/X]
12. **Do NOT assume a model trained in one operator/device/specialty/population transfers safely** — require applicability evidence. [kept — T]
13. **Do NOT let a model adapt its durable policy invisibly during a live high-consequence case** — run-local adaptation ≠ released policy change. [kept — U]
14. **Do NOT infer current state from missing telemetry** — unobserved state remains uncertain. [kept — S]
15. **Do NOT treat richer reasoning as a substitute for better sensing** — some uncertainty is only resolvable through new observation. [kept — S]
16. **Do NOT make the digital twin canonical truth** — the twin remains a model-derived projection. [kept — V]
17. **Do NOT allow the prediction model to authorize the action it recommends** — authority remains external. [kept — Y]
18. **Do NOT use world-model confidence as a substitute for consent / professional judgment / policy / evidence** — different constraints. [kept — Y]
19. **Do NOT let test-time planning violate latency requirements** — the runtime must have a safe fallback. [kept — J]
20. **Do NOT treat one aggregate benchmark as proof of planning fitness** — evaluate by horizon/environment/action/consequence/calibration. [kept — W]
21. **Do NOT create a separate universal "World Model domain"** — it is AI-substrate + Reactor + digital-twin + runtime + domain-resolution composed through existing physics. [kept — Method note + net-new §]
- **REJECT-as-OMNI-doctrine (mechanism kept, claim not canonized — `GRD-043`):** "world models required for AGI" (research claim → future-watch); neocortex-primarily-world-modeler + sleep≈a specific ML optimization loop (biology as inspiration only); near-term household robotics; one-current-architecture-inevitably-succeeds-transformers; "perfect sample efficiency" as a human-systems target; synthetic-rollout-as-real-evidence; digital-twin-as-literal-truth; world-model-confidence-as-authority. (Recorded, not silently dropped.)

### Care implications (NOT swept by "0 net-new")
- **Consequence prediction is a care-safety mechanism, but never care authority:** the action-conditioned form ("if intervention A → these state changes/risks/obligations") is exactly the counterfactual care reasoning OMNI wants — provided predicted-state stays a candidate (cluster D), hard clinical constraints sit outside the model (P), and the clinician/owning-domain commits (Y).
- **OOD is the sharpest care hazard (cluster O):** "the unusual patient follows the common pathway" / "absent record = absent event" / "no response = adherence" are the clinical forms of the house-becomes-a-road failure; Reactor OOD-detection + abstain/escalate (S) is the care-safe response.
- **`not observed ≠ observed absent`** is a first-order clinical-memory rule (S): OMNI must preserve "not measured" distinct from "measured negative" (no med-taken confirmation, no lab value, no pharmacy receipt).
- **Reward-as-governance-object (Q)** protects care from silent revenue/throughput optimization — whose-outcomes-matter is a policy decision with a named owner, not a scalar buried in a planner.
- **Sample efficiency (A)** matters most for rare adverse events + low-volume specialty care where real mistakes are the expensive training data — motivates bounded/simulated/expert-constrained learning under uncertainty, never one-case-as-truth.

### Candidate guardrails → `08` (gated, `user_knox_required`; dedup noted)
- **G-cand-1:** *A predicted / counterfactual / synthetic / simulated future is a planning artifact and must never enter the record as an observed fact or as real-world evidence* [dedup vs candidate≠commit + registry conv.6 chat/index≠truth].
- **G-cand-2:** *Capability abundance without action-space governance makes intelligent planning less reliable, not more; project the admissible action set before the model reasons* (least-privilege = planning optimization) [dedup vs capability_envelope].
- **G-cand-3:** *Commit the next authorized bounded step and revalidate the world before consequential execution; never execute a long imagined rollout as a committed future* (receding-horizon + stale-state revalidation).
- **G-cand-4:** *Hard safety / authority / consent / identity boundaries sit OUTSIDE learned prediction; a learned model may rank admissible actions but must not define the boundary of admissibility, nor authorize the action it recommends* [dedup vs AI-never-care-authority + REV-184].
- **G-cand-5:** *A plausible familiar future can be dangerously wrong when the current state is out-of-distribution; missing feedback is an observation gap (ask/measure/verify/escalate/abstain), and silence is not a negative measurement.*
- **G-cand-6:** *Similar tasks do not imply interchangeable devices/operators/populations/environments; model portability requires environment-specific evidence, and a predicted-safe action is not permission to actuate.*
- **G-cand-7:** *Adapt the state estimate immediately, but govern durable policy/model/memory change through the offline release loop; no unversioned online policy mutation during a live high-consequence case* [dedup vs REV-184 non-action-as-commit + candidate≠commit].

### Reread flags
- Clusters I/J (Reactor as fast-vs-deliberative selector + receding-horizon + rollout budget) are the **strongest Reactor design pressure in the wave** — reopen when Reactor is unfrozen (currently frozen/unpromoted); pairs with 283 (consequence→control floor) + 284 (model selection/observation) + 285 (`certified_variation_envelope`).
- Cluster T (`embodiment_profile` / environment applicability) → reopen with Federation operator-variation + model governance; direct sibling to autonomous-driving cross-embodiment.
- Clusters M/N/W (synthetic-evidence classification + calibration receipt + model-recall→reassessment) → feed Platform Loop / E&V + Evidence Plane evidence-class taxonomy + Accountability lineage; pairs with 284 `model_internal_telemetry` evidence-lane.
- This source is DEPTH INPUT to the world-model / Reactor / digital-twin / Physical-Automation maps — NOT license to build a world-model runtime pre-spine.

### One-line hard read
`full_semantic`, 4.5/5, **0 net-new domain objects + 5 INVESTIGATE sharpenings (`embodiment_profile`, `actual_vs_predicted` calibration receipt, `synthetic_evidence_class`, fast-vs-deliberative Reactor routing, `world_model_recall`)** — the first YC source makes consequence-prediction concrete without overturning the JEPA/world-model cluster; keeper: **predict broadly, authorize narrowly, act incrementally, and let observed reality — not the model — close the loop** — i.e. OMNI should not build "a world model" as one grand universal simulator but support purpose-specific, versioned, uncertainty-bearing predictive models inside governed runtime profiles that may compare/simulate/narrow/recommend a next bounded step, and may NOT declare the future, create authority, replace observation, silently mutate policy, or actuate the world because a simulated trajectory looked favorable.

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `OMNI Reactor (fast-vs-deliberative selector; frozen) · Agent Runtime & Harness (action-space/horizon/rollout budget) · Physical Automation / Device Link (command boundary) · Care Operating Model (predicted≠observed, OOD, reward-as-governance) · Platform Loop / E&V (calibration/drift/recall, synthetic suites) · Knowledge Reservoirs / D7 / Observation · Federation / model-governance (embodiment applicability) · Research / Digital Twin (P31)` · promotion: `watch` (7 guardrail candidates + 5 INVESTIGATE sharpenings → `08`; net-new domain objects 0)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold; `EVRUN-2026-000011`).
- `2026-07-19` — PROCESSED (Review 003): slug firmed (SUGGESTION only — not renamed); §0/§0.1 filled from Knox Review 001 metadata (no screenshot → `inferred`; first YC source; two speakers Ankit+François, surnames not established); §3 Review 003 written (25 clusters, **0 net-new domain objects + 5 INVESTIGATE sharpenings** `embodiment_profile` / `actual_vs_predicted` receipt / `synthetic_evidence_class` / fast-vs-deliberative Reactor routing / `world_model_recall`, 21 counterweights preserved, 7 guardrail candidates → 08); §4 filled. `raw_dropped → analyzed`; awaiting 2nd-reader fidelity sign-off.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

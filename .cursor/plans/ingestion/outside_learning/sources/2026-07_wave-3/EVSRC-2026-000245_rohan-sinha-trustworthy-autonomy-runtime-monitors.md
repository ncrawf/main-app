# EVSRC-2026-000245 — Stanford Robotics Seminar | Towards Trustworthy Autonomy (Rohan Sinha)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000245_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(lifted verbatim from operator metadata at top of §3 Review 001 — `identity_confidence: high_from_operator_metadata`)*
- evsrc_id: `EVSRC-2026-000245`  ·  filename (proposed slug; file NOT renamed): `EVSRC-2026-000245_rohan-sinha-trustworthy-autonomy-runtime-monitors.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=NiRXiuWwrps`  ·  source_title: `Stanford Robotics Seminar ENGR319 | Spring 2026 | Towards Trustworthy Autonomy`
- channel_or_org: `Stanford Online`  ·  speaker: `Rohan Sinha, Stanford Autonomous Systems Lab`  ·  published_at: `Jul 7, 2026` (seminar_date: `May 15, 2026`)
- captured_at: `2026-07-08`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + pasted transcript`
- content_type: `robotics autonomy / runtime monitors / semantic safety / OOD detection / fast-slow reasoning / safety interventions / deployment data flywheel / data attribution / influence functions / guardrails for learning-enabled systems`  ·  source_reliability_context: `academic` (primary Stanford Robotics / Autonomous Systems Lab seminar)  ·  topic_tags_light: `[trustworthy_autonomy, runtime_monitors, semantic_safety, semantic_anomalies, OOD_detection, unknown_unknowns, fast_slow_reasoning, recovery_sets, safety_intervention, deployment_data_flywheel, data_attribution, influence_functions, CUPID, data_curation, guardrails]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Rohan Sinha` · role_in_source: `speaker / presenter` · affiliation_at_publication: `Stanford Autonomous Systems Lab (ASL)` · speaker_type: `researcher` (robotics PhD, autonomy/safety) · authority_context: `primary academic — deployed-robotics runtime safety, OOD detection, data-centric policy improvement; organized this seminar ~4 yrs` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `Stanford Online`  ·  interviewer / moderator / host: `n/a (seminar; Q&A from audience + Zoom)`
- event_context: `Stanford Robotics Seminar ENGR319, Spring 2026 (seminar May 15, 2026; published Jul 7, 2026)`  ·  perspective / conflict notes: `academic robotics framing — highly transferable to OMNI's governed AI runtime + clinical/business safety, but robotics FORMAL safety guarantees (control-invariant reachability) do NOT transfer directly to care (no formal reward/dynamics model); import the ARCHITECTURE, not the guarantees.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [x] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from operator-metadata (`high_from_operator_metadata`) · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(deferred to Opus-main fold per task contract — this subagent does NOT edit registry/coverage/anchor)* · [ ] update coverage matrix *(deferred to Opus-main fold)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript

Search transcript
Search transcript
0:099 secondsIt's really an honor to be able to speak here today. Uh you know I organized this seminar for almost four years. So long
0:1717 secondstime ever since co and it's really cool to be able to take the stage now myself and deep dive into some of the work that I've done over the last few years
0:2626 secondstowards trustworthy autonomy. And to set the stage, I want us to recognize that robotics is undergoing somewhat of a
0:3232 secondsperiod of change where roughly 10 years ago, we were very accustomed to robots only performing these highly choreographed dances, repetitively
0:4141 secondsperforming the exact same motion over and over again in a very controlled environment.
0:4646 secondsToday, robots are rolling out into the real world at scale. I want to emphasize that these systems are not prototypes anymore. We are actively scaling these
0:5555 secondssystems. For example, Whimo is growing its operations so quickly, they are now doing almost 500,000s of rides per week uh in the United States.
1:061 minute, 6 secondsAnd this progress, I would argue, has largely been driven by advances in learning algorithms. We're increasingly integrating learn components into all
1:141 minute, 14 secondsaspects of the stack has allowed us to make sense of complex sensor modalities and allowed robots to make the right decisions in the messiness of the real
1:221 minute, 22 secondsworld. like this crazy example of a moped that crashes right in front of the car. With the emergence of fully
1:291 minute, 29 secondsendto-end AI architectures, we are now also seeing particularly promising results in general purpose manipulation systems, raising the prospects of robots helping in our workplace and our homes.
1:411 minute, 41 secondsAnd this all means that in the coming years, robots may have a profound impact on the way that we move, the way that we work, and even how we live our daily
1:491 minute, 49 secondslives. But such scale also comes with safety risks as our systems are still far from perfect. Those amazing
1:571 minute, 57 secondsself-driving systems that dodge accidents also tend to drive straight into a flood and sink when it rained in
2:052 minutes, 5 secondsSan Francisco. They may mistake the sunset for a traffic light or even stop in the middle of the freeway because the
2:132 minutes, 13 secondscar drove past a billboard with a picture of a stop sign on it. And similarly for manipulation systems, for
2:212 minutes, 21 secondsno apparent reason, they may mess up your cooking.
2:252 minutes, 25 secondsThey may stick plastic utensils into the oven instead of the drawer that you asked it to put it in or wreak havoc on themselves and their environment.
2:342 minutes, 34 secondsAnd when we go towards these blackbox systems for learning all of these behaviors, it becomes really hard to tell where are these failure modes
2:432 minutes, 43 secondscoming from and what can we do about them. And that has been the overarching question that I've studied over the last few years.
2:512 minutes, 51 secondsTo overview some of the work that I've done, let's first build an intuition on where these failure modes are really coming from. Right? The systems we have
2:592 minutes, 59 secondstoday are not magic. They are datadriven systems. And to develop them, we collect a lot of data, label it, and train a model to match these training behaviors.
3:083 minutes, 8 secondsAnd this process has some inherent shortcomings, right? namely that a model is only going to be as good as the data that it was trained on. And so
3:163 minutes, 16 secondseventually when you deploy a robot in the wild, it's going to encounter these things we call out of distribution inputs, things that were very dissimilar from that training data on which models
3:253 minutes, 25 secondsmay perform very poorly. Examples of this can include longtail cases, situations that are so rare that they were not well represented in training
3:333 minutes, 33 secondsdata or scenarios where the distribution of input suddenly shifts like when we train a model on daytime data only and
3:403 minutes, 40 secondsthen suddenly the model gets deployed at night.
3:443 minutes, 44 secondsFundamentally, any model is always going to be imperfect because we train it to pick up correlations in the training data, not true causation. And so they're
3:513 minutes, 51 secondsprone to pick up correlations that are spurious that don't hold in general.
3:563 minutes, 56 secondslike this famous example where a classifier has learned to correlate an animal's type with its typical background instead of learning what
4:034 minutes, 3 secondsreally makes a cow a cow and therefore in my view require guard rails to cope with the practical reality
4:114 minutes, 11 secondsof deploying learning enabled systems in the real world right eventually you're going to encounter these out of distribution examples in the wild and
4:194 minutes, 19 secondsbesides tools that improve and validate our systems on known unknowns we also require runtime monitors to get guard
4:264 minutes, 26 secondsagainst the out of distribution unknown unknowns the things that are rare and we couldn't anticipate at design time
4:344 minutes, 34 secondsand rather than hoping to build models that are always perfect my work is instead focused on building systems that I would say are trustworthy systems that
4:424 minutes, 42 secondsknow what they can and cannot do that recover safely when conditions become too challenging or hazardous and whose
4:494 minutes, 49 secondsmodel behavior we can imp interpret diagnose and improve when failure modes emerge.
4:564 minutes, 56 secondsTo do so, my work has focused on building runtime monitors that detect when models are unreliable, safety interventions that avoid failures, and a
5:045 minutes, 4 secondsdata flywheel that uses devel deployment data to improve system robustness and performance over time. All my work falls
5:125 minutes, 12 secondsin these three categories, but today I will go into through uh into detail in two papers with a two-part focus. The
5:205 minutes, 20 secondsfirst is on building systems around the models that we deploy to improve safety at a system level. And the second is on
5:275 minutes, 27 secondsactually improving the models themselves through a deployment data flywheel. In the first part, we're going to focus on a particularly challenging notion of
5:355 minutes, 35 secondssafety that I'm going to introduce and call semantic safety. So digging into the first part, the concept of semantic
5:435 minutes, 43 secondssafety all started when we came across a set of realworld robot edge cases.
5:495 minutes, 49 secondsParticularly when we saw this self-driving car that got confused because it was driving behind a truck that was carrying inactive traffic
5:575 minutes, 57 secondslights. We saw this car stopping for a person wearing a t-shirt with a stop sign on it. or this example where a
6:046 minutes, 4 secondsrobot is placing plastic utensils in the oven instead of the drawer that it was asked for. And these failures are kind of complicated because they arise from
6:136 minutes, 13 secondsthe holistic context and the interreations of objects in the scene.
6:176 minutes, 17 secondsIt's not simply about avoiding obstacles anymore, right? And so we call these failure modes semantic anomalies,
6:256 minutes, 25 secondsunusual situations where ordinary objects and the overall context together lead to some system level confusion in
6:336 minutes, 33 secondsthe stack. And when we saw these cases, we wondered what would existing outofdistribution detection methods do which have really mostly studied the
6:426 minutes, 42 secondsoutofdistribution problem through the lens of physical safety like obstacle avoidance. And existing methods that, for example, measure visual novelty with
6:506 minutes, 50 secondsrespect to the robot's training data or bootstrap uncertainty scores on a model predictions didn't really work at catching these kinds of semantic
6:586 minutes, 58 secondsanomalies because there's nothing that's really inherently visually novel about seeing stop signs, even if it's on a billboard. And the model is extremely
7:077 minutes, 7 secondsconfident that what it's seeing is actually a stop sign. Right? These things are system level errors that defy component level blame assignment. and
7:157 minutes, 15 secondsthe response depends somehow on the context of the scene. So how can we safeguard against semantic anomalies?
7:227 minutes, 22 secondsThe core idea that we are going to explore is whether we can leverage the common sense reasoning capabilities of large language models to reason about
7:297 minutes, 29 secondsthe context holistically with the rationale being that the internet scale pre-training data that these models are trained on brings many lifetimes of
7:377 minutes, 37 secondsexperience to the driving task that endows models with a common sense to mitigate semantic anomalies.
7:447 minutes, 44 secondsSo now I think you might say this is quite reasonable. I can believe that a model like GPT5 can can handle these kinds of things. But how do we
7:527 minutes, 52 secondsoperationalize it? Right? How do we practically increase closed loop robot trustworthiness with language models?
7:597 minutes, 59 secondsDoing so requires solving two key challenges. The first is to mitigate the computational cost of language models to enable a level of reactivity. Right? The
8:088 minutes, 8 secondsbest language models are very large and that makes them extremely slow. is not very useful for a robot that moves very quickly. And the second is that besides
8:168 minutes, 16 secondsdetecting anomalies, we now need to integrate these reasoners into the control of dynamic and agile robots.
8:238 minutes, 23 secondsWe propose a two-stage decision-making framework to address these challenges.
8:278 minutes, 27 secondsAnd to get some intuition on this, let's first think about why LLM are so slow.
8:318 minutes, 31 secondsAnd it's really because they generate text by sampling tokens one by one auto reggressively, right? And this auto
8:398 minutes, 39 secondsreggressive process is really the bottleneck. We need to call the LLM's backbone maybe hundreds or thousands of times to generate a reasoning trace that
8:488 minutes, 48 secondsallows a model to figure out what to do in unusual context.
8:528 minutes, 52 secondsAnd so we propose a two-stage reasoning pipeline where the first stage leverages a intermediate outputs like single embedding coming from a model backbone
9:009 minutesto enable reactivity. But we still rely on the full generative chain of thought capabilities of the largest models to make zeroot decisions on out of
9:099 minutes, 9 secondsdistribution scenarios that have never been seen before.
9:139 minutes, 13 secondsTo do this, there is this notion of an embedding that we can back out of a model's forward pass. That is when we take a input text and try to produce an
9:229 minutes, 22 secondsoutput text, there is an intermediate vector that we can take out of the language model. And when we graph these vectors in a sort of stylized latent
9:309 minutes, 30 secondsspace, what we have observed many times in literature before is that these embedding vectors preserve the semantics of what has been encoded by the model.
9:409 minutes, 40 secondsSo concepts that are similar like uh you know two types of animals are going to be close by whereas concepts that are very different like a truck is going to
9:489 minutes, 48 secondsbe far away in this embedding space. And so we're going to detect semantic anomalies via similarity queries with these embeddings. To do so, we first
9:589 minutes, 58 secondsassume that we have a data set of prior experiences of the robot like the training data that the model was trained on. And we use a foundation model to
10:0610 minutes, 6 secondsgenerate a database of these semantic embedding vectors.
10:1010 minutes, 10 secondsThen at runtime, we take the current observation of the robot, push it through the embedding model again, and
10:1710 minutes, 17 secondscompare its similarity of the current observation with the embeddings in the database. If the current observation is
10:2510 minutes, 25 secondssimilar to the previous experiences of the robot, we call that nominal. The robot has probably seen it before and we continue with the decisions that were
10:3310 minutes, 33 secondsmade by the base autonomy stack. If the observation is very different from what we've seen before or anomalous, we're going to query the full generative can
10:4110 minutes, 41 secondsof chain of thought of a large model to reason about what safety preserving intervention to take.
10:4810 minutes, 48 secondsSo how do we integrate this fast and slow reasoner within a planner? Well, the first is that we construct recovery
10:5510 minutes, 55 secondssets which we're going to call control invariant subsets of the state space that correspond to a high level safety intervention and we provide these sets
11:0311 minutes, 3 secondsas fallback choices to the LLM in a multiple choice fashion. So for example for a drone delivery service you might say that a recovery set could be landing
11:1111 minutes, 11 secondsin a field, landing on a rooftop or hovering in some kind of holding zone, right?
11:1711 minutes, 17 secondsAnd we then use these recovery sets within a model predictive controller that maintains a tree of fallbacks associated with the nominal goal and a
11:2511 minutes, 25 secondsset of safety interventions. We can compute embeddings of the observations in parallel to detect anomalies and we show that this can be done in real time.
11:3511 minutes, 35 secondsWhen an anomaly is tri detected, we provide the current fallback options to the LLM reasoner. And as shown in orange
11:4311 minutes, 43 secondshere, you can see that the fallback trajectories overlap for an upper bound on the time it takes the LLM to return
11:5011 minutes, 50 secondsits decision. This ensures that the fallback options that we provide to the LLM are still dynamically feasible once
11:5811 minutes, 58 secondsthe model returns its decision, allowing the MPC to account for the time it takes the model to to reason and safely enact whatever the LLM decides.
12:0812 minutes, 8 secondsWe can prove that this controller design allows us to reach the recovery set chosen by the LLM with a hard guarantee.
12:1612 minutes, 16 secondsAnd as a case study, let's reexamine this stop sign on a billboard example. A base autonomy stack detects the stop
12:2412 minutes, 24 secondssign on the billboard as a real stop sign and slams on the high on the brakes on a highway on-ramp, which I don't think is very safe. If we look instead
12:3212 minutes, 32 secondsat our approach, the vehicle is first driving normally but fires off a query to a language model incurring in
12:4012 minutes, 40 secondsencoding the current observation once an anomaly gets detected.
12:4512 minutes, 45 secondsNow this embedding based similarity query only requires one pass through the network, right? And so that's something that we can do very fast like 20 hertz
12:5312 minutes, 53 secondson an Nvidia Jetson. The planner has this emergent behavior that it then slows the car down while waiting for the LLM to output budgeting time for the
13:0213 minutes, 2 secondsreasoning process. And in this case, the LLM decides to keep driving, ignoring the billboard without ever stopping the car.
13:1113 minutes, 11 secondsAnd while we can detect anomalies quickly with small models, it's necessary to reason about the downstream consequence of anomalies with larger
13:1913 minutes, 19 secondsmodels. As the sort of table here shows, larger the model gets, the better the reasoning becomes.
13:2613 minutes, 26 secondsQuantitatively, we test these anomaly detectors on a series of synthetic data sets where we programmatically create descriptions by drawing from sets of
13:3413 minutes, 34 secondsnominal and anomalous observations in multiple robotic domains. Right? For an AV stop signs are nominal, elephants are
13:4213 minutes, 42 secondsstrange. Manipulators may seek forklifts near them driving around in a warehouse often, but knives on the on the conveyor belt is probably uh a problem.
13:5413 minutes, 54 secondsAnd we evaluate a number of embedding models of various sizes on these anomaly detection tasks where we can see that
14:0114 minutes, 1 secondall these anomaly detectors reach very high accuracy as the size of the embedding cache increases. And some takeaways to point out here are firstly
14:1014 minutes, 10 secondsthat grounding these anomaly detectors in prior experiences of the robots with embeddings actually is able to outperform generative reasoning at the
14:1814 minutes, 18 secondsanomaly detection task. You can kind of see here that the the horizontal lines correspond to just querying GPT models
14:2714 minutes, 27 secondsto reason about whether it's an anomaly and the embedding detectors are actually doing better. Right? The second is that smaller models can do just as well as
14:3514 minutes, 35 secondslarger models at the anomaly detection task. We can see that small models like say MPNet and BERT which are like roughly 100 million parameters are
14:4314 minutes, 43 secondsactually getting extremely high accuracy at detecting all of these anomalies. And this is not magic, right? To really understand what the embedding based
14:5114 minutes, 51 secondsdetectors are doing, we're also going to do an sort of nonID sweep where we hold out concepts from the nominal database and slowly start adding them back in.
15:0315 minutes, 3 secondsRight? And what you can see is that the accuracy increases roughly linearly with the percentage of nominal concepts in this database. And the takeaway of that
15:1115 minutes, 11 secondsis really that this embedding detector is detecting differences with respect to prior experiences. If we remove highle
15:1915 minutes, 19 secondsconcepts from the database, they start being detected as anomalies. Right? And this means that the fast and slow
15:2615 minutes, 26 secondsreasoners are both necessary in this fa framework. The fast reasoner is what gives you reactivity. We can use mpnet
15:3315 minutes, 33 secondsand run it at 100 at 40 hertz on an NVIDIA Jetson. Whereas the slow reasoner or the large models are really necessary
15:4215 minutes, 42 secondsto produce the long reasoning chains to accurately assess the safety criticality of an anomaly.
15:4915 minutes, 49 secondsWe also deploy these reasoners on actual quadrotor hardware where for this task the nominal goal of the quadrotor is to
15:5615 minutes, 56 secondsland on the red box in the presence of a clutter of inconsequential objects. And we see that here on the right, if we
16:0316 minutes, 3 secondsplace other quadrotors on the boxes, the drone correctly detects this and goes off to the holding zone instead. And
16:1116 minutes, 11 secondswhat's interesting about this case to me is that quadrotors in general have been seen plenty of times by the robot before. What is really making them
16:1916 minutes, 19 secondsdetected as anomalies is that their context has changed when we put them on the landing zones and the boxes.
16:2716 minutes, 27 secondsSimilarly, on the top example here, we're going to place a previously unseen object on the ground, in this case, a keyboard. And we see that the drone
16:3516 minutes, 35 secondscorrectly flags this and starts slowing down while waiting for the LLM to output. Whereas on the bottom video, the drone immediately backs out of landing
16:4416 minutes, 44 secondswhen it detects the other quadrotor on the red box. In the case of the keyboard, the top video, the drone confidently proceeds to land on the box,
16:5216 minutes, 52 secondswhereas the other drone on the red box forces the LLM to output landing on the blue box instead and diverts its decision based on the context of the scene.
17:0317 minutes, 3 secondsA quick recap of these methods is that we can build safer systems with runtime monitors and safety interventions where
17:1017 minutes, 10 secondswe introduced the problem of semantic safety contrasted with more classical notions of physical safety. Highlighted the effectiveness of foundation models
17:1817 minutes, 18 secondsto detect semantic anomalies and increased the robot's closed loop trustworthiness via thinking fast and slow system design.
17:2717 minutes, 27 secondsFollowing these works, our approach has found broad utility across robot platforms like hazard identification in construction robotics, runtime
17:3517 minutes, 35 secondsmonitoring of marine autonomy, similarly to space autonomy applications and even a wide variety of use cases detecting
17:4417 minutes, 44 secondsfail and preventing failures in manipulation.
17:4817 minutes, 48 secondsWith that, I want to conclude the first part of this talk and move towards the second part on guardrails for end-to-end policies. And what I want to focus on
17:5617 minutes, 56 secondshere is that while runtime monitors can safeguard us against failures, I think big question that we have is once we have seen these failures, how can we systematically improve our models?
18:0818 minutes, 8 secondsAnd let's first dig a bit deeper into what robotics models are really looking like these days to make an understanding of how to proceed. We see this trend
18:1718 minutes, 17 secondswhere we're increasingly moving away from modular architectures where each model completes an interpretable subtask
18:2418 minutes, 24 secondslike perceiving its environment you know making a prediction of what's going to happen and then deriving an action towards monolytic AI models that take in
18:3318 minutes, 33 secondsobservations and directly produce actions taking advantage of progress in robotics adjacent domains like NLP and
18:4018 minutes, 40 secondstraining large generative models on increasingly large data sets a scalable recipe to teach robot many skills.
18:4918 minutes, 49 secondsBut while prior work shows that we can detect failures, we don't have any handle on why these big monstrosities
18:5618 minutes, 56 secondsfail. There's no control logic that we can adjust when our end-to-end policy lacks the precision to tie a cleat,
19:0319 minutes, 3 secondschooses a fragile pushing strategy when tucking a box with uncertain mass under a shelf, or when it sometimes completely
19:1119 minutes, 11 secondsignores other objects like dropping books from the shelf. The key challenge is how to debug these blackbox models to systematically improve performance.
19:2219 minutes, 22 secondsAnd again in this context I'm going to advocate for a datacentric view. Our policy is only as good as the data that it was trained on. You know it can be
19:3119 minutes, 31 secondsthe failures can occur because of the mixed skill levels of the human demonstrators. Teleoperating a robot is not easy,
19:3919 minutes, 39 secondsor by some diverse strategies in the demonstration data being collected by many people, some of which are just inherently more fragile, or because
19:4819 minutes, 48 secondslong-term data collection efforts might contain spurious correlations, like a janitor that may have changed the background of the robot here in a way that weirdly correlates with the
19:5619 minutes, 56 secondsbehavior of the robot. These underlying root causes are so varied that it becomes very difficult to systematically
20:0420 minutes, 4 secondsidentify them within large data sets manually. We need automated tools to trace the behaviors of the robot back to
20:1120 minutes, 11 secondsthe quality of the and the composition of the robot's training data.
20:1620 minutes, 16 secondsHaving thought a little bit about end-to-end systems and their failure modes, let's think about datacentric policy improvement.
20:2520 minutes, 25 secondsConcretely, suppose that we train a policy via behavior cloning and then evaluate its closed loop performance.
20:3220 minutes, 32 secondsQualitatively, what we want to understand is what training demos drove this test time behavior and created
20:3920 minutes, 39 secondsthese failures. And how do we even formalize this goal between collection of demonstration data, training a policy
20:4620 minutes, 46 secondsvia maximum likelihood, and then actually testing the policy in closed loop. Our key insight is to develop
20:5420 minutes, 54 secondsmethods that counterfactually reason about the impact that inclusion of or exclusion of the training data has on policy performance. That is our goal is
21:0321 minutes, 3 secondsto predict things like how does the expected return or the success rate of the policy change if we remove some demo from the training data. A process that
21:1221 minutes, 12 secondswe're going to refer to as data attribution. And instead of training policies on all possible subsets of data that we have, we want to do this in a
21:1921 minutes, 19 secondspredictively a predictive fashion, right? We want to predict these counterfactuals. To do so, we turn to the theory of influence functions, a
21:2721 minutes, 27 secondsfoundational tool from the robust statistics community that traces its origins back to at least the 1970s. And these tools have really formed a
21:3621 minutes, 36 secondsfoundation of interpretability research in deep learning since the seminal work by Coen Leang in this building.
21:4421 minutes, 44 secondsWhat are they doing? Well, influence functions effectively compute a first order sensitivity around reweing a
21:5121 minutes, 51 secondstraining sample. Specifically, consider the following training objective. We train a behavior cloning policy by
21:5821 minutes, 58 secondsminimizing the average loss over all the demos that we have collected. And consider a perturbed objective where we
22:0522 minutes, 5 secondstake one of the losses on one of the samples and add an infinite decimal importance weight epsilon on the loss of
22:1322 minutes, 13 secondssome demonstration towel.
22:1722 minutes, 17 secondsWhat we want to do is compute the influence that that importance weight has on the policy's performance. that is
22:2522 minutes, 25 secondswhat is the change in expected return of the policy with respect to up or down weighting this particular sample of
22:3322 minutes, 33 secondsinterest through the importance weight epsil epsilon. So this is a sensitivity that allows us to interpret how the
22:4022 minutes, 40 secondsperformance of the policy depends on a sample of interest right upweing it or downweing it might increase or decrease
22:4822 minutes, 48 secondsthe performance of the policy. So all the equations aside, it's a measure of how the training data relates to the test time performance.
23:0023 minutesSo how can we actually compute this magic quantity? Because I wrote a bunch of complicated equations on the board.
23:0623 minutes, 6 secondsYeah, it turns out that you can directly compute the influence function in a typical machine learning setting where you make an individual prediction and
23:1423 minutes, 14 secondshave an explicit equation for the loss of that sample. But in our setting, estimating the performance influence
23:2123 minutes, 21 secondsrequires reasoning over the outcomes of sequential decisions. Whereas existing tools built by the machine learning community only attribute individual
23:2923 minutes, 29 secondspredictions that a model might be making. And we cannot directly compute these quantities to begin with because it depends in robotics on an unknown
23:3823 minutes, 38 secondsreward function and the environment dynamics. Right? I roll out the policy and I see whether it succeeded or failed. I have no way to mathematically
23:4423 minutes, 44 secondswrite out uh all the steps of of what it really means to complete some of these tasks. And so our insight has been to
23:5223 minutes, 52 secondsapply policy gradient tricks to decompose the performance in influence into a tractable sum of the influence of
23:5923 minutes, 59 secondstraining data on the action log likelihood of the policy.
24:0424 minutes, 4 secondsThese things we can easily compute with existing tools like track which is a tool that uses matrix sketching to
24:1124 minutes, 11 secondscompute reduce compute costs. So essentially we're going to average over rollouts of the policy quantities that
24:2024 minutes, 20 secondswe can compute basically the sum of all of the influence functions on individual actions. And all the mathematical complexity aside, the takeaway is that
24:2724 minutes, 27 secondswe now have an estimator that can causally relate training data to deployment time performance.
24:3324 minutes, 33 secondsThis is something that we can use as follows. We can train a policy, test it by doing some rollouts and then estimate
24:4124 minutes, 41 secondshow the training data contributed to that performance by computing the performance influence. We can then use this performance influence to curate
24:4924 minutes, 49 secondsdata that most positively influences the policy's deployment time success. Right?
24:5524 minutes, 55 secondsWe can remove lowquality data using this tool or choose the most valuable newly collected samples to add to the data set resulting in a data flywheel where we
25:0325 minutes, 3 secondstrain a policy, evaluate it and then systematically curate data that improves the policy's performance. We're going to call this algorithm Cupid.
25:1225 minutes, 12 secondsAnd in experiments, we show that this allows us to prune lowquality samples, identify the most robust train
25:2125 minutes, 21 secondsstrategies in training data under test time distribution shifts, and even allowed us to root out spirious correlations in a case where we
25:3025 minutes, 30 secondscollected a bunch of data and actually pruned twothirds of the original samples away. And by pruding we can go from 40%
25:3925 minutes, 39 secondssuccess rate to 90% success rate with 2/3 less samples fewer samples because the samples had some kind of problem with it across all of these tasks.
25:5125 minutes, 51 secondsIn [snorts] contrast, if we look at some of the baselines like a method called demonth, which is more of a huristic that measures how noisy the trajectories
25:5925 minutes, 59 secondsof the robot are, which is sort of a intuitive measure that we as humans cooked up to think about data quality.
26:0526 minutes, 5 secondsWe find that these heruristics may work really well on some tasks where actually noisiness in the data is really the cause of data quality problems.
26:1426 minutes, 14 secondsYou know, it may work well in in some settings, but actually sometimes it may be anti-correlated with how a model really learns, right? Because our
26:2126 minutes, 21 secondsintuition of how models learn may not really match with the reality of what the model is picking up from its training data.
26:3026 minutes, 30 secondsWe also have applied this beyond a simple single task diffusion policy setting to curate post- training data for VAS where we select a small fraction
26:3926 minutes, 39 secondsof the data from an existing pool using cupid and actually see that it vastly increases the post training performance of a VA like PI0.
26:5126 minutes, 51 secondsAnd so to quickly recap, uh, in this part of the talk, we looked at how to improve models with a deployment data
26:5826 minutes, 58 secondsflywheel. We proposed a method to causally relate training data to downstream KPIs and developed an algorithm to systematically improve policies via data curation.
27:1027 minutes, 10 secondsWith that concluding the second part of the talk, I'll quickly wrap up and talk about some future work.
27:1727 minutes, 17 secondsRight? The key challenge that I've looked at in in in the methods that I presented here today is that the models that we use in robotics are only as good
27:2527 minutes, 25 secondsas their limited training data making the risk of out of distribution edge cases ever present. The guiding principle that we should take in my
27:3427 minutes, 34 secondsopinion is a safety first process that links development and deployment tightly together. Building systems that users can trust rather than models that are
27:4227 minutes, 42 secondsalways perfect. And the approach for doing so is to create guardrails that detect impending failures, avoid their negative consequences, and diagnose
27:5127 minutes, 51 secondsdeployment behaviors to transparently improve a model's performance.
27:5727 minutes, 57 secondsIf you're going to go home today, there's really two things that I would want you to walk away with, right? which is first this view that runtime monitors
28:0428 minutes, 4 secondsoffer a pragmatic paradigm to detect failures, avoid their negative consequences and improve the long-term performance of learning enabled systems
28:1328 minutes, 13 secondsrooted in unanticipated and anomalous conditions. And the second is that taking a dataentric view allows us to
28:2028 minutes, 20 secondsunderstand learning systems. What is in the data? What is not? And how does that data drive performance? These are the questions that are very helpful to
28:2828 minutes, 28 secondsunderstand what's really going on in deep learning systems. I'm not going to have too much time to talk about future work, but uh I would like to point at a
28:3728 minutes, 37 secondsperspective piece that we wrote at the start of my PhD that sort of outlined many of these challenges, including many opportunities for future work.
28:4828 minutes, 48 secondsUm I'm just going to leave this up at the slide and thank my collaborators and I'm happy to t take any questions.
28:5928 minutes, 59 seconds[applause]
29:0529 minutes, 5 secondsYeah.
29:0529 minutes, 5 secondsYeah. Um really interesting talk. Um what do you think the bar is for the um semantic unsafety description?
29:1829 minutes, 18 seconds[clears throat]
29:2029 minutes, 20 secondsI saw the accuracy four.
29:2829 minutes, 28 secondsYeah, this is a great point. So your ju just for uh I don't know people on on Zoom, the question is you saw that these
29:3729 minutes, 37 secondsuh language models are not perfectly accurate at detecting the semantic or reasoning through the semantic anomalies
29:4429 minutes, 44 secondsuh quite yet and so how many nines of reliability are we away? It's definitely true that these models are not perfect
29:5029 minutes, 50 secondsyet. But I think what's clear is that as time is passing and these models are getting better and better and better, the accuracy is improving quite quickly.
29:5929 minutes, 59 secondsI think it's the most promising path to to go because of uh sort of
30:0630 minutes, 6 secondstwo reasons. The the kinds of errors that these models are now catching were just situations
30:1430 minutes, 14 secondsthat no other method that we had before was able to detect even to begin with, right? And so even though it's not
30:2130 minutes, 21 secondsperfect yet, you can see the field broadly investing in reasoning models for autonomy because it's unlocking new
30:3130 minutes, 31 secondscapabilities that weren't there before that are there to increase safety. The second part is that in that particular
30:3830 minutes, 38 secondswork, we are using the foundation models in a sort of additive fashion that are not interfering with the base behavior
30:4630 minutes, 46 secondsof the of the model. Right? And so if the if the LLM is reasoning that uh something is unsafe, it can only ever
30:5430 minutes, 54 secondsmake the system more safe, right? Because uh you didn't know how to handle it to begin with. Um and if the
31:0431 minutes, 4 secondsmodel, you know, has a false positive, it only makes the system more conservative. It's nuisance for a user, but it's not going to create additional hazards, right? here is sort of using it
31:1331 minutes, 13 secondsto add more to the things that you you can handle if that makes sense.
31:2031 minutes, 20 secondsAny other questions? Yeah.
31:2531 minutes, 25 secondsOh, so it seems like a lot of your metrics were for like zero shot or like one attempt at completing the task, but
31:3231 minutes, 32 secondsby curating like bad data, does the performance decrease if like the policy tries to attempt a task multiple times?
31:4131 minutes, 41 secondsLet's say it's trying to wrap the rope around the anchor. Like if it fails the one time, will it decrease its chance of succeeding in time?
31:5131 minutes, 51 secondsSo you're saying like if I curate out that data, maybe it like you know reduces the ability of the model to do retries. Is that what you're saying?
32:0232 minutes, 2 secondsUm that that's a good question. Um the met the way that these methods work
32:1132 minutes, 11 secondsis that you define the metric right like that's the job of the designers to identify the right metric that you want to track and you want to hill climb on
32:1832 minutes, 18 secondsand in this case what we used was does the policy tie the cleat within uh I would say one minute period right and so
32:2832 minutes, 28 secondsif there is data that is not contributing to the model completing the task in a one minute period then that data is probably flagged as bad data and
32:3732 minutes, 37 secondsand removed, right? And so I would rather encourage my model to complete the task quickly than to encourage it to
32:4632 minutes, 46 secondsretry endlessly, right? So with the time limit that we set sort of says that at some point retrying over and over again,
32:5432 minutes, 54 secondswe're going to count that that as a failure, right? Um it it's hard to say whether re you know keeping retry
33:0133 minutes, 1 secondbehavior in general is like a type of data that we really really want to add in in general because we have no like
33:1033 minutes, 10 secondshuman our human intuition about what what's good data is like really not useful in like predicting whether a model is actually going to get better.
33:1833 minutes, 18 secondsAnd so these tools that actually causally back out whether the performance is increasing or decreasing are like a bit more general.
33:2933 minutes, 29 secondsYeah.
33:3033 minutes, 30 secondsYeah. For the first part of your presentation, I was curious to know if you had tried out any other models to the fast anomaly detector. For example,
33:3833 minutes, 38 secondssomething like a just the image observation and the text from your database or something like that. Yeah, we tried a number of um models as I sort
33:4833 minutes, 48 secondsof showed a a hu you know huge list, right? And uh generally what we found is that uh the performance at anomaly
33:5633 minutes, 56 secondsdetection sort of high across almost any model that we tried. And so for the purposes of increasing reactivity, we just press
34:0534 minutes, 5 secondsthe latency as much as we can and go with the smallest thing that we could possibly um possibly find, right? And
34:1234 minutes, 12 secondsand that sort of hints that the anomaly detection task is a somewhat easier task that small models can do even though
34:1934 minutes, 19 secondsit's not sufficient to actually be safe, right? Because it's only telling you if something that you're seeing is different than what you saw before, not necessarily if it's dangerous.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

Rough metadata for Opus

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=NiRXiuWwrps
source_title: Stanford Robotics Seminar ENGR319 | Spring 2026 | Towards Trustworthy Autonomy
channel_or_org: Stanford Online
speaker: Rohan Sinha, Stanford Autonomous Systems Lab
published_at: Jul 7, 2026
seminar_date: May 15, 2026
captured_at: 2026-07-08
captured_by: Nick
capture_method: YouTube screenshot + pasted transcript
transcript_status: available and analyzed
content_type: robotics autonomy / runtime monitors / semantic safety / OOD detection / fast-slow reasoning / safety interventions / deployment data flywheel / data attribution / influence functions / guardrails for learning-enabled systems

source_reliability_context: Primary academic seminar from Stanford Robotics / Autonomous Systems Lab. Strong source for runtime safety architecture, semantic anomaly detection, deployment-data flywheels, and data-centric model improvement. Best treated as robotics-specific but highly transferable to OMNI’s governed AI runtime and clinical/business safety architecture.

priority: 4.75/5
depth: safety architecture / deployment-learning doctrine
recommended_status: route to AI Substrate, Runtime Guardrails, CNS, Clinical Safety, D7/Observation, Evaluation, Learning Loops, and “deployment data flywheel” doctrine.

Topic tags:
[trustworthy_autonomy, robotics, Stanford, Rohan_Sinha, runtime_monitors, semantic_safety, semantic_anomalies, out_of_distribution, OOD_detection, unknown_unknowns, fast_slow_reasoning, LLM_reasoner, embedding_detector, safety_intervention, recovery_sets, MPC, control_invariant_sets, deployment_data_flywheel, data_attribution, influence_functions, CUDID/Cupid, data_curation, blackbox_policy_debugging, model_failure, guardrails, OMNI_Runtime, Clinical_Safety, Evidence_Plane]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4.75/5
Depth: safety architecture / deployment-learning doctrine
Recommended status: preserve as a major source for runtime monitors + safe intervention + deployment learning loop.

Core takeaway

This is a spine source for one of OMNI’s most important principles:

Do not try to make the model perfect. Build a system that knows when the model is becoming unreliable, intervenes safely, and uses deployment data to improve over time.

Sinha frames robotics as moving from controlled, choreographed systems into real-world scale, where learned components increasingly drive perception and decision-making, but also create safety risk because models encounter out-of-distribution cases and spurious correlations.

OMNI translation:

Clinical/business AI should not be trusted because it is smart. It should be trusted because it is monitored, bounded, recoverable, explainable, and improved through governed deployment evidence.

Key concepts to preserve
1. Trustworthy systems know what they can and cannot do

The key line: Sinha is not trying to build models that are always perfect. He wants systems that know what they can and cannot do, recover safely when conditions become too hard or hazardous, and allow behavior to be interpreted, diagnosed, and improved when failures emerge.

OMNI keeper:

This is nearly identical to OMNI doctrine.

A good OMNI agent should know:

when source evidence is insufficient
when a patient-specific fact is not verified
when clinical authority is required
when a workflow is outside scope
when output confidence is too low
when to slow down, escalate, or refuse action

Doctrine candidate:

Trustworthy AI is not perfect AI; it is bounded, monitored, recoverable AI.

2. Runtime monitors are required for unknown unknowns

He distinguishes known validation from runtime monitoring. Known unknowns can be improved and tested during design, but rare unknown unknowns require runtime monitors after deployment.

OMNI translation:

Pre-launch evals are necessary but incomplete.

OMNI needs runtime monitors for:

hallucinated source claims
missing medication/order context
out-of-policy patient message
unsafe clinical advice
unexpected user intent
weird document structure
provider correction spikes
repeated failed workflow state
ambiguous identity / patient mismatch

Doctrine candidate:

Predeployment evals handle known risks; runtime monitors handle unknown deployment risk.

3. Semantic safety is different from physical safety

Sinha introduces “semantic anomalies”: ordinary objects in unusual relationships or contexts that confuse the system. A billboard stop sign is not physically novel, but semantically dangerous because the system interprets it incorrectly.

OMNI keeper:

Healthcare/business workflows have semantic anomalies constantly.

Examples:

“No code” in a note versus code status in orders
comfort meds but not hospice
HPI says discharged home but SNF admission orders exist
“hold anticoagulation” in hospital course but active DOAC in MAR
lab abnormality that is chronic for ESRD but dangerous for another patient
a consent signed for one service but used for another
package discount that applies to membership but not to promo stack

Doctrine candidate:

Semantic safety protects against contextually wrong interpretations, not merely obviously novel inputs.

4. Component-level confidence can miss system-level danger

Existing OOD methods failed because the stop sign itself is visually normal and the model may be highly confident. The error is at the system/context level, not a single component failure.

OMNI translation:

This is critical for AI documentation.

A sentence can be fluent.
A lab value can be correctly extracted.
A medication can be correctly named.

But the combined plan can still be wrong.

Doctrine candidate:

Confidence in components does not guarantee safety of the composed workflow.

5. Fast-slow reasoning architecture

The proposed architecture uses a fast embedding-based detector for reactivity and a slower generative LLM reasoner for hard OOD safety decisions. The fast stage compares current observations against prior experience; if anomalous, the system queries the full reasoning model.

OMNI translation:

This is a strong runtime architecture pattern.

Fast detector:

schema anomaly
missing evidence
contradiction
policy mismatch
abnormal user intent
source novelty
low retrieval match
unfamiliar document format

Slow reasoner:

interpret anomaly
decide escalation
generate safe fallback
ask clarification
route to human
propose conservative next step

Doctrine candidate:

Use fast monitors to detect anomaly; use slower reasoners to decide intervention.

6. Safety intervention should be chosen from constrained fallback options

The system gives the LLM predefined recovery sets/fallback choices, not unlimited free-form control. In robotics, examples include landing in a field, rooftop, or holding zone; the controller ensures the chosen recovery remains feasible.

OMNI keeper:

This is huge.

Do not let clinical/business agents invent fallback behavior.

Give them constrained options:

proceed
ask for missing source
cite uncertainty
route to provider
hold action
draft only
require human approval
switch to conservative plan
open discrepancy task
mark as unable to determine

Doctrine candidate:

AI safety interventions should be selected from governed fallback sets, not invented ad hoc.

7. Budget time for reasoning

In the robotics example, the planner slows the car while waiting for the LLM, budgeting time for reasoning, then continues if the LLM decides the billboard should be ignored.

OMNI translation:

OMNI needs “reasoning latency” as part of workflow design.

Some tasks can wait:

SNF HPI generation
chart reconciliation
benefit attribution audit
policy contradiction review

Some cannot:

urgent patient safety alert
live scheduling checkout
real-time voice patient interaction

Doctrine candidate:

Safe autonomy must budget for reasoning latency.

8. Small models can detect; large models reason

Sinha shows small embedding models can do anomaly detection very well and fast, while large models are needed for richer downstream safety-critical reasoning.

OMNI keeper:

This supports tiered runtime:

cheap/small monitors for routine detection
expensive large models only when needed
deterministic rules for hard gates
humans for authority commits

Doctrine candidate:

Detection and judgment are different jobs and may need different model tiers.

Deployment learning loop
9. The second half is about improving models after failures

Runtime monitors protect against failures, but then the key question becomes: once failures are observed, how do we systematically improve the model? Sinha shifts from safety interventions to a deployment data flywheel.

OMNI translation:

This is directly relevant to OMNI.

Every failed or corrected output should not just be “fixed once.” It should become learning signal.

Examples:

provider rewrites HPI
user flags plan as too vague
medication contradiction caught
patient message escalated
D7 extraction failure
scheduling rule misapplied
benefit attribution error

Doctrine candidate:

Every corrected deployment failure should become governed learning signal.

10. Data-centric debugging for blackbox models

Sinha says end-to-end systems are hard to debug because there is no interpretable submodule to adjust. So he advocates tracing behavior back to training data quality and composition.

OMNI translation:

For OMNI, failures may be caused by:

bad source documents
incomplete corpus
stale policies
poor examples
contradictory prior instructions
bad retrieval chunk
malformed structured data
provider preference not encoded
overbroad general model behavior

Doctrine candidate:

When model behavior fails, inspect the data and context that taught or guided it.

11. Data attribution: which training/demo samples drove performance?

The key method is counterfactual data attribution: estimate how performance would change if a training demo/sample were included or excluded. He calls this a way to relate training data to deployment-time performance.

OMNI keeper:

This is extremely relevant to the corpus/eval pipeline.

Potential OMNI version:

which source snippets improve answer quality?
which examples make HPI output better?
which memories degrade style?
which policy chunks cause wrong refusal?
which documents create unsafe plan behavior?
which prior “accepted” examples are actually bad?

Doctrine candidate:

Not all training/context examples are beneficial; data needs attribution against outcomes.

12. Deployment flywheel: train, evaluate, curate, improve

Sinha’s algorithm uses performance influence to remove low-quality data or choose valuable new samples, creating a flywheel: train policy, evaluate deployment, curate data, improve performance.

OMNI translation:

This is the Build-OS / Clinical Memory loop:

run → trace → evaluate → attribute → curate → update → re-evaluate → deploy

Doctrine candidate:

Deployment learning requires data curation, not just more data.

13. Human intuition about good data can be wrong

He explicitly says human heuristics can be anti-correlated with how the model actually learns. Human intuition about what data is good may not match model behavior.

OMNI keeper:

This matters for your source corpus.

A document may feel important but degrade output.
A prior example may seem good but teach the wrong pattern.
A prompt rule may sound safe but cause brittle refusals.

Doctrine candidate:

Data quality must be measured by downstream performance, not vibes.

14. Safety-first process links development and deployment

The wrap-up states the guiding principle: link development and deployment tightly, build systems users can trust rather than models that are always perfect, and use guardrails to detect failures, avoid consequences, and diagnose deployment behavior to improve performance.

OMNI translation:

This is canonical.

OMNI should not have separate “build” and “operate” worlds. Production traces, corrections, human approvals, failures, and anomalies should continuously update the eval/corpus/policy layer.

Doctrine candidate:

Development and deployment must be one governed learning loop.

OMNI translation

The usable OMNI pattern is:

normal workflow
→ fast monitor checks novelty / contradiction / policy mismatch
→ if nominal: continue
→ if anomalous: slow reasoner selects from governed fallback set
→ human/domain owner commits if needed
→ trace stored
→ failure/correction enters learning queue
→ data attribution/curation decides what should change
→ eval regression before deployment

This fits OMNI almost perfectly.

For healthcare, substitute:

robot = agentic workflow
physical crash = clinical/operational harm
semantic anomaly = contextual misread
recovery set = governed fallback actions
deployment data = provider edits / patient responses / operational outcomes
policy improvement = prompt/skill/memory/eval/source update
Likely OMNI landing zones

Runtime Guardrails

fast anomaly monitor
semantic contradiction detector
governed fallback set
escalation policy

Clinical Safety

detect unsafe clinical ambiguity
conservative intervention
provider commit boundary
no autonomous high-risk action

D7 / Observation

source anomaly detection
evidence mismatch
document novelty
contradiction detection

Clinical Memory

deployment failures become memory candidates only after review
no uncontrolled self-learning

Build-OS

data attribution over examples, prompts, docs, and accepted outputs
curate not just accumulate

CNS

route anomalies to the right owner
coordinate monitor → reasoner → fallback → human commit

Evaluation

living evals for semantic anomalies
regression testing after every corpus/policy update
Doctrine candidates
Trustworthy AI is not perfect AI; it is bounded, monitored, recoverable AI.
Predeployment evals handle known risks; runtime monitors handle unknown deployment risk.
Semantic safety protects against contextually wrong interpretations, not merely obviously novel inputs.
Confidence in components does not guarantee safety of the composed workflow.
Use fast monitors to detect anomaly; use slower reasoners to decide intervention.
AI safety interventions should be selected from governed fallback sets, not invented ad hoc.
Safe autonomy must budget for reasoning latency.
Detection and judgment are different jobs and may need different model tiers.
Every corrected deployment failure should become governed learning signal.
When model behavior fails, inspect the data and context that taught or guided it.
Not all training/context examples are beneficial; data needs attribution against outcomes.
Deployment learning requires data curation, not just more data.
Data quality must be measured by downstream performance, not vibes.
Development and deployment must be one governed learning loop.
Net-new / sharpen / affirm
Net-new candidates

semantic_safety
Protection against contextually unsafe interpretations where ordinary inputs become dangerous because of their relationships or workflow context.

fast_slow_guardrail
Runtime pattern where cheap fast monitors detect anomaly and slower stronger reasoners decide fallback.

governed_recovery_set
Predefined set of allowed safety interventions an AI may choose from when anomaly is detected.

reasoning_latency_budget
Explicit workflow budget for how long a system can wait for deeper reasoning before fallback/escalation.

deployment_data_flywheel
Loop where real deployment traces, failures, and corrections are used to curate data and improve future system behavior.

data_attribution_for_context
Method family for identifying which examples, documents, memories, or training samples improve or degrade downstream performance.

Sharpen existing

Evidence Plane
Needs runtime anomaly capture, not just post-hoc provenance.

Clinical Memory
Deployment failures can inform memory, but only via governed review and regression testing.

Runtime Router
Should route not only by cost/model but by anomaly state and recovery-set policy.

Build-OS
Must include data curation and attribution, not just artifact generation.

Observation
Should detect semantic/contextual contradictions, not only extract facts.

Affirm
models are only as good as data/context
OOD cases are inevitable
runtime monitoring is mandatory
small models can handle cheap detection
large models should be reserved for harder reasoning
more data is not always better
provider/human review remains essential for authority
deployment traces are strategic assets
safety architecture must be system-level, not model-level only
Reject / do not over-import
Do not treat robotics safety guarantees as directly transferable to clinical AI.
Do not let LLM reasoners directly control high-risk healthcare actions.
Do not assume anomaly detection equals danger detection.
Do not assume small-model detection is enough for safety.
Do not let “deployment learning” become unreviewed self-modification.
Do not let human intuition alone define good training/context data.
Do not use model confidence as a proxy for composed workflow safety.
Do not rely only on predeployment evals.
Hard read

This is a major OMNI safety architecture source.

The keeper:

A trustworthy autonomous system is not one that never fails. It is one that detects when it is leaving known-safe territory, chooses from constrained safety interventions, preserves time for reasoning, escalates when necessary, and converts deployment failures into governed learning signal.

Shortest OMNI version:

OMNI needs fast runtime monitors for semantic anomalies, slow reasoners for fallback selection, governed recovery sets, human/domain commit boundaries, and a deployment-data flywheel that curates examples and policies based on actual downstream performance.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️

Looks like good concepts to me!!!

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Reviewer:** Opus (extraction subagent) · **at:** 2026-07-08 · **binds nothing** (`GRD-036`/`GRD-044`) · **method:** formalize Review 001 (Knox) against §1 verbatim + repo grep; dedup net-new HARD vs EVRUN-000003 registry §2 (201–239 mints). This subagent PROPOSES only; it does NOT edit registry/coverage/anchor and does NOT rename the file.

### Headline verdict
**Tier: SPINE / full_semantic** (Knox priority 4.75/5; safety-architecture depth). This is a **major OMNI runtime-safety-architecture source** and the wave's cleanest external articulation of two OMNI laws OMNI has as *doctrine but not as code*: **(1) trustworthy AI = bounded/monitored/recoverable/improvable, NOT perfect**, and **(2) development and deployment are ONE governed learning loop** (the deployment-data flywheel = REV-199 in robotics dress). It AFFIRMs the spine almost wholesale and contributes **two genuinely net-new legs the wave (201–239) never named**: **(a) semantic-anomaly runtime monitoring** — non-adversarial contextual misreads (distinct from 205 promptware, which is *adversarial*), and **(b) counterfactual data attribution** — a causal estimator (influence functions / CUPID) for *which* training/context sample drives downstream performance (sharper than any 216/230/232 data-quality claim). Everything routes as **§B AI-substrate + Build-OS/REV-199 + §C Security-runtime-monitor + CNS + Clinical-Safety** — NOT a new care-frame; robotics *formal guarantees* explicitly do **not** transfer to care. `build=absent` across all mechanisms (only a generic confidence-gate/human-review echo exists in `lib/ai/governancePolicy.ts`).

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Trustworthy ≠ perfect (bounded/monitored/recoverable) | Don't chase a perfect model; build a system that knows its limits, recovers safely, is diagnosable | §B · Build-OS · Agent-Work-Protocol · thesis §8 authority-gates · Clinical-Safety | "systems that know what they can and cannot do" [4:34] | AFFIRM | absent | none | spine | watch |
| 2 | Runtime monitors for unknown-unknowns (≠ pre-deploy evals) | Pre-launch evals cover known risk; deployed runtime monitors catch rare/unanticipated failure | §B runtime · §C Security · Build-OS proof (215) · Observation/D7 | "runtime monitors to guard against… unknown unknowns" [4:19-4:26] | PARTIAL | absent | none | spine | watch |
| 3 | Semantic safety vs physical safety (semantic anomalies) | Ordinary inputs become dangerous via *context/relationship*, not novelty; a contextual misread | §C Security-runtime (NEW dimension) · Observation/D7 · Clinical-Safety · CNS | "ordinary objects… together lead to system level confusion" [6:17-6:25] | ABSENT | absent | soft (anomaly≠danger) | spine | watch |
| 4 | Component confidence ≠ composed-workflow safety | A fluent sentence / correct lab / correct med can still compose a wrong, unsafe plan | Clinical-Safety · Build-OS proof · Polaris · CNS candidate≠commit | "system level errors that defy component level blame assignment" [7:07] | AFFIRM | absent | none | spine | watch |
| 5 | Fast-slow reasoning architecture | Cheap fast monitor detects anomaly (reactivity); slow strong reasoner decides intervention | §B runtime · CNS · Build-OS · Runtime-Router | "two-stage… embedding [fast]… generative chain of thought [slow]" [8:52-9:00] | PARTIAL | absent | none | spine | watch |
| 6 | Governed recovery/fallback set (constrained interventions) | AI picks a safe action from a predefined menu (proceed/ask/hold/route-to-human/conservative), never invents it | CNS · Agent-Work-Protocol (`autonomy_level`) · Clinical-Safety · §A authority | "recovery sets… fallback choices to the LLM… multiple choice" [10:48-11:03] | AFFIRM | absent | none | spine | watch |
| 7 | Reasoning-latency budget | Workflows must budget time-to-reason + degrade gracefully while waiting (slow down, don't fail) | §B runtime · CNS · Agent-Work-Protocol · operating-metrics · Surface (voice/urgent) | "slows the car down while waiting… budgeting time for reasoning" [12:53-13:02] | PARTIAL | absent | none | vocabulary | watch |
| 8 | Detection vs judgment = different model tiers | Small/cheap models detect anomaly; large/expensive models reason about criticality; deterministic rules gate; humans commit | §B model-registry/routing (206) · Build-OS · CNS · operating-metrics | "smaller models… just as well… at anomaly detection" [14:27] | AFFIRM | absent | none | spine | watch |
| 9 | Deployment-data flywheel (failure→learning signal) | Every corrected/failed output becomes governed learning signal, not a one-off fix | Build-OS + REV-199 (MAJOR) · Knowledge-Reservoirs · Clinical-Memory (gated) · CNS | "data flywheel… train… evaluate… curate… improve" [24:55-25:03] | AFFIRM | absent | none | spine | watch |
| 10 | Data-centric debugging of blackbox models | End-to-end policies have no submodule to fix → trace behavior back to training-data quality/composition | Build-OS · Knowledge-Reservoirs · D7 · Observation · Evidence-Plane | "no control logic that we can adjust… debug these blackbox models" [18:56-19:11] | AFFIRM | absent | none | spine | watch |
| 11 | Counterfactual data attribution (influence functions / CUPID) | Causally estimate how performance changes if a training/context sample is included/excluded | Build-OS proof · Knowledge-Reservoirs curation · Evidence-Plane scoring · §B eval | "counterfactually reason about… inclusion of or exclusion of… training data" [20:46-20:54] | PARTIAL | absent | none | spine | watch |
| 12 | Curate, don't accumulate | Improvement = pruning low-quality / selecting high-value data by outcome, not more data | Build-OS · Knowledge-Reservoirs · Evidence-Plane (`GRD-036` promotion) | "40% to 90% success rate with 2/3 fewer samples" [25:30-25:39] | AFFIRM | absent | none | spine | watch |
| 13 | Human intuition about "good data" can be wrong | Measure data quality by downstream performance, not vibes; heuristics can be anti-correlated | Build-OS · Evidence-Plane review-gate · Knowledge-Reservoirs · §A authority-owns-rules | "our human intuition about what's good data… really not useful" [33:01-33:10] | PARTIAL | absent | soft (vs authority-authors-evals 230) | vocabulary | watch |
| 14 | Safety-first process = dev+deploy are one loop | Link build and operate; production traces/corrections continuously update evals/corpus/policy | Build-OS + REV-199 (MAJOR) · CNS · Agent-Work-Protocol · thesis §8 loops | "safety first process that links development and deployment" [27:34] | AFFIRM | absent | none | spine | watch |

**Build column receipts (grep):** `rg -i "semantic.anomal|semantic.safety|recovery.set|data.attribution|influence.function|data.flywheel|reasoning.latency|fast.slow"` over `app lib components scripts supabase` → **0 matches** (all 14 mechanisms uncoded). Only adjacent echo: `lib/ai/governancePolicy.ts` (`minConfidenceForAutofill: 0.4`, `patientVisibilityRequiresReviewedAccepted`, `clampConfidence`) + `lib/ai/chartReviewEngine.ts` + `processChartAiReviewJob.ts` = a generic **confidence-gate + human-review-before-patient-visibility** pattern (candidate≠commit in one domain), which is a *partial real-world echo* of clusters 1/4/6/8 but NOT a runtime anomaly monitor, fast-slow tier, recovery-set menu, or attribution estimator. Net: **doctrine=AFFIRM/PARTIAL · build=absent** across the board (the wave's dominant pattern).

### B. Net-new primitives — `name — meaning — EXISTS-AS`  *(all labeled **dedup-pending, Opus-main verifies**; candidate over-flag OK; nothing asserted as committed)*

- `semantic_anomaly_detection` — runtime monitor for **non-adversarial** contextual misreads: ordinary/valid inputs that are dangerous because of their *relationship/context* (e.g. "no code" in a note vs code-status in orders; DOAC in MAR vs "hold anticoagulation" in course) — **EXISTS-AS: net-new (STRONGEST). Distinct from 205 `promptware_kill_chain`/`content_authority_class` (those = *adversarial* injection); this = benign-but-wrong-in-context. Complements, does not duplicate, 205. dedup-pending.**
- `counterfactual_data_attribution` — a causal estimator (influence functions / policy-gradient / CUPID) for *which* training/context/source sample raises or lowers downstream outcome — **EXISTS-AS: net-new (STRONGEST, method-level). Sharpens Build-OS "curate-not-accumulate" + 230 `data-quality-by-outcome` + 216 reflexive loop + 232 `agent_ready_unstructured_data_substrate` with an actual causal MECHANISM none of 201–239 named. dedup-pending.**
- `fast_slow_guardrail` — runtime pattern: cheap fast monitor flags anomaly for reactivity → slow strong reasoner selects the intervention — **EXISTS-AS: net-new pattern; partial exists-as 206 model-routing/tiering + 8 detection-vs-judgment tiers. Distinct because it couples DETECTION-tier to INTERVENTION-tier under a latency contract. dedup-pending.**
- `governed_recovery_set` — a predefined, feasibility-checked menu of allowed safety interventions the AI may choose from when an anomaly fires (proceed / ask-for-source / cite-uncertainty / route-to-provider / hold / draft-only / require-approval / conservative-plan / open-discrepancy / mark-undetermined) — **EXISTS-AS: partial exists-as `capability_envelope` + `autonomy_level` + 210 `control_transition_protocol`; net-new SHARPENING = the "constrained multiple-choice fallback menu" framing. dedup-pending.**
- `reasoning_latency_budget` — explicit per-workflow budget for how long the system may wait for deeper reasoning before fallback/escalation, with graceful degradation while waiting — **EXISTS-AS: partial exists-as 204 `inference_budget_policy`/`context_memory_budget` + 220 `recursive_runtime_budget`; net-new DIMENSION = *time/latency* (vs cost/memory) + graceful-degrade-while-reasoning. dedup-pending.**
- `component_confidence_not_composed_safety` — PRINCIPLE: per-component confidence (fluent text, correct extraction) does not guarantee the composed workflow is safe — **EXISTS-AS: partial exists-as candidate≠commit + `ci_verification_gate`/`deterministic_task_verifier` (215) + T6 risk-tiered ladder; net-new as a NAMED safety principle. dedup-pending.**

**Explicitly NOT net-new (reconcile, do not re-mint):**
- `deployment_data_flywheel` (Knox candidate) → **EXISTS-AS: REV-199 Reflexive-Build-Substrate + 201 "company-owned governed traces/outcomes = flywheel" + 216 `trace_to_issue_to_fix_eval_loop` + 222 product-trace→eval.** This source is a strong AFFIRMER + robotics articulation, NOT a new mechanism.
- `data_attribution_for_context` (Knox candidate, generic) → folded into `counterfactual_data_attribution` above (keep the causal/counterfactual specificity; the generic "attribution" name overlaps 230/232).

### C. Reread flags
- **None for metadata** — operator metadata block present at top of §3 Review 001; §0 lifted verbatim (`identity_confidence: high_from_operator_metadata`; url ✅, dates ✅). No `§3-C reread` needed.
- **Robotics→care transfer caveat (import discipline, not a defect):** clusters 1/6 carry a *formal safety guarantee* in robotics (control-invariant recovery set is provably reachable). OMNI has **no** formal reward/dynamics model for care → import the *architecture* (monitor→fast/slow→recovery-menu→human-commit→flywheel), **reject** the *guarantee*. Flagged for trifecta.
- **Soft tension for Opus-main (candidate, dedup-pending):** **anomaly ≠ danger** — the fast detector flags *difference from prior experience*, not *hazard* (speaker: "only telling you if something… is different than what you saw before, not necessarily if it's dangerous" [34:12-34:19]). Maps onto detection-vs-judgment tiers (cluster 8) + T6 risk-tiered verifier ladder; may warrant its own tension row (semantic-anomaly-flag vs care-danger-classification) when folded.

### D. One-line hard read + strongest OMNI line
- **Hard read:** A trustworthy autonomous system is not one that never fails — it is one that **detects when it is leaving known-safe territory, chooses from a constrained set of safe interventions, budgets time to reason, escalates to human authority when needed, and converts every deployment failure into governed learning signal** — and OMNI already believes all of this as doctrine; the gap is BUILD, plus two genuinely new legs (semantic-anomaly monitoring + counterfactual data attribution).
- **Strongest OMNI line:** *"systems that know what they can and cannot do, recover safely when conditions become too challenging or hazardous, and whose model behavior we can interpret, diagnose, and improve"* [4:34-4:49] — this is OMNI's **AI-substrate + authority-gate doctrine restated by a roboticist**: clinical/business AI is trusted not because it is smart but because it is monitored, bounded, recoverable, explainable, and improved through governed deployment evidence.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: **§B AI-substrate runtime (MAJOR — fast/slow monitor, detection-vs-judgment tiers, latency budget) · Build-OS + REV-199 (MAJOR — deployment-data flywheel, counterfactual data attribution, curate-not-accumulate) · §C Security-runtime-monitor (MAJOR — semantic-anomaly monitoring, a NEW non-adversarial dimension complementing 205 promptware) · CNS (medium — anomaly→recovery-set→human-commit coordination) · Clinical-Safety (medium — composed-workflow safety, governed fallback, care fail-closed) · Knowledge-Reservoirs + D7 + Evidence-Plane (medium — data-centric debugging, attribution-scored curation) · Observation (medium — semantic contradiction detection) · Agent-Work-Protocol / Polaris (medium — reasoning budget, verification-not-vibes)** · promotion: **watch** (proposes only; net-new primitives dedup-pending Opus-main; `GRD-036`)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-08` — Opus extraction subagent: §0/§0.1 lifted verbatim from operator metadata (`identity_confidence: high_from_operator_metadata`; url✅/dates✅); proposed slug `rohan-sinha-trustworthy-autonomy-runtime-monitors` (file NOT renamed); §3 Review 003 formal deep extraction written (14 concept clusters, SPINE/full_semantic; grep-verified build=absent across all mechanisms, only generic `lib/ai/governancePolicy.ts` confidence-gate/human-review echo); 6 net-new candidates flagged dedup-pending (**`semantic_anomaly_detection`**, **`counterfactual_data_attribution`**, `fast_slow_guardrail`, `governed_recovery_set`, `reasoning_latency_budget`, `component_confidence_not_composed_safety`; `deployment_data_flywheel` reconciled to REV-199); §4 pointers filled (promotion=watch). **Status → `analyzed`.** Registry/coverage/anchor NOT edited (deferred to Opus-main fold per task contract).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.
